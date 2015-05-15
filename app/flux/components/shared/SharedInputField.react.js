var React = require("react");

var SharedInputField = React.createClass({
  getDefaultProps: function() {
    return {
      autocomplete: "off",
      placeholder: "",
      type: "text"
    }
  },

  getInitialState: function() {
    return {
      value: ""
    }
  },

  render: function() {
    return (
      <input autoComplete={this.props.autocomplete}
             onChange={this._onChange}
             name={this.props.name}
             placeholder={this.props.placeholder}
             type={this.props.type}
             value={this.state.value} />
    );
  },

  _onChange: function(event) {
    var hash   = {}
    var name   = $(event.target).attr("name");
    var value  = event.target.value;
    hash[name] = value;
    this.setState({ value: value });
    this.props.changeFunction(hash);
  }
});

module.exports = SharedInputField;
