const path = require("path");
const express = require("express");
const socketIO = require("socket.io")
const http = require("http");

var publicPath = path.join(__dirname, "../public");
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var {generateMessage} = require("./utils/message");

app.use(express.static(publicPath));

io.on("connection", (socket) => {
    console.log("New connection");
    socket.emit('newMessage', generateMessage("admin", "Welcone to the chat app")); 

    socket.broadcast.emit('newMessage', generateMessage("admin", "New user joined the chat"));

    socket.on("createMessage", (message, callback) => {
        console.log("create message", message);
        

        io.emit('newMessage', generateMessage(message.from, message.text)); 
        
        // socket.broadcast.emit('newMessage', generateMessage(message.from, message.text));
        callback("got it");
    });

});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
})