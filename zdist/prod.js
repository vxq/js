-function(window, module) {
'use strict';var c="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this;function e(){c.Symbol||(c.Symbol=g);e=function(){}}var h=0;function g(a){return"jscomp_symbol_"+a+h++}function k(){e();c.Symbol.iterator||(c.Symbol.iterator=c.Symbol("iterator"));k=function(){}}function l(a){k();if(a[c.Symbol.iterator])return a[c.Symbol.iterator]();var b=0;return{next:function(){return b==a.length?{done:!0}:{done:!1,value:a[b++]}}}}
function p(a){for(var b=0;b<arguments.length;++b);};function q(a){this.b=a;this.y=this.x=50;this.a=this.z=0;this.b&&r(this.b,this);this.c=[]}q.prototype.addChangeCallback=function(a){var b=this;this.c.push(a);return function(){b.c.splice(b.c.indexOf(a),1)}};function t(a,b){Number.isFinite(b);a.a-=b}function u(a,b){Number.isFinite(b);w(a,a.x+b*a.f,a.y+b*a.g)}q.prototype.goTo=function(a,b,d){null!=a&&null!=b&&w(this,a,b);null!=d&&(this.z=d);return Promise.resolve()};
function w(a,b,d){for(var f=b-a.x,m=d-a.y,n=Math.ceil(Math.sqrt(f*f+m*m)/16),v=0;v<n;v++)a.x+=f/n,a.y+=m/n,a.b&&r(a.b,a);a.x=b;a.y=d;a=l(a.c);for(b=a.next();!b.done;b=a.next())b=b.value,b()}function x(a){a.b&&r(a.b,a,"black","black")}Object.defineProperties(q.prototype,{f:{configurable:!0,enumerable:!0,get:function(){return-Math.sin(2*this.a*Math.PI)}},g:{configurable:!0,enumerable:!0,get:function(){return Math.cos(2*this.a*Math.PI)}}});
function y(){this.b=document.createElement("canvas");this.a=this.b.getContext("2d");this.c=0}function r(a,b,d,f){a.a.fillStyle=(void 0===d?null:d)||"hsla("+a.c+", 50%, 50%, 0.5)";a.c+=7;a.a.strokeStyle=(void 0===f?null:f)||"rgba(255, 255, 255, 0.25)";a.a.beginPath();a.a.arc(b.x,b.y,6,0,2*Math.PI);a.a.fill();a.a.stroke()};function z(a,b){if(a!==b)throw Error(a+" !== "+b||"Assertion failed");};function A(){}A.prototype.test=function(){p("Let's testTheTurtles()!");B()};A.prototype.browserTurtleStuff=function(){var a=new y;a.b.width=512;a.b.height=512;document.currentScript.parentNode.appendChild(a.b);return B(a)};
function B(a){a=new q(void 0===a?null:a);z(50,a.x);z(50,a.y);u(a,50);x(a);z(50,a.x);z(100,a.y);Number.isFinite(.25);a.a+=.25;u(a,25);z(25,a.x);z(100,a.y);t(a,.375);u(a,100);x(a);for(var b=0;12>b;b++)t(a,.0625),u(a,10);u(a,100);t(a,.25);x(a);u(a,200);for(b=0;6>b;b++)t(a,.0625),u(a,10);u(a,50);console.log("Test complete.");return a}var C=new A;"object"===typeof module&&null!=module&&(module.exports=C);"object"===typeof window&&null!=window&&(window.vxq=C);
}.call(typeof window == 'object' ? window: typeof this == 'object' ? this: null,typeof window == 'object' ? window : null,typeof module == 'object' ? module : {})
