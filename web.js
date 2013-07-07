var express = require('express');
var fs = require('fs');
var buffer = require('buffer');

var infile = "index.html";
var buf = new Buffer(100);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 
  fs.readFile(infile, 'utf-8', function (err, data) {
   if (err) {
    return console.log(err);
   }
  buf = data;
  });
  response.send(buf.toString("utf-8", 0, 29));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
