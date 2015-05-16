var React = require("react");

window.jQuery = require("jQuery");
window.$      = jQuery;

require("../public/libs/jquery.lazyload/jquery.lazyload");
$(".lazy").lazyload();

// Additional JavaScript below this line
// -----------------------------------------------------------------------------

// Home
// -----------------------------------------------------------------------------
// Index
var HomeIndexStart = require(
  "./flux/components/home/index/HomeIndexStart.react"
);
if (document.getElementById("HomeIndexStart")) {
  React.render(
    <HomeIndexStart />, document.getElementById("HomeIndexStart")
  );
}


// Organizations
// -----------------------------------------------------------------------------
// New
var OrganizationNewForm = require(
  "./flux/components/organizations/new/OrganizationNewForm.react"
);
if (document.getElementById("OrganizationNewForm")) {
  React.render(
    <OrganizationNewForm />, document.getElementById("OrganizationNewForm")
  );
}
