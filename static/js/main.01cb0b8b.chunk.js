(this["webpackJsonpradix-calculator"]=this["webpackJsonpradix-calculator"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),c=n.n(i),o=(n(16),n(3)),s=n(4),l=n(6),u=n(5),d=n(7),h=n(2);function f(e){e.focus();var t=document.getSelection().getRangeAt(0);e.startOffset=t.startOffset,e.endOffset=t.endOffset}function g(e){var t=window.getSelection(),n=document.createRange(),a=e.firstChild;a&&(n.setStart(a,Math.min(e.startOffset,a.length)),n.setEnd(a,Math.min(e.endOffset,a.length)),t.removeAllRanges(),t.addRange(n))}n(17);var p=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).renderNumber=function(e){return r.a.createElement("div",{onFocus:function(t){t.target.style.color="hsla(".concat(10*e,", 70%, 40%, 0.5)")},onBlur:function(e){e.target.style.color="rgba(10, 10, 10, 1)"}},r.a.createElement("span",{className:"radix-number",contentEditable:!0,suppressContentEditableWarning:"true",onInput:function(t){return n.props.handleInput(t,e)},onClick:function(e){return f(e.target)},onKeyDown:function(e){return f(e.target)},tabIndex:1,spellCheck:!1},n.props.radixValues[e]),r.a.createElement("sub",{style:{fontSize:"50%",color:"inherit"}},e))},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=[];return Object(h.a)(this.props.radixes).forEach((function(n){0!==n&&1!==n&&t.push(r.a.createElement("div",{className:"radix-number-container",key:n},r.a.createElement("div",{className:"radix-number"},e.renderNumber(n)),r.a.createElement("div",{style:{lineHeight:"80%"}},n===e.props.lastRadix?"\n":"=")))})),r.a.createElement("div",{className:"Converter"},t)}}]),t}(r.a.Component),m=(n(18),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderRadixes",value:function(){var e=this,t=Object(h.a)(Array(37).fill(null).keys()).map((function(t,n){var a="hsla(".concat(10*n,", 70%, 40%, 0.5)");return r.a.createElement("button",{key:n,style:{backgroundColor:e.props.radixes.includes(n)?a:"rgba(34,34,34,0.7)"},onClick:function(t){return e.props.toggleShownRadix(Number(t.target.textContent))}},n)}));return r.a.createElement("div",{id:"set-radixes"},r.a.createElement("div",null,"Show radixes:"),r.a.createElement("div",{id:"radix-buttons"},t.slice(2)))}},{key:"renderSlider",value:function(){var e=this,t=this.props.precision;return r.a.createElement("div",{id:"slidecontainer"},r.a.createElement("span",null,"Truncate to ",t," ",t<=1?"digit":"digits"),r.a.createElement("input",{type:"range",min:"0",max:"100",value:t,className:"slider",style:{background:"hsla(".concat(3*t,", 70%, 40%, 0.8)")},onChange:function(t){return e.props.changedPrecision(t.target.value)}}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"Setting"},this.renderRadixes(),this.renderSlider())}}]),t}(r.a.Component)),v=n(10),x=n(1),b=n.n(x);var y=function(e){return e>"9"?10+(e=e.toLowerCase()).charCodeAt(0)-"a".charCodeAt(0):Number(e)},E=function(e){return e<=9?"".concat(e):String.fromCharCode("a".charCodeAt(0)+e-10)};function O(e,t){if(10===t)return b.a.BigInt(e);var n=b.a.BigInt(0);return Object(h.a)(e).forEach((function(a,r){var i=y(a),c=b.a.multiply(b.a.BigInt(i),b.a.exponentiate(b.a.BigInt(t),b.a.BigInt(e.length-r-1)));n=b.a.add(n,c)})),n}function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,a=function(e,t,n){if(10===t)return b.a.BigInt(e);for(var a=b.a.multiply(O(e,t),b.a.BigInt(10)),r=b.a.exponentiate(b.a.BigInt(t),b.a.BigInt(e.length)),i=b.a.divide(a,r).toString(),c=b.a.remainder(a,r);/[^0]/g.test(c.toString())&&i.length<n;)a=b.a.multiply(c,b.a.BigInt(10)),i+=b.a.divide(a,r).toString(),c=b.a.remainder(a,r);return i}(e,t,n);return Array(37).fill(null).map((function(r,i){return i===t?e:0===i||1===i?"NaN":function(e,t,n){var a="",r=b.a.BigInt(y("".concat(t))),i=b.a.BigInt(e);for(;/[^0]/g.test(i)&&a.length<n;){var c=i.toString().length,o=b.a.multiply(i,r).toString(),s=o.slice(0,o.length-c);a+=E(Number(s)),i=b.a.BigInt(o.slice(o.length-c))}return a}(a,i,n)}))}function S(e,t,n){var a="-"===e[0],r=(e=a?e.slice(1):e).split("."),i=Object(v.a)(r,2),c=i[0],o=i[1],s=function(e,t){var n=O(e,t),a=Array(37).fill(null);return Object(h.a)(a.keys()).forEach((function(r){a[r]=r===t?e:0===r||1===r?"NaN":n.toString(r)})),a}(c,t),l=o&&0!==Number(o)?C(o,t,n):null,u=a?"-":"";return Array(37).fill(null).map((function(n,a){return 0===a||1===a?"NaN":a===t?e:l?u+s[a]+"."+l[a]:u+s[a]}))}n(19);var w=function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e,t){var a=e.target,r=a.textContent;!function(e,t){var n="0-".concat(Math.min(9,t-1));return t>10&&(n+="a-".concat(String.fromCharCode("a".charCodeAt(0)+t-11))),new RegExp("^-?[".concat(n,"]+\\.?[").concat(n,"]*$|^-?\\.[").concat(n,"]+$|^$"),"ig").test(e)}(r,t)?(a.textContent=n.props.radixValues[t],g(a)):(f(a),n.setState({currentValue:r,currentRadix:t,radixValues:S(r.replace(/\s/g,""),t,n.state.precision)},(function(){g(a)})))},n.changedPrecision=function(e){n.setState({precision:e})},n.toggleShownRadixes=function(e){var t=n.state.radixes.slice(0);t[e]?t[e]=null:t[e]=e,n.setState({radixes:t})};var a=[2,8,10,16];return n.state={currentValue:"1024",currentRadix:10,radixValues:S("1024",10,10),precision:10,radixes:Array(37).fill(null).map((function(e,t){return a.includes(t)?t:null}))},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.radixes.filter((function(e){return null!=e}));return r.a.createElement("div",{className:"App"},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat&display=swap",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Architects+Daughter&display=swap",rel:"stylesheet"}),r.a.createElement(m,{toggleShownRadix:this.toggleShownRadixes,changedPrecision:this.changedPrecision,precision:this.state.precision,radixes:e}),r.a.createElement(p,{radixValues:this.state.radixValues,precision:this.state.precision,radixes:e,currentValue:this.state.currentValue,currentRadix:this.state.currentRadix,lastRadix:e[e.length-1],handleInput:this.handleInput}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.01cb0b8b.chunk.js.map