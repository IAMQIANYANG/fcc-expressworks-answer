var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], (err, data) => {
    if (err) {
      return res.send(500);
    }
    res.send(JSON.parse(data))
  })
});

app.listen(process.argv[2], console.log("server has started!"));