// Environment variables
process.env.NODE_ENV = process.env.NODE_ENV || "development";

process.env.FIREBOT_API_URL = process.env.FIREBOT_API_URL ||
  "http://localhost:3001";
process.env.FIREBOT_API_VERSION = process.env.FIREBOT_API_VERSION || "1";
process.env.FIREBOT_APPLICATION_KEY = process.env.FIREBOT_APPLICATION_KEY ||
  "d23de7a7-2fa4-4981-8a0f-878dc4a9a1a2";
process.env.FIREBOT_APPLICATION_ID = process.env.FIREBOT_APPLICATION_ID ||
  "05b030bb5fbf43ecb55744d9fa76e3aa";

// App
var express = require("express");
var exphbs  = require("express-handlebars");
var app     = express();

// Logging
var morgan = require("morgan");

// Port
var port = process.env.PORT || 8000;

var moment = require("moment");
var hbs = exphbs.create({
  defaultLayout: "layout",
  layoutsDir: "./app/express/views/layouts",
  partialsDir: "./app/express/views/partials",
  helpers: {
    year: function() {
      return moment().format("YYYY");
    }
  }
});
app.set("views", "./app/express/views");
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Search for static files in this folder
app.use(express.static(__dirname + "/public"));

// Logging
app.use(morgan("combined"));

// Router
require("./app/express/routers/router")(app);

app.listen(port, function() {
  console.log("Server listening on port " + port + " " + process.env.NODE_ENV);
});

module.exports = app;
