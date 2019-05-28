var http = require('http');

var server = http.Server();

server.on('request', function(request, response) {
    response.write('Hello World!');
    response.end();
} );

server.listen(1337);