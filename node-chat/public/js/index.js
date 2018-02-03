var socket = io();
socket.on('connect', function(){
    console.log("connected to server");
    
});

socket.on("newMessage", function(message) {
    console.log("new message", message);
    var li = $("<li></li>");
    li.text(`${message.from}: ${message.text}`);
    $("#messages").append(li);
});



$("#messageForm").on("submit", function(e){
    e.preventDefault();
    socket.emit("createMessage", {
        from: "User",
        text: $("#message").val()
    }, function(data){
        console.log(data);
    });
});