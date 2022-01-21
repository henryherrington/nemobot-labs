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

    socket.on('client message', (message) => {
        console.log('client message: ' + message)
        io.to(socket.id).emit('server message', 'user', message);
        io.to(socket.id).emit('server message', 'server', 'good point');
    })
})

server.listen(4000, () => {
    console.log('listening on *:4000')
});

