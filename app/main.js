var React = require("react");

window.jQuery = require("jQuery");
window.$      = jQuery;

require("./jquery.lazy");
$("img.lazy").Lazy();

// Additional JavaScript below this line
// -----------------------------------------------------------------------------

// Home
// -----------------------------------------------------------------------------
// Index
var HomeIndexStart = require(
  "./flux/components/home/index/HomeIndexStart.react"
);
React.render(
  <HomeIndexStart />, document.getElementById("HomeIndexStart")
);
