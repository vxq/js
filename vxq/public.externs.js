/**
 * @fileoverview Public interfaces used by our code.
 */


/**
 * The public module renderer exported from vxq.
 * @interface
 */
let VXQ = class {
  test() {}

  /** @return {!VXQ.World} */
  addFlatCanvasWithTurtles(/** !Element */ el) {}

  /** @return {!VXQ.World} */
  addFlatCanvasWithFlatland(/** !Element */ el) {}
};


/**
 * @interface
 */
VXQ.CallbackList = class {
  /**
   * @param {function():void} f A function to be added to the callback list.
   * @return {function():void} A function that may be called once to remove
   *     this from the callback list.
   */
   add(f) {}
};


/**
 * A world of fixed dimensions with a potentially-changing set of agents.
 * @interface
 */
VXQ.World = class {
  /**
   * @return {!VXQ.Vector3D} A vector of the maximum expected value in each
   *     dimension, or Infinity if there is no known limit.
   */
  get dimensions() {}

  /**
   * @return {!Set<!VXQ.Agent>} All known agents currently in the world.
   *
   * HACK: May or may not be a copy; please do not mutate.
   */
  get agents() {}

  /**
   * @return {!VXQ.CallbackList} A callback list that will be called
   *     eventually after any changes to the set of agents in the world.
   */
  get changeCallbacks() {}
};


/**
 * A vector in a 3D world.
 * @interface
 */
VXQ.Vector3D = class {
  /** @return {!VXQ.Vector3D} */
  static from(/** !VXQ.Vector3D */ vector) {}

  /** @return {number} */
  get x() {}

  /** @return {number} */
  get y() {}

  /** @return {number} */
  get z() {}
};


/**
 * An agent that can be directed around a 3D world.
 * @interface
 */
VXQ.Agent = class {
  /**
   * The agent's current position.
   * @return {!VXQ.Vector3D}
   */
  get position() {}

  /**
   * The direction in which the agent is currently trying to move.
   * Will be zero if the unit is not trying to move.
   * @return {!VXQ.Vector3D}
   */
  get direction() {}

  /**
   * A callback list that will be called eventually after any changes to the
   * agent's .position or .direction.
   * @return {!VXQ.CallbackList}
   */
  get changeCallbacks() {}

  /**
   * Request that the agent attempt to move towards a specific point.
   * The attempt may take time, or not reach the destination.
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @return {!Promise<void>} A promise that resolves when the agent has
   *     finished attempting to reach the destination.
   */
  goTo(x, y, z) {}
};

