-function(window, module) {
'use strict';var $jscomp = {scope:{}, getGlobal:function($maybeGlobal$$) {
  return "undefined" != typeof window && window === $maybeGlobal$$ ? $maybeGlobal$$ : "undefined" != typeof global ? global : $maybeGlobal$$;
}};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.initSymbol = function $$jscomp$initSymbol$() {
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
  $jscomp.initSymbol = function $$jscomp$initSymbol$() {
  };
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function $$jscomp$Symbol$($description$$) {
  return "jscomp_symbol_" + $description$$ + $jscomp.symbolCounter_++;
};
$jscomp.initSymbolIterator = function $$jscomp$initSymbolIterator$() {
  $jscomp.initSymbol();
  $jscomp.global.Symbol.iterator || ($jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
  $jscomp.initSymbolIterator = function $$jscomp$initSymbolIterator$() {
  };
};
$jscomp.makeIterator = function $$jscomp$makeIterator$($iterable$$) {
  $jscomp.initSymbolIterator();
  if ($iterable$$[$jscomp.global.Symbol.iterator]) {
    return $iterable$$[$jscomp.global.Symbol.iterator]();
  }
  var $index$$ = 0;
  return {next:function() {
    return $index$$ == $iterable$$.length ? {done:!0} : {done:!1, value:$iterable$$[$index$$++]};
  }};
};
$jscomp.arrayFromIterator = function $$jscomp$arrayFromIterator$($iterator$$) {
  for (var $i$$, $arr$$ = [];!($i$$ = $iterator$$.next()).done;) {
    $arr$$.push($i$$.value);
  }
  return $arr$$;
};
$jscomp.arrayFromIterable = function $$jscomp$arrayFromIterable$($iterable$$) {
  return $iterable$$ instanceof Array ? $iterable$$ : $jscomp.arrayFromIterator($jscomp.makeIterator($iterable$$));
};
$jscomp.inherits = function $$jscomp$inherits$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$;
  for (var $p$$ in $parentCtor$$) {
    if ($jscomp.global.Object.defineProperties) {
      var $descriptor$$ = $jscomp.global.Object.getOwnPropertyDescriptor($parentCtor$$, $p$$);
      $descriptor$$ && $jscomp.global.Object.defineProperty($childCtor$$, $p$$, $descriptor$$);
    } else {
      $childCtor$$[$p$$] = $parentCtor$$[$p$$];
    }
  }
};
$jscomp.array = $jscomp.array || {};
$jscomp.array.done_ = function $$jscomp$array$done_$() {
  return {done:!0, value:void 0};
};
$jscomp.array.arrayIterator_ = function $$jscomp$array$arrayIterator_$($array$$, $func$$) {
  $array$$ instanceof String && ($array$$ = String($array$$));
  var $i$$ = 0;
  $jscomp.initSymbol();
  $jscomp.initSymbolIterator();
  var $$jscomp$compprop0$$ = {}, $iter$$ = ($$jscomp$compprop0$$.next = function $$$jscomp$compprop0$$$next$() {
    if ($i$$ < $array$$.length) {
      var $index$$ = $i$$++;
      return {value:$func$$($index$$, $array$$[$index$$]), done:!1};
    }
    $iter$$.next = $jscomp.array.done_;
    return $jscomp.array.done_();
  }, $$jscomp$compprop0$$[Symbol.iterator] = function $$$jscomp$compprop0$$$Symbol$iterator$() {
    return $iter$$;
  }, $$jscomp$compprop0$$);
  return $iter$$;
};
$jscomp.array.findInternal_ = function $$jscomp$array$findInternal_$($array$$, $callback$$, $thisArg$$) {
  $array$$ instanceof String && ($array$$ = String($array$$));
  for (var $len$$ = $array$$.length, $i$$ = 0;$i$$ < $len$$;$i$$++) {
    var $value$$ = $array$$[$i$$];
    if ($callback$$.call($thisArg$$, $value$$, $i$$, $array$$)) {
      return {i:$i$$, v:$value$$};
    }
  }
  return {i:-1, v:void 0};
};
$jscomp.array.from = function $$jscomp$array$from$($arrayLike$$1_iter$$, $opt_mapFn$$, $opt_thisArg$$) {
  $opt_mapFn$$ = void 0 === $opt_mapFn$$ ? function($x$$) {
    return $x$$;
  } : $opt_mapFn$$;
  var $result$$ = [];
  $jscomp.initSymbol();
  $jscomp.initSymbolIterator();
  if ($arrayLike$$1_iter$$[Symbol.iterator]) {
    $jscomp.initSymbol();
    $jscomp.initSymbolIterator();
    $arrayLike$$1_iter$$ = $arrayLike$$1_iter$$[Symbol.iterator]();
    for (var $len$$;!($len$$ = $arrayLike$$1_iter$$.next()).done;) {
      $result$$.push($opt_mapFn$$.call($opt_thisArg$$, $len$$.value));
    }
  } else {
    $len$$ = $arrayLike$$1_iter$$.length;
    for (var $i$$ = 0;$i$$ < $len$$;$i$$++) {
      $result$$.push($opt_mapFn$$.call($opt_thisArg$$, $arrayLike$$1_iter$$[$i$$]));
    }
  }
  return $result$$;
};
$jscomp.array.of = function $$jscomp$array$of$($elements$$) {
  for (var $$jscomp$restParams$$ = [], $$jscomp$restIndex$$ = 0;$$jscomp$restIndex$$ < arguments.length;++$$jscomp$restIndex$$) {
    $$jscomp$restParams$$[$$jscomp$restIndex$$ - 0] = arguments[$$jscomp$restIndex$$];
  }
  return $jscomp.array.from($$jscomp$restParams$$);
};
$jscomp.array.entries = function $$jscomp$array$entries$() {
  return $jscomp.array.arrayIterator_(this, function($i$$, $v$$) {
    return [$i$$, $v$$];
  });
};
$jscomp.array.installHelper_ = function $$jscomp$array$installHelper_$($method$$, $fn$$) {
  !Array.prototype[$method$$] && Object.defineProperties && Object.defineProperty && Object.defineProperty(Array.prototype, $method$$, {configurable:!0, enumerable:!1, writable:!0, value:$fn$$});
};
$jscomp.array.entries$install = function $$jscomp$array$entries$install$() {
  $jscomp.array.installHelper_("entries", $jscomp.array.entries);
};
$jscomp.array.keys = function $$jscomp$array$keys$() {
  return $jscomp.array.arrayIterator_(this, function($i$$) {
    return $i$$;
  });
};
$jscomp.array.keys$install = function $$jscomp$array$keys$install$() {
  $jscomp.array.installHelper_("keys", $jscomp.array.keys);
};
$jscomp.array.values = function $$jscomp$array$values$() {
  return $jscomp.array.arrayIterator_(this, function($_$$, $v$$) {
    return $v$$;
  });
};
$jscomp.array.values$install = function $$jscomp$array$values$install$() {
  $jscomp.array.installHelper_("values", $jscomp.array.values);
};
$jscomp.array.copyWithin = function $$jscomp$array$copyWithin$($target$$, $start$$, $opt_end$$) {
  var $len$$ = this.length;
  $target$$ = Number($target$$);
  $start$$ = Number($start$$);
  $opt_end$$ = Number(null != $opt_end$$ ? $opt_end$$ : $len$$);
  if ($target$$ < $start$$) {
    for ($opt_end$$ = Math.min($opt_end$$, $len$$);$start$$ < $opt_end$$;) {
      $start$$ in this ? this[$target$$++] = this[$start$$++] : (delete this[$target$$++], $start$$++);
    }
  } else {
    for ($opt_end$$ = Math.min($opt_end$$, $len$$ + $start$$ - $target$$), $target$$ += $opt_end$$ - $start$$;$opt_end$$ > $start$$;) {
      --$opt_end$$ in this ? this[--$target$$] = this[$opt_end$$] : delete this[$target$$];
    }
  }
  return this;
};
$jscomp.array.copyWithin$install = function $$jscomp$array$copyWithin$install$() {
  $jscomp.array.installHelper_("copyWithin", $jscomp.array.copyWithin);
};
$jscomp.array.fill = function $$jscomp$array$fill$($value$$, $i$$, $opt_end$$) {
  null != $opt_end$$ && $value$$.length || ($opt_end$$ = this.length || 0);
  $opt_end$$ = Number($opt_end$$);
  for ($i$$ = Number((void 0 === $i$$ ? 0 : $i$$) || 0);$i$$ < $opt_end$$;$i$$++) {
    this[$i$$] = $value$$;
  }
  return this;
};
$jscomp.array.fill$install = function $$jscomp$array$fill$install$() {
  $jscomp.array.installHelper_("fill", $jscomp.array.fill);
};
$jscomp.array.find = function $$jscomp$array$find$($callback$$, $opt_thisArg$$) {
  return $jscomp.array.findInternal_(this, $callback$$, $opt_thisArg$$).v;
};
$jscomp.array.find$install = function $$jscomp$array$find$install$() {
  $jscomp.array.installHelper_("find", $jscomp.array.find);
};
$jscomp.array.findIndex = function $$jscomp$array$findIndex$($callback$$, $opt_thisArg$$) {
  return $jscomp.array.findInternal_(this, $callback$$, $opt_thisArg$$).i;
};
$jscomp.array.findIndex$install = function $$jscomp$array$findIndex$install$() {
  $jscomp.array.installHelper_("findIndex", $jscomp.array.findIndex);
};
$jscomp.Map = function $$jscomp$Map$($$jscomp$iter$1_opt_iterable$$) {
  $$jscomp$iter$1_opt_iterable$$ = void 0 === $$jscomp$iter$1_opt_iterable$$ ? [] : $$jscomp$iter$1_opt_iterable$$;
  this.data_ = {};
  this.head_ = $jscomp.Map.createHead_();
  this.size = 0;
  if ($$jscomp$iter$1_opt_iterable$$) {
    $$jscomp$iter$1_opt_iterable$$ = $jscomp.makeIterator($$jscomp$iter$1_opt_iterable$$);
    for (var $$jscomp$key$item_item$$ = $$jscomp$iter$1_opt_iterable$$.next();!$$jscomp$key$item_item$$.done;$$jscomp$key$item_item$$ = $$jscomp$iter$1_opt_iterable$$.next()) {
      $$jscomp$key$item_item$$ = $$jscomp$key$item_item$$.value, this.set($$jscomp$key$item_item$$[0], $$jscomp$key$item_item$$[1]);
    }
  }
};
$jscomp.Map.checkBrowserConformance_ = function $$jscomp$Map$checkBrowserConformance_$() {
  var $Map$$ = $jscomp.global.Map;
  if (!$Map$$ || !$Map$$.prototype.entries || !Object.seal) {
    return !1;
  }
  try {
    var $key$$ = Object.seal({x:4}), $map$$ = new $Map$$($jscomp.makeIterator([[$key$$, "s"]]));
    if ("s" != $map$$.get($key$$) || 1 != $map$$.size || $map$$.get({x:4}) || $map$$.set({x:4}, "t") != $map$$ || 2 != $map$$.size) {
      return !1;
    }
    var $iter$$ = $map$$.entries(), $item$$ = $iter$$.next();
    if ($item$$.done || $item$$.value[0] != $key$$ || "s" != $item$$.value[1]) {
      return !1;
    }
    $item$$ = $iter$$.next();
    return $item$$.done || 4 != $item$$.value[0].x || "t" != $item$$.value[1] || !$iter$$.next().done ? !1 : !0;
  } catch ($err$$) {
    return !1;
  }
};
$jscomp.Map.createHead_ = function $$jscomp$Map$createHead_$() {
  var $head$$ = {};
  return $head$$.previous = $head$$.next = $head$$.head = $head$$;
};
$jscomp.Map.getId_ = function $$jscomp$Map$getId_$($obj$$) {
  if (!($obj$$ instanceof Object)) {
    return String($obj$$);
  }
  $jscomp.Map.key_ in $obj$$ || $obj$$ instanceof Object && Object.isExtensible && Object.isExtensible($obj$$) && $jscomp.Map.defineProperty_($obj$$, $jscomp.Map.key_, ++$jscomp.Map.index_);
  return $jscomp.Map.key_ in $obj$$ ? $obj$$[$jscomp.Map.key_] : " " + $obj$$;
};
$jscomp.Map.prototype.set = function $$jscomp$Map$$set$($key$$, $value$$) {
  var $$jscomp$destructuring$var0$$ = this.maybeGetEntry_($key$$), $id$$ = $$jscomp$destructuring$var0$$.id, $list$$ = $$jscomp$destructuring$var0$$.list, $$jscomp$destructuring$var0$$ = $$jscomp$destructuring$var0$$.entry;
  $list$$ || ($list$$ = this.data_[$id$$] = []);
  $$jscomp$destructuring$var0$$ ? $$jscomp$destructuring$var0$$.value = $value$$ : ($$jscomp$destructuring$var0$$ = {next:this.head_, previous:this.head_.previous, head:this.head_, key:$key$$, value:$value$$}, $list$$.push($$jscomp$destructuring$var0$$), this.head_.previous.next = $$jscomp$destructuring$var0$$, this.head_.previous = $$jscomp$destructuring$var0$$, this.size++);
  return this;
};
$jscomp.Map.prototype.delete = function $$jscomp$Map$$delete$($id$$5_key$$) {
  var $$jscomp$destructuring$var1$$1_entry$$ = this.maybeGetEntry_($id$$5_key$$);
  $id$$5_key$$ = $$jscomp$destructuring$var1$$1_entry$$.id;
  var $list$$ = $$jscomp$destructuring$var1$$1_entry$$.list, $index$$ = $$jscomp$destructuring$var1$$1_entry$$.index;
  return ($$jscomp$destructuring$var1$$1_entry$$ = $$jscomp$destructuring$var1$$1_entry$$.entry) && $list$$ ? ($list$$.splice($index$$, 1), $list$$.length || delete this.data_[$id$$5_key$$], $$jscomp$destructuring$var1$$1_entry$$.previous.next = $$jscomp$destructuring$var1$$1_entry$$.next, $$jscomp$destructuring$var1$$1_entry$$.next.previous = $$jscomp$destructuring$var1$$1_entry$$.previous, $$jscomp$destructuring$var1$$1_entry$$.head = null, this.size--, !0) : !1;
};
$jscomp.Map.prototype.clear = function $$jscomp$Map$$clear$() {
  this.data_ = {};
  this.head_ = this.head_.previous = $jscomp.Map.createHead_();
  this.size = 0;
};
$jscomp.Map.prototype.has = function $$jscomp$Map$$has$($key$$) {
  return !!this.maybeGetEntry_($key$$).entry;
};
$jscomp.Map.prototype.get = function $$jscomp$Map$$get$($entry$$2_key$$) {
  return ($entry$$2_key$$ = this.maybeGetEntry_($entry$$2_key$$).entry) && $entry$$2_key$$.value;
};
$jscomp.Map.prototype.maybeGetEntry_ = function $$jscomp$Map$$maybeGetEntry_$($key$$) {
  var $id$$ = $jscomp.Map.getId_($key$$), $list$$ = this.data_[$id$$];
  if ($list$$) {
    for (var $index$$ = 0;$index$$ < $list$$.length;$index$$++) {
      var $entry$$ = $list$$[$index$$];
      if ($key$$ !== $key$$ && $entry$$.key !== $entry$$.key || $key$$ === $entry$$.key) {
        return {id:$id$$, list:$list$$, index:$index$$, entry:$entry$$};
      }
    }
  }
  return {id:$id$$, list:$list$$, index:-1, entry:void 0};
};
$jscomp.Map.prototype.entries = function $$jscomp$Map$$entries$() {
  return this.iter_(function($entry$$) {
    return [$entry$$.key, $entry$$.value];
  });
};
$jscomp.Map.prototype.keys = function $$jscomp$Map$$keys$() {
  return this.iter_(function($entry$$) {
    return $entry$$.key;
  });
};
$jscomp.Map.prototype.values = function $$jscomp$Map$$values$() {
  return this.iter_(function($entry$$) {
    return $entry$$.value;
  });
};
$jscomp.Map.prototype.forEach = function $$jscomp$Map$$forEach$($callback$$, $opt_thisArg$$) {
  for (var $$jscomp$iter$2$$ = $jscomp.makeIterator(this.entries()), $$jscomp$key$entry_entry$$ = $$jscomp$iter$2$$.next();!$$jscomp$key$entry_entry$$.done;$$jscomp$key$entry_entry$$ = $$jscomp$iter$2$$.next()) {
    $$jscomp$key$entry_entry$$ = $$jscomp$key$entry_entry$$.value, $callback$$.call($opt_thisArg$$, $$jscomp$key$entry_entry$$[1], $$jscomp$key$entry_entry$$[0], this);
  }
};
$jscomp.Map.prototype.iter_ = function $$jscomp$Map$$iter_$($func$$) {
  var $map$$ = this, $entry$$ = this.head_;
  $jscomp.initSymbol();
  $jscomp.initSymbolIterator();
  var $$jscomp$compprop3$$ = {};
  return $$jscomp$compprop3$$.next = function $$$jscomp$compprop3$$$next$() {
    if ($entry$$) {
      for (;$entry$$.head != $map$$.head_;) {
        $entry$$ = $entry$$.previous;
      }
      for (;$entry$$.next != $entry$$.head;) {
        return $entry$$ = $entry$$.next, {done:!1, value:$func$$($entry$$)};
      }
      $entry$$ = null;
    }
    return {done:!0, value:void 0};
  }, $$jscomp$compprop3$$[Symbol.iterator] = function $$$jscomp$compprop3$$$Symbol$iterator$() {
    return this;
  }, $$jscomp$compprop3$$;
};
$jscomp.Map.index_ = 0;
$jscomp.Map.defineProperty_ = Object.defineProperty ? function($obj$$, $key$$, $value$$) {
  Object.defineProperty($obj$$, $key$$, {value:String($value$$)});
} : function($obj$$, $key$$, $value$$) {
  $obj$$[$key$$] = String($value$$);
};
$jscomp.Map.Entry_ = function $$jscomp$Map$Entry_$() {
};
$jscomp.Map.ASSUME_NO_NATIVE = !1;
$jscomp.Map$install = function $$jscomp$Map$install$() {
  $jscomp.initSymbol();
  $jscomp.initSymbolIterator();
  !$jscomp.Map.ASSUME_NO_NATIVE && $jscomp.Map.checkBrowserConformance_() ? $jscomp.Map = $jscomp.global.Map : ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.Map.prototype[Symbol.iterator] = $jscomp.Map.prototype.entries, $jscomp.initSymbol(), $jscomp.Map.key_ = Symbol("map-id-key"));
  $jscomp.Map$install = function $$jscomp$Map$install$() {
  };
};
$jscomp.math = $jscomp.math || {};
$jscomp.math.clz32 = function $$jscomp$math$clz32$($x$$) {
  $x$$ = Number($x$$) >>> 0;
  if (0 === $x$$) {
    return 32;
  }
  var $result$$ = 0;
  0 === ($x$$ & 4294901760) && ($x$$ <<= 16, $result$$ += 16);
  0 === ($x$$ & 4278190080) && ($x$$ <<= 8, $result$$ += 8);
  0 === ($x$$ & 4026531840) && ($x$$ <<= 4, $result$$ += 4);
  0 === ($x$$ & 3221225472) && ($x$$ <<= 2, $result$$ += 2);
  0 === ($x$$ & 2147483648) && $result$$++;
  return $result$$;
};
$jscomp.math.imul = function $$jscomp$math$imul$($a$$, $b$$) {
  $a$$ = Number($a$$);
  $b$$ = Number($b$$);
  var $al$$ = $a$$ & 65535, $bl$$ = $b$$ & 65535;
  return $al$$ * $bl$$ + (($a$$ >>> 16 & 65535) * $bl$$ + $al$$ * ($b$$ >>> 16 & 65535) << 16 >>> 0) | 0;
};
$jscomp.math.sign = function $$jscomp$math$sign$($x$$) {
  $x$$ = Number($x$$);
  return 0 === $x$$ || isNaN($x$$) ? $x$$ : 0 < $x$$ ? 1 : -1;
};
$jscomp.math.log10 = function $$jscomp$math$log10$($x$$) {
  return Math.log($x$$) / Math.LN10;
};
$jscomp.math.log2 = function $$jscomp$math$log2$($x$$) {
  return Math.log($x$$) / Math.LN2;
};
$jscomp.math.log1p = function $$jscomp$math$log1p$($x$$) {
  $x$$ = Number($x$$);
  if (.25 > $x$$ && -.25 < $x$$) {
    for (var $y$$ = $x$$, $d$$ = 1, $z$$ = $x$$, $zPrev$$ = 0, $s$$ = 1;$zPrev$$ != $z$$;) {
      $y$$ *= $x$$, $s$$ *= -1, $z$$ = ($zPrev$$ = $z$$) + $s$$ * $y$$ / ++$d$$;
    }
    return $z$$;
  }
  return Math.log(1 + $x$$);
};
$jscomp.math.expm1 = function $$jscomp$math$expm1$($x$$) {
  $x$$ = Number($x$$);
  if (.25 > $x$$ && -.25 < $x$$) {
    for (var $y$$ = $x$$, $d$$ = 1, $z$$ = $x$$, $zPrev$$ = 0;$zPrev$$ != $z$$;) {
      $y$$ *= $x$$ / ++$d$$, $z$$ = ($zPrev$$ = $z$$) + $y$$;
    }
    return $z$$;
  }
  return Math.exp($x$$) - 1;
};
$jscomp.math.cosh = function $$jscomp$math$cosh$($x$$) {
  $x$$ = Number($x$$);
  return (Math.exp($x$$) + Math.exp(-$x$$)) / 2;
};
$jscomp.math.sinh = function $$jscomp$math$sinh$($x$$) {
  $x$$ = Number($x$$);
  return 0 === $x$$ ? $x$$ : (Math.exp($x$$) - Math.exp(-$x$$)) / 2;
};
$jscomp.math.tanh = function $$jscomp$math$tanh$($x$$) {
  $x$$ = Number($x$$);
  if (0 === $x$$) {
    return $x$$;
  }
  var $y$$45_z$$ = Math.exp(2 * -Math.abs($x$$)), $y$$45_z$$ = (1 - $y$$45_z$$) / (1 + $y$$45_z$$);
  return 0 > $x$$ ? -$y$$45_z$$ : $y$$45_z$$;
};
$jscomp.math.acosh = function $$jscomp$math$acosh$($x$$) {
  $x$$ = Number($x$$);
  return Math.log($x$$ + Math.sqrt($x$$ * $x$$ - 1));
};
$jscomp.math.asinh = function $$jscomp$math$asinh$($x$$) {
  $x$$ = Number($x$$);
  if (0 === $x$$) {
    return $x$$;
  }
  var $y$$ = Math.log(Math.abs($x$$) + Math.sqrt($x$$ * $x$$ + 1));
  return 0 > $x$$ ? -$y$$ : $y$$;
};
$jscomp.math.atanh = function $$jscomp$math$atanh$($x$$) {
  $x$$ = Number($x$$);
  return ($jscomp.math.log1p($x$$) - $jscomp.math.log1p(-$x$$)) / 2;
};
$jscomp.math.hypot = function $$jscomp$math$hypot$($x$$, $y$$, $rest$$) {
  for (var $$jscomp$iter$5_$jscomp$iter$6_$jscomp$restParams$$ = [], $$jscomp$key$z_$jscomp$restIndex$$ = 2;$$jscomp$key$z_$jscomp$restIndex$$ < arguments.length;++$$jscomp$key$z_$jscomp$restIndex$$) {
    $$jscomp$iter$5_$jscomp$iter$6_$jscomp$restParams$$[$$jscomp$key$z_$jscomp$restIndex$$ - 2] = arguments[$$jscomp$key$z_$jscomp$restIndex$$];
  }
  $x$$ = Number($x$$);
  $y$$ = Number($y$$);
  for (var $max_sum$13$$ = Math.max(Math.abs($x$$), Math.abs($y$$)), $$jscomp$iter$4_sum$$ = $jscomp.makeIterator($$jscomp$iter$5_$jscomp$iter$6_$jscomp$restParams$$), $$jscomp$key$z_$jscomp$restIndex$$ = $$jscomp$iter$4_sum$$.next();!$$jscomp$key$z_$jscomp$restIndex$$.done;$$jscomp$key$z_$jscomp$restIndex$$ = $$jscomp$iter$4_sum$$.next()) {
    $max_sum$13$$ = Math.max($max_sum$13$$, Math.abs($$jscomp$key$z_$jscomp$restIndex$$.value));
  }
  if (1E100 < $max_sum$13$$ || 1E-100 > $max_sum$13$$) {
    $x$$ /= $max_sum$13$$;
    $y$$ /= $max_sum$13$$;
    $$jscomp$iter$4_sum$$ = $x$$ * $x$$ + $y$$ * $y$$;
    $$jscomp$iter$5_$jscomp$iter$6_$jscomp$restParams$$ = $jscomp.makeIterator($$jscomp$iter$5_$jscomp$iter$6_$jscomp$restParams$$);
    for ($$jscomp$key$z_$jscomp$restIndex$$ = $$jscomp$iter$5_$jscomp$iter$6_$jscomp$restParams$$.next();!$$jscomp$key$z_$jscomp$restIndex$$.done;$$jscomp$key$z_$jscomp$restIndex$$ = $$jscomp$iter$5_$jscomp$iter$6_$jscomp$restParams$$.next()) {
      $$jscomp$key$z_$jscomp$restIndex$$ = $$jscomp$key$z_$jscomp$restIndex$$.value, $$jscomp$key$z_$jscomp$restIndex$$ = Number($$jscomp$key$z_$jscomp$restIndex$$) / $max_sum$13$$, $$jscomp$iter$4_sum$$ += $$jscomp$key$z_$jscomp$restIndex$$ * $$jscomp$key$z_$jscomp$restIndex$$;
    }
    return Math.sqrt($$jscomp$iter$4_sum$$) * $max_sum$13$$;
  }
  $max_sum$13$$ = $x$$ * $x$$ + $y$$ * $y$$;
  $$jscomp$iter$5_$jscomp$iter$6_$jscomp$restParams$$ = $jscomp.makeIterator($$jscomp$iter$5_$jscomp$iter$6_$jscomp$restParams$$);
  for ($$jscomp$key$z_$jscomp$restIndex$$ = $$jscomp$iter$5_$jscomp$iter$6_$jscomp$restParams$$.next();!$$jscomp$key$z_$jscomp$restIndex$$.done;$$jscomp$key$z_$jscomp$restIndex$$ = $$jscomp$iter$5_$jscomp$iter$6_$jscomp$restParams$$.next()) {
    $$jscomp$key$z_$jscomp$restIndex$$ = $$jscomp$key$z_$jscomp$restIndex$$.value, $$jscomp$key$z_$jscomp$restIndex$$ = Number($$jscomp$key$z_$jscomp$restIndex$$), $max_sum$13$$ += $$jscomp$key$z_$jscomp$restIndex$$ * $$jscomp$key$z_$jscomp$restIndex$$;
  }
  return Math.sqrt($max_sum$13$$);
};
$jscomp.math.trunc = function $$jscomp$math$trunc$($x$$) {
  $x$$ = Number($x$$);
  if (isNaN($x$$) || Infinity === $x$$ || -Infinity === $x$$ || 0 === $x$$) {
    return $x$$;
  }
  var $y$$ = Math.floor(Math.abs($x$$));
  return 0 > $x$$ ? -$y$$ : $y$$;
};
$jscomp.math.cbrt = function $$jscomp$math$cbrt$($x$$) {
  if (0 === $x$$) {
    return $x$$;
  }
  $x$$ = Number($x$$);
  var $y$$ = Math.pow(Math.abs($x$$), 1 / 3);
  return 0 > $x$$ ? -$y$$ : $y$$;
};
$jscomp.number = $jscomp.number || {};
$jscomp.number.isFinite = function $$jscomp$number$isFinite$($x$$) {
  return "number" !== typeof $x$$ ? !1 : !isNaN($x$$) && Infinity !== $x$$ && -Infinity !== $x$$;
};
$jscomp.number.isInteger = function $$jscomp$number$isInteger$($x$$) {
  return $jscomp.number.isFinite($x$$) ? $x$$ === Math.floor($x$$) : !1;
};
$jscomp.number.isNaN = function $$jscomp$number$isNaN$($x$$) {
  return "number" === typeof $x$$ && isNaN($x$$);
};
$jscomp.number.isSafeInteger = function $$jscomp$number$isSafeInteger$($x$$) {
  return $jscomp.number.isInteger($x$$) && Math.abs($x$$) <= $jscomp.number.MAX_SAFE_INTEGER;
};
$jscomp.number.EPSILON = Math.pow(2, -52);
$jscomp.number.MAX_SAFE_INTEGER = 9007199254740991;
$jscomp.number.MIN_SAFE_INTEGER = -9007199254740991;
$jscomp.object = $jscomp.object || {};
$jscomp.object.assign = function $$jscomp$object$assign$($target$$, $sources$$) {
  for (var $$jscomp$iter$7_$jscomp$restParams$$ = [], $$jscomp$key$source_$jscomp$restIndex$$2_source$$ = 1;$$jscomp$key$source_$jscomp$restIndex$$2_source$$ < arguments.length;++$$jscomp$key$source_$jscomp$restIndex$$2_source$$) {
    $$jscomp$iter$7_$jscomp$restParams$$[$$jscomp$key$source_$jscomp$restIndex$$2_source$$ - 1] = arguments[$$jscomp$key$source_$jscomp$restIndex$$2_source$$];
  }
  $$jscomp$iter$7_$jscomp$restParams$$ = $jscomp.makeIterator($$jscomp$iter$7_$jscomp$restParams$$);
  for ($$jscomp$key$source_$jscomp$restIndex$$2_source$$ = $$jscomp$iter$7_$jscomp$restParams$$.next();!$$jscomp$key$source_$jscomp$restIndex$$2_source$$.done;$$jscomp$key$source_$jscomp$restIndex$$2_source$$ = $$jscomp$iter$7_$jscomp$restParams$$.next()) {
    if ($$jscomp$key$source_$jscomp$restIndex$$2_source$$ = $$jscomp$key$source_$jscomp$restIndex$$2_source$$.value) {
      for (var $key$$ in $$jscomp$key$source_$jscomp$restIndex$$2_source$$) {
        Object.prototype.hasOwnProperty.call($$jscomp$key$source_$jscomp$restIndex$$2_source$$, $key$$) && ($target$$[$key$$] = $$jscomp$key$source_$jscomp$restIndex$$2_source$$[$key$$]);
      }
    }
  }
  return $target$$;
};
$jscomp.object.is = function $$jscomp$object$is$($left$$, $right$$) {
  return $left$$ === $right$$ ? 0 !== $left$$ || 1 / $left$$ === 1 / $right$$ : $left$$ !== $left$$ && $right$$ !== $right$$;
};
$jscomp.Set = function $$jscomp$Set$($$jscomp$iter$8_opt_iterable$$) {
  $$jscomp$iter$8_opt_iterable$$ = void 0 === $$jscomp$iter$8_opt_iterable$$ ? [] : $$jscomp$iter$8_opt_iterable$$;
  this.map_ = new $jscomp.Map;
  if ($$jscomp$iter$8_opt_iterable$$) {
    $$jscomp$iter$8_opt_iterable$$ = $jscomp.makeIterator($$jscomp$iter$8_opt_iterable$$);
    for (var $$jscomp$key$item$$ = $$jscomp$iter$8_opt_iterable$$.next();!$$jscomp$key$item$$.done;$$jscomp$key$item$$ = $$jscomp$iter$8_opt_iterable$$.next()) {
      this.add($$jscomp$key$item$$.value);
    }
  }
  this.size = this.map_.size;
};
$jscomp.Set.checkBrowserConformance_ = function $$jscomp$Set$checkBrowserConformance_$() {
  var $Set$$1_iter$$ = $jscomp.global.Set;
  if (!$Set$$1_iter$$ || !$Set$$1_iter$$.prototype.entries || !Object.seal) {
    return !1;
  }
  var $value$$ = Object.seal({x:4}), $Set$$1_iter$$ = new $Set$$1_iter$$($jscomp.makeIterator([$value$$]));
  if ($Set$$1_iter$$.has($value$$) || 1 != $Set$$1_iter$$.size || $Set$$1_iter$$.add($value$$) != $Set$$1_iter$$ || 1 != $Set$$1_iter$$.size || $Set$$1_iter$$.add({x:4}) != $Set$$1_iter$$ || 2 != $Set$$1_iter$$.size) {
    return !1;
  }
  var $Set$$1_iter$$ = $Set$$1_iter$$.entries(), $item$$ = $Set$$1_iter$$.next();
  if ($item$$.done || $item$$.value[0] != $value$$ || $item$$.value[1] != $value$$) {
    return !1;
  }
  $item$$ = $Set$$1_iter$$.next();
  return $item$$.done || $item$$.value[0] == $value$$ || 4 != $item$$.value[0].x || $item$$.value[1] != $item$$.value[0] ? !1 : $Set$$1_iter$$.next().done;
};
$jscomp.Set.prototype.add = function $$jscomp$Set$$add$($value$$) {
  this.map_.set($value$$, $value$$);
  this.size = this.map_.size;
  return this;
};
$jscomp.Set.prototype.delete = function $$jscomp$Set$$delete$($result$$2_value$$) {
  $result$$2_value$$ = this.map_.delete($result$$2_value$$);
  this.size = this.map_.size;
  return $result$$2_value$$;
};
$jscomp.Set.prototype.clear = function $$jscomp$Set$$clear$() {
  this.map_.clear();
  this.size = 0;
};
$jscomp.Set.prototype.has = function $$jscomp$Set$$has$($value$$) {
  return this.map_.has($value$$);
};
$jscomp.Set.prototype.entries = function $$jscomp$Set$$entries$() {
  return this.map_.entries();
};
$jscomp.Set.prototype.values = function $$jscomp$Set$$values$() {
  return this.map_.values();
};
$jscomp.Set.prototype.forEach = function $$jscomp$Set$$forEach$($callback$$, $opt_thisArg$$) {
  var $$jscomp$this$$ = this;
  this.map_.forEach(function($value$$) {
    return $callback$$.call($opt_thisArg$$, $value$$, $value$$, $$jscomp$this$$);
  });
};
$jscomp.Set.ASSUME_NO_NATIVE = !1;
$jscomp.Set$install = function $$jscomp$Set$install$() {
  !$jscomp.Set.ASSUME_NO_NATIVE && $jscomp.Set.checkBrowserConformance_() ? $jscomp.Set = $jscomp.global.Set : ($jscomp.Map$install(), $jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.Set.prototype[Symbol.iterator] = $jscomp.Set.prototype.values);
  $jscomp.Set$install = function $$jscomp$Set$install$() {
  };
};
$jscomp.string = $jscomp.string || {};
$jscomp.string.noNullOrUndefined_ = function $$jscomp$string$noNullOrUndefined_$($str$$, $func$$) {
  if (null == $str$$) {
    throw new TypeError("The 'this' value for String.prototype." + $func$$ + " must not be null or undefined");
  }
};
$jscomp.string.noRegExp_ = function $$jscomp$string$noRegExp_$($str$$, $func$$) {
  if ($str$$ instanceof RegExp) {
    throw new TypeError("First argument to String.prototype." + $func$$ + " must not be a regular expression");
  }
};
$jscomp.string.fromCodePoint = function $$jscomp$string$fromCodePoint$($codepoints$$) {
  for (var $$jscomp$iter$9_$jscomp$restParams$$ = [], $$jscomp$restIndex$$3_result$$ = 0;$$jscomp$restIndex$$3_result$$ < arguments.length;++$$jscomp$restIndex$$3_result$$) {
    $$jscomp$iter$9_$jscomp$restParams$$[$$jscomp$restIndex$$3_result$$ - 0] = arguments[$$jscomp$restIndex$$3_result$$];
  }
  for (var $$jscomp$restIndex$$3_result$$ = "", $$jscomp$iter$9_$jscomp$restParams$$ = $jscomp.makeIterator($$jscomp$iter$9_$jscomp$restParams$$), $$jscomp$key$code_code$$ = $$jscomp$iter$9_$jscomp$restParams$$.next();!$$jscomp$key$code_code$$.done;$$jscomp$key$code_code$$ = $$jscomp$iter$9_$jscomp$restParams$$.next()) {
    $$jscomp$key$code_code$$ = $$jscomp$key$code_code$$.value;
    $$jscomp$key$code_code$$ = +$$jscomp$key$code_code$$;
    if (0 > $$jscomp$key$code_code$$ || 1114111 < $$jscomp$key$code_code$$ || $$jscomp$key$code_code$$ !== Math.floor($$jscomp$key$code_code$$)) {
      throw new RangeError("invalid_code_point " + $$jscomp$key$code_code$$);
    }
    65535 >= $$jscomp$key$code_code$$ ? $$jscomp$restIndex$$3_result$$ += String.fromCharCode($$jscomp$key$code_code$$) : ($$jscomp$key$code_code$$ -= 65536, $$jscomp$restIndex$$3_result$$ += String.fromCharCode($$jscomp$key$code_code$$ >>> 10 & 1023 | 55296), $$jscomp$restIndex$$3_result$$ += String.fromCharCode($$jscomp$key$code_code$$ & 1023 | 56320));
  }
  return $$jscomp$restIndex$$3_result$$;
};
$jscomp.string.repeat = function $$jscomp$string$repeat$($copies$$) {
  $jscomp.string.noNullOrUndefined_(this, "repeat");
  var $string$$ = String(this);
  if (0 > $copies$$ || 1342177279 < $copies$$) {
    throw new RangeError("Invalid count value");
  }
  $copies$$ |= 0;
  for (var $result$$ = "";$copies$$;) {
    if ($copies$$ & 1 && ($result$$ += $string$$), $copies$$ >>>= 1) {
      $string$$ += $string$$;
    }
  }
  return $result$$;
};
$jscomp.string.repeat$install = function $$jscomp$string$repeat$install$() {
  String.prototype.repeat || (String.prototype.repeat = $jscomp.string.repeat);
};
$jscomp.string.codePointAt = function $$jscomp$string$codePointAt$($position_second$$) {
  $jscomp.string.noNullOrUndefined_(this, "codePointAt");
  var $string$$ = String(this), $size$$ = $string$$.length;
  $position_second$$ = Number($position_second$$) || 0;
  if (0 <= $position_second$$ && $position_second$$ < $size$$) {
    $position_second$$ |= 0;
    var $first$$ = $string$$.charCodeAt($position_second$$);
    if (55296 > $first$$ || 56319 < $first$$ || $position_second$$ + 1 === $size$$) {
      return $first$$;
    }
    $position_second$$ = $string$$.charCodeAt($position_second$$ + 1);
    return 56320 > $position_second$$ || 57343 < $position_second$$ ? $first$$ : 1024 * ($first$$ - 55296) + $position_second$$ + 9216;
  }
};
$jscomp.string.codePointAt$install = function $$jscomp$string$codePointAt$install$() {
  String.prototype.codePointAt || (String.prototype.codePointAt = $jscomp.string.codePointAt);
};
$jscomp.string.includes = function $$jscomp$string$includes$($searchString$$, $opt_position$$) {
  $opt_position$$ = void 0 === $opt_position$$ ? 0 : $opt_position$$;
  $jscomp.string.noRegExp_($searchString$$, "includes");
  $jscomp.string.noNullOrUndefined_(this, "includes");
  return -1 !== String(this).indexOf($searchString$$, $opt_position$$);
};
$jscomp.string.includes$install = function $$jscomp$string$includes$install$() {
  String.prototype.includes || (String.prototype.includes = $jscomp.string.includes);
};
$jscomp.string.startsWith = function $$jscomp$string$startsWith$($searchString$$, $i$$10_opt_position$$) {
  $i$$10_opt_position$$ = void 0 === $i$$10_opt_position$$ ? 0 : $i$$10_opt_position$$;
  $jscomp.string.noRegExp_($searchString$$, "startsWith");
  $jscomp.string.noNullOrUndefined_(this, "startsWith");
  var $string$$ = String(this);
  $searchString$$ += "";
  var $strLen$$ = $string$$.length, $searchLen$$ = $searchString$$.length;
  $i$$10_opt_position$$ = Math.max(0, Math.min($i$$10_opt_position$$ | 0, $string$$.length));
  for (var $j$$ = 0;$j$$ < $searchLen$$ && $i$$10_opt_position$$ < $strLen$$;) {
    if ($string$$[$i$$10_opt_position$$++] != $searchString$$[$j$$++]) {
      return !1;
    }
  }
  return $j$$ >= $searchLen$$;
};
$jscomp.string.startsWith$install = function $$jscomp$string$startsWith$install$() {
  String.prototype.startsWith || (String.prototype.startsWith = $jscomp.string.startsWith);
};
$jscomp.string.endsWith = function $$jscomp$string$endsWith$($searchString$$, $i$$11_opt_position$$) {
  $jscomp.string.noRegExp_($searchString$$, "endsWith");
  $jscomp.string.noNullOrUndefined_(this, "endsWith");
  var $string$$ = String(this);
  $searchString$$ += "";
  void 0 === $i$$11_opt_position$$ && ($i$$11_opt_position$$ = $string$$.length);
  $i$$11_opt_position$$ = Math.max(0, Math.min($i$$11_opt_position$$ | 0, $string$$.length));
  for (var $j$$ = $searchString$$.length;0 < $j$$ && 0 < $i$$11_opt_position$$;) {
    if ($string$$[--$i$$11_opt_position$$] != $searchString$$[--$j$$]) {
      return !1;
    }
  }
  return 0 >= $j$$;
};
$jscomp.string.endsWith$install = function $$jscomp$string$endsWith$install$() {
  String.prototype.endsWith || (String.prototype.endsWith = $jscomp.string.endsWith);
};
var vxq = {D:{}};
vxq.D.DEBUG = !0;
var module$exports$vxq$debug = {assert:function($condition$$, $message$$) {
  if (vxq.D.DEBUG && !$condition$$) {
    throw Error((void 0 === $message$$ ? null : $message$$) || "Assertion failed");
  }
}, log:function($args$$) {
  for (var $$jscomp$restParams$$ = [], $$jscomp$restIndex$$ = 0;$$jscomp$restIndex$$ < arguments.length;++$$jscomp$restIndex$$) {
    $$jscomp$restParams$$[$$jscomp$restIndex$$ - 0] = arguments[$$jscomp$restIndex$$];
  }
  vxq.D.DEBUG && console.log.apply(console, [].concat($jscomp.arrayFromIterable($$jscomp$restParams$$)));
}};
var module$exports$vxq$util = {CallbackList:function() {
  this.callbacks = [];
  this.callbackTokens = [];
}};
module$exports$vxq$util.CallbackList.prototype.add = function $module$exports$vxq$util$CallbackList$$add$($f$$) {
  var $token$$ = {};
  this.callbackTokens.push($token$$);
  this.callbacks.push($f$$);
  return function() {
    var $index$$ = this.callbackTokens.indexOf($token$$);
    this.callbacks.splice($index$$, 1);
    this.callbackTokens.splice($index$$, 1);
  }.bind(this);
};
module$exports$vxq$util.CallbackList.prototype.call = function $module$exports$vxq$util$CallbackList$$call$() {
  for (var $$jscomp$iter$0$$ = $jscomp.makeIterator(this.callbacks), $$jscomp$key$f_f$$ = $$jscomp$iter$0$$.next();!$$jscomp$key$f_f$$.done;$$jscomp$key$f_f$$ = $$jscomp$iter$0$$.next()) {
    $$jscomp$key$f_f$$ = $$jscomp$key$f_f$$.value, $$jscomp$key$f_f$$();
  }
};
module$exports$vxq$util.shuffle = function $module$exports$vxq$util$shuffle$($array$$) {
  for (var $i$$ = 0;$i$$ < $array$$.length - 1;$i$$++) {
    var $value$$ = $array$$[$i$$], $randomIndex$$ = $i$$ + Math.floor(Math.random() * $array$$.length - $i$$);
    $array$$[$i$$] = $array$$[$randomIndex$$];
    $array$$[$randomIndex$$] = $value$$;
  }
};
module$exports$vxq$util.elementInView = function $module$exports$vxq$util$elementInView$($element$$) {
  $element$$ = $element$$.getBoundingClientRect();
  return !(0 > $element$$.bottom || 0 > $element$$.right || $element$$.top > window.innerHeight || $element$$.left > window.innerWidth);
};
var module$exports$vxq$worlds$turtles = {World:function($width$$, $height$$, $turtles$$) {
  this.width = $width$$;
  this.height = $height$$;
  this.turtles = new Set($turtles$$);
  this.changeCallbacks = new module$exports$vxq$util.CallbackList;
}};
Object.defineProperties(module$exports$vxq$worlds$turtles.World.prototype, {agents:{configurable:!0, enumerable:!0, get:function() {
  return this.turtles;
}}});
module$exports$vxq$worlds$turtles.Turtle = function $module$exports$vxq$worlds$turtles$Turtle$() {
  this.y = this.x = 50;
  this.rotation = this.z = 0;
  this.changeCallbacks = new module$exports$vxq$util.CallbackList;
};
module$exports$vxq$worlds$turtles.Turtle.prototype.right = function $module$exports$vxq$worlds$turtles$Turtle$$right$($turns$$) {
  module$exports$vxq$debug.assert(Number.isFinite($turns$$));
  this.rotation += $turns$$;
};
module$exports$vxq$worlds$turtles.Turtle.prototype.left = function $module$exports$vxq$worlds$turtles$Turtle$$left$($turns$$) {
  module$exports$vxq$debug.assert(Number.isFinite($turns$$));
  this.rotation -= $turns$$;
};
module$exports$vxq$worlds$turtles.Turtle.prototype.forward = function $module$exports$vxq$worlds$turtles$Turtle$$forward$($distance$$) {
  module$exports$vxq$debug.assert(Number.isFinite($distance$$));
  this.goTo(this.x + $distance$$ * this.xFactor, this.y + $distance$$ * this.yFactor, this.z);
};
module$exports$vxq$worlds$turtles.Turtle.prototype.backward = function $module$exports$vxq$worlds$turtles$Turtle$$backward$($distance$$) {
  module$exports$vxq$debug.assert(Number.isFinite($distance$$));
  this.goTo(this.x + -$distance$$ * this.xFactor, this.y + -$distance$$ * this.yFactor, this.z);
};
module$exports$vxq$worlds$turtles.Turtle.prototype.goTo = function $module$exports$vxq$worlds$turtles$Turtle$$goTo$($x$$, $y$$, $xDelta_z$$) {
  module$exports$vxq$debug.assert(Number.isFinite($x$$));
  module$exports$vxq$debug.assert(Number.isFinite($y$$));
  module$exports$vxq$debug.assert(Number.isFinite($xDelta_z$$));
  $xDelta_z$$ = $x$$ - this.x;
  for (var $yDelta$$ = $y$$ - this.y, $steps$$ = Math.ceil(Math.sqrt($xDelta_z$$ * $xDelta_z$$ + $yDelta$$ * $yDelta$$) / 4), $i$$ = 0;$i$$ < $steps$$;$i$$++) {
    this.x += $xDelta_z$$ / $steps$$, this.y += $yDelta$$ / $steps$$, this.changeCallbacks.call();
  }
  this.x = $x$$;
  this.y = $y$$;
  this.changeCallbacks.call();
  return Promise.resolve();
};
Object.defineProperties(module$exports$vxq$worlds$turtles.Turtle.prototype, {xFactor:{configurable:!0, enumerable:!0, get:function() {
  return -Math.sin(2 * this.rotation * Math.PI);
}}, yFactor:{configurable:!0, enumerable:!0, get:function() {
  return Math.cos(2 * this.rotation * Math.PI);
}}});
var module$contents$vxq$worlds$flatland$Vector_Vector = function $module$contents$vxq$worlds$flatland$Vector_Vector$($x$$, $y$$) {
  module$exports$vxq$debug.assert(Number.isFinite($x$$), "x = " + $x$$ + " must be a finite number");
  module$exports$vxq$debug.assert(Number.isFinite($y$$), "y = " + $y$$ + " must be a finite number");
  this.x = $x$$;
  this.y = $y$$;
};
module$contents$vxq$worlds$flatland$Vector_Vector.prototype.magnitude = function $module$contents$vxq$worlds$flatland$Vector_Vector$$magnitude$() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
module$contents$vxq$worlds$flatland$Vector_Vector.prototype.direction = function $module$contents$vxq$worlds$flatland$Vector_Vector$$direction$() {
  return this.withMagnitude(1);
};
module$contents$vxq$worlds$flatland$Vector_Vector.prototype.withMagnitude = function $module$contents$vxq$worlds$flatland$Vector_Vector$$withMagnitude$($magnitude$$) {
  module$exports$vxq$debug.assert(Number.isFinite($magnitude$$), "magnitude = " + $magnitude$$ + " must be a finite number");
  var $currentMagnitude$$ = this.magnitude();
  return 0 !== $currentMagnitude$$ ? this.scale($magnitude$$ / $currentMagnitude$$) : module$contents$vxq$worlds$flatland$Vector_V(0, 0);
};
module$contents$vxq$worlds$flatland$Vector_Vector.prototype.scale = function $module$contents$vxq$worlds$flatland$Vector_Vector$$scale$($factor$$) {
  module$exports$vxq$debug.assert(Number.isFinite($factor$$), "magnitude = " + $factor$$ + " must be a finite number");
  return 0 == $factor$$ || 0 == this.x && 0 == this.y ? module$contents$vxq$worlds$flatland$Vector_V(0, 0) : module$contents$vxq$worlds$flatland$Vector_V($factor$$ * this.x, $factor$$ * this.y);
};
module$contents$vxq$worlds$flatland$Vector_Vector.prototype.add = function $module$contents$vxq$worlds$flatland$Vector_Vector$$add$($other$$) {
  return module$contents$vxq$worlds$flatland$Vector_V(this.x + $other$$.x, this.y + $other$$.y);
};
module$contents$vxq$worlds$flatland$Vector_Vector.prototype.subtract = function $module$contents$vxq$worlds$flatland$Vector_Vector$$subtract$($other$$) {
  return module$contents$vxq$worlds$flatland$Vector_V(this.x - $other$$.x, this.y - $other$$.y);
};
module$contents$vxq$worlds$flatland$Vector_Vector.prototype.addXY = function $module$contents$vxq$worlds$flatland$Vector_Vector$$addXY$($x$$, $y$$) {
  return module$contents$vxq$worlds$flatland$Vector_V(this.x + $x$$, this.y + $y$$);
};
module$contents$vxq$worlds$flatland$Vector_Vector.prototype.toString = function $module$contents$vxq$worlds$flatland$Vector_Vector$$toString$() {
  return "V(" + this.x + ", " + this.y + ")";
};
var module$contents$vxq$worlds$flatland$Vector_V = module$contents$vxq$worlds$flatland$Vector_Vector.V = function $module$contents$vxq$worlds$flatland$Vector_Vector$V$($x$$, $y$$) {
  return new module$contents$vxq$worlds$flatland$Vector_Vector($x$$, $y$$);
}, module$exports$vxq$worlds$flatland$Vector = module$contents$vxq$worlds$flatland$Vector_Vector;
var $jscomp$destructuring$var0 = module$contents$vxq$worlds$flatland$Vector_Vector, module$contents$vxq$worlds$flatland$World_V = module$contents$vxq$worlds$flatland$Vector_Vector.V, module$contents$vxq$worlds$flatland$World_World = function $module$contents$vxq$worlds$flatland$World_World$($width$$, $height$$) {
  var $$jscomp$this$$ = this;
  this.width = $width$$;
  this.height = $height$$;
  this.changeCallbacks = new module$exports$vxq$util.CallbackList;
  this.units = new Set;
  this.gravity = 6.67408;
  this.proportionalVelocityLossPerSecond = .05;
  this.minNonzeroSpeed = 10;
  var $then$$ = +new Date;
  this.tickInterval = setInterval(function() {
    var $now$$ = +new Date, $dt$$ = ($now$$ - $then$$) / 1E3;
    $then$$ = $now$$;
    $$jscomp$this$$.tick($dt$$);
  }, 20);
};
module$contents$vxq$worlds$flatland$World_World.prototype.tick = function $module$contents$vxq$worlds$flatland$World_World$$tick$($$jscomp$iter$5$$1_dt$$) {
  if (!(0 >= $$jscomp$iter$5$$1_dt$$)) {
    for (var $forces$$ = new Map, $$jscomp$iter$1$$ = $jscomp.makeIterator(this.units), $$jscomp$iter$2$$ = $$jscomp$iter$1$$.next();!$$jscomp$iter$2$$.done;$$jscomp$iter$2$$ = $$jscomp$iter$1$$.next()) {
      $forces$$.set($$jscomp$iter$2$$.value, module$contents$vxq$worlds$flatland$World_V(0, 0));
    }
    if (0 !== this.gravity) {
      for ($$jscomp$iter$1$$ = $jscomp.makeIterator(this.units), $$jscomp$iter$2$$ = $$jscomp$iter$1$$.next();!$$jscomp$iter$2$$.done;$$jscomp$iter$2$$ = $$jscomp$iter$1$$.next()) {
        for (var $$jscomp$iter$4$$ = $$jscomp$iter$2$$.value, $$jscomp$iter$2$$ = $jscomp.makeIterator(this.units), $$jscomp$key$other_dP_f$$4_inertia_other$$ = $$jscomp$iter$2$$.next();!$$jscomp$key$other_dP_f$$4_inertia_other$$.done;$$jscomp$key$other_dP_f$$4_inertia_other$$ = $$jscomp$iter$2$$.next()) {
          if ($$jscomp$key$other_dP_f$$4_inertia_other$$ = $$jscomp$key$other_dP_f$$4_inertia_other$$.value, $$jscomp$iter$4$$ !== $$jscomp$key$other_dP_f$$4_inertia_other$$) {
            var $displacement_f$11$$ = $$jscomp$key$other_dP_f$$4_inertia_other$$.position.subtract($$jscomp$iter$4$$.position), $dV_distance$$ = $displacement_f$11$$.magnitude();
            40 > $dV_distance$$ && ($dV_distance$$ = 40);
            $$jscomp$key$other_dP_f$$4_inertia_other$$ = $displacement_f$11$$.direction().scale(this.gravity * $$jscomp$iter$4$$.mass * $$jscomp$key$other_dP_f$$4_inertia_other$$.mass / Math.pow($dV_distance$$, 2));
            $forces$$.set($$jscomp$iter$4$$, $forces$$.get($$jscomp$iter$4$$).add($$jscomp$key$other_dP_f$$4_inertia_other$$));
          }
        }
      }
    }
    $$jscomp$iter$1$$ = [];
    $$jscomp$iter$4$$ = $jscomp.makeIterator(this.units);
    for ($$jscomp$iter$2$$ = $$jscomp$iter$4$$.next();!$$jscomp$iter$2$$.done;$$jscomp$iter$2$$ = $$jscomp$iter$4$$.next()) {
      $$jscomp$iter$2$$ = $$jscomp$iter$2$$.value, $$jscomp$key$other_dP_f$$4_inertia_other$$ = $$jscomp$iter$2$$.mass * $$jscomp$iter$2$$.interialAmplification, $displacement_f$11$$ = $forces$$.get($$jscomp$iter$2$$), $dV_distance$$ = $displacement_f$11$$.scale($$jscomp$iter$5$$1_dt$$ / $$jscomp$key$other_dP_f$$4_inertia_other$$), console.log("dV from forces " + $dV_distance$$), $$jscomp$iter$2$$.velocity = $$jscomp$iter$2$$.velocity.add($dV_distance$$), $dV_distance$$ = $$jscomp$iter$2$$.velocity.magnitude(), 
      $dV_distance$$ = Math.max(0, $dV_distance$$ - $$jscomp$iter$5$$1_dt$$ * $dV_distance$$ * this.proportionalVelocityLossPerSecond), $dV_distance$$ >= this.minNonzeroSpeed || $displacement_f$11$$.magnitude() / $$jscomp$key$other_dP_f$$4_inertia_other$$ > 10 * this.minNonzeroSpeed ? (console.log(String($dV_distance$$)), $$jscomp$iter$2$$.velocity = $$jscomp$iter$2$$.velocity.withMagnitude($dV_distance$$)) : $$jscomp$iter$2$$.velocity = module$contents$vxq$worlds$flatland$World_V(0, 0), 0 < $$jscomp$iter$2$$.velocity.magnitude() && 
      ($$jscomp$key$other_dP_f$$4_inertia_other$$ = $$jscomp$iter$2$$.velocity.scale($$jscomp$iter$5$$1_dt$$), $$jscomp$iter$2$$.position = $$jscomp$iter$2$$.position.add($$jscomp$key$other_dP_f$$4_inertia_other$$), $$jscomp$iter$1$$.push($$jscomp$iter$2$$));
    }
    module$exports$vxq$util.shuffle($$jscomp$iter$1$$);
    $$jscomp$iter$5$$1_dt$$ = $jscomp.makeIterator($$jscomp$iter$1$$);
    for ($$jscomp$iter$2$$ = $$jscomp$iter$5$$1_dt$$.next();!$$jscomp$iter$2$$.done;$$jscomp$iter$2$$ = $$jscomp$iter$5$$1_dt$$.next()) {
      $$jscomp$iter$2$$.value.changeCallbacks.call();
    }
  }
};
Object.defineProperties(module$contents$vxq$worlds$flatland$World_World.prototype, {agents:{configurable:!0, enumerable:!0, get:function() {
  return new Set(this.units);
}}});
var module$exports$vxq$worlds$flatland$World = module$contents$vxq$worlds$flatland$World_World;
var $jscomp$destructuring$var1 = module$contents$vxq$worlds$flatland$Vector_Vector, module$contents$vxq$worlds$flatland$Unit_V = module$contents$vxq$worlds$flatland$Vector_Vector.V, module$contents$vxq$worlds$flatland$Unit_Unit = function $module$contents$vxq$worlds$flatland$Unit_Unit$($world$$, $x$$, $y$$) {
  this.world = $world$$;
  this.position = module$contents$vxq$worlds$flatland$Unit_V(void 0 === $x$$ ? 0 : $x$$, void 0 === $y$$ ? 0 : $y$$);
  this.velocity = module$contents$vxq$worlds$flatland$Unit_V(0, 0);
  this.radius = 4;
  this.mass = 1E4;
  this.interialAmplification = 1;
  this.targetPosition = null;
  this.targetMaxDistance = 16;
  this.targetMaxSpeed = 4;
  this.currentMove = null;
  this.changeCallbacks = new module$exports$vxq$util.CallbackList;
};
module$contents$vxq$worlds$flatland$Unit_Unit.prototype.goTo = function $module$contents$vxq$worlds$flatland$Unit_Unit$$goTo$($x$$, $y$$, $z$$) {
  var $$jscomp$this$$ = this;
  if (this.currentMove) {
    var $f$$ = function $$f$$$() {
      return $$jscomp$this$$.goTo($x$$, $y$$, $z$$);
    };
    return this.currentMove.then($f$$, $f$$);
  }
  return this.currentMove = new Promise(function($resolve$$, $reject$$) {
    return $resolve$$();
  });
};
Object.defineProperties(module$contents$vxq$worlds$flatland$Unit_Unit.prototype, {x:{configurable:!0, enumerable:!0, get:function() {
  return this.position.x;
}}, y:{configurable:!0, enumerable:!0, get:function() {
  return this.position.y;
}}, z:{configurable:!0, enumerable:!0, get:function() {
  return 0;
}}});
var module$exports$vxq$worlds$flatland$Unit = module$contents$vxq$worlds$flatland$Unit_Unit;
var $jscomp$destructuring$var2 = module$contents$vxq$worlds$flatland$Vector_Vector, module$contents$vxq$worlds$flatland_V = module$contents$vxq$worlds$flatland$Vector_Vector.V, module$exports$vxq$worlds$flatland = {World:module$contents$vxq$worlds$flatland$World_World, Unit:module$contents$vxq$worlds$flatland$Unit_Unit, Vector:module$contents$vxq$worlds$flatland$Vector_Vector, V:module$contents$vxq$worlds$flatland_V};
var module$exports$vxq$testing = {assert:function($condition$$, $message$$) {
  if (!$condition$$) {
    throw Error((void 0 === $message$$ ? null : $message$$) || "Assertion failed");
  }
}, assertEquals:function($expected$$, $actual$$) {
  module$exports$vxq$testing.assert($expected$$ === $actual$$, $expected$$ + " !== " + $actual$$);
}};
var module$contents$vxq$renderers$FlatCanvas_AgentRender = function $module$contents$vxq$renderers$FlatCanvas_AgentRender$($renderer$$, $agent$$) {
  var $$jscomp$this$$ = this;
  this.totalDistance = 0;
  this.hueSeed = 1E3 * Math.random();
  this.lastZ = this.lastY = this.lastX = 0;
  this.renderer = $renderer$$;
  this.agent = $agent$$;
  this.cancel = $agent$$.changeCallbacks.add(function() {
    return void $$jscomp$this$$.update($agent$$.x, $agent$$.y, $agent$$.z);
  });
};
module$contents$vxq$renderers$FlatCanvas_AgentRender.prototype.update = function $module$contents$vxq$renderers$FlatCanvas_AgentRender$$update$($deltaX_x$$, $deltaY_y$$, $deltaZ_g_z$$) {
  module$exports$vxq$util.elementInView(this.renderer.canvas) && ($deltaX_x$$ -= this.lastX, $deltaY_y$$ -= this.lastY, $deltaZ_g_z$$ -= this.lastZ, this.totalDistance += Math.sqrt($deltaX_x$$ * $deltaX_x$$ + $deltaY_y$$ * $deltaY_y$$ + $deltaZ_g_z$$ * $deltaZ_g_z$$), $deltaZ_g_z$$ = this.renderer.context, $deltaZ_g_z$$.fillStyle = "rgba(0, 0, 0, 0.25)", $deltaZ_g_z$$.beginPath(), $deltaZ_g_z$$.arc(this.agent.x, this.agent.y, 8, 0, 2 * Math.PI), $deltaZ_g_z$$.fill(), $deltaZ_g_z$$.fillStyle = "hsla(" + 
  this.hueSeed + ", 50%, 50%, 0.5)", $deltaZ_g_z$$.strokeStyle = "rgba(255, 255, 255, 0.5)", $deltaZ_g_z$$.beginPath(), $deltaZ_g_z$$.arc(this.agent.x, this.agent.y, 6, 0, 2 * Math.PI), $deltaZ_g_z$$.fill(), $deltaZ_g_z$$.stroke());
};
var module$exports$vxq$renderers$FlatCanvas = function $module$exports$vxq$renderers$FlatCanvas$($world$$) {
  var $$jscomp$this$$ = this;
  this.world = $world$$;
  this.canvas = document.createElement("canvas");
  this.canvas.width = this.world.width;
  this.canvas.height = this.world.height;
  this.context = this.canvas.getContext("2d");
  this.context.fillStyle = "black";
  this.context.fillRect(0, 0, this.world.width, this.world.height);
  this.renders = new Map;
  this.updateRenders();
  this.world.changeCallbacks.add(this.updateRenders.bind(this));
  var $then$$ = +new Date;
  this.tickInterval = setInterval(function() {
    var $now$$ = +new Date, $dt$$ = ($now$$ - $then$$) / 1E3;
    $then$$ = $now$$;
    $$jscomp$this$$.tick($dt$$);
  }, 100);
};
module$exports$vxq$renderers$FlatCanvas.prototype.tick = function $module$exports$vxq$renderers$FlatCanvas$$tick$($dt$$) {
  module$exports$vxq$util.elementInView(this.canvas) ? this.context.fillStyle = "rgba(0, 0, 0, " + .25 * $dt$$ + ")" : this.context.fillStyle = "black";
  this.context.fillRect(0, 0, this.world.width, this.world.height);
};
module$exports$vxq$renderers$FlatCanvas.prototype.updateRenders = function $module$exports$vxq$renderers$FlatCanvas$$updateRenders$() {
  for (var $$jscomp$iter$6$$1_$jscomp$iter$7$$ = $jscomp.makeIterator(this.renders), $$jscomp$key$agent_$jscomp$key$render_agent$$ = $$jscomp$iter$6$$1_$jscomp$iter$7$$.next();!$$jscomp$key$agent_$jscomp$key$render_agent$$.done;$$jscomp$key$agent_$jscomp$key$render_agent$$ = $$jscomp$iter$6$$1_$jscomp$iter$7$$.next()) {
    $$jscomp$key$agent_$jscomp$key$render_agent$$.value.cancel();
  }
  this.renders = new Map;
  $$jscomp$iter$6$$1_$jscomp$iter$7$$ = $jscomp.makeIterator(this.world.agents);
  for ($$jscomp$key$agent_$jscomp$key$render_agent$$ = $$jscomp$iter$6$$1_$jscomp$iter$7$$.next();!$$jscomp$key$agent_$jscomp$key$render_agent$$.done;$$jscomp$key$agent_$jscomp$key$render_agent$$ = $$jscomp$iter$6$$1_$jscomp$iter$7$$.next()) {
    $$jscomp$key$agent_$jscomp$key$render_agent$$ = $$jscomp$key$agent_$jscomp$key$render_agent$$.value, this.renders.set($$jscomp$key$agent_$jscomp$key$render_agent$$, new module$contents$vxq$renderers$FlatCanvas_AgentRender(this, $$jscomp$key$agent_$jscomp$key$render_agent$$));
  }
};
var module$contents$vxq$main_VXQModule = function $module$contents$vxq$main_VXQModule$() {
};
module$contents$vxq$main_VXQModule.prototype.test = function $module$contents$vxq$main_VXQModule$$test$($nodeElseBrowser$$) {
  $nodeElseBrowser$$ = void 0 === $nodeElseBrowser$$ ? !1 : $nodeElseBrowser$$;
  module$exports$vxq$debug.log("Let's testTheTurtles()!");
  this.testTheTurtles();
  $nodeElseBrowser$$ && ($nodeElseBrowser$$ = require("vxq.worlds.voxelquest").voxelquest, console.log("Imported", $nodeElseBrowser$$));
};
module$contents$vxq$main_VXQModule.prototype.addFlatCanvasWithTurtles = function $module$contents$vxq$main_VXQModule$$addFlatCanvasWithTurtles$($element$$) {
  var $world$$ = new module$exports$vxq$worlds$turtles.World(512, 512, []), $renderer$$ = new module$exports$vxq$renderers$FlatCanvas($world$$);
  $element$$.appendChild($renderer$$.canvas);
  this.testTheTurtles($world$$);
  return $world$$;
};
module$contents$vxq$main_VXQModule.prototype.addFlatCanvasWithFlatland = function $module$contents$vxq$main_VXQModule$$addFlatCanvasWithFlatland$($element$$6_r$$) {
  var $world$$ = new module$exports$vxq$worlds$flatland.World(512, 512), $i$$14_renderer$$ = new module$exports$vxq$renderers$FlatCanvas($world$$);
  $element$$6_r$$.appendChild($i$$14_renderer$$.canvas);
  $element$$6_r$$ = function $$element$$6_r$$$() {
    return .5 + (Math.random() + Math.random() + Math.random()) / 3;
  };
  $i$$14_renderer$$ = new module$exports$vxq$worlds$flatland.Unit($world$$, 150, 50);
  $i$$14_renderer$$.velocity = module$exports$vxq$worlds$flatland.V(100, -15);
  $world$$.units.add($i$$14_renderer$$);
  $i$$14_renderer$$ = new module$exports$vxq$worlds$flatland.Unit($world$$, 400, 200);
  $i$$14_renderer$$.velocity = module$exports$vxq$worlds$flatland.V(8, 150);
  $world$$.units.add($i$$14_renderer$$);
  $i$$14_renderer$$ = new module$exports$vxq$worlds$flatland.Unit($world$$, 150, 175);
  $i$$14_renderer$$.velocity = module$exports$vxq$worlds$flatland.V(-25, 125);
  $world$$.units.add($i$$14_renderer$$);
  for ($i$$14_renderer$$ = 0;4 > $i$$14_renderer$$;$i$$14_renderer$$++) {
    var $planetComponent$$ = new module$exports$vxq$worlds$flatland.Unit($world$$, 200 + 50 * $element$$6_r$$(), 200 + 50 * $element$$6_r$$());
    $planetComponent$$.mass *= 10;
    $planetComponent$$.interialAmplification *= 10;
    $planetComponent$$.velocity = module$exports$vxq$worlds$flatland.V(5 - 10 * $element$$6_r$$(), 5 - 10 * $element$$6_r$$());
    $world$$.units.add($planetComponent$$);
  }
  $world$$.changeCallbacks.call();
  return $world$$;
};
module$contents$vxq$main_VXQModule.prototype.testTheTurtles = function $module$contents$vxq$main_VXQModule$$testTheTurtles$($i$$15_i$13_world$$) {
  $i$$15_i$13_world$$ = void 0 === $i$$15_i$13_world$$ ? new module$exports$vxq$worlds$turtles.World(512, 512, []) : $i$$15_i$13_world$$;
  var $turtle$$ = new module$exports$vxq$worlds$turtles.Turtle;
  $i$$15_i$13_world$$.turtles.add($turtle$$);
  $i$$15_i$13_world$$.changeCallbacks.call();
  module$exports$vxq$testing.assertEquals(50, $turtle$$.x);
  module$exports$vxq$testing.assertEquals(50, $turtle$$.y);
  $turtle$$.forward(50);
  module$exports$vxq$testing.assertEquals(50, $turtle$$.x);
  module$exports$vxq$testing.assertEquals(100, $turtle$$.y);
  $turtle$$.right(.25);
  $turtle$$.forward(25);
  module$exports$vxq$testing.assertEquals(25, $turtle$$.x);
  module$exports$vxq$testing.assertEquals(100, $turtle$$.y);
  $turtle$$.left(.375);
  $turtle$$.forward(100);
  for ($i$$15_i$13_world$$ = 0;12 > $i$$15_i$13_world$$;$i$$15_i$13_world$$++) {
    $turtle$$.left(.0625), $turtle$$.forward(10);
  }
  $turtle$$.forward(100);
  $turtle$$.left(.25);
  $turtle$$.forward(200);
  for ($i$$15_i$13_world$$ = 0;6 > $i$$15_i$13_world$$;$i$$15_i$13_world$$++) {
    $turtle$$.left(.0625), $turtle$$.forward(10);
  }
  $turtle$$.forward(50);
  console.log("Test complete.");
};
module$contents$vxq$main_VXQModule.prototype.exportFromClosure = function $module$contents$vxq$main_VXQModule$$exportFromClosure$() {
  "object" === typeof module && null != module && (module.exports = this);
  "object" === typeof window && null != window && (window.vxq = this);
};
var module$exports$vxq$main = new module$contents$vxq$main_VXQModule;
module$exports$vxq$main.exportFromClosure();

}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : null)
