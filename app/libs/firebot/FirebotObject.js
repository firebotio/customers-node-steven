var FirebotClient = require("./FirebotClient");

var FirebotObject = function() {
  endpoint = function(className, objectId) {
    var baseUrl = FirebotClient.apiUrl + "/" +
                  FirebotClient.apiVersion + "/objects/" + className;
    if (objectId) {
      baseUrl += "/" + objectId;
    }
    return baseUrl;
  };

  this.create = function(className, data, callback) {
    $.ajax({
      data: data,
      headers: FirebotClient.headers,
      method: "post",
      url: endpoint(className),
      success: function(response) {
        if (callback) {
          callback(response);
        }
      }
    })
  };
};

module.exports = new FirebotObject();
