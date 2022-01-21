import './Header.css';

import IconButton from './IconButton';

function Header(props) {
    return (
        <div className="header">
            <div className="spacer"></div>
            <p className="title">Nemobot</p>
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

