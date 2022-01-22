import './IconButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faGlobe, faQuestion, faRobot } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function IconButton(props) {
    const smallIcons = ["facebook", "linkedin", "github", "globe", "robot"]
    let size = "sm"
    if (smallIcons.includes(props.icon)) size = "lg"

    const iconCodes = {
        "robot": faRobot,
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

    let classes = "icon-button-container"
    if (props.size == "small") classes += " small" 

    return (
        <div className={classes} onClick={props.function}>
            <FontAwesomeIcon icon={displayIcon} size={size}></FontAwesomeIcon>
        </div>
    )
}

export default IconButton