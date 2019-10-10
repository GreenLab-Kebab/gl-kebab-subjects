(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function(require, module, exports) {
        function loadScript(t, r) {
            if (t) {
                r = r || window;
                var e = r.document.createElement("script");
                e.async = "true", e.type = "text/javascript", e.src = t, r.document.head.appendChild(e)
            }
        }

        function queueWithSideEffectOnFirstItem(t, r) {
            return r[0] ? t.call(this, r[0]) : r.push = function() {
                return t.call(this, arguments[0]), Array.prototype.push.apply(this, arguments)
            }, r
        }

        function isHTTPS(t) {
            return t = t || window, "https:" === t.document.location.protocol
        }

        function getImplFromScandalAds(t, r) {
            if (r = r || isHTTPS, t)
                for (var e in t)
                    if (t.hasOwnProperty(e)) {
                        var a = t[e];
                        if (a.providerParameters && a.providerParameters.scandalJS) {
                            var i = r.call() ? "https:" + a.providerParameters.scandalJS.url : "http:" + a.providerParameters.scandalJS.url;
                            return i
                        }
                    }
            return null
        }
        module.exports = {
            loadScript: loadScript,
            queueWithSideEffectOnFirstItem: queueWithSideEffectOnFirstItem,
            isHTTPS: isHTTPS,
            getImplFromScandalAds: getImplFromScandalAds
        };
    }, {}],
    2: [function(require, module, exports) {
        var loadScript = require("./LibFuncs").loadScript,
            queueWithSideEffectOnFirstItem = require("./LibFuncs").queueWithSideEffectOnFirstItem,
            getImplFromScandalAds = require("./LibFuncs").getImplFromScandalAds;
        window.loadImpl = function() {
            var e = !1;
            return function(i) {
                if (!e) {
                    var d = getImplFromScandalAds(i);
                    d && (e = !0, loadScript(d))
                }
            }
        }(), window.scandalAds = window.scandalAds ? queueWithSideEffectOnFirstItem(window.loadImpl, window.scandalAds) : queueWithSideEffectOnFirstItem(window.loadImpl, []);
    }, {
        "./LibFuncs": 1
    }]
}, {}, [2])