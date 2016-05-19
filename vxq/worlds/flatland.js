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

    this.maxAcceleration = 10;

    /** @const */
    this.absoluteVelocityLossPerSecond = 2;
    /** @const */
    this.proportionalVelocityLossPerSecond = 0.2;

    let then = +new Date;
    this.interval = setInterval(() => {
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


/**@implements {VXQ.Agent} */
exports.Unit = class {
  constructor(
    /** !vxq.worlds.flatland.World */ world,
    /** number= */ x = 0,
    /** number= */ y = 0
  ) {
    /** @const */
    this.world = world;

    /** @type {number} */
    this.x = x;
    /** @type {number} */
    this.y = y;

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

  tick(/** number */ dt) {

  }

  /** @override */ goTo(x, y, z) {
    if (this.currentMove) {
      const f = () => this.goTo(x, y, z);
      return this.currentMove.then(f, f);
    } else {
      return this.currentMove = new Promise(function(resolve, reject) {
        return resolve();
      });
    }
  }
};
