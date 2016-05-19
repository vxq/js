/**
 * @fileoverview Public interfaces used by our code.
 */


/**
 * The public module interface exported from vxq.
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
 * Represents the contents of a world in some way.
 * @interface
 */
VXQ.Renderer = class {
  constructor(/** !VXQ.World */ world) {}
};


/**
 * A world of fixed dimensions with a potentially-changing set of agents.
 * @interface
 */
VXQ.World = class {
  /** @return {number} */
  get height() {}
  /** @return {number} */
  get width() {}

  /**
   * All known agents in the world.
   * @return {!Set<!VXQ.Agent>}
   */
  get agents() {}

  /**
   * A callback list that will be called eventually after any changes to the
   * set of agents in the world.
   * @return {!VXQ.CallbackList}
   */
  get changeCallbacks() {}
};


/**
 * An agent that can be directed around a 3D world.
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
   * A callback list that will be called eventually after any changes to the
   * agent's coordinates.
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
