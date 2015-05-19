var objectAssign = require("object-assign");
var EventEmitter = require("events").EventEmitter;

// Flux
var AppDispatcher    = require("../dispatcher/AppDispatcher");
var OrganizationConstants = require("../constants/OrganizationConstants");

var CHANGE_EVENT = "change";

var create = function() {

};

var OrganizationStore = objectAssign({}, EventEmitter.prototype, {
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
    case OrganizationConstants.ORGANIZATION_CREATE:
      create();
      OrganizationStore.emitChange();
      break;

    default:

  }
});

module.exports = OrganizationStore;
