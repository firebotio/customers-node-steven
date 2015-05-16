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

    // FirebotObject.create("Organization", this.state, function(response) {
    //   _this.setState({ errors: response["errors"] });
    //   if (response["errors"] == null) {
    //     _this.setState({
    //       flash: "Success!",
    //       timestamp: new Date()
    //     });
    //   }
    // });
    event.preventDefault();
  }
});

module.exports = SessionNewForm;
