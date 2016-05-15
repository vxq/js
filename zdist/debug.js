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
function $vxq$CanvasRenderer$$($world$$1$$) {
  var $$jscomp$this$$1$$ = this;
  this.$b$ = $world$$1$$;
  this.$c$ = document.createElement("canvas");
  this.$c$.width = this.$b$.width;
  this.$c$.height = this.$b$.height;
  this.$a$ = this.$c$.getContext("2d");
  $JSCompiler_StaticMethods_redraw$$(this);
  for (var $cancels$$ = [], $$jscomp$iter$0$$ = $$jscomp$makeIterator$$(this.$b$.agents), $$jscomp$key$agent$$ = $$jscomp$iter$0$$.next();!$$jscomp$key$agent$$.done;$$jscomp$key$agent$$ = $$jscomp$iter$0$$.next()) {
    $cancels$$.push($$jscomp$key$agent$$.value.changeCallbacks.add(function() {
      return $JSCompiler_StaticMethods_redraw$$($$jscomp$this$$1$$);
    }));
  }
  $world$$1$$.changeCallbacks.add(function() {
    for (var $$jscomp$iter$1$$1_$jscomp$iter$2$$1$$ = $$jscomp$makeIterator$$($cancels$$), $$jscomp$key$agent$$1_$jscomp$key$cancel_cancel$$ = $$jscomp$iter$1$$1_$jscomp$iter$2$$1$$.next();!$$jscomp$key$agent$$1_$jscomp$key$cancel_cancel$$.done;$$jscomp$key$agent$$1_$jscomp$key$cancel_cancel$$ = $$jscomp$iter$1$$1_$jscomp$iter$2$$1$$.next()) {
      $$jscomp$key$agent$$1_$jscomp$key$cancel_cancel$$ = $$jscomp$key$agent$$1_$jscomp$key$cancel_cancel$$.value, $$jscomp$key$agent$$1_$jscomp$key$cancel_cancel$$();
    }
    $cancels$$ = [];
    $$jscomp$iter$1$$1_$jscomp$iter$2$$1$$ = $$jscomp$makeIterator$$($$jscomp$this$$1$$.$b$.agents);
    for ($$jscomp$key$agent$$1_$jscomp$key$cancel_cancel$$ = $$jscomp$iter$1$$1_$jscomp$iter$2$$1$$.next();!$$jscomp$key$agent$$1_$jscomp$key$cancel_cancel$$.done;$$jscomp$key$agent$$1_$jscomp$key$cancel_cancel$$ = $$jscomp$iter$1$$1_$jscomp$iter$2$$1$$.next()) {
      $cancels$$.push($$jscomp$key$agent$$1_$jscomp$key$cancel_cancel$$.value.changeCallbacks.add(function() {
        return $JSCompiler_StaticMethods_redraw$$($$jscomp$this$$1$$);
      }));
    }
  });
}
function $JSCompiler_StaticMethods_redraw$$($JSCompiler_StaticMethods_redraw$self$$) {
  $JSCompiler_StaticMethods_redraw$self$$.$a$.fillStyle = "rgba(255, 255, 255, 0.01)";
  $JSCompiler_StaticMethods_redraw$self$$.$a$.fillRect(0, 0, $JSCompiler_StaticMethods_redraw$self$$.$b$.width, $JSCompiler_StaticMethods_redraw$self$$.$b$.height);
  $JSCompiler_StaticMethods_redraw$self$$.$a$.fillStyle = "hsla(60, 50%, 50%, 0.5)";
  $JSCompiler_StaticMethods_redraw$self$$.$a$.strokeStyle = "rgba(255, 255, 255, 0.25)";
  for (var $$jscomp$iter$3$$ = $$jscomp$makeIterator$$($JSCompiler_StaticMethods_redraw$self$$.$b$.agents), $$jscomp$key$agent$$2_agent$$1$$ = $$jscomp$iter$3$$.next();!$$jscomp$key$agent$$2_agent$$1$$.done;$$jscomp$key$agent$$2_agent$$1$$ = $$jscomp$iter$3$$.next()) {
    $$jscomp$key$agent$$2_agent$$1$$ = $$jscomp$key$agent$$2_agent$$1$$.value, $JSCompiler_StaticMethods_redraw$self$$.$a$.beginPath(), $JSCompiler_StaticMethods_redraw$self$$.$a$.arc($$jscomp$key$agent$$2_agent$$1$$.x, $$jscomp$key$agent$$2_agent$$1$$.y, 6, 0, 2 * Math.PI), $JSCompiler_StaticMethods_redraw$self$$.$a$.fill(), $JSCompiler_StaticMethods_redraw$self$$.$a$.stroke();
  }
}
;function $vxq$debug$assert$$($condition$$1$$) {
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
  var $$jscomp$this$$2$$ = this, $token$$2$$ = {};
  this.$a$.push($token$$2$$);
  this.$b$.push($f$$2$$);
  return function() {
    var $index$$50$$ = $$jscomp$this$$2$$.$a$.indexOf($token$$2$$);
    $$jscomp$this$$2$$.$b$.splice($index$$50$$, 1);
    $$jscomp$this$$2$$.$a$.splice($index$$50$$, 1);
  };
};
$vxq$util$CallbackList$$.prototype.call = function $$vxq$util$CallbackList$$$$call$() {
  for (var $$jscomp$iter$4$$1$$ = $$jscomp$makeIterator$$(this.$b$), $$jscomp$key$f_f$$3$$ = $$jscomp$iter$4$$1$$.next();!$$jscomp$key$f_f$$3$$.done;$$jscomp$key$f_f$$3$$ = $$jscomp$iter$4$$1$$.next()) {
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
function $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$, $distance$$) {
  $vxq$debug$assert$$(Number.isFinite($distance$$));
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$.goTo($JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$.x + $distance$$ * $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$.$xFactor$, $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$.y + $distance$$ * $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$self$$.$yFactor$);
}
$vxq$turtles$Turtle$$.prototype.goTo = function $$vxq$turtles$Turtle$$$$goTo$($x$$79$$, $y$$50$$, $z$$13$$) {
  null != $x$$79$$ && null != $y$$50$$ && this.goTo($x$$79$$, $y$$50$$);
  null != $z$$13$$ && (this.z = $z$$13$$);
  return Promise.resolve();
};
$vxq$turtles$Turtle$$.prototype.goTo = function $$vxq$turtles$Turtle$$$$goTo$($x$$80$$, $y$$51$$) {
  if (null == $x$$80$$ || null == $y$$51$$) {
    return Promise.reject(Error("x and y required"));
  }
  for (var $xDelta$$ = $x$$80$$ - this.x, $yDelta$$ = $y$$51$$ - this.y, $steps$$ = Math.ceil(Math.sqrt($xDelta$$ * $xDelta$$ + $yDelta$$ * $yDelta$$) / 16), $i$$12$$ = 0;$i$$12$$ < $steps$$;$i$$12$$++) {
    this.x += $xDelta$$ / $steps$$, this.y += $yDelta$$ / $steps$$, this.changeCallbacks.call();
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
$$jscomp$scope$VXQModule$$.prototype.addBrowserTurtlePlaygroundNextToCurrentScript = function $$$jscomp$scope$VXQModule$$$$addBrowserTurtlePlaygroundNextToCurrentScript$() {
  var $world$$2$$ = new $vxq$turtles$World$$(512, 512, []), $renderer$$ = new $vxq$CanvasRenderer$$($world$$2$$);
  document.currentScript.parentNode.appendChild($renderer$$.$c$);
  $JSCompiler_StaticMethods_testTheTurtles$$($world$$2$$);
  return $world$$2$$;
};
function $JSCompiler_StaticMethods_testTheTurtles$$($i$$13_i$7_world$$3$$) {
  $i$$13_i$7_world$$3$$ = void 0 === $i$$13_i$7_world$$3$$ ? new $vxq$turtles$World$$(512, 512, []) : $i$$13_i$7_world$$3$$;
  var $turtle$$ = new $vxq$turtles$Turtle$$;
  $i$$13_i$7_world$$3$$.$a$.add($turtle$$);
  $i$$13_i$7_world$$3$$.changeCallbacks.call();
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
  for ($i$$13_i$7_world$$3$$ = 0;12 > $i$$13_i$7_world$$3$$;$i$$13_i$7_world$$3$$++) {
    $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 100);
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$left$$($turtle$$, .25);
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 200);
  for ($i$$13_i$7_world$$3$$ = 0;6 > $i$$13_i$7_world$$3$$;$i$$13_i$7_world$$3$$++) {
    $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_vxq_turtles_Turtle_prototype$forward$$($turtle$$, 50);
  console.log("Test complete.");
}
var $JSCompiler_StaticMethods_exportFromClosure$self$$inline_14$$ = new $$jscomp$scope$VXQModule$$;
"object" === typeof module && null != module && (module.exports = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_14$$);
"object" === typeof window && null != window && (window.vxq = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_14$$);

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : {})
