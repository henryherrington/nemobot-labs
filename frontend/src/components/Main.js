import './Main.css'

import ChatBox from './ChatBox'

function Main(props) {
    return (
        <div className="main">
            <ChatBox socket={props.socket}></ChatBox>
        </div>
    )
}

export default Main