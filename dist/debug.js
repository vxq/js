-function(window, module) {
'use strict';function $vxq$turtles$Turtle$$() {
  this.$a$ = 0;
}
;var $vxq$main$$ = {test:function() {
  var $actual$$inline_0$$ = (new $vxq$turtles$Turtle$$).$a$;
  if (0 !== $actual$$inline_0$$) {
    throw Error("0 !== " + $actual$$inline_0$$);
  }
  console.log("Test complete.");
}};
"object" === typeof module && (module.exports = $vxq$main$$);

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : {})
