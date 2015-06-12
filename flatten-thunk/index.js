'use strict';

module.exports = function (thunk) {
  return function (cb) {
    thunk(function next(err, result) {
      if (err) return cb(err);

      return typeof result == 'function'
        ? result(next)
        : cb(null, result);
    });
  };
};
