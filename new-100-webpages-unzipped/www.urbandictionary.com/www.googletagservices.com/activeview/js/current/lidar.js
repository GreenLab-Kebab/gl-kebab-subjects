(function(window, document) {
    var k;

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

    function n(a) {
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

    function q(a, b) {
        a.prototype = ca(b.prototype);
        a.prototype.constructor = a;
        if (ia) ia(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Eb = b.prototype
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
    la("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    var t = this || self;

    function na(a) {
        return "string" == typeof a
    }

    function oa(a) {
        return "number" == typeof a
    }

    function pa() {}

    function u(a) {
        a.Ya = void 0;
        a.g = function() {
            return a.Ya ? a.Ya : a.Ya = new a
        }
    }

    function qa(a) {
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

    function ra(a) {
        var b = qa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function w(a) {
        return "function" == qa(a)
    }

    function sa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ta(a, b, c) {
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

    function ua(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ua = sa : ua = ta;
        return ua.apply(null, arguments)
    }

    function va(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Eb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var wa;

    function xa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function x(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }

    function ya(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function y(a, b, c) {
        for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }

    function za(a, b, c) {
        var d = c;
        x(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Aa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ba(a) {
        for (var b = ["x", "y", "width", "height"], c = b.length, d = "string" === typeof b ? b.split("") : b, e = 0; e < c; e++)
            if (e in d && !a.call(void 0, d[e], e, b)) return !1;
        return !0
    }

    function Ca(a, b) {
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

    function Da(a, b) {
        return 0 <= xa(a, b)
    }

    function Ea(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Fa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ga(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Ha(a, b) {
        a.sort(b || Ia)
    }

    function Ia(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Ja(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if ("array" == qa(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = Ja.apply(null, Ga(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    }

    function Ka(a, b) {
        return Ea.apply([], y(a, b, void 0))
    };

    function La(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Ma(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Na(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Oa(a) {
        var b = Pa,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function Qa(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Ra(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function z(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Sa.length; f++) c = Sa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function Ta(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function A(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }

    function Ua(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var B;
    a: {
        var Va = t.navigator;
        if (Va) {
            var Wa = Va.userAgent;
            if (Wa) {
                B = Wa;
                break a
            }
        }
        B = ""
    }

    function C(a) {
        return -1 != B.indexOf(a)
    };

    function Xa() {
        return C("Safari") && !(Ya() || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || C("Firefox") || C("FxiOS") || C("Silk") || C("Android"))
    }

    function Ya() {
        return (C("Chrome") || C("CriOS")) && !C("Edge")
    };

    function Za() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }

    function $a(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function ab(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function bb(a) {
        bb[" "](a);
        return a
    }
    bb[" "] = pa;

    function cb(a, b) {
        try {
            return bb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function db(a, b) {
        var c = eb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var fb = C("Opera"),
        D = C("Trident") || C("MSIE"),
        gb = C("Edge"),
        hb = C("Gecko") && !(A(B, "WebKit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        ib = A(B, "WebKit") && !C("Edge"),
        jb = ib && C("Mobile");

    function kb() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var lb;
    a: {
        var mb = "",
            nb = function() {
                var a = B;
                if (hb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (gb) return /Edge\/([\d\.]+)/.exec(a);
                if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (ib) return /WebKit\/(\S+)/.exec(a);
                if (fb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();nb && (mb = nb ? nb[1] : "");
        if (D) {
            var ob = kb();
            if (null != ob && ob > parseFloat(mb)) {
                lb = String(ob);
                break a
            }
        }
        lb = mb
    }
    var pb = lb,
        eb = {};

    function qb(a) {
        return db(a, function() {
            for (var b = 0, c = Ta(String(pb)).split("."), d = Ta(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = Ua(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Ua(0 == g[2].length, 0 == h[2].length) || Ua(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var rb;
    rb = t.document && D ? kb() : void 0;
    var sb = {},
        tb = null;
    var ub = 0,
        vb = 0;

    function wb() {
        this.a = []
    }
    wb.prototype.length = function() {
        return this.a.length
    };

    function xb(a) {
        var b = a.a;
        a.a = [];
        return b
    }

    function yb(a, b) {
        for (; 127 < b;) a.a.push(b & 127 | 128), b >>>= 7;
        a.a.push(b)
    }

    function zb(a, b) {
        a.a.push(b >>> 0 & 255);
        a.a.push(b >>> 8 & 255);
        a.a.push(b >>> 16 & 255);
        a.a.push(b >>> 24 & 255)
    };

    function Ab() {
        this.b = [];
        this.c = 0;
        this.a = new wb
    }
    Ab.prototype.reset = function() {
        this.b = [];
        xb(this.a);
        this.c = 0
    };

    function Bb(a, b, c) {
        if (null != c) {
            yb(a.a, 8 * b);
            a = a.a;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            ub = b;
            vb = d;
            c = ub;
            for (b = vb; 0 < b || 127 < c;) a.a.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.a.push(c)
        }
    };

    function Cb() {}
    var Db = "function" == typeof Uint8Array,
        Eb = [];

    function Gb(a, b) {
        if (b < a.f) {
            b += a.c;
            var c = a.a[b];
            return c === Eb ? a.a[b] = [] : c
        }
        if (a.b) return c = a.b[b], c === Eb ? a.b[b] = [] : c
    }

    function Hb(a, b) {
        a = Gb(a, b);
        return null == a ? 0 : a
    }

    function Ib(a, b, c) {
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

    function Jb(a) {
        if (a.h)
            for (var b in a.h) {
                var c = a.h[b];
                if ("array" == qa(c))
                    for (var d = 0; d < c.length; d++) c[d] && Jb(c[d]);
                else c && Jb(c)
            }
    }
    Cb.prototype.toString = function() {
        Jb(this);
        return this.a.toString()
    };
    var Kb;
    Kb = ["av.key", "js", "20191009"].slice(-1)[0];
    var E = document,
        F = window;
    var Lb = D || fb || ib;

    function G(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    G.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    G.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    G.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
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

    function Mb(a) {
        return a ? new Nb(Ob(a)) : wa || (wa = new Nb)
    }

    function Pb(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Qb(a, b)
    }

    function Qb(a, b) {
        var c;
        var d = document;
        b = b || d;
        if (b.querySelectorAll && b.querySelector && a) return b.querySelectorAll(a ? "." + a : "");
        if (a && b.getElementsByClassName) {
            var e = b.getElementsByClassName(a);
            return e
        }
        e = b.getElementsByTagName("*");
        if (a) {
            var f = {};
            for (d = c = 0; b = e[d]; d++) {
                var g = b.className;
                "function" == typeof g.split && Da(g.split(/\s+/), a) && (f[c++] = b)
            }
            f.length = c;
            return f
        }
        return e
    }

    function Rb(a) {
        var b = a.scrollingElement ? a.scrollingElement : ib || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return D && qb("10") && a.pageYOffset != b.scrollTop ? new G(b.scrollLeft, b.scrollTop) : new G(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Sb(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Tb(a) {
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

    function Ob(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Ub(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Nb(a) {
        this.a = a || t.document || document
    };

    function Vb() {
        return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };
    var Wb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Xb(a, b) {
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
    };

    function Yb(a) {
        try {
            return !!a && null != a.location.href && cb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function Zb(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function $b(a) {
        var b = [];
        Zb(a, function(c, d) {
            b.push(d)
        });
        return b
    }

    function ac() {
        var a = bc;
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    var cc = La(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            t.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function dc(a) {
        return a ? a.passive && cc() ? a : a.capture || !1 : !1
    }

    function ec(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, dc(d)), !0) : !1
    }

    function fc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, dc(void 0))
    };

    function gc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }
    var hc = La(function() {
        return "referrerPolicy" in t.document.createElement("img")
    });
    var ic = {
        fc: 1,
        hc: 2,
        ec: 3
    };
    var jc;
    jc = /^true$/.test("<<<IS_DEBUG_IP:j>>>");

    function I(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    k = I.prototype;
    k.P = function() {
        return this.right - this.left
    };
    k.N = function() {
        return this.bottom - this.top
    };

    function kc(a) {
        return new I(a.top, a.right, a.bottom, a.left)
    }
    k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function lc(a, b, c) {
        b instanceof G ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
        return a
    };
    var mc = {};

    function nc(a) {
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

    function oc(a, b) {
        var c = new G(0, 0),
            d = Sb(Ob(a));
        if (!cb(d, "parent")) return c;
        do {
            if (d == b) {
                var e = a,
                    f = Ob(e);
                var g = new G(0, 0);
                var h = f ? Ob(f) : document;
                h = !D || 9 <= Number(rb) || "CSS1Compat" == Mb(h).a.compatMode ? h.documentElement : h.body;
                e != h && (e = nc(e), f = Rb(Mb(f).a), g.x = e.left + f.x, g.y = e.top + f.y)
            } else g = nc(a), g = new G(g.left, g.top);
            c.x += g.x;
            c.y += g.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };

    function pc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }
    var qc = !!window.google_async_iframe_id,
        rc = qc && window.parent || window;

    function sc() {
        if (qc && !Yb(rc)) {
            var a = "." + E.domain;
            try {
                for (; 2 < a.split(".").length && !Yb(rc);) E.domain = a = a.substr(a.indexOf(".") + 1), rc = window.parent
            } catch (b) {}
            Yb(rc) || (rc = window)
        }
        return rc
    };

    function tc(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                if (void 0 === c ? 0 : c) var f = (new H(e.innerWidth, e.innerHeight)).round();
                else {
                    var g = (e || window).document,
                        h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new H(h.clientWidth, h.clientHeight)).round()
                }
                d = f
            } catch (v) {
                d = new H(-12245933, -12245933)
            }
            a = d;
            var l = Rb(Mb(b.document).a);
            if (-12245933 == a.width) {
                var m = a.width;
                var p = new I(m, m, m, m)
            } else p = new I(l.y, l.x + a.width, l.y + a.height, l.x);
            return p
        } catch (v) {
            return new I(-12245933, -12245933, -12245933, -12245933)
        }
    };

    function uc(a) {
        if (!a) throw Error("functionToExecute must not be truthy.");
    }

    function vc(a, b) {
        if (null == b) throw Error(a + " must not be null or undefined.");
        if ("number" !== typeof b || isNaN(b)) throw Error("Value for " + a + " is not a number");
        if (0 > b) throw Error(a + " must be a positive number.");
    };

    function wc() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.2.19-google_20190912")
    }

    function xc() {
        for (var a = ["1", "2", "19"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };

    function yc(a, b, c, d) {
        this.b = a;
        this.method = b;
        this.version = c;
        this.a = d
    }

    function zc(a) {
        return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
    }

    function Ac(a) {
        return new yc(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
    }

    function Bc(a) {
        var b = {};
        b = (b.omid_message_guid = a.b, b.omid_message_method = a.method, b.omid_message_version = a.version, b);
        void 0 !== a.a && (b.omid_message_args = a.a);
        return b
    };

    function Cc(a) {
        this.b = a
    };

    function Dc(a, b) {
        return a && (a[b] || (a[b] = {}))
    };

    function Ec() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function Fc(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        Gc(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(n(b))));
        }, function() {
            return console.error.apply(console, n(b))
        })
    }

    function Gc(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    };
    var Hc = eval("this"),
        J = function() {
            if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
            if ("undefined" !== typeof global && global) return global;
            if ("undefined" !== typeof window && window) return window;
            if ("undefined" !== typeof Hc && Hc) return Hc;
            throw Error("Could not determine global object context.");
        }();

    function Ic(a) {
        try {
            return a.frames ? !!a.frames.omid_v1_present : !1
        } catch (b) {
            return !1
        }
    };

    function Jc(a) {
        this.b = a;
        this.handleExportedMessage = Jc.prototype.c.bind(this)
    }
    q(Jc, Cc);
    Jc.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.b : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.handleExportedMessage(Bc(a), this)
    };
    Jc.prototype.c = function(a, b) {
        zc(a) && this.a && this.a(Ac(a), b)
    };

    function Kc(a, b) {
        this.b = b = void 0 === b ? J : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                zc(e) && d.source && c.a && c.a(Ac(e), d.source)
            }
        })
    }
    q(Kc, Cc);
    Kc.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.b : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.postMessage(Bc(a), "*")
    };
    var Lc = ["omid", "v1_VerificationServiceCommunication"],
        Mc = ["omid", "serviceWindow"];

    function Nc(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }

    function Oc(a) {
        if (a === J) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    }

    function Pc(a, b) {
        return b.reduce(function(c, d) {
            return c && c[d]
        }, a)
    };

    function Qc(a) {
        if (!a) {
            var b;
            "undefined" === typeof b && "undefined" !== typeof window && window && (b = window);
            b = Nc(b) ? b : J;
            var c = void 0 === c ? Ic : c;
            a = [];
            var d = Pc(b, Mc);
            d && a.push(d);
            a.push(Nc(b) ? b.top : J);
            a: {
                a = ba(a);
                for (var e = a.next(); !e.done; e = a.next()) {
                    b: {
                        d = b;e = e.value;
                        var f = c;
                        if (!Oc(e)) try {
                            var g = Pc(e, Lc);
                            if (g) {
                                var h = new Jc(g);
                                break b
                            }
                        } catch (l) {}
                        h = f(e) ? new Kc(d, e) : null
                    }
                    if (d = h) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
        }
        if (this.a = a) this.a.a = this.Jb.bind(this);
        else if (c = (c = J.omid3p) && "function" === typeof c.registerSessionObserver && "function" === typeof c.addEventListener ? c : null) this.b = c;
        this.f = this.h = 0;
        this.c = {}
    }

    function Rc(a, b) {
        uc(b);
        a.b ? a.b.registerSessionObserver(b, "doubleclickbygoogle.com") : a.fa("addSessionListener", b, "doubleclickbygoogle.com")
    }
    k = Qc.prototype;
    k.addEventListener = function(a, b) {
        if (!a) throw Error("Value for eventType is undefined, null or blank.");
        if ("string" !== typeof a && !(a instanceof String)) throw Error("Value for eventType is not a string.");
        if ("" === a.trim()) throw Error("Value for eventType is empty string.");
        uc(b);
        this.b ? this.b.addEventListener(a, b) : this.fa("addEventListener", b, a)
    };
    k.setTimeout = function(a, b) {
        uc(a);
        vc("timeInMillis", b);
        if (Sc()) return J.setTimeout(a, b);
        var c = this.h++;
        this.fa("setTimeout", a, c, b);
        return c
    };
    k.clearTimeout = function(a) {
        vc("timeoutId", a);
        Sc() ? J.clearTimeout(a) : this.Db("clearTimeout", a)
    };
    k.setInterval = function(a, b) {
        uc(a);
        vc("timeInMillis", b);
        if (Tc()) return J.setInterval(a, b);
        var c = this.f++;
        this.fa("setInterval", a, c, b);
        return c
    };
    k.clearInterval = function(a) {
        vc("intervalId", a);
        Tc() ? J.clearInterval(a) : this.Db("clearInterval", a)
    };

    function Sc() {
        return "function" === typeof J.setTimeout && "function" === typeof J.clearTimeout
    }

    function Tc() {
        return "function" === typeof J.setInterval && "function" === typeof J.clearInterval
    }
    k.Jb = function(a) {
        var b = a.method,
            c = a.b;
        a = a.a;
        if ("response" === b && this.c[c]) {
            var d = wc() && xc() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.c[c].apply(this, d)
        }
        "error" === b && window.console && Fc(a)
    };
    k.Db = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.fa.apply(this, [a, null].concat(n(c)))
    };
    k.fa = function(a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
        this.a && (e = Ec(), b && (this.c[e] = b), d = wc() && xc() ? d : JSON.stringify(d), this.a.sendMessage(new yc(e, "VerificationService." + a, "1.2.19-google_20190912", d)))
    };
    var Uc = void 0;
    if (Uc = void 0 === Uc ? "undefined" === typeof omidExports ? null : omidExports : Uc) {
        var Vc = ["OmidVerificationClient"];
        Vc.slice(0, Vc.length - 1).reduce(Dc, Uc)[Vc[Vc.length - 1]] = Qc
    };
    u(Qc);
    var Wc = {
        NONE: 0,
        Xb: 1
    };

    function Xc() {
        this.B = 0;
        this.f = !1;
        this.b = -1;
        this.a = !1;
        this.c = 0
    }
    Xc.prototype.isVisible = function() {
        return this.a ? .3 <= this.B : .5 <= this.B
    };
    var K = {
            Wb: 0,
            Yb: 1
        },
        Yc = {
            370204018: 0,
            370204019: 1,
            370204052: 2,
            370204026: 0,
            370204027: 1,
            370204053: 2
        },
        Zc = {
            668123728: 0,
            668123729: 1
        },
        $c = {
            668123028: 0,
            668123029: 1
        },
        ad = {
            NONE: 0,
            dc: 1,
            Zb: 2
        },
        bd = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        },
        cd = {
            319331040: 0,
            319331041: 1
        },
        dd = {
            42530094: 0,
            42530095: 1
        },
        ed = {
            42530173: 0,
            42530174: 1
        },
        fd = {
            370204070: 1
        },
        gd = {
            370204078: 0,
            370204079: 1,
            370204080: 0,
            370204081: 1
        };

    function hd() {
        this.a = null;
        this.b = !1;
        this.c = null
    }

    function L(a) {
        a.b = !0;
        return a
    }

    function id(a, b) {
        a.c = void 0 === b ? null : b
    }

    function jd(a, b) {
        a.c && x(b, function(c) {
            c = a.c[c];
            void 0 !== c && kd(a, c)
        })
    }

    function ld(a) {
        hd.call(this);
        this.f = a
    }
    q(ld, hd);

    function kd(a, b) {
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

    function md() {
        this.a = {};
        this.c = !0;
        this.b = {}
    }
    md.prototype.reset = function() {
        this.a = {};
        this.c = !0;
        this.b = {}
    };

    function M(a, b, c) {
        a.a[b] || (a.a[b] = new ld(c));
        return a.a[b]
    }

    function N(a, b) {
        var c = a.b;
        if (null !== c && b in c) return a.b[b];
        if (a = a.a[b]) return a.a
    }

    function nd(a) {
        var b = {},
            c = Na(a.a, function(d) {
                return d.b
            });
        Ma(c, function(d, e) {
            d = void 0 !== a.b[e] ? String(a.b[e]) : d.b && null !== d.a ? String(d.a) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }

    function od(a, b) {
        if (!a.c) return b;
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("="),
                e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.a[e]) && kd(e, d)
        }
        return b.join("&")
    }

    function pd(a, b) {
        a.c && x(Qa(a.a), function(c) {
            return jd(c, b)
        })
    }

    function qd(a, b) {
        a.c && b && na(b) && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","), b = y(b, function(c) {
            return Number(c)
        }), pd(a, b))
    };
    var rd = !D && !Xa();

    function O(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (rd && a.dataset) {
            if (!(!C("Android") || Ya() || C("Firefox") || C("FxiOS") || C("Opera") || C("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + $a(b))
    }

    function sd(a, b) {
        return /-[a-z]/.test(b) ? !1 : rd && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + $a(b)) : !!a.getAttribute("data-" + $a(b))
    };

    function td() {
        this.a = this.s = null;
        this.b = "no"
    }

    function ud(a) {
        if (!a) return !1;
        try {
            var b = a.getBoundingClientRect();
            return b && 30 <= b.height && 30 <= b.width
        } catch (c) {
            return !1
        }
    }

    function vd(a) {
        return ya(a, function(b) {
            return ud(b)
        })
    }

    function wd(a) {
        return ya(a, function(b) {
            return "SCRIPT" != b.nodeName && "FONT" != b.nodeName
        })
    }

    function xd(a) {
        if (!a) return null;
        if (!a.children) return a;
        for (var b = wd(Fa(a.children)); b.length;) {
            var c = vd(b);
            if (1 == c.length) return c[0];
            if (1 < c.length) break;
            b = Ka(b, function(d) {
                return wd(Fa(d.children))
            })
        }
        return a
    }

    function yd() {
        var a = F.document.body;
        return Ja(y(["GoogleActiveViewInnerContainer"], function(b) {
            return Fa(Pb(b, a))
        }))
    }

    function zd(a, b) {
        var c = !0;
        c = void 0 === c ? !1 : c;
        b = void 0 === b ? !1 : b;
        a.a = a.s;
        a.b = "mue";
        if (!ud(a.s)) {
            var d = xd(a.s);
            ud(d) ? (a.a = d, a.b = "ie") : c && (b || F !== F.top) && (b = yd(), 1 == b.length && (a.a = b[0], a.b = "ce"))
        }
    };

    function Ad() {}
    Ad.prototype.a = function() {
        return 0
    };
    Ad.prototype.c = function() {
        return 0
    };
    Ad.prototype.f = function() {
        return 0
    };
    Ad.prototype.b = function() {
        return 0
    };

    function Bd() {
        if (!Cd()) throw Error();
    }
    q(Bd, Ad);

    function Cd() {
        return !(!F || !F.performance)
    }
    Bd.prototype.a = function() {
        return Cd() && F.performance.now ? F.performance.now() : Ad.prototype.a.call(this)
    };
    Bd.prototype.c = function() {
        return Cd() && F.performance.memory ? F.performance.memory.totalJSHeapSize || 0 : Ad.prototype.c.call(this)
    };
    Bd.prototype.f = function() {
        return Cd() && F.performance.memory ? F.performance.memory.usedJSHeapSize || 0 : Ad.prototype.f.call(this)
    };
    Bd.prototype.b = function() {
        return Cd() && F.performance.memory ? F.performance.memory.jsHeapSizeLimit || 0 : Ad.prototype.b.call(this)
    };

    function Dd() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[E.visibilityState || E.webkitVisibilityState || E.mozVisibilityState || ""] || 0
    }

    function Ed() {
        var a;
        E.visibilityState ? a = "visibilitychange" : E.mozVisibilityState ? a = "mozvisibilitychange" : E.webkitVisibilityState && (a = "webkitvisibilitychange");
        return a
    };

    function Fd() {}
    Fd.prototype.isVisible = function() {
        return 1 === Dd()
    };
    Fd.prototype.a = function() {
        return 0 === Dd()
    };
    Fd.prototype.f = function(a) {
        var b = Ed();
        return b ? ec(E, b, a, {
            capture: !1
        }) : !1
    };
    Fd.prototype.h = function(a) {
        var b = Ed();
        b && fc(E, b, a)
    };
    var Gd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function Hd() {
        var a = t,
            b = [],
            c = null;
        do {
            var d = a;
            if (Yb(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else e = c, c = null;
            b.push(new Id(e || "", d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
        d = t;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.vb = !0);
        return b
    }

    function Jd(a, b) {
        this.a = a;
        this.b = b
    }

    function Id(a, b, c) {
        this.url = a;
        this.w = b;
        this.vb = !!c;
        this.depth = null
    };

    function Kd() {
        this.c = "&";
        this.f = !1;
        this.b = {};
        this.h = 0;
        this.a = []
    }

    function Ld(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Md(a, b, c, d, e) {
        var f = [];
        Zb(a, function(g, h) {
            (g = Nd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Nd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Nd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Md(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Od(a, b, c, d) {
        a.a.push(b);
        a.b[b] = Ld(c, d)
    }

    function Pd(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Qd(a) - c.length;
        if (0 > d) return "";
        a.a.sort(function(p, v) {
            return p - v
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], l = 0; l < h.length; l++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = Md(h[l], a.c, ",$");
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

    function Qd(a) {
        var b = 1,
            c;
        for (c in a.b) b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    };

    function Rd() {
        this.b = new Fd;
        this.a = Cd() ? new Bd : new Ad
    }
    Rd.prototype.setInterval = function(a, b) {
        return F.setInterval(a, b)
    };
    Rd.prototype.clearInterval = function(a) {
        F.clearInterval(a)
    };
    Rd.prototype.setTimeout = function(a, b) {
        return F.setTimeout(a, b)
    };
    Rd.prototype.clearTimeout = function(a) {
        F.clearTimeout(a)
    };

    function Sd(a) {
        P();
        var b = sc() || F;
        gc(b, a, !1)
    }
    u(Rd);

    function Td() {}

    function P() {
        var a = Td.g();
        if (!a.a) {
            if (!F) throw Error("Context has not been set and window is undefined.");
            a.a = Rd.g()
        }
        return a.a
    }
    u(Td);

    function Ud(a) {
        this.h = null;
        a || (a = []);
        this.c = -1;
        this.a = a;
        a: {
            if (a = this.a.length) {
                --a;
                var b = this.a[a];
                if (!(null === b || "object" != typeof b || "array" == qa(b) || Db && b instanceof Uint8Array)) {
                    this.f = a - -1;
                    this.b = b;
                    break a
                }
            }
            this.f = Number.MAX_VALUE
        }
    }
    va(Ud, Cb);

    function Vd(a) {
        this.f = a;
        this.a = -1;
        this.b = this.c = 0
    }

    function Wd(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
            if (-1 < a.a) return b.apply(null, n(d));
            try {
                return a.a = a.f.a.a(), b.apply(null, n(d))
            } finally {
                a.c += a.f.a.a() - a.a, a.a = -1, a.b += 1
            }
        }
    };

    function Xd(a, b) {
        this.b = a;
        this.c = b;
        this.a = new Vd(a)
    };

    function Q() {
        this.f = void 0;
        this.b = this.j = 0;
        this.h = -1;
        this.a = new md;
        id(L(M(this.a, "mv", ad)), bd);
        M(this.a, "omid", K);
        L(M(this.a, "epoh", K));
        L(M(this.a, "epph", K));
        id(L(M(this.a, "umt", K)), Zc);
        id(L(M(this.a, "gmpd", K)), $c);
        id(L(M(this.a, "sel", K)), Yc);
        id(L(M(this.a, "buvpe", K)), cd);
        id(L(M(this.a, "imams", K)), dd);
        id(M(this.a, "imar", K), ed);
        this.a.b.imar = 1;
        id(L(M(this.a, "gms", K)), fd);
        L(M(this.a, "phel", K));
        L(M(this.a, "phell", K));
        L(M(this.a, "oseid", ic));
        L(M(this.a, "xdi", K));
        L(M(this.a, "amp", K));
        L(M(this.a, "prf", K));
        L(M(this.a, "gtx", K));
        L(M(this.a, "mvp_lv", K));
        id(L(M(this.a, "lvio", K)), gd);
        L(M(this.a, "xosd", K));
        this.i = new Xd(P(), this.a);
        this.c = null
    }

    function Yd() {
        return Q.g().i
    }

    function Zd(a, b) {
        na(b) && 0 != b.length && od(a.a, b)
    }
    u(Q);

    function $d() {
        var a = "https:";
        F && F.location && "http:" === F.location.protocol && (a = "http:");
        this.b = a;
        this.a = .01
    }

    function ae(a, b, c, d) {
        if (Math.random() < (d || a.a)) try {
            if (c instanceof Kd) var e = c;
            else e = new Kd, Zb(c, function(g, h) {
                var l = e,
                    m = l.h++;
                g = Ld(h, g);
                l.a.push(m);
                l.b[m] = g
            });
            var f = Pd(e, a.b, "/pagead/gen_204?id=" + b + "&");
            f && Sd(f)
        } catch (g) {}
    };

    function be(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var ce = null;

    function de() {
        var a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function ee() {
        var a = void 0 === a ? t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function fe(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var S = t.performance,
        ge = !!(S && S.mark && S.measure && S.clearMarks),
        he = La(function() {
            var a;
            if (a = ge) {
                var b;
                if (null === ce) {
                    ce = "";
                    try {
                        a = "";
                        try {
                            a = t.top.location.hash
                        } catch (c) {
                            a = t.location.hash
                        }
                        a && (ce = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = ce;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function ie() {
        var a = sc();
        this.b = [];
        this.c = a || t;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = he() || (null != b ? b : 1 > Math.random())
    }

    function je(a) {
        a && S && he() && (S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    ie.prototype.start = function(a, b) {
        if (!this.a) return null;
        var c = ee() || de();
        a = new fe(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        S && he() && S.mark(b);
        return a
    };

    function ke() {
        var a = le;
        this.i = me;
        this.h = "jserror";
        this.f = !0;
        this.b = null;
        this.j = this.c;
        this.a = void 0 === a ? null : a
    }

    function ne(a, b, c) {
        return Wd(Yd().a, function() {
            try {
                if (a.a && a.a.a) {
                    var d = a.a.start(b.toString(), 3);
                    var e = c();
                    var f = a.a,
                        g = d;
                    if (f.a && "number" === typeof g.value) {
                        var h = ee() || de();
                        g.duration = h - g.value;
                        var l = "goog_" + g.label + "_" + g.uniqueId + "_end";
                        S && he() && S.mark(l);
                        !f.a || 2048 < f.b.length || f.b.push(g)
                    }
                } else e = c()
            } catch (m) {
                f = a.f;
                try {
                    je(d), f = a.j(b, new oe(pe(m)), void 0, void 0)
                } catch (p) {
                    a.c(217, p)
                }
                if (!f) throw m;
            }
            return e
        })()
    }

    function qe(a, b) {
        var c = re;
        return Wd(Yd().a, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return ne(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    ke.prototype.c = function(a, b, c, d, e) {
        e = e || this.h;
        try {
            var f = new Kd;
            f.f = !0;
            Od(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new oe(pe(b)));
            b.msg && Od(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.b) try {
                this.b(g)
            } catch (R) {}
            if (d) try {
                d(g)
            } catch (R) {}
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            var h = Hd(),
                l = new Id(t.location.href, t, !1);
            b = null;
            var m = h.length - 1;
            for (d = m; 0 <= d; --d) {
                var p = h[d];
                !b && Gd.test(p.url) && (b = p);
                if (p.url && !p.vb) {
                    l = p;
                    break
                }
            }
            p = null;
            var v = h.length && h[m].url;
            0 != l.depth && v && (p = h[m]);
            var r = new Jd(l, p);
            r.b && Od(f, 4, "top", r.b.url || "");
            Od(f, 5, "url", r.a.url || "");
            ae(this.i, e, f, c)
        } catch (R) {
            try {
                ae(this.i, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: pe(R),
                    url: r && r.a.url
                }, c)
            } catch (Fb) {}
        }
        return this.f
    };

    function pe(a) {
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

    function oe(a) {
        be.call(this, Error(a), {
            message: a
        })
    }
    q(oe, be);
    var me, re, le = new ie;

    function se() {
        var a = sc();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = le, a.a = !1, a.b != a.c.google_js_reporting_queue && (he() && x(a.b, je), a.b.length = 0))
    }(function() {
        me = new $d;
        re = new ke;
        var a = sc();
        a && a.document && ("complete" == a.document.readyState ? se() : le.a && ec(a, "load", function() {
            se()
        }))
    })();

    function te(a) {
        re.b = function(b) {
            x(a, function(c) {
                c(b)
            })
        }
    }

    function ue(a, b) {
        return ne(re, a, b)
    }

    function ve(a, b) {
        return qe(a, b)
    }

    function we(a, b, c, d) {
        re.c(a, b, c, d)
    };
    var xe = +new Date,
        ye = -1,
        ze = -1,
        Ae = !1;

    function T() {
        return +new Date - xe
    }

    function Be() {
        var a = Q.g().f,
            b = 0 <= ze ? T() - ze : -1,
            c = Ae ? T() - ye : -1;
        if (947190542 == a) return 100;
        if (79463069 == a) return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        we(637, Error(), .001);
        var e = b; - 1 != c && c < b && (e = c);
        for (b = 0; b < a.length; ++b)
            if (e < a[b]) {
                var f = d[b];
                break
            }
        void 0 === f && (f = d[a.length]);
        return f
    };

    function Ce(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, Yb(a) && (c = a, b = d);
        return {
            w: c,
            level: b
        }
    };

    function De(a) {
        var b = a !== a.top,
            c = a.top === Ce(a).w;
        if (b && c && null != a.top.mraid) return {
            Ga: a.top.mraid,
            Ia: 3
        };
        a = a.mraid;
        return null != a ? b ? c ? {
            Ga: a,
            Ia: 2
        } : {
            Ga: a,
            Ia: 1
        } : {
            Ga: a,
            Ia: 0
        } : null
    };

    function Ee(a) {
        return (a = a.document) && w(a.elementFromPoint)
    };
    jc && (me.a = 1);
    if (E && E.URL) {
        var Fe, bc = E.URL;
        Fe = !!bc && 0 < ac().length;
        re.f = !Fe
    }

    function Ge(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        c = qe(d, c);
        ec(a, b, c, {
            capture: e
        });
        return c
    }

    function He(a) {
        var b = ["IMG", "FRAME", "IFRAME"];
        return Aa(b, function(c) {
            return a.nodeName == String(c)
        }) ? [a] : za(b, function(c, d) {
            return c.concat(Fa((a || document).getElementsByTagName(String(d))))
        }, [])
    }

    function Ie(a, b) {
        if (a) {
            var c = 0,
                d = null;
            a = He(a);
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
                                f = h && h.readyState ? "complete" == h.readyState : !1
                            }
                        } catch (l) {
                            f = !1
                        }
                }
                f || (c++, Ge(d, "load", function() {
                    c--;
                    c || b(null)
                }, 177))
            }
            a = d = null;
            !c && b(null)
        }
    }

    function Je(a, b) {
        function c(d) {
            fc(a, d, c);
            b(d)
        }
        return Ge(a, "DOMNodeRemoved", c, 156, !1)
    };

    function Ke() {
        this.a = null;
        this.status = 0
    };
    var Le = ["GoogleActiveViewElement", "GoogleActiveViewClass", "DfaVisibilityIdentifier"];

    function Me(a, b) {
        0 == a.length ? (b.a = null, b.status = 1) : (a = Tb.apply(null, a), !a || a.tagName ? b.a = a : b.a = a.parentElement, b.a || (b.status = -2))
    }

    function Ne(a, b, c) {
        var d = new RegExp("(?:(?:[?&]|%26|&3[f]|%2526|%253[f])" + b + "(?:=|%3[d]|%253[d]))([a-z0-9-_]*)", "i"),
            e = new Ke;
        if ("" == b || -1 == c) return e.status = -1, e;
        try {
            b = [];
            var f = (a.document || document).getElementsByTagName("A");
            for (a = 0; a < f.length; a++) {
                var g = f[a],
                    h = c,
                    l = d.exec(g.href),
                    m;
                if (!(m = !l || !l[1])) {
                    var p = l[1],
                        v = p.length;
                    if (0 == v) var r = 0;
                    else {
                        for (var R = 305419896, Fb = 0; Fb < v; Fb++) R ^= (R << 5) + (R >> 2) + p.charCodeAt(Fb) & 4294967295;
                        r = 0 < R ? R : 4294967296 + R
                    }
                    m = h != r
                }
                m || (e.status = 3, b.push(g))
            }
            if (0 < b.length || 0 < b.length) return Me(b, e), e
        } catch (ri) {
            return e.status = 7, e
        }
        e.status = 1;
        return e
    }

    function Oe(a) {
        return new I(a.top, a.right, a.bottom, a.left)
    }

    function Pe() {
        var a = P().b;
        return a.a() ? -1 : a.isVisible() ? 0 : 1
    };

    function Qe() {
        var a = B;
        return a ? Aa("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;OMI/".split(";"), function(b) {
            return A(a, b)
        }) ? !0 : A(a, "Presto") && A(a, "Linux") && !A(a, "X11") && !A(a, "Android") && !A(a, "Mobi") : !1
    }

    function Re() {
        var a = B;
        return A(a, "AppleTV") || A(a, "Apple TV") || A(a, "CFNetwork") || A(a, "tvOS")
    }

    function Se() {
        var a = B;
        return A(a, "sdk_google_atv_x86") || A(a, "Android TV")
    };

    function U() {
        this.f = !Yb(F.top);
        this.i = Vb() || !Vb() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"));
        var a = Hd();
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url && (a = a[a.length - 1].url.match(Wb)[3] || null) && decodeURI(a);
        this.a = new I(0, 0, 0, 0);
        this.h = new H(0, 0);
        this.j = new H(0, 0);
        this.b = new I(0, 0, 0, 0);
        this.o = new G(0, 0);
        this.m = !1;
        this.c = !(!F || !De(F));
        Te(this)
    }

    function Ue(a, b) {
        b && b.screen && (a.h = new H(b.screen.width, b.screen.height))
    }

    function Ve(a, b) {
        var c = a.a ? new H(a.a.P(), a.a.N()) : new H(0, 0);
        b = void 0 === b ? F : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0,
            e = 0;
        try {
            var f = b.document,
                g = f.body,
                h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var l = h.scrollHeight,
                    m = h.scrollWidth,
                    p = h.offsetHeight,
                    v = h.offsetWidth;
                h.clientHeight != p && (l = g.scrollHeight, m = g.scrollWidth, p = g.offsetHeight, v = g.offsetWidth);
                l > c.height ? l > p ? (d = l, e = m) : (d = p, e = v) : l < p ? (d = l, e = m) : (d = p, e = v)
            }
            var r = new H(e, d)
        } catch (R) {
            r = new H(-12245933, -12245933)
        }
        a.j = r
    }

    function Te(a) {
        F && F.document && (a.b = tc(!1, F, a.i), a.a = tc(!0, F, a.i), Ve(a, F), Ue(a, F))
    }

    function We() {
        if (U.g().m) return !0;
        var a = P().b,
            b = a.isVisible();
        a = a.a();
        return b || a
    }
    u(U);
    var Xe = new I(0, 0, 0, 0);

    function Ye(a, b) {
        try {
            try {
                var c = Oe(a.getBoundingClientRect())
            } catch (l) {
                c = new I(0, 0, 0, 0)
            }
            var d = c.right - c.left,
                e = c.bottom - c.top,
                f = oc(a, b),
                g = f.x,
                h = f.y;
            return new I(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
        } catch (l) {
            return kc(Xe)
        }
    }

    function Ze(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new I(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left)) : new I(0, 0, 0, 0)
    }

    function $e(a, b) {
        b = V(b);
        return 0 === b ? 0 : V(a) / b
    }

    function V(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function af(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                a: {
                    var d = void 0;
                    if (Lb && !(D && qb("9") && !qb("10") && t.SVGElement && a instanceof t.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;
                    var f = typeof d;e = ("object" == f && null != d || "function" == f) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var g = Ob(a),
                        h = g && Sb(g),
                        l = h && h.frameElement;
                    l && (a = l)
                }
            }
            catch (m) {
                break
            }
        }
        return !1
    }

    function bf(a, b, c) {
        if (!a || !b) return !1;
        b = lc(kc(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = sc();
        Yb(d.top) && d.top && d.top.document && (d = d.top);
        if (!Ee(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = Ob(c)) && b.defaultView && b.defaultView.frameElement) && af(b, a);
        d = a === c;
        a = !d && a && Ub(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function cf(a, b, c, d) {
        return U.g().f ? !1 : 0 >= a.P() || 0 >= a.N() ? !0 : c && d ? ue(208, function() {
            return bf(a, b, c)
        }) : !1
    };

    function df(a, b, c) {
        var d = new I(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.c = b;
        this.a = d;
        this.b = null;
        this.f = c
    };

    function ef(a, b, c, d, e, f, g) {
        this.i = a;
        this.f = b;
        this.a = c;
        this.c = d;
        this.j = e;
        this.h = f;
        this.b = g
    }

    function ff(a, b) {
        return b ? Math.max(a.c, a.j) : a.c
    };

    function gf(a) {
        this.c = a;
        this.b = 0;
        this.a = null
    }
    gf.prototype.cancel = function() {
        P().clearTimeout(this.a);
        this.a = null
    };

    function hf(a) {
        var b = P();
        a.a = b.setTimeout(Wd(Yd().a, ve(143, function() {
            a.b++;
            a.c.Cb()
        })), Be())
    };

    function W(a, b, c) {
        this.w = a;
        this.T = void 0 === c ? "na" : c;
        this.f = [];
        this.m = !1;
        this.b = new df(-1, !0, this);
        this.a = this;
        this.h = b;
        this.M = this.C = !1;
        this.K = "uk";
        this.L = !1;
        this.i = !0
    }
    k = W.prototype;
    k.S = function() {
        return this.G()
    };
    k.G = function() {
        return !1
    };
    k.Ba = function() {
        this.m = !0
    };
    k.ba = function() {
        return this.a.K
    };

    function jf(a, b) {
        a.M || (a.M = !0, a.K = b, a.h = 0, a.a != a || kf(a))
    }
    k.H = function() {
        return this.a.T
    };
    k.J = function() {
        return this.a.Va()
    };
    k.Va = function() {
        return {}
    };
    k.O = function() {
        return this.a.h
    };

    function lf(a, b) {
        Da(a.f, b) || (a.f.push(b), b.ya(a.a), b.R(a.b), b.da() && (a.C = !0))
    }
    k.Ca = function() {
        var a = U.g();
        a.a = tc(!0, this.w, a.i)
    };
    k.Da = function() {
        Ue(U.g(), this.w)
    };
    k.eb = function() {
        Ve(U.g(), this.w)
    };
    k.fb = function() {
        var a = U.g();
        a.b = tc(!1, this.w, a.i)
    };
    k.Wa = function() {
        return this.b.a
    };

    function mf(a) {
        a = a.a;
        a.Da();
        a.Ca();
        a.fb();
        a.eb();
        a.b.a = a.Wa()
    }

    function nf(a) {
        var b = T(),
            c = We();
        return new df(b, c, a)
    }
    k.Cb = function() {};

    function of (a) {
        a.C = a.f.length ? Aa(a.f, function(b) {
            return b.da()
        }) : !1
    }

    function pf(a) {
        var b = Fa(a.f);
        x(b, function(c) {
            c.R(a.b)
        })
    }

    function kf(a) {
        var b = Fa(a.f);
        x(b, function(c) {
            c.ya(a.a)
        });
        a.a != a || pf(a)
    }
    k.ya = function(a) {
        var b = this.a;
        this.a = a.O() >= this.h ? a : this;
        b !== this.a ? (this.i = this.a.i, kf(this)) : this.i !== this.a.i && (this.i = this.a.i, kf(this))
    };
    k.R = function(a) {
        if (a.f === this.a) {
            var b = this.b,
                c = this.C;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.c == a.c) {
                c = b.a;
                var d = a.a;
                c = c == d ? !0 : c && d ? c.top == d.top && c.right == d.right && c.bottom == d.bottom && c.left == d.left : !1
            }
            b = !(c && b.b == a.b);
            this.b = a;
            b && pf(this)
        }
    };
    k.da = function() {
        return this.C
    };
    k.F = function() {
        this.L = !0
    };
    k.za = function() {
        return this.L
    };

    function qf(a, b, c, d) {
        this.c = a;
        this.b = new I(0, 0, 0, 0);
        this.m = new I(0, 0, 0, 0);
        this.a = b;
        this.A = c;
        this.D = d;
        this.C = !1;
        this.timestamp = -1;
        this.h = new ef(b.b, this.b, new I(0, 0, 0, 0), 0, 0, T(), 0)
    }
    k = qf.prototype;
    k.bb = function() {
        return !0
    };
    k.cb = function() {};
    k.Ta = function() {
        this.c && (this.b = Ye(this.c, this.a.a.w))
    };
    k.lb = function() {
        this.m = this.a.b.a
    };
    k.V = function() {
        this.Ta();
        this.h = new ef(this.a.b, this.b, this.h.a, this.h.c, this.h.j, T(), this.h.b)
    };
    k.F = function() {
        if (!this.za()) {
            var a = this.a,
                b = a.f,
                c = xa(b, this);
            0 <= c && Array.prototype.splice.call(b, c, 1);
            a.C && this.da() && of (a);
            this.C = !0
        }
    };
    k.za = function() {
        return this.C
    };
    k.J = function() {
        return this.a.J()
    };
    k.O = function() {
        return this.a.O()
    };
    k.ba = function() {
        return this.a.ba()
    };
    k.ya = function() {};
    k.R = function() {
        this.V()
    };
    k.da = function() {
        return this.D
    };

    function rf(a) {
        this.h = !1;
        this.a = a
    }
    k = rf.prototype;
    k.O = function() {
        return this.a.O()
    };
    k.ba = function() {
        return this.a.ba()
    };
    k.create = function(a, b, c) {
        var d = null;
        this.a && (d = this.Ua(a, b, c), lf(this.a, d));
        return d
    };
    k.S = function() {
        return this.G()
    };
    k.G = function() {
        return !1
    };
    k.ab = function() {
        return !0
    };
    k.F = function() {
        this.h = !0
    };
    k.za = function() {
        return this.h
    };
    k.J = function() {
        return {}
    };

    function sf(a, b, c) {
        this.c = void 0 === c ? 0 : c;
        this.b = a;
        this.a = null == b ? "" : b
    }

    function tf(a) {
        switch (Math.trunc(a.c)) {
            case -16:
                return -16;
            case -8:
                return -8;
            case 0:
                return 0;
            case 8:
                return 8;
            case 16:
                return 16;
            default:
                return 16
        }
    }

    function uf(a, b) {
        return a.c < b.c ? !0 : a.c > b.c ? !1 : a.b < b.b ? !0 : a.b > b.b ? !1 : typeof a.a < typeof b.a ? !0 : typeof a.a > typeof b.a ? !1 : a.a < b.a
    };

    function vf() {
        this.c = 0;
        this.a = [];
        this.b = !1
    }
    vf.prototype.add = function(a, b, c) {
        ++this.c;
        a = new sf(a, b, c);
        this.a.push(new sf(a.b, a.a, a.c + this.c / 4096));
        this.b = !0;
        return this
    };

    function wf(a, b) {
        x(b.a, function(c) {
            a.add(c.b, c.a, tf(c))
        })
    }

    function xf(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        Zb(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        });
        return a
    }

    function yf(a) {
        var b = zf;
        a.b && (Ha(a.a, function(c, d) {
            return uf(d, c) ? 1 : uf(c, d) ? -1 : 0
        }), a.b = !1);
        return za(a.a, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };

    function zf(a) {
        var b = a.b;
        a = a.a;
        return "" === a ? b : "boolean" == typeof a ? a ? b : "" : "array" == qa(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Da(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };

    function Af(a) {
        var b = void 0 === b ? !0 : b;
        this.a = new vf;
        void 0 !== a && wf(this.a, a);
        b && this.a.add("v", Kb, -16)
    }
    Af.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = yf(this.a);
        0 < b.length && (a += "?" + b);
        return a
    };

    function Bf(a, b, c, d, e) {
        var f = [];
        if (b.length) return f = y(b, function(g) {
            return g + "&id=" + a
        });
        b = "//" + (e || "pagead2.googlesyndication.com") + "/activeview";
        e = [];
        c && e.push("avi=" + c);
        d && e.push("cid=" + d);
        e.push("id=" + a);
        f.push(b + "?" + e.join("&"));
        return f
    }

    function Cf(a) {
        var b = sc() || F;
        if (!b.navigator || !b.navigator.sendBeacon) return !1;
        a = Df(a.toString()).split("?");
        return b.navigator.sendBeacon(a[0], a[1])
    }

    function Ef() {
        if (/r\d{8}/.test("<<<CAFE_VERSION_ID:j>>>")) return "<<<CAFE_VERSION_ID:j>>>";
        if (Kb && "unreleased" !== Kb) return Kb
    }

    function Df(a) {
        if (/&v=[^&]+/.test(a)) return a;
        var b = Ef();
        return b ? a + "&v=" + encodeURIComponent(b) : a
    }

    function Ff(a) {
        var b = void 0 === b ? 4E3 : b;
        a = Df(a.toString());
        a = a.substring(0, b);
        Sd(a)
    };

    function Gf() {
        this.a = 0
    }
    u(Gf);

    function Hf() {
        this.I = this.I;
        this.ta = this.ta
    }
    Hf.prototype.I = !1;
    Hf.prototype.za = function() {
        return this.I
    };
    Hf.prototype.F = function() {
        this.I || (this.I = !0, this.W())
    };
    Hf.prototype.W = function() {
        if (this.ta)
            for (; this.ta.length;) this.ta.shift()()
    };

    function If(a, b, c) {
        x(a.c, function(d) {
            var e = a.a;
            if (!d.a && (d.c(b, c), d.f())) {
                d.a = !0;
                var f = d.b(),
                    g = new vf;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.h);
                d = Gf.g();
                g.add("i", d.a++);
                g.add("adk", e);
                xf(g, f);
                e = new Af(g);
                Ff(e)
            }
        })
    };

    function Jf() {
        this.a = this.b = this.c = 0
    }

    function Kf(a, b, c, d) {
        b && (a.c += c, a.b += c, a.a = Math.max(a.a, a.b));
        if (void 0 === d ? !b : d) a.b = 0
    };
    var Lf = [1, .75, .5, .3, 0];

    function Mf(a) {
        this.a = a = void 0 === a ? Lf : a;
        this.b = y(this.a, function() {
            return new Jf
        })
    }

    function Nf(a) {
        return Of(a, function(b) {
            return b.c
        }, !1)
    }

    function Pf(a) {
        return Of(a, function(b) {
            return b.a
        }, !0)
    }

    function Qf(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.a.length; f++) {
            var h = a.a[f],
                l = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            Kf(a.b[f], g && l, e, !g || h)
        }
    }

    function Of(a, b, c) {
        a = y(a.b, function(d) {
            return b(d)
        });
        return c ? a : Rf(a)
    }

    function Rf(a) {
        return y(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };

    function Sf() {
        this.b = new Mf;
        this.c = new Jf;
        this.a = -1;
        this.f = new Mf([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }

    function Tf(a) {
        return 1E3 <= a.c.a
    };
    var Uf = new I(0, 0, 0, 0);

    function Vf(a, b, c) {
        Hf.call(this);
        this.sa = kc(Uf);
        this.f = new Sf;
        this.oa = -2;
        this.Bb = -1;
        this.Sa = b;
        this.Pa = null;
        this.K = -1 != b;
        this.ea = null;
        this.wb = -1;
        this.m = c;
        this.U = this.M = pa;
        this.l = new td;
        this.l.s = a;
        this.l.a = a;
        this.j = !1;
        this.h = {
            Fa: null,
            Ea: null
        };
        this.$ = !0;
        this.T = null;
        this.La = !1;
        Q.g().j++;
        this.c = new Xc;
        this.Ab = this.va = -1;
        this.Oa = 0;
        this.L = -1;
        this.a = null;
        this.wa = new I(0, 0, 0, 0);
        this.sb = !1;
        a = this.b = new md;
        M(a, "od", Wc);
        L(M(a, "opac", K));
        M(a, "ue", K);
        M(a, "ud", K);
        L(M(a, "gcm", K));
        L(M(a, "cm", K));
        L(M(a, "sela", K));
        L(M(a, "sbeos", K));
        L(M(a, "prf", K));
        L(M(a, "mwt", K));
        L(M(a, "lcs", K));
        M(a, "iogeo", K);
        L(M(a, "osddt", K));
        (a = this.l.s) && a.getAttribute && sd(a, "googleAvInapp") && (U.g().c = !0);
        1 == this.m ? (a = this.b.a.od) && kd(a, 1) : (a = this.b.a.od) && kd(a, 0)
    }
    q(Vf, Hf);
    k = Vf.prototype;
    k.W = function() {
        Wf(this);
        this.T && this.T.F();
        this.a && this.a.F();
        delete this.f;
        delete this.M;
        delete this.U;
        delete this.l.s;
        delete this.l.a;
        delete this.h;
        delete this.T;
        delete this.a;
        delete this.b;
        Hf.prototype.W.call(this)
    };

    function Xf(a) {
        return a.a ? a.a.b : a.sa
    }
    k.$a = function(a) {
        Zd(Q.g(), a)
    };
    k.zb = function() {
        return !1
    };
    k.ib = function() {
        this.K = !0
    };
    k.Aa = function() {
        return this.K
    };
    k.gb = function() {
        this.c.B = 0
    };

    function Yf(a, b) {
        b = b.create(a.l.a, a.b, a.zb());
        if (b = null != b && b.bb() ? b : null) a.a = b
    }

    function Zf(a, b, c) {
        if (a.a) {
            a.a.V();
            var d = a.a.h,
                e = d.i,
                f = e.a;
            if (null != d.a) {
                var g = d.f;
                a.ea = new G(g.left - f.left, g.top - f.top);
                a.wa = d.a
            }
            f = ff(d, a.ga());
            g = {};
            null !== e.volume && (g.volume = e.volume);
            var h = Q.g().a;
            Aa(["imams", "gms"], function(l) {
                return 1 === N(h, l)
            }) || 1 === N(a.b, "osddt") ? (e = 0, a.Pa && (e = d.h - a.Pa.h), a.Pa = d, a.Ja(Xf(a), f, b, c, !1, g, e, d.b)) : a.Ja(Xf(a), f, b, c, !1, g, void 0, d.b)
        }
    }

    function $f(a) {
        if (a.Aa() && a.T) {
            var b = 1 == N(a.b, "od"),
                c = U.g().a,
                d = a.T,
                e = a.a ? a.a.H() : (Q.g(), "ns"),
                f = new H(c.P(), c.N());
            c = a.ga();
            a = {
                Rb: e,
                ea: a.ea,
                Ub: f,
                ga: c,
                B: a.c.B,
                Tb: b
            };
            if (b = d.b) {
                b.V();
                e = b.h;
                f = e.i.a;
                var g = null,
                    h = null;
                null != e.a && f && (g = e.f, g = new G(g.left - f.left, g.top - f.top), h = new H(f.right - f.left, f.bottom - f.top));
                c = {
                    Rb: b.H(),
                    ea: g,
                    Ub: h,
                    ga: c,
                    Tb: !1,
                    B: ff(e, c)
                }
            } else c = null;
            c && If(d, a, c)
        }
    }
    k.Ja = function(a, b, c, d, e, f, g, h) {
        void 0 === g && (-1 == this.Sa ? g = 0 : (g = c - this.Sa || 1, g = 1E4 < g ? 1 : g));
        h = void 0 === h ? -1 : h;
        if (!this.j) {
            oa(b) || (this.ea = new G(a.left - b.left, a.top - b.top));
            if (this.Aa()) {
                f = h;
                f = void 0 === f ? -1 : f;
                h = new Xc;
                h.f = d;
                h.b = Pe();
                if (oa(b)) h.B = ag(this, b), h.c = f;
                else {
                    h.B = ag(this, a, b);
                    var l;
                    0 <= f ? l = f : l = h.B * V(a) / (F.screen.height * F.screen.width);
                    h.c = l
                }
                h.a = this.ca();
                l = this.f;
                f = this.c;
                e = e && this.c.B >= (this.ca() ? .3 : .5);
                l.a = Math.max(l.a, h.B);
                Qf(l.f, h.c, f.c, h.f, g, e);
                Qf(l.b, h.B, f.B, h.f, g, e);
                e = e || f.a != h.a ? f.isVisible() && h.isVisible() : f.isVisible();
                f = !h.isVisible() || h.f;
                Kf(l.c, e, g, f);
                this.Sa = c;
                0 < h.B && (-1 === this.va && (this.va = c), this.Ab = c); - 1 == this.Bb && Tf(this.f) && (this.Bb = c);
                if (-2 == this.oa) try {
                    a: {
                        var m = oa(b) ? null : b;
                        if (a && a != Uf && 0 != V(Xf(this))) {
                            var p = U.g();
                            if (!m) {
                                if (!p.a) {
                                    var v = -1;
                                    break a
                                }
                                m = new I(0, p.a.P(), p.a.N(), 0)
                            }
                            v = m.P && 0 < m.P() && m.N && 0 < m.N() ? ag(this, a, m) : -1
                        } else v = -1
                    }
                    this.oa = v
                }
                catch (r) {
                    we(207, r)
                }
                this.c = h;
                d && (this.c.B = 0)
            }
            this.M(this)
        }
    };

    function ag(a, b, c) {
        if (0 === a.wb && 1 === N(a.b, "opac")) return 0;
        if (oa(b)) return b;
        b = Ze(b, c);
        var d = 1 == N(a.b, "od");
        if (0 >= V(Xf(a)) || cf(b, c, a.l.a, d)) return 0;
        d = V(b) / V(Xf(a));
        c = $e(b, c);
        return a.ga() ? Math.max(d, c) : d
    }
    k.ca = function() {
        return !1
    };
    k.ga = function() {
        return this.sb || this.La
    };
    k.Ka = function(a, b, c) {
        if (c) this.sa = c;
        else {
            a = b ? a : a.top;
            this.sa = kc(Uf);
            try {
                this.l.a && (this.sa = Ye(this.l.a, a))
            } catch (d) {}
        }
    };

    function bg(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }

    function cg(a) {
        a.l.a && (a.h.Fa = Ge(a.l.a, "mouseover", function() {
            var b = T();
            a.L = b
        }, 149), a.h.Ea = Ge(a.l.a, "mouseout", function() {
            var b = T(); - 1 == a.L || b < a.L || (a.Oa += b - a.L);
            a.L = -1
        }, 150))
    }

    function Wf(a) {
        a.l.a && (a.h.Fa && (fc(a.l.a, "mouseover", a.h.Fa), a.h.Fa = null), a.h.Ea && (fc(a.l.a, "mouseout", a.h.Ea), a.h.Ea = null))
    }

    function dg(a, b) {
        if (b = void 0 === b ? pa : b) a.U = b
    };

    function eg() {
        this.c = !0;
        this.b = []
    }
    eg.prototype.isVisible = function() {
        return this.c
    };
    eg.prototype.a = function() {
        return !1
    };
    eg.prototype.f = function(a) {
        this.b.push(a);
        return !0
    };
    eg.prototype.h = function(a) {
        this.b = this.b.filter(function(b) {
            return a !== b
        })
    };
    u(eg);

    function fg(a) {
        return Xa() ? (a = (a = Ob(a)) && Sb(a), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    };
    var gg = "StopIteration" in t ? t.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function hg() {}
    hg.prototype.next = function() {
        throw gg;
    };
    hg.prototype.jb = function() {
        return this
    };

    function ig(a) {
        if (a instanceof hg) return a;
        if ("function" == typeof a.jb) return a.jb(!1);
        if (ra(a)) {
            var b = 0,
                c = new hg;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw gg;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function jg(a, b) {
        if (ra(a)) try {
            x(a, b, void 0)
        } catch (c) {
            if (c !== gg) throw c;
        } else {
            a = ig(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== gg) throw c;
            }
        }
    }

    function kg(a, b) {
        var c = 1;
        jg(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }

    function lg(a, b) {
        var c = ig(a);
        a = new hg;
        a.next = function() {
            var d = c.next();
            if (b.call(void 0, d, void 0, c)) return d;
            throw gg;
        };
        return a
    }

    function mg(a) {
        var b = ig(a);
        a = new hg;
        var c = 100;
        a.next = function() {
            if (0 < c--) return b.next();
            throw gg;
        };
        return a
    };

    function ng(a, b) {
        this.c = b;
        this.b = null == a;
        this.a = a
    }
    q(ng, hg);
    ng.prototype.next = function() {
        if (this.b) throw gg;
        var a = this.a || null;
        this.b = null == a;
        var b;
        if (b = a) {
            b = this.c;
            if (cb(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? fg : d;
                if (d(a)) try {
                    var e = Ob(a),
                        f = e && Sb(e),
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

    function og(a) {
        var b = 1;
        a = mg(new ng(a, !0));
        a = lg(a, function() {
            return 0 < b
        });
        return kg(a, function(c, d) {
            var e = 1;
            if (cb(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = Ob(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[Za()];
                    if ("undefined" !== typeof g) d = g;
                    else {
                        g = d.style;
                        var h = mc.opacity;
                        if (!h) {
                            var l = Za();
                            h = l;
                            void 0 === d.style[l] && (l = (ib ? "Webkit" : hb ? "Moz" : D ? "ms" : fb ? "O" : null) + ab(l), void 0 !== d.style[l] && (h = l));
                            mc.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                oa(f) && !isNaN(f) && (e = f)
            }
            return b = c * e
        })
    };

    function pg() {
        this.b = !1
    }
    pg.prototype.a = function(a, b) {
        b = void 0 === b ? {} : b;
        this.b || (this.b = this.f(a, b))
    };
    pg.prototype.f = function() {
        return !1
    };

    function qg(a, b, c, d, e, f, g, h) {
        f = void 0 === f ? pa : f;
        g = void 0 === g ? [] : g;
        h = void 0 === h ? [] : h;
        Vf.call(this, c, d, e);
        this.o = b;
        this.X = 0;
        this.ka = this.ia = "";
        this.u = [];
        this.ja = [];
        this.ha = this.ob = "";
        this.rb = !1;
        this.Nb = 4;
        this.Ob = [];
        this.C = "";
        this.i = this.Ma = !1;
        this.yb = -1;
        this.mb = "";
        this.kb = -1;
        this.A = 0;
        this.ua = -1;
        this.na = 0;
        this.aa = this.pb = Pe();
        this.ra = 0;
        this.Qb = f;
        this.xb = !1;
        this.qa = -1;
        this.D = {};
        this.tb = g;
        this.Sb = h;
        rg(this, this.l.s);
        this.o && na(this.o) && (b = this.o.match(/fa=([^&;]+)/)) && 2 == b.length && b[1] == (30).toString() && (this.La = !0);
        qd(Q.g().a, this.o);
        b = U.g();
        this.Ka(a, b.f)
    }
    q(qg, Vf);

    function sg(a, b, c) {
        return (a = String(a[b] || O(a, c) || "")) ? a.split("|") : []
    }

    function rg(a, b) {
        if (b) {
            if (0 == a.X)
                if (a.l.s) {
                    var c = a.l.s._adk_;
                    c || (c = (c = O(a.l.s, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else c = 0;
            else c = a.X;
            a.X = c;
            "" == a.ia && (a.ia = String(b._avi_ || ""));
            "" == a.ka && (a.ka = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            a.u.length || (a.u = sg(b, "_avicxn_", "googleAvCxn"));
            a.ja.length || (a.ja = sg(b, "_avieoscxn_", "googleEOSAvCxn"));
            "" == a.ob && (a.ob = String(b._aviextcxn_ || O(b, "googleAvExtCxn") || ""));
            "" == a.ha && (a.ha = String(b._cid_ || ""));
            a.rb || (a.rb = !!b._imm_ || sd(b, "googleAvImmediate"));
            "" == a.C && (a.C = String(b._cvu_ || O(b, "googleAvCpmav") || ""));
            a.$a(String(b._avm_ || O(b, "googleAvMetadata") || ""))
        }
    }
    k = qg.prototype;
    k.W = function() {
        tg(this);
        delete this.Ob;
        delete this.tb;
        delete this.Na;
        delete this.ma;
        Vf.prototype.W.call(this)
    };

    function ug(a, b, c) {
        x(a.tb, function(d) {
            return d.a(a, c, b)
        })
    }

    function vg(a) {
        var b = {};
        x(a.Sb, function(c) {
            return c.a(a, b)
        })
    }
    k.Aa = function() {
        return this.K && !(1 == this.ra || 3 == this.ra)
    };

    function tg(a) {
        a.Na && fc(a.l.s, "DOMNodeRemoved", a.Na);
        a.ma && a.ma.disconnect()
    }

    function wg(a) {
        a.l.s && (tg(a), a.ua = -1, t.MutationObserver ? (a.ma = new t.MutationObserver(function(b, c) {
            for (var d = 0; d < b.length; d++)
                if ("childList" == b[d].type && b[d].removedNodes.length) {
                    a.ua = T();
                    c.disconnect();
                    break
                }
        }), a.ma.observe(a.l.s, {
            childList: !0,
            subtree: !0
        })) : a.Na = Je(a.l.s, function() {
            a.ua = T()
        }))
    }
    k.gb = function() {
        Vf.prototype.gb.call(this);
        this.wa = new I(0, 0, 0, 0)
    };
    k.ib = function() {
        this.K || (de(), this.yb = T(), xg(this, !1, this.oa));
        Vf.prototype.ib.call(this);
        yg(this)
    };

    function yg(a) {
        if (a.K && t == t.top) {
            var b = t.pageYOffset;
            null != b && (a.qa = Math.max(b, a.qa));
            ug(a, 4, {})
        }
    }
    k.$a = function(a) {
        if (na(a) && 0 != a.length) {
            var b = new md,
                c = Q.g();
            M(b, "omid", K);
            od(b, a);
            b = N(b, "omid");
            null !== b && (c.a.b.omid = b);
            a = od(this.b, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.$ = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1], "0" == d ? this.na = 2 : "1" == d && (this.na = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.sb = !0) : 0 == d.lastIndexOf("alp=", 0) ? this.mb = d.split("=")[1] : 0 == d.lastIndexOf("alh=", 0) && (d = parseInt(d.split("=")[1], 10), isNaN(d) || (this.kb = d))
            }
            this.c.a = this.ca();
            Vf.prototype.$a.call(this, a)
        }
    };
    k.Ja = function(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f;
        var g = Tf(this.f),
            h = Math.floor(100 * this.c.B);
        this.na = 242500 <= (a.right - a.left) * (a.bottom - a.top) ? 1 : 2;
        Vf.prototype.Ja.call(this, a, b, c, d, e, f); - 1 == this.aa && -1 != this.c.b ? this.aa = this.c.b : 0 == this.aa && 1 == this.c.b && (this.aa = 1);
        oa(b) || (0 < this.c.B ? (b = Ze(a, b), this.wa = 0 >= V(Xf(this)) || b.top >= b.bottom || b.left >= b.right ? new I(0, 0, 0, 0) : lc(b, -a.left, -a.top)) : this.wa = new I(0, 0, 0, 0));
        a = Tf(this.f);
        b = Math.floor(100 * this.c.B);
        (!g && a || b != h) && xg(this, a, b);
        try {
            this.wb = og(this.l.a)
        } catch (l) {}
        yg(this)
    };
    k.ca = function() {
        return jb ? !1 : 1 == this.na
    };
    k.Ka = function(a, b, c) {
        if (!b && (-1 != this.yb || -1 != this.ua) && 2 != this.A && 1 != this.A && -1 != this.A && 7 != this.A) {
            var d = null;
            try {
                d = this.l.a && this.l.a.getBoundingClientRect()
            } catch (f) {}
            if (!d || 0 == d.width || 0 == d.height)
                if (d = Ne(a.top, this.mb, this.kb), this.A = d.status, d.a)
                    if (d.a == this.l.a) this.A = 2;
                    else if (d = d.a, tg(this), Wf(this), this.l.a = d, cg(this), rg(this, d), wg(this), this.a) {
                var e = this.a;
                e.cb();
                e.c = d;
                e.bb();
                e.V()
            }
        }
        Vf.prototype.Ka.call(this, a, b, c)
    };

    function zg(a, b) {
        switch (b) {
            case 1:
                if (a.u.length) return a.u;
                break;
            case 2:
                if (a.ja.length) return a.ja;
                if (a.u.length) return a.u
        }
        return []
    }

    function Ag(a) {
        var b = U.g(),
            c = nd(a.b),
            d = b.o,
            e = Xf(a);
        c.p = [e.top + d.y, e.left + d.x, e.bottom + d.y, e.right + d.x];
        d = a.f;
        c.tos = Nf(d.b);
        e = Pf(d.b);
        c.mtos = e;
        c.mcvt = d.c.a;
        c.rs = a.m;
        (e = 5 == a.m) || (c.ht = a.Oa);
        0 <= a.va && (c.tfs = a.va, c.tls = a.Ab);
        c.mc = bg(d.a);
        c.lte = bg(a.oa);
        c.bas = a.pb;
        c.bac = a.aa;
        b.f && (c["if"] = a.j ? 0 : 1);
        c.met = a.l.b;
        e && a.o && (c.req = encodeURIComponent(a.o).substring(0, 100));
        a.ca() && (c.la = "1");
        a.La && (c.pa = "1");
        c.avms = a.a ? a.a.H() : (Q.g(), "ns");
        a.a && z(c, a.a.J());
        a.xb && (c.radf = "1");
        0 != a.ra && (c.md = a.ra);
        c.lm = a.Nb;
        b = Bg(a);
        d = {};
        a = (d.rst = void 0, d.dlt = void 0, d.rpt = void 0, d.isd = void 0, d.msd = 0 <= a.qa ? a.qa : void 0, d.ext = b ? b : void 0, d);
        z(c, a);
        return c
    }

    function Cg(a) {
        return null != a.C && null != a.C.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i)
    }

    function Bg(a) {
        return a.D && 0 < $b(a.D).length ? encodeURIComponent(y($b(a.D), function(b) {
            return b + "=" + a.D[b]
        }).join("&")) : null
    }

    function Dg(a, b) {
        b && Zb(b, function(c, d) {
            null == c ? delete a.D[d] : a.D[d] = c
        })
    }

    function xg(a, b, c) {
        if (b = a.Qb(b, c)) Dg(a, b), ug(a, 3, {})
    }
    k.zb = function() {
        return !1
    };

    function Eg() {
        this.b = [];
        this.a = []
    }

    function Fg(a, b) {
        return b ? Ca(a.a, function(c) {
            return c.l.s == b
        }) : null
    }

    function Gg() {
        var a = X;
        return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : Ea(a.a, a.b)
    }
    Eg.prototype.reset = function() {
        this.b = [];
        this.a = []
    };

    function Hg(a) {
        var b = X,
            c = [];
        x(a, function(d) {
            d.l.s && null == Fg(b, d.l.s) && (b.a.push(d), c.push(d))
        })
    }
    u(Eg);
    var X = Eg.g();

    function Ig() {
        this.a = this.b = null
    }

    function Jg(a, b) {
        function c(d, e) {
            a.a = null;
            b(d, e)
        }
        if (null == a.b) return !1;
        a.a = Ca(a.b, function(d) {
            return null != d && d.S() && d.ab(c)
        });
        a.a && mf(a.a.a);
        return null != a.a
    }
    u(Ig);

    function Kg(a, b, c, d) {
        qf.call(this, a, b, c, d)
    }
    q(Kg, qf);
    Kg.prototype.ub = function(a) {
        return cf(a, this.m, this.c, 1 == N(this.A, "od"))
    };
    Kg.prototype.V = function() {
        var a = this.a.b;
        this.timestamp = -1 === a.time ? T() : a.time;
        this.Ta();
        this.lb();
        a = Ze(this.b, this.m);
        var b = a.top >= a.bottom || a.left >= a.right ? new I(0, 0, 0, 0) : a;
        a = this.a.b;
        var c = 0,
            d = 0,
            e = 0;
        0 < (this.b.bottom - this.b.top) * (this.b.right - this.b.left) && (this.ub(b) ? b = new I(0, 0, 0, 0) : (c = U.g().h, e = new I(0, c.height, c.width, 0), c = $e(b, this.b), d = $e(b, U.g().a), e = $e(b, e)));
        b = b.top >= b.bottom || b.left >= b.right ? new I(0, 0, 0, 0) : lc(b, -this.b.left, -this.b.top);
        this.h = new ef(a, this.b, b, c, d, this.timestamp, e)
    };
    Kg.prototype.H = function() {
        return this.a.H()
    };

    function Lg(a) {
        a = Mg(a);
        rf.call(this, a.length ? a[a.length - 1] : new W(F, 0));
        this.c = a;
        this.f = pa;
        this.b = null
    }
    q(Lg, rf);
    k = Lg.prototype;
    k.H = function() {
        return (this.b ? this.b : this.a).H()
    };
    k.J = function() {
        return (this.b ? this.b : this.a).J()
    };
    k.O = function() {
        return (this.b ? this.b : this.a).O()
    };
    k.ab = function(a) {
        this.f = a;
        x(this.c, function(b) {
            return b.Ba()
        });
        lf(this.a, this);
        return !0
    };
    k.F = function() {
        x(this.c, function(a) {
            a.F()
        });
        rf.prototype.F.call(this)
    };
    k.S = function() {
        return Aa(this.c, function(a) {
            return a.S()
        })
    };
    k.G = function() {
        return Aa(this.c, function(a) {
            return a.G()
        })
    };
    k.Ua = function(a, b, c) {
        return new Kg(a, this.a, b, c)
    };
    k.ya = function(a) {
        0 == a.O() && this.f(a.ba(), this)
    };
    k.R = function(a) {
        this.b = a.f
    };
    k.da = function() {
        return !1
    };

    function Mg(a) {
        if (!a.length) return [];
        a = ya(a, function(c) {
            return null != c && c.S()
        });
        for (var b = 1; b < a.length; b++) lf(a[b - 1], a[b]);
        return a
    };

    function Ng(a, b, c, d) {
        qf.call(this, a, b, c, d);
        this.u = this.o = null
    }
    q(Ng, Kg);
    k = Ng.prototype;
    k.bb = function() {
        var a = this;
        this.u || (this.u = T());
        if (ue(298, function() {
                return Og(a)
            })) return !0;
        jf(this.a, "msf");
        return !1
    };

    function Pg(a, b) {
        try {
            if (b.length) {
                a.o || (a.o = T());
                var c = Qg(b),
                    d = oc(a.c, a.a.a.w),
                    e = d.x,
                    f = d.y;
                a.b = new I(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                var g = Oe(c.intersectionRect);
                a.m = lc(g, a.b.left - g.left, a.b.top - g.top)
            }
        } catch (h) {
            a.cb(), we(299, h)
        }
    }

    function Qg(a) {
        return za(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    k.Ta = function() {};
    k.ub = function() {
        return !1
    };
    k.lb = function() {};
    k.J = function() {
        var a = {};
        return Object.assign(this.a.J(), (a.niot_obs = this.u, a.niot_cbk = this.o, a))
    };
    var Rg = {
        threshold: [0, .3, .5, .75, 1]
    };

    function Sg(a, b, c, d) {
        Ng.call(this, a, b, c, d);
        this.i = this.j = this.f = null
    }
    q(Sg, Ng);
    Sg.prototype.H = function() {
        return "nio"
    };
    Sg.prototype.cb = function() {
        if (this.f && this.c) try {
            this.f.unobserve(this.c), this.j ? (this.j.unobserve(this.c), this.j = null) : this.i && (this.i.disconnect(), this.i = null)
        } catch (a) {}
    };

    function Tg(a) {
        return a.f && a.f.takeRecords ? a.f.takeRecords() : []
    }

    function Og(a) {
        if (!a.c) return !1;
        var b = a.c,
            c = a.a.a.w,
            d = Yd().a;
        a.f = new c.IntersectionObserver(Wd(d, function(e) {
            return Pg(a, e)
        }), Rg);
        d = Wd(d, function() {
            a.f.unobserve(b);
            a.f.observe(b);
            Pg(a, Tg(a))
        });
        c.ResizeObserver ? (a.j = new c.ResizeObserver(d), a.j.observe(b)) : c.MutationObserver && (a.i = new t.MutationObserver(d), a.i.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        a.f.observe(b);
        Pg(a, Tg(a));
        return !0
    }
    Sg.prototype.V = function() {
        var a = Tg(this);
        0 < a.length && Pg(this, a);
        Ng.prototype.V.call(this)
    };

    function Ug(a) {
        a = void 0 === a ? F : a;
        rf.call(this, new W(a, 2))
    }
    q(Ug, rf);
    Ug.prototype.H = function() {
        return "nio"
    };
    Ug.prototype.G = function() {
        return "exc" !== (Q.g(), "ns") && !U.g().c && null != this.a.a.w.IntersectionObserver
    };
    Ug.prototype.Ua = function(a, b, c) {
        return new Sg(a, this.a, b, c)
    };

    function Vg() {
        var a = Wg();
        W.call(this, F.top, a, "geo")
    }
    q(Vg, W);
    Vg.prototype.Wa = function() {
        return U.g().a
    };
    Vg.prototype.G = function() {
        var a = Wg();
        this.h !== a && (this.a != this && a > this.a.h && (this.a = this, kf(this)), this.h = a);
        return 2 == a
    };

    function Wg() {
        Q.g();
        var a = U.g();
        return a.f || a.c ? 0 : 2
    }
    u(Vg);

    function Xg() {}
    u(Xg);

    function Yg(a, b, c) {
        Hf.call(this);
        this.f = null != c ? ua(a, c) : a;
        this.c = b;
        this.b = ua(this.Mb, this);
        this.a = []
    }
    va(Yg, Hf);
    k = Yg.prototype;
    k.Ha = !1;
    k.Y = null;
    k.qb = function(a) {
        this.a = arguments;
        this.Y ? this.Ha = !0 : Zg(this)
    };
    k.stop = function() {
        this.Y && (t.clearTimeout(this.Y), this.Y = null, this.Ha = !1, this.a = [])
    };
    k.W = function() {
        Yg.Eb.W.call(this);
        this.stop()
    };
    k.Mb = function() {
        this.Y = null;
        this.Ha && (this.Ha = !1, Zg(this))
    };

    function Zg(a) {
        var b = a.b;
        var c = a.c;
        if (!w(b))
            if (b && "function" == typeof b.handleEvent) b = ua(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        b = 2147483647 < Number(c) ? -1 : t.setTimeout(b, c || 0);
        a.Y = b;
        a.f.apply(null, a.a)
    };

    function $g() {
        this.done = !1;
        this.a = {
            Ra: 0,
            Qa: 0,
            hb: 0,
            nb: 0,
            Xa: -1,
            Hb: 0,
            Gb: 0,
            Ib: 0
        };
        this.i = this.b = this.f = this.c = this.h = null;
        this.o = !1;
        this.A = "";
        this.j = null;
        this.D = 0;
        this.m = new gf(this)
    }

    function ah() {
        var a = (Q.g(), "ns");
        return "nio" === a || "aio" === a || "omid" === a
    }

    function bh() {
        var a = Y;
        if (!a.o) {
            a.o = !0;
            if (!a.h && !ah()) {
                var b = ve(137, function(c) {
                    for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
                    return a.u.apply(a, n(d))
                });
                a.c = new Yg(b, 100);
                a.h = Ge(F, "scroll", function(c) {
                    for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
                    null !== a.c && a.c.qb.apply(a.c, n(d))
                }, 138)
            }
            a.f || ah() || (b = ve(140, function(c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
                return a.u.apply(a, n(d))
            }), a.b = new Yg(b, 100), a.f = Ge(F, "resize", function(c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
                null !== a.b && a.b.qb.apply(a.b, n(d))
            }, 141));
            ch(a, function(c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
                return a.C.apply(a, n(d))
            });
            a.C()
        }
    }
    $g.prototype.u = function() {
        dh(this, Gg(), !1)
    };
    $g.prototype.Cb = function() {
        dh(this, Gg(), !1)
    };

    function eh() {
        Xg.g();
        var a = Ig.g();
        null != a.a && a.a.a ? mf(a.a.a) : Te(U.g())
    }

    function dh(a, b, c) {
        if (!a.done && (a.m.cancel(), 0 != b.length)) {
            a.j = null;
            try {
                eh();
                var d = T();
                Q.g().h = d;
                if (null != Ig.g().a)
                    for (var e = 0; e < b.length; e++) Zf(b[e], d, c);
                for (e = 0; e < b.length; e++) $f(b[e]);
                a.a.hb += T() - d;
                ++a.a.nb;
                fh(a)
            } finally {
                c ? x(b, function(f) {
                    return f.gb()
                }) : hf(a.m)
            }
        }
    }

    function ch(a, b) {
        a.i || (b = qe(142, b), P().b.f(b) && (a.i = b))
    }
    $g.prototype.C = function() {
        var a = We(),
            b = T();
        a ? (Ae || (ye = b, x(X.b, function(c) {
            return c.f.i(b, !c.i())
        })), Ae = !0) : (this.D = gh(this, b), Ae = !1, x(X.b, function(c) {
            c.Aa() && c.f.h(b)
        }));
        dh(this, Gg(), !a)
    };

    function hh(a, b) {
        if (!a.j || b) {
            b = F.document;
            var c = 0 <= ze ? T() - ze : -1,
                d = T(); - 1 == a.a.Xa && (c = d);
            var e = U.g(),
                f = Q.g(),
                g = nd(f.a),
                h = Gg();
            try {
                if (0 < h.length) {
                    var l = e.a;
                    l && (g.bs = [l.P(), l.N()]);
                    var m = e.j;
                    m && (g.ps = [m.width, m.height]);
                    F.screen && (g.ss = [F.screen.width, F.screen.height])
                } else g.url = encodeURIComponent(F.location.href.substring(0, 512)), b.referrer && (g.referrer = encodeURIComponent(b.referrer.substring(0, 512)));
                g.tt = c;
                g.pt = ze;
                g.bin = f.b;
                switch (Q.g(), "ns") {
                    case "iem":
                        g.iem = 1;
                        break;
                    case "aio":
                        g.aio = 1;
                        break;
                    case "nio":
                        g.nio = 1
                }
                void 0 !== F.google_osd_load_pub_page_exp && (g.olpp = F.google_osd_load_pub_page_exp);
                g.deb = [1, a.a.Ra, a.a.Qa, a.a.hb, a.a.nb, a.a.Xa, 0, a.m.b, a.a.Hb, a.a.Gb, a.a.Ib].join("-");
                g.tvt = gh(a, d);
                e.c && (g.inapp = 1);
                if (null !== F && F != F.top) {
                    0 < h.length && (g.iframe_loc = encodeURIComponent(F.location.href.substring(0, 512)));
                    var p = e.b;
                    g.is = [p.P(), p.N()]
                }
            } catch (r) {
                g.error = 1
            }
            a.j = g
        }
        a = Ra(a.j);
        l = Yd();
        var v;
        if (1 == N(l.c, "prf")) {
            m = new Ud;
            p = l.a;
            b = 0; - 1 < p.a && (b = p.f.a.a() - p.a);
            m = Ib(m, 1, p.c + b);
            p = l.a;
            m = Ib(m, 5, -1 < p.a ? p.b + 1 : p.b);
            m = Ib(m, 2, l.b.a.f());
            m = Ib(m, 3, l.b.a.c());
            m = Ib(m, 4, l.b.a.b());
            l = {};
            p = new Ab;
            b = Gb(m, 1);
            b = null == b ? b : +b;
            b = null == b ? 0 : b;
            if (0 !== b && (c = b, null != c)) {
                yb(p.a, 9);
                b = p.a;
                e = c;
                e = (c = 0 > e ? 1 : 0) ? -e : e;
                if (0 === e) vb = 0 < 1 / e ? 0 : 2147483648, ub = 0;
                else if (isNaN(e)) vb = 2147483647, ub = 4294967295;
                else if (1.7976931348623157E308 < e) vb = (c << 31 | 2146435072) >>> 0, ub = 0;
                else if (2.2250738585072014E-308 > e) e /= Math.pow(2, -1074), vb = (c << 31 | e / 4294967296) >>> 0, ub = e >>> 0;
                else {
                    f = e;
                    d = 0;
                    if (2 <= f)
                        for (; 2 <= f && 1023 > d;) d++, f /= 2;
                    else
                        for (; 1 > f && -1022 < d;) f *= 2, d--;
                    e *= Math.pow(2, -d);
                    vb = (c << 31 | d + 1023 << 20 | 1048576 * e & 1048575) >>> 0;
                    ub = 4503599627370496 * e >>> 0
                }
                zb(b, ub);
                zb(b, vb)
            }
            b = Hb(m, 2);
            0 !== b && null != b && Bb(p, 2, b);
            b = Hb(m, 3);
            0 !== b && null != b && Bb(p, 3, b);
            b = Hb(m, 4);
            0 !== b && null != b && Bb(p, 4, b);
            b = Hb(m, 5);
            if (0 !== b && null != b && null != b)
                if (yb(p.a, 40), m = p.a, 0 <= b) yb(m, b);
                else {
                    for (c = 0; 9 > c; c++) m.a.push(b & 127 | 128), b >>= 7;
                    m.a.push(1)
                }
            m = new Uint8Array(p.c + p.a.length());
            c = p.b;
            d = c.length;
            for (e = b = 0; e < d; e++) f = c[e], m.set(f, b), b += f.length;
            c = xb(p.a);
            m.set(c, b);
            p.b = [m];
            void 0 === v && (v = 0);
            if (!tb)
                for (tb = {}, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                    for (d = p.concat(b[c].split("")), sb[c] = d, e = 0; e < d.length; e++) f = d[e], void 0 === tb[f] && (tb[f] = e);
            v = sb[v];
            p = [];
            for (b = 0; b < m.length; b += 3) g = m[b], h = (c = b + 1 < m.length) ? m[b + 1] : 0, f = (d = b + 2 < m.length) ? m[b + 2] : 0, e = g >> 2, g = (g & 3) << 4 | h >> 4, h = (h & 15) << 2 | f >> 6, f &= 63, d || (f = 64, c || (h = 64)), p.push(v[e], v[g], v[h] || "", v[f] || "");
            v = (l.pf = p.join(""), l)
        } else v = {};
        z(a, v);
        return a
    }

    function ih() {
        x(Gg(), function(a) {
            a.l.s && Xg.g()
        })
    }

    function jh() {
        var a = Ig.g();
        if (null != a.a) {
            var b = a.a;
            x(Gg(), function(c) {
                return Yf(c, b)
            })
        }
    }

    function fh(a) {
        "osd" == a.A && x(X.a, function(b) {
            var c = {};
            ug(b, 0, (c.r = void 0, c))
        })
    }

    function gh(a, b) {
        a = a.D;
        Ae && (a += b - ye);
        return a
    }

    function kh() {
        var a = Y;
        var b = void 0 === b ? function() {
            return {}
        } : b;
        re.h = "av-js";
        me.a = .01;
        te([function(c) {
            var d = Q.g(),
                e = {};
            z(c, (e.bin = d.b, e.type = "error", e), nd(d.a), hh(a), b());
            if (d = Ef()) e = {}, z(c, (e.v = encodeURIComponent(d), e))
        }])
    }
    u($g);
    var Y = $g.g();
    var lh = null;

    function mh(a) {
        var b = lh || F;
        if (!b) return "";
        var c = [];
        if (void 0 === a || !a) {
            if (!b.location || !b.location.href) return "";
            c.push("url=" + encodeURIComponent(b.location.href.substring(0, 512)))
        }
        b.document && b.document.referrer && c.push("referrer=" + encodeURIComponent(b.document.referrer.substring(0, 512)));
        return c.join("&")
    };

    function nh(a) {
        var b = {};
        b.adk = a.X || 1;
        z(b, Ag(a));
        Y.a.Ra = F.__google_lidar_;
        var c = hh(Y);
        z(b, c);
        c = mh(void 0 !== c.url);
        Xb(c, function(d, e) {
            return b[d] = e
        });
        b.itpl = Number(O(a.l.s, "googleAvItpl")) || 0;
        return b
    };
    var oh = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g;

    function ph(a, b) {
        return a.replace(oh, function(c, d) {
            try {
                var e = null !== b && d in b ? b[d] : void 0;
                if (null == e) return c;
                e = e.toString();
                if ("" == e || !/^[\s\xa0]*$/.test(null == e ? "" : String(e))) return encodeURIComponent(e).replace(/%2C/g, ",")
            } catch (f) {}
            return c
        })
    };

    function qh(a) {
        this.b = a
    }

    function rh(a, b, c) {
        return 14 === c.m || 16 === c.m ? (c = {}, c.VIEWABILITY = b, ph(a, c)) : a + "&" + b
    }
    qh.prototype.a = function(a, b, c) {
        var d = this.b(a);
        z(d, Na(c, function(e, f) {
            return "id" != f
        }));
        d = void 0 !== d ? yf(xf(new vf, d)) : "";
        b = Bf(c.id, zg(a, b), a.ia, a.ha, a.ka);
        b = ba(b);
        for (c = b.next(); !c.done; c = b.next())
            if (c = c.value) c = rh(c, d, a), 1 == N(a.b, "sbeos") ? Cf(c) || Ff(c.toString() + "&sberr=1") : Ff(c);
        return !0
    };

    function sh() {}

    function th(a, b, c) {
        return 14 === c.m || 16 === c.m ? (c = {}, c.VIEWABILITY = b, ph(a, c)) : a + "&" + b
    }
    sh.prototype.a = function(a, b, c) {
        var d = nh(a);
        z(d, Na(c, function(e, f) {
            return "id" != f
        }));
        d = void 0 !== d ? yf(xf(new vf, d)) : "";
        b = Bf(c.id, zg(a, b), a.ia, a.ha, a.ka);
        b = ba(b);
        for (c = b.next(); !c.done; c = b.next())
            if (c = c.value) c = th(c, d, a), Ff(c);
        return !0
    };

    function uh(a, b) {
        this.b = !1;
        this.i = a;
        this.h = b
    }
    q(uh, pg);
    uh.prototype.f = function(a, b) {
        b.id = this.h;
        var c = "lidar2" === this.h ? 1 : 2;
        return this.c(a) ? this.i.a(a, c, b) : !1
    };
    uh.prototype.c = function() {
        return !0
    };

    function vh(a) {
        uh.call(this, a, "lidartos")
    }
    q(vh, uh);
    vh.prototype.c = function(a) {
        return a.$ && !a.j && Tf(a.f)
    };

    function wh(a) {
        uh.call(this, a, "lidar2")
    }
    q(wh, uh);
    wh.prototype.c = function(a) {
        return a.j
    };

    function xh(a, b, c) {
        var d = mh(void 0 !== b.url);
        Xb(d, function(e, f) {
            return b[e] = f
        });
        x(a, function(e, f) {
            if (3 != (e.j || 0 >= V(Xf(e)) ? 2 : Tf(e.f) ? 4 : 3) || 1 == !N(e.b, "ud") || 1 == N(e.b, "ue") || 5 != e.m)
                if (b.adk = e.X || f + 1, z(b, Ag(e)), c && (b.avms = c.H()), b.itpl = Number(O(e.l.s, "googleAvItpl")) || 0, f = new qh(function() {
                        return Ra(b)
                    }), e.$ && !e.j && Tf(e.f)) {
                    var g = {};
                    f.a(e, 2, (g.id = "lidar2", g.tsf = 1, g));
                    e.$ = !1
                } else g = {}, f.a(e, 1, (g.id = "lidar2", g)), e.i = !0
        })
    }

    function yh(a, b) {
        x(a, function(c, d) {
            (new vh(new qh(function() {
                b.adk = c.X || d + 1;
                z(b, Ag(c));
                b.itpl = Number(O(c.l.s, "googleAvItpl")) || 0;
                return b
            }))).a(c);
            c.$ = !1
        })
    };

    function zh(a) {
        uh.call(this, a, "lidar2")
    }
    q(zh, uh);
    zh.prototype.a = function(a, b) {
        b = void 0 === b ? {} : b;
        b.r = "v";
        uh.prototype.a.call(this, a, b);
        a.i = a.i || this.b
    };
    zh.prototype.c = function(a) {
        return Tf(a.f) && !a.i
    };

    function Ah() {
        this.a = this.c = this.f = !1;
        kh()
    }

    function Bh(a) {
        a.c || (a.c = !0, a = Q.g(), a.b = 2, Y.A = "lidar", Ge(F, "unload", function() {
            Ch("u")
        }, 171), 1 == N(a.a, "phell") && Ge(F, "pagehide", function() {
            Ch("ph")
        }, 498))
    }

    function Dh() {
        return Aa(X.a, function(a) {
            return !a.i || a.$ || (0 >= V(Xf(a)) ? !1 : Cg(a) && !a.Ma)
        })
    }

    function Eh() {
        if (!Dh()) {
            Y.done = !0;
            X.reset();
            var a = Y;
            a.o = !1;
            pc(a.h) && (fc(F, "scroll", a.h), a.h = null);
            a.c && (a.c.F(), a.c = null);
            pc(a.f) && (fc(F, "resize", a.f), a.f = null);
            a.b && (a.b.F(), a.b = null);
            a.i && (P().b.h(a.i), a.i = null);
            a = Gg();
            for (var b, c = 0; c < a.length; ++c) b = a[c], b.l.a && Wf(b);
            a = Ig.g();
            null != a.a && (a.a.F(), a.a = null)
        }
    }

    function Fh(a, b) {
        if (Q.g().c) {
            var c = Q.g().c;
            a.b(b, c)
        } else b.ib(), b.Ka(F, U.g().f)
    }

    function Gh(a) {
        var b = void 0 === b ? !0 : b;
        try {
            if (Hh(a)) {
                a.a = !0;
                var c = U.g(),
                    d = T();
                ze = d;
                var e = Q.g();
                e.f = 947190542;
                lh = Ce(F).w;
                var f = Y.a;
                f.Xa = T() - d;
                f.Qa = 0;
                b && Ih(a, d, a.xa());
                var g = X.a;
                f.Qa = g.length;
                F.__google_lidar_adblocks_count_ = g.length;
                if (c.c || A(B, "CrKey") || A(B, "PlayStation") || A(B, "Roku") || Qe() || A(B, "Xbox") || Re() || Se() || !P().b.a())
                    if (1 > g.length) a.f ? Y.done = !0 : Ch("n");
                    else {
                        ih();
                        var h = Ig.g();
                        if (null == h.b) {
                            var l = Jh(e.a);
                            h.b = l
                        }
                        Jg(h, function(m, p) {
                            return Ch(m, p)
                        }) ? Y.done || (Kh(), jh(), bh()) : c.c ? (Lh(g, "w"), Ch("w")) : (Lh(g, "i"), Ch("i"))
                    }
                else Lh(g, "pv"), Ch("pv")
            }
        } catch (m) {
            throw X.reset(), Ch("x"), m;
        }
    }

    function Lh(a, b) {
        Q.g().c = b;
        x(a, function(c) {
            return c.j = !0
        })
    }

    function Kh() {
        P().setTimeout(ve(176, function() {
            return Ch("t")
        }), 36E5)
    }

    function Hh(a) {
        if (a.a || Y.done) return !1;
        P();
        a = F.document;
        return a && a.body && a.body.getBoundingClientRect && w(F.setInterval) && w(F.clearInterval) && w(F.setTimeout) && w(F.clearTimeout) ? !0 : (Ch("c"), !1)
    }

    function Ch(a, b) {
        Y.m.cancel();
        if (!Y.done) {
            var c = X.a;
            dh(Y, c, !0);
            if (!Y.done) {
                var d = ya(c, function(f) {
                        return !f.i
                    }),
                    e = {};
                a = (e.r = a, e);
                b && z(a, b.J());
                Y.a.Ra = F.__google_lidar_;
                e = hh(Y, !1);
                z(a, e);
                0 == d.length || xh(d, a, b);
                yh(c, a);
                Y.done = !0
            }
        }
    }

    function Mh(a, b, c, d) {
        var e = new qg(F, "", b, d, c, pa, [], [new zh(new sh)]);
        e.M = function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return a.h.apply(a, n(g))
        };
        e.U = function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return a.b.apply(a, n(g))
        };
        d = Yd().a;
        e.M = Wd(d, e.M);
        e.U = Wd(d, e.U);
        Hg([e]);
        Ie(b, Wd(d, function() {
            Fh(a, e);
            1 == N(e.b, "lcs") && e.l.s && zd(e.l, 8 == c);
            if (a.a) {
                var f = Ig.g();
                null != f.a ? Yf(e, f.a) : (Q.g(), dg(e, function(g) {
                    for (var h = [], l = 0; l < arguments.length; ++l) h[l] = arguments[l];
                    return a.b.apply(a, n(h))
                }));
                e.l.s && Xg.g()
            } else Gh(a)
        }));
        return e
    }

    function Nh(a, b, c) {
        c = void 0 === c ? T() : c;
        Bh(a);
        !b._avi_ && b.id && Ma(F[b.id + "_avData"], function(f, g) {
            g in Object.prototype || "undefined" == typeof f || (b[g] = f)
        });
        var d = Oh(b);
        if (0 == d || null != Fg(X, b)) return null;
        var e = Q.g();
        14 === d && (e.b = 8);
        Zd(e, String(b._avm_ || O(b, "googleAvMetadata") || ""));
        return 1 != N(e.a, "xosd") && Ph(b, d) ? (a.f = !0, null) : Mh(a, b, d, c)
    }
    Ah.prototype.xa = function() {
        return []
    };

    function Ih(a, b, c) {
        var d = [];
        x(c, function(e) {
            (e = Nh(a, e, b)) && d.push(e)
        });
        return d
    }

    function Ph(a, b) {
        var c = F.osdpcls;
        if (a) {
            var d = String(a._avi_ || "");
            a = String(a._avicxn_ || O(a, "googleAvCxn") || "");
            d = "" == a ? d : a
        } else d = "";
        return 5 == b && d && c && w(c) ? c(d) : !1
    }

    function Oh(a) {
        if (!a) return 0;
        var b = O(a, "googleAvRs");
        if (null != b) switch (Number(b)) {
            case 6:
                return 5;
            case 9:
                if ((b = O(a, "googleAvMetadata")) && -1 !== b.indexOf("gcm=1")) return 8;
                b = new vf;
                b.add("r", "lidar_gma_unexpected_element");
                b.add("cxn", O(a, "googleAvCxn"));
                b.add("adk", O(a, "googleAvAdk"));
                b.add("itpl", O(a, "googleAvItpl"));
                a = new Af(b);
                Ff(a);
                return 0;
            case 15:
                return 14;
            case 16:
                return 15;
            case 17:
                return 16;
            default:
                return 0
        }
        if (!a.id) return 0;
        a = a.id;
        return 0 == a.lastIndexOf("DfaVisibilityIdentifier", 0) ? 5 : 0 == a.lastIndexOf("YtKevlarVisibilityIdentifier", 0) ? 14 : 0 == a.lastIndexOf("YtSparklesVisibilityIdentifier", 0) ? 16 : 0
    }
    Ah.prototype.b = function(a, b) {
        if (a && !Y.done && (a.j = !0, !a.i)) {
            var c = new wh(new sh),
                d = {};
            c.a(a, (d.r = b, d));
            a.i = c.b
        }
        Eh()
    };
    Ah.prototype.h = function(a) {
        if (a) {
            if (!Y.done && a instanceof qg && (vg(a), !Y.done && Tf(a.f) && (0 >= V(Xf(a)) ? 0 : Cg(a) && !a.Ma) && a.C)) {
                var b = a.C;
                if (hc()) gc(window, b, !0);
                else {
                    var c = t.document;
                    if (c.body) {
                        var d = c.getElementById("goog-srcless-iframe");
                        if (!d) {
                            d = (new Nb(c)).a;
                            var e = "IFRAME";
                            "application/xhtml+xml" === d.contentType && (e = e.toLowerCase());
                            d = d.createElement(e);
                            d.style.display = "none";
                            d.id = "goog-srcless-iframe";
                            c.body.appendChild(d)
                        }
                        c = d
                    } else c = null;
                    c && c.contentWindow && gc(c.contentWindow, b, !0)
                }
                a.Ma = !0
            }
            Eh()
        }
    };

    function Qh(a, b, c) {
        qf.call(this, null, a, b, c)
    }
    q(Qh, Kg);
    Qh.prototype.H = function() {
        return "omid"
    };
    Qh.prototype.R = function(a) {
        this.b = U.g().b || new I(0, 0, 0, 0);
        Kg.prototype.R.call(this, a)
    };
    var Rh = {},
        Sh = (Rh.notFound = !0, Rh.hidden = !0, Rh.backgrounded = !0, Rh);

    function Th() {
        W.call(this, F, 2, "omid");
        this.A = Qc.g();
        var a = Qc.g();
        this.D = !(!a.a && !a.b);
        this.j = [];
        this.u = this.o = this.c = this.U = void 0;
        this.I = "normal"
    }
    q(Th, W);

    function Uh(a) {
        a.A.addEventListener("geometryChange", function(b) {
            Vh(397, function() {
                return Wh(a, b)
            })
        })
    }

    function Xh(a) {
        function b(c) {
            Vh(399, function() {
                return Yh(a, c)
            })
        }
        x("loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction impression".split(" "), function(c) {
            a.A.addEventListener(c, b)
        })
    }

    function Zh(a) {
        Rc(a.A, function(b) {
            Vh(398, function() {
                return $h(a, b)
            })
        })
    }

    function Wh(a, b) {
        ai(b, function(c, d, e, f) {
            e = f.viewport;
            c = U.g().h;
            d = U.g().a;
            null != e && null != e.width && null != e.height && (c = (new H(e.width, e.height)).floor(), d = (new I(0, e.width, e.height, 0)).floor());
            var g = f.adView,
                h = g.geometry,
                l = g.onScreenGeometry;
            f = new I(0, 0, 0, 0);
            e = new I(0, 0, 0, 0);
            var m = null;
            bi(l) && bi(h) && (f = (new I(l.y, l.x + l.width, l.y + l.height, l.x)).floor(), e = (new I(h.y, h.x + h.width, h.y + h.height, h.x)).floor(), null != g.percentageInView && (m = g.percentageInView / 100));
            a.j = g.reasons || [];
            g = !a.j.some(function(p) {
                return Sh[p]
            });
            ci(a, c, d, e, f, m, g, a.b.volume)
        })
    }

    function Yh(a, b) {
        ai(b, function(c, d, e, f) {
            if ("impression" != e) {
                var g = a.b.volume,
                    h = !1;
                if (Da(["start", "volumeChange"], e)) {
                    g = f.videoPlayerVolume;
                    var l = f.deviceVolume;
                    g = oa(g) && oa(l) ? g * l : null;
                    null != g && (a.b.volume = g, h = !0)
                }
                "playerStateChange" == e && null != f.state && (a.I = f.state, h = !0);
                l = U.g();
                h && ci(a, l.h, l.a, l.b, a.b.a, a.b.b, a.b.c, g)
            }
            w(void 0) && (void 0)(c, d, e, f)
        })
    }

    function $h(a, b) {
        ai(b, function(c, d, e, f) {
            "sessionStart" == e && f.context && (a.U = f.verificationParameters, a.c = f.context.app, a.u = f.context.adSessionType, f.context.omidNativeInfo && f.context.omidNativeInfo.partnerName && (a.o = f.context.omidNativeInfo.partnerName))
        })
    }

    function bi(a) {
        return null != a && Ba(function(b) {
            return a.hasOwnProperty(b)
        })
    }

    function ai(a, b) {
        null != a && null != a.adSessionId && null != a.timestamp && null != a.type ? b(a.adSessionId, a.timestamp, a.type, a.data || {}) : (a = Error("OMSDK event missing some data: " + JSON.stringify(a)), we(543, a))
    }

    function Vh(a, b) {
        try {
            b.apply()
        } catch (c) {
            we(a, c)
        }
    }

    function ci(a, b, c, d, e, f, g, h) {
        var l = eg.g();
        if (l.c !== g) {
            l.c = g;
            l = ba(l.b);
            for (var m = l.next(); !m.done; m = l.next()) m = m.value, m(null)
        }
        "minimized" == a.I && (e = new I(0, 0, 0, 0));
        l = U.g();
        e = e || new I(0, 0, 0, 0);
        m = nf(a);
        l.h = b;
        l.a = c;
        l.b = d;
        m.a = e;
        m.b = f;
        m.c = g;
        m.volume = h;
        a.R(m)
    }
    k = Th.prototype;
    k.Ca = function() {};
    k.Da = function() {};
    k.eb = function() {};
    k.fb = function() {};
    k.S = function() {
        var a = Q.g();
        return 6 === a.b || 5 === a.b ? this.G() : 1 == N(a.a, "omid") && this.G()
    };
    k.G = function() {
        return this.D
    };
    k.Va = function() {
        var a = {};
        this.G() && (ra(this.j) && 0 < this.j.length && (a.omidr = y(this.j.slice(0, 5), function(b) {
            return String(b).slice(0, 2)
        }).join(",")), this.c && (this.c.libraryVersion && (a.omidv = this.c.libraryVersion), this.c.appId && (a.omida = this.c.appId)), this.o && (a.omidp = this.o), this.u && (a.omids = this.u.charAt(0)));
        return a
    };
    k.Ba = function() {
        var a = this;
        !this.m && this.D && (this.m = !0, Vh(391, function() {
            return Zh(a)
        }), Vh(390, function() {
            return Uh(a)
        }), Vh(392, function() {
            return Xh(a)
        }))
    };
    u(Th);

    function di() {
        rf.call(this, Th.g())
    }
    q(di, rf);
    k = di.prototype;
    k.H = function() {
        return "omid"
    };
    k.Ua = function(a, b, c) {
        return new Qh(this.a, b, c)
    };
    k.G = function() {
        return this.a.G()
    };
    k.S = function() {
        return this.a.S()
    };
    k.ab = function() {
        this.a.Ba();
        return !0
    };
    k.F = function() {
        this.a.F();
        rf.prototype.F.call(this)
    };

    function ei() {
        W.call(this, F, 2, "iem")
    }
    q(ei, W);
    k = ei.prototype;
    k.Wa = function() {
        function a(r, R) {
            return !!b.w.document.elementFromPoint(r, R)
        }
        var b = this,
            c = new I(0, this.w.innerWidth || this.w.width, this.w.innerHeight || this.w.height, 0),
            d = Rb(document),
            e = Math.floor(c.left - d.x),
            f = Math.floor(c.top - d.y),
            g = Math.floor(c.right - d.x),
            h = Math.floor(c.bottom - d.y);
        c = a(e, f);
        d = a(g, h);
        if (c && d) return new I(f, g, h, e);
        var l = a(g, f),
            m = a(e, h);
        if (c) h = Z(f, h, function(r) {
            return a(e, r)
        }), g = Z(e, g, function(r) {
            return a(r, f)
        });
        else if (l) h = Z(f, h, function(r) {
            return a(g, r)
        }), e = Z(g, e, function(r) {
            return a(r, f)
        });
        else if (m) f = Z(h, f, function(r) {
            return a(e, r)
        }), g = Z(e, g, function(r) {
            return a(r, h)
        });
        else if (d) f = Z(h, f, function(r) {
            return a(g, r)
        }), e = Z(g, e, function(r) {
            return a(r, h)
        });
        else {
            var p = Math.floor((e + g) / 2),
                v = Math.floor((f + h) / 2);
            if (!a(p, v)) return new I(0, 0, 0, 0);
            f = Z(v, f, function(r) {
                return a(p, r)
            });
            h = Z(v, h, function(r) {
                return a(p, r)
            });
            e = Z(p, e, function(r) {
                return a(r, v)
            });
            g = Z(p, g, function(r) {
                return a(r, v)
            })
        }
        return new I(f, g, h, e)
    };

    function Z(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e == a || e == b) break;
            c(e) ? a = e : b = e
        }
        return a
    }
    k.G = function() {
        return U.g().f && D && qb(8) && Ee(this.w)
    };
    k.Ca = function() {};
    k.Da = function() {};
    k.eb = function() {};
    k.fb = function() {};
    u(ei);
    var Pa = {
        Vb: "addEventListener",
        $b: "getMaxSize",
        ac: "getScreenSize",
        bc: "getState",
        cc: "getVersion",
        gc: "removeEventListener"
    };

    function fi() {
        W.call(this, F, 2, "mraid");
        var a = this;
        this.I = 0;
        this.A = this.D = !1;
        this.o = null;
        this.j = 0;
        this.u = -1;
        this.c = null;
        var b = De(this.w);
        b && (this.c = b.Ga, this.u = b.Ia);
        this.c && !Oa(function(c) {
            return w(a.c[c])
        }) && (this.c = null, this.u = -1);
        this.b.a = new I(0, 0, 0, 0)
    }
    q(fi, W);
    k = fi.prototype;
    k.G = function() {
        return null != this.c
    };
    k.Va = function() {
        var a = {};
        this.I && (a.mraid = this.I);
        this.D && (a.mlc = 1);
        this.u && (a.mtop = this.u);
        this.o && (a.mse = this.o);
        return a
    };
    k.Z = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.c[a].apply(this.c, c)
        } catch (e) {
            we(538, e, .01, function(f) {
                f.method = a
            })
        }
    };

    function gi(a, b, c) {
        a.Z("removeEventListener", b, c)
    }
    k.Ba = function() {
        var a = this;
        if (!this.m) {
            this.m = !0;
            a: switch (this.u) {
                case 0:
                case 3:
                    var b = !0;
                    break a;
                default:
                    b = !1
            }
            b ? (U.g().m = !0, this.w.document.readyState && "complete" == this.w.document.readyState ? hi(this) : Ge(this.w, "load", function() {
                P().setTimeout(ve(292, function() {
                    return hi(a)
                }), 100)
            }, 292)) : jf(this, "i")
        }
    };

    function hi(a) {
        "loading" === a.Z("getState") ? (ii(a), a.Z("addEventListener", "ready", ji)) : ki(a)
    }

    function ii(a) {
        0 == a.j && (a.j = P().setTimeout(ve(293, function() {
            a.j = -1;
            gi(a, "ready", ji);
            we(539, Error());
            a.o = "rt";
            jf(a, "w")
        }), 500))
    }

    function ki(a) {
        a.j = -1;
        na(a.c.AFMA_LIDAR) ? (a.D = !0, li(a)) : (a.o = "nc", jf(a, "w"))
    }

    function li(a) {
        a.A = !1;
        P().setTimeout(ve(524, function() {
            a.A || (mi(a), we(540, Error()), a.o = "mt", jf(a, "w"))
        }), 500);
        ni(a);
        a.Z("addEventListener", a.c.AFMA_LIDAR, oi)
    }

    function ni(a) {
        var b = 1 == N(Q.g().a, "sneio"),
            c = void 0 !== a.c.AFMA_LIDAR_EXP_1,
            d = void 0 !== a.c.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.c.AFMA_LIDAR_EXP_2 = !0);
        c && (a.c.AFMA_LIDAR_EXP_1 = !b)
    }

    function mi(a) {
        gi(a, a.c.AFMA_LIDAR, oi);
        a.D = !1
    }
    k.Ca = function() {
        var a = U.g(),
            b = pi(this, "getMaxSize");
        a.a = new I(0, b.width, b.height, 0)
    };
    k.Da = function() {
        U.g().h = pi(this, "getScreenSize")
    };

    function pi(a, b) {
        if ("loading" === a.Z("getState")) return new H(-1, -1);
        b = a.Z(b);
        if (!b) return new H(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new H(-1, -1) : new H(a, b)
    }
    k.F = function() {
        mi(this);
        W.prototype.F.call(this)
    };

    function ji() {
        try {
            var a = fi.g();
            0 < a.j && P().clearTimeout(a.j);
            gi(a, "ready", ji);
            ki(a)
        } catch (b) {
            we(541, b)
        }
    }

    function oi(a, b) {
        try {
            var c = fi.g();
            c.A = !0;
            var d = a ? new I(a.y, a.x + a.width, a.y + a.height, a.x) : new I(0, 0, 0, 0);
            var e = nf(c);
            e.a = d;
            e.volume = b;
            c.R(e)
        } catch (f) {
            we(542, f)
        }
    }
    u(fi);

    function qi() {
        Ah.call(this)
    }
    q(qi, Ah);
    k = qi.prototype;
    k.Lb = function() {
        var a = this;
        if (F.__google_lidar_) {
            if (F.__google_lidar_ += 1, F.__google_lidar_adblocks_count_) {
                var b = F.__google_lidar_radf_;
                b && w(b) && b()
            }
        } else {
            F.__google_lidar_ = 1;
            Bh(this);
            b = Yd().a;
            F.__google_lidar_radf_ = Wd(b, function(d) {
                for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
                return a.Pb.apply(a, n(e))
            });
            var c = F.document.readyState;
            c && "complete" === c ? this.Za() : (ec(F, "load", Wd(b, function() {
                P().setTimeout(ve(172, function(d) {
                    for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
                    return a.Kb.apply(a, n(e))
                }), 100)
            })), Ge(F, "DOMContentLoaded", function(d) {
                for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
                return a.Za.apply(a, n(e))
            }, 173))
        }
    };
    k.Kb = function() {
        var a = this;
        x(X.a, function(b) {
            return Fh(a, b)
        });
        this.Za()
    };
    k.Za = function() {
        var a = T(),
            b = this.xa();
        if (b.length)
            if (this.a) try {
                Ih(this, a, b)
            } catch (c) {} else Gh(this)
    };

    function Jh(a) {
        if (1 == N(a, "omid")) return [new di];
        a = [ei.g(), fi.g()];
        var b = [Vg.g()];
        return [new Lg(a), new Ug(F), new Lg(b)]
    }
    k.Pb = function() {
        var a = this.xa();
        if (a.length) try {
            var b = T(),
                c = Ih(this, b, a);
            x(c, function(d) {
                d.xb = !0
            })
        } catch (d) {}
    };
    k.xa = function() {
        return Ja(y(Le, function(a) {
            return Fa(Pb(a, void 0))
        }))
    };
    u(qi);
    ue(378, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        var d;
        return (d = qi.g()).Lb.apply(d, n(b))
    });
}).call(this, this, this.document);