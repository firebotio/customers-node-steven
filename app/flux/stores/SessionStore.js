var CryptoJS     = require("crypto-js");
var objectAssign = require("object-assign");
var EventEmitter = require("events").EventEmitter;

// Libs
var FirebotObject = require("../../libs/firebot/FirebotObject");

// Js
var session = require("../../js/session");

// Flux
var AppDispatcher    = require("../dispatcher/AppDispatcher");
var SessionConstants = require("../constants/SessionConstants");

var CHANGE_EVENT = "change";

function login(email, password, success, error) {
  FirebotObject.index("User", { email: email }, function(response) {
    var encryptedPassword = CryptoJS.SHA1(password).toString();
    var user = response.objects[0] || null;

    if (user && user.password == encryptedPassword) {
      session.login(user.id, function() {
        success();
      });
    } else {
      error("Invalid email and/or password");
    }
  });
};

var SessionStore = objectAssign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {
  switch(payload.actionType) {
    case SessionConstants.SESSION_LOGIN:
      login(payload.email, payload.password, payload.success, payload.error);
      SessionStore.emitChange();
      break;

    default:
  }
});

module.exports = SessionStore;
