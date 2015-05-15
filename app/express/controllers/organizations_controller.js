exports.new = function(req, res) {
  res.render("organizations/new", {
    body_class: "organizations-new",
    environment: process.env.NODE_ENV,
    page_title: "Sign Up"
  });
};
