var React = require("react");

// Header
var Header = require("./Header.react");
if (document.getElementById("Header")) {
  React.render(<Header />, document.getElementById("Header"));
}
