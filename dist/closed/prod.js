-function(window, module) {
          'use strict';var c="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this;function e(){c.Symbol||(c.Symbol=f);e=function(){}}var g=0;function f(b){return"jscomp_symbol_"+b+g++}function h(){e();c.Symbol.iterator||(c.Symbol.iterator=c.Symbol("iterator"));h=function(){}}function k(){var b=[1,2,3];h();if(b[c.Symbol.iterator])return b[c.Symbol.iterator]();var d=0;return{next:function(){return d==b.length?{done:!0}:{done:!1,value:b[d++]}}}}
function l(){return new Promise(function(){})};function m(){}m.prototype.hello=function(){for(var b=k(),d=b.next();!d.done;d=b.next())console.log("Hello, world.");console.log(2+Number("3"));console.log(l())};"undefined"===typeof module&&"object"===typeof window&&(window.a={});module.exports=new m;
        }.call(
            typeof window == 'object' ? window
              : typeof this == 'object' ? this
              : null,
            typeof window == 'object' ? window : null,
            typeof module == 'object' ? module : {}
        )
