!function(){function a(a){var b=a.target||a.srcElement,c=-1!==location.href.indexOf("itemlist/list_bought_items")||-1!==location.href.indexOf("itemlist/listBoughtItems.htm");if(!c)return"";for(;b&&"TBODY"!==b.nodeName;)b=b.parentNode;return b.getAttribute("data-status")}function b(a){Light._log("wwgw.light.openClient");var b=document.createElement("iframe");b.src=a,document.body.appendChild(b),setTimeout(function(){b.parentNode.removeChild(b)},500)}var c=KISSY;parseFloat(c.version)>=1.4&&c.config({modules:{ajax:{alias:["io"]}}}),c.use("dom,event,cookie,ajax,ua",function(c,d,e,f,g,h){function j(){return c.unparam(location.search.replace(/^\?/,"")).id}function k(a){try{(new Image).src=a}catch(b){}}d=d||c.DOM,e=e||c.Event,f=f||c.Cookie,g=g||c.IO||c.Ajax,h=h||c.UA;var l,m=!1,h=c.UA,n=window,o=document,p=(window.localStorage,encodeURIComponent),q=decodeURIComponent,r=c.now(),s=unescape((f.get("_nk_")||f.get("tracknick")||f.get("l")&&f.get("l").split("::")[0]||"").replace(/\\u/g,"%u")),t=(j(),"x"),u=n.navigator.userAgent,v=/Windows NT 6.2/g.test(u),w=h.ie||/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/.test(u),x=(u.indexOf("Edge")>-1,/tablet/i.test(u)),y=n.g_config||{},z="J_WangWang",A=0,B=function(){var a,b=location.hostname;return b.indexOf("tmall.com")>-1?(a="tmall.com",t="otherx"):b.indexOf("daily.tmall.net")>0?(a="daily.tmall.net",t="otherx"):a=b.indexOf("taobao.net")>0?"taobao.net":"taobao.com",a}(),C=/daily/i,D=!C.test(location.host),E=function(){return D?"taobao.com":"daily.taobao.net"}(),F="cntaobao",G=function(){return!!f.get("_l_g_")},H=6,I=6===(n.g_config||0).appId,J=location.protocol+"//amos.alicdn.com/getcid.aw?v=3&groupid=0&s=1&charset=utf-8",K=(location.protocol+"//amos.alicdn.com/mulstatus?beginnum=0&charset=utf-8&uids=",location.protocol+"//amos.alicdn.com/getRealCid.aw?fromurl="+(location.hostname+location.pathname)+"&t="+f.get("t")+"&toId="),L="//log.mmstat.com/ww?cache="+r;location.protocol+"//t.alicdn.com/t/gettime";ONLINE_MSG={SNS:"\u6211\u5728\u7ebf\uff0c\u548c\u6211\u804a\u804a\u5427~",DEFAULT:"\u70b9\u6b64\u53ef\u4ee5\u76f4\u63a5\u548c\u5356\u5bb6\u4ea4\u6d41\u9009\u597d\u7684\u5b9d\u8d1d\uff0c\u6216\u76f8\u4e92\u4ea4\u6d41\u7f51\u8d2d\u4f53\u9a8c\uff0c\u8fd8\u652f\u6301\u8bed\u97f3\u89c6\u9891\u5662\u3002"},BROWSER_LOG=["ie","firefox","chrome","safari","opera"],STATUS_MAP=[1,2,10,8,12,12,12],Light={__setIsOk:function(a){l=a},addonIsOK:function(a){var b=this;return location.href.indexOf("topen")>-1?(a&&a.call(null,!1),l=!1,!1):1==c.unparam(f.get("x")).c?(a&&a.call(null,!0),l=!0,!0):(c.isBoolean(l)?a&&a.call(null,l):this._checkWangWangInstalled(function(c){c||b._log("wwgw.light.notInstallClient"),l=c,a&&a.call(null,l)}),a?void 0:l)},data:{},lightedUsers:[],init:function(){var a=this;a._log("wwgw.light.pv"),d.addStyleSheet('.ww-light{overflow:hidden;}.ww-block{display:block;margin-top:3px;}.ww-inline{display:inline-block;vertical-align:text-bottom;}.ww-light a{background-image: url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif");background-image: -webkit-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x);background-image: -moz-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x);background-image: -o-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x);background-image: -ms-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x);text-decoration:none!important;width:20px;height:20px;zoom:1;}.ww-large a{width:67px;}a.ww-offline{background-position:0 -20px;}a.ww-mobile{background-position:0 -40px;}.ww-small .ww-online{background-position:-80px 0;}.ww-small .ww-offline{background-position:-80px -20px;}.ww-small .ww-mobile{background-position:-80px -40px;}.ww-static .ww-online{background-position:-110px 0;}.ww-static .ww-offline{background-position:-110px -20px;}.ww-static .ww-mobile{background-position:-110px -40px;}.ww-light a span{display:none;}'),a.light();for(var b=0,c=BROWSER_LOG.length;c>b;++b)if(h[BROWSER_LOG[b]]){A=BROWSER_LOG[b]+h[BROWSER_LOG[b]];break}},initStart:function(){var a=this;if(!I){var b=c.unparam(location.search.substring(1));("g_config"in n&&"appId"in n.g_config&&-1!=n.g_config.appId||"tstart"in b||"tdog"in b)&&c.ready(function(){var b=function(a,b){b=b||location.hostname;var c=".",d=b.split(c),e=d.length;return 2>=e?b:(a=a||1,a>e-2&&(a=e-2),d.slice(a).join(c))},c=o.getElementsByTagName("head")[0]||o.documentElement,d=(o.createElement("link"),o.createElement("script")),e=b(2),f=/daily/i,g=!f.test(location.host),h=g?"g.alicdn.com":"assets.daily.taobao.net/g",i=location.protocol+"//"+h+"/aliww/web.ww.im/0.2.1/scripts/adapter.js";"etao.com"!=e&&(d.src=i,c.insertBefore(d,c.firstChild),!a.addonIsOK()&&n.g_config.toolbar&&n.g_config.toolbar.delay&&(n.g_config.toolbar.delay=0))})}},light:function(a){function b(a){f(u[a],w[a],[],!0),B++,A>B&&b(++a)}function e(a){return a.length>t}function f(a,b,e,f){f&&g._log("wwgw.light.degradeCount"),c.each(a,function(a,c){if(0==d.query("a",a).length){var h=f?1:e[c];g._lightToken(a,b[c],h)}})}a=d.get(a)||o.body;var g=this,h=d.query("."+z,a),i=h.length;if(0!==i){var j,k,l,m=[],n=[];for(l=0;i>l;++l)k=g._getParamsFromData(h[l]),m.push(k),j=k.nick,n.push(p(j));F=m[0].from||F;var q,r,s=100,t=1800,u=[],v=[],w=[],x="",y=0,A=0;for(q=0;i>q;++q)(e(x+n[q])||q-A*s>=s||q===i-1)&&(r=q===i-1?i:q,v[A]=n.slice(y,r),u[A]=h.slice(y,r),w[A]=m.slice(y,r),x="",y=q,A++),x+=n[q]+";";var B=0;b(0)}},_lightToken:function(h,i,k){var l=this,m=d.create('<a href="javascript: void(0);" target="_blank"></a>'),o=i.from,r=i.encode?q(i.nick):i.nick,u=o+r,w=i.item,x=i.items,z=i.portal,A=i.extra,B=u;F=o,w&&(B+="-{"+w+"}"),l.data[B]={key:B,userName:r,userId:u,fromSite:o,status:STATUS_MAP[k],itemId:w,itemsId:x,portalId:z},h.className="ww-light ww-"+i.icon,m.className="ww-"+i.display,1===k?(d.addClass(m,"ww-online"),m.title=ONLINE_MSG.DEFAULT,y.appId&&4==y.appId&&(m.title=ONLINE_MSG.SNS),m.innerHTML="<span>\u65fa\u65fa\u5728\u7ebf</span>"):4===k||5===k?(d.addClass(m,"ww-mobile"),m.innerHTML="<span>\u624b\u673a\u5728\u7ebf</span>"):(d.addClass(m,"ww-offline"),m.innerHTML="<span>\u65fa\u65fa\u79bb\u7ebf</span>");var C="";if("object"==typeof A)for(var D in A)C+="&"+D+"="+A[D];m.href=J+"&uid="+encodeURIComponent(r)+"&site="+o+"&fromid="+o+s+C,e.on(m,"click",function(d){l._log("wwgw.1.37"),l._log("wwgw.light.click");var e=c.unparam(f.get(t)),h=l.data[B],i=unescape((f.get("_nk_")||f.get("tracknick")||f.get("l")&&f.get("l").split("::")[0]||"").replace(/\\u/g,"%u"));if((l.addonIsOK()||e&&1==e.e)&&d.preventDefault(),!l.addonIsOK()&&(d.preventDefault(),l._isOtherHost()))return void(v?b("aliim:sendmsg?"+l._paramUserInfo(h,null,m)):(b("aliim:sendmsg?"+l._paramUserInfo(h,null,m)),alert("\u5982\u679c\u60a8\u8fd8\u672a\u5b89\u88c5\u963f\u91cc\u65fa\u65fa,\u8bf7\u4e0b\u8f7d\u963f\u91cc\u65fa\u65fa!"),window.open("//www.taobao.com/wangwang")));var o="";if(!h.dispatched&&4>k&&-1==h.userId.indexOf(":")){try{o=0===location.href.indexOf("//trade.taobao.com/")||-1!==location.href.indexOf("//list.taobao.com/")||0===location.href.indexOf("//list.tmall.com/search_product.htm")||0===location.href.indexOf("//s.taobao.com/")?"":"&clientX="+d.clientX+"&clientY="+d.clientY,(0===location.href.indexOf("//detail.taobao.com/")||0===location.href.indexOf("//item.taobao.com/"))&&(o+="&itemId="+w||j());var r=a(d);r&&(o+="&orderStatus="+r)}catch(s){}g.getScript(K+p(h.userId)+"&charset=utf-8"+o+"&fromId="+F+p(i),function(){var a=q(n.realcid);a&&a!==h.userId&&(h.userName=a.substring(8),h.userId=a),h.dispatched=!0,l._openChatDialog(h,m)},"utf-8")}else l._openChatDialog(h,m)}),h.appendChild(m)},_directToTBLogin:function(a){var b=location,d=b.protocol+"//"+b.host+b.pathname,e=b.search,f=b.hash,g=b.href,h="wwlight",i="https://login."+E+"/member/login.jhtml?f=top";e=e?c.unparam(e.substring(1)):{},h in e&&delete e[h],a&&(e[h]=a),e=c.param(e),g=d+"?"+e+f,g=p(g),b.href=i+"&redirectURL="+g},_openTBLoginPopup:function(a){function b(a){d.css(a,"left",parseInt(d.viewportWidth()/2)-parseInt(p.offsetWidth/2)+"px"),d.css(a,"top",parseInt(d.viewportHeight()/2)-parseInt(p.offsetHeight/2)+(6===c.UA.ie?d.scrollTop():0)+"px")}var f,g=location,h=g.protocol+"//"+g.host+g.pathname,i=g.search,j=g.hash,k=g.href,l="wwlight",m=this,n=location.hostname.indexOf("taobao.com")>-1;i=i?c.unparam(i.substring(1)):{},l in i&&delete i[l],a&&(i[l]=a,m.isSearch()?(f=i.q,delete i.q,i[l]=a):i[l]=a),i=c.param(i),this.isSearch()&&f&&(i="q="+f+"&"+i),k=h+"?"+i+j;var g=location;d.addStyleSheet(".tstart-login{width:410px;height:300px;bottom:100px;left:200px;opacity:1;position:fixed;_position:absolute;z-index:100000000;background-color:#fff;padding:0;overflow:hidden;-moz-border-radius-bottomleft:5px;-moz-border-radius-bottomright:5px;-moz-border-radius-topleft:5px;-moz-border-radius-topright:5px;border:7px solid #BBB;}.tstart-login .hd{height:22px;line-height:22px;padding-left:8px;border-bottom:1px solid #D1D1D1;font-weight:bold;background-color:#fff;}.tstart-login .ft{background-color:#F5F5F5;}.tstart-login .ft .btn-close{color:#C9C9C9;font-family:Tahoma,sans;font-size:12px;font-weight:bold;position:absolute;right:8px;text-decoration:none;top:3px;}");var o='<div id="tstartLogin" class="tstart-login"><div class="hd"><h3></h3></div><div class="bd" style="padding: 0px; overflow: hidden;"><iframe width="410" height="270" frameborder="0" scrolling="no" id="frameContent" name="frameContent" ></iframe></div><div class="ft"><a class="btn-close" title="\u5173\u95ed\u6b64\u7a97\u53e3" href="javascript:void(0)">x</a></div></div>',p=d.get(".tstart-login");if(p)d.css(p,"display","block"),b(p);else{if(p=d.create(o),document.body.appendChild(p),b(p),e.on(d.get(".btn-close",p),"click",function(){d.css(p,"display","none")}),6===c.UA.ie?e.on(window,"scroll resize",function(){b(p)}):e.on(window,"scroll resize",function(){d.css(p,"left",parseInt(d.viewportWidth()/2)-parseInt(p.offsetWidth/2)+"px")}),n)var q="//www.taobao.com/go/act/share/loginsuccess.php";else var q="//www.daily.taobao.net/go/act/share/loginsuccess.php";var r="https://login."+E+"/member/login.jhtml?style=mini&full_redirect=false&redirect_url="+q,s=p.getElementsByTagName("iframe")[0];s.src=r,e.on(s,"load",function(){G()&&(location.href=k)})}},_isOtherHost:function(){var a=location.hostname,b=["tmall.net","tmall.com","taobao.com","daily.taobao.net"],c=b.length;for(i=0;i<c;i++)if(a.indexOf(b[i])>-1)return!1;return!0},isSearch:function(){var a,b=["search.taobao.com","sandbox.search.taobao.com","search8.taobao.com","search8.daily.taobao.net","s.taobao.com","list.mall.daily.taobao.net","list.mall.taobao.com","s8.taobao.com","list.tmall.com","list.daily.tmall.net"],c=b.length,d=location;for(a=0;c>a;a++)if(d.host.indexOf(b[a]>-1))return!0},_paramUserInfo:function(a,b,c){var d=a.userId||a.siteid+a.touid,e="";return b&&(d=p(d)),6!=H?"uid="+d.split("cntaobao")[1]+"&tositeid="+a.fromSite+"&status="+a.status+"&suid="+a.portalId:(c&&c.parentNode&&(e=c.parentNode.getAttribute("data-items")||""),"&touid="+d+"&siteid="+(a.fromSite||a.siteid)+"&status="+a.status+"&portalId="+(a.portalId||"")+"&gid="+(a.itemId||"")+"&itemsId="+e)},_openChatDialog:function(a,g){var i=this,j=1;if(i.userInfo=a,i.link=g,i.addonIsOK()){if(w)try{new ActiveXObject("AliIMX.WangWangX").ExecCmd("Aliim:sendmsg?"+i._paramUserInfo(a,!0,g))}catch(l){b("aliim:sendmsg?"+i._paramUserInfo(a,null,g))}else i._openChatDialogInUnIE(a,g);j=0}else if(m)if(h.firefox){var n=d.get("#J_WebWangWangPluginNotice");if(n)d.css(n,"display","block"),d.css("#J_WebWangWangPluginNoticeMask","display","block");else{var o='<div id="J_WebWangWangPluginNoticeMask" style="background-color:#000;opacity:.6;position:fixed;width:100%;height:100%;left:0;top:0;z-index:100000004"></div><div id="J_WebWangWangPluginNotice" class="webww-plugin-notice" style="background-color:#fff;position:fixed;width:400px;height:120px;z-index:100000005;text-align:center;margin-left:-200px;left:50%;top:50%;margin-top:-60px"><div class="webww-plugin-notice-content" style="padding:15px;line-height:80px">\u4eb2\uff0c\u60a8\u5f53\u524d\u6d4f\u89c8\u5668\u672a\u5f00\u542f\u65fa\u65fa\u63d2\u4ef6\uff0c<a href="//bangpai.taobao.com/group/thread/15625975-291119934.htm?spm=0.0.0.0.PBQheF" target="_blank">\u70b9\u6b64\u67e5\u770b\u5f00\u542f\u65fa\u65fa\u63d2\u4ef6\u6559\u7a0b</a></div><div class="webww-plugin-notice-footer" style="padding:10px;height:20px;background-color:#eaeaea;cursor:pointer">\u53d6\u6d88<div></div>';document.body.appendChild(d.create(o)),n=d.get("#J_WebWangWangPluginNotice"),e.on(n,"click",function(a){d.hasClass(a.target,"webww-plugin-notice-footer")&&(d.css(n,"display","none"),d.css("#J_WebWangWangPluginNoticeMask","display","none"))})}}else try{i._openChatDialogInUnIE(a,g)}catch(l){}else{if(!v)return void i._openWebWW();if(x)i._openDialogBySelectionDialog(a,g,2);else{var p=c.unparam(f.get(t)).c;p>1?i._openDialogBySelectionDialog(a,g,p):i._createSelectionDialog()}}k(L+"&uid="+s+"&tid="+a.userId+"&gid="+a.itemId+"&ver="+j+"&browse="+A+"&playform="+navigator.platform)},_openWebWW:function(a){var d=this,e=d.userInfo,g=c.unparam(f.get(t));G()?g&&1==g.e?(d._isOtherHost()?b("aliim:sendmsg?"+d._paramUserInfo(e,null,a)):window.TDog&&TDog.EventCenter&&(d._log("wwgw.light.webChat"),TDog.EventCenter.fire(TDog.EVENTS.CLICK_LIGHT_ICON,{userInfo:e})),k(L+"&uid="+s+"&tid="+e.userId+"&gid="+e.itemId+"&ver=2&browse="+A+"&playform="+navigator.platform)):window.TDog&&TDog.EventCenter?(d._log("wwgw.light.webChat"),TDog.EventCenter.fire(TDog.EVENTS.CLICK_LIGHT_ICON,{userInfo:e})):d._directToTBLogin(e.key):d._directToTBLogin(e.key)},_openChatDialogInUnIE:function(a,c){var d=this;if(d.plugin){var e="function"==typeof d.plugin.NPWWVersion;if(h.webkit&&e&&d.numberify(d.plugin.NPWWVersion())<1.005)b("aliim:sendmsg?"+d._paramUserInfo(a,null,c));else try{var f="aliim:sendmsg?"+d._paramUserInfo(a,!0,c);d.plugin.SendCommand(f,1)}catch(g){b("aliim:sendmsg?"+d._paramUserInfo(a,null,c))}}else b("aliim:sendmsg?"+d._paramUserInfo(a,null,c))},_createSelectionDialog:function(){var a=this,b=c.unparam(f.get(t));if(a.selectionDialog)h=a.selectionDialog,h.style.display="block";else{d.addStyleSheet("#J_Windows8_Selection_Dialog{display:block;width:440px;height:270px;position:fixed;top: 50%;left:50%;margin:-134px 0 0 -220px;padding:0;z-index:100000001;}#J_Windows8_Selection_Dialog_Bg{width:100%;height:100%;background:#000;opacity:0.2;filter:alpha(opacity=20);position:fixed;left:0;top:0;z-index:100000000;}#J_Windows8_Selection_Dialog .win8-dialog-bg{display:block;width: 440px;height:270px;background:#000;opacity:0.2;filter:alpha(opacity=20);position:absolute;top:0;left:0;padding:0;margin:0;}#J_Windows8_Selection_Dialog .win8-dialog-con{display:block;margin:5px;width:390px;height:220px;background:#fff;position:absolute;top:0;left:0;font:14px/1.5 Microsoft YaHei;padding:20px;}#J_Windows8_Selection_Dialog h4{font-size:18px;font-weight:bold;padding:0;margin:0;color:#000;}#J_Windows8_Selection_Dialog ul{padding:15px 0 30px 20px;margin:10px 0 0 0;}#J_Windows8_Selection_Dialog li{padding:0 0 0 40px;margin:0;list-style:none;background:url('//gtd.alicdn.com/tps/i2/T1pEcjXdRhXXcCnGHx-30-300.png') no-repeat 0 2px;height:30px;line-height:30px;font-size: 16px;color: #000;cursor:pointer;}#J_Windows8_Selection_Dialog li.win8-slt{background-position: 0 -45px;}#J_Windows8_Selection_Dialog li.win8-tip{background:none;cursor:default;font-size:12px;color:#666;line-height:16px;height:16px;margin-bottom:5px;}#J_Windows8_Selection_Dialog .win8-btn{font-size:14px;padding:30px 0 0 0;border-top:1px solid #ddd;}#J_Windows8_Selection_Dialog .win8-cb{display:block;float:left;margin:5px 50px 0 0;padding:0;}#J_Windows8_Selection_Dialog .win8-cb input{vertical-align:-1px;margin-right:5px;}#J_Windows8_Selection_Dialog .win8-btn a{display: block;float:left;width:96px;height:28px;background:#fff;border:2px solid #ddd;color:#737373;text-decoration:none;text-align:center;line-height:28px;font-size:16px;margin-right:15px;overflow:hidden;}#J_Windows8_Selection_Dialog .win8-btn a:hover{background:#00ade8;color:#fff;text-decoration:none;}#J_Windows8_Btn_Close{display:block;width:40px;height:40px;background:url('//gtd.alicdn.com/tps/i2/T1pEcjXdRhXXcCnGHx-30-300.png') no-repeat 8px -113px;position:absolute;top:0;right:0;text-indent:-9999px;}#J_Windows8_Btn_Close:hover{background-position:8px -188px}");var g='<div><div id="J_Windows8_Selection_Dialog_Bg" class="win8-bg"></div><div id="J_Windows8_Selection_Dialog"><div class="win8-dialog-bg"></div><div class="win8-dialog-con"><h4>\u8bf7\u9009\u62e9\u9700\u8981\u6253\u5f00\u7684\u65fa\u65fa\uff1a</h4><ul><li class="win8-slt J_Windows8_selection_item" data-value="2">\u963f\u91cc\u65fa\u65fa for Windows 8</li><li class="win8-tip">\u5982\u679c\u672a\u5b89\u88c5\uff0c\u8bf7\u5148\u5728\u5e94\u7528\u5546\u5e97\u4e0b\u8f7d\u5b89\u88c5</li><li class="J_Windows8_selection_item" data-value="3">\u963f\u91cc\u65fa\u65fa\u7f51\u9875\u7248</li></ul><div class="win8-btn"><label class="win8-cb"><input type="checkbox" id="J_Window8_remember" />\u8bb0\u4f4f\u6211\u7684\u9009\u62e9</label><a href="javascript:;" title="\u786e\u5b9a" id="J_Windows8_Btn_Yes">\u786e\u5b9a</a><a href="javascript:;" title="\u53d6\u6d88" id="J_Windows8_Btn_No">\u53d6\u6d88</a></div><a href="javascript:;" title="\u5173\u95ed" id="J_Windows8_Btn_Close">\u5173\u95ed</a></div></div></div>',h=d.create(g);a.selectionDialog=h,o.body.appendChild(h),e.on(h,"click",function(e){var g=e.target;if("J_Windows8_Btn_Yes"===g.id){var i=d.attr(d.get(".win8-slt"),"data-value");d.get("#J_Window8_remember").checked?(b.c=parseInt(i),f.set(t,c.param(b),365,B,"/"),a._destorySelectionDialog()):h.style.display="none",a._openDialogBySelectionDialog(a.userInfo,a.link,i)}else"J_Windows8_Btn_No"===g.id||"J_Windows8_Btn_Close"===g.id?h.style.display="none":d.hasClass(g,"J_Windows8_selection_item")&&!d.hasClass("win8-slt")&&(d.addClass(g,"win8-slt"),d.removeClass(d.siblings(g),"win8-slt"))})}},_destorySelectionDialog:function(){var a=this;d.remove(a.selectionDialog),e.remove(a.selectionDialog,"click"),a.selectionDialog=null},_openDialogBySelectionDialog:function(a,c,d){var e=this;2==d?b("aliim:sendmsg?"+e._paramUserInfo(a,null,c)):3==d&&e._openWebWW(c)},_checkWangWangInstalled:function(a){var b=this,e=!1,g=(c.unparam(f.get(t)),navigator.platform.indexOf("Mac")>-1);if(this._log("wwgw.1.38"),location.href.indexOf("topen")>-1)return e=!1,void(a&&a.call(null,e));if(g)return e=!0,void(a&&a.call(null,e));if(!e&&w)return e=b._checkWangWangVersion(),void(a&&a.call(null,e));var h=navigator.mimeTypes["application/ww-plugin"];if(h){var i=o.createElement("embed");if(i.setAttribute("type","application/ww-plugin"),d.css(i,"visibility","hidden"),d.css(i,"width",0),d.css(i,"height",0),o.body.appendChild(i),"function"==typeof i.NPWWVersion){var j=b.numberify(i.NPWWVersion());j>=1.003&&(e=!0)}else m=!0;return b.plugin=i,void(a&&a.call(null,e))}return this.localServer(function(c){c?a&&a.call(null,c):b.localServer(function(b){a&&a.call(null,b)},"https:"==location.protocol?"4813":"4812")}),e&&this._log("wwgw.1.39"),e},localServer:function(a,b){var c=this;if(c._log("wwgw.light.localServer"),this._log("wwgw.1.40"),a)var d=setTimeout(function(){a.call(null,!1)},1500);b=b||("https:"==location.protocol?"4013":"4012"),g({dataType:"jsonp",url:location.protocol+"//localhost.wwbizsrv.alibaba.com:"+b,success:function(b){c._log("wwgw.1.41"),d&&clearTimeout(d),a&&a.call(null,!0)}})},numberify:function(a){var b=0;return parseFloat(a.replace(/\./g,function(){return 0===b++?".":""}))},_checkWangWangVersion:function(){var a,b=!0;c.unparam(f.get(t));try{a=new ActiveXObject("aliimx.wangwangx")}catch(d){try{a=new ActiveXObject("WangWangX.WangWangObj"),H=5}catch(d){b=!1}}finally{a=null}return b},_getParamsFromData:function(a){var b=d.attr(a,"data-encode")||!1,c=d.attr(a,"data-nick")||"";b&&(c=q(c));var e,f={nick:c,item:d.attr(a,"data-item")||(n.g_config||{}).itemId||"",items:d.attr(a,"data-items")||"",display:d.attr(a,"data-display")||"inline",icon:d.attr(a,"data-icon")||"large",from:d.attr(a,"data-from")||"cntaobao",portal:d.attr(a,"data-portal")||"",fromId:d.attr(a,"data-portal")||"",encode:p},g=d.attr(a,"data-extra");try{e=JSON.parse(decodeURIComponent(g))}catch(h){}return e&&(f.extra=e),f},_log:function(a,b){k("//gm.mmstat.com/"+a+"?cache="+Math.floor(-8888888*Math.random()+9999999)+"&wwnick="+F+s)}},window.Light=Light,c.ready(function(){Light.addonIsOK(function(){Light.initStart()}),Light.init()})})}();