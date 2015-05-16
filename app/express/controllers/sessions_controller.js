exports.new = function(req, res) {
  res.render("sessions/new", {
    body_class: "sessions-new",
    page_title: "Login"
  });
};
