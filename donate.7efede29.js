/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var e=function(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName};var t=function(t,n){if(void 0===n&&(n=document),t instanceof Array)return t.filter(e);if(e(t))return[t];if(i=t,r=Object.prototype.toString.call(i),"object"==typeof window.NodeList?i instanceof window.NodeList:null!==i&&"object"==typeof i&&"number"==typeof i.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(r)&&(0===i.length||e(i[0])))return Array.prototype.slice.call(t);var i,r;if("string"==typeof t)try{var o=n.querySelectorAll(t);return Array.prototype.slice.call(o)}catch(e){return[]}return[]};
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function n(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=i();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function i(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function r(e,t){for(var i=n(e),r=n(t),o=[],a=0;a<4;a++)for(var s=[i[a],i[a+4],i[a+8],i[a+12]],c=0;c<4;c++){var l=4*c,d=[r[l],r[l+1],r[l+2],r[l+3]],u=s[0]*d[0]+s[1]*d[1]+s[2]*d[2]+s[3]*d[3];o[a+l]=u}return o}function o(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return n(t[2].split(", ").map(parseFloat))}return i()}function a(e){var t=Math.PI/180*e,n=i();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}function s(e){var t=Math.PI/180*e,n=i();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}function c(e,t){var n=i();return n[0]=e,n[5]="number"==typeof t?t:e,n}function l(e){var t=i();return t[12]=e,t}function d(e){var t=i();return t[13]=e,t}
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var u,f=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){return f(e)}),0)}),h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||f,p={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var m={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",(function(){document.body.style.height="100%"}))},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function v(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function y(e,t){if(v(e))return Object.keys(e).forEach((function(n){return t(e[n],n,e)}));if(e instanceof Array)return e.forEach((function(n,i){return t(n,i,e)}));throw new TypeError("Expected either an array or object literal.")}function g(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach((function(e){return i+="\n — "+e})),console.log(i,"color: #ea654b;")}}function b(){var e=this,n={active:[],stale:[]},i={active:[],stale:[]},r={active:[],stale:[]};try{y(t("[data-sr-id]"),(function(e){var t=parseInt(e.getAttribute("data-sr-id"));n.active.push(t)}))}catch(e){throw e}y(this.store.elements,(function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)})),y(n.stale,(function(t){return delete e.store.elements[t]})),y(this.store.elements,(function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===i.active.indexOf(e.sequence.id)&&i.active.push(e.sequence.id)})),y(this.store.containers,(function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)})),y(r.stale,(function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]})),y(this.store.sequences,(function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)})),y(i.stale,(function(t){return delete e.store.sequences[t]}))}var w=function(){var e={},t=document.documentElement.style;function n(n,i){if(void 0===i&&(i=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof i[n])return e[n]=n;if("string"==typeof i["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function E(e){var t=window.getComputedStyle(e.node),n=t.position,u=e.config,f={},h=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];f.computed=h?h.map((function(e){return e.trim()})).join("; ")+";":"",f.generated=h.some((function(e){return e.match(/visibility\s?:\s?visible/i)}))?f.computed:h.concat(["visibility: visible"]).map((function(e){return e.trim()})).join("; ")+";";var p,m,v,y=parseFloat(t.opacity),g=isNaN(parseFloat(u.opacity))?parseFloat(t.opacity):parseFloat(u.opacity),b={computed:y!==g?"opacity: "+y+";":"",generated:y!==g?"opacity: "+g+";":""},E=[];if(parseFloat(u.distance)){var j="top"===u.origin||"bottom"===u.origin?"Y":"X",x=u.distance;"top"!==u.origin&&"left"!==u.origin||(x=/^-/.test(x)?x.substr(1):"-"+x);var T=x.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),k=T[0];switch(T[1]){case"em":x=parseInt(t.fontSize)*k;break;case"px":x=k;break;case"%":x="Y"===j?e.node.getBoundingClientRect().height*k/100:e.node.getBoundingClientRect().width*k/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===j?E.push(d(x)):E.push(l(x))}u.rotate.x&&E.push((p=u.rotate.x,m=Math.PI/180*p,(v=i())[5]=v[10]=Math.cos(m),v[6]=v[9]=Math.sin(m),v[9]*=-1,v)),u.rotate.y&&E.push(a(u.rotate.y)),u.rotate.z&&E.push(s(u.rotate.z)),1!==u.scale&&(0===u.scale?E.push(c(2e-4)):E.push(c(u.scale)));var O={};if(E.length){O.property=w("transform"),O.computed={raw:t[O.property],matrix:o(t[O.property])},E.unshift(O.computed.matrix);var q=E.reduce(r);O.generated={initial:O.property+": matrix3d("+q.join(", ")+");",final:O.property+": matrix3d("+O.computed.matrix.join(", ")+");"}}else O.generated={initial:"",final:""};var A={};if(b.generated||O.generated.initial){A.property=w("transition"),A.computed=t[A.property],A.fragments=[];var P=u.delay,R=u.duration,L=u.easing;b.generated&&A.fragments.push({delayed:"opacity "+R/1e3+"s "+L+" "+P/1e3+"s",instant:"opacity "+R/1e3+"s "+L+" 0s"}),O.generated.initial&&A.fragments.push({delayed:O.property+" "+R/1e3+"s "+L+" "+P/1e3+"s",instant:O.property+" "+R/1e3+"s "+L+" 0s"}),A.computed&&!A.computed.match(/all 0s|none 0s/)&&A.fragments.unshift({delayed:A.computed,instant:A.computed});var M=A.fragments.reduce((function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e}),{delayed:"",instant:""});A.generated={delayed:A.property+": "+M.delayed+";",instant:A.property+": "+M.instant+";"}}else A.generated={delayed:"",instant:""};return{inline:f,opacity:b,position:n,transform:O,transition:A}}function j(e,t){t.split(";").forEach((function(t){var n=t.split(":"),i=n[0],r=n.slice(1);i&&r&&(e.style[i.trim()]=r.join(":"))}))}function x(e){var n,i=this;try{y(t(e),(function(e){var t=e.getAttribute("data-sr-id");if(null!==t){n=!0;var r=i.store.elements[t];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),j(r.node,r.styles.inline.generated),e.removeAttribute("data-sr-id"),delete i.store.elements[t]}}))}catch(e){return g.call(this,"Clean failed.",e.message)}if(n)try{b.call(this)}catch(e){return g.call(this,"Clean failed.",e.message)}}function T(){var e=this;y(this.store.elements,(function(e){j(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")})),y(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)})),this.store={containers:{},elements:{},history:[],sequences:{}}}function k(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(v(e))return y(t,(function(t){y(t,(function(t,n){v(t)?(e[n]&&v(e[n])||(e[n]={}),k(e[n],t)):e[n]=t}))})),e;throw new TypeError("Target must be an object literal.")}function O(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var q,A=(q=0,function(){return q++});function P(){var e=this;b.call(this),y(this.store.elements,(function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),j(e.node,t.filter((function(e){return""!==e})).join(" "))})),y(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)})),this.delegate(),this.initTimeout=null}function R(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?L.call(this,e,i):t.reset||o?M.call(this,e):void 0}function L(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,j(e.node,n.filter((function(e){return""!==e})).join(" ")),I.call(this,e,t)}function M(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,j(e.node,t.filter((function(e){return""!==e})).join(" ")),I.call(this,e)}function I(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,a=0;e.callbackTimer&&(a=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout((function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&x.call(n,e.node)}),i-a)}}function N(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return R.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new F(n,"visible",this.store),o=new F(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var a=n.members[r.body[0]],s=this.store.elements[a];if(s)return _.call(this,n,r.body[0],-1,t),_.call(this,n,r.body[0],1,t),R.call(this,s,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return _.call(this,n,i,-1,t),R.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return _.call(this,n,i,1,t),R.call(this,e,{reveal:!0,pristine:t})}}function z(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=A(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function F(e,t,n){var i=this;this.head=[],this.body=[],this.foot=[],y(e.members,(function(e,r){var o=n.elements[e];o&&o[t]&&i.body.push(r)})),this.body.length&&y(e.members,(function(e,r){var o=n.elements[e];o&&!o[t]&&(r<i.body[0]?i.head.push(r):i.foot.push(r))}))}function _(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],a=e.members[t+n],s=this.store.elements[a];e.blocked[o]=!0,setTimeout((function(){e.blocked[o]=!1,s&&N.call(r,s,i)}),e.interval)}function D(e,n,i){var r=this;void 0===n&&(n={}),void 0===i&&(i=!1);var o,a=[],s=n.interval||p.interval;try{s&&(o=new z(s));var c=t(e);if(!c.length)throw new Error("Invalid reveal target.");var l=c.reduce((function(e,i){var s={},c=i.getAttribute("data-sr-id");c?(k(s,r.store.elements[c]),j(s.node,s.styles.inline.computed)):(s.id=A(),s.node=i,s.seen=!1,s.revealed=!1,s.visible=!1);var l=k({},s.config||r.defaults,n);if(!l.mobile&&O()||!l.desktop&&!O())return c&&x.call(r,s),e;var d,u=t(l.container)[0];if(!u)throw new Error("Invalid container.");return u.contains(i)?(d=function(e){var t=[],n=arguments.length-1;for(;n-- >0;)t[n]=arguments[n+1];var i=null;return y(t,(function(t){y(t,(function(t){null===i&&t.node===e&&(i=t.id)}))})),i}(u,a,r.store.containers),null===d&&(d=A(),a.push({id:d,node:u})),s.config=l,s.containerId=d,s.styles=E(s),o&&(s.sequence={id:o.id,index:o.members.length},o.members.push(s.id)),e.push(s),e):e}),[]);y(l,(function(e){r.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)}))}catch(e){return g.call(this,"Reveal failed.",e.message)}y(a,(function(e){r.store.containers[e.id]={id:e.id,node:e.node}})),o&&(this.store.sequences[o.id]=o),!0!==i&&(this.store.history.push({target:e,options:n}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(P.bind(this),0))}function C(){var e=this;y(this.store.history,(function(t){D.call(e,t.target,t.options,!0)})),P.call(this)}var S=Math.sign||function(e){return(e>0)-(e<0)||+e};function W(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,a=e.node;do{isNaN(a.offsetTop)||(r+=a.offsetTop),isNaN(a.offsetLeft)||(o+=a.offsetLeft),a=a.offsetParent}while(a);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function Y(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function $(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,a=e.geometry.bounds.bottom-e.geometry.height*n,s=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,l=t.geometry.bounds.right+t.scroll.left-i.right,d=t.geometry.bounds.bottom+t.scroll.top-i.bottom,u=t.geometry.bounds.left+t.scroll.left+i.left;return r<d&&o>u&&a>c&&s<l||"fixed"===e.styles.position}}function H(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),h((function(){var i="init"===e.type||"resize"===e.type;y(n.store.containers,(function(e){i&&(e.geometry=W.call(n,e,!0));var t=Y.call(n,e);e.scroll&&(e.direction={x:S(t.left-e.scroll.left),y:S(t.top-e.scroll.top)}),e.scroll=t})),y(t,(function(e){(i||void 0===e.geometry)&&(e.geometry=W.call(n,e)),e.visible=$.call(n,e)})),y(t,(function(e){e.sequence?N.call(n,e):R.call(n,e)})),n.pristine=!1}))}var B,U,X,G,J,K,Q,V;function Z(e){var n;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==Z.prototype)return new Z(e);if(!Z.isSupported())return g.call(this,"Instantiation failed.","This browser is not supported."),m.failure();try{n=k({},K||p,e)}catch(e){return g.call(this,"Invalid configuration.",e.message),m.failure()}try{if(!t(n.container)[0])throw new Error("Invalid container.")}catch(e){return g.call(this,e.message),m.failure()}return!(K=n).mobile&&O()||!K.desktop&&!O()?(g.call(this,"This device is disabled.","desktop: "+K.desktop,"mobile: "+K.mobile),m.failure()):(m.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,B=B||H.bind(this),U=U||T.bind(this),X=X||D.bind(this),G=G||x.bind(this),J=J||C.bind(this),Object.defineProperty(this,"delegate",{get:function(){return B}}),Object.defineProperty(this,"destroy",{get:function(){return U}}),Object.defineProperty(this,"reveal",{get:function(){return X}}),Object.defineProperty(this,"clean",{get:function(){return G}}),Object.defineProperty(this,"sync",{get:function(){return J}}),Object.defineProperty(this,"defaults",{get:function(){return K}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),V||(V=this))}Z.isSupported=function(){return("transform"in(t=document.documentElement.style)||"WebkitTransform"in t)&&("transition"in(e=document.documentElement.style)||"WebkitTransition"in e);var e,t},Object.defineProperty(Z,"debug",{get:function(){return Q||!1},set:function(e){return Q="boolean"==typeof e?e:Q}}),Z();var ee=Z;ee({reset:!0,distance:"20px",duration:1250,delay:200}),ee().reveal(".animation__icon",{distance:"20px",delay:100}),ee().reveal(".animation__img",{distance:"5px",delay:100}),ee().reveal(".animation__left",{distance:"10px",delay:200,origin:"left"}),ee().reveal(".animation__right",{distance:"10px",delay:200,origin:"right"}),ee().reveal(".animation__bottom",{distance:"10px",delay:200,origin:"bottom"});
//# sourceMappingURL=donate.7efede29.js.map
