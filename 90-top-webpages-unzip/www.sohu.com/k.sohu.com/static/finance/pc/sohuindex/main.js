(function(a){var b={};function c(e){if(b[e]){return b[e].exports}var d=b[e]={exports:{},id:e,loaded:false};a[e].call(d.exports,d,d.exports,c);d.loaded=true;return d.exports}c.m=a;c.c=b;c.p="";return c(0)})([(function(b,a,d){d(1);var c=d(5);(function(f,h,g){var e="business_index_stockhq";f.plugin.define(e,c)})(window.sohu_mp,window.Backbone,window.jQuery)}),(function(b,a,d){var c=d(2);if(typeof c==="string"){c=[[b.id,c,""]]}var e=d(4)(c,{});if(c.locals){b.exports=c.locals}if(false){if(!c.locals){b.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./style.less",function(){var f=require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./style.less");if(typeof f==="string"){f=[[b.id,f,""]]}e(f)})}b.hot.dispose(function(){e()})}}),(function(b,a,c){a=b.exports=c(3)();a.push([b.id,'.plugin[data-widget-id="test_plugin"] * {\n  color: #0a53a3;\n}\n.stock-sohuindex-out {\n  background-color: #f9f9f9;\n  min-height: 200px;\n}\n.stock-sohuindex-out ul,\n.stock-sohuindex-out li {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.stock-sohuindex-out .stock-tag {\n  min-height: 37px;\n}\n.stock-sohuindex-out .stock-tag li {\n  float: left;\n  width: 33.333%;\n  font-size: 14px;\n  line-height: 37px;\n  cursor: pointer;\n  text-align: center;\n}\n.stock-sohuindex-out .stock-tag li a:link,\n.stock-sohuindex-out .stock-tag li a:visited {\n  text-decoration: none;\n  color: #000;\n}\n.stock-sohuindex-out .stock-tag li.cur {\n  background-color: #eee;\n}\n.stock-sohuindex {\n  padding: 0 15px;\n  clear: both;\n  min-height: 38px;\n}\n.stock-sohuindex .stock-tabcon {\n  display: none;\n}\n.stock-sohuindex .stock-tabcon .stock-num {\n  text-align: center;\n  padding: 5px 0 0;\n  font-size: 12px;\n  font-weight: 700;\n}\n.stock-sohuindex .stock-tabcon .stock-num .stock-num-a {\n  font-size: 18px;\n}\n.stock-sohuindex .stock-tabcon .stock-num .stock-num-b {\n  padding: 0 35px 0 45px;\n}\n.stock-sohuindex .stock-red .arrow,\n.stock-sohuindex .stock-green .arrow {\n  display: inline-block;\n  margin: 0 0 0 3px;\n  width: 10px;\n  height: 8px;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAeCAYAAAD+QjQzAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEgSURBVHjaYvj//z8DDL/gEecE4jUgGlkcIICYGFDBBCAOBuKpyIIAAYRsSiwQ/0fCsTA5gABiBBEveSW0gBrOADEnkv7vQGwi/vnFNYAAYgTZD1WgxYAJroEUAgQQE9R+bAoYoOIzAQIIbB0hABBATAxEAIAAIkoRQAARpQgggIhSBBBARCkCCCCiFAEEEFGKAAKIKEUAAUSUIoAAIkoRQAARpQgggIhSBBBARCkCCCAW1k3Ri4B0LB41iwECCGRSOjRxMeBIdOkAAcT0228pKJmGQpMrA1ryDQXJAwQQ2E1ABkhHNpqibKg4A0AAMSDnL5aNUYuA+D+IRhYHCCAWNN0g93FBaTgACCCi0jhAABEVTgABRJQigAAiShFAgAEA05FsD1jcyIAAAAAASUVORK5CYII=) no-repeat;\n}\n.stock-sohuindex .stock-green .arrow {\n  background-position: 0 -20px;\n}\n.stock-sohuindex .stock-red {\n  color: #f00;\n}\n.stock-sohuindex .stock-green {\n  color: green;\n}\n.stock-img {\n  padding: 0 15px;\n}\n.stock-img img {\n  margin: 0 0 0 14px;\n}\n',""])}),(function(b,a){b.exports=function(){var c=[];c.toString=function d(){var e=[];for(var f=0;f<this.length;f++){var g=this[f];if(g[2]){e.push("@media "+g[2]+"{"+g[1]+"}")}else{e.push(g[1])}}return e.join("")};c.i=function(e,h){if(typeof e==="string"){e=[[null,e,""]]}var k={};for(var f=0;f<this.length;f++){var j=this[f][0];if(typeof j==="number"){k[j]=true}}for(f=0;f<e.length;f++){var g=e[f];if(typeof g[0]!=="number"||!k[g[0]]){if(h&&!g[2]){g[2]=h}else{if(h){g[2]="("+g[2]+") and ("+h+")"}}c.push(g)}}};return c}}),(function(b,u,c){var e={},a=function(w){var v;return function(){if(typeof v==="undefined"){v=w.apply(this,arguments)}return v}},k=a(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),f=a(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,r=0,q=[];b.exports=function(x,v){if(false){if(typeof document!=="object"){throw new Error("The style-loader cannot be used in a non-browser environment")}}v=v||{};if(typeof v.singleton==="undefined"){v.singleton=k()}if(typeof v.insertAt==="undefined"){v.insertAt="bottom"}var w=s(x);l(w,v);return function y(C){var F=[];for(var B=0;B<w.length;B++){var D=w[B];var A=e[D.id];A.refs--;F.push(A)}if(C){var E=s(C);l(E,v)}for(var B=0;B<F.length;B++){var A=F[B];if(A.refs===0){for(var z=0;z<A.parts.length;z++){A.parts[z]()}delete e[A.id]}}}};function l(A,w){for(var y=0;y<A.length;y++){var z=A[y];var x=e[z.id];if(x){x.refs++;for(var v=0;v<x.parts.length;v++){x.parts[v](z.parts[v])}for(;v<z.parts.length;v++){x.parts.push(t(z.parts[v],w))}}else{var B=[];for(var v=0;v<z.parts.length;v++){B.push(t(z.parts[v],w))}e[z.id]={id:z.id,refs:1,parts:B}}}}function s(C){var D=[];var v={};for(var z=0;z<C.length;z++){var E=C[z];var w=E[0];var B=E[1];var y=E[2];var A=E[3];var x={css:B,media:y,sourceMap:A};if(!v[w]){D.push(v[w]={id:w,parts:[x]})}else{v[w].parts.push(x)}}return D}function d(w,v){var x=f();var y=q[q.length-1];if(w.insertAt==="top"){if(!y){x.insertBefore(v,x.firstChild)}else{if(y.nextSibling){x.insertBefore(v,y.nextSibling)}else{x.appendChild(v)}}q.push(v)}else{if(w.insertAt==="bottom"){x.appendChild(v)}else{throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")}}}function g(w){w.parentNode.removeChild(w);var v=q.indexOf(w);if(v>=0){q.splice(v,1)}}function o(w){var v=document.createElement("style");v.type="text/css";d(w,v);return v}function i(w){var v=document.createElement("link");v.rel="stylesheet";d(w,v);return v}function t(y,x){var w,B,v;if(x.singleton){var z=r++;w=h||(h=o(x));B=n.bind(null,w,z,false);v=n.bind(null,w,z,true)}else{if(y.sourceMap&&typeof URL==="function"&&typeof URL.createObjectURL==="function"&&typeof URL.revokeObjectURL==="function"&&typeof Blob==="function"&&typeof btoa==="function"){w=i(x);B=p.bind(null,w);v=function(){g(w);if(w.href){URL.revokeObjectURL(w.href)}}}else{w=o(x);B=m.bind(null,w);v=function(){g(w)}}}B(y);return function A(C){if(C){if(C.css===y.css&&C.media===y.media&&C.sourceMap===y.sourceMap){return}B(y=C)}else{v()}}}var j=(function(){var v=[];return function(w,x){v[w]=x;return v.filter(Boolean).join("\n")}})();function n(w,y,v,A){var z=v?"":A.css;if(w.styleSheet){w.styleSheet.cssText=j(y,z)}else{var x=document.createTextNode(z);var B=w.childNodes;if(B[y]){w.removeChild(B[y])}if(B.length){w.insertBefore(x,B[y])}else{w.appendChild(x)}}}function m(v,y){var w=y.css;var x=y.media;if(x){v.setAttribute("media",x)}if(v.styleSheet){v.styleSheet.cssText=w}else{while(v.firstChild){v.removeChild(v.firstChild)}v.appendChild(document.createTextNode(w))}}function p(v,z){var y=z.css;var A=z.sourceMap;if(A){y+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(A))))+" */"}var x=new Blob([y],{type:"text/css"});var w=v.href;v.href=URL.createObjectURL(x);if(w){URL.revokeObjectURL(w)}}}),(function(b,a,d){var c=d(6);b.exports={template:_.template(c),render:function(){this.$el.html(this.template())},initialize:function(f){this.render();function e(){$.ajax({type:"get",dataType:"jsonp",scriptCharset:"gbk",url:"//hqm.stock.sohu.com/getqjson?code=zs_000001,zs_399001,zs_399006&cb=?",success:function(g){var i="";$.each(g,function(l,j){var n=Number(j[4]);var m="";if(n>0){m="stock-tabcon stock-red"}else{if(n<0){m="stock-tabcon stock-green"}else{m="stock-tabcon"}}i+='<div class="'+m+'">'+'<div class="stock-num">'+'<span class="stock-num-a">'+Number(j[2]).toFixed(2)+'<em class="arrow"></em>'+"</span>"+'<span class="stock-num-b">'+j[3]+"</span>"+'<span class="stock-num-c"></span>'+j[4]+"</div>"+"</div>"});$("#stock-sohuindex").html(i);var h=$(".stock-tag .cur").index();$(".stock-sohuindex .stock-tabcon").eq(h).show()}})}e();$(".stock-sohuindex-out .stock-tag li").on("mouseover",function(){var g=$(this).index();$(this).addClass("cur").siblings().removeClass("cur");$(".stock-sohuindex .stock-tabcon").eq(g).show().siblings().hide();$(".stock-img div").eq(g).show().siblings().hide()})}}}),(function(b,a){b.exports='<div class="stock-sohuindex-out">\r\n    <div class="stock-tag">\r\n        <ul>\r\n            <li class="cur"><a href="//q.stock.sohu.com/zs/000001/index.shtml" target="_blank">上证指数</a></li>\r\n            <li><a href="//q.stock.sohu.com/zs/399001/index.shtml" target="_blank">深圳成指</a></li>\r\n            <li class="end"><a href="//q.stock.sohu.com/zs/399006/index.shtml" target="_blank">创业板指</a></li>\r\n        </ul>\r\n    </div>\r\n    <div id="stock-sohuindex" class=\'stock-sohuindex\'>\r\n    </div>\r\n    <div class="stock-img">\r\n        <div class="stock-sh" style="display: block;">\r\n            <a href="//q.stock.sohu.com/zs/000001/index.shtml" target="_blank">\r\n                <img src="//d1.biz.itc.cn/q/zs/001/000001/index_3.png" />\r\n            </a>\r\n        </div>\r\n        <div class="stock-sz" style="display: none;">\r\n            <a href="//q.stock.sohu.com/zs/399001/index.shtml" target="_blank " />\r\n                <img src="//d1.biz.itc.cn/q/zs/001/399001/index_3.png" />\r\n            </a>\r\n        </div>\r\n        <div class="stock-zxb" style="display: none;">\r\n            <a href="//q.stock.sohu.com/zs/399006/index.shtml" target="_blank ">\r\n                <img src="//d1.biz.itc.cn/q/zs/006/399006/index_3.png" />\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <div class="menu menuC3">\r\n    <ul>\r\n        <li class="cur">上证指数</li>\r\n        <li>深圳成指</li>\r\n        <li class="end">看小指板</li>\r\n    </ul>\r\n</div>\r\n<div class=\'swiper\'></div> -->\r\n<!--tab为3类名换为menuC3 ,2为menuC2-->\r\n'})]);