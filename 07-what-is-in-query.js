var express = require('express');
var app = express();

app.get('/search', function(req, res) {
  var queryValue = req.query;
  res.send(queryValue);
});

app.listen(process.argv[2], console.log("server has started!"));