'use strict';

module.exports = function (throttled, timeout) {
  var callInfo;
  var apply = function () {
    throttled.apply(callInfo.context, callInfo.arguments);
    callInfo = true;
    setTimeout(function () {
      if (callInfo != true) {
        apply();
      }
      else {
        callInfo = null;
      }
    }, timeout + 1);
  };

  return function () {
    var idle = !callInfo;
    callInfo = { context: this, arguments: arguments };
    if (idle) {
      apply();
    }
  };
};
