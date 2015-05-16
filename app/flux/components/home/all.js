var React = require("react");

// Index
var HomeIndexStart = require("./index/HomeIndexStart.react");
if (document.getElementById("HomeIndexStart")) {
  React.render(
    <HomeIndexStart />, document.getElementById("HomeIndexStart")
  );
}
