/*
var fs = require('fs');
fs.readFile('index.html', function (err, data) {
        if (err) throw err;
        var buffer = data;
        var data1 = buffer.toString("utf-8");
	};
*/
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send(data1);
   response.send('welcome sudhir');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
