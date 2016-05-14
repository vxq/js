-function(window, module) {
'use strict';function $vxq$turtles$Turtle$$() {
  this.$a$ = 0;
}
;function $$jscomp$scope$VXQModule$$() {
}
$$jscomp$scope$VXQModule$$.prototype.test = function $$$jscomp$scope$VXQModule$$$$test$() {
  var $actual$$inline_2$$ = (new $vxq$turtles$Turtle$$).$a$;
  if (0 !== $actual$$inline_2$$) {
    throw Error("0 !== " + $actual$$inline_2$$);
  }
  console.log("Test complete.");
};
var $vxq$main$$ = new $$jscomp$scope$VXQModule$$;
"object" === typeof module && (module.exports = $vxq$main$$);

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : {})
