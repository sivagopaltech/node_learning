var socket = io();
socket.on('connect', function(){
    console.log("connected to server");
    
});

socket.on("newMessage", function(message) {
    console.log("new message", message);
});