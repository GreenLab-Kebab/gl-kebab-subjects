(function() {
    var m;

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

    function ca(a) {
        if (!(a instanceof Array)) {
            a = ba(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var da = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ia = {
                    sa: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                fa = ja.sa;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = ea;

    function la(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ka) ka(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c]
    }
    var ma = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        na = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function oa(a, b) {
        if (b) {
            var c = na;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ma(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    oa("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var d = b.length; 0 < d && 0 < c;)
                if (this[--c] != b[--d]) return !1;
            return 0 >= d
        }
    });
    var t = this || self;

    function pa() {
        if (null === qa) a: {
            var a = t.document;
            if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ra.test(a)) {
                qa = a;
                break a
            }
            qa = ""
        }
        return qa
    }
    var ra = /^[\w+/_-]+[=]{0,2}$/,
        qa = null;

    function sa(a) {
        a = a.split(".");
        for (var b = t, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ta() {}

    function ua(a) {
        a.T = void 0;
        a.j = function() {
            return a.T ? a.T : a.T = new a
        }
    }

    function va(a) {
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

    function wa(a) {
        return "array" == va(a)
    }
    var xa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ya = 0;

    function za(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Aa(a, b, c) {
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

    function Ba(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ba = za : Ba = Aa;
        return Ba.apply(null, arguments)
    }

    function Ca(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function v(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var Ea = (new Date).getTime();

    function Fa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ga(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ha(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ia(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ja(a, b) {
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

    function Ka(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function La(a, b) {
        a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a
                    }
                a = -1
            }return 0 <= a
    };

    function Ma(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Na(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Oa(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Pa(a, b) {
        return null !== a && b in a
    };

    function Qa(a, b, c) {
        this.c = a === Ra && b || "";
        this.P = a === Ra && c || null;
        this.g = Sa
    }
    Qa.prototype.b = !0;
    Qa.prototype.a = function() {
        return this.c.toString()
    };

    function Ta(a) {
        return a instanceof Qa && a.constructor === Qa && a.g === Sa ? a.c : "type_error:TrustedResourceUrl"
    }
    var Sa = {},
        Ra = {};

    function Ua(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var Va = /&/g,
        Wa = /</g,
        Xa = />/g,
        Ya = /"/g,
        Za = /'/g,
        $a = /\x00/g;

    function ab(a, b) {
        return -1 != a.indexOf(b)
    }

    function bb(a, b) {
        var c = 0;
        a = Ua(String(a)).split(".");
        b = Ua(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = cb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || cb(0 == f[2].length, 0 == g[2].length) || cb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function cb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function db(a, b) {
        this.c = a === eb && b || "";
        this.g = fb
    }
    db.prototype.b = !0;
    db.prototype.a = function() {
        return this.c.toString()
    };

    function gb(a) {
        return a instanceof db && a.constructor === db && a.g === fb ? a.c : "type_error:SafeUrl"
    }
    var hb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        fb = {},
        eb = {};
    var ib;
    a: {
        var jb = t.navigator;
        if (jb) {
            var kb = jb.userAgent;
            if (kb) {
                ib = kb;
                break a
            }
        }
        ib = ""
    }

    function w(a) {
        return ab(ib, a)
    }

    function lb(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function mb() {
        return (w("Chrome") || w("CriOS")) && !w("Edge")
    }

    function nb() {
        function a(e) {
            e = Ja(e, d);
            return c[e] || ""
        }
        var b = ib;
        if (w("Trident") || w("MSIE")) return ob(b);
        b = lb(b);
        var c = {};
        Fa(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = Ca(Pa, c);
        return w("Opera") ? a(["Version", "Opera"]) : w("Edge") ? a(["Edge"]) : w("Edg/") ? a(["Edg"]) : mb() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
    }

    function ob(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                } else b = "7.0";
                else b = c[1];
        return b
    };

    function pb(a, b) {
        a.src = Ta(b);
        (b = pa()) && a.setAttribute("nonce", b)
    };
    var qb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        rb = {
            "'": "\\'"
        };

    function sb(a) {
        sb[" "](a);
        return a
    }
    sb[" "] = ta;

    function x() {}
    var tb = "function" == typeof Uint8Array;

    function z(a, b, c, d) {
        a.b = null;
        b || (b = []);
        a.C = void 0;
        a.g = -1;
        a.a = b;
        a: {
            if (b = a.a.length) {
                --b;
                var e = a.a[b];
                if (!(null === e || "object" != typeof e || wa(e) || tb && e instanceof Uint8Array)) {
                    a.i = b - a.g;
                    a.c = e;
                    break a
                }
            }
            a.i = Number.MAX_VALUE
        }
        a.m = {};
        if (c)
            for (b = 0; b < c.length; b++) e = c[b], e < a.i ? (e += a.g, a.a[e] = a.a[e] || ub) : (vb(a), a.c[e] = a.c[e] || ub);
        if (d && d.length)
            for (b = 0; b < d.length; b++) wb(a, d[b])
    }
    var ub = [];

    function vb(a) {
        var b = a.i + a.g;
        a.a[b] || (a.c = a.a[b] = {})
    }

    function A(a, b) {
        if (b < a.i) {
            b += a.g;
            var c = a.a[b];
            return c === ub ? a.a[b] = [] : c
        }
        if (a.c) return c = a.c[b], c === ub ? a.c[b] = [] : c
    }

    function B(a, b, c) {
        a = A(a, b);
        return null == a ? c : a
    }

    function xb(a, b) {
        a = A(a, b);
        a = null == a ? a : +a;
        return null == a ? 0 : a
    }

    function yb(a, b, c) {
        b < a.i ? a.a[b + a.g] = c : (vb(a), a.c[b] = c);
        return a
    }

    function wb(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e],
                g = A(a, f);
            null != g && (c = f, d = g, yb(a, f, void 0))
        }
        return c ? (yb(a, c, d), c) : 0
    }

    function zb(a, b, c) {
        a.b || (a.b = {});
        if (!a.b[c]) {
            var d = A(a, c);
            d && (a.b[c] = new b(d))
        }
        return a.b[c]
    }

    function C(a, b, c) {
        a.b || (a.b = {});
        if (!a.b[c]) {
            for (var d = A(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.b[c] = e
        }
        b = a.b[c];
        b == ub && (b = a.b[c] = []);
        return b
    };

    function Ab(a) {
        z(this, a, Bb, null)
    }
    v(Ab, x);

    function Cb(a) {
        z(this, a, null, null)
    }
    v(Cb, x);
    var Bb = [2, 3];

    function Db(a) {
        z(this, a, null, null)
    }
    v(Db, x);

    function Eb(a) {
        var b = new Db;
        return yb(b, 1, a)
    }

    function Fb(a, b) {
        return yb(a, 2, b)
    }

    function Gb(a, b) {
        return yb(a, 3, b)
    }

    function Hb(a, b) {
        return yb(a, 4, b)
    };
    var Ib = document,
        Jb = window,
        Kb, Lb = null,
        Mb = Ib.getElementsByTagName("script");
    Mb && Mb.length && (Lb = Mb[Mb.length - 1]);
    Kb = Lb;
    var Nb = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Ob(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function Pb(a) {
        this.a = a || {
            cookie: ""
        }
    }
    Pb.prototype.set = function(a, b, c, d, e, f) {
        if ("object" === typeof c) {
            var g = c.c;
            f = c.g;
            e = c.domain;
            d = c.a;
            c = c.b
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === c && (c = -1);
        this.a.cookie = a + "=" + b + (e ? ";domain=" + e : "") + (d ? ";path=" + d : "") + (0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(+new Date + 1E3 * c)).toUTCString()) + (f ? ";secure" : "") + (null != g ? ";samesite=" + g : "")
    };
    Pb.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ua(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };

    function Qb() {
        var a = document;
        var b = "IFRAME";
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };

    function Rb(a) {
        Sb();
        return new Qa(Ra, a, null)
    }
    var Sb = ta;

    function Tb(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    sb(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Ub(a, b) {
        var c = a.createElement("script");
        pb(c, Rb(b));
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function D(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Vb(a, b, c) {
        var d = !1;
        void 0 === c || c || (d = Wb());
        return !d && !Xb() && (c = Math.random(), c < b) ? (c = Yb(t), a[Math.floor(c * a.length)]) : null
    }

    function Yb(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function Zb(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function $b(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Xb = Ma(function() {
        return ab(ib, "Google Web Preview") || 1E-4 > Math.random()
    });

    function ac(a, b) {
        var c = -1;
        try {
            a.localStorage && (c = parseInt(a.localStorage.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function bc(a, b) {
        if (Xb()) return null;
        var c = Math.floor(1E3 * Yb(a));
        try {
            if (a.localStorage) return a.localStorage.setItem(b, String(c)), c
        } catch (d) {}
        return null
    }
    var Wb = Ma(function() {
            return ab(ib, "MSIE")
        }),
        cc = /^([0-9.]+)px$/,
        dc = /^(-?[0-9.]{1,30})$/;

    function ec(a) {
        return /^true$/.test(a)
    }

    function fc(a) {
        return (a = cc.exec(a)) ? +a[1] : null
    }
    var gc = Ma(function() {
        var a = /Edge\/([^. ]+)/.exec(navigator.userAgent);
        return a ? 18 <= parseInt(a[1], 10) : (a = /Chrome\/([^. ]+)/.exec(navigator.userAgent)) ? 71 <= parseInt(a[1], 10) : (a = /AppleWebKit\/([^. ]+)/.exec(navigator.userAgent)) ? 605 <= parseInt(a[1], 10) : (a = /Firefox\/([^. ]+)/.exec(navigator.userAgent)) ? 64 <= parseInt(a[1], 10) : !1
    });

    function hc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function ic(a, b) {
        t.google_image_requests || (t.google_image_requests = []);
        var c = t.document.createElement("img");
        if (b) {
            var d = function(e) {
                b && b(e);
                c.removeEventListener && c.removeEventListener("load", d, !1);
                c.removeEventListener && c.removeEventListener("error", d, !1)
            };
            hc(c, "load", d);
            hc(c, "error", d)
        }
        c.src = a;
        t.google_image_requests.push(c)
    };
    var jc = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/;

    function kc(a, b) {
        return a ? (a = a.match(jc)) ? a[0] : b : b
    };

    function lc() {
        return "r20191003"
    }
    var mc = ec("false"),
        nc = ec("false"),
        oc = ec("true"),
        pc = ec("true") || !nc;

    function qc() {
        return kc("", "pagead2.googlesyndication.com")
    };

    function rc(a) {
        z(this, a, sc, tc)
    }
    v(rc, x);
    var sc = [2, 8],
        tc = [
            [3, 4, 5],
            [6, 7]
        ];

    function uc(a) {
        return null != a ? !a : a
    }

    function vc(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d].call();
            if (e == b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function wc(a, b) {
        var c = C(a, rc, 2);
        if (!c.length) return xc(a, b);
        a = B(a, 1, 0);
        if (1 == a) return uc(wc(c[0], b));
        c = Ha(c, function(d) {
            return function() {
                return wc(d, b)
            }
        });
        switch (a) {
            case 2:
                return vc(c, !1);
            case 3:
                return vc(c, !0)
        }
    }

    function xc(a, b) {
        var c = wb(a, tc[0]);
        a: {
            switch (c) {
                case 3:
                    var d = B(a, 3, 0);
                    break a;
                case 4:
                    d = B(a, 4, 0);
                    break a;
                case 5:
                    d = B(a, 5, 0);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, A(a, 8))
            } catch (f) {
                return
            }
            b = B(a, 1, 0);
            if (4 == b) return !!e;
            d = null != e;
            if (5 == b) return d;
            if (12 == b) a = B(a, 7, "");
            else a: {
                switch (c) {
                    case 4:
                        a = xb(a, 6);
                        break a;
                    case 5:
                        a = B(a, 7, "");
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 == b) return e === a;
                if (9 == b) return 0 == bb(e, a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return (new RegExp(a)).test(e);
                    case 10:
                        return -1 == bb(e, a);
                    case 11:
                        return 1 == bb(e, a)
                }
            }
        }
    }

    function yc(a, b) {
        return !a || !(!b || !wc(a, b))
    };

    function zc(a) {
        z(this, a, Ac, null)
    }
    v(zc, x);
    var Ac = [4];

    function Bc(a) {
        z(this, a, Cc, Dc)
    }
    v(Bc, x);

    function Ec(a) {
        z(this, a, null, null)
    }
    v(Ec, x);
    var Cc = [5],
        Dc = [
            [1, 2, 3, 6]
        ];

    function Fc() {
        var a = {};
        this.a = (a[3] = {}, a[4] = {}, a[5] = {}, a)
    }
    ua(Fc);
    var Gc = ec("false");

    function Hc(a, b) {
        switch (b) {
            case 1:
                return B(a, 1, 0);
            case 2:
                return B(a, 2, 0);
            case 3:
                return B(a, 3, 0);
            case 6:
                return B(a, 6, 0);
            default:
                return null
        }
    }

    function Ic(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return a = A(a, 1), a = null == a ? a : !!a, null == a ? !1 : a;
            case 2:
                return xb(a, 2);
            case 3:
                return B(a, 3, "");
            case 6:
                return A(a, 4);
            default:
                return null
        }
    }
    var Jc = Ma(function() {
        if (!Gc) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function Kc(a, b, c) {
        var d = Jc();
        if (d[a] && null != d[a][b]) return d[a][b];
        b = Lc.j().a[a][b];
        if (!b) return c;
        b = new Bc(b);
        b = Mc(b);
        a = Ic(b, a);
        return null != a ? a : c
    }

    function Mc(a) {
        var b = Fc.j().a;
        if (b) {
            var c = Ka(C(a, Ec, 5), function(d) {
                return yc(zb(d, rc, 1), b)
            });
            if (c) return zb(c, zc, 2)
        }
        return zb(a, zc, 4)
    }

    function Lc() {
        var a = {};
        this.a = (a[1] = {}, a[2] = {}, a[3] = {}, a[6] = {}, a)
    }
    ua(Lc);

    function Nc(a, b) {
        return !!Kc(1, a, void 0 === b ? !1 : b)
    }

    function Oc(a, b) {
        b = void 0 === b ? 0 : b;
        a = Number(Kc(2, a, b));
        return isNaN(a) ? b : a
    }

    function Pc(a, b) {
        return Kc(3, a, void 0 === b ? "" : b)
    }

    function Qc(a, b) {
        b = void 0 === b ? [] : b;
        return Kc(6, a, b)
    }

    function Rc(a) {
        var b = Lc.j().a;
        Fa(a, function(c) {
            var d = wb(c, Dc[0]),
                e = Hc(c, d);
            e && (b[d][e] = c.a)
        })
    }

    function Sc(a) {
        var b = Lc.j().a;
        Fa(a, function(c) {
            var d = new Bc(c),
                e = wb(d, Dc[0]);
            (d = Hc(d, e)) && (b[e][d] || (b[e][d] = c))
        })
    };

    function E(a) {
        this.a = a
    }
    var Tc = new E(1),
        Uc = new E(2),
        Vc = new E(3),
        Wc = new E(4),
        Xc = new E(5),
        Yc = new E(6),
        Zc = new E(7),
        $c = new E(8),
        ad = new E(9),
        bd = new E(10),
        cd = new E(11),
        dd = new E(12),
        ed = new E(13),
        fd = new E(14);

    function F(a, b, c) {
        c.hasOwnProperty(a.a) || Object.defineProperty(c, String(a.a), {
            value: b
        })
    }

    function gd(a, b, c) {
        return b[a.a] || c || function() {}
    }

    function hd(a) {
        F(Xc, Nc, a);
        F(Yc, Oc, a);
        F(Zc, Pc, a);
        F($c, Qc, a);
        F(ed, Sc, a)
    }

    function id(a) {
        F(Wc, function(b) {
            Fc.j().a = b
        }, a);
        F(ad, function(b, c) {
            var d = Fc.j();
            d.a[3][b] || (d.a[3][b] = c)
        }, a);
        F(bd, function(b, c) {
            var d = Fc.j();
            d.a[4][b] || (d.a[4][b] = c)
        }, a);
        F(cd, function(b, c) {
            var d = Fc.j();
            d.a[5][b] || (d.a[5][b] = c)
        }, a);
        F(fd, function(b) {
            for (var c = Fc.j(), d = ba([3, 4, 5]), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = void 0;
                var g = c.a[f];
                f = b[f];
                for (e in f) g[e] = f[e]
            }
        }, a)
    }

    function jd(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function kd() {
        this.a = function() {
            return !1
        }
    }
    ua(kd);

    function G(a) {
        var b = void 0 === b ? !1 : b;
        return kd.j().a(a, b)
    };

    function ld(a) {
        a = void 0 === a ? t : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function md(a) {
        return (a = a || ld()) ? Tb(a.master) ? a.master : null : null
    };

    function nd(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function od(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function pd(a) {
        "google_onload_fired" in a || (a.google_onload_fired = !1, hc(a, "load", function() {
            a.google_onload_fired = !0
        }))
    }

    function qd(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function rd(a) {
        a = md(ld(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
    var sd = !!window.google_async_iframe_id,
        td = sd && window.parent || window;

    function ud() {
        if (sd && !Tb(td)) {
            var a = "." + Ib.domain;
            try {
                for (; 2 < a.split(".").length && !Tb(td);) Ib.domain = a = a.substr(a.indexOf(".") + 1), td = window.parent
            } catch (b) {}
            Tb(td) || (td = window)
        }
        return td
    }

    function vd() {
        if (mc) try {
            var a = Jb.google_cafe_host || Jb.top.google_cafe_host;
            if (a) return a
        } catch (b) {}
        return qc()
    }

    function wd(a) {
        return mc && a.google_top_window || a.top
    }

    function H(a) {
        a = wd(a);
        return Tb(a) ? a : null
    };

    function xd(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function I(a, b) {
        a: if (a = xd(a).eids || [], a.indexOf) b = a.indexOf(b), b = 0 < b || 0 === b;
            else {
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b) {
                        b = !0;
                        break a
                    }
                b = !1
            }return b
    }

    function yd(a, b, c) {
        for (var d = 0; d < a.length; ++d)
            if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
        return null
    };
    var zd = {},
        Ad = (zd.google_ad_client = !0, zd.google_ad_host = !0, zd.google_ad_host_channel = !0, zd.google_adtest = !0, zd.google_tag_for_child_directed_treatment = !0, zd.google_tag_for_under_age_of_consent = !0, zd.google_tag_partner = !0, zd);

    function Bd(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function Cd(a) {
        return !!(a.error && a.meta && a.id)
    };
    var Dd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function Ed(a, b) {
        this.a = a;
        this.b = b
    }

    function Fd(a, b, c) {
        this.url = a;
        this.a = b;
        this.ca = !!c;
        this.depth = null
    };

    function Gd() {
        this.c = "&";
        this.g = !1;
        this.b = {};
        this.i = 0;
        this.a = []
    }

    function Hd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Id(a, b, c, d, e) {
        var f = [];
        Zb(a, function(g, h) {
            (g = Jd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Jd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Jd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Id(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Kd(a, b, c, d) {
        a.a.push(b);
        a.b[b] = Hd(c, d)
    }

    function Ld(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Md(a) - c.length;
        if (0 > d) return "";
        a.a.sort(function(r, q) {
            return r - q
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var l = Id(h[k], a.c, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.c;
                        break
                    }
                    a.g && (e = d, l[e - 1] == a.c && --e, b += l.substr(0, e), e = a.c, d = 0);
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function Md(a) {
        var b = 1,
            c;
        for (c in a.b) b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    };

    function Nd() {
        var a = void 0 === a ? Jb : a;
        this.b = "http:" === a.location.protocol ? "http:" : "https:";
        this.a = Math.random()
    }

    function Od() {
        var a = Pd,
            b = Qd.google_srt;
        0 <= b && 1 >= b && (a.a = b)
    }

    function Rd(a, b, c, d, e, f) {
        if ((d ? a.a : Math.random()) < (e || .01)) try {
            if (c instanceof Gd) var g = c;
            else g = new Gd, Zb(c, function(k, l) {
                var r = g,
                    q = r.i++;
                k = Hd(l, k);
                r.a.push(q);
                r.b[q] = k
            });
            var h = Ld(g, a.b, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" === typeof f ? ic(h, null) : ic(h, void 0 === f ? null : f))
        } catch (k) {}
    };

    function Sd(a, b) {
        this.start = a < b ? a : b;
        this.a = a < b ? b : a
    };

    function Td(a, b, c) {
        this.b = b >= a ? new Sd(a, b) : null;
        this.a = c
    }

    function Ud(a, b) {
        b = void 0 === b ? 0 : b;
        b = 0 != b ? "google_experiment_mod" + b : "google_experiment_mod";
        var c = ac(a, b);
        return null != c ? c : bc(a, b)
    };
    var Vd = null;

    function Wd() {
        if (null === Vd) {
            Vd = "";
            try {
                var a = "";
                try {
                    a = t.top.location.hash
                } catch (c) {
                    a = t.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Vd = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Vd
    };

    function Xd() {
        var a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function Yd() {
        var a = void 0 === a ? t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Zd(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var J = t.performance,
        $d = !!(J && J.mark && J.measure && J.clearMarks),
        ae = Ma(function() {
            var a;
            if (a = $d) a = Wd(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function be() {
        var a = Qd;
        this.b = [];
        this.c = a || t;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = ae() || (null != b ? b : 1 > Math.random())
    }

    function ce(a) {
        a && J && ae() && (J.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), J.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    be.prototype.start = function(a, b) {
        if (!this.a) return null;
        var c = Yd() || Xd();
        a = new Zd(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        J && ae() && J.mark(b);
        return a
    };

    function de() {
        var a = ee;
        this.m = Pd;
        this.c = !0;
        this.b = null;
        this.i = this.A;
        this.a = void 0 === a ? null : a;
        this.g = !1
    }
    m = de.prototype;
    m.ma = function(a) {
        this.i = a
    };
    m.V = function(a) {
        this.b = a
    };
    m.na = function(a) {
        this.c = a
    };
    m.oa = function(a) {
        this.g = a
    };
    m.O = function(a, b, c) {
        try {
            if (this.a && this.a.a) {
                var d = this.a.start(a.toString(), 3);
                var e = b();
                var f = this.a;
                b = d;
                if (f.a && "number" === typeof b.value) {
                    var g = Yd() || Xd();
                    b.duration = g - b.value;
                    var h = "goog_" + b.label + "_" + b.uniqueId + "_end";
                    J && ae() && J.mark(h);
                    !f.a || 2048 < f.b.length || f.b.push(b)
                }
            } else e = b()
        } catch (k) {
            f = this.c;
            try {
                ce(d), f = this.i(a, new Bd(k, {
                    message: fe(k)
                }), void 0, c)
            } catch (l) {
                this.A(217, l)
            }
            if (!f) throw k;
        }
        return e
    };
    m.ia = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.O(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    m.A = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Gd;
            f.g = !0;
            Kd(f, 1, "context", a);
            Cd(b) || (b = new Bd(b, {
                message: fe(b)
            }));
            b.msg && Kd(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.b) try {
                this.b(g)
            } catch (M) {}
            if (d) try {
                d(g)
            } catch (M) {}
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            d = t;
            b = [];
            g = null;
            do {
                var h = d;
                if (Tb(h)) {
                    var k = h.location.href;
                    g = h.document && h.document.referrer || null
                } else k = g, g = null;
                b.push(new Fd(k || "", h));
                try {
                    d = h.parent
                } catch (M) {
                    d = null
                }
            } while (d && h != d);
            k = 0;
            for (var l = b.length - 1; k <= l; ++k) b[k].depth = l - k;
            h = t;
            if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                for (l = 1; l < b.length; ++l) {
                    var r = b[l];
                    r.url || (r.url = h.location.ancestorOrigins[l - 1] || "", r.ca = !0)
                }
            var q = new Fd(t.location.href, t, !1);
            h = null;
            var p = b.length - 1;
            for (r = p; 0 <= r; --r) {
                var n = b[r];
                !h && Dd.test(n.url) && (h = n);
                if (n.url && !n.ca) {
                    q = n;
                    break
                }
            }
            n = null;
            var y = b.length && b[p].url;
            0 != q.depth && y && (n = b[p]);
            var K = new Ed(q, n);
            K.b && Kd(f, 4, "top", K.b.url || "");
            Kd(f, 5, "url", K.a.url || "");
            Rd(this.m, e, f, this.g, c)
        } catch (M) {
            try {
                Rd(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: fe(M),
                    url: K && K.a.url
                }, this.g, c)
            } catch (u) {}
        }
        return this.c
    };

    function fe(a) {
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
    };

    function L(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, L) : this.stack = Error().stack || ""
    }
    la(L, Error);

    function ge() {
        this.b = !1;
        this.a = null;
        this.g = !1;
        this.i = Math.random();
        this.c = this.A
    }
    m = ge.prototype;
    m.V = function(a) {
        this.a = a
    };
    m.na = function(a) {
        this.b = a
    };
    m.oa = function(a) {
        this.g = a
    };
    m.ma = function(a) {
        this.c = a
    };
    m.A = function(a, b, c, d, e) {
        if ((this.g ? this.i : Math.random()) > (void 0 === c ? .01 : c)) return this.b;
        Cd(b) || (b = new Bd(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.a) b.meta = {}, this.a && this.a(b.meta), d && d(b.meta);
        t.google_js_errors = t.google_js_errors || [];
        t.google_js_errors.push(b);
        t.error_rep_loaded || (Ub(t.document, t.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js"), t.error_rep_loaded = !0);
        return this.b
    };
    m.O = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.c(a, e, .01, c, "jserror")) throw e;
        }
        return d
    };
    m.ia = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.O(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    var Pd, N, he, Qd = ud(),
        ee = new be;

    function ie(a) {
        null != a && (Qd.google_measure_js_timing = a);
        Qd.google_measure_js_timing || (a = ee, a.a = !1, a.b != a.c.google_js_reporting_queue && (ae() && Fa(a.b, ce), a.b.length = 0))
    }

    function je(a) {
        var b = Jb.jerExpIds;
        if (wa(b) && 0 !== b.length) {
            var c = a.eid;
            if (c) {
                b = ca(c.split(",")).concat(ca(b));
                c = {};
                for (var d = 0, e = 0; e < b.length;) {
                    var f = b[e++];
                    var g = f;
                    var h = typeof g;
                    g = "object" == h && null != g || "function" == h ? "o" + (g[xa] || (g[xa] = ++ya)) : (typeof g).charAt(0) + g;
                    Object.prototype.hasOwnProperty.call(c, g) || (c[g] = !0, b[d++] = f)
                }
                b.length = d;
                a.eid = b.join(",")
            } else a.eid = b.join(",")
        }
    }

    function ke(a) {
        var b = Jb.jerUserAgent;
        b && (a.useragent = b)
    }(function() {
        Pd = new Nd;
        "number" !== typeof Qd.google_srt && (Qd.google_srt = Math.random());
        Od();
        N = new de;
        N.V(function(b) {
            je(b);
            he && (b.jc = he);
            ke(b)
        });
        N.oa(!0);
        "complete" == Qd.document.readyState ? ie() : ee.a && hc(Qd, "load", function() {
            ie()
        });
        var a = Ib.currentScript;
        he = a ? a.dataset.jc : ""
    })();

    function le(a, b) {
        return N.O(a, b, void 0)
    }

    function me(a, b) {
        return N.ia(a, b, void 0, void 0)
    }

    function ne(a, b) {
        Rd(Pd, a, b, !0, void 0, void 0)
    }

    function oe(a) {
        ne("rmvasft", {
            code: "ldr",
            branch: a ? "exp" : "cntr"
        })
    };

    function pe() {};

    function qe() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.adRegion = null;
        this.improveCollisionDetection = 1;
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new re
    }

    function re() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function se(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function O(a) {
        return se(a).clientWidth
    };

    function te(a) {
        if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };

    function ue(a, b, c) {
        a = a.document;
        for (var d = b.id, e = 0; !d || a.getElementById(d + "_anchor");) d = "aswift_" + e++;
        b.id = d;
        b.name = d;
        d = c.google_ad_width;
        e = c.google_ad_height;
        var f = c.gml,
            g = c.gmr,
            h = c.gzi;
        f = (f ? "margin-left:" + f + ";" : "") + (g ? "margin-right:" + g + ";" : "") + (h ? "z-index:" + h + ";" : "");
        if (g = c.ds) g += g.endsWith(";") ? "" : ";", f += g;
        h = c.google_ad_slot;
        g = "";
        if (!c.google_enable_single_iframe) {
            c = ["<iframe"];
            for (var k in b) b.hasOwnProperty(k) && c.push(k + "=" + b[k]);
            c.push('style="left:0;position:absolute;top:0;border:0px;width:' + (d + "px;height:" + (e + 'px;"')));
            c.push("></iframe>");
            g = c.join(" ")
        }
        k = b.id;
        c = h;
        c = void 0 === c ? "" : c;
        d = "border:none;height:" + e + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (d + "px;background-color:transparent;");
        a.write(['<ins id="' + (k + '_expand"'), ' style="display:inline-table;' + d + (void 0 === f ? "" : f) + '"', c ? ' data-ad-slot="' + c + '">' : ">", '<ins id="' + (k + '_anchor" style="display:block;') + d + '">', g, "</ins></ins>"].join(""));
        return b.id
    }

    function ve(a, b, c) {
        if (Tb(a.document.getElementById(b).contentWindow)) a = a.document.getElementById(b).contentWindow, b = a.document, b.body && b.body.firstChild || (/Firefox/.test(navigator.userAgent) ? b.open("text/html", "replace") : b.open(), a.google_async_iframe_close = !0, b.write(c));
        else {
            a = a.document.getElementById(b).contentWindow;
            c = String(c);
            b = ['"'];
            for (var d = 0; d < c.length; d++) {
                var e = c.charAt(d),
                    f = e.charCodeAt(0),
                    g = d + 1,
                    h;
                if (!(h = qb[e])) {
                    if (!(31 < f && 127 > f))
                        if (f = e, f in rb) e = rb[f];
                        else if (f in qb) e = rb[f] = qb[f];
                    else {
                        h = f.charCodeAt(0);
                        if (31 < h && 127 > h) e = f;
                        else {
                            if (256 > h) {
                                if (e = "\\x", 16 > h || 256 < h) e += "0"
                            } else e = "\\u", 4096 > h && (e += "0");
                            e += h.toString(16).toUpperCase()
                        }
                        e = rb[f] = e
                    }
                    h = e
                }
                b[g] = h
            }
            b.push('"');
            a.location.replace("javascript:" + b.join(""))
        }
    };

    function we(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = xe(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function xe(a) {
        var b = "";
        nd(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };
    var ye = null;
    var ze = parseInt("2019", 10),
        Ae = isNaN(ze) ? 2012 : ze;

    function Be(a, b, c) {
        c || (c = pc ? "https" : "http");
        t.location && "https:" == t.location.protocol && "http" == c && (c = "https");
        return [c, "://", a, b].join("")
    }

    function Ce(a, b, c) {
        a = Be(a, b, c);
        G(182) && 2012 < Ae && (a = a.replace(new RegExp(".js".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), ("_fy" + Ae + ".js").replace(/\$/g, "$$$$")));
        G(202) && (a += (0 < a.indexOf("?") ? "&" : "?") + "cache=bust");
        return a
    };
    var De = null;

    function Ee() {
        if (!mc) return !1;
        if (null != De) return De;
        De = !1;
        try {
            var a = H(t);
            a && -1 != a.location.hash.indexOf("google_logging") && (De = !0);
            t.localStorage.getItem("google_logging") && (De = !0)
        } catch (b) {}
        return De
    };
    var Fe = null;

    function Ge() {
        if (!Fe) {
            for (var a = t, b = a, c = 0; a && a != a.parent;)
                if (a = a.parent, c++, Tb(a)) b = a;
                else break;
            Fe = b
        }
        return Fe
    };

    function He() {
        this.debugCard = null;
        this.debugCardRequested = !1
    };
    var Ie = {
        13: "0.001",
        22: "0.01",
        24: "0.05",
        28: "0.001",
        29: "0.01",
        60: "0.03",
        66: "0.1",
        79: "1200",
        82: "3",
        98: "0.01",
        99: "600",
        100: "100",
        103: "0.01",
        118: "false",
        126: "0.001",
        128: "false",
        129: "0.02",
        135: "0.01",
        136: "0.02",
        137: "0.01",
        149: "0",
        150: "1000",
        155: "0.06",
        160: "250",
        161: "150",
        162: "0.1",
        165: "0.02",
        173: "800",
        174: "2",
        177: "0.02",
        179: "100",
        180: "20",
        185: "0.4",
        189: "400",
        190: "60",
        193: "500",
        194: "0"
    };
    var Je = null;

    function Ke() {
        this.a = Ie
    }

    function P(a, b) {
        a = parseFloat(a.a[b]);
        return isNaN(a) ? 0 : a
    };
    var Le = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function Me(a, b) {
        return (a = Ne(a, b)) ? a.y : 0
    }

    function Ne(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function Oe(a, b) {
        do {
            var c = D(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    }

    function Pe(a) {
        var b = 0,
            c;
        for (c in Le) - 1 != a.indexOf(c) && (b |= Le[c]);
        return b
    }

    function Qe(a, b, c, d, e) {
        if (wd(a) != a) return H(a) ? 3 : 16;
        if (!(488 > O(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = O(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = O(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = D(b, a)) && (e = fc(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Re(a, b, c) {
        return {
            ha: fc(a.paddingLeft) || 0,
            direction: a.direction,
            ba: b - c
        }
    }

    function Se(a, b, c, d, e) {
        if (b.google_ad_resize) return -1 * (e + c) + "px";
        for (var f = b = 0; 100 > f && a; f++) b += a.offsetLeft + a.clientLeft - a.scrollLeft, a = a.offsetParent;
        c = b + c;
        return "rtl" == d ? -1 * (e - c) + "px" : -1 * c + "px"
    }

    function Te(a, b, c) {
        "rtl" == b ? a.style.marginRight = c : a.style.marginLeft = c
    }

    function Ue(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = D(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Ve(a, b, c) {
        a = Ne(b, a);
        return "rtl" == c ? -a.x : a.x
    };

    function We(a, b, c) {
        var d = "script";
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        try {
            e.rel = "preload";
            if (ab("preload", "stylesheet")) var f = b.P ? b.P : Ta(b).toString();
            else {
                if (b instanceof Qa) var g = b.P ? b.P : Ta(b).toString();
                else {
                    if (b instanceof db) var h = gb(b);
                    else {
                        if (b instanceof db) var k = b;
                        else b = "object" == typeof b && b.b ? b.a() : String(b), hb.test(b) || (b = "about:invalid#zClosurez"), k = new db(eb, b);
                        h = gb(k)
                    }
                    g = h
                }
                f = g
            }
            e.href = f
        } catch (l) {
            return
        }
        d && (e.as = d);
        c && e.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(e)
        } catch (l) {}
    };

    function Xe(a, b) {
        hc(a, "load", function() {
            if (!a.adsbygoogle) {
                a.adsbygoogle = [];
                var c = Be(vd(), "/pagead/js/adsbygoogle.js");
                Ub(a.document, c)
            }
            a.adsbygoogle.push(b)
        })
    }

    function Ye(a) {
        var b = {},
            c = {};
        return c.enable_page_level_ads = (b.pltais = !0, b), c.google_ad_client = a, c
    };

    function Ze(a, b, c) {
        return $e(a, void 0 === c ? "" : c, function(d) {
            return Ia(C(d, Cb, 2), function(e) {
                return A(e, 1) === b
            })
        })
    }

    function af(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = H(a) || a;
        return bf(d, b) ? !0 : $e(a, c, function(e) {
            return Ia(A(e, 3), function(f) {
                return f === b
            })
        })
    }

    function bf(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && La(a.split(","), b.toString())
    }

    function $e(a, b, c) {
        a = H(a) || a;
        var d = cf(a);
        b && (b = te(String(b)));
        return Oa(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function cf(a) {
        a = df(a);
        var b = {};
        nd(a, function(c, d) {
            try {
                var e = new Ab(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function df(a) {
        try {
            var b = a.localStorage.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Na(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" == typeof e && wa(d)
            })
        } catch (d) {
            return {}
        }
    };

    function ef() {
        this.a = function() {
            return []
        };
        this.b = function() {
            return []
        }
    }

    function ff(a, b) {
        a.a = gd(Uc, b, function() {
            return []
        });
        a.b = gd(Vc, b, function() {
            return []
        })
    }
    ua(ef);
    var gf = {
            f: "368226950",
            h: "368226951"
        },
        hf = {
            f: "368226960",
            h: "368226961"
        },
        jf = {
            f: "368226470",
            K: "368226471"
        },
        kf = {
            f: "368226480",
            K: "368226481"
        },
        lf = {
            f: "332260030",
            H: "332260031",
            G: "332260032"
        },
        mf = {
            f: "332260040",
            H: "332260041",
            G: "332260042"
        },
        nf = {
            f: "368226500",
            h: "368226501"
        },
        of = {
            f: "36998750",
            h: "36998751"
        },
        pf = {
            f: "231196899",
            h: "231196900"
        },
        qf = {
            f: "231196901",
            h: "231196902"
        },
        rf = {
            l: "20040067",
            f: "20040068",
            Y: "1337"
        },
        sf = {
            f: "21060548",
            l: "21060549"
        },
        tf = {
            f: "21060623",
            l: "21060624"
        },
        uf = {
            f: "22324606",
            h: "22324607"
        },
        vf = {
            f: "21062271",
            l: "21062272"
        },
        wf = {
            f: "229739148",
            h: "229739149"
        },
        xf = {
            f: "229739146",
            h: "229739147"
        },
        yf = {
            f: "20040012",
            h: "20040013"
        },
        zf = {
            f: "151527201",
            N: "151527221",
            J: "151527222",
            I: "151527223",
            D: "151527224",
            F: "151527225"
        },
        Af = {
            f: "151527001",
            N: "151527021",
            J: "151527022",
            I: "151527023",
            D: "151527024",
            F: "151527025"
        };

    function Bf(a) {
        return mc && !!a.google_disable_experiments
    }
    ud();

    function Cf(a, b) {
        var c = af(a, 12, b.google_ad_client);
        b = "google_ad_host" in b;
        var d = I(a, gf.h);
        a = we(a.location, "google_ads_preview");
        return c && !b && d || a
    }

    function Df(a, b) {
        if (a.google_apltlad || wd(a) != a || !b.google_ad_client) return null;
        var c = Cf(a, b),
            d = !I(a, jf.K);
        if (!c && !d) return null;
        a.google_apltlad = !0;
        a = Ye(b.google_ad_client);
        var e = a.enable_page_level_ads;
        Zb(b, function(f, g) {
            Ad[g] && "google_ad_client" != g && (e[g] = f)
        });
        c ? e.google_ad_channel = "AutoInsertAutoAdCode" : d && (e.google_pgb_reactive = 7, "google_ad_section" in b || "google_ad_region" in b) && (e.google_ad_section = b.google_ad_section || b.google_ad_region);
        return a
    };
    var Ef = {},
        Ff = (Ef.client = "google_ad_client", Ef.format = "google_ad_format", Ef.slotname = "google_ad_slot", Ef.ad_type = "google_ad_type", Ef);
    N.na(!mc);

    function Q(a, b) {
        this.c = a;
        this.b = b
    }
    Q.prototype.minWidth = function() {
        return this.c
    };
    Q.prototype.height = function() {
        return this.b
    };
    Q.prototype.a = function(a) {
        return 300 < a && 300 < this.b ? this.c : Math.min(1200, Math.round(a))
    };

    function R(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Q.call(this, a, b);
        this.M = c;
        this.xa = d
    }
    la(R, Q);
    R.prototype.U = function() {
        return this.M
    };

    function Gf(a) {
        return function(b) {
            return !!(b.M & a)
        }
    };

    function Hf(a, b, c) {
        var d = fc;
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = D(a, b)) && e[c] && d(e[c]) || null
    }

    function If(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Jf(a, b, c, d) {
        var e = a && Kf(c, b),
            f = Lf(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Mf(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Kf(a, b) {
        return Me(a, b) < se(b).clientHeight - 100
    }

    function Nf(a, b) {
        var c = Hf(b, a, "height");
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Hf(b, a, "height");
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && fc(b.style.height)) && (c = Math.min(c, d)), (d = Hf(b, a, "maxHeight")) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Lf(a, b) {
        var c = 0 == qd(a);
        return b && c ? Math.max(250, 2 * se(a).clientHeight / 3) : 250
    };
    var Of = sb("script");

    function Pf(a, b, c, d, e, f, g, h, k, l, r, q, p, n, y, K, M) {
        this.fa = a;
        this.a = b;
        this.M = void 0 === c ? null : c;
        this.c = void 0 === d ? null : d;
        this.W = void 0 === e ? null : e;
        this.b = void 0 === f ? null : f;
        this.g = void 0 === g ? null : g;
        this.C = void 0 === h ? !1 : h;
        this.ea = void 0 === k ? !1 : k;
        this.pa = void 0 === l ? null : l;
        this.qa = void 0 === r ? null : r;
        this.i = void 0 === q ? null : q;
        this.m = void 0 === p ? null : p;
        this.ra = void 0 === n ? null : n;
        this.ga = void 0 === y ? null : y;
        this.la = void 0 === K ? null : K;
        this.X = void 0 === M ? null : M
    }

    function Qf(a, b, c) {
        null != a.M && (c.google_responsive_formats = a.M);
        null != a.W && (c.google_safe_for_responsive_override = a.W);
        null != a.b && (!0 === a.b ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.b));
        null != a.g && !0 !== a.g && (c.gfwrnher = a.g);
        a.C && (c.google_bfa = a.C);
        a.ea && (c.ebfa = a.ea);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.i || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.a.a(b);
        var e = a.a.height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height = e;
            var f = a.a;
            b = f.a(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.fa;
            null != a.c && (c.armr = a.c);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.b && (c.gfwrnh = a.a.height() + "px")
        }
        null != a.pa && (c.gfwroml = a.pa);
        null != a.qa && (c.gfwromr = a.qa);
        null != a.i && (c.gfwroh = a.i);
        null != a.m && (c.gfwrow = a.m);
        null != a.ra && (c.gfwroz = a.ra);
        null != a.ga && (c.gml = a.ga);
        null != a.la && (c.gmr = a.la);
        null != a.X && (c.gzi = a.X);
        b = ud();
        b = H(b) || b;
        we(b.location, "google_responsive_slot_debug") && (c.ds = "outline:thick dashed " + (d && e ? !0 !== a.b || !0 !== a.g ? "#ffa500" : "#0f0" : "#f00") + " !important;");
        !we(b.location, "google_responsive_dummy_ad") || !La([1, 2, 3, 4, 5, 6, 7, 8], a.fa) && 1 !== a.c || c.google_ad_resize || 2 === a.c || (a = JSON.stringify({
            googMsgType: "adpnt",
            key_value: [{
                key: "qid",
                value: "DUMMY_AD"
            }]
        }), c.dash = "<" + Of + ">window.top.postMessage('" + a + "', '*');\n          </" + Of + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    /*

     Copyright 2019 The AMP HTML Authors. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS-IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var Rf = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Sf(a, b) {
        Q.call(this, a, b)
    }
    la(Sf, Q);
    Sf.prototype.a = function() {
        return this.minWidth()
    };
    var Tf = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function Uf(a, b) {
        Q.call(this, a, b)
    }
    la(Uf, Q);
    Uf.prototype.a = function() {
        return Math.min(1200, this.minWidth())
    };

    function Vf(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function Wf(a, b) {
        for (var c = Xf.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var S = [new R(970, 90, 2), new R(728, 90, 2), new R(468, 60, 2), new R(336, 280, 1), new R(320, 100, 2), new R(320, 50, 2), new R(300, 600, 4), new R(300, 250, 1), new R(250, 250, 1), new R(234, 60, 2), new R(200, 200, 1), new R(180, 150, 1), new R(160, 600, 4), new R(125, 125, 1), new R(120, 600, 4), new R(120, 240, 4), new R(120, 120, 1, !0)],
        Xf = [S[6], S[12], S[3], S[0], S[7], S[14], S[1], S[8], S[10], S[4], S[15], S[2], S[11], S[5], S[13], S[9], S[16]];

    function Yf(a, b, c, d, e) {
        var f = le(247, function() {
                if ("false" != e.google_full_width_responsive || c.location && "#gfwrffwaifhp" == c.location.hash)
                    if ("autorelaxed" == b && (e.google_full_width_responsive || I(c, wf.h)) || Zf(b) || e.google_ad_resize) {
                        var u = Qe(c, d, a, .3, e);
                        if (!0 === u) {
                            u = O(c);
                            var V = u - a;
                            u = u && 0 <= V ? !0 : u ? -10 > V ? 11 : 0 > V ? 14 : 12 : 10;
                            u = "true" == e.google_full_width_responsive || Oe(d, c) ? u : 9
                        }
                        u = !0 !== u ? {
                            o: a,
                            s: u
                        } : {
                            o: O(c) || a,
                            s: !0
                        }
                    } else u = {
                        o: a,
                        s: 2
                    };
                else u = {
                    o: a,
                    s: 1
                };
                V = u;
                u = V.o;
                V = V.s;
                if (!0 !== V) u = {
                    o: a,
                    s: V
                };
                else {
                    var ha = D(d, c);
                    if (ha) {
                        var Da = Re(ha, u, a);
                        ha = Da.direction;
                        Da = Se(d, e, Da.ha, ha, Da.ba);
                        ha = "rtl" == ha;
                        u = {
                            o: u,
                            s: V,
                            marginLeft: ha ? void 0 : Da,
                            marginRight: ha ? Da : void 0,
                            zIndex: 30
                        }
                    } else u = {
                        o: a,
                        s: V
                    }
                }
                return u
            }),
            g = f.s,
            h = f.marginLeft,
            k = f.marginRight,
            l = f.zIndex,
            r = e.google_ad_height || 0,
            q = $f(f.o, b, c, d, e, !0 === g);
        f = q.B;
        var p = q.w,
            n = q.u,
            y = q.v,
            K = q.U;
        q = q.da;
        var M = ag(b, K);
        return new Pf(M, f, K, null, q, g, p, n, y, "", "", r, a, "", h, k, l)
    }

    function Zf(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function $f(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, O(c)) ? 4 : 3 : Pe(b);
        var g = !1,
            h = !1;
        if (488 > O(c)) {
            var k = Oe(d, c);
            var l = Kf(d, c);
            g = !l && k;
            h = l && k
        }
        l = [If(a), Jf(488 > O(c), c, d, h), Gf(b)];
        null != e.google_max_responsive_height && l.push(Mf(e.google_max_responsive_height));
        var r = [function(p) {
            return !p.xa
        }];
        if (g || h) g = Nf(c, d), r.push(Mf(g));
        var q = Wf(Vf(l), Vf(r));
        if (!q) throw new L("No slot size for availableWidth=" + a);
        h = le(248, function() {
            var p;
            a: if (f) {
                if (e.gfwrnh && (p = fc(e.gfwrnh))) {
                    p = {
                        B: new Sf(a, p),
                        w: !0,
                        u: !1,
                        v: !1
                    };
                    break a
                }
                p = !1;
                var n = se(c).clientHeight,
                    y = Me(d, c),
                    K = c.google_lpabyc;
                var M = Me(d, c);
                var u = se(c).clientHeight;
                if ((M = 0 == u ? null : M / u) && 2 < M && !c.google_bfabyc && (!K || y - K > n) && (n = .9 * se(c).clientHeight, y = Math.min(n, bg(c, d, e)), n && y == n)) {
                    y = c.google_pbfabyc;
                    p = !y;
                    if (I(c, mf.H) || I(c, mf.G)) {
                        c.google_bfabyc = Me(d, c) + n;
                        p = {
                            B: new Sf(a, Math.floor(n)),
                            w: !0,
                            u: !0,
                            v: !0
                        };
                        break a
                    }
                    y || (c.google_pbfabyc = Me(d, c) + n)
                }
                n = a / 1.2;
                y = Math.min(n, bg(c, d, e));
                if (y < .5 * n || 100 > y) y = n;
                if (I(c, Af.J) || I(c, Af.I) || I(c, Af.D) || I(c, Af.F)) y *= 1.3;
                p = {
                    B: new Sf(a, Math.floor(y)),
                    w: y < n ? 102 : !0,
                    u: !1,
                    v: p
                }
            } else p = {
                B: q,
                w: 100,
                u: !1,
                v: !1
            };
            return p
        });
        g = h.B;
        l = h.w;
        r = h.u;
        h = h.v;
        return cg(c) ? {
            B: dg(a, c, d, g, e),
            w: !1,
            u: !1,
            v: !1,
            U: b,
            da: k
        } : {
            B: g,
            w: l,
            u: r,
            v: h,
            U: b,
            da: k
        }
    }

    function bg(a, b, c) {
        if (c.google_resizing_allowed || "true" == c.google_full_width_responsive) a = Infinity;
        else {
            c = Infinity;
            do {
                var d = Hf(b, a, "height");
                d && (c = Math.min(c, d));
                (d = Hf(b, a, "maxHeight")) && (c = Math.min(c, d))
            } while ((b = b.parentElement) && "HTML" != b.tagName);
            a = c
        }
        return a
    }

    function ag(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function dg(a, b, c, d, e) {
        var f = e.google_ad_height || Hf(c, b, "height");
        a: {
            var g = a;a = e.google_ad_layout || "image-top";
            if ("in-article" == a) {
                var h = g;
                if ("false" == e.google_full_width_responsive) g = h;
                else if (g = Qe(b, c, h, .2, e), !0 !== g) e.gfwrnwer = g, g = h;
                else if (g = O(b)) {
                    e.google_full_width_responsive_allowed = !0;
                    var k = c.parentElement;
                    if (k) {
                        c: for (var l = c, r = 0; 100 > r && l.parentElement; ++r) {
                            for (var q = l.parentElement.childNodes, p = 0; p < q.length; ++p) {
                                var n = q[p];
                                if (n != l && Ue(b, n)) break c
                            }
                            l = l.parentElement;
                            l.style.width = "100%";
                            l.style.height = "auto"
                        }
                        if (G(189) || b.location && "#hffwroe2etoh" == b.location.hash) k = (k = c.parentElement) ? (k = D(k, b)) ? k.direction : "" : "",
                        k && (Te(c, k, "0px"), c.style.width = O(b) + "px", 0 !== Ve(b, c, k) && (Te(c, k, "0px"), h = Ve(b, c, k), Te(c, k, -1 * h + "px"), l = Ve(b, c, k), 0 !== l && l !== h && Te(c, k, h / (l - h) * h + "px")), c.style.zIndex = 30, G(224) && (c.style.border = c.style.borderStyle = c.style.outline = c.style.outlineStyle = "none", c.style.borderSpacing = c.style.padding = "0"));
                        else if (l = D(k, b)) h = Re(l, g, h),
                        l = h.direction,
                        Te(c, l, Se(k, e, h.ha, l, h.ba)),
                        c.style.width = g + "px",
                        c.style.zIndex = 30
                    }
                    else g = h
                } else g = h
            }
            if (250 > g) throw new L("Fluid responsive ads must be at least 250px wide: availableWidth=" + g);g = Math.min(1200, Math.floor(g));
            if (f && "in-article" != a) {
                a = Math.ceil(f);
                if (50 > a) throw new L("Fluid responsive ads must be at least 50px tall: height=" + a);
                a = new Pf(11, new Q(g, a))
            } else {
                if ("in-article" != a && (e = e.google_ad_layout_key)) {
                    a = "" + e;
                    b = Math.pow(10, 3);
                    if (e = (c = a.match(/([+-][0-9a-z]+)/g)) && c.length) {
                        f = [];
                        for (k = 0; k < e; k++) f.push(parseInt(c[k], 36) / b);
                        b = f
                    } else b = null;
                    if (!b) throw new L("Invalid data-ad-layout-key value: " + a);
                    a = (g + -725) / 1E3;
                    c = 0;
                    e = 1;
                    f = b.length;
                    for (k = 0; k < f; k++) c += b[k] * e, e *= a;
                    a = Math.ceil(1E3 * c - -725 + 10);
                    if (isNaN(a)) throw new L("Invalid height: height=" + a);
                    if (50 > a) throw new L("Fluid responsive ads must be at least 50px tall: height=" + a);
                    if (1200 < a) throw new L("Fluid responsive ads must be at most 1200px tall: height=" + a);
                    a = new Pf(11, new Q(g, a));
                    break a
                }
                e = Tf[a];
                if (!e) throw new L("Invalid data-ad-layout value: " + a);
                c = Kf(c, b);
                b = O(b);
                b = "in-article" !== a || c || g !== b ? Math.ceil(e(g)) : Math.ceil(1.25 * e(g));
                a = new Pf(11, "in-article" == a ? new Uf(g, b) : new Q(g, b))
            }
        }
        a = a.a;
        return a.minWidth() * a.height() > d.minWidth() * d.height() ? a : d
    }

    function cg(a) {
        return G(227) || a.location && "#hffwroe2etoq" == a.location.hash
    };

    function eg(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = ba(Rf), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (Zf(c)) return 1;
        if ("link" == c) return 4;
        if ("fluid" == c) return "in-article" === b.google_ad_layout && (G(208) || G(227) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash)) ? (b.google_ad_format = "auto", b.armr = 3, 1) : 8
    };

    function T(a) {
        this.g = [];
        this.b = a || window;
        this.a = 0;
        this.c = null;
        this.i = 0
    }
    var fg;
    m = T.prototype;
    m.ua = function(a, b) {
        0 != this.a || 0 != this.g.length || b && b != window ? this.$(a, b) : (this.a = 2, this.ka(new gg(a, window)))
    };
    m.$ = function(a, b) {
        this.g.push(new gg(a, b || this.b));
        hg(this)
    };
    m.za = function(a) {
        this.a = 1;
        if (a) {
            var b = me(188, Ba(this.ja, this, !0));
            this.c = this.b.setTimeout(b, a)
        }
    };
    m.ja = function(a) {
        a && ++this.i;
        1 == this.a && (null != this.c && (this.b.clearTimeout(this.c), this.c = null), this.a = 0);
        hg(this)
    };
    m.Ga = function() {
        return !(!window || !Array)
    };
    m.wa = function() {
        return this.i
    };

    function hg(a) {
        var b = me(189, Ba(a.Ha, a));
        a.b.setTimeout(b, 0)
    }
    m.Ha = function() {
        if (0 == this.a && this.g.length) {
            var a = this.g.shift();
            this.a = 2;
            var b = me(190, Ba(this.ka, this, a));
            a.a.setTimeout(b, 0);
            hg(this)
        }
    };
    m.ka = function(a) {
        this.a = 0;
        a.b()
    };

    function ig(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function jg(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && ig(a) && od(a.nq) && od(a.nqa) && od(a.al) && od(a.rl)
    }

    function kg() {
        if (fg && ig(fg)) return fg;
        var a = Ge(),
            b = a.google_jobrunner;
        return jg(b) ? fg = b : a.google_jobrunner = fg = new T(a)
    }

    function lg(a, b) {
        kg().nq(a, b)
    }

    function mg(a, b) {
        kg().nqa(a, b)
    }
    T.prototype.nq = T.prototype.ua;
    T.prototype.nqa = T.prototype.$;
    T.prototype.al = T.prototype.za;
    T.prototype.rl = T.prototype.ja;
    T.prototype.sz = T.prototype.Ga;
    T.prototype.tc = T.prototype.wa;

    function gg(a, b) {
        this.b = a;
        this.a = b
    };

    function ng() {
        var a = {};
        this[3] = (a[23] = function(b) {
            return Ze(Jb, parseInt(b, 10))
        }, a[24] = function(b) {
            return af(Jb, parseInt(b, 10))
        }, a);
        this[4] = {};
        this[5] = {}
    }
    ua(ng);
    var og = new Td(200, 399, 0),
        pg = new Td(600, 699, 0),
        qg = new Td(800, 899, 0),
        rg = new Td(0, 999, 5),
        sg = new Td(400, 499, 6);

    function tg(a) {
        a = void 0 === a ? t : a;
        return a.ggeac || (a.ggeac = {})
    };

    function ug() {
        var a = {};
        this[3] = (a[8] = function(b) {
            return !!sa(b)
        }, a[9] = function(b) {
            b = sa(b);
            var c;
            if (c = "function" == va(b)) b = b && b.toString && b.toString(), c = "string" === typeof b && ab(b, "[native code]");
            return c
        }, a[10] = function() {
            return window == window.top
        }, a[22] = function() {
            return gc()
        }, a);
        a = {};
        this[4] = (a[5] = function(b) {
            b = Ud(window, void 0 === b ? 0 : b);
            return null != b ? b : void 0
        }, a[6] = function(b) {
            b = sa(b);
            return "number" === typeof b ? b : void 0
        }, a);
        a = {};
        this[5] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = sa(b);
            return "string" === typeof b ? b : void 0
        }, a)
    }
    ua(ug);

    function vg(a) {
        z(this, a, wg, null)
    }
    v(vg, x);
    var wg = [2];
    vg.prototype.L = function() {
        return B(this, 7, 0)
    };

    function xg(a) {
        z(this, a, yg, null)
    }
    v(xg, x);
    var yg = [2];
    xg.prototype.L = function() {
        return B(this, 5, 0)
    };

    function zg(a) {
        z(this, a, Ag, null)
    }
    v(zg, x);

    function Bg(a) {
        z(this, a, Cg, null)
    }
    v(Bg, x);
    var Ag = [1, 2],
        Cg = [2];
    Bg.prototype.L = function() {
        return B(this, 1, 0)
    };
    var Dg = [12, 13];

    function Eg(a, b) {
        var c = this,
            d = void 0 === b ? {} : b;
        b = void 0 === d.aa ? !1 : d.aa;
        var e = void 0 === d.ya ? {} : d.ya;
        d = void 0 === d.Ea ? [] : d.Ea;
        this.a = a;
        this.i = b;
        this.c = e;
        this.g = d;
        this.b = {};
        (a = Wd()) && Fa(a.split(",") || [], function(f) {
            (f = parseInt(f, 10)) && (c.b[f] = !0)
        })
    }

    function Fg(a, b) {
        var c = [],
            d = Gg(a.a, b);
        d.length && (9 !== b && (a.a = Hg(a.a, b)), Fa(d, function(e) {
            if (e = Ig(a, e)) {
                var f = B(e, 1, 0);
                c.push(f);
                a.g.push(f);
                (e = C(e, Bc, 2)) && Rc(e)
            }
        }));
        return c
    }

    function Jg(a, b) {
        a.a.push.apply(a.a, ca(Ga(Ha(b, function(c) {
            return new Bg(c)
        }), function(c) {
            return !La(Dg, c.L())
        })))
    }

    function Ig(a, b) {
        var c = Fc.j().a;
        if (!yc(zb(b, rc, 3), c)) return null;
        var d = C(b, vg, 2),
            e = d.length * B(b, 1, 0),
            f = B(b, 6, 0);
        if (f) {
            e = Ud(window, f);
            if (null === e) return null;
            b = Kg(b, e);
            return !b || c && !yc(zb(b, rc, 3), c) ? null : Lg(a, [b], 1)
        }
        d = c ? Ga(d, function(g) {
            return yc(zb(g, rc, 3), c)
        }) : d;
        return d.length ? (b = B(b, 4, 0)) ? Mg(a, b, e, d) : Lg(a, d, e / 1E3) : null
    }

    function Mg(a, b, c, d) {
        var e = null != a.c[b] ? a.c[b] : 1E3;
        if (0 >= e) return null;
        d = Lg(a, d, c / e);
        a.c[b] = d ? 0 : e - c;
        return d
    }

    function Lg(a, b, c) {
        var d = a.b,
            e = Ja(b, function(f) {
                return !!d[B(f, 1, 0)]
            });
        return e ? e : a.i ? null : Vb(b, c, !1)
    }

    function Ng(a, b) {
        F(Tc, function(c) {
            a.b[c] = !0
        }, b);
        F(Uc, function(c) {
            return Fg(a, c)
        }, b);
        F(Vc, function() {
            return a.g
        }, b);
        F(dd, function(c) {
            return Jg(a, c)
        }, b)
    }

    function Gg(a, b) {
        return (a = Ja(a, function(c) {
            return c.L() == b
        })) && C(a, xg, 2) || []
    }

    function Hg(a, b) {
        return Ga(a, function(c) {
            return c.L() != b
        })
    }

    function Kg(a, b) {
        var c = C(a, vg, 2),
            d = c.length,
            e = B(a, 1, 0);
        a = B(a, 8, 0);
        var f = (b - a) % d;
        return b < a || b - a - f >= d * (e - 1) ? null : c[f]
    };

    function Og() {
        this.a = function() {}
    }
    ua(Og);

    function Pg(a) {
        Og.j().a(a)
    };

    function Qg(a, b, c, d) {
        d = void 0 === d ? tg() : d;
        d.hasOwnProperty("init-done") ? (gd(dd, d)(Ha(C(a, Bg, 2), function(e) {
            return e.a
        })), gd(ed, d)(Ha(C(a, Bc, 1), function(e) {
            return e.a
        })), b && gd(fd, d)(b), Rg(d)) : (Ng(new Eg(C(a, Bg, 2), c), d), hd(d), id(d), jd(d), Rg(d), Rc(C(a, Bc, 1)), Pg(ug.j()), b && Pg(b))
    }

    function Rg(a) {
        var b = a = void 0 === a ? tg() : a;
        ff(ef.j(), b);
        b = a;
        kd.j().a = gd(Xc, b);
        Og.j().a = gd(fd, a)
    };

    function U(a, b) {
        b && a.push(b)
    }

    function Sg(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        d = H(a) || a;
        d = (d = (d = d.location && d.location.hash) && (d.match(/google_plle=([\d,]+)/) || d.match(/deid=([\d,]+)/))) && d[1];
        return !!d && Ia(c, Ca(ab, d))
    }

    function W(a, b, c) {
        for (var d = 0; d < c.length; d++)
            if (Sg(a, c[d])) return c[d];
        return Bf(a) ? null : Vb(c, b)
    }

    function Tg(a, b, c, d, e, f) {
        f = void 0 === f ? 1 : f;
        for (var g = 0; g < e.length; g++)
            if (Sg(a, e[g])) return e[g];
        Bf(a) ? c = null : (f = void 0 === f ? 1 : f, 0 >= d ? c = null : (g = new Sd(c, c + d - 1), (d = d % f || d / f % e.length) || (d = b.b, d = !(d.start <= g.start && d.a >= g.a)), d ? c = null : (a = Ud(a, b.a), c = null !== a && g.start <= a && g.a >= a ? e[Math.floor((a - c) / f) % e.length] : null)));
        return c
    };

    function Ug(a, b) {
        var c = H(b);
        if (c) {
            c = O(c);
            var d = D(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" != d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function Vg(a) {
        var b = this;
        this.a = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {},
            upd: function(c, d) {
                var e = Wg("rx", c),
                    f = Number;
                a: {
                    if (c && (c = c.match("dt=([^&]+)")) && 2 == c.length) {
                        c = c[1];
                        break a
                    }
                    c = ""
                }
                f = f(c);
                f = (new Date).getTime() - f;
                e = e.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= f ? "M" : 0 <= f ? f : "-M"));
                b.set(d, e);
                return e
            }
        });
        this.b = a.google_iframe_oncopy
    }
    Vg.prototype.set = function(a, b) {
        var c = this;
        this.b.handlers[a] = b;
        this.a.addEventListener && this.a.addEventListener("load", function() {
            var d = c.a.document.getElementById(a);
            try {
                var e = d.contentWindow.document;
                if (d.onload && e && (!e.body || !e.body.firstChild)) d.onload()
            } catch (f) {}
        }, !1)
    };

    function Wg(a, b) {
        var c = new RegExp("\\b" + a + "=(\\d+)"),
            d = c.exec(b);
        d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
        return b
    }
    var Xg, Yg = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
    var X = Yg;
    /[\x00&<>"']/.test(X) && (-1 != X.indexOf("&") && (X = X.replace(Va, "&amp;")), -1 != X.indexOf("<") && (X = X.replace(Wa, "&lt;")), -1 != X.indexOf(">") && (X = X.replace(Xa, "&gt;")), -1 != X.indexOf('"') && (X = X.replace(Ya, "&quot;")), -1 != X.indexOf("'") && (X = X.replace(Za, "&#39;")), -1 != X.indexOf("\x00") && (X = X.replace($a, "&#0;")));
    Yg = X;
    Xg = Yg;
    var Zg = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_semantic_area google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_apsail google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ad_positions google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_content_recommendation_use_square_imgs google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_bfa ebfa ebfaca google_eids google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed efwr google_full_width_responsive gfwroh gfwrow gfwroml gfwromr gfwroz gfwrnh gfwrnwer gfwrnher google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_max_responsive_height google_ml_rank google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_only_pyv_ads google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width rpe google_responsive_formats google_responsive_auto_format armr google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_tag_origin google_tag_partner google_targeting google_tfs google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_yt_pt google_yt_up google_package google_debug_params google_enable_single_iframe dash google_refresh_count".split(" "),
        $g = {},
        ah = ($g.google_ad_modifications = !0, $g.google_analytics_domain_name = !0, $g.google_analytics_uacct = !0, $g.google_pause_ad_requests = !0, $g);

    function bh(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null
    }

    function ch(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
        return null
    }

    function dh(a) {
        try {
            a: {
                var b = a.document.getElementsByTagName("script"),
                    c = a.navigator && a.navigator.userAgent || "",
                    d;
                if (!(d = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(c))) {
                    var e;
                    if (e = /i(phone|pad|pod)/i.test(c)) {
                        var f;
                        if (f = /applewebkit/i.test(c) && !/version|safari/i.test(c)) {
                            var g = void 0 === g ? Jb : g;
                            try {
                                var h = !(!g.navigator.standalone && !wd(g).navigator.standalone)
                            } catch (n) {
                                h = !1
                            }
                            f = !h
                        }
                        e = f
                    }
                    d = e
                }
                c = d ? bh : ch;
                for (var k = b.length - 1; 0 <= k; k--) {
                    var l = b[k];
                    if (!l.google_parsed_script) {
                        l.google_parsed_script = !0;
                        var r = c(l);
                        if (r) {
                            var q = r;
                            break a
                        }
                    }
                }
                q = null
            }
        }
        catch (n) {
            return !1
        }
        if (!q) return !1;
        try {
            b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
            k = {};
            for (var p; p = b.exec(q);) k[p[1]] = eh(p[2]);
            fh(k, a)
        } catch (n) {
            return !1
        }
        return !!a.google_ad_client
    }

    function gh(a) {
        for (var b = 0, c = Zg.length; b < c; b++) {
            var d = Zg[b];
            ah[d] || (a[d] = null)
        }
    }

    function eh(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    }

    function fh(a, b) {
        for (var c = 0; c < Zg.length; c++) {
            var d = Zg[c];
            null == b[d] && null != a[d] && (b[d] = a[d])
        }
    };

    function hh(a) {
        switch (a) {
            case "":
            case "Test":
            case "Real":
                return !0;
            default:
                return !1
        }
    }

    function ih(a, b) {
        this.c = a;
        this.b = void 0 === b ? !1 : b;
        this.a = new Pb(a.document)
    }

    function jh(a) {
        var b = a.a.get("__gads", "");
        return a.b && !hh(b) ? "Real" : b
    }
    ih.prototype.write = function(a) {
        var b = A(a, 1);
        if (this.b) {
            if (!hh(this.a.get("__gads", ""))) return;
            hh(b) || (b = "Real")
        }
        this.a.set("__gads", b, A(a, 2) - this.c.Date.now() / 1E3, A(a, 3), A(a, 4), !1)
    };
    var kh = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        lh = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;

    function mh(a) {
        return kh.test(a) && !lh.test(a)
    }
    var nh = t;

    function oh(a) {
        a = "https://adservice" + (a + "/adsid/integrator.js");
        var b = ["domain=" + encodeURIComponent(t.location.hostname)];
        Y[3] >= +new Date && b.push("adsid=" + encodeURIComponent(Y[1]));
        return a + "?" + b.join("&")
    }
    var Y, Z;

    function ph() {
        nh = t;
        Y = nh.googleToken = nh.googleToken || {};
        var a = +new Date;
        Y[1] && Y[3] > a && 0 < Y[2] || (Y[1] = "", Y[2] = -1, Y[3] = -1, Y[4] = "", Y[6] = "");
        Z = nh.googleIMState = nh.googleIMState || {};
        mh(Z[1]) || (Z[1] = ".google.com");
        wa(Z[5]) || (Z[5] = []);
        "boolean" !== typeof Z[6] && (Z[6] = !1);
        wa(Z[7]) || (Z[7] = []);
        "number" !== typeof Z[8] && (Z[8] = 0)
    }
    var qh = {
        R: function() {
            return 0 < Z[8]
        },
        Ba: function() {
            Z[8]++
        },
        Ca: function() {
            0 < Z[8] && Z[8]--
        },
        Da: function() {
            Z[8] = 0
        },
        La: function() {
            return !1
        },
        va: function() {
            return Z[5]
        },
        ta: function(a) {
            try {
                a()
            } catch (b) {
                t.setTimeout(function() {
                    throw b;
                }, 0)
            }
        },
        Aa: function() {
            if (!qh.R()) {
                var a = t.document,
                    b = function(e) {
                        e = oh(e);
                        a: {
                            try {
                                var f = pa();
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        We(a, e, f);
                        f = a.createElement("script");
                        f.type = "text/javascript";
                        f.onerror = function() {
                            return t.processGoogleToken({}, 2)
                        };
                        e = Rb(e);
                        pb(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), qh.Ba()
                        } catch (g) {}
                    },
                    c = Z[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT", b);
                t.setTimeout(function() {
                    return t.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    };

    function rh() {
        t.processGoogleToken = t.processGoogleToken || function(a, b) {
            var c = a;
            c = void 0 === c ? {} : c;
            b = void 0 === b ? 0 : b;
            a = c.newToken || "";
            var d = "NT" == a,
                e = parseInt(c.freshLifetimeSecs || "", 10),
                f = parseInt(c.validLifetimeSecs || "", 10),
                g = c["1p_jar"] || "";
            c = c.pucrd || "";
            ph();
            1 == b ? qh.Da() : qh.Ca();
            var h = nh.googleToken = nh.googleToken || {},
                k = 0 == b && a && "string" === typeof a && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
            d = d && !qh.R() && (!(Y[3] >= +new Date) || "NT" == Y[1]);
            var l = !(Y[3] >= +new Date) && 0 != b;
            if (k || d || l) d = +new Date, e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && ic("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + b, null), h[5] = b, h[1] = a, h[2] = e, h[3] = f, h[4] = g, h[6] = c, ph();
            if (k || !qh.R()) {
                b = qh.va();
                for (a = 0; a < b.length; a++) qh.ta(b[a]);
                b.length = 0
            }
        };
        ph();
        Y[3] >= +new Date && Y[2] >= +new Date || qh.Aa()
    };
    var sh = sb("script");

    function th(a) {
        a.google_sa_impl && !a.document.getElementById("google_shimpl") && (a.google_sa_queue = null, a.google_sl_win = null, a.google_sa_impl = null)
    }

    function uh(a) {
        th(a);
        if (!a.google_sa_queue) {
            a.google_sa_queue = [];
            a.google_sl_win = a;
            a.google_process_slots = function() {
                return vh(a)
            };
            var b = wh();
            We(a.document, b);
            I(a, "20199335") || !mb() || w("iPhone") && !w("iPod") && !w("iPad") || w("iPad") || w("iPod") ? Ub(a.document, b).id = "google_shimpl" : (b = Qb(), b.id = "google_shimpl", b.style.display = "none", a.document.documentElement.appendChild(b), ve(a, "google_shimpl", "<!doctype html><html><body><" + (sh + ">google_sl_win=window.parent;google_async_iframe_id='google_shimpl';</") + (sh + ">") + xh() + "</body></html>"), b.contentWindow.document.close())
        }
    }
    var vh = me(215, function(a) {
        var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || ne("shimpl", {
            t: "no_fn"
        });
        "function" == va(c) && le(216, c);
        b.length && a.setTimeout(function() {
            return vh(a)
        }, 0)
    });

    function yh(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function xh() {
        var a = wh();
        return "<" + sh + ' src="' + a + '"></' + sh + ">"
    }

    function wh() {
        var a = "/show_ads_impl.js";
        a = void 0 === a ? "/show_ads_impl.js" : a;
        return Ce(vd(), ["/pagead/js/", lc(), "/r20190131", a, ""].join(""), "https")
    }

    function zh(a, b, c, d) {
        return function() {
            var e = !1;
            d && kg().al(3E4);
            try {
                ve(a, b, c), e = !0
            } catch (g) {
                var f = Ge().google_jobrunner;
                jg(f) && f.rl()
            }
            e && (e = Wg("google_async_rrc", c), (new Vg(a)).set(b, zh(a, b, e, !1)))
        }
    }

    function Ah(a) {
        if (!ye) a: {
            for (var b = [t.top], c = [], d = 0, e; e = b[d++];) {
                c.push(e);
                try {
                    if (e.frames)
                        for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g])
                } catch (k) {}
            }
            for (b = 0; b < c.length; b++) try {
                var h = c[b].frames.google_esf;
                if (h) {
                    ye = h;
                    break a
                }
            } catch (k) {}
            ye = null
        }
        if (!ye) {
            if (/[^a-z0-9-]/.test(a)) return null;
            c = Qb();
            c.id = "google_esf";
            c.name = "google_esf";
            h = Be(kc("", "googleads.g.doubleclick.net"), ["/pagead/html/", lc(), "/r20190131/zrt_lookup.html#", encodeURIComponent("")].join(""));
            c.src = h;
            c.style.display = "none";
            c.setAttribute("data-ad-client", te(a));
            return c
        }
        return null
    }

    function Bh(a, b) {
        var c = b.google_ad_width,
            d = b.google_ad_height;
        I(a, yf.h) ? (oe(!0), b.google_enable_single_iframe = !0) : I(a, yf.f) && oe(!1);
        var e = {};
        null != c && (e.width = c && '"' + c + '"');
        null != d && (e.height = d && '"' + d + '"');
        e.frameborder = '"0"';
        e.marginwidth = '"0"';
        e.marginheight = '"0"';
        e.vspace = '"0"';
        e.hspace = '"0"';
        e.allowtransparency = '"true"';
        e.scrolling = '"no"';
        e.allowfullscreen = '"true"';
        e.onload = '"' + Xg + '"';
        c = ue(a, e, b);
        Ch(a, b);
        (d = Ah(b.google_ad_client)) && a.document.documentElement.appendChild(d);
        d = (new Date).getTime();
        b.google_lrv = lc();
        b.google_async_iframe_id = c;
        b.google_unique_id = rd(a);
        b.google_start_time = Ea;
        b.google_bpp = d > Ea ? d - Ea : 1;
        b.google_async_rrc = 0;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[c] = b;
        a.google_t12n_vars = Ie;
        if (b.google_enable_single_iframe) {
            var f = {
                pubWin: a,
                iframeWin: null,
                vars: b
            };
            yh(a, function() {
                a.google_sa_impl(f)
            }, a.document.getElementById(c + "_anchor") ? lg : mg)
        } else yh(a, zh(a, c, ["<!doctype html><html><body>", "<" + sh + ">", "google_sl_win=window.parent;google_iframe_start_time=new Date().getTime();", 'google_async_iframe_id="' + c + '";', "</" + sh + ">", "<" + sh + ">window.parent.google_sa_impl({iframeWin: window, pubWin: window.parent, vars: window.parent['google_sv_map']['" + (c + "']});</") + sh + ">", "</body></html>"].join(""), !0), a.document.getElementById(c) ? lg : mg)
    }

    function Ch(a, b) {
        var c = b.google_ad_output,
            d = b.google_ad_format,
            e = b.google_ad_width || 0,
            f = b.google_ad_height || 0;
        d || "html" != c && null != c || (d = e + "x" + f);
        c = !b.google_ad_slot || b.google_override_format || !Nb[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
        d && c ? d = d.toLowerCase() : d = "";
        b.google_ad_format = d;
        if ("number" != typeof b.google_reactive_sra_index || !b.google_ad_unit_key) {
            d = [b.google_ad_slot, b.google_orig_ad_format || b.google_ad_format, b.google_ad_type, b.google_orig_ad_width || b.google_ad_width, b.google_orig_ad_height || b.google_ad_height];
            c = [];
            e = 0;
            for (f = Kb.parentElement; f && 25 > e; f = f.parentNode, ++e) 9 === f.nodeType ? c.push("") : c.push(f.id);
            (c = c.join()) && d.push(c);
            b.google_ad_unit_key = $b(d.join(":")).toString();
            d = Kb;
            var g = void 0 === g ? !1 : g;
            c = [];
            for (e = 0; d && 25 > e; ++e) {
                f = "";
                void 0 !== g && g || (f = (f = 9 !== d.nodeType && d.id) ? "/" + f : "");
                a: {
                    if (d && d.nodeName && d.parentElement) {
                        var h = d.nodeName.toString().toLowerCase();
                        for (var k = d.parentElement.childNodes, l = 0, r = 0; r < k.length; ++r) {
                            var q = k[r];
                            if (q.nodeName && q.nodeName.toString().toLowerCase() === h) {
                                if (d === q) {
                                    h = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    h = ""
                }
                c.push((d.nodeName && d.nodeName.toString().toLowerCase()) + f + h);
                d = d.parentElement
            }
            g = c.join() + ":";
            d = [];
            if (a) try {
                var p = a.parent;
                for (c = 0; p && p !== a && 25 > c; ++c) {
                    var n = p.frames;
                    for (e = 0; e < n.length; ++e)
                        if (a === n[e]) {
                            d.push(e);
                            break
                        }
                    a = p;
                    p = a.parent
                }
            } catch (y) {}
            b.google_ad_dom_fingerprint = $b(g + d.join()).toString()
        }
    }
    var Dh = !oc;

    function Eh(a) {
        var b = a.value,
            c = "https://partner.googleadservices.com/gampad/cookie.js?domain=" + a.domain + "&callback=_gfp_s_&client=" + a.Ja;
        a.Ia && (c += "&test=1");
        b && (c += "&cookie=" + encodeURIComponent(b) + "&crv=" + Number("Test" !== b));
        return c
    }

    function Fh(a, b) {
        var c = void 0 === c ? Eh : c;
        var d = a._gfp_a_;
        if ("boolean" !== typeof d) throw Error("Illegal value of _gfp_a_: " + d);
        if (d) {
            d = a._gfp_p_;
            if ("boolean" !== typeof d) throw Error("Illegal value of _gfp_p_: " + d);
            if (!d) {
                if (G(225)) {
                    d = G(226);
                    var e = new ih(a, d);
                    navigator.cookieEnabled && (a._gfp_s_ = me(629, function(f) {
                        delete a._gfp_s_;
                        if (!f) throw Error("Invalid JSONP response");
                        if (f = f._cookies_) {
                            var g = f[0];
                            if (!g) throw Error("Invalid JSONP response");
                            f = g._value_;
                            var h = g._expires_,
                                k = g._path_;
                            g = g._domain_;
                            if ("string" !== typeof f || "number" !== typeof h || "string" !== typeof k || "string" !== typeof g) throw Error("Invalid JSONP response");
                            e.write(Hb(Gb(Fb(Eb(f), h), k), g))
                        }
                    }), Ub(a.document, c({
                        domain: a.location.hostname,
                        Ja: b,
                        Ia: d,
                        value: jh(e)
                    })))
                }
                a._gfp_p_ = !0
            }
        }
    };

    function Gh(a, b, c) {
        var d = window;
        return function() {
            var e = Yd(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (Yd() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    }

    function Hh(a, b) {
        return Gh(a, b, function(c, d) {
            (new ge).A(c, d)
        })
    };

    function Ih() {
        var a = this;
        this.b = this.i = this.c = this.a = 0;
        this.m = new PerformanceObserver(Hh(640, function(b) {
            b = ba(b.getEntries());
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                if ("layout-shift" === c.entryType) {
                    var d = c;
                    d.hadRecentInput || (a.a += Number(d.value), Number(d.value) > a.c && (a.c = Number(d.value)))
                }
                "largest-contentful-paint" === c.entryType && (d = c, a.i = Math.floor(d.renderTime || d.loadTime));
                "first-input" === c.entryType && (a.b = Number((c.processingStart - c.startTime).toFixed(3)))
            }
        }));
        this.C = !1;
        this.g = Hh(641, this.g.bind(this))
    }
    la(Ih, pe);
    Ih.prototype.g = function() {
        var a = document;
        if (2 === ({
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0) && !this.C) {
            this.C = !0;
            this.m.takeRecords();
            a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics&cls=" + this.a.toFixed(3);
            a += "&mls=" + this.c.toFixed(3);
            a += "&lcp=" + Math.floor(this.i);
            0 < this.b && (a += "&fid=" + this.b);
            var b = ef.j().b();
            a += "&eid=" + b.join();
            window.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            })
        }
    };
    (function(a) {
        N.V(function(b) {
            Fa(a, function(c) {
                c(b)
            });
            je(b);
            he && (b.jc = he);
            ke(b)
        })
    })([function(a) {
        a.shv = lc()
    }, function(a) {
        Zb(Ff, function(b, c) {
            try {
                null != t[b] && (a[c] = t[b])
            } catch (d) {}
        })
    }, function(a) {
        try {
            var b = xd(t).eids || [];
            null != b && 0 < b.length && (a.eid = b.join(","))
        } catch (c) {}
    }]);
    N.ma(function(a, b, c, d) {
        return 0 == (Cd(b) ? b.msg || fe(b.error) : fe(b)).indexOf("TagError") ? (c = b instanceof Bd ? b.error : b, c.pbr || (c.pbr = !0, N.A(a, b, .1, d, "puberror")), !1) : N.A(a, b, c, d)
    });
    le(158, function() {
        var a = window;
        if (!w("Trident") && !w("MSIE") || 0 <= bb(nb(), 11))
            if ("js" == a.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                var b = xd(a);
                if (!b.plle) {
                    b.plle = !0;
                    null == ac(a, "google_pem_mod") && bc(a, "google_pem_mod");
                    var c = [null, null];
                    try {
                        var d = JSON.parse("[[[186,null,null,[1]],[189,null,null,[1]],[null,30,null,[null,4]],[196,null,null,[1]]],[[12,[[1,[[21064123],[21064124]]],[10,[[21064522],[21064523,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\x22LayoutShift\x22]]]]],[13,[[null,[[21064708],[21064709,[[215,null,null,[1]]]]]]]],[10,[[7,[[20040008,[[202,null,null,[1]]]],[20040009,[[202,null,null,[1]],[182,null,null,[1]]]],[20040027,[[202,null,null,[1]],[182,null,null,[],[[[2,[[4,null,8,null,null,null,null,[\x22IntersectionObserver\x22]],[4,null,8,null,null,null,null,[\x22Proxy\x22]]]],[1]]]]]]]],[1,[[21062810],[21062811]]],[null,[[21063914],[21063915,[[225,null,null,[1]]]]]],[1,[[21063996],[21063997,[[160,null,null,[1]]]]]],[5,[[21064530],[21064531,[[205,null,null,[1]]]],[21064532,[[null,30,null,[null,3]]]],[21064533,[[205,null,null,[1]],[null,30,null,[null,3]]]],[21064534,[[null,29,null,[null,2]]]],[21064535,[[205,null,null,[1]],[null,29,null,[null,2]]]],[21064536,[[null,29,null,[null,2]],[null,30,null,[null,3]]]],[21064537,[[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]]]]]],[1,[[21064602],[21064603,[[226,null,null,[1]],[225,null,null,[1]]]]]],[200,[[21064714],[21064715,[[207,null,null,[1]]]]]],[1000,[[182982000,[[218,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x227\x22]],[7,null,null,5,null,40,null,[\x227\x22]]]]],[182982100,[[217,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x227\x22]],[7,null,null,5,null,40,null,[\x227\x22]]]]]]],[1000,[[182982200,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x227\x22]],[7,null,null,5,null,40,null,[\x227\x22]]]]],[182982300,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x227\x22]],[7,null,null,5,null,40,null,[\x227\x22]]]]]]],[1000,[[182983000,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2215\x22]],[7,null,null,5,null,1000,null,[\x2215\x22]],[4,null,24,null,null,null,null,[\x2211\x22]]]]],[182983100,[[219,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2215\x22]],[7,null,null,5,null,1000,null,[\x2215\x22]],[4,null,24,null,null,null,null,[\x2211\x22]]]]]]],[1000,[[182983200,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2215\x22]],[7,null,null,5,null,1000,null,[\x2215\x22]],[4,null,24,null,null,null,null,[\x2211\x22]]]]],[182983300,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2215\x22]],[7,null,null,5,null,1000,null,[\x2215\x22]],[4,null,24,null,null,null,null,[\x2211\x22]]]]]]],[1000,[[182984000,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2212\x22]],[7,null,null,5,null,20,null,[\x2212\x22]],[4,null,23,null,null,null,null,[\x221\x22]]]]],[182984100,[[218,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2212\x22]],[7,null,null,5,null,20,null,[\x2212\x22]],[4,null,23,null,null,null,null,[\x221\x22]]]]]]],[1000,[[182984200,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2212\x22]],[7,null,null,5,null,20,null,[\x2212\x22]],[4,null,23,null,null,null,null,[\x221\x22]]]]],[182984300,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2212\x22]],[7,null,null,5,null,20,null,[\x2212\x22]],[4,null,23,null,null,null,null,[\x221\x22]]]]]]],[1000,[[368226410,[[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2219\x22]],[7,null,null,5,null,20,null,[\x2219\x22]]]]],[368226411,[[224,null,null,[1]],[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2219\x22]],[7,null,null,5,null,20,null,[\x2219\x22]]]]]]],[1000,[[368226420,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2219\x22]],[7,null,null,5,null,20,null,[\x2219\x22]]]]],[368226421,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2219\x22]],[7,null,null,5,null,20,null,[\x2219\x22]]]]]]],[1000,[[368226430,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2219\x22]],[7,null,null,5,null,20,null,[\x2219\x22]]]]],[368226431,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2219\x22]],[7,null,null,5,null,20,null,[\x2219\x22]]]]]]],[1000,[[368226570,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2216\x22]],[7,null,null,5,null,20,null,[\x2216\x22]]]]],[368226571,[[210,null,null,[1]],[211,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2216\x22]],[7,null,null,5,null,20,null,[\x2216\x22]]]]]]],[1000,[[368226580,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2217\x22]],[7,null,null,5,null,20,null,[\x2217\x22]]]]],[368226581,[[222,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2217\x22]],[7,null,null,5,null,20,null,[\x2217\x22]]]]]]],[1000,[[368226590,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2217\x22]],[7,null,null,5,null,20,null,[\x2217\x22]]]]],[368226591,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2217\x22]],[7,null,null,5,null,20,null,[\x2217\x22]]]]]]],[1000,[[368226600,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2214\x22]],[7,null,null,5,null,20,null,[\x2214\x22]]]]],[368226601,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2214\x22]],[7,null,null,5,null,20,null,[\x2214\x22]]]]]]],[1000,[[368226610,[[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2214\x22]],[7,null,null,5,null,20,null,[\x2214\x22]]]]],[368226611,[[216,null,null,[1]],[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2214\x22]],[7,null,null,5,null,20,null,[\x2214\x22]]]]]]],[1000,[[368885003,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x224\x22]],[7,null,null,5,null,20,null,[\x224\x22]]]]],[368885004,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x224\x22]],[7,null,null,5,null,20,null,[\x224\x22]]]]]]],[1000,[[519641231,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2213\x22]],[7,null,null,5,null,2,null,[\x2213\x22]]]]],[519641232,[[191,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2213\x22]],[7,null,null,5,null,2,null,[\x2213\x22]]]]]]],[1000,[[633794021,[[190,null,null,[1]]],[2,[[8,null,null,5,null,-1,null,[\x2218\x22]],[7,null,null,5,null,1,null,[\x2218\x22]]]]],[633794022,[[208,null,null,[1]],[190,null,null,[1]]],[2,[[8,null,null,5,null,99,null,[\x2218\x22]],[7,null,null,5,null,101,null,[\x2218\x22]]]]],[633794023,[[227,null,null,[1]],[190,null,null,[1]]],[2,[[8,null,null,5,null,199,null,[\x2218\x22]],[7,null,null,5,null,201,null,[\x2218\x22]]]]],[633794024,[[190,null,null,[1]]],[2,[[8,null,null,5,null,299,null,[\x2218\x22]],[7,null,null,5,null,301,null,[\x2218\x22]]]]]]],[1,[[633794031,[[190,null,null,[1]]]],[633794032,[[232,null,null,[1]],[190,null,null,[1]]]],[633794033,[[233,null,null,[1]],[190,null,null,[1]]]],[633794034,[[233,null,null,[1]],[232,null,null,[1]],[190,null,null,[1]]]]],null,null,null,21]]],[11,[[1000,[[368226300,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2211\x22]],[7,null,null,5,null,100,null,[\x2211\x22]]]]],[368226301,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2211\x22]],[7,null,null,5,null,100,null,[\x2211\x22]]]]]]],[1000,[[368226305,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2211\x22]],[7,null,null,5,null,100,null,[\x2211\x22]]]]],[368226306,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2211\x22]],[7,null,null,5,null,100,null,[\x2211\x22]]]]]]],[1000,[[368226310,[[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2211\x22]],[7,null,null,5,null,100,null,[\x2211\x22]]]]],[368226311,[[209,null,null,[1]],[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2211\x22]],[7,null,null,5,null,100,null,[\x2211\x22]]]]]]]]]]]")
                    } catch (k) {
                        d = c
                    }
                    c = [d];
                    c = void 0 === c ? [] : c;
                    var e = !1;
                    t.google_logging_queue || (e = !0, t.google_logging_queue = []);
                    t.google_logging_queue.push([13, c]);
                    e && Ee() && (c = Ce(qc(), "/pagead/js/logging_library.js"), Ub(t.document, c));
                    Qg(new zg(d), ng.j(), {
                        aa: Bf(a)
                    }, tg(a));
                    ef.j().a(12);
                    ef.j().a(10);
                    b.eids = Ha(ef.j().b(), String).concat(b.eids || []);
                    b = b.eids;
                    Je || (Je = new Ke);
                    e = Je;
                    pc = !0;
                    var f;
                    d = nf;
                    var g = W(a, P(e, 136), [d.f, d.h]);
                    U(b, g);
                    af(a, 12) && (d = hf, c = gf, g = Tg(a, new Td(0, 999, 0), P(e, 149), P(e, 150), [d.f, d.h], 4), U(b, g), g == d.f ? f = c.f : g == d.h ? f = c.h : f = "", U(b, f));
                    d = mf;
                    g = Tg(a, og, P(e, 160), P(e, 161), [d.f, d.H, d.G]);
                    U(b, g);
                    c = lf;
                    g == d.f ? f = c.f : g == d.H ? f = c.H : g == d.G ? f = c.G : f = "";
                    U(b, f);
                    d = kf;
                    g = Tg(a, rg, P(e, 179), P(e, 180), [d.f, d.K]);
                    U(b, g);
                    c = jf;
                    g == d.f ? f = c.f : g == d.K ? f = c.K : f = "";
                    U(b, f);
                    Ua("") && U(b, "");
                    d = rf;
                    g = W(a, P(e, 13), [d.l, d.f]);
                    U(b, g);
                    g = W(a, 0, [d.Y]);
                    U(b, g);
                    d = sf;
                    g = W(a, P(e, 60), [d.l, d.f]);
                    U(b, g);
                    g == sf.l && (d = tf, g = W(a, P(e, 66), [d.l, d.f]), U(b, g), d = vf, g = W(a, P(e, 137), [d.l, d.f]), U(b, g), g == tf.l && (d = uf, g = W(a, P(e, 135), [d.l, d.f]), U(b, g)));
                    d = of ;
                    g = W(a, P(e, 98), [d.f, d.h]);
                    U(b, g);
                    d = pf;
                    g = Tg(a, qg, P(e, 173), P(e, 174), [d.f, d.h]);
                    U(b, g);
                    c = qf;
                    g == d.f ? f = c.f : g == d.h ? f = c.h : f = "";
                    U(b, f);
                    d = wf;
                    g = Tg(a, pg, P(e, 99), P(e, 100), [d.f, d.h]);
                    U(b, g);
                    c = xf;
                    g == d.f ? f = c.f : g == d.h ? f = c.h : f = "";
                    U(b, f);
                    d = yf;
                    g = W(a, P(e, 165), [d.f, d.h]);
                    U(b, g);
                    d = Af;
                    g = Tg(a, sg, P(e, 189), P(e, 190), [d.f, d.N, d.J, d.I, d.D, d.F]);
                    U(b, g);
                    c = zf;
                    g == d.f ? f = c.f : g == d.N ? f = c.N : g == d.J ? f = c.J : g == d.I ? f = c.I : g == d.D ? f = c.D : g == d.F ? f = c.F : f = "";
                    U(b, f);
                    g = W(a, P(e, 185), ["20199336", "20199335"]);
                    U(b, g);
                    f = H(a) || a;
                    we(f.location, "google_mc_lab") && U(b, "242104166")
                }
                f = I(a, tf.l) || I(a, rf.l) || I(a, rf.Y);
                ie(f);
                try {
                    if (a.PerformanceObserver && G(203)) {
                        var h = new Ih;
                        h.m.observe({
                            entryTypes: ["layout-shift", "largest-contentful-paint", "first-input"],
                            buffered: !0
                        });
                        document.addEventListener("visibilitychange", h.g)
                    }
                } catch (k) {}
                if (h = H(t)) h.google_reactive_ads_global_state ? null == h.google_reactive_ads_global_state.floatingAdsStacking && (h.google_reactive_ads_global_state.floatingAdsStacking = new re) : h.google_reactive_ads_global_state = new qe, h = h.google_reactive_ads_global_state, h.tagSpecificState[1] || (h.tagSpecificState[1] = new He);
                b = a.google_ad_slot;
                h = xd(a);
                yd(h.ad_whitelist || [], b, void 0) ? h = null : (f = h.space_collapsing || "none", h = (b = yd(h.ad_blacklist || [], b)) ? {
                    Z: !0,
                    Fa: b.space_collapsing || f
                } : h.remove_ads_by_default ? {
                    Z: !0,
                    Fa: f,
                    Ka: h.ablation_viewport_offset
                } : null);
                if (h && h.Z) gh(a);
                else {
                    pd(a);
                    ph();
                    mh(".google.nl") && (Z[1] = ".google.nl");
                    rh();
                    "_gfp_p_" in a || (a._gfp_p_ = !1, "_gfp_a_" in a || (a._gfp_a_ = Dh));
                    Fh(a, a.google_ad_client);
                    h = a;
                    h = md(ld(h)) || h;
                    h.google_unique_id ? ++h.google_unique_id : h.google_unique_id = 1;
                    uh(a);
                    h = {};
                    null == a.google_ad_client && dh(a) && (h.google_loader_features_used = 2048);
                    fh(a, h);
                    h.google_loader_used = "sa";
                    gh(a);
                    f = a.document;
                    f.currentScript ? f = f.currentScript.parentElement : (f = f.getElementsByTagName("script"), f = f[f.length - 1].parentElement);
                    if (a.document && a.document.body && !eg(a, h) && !h.google_reactive_ad_format && (b = h.google_ad_width, c = Ug(f, a), 0 < c && b > c)) {
                        d = h.google_ad_height;
                        b = !!Nb[b + "x" + d];
                        e = c;
                        if (b)
                            if (g = Ob(c, d)) e = g, h.google_ad_format = g + "x" + d + "_0ads_al";
                            else throw new L("No slot size for availableWidth=" + c);
                        h.google_ad_resize = !0;
                        h.google_ad_width = e;
                        b || (h.google_ad_format = null, h.google_override_format = !0);
                        c = e;
                        d = Yf(c, "auto", a, f, h);
                        Qf(d, c, h);
                        d = d.a;
                        h.google_responsive_formats = null;
                        d.minWidth() > c && !b && (h.google_ad_width = d.minWidth())
                    }
                    b = h.google_ad_width || 0;
                    a: if (d = Ca(Yf, b, "auto", a, f, h, !1, !0), c = H(a) || a, e = h.google_ad_client, c = c.location && "#ftptohbh" === c.location.hash ? 2 : we(c.location, "google_responsive_slot_debug") || we(c.location, "google_responsive_slot_preview") || G(217) ? 1 : G(218) ? 2 : Ze(c, 1, e) ? 1 : af(c, 11, e) ? G(219) ? 2 : 1 : 0, (e = 0 === c || !(!(w("iPad") || w("Android") && !w("Mobile") || w("Silk")) && (w("iPod") || w("iPhone") || w("Android") || w("IEMobile"))) && !G(216) || h.google_reactive_ad_format || eg(a, h)) || (e = !((dc.test(h.google_ad_width) || cc.test(f.style.width)) && (dc.test(h.google_ad_height) || cc.test(f.style.height)))), !e && !h.google_ad_resize && wd(a) == a) {
                        for (e = f; e; e = e.parentElement)
                            if (g = D(e, a), !g || !La(["static", "relative"], g.position)) break a;
                        if (G(216) || !0 === Qe(a, f, b, .3, h)) h.google_resizing_allowed = !0, h.ovlp = !0, 2 === c ? (c = {}, Qf(d(), b, c), h.google_resizing_width = c.google_ad_width, h.google_resizing_height = c.google_ad_height, c.ds && (h.ds = c.ds), h.iaaso = !1) : (h.google_ad_format = "auto", h.iaaso = !0, h.armr = 1), af(a, 11, h.google_ad_client) && (b = G(219) ? "AutoOptimizeAdSizeOriginal" : "AutoOptimizeAdSizeVariant", h.google_ad_channel = h.google_ad_channel ? [h.google_ad_channel, b].join("+") : b)
                    }(b = (h.google_async_iframe_id ? 1 == qd(h) : !qd(h)) && Df(a, h)) && Xe(a, b);
                    1 == eg(a, h) && (b = h.google_ad_width || 0, Qf(Yf(b, h.google_ad_format, a, f, h), b, h));
                    Bh(a, h)
                }
            }
    });
}).call(this);