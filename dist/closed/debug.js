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
function $$jscomp$makeIterator$$() {
  var $iterable$$2$$ = [1, 2, 3];
  $$jscomp$initSymbolIterator$$();
  if ($iterable$$2$$[$$jscomp$global$$.Symbol.iterator]) {
    return $iterable$$2$$[$$jscomp$global$$.Symbol.iterator]();
  }
  var $index$$46$$ = 0;
  return {next:function() {
    return $index$$46$$ == $iterable$$2$$.length ? {done:!0} : {done:!1, value:$iterable$$2$$[$index$$46$$++]};
  }};
}
function $vxq$util$$() {
  return new Promise(function() {
  });
}
;function $vxq$main$ModuleType_$$() {
}
$vxq$main$ModuleType_$$.prototype.hello = function $$vxq$main$ModuleType_$$$$hello$() {
  for (var $$jscomp$iter$0$$ = $$jscomp$makeIterator$$(), $$jscomp$key$n$$ = $$jscomp$iter$0$$.next();!$$jscomp$key$n$$.done;$$jscomp$key$n$$ = $$jscomp$iter$0$$.next()) {
    console.log("Hello, world.");
  }
  console.log(2 + Number("3"));
  console.log($vxq$util$$());
};
"undefined" === typeof module && "object" === typeof window && (window.$a$ = {});
module.exports = new $vxq$main$ModuleType_$$;

        }.call(
            typeof window == 'object' ? window
              : typeof this == 'object' ? this
              : null,
            typeof window == 'object' ? window : null,
            typeof module == 'object' ? module : {}
        )