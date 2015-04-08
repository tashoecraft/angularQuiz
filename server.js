// This page is based off the CRUD app done in the book The Mean Machine, only slight changes for
// this project have been done

// Calling all required packages
var express    = require('express');		// call express
var app        = express();
var bodyParser = require('body-parser');
var morgan     = require('morgan'); 		// used to log requests
var mongoose   = require('mongoose');
var config 	   = require('./config');
var path 	   = require('path');

// body parser allows getting information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// log all requests to the console 
 app.use(morgan('dev'));

// connect to our database (hosted on mongolab)
mongoose.connect(config.database);

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

// API ROUTES ------------------------
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

// SEND USERS TO FRONTEND ------------
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// START THE SERVER
app.listen(config.port);
console.log('Magic happens on port ' + config.port);