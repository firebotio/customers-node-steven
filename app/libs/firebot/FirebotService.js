var FirebotClient = require("./FirebotClient");

var endpoint = function(resource) {
  return FirebotClient.apiUrl + "/" +
         FirebotClient.apiVersion + "/services/" + resource;
};

exports.email = function(data, callback) {
  $.ajax({
    data: data,
    headers: FirebotClient.headers,
    method: "post",
    url: endpoint("email"),
    success: function(response) {
      if (callback) {
        callback(response);
      }
    }
  });
};
