var React = require("react");

var Header = React.createClass({
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
            </div>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Header;
