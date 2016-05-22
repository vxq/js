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
    this.gravity = 0.0000000000667408;

    /** @const */
    this.absoluteVelocityLossPerSecond = 10;

    /** @const */
    this.proportionalVelocityLossPerSecond = 0.2;

    let then = +new Date;
    /** @type {?number} */
    this.tickInterval = setInterval(() => {
      const now = +new Date;
      const dt = (now - then) / 1000;
      then = now;
      this.tick(dt);
    }, 20);
  }

  tick(/** number */ dt) {
    // Determine the instantaneous forces acting on each unit.
    const fX = /** !Map<exports.Unit,number> */ new Map();
    const fY = /** !Map<exports.Unit,number> */new Map();
    for (const unit of this.units) {
      fX.set(unit, 2);
      fY.set(unit, 0);
    }

    for (const unit of this.units) {
      unit.vX += fX.get(unit) / unit.mass;
      unit.vY += fY.get(unit) / unit.mass;

      if (dt > 0 && (unit.vX != 0 || unit.vY != 0)) {
        unit.x += dt * unit.vX;
        unit.y += dt * unit.vY;

        const speed = Math.sqrt(unit.vX * unit.vX + unit.vY * unit.vY);
        const newSpeed = Math.max(
            0,
            speed -
            dt * unit.world.absoluteVelocityLossPerSecond -
            dt * speed * unit.world.proportionalVelocityLossPerSecond);

        // fix me
        unit.vX *= newSpeed / speed;
        unit.vY *= newSpeed / speed;

        unit.changeCallbacks.call();
      }
    }
  }

  /** @override */ get agents() {
    return new Set(this.units);
  }
};


/** @implements {VXQ.Agent} */
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
    this.radius = 4;

    /** @const */
    this.mass = 1;

    /** @const */
    this.targetMaxDistance = 16;
    /** @const */
    this.targetMaxSpeed = 4;

    /** @type {?Promise<void>} */
    this.currentMove = null;

    /** @const */
    this.changeCallbacks = new util.CallbackList;
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
