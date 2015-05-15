var React = require("react");

var CryptoJS = require("crypto-js");

var SharedInputField = require("../../shared/SharedInputField.react");

var Errors = React.createClass({
  render: function() {
    var elements = [];
    for (key in this.props.errors) {
      var child = React.createElement("li", { key: key },
        key + " " + this.props.errors[key]
      );
      elements.push(
        child
      );
    }

    return(
      <div>
        <ul>{elements}</ul>
      </div>
    );
  }
});

var OrganizationNewForm = React.createClass({
  getInitialState: function() {
    return {
      errors: null,
      flash:  null,
      timestamp: new Date()
    }
  },

  render: function() {
    return (
      <div key={this.state.timestamp}>
        { this.state.flash ? <h1>{this.state.flash}</h1> : null }
        { this.state.errors ? <Errors errors={this.state.errors} /> : null }
        <form action="#" method="#" onSubmit={this._onSubmit}>
          <SharedInputField changeFunction={this._onChange}
                            name="name"
                            placeholder="Organization name" />
          <br />
          <SharedInputField changeFunction={this._onChange}
                            name="email"
                            placeholder="Email address"
                            type="email" />
          <br />
          <SharedInputField changeFunction={this._onChange}
                            name="phone_number"
                            placeholder="Phone number" />
          <br />
          <SharedInputField changeFunction={this._onChange}
                            name="webmaster_email"
                            placeholder="Webmaster email"
                            type="email" />
          <br />
          <SharedInputField changeFunction={this._onChange}
                            name="password"
                            placeholder="Password"
                            type="password" />
          <br />
          <button>Sign up</button>
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
    var obj   = new FirebotObject("Organization");
    var _this = this;

    obj.create(this.state, function(response) {
      _this.setState({ errors: response["errors"] });
      if (response["errors"] == null) {
        _this.setState({
          flash: "Success!",
          timestamp: new Date()
        });
      }
    });
    event.preventDefault();
  }
});

module.exports = OrganizationNewForm;
