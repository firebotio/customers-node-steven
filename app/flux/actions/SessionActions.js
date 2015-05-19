var AppDispatcher    = require("../dispatcher/AppDispatcher");
var SessionConstants = require("../constants/SessionConstants");

var SessionActions = {
  login: function(email, password, success, error) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SESSION_LOGIN,
      email: email,
      error: error,
      password: password,
      success: success
    });
  }
};

module.exports = SessionActions;
