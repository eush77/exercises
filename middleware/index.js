'use strict';

var Middleware = module.exports = function () {
  if (!(this instanceof Middleware)) {
    return new Middleware;
  }
  this.continuation = function (done) { done() };
};

Middleware.prototype.use = function (hook) {
  var continuation = this.continuation;
  this.continuation = function (done) {
    continuation.call(this, hook.bind(this, done));
  };
};

Middleware.prototype.go = function (done) {
  this.continuation(done.bind(this));
};
