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
function $$jscomp$arrayFromIterable$$($JSCompiler_temp$$6_iterable$$3_iterator$$inline_8$$) {
  if (!($JSCompiler_temp$$6_iterable$$3_iterator$$inline_8$$ instanceof Array)) {
    $JSCompiler_temp$$6_iterable$$3_iterator$$inline_8$$ = $$jscomp$makeIterator$$($JSCompiler_temp$$6_iterable$$3_iterator$$inline_8$$);
    for (var $i$$inline_9$$, $arr$$inline_10$$ = [];!($i$$inline_9$$ = $JSCompiler_temp$$6_iterable$$3_iterator$$inline_8$$.next()).done;) {
      $arr$$inline_10$$.push($i$$inline_9$$.value);
    }
    $JSCompiler_temp$$6_iterable$$3_iterator$$inline_8$$ = $arr$$inline_10$$;
  }
  return $JSCompiler_temp$$6_iterable$$3_iterator$$inline_8$$;
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
  console.log.apply(console, [].concat($$jscomp$arrayFromIterable$$($$jscomp$restParams$$4$$)));
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
  for (var $$jscomp$iter$0$$ = $$jscomp$makeIterator$$(this.$b$), $$jscomp$key$f_f$$3$$ = $$jscomp$iter$0$$.next();!$$jscomp$key$f_f$$3$$.done;$$jscomp$key$f_f$$3$$ = $$jscomp$iter$0$$.next()) {
    $$jscomp$key$f_f$$3$$ = $$jscomp$key$f_f$$3$$.value, $$jscomp$key$f_f$$3$$();
  }
};
function $vxq$worlds$turtles$World$$($width$$12$$, $height$$11$$, $turtles$$) {
  this.width = $width$$12$$;
  this.height = $height$$11$$;
  this.$a$ = new Set($turtles$$);
  this.changeCallbacks = new $vxq$util$CallbackList$$;
}
Object.defineProperties($vxq$worlds$turtles$World$$.prototype, {agents:{configurable:!0, enumerable:!0, get:function() {
  return this.$a$;
}}});
function $vxq$worlds$turtles$Turtle$$() {
  this.y = this.x = 50;
  this.$a$ = this.z = 0;
  this.changeCallbacks = new $vxq$util$CallbackList$$;
}
function $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$left$$($JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$left$self$$, $turns$$1$$) {
  $vxq$debug$assert$$(Number.isFinite($turns$$1$$));
  $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$left$self$$.$a$ -= $turns$$1$$;
}
function $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$$($JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$self$$, $distance$$) {
  $vxq$debug$assert$$(Number.isFinite($distance$$));
  $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$self$$.goTo($JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$self$$.x + $distance$$ * $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$self$$.$xFactor$, $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$self$$.y + $distance$$ * $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$self$$.$yFactor$, $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$self$$.z);
}
$vxq$worlds$turtles$Turtle$$.prototype.goTo = function $$vxq$worlds$turtles$Turtle$$$$goTo$($x$$79$$, $y$$50$$, $xDelta_z$$13$$) {
  $vxq$debug$assert$$(Number.isFinite($x$$79$$));
  $vxq$debug$assert$$(Number.isFinite($y$$50$$));
  $vxq$debug$assert$$(Number.isFinite($xDelta_z$$13$$));
  $xDelta_z$$13$$ = $x$$79$$ - this.x;
  for (var $yDelta$$ = $y$$50$$ - this.y, $steps$$ = Math.ceil(Math.sqrt($xDelta_z$$13$$ * $xDelta_z$$13$$ + $yDelta$$ * $yDelta$$) / 4), $i$$12$$ = 0;$i$$12$$ < $steps$$;$i$$12$$++) {
    this.x += $xDelta_z$$13$$ / $steps$$, this.y += $yDelta$$ / $steps$$, this.changeCallbacks.call();
  }
  this.x = $x$$79$$;
  this.y = $y$$50$$;
  this.changeCallbacks.call();
  return Promise.resolve();
};
Object.defineProperties($vxq$worlds$turtles$Turtle$$.prototype, {$xFactor$:{configurable:!0, enumerable:!0, get:function() {
  return -Math.sin(2 * this.$a$ * Math.PI);
}}, $yFactor$:{configurable:!0, enumerable:!0, get:function() {
  return Math.cos(2 * this.$a$ * Math.PI);
}}});
Object.defineProperties(function($width$$13$$, $height$$12$$) {
  this.width = $width$$13$$;
  this.height = $height$$12$$;
  this.changeCallbacks = new $vxq$util$CallbackList$$;
  this.units = new Set;
  setInterval(function() {
    for (var $$jscomp$iter$1$$1$$ = $$jscomp$makeIterator$$(this.units), $$jscomp$key$unit$$ = $$jscomp$iter$1$$1$$.next();!$$jscomp$key$unit$$.done;$$jscomp$key$unit$$ = $$jscomp$iter$1$$1$$.next()) {
    }
  }, 100);
}.prototype, {agents:{configurable:!0, enumerable:!0, get:function() {
  return new (Function.prototype.bind.apply(Set, [null].concat($$jscomp$arrayFromIterable$$(this.units))));
}}});
function $vxq$testing$assertEquals$$($expected$$, $actual$$) {
  if ($expected$$ !== $actual$$) {
    throw Error($expected$$ + " !== " + $actual$$ || "Assertion failed");
  }
}
;function $$jscomp$scope$AgentRender$$($renderer$$, $agent$$) {
  var $$jscomp$this$$2$$ = this;
  this.$b$ = 0;
  this.$c$ = 1E3 * Math.random();
  this.$f$ = $renderer$$;
  this.$a$ = $agent$$;
  this.cancel = $agent$$.changeCallbacks.add(function() {
    var $deltaX$$inline_19_g$$inline_22$$ = $agent$$.x - 0, $deltaY$$inline_20$$ = $agent$$.y - 0, $deltaZ$$inline_21$$ = $agent$$.z - 0;
    $$jscomp$this$$2$$.$b$ += Math.sqrt($deltaX$$inline_19_g$$inline_22$$ * $deltaX$$inline_19_g$$inline_22$$ + $deltaY$$inline_20$$ * $deltaY$$inline_20$$ + $deltaZ$$inline_21$$ * $deltaZ$$inline_21$$);
    $deltaX$$inline_19_g$$inline_22$$ = $$jscomp$this$$2$$.$f$.$f$;
    $deltaX$$inline_19_g$$inline_22$$.fillStyle = "hsla(" + ($$jscomp$this$$2$$.$c$ + .05 * $$jscomp$this$$2$$.$b$) + ", 80%, 10%, 0.04)";
    $deltaX$$inline_19_g$$inline_22$$.beginPath();
    $deltaX$$inline_19_g$$inline_22$$.arc($$jscomp$this$$2$$.$a$.x, $$jscomp$this$$2$$.$a$.y, 192, 0, 2 * Math.PI);
    $deltaX$$inline_19_g$$inline_22$$.fill();
    $deltaX$$inline_19_g$$inline_22$$.fillStyle = "hsla(" + ($$jscomp$this$$2$$.$c$ + .05 * $$jscomp$this$$2$$.$b$) + ", 50%, 70%, 1.0)";
    $deltaX$$inline_19_g$$inline_22$$.strokeStyle = "rgba(255, 255, 255, 0.5)";
    $deltaX$$inline_19_g$$inline_22$$.beginPath();
    $deltaX$$inline_19_g$$inline_22$$.arc($$jscomp$this$$2$$.$a$.x, $$jscomp$this$$2$$.$a$.y, 6, 0, 2 * Math.PI);
    $deltaX$$inline_19_g$$inline_22$$.fill();
    $deltaX$$inline_19_g$$inline_22$$.stroke();
  });
}
function $vxq$renderers$FlatCanvas$$($world$$2$$) {
  this.$a$ = $world$$2$$;
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
$vxq$renderers$FlatCanvas$$.prototype.$g$ = function $$vxq$renderers$FlatCanvas$$$$$g$$() {
  for (var $$jscomp$iter$2$$1_$jscomp$iter$3$$ = $$jscomp$makeIterator$$(this.$c$), $$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$2$$1_$jscomp$iter$3$$.next();!$$jscomp$key$agent_$jscomp$key$render_agent$$1$$.done;$$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$2$$1_$jscomp$iter$3$$.next()) {
    $$jscomp$key$agent_$jscomp$key$render_agent$$1$$.value.cancel();
  }
  this.$c$ = new Map;
  $$jscomp$iter$2$$1_$jscomp$iter$3$$ = $$jscomp$makeIterator$$(this.$a$.agents);
  for ($$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$2$$1_$jscomp$iter$3$$.next();!$$jscomp$key$agent_$jscomp$key$render_agent$$1$$.done;$$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$2$$1_$jscomp$iter$3$$.next()) {
    $$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$key$agent_$jscomp$key$render_agent$$1$$.value, this.$c$.set($$jscomp$key$agent_$jscomp$key$render_agent$$1$$, new $$jscomp$scope$AgentRender$$(this, $$jscomp$key$agent_$jscomp$key$render_agent$$1$$));
  }
};
function $$jscomp$scope$VXQModule$$() {
}
$$jscomp$scope$VXQModule$$.prototype.test = function $$$jscomp$scope$VXQModule$$$$test$() {
  $vxq$debug$log$$("Let's testTheTurtles()!");
  $JSCompiler_StaticMethods_testTheTurtles$$();
};
$$jscomp$scope$VXQModule$$.prototype.addBrowserTurtlePlaygroundNextToCurrentScript = function $$$jscomp$scope$VXQModule$$$$addBrowserTurtlePlaygroundNextToCurrentScript$() {
  var $world$$3$$ = new $vxq$worlds$turtles$World$$(512, 512, []), $renderer$$1$$ = new $vxq$renderers$FlatCanvas$$($world$$3$$);
  document.currentScript.parentNode.appendChild($renderer$$1$$.$b$);
  $JSCompiler_StaticMethods_testTheTurtles$$($world$$3$$);
  return $world$$3$$;
};
function $JSCompiler_StaticMethods_testTheTurtles$$($i$$13_i$5_world$$4$$) {
  $i$$13_i$5_world$$4$$ = void 0 === $i$$13_i$5_world$$4$$ ? new $vxq$worlds$turtles$World$$(512, 512, []) : $i$$13_i$5_world$$4$$;
  var $turtle$$ = new $vxq$worlds$turtles$Turtle$$;
  $i$$13_i$5_world$$4$$.$a$.add($turtle$$);
  $i$$13_i$5_world$$4$$.changeCallbacks.call();
  $vxq$testing$assertEquals$$(50, $turtle$$.x);
  $vxq$testing$assertEquals$$(50, $turtle$$.y);
  $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$$($turtle$$, 50);
  $vxq$testing$assertEquals$$(50, $turtle$$.x);
  $vxq$testing$assertEquals$$(100, $turtle$$.y);
  $vxq$debug$assert$$(Number.isFinite(.25));
  $turtle$$.$a$ += .25;
  $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$$($turtle$$, 25);
  $vxq$testing$assertEquals$$(25, $turtle$$.x);
  $vxq$testing$assertEquals$$(100, $turtle$$.y);
  $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$left$$($turtle$$, .375);
  $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$$($turtle$$, 100);
  for ($i$$13_i$5_world$$4$$ = 0;12 > $i$$13_i$5_world$$4$$;$i$$13_i$5_world$$4$$++) {
    $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$$($turtle$$, 100);
  $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$left$$($turtle$$, .25);
  $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$$($turtle$$, 200);
  for ($i$$13_i$5_world$$4$$ = 0;6 > $i$$13_i$5_world$$4$$;$i$$13_i$5_world$$4$$++) {
    $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_vxq_worlds_turtles_Turtle_prototype$forward$$($turtle$$, 50);
  console.log("Test complete.");
}
var $JSCompiler_StaticMethods_exportFromClosure$self$$inline_27$$ = new $$jscomp$scope$VXQModule$$;
"object" === typeof module && null != module && (module.exports = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_27$$);
"object" === typeof window && null != window && (window.vxq = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_27$$);

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : {})
