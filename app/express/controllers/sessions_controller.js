exports.create = function(req, res) {
  req.session.token = req.body.password;
  res.json({
    password: req.session.token
  });
};

exports.new = function(req, res) {
  res.render("sessions/new", {
    body_class: "sessions-new",
    page_title: "Login"
  });
};
