const express = require("express");
const http = require("http");
const path = require('path')
const socketIo = require("socket.io");
const port = process.env.PORT || 4000;
const app = express();

// app.use(express.static(path.join(__dirname, 'build')))

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

const server = http.createServer(app);

// const io = socketIo(server);

// for development only
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
    console.log("connected: " + socket.id)
    const dialogId = socket.id; // for dialogflow

    socket.on('client message', async (message) => {
        console.log('client message: ' + message)
        io.to(socket.id).emit('server message', 'user', message);

        let dialogFlowResponse = await executeQueries(projectId, dialogId, [message], languageCode);

        if (dialogFlowResponse == "show games") {
            io.to(socket.id).emit('show programs')
        }
        else {
            io.to(socket.id).emit('server message', 'server', dialogFlowResponse);
        }
    })
})

server.listen(4000, () => {
    console.log('listening on *:4000')
});



// ------------ dialogflow ---------------

// projectId: ID of the GCP project where Dialogflow agent is deployed
const projectId = 'nemo-bot-286320';

// languageCode: Indicates the language Dialogflow agent should use to detect intents
const languageCode = 'en';

// Imports the Dialogflow library
const dialogflow = require('@google-cloud/dialogflow');

// Instantiates a session client
const sessionClient = new dialogflow.SessionsClient();

async function detectIntent(
  projectId,
  sessionId,
  query,
  contexts,
  languageCode
) {
  // The path to identify the agent that owns the created intent.
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };

  if (contexts && contexts.length > 0) {
    request.queryParams = {
      contexts: contexts,
    };
  }

  const responses = await sessionClient.detectIntent(request);
  return responses[0];
}

async function executeQueries(projectId, sessionId, queries, languageCode) {
  // Keeping the context across queries let's us simulate an ongoing conversation with the bot
  let context;
  let intentResponse;
  for (const query of queries) {
    try {
      // console.log(`Sending Query: ${query}`);
      intentResponse = await detectIntent(
        projectId,
        sessionId,
        query,
        context,
        languageCode
      );
      console.log('Detected intent from: ' + sessionId);
      // console.log(
      //   `Fulfillment Text: ${intentResponse.queryResult.fulfillmentText}`
      // );
      // Use the context from this response for next queries
      context = intentResponse.queryResult.outputContexts;
      // console.log(intentResponse.queryResult.fulfillmentText);
      return intentResponse.queryResult.fulfillmentText;
    } catch (error) {
      console.log(error);
    }
  }
}
