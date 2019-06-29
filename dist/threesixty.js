!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ThreeSixty=e():t.ThreeSixty=e()}(window,function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),function(t){function n(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");var n=e.get(t);return n.get?n.get.call(t):n.value}function s(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");var s=e.get(t);if(s.set)s.set.call(t,n);else{if(!s.writable)throw new TypeError("attempted to set read only private field");s.value=n}return n}var i=new WeakMap,o=new WeakMap,r=new WeakMap,a=new WeakMap;e.default=class{constructor(t,e){i.set(this,{writable:!0,value:0}),o.set(this,{writable:!0,value:null}),r.set(this,{writable:!0,value:null}),a.set(this,{writable:!0,value:!1}),this.container=t,this.options=Object.assign({width:300,height:300,count:0,perRow:0,speed:100,dragTolerance:10,swipeTolerance:10,draggable:!0,swipeable:!0,keys:!0,inverted:!1},e),this.options.swipeTarget=this.options.swipeTarget||this.container,this.sprite=!Array.isArray(this.options.image),this.sprite||(this.options.count=this.options.image.length),this.eventHandlers={container:{mousedown:t=>s(this,o,t.pageX),touchstart:t=>s(this,o,t.touches[0].clientX),touchend:()=>s(this,o,null)},prev:{mousedown:t=>{t.preventDefault(),this.play(!0)},mouseup:t=>{t.preventDefault(),this.stop()},touchstart:t=>{t.preventDefault(),this.prev()}},next:{mousedown:t=>{t.preventDefault(),this.play()},mouseup:t=>{t.preventDefault(),this.stop()},touchstart:t=>{t.preventDefault(),this.next()}},global:{mouseup:()=>s(this,o,null),mousemove:t=>{n(this,o)&&Math.abs(n(this,o)-t.pageX)>this.options.dragTolerance&&(this.stop(),n(this,o)>t.pageX?this.prev():this.next(),s(this,o,t.pageX))},touchmove:t=>{n(this,o)&&Math.abs(n(this,o)-t.touches[0].clientX)>this.options.swipeTolerance&&(this.stop(),n(this,o)>t.touches[0].clientX?this.prev():this.next(),s(this,o,t.touches[0].clientX))},keydown:t=>{[37,39].includes(t.keyCode)&&this.play(37===t.keyCode)},keyup:t=>{[37,39].includes(t.keyCode)&&self.stop()}}},this.initContainer(),this.initEvents()}initContainer(){this.container.style.width=this.options.width+"px",this.container.style.height=this.options.height+"px",this.sprite&&(this.container.style.backgroundImage=`url("${this.options.image}")`,this.container.style.backgroundSize=100*this.options.perRow+"%"),this.update()}initEvents(){this.options.draggable&&(this.options.swipeTarget.addEventListener("mousedown",this.eventHandlers.container.mousedown),t.addEventListener("mouseup",this.eventHandlers.global.mouseup),t.addEventListener("mousemove",this.eventHandlers.global.mousemove)),this.options.swipeable&&(this.options.swipeTarget.addEventListener("touchstart",this.eventHandlers.container.touchstart),this.options.swipeTarget.addEventListener("touchend",this.eventHandlers.container.touchend),t.addEventListener("touchmove",this.eventHandlers.global.touchmove)),this.options.keys&&(t.addEventListener("keydown",this.eventHandlers.global.keydown),t.addEventListener("keyup",this.eventHandlers.global.keyup)),this.options.prev&&(this.options.prev.addEventListener("mousedown",this.eventHandlers.prev.mousedown),this.options.prev.addEventListener("mouseup",this.eventHandlers.prev.mouseup),this.options.prev.addEventListener("touchstart",this.eventHandlers.prev.touchstart)),this.options.next&&(this.options.next.addEventListener("mousedown",this.eventHandlers.next.mousedown),this.options.next.addEventListener("mouseup",this.eventHandlers.next.mouseup),this.options.next.addEventListener("touchstart",this.eventHandlers.next.touchstart))}get index(){return n(this,i)}get looping(){return n(this,a)}next(){this.goto(this.options.inverted?n(this,i)-1:n(this,i)+1)}prev(){this.goto(this.options.inverted?n(this,i)+1:n(this,i)-1)}goto(t){s(this,i,(this.options.count+t)%this.options.count),this.update()}loop(e){e?this.prev():this.next(),s(this,r,t.setTimeout(()=>{this.loop(e)},this.options.speed))}play(t){n(this,a)||(this.loop(t),s(this,a,!0))}stop(){n(this,a)&&(t.clearTimeout(n(this,r)),s(this,a,!1))}update(){this.sprite?(this.container.style.backgroundPositionX=-n(this,i)%this.options.perRow*this.options.width+"px",this.container.style.backgroundPositionY=-Math.floor(n(this,i)/this.options.perRow)*this.options.height+"px"):this.container.style.backgroundImage=`url("${this.options.image[n(this,i)]}")`}destroy(){this.stop(),this.options.swipeTarget.removeEventListener("mousedown",this.eventHandlers.container.mousedown),this.options.swipeTarget.removeEventListener("touchstart",this.eventHandlers.container.touchstart),this.options.swipeTarget.removeEventListener("touchend",this.eventHandlers.container.touchend),t.removeEventListener("mouseup",this.eventHandlers.global.mouseup),t.removeEventListener("mousemove",this.eventHandlers.global.mousemove),t.removeEventListener("touchmove",this.eventHandlers.global.touchmove),t.removeEventListener("keydown",this.eventHandlers.global.keydown),t.removeEventListener("keyup",this.eventHandlers.global.keyup),this.options.prev&&(this.options.prev.removeEventListener("mousedown",this.eventHandlers.prev.mousedown),this.options.prev.removeEventListener("mouseup",this.eventHandlers.prev.mouseup),this.options.prev.removeEventListener("touchstart",this.eventHandlers.prev.touchstart)),this.options.next&&(this.options.next.removeEventListener("mousedown",this.eventHandlers.next.mousedown),this.options.next.removeEventListener("mouseup",this.eventHandlers.next.mouseup),this.options.next.removeEventListener("touchstart",this.eventHandlers.next.touchstart)),this.container.style.width="",this.container.style.height="",this.container.style.backgroundImage="",this.container.style.backgroundPosition="",this.container.style.backgroundSize=""}}}.call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]).default});