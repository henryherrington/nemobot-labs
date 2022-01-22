import './CodeBoxChunk.css'

function CodeBoxChunk(props) {

    return (
        <div className="code-box-chunk">
            <div className="chunk-title">
                {props.title}
            </div>
            <textarea
                className="code-text-area"
                value={props.code}
                onInput={e => props.updateCode(e.target.value)}
            ></textarea>
        </div>
    )
}

export default CodeBoxChunk