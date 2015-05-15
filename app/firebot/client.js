var FirebotClient = function() {
  this.apiUrl     = process.env.FIREBOT_API_URL;
  this.apiVersion = process.env.FIREBOT_API_VERSION;
  this.headers = {
    "X-Firebot-Application-Key": process.env.FIREBOT_APPLICATION_KEY,
    "X-Firebot-Application-Id": process.env.FIREBOT_APPLICATION_ID
  };
};

module.exports = new FirebotClient();
