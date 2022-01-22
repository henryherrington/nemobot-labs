<h1 align="center">Nemobot Labs</h1>
<div align="center">
  <img src="https://raw.githubusercontent.com/henryherrington/nemobot-labs/main/readme-images/nemobot-labs-chat.png" height="75%" width="75%" margin="auto">
  <p>The main Nemobot Labs page, with an updated interface to chat with Nemobot</p>
  <img src="https://raw.githubusercontent.com/henryherrington/nemobot-labs/main/readme-images/nemobot-labs-editor.png" height="75%" width="75%" margin="auto">
  <p>A new series of code editors to customize Nemobot program code. Each pane corresponds to a different section of a standard Nemobot program (start, state, other).</p>
  <img src="https://raw.githubusercontent.com/henryherrington/nemobot-labs/main/readme-images/nemobot-labs-about.png" height="75%" width="75%" margin="auto">
  <p>The new Nemobot Labs about page.</p>
</div>

## About
Nemobot Labs is a platform that allows users to learn JavaScript by creating their own chatbot programs to be executed by Nautilus Software Technologies' Nemobot chatbot. I worked on this project part time during the summer of 2021, expanding on my work with Nemobot the previous summer. I built this version of Nemobot using React to drastically improve scalability and maintainability. Nemobot Labs also includes on online code editor in which students can write programs to then be immediately run on Nemobot. All of this experimental student code resides exclusivley on the client side so that it cannot interfere with server operations.

## Set up
1) Clone or download the repository
2) Install dependencies with npm install
3) Import the Nemobot agent into your Dialogflow Essentials console using the provided nemo-bot.zip file.
4) Set up Google Cloud credentials in an environment variable to support Google Dialogflow and access to your Nemobot agent. Follow the instructions [here](https://cloud.google.com/docs/authentication/getting-started) for more details on setting up GC credentials.
5) Run the Express server with `npm start` in the backend folder
6) Run the React frontend with `npm start` in the frontend folder
