'use strict';

exports.sequence = function sequence(functions, value) {
  return function (cb) {
    if (!functions.length) {
      return cb(null, value);
    }

    functions[0](function (err, nextValue) {
      if (err) return cb(err);
      sequence(functions.slice(1), nextValue)(cb);
    }, value);
  };
};

exports.parallel = function (functions) {
  return function (cb) {
    var values = [];
    var running = functions.length;
    if (!running) {
      return cb(null, values);
    }

    functions.forEach(function (fn, index) {
      fn(function (err, value) {
        if (!running) return;

        if (err) {
          running = 0;
          return cb(err);
        }

        values[index] = value;
        if (!--running) {
          cb(null, values);
        }
      });
    });
  };
};

exports.race = function (functions) {
  return function (cb) {
    var running = true;

    functions.forEach(function (fn) {
      fn(function (err, value) {
        if (!running) return;
        running = false;
        cb(err, value);
      });
    });
  };
};
