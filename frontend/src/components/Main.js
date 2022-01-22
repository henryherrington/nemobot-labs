import { useState } from 'react'
import './Main.css'

import ChatBox from './ChatBox'
import CodeBox from './CodeBox'
import IconButton from './IconButton'

import bubblesort from '../programs/bubblesort'

function Main(props) {

    const [showCodeBox, setShowCodeBox] = useState(false)
    const [program, setProgram] = useState(bubblesort)

    return (
        <div className="main">
            {showCodeBox ?
                <div className="code-box-container">
                    <CodeBox
                        closeCodeBox = {() => setShowCodeBox(false)}
                        program={program}
                        setProgram={setProgram}
                    ></CodeBox>
                </div>
            :   <></>
            }
            <div className="chat-box-container">
                <ChatBox
                    socket={props.socket}
                    program={program}
                ></ChatBox>
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

/*
------ programs ------
[
{
    'title': "---",
    'start': "---",
    'state': "---"
}
]
*/