window._      = require("lodash");
window.$      = require("jQuery");
window.jQuery = $;

require("./js/all");

require("./js/js");

// Additional JavaScript below this line
// -----------------------------------------------------------------------------

// Home
require("./flux/components/home/all");

// Organizations
require("./flux/components/organizations/all");

// Sessions
require("./flux/components/sessions/all");
