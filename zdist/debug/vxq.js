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
;function $module$exports$vxq$debug$assert$$($condition$$1$$, $message$$19$$) {
  if (!$condition$$1$$) {
    throw Error((void 0 === $message$$19$$ ? null : $message$$19$$) || "Assertion failed");
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
function $module$exports$vxq$util$shuffle$$($array$$15$$) {
  for (var $i$$12$$ = 0;$i$$12$$ < $array$$15$$.length - 1;$i$$12$$++) {
    var $value$$86$$ = $array$$15$$[$i$$12$$], $randomIndex$$ = $i$$12$$ + Math.floor(Math.random() * $array$$15$$.length - $i$$12$$);
    $array$$15$$[$i$$12$$] = $array$$15$$[$randomIndex$$];
    $array$$15$$[$randomIndex$$] = $value$$86$$;
  }
}
function $module$exports$vxq$util$elementInView$$($element$$4_rect$$) {
  $element$$4_rect$$ = $element$$4_rect$$.getBoundingClientRect();
  return !(0 > $element$$4_rect$$.bottom || 0 > $element$$4_rect$$.right || $element$$4_rect$$.top > window.innerHeight || $element$$4_rect$$.left > window.innerWidth);
}
;function $module$exports$vxq$worlds$turtles$World$$($width$$12$$, $height$$11$$, $turtles$$) {
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
  for (var $yDelta$$ = $y$$50$$ - this.y, $steps$$ = Math.ceil(Math.sqrt($xDelta_z$$13$$ * $xDelta_z$$13$$ + $yDelta$$ * $yDelta$$) / 4), $i$$13$$ = 0;$i$$13$$ < $steps$$;$i$$13$$++) {
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
function $module$contents$vxq$worlds$flatland$Vector_Vector$$($x$$80$$, $y$$51$$) {
  $module$exports$vxq$debug$assert$$(Number.isFinite($x$$80$$), "x = " + $x$$80$$ + " must be a finite number");
  $module$exports$vxq$debug$assert$$(Number.isFinite($y$$51$$), "y = " + $y$$51$$ + " must be a finite number");
  this.x = $x$$80$$;
  this.y = $y$$51$$;
}
function $JSCompiler_StaticMethods_magnitude$$($JSCompiler_StaticMethods_magnitude$self$$) {
  return Math.sqrt($JSCompiler_StaticMethods_magnitude$self$$.x * $JSCompiler_StaticMethods_magnitude$self$$.x + $JSCompiler_StaticMethods_magnitude$self$$.y * $JSCompiler_StaticMethods_magnitude$self$$.y);
}
function $JSCompiler_StaticMethods_withMagnitude$$($JSCompiler_StaticMethods_withMagnitude$self$$, $magnitude$$) {
  $module$exports$vxq$debug$assert$$(Number.isFinite($magnitude$$), "magnitude = " + $magnitude$$ + " must be a finite number");
  var $currentMagnitude$$ = $JSCompiler_StaticMethods_magnitude$$($JSCompiler_StaticMethods_withMagnitude$self$$);
  return 0 !== $currentMagnitude$$ ? $JSCompiler_StaticMethods_withMagnitude$self$$.scale($magnitude$$ / $currentMagnitude$$) : $module$contents$vxq$worlds$flatland$Vector_V$$(0, 0);
}
$module$contents$vxq$worlds$flatland$Vector_Vector$$.prototype.scale = function $$module$contents$vxq$worlds$flatland$Vector_Vector$$$$scale$($factor$$1$$) {
  $module$exports$vxq$debug$assert$$(Number.isFinite($factor$$1$$), "magnitude = " + $factor$$1$$ + " must be a finite number");
  return 0 == $factor$$1$$ || 0 == this.x && 0 == this.y ? $module$contents$vxq$worlds$flatland$Vector_V$$(0, 0) : $module$contents$vxq$worlds$flatland$Vector_V$$($factor$$1$$ * this.x, $factor$$1$$ * this.y);
};
$module$contents$vxq$worlds$flatland$Vector_Vector$$.prototype.add = function $$module$contents$vxq$worlds$flatland$Vector_Vector$$$$add$($other$$3$$) {
  return $module$contents$vxq$worlds$flatland$Vector_V$$(this.x + $other$$3$$.x, this.y + $other$$3$$.y);
};
function $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_subtract$self$$, $other$$4$$) {
  return $module$contents$vxq$worlds$flatland$Vector_V$$($JSCompiler_StaticMethods_subtract$self$$.x - $other$$4$$.x, $JSCompiler_StaticMethods_subtract$self$$.y - $other$$4$$.y);
}
$module$contents$vxq$worlds$flatland$Vector_Vector$$.prototype.toString = function $$module$contents$vxq$worlds$flatland$Vector_Vector$$$$toString$() {
  return "V(" + this.x + ", " + this.y + ")";
};
var $module$contents$vxq$worlds$flatland$Vector_Vector$V$$, $module$contents$vxq$worlds$flatland$Vector_V$$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$ = function $$module$contents$vxq$worlds$flatland$Vector_Vector$V$$$($x$$82$$, $y$$53$$) {
  return new $module$contents$vxq$worlds$flatland$Vector_Vector$$($x$$82$$, $y$$53$$);
};
function $module$contents$vxq$worlds$flatland$World_World$$($width$$13$$, $height$$12$$) {
  var $$jscomp$this$$1$$ = this;
  this.width = $width$$13$$;
  this.height = $height$$12$$;
  this.changeCallbacks = new $module$exports$vxq$util$CallbackList$$;
  this.$a$ = new Set;
  setInterval(function() {
    for (var $$jscomp$iter$4$$inline_36_forces$$inline_16$$ = new Map, $$jscomp$iter$2$$inline_17_changedUnits$$inline_27$$ = $$jscomp$makeIterator$$($$jscomp$this$$1$$.$a$), $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$ = $$jscomp$iter$2$$inline_17_changedUnits$$inline_27$$.next();!$$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.done;$$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$ = $$jscomp$iter$2$$inline_17_changedUnits$$inline_27$$.next()) {
      for (var $$jscomp$iter$3$$inline_28_unit$$inline_19$$ = $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.value, $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(0, 0), $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$ = $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.add($$jscomp$iter$3$$inline_28_unit$$inline_19$$.$g$), $$jscomp$iter$1$$inline_21_dP$$inline_35_inertia$$inline_30$$ = 
      $$jscomp$makeIterator$$($$jscomp$this$$1$$.$a$), $$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$ = $$jscomp$iter$1$$inline_21_dP$$inline_35_inertia$$inline_30$$.next();!$$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$.done;$$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$ = $$jscomp$iter$1$$inline_21_dP$$inline_35_inertia$$inline_30$$.next()) {
        if ($$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$ = $$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$.value, $$jscomp$iter$3$$inline_28_unit$$inline_19$$ !== $$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$) {
          var $dV$$inline_32_displacement$$inline_24_newSpeed$$inline_34_speed$$inline_33$$ = $JSCompiler_StaticMethods_subtract$$($$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$.$b$, $$jscomp$iter$3$$inline_28_unit$$inline_19$$.$b$), $distance$$inline_25$$ = $JSCompiler_StaticMethods_magnitude$$($dV$$inline_32_displacement$$inline_24_newSpeed$$inline_34_speed$$inline_33$$);
          40 > $distance$$inline_25$$ && ($distance$$inline_25$$ = 40);
          $$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$ = $JSCompiler_StaticMethods_withMagnitude$$($dV$$inline_32_displacement$$inline_24_newSpeed$$inline_34_speed$$inline_33$$, 1).scale(6.67408 * $$jscomp$iter$3$$inline_28_unit$$inline_19$$.$c$ * $$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$.$c$ / Math.pow($distance$$inline_25$$, 2));
          $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$ = $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.add($$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$);
        }
      }
      $$jscomp$iter$4$$inline_36_forces$$inline_16$$.set($$jscomp$iter$3$$inline_28_unit$$inline_19$$, $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$);
    }
    $$jscomp$iter$2$$inline_17_changedUnits$$inline_27$$ = [];
    $$jscomp$iter$3$$inline_28_unit$$inline_19$$ = $$jscomp$makeIterator$$($$jscomp$this$$1$$.$a$);
    for ($$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$ = $$jscomp$iter$3$$inline_28_unit$$inline_19$$.next();!$$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.done;$$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$ = $$jscomp$iter$3$$inline_28_unit$$inline_19$$.next()) {
      $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$ = $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.value, $$jscomp$iter$1$$inline_21_dP$$inline_35_inertia$$inline_30$$ = $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.$c$ * $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.$f$, $$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$ = $$jscomp$iter$4$$inline_36_forces$$inline_16$$.get($$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$), 
      $dV$$inline_32_displacement$$inline_24_newSpeed$$inline_34_speed$$inline_33$$ = $$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$.scale(20 / $$jscomp$iter$1$$inline_21_dP$$inline_35_inertia$$inline_30$$), $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.$a$ = $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.$a$.add($dV$$inline_32_displacement$$inline_24_newSpeed$$inline_34_speed$$inline_33$$), $dV$$inline_32_displacement$$inline_24_newSpeed$$inline_34_speed$$inline_33$$ = 
      $JSCompiler_StaticMethods_magnitude$$($$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.$a$), $dV$$inline_32_displacement$$inline_24_newSpeed$$inline_34_speed$$inline_33$$ = Math.max(0, $dV$$inline_32_displacement$$inline_24_newSpeed$$inline_34_speed$$inline_33$$ - 1 * $dV$$inline_32_displacement$$inline_24_newSpeed$$inline_34_speed$$inline_33$$), 10 <= $dV$$inline_32_displacement$$inline_24_newSpeed$$inline_34_speed$$inline_33$$ || 10 < $JSCompiler_StaticMethods_magnitude$$($$jscomp$key$other$$inline_22_f$$inline_31_fG$$inline_26_other$$inline_23$$) / 
      $$jscomp$iter$1$$inline_21_dP$$inline_35_inertia$$inline_30$$ ? $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.$a$ = $JSCompiler_StaticMethods_withMagnitude$$($$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.$a$, $dV$$inline_32_displacement$$inline_24_newSpeed$$inline_34_speed$$inline_33$$) : $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.$a$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(0, 0), 0 < $JSCompiler_StaticMethods_magnitude$$($$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.$a$) && 
      ($$jscomp$iter$1$$inline_21_dP$$inline_35_inertia$$inline_30$$ = $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.$a$.scale(20), $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.$b$ = $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.$b$.add($$jscomp$iter$1$$inline_21_dP$$inline_35_inertia$$inline_30$$), $$jscomp$iter$2$$inline_17_changedUnits$$inline_27$$.push($$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$));
    }
    $module$exports$vxq$util$shuffle$$($$jscomp$iter$2$$inline_17_changedUnits$$inline_27$$);
    $$jscomp$iter$4$$inline_36_forces$$inline_16$$ = $$jscomp$makeIterator$$($$jscomp$iter$2$$inline_17_changedUnits$$inline_27$$);
    for ($$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$ = $$jscomp$iter$4$$inline_36_forces$$inline_16$$.next();!$$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.done;$$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$ = $$jscomp$iter$4$$inline_36_forces$$inline_16$$.next()) {
      $$jscomp$key$unit$$inline_18_force$$inline_20_unit$11$$inline_29$$.value.changeCallbacks.call();
    }
  }, 20);
}
Object.defineProperties($module$contents$vxq$worlds$flatland$World_World$$.prototype, {agents:{configurable:!0, enumerable:!0, get:function() {
  return new Set(this.$a$);
}}});
function $module$contents$vxq$worlds$flatland$Unit_Unit$$($world$$1$$, $x$$83$$, $y$$54$$) {
  this.$b$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(void 0 === $x$$83$$ ? 0 : $x$$83$$, void 0 === $y$$54$$ ? 0 : $y$$54$$);
  this.$a$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(0, 0);
  this.$g$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(0, 0);
  this.$c$ = 1E4;
  this.$f$ = 1;
  this.$h$ = Promise.resolve();
  this.changeCallbacks = new $module$exports$vxq$util$CallbackList$$;
}
$module$contents$vxq$worlds$flatland$Unit_Unit$$.prototype.goTo = function $$module$contents$vxq$worlds$flatland$Unit_Unit$$$$goTo$($x$$84$$, $y$$55$$) {
  function $go$$() {
    return new Promise(function($resolve$$) {
      function $updateThrust$$() {
        var $displacement$$1$$ = $JSCompiler_StaticMethods_subtract$$($module$contents$vxq$worlds$flatland$Vector_Vector$V$$($x$$84$$, $y$$55$$), $$jscomp$this$$2$$.$b$), $projectedDisplacement_projectedPosition$$ = $$jscomp$this$$2$$.$b$.add($$jscomp$this$$2$$.$a$.scale(.5)), $projectedDisplacement_projectedPosition$$ = $JSCompiler_StaticMethods_subtract$$($module$contents$vxq$worlds$flatland$Vector_Vector$V$$($x$$84$$, $y$$55$$), $projectedDisplacement_projectedPosition$$);
        16 >= $JSCompiler_StaticMethods_magnitude$$($displacement$$1$$) && 1 >= $JSCompiler_StaticMethods_magnitude$$($$jscomp$this$$2$$.$a$) ? ($$jscomp$this$$2$$.$g$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(0, 0), $resolve$$()) : $$jscomp$this$$2$$.$g$ = $JSCompiler_StaticMethods_withMagnitude$$($projectedDisplacement_projectedPosition$$, 175 * $$jscomp$this$$2$$.$c$ * $$jscomp$this$$2$$.$f$);
      }
      $$jscomp$this$$2$$.changeCallbacks.add(function() {
        $updateThrust$$();
      });
      $updateThrust$$();
    });
  }
  var $$jscomp$this$$2$$ = this;
  return this.$h$ = this.$h$.then($go$$, $go$$);
};
Object.defineProperties($module$contents$vxq$worlds$flatland$Unit_Unit$$.prototype, {x:{configurable:!0, enumerable:!0, get:function() {
  return this.$b$.x;
}}, y:{configurable:!0, enumerable:!0, get:function() {
  return this.$b$.y;
}}, z:{configurable:!0, enumerable:!0, get:function() {
  return 0;
}}});
function $module$exports$vxq$testing$assertEquals$$($expected$$, $actual$$) {
  var $message$$inline_39$$ = $expected$$ + " !== " + $actual$$;
  if ($expected$$ !== $actual$$) {
    throw Error((void 0 === $message$$inline_39$$ ? null : $message$$inline_39$$) || "Assertion failed");
  }
}
;function $module$contents$vxq$renderers$FlatCanvas_AgentRender$$($renderer$$, $agent$$) {
  var $$jscomp$this$$3$$ = this;
  this.$c$ = 1E3 * Math.random();
  this.$b$ = $renderer$$;
  this.$a$ = $agent$$;
  this.cancel = $agent$$.changeCallbacks.add(function() {
    return void $$jscomp$this$$3$$.update($agent$$.x, $agent$$.y, $agent$$.z);
  });
}
$module$contents$vxq$renderers$FlatCanvas_AgentRender$$.prototype.update = function $$module$contents$vxq$renderers$FlatCanvas_AgentRender$$$$update$($deltaX_g_x$$85$$, $deltaY_y$$56$$, $deltaZ_opacity_z$$15$$) {
  $deltaX_g_x$$85$$ = void 0 === $deltaX_g_x$$85$$ ? 0 : $deltaX_g_x$$85$$;
  $deltaY_y$$56$$ = void 0 === $deltaY_y$$56$$ ? 0 : $deltaY_y$$56$$;
  $deltaZ_opacity_z$$15$$ = void 0 === $deltaZ_opacity_z$$15$$ ? 0 : $deltaZ_opacity_z$$15$$;
  $module$exports$vxq$util$elementInView$$(this.$b$.$a$) && ($deltaX_g_x$$85$$ -= 0, $deltaY_y$$56$$ -= 0, $deltaZ_opacity_z$$15$$ -= 0, $deltaZ_opacity_z$$15$$ = Math.max(.2, Math.min(1, Math.sqrt($deltaX_g_x$$85$$ * $deltaX_g_x$$85$$ + $deltaY_y$$56$$ * $deltaY_y$$56$$ + $deltaZ_opacity_z$$15$$ * $deltaZ_opacity_z$$15$$) / 100)), $deltaX_g_x$$85$$ = this.$b$.$b$, $deltaX_g_x$$85$$.fillStyle = "hsla(" + this.$c$ + ", 50%, 50%, " + $deltaZ_opacity_z$$15$$ + ")", $deltaX_g_x$$85$$.strokeStyle = "rgba(255, 255, 255, " + 
  $deltaZ_opacity_z$$15$$ + ")", $deltaX_g_x$$85$$.beginPath(), $deltaX_g_x$$85$$.lineWidth = 1, $deltaX_g_x$$85$$.arc(this.$a$.x, this.$a$.y, 6, 0, 2 * Math.PI), $deltaX_g_x$$85$$.fill(), $deltaX_g_x$$85$$.stroke(), $deltaX_g_x$$85$$.strokeStyle = "rgba(0, 0, 0, " + .5 * $deltaZ_opacity_z$$15$$ + ")", $deltaX_g_x$$85$$.beginPath(), $deltaX_g_x$$85$$.lineWidth = 2, $deltaX_g_x$$85$$.arc(this.$a$.x, this.$a$.y, 8, 0, 2 * Math.PI), $deltaX_g_x$$85$$.stroke());
};
function $module$contents$vxq$renderers$FlatCanvas_Pointer$$($source$$12$$, $x$$86$$, $y$$57$$) {
  this.source = $source$$12$$;
  this.x = $x$$86$$;
  this.y = $y$$57$$;
}
function $module$exports$vxq$renderers$FlatCanvas$$($world$$3$$) {
  var $$jscomp$this$$4$$ = this;
  this.$c$ = $world$$3$$;
  this.$a$ = document.createElement("canvas");
  this.$a$.width = this.$c$.width;
  this.$a$.height = this.$c$.height;
  this.$a$.style.cursor = "crosshair";
  this.$g$ = new Set;
  this.$a$.addEventListener("click", function($event_y$$58$$) {
    var $x$$87$$ = $$jscomp$this$$4$$.$a$.width * ($event_y$$58$$.pageX - $$jscomp$this$$4$$.$a$.offsetLeft) / $$jscomp$this$$4$$.$a$.offsetWidth;
    $event_y$$58$$ = $$jscomp$this$$4$$.$a$.height * ($event_y$$58$$.pageY - $$jscomp$this$$4$$.$a$.offsetTop) / $$jscomp$this$$4$$.$a$.offsetHeight;
    for (var $lastAgent$$, $$jscomp$iter$5$$1$$ = $$jscomp$makeIterator$$($$jscomp$this$$4$$.$c$.agents), $$jscomp$key$lastAgent$$ = $$jscomp$iter$5$$1$$.next();!$$jscomp$key$lastAgent$$.done;$$jscomp$key$lastAgent$$ = $$jscomp$iter$5$$1$$.next()) {
      $lastAgent$$ = $$jscomp$key$lastAgent$$.value;
    }
    if ($lastAgent$$) {
      var $pointer$$ = new $module$contents$vxq$renderers$FlatCanvas_Pointer$$($lastAgent$$, $x$$87$$, $event_y$$58$$);
      $$jscomp$this$$4$$.$g$.add($pointer$$);
      $lastAgent$$.goTo($x$$87$$, $event_y$$58$$, 0).then(function() {
        $$jscomp$this$$4$$.$g$.delete($pointer$$);
      });
    }
  });
  this.$b$ = this.$a$.getContext("2d");
  this.$b$.fillStyle = "black";
  this.$b$.fillRect(0, 0, this.$c$.width, this.$c$.height);
  this.$f$ = new Map;
  this.$h$();
  this.$c$.changeCallbacks.add(this.$h$.bind(this));
  var $then$$ = +new Date;
  setInterval(function() {
    var $$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$ = +new Date, $$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$ = ($$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$ - $then$$) / 1E3;
    $then$$ = $$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$;
    if ($module$exports$vxq$util$elementInView$$($$jscomp$this$$4$$.$a$)) {
      $$jscomp$this$$4$$.$b$.fillStyle = "rgba(0, 0, 0, " + .25 * $$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$ + ")";
      $$jscomp$this$$4$$.$b$.fillRect(0, 0, $$jscomp$this$$4$$.$c$.width, $$jscomp$this$$4$$.$c$.height);
      $$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$ = Array.from($$jscomp$this$$4$$.$f$.values());
      $module$exports$vxq$util$shuffle$$($$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$);
      $$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$ = $$jscomp$makeIterator$$($$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$);
      for ($$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$ = $$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$.next();!$$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$.done;$$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$ = $$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$.next()) {
        $$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$.value.update();
      }
      $$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$ = Array.from($$jscomp$this$$4$$.$g$);
      $module$exports$vxq$util$shuffle$$($$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$);
      $$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$ = $$jscomp$makeIterator$$($$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$);
      for ($$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$ = $$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$.next();!$$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$.done;$$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$ = $$jscomp$iter$6$$inline_44_$jscomp$iter$7$$inline_47_now_pointers$$inline_46_renderers$$inline_43$$.next()) {
        $$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$ = $$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$.value, $$jscomp$this$$4$$.$b$.strokeStyle = "rgba(210, 40, 40, 0.75)", $$jscomp$this$$4$$.$b$.beginPath(), $$jscomp$this$$4$$.$b$.lineWidth = 4, $$jscomp$this$$4$$.$b$.moveTo($$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$.source.x, $$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$.source.y), 
        $$jscomp$this$$4$$.$b$.lineTo($$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$.x, $$jscomp$key$pointer$$inline_48_$jscomp$key$renderer$$inline_45_dt$$1_pointer$$inline_49$$.y), $$jscomp$this$$4$$.$b$.stroke();
      }
    } else {
      $$jscomp$this$$4$$.$b$.fillStyle = "black", $$jscomp$this$$4$$.$b$.fillRect(0, 0, $$jscomp$this$$4$$.$c$.width, $$jscomp$this$$4$$.$c$.height);
    }
  }, 100);
}
$module$exports$vxq$renderers$FlatCanvas$$.prototype.$h$ = function $$module$exports$vxq$renderers$FlatCanvas$$$$$h$$() {
  for (var $$jscomp$iter$8$$1_$jscomp$iter$9$$1$$ = $$jscomp$makeIterator$$(this.$f$), $$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$8$$1_$jscomp$iter$9$$1$$.next();!$$jscomp$key$agent_$jscomp$key$render_agent$$1$$.done;$$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$8$$1_$jscomp$iter$9$$1$$.next()) {
    $$jscomp$key$agent_$jscomp$key$render_agent$$1$$.value.cancel();
  }
  this.$f$ = new Map;
  $$jscomp$iter$8$$1_$jscomp$iter$9$$1$$ = $$jscomp$makeIterator$$(this.$c$.agents);
  for ($$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$8$$1_$jscomp$iter$9$$1$$.next();!$$jscomp$key$agent_$jscomp$key$render_agent$$1$$.done;$$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$8$$1_$jscomp$iter$9$$1$$.next()) {
    $$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$key$agent_$jscomp$key$render_agent$$1$$.value, this.$f$.set($$jscomp$key$agent_$jscomp$key$render_agent$$1$$, new $module$contents$vxq$renderers$FlatCanvas_AgentRender$$(this, $$jscomp$key$agent_$jscomp$key$render_agent$$1$$));
  }
};
function $module$contents$vxq$main_VXQModule$$() {
}
$module$contents$vxq$main_VXQModule$$.prototype.test = function $$module$contents$vxq$main_VXQModule$$$$test$() {
  $module$exports$vxq$debug$log$$("Let's testTheTurtles()!");
  $JSCompiler_StaticMethods_testTheTurtles$$();
};
$module$contents$vxq$main_VXQModule$$.prototype.addFlatCanvasWithTurtles = function $$module$contents$vxq$main_VXQModule$$$$addFlatCanvasWithTurtles$($element$$5$$) {
  var $world$$4$$ = new $module$exports$vxq$worlds$turtles$World$$(512, 512, []), $renderer$$2$$ = new $module$exports$vxq$renderers$FlatCanvas$$($world$$4$$);
  $element$$5$$.appendChild($renderer$$2$$.$a$);
  $JSCompiler_StaticMethods_testTheTurtles$$($world$$4$$);
  return $world$$4$$;
};
$module$contents$vxq$main_VXQModule$$.prototype.addFlatCanvasWithFlatland = function $$module$contents$vxq$main_VXQModule$$$$addFlatCanvasWithFlatland$($element$$6_i$$14_unit1_unit2_unit3$$) {
  function $r$$1$$() {
    return .5 + (Math.random() + Math.random() + Math.random()) / 3;
  }
  var $world$$5$$ = new $module$contents$vxq$worlds$flatland$World_World$$(512, 512), $planetComponent_renderer$$3$$ = new $module$exports$vxq$renderers$FlatCanvas$$($world$$5$$);
  $element$$6_i$$14_unit1_unit2_unit3$$.appendChild($planetComponent_renderer$$3$$.$a$);
  $element$$6_i$$14_unit1_unit2_unit3$$ = new $module$contents$vxq$worlds$flatland$Unit_Unit$$(0, 150, 50);
  $element$$6_i$$14_unit1_unit2_unit3$$.$a$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(200, -5);
  $world$$5$$.$a$.add($element$$6_i$$14_unit1_unit2_unit3$$);
  console.log($element$$6_i$$14_unit1_unit2_unit3$$.goTo(500, 500, 0));
  $element$$6_i$$14_unit1_unit2_unit3$$ = new $module$contents$vxq$worlds$flatland$Unit_Unit$$(0, 400, 200);
  $element$$6_i$$14_unit1_unit2_unit3$$.$a$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(-100, 450);
  $world$$5$$.$a$.add($element$$6_i$$14_unit1_unit2_unit3$$);
  console.log($element$$6_i$$14_unit1_unit2_unit3$$.goTo(25, 25, 0));
  $element$$6_i$$14_unit1_unit2_unit3$$ = new $module$contents$vxq$worlds$flatland$Unit_Unit$$(0, 150, 175);
  $element$$6_i$$14_unit1_unit2_unit3$$.$a$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(-65, 125);
  $world$$5$$.$a$.add($element$$6_i$$14_unit1_unit2_unit3$$);
  console.log($element$$6_i$$14_unit1_unit2_unit3$$.goTo(50, 400, 0));
  for ($element$$6_i$$14_unit1_unit2_unit3$$ = 0;4 > $element$$6_i$$14_unit1_unit2_unit3$$;$element$$6_i$$14_unit1_unit2_unit3$$++) {
    $planetComponent_renderer$$3$$ = new $module$contents$vxq$worlds$flatland$Unit_Unit$$(0, 200 + 50 * $r$$1$$(), 200 + 50 * $r$$1$$()), $planetComponent_renderer$$3$$.$c$ *= 10, $planetComponent_renderer$$3$$.$f$ *= 10, $planetComponent_renderer$$3$$.$a$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(5 - 10 * $r$$1$$(), 5 - 10 * $r$$1$$()), $world$$5$$.$a$.add($planetComponent_renderer$$3$$);
  }
  $world$$5$$.changeCallbacks.call();
  return $world$$5$$;
};
function $JSCompiler_StaticMethods_testTheTurtles$$($i$$15_i$13_world$$6$$) {
  $i$$15_i$13_world$$6$$ = void 0 === $i$$15_i$13_world$$6$$ ? new $module$exports$vxq$worlds$turtles$World$$(512, 512, []) : $i$$15_i$13_world$$6$$;
  var $turtle$$ = new $module$exports$vxq$worlds$turtles$Turtle$$;
  $i$$15_i$13_world$$6$$.$a$.add($turtle$$);
  $i$$15_i$13_world$$6$$.changeCallbacks.call();
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
  for ($i$$15_i$13_world$$6$$ = 0;12 > $i$$15_i$13_world$$6$$;$i$$15_i$13_world$$6$$++) {
    $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 100);
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .25);
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 200);
  for ($i$$15_i$13_world$$6$$ = 0;6 > $i$$15_i$13_world$$6$$;$i$$15_i$13_world$$6$$++) {
    $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 50);
  console.log("Test complete.");
}
var $JSCompiler_StaticMethods_exportFromClosure$self$$inline_54$$ = new $module$contents$vxq$main_VXQModule$$;
"object" === typeof module && null != module && (module.exports = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_54$$);
"object" === typeof window && null != window && (window.vxq = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_54$$);

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : null)
