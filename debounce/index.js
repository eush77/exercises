'use strict';

module.exports = function (debounced, timeout) {
  var timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(Function.apply.bind(debounced, this, arguments), timeout);
  };
};
