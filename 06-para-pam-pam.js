var express = require('express');
var app = express();

app.put('/message/:id', function(req, res){
  var id = req.params.id;

  var value = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');

  res.send(value);

});

app.listen(process.argv[2], console.log("server has started!"));