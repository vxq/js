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
  var $then$$ = +new Date;
  setInterval(function() {
    var $forces$$inline_14_now_value$$inline_51$$ = +new Date, $$jscomp$iter$4$$inline_34_dt_i$$inline_50$$ = ($forces$$inline_14_now_value$$inline_51$$ - $then$$) / 1E3;
    $then$$ = $forces$$inline_14_now_value$$inline_51$$;
    if (!(0 >= $$jscomp$iter$4$$inline_34_dt_i$$inline_50$$)) {
      for (var $forces$$inline_14_now_value$$inline_51$$ = new Map, $$jscomp$iter$2$$inline_15_changedUnits$$inline_25$$ = $$jscomp$makeIterator$$($$jscomp$this$$1$$.$a$), $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$ = $$jscomp$iter$2$$inline_15_changedUnits$$inline_25$$.next();!$$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.done;$$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$ = $$jscomp$iter$2$$inline_15_changedUnits$$inline_25$$.next()) {
        for (var $$jscomp$iter$3$$inline_26_randomIndex$$inline_52_unit$$inline_17$$ = $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.value, $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(0, 0), $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$ = $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.add($$jscomp$iter$3$$inline_26_randomIndex$$inline_52_unit$$inline_17$$.$g$), 
        $$jscomp$iter$1$$inline_19_dP$$inline_33_inertia$$inline_28$$ = $$jscomp$makeIterator$$($$jscomp$this$$1$$.$a$), $$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$ = $$jscomp$iter$1$$inline_19_dP$$inline_33_inertia$$inline_28$$.next();!$$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$.done;$$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$ = $$jscomp$iter$1$$inline_19_dP$$inline_33_inertia$$inline_28$$.next()) {
          if ($$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$ = $$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$.value, $$jscomp$iter$3$$inline_26_randomIndex$$inline_52_unit$$inline_17$$ !== $$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$) {
            var $dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$ = $JSCompiler_StaticMethods_subtract$$($$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$.$b$, $$jscomp$iter$3$$inline_26_randomIndex$$inline_52_unit$$inline_17$$.$b$), $distance$$inline_23$$ = $JSCompiler_StaticMethods_magnitude$$($dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$);
            40 > $distance$$inline_23$$ && ($distance$$inline_23$$ = 40);
            $$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$ = $JSCompiler_StaticMethods_withMagnitude$$($dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$, 1).scale(6.67408 * $$jscomp$iter$3$$inline_26_randomIndex$$inline_52_unit$$inline_17$$.$c$ * $$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$.$c$ / Math.pow($distance$$inline_23$$, 2));
            $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$ = $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.add($$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$);
          }
        }
        $forces$$inline_14_now_value$$inline_51$$.set($$jscomp$iter$3$$inline_26_randomIndex$$inline_52_unit$$inline_17$$, $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$);
      }
      $$jscomp$iter$2$$inline_15_changedUnits$$inline_25$$ = [];
      $$jscomp$iter$3$$inline_26_randomIndex$$inline_52_unit$$inline_17$$ = $$jscomp$makeIterator$$($$jscomp$this$$1$$.$a$);
      for ($$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$ = $$jscomp$iter$3$$inline_26_randomIndex$$inline_52_unit$$inline_17$$.next();!$$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.done;$$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$ = $$jscomp$iter$3$$inline_26_randomIndex$$inline_52_unit$$inline_17$$.next()) {
        $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$ = $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.value, $$jscomp$iter$1$$inline_19_dP$$inline_33_inertia$$inline_28$$ = $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.$c$ * $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.$f$, $$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$ = $forces$$inline_14_now_value$$inline_51$$.get($$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$), 
        $dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$ = $$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$.scale($$jscomp$iter$4$$inline_34_dt_i$$inline_50$$ / $$jscomp$iter$1$$inline_19_dP$$inline_33_inertia$$inline_28$$), console.log("dV from forces " + $dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$), $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.$a$ = $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.$a$.add($dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$), 
        $dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$ = $JSCompiler_StaticMethods_magnitude$$($$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.$a$), $dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$ = Math.max(0, $dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$ - $$jscomp$iter$4$$inline_34_dt_i$$inline_50$$ * $dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$ * .05), 
        10 <= $dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$ || 100 < $JSCompiler_StaticMethods_magnitude$$($$jscomp$key$other$$inline_20_f$$inline_29_fG$$inline_24_other$$inline_21$$) / $$jscomp$iter$1$$inline_19_dP$$inline_33_inertia$$inline_28$$ ? (console.log(String($dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$)), $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.$a$ = $JSCompiler_StaticMethods_withMagnitude$$($$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.$a$, 
        $dV$$inline_30_displacement$$inline_22_newSpeed$$inline_32_speed$$inline_31$$)) : $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.$a$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(0, 0), 0 < $JSCompiler_StaticMethods_magnitude$$($$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.$a$) && ($$jscomp$iter$1$$inline_19_dP$$inline_33_inertia$$inline_28$$ = $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.$a$.scale($$jscomp$iter$4$$inline_34_dt_i$$inline_50$$), 
        $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.$b$ = $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.$b$.add($$jscomp$iter$1$$inline_19_dP$$inline_33_inertia$$inline_28$$), $$jscomp$iter$2$$inline_15_changedUnits$$inline_25$$.push($$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$));
      }
      for ($$jscomp$iter$4$$inline_34_dt_i$$inline_50$$ = 0;$$jscomp$iter$4$$inline_34_dt_i$$inline_50$$ < $$jscomp$iter$2$$inline_15_changedUnits$$inline_25$$.length - 1;$$jscomp$iter$4$$inline_34_dt_i$$inline_50$$++) {
        $forces$$inline_14_now_value$$inline_51$$ = $$jscomp$iter$2$$inline_15_changedUnits$$inline_25$$[$$jscomp$iter$4$$inline_34_dt_i$$inline_50$$], $$jscomp$iter$3$$inline_26_randomIndex$$inline_52_unit$$inline_17$$ = $$jscomp$iter$4$$inline_34_dt_i$$inline_50$$ + Math.floor(Math.random() * $$jscomp$iter$2$$inline_15_changedUnits$$inline_25$$.length - $$jscomp$iter$4$$inline_34_dt_i$$inline_50$$), $$jscomp$iter$2$$inline_15_changedUnits$$inline_25$$[$$jscomp$iter$4$$inline_34_dt_i$$inline_50$$] = 
        $$jscomp$iter$2$$inline_15_changedUnits$$inline_25$$[$$jscomp$iter$3$$inline_26_randomIndex$$inline_52_unit$$inline_17$$], $$jscomp$iter$2$$inline_15_changedUnits$$inline_25$$[$$jscomp$iter$3$$inline_26_randomIndex$$inline_52_unit$$inline_17$$] = $forces$$inline_14_now_value$$inline_51$$;
      }
      $$jscomp$iter$4$$inline_34_dt_i$$inline_50$$ = $$jscomp$makeIterator$$($$jscomp$iter$2$$inline_15_changedUnits$$inline_25$$);
      for ($$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$ = $$jscomp$iter$4$$inline_34_dt_i$$inline_50$$.next();!$$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.done;$$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$ = $$jscomp$iter$4$$inline_34_dt_i$$inline_50$$.next()) {
        $$jscomp$key$unit$$inline_16_force$$inline_18_unit$9$$inline_27$$.value.changeCallbacks.call();
      }
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
        var $displacement$$1$$ = $JSCompiler_StaticMethods_subtract$$($module$contents$vxq$worlds$flatland$Vector_Vector$V$$($x$$84$$, $y$$55$$), $$jscomp$this$$2$$.$b$), $projectedDisplacement_projectedPosition$$ = $$jscomp$this$$2$$.$b$.add($$jscomp$this$$2$$.$a$.scale(2)), $projectedDisplacement_projectedPosition$$ = $JSCompiler_StaticMethods_subtract$$($module$contents$vxq$worlds$flatland$Vector_Vector$V$$($x$$84$$, $y$$55$$), $projectedDisplacement_projectedPosition$$);
        16 >= $JSCompiler_StaticMethods_magnitude$$($displacement$$1$$) && 1 >= $JSCompiler_StaticMethods_magnitude$$($$jscomp$this$$2$$.$a$) ? ($$jscomp$this$$2$$.$g$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(0, 0), $resolve$$()) : $$jscomp$this$$2$$.$g$ = $JSCompiler_StaticMethods_withMagnitude$$($projectedDisplacement_projectedPosition$$, 200 * $$jscomp$this$$2$$.$c$ * $$jscomp$this$$2$$.$f$);
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
  var $message$$inline_37$$ = $expected$$ + " !== " + $actual$$;
  if ($expected$$ !== $actual$$) {
    throw Error((void 0 === $message$$inline_37$$ ? null : $message$$inline_37$$) || "Assertion failed");
  }
}
;function $module$contents$vxq$renderers$FlatCanvas_AgentRender$$($renderer$$, $agent$$) {
  var $$jscomp$this$$3$$ = this;
  this.$c$ = 1E3 * Math.random();
  this.$b$ = $renderer$$;
  this.$a$ = $agent$$;
  this.cancel = $agent$$.changeCallbacks.add(function() {
    return void $JSCompiler_StaticMethods_module$contents$vxq$renderers$FlatCanvas_AgentRender_prototype$update$$($$jscomp$this$$3$$, $agent$$.x, $agent$$.y, $agent$$.z);
  });
}
function $JSCompiler_StaticMethods_module$contents$vxq$renderers$FlatCanvas_AgentRender_prototype$update$$($JSCompiler_StaticMethods_module$contents$vxq$renderers$FlatCanvas_AgentRender_prototype$update$self$$, $deltaX_g_x$$85$$, $deltaY_y$$56$$, $deltaZ_opacity_z$$15$$) {
  $deltaX_g_x$$85$$ = void 0 === $deltaX_g_x$$85$$ ? 0 : $deltaX_g_x$$85$$;
  $deltaY_y$$56$$ = void 0 === $deltaY_y$$56$$ ? 0 : $deltaY_y$$56$$;
  $deltaZ_opacity_z$$15$$ = void 0 === $deltaZ_opacity_z$$15$$ ? 0 : $deltaZ_opacity_z$$15$$;
  $module$exports$vxq$util$elementInView$$($JSCompiler_StaticMethods_module$contents$vxq$renderers$FlatCanvas_AgentRender_prototype$update$self$$.$b$.$b$) && ($deltaX_g_x$$85$$ -= 0, $deltaY_y$$56$$ -= 0, $deltaZ_opacity_z$$15$$ -= 0, $deltaZ_opacity_z$$15$$ = Math.max(.2, Math.min(1, Math.sqrt($deltaX_g_x$$85$$ * $deltaX_g_x$$85$$ + $deltaY_y$$56$$ * $deltaY_y$$56$$ + $deltaZ_opacity_z$$15$$ * $deltaZ_opacity_z$$15$$) / 100)), $deltaX_g_x$$85$$ = $JSCompiler_StaticMethods_module$contents$vxq$renderers$FlatCanvas_AgentRender_prototype$update$self$$.$b$.$c$, 
  $deltaX_g_x$$85$$.fillStyle = "rgba(0, 0, 0, 0.25)", $deltaX_g_x$$85$$.beginPath(), $deltaX_g_x$$85$$.arc($JSCompiler_StaticMethods_module$contents$vxq$renderers$FlatCanvas_AgentRender_prototype$update$self$$.$a$.x, $JSCompiler_StaticMethods_module$contents$vxq$renderers$FlatCanvas_AgentRender_prototype$update$self$$.$a$.y, 8, 0, 2 * Math.PI), $deltaX_g_x$$85$$.fill(), $deltaX_g_x$$85$$.fillStyle = "hsla(" + $JSCompiler_StaticMethods_module$contents$vxq$renderers$FlatCanvas_AgentRender_prototype$update$self$$.$c$ + 
  ", 50%, 50%, " + $deltaZ_opacity_z$$15$$ + ")", $deltaX_g_x$$85$$.strokeStyle = "rgba(255, 255, 255, " + $deltaZ_opacity_z$$15$$ + ")", $deltaX_g_x$$85$$.beginPath(), $deltaX_g_x$$85$$.arc($JSCompiler_StaticMethods_module$contents$vxq$renderers$FlatCanvas_AgentRender_prototype$update$self$$.$a$.x, $JSCompiler_StaticMethods_module$contents$vxq$renderers$FlatCanvas_AgentRender_prototype$update$self$$.$a$.y, 6, 0, 2 * Math.PI), $deltaX_g_x$$85$$.fill(), $deltaX_g_x$$85$$.stroke());
}
function $module$exports$vxq$renderers$FlatCanvas$$($world$$2$$) {
  var $$jscomp$this$$4$$ = this;
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
  var $then$$1$$ = +new Date;
  setInterval(function() {
    var $$jscomp$iter$5$$inline_41_now$$1$$ = +new Date, $$jscomp$key$renderer$$inline_42_dt$$2$$ = ($$jscomp$iter$5$$inline_41_now$$1$$ - $then$$1$$) / 1E3;
    $then$$1$$ = $$jscomp$iter$5$$inline_41_now$$1$$;
    if ($module$exports$vxq$util$elementInView$$($$jscomp$this$$4$$.$b$)) {
      for ($$jscomp$this$$4$$.$c$.fillStyle = "rgba(0, 0, 0, " + .25 * $$jscomp$key$renderer$$inline_42_dt$$2$$ + ")", $$jscomp$this$$4$$.$c$.fillRect(0, 0, $$jscomp$this$$4$$.$a$.width, $$jscomp$this$$4$$.$a$.height), $$jscomp$iter$5$$inline_41_now$$1$$ = $$jscomp$makeIterator$$($$jscomp$this$$4$$.$f$.values()), $$jscomp$key$renderer$$inline_42_dt$$2$$ = $$jscomp$iter$5$$inline_41_now$$1$$.next();!$$jscomp$key$renderer$$inline_42_dt$$2$$.done;$$jscomp$key$renderer$$inline_42_dt$$2$$ = $$jscomp$iter$5$$inline_41_now$$1$$.next()) {
        $JSCompiler_StaticMethods_module$contents$vxq$renderers$FlatCanvas_AgentRender_prototype$update$$($$jscomp$key$renderer$$inline_42_dt$$2$$.value);
      }
    } else {
      $$jscomp$this$$4$$.$c$.fillStyle = "black", $$jscomp$this$$4$$.$c$.fillRect(0, 0, $$jscomp$this$$4$$.$a$.width, $$jscomp$this$$4$$.$a$.height);
    }
  }, 100);
}
$module$exports$vxq$renderers$FlatCanvas$$.prototype.$g$ = function $$module$exports$vxq$renderers$FlatCanvas$$$$$g$$() {
  for (var $$jscomp$iter$6$$1_$jscomp$iter$7$$1$$ = $$jscomp$makeIterator$$(this.$f$), $$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$6$$1_$jscomp$iter$7$$1$$.next();!$$jscomp$key$agent_$jscomp$key$render_agent$$1$$.done;$$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$6$$1_$jscomp$iter$7$$1$$.next()) {
    $$jscomp$key$agent_$jscomp$key$render_agent$$1$$.value.cancel();
  }
  this.$f$ = new Map;
  $$jscomp$iter$6$$1_$jscomp$iter$7$$1$$ = $$jscomp$makeIterator$$(this.$a$.agents);
  for ($$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$6$$1_$jscomp$iter$7$$1$$.next();!$$jscomp$key$agent_$jscomp$key$render_agent$$1$$.done;$$jscomp$key$agent_$jscomp$key$render_agent$$1$$ = $$jscomp$iter$6$$1_$jscomp$iter$7$$1$$.next()) {
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
  var $world$$3$$ = new $module$exports$vxq$worlds$turtles$World$$(512, 512, []), $renderer$$2$$ = new $module$exports$vxq$renderers$FlatCanvas$$($world$$3$$);
  $element$$5$$.appendChild($renderer$$2$$.$b$);
  $JSCompiler_StaticMethods_testTheTurtles$$($world$$3$$);
  return $world$$3$$;
};
$module$contents$vxq$main_VXQModule$$.prototype.addFlatCanvasWithFlatland = function $$module$contents$vxq$main_VXQModule$$$$addFlatCanvasWithFlatland$($element$$6_i$$14_unit1_unit2_unit3$$) {
  function $r$$1$$() {
    return .5 + (Math.random() + Math.random() + Math.random()) / 3;
  }
  var $world$$4$$ = new $module$contents$vxq$worlds$flatland$World_World$$(512, 512), $planetComponent_renderer$$3$$ = new $module$exports$vxq$renderers$FlatCanvas$$($world$$4$$);
  $element$$6_i$$14_unit1_unit2_unit3$$.appendChild($planetComponent_renderer$$3$$.$b$);
  $element$$6_i$$14_unit1_unit2_unit3$$ = new $module$contents$vxq$worlds$flatland$Unit_Unit$$(0, 150, 50);
  $element$$6_i$$14_unit1_unit2_unit3$$.$a$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(200, -15);
  $world$$4$$.$a$.add($element$$6_i$$14_unit1_unit2_unit3$$);
  console.log($element$$6_i$$14_unit1_unit2_unit3$$.goTo(500, 500, 0));
  $element$$6_i$$14_unit1_unit2_unit3$$ = new $module$contents$vxq$worlds$flatland$Unit_Unit$$(0, 400, 200);
  $element$$6_i$$14_unit1_unit2_unit3$$.$a$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(100, 650);
  $world$$4$$.$a$.add($element$$6_i$$14_unit1_unit2_unit3$$);
  console.log($element$$6_i$$14_unit1_unit2_unit3$$.goTo(25, 25, 0));
  $element$$6_i$$14_unit1_unit2_unit3$$ = new $module$contents$vxq$worlds$flatland$Unit_Unit$$(0, 150, 175);
  $element$$6_i$$14_unit1_unit2_unit3$$.$a$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(-65, 125);
  $world$$4$$.$a$.add($element$$6_i$$14_unit1_unit2_unit3$$);
  console.log($element$$6_i$$14_unit1_unit2_unit3$$.goTo(50, 400, 0));
  for ($element$$6_i$$14_unit1_unit2_unit3$$ = 0;4 > $element$$6_i$$14_unit1_unit2_unit3$$;$element$$6_i$$14_unit1_unit2_unit3$$++) {
    $planetComponent_renderer$$3$$ = new $module$contents$vxq$worlds$flatland$Unit_Unit$$(0, 200 + 50 * $r$$1$$(), 200 + 50 * $r$$1$$()), $planetComponent_renderer$$3$$.$c$ *= 10, $planetComponent_renderer$$3$$.$f$ *= 10, $planetComponent_renderer$$3$$.$a$ = $module$contents$vxq$worlds$flatland$Vector_Vector$V$$(5 - 10 * $r$$1$$(), 5 - 10 * $r$$1$$()), $world$$4$$.$a$.add($planetComponent_renderer$$3$$);
  }
  $world$$4$$.changeCallbacks.call();
  return $world$$4$$;
};
function $JSCompiler_StaticMethods_testTheTurtles$$($i$$15_i$11_world$$5$$) {
  $i$$15_i$11_world$$5$$ = void 0 === $i$$15_i$11_world$$5$$ ? new $module$exports$vxq$worlds$turtles$World$$(512, 512, []) : $i$$15_i$11_world$$5$$;
  var $turtle$$ = new $module$exports$vxq$worlds$turtles$Turtle$$;
  $i$$15_i$11_world$$5$$.$a$.add($turtle$$);
  $i$$15_i$11_world$$5$$.changeCallbacks.call();
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
  for ($i$$15_i$11_world$$5$$ = 0;12 > $i$$15_i$11_world$$5$$;$i$$15_i$11_world$$5$$++) {
    $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 100);
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .25);
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 200);
  for ($i$$15_i$11_world$$5$$ = 0;6 > $i$$15_i$11_world$$5$$;$i$$15_i$11_world$$5$$++) {
    $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 50);
  console.log("Test complete.");
}
var $JSCompiler_StaticMethods_exportFromClosure$self$$inline_47$$ = new $module$contents$vxq$main_VXQModule$$;
"object" === typeof module && null != module && (module.exports = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_47$$);
"object" === typeof window && null != window && (window.vxq = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_47$$);

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : null)
