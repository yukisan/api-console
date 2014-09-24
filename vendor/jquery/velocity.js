/*!
* Velocity.js: Accelerated JavaScript animation.
* @version 0.1.0
* @docs http://velocityjs.org
* @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
!function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return"[object Function]"===Object.prototype.toString.call(a)}function g(a){var b=Object.prototype.toString.call(a);return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(b)&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)}function h(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))}function i(a,b){var c=a;return q(a)?t.Easings[a]||(c=!1):c=r(a)&&2===a.length?v.apply(null,a.concat([b])):r(a)&&4===a.length?u.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:n),c}function j(a){if(a)for(var b=(new Date).getTime(),c=0,e=t.State.calls.length;e>c;c++)if(t.State.calls[c]){var f=t.State.calls[c],g=f[0],h=f[2],i=f[3];i||(i=t.State.calls[c][3]=b-16);for(var m=Math.min((b-i)/h.duration,1),n=0,o=g.length;o>n;n++){var r=g[n],u=r.element;if(s.data(u,l)){var v=!1;h.display&&"none"!==h.display&&w.setPropertyValue(u,"display",h.display);for(var x in r)if("element"!==x){var y,z=r[x],A=q(z.easing)?t.Easings[z.easing]:z.easing;if(y=1===m?z.endValue:z.startValue+(z.endValue-z.startValue)*A(m),z.currentValue=y,w.Hooks.registered[x]){var B=w.Hooks.getRoot(x),C=s.data(u,l).rootPropertyValueCache[B];C&&(z.rootPropertyValue=C)}var D=w.setPropertyValue(u,x,z.currentValue+(0===parseFloat(y)?"":z.unitType),z.rootPropertyValue,z.scrollData);w.Hooks.registered[x]&&(s.data(u,l).rootPropertyValueCache[B]=w.Normalizations.registered[B]?w.Normalizations.registered[B]("extract",null,D[1]):D[1]),"transform"===D[0]&&(v=!0)}h.mobileHA&&s.data(u,l).transformCache.translate3d===d&&(s.data(u,l).transformCache.translate3d="(0px, 0px, 0px)",v=!0),v&&w.flushTransformCache(u)}}h.display&&"none"!==h.display&&(t.State.calls[c][2].display=!1),h.progress&&h.progress.call(f[1],f[1],m,Math.max(0,i+h.duration-b),i),1===m&&k(c)}t.State.isTicking&&p(j)}function k(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],g=!1,h=0,i=c.length;i>h;h++){var j=c[h].element;if(b||"none"!==f.display||f.loop||w.setPropertyValue(j,"display",f.display),(s.queue(j)[1]===d||!/\.velocityQueueEntryFlag/i.test(s.queue(j)[1]))&&s.data(j,l)){s.data(j,l).isAnimating=!1,s.data(j,l).rootPropertyValueCache={};var k,m=["transformPerspective","translateZ","rotateX","rotateY"],n=!1;for(var o in m)k=m[o],/^\(0[^.]/.test(s.data(j,l).transformCache[k])&&(n=!0,delete s.data(j,l).transformCache[k]);f.mobileHA&&(n=!0,delete s.data(j,l).transformCache.translate3d),n&&w.flushTransformCache(j)}b||!f.complete||f.loop||h!==i-1||f.complete.call(e,e),f.queue!==!1&&s.dequeue(j,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){g=!0;break}g===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var l="velocity",m=400,n="swing",o=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),p=b.requestAnimationFrame||function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),q=function(a){return"string"==typeof a},r=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},s=b.jQuery||a.Velocity&&a.Velocity.Utilities;if(!s)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(a.Velocity!==d&&!a.Velocity.Utilities)throw new Error("Velocity: Namespace is occupied.");if(7>=o){if(b.jQuery)return void(b.jQuery.fn.velocity=b.jQuery.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===o&&!b.jQuery)throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");var t=a.Velocity=a.velocity={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:b.jQuery?{}:s,Sequences:{},Easings:{},defaults:{queue:"",duration:m,easing:n,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},animate:function(){},mock:!1,debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a,b){return 1-3*b+3*a}function b(a,b){return 3*b-6*a}function c(a){return 3*a}function d(d,e,f){return((a(e,f)*d+b(e,f))*d+c(e))*d}function e(d,e,f){return 3*a(e,f)*d*d+2*b(e,f)*d+c(e)}return function(a,b,c,f){function g(b){for(var f=b,g=0;8>g;++g){var h=e(f,a,c);if(0===h)return f;var i=d(f,a,c)-b;f-=i/h}return f}if(4!==arguments.length)return!1;for(var h=0;4>h;++h)if("number"!=typeof arguments[h]||isNaN(arguments[h])||!isFinite(arguments[h]))return!1;return a=Math.min(a,1),c=Math.min(c,1),a=Math.max(a,0),c=Math.max(c,0),function(e){return a===b&&c===f?e:d(g(e),b,f)}}}(),v=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||600,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();!function(){t.Easings.linear=function(a){return a},t.Easings.swing=function(a){return.5-Math.cos(a*Math.PI)/2},t.Easings.ease=u(.25,.1,.25,1),t.Easings["ease-in"]=u(.42,0,1,1),t.Easings["ease-out"]=u(0,0,.58,1),t.Easings["ease-in-out"]=u(.42,0,.58,1);var a={};s.each(["Quad","Cubic","Quart","Quint","Expo"],function(b,c){a[c]=function(a){return Math.pow(a,b+2)}}),s.extend(a,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),s.each(a,function(a,b){t.Easings["easeIn"+a]=b,t.Easings["easeOut"+a]=function(a){return 1-b(1-a)},t.Easings["easeInOut"+a]=function(a){return.5>a?b(2*a)/2:1-b(-2*a+2)/2}}),t.Easings.spring=function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}}();var w=t.CSS={RegEx:{valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Hooks:{templates:{color:["Red Green Blue Alpha","255 255 255 1"],backgroundColor:["Red Green Blue Alpha","255 255 255 1"],borderColor:["Red Green Blue Alpha","255 255 255 1"],borderTopColor:["Red Green Blue Alpha","255 255 255 1"],borderRightColor:["Red Green Blue Alpha","255 255 255 1"],borderBottomColor:["Red Green Blue Alpha","255 255 255 1"],borderLeftColor:["Red Green Blue Alpha","255 255 255 1"],outlineColor:["Red Green Blue Alpha","255 255 255 1"],textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0%"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){var a,b,c;if(o)for(a in w.Hooks.templates){b=w.Hooks.templates[a],c=b[0].split(" ");var d=b[1].match(w.RegEx.valueSplit);"Color"===c[0]&&(c.push(c.shift()),d.push(d.shift()),w.Hooks.templates[a]=[c.join(" "),d.join(" ")])}for(a in w.Hooks.templates){b=w.Hooks.templates[a],c=b[0].split(" ");for(var e in c){var f=a+c[e],g=e;w.Hooks.registered[f]=[a,g]}}},getRoot:function(a){var b=w.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return w.RegEx.valueUnwrap.test(b)&&(b=b.match(w.Hooks.RegEx.valueUnwrap)[1]),w.Values.isCSSNullValue(b)&&(b=w.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=w.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=w.Hooks.cleanRootPropertyValue(d,b),b.toString().match(w.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=w.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=w.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(w.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return w.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(w.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},opacity:function(a,b,c){if(8>=o)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){function a(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?"rgb("+(parseInt(b[1],16)+" "+parseInt(b[2],16)+" "+parseInt(b[3],16))+")":"rgb(0 0 0)"}var b=["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"];9>=o||t.State.isGingerbread||(b=b.concat(["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]));for(var c=0,e=b.length;e>c;c++)!function(){var a=b[c];w.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return s.data(c,l).transformCache[a]===d?/^scale/i.test(a)?1:0:s.data(c,l).transformCache[a].replace(/[()]/g,"");case"inject":var f=!1;switch(a.substr(0,a.length-1)){case"translate":f=!/(%|px|em|rem|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&s.data(c,l).transformCache[a]===d&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(s.data(c,l).transformCache[a]="("+e+")"),s.data(c,l).transformCache[a]}}}();for(var f=["color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],c=0,g=f.length;g>c;c++)!function(){var b=f[c];w.Normalizations.registered[b]=function(c,e,f){switch(c){case"name":return b;case"extract":var g;if(w.RegEx.wrappedValueAlreadyExtracted.test(f))g=f;else{var h,i={aqua:"rgb(0, 255, 255);",black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",fuchsia:"rgb(255, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",lime:"rgb(0, 255, 0)",maroon:"rgb(128, 0, 0)",navy:"rgb(0, 0, 128)",olive:"rgb(128, 128, 0)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",silver:"rgb(192, 192, 192)",teal:"rgb(0, 128, 128)",white:"rgb(255, 255, 255)",yellow:"rgb(255, 255, 0)"};/^[A-z]+$/i.test(f)?h=i[f]!==d?i[f]:i.black:/^#([A-f\d]{3}){1,2}$/i.test(f)?h=a(f):/^rgba?\(/i.test(f)||(h=i.black),g=(h||f).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=o||3!==g.split(" ").length||(g+=" 1"),g;case"inject":return 8>=o?4===f.split(" ").length&&(f=f.split(/\s+/).slice(0,3).join(" ")):3===f.split(" ").length&&(f+=" 1"),(8>=o?"rgb":"rgba")+"("+f.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),q(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|opacity|alpha|fillOpacity|flexGrow|flexHeight|zIndex|fontWeight)$)|color/i.test(a)?"":"px"},getDisplayType:function(a){var b=a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":"block"}},getPropertyValue:function(a,c,e,f){function g(a,c){var e=0;if(8>=o)e=s.css(a,c);else{if(!f){if("height"===c&&"border-box"!==w.getPropertyValue(a,"boxSizing").toString().toLowerCase())return a.offsetHeight-(parseFloat(w.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(w.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(w.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(w.getPropertyValue(a,"paddingBottom"))||0);if("width"===c&&"border-box"!==w.getPropertyValue(a,"boxSizing").toString().toLowerCase())return a.offsetWidth-(parseFloat(w.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(w.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(w.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(w.getPropertyValue(a,"paddingRight"))||0)}var h;h=s.data(a,l)===d?b.getComputedStyle(a,null):s.data(a,l).computedStyle?s.data(a,l).computedStyle:s.data(a,l).computedStyle=b.getComputedStyle(a,null),o&&"borderColor"===c&&(c="borderTopColor"),e=9===o&&"filter"===c?h.getPropertyValue(c):h[c],(""===e||null===e)&&(e=a.style[c])}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var i=g(a,"position");("fixed"===i||"absolute"===i&&/top|left/i.test(c))&&(e=s(a).position()[c]+"px")}return e}var h;if(w.Hooks.registered[c]){var i=c,j=w.Hooks.getRoot(i);e===d&&(e=w.getPropertyValue(a,w.Names.prefixCheck(j)[0])),w.Normalizations.registered[j]&&(e=w.Normalizations.registered[j]("extract",a,e)),h=w.Hooks.extractValue(i,e)}else if(w.Normalizations.registered[c]){var k,m;k=w.Normalizations.registered[c]("name",a),"transform"!==k&&(m=g(a,w.Names.prefixCheck(k)[0]),w.Values.isCSSNullValue(m)&&w.Hooks.templates[c]&&(m=w.Hooks.templates[c][1])),h=w.Normalizations.registered[c]("extract",a,m)}return/^[\d-]/.test(h)||(h=g(a,w.Names.prefixCheck(c)[0])),w.Values.isCSSNullValue(h)&&(h=0),t.debug>=2&&console.log("Get "+c+": "+h),h},setPropertyValue:function(a,c,d,e,f){var g=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(w.Normalizations.registered[c]&&"transform"===w.Normalizations.registered[c]("name",a))w.Normalizations.registered[c]("inject",a,d),g="transform",d=s.data(a,l).transformCache[c];else{if(w.Hooks.registered[c]){var h=c,i=w.Hooks.getRoot(c);e=e||w.getPropertyValue(a,i),d=w.Hooks.injectValue(h,d,e),c=i}if(w.Normalizations.registered[c]&&(d=w.Normalizations.registered[c]("inject",a,d),c=w.Normalizations.registered[c]("name",a)),g=w.Names.prefixCheck(c)[0],8>=o)try{a.style[g]=d}catch(j){console.log("Error setting ["+g+"] to ["+d+"]")}else a.style[g]=d;t.debug>=2&&console.log("Set "+c+" ("+g+"): "+d)}return[g,d]},flushTransformCache:function(a){var b,c,d,e="";for(b in s.data(a,l).transformCache)c=s.data(a,l).transformCache[b],"transformPerspective"!==b?(9===o&&"rotateZ"===b&&(b="rotate"),e+=b+c+" "):d=c;d&&(e="perspective"+d+" "+e),w.setPropertyValue(a,"transform",e)}};w.Hooks.register(),w.Normalizations.register(),t.animate=function(){function a(){return n||u}function b(){function a(){function a(a){var c=d,e=d,h=d;return r(a)?(c=a[0],!r(a[1])&&/^[\d-]/.test(a[1])||f(a[1])?h=a[1]:(q(a[1])||r(a[1]))&&(e=i(a[1],g.duration),a[2]&&(h=a[2]))):c=a,e=e||g.easing,f(c)&&(c=c.call(b,A,z)),f(h)&&(h=h.call(b,A,z)),[c||0,e,h]}function k(a,b){var c,d;return d=(b||0).toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=w.Values.getUnitType(a)),[d,c]}function m(){var a={parent:b.parentNode,position:w.getPropertyValue(b,"position"),fontSize:w.getPropertyValue(b,"fontSize")},d=a.position===H.lastPosition&&a.parent===H.lastParent,e=a.fontSize===H.lastFontSize&&a.parent===H.lastParent;H.lastParent=a.parent,H.lastPosition=a.position,H.lastFontSize=a.fontSize,null===H.remToPxRatio&&(H.remToPxRatio=parseFloat(w.getPropertyValue(c.body,"fontSize"))||16);var f={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},g={},h=10;if(g.remToPxRatio=H.remToPxRatio,o)var i=/^auto$/i.test(b.currentStyle.width),j=/^auto$/i.test(b.currentStyle.height);d&&e||(f.overflowX=w.getPropertyValue(b,"overflowX"),f.overflowY=w.getPropertyValue(b,"overflowY"),f.boxSizing=w.getPropertyValue(b,"boxSizing"),f.width=w.getPropertyValue(b,"width",null,!0),f.minWidth=w.getPropertyValue(b,"minWidth"),f.maxWidth=w.getPropertyValue(b,"maxWidth")||"none",f.height=w.getPropertyValue(b,"height",null,!0),f.minHeight=w.getPropertyValue(b,"minHeight"),f.maxHeight=w.getPropertyValue(b,"maxHeight")||"none",f.paddingLeft=w.getPropertyValue(b,"paddingLeft")),d?(g.percentToPxRatioWidth=H.lastPercentToPxWidth,g.percentToPxRatioHeight=H.lastPercentToPxHeight):(w.setPropertyValue(b,"overflowX","hidden"),w.setPropertyValue(b,"overflowY","hidden"),w.setPropertyValue(b,"boxSizing","content-box"),w.setPropertyValue(b,"width",h+"%"),w.setPropertyValue(b,"minWidth",h+"%"),w.setPropertyValue(b,"maxWidth",h+"%"),w.setPropertyValue(b,"height",h+"%"),w.setPropertyValue(b,"minHeight",h+"%"),w.setPropertyValue(b,"maxHeight",h+"%")),e?g.emToPxRatio=H.lastEmToPx:w.setPropertyValue(b,"paddingLeft",h+"em"),d||(g.percentToPxRatioWidth=H.lastPercentToPxWidth=(parseFloat(w.getPropertyValue(b,"width",null,!0))||1)/h,g.percentToPxRatioHeight=H.lastPercentToPxHeight=(parseFloat(w.getPropertyValue(b,"height",null,!0))||1)/h),e||(g.emToPxRatio=H.lastEmToPx=(parseFloat(w.getPropertyValue(b,"paddingLeft"))||1)/h);for(var k in f)null!==f[k]&&w.setPropertyValue(b,k,f[k]);return o?(i&&w.setPropertyValue(b,"width","auto"),j&&w.setPropertyValue(b,"height","auto")):(w.setPropertyValue(b,"height","auto"),f.height!==w.getPropertyValue(b,"height",null,!0)&&w.setPropertyValue(b,"height",f.height),w.setPropertyValue(b,"width","auto"),f.width!==w.getPropertyValue(b,"width",null,!0)&&w.setPropertyValue(b,"width",f.width)),t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(g),b),g}if(g.begin&&0===A&&g.begin.call(u,u),"scroll"===D){var n,p,y,B=/^x$/i.test(g.axis)?"Left":"Top",C=parseFloat(g.offset)||0;g.container?g.container.jquery||g.container.nodeType?(g.container=g.container[0]||g.container,n=g.container["scroll"+B],y=n+s(b).position()[B.toLowerCase()]+C):g.container=null:(n=t.State.scrollAnchor[t.State["scrollProperty"+B]],p=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===B?"Top":"Left")]],y=s(b).offset()[B.toLowerCase()]+C),h={scroll:{rootPropertyValue:!1,startValue:n,currentValue:n,endValue:y,unitType:"",easing:g.easing,scrollData:{container:g.container,direction:B,alternateValue:p}},element:b}}else if("reverse"===D){if(!s.data(b,l).tweensContainer)return void s.dequeue(b,g.queue);"none"===s.data(b,l).opts.display&&(s.data(b,l).opts.display="block"),s.data(b,l).opts.loop=!1,s.data(b,l).opts.begin=null,s.data(b,l).opts.complete=null,x.easing||delete g.easing,x.duration||delete g.duration,g=s.extend({},s.data(b,l).opts,g);var E=s.extend(!0,{},s.data(b,l).tweensContainer);for(var F in E)if("element"!==F){var G=E[F].startValue;E[F].startValue=E[F].currentValue=E[F].endValue,E[F].endValue=G,x&&(E[F].easing=g.easing)}h=E}else if("start"===D){var E;s.data(b,l).tweensContainer&&s.data(b,l).isAnimating===!0&&(E=s.data(b,l).tweensContainer);for(var J in v){var K=a(v[J]),L=K[0],M=K[1],N=K[2];J=w.Names.camelCase(J);var O=w.Hooks.getRoot(J),P=!1;if(w.Names.prefixCheck(O)[1]!==!1||w.Normalizations.registered[O]!==d){g.display&&"none"!==g.display&&/opacity|filter/.test(J)&&!N&&0!==L&&(N=0),g._cacheValues&&E&&E[J]?(N===d&&(N=E[J].endValue+E[J].unitType),P=s.data(b,l).rootPropertyValueCache[O]):w.Hooks.registered[J]?N===d?(P=w.getPropertyValue(b,O),N=w.getPropertyValue(b,J,P)):P=w.Hooks.templates[O][1]:N===d&&(N=w.getPropertyValue(b,J));var Q,R,S,T;Q=k(J,N),N=Q[0],S=Q[1],Q=k(J,L),L=Q[0].replace(/^([+-\/*])=/,function(a,b){return T=b,""}),R=Q[1],N=parseFloat(N)||0,L=parseFloat(L)||0;var U;if("%"===R&&(/^(fontSize|lineHeight)$/.test(J)?(L/=100,R="em"):/^scale/.test(J)?(L/=100,R=""):/(Red|Green|Blue)$/i.test(J)&&(L=L/100*255,R="")),/[\/*]/.test(T))R=S;else if(S!==R&&0!==N)if(0===L)R=S;else{U=U||m();var V=/margin|padding|left|right|width|text|word|letter/i.test(J)||/X$/.test(J)?"x":"y";switch(S){case"%":N*="x"===V?U.percentToPxRatioWidth:U.percentToPxRatioHeight;break;case"em":N*=U.emToPxRatio;break;case"rem":N*=U.remToPxRatio;break;case"px":}switch(R){case"%":N*=1/("x"===V?U.percentToPxRatioWidth:U.percentToPxRatioHeight);break;case"em":N*=1/U.emToPxRatio;break;case"rem":N*=1/U.remToPxRatio;break;case"px":}}switch(T){case"+":L=N+L;break;case"-":L=N-L;break;case"*":L=N*L;break;case"/":L=N/L}h[J]={rootPropertyValue:P,startValue:N,currentValue:N,endValue:L,unitType:R,easing:M},t.debug&&console.log("tweensContainer ("+J+"): "+JSON.stringify(h[J]),b)}else t.debug&&console.log("Skipping ["+O+"] due to a lack of browser support.")}h.element=b}h.element&&(I.push(h),s.data(b,l).tweensContainer=h,s.data(b,l).opts=g,s.data(b,l).isAnimating=!0,A===z-1?(t.State.calls.length>1e4&&(t.State.calls=e(t.State.calls)),t.State.calls.push([I,u,g]),t.State.isTicking===!1&&(t.State.isTicking=!0,j())):A++)}var b=this,g=s.extend({},t.defaults,x),h={};if(s.data(b,l)===d&&s.data(b,l,{isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),/^\d/.test(g.delay)&&g.queue!==!1&&s.queue(b,g.queue,function(a){t.velocityQueueEntryFlag=!0,setTimeout(a,parseFloat(g.delay))}),t.mock===!0)g.duration=1;else switch(g.duration.toString().toLowerCase()){case"fast":g.duration=200;break;case"normal":g.duration=m;break;case"slow":g.duration=600;break;default:g.duration=parseFloat(g.duration)||1}g.easing=i(g.easing,g.duration),g.begin&&!f(g.begin)&&(g.begin=null),g.progress&&!f(g.progress)&&(g.progress=null),g.complete&&!f(g.complete)&&(g.complete=null),g.display&&(g.display=g.display.toString().toLowerCase()),g.mobileHA=g.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,g.queue===!1?g.delay?setTimeout(a,g.delay):a():s.queue(b,g.queue,function(b){t.velocityQueueEntryFlag=!0,a(b)}),""!==g.queue&&"fx"!==g.queue||"inprogress"===s.queue(b)[0]||s.dequeue(b)}var n,p,u,v,x,y=arguments[0]&&(s.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||q(arguments[0].properties));if(h(this)?(p=0,u=this,n=this):(p=1,u=y?arguments[0].elements:arguments[0]),u=h(u)?[].slice.call(u):u){y?(v=arguments[0].properties,x=arguments[0].options):(v=arguments[p],x=arguments[p+1]);var z=g(u)||r(u)?u.length:1,A=0;if("stop"!==v&&!s.isPlainObject(x)){var B=p+1;x={};for(var C=B;C<arguments.length;C++)!r(arguments[C])&&/^\d/.test(arguments[C])?x.duration=parseFloat(arguments[C]):q(arguments[C])?x.easing=arguments[C]:!r(arguments[C])||2!==arguments[C].length&&4!==arguments[C].length?f(arguments[C])&&(x.complete=arguments[C]):x.easing=arguments[C]}var D;switch(v){case"scroll":D="scroll";break;case"reverse":D="reverse";break;case"stop":var E=[];return s.each(t.State.calls,function(a,b){b!==!1&&s.each(b[1].nodeType?[b[1]]:b[1],function(b,c){s.each(u.nodeType?[u]:u,function(b,d){d===c&&(s.data(d,l)&&s.each(s.data(d,l).tweensContainer,function(a,b){b.endValue=b.currentValue}),(x===!0||q(x))&&s.queue(d,q(x)?x:"",[]),E.push(a))})})}),s.each(E,function(a,b){k(b,!0)}),a();default:if(!s.isPlainObject(v)||s.isEmptyObject(v)){if(q(v)&&t.Sequences[v]){var F=u,G=x.duration;return x.backwards===!0&&(u=(u.jquery?[].slice.call(u):u).reverse()),s.each(u,function(a,b){parseFloat(x.stagger)&&(x.delay=parseFloat(x.stagger)*a),x.drag&&(x.duration=parseFloat(G)||(/^(callout|transition)/.test(v)?1e3:m),x.duration=Math.max(x.duration*(x.backwards?1-a/z:(a+1)/z),.75*x.duration,200)),t.Sequences[v].call(b,b,x||{},a,z)}),n||F}return console.log("First argument was not a property map, a known action, or a registered sequence. Aborting."),a()}D="start"}var H={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPxRatio:null},I=[];s.each(u.nodeType?[u]:u,function(a,c){c.nodeType&&b.call(c)});var J,K=s.extend({},t.defaults,x);if(K.loop=parseInt(K.loop),J=2*K.loop-1,K.loop)for(var L=0;J>L;L++){var M={delay:K.delay};K.complete&&L===J-1&&(M.complete=K.complete),t.animate(u,"reverse",M)}return a()}};var x=b.jQuery||b.Zepto;x&&(x.fn.velocity=t.animate,x.fn.velocity.defaults=t.defaults),"undefined"!=typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports&&(module.exports=t),s.each(["Down","Up"],function(a,b){t.Sequences["slide"+b]=function(a,c){var d=s.extend({},c),e={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},f=d.begin,g=d.complete,h=!1;null!==d.display&&(d.display="Down"===b?d.display||t.CSS.Values.getDisplayType(a):d.display||"none"),d.begin=function(){function c(){a.style.display="block",e.height=t.CSS.getPropertyValue(a,"height"),a.style.height="auto",t.CSS.getPropertyValue(a,"height")===e.height&&(h=!0),t.CSS.setPropertyValue(a,"height",e.height+"px")}if("Down"===b){e.overflow=[t.CSS.getPropertyValue(a,"overflow"),0],e.overflowX=[t.CSS.getPropertyValue(a,"overflowX"),0],e.overflowY=[t.CSS.getPropertyValue(a,"overflowY"),0],a.style.overflow="hidden",a.style.overflowX="visible",a.style.overflowY="hidden",c();for(var d in e)/^overflow/.test(d)||(e[d]=[t.CSS.getPropertyValue(a,d),0]);a.style.display="none"}else{c();for(var d in e)e[d]=[0,t.CSS.getPropertyValue(a,d)];a.style.overflow="hidden",a.style.overflowX="visible",a.style.overflowY="hidden"}f&&f.call(a,a)},d.complete=function(a){var c="Down"===b?0:1;h===!0?e.height[c]="auto":e.height[c]+="px";for(var d in e)a.style[d]=e[d][c];g&&g.call(a,a)},t.animate(a,e,d)}}),s.each(["In","Out"],function(a,b){t.Sequences["fade"+b]=function(a,c,d,e){var f=s.extend({},c),g={opacity:"In"===b?1:0};d!==e-1&&(f.complete=f.begin=null),null!==f.display&&(f.display="In"===b?t.CSS.Values.getDisplayType(a):"none"),t.animate(this,g,f)}})}(window.jQuery||window.Zepto||window,window,document);
