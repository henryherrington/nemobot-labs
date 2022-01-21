import './Header.css';

import IconButton from './IconButton';

function Header(props) {
    return (
        <div className="header">
            Nemobot
            <div className="icons-container">
                <IconButton
                    label="Main"
                    icon="chat"
                    function={() => props.setScreenShown("main")}
                ></IconButton>
                <IconButton
                    label="About"
                    icon="question"
                    function={() => props.setScreenShown("about")}
                ></IconButton>
            </div>
        </div>
    );
}

export default Header;

