import './CodeBox.css'
import IconButton from './IconButton'
import CodeBoxChunk from './CodeBoxChunk'

function CodeBox(props) {

    function updateProgram(code, area) {
        if (!(area == "start" || area == "state" || area == "other")) return

        let newProgram = {...props.program}
        newProgram[area] = code
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
            <CodeBoxChunk
                className="code-box-chunk"
                title="start"
                code={props.program.start}
                updateCode={(code) => updateProgram(code, "start")}
            ></CodeBoxChunk>
            <CodeBoxChunk
                className="code-box-chunk"
                title="state"
                code={props.program.state}
                updateCode={(code) => updateProgram(code, "state")}
            ></CodeBoxChunk>
            <CodeBoxChunk
                className="code-box-chunk"
                title="other"
                code={props.program.other}
                updateCode={(code) => updateProgram(code, "other")}
            ></CodeBoxChunk>
        </div>
    )
}

export default CodeBox