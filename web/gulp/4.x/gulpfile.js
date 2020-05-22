const { series, parallel } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

function transpile(cb) {
  // body omitted
  cb();
}

function bundle(cb) {
  // body omitted
  cb();
}

exports.default = series(transpile, bundle);
exports.build = parallel(javascript, css);;