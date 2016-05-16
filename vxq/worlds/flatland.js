goog.module('vxq.worlds.flatland');
/**
 * @fileoverview A 2D world with some minimal physics.
 */
const util = goog.require('vxq.util');


/** @implements {VXQ.World} */
exports.World = class {
  constructor(/** number */ width, /** number */ height) {
    /** @const */
    this.width = width;
    /** @const */
    this.height = height;

    /** @const */
    this.changeCallbacks = new util.CallbackList;

    /** @const {!Set<!vxq.worlds.flatland.Unit>} */
    this.units = new Set();

    /** @const */
    this.maxAcceleration = 10;

    /** @const */
    this.absoluteVelocityLossPerSecond = 2;
    /** @const */
    this.proportionalVelocityLossPerSecond = 0.2;

    let then = +new Date;
    this.interval = setInterval(function() {
      const now = +new Date;
      const dt = (now - then) / 1000;
      then = now;

      for (const unit of this.units) {
        unit.tick(dt);
      }
    }, 100);
  }

  get agents() {
    return new Set(...this.units);
  }
};


/** @implements {VXQ.Agent} */
exports.Unit = class {
  constructor(world, x=0, y=0) {
    /** @const {!vxq.worlds.flatland.World} */
    this.world = world;

    /** @type {number} */
    this.x = 0;
    /** @type {number} */
    this.y = 0;

    /** @const */
    this.z = 0;

    /** @type {number} */
    this.vX = 0;
    /** @type {number} */
    this.vY = 0;

    /** @type {number} */
    this.targetX = 0;
    /** @type {number} */
    this.targetY = 0;

    /** @const */
    this.targetMaxDistance = 16;
    /** @const */
    this.targetMaxSpeed = 4;

    /** @type {?Promise<void>} */
    this.currentMove = null;

    /** @const */
    this.changeCallbacks = new util.CallbackList;
  }

  tick(dt) {

  }

  goTo(x, y, z) {
    if (this.currentMove) {
      const f = () => this.goTo(x, y, z);
      this.currentMove.then(f, f);
    } else {
      return this.currentMove = new Promise((resolve, reject) => {

      });
    }
  }
};
