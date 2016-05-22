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
    const token = {};
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


/** Randomly shuffles the items in an array. */
exports.shuffle = (/** !Array */ array) => {
  // Fisher–Yates
  for (let i = 0; i < array.length - 1; i++) {
    const value = array[i];
    const randomIndex = i + Math.floor((Math.random() * array.length - i));
    array[i] = array[randomIndex];
    array[randomIndex] = value;
  }
};


/** @return {boolean} Whether the element is currently in the viewport. */
exports.elementInView = element => {
  const rect = element.getBoundingClientRect();
  return !(
      rect.bottom < 0 ||
      rect.right < 0 ||
      rect.top > window.innerHeight ||
      rect.left > window.innerWidth
  );
};
