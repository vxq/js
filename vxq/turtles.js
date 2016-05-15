goog.module('vxq.turtles');
/** @fileoverview Provides... turtles? */

const debug = goog.require('vxq.debug');


class Turtle {
  constructor(/** ?Renderer */ renderer) {
    this.renderer = renderer;

    /** @type {number} */
    this.x = 50;
    /** @type {number} */
    this.y = 50;

    /**
     * @type {number} The number of turns by which this is rotated clockwise.
     */
    this.rotation = 0;

    this.render();
  }

  get xFactor() {
    return -Math.sin(this.rotation * 2 * Math.PI);
  }

  get yFactor() {
    return Math.cos(this.rotation * 2 * Math.PI);
  }

  right(/** number */ turns) {
    debug.assert(Number.isFinite(turns));
    this.rotation += turns;
  }

  left(/** number */ turns) {
    debug.assert(Number.isFinite(turns));
    this.rotation -= turns;
  }

  forward(/** number */ distance) {
    debug.assert(Number.isFinite(distance));
    this.renderTo(
      this.x + distance * this.xFactor,
      this.y + distance * this.yFactor);
  }

  backward(/** number */ distance) {
    debug.assert(Number.isFinite(distance));
    this.renderTo(
      this.x + -distance * this.xFactor,
      this.y + -distance * this.yFactor);
  }

  renderTo(x, y) {
    const xDelta = x - this.x;
    const yDelta = y - this.y;
    const distance = Math.sqrt(xDelta * xDelta + yDelta * yDelta);

    // Render several stops, possibly with some precision loss.
    const steps = Math.ceil(distance / 16);
    for (let i = 0; i < steps; i++) {
      this.x += xDelta / steps;
      this.y += yDelta / steps;
      this.render();
    }

    this.x = x;
    this.y = y;
  }

  render() {
    this.renderer && this.renderer.turtle(this);
  }

  dot() {
    this.renderer && this.renderer.turtle(this, 'black', 'black');
  }
};


/** @interface */ class Renderer {
  /**
   * @param {!Turtle} t
   * @param {?string=} fillStyle
   * @param {?string=} strokeStyle
   */
  turtle(t, fillStyle, strokeStyle) {}
};


/** @implements {Renderer} */
class CanvasRenderer {
  constructor() {
    /** @const */
    this.canvas = /** @type {!HTMLCanvasElement} */ (
        document.createElement('canvas'));

    /** @const */
    this.context = this.canvas.getContext('2d');

    /** @protected */
    this.hueRotation = 0;
  }

  /** @override */ turtle(t, fillStyle = null, strokeStyle = null) {
    const radians = t.rotation * 2 * Math.PI;

    this.context.fillStyle =
        fillStyle || 'hsla(' + this.hueRotation + ', 50%, 50%, 0.5)';
    this.hueRotation += 7;
    this.context.strokeStyle = strokeStyle || 'rgba(255, 255, 255, 0.25)';

    this.context.beginPath();
    this.context.arc(t.x, t.y, 6, 0, 2 * Math.PI);
    this.context.fill();
    this.context.stroke();
  }
};


exports = {
  Turtle,
  Renderer,
  CanvasRenderer
};
