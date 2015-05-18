var React    = require("react");
var CryptoJS = require("crypto-js");
var cookies  = require("../../../../js/cookies");
var moment   = require("moment");
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
    // Fetch organization by email
    // Compare passwords
    // Create access token
    // Store access token's token in the browser

    var _this = this;

    if (this.state.email.length > 0 && this.state.password.length > 0) {
      var organizationParams = { email: _this.state.email };
      FirebotObject.index("Organization", organizationParams, function(res) {
        var errorMessage = null;
        var organization = res.objects[0] || null;
        if (organization && organization.password == _this.state.password) {
          var days      = 365;
          var expiresAt = moment().add(days, "days").format("YYYY-MM-DD");
          var token     = uuid.v1();

          var hash = {
            expires_at: expiresAt,
            organization: organization.id,
            token: token
          };

          FirebotObject.create("Authentication", hash, function(response) {
            cookies.setCookie("sessionId", organization.id, days);
            cookies.setCookie("sessionToken", response.token, days);

            var sessionIdCookie = cookies.getCookie("sessionId");
            var sessionTokenCookie = cookies.getCookie("sessionToken");

            console.log(sessionIdCookie, sessionTokenCookie);
          });
        } else {
          errorMessage = "Invalid email and/or password";
        }
        _this.setState({ error: errorMessage });
      });
    } else {
      _this.setState({ error: "Please enter an email and password" });
    }

    // setCookie("session", _this.state.email, 30);

    // deleteCookie("session");

    // var cookie = getCookie("session");

    // console.log(cookie);

    event.preventDefault();
  }
});

module.exports = SessionNewForm;
