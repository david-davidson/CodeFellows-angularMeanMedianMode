'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Lookin legit on port %s', port);
});