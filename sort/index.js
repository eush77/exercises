'use strict';

module.exports = function (array) {
  var swap = function (i, j) {
    var t = array[i];
    array[i] = array[j];
    array[j] = t;
  };

  (function partition(begin, end) {
    if (end <= begin + 1) {
      return;
    }

    var pivotIndex = begin + Math.floor(Math.random() * (end - begin));
    swap(begin, pivotIndex);
    var pivot = array[begin];

    var leqEnd = begin + 1;
    for (var index = leqEnd; index < end; ++index) {
      if (array[index] <= pivot) {
        swap(leqEnd++, index);
      }
    }

    partition(begin, leqEnd);
    partition(leqEnd, end);
  }(0, array.length));

  return array;
};
