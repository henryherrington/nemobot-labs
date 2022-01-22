import './ChatButton.css'

function ChatButton(props) {

    return (
        <div className="chat-button" onClick={props.payload}>
            {props.title}
        </div>
    )
}

export default ChatButton