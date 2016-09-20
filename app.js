// packages
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

var routes = require('./routes');

// setting up express
var app = express();
var server = http.createServer(app);

// setting up socket.io
var io = require('socket.io').listen(server);

// view options
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('view options', { layout: false });

// static content being served
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', routes.index);


var appPort = 3000;
server.listen(appPort);
console.log("Server is listening on port " + appPort);
console.log("Your app should now be running on http://localhost:"+ appPort + "/");

io.on('connection', function (socket) {
    socket.on('message', function (msg) {
        io.emit('message', msg);
    });
});
