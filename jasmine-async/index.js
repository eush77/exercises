'use strict';


module.exports = function itWill(makeTest) {
  var t = makeTest();
  var flag = false;

  it(t.desc, function () {
    runs(t.setup.bind(null, function () {
      flag = true;
    }));

    waitsFor(function () {
      return flag;
    });

    runs(t.test);
  });
};
