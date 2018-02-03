const path = require("path");
const express = require("express");
const socketIO = require("socket.io")
const http = require("http");

var publicPath = path.join(__dirname, "../public");
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", (socket) => {
    console.log("New connection");

    socket.emit('newMessage', {
        from: "a@a.com",
        text: "hello",
        createdAt: 123
    });

    socket.on("createMessage", (message) => {
        console.log("create message", message);
    });

});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
})