var homeController = require("../controllers/home_controller");
var organizationsController = require(
  "../controllers/organizations_controller"
);
var sessionsController = require("../controllers/sessions_controller");

module.exports = function(app) {
  // Root
  app.route("/").get(homeController.index);

  // Organizations
  app.route("/sign-up").get(organizationsController.new);

  // Sessions
  app.route("/login").get(sessionsController.new);
};
