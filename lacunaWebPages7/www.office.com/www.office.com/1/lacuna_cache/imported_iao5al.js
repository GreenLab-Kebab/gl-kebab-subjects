// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
var __awaiter = this && this.__awaiter || function(e, t, n, a) {
    return new(n || (n = Promise))(function(r, i) {
      function o(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[137:230]", functionData => eval(functionData))}

      function s(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[252:346]", functionData => eval(functionData))}

      function c(e) {
        e.done ? r(e.value) : new n(function(t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[418:450]", functionData => eval(functionData))}).then(o, s)
      }
      c((a = a.apply(e, t || [])).next())
    })
  },
  __generator = this && this.__generator || function(e, t) {
    function n(e) {
      return function(t) {
        return a([e, t])
      }
    }

    function a(n) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; c;) try {
        if (r = 1, i && (o = 2 & n[0] ? i.return : n[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, n[1])).done) return o;
        switch (i = 0, o && (n = [2 & n[0], o.value]), n[0]) {
          case 0:
          case 1:
            o = n;
            break;
          case 4:
            return c.label++, {
              value: n[1],
              done: !1
            };
          case 5:
            c.label++, i = n[1], n = [0];
            continue;
          case 7:
            n = c.ops.pop(), c.trys.pop();
            continue;
          default:
            if (o = c.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
              c = 0;
              continue
            }
            if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
              c.label = n[1];
              break
            }
            if (6 === n[0] && c.label < o[1]) {
              c.label = o[1], o = n;
              break
            }
            if (o && c.label < o[2]) {
              c.label = o[2], c.ops.push(n);
              break
            }
            o[2] && c.ops.pop(), c.trys.pop();
            continue
        }
        n = t.call(e, c)
      } catch (e) {
        n = [6, e], i = 0
      } finally {
        r = o = 0
      }
      if (5 & n[0]) throw n[1];
      return {
        value: n[0] ? n[1] : void 0,
        done: !0
      }
    }
    var r, i, o, s, c = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return s = {
      next: n(0),
      throw: n(1),
      return: n(2)
    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[2521:2546]", functionData => eval(functionData))}), s
  },
  HomePage;
! function(e) {
  function t() {
    n(), new p($("#hero-section")), new m($("#personalization-section")), "undefined" != typeof Promise && c() && u(), a()
  }

  function n() {
    window.requestAnimationFrame || (window.requestAnimationFrame = function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[2825:3053]", functionData => eval(functionData))}()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[3131:3333]", functionData => eval(functionData))}())
  }

  function a() {
    r(), window.addEventListener("resize", i), lazyLoadAnimationId = window.requestAnimationFrame(i)
  }

  function r() {
    lazyImages = document.getElementsByClassName("lazy")
  }

  function i() {
    if (lazyImages) {
      for (var e = 0; e < lazyImages.length; e++)
        if (o(lazyImages[e])) {
          for (var t = 0; t < lazyImages[e].children.length; t++) {
            var n = lazyImages[e].children[t];
            n.getAttribute("data-srcset") ? (n.srcset = n.getAttribute("data-srcset"), n.removeAttribute("data-srcset")) : n.getAttribute("data-src") && (n.src = n.getAttribute("data-src"), n.removeAttribute("data-src"))
          }
          lazyImages[e].style.opacity = 1
        } s(), lazyLoadAnimationId = window.requestAnimationFrame(i)
    }
  }

  function o(e) {
    var t = e.getBoundingClientRect();
    return t.bottom >= 0 && t.right >= 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight) && t.left <= (window.innerWidth || document.documentElement.clientWidth)
  }

  function s() {
    lazyImages = Array.prototype.filter.call(lazyImages, function(e) {
      for (var t = 0; t < e.children.length; t++) {
        var n = e.children[t];
        if (n.getAttribute("data-srcset") || n.getAttribute("data-src")) return e
      }
    }), 0 === lazyImages.length && (window.removeEventListener("resize", i), window.cancelAnimationFrame(lazyLoadAnimationId))
  }

  function c() {
    return !!g("unauthServiceWorkerFlight", !0)
  }

  function u() {
    return __awaiter(this, void 0, void 0, function() {
      var e, t, n, a, r, i, o, s, c, u, p, m, f, v, w, h, y, b, E;
      return __generator(this, function(T) {
        switch (T.label) {
          case 0:
            return T.trys.push([0, 12, , 13]), "serviceWorker" in window.navigator ? (e = g("serviceWorkerConfig"), t = g("sharedClientStartupContext"), n = document.getElementById("cdnDomain"), a = n ? n.innerText : "", r = window.navigator.serviceWorker, r.controller ? [4, r.getRegistration()] : [3, 2]) : [2];
          case 1:
            return o = T.sent(), [3, 3];
          case 2:
            o = null, T.label = 3;
          case 3:
            if (i = o, !(e && t && e.enabled)) return [3, 9];
            for (s = e.scriptUrl, c = e.scope, u = "cdnDomain=" + a + "&workload=officehome", p = d(e, t), m = 0, f = p; m < f.length; m++) v = f[m], u += "&serviceWorkerFlight=" + v;
            return w = s + "?" + u, i ? (h = window.location.origin, y = i.active.scriptURL.toLowerCase() !== (h + w).toLowerCase(), b = i.scope.toLowerCase() !== (h + c).toLowerCase(), y || b ? [4, l(r, w, c)] : [3, 5]) : [3, 6];
          case 4:
            i = T.sent(), T.label = 5;
          case 5:
            return [3, 8];
          case 6:
            return [4, l(r, w, c)];
          case 7:
            i = T.sent(), T.label = 8;
          case 8:
            return [3, 11];
          case 9:
            return i ? [4, i.unregister()] : [3, 11];
          case 10:
            T.sent(), T.label = 11;
          case 11:
            return [3, 13];
          case 12:
            return (E = T.sent()) instanceof Error && E.message && "the operation is insecure." === E.message.toLowerCase() ? [2] : ("undefined" != typeof StandaloneAriaLogger && StandaloneAriaLogger.Logger && StandaloneAriaLogger.Logger.LogEvent && StandaloneAriaLogger.Logger.LogEvent("unauth_generic", "ServiceWorkerInstallation_Error", {
              Error: E && E.message || "Unknown"
            }), [3, 13]);
          case 13:
            return [2]
        }
      })
    })
  }

  function l(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[6963:7228]", functionData => eval(functionData))}

  function d(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[7249:7426]", functionData => eval(functionData))}

  function g(e, t) {
    void 0 === t && (t = !1);
    var n = document.getElementById(e);
    return n && n.innerHTML ? JSON.parse(t ? n.innerHTML.toLowerCase() : n.innerHTML) : null
  }
  var p = function() {
      function e(e) {
        this.$document = e, this.setupFade(), this.connectScrollButton(), this.connectFreeAccountButton()
      }
      return e.prototype.setupFade = function() {
        var e = this,
          t = this.$document.find(".fade");
        window.requestAnimationFrame(function() {
          return e.fade(t)
        })
      }, e.prototype.fade = function(e) {
        var t = this;
        window.innerWidth >= 1024 ? this.lastPosition !== $(".home").scrollTop() && (e.css("opacity", 1 - $(".home").scrollTop() / ($(".home").height() / 2)), this.lastPosition = $(".home").scrollTop()) : e.css("opacity", 1), window.requestAnimationFrame(function() {
          return t.fade(e)
        })
      }, e.prototype.connectScrollButton = function() {
        this.$document.find("#scroll-button").click(function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[8468:8586]", functionData => eval(functionData))})
      }, e.prototype.connectFreeAccountButton = function() {
        this.$document.find("#hero-banner-free-account-link").click(function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[8728:9052]", functionData => eval(functionData))})
      }, e
    }(),
    m = function() {
      function e(e) {
        e.length && (this.$document = e, this.$forgetAccount = e.find("#personalization-remove-link"), this.$switchAccountLink = e.find("#switch-account-link"), this.$lastEmail = e.find("#last-signed-in-email"), this.$inputEmailWrapper = e.find("#NewEmail"), this.$inputEmail = e.find("#try-different-email"), this.$signInButton = e.find("#hero-banner-sign-back-in-to-office-365-link"), this.$closeNewEmailButton = e.find("#closeNewEmail"), this.ForgetAccountClick(), this.SwitchAccount(), this.SignInWithNewEmail(), this.CloseNewEmail())
      }
      return e.prototype.ForgetAccountClick = function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[9721:10217]", functionData => eval(functionData))}, e.prototype.SendAADForget = function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[10259:10560]", functionData => eval(functionData))}, e.prototype.SwitchAccount = function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[10601:10864]", functionData => eval(functionData))}, e.prototype.SignInWithNewEmail = function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[10910:11353]", functionData => eval(functionData))}, e.prototype.CloseNewEmail = function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[11394:11622]", functionData => eval(functionData))}, e.prototype.updateQueryStringParameter = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[11680:11846]", functionData => eval(functionData))}, e
    }();
  e.init = t
}(HomePage || (HomePage = {}));
var awa = awa || {},
  behaviorKey;
awa.isInitialized = !1, awa.verbosityLevels = {
  NONE: 0,
  ERROR: 1,
  WARNING: 2,
  INFORMATION: 3
}, awa.behavior = {
  UNDEFINED: 0,
  NAVIGATIONBACK: 1,
  NAVIGATION: 2,
  NAVIGATIONFORWARD: 3,
  APPLY: 4,
  REMOVE: 5,
  SORT: 6,
  EXPAND: 7,
  REDUCE: 8,
  CONTEXTMENU: 9,
  TAB: 10,
  COPY: 11,
  EXPERIMENTATION: 12,
  STARTPROCESS: 20,
  PROCESSCHECKPOINT: 21,
  COMPLETEPROCESS: 22,
  DOWNLOADCOMMIT: 40,
  DOWNLOAD: 41,
  SEARCHAUTOCOMPLETE: 60,
  SEARCH: 61,
  PURCHASE: 80,
  ADDTOCART: 81,
  VIEWCART: 82,
  ADDWISHLIST: 83,
  FINDSTORE: 84,
  CHECKOUT: 85,
  REMOVEFROMCART: 86,
  PURCHASECOMPLETE: 87,
  SIGNIN: 100,
  SIGNOUT: 101,
  SOCIALSHARE: 120,
  SOCIALLIKE: 121,
  SOCIALREPLY: 122,
  CALL: 123,
  EMAIL: 124,
  COMMUNITY: 125,
  VOTE: 140,
  SURVEYINITIATE: 141,
  SURVEYCOMPLETE: 142,
  REPORTAPPLICATION: 143,
  REPORTREVIEW: 144,
  CONTACT: 160,
  REGISTRATIONINITIATE: 161,
  REGISTRATIONCOMPLETE: 162,
  CHATINITIATE: 180,
  CHATEND: 181,
  TRIALSIGNUP: 200,
  TRIALINITIATE: 201,
  PARTNERREFERRAL: 220,
  VIDEOSTART: 240,
  VIDEOPAUSE: 241,
  VIDEOCONTINUE: 242,
  VIDEOCHECKPOINT: 243,
  VIDEOJUMP: 244,
  VIDEOCOMPLETE: 245,
  VIDEOBUFFERING: 246,
  VIDEOERROR: 247,
  VIDEOMUTE: 248,
  VIDEOUNMUTE: 249,
  VIDEOFULLSCREEN: 250,
  VIDEOUNFULLSCREEN: 251,
  VIDEOREPLAY: 252,
  VIDEPLAYERLOAD: 253,
  VIRTUALEVENTJOIN: 260,
  VIRTUALEVENTEND: 261,
  IMPRESSION: 280,
  CLICK: 281,
  RICHMEDIACOMPLETE: 282,
  ADBUFFERING: 283,
  ADERROR: 284,
  ADSTART: 285,
  ADCOMPLETE: 286,
  ADSKIP: 287,
  ADTIMEOUT: 288,
  OTHER: 300
}, awa.behaviorKeys = [];
for (behaviorKey in awa.behavior) awa.behaviorKeys.push(behaviorKey);
awa.actionType = {
    CLICKLEFT: "CL",
    CLICKRIGHT: "CR",
    SCROLL: "S",
    ZOOM: "Z",
    RESIZE: "R",
    KEYBOARDENTER: "KE",
    KEYBOARDSPACE: "KS",
    OTHER: "O"
  }, awa.cookie = function() {
    function e(e, n) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[13823:14048]", functionData => eval(functionData))}

    function t(e) {
      for (var t, a, r = document.cookie.split(";"), i = 0; i < r.length; i++) {
        for (t = r[i];
          " " === t.charAt(0);) t = t.substring(1);
        if (a = t.split("="), n(a.shift()) === e) return n(a.join("="))
      }
      return null
    }

    function n(e) {
      var t = decodeURIComponent(e.replace("/+/g", " "));
      return 0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), t
    }

    function a(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[14545:14730]", functionData => eval(functionData))}

    function r(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[14750:14776]", functionData => eval(functionData))}
    return {
      getCookie: t,
      getCookieKeyValue: e,
      setCookie: a,
      deleteCookie: r
    }
  }(), awa.cv = function() {
    function e() {
      return d(t())
    }

    function t() {
      return b.concat(".", E.toString())
    }

    function n() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[15045:15096]", functionData => eval(functionData))}

    function a(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[15116:15466]", functionData => eval(functionData))}

    function r() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[15485:15550]", functionData => eval(functionData))}

    function i() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[15569:15639]", functionData => eval(functionData))}

    function o(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[15659:15872]", functionData => eval(functionData))}

    function s(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[15892:15945]", functionData => eval(functionData))}

    function c() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[15964:16092]", functionData => eval(functionData))}

    function u() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[16111:16184]", functionData => eval(functionData))}

    function l() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[16203:16244]", functionData => eval(functionData))}

    function d(e) {
      if (e) {
        var t = e.split(".")[0];
        if (t) {
          if (16 === t.length) return y = 1, g(e);
          if (22 === t.length) return y = 2, p(e)
        }
      }
    }

    function g(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[16475:16575]", functionData => eval(functionData))}

    function p(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[16595:16695]", functionData => eval(functionData))}

    function m(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[16715:16815]", functionData => eval(functionData))}

    function f() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[16834:16853]", functionData => eval(functionData))}

    function v() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[16872:16891]", functionData => eval(functionData))}
    var w, h, y, b = "",
      E = 0,
      T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      C = {};
    return C.maxCorrelationVectorLength = 63, C.baseLength = 16, C.validationPattern = new RegExp("^[" + T + "]{" + C.baseLength.toString() + "}(.[0-9]+)+$"), w = {}, w.maxCorrelationVectorLength = 127, w.baseLength = 22, w.validationPattern = new RegExp("^[" + T + "]{" + w.baseLength.toString() + "}(.[0-9]+)+$"), h = w, y = 2, {
      header: "MS-CV",
      tag: "cV",
      isInit: e,
      canExtend: r,
      canIncrement: i,
      getValue: n,
      setValue: o,
      init: s,
      extend: u,
      increment: l,
      incrementExternal: a,
      isValid: d,
      useCv1: f,
      useCv2: v
    }
  }(), awa.logger = function() {
    function e(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[17680:17802]", functionData => eval(functionData))}

    function t(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[17822:17944]", functionData => eval(functionData))}

    function n(e) {
      awa.consoleVerbosity >= awa.verbosityLevels.INFORMATION && console && console.log && console.log("JSLL: " + e)
    }
    return {
      logError: e,
      logWarning: t,
      logInformation: n
    }
  }(), awa.capabilitiesCheck = function() {
    return function() {
      if (!JSON || !JSON.stringify) return awa.logger.logError("Unable to write event: the global JSON.stringify method does not exist"), awa.isAvailable = !1, !1
    }
  }(), awa.utils = function() {
    function e(e, n) {
      var a, r, i;
      if (n) try {
        return "{}" === (a = JSON.stringify(n)) && "timing" === e ? t() : a
      } catch (t) {
        return r = '{"error": "ERROR: could not stringify {0} {1}"}', i = "string" == typeof n ? n : "", r.replace("{0}", e).replace("{1}", i)
      }
    }

    function t() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[18773:19328]", functionData => eval(functionData))}

    function n(e) {
      return {
        "microsoft.com": "c1.microsoft.com",
        "xbox.com": "c.xbox.com",
        "live.com": "c.live.com",
        "microsoftstore.com": "c.microsoftstore.com",
        "msn.com": "c.msn.com",
        "windows.com": "c.windows.com"
      } [e]
    }

    function a(e, t) {
      if ("string" === e) return "string" == typeof t || t instanceof String || t instanceof Date;
      if ("bool" === e) return "boolean" == typeof t || t instanceof Boolean;
      if (!("number" == typeof t || t instanceof Number)) return !1;
      if ("uint8" === e) {
        if (t < 0 || t > 255 || t % 1 != 0) return !1
      } else if ("uint16" === e) {
        if (t < 0 || t > 65535 || t % 1 != 0) return !1
      } else if ("uint32" === e) {
        if (t < 0 || t > 4294967295 || t % 1 != 0) return !1
      } else if ("uint64" === e) {
        if (t < 0 || t > 0x10000000000000000 || t % 1 != 0) return !1
      } else if ("int8" === e) {
        if (t < -128 || t > 127 || t % 1 != 0) return !1
      } else if ("int16" === e) {
        if (t < -32768 || t > 32767 || t % 1 != 0) return !1
      } else if ("int32" === e) {
        if (t < -2147483648 || t > 2147483647 || t % 1 != 0) return !1
      } else if ("int64" === e) {
        if (t < -0x8000000000000000 || t > 0x8000000000000000 || t % 1 != 0) return !1
      } else if ("float" === e) {
        if (t < -3.402823e38 || t > 3.402823e38) return !1
      } else if ("double" === e && (t < -Number.MAX_VALUE || t > Number.MAX_VALUE)) return !1;
      return !0
    }

    function r() {
      if ("" === A) {
        var e = o().toLowerCase();
        A = -1 !== e.indexOf("windows phone") ? "WindowsPhone" : -1 !== e.indexOf("win") ? "Windows" : -1 !== e.indexOf("mac") ? "MacOS" : -1 !== e.indexOf("x11") ? "Unix" : -1 !== e.indexOf("android") ? "Android" : -1 !== e.indexOf("linux") ? "Linux" : -1 !== e.indexOf("webos") ? "webOS" : -1 !== e.indexOf("blackberry") ? "BlackBerry" : -1 !== e.indexOf("ipod") || -1 !== e.indexOf("ipad") || -1 !== e.indexOf("iphone") ? "iOS" : -1 !== e.indexOf("symbian") ? "Symbian" : -1 !== e.indexOf("nokia") ? "Nokia" : "Unknown"
      }
      return A
    }

    function i() {
      N = window.navigator && window.navigator.userAgent ? window.navigator.userAgent : ""
    }

    function o() {
      return "" === N && i(), N
    }

    function s(e, t) {
      var n;
      return e && e[t] && (n = e[t], delete e[t]), n
    }

    function c(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[21807:21873]", functionData => eval(functionData))}

    function u(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[21896:22174]", functionData => eval(functionData))}

    function l(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[22194:22276]", functionData => eval(functionData))}

    function d(e) {
      var t = String(e);
      return 1 === t.length && (t = "0" + t), t
    }

    function g(e) {
      return e.getUTCFullYear() + "-" + d(e.getUTCMonth() + 1) + "-" + d(e.getUTCDate()) + "T" + d(e.getUTCHours()) + ":" + d(e.getUTCMinutes()) + ":" + d(e.getUTCSeconds()) + "." + String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
    }

    function p() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[22672:22892]", functionData => eval(functionData))}

    function m() {
      var e;
      return O.loadEventStart > 0 && (e = O.loadEventStart - O.navigationStart), e
    }

    function f() {
      return document.title.substring(0, 150)
    }

    function v(e) {
      return "[" + e + "]"
    }

    function w(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[23163:23198]", functionData => eval(functionData))}

    function h(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[23218:23246]", functionData => eval(functionData))}

    function y(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[23269:23441]", functionData => eval(functionData))}

    function b(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[23461:23531]", functionData => eval(functionData))}

    function E(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[23551:23590]", functionData => eval(functionData))}

    function T(e) {
      var t, n;
      return e && (n = e.split(":"), t = n.length > 1 && "js" === n[0].toLowerCase() ? e : L + e), t
    }

    function C(e) {
      for (var t in e) S(e[t]) && ("{}" !== JSON.stringify(e[t]) || "callback" === t) || delete e[t]
    }

    function S(e) {
      return !(void 0 === e || null === e || "" === e)
    }

    function I(e, t) {
      var n, a;
      C(e);
      for (n in t) a = t[n], "object" == typeof e[a] ? C(e[a]) : delete e[a]
    }
    var A = "",
      N = "",
      O = window.performance ? window.performance.timing : void 0,
      L = "JS:",
      x = "",
      M = function() {
        var e, t, n = {},
          a = !1,
          r = 0,
          i = arguments.length;
        for ("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (a = arguments[0], r++), e = function(e) {
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = a && "[object Object]" === Object.prototype.toString.call(e[t]) ? M(!0, n[t], e[t]) : e[t])
          }; r < i; r++) t = arguments[r], e(t);
        return n
      };
    return {
      stringifyField: e,
      getMuidHost: n,
      isOfCorrectType: a,
      getOs: r,
      getUserAgent: o,
      extractFieldFromObject: s,
      isElementTrulyVisible: c,
      dateToISOString: g,
      extend: M,
      returnDomObjectIfjQuery: l,
      findClosestByAttribute: w,
      findClosestAnchor: h,
      getPerformanceData: p,
      getPageLoadTime: m,
      getTitle: f,
      removeInvalidElements: C,
      removeNonObjectsAndInvalidElements: I,
      bracketIt: v,
      getAppIdWithPrefix: T,
      isValueAssigned: S
    }
  }(), awa.ids = function() {
    function e() {
      function e() {
        return Math.floor(16 * Math.random()).toString(16)
      }
      return "xxxxxxxx-xxxx-4xxx-Rxxx-xxxxxxxxxxxx".replace(/x/g, e).replace("R", (8 | Math.floor(3 * Math.random())).toString(16))
    }

    function t() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[25553:25592]", functionData => eval(functionData))}

    function n() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[25611:25651]", functionData => eval(functionData))}

    function a() {
      return m
    }

    function r() {
      return h ? m = e() : h = !0, m
    }

    function i() {
      return f.getCookie(y)
    }

    function o() {
      var e = f.getCookie("MUID");
      return e && e.length ? "t:" + e : e
    }

    function s(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[25932:26217]", functionData => eval(functionData))}

    function c(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[26237:26513]", functionData => eval(functionData))}

    function u(e) {
      var t, n;
      if (!e) return void(w = null);
      if (e !== w)
        for (w = null, t = e.split(","), n = 0; n < t.length; n++) c(t[n]) ? w ? w += "," + t[n] : w = t[n] : awa.logger.logWarning("Unsupported flight id format for this app expId: " + t[n])
    }

    function l() {
      return w
    }

    function d(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[26865:26891]", functionData => eval(functionData))}

    function g() {
      return p
    }
    var p, m = e(),
      f = awa.cookie,
      v = null,
      w = null,
      h = !1,
      y = "Treatments",
      b = ["c:", "i:", "w:"],
      E = ["AX", "EX", "SF", "CS", "CF", "CT", "CU", "DC", "DF", "H5", "HL", "WS", "WP"];
    return {
      getSessionId: t,
      getVisitorId: n,
      getMuidUserId: o,
      setAppUserId: s,
      getAppUserId: function() {
        return v
      },
      readExpIdFromCookie: function() {
        return u(i()), l()
      },
      readExpIdFromCoreData: function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[27447:27481]", functionData => eval(functionData))},
      getImpressionGuid: a,
      getPageViewImpressionGuid: r,
      getGroups: i,
      setDeviceClass: d,
      getDeviceClass: g,
      setExpIdCookieName: function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[27655:27678]", functionData => eval(functionData))},
      getExpIdCookieName: function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[27717:27743]", functionData => eval(functionData))}
    }
  }(), awa.vortexEvents = function() {
    function e() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[27806:27863]", functionData => eval(functionData))}

    function t() {
      for (; s.length > 0;) awa.writeEvent(s.pop())
    }

    function n(n, a) {
      if (!0 === a) return void awa.writeEvent(n);
      if (c) {
        if ("complete" === c) return void awa.writeEvent(n)
      } else if ("complete" === document.readyState) return void awa.writeEvent(n);
      (0 === s.length || 0 === u) && (window.addEventListener ? window.addEventListener("load", t) : window.attachEvent && window.attachEvent("onload", t)), s.push(n), u > 1 && s.length >= u && e()
    }

    function a(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[28399:28909]", functionData => eval(functionData))}

    function r(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[28932:29244]", functionData => eval(functionData))}

    function i(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[29264:30313]", functionData => eval(functionData))}
    var o = awa.ids,
      s = [],
      c = null,
      u = 0;
    return {
      sendError: r,
      sendApiComplete: i,
      sendJsllEvent: a,
      SendOrScheduleEvent: n,
      batchQueuedEvents: e,
      drainQueuedEvents: t,
      batchEventsByNumber: function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[30586:30609]", functionData => eval(functionData))},
      overrideQueueBehavior: function(e) {
        e && e.domReadyState && (c = e.domReadyState)
      }
    }
  }(), awa.errorHandler = function() {
    function e(e) {
      var t = window.onerror;
      window.onerror = function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[30845:30918]", functionData => eval(functionData))}
    }

    function t(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[30944:31005]", functionData => eval(functionData))}

    function n() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[31024:31438]", functionData => eval(functionData))}

    function a() {
      e(n)
    }
    var r = awa.vortexEvents;
    return {
      init: a
    }
  }(), awa.timespanHandler = function() {
    function e(e, n) {
      var a = (new Date).getTime();
      if (n) return a - t[e];
      t[e] = a
    }
    var t = {};
    return {
      recordTimeSpan: e
    }
  }(),
  function() {
    function e(e, n) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[31793:32041]", functionData => eval(functionData))}

    function t(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[32061:32935]", functionData => eval(functionData))}

    function n(e) {
      var n, a;
      for (y = "", n = 0; n < e.length; n++) n > 0 && (y += "\n"), y += JSON.stringify(e[n]);
      a = "", awa.OnSuccessfulVortexRequest && (a = d.endpoint + "/t.bcn?" + y), navigator.sendBeacon(d.endpoint, y) ? A(a) : t(e)
    }

    function a(e, t) {
      var n = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
        a = document.createElement("script");
      t || (a.onload = function() {
        A(e)
      }), a.async = !0, a.src = e, n.appendChild(a)
    }

    function r() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[33500:33626]", functionData => eval(functionData))}
    var i, o, s, c;
    awa._schemas = awa._schemas || [];
    var u = awa.utils,
      l = u.isValueAssigned,
      d = {
        endpoint: "https://web.vortex.data.microsoft.com/collect/v1",
        sendMode: 1,
        batchSize: 10,
        authMethod: 0,
        logLevel: awa.verbosityLevels.NONE,
        syncMuid: !0,
        provisionMsfpc: !0,
        useDefaultContentName: !0,
        useShortNameForContentBlob: !1,
        debounceMs: {
          scroll: 600,
          resize: 3e3
        },
        muidDomain: "microsoft.com",
        biBlobAttributeTag: "data-m",
        isLoggedIn: !1,
        shareAuthStatus: !1,
        cookiesToCollect: ["MSFPC", "ANON"],
        useBeacon: !0,
        autoCapture: {
          pageView: !0,
          onLoad: !0,
          onUnload: !0,
          click: !0,
          scroll: !1,
          resize: !1,
          jsError: !0,
          addin: !0,
          perf: !0,
          assets: !1,
          lineage: !1
        },
        callback: {
          pageName: null,
          pageActionPageTags: null,
          pageViewPageTags: null,
          contentUpdatePageTags: null,
          pageActionContentTags: null,
          signedinStatus: null
        },
        coreData: {
          referrerUri: document.referrer,
          requestUri: "",
          appId: window.location.hostname,
          pageName: "",
          pageType: "",
          env: "",
          product: "",
          market: "",
          serverImpressionGuid: "",
          expId: "",
          pageTags: {}
        }
      },
      g = [];
    for (i in d) "object" == typeof d[i] && g.push(i);
    var p = "4.1.0",
      m = function() {
        var e = u.getUserAgent(),
          t = e.indexOf("MSIE ");
        return t > 0 && parseInt(e.substring(t + 5, e.indexOf(".", t)), 10) < 9
      }(),
      f = m ? 2083 : 15e3,
      v = "",
      w = !1,
      h = 0,
      y = "",
      b = !1,
      E = l(navigator) && l(navigator.sendBeacon);
    awa.experimentIdTag = "expId", awa.isAvailable = !0, awa.getRequestBody = function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[35693:35715]", functionData => eval(functionData))}, awa.getQueryStringParameters = function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[35759:35781]", functionData => eval(functionData))}, Object.freeze && Object.freeze(awa.verbosityLevels), awa.capabilitiesCheck();
    var T = window.XDomainRequest ? "XDomainRequest" : "xhr",
      C = function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[35944:36178]", functionData => eval(functionData))},
      S = function() {
        awa.vortexEvents.overrideQueueBehavior({
          domReadyState: "complete"
        }), awa.vortexEvents.drainQueuedEvents()
      },
      I = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[36371:36475]", functionData => eval(functionData))},
      A = function(e) {
        awa.OnSuccessfulVortexRequest && awa.OnSuccessfulVortexRequest(e), 1 === d.sendMode && !1 === b && (b = !0, S()), awa.logger.logInformation("Success sending data to vortex")
      },
      N = function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[36714:36832]", functionData => eval(functionData))},
      O = function(e, t, n) {
        if (l(t) && (n || 0 !== t.length)) {
          var a = n ? "" : "'";
          v.length > 0 && (v += "&"), v += e + "=" + a + encodeURIComponent(t.toString()) + a
        }
      },
      L = function(e, t, n, a) {
        for (var r, i, o, s, c, d, g, p, m, f, v = "C" === a ? "*" : "-", w = t.fields, h = 0; h < w.length; h++)
          if (r = w[h], i = n[r.name], l(i))
            if (O(v + r.name, i, "string" !== r.type), "map" === r.type) {
              o = {};
              for (s in i) {
                if (!u.isOfCorrectType(r.key, s)) return awa.logger.logError("A key in the map was of the wrong type: " + r.name), !1;
                if (!u.isOfCorrectType(r.element, i[s])) return awa.logger.logError("A value in the map was of the wrong type: " + r.name), !1;
                o[s] = i[s]
              }
              e[r.name] = o
            } else if ("list" === r.type || "set" === r.type) {
          if (c = [], "[object Array]" !== Object.prototype.toString.call(i)) return awa.logger.logError("The " + r.type + " " + r.name + " was not an array as expected"), !1;
          for (d = 0; d < i.length; d++) {
            if (l(i[d]) && !u.isOfCorrectType(r.element, i[d])) return awa.logger.logError("The list contains a value of the wrong type: " + r.name), !1;
            c[d] = i[d]
          }
          e[r.name] = c
        } else if ("struct" === r.type) {
          if (g = {}, !L(g, r.def, i, a)) return !1;
          e[r.name] = g
        } else {
          if (!u.isOfCorrectType(r.type, i)) return awa.logger.logError("Property is the wrong type: " + r.name), !1;
          e[r.name] = i
        } else if (r.req) return awa.logger.logError("Missing required property: " + r.name), !1;
        for (p in n) {
          for (m = !1, f = 0; f < w.length; f++)
            if (w[f].name === p) {
              m = !0;
              break
            } m || awa.logger.logWarning("An unexpected field was found in  the event content and dropped: " + p)
        }
        return !0
      };
    for (awa.init = function(e) {
        if (!awa.isInitialized) {
          awa.isInitialized = !0, e && (u.removeNonObjectsAndInvalidElements(e, g), d = u.extend(!0, d, e));
          var t = d.sendMode;
          0 == t && !1 === d.provisionMsfpc && (b = !0), (t >= 1 || !0 === d.provisionMsfpc) && awa.vortexEvents.overrideQueueBehavior({
            domReadyState: "notComplete"
          }), 2 === t && awa.vortexEvents.batchEventsByNumber(d.batchSize), awa.consoleVerbosity = d.logLevel, awa.ct.initialize(d)
        }
      }, awa.writeEvent = function(i) {
        var o, s, c, u, l, g, p, m = !0,
          h = [];
        if ("[object Array]" === Object.prototype.toString.call(i))
          for (m = !1, o = 0; o < i.length; o++) s = awa._validateAndTranslateEvent(i[o]), s.success && h.push(s.event);
        else c = awa._validateAndTranslateEvent(i), c.success && h.push(c.event);
        if (0 !== h.length) {
          if (m && v && (u = d.endpoint.length + v.length) + 7 > f && (awa.logger.logWarning("event is too large to send using get -- using post instead"), l = {}, l.eventName = i.name, l.payloadLength = u, l.type = "EventTooLong", awa.vortexEvents.sendJsllEvent(l), m = !1), !m && !C()) return l = {}, l.eventName = i.name, l.type = "CorsDisallowed", void awa.vortexEvents.sendJsllEvent(l);
          m && v ? !1 === b ? (g = "/t.js", p = !1, !0 === d.shareAuthStatus && !0 === r() && -1 === document.cookie.toLowerCase().indexOf("bounced=") && !1 === w && (g = 1 === d.authMethod ? "/asm.js" : 2 === d.authMethod ? "/asa.js" : g, p = !0), a(d.endpoint + g + "?" + v, p)) : E && !0 === d.useBeacon && !1 === d.shareAuthStatus ? n(h) : (g = !0 === d.shareAuthStatus && !0 === r() ? 1 === d.authMethod ? "/asm.gif" : 2 === d.authMethod ? "/asa.gif" : g : "/t.gif", e(d.endpoint + g + "?" + v, h)) : E && !0 === d.useBeacon && !0 === b && !1 === d.shareAuthStatus ? n(h) : t(h)
        }
      }, awa.sendEventThroughIframe = function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[40859:41253]", functionData => eval(functionData))}, awa._validateAndTranslateEvent = function(e) {
        function t(e, t, n) {
          b[e] = t, O(e, t, n)
        }
        var n, a, r, i, o, s, c, g, m, f, w, h, y, b = {},
          E = {},
          T = {},
          C = {
            event: b,
            success: !1
          };
        if (v = "", !e) return awa.logger.logError("Unable to write null event"), C;
        if (!e.name) return awa.logger.logError("Unable to write event with missing name"), C;
        if (!awa._schemas.hasOwnProperty(e.name)) return awa.logger.logError("Unable to write event: a schema for the event named {" + e.name + "} does not exist"), C;
        if (!e.data) return awa.logger.logError("Unable to write event: the event is missing content"), C;
        t("ver", "2.1"), t("name", e.name), t("time", u.dateToISOString(new Date)), t("os", u.getOs()), t("deviceClass", awa.ids.getDeviceClass()), n = e.appId ? e.appId : d.coreData.appId, t("appId", u.getAppIdWithPrefix(n)), "true" === e.isSensitive && t("flags", 524288, !0), a = awa._schemas[e.name];
        for (r in a)
          if ("name" !== r) {
            if (i = a[r], !e.data.hasOwnProperty(r)) return awa.logger.logError("Unable to write event: missing expected part: " + r), C;
            if ("C" === i.part ? o = T : (o = {}, T.baseData = o, T.baseType = r, O("*baseType", r)), !L(o, i.def, e.data[r], i.part)) return C
          } for (s in e.data) a[s] && a[s].part || awa.logger.logWarning("An unexpected property was found in the event content and dropped: " + s);
        b.data = T, b.tags = {}, e.hasOwnProperty(awa.cv.tag) ? t(awa.cv.tag, e.cV) : awa.cv.isInit() && t(awa.cv.tag, awa.cv.getValue());
        var S = {},
          I = e.env,
          A = l(I) ? I : d.coreData.env;
        return l(A) && (S.env = A, E.app = S, O("ext-app-env", A)), c = d && d.coreData && d.coreData.expId ? awa.ids.readExpIdFromCoreData(d.coreData.expId) : awa.ids.readExpIdFromCookie(), c && (u.isOfCorrectType("string", c) ? (S[awa.experimentIdTag] = c, E.app = S, O("ext-app-" + awa.experimentIdTag, c)) : awa.logger.logError("The supplied experiment id is invalid: " + e[awa.experimentIdTag] + "Continuing to process event without this value.")), g = awa.ids.getAppUserId(), g && (u.isOfCorrectType("string", g) ? (S = {}, S.userId = g, E.app = S, O("ext-app-userId", g)) : awa.logger.logError("ignoring the app userId value because it is invalid: " + g)), m = {}, f = window.location.hostname, l(f) || (f = "file:" === window.location.protocol ? "local" : f), m.ver = "1.1", m.libVer = p, m.domain = f, E.javascript = m, O("ext-javascript-ver", "1.1"), O("ext-javascript-libVer", p), O("ext-javascript-domain", f), w = awa.cookie.getCookie("MSFPC"), u.isValueAssigned(w) && (m.msfpc = w, O("ext-javascript-msfpc", w)), h = awa.ids.getMuidUserId(), h && (u.isOfCorrectType("string", h) ? (y = {}, y.localId = h, E.user = y, O("ext-user-localId", h)) : awa.logger.logError("ignoring the userid value because it is invalid: " + h)), b.ext = E, C.success = !0, C
      }, awa._registerSchemas = function(e) {
        for (var t = 0; t < e.length; t++) awa._schemas[e[t].name] = e[t]
      }, awa.console = window.console || {}, awa.console.fallback = awa.console.log || function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[44491:44493]", functionData => eval(functionData))}, o = ["log", "info", "warn", "error", "trace"], s = 0; s < o.length; s++) c = o[s], awa.console[c] || (awa.console[c] = awa.console.fallback);
    awa.extendCoreData = function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[44674:44756]", functionData => eval(functionData))}
  }(), awa._registerSchemas([{
    name: "Ms.Cll.Javascript.CorsDisallowed",
    "Ms.Cll.Javascript.CorsDisallowed": {
      part: "C",
      def: {
        fields: [{
          req: !0,
          name: "eventName",
          type: "string"
        }]
      }
    }
  }, {
    name: "Ms.Cll.Javascript.EventTooLong",
    "Ms.Cll.Javascript.EventTooLong": {
      part: "C",
      def: {
        fields: [{
          req: !0,
          name: "eventName",
          type: "string"
        }, {
          req: !0,
          name: "payloadLength",
          type: "int32"
        }]
      }
    }
  }, {
    name: "Ms.Cll.Javascript.Error",
    "Ms.Telemetry.Error": {
      part: "B",
      def: {
        fields: [{
          name: "errorName",
          type: "string"
        }, {
          name: "errorMessage",
          type: "string"
        }, {
          name: "severity",
          type: "int32"
        }, {
          name: "errorType",
          type: "string"
        }, {
          name: "errorCode",
          type: "int32"
        }, {
          name: "lineNumber",
          type: "uint32"
        }, {
          name: "isDisplayed",
          type: "bool"
        }, {
          name: "errorLocation",
          type: "string"
        }, {
          name: "errorMethod",
          type: "string"
        }]
      }
    },
    "Ms.Cll.Javascript.Error": {
      part: "C",
      def: {
        fields: [{
          req: !0,
          name: "code",
          type: "int32"
        }, {
          req: !0,
          name: "message",
          type: "string"
        }]
      }
    }
  }, {
    name: "Ms.Webi.ClientError",
    "Ms.Webi.ClientError": {
      part: "B",
      def: {
        fields: [{
          req: !0,
          name: "errorInfo",
          type: "string"
        }, {
          name: "wasDisplayed",
          type: "bool"
        }, {
          name: "customSessionGuid",
          type: "string"
        }, {
          name: "impressionGuid",
          type: "string"
        }, {
          name: "serverImpressionGuid",
          type: "string"
        }, {
          name: "errorName",
          type: "string"
        }, {
          name: "errorMessage",
          type: "string"
        }, {
          name: "severity",
          type: "int32"
        }, {
          name: "errorType",
          type: "string"
        }, {
          name: "errorCode",
          type: "int32"
        }, {
          name: "lineNumber",
          type: "uint32"
        }, {
          name: "isDisplayed",
          type: "bool"
        }, {
          name: "errorLocation",
          type: "string"
        }, {
          name: "errorMethod",
          type: "string"
        }]
      }
    }
  }, {
    name: "Ms.Webi.OutgoingRequest",
    "Ms.Qos.OutgoingServiceRequest": {
      part: "B",
      def: {
        fields: [{
          req: !0,
          name: "operationName",
          type: "string"
        }, {
          name: "targetUri",
          type: "string"
        }, {
          req: !0,
          name: "latencyMs",
          type: "int32"
        }, {
          name: "serviceErrorCode",
          type: "int32"
        }, {
          req: !0,
          name: "succeeded",
          type: "bool"
        }, {
          name: "requestMethod",
          type: "string"
        }, {
          name: "responseContentType",
          type: "string"
        }, {
          name: "protocol",
          type: "string"
        }, {
          name: "protocolStatusCode",
          type: "string"
        }, {
          req: !0,
          name: "dependencyOperationName",
          type: "string"
        }, {
          name: "dependencyOperationVersion",
          type: "string"
        }, {
          req: !0,
          name: "dependencyName",
          type: "string"
        }, {
          name: "dependencyType",
          type: "string"
        }, {
          name: "responseSizeBytes",
          type: "int32"
        }, {
          name: "requestStatus",
          type: "int32"
        }]
      }
    },
    "Ms.Webi.OutgoingRequest": {
      part: "C",
      def: {
        fields: [{
          name: "customSessionGuid",
          type: "string"
        }, {
          name: "impressionGuid",
          type: "string"
        }, {
          name: "message",
          type: "string"
        }, {
          name: "retryCount",
          type: "int32"
        }, {
          name: "customData",
          type: "string"
        }, {
          name: "serverImpressionGuid",
          type: "string"
        }]
      }
    }
  }, {
    name: "Ms.Webi.PageView",
    "Ms.Content.PageView": {
      part: "B",
      def: {
        fields: [{
          name: "ver",
          type: "string"
        }, {
          req: !0,
          name: "impressionGuid",
          type: "string"
        }, {
          req: !0,
          name: "pageName",
          type: "string"
        }, {
          name: "uri",
          type: "string"
        }, {
          name: "referrerUri",
          type: "string"
        }, {
          name: "pageType",
          type: "string"
        }, {
          name: "pageTags",
          type: "string"
        }, {
          name: "product",
          type: "string"
        }, {
          name: "screenState",
          type: "int32"
        }, {
          name: "actionType",
          type: "string"
        }, {
          name: "behavior",
          type: "int32"
        }, {
          name: "resHeight",
          type: "int32"
        }, {
          name: "resWidth",
          type: "int32"
        }, {
          name: "vpHeight",
          type: "int32"
        }, {
          name: "vpWidth",
          type: "int32"
        }, {
          name: "market",
          type: "string"
        }]
      }
    },
    "Ms.Webi.PageView": {
      part: "C",
      def: {
        fields: [{
          name: "cookieEnabled",
          type: "bool"
        }, {
          name: "flashInstalled",
          type: "bool"
        }, {
          name: "flashVersion",
          type: "string"
        }, {
          name: "cookies",
          type: "string"
        }, {
          name: "isJs",
          type: "bool"
        }, {
          name: "title",
          type: "string"
        }, {
          name: "isLoggedIn",
          type: "bool"
        }, {
          name: "isManual",
          type: "bool"
        }, {
          name: "serverImpressionGuid",
          type: "string"
        }]
      }
    }
  }, {
    name: "Ms.Webi.ContentUpdate",
    "Ms.Content.ContentUpdate": {
      part: "B",
      def: {
        fields: [{
          name: "ver",
          type: "string"
        }, {
          req: !0,
          name: "impressionGuid",
          type: "string"
        }, {
          req: !0,
          name: "pageName",
          type: "string"
        }, {
          name: "uri",
          type: "string"
        }, {
          name: "pageTags",
          type: "string"
        }, {
          name: "pageHeight",
          type: "int32"
        }, {
          name: "vpHeight",
          type: "int32"
        }, {
          name: "vpWidth",
          type: "int32"
        }, {
          name: "market",
          type: "string"
        }, {
          name: "actionType",
          type: "string"
        }, {
          name: "behavior",
          type: "int32"
        }, {
          name: "vScrollOffset",
          type: "int32"
        }, {
          name: "hScrollOffset",
          type: "int32"
        }, {
          name: "contentVer",
          type: "string"
        }, {
          req: !0,
          name: "content",
          type: "string"
        }]
      }
    },
    "Ms.Webi.ContentUpdate": {
      part: "C",
      def: {
        fields: [{
          name: "pageLoadTime",
          type: "int32"
        }, {
          name: "title",
          type: "string"
        }, {
          name: "isJs",
          type: "bool"
        }, {
          name: "cookieEnabled",
          type: "bool"
        }, {
          name: "isLoggedIn",
          type: "bool"
        }, {
          name: "isManual",
          type: "bool"
        }, {
          name: "isDomComplete",
          type: "bool"
        }, {
          name: "serverImpressionGuid",
          type: "string"
        }, {
          name: "timings",
          type: "string"
        }]
      }
    }
  }, {
    name: "Ms.Webi.PageAction",
    "Ms.Content.PageAction": {
      part: "B",
      def: {
        fields: [{
          name: "ver",
          type: "string"
        }, {
          req: !0,
          name: "impressionGuid",
          type: "string"
        }, {
          req: !0,
          name: "pageName",
          type: "string"
        }, {
          name: "uri",
          type: "string"
        }, {
          name: "destUri",
          type: "string"
        }, {
          name: "market",
          type: "string"
        }, {
          name: "pageType",
          type: "string"
        }, {
          name: "pageTags",
          type: "string"
        }, {
          name: "product",
          type: "string"
        }, {
          name: "screenState",
          type: "int32"
        }, {
          name: "actionType",
          type: "string"
        }, {
          name: "behavior",
          type: "int32"
        }, {
          name: "contentVer",
          type: "string"
        }, {
          name: "content",
          type: "string"
        }]
      }
    },
    "Ms.Webi.PageAction": {
      part: "C",
      def: {
        fields: [{
          name: "timeToAction",
          type: "int32"
        }, {
          name: "cookieEnabled",
          type: "bool"
        }, {
          name: "cookies",
          type: "string"
        }, {
          name: "isJs",
          type: "bool"
        }, {
          name: "title",
          type: "string"
        }, {
          name: "referrerUri",
          type: "string"
        }, {
          name: "isLoggedIn",
          type: "bool"
        }, {
          name: "isManual",
          type: "bool"
        }, {
          name: "serverImpressionGuid",
          type: "string"
        }]
      }
    }
  }, {
    name: "Ms.Webi.PageUnload",
    "Ms.Content.PageUnload": {
      part: "B",
      def: {
        fields: [{
          name: "ver",
          type: "string"
        }, {
          req: !0,
          name: "impressionGuid",
          type: "string"
        }, {
          req: !0,
          name: "pageName",
          type: "string"
        }, {
          name: "uri",
          type: "string"
        }]
      }
    },
    "Ms.Webi.PageUnload": {
      part: "C",
      def: {
        fields: [{
          name: "dwellTime",
          type: "int32"
        }, {
          name: "scrollDepth",
          type: "string"
        }, {
          name: "serverImpressionGuid",
          type: "string"
        }]
      }
    }
  }]), awa.ct = function() {
    function e(e) {
      var n, a, r, i;
      awa.isAvailable && (K = e, Q = K.autoCapture, se = !0 === K.useShortNameForContentBlob ? oe.shortNames : oe.longNames, Q.pageView && (!0 === K.isLoggedIn && !0 === K.shareAuthStatus ? t(function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[55894:55968]", functionData => eval(functionData))}) : p({
        isAuto: !0
      })), Q.click && (window.addEventListener ? (n = -1 !== navigator.appVersion.indexOf("MSIE") ? "click" : "mousedown", window.addEventListener(n, l, !1), window.addEventListener("keyup", l, !1)) : document.attachEvent && (document.attachEvent("onclick", l), document.attachEvent("keyup", l))), Q.jsError && Y.init(), Q.scroll && (a = g(null, function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[56352:56450]", functionData => eval(functionData))}, K.debounceMs.scroll), window.addEventListener ? window.addEventListener("scroll", a) : window.attachEvent && window.attachEvent("onscroll", a)), Q.resize && (r = g(function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[56627:56725]", functionData => eval(functionData))}, null, K.debounceMs.resize), window.addEventListener ? window.addEventListener("resize", r) : window.attachEvent && window.attachEvent("onresize", r)), Q.onUnload && (i = function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[56908:56977]", functionData => eval(functionData))}, window.addEventListener ? window.addEventListener("scroll", i) : window.attachEvent && window.attachEvent("onscroll", i), awa.timespanHandler.recordTimeSpan("dwellTime", !1), window.addEventListener ? (window.addEventListener("beforeunload", y), window.addEventListener("unload", y)) : window.attachEvent && (window.attachEvent("onbeforeunload", y), window.attachEvent("onunload", y))), t(awa.ct.domReadyTasksWrapper))
    }

    function t(e) {
      /in/.test(document.readyState) ? setTimeout("awa.ct.onDomReadyDo(" + e + ")", 9) : e.call()
    }

    function n() {
      K.syncMuid && i(), Q.onLoad && ("complete" === document.readyState ? m() : window.addEventListener ? window.addEventListener("load", m) : window.attachEvent && window.attachEvent("onload", m))
    }

    function a() {
      awa.ct.domReadyTasks()
    }

    function r() {
      if (K.callback && "function" == typeof K.callback.pageName) return K.callback.pageName();
      if (K.coreData.pageName) return K.coreData.pageName;
      var e = window.location.pathname,
        t = e.split("/");
      return t.length > 2 && "" !== t[2] ? t[2] : "Home"
    }

    function i() {
      var e, t, n = te.getMuidHost(K.muidDomain || "microsoft.com");
      n ? (e = (window.location.protocol || "http:") + "//" + n + "/c.gif?DI=4050&did=1&t=", t = document.createElement("IMG"), t.style.display = "none", t.src = e, t.hidden = "", t["aria-hidden"] = "true", t.role = "presentation") : awa.logger.logWarning("Unable to get a muid host for the configured muidDomain '" + K.muidDomain + "'.  Unable to sync muid")
    }

    function o(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[58587:58678]", functionData => eval(functionData))}

    function s(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[58698:58789]", functionData => eval(functionData))}

    function c(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[58809:58866]", functionData => eval(functionData))}

    function u(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[58886:58943]", functionData => eval(functionData))}

    function l(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[58963:59744]", functionData => eval(functionData))}

    function d(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[59764:59856]", functionData => eval(functionData))}

    function g(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[59882:60153]", functionData => eval(functionData))}

    function p(e) {
      var t, n = {},
        a = awa.utils.extend(!0, K.coreData.pageTags);
      a.metaTags = R(n), k(a), "function" == typeof K.callback.pageViewPageTags && (a = te.extend(!0, a, K.callback.pageViewPageTags()));
      var i = V(),
        o = {
          name: "Ms.Webi.PageView",
          data: {
            "Ms.Content.PageView": {
              ver: J,
              impressionGuid: Z.getPageViewImpressionGuid(),
              pageName: r(),
              uri: $(),
              referrerUri: K.coreData.referrerUri,
              resHeight: i.h,
              resWidth: i.w,
              market: n.market,
              pageType: n.pageType,
              pageTags: a,
              product: n.product,
              behavior: n.behavior ? n.behavior : awa.behavior.UNDEFINED
            },
            "Ms.Webi.PageView": {
              cookieEnabled: B(),
              cookies: L(),
              isJs: !0,
              title: te.getTitle(),
              isLoggedIn: K.isLoggedIn,
              isManual: !0,
              serverImpressionGuid: n.serverImpressionGuid
            }
          },
          isSensitive: n.isSensitive,
          env: n.env
        },
        s = o.data["Ms.Content.PageView"],
        c = o.data["Ms.Webi.PageView"];
      Q.addin && (t = D(), c.flashInstalled = t.installed || !1, c.flashVersion = t.version || ""), e && (b(o, s, c, e), e.pageTags && (s.pageTags = te.extend(!0, a, e.pageTags))), s.pageTags = te.stringifyField("pageTags", s.pageTags), ee.SendOrScheduleEvent(o, !0)
    }

    function m() {
      f({
        isAuto: !0,
        isDomComplete: !0
      })
    }

    function f(e) {
      var t, n = {},
        a = awa.utils.extend(!0, K.coreData.pageTags);
      a.metaTags = R(n), k(a), e && e.isDomComplete && !0 === Q.perf && window.performance && (window.performance.timing && (a.timing = te.stringifyField("timing", window.performance.timing)), !0 === Q.assets && (t = te.getPerformanceData()) && (a.AssetPerformance = te.stringifyField("AssetPerformance", t))), "function" == typeof K.callback.contentUpdatePageTags && (a = te.extend(!0, a, K.callback.contentUpdatePageTags()));
      var i = F(),
        o = W(),
        s = T(i),
        c = {
          name: "Ms.Webi.ContentUpdate",
          data: {
            "Ms.Content.ContentUpdate": {
              ver: J,
              impressionGuid: Z.getImpressionGuid(),
              pageName: r(),
              uri: $(),
              pageTags: a,
              pageHeight: document.body.scrollHeight,
              vpHeight: i.h,
              vpWidth: i.w,
              market: n.market,
              behavior: n.behavior ? n.behavior : awa.behavior.UNDEFINED,
              vScrollOffset: o.v,
              hScrollOffset: o.h,
              contentVer: z,
              content: C(s)
            },
            "Ms.Webi.ContentUpdate": {
              title: te.getTitle(),
              cookieEnabled: B(),
              isJs: !0,
              isManual: !0,
              isDomComplete: !1,
              isLoggedIn: K.isLoggedIn,
              serverImpressionGuid: n.serverImpressionGuid
            }
          },
          isSensitive: n.isSensitive,
          env: n.env
        },
        u = c.data["Ms.Content.ContentUpdate"],
        l = c.data["Ms.Webi.ContentUpdate"];
      e && (b(c, u, l, e), e.pageTags && (u.pageTags = te.extend(!0, a, e.pageTags))), u.pageTags = te.stringifyField("pageTags", u.pageTags), ee.SendOrScheduleEvent(c, !1)
    }

    function v(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[63690:63714]", functionData => eval(functionData))}

    function w(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[63737:63758]", functionData => eval(functionData))}

    function h(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[63781:65683]", functionData => eval(functionData))}

    function y() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[65702:66289]", functionData => eval(functionData))}

    function b(e, t, n, a) {
      a.appId && (e.appId = a.appId), a.behavior && j(t, a.behavior), a.uri && (t.uri = a.uri), a.referrerUri && (t.referrerUri = a.referrerUri), a.pageName && (t.pageName = a.pageName), a.actionType && (t.actionType = a.actionType), a.pageHeight && (t.pageHeight = a.pageHeight), a.content && (t.content = te.bracketIt(JSON.stringify(a.content))), a.targetUri && (t.destUri = a.targetUri), a.vScrollOffset && (t.vScrollOffset = a.vScrollOffset), a.hScrollOffset && (t.hScrollOffset = a.hScrollOffset), n.isManual = !0 !== a.isAuto || void 0, a.isDomComplete && (n.isDomComplete = a.isDomComplete, n.pageLoadTime = te.getPageLoadTime()), a.pageLoadTime && (n.pageLoadTime = a.pageLoadTime), a.timings && (n.timings = JSON.stringify(a.timings))
    }

    function E() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[67088:67288]", functionData => eval(functionData))}

    function T(e) {
      return {
        top: 0,
        bottom: e.h,
        left: 0,
        right: e.w
      }
    }

    function C(e) {
      var t = [];
      return S(document.querySelectorAll(te.bracketIt(se.areaName) + "," + te.bracketIt(se.slotNumber) + "," + te.bracketIt(K.biBlobAttributeTag)), t, e), JSON.stringify(t)
    }

    function S(e, t, n) {
      var a, r, i;
      if (e)
        for (a = 0; a < e.length; a++) r = e[a], d(r) || te.isElementTrulyVisible(r, n) && (i = A(r, !1)) && t.push(i)
    }

    function I(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[67833:68713]", functionData => eval(functionData))}

    function A(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[68736:70550]", functionData => eval(functionData))}

    function N(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[70570:70973]", functionData => eval(functionData))}

    function O(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[70993:71322]", functionData => eval(functionData))}

    function L() {
      var e, t, n, a = "",
        r = {},
        i = [],
        o = K.cookiesToCollect;
      if (!1 === K.shareAuthStatus) i = o;
      else
        for (e = 0; e < o.length; e++) "ANON" !== o[e] && i.push(o[e]);
      try {
        try {
          window.varCustomerCookies && window.varCustomerCookies.length > 0 && (i = i.concat(window.varCustomerCookies))
        } catch (e) {}
        for (t in i) r.hasOwnProperty(i[t]) || (r[i[t]] = "", "" !== (n = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(i[t]).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1"))) && (a += i[t] + "=" + n + ";"))
      } catch (e) {}
      return a
    }

    function x(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[72070:72459]", functionData => eval(functionData))}

    function M(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[72479:72765]", functionData => eval(functionData))}

    function D() {
      var e, t, n, a = {};
      if (navigator.plugins["Shockwave Flash"]) a.installed = !0, e = navigator.plugins["Shockwave Flash"], a.version = e.description.split(" ")[2];
      else if (-1 !== navigator.userAgent.indexOf("MSIE"))
        for (t = (new Date).getFullYear() - 1992, n = t; n > 0; n--) try {
          new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n), a.installed = !0, a.version = n + ".0";
          break
        } catch (e) {}
      return a
    }

    function k(e) {
      if (!e.enabledFeatures) {
        var t = X.getCookie("Features");
        t && (e.enabledFeatures = t)
      }
    }

    function R(e) {
      var t = {},
        n = {};
      return t = P("awa-", !0), e.env = U(t, K.coreData, "env"), e.pageType = U(t, K.coreData, "pageType"), e.product = U(t, K.coreData, "product"), e.market = U(t, K.coreData, "market"), e.serverImpressionGuid = U(t, K.coreData, "serverImpressionGuid"), e.isSensitive = U(t, K.coreData, "isSensitive"), n = P("ms.", !1), te.extend(!0, t, n)
    }

    function U(e, t, n) {
      var a = te.extractFieldFromObject(e, n);
      return t[n] ? t[n] : a
    }

    function P(e, t) {
      for (var n, a, r, i = {}, o = document.querySelectorAll("meta"), s = 0; s < o.length; s++) n = o[s], n.name && (a = n.name.toLowerCase(), 0 === a.indexOf(e) && (r = t ? n.name.replace(e, "") : n.name, i[r] = n.content));
      return i
    }

    function V() {
      var e = {
        h: 0,
        w: 0
      };
      return window.screen && (e.h = screen.height, e.w = screen.width), e
    }

    function F() {
      var e = {
        h: 0,
        w: 0
      };
      return window.screen && (e.h = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight, e.w = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth), e
    }

    function W() {
      return {
        h: parseInt(document.body.scrollLeft || document.documentElement.scrollLeft || window.pageXOffset || 0, 10),
        v: parseInt(document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0, 10)
      }
    }

    function B() {
      if (navigator.cookieEnabled) return navigator.cookieEnabled;
      var e = "MC0",
        t = X.getCookie(e);
      return t || (document.cookie = e + "=1", t = X.getCookie(e)), !!t
    }

    function q(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[75161:75355]", functionData => eval(functionData))}

    function H(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[75375:75593]", functionData => eval(functionData))}

    function G(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[75613:75815]", functionData => eval(functionData))}

    function j(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[75838:76064]", functionData => eval(functionData))}

    function $() {
      return "" === K.coreData.requestUri ? window.location.href : K.coreData.requestUri
    }
    var J = "1.0",
      z = "2.0",
      _ = 200,
      K = {},
      Q = {},
      X = awa.cookie,
      Y = awa.errorHandler,
      Z = awa.ids,
      ee = awa.vortexEvents,
      te = awa.utils,
      ne = awa.actionType,
      ae = {
        h: 0,
        v: 0
      },
      re = "data-bi-dnt",
      ie = !1,
      oe = {
        longNames: {
          isShortNames: !1,
          id: "data-bi-id",
          areaName: "data-bi-area",
          slotNumber: "data-bi-slot",
          contentName: "data-bi-name",
          contentSource: "data-bi-source",
          templateName: "data-bi-view",
          productId: "data-bi-product",
          contentType: "data-bi-type"
        },
        shortNames: {
          isShortNames: !0,
          id: "data-bi-id",
          areaName: "data-bi-an",
          slotNumber: "data-bi-sn",
          contentName: "data-bi-cn",
          contentSource: "data-bi-cs",
          templateName: "data-bi-tn",
          productId: "data-bi-pid",
          contentType: "data-bi-ct"
        }
      },
      se = oe.longNames,
      ce = {
        BUTTON: !0,
        CHECKBOX: !0,
        RADIO: !0,
        RESET: !0,
        SUBMIT: !0
      };
    return {
      initialize: e,
      capturePageView: p,
      captureContentUpdate: f,
      capturePageAction: w,
      captureContentPageAction: v,
      domReadyTasksWrapper: a,
      onDomReadyDo: t,
      domReadyTasks: n
    }
  }(), awa.service = function() {
    function e(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[77659:77773]", functionData => eval(functionData))}
    var t = awa.timespanHandler,
      n = !0,
      a = !1,
      r = null,
      i = function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[77873:82701]", functionData => eval(functionData))};
    return {
      post: function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[82740:82829]", functionData => eval(functionData))},
      get: function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[82854:82973]", functionData => eval(functionData))},
      put: function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[82998:83086]", functionData => eval(functionData))},
      del: function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[83111:83202]", functionData => eval(functionData))},
      patch: function(e) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[83229:83319]", functionData => eval(functionData))},
      doNotChangeSupportCors: function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[83362:83386]", functionData => eval(functionData))},
      alwaysAddCvToRequestHeader: function() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[83433:83457]", functionData => eval(functionData))},
      setTargetUriOverride: e
    }
  }();
var DefaultSignInHandler;
! function(e) {
  var t = function() {
    function e() {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[83584:83586]", functionData => eval(functionData))}
    return e.signIn = function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[83627:83714]", functionData => eval(functionData))}, e.startDefaultSignIn = function(e, t, n, a) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[83760:84261]", functionData => eval(functionData))}, e.handleSignInResult = function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[84304:84917]", functionData => eval(functionData))}, e.updateQueryStringParameter = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_iao5al.js[84965:85159]", functionData => eval(functionData))}, e
  }();
  e.DefaultSignInAdapter = t
}(DefaultSignInHandler || (DefaultSignInHandler = {}));