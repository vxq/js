goog.module('vxq.util');


/**
 * A simple callback list of void functions.
 * @implements {VXQ.CallbackList}
 */
exports.CallbackList = class {
  constructor() {
    /** @protected @const {!Array<function():void>} */
    this.callbacks = [];
    /** @protected @const {!Array<!Object>} */
    this.callbackTokens = [];
  }

  /** @override */ add(f) {
    const token = {}
    this.callbackTokens.push(token);
    this.callbacks.push(f);
    return function() {
      const index = this.callbackTokens.indexOf(token);
      this.callbacks.splice(index, 1);
      this.callbackTokens.splice(index, 1);
    }.bind(this);
  }

  /** Call all of the callbacks. */
  call() {
    for (const f of this.callbacks) {
      f();
    }
  }
};
