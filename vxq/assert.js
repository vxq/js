goog.module('vxq.assert')


class Assert {
  assert(condition:any, message:string=undefined) {
    if (!condition) {
      throw new Error(message);
    }
  }

  equals(expected:number, actual:number) {
    this.assert(expected === actual, `${expected} !== ${actual}`);
  }
}

exports = new Assert;
