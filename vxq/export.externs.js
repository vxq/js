/**
 * @fileoverview Public interfaces used by our code.
 */


/**
 * The public module interface exported from vxq.
 * @interface
 */
let VXQ = class {
  test() {}

  /** @return {!VXQ.Agent} */
  browserTurtleStuff() {}
};


/**
 * An agent that can be directed around a 3D space.
 * @interface
 */
VXQ.Agent = class {
  /** @return {number} */
  get x() {}
  /** @return {number} */
  get y() {}
  /** @return {number} */
  get z() {}

  /**
   * @param {function():void} f A function that will eventually be called
   *     if there this agent's external state changes.
   * @return {function():void} A function that may be called to remove this
   *     callback.
   */
  addChangeCallback(f) {}

  /**
   * Request that the agent attempt to move towards a specific point.
   * The attempt may take time, or not reach the destination.
   * @param {?number=} x
   * @param {?number=} y
   * @param {?number=} z
   * @return {!Promise<void>} A promise that resolves when the agent has
   *     finished attempting to reach the destination.
   */
  goTo(x, y, z) {}
};
