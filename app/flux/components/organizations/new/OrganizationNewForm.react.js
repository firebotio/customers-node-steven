var React    = require("react");
var CryptoJS = require("crypto-js");
var session  = require("../../../../js/session");

var FirebotObject    = require("../../../../libs/firebot/FirebotObject");
var SharedInputField = require("../../shared/SharedInputField.react");

var Errors = React.createClass({
  render: function() {
    var elements = [];
    for (key in this.props.errors) {
      var child = React.createElement("li", { key: key },
        key.capitalizeFirstLetter() + " " + this.props.errors[key]
      );
      elements.push(child);
    }

    return(
      <div>
        <ul className="errors-list">{elements}</ul>
      </div>
    );
  }
});

var OrganizationNewForm = React.createClass({
  getInitialState: function() {
    return {
      errors: null,
      organization_name: "",
      timestamp: new Date()
    }
  },

  render: function() {
    return (
      <div key={this.state.timestamp}>
        <div className="form form--center">
          <h4>Join Tabbs</h4>
          { this.state.errors ? <Errors errors={this.state.errors} /> : null }
          <form action="#" method="#" onSubmit={this._onSubmit}>
            <div className="fields">
              <div className="field">
                <SharedInputField changeFunction={this._onChange}
                                  name="organization_name"
                                  placeholder="Organization name" />
              </div>
              <div className="field">
                <SharedInputField changeFunction={this._onChange}
                                  name="webmaster_email"
                                  placeholder="Webmaster email"
                                  type="email" />
              </div>
              <div className="field">
                <SharedInputField changeFunction={this._onChange}
                                  name="user_name"
                                  placeholder="Your name" />
              </div>
              <div className="field">
                <SharedInputField changeFunction={this._onChange}
                                  name="email"
                                  placeholder="Email address"
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
              <button>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    );
  },

  _createOrganization: function() {
    var _this = this;

    FirebotObject.create("Organization", {
      name: _this.state.organization_name,
      webmaster_email: _this.state.webmaster_email
    }, function(response) {
      if (response.errors) {
        _this.setState({ errors: response.errors });
      } else {
        _this._createUser(response);
      }
    });
  },

  _createOrganizationMembership: function(user, organization) {
    FirebotObject.create("OrganizationMembership", {
      organization: organization.id,
      user: user.id
    }, function(response) {
      session.login(response.user.object_id, function() {
        window.location = "/";
      })
    });
  },

  _createUser: function(organization) {
    var _this = this;

    FirebotObject.create("User", {
      email: _this.state.email,
      name: _this.state.user_name,
      password: _this.state.password
    }, function(response) {
      if (response.errors) {
        _this.setState({ errors: response.errors });
      } else {
        _this._createOrganizationMembership(response, organization);
      }
    });
  },

  _onChange: function(hash) {
    if (hash["password"] && hash["password"].length > 0) {
      hash["password"] = CryptoJS.SHA1(hash["password"]).toString();
    }
    this.setState(hash);
  },

  _onSubmit: function() {
    var _this = this;

    if (_this.state.organization_name.length > 0) {
      FirebotObject.index("Organization",
        { name: _this.state.organization_name }, function(response) {
          var organization = response.objects[0] || null;
          if (organization) {
            _this._createUser(organization);
          } else {
            _this._createOrganization();
          }
        });
    } else {
      _this.setState({ errors: { "Organization name": "is required" }});
    }

    event.preventDefault();
  }
});

module.exports = OrganizationNewForm;
