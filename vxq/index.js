goog.module('vxq.main');


function add(a:number, b:number):number {
  return a + b;
}


exports = () => {
  const message = "Hello, world.";

  for (const n of [1, 2, 3]) {
    console.log(CSS.escape(message));
  }

  console.log(add(2, ~'3'));
};

exports();
