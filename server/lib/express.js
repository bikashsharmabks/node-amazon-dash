var express = require('express'),
	path = require('path'),	
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');	

module.exports = function(config) {
	var app = express();
	var rootPath = path.normalize(__dirname + '/../../public');
	console.log(rootPath);
	app.use('/', express.static(rootPath));

	// log every request to the console
	app.use(morgan('dev'));

	// parse application/json
	app.use(bodyParser.json());

	// simulate DELETE and PUT
	app.use(methodOverride());

	app.all('*', function(req, res, next) {
  		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  		next();
 	});

	return app;
}