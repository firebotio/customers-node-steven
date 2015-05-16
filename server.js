// Environment variables
require('dotenv').load();
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// App
var express = require("express");
var app     = express();

// Logging
var morgan = require("morgan");

// Port
var port = process.env.PORT || 8000;

app.set("views", "./app/express/views");
app.set("view engine", "jade");

// Helpers
var helpers = require("./app/express/helpers/helpers")(app);

// Search for static files in this folder
app.use(express.static(__dirname + "/public"));

// Logging
app.use(morgan("combined"));

// Session store
var session = require("cookie-session");
app.use(session({ secret: process.env.SECRET || "SECRET" }));

// Parse incoming JSON
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router
require("./app/express/routers/router")(app);

app.listen(port, function() {
  console.log("Server listening on port " + port + " " + process.env.NODE_ENV);
});

module.exports = app;
