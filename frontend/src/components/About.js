import './About.css'
import IconButton from './IconButton'

function About() {
    return (
        <div className="about">
            <div className="about-container">
                <h1>About</h1>
                <div className="about-blurb">
                    Nemobot Labs is a platform that allows users to learn JavaScript by creating their own chatbot programs.
                    Just ask Nemobot to see which programs are offered, and open the code tab on the left to edit those programs.
                    Nemobot uses Natural Language Processing to understand many different english phrases.
                    Nemobot is also available on Facebook messenger.
                    For more information on how to use Nemobot Labs, visit our <a href="https://github.com/henryherrington/nemobot-react" target="_blank">documentation page</a>.
                    <br></br><br></br>
                    Nemobot was created in 2017 by Nautilus Software Technologies Limited, and is being updated continuously through 2022.
                    Visit our <a href="https://nautilustech.ai/" target="_blank">website</a>, or email us at nautilus@nautilustech.ai.
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
                    <IconButton
                        icon="robot"
                        function={() => window.open("http://34.92.103.169/", "_blank")}
                    ></IconButton>
                </div>
                &#169; 2022 Nautilus Software Technologies Limited<br></br>
                All rights reserved.
            </div>
        </div>
    )
}

export default About