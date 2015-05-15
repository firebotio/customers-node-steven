var Data = require("../../Data");

exports.index = function(req, res) {
  res.render("home/index", {
    body_class: "home-index",
    page_title: Data.layout.page_title
  });
};
