goog.module('vxq.worlds.flatland.World');


const util = goog.require('vxq.util');

const Vector = goog.require('vxq.worlds.flatland.Vector');
const {V} = Vector;


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
    this.gravity = 0.0000000000667408 * 100000000000;

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
      let force = V(0, 0);

      // Magical thrust
      force = force.add(unit.thrust);

      // Gravity
      if (this.gravity !== 0) {
        for (const other of this.units) {
          if (unit === other) continue;

          const displacement = other.position.subtract(unit.position);
          let distance = displacement.magnitude();

          // Prevent gravity from glitchly blowing up.
          if (distance < 40) {
            distance = 40;
          }

          const fG = displacement.direction().scale(
              this.gravity * unit.mass * other.mass / Math.pow(distance, 2));

          force = force.add(fG);
        }
      }

      forces.set(unit, force);
    }


    const changedUnits = [];

    // Apply forces and artificial friction.
    for (const unit of this.units) {
      const inertia = unit.mass * unit.interialAmplification;
      const f = forces.get(unit);
      const dV = f.scale(dt / inertia);
      console.log(`dV from forces ${dV}`);
      unit.velocity = unit.velocity.add(dV);

      const speed = unit.velocity.magnitude();
      let newSpeed = Math.max(
          0,
          speed - dt * speed * this.proportionalVelocityLossPerSecond);

      if (newSpeed >= this.minNonzeroSpeed || (f.magnitude() / inertia > this.minNonzeroSpeed)) {
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


exports = World;
