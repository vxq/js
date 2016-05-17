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
function $$jscomp$scope$AgentRender$$($renderer$$, $agent$$) {
  var $$jscomp$this$$1$$ = this;
  this.$b$ = 0;
  this.$c$ = 1E3 * Math.random();
  this.$f$ = $renderer$$;
  this.$a$ = $agent$$;
  this.cancel = $agent$$.changeCallbacks.add(function() {
    var $deltaX$$inline_10_g$$inline_13$$ = $agent$$.x - 0, $deltaY$$inline_11$$ = $agent$$.y - 0, $deltaZ$$inline_12$$ = $agent$$.z - 0;
    $$jscomp$this$$1$$.$b$ += Math.sqrt($deltaX$$inline_10_g$$inline_13$$ * $deltaX$$inline_10_g$$inline_13$$ + $deltaY$$inline_11$$ * $deltaY$$inline_11$$ + $deltaZ$$inline_12$$ * $deltaZ$$inline_12$$);
    $deltaX$$inline_10_g$$inline_13$$ = $$jscomp$this$$1$$.$f$.$f$;
    $deltaX$$inline_10_g$$inline_13$$.fillStyle = "hsla(" + ($$jscomp$this$$1$$.$c$ + .05 * $$jscomp$this$$1$$.$b$) + ", 80%, 10%, 0.04)";
    $deltaX$$inline_10_g$$inline_13$$.beginPath();
    $deltaX$$inline_10_g$$inline_13$$.arc($$jscomp$this$$1$$.$a$.x, $$jscomp$this$$1$$.$a$.y, 192, 0, 2 * Math.PI);
    $deltaX$$inline_10_g$$inline_13$$.fill();
    $deltaX$$inline_10_g$$inline_13$$.fillStyle = "hsla(" + ($$jscomp$this$$1$$.$c$ + .05 * $$jscomp$this$$1$$.$b$) + ", 50%, 70%, 1.0)";
    $deltaX$$inline_10_g$$inline_13$$.strokeStyle = "rgba(255, 255, 255, 0.5)";
    $deltaX$$inline_10_g$$inline_13$$.beginPath();
    $deltaX$$inline_10_g$$inline_13$$.arc($$jscomp$this$$1$$.$a$.x, $$jscomp$this$$1$$.$a$.y, 6, 0, 2 * Math.PI);
    $deltaX$$inline_10_g$$inline_13$$.fill();
    $deltaX$$inline_10_g$$inline_13$$.stroke();
  });
}
function $vxq$CanvasRenderer$$($world$$1$$) {
  this.$a$ = $world$$1$$;
  this.$b$ = document.createElement("canvas");
  this.$b$.width = this.$a$.width;
  this.$b$.height = this.$a$.height;
  this.$f$ = this.$b$.getContext("2d");
  this.$f$.fillStyle = "black";
  this.$f$.fillRect(0, 0, this.$a$.width, this.$a$.height);
  this.$c$ = new Map;
  this.$g$();
  this.$a$.changeCallbacks.add(this.$g$.bind(this));
}
$vxq$CanvasRenderer$$.prototype.$g$ = function $$vxq$CanvasRenderer$$$$$g$$() {
  for (var $$jscomp$iter$0_$jscomp$iter$1$$1$$ = $$jscomp$makeIterator$$(this.$c$), $$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$0_$jscomp$iter$1$$1$$.next();!$$jscomp$key$agent_$jscomp$key$render_agent$$1$$.done;$$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$0_$jscomp$iter$1$$1$$.next()) {
    $$jscomp$key$agent_$jscomp$key$render_agent$$1$$.value.cancel();
  }
  this.$c$ = new Map;
  $$jscomp$iter$0_$jscomp$iter$1$$1$$ = $$jscomp$makeIterator$$(this.$a$.agents);
  for ($$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$0_$jscomp$iter$1$$1$$.next();!$$jscomp$key$agent_$jscomp$key$render_agent$$1$$.done;$$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$0_$jscomp$iter$1$$1$$.next()) {
    $$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$key$agent_$jscomp$key$render_agent$$1$$.value, this.$c$.set($$jscomp$key$agent_$jscomp$key$render_agent$$1$$, new $$jscomp$scope$AgentRender$$(this, $$jscomp$key$agent_$jscomp$key$render_agent$$1$$));
  }
};
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
;function $vxq$util$CallbackList$$() {
  this.$b$ = [];
  this.$a$ = [];
}
$vxq$util$CallbackList$$.prototype.add = function $$vxq$util$CallbackList$$$$add$($f$$2$$) {
  var $token$$2$$ = {};
  this.$a$.push($token$$2$$);
  this.$b$.push($f$$2$$);
  return function() {
    var $index$$50$$ = this.$a$.indexOf($token$$2$$);
    this.$b$.splice($index$$50$$, 1);
    this.$a$.splice($index$$50$$, 1);
  }.bind(this);
};
$vxq$util$CallbackList$$.prototype.call = function $$vxq$util$CallbackList$$$$call$() {
  for (var $$jscomp$iter$2$$1$$ = $$jscomp$makeIterator$$(this.$b$), $$jscomp$key$f_f$$3$$ = $$jscomp$iter$2$$1$$.next();!$$jscomp$key$f_f$$3$$.done;$$jscomp$key$f_f$$3$$ = $$jscomp$iter$2$$1$$.next()) {
    $$jscomp$key$f_f$$3$$ = $$jscomp$key$f_f$$3$$.value, $$jscomp$key$f_f$$3$$();
  }
};
function $vxq$turtles$World$$($width$$12$$, $height$$11$$, $turtles$$) {
  this.width = $width$$12$$;
  this.height = $height$$11$$;
  this.$a$ = new Set($turtles$$);
  this.changeCallbacks = new $vxq$util$CallbackList$$;
}
Object.defineProperties($vxq$turtles$World$$.prototype, {agents:{configurable:!0, enumerable:!0, get:function() {
  return this.$a$;
}}});
function $vxq$turtles$Turtle$$() {
  this.y = this.x = 50;
  this.$a$ = this.z = 0;
  this.changeCallbacks = new $vxq$util$CallbackList$$;
}
function $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$left$$($JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$left$self$$, $turns$$1$$) {
  $vxq$debug$assert$$(Number.isFinite($turns$$1$$));
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$left$self$$.$a$ -= $turns$$1$$;
}
function $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$, $distance$$1$$) {
  $vxq$debug$assert$$(Number.isFinite($distance$$1$$));
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$.goTo($JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$.x + $distance$$1$$ * $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$.$xFactor$, $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$.y + $distance$$1$$ * $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$.$yFactor$, $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$.z);
}
$vxq$turtles$Turtle$$.prototype.goTo = function $$vxq$turtles$Turtle$$$$goTo$($x$$80$$, $y$$51$$, $xDelta_z$$14$$) {
  $vxq$debug$assert$$(Number.isFinite($x$$80$$));
  $vxq$debug$assert$$(Number.isFinite($y$$51$$));
  $vxq$debug$assert$$(Number.isFinite($xDelta_z$$14$$));
  $xDelta_z$$14$$ = $x$$80$$ - this.x;
  for (var $yDelta$$ = $y$$51$$ - this.y, $steps$$ = Math.ceil(Math.sqrt($xDelta_z$$14$$ * $xDelta_z$$14$$ + $yDelta$$ * $yDelta$$) / 4), $i$$12$$ = 0;$i$$12$$ < $steps$$;$i$$12$$++) {
    this.x += $xDelta_z$$14$$ / $steps$$, this.y += $yDelta$$ / $steps$$, this.changeCallbacks.call();
  }
  this.x = $x$$80$$;
  this.y = $y$$51$$;
  this.changeCallbacks.call();
  return Promise.resolve();
};
Object.defineProperties($vxq$turtles$Turtle$$.prototype, {$xFactor$:{configurable:!0, enumerable:!0, get:function() {
  return -Math.sin(2 * this.$a$ * Math.PI);
}}, $yFactor$:{configurable:!0, enumerable:!0, get:function() {
  return Math.cos(2 * this.$a$ * Math.PI);
}}});
function $vxq$testing$assertEquals$$($expected$$, $actual$$) {
  var $message$$inline_16$$ = $expected$$ + " !== " + $actual$$;
  if ($expected$$ !== $actual$$) {
    throw Error((void 0 === $message$$inline_16$$ ? null : $message$$inline_16$$) || "Assertion failed");
  }
}
;function $$jscomp$scope$VXQModule$$() {
}
$$jscomp$scope$VXQModule$$.prototype.test = function $$$jscomp$scope$VXQModule$$$$test$() {
  $vxq$debug$log$$("Let's testTheTurtles()!");
  $JSCompiler_StaticMethods_testTheTurtles$$();
};
$$jscomp$scope$VXQModule$$.prototype.addBrowserTurtlePlaygroundNextToCurrentScript = function $$$jscomp$scope$VXQModule$$$$addBrowserTurtlePlaygroundNextToCurrentScript$() {
  var $world$$2$$ = new $vxq$turtles$World$$(512, 512, []), $renderer$$1$$ = new $vxq$CanvasRenderer$$($world$$2$$);
  document.currentScript.parentNode.appendChild($renderer$$1$$.$b$);
  $JSCompiler_StaticMethods_testTheTurtles$$($world$$2$$);
  return $world$$2$$;
};
function $JSCompiler_StaticMethods_testTheTurtles$$($i$$13_i$4_world$$3$$) {
  $i$$13_i$4_world$$3$$ = void 0 === $i$$13_i$4_world$$3$$ ? new $vxq$turtles$World$$(512, 512, []) : $i$$13_i$4_world$$3$$;
  var $turtle$$ = new $vxq$turtles$Turtle$$;
  $i$$13_i$4_world$$3$$.$a$.add($turtle$$);
  $i$$13_i$4_world$$3$$.changeCallbacks.call();
  $vxq$testing$assertEquals$$(50, $turtle$$.x);
  $vxq$testing$assertEquals$$(50, $turtle$$.y);
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 50);
  $vxq$testing$assertEquals$$(50, $turtle$$.x);
  $vxq$testing$assertEquals$$(100, $turtle$$.y);
  $vxq$debug$assert$$(Number.isFinite(.25));
  $turtle$$.$a$ += .25;
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 25);
  $vxq$testing$assertEquals$$(25, $turtle$$.x);
  $vxq$testing$assertEquals$$(100, $turtle$$.y);
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$left$$($turtle$$, .375);
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 100);
  for ($i$$13_i$4_world$$3$$ = 0;12 > $i$$13_i$4_world$$3$$;$i$$13_i$4_world$$3$$++) {
    $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 100);
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$left$$($turtle$$, .25);
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 200);
  for ($i$$13_i$4_world$$3$$ = 0;6 > $i$$13_i$4_world$$3$$;$i$$13_i$4_world$$3$$++) {
    $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 50);
  console.log("Test complete.");
}
var $JSCompiler_StaticMethods_exportFromClosure$self$$inline_21$$ = new $$jscomp$scope$VXQModule$$;
"object" === typeof module && null != module && (module.exports = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_21$$);
"object" === typeof window && null != window && (window.vxq = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_21$$);

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : {})
