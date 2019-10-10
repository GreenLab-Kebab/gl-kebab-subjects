(function() {
    var e = this || self;

    function f(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }
    var g = Date.now || function() {
        return +new Date
    };
    var h = document,
        k = window;

    function l(a, b, c) {
        if ("array" == f(b))
            for (var d = 0; d < b.length; d++) l(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };

    function m(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function n(a, b, c) {
        p(h.hidden) ? (this.a = "hidden", this.f = "visibilitychange") : p(h.mozHidden) ? (this.a = "mozHidden", this.f = "mozvisibilitychange") : p(h.msHidden) ? (this.a = "msHidden", this.f = "msvisibilitychange") : p(h.webkitHidden) && (this.a = "webkitHidden", this.f = "webkitvisibilitychange");
        this.h = a;
        this.b = !1;
        this.c = -1;
        this.i = b;
        this.j = c;
        h[this.a] && q(this, 2);
        r(this);
        t(this)
    }

    function r(a) {
        m(h, a.f, function() {
            if (h[a.a]) a.b && (a.b = !1, a.c = g(), q(a, 0));
            else {
                if (-1 != a.c) {
                    var b = g() - a.c;
                    0 < b && (a.c = -1, q(a, 1, b))
                }
                q(a, 3)
            }
        })
    }

    function t(a) {
        m(k, "click", function(b) {
            return a.g(b)
        })
    }
    n.prototype.g = function() {
        var a = this;
        this.b = !0;
        k.setTimeout(function() {
            a.b = !1
        }, 5E3)
    };

    function q(a, b, c) {
        var d = {
            gqid: a.i,
            qqid: a.j
        };
        0 == b && (d["return"] = 0);
        1 == b && (d["return"] = 1, d.timeDelta = c);
        2 == b && (d.bgload = 1);
        3 == b && (d.fg = 1);
        b = [];
        for (var v in d) l(v, d[v], b);
        a = a.h + "&label=window_focus&" + b.join("&");
        k.google_image_requests || (k.google_image_requests = []);
        d = k.document.createElement("img");
        d.src = a;
        k.google_image_requests.push(d)
    }
    n.prototype.handleClick = n.prototype.g;

    function p(a) {
        return "undefined" !== typeof a
    };

    function u(a, b, c) {
        return new n(a, b, c)
    }
    var w = ["wfocusinit"],
        x = e;
    w[0] in x || "undefined" == typeof x.execScript || x.execScript("var " + w[0]);
    for (var y; w.length && (y = w.shift());) w.length || void 0 === u ? x[y] && x[y] !== Object.prototype[y] ? x = x[y] : x = x[y] = {} : x[y] = u;
    var z = k.google_wf_async,
        A;
    if (A = !(!z || !z.call)) A = "function" === typeof z;
    A && k.google_wf_async();
}).call(this);