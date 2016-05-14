goog.module('vxq.main');

const turtles = goog.require('vxq.turtles');
const assert = goog.require('vxq.assert');


const testTheTurtles = () => {
  const turtle = new turtles.Turtle;
  assert.equals(0, turtle.x);

  console.log("Test complete.");
};

exports = {
  test: testTheTurtles
};


if (typeof module === 'object') module.exports = exports;
