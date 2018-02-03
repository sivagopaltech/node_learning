var socket = io();
socket.on('connect', function(){
    console.log("connected to server");
    socket.emit('createMessage', {
        to: "b@b.com",
        text: "this is text"
    });
    
});

socket.on("newMessage", function(email) {
    console.log("new message", email);
});