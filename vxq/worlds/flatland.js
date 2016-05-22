goog.module('vxq.worlds.flatland');
/**
 * @fileoverview A 2D world with some minimal physics.
 */

const debug = goog.require('vxq.debug');
const util = goog.require('vxq.util');


/** @return {!Vector} A new Vector with the specified components. */
const V = (/** number */ x, /** number */ y) => new Vector(x, y);


/** A finite 2D vector in the world. */
class Vector {
  constructor(/** number */ x, /** number */ y) {
    debug.assert(
        Number.isFinite(x),
        `x = ${x} must be a finite number`);
    debug.assert(
        Number.isFinite(y),
        `y = ${y} must be a finite number`);

    /** @const */
    this.x = x;

    /** @const */
    this.y = y;
  }

  /** @return {number} The directionless magnitude of this vector. */
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /** @return {!Vector} A unit vector with the same direction as this vector. */
  direction() {
    return this.withMagnitude(1);
  }

  /**
   * @return {!Vector} A vector with the same direction as this but a different
   * magnitude.
   */
  withMagnitude(/** number */ magnitude) {
    debug.assert(
        Number.isFinite(magnitude),
        `magnitude = ${magnitude} must be a finite number`);

    const currentMagnitude = this.magnitude();
    if (currentMagnitude !== 0) {
      return this.scale(magnitude / currentMagnitude);
    } else {
      return V(0, 0);
    }
  }

  /** @return {!Vector} A new vector by scaling this vector. */
  scale(/** number */ factor) {
    debug.assert(
        Number.isFinite(factor),
        `magnitude = ${factor} must be a finite number`);

    if (factor == 0 || (this.x == 0 && this.y == 0)) {
      return V(0, 0);
    } else {
      return V(factor * this.x, factor * this.y);
    }
  }

  /** @return {!Vector} A new Vector by adding another Vector. */
  add(/** Vector */ other) {
    return V(this.x + other.x, this.y + other.y);
  }

  /** @return {!Vector}  A new Vector by subtracting another Vector. */
  subtract(/** Vector */ other) {
    return V(this.x - other.x, this.y - other.y);
  }

  /**
   * @return {!Vector} A new Vector by adding the specified values to each
   * component.
   */
  addXY(/** number */ x, /** number */ y) {
    return V(this.x + x, this.y + y);
  }

  /** @override */ toString() {
    return `V(${this.x}, ${this.y})`;
  }
}


/** @implements {VXQ.World} */
class World {
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
    this.proportionalVelocityLossPerSecond = 0.05;

    /**
     * @const A minimum speed below which unit speeds will be rounded to zero,
     * unless they're under the influence of a force that will alter their
     * speed by at least this much within a second.
     */
    this.minNonzeroSpeed = 10.0;

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
    if (dt <= 0) {
      return;
    }

    // Determine the instantaneous forces acting on each unit.
    const forces = /** !Map<Unit,Vector> */ new Map();
    for (const unit of this.units) {
      forces.set(unit, V(0, 0));
    }

    // Gravity
    if (this.gravity !== 0) {
      for (const unit of this.units) {
        for (const other of this.units) {
          if (unit === other) continue;

          const displacement = other.position.subtract(unit.position);
          let distance = displacement.magnitude();

          // Prevent gravity from glitchly blowing up.
          if (distance < 40) {
            distance = 40;
          }

          const f = displacement.direction().scale(
                  this.gravity * unit.mass * other.mass / Math.pow(distance, 2));

          forces.set(unit, forces.get(unit).add(f));
        }
      }
    }

    const changedUnits = [];

    // Apply forces and artificial friction.
    for (const unit of this.units) {
      const f = forces.get(unit);
      const dV = f.scale(dt / unit.mass);
      console.log(`dV from forces ${dV}`);
      unit.velocity = unit.velocity.add(dV);

      const speed = unit.velocity.magnitude();
      let newSpeed = Math.max(
          0,
          speed - dt * speed * this.proportionalVelocityLossPerSecond);

      if (newSpeed >= this.minNonzeroSpeed || (f.magnitude() / unit.mass > this.minNonzeroSpeed)) {
        console.log(String(newSpeed));
        unit.velocity = unit.velocity.withMagnitude(newSpeed);
      } else {
        unit.velocity = V(0, 0);
      }

      if (unit.velocity.magnitude() > 0) {
        const dP = unit.velocity.scale(dt);
        unit.position = unit.position.add(dP);
        changedUnits.push(unit);
      }
    }

    // Randomize the change callback order to avoid irrelevant bias.
    util.shuffle(changedUnits);
    for (const unit of changedUnits) {
      unit.changeCallbacks.call();
    }
  }

  /** @override */ get agents() {
    return new Set(this.units);
  }
}


/** @implements {VXQ.Agent} */
class Unit {
  constructor(
    /** !vxq.worlds.flatland.World */ world,
    /** number= */ x = 0,
    /** number= */ y = 0
  ) {
    /** @const */
    this.world = world;

    /** @type {!Vector} */
    this.position = V(x, y);

    /** @type {!Vector} */
    this.velocity = V(0, 0);

    /** @const */
    this.radius = 4;

    /** @const */
    this.mass = 1000000000000000;

    /**
     * @type {?Vector} The position this unit is currently trying to remain
     * close to, or null.
     */
    this.targetPosition = null;

    /**
     * @const The maximum distance this unit may be from the target position to
     * be considered to have reached it.
     */
    this.targetMaxDistance = 16;

    /**
     * @const The maximum speed this unit may have to be considered to have
     * reached the target position.
     */
    this.targetMaxSpeed = 4;

    /**
     * @type {?Promise<void>}
     */
    this.currentMove = null;

    /** @override */
    this.changeCallbacks = new util.CallbackList;
  }

  /** @override */ get x() {
    return this.position.x;
  }

  /** @override */ get y() {
    return this.position.y;
  }

  /** @override */ get z() {
    return 0;
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
}


exports = {
  V,
  Vector,
  Unit,
  World
};
