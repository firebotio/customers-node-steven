exports.new = function(req, res) {
  res.render("organizations/new", {
    body_class: "organizations-new",
    page_title: "Sign Up"
  });
};
