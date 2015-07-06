'use strict';

module.exports = function flatten(array) {
  if (!Array.isArray(array) || !array.length) {
    return array;
  }
  var head = Array.isArray(array[0]) ? flatten(array[0]) : [array[0]];
  return head.concat(flatten(array.slice(1)));
};
