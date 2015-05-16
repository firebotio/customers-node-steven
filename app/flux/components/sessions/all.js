var React = require("react");

// New
var SessionNewForm = require("./new/SessionNewForm.react");
if (document.getElementById("SessionNewForm")) {
  React.render(
    <SessionNewForm />, document.getElementById("SessionNewForm")
  );
}
