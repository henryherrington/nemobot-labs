import './IconButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faGlobe, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function IconButton(props) {
    const smallIcons = ["facebook", "linkedin", "github", "globe"]
    let size = "sm"
    if (smallIcons.includes(props.icon)) size = "lg"

    const iconCodes = {
        "globe": faGlobe,
        "facebook": faFacebookF,
        "linkedin": faLinkedin,
        "github": faGithub,
        "code": faCode,
        "close": faTimes,
        "question": faQuestionCircle,
        "comment": faCommentAlt
    }
    let displayIcon
    if (props.icon in iconCodes) {
        displayIcon = iconCodes[props.icon]
    }
    else displayIcon = faQuestionCircle

    return (
        <div className="icon-button-container" onClick={props.function}>
            <FontAwesomeIcon icon={displayIcon} size={size}></FontAwesomeIcon>
        </div>
    )
}

export default IconButton