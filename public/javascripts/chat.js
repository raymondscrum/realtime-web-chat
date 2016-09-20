// For more information about Socket.io i refer you to http://socket.io/
var socket = io.connect();

socket.on('connect', function () {
    // send message to server that a new client is connected
});

socket.on('message', function (message) {
    // Process the broadcast messages from the server, by showing
    // showing them in the chat window
});

socket.on('disconnect', function () {
    // send message to server that a client is disconnected
});


$(document).ready(function(){
    // Send text of input field to server when the button is pressed
});

