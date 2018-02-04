var socket = io();
socket.on('connect', function(){
    console.log("connected to server");
    
});

socket.on("newMessage", function(message) {
    var formattedTime = moment(message.createdAt).format("h:mm a");
    var template = $("#message-template").html();
    var html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        createdAt: formattedTime
    });
    $("#messages").append(html);
});

socket.on("newLocationMessage", function(message) {
    var formattedTime = moment(message.createdAt).format("h:mm a");
    var template = $("#location-message-template").html();
    var html = Mustache.render(template, {
        url: message.url,
        from: message.from,
        createdAt: formattedTime
    });
    $("#messages").append(html);
});



$("#message-form").on("submit", function(e){
    e.preventDefault();
    socket.emit("createMessage", {
        from: "User",
        text: $("#message").val()
    }, function(data){
        $("#message").val("");
    });
});

$("#send-location").on("click", function(){
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