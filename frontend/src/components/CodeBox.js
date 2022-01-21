import './CodeBox.css'
import IconButton from './IconButton'

function CodeBox(props) {
    return (
        <div className="code-box">
            <div className="code-box-close-button">
                <IconButton
                    icon="close"
                    function={props.closeCodeBox}
                ></IconButton>
            </div>
            code box
        </div>
    )
}

export default CodeBox