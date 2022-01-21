import { useState, useEffect } from 'react'
import './ChatDisplay.css'
import MessageBubble from './MessageBubble'

function ChatDisplay(props) {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        console.log("ran")
        if (!props.socket) return
        props.socket.on('server message', (sender, message) => {
            let type = "user"
            if (sender == "server") type = "other"

            let messageObj = {
                "message": message,
                "type": type
            }
            setMessages((messages) => [...messages, messageObj])
        })
    }, [props.socket])

    let messageKeyGen = 0;

    return (
        <div className="chat-display">
            {messages.map((message) => (
                <MessageBubble
                    type={message.type}
                    message={message.message}
                    key={messageKeyGen++}
                >
                </MessageBubble>
            ))}
        </div>
    )
}

export default ChatDisplay