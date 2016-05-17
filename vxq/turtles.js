goog.module('vxq.turtles');
/** @fileoverview Provides simple "turtle" worlds and agents. */

const debug = goog.require('vxq.debug');
const util = goog.require('vxq.util');


/** @implements {VXQ.World} */
exports.World = class {
  constructor(
    /** number */ width,
    /** number */ height,
    /** !Array<!vxq.turtles.Turtle> */ turtles
  ) {
    /** @const */
    this.width = width;
    /** @const */
    this.height = height;
    /** @const {!Set<!vxq.turtles.Turtle>} */
    this.turtles = new Set(turtles);

    /** @const */
    this.changeCallbacks = new util.CallbackList;
  }

  /** @override */ get agents() {
    return this.turtles;
  }
};


/** @implements {VXQ.Agent} */
exports.Turtle = class {
  constructor() {
    /** @type {number} */
    this.x = 50;
    /** @type {number} */
    this.y = 50;
    /** @type {number} */
    this.z = 0;

    /**
     * @type {number} The number of turns by which this is rotated clockwise
     *    around the Z axis.
     */
    this.rotation = 0;

    /** @const */
    this.changeCallbacks = new util.CallbackList;
  }

  get xFactor() {
    return -Math.sin(this.rotation * 2 * Math.PI);
  }

  get yFactor() {
    return Math.cos(this.rotation * 2 * Math.PI);
  }

  right(/** number */ turns) {
    debug.assert(Number.isFinite(turns));
    this.rotation += turns;
  }

  left(/** number */ turns) {
    debug.assert(Number.isFinite(turns));
    this.rotation -= turns;
  }

  forward(/** number */ distance) {
    debug.assert(Number.isFinite(distance));
    this.goTo(
      this.x + distance * this.xFactor,
      this.y + distance * this.yFactor,
      this.z);
  }

  backward(/** number */ distance) {
    debug.assert(Number.isFinite(distance));
    this.goTo(
      this.x + -distance * this.xFactor,
      this.y + -distance * this.yFactor,
      this.z);
  }

  /** @override */ goTo(x, y, z) {
    debug.assert(Number.isFinite(x));
    debug.assert(Number.isFinite(y));
    debug.assert(Number.isFinite(z));

    const xDelta = x - this.x;
    const yDelta = y - this.y;
    const distance = Math.sqrt(xDelta * xDelta + yDelta * yDelta);

    // Render several stops, possibly with some precision loss.
    const steps = Math.ceil(distance / 4);
    for (let i = 0; i < steps; i++) {
      this.x += xDelta / steps;
      this.y += yDelta / steps;
      this.changeCallbacks.call();
    }

    this.x = x;
    this.y = y;
    this.changeCallbacks.call();

    return Promise.resolve();
  }
};
