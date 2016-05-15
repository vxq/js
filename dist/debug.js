-function(window, module) {
'use strict';var $$jscomp$global$$ = "undefined" != typeof window && window === this ? this : "undefined" != typeof global ? global : this;
function $$jscomp$initSymbol$$() {
  $$jscomp$global$$.Symbol || ($$jscomp$global$$.Symbol = $$jscomp$Symbol$$);
  $$jscomp$initSymbol$$ = function $$$jscomp$initSymbol$$$() {
  };
}
var $$jscomp$symbolCounter_$$ = 0;
function $$jscomp$Symbol$$($description$$5$$) {
  return "jscomp_symbol_" + $description$$5$$ + $$jscomp$symbolCounter_$$++;
}
function $$jscomp$initSymbolIterator$$() {
  $$jscomp$initSymbol$$();
  $$jscomp$global$$.Symbol.iterator || ($$jscomp$global$$.Symbol.iterator = $$jscomp$global$$.Symbol("iterator"));
  $$jscomp$initSymbolIterator$$ = function $$$jscomp$initSymbolIterator$$$() {
  };
}
function $$jscomp$makeIterator$$($iterable$$2$$) {
  $$jscomp$initSymbolIterator$$();
  if ($iterable$$2$$[$$jscomp$global$$.Symbol.iterator]) {
    return $iterable$$2$$[$$jscomp$global$$.Symbol.iterator]();
  }
  var $index$$46$$ = 0;
  return {next:function() {
    return $index$$46$$ == $iterable$$2$$.length ? {done:!0} : {done:!1, value:$iterable$$2$$[$index$$46$$++]};
  }};
}
function $$jscomp$arrayFromIterator$$($iterator$$) {
  for (var $i$$3$$, $arr$$8$$ = [];!($i$$3$$ = $iterator$$.next()).done;) {
    $arr$$8$$.push($i$$3$$.value);
  }
  return $arr$$8$$;
}
function $vxq$debug$assert$$($condition$$1$$) {
  if (!$condition$$1$$) {
    throw Error("Assertion failed");
  }
}
function $vxq$debug$log$$($args$$) {
  for (var $$jscomp$restParams$$4$$ = [], $$jscomp$restIndex$$4$$ = 0;$$jscomp$restIndex$$4$$ < arguments.length;++$$jscomp$restIndex$$4$$) {
    $$jscomp$restParams$$4$$[$$jscomp$restIndex$$4$$ - 0] = arguments[$$jscomp$restIndex$$4$$];
  }
  console.log.apply(console, [].concat($$jscomp$restParams$$4$$ instanceof Array ? $$jscomp$restParams$$4$$ : $$jscomp$arrayFromIterator$$($$jscomp$makeIterator$$($$jscomp$restParams$$4$$))));
}
;function $$jscomp$scope$Turtle$$($renderer$$) {
  this.$c$ = $renderer$$;
  this.$a$ = this.x = 50;
  this.$b$ = 0;
  $JSCompiler_StaticMethods_render$$(this);
}
function $JSCompiler_StaticMethods_turn$$($JSCompiler_StaticMethods_turn$self$$, $turns$$) {
  $vxq$debug$assert$$(Number.isFinite($turns$$));
  $JSCompiler_StaticMethods_turn$self$$.$b$ += $turns$$;
  $JSCompiler_StaticMethods_render$$($JSCompiler_StaticMethods_turn$self$$);
}
function $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$, $distance$$) {
  $vxq$debug$assert$$(Number.isFinite($distance$$));
  for (var $x$$78$$ = $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.x, $y$$49$$ = $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$a$, $steps$$ = Math.ceil($distance$$ / 16), $i$$12$$ = 0;$i$$12$$ < $steps$$;$i$$12$$++) {
    $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.x += $distance$$ * $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$xFactor$ / $steps$$, $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$a$ += $distance$$ * $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$yFactor$ / $steps$$, $JSCompiler_StaticMethods_render$$($JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$);
  }
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.x = $x$$78$$ + $distance$$ * $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$xFactor$;
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$a$ = $y$$49$$ + $distance$$ * $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$yFactor$;
}
function $JSCompiler_StaticMethods_render$$($JSCompiler_StaticMethods_render$self$$) {
  if ($JSCompiler_StaticMethods_render$self$$.$c$) {
    var $JSCompiler_StaticMethods_turtle$self$$inline_3$$ = $JSCompiler_StaticMethods_render$self$$.$c$;
    $JSCompiler_StaticMethods_turtle$self$$inline_3$$.$a$.fillStyle = "hsl(" + $JSCompiler_StaticMethods_turtle$self$$inline_3$$.$c$ + ", 50%, 50%)";
    $JSCompiler_StaticMethods_turtle$self$$inline_3$$.$c$ += 7;
    $JSCompiler_StaticMethods_turtle$self$$inline_3$$.$a$.strokeStyle = "rgba(255, 255, 255, 0.5)";
    $JSCompiler_StaticMethods_turtle$self$$inline_3$$.$a$.beginPath();
    $JSCompiler_StaticMethods_turtle$self$$inline_3$$.$a$.arc($JSCompiler_StaticMethods_render$self$$.x, $JSCompiler_StaticMethods_render$self$$.$a$, 6, 0, 2 * Math.PI);
    $JSCompiler_StaticMethods_turtle$self$$inline_3$$.$a$.fill();
    $JSCompiler_StaticMethods_turtle$self$$inline_3$$.$a$.stroke();
  }
}
Object.defineProperties($$jscomp$scope$Turtle$$.prototype, {$xFactor$:{configurable:!0, enumerable:!0, get:function() {
  return -Math.sin(2 * this.$b$ * Math.PI);
}}, $yFactor$:{configurable:!0, enumerable:!0, get:function() {
  return Math.cos(2 * this.$b$ * Math.PI);
}}});
function $$jscomp$scope$CanvasRenderer$$() {
  this.$b$ = document.createElement("canvas");
  this.$a$ = this.$b$.getContext("2d");
  this.$c$ = 0;
}
;function $vxq$testing$assertEquals$$($expected$$, $actual$$) {
  if ($expected$$ !== $actual$$) {
    throw Error($expected$$ + " !== " + $actual$$ || "Assertion failed");
  }
}
;function $$jscomp$scope$VXQModule$$() {
}
$$jscomp$scope$VXQModule$$.prototype.test = function $$$jscomp$scope$VXQModule$$$$test$() {
  $vxq$debug$log$$("Let's testTheTurtles()!");
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
  $vxq$testing$assertEquals$$(50, $renderer$$2_turtle$$.x);
  $vxq$testing$assertEquals$$(50, $renderer$$2_turtle$$.$a$);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 50);
  $vxq$testing$assertEquals$$(50, $renderer$$2_turtle$$.x);
  $vxq$testing$assertEquals$$(100, $renderer$$2_turtle$$.$a$);
  $JSCompiler_StaticMethods_turn$$($renderer$$2_turtle$$, .25);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 25);
  $vxq$testing$assertEquals$$(25, $renderer$$2_turtle$$.x);
  $vxq$testing$assertEquals$$(100, $renderer$$2_turtle$$.$a$);
  $JSCompiler_StaticMethods_turn$$($renderer$$2_turtle$$, -.375);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 100);
  for (var $i$$13_i$1$$ = 0;12 > $i$$13_i$1$$;$i$$13_i$1$$++) {
    $JSCompiler_StaticMethods_turn$$($renderer$$2_turtle$$, -.0625), $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 10);
  }
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 100);
  $JSCompiler_StaticMethods_turn$$($renderer$$2_turtle$$, -.25);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 200);
  for ($i$$13_i$1$$ = 0;6 > $i$$13_i$1$$;$i$$13_i$1$$++) {
    $JSCompiler_StaticMethods_turn$$($renderer$$2_turtle$$, -.0625), $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 10);
  }
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 50);
  console.log("Test complete.");
}
var $JSCompiler_StaticMethods_exportFromClosure$self$$inline_9$$ = new $$jscomp$scope$VXQModule$$;
"object" === typeof module && null != module && (module.exports = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_9$$);
"object" === typeof window && null != window && (window.vxq = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_9$$);

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : {})
