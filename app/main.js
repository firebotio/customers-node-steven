window._      = require("lodash");
window.$      = require("jQuery");
window.jQuery = $;

require("./js/all");

// Additional JavaScript below this line
// -----------------------------------------------------------------------------

// Application
require("./flux/components/application/all");

// Home
require("./flux/components/home/all");

// Organizations
require("./flux/components/organizations/all");

// Sessions
require("./flux/components/sessions/all");
