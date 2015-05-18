var cookies = require("./cookies");

var cookieIdName    = "sessionId";
var cookieTokenName = "sessionToken";

var getId = function() {
  return cookies.getCookie(cookieIdName);
};

var getToken = function() {
  return cookies.getCookie(cookieTokenName);
};

exports.id = function() {
  getId();
};

exports.isLoggedIn = function() {
  return getId().length > 0 && getToken().length > 0;
};

exports.login = function(id, token) {
  var days = 365;

  cookies.setCookie(cookieIdName, id, days);
  cookies.setCookie(cookieTokenName, token, days);
};

exports.logout = function() {
  cookies.deleteCookie(cookieIdName);
  cookies.deleteCookie(cookieTokenName);
};

exports.token = function() {
  getToken();
};
