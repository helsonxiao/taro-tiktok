/*! For license information please see 18.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"92":function(t,e,o){"use strict";o.r(e),o.d(e,"taro_view_core",(function(){return r}));var s=o(23),i=o(94),r=function(){function View(t){Object(s.g)(this,t),this.hoverStartTime=50,this.hoverStayTime=400,this.hover=!1,this.touch=!1,this.startTime=0,this.onLongPress=Object(s.d)(this,"longpress",7)}return View.prototype.onTouchStart=function(){var t=this;this.hoverClass&&(this.touch=!0,setTimeout((function(){t.touch&&(t.hover=!0)}),this.hoverStartTime)),this.timeoutEvent=setTimeout((function(){t.onLongPress.emit()}),350),this.startTime=Date.now()},View.prototype.onTouchMove=function(){clearTimeout(this.timeoutEvent)},View.prototype.onTouchEnd=function(){var t=this;Date.now()-this.startTime<350&&clearTimeout(this.timeoutEvent),this.hoverClass&&(this.touch=!1,setTimeout((function(){t.touch||(t.hover=!1)}),this.hoverStayTime))},View.prototype.render=function(){var t,e=Object(i.a)(((t={})[""+this.hoverClass]=this.hover,t));return Object(s.f)(s.a,{"class":e})},Object.defineProperty(View,"style",{"get":function(){return"body,html{-webkit-tap-highlight-color:rgba(0,0,0,0);user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}taro-view-core{display:block}"},"enumerable":!0,"configurable":!0}),View}()},"94":function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var s=function createCommonjsModule(t,e){return t(e={"exports":{}},e.exports),e.exports}((function(t){!function(){var e={}.hasOwnProperty;function classNames(){for(var t=[],o=0;o<arguments.length;o++){var s=arguments[o];if(s){var i=typeof s;if("string"===i||"number"===i)t.push(s);else if(Array.isArray(s)&&s.length){var r=classNames.apply(null,s);r&&t.push(r)}else if("object"===i)for(var n in s)e.call(s,n)&&s[n]&&t.push(n)}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):window.classNames=classNames}()}))}}]);