'use strict';

var app = require('./lib/express')();
var http = require('http').Server(app);

http.listen(8085, function() {
  console.log('io server @ ' + http.address().port);
  console.log('express server @ ' + http.address().port);
});