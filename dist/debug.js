-function(window, module) {
'use strict';function $$jscomp$scope$Turtle$$($renderer$$) {
  this.$f$ = $renderer$$;
  this.$b$ = this.$a$ = 50;
  this.$c$ = 0;
  $JSCompiler_StaticMethods_render$$(this);
}
function $JSCompiler_StaticMethods_turn$$($JSCompiler_StaticMethods_turn$self$$, $turns$$) {
  $JSCompiler_StaticMethods_turn$self$$.$c$ += $turns$$;
  $JSCompiler_StaticMethods_render$$($JSCompiler_StaticMethods_turn$self$$);
}
function $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$, $distance$$) {
  for (var $x$$58$$ = $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$a$, $y$$42$$ = $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$b$, $steps$$ = Math.ceil($distance$$ / 16), $i$$3$$ = 0;$i$$3$$ < $steps$$;$i$$3$$++) {
    $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$a$ += $distance$$ * $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$xFactor$ / $steps$$, $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$b$ += $distance$$ * $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$yFactor$ / $steps$$, $JSCompiler_StaticMethods_render$$($JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$);
  }
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$a$ = $x$$58$$ + $distance$$ * $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$xFactor$;
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$b$ = $y$$42$$ + $distance$$ * $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$yFactor$;
}
function $JSCompiler_StaticMethods_render$$($JSCompiler_StaticMethods_render$self$$) {
  if ($JSCompiler_StaticMethods_render$self$$.$f$) {
    var $JSCompiler_StaticMethods_turtle$self$$inline_2$$ = $JSCompiler_StaticMethods_render$self$$.$f$;
    $JSCompiler_StaticMethods_turtle$self$$inline_2$$.$a$.fillStyle = "hsl(" + $JSCompiler_StaticMethods_turtle$self$$inline_2$$.$c$ + ", 50%, 50%)";
    $JSCompiler_StaticMethods_turtle$self$$inline_2$$.$c$ += 7;
    $JSCompiler_StaticMethods_turtle$self$$inline_2$$.$a$.strokeStyle = "rgba(255, 255, 255, 0.5)";
    $JSCompiler_StaticMethods_turtle$self$$inline_2$$.$a$.beginPath();
    $JSCompiler_StaticMethods_turtle$self$$inline_2$$.$a$.arc($JSCompiler_StaticMethods_render$self$$.$a$, $JSCompiler_StaticMethods_render$self$$.$b$, 6, 0, 2 * Math.PI);
    $JSCompiler_StaticMethods_turtle$self$$inline_2$$.$a$.fill();
    $JSCompiler_StaticMethods_turtle$self$$inline_2$$.$a$.stroke();
  }
}
Object.defineProperties($$jscomp$scope$Turtle$$.prototype, {$xFactor$:{configurable:!0, enumerable:!0, get:function() {
  return -Math.sin(2 * this.$c$ * Math.PI);
}}, $yFactor$:{configurable:!0, enumerable:!0, get:function() {
  return Math.cos(2 * this.$c$ * Math.PI);
}}});
function $$jscomp$scope$CanvasRenderer$$() {
  this.$b$ = document.createElement("canvas");
  this.$a$ = this.$b$.getContext("2d");
  this.$c$ = 0;
}
;function $JSCompiler_StaticMethods_equals$$($expected$$, $actual$$) {
  if ($expected$$ !== $actual$$) {
    throw Error($expected$$ + " !== " + $actual$$);
  }
}
;function $$jscomp$scope$VXQModule$$() {
}
$$jscomp$scope$VXQModule$$.prototype.test = function $$$jscomp$scope$VXQModule$$$$test$() {
  $JSCompiler_StaticMethods_testTheTurtles$$();
};
$$jscomp$scope$VXQModule$$.prototype.browserTurtleStuff = function $$$jscomp$scope$VXQModule$$$$browserTurtleStuff$() {
  var $renderer$$1$$ = new $$jscomp$scope$CanvasRenderer$$;
  document.body.appendChild($renderer$$1$$.$b$);
  $renderer$$1$$.$b$.width = 512;
  $renderer$$1$$.$b$.height = 512;
  $JSCompiler_StaticMethods_testTheTurtles$$($renderer$$1$$);
};
function $JSCompiler_StaticMethods_testTheTurtles$$($renderer$$2_turtle$$) {
  $renderer$$2_turtle$$ = new $$jscomp$scope$Turtle$$(void 0 === $renderer$$2_turtle$$ ? null : $renderer$$2_turtle$$);
  $JSCompiler_StaticMethods_equals$$(50, $renderer$$2_turtle$$.$a$);
  $JSCompiler_StaticMethods_equals$$(50, $renderer$$2_turtle$$.$b$);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 50);
  $JSCompiler_StaticMethods_equals$$(50, $renderer$$2_turtle$$.$a$);
  $JSCompiler_StaticMethods_equals$$(100, $renderer$$2_turtle$$.$b$);
  $JSCompiler_StaticMethods_turn$$($renderer$$2_turtle$$, .25);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 25);
  $JSCompiler_StaticMethods_equals$$(25, $renderer$$2_turtle$$.$a$);
  $JSCompiler_StaticMethods_equals$$(100, $renderer$$2_turtle$$.$b$);
  $JSCompiler_StaticMethods_turn$$($renderer$$2_turtle$$, -.375);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 100);
  for (var $i$$4_i$0$$ = 0;12 > $i$$4_i$0$$;$i$$4_i$0$$++) {
    $JSCompiler_StaticMethods_turn$$($renderer$$2_turtle$$, -.0625), $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 10);
  }
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 100);
  $JSCompiler_StaticMethods_turn$$($renderer$$2_turtle$$, -.25);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 200);
  for ($i$$4_i$0$$ = 0;6 > $i$$4_i$0$$;$i$$4_i$0$$++) {
    $JSCompiler_StaticMethods_turn$$($renderer$$2_turtle$$, -.0625), $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 10);
  }
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 50);
  console.log("Test complete.");
}
var $JSCompiler_StaticMethods_exportFromClosure$self$$inline_8$$ = new $$jscomp$scope$VXQModule$$;
"object" === typeof module && null != module && (module.exports = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_8$$);
"object" === typeof window && null != window && (window.vxq = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_8$$);

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : {})
