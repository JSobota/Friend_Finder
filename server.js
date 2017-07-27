//set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//creates express server and sets up a port
var app = express(); 
var port = process.env.PORT || 3000; 

//body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('app/public'));

//router
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

//Listening to the port that was set up
app.listen(port, () => console.log("Listening on port %s", port));