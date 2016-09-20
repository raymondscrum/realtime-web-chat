// For more information about Socket.io i refer you to http://socket.io/
var socket = io.connect();

socket.on('connect', function () {
    // TODO send message to server that a new client is connected
});

socket.on('message', function (message) {
    // TODO Process the broadcast messages from the server, by showing
    // showing them in the chat window
});

socket.on('disconnect', function () {
    // TODO send message to server that a client is disconnected
});


$(document).ready(function(){
    // TODO Send text of input field to server when the button is pressed
});

