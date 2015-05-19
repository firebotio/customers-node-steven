var React = require("react");

// React
var SharedInputField = require("../../shared/SharedInputField.react");

// Flux
var SessionActions = require("../../../actions/SessionActions");
var SessionStore   = require("../../../stores/SessionStore");

var SessionNewForm = React.createClass({
  getInitialState: function() {
    return {
      email: "",
      error: null,
      password: "",
      timestamp: new Date()
    }
  },

  componentDidMount: function() {
    SessionStore.addChangeListener(function() {});
  },

  componentWillUnmount: function() {
    SessionStore.removeChangeListener(function() {});
  },

  render: function() {
    return(
      <div key={this.state.timestamp}>
        <div className="form form--center">
          <h4>Tabbs Login</h4>
          { this.state.error ?
            <p className="error">{this.state.error}</p> : null
          }
          <form action="#" method="#" onSubmit={this._onSubmit}>
            <div className="fields">
              <div className="field">
                <SharedInputField changeFunction={this._onChange}
                                  name="email"
                                  placeholder="Email"
                                  type="email" />
              </div>
              <div className="field">
                <SharedInputField changeFunction={this._onChange}
                                  name="password"
                                  placeholder="Password"
                                  type="password" />
              </div>
            </div>
            <div className="actions">
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  },

  _onChange: function(hash) {
    hash.error = null;
    this.setState(hash);
  },

  _onSubmit: function() {
    var _this = this;

    if (this.state.email.length > 0 && this.state.password.length > 0) {
      SessionActions.login(_this.state.email, _this.state.password,
        function() {
          window.location = "/";
        }, function(errorMessage) {
          _this.setState({ error: errorMessage });
        });
    } else {
      _this.setState({ error: "Please enter an email and password" });
    }

    event.preventDefault();
  }
});

module.exports = SessionNewForm;
