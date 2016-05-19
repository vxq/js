goog.module('vxq.main');

const turtles = goog.require('vxq.worlds.turtles');
const flatland = goog.require('vxq.worlds.flatland');
const debug = goog.require('vxq.debug');
const testing = goog.require('vxq.testing');
const FlatCanvas = goog.require('vxq.renderers.FlatCanvas');


/** @implements {VXQ} */
class VXQModule {
  /** @override */ test() {
    debug.log('Let\'s testTheTurtles()!');
    this.testTheTurtles();
  }

  /** @override */ addFlatCanvasWithTurtles(element) {
    const world = new turtles.World(512, 512, []);
    const renderer = new FlatCanvas(world);
    element.appendChild(renderer.canvas);
    this.testTheTurtles(world);
    return world;
  }

  /** @override */ addFlatCanvasWithFlatland(element) {
    const world = new flatland.World(512, 512);
    const renderer = new FlatCanvas(world);
    element.appendChild(renderer.canvas);
    return world;
  }

  /** @protected */ testTheTurtles(
    /** !turtles.World= */ world = new turtles.World(512, 512, [])
  ) {
    const turtle = new turtles.Turtle();
    world.turtles.add(turtle);
    world.changeCallbacks.call();

    testing.assertEquals(50, turtle.x);
    testing.assertEquals(50, turtle.y);

    turtle.forward(50);

    testing.assertEquals(50, turtle.x);
    testing.assertEquals(100, turtle.y);

    turtle.right(1 / 4);
    turtle.forward(25);

    testing.assertEquals(25, turtle.x);
    testing.assertEquals(100, turtle.y);

    turtle.left(3 / 8);
    turtle.forward(100);

    for (let i = 0; i < 12; i++) {
      turtle.left(1 / 16);
      turtle.forward(10);
    }

    turtle.forward(100);

    turtle.left(1 / 4);

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
}

exports = new VXQModule;
exports.exportFromClosure();
