import './CodeBoxChunk.css'

function CodeBoxChunk(props) {

    return (
        <div className="code-box-chunk">
            {props.title}
            <textarea
                className="code-text-area"
                value={props.code}
                onInput={e => props.updateCode(e.target.value)}
            ></textarea>
        </div>
    )
}

export default CodeBoxChunk