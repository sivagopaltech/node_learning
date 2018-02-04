const path = require("path");
const express = require("express");
const socketIO = require("socket.io")
const http = require("http");

const {isRealString} = require('./utils/validation');

var publicPath = path.join(__dirname, "../public");
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var {generateMessage, generateLocationMessage} = require("./utils/message");
const {Users} = require("./utils/users");

var users = new Users();

app.use(express.static(publicPath));

io.on("connection", (socket) => {
    console.log("New connection");

    socket.on('join', (params, callback) => {
        if (!isRealString(params.name) || !isRealString(params.room)) {
            return callback('Name and room name are required.');
        }
        socket.join(params.room);
        users.removeUser(socket.id);
        users.addUser(socket.id, params.name, params.room);
        io.to(params.room).emit("updateUserList", users.getUserList(params.room));
        socket.emit('newMessage', generateMessage("admin", "Welcone to the chat app")); 
        socket.broadcast.to(params.room).emit('newMessage', generateMessage("admin", "New user joined the chat"));
    });

    
 
    socket.on("createMessage", (message, callback) => {
        io.emit('newMessage', generateMessage(message.from, message.text)); 
        callback("got it");
    });

    socket.on("createLocationMessage", (coords, callback) => {
        io.emit('newLocationMessage', generateLocationMessage("admin", coords.latitude, coords.longitude)); 
        callback("got it");
    });

    socket.on("disconnect", () => {
        var user = users.removeUser(socket.id);
        if(user) {
            io.to(user.room).emit("updateUserList", users.getUserList(user.room));
            io.to(user.room).emit("updateUserList", 'newMessage', generateMessage("admin", `${user.name} left the room`));
        }
    });
});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
})