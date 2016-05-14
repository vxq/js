/// <reference path="index.d.ts" />
const util:any = require('./util');


function add(a:number, b:number):number {
  return a + b;
}

/** @implements {IVxqExports} */
const ModuleType_ = class {
  hello() {
    const message = "Hello, world.";

    for (const n of [1, 2, 3]) {
      console.log(message);
    }

    console.log(add(2, Number('3')));
    console.log(util());
  }
};

const vxq:IVxqExports = new ModuleType_;

vxq.hello();

module.exports = vxq;
