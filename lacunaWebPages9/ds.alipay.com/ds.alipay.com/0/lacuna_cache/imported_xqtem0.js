! function(e) {
  function t(n) {
    if (a[n]) return a[n].exports;
    var r = a[n] = {
      exports: {},
      id: n,
      loaded: !1
    };
    return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
  }
  var n = window.webpackJsonp;
  window.webpackJsonp = function(c, o) {
    for (var i, p, s = 0, f = []; s < c.length; s++) p = c[s], r[p] && f.push.apply(f, r[p]), r[p] = 0;
    for (i in o)
      if (Object.prototype.hasOwnProperty.call(o, i)) {
        var l = o[i];
        switch (typeof l) {
          case "object":
            e[i] = function(t) {
              var n = t.slice(1),
                a = t[0];
              return function(t, r, c) {
                e[a].apply(this, [t, r, c].concat(n))
              }
            }(l);
            break;
          case "function":
            e[i] = l;
            break;
          default:
            e[i] = e[l]
        }
      } for (n && n(c, o); f.length;) f.shift().call(null, t);
    if (o[0]) return a[0] = 0, t(0)
  };
  var a = {},
    r = {
      0: 0
    };
  t.e = function(e, n) {
    if (0 === r[e]) return n.call(null, t);
    if (void 0 !== r[e]) r[e].push(n);
    else {
      r[e] = [n];
      var a = document.getElementsByTagName("head")[0],
        c = document.createElement("script");
      c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.src = t.p + "" + ({
        1: "index"
      } [e] || e) + "-" + {
        1: "55cafcdf69dc73da4a2e"
      } [e] + ".js", a.appendChild(c)
    }
  }, t.m = e, t.c = a, t.p = ""
}(function(e) {
  for (var t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
      case "function":
        break;
      case "object":
        e[t] = function(t) {
          var n = t.slice(1),
            a = e[t[0]];
          return function(e, t, r) {
            a.apply(this, [e, t, r].concat(n))
          }
        }(e[t]);
        break;
      default:
        e[t] = e[e[t]]
    }
  return e
}([]));
webpackJsonp([1, 0], [function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var a = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
      }
      return e
    },
    r = o(1),
    i = n(r),
    l = o(2),
    u = n(l),
    d = o(17),
    s = n(d),
    c = o(10),
    f = n(c);
  o(19);
  var p = o(3),
    g = window.Zepto,
    m = !1;
  console.log(p);
  var h = function() {
      window.Tracker && (window.Tracker.mPageState = s.default.getHash("from")), window.Tracker && window.Tracker.start(), window.onerror = function(e) {
        u.default.log("jsError:JS\u9519\u8bef", {
          msg: JSON.stringify(e)
        }), console.log("ERROR :", JSON.stringify(e), e && e.originalEvent && e.originalEvent.error)
      }
    },
    w = function() {
      if (m) return void i.default.log("alreadyOpen");
      if (x) {
        i.default.log("\u652f\u4ed8\u5b9d\u5185"), u.default.log("isInAlipay:\u652f\u4ed8\u5b9d\u5185", {
          url: location.href
        }), document.addEventListener("pageResume", function() {
          setTimeout(function() {
            window.AlipayJSBridge && AlipayJSBridge.call("closeWebview")
          }, 1e3)
        }, !1);
        var e = s.default.getAllParams(k),
          t = (e.appId || e.saId || "").replace(/\s+/, "");
        i.default.log("appId", t), i.default.log("\u53c2\u6570", e), t ? u.default.onJSBridgeReady(function() {
          if (u.default.log("jsapiReady"), i.default.log("jsapi ready"), s.default.canRunNewCode()) {
            u.default.log("canRunNewCode");
            var o = "20000067" === t ? {
                appClearTop: !1,
                startMultApp: "YES"
              } : {},
              n = s.default.getAllParams(k),
              r = AlipayJSBridge.startupParams || {},
              l = {
                appId: t,
                param: a({}, o, n, {
                  fromLanding: !0,
                  appStartUpType: r.app_startup_type,
                  refferId: r.ap_framework_sceneId || "landing"
                })
              };
            s.default.getSceneStackInfo(function(o) {
              if (o && 0 === o.currentIndex) {
                u.default.log("currentIndex0");
                var n = !u.default.isNewVersion(null, "10.1.22") && "10000007" === t && !!e.qrcode && u.default.browser.ios;
                n || (l.closeCurrentApp = !0)
              } else u.default.log("sceneStackCurrentIndexOther");
              i.default.log("final", l), setTimeout(function() {
                window.Tracert.click("c24334.d45356"), AlipayJSBridge.call("startApp", l)
              }, 600)
            })
          } else u.default.log("schemeOld:\u7070\u5ea6\u524d"), i.default.log("scheme old", k), setTimeout(function() {
            window.Tracert.click("c24334.d45356"), p.gotoPage(k, _)
          }, 600)
        }) : (u.default.log("urlOpen:url\u65b9\u5f0f\u6253\u5f00"), i.default.log("url open", k), setTimeout(function() {
          window.Tracert.click("c24334.d45356"), location.replace(k)
        }, 600))
      } else {
        i.default.log("\u652f\u4ed8\u5b9d\u5916"), u.default.log("isOutAlipay:\u652f\u4ed8\u5b9d\u5916", {
          url: location.href
        });
        var o = s.default.getAllParams(k),
          n = (o.appId || o.saId || "").replace(/\s+/, "");
        i.default.log("appId", n), i.default.log("\u53c2\u6570", o), g(".open").on("click", function() {
          window.Tracert.click("c24334.d48852"), u.default.log("openButtonClick:\u6253\u5f00\u652f\u4ed8\u5b9d\u6309\u94ae\u70b9\u51fb"), p.gotoPage(k, _)
        }), window.Tracert.click("c24334.d45356"), p.gotoPage(k, _)
      }
      m = !0
    },
    v = function() {
      var e = {
        "^zh-(hk|tw)$": {
          open: "\u6253\u958b\u652f\u4ed8\u5bf6",
          download: "\u4e0b\u8f09\u652f\u4ed8\u5bf6"
        },
        "^en-": {
          open: "Open Alipay",
          download: "Download Alipay"
        }
      };
      i.default.log("navigator.language", navigator.language);
      for (var t = 0; t < Object.keys(e).length; t++)
        if (new RegExp(Object.keys(e)[t], "i").test(navigator.language)) {
          var o = e[Object.keys(e)[t]];
          g(".open")[0].innerText = o.open, g(".download")[0].innerText = o.download;
          break
        } document.body.className = x ? "inside" : "outside"
    },
    b = function() {
      return i.default.log("ua", y), i.default.log("scheme", k), v(), (0, f.default)() ? void w() : void i.default.log("flow hang up")
    },
    y = window.navigator.userAgent,
    x = /AlipayClient/.test(y) && !/KoubeiClient/.test(y),
    _ = "com.eg.android.AlipayGphone",
    S = s.default.getScheme(location.href),
    k = S.scheme;
  h(), b()
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = n(a),
    i = o(16);
  n(i);
  o(18);
  var l = {},
    u = (Zepto, "true" === r.default.getHash("alidebug"));
  l.log = function() {
    var e;
    u && (e = console).log.apply(e, arguments)
  }, window.debug = l, t.default = l, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = o(1),
    i = n(r),
    l = {};
  l.getHash = function(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
      o = window.location.search.substr(1).match(t);
    return null !== o ? decodeURIComponent(o[2]) : null
  }, l.dateFormat = function(e, t) {
    e = e ? parseInt(e) : (new Date).getTime(), t = t || "yyyy-MM-dd hh:mm:ss";
    var o = new Date(e),
      n = {
        "M+": o.getMonth() + 1,
        "d+": o.getDate(),
        "h+": o.getHours(),
        "m+": o.getMinutes(),
        "s+": o.getSeconds(),
        "q+": Math.floor((o.getMonth() + 3) / 3),
        S: o.getMilliseconds()
      };
    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var a in n) new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? n[a] : ("00" + n[a]).substr(("" + n[a]).length)));
    return t
  }, l.browser = function() {
    var e = navigator.userAgent,
      t = /^CtClient;[^;]+;[^;]+;[^;]+;[^;]+$/.test(e),
      o = /^jym_mobile/.test(e);
    return {
      mobile: !!e.match(/AppleWebKit.*Mobile.*/) || !!e.match(/AppleWebKit/) || t || o,
      ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || t && /iOS/i.test(e),
      android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1
    }
  }(), l.clone = function(e) {
    return "object" !== ("undefined" == typeof e ? "undefined" : a(e)) ? void console.log("\u975e\u5bf9\u8c61") : JSON.parse(JSON.stringify(e))
  }, l.scroll = function(e) {
    var t = $(window).height(),
      o = $(window).scrollTop(),
      n = $(document).height(),
      a = void 0;
    $(window).on("scroll", function() {
      clearTimeout(a);
      var r = function() {
        console.log(t, o, n - 40, t + o > n - 40), t + o > n - 40 && e && e.complete && e.complete()
      };
      a = setTimeout(r, 30)
    })
  }, l.imgLoader = function(e) {
    var t = 0,
      o = [],
      n = e.imgArr || [],
      a = e.complete;
    return n.length ? void n.map(function(e) {
      var r = new Image;
      r.src = e, o.push(r), r.onload = function() {
        r.complete === !0 && (t++, t === n.length && (console.log("load successs"), a && a(o)))
      }
    }) : void(a && a(o))
  }, l.outUrl = function(e) {
    var t = "alipays://platformapi/startapp?appId=20000067&url=" + encodeURIComponent(e);
    return "https://ds.alipay.com/?scheme=" + encodeURIComponent(t)
  }, l.log = function(e, t) {
    try {
      window.Tracker && window.Tracker.click(e, t)
    } catch (e) {
      console.log("BizLog error")
    }
  }, l.onJSBridgeReady = function(e) {
    window.AlipayJSBridge && window.AlipayJSBridge.call ? e && e() : document.addEventListener("AlipayJSBridgeReady", function() {
      e && e()
    }, !1)
  }, l.isNewVersion = function(e, t) {
    e = e || navigator.userAgent, t = t || "10.1.22";
    var o = e,
      n = function(e) {
        e = e.toString();
        for (var t = e.split("."), o = ["", "0", "00", "000", "0000"], n = o.reverse(), a = 0; a < t.length; a++) {
          var r = t[a].length;
          t[a] = n[r] + t[a]
        }
        var i = t.join("");
        return i
      };
    try {
      if (/AliApp\(AP/.test(o)) {
        var a = o.split("AliApp(AP/")[1];
        if (a.indexOf(") ").length === -1) return i.default.log("version not found"), !1;
        var r = a.split(") ")[0];
        if (r.indexOf(".").length === -1) return i.default.log("version get error"), !1;
        var l = r.match(/.*\..*\./);
        if (!l[0]) return i.default.log("not match version"), !1;
        var u = l[0].substring(0, l[0].length - 1);
        i.default.log("currentVersion", u);
        var d = n(u),
          s = n(t);
        return d >= s ? (i.default.log(u + ">=" + t), !0) : (i.default.log(u + "<" + t), !1)
      }
      return i.default.log("can not find AliApp(AP"), !1
    } catch (e) {
      return !1
    }
  }, l.loadJS = function(e, t) {
    var o = document.createElement("script"),
      n = document.getElementsByTagName("head")[0],
      a = void 0;
    o.src = e, "function" == typeof t && (o.onload = o.onreadystatechange = function() {
      a || o.readyState && !/loaded|complete/.test(o.readyState) || (o.onload = o.onreadystatechange = null, a = !0, t && t())
    }), n.appendChild(o)
  }, t.default = l, e.exports = t.default
}, function(e, t, o) {
  ! function(t, o) {
    e.exports = o()
  }(this, function() {
    return function(e) {
      function t(n) {
        if (o[n]) return o[n].exports;
        var a = o[n] = {
          exports: {},
          id: n,
          loaded: !1
        };
        return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
      }
      var o = {};
      return t.m = e, t.c = o, t.p = "", t(0)
    }([function(e, t, o) {
      "use strict";

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function a(e, t) {
        for (var o = e.split("."), n = t.split("."), a = 0; a < o.length || a < n.length; a += 1) {
          var r = parseInt(o[a], 10) || 0,
            i = parseInt(n[a], 10) || 0;
          if (r < i) return -1;
          if (r > i) return 1
        }
        return 0
      }

      function r(e) {
        c.default.log("in iframe func", e), _ || (c.default.log("create iframe"), _ = x.createElement("iframe"), _.id = "callapp_iframe_" + Date.now(), _.frameborder = "0", _.style.cssText = "display:none;border:0;width:0;height:0;", x.body.appendChild(_)), _.src = e
      }

      function i(e) {
        var t = x.createElement("a");
        t.setAttribute("href", e), t.style.display = "none", x.body.appendChild(t);
        var o = x.createEvent("HTMLEvents");
        o.initEvent("click", !1, !1), t.dispatchEvent(o)
      }

      function l(e) {
        return /^(http|https)\:\/\//.test(e)
      }
      var u = o(1),
        d = n(u),
        s = o(2),
        c = n(s),
        f = {},
        p = "";
      p = d.default.getHash("alidebug") && d.default.getHash("ua") ? d.default.getHash("ua") : window.navigator.userAgent;
      var g = !1,
        m = !1,
        h = "",
        w = p.match(/Android[\s\/]([\d\.]+)/);
      w ? (g = !0, h = w[1]) : p.match(/(iPhone|iPad|iPod)/) && (m = !0, w = p.match(/OS ([\d_\.]+) like Mac OS X/), w && (h = w[1].split("_").join(".")));
      var v = !1,
        b = !1,
        y = !1;
      p.match(/(?:Chrome|CriOS)\/([\d\.]+)/) ? (v = !0, p.match(/Version\/[\d+\.]+\s*Chrome/) && (y = !0)) : p.match(/iPhone|iPad|iPod/) && (p.match(/Safari/) && p.match(/Version\/([\d\.]+)/) ? b = !0 : p.match(/OS ([\d_\.]+) like Mac OS X/) && (y = !0));
      var x = window.document,
        _ = void 0;
      f.gotoPage = function(e, t, o) {
        var n = e;
        c.default.log("targetUrl", e);
        var u = g && v && !y,
          d = g && !!p.match(/samsung/i) && a(h, "4.3") >= 0 && a(h, "4.5") < 0,
          s = m && a(h, "9.0") >= 0 && b;
        if (c.default.log("isOriginalChrome", u), c.default.log("fixUgly", d), c.default.log("ios9SafariFix", s), c.default.log("forceIntent", o), u || o) {
          var f = n.substring(0, n.indexOf("://")),
            w = "#Intent;scheme=" + f + ";package=" + t + ";end";
          n = n.replace(/.*?\:\/\//, "intent://"), n += w, c.default.log("Intent", n)
        }
        if (s) {
          if (l(n)) return window.Tracker && window.Tracker.click && window.Tracker.click("not_schema"), void c.default.log("not schema");
          setTimeout(function() {
            i(n)
          }, 100)
        } else if (0 === n.indexOf("intent:")) c.default.log("jump intent"), setTimeout(function() {
          window.location.href = n
        }, 100);
        else {
          var x = /^(http(s)?\:|javascript\:|vbscript\:|file\:|data\:|sms\:|smsto\:|tel\:|mailto\:|aliim\:|dingtalk\:|weixin\:)/;
          x.test(n.toLocaleLowerCase()) ? c.default.log("schema is url") : (c.default.log("call in iframe"), r(n))
        }
      }, e.exports = f
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        n = {};
      n.getHash = function(e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
          o = window.location.search.substr(1).match(t);
        return null !== o ? unescape(o[2]) : null
      }, n.dateFormat = function(e, t) {
        e = e ? parseInt(e) : (new Date).getTime(), t = t || "yyyy-MM-dd hh:mm:ss";
        var o = new Date(e),
          n = {
            "M+": o.getMonth() + 1,
            "d+": o.getDate(),
            "h+": o.getHours(),
            "m+": o.getMinutes(),
            "s+": o.getSeconds(),
            "q+": Math.floor((o.getMonth() + 3) / 3),
            S: o.getMilliseconds()
          };
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var a in n) new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? n[a] : ("00" + n[a]).substr(("" + n[a]).length)));
        return t
      }, n.browser = function() {
        var e = navigator.userAgent;
        return navigator.appVersion, {
          mobile: !!e.match(/AppleWebKit.*Mobile.*/) || !!e.match(/AppleWebKit/),
          ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
          android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1
        }
      }(), n.clone = function(e) {
        return "object" !== ("undefined" == typeof e ? "undefined" : o(e)) ? void console.log("\u975e\u5bf9\u8c61") : JSON.parse(JSON.stringify(e))
      }, t.default = n, e.exports = t.default
    }, function(e, t, o) {
      "use strict";

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = o(1),
        r = n(a),
        i = o(3);
      n(i), o(4);
      var l = {};
      l.log = function() {
        var e, t = "true" === r.default.getHash("alidebug");
        t && (e = console).log.apply(e, arguments)
      }, window.debug = l, t.default = l, e.exports = t.default
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = {
        pop: function() {
          return '\n      <div id="aliDebugPop">\n        <div id="aliDebugPopbox">\n          <ul id="aliDebugPopboxContent">\n          </ul>\n        </div>\n        <button id="aliDebugPopboxClear" class="ali-debug-button">\u6e05\u5c4f</button>\n        <button id="aliDebugPopboxClose" class="ali-debug-button">\u5173\u95ed</button>\n      </div>\n    '
        },
        popItem: function(e) {
          return "\n      <li>" + e + "</li>\n    "
        }
      };
      t.default = o, e.exports = t.default
    }, function(e, t, o) {
      var n = o(5);
      "string" == typeof n && (n = [
        [e.id, n, ""]
      ]);
      var a, r = {};
      r.transform = a, o(7)(n, r), n.locals && (e.exports = n.locals)
    }, function(e, t, o) {
      t = e.exports = o(6)(void 0), t.push([e.id, "#aliDebugPop{position:fixed;right:0;bottom:0;width:4.5rem;height:7rem}#aliDebugPop #aliDebugPopbox{position:relative;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;border-radius:.1rem;background:rgba(0,0,0,.5);color:#fff}#aliDebugPop #aliDebugPopbox ul{width:100%;height:100%}#aliDebugPop #aliDebugPopbox ul li{line-height:.3rem;border-bottom:1px dotted hsla(0,0%,100%,.6);background:rgba(0,0,0,.5);color:hsla(0,0%,100%,.9);text-align:left;padding:.1rem .05rem;word-break:break-all}#aliDebugPop #aliDebugPopbox ul li:last-child{border-bottom:none}#aliDebugPop .ali-debug-button{position:absolute;z-index:1000;right:0;height:.4rem;line-height:.4rem;width:.8rem;top:-.43rem;color:hsla(0,0%,100%,.8);border-radius:.1rem;background:transparent;border:1px solid rgba(0,0,0,.5);background:rgba(0,0,0,.4);cursor:pointer}#aliDebugPop .ali-debug-button:active{color:hsla(0,0%,100%,.6);background:rgba(0,0,0,.6)}#aliDebugPop #aliDebugPopboxClear{right:.9rem}", ""])
    }, function(e, t) {
      function o(e, t) {
        var o = e[1] || "",
          a = e[3];
        if (!a) return o;
        if (t && "function" == typeof btoa) {
          var r = n(a),
            i = a.sources.map(function(e) {
              return "/*# sourceURL=" + a.sourceRoot + e + " */"
            });
          return [o].concat(i).concat([r]).join("\n")
        }
        return [o].join("\n")
      }

      function n(e) {
        var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
          o = "sourceMappingURL=data:application/json;charset=utf-8;base64," + t;
        return "/*# " + o + " */"
      }
      e.exports = function(e) {
        var t = [];
        return t.toString = function() {
          return this.map(function(t) {
            var n = o(t, e);
            return t[2] ? "@media " + t[2] + "{" + n + "}" : n
          }).join("")
        }, t.i = function(e, o) {
          "string" == typeof e && (e = [
            [null, e, ""]
          ]);
          for (var n = {}, a = 0; a < this.length; a++) {
            var r = this[a][0];
            "number" == typeof r && (n[r] = !0)
          }
          for (a = 0; a < e.length; a++) {
            var i = e[a];
            "number" == typeof i[0] && n[i[0]] || (o && !i[2] ? i[2] = o : o && (i[2] = "(" + i[2] + ") and (" + o + ")"), t.push(i))
          }
        }, t
      }
    }, function(e, t, o) {
      function n(e, t) {
        for (var o = 0; o < e.length; o++) {
          var n = e[o],
            a = g[n.id];
          if (a) {
            a.refs++;
            for (var r = 0; r < a.parts.length; r++) a.parts[r](n.parts[r]);
            for (; r < n.parts.length; r++) a.parts.push(s(n.parts[r], t))
          } else {
            for (var i = [], r = 0; r < n.parts.length; r++) i.push(s(n.parts[r], t));
            g[n.id] = {
              id: n.id,
              refs: 1,
              parts: i
            }
          }
        }
      }

      function a(e, t) {
        for (var o = [], n = {}, a = 0; a < e.length; a++) {
          var r = e[a],
            i = t.base ? r[0] + t.base : r[0],
            l = r[1],
            u = r[2],
            d = r[3],
            s = {
              css: l,
              media: u,
              sourceMap: d
            };
          n[i] ? n[i].parts.push(s) : o.push(n[i] = {
            id: i,
            parts: [s]
          })
        }
        return o
      }

      function r(e, t) {
        var o = w(e.insertInto);
        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var n = y[y.length - 1];
        if ("top" === e.insertAt) n ? n.nextSibling ? o.insertBefore(t, n.nextSibling) : o.appendChild(t) : o.insertBefore(t, o.firstChild), y.push(t);
        else {
          if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          o.appendChild(t)
        }
      }

      function i(e) {
        e.parentNode.removeChild(e);
        var t = y.indexOf(e);
        t >= 0 && y.splice(t, 1)
      }

      function l(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", d(t, e.attrs), r(e, t), t
      }

      function u(e) {
        var t = document.createElement("link");
        return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", d(t, e.attrs), r(e, t), t
      }

      function d(e, t) {
        Object.keys(t).forEach(function(o) {
          e.setAttribute(o, t[o])
        })
      }

      function s(e, t) {
        var o, n, a, r;
        if (t.transform && e.css) {
          if (r = t.transform(e.css), !r) return function() {};
          e.css = r
        }
        if (t.singleton) {
          var d = b++;
          o = v || (v = l(t)), n = c.bind(null, o, d, !1), a = c.bind(null, o, d, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = u(t), n = p.bind(null, o, t), a = function() {
          i(o), o.href && URL.revokeObjectURL(o.href)
        }) : (o = l(t), n = f.bind(null, o), a = function() {
          i(o)
        });
        return n(e),
          function(t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
              n(e = t)
            } else a()
          }
      }

      function c(e, t, o, n) {
        var a = o ? "" : n.css;
        if (e.styleSheet) e.styleSheet.cssText = _(t, a);
        else {
          var r = document.createTextNode(a),
            i = e.childNodes;
          i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(r, i[t]) : e.appendChild(r)
        }
      }

      function f(e, t) {
        var o = t.css,
          n = t.media;
        if (n && e.setAttribute("media", n), e.styleSheet) e.styleSheet.cssText = o;
        else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(o))
        }
      }

      function p(e, t, o) {
        var n = o.css,
          a = o.sourceMap,
          r = void 0 === t.convertToAbsoluteUrls && a;
        (t.convertToAbsoluteUrls || r) && (n = x(n)), a && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */");
        var i = new Blob([n], {
            type: "text/css"
          }),
          l = e.href;
        e.href = URL.createObjectURL(i), l && URL.revokeObjectURL(l)
      }
      var g = {},
        m = function(e) {
          var t;
          return function() {
            return "undefined" == typeof t && (t = e.apply(this, arguments)), t
          }
        },
        h = m(function() {
          return window && document && document.all && !window.atob
        }),
        w = function(e) {
          var t = {};
          return function(o) {
            return "undefined" == typeof t[o] && (t[o] = e.call(this, o)), t[o]
          }
        }(function(e) {
          return document.querySelector(e)
        }),
        v = null,
        b = 0,
        y = [],
        x = o(8);
      e.exports = function(e, t) {
        t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, "undefined" == typeof t.singleton && (t.singleton = h()), "undefined" == typeof t.insertInto && (t.insertInto = "head"), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
        var o = a(e, t);
        return n(o, t),
          function(e) {
            for (var r = [], i = 0; i < o.length; i++) {
              var l = o[i],
                u = g[l.id];
              u.refs--, r.push(u)
            }
            if (e) {
              var d = a(e, t);
              n(d, t)
            }
            for (var i = 0; i < r.length; i++) {
              var u = r[i];
              if (0 === u.refs) {
                for (var s = 0; s < u.parts.length; s++) u.parts[s]();
                delete g[u.id]
              }
            }
          }
      };
      var _ = function() {
        var e = [];
        return function(t, o) {
          return e[t] = o, e.filter(Boolean).join("\n")
        }
      }()
    }, function(e, t) {
      e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var o = t.protocol + "//" + t.host,
          n = o + t.pathname.replace(/\/[^\/]*$/, "/"),
          a = e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var a = t.trim().replace(/^"(.*)"$/, function(e, t) {
              return t
            }).replace(/^'(.*)'$/, function(e, t) {
              return t
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a)) return e;
            var r;
            return r = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? o + a : n + a.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")"
          });
        return a
      }
    }])
  })
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = (n(a), o(1)),
    i = n(r),
    l = window.Zepto,
    u = !1,
    d = function() {
      if (i.default.log("\u6536\u94f6\u53f0"), !u) return l("body").append('<div id="h5cashierBack" class="h5cashier-header">\n      <h1>\u652f\u4ed8\u5b9d</h1>\n      <i class="arrow-back">\u8fd4\u56de</i>\n    </div>'), l("#h5cashierBack").on("click", function(e, t) {
        e.preventDefault(), "sdk" === window.urlParams.backTarget ? (i.default.log("\u9000\u51fasdk\u6253\u5f00\u7684\u9875\u9762"), location.href = "sdklite://h5quit") : window.history.back()
      }, !1), u = !0, !0
    };
  t.default = d, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = (n(a), o(1)),
    i = (n(r), o(4)),
    l = n(i),
    u = o(7),
    d = n(u),
    s = o(6),
    c = n(s),
    f = {
      "skin-h5cashier": l.default,
      zxd: d.default,
      kstq: c.default
    };
  t.default = f, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = n(a),
    i = o(1),
    l = n(i),
    u = (window.Zepto, !1),
    d = function() {
      if (!u) {
        r.default.log("kstq_PV:\u8003\u751f\u7279\u6743\u6e20\u9053PV");
        var e = navigator.userAgent.toLocaleLowerCase();
        return e.indexOf("alipay") > 0 ? (r.default.log("kstq_in_alipay:\u8003\u751f\u7279\u6743\u6e20\u9053_\u652f\u4ed8\u5b9d\u5185\u6253\u5f00"), l.default.log("kstq:in alipay"), r.default.onJSBridgeReady(function() {
          l.default.log("kstq:start push window"), AlipayJSBridge.call("pushWindow", {
            url: "alipays://platformapi/startapp?appId=20000178&bizScenario=gaokao&url=%2Fwww%2Findex.html%3FappCode%3DgaokaochaxunApp"
          })
        }), !1) : (r.default.log("kstq_out_alipay:\u8003\u751f\u7279\u6743\u6e20\u9053_\u652f\u4ed8\u5b9d\u5916\u6253\u5f00"), l.default.log("kstq:out of alipay"), !1)
      }
      u = !0
    };
  t.default = d, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = n(a),
    i = o(1),
    l = n(i),
    u = (window.Zepto, !1),
    d = function() {
      if (!u) {
        r.default.log("zxd_PV:\u52a9\u5b66\u8d37\u6e20\u9053PV");
        var e = navigator.userAgent.toLocaleLowerCase();
        return e.indexOf("alipay") > 0 ? (r.default.log("zxd_in_alipay:\u52a9\u5b66\u8d37\u6e20\u9053_\u652f\u4ed8\u5b9d\u5185\u6253\u5f00"), l.default.log("zxd:in alipay"), r.default.onJSBridgeReady(function() {
          l.default.log("zxd:start push window"), AlipayJSBridge.call("pushWindow", {
            url: "alipays://platformapi/startapp?appId=20000047&sourceId=S&publicId=2017052407330286"
          })
        }), !1) : (r.default.log("zxd_out_alipay:\u52a9\u5b66\u8d37\u6e20\u9053_\u652f\u4ed8\u5b9d\u5916\u6253\u5f00"), l.default.log("zxd:out of alipay"), !1)
      }
      u = !0
    };
  t.default = d, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = n(a),
    i = o(1),
    l = n(i),
    u = window.Zepto,
    d = navigator.userAgent.toLocaleLowerCase(),
    s = r.default.getHash("cid") || "wap_dc",
    c = "com.eg.android.AlipayGphone",
    f = function() {
      var e = "https://t.alipayobjects.com/L1/71/100/and/alipay_wap_dc.apk";
      return r.default.browser.mobile ? (r.default.browser.ios ? (l.default.log("download", "IOS"), e = "itms-apps://itunes.apple.com/app/zhi-fu-bao/id333206289?mt=8") : r.default.browser.android ? (l.default.log("download", "\u5b89\u5353"), e = "https://t.alipayobjects.com/L1/71/100/and/alipay_" + s + ".apk", window.urlParams && "zxd" === window.urlParams.pageSkin && (e = "http://tfs.alipayobjects.com/L1/71/100/and/alipay_jiaoyu-1.apk"), window.urlParams && "kstq" === window.urlParams.pageSkin && (e = "http://tfs.alipayobjects.com/L1/71/100/and/alipay_jiaoyu.apk"), window.urlParams && "t" === window.urlParams.mk && (e = "market://details?id=com.eg.android.AlipayGphone")) : /^.*(windows phone).*$/.test(d) ? (l.default.log("download", "winphone"), e = "http://www.windowsphone.com/zh-cn/store/app/%E6%94%AF%E4%BB%98%E5%AE%9D%E9%92%B1%E5%8C%85/8ce634b0-1861-4006-a31d-93c5a2c6073b") : l.default.log("download", "\u5176\u4ed6"), e) : void l.default.log("download", "\u975emobile")
    },
    p = function() {
      return u(".download").on("click", function() {
        if (window.Tracert.click("c24334.d45355"), r.default.log("downloadClick:\u4e0b\u8f7d\u6309\u94ae\u70b9\u51fb"), u(void 0).hasClass("update") ? l.default.log("update") : l.default.log("download"), window.urlParams && "zxd" === window.urlParams.pageSkin && r.default.log("zxd_download_click:\u52a9\u5b66\u8d37\u6e20\u9053\u5305\u4e0b\u8f7d\u70b9\u51fb"), window.urlParams && "kstq" === window.urlParams.pageSkin && r.default.log("kstq_download_click:\u8003\u751f\u7279\u6743\u6e20\u9053\u5305\u4e0b\u8f7d\u70b9\u51fb"), /AliApp\(TB/.test(window.navigator.userAgent)) return l.default.log("taobao container"), void r.default.loadJS("https://g.alicdn.com/mtb/lib-windvane/3.0.0/windvane.js", function() {
          window.WindVane && window.WindVane.call("TBDeviceInfo", "getInfo", {}, function(e) {
            /^212200@taobao/.test(e.ttid) ? location.href = "https://play.google.com/store/apps/details?id=" + c : location.href = f()
          }, function(e) {
            r.default.log("taobaoDownloadError")
          })
        });
        var e = f();
        if (window.injs && "function" == typeof window.injs.downloadApp && r.default.browser.android) try {
          var t = {};
          t.appName = c, t.url = e, window.injs.downloadApp(JSON.stringify(t))
        } catch (t) {
          window.location = e
        } else location.href = e
      }), !0
    };
  t.default = p, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = (n(a), o(1)),
    i = (n(r), function() {
      return !0
    });
  t.default = i, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(14),
    r = n(a),
    i = o(8),
    l = n(i),
    u = o(13),
    d = n(u),
    s = o(9),
    c = n(s),
    f = o(11),
    p = n(f),
    g = o(12),
    m = n(g),
    h = o(1),
    w = n(h),
    v = function() {
      var e = (0, r.default)(),
        t = (0, d.default)(),
        o = (0, p.default)(),
        n = (0, l.default)(),
        a = (0, c.default)(),
        i = (0, m.default)();
      return w.default.log("middleware", e, t, o, n, a, i), e && t && o && n && a && i
    };
  t.default = v, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = (n(a), o(1)),
    i = n(r),
    l = window.Zepto,
    u = function() {
      return window.urlParams.nojump && "true" === String(window.urlParams.nojump) ? (i.default.log("noJump", !0), l(".open").remove(), !1) : "publicmessage" !== window.urlParams.comeFrom || (i.default.log("comeFrom publicmessage", !0), !1)
    };
  t.default = u, e.exports = t.default
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = window.Zepto,
    n = function() {
      return window.urlParams.hideOpen && "true" === String(window.urlParams.hideOpen) && o(".open").hide(), !0
    };
  t.default = n, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = n(a),
    i = o(1),
    l = n(i),
    u = navigator.userAgent.toLocaleLowerCase(),
    d = window.Zepto,
    s = function() {
      var e = !0;
      /^.*(windows phone|android|adr|iphone|ipod|ipad|symbianos).*$/.test(u) || (window.location.href = "https://mobile.alipay.com/index.htm?cid=" + window.urlParams.cid, e = !1), /.*(micromessenger|wechat).*$/.test(u) && (e = !1);
      var t = u.indexOf("alipay") > 0,
        o = window.urlParams.minVersion,
        n = o && r.default.isNewVersion(!1, window.urlParams.minVersion),
        a = "lowVersionMessage" === window.urlParams.froms;
      return l.default.log("minVersion", t, o, n, a), (t && o && !n || a) && (d(".open").hide(), d(".download").addClass("update").text("\u66f4\u65b0\u652f\u4ed8\u5b9d"), d("body").attr("class", "outside"), e = !1), /qq|mqqbrowser/.test(u) && (d(".open").hide(), d(".tip").show()), e
    };
  t.default = s, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = n(a),
    i = o(1),
    l = n(i),
    u = o(5),
    d = n(u),
    s = window.Zepto,
    c = {
      isDebug: r.default.getHash("alidebug"),
      froms: r.default.getHash("from"),
      scheme: r.default.getHash("scheme"),
      rc: r.default.getHash("rc"),
      iframeSrc: r.default.getHash("iframeSrc"),
      cid: r.default.getHash("cid") || "wap_dc",
      nojump: r.default.getHash("nojump"),
      appId: r.default.getHash("appId"),
      pageSkin: r.default.getHash("pageSkin"),
      backTarget: r.default.getHash("backTarget"),
      minVersion: r.default.getHash("minVersion"),
      downloadPageTitle: r.default.getHash("downloadPageTitle") || "\u652f\u4ed8\u5b9d",
      url: r.default.getHash("url"),
      comeFrom: r.default.getHash("comeFrom"),
      hideOpen: r.default.getHash("hideOpen"),
      mk: r.default.getHash("mk")
    };
  window.urlParams = c;
  var f = function() {
    l.default.log("urlParams", c);
    var e = !0;
    if (c.froms && r.default.log(c.froms), c.pageSkin) {
      var t = d.default[c.pageSkin];
      !t && l.default.log("pageSkin is undefined"), e = !t || t()
    }
    return s("title").text(c.downloadPageTitle), e
  };
  t.default = f, e.exports = t.default
}, function(e, t) {
  "use strict";
  var o = {};
  o.getHost = function(e) {
    var t = o.getHostByUrl(e);
    return t ? t : (window.Tracert.click("url.buildFail"), o.getHostByRegx(e))
  }, o.getHostByUrl = function(e) {
    var t = void 0;
    try {
      t = new URL(e)
    } catch (o) {
      t = document.createElement("a"), t.href = e
    }
    return t.host
  }, o.getHostByRegx = function(e) {
    try {
      var t = e.replace(/^https?\:\/\//g, "").replace(/(\/|\?|\#|\;).*/g, "");
      return t.indexOf("@") > -1 ? t.substring(t.indexOf("@") + 1) : t
    } catch (e) {
      console.error("getHostByRegx error", e)
    }
  }, e.exports = o
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = {
    pop: function() {
      return '\n      <div id="aliDebugPop">\n        <div id="aliDebugPopbox">\n          <ul id="aliDebugPopboxContent">\n          </ul>\n        </div>\n        <button id="aliDebugPopboxClear" class="ali-debug-button">\u6e05\u5c4f</button>\n        <button id="aliDebugPopboxClose" class="ali-debug-button">\u5173\u95ed</button>\n      </div>\n    '
    },
    popItem: function(e) {
      return "\n      <li>" + e + "</li>\n    "
    }
  };
  t.default = o, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(1),
    r = n(a),
    i = o(2),
    l = n(i),
    u = o(15),
    d = n(u),
    s = {},
    c = window.Zepto,
    f = function(e) {
      return c(e).val() && c(e).val().split("|") || []
    },
    p = f("#domainList"),
    g = f("#urlList");
  p.pop(), g.pop(), p.length || l.default.log("domainListError:\u51e4\u8776\u533a\u5757\u540c\u6b65\u83b7\u53d6\u5931\u8d25"), s.getAllParams = function(e) {
    for (var t = /[(?|&)]([^=]+)=([^&#]+)/g, o = {}, n = t.exec(e); n;) {
      var a = decodeURIComponent(n[1]),
        r = decodeURIComponent(n[2]);
      o[a] = r, n = t.exec(e)
    }
    return o
  }, s.isValidUrl = function(e) {
    var t = /^((https?):\/\/)*([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    if (!t.test(e)) return r.default.log("not a url"), !1;
    var o = e.split("?")[0],
      n = g,
      a = function() {
        try {
          var t = d.default.getHost(e);
          return !!t && (r.default.log("url2", o, t), p.some(function(e) {
            var o = "." === e[0] ? e : "." + e,
              n = new RegExp(o.replace(/\./g, "\\.") + "$");
            return n.test("." + t)
          }))
        } catch (e) {
          return l.default.log("ExtraHostError:\u4e0d\u652f\u6301array.some", window.navigator.userAgent), !1
        }
      };
    return n.indexOf(e) !== -1 || a()
  }, s.isValidScheme = function(e) {
    if (!e || !/^alipay(s|src|qr)?\:\/\/platformapi\/startapp\?/i.test(e)) return r.default.log("isValidScheme null"), !1;
    var t = s.getAllParams(e).url;
    return r.default.log("url", t), !(t && "/" !== t[0] && !s.isValidUrl(t)) || (r.default.log("isValidScheme isValidUrl"), !1)
  }, s.getScheme = function(e) {
    var t = s.getAllParams(e);
    r.default.log("getScheme params", t);
    var o = t.cid || "wap_dc",
      n = !!t.nojump,
      a = t.iframeSrc || t.scheme;
    if (!a) {
      var i = t.appId,
        l = t.url;
      if (!i && l && (i = "20000067"), i) {
        for (var u = "alipays://platformapi/startapp?appId=" + encodeURIComponent(i), d = Object.keys(t), c = 0; c < d.length; c++) {
          var f = d[c];
          "appId" !== f && (r.default.log("getScheme key", f, t[f]), u += "&" + encodeURIComponent(f) + "=" + encodeURIComponent(t[f]))
        }
        a = u
      }
    }
    return r.default.log("isValid", a, s.isValidScheme(a)), a && s.isValidScheme(a) || (a = "alipays://platformapi/startapp?appId=20000001"), {
      scheme: a,
      nojump: n,
      cid: o
    }
  }, s.getHash = function(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
      o = window.location.search.substr(1).match(t);
    return null !== o ? decodeURIComponent(o[2]) : null
  }, s.canRunNewCode = function() {
    var e = Number(c("#greyProgress").val()) || 0,
      t = Math.ceil(100 * Math.random() % 100);
    return r.default.log("grey", t, e), t <= e
  }, s.getSceneStackInfo = function(e) {
    window.AlipayJSBridge && AlipayJSBridge.call("getSceneStackInfo", function(t) {
      r.default.log("getSceneStackInfo", t), e && e(t)
    })
  }, t.default = s, e.exports = t.default
}, function(e, t) {}, 18]);