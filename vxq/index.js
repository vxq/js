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

    const r = () =>
        0.5 + (Math.random() + Math.random() + Math.random()) / 3;

    const unit1 = new flatland.Unit(world, 150, 50);
    unit1.velocity = flatland.V(200, -15);
    world.units.add(unit1);

    console.log(unit1.goTo(500, 500, 0));

    const unit2 = new flatland.Unit(world, 400, 200);
    unit2.velocity = flatland.V(100, 650);
    world.units.add(unit2);

    console.log(unit2.goTo(25, 25, 0));

    const unit3 = new flatland.Unit(world, 150, 175);
    unit3.velocity = flatland.V(-65, 125);
    world.units.add(unit3);

    console.log(unit3.goTo(50, 400, 0));

    for (let i = 0; i < 4; i++) {
      const planetComponent =
          new flatland.Unit(world, 200 + r() * 50, 200 + r() * 50);
      planetComponent.mass *= 10;
      planetComponent.interialAmplification *= 10;
      planetComponent.velocity =
          flatland.V(5 - 10 * r(), 5 - 10 * r());
      world.units.add(planetComponent);
    }

    world.changeCallbacks.call();

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
