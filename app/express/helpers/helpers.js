var moment = require("moment");

module.exports = function(app) {
  app.locals.environment = function() {
    return process.env.NODE_ENV;
  };
  app.locals.year = function() {
    return moment().format("YYYY");
  };
};
