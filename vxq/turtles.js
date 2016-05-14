goog.module('vxq.turtles');


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

  turn(/** number */ turns) {
    this.rotation += turns;
    this.render();
  }

  forward(/** number */ distance) {
    const {x, y} = this;

    // Render several stops, possibly with some precision loss.
    const steps = Math.ceil(distance / 16);
    for (let i = 0; i < steps; i++) {
      this.x += distance * this.xFactor / steps;
      this.y += distance * this.yFactor / steps;
      this.render();
    }

    // Jump to precise destination.
    this.x = x + distance * this.xFactor;
    this.y = y + distance * this.yFactor;
  }

  render() {
    this.renderer && this.renderer.turtle(this);
  }
};


/** @interface */ class Renderer {
  turtle(/** !Turtle */ t) {}
};


/** @implements {Renderer} */
class CanvasRenderer {
  constructor() {
    /** @const */
    this.canvas =
        /** @type {!HTMLCanvasElement} */ (document.createElement('canvas'));

    /** @const */
    this.context = this.canvas.getContext('2d');

    /** @protected */
    this.hueRotation = 0;
  }

  /** @override */ turtle(/** !Turtle */ t) {
    const radians = t.rotation * 2 * Math.PI;

    this.context.fillStyle = 'hsl(' + this.hueRotation + ', 50%, 50%)';
    this.hueRotation += 7;
    this.context.strokeStyle = 'rgba(255, 255, 255, 0.5)';

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
