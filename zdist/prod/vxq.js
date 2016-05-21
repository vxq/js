-function(window, module) {
'use strict';var g="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this;function h(){g.Symbol||(g.Symbol=k);h=function(){}}var l=0;function k(a){return"jscomp_symbol_"+a+l++}function n(){h();g.Symbol.iterator||(g.Symbol.iterator=g.Symbol("iterator"));n=function(){}}function p(a){n();if(a[g.Symbol.iterator])return a[g.Symbol.iterator]();var b=0;return{next:function(){return b==a.length?{done:!0}:{done:!1,value:a[b++]}}}};function r(a){for(var b=0;b<arguments.length;++b);};function t(){this.b=[];this.a=[]}t.prototype.add=function(a){var b={};this.a.push(b);this.b.push(a);return function(){var a=this.a.indexOf(b);this.b.splice(a,1);this.a.splice(a,1)}.bind(this)};t.prototype.call=function(){for(var a=p(this.b),b=a.next();!b.done;b=a.next())b=b.value,b()};function u(a,b,c){this.width=a;this.height=b;this.a=new Set(c);this.changeCallbacks=new t}Object.defineProperties(u.prototype,{agents:{configurable:!0,enumerable:!0,get:function(){return this.a}}});function v(){this.y=this.x=50;this.a=this.z=0;this.changeCallbacks=new t}function w(a,b){Number.isFinite(b);a.a-=b}function x(a,b){Number.isFinite(b);a.goTo(a.x+b*a.h,a.y+b*a.i,a.z)}
v.prototype.goTo=function(a,b,c){Number.isFinite(a);Number.isFinite(b);Number.isFinite(c);c=a-this.x;for(var e=b-this.y,f=Math.ceil(Math.sqrt(c*c+e*e)/4),m=0;m<f;m++)this.x+=c/f,this.y+=e/f,this.changeCallbacks.call();this.x=a;this.y=b;this.changeCallbacks.call();return Promise.resolve()};Object.defineProperties(v.prototype,{h:{configurable:!0,enumerable:!0,get:function(){return-Math.sin(2*this.a*Math.PI)}},i:{configurable:!0,enumerable:!0,get:function(){return Math.cos(2*this.a*Math.PI)}}});function y(a,b){var c=this;this.width=a;this.height=b;this.changeCallbacks=new t;this.a=new Set;var e=+new Date;setInterval(function(){var b=+new Date,a=(b-e)/1E3;e=b;for(var b=p(c.a),d=b.next();!d.done;d=b.next())if(d=d.value,0<a&&(0!=d.a||0!=d.b)){d.x+=a*d.a;d.y+=a*d.b;var q=Math.sqrt(d.a*d.a+d.b*d.b),A=Math.max(0,q-2*a-a*q*.2);d.a*=A/q;d.b*=A/q;d.changeCallbacks.call()}},20)}Object.defineProperties(y.prototype,{agents:{configurable:!0,enumerable:!0,get:function(){return new Set(this.a)}}});
function z(a,b,c){this.x=void 0===b?0:b;this.y=void 0===c?0:c;this.b=this.a=this.z=0;this.c=null;this.changeCallbacks=new t}z.prototype.goTo=function(a,b,c){var e=this;if(this.c){var f=function(){return e.goTo(a,b,c)};return this.c.then(f,f)}return this.c=new Promise(function(b){return b()})};function B(a,b){var c=a+" !== "+b;if(a!==b)throw Error((void 0===c?null:c)||"Assertion failed");};function C(a,b){var c=this;this.b=0;this.c=1E3*Math.random();this.f=a;this.a=b;this.cancel=b.changeCallbacks.add(function(){var a=b.x-0,f=b.y-0,m=b.z-0;c.b+=Math.sqrt(a*a+f*f+m*m);a=c.f.c;a.fillStyle="hsla("+(c.c+.05*c.b)+", 80%, 10%, 0.04)";a.beginPath();a.arc(c.a.x,c.a.y,192,0,2*Math.PI);a.fill();a.fillStyle="hsla("+(c.c+.05*c.b)+", 50%, 70%, 1.0)";a.strokeStyle="rgba(255, 255, 255, 0.5)";a.beginPath();a.arc(c.a.x,c.a.y,6,0,2*Math.PI);a.fill();a.stroke()})}
function D(a){this.a=a;this.b=document.createElement("canvas");this.b.width=this.a.width;this.b.height=this.a.height;this.c=this.b.getContext("2d");this.c.fillStyle="black";this.c.fillRect(0,0,this.a.width,this.a.height);this.f=new Map;this.g();this.a.changeCallbacks.add(this.g.bind(this))}D.prototype.g=function(){for(var a=p(this.f),b=a.next();!b.done;b=a.next())b.value.cancel();this.f=new Map;a=p(this.a.agents);for(b=a.next();!b.done;b=a.next())b=b.value,this.f.set(b,new C(this,b))};function E(){}E.prototype.test=function(){r("Let's testTheTurtles()!");F()};E.prototype.addFlatCanvasWithTurtles=function(a){var b=new u(512,512,[]),c=new D(b);a.appendChild(c.b);F(b);return b};
E.prototype.addFlatCanvasWithFlatland=function(a){function b(){return.5+(Math.random()+Math.random()+Math.random())/3}var c=new y(512,512),e=new D(c);a.appendChild(e.b);a=new z(0,50,50);a.a=50*b();a.b=50*b();c.a.add(a);a=new z(0,100,50);a.a=-8*b();a.b=36*b();c.a.add(a);a=new z(0,100,175);a.a=-4*b();a.b=-20*b();c.a.add(a);c.changeCallbacks.call();return c};
function F(a){a=void 0===a?new u(512,512,[]):a;var b=new v;a.a.add(b);a.changeCallbacks.call();B(50,b.x);B(50,b.y);x(b,50);B(50,b.x);B(100,b.y);Number.isFinite(.25);b.a+=.25;x(b,25);B(25,b.x);B(100,b.y);w(b,.375);x(b,100);for(a=0;12>a;a++)w(b,.0625),x(b,10);x(b,100);w(b,.25);x(b,200);for(a=0;6>a;a++)w(b,.0625),x(b,10);x(b,50);console.log("Test complete.")}var G=new E;"object"===typeof module&&null!=module&&(module.exports=G);"object"===typeof window&&null!=window&&(window.vxq=G);
}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : {})
