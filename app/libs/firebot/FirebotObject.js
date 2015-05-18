var FirebotClient = require("./FirebotClient");

var endpoint = function(className, objectId) {
  var baseUrl = FirebotClient.apiUrl + "/" +
                FirebotClient.apiVersion + "/objects/" + className;
  if (objectId) {
    baseUrl += "/" + objectId;
  }
  return baseUrl;
};

// Create
// Destroy
// Index
// Show
// Update

exports.create = function(className, data, callback) {
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

exports.index = function(className, data, callback) {
  $.ajax({
    data: data,
    headers: FirebotClient.headers,
    method: "get",
    url: endpoint(className),
    success: function(response) {
      if (callback) {
        callback(response)
      }
    }
  });
};
