var cookies = require("./cookies");
var moment  = require("moment");
var uuid    = require('node-uuid');

var FirebotObject = require("../libs/firebot/FirebotObject");

var cookieIdName    = "sessionId";
var cookieTokenName = "sessionToken";

var getId = function() {
  return cookies.getCookie(cookieIdName);
};

var getToken = function() {
  return cookies.getCookie(cookieTokenName);
};

var setCookies = function(userId, token, days) {
  cookies.setCookie(cookieIdName, userId, days);
  cookies.setCookie(cookieTokenName, token, days);
};

exports.id = function() {
  getId();
};

exports.isLoggedIn = function() {
  return getId().length > 0 && getToken().length > 0;
};

exports.login = function(userId, callback) {
  var days = 365;

  var hash = {
    expires_at: moment().add(days, "days").format("YYYY-MM-DD"),
    token: uuid.v1(),
    user: userId
  };

  FirebotObject.create("Authentication", hash, function(response) {
    setCookies(response.user.object_id, response.token, days);

    if (callback) {
      callback();
    }
  });
};

exports.logout = function() {
  cookies.deleteCookie(cookieIdName);
  cookies.deleteCookie(cookieTokenName);
};

exports.token = function() {
  getToken();
};
