var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var data = fs.readFileSync('index.html');
    var buf = new Buffer(data);
    var out = buf.toString('utf-8');
    //console.log(out);
    response.send(out);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Listening on " + port);
});