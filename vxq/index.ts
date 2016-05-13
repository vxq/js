goog.module('vxq.main');

const util = goog.require('vxq.util')


function add(a:number, b:number):number {
  return a + b;
}

/** @implements {IVxqExports} */
vxq.main.ModuleType_ = class {
  hello() {
    const message = "Hello, world.";

    for (const n of [1, 2, 3]) {
      console.log(message);
    }

    console.log(add(2, ~'3'));
    console.log(util());
  }
};

if (typeof module === 'undefined' && typeof window === 'object') {
  window.module = {};
}

vxq.main.module = exports.module = module.exports = new vxq.main.ModuleType_;
