goog.module('vxq.testing');
/** @fileoverview Provides utilities for use in tests. */


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
