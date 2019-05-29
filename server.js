var express = require('express');

var app = express();

app.use(express.static('views'))

app.listen(1337);
/* var server = http.Server();

server.on('request', function (request, response) {
    response.write('Hello World!');
    response.end();
});

server.listen(1337); */