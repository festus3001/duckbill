
// https://github.com/eddywashere/node-stripe-membership-saas/blob/master/server/controllers/passwords-controller.js
// http://www.programwitherik.com/setup-your-ember-project-with-node/

/*
npm install --save-dev express
npm install --save-dev mongoose
npm install --save-dev stripe
npm install --save-dev body-parser
*/



var express = require('express');
var mongoose = require('mongoose');

// modules
var express        = require('express');  
var app            = express();
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


stripeApiSecretKey = process.env.STRIPE_SECRET_KEY;
stripeApiPublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;

console.log(stripeApiSecretKey);

// set our port
var port = process.env.NODE_PORT;
console.log(port);

// set the static files location 
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app); // configure our routes

// startup our app at http://localhost:3000
app.listen(port);


// expose app
exports = module.exports = app;
