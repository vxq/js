goog.module('vxq.testing');
/** @fileoverview Provides utilities for use in tests. */


/**
 * Asserts that a condition is truthy.
 * @param {*} condition
 * @param {?string=} message
 */
exports.assert = function(condition, message=null) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

/**
 * Asserts that two values are identical.
 * @param {*} expected
 * @param {*} actual
 */
exports.assertEquals = function(expected, actual) {
  exports.assert(expected === actual, `${expected} !== ${actual}`);
}
