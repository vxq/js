goog.module('vxq.util');


/**
 * A simple callback list of void functions.
 * @implements {VXQ.CallbackList}
 */
vxq.util.CallbackList = class {
  constructor() {
    /** @protected @const {!Array<function():void>} */
    this.callbacks = [];
    /** @protected @const {!Array<!Object>} */
    this.callbackTokens = [];
  }

  add(f) {
    const token = {};
    this.callbackTokens.push(token);
    this.callbacks.push(f);
    return () => {
      const index = this.callbacks.indexOf(token);
      this.callbacks.splice(index, 1);
      this.callbackTokens.splice(index, 1);
    };
  }

  call() {
    for (const f of this.callbacks) {
      f();
    }
  }
}
