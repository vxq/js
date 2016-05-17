goog.module('vxq.debug');
/**
 * @fileoverview Provides assertion and logging utilities that are stripped
 * out unless vxq.debug.DEBUG is set.
 */


/** @define {boolean} Whether to enable debug features. */
vxq.debug.DEBUG = false;
const DEBUG = vxq.debug.DEBUG;


/**
 * Raises an Error if the condition is false.
 */
exports.assert = (/** * */ condition, /** ?string= */ message = null) => {
  if (DEBUG && !condition) {
    throw new Error(message || 'Assertion failed');
  }
}


/**
 * Logs a message to console.
 * @param {...*} args
 */
exports.log = (...args) => {
  if (DEBUG) {
    console.log(...args);
  }
}
