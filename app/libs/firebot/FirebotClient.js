var development = {
  apiUrl: "http://localhost:3001",
  apiVersion: 1,
  applicationKey: "d23de7a7-2fa4-4981-8a0f-878dc4a9a1a2",
  applicationId: "05b030bb5fbf43ecb55744d9fa76e3aa"
};

var production = {
  apiUrl: "https://api.firebot.io",
  apiVersion: 1,
  applicationKey: "",
  applicationId: ""
};

var options = development;

exports.apiUrl     = options["apiUrl"];
exports.apiVersion = options["apiVersion"];
exports.headers = {
  "X-Firebot-Application-Key": options["applicationKey"],
  "X-Firebot-Application-Id":  options["applicationId"]
};
