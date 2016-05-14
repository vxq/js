goog.module('vxq.main');

const turtles = goog.require('vxq.turtles');
const asserts = goog.require('goog.asserts');


const testTheTurtles = () => {
  const turtle = new turtles.Turtle;
  asserts.assert(1 == turtle.x);

  console.log("Test complete.");
};

exports = {
  test: testTheTurtles
};


if (typeof module === 'object') module.exports = exports;
