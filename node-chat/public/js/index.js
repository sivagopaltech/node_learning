var socket = io();
socket.on('connect', function(){
    console.log("connected to server");
    socket.emit('createEmail', {
        to: "b@b.com",
        text: "this is text"
    });
    
});
socket.on("disconnect", function() {
    console.log("Disonnected from server");
});

socket.on("newEmail", function(email) {
    console.log("new email", email);
});