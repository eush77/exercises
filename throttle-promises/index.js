'use strict';

module.exports = function (limit, promiseFactories) {
  return new Promise(function (resolve) {
    var running = 0;
    var results = Array(promiseFactories.length);

    promiseFactories.splice(0, limit).forEach(start);
    var nextIndex = limit;

    function start(makePromise, index) {
      makePromise().then(function (result) {
        results[index] = result;
        running -= 1;
        if (promiseFactories.length) {
          start(promiseFactories.shift(), nextIndex++);
        }
        else if (!running) {
          resolve(results);
        }
      });
      running += 1;
    }
  });
};
