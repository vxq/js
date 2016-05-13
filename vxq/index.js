goog.module('vxq.main');


exports = () => {
  const message = "Hello, world.";

  for (const n of [1, 2, 3]) {
    console.log(CSS.escape(message));
  }
};

exports();
