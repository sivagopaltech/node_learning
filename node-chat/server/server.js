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
        from: "admin",
        message: "Welcone to the chat app"
    }); 

    socket.broadcast.emit('newMessage', {
        from: "admin",
        text: "New user joined the chat",
        createdAt: new Date().toString()
    });

    socket.on("createMessage", (message) => {
        console.log("create message", message);
        

        // io.emit('newMessage', {
        //     from: "a@a.com",
        //     text: "hello",
        //     createdAt: new Date().toString()
        // });

        socket.broadcast.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().toString()
        });
    });

});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
})