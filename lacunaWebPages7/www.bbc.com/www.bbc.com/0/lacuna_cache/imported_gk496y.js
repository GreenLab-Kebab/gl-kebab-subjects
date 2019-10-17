define("orb/api", function() {
    "use strict";
    var i = {
        layout: []
      },
      t = {};
    return {
      layout: function(e) {
        i.layout.push(e)
      },
      trigger: function(e, n) {
        if (i[e])
          for (var t = 0, o = i[e].length; t < o; t++) i[e][t](n)
      },
      config: function(e, n) {
        return 0 === arguments.length ? t : 1 === arguments.length ? t[e] : void(t[e] = n)
      }
    }
  }), define("orb/lib/_script", function(l) {
    "use strict";
    var h = 1,
      p = {
        inject: function(e) {
          var n;
          return (n = document.createElement("script")).src = e, document.getElementsByTagName("head")[0].appendChild(n), n
        },
        jsonp: function(e, n, t) {
          var o, i, r, a = !1;
          o = (t = t || {}).callbackName ? t.callbackName : "jsonpcb" + h++, t.timeout && (r = setTimeout(function() {
            a = !0, t.error && t.error()
          }, t.timeout));
          for (var c = o.split("."), s = c[c.length - 1], d = window, u = 0, f = c.length; u < f - 1; u++) d = d[c[u]];
          d[s] = function(e) {
            clearTimeout(r), a || n(e), i && i.parentNode && i.parentNode.removeChild(i), d[s] = l
          }, i = p.inject(e + (-1 === e.indexOf("?") ? "?" : "&") + "callback=" + o)
        }
      };
    return p
  }),
  function() {
    function i(e, n) {
      document.addEventListener ? e.addEventListener("scroll", n, !1) : e.attachEvent("scroll", n)
    }

    function v(e) {
      this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(e)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
    }

    function y(e, n) {
      e.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-synthesis:none;font:" + n + ";"
    }

    function r(e) {
      var n = e.a.offsetWidth,
        t = n + 100;
      return e.f.style.width = t + "px", e.c.scrollLeft = t, e.b.scrollLeft = e.b.scrollWidth + 100, e.g !== n && (e.g = n, !0)
    }

    function C(e, n) {
      function t() {
        var e = o;
        r(e) && e.a.parentNode && n(e.g)
      }
      var o = e;
      i(e.b, t), i(e.c, t), r(e)
    }

    function e(e, n) {
      var t = n || {};
      this.family = e, this.style = t.style || "normal", this.weight = t.weight || "normal", this.stretch = t.stretch || "normal"
    }

    function t() {
      return null === n && (n = !!document.fonts), n
    }

    function E(e, n) {
      return [e.style, e.weight, function() {
        if (null === a) {
          var e = document.createElement("div");
          try {
            e.style.font = "condensed 100px sans-serif"
          } catch (e) {}
          a = "" !== e.style.font
        }
        return a
      }() ? e.stretch : "", "100px", n].join(" ")
    }
    var x, o, a, n;
    n = a = o = x = null, e.prototype.load = function(e, n) {
      var p = this,
        m = e || "BESbswy",
        w = 0,
        b = n || 3e3,
        g = (new Date).getTime();
      return new Promise(function(l, h) {
        if (t() && ! function() {
            if (null === o)
              if (t() && /Apple/.test(window.navigator.vendor)) {
                var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                o = !!e && parseInt(e[1], 10) < 603
              } else o = !1;
            return o
          }()) {
          var e = new Promise(function(t, e) {
              ! function n() {
                (new Date).getTime() - g >= b ? e() : document.fonts.load(E(p, '"' + p.family + '"'), m).then(function(e) {
                  1 <= e.length ? t() : setTimeout(n, 25)
                }, function() {
                  e()
                })
              }()
            }),
            n = new Promise(function(e, n) {
              w = setTimeout(n, b)
            });
          Promise.race([n, e]).then(function() {
            clearTimeout(w), l(p)
          }, function() {
            h(p)
          })
        } else ! function(n) {
          document.body ? n() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function e() {
            document.removeEventListener("DOMContentLoaded", e), n()
          }) : document.attachEvent("onreadystatechange", function e() {
            "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", e), n())
          })
        }(function() {
          function t() {
            var e;
            (e = -1 != a && -1 != c || -1 != a && -1 != s || -1 != c && -1 != s) && ((e = a != c && a != s && c != s) || (null === x && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), x = !!e && (parseInt(e[1], 10) < 536 || 536 === parseInt(e[1], 10) && parseInt(e[2], 10) <= 11)), e = x && (a == n && c == n && s == n || a == d && c == d && s == d || a == u && c == u && s == u)), e = !e), e && (f.parentNode && f.parentNode.removeChild(f), clearTimeout(w), l(p))
          }
          var o = new v(m),
            i = new v(m),
            r = new v(m),
            a = -1,
            c = -1,
            s = -1,
            n = -1,
            d = -1,
            u = -1,
            f = document.createElement("div");
          f.dir = "ltr", y(o, E(p, "sans-serif")), y(i, E(p, "serif")), y(r, E(p, "monospace")), f.appendChild(o.a), f.appendChild(i.a), f.appendChild(r.a), document.body.appendChild(f), n = o.a.offsetWidth, d = i.a.offsetWidth, u = r.a.offsetWidth,
            function e() {
              if ((new Date).getTime() - g >= b) f.parentNode && f.parentNode.removeChild(f), h(p);
              else {
                var n = document.hidden;
                !0 !== n && void 0 !== n || (a = o.a.offsetWidth, c = i.a.offsetWidth, s = r.a.offsetWidth, t()), w = setTimeout(e, 50)
              }
            }(), C(o, function(e) {
              a = e, t()
            }), y(o, E(p, '"' + p.family + '",sans-serif')), C(i, function(e) {
              c = e, t()
            }), y(i, E(p, '"' + p.family + '",serif')), C(r, function(e) {
              s = e, t()
            }), y(r, E(p, '"' + p.family + '",monospace'))
        })
      })
    }, "undefined" != typeof module ? module.exports = e : (window.FontFaceObserver = e, window.FontFaceObserver.prototype.load = e.prototype.load);
    var c = navigator.userAgent.toLowerCase();

    function s(n, e, t) {
      if (-1 != document.documentElement.className.indexOf(e)) {
        var o = new FontFaceObserver(n),
          i = new FontFaceObserver(n, {
            weight: "bold"
          });
        Promise.all([o.load(), i.load()]).then(function() {
          document.documentElement.className += " " + t, require.defined("orb/nav") && require(["orb/nav"], function(e) {
            e.refresh()
          })
        }).catch(function(e) {
          console.log("Error loading " + n + " font: ", e)
        })
      }
    } - 1 !== c.indexOf("msie") && parseInt(c.split("msie")[1], 10) <= 10 || (s("ReithSans", "b-reith-sans-font", "b-reith-sans-loaded"), s("ReithSerif", "b-reith-serif-font", "b-reith-serif-loaded"))
  }(),
  function() {
    "use strict";

    function n(e, n) {
      return -1 !== e.indexOf(n.toUpperCase())
    }
    var t = ["GB", "IM", "JE", "GG"],
      o = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GB", "GR", "HU", "HR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"],
      e = {
        isUKCombined: function(e) {
          return !!e && n(t, e)
        },
        isEU: function(e) {
          return !!e && n(o, e)
        }
      };
    "function" == typeof define && define.amd && define("orb/bbcuser", function() {
      return e
    })
  }(), window.orb = window.orb || {}, window.name.match(/ orb_fig_referrer=([^ ]*)/) && (window.orb.referrer = decodeURIComponent(RegExp.$1), window.name = window.name.replace(/ orb_fig_referrer=([^ ]*)/, ""));
var jsonpTimeout = 1e4;
window.orb.fig = function() {
  function i(e) {
    return e ? f[e] : f
  }
  var c, r = {
      ad: 0,
      ap: 0,
      ck: 1,
      eu: 1,
      uk: 1,
      df: 1
    },
    s = "ckns_orb_fig_cache",
    t = !1,
    a = !1,
    d = !1,
    u = !1,
    f = r,
    l = [],
    o = [];

  function h(e) {
    return e ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : document.cookie
  }

  function p(e) {
    var n = {},
      t = ["ad", "ap", "ck", "eu", "uk"];
    for (var o in t) {
      var i = t[o];
      e.hasOwnProperty(i) && (n[i] = e[i])
    }
    return n
  }
  return i.load = function(e, n) {
    i.figFailed() ? n && "function" == typeof n && n(i) : i.isDefault() ? (e && "function" == typeof e && l.push(e), n && "function" == typeof n && o.push(n)) : e && "function" == typeof e && e(i)
  }, i.isDefault = function() {
    return f.df ? 1 : 0
  }, i.geo = {
    isUK: function() {
      return i("uk")
    },
    isEU: function() {
      return i("eu")
    }
  }, i.redirect = function() {
    var o = (window.document.referrer || "").toLowerCase(),
      e = (window.location.hostname || "").toLowerCase(),
      i = window.location.href || "";
    if (window.bbcredirection && (window.bbcredirection.geo || window.bbcredirection.device) && o !== i.toLowerCase()) {
      var n = /(^|\.)bbc\.co\.uk$/i.test(e),
        t = /(^|\.)bbc\.com$/i.test(e),
        r = f.uk,
        a = i;
      window.bbcredirection.geo && (t && r ? a = i.replace(/^(.+?bbc)\.com/i, "$1.co.uk") : n && !r && (a = i.replace(/^(.+?bbc)\.co\.uk/i, "$1.com"))), window.bbcpage.loadModule(["orb/cookies"]).then(function(e) {
        if (a !== i && o !== a.toLowerCase()) {
          var n = c === window.location.hostname,
            t = c && -1 < a.indexOf(c);
          try {
            e.del(s, {
              domain: ".bbc.co.uk",
              path: "/"
            }), e.del(s, {
              domain: ".bbc.com",
              path: "/"
            }), n || t || (window.name += " orb_fig_last_hostname=" + window.location.hostname, window.name += " orb_fig_referrer=" + encodeURIComponent(document.referrer), window.location.replace(a))
          } catch (e) {
            console.log("redirection_fail")
          }
        }
      })
    }
  }, i.updateCacheCookie = function(e) {
    a = !1;
    var n = new Date;
    n.setTime(n.getTime() + 432e6), window.bbcpage.loadModule(["orb/cookies"]).then(function() {
      window.bbccookies.set(s, JSON.stringify(e), {
        domain: ".bbc.co.uk",
        expires: n,
        path: "/"
      }), window.bbccookies.set(s, JSON.stringify(e), {
        domain: ".bbc.com",
        expires: n,
        path: "/"
      })
    })
  }, i.setData = function(e) {
    f = e, i.redirect()
  }, i.figSuccess = function(e) {
    var n = p(e);
    i.updateCacheCookie(n), i.isCached() || i.setData(n);
    for (var t = 0, o = l.length; t < o; t++) l[t](i)
  }, i.figError = function() {
    if (t = !0, i.isDefault())
      for (var e = 0, n = o.length; e < n; e++) o[e](i)
  }, i.figFailed = function() {
    return t
  }, i.isOverridden = function() {
    return u
  }, i.isCached = function() {
    return d
  }, i.isStale = function() {
    return a
  }, i.init = function() {
    window.name.match(/ orb_fig_last_hostname=([^ ]*)/) && (c = decodeURIComponent(RegExp.$1), window.name = window.name.replace(/ orb_fig_last_hostname=([^ ]*)/, ""));
    var e = h("ckns_orb_fig");
    if (e) {
      var o = {};
      return e.replace(/([a-z]{2}):([0-9]+)/g, function(e, n, t) {
        o[n] = +t
      }), f = o, i.redirect(), u = !0, i
    }
    u = !1;
    var n = h(s);
    if (n) try {
      var t = JSON.parse(n);
      f = t, i.redirect(), d = a = !0
    } catch (e) {
      f = r, d = !(jsonpTimeout = 3e3)
    } else f = r, d = !(jsonpTimeout = 3e3);
    return !window.orb_fig_blocking || e || n || (window.orb.orb_fig = function(e) {
      f = p(e || r), i.updateCacheCookie(f), i.redirect()
    }, document.write('<script src="' + window.orb.figUrl + '"><\/script>')), i
  }, i.init()
}(), define("orb/fig", ["orb/lib/_script"], function(e) {
  var n = window.orb.fig;
  return (n.isDefault() || n.isStale()) && e.jsonp(window.orb.figUrl, n.figSuccess, {
    callbackName: "orb.orb_fig",
    timeout: jsonpTimeout,
    error: n.figError
  }), n
});
//# sourceMappingURL=api.min.js.map