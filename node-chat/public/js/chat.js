function scrollToBottom () {
    var messages = $('#messages');
    var newMessage = messages.children('li:last-child')
    var clientHeight = messages.prop('clientHeight');
    var scrollTop = messages.prop('scrollTop');
    var scrollHeight = messages.prop('scrollHeight');
    var newMessageHeight = newMessage.innerHeight();
    var lastMessageHeight = newMessage.prev().innerHeight();
  
    if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
      messages.scrollTop(scrollHeight);
    }
  }

var socket = io();
socket.on('connect', function(){
    console.log("connected to server");
    var params = $.deparam(window.location.search);
    socket.emit('join', params, function (err) {
        if (err) {
          alert(err);
          window.location.href = '/';
        } else {
          console.log('No error');
        }
      });
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
    scrollToBottom();
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
    scrollToBottom();
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