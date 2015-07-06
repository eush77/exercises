'use strict';

module.exports = function invert(tree) {
  var left = tree.left, right = tree.right;
  if (left) {
    tree.right = invert(left);
  }
  if (right) {
    tree.left = invert(right);
  }
  return tree;
};
