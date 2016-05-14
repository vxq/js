/// <reference path="index.d.ts" />
const turtles = require('./turtles.ts');
const assert = require('./assert.ts');
const testTheTurtles = () => {
    const turtle = new turtles.Turtle;
    turtle.foo = 4;
    assert.equals(0, turtle.x);
};
testTheTurtles();
