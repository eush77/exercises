'use strict';

module.exports = function valueOf(value) {
  return typeof value == 'function' ? valueOf(value()) : value;
};
