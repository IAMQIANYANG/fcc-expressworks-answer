var express = require('express');
var app = express();
var path = require('path');

/*use file added manually*/
app.use('/', express.static(path.join(__dirname, 'public')));

/* use file provided*/
// app.use('/', express.static(process.argv[3]));


app.listen(process.argv[2], console.log("server has started!"));