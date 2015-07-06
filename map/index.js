'use strict';

module.exports = function map(array, fn, ctx) {
  var results = [];
  for (var i = 0; i < array.length; ++i) {
    results[i] = fn.call(ctx, array[i], i, array);
  }
  return results;
};
