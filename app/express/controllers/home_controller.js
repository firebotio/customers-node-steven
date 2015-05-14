var Data = require("../../Data");

exports.index = function(req, res) {
  res.render("home/index", {
    environment: process.env.NODE_ENV,
    page_title: Data.layout.page_title
  });
};
