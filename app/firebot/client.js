var FirebotClient = function() {
  var apiUrl      = process.env.FIREBOT_API_URL || "http://localhost:3001";
  var apiVersion  = process.env.FIREBOT_API_VERSION || "1";
  var applicationKey = process.env.FIREBOT_APPLICATION_KEY ||
    "d23de7a7-2fa4-4981-8a0f-878dc4a9a1a2";
  var applicationId = process.env.FIREBOT_APPLICATION_ID ||
    "05b030bb5fbf43ecb55744d9fa76e3aa";

  this.apiUrl     = apiUrl;
  this.apiVersion = apiVersion;
  this.headers = {
    "X-Firebot-Application-Key": applicationKey,
    "X-Firebot-Application-Id": applicationId
  };
};

module.exports = new FirebotClient();
