-function(window, module) {
'use strict';function b(){this.a=0};var c={test:function(){var a=(new b).a;if(0!==a)throw Error("0 !== "+a);console.log("Test complete.")}};"object"===typeof module&&(module.exports=c);
}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : {})
