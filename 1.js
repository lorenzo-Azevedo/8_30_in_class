var http1 = require("http");
var port1 = 7000;
var server1 = http1.createServer(handleRequest);

function handleRequest(request, response){
        response.end("Nice thing" + request.url)
}

server1.listen(port1, function() {
    console.log("works" + port1)
})

var http2 = require("http");
var port2 = 7500;
var server2 = http2.createServer(handleRequest);

function handleRequest(request, response){
        response.end("mean thing" + request.url)
}

server2.listen(port2, function() {
    console.log("works" + port2)
})