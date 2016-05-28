goog.module('vxq.uis.FlatCanvas');
/**
 * @fileoverview Renders a World on a 2D <canvas>.
 */

const {V} = goog.require('vxq.Vector2D');
const util = goog.require('vxq.util');



/**
 * An agent being rendered.
 * @protected
 */
class AgentRender {
  constructor(
    /** !vxq.uis.FlatCanvas */ renderer,
    /** !VXQ.Agent */ agent
  ) {
    /**
     * An crude estimate of how much the agent has moved.
     * @type {number}
     */
    this.totalDistance = 0.0;

    /** @const */
    this.hueSeed = Math.random() * 1000;

    /** @type {!vxq.Vector2D} */
    this.lastPosition = V(0, 0);

    /** @const */
    this.renderer = renderer;

    /** @const */
    this.agent = agent;

    /** @const */
    this.cancel = agent.changeCallbacks.add(
        () => void this.update(agent.position));
  }

  update(/** !vxq.Vector2D= */ position = this.lastPosition) {
    if (!util.elementInView(this.renderer.canvas)) return;

    const distance = this.lastPosition.subtract(position).magnitude();
    const opacity = Math.max(0.2, Math.min(1.0, distance / 100));

    const g = this.renderer.context;

    g.fillStyle = `hsla(${this.hueSeed}, 50%, 50%, ${opacity})`;
    g.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
    g.beginPath();
    g.lineWidth = 1;
    g.arc(this.agent.position.x, this.agent.position.y, 6, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.strokeStyle = `rgba(0, 0, 0, ${0.5 * opacity})`;
    g.beginPath();
    g.lineWidth = 2;
    g.arc(this.agent.position.x, this.agent.position.y, 8, 0, 2 * Math.PI);
    g.stroke();

  }
}


class Pointer {
  constructor(
      /** !VXQ.World */ world,
      /** !VXQ.Agent */ source,
      /** number */ x,
      /** number */ y
  ) {
    /** @const */
    this.world = world;
    /** @const */
    this.source = source;
    /** @const */
    this.x = x;
    /** @const */
    this.y = y;
    /** @type {boolean} */
    this.active = false;
  }
}


exports = class {
  constructor(/** !VXQ.World */ world) {
    /** @const */
    this.world = world;

    /** @const */
    this.canvas = /** @type {!HTMLCanvasElement} */ (
        document.createElement('canvas'));

    this.canvas.width = Math.min(this.world.dimensions.x, 1000);
    this.canvas.height = Math.min(this.world.dimensions.y, 1000);

    this.canvas.style.cursor = 'crosshair';

    /** @const {!Set<!Pointer>} */
    this.pointers = new Set();

    this.canvas.addEventListener('click', event => {
      const x =
          this.canvas.width * (
              event.pageX - this.canvas.offsetLeft
          ) / this.canvas.offsetWidth;
      const y =
          this.canvas.height * (
              event.pageY - this.canvas.offsetTop
          ) / this.canvas.offsetHeight;

      let lastAgent;
      for (lastAgent of this.world.agents) {}
      if (lastAgent) {
        const pointer = new Pointer(this.world, lastAgent, x, y);
        this.pointers.add(pointer);
        lastAgent.goTo(V(x, y)).then(() => {
          this.pointers.delete(pointer);
        });
      }
    });

    /** @const */
    this.context = this.canvas.getContext('2d');

    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    /** @protected {!Map<!VXQ.Agent,!AgentRender>} */
    this.renders = new Map();
    this.updateRenders();
    this.world.changeCallbacks.add(this.updateRenders.bind(this));

    let then = +new Date;
    /** @type {?number} */
    this.tickInterval = setInterval(() => {
      const now = +new Date;
      const dt = (now - then) / 1000;
      then = now;
      this.tick(dt);
    }, 100);
  }

  tick(/** number */ dt) {
    if (util.elementInView(this.canvas)) {
      this.context.fillStyle = `rgba(0, 0, 0, ${0.25 * dt})`;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

      const renders = Array.from(this.renders.values());
      util.shuffle(renders);
      for (const render of renders) {
        render.update();
      }

      const pointers = Array.from(this.pointers);
      util.shuffle(pointers);
      for (const pointer of pointers) {
        this.context.strokeStyle = 'rgba(210, 40, 40, 0.75)';
        this.context.beginPath();
        this.context.lineWidth = 4;
        this.context.moveTo(pointer.source.x, pointer.source.y);
        this.context.lineTo(pointer.x, pointer.y);
        this.context.stroke();
      }
    } else {
      this.context.fillStyle = `black`;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  /** @protected */ updateRenders() {
    for (const render of this.renders) {
      render.cancel();
    }
    this.renders = new Map();
    for (const agent of this.world.agents) {
        this.renders.set(agent, new AgentRender(this, agent));
    }
  }
};
