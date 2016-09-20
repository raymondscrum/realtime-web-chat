var express = require('express');           // http://expressjs.com/
var path = require('path');                 // base package of nodejs -> https://nodejs.org/api
var http = require('http');                 // base package of nodejs -> https://nodejs.org/api
var bodyParser = require('body-parser');    // https://github.com/expressjs/body-parser

var routes = require('./routes');

// setting up express
var app = express();
var server = http.createServer(app);

// setting up socket.io
var io = require('socket.io').listen(server);       // http://socket.io/

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
        // TODO send broadcast message to all clients
    });
});
