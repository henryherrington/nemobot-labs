import './CodeBoxChunk.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from '@codemirror/theme-one-dark';

function CodeBoxChunk(props) {

    return (
        <div className="code-box-chunk">
            <div className="chunk-title">
                {props.title}
            </div>
            <CodeMirror
                value={props.code}
                height="calc(33vh - 48px)"
                width="min(800px, 50vw)"
                extensions={[javascript({ jsx: true })]}   
                onChange={(value, viewUpdate) => {
                    props.updateCode(value)
                }}
                theme={oneDark}
                className="code-mirror"
                lineWrapping="true"
            />
        </div>
    )
}

export default CodeBoxChunk