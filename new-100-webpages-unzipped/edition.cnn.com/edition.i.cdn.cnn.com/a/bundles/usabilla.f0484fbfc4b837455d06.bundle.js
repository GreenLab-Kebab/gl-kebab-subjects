! function(e) {
    var n = {};

    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var i in e) t.d(r, i, function(n) {
                return e[n]
            }.bind(null, i));
        return r
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 98)
}({
    98: function(e, n, t) {
        CNN.INJECTOR.loadFeature("footer").then((function() {
            "use strict";
            t(99)
        }))
    },
    99: function(e, n) {
        window.lightningjs || function(e) {
            function n(n, r) {
                return r && (r += (/\?/.test(r) ? "&" : "?") + "lv=1"), e[n] || function() {
                    var i = window,
                        o = document,
                        a = n,
                        u = o.location.protocol,
                        l = "load",
                        d = 0;
                    ! function() {
                        function n() {
                            c.P(l), c.w = 1, e[a]("_load")
                        }
                        e[a] = function() {
                            function n() {
                                return n.id = r, e[a].apply(n, arguments)
                            }
                            var t, r = ++d;
                            return t = this && this != i && this.id || 0, (c.s = c.s || []).push([r, t, arguments]), n.then = function(e, t, i) {
                                var o = c.fh[r] = c.fh[r] || [],
                                    a = c.eh[r] = c.eh[r] || [],
                                    u = c.ph[r] = c.ph[r] || [];
                                return e && o.push(e), t && a.push(t), i && u.push(i), n
                            }, n
                        };
                        var c = e[a]._ = {};
                        c.fh = {}, c.eh = {}, c.ph = {}, c.l = r ? r.replace(/^\/\//, ("https:" == u ? u : "http:") + "//") : r, c.p = {
                            0: +new Date
                        }, c.P = function(e) {
                            c.p[e] = new Date - c.p[0]
                        }, c.w && n(), i.addEventListener ? i.addEventListener(l, n, !1) : i.attachEvent("on" + l, n);
                        c.l && setTimeout((function e() {
                            function n() {
                                return ["<head></head><", r, ' onload="var d=', v, ";d.getElementsByTagName('head')[0].", l, "(d.", d, "('script')).", s, "='", c.l, "'\"></", r, ">"].join("")
                            }
                            var r = "body",
                                i = o[r];
                            if (!i) return setTimeout(e, 100);
                            c.P(1);
                            var u, l = "appendChild",
                                d = "createElement",
                                s = "src",
                                f = o[d]("div"),
                                p = f[l](o[d]("div")),
                                h = o[d]("iframe"),
                                v = "document";
                            f.style.display = "none", i.insertBefore(f, i.firstChild).id = t + "-" + a, h.frameBorder = "0", h.id = t + "-frame-" + a, /MSIE[ ]+6/.test(navigator.userAgent) && (h[s] = "javascript:false"), h.allowTransparency = "true", p[l](h);
                            try {
                                h.contentWindow[v].open()
                            } catch (e) {
                                c.domain = o.domain, u = "javascript:var d=" + v + ".open();d.domain='" + o.domain + "';", h[s] = u + "void(0);"
                            }
                            try {
                                var m = h.contentWindow[v];
                                m.write(n()), m.close()
                            } catch (e) {
                                h[s] = u + 'd.write("' + n().replace(/"/g, String.fromCharCode(92) + '"') + '");d.close();'
                            }
                            c.P(2)
                        }), 0)
                    }()
                }(), e[n].lv = "1", e[n]
            }
            var t = "lightningjs",
                r = window[t] = n(t);
            r.require = n, r.modules = e
        }({}), navigator.userAgent.match(/Android|BlackBerry|BB10|iPhone|iPad|iPod|Opera Mini|IEMobile/i) ? window.usabilla_live = lightningjs.require("usabilla_live", "//w.usabilla.com/0649ef72a7be.js") : window.usabilla_live = lightningjs.require("usabilla_live", "//w.usabilla.com/c3244e3d16ba.js")
    }
});