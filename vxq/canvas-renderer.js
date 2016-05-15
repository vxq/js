/**
 * @fileoverview Renders a world on a 2D <canvas>.
 */

goog.module('vxq.CanvasRenderer');


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

    /** @protected @const */
    this.context = this.canvas.getContext('2d');

    this.redraw();


    let cancels = [];
    for (const agent of this.world.agents) {
      cancels.push(agent.changeCallbacks.add(() => this.redraw()));
    }

    world.changeCallbacks.add(() => {
      for (const cancel of cancels) {
        cancel();
      }
      cancels = [];
      for (const agent of this.world.agents) {
        cancels.push(agent.changeCallbacks.add(() => this.redraw()));
      }
    });
  }

  redraw() {
    this.context.fillStyle = 'rgba(255, 255, 255, 0.01)';
    this.context.fillRect(0, 0, this.world.width, this.world.height);

    this.context.fillStyle = 'hsla(60, 50%, 50%, 0.5)';
    this.context.strokeStyle = 'rgba(255, 255, 255, 0.25)';

    for (const agent of this.world.agents) {
      this.context.beginPath();
      this.context.arc(agent.x, agent.y, 6, 0, 2 * Math.PI);
      this.context.fill();
      this.context.stroke();
    }
  }
};
