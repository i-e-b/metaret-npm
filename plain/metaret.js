// Exposure point for NPM

var jsm2js = require('./lib/jsm2js');
var inline = require('./lib/inline');
if (exports) {
    exports.jsm2js = jsm2js.jsm2js;
    exports.inline = inline.inline;
}
