/*! For license information please see 15.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"88":function(e,t,a){"use strict";a.r(t),a.d(t,"taro_tabbar",(function(){return i}));var r=a(23),o=a(94);function isAbsolute(e){return"/"===e.charAt(0)}function spliceOne(e,t){for(var a=t,r=a+1,o=e.length;r<o;a+=1,r+=1)e[a]=e[r];e.pop()}var splitUrl=function(e){var t,a=e||"",r={"path":null,"query":null,"fragment":null};return(t=a.indexOf("#"))>-1&&(r.fragment=a.substring(t+1),a=a.substring(0,t)),(t=a.indexOf("?"))>-1&&(r.query=a.substring(t+1),a=a.substring(0,t)),r.path=a,r},TabbarItem=function(e){var t=e.index,a=void 0===t?null:t,n=e.isSelected,i=void 0!==n&&n,s=e.textColor,b=void 0===s?{}:s,l=e.iconPath,d=void 0===l?"":l,h=e.badgeText,c=void 0===h?null:h,u=e.showRedDot,f=void 0!==u&&u,g=e.text,p=Object(o.a)("weui-tabbar__item",{"weui-bar__item_on":i});return Object(r.f)("a",{"key":a,"href":"javascript:;","class":p,"onClick":function onClick(){e.onSelect(e.index)}},Object(r.f)("span",{"style":{"display":"inline-block","position":"relative"}},Object(r.f)("img",{"src":d,"alt":"","class":"weui-tabbar__icon"}),c&&Object(r.f)("span",{"class":"weui-badge taro-tabbar-badge","style":{"position":"absolute","top":"-2px","right":"-13px"}},c),f&&Object(r.f)("span",{"class":"weui-badge weui-badge_dot","style":{"position":"absolute","top":"0","right":"-6px"}})),Object(r.f)("p",{"class":"weui-tabbar__label","style":{"color":b}},g))},n=a(30),addLeadingSlash=function(e){return"/"===e[0]?e:"/"+e},stripBasename=function(e,t){return function(e,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e)}(e,t)?e.substr(t.length):e},i=function(){function Tabbar(e){var t=this;Object(r.g)(this,e),this.homePage="",this.customRoutes=[],this.tabbarPos="bottom",this.selectedIndex=-1,this.status=0,this.getOriginUrl=function(e){var a=t.customRoutes.filter((function(t){var a=t[1];return splitUrl(a).path===splitUrl(e).path}));return a.length?a[0][0]:e},this.getSelectedIndex=function(e){var a=-1;return t.list.forEach((function(t,r){var o=t.pagePath;splitUrl(e).path===splitUrl(o).path&&(a=r)})),a},this.switchTab=function(e){t.selectedIndex=e,n.navigateTo({"url":t.list[e].pagePath})},this.switchTabHandler=function(e){var a=e.url,r=e.successHandler,o=e.errorHandler,n=function resolvePathname(e,t){void 0===t&&(t="");var a,r=e&&e.split("/")||[],o=t&&t.split("/")||[],n=e&&isAbsolute(e),i=t&&isAbsolute(t),s=n||i;if(e&&isAbsolute(e)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var b=o[o.length-1];a="."===b||".."===b||""===b}else a=!1;for(var l=0,d=o.length;d>=0;d--){var h=o[d];"."===h?spliceOne(o,d):".."===h?(spliceOne(o,d),l++):l&&(spliceOne(o,d),l--)}if(!s)for(;l--;l)o.unshift("..");!s||""===o[0]||o[0]&&isAbsolute(o[0])||o.unshift("");var c=o.join("/");return a&&"/"!==c.substr(-1)&&(c+="/"),c}(a,t.getOriginUrl(t.getCurrentUrl()||t.homePage)),i=t.getSelectedIndex(n);i>-1?(t.switchTab(i),r({"errMsg":"switchTab:ok"})):o({"errMsg":'switchTab:fail page "'+n+'" is not found'})},this.routerChangeHandler=function(e){var a,r;if(e&&(a=e.toLocation),a&&a.path){var o=addLeadingSlash(a.path);r="/"===o?t.homePage:o}else r=t.getCurrentUrl();t.selectedIndex=t.getSelectedIndex(t.getOriginUrl(r))},this.setTabBarBadgeHandler=function(e){var a=e.index,r=e.text,o=e.errorHandler;a in t.list?(t.list[a].showRedDot=!1,t.list[a].badgeText=r):o({"errMsg":"setTabBarBadge:fail tabbar item not found"})},this.removeTabBarBadgeHandler=function(e){var a=e.index,r=e.successHandler,o=e.errorHandler;a in t.list?(t.list[a].badgeText=null,t.list[a].badgeText=null,r({"errMsg":"removeTabBarBadge:ok"})):o({"errMsg":"removeTabBarBadge:fail tabbar item not found"})},this.showTabBarRedDotHandler=function(e){var a=e.index,r=e.successHandler,o=e.errorHandler,n=t.list;a in n?(n[a].badgeText=null,n[a].showRedDot=!0,r({"errMsg":"showTabBarRedDot:ok"})):o({"errMsg":"showTabBarRedDot:fail tabbar item not found"})},this.hideTabBarRedDotHandler=function(e){var a=e.index,r=e.successHandler,o=e.errorHandler,n=t.list;a in n?(n[a].showRedDot=!1,r({"errMsg":"hideTabBarRedDot:ok"})):o({"errMsg":"hideTabBarRedDot:fail tabbar item not found"})},this.showTabBarHandler=function(e){var a=e.successHandler;t.status=0,a({"errMsg":"showTabBar:ok"})},this.hideTabBarHandler=function(e){var a=e.animation,r=e.successHandler;t.status=a?2:1,r({"errMsg":"hideTabBar:ok"})};var a=this.conf.list,o=this.conf.customRoutes;if("[object Array]"!==Object.prototype.toString.call(a)||a.length<2||a.length>5)throw new Error("tabBar 配置错误");for(var i in this.homePage=addLeadingSlash(this.conf.homePage),o)this.customRoutes.push([i,o[i]]);a.forEach((function(e){0!==e.pagePath.indexOf("/")&&(e.pagePath="/"+e.pagePath)})),this.list=a,this.onLongPress=Object(r.d)(this,"longpress",7)}return Tabbar.prototype.getCurrentUrl=function(){var e,t=this.conf.mode,a=this.conf.basename||"/";if("hash"===t){var r=window.location.href,o=r.indexOf("#");e=-1===o?"":r.substring(o+1)}else e=location.pathname;var n=addLeadingSlash(stripBasename(e,a));return"/"===n?this.homePage:n},Tabbar.prototype.bindEvent=function(){n.eventCenter.on("__taroRouterChange",this.routerChangeHandler),n.eventCenter.on("__taroSwitchTab",this.switchTabHandler),n.eventCenter.on("__taroSetTabBarBadge",this.setTabBarBadgeHandler),n.eventCenter.on("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),n.eventCenter.on("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),n.eventCenter.on("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),n.eventCenter.on("__taroShowTabBar",this.showTabBarHandler),n.eventCenter.on("__taroHideTabBar",this.hideTabBarHandler)},Tabbar.prototype.removeEvent=function(){n.eventCenter.off("__taroRouterChange",this.routerChangeHandler),n.eventCenter.off("__taroSwitchTab",this.switchTabHandler),n.eventCenter.off("__taroSetTabBarBadge",this.setTabBarBadgeHandler),n.eventCenter.off("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),n.eventCenter.off("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),n.eventCenter.off("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),n.eventCenter.off("__taroShowTabBarHandler",this.showTabBarHandler),n.eventCenter.off("__taroHideTabBarHandler",this.hideTabBarHandler)},Tabbar.prototype.componentDidLoad=function(){this.tabbarPos=this.tabbar.nextElementSibling?"top":"bottom",this.bindEvent(),this.routerChangeHandler()},Tabbar.prototype.componentDidUnload=function(){this.removeEvent()},Tabbar.prototype.render=function(){var e,t,a=this,n=this.conf,i=this.tabbarPos,s=void 0===i?"bottom":i,b=this.status,l=Object(o.a)("weui-tabbar",((e={})["taro-tabbar__border-"+(n.borderStyle||"black")]=!0,e)),d=-1===this.selectedIndex||1===b,h=2===b;return Object(r.f)(r.a,{"class":Object(o.a)("taro-tabbar__tabbar","taro-tabbar__tabbar-"+s,(t={},t["taro-tabbar__tabbar-hide"]=d,t["taro-tabbar__tabbar-slideout"]=h,t))},Object(r.f)("div",{"class":l,"style":{"backgroundColor":n.backgroundColor||""}},this.list.map((function(e,t){var o,i,s=a.selectedIndex===t;return s?(o=n.selectedColor,i=e.selectedIconPath):(o=n.color||"",i=e.iconPath),Object(r.f)(TabbarItem,{"index":t,"onSelect":a.switchTab.bind(a),"isSelected":s,"textColor":o,"iconPath":i,"text":e.text,"badgeText":e.badgeText,"showRedDot":e.showRedDot})}))))},Object.defineProperty(Tabbar.prototype,"tabbar",{"get":function(){return Object(r.e)(this)},"enumerable":!0,"configurable":!0}),Object.defineProperty(Tabbar,"style",{"get":function(){return"#app,body,html{height:100%}.taro-tabbar__border-white:before{border-top-color:#fff!important}.taro-tabbar__container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.taro-tabbar__panel{-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}.taro-tabbar__tabbar{position:relative;height:50px;width:100%;-webkit-transition:bottom .2s,top .2s;transition:bottom .2s,top .2s}.taro-tabbar__tabbar-top{top:0}.taro-tabbar__tabbar-bottom{bottom:0}.taro-tabbar__tabbar-hide{display:none}.taro-tabbar__tabbar-slideout{top:-52px;-ms-flex:0 0;flex:0 0}.taro-tabbar__panel+.taro-tabbar__tabbar-slideout{top:auto;bottom:-52px}"},"enumerable":!0,"configurable":!0}),Tabbar}()},"94":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function createCommonjsModule(e,t){return e(t={"exports":{}},t.exports),t.exports}((function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var n=classNames.apply(null,r);n&&e.push(n)}else if("object"===o)for(var i in r)t.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}))}}]);