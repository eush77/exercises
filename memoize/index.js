'use strict';

module.exports = function (fn) {
  var cache = {};

  return function () {
    var args = [].slice.call(arguments);
    var cacheKey = String(args);
    cache[cacheKey] = cache[cacheKey] || [];

    var answers = cache[cacheKey].filter(function (result) {
      return result.args.every(function (arg, i) {
        return arg === args[i];
      });
    });

    if (answers.length) {
      return answers[0].value;
    }

    cache[cacheKey].unshift({ args: args });
    return cache[cacheKey][0].value = fn.apply(null, args);
  };
};
