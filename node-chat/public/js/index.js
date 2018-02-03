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

$("#sendLocation").on("click", function(){
    if(!navigator.geolocation) {
        return alert("No geo location");
    }

    navigator.geolocation.getCurrentPosition(function(position){
        socket.emit("createLocationMessage", {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, function(data){
            console.log(data);
        });
    }, function () {
        alert("unable to fetch location");
    });
});