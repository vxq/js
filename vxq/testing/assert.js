goog.module('vxq.testing.assert');


class Assert {
  assert(condition, /** string= */ message=undefined) {
    if (!condition) {
      throw new Error(message);
    }
  }

  equals(expected, actual) {
    this.assert(expected === actual, `${expected} !== ${actual}`);
  }
}

exports = new Assert;
