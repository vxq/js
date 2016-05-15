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
  this.$b$ = $renderer$$;
  this.y = this.x = 50;
  this.$a$ = this.z = 0;
  this.$b$ && $JSCompiler_StaticMethods_turtle$$(this.$b$, this);
  this.$c$ = [];
}
$$jscomp$scope$Turtle$$.prototype.addChangeCallback = function $$$jscomp$scope$Turtle$$$$addChangeCallback$($f$$2$$) {
  var $$jscomp$this$$1$$ = this;
  this.$c$.push($f$$2$$);
  return function() {
    return void $$jscomp$this$$1$$.$c$.splice($$jscomp$this$$1$$.$c$.indexOf($f$$2$$), 1);
  };
};
function $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$left$$($JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$left$self$$, $turns$$1$$) {
  $vxq$debug$assert$$(Number.isFinite($turns$$1$$));
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$left$self$$.$a$ -= $turns$$1$$;
}
function $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$, $distance$$) {
  $vxq$debug$assert$$(Number.isFinite($distance$$));
  $JSCompiler_StaticMethods_renderTo$$($JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$, $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.x + $distance$$ * $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$xFactor$, $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.y + $distance$$ * $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$self$$.$yFactor$);
}
$$jscomp$scope$Turtle$$.prototype.goTo = function $$$jscomp$scope$Turtle$$$$goTo$($x$$79$$, $y$$50$$, $z$$13$$) {
  null != $x$$79$$ && null != $y$$50$$ && $JSCompiler_StaticMethods_renderTo$$(this, $x$$79$$, $y$$50$$);
  null != $z$$13$$ && (this.z = $z$$13$$);
  return Promise.resolve();
};
function $JSCompiler_StaticMethods_renderTo$$($$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$, $$jscomp$key$f$$inline_9_f$$inline_10_x$$80$$, $y$$51$$) {
  for (var $xDelta$$ = $$jscomp$key$f$$inline_9_f$$inline_10_x$$80$$ - $$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$.x, $yDelta$$ = $y$$51$$ - $$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$.y, $steps$$ = Math.ceil(Math.sqrt($xDelta$$ * $xDelta$$ + $yDelta$$ * $yDelta$$) / 16), $i$$12$$ = 0;$i$$12$$ < $steps$$;$i$$12$$++) {
    $$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$.x += $xDelta$$ / $steps$$, $$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$.y += $yDelta$$ / $steps$$, $$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$.$b$ && $JSCompiler_StaticMethods_turtle$$($$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$.$b$, $$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$);
  }
  $$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$.x = $$jscomp$key$f$$inline_9_f$$inline_10_x$$80$$;
  $$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$.y = $y$$51$$;
  $$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$ = $$jscomp$makeIterator$$($$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$.$c$);
  for ($$jscomp$key$f$$inline_9_f$$inline_10_x$$80$$ = $$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$.next();!$$jscomp$key$f$$inline_9_f$$inline_10_x$$80$$.done;$$jscomp$key$f$$inline_9_f$$inline_10_x$$80$$ = $$jscomp$iter$0$$inline_8_JSCompiler_StaticMethods_renderTo$self$$.next()) {
    $$jscomp$key$f$$inline_9_f$$inline_10_x$$80$$ = $$jscomp$key$f$$inline_9_f$$inline_10_x$$80$$.value, $$jscomp$key$f$$inline_9_f$$inline_10_x$$80$$();
  }
}
function $JSCompiler_StaticMethods_dot$$($JSCompiler_StaticMethods_dot$self$$) {
  $JSCompiler_StaticMethods_dot$self$$.$b$ && $JSCompiler_StaticMethods_turtle$$($JSCompiler_StaticMethods_dot$self$$.$b$, $JSCompiler_StaticMethods_dot$self$$, "black", "black");
}
Object.defineProperties($$jscomp$scope$Turtle$$.prototype, {$xFactor$:{configurable:!0, enumerable:!0, get:function() {
  return -Math.sin(2 * this.$a$ * Math.PI);
}}, $yFactor$:{configurable:!0, enumerable:!0, get:function() {
  return Math.cos(2 * this.$a$ * Math.PI);
}}});
function $$jscomp$scope$CanvasRenderer$$() {
  this.$b$ = document.createElement("canvas");
  this.$a$ = this.$b$.getContext("2d");
  this.$c$ = 0;
}
function $JSCompiler_StaticMethods_turtle$$($JSCompiler_StaticMethods_turtle$self$$, $t$$1$$, $fillStyle$$1$$, $strokeStyle$$1$$) {
  $JSCompiler_StaticMethods_turtle$self$$.$a$.fillStyle = (void 0 === $fillStyle$$1$$ ? null : $fillStyle$$1$$) || "hsla(" + $JSCompiler_StaticMethods_turtle$self$$.$c$ + ", 50%, 50%, 0.5)";
  $JSCompiler_StaticMethods_turtle$self$$.$c$ += 7;
  $JSCompiler_StaticMethods_turtle$self$$.$a$.strokeStyle = (void 0 === $strokeStyle$$1$$ ? null : $strokeStyle$$1$$) || "rgba(255, 255, 255, 0.25)";
  $JSCompiler_StaticMethods_turtle$self$$.$a$.beginPath();
  $JSCompiler_StaticMethods_turtle$self$$.$a$.arc($t$$1$$.x, $t$$1$$.y, 6, 0, 2 * Math.PI);
  $JSCompiler_StaticMethods_turtle$self$$.$a$.fill();
  $JSCompiler_StaticMethods_turtle$self$$.$a$.stroke();
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
  $renderer$$1$$.$b$.width = 512;
  $renderer$$1$$.$b$.height = 512;
  document.currentScript.parentNode.appendChild($renderer$$1$$.$b$);
  return $JSCompiler_StaticMethods_testTheTurtles$$($renderer$$1$$);
};
function $JSCompiler_StaticMethods_testTheTurtles$$($renderer$$2_turtle$$) {
  $renderer$$2_turtle$$ = new $$jscomp$scope$Turtle$$(void 0 === $renderer$$2_turtle$$ ? null : $renderer$$2_turtle$$);
  $vxq$testing$assertEquals$$(50, $renderer$$2_turtle$$.x);
  $vxq$testing$assertEquals$$(50, $renderer$$2_turtle$$.y);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 50);
  $JSCompiler_StaticMethods_dot$$($renderer$$2_turtle$$);
  $vxq$testing$assertEquals$$(50, $renderer$$2_turtle$$.x);
  $vxq$testing$assertEquals$$(100, $renderer$$2_turtle$$.y);
  $vxq$debug$assert$$(Number.isFinite(.25));
  $renderer$$2_turtle$$.$a$ += .25;
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 25);
  $vxq$testing$assertEquals$$(25, $renderer$$2_turtle$$.x);
  $vxq$testing$assertEquals$$(100, $renderer$$2_turtle$$.y);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$left$$($renderer$$2_turtle$$, .375);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 100);
  $JSCompiler_StaticMethods_dot$$($renderer$$2_turtle$$);
  for (var $i$$13_i$2$$ = 0;12 > $i$$13_i$2$$;$i$$13_i$2$$++) {
    $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$left$$($renderer$$2_turtle$$, .0625), $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 10);
  }
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 100);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$left$$($renderer$$2_turtle$$, .25);
  $JSCompiler_StaticMethods_dot$$($renderer$$2_turtle$$);
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 200);
  for ($i$$13_i$2$$ = 0;6 > $i$$13_i$2$$;$i$$13_i$2$$++) {
    $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$left$$($renderer$$2_turtle$$, .0625), $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 10);
  }
  $JSCompiler_StaticMethods_$jscomp_scope_Turtle_prototype$forward$$($renderer$$2_turtle$$, 50);
  console.log("Test complete.");
  return $renderer$$2_turtle$$;
}
var $JSCompiler_StaticMethods_exportFromClosure$self$$inline_18$$ = new $$jscomp$scope$VXQModule$$;
"object" === typeof module && null != module && (module.exports = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_18$$);
"object" === typeof window && null != window && (window.vxq = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_18$$);

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : {})