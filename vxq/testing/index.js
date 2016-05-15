goog.module('vxq.testing');


const assert = (condition, /** string= */ message=undefined) => {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

const assertEquals = (expected, actual) => {
  assert(expected === actual, `${expected} !== ${actual}`);
}

exports = {
  assert,
  assertEquals
};
