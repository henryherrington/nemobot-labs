import { useState, useEffect, useRef } from 'react'
import ChatButton from './ChatButton'
import './ChatDisplay.css'
import MessageBubble from './MessageBubble'


function ChatDisplay(props) {

    const [messages, setMessages] = useState([])
    const chatDisplayRef = useRef()

    function runGameStart() {
        console.log("hi")
        eval(props.program.code + "; start(say, sendButton)")
    }

    function runGameState(innerPayload) {
        eval(props.program.code + "; state(innerPayload, say, sendButton)")
    }

    function displayMessage(message, sender) {
        let messageObj = {
            "type": "message",
            "body": message,
            "sender": sender
        }
        setMessages((messages) => [...messages, messageObj])
    }

    function displayButtons(title, buttons) {
        for (var button in buttons) {
            if (typeof buttons[button] == "string") {
                let currString = buttons[button]
                buttons[button] = {
                    "title": currString,
                    "payload": () => displayMessage(currString, "user")
                }
            }
            else {
                let currTitle = buttons[button].title
                let currPayload = buttons[button].payload
                if (currPayload == "restart" || currPayload == "gamestart") {
                    buttons[button].payload = (() => {
                        displayMessage(currTitle, "user")
                        runGameStart()
                    })
                }
                else {
                    buttons[button].payload = (() => {
                        displayMessage(currTitle, "user")
                        runGameState(currPayload)
                    })
                }
            }
        }

        displayMessage(title, "server")
        let buttonsObj = {
            "type": "buttons",
            "body": buttons,
            "sender": "server"
        }
        setMessages((messages) => [...messages, buttonsObj])
    }

    // say message from server
    async function say(message) {
        if (Array.isArray(message)) {
            for (let i = 0; i < message.length; i++) {
                say(message)
            }
        }
        else {
            displayMessage(message, "server")
        }
    }

    async function sendButton(title, buttons) {
        displayButtons(title, buttons)
    }

    useEffect(() => {
        if (!props.socket) return
        props.socket.on('server message', (sender, message) => {
            displayMessage(message, sender)
        })

        props.socket.on('show programs', () => {
            let title = "Select the program you would like to run:"
            let buttons = [{
                "title": props.program.title,
                "payload": "gamestart"
            }]
            displayButtons(title, buttons)
        })

        return () => {
            props.socket.removeAllListeners("server message");
            props.socket.removeAllListeners("show programs");
        }
    }, [props.socket, props.program])

    // automatically scroll chat on new messages
    useEffect(() => {
        chatDisplayRef.current.scrollIntoView({behavior: "smooth"})
    })

    let messageKeyGen = 0;

    return (
        <div className="chat-display">
            {messages.map((message) => (
                (message.type == "message") ?
                <MessageBubble
                    type={(message.sender == "server") ? "other" : "user"}
                    message={message.body}
                    key={messageKeyGen++}
                >
                </MessageBubble>
                : <div className="button-container" key={messageKeyGen++}>
                    {message.body.map((button) => (
                        <ChatButton
                            title={button.title}
                            payload={button.payload}
                            key={messageKeyGen++}
                        ></ChatButton>
                    ))}
                </div>
            ))}
            <div ref={chatDisplayRef}></div>
        </div>
    )
}

export default ChatDisplay