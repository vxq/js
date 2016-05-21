goog.module('vxq.debug');
/**
 * @fileoverview Provides assertion and logging utilities that are stripped
 * out unless vxq.debug.DEBUG is set.
 */

const D = goog.require('vxq.D');


/**
 * Raises an Error if the condition is false.
 */
exports.assert = (/** * */ condition, /** ?string= */ message = null) => {
  if (D.DEBUG && !condition) {
    throw new Error(message || 'Assertion failed');
  }
};


/**
 * Logs a message to console.
 * @param {...*} args
 */
exports.log = (...args) => {
  if (D.DEBUG) {
    console.log(...args);
  }
};
