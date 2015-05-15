var React = require("react");

window.jQuery = require("jQuery");
require("./jquery.lazy");

jQuery("img.lazy").Lazy();

// Home
// -----------------------------------------------------------------------------
// Index
var HomeIndexStart = require(
  "./flux/components/home/index/HomeIndexStart.react"
);
React.render(
  <HomeIndexStart />, document.getElementById("HomeIndexStart")
);
