goog.module('vxq.debug');
/**
 * @fileoverview Provides assertion and logging utilities that are stripped
 * out unless vxq.debug.DEBUG is set.
 */


/** @define {boolean} Whether to enable debug features. */
exports.DEBUG = false;


/**
 * Raises an Error if the condition is false.
 */
exports.assert = (/** * */ condition, /** ?string= */ message = null) => {
  if (exports.DEBUG && !condition) {
    throw new Error(message || 'Assertion failed');
  }
};


/**
 * Logs a message to console.
 * @param {...*} args
 */
exports.log = (...args) => {
  if (exports.DEBUG) {
    console.log(...args);
  }
};
