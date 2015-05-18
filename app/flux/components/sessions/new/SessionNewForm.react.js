var React    = require("react");
var CryptoJS = require("crypto-js");
var moment   = require("moment");
var session  = require("../../../../js/session");
var uuid     = require('node-uuid');

var FirebotObject    = require("../../../../libs/firebot/FirebotObject");
var SharedInputField = require("../../shared/SharedInputField.react");

var SessionNewForm = React.createClass({
  getInitialState: function() {
    return {
      email: "",
      error: null,
      password: "",
      timestamp: new Date()
    }
  },

  render: function() {
    return(
      <div key={this.state.timestamp}>
        <div className="form">
          <h4>Tabbs Login</h4>
          { this.state.error ? <p className="error">{this.state.error}</p> : null }
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
    if (hash["password"]) {
      hash["password"] = CryptoJS.SHA1(hash["password"]).toString();
    }
    this.setState(hash);
  },

  _onSubmit: function() {
    var _this = this;

    if (this.state.email.length > 0 && this.state.password.length > 0) {
      // 1. Fetch organization by email
      var organizationParams = { email: _this.state.email };
      FirebotObject.index("Organization", organizationParams, function(res) {
        var errorMessage = null;
        var organization = res.objects[0] || null;
        // 2. Compare passwords
        if (organization && organization.password == _this.state.password) {
          var expiresAt = moment().add(365, "days").format("YYYY-MM-DD");
          var token     = uuid.v1();

          var hash = {
            expires_at: expiresAt,
            organization: organization.id,
            token: token
          };

          // 3. Create access token
          FirebotObject.create("Authentication", hash, function(response) {
            // 4. Store access token's token in the browser
            session.login(response.organization.object_id, response.token);

            // 5. Redirect to root path
            window.location = "/";
          });
        } else {
          errorMessage = "Invalid email and/or password";
        }
        _this.setState({ error: errorMessage });
      });
    } else {
      _this.setState({ error: "Please enter an email and password" });
    }

    event.preventDefault();
  }
});

module.exports = SessionNewForm;
