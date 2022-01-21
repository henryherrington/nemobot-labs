import { useState } from 'react'
import './ChatInput.css'

function ChatInput(props) {

    const [chatInput, setChatInput] = useState('')

    function submitChatInput(e) {
        if (chatInput != '') {
            props.socket.emit('client message', chatInput)
            console.log('sent')
            setChatInput('')
        }
        e.preventDefault()
    }

    return (
        <div className="chat-input">
            <form onSubmit={submitChatInput}>
                <input
                    className="chat-form-input"
                    value={chatInput}
                    onInput={e => (setChatInput(e.target.value))}
                    autoComplete="off"
                />
                <button
                    className="chat-form-submit"
                >Send</button>
            </form>
        </div>
    )
}

export default ChatInput