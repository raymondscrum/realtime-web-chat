var socket = io.connect();

socket.on('connect', function () {
    socket.send('A client connected.');
});

socket.on('message', function (message) {
    $('div#messages').append($('<p>'), message);
});

socket.on('disconnect', function () {
    console.log('disconnected');
});


$(document).ready(function(){
    $('#btn_send').click(function (event) {
	socket.send($('#txt_msg').val());
	$('#txt_msg').val('');
    });
});

