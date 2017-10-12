// Require the Express Module
var express = require('express');
// Require path
// Not sure if you need the below line in this file. I have it in the mongoose.js file because I path.join 'models' folder
var path = require('path');
// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// Integrate body-parser with our App
app.use(bodyParser.json());

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

// store the function in a variable
// the file below contains all the routes of the app
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});