goog.module('vxq.renderers.FlatCanvas');
/**
 * @fileoverview Renders a World on a 2D <canvas>.
 */


/** @protected */
class AgentRender {
  constructor(renderer, agent) {
    /**
     * An crude estimate of how much the agent has moved.
     * @type {number}
     */
    this.totalDistance = 0.0;

    /** @const */
    this.hueSeed = Math.random() * 1000;

    /** @type {number} */
    this.lastX = 0.0;
    /** @type {number} */
    this.lastY = 0.0;
    /** @type {number} */
    this.lastZ = 0.0;

    /** @const {!vxq.renderers.FlatCanvas} */
    this.renderer = renderer;

    /** @const {!VXQ.Agent} */
    this.agent = agent;

    /** @const */
    this.cancel = agent.changeCallbacks.add(
        () => void this.update(agent.x, agent.y, agent.z));
  }

  update(x, y, z) {
    const deltaX = x - this.lastX;
    const deltaY = y - this.lastY;
    const deltaZ = z - this.lastZ;
    const distance =
        Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
    this.totalDistance += distance;

    const g = this.renderer.context;

    // slightly dim the surrounding area
    g.fillStyle =
        'hsla(' + (this.hueSeed + 0.05 * this.totalDistance) +
        ', 80%, 10%, 0.04)';

    g.beginPath();
    g.arc(this.agent.x, this.agent.y, 192, 0, 2 * Math.PI);
    g.fill();

    // clearly mark current location
    g.fillStyle =
        'hsla(' + (this.hueSeed + 0.05 * this.totalDistance) +
        ', 50%, 70%, 1.0)';
    g.strokeStyle = 'rgba(255, 255, 255, 0.5)';

    g.beginPath();
    g.arc(this.agent.x, this.agent.y, 6, 0, 2 * Math.PI);
    g.fill();
    g.stroke();
  }
};


/** @implements {VXQ.Renderer} */
exports = class {
  constructor(/** !VXQ.World */ world) {
    /** @const */
    this.world = world;

    /** @const */
    this.canvas = /** @type {!HTMLCanvasElement} */ (
        document.createElement('canvas'));

    this.canvas.width = this.world.width;
    this.canvas.height = this.world.height;

    /** @const */
    this.context = this.canvas.getContext('2d');

    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.world.width, this.world.height);

    /** @protected {!Map<!VXQ.Agent,!AgentRender>} */
    this.renders = new Map();
    this.updateRenders();
    this.world.changeCallbacks.add(this.updateRenders.bind(this));
  }

  updateRenders() {
    for (const render of this.renders) {
      render.cancel();
    }
    this.renders = new Map();
    for (const agent of this.world.agents) {
    this.renders.set(agent, new AgentRender(this, agent));
    }
  }
};
