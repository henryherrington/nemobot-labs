import './About.css'
import IconButton from './IconButton'

function About() {
    return (
        <div className="about">
            <div className="about-container">
                <h1>About</h1>
                <div className="about-blurb">
                    Nemobot is an online chatbot that can help you develop your computer science and artificial intelligence skills by playing games.
                    Just ask Nemobot to see which games are offered, or log in to program your own games.
                    Nemobot uses Natural Language Processing to understand many different english phrases.
                    Nemobot is also available on Facebook messenger.
                    <br></br><br></br>
                    Nemobot was created in 2017 by Nautilus Software Technologies Limited, and is being updated continuously through 2022.
                    Visit our website at https://nautilustech.ai/, or email us at nautilus@nautilustech.ai.
                </div>
            </div>
            <div className="footer-blurb">
                <div className="footer-icons">
                    <IconButton
                        icon="globe"
                        function={() => window.open("https://nautilustech.ai/", "_blank")}
                    ></IconButton>
                    <IconButton
                        icon="facebook"
                        function={() => window.open("https://www.facebook.com/Nemo-Bot-454163798317367/", "_blank")}
                    ></IconButton>
                    <IconButton
                        icon="linkedin"
                        function={() => window.open("https://www.linkedin.com/company/nautilus-ai/", "_blank")}
                    ></IconButton>
                    <IconButton
                        icon="github"
                        function={() => window.open("https://github.com/henryherrington/nemobot-react", "_blank")}
                    ></IconButton>
                </div>
                &#169; 2022 Nautilus Software Technologies Limited<br></br>
                All rights reserved.
            </div>
        </div>
    )
}

export default About