'use strict';

/**
 *
 *   Used by Browserify to build the app
 *
 */


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ANGULAR STUFF
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

require('../bower_components/angular/angular.js');
require('../bower_components/angular-cookies/angular-cookies.js');
require('../bower_components/angular-sanitize/angular-sanitize.js');
require('../bower_components/angular-route/angular-route.js');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CONTROLLERS AND FACTORIES
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

require('./app.js');
require('./controllers/main.js');
require('./controllers/survey.js');
require('./controllers/summary.js');
require('./services/survey.js');
