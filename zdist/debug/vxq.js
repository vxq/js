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
function $module$contents$vxq$worlds$flatland_V$$($x$$80$$, $y$$51$$) {
  return new $module$contents$vxq$worlds$flatland_Vector$$($x$$80$$, $y$$51$$);
}
function $module$contents$vxq$worlds$flatland_Vector$$($x$$81$$, $y$$52$$) {
  $module$exports$vxq$debug$assert$$(Number.isFinite($x$$81$$), "x = " + $x$$81$$ + " must be a finite number");
  $module$exports$vxq$debug$assert$$(Number.isFinite($y$$52$$), "y = " + $y$$52$$ + " must be a finite number");
  this.x = $x$$81$$;
  this.y = $y$$52$$;
}
function $JSCompiler_StaticMethods_magnitude$$($JSCompiler_StaticMethods_magnitude$self$$) {
  return Math.sqrt($JSCompiler_StaticMethods_magnitude$self$$.x * $JSCompiler_StaticMethods_magnitude$self$$.x + $JSCompiler_StaticMethods_magnitude$self$$.y * $JSCompiler_StaticMethods_magnitude$self$$.y);
}
function $JSCompiler_StaticMethods_withMagnitude$$($JSCompiler_StaticMethods_withMagnitude$self$$, $magnitude$$) {
  $module$exports$vxq$debug$assert$$(Number.isFinite($magnitude$$), "magnitude = " + $magnitude$$ + " must be a finite number");
  var $currentMagnitude$$ = $JSCompiler_StaticMethods_magnitude$$($JSCompiler_StaticMethods_withMagnitude$self$$);
  return 0 !== $currentMagnitude$$ ? $JSCompiler_StaticMethods_withMagnitude$self$$.scale($magnitude$$ / $currentMagnitude$$) : $module$contents$vxq$worlds$flatland_V$$(0, 0);
}
$module$contents$vxq$worlds$flatland_Vector$$.prototype.scale = function $$module$contents$vxq$worlds$flatland_Vector$$$$scale$($factor$$1$$) {
  $module$exports$vxq$debug$assert$$(Number.isFinite($factor$$1$$), "magnitude = " + $factor$$1$$ + " must be a finite number");
  return 0 == $factor$$1$$ || 0 == this.x && 0 == this.y ? $module$contents$vxq$worlds$flatland_V$$(0, 0) : $module$contents$vxq$worlds$flatland_V$$($factor$$1$$ * this.x, $factor$$1$$ * this.y);
};
$module$contents$vxq$worlds$flatland_Vector$$.prototype.add = function $$module$contents$vxq$worlds$flatland_Vector$$$$add$($other$$3$$) {
  return $module$contents$vxq$worlds$flatland_V$$(this.x + $other$$3$$.x, this.y + $other$$3$$.y);
};
$module$contents$vxq$worlds$flatland_Vector$$.prototype.toString = function $$module$contents$vxq$worlds$flatland_Vector$$$$toString$() {
  return "V(" + this.x + ", " + this.y + ")";
};
function $module$contents$vxq$worlds$flatland_World$$($width$$13$$, $height$$12$$) {
  var $$jscomp$this$$1$$ = this;
  this.width = $width$$13$$;
  this.height = $height$$12$$;
  this.changeCallbacks = new $module$exports$vxq$util$CallbackList$$;
  this.$a$ = new Set;
  var $then$$ = +new Date;
  setInterval(function() {
    var $forces$$inline_17_now_value$$inline_59$$ = +new Date, $$jscomp$iter$5$$inline_37_dt_i$$inline_58$$ = ($forces$$inline_17_now_value$$inline_59$$ - $then$$) / 1E3;
    $then$$ = $forces$$inline_17_now_value$$inline_59$$;
    if (!(0 >= $$jscomp$iter$5$$inline_37_dt_i$$inline_58$$)) {
      for (var $forces$$inline_17_now_value$$inline_59$$ = new Map, $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$ = $$jscomp$makeIterator$$($$jscomp$this$$1$$.$a$), $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$ = $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$.next();!$$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.done;$$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$ = 
      $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$.next()) {
        $forces$$inline_17_now_value$$inline_59$$.set($$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.value, $module$contents$vxq$worlds$flatland_V$$(0, 0));
      }
      $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$ = $$jscomp$makeIterator$$($$jscomp$this$$1$$.$a$);
      for ($$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$ = $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$.next();!$$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.done;$$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$ = $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$.next()) {
        for (var $$jscomp$iter$4$$inline_29_randomIndex$$inline_60_unit$9$$inline_21$$ = $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.value, $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$ = $$jscomp$makeIterator$$($$jscomp$this$$1$$.$a$), $$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$ = $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.next();!$$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$.done;$$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$ = 
        $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.next()) {
          if ($$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$ = $$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$.value, $$jscomp$iter$4$$inline_29_randomIndex$$inline_60_unit$9$$inline_21$$ !== $$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$) {
            var $JSCompiler_StaticMethods_subtract$self$$inline_54_displacement$$inline_25_f$11$$inline_32$$ = $$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$.$b$, $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$ = $$jscomp$iter$4$$inline_29_randomIndex$$inline_60_unit$9$$inline_21$$.$b$, $JSCompiler_StaticMethods_subtract$self$$inline_54_displacement$$inline_25_f$11$$inline_32$$ = $module$contents$vxq$worlds$flatland_V$$($JSCompiler_StaticMethods_subtract$self$$inline_54_displacement$$inline_25_f$11$$inline_32$$.x - 
            $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$.x, $JSCompiler_StaticMethods_subtract$self$$inline_54_displacement$$inline_25_f$11$$inline_32$$.y - $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$.y), $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$ = $JSCompiler_StaticMethods_magnitude$$($JSCompiler_StaticMethods_subtract$self$$inline_54_displacement$$inline_25_f$11$$inline_32$$);
            40 > $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$ && ($dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$ = 40);
            $$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$ = $JSCompiler_StaticMethods_withMagnitude$$($JSCompiler_StaticMethods_subtract$self$$inline_54_displacement$$inline_25_f$11$$inline_32$$, 1).scale(6.67408E-11 * $$jscomp$iter$4$$inline_29_randomIndex$$inline_60_unit$9$$inline_21$$.$c$ * $$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$.$c$ / Math.pow($dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$, 
            2));
            $forces$$inline_17_now_value$$inline_59$$.set($$jscomp$iter$4$$inline_29_randomIndex$$inline_60_unit$9$$inline_21$$, $forces$$inline_17_now_value$$inline_59$$.get($$jscomp$iter$4$$inline_29_randomIndex$$inline_60_unit$9$$inline_21$$).add($$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$));
          }
        }
      }
      $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$ = [];
      $$jscomp$iter$4$$inline_29_randomIndex$$inline_60_unit$9$$inline_21$$ = $$jscomp$makeIterator$$($$jscomp$this$$1$$.$a$);
      for ($$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$ = $$jscomp$iter$4$$inline_29_randomIndex$$inline_60_unit$9$$inline_21$$.next();!$$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.done;$$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$ = $$jscomp$iter$4$$inline_29_randomIndex$$inline_60_unit$9$$inline_21$$.next()) {
        $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$ = $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.value, $$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$ = $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.$c$ * $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.$g$, $JSCompiler_StaticMethods_subtract$self$$inline_54_displacement$$inline_25_f$11$$inline_32$$ = 
        $forces$$inline_17_now_value$$inline_59$$.get($$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$), $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$ = $JSCompiler_StaticMethods_subtract$self$$inline_54_displacement$$inline_25_f$11$$inline_32$$.scale($$jscomp$iter$5$$inline_37_dt_i$$inline_58$$ / $$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$), console.log("dV from forces " + $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$), 
        $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.$a$ = $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.$a$.add($dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$), $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$ = $JSCompiler_StaticMethods_magnitude$$($$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.$a$), $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$ = 
        Math.max(0, $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$ - $$jscomp$iter$5$$inline_37_dt_i$$inline_58$$ * $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$ * .05), 10 <= $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$ || 100 < $JSCompiler_StaticMethods_magnitude$$($JSCompiler_StaticMethods_subtract$self$$inline_54_displacement$$inline_25_f$11$$inline_32$$) / $$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$ ? 
        (console.log(String($dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$)), $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.$a$ = $JSCompiler_StaticMethods_withMagnitude$$($$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.$a$, $dV$$inline_33_distance$$inline_26_newSpeed$$inline_35_other$$inline_55_speed$$inline_34$$)) : $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.$a$ = 
        $module$contents$vxq$worlds$flatland_V$$(0, 0), 0 < $JSCompiler_StaticMethods_magnitude$$($$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.$a$) && ($$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$ = $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.$a$.scale($$jscomp$iter$5$$inline_37_dt_i$$inline_58$$), $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.$b$ = $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.$b$.add($$jscomp$key$other$$inline_23_dP$$inline_36_f$$inline_27_inertia$$inline_31_other$$inline_24$$), 
        $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$.push($$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$));
      }
      for ($$jscomp$iter$5$$inline_37_dt_i$$inline_58$$ = 0;$$jscomp$iter$5$$inline_37_dt_i$$inline_58$$ < $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$.length - 1;$$jscomp$iter$5$$inline_37_dt_i$$inline_58$$++) {
        $forces$$inline_17_now_value$$inline_59$$ = $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$[$$jscomp$iter$5$$inline_37_dt_i$$inline_58$$], $$jscomp$iter$4$$inline_29_randomIndex$$inline_60_unit$9$$inline_21$$ = $$jscomp$iter$5$$inline_37_dt_i$$inline_58$$ + Math.floor(Math.random() * $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$.length - $$jscomp$iter$5$$inline_37_dt_i$$inline_58$$), $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$[$$jscomp$iter$5$$inline_37_dt_i$$inline_58$$] = 
        $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$[$$jscomp$iter$4$$inline_29_randomIndex$$inline_60_unit$9$$inline_21$$], $$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$[$$jscomp$iter$4$$inline_29_randomIndex$$inline_60_unit$9$$inline_21$$] = $forces$$inline_17_now_value$$inline_59$$;
      }
      $$jscomp$iter$5$$inline_37_dt_i$$inline_58$$ = $$jscomp$makeIterator$$($$jscomp$iter$1$$inline_18_$jscomp$iter$3$$inline_20_changedUnits$$inline_28$$);
      for ($$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$ = $$jscomp$iter$5$$inline_37_dt_i$$inline_58$$.next();!$$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.done;$$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$ = $$jscomp$iter$5$$inline_37_dt_i$$inline_58$$.next()) {
        $$jscomp$iter$2$$inline_22_$jscomp$key$unit$$inline_19_unit$10$$inline_30$$.value.changeCallbacks.call();
      }
    }
  }, 20);
}
Object.defineProperties($module$contents$vxq$worlds$flatland_World$$.prototype, {agents:{configurable:!0, enumerable:!0, get:function() {
  return new Set(this.$a$);
}}});
function $module$contents$vxq$worlds$flatland_Unit$$($world$$1$$, $x$$83$$, $y$$54$$) {
  this.$b$ = $module$contents$vxq$worlds$flatland_V$$(void 0 === $x$$83$$ ? 0 : $x$$83$$, void 0 === $y$$54$$ ? 0 : $y$$54$$);
  this.$a$ = $module$contents$vxq$worlds$flatland_V$$(0, 0);
  this.$c$ = 1E15;
  this.$g$ = 1;
  this.$f$ = null;
  this.changeCallbacks = new $module$exports$vxq$util$CallbackList$$;
}
$module$contents$vxq$worlds$flatland_Unit$$.prototype.goTo = function $$module$contents$vxq$worlds$flatland_Unit$$$$goTo$($x$$84$$, $y$$55$$, $z$$14$$) {
  var $$jscomp$this$$2$$ = this;
  if (this.$f$) {
    var $f$$5$$ = function $$f$$5$$$() {
      return $$jscomp$this$$2$$.goTo($x$$84$$, $y$$55$$, $z$$14$$);
    };
    return this.$f$.then($f$$5$$, $f$$5$$);
  }
  return this.$f$ = new Promise(function($resolve$$) {
    return $resolve$$();
  });
};
Object.defineProperties($module$contents$vxq$worlds$flatland_Unit$$.prototype, {x:{configurable:!0, enumerable:!0, get:function() {
  return this.$b$.x;
}}, y:{configurable:!0, enumerable:!0, get:function() {
  return this.$b$.y;
}}, z:{configurable:!0, enumerable:!0, get:function() {
  return 0;
}}});
function $module$exports$vxq$testing$assertEquals$$($expected$$, $actual$$) {
  var $message$$inline_40$$ = $expected$$ + " !== " + $actual$$;
  if ($expected$$ !== $actual$$) {
    throw Error((void 0 === $message$$inline_40$$ ? null : $message$$inline_40$$) || "Assertion failed");
  }
}
;function $module$contents$vxq$renderers$FlatCanvas_AgentRender$$($renderer$$, $agent$$) {
  var $$jscomp$this$$3$$ = this;
  this.$c$ = 1E3 * Math.random();
  this.$b$ = $renderer$$;
  this.$a$ = $agent$$;
  this.cancel = $agent$$.changeCallbacks.add(function() {
    if ($module$exports$vxq$util$elementInView$$($$jscomp$this$$3$$.$b$.$b$)) {
      var $g$$inline_43$$ = $$jscomp$this$$3$$.$b$.$c$;
      $g$$inline_43$$.fillStyle = "rgba(0, 0, 0, 0.25)";
      $g$$inline_43$$.beginPath();
      $g$$inline_43$$.arc($$jscomp$this$$3$$.$a$.x, $$jscomp$this$$3$$.$a$.y, 8, 0, 2 * Math.PI);
      $g$$inline_43$$.fill();
      $g$$inline_43$$.fillStyle = "hsla(" + $$jscomp$this$$3$$.$c$ + ", 50%, 50%, 0.5)";
      $g$$inline_43$$.strokeStyle = "rgba(255, 255, 255, 0.5)";
      $g$$inline_43$$.beginPath();
      $g$$inline_43$$.arc($$jscomp$this$$3$$.$a$.x, $$jscomp$this$$3$$.$a$.y, 6, 0, 2 * Math.PI);
      $g$$inline_43$$.fill();
      $g$$inline_43$$.stroke();
    }
  });
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
    var $now$$1$$ = +new Date, $dt$$2$$ = ($now$$1$$ - $then$$1$$) / 1E3;
    $then$$1$$ = $now$$1$$;
    $module$exports$vxq$util$elementInView$$($$jscomp$this$$4$$.$b$) ? $$jscomp$this$$4$$.$c$.fillStyle = "rgba(0, 0, 0, " + .25 * $dt$$2$$ + ")" : $$jscomp$this$$4$$.$c$.fillStyle = "black";
    $$jscomp$this$$4$$.$c$.fillRect(0, 0, $$jscomp$this$$4$$.$a$.width, $$jscomp$this$$4$$.$a$.height);
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
  var $world$$3$$ = new $module$exports$vxq$worlds$turtles$World$$(512, 512, []), $renderer$$1$$ = new $module$exports$vxq$renderers$FlatCanvas$$($world$$3$$);
  $element$$5$$.appendChild($renderer$$1$$.$b$);
  $JSCompiler_StaticMethods_testTheTurtles$$($world$$3$$);
  return $world$$3$$;
};
$module$contents$vxq$main_VXQModule$$.prototype.addFlatCanvasWithFlatland = function $$module$contents$vxq$main_VXQModule$$$$addFlatCanvasWithFlatland$($element$$6_i$$14_unit1_unit2_unit3$$) {
  function $r$$1$$() {
    return .5 + (Math.random() + Math.random() + Math.random()) / 3;
  }
  var $world$$4$$ = new $module$contents$vxq$worlds$flatland_World$$(512, 512), $planetComponent_renderer$$2$$ = new $module$exports$vxq$renderers$FlatCanvas$$($world$$4$$);
  $element$$6_i$$14_unit1_unit2_unit3$$.appendChild($planetComponent_renderer$$2$$.$b$);
  $element$$6_i$$14_unit1_unit2_unit3$$ = new $module$contents$vxq$worlds$flatland_Unit$$(0, 150, 50);
  $element$$6_i$$14_unit1_unit2_unit3$$.$a$ = $module$contents$vxq$worlds$flatland_V$$(100, -15);
  $world$$4$$.$a$.add($element$$6_i$$14_unit1_unit2_unit3$$);
  $element$$6_i$$14_unit1_unit2_unit3$$ = new $module$contents$vxq$worlds$flatland_Unit$$(0, 400, 200);
  $element$$6_i$$14_unit1_unit2_unit3$$.$a$ = $module$contents$vxq$worlds$flatland_V$$(8, 150);
  $world$$4$$.$a$.add($element$$6_i$$14_unit1_unit2_unit3$$);
  $element$$6_i$$14_unit1_unit2_unit3$$ = new $module$contents$vxq$worlds$flatland_Unit$$(0, 150, 175);
  $element$$6_i$$14_unit1_unit2_unit3$$.$a$ = $module$contents$vxq$worlds$flatland_V$$(-25, 125);
  $world$$4$$.$a$.add($element$$6_i$$14_unit1_unit2_unit3$$);
  for ($element$$6_i$$14_unit1_unit2_unit3$$ = 0;4 > $element$$6_i$$14_unit1_unit2_unit3$$;$element$$6_i$$14_unit1_unit2_unit3$$++) {
    $planetComponent_renderer$$2$$ = new $module$contents$vxq$worlds$flatland_Unit$$(0, 200 + 50 * $r$$1$$(), 200 + 50 * $r$$1$$()), $planetComponent_renderer$$2$$.$c$ *= 10, $planetComponent_renderer$$2$$.$g$ *= 10, $planetComponent_renderer$$2$$.$a$ = $module$contents$vxq$worlds$flatland_V$$(5 - 10 * $r$$1$$(), 5 - 10 * $r$$1$$()), $world$$4$$.$a$.add($planetComponent_renderer$$2$$);
  }
  $world$$4$$.changeCallbacks.call();
  return $world$$4$$;
};
function $JSCompiler_StaticMethods_testTheTurtles$$($i$$15_i$13_world$$5$$) {
  $i$$15_i$13_world$$5$$ = void 0 === $i$$15_i$13_world$$5$$ ? new $module$exports$vxq$worlds$turtles$World$$(512, 512, []) : $i$$15_i$13_world$$5$$;
  var $turtle$$ = new $module$exports$vxq$worlds$turtles$Turtle$$;
  $i$$15_i$13_world$$5$$.$a$.add($turtle$$);
  $i$$15_i$13_world$$5$$.changeCallbacks.call();
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
  for ($i$$15_i$13_world$$5$$ = 0;12 > $i$$15_i$13_world$$5$$;$i$$15_i$13_world$$5$$++) {
    $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 100);
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .25);
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 200);
  for ($i$$15_i$13_world$$5$$ = 0;6 > $i$$15_i$13_world$$5$$;$i$$15_i$13_world$$5$$++) {
    $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$left$$($turtle$$, .0625), $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 10);
  }
  $JSCompiler_StaticMethods_module$exports$vxq$worlds$turtles_Turtle_prototype$forward$$($turtle$$, 50);
  console.log("Test complete.");
}
var $JSCompiler_StaticMethods_exportFromClosure$self$$inline_51$$ = new $module$contents$vxq$main_VXQModule$$;
"object" === typeof module && null != module && (module.exports = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_51$$);
"object" === typeof window && null != window && (window.vxq = $JSCompiler_StaticMethods_exportFromClosure$self$$inline_51$$);

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : null)
