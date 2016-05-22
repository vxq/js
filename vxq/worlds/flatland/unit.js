goog.module('vxq.worlds.flatland.Unit');


const util = goog.require('vxq.util');

const Vector = goog.require('vxq.worlds.flatland.Vector');
const {V} = Vector;


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

    /** @type {!Vector} */
    this.thrust = V(0, 0);

    /** @const */
    this.radius = 4;

    /** @type {number} */
    this.mass = 10000;

    /**
     * @type {number} A factor by which to multiply the mass of the object
     * when determining its resistance to force. Infinity indicates an
     * immovable object.
     */
    this.interialAmplification = 1.0;

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
    this.targetMaxSpeed = 1.0;

    /**
     * @type {?Promise<void>}
     */
    this.lastMove = Promise.resolve();

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
    const go = () => new Promise(resolve => {
      const cancel = this.changeCallbacks.add(() => {
        updateThrust();
      });

      const updateThrust = () => {
        const displacement = V(x, y).subtract(this.position);

        // Mitigate overshooting by thrusting based on position predicted two
        // seconds from now.
        const projectedPosition =
            this.position.add(this.velocity.scale(1));

        const projectedDisplacement = V(x, y).subtract(projectedPosition);

        if (displacement.magnitude() <= this.targetMaxDistance &&
            this.velocity.magnitude() <= this.targetMaxSpeed) {
          this.thrust = V(0, 0);
          resolve();
        } else {
          const deltaA = 175;
          this.thrust = projectedDisplacement.withMagnitude(
              deltaA * this.mass * this.interialAmplification);
        }
      };
      updateThrust();
    });
    return this.lastMove = this.lastMove.then(go, go);
  }
}


exports = Unit;
