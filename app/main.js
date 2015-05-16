var React = require("react");

window.jQuery = require("jQuery");
window.$      = jQuery;

require("../public/libs/jquery.lazyload/jquery.lazyload");
$(".lazy").lazyload();

require("./js/js");

// Additional JavaScript below this line
// -----------------------------------------------------------------------------

// Home
require("./flux/components/home/all");

// Organizations
require("./flux/components/organizations/all");

// Sessions
require("./flux/components/sessions/all");
