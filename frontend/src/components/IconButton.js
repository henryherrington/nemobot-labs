import './IconButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


function IconButton(props) {
    let displayIcon
    switch (props.icon) {
        case 'question':
            displayIcon = faQuestionCircle
            break;
        case 'main':
            displayIcon = faCommentAlt
            break;
        default:
            displayIcon = faCommentAlt
      }

    return (
        <div className="icon-button-container" onClick={props.function}>
            <FontAwesomeIcon icon={displayIcon} />
        </div>
    )
}

export default IconButton