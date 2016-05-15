goog.module('vxq.main');

const turtles = goog.require('vxq.turtles');
const debug = goog.require('vxq.debug');
const testing = goog.require('vxq.testing');


/** @implements {IVXQModule} */
class VXQModule {
  /** @override */ test() {
    debug.log('Let\'s testTheTurtles()!');
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

    testing.assertEquals(50, turtle.x);
    testing.assertEquals(50, turtle.y);

    turtle.forward(50);
    turtle.dot();

    testing.assertEquals(50, turtle.x);
    testing.assertEquals(100, turtle.y);

    turtle.right(1 / 4);
    turtle.forward(25);

    testing.assertEquals(25, turtle.x);
    testing.assertEquals(100, turtle.y);

    turtle.left(3 / 8);
    turtle.forward(100);
    turtle.dot();

    for (let i = 0; i < 12; i++) {
      turtle.left(1 / 16);
      turtle.forward(10);
    }

    turtle.forward(100);

    turtle.left(1 / 4);
    turtle.dot();

    turtle.forward(200);

    for (let i = 0; i < 6; i++) {
      turtle.left(1 / 16);
      turtle.forward(10);
    }

    turtle.forward(50);

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
