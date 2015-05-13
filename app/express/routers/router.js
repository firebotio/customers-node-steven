var homeController = require("../controllers/home_controller");

module.exports = function(app) {
  app.route("/").get(homeController.index);
};
