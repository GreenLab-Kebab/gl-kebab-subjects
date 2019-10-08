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
                    Sb: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.Sb;
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
                    } else a[c] = b[c];
        a.Ib = b.prototype
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
    var u = this || self;

    function na(a) {
        return "string" == typeof a
    }

    function oa(a) {
        return "number" == typeof a
    }

    function pa() {}

    function v(a) {
        a.Ua = void 0;
        a.g = function() {
            return a.Ua ? a.Ua : a.Ua = new a
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
        return "array" == qa(a)
    }

    function sa(a) {
        var b = qa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ta(a) {
        return "function" == qa(a)
    }

    function ua(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function va(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function wa(a, b, c) {
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

    function xa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? xa = va : xa = wa;
        return xa.apply(null, arguments)
    }

    function ya(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function za(a, b) {
        a = a.split(".");
        var c = u;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Aa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ib = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var Ba;

    function Ca(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function w(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }

    function Da(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ea(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Fa(a, b, c) {
        var d = c;
        w(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ga(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ha(a, b) {
        var c = 0;
        w(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    }

    function Ia(a, b) {
        b = Ja(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ja(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function Ka(a, b) {
        return 0 <= Ca(a, b)
    }

    function La(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ma(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Na(a, b) {
        a.sort(b || Oa)
    }

    function Oa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Pa(a) {
        if (!arguments.length) return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    };

    function Qa(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Ra(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Sa(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Ta(a) {
        var b = Ua,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function Va(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }
    var Wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function x(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Wa.length; f++) c = Wa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function Xa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var Ya = /&/g,
        Za = /</g,
        $a = />/g,
        ab = /"/g,
        bb = /'/g,
        cb = /\x00/g,
        db = /[\x00&<>"']/;

    function y(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }

    function eb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var z;
    a: {
        var fb = u.navigator;
        if (fb) {
            var gb = fb.userAgent;
            if (gb) {
                z = gb;
                break a
            }
        }
        z = ""
    }

    function A(a) {
        return -1 != z.indexOf(a)
    };

    function hb() {
        return A("Safari") && !(ib() || A("Coast") || A("Opera") || A("Edge") || A("Edg/") || A("OPR") || A("Firefox") || A("FxiOS") || A("Silk") || A("Android"))
    }

    function ib() {
        return (A("Chrome") || A("CriOS")) && !A("Edge")
    };

    function jb(a) {
        db.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ya, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Za, "&lt;")), -1 != a.indexOf(">") && (a = a.replace($a, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(ab, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(bb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(cb, "&#0;")));
        return a
    }

    function kb() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }

    function lb(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function mb(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function nb(a) {
        nb[" "](a);
        return a
    }
    nb[" "] = pa;

    function ob(a, b) {
        try {
            return nb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function pb(a, b) {
        var c = qb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var rb = A("Opera"),
        C = A("Trident") || A("MSIE"),
        sb = A("Edge"),
        tb = A("Gecko") && !(y(z, "WebKit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        ub = y(z, "WebKit") && !A("Edge"),
        vb = ub && A("Mobile");

    function wb() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var xb;
    a: {
        var yb = "",
            zb = function() {
                var a = z;
                if (tb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (sb) return /Edge\/([\d\.]+)/.exec(a);
                if (C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (ub) return /WebKit\/(\S+)/.exec(a);
                if (rb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();zb && (yb = zb ? zb[1] : "");
        if (C) {
            var Ab = wb();
            if (null != Ab && Ab > parseFloat(yb)) {
                xb = String(Ab);
                break a
            }
        }
        xb = yb
    }
    var Bb = xb,
        qb = {};

    function Cb(a) {
        return pb(a, function() {
            for (var b = 0, c = Xa(String(Bb)).split("."), d = Xa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = eb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || eb(0 == g[2].length, 0 == h[2].length) || eb(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var Db;
    Db = u.document && C ? wb() : void 0;
    var Eb = {},
        Fb = null;
    var Gb = 0,
        Hb = 0;

    function Ib() {
        this.a = []
    }
    Ib.prototype.length = function() {
        return this.a.length
    };

    function Jb(a) {
        var b = a.a;
        a.a = [];
        return b
    }

    function Kb(a, b) {
        for (; 127 < b;) a.a.push(b & 127 | 128), b >>>= 7;
        a.a.push(b)
    }

    function Lb(a, b) {
        a.a.push(b >>> 0 & 255);
        a.a.push(b >>> 8 & 255);
        a.a.push(b >>> 16 & 255);
        a.a.push(b >>> 24 & 255)
    };

    function Mb() {
        this.b = [];
        this.c = 0;
        this.a = new Ib
    }
    Mb.prototype.reset = function() {
        this.b = [];
        Jb(this.a);
        this.c = 0
    };

    function Nb(a, b, c) {
        if (null != c) {
            Kb(a.a, 8 * b);
            a = a.a;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            Gb = b;
            Hb = d;
            c = Gb;
            for (b = Hb; 0 < b || 127 < c;) a.a.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.a.push(c)
        }
    };

    function Ob() {}
    var Pb = "function" == typeof Uint8Array,
        Qb = [];

    function Rb(a, b) {
        if (b < a.f) {
            b += a.c;
            var c = a.a[b];
            return c === Qb ? a.a[b] = [] : c
        }
        if (a.b) return c = a.b[b], c === Qb ? a.b[b] = [] : c
    }

    function Sb(a, b) {
        a = Rb(a, b);
        return null == a ? 0 : a
    }

    function Tb(a, b, c) {
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

    function Ub(a) {
        if (a.h)
            for (var b in a.h) {
                var c = a.h[b];
                if (ra(c))
                    for (var d = 0; d < c.length; d++) c[d] && Ub(c[d]);
                else c && Ub(c)
            }
    }
    Ob.prototype.toString = function() {
        Ub(this);
        return this.a.toString()
    };
    var Vb;
    Vb = ["av.key", "js", "20191007"].slice(-1)[0];
    var D = document,
        E = window;
    var Wb = !C || 9 <= Number(Db),
        Xb = C || rb || ub;

    function F(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    F.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    F.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    F.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function G(a, b) {
        this.width = a;
        this.height = b
    }
    G.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    G.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    G.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    G.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Yb(a) {
        return a ? new Zb($b(a)) : Ba || (Ba = new Zb)
    }

    function ac() {
        var a = document;
        a.getElementsByClassName ? a = a.getElementsByClassName("GoogleActiveViewContainer")[0] : (a = document, a = a.querySelectorAll && a.querySelector ? a.querySelector(".GoogleActiveViewContainer") : bc(a, "*", "GoogleActiveViewContainer", void 0)[0] || null);
        return a || null
    }

    function bc(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && Ka(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }

    function cc(a, b) {
        Ra(b, function(c, d) {
            c && "object" == typeof c && c.rc && (c = c.qc());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : dc.hasOwnProperty(d) ? a.setAttribute(dc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var dc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function ec(a) {
        var b = a.scrollingElement ? a.scrollingElement : ub || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return C && Cb("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function fc(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function gc(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            g = d[1];
        if (!Wb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', jb(g.name), '"');
            if (g.type) {
                f.push(' type="', jb(g.type), '"');
                var h = {};
                x(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = hc(e, f);
        g && ("string" === typeof g ? f.className = g : ra(g) ? f.className = g.join(" ") : cc(f, g));
        2 < d.length && ic(e, f, d);
        return f
    }

    function ic(a, b, c) {
        function d(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !sa(f) || ua(f) && 0 < f.nodeType ? d(f) : w(jc(f) ? Ma(f) : f, d)
        }
    }

    function hc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function kc(a) {
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

    function $b(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function lc(a) {
        try {
            return a.contentWindow || (a.contentDocument ? fc(a.contentDocument) : null)
        } catch (b) {}
        return null
    }

    function jc(a) {
        if (a && "number" == typeof a.length) {
            if (ua(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (ta(a)) return "function" == typeof a.item
        }
        return !1
    }

    function mc(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Zb(a) {
        this.a = a || u.document || document
    };

    function nc() {
        return A("iPad") || A("Android") && !A("Mobile") || A("Silk")
    };
    var oc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function pc(a) {
        try {
            return !!a && null != a.location.href && ob(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function qc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function rc(a) {
        var b = [];
        qc(a, function(c, d) {
            b.push(d)
        });
        return b
    }

    function sc() {
        var a = tc;
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    var uc = Qa(function() {
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

    function vc(a) {
        return a ? a.passive && uc() ? a : a.capture || !1 : !1
    }

    function wc(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, vc(d)), !0) : !1
    }

    function xc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, vc(void 0))
    };

    function yc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }
    var zc = Qa(function() {
        return "referrerPolicy" in u.document.createElement("img")
    });
    var Ac = {
        nc: 1,
        pc: 2,
        lc: 3
    };
    var Bc;
    Bc = /^true$/.test("<<<IS_DEBUG_IP:j>>>");

    function H(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    k = H.prototype;
    k.H = function() {
        return this.right - this.left
    };
    k.F = function() {
        return this.bottom - this.top
    };

    function Cc(a) {
        return new H(a.top, a.right, a.bottom, a.left)
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

    function Dc(a, b, c) {
        b instanceof F ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
        return a
    };
    var Ec = {};

    function Fc(a) {
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
        C && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Gc(a, b) {
        var c = new F(0, 0),
            d = fc($b(a));
        if (!ob(d, "parent")) return c;
        do {
            if (d == b) {
                var e = a,
                    f = $b(e);
                var g = new F(0, 0);
                var h = f ? $b(f) : document;
                h = !C || 9 <= Number(Db) || "CSS1Compat" == Yb(h).a.compatMode ? h.documentElement : h.body;
                e != h && (e = Fc(e), f = ec(Yb(f).a), g.x = e.left + f.x, g.y = e.top + f.y)
            } else g = Fc(a), g = new F(g.left, g.top);
            c.x += g.x;
            c.y += g.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    var Hc = new function(a) {
        this.a = a
    }(5);

    function Ic(a) {
        return a[Hc.a] || function() {}
    };

    function Jc() {
        this.a = function() {
            return !1
        }
    }
    v(Jc);

    function Kc(a) {
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

    function Lc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function Mc() {
        var a = D.documentElement,
            b = I();
        try {
            if (D.createEvent) {
                var c = D.createEvent("CustomEvent");
                c.initCustomEvent("osd_load", !0, !0, "");
                a.dispatchEvent(c)
            } else if (Lc(b.CustomEvent)) {
                var d = new b.CustomEvent("osd_load", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: ""
                });
                a.dispatchEvent(d)
            } else if (Lc(b.Event)) {
                var e = new Event("osd_load", {
                    bubbles: !0,
                    cancelable: !0
                });
                a.dispatchEvent(e)
            }
        } catch (f) {}
    }

    function Nc() {
        var a = I();
        return "complete" === a.document.readyState || !!a.google_onload_fired
    }
    var Oc = !!window.google_async_iframe_id,
        Pc = Oc && window.parent || window;

    function I() {
        if (Oc && !pc(Pc)) {
            var a = "." + D.domain;
            try {
                for (; 2 < a.split(".").length && !pc(Pc);) D.domain = a = a.substr(a.indexOf(".") + 1), Pc = window.parent
            } catch (b) {}
            pc(Pc) || (Pc = window)
        }
        return Pc
    };

    function Qc(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                if (void 0 === c ? 0 : c) var f = (new G(e.innerWidth, e.innerHeight)).round();
                else {
                    var g = (e || window).document,
                        h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new G(h.clientWidth, h.clientHeight)).round()
                }
                d = f
            } catch (r) {
                d = new G(-12245933, -12245933)
            }
            a = d;
            var n = ec(Yb(b.document).a);
            if (-12245933 == a.width) {
                var m = a.width;
                var l = new H(m, m, m, m)
            } else l = new H(n.y, n.x + a.width, n.y + a.height, n.x);
            return l
        } catch (r) {
            return new H(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Rc = {
        NONE: 0,
        dc: 1
    };

    function Sc() {
        this.o = 0;
        this.f = !1;
        this.b = -1;
        this.a = !1;
        this.c = 0
    }
    Sc.prototype.isVisible = function() {
        return this.a ? .3 <= this.o : .5 <= this.o
    };
    var J = {
            cc: 0,
            ec: 1
        },
        Tc = {
            370204018: 0,
            370204019: 1,
            370204052: 2,
            370204026: 0,
            370204027: 1,
            370204053: 2
        },
        Uc = {
            668123728: 0,
            668123729: 1
        },
        Vc = {
            668123028: 0,
            668123029: 1
        },
        Wc = {
            NONE: 0,
            kc: 1,
            fc: 2
        },
        Xc = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        },
        Yc = {
            319331040: 0,
            319331041: 1
        },
        Zc = {
            42530094: 0,
            42530095: 1
        },
        $c = {
            42530173: 0,
            42530174: 1
        },
        ad = {
            370204070: 1
        },
        bd = {
            370204078: 0,
            370204079: 1,
            370204080: 0,
            370204081: 1
        };

    function cd() {
        this.a = null;
        this.b = !1;
        this.c = null
    }

    function K(a) {
        a.b = !0;
        return a
    }

    function dd(a, b) {
        a.c = void 0 === b ? null : b
    }

    function ed(a, b) {
        a.c && w(b, function(c) {
            c = a.c[c];
            void 0 !== c && fd(a, c)
        })
    }

    function gd(a) {
        cd.call(this);
        this.f = a
    }
    t(gd, cd);

    function fd(a, b) {
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

    function hd() {
        this.a = {};
        this.c = !0;
        this.b = {}
    }
    hd.prototype.reset = function() {
        this.a = {};
        this.c = !0;
        this.b = {}
    };

    function L(a, b, c) {
        a.a[b] || (a.a[b] = new gd(c));
        return a.a[b]
    }

    function id(a, b, c) {
        (a = a.a[b]) && fd(a, c)
    }

    function M(a, b) {
        var c = a.b;
        if (null !== c && b in c) return a.b[b];
        if (a = a.a[b]) return a.a
    }

    function jd(a) {
        var b = {},
            c = Sa(a.a, function(d) {
                return d.b
            });
        Ra(c, function(d, e) {
            d = void 0 !== a.b[e] ? String(a.b[e]) : d.b && null !== d.a ? String(d.a) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }

    function kd(a, b) {
        if (!a.c) return b;
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("="),
                e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.a[e]) && fd(e, d)
        }
        return b.join("&")
    }

    function ld(a, b) {
        a.c && w(Va(a.a), function(c) {
            return ed(c, b)
        })
    }

    function md(a, b) {
        a.c && b && na(b) && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","), b = Ea(b, function(c) {
            return Number(c)
        }), ld(a, b))
    };
    var nd = !C && !hb();

    function od(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (nd && a.dataset) {
            if (!(!A("Android") || ib() || A("Firefox") || A("FxiOS") || A("Opera") || A("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + lb(b))
    }

    function pd(a, b) {
        return /-[a-z]/.test(b) ? !1 : nd && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + lb(b)) : !!a.getAttribute("data-" + lb(b))
    };

    function qd() {
        this.a = this.b = null;
        this.c = "no"
    };

    function rd(a, b) {
        this.b = (void 0 === a ? 0 : a) || 0;
        this.a = (void 0 === b ? "" : b) || ""
    }

    function sd(a) {
        return !!a.b || !!a.a
    }
    rd.prototype.toString = function() {
        return this.b + (this.a ? "-" : "") + this.a
    };

    function td() {}
    td.prototype.a = function() {
        return 0
    };
    td.prototype.c = function() {
        return 0
    };
    td.prototype.f = function() {
        return 0
    };
    td.prototype.b = function() {
        return 0
    };

    function ud() {
        if (!vd()) throw Error();
    }
    t(ud, td);

    function vd() {
        return !(!E || !E.performance)
    }
    ud.prototype.a = function() {
        return vd() && E.performance.now ? E.performance.now() : td.prototype.a.call(this)
    };
    ud.prototype.c = function() {
        return vd() && E.performance.memory ? E.performance.memory.totalJSHeapSize || 0 : td.prototype.c.call(this)
    };
    ud.prototype.f = function() {
        return vd() && E.performance.memory ? E.performance.memory.usedJSHeapSize || 0 : td.prototype.f.call(this)
    };
    ud.prototype.b = function() {
        return vd() && E.performance.memory ? E.performance.memory.jsHeapSizeLimit || 0 : td.prototype.b.call(this)
    };

    function wd() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[D.visibilityState || D.webkitVisibilityState || D.mozVisibilityState || ""] || 0
    };

    function xd() {}
    xd.prototype.isVisible = function() {
        return 1 === wd()
    };
    var yd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function zd() {
        var a = u,
            b = [],
            c = null;
        do {
            var d = a;
            if (pc(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else e = c, c = null;
            b.push(new Ad(e || "", d));
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
            for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.ub = !0);
        return b
    }

    function Bd(a, b) {
        this.a = a;
        this.b = b
    }

    function Ad(a, b, c) {
        this.url = a;
        this.b = b;
        this.ub = !!c;
        this.depth = null
    };

    function Cd() {
        this.c = "&";
        this.f = !1;
        this.b = {};
        this.h = 0;
        this.a = []
    }

    function Dd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Ed(a, b, c, d, e) {
        var f = [];
        qc(a, function(g, h) {
            (g = Fd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Fd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Fd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Ed(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Gd(a, b, c, d) {
        a.a.push(b);
        a.b[b] = Dd(c, d)
    }

    function Hd(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Id(a) - c.length;
        if (0 > d) return "";
        a.a.sort(function(l, r) {
            return l - r
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], n = 0; n < h.length; n++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = Ed(h[n], a.c, ",$");
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

    function Id(a) {
        var b = 1,
            c;
        for (c in a.b) b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    };

    function Jd() {
        this.b = new xd;
        this.a = vd() ? new ud : new td
    }
    Jd.prototype.setInterval = function(a, b) {
        return E.setInterval(a, b)
    };
    Jd.prototype.clearInterval = function(a) {
        E.clearInterval(a)
    };
    Jd.prototype.setTimeout = function(a, b) {
        return E.setTimeout(a, b)
    };
    Jd.prototype.clearTimeout = function(a) {
        E.clearTimeout(a)
    };

    function Kd(a) {
        N();
        var b = I() || E;
        yc(b, a, !1)
    }
    v(Jd);

    function Ld() {}

    function N() {
        var a = Ld.g();
        if (!a.a) {
            if (!E) throw Error("Context has not been set and window is undefined.");
            a.a = Jd.g()
        }
        return a.a
    }
    v(Ld);

    function Md(a) {
        this.h = null;
        a || (a = []);
        this.c = -1;
        this.a = a;
        a: {
            if (a = this.a.length) {
                --a;
                var b = this.a[a];
                if (!(null === b || "object" != typeof b || ra(b) || Pb && b instanceof Uint8Array)) {
                    this.f = a - -1;
                    this.b = b;
                    break a
                }
            }
            this.f = Number.MAX_VALUE
        }
    }
    Aa(Md, Ob);

    function Nd(a) {
        this.f = a;
        this.a = -1;
        this.b = this.c = 0
    }

    function Od(a, b) {
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

    function Pd(a, b) {
        this.b = a;
        this.c = b;
        this.a = new Nd(a)
    };

    function O() {
        this.f = void 0;
        this.c = this.l = 0;
        this.h = this.i = -1;
        this.a = new hd;
        dd(K(L(this.a, "mv", Wc)), Xc);
        L(this.a, "omid", J);
        K(L(this.a, "epoh", J));
        K(L(this.a, "epph", J));
        dd(K(L(this.a, "umt", J)), Uc);
        dd(K(L(this.a, "gmpd", J)), Vc);
        dd(K(L(this.a, "sel", J)), Tc);
        dd(K(L(this.a, "buvpe", J)), Yc);
        dd(K(L(this.a, "imams", J)), Zc);
        dd(L(this.a, "imar", J), $c);
        this.a.b.imar = 1;
        dd(K(L(this.a, "gms", J)), ad);
        K(L(this.a, "phel", J));
        K(L(this.a, "phell", J));
        K(L(this.a, "oseid", Ac));
        K(L(this.a, "xdi", J));
        K(L(this.a, "amp", J));
        K(L(this.a, "prf", J));
        K(L(this.a, "gtx", J));
        K(L(this.a, "mvp_lv", J));
        dd(K(L(this.a, "lvio", J)), bd);
        K(L(this.a, "xosd", J));
        this.j = new Pd(N(), this.a);
        this.b = null
    }

    function Qd() {
        return O.g().j
    }
    v(O);

    function Rd() {
        var a = "https:";
        E && E.location && "http:" === E.location.protocol && (a = "http:");
        this.b = a;
        this.a = .01
    }

    function Sd(a, b, c, d) {
        if (Math.random() < (d || a.a)) try {
            if (c instanceof Cd) var e = c;
            else e = new Cd, qc(c, function(g, h) {
                var n = e,
                    m = n.h++;
                g = Dd(h, g);
                n.a.push(m);
                n.b[m] = g
            });
            var f = Hd(e, a.b, "/pagead/gen_204?id=" + b + "&");
            f && Kd(f)
        } catch (g) {}
    };

    function Td(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Ud = null;

    function Vd() {
        var a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function Wd() {
        var a = void 0 === a ? u : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Xd(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var P = u.performance,
        Yd = !!(P && P.mark && P.measure && P.clearMarks),
        Zd = Qa(function() {
            var a;
            if (a = Yd) {
                var b;
                if (null === Ud) {
                    Ud = "";
                    try {
                        a = "";
                        try {
                            a = u.top.location.hash
                        } catch (c) {
                            a = u.location.hash
                        }
                        a && (Ud = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Ud;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function $d() {
        var a = I();
        this.b = [];
        this.c = a || u;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = Zd() || (null != b ? b : 1 > Math.random())
    }

    function ae(a) {
        a && P && Zd() && (P.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), P.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    $d.prototype.start = function(a, b) {
        if (!this.a) return null;
        var c = Wd() || Vd();
        a = new Xd(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        P && Zd() && P.mark(b);
        return a
    };

    function be() {
        var a = ce;
        this.i = de;
        this.h = "jserror";
        this.f = !0;
        this.b = null;
        this.j = this.c;
        this.a = void 0 === a ? null : a
    }

    function ee(a, b, c) {
        return Od(Qd().a, function() {
            try {
                if (a.a && a.a.a) {
                    var d = a.a.start(b.toString(), 3);
                    var e = c();
                    var f = a.a,
                        g = d;
                    if (f.a && "number" === typeof g.value) {
                        var h = Wd() || Vd();
                        g.duration = h - g.value;
                        var n = "goog_" + g.label + "_" + g.uniqueId + "_end";
                        P && Zd() && P.mark(n);
                        !f.a || 2048 < f.b.length || f.b.push(g)
                    }
                } else e = c()
            } catch (m) {
                f = a.f;
                try {
                    ae(d), f = a.j(b, new fe(ge(m)), void 0, void 0)
                } catch (l) {
                    a.c(217, l)
                }
                if (!f) throw m;
            }
            return e
        })()
    }

    function he(a, b) {
        var c = ie;
        return Od(Qd().a, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return ee(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    be.prototype.c = function(a, b, c, d, e) {
        e = e || this.h;
        try {
            var f = new Cd;
            f.f = !0;
            Gd(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new fe(ge(b)));
            b.msg && Gd(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.b) try {
                this.b(g)
            } catch (B) {}
            if (d) try {
                d(g)
            } catch (B) {}
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            var h = zd(),
                n = new Ad(u.location.href, u, !1);
            b = null;
            var m = h.length - 1;
            for (d = m; 0 <= d; --d) {
                var l = h[d];
                !b && yd.test(l.url) && (b = l);
                if (l.url && !l.ub) {
                    n = l;
                    break
                }
            }
            l = null;
            var r = h.length && h[m].url;
            0 != n.depth && r && (l = h[m]);
            var p = new Bd(n, l);
            p.b && Gd(f, 4, "top", p.b.url || "");
            Gd(f, 5, "url", p.a.url || "");
            Sd(this.i, e, f, c)
        } catch (B) {
            try {
                Sd(this.i, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ge(B),
                    url: p && p.a.url
                }, c)
            } catch (Xg) {}
        }
        return this.f
    };

    function ge(a) {
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

    function fe(a) {
        Td.call(this, Error(a), {
            message: a
        })
    }
    t(fe, Td);
    var de, ie, ce = new $d;

    function je() {
        var a = I();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = ce, a.a = !1, a.b != a.c.google_js_reporting_queue && (Zd() && w(a.b, ae), a.b.length = 0))
    }(function() {
        de = new Rd;
        ie = new be;
        var a = I();
        a && a.document && ("complete" == a.document.readyState ? je() : ce.a && wc(a, "load", function() {
            je()
        }))
    })();

    function ke(a) {
        ie.b = function(b) {
            w(a, function(c) {
                c(b)
            })
        }
    }

    function le(a, b) {
        return ee(ie, a, b)
    }

    function Q(a, b) {
        return he(a, b)
    }

    function me(a, b, c, d) {
        ie.c(a, b, c, d)
    };
    var ne = +new Date,
        oe = -1,
        pe = -1,
        qe = !1;

    function R() {
        return +new Date - ne
    }

    function re() {
        var a = O.g().f,
            b = 0 <= pe ? R() - pe : -1,
            c = qe ? R() - oe : -1;
        if (947190542 == a) return 100;
        if (79463069 == a) return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        me(637, Error(), .001);
        var e = b; - 1 != c && c < b && (e = c);
        for (b = 0; b < a.length; ++b)
            if (e < a[b]) {
                var f = d[b];
                break
            }
        void 0 === f && (f = d[a.length]);
        return f
    };

    function se(a) {
        for (var b = a !== a.top, c = a.top, d = a, e = d, f = 0; d && d != d.parent;) d = d.parent, f++, pc(d) && (e = d);
        c = c === e;
        if (b && c && null != a.top.mraid) return {
            Fa: a.top.mraid,
            Ha: 3
        };
        a = a.mraid;
        return null != a ? b ? c ? {
            Fa: a,
            Ha: 2
        } : {
            Fa: a,
            Ha: 1
        } : {
            Fa: a,
            Ha: 0
        } : null
    };

    function te(a) {
        a = Kc(a);
        return !(!a || !a.observeIntersection)
    }

    function ue(a) {
        return (a = a.document) && ta(a.elementFromPoint)
    };
    Bc && (de.a = 1);
    if (D && D.URL) {
        var ve, tc = D.URL;
        ve = !!tc && 0 < sc().length;
        ie.f = !ve
    }

    function S(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        c = he(d, c);
        wc(a, b, c, {
            capture: e
        });
        return c
    }

    function we(a) {
        var b = ["IMG", "FRAME", "IFRAME"];
        return Ga(b, function(c) {
            return a.nodeName == String(c)
        }) ? [a] : Fa(b, function(c, d) {
            return c.concat(Ma((a || document).getElementsByTagName(String(d))))
        }, [])
    }

    function xe(a, b) {
        if (a) {
            var c = 0,
                d = null;
            a = we(a);
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
                        } catch (n) {
                            f = !1
                        }
                }
                f || (c++, S(d, "load", function() {
                    c--;
                    c || b(null)
                }, 130))
            }
            a = d = null;
            !c && b(null)
        }
    }

    function ye(a, b) {
        function c(d) {
            xc(a, d, c);
            b(d)
        }
        return S(a, "DOMNodeRemoved", c, 156, !1)
    };

    function ze(a) {
        var b = [];
        Ra(a, function(c, d) {
            d = encodeURIComponent(d);
            na(c) && (c = encodeURIComponent(c));
            b.push(d + "=" + c)
        });
        b.push("24=" + +new Date);
        return b.join("\n")
    };

    function Ae() {
        this.a = null;
        this.status = 0
    };
    var Be = 0;

    function Ce(a, b) {
        try {
            Be++, b.postMessage(a, "*")
        } catch (c) {}
    }

    function De(a, b) {
        b && (a(b), b.frames && w(b.frames, function(c) {
            De(a, c)
        }))
    }

    function Ee(a, b, c) {
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

    function Fe(a, b) {
        0 == a.length ? (b.a = null, b.status = 1) : (a = kc.apply(null, a), !a || a.tagName ? b.a = a : b.a = a.parentElement, b.a || (b.status = -2))
    }

    function Ge(a, b, c) {
        var d = new RegExp("(?:(?:[?&]|%26|&3[f]|%2526|%253[f])" + b + "(?:=|%3[d]|%253[d]))([a-z0-9-_]*)", "i"),
            e = new Ae;
        if ("" == b || -1 == c) return e.status = -1, e;
        try {
            b = [];
            for (var f = (a.document || document).getElementsByTagName("A"), g = 0; g < f.length; g++) {
                var h = f[g];
                Ee(d, h.href, c) && (e.status = 3, b.push(h))
            }
            if (0 < b.length) return Fe(b, e), e;
            var n = (a.document || document).getElementsByTagName("EMBED");
            for (a = 0; a < n.length; a++) {
                var m = n[a];
                Ee(d, m.src, c) && (0 == m.getBoundingClientRect().height && m.parentElement && "OBJECT" == m.parentElement.tagName ? (e.status = 5, b.push(m.parentElement)) : (e.status = 4, b.push(m)))
            }
            if (0 < b.length) return Fe(b, e), e
        } catch (l) {
            return e.status = 7, e
        }
        e.status = 1;
        return e
    }

    function He(a) {
        return new H(a.top, a.right, a.bottom, a.left)
    }

    function Ie() {
        var a = N().b;
        return 0 === wd() ? -1 : a.isVisible() ? 0 : 1
    }

    function Je(a) {
        return [a.top, a.left, a.bottom, a.right].join("-")
    }

    function Ke(a, b, c) {
        if (b && a)
            if (c && 0 < c.length)
                for (c = Da(c, function(e) {
                        var f = e.parent && e.parent !== e;
                        return e === E.top || f
                    }), a = ba(c), c = a.next(); !c.done; c = a.next()) Ce(b, c.value);
            else {
                c = [];
                var d = lc(a);
                d && c.push(d);
                if (0 === c.length) try {
                    c = Ea(bc(document, "IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                        return lc(e)
                    })
                } catch (e) {}
                a = ba(c);
                for (c = a.next(); !c.done; c = a.next()) {
                    c = c.value;
                    try {
                        b && De(ya(Ce, b), c)
                    } catch (e) {}
                }
            }
    }

    function Le(a, b, c) {
        try {
            var d = ze(b);
            Ke(a, d, c)
        } catch (e) {}
    };

    function Me() {
        var a = z;
        return a ? Ga("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;OMI/".split(";"), function(b) {
            return y(a, b)
        }) ? !0 : y(a, "Presto") && y(a, "Linux") && !y(a, "X11") && !y(a, "Android") && !y(a, "Mobi") : !1
    }

    function Ne() {
        var a = z;
        return y(a, "AppleTV") || y(a, "Apple TV") || y(a, "CFNetwork") || y(a, "tvOS")
    }

    function Oe() {
        var a = z;
        return y(a, "sdk_google_atv_x86") || y(a, "Android TV")
    };

    function T() {
        this.b = !pc(E.top);
        this.u = !this.b || te(E);
        this.i = nc() || !nc() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"));
        var a = zd();
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url && (a = a[a.length - 1].url.match(oc)[3] || null) && decodeURI(a);
        this.a = new H(0, 0, 0, 0);
        this.j = new G(0, 0);
        this.h = new G(0, 0);
        this.c = new H(0, 0, 0, 0);
        this.l = new F(0, 0);
        this.s = this.m = !1;
        this.f = !(!E || !se(E));
        Pe(this)
    }

    function Qe(a, b) {
        b && b.screen && (a.j = new G(b.screen.width, b.screen.height))
    }

    function Re(a, b) {
        var c = a.a ? new G(a.a.H(), a.a.F()) : new G(0, 0);
        b = void 0 === b ? E : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0,
            e = 0;
        try {
            var f = b.document,
                g = f.body,
                h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var n = h.scrollHeight,
                    m = h.scrollWidth,
                    l = h.offsetHeight,
                    r = h.offsetWidth;
                h.clientHeight != l && (n = g.scrollHeight, m = g.scrollWidth, l = g.offsetHeight, r = g.offsetWidth);
                n > c.height ? n > l ? (d = n, e = m) : (d = l, e = r) : n < l ? (d = n, e = m) : (d = l, e = r)
            }
            var p = new G(e, d)
        } catch (B) {
            p = new G(-12245933, -12245933)
        }
        a.h = p
    }

    function Pe(a) {
        E && E.document && (a.c = Qc(!1, E, a.i), a.a = Qc(!0, E, a.i), Re(a, E), Qe(a, E))
    }

    function Se() {
        if (T.g().s) return !0;
        var a = N().b.isVisible(),
            b = 0 === wd();
        return a || b
    }
    v(T);
    var Te = new H(0, 0, 0, 0);

    function Ue(a, b) {
        try {
            try {
                var c = He(a.getBoundingClientRect())
            } catch (n) {
                c = new H(0, 0, 0, 0)
            }
            var d = c.right - c.left,
                e = c.bottom - c.top,
                f = Gc(a, b),
                g = f.x,
                h = f.y;
            return new H(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
        } catch (n) {
            return Cc(Te)
        }
    }

    function Ve(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new H(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left)) : new H(0, 0, 0, 0)
    }

    function We(a, b) {
        b = U(b);
        return 0 === b ? 0 : U(a) / b
    }

    function U(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function Xe(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                a: {
                    var d = void 0;
                    if (Xb && !(C && Cb("9") && !Cb("10") && u.SVGElement && a instanceof u.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;e = ua(d) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var f = $b(a),
                        g = f && fc(f),
                        h = g && g.frameElement;
                    h && (a = h)
                }
            }
            catch (n) {
                break
            }
        }
        return !1
    }

    function Ye(a, b, c) {
        if (!a || !b) return !1;
        b = Dc(Cc(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = I();
        pc(d.top) && d.top && d.top.document && (d = d.top);
        if (!ue(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = $b(c)) && b.defaultView && b.defaultView.frameElement) && Xe(b, a);
        d = a === c;
        a = !d && a && mc(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function Ze(a, b, c, d) {
        return T.g().b ? !1 : 0 >= a.H() || 0 >= a.F() ? !0 : c && d ? le(208, function() {
            return Ye(a, b, c)
        }) : !1
    };

    function $e(a, b, c) {
        var d = new H(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.c = b;
        this.a = d;
        this.b = c
    };

    function af(a, b, c, d, e, f, g) {
        this.i = a;
        this.f = b;
        this.a = c;
        this.c = d;
        this.j = e;
        this.h = f;
        this.b = g
    }

    function bf(a, b) {
        return b ? Math.max(a.c, a.j) : a.c
    };

    function cf(a) {
        this.c = a;
        this.b = 0;
        this.a = null
    }
    cf.prototype.cancel = function() {
        N().clearTimeout(this.a);
        this.a = null
    };

    function df(a) {
        var b = N();
        a.a = b.setTimeout(Od(Qd().a, Q(143, function() {
            a.b++;
            a.c.Hb()
        })), re())
    };

    function V(a, b, c) {
        this.b = a;
        this.R = void 0 === c ? "na" : c;
        this.h = [];
        this.w = !1;
        this.f = new $e(-1, !0, this);
        this.a = this;
        this.i = b;
        this.M = this.u = !1;
        this.J = "uk";
        this.K = !1;
        this.j = !0
    }
    k = V.prototype;
    k.$ = function() {
        return this.C()
    };
    k.C = function() {
        return !1
    };
    k.sb = function() {
        this.w = !0
    };
    k.ha = function() {
        return this.a.J
    };

    function ef(a, b) {
        a.M || (a.M = !0, a.J = b, a.i = 0, a.a != a || ff(a))
    }
    k.G = function() {
        return this.a.R
    };
    k.O = function() {
        return this.a.ob()
    };
    k.ob = function() {
        return {}
    };
    k.P = function() {
        return this.a.i
    };

    function gf(a, b) {
        Ka(a.h, b) || (a.h.push(b), b.ia(a.a), b.W(a.f), b.T() && (a.u = !0))
    }
    k.Wa = function() {
        var a = T.g();
        a.a = Qc(!0, this.b, a.i)
    };
    k.Xa = function() {
        Qe(T.g(), this.b)
    };
    k.Ab = function() {
        Re(T.g(), this.b)
    };
    k.Bb = function() {
        var a = T.g();
        a.c = Qc(!1, this.b, a.i)
    };
    k.Sa = function() {
        return this.f.a
    };

    function hf(a) {
        a = a.a;
        a.Xa();
        a.Wa();
        a.Bb();
        a.Ab();
        a.f.a = a.Sa()
    }
    k.Hb = function() {};

    function jf(a) {
        a.u = a.h.length ? Ga(a.h, function(b) {
            return b.T()
        }) : !1
    }

    function kf(a) {
        var b = Ma(a.h);
        w(b, function(c) {
            c.W(a.f)
        })
    }

    function ff(a) {
        var b = Ma(a.h);
        w(b, function(c) {
            c.ia(a.a)
        });
        a.a != a || kf(a)
    }
    k.ia = function(a) {
        var b = this.a;
        this.a = a.P() >= this.i ? a : this;
        b !== this.a ? (this.j = this.a.j, ff(this)) : this.j !== this.a.j && (this.j = this.a.j, ff(this))
    };
    k.W = function(a) {
        if (a.b === this.a) {
            var b = this.f,
                c = this.u;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.c == a.c) b = b.a, c = a.a, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
            this.f = a;
            !c && kf(this)
        }
    };
    k.T = function() {
        return this.u
    };
    k.D = function() {
        this.K = !0
    };
    k.ja = function() {
        return this.K
    };

    function lf(a, b, c, d) {
        this.c = a;
        this.b = new H(0, 0, 0, 0);
        this.l = new H(0, 0, 0, 0);
        this.a = b;
        this.B = c;
        this.A = d;
        this.w = !1;
        this.timestamp = -1;
        this.h = new af(b.f, this.b, new H(0, 0, 0, 0), 0, 0, R(), 0)
    }
    k = lf.prototype;
    k.Ca = function() {
        return !0
    };
    k.X = function() {};
    k.Oa = function() {
        this.c && (this.b = Ue(this.c, this.a.a.b))
    };
    k.kb = function() {
        this.l = this.a.f.a
    };
    k.S = function() {
        this.Oa();
        this.h = new af(this.a.f, this.b, this.h.a, this.h.c, this.h.j, R(), this.h.b)
    };
    k.D = function() {
        if (!this.ja()) {
            var a = this.a,
                b = a.h,
                c = Ca(b, this);
            0 <= c && Array.prototype.splice.call(b, c, 1);
            a.u && this.T() && jf(a);
            this.w = !0
        }
    };
    k.ja = function() {
        return this.w
    };
    k.O = function() {
        return this.a.O()
    };
    k.P = function() {
        return this.a.P()
    };
    k.ha = function() {
        return this.a.ha()
    };
    k.ia = function() {};
    k.W = function() {
        this.S()
    };
    k.T = function() {
        return this.A
    };

    function mf(a) {
        this.h = !1;
        this.a = a
    }
    k = mf.prototype;
    k.P = function() {
        return this.a.P()
    };
    k.ha = function() {
        return this.a.ha()
    };
    k.create = function(a, b, c) {
        var d = null;
        this.a && (d = this.ya(a, b, c), gf(this.a, d));
        return d
    };
    k.$ = function() {
        return this.C()
    };
    k.C = function() {
        return !1
    };
    k.zb = function() {
        return !0
    };
    k.D = function() {
        this.h = !0
    };
    k.ja = function() {
        return this.h
    };
    k.O = function() {
        return {}
    };

    function nf(a, b, c) {
        this.c = void 0 === c ? 0 : c;
        this.b = a;
        this.a = null == b ? "" : b
    }

    function of (a) {
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

    function pf(a, b) {
        return a.c < b.c ? !0 : a.c > b.c ? !1 : a.b < b.b ? !0 : a.b > b.b ? !1 : typeof a.a < typeof b.a ? !0 : typeof a.a > typeof b.a ? !1 : a.a < b.a
    };

    function qf() {
        this.c = 0;
        this.a = [];
        this.b = !1
    }
    qf.prototype.add = function(a, b, c) {
        ++this.c;
        a = new nf(a, b, c);
        this.a.push(new nf(a.b, a.a, a.c + this.c / 4096));
        this.b = !0;
        return this
    };

    function rf(a, b) {
        w(b.a, function(c) {
            a.add(c.b, c.a, of (c))
        })
    }

    function sf(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        qc(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        })
    }

    function tf(a) {
        var b = uf;
        a.b && (Na(a.a, function(c, d) {
            return pf(d, c) ? 1 : pf(c, d) ? -1 : 0
        }), a.b = !1);
        return Fa(a.a, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };

    function uf(a) {
        var b = a.b;
        a = a.a;
        return "" === a ? b : "boolean" == typeof a ? a ? b : "" : ra(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Ka(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };

    function vf(a) {
        var b = void 0 === b ? !0 : b;
        this.a = new qf;
        void 0 !== a && rf(this.a, a);
        b && this.a.add("v", Vb, -16)
    }
    vf.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = tf(this.a);
        0 < b.length && (a += "?" + b);
        return a
    };

    function wf(a) {
        var b = [],
            c = [];
        Ra(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d) switch (ra(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
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

    function xf() {
        if (/r\d{8}/.test("<<<CAFE_VERSION_ID:j>>>")) return "<<<CAFE_VERSION_ID:j>>>";
        if (Vb && "unreleased" !== Vb) return Vb
    };

    function yf() {
        this.a = 0
    }
    v(yf);

    function zf(a) {
        this.m = a;
        this.l = !1
    }
    zf.prototype.i = function(a, b) {
        this.a = a;
        this.b = b
    };

    function Af() {
        zf.call(this, "capability")
    }
    t(Af, zf);
    Af.prototype.j = function() {
        return !0
    };
    Af.prototype.h = function() {
        var a = {};
        return a.b_name = this.a.U, a.v_name = this.b.U, a
    };

    function Bf() {
        zf.call(this, "diff")
    }
    t(Bf, zf);
    Bf.prototype.j = function() {
        return !(.02 >= Math.abs(this.b.o - this.a.o))
    };
    Bf.prototype.h = function() {
        var a = {};
        return a.b_name = this.a.U, a.v_name = this.b.U, a.b_vp_off = JSON.stringify(this.a.I), a.v_vp_off = JSON.stringify(this.b.I), a.b_vp_sz = JSON.stringify(this.a.cb), a.v_vp_sz = JSON.stringify(this.b.cb), a.b_exp = this.a.o, a.v_exp = this.b.o, a.efp_occ = this.a.Lb, a.sbv = this.a.aa, a
    };

    function Cf() {
        zf.call(this, "capt");
        this.f = [];
        this.c = []
    }
    t(Cf, zf);
    Cf.prototype.i = function(a, b) {
        zf.prototype.i.call(this, a, b);
        20 <= this.c.length || (this.f.push(a.o), this.c.push(b.o))
    };
    Cf.prototype.j = function() {
        return 20 === this.c.length
    };
    Cf.prototype.h = function() {
        var a = Df(this.f, this.c),
            b = Ef(this.f, this.c),
            c = {};
        return c.b_name = this.a.U, c.v_name = this.b.U, c.b_exp = this.f.join(","), c.v_exp = this.c.join(","), c.diff = a, c.diff_buckets = b, c
    };

    function Df(a, b) {
        return Ha(Pa(a, b), function(c) {
            return c[0] !== c[1]
        })
    }

    function Ef(a, b) {
        function c(d) {
            return .25 * Math.floor(d / .25)
        }
        return Df(Ea(a, c), Ea(b, c))
    };

    function W() {
        this.ba = this.ba;
        this.ua = this.ua
    }
    W.prototype.ba = !1;
    W.prototype.ja = function() {
        return this.ba
    };
    W.prototype.D = function() {
        this.ba || (this.ba = !0, this.N())
    };
    W.prototype.N = function() {
        if (this.ua)
            for (; this.ua.length;) this.ua.shift()()
    };

    function Ff(a, b, c, d, e) {
        e = void 0 === e ? [new Af, new Bf, new Cf] : e;
        W.call(this);
        this.a = a.ya(b, c, this.T());
        this.a.Ca();
        this.c = e;
        this.b = d
    }
    t(Ff, W);
    Ff.prototype.N = function() {
        this.a && (this.a.X(), this.a.D())
    };

    function Gf(a, b, c) {
        w(a.c, function(d) {
            var e = a.b;
            if (!d.l && (d.i(b, c), d.j())) {
                d.l = !0;
                var f = d.h(),
                    g = new qf;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.m);
                d = yf.g();
                g.add("i", d.a++);
                g.add("adk", e);
                sf(g, f);
                e = new vf(g);
                var h = void 0 === h ? 4E3 : h;
                e = e.toString();
                /&v=[^&]+/.test(e) || (e = (f = xf()) ? e + "&v=" + encodeURIComponent(f) : e);
                e = e.substring(0, h);
                Kd(e)
            }
        })
    }
    Ff.prototype.W = function() {};
    Ff.prototype.ia = function() {};
    Ff.prototype.T = function() {
        return !1
    };

    function Hf() {
        this.a = this.b = this.c = 0
    }

    function If(a, b, c, d) {
        b && (a.c += c, a.b += c, a.a = Math.max(a.a, a.b));
        if (void 0 === d ? !b : d) a.b = 0
    };
    var Jf = [1, .75, .5, .3, 0];

    function Kf(a) {
        this.a = a = void 0 === a ? Jf : a;
        this.b = Ea(this.a, function() {
            return new Hf
        })
    }

    function Lf(a) {
        return Mf(a, function(b) {
            return b.c
        }, !1)
    }

    function Nf(a) {
        return Mf(a, function(b) {
            return b.a
        }, !0)
    }

    function Of(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.a.length; f++) {
            var h = a.a[f],
                n = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            If(a.b[f], g && n, e, !g || h)
        }
    }

    function Mf(a, b, c) {
        a = Ea(a.b, function(d) {
            return b(d)
        });
        return c ? a : Pf(a)
    }

    function Pf(a) {
        return Ea(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };

    function Qf() {
        this.a = new Kf;
        this.c = new Hf;
        this.b = -1;
        this.f = new Kf([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }

    function Rf(a) {
        return 1E3 <= a.c.a
    };
    var Sf = new H(0, 0, 0, 0);

    function X(a, b, c) {
        W.call(this);
        this.ta = Cc(Sf);
        this.b = new Qf;
        this.qa = -2;
        this.fb = -1;
        this.Na = b;
        this.Ma = null;
        this.R = -1 != b;
        this.I = null;
        this.J = -1;
        this.ea = c;
        this.gb = this.Pa = pa;
        this.a = new qd;
        this.a.b = a;
        this.a.a = a;
        this.m = !1;
        this.j = {
            Ea: null,
            Da: null
        };
        this.fa = !0;
        this.K = null;
        this.La = !1;
        O.g().l++;
        this.f = new Sc;
        this.eb = this.xa = -1;
        this.Ja = 0;
        this.ca = -1;
        this.c = null;
        this.L = new H(0, 0, 0, 0);
        this.Mb = !1;
        a = this.h = new hd;
        L(a, "od", Rc);
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
        K(L(a, "osddt", J));
        (a = this.a.b) && a.getAttribute && pd(a, "googleAvInapp") && (T.g().f = !0);
        1 == this.ea ? id(this.h, "od", 1) : id(this.h, "od", 0)
    }
    t(X, W);
    k = X.prototype;
    k.N = function() {
        Tf(this);
        this.K && this.K.D();
        this.c && this.c.D();
        delete this.b;
        delete this.Pa;
        delete this.gb;
        delete this.a.b;
        delete this.a.a;
        delete this.j;
        delete this.K;
        delete this.c;
        delete this.h;
        W.prototype.N.call(this)
    };

    function Uf(a) {
        return a.c ? a.c.b : a.ta
    }
    k.Ba = function(a) {
        var b = O.g();
        na(a) && 0 != a.length && kd(b.a, a)
    };
    k.yb = function() {
        return !1
    };
    k.Z = function() {
        this.R = !0
    };
    k.Aa = function() {
        return this.R
    };
    k.Ya = function() {
        this.f.o = 0
    };
    k.Za = function() {
        this.b = new Qf
    };

    function Vf(a) {
        return a.c ? a.c.G() : (O.g(), "ns")
    }

    function Wf(a, b) {
        b = b.create(a.a.a, a.h, a.yb());
        if (b = null != b && b.Ca() ? b : null) a.c = b
    }

    function Xf(a, b, c) {
        if (a.c) {
            a.c.S();
            var d = a.c.h,
                e = d.i,
                f = e.a;
            if (null != d.a) {
                var g = d.f;
                a.I = new F(g.left - f.left, g.top - f.top);
                a.L = d.a
            }
            f = bf(d, a.aa());
            g = {};
            null !== e.volume && (g.volume = e.volume);
            var h = O.g().a;
            Ga(["imams", "gms"], function(n) {
                return 1 === M(h, n)
            }) || 1 === M(a.h, "osddt") ? (e = 0, a.Ma && (e = d.h - a.Ma.h), a.Ma = d, a.Ia(Uf(a), f, b, c, !1, g, e, d.b)) : a.Ia(Uf(a), f, b, c, !1, g, void 0, d.b)
        }
    }

    function Yf(a) {
        if (a.Aa() && a.K) {
            var b = 1 == M(a.h, "od"),
                c = T.g().a,
                d = a.K,
                e = Vf(a),
                f = new G(c.H(), c.F());
            c = a.aa();
            a = {
                U: e,
                I: a.I,
                cb: f,
                aa: c,
                o: a.f.o,
                Lb: b
            };
            if (b = d.a) {
                b.S();
                e = b.h;
                f = e.i.a;
                var g = null,
                    h = null;
                null != e.a && f && (g = e.f, g = new F(g.left - f.left, g.top - f.top), h = new G(f.right - f.left, f.bottom - f.top));
                c = {
                    U: b.G(),
                    I: g,
                    cb: h,
                    aa: c,
                    Lb: !1,
                    o: bf(e, c)
                }
            } else c = null;
            c && Gf(d, a, c)
        }
    }
    k.Ia = function(a, b, c, d, e, f, g, h) {
        void 0 === g ? -1 == this.Na ? f = 0 : (f = c - this.Na || 1, f = 1E4 < f ? 1 : f) : f = g;
        g = f;
        h = void 0 === h ? -1 : h;
        if (!this.m) {
            oa(b) || (this.I = new F(a.left - b.left, a.top - b.top));
            if (this.Aa()) {
                f = h;
                f = void 0 === f ? -1 : f;
                h = new Sc;
                h.f = d;
                h.b = Ie();
                oa(b) ? (h.o = Zf(this, b), h.c = f) : (h.o = Zf(this, a, b), h.c = 0 <= f ? f : h.o * U(a) / (E.screen.height * E.screen.width));
                h.a = this.ka();
                f = this.b;
                var n = this.f;
                e = e && this.f.o >= (this.ka() ? .3 : .5);
                f.b = Math.max(f.b, h.o);
                Of(f.f, h.c, n.c, h.f, g, e);
                Of(f.a, h.o, n.o, h.f, g, e);
                e = e || n.a != h.a ? n.isVisible() && h.isVisible() : n.isVisible();
                n = !h.isVisible() || h.f;
                If(f.c, e, g, n);
                this.Na = c;
                0 < h.o && (-1 === this.xa && (this.xa = c), this.eb = c); - 1 == this.fb && Rf(this.b) && (this.fb = c);
                if (-2 == this.qa) try {
                    a: {
                        var m = oa(b) ? null : b;
                        if (a && a != Sf && 0 != U(Uf(this))) {
                            var l = T.g();
                            if (!m) {
                                if (!l.a) {
                                    var r = -1;
                                    break a
                                }
                                m = new H(0, l.a.H(), l.a.F(), 0)
                            }
                            r = m.H && 0 < m.H() && m.F && 0 < m.F() ? Zf(this, a, m) : -1
                        } else r = -1
                    }
                    this.qa = r
                }
                catch (p) {
                    me(207, p)
                }
                this.f = h;
                d && (this.f.o = 0)
            }
            this.Pa(this)
        }
    };

    function Zf(a, b, c) {
        if (0 === a.J && 1 === M(a.h, "opac")) return 0;
        if (oa(b)) return b;
        b = Ve(b, c);
        var d = 1 == M(a.h, "od");
        if (0 >= U(Uf(a)) || Ze(b, c, a.a.a, d)) return 0;
        d = U(b) / U(Uf(a));
        c = We(b, c);
        return a.aa() ? Math.max(d, c) : d
    }
    k.ka = function() {
        return !1
    };
    k.aa = function() {
        return this.Mb || this.La
    };
    k.ab = function(a, b, c) {
        if (c) this.ta = c;
        else {
            a = b ? a : a.top;
            this.ta = Cc(Sf);
            try {
                this.a.a && (this.ta = Ue(this.a.a, a))
            } catch (d) {}
        }
    };

    function $f(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }

    function ag(a) {
        a.a.a && (a.j.Ea = S(a.a.a, "mouseover", function() {
            var b = R();
            a.ca = b
        }, 149), a.j.Da = S(a.a.a, "mouseout", function() {
            var b = R(); - 1 == a.ca || b < a.ca || (a.Ja += b - a.ca);
            a.ca = -1
        }, 150))
    }

    function Tf(a) {
        a.a.a && (a.j.Ea && (xc(a.a.a, "mouseover", a.j.Ea), a.j.Ea = null), a.j.Da && (xc(a.a.a, "mouseout", a.j.Da), a.j.Da = null))
    }

    function bg(a) {
        a.c && a.c.X()
    };

    function cg() {
        dg(this)
    }

    function dg(a) {
        !a.a && ta(E.Goog_AdSense_getAdAdapterInstance) && (a.a = Goog_AdSense_getAdAdapterInstance());
        !a.b && ta(E.Goog_Common_getAdAdapterInstance) && (a.b = Goog_Common_getAdAdapterInstance());
        !a.c && ac() && (a.c = !0)
    }

    function eg(a, b, c, d) {
        dg(a);
        var e = T.g().m;
        a.a && a.a.getNewBlocks(b, e);
        a.b && a.b.getNewBlocks(b, e);
        a.c && !c() && (d(!0), b(ac(), "", 13, !0))
    }

    function fg(a) {
        dg(a);
        return (a.a ? a.a.numBlocks() : 0) + (a.b ? a.b.numBlocks() : 0) + (a.c ? 1 : 0)
    }

    function gg(a) {
        dg(a);
        return a.a ? a.a.getOseId() : a.b ? a.b.getOseId() : 0
    };

    function hg(a) {
        return hb() ? (a = (a = $b(a)) && fc(a), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    };
    var ig = "StopIteration" in u ? u.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function jg() {}
    jg.prototype.next = function() {
        throw ig;
    };
    jg.prototype.hb = function() {
        return this
    };

    function kg(a) {
        if (a instanceof jg) return a;
        if ("function" == typeof a.hb) return a.hb(!1);
        if (sa(a)) {
            var b = 0,
                c = new jg;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw ig;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function lg(a, b) {
        if (sa(a)) try {
            w(a, b, void 0)
        } catch (c) {
            if (c !== ig) throw c;
        } else {
            a = kg(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== ig) throw c;
            }
        }
    }

    function mg(a, b) {
        var c = 1;
        lg(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }

    function ng(a, b) {
        var c = kg(a);
        a = new jg;
        a.next = function() {
            var d = c.next();
            if (b.call(void 0, d, void 0, c)) return d;
            throw ig;
        };
        return a
    }

    function og(a) {
        var b = kg(a);
        a = new jg;
        var c = 100;
        a.next = function() {
            if (0 < c--) return b.next();
            throw ig;
        };
        return a
    };

    function pg(a, b) {
        this.c = b;
        this.b = null == a;
        this.a = a
    }
    t(pg, jg);
    pg.prototype.next = function() {
        if (this.b) throw ig;
        var a = this.a || null;
        this.b = null == a;
        var b;
        if (b = a) {
            b = this.c;
            if (ob(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? hg : d;
                if (d(a)) try {
                    var e = $b(a),
                        f = e && fc(e),
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

    function qg(a) {
        var b = 1;
        a = og(new pg(a, !0));
        a = ng(a, function() {
            return 0 < b
        });
        return mg(a, function(c, d) {
            var e = 1;
            if (ob(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = $b(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[kb()];
                    if ("undefined" !== typeof g) d = g;
                    else {
                        g = d.style;
                        var h = Ec.opacity;
                        if (!h) {
                            var n = kb();
                            h = n;
                            void 0 === d.style[n] && (n = (ub ? "Webkit" : tb ? "Moz" : C ? "ms" : rb ? "O" : null) + mb(n), void 0 !== d.style[n] && (h = n));
                            Ec.opacity = h
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

    function rg(a, b, c, d, e, f, g) {
        f = void 0 === f ? pa : f;
        g = void 0 === g ? [] : g;
        X.call(this, c, d, e);
        this.w = b;
        this.ma = this.l = 0;
        this.Fb = null;
        this.Eb = this.wb = "";
        this.xb = [];
        this.Cb = [];
        this.nb = this.Db = "";
        this.Kb = !1;
        this.s = 4;
        this.Ob = !1;
        this.da = [];
        this.M = "";
        this.Nb = this.pb = this.Jb = !1;
        this.Qb = -1;
        this.vb = "";
        this.rb = -1;
        this.B = 0;
        this.wa = -1;
        this.oa = 0;
        this.ga = this.Gb = Ie();
        this.i = 0;
        this.Rb = f;
        this.Pb = !1;
        this.ra = this.Qa = this.Ra = this.va = this.u = -1;
        this.A = {};
        this.sa = g;
        sg(this, this.a.b);
        this.w && na(this.w) && (b = this.w.match(/fa=([^&;]+)/)) && 2 == b.length && b[1] == (30).toString() && (this.La = !0);
        md(O.g().a, this.w);
        b = T.g();
        this.ab(a, b.b)
    }
    t(rg, X);

    function tg(a, b, c) {
        return (a = String(a[b] || od(a, c) || "")) ? a.split("|") : []
    }

    function sg(a, b) {
        if (b) {
            if (0 == a.l)
                if (a.a.b) {
                    var c = a.a.b._adk_;
                    c || (c = (c = od(a.a.b, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else c = 0;
            else c = a.l;
            a.l = c;
            "" == a.wb && (a.wb = String(b._avi_ || ""));
            "" == a.Eb && (a.Eb = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            a.xb.length || (a.xb = tg(b, "_avicxn_", "googleAvCxn"));
            a.Cb.length || (a.Cb = tg(b, "_avieoscxn_", "googleEOSAvCxn"));
            "" == a.Db && (a.Db = String(b._aviextcxn_ || od(b, "googleAvExtCxn") || ""));
            "" == a.nb && (a.nb = String(b._cid_ || ""));
            a.Kb || (a.Kb = !!b._imm_ || pd(b, "googleAvImmediate"));
            "" == a.M && (a.M = String(b._cvu_ || od(b, "googleAvCpmav") || ""));
            a.Ba(String(b._avm_ || od(b, "googleAvMetadata") || ""))
        }
    }
    k = rg.prototype;
    k.N = function() {
        ug(this);
        delete this.da;
        delete this.sa;
        delete this.Ka;
        delete this.na;
        X.prototype.N.call(this)
    };

    function vg(a, b, c) {
        w(a.sa, function(d) {
            return d.a(a, c, b)
        })
    }
    k.Aa = function() {
        return this.R && !(1 == this.i || 3 == this.i)
    };

    function ug(a) {
        a.Ka && xc(a.a.b, "DOMNodeRemoved", a.Ka);
        a.na && a.na.disconnect()
    }

    function wg(a) {
        a.a.b && (ug(a), a.wa = -1, u.MutationObserver ? (a.na = new u.MutationObserver(function(b, c) {
            for (var d = 0; d < b.length; d++)
                if ("childList" == b[d].type && b[d].removedNodes.length) {
                    a.wa = R();
                    c.disconnect();
                    break
                }
        }), a.na.observe(a.a.b, {
            childList: !0,
            subtree: !0
        })) : a.Ka = ye(a.a.b, function() {
            a.wa = R()
        }))
    }
    k.Ya = function() {
        X.prototype.Ya.call(this);
        this.L = new H(0, 0, 0, 0)
    };
    k.Za = function() {
        X.prototype.Za.call(this);
        this.L = new H(0, 0, 0, 0)
    };
    k.Z = function() {
        this.R || (this.Ra = Vd(), this.Qb = R(), xg(this, !1, this.qa));
        X.prototype.Z.call(this);
        yg(this)
    };

    function yg(a) {
        if (a.R && u == u.top) {
            var b = u.pageYOffset;
            null != b && (a.ra = Math.max(b, a.ra));
            vg(a, 4, {})
        }
    }

    function zg(a) {
        return new rd(a.l, a.Fb)
    }
    k.Ba = function(a) {
        if (na(a) && 0 != a.length) {
            var b = new hd,
                c = O.g();
            L(b, "omid", J);
            kd(b, a);
            b = M(b, "omid");
            null !== b && (c.a.b.omid = b);
            a = kd(this.h, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.fa = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1], "0" == d ? this.oa = 2 : "1" == d && (this.oa = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.Mb = !0) : 0 == d.lastIndexOf("alp=", 0) ? this.vb = d.split("=")[1] : 0 == d.lastIndexOf("alh=", 0) ? (d = parseInt(d.split("=")[1], 10), isNaN(d) || (this.rb = d)) : "adf=1" == d && (this.Pb = !0)
            }
            this.f.a = this.ka();
            X.prototype.Ba.call(this, a)
        }
    };
    k.Ia = function(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f;
        var g = Rf(this.b),
            h = Math.floor(100 * this.f.o);
        this.oa = 242500 <= (a.right - a.left) * (a.bottom - a.top) ? 1 : 2;
        X.prototype.Ia.call(this, a, b, c, d, e, f); - 1 == this.ga && -1 != this.f.b ? this.ga = this.f.b : 0 == this.ga && 1 == this.f.b && (this.ga = 1);
        oa(b) || (0 < this.f.o ? (b = Ve(a, b), this.L = 0 >= U(Uf(this)) || b.top >= b.bottom || b.left >= b.right ? new H(0, 0, 0, 0) : Dc(b, -a.left, -a.top)) : this.L = new H(0, 0, 0, 0));
        a = Rf(this.b);
        b = Math.floor(100 * this.f.o);
        (!g && a || b != h) && xg(this, a, b);
        try {
            this.J = qg(this.a.a)
        } catch (n) {}
        yg(this)
    };
    k.ka = function() {
        return vb ? !1 : 1 == this.oa
    };

    function Ag(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {},
            f = Bg(a);
        d && x(f, d);
        f.adk = a.l;
        a.Pb && a.ma && (f.adf = a.ma);
        d = a.m;
        var g = O.g();
        !c && d && g.b && (c = g.b);
        c && (f.r = c);
        0 === a.J && (f.invis = 1);
        c = wf(f).join("&");
        e[3] = c;
        e[11] = d;
        e[29] = O.g().c;
        e[0] = b;
        e[7] = a.f.o;
        e[9] = Je(a.L);
        e[28] = a.ea;
        e[32] = Vf(a);
        e[5] = Rf(a.b) && 4 != a.s;
        e[13] = Nf(a.b.a).join(",");
        e[18] = 0 == U(Uf(a));
        null != a.I && (e[20] = a.I.y, e[21] = a.I.x);
        b = T.g();
        null != b.c && (e[22] = b.c.H(), e[23] = b.c.F());
        null != b.a && (e[30] = b.a.H(), e[31] = b.a.F(), e[38] = Je(b.a));
        c = b.l;
        f = Uf(a);
        e[37] = Je(new H(f.top + c.y, f.right + c.x, f.bottom + c.y, f.left + c.x));
        b.h && (b = b.h, e[39] = b.width + "-" + b.height); - 1 != a.J && (e[25] = a.J);
        if (a = zg(a)) a.b && (e[4] = a.b), a.a && (e[12] = a.a);
        return e
    }
    k.ab = function(a, b, c) {
        if (!b && (-1 != this.Qb || -1 != this.wa) && 2 != this.B && 1 != this.B && -1 != this.B && 7 != this.B) {
            var d = null;
            try {
                d = this.a.a && this.a.a.getBoundingClientRect()
            } catch (e) {}
            d && 0 != d.width && 0 != d.height || (d = Ge(a.top, this.vb, this.rb), this.B = d.status, d.a && (d.a == this.a.a ? this.B = 2 : Cg(this, d.a)))
        }
        X.prototype.ab.call(this, a, b, c)
    };

    function Bg(a) {
        var b = T.g(),
            c = jd(a.h),
            d = b.l,
            e = Uf(a);
        c.p = [e.top + d.y, e.left + d.x, e.bottom + d.y, e.right + d.x];
        d = a.b;
        c.tos = Lf(d.a);
        c.mtos = Nf(d.a);
        c.mcvt = d.c.a;
        c.rs = a.ea;
        (e = 5 == a.ea) || (c.ht = a.Ja);
        0 <= a.xa && (c.tfs = a.xa, c.tls = a.eb);
        c.mc = $f(d.b);
        c.lte = $f(a.qa);
        c.bas = a.Gb;
        c.bac = a.ga;
        b.b && (c["if"] = a.m ? 0 : 1);
        c.met = a.a.c;
        e && a.w && (c.req = encodeURIComponent(a.w).substring(0, 100));
        a.Nb && (c.ci = "1");
        a.ka() && (c.la = "1");
        a.La && (c.pa = "1");
        c.avms = Vf(a);
        a.c && x(c, a.c.O());
        0 != a.i && (c.md = a.i);
        c.lm = a.s;
        x(c, Dg(a));
        return c
    }

    function Dg(a) {
        var b = a.u;
        var c = a.u;
        c = -1 == c || a.va < c ? -1 : a.va - c;
        var d = -1 == a.u || a.Ra < a.u ? -1 : a.Ra - a.u,
            e = Eg(a),
            f = {};
        return f.rst = 0 < b ? b : void 0, f.dlt = 0 <= c ? c : void 0, f.rpt = 0 <= d ? d : void 0, f.isd = 0 <= a.Qa ? a.Qa : void 0, f.msd = 0 <= a.ra ? a.ra : void 0, f.ext = e ? e : void 0, f
    }

    function Cg(a, b) {
        ug(a);
        Tf(a);
        a.a.a = b;
        ag(a);
        sg(a, b);
        wg(a);
        a.c && (a = a.c, a.X(), a.c = b, a.Ca(), a.S())
    }

    function Eg(a) {
        return a.A && 0 < rc(a.A).length ? encodeURIComponent(Ea(rc(a.A), function(b) {
            return b + "=" + a.A[b]
        }).join("&")) : null
    }

    function Fg(a, b) {
        b && qc(b, function(c, d) {
            null == c ? delete a.A[d] : a.A[d] = c
        })
    }

    function xg(a, b, c) {
        if (b = a.Rb(b, c)) Fg(a, b), vg(a, 3, {})
    }
    k.yb = function() {
        return !1
    };

    function Gg() {}

    function Hg(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (ra(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), Hg(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Ig(d, c), c.push(":"), Hg(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Ig(b, c);
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
    var Jg = {
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
        Kg = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function Ig(a, b) {
        b.push('"', a.replace(Kg, function(c) {
            var d = Jg[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Jg[c] = d);
            return d
        }), '"')
    };

    function Lg() {
        this.key = "goog_adspeed";
        this.c = [3, 4];
        this.b = null
    }
    Lg.prototype.a = function(a, b, c) {
        if (!Ka(this.c, c) || !sd(zg(a))) return !1;
        c = {};
        c[0] = this.key;
        var d = Dg(a),
            e = [];
        Hg(new Gg, d, e);
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
        x(f, c, b);
        return Mg(a, {
            bb: {},
            Va: f
        })
    };

    function Ng() {
        this.key = "goog_update_data";
        this.b = 0;
        this.c = !1
    }
    Ng.prototype.a = function(a, b, c) {
        if (c != this.b || !sd(zg(a))) return !1;
        c = 1 == a.s;
        var d = Rf(a.b),
            e = {},
            f = {};
        b = {
            Va: (e[0] = this.key, e),
            bb: Object.assign({}, b, (f.r = b.r, f))
        };
        if (c) return d && !this.c ? (this.c = d, Mg(a, b)) : !1;
        this.c = d;
        return Mg(a, b)
    };

    function Og(a) {
        Ng.call(this, a);
        this.key = "goog_image_request";
        this.b = 2
    }
    t(Og, Ng);

    function Pg(a) {
        Ng.call(this, a);
        this.key = "goog_image_request";
        this.b = 1
    }
    t(Pg, Ng);
    Pg.prototype.a = function(a, b, c) {
        var d = !a.pb;
        if (Rf(a.b) && a.fa || d) {
            if (b = Ng.prototype.a.call(this, a, b, c))
                if (Rf(a.b) || (a.pb = !0), Rf(a.b) || a.fa) a.fa = !1;
            return b
        }
        return !1
    };

    function Qg() {
        this.b = [];
        this.a = []
    }

    function Rg(a) {
        return Ia(Sg.a, function(b) {
            b = zg(b);
            return a.a || b.a ? a.a == b.a : a.b || b.b ? a.b == b.b : !1
        })
    }

    function Tg(a) {
        var b = Sg;
        return a ? Ia(b.a, function(c) {
            return c.a.b == a
        }) : null
    }

    function Ug(a) {
        return Ia(a.a, function() {
            return !1
        })
    }

    function Vg() {
        var a = Sg;
        return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : La(a.a, a.b)
    }
    Qg.prototype.reset = function() {
        this.b = [];
        this.a = []
    };

    function Wg(a, b) {
        a = a.a;
        var c = Ja(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1), bg(b), b.D(), !0) : !1
    }

    function Yg(a) {
        var b = Sg;
        if (Wg(b, a)) {
            a = function() {
                return null
            };
            a = function() {
                return Ug(b)
            };
            for (var c = a(); c; c = a()) Wg(b, c)
        }
    }
    v(Qg);
    var Sg = Qg.g();

    function Zg() {
        this.a = this.b = null
    }

    function $g(a, b) {
        function c(d, e) {
            a.a = null;
            b(d, e)
        }
        if (null == a.b) return !1;
        a.a = Ia(a.b, function(d) {
            return null != d && d.$() && d.zb(c)
        });
        a.a && hf(a.a.a);
        return null != a.a
    }
    v(Zg);

    function ah(a, b, c, d) {
        lf.call(this, a, b, c, d)
    }
    t(ah, lf);
    ah.prototype.tb = function(a) {
        return Ze(a, this.l, this.c, 1 == M(this.B, "od"))
    };
    ah.prototype.S = function() {
        var a = this.a.f;
        this.timestamp = -1 === a.time ? R() : a.time;
        this.Oa();
        this.kb();
        a = Ve(this.b, this.l);
        var b = a.top >= a.bottom || a.left >= a.right ? new H(0, 0, 0, 0) : a;
        a = this.a.f;
        var c = 0,
            d = 0,
            e = 0;
        0 < (this.b.bottom - this.b.top) * (this.b.right - this.b.left) && (this.tb(b) ? b = new H(0, 0, 0, 0) : (c = T.g().j, e = new H(0, c.height, c.width, 0), c = We(b, this.b), d = We(b, T.g().a), e = We(b, e)));
        b = b.top >= b.bottom || b.left >= b.right ? new H(0, 0, 0, 0) : Dc(b, -this.b.left, -this.b.top);
        this.h = new af(a, this.b, b, c, d, this.timestamp, e)
    };
    ah.prototype.G = function() {
        return this.a.G()
    };

    function bh(a) {
        a = ch(a);
        mf.call(this, a.length ? a[a.length - 1] : new V(E, 0));
        this.c = a;
        this.f = pa;
        this.b = null
    }
    t(bh, mf);
    k = bh.prototype;
    k.G = function() {
        return (this.b ? this.b : this.a).G()
    };
    k.O = function() {
        return (this.b ? this.b : this.a).O()
    };
    k.P = function() {
        return (this.b ? this.b : this.a).P()
    };
    k.zb = function(a) {
        this.f = a;
        w(this.c, function(b) {
            return b.sb()
        });
        gf(this.a, this);
        return !0
    };
    k.D = function() {
        w(this.c, function(a) {
            a.D()
        });
        mf.prototype.D.call(this)
    };
    k.$ = function() {
        return Ga(this.c, function(a) {
            return a.$()
        })
    };
    k.C = function() {
        return Ga(this.c, function(a) {
            return a.C()
        })
    };
    k.ya = function(a, b, c) {
        return new ah(a, this.a, b, c)
    };
    k.ia = function(a) {
        0 == a.P() && this.f(a.ha(), this)
    };
    k.W = function(a) {
        this.b = a.b
    };
    k.T = function() {
        return !1
    };

    function ch(a) {
        if (!a.length) return [];
        a = Da(a, function(c) {
            return null != c && c.$()
        });
        for (var b = 1; b < a.length; b++) gf(a[b - 1], a[b]);
        return a
    };

    function dh(a, b, c, d) {
        lf.call(this, a, b, c, d);
        this.s = this.m = null
    }
    t(dh, ah);
    k = dh.prototype;
    k.Ca = function() {
        var a = this;
        this.s || (this.s = R());
        if (le(298, function() {
                return a.u()
            })) return !0;
        ef(this.a, "msf");
        return !1
    };

    function eh(a, b) {
        try {
            if (b.length) {
                a.m || (a.m = R());
                var c = fh(b),
                    d = Gc(a.c, a.a.a.b),
                    e = d.x,
                    f = d.y;
                a.b = new H(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                var g = He(c.intersectionRect);
                a.l = Dc(g, a.b.left - g.left, a.b.top - g.top)
            }
        } catch (h) {
            a.X(), me(299, h)
        }
    }

    function fh(a) {
        return Fa(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    k.Oa = function() {};
    k.tb = function() {
        return !1
    };
    k.kb = function() {};
    k.O = function() {
        var a = {};
        return Object.assign(this.a.O(), (a.niot_obs = this.s, a.niot_cbk = this.m, a))
    };
    var gh = {
        threshold: [0, .3, .5, .75, 1]
    };

    function hh(a, b, c, d) {
        dh.call(this, a, b, c, d);
        this.i = this.j = this.f = null
    }
    t(hh, dh);
    hh.prototype.G = function() {
        return "nio"
    };
    hh.prototype.X = function() {
        if (this.f && this.c) try {
            this.f.unobserve(this.c), this.j ? (this.j.unobserve(this.c), this.j = null) : this.i && (this.i.disconnect(), this.i = null)
        } catch (a) {}
    };

    function ih(a) {
        return a.f && a.f.takeRecords ? a.f.takeRecords() : []
    }
    hh.prototype.u = function() {
        var a = this;
        if (!this.c) return !1;
        var b = this.c,
            c = this.a.a.b,
            d = Qd().a;
        this.f = new c.IntersectionObserver(Od(d, function(e) {
            return eh(a, e)
        }), gh);
        d = Od(d, function() {
            a.f.unobserve(b);
            a.f.observe(b);
            eh(a, ih(a))
        });
        c.ResizeObserver ? (this.j = new c.ResizeObserver(d), this.j.observe(b)) : c.MutationObserver && (this.i = new u.MutationObserver(d), this.i.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        this.f.observe(b);
        eh(this, ih(this));
        return !0
    };
    hh.prototype.S = function() {
        var a = ih(this);
        0 < a.length && eh(this, a);
        dh.prototype.S.call(this)
    };

    function jh(a) {
        a = void 0 === a ? E : a;
        mf.call(this, new V(a, 2))
    }
    t(jh, mf);
    jh.prototype.G = function() {
        return "nio"
    };
    jh.prototype.C = function() {
        return "exc" !== (O.g(), "ns") && !T.g().f && null != this.a.a.b.IntersectionObserver
    };
    jh.prototype.ya = function(a, b, c) {
        return new hh(a, this.a, b, c)
    };

    function kh() {
        var a = lh();
        V.call(this, E.top, a, "geo")
    }
    t(kh, V);
    kh.prototype.Sa = function() {
        return T.g().a
    };
    kh.prototype.C = function() {
        var a = lh();
        this.i !== a && (this.a != this && a > this.a.i && (this.a = this, ff(this)), this.i = a);
        return 2 == a
    };

    function lh() {
        O.g();
        var a = T.g();
        return a.b || a.f ? 0 : 2
    }
    v(kh);
    var mh = {},
        nh = (mh[1] = function() {
            return new jh
        }, mh[2] = function() {
            return new bh([kh.g()])
        }, mh);

    function oh() {
        this.a = null;
        this.b = nh
    }

    function ph() {
        var a = oh.g();
        a: {
            var b = M(O.g().a, "mv");
            if (null != b && (b = a.b[b]) && (b = b()) && b.C()) break a;b = null
        }
        a.a = b
    }
    v(oh);

    function qh(a, b, c) {
        W.call(this);
        this.f = null != c ? xa(a, c) : a;
        this.c = b;
        this.b = xa(this.Zb, this);
        this.a = []
    }
    Aa(qh, W);
    k = qh.prototype;
    k.Ga = !1;
    k.V = null;
    k.mb = function(a) {
        this.a = arguments;
        this.V ? this.Ga = !0 : rh(this)
    };
    k.stop = function() {
        this.V && (u.clearTimeout(this.V), this.V = null, this.Ga = !1, this.a = [])
    };
    k.N = function() {
        qh.Ib.N.call(this);
        this.stop()
    };
    k.Zb = function() {
        this.V = null;
        this.Ga && (this.Ga = !1, rh(this))
    };

    function rh(a) {
        var b = a.b;
        var c = a.c;
        if (!ta(b))
            if (b && "function" == typeof b.handleEvent) b = xa(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        b = 2147483647 < Number(c) ? -1 : u.setTimeout(b, c || 0);
        a.V = b;
        a.f.apply(null, a.a)
    };

    function sh() {
        this.done = !1;
        this.a = {
            jb: 0,
            ib: 0,
            $a: 0,
            lb: 0,
            za: -1,
            Ub: 0,
            Tb: 0,
            Vb: 0
        };
        this.w = this.f = this.m = this.h = this.s = null;
        this.j = this.B = !1;
        this.u = "";
        this.b = null;
        this.A = 0;
        this.c = new cf(this)
    }

    function th() {
        var a = (O.g(), "ns");
        return "nio" === a || "aio" === a || "omid" === a
    }

    function uh(a, b) {
        var c = Y;
        if (!c.B) {
            c.B = !0;
            if (!c.s && !th()) {
                var d = Q(137, function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                    return c.l.apply(c, q(f))
                });
                c.h = new qh(d, 100);
                c.s = S(a, "scroll", function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                    null !== c.h && c.h.mb.apply(c.h, q(f))
                }, 138)
            }
            c.m || th() || (d = Q(140, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return c.l.apply(c, q(f))
            }), c.f = new qh(d, 100), c.m = S(a, "resize", function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                null !== c.f && c.f.mb.apply(c.f, q(f))
            }, 141));
            if (b)
                for (a = Vg(), d = 0; d < a.length; ++d) b = a[d], b.a.a && ag(b);
            vh(c, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return c.i.apply(c, q(f))
            });
            c.i()
        }
    }
    sh.prototype.l = function() {
        wh(this, Vg(), !1)
    };
    sh.prototype.Hb = function() {
        wh(this, Vg(), !1)
    };

    function xh() {
        var a = oh.g();
        null != a.a && a.a.a && hf(a.a.a);
        a = Zg.g();
        null != a.a && a.a.a ? hf(a.a.a) : Pe(T.g())
    }

    function wh(a, b, c) {
        if (!a.done)
            if (a.c.cancel(), 0 == b.length) a.j = !1;
            else {
                a.b = null;
                try {
                    xh();
                    var d = R();
                    O.g().h = d;
                    if (null != Zg.g().a)
                        for (var e = 0; e < b.length; e++) Xf(b[e], d, c);
                    for (e = 0; e < b.length; e++) Yf(b[e]);
                    a.a.$a += R() - d;
                    ++a.a.lb;
                    yh(a)
                } finally {
                    c ? w(b, function(f) {
                        return f.Ya()
                    }) : df(a.c)
                }
            }
    }

    function vh(a, b) {
        if (!a.w) {
            b = he(142, b);
            N();
            var c;
            D.visibilityState ? c = "visibilitychange" : D.mozVisibilityState ? c = "mozvisibilitychange" : D.webkitVisibilityState && (c = "webkitvisibilitychange");
            c && wc(D, c, b, {
                capture: !1
            }) && (a.w = b)
        }
    }
    sh.prototype.i = function() {
        var a = Se(),
            b = R();
        a ? (qe || (oe = b, w(Sg.b, function(c) {
            return c.b.i(b, !c.i())
        })), qe = !0) : (this.A = zh(this, b), qe = !1, w(Sg.b, function(c) {
            c.Aa() && c.b.h(b)
        }));
        this.j = !0;
        wh(this, Vg(), !a)
    };

    function Ah(a) {
        return !!(Date && a && a.screen && a.document && a.document.body && a.document.body.getBoundingClientRect)
    }

    function Bh(a, b, c) {
        if (!a.b || c) {
            c = b.document;
            var d = 0 <= pe ? R() - pe : -1,
                e = R(); - 1 == a.a.za && (d = e);
            var f = T.g(),
                g = O.g(),
                h = jd(g.a),
                n = Vg();
            try {
                if (0 < n.length) {
                    var m = f.a;
                    m && (h.bs = [m.H(), m.F()]);
                    var l = f.h;
                    l && (h.ps = [l.width, l.height]);
                    b.screen && (h.ss = [b.screen.width, b.screen.height])
                } else h.url = encodeURIComponent(b.location.href.substring(0, 512)), c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                h.tt = d;
                h.pt = pe;
                h.bin = g.c;
                switch (O.g(), "ns") {
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
                h.deb = [1, a.a.jb, a.a.ib, a.a.$a, a.a.lb, a.a.za, Be, a.c.b, a.a.Ub, a.a.Tb, a.a.Vb].join("-");
                h.tvt = zh(a, e);
                f.f && (h.inapp = 1);
                if (null !== b && b != b.top) {
                    0 < n.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var r = f.c;
                    h.is = [r.H(), r.F()]
                }
            } catch (Xg) {
                h.error = 1
            }
            a.b = h
        }
        b = a.b;
        a = {};
        for (var p in b) a[p] = b[p];
        p = Qd();
        var B;
        if (1 == M(p.c, "prf")) {
            b = new Md;
            m = p.a;
            l = 0; - 1 < m.a && (l = m.f.a.a() - m.a);
            b = Tb(b, 1, m.c + l);
            m = p.a;
            b = Tb(b, 5, -1 < m.a ? m.b + 1 : m.b);
            b = Tb(b, 2, p.b.a.f());
            b = Tb(b, 3, p.b.a.c());
            b = Tb(b, 4, p.b.a.b());
            p = {};
            m = new Mb;
            l = Rb(b, 1);
            l = null == l ? l : +l;
            l = null == l ? 0 : l;
            if (0 !== l && (r = l, null != r)) {
                Kb(m.a, 9);
                l = m.a;
                d = r;
                d = (r = 0 > d ? 1 : 0) ? -d : d;
                if (0 === d) Hb = 0 < 1 / d ? 0 : 2147483648, Gb = 0;
                else if (isNaN(d)) Hb = 2147483647, Gb = 4294967295;
                else if (1.7976931348623157E308 < d) Hb = (r << 31 | 2146435072) >>> 0, Gb = 0;
                else if (2.2250738585072014E-308 > d) d /= Math.pow(2, -1074), Hb = (r << 31 | d / 4294967296) >>> 0, Gb = d >>> 0;
                else {
                    e = d;
                    c = 0;
                    if (2 <= e)
                        for (; 2 <= e && 1023 > c;) c++, e /= 2;
                    else
                        for (; 1 > e && -1022 < c;) e *= 2, c--;
                    d *= Math.pow(2, -c);
                    Hb = (r << 31 | c + 1023 << 20 | 1048576 * d & 1048575) >>> 0;
                    Gb = 4503599627370496 * d >>> 0
                }
                Lb(l, Gb);
                Lb(l, Hb)
            }
            l = Sb(b, 2);
            0 !== l && null != l && Nb(m, 2, l);
            l = Sb(b, 3);
            0 !== l && null != l && Nb(m, 3, l);
            l = Sb(b, 4);
            0 !== l && null != l && Nb(m, 4, l);
            l = Sb(b, 5);
            if (0 !== l && null != l && null != l)
                if (Kb(m.a, 40), b = m.a, 0 <= l) Kb(b, l);
                else {
                    for (r = 0; 9 > r; r++) b.a.push(l & 127 | 128), l >>= 7;
                    b.a.push(1)
                }
            b = new Uint8Array(m.c + m.a.length());
            r = m.b;
            c = r.length;
            for (d = l = 0; d < c; d++) e = r[d], b.set(e, l), l += e.length;
            r = Jb(m.a);
            b.set(r, l);
            m.b = [b];
            void 0 === B && (B = 0);
            if (!Fb)
                for (Fb = {}, m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], r = 0; 5 > r; r++)
                    for (c = m.concat(l[r].split("")), Eb[r] = c, d = 0; d < c.length; d++) e = c[d], void 0 === Fb[e] && (Fb[e] = d);
            B = Eb[B];
            m = [];
            for (l = 0; l < b.length; l += 3) f = b[l], g = (r = l + 1 < b.length) ? b[l + 1] : 0, e = (c = l + 2 < b.length) ? b[l + 2] : 0, d = f >> 2, f = (f & 3) << 4 | g >> 4, g = (g & 15) << 2 | e >> 6, e &= 63, c || (e = 64, r || (g = 64)), m.push(B[d], B[f], B[g] || "", B[e] || "");
            B = (p.pf = m.join(""), p)
        } else B = {};
        x(a, B);
        return a
    }

    function Ch() {
        w(Vg(), function(a) {
            if (a.a.b) {
                var b = a.l || 0,
                    c = oh.g();
                if (b = c.a ? new Ff(c.a, a.a.a, a.h, b) : null) a.K = b
            }
        })
    }

    function Dh() {
        var a = Zg.g();
        if (null != a.a) {
            var b = a.a;
            w(Vg(), function(c) {
                return Wf(c, b)
            })
        }
    }

    function yh(a) {
        "osd" == a.u && w(Sg.a, function(b) {
            var c = {};
            vg(b, 0, (c.r = void 0, c))
        })
    }

    function zh(a, b) {
        a = a.A;
        qe && (a += b - oe);
        return a
    }

    function Eh(a) {
        return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function Fh(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function Gh() {
        var a = Y;
        var b = void 0 === b ? function() {
            return {}
        } : b;
        ie.h = "av-js";
        de.a = .01;
        ke([function(c) {
            var d = O.g(),
                e = {};
            x(c, (e.bin = d.c, e.type = "error", e), jd(d.a), Bh(a, E), b());
            if (d = xf()) e = {}, x(c, (e.v = encodeURIComponent(d), e))
        }])
    }

    function Hh(a) {
        var b = new Ih;
        switch (a) {
            case 0:
            case 5:
                return [];
            default:
                return a = 4 === O.g().c, [new Ng(b), new Pg(b), new Og(b)].concat(q(a ? [] : [new Lg]))
        }
    }
    v(sh);
    var Y = sh.g();

    function Ih() {}

    function Mg(a, b) {
        var c = b || {};
        b = void 0 === c.bb ? {} : c.bb;
        c = void 0 === c.Va ? {} : c.Va;
        var d = c.r,
            e = b[0],
            f = Bh(Y, I(), !1),
            g = {};
        x(g, f, b);
        b = {};
        x(b, Ag(a, e, d, g), c);
        Le(a.a.b, b, a.da);
        return !0
    };

    function Jh(a, b, c, d) {
        dh.call(this, a, b, c, d);
        this.f = function() {
            return null
        }
    }
    t(Jh, dh);
    Jh.prototype.G = function() {
        return "aio"
    };
    Jh.prototype.X = function() {
        if (this.f) try {
            this.f()
        } catch (a) {}
    };
    Jh.prototype.u = function() {
        var a = this;
        if (!this.c) return !1;
        this.f = Kc(this.a.a.b).observeIntersection(Od(Qd().a, function(b) {
            return eh(a, b)
        }));
        return !0
    };

    function Kh(a) {
        a = void 0 === a ? E : a;
        mf.call(this, new V(a, 2))
    }
    t(Kh, mf);
    Kh.prototype.G = function() {
        return "aio"
    };
    Kh.prototype.$ = function() {
        return T.g().b && this.C()
    };
    Kh.prototype.C = function() {
        return !T.g().f && te(this.a.a.b)
    };
    Kh.prototype.ya = function(a, b, c) {
        return new Jh(a, this.a, b, c)
    };

    function Lh() {
        V.call(this, E, 2, "iem")
    }
    t(Lh, V);
    k = Lh.prototype;
    k.Sa = function() {
        function a(p, B) {
            return !!b.b.document.elementFromPoint(p, B)
        }
        var b = this,
            c = new H(0, this.b.innerWidth || this.b.width, this.b.innerHeight || this.b.height, 0),
            d = ec(document),
            e = Math.floor(c.left - d.x),
            f = Math.floor(c.top - d.y),
            g = Math.floor(c.right - d.x),
            h = Math.floor(c.bottom - d.y);
        c = a(e, f);
        d = a(g, h);
        if (c && d) return new H(f, g, h, e);
        var n = a(g, f),
            m = a(e, h);
        if (c) h = Z(f, h, function(p) {
            return a(e, p)
        }), g = Z(e, g, function(p) {
            return a(p, f)
        });
        else if (n) h = Z(f, h, function(p) {
            return a(g, p)
        }), e = Z(g, e, function(p) {
            return a(p, f)
        });
        else if (m) f = Z(h, f, function(p) {
            return a(e, p)
        }), g = Z(e, g, function(p) {
            return a(p, h)
        });
        else if (d) f = Z(h, f, function(p) {
            return a(g, p)
        }), e = Z(g, e, function(p) {
            return a(p, h)
        });
        else {
            var l = Math.floor((e + g) / 2),
                r = Math.floor((f + h) / 2);
            if (!a(l, r)) return new H(0, 0, 0, 0);
            f = Z(r, f, function(p) {
                return a(l, p)
            });
            h = Z(r, h, function(p) {
                return a(l, p)
            });
            e = Z(l, e, function(p) {
                return a(p, r)
            });
            g = Z(l, g, function(p) {
                return a(p, r)
            })
        }
        return new H(f, g, h, e)
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
    k.C = function() {
        return T.g().b && C && Cb(8) && ue(this.b)
    };
    k.Wa = function() {};
    k.Xa = function() {};
    k.Ab = function() {};
    k.Bb = function() {};
    v(Lh);
    var Ua = {
        bc: "addEventListener",
        gc: "getMaxSize",
        hc: "getScreenSize",
        ic: "getState",
        jc: "getVersion",
        oc: "removeEventListener"
    };

    function Mh() {
        V.call(this, E, 2, "mraid");
        var a = this;
        this.L = 0;
        this.B = this.A = !1;
        this.m = null;
        this.l = 0;
        this.s = -1;
        this.c = null;
        var b = se(this.b);
        b && (this.c = b.Fa, this.s = b.Ha);
        this.c && !Ta(function(c) {
            return ta(a.c[c])
        }) && (this.c = null, this.s = -1);
        this.f.a = new H(0, 0, 0, 0)
    }
    t(Mh, V);
    k = Mh.prototype;
    k.C = function() {
        return null != this.c
    };
    k.ob = function() {
        var a = {};
        this.L && (a.mraid = this.L);
        this.A && (a.mlc = 1);
        this.s && (a.mtop = this.s);
        this.m && (a.mse = this.m);
        return a
    };
    k.Y = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.c[a].apply(this.c, c)
        } catch (e) {
            me(538, e, .01, function(f) {
                f.method = a
            })
        }
    };

    function Nh(a, b, c) {
        a.Y("removeEventListener", b, c)
    }
    k.sb = function() {
        var a = this;
        if (!this.w) {
            this.w = !0;
            a: switch (this.s) {
                case 0:
                case 3:
                    var b = !0;
                    break a;
                default:
                    b = !1
            }
            b ? (T.g().s = !0, this.b.document.readyState && "complete" == this.b.document.readyState ? Oh(this) : S(this.b, "load", function() {
                N().setTimeout(Q(292, function() {
                    return Oh(a)
                }), 100)
            }, 292)) : ef(this, "i")
        }
    };

    function Oh(a) {
        "loading" === a.Y("getState") ? (Ph(a), a.Y("addEventListener", "ready", Qh)) : Rh(a)
    }

    function Ph(a) {
        0 == a.l && (a.l = N().setTimeout(Q(293, function() {
            a.l = -1;
            Nh(a, "ready", Qh);
            me(539, Error());
            a.m = "rt";
            ef(a, "w")
        }), 500))
    }

    function Rh(a) {
        a.l = -1;
        na(a.c.AFMA_LIDAR) ? (a.A = !0, Sh(a)) : (a.m = "nc", ef(a, "w"))
    }

    function Sh(a) {
        a.B = !1;
        N().setTimeout(Q(524, function() {
            a.B || (Th(a), me(540, Error()), a.m = "mt", ef(a, "w"))
        }), 500);
        Uh(a);
        a.Y("addEventListener", a.c.AFMA_LIDAR, Vh)
    }

    function Uh(a) {
        var b = 1 == M(O.g().a, "sneio"),
            c = void 0 !== a.c.AFMA_LIDAR_EXP_1,
            d = void 0 !== a.c.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.c.AFMA_LIDAR_EXP_2 = !0);
        c && (a.c.AFMA_LIDAR_EXP_1 = !b)
    }

    function Th(a) {
        Nh(a, a.c.AFMA_LIDAR, Vh);
        a.A = !1
    }
    k.Wa = function() {
        var a = T.g(),
            b = Wh(this, "getMaxSize");
        a.a = new H(0, b.width, b.height, 0)
    };
    k.Xa = function() {
        T.g().j = Wh(this, "getScreenSize")
    };

    function Wh(a, b) {
        if ("loading" === a.Y("getState")) return new G(-1, -1);
        b = a.Y(b);
        if (!b) return new G(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new G(-1, -1) : new G(a, b)
    }
    k.D = function() {
        Th(this);
        V.prototype.D.call(this)
    };

    function Qh() {
        try {
            var a = Mh.g();
            0 < a.l && N().clearTimeout(a.l);
            Nh(a, "ready", Qh);
            Rh(a)
        } catch (b) {
            me(541, b)
        }
    }

    function Vh(a, b) {
        try {
            var c = Mh.g();
            c.B = !0;
            var d = a ? new H(a.y, a.x + a.width, a.y + a.height, a.x) : new H(0, 0, 0, 0);
            var e = R(),
                f = Se();
            var g = new $e(e, f, c);
            g.a = d;
            g.volume = b;
            c.W(g)
        } catch (h) {
            me(542, h)
        }
    }
    v(Mh);

    function Xh(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    };

    function Yh() {}
    v(Yh);

    function Zh() {}
    v(Zh);
    var $h = Y.c;

    function ai() {
        this.b = null;
        this.f = this.i = this.c = this.h = !1;
        bi(this);
        Gh()
    }

    function ci() {
        if (void 0 === b) {
            var a = void 0 === a ? u : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        Yh.g();
        Jc.g().a = Ic(b);
        Zh.g();
        b = O.g();
        var c = void 0 === c ? !1 : c;
        Jc.g().a(160, c) && id(b.a, "gtx", 1)
    }
    k = ai.prototype;
    k.$b = function(a) {
        this.h = a
    };
    k.qb = function() {
        di(this);
        N().clearTimeout(this.b);
        this.b = null;
        pe = R();
        ei(this)
    };

    function di(a) {
        O.g().c = 1;
        if (!(0 < pe)) {
            try {
                if (!fi(a)) return;
                xh();
                gi(a)
            } catch (b) {}
            a.b = N().setTimeout(Q(129, function() {
                return di(a)
            }), 250)
        }
    }
    k.ac = function(a, b, c, d, e, f, g, h, n) {
        var m = this;
        f = void 0 === f ? !1 : f;
        h = void 0 === h ? -1 : h;
        n = void 0 === n ? -1 : n;
        if (Ah(E)) {
            var l = new rg(E, b, a, -1, c, g);
            l.sa = Hh(l.s);
            e = O.g();
            wg(l);
            0 < h && -1 == l.u && (l.u = h);
            0 <= n && (l.Qa = n);
            l.Pa = function(r) {
                for (var p = [], B = 0; B < arguments.length; ++B) p[B] = arguments[B];
                return m.Wb.apply(m, q(p))
            };
            l.gb = function(r) {
                for (var p = [], B = 0; B < arguments.length; ++B) p[B] = arguments[B];
                return m.Ta.apply(m, q(p))
            };
            13 != c && (l.l = Eh(b), l.Fb = Xh(b), l.ma = Fh(b));
            f && (l.Nb = !0);
            id(e.a, "oseid", gg(this.a));
            Sg.a.push(l);
            ++Y.a.ib;
            e.b ? this.Ta(l, e.b) : ((b = Zg.g().a) && Wf(l, b), ei(this), e.b || (b = M(e.a, "sel"), 1 == b ? id(l.h, "sela", d ? 1 : 0) : (2 == b && (d = pd(a, "loadComplete")), d ? (hi(l), l.Z()) : a && xe(a, function() {
                l.ja() || (hi(l), l.Z())
            }), Y.j || Y.i())))
        }
    };

    function gi(a) {
        ii(a);
        eg(a.a, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.ac.apply(a, q(c))
        }, function() {
            return a.h
        }, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.$b.apply(a, q(c))
        })
    }

    function ji(a) {
        O.g();
        var b = [Lh.g(), Mh.g()],
            c = [kh.g()];
        return [new bh(b), new jh(a), new Kh(a), new bh(c)]
    }

    function ei(a) {
        if (!a.f) {
            a.f = !0;
            try {
                var b = I(),
                    c = T.g(),
                    d = O.g();
                d.f = 947190542;
                if (fi(a)) {
                    Y.a.jb = fg(a.a);
                    c.m = !0;
                    gi(a);
                    var e;
                    (e = T.g().f || y(z, "CrKey") || y(z, "PlayStation") || y(z, "Roku") || Me() || y(z, "Xbox") || Ne() || Oe()) || (N(), e = 0 !== wd());
                    if (e) {
                        d.i = R();
                        var f = Zg.g();
                        if (null == f.b) {
                            var g = ji(b);
                            f.b = g
                        }
                        $g(f, function(h) {
                            return ki(a, h)
                        }) ? Y.done || (Dh(), ph(), Ch(), li(a), Mc()) : ki(a, "i")
                    } else ki(a, "pv")
                } else mi(a, "c")
            } catch (h) {
                throw ki(a, "x"), Sg.reset(), h;
            }
        }
    }

    function li(a) {
        if (-1 == Y.a.za) {
            var b = I(),
                c = 2 == gg(a.a);
            uh(b, c);
            N().setTimeout(Q(131, function() {
                mi(a, "t")
            }), 36E5);
            Y.a.za = R() - pe
        }
    }

    function ki(a, b) {
        O.g().b = b;
        for (var c = ba(Sg.a), d = c.next(); !d.done; d = c.next()) d.value.m = !0;
        mi(a, b, !1)
    }

    function mi(a, b, c) {
        c = void 0 === c ? !0 : c;
        if (!Y.done) {
            $h.cancel();
            a.a || (a.a = new cg);
            if (2 == gg(a.a) || a.c)
                for (a = Sg.a, c && 0 < a.length && wh(Y, a, !0), c = ba(a), a = c.next(); !a.done; a = c.next()) {
                    a = a.value;
                    var d = {};
                    vg(a, 1, (d.r = b, d));
                    bg(a)
                }
            Y.done = !0
        }
    }

    function fi(a) {
        if (!Ah(I())) return !1;
        var b = new cg;
        if (!(b.a || b.b || b.c)) return !1;
        a.a = b;
        return !0
    }
    k.Ta = function(a, b) {
        a.m = !0;
        var c = {};
        vg(a, 2, (c.r = b, c));
        bg(a)
    };
    k.Wb = function(a) {
        if (a && Rf(a.b) && (0 >= U(Uf(a)) ? 0 : null != a.M && null != a.M.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i) && !a.Jb)) {
            var b = a.M;
            if (zc()) yc(window, b, !0);
            else {
                var c = u.document;
                if (c.body) {
                    var d = c.getElementById("goog-srcless-iframe");
                    d || (d = hc((new Zb(c)).a, "IFRAME"), d.style.display = "none", d.id = "goog-srcless-iframe", c.body.appendChild(d));
                    c = d
                } else c = null;
                c && c.contentWindow && yc(c.contentWindow, b, !0)
            }
            a.Jb = !0
        }
    };

    function ni(a, b) {
        if (b && b.data && b.source) {
            var c = b.data;
            if (na(c)) {
                var d = {};
                c = c.split("\n");
                for (var e = 0; e != c.length; ++e) {
                    var f = c[e],
                        g = f.indexOf("=");
                    if (!(0 >= g)) {
                        var h = Number(f.substr(0, g));
                        f = f.substr(g + 1);
                        switch (h) {
                            case 36:
                            case 26:
                            case 15:
                            case 8:
                            case 11:
                            case 16:
                            case 5:
                            case 18:
                                f = "true" == f;
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
                                f = Number(f);
                                break;
                            case 19:
                            case 3:
                                if (ta(decodeURIComponent)) try {
                                    f = decodeURIComponent(f)
                                } catch (n) {
                                    throw Error("Error: URI malformed: " + f);
                                }
                        }
                        d[h] = f
                    }
                }
                d = d[0] ? d : null
            } else d = null;
            if (c = d)
                if (e = c[0], Ka("goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_av_measurement_hold_update goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(" "), e) && (d = Rg(new rd(c[4], c[12]))))
                    if (0 < c[33] && -1 == d.va && (d.va = c[33]), "goog_stop_monitoring" === e) Yg(d);
                    else if (h = c[26], void 0 !== h && (h = h ? 1 : 2, d.i == h || 2 == d.i || 1 == d.i && 3 == h || (d.i = h, 1 != d.i && 3 != d.i || d.Za())), (c[35] || "goog_creative_loaded" === e) && d.Z(), Ka(d.da, b.source) || d.da.push(b.source), "goog_request_monitoring" === e || !d.Ob)
                if (d.Ob = !0, void 0 !== c[16] && (d.fa = !!c[16]), c[19] && d.Ba(c[19]), void 0 !== c[6]) {
                    b = c[6];
                    c = oi(b, d.s);
                    if (c != d.s) {
                        if (5 == c) {
                            d.m = !0;
                            Yg(d);
                            return
                        }
                        d.s = c;
                        d.sa = Hh(c)
                    }
                    4 == b && d.Z();
                    b = T.g();
                    c = Ag(d, "goog_acknowledge_monitoring");
                    c[8] = b.b;
                    c[36] = b.u;
                    Le(d.a.b, c, d.da);
                    b = O.g();
                    d.m && b.b ? (a.Ta(d, b.b), Yg(d)) : a.c = !0
                }
        }
    }

    function hi(a) {
        if (a && sd(zg(a))) {
            var b = Ag(a, "goog_get_mode");
            Le(a.a.b, b)
        }
    }

    function ii(a) {
        if (!a.i) {
            S(E, "message", function(c) {
                return ni(a, c)
            }, 132);
            var b = pi().contentWindow;
            b && S(b, "message", function(c) {
                return ni(a, c)
            }, 132);
            a.i = !0
        }
    }

    function qi(a) {
        S(I(), "unload", function() {
            mi(a, "u")
        }, 133)
    }

    function oi(a, b) {
        return Ia([5, 2, 4, 3, 1, 0], function(c) {
            return c === a || c === b
        }) || 0
    }
    k.Xb = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (a = Tg(a)) {
            var c = I();
            bg(a);
            try {
                var d = a.a.b;
                if (null != d.contentWindow && 3 == a.ea) {
                    switch (a.s) {
                        case 2:
                        case 4:
                            break;
                        default:
                            return
                    }
                    var e = Bg(a);
                    e.adk = a.l;
                    e.adf = a.ma;
                    0 === a.J && (e.invis = 1);
                    e.r = "ac";
                    var f = Bh(Y, c, !1);
                    x(e, f);
                    if (b) b = {}, vg(a, 1, (b.r = "ac", b));
                    else try {
                        c.google_image_requests || (c.google_image_requests = []), d.contentWindow.osdsir(c, e, a.m || 0 >= U(Uf(a)) ? 2 : Rf(a.b) ? 4 : 3)
                    } catch (g) {}
                }
            } finally {
                Yg(a)
            }
        }
    };
    k.Yb = function(a, b) {
        a && b && ua(a) && 1 == a.nodeType && ua(b) && 1 == b.nodeType && (a = Tg(a)) && Cg(a, b, I())
    };

    function pi() {
        var a = gc("IFRAME", {
            id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
            name: "google_osd_static_frame"
        });
        a.style.display = "none";
        a.style.width = "0px";
        a.style.height = "0px";
        E.document.body.appendChild(a);
        return a
    }

    function bi(a) {
        za("Goog_Osd_UnloadAdBlock", Q(134, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Xb.apply(a, q(c))
        }));
        za("Goog_Osd_UpdateElementToMeasure", Q(135, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Yb.apply(a, q(c))
        }))
    };
    le(155, function() {
        ci();
        var a = new ai;
        Y.u = "osd";
        qi(a);
        Nc() ? a.qb() : (di(a), S(I(), "load", function() {
            N().setTimeout(Q(153, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return a.qb.apply(a, q(c))
            }), 100)
        }, 154))
    });
}).call(this, this, this.document);