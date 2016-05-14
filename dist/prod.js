-function(window, module) {
'use strict';function a(){this.a=0};function c(){}c.prototype.test=function(){var b=(new a).a;if(0!==b)throw Error("0 !== "+b);console.log("Test complete.")};var d=new c;"object"===typeof module&&(module.exports=d);
}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : {})
