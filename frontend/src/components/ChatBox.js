import './ChatBox.css'
import ChatDisplay from './ChatDisplay'
import ChatInput from './ChatInput'

function ChatBox(props) {
    return (
        <div className="chat-box">
            <ChatDisplay
                socket={props.socket}
                program={props.program}    
            ></ChatDisplay>
            <ChatInput socket={props.socket}></ChatInput>
        </div>
    )
}

export default ChatBox

