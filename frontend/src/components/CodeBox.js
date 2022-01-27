import './CodeBox.css'
import IconButton from './IconButton'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from '@codemirror/theme-one-dark';

function CodeBox(props) {

    function updateProgram(code) {
        let newProgram = {...props.program}
        newProgram["code"] = code
        props.setProgram(newProgram)
    }

    return (
        <div className="code-box">
            <div className="code-box-header">
                {props.program.title + ".js"}
            </div>
            <div className="code-box-close-button">
                <IconButton
                    icon="close"
                    size="small"
                    function={props.closeCodeBox}
                ></IconButton>
            </div>
            <div className="code-box-chunk">
            <CodeMirror
                value={props.program["code"]}
                height="calc(100vh - 80px)"
                width="min(800px, 50vw)"
                extensions={[javascript({ jsx: true })]}   
                onChange={(value, viewUpdate) => {
                    updateProgram(value)
                }}
                theme={oneDark}
                className="code-mirror"
            />
            </div>
        </div>
    )
}

export default CodeBox