(this["webpackJsonpradix-calculator"]=this["webpackJsonpradix-calculator"]||[]).push([[0],{11:function(t,e,n){t.exports=n(19)},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(4),o=n.n(i),c=(n(16),n(2)),l=n(5),s=n(6),u=n(9),f=n(7),d=n(10),g=n(8),m=n(0),h=n.n(m);var p=function(t){return t>"9"?10+(t=t.toLowerCase()).charCodeAt(0)-"a".charCodeAt(0):Number(t)},v=function(t){return t<=9?"".concat(t):String.fromCharCode("a".charCodeAt(0)+t-10)};function y(t,e){if(10===e)return h.a.BigInt(t);var n=h.a.BigInt(0);return Object(c.a)(t).forEach((function(a,r){var i=p(a),o=h.a.multiply(h.a.BigInt(i),h.a.exponentiate(h.a.BigInt(e),h.a.BigInt(t.length-r-1)));n=h.a.add(n,o)})),n}function b(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,a=function(t,e,n){if(10===e)return h.a.BigInt(t);for(var a=h.a.multiply(y(t,e),h.a.BigInt(10)),r=h.a.exponentiate(h.a.BigInt(e),h.a.BigInt(t.length)),i=h.a.divide(a,r).toString(),o=h.a.remainder(a,r);/[^0]/g.test(o.toString())&&i.length<n;)a=h.a.multiply(o,h.a.BigInt(10)),i+=h.a.divide(a,r).toString(),o=h.a.remainder(a,r);return i}(t,e,n);return Array(37).fill(null).map((function(r,i){return i===e?t:0===i||1===i?"NaN":function(t,e,n){var a="",r=h.a.BigInt(p("".concat(e))),i=h.a.BigInt(t);for(;/[^0]/g.test(i)&&a.length<n;){var o=i.toString().length,c=h.a.multiply(i,r).toString(),l=c.slice(0,c.length-o);a+=v(Number(l)),i=h.a.BigInt(c.slice(c.length-o))}return a}(a,i,n)}))}function E(t,e,n){var a="-"===t[0],r=(t=a?t.slice(1):t).split("."),i=Object(g.a)(r,2),o=i[0],l=i[1],s=function(t,e){var n=y(t,e),a=Array(37).fill(null);return Object(c.a)(a.keys()).forEach((function(r){a[r]=r===e?t:0===r||1===r?"NaN":n.toString(r)})),a}(o,e),u=l&&0!==Number(l)?b(l,e,n):null,f=a?"-":"";return Array(37).fill(null).map((function(n,a){return 0===a||1===a?"NaN":a===e?t:u?f+s[a]+"."+u[a]:f+s[a]}))}function C(t,e){if(e){e.focus();var n=document.getSelection().getRangeAt(0);e.startOffset=n.startOffset,e.endOffset=n.endOffset}}function x(t){var e=window.getSelection(),n=document.createRange(),a=t.firstChild;a&&(n.setStart(a,Math.min(t.startOffset,a.length)),n.setEnd(a,Math.min(t.endOffset,a.length)),e.removeAllRanges(),e.addRange(n))}n(17);var N=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(f.a)(e).call(this,t))).handleChange=function(t,e){var a=n.numRefs[e].current,r=a.textContent;!function(t,e){var n="0-".concat(Math.min(9,e-1));return e>10&&(n+="a-".concat(String.fromCharCode("a".charCodeAt(0)+e-11))),new RegExp("^-?[".concat(n,"]+\\.?[").concat(n,"]*$|^-?\\.[").concat(n,"]+$|^$"),"ig").test(t)}(r,e)?(a.textContent=n.state.radixValues[e],x(a)):(C(0,a),n.setState({radixValues:E(r.replace(/\s/g,""),e,n.state.precision)},(function(){x(a)})))},n.renderNumber=function(t){var e=n.numRefs[t];return r.a.createElement("div",{onFocus:function(e){e.target.style.color="hsla(".concat(10*t,", 70%, 40%, 0.5)")},onBlur:function(t){t.target.style.color="rgba(10, 10, 10, 1)"}},r.a.createElement("span",{className:"radix-number",ref:e,contentEditable:!0,suppressContentEditableWarning:"true",onInput:function(e){return n.handleChange(e,t)},onClick:function(t){return C(0,e.current)},onKeyDown:function(t){return C(0,e.current)},tabIndex:1,spellCheck:!1},n.state.radixValues[t]),r.a.createElement("sub",{style:{fontSize:"50%",color:"inherit"}},t))},n.numRefs=Array(37).fill(null).map((function(t){return r.a.createRef()})),n.state={radixValues:E("1024",10,10),precision:10,lastRadix:36},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=[];return Object(c.a)(this.numRefs.keys()).forEach((function(n){0!==n&&1!==n&&e.push(r.a.createElement("div",{className:"radix-number-container",key:n},r.a.createElement("div",{className:"radix-number"},t.renderNumber(n)),r.a.createElement("div",{style:{lineHeight:"80%"}},n===t.state.lastRadix?"\n":"=")))})),r.a.createElement("div",{className:"Converter"},e)}}]),e}(r.a.Component);var B=function(){return r.a.createElement("div",{className:"Setting"})};n(18);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat&display=swap",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Architects+Daughter&display=swap",rel:"stylesheet"}),r.a.createElement(B,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.c550d1ab.chunk.js.map