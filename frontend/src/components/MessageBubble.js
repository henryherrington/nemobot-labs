import './MessageBubble.css'

function MessageBubble(props) {

    return (
        <div className={`message-${props.type}-container`}>
            <div className={`message message-${props.type}`}>
                {props.message}
            </div>
        </div>
    )
}

export default MessageBubble