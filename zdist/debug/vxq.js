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
  var $index$$45$$ = 0;
  return {next:function() {
    return $index$$45$$ == $iterable$$2$$.length ? {done:!0} : {done:!1, value:$iterable$$2$$[$index$$45$$++]};
  }};
}
function $$jscomp$arrayFromIterator$$($iterator$$) {
  for (var $i$$3$$, $arr$$8$$ = [];!($i$$3$$ = $iterator$$.next()).done;) {
    $arr$$8$$.push($i$$3$$.value);
  }
  return $arr$$8$$;
}
;function $module$exports$vxq$debug$assert$$($condition$$1$$) {
  if (!$condition$$1$$) {
    throw Error("Assertion failed");
  }
}
function $module$exports$vxq$debug$log$$($args$$) {
  for (var $$jscomp$restParams$$4$$ = [], $$jscomp$restIndex$$4$$ = 0;$$jscomp$restIndex$$4$$ < arguments.length;++$$jscomp$restIndex$$4$$) {
    $$jscomp$restParams$$4$$[$$jscomp$restIndex$$4$$ - 0] = arguments[$$jscomp$restIndex$$4$$];
  }
  console.log.apply(console, [].concat($$jscomp$restParams$$4$$ instanceof Array ? $$jscomp$restParams$$4$$ : $$jscomp$arrayFromIterator$$($$jscomp$makeIterator$$($$jscomp$restParams$$4$$))));
}
;function $module$exports$vxq$util$CallbackList$$() {
  this.$b$ = [];
  this.$a$ = [];
}
$module$exports$vxq$util$CallbackList$$.prototype.add = function $$module$exports$vxq$util$CallbackList$$$$add$($f$$2$$) {
  var $token$$2$$ = {};
  this.$a$.push($token$$2$$);
  this.$b$.push($f$$2$$);
  return function() {
    var $index$$49$$ = this.$a$.indexOf($token$$2$$);
    this.$b$.splice($index$$49$$, 1);
    this.$a$.splice($index$$49$$, 1);
  }.bind(this);
};
$module$exports$vxq$util$CallbackList$$.prototype.call = function $$module$exports$vxq$util$CallbackList$$$$call$() {
  for (var $$jscomp$iter$0$$ = $$jscomp$makeIterator$$(this.$b$), $$jscomp$key$f_f$$3$$ = $$jscomp$iter$0$$.next();!$$jscomp$key$f_f$$3$$.done;$$jscomp$key$f_f$$3$$ = $$jscomp$iter$0$$.next()) {
    $$jscomp$key$f_f$$3$$ = $$jscomp$key$f_f$$3$$.value, $$jscomp$key$f_f$$3$$();
  }
};
function $module$exports$vxq$worlds$turtles$World$$($width$$12$$, $height$$11$$, $turtles$$) {
  this.width = $width$$12$$;
  this.height = $height$$11$$;
  this.$a$ = new Set($turtles$$);
  this.changeCallbacks = new $module$exports$vxq$util$CallbackList$$;
}
Object.defineProperties($module$exports$vxq$worlds$turtles$World$$.prototype, {agents:{configurable:!0, enumerable:!0, get:function() {
  return this.$a$;
}}});
function $module$exports$vxq$worlds$turtles$Turtle$$() {
  this.y = this.x = 50;
  this.$a$ = this.z = 0;
  this.changeCallbacks = new $module$exports$vxq$util$CallbackList$$;
}
function $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$self$$, $turns$$1$$) {
  $module$exports$vxq$debug$assert$$(Number.isFinite($turns$$1$$));
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$self$$.$a$ -= $turns$$1$$;
}
function $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$self$$, $distance$$) {
  $module$exports$vxq$debug$assert$$(Number.isFinite($distance$$));
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$self$$.goTo($JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$self$$.x + $distance$$ * $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$self$$.$xFactor$, $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$self$$.y + $distance$$ * $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$self$$.$yFactor$, 
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$self$$.z);
}
$module$exports$vxq$worlds$turtles$Turtle$$.prototype.goTo = function $$module$exports$vxq$worlds$turtles$Turtle$$$$goTo$($x$$79$$, $y$$50$$, $xDelta_z$$13$$) {
  $module$exports$vxq$debug$assert$$(Number.isFinite($x$$79$$));
  $module$exports$vxq$debug$assert$$(Number.isFinite($y$$50$$));
  $module$exports$vxq$debug$assert$$(Number.isFinite($xDelta_z$$13$$));
  $xDelta_z$$13$$ = $x$$79$$ - this.x;
  for (var $yDelta$$ = $y$$50$$ - this.y, $steps$$ = Math.ceil(Math.sqrt($xDelta_z$$13$$ * $xDelta_z$$13$$ + $yDelta$$ * $yDelta$$) / 4), $i$$12$$ = 0;$i$$12$$ < $steps$$;$i$$12$$++) {
    this.x += $xDelta_z$$13$$ / $steps$$, this.y += $yDelta$$ / $steps$$, this.changeCallbacks.call();
  }
  this.x = $x$$79$$;
  this.y = $y$$50$$;
  this.changeCallbacks.call();
  return Promise.resolve();
};
Object.defineProperties($module$exports$vxq$worlds$turtles$Turtle$$.prototype, {$xFactor$:{configurable:!0, enumerable:!0, get:function() {
  return -Math.sin(2 * this.$a$ * Math.PI);
}}, $yFactor$:{configurable:!0, enumerable:!0, get:function() {
  return Math.cos(2 * this.$a$ * Math.PI);
}}});
function $module$exports$vxq$worlds$flatland$World$$($width$$13$$, $height$$12$$) {
  var $$jscomp$this$$1$$ = this;
  this.width = $width$$13$$;
  this.height = $height$$12$$;
  this.changeCallbacks = new $module$exports$vxq$util$CallbackList$$;
  this.$a$ = new Set;
  var $then$$ = +new Date;
  setInterval(function() {
    var $fX$$inline_11_now$$ = +new Date, $dt$$ = ($fX$$inline_11_now$$ - $then$$) / 1E3;
    $then$$ = $fX$$inline_11_now$$;
    for (var $fX$$inline_11_now$$ = new Map, $fY$$inline_12$$ = new Map, $$jscomp$iter$1$$inline_13_$jscomp$iter$2$$inline_16$$ = $$jscomp$makeIterator$$($$jscomp$this$$1$$.$a$), $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$ = $$jscomp$iter$1$$inline_13_$jscomp$iter$2$$inline_16$$.next();!$$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.done;$$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$ = $$jscomp$iter$1$$inline_13_$jscomp$iter$2$$inline_16$$.next()) {
      $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$ = $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.value, $fX$$inline_11_now$$.set($$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$, 2), $fY$$inline_12$$.set($$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$, 0);
    }
    $$jscomp$iter$1$$inline_13_$jscomp$iter$2$$inline_16$$ = $$jscomp$makeIterator$$($$jscomp$this$$1$$.$a$);
    for ($$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$ = $$jscomp$iter$1$$inline_13_$jscomp$iter$2$$inline_16$$.next();!$$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.done;$$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$ = $$jscomp$iter$1$$inline_13_$jscomp$iter$2$$inline_16$$.next()) {
      if ($$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$ = $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.value, $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.$a$ += $fX$$inline_11_now$$.get($$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$) / 1, $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.$b$ += $fY$$inline_12$$.get($$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$) / 1, 0 < $dt$$ && (0 != $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.$a$ || 
      0 != $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.$b$)) {
        $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.x += $dt$$ * $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.$a$;
        $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.y += $dt$$ * $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.$b$;
        var $speed$$inline_18$$ = Math.sqrt($$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.$a$ * $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.$a$ + $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.$b$ * $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.$b$), $newSpeed$$inline_19$$ = Math.max(0, $speed$$inline_18$$ - 10 * $dt$$ - $dt$$ * $speed$$inline_18$$ * .2);
        $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.$a$ *= $newSpeed$$inline_19$$ / $speed$$inline_18$$;
        $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.$b$ *= $newSpeed$$inline_19$$ / $speed$$inline_18$$;
        $$jscomp$key$unit$$inline_14_unit$$inline_15_unit$6$$inline_17$$.changeCallbacks.call();
      }
    }
  }, 20);
}
Object.defineProperties($module$exports$vxq$worlds$flatland$World$$.prototype, {agents:{configurable:!0, enumerable:!0, get:function() {
  return new Set(this.$a$);
}}});
function $module$exports$vxq$worlds$flatland$Unit$$($world$$1$$, $x$$80$$, $y$$51$$) {
  this.x = void 0 === $x$$80$$ ? 0 : $x$$80$$;
  this.y = void 0 === $y$$51$$ ? 0 : $y$$51$$;
  this.$b$ = this.$a$ = this.z = 0;
  this.$c$ = null;
  this.changeCallbacks = new $module$exports$vxq$util$CallbackList$$;
}
$module$exports$vxq$worlds$flatland$Unit$$.prototype.goTo = function $$module$exports$vxq$worlds$flatland$Unit$$$$goTo$($x$$81$$, $y$$52$$, $z$$14$$) {
  var $$jscomp$this$$2$$ = this;
  if (this.$c$) {
    var $f$$4$$ = function $$f$$4$$$() {
      return $$jscomp$this$$2$$.goTo($x$$81$$, $y$$52$$, $z$$14$$);
    };
    return this.$c$.then($f$$4$$, $f$$4$$);
  }
  return this.$c$ = new Promise(function($resolve$$) {
    return $resolve$$();
  });
};
function $module$exports$vxq$testing$assertEquals$$($expected$$, $actual$$) {
  var $message$$inline_22$$ = $expected$$ + " !== " + $actual$$;
  if ($expected$$ !== $actual$$) {
    throw Error((void 0 === $message$$inline_22$$ ? null : $message$$inline_22$$) || "Assertion failed");
  }
}
;function $module$contents$vxq$renderers$FlatCanvas_AgentRender$$($renderer$$, $agent$$) {
  var $$jscomp$this$$3$$ = this;
  this.$b$ = 0;
  this.$c$ = 1E3 * Math.random();
  this.$f$ = $renderer$$;
  this.$a$ = $agent$$;
  this.cancel = $agent$$.changeCallbacks.add(function() {
    var $deltaX$$inline_28_g$$inline_31$$ = $agent$$.x - 0, $deltaY$$inline_29$$ = $agent$$.y - 0, $deltaZ$$inline_30$$ = $agent$$.z - 0;
    $$jscomp$this$$3$$.$b$ += Math.sqrt($deltaX$$inline_28_g$$inline_31$$ * $deltaX$$inline_28_g$$inline_31$$ + $deltaY$$inline_29$$ * $deltaY$$inline_29$$ + $deltaZ$$inline_30$$ * $deltaZ$$inline_30$$);
    $deltaX$$inline_28_g$$inline_31$$ = $$jscomp$this$$3$$.$f$.$c$;
    $deltaX$$inline_28_g$$inline_31$$.fillStyle = "hsla(" + ($$jscomp$this$$3$$.$c$ + .05 * $$jscomp$this$$3$$.$b$) + ", 80%, 10%, 0.04)";
    $deltaX$$inline_28_g$$inline_31$$.beginPath();
    $deltaX$$inline_28_g$$inline_31$$.arc($$jscomp$this$$3$$.$a$.x, $$jscomp$this$$3$$.$a$.y, 192, 0, 2 * Math.PI);
    $deltaX$$inline_28_g$$inline_31$$.fill();
    $deltaX$$inline_28_g$$inline_31$$.fillStyle = "hsla(" + ($$jscomp$this$$3$$.$c$ + .05 * $$jscomp$this$$3$$.$b$) + ", 50%, 70%, 1.0)";
    $deltaX$$inline_28_g$$inline_31$$.strokeStyle = "rgba(255, 255, 255, 0.5)";
    $deltaX$$inline_28_g$$inline_31$$.beginPath();
    $deltaX$$inline_28_g$$inline_31$$.arc($$jscomp$this$$3$$.$a$.x, $$jscomp$this$$3$$.$a$.y, 6, 0, 2 * Math.PI);
    $deltaX$$inline_28_g$$inline_31$$.fill();
    $deltaX$$inline_28_g$$inline_31$$.stroke();
  });
}
function $module$exports$vxq$renderers$FlatCanvas$$($world$$2$$) {
  this.$a$ = $world$$2$$;
  this.$b$ = document.createElement("canvas");
  this.$b$.width = this.$a$.width;
  this.$b$.height = this.$a$.height;
  this.$c$ = this.$b$.getContext("2d");
  this.$c$.fillStyle = "black";
  this.$c$.fillRect(0, 0, this.$a$.width, this.$a$.height);
  this.$f$ = new Map;
  this.$g$();
  this.$a$.changeCallbacks.add(this.$g$.bind(this));
}
$module$exports$vxq$renderers$FlatCanvas$$.prototype.$g$ = function $$module$exports$vxq$renderers$FlatCanvas$$$$$g$$() {
  for (var $$jscomp$iter$3_$jscomp$iter$4$$1$$ = $$jscomp$makeIterator$$(this.$f$), $$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$3_$jscomp$iter$4$$1$$.next();!$$jscomp$key$agent_$jscomp$key$render_agent$$1$$.done;$$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$3_$jscomp$iter$4$$1$$.next()) {
    $$jscomp$key$agent_$jscomp$key$render_agent$$1$$.value.cancel();
  }
  this.$f$ = new Map;
  $$jscomp$iter$3_$jscomp$iter$4$$1$$ = $$jscomp$makeIterator$$(this.$a$.agents);
  for ($$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$3_$jscomp$iter$4$$1$$.next();!$$jscomp$key$agent_$jscomp$key$render_agent$$1$$.done;$$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$3_$jscomp$iter$4$$1$$.next()) {
    $$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$key$agent_$jscomp$key$render_agent$$1$$.value, this.$f$.set($$jscomp$key$agent_$jscomp$key$render_agent$$1$$, new $module$contents$vxq$renderers$FlatCanvas_AgentRender$$(this, $$jscomp$key$agent_$jscomp$key$render_agent$$1$$));
  }
};
function $module$contents$vxq$main_VXQModule$$() {
}
$module$contents$vxq$main_VXQModule$$.prototype.test = function $$module$contents$vxq$main_VXQModule$$$$test$() {
  $module$exports$vxq$debug$log$$("Let's testTheTurtles()!");
  $JSCompiler_StaticMethods_testTheTurtles$$();
};
$module$contents$vxq$main_VXQModule$$.prototype.addFlatCanvasWithTurtles = function $$module$contents$vxq$main_VXQModule$$$$addFlatCanvasWithTurtles$($element$$4$$) {
  var $world$$3$$ = new $module$exports$vxq$worlds$turtles$World$$(512, 512, []), $renderer$$1$$ = new $module$exports$vxq$renderers$FlatCanvas$$($world$$3$$);
  $element$$4$$.appendChild($renderer$$1$$.$b$);
  $JSCompiler_StaticMethods_testTheTurtles$$($world$$3$$);
  return $world$$3$$;
};
$module$contents$vxq$main_VXQModule$$.prototype.addFlatCanvasWithFlatland = function $$module$contents$vxq$main_VXQModule$$$$addFlatCanvasWithFlatland$($element$$5_unit1_unit2_unit3$$) {
  function $r$$1$$() {
    return .5 + (Math.random() + Math.random() + Math.random()) / 3;
  }
  var $world$$4$$ = new $module$exports$vxq$worlds$flatland$World$$(512, 512), $renderer$$2$$ = new $module$exports$vxq$renderers$FlatCanvas$$($world$$4$$);
  $element$$5_unit1_unit2_unit3$$.appendChild($renderer$$2$$.$b$);
  $element$$5_unit1_unit2_unit3$$ = new $module$exports$vxq$worlds$flatland$Unit$$(0, 50, 50);
  $element$$5_unit1_unit2_unit3$$.$a$ = 50 * $r$$1$$();
  $element$$5_unit1_unit2_unit3$$.$b$ = 50 * $r$$1$$();
  $world$$4$$.$a$.add($element$$5_unit1_unit2_unit3$$);
  $element$$5_unit1_unit2_unit3$$ = new $module$exports$vxq$worlds$flatland$Unit$$(0, 100, 50);
  $element$$5_unit1_unit2_unit3$$.$a$ = -8 * $r$$1$$();
  $element$$5_unit1_unit2_unit3$$.$b$ = 36 * $r$$1$$();
  $world$$4$$.$a$.add($element$$5_unit1_unit2_unit3$$);
  $element$$5_unit1_unit2_unit3$$ = new $module$exports$vxq$worlds$flatland$Unit$$(0, 100, 175);
  $element$$5_unit1_unit2_unit3$$.$a$ = -4 * $r$$1$$();
  $element$$5_unit1_unit2_unit3$$.$b$ = -20 * $r$$1$$();
  $world$$4$$.$a$.add($element$$5_unit1_unit2_unit3$$);
  $world$$4$$.changeCallbacks.call();
  return $world$$4$$;
};
function $JSCompiler_StaticMethods_testTheTurtles$$($i$$13_i$7_world$$5$$) {
  $i$$13_i$7_world$$5$$ = void 0 === $i$$13_i$7_world$$5$$ ? new $module$exports$vxq$worlds$turtles$World$$(512, 512, []) : $i$$13_i$7_world$$5$$;
  var $turtle$$ = new $module$exports$vxq$worlds$turtles$Turtle$$;
  $i$$13_i$7_world$$5$$.$a$.add($turtle$$);
  $i$$13_i$7_world$$5$$.changeCallbacks.call();
  $module$exports$vxq$testing$assertEquals$$(50, $turtle$$.x);
  $module$exports$vxq$testing$assertEquals$$(50, $turtle$$.y);
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 50);
  $module$exports$vxq$testing$assertEquals$$(50, $turtle$$.x);
  $module$exports$vxq$testing$assertEquals$$(100, $turtle$$.y);
  $module$exports$vxq$debug$assert$$(Number.isFinite(.25));
  $turtle$$.$a$ += .25;
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 25);
  $module$exports$vxq$testing$assertEquals$$(25, $turtle$$.x);
  $module$exports$vxq$testing$assertEquals$$(100, $turtle$$.y);
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .375);
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 100);
  for ($i$$13_i$7_world$$5$$ = 0;12 > $i$$13_i$7_world$$5$$;$i$$13_i$7_world$$5$$++) {
    $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 100);
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .25);
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 200);
  for ($i$$13_i$7_world$$5$$ = 0;6 > $i$$13_i$7_world$$5$$;$i$$13_i$7_world$$5$$++) {
    $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 50);
  console.log("Test complete.");
}
var $JSCompiler_StaticMethods_exportFromClosure$self$$inline_36$$ = new $module$contents$vxq$main_VXQModule$$;
"object" === typeof module && null != module && (module.exports = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_36$$);
"object" === typeof window && null != window && (window.vxq = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_36$$);

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : null)
