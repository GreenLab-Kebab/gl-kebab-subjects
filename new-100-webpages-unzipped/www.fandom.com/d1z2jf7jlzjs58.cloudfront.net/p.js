/*! parsely-js-api - v0.2.8 - 2014-03-06
* http://parse.ly
2014 Parsely, Inc.*/
window.PARSELY = window.PARSELY || {},
    function(e) {
        function t(e) {
            return "[object Function]" == Object.prototype.toString.call(e)
        }

        function n(e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        }

        function r(e, t) {
            var n = /^\w+\:\/\//;
            return /^\/\/\/?/.test(e) ? e = location.protocol + e : n.test(e) || "/" == e.charAt(0) || (e = (t || "") + e), n.test(e) ? e : ("/" == e.charAt(0) ? m : y) + e
        }

        function i(e, t) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }

        function o(e) {
            for (var t = !1, n = 0; e.scripts.length > n; n++) e.scripts[n].ready && e.scripts[n].exec_trigger && (t = !0, e.scripts[n].exec_trigger(), e.scripts[n].exec_trigger = null);
            return t
        }

        function s(e, t, n, r) {
            e.onload = e.onreadystatechange = function() {
                e.readyState && "complete" != e.readyState && "loaded" != e.readyState || t[n] || (e.onload = e.onreadystatechange = null, r())
            }
        }

        function a(e) {
            e.ready = e.finished = !0;
            for (var t = 0; e.finished_listeners.length > t; t++) e.finished_listeners[t]();
            e.ready_listeners = [], e.finished_listeners = []
        }

        function c(e, t, n, r, i) {
            setTimeout(function() {
                var o, a, c = t.real_src;
                if ("item" in v) {
                    if (!v[0]) return setTimeout(arguments.callee, 25), void 0;
                    v = v[0]
                }
                o = document.createElement("script"), t.type && (o.type = t.type), t.charset && (o.charset = t.charset), i ? _ ? (n.elem = o, L ? (o.preload = !0, o.onpreload = r) : o.onreadystatechange = function() {
                    "loaded" == o.readyState && r()
                }, o.src = c) : i && 0 == c.indexOf(m) && e[d] ? (a = new XMLHttpRequest, a.onreadystatechange = function() {
                    4 == a.readyState && (a.onreadystatechange = function() {}, n.text = a.responseText + "\n//@ sourceURL=" + c, r())
                }, a.open("GET", c), a.send()) : (o.type = "text/cache-script", s(o, n, "ready", function() {
                    v.removeChild(o), r()
                }), o.src = c, v.insertBefore(o, v.firstChild)) : E ? (o.async = !1, s(o, n, "finished", r), o.src = c, v.insertBefore(o, v.firstChild)) : (s(o, n, "finished", r), o.src = c, v.insertBefore(o, v.firstChild))
            }, 0)
        }

        function l() {
            function y(e, t, n) {
                function r() {
                    null != i && (i = null, a(n))
                }
                var i;
                x[t.src].finished || (e[p] || (x[t.src].finished = !0), i = n.elem || document.createElement("script"), t.type && (i.type = t.type), t.charset && (i.charset = t.charset), s(i, n, "finished", r), n.elem ? n.elem = null : n.text ? (i.onload = i.onreadystatechange = null, i.text = n.text) : i.src = t.real_src, v.insertBefore(i, v.firstChild), n.text && r())
            }

            function m(e, t, n, i) {
                var o, s, l = function() {
                        t.ready_cb(t, function() {
                            y(e, t, o)
                        })
                    },
                    u = function() {
                        t.finished_cb(t, n)
                    };
                t.src = r(t.src, e[h]), t.real_src = t.src + (e[g] ? (/\?.*$/.test(t.src) ? "&_" : "?_") + ~~(1e9 * Math.random()) + "=" : ""), x[t.src] || (x[t.src] = {
                    items: [],
                    finished: !1
                }), s = x[t.src].items, e[p] || 0 == s.length ? (o = s[s.length] = {
                    ready: !1,
                    finished: !1,
                    ready_listeners: [l],
                    finished_listeners: [u]
                }, c(e, t, o, i ? function() {
                    o.ready = !0;
                    for (var e = 0; o.ready_listeners.length > e; e++) o.ready_listeners[e]();
                    o.ready_listeners = []
                } : function() {
                    a(o)
                }, i)) : (o = s[0], o.finished ? u() : o.finished_listeners.push(u))
            }

            function S() {
                function e(e, t) {
                    e.ready = !0, e.exec_trigger = t, s()
                }

                function r(e, t) {
                    e.ready = e.finished = !0, e.exec_trigger = null;
                    for (var n = 0; t.scripts.length > n; n++)
                        if (!t.scripts[n].finished) return;
                    t.finished = !0, s()
                }

                function s() {
                    for (; d.length > p;)
                        if (t(d[p])) try {
                            d[p++]()
                        } catch (e) {} else {
                            if (!d[p].finished) {
                                if (o(d[p])) continue;
                                break
                            }
                            p++
                        }
                    p == d.length && (g = !1, l = !1)
                }

                function a() {
                    l && l.scripts || d.push(l = {
                        scripts: [],
                        finished: !0
                    })
                }
                var c, l, u = i(L, {}),
                    d = [],
                    p = 0,
                    g = !1;
                return c = {
                    script: function() {
                        for (var o = 0; arguments.length > o; o++)(function(o, s) {
                            var d;
                            n(o) || (s = [o]);
                            for (var p = 0; s.length > p; p++) a(), o = s[p], t(o) && (o = o()), o && (n(o) ? (d = [].slice.call(o), d.unshift(p, 1), [].splice.apply(s, d), p--) : ("string" == typeof o && (o = {
                                src: o
                            }), o = i(o, {
                                ready: !1,
                                ready_cb: e,
                                finished: !1,
                                finished_cb: r
                            }), l.finished = !1, l.scripts.push(o), m(u, o, l, E && g), g = !0, u[f] && c.wait()))
                        })(arguments[o], arguments[o]);
                        return c
                    },
                    wait: function() {
                        if (arguments.length > 0) {
                            for (var e = 0; arguments.length > e; e++) d.push(arguments[e]);
                            l = d[d.length - 1]
                        } else l = !1;
                        return s(), c
                    }
                }, {
                    script: c.script,
                    wait: c.wait,
                    setOptions: function(e) {
                        return i(e, u), c
                    }
                }
            }
            var A, L = {},
                E = _ || b,
                w = [],
                x = {};
            return L[d] = !0, L[f] = !1, L[p] = !1, L[g] = !1, L[h] = "", A = {
                setGlobalDefaults: function(e) {
                    return i(e, L), A
                },
                setOptions: function() {
                    return S().setOptions.apply(null, arguments)
                },
                script: function() {
                    return S().script.apply(null, arguments)
                },
                wait: function() {
                    return S().wait.apply(null, arguments)
                },
                queueScript: function() {
                    return w[w.length] = {
                        type: "script",
                        args: [].slice.call(arguments)
                    }, A
                },
                queueWait: function() {
                    return w[w.length] = {
                        type: "wait",
                        args: [].slice.call(arguments)
                    }, A
                },
                runQueue: function() {
                    for (var e, t = A, n = w.length, r = n; --r >= 0;) e = w.shift(), t = t[e.type].apply(null, e.args);
                    return t
                },
                noConflict: function() {
                    return e.$LAB = u, A
                },
                sandbox: function() {
                    return l()
                }
            }
        }
        var u = e.$LAB,
            d = "UseLocalXHR",
            f = "AlwaysPreserveOrder",
            p = "AllowDuplicates",
            g = "CacheBust",
            h = "BasePath",
            y = /^[^?#]*\//.exec(location.href)[0],
            m = /^\w+\:\/\/\/?[^\/]+/.exec(y)[0],
            v = document.head || document.getElementsByTagName("head"),
            S = e.opera && "[object Opera]" == Object.prototype.toString.call(e.opera) || "MozAppearance" in document.documentElement.style,
            A = document.createElement("script"),
            L = "boolean" == typeof A.preload,
            _ = L || A.readyState && "uninitialized" == A.readyState,
            E = !_ && A.async === !0,
            b = !_ && !E && !S;
        e.$LAB = l(),
            function(e, t, n) {
                null == document.readyState && document[e] && (document.readyState = "loading", document[e](t, n = function() {
                    document.removeEventListener(t, n, !1), document.readyState = "complete"
                }, !1))
            }("addEventListener", "DOMContentLoaded")
    }(PARSELY),
    function() {
        var e = function() {
            return function(e) {
                this !== window && void 0 !== this && this.msgs.push(e)
            }
        };
        PARSELY.console = {
            msgs: [],
            log: e(),
            dir: e()
        }
    }(),
    function() {
        var e = PARSELY.console,
            t = PARSELY.$LAB,
            n = "parsely-cfg",
            r = document.getElementById(n);
        if (!r) return e.log("Parse.ly disabled because configuration root element missing: #" + n), void 0;
        var i = function(e) {
                return 10 > e ? "0" + e : e
            },
            o = new Date,
            s = o.getUTCFullYear() + "-" + i(o.getUTCMonth() + 1) + "-" + i(o.getUTCDate()) + "-" + i(o.getUTCHours()),
            a = PARSELY.site || r.getAttribute("data-parsely-site"),
            c = document.location.protocol + "//",
            l = "https://" === c ? "d1z2jf7jlzjs58.cloudfront.net" : "static.parsely.com",
            u = PARSELY.statichost || l,
            d = PARSELY.confighost || "srv-" + s + ".config.parsely.com",
            f = PARSELY.pixelhost || "srv-" + s + ".pixel.parsely.com",
            p = c + d,
            g = c + u,
            h = c + f;
        PARSELY.pInit = function(n) {
            if (void 0 != n.error) return e.log("Unable to load configuration"), void 0;
            e.log("Configuration loaded; loading Parse.ly plugin bundle"), PARSELY.config = n, e.dir(n);
            var r = g + n.bundle;
            e.log("Async loading bundle from " + r), PARSELY.urls = {
                "static": g,
                config: p,
                pixel: h
            }, t.script(r).wait(function() {
                e.log("Code bundle loaded");
                var t = PARSELY.onload;
                if ("function" == typeof t) try {
                    t()
                } catch (n) {
                    e.dir({
                        info: "hook threw exception",
                        error: n
                    })
                }
                e.log("Final load stage completed successfully")
            })
        }, e.log("Asynchronously loading configuration from " + p), t.script(p + "/config/" + a)
    }();