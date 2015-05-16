var FirebotClient = require("./FirebotClient");

var FirebotService = function() {
  endpoint = function(resource) {
    return FirebotClient.apiUrl + "/" +
           FirebotClient.apiVersion + "/services/" + resource;
  };

  this.email = function(data, callback) {
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
};

module.exports = new FirebotService();
