! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function(a, b, c) {
        "use strict";

        function d() {
            var a = document.currentScript || document.getElementById("multisync") || document.querySelector("script[data-partner]");
            if (!a) {
                var b = document.getElementsByTagName("script");
                a = b[b.length - 1]
            }
            return j = a, a
        }

        function e(a) {
            for (var b = {}, c = a && a.attributes || [], d = 0; d < c.length; d++) {
                var e = c[d].name.match(/^data-(.+)$/);
                e && (b[e[1]] = c[d].value)
            }
            return b.hasOwnProperty("partner") && (b.p = b.partner, delete b.partner), b
        }

        function f() {
            var a = d(),
                b = e(a),
                c = g(b),
                f = h(c);
            a.parentNode.appendChild(f)
        }

        function g(a) {
            var b = i(a);
            return "https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?" + b
        }

        function h(a) {
            var b = document.createElement("iframe");
            return b.id = "multisync-iframe", b.height = 0, b.width = 0, b.border = "0px", b.hspace = "0", b.vspace = "0", b.marginWidth = "0", b.marginHeight = "0", b.style.border = "0", b.scrolling = "no", b.frameBorder = "0", b.src = a, b.style.display = "none", b
        }

        function i(a) {
            a = a || {};
            var b = "";
            for (var c in a) c && a.hasOwnProperty(c) && (b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]) + "&");
            return b
        }
        var j;
        c.getScript = d, c.getDataParams = e, c.getIframeSrc = g, c.createInvisibleIframe = h, c.getQuerystring = i, c.loadIframe = f
    }, {}],
    2: [function(a, b, c) {
        ! function() {
            var b = a(1);
            window.addEventListener ? window.addEventListener("load", b.loadIframe) : window.attachEvent("onload", b.loadIframe)
        }()
    }, {
        1: 1
    }]
}, {}, [2]);