// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject'),
    defined = require('./_defined');
module.exports = function(it) {
    return IObject(defined(it));
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_to-iobject.js
// module id = 26
// module chunks = 1 2