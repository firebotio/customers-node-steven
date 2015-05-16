var React = require("react");

var CryptoJS = require("crypto-js");

var FirebotObject = require("../../../../libs/firebot/FirebotObject");

var SharedInputField = require("../../shared/SharedInputField.react");

var SessionNewForm = React.createClass({
  getInitialState: function() {
    return {
      timestamp: new Date()
    }
  },

  render: function() {
    return(
      <div key={this.state.timestamp}>
        <form action="#" method="#" onSubmit={this._onSubmit}>
          <SharedInputField changeFunction={this._onChange}
                            name="email"
                            placeholder="Email"
                            type="email" />
          <SharedInputField changeFunction={this._onChange}
                            name="password"
                            placeholder="Password"
                            type="password" />
          <button>Login</button>
        </form>
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

    // setCookie("session", _this.state.email, 30);

    // deleteCookie("session");

    // var cookie = getCookie("session");

    // console.log(cookie);

    // Fetch organization by email
    // Compare passwords
    // Create access token
    // Store access token's token in the browser

    // console.log(_this.state);
    // $.ajax({
    //   data: {
    //     email: _this.state.email,
    //     password: _this.state.password
    //   },
    //   method: "post",
    //   url: "/login",
    //   success: function(response) {
    //     console.log(response);
    //   }
    // });

    event.preventDefault();
  }
});

module.exports = SessionNewForm;
