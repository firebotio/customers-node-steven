// Environment
process.env.NODE_ENV = process.env.NODE_ENV || "development";

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
