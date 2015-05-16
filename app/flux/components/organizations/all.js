var React = require("react");

// New
var OrganizationNewForm = require("./new/OrganizationNewForm.react");
if (document.getElementById("OrganizationNewForm")) {
  React.render(
    <OrganizationNewForm />, document.getElementById("OrganizationNewForm")
  );
}
