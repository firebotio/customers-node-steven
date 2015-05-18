var React = require("react");

var session = require("../../../js/session");

var LoggedInNav = React.createClass({
  render: function() {
    return (
      <ul>
        <li>
          <a href="#" onClick={this.props.logout}>
            Logout
          </a>
        </li>
      </ul>
    );
  }
});

var LoggedOutNav = React.createClass({
  render: function() {
    return (
      <ul>
        <li>
          <a href="/sign-up">
            Sign up
          </a>
        </li>
        <li>
          <a href="/login">
            Login
          </a>
        </li>
      </ul>
    );
  }
});

var Header = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: session.isLoggedIn()
    }
  },

  render: function() {
    return (
      <header>
        <div className="header__container">
          <div className="column">
            <div className="header__container__logo">
              <a href="/">
                Tabbs
              </a>
            </div>
          </div>
          <div className="column">
            <div className="header__container__navigation">
              { this.state.loggedIn ?
                <LoggedInNav logout={this._logout} /> : <LoggedOutNav />
              }
            </div>
          </div>
        </div>
      </header>
    );
  },

  _logout: function() {
    session.logout();

    window.location = "/";

    event.preventDefault();
  }
});

module.exports = Header;
