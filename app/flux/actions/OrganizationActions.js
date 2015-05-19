var AppDispatcher         = require("../dispatcher/AppDispatcher");
var OrganizationConstants = require("../constants/OrganizationConstants");

var OrganizationActions = {
  create: function() {
    AppDispatcher.dispatch({
      actionType: OrganizationConstants.ORGANIZATION_CREATE
    });
  }
};

module.exports = OrganizationActions;
