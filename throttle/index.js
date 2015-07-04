'use strict';

module.exports = function (throttled, timeout) {
  var callInfo;

  return function () {
    if (!callInfo) {
      setTimeout(function () {
        throttled.apply(callInfo.context, callInfo.arguments);
        callInfo = null;
      }, timeout);
    }
    callInfo = { context: this, arguments: arguments };
  };
};
