goog.module('vxq.main');

const turtles = goog.require('vxq.turtles');
const assert = goog.require('vxq.testing.assert');

/** @implements {IVXQModule} */
class VXQModule {
  test() {
    this.testTheTurtles();
  }

  /** @protected */ testTheTurtles() {
    const turtle = new turtles.Turtle;
    assert.equals(0, turtle.x);

    console.log('Test complete.');
  }
};

exports = new VXQModule;


if (typeof module === 'object') {
  /** Export this module in a RequireJS environment. */
  module.exports = exports;
}
