var client = require("./client");

var FirebotService = function() {
  endpoint = function(resource) {
    return client.apiUrl + "/" + client.apiVersion + "/services/" + resource;
  };

  this.email = function(data, callback) {
    $.ajax({
      data: data,
      headers: client.headers,
      method: "post",
      url: endpoint("email"),
      success: function(response) {
        if (callback) {
          callback(response);
        }
      }
    });
  };
};

module.exports = new FirebotService();
