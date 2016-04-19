"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function flatten(array) {
  return array.reduce(function (previous, current) {
    var items = Array.isArray(current) ? flatten(current) : [current];
    return previous.concat(items);
  }, []);
}

exports.default = function (props) {
  for (var _len = arguments.length, pass = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pass[_key - 1] = arguments[_key];
  }

  var key = void 0;

  props = Object.assign({}, props);
  pass = flatten(pass);

  for (key in props) {
    if (pass.indexOf(key) >= 0) {
      continue;
    }

    delete props[key];
  }

  return props;
};