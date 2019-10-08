! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wafer-darla", [], t) : "object" == typeof exports ? exports["wafer-darla"] = t() : (e.wafer = e.wafer || {}, e.wafer.wafers = e.wafer.wafers || {}, e.wafer.wafers["wafer-darla"] = t())
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(o) {
            if (r[o]) return r[o].exports;
            var n = r[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(n.exports, n, n.exports, t), n.l = !0, n.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.d = function(e, r, o) {
            t.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(r, "a", r), r
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "https://s.yimg.com/aaq/wf/", t(t.s = "./src/entry.js")
    }({
        "./src/entry.js": function(e, t, r) {
            "use strict";

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function n(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                },
                s = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }(),
                f = window.wafer,
                l = f.constants,
                u = f.utils,
                c = l.ATTR_PREFIX,
                d = window.wafer.controllers.WaferLazyController,
                p = window.DARLA || null,
                v = u.bindEvent,
                y = function(e) {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = e.root;
                        void 0 === r && document;
                        o(this, t);
                        var a = t.prototype.configs,
                            s = a.selector,
                            f = a.successClass,
                            l = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                                selector: s,
                                successClass: f
                            }));
                        return l._options = i({}, l._options, {
                            defaultOffsetY: 1200,
                            defaultOffsetX: 0
                        }), l.sync(), l
                    }
                    return a(t, e), s(t, [{
                        key: "makeDarlaCall",
                        value: function(e, t, r) {
                            var o = r.rotateAds,
                                n = void 0 !== o && o,
                                a = r.rotateTime,
                                i = void 0 === a ? 3e4 : a,
                                s = r.maxRetry,
                                f = void 0 === s ? 5 : s,
                                l = r.width,
                                u = void 0 === l ? 300 : l,
                                c = r.height,
                                d = void 0 === c ? 250 : c,
                                v = r.device,
                                y = void 0 === v ? "smartphone" : v,
                                h = r.intl,
                                w = void 0 === h ? "us" : h,
                                b = r.site,
                                m = void 0 === b ? "fp" : b,
                                _ = r.rid,
                                g = void 0 === _ ? "testRid" : _,
                                O = r.bucket,
                                j = void 0 === O ? "testBucket" : O,
                                C = r.npv,
                                x = void 0 === C || C,
                                P = r.ssl,
                                E = void 0 === P || P,
                                k = r.metaSize,
                                T = r.supports,
                                A = r.waitDelay;
                            if (e && t && p) {
                                var R = p.inProgress(),
                                    D = p.prefetched();
                                if ((R || D && D.length > 0) && A > 0) {
                                    if (this._state.retryCount || (this._state.retryCount = 0), this._state.retryCount > f) return;
                                    return this._state.retryCount++, void setTimeout(this.makeDarlaCall.bind(this, e, t, r), A)
                                }
                                var S = {
                                    pg: {
                                        device: y,
                                        intl: w,
                                        property: m,
                                        rid: g,
                                        test: j
                                    }
                                };
                                p.add({
                                    name: "wafer_darla_fetch",
                                    autoStart: n,
                                    autoRT: i,
                                    ps: e,
                                    sa: 'Y-BUCKET="' + j + '"',
                                    sp: t,
                                    npv: x,
                                    ssl: E,
                                    ult: S
                                });
                                e.split(",").forEach(function(e) {
                                    var t = {
                                        pos: e,
                                        dest: "wafer-darla-" + e,
                                        w: u,
                                        h: d
                                    };
                                    k && (t.metaSize = k), T && (t.supports = T), p.addPos(t)
                                }), p.event("wafer_darla_fetch")
                            }
                        }
                    }, {
                        key: "loadElement",
                        value: function(e, t) {
                            if (this._shouldLoadElement(e, t)) {
                                var r = {};
                                try {
                                    r = JSON.parse(e.getAttribute(c + "darla-config"))
                                } catch (e) {
                                    return
                                }
                                var o = r,
                                    n = o.pos,
                                    a = o.spaceid;
                                if (n && a && p) {
                                    var i = p.inProgress(),
                                        s = r,
                                        f = s.abortDarlaCalls,
                                        l = void 0 === f ? [] : f;
                                    i && Array.isArray(l) && l.length && -1 !== l.indexOf(i) && p.abort(), this.makeDarlaCall(n, a, r)
                                }
                            }
                            v(e, "load", this._itemLoaded(e))
                        }
                    }]), t
                }(d);
            y.prototype.configs = {
                selector: ".wafer-darla",
                successClass: "wafer-darla-done"
            };
            var h = y;
            t.default = new h({
                selector: h.prototype.configs.selector
            })
        }
    })
});