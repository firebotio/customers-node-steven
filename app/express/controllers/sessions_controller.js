exports.create = function(req, res) {
  console.log(req.body);
  res.json({
    token: req.body,
    text: "yo"
  });
};

exports.new = function(req, res) {
  res.render("sessions/new", {
    body_class: "sessions-new",
    page_title: "Login"
  });
};
