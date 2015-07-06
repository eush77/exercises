'use strict';

module.exports = function (fn) {
  var called = false;
  var result;

  return function () {
    return called
      ? result
      : (called = true,
         result = fn.apply(this, arguments));
  };
};
