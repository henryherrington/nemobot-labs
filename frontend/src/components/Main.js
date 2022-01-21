import { useState } from 'react'
import './Main.css'

import ChatBox from './ChatBox'
import CodeBox from './CodeBox'
import IconButton from './IconButton'

function Main(props) {

    const [showCodeBox, setShowCodeBox] = useState(false)

    return (
        <div className="main">
            {showCodeBox ?
                <div className="code-box-container">
                    <CodeBox
                        closeCodeBox = {() => setShowCodeBox(false)}
                    ></CodeBox>
                </div>
            :   <></>
            }
            <div className="chat-box-container">
                <ChatBox socket={props.socket}></ChatBox>
            </div>
            <div className="code-box-toggle-button">
                {showCodeBox
                    ? <></>
                    : <IconButton
                        icon="code"
                        function={() => setShowCodeBox(true)}
                    ></IconButton>
                }
            </div>
        </div>
    )
}

export default Main