goog.module('vxq.main');

const turtles = goog.require('vxq.turtles');
const assert = goog.require('vxq.testing.assert');


/** @implements {IVXQModule} */
class VXQModule {
  /** @override */ test() {
    this.testTheTurtles();
  }

  /** @override */ browserTurtleStuff() {
    const renderer = new turtles.CanvasRenderer();
    document.body.appendChild(renderer.canvas);
    renderer.canvas.width = 512;
    renderer.canvas.height = 512;
    this.testTheTurtles(renderer);
  }

  /** @protected */ testTheTurtles(/** ?turtles.Renderer= */ renderer = null) {
    const turtle = new turtles.Turtle(renderer);

    assert.equals(50, turtle.x);
    assert.equals(50, turtle.y);

    turtle.forward(50);

    assert.equals(50, turtle.x);
    assert.equals(100, turtle.y);

    turtle.turn(1 / 4);
    turtle.forward(25);

    assert.equals(25, turtle.x);
    assert.equals(100, turtle.y);

    turtle.turn(-3 / 8);
    turtle.forward(100);

    for (let i = 0; i < 12; i++) {
      turtle.turn(-1 / 16);
      turtle.forward(10);
    }

    turtle.forward(100);

    turtle.turn(-1 / 4);

    turtle.forward(200);

    for (let i = 0; i < 6; i++) {
      turtle.turn(-1 / 16);
      turtle.forward(10);
    }

    turtle.forward(5 0);

    console.log('Test complete.');
  }

  /** @protected */ exportFromClosure() {
    // to CommonJS
    if (typeof module === 'object' && module != null) {
      module.exports = this;
    }

    // to browsers
    if (typeof window === 'object' && window != null) {
      window['vxq'] = this;
    }
  }
};

exports = new VXQModule;
exports.exportFromClosure();
