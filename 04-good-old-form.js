var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.post('/form', function (req, res) {
  var text = req.body.str.split('').reverse().join('');
  res.send(text);

});


app.listen(process.argv[2], console.log("server has started!"));