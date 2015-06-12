'use strict';

module.exports = function (fn) {
  return (function curry(len, fn) {
    return function () {
      var fixedArgs = [].slice.call(arguments);
      return len <= fixedArgs.length
        ? fn.apply(null, fixedArgs)
        : curry(len - fixedArgs.length, function () {
          var args = fixedArgs.concat([].slice.call(arguments));
          return fn.apply(null, args);
        });
    };
  }(fn.length, fn));
};
