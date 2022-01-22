import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons'
import IconButton from './IconButton';

function Header(props) {
    return (
        <div className="header">
            <div className="spacer"></div>
            <div>
                <p className="title">Nemobot Labs</p>
                {/* <FontAwesomeIcon className="title-icon" icon={faFlask} size="lg"></FontAwesomeIcon> */}
            </div>
            <div className="icons-container">
                <div className="icon-container">
                    <IconButton
                        label="Main"
                        icon="comment"
                        function={() => props.setScreenShown("main")}
                    ></IconButton>
                </div>
                <div className="icon-container">
                    <IconButton
                        label="About"
                        icon="question"
                        function={() => props.setScreenShown("about")}
                    ></IconButton>
                </div>
            </div>
        </div>
    );
}

export default Header;

