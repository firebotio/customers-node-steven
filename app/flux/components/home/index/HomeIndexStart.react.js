var React = require("react");

var FirebotService = require("../../../../firebot/service");

var HomeIndexStart = React.createClass({
  getInitialState: function() {
    return {
      email: "",
      name: ""
    };
  },

  render: function() {
    return (
      <div className="column">
        <fieldset className="show" ref="thankYou">
          <p>Thank you for signing up, we will contact you very shortly</p>
        </fieldset>
        <fieldset className="hide" ref="inputFields">
          <form action="#" method="post" onSubmit={this._submit}>
            <input autoComplete="off"
                   onChange={this._onChange}
                   name="name"
                   placeholder="The name of your business"
                   type="text"
                   value={this.state.name} />
            <input autoComplete="off"
                   onChange={this._onChange}
                   name="email"
                   placeholder="Please enter your email address"
                   type="email"
                   value={this.state.email} />
            <button>Sign up</button>
          </form>
        </fieldset>
      </div>
    );
  },

  _onChange: function(event) {
    var value  = event.target.value;
    var name   = $(event.target).attr("name");
    var hash   = {}
    hash[name] = value;
    this.setState(hash);
  },

  _submit: function() {
    var emailTo = process.env.HOME_EMAIL_TO || "tommydangerouss@gmail.com";
    var data = {
      from: emailTo,
      subject: "Business Sign Up",
      text: "Name: " + this.state.name + "\nEmail: " + this.state.email,
      to: emailTo
    };
    FirebotService.email(data, function(response) {
      console.log(response);
    });
    $(React.findDOMNode(this.refs.thankYou)).show();
    $(React.findDOMNode(this.refs.inputFields)).remove();
    event.preventDefault();
  }
});

module.exports = HomeIndexStart;
