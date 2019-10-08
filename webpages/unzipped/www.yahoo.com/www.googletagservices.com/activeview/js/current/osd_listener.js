(function(window, document) {
    var l;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }

    function ba(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function q(a) {
        if (!(a instanceof Array)) {
            a = ba(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var ca = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var fa = {
                    Fb: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.Fb;
                break a
            } catch (a) {}
            ea = !1
        }
        da = ea ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ia = da;

    function t(a, b) {
        a.prototype = ca(b.prototype);
        a.prototype.constructor = a;
        if (ia) ia(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c]
    }
    var ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ka = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function la(a, b) {
        if (b) {
            var c = ka;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ja(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    var ma = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    la("Object.assign", function(a) {
        return a || ma
    });
    var u = this || self;

    function v(a) {
        return "string" == typeof a
    }

    function na(a) {
        return "number" == typeof a
    }

    function oa() {}

    function w(a) {
        a.Ia = void 0;
        a.g = function() {
            return a.Ia ? a.Ia : a.Ia = new a
        }
    }

    function pa(a) {
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

    function qa(a) {
        return "array" == pa(a)
    }

    function ra(a) {
        var b = pa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function sa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ua(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function va(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? va = sa : va = ua;
        return va.apply(null, arguments)
    }

    function wa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function xa(a, b) {
        a = a.split(".");
        var c = u;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function ya(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var za;

    function Aa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function x(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }

    function Ba(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ca(a, b, c) {
        for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }

    function Da(a, b, c) {
        var d = c;
        x(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ea(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Fa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function y(a, b) {
        return 0 <= Aa(a, b)
    }

    function Ga(a, b) {
        b = Aa(a, b);
        0 <= b && Array.prototype.splice.call(a, b, 1)
    }

    function Ha(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ia(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ja(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Ka(a, b) {
        a.sort(b || La)
    }

    function La(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Ma(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (qa(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = Ma.apply(null, Ja(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    }

    function Na(a, b) {
        return Ha.apply([], Ca(a, b, void 0))
    };

    function Oa(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Pa(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Qa(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Ra(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Sa(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Ta(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function z(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ua.length; f++) c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function Va(a) {
        var b = arguments.length;
        if (1 == b && qa(arguments[0])) return Va.apply(null, arguments[0]);
        if (b % 2) throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    };

    function Wa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function A(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }

    function Xa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var B;
    a: {
        var Ya = u.navigator;
        if (Ya) {
            var Za = Ya.userAgent;
            if (Za) {
                B = Za;
                break a
            }
        }
        B = ""
    }

    function C(a) {
        return -1 != B.indexOf(a)
    };

    function $a() {
        return C("Safari") && !(ab() || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || C("Firefox") || C("FxiOS") || C("Silk") || C("Android"))
    }

    function ab() {
        return (C("Chrome") || C("CriOS")) && !C("Edge")
    };

    function bb(a) {
        var b = Number(a);
        return 0 == b && /^[\s\xa0]*$/.test(a) ? NaN : b
    }

    function cb() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }

    function db(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function eb(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function fb(a) {
        fb[" "](a);
        return a
    }
    fb[" "] = oa;

    function gb(a, b) {
        try {
            return fb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function hb(a, b) {
        var c = ib;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var jb = C("Opera"),
        D = C("Trident") || C("MSIE"),
        kb = C("Edge"),
        lb = C("Gecko") && !(A(B, "WebKit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        mb = A(B, "WebKit") && !C("Edge"),
        nb = mb && C("Mobile");

    function ob() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var pb;
    a: {
        var qb = "",
            rb = function() {
                var a = B;
                if (lb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (kb) return /Edge\/([\d\.]+)/.exec(a);
                if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (mb) return /WebKit\/(\S+)/.exec(a);
                if (jb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();rb && (qb = rb ? rb[1] : "");
        if (D) {
            var sb = ob();
            if (null != sb && sb > parseFloat(qb)) {
                pb = String(sb);
                break a
            }
        }
        pb = qb
    }
    var tb = pb,
        ib = {};

    function ub(a) {
        return hb(a, function() {
            for (var b = 0, c = Wa(String(tb)).split("."), d = Wa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = Xa(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Xa(0 == g[2].length, 0 == h[2].length) || Xa(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var vb;
    vb = u.document && D ? ob() : void 0;
    var wb = {},
        xb = null;
    var yb = 0,
        zb = 0;

    function Ab() {
        this.a = []
    }
    Ab.prototype.length = function() {
        return this.a.length
    };

    function Bb(a) {
        var b = a.a;
        a.a = [];
        return b
    }

    function Cb(a, b) {
        for (; 127 < b;) a.a.push(b & 127 | 128), b >>>= 7;
        a.a.push(b)
    }

    function Db(a, b) {
        a.a.push(b >>> 0 & 255);
        a.a.push(b >>> 8 & 255);
        a.a.push(b >>> 16 & 255);
        a.a.push(b >>> 24 & 255)
    };

    function Eb() {
        this.b = [];
        this.c = 0;
        this.a = new Ab
    }
    Eb.prototype.reset = function() {
        this.b = [];
        Bb(this.a);
        this.c = 0
    };

    function Fb(a, b, c) {
        if (null != c) {
            Cb(a.a, 8 * b);
            a = a.a;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            yb = b;
            zb = d;
            c = yb;
            for (b = zb; 0 < b || 127 < c;) a.a.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.a.push(c)
        }
    };

    function Gb() {}
    var Hb = "function" == typeof Uint8Array,
        Ib = [];

    function Jb(a, b) {
        if (b < a.f) {
            b += a.c;
            var c = a.a[b];
            return c === Ib ? a.a[b] = [] : c
        }
        if (a.b) return c = a.b[b], c === Ib ? a.b[b] = [] : c
    }

    function Kb(a, b) {
        a = Jb(a, b);
        return null == a ? 0 : a
    }

    function Lb(a, b, c) {
        if (0 !== c)
            if (b < a.f) a.a[b + a.c] = c;
            else {
                var d = a.f + a.c;
                a.a[d] || (a.b = a.a[d] = {});
                a.b[b] = c
            }
        else a.a[b + a.c] = null;
        return a
    }

    function Mb(a) {
        if (a.h)
            for (var b in a.h) {
                var c = a.h[b];
                if (qa(c))
                    for (var d = 0; d < c.length; d++) c[d] && Mb(c[d]);
                else c && Mb(c)
            }
    }
    Gb.prototype.toString = function() {
        Mb(this);
        return this.a.toString()
    };
    var Nb;
    Nb = ["av.key", "js", "20191007"].slice(-1)[0];

    function Ob(a, b, c, d, e) {
        if (e) c = a + ("&" + b + "=" + c);
        else {
            var f = "&" + b + "=",
                g = a.indexOf(f);
            0 > g ? c = a + f + c : (g += f.length, f = a.indexOf("&", g), c = 0 <= f ? a.substring(0, g) + c + a.substring(f) : a.substring(0, g) + c)
        }
        return 2E3 < c.length ? void 0 !== d ? Ob(a, b, d, void 0, e) : a : c
    };
    var E = document,
        F = window;
    var Pb = D || jb || mb;

    function G(a, b) {
        this.a = void 0 !== a ? a : 0;
        this.b = void 0 !== b ? b : 0
    }
    G.prototype.ceil = function() {
        this.a = Math.ceil(this.a);
        this.b = Math.ceil(this.b);
        return this
    };
    G.prototype.floor = function() {
        this.a = Math.floor(this.a);
        this.b = Math.floor(this.b);
        return this
    };
    G.prototype.round = function() {
        this.a = Math.round(this.a);
        this.b = Math.round(this.b);
        return this
    };

    function H(a, b) {
        this.width = a;
        this.height = b
    }
    H.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    H.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    H.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    H.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Qb(a) {
        return a ? new Rb(Sb(a)) : za || (za = new Rb)
    }

    function Tb(a, b, c) {
        var d = document;
        c = c || d;
        a = a && "*" != a ? String(a).toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                d = {};
                for (var e = 0, f = 0, g; g = c[f]; f++) a == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (f = e = 0; g = c[f]; f++) a = g.className, "function" == typeof a.split && y(a.split(/\s+/), b) && (d[e++] = g);
            d.length = e;
            return d
        }
        return c
    }

    function Ub(a) {
        var b = a.scrollingElement ? a.scrollingElement : mb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return D && ub("10") && a.pageYOffset != b.scrollTop ? new G(b.scrollLeft, b.scrollTop) : new G(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Vb(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Wb(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function Xb(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function Sb(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Yb(a) {
        try {
            return a.contentWindow || (a.contentDocument ? Vb(a.contentDocument) : null)
        } catch (b) {}
        return null
    }

    function Zb(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Rb(a) {
        this.a = a || u.document || document
    };

    function $b() {
        return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };
    var ac = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function bc(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    }

    function cc(a, b, c) {
        if (qa(b))
            for (var d = 0; d < b.length; d++) cc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function dc(a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) cc(a[b], a[b + 1], c);
        return c.join("&")
    }

    function ec(a, b) {
        var c = 2 == arguments.length ? dc(arguments[1], 0) : dc(arguments, 1);
        if (c) {
            var d = a.indexOf("#");
            0 > d && (d = a.length);
            var e = a.indexOf("?");
            if (0 > e || e > d) {
                e = d;
                var f = ""
            } else f = a.substring(e + 1, d);
            d = [a.substr(0, e), f, a.substr(d)];
            e = d[1];
            d[1] = c ? e ? e + "&" + c : c : e;
            c = d[0] + (d[1] ? "?" + d[1] : "") + d[2]
        } else c = a;
        return c
    };

    function fc(a) {
        try {
            return !!a && null != a.location.href && gb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function gc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function hc(a) {
        var b = [];
        gc(a, function(c, d) {
            b.push(d)
        });
        return b
    }

    function ic() {
        var a = jc;
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    var kc = Oa(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            u.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function lc(a) {
        return a ? a.passive && kc() ? a : a.capture || !1 : !1
    }

    function mc(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, lc(d)), !0) : !1
    }

    function nc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, lc(void 0))
    };

    function oc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }

    function pc(a) {
        if (qc()) oc(window, a, !0);
        else {
            var b = u.document;
            if (b.body) {
                var c = b.getElementById("goog-srcless-iframe");
                if (!c) {
                    c = (new Rb(b)).a;
                    var d = "IFRAME";
                    "application/xhtml+xml" === c.contentType && (d = d.toLowerCase());
                    c = c.createElement(d);
                    c.style.display = "none";
                    c.id = "goog-srcless-iframe";
                    b.body.appendChild(c)
                }
                b = c
            } else b = null;
            b && b.contentWindow && oc(b.contentWindow, a, !0)
        }
    }
    var qc = Oa(function() {
        return "referrerPolicy" in u.document.createElement("img")
    });
    var rc = {
        ac: 1,
        bc: 2,
        $b: 3
    };
    var sc;
    sc = /^true$/.test("<<<IS_DEBUG_IP:j>>>");

    function I(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    l = I.prototype;
    l.O = function() {
        return this.right - this.left
    };
    l.M = function() {
        return this.bottom - this.top
    };

    function tc(a) {
        return new I(a.top, a.right, a.bottom, a.left)
    }
    l.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    l.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    l.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function uc(a, b, c) {
        b instanceof G ? (a.left += b.a, a.right += b.a, a.top += b.b, a.bottom += b.b) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
        return a
    };
    var vc = {};

    function wc(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        D && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function xc(a, b) {
        var c = new G(0, 0),
            d = Vb(Sb(a));
        if (!gb(d, "parent")) return c;
        do {
            if (d == b) {
                var e = a,
                    f = Sb(e);
                var g = new G(0, 0);
                var h = f ? Sb(f) : document;
                h = !D || 9 <= Number(vb) || "CSS1Compat" == Qb(h).a.compatMode ? h.documentElement : h.body;
                e != h && (e = wc(e), f = Ub(Qb(f).a), g.a = e.left + f.a, g.b = e.top + f.b)
            } else g = wc(a), g = new G(g.left, g.top);
            c.a += g.a;
            c.b += g.b
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };

    function yc(a) {
        a = void 0 === a ? u : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    };
    var zc = !!window.google_async_iframe_id,
        Ac = zc && window.parent || window;

    function Bc() {
        if (zc && !fc(Ac)) {
            var a = "." + E.domain;
            try {
                for (; 2 < a.split(".").length && !fc(Ac);) E.domain = a = a.substr(a.indexOf(".") + 1), Ac = window.parent
            } catch (b) {}
            fc(Ac) || (Ac = window)
        }
        return Ac
    };

    function Cc(a) {
        return null !== a && a != a.top
    }

    function Dc(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && Cc(e) && (e = e.top);
            try {
                if (void 0 === c ? 0 : c) var f = (new H(e.innerWidth, e.innerHeight)).round();
                else {
                    var g = (e || window).document,
                        h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new H(h.clientWidth, h.clientHeight)).round()
                }
                d = f
            } catch (n) {
                d = new H(-12245933, -12245933)
            }
            a = d;
            var k = Ub(Qb(b.document).a);
            if (-12245933 == a.width) {
                var m = a.width;
                var p = new I(m, m, m, m)
            } else p = new I(k.b, k.a + a.width, k.b + a.height, k.a);
            return p
        } catch (n) {
            return new I(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Ec = {
            Eb: "ts=0",
            Db: "opp=1",
            Vb: "adf=1",
            Yb: "gcm=1"
        },
        Fc = {
            NONE: 0,
            Ub: 1
        };

    function Gc() {
        this.a = 0;
        this.h = !1;
        this.c = -1;
        this.b = !1;
        this.f = 0
    }
    Gc.prototype.isVisible = function() {
        return this.b ? .3 <= this.a : .5 <= this.a
    };
    var J = {
            Tb: 0,
            Wb: 1
        },
        Hc = {
            370204018: 0,
            370204019: 1,
            370204052: 2,
            370204026: 0,
            370204027: 1,
            370204053: 2
        },
        Ic = {
            668123728: 0,
            668123729: 1
        },
        Jc = {
            668123028: 0,
            668123029: 1
        },
        Kc = {
            NONE: 0,
            Zb: 1,
            Xb: 2
        },
        Lc = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        },
        Mc = {
            319331040: 0,
            319331041: 1
        },
        Nc = {
            42530094: 0,
            42530095: 1
        },
        Oc = {
            42530173: 0,
            42530174: 1
        },
        Pc = {
            370204070: 1
        },
        Qc = {
            370204078: 0,
            370204079: 1,
            370204080: 0,
            370204081: 1
        };

    function Rc() {
        this.a = null;
        this.b = !1;
        this.c = null
    }

    function K(a) {
        a.b = !0;
        return a
    }

    function Sc(a, b) {
        a.c = void 0 === b ? null : b
    }

    function Tc(a, b) {
        a.c && x(b, function(c) {
            c = a.c[c];
            void 0 !== c && Uc(a, c)
        })
    }

    function Vc(a) {
        Rc.call(this);
        this.f = a
    }
    t(Vc, Rc);

    function Uc(a, b) {
        var c;
        if (!(c = null !== a.a)) {
            a: {
                c = a.f;
                for (d in c)
                    if (c[d] == b) {
                        var d = !0;
                        break a
                    }
                d = !1
            }
            c = !d
        }
        c || (a.a = b)
    };

    function Wc() {
        this.a = {};
        this.c = !0;
        this.b = {}
    }
    Wc.prototype.reset = function() {
        this.a = {};
        this.c = !0;
        this.b = {}
    };

    function L(a, b, c) {
        a.a[b] || (a.a[b] = new Vc(c));
        return a.a[b]
    }

    function Xc(a, b, c) {
        (a = a.a[b]) && Uc(a, c)
    }

    function M(a, b) {
        var c = a.b;
        if (null !== c && b in c) return a.b[b];
        if (a = a.a[b]) return a.a
    }

    function Yc(a) {
        var b = {},
            c = Ra(a.a, function(d) {
                return d.b
            });
        Qa(c, function(d, e) {
            d = void 0 !== a.b[e] ? String(a.b[e]) : d.b && null !== d.a ? String(d.a) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }

    function Zc(a, b) {
        if (!a.c) return b;
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("="),
                e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.a[e]) && Uc(e, d)
        }
        return b.join("&")
    }

    function $c(a, b) {
        a.c && x(Sa(a.a), function(c) {
            return Tc(c, b)
        })
    }

    function ad(a, b) {
        a.c && b && v(b) && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","), b = Ca(b, function(c) {
            return Number(c)
        }), $c(a, b))
    };

    function bd(a) {
        L(a, "od", Fc);
        K(L(a, "opac", J));
        L(a, "ue", J);
        L(a, "ud", J);
        K(L(a, "gcm", J));
        K(L(a, "cm", J));
        K(L(a, "sela", J));
        K(L(a, "sbeos", J));
        K(L(a, "prf", J));
        K(L(a, "mwt", J));
        K(L(a, "lcs", J));
        L(a, "iogeo", J);
        K(L(a, "osddt", J))
    };
    var cd = !D && !$a();

    function dd(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (cd && a.dataset) {
            if (!(!C("Android") || ab() || C("Firefox") || C("FxiOS") || C("Opera") || C("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + db(b))
    }

    function ed(a, b) {
        return /-[a-z]/.test(b) ? !1 : cd && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + db(b)) : !!a.getAttribute("data-" + db(b))
    };

    function fd() {
        this.b = this.a = null;
        this.i = this.f = this.h = 0;
        this.c = "no"
    }

    function gd(a) {
        if (!a) return !1;
        try {
            var b = a.getBoundingClientRect();
            return b && 30 <= b.height && 30 <= b.width
        } catch (c) {
            return !1
        }
    }

    function hd(a) {
        return Ba(a, function(b) {
            return gd(b)
        })
    }

    function id(a) {
        return Ba(a, function(b) {
            return "SCRIPT" != b.nodeName && "FONT" != b.nodeName
        })
    }

    function jd(a) {
        if (!a.length) return null;
        var b = hd(a);
        return 0 < b.length ? b[0] : a[0]
    }

    function kd(a) {
        if (!a) return null;
        if (!a.children) return a;
        for (var b = id(Ia(a.children)); b.length;) {
            var c = hd(b);
            if (1 == c.length) return c[0];
            if (1 < c.length) break;
            b = Na(b, function(d) {
                return id(Ia(d.children))
            })
        }
        return a
    }

    function ld(a, b) {
        return Ma(Ca(b, function(c) {
            var d = a || document;
            return Ia(d.querySelectorAll && d.querySelector ? d.querySelectorAll("." + c) : Tb("*", c, a))
        }))
    }

    function md(a, b) {
        b = void 0 === b ? !1 : b;
        var c = void 0 === c ? !1 : c;
        a.b = a.a;
        a.c = "mue";
        if (!gd(a.a)) {
            var d = kd(a.a);
            gd(d) ? (a.b = d, a.c = "ie") : b && (c || F !== F.top) && (b = ld(F.document.body, ["GoogleActiveViewInnerContainer"]), 1 == b.length && (a.b = b[0], a.c = "ce"))
        }
    };

    function nd(a, b) {
        this.b = (void 0 === a ? 0 : a) || 0;
        this.a = (void 0 === b ? "" : b) || ""
    }

    function od(a) {
        return !!a.b || !!a.a
    }
    nd.prototype.toString = function() {
        return this.b + (this.a ? "-" : "") + this.a
    };

    function N() {}
    N.prototype.a = function() {
        return 0
    };
    N.prototype.c = function() {
        return 0
    };
    N.prototype.f = function() {
        return 0
    };
    N.prototype.b = function() {
        return 0
    };

    function pd() {
        if (!qd()) throw Error();
    }
    t(pd, N);

    function qd() {
        return !(!F || !F.performance)
    }
    pd.prototype.a = function() {
        return qd() && F.performance.now ? F.performance.now() : N.prototype.a.call(this)
    };
    pd.prototype.c = function() {
        return qd() && F.performance.memory ? F.performance.memory.totalJSHeapSize || 0 : N.prototype.c.call(this)
    };
    pd.prototype.f = function() {
        return qd() && F.performance.memory ? F.performance.memory.usedJSHeapSize || 0 : N.prototype.f.call(this)
    };
    pd.prototype.b = function() {
        return qd() && F.performance.memory ? F.performance.memory.jsHeapSizeLimit || 0 : N.prototype.b.call(this)
    };

    function rd() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[E.visibilityState || E.webkitVisibilityState || E.mozVisibilityState || ""] || 0
    };

    function sd() {}
    sd.prototype.isVisible = function() {
        return 1 === rd()
    };
    var td = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function ud() {
        var a = u,
            b = [],
            c = null;
        do {
            var d = a;
            if (fc(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else e = c, c = null;
            b.push(new vd(e || "", d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
        d = u;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.lb = !0);
        return b
    }

    function wd(a, b) {
        this.a = a;
        this.b = b
    }

    function vd(a, b, c) {
        this.url = a;
        this.c = b;
        this.lb = !!c;
        this.depth = null
    };

    function xd() {
        this.c = "&";
        this.f = !1;
        this.b = {};
        this.h = 0;
        this.a = []
    }

    function yd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function zd(a, b, c, d, e) {
        var f = [];
        gc(a, function(g, h) {
            (g = Ad(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Ad(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Ad(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(zd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Bd(a, b, c, d) {
        a.a.push(b);
        a.b[b] = yd(c, d)
    }

    function Cd(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Dd(a) - c.length;
        if (0 > d) return "";
        a.a.sort(function(p, n) {
            return p - n
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = zd(h[k], a.c, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        b += m;
                        e = a.c;
                        break
                    }
                    a.f && (e = d, m[e - 1] == a.c && --e, b += m.substr(0, e), e = a.c, d = 0);
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function Dd(a) {
        var b = 1,
            c;
        for (c in a.b) b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    };

    function Ed() {
        this.b = new sd;
        this.a = qd() ? new pd : new N
    }
    Ed.prototype.setInterval = function(a, b) {
        return F.setInterval(a, b)
    };
    Ed.prototype.clearInterval = function(a) {
        F.clearInterval(a)
    };
    Ed.prototype.setTimeout = function(a, b) {
        return F.setTimeout(a, b)
    };
    Ed.prototype.clearTimeout = function(a) {
        F.clearTimeout(a)
    };

    function Fd(a) {
        O();
        var b = Bc() || F;
        oc(b, a, !1)
    }
    w(Ed);

    function Gd() {}

    function O() {
        var a = Gd.g();
        if (!a.a) {
            if (!F) throw Error("Context has not been set and window is undefined.");
            a.a = Ed.g()
        }
        return a.a
    }
    w(Gd);

    function Hd(a) {
        this.h = null;
        a || (a = []);
        this.c = -1;
        this.a = a;
        a: {
            if (a = this.a.length) {
                --a;
                var b = this.a[a];
                if (!(null === b || "object" != typeof b || qa(b) || Hb && b instanceof Uint8Array)) {
                    this.f = a - -1;
                    this.b = b;
                    break a
                }
            }
            this.f = Number.MAX_VALUE
        }
    }
    ya(Hd, Gb);

    function Id(a) {
        this.f = a;
        this.a = -1;
        this.b = this.c = 0
    }

    function Jd(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
            if (-1 < a.a) return b.apply(null, q(d));
            try {
                return a.a = a.f.a.a(), b.apply(null, q(d))
            } finally {
                a.c += a.f.a.a() - a.a, a.a = -1, a.b += 1
            }
        }
    };

    function Kd(a, b) {
        this.b = a;
        this.c = b;
        this.a = new Id(a)
    };

    function P() {
        this.i = void 0;
        this.m = 0;
        this.c = new nd(0, "");
        this.b = 0;
        this.j = -1;
        this.f = "";
        this.a = new Wc;
        Sc(K(L(this.a, "mv", Kc)), Lc);
        L(this.a, "omid", J);
        K(L(this.a, "epoh", J));
        K(L(this.a, "epph", J));
        Sc(K(L(this.a, "umt", J)), Ic);
        Sc(K(L(this.a, "gmpd", J)), Jc);
        Sc(K(L(this.a, "sel", J)), Hc);
        Sc(K(L(this.a, "buvpe", J)), Mc);
        Sc(K(L(this.a, "imams", J)), Nc);
        Sc(L(this.a, "imar", J), Oc);
        this.a.b.imar = 1;
        Sc(K(L(this.a, "gms", J)), Pc);
        K(L(this.a, "phel", J));
        K(L(this.a, "phell", J));
        K(L(this.a, "oseid", rc));
        K(L(this.a, "xdi", J));
        K(L(this.a, "amp", J));
        K(L(this.a, "prf", J));
        K(L(this.a, "gtx", J));
        K(L(this.a, "mvp_lv", J));
        Sc(K(L(this.a, "lvio", J)), Qc);
        K(L(this.a, "xosd", J));
        this.l = new Kd(O(), this.a);
        this.h = null
    }

    function Ld() {
        return P.g().l
    }
    w(P);

    function Md() {
        var a = "https:";
        F && F.location && "http:" === F.location.protocol && (a = "http:");
        this.b = a;
        this.a = .01
    }

    function Nd(a, b, c, d) {
        if (Math.random() < (d || a.a)) try {
            if (c instanceof xd) var e = c;
            else e = new xd, gc(c, function(g, h) {
                var k = e,
                    m = k.h++;
                g = yd(h, g);
                k.a.push(m);
                k.b[m] = g
            });
            var f = Cd(e, a.b, "/pagead/gen_204?id=" + b + "&");
            f && Fd(f)
        } catch (g) {}
    };

    function Od(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Pd = null;

    function Qd() {
        var a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function Rd() {
        var a = void 0 === a ? u : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Sd(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var Q = u.performance,
        Td = !!(Q && Q.mark && Q.measure && Q.clearMarks),
        Ud = Oa(function() {
            var a;
            if (a = Td) {
                var b;
                if (null === Pd) {
                    Pd = "";
                    try {
                        a = "";
                        try {
                            a = u.top.location.hash
                        } catch (c) {
                            a = u.location.hash
                        }
                        a && (Pd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Pd;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Vd() {
        var a = Bc();
        this.b = [];
        this.c = a || u;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = Ud() || (null != b ? b : 1 > Math.random())
    }

    function Wd(a) {
        a && Q && Ud() && (Q.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Q.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Vd.prototype.start = function(a, b) {
        if (!this.a) return null;
        var c = Rd() || Qd();
        a = new Sd(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Q && Ud() && Q.mark(b);
        return a
    };

    function Xd() {
        var a = Yd;
        this.i = Zd;
        this.h = "jserror";
        this.f = !0;
        this.b = null;
        this.j = this.c;
        this.a = void 0 === a ? null : a
    }

    function $d(a, b, c) {
        return Jd(Ld().a, function() {
            try {
                if (a.a && a.a.a) {
                    var d = a.a.start(b.toString(), 3);
                    var e = c();
                    var f = a.a,
                        g = d;
                    if (f.a && "number" === typeof g.value) {
                        var h = Rd() || Qd();
                        g.duration = h - g.value;
                        var k = "goog_" + g.label + "_" + g.uniqueId + "_end";
                        Q && Ud() && Q.mark(k);
                        !f.a || 2048 < f.b.length || f.b.push(g)
                    }
                } else e = c()
            } catch (m) {
                f = a.f;
                try {
                    Wd(d), f = a.j(b, new ae(be(m)), void 0, void 0)
                } catch (p) {
                    a.c(217, p)
                }
                if (!f) throw m;
            }
            return e
        })()
    }

    function ce(a, b) {
        var c = de;
        return Jd(Ld().a, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return $d(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    Xd.prototype.c = function(a, b, c, d, e) {
        e = e || this.h;
        try {
            var f = new xd;
            f.f = !0;
            Bd(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new ae(be(b)));
            b.msg && Bd(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.b) try {
                this.b(g)
            } catch (ta) {}
            if (d) try {
                d(g)
            } catch (ta) {}
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            var h = ud(),
                k = new vd(u.location.href, u, !1);
            b = null;
            var m = h.length - 1;
            for (d = m; 0 <= d; --d) {
                var p = h[d];
                !b && td.test(p.url) && (b = p);
                if (p.url && !p.lb) {
                    k = p;
                    break
                }
            }
            p = null;
            var n = h.length && h[m].url;
            0 != k.depth && n && (p = h[m]);
            var r = new wd(k, p);
            r.b && Bd(f, 4, "top", r.b.url || "");
            Bd(f, 5, "url", r.a.url || "");
            Nd(this.i, e, f, c)
        } catch (ta) {
            try {
                Nd(this.i, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: be(ta),
                    url: r && r.a.url
                }, c)
            } catch (Nh) {}
        }
        return this.f
    };

    function be(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    }

    function ae(a) {
        Od.call(this, Error(a), {
            message: a
        })
    }
    t(ae, Od);
    var Zd, de, Yd = new Vd;

    function ee() {
        var a = Bc();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = Yd, a.a = !1, a.b != a.c.google_js_reporting_queue && (Ud() && x(a.b, Wd), a.b.length = 0))
    }(function() {
        Zd = new Md;
        de = new Xd;
        var a = Bc();
        a && a.document && ("complete" == a.document.readyState ? ee() : Yd.a && mc(a, "load", function() {
            ee()
        }))
    })();

    function fe(a) {
        de.b = function(b) {
            x(a, function(c) {
                c(b)
            })
        }
    }

    function ge(a, b) {
        return $d(de, a, b)
    }

    function R(a, b) {
        return ce(a, b)
    }

    function he(a, b, c) {
        de.c(a, b, c, void 0)
    };
    var ie = +new Date,
        je = -1,
        ke = !1;

    function S() {
        return +new Date - ie
    }

    function le() {
        var a = P.g().i,
            b = ke ? S() - je : -1;
        if (947190542 == a) return 100;
        if (79463069 == a) return 200;
        a = [2E3, 4E3];
        var c = [250, 500, 1E3];
        he(637, Error(), .001);
        var d = -1; - 1 != b && -1 > b && (d = b);
        for (b = 0; b < a.length; ++b)
            if (d < a[b]) {
                var e = c[b];
                break
            }
        void 0 === e && (e = c[a.length]);
        return e
    };

    function me(a) {
        return (a = a.document) && "function" == pa(a.elementFromPoint)
    };
    sc && (Zd.a = 1);
    if (E && E.URL) {
        var ne, jc = E.URL;
        ne = !!jc && 0 < ic().length;
        de.f = !ne
    }

    function T(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        c = ce(d, c);
        mc(a, b, c, {
            capture: e
        });
        return c
    }

    function oe(a) {
        var b = ["IMG", "FRAME", "IFRAME"];
        return Ea(b, function(c) {
            return a.nodeName == String(c)
        }) ? [a] : Da(b, function(c, d) {
            return c.concat(Ia((a || document).getElementsByTagName(String(d))))
        }, [])
    }

    function pe(a, b) {
        if (!a) return !1;
        var c = 0,
            d = null;
        a = oe(a);
        for (var e = 0; e < a.length; e++) {
            var f = !1;
            d = a[e];
            switch (d.nodeName) {
                case "IMG":
                    var g = d;
                    if (g.complete || g.naturalWidth) f = !0;
                    break;
                case "FRAME":
                case "IFRAME":
                    g = d;
                    try {
                        if (g.readyState) f = "complete" == g.readyState;
                        else {
                            var h = g.contentWindow || g.contentDocument;
                            h.document && (h = h.document);
                            f = h && h.readyState ? "complete" == h.readyState : !0
                        }
                    } catch (k) {
                        f = !0
                    }
            }
            f || (c++, T(d, "load", function() {
                c--;
                c || b(null)
            }, 116))
        }
        a = d = null;
        return !c
    }

    function qe(a, b) {
        function c(d) {
            nc(a, d, c);
            b(d)
        }
        return T(a, "DOMNodeRemoved", c, 156, !1)
    }

    function re(a, b) {
        function c() {
            a();
            d++;
            10 > d && O().setTimeout(ce(b, c), 100)
        }
        var d = 0;
        c()
    };

    function se(a, b) {
        a && (a.b && (b[4] = a.b), a.a && (b[12] = a.a))
    }

    function te(a) {
        var b = [];
        Qa(a, function(c, d) {
            d = encodeURIComponent(d);
            v(c) && (c = encodeURIComponent(c));
            b.push(d + "=" + c)
        });
        b.push("24=" + +new Date);
        return b.join("\n")
    };

    function ue() {
        this.a = null;
        this.status = 0
    };
    var ve = 0;

    function we(a, b) {
        try {
            ve++, b.postMessage(a, "*")
        } catch (c) {}
    }

    function xe(a, b) {
        b && (a(b), b.frames && x(b.frames, function(c) {
            xe(a, c)
        }))
    }

    function ye(a, b, c) {
        a = a.exec(b);
        if (!(b = !a || !a[1])) {
            a = a[1];
            b = a.length;
            if (0 == b) a = 0;
            else {
                for (var d = 305419896, e = 0; e < b; e++) d ^= (d << 5) + (d >> 2) + a.charCodeAt(e) & 4294967295;
                a = 0 < d ? d : 4294967296 + d
            }
            b = c != a
        }
        return !b
    }

    function ze(a, b) {
        0 == a.length ? (b.a = null, b.status = 1) : (a = Xb.apply(null, a), !a || a.tagName ? b.a = a : b.a = a.parentElement, b.a || (b.status = -2))
    }

    function Ae(a, b, c) {
        var d = new RegExp("(?:(?:[?&]|%26|&3[f]|%2526|%253[f])" + b + "(?:=|%3[d]|%253[d]))([a-z0-9-_]*)", "i"),
            e = new ue;
        if ("" == b || -1 == c) return e.status = -1, e;
        try {
            b = [];
            for (var f = (a.document || document).getElementsByTagName("A"), g = 0; g < f.length; g++) {
                var h = f[g];
                ye(d, h.href, c) && (e.status = 3, b.push(h))
            }
            if (0 < b.length) return ze(b, e), e;
            var k = (a.document || document).getElementsByTagName("EMBED");
            for (a = 0; a < k.length; a++) {
                var m = k[a];
                ye(d, m.src, c) && (0 == m.getBoundingClientRect().height && m.parentElement && "OBJECT" == m.parentElement.tagName ? (e.status = 5, b.push(m.parentElement)) : (e.status = 4, b.push(m)))
            }
            if (0 < b.length) return ze(b, e), e
        } catch (p) {
            return e.status = 7, e
        }
        e.status = 1;
        return e
    }

    function Be(a) {
        return new I(a.top, a.right, a.bottom, a.left)
    }

    function Ce() {
        var a = O().b;
        return 0 === rd() ? -1 : a.isVisible() ? 0 : 1
    }

    function De(a) {
        return [a.top, a.left, a.bottom, a.right].join("-")
    }

    function Ee(a) {
        if (!a) return null;
        a = a.split("-");
        return 4 == a.length ? new I(bb(a[0]), bb(a[3]), bb(a[2]), bb(a[1])) : null
    }

    function Fe(a, b, c) {
        if (b && a)
            if (c && 0 < c.length)
                for (c = Ba(c, function(e) {
                        var f = e.parent && e.parent !== e;
                        return e === F.top || f
                    }), a = ba(c), c = a.next(); !c.done; c = a.next()) we(b, c.value);
            else {
                c = [];
                var d = Yb(a);
                d && c.push(d);
                if (0 === c.length) try {
                    c = Ca(Tb("IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                        return Yb(e)
                    })
                } catch (e) {}
                a = ba(c);
                for (c = a.next(); !c.done; c = a.next()) {
                    c = c.value;
                    try {
                        b && xe(wa(we, b), c)
                    } catch (e) {}
                }
            }
    }

    function Ge(a) {
        if (!a) return 0;
        if (ed(a, "googleAvDm")) switch (dd(a, "googleAvDm")) {
            case "1":
                return 1;
            case "2":
                break;
            case "3":
                return 3;
            default:
                return 1
        }
        return 2
    }

    function He(a) {
        var b = {};
        if (void 0 == a) return b;
        "?" === a.charAt(0) && (a = a.substring(1));
        bc(a, function(c, d) {
            return b[c] = d
        });
        return b
    };

    function Ie() {
        var a = B;
        return a ? Ea("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;OMI/".split(";"), function(b) {
            return A(a, b)
        }) ? !0 : A(a, "Presto") && A(a, "Linux") && !A(a, "X11") && !A(a, "Android") && !A(a, "Mobi") : !1
    }

    function Je() {
        var a = B;
        return A(a, "AppleTV") || A(a, "Apple TV") || A(a, "CFNetwork") || A(a, "tvOS")
    }

    function Ke() {
        var a = B;
        return A(a, "sdk_google_atv_x86") || A(a, "Android TV")
    };

    function U() {
        this.b = !fc(F.top);
        this.i = $b() || !$b() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"));
        var a = ud();
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url && (a = a[a.length - 1].url.match(ac)[3] || null) && decodeURI(a);
        this.a = new I(0, 0, 0, 0);
        this.m = new H(0, 0);
        this.f = new H(0, 0);
        this.c = new I(0, 0, 0, 0);
        this.j = new G(0, 0);
        this.l = null;
        if (!(a = !F)) {
            a = F !== F.top;
            for (var b = F.top, c = F, d = c, e = 0; c && c != c.parent;) c = c.parent, e++, fc(c) && (d = c);
            b = b === d;
            a && b && null != F.top.mraid ? a = {
                Pa: F.top.mraid,
                Ta: 3
            } : (c = F.mraid, a = null != c ? a ? b ? {
                Pa: c,
                Ta: 2
            } : {
                Pa: c,
                Ta: 1
            } : {
                Pa: c,
                Ta: 0
            } : null);
            a = !a
        }
        this.h = !a;
        Le(this)
    }

    function Me(a, b) {
        b && b.screen && (a.m = new H(b.screen.width, b.screen.height))
    }

    function Ne(a, b) {
        var c = a.a ? new H(a.a.O(), a.a.M()) : new H(0, 0);
        b = void 0 === b ? F : b;
        Cc(b) && (b = b.top);
        var d = 0,
            e = 0;
        try {
            var f = b.document,
                g = f.body,
                h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var k = h.scrollHeight,
                    m = h.scrollWidth,
                    p = h.offsetHeight,
                    n = h.offsetWidth;
                h.clientHeight != p && (k = g.scrollHeight, m = g.scrollWidth, p = g.offsetHeight, n = g.offsetWidth);
                k > c.height ? k > p ? (d = k, e = m) : (d = p, e = n) : k < p ? (d = k, e = m) : (d = p, e = n)
            }
            var r = new H(e, d)
        } catch (ta) {
            r = new H(-12245933, -12245933)
        }
        a.f = r
    }

    function Le(a) {
        F && F.document && (a.c = Dc(!1, F, a.i), a.a = Dc(!0, F, a.i), a.l = a.a, Ne(a, F), Me(a, F))
    }

    function Oe() {
        U.g();
        var a = O().b.isVisible(),
            b = 0 === rd();
        return a || b
    }
    w(U);
    var Pe = new I(0, 0, 0, 0);

    function Qe(a, b) {
        try {
            try {
                var c = Be(a.getBoundingClientRect())
            } catch (k) {
                c = new I(0, 0, 0, 0)
            }
            var d = c.right - c.left,
                e = c.bottom - c.top,
                f = xc(a, b),
                g = f.a,
                h = f.b;
            return new I(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
        } catch (k) {
            return tc(Pe)
        }
    }

    function Re(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new I(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left)) : new I(0, 0, 0, 0)
    }

    function Se(a, b) {
        b = Te(b);
        return 0 === b ? 0 : Te(a) / b
    }

    function Te(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function Ue(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                a: {
                    var d = void 0;
                    if (Pb && !(D && ub("9") && !ub("10") && u.SVGElement && a instanceof u.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;
                    var f = typeof d;e = ("object" == f && null != d || "function" == f) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var g = Sb(a),
                        h = g && Vb(g),
                        k = h && h.frameElement;
                    k && (a = k)
                }
            }
            catch (m) {
                break
            }
        }
        return !1
    }

    function Ve(a, b, c) {
        if (!a || !b) return !1;
        b = uc(tc(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = Bc();
        fc(d.top) && d.top && d.top.document && (d = d.top);
        if (!me(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = Sb(c)) && b.defaultView && b.defaultView.frameElement) && Ue(b, a);
        d = a === c;
        a = !d && a && Zb(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function We(a, b, c, d) {
        return U.g().b ? !1 : 0 >= a.O() || 0 >= a.M() ? !0 : c && d ? ge(208, function() {
            return Ve(a, b, c)
        }) : !1
    };

    function Xe(a, b, c) {
        var d = new I(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.c = b;
        this.a = d;
        this.b = c
    };

    function Ye(a, b, c, d, e, f, g) {
        this.j = a;
        this.i = b;
        this.c = c;
        this.b = d;
        this.h = e;
        this.f = f;
        this.a = g
    }

    function Ze(a, b) {
        return b ? Math.max(a.b, a.h) : a.b
    };

    function $e(a) {
        this.c = a;
        this.b = 0;
        this.a = null
    }
    $e.prototype.cancel = function() {
        O().clearTimeout(this.a);
        this.a = null
    };

    function af(a) {
        var b = O();
        a.a = b.setTimeout(Jd(Ld().a, R(143, function() {
            a.b++;
            a.c.xb()
        })), le())
    };

    function bf(a, b, c) {
        this.c = a;
        this.D = void 0 === c ? "na" : c;
        this.h = [];
        this.s = !1;
        this.f = new Xe(-1, !0, this);
        this.a = this;
        this.i = b;
        this.u = this.B = this.l = !1;
        this.C = "uk";
        this.j = !0
    }
    l = bf.prototype;
    l.ba = function() {
        return this.H()
    };
    l.H = function() {
        return !1
    };
    l.Ha = function() {
        this.s = !0
    };
    l.ia = function() {
        return this.a.C
    };

    function cf(a, b) {
        a.u || (a.u = !0, a.C = b, a.i = 0, a.wa(), a.a != a || df(a))
    }
    l.G = function() {
        return this.a.D
    };
    l.K = function() {
        return this.a.fb()
    };
    l.fb = function() {
        return {}
    };
    l.N = function() {
        return this.a.i
    };

    function ef(a, b) {
        y(a.h, b) || (a.h.push(b), b.ja(a.a), b.ha(a.f), b.aa() && (a.l = !0))
    }
    l.Ma = function() {
        var a = U.g();
        a.a = Dc(!0, this.c, a.i)
    };
    l.Oa = function() {
        Me(U.g(), this.c)
    };
    l.Na = function() {
        Ne(U.g(), this.c)
    };
    l.rb = function() {
        var a = U.g();
        a.c = Dc(!1, this.c, a.i)
    };
    l.gb = function() {
        return this.f.a
    };

    function ff(a) {
        a = a.a;
        a.Oa();
        a.Ma();
        a.rb();
        a.Na();
        a.f.a = a.gb()
    }
    l.xb = function() {};

    function gf(a) {
        a.l = a.h.length ? Ea(a.h, function(b) {
            return b.aa()
        }) : !1
    }
    l.wa = function() {};

    function hf(a) {
        var b = Ia(a.h);
        x(b, function(c) {
            c.ha(a.f)
        })
    }

    function df(a) {
        var b = Ia(a.h);
        x(b, function(c) {
            c.ja(a.a)
        });
        a.a != a || hf(a)
    }
    l.ja = function(a) {
        var b = this.a,
            c = a.N();
        this.a = c >= this.i ? a : this;
        b !== this.a ? (this.a == this || 1 == c && 0 != this.i || this.wa(), this.j = this.a.j, df(this)) : this.j !== this.a.j && (this.j = this.a.j, df(this))
    };
    l.ha = function(a) {
        if (a.b === this.a) {
            var b;
            if (!(b = this.B)) {
                b = this.f;
                var c = this.l;
                if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.c == a.c) b = b.a, c = a.a, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
                b = !c
            }
            this.f = a;
            b && hf(this)
        }
    };

    function jf(a, b) {
        a.i !== b && (a.a != a && b > a.a.i && (a.a = a, df(a)), a.i = b)
    }
    l.aa = function() {
        return this.l
    };

    function kf(a, b, c, d) {
        this.c = a;
        this.b = new I(0, 0, 0, 0);
        this.l = new I(0, 0, 0, 0);
        this.a = b;
        this.u = c;
        this.w = d;
        this.timestamp = -1;
        this.h = new Ye(b.f, this.b, new I(0, 0, 0, 0), 0, 0, S(), 0)
    }
    l = kf.prototype;
    l.La = function() {
        return !0
    };
    l.na = function() {};
    l.Ea = function() {
        this.c && (this.b = Qe(this.c, this.a.a.c))
    };
    l.Za = function() {
        this.l = this.a.f.a
    };
    l.fa = function() {
        this.Ea();
        this.h = new Ye(this.a.f, this.b, this.h.c, this.h.b, this.h.h, S(), this.h.a)
    };
    l.K = function() {
        return this.a.K()
    };
    l.N = function() {
        return this.a.N()
    };
    l.ia = function() {
        return this.a.ia()
    };
    l.ja = function() {};
    l.ha = function() {
        this.fa()
    };
    l.aa = function() {
        return this.w
    };

    function lf(a) {
        this.a = a
    }
    l = lf.prototype;
    l.N = function() {
        return this.a.N()
    };
    l.ia = function() {
        return this.a.ia()
    };
    l.create = function(a, b, c) {
        var d = null;
        this.a && (d = this.Fa(a, b, c), ef(this.a, d));
        return d
    };
    l.ba = function() {
        return this.H()
    };
    l.H = function() {
        return !1
    };
    l.sa = function() {
        return !0
    };
    l.K = function() {
        return {}
    };

    function mf(a, b, c) {
        this.c = void 0 === c ? 0 : c;
        this.b = a;
        this.a = null == b ? "" : b
    }

    function nf(a, b) {
        return a.c < b.c ? !0 : a.c > b.c ? !1 : a.b < b.b ? !0 : a.b > b.b ? !1 : typeof a.a < typeof b.a ? !0 : typeof a.a > typeof b.a ? !1 : a.a < b.a
    };

    function of () {
        this.c = 0;
        this.a = [];
        this.b = !1
    } of .prototype.add = function(a, b, c) {
        ++this.c;
        a = new mf(a, b, c);
        this.a.push(new mf(a.b, a.a, a.c + this.c / 4096));
        this.b = !0;
        return this
    };

    function pf(a) {
        var b = new of ;
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        gc(a, function(e, f) {
            d && void 0 === e || b.add(f, e, c)
        });
        return b
    }

    function qf(a) {
        var b = rf;
        a.b && (Ka(a.a, function(c, d) {
            return nf(d, c) ? 1 : nf(c, d) ? -1 : 0
        }), a.b = !1);
        return Da(a.a, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };

    function rf(a) {
        var b = a.b;
        a = a.a;
        return "" === a ? b : "boolean" == typeof a ? a ? b : "" : qa(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (y(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };

    function sf(a) {
        var b = [],
            c = [];
        Qa(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d) switch (qa(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                case "aio":
                case "nio":
                case "iem":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
            }
        });
        return b.concat(c)
    }

    function tf() {
        if (/r\d{8}/.test("<<<CAFE_VERSION_ID:j>>>")) return "<<<CAFE_VERSION_ID:j>>>";
        if (Nb && "unreleased" !== Nb) return Nb
    }

    function uf(a) {
        if (/&v=[^&]+/.test(a)) return a;
        var b = tf();
        return b ? a + "&v=" + encodeURIComponent(b) : a
    }

    function vf(a) {
        var b = void 0 === b ? 4E3 : b;
        a = uf(a.toString());
        a = a.substring(0, b);
        Fd(a)
    };

    function wf() {};

    function xf() {
        this.a = this.b = this.c = 0
    }

    function yf(a, b, c, d) {
        b && (a.c += c, a.b += c, a.a = Math.max(a.a, a.b));
        if (void 0 === d ? !b : d) a.b = 0
    };
    var zf = [1, .75, .5, .3, 0];

    function Af(a) {
        this.a = a = void 0 === a ? zf : a;
        this.b = Ca(this.a, function() {
            return new xf
        })
    }

    function Bf(a) {
        return Cf(a, function(b) {
            return b.c
        }, !1)
    }

    function Df(a) {
        return Cf(a, function(b) {
            return b.a
        }, !0)
    }

    function Ef(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.a.length; f++) {
            var h = a.a[f],
                k = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            yf(a.b[f], g && k, e, !g || h)
        }
    }

    function Cf(a, b, c) {
        a = Ca(a.b, function(d) {
            return b(d)
        });
        return c ? a : Ff(a)
    }

    function Ff(a) {
        return Ca(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };

    function Gf() {
        this.a = new Af;
        this.c = new xf;
        this.b = -1;
        this.f = new Af([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }

    function Hf(a) {
        return 1E3 <= a.c.a
    };
    var If = new I(0, 0, 0, 0);

    function V(a, b, c) {
        this.V = tc(If);
        this.c = new Gf;
        this.U = -2;
        this.Bb = -1;
        this.Ba = b;
        this.ya = null;
        this.u = -1 != b;
        this.I = null;
        this.F = -1;
        this.W = c;
        this.Cb = this.Qb = oa;
        this.a = new fd;
        this.a.a = a;
        this.a.b = a;
        this.A = !1;
        this.l = {
            ua: null,
            ta: null
        };
        this.X = !0;
        this.Aa = !1;
        P.g().m++;
        this.f = new Gc;
        this.Ab = this.$ = -1;
        this.za = 0;
        this.C = -1;
        this.b = null;
        this.B = new I(0, 0, 0, 0);
        this.tb = !1;
        this.i = new Wc;
        bd(this.i);
        (a = this.a.a) && a.getAttribute && ed(a, "googleAvInapp") && (U.g().h = !0);
        1 == this.W ? Xc(this.i, "od", 1) : Xc(this.i, "od", 0)
    }
    t(V, wf);

    function Jf(a) {
        return a.b ? a.b.b : a.V
    }
    l = V.prototype;
    l.ra = function(a) {
        var b = P.g();
        v(a) && 0 != a.length && (b.f = Zc(b.a, a))
    };
    l.qb = function() {
        return !1
    };
    l.Ka = function() {
        this.u = !0
    };
    l.ka = function() {
        return this.u
    };
    l.Qa = function() {
        this.f.a = 0
    };
    l.Ra = function() {
        this.c = new Gf
    };

    function Kf(a, b) {
        b = b.create(a.a.b, a.i, a.qb());
        if (b = null != b && b.La() ? b : null) a.b = b
    }

    function Lf(a, b, c) {
        if (a.b) {
            a.b.fa();
            var d = a.b.h,
                e = d.j,
                f = e.a;
            if (null != d.c) {
                var g = d.i;
                a.I = new G(g.left - f.left, g.top - f.top);
                a.B = d.c
            }
            f = Ze(d, a.zb());
            g = {};
            null !== e.volume && (g.volume = e.volume);
            var h = P.g().a;
            Ea(["imams", "gms"], function(k) {
                return 1 === M(h, k)
            }) || 1 === M(a.i, "osddt") ? (e = 0, a.ya && (e = d.f - a.ya.f), a.ya = d, a.xa(Jf(a), f, b, c, !1, g, e, d.a)) : a.xa(Jf(a), f, b, c, !1, g, void 0, d.a)
        }
    }
    l.xa = function(a, b, c, d, e, f, g, h) {
        void 0 === g && (-1 == this.Ba ? g = 0 : (g = c - this.Ba || 1, g = 1E4 < g ? 1 : g));
        h = void 0 === h ? -1 : h;
        if (!this.A) {
            na(b) || (this.I = new G(a.left - b.left, a.top - b.top));
            if (this.ka()) {
                f = h;
                f = void 0 === f ? -1 : f;
                h = new Gc;
                h.h = d;
                h.c = Ce();
                if (na(b)) h.a = Mf(this, b), h.f = f;
                else {
                    h.a = Mf(this, a, b);
                    var k;
                    0 <= f ? k = f : k = h.a * Te(a) / (F.screen.height * F.screen.width);
                    h.f = k
                }
                h.b = this.ma();
                k = this.c;
                f = this.f;
                e = e && this.f.a >= (this.ma() ? .3 : .5);
                k.b = Math.max(k.b, h.a);
                Ef(k.f, h.f, f.f, h.h, g, e);
                Ef(k.a, h.a, f.a, h.h, g, e);
                e = e || f.b != h.b ? f.isVisible() && h.isVisible() : f.isVisible();
                f = !h.isVisible() || h.h;
                yf(k.c, e, g, f);
                this.Ba = c;
                0 < h.a && (-1 === this.$ && (this.$ = c), this.Ab = c); - 1 == this.Bb && Hf(this.c) && (this.Bb = c);
                if (-2 == this.U) try {
                    a: {
                        var m = na(b) ? null : b;
                        if (a && a != If && 0 != Te(Jf(this))) {
                            var p = U.g();
                            if (!m) {
                                if (!p.a) {
                                    var n = -1;
                                    break a
                                }
                                m = new I(0, p.a.O(), p.a.M(), 0)
                            }
                            n = m.O && 0 < m.O() && m.M && 0 < m.M() ? Mf(this, a, m) : -1
                        } else n = -1
                    }
                    this.U = n
                }
                catch (r) {
                    he(207, r)
                }
                this.f = h;
                d && (this.f.a = 0)
            }
            this.Qb(this)
        }
    };

    function Mf(a, b, c) {
        if (0 === a.F && 1 === M(a.i, "opac")) return 0;
        if (na(b)) return b;
        b = Re(b, c);
        var d = 1 == M(a.i, "od");
        if (0 >= Te(Jf(a)) || We(b, c, a.a.b, d)) return 0;
        d = Te(b) / Te(Jf(a));
        c = Se(b, c);
        return a.zb() ? Math.max(d, c) : d
    }
    l.ma = function() {
        return !1
    };
    l.zb = function() {
        return this.tb || this.Aa
    };
    l.Ua = function(a, b, c) {
        if (c) this.V = c;
        else {
            a = b ? a : a.top;
            this.V = tc(If);
            try {
                this.a.b && (this.V = Qe(this.a.b, a))
            } catch (d) {}
        }
    };

    function Nf(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }

    function Of(a) {
        a.a.b && (a.l.ua = T(a.a.b, "mouseover", function() {
            var b = S();
            a.C = b
        }, 149), a.l.ta = T(a.a.b, "mouseout", function() {
            var b = S(); - 1 == a.C || b < a.C || (a.za += b - a.C);
            a.C = -1
        }, 150))
    }

    function Pf(a, b) {
        P.g();
        if (b = void 0 === b ? oa : b) a.Cb = b
    };

    function Qf(a) {
        return $a() ? (a = (a = Sb(a)) && Vb(a), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    };
    var Rf = "StopIteration" in u ? u.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function Sf() {}
    Sf.prototype.next = function() {
        throw Rf;
    };
    Sf.prototype.Wa = function() {
        return this
    };

    function Tf(a) {
        if (a instanceof Sf) return a;
        if ("function" == typeof a.Wa) return a.Wa(!1);
        if (ra(a)) {
            var b = 0,
                c = new Sf;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw Rf;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function Uf(a, b) {
        if (ra(a)) try {
            x(a, b, void 0)
        } catch (c) {
            if (c !== Rf) throw c;
        } else {
            a = Tf(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== Rf) throw c;
            }
        }
    }

    function Vf(a, b) {
        var c = 1;
        Uf(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }

    function Wf(a, b) {
        var c = Tf(a);
        a = new Sf;
        a.next = function() {
            var d = c.next();
            if (b.call(void 0, d, void 0, c)) return d;
            throw Rf;
        };
        return a
    }

    function Xf(a) {
        var b = Tf(a);
        a = new Sf;
        var c = 100;
        a.next = function() {
            if (0 < c--) return b.next();
            throw Rf;
        };
        return a
    };

    function Yf(a, b) {
        this.c = b;
        this.b = null == a;
        this.a = a
    }
    t(Yf, Sf);
    Yf.prototype.next = function() {
        if (this.b) throw Rf;
        var a = this.a || null;
        this.b = null == a;
        var b;
        if (b = a) {
            b = this.c;
            if (gb(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? Qf : d;
                if (d(a)) try {
                    var e = Sb(a),
                        f = e && Vb(e),
                        g = f && f.frameElement;
                    c = null == g ? null : g
                } catch (h) {
                    c = null
                } else c = null
            } else c = null;
            b = c
        }
        this.a = b;
        return a
    };

    function Zf(a) {
        var b = 1;
        a = Xf(new Yf(a, !0));
        a = Wf(a, function() {
            return 0 < b
        });
        return Vf(a, function(c, d) {
            var e = 1;
            if (gb(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = Sb(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[cb()];
                    if ("undefined" !== typeof g) d = g;
                    else {
                        g = d.style;
                        var h = vc.opacity;
                        if (!h) {
                            var k = cb();
                            h = k;
                            void 0 === d.style[k] && (k = (mb ? "Webkit" : lb ? "Moz" : D ? "ms" : jb ? "O" : null) + eb(k), void 0 !== d.style[k] && (h = k));
                            vc.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                na(f) && !isNaN(f) && (e = f)
            }
            return b = c * e
        })
    };

    function $f(a, b, c, d, e, f, g) {
        f = void 0 === f ? oa : f;
        g = void 0 === g ? [] : g;
        V.call(this, c, d, e);
        this.o = b;
        this.da = this.j = 0;
        this.R = null;
        this.ib = this.Ca = "";
        this.L = [];
        this.P = [];
        this.ca = this.hb = "";
        this.sb = !1;
        this.T = 4;
        this.ub = [];
        this.nb = "";
        this.ab = !1;
        this.wb = -1;
        this.eb = "";
        this.bb = -1;
        this.s = 0;
        this.Z = -1;
        this.S = 0;
        this.J = this.mb = Ce();
        this.h = 0;
        this.Sb = f;
        this.vb = !1;
        this.D = this.Da = this.Ga = this.Y = this.m = -1;
        this.w = {};
        this.Rb = g;
        ag(this, this.a.a);
        this.o && v(this.o) && (b = this.o.match(/fa=([^&;]+)/)) && 2 == b.length && b[1] == (30).toString() && (this.Aa = !0);
        ad(P.g().a, this.o);
        b = U.g();
        this.Ua(a, b.b)
    }
    t($f, V);

    function bg(a, b, c) {
        return (a = String(a[b] || dd(a, c) || "")) ? a.split("|") : []
    }

    function ag(a, b) {
        if (b) {
            if (0 == a.j)
                if (a.a.a) {
                    var c = a.a.a._adk_;
                    c || (c = (c = dd(a.a.a, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else c = 0;
            else c = a.j;
            a.j = c;
            "" == a.Ca && (a.Ca = String(b._avi_ || ""));
            "" == a.ib && (a.ib = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            a.L.length || (a.L = bg(b, "_avicxn_", "googleAvCxn"));
            a.P.length || (a.P = bg(b, "_avieoscxn_", "googleEOSAvCxn"));
            "" == a.hb && (a.hb = String(b._aviextcxn_ || dd(b, "googleAvExtCxn") || ""));
            "" == a.ca && (a.ca = String(b._cid_ || ""));
            a.sb || (a.sb = !!b._imm_ || ed(b, "googleAvImmediate"));
            "" == a.nb && (a.nb = String(b._cvu_ || dd(b, "googleAvCpmav") || ""));
            a.ra(String(b._avm_ || dd(b, "googleAvMetadata") || ""))
        }
    }

    function cg(a, b, c) {
        x(a.Rb, function(d) {
            return d.a(a, c, b)
        })
    }
    l = $f.prototype;
    l.ka = function() {
        return this.u && !(1 == this.h || 3 == this.h)
    };

    function dg(a, b) {
        a.h == b || 2 == a.h || 1 == a.h && 3 == b || (a.h = b, 1 != a.h && 3 != a.h || a.Ra())
    }

    function eg(a) {
        a.ob && nc(a.a.a, "DOMNodeRemoved", a.ob);
        a.ea && a.ea.disconnect()
    }

    function fg(a) {
        a.a.a && (eg(a), a.Z = -1, u.MutationObserver ? (a.ea = new u.MutationObserver(function(b, c) {
            for (var d = 0; d < b.length; d++)
                if ("childList" == b[d].type && b[d].removedNodes.length) {
                    a.Z = S();
                    c.disconnect();
                    break
                }
        }), a.ea.observe(a.a.a, {
            childList: !0,
            subtree: !0
        })) : a.ob = qe(a.a.a, function() {
            a.Z = S()
        }))
    }
    l.Qa = function() {
        V.prototype.Qa.call(this);
        this.B = new I(0, 0, 0, 0)
    };
    l.Ra = function() {
        V.prototype.Ra.call(this);
        this.B = new I(0, 0, 0, 0)
    };
    l.Ka = function() {
        this.u || (this.Ga = Qd(), this.wb = S(), gg(this, !1, this.U));
        V.prototype.Ka.call(this);
        hg(this)
    };

    function hg(a) {
        if (a.u && u == u.top) {
            var b = u.pageYOffset;
            null != b && (a.D = Math.max(b, a.D));
            cg(a, 4, {})
        }
    }
    l.ra = function(a) {
        if (v(a) && 0 != a.length) {
            var b = new Wc,
                c = P.g();
            L(b, "omid", J);
            Zc(b, a);
            b = M(b, "omid");
            null !== b && (c.a.b.omid = b);
            a = Zc(this.i, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.X = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1], "0" == d ? this.S = 2 : "1" == d && (this.S = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.tb = !0) : 0 == d.lastIndexOf("alp=", 0) ? this.eb = d.split("=")[1] : 0 == d.lastIndexOf("alh=", 0) ? (d = parseInt(d.split("=")[1], 10), isNaN(d) || (this.bb = d)) : "adf=1" == d && (this.vb = !0)
            }
            this.f.b = this.ma();
            V.prototype.ra.call(this, a)
        }
    };
    l.xa = function(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f;
        var g = Hf(this.c),
            h = Math.floor(100 * this.f.a);
        this.S = 242500 <= (a.right - a.left) * (a.bottom - a.top) ? 1 : 2;
        V.prototype.xa.call(this, a, b, c, d, e, f); - 1 == this.J && -1 != this.f.c ? this.J = this.f.c : 0 == this.J && 1 == this.f.c && (this.J = 1);
        na(b) || (0 < this.f.a ? (b = Re(a, b), this.B = 0 >= Te(Jf(this)) || b.top >= b.bottom || b.left >= b.right ? new I(0, 0, 0, 0) : uc(b, -a.left, -a.top)) : this.B = new I(0, 0, 0, 0));
        a = Hf(this.c);
        b = Math.floor(100 * this.f.a);
        (!g && a || b != h) && gg(this, a, b);
        try {
            this.F = Zf(this.a.b)
        } catch (k) {}
        hg(this)
    };
    l.ma = function() {
        return nb ? !1 : 1 == this.S
    };
    l.Ua = function(a, b, c) {
        if (!b && (-1 != this.wb || -1 != this.Z) && 2 != this.s && 1 != this.s && -1 != this.s && 7 != this.s) {
            var d = null;
            try {
                d = this.a.b && this.a.b.getBoundingClientRect()
            } catch (f) {}
            if (!d || 0 == d.width || 0 == d.height)
                if (d = Ae(a.top, this.eb, this.bb), this.s = d.status, d.a)
                    if (d.a == this.a.b) this.s = 2;
                    else if (d = d.a, eg(this), this.a.b && (this.l.ua && (nc(this.a.b, "mouseover", this.l.ua), this.l.ua = null), this.l.ta && (nc(this.a.b, "mouseout", this.l.ta), this.l.ta = null)), this.a.b = d, Of(this), ag(this, d), fg(this), this.b) {
                var e = this.b;
                e.na();
                e.c = d;
                e.La();
                e.fa()
            }
        }
        V.prototype.Ua.call(this, a, b, c)
    };

    function ig(a, b, c) {
        var d = [],
            e = [];
        d = void 0 === d ? [] : d;
        e = void 0 === e ? [] : e;
        a.L.length || (a.Ca = b, d && (a.L = d), a.ca = void 0 === c ? "" : c);
        !a.P.length && e && (a.P = e)
    }

    function jg(a) {
        var b = a.m;
        var c = a.m;
        c = -1 == c || a.Y < c ? -1 : a.Y - c;
        var d = -1 == a.m || a.Ga < a.m ? -1 : a.Ga - a.m,
            e = kg(a),
            f = {};
        return f.rst = 0 < b ? b : void 0, f.dlt = 0 <= c ? c : void 0, f.rpt = 0 <= d ? d : void 0, f.isd = 0 <= a.Da ? a.Da : void 0, f.msd = 0 <= a.D ? a.D : void 0, f.ext = e ? e : void 0, f
    }

    function kg(a) {
        return a.w && 0 < hc(a.w).length ? encodeURIComponent(Ca(hc(a.w), function(b) {
            return b + "=" + a.w[b]
        }).join("&")) : null
    }

    function lg(a, b) {
        b && gc(b, function(c, d) {
            null == c ? delete a.w[d] : a.w[d] = c
        })
    }

    function gg(a, b, c) {
        if (b = a.Sb(b, c)) lg(a, b), cg(a, 3, {})
    }
    l.qb = function() {
        return !1
    };

    function mg() {}

    function ng(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (qa(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), ng(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), og(d, c), c.push(":"), ng(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    og(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var pg = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        qg = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function og(a, b) {
        b.push('"', a.replace(qg, function(c) {
            var d = pg[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), pg[c] = d);
            return d
        }), '"')
    };

    function rg() {
        this.key = "goog_adspeed";
        this.c = [3, 4];
        this.b = null
    }
    rg.prototype.a = function(a, b, c) {
        if (!y(this.c, c) || !od(new nd(a.j, a.R))) return !1;
        c = {};
        c[0] = this.key;
        var d = jg(a),
            e = [];
        ng(new mg, d, e);
        c = (c[40] = e.join(""), c);
        if (d = this.b) a: {
            d = this.b;
            for (var f in d)
                if (!(f in c) || d[f] !== c[f]) {
                    d = !1;
                    break a
                }
            for (var g in c)
                if (!(g in d)) {
                    d = !1;
                    break a
                }
            d = !0
        }
        if (d) return !1;
        this.b = c;
        f = {};
        z(f, c, b);
        return sg(a, {
            Va: {},
            Ja: f
        })
    };

    function tg() {
        this.key = "goog_update_data";
        this.b = 0;
        this.c = !1
    }
    tg.prototype.a = function(a, b, c) {
        if (c != this.b || !od(new nd(a.j, a.R))) return !1;
        c = 1 == a.T;
        var d = Hf(a.c),
            e = {},
            f = {};
        b = {
            Ja: (e[0] = this.key, e),
            Va: Object.assign({}, b, (f.r = b.r, f))
        };
        if (c) return d && !this.c ? (this.c = d, sg(a, b)) : !1;
        this.c = d;
        return sg(a, b)
    };

    function ug(a) {
        tg.call(this, a);
        this.key = "goog_image_request";
        this.b = 2
    }
    t(ug, tg);

    function vg(a) {
        tg.call(this, a);
        this.key = "goog_image_request";
        this.b = 1
    }
    t(vg, tg);
    vg.prototype.a = function(a, b, c) {
        var d = !a.ab;
        if (Hf(a.c) && a.X || d) {
            if (b = tg.prototype.a.call(this, a, b, c))
                if (Hf(a.c) || (a.ab = !0), Hf(a.c) || a.X) a.X = !1;
            return b
        }
        return !1
    };

    function wg() {
        this.b = [];
        this.a = []
    }

    function xg() {
        var a = W;
        return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : Ha(a.a, a.b)
    }
    wg.prototype.reset = function() {
        this.b = [];
        this.a = []
    };
    w(wg);
    var W = wg.g();

    function yg() {
        this.a = this.b = null
    }

    function zg(a, b) {
        function c(d, e) {
            a.a = null;
            b(d, e)
        }
        if (null == a.b) return !1;
        a.a = Fa(a.b, function(d) {
            return null != d && d.ba() && d.sa(c)
        });
        a.a && ff(a.a.a);
        return null != a.a
    }
    w(yg);

    function Ag(a, b, c, d) {
        kf.call(this, a, b, c, d)
    }
    t(Ag, kf);
    Ag.prototype.kb = function(a) {
        return We(a, this.l, this.c, 1 == M(this.u, "od"))
    };
    Ag.prototype.fa = function() {
        var a = this.a.f;
        this.timestamp = -1 === a.time ? S() : a.time;
        this.Ea();
        this.Za();
        a = Re(this.b, this.l);
        var b = a.top >= a.bottom || a.left >= a.right ? new I(0, 0, 0, 0) : a;
        a = this.a.f;
        var c = 0,
            d = 0,
            e = 0;
        0 < (this.b.bottom - this.b.top) * (this.b.right - this.b.left) && (this.kb(b) ? b = new I(0, 0, 0, 0) : (c = U.g().m, e = new I(0, c.height, c.width, 0), c = Se(b, this.b), d = Se(b, U.g().a), e = Se(b, e)));
        b = b.top >= b.bottom || b.left >= b.right ? new I(0, 0, 0, 0) : uc(b, -this.b.left, -this.b.top);
        this.h = new Ye(a, this.b, b, c, d, this.timestamp, e)
    };
    Ag.prototype.G = function() {
        return this.a.G()
    };

    function Bg(a) {
        a = Cg(a);
        this.a = a.length ? a[a.length - 1] : new bf(F, 0);
        this.c = a;
        this.f = oa;
        this.b = null
    }
    t(Bg, lf);
    l = Bg.prototype;
    l.G = function() {
        return (this.b ? this.b : this.a).G()
    };
    l.K = function() {
        return (this.b ? this.b : this.a).K()
    };
    l.N = function() {
        return (this.b ? this.b : this.a).N()
    };
    l.sa = function(a) {
        this.f = a;
        x(this.c, function(b) {
            return b.Ha()
        });
        ef(this.a, this);
        return !0
    };
    l.ba = function() {
        return Ea(this.c, function(a) {
            return a.ba()
        })
    };
    l.H = function() {
        return Ea(this.c, function(a) {
            return a.H()
        })
    };
    l.Fa = function(a, b, c) {
        return new Ag(a, this.a, b, c)
    };
    l.ja = function(a) {
        0 == a.N() && this.f(a.ia(), this)
    };
    l.ha = function(a) {
        this.b = a.b
    };
    l.aa = function() {
        return !1
    };

    function Cg(a) {
        if (!a.length) return [];
        a = Ba(a, function(c) {
            return null != c && c.ba()
        });
        for (var b = 1; b < a.length; b++) ef(a[b - 1], a[b]);
        return a
    };

    function Dg(a, b, c, d) {
        kf.call(this, a, b, c, d);
        this.o = this.m = null
    }
    t(Dg, Ag);
    l = Dg.prototype;
    l.La = function() {
        var a = this;
        this.o || (this.o = S());
        if (ge(298, function() {
                return a.s()
            })) return !0;
        cf(this.a, "msf");
        return !1
    };

    function Eg(a, b) {
        try {
            if (b.length) {
                a.m || (a.m = S());
                var c = Fg(b),
                    d = xc(a.c, a.a.a.c),
                    e = d.a,
                    f = d.b;
                a.b = new I(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                var g = Be(c.intersectionRect);
                a.l = uc(g, a.b.left - g.left, a.b.top - g.top)
            }
        } catch (h) {
            a.na(), he(299, h)
        }
    }

    function Fg(a) {
        return Da(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    l.Ea = function() {};
    l.kb = function() {
        return !1
    };
    l.Za = function() {};
    l.K = function() {
        var a = {};
        return Object.assign(this.a.K(), (a.niot_obs = this.o, a.niot_cbk = this.m, a))
    };
    var Gg = {
        threshold: [0, .3, .5, .75, 1]
    };

    function Hg(a, b, c, d) {
        Dg.call(this, a, b, c, d);
        this.i = this.j = this.f = null
    }
    t(Hg, Dg);
    Hg.prototype.G = function() {
        return "nio"
    };
    Hg.prototype.na = function() {
        if (this.f && this.c) try {
            this.f.unobserve(this.c), this.j ? (this.j.unobserve(this.c), this.j = null) : this.i && (this.i.disconnect(), this.i = null)
        } catch (a) {}
    };

    function Ig(a) {
        return a.f && a.f.takeRecords ? a.f.takeRecords() : []
    }
    Hg.prototype.s = function() {
        var a = this;
        if (!this.c) return !1;
        var b = this.c,
            c = this.a.a.c,
            d = Ld().a;
        this.f = new c.IntersectionObserver(Jd(d, function(e) {
            return Eg(a, e)
        }), Gg);
        d = Jd(d, function() {
            a.f.unobserve(b);
            a.f.observe(b);
            Eg(a, Ig(a))
        });
        c.ResizeObserver ? (this.j = new c.ResizeObserver(d), this.j.observe(b)) : c.MutationObserver && (this.i = new u.MutationObserver(d), this.i.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        this.f.observe(b);
        Eg(this, Ig(this));
        return !0
    };
    Hg.prototype.fa = function() {
        var a = Ig(this);
        0 < a.length && Eg(this, a);
        Dg.prototype.fa.call(this)
    };

    function Jg(a) {
        a = void 0 === a ? F : a;
        this.a = new bf(a, 2)
    }
    t(Jg, lf);
    Jg.prototype.G = function() {
        return "nio"
    };
    Jg.prototype.H = function() {
        return "exc" !== (P.g(), "ns") && !U.g().h && null != this.a.a.c.IntersectionObserver
    };
    Jg.prototype.Fa = function(a, b, c) {
        return new Hg(a, this.a, b, c)
    };

    function Kg() {}
    w(Kg);

    function Lg(a, b, c) {
        this.f = null != c ? va(a, c) : a;
        this.c = b;
        this.b = va(this.Pb, this);
        this.a = []
    }
    ya(Lg, wf);
    l = Lg.prototype;
    l.va = !1;
    l.ga = null;
    l.cb = function(a) {
        this.a = arguments;
        this.ga ? this.va = !0 : Mg(this)
    };
    l.stop = function() {
        this.ga && (u.clearTimeout(this.ga), this.ga = null, this.va = !1, this.a = [])
    };
    l.Pb = function() {
        this.ga = null;
        this.va && (this.va = !1, Mg(this))
    };

    function Mg(a) {
        var b = a.b;
        var c = a.c;
        if ("function" != pa(b))
            if (b && "function" == typeof b.handleEvent) b = va(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        b = 2147483647 < Number(c) ? -1 : u.setTimeout(b, c || 0);
        a.ga = b;
        a.f.apply(null, a.a)
    };

    function Ng() {
        this.done = !1;
        this.a = {
            Hb: 0,
            Gb: 0,
            Sa: 0,
            $a: 0,
            qa: -1,
            Mb: 0,
            Lb: 0,
            Nb: 0
        };
        this.s = this.h = this.l = this.i = this.m = null;
        this.u = !1;
        this.o = "";
        this.b = null;
        this.w = 0;
        this.f = new $e(this)
    }

    function Og() {
        var a = (P.g(), "ns");
        return "nio" === a || "aio" === a || "omid" === a
    }

    function Pg(a) {
        var b = X;
        if (!b.u) {
            b.u = !0;
            if (!b.m && !Og()) {
                var c = R(137, function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                    return b.j.apply(b, q(f))
                });
                b.i = new Lg(c, 100);
                b.m = T(a, "scroll", function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                    null !== b.i && b.i.cb.apply(b.i, q(f))
                }, 138)
            }
            b.l || Og() || (c = R(140, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return b.j.apply(b, q(f))
            }), b.h = new Lg(c, 100), b.l = T(a, "resize", function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                null !== b.h && b.h.cb.apply(b.h, q(f))
            }, 141));
            a = xg();
            for (var d = 0; d < a.length; ++d) c = a[d], c.a.b && Of(c);
            Qg(b, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return b.c.apply(b, q(f))
            });
            b.c()
        }
    }
    Ng.prototype.j = function() {
        Rg(this, xg(), !1)
    };
    Ng.prototype.xb = function() {
        Rg(this, xg(), !1)
    };

    function Sg() {
        Kg.g();
        var a = yg.g();
        null != a.a && a.a.a ? ff(a.a.a) : Le(U.g())
    }

    function Rg(a, b, c) {
        if (!a.done && (a.f.cancel(), 0 != b.length)) {
            a.b = null;
            try {
                Sg();
                var d = S();
                P.g().j = d;
                if (null != yg.g().a)
                    for (var e = 0; e < b.length; e++) Lf(b[e], d, c);
                for (e = 0; e < b.length; e++);
                a.a.Sa += S() - d;
                ++a.a.$a;
                Tg(a)
            } finally {
                c ? x(b, function(f) {
                    return f.Qa()
                }) : af(a.f)
            }
        }
    }

    function Qg(a, b) {
        if (!a.s) {
            b = ce(142, b);
            O();
            var c;
            E.visibilityState ? c = "visibilitychange" : E.mozVisibilityState ? c = "mozvisibilitychange" : E.webkitVisibilityState && (c = "webkitvisibilitychange");
            c && mc(E, c, b, {
                capture: !1
            }) && (a.s = b)
        }
    }
    Ng.prototype.c = function() {
        var a = Oe(),
            b = S();
        a ? (ke || (je = b, x(W.b, function(c) {
            return c.c.i(b, !c.h())
        })), ke = !0) : (this.w = Ug(this, b), ke = !1, x(W.b, function(c) {
            c.ka() && c.c.h(b)
        }));
        Rg(this, xg(), !a)
    };

    function Vg(a, b, c) {
        if (!a.b || c) {
            c = b.document;
            var d = -1,
                e = S(); - 1 == a.a.qa && (d = e);
            var f = U.g(),
                g = P.g(),
                h = Yc(g.a),
                k = xg();
            try {
                if (0 < k.length) {
                    var m = f.a;
                    m && (h.bs = [m.O(), m.M()]);
                    var p = f.f;
                    p && (h.ps = [p.width, p.height]);
                    b.screen && (h.ss = [b.screen.width, b.screen.height])
                } else h.url = encodeURIComponent(b.location.href.substring(0, 512)), c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                h.tt = d;
                h.pt = -1;
                h.bin = g.b;
                switch (P.g(), "ns") {
                    case "iem":
                        h.iem = 1;
                        break;
                    case "aio":
                        h.aio = 1;
                        break;
                    case "nio":
                        h.nio = 1
                }
                void 0 !== b.google_osd_load_pub_page_exp && (h.olpp = b.google_osd_load_pub_page_exp);
                h.deb = [1, a.a.Hb, a.a.Gb, a.a.Sa, a.a.$a, a.a.qa, ve, a.f.b, a.a.Mb, a.a.Lb, a.a.Nb].join("-");
                h.tvt = Ug(a, e);
                f.h && (h.inapp = 1);
                if (Cc(b)) {
                    0 < k.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var n = f.c;
                    h.is = [n.O(), n.M()]
                }
            } catch (ta) {
                h.error = 1
            }
            a.b = h
        }
        a = Ta(a.b);
        b = Ld();
        var r;
        if (1 == M(b.c, "prf")) {
            m = new Hd;
            p = b.a;
            n = 0; - 1 < p.a && (n = p.f.a.a() - p.a);
            m = Lb(m, 1, p.c + n);
            p = b.a;
            m = Lb(m, 5, -1 < p.a ? p.b + 1 : p.b);
            m = Lb(m, 2, b.b.a.f());
            m = Lb(m, 3, b.b.a.c());
            m = Lb(m, 4, b.b.a.b());
            b = {};
            p = new Eb;
            n = Jb(m, 1);
            n = null == n ? n : +n;
            n = null == n ? 0 : n;
            if (0 !== n && (c = n, null != c)) {
                Cb(p.a, 9);
                n = p.a;
                e = c;
                e = (c = 0 > e ? 1 : 0) ? -e : e;
                if (0 === e) zb = 0 < 1 / e ? 0 : 2147483648, yb = 0;
                else if (isNaN(e)) zb = 2147483647, yb = 4294967295;
                else if (1.7976931348623157E308 < e) zb = (c << 31 | 2146435072) >>> 0, yb = 0;
                else if (2.2250738585072014E-308 > e) e /= Math.pow(2, -1074), zb = (c << 31 | e / 4294967296) >>> 0, yb = e >>> 0;
                else {
                    f = e;
                    d = 0;
                    if (2 <= f)
                        for (; 2 <= f && 1023 > d;) d++, f /= 2;
                    else
                        for (; 1 > f && -1022 < d;) f *= 2, d--;
                    e *= Math.pow(2, -d);
                    zb = (c << 31 | d + 1023 << 20 | 1048576 * e & 1048575) >>> 0;
                    yb = 4503599627370496 * e >>> 0
                }
                Db(n, yb);
                Db(n, zb)
            }
            n = Kb(m, 2);
            0 !== n && null != n && Fb(p, 2, n);
            n = Kb(m, 3);
            0 !== n && null != n && Fb(p, 3, n);
            n = Kb(m, 4);
            0 !== n && null != n && Fb(p, 4, n);
            n = Kb(m, 5);
            if (0 !== n && null != n && null != n)
                if (Cb(p.a, 40), m = p.a, 0 <= n) Cb(m, n);
                else {
                    for (c = 0; 9 > c; c++) m.a.push(n & 127 | 128), n >>= 7;
                    m.a.push(1)
                }
            m = new Uint8Array(p.c + p.a.length());
            c = p.b;
            d = c.length;
            for (e = n = 0; e < d; e++) f = c[e], m.set(f, n), n += f.length;
            c = Bb(p.a);
            m.set(c, n);
            p.b = [m];
            void 0 === r && (r = 0);
            if (!xb)
                for (xb = {}, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), n = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                    for (d = p.concat(n[c].split("")), wb[c] = d, e = 0; e < d.length; e++) f = d[e], void 0 === xb[f] && (xb[f] = e);
            r = wb[r];
            p = [];
            for (n = 0; n < m.length; n += 3) g = m[n], h = (c = n + 1 < m.length) ? m[n + 1] : 0, f = (d = n + 2 < m.length) ? m[n + 2] : 0, e = g >> 2, g = (g & 3) << 4 | h >> 4, h = (h & 15) << 2 | f >> 6, f &= 63, d || (f = 64, c || (h = 64)), p.push(r[e], r[g], r[h] || "", r[f] || "");
            r = (b.pf = p.join(""), b)
        } else r = {};
        z(a, r);
        return a
    }

    function Wg() {
        x(xg(), function(a) {
            a.a.a && Kg.g()
        })
    }

    function Tg(a) {
        "osd" == a.o && x(W.a, function(b) {
            var c = {};
            cg(b, 0, (c.r = void 0, c))
        })
    }

    function Ug(a, b) {
        a = a.w;
        ke && (a += b - je);
        return a
    }

    function Xg(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function Yg() {
        var a = X;
        var b = void 0 === b ? function() {
            return {}
        } : b;
        de.h = "av-js";
        Zd.a = .01;
        fe([function(c) {
            var d = P.g(),
                e = {};
            z(c, (e.bin = d.b, e.type = "error", e), Yc(d.a), Vg(a, F), b());
            if (d = tf()) e = {}, z(c, (e.v = encodeURIComponent(d), e))
        }])
    }

    function Zg(a) {
        var b = new $g;
        switch (a) {
            case 0:
            case 5:
                return [];
            default:
                return a = 4 === P.g().b, [new tg(b), new vg(b), new ug(b)].concat(q(a ? [] : [new rg]))
        }
    }
    w(Ng);
    var X = Ng.g();

    function $g() {}

    function sg(a, b) {
        b = b || {};
        var c = void 0 === b.Va ? {} : b.Va;
        b = void 0 === b.Ja ? {} : b.Ja;
        var d = b.r,
            e = c[0],
            f = Vg(X, Bc(), !1),
            g = {};
        z(g, f, c);
        c = {};
        var h = g;
        h = void 0 === h ? {} : h;
        g = {};
        var k = U.g();
        f = Yc(a.i);
        var m = k.j,
            p = Jf(a);
        f.p = [p.top + m.b, p.left + m.a, p.bottom + m.b, p.right + m.a];
        m = a.c;
        f.tos = Bf(m.a);
        f.mtos = Df(m.a);
        f.mcvt = m.c.a;
        f.rs = a.W;
        (p = 5 == a.W) || (f.ht = a.za);
        0 <= a.$ && (f.tfs = a.$, f.tls = a.Ab);
        f.mc = Nf(m.b);
        f.lte = Nf(a.U);
        f.bas = a.mb;
        f.bac = a.J;
        k.b && (f["if"] = a.A ? 0 : 1);
        f.met = a.a.c;
        p && a.o && (f.req = encodeURIComponent(a.o).substring(0, 100));
        a.ma() && (f.la = "1");
        a.Aa && (f.pa = "1");
        f.avms = a.b ? a.b.G() : (P.g(), "ns");
        a.b && z(f, a.b.K());
        0 != a.h && (f.md = a.h);
        f.lm = a.T;
        z(f, jg(a));
        h && z(f, h);
        f.adk = a.j;
        a.vb && a.da && (f.adf = a.da);
        h = a.A;
        k = P.g();
        !d && h && k.h && (d = k.h);
        d && (f.r = d);
        0 === a.F && (f.invis = 1);
        d = sf(f).join("&");
        g[3] = d;
        g[11] = h;
        g[29] = P.g().b;
        g[0] = e;
        g[7] = a.f.a;
        g[9] = De(a.B);
        g[28] = a.W;
        g[32] = a.b ? a.b.G() : (P.g(), "ns");
        g[5] = Hf(a.c) && 4 != a.T;
        g[13] = Df(a.c.a).join(",");
        g[18] = 0 == Te(Jf(a));
        null != a.I && (g[20] = a.I.b, g[21] = a.I.a);
        e = U.g();
        null != e.c && (g[22] = e.c.O(), g[23] = e.c.M());
        null != e.a && (g[30] = e.a.O(), g[31] = e.a.M(), g[38] = De(e.a));
        d = e.j;
        f = Jf(a);
        g[37] = De(new I(f.top + d.b, f.right + d.a, f.bottom + d.b, f.left + d.a));
        e.f && (e = e.f, g[39] = e.width + "-" + e.height); - 1 != a.F && (g[25] = a.F);
        se(new nd(a.j, a.R), g);
        z(c, g, b);
        b = a.a.a;
        a = a.ub;
        try {
            var n = te(c);
            Fe(b, n, a)
        } catch (r) {}
        return !0
    };

    function ah(a, b, c, d) {
        Dg.call(this, a, b, c, d);
        this.f = function() {
            return null
        }
    }
    t(ah, Dg);
    ah.prototype.G = function() {
        return "aio"
    };
    ah.prototype.na = function() {
        if (this.f) try {
            this.f()
        } catch (a) {}
    };
    ah.prototype.s = function() {
        var a = this;
        if (!this.c) return !1;
        this.f = yc(this.a.a.c).observeIntersection(Jd(Ld().a, function(b) {
            return Eg(a, b)
        }));
        return !0
    };

    function bh(a) {
        a = void 0 === a ? F : a;
        this.a = new bf(a, 2)
    }
    t(bh, lf);
    bh.prototype.G = function() {
        return "aio"
    };
    bh.prototype.ba = function() {
        return U.g().b && this.H()
    };
    bh.prototype.H = function() {
        var a;
        if (a = !U.g().h) a = yc(this.a.a.c), a = !(!a || !a.observeIntersection);
        return a
    };
    bh.prototype.Fa = function(a, b, c) {
        return new ah(a, this.a, b, c)
    };

    function ch() {
        bf.call(this, F, 2, "iem")
    }
    t(ch, bf);
    l = ch.prototype;
    l.gb = function() {
        function a(r, ta) {
            return !!b.c.document.elementFromPoint(r, ta)
        }
        var b = this,
            c = new I(0, this.c.innerWidth || this.c.width, this.c.innerHeight || this.c.height, 0),
            d = Ub(document),
            e = Math.floor(c.left - d.a),
            f = Math.floor(c.top - d.b),
            g = Math.floor(c.right - d.a),
            h = Math.floor(c.bottom - d.b);
        c = a(e, f);
        d = a(g, h);
        if (c && d) return new I(f, g, h, e);
        var k = a(g, f),
            m = a(e, h);
        if (c) h = Y(f, h, function(r) {
            return a(e, r)
        }), g = Y(e, g, function(r) {
            return a(r, f)
        });
        else if (k) h = Y(f, h, function(r) {
            return a(g, r)
        }), e = Y(g, e, function(r) {
            return a(r, f)
        });
        else if (m) f = Y(h, f, function(r) {
            return a(e, r)
        }), g = Y(e, g, function(r) {
            return a(r, h)
        });
        else if (d) f = Y(h, f, function(r) {
            return a(g, r)
        }), e = Y(g, e, function(r) {
            return a(r, h)
        });
        else {
            var p = Math.floor((e + g) / 2),
                n = Math.floor((f + h) / 2);
            if (!a(p, n)) return new I(0, 0, 0, 0);
            f = Y(n, f, function(r) {
                return a(p, r)
            });
            h = Y(n, h, function(r) {
                return a(p, r)
            });
            e = Y(p, e, function(r) {
                return a(r, n)
            });
            g = Y(p, g, function(r) {
                return a(r, n)
            })
        }
        return new I(f, g, h, e)
    };

    function Y(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e == a || e == b) break;
            c(e) ? a = e : b = e
        }
        return a
    }
    l.H = function() {
        return U.g().b && D && ub(8) && me(this.c)
    };
    l.Ma = function() {};
    l.Oa = function() {};
    l.Na = function() {};
    l.rb = function() {};
    w(ch);

    function Z() {
        bf.call(this, F, 1, "osd");
        this.b = null;
        this.A = [];
        this.F = this.w = this.m = this.o = 0;
        this.B = !0
    }
    t(Z, bf);
    l = Z.prototype;
    l.fb = function() {
        var a = {};
        return a.exg = 1, a
    };
    l.Ib = function(a) {
        y(this.A, a) || this.A.push(a)
    };

    function dh(a) {
        var b = 0;
        a = a.c;
        try {
            if (a && a.Goog_AdSense_getAdAdapterInstance) return a
        } catch (c) {}
        for (; a && 5 > b;) {
            try {
                if (a.google_osd_static_frame) return a.google_osd_static_frame
            } catch (c) {}
            try {
                if (a.aswift_0 && a.aswift_0.google_osd_static_frame) return a.aswift_0.google_osd_static_frame
            } catch (c) {}
            b++;
            a = a != a.parent ? a.parent : null
        }
        return null
    }

    function eh(a, b) {
        var c = {};
        se(P.g().c, c);
        c[0] = "goog_request_monitoring";
        c[6] = 4;
        c[16] = !1;
        c[19] = P.g().f;
        a.b && fh(a.b, c);
        try {
            var d = te(c);
            b.postMessage(d, "*")
        } catch (e) {}
    }

    function gh(a) {
        ++a.w;
        if (2 == a.o) hh(a);
        else {
            if (10 < a.w) {
                if (20 < a.w) {
                    cf(a, "no");
                    return
                }
                11 == a.w && (O().clearInterval(a.m), a.m = O().setInterval(R(197, function() {
                    return gh(a)
                }), 500))
            }
            if (a.c.postMessage)
                if (od(P.g().c)) {
                    var b = dh(a);
                    b && eh(a, b)
                } else cf(a, "ib");
            else cf(a, "c")
        }
    }
    l.Ha = function() {
        var a = this;
        if (!this.s)
            if (this.s = !0, od(P.g().c)) {
                T(u, "message", function(c) {
                    if (null != c && c.data && v(c.data)) {
                        var d = c.data;
                        if (v(d)) {
                            var e = {};
                            d = d.split("\n");
                            for (var f = 0; f != d.length; ++f) {
                                var g = d[f],
                                    h = g.indexOf("=");
                                if (!(0 >= h)) {
                                    var k = Number(g.substr(0, h));
                                    g = g.substr(h + 1);
                                    switch (k) {
                                        case 36:
                                        case 26:
                                        case 15:
                                        case 8:
                                        case 11:
                                        case 16:
                                        case 5:
                                        case 18:
                                            g = "true" == g;
                                            break;
                                        case 4:
                                        case 33:
                                        case 6:
                                        case 25:
                                        case 28:
                                        case 29:
                                        case 24:
                                        case 31:
                                        case 30:
                                        case 23:
                                        case 22:
                                        case 7:
                                        case 21:
                                        case 20:
                                            g = Number(g);
                                            break;
                                        case 19:
                                        case 3:
                                            if ("function" == pa(decodeURIComponent)) try {
                                                g = decodeURIComponent(g)
                                            } catch (p) {
                                                throw Error("Error: URI malformed: " + g);
                                            }
                                    }
                                    e[k] = g
                                }
                            }
                            e = e[0] ? e : null
                        } else e = null;
                        if (d = e) d = new nd(e[4], e[12]), f = P.g().c, d = f.a || d.a ? f.a == d.a : f.b || d.b ? f.b == d.b : !1;
                        if (d && (d = e[29], f = e[0], y(["goog_acknowledge_monitoring", "goog_get_mode", "goog_update_data", "goog_image_request", "goog_adspeed"], f))) {
                            ih(a, e);
                            if ("goog_get_mode" == f && c.source) {
                                k = {};
                                se(P.g().c, k);
                                k[0] = "goog_provide_mode";
                                k[6] = 4;
                                k[16] = !1;
                                k[19] = P.g().f;
                                a.b && fh(a.b, k);
                                try {
                                    var m = te(k);
                                    c.source.postMessage(m, c.origin);
                                    jh(a, m)
                                } catch (p) {
                                    he(406, p)
                                }
                            }
                            if ("goog_get_mode" == f || "goog_acknowledge_monitoring" == f) a.b && (a.b.$ = e[28]), a.o = 2, hh(a);
                            if (c = e[32]) a.D = c;
                            if (a.b || a.h.length) {
                                if (4 != d) {
                                    k = e[0];
                                    m = !1;
                                    f = U.g();
                                    c = a.f.a;
                                    "goog_acknowledge_monitoring" == k && ((void 0 !== e[36] ? e[36] : !e[8]) ? jf(a, 2) : jf(a, 0), df(a));
                                    e[37] && (k = Ee(e[37])) && (m = !0, f.j = new G(k.left, k.top));
                                    if (e[38]) {
                                        if (k = Ee(e[38])) m = !0, f.a = k
                                    } else isNaN(e[30]) || isNaN(e[31]) || (f.a || (f.a = new I(0, 0, 0, 0)), m = !0, f.a.right = f.a.left + e[30], f.a.bottom = f.a.top + e[31]);
                                    e[9] && (m = !0, k = Ee(e[9])) && (c = k, f.l = k);
                                    e[39] && ((k = e[39]) ? (k = k.split("-"), k = 2 == k.length ? new H(bb(k[0]), bb(k[1])) : null) : k = null, k && (f.f = k));
                                    m && (m = S(), f = Oe(), m = new Xe(m, f, a), m.a = c, a.ha(m))
                                }
                                c = He(e[3]).r;
                                d = 4 == d;
                                if (1 == M(P.g().a, "cm")) {
                                    if (d ? kh(a, e, c) : "ac" == c && a.b && lh(a.b, "ac", void 0, void 0), d = e[40]) d = JSON.parse(decodeURIComponent(d)), mh(d.ext), nh({
                                        Ya: d.rst,
                                        Xa: d.dlt,
                                        cc: d.rpt,
                                        jb: d.isd,
                                        pb: d.msd
                                    })
                                } else d || kh(a, e, c);
                                e[11] && (e = He(e[3]).r || "msf", cf(a, e))
                            }
                        }
                    }
                }, 118);
                var b = R(197, function() {
                    gh(a)
                });
                this.o = 1;
                b();
                this.m = O().setInterval(b, 100)
            } else cf(this, "ib")
    };
    l.wa = function() {
        var a = {};
        se(P.g().c, a);
        a[0] = "goog_stop_monitoring";
        jh(this, te(a));
        hh(this)
    };

    function hh(a) {
        O().clearInterval(a.m);
        a.m = 0
    }

    function jh(a, b) {
        var c = dh(a),
            d = !c;
        d && (c = a.c.parent);
        if (c && c.postMessage) try {
            c.postMessage(b, "*"), d && a.c.postMessage(b, "*"), a.F++
        } catch (e) {}
    }

    function ih(a, b) {
        x(a.A, function(c) {
            c(b)
        })
    }

    function kh(a, b, c) {
        var d = b[0],
            e = 100 * b[25];
        na(e) && !isNaN(e) && a.b && (window.document["4CGeArbVQ"] = e | 0);
        void 0 != b[18] && a.b && (a.b.Y = b[18]);
        if (void 0 != b[7] && 0 < b[7] && a.b && (e = a.b, e.T)) {
            var f = "//pagead2.googlesyndication.com/pagead/gen_204?id=ac_opp&vsblt=" + b[7];
            e.J && (f += "&avi=" + e.J);
            vf(f);
            e.T = !1
        }
        var g = !!b[5];
        e = !!b[11];
        f = !1;
        if ("goog_update_data" == d || "goog_image_request" == d)
            if ("goog_update_data" == d && (f = !!b[15]), a.b) {
                var h = a.b;
                h.i = He(b[3]);
                ++h.U
            }
        b = !e && "goog_update_data" == d && !b[18];
        switch (d) {
            case "goog_image_request":
                a.b && lh(a.b, c || "u", g, e);
            case "goog_update_data":
                if (b && a.b && (c = a.b, c.B = !0, oh(c) && c.S && (d = c.i, ph(c) && 3 != c.a))) {
                    d.r = "m";
                    for (b = 0; b < c.f.length; ++b) h = qh(c, c.f[b], d, !0), vf(h);
                    c.S = !1
                }
                g && a.b && (g = a.b, oh(g) && (g.C = !0, rh(g, "1"), g.D && ph(g) && 3 != g.a && !g.Y && (pc(g.D), g.D = ""), g.m && !f && (f = Ta(g.i), f.r = "v", sh(g, f, !0), g.R = !0, g.da = +new Date), g.m || 1 != g.c || (g.I = !0)));
                e && a.b && (a = a.b, oh(a) && (a.j = !1, a.S = !1, rh(a, "3"), a.m && (e = Ta(a.i), null !== e && "r" in e || (e.r = "uk"), sh(a, e, !0))))
        }
    }
    l.ba = function() {
        var a = P.g();
        return 4 === a.b ? !!M(a.a, "cm") : this.H()
    };
    l.Ma = function() {};
    l.Oa = function() {};
    l.Na = function() {};
    l.H = function() {
        return U.g().b && !this.u
    };
    w(Z);

    function th() {
        var a = /[&\?#]exk=([^& ]+)/.exec(F.location.href);
        return a && 2 == a.length ? a[1] : null
    };

    function uh() {
        this.w = 0;
        this.J = "";
        this.f = [];
        this.V = "";
        this.Z = this.X = this.R = this.Y = this.B = this.C = this.A = this.j = this.m = this.S = !1;
        this.da = this.ca = 0;
        this.l = new nd(null, null);
        var a = {};
        this.i = (a.mtos = "0,0,0,0,0", a.mcvt = "0", a.p = "0,0,0,0", a.tos = "0,0,0,0,0", a);
        this.P = [];
        this.F = null;
        this.I = !1;
        this.D = this.L = "";
        this.b = new fd;
        this.o = !1;
        this.a = 0;
        this.s = this.u = null;
        this.U = this.c = 0;
        this.W = "";
        this.T = !1;
        this.h = null;
        this.ea = this.$ = 0;
        bd(P.g().a);
        Yg()
    }
    l = uh.prototype;
    l.ja = function(a) {
        var b = yg.g().a;
        switch (a.N()) {
            case 0:
                b && (b = b.a, Ga(b.h, this), b.l && this.aa() && gf(b));
                vh(this, a);
                break;
            case 2:
                b && (a = b.a, Ga(a.h, this), a.l && this.aa() && gf(a))
        }
    };
    l.ha = function() {};
    l.aa = function() {
        return !1
    };
    l.Ob = function(a) {
        var b = /^(http[s]?:)?\/\//.test(a) ? a : wh(a);
        if (y(this.f, b)) return !0;
        if (!a || !Cc(F) || this.I || this.X && !this.R) return !1;
        this.Z = !0;
        this.ca = +new Date;
        this.R && (a = Ta(this.i), a.r = "v", a = qh(this, b, a, !0), a = ec(a, "tsvp", +new Date - this.da), vf(a));
        this.f.push(b);
        return !0
    };
    l.yb = function(a, b, c) {
        a = void 0 === c ? 3 : c;
        a = void 0 === a ? 3 : a;
        c = 1 != M(P.g().a, "ud") || 1 == M(P.g().a, "ue");
        this.m && (c || 3 != a) && sh(this, b, !0);
        a = this.C || this.B;
        if (this.A || this.j && a) sh(this, b), this.j = this.A = !1
    };

    function ph(a) {
        return (a = a.F) ? 2 != a() : !0
    }

    function sh(a, b, c, d) {
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? !1 : d;
        a: {
            for (e in b) {
                var e = !1;
                break a
            }
            e = !0
        }
        if (!(e || a.I || 2 != a.c && !c) && ph(a) && 3 != a.a) {
            for (e = 0; e < a.f.length; ++e) {
                var f = qh(a, a.f[e], b, c, d);
                if (M(P.g().a, "sbeos") && !c) {
                    var g = Bc() || F;
                    if (g.navigator && g.navigator.sendBeacon) {
                        var h = uf(f.toString()).split("?");
                        g = g.navigator.sendBeacon(h[0], h[1])
                    } else g = !1;
                    g || vf(f.toString() + "&sberr=1")
                } else vf(f)
            }
            d || (a.X = !0, c ? a.m = !1 : a.I = !0)
        }
    }

    function wh(a, b) {
        var c = [];
        a && c.push("avi=" + a);
        b && c.push("cid=" + b);
        return c.length ? "//pagead2.googlesyndication.com/activeview?" + c.join("&") : "//pagead2.googlesyndication.com/activeview"
    }

    function qh(a, b, c, d, e) {
        var f = void 0 === f ? 4E3 : f;
        d = (void 0 === e ? 0 : e) ? "osdexp" : (void 0 === d ? 0 : d) ? 1 == M(P.g().a, "avxm") ? "osdxm" : "osdim" : a.A ? "osd2" : "osdtos";
        b += -1 < b.indexOf("?") ? "&" : "?";
        e = P.g();
        z(c, Yc(e.a));
        c.id = d;
        c.vs = a.C ? 4 : a.B ? 3 : 2;
        "osd2" == d && a.j && a.C && (c.tsf = 1);
        c.uc = a.U;
        d = Z.g().F;
        c.upc = d;
        c.tgt = a.b.a ? a.b.a ? a.b.a.tagName : "" : "nf";
        c.cl = a.o ? 1 : 0;
        a.Z && (c.lop = 1, c.tslp = +new Date - a.ca);
        if (d = a.b) c.cec = d.h, c.clc = d.i, c.cac = d.f, d = d.a, c.cd = d ? d.clientWidth + "x" + d.clientHeight : "nf", c.itpl = d ? Number(dd(d, "googleAvItpl")) || 0 : -1;
        a.F && (c.crc = Number(a.F()));
        for (d = 0; d < a.P.length; d++) {
            var g = e = void 0,
                h = void 0;
            try {
                var k = ba(a.P[d]());
                e = k.next().value;
                g = k.next().value;
                h = k.next().value
            } catch (m) {}
            c[e] = g.length < f ? g : h || "max_length"
        }
        a = void 0 !== c ? qf(pf(c)) : "";
        return b + a
    }

    function rh(a, b) {
        if (a.L) {
            try {
                pc(Ob(a.L, "vi", b))
            } catch (c) {}
            y(xh, b) && (a.L = "")
        }
    }

    function lh(a, b, c, d) {
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? !1 : d;
        var e = Ta(a.i);
        e.r = b;
        b = !0;
        1 == M(P.g().a, "avxm") && (b = c || d);
        b && a.yb(F, e, c ? 4 : d ? 2 : 3);
        c || d || rh(a, "0")
    }

    function oh(a) {
        return 1 == a.c || 2 == a.c || a.m
    }
    l.Jb = function(a) {
        this.P.push(a)
    };
    l.Kb = function(a) {
        this.F = a
    };

    function yh(a) {
        var b = Z.g();
        P.g().c = a.l;
        b.b = a;
        b.Ha()
    }

    function zh(a) {
        a.a = Ge(a.b.a);
        if (1 == a.a || 3 == a.a) {
            var b = a.b.a;
            a.s = R(283, function() {
                a.a = Ge(a.b.a);
                if (0 != a.a)
                    if (Ah() && a.h) {
                        var d = a.h,
                            e = a.a;
                        d.h != e && (dg(d, e), d.ka() && X.c())
                    } else 2 == a.a && (d = a.b.a, a.u ? (a.u.disconnect(), a.u = null) : d && d.removeEventListener && d.removeEventListener("DOMAttrModified", a.s)), a.s = null, d = {}, se(a.l, d), d[0] = "goog_av_measurement_hold_update", fh(a, d), Bh(d, 282)
            });
            if (MutationObserver && b) {
                var c = {
                    attributes: !0
                };
                c.attributeFilter = ["data-" + db("googleAvDm")];
                a.u = new u.MutationObserver(a.s);
                a.u.observe(b, c)
            } else b && b.addEventListener ? b.addEventListener("DOMAttrModified", a.s) : he(286, Error())
        }
    }

    function Ah() {
        return 1 == M(P.g().a, "cm")
    }

    function Ch(a) {
        a.o = !0;
        if (Ah()) Dh(a), a = a.h, a.u || (a.Ka(), a.ka() && X.c());
        else {
            var b = {};
            se(a.l, b);
            b[0] = "goog_creative_loaded";
            fh(a, b);
            Bh(b, 115)
        }
    }

    function fh(a, b) {
        var c = P.g(),
            d = Ah() ? 4 : a.c;
        b[6] = d;
        b[16] = a.j;
        b[19] = c.f;
        switch (a.a) {
            case 1:
            case 3:
                b[26] = !0;
                break;
            case 2:
                b[26] = !1
        }
        a.o && (b[35] = !0);
        a = u.performance;
        b[33] = a && a.timing && a.timing.domLoading || -1;
        b[29] = c.b
    }

    function Bh(a, b) {
        var c = te(a);
        try {
            re(function() {
                jh(Z.g(), c)
            }, b)
        } catch (d) {}
    }

    function Eh() {
        var a = P.g(),
            b = [ch.g()],
            c = 1 == M(a.a, "amp");
        (1 != M(a.a, "xdi") || c) && b.unshift(Z.g());
        return [new Bg(b), new Jg(F), new bh(F)]
    }

    function vh(a, b) {
        if (U.g().b) {
            var c = [new Jg(F), new bh(F)],
                d = yg.g();
            d.b = c;
            zg(d, function(e, f) {
                Fh(a, e, f)
            }) ? Kf(a.h, d.a) : Fh(a, "i", b)
        }
    }

    function Gh(a) {
        P.g();
        var b = yg.g();
        if (null == b.a) {
            if (null == b.b) {
                var c = Eh();
                b.b = c
            }
            zg(b, function() {
                return null
            }) ? X.done || (ef(b.a.a, a), Hh()) : Fh(a, "i")
        }
    }

    function Dh(a) {
        var b = P.g(),
            c = F.location.href,
            d = Zg(a.c),
            e = Ah();
        d = new $f(F, c, a.b.a, -1, a.$, oa, d);
        md(d.a, e);
        a.h = d;
        d.T = a.c;
        d.ub = [F];
        d.Cb = a.oa;
        d.ra(a.W);
        1 === M(d.i, "osddt") && Xc(d.i, "cm", 1);
        d.j = a.l.b;
        d.R = a.l.a;
        d.da = Xg(c);
        ig(d, a.J, a.V);
        W.a.push(d);
        dg(d, a.a);
        Wg();
        c = yg.g();
        null != c.a ? Kf(d, c.a) : Pf(d, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return a.oa.apply(a, q(g))
        });
        b.h && a.oa(d, b.h)
    }

    function Fh(a, b, c) {
        P.g().h = b;
        for (var d = ba(W.a), e = d.next(); !e.done; e = d.next()) a.oa(e.value, b);
        Ih(b, c)
    }

    function mh(a) {
        if (a && (a = decodeURIComponent(a))) {
            var b = Ma(Ca(a.split("&"), function(c) {
                return c.split("=")
            }));
            0 < b.length % 2 || x(W.a, function(c) {
                lg(c, Va(b))
            })
        }
    }

    function nh(a) {
        x(W.a, function(b) {
            void 0 !== a.Ya && -1 == b.m && (b.m = a.Ya || 0);
            void 0 !== a.Xa && -1 == b.Y && (b.Y = b.m + (a.Xa || 0));
            void 0 !== a.pb && (b.D = a.pb || 0);
            void 0 !== a.jb && (b.Da = a.jb || 0)
        })
    }
    l.oa = function(a, b) {
        a.A = !0;
        var c = {};
        cg(a, 2, (c.r = b, c));
        a.b && a.b.na()
    };

    function Ih(a, b) {
        if (!X.done && W.a.length) {
            X.f.cancel();
            var c = Vg(X, Bc(), !1);
            b && (c.avms = b.G(), z(c, b.K()));
            c = {};
            a = (c.r = a, c);
            b && (a.avms = b.G(), z(a, b.K()));
            b = W.a;
            0 < b.length && Rg(X, b, !0);
            b = ba(b);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, c.A = !0, cg(c, 1, a);
            X.done = !0;
            Z.g().wa()
        }
    }

    function Jh(a, b) {
        a.W = b;
        if (v(b)) {
            b = Zc(P.g().a, b).split("&");
            for (var c = b.length - 1; 0 <= c; c--) {
                var d = b[c],
                    e = Ec;
                d == e.Eb ? (a.j = !1, b.splice(c, 1)) : d == e.Db && (a.T = !0, b.splice(c, 1))
            }
            a = P.g();
            b = b.join("&");
            v(b) && 0 != b.length && (a.f = Zc(a.a, b))
        }
    }

    function Hh() {
        if (-1 == X.a.qa) {
            var a = Bc();
            Pg(a);
            a.setTimeout(R(131, function() {
                Ih("t")
            }), 36E5);
            X.a.qa = S() - -1
        }
    }

    function Kh(a) {
        function b(e) {
            d && c || (d = !0, lh(a, e, a.C, !a.B))
        }
        var c = 1 == M(P.g().a, "phel"),
            d = !1;
        T(F, "unload", function() {
            b("u")
        }, 119);
        c && T(F, "pagehide", function() {
            b("ph")
        }, 490)
    }

    function Lh(a) {
        zh(a);
        a.o = pe(a.b.a, function() {
            return Ch(a)
        });
        if (Ah()) a.o && Ch(a);
        else if ((a.o || 1 == a.a || 3 == a.a) && Z.g().s) {
            var b = {};
            se(a.l, b);
            b[0] = "goog_listener_status";
            fh(a, b);
            Bh(b, 114)
        }
    }

    function Mh(a, b) {
        function c() {
            if (!a.b.a) {
                var e = a.b;
                var f = null;
                var g = (F.document || document).getElementsByTagName("SCRIPT");
                0 < g.length && (g = g[g.length - 1]) && g.parentElement && (f = g.parentElement);
                f || (f = F.document.body);
                if (f) {
                    g = String(b);
                    for (var h = ld(f, ["GoogleActiveViewClass", "GoogleActiveViewElement"]), k = [], m = [], p = ba(h), n = p.next(); !n.done; n = p.next()) n = n.value, ed(n, "googleAvAdk") ? dd(n, "googleAvAdk") == g && k.push(n) : m.push(n);
                    2 == k.length && (Wb(k[0], k[1]) ? k = [k[1]] : Wb(k[1], k[0]) && (k = [k[0]]));
                    e.h = h.length;
                    e.f = k.length;
                    e.i = k.length + m.length;
                    1 == k.length ? e.a = k[0] : e.a = jd(k) || jd(m);
                    e.a = e.a || kd(f)
                }
                d--;
                a.b.a ? Lh(a) : 0 < d && F.setTimeout(ce(122, c), 100)
            }
        }
        var d = 10;
        c()
    }
    l.sa = function(a, b, c, d, e, f, g, h, k, m, p) {
        var n = this;
        Date && F && F.screen && F.document && F.document.body && F.document.body.getBoundingClientRect && (P.g().b = 4, this.w = a, this.L = b, this.D = d, this.m = f, g && Jh(this, g), a = P.g(), b = Ah(), a.b = 4, this.j = f, this.l = new nd(e, th()), T(F, "load", function() {
            rh(n, "-1")
        }, 117), this.J = c || "", this.V = k, c = m || wh(c, k), y(this.f, c) || this.f.push(c), p && !y(this.f, p) && this.f.push(p), Kh(this), (p = U.g().h || A(B, "CrKey") || A(B, "PlayStation") || A(B, "Roku") || Ie() || A(B, "Xbox") || Je() || Ke()) || (O(), p = 0 !== rd()), p ? (1 == M(a.a, "epoh") && T(F.document, "visibilitychange", function() {
            var r = F.document;
            (null != r.hidden ? r.hidden : null != r.mozHidden ? r.mozHidden : null != r.webkitHidden && r.webkitHidden) && !(3 <= n.ea) && (n.ea++, r = Ta(n.i), r.r = "hvc", sh(n, r, !1, !0))
        }, 455), 1 == M(a.a, "epph") && T(F, "pagehide", Pa(function() {
            if (n.B) {
                var r = Ta(n.i);
                r.r = "ph";
                sh(n, r, !1, !0)
            }
        }), 457), -1 == this.w ? this.c = f ? 3 : 1 : -2 == this.w ? this.c = 3 : 0 < this.w && (this.c = 2, this.A = !0), this.j && !this.A && -1 == this.w && (this.c = 2), b && (X.o = "osd", a.i = 947190542, yh(this), Gh(this)), Mh(this, e), b || yh(this)) : (e = {}, e = (e.r = "pv", e), sh(this, e, !0), this.c = 5, yh(this)))
    };
    w(uh);
    var xh = ["1", "0", "3"];
    xa("osdlfm", R(123, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        var d;
        return (d = uh.g()).sa.apply(d, q(b))
    }));
    xa("osdlac", R(124, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        var d;
        return (d = uh.g()).Jb.apply(d, q(b))
    }));
    xa("osdlamrc", R(125, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        var d;
        return (d = Z.g()).Ib.apply(d, q(b))
    }));
    xa("osdsir", R(126, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        c = uh.g();
        if (Ah()) c.h && lh(c, "ac", Hf(c.h.c), c.h.A);
        else {
            var d = Z.g();
            d && !d.u && 2 == d.o && 0 < c.U && c.yb.apply(c, q(b))
        }
    }));
    xa("osdacrc", R(127, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        var d;
        return (d = uh.g()).Kb.apply(d, q(b))
    }));
    xa("osdpcls", R(128, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        var d;
        return (d = uh.g()).Ob.apply(d, q(b))
    }));
}).call(this, this, this.document);