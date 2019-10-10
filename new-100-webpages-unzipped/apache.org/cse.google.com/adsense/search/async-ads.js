if (!window['googleNDT_']) {
    window['googleNDT_'] = (new Date()).getTime();
}
window._googCsaAlwaysHttps = 1;
(function() {
    window.googleAltLoader = 4;
    var version_ = '3.0';
    var hash_ = '730252808692556692';
    var module_ = 'ads';
    var packages_ = 'search';
    var googleApisBase_ = 'https://ajax.googleapis.com/ajax';
    var serviceBase_ = 'https://cse.google.com/uds';
    var serviceHost_ = 'cse.google.com';

    function f() {
        return function() {}
    }

    function aa(a) {
        return function() {
            return this[a]
        }
    }

    function m(a) {
        return function() {
            return a
        }
    }
    var t;

    function ba(a) {
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

    function u(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: ba(a)
        }
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
                    a: !0
                },
                ia = {};
            try {
                ia.__proto__ = fa;
                ea = ia.a;
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
    var ja = da;

    function ka(a, b) {
        a.prototype = ca(b.prototype);
        a.prototype.constructor = a;
        if (ja) ja(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c]
    }
    var la = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ma = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function na(a, b) {
        if (b) {
            var c = ma;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && la(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    na("Promise", function(a) {
        function b(h) {
            this.L = 0;
            this.ne = void 0;
            this.lb = [];
            var k = this.hd();
            try {
                h(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        }

        function c() {
            this.oa = null
        }

        function d(h) {
            return h instanceof b ? h : new b(function(k) {
                k(h)
            })
        }
        if (a) return a;
        c.prototype.Oe = function(h) {
            if (null == this.oa) {
                this.oa = [];
                var k = this;
                this.Pe(function() {
                    k.sh()
                })
            }
            this.oa.push(h)
        };
        var e = ma.setTimeout;
        c.prototype.Pe = function(h) {
            e(h, 0)
        };
        c.prototype.sh = function() {
            for (; this.oa && this.oa.length;) {
                var h = this.oa;
                this.oa = [];
                for (var k = 0; k <
                    h.length; ++k) {
                    var l = h[k];
                    h[k] = null;
                    try {
                        l()
                    } catch (n) {
                        this.qg(n)
                    }
                }
            }
            this.oa = null
        };
        c.prototype.qg = function(h) {
            this.Pe(function() {
                throw h;
            })
        };
        b.prototype.hd = function() {
            function h(n) {
                return function(p) {
                    l || (l = !0, n.call(k, p))
                }
            }
            var k = this,
                l = !1;
            return {
                resolve: h(this.Di),
                reject: h(this.he)
            }
        };
        b.prototype.Di = function(h) {
            if (h === this) this.he(new TypeError("A Promise cannot resolve to itself"));
            else if (h instanceof b) this.Pi(h);
            else {
                a: switch (typeof h) {
                    case "object":
                        var k = null != h;
                        break a;
                    case "function":
                        k = !0;
                        break a;
                    default:
                        k = !1
                }
                k ? this.Ci(h) : this.mf(h)
            }
        };
        b.prototype.Ci = function(h) {
            var k = void 0;
            try {
                k = h.then
            } catch (l) {
                this.he(l);
                return
            }
            "function" == typeof k ? this.Qi(k, h) : this.mf(h)
        };
        b.prototype.he = function(h) {
            this.Mf(2, h)
        };
        b.prototype.mf = function(h) {
            this.Mf(1, h)
        };
        b.prototype.Mf = function(h, k) {
            if (0 != this.L) throw Error("Cannot settle(" + h + ", " + k + "): Promise already settled in state" + this.L);
            this.L = h;
            this.ne = k;
            this.uh()
        };
        b.prototype.uh = function() {
            if (null != this.lb) {
                for (var h = 0; h < this.lb.length; ++h) g.Oe(this.lb[h]);
                this.lb =
                    null
            }
        };
        var g = new c;
        b.prototype.Pi = function(h) {
            var k = this.hd();
            h.$b(k.resolve, k.reject)
        };
        b.prototype.Qi = function(h, k) {
            var l = this.hd();
            try {
                h.call(k, l.resolve, l.reject)
            } catch (n) {
                l.reject(n)
            }
        };
        b.prototype.then = function(h, k) {
            function l(q, w) {
                return "function" == typeof q ? function(z) {
                    try {
                        n(q(z))
                    } catch (A) {
                        p(A)
                    }
                } : w
            }
            var n, p, r = new b(function(q, w) {
                n = q;
                p = w
            });
            this.$b(l(h, n), l(k, p));
            return r
        };
        b.prototype["catch"] = function(h) {
            return this.then(void 0, h)
        };
        b.prototype.$b = function(h, k) {
            function l() {
                switch (n.L) {
                    case 1:
                        h(n.ne);
                        break;
                    case 2:
                        k(n.ne);
                        break;
                    default:
                        throw Error("Unexpected state: " + n.L);
                }
            }
            var n = this;
            null == this.lb ? g.Oe(l) : this.lb.push(l)
        };
        b.resolve = d;
        b.reject = function(h) {
            return new b(function(k, l) {
                l(h)
            })
        };
        b.race = function(h) {
            return new b(function(k, l) {
                for (var n = u(h), p = n.next(); !p.done; p = n.next()) d(p.value).$b(k, l)
            })
        };
        b.all = function(h) {
            var k = u(h),
                l = k.next();
            return l.done ? d([]) : new b(function(n, p) {
                function r(z) {
                    return function(A) {
                        q[z] = A;
                        w--;
                        0 == w && n(q)
                    }
                }
                var q = [],
                    w = 0;
                do q.push(void 0), w++, d(l.value).$b(r(q.length -
                    1), p), l = k.next(); while (!l.done)
            })
        };
        return b
    });
    var oa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    na("Object.assign", function(a) {
        return a || oa
    });
    na("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    na("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var g = d[c];
                if (g === b || Object.is(g, b)) return !0
            }
            return !1
        }
    });
    na("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            return -1 !== (this + "").indexOf(b, c || 0)
        }
    });
    var pa = this || self,
        qa = /^[\w+/_-]+[=]{0,2}$/,
        ra = null;

    function sa() {}

    function ta(a) {
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

    function v(a) {
        return "array" == ta(a)
    }

    function ua(a) {
        var b = ta(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function va(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function wa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function xa(a, b, c) {
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

    function ya(a, b, c) {
        ya = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wa : xa;
        return ya.apply(null, arguments)
    }

    function za(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    var Aa = Date.now || function() {
        return +new Date
    };

    function Ca(a, b) {
        a = a.split(".");
        var c = pa;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
    }

    function Da(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var Ea;
    var Fa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ga = Array.prototype.forEach ? function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        Ha = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a,
                b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, g = "string" === typeof a ? a.split("") : a, h = 0; h < c; h++)
                if (h in g) {
                    var k = g[h];
                    b.call(void 0, k, h, a) && (d[e++] = k)
                }
            return d
        },
        Ia = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++) g in e && (d[g] = b.call(void 0, e[g], g, a));
            return d
        };

    function Ja(a, b) {
        return 0 <= Fa(a, b)
    }

    function Ka(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Ma(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Na(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    };

    function Oa(a, b) {
        this.Nf = a === Pa && b || "";
        this.Yf = Qa
    }
    Oa.prototype.va = !0;
    Oa.prototype.ta = aa("Nf");

    function Ra(a) {
        return a instanceof Oa && a.constructor === Oa && a.Yf === Qa ? a.Nf : "type_error:Const"
    }
    var Qa = {},
        Pa = {};

    function Sa() {
        this.Gf = ""
    }
    Sa.prototype.va = !0;
    Sa.prototype.ta = function() {
        return this.Gf.toString()
    };
    Sa.prototype.Ka = function(a) {
        this.Gf = a;
        return this
    };
    (new Sa).Ka("");
    var Ta = /<[^>]*>|&[^;]+;/g,
        Va = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
        Wa = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
        Xa = /^http:\/\/.*/,
        $a = /\s+/,
        ab = /[\d\u06f0-\u06f9]/;

    function bb(a, b, c) {
        this.If = a === cb && b || "";
        this.Pf = a === cb && c || null;
        this.Zf = db
    }
    bb.prototype.va = !0;
    bb.prototype.ta = function() {
        return this.If.toString()
    };
    bb.prototype.Ad = !0;
    bb.prototype.fc = m(1);

    function eb(a, b, c) {
        a = fb(a).toString();
        a = gb.exec(a);
        var d = a[3] || "";
        return new bb(cb, a[1] + hb("?", a[2] || "", b) + hb("#", d, c), null)
    }

    function fb(a) {
        if (a instanceof bb && a.constructor === bb && a.Zf === db) return a.If;
        ta(a);
        return "type_error:TrustedResourceUrl"
    }

    function ib() {
        var a = {},
            b = Ra(new Oa(Pa, "https://fonts.googleapis.com/css"));
        if (!kb.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
        var c = b.replace(lb, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(a, e)) throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
            d = a[e];
            return d instanceof Oa ? Ra(d) : encodeURIComponent(String(d))
        });
        return new bb(cb, c, null)
    }
    var lb = /%{(\w+)}/g,
        kb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        gb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        db = {};

    function hb(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
            var e = c[d];
            e = v(e) ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null != h && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
            }
        }
        return b
    }
    var cb = {};
    var mb = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

    function nb(a, b) {
        if (b) a = a.replace(ob, "&amp;").replace(pb, "&lt;").replace(qb, "&gt;").replace(rb, "&quot;").replace(sb, "&#39;").replace(tb, "&#0;");
        else {
            if (!ub.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ob, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(pb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(qb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(rb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(sb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(tb, "&#0;"))
        }
        return a
    }
    var ob = /&/g,
        pb = /</g,
        qb = />/g,
        rb = /"/g,
        sb = /'/g,
        tb = /\x00/g,
        ub = /[\x00&<>"']/;

    function vb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function wb(a, b) {
        this.Hf = a === zb && b || "";
        this.Xf = Ab
    }
    wb.prototype.va = !0;
    wb.prototype.ta = function() {
        return this.Hf.toString()
    };
    wb.prototype.Ad = !0;
    wb.prototype.fc = m(1);

    function Bb(a) {
        if (a instanceof wb && a.constructor === wb && a.Xf === Ab) return a.Hf;
        ta(a);
        return "type_error:SafeUrl"
    }
    var Cb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Ab = {},
        zb = {};

    function Db() {
        this.ee = "";
        this.Wf = Eb
    }
    Db.prototype.va = !0;
    var Eb = {};
    Db.prototype.ta = aa("ee");
    Db.prototype.Ka = function(a) {
        this.ee = a;
        return this
    };
    (new Db).Ka("");

    function Fb() {
        this.de = "";
        this.Vf = Gb
    }
    Fb.prototype.va = !0;
    var Gb = {};
    Fb.prototype.ta = aa("de");
    Fb.prototype.Ka = function(a) {
        this.de = a;
        return this
    };
    (new Fb).Ka("");
    var Hb;
    a: {
        var Ib = pa.navigator;
        if (Ib) {
            var Jb = Ib.userAgent;
            if (Jb) {
                Hb = Jb;
                break a
            }
        }
        Hb = ""
    };

    function Kb() {
        this.ce = "";
        this.Uf = Lb;
        this.$e = null
    }
    Kb.prototype.Ad = !0;
    Kb.prototype.fc = aa("$e");
    Kb.prototype.va = !0;
    Kb.prototype.ta = function() {
        return this.ce.toString()
    };

    function Mb(a) {
        if (a instanceof Kb && a.constructor === Kb && a.Uf === Lb) return a.ce;
        ta(a);
        return "type_error:SafeHtml"
    }

    function Nb(a) {
        if (a instanceof Kb) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.Ad && (c = a.fc());
        return Ob(nb(b && a.va ? a.ta() : String(a)), c)
    }
    var Lb = {};

    function Ob(a, b) {
        return (new Kb).Ka(a, b)
    }
    Kb.prototype.Ka = function(a, b) {
        this.ce = a;
        this.$e = b;
        return this
    };
    Ob("<!DOCTYPE html>", 0);
    var Pb = Ob("", 0);
    Ob("<br>", 0);
    var Qb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Mb(Pb);
        return !b.parentElement
    });

    function Rb(a, b) {
        if (Qb())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Mb(b)
    }

    function Sb(a, b) {
        b instanceof wb || b instanceof wb || (b = "object" == typeof b && b.va ? b.ta() : String(b), Cb.test(b) || (b = "about:invalid#zClosurez"), b = new wb(zb, b));
        a.href = Bb(b)
    };

    function Tb(a) {
        return a = nb(a, void 0)
    };

    function Ub(a) {
        return function() {
            a.onload = a.onerror = null
        }
    }

    function Vb(a) {
        var b = new Image;
        b.onload = b.onerror = Ub(b);
        b.src = a
    }

    function Wb() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Aa()).toString(36)
    };
    var Xb = (window._googCsaAlwaysHttps ? "https:" : "") + "//www.google.com",
        Yb = null;

    function Zb() {
        Yb || (Yb = window.gwsBase_ ? window.gwsBase_ : "undefined" != typeof gwsHost_ ? gwsHost_ : "undefined" != typeof serviceHost_ ? (window._googCsaAlwaysHttps ? "https://" : "//") + serviceHost_ : Xb);
        return Yb
    };
    var $b = window.navigator ? window.navigator.userAgent : "";

    function ac() {
        return 0 != $b.indexOf("Opera") && (-1 != $b.indexOf("MSIE") || -1 != $b.indexOf("Trident"))
    }
    var bc = /Opera\/.*Version\/(\d+)\./,
        cc = /Firefox\/(\d+)\./,
        dc = /Version\/(\d+)\..*Safari/,
        ec = /(?:iPhone|iPod|iPad).*AppleWebKit\/(\d+)(?!.*Version)/;

    function fc(a) {
        a = (a = a.exec($b)) ? a[1] : "";
        return 0 < a.length && (a = parseInt(a, 10)) ? a : -1
    };

    function gc(a) {
        this.X = [];
        this.nd = [];
        a = a.split("#");
        this.af = a[0];
        this.md = a[1] || null;
        this.uc = ac() ? 1999 : 7950
    }

    function x(a, b, c, d) {
        (c || 0 === c || !1 === c) && (d ? a.X : a.nd).push([encodeURIComponent(b), encodeURIComponent("" + c)])
    }

    function hc(a, b) {
        a.md = b ? encodeURI(b) : null
    }

    function ic(a) {
        var b = a.af,
            c = -1 != a.af.indexOf("?"),
            d;
        for (d = 0; d < a.nd.length; d++) {
            var e = (c ? "&" : "?") + a.nd[d].join("=");
            e.length + b.length <= a.uc && (b += e, c = !0)
        }
        for (d = e = 0; d < a.X.length; d++) e += a.X[d][0].length;
        e = a.uc - b.length - e - 2 * a.X.length;
        var g = Math.floor(e / a.X.length);
        if (1 <= g)
            for (d = 0; d < a.X.length; d++) {
                var h = a.X[d][1];
                g = h.length > g ? h.substring(0, g) : h;
                b += (c ? "&" : "?") + a.X[d][0] + "=" + g;
                e -= g.length;
                g = Math.floor(e / (a.X.length - d - 1));
                c = !0
            } else
                for (d = 0; d < a.X.length; d++) a.X[d][0].length + 3 + b.length <= a.uc && (b += (c ? "&" : "?") +
                    a.X[d].join("="), c = !0);
        b = b.substring(0, a.uc);
        b = b.replace(/%\w?$/, "");
        a.md && (b += "#" + a.md);
        return b
    };
    var jc = .01 > Math.random(),
        kc = .1 > Math.random(),
        lc = null;

    function mc() {
        if (!window.Me || !window.Me.caps) return null;
        for (var a = u(window.Me.caps), b = a.next(); !b.done; b = a.next())
            if (b = b.value, "queryId" == b.n) return b.v;
        return null
    }

    function nc(a) {
        this.bc = a || "unknown";
        this.Eh = Wb;
        this.Ob = Vb;
        this.Nb = mc() || "";
        this.ye = ""
    }

    function oc() {
        lc || (lc = new nc(null));
        return lc
    }

    function pc(a) {
        var b = new gc(Zb() + "/afs/gen_204");
        x(b, "client", a.bc);
        x(b, "output", "uds_ads_only");
        x(b, "zx", a.Eh());
        a.Nb && x(b, "aqid", a.Nb);
        a.ye && x(b, "psid", a.ye);
        return b
    }
    nc.prototype.Ni = function(a, b, c, d, e, g, h, k) {
        qc(this, "bs", a, b, c, d, e, g, h, k)
    };
    nc.prototype.Oi = function(a, b, c, d, e, g, h, k) {
        qc(this, "bv", a, b, c, d, e, g, h, k)
    };

    function qc(a, b, c, d, e, g, h, k, l, n) {
        var p = pc(a);
        x(p, "pbt", b);
        x(p, "adbx", d);
        x(p, "adby", c);
        x(p, "adbh", e);
        x(p, "adbw", g);
        x(p, "adbn", h);
        x(p, "eawp", k);
        x(p, "errv", l);
        x(p, "pblt", n);
        a.Ob(ic(p))
    }

    function rc(a, b, c) {
        var d = pc(a);
        x(d, "pbt", "bo");
        x(d, "adbn", b);
        x(d, "uio", c);
        a.Ob(ic(d).replace(/%7C/g, "|"))
    }

    function sc(a, b) {
        var c = pc(a);
        x(c, "pbt", "ri");
        x(c, "action", b);
        a.Ob(ic(c))
    };

    function tc() {
        var a = uc();
        this.bi = "ads." + vc;
        this.ai = a;
        this.zf = "google.ads.search.Ads: ";
        this.Dh = oc()
    }
    var wc = {};
    tc.prototype.log = function(a, b) {
        if (!0 === window.IS_GOOGLE_AFS_IFRAME_ && window.parent == window) return !1;
        a = va(a) ? a.message : a;
        var c = a + b;
        if (!wc[c]) {
            wc[c] = !0;
            c = this.Dh;
            var d = this.bi,
                e = this.ai,
                g = pc(c);
            x(g, "pbt", "er");
            x(g, "errt", d);
            x(g, "errv", e);
            x(g, "errm", b);
            x(g, "emsg", a, !0);
            c.Ob(ic(g));
            return !0
        }
        return !1
    };

    function y(a, b) {
        var c = xc;
        return function() {
            var d = Array.prototype.slice.call(arguments, 0) || [];
            try {
                return a.apply(this, d)
            } catch (g) {
                "string" === typeof g && (g = {
                    message: g
                });
                d = g.message;
                var e = -1 == d.indexOf(c.zf);
                e && c.log(g, b);
                throw e ? c.zf + d : d;
            }
        }
    }

    function yc(a) {
        return "google.ads.search.Ads: " + a
    }

    function uc() {
        var a = "unknown";
        "undefined" != typeof hash_ && (a = hash_);
        return a
    }
    var vc = "unknown";
    "undefined" != typeof packages_ && (vc = packages_);
    var xc = new tc;

    function zc(a, b) {
        return y(a, b)
    };
    var Ac;
    a: {
        var Bc = window.parent;
        try {
            Ac = Bc.postMessage ? Bc : Bc.document.postMessage ? Bc.document : null;
            break a
        } catch (a) {}
        Ac = null
    }
    var Cc = Ac,
        Dc = {},
        Fc = zc(function() {
            for (var a = u(Na(Dc)), b = a.next(); !b.done; b = a.next()) b = b.value, Dc.hasOwnProperty(b) && (Ec(Dc[b]) || delete Dc[b])
        }, "fsCDI"),
        Gc = !1,
        Ic = zc(function() {
            Gc || (Gc = !0, window.setInterval(Fc, 500), window.addEventListener("message", Hc))
        }, "fsIL");

    function Jc(a, b) {
        this.te = a;
        this.L = {};
        this.Tb = b;
        Dc[this.te] = this;
        Ic()
    }

    function Kc(a, b) {
        return a.L.hasOwnProperty(b) ? a.L[b].value : null
    }

    function Lc(a, b, c, d) {
        a.L.hasOwnProperty(b) || (a.L[b] = c());
        c = a.L[b];
        c.Uc = d || sa;
        null != c.value && c.Uc(a, a.te, b, c.value)
    }

    function Ec(a) {
        return zc(function() {
            return !!(a.Tb && a.Tb.parentNode && a.Tb.contentWindow)
        }, "fsiHVI")()
    }
    var Mc = {};

    function Nc() {
        this.value = null;
        this.Uc = sa;
        this.$a = !1
    }
    Nc.prototype.Fb = f();
    Nc.prototype.Gc = f();
    Nc.prototype.xc = f();
    Nc.prototype.ic = f();

    function Oc() {
        Nc.call(this)
    }
    ka(Oc, Nc);
    Oc.prototype.Fb = function(a, b) {
        return !!b
    };
    Oc.prototype.Gc = function() {
        return this.value ? "t" : "f"
    };
    Oc.prototype.xc = function(a) {
        return "t" == a
    };
    Oc.prototype.ic = m(0);
    Oc.G = function() {
        return new Oc
    };

    function Pc() {
        Nc.call(this)
    }
    ka(Pc, Nc);
    Pc.prototype.Fb = function(a, b) {
        var c = parseInt(b, 10);
        a = a + " = " + b;
        if (isNaN(c)) return xc.log(a, "sIGVVnn"), null;
        16383 < c && (xc.log(a, "sIGVVtl"), c = 16383);
        0 > c && (xc.log(a, "sIGVVts"), c = 0);
        return c
    };
    Pc.prototype.Gc = function() {
        return this.value + ""
    };
    Pc.prototype.xc = function(a) {
        return parseInt(a, 10)
    };
    Pc.prototype.ic = m(1);
    Pc.G = function() {
        return new Pc
    };

    function B() {
        Nc.call(this)
    }
    ka(B, Nc);
    B.prototype.Fb = function(a, b) {
        return b ? b.toString() : ""
    };
    B.prototype.Gc = function() {
        return this.value ? encodeURIComponent(this.value) : ""
    };
    B.prototype.xc = function(a) {
        return decodeURIComponent(a)
    };
    B.prototype.ic = m(2);
    B.G = function() {
        return new B
    };
    var Qc = {},
        Rc = (Qc[0] = Oc.G, Qc[1] = Pc.G, Qc[2] = B.G, Qc);

    function Sc(a, b, c) {
        Mc.hasOwnProperty(a) || (Mc[a] = c());
        c = Mc[a];
        a = c.Fb(a, b);
        null != a && c.value != a && (c.value = a, c.$a = !0)
    }

    function Hc(a) {
        if (a = a || window.event)
            for (var b = u(Na(Dc)), c = b.next(); !c.done; c = b.next())
                if (c = Dc[c.value], Ec(c) && a.source == c.Tb.contentWindow) {
                    if ((a = a.data) && a.split && (a = a.split(","), "FSXDC" == a[0])) {
                        for (b = 1; b < a.length; b++) {
                            var d = a[b].split(":"),
                                e = decodeURIComponent(d[0]),
                                g = Rc[parseInt(d[1], 10)];
                            c.L.hasOwnProperty(e) || (c.L[e] = g());
                            d = c.L[e].xc(d[2]);
                            c.L.hasOwnProperty(e) || (c.L[e] = g());
                            g = c.L[e];
                            d = g.Fb(e, d);
                            null != d && g.value != d && (g.value = d, g.$a = !0)
                        }
                        a = u(Na(c.L));
                        for (b = a.next(); !b.done; b = a.next()) b = b.value,
                            g = c.L[b], g.$a && (g.$a = !1, g.Uc(c, c.te, b, g.value))
                    }
                    break
                }
    }
    var Tc = zc(function() {
        if (Cc) {
            for (var a = [], b = u(Na(Mc)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = Mc[c];
                if (d.$a) {
                    var e = d.Gc();
                    a.push([encodeURIComponent(c), d.ic(), e].join(":"));
                    d.$a = !1
                }
            }
            0 != a.length && Cc.postMessage(["FSXDC"].concat(a).join(","), "*")
        }
    }, "fsSC");
    var gd = null,
        hd = null,
        id = null,
        jd = null,
        kd = null;

    function ld(a) {
        gd || (gd = window.ad_json && window.ad_json.gd || null);
        return gd && gd[a] || {}
    }

    function md() {
        return !(!window.ad_json || !window.ad_json.gd)
    }

    function nd() {
        this.data = ld("ff")
    }

    function od() {
        var a = hd;
        a || (a = new nd, md() && (hd = a));
        return a
    }

    function pd() {
        return !!od().data.enu
    }

    function qd() {
        this.data = ld("cd")
    }

    function rd() {
        var a = id;
        a || (a = new qd, md() && (id = a));
        return a
    }

    function sd() {
        this.data = ld("pc")
    }

    function td() {
        var a = jd;
        a || (a = new sd, md() && (jd = a));
        return a
    }

    function ud() {
        this.data = ld("dc")
    }

    function vd() {
        var a = kd;
        a || (a = new ud, md() && (kd = a));
        return a
    }

    function wd(a) {
        return !!a.data.hm
    }

    function xd(a) {
        return !!a.data.t
    };

    function yd() {}
    yd.prototype.U = m("true, false");
    yd.prototype.M = function(a) {
        return "true" == a || "on" == a || 1 == a ? !0 : "false" == a || "off" == a || !1 === a ? !1 : null
    };
    yd.prototype.T = function(a) {
        a = this.M(a);
        return null == a ? null : a ? 1 : 0
    };
    var F = new yd;

    function zd() {
        var a = Ad;
        this.Lb = 8;
        this.Kb = Math.floor(a)
    }
    zd.prototype.U = function() {
        return this.Lb + "px - " + this.Kb + "px"
    };
    zd.prototype.M = function(a) {
        a = parseInt(a, 10);
        return isNaN(a) ? null : Math.max(this.Lb, Math.min(this.Kb, a))
    };
    zd.prototype.T = function(a) {
        return this.M(a)
    };
    var Bd = (window._googCsaAlwaysHttps ? "https:" : "") + "//www.google.com",
        Cd = /^(https?:)?\/\//;

    function Dd(a) {
        return Cd.test(a) ? a : "/" == a.charAt(0) ? Bd + a : Bd + "/" + a
    }
    var Ed = {},
        Fd = (Ed.ads = 0, Ed.plas = 1, Ed.relatedsearch = 3, Ed.ppas = 4, Ed),
        Gd = !window.IS_GOOGLE_AFS_IFRAME_ || td().data.cglfa ? 8 : 6,
        Ad = !window.IS_GOOGLE_AFS_IFRAME_ || td().data.cglfa ? 24 : 16,
        Hd = new zd;

    function Id(a, b) {
        b = a.j.M(b);
        if (null == b && !a.K) throw yc(a.key + " has an invalid value. Valid input values: [" + a.j.U() + "].");
        return b
    }

    function Jd() {
        var a = Kd(),
            b = Ld();
        return Ma(a, function(c, d) {
            return b.hasOwnProperty(d)
        })
    }

    function Md(a) {
        var b = fc(bc),
            c = fc(cc),
            d = fc(dc);
        return !!(F.M(a.waitForAds) && (-1 == b || 11 < b) && (-1 == c || 3 < c) && (-1 == d || 4 < d))
    }

    function Nd(a) {
        return (a = a.match(/slave-(\d+)-/)) ? parseInt(a[1], 10) + 1 : 1
    }

    function Od(a, b, c) {
        for (var d = [], e, g = 0; e = c[g]; g++) e = new gc(e), x(e, a, b), d.push(ic(e));
        return d
    }

    function Pd(a) {
        "on" == a.adtest && a.testgl && (a.gl = a.testgl, a.glp = "1")
    };
    var Qd = {};

    function Rd(a) {
        var b = {
                names: [],
                frames: []
            },
            c;
        for (c in Qd) {
            var d = Sd(c, a);
            null == d ? delete Qd[c] : (b.names.push(c), b.frames.push(d))
        }
        return b
    }
    Rd = y(Rd, "cFr");

    function Sd(a, b) {
        if (Td) return Td(a, b);
        if (a == b.name) return window;
        b = null;
        try {
            if (b = window.parent.frames[a + "|" + window.name]) return b
        } catch (c) {}
        try {
            if (b = window.parent.frames[a]) return b
        } catch (c) {}
        return null
    }
    Sd = y(Sd, "gFBN");
    var Td = null,
        Ud = Rd,
        Vd = Sd;

    function Wd(a, b, c) {
        var d = !1;
        a.addEventListener(b, c);
        a.addEventListener(b, function() {
            d || (a.removeEventListener(b, c), d = !0)
        })
    };

    function Xd() {
        var a, b;
        return {
            ge: new Promise(function(c, d) {
                a = c;
                b = d
            }),
            resolve: a,
            reject: b
        }
    }

    function Yd() {
        var a = Xd();
        window.setTimeout(function() {
            a.resolve(void 0)
        }, 500);
        return a.ge
    };

    function Zd(a, b) {
        this.width = a;
        this.height = b
    }
    t = Zd.prototype;
    t.clone = function() {
        return new Zd(this.width, this.height)
    };
    t.aspectRatio = function() {
        return this.width / this.height
    };
    t.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    t.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    t.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    t.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var $d = null;

    function ae() {
        if (null != $d) return $d;
        var a = document.createElement("div");
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.border = "1px solid black";
        a.style.padding = "1px";
        a.style.visibility = "hidden";
        document.body.appendChild(a);
        var b = a.offsetWidth;
        document.body.removeChild(a);
        return $d = 5 == b
    }

    function be(a) {
        return parseFloat(a.replace("px", "")) || 0
    }

    function ce(a, b) {
        "string" == typeof a && (a = document.getElementById(a));
        var c = document.defaultView || {},
            d = b ? a.offsetHeight : a.offsetWidth;
        b = b ? ["Top", "Bottom"] : ["Right", "Left"];
        var e = !1;
        var g = ae() ? ["margin"] : ["border", "margin", "padding"];
        var h = g.length,
            k = b.length;
        if (c && c.getComputedStyle && (c = c.getComputedStyle(a))) {
            e = !0;
            for (var l = 0; l < h; l++)
                for (var n = 0; n < k; n++) d += be(c.getPropertyValue([g[l], b[n].toLowerCase()].join("-")))
        }
        if (!e && (a = a.currentStyle)) {
            if (!ae())
                for (e = 0; e < k; e++) d += be(a[["border", b[e], "Width"].join("")]);
            for (e = 0; e < h; e++)
                if ("border" != g[e])
                    for (c = 0; c < k; c++) d += be(a[[g[e], b[c]].join("")])
        }
        return d
    };

    function de(a) {
        if (ee) return ee(a);
        a = Ud(a);
        var b = a.names;
        return fe(a.frames).then(function(c) {
            for (var d = 0; d < c.length; d++) {
                var e = b[d];
                null != c[d] && Sc(e + ".h", c[d], Pc.G)
            }
            Tc()
        })
    }
    de = y(de, "sPH");
    var ee = null;

    function ge(a) {
        try {
            var b = a.document.getElementById("adBlock");
            return ce(b, !0)
        } catch (c) {
            return null
        }
    }
    ge = y(ge, "gBH");

    function he(a) {
        try {
            var b = a.document.getElementById("adBlock");
            return ce(b, !1)
        } catch (c) {
            return null
        }
    }
    he = y(he, "gBW");

    function ie(a) {
        function b(e) {
            var g = Xd();
            e.complete ? g.resolve() : (Wd(e, "load", g.resolve), Wd(e, "error", g.resolve));
            return g.ge
        }
        a = a.document.getElementsByTagName("img");
        for (var c = [], d = 0; d < a.length; d++) c.push(b(a[d]));
        return Promise.all(c)
    }
    ie = y(ie, "gFH_wfip");

    function fe(a) {
        for (var b = [], c = 0; c < a.length; c++) b.push(ie(a[c]));
        return Promise.race([Promise.all(b), Yd()]).then(function() {
            for (var d = [], e = 0, g = 0; g < a.length; g++) {
                var h = a[g],
                    k = ge(h),
                    l = he(h);
                je(h, k, l) ? (d.push(1), e++) : d.push(k)
            }
            return d
        })
    }
    fe = y(fe, "gFH");

    function je(a, b, c) {
        return ("number" == typeof b && 16 > b || "number" == typeof c && 16 > c) && (a = a.document.getElementById("adBlock")) && "" != a.innerHTML ? !0 : !1
    }
    je = y(je, "iCSI");
    var ke = de;

    function le(a, b) {
        b = b[a];
        b || (xc.log("frameOptions is undefined for " + a, "fAU"), b = {});
        return b
    }
    le = y(le, "gFO");

    function me(a) {
        return function(b, c) {
            return "undefined" == typeof a[b] ? c || null : a[b]
        }
    }

    function ne(a) {
        return function(b, c) {
            if (a.hasOwnProperty(b)) {
                b = a[b].split(",");
                for (var d = 0; d < b.length; d++)
                    if (b[d] == c) return !0;
                return !1
            }
            return !0
        }
    }

    function oe(a) {
        return (a = a.width) && "auto" != a ? a : "100%"
    }

    function pe(a) {
        var b = {
            eb: !1,
            Ic: null,
            Sc: null
        };
        a.verticalSpacing && (a = a.verticalSpacing / 2, b.eb = !0, b.Ic = Math.floor(a), b.Sc = Math.ceil(a));
        return b
    }

    function qe(a) {
        return "_blank" == (a.linkTarget ? a.linkTarget : "_top")
    }

    function re(a, b) {
        var c = vd();
        return b.sellerFirstBoxLeft || "sellerfirst" == a.adLayout && !!c.data.d
    }

    function se(a, b) {
        if (a.fontSizeTitle) return a.fontSizeTitle;
        if (re(a, b)) return 15;
        a = vd();
        return wd(a) || xd(a) ? 18 : null
    }
    var te = le;
    var ue = zc(function(a) {
        var b = a.href,
            c = /[?&]adurl=([^&]+)/.exec(b);
        if (c && /[?&]ae=1(&|$)/.test(b)) try {
            var d = {
                rg: b + "&act=1",
                wh: decodeURIComponent(c[1])
            }
        } catch (e) {
            xc.log("sonic: Unsuccesful decoding of adurl param in url: " + b, "gATI"), d = null
        } else d = null;
        d && (navigator.sendBeacon ? navigator.sendBeacon(d.rg + "&ri=1") ? Sb(a, d.wh) : Sb(a, a.href + "&ri=2") : Sb(a, a.href + "&ri=16"))
    }, "mDS");

    function ve(a) {
        ve[" "](a);
        return a
    }
    ve[" "] = sa;

    function we(a) {
        var b = xe;
        return Object.prototype.hasOwnProperty.call(b, "10") ? b["10"] : b["10"] = a("10")
    };
    var ye = -1 != Hb.indexOf("Opera"),
        ze = -1 != Hb.indexOf("Trident") || -1 != Hb.indexOf("MSIE"),
        Ae = -1 != Hb.indexOf("Edge"),
        Be = -1 != Hb.indexOf("Gecko") && !(-1 != Hb.toLowerCase().indexOf("webkit") && -1 == Hb.indexOf("Edge")) && !(-1 != Hb.indexOf("Trident") || -1 != Hb.indexOf("MSIE")) && -1 == Hb.indexOf("Edge"),
        Ce = -1 != Hb.toLowerCase().indexOf("webkit") && -1 == Hb.indexOf("Edge");

    function De() {
        var a = pa.document;
        return a ? a.documentMode : void 0
    }
    var Ee;
    a: {
        var Fe = "",
            Ge = function() {
                var a = Hb;
                if (Be) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Ae) return /Edge\/([\d\.]+)/.exec(a);
                if (ze) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Ce) return /WebKit\/(\S+)/.exec(a);
                if (ye) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ge && (Fe = Ge ? Ge[1] : "");
        if (ze) {
            var He = De();
            if (null != He && He > parseFloat(Fe)) {
                Ee = String(He);
                break a
            }
        }
        Ee = Fe
    }
    var Ie = Ee,
        xe = {};

    function Je() {
        return we(function() {
            for (var a = 0, b = mb(String(Ie)).split("."), c = mb("10").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
                var g = b[e] || "",
                    h = c[e] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    a = vb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || vb(0 == g[2].length, 0 == h[2].length) || vb(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == a)
            }
            return 0 <= a
        })
    }
    var Ke;
    Ke = pa.document && ze ? De() : void 0;

    function Le(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    t = Le.prototype;
    t.clone = function() {
        return new Le(this.x, this.y)
    };
    t.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    t.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    t.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    t.translate = function(a, b) {
        a instanceof Le ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    t.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };

    function Me(a) {
        return a ? new Ne(Oe(a)) : Ea || (Ea = new Ne)
    }

    function Pe(a, b, c) {
        var d = document;
        c = c || d;
        a = a && "*" != a ? String(a).toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                d = {};
                for (var e = 0, g = 0, h; h = c[g]; g++) a == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (g = e = 0; h = c[g]; g++) a = h.className, "function" == typeof a.split && Ja(a.split(/\s+/), b) && (d[e++] = h);
            d.length = e;
            return d
        }
        return c
    }

    function Qe(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Zd(a.clientWidth, a.clientHeight)
    }

    function Re(a) {
        return a.scrollingElement ? a.scrollingElement : Ce || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    }

    function Se(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var g = c[e];
            !ua(g) || va(g) && 0 < g.nodeType ? d(g) : Ga(Te(g) ? Ka(g) : g, d)
        }
    }

    function Ue(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }

    function Oe(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Te(a) {
        if (a && "number" == typeof a.length) {
            if (va(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if ("function" == ta(a)) return "function" == typeof a.item
        }
        return !1
    }

    function Ne(a) {
        this.S = a || pa.document || document
    }
    t = Ne.prototype;
    t.nf = function(a) {
        return "string" === typeof a ? this.S.getElementById(a) : a
    };
    t.getElementsByTagName = function(a, b) {
        return (b || this.S).getElementsByTagName(String(a))
    };
    t.createElement = function(a) {
        var b = this.S;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    t.createTextNode = function(a) {
        return this.S.createTextNode(String(a))
    };
    t.appendChild = function(a, b) {
        a.appendChild(b)
    };
    t.append = function(a, b) {
        Se(Oe(a), a, arguments)
    };
    t.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    t.removeNode = Ue;
    t.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Ve(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    t = Ve.prototype;
    t.clone = function() {
        return new Ve(this.top, this.right, this.bottom, this.left)
    };
    t.contains = function(a) {
        return this && a ? a instanceof Ve ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    t.expand = function(a, b, c, d) {
        va(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    t.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    t.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    t.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    t.translate = function(a, b) {
        a instanceof Le ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    t.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function We(a, b) {
        a: {
            var c = Oe(a);
            if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                c = c[b] || c.getPropertyValue(b) || "";
                break a
            }
            c = ""
        }
        return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Xe(a) {
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
        ze && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Ye(a) {
        if (ze && !(8 <= Number(Ke))) return a.offsetParent;
        var b = Oe(a),
            c = We(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = We(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    }

    function Ze(a) {
        var b = Oe(a),
            c = new Le(0, 0);
        var d = b ? Oe(b) : document;
        d = !ze || 9 <= Number(Ke) || "CSS1Compat" == Me(d).S.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Xe(a);
        d = Me(b).S;
        b = Re(d);
        d = d.parentWindow || d.defaultView;
        b = ze && Je() && d.pageYOffset != b.scrollTop ? new Le(b.scrollLeft, b.scrollTop) : new Le(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function $e(a) {
        var b = gf;
        if ("none" != We(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            g = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = g;
        c.visibility = e;
        return a
    }

    function gf(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Ce && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Xe(a), new Zd(a.right - a.left, a.bottom - a.top)) : new Zd(b, c)
    };
    var hf = /([?|&]{1}nm=)([\d]{1,})/,
        jf = /(\?|&)clkt=-?[\d]*/g,
        kf = /(\?|&)bg=[^&]*/g,
        lf = /(\?|&)nx=-?[\d]+/g,
        mf = /(\?|&)ny=-?[\d]+/g;

    function nf(a) {
        return function() {
            for (var b = 0; b < a.length; b++) {
                var c = a[b],
                    d = c.element.href,
                    e = d.match(hf);
                e ? 3 == e.length && (d = d.replace(hf, e[1] + (parseInt(e[2], 10) + 1))) : d += (-1 == d.indexOf("?") ? "?" : "&") + "nm=1"; of (c, d)
            }
        }
    }

    function pf(a) {
        return function() {
            if (a.Td) {
                var b = "&clkt=" + ((new Date).getTime() - a.Td),
                    c = a.element.href;
                c = c.replace(jf, ""); of (a, c + b)
            }
        }
    }

    function qf(a) {
        return function(b) {
            a.Td = (new Date).getTime();
            var c = Ze(a.element),
                d = Math.round(b.clientX - c.x);
            b = Math.round(b.clientY - c.y);
            c = a.element.href;
            c = c.replace(lf, "");
            c = c.replace(mf, ""); of (a, c + ("&nx=" + d) + ("&ny=" + b))
        }
    }

    function rf(a) {
        return function() {
            var b = a.element.ownerDocument;
            if (b = (b.defaultView || b.parentWindow).csabg) {
                b = "&bg=" + b.vd();
                var c = a.element.href;
                c = c.replace(kf, ""); of (a, c + b)
            }
        }
    }

    function sf(a) {
        a.element.addEventListener("mouseover", nf([a]));
        a.element.addEventListener("mousedown", qf(a));
        var b = pf(a),
            c = rf(a);
        a.element.addEventListener("mouseup", function(d) {
            b(d);
            c(d);
            try {
                ue(a.element)
            } catch (e) {}
        })
    }

    function tf(a, b, c) {
        return -1 == a.indexOf(b) && 16334 > a.length + b.length && (a += b + encodeURIComponent(c), 16334 < a.length) ? a.substring(0, 16334) : a
    }

    function uf(a, b) {
        Wd(a.element, "mousedown", function() {
            try {
                var c = ce(b, !0);
                var d = ce(b, !1)
            } catch (g) {}
            if (c && d) {
                var e = a.element.href;
                e = tf(e, "&is=", [d, c].join("x")); of (a, e)
            }
        })
    }

    function vf(a, b, c, d) {
        for (var e = 0; e < a.length; e++) {
            var g = a[e];
            sf(g);
            var h = g.element.href;
            h = h.replace(wf, "");
            h = -1 == h.indexOf("?") ? h + g.Te.replace(/^&/, "?") : h + g.Te; of (g, h);
            uf(g, c);
            if (void 0 != d.refererUrl && (h = d.refererUrl, h = void 0 == h ? document.referrer : h, "" != h)) {
                var k = g.element.href;
                k = tf(k, "&rurl=", h); of (g, k)
            }
        }
        0 < a.length && b.addEventListener("mouseover", nf(a))
    };

    function xf(a, b) {
        this.Te = "&nb=" + (void 0 === b ? "" : b);
        this.element = a;
        this.Td = null
    }

    function of (a, b) {
        if (!(16384 < b.length)) {
            for (var c = [], d = a.element.innerHTML, e = a.element.firstChild; e; e = e.nextSibling) c.push(e.cloneNode(!0));
            Sb(a.element, b);
            if (ze && a.element.innerHTML != d)
                for (Rb(a.element, Pb), b = 0; b < c.length; b++) a.element.appendChild(c[b])
        }
    }
    var wf = /[&\?]nb=\d/;
    var yf = {},
        zf = {},
        Af = {},
        Bf = {},
        Cf = {};

    function Df() {
        throw Error("Do not instantiate directly");
    }
    Df.prototype.Fa = null;
    Df.prototype.toString = aa("content");

    function Ef() {
        Df.call(this)
    }
    Da(Ef, Df);
    Ef.prototype.Y = yf;

    function Ff() {
        Df.call(this)
    }
    Da(Ff, Df);
    Ff.prototype.Y = zf;
    Ff.prototype.Fa = 1;

    function Gf() {
        Df.call(this)
    }
    Da(Gf, Df);
    Gf.prototype.Y = Bf;
    Gf.prototype.Fa = 1;

    function Hf() {
        Df.call(this)
    }
    Da(Hf, Df);
    Hf.prototype.Y = Cf;
    Hf.prototype.Fa = 1;

    function If(a, b) {
        return null != a && a.Y === b
    };

    function Jf(a) {
        if (null != a) switch (a.Fa) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function G(a) {
        return If(a, yf) ? a : a instanceof Kb ? H(Mb(a).toString(), a.fc()) : H(Tb(String(String(a))), Jf(a))
    }

    function Kf(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c) {
            return new b(String(c))
        }
    }
    var H = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.Fa = d);
                return c
            }
        }(Ef),
        Lf = Kf(Gf),
        I = Kf(Hf);

    function Mf(a) {
        var b = [],
            c;
        for (c in a) b.push(c);
        return b
    }

    function K(a, b) {
        return "function" == ta(a) && "function" == ta(b) ? a.Y !== b.Y ? !1 : a.toString() === b.toString() : a instanceof Df && b instanceof Df ? a.Y != b.Y ? !1 : a.toString() == b.toString() : a == b
    }

    function Nf(a) {
        return a instanceof Df ? !!a.content : !!a
    }

    function Of(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c) {
            return (c = String(c)) ? new b(c) : ""
        }
    }
    var L = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = String(c);
                if (!c) return "";
                c = new b(c);
                void 0 !== d && (c.Fa = d);
                return c
            }
        }(Ef),
        Pf = Of(Ff),
        Qf = Of(Gf),
        O = Of(Hf);

    function Rf(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function P(a) {
        return If(a, yf) ? String(String(a.content).replace(Sf, "").replace(Tf, "&lt;")).replace(Uf, Vf) : Tb(String(a))
    }

    function Wf(a) {
        If(a, Bf) ? a = a.content.replace(/([^"'\s])$/, "$1 ") : (a = String(a), a = Xf.test(a) ? a : "zSoyz");
        return a
    }

    function Q(a) {
        If(a, zf) || If(a, Af) ? a = Yf(a) : a instanceof wb ? a = Yf(Bb(a).toString()) : a instanceof bb ? a = Yf(fb(a).toString()) : (a = String(a), a = Zf.test(a) ? a.replace($f, ag) : "about:invalid#zSoyz");
        return a
    }

    function bg(a) {
        If(a, zf) || If(a, Af) ? a = Yf(a) : a instanceof wb ? a = Yf(Bb(a).toString()) : a instanceof bb ? a = Yf(fb(a).toString()) : (a = String(a), a = cg.test(a) ? a.replace($f, ag) : "about:invalid#zSoyz");
        return a
    }

    function R(a) {
        If(a, Cf) ? a = Rf(a.content) : null == a ? a = "" : a instanceof Db ? (a instanceof Db && a.constructor === Db && a.Wf === Eb ? a = a.ee : (ta(a), a = "type_error:SafeStyle"), a = Rf(a)) : a instanceof Fb ? (a instanceof Fb && a.constructor === Fb && a.Vf === Gb ? a = a.de : (ta(a), a = "type_error:SafeStyleSheet"), a = Rf(a)) : (a = String(a), a = dg.test(a) ? a : "zSoyz");
        return a
    }

    function eg(a, b) {
        var c = Jf(a);
        if (null != c) b = c;
        else {
            var d;
            (d = b) || (d = null != a && a.Y === yf);
            c = b = 0;
            var e = !1;
            a += "";
            a = (d ? a.replace(Ta, "") : a).split($a);
            for (d = 0; d < a.length; d++) {
                var g = a[d];
                Wa.test(g) ? (b++, c++) : Xa.test(g) ? e = !0 : Va.test(g) ? c++ : ab.test(g) && (e = !0)
            }
            b = 0 == c ? e ? 1 : 0 : .4 < b / c ? -1 : 1
        }
        return b
    }
    var fg = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Vf(a) {
        return fg[a]
    }
    var gg = {
        "\x00": "\\0 ",
        "\b": "\\8 ",
        "\t": "\\9 ",
        "\n": "\\a ",
        "\x0B": "\\b ",
        "\f": "\\c ",
        "\r": "\\d ",
        '"': "\\22 ",
        "&": "\\26 ",
        "'": "\\27 ",
        "(": "\\28 ",
        ")": "\\29 ",
        "*": "\\2a ",
        "/": "\\2f ",
        ":": "\\3a ",
        ";": "\\3b ",
        "<": "\\3c ",
        "=": "\\3d ",
        ">": "\\3e ",
        "@": "\\40 ",
        "\\": "\\5c ",
        "{": "\\7b ",
        "}": "\\7d ",
        "\u0085": "\\85 ",
        "\u00a0": "\\a0 ",
        "\u2028": "\\2028 ",
        "\u2029": "\\2029 "
    };

    function hg(a) {
        return gg[a]
    }
    var ig = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function ag(a) {
        return ig[a]
    }
    var Uf = /[\x00\x22\x27\x3c\x3e]/g,
        jg = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        kg = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        lg = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
        $f = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        dg = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s+|$))*$/i,
        Zf =
        /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        cg = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        Xf = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i;

    function Yf(a) {
        return String(a).replace($f, ag)
    }
    var Sf = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Tf = /</g;

    function mg(a) {
        a = a.text;
        return H('<span class="' + P("u_") + " " + P("v_") + '">' + G(a) + "</span>")
    };

    function ng(a) {
        var b = a.Tf,
            c = a.A,
            d = a.Se,
            e = a.Bg,
            g = a.text,
            h = a.Li,
            k = a.J;
        a = H;
        e = '<div class="' + P("ja_") + (e ? " " + P("ka_") : "") + " " + P("la_") + '">';
        var l = "",
            n = O("-ms-flex-pack: space-around; -webkit-box-pack: justify; -webkit-justify-content: space-around; justify-content: space-around;"),
            p = O("-ms-flex-align: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center;"),
            r = "arrowSvgButton" + (h ? " isSellerFirst" : "");
        l += '<a class="' + P("ma_") + (h ? " " + P("na_") : "") + '" href="' + P(Q(b)) + '" target="' +
            (c ? "_blank" : "_top") + '"' + (d ? ' id="' + P(d) + '"' : "") + ' style="' + P(R(n)) + P(R(p)) + '">' + og({
                R: r,
                J: k
            }) + '<div class="' + P("oa_") + '"><span> ' + G(g) + " </span></div></a>";
        b = H(l);
        return a(e + b + "</div>")
    }

    function og(a) {
        var b = a.J;
        return H('<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class="' + P(a.R) + '"><defs><polygon id="path-1" points="10 3.33333333 8.825 4.50833333 13.475 9.16666667 3.33333333 9.16666667 3.33333333 10.8333333 13.475 10.8333333 8.825 15.4916667 10 16.6666667 16.6666667 10"></polygon></defs><g id="V1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-1196.000000, -367.000000)"><g id="Concept-1" transform="translate(53.000000, 53.000000)"><g id="Spec" transform="translate(704.000000, 68.000000)"><g id="Navigation/ic_arrow_forward" transform="translate(436.000000, 243.000000)' + (b ?
            " rotate(180) translate(-20, -20)" : "") + '"><polygon id="Bounds" points="0 0 20 0 20 20 0 20"></polygon><mask id="mask-2"><use xlink:href="#path-1"></use></mask><use id="Mask" class="' + P("pa_") + '" fill-rule="evenodd" xlink:href="#path-1"></use><g id="Color-/-Color-08" mask="url(#mask-2)" fill-rule="evenodd"><rect id="color" x="0" y="0" width="20" height="20"></rect></g></g></g></g></g></svg>')
    };

    function pg(a) {
        var b = a.content,
            c = a.Bb,
            d = a.A,
            e = a.ja,
            g = a.R,
            h = a.gb;
        return H('<a href="' + P(Q(a.href)) + '" target="' + (d ? "_blank" : "_top") + '"' + (e ? ' id="' + P(e) + '"' : "") + (g ? ' class="' + P(g) + '"' : "") + (c ? ' data-notrack="true"' : "") + (h ? " " + Wf(h) : "") + ">" + G(b) + "</a>")
    };

    function qg(a) {
        a = a || {};
        return Lf('target="' + (a.A ? "_blank" : "_top") + '"')
    };

    function rg(a) {
        a = a.text;
        return H(sg({
            text: a,
            Ib: 0 > eg(a)
        }))
    }

    function sg(a) {
        var b = a.text;
        a = a.Ib;
        return H(0 < ("" + b).length ? '<span dir="' + (a ? "rtl" : "ltr") + '">' + G(b) + "</span>" : "")
    };

    function tg(a) {
        var b = a.uid,
            c = a.url,
            d = a.text,
            e = a.Dg,
            g = a.Bb,
            h = a.A;
        a = a.hi;
        var k = H;
        b = '<div class="' + P("ba_") + '" id="' + P(b) + '">';
        e = K(e, "ctc") ? '<svg xmlns="http://www.w3.org/2000/svg" class="svgButton" viewBox="0 0 48 48"><path d="M0 0h48v48h-48z" fill="none"/><path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49 2.24.74 4.65 1.14 7.14 1.14 1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2-18.78 0-34-15.22-34-34 0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z"/></svg>' :
            K(e, "ctd") ? '<svg xmlns="http://www.w3.org/2000/svg" class="svgButtonCtd svgButton" viewBox="0 0 48 48"><path d="M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z"/><path d="M0 0h48v48H0z" fill="none"/></svg>' : K(e, "cta") ? og({
                R: "svgButton cta"
            }) : "";
        e = H('<a href="' + P(Q(c)) + '" class="' + P(a) + '"' + (g ? ' data-notrack="true"' : "") + " " + qg({
            A: h
        }) + ">" + e + "</a>");
        return k(b + e + '<a href="' + P(Q(c)) + '" class="' + P(a) + " " + P("ca_") + '"' + (g ? ' data-notrack="true"' : "") + " " + qg({
            A: h
        }) + ">" + rg({
            text: d
        }) + "</a></div>")
    };

    function ug(a) {
        var b = a.Da,
            c = a.Zc,
            d = a.A,
            e = a.Md;
        a = a.pg;
        return H(b.adIconUrl ? (c ? '<a href="' + P(Q(b.u)) + '" ' + qg({
            A: d
        }) + (e ? ' id="' + P(e) + '"' : "") + ' style="display: block;">' : "") + '<img class="adIcon" src="' + (a ? P(bg(a)) : P(bg(b.adIconUrl))) + '"/>' + (c ? "</a>" : "") : "")
    };

    function vg(a) {
        var b = a.Db,
            c = a.Eb,
            d = a.Ia,
            e = a.Oa,
            g = a.xh,
            h = a.bf;
        a = a.ab ? "right" : "left";
        b = '<div style="overflow: hidden;"><div style="float: ' + P(R(a)) + "; width: " + P(R(d + "px")) + ';"' + (g ? ' class="' + P(g) + '"' : "") + ">" + G(b) + '</div><div style="margin-' + P(R(a)) + ": " + P(R(d + e + "px")) + ';"' + (h ? ' class="' + P(h) + '"' : "") + ">" + G(c) + "</div></div>";
        return H(b)
    };

    function wg(a, b, c) {
        b = c || b;
        var d = a.Og;
        c = a.Mg;
        var e = a.Ng,
            g = a.ij,
            h = a.J,
            k = a.Kh,
            l = a.Kd,
            n = a.Jd,
            p = a.Gd,
            r = a.Da,
            q = a.Wa,
            w = a.A,
            z = a.Lc;
        a = H;
        g = '<div class="' + P("ra_") + " " + P("c_") + '" id="' + P(g) + '" data-bg="true"><div class="' + P("sa_") + '">' + ug({
            Da: r,
            Zc: q,
            A: w,
            Md: z,
            pg: r.ctd ? r.ctd.iu : null
        }) + '<div class="' + P("ta_") + '">';
        q = r.adIconUrl ? null : k;
        k = H;
        r = '<div class="' + P("ua_") + '">';
        if (Nf(q) && l) {
            var A = {
                content: d,
                Jh: q,
                Kd: l,
                Jd: n,
                Gd: p,
                Ia: 40,
                Oa: 8,
                ab: h
            };
            d = A.content;
            z = A.Jh;
            var E = A.Kd,
                D = A.Jd,
                C = A.Gd;
            h = A.Ia;
            l = A.Oa;
            n = A.ab;
            q = A.la;
            w = A.Cj;
            p = H;
            Nf(z) && E ? (A = '<div class="ctd-itd"><a class="ctd-il" href="' + P(Q(D)) + '" ' + qg(A) + '><span class="ctd-ico-s"></span><img class="ctd-ico' + (C ? " rc" : "") + '" ' + Wf(E) + "=", E = If(h, yf) ? String(String(h.content).replace(Sf, "").replace(Tf, "&lt;")).replace(kg, Vf) : String(h).replace(jg, Vf), z = A + E + ' src="' + P(bg(z)) + '" alt></a>', q = q && w ? H('<div class="ctd-rate"><div class="ctd-rate-bg"><div class="ctd-rate-fg" style="width: ' + P(R(q / 5 * 100)) + '%;"></div></div><div class="ctd-rate-txt"><span class="ctd-usr-ico"></span>' +
                G(w) + "</div></div>") : "", q = z + q + "</div>") : q = "";
            b = p(vg({
                Db: L(q),
                Eb: L("" + G(d)),
                Ia: h,
                Oa: l,
                ab: n,
                bf: "ctd-ico-content"
            }, b))
        } else b = G(d);
        c = k(r + b + "</div><div>" + G(c) + "</div>" + (Nf(e) && !K(e, "") ? '<div class="' + P("va_") + '">' + G(e) + "</div>" : ""));
        return a(g + c + "</div></div></div>")
    };

    function xg(a) {
        var b = a.uid,
            c = a.vi;
        a = a.A;
        var d = '<div class="' + P("zb_") + '" id="' + P(b) + '">';
        b = c.r[0];
        c = d;
        d = b.h;
        var e = b.d,
            g = b.p;
        b = b.u;
        a = H('<div class="' + P("o_") + '"><span class="' + P("xb_") + '">' + pg({
            href: b,
            content: d,
            A: a,
            R: "priceExtension-Link"
        }) + '</span><span class="' + P("p_") + '"> - ' + G(g) + '</span><span class="' + P("yb_") + '"> - ' + G(e) + "</span></div>");
        return H(c + (a + "</div>"))
    };

    function yg(a) {
        var b = a.uid,
            c = a.Ec;
        a = a.A;
        b = '<div class="' + P("ac_") + " " + P("q_") + '" id="' + P(b) + '">';
        for (var d = c.length, e = 0; e < d; e++) b += zg({
            Ti: "raf-sitelink-ol",
            Na: c[e],
            A: a,
            xi: L(0 != e ? "&nbsp;\u00b7&nbsp;" : "")
        });
        return H(b + "</div>")
    }

    function Ag(a) {
        var b = a.uid,
            c = a.Ec;
        a = a.A;
        b = '<div class="' + P("ac_") + " " + P("s_") + '" id="' + P(b) + '">';
        for (var d = c.length, e = 0; e < d; e++) b += zg({
            Na: c[e],
            A: a
        });
        return H(b + "</div>")
    }

    function Bg(a) {
        var b = a.uid,
            c = a.Ec;
        a = a.A;
        b = '<div class="' + P("ac_") + " " + P("r_") + '" id="' + P(b) + '"><div class="' + P("bc_") + '">';
        for (var d = Math.max(0, Math.ceil((c.length - 0) / 2)), e = 0; e < d; e++) b += zg({
            Na: c[2 * e],
            A: a
        });
        b += '</div><div class="' + P("bc_") + '">';
        d = Math.max(0, Math.ceil((c.length - 1) / 2));
        for (e = 0; e < d; e++) b += zg({
            Na: c[1 + 2 * e],
            A: a
        });
        return H(b + "</div></div>")
    }

    function Cg(a) {
        var b = a.uid,
            c = a.Ec;
        a = a.A;
        b = '<div class="' + P("ac_") + " " + P("h_") + '" id="' + P(b) + '"><div class="' + P("i_") + '">';
        for (var d = Math.max(0, Math.ceil((c.length - 0) / 2)), e = 0; e < d; e++) b += Dg({
            Na: c[2 * e],
            A: a
        });
        b += '</div><div class="' + P("i_") + '">';
        d = Math.max(0, Math.ceil((c.length - 1) / 2));
        for (e = 0; e < d; e++) b += Dg({
            Na: c[1 + 2 * e],
            A: a
        });
        return H(b + "</div></div>")
    }

    function Dg(a) {
        var b = a.Na;
        a = a.A;
        return H('<div class="' + P("cc_") + '"><a href="' + P(Q(b.u)) + '" class="' + P("dc_") + '" ' + qg({
            A: a
        }) + ">" + rg({
            text: b.t
        }) + '</a><br/><div class="' + P("ec_") + '">' + rg({
            text: b.l2
        }) + "<br/>" + rg({
            text: b.l3
        }) + "</div></div>")
    }

    function zg(a) {
        var b = a.Ti,
            c = a.Na,
            d = a.A;
        a = a.xi;
        return H('<div class="' + (b ? P(b) : "") + " " + P("g_") + '">' + G(null != a ? a : "") + '<a href="' + P(Q(c.u)) + '" ' + qg({
            A: d
        }) + ">" + rg({
            text: c.t
        }) + "</a></div>")
    };

    function Eg(a, b, c) {
        b = c || b;
        c = a.hg;
        var d = a.gg,
            e = a.$f,
            g = a.J,
            h = a.jj,
            k = a.pe,
            l = a.Sh,
            n = a.Tc;
        return H('<div id="' + P(a.kj) + '" class="' + P("b_") + " " + P("c_") + " " + P("a_") + '"><div class="sfblAd ' + (l ? "isLast" : "notLast") + '">' + vg({
            Db: c,
            Eb: e,
            Ia: k,
            Oa: 10,
            ab: g,
            bf: "fc_"
        }, b) + '</div></div><div id="' + P(h) + '" class="' + P("b_") + " " + P("c_") + " " + P("a_") + '" style="display: none;"><div class="sfblAd ' + (l ? "isLast" : "notLast") + '">' + G(d) + '<div class="sfblNarrowPadder ' + P("fc_") + '">' + G(e) + "</div>" + G(n) + "</div></div>")
    }

    function Fg(a) {
        var b = a.oj,
            c = a.pj,
            d = a.Mb,
            e = a.Mi,
            g = a.Vh,
            h = a.Tc;
        return H('<div title="' + P(a.mj) + '" class="sfblSellerNameWrapper' + (c ? g ? " sfblWtaWrapperNarrow" : " sfblWtaWrapperWide" : "") + '" dir="ltr">' + G(b) + "</div>" + (c ? G(c) : "") + (d ? G(d) : "") + (Nf(e) && !g ? G(e) : "") + (Nf(h) && !g ? G(h) : ""))
    }

    function Gg(a) {
        var b = "";
        v(a.Ac);
        a = a.Ac;
        for (var c = a.length, d = 0; d < c; d++) {
            var e = a[d];
            b += '<div class="' + P("a_") + '">' + G(e) + "</div>"
        }
        return H(b)
    };

    function Hg(a) {
        var b = a.Ea,
            c = a.yb;
        a = a.xb;
        return H('<a class="' + P("wc_") + '" href="' + P(Q(c)) + '" data-notrack="true" target="_blank" id="' + P(b) + '">' + rg({
            text: a
        }) + "</a>")
    }

    function Ig(a) {
        var b = a.Ea,
            c = a.yb,
            d = a.xb;
        return H('<div id="' + P(a.kc) + '" class="' + P("xc_") + '" data-position="below">&#9660</div>' + Hg({
            Ea: b,
            yb: c,
            xb: d
        }))
    }

    function Jg(a) {
        var b = a.Ea,
            c = a.yb,
            d = a.xb;
        return H('<div id="' + P(a.kc) + '" class="' + P("yc_") + '" data-position="over"><div class="' + P("zc_") + '">i</div></div>' + Hg({
            Ea: b,
            yb: c,
            xb: d
        }))
    }

    function Kg(a) {
        var b = a.Pc,
            c = a.Qc,
            d = a.Oc;
        a = a.uf;
        return I("." + R("xc_") + "{display:inline-block; margin:0 3px; cursor:pointer; color:" + R(b) + "; font-size:" + R(null != c ? c : 8) + "px; vertical-align:12%;" + (d ? R(d) : "") + "}." + R("yc_") + "{display:inline; margin-top:5px; float:right; position:relative; font-size:14px;" + (a ? R(a) : "") + "}." + R("zc_") + "{display:block; background-color:#c7c7c7; height:14px; width:14px; font-size:11px; border-radius:50%; text-align:center; font-weight:bold; color:white;}." + R("wc_") + "{display:none; position:absolute; background-color:#fff; border:1px solid rgba(0,0,0,0.2); font-size:12px; color:#666; padding:5px; white-space:nowrap; text-decoration:none; z-index:1;}")
    };

    function Lg(a, b) {
        b = (b || Me()).createElement("DIV");
        if (va(a))
            if (a instanceof Df) {
                if (a.Y !== yf) throw Error("Sanitized content was not of kind HTML.");
                a = Ob(a.toString(), a.Fa || null)
            } else a = Nb("zSoyz");
        else a = Nb(String(a));
        Rb(b, a);
        return 1 == b.childNodes.length && (a = b.firstChild, 1 == a.nodeType) ? a : b
    }
    var Mg = {};

    function Ng(a) {
        var b = a.Lg,
            c = a.Ph,
            d = a.Zh,
            e = a.Ag,
            g = a.Fg,
            h = a.Sf,
            k = a.Le,
            l = a.Qg,
            n = a.Rg,
            p = a.Xe,
            r = a.Ye,
            q = a.Ve,
            w = a.Tg,
            z = a.Ug,
            A = a.Sg,
            E = a.Vg,
            D = a.We,
            C = a.Ue,
            J = a.fontFamily,
            M = a.Bh,
            N = a.jf,
            W = a.ef,
            Ba = a.gf,
            Ua = a.Ch,
            Uc = a.hf,
            La = a.df,
            vl = a.fj,
            wl = a.Be,
            xl = a.Gi,
            Vc = a.Hi,
            Mh = a.Fi,
            yl = a.Ii,
            Nh = a.Ei,
            Oh = a.ri,
            Ph = a.cg,
            af = a.dg,
            Qh = a.eg,
            Rh = a.ag,
            zl = a.xg,
            Sh = a.yg,
            Al = a.zg,
            Bl = a.wg,
            Wc = a.og,
            bf = a.jg,
            Xc = a.kg,
            Yc = a.mg,
            Zc = a.lg,
            $c = a.ng,
            ad = a.gi,
            Ya = a.ei,
            Za = a.fi,
            bd = a.Mj,
            cf = a.Nj,
            Th = a.ug,
            cd = a.type,
            xb = a.Wg,
            dd = a.Ih,
            jb = a.Hh,
            Cl = a.Xh,
            Dl = a.kb,
            df = a.Mh,
            Uh = a.Kg,
            El = a.Jg,
            Fl = a.Ig,
            ef = "",
            S = b.isRtl ? "right" : "left",
            ha = b.isRtl ? "left" : "right";
        var Gl = h.eb ? "padding-top:" + R(h.Ic) + "px; padding-bottom:" + R(h.Sc) + "px;" : c || d ? "padding:7px 0;" : "";
        var Hl = La ? "font-size:" + R(La) + "px;" : W ? "font-size:" + R(W) + "px;" : "";
        var Il = Ua ? R(Ua) : d ? "15" : "13";
        var Jl = C ? R(C) : p ? R(p) : "#666";
        var Kl = D ? R(D) : C ? R(C) : "#666";
        var Ll = Uc ? "font-size:" + R(Uc) + "px;" : La ? "font-size:" + R(La) + "px;" : "";
        if (cd && K(cd, "relatedsearch")) {
            var Ml = jb ? "text-align:" + (K(S, "right") && K(jb, "left") ? "right" : K(S, "right") && K(jb, "right") ?
                "left" : R(jb)) + ";" : "";
            var Nl = xb ? dd && jb ? K(jb, "center") ? "padding-right:" + R(Math.floor(xb / 2)) + "px; padding-left:" + R(Math.floor(xb / 2)) + "px;" : K(jb, "right") ? "padding-" + R(S) + ":" + R(xb) + "px;" : "padding-" + R(ha) + ":" + R(xb) + "px;" : "padding-right:" + R(xb) + "px;" : "";
            var Vh = ".radlinkC{" + (dd && N < Ua ? "padding:" + R(1 + (Ua - N)) + "px 4px;" : "padding:1px 4px;") + "}.col{" + Ml + (dd ? "border-" + R(ha) + ":1px solid " + R(k) + ";" : "") + "vertical-align:top;" + Nl + "}" + (dd ? "#adBlock h2{float:" + R(S) + "; line-height:1.4em; vertical-align:top;" + (N >= Ua ? "padding:" +
                R(3 + (N - Ua)) + "px 4px;" : "padding:3px 4px;") + "}.ad{border-bottom:none;}.col.l{border-" + R(ha) + ":none;}" : "#adBlock h2{text-align:" + R(S) + ";}")
        } else Vh = "";
        var Ol = Za ? "line-height:" + R(Za) + "px;" : d ? "line-height:1.5em;" : "";
        var Pl = ef,
            Ql = "<style>#response_debug_output{max-height:500px; overflow:auto;}body{" + (c ? "-webkit-text-size-adjust:100%;" : "") + "color:" + (p ? R(p) : "#000") + "; font-family:" + (bd ? "'" + String(bd).replace(lg, hg) + "'," : "") + (J ? R(J) : "arial") + ", sans-serif; font-size:" + (c || d ? "14" : "12") + "px; width:" + R(e) + "; padding:0px; margin:0px;" +
            (z && (Sh || af) ? "padding-right:2px;" : "") + (df && Nf(b.isRtl) ? "direction:rtl;" : "") + "}body{-webkit-tap-highlight-color:rgba(0,0,0,0); -webkit-tap-highlight-color:transparent;}a{-webkit-tap-highlight-color:initial;}.ad{padding:2px 0; margin:0px; word-wrap:break-word;" + Gl + (k ? "border-bottom:1px solid " + R(k) + ";" : "") + "}" + (Nh && (!df || cd && K(cd, "relatedsearch")) ? "." + R("b_") + ":hover{background-color:" + R(Nh) + ";}" : "") + ".ad.f{" + (h.eb ? "padding-top:2px;" : "") + "}.ad.fr{" + (h.eb ? "padding-top:2px;" : "") + "}.ad.l{" + (h.eb ? "padding-bottom:2px;" :
                "") + (k ? "border-bottom:0px;" : "") + "}.ad.lr{" + (h.eb ? "padding-bottom:2px;" : "") + "}#adBlock b{" + (Fl || df ? "" : "font-weight:normal;") + (El && E ? "color:" + R(E) + ";" : "") + "}.descText, .ctcCO, ." + R("t_") + "{" + (W ? "font-size:" + R(W) + "px;" : "") + "}.sr-div{" + Hl + "}" + (Ya || c || d ? ".descText, ." + R("t_") + "{line-height:" + (Ya ? R(Ya) + "px" : "1.5em") + ";}" : "") + "." + R("b_") + "{padding:4px 4px; position:relative;" + (l ? "background-color:" + R(l) + ";" : "") + (n && Ph ? "border-left:1px solid " + R(n) + ";" : "") + (n && af ? "border-right:1px solid " + R(n) + ";" : "") + (n &&
                Qh ? "border-top:1px solid " + R(n) + ";" : "") + (n && Rh ? "border-bottom:1px solid " + R(n) + ";" : "") + "}.ad span{_width:99%;}#adBlock{background:#FFF none repeat scroll 0 0; margin:0; padding:0;" + (w ? "background-color:" + R(w) + ";" : "") + (z && zl ? "border-left:1px solid " + R(z) + ";" : "") + (z && Sh ? "border-right:1px solid " + R(z) + ";" : "") + (z && Al ? "border-top:1px solid " + R(z) + ";" : "") + (z && Bl ? "border-bottom:1px solid " + R(z) + ";" : "") + "}#adBlock h2{font-size:" + Il + "px; font-weight:normal;" + (Th ? "padding-bottom:" + R(Th) + "px;" : "padding:0;") +
            "margin:0;" + (Nf(M) || cf ? "font-family:" + (cf ? "'" + String(cf).replace(lg, hg) + "'," : "") + (M ? R(M) + "," : "") + " sans-serif;" : "") + (b.isCse ? "text-align:" + R(S) + ";" : "") + "}#adBlock span.lhHeader{margin:3px 4px 0;}#adBlock span.rhHeader{margin:0 4px; float:" + R(ha) + ";" + (c ? "display:inline;" : "") + "position:relative; z-index:1;}#adBlock h2 a, #adBlock h2{color:" + (A ? R(A) : "#676767") + "; text-decoration:none;}." + R("d_") + ", .ctcT a{color:" + R(r) + ";}." + R("d_") + ", .ctcT a{" + (N ? "font-size:" + R(N) + "px;" : "") + "font-weight:" + (vl ? "bold" :
                "normal") + ";}." + R("d_") + "{" + (wl ? "display:inline-block;" : "") + "line-height:" + (ad ? R(ad) + "px" : "1.4em") + ";" + (Oh ? "text-decoration:none;" : "") + "margin:0; padding:0;}" + (yl ? "." + R("d_") + ":hover, ." + R("e_") + ":hover, .sr-rl:hover{text-decoration:underline;}a{text-decoration:none;}" : "") + "h2 a:hover{color:" + (A ? R(A) : "#676767") + "; text-decoration:none; font-weight:normal; background-color:transparent;}." + R("e_") + "{" + (Za ? "line-height:" + R(Za) + "px;" : "") + "color:" + R(q) + "; font-style:normal; font-weight:normal;" + (Ba ? "font-size:" +
                R(Ba) + "px;" : "") + "text-decoration:none;}.adStd.oneLine .descText{margin:0 4px;}.adStd.twoLine ." + R("e_") + "{margin-" + R(ha) + ":8px;}.sr-div, .sr-rl{color:" + Jl + ";}.sr-rl{text-decoration:none;}.sr-rl:hover{text-decoration:underline;}.sr-gt{color:" + R(null != C ? C : "#777") + ";}.sr-gl{text-decoration:none;}.sr-gl:hover{text-decoration:underline;}.sr-p{padding-right:62px;}.sr-nsc{display:inline; position:relative;}.sr-star{position:absolute;" + R(S) + ":0px;}a:hover{" + (xl ? "font-weight:bold;" : "") + (Vc ? "color:" + R(Vc) +
                ";" : "") + (Mh ? "background-color:" + R(Mh) + ";" : "") + "}.ctcLD{color:#676767; font-size:80%;}.ctcT{margin:4px 0px 2px;}.ctcT a{" + (c && !Oh ? "text-decoration:underline;" : "text-decoration:none;") + "}.ctcCO{font-weight:bold;}.ctd-td-cr{vertical-align:top; padding-" + R(ha) + ":12px; padding-" + R(S) + ":6px;}.ctd-itd{width:45px;}.ctd-i-mini{margin-top:5px; margin-" + R(ha) + ":1px; margin-bottom:0px; margin-" + R(S) + ":1px; width:16px; height:16px;}.ctd-il{width:45px; height:45px; display:block; margin:auto;}.ctd-ico{border:none; vertical-align:middle;}.ctd-ico-s{display:inline-block; height:100%; vertical-align:middle;}.ctd-ico.rc{border-radius:8px;}.ctd-ico.rc-mini{border-radius:4px;}.ctd-rate{color:#8d8d8d; display:inline-block; font-weight:300; margin-top:4px; font-size:10px;}.ctd-rate-bg{background:url(/images/afs/mobile/ctd-small-star-off.png); height:8px; width:45px; display:inline-block; vertical-align:top; white-space:nowrap;}.ctd-rate-fg{background:url(/images/afs/mobile/ctd-small-star-on.png) " +
            R(S) + " bottom; height:8px;}.ctd-rate-txt{display:inline-block; vertical-align:top; white-space:nowrap; margin-top:1px;}.ctd-rate-txt.inline{margin-" + R(S) + ":4px; margin-" + R(ha) + ":4px;}.ctd-usr-ico{background:url(/images/afs/mobile/ctd-person-icon.png); background-position:center; background-repeat:no-repeat; display:inline-block; width:8px; height:8px; position:relative; margin-" + R(S) + ":2px; margin-" + R(ha) + ":4px;}" + (Wc && bf && Uh ? ".adIcon{visibility:visible; width:" + R(Wc) + "px; height:" + R(bf) + "px; border:none; float:" +
                R(S) + "; margin-" + R(S) + ":" + R(null != Yc ? Yc : 0) + "px; margin-" + R(ha) + ":" + R(null != Zc ? Zc : 4) + "px; margin-top:" + R(null != Xc ? Xc : 4) + "px; margin-bottom:" + R(null != $c ? $c : 0) + "px;}.adD, ." + R("b_") + "{display:block; overflow:hidden;}" : "") + ".location{color:" + Kl + ";" + Ll + "}" + (c || d ? ".sr-div{margin-top:12px;}.location{margin-top:10px;}" : "") + (c ? ".adD{clear:" + R(ha) + ";}" : "") + Vh,
            Wh = b.isRtl,
            Rl = Wh ? "right" : "left";
        var Sl = "." + R("aa_") + "{margin:0 4px;}." + R("z_") + "{vertical-align:middle;}" + (Wh ? '.buttonImage{-moz-transform:scaleX(-1); -o-transform:scaleX(-1); -webkit-transform:scaleX(-1); transform:scaleX(-1); filter:FlipH; -ms-filter:"FlipH";}' :
            "") + ".svgButton{vertical-align:middle; fill:" + R(r) + "; height:" + R(g) + "px; width:" + R(g) + "px;}.svgButton.cta{width:15px; margin-left:4px; height:15px;}." + R("ba_") + "{line-height:40px;}." + R("ca_") + "{margin-" + R(Rl) + ":16px; color:" + R(r) + "; text-decoration:none;" + (La ? "font-size:" + R(La) + "px;" : "") + "}";
        var Tl = I(Sl);
        var Ul = Ql + Tl;
        if (Cl) {
            var Xh = a.Le,
                Yh = a.Ue,
                Vl = a.Ve,
                Zh = a.We,
                $h = a.Xe,
                ai = a.Ye,
                bi = a.df,
                ed = a.ef,
                fd = a.gf,
                ci = a.hf,
                di = a.jf,
                ei = a.Sf,
                fi = ei.Ic,
                gi = ei.Sc;
            var Wl = Zh ? R(Zh) : Yh ? R(Yh) : "#777";
            var Xl = ci ? R(ci) : bi ? R(bi) :
                "13";
            var hi = I("." + R("j_") + ":hover, ." + R("e_") + ":hover, .sfblSitelink:hover{text-decoration:underline;}." + R("e_") + "{line-height:normal;}.sfblAd{padding:" + R(null != fi ? fi : 17) + "px 0 " + R(null != gi ? gi : 17) + "px 0;}.sfblAd.notLast{border-bottom:1px solid " + R(null != Xh ? Xh : "#E1E1E1") + ";}.sfblNarrowPadder{padding-top:4px;}.sfblFavicon{vertical-align:top; width:16px; height:16px; padding:0 1px;}.sfblSellerNameWrapper{overflow:hidden; text-overflow:ellipsis; color:" + R(Vl) + "; font-size:" + R(null != fd ? fd : "13") + "px;}.sfblWtaWrapperWide{display:inline-block; vertical-align:bottom; word-wrap:normal;" +
                (fd ? "max-width:" + R(106 - fd) + "px;" : "max-width:95px;") + "}.sfblWtaWrapperNarrow{display:inline-block; vertical-align:bottom;}.sfblSellerRatingsWrapper{padding-top:3px;}." + R("j_") + "{display:block;" + (di ? "font-size:" + R(di) + "px;" : "") + "font-weight:bold; text-decoration:none; color:" + R(ai) + "; line-height:normal;}.descText{display:inline-block; line-height:normal; padding-top:3px;}.descText, ." + R("t_") + ", ." + R("ec_") + "{color:" + R(null != $h ? $h : "#333") + "; font-size:" + R(null != ed ? ed : "13") + "px;}.sfblSitelinksWrapper{padding-top:4px; max-width:450px; font-size:" +
                R(null != ed ? ed : "13") + "px;}.sfblSitelink{text-decoration:none; line-height:17px; color:" + R(ai) + "; word-wrap:normal;}.location{color:" + Wl + "; font-size:" + Xl + "px; line-height:1.3;}." + R("w_") + "{color:#777;}." + R("b_") + "{padding:0;}")
        } else hi = "";
        var Yl = Ul + hi + Kg({
                Oc: O(2 == Dl ? "margin-" + R(ha) + ":8px;" : ""),
                Pc: q,
                Qc: Ba ? Ba - 4 : null
            }) + "." + R("w_") + "{" + Ol + (Ba ? "font-size:" + R(Ba) + "px;" : "") + "}." + R("x_") + "{white-space:nowrap;}." + R("y_") + "{display:inline-block;}",
            Zl = c || d;
        var $l = "." + R("priceExtension-Link") + "{text-decoration:none; color:" +
            R(r) + ";}." + R("o_") + " ." + R("yb_") + "{color:" + R(null != C ? C : "#666") + ";}." + R("o_") + "{" + (Ya || Zl ? "line-height:" + (Ya ? R(Ya) + "px" : "20px") + ";" : "") + (W ? "font-size:" + R(W) + "px;" : "") + "}." + R("o_") + " ." + R("p_") + "{color:" + R(null != p ? p : "#000") + ";}";
        var am = I($l);
        var bm = Yl + am,
            yb = "";
        var cm = La ? "font-size:" + R(La) + "px;" : W ? "font-size:" + R(W) + "px;" : "";
        yb += "." + R("ac_") + "{margin-top:4px;" + cm + "}." + R("ac_") + " a{text-decoration:none; color:" + R(r) + ";}." + R("ac_") + " a:hover{text-decoration:underline;}";
        yb += "." + R("raf-sitelink-ol") + "{display:inline-block;}." +
            R("q_") + "{overflow:hidden; line-height:1.2em; height:1.2em;}";
        yb += "." + R("s_") + "{line-height:1.5em; margin-" + R(S) + ":12px;}";
        yb += "." + R("r_") + "{white-space:nowrap;}." + R("bc_") + "{display:inline-block; line-height:1.5em; max-width:42%; padding-" + R(S) + ":12px; white-space:normal; vertical-align:top;}";
        yb += "." + R("h_") + "{white-space:nowrap; overflow-x:scroll;}." + R("i_") + "{display:inline-block; padding-left:30px; padding-right:30px; white-space:normal;}." + R("cc_") + "{padding-top:1em;}." + R("dc_") + "{" + (N ? "font-size:" +
            R(N) + "px;" : "") + "}." + R("ec_") + "{white-space:nowrap;}";
        var dm = I(yb);
        var em = bm + dm,
            ii = b.isRtl,
            ji = "",
            fm = "" + (Vc ? R(Vc) : R(r)),
            ki = O(fm);
        var gm = W ? R(W) + "px" : N ? R(N) + "px" : "13px";
        var ff = O("" + gm),
            hm = "" + R(r),
            li = O(hm),
            mi = ii ? "right" : "left",
            ni = ii ? "left" : "right";
        ji += "." + R("ma_") + "{max-width:200px; height:28px; cursor:pointer; margin-bottom:7px; padding-" + R(mi) + ":5px; padding-" + R(ni) + ":5px; border-radius:2px; text-decoration:none; font-size:" + R(ff) + "; line-height:1.5em; color:" + R(li) + "; font-weight:normal; text-decoration:none; vertical-align:bottom; box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); transition:all .08s linear,min-width .15s cubic-bezier(0.4,0.0,0.2,1); box-sizing:border-box; display:flex; display:-ms-flexbox; display:-webkit-box; display:-webkit-flex; position:relative; margin-" +
            R(mi) + ":1px;}." + R("oa_") + "{max-width:100%; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}." + R("ka_") + " ." + R("ma_") + "{margin-top:4px;}." + R("ma_") + "." + R("na_") + "{max-width:105px; font-size:13px; width:100%; overflow-wrap:normal;}." + R("ma_") + ":hover{border:" + R(ki) + "; text-decoration:underline;}.arrowSvgButton{width:" + R(ff) + "; height:" + R(ff) + "; padding-" + R(ni) + ":3px;}.isSellerFirst{padding-top:0;}." + R("pa_") + "{fill:" + R(li) + ";}." + R("ma_") + ":hover ." + R("pa_") + "{fill:" + R(ki) + ";}." + R("la_") +
            "{display:-ms-flexbox; display:-webkit-box; display:-webkit-flex; display:flex; box-sizing:border-box;}." + R("ja_") + "{-ms-flex-direction:row; -webkit-box-orient:horizontal; -webkit-flex-direction:row; flex-direction:row;}." + R("qa_") + "{-ms-flex-direction:column; -webkit-box-orient:vertical; -webkit-flex-direction:column; flex-direction:column;}." + R("ja_") + ", ." + R("qa_") + "{-ms-flex-align:start; -webkit-box-align:start; -webkit-align-items:flex-start; align-items:flex-start; -ms-flex-pack:start; -webkit-box-pack:start; -webkit-justify-content:flex-start; justify-content:flex-start;}";
        var im = I(ji);
        var jm = em + im,
            km = c || d ? "1" : "0",
            oi = Ba ? "" + Math.min(22, Math.max(8, "" + (Ba - 2))) : "11";
        var lm = "." + R("u_") + "{color:" + R(q) + "; font-size:12px; border:1px solid " + R(q) + "; border-radius:2px; padding:0 2px; margin-" + R(ha) + ":7px; vertical-align:baseline;}." + R("v_") + "{font-size:" + R(oi) + "px; line-height:" + R(oi) + "px; display:inline-block; border-radius:3px; padding:0 3px " + R(km) + "px 2px;}";
        var mm = I(lm);
        var nm = jm + mm;
        if (c || d) {
            var om = C ? R(C) : p ? R(p) : "#808080";
            var pm = D ? R(D) : C ? R(C) : "#808080";
            var pi = I("body{font-family:" +
                (bd ? "'" + String(bd).replace(lg, hg) + "'," : "") + (J ? R(J) + "," : "") + '"Roboto","Helvetica Neue",arial,sans-serif;}.sr-div{padding:2px 0px; margin-top:0px;}.ad{margin:0; padding:0;}.' + R("ra_") + "{" + (l ? "background-color:" + R(l) + ";" : "") + (n && Ph ? "border-left:1px solid " + R(n) + ";" : "") + (n && af ? "border-right:1px solid " + R(n) + ";" : "") + (n && Qh ? "border-top:1px solid " + R(n) + ";" : "") + (n && Rh ? "border-bottom:1px solid " + R(n) + ";" : "") + "}." + R("sa_") + "{padding-top:11px; position:relative;}." + R("d_") + ", .ctcT{line-height:" + (ad ? R(ad) :
                    "20") + "px; margin:0;}.descText{display:block; line-height:" + (Ya ? R(Ya) : "20") + "px;}.sr-div, .sr-rl{color:" + om + ";}.location{color:" + pm + "; margin-top:9px;}.descText, ." + R("t_") + "{color:" + (p ? R(p) : "#222222") + ";}." + R("e_") + "{line-height:" + (Za ? R(Za) : "20") + "px; color:" + R(q) + ";}td{padding:0px;}." + R("ba_") + "{border-top:1px solid #EBEBEB;}." + R("wa_") + "{border-top:1px solid #EBEBEB;}." + R("h_") + "{margin-top:-4px; padding-bottom:2px;}.ctd-itd{width:40px;}.ctd-il{width:40px; height:40px;}.infoBlock{margin:0;}.adStd{clear:none;}." +
                R("ua_") + "{padding-bottom:9px; clear:" + R(ha) + ";}." + R("va_") + " ." + R("xa_") + "{padding-bottom:11px;}" + (Wc && bf && Uh ? ".adIcon{margin-top:" + R(null != Xc ? Xc : 0) + "px; margin-bottom:" + R(null != $c ? $c : 0) + "px; margin-" + R(S) + ":0px;}." + R("ta_") + "{margin-" + R(S) + ":" + R(Wc + (null != Zc ? Zc : 4)) + "px;}." + R("sa_") + "{padding-" + R(S) + ":" + R(null != Yc ? Yc : 4) + "px; padding-top:16px;}." + R("ra_") + "{overflow:hidden;}" : "." + R("sa_") + "{padding-" + R(S) + ":4px;}") + "." + R("sa_") + "{padding-" + R(ha) + ":16px;}.adStd{clear:none;}." + R("w_") + "{line-height:" +
                (Za ? R(Za) : "20") + "px;}." + R("n_") + "{padding-top:10px;}")
        } else pi = "";
        ef = Pl + (nm + pi + "</style>");
        return H(ef)
    };

    function Og(a) {
        return a ? a : wd(vd()) || xd(vd()) ? "#bdbdbd" : null
    }

    function Pg(a, b, c, d) {
        function e(A) {
            return (A = k(A)) ? I(A) : void 0
        }
        var g = me(c),
            h = me(d),
            k = g,
            l = ne(c);
        pd() && (k = h, l = ne(d));
        var n = k("type") || "ads",
            p = "#008000",
            r = td(),
            q = vd(),
            w = wd(q) || xd(q),
            z = "#0000CC";
        w ? (p = "#006621", z = "#1a0dab") : re(c, a) && (z = p = "#4272db");
        p = k("colorDomainLink", p);
        z = k("colorTitleLink", z);
        w = w ? k("fontSizeAnnotation") || k("fontSizeDescription") : k("fontSizeAnnotation");
        a = {
            Lg: a,
            Ag: oe(c),
            Sf: pe(c),
            Le: Og(k("colorAdSeparator")),
            Fg: 20,
            Qg: k("colorAdBackground"),
            Rg: k("colorAdBorder"),
            Xe: k("colorText") || k("defaultColor"),
            Ye: z,
            Ve: p,
            Tg: k("colorBackground"),
            Ug: k("colorBorder"),
            Sg: k("colorAttribution"),
            Vg: k("colorKeyword"),
            We: k("colorLocation"),
            Ue: k("colorAnnotation"),
            fontFamily: e("fontFamily"),
            Bh: e("fontFamilyAttribution"),
            jf: se(c, a) || k("fontSizeTitle"),
            ef: k("fontSizeDescription"),
            gf: k("fontSizeDomainLink"),
            Ch: k("fontSizeAttribution"),
            hf: k("fontSizeLocation"),
            df: w,
            fj: k("titleBold"),
            Be: d.Be,
            Gi: k("rolloverLinkBold"),
            Hi: k("rolloverLinkColor"),
            Fi: k("rolloverLinkBackgroundColor"),
            Ii: k("rolloverLinkUnderline"),
            Ei: k("rolloverAdBackgroundColor"),
            ri: k("noTitleUnderline"),
            cg: l("adBorderSelections", "left"),
            dg: l("adBorderSelections", "right"),
            eg: l("adBorderSelections", "top"),
            ag: l("adBorderSelections", "bottom"),
            xg: l("borderSelections", "left"),
            yg: l("borderSelections", "right"),
            zg: l("borderSelections", "top"),
            wg: l("borderSelections", "bottom"),
            gi: k("lineHeightTitle"),
            ei: k("lineHeightDescription"),
            fi: k("lineHeightDomainLink"),
            ug: k("attributionSpacingBelow"),
            Xh: re(c, a) && "relatedsearch" != d.type || 1 == k("csaLayout"),
            kb: od().data.atl ? 3 : k("lines"),
            Mh: !1,
            Ph: wd(q),
            Zh: xd(q),
            Kg: !!r.data.cucai,
            Jg: !!r.data.cgkc,
            Ig: !!r.data.cgab
        };
        c = !!k("adIconUrl");
        pd() && (c = !!g("adIconUrl"), k = g);
        c && (a.og = k("adIconWidth"), a.jg = k("adIconHeight"), a.kg = k("adIconSpacingAbove"), a.mg = k("adIconSpacingBefore"), a.lg = k("adIconSpacingAfter"), a.ng = k("adIconSpacingBelow"));
        pd() && (k = h);
        "relatedsearch" == n && (a.type = "relatedsearch", a.Wg = k("columnSpacing"), a.Ih = k("horizontalFlow"), a.Hh = k("horizontalAlignment"));
        g = Ng(a);
        Qg(g, b)
    }

    function Rg(a, b, c) {
        a = H('<h2 id=\'attrHeader\'><span class="lhHeader" id="attribution"><a href="' + P(Q(a)) + '" target="_blank">' + G(b) + "</a></span></h2>");
        Qg(a, c)
    }

    function Qg(a, b) {
        b.appendChild(Lg(a, void 0))
    };
    var Sg = /^((https?):)?\/\/afs.googleusercontent.com\//;

    function Tg(a, b, c) {
        if (Sg.test(b))
            for ("http:" == b.substring(0, 5) && c ? b = "https:" + b.substring(5) : "//" == b.substring(0, 2) && (b = (c ? "https:" : "") + b), c = 0; c < a.length; c++) a[c].adIconUrl = b
    }
    Tg = y(Tg, "aiIID");

    function Ug(a) {
        var b = "https" == window.location.protocol;
        a = a.clicktrackUrl;
        return td().data.ct && ua(a) ? Ha(a, function(c) {
            return !(0 == c.indexOf("http:") && b)
        }) : []
    }

    function Vg(a, b) {
        a = a.getElementsByTagName("a");
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            (d.hasAttribute ? d.hasAttribute("data-notrack") : d.getAttribute("data-notrack")) || ("ontouchstart" in document.documentElement ? (d.addEventListener("touchstart", Wg), d.addEventListener("touchmove", Xg), d.addEventListener("touchend", function() {
                Yg && Zg(b);
                Yg = !1
            })) : d.addEventListener("mousedown", function(e) {
                (e.which ? 2 > e.which : 2 > e.button) && Zg(b)
            }))
        }
    }
    var $g = {
            x: 0,
            y: 0
        },
        Yg = !1;

    function Wg(a) {
        Yg = !1;
        a = a.touches;
        1 == a.length && (a = a[0], $g.x = a.clientX, $g.y = a.clientY, Yg = !0)
    }

    function Xg(a) {
        a = a.touches[0];
        if (10 < Math.abs(a.clientX - $g.x) || 10 < Math.abs(a.clientY - $g.y)) Yg = !1
    }

    function Zg(a) {
        var b = [];
        a = u(a);
        for (var c = a.next(); !c.done; c = a.next()) c = new gc(c.value), x(c, "nc", [Math.round(9E6 * Math.random()), (new Date).getTime()].join("")), b.push(ic(c));
        if (window.navigator.sendBeacon)
            for (b = u(b), c = b.next(); !c.done; c = b.next()) window.navigator.sendBeacon(c.value);
        else
            for (a = 0; a < b.length; a++) Vb(b[a])
    }

    function ah(a, b, c) {
        if (td().data.ct && (a = Ug(a), 0 < a.length))
            if (td().data.alct) {
                c = Od("block", "" + c, a);
                a = Ka(Pe("div", "c_", b));
                a = a.concat(Ka(Pe("tr", "c_", b)));
                a = a.concat(Ka(Pe("li", "c_", b)));
                var d;
                for (b = 0; d = a[b]; b++) {
                    var e = c;
                    e = Od("ad", "" + (b + 1), e);
                    Vg(d, e)
                }
            } else Vg(b, a)
    };

    function bh() {
        this.$g = H("")
    }
    bh.prototype.g = aa("$g");
    bh.prototype.D = f();
    bh.prototype.B = function() {
        return []
    };
    var ch = new bh;

    function dh(a) {
        var b = void 0 === b ? mg : b;
        this.tg = a;
        this.C = b
    }
    dh.prototype.g = function() {
        return this.C({
            text: this.tg
        })
    };
    dh.prototype.B = function() {
        return []
    };
    dh.prototype.D = f();

    function eh(a) {
        return a ? new dh(a) : ch
    };
    var fh = 1;

    function T() {
        return "e" + fh++
    };

    function gh(a, b, c, d, e, g) {
        var h = void 0 === h ? ng : h;
        this.F = T();
        this.Pa = a;
        this.N = b;
        this.Yh = c;
        this.wa = d;
        this.Za = e;
        this.da = g;
        this.C = h
    }
    gh.prototype.g = function() {
        return this.C({
            Bg: !!this.Za.ctab,
            Li: this.Yh,
            text: this.Pa,
            Tf: this.da,
            Se: this.F,
            A: this.N,
            J: this.wa
        })
    };
    gh.prototype.B = function(a) {
        return (a = a.getElementById(this.F)) ? [new xf(a, "8")] : []
    };
    gh.prototype.D = f();

    function hh(a, b) {
        return a.cta ? b.La ? new gh(a.cta.ctas, b.A, b.La, b.J, a.cta, a.u) : a.cta.ctab ? new gh(a.cta.ctas, b.A, !1, b.J, a.cta, a.u) : ch : ch
    };

    function ih(a) {
        var b = a.text,
            c = a.url,
            d = a.A;
        return H('<a id="' + P(a.uid) + '" href="' + P(Q(c)) + '" class="test_titleLink ' + P("d_") + " " + P("j_") + '" ' + qg({
            A: d
        }) + ">" + rg({
            text: b
        }) + "</a>")
    }

    function jh(a) {
        var b = a.text,
            c = a.Mb,
            d = a.kh,
            e = a.url,
            g = a.A,
            h = a.Fh;
        return H('<div class="ctcT"><a id="' + P(a.uid) + '" href="' + P(Q(e)) + '" ' + qg({
            A: g
        }) + ">" + G(c) + "</a>" + (d ? '<span class="ctcLD"> (' + rg({
            text: d
        }) + ")</span>" : "") + "</div>" + (h ? "" : '<span class="ctcCO">' + rg({
            text: b
        }) + "</span>"))
    }

    function kh(a) {
        var b = a.text,
            c = a.url,
            d = a.A;
        return H('<a id="' + P(a.uid) + '" href="' + P(Q(c)) + '" class="test_domainLink ' + P("e_") + '" ' + qg({
            A: d
        }) + ">" + rg({
            text: b
        }) + "</a>")
    }

    function lh(a) {
        var b = a.bj,
            c = a.dj,
            d = a.maxWidth;
        a = H;
        d = '<span class="descText"' + (d ? ' style="display: inline-block; max-width: ' + P(R(d)) + 'px"' : "") + ">";
        var e = "",
            g = -1 == eg(b, !0),
            h = Nf(c) && -1 == eg(c, !0);
        e = Nf(c) && 0 < ("" + c).length ? e + sg({
            Ib: g || h,
            text: L(sg({
                text: b,
                Ib: g
            }) + " " + sg({
                text: c,
                Ib: h
            }))
        }) : e + sg({
            text: b,
            Ib: g
        });
        b = H(e);
        return a(d + b + "</span>")
    }

    function mh(a) {
        var b = a.Ld,
            c = a.di;
        return H("<div>" + G(a.Jb) + "</div>" + G(b) + "<br/>" + G(c))
    }

    function nh(a) {
        var b = a.Ld;
        return H("<div>" + G(a.Jb) + "</div>" + G(b))
    }

    function oh(a) {
        return H(G(a.Jb))
    }

    function ph(a) {
        var b = a.content,
            c = a.kb;
        a = a.$h;
        var d = "";
        if (2 != c || !a) switch (c) {
            case 1:
                d += "oneLine";
                break;
            case 2:
                d += "twoLine"
        }
        b = '<div class="adStd ' + P(d) + '">' + G(b) + "</div>";
        return H(b)
    };

    function U(a, b) {
        a = a.getElementById(b);
        if (!a) throw "Could not find element with id: " + b;
        return a
    };

    function qh(a, b, c) {
        this.Mc = a;
        this.na = b;
        this.Bi = c;
        this.C = ph;
        this.Za = hh(b, c)
    }
    qh.prototype.g = function() {
        var a = this.na.wta ? !0 : !1;
        return this.C({
            content: this.Mc.g(),
            kb: this.Bi.kb,
            $h: a
        })
    };
    qh.prototype.B = function(a) {
        var b = this.Mc.B(a);
        return b = b.concat(this.Za.B(a))
    };
    qh.prototype.D = function(a, b) {
        this.Mc.D(a, b)
    };

    function rh(a, b) {
        var c = H(a.t);
        if (a.ctc && a.ctc.coa) {
            var d = a.ctc.cott ? H(a.ctc.cott || "") : a.ctc.bt;
            return new sh(c, a.ctc.u, b.A, d, !!a.ctc.ht, a.ctc.d)
        }
        return new th(c, a.u, b.A)
    }

    function uh(a, b) {
        b = void 0 === b ? null : b;
        var c = H(a.l1 || "");
        a = H(a.l2 || "");
        return new vh(c, a, b)
    }

    function wh(a, b) {
        var c = a.ctd && a.ctd.as ? a.ctd.as : b.La ? H(a.nonBreakingVisDomain) : H(a.v);
        return new xh(c, a.u, b.A)
    }

    function th(a, b, c) {
        this.F = T();
        this.Ce = a;
        this.da = b;
        this.N = c;
        this.C = ih
    }
    th.prototype.g = function() {
        return this.C({
            uid: this.F,
            text: this.Ce,
            url: this.da,
            A: this.N
        })
    };
    th.prototype.B = function(a) {
        return [new xf(U(a, this.F), "0")]
    };
    th.prototype.D = f();

    function sh(a, b, c, d, e, g) {
        this.F = T();
        this.Ce = a;
        this.da = b;
        this.N = c;
        this.Ba = d;
        this.Gh = e;
        this.mh = g || "";
        this.C = jh
    }
    sh.prototype.g = function() {
        return this.C({
            uid: this.F,
            text: this.Ce,
            Mb: this.Ba,
            kh: this.mh,
            url: this.da,
            A: this.N,
            Fh: this.Gh
        })
    };
    sh.prototype.B = function(a) {
        return [new xf(U(a, this.F), "0")]
    };
    sh.prototype.D = f();

    function xh(a, b, c) {
        this.F = T();
        this.O = a;
        this.da = b;
        this.N = c;
        this.C = kh
    }
    xh.prototype.g = function() {
        return this.C({
            uid: this.F,
            text: this.O,
            url: this.da,
            A: this.N
        })
    };
    xh.prototype.B = function(a) {
        return [new xf(U(a, this.F), "1")]
    };
    xh.prototype.D = f();

    function vh(a, b, c) {
        this.cj = a;
        this.ej = b;
        this.mi = c;
        this.C = lh
    }
    vh.prototype.g = function() {
        return this.C({
            bj: this.cj,
            dj: this.ej,
            maxWidth: this.mi
        })
    };
    vh.prototype.B = function() {
        return []
    };
    vh.prototype.D = f();

    function yh(a) {
        var b = "";
        v(a.elements);
        a = a.elements;
        for (var c = a.length, d = 0; d < c; d++) b += G(a[d]);
        return H(b)
    }

    function zh(a) {
        var b = a.uid;
        v(a.ke);
        a = a.ke;
        b = '<div id="' + P(b) + '">';
        for (var c = a.length, d = 0; d < c; d++) b += G(a[d]);
        return H(b + "</div>")
    };

    function Ah(a) {
        return yh({
            elements: a.ke
        })
    }

    function Bh(a, b) {
        this.F = T();
        this.Cb = a;
        this.C = b || Ah
    }
    Bh.prototype.g = function() {
        for (var a = [], b = 0; b < this.Cb.length; b++) a.push(this.Cb[b].g());
        return this.C({
            uid: this.F,
            ke: a
        })
    };
    Bh.prototype.B = function(a) {
        for (var b = [], c = 0; c < this.Cb.length; c++) b = b.concat(this.Cb[c].B(a));
        return b
    };
    Bh.prototype.D = function(a, b) {
        for (var c = u(this.Cb), d = c.next(); !d.done; d = c.next()) d.value.D(a, b)
    };

    function Ch(a) {
        this.nh = a
    }
    Ch.prototype.g = function() {
        var a = this.nh;
        return H((a.t ? '<div class="' + P("t_") + '">' + rg({
            text: a.t
        }) + "</div>" : "") + (a.cd ? '<div class="' + P("t_") + '">' + rg({
            text: a.cd
        }) + "</div>" : ""))
    };
    Ch.prototype.B = function() {
        return []
    };
    Ch.prototype.D = f();

    function Dh(a, b, c) {
        this.rd = a;
        this.qd = b;
        this.Ah = 20;
        this.Ui = 0;
        this.zh = c;
        this.yh = void 0;
        this.C = vg
    }
    Dh.prototype.g = function() {
        var a = {
            Db: this.qd.g(),
            Eb: this.rd.g(),
            Ia: this.Ah,
            Oa: this.Ui,
            ab: this.zh,
            xh: this.yh
        };
        return this.C(a)
    };
    Dh.prototype.D = function(a, b) {
        this.qd.D(a, b);
        this.rd.D(a, b)
    };
    Dh.prototype.B = function(a) {
        return this.rd.B(a).concat(this.qd.B(a))
    };

    function Eh(a, b) {
        a.classList ? b = a.classList.contains(b) : (a.classList ? a = a.classList : (a = a.className, a = "string" === typeof a && a.match(/\S+/g) || []), b = Ja(a, b));
        return b
    };

    function Fh(a, b, c, d, e) {
        var g = void 0;
        g = void 0 === g ? tg : g;
        this.F = T();
        this.da = a;
        this.Pa = b;
        this.Eg = c;
        this.N = d;
        this.ii = e;
        this.C = g
    }
    Fh.prototype.g = function() {
        return this.C({
            uid: this.F,
            url: this.da,
            text: this.Pa,
            Dg: this.Eg,
            A: this.N,
            hi: this.ii
        })
    };
    Fh.prototype.B = function(a) {
        a = U(a, this.F).getElementsByTagName("a");
        for (var b = [], c, d = 0; c = a[d]; d++) Eh(c, "f_") && b.push(new xf(c, "14")), Eh(c, "m_") && b.push(new xf(c, "27"));
        return b
    };
    Fh.prototype.D = f();

    function Gh(a) {
        return H("<div class='location'>" + rg({
            text: a.ji
        }) + "</div>")
    };

    function Hh(a) {
        this.Pa = a;
        this.C = Gh
    }
    Hh.prototype.g = function() {
        return this.C({
            ji: this.Pa
        })
    };
    Hh.prototype.B = function() {
        return []
    };
    Hh.prototype.D = f();

    function Ih(a) {
        return a.location ? new Hh(a.location) : ch
    };

    function Jh() {}
    Jh.prototype.g = function() {
        return H('<div class="' + P("xa_") + '"></div>')
    };
    Jh.prototype.B = function() {
        return []
    };
    Jh.prototype.D = f();

    function Kh(a, b) {
        this.wi = a;
        this.N = b;
        this.F = T();
        this.C = xg
    }
    Kh.prototype.g = function() {
        return this.C({
            uid: this.F,
            vi: this.wi,
            A: this.N
        })
    };
    Kh.prototype.B = function(a) {
        return (a = U(a, this.F)) ? Ia(a.getElementsByTagName("a"), function(b) {
            return new xf(b, "13")
        }) : []
    };
    Kh.prototype.D = f();

    function Lh(a, b) {
        a = a.pee && a.pee.r && 0 < a.pee.r.length ? a.pee : null;
        if (!a) return ch;
        for (var c = u(a.r), d = c.next(); !d.done; d = c.next()) d = d.value, "string" === typeof d.p && (d.p = H(d.p));
        return new Kh(a, b.A)
    };
    var qi = {
        sl1l: 1,
        sl2l: 4,
        sl3l: 5,
        sl4l: 6,
        sl2c2l: 2,
        sl2c3l: 3,
        sl2e: 7,
        sl4e: 8
    };

    function ri(a, b) {
        b = u(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = c.value, a[c]) return a = a[c], a.m = qi[c], a;
        return null
    }

    function si(a) {
        switch (a) {
            case 2:
            case 3:
                return Bg;
            case 4:
            case 5:
            case 6:
                return Ag;
            case 7:
            case 8:
                return Cg;
            default:
                return yg
        }
    }

    function ti(a) {
        switch (a) {
            case 4:
                return 2;
            case 5:
                return 3;
            case 6:
                return 4;
            case 1:
                return 4;
            case 2:
                return 4;
            case 3:
                return 6;
            case 7:
                return 2;
            case 8:
                return 4;
            default:
                return 2
        }
    }

    function ui(a, b, c) {
        this.F = T();
        this.Ri = a;
        this.N = c;
        this.C = si(b);
        this.ki = ti(b)
    }
    ui.prototype.g = function() {
        for (var a = this.Ri.slice(0, this.ki), b = u(a), c = b.next(); !c.done; c = b.next()) c = c.value, c.t = H(c.t);
        return this.C({
            uid: this.F,
            Ec: a,
            A: this.N
        })
    };
    ui.prototype.B = function(a) {
        var b = [];
        a = U(a, this.F).getElementsByTagName("a");
        for (var c = 0, d; d = a[c]; c++) b.push(new xf(d, "6"));
        return b
    };
    ui.prototype.D = function(a) {
        a = a.document.getElementById(this.F);
        a.clientWidth < a.scrollWidth && a.removeChild(a.children[1]);
        a.style.overflowX = "hidden"
    };

    function vi(a, b) {
        return (a = ri(a, "sl1l sl2l sl3l sl4l sl2c2l sl2c3l".split(" "))) ? new ui(a.sls, a.m, b.A) : ch
    }

    function wi(a, b) {
        return (a = ri(a, ["sl2e", "sl4e"])) ? new ui(a.sls, a.m, b.A) : ch
    };

    function xi(a) {
        var b = a.A,
            c = a.r;
        a = a.Qf;
        var d = H,
            e = '<div class="sfblSellerRatingsWrapper">' + yi({
                la: c,
                lj: !0
            }) + '<span class="sr-p">&nbsp;</span><span class="sr-gt">&nbsp;(',
            g = Math.pow(10, 1);
        return d(e + pg({
            href: a,
            content: L("" + G(Math.round(c * g) / g)),
            A: b,
            R: "sr-gt sr-gl"
        }) + ")</span></div>")
    }

    function zi(a) {
        v(a.Of);
        var b = a.Of;
        var c = a.A,
            d = a.r,
            e = a.Qf,
            g = a.Hd;
        a = a.J ? "right" : "left";
        a = '<div class="sr-div"' + (g ? ' style="display:inline;margin-' + P(R(a)) + ':6px"' : "") + ">";
        for (var h = b.length, k = 0; k < h; k++) {
            var l = b[k],
                n = l;
            switch (va(n) ? n.toString() : n) {
                case "RATING":
                    a += yi({
                        la: d,
                        Hd: g
                    }) + '<span class="sr-p">&nbsp;</span>';
                    break;
                case "LINK_START":
                    a += '<a href="' + P(Q(e)) + '" class="sr-rl" data-notrack="true" ' + qg({
                        A: c
                    }) + ">";
                    break;
                case "LINK_END":
                    a += "</a>";
                    break;
                case "NUM_START":
                    a += '<span class="sr-number">';
                    break;
                case "NUM_END":
                    a += "</span>&nbsp;";
                    break;
                default:
                    a += rg({
                        text: l
                    })
            }
        }
        return H(a + "</div>")
    }

    function yi(a) {
        var b = a.Hd;
        return H('<div class="sr-nsc"><img src="/images/afs/sr-star-off.png" class="sr-star"' + (b ? ' style="margin-top:3px"' : "") + '/><img src="/images/afs/sr-star-on' + (a.lj ? "-gray" : "") + '.png" class="sr-star" style="clip: rect(0px, ' + P(R(13.2 * a.la)) + "px, 13px, 0px); " + (b ? "margin-top:3px" : "") + '"/></div>')
    };

    function Ai(a, b, c, d, e, g, h) {
        h = void 0 === h ? zi : h;
        this.F = T();
        this.Pa = a;
        this.N = b;
        this.zi = c;
        this.da = d;
        this.wa = e;
        this.Rh = g;
        this.C = h
    }
    Ai.prototype.g = function() {
        return this.C({
            uid: this.F,
            Of: this.Pa,
            A: this.N,
            r: this.zi,
            Qf: this.da,
            J: this.wa,
            Hd: this.Rh
        })
    };
    Ai.prototype.B = function() {
        return []
    };
    Ai.prototype.D = f();

    function Bi(a, b) {
        var c = vd(),
            d = a.ctd && a.ctd.r,
            e = a.ctd && a.ctd.nr;
        if (d && e && (wd(c) || xd(c))) return new Ai(["RATING", " ", "(" + e + ")"], !1, d, "", b.J, !0);
        c = a.sr && a.sr.r;
        d = a.sr && a.sr.u;
        if (c && d) {
            if (b.La) return new Ai([], b.A, c, d, b.J, !1, xi);
            if (a = a.sr && a.sr.nt) return new Ai(a, b.A, c, d, b.J, !1)
        }
        return ch
    };

    function Ci(a, b) {
        return [a.pd ? new Ch(a.pd) : ch, Lh(a, b), Ih(a), vi(a, b)]
    };

    function Di(a) {
        var b = a.Mb,
            c = H;
        a = a.oi ? H('<span class="' + P("x_") + '">&emsp;</span>') : "";
        return c(a + '<div class="' + P("y_") + '"><span class="' + P("w_") + '">' + rg({
            text: b
        }) + "</span></div>")
    };

    function Ei(a, b) {
        var c = void 0 === c ? Di : c;
        this.Ba = a;
        this.pi = b;
        this.C = c
    }
    Ei.prototype.g = function() {
        return this.C({
            Mb: this.Ba,
            oi: this.pi
        })
    };
    Ei.prototype.B = function() {
        return []
    };
    Ei.prototype.D = f();

    function Fi(a, b) {
        return a.pn ? new Ei(a.pn, !b.La) : ch
    };
    var Gi = null;

    function Hi(a) {
        var b = vd();
        this.lc = T();
        this.Re = T();
        this.rj = a.t;
        this.rh = a.em;
        this.Cg = a.u;
        this.C = wd(b) || xd(b) ? Jg : Ig
    }
    Hi.prototype.g = function() {
        return this.C({
            kc: this.lc,
            Ea: this.Re,
            yb: this.Cg,
            xb: this.rj,
            uj: this.rh
        })
    };
    Hi.prototype.D = function(a) {
        var b = U(a.document, this.lc),
            c = U(a.document, this.Re);
        Ii(a, b, c)
    };
    Hi.prototype.B = function() {
        return []
    };

    function Ji(a) {
        return a.wta ? new Hi(a.wta) : null
    }

    function Ii(a, b, c) {
        b.addEventListener("click", function(e) {
            Gi && Gi != c && (Gi.style.display = "none", Gi = null);
            if (c.style.display && "none" != c.style.display) c.style.display = "none", Gi = null;
            else {
                var g = a.document.getElementById("adBlock");
                g.appendChild(c);
                if (1 == b.nodeType) {
                    var h = Xe(b);
                    h = new Le(h.left, h.top)
                } else h = b.changedTouches ? b.changedTouches[0] : b, h = new Le(h.clientX, h.clientY);
                var k = h,
                    l = $e(b);
                h = $e(c);
                g = $e(g);
                var n = k.x;
                k = k.y;
                switch (b.getAttribute("data-position")) {
                    case "over":
                        var p = l.width / 2 - h.width / 2;
                        l = l.height /
                            2 - h.height / 2;
                        break;
                    default:
                        p = l.width / 2 - h.width / 2, l = l.height
                }
                c.style.left = Math.min(Math.max(Math.round(n + p), 0), g.width - h.width) + "px";
                c.style.top = Math.min(Math.max(Math.round(k + l), 0), g.height - h.height) + "px";
                c.style.display = "block";
                Gi = c
            }
            e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0, e.returnValue = !1)
        });
        var d = a.document.getElementById("adBlock");
        d.addEventListener("click", Ki);
        d.addEventListener("scroll", Ki)
    }

    function Ki() {
        Gi && (Gi.style.display = "none", Gi = null)
    };

    function Li(a, b) {
        this.na = a;
        this.F = T();
        this.ub = T();
        var c = rh(a, b),
            d = wh(a, b),
            e = Fi(a, b),
            g = [b.Ja, d, e];
        a.adb && a.adb.locv && (g = [d, b.Ja, e]);
        a.ctd && (d = Bi(a, b), g.push(d));
        g = new Bh(g, zh);
        c = new Bh([c], zh);
        d = Ji(a);
        this.Xc = new qh(new Bh([d ? new Dh(c, d, !b.J) : c, g]), a, b);
        c = [];
        a.ctd || (g = Bi(a, b), c.push(g));
        g = uh(a);
        c.push(g);
        this.Vc = new qh(new Bh(c), a, b);
        c = a.pd ? new Ch(a.pd) : ch;
        g = Lh(a, b);
        d = Ih(a);
        e = vi(a, b);
        var h = wi(a, b),
            k = new Jh,
            l = [];
        a.ctc && l.push(new Fh(a.ctc.u, a.ctc.bt, "ctc", b.A, "f_"));
        a.ctd && l.push(new Fh(a.u, a.ctd.ps,
            "ctd", b.A, "m_"));
        this.Wc = new Bh([c, g, d, e, h, k, 1 == l.length ? l[0] : ch]);
        this.Aa = b;
        a.ctd && (this.eh = a.ctd.iu, this.gh = a.ctd.ih > a.ctd.iw ? "height" : "width", this.fh = a.u, this.Oh = a.ctd.ir);
        this.C = wg
    }
    Li.prototype.g = function() {
        var a = {
            Og: this.Xc.g(),
            Mg: this.Vc.g(),
            Ng: this.Wc.g(),
            ij: this.F,
            J: this.Aa.J,
            Kh: this.eh,
            Kd: this.gh,
            Jd: this.fh,
            Gd: this.Oh,
            Da: this.na,
            Wa: this.Aa.Wa,
            A: this.Aa.A,
            Lc: this.ub
        };
        return this.C(a)
    };
    Li.prototype.D = function(a, b) {
        this.Xc.D(a, b);
        this.Vc.D(a, b);
        this.Wc.D(a, b);
        a = a.document;
        var c = U(a, this.F).parentNode;
        if (c) {
            var d = this.Xc.B(a).concat(this.Vc.B(a).concat(this.Wc.B(a))),
                e = document.getElementById(this.ub);
            e && d.push(new xf(e, "18"));
            vf(d, c, U(a, "adBlock"), b)
        }
    };
    Li.prototype.B = function() {
        return []
    };

    function Mi(a, b, c) {
        this.Aa = b;
        this.Va = hh(a, b);
        this.Ee = T();
        this.De = T();
        this.Kc = Ni(a, b, !1, this.Va);
        this.Jc = Ni(a, b, !0, this.Va);
        var d = rh(a, b),
            e = od().data.dlmw || null,
            g = uh(a, e);
        if (b.Ja != ch) {
            g = yh({
                elements: [b.Ja.g(), H(a.l1 || "")]
            });
            var h = H(a.l2 || "");
            g = new vh(g, h, e)
        }
        a = Ci(a, b).concat([wi(a, b)]);
        a = new Bh(a);
        this.Ke = new Bh([d, g, a]);
        this.Th = c;
        this.Ki = b.pe || 130;
        this.C = Eg
    }
    Mi.prototype.g = function() {
        var a = {
            hg: this.Kc.g(),
            gg: this.Jc.g(),
            $f: this.Ke.g(),
            J: this.Aa.J,
            kj: this.Ee,
            jj: this.De,
            pe: this.Ki,
            Sh: this.Th,
            Tc: this.Va.g()
        };
        return this.C(a)
    };
    Mi.prototype.D = function(a, b) {
        function c(k) {
            if (k = d.getElementById(k)) {
                k = k.getElementsByClassName("h_");
                for (var l = 0; l < k.length; l++) {
                    var n = k[l];
                    n.clientWidth < n.scrollWidth && n.removeChild(n.children[1]);
                    n.style.overflowX = "hidden"
                }
            }
        }
        this.Kc.D(a, b);
        this.Jc.D(a, b);
        var d = a.document;
        c(this.De);
        c(this.Ee);
        a = U(d, this.Ee);
        var e = U(d, this.De),
            g = a.parentNode;
        e = Oi(d, a, e);
        var h = this.Ke.B(d);
        h = h.concat(this.Va.B(d));
        h = e === a ? h.concat(this.Kc.B(d)) : h.concat(this.Jc.B(d));
        g && vf(h, g, U(d, "adBlock"), b)
    };
    Mi.prototype.B = function() {
        return []
    };

    function Ni(a, b, c, d) {
        var e = wh(a, b),
            g = Ji(a),
            h = Fi(a, b),
            k = Bi(a, b);
        d = new Pi(e, g, h, k, a.visDomain, c, d);
        e = Bi(a, b);
        return new Qi(d, e, a.furl, b.J, c)
    }

    function Oi(a, b, c) {
        325 > ce(a.body, !1) ? a = c : (a = b, b = c);
        a.style.display = "block";
        Ue(b);
        return a
    }

    function Pi(a, b, c, d, e, g, h) {
        this.O = a;
        this.I = b;
        this.Ba = c;
        this.rb = d;
        this.nj = e;
        this.pc = g;
        this.C = Fg;
        this.Va = h
    }
    Pi.prototype.g = function() {
        var a;
        this.I && (a = this.I.g());
        a = {
            oj: this.O.g(),
            pj: a,
            Mb: this.Ba.g(),
            Mi: this.rb.g(),
            mj: this.nj,
            Vh: this.pc,
            Tc: this.Va.g()
        };
        return this.C(a)
    };
    Pi.prototype.D = function(a, b) {
        this.I && this.I.D(a, b)
    };
    Pi.prototype.B = function(a) {
        return this.O.B(a)
    };

    function Qi(a, b, c, d, e) {
        var g = !!td().data.dsff;
        this.qe = a;
        this.rb = b;
        this.vh = c;
        this.jh = g;
        this.wa = !!d;
        this.pc = e
    }
    Qi.prototype.g = function() {
        var a = this.qe.g();
        if (this.jh) return this.rb && this.pc ? yh({
            elements: [a, this.rb.g()]
        }) : a;
        a = {
            Db: H('<img src="' + P(bg(this.vh)) + '" class="sfblFavicon"/>'),
            Eb: a,
            Ia: 18,
            Oa: 3,
            ab: this.wa
        };
        a = vg(a);
        return this.rb && this.pc ? yh({
            elements: [a, this.rb.g()]
        }) : a
    };
    Qi.prototype.D = function(a, b) {
        this.qe.D(a, b)
    };
    Qi.prototype.B = function(a) {
        return this.qe.B(a)
    };

    function Ri(a) {
        var b = a.uid,
            c = a.Da,
            d = a.fg,
            e = a.A,
            g = a.Wa,
            h = a.dh,
            k = a.Lc;
        a = a.Nh;
        return H('<div class="' + P("b_") + " " + P("c_") + (a ? " " + P("qa_") : "") + '" id="' + P(b) + '">' + ug({
            Da: c,
            Zc: g,
            A: e,
            Md: k
        }) + '<div class="adD' + (c.topad ? " " + P("l_") : "") + '">' + G(d) + (a ? G(h) : "") + "</div></div>")
    };

    function Si(a, b, c) {
        this.F = T();
        this.na = a;
        this.Aa = c;
        this.C = Ri;
        var d = [];
        if (Ti()) {
            var e = rh(a, c);
            e = new Bh([e]);
            d.push(new qh(e, a, c))
        }
        e = Ti() ? ch : rh(a, c);
        var g = wh(a, c),
            h = uh(a),
            k = Ji(a);
        switch (c.kb) {
            case 1:
                e = new Ui(e, h, g, k, c.Ja);
                break;
            case 2:
                e = new Vi(e, h, g, k, c.Ja, c.J);
                break;
            default:
                var l = Fi(a, c),
                    n = od().data.dlmw || null;
                n && (h = uh(a, n));
                n = vd();
                e = new Wi(e, h, g, k, l, c.ph, c.Ja, wd(n) || xd(n), c.J)
        }
        e = new qh(e, a, c);
        d.push(e);
        d = d.concat(b);
        this.Sb = new Bh(d);
        this.ub = T();
        this.Za = hh(a, c);
        this.Gg = T()
    }
    Si.prototype.g = function() {
        var a = {
            uid: this.F,
            Da: this.na,
            A: this.Aa.A,
            fg: this.Sb.g(),
            Wa: this.Aa.Wa,
            Lc: this.ub,
            Kj: null,
            Tf: this.na.u,
            Se: this.Gg,
            dh: this.Za.g(),
            Nh: this.na.cta && this.na.cta.ctab
        };
        return this.C(a)
    };
    Si.prototype.D = function(a, b) {
        var c = this.Sb.B(a.document),
            d = a.document.getElementById(this.ub);
        d && c.push(new xf(d, "18"));
        c = c.concat(this.Za.B(a.document));
        for (d = U(a.document, this.F); null != d && !Eh(d, "a_");) d = d.parentElement;
        d && vf(c, d, U(a.document, "adBlock"), b);
        this.Sb.D && this.Sb.D(a, b)
    };
    Si.prototype.B = function() {
        return []
    };

    function Ti() {
        var a = vd();
        return wd(a) || xd(a)
    }

    function Wi(a, b, c, d, e, g, h, k, l) {
        this.ga = a;
        this.Z = b;
        this.O = c;
        this.I = d;
        this.Ba = e;
        this.xf = g;
        this.ma = h;
        this.Qh = k;
        this.wa = l;
        this.C = mh
    }
    Wi.prototype.g = function() {
        var a = this.ga.g(),
            b = yh({
                elements: [this.ma.g(), this.O.g(), this.Ba.g()]
            }),
            c = H("");
        this.I && (this.Qh ? (a = new Bh([this.ga]), c = this.I, a = (c ? new Dh(a, c, !this.wa) : a).g()) : b = yh({
            elements: [this.ma.g(), this.O.g(), c, this.I.g(), this.Ba.g()]
        }));
        return this.C({
            Jb: a,
            Ld: this.xf ? b : this.Z.g(),
            di: this.xf ? this.Z.g() : b
        })
    };
    Wi.prototype.B = function(a) {
        return this.ga.B(a).concat(this.O.B(a).concat(this.Z.B(a)))
    };
    Wi.prototype.D = function(a, b) {
        this.I && this.I.D(a, b)
    };

    function Vi(a, b, c, d, e, g) {
        this.ga = a;
        this.Z = b;
        this.O = c;
        this.I = d;
        this.ma = e;
        this.wa = g;
        this.C = nh
    }
    Vi.prototype.g = function() {
        var a = this.ga.g();
        var b = this.I ? yh({
            elements: [this.ma.g(), this.O.g(), this.I.g(), this.Z.g()]
        }) : yh({
            elements: [this.ma.g(), this.O.g(), this.Z.g()]
        });
        return this.C({
            Jb: a,
            Ld: b
        })
    };
    Vi.prototype.B = function(a) {
        return this.ga.B(a).concat(this.O.B(a).concat(this.Z.B(a)))
    };
    Vi.prototype.D = function(a, b) {
        this.I && this.I.D(a, b)
    };

    function Ui(a, b, c, d, e) {
        var g = void 0 === g ? oh : g;
        this.ga = a;
        this.Z = b;
        this.O = c;
        this.I = d;
        this.ma = e;
        this.C = g
    }
    Ui.prototype.g = function() {
        var a = this.I ? yh({
            elements: [this.ma.g(), this.ga.g(), this.Z.g(), H("<wbr>"), this.O.g(), this.I.g()]
        }) : yh({
            elements: [this.ma.g(), this.ga.g(), this.Z.g(), H("<wbr>"), this.O.g()]
        });
        return this.C({
            Jb: a
        })
    };
    Ui.prototype.B = function(a) {
        return this.ga.B(a).concat(this.O.B(a).concat(this.Z.B(a)))
    };
    Ui.prototype.D = function(a, b) {
        this.I && this.I.D(a, b)
    };

    function Xi(a) {
        var b = "";
        v(a.Ac);
        a = a.Ac;
        for (var c = a.length, d = 0; d < c; d++) {
            var e = a[d];
            b += '<div class="ad' + (0 == d ? " f" : "") + (d == c - 1 ? " l" : "") + " " + P("a_") + '" data-bg="true">' + G(e) + "</div>"
        }
        return H(b)
    };

    function Yi(a, b) {
        this.ea = a;
        this.$i = b
    }
    Yi.prototype.g = function() {
        for (var a = [], b = 0; b < this.ea.length; b++) a.push(this.ea[b].g());
        return this.$i({
            Ac: a
        })
    };
    Yi.prototype.D = function(a, b) {
        for (var c = 0; c < this.ea.length; c++) this.ea[c].D(a, b)
    };
    Yi.prototype.B = function() {
        return []
    };

    function Zi(a) {
        var b = {};
        b.csaLayout = a.ct;
        a = u(a.cuo);
        for (var c = a.next(); !c.done; c = a.next()) {
            var d = c.value;
            c = d.n;
            d = d.v;
            "rolloverLinkUnderline" == c && (d = !0);
            "noTitleUnderline" == c && (d = !1);
            if (-1 < c.toLowerCase().indexOf("lineheight") || -1 < c.toLowerCase().indexOf("fontsize")) d = Number(d); - 1 < c.indexOf("Bold") && (d = "BOLD" == d);
            "colorAdBorder" == c && (b.adBorderLeft = !0, b.adBorderRight = !0, b.adBorderTop = !0, b.adBorderBottom = !0);
            b[c] = d
        }
        null == b.noTitleUnderline && (b.noTitleUnderline = !0);
        return b
    };

    function $i(a, b) {
        if (!a) return !1;
        if (3 == a.nodeType && a.nodeValue && (b && (a.nodeValue += " ..."), 4 < a.nodeValue.length)) {
            b = a.nodeValue;
            var c = a.nodeValue.length - 1;
            b.length > c && (b = b.substring(0, c - 3) + "...");
            a.nodeValue = b;
            return !1
        }
        c = a.textContent || a.innerText;
        if (!c || c.length <= (b ? 0 : 4)) return a.parentNode.removeChild(a), !0;
        for (b = $i(a.lastChild, b); b;) b = $i(a.lastChild, b);
        return !1
    }

    function aj(a, b) {
        if (!(0 >= b)) {
            for (var c = a.innerHTML.length; 0 < c && a.offsetHeight > b; c--)
                for (var d = a, e = $i(d.lastChild, !1); e;) e = $i(d.lastChild, e);
            a.offsetHeight > b && Rb(a, Pb)
        }
    };

    function bj(a) {
        a = a.value;
        return I("-webkit-box-shadow:" + R(a) + "; -moz-box-shadow:" + R(a) + "; -ms-box-shadow:" + R(a) + "; box-shadow:" + R(a) + ";")
    };

    function cj(a) {
        a = a.label;
        return H('<div class="' + P("pb_") + '"><img class="' + P("qb_") + '" src="https://www.gstatic.com/images/icons/material/system/1x/location_on_white_18dp.png">' + G(a) + "</div>")
    }

    function dj() {
        return I("." + R("qb_") + "{vertical-align:sub; width:15px; height:15px;}." + R("pb_") + "{background:#5E97F5; font-weight:bold; color:#fff; height:18px; line-height:18px; font-size:10px; position:absolute; top:0; left:0; z-index:1;}." + R("pb_") + '::after{border-top:9px solid transparent; border-left:10px solid #5E97F5; border-bottom:9px solid transparent; content:""; height:0; position:absolute; width:0;}')
    };

    function ej(a) {
        a = a || {};
        var b = a.la,
            c = a.marginTop,
            d = a.paddingBottom,
            e = a.Gj,
            g = a.Zb;
        a = a.Yb;
        return H('<div class="' + P("rb_") + '"' + (d ? ' style="padding-bottom:' + P(R(d)) + 'px"' : "") + ">" + (b ? '<img src="/images/afs/sr-star-off.png" class="' + P("sb_") + '"' + (c ? ' style="margin-top:' + P(R(c)) + 'px"' : "") + '/><img src="/images/afs/sr-star-on.png" class="' + P("sb_") + '" style="clip: rect(0px, ' + P(R(13.2 * b)) + "px, 13px, 0px);" + (c ? "margin-top:" + P(R(c)) + "px;" : "") + '"/>' : "") + (e && g ? '<span class="' + P("ib_") + " " + P("tb_") + " " + P("ub_") +
            '" id="' + P(a) + '">' + G(g) + "</span>" : "") + "</div>")
    }

    function fj() {
        return I("." + R("rb_") + "{display:block; position:relative; height:13px;}." + R("sb_") + "{position:absolute;}")
    };

    function gj(a) {
        a = a || {};
        var b = a.Ma;
        a = a.Qa;
        return "" + (null != a ? a : "") + (a && b ? "\n" : "") + (null != b ? b : "")
    }

    function hj(a) {
        var b = a.Ta,
            c = a.Ra,
            d = a.ka,
            e = a.zb,
            g = a.imageWidth,
            h = a.imageHeight,
            k = a.Xa,
            l = a.Ya,
            n = a.tb,
            p = a.qb,
            r = a.ib;
        a = a.hb;
        var q = "",
            w = O(" #008000 ");
        q += "." + R("ya_") + "{background:white; margin-right:" + R(d) + "px; margin-bottom:" + R(d) + "px; text-align:left; white-space:normal; padding:" + R(e) + "px; box-sizing:border-box; vertical-align:top; border-radius:4px; padding:0;" + bj({
                value: O("0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)")
            }) + "border:0px; width:" + R(b) + "px; height:" + R(c) + "px; position:relative; display:inline-block;}." +
            R("za_") + "{text-decoration:none;}." + R("ab_") + "{width:" + R(g) + "px; height:" + R(h) + "px; background-repeat:no-repeat; background-position:center; background-size:contain; cursor:pointer; position:relative; border-radius:4px 4px 0 0;}." + R("bb_") + "{position:relative; height:" + R(k) + "px; padding:" + R(e) + "px;}." + R("j_") + "{color:#555; font-size:" + R(n) + "px; text-decoration:none;}." + R("cb_") + "{width:" + R(l) + "px; word-wrap:break-word;}." + R("k_") + "{font-weight:700; color:#222;}." + R("db_") + "{font-size:" + R(p) + "px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; width:" +
            R(l) + "px;}." + R("eb_") + "{font-size:" + R(r) + "px; text-decoration:none; color:" + R(a) + "; display:inline-block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:" + R(l) + "px; vertical-align:bottom;}." + R("eb_") + "." + R("fb_") + "{max-width:" + R(l - 20) + "px;}." + R("gb_") + "{padding-bottom:2px; color:" + R(a) + "; width:" + R(l) + "px;}." + R("gb_") + "." + R("hb_") + "{width:" + R(l) + "px;}." + R("ib_") + "{font-size:12px; display:inline-block; text-decoration:none; background-color:" + R(w) + "; position:absolute; border-radius:2px; border-radius:3px; line-height:1; border:1px solid " +
            R(w) + "; padding:1px 2px 1px 2px; background-color:#FFFFFF; color:" + R(w) + ";}." + R("ib_") + "." + R("eb_") + "{background-color:#FFFFFF; color:" + R(a) + "; border:1px solid " + R(a) + "; font-size:" + R(r - 2) + "px; margin-right:4px; position:inherit;}." + R("ib_") + "." + R("eb_") + "." + R("jb_") + "{float:right; margin-right:0;}." + R("kb_") + ", ." + R("lb_") + ", ." + R("mb_") + "{font-size:12px; color:#777777; padding-bottom:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:" + R(l) + "px;}" + Kg({
                Pc: a,
                Qc: 10,
                Oc: O("vertical-align:27%;"),
                uf: O("margin-top:0; margin-right:2px;")
            }) + dj() + fj();
        return I(q)
    };

    function ij(a, b, c) {
        b = c || b;
        var d = a.Zd,
            e = a.Zb;
        c = a.Id;
        var g = a.zd,
            h = a.yd,
            k = a.title,
            l = a.Ae,
            n = a.ae,
            p = a.Sd,
            r = a.Rd,
            q = a.imageWidth,
            w = a.Dd,
            z = a.be,
            A = a.Vd,
            E = a.je,
            D = a.Ma,
            C = a.Qa,
            J = a.od,
            M = a.Df,
            N = a.kf,
            W = a.Ie,
            Ba = a.Nd,
            Ua = a.fe,
            Uc = a.Yb,
            La = a.Pd;
        a = '<div class="' + P("ya_") + " " + P("c_") + '" id="' + P(d) + '">' + (Ba ? cj({
            label: Ba
        }) : "");
        l = '<div class="' + P("bb_") + '"><div class="' + P("cb_") + '">' + pg({
            href: c,
            content: k,
            A: A,
            R: "j_",
            ja: l,
            gb: Qf('title="' + P(k) + '"')
        }) + '</div><div id="' + P(z) + '" style="position: absolute; bottom: 0;">';
        e = H('<div class="' +
            P("gb_") + '" id="' + P(La) + '">' + pg({
                href: c,
                content: L("" + G(p)),
                A: A,
                R: "eb_" + (W ? " fb_" : ""),
                ja: r
            }) + (W ? G(W) : "") + (e ? '<span class="' + P("ib_") + " " + P("eb_") + " " + P("jb_") + '" id="' + P(Uc) + '">' + G(e) + "</span>" : "") + "</div>");
        e = L("" + e);
        p = E && (D || J || C) || M || N ? 2 : 4;
        n = '<div class="' + P("db_") + '" style="padding-bottom: ' + P(R(p)) + 'px;"><span class="' + P("k_") + '" title="' + P(gj({
            Ma: D,
            Qa: C
        })) + '">' + G(n) + "</span></div>" + (N ? '<div class="' + P("mb_") + '">' + G(N) + "</div>" : "") + (M ? '<div class="' + P("lb_") + '">' + G(M) + "</div>" : "") + (E ? (D ? '<div class="' +
            P("kb_") + '" title="' + P(D) + '">' + G(D) + "</div>" : "") + (J ? '<div class="' + P("kb_") + '" title="' + P(J) + '">' + G(J) + "</div>" : "") + (C ? '<div class="' + P("kb_") + '" title="' + P(C) + '">' + G(C) + "</div>" : "") : "");
        n = H(n);
        n = L("" + n);
        E = E || M || N;
        l = l + n + ((Ua && E || !E ? ej({
            la: Ua,
            paddingBottom: 2
        }) : "") + e + "</div></div>");
        a += vg({
            Db: L("" + pg({
                href: c,
                content: L('<div class="' + P("ab_") + '" style="background-image:url(' + P(bg(g)) + ');"></div>'),
                A: A,
                R: "za_",
                ja: h,
                gb: Qf('title="' + P(k) + '"')
            })),
            Eb: L(l),
            Ia: q,
            Oa: w
        }, b);
        return H(a + "</div>")
    }

    function jj(a) {
        return I(hj({
            Ta: a.Ta,
            Ra: a.Ra,
            ka: a.ka,
            zb: a.zb,
            imageWidth: a.imageWidth,
            imageHeight: a.imageHeight,
            Xa: a.Xa,
            Ya: a.Ya,
            tb: a.tb,
            qb: a.qb,
            ib: a.ib,
            hb: a.hb
        }) + "." + R("ab_") + "{border-radius:4px 0 0 4px;}")
    };

    function kj(a) {
        var b = a.Zd,
            c = a.Zb,
            d = a.Id,
            e = a.zd,
            g = a.yd,
            h = a.title,
            k = a.Ae,
            l = a.ae,
            n = a.Sd,
            p = a.Rd,
            r = a.be,
            q = a.Vd,
            w = a.je,
            z = a.Ma,
            A = a.Qa,
            E = a.od,
            D = a.Df,
            C = a.kf,
            J = a.Ie,
            M = a.Nd,
            N = a.fe,
            W = a.Pd;
        a = a.Yb;
        b = '<div class="' + P("ya_") + " " + P("c_") + '" id="' + P(b) + '">' + (M ? cj({
            label: M
        }) : "") + pg({
            href: d,
            content: L('<div class="' + P("ab_") + '" style="background-image:url(' + P(bg(e)) + ');"></div>'),
            A: q,
            R: "za_",
            ja: g,
            gb: Qf('title="' + P(h) + '"')
        }) + '<div class="' + P("bb_") + '"><div class="' + P("cb_") + '">' + pg({
            href: d,
            content: h,
            A: q,
            R: "j_",
            ja: k,
            gb: Qf('title="' +
                P(h) + '"')
        }) + '</div><div id="' + P(r) + '" style="position: absolute; bottom: 0;">';
        e = w && (z || E || A) || D || C ? 2 : 4;
        g = w || D || C;
        b += '<div class="' + P("db_") + '" style="padding-bottom: ' + P(R(e)) + 'px;"><span class="' + P("k_") + '" title="' + P(gj({
            Ma: z,
            Qa: A
        })) + '">' + G(l) + "</span></div>" + (C ? '<div class="' + P("mb_") + '">' + G(C) + "</div>" : "") + (D ? '<div class="' + P("lb_") + '">' + G(D) + "</div>" : "") + (w ? (z ? '<div class="' + P("kb_") + '" title="' + P(z) + '">' + G(z) + "</div>" : "") + (E ? '<div class="' + P("kb_") + '" title="' + P(E) + '">' + G(E) + "</div>" : "") + (A ?
            '<div class="' + P("kb_") + '" title="' + P(A) + '">' + G(A) + "</div>" : "") : "") + (N && g || !g ? ej({
            la: N,
            paddingBottom: 2
        }) : "") + '<div class="' + P("gb_") + " " + P("hb_") + '" id="' + P(W) + '">' + pg({
            href: d,
            content: L("" + G(n)),
            A: q,
            R: "eb_" + (J ? " fb_" : ""),
            ja: p
        }) + (J ? G(J) : "") + (c ? '<span class="' + P("ib_") + " " + P("eb_") + " " + P("jb_") + '" id="' + P(a) + '">' + G(c) + "</span>" : "") + "</div></div></div></div>";
        return H(b)
    }

    function lj(a) {
        var b = a.Dd,
            c = a.zb;
        return I(hj({
            Ta: a.Ta,
            Ra: a.Ra,
            ka: a.ka,
            zb: c,
            imageWidth: a.imageWidth,
            imageHeight: a.imageHeight,
            Xa: a.Xa,
            Ya: a.Ya,
            tb: a.tb,
            qb: a.qb,
            ib: a.ib,
            hb: a.hb
        }) + "." + R("ab_") + "{margin-bottom:" + R(b) + "px;}." + R("bb_") + "{padding:0 " + R(c) + "px;}." + R("ib_") + "." + R("eb_") + "." + R("jb_") + "{margin-top:1px; margin-right:3px;}")
    };

    function mj(a) {
        var b = a.Zd,
            c = a.Id,
            d = a.zd,
            e = a.yd,
            g = a.title,
            h = a.Ae,
            k = a.ae,
            l = a.Sd,
            n = a.Rd,
            p = a.be,
            r = a.Vd,
            q = a.je,
            w = a.Ma,
            z = a.Qa,
            A = a.od,
            E = a.Ie,
            D = a.Nd,
            C = a.fe,
            J = a.Zb,
            M = a.Yb;
        a = a.Pd;
        b = '<div class="' + P("ya_") + " " + P("c_") + '" id="' + P(b) + '">' + (D ? cj({
            label: D
        }) : "") + pg({
            href: c,
            content: L('<div class="' + P("ab_") + '" style="background-image:url(' + P(bg(d)) + ');"></div>'),
            A: r,
            R: "za_",
            gb: Qf('title="' + P(g) + '"'),
            ja: e
        }) + '<div class="' + P("bb_") + '"><div class="' + P("cb_") + '">' + pg({
            href: c,
            content: g,
            A: r,
            R: "j_",
            ja: h,
            gb: Qf('title="' +
                P(g) + '"')
        }) + '</div><div id="' + P(p) + '" style="position: absolute; bottom: 2px;">';
        k = H('<div class="' + P("db_") + '"><span class="' + P("k_") + '" title="' + P(gj({
            Ma: w,
            Qa: z
        })) + '">' + G(k) + '</span></div><div class="' + P("vb_") + '">' + (q ? (w ? '<div class="' + P("kb_") + '" title="' + P(w) + '">' + G(w) + "</div>" : "") + (A ? '<div class="' + P("kb_") + '" title="' + P(A) + '">' + G(A) + "</div>" : "") + (z ? '<div class="' + P("kb_") + '" title="' + P(z) + '">' + G(z) + "</div>" : "") : "") + (C ? ej({
            la: C,
            marginTop: 2
        }) : "") + "</div>");
        k = L("" + k);
        c = H('<div class="' + P("wb_") +
            '" id="' + P(a) + '">' + pg({
                href: c,
                content: L("" + G(l)),
                A: r,
                R: "eb_" + (E ? " fb_" : ""),
                ja: n
            }) + (E ? G(E) : "") + (J ? '<span class="' + P("ib_") + " " + P("eb_") + " " + P("jb_") + '" id="' + P(M) + '">' + G(J) + "</span>" : "") + "</div>");
        c = L("" + c);
        return H(b + (k + c + "</div></div></div>"))
    }

    function nj(a) {
        var b = a.Ta,
            c = a.Ra,
            d = a.ka,
            e = a.imageWidth,
            g = a.imageHeight,
            h = a.Xa,
            k = a.Ya,
            l = a.tb,
            n = a.qb,
            p = a.ib;
        a = a.hb;
        var r = "",
            q = O(" #222 "),
            w = O(" #008000 ");
        r += "." + R("ya_") + "{background:white; border-left:1px solid #ebebeb; margin-left:" + R(Math.floor(d / 2) - 1) + "px; margin-bottom:" + R(d) + "px; width:" + R(b) + "px; height:" + R(c) + "px; vertical-align:top; padding-left:" + R(Math.ceil(d / 2)) + "px; position:relative; display:inline-block;}." + R("ya_") + ":first-child{margin-left:0; padding-left:0; border-left:none;}." + R("za_") +
            "{text-decoration:none;}." + R("ab_") + "{width:" + R(e) + "px; height:" + R(g) + "px; background-repeat:no-repeat; background-position:center; background-size:contain; cursor:pointer; position:relative;}." + R("bb_") + "{position:relative; height:" + R(h) + "px;}." + R("j_") + "{color:#555; font-size:" + R(l) + "px; text-decoration:none;}." + R("cb_") + "{position:relative; top:4px; line-height:1.2; width:" + R(k) + "px; height:32px; word-wrap:break-word;}." + R("k_") + "{font-weight: bold; color:" + R(q) + "; max-width:" + R(k) + "px; display:inline-block; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; margin-right:4px;}." +
            R("db_") + "{position:relative; top:2px; font-size:" + R(n) + "px; color:" + R(q) + "; overflow:hidden; text-overflow: ellipsis; white-space: nowrap; width:" + R(k) + "px; line-height:1.4; height:15px;}." + R("eb_") + "{color:" + R(a) + "; text-decoration:none; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; max-width:" + R(k) + "px; display:inline-block;}." + R("eb_") + "." + R("fb_") + "{max-width:" + R(k - 18) + "px;}." + R("wb_") + "{position:relative; line-height:1.6; font-size:" + R(p) + "px; color:" + R(a) + "; top:0px; height:17px;}." +
            R("kb_") + "{font-size:10px; color:#777777; white-space:nowrap; overflow:hidden; margin-top:2px; text-overflow:ellipsis; width:" + R(k) + "px;}." + R("vb_") + "{height:24px; top:2px; height:inherit;}" + Kg({
                Pc: a,
                Qc: 10,
                Oc: O("vertical-align:34%;"),
                uf: O("margin-top:0; margin-right:2px; display: inline-block; float: none;")
            }) + "." + R("ib_") + "{display:inline-block; text-decoration:none; position:absolute; bottom:1px; color:" + R(w) + "; background-color:" + R(w) + "; border-radius:3px; font-size:10px; line-height:1; border:1px solid " +
            R(w) + "; padding:0 2px 1px 1px;}." + R("ib_") + "." + R("eb_") + "{background-color:#FFFFFF; color:" + R(a) + "; border:1px solid " + R(a) + "; font-size:0.8em; margin-right:4px; position:inherit; left:unset; vertical-align:-20%; padding:1px 2px 1px 2px;}." + R("ib_") + "." + R("eb_") + "." + R("jb_") + "{vertical-align:20%; padding:1px 2px 1px 1px; margin-right:0; line-height:" + R(p - 3) + "px; font-size:" + R(p - 2) + "px; font-weight:normal; position:absolute; right:0;}" + dj() + fj();
        return I(r)
    };

    function oj(a, b, c, d, e, g, h, k, l, n, p, r, q, w, z, A) {
        this.ca = a;
        this.ha = b;
        this.vg = c;
        this.ci = r ? a.u : Dd(a.u);
        this.Ai = n;
        this.nc = d;
        this.vf = e;
        this.Pg = g;
        this.Ze = h;
        this.Yg = k;
        this.ni = p;
        this.ti = l;
        this.Ed = q;
        this.Yi = w;
        this.C = z;
        this.I = A;
        this.rf = T();
        this.sf = T();
        this.ze = T();
        this.Qd = T();
        this.Cf = T();
        this.yf = T();
        this.Rc = T();
        this.Zg = T();
        this.gj = T();
        this.Ff = T();
        this.Ef = T();
        this.yi = 3.5 <= a.rsf ? a.rsf : 0
    }
    oj.prototype.g = function() {
        return this.C({
            Zd: this.rf,
            Zb: this.vg,
            Id: this.ci,
            zd: this.ca.i,
            yd: this.sf,
            title: this.ca.t,
            Ae: this.ze,
            ae: this.ca.pr,
            Df: this.ca.pa,
            kf: this.ca.fop,
            Sd: this.ca.m,
            Rd: this.Qd,
            be: this.Cf,
            imageWidth: this.ha.iw,
            Dd: this.vf,
            Vd: this.ti,
            Ma: this.ca.s,
            Qa: this.ca.ppu,
            od: this.ca.er,
            je: this.Ai,
            Ie: this.I ? this.I.g() : void 0,
            Nd: this.ca.li ? this.ca.li.ld : void 0,
            fe: this.yi,
            wf: this.Ed,
            Pd: this.yf,
            Yb: this.Rc,
            sj: this.Zg,
            Lj: this.gj,
            Fj: this.Ff,
            Ej: this.Ef
        })
    };
    oj.prototype.B = function() {
        return []
    };
    oj.prototype.D = f();

    function pj(a, b, c) {
        c = void 0 === c ? 10 : c;
        var d = b.getElementById(a.Cf);
        if (d) {
            var e = a.Ze - (d.offsetHeight + a.ni);
            0 == d.offsetHeight && 0 < c ? window.setTimeout(function() {
                return pj(a, b, --c)
            }, 100) : (d = U(b, a.ze), aj(d, e))
        }
    }
    oj.prototype.nf = function(a) {
        return U(a, this.rf)
    };

    function qj(a, b, c, d, e, g, h, k, l) {
        var n = new Zd(b.iw, b.ih),
            p = d / 2;
        return new oj(a, b, c, d, p, p, n.height - 2 * p, (new Zd(b.w, b.h)).width - (p + 2 * p + n.width), e, g, 4, h, k, jj, ij, l)
    }

    function rj(a, b, c, d, e, g, h, k, l) {
        var n = new Zd(b.iw, b.ih),
            p = Math.floor(d / 2);
        return new oj(a, b, c, d, b.es || p, p, (new Zd(b.w, b.h)).height - (2 * p + n.height), n.width - p, e, g, 4, h, k, lj, kj, l)
    }

    function sj(a, b, c, d, e, g, h, k, l) {
        var n = new Zd(b.w, b.h);
        return new oj(a, b, c, d, 0, 0, n.height - (new Zd(b.iw, b.ih)).height, n.width, e, g, 0, h, k, nj, mj, l)
    };

    function tj(a, b, c) {
        b = c || b;
        v(a.Bc);
        c = a.Bc;
        var d = b;
        b = a.tf;
        var e = a.ka;
        a = a.wf;
        d = d && d.bh;
        a = "" + H("<style" + (d ? ' nonce="' + P(d) + '"' : "") + ">#adBlock{ font-size:0; background-color:#fff; font-family:verdana,sans-serif; padding-top:" + R(e) + "px; padding-left:" + R(e) + "px;" + (a ? "overflow-x:scroll; overflow-y:hidden; width:auto; white-space:nowrap;" : "") + "}" + R(b) + "</style>");
        b = c.length;
        for (e = 0; e < b; e++) a += G(c[e]);
        return H(a)
    }

    function uj(a) {
        v(a.Kf);
        a = a.Kf;
        for (var b = "<div>", c = a.length, d = 0; d < c; d++) b += G(a[d]);
        return H(b + "</div>")
    };

    function vj(a, b, c) {
        b = c || b;
        v(a.Bc);
        c = a.Bc;
        var d = a.tf,
            e = a.width;
        a = a.ka;
        b = b && b.bh;
        b = '<div style="display: none;" id="_googAFShPLAs"></div><style' + (b ? ' nonce="' + P(b) + '"' : "") + ">";
        d = I("#adBlock{width:" + R(e) + "px; font-size:0;}." + R("nb_") + "{background-color:#fff; border:1px solid #ebebeb; font-family:verdana,sans-serif; padding-top:" + R(a) + "px; padding-left:" + R(a) + "px;}." + R("ob_") + "{overflow:hidden;}" + R(d));
        d = b + d + '</style><div class="' + P("nb_") + '"><div class="' + P("ob_") + '">';
        e = c.length;
        for (b = 0; b < e; b++) d +=
            G(c[b]);
        return H(d + "</div></div>")
    };

    function wj(a) {
        a = a || {};
        return H(xj({
            fa: a.fa,
            Sa: "googAFS"
        }))
    }

    function yj(a) {
        a = a || {};
        return H(xj({
            fa: a.fa,
            Sa: "googAFShPLAs"
        }))
    }

    function xj(a) {
        var b = a.fa;
        return H('<div style="display:none;" id="_' + P(a.Sa) + "_" + P(null != b ? b : "unknown_pubId") + '"></div>')
    };

    function zj(a, b, c, d, e, g) {
        this.ob = a;
        this.Si = b;
        this.nc = c;
        this.Lh = d;
        this.C = g;
        this.Ed = e
    }
    zj.prototype.g = function() {
        for (var a = [], b = 0; b < this.ob.length; b++) {
            for (var c = [], d = 0; d < this.ob[b].length; d++) c.push(this.ob[b][d].g());
            a.push(uj({
                Kf: c
            }))
        }
        return this.C({
            Bc: a,
            width: this.Si.width,
            tf: this.Lh,
            ka: this.nc,
            wf: this.Ed
        })
    };
    zj.prototype.B = function() {
        return []
    };
    zj.prototype.D = f();

    function Aj(a, b) {
        Bj(a, function(c) {
            pj(c, b.document);
            var d = b.document,
                e = d.getElementById(c.Rc),
                g = d.getElementById(c.yf),
                h = d.getElementById(c.Ff);
            g = g || h;
            if (e && g) {
                var k = c.I && d.getElementById(c.I.lc) ? d.getElementById(c.I.lc).offsetWidth : 0,
                    l = U(d, c.Qd);
                h && (k = 0, l = U(d, c.Ef));
                l.style.maxWidth = g.offsetWidth - (k + e.offsetWidth + c.nc + 2) + "px"
            }
            if (d = b.document.getElementById(c.Rc)) d.style.display = "inline-block";
            c.I && c.I.D(b.document.defaultView, {})
        })
    }

    function Cj(a, b, c, d) {
        Bj(a, function(e) {
            var g = [new xf(U(b, e.ze), "0"), new xf(U(b, e.Qd), "1"), new xf(U(b, e.sf), "9")];
            vf(g, e.nf(b), c, d)
        })
    }

    function Bj(a, b) {
        for (var c = 0; c < a.ob.length; c++)
            for (var d = 0; d < a.ob[c].length; d++) b(a.ob[c][d])
    };
    var Dj = zc(function(a, b) {
        var c = a.resultsPageBaseUrl,
            d = a.resultsPageQueryParam;
        b = u(b);
        for (var e = b.next(); !e.done; e = b.next()) {
            e = e.value;
            var g = e.t,
                h = e.afdt;
            if (null != g && null != h) {
                if (!c) throw yc("resultsPageBaseUrl resultsPageBaseUrl needs to be set.");
                var k = new gc(c);
                x(k, d, g);
                x(k, "rsToken", h);
                null != a.personalizedAds && x(k, "pcsa", "" + a.personalizedAds);
                e.l = ic(k);
                e.u = ic(k)
            }
        }
    }, "fRSCL");

    function Ej(a, b, c) {
        if (!c) return null;
        if ("." == c[0]) return b[c.substring(1)];
        c = u(c.split("."));
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            if (null == a) return null;
            if (v(a)) {
                b = parseInt(b, 10);
                if (isNaN(b)) return null;
                a = a[b]
            } else if (va(a) && a.hasOwnProperty(b)) a = a[b];
            else return null
        }
        return a
    };

    function Fj() {
        return I("display:-ms-flexbox; display:-webkit-box; display:-webkit-flex; display:flex;" + Gj({
            vb: "center"
        }) + Hj({
            justifyContent: "center"
        }))
    }

    function Ij(a) {
        var b = a.rules,
            c = a.J,
            d = "";
        a = c ? "right" : "left";
        c = c ? "left" : "right";
        for (var e = Mf(b), g = e.length, h = 0; h < g; h++) {
            var k = e[h];
            switch (va(k) ? k.toString() : k) {
                case "fw":
                    d += "font-weight:";
                    k = b.fw;
                    switch (va(k) ? k.toString() : k) {
                        case 1:
                            d += "100";
                            break;
                        case 2:
                            d += "400";
                            break;
                        case 3:
                            d += "700";
                            break;
                        case 0:
                            d += "400"
                    }
                    break;
                case "bac":
                    d += "background-color:" + R(b.bac);
                    break;
                case "br":
                    d += "border-radius:" + R(b.br) + "px";
                    break;
                case "bw":
                    d += "border:" + R(b.bw) + "px solid " + R(b.boc);
                    break;
                case "bb":
                    d += "border-bottom:" + R(b.bb.w) +
                        "px solid " + R(b.bb.c);
                    break;
                case "bl":
                    d += "border-left:" + R(b.bl.w) + "px solid " + R(b.bl.c);
                    break;
                case "brt":
                    d += "border-right:" + R(b.brt.w) + "px solid " + R(b.brt.c);
                    break;
                case "bt":
                    d += "border-top:" + R(b.bt.w) + "px solid " + R(b.bt.c);
                    break;
                case "ff":
                    d += "font-family:" + R(b.ff) + ",arial,sans-serif;";
                    break;
                case "fs":
                    d += "font-size:" + R(b.fs) + "px";
                    break;
                case "h":
                    d += "height:" + R(b.h) + (-1 != ("" + b.h).indexOf("%") ? "" : "px");
                    break;
                case "i":
                    d += "font-style:" + R(K(b.i, !0) ? "italic" : "normal");
                    break;
                case "lh":
                    d += "line-height:" + R(b.lh) +
                        "px";
                    break;
                case "ls":
                    d += "letter-spacing:" + R(b.ls) + "px";
                    break;
                case "maxh":
                    d += "max-height:" + R(b.maxh) + "px";
                    break;
                case "maxw":
                    d += "max-width:" + R(b.maxw) + "px";
                    break;
                case "mb":
                    d += "margin-bottom:" + R(b.mb) + "px";
                    break;
                case "minh":
                    d += "min-height:" + R(b.minh) + "px";
                    break;
                case "minw":
                    d += "min-width:" + R(b.minw) + "px";
                    break;
                case "ml":
                    d += "margin-" + R(a) + ":" + R(b.ml) + "px";
                    break;
                case "mr":
                    d += "margin-" + R(c) + ":" + R(b.mr) + "px";
                    break;
                case "mt":
                    d += "margin-top:" + R(b.mt) + "px";
                    break;
                case "op":
                    d += "opacity:" + R(b.op);
                    break;
                case "pb":
                    d +=
                        "padding-bottom:" + R(b.pb) + "px";
                    break;
                case "pl":
                    d += "padding-" + R(a) + ": " + R(b.pl) + "px";
                    break;
                case "pr":
                    d += "padding-" + R(c) + ": " + R(b.pr) + "px";
                    break;
                case "pt":
                    d += "padding-top:" + R(b.pt) + "px";
                    break;
                case "tc":
                    d += "color:" + R(b.tc);
                    break;
                case "u":
                    d += "text-decoration:" + R(b.u ? "underline" : "none");
                    break;
                case "st":
                    d += "text-decoration:" + R(b.st ? "line-through" : "none");
                    break;
                case "po":
                    var l = {
                        value: b.po,
                        left: a,
                        right: c
                    };
                    k = l.value;
                    var n = l.left,
                        p = l.right;
                    l = l.prefix;
                    k = I((k.t ? R(l) + "top:" + R(k.t) + "px;" : "") + (k.r ? R(l) + R(p) + ":" +
                        R(k.r) + "px;" : "") + (k.b ? R(l) + "bottom:" + R(k.b) + "px;" : "") + (k.l ? R(l) + R(n) + ":" + R(k.l) + "px;" : ""));
                    d += k + "position:absolute";
                    break;
                case "bos":
                    n = b.bos;
                    k = "";
                    v(n);
                    p = n.length;
                    for (l = 0; l < p; l++) {
                        var r = n[l];
                        k += R(r.xo) + "px " + R(r.yo) + "px " + (r.br ? R(r.br) + "px " + (r.sr ? R(r.sr) + "px " : "") : "") + R(r.sc) + (l != p - 1 ? "," : "")
                    }
                    k = I(k);
                    k = O("" + k);
                    d += bj({
                        value: k
                    });
                    break;
                case "w":
                    d += "width:" + R(b.w) + (-1 != ("" + b.w).indexOf("%") ? "; -ms-flex-negative:1;" + Jj({
                        value: 1
                    }) : "px");
                    break;
                case "tt":
                    switch (d += "text-transform:", k = b.tt, va(k) ? k.toString() :
                        k) {
                        case 1:
                            d += "uppercase";
                            break;
                        default:
                            d += "initial"
                    }
            }
            d += ";"
        }
        return I(d)
    }

    function Jj(a) {
        a = a.value;
        return I("-webkit-box-flex:" + R(a) + " 0; -webkit-flex-shrink:" + R(a) + "; flex-shrink:" + R(a) + ";")
    }

    function Gj(a) {
        a = a.vb;
        var b = "",
            c = "" + (0 == ("" + a).indexOf("flex-") ? R(("" + a).substring(5)) : R(a));
        c = O(c);
        b += "-ms-flex-align:" + R(c) + "; -webkit-box-align:" + R(c) + "; -webkit-align-items:" + R(a) + "; align-items:" + R(a) + ";";
        return I(b)
    }

    function Hj(a) {
        a = a.justifyContent;
        var b = "",
            c = "" + (0 == ("" + a).indexOf("flex-") ? R(("" + a).substring(5)) : R(a));
        c = O(c);
        b += "-ms-flex-pack:" + R(c) + "; -webkit-box-pack:" + R(c) + "; -webkit-justify-content:" + R(a) + "; justify-content:" + R(a) + ";";
        return I(b)
    };

    function Kj(a) {
        var b = a.orientation,
            c = a.id,
            d = a.qa,
            e = a.vb,
            g = a.overflow,
            h = a.Xg,
            k = a.Hg,
            l = a.Wh,
            n = a.href,
            p = "",
            r = "" + R(0 == b ? "row" : "column");
        r = O(r);
        r = "-ms-flex-direction:" + R(r) + "; -webkit-box-orient:" + R(0 == b ? "horizontal" : "vertical") + "; -webkit-flex-direction:" + R(r) + "; flex-direction:" + R(r) + ";";
        r = O(r);
        var q = K(e, 0) || K(e, 3) || K(e, 9) || K(e, 6),
            w = K(e, 1) || K(e, 4) || K(e, 10) || K(e, 7),
            z = K(e, 2) || K(e, 5) || K(e, 11) || K(e, 8),
            A = K(e, 0) || K(e, 1) || K(e, 2),
            E = K(e, 6) || K(e, 7) || K(e, 8),
            D = K(e, 3) || K(e, 4) || K(e, 5),
            C = K(e, 9) || K(e, 10) || K(e, 11);
        q =
            null != e ? Hj({
                justifyContent: q ? "flex-start" : w ? "center" : z ? "flex-end" : ""
            }) : "";
        q = O("" + q);
        e = null != e ? Gj({
            vb: A ? "flex-start" : D ? "flex-end" : E ? "center" : C ? "stretch" : ""
        }) : "";
        e = O("" + e);
        C = "";
        switch (g) {
            case 2:
                C += "-ms-flex-wrap:wrap; -webkit-flex-wrap:wrap; flex-wrap:wrap;";
                break;
            case 3:
                C += "overflow-" + R(0 == b ? "x" : "y") + ":auto; -webkit-overflow-scrolling: touch;"
        }
        b = O(C);
        A = A ? "topAlign" : E ? "centerAlign" : D ? "bottomAlign" : "";
        c = (c ? 'id="' + P(c) + '"' : "") + ' class="' + P("gc_") + (d ? " " + P(d) : "") + (K(g, 3) ? " " + P("hc_") : "") + (K(h, 4) ? " " + P("ic_") +
            " " + P(A) : "") + '"' + (k ? ' data-drop="true"' : "") + ' style="' + P(R(r)) + P(R(q)) + P(R(e)) + P(R(b)) + (l ? "position:relative;" : "") + '"';
        c = Qf(c);
        p += n ? "<a " + Lj(a) + " " + Wf(c) + "></a>" : "<div " + Wf(c) + "></div>";
        return H(p)
    }

    function Mj(a) {
        a = a || {};
        var b = a.id,
            c = a.text,
            d = a.qa,
            e = a.si,
            g = a.hj,
            h = a.href,
            k = "",
            l = 1 == e ? "jc_ " + (K(g, 0) ? "kc_" : "lc_") : "mc_";
        e = null != e ? 'data-lines="' + P(e) + '"' + (null != g ? ' data-truncate="' + P(g) + '"' : ' data-truncate="0"') : "";
        e = Qf(e);
        k += h ? "<a" + (b ? ' id="' + P(b) + '"' : "") + ' class="' + P(l) + " " + P(null != d ? d : "") + '" ' + Wf(e) + " " + Lj(a) + ">" + G(null != c ? c : "") + "</a>" : "<span" + (b ? ' id="' + P(b) + '"' : "") + " " + Wf(e) + ' class="' + P(l) + " " + P(null != d ? d : "") + '">' + G(null != c ? c : "") + "</span>";
        return H(k)
    }

    function Nj(a) {
        var b = a.src,
            c = a.id,
            d = a.qa,
            e = a.href,
            g = "";
        c = (c ? 'id="' + P(c) + '"' : "") + ' class="' + P("nc_") + (d ? " " + P(d) : "") + '"';
        c = Qf(c);
        b = '<img src="' + P(bg(b)) + '">';
        b = L(b);
        g += e ? "<a " + Lj(a) + " " + Wf(c) + ">" + b + "</a>" : "<div " + Wf(c) + ">" + b + "</div>";
        return H(g)
    }

    function Oj(a) {
        var b = a.la,
            c = a.id,
            d = a.Vi,
            e = a.Wi,
            g = a.zj,
            h = a.Jj,
            k = a.qa,
            l = a.href,
            n = a.A,
            p = a.xe,
            r = a.Bb,
            q = "";
        h = null != h ? h : "";
        a = "" + Q((a.yj ? "" : h) + (null != d ? d : "/images/afs/sr-star-off.png"));
        a = Pf(a);
        e = "" + Q((g ? "" : h) + (null != e ? e : "/images/afs/sr-star-on.png"));
        e = Pf(e);
        b = b = {
            href: l,
            A: n,
            xe: p,
            Bb: r,
            ah: L("<div" + (c ? ' id="' + P(c) + '"' : "") + ' class="' + P("oc_") + (k ? " " + P(k) : "") + '"><div class="' + P("pc_") + '"><img src="' + P(bg(a)) + '" class="' + P("qc_") + '"/><div class="' + P("rc_") + '" style="background-image: url(' + P(bg(e)) + "); width: " +
                P(R(20 * Math.max(Math.min(b, 5), 0))) + '%"></div></div></div>')
        };
        c = b.ah;
        b = H(b.href ? "<a " + Lj(b) + ">" + G(c) + "</a>" : G(c));
        return H(q + b)
    }

    function Lj(a) {
        a = a || {};
        var b = a.A,
            c = a.xe,
            d = a.Bb;
        return Lf('href="' + P(Q(a.href)) + '"' + (d ? ' data-notrack="true"' : "") + (null != c ? ' data-nb="' + P(c) + '"' : "") + " " + qg({
            A: b
        }))
    };
    var Pj = {},
        Qj = null;

    function Rj() {}
    var Sj = "function" == typeof Uint8Array;

    function Tj(a, b, c) {
        a.P = null;
        b || (b = []);
        a.Bj = void 0;
        a.Xb = -1;
        a.V = b;
        a: {
            if (b = a.V.length) {
                --b;
                var d = a.V[b];
                if (!(null === d || "object" != typeof d || v(d) || Sj && d instanceof Uint8Array)) {
                    a.yc = b - a.Xb;
                    a.$ = d;
                    break a
                }
            }
            a.yc = Number.MAX_VALUE
        }
        a.tj = {};
        if (c)
            for (b = 0; b < c.length; b++)
                if (d = c[b], d < a.yc) d += a.Xb, a.V[d] = a.V[d] || Uj;
                else {
                    var e = a.yc + a.Xb;
                    a.V[e] || (a.$ = a.V[e] = {});
                    a.$[d] = a.$[d] || Uj
                }
    }
    var Uj = [];

    function Vj(a, b) {
        if (b < a.yc) {
            b += a.Xb;
            var c = a.V[b];
            return c === Uj ? a.V[b] = [] : c
        }
        if (a.$) return c = a.$[b], c === Uj ? a.$[b] = [] : c
    }

    function Wj(a) {
        if (a.P)
            for (var b in a.P) {
                var c = a.P[b];
                if (v(c))
                    for (var d = 0; d < c.length; d++) c[d] && Xj(c[d]);
                else c && Xj(c)
            }
    }

    function Xj(a) {
        Wj(a);
        return a.V
    }
    Rj.prototype.Lf = Sj ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            var b;
            ua(this);
            void 0 === b && (b = 0);
            if (!Qj) {
                Qj = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var g = c.concat(d[e].split(""));
                    Pj[e] = g;
                    for (var h = 0; h < g.length; h++) {
                        var k = g[h];
                        void 0 === Qj[k] && (Qj[k] = h)
                    }
                }
            }
            b = Pj[b];
            c = [];
            for (d = 0; d < this.length; d += 3) {
                var l = this[d],
                    n = (e = d + 1 < this.length) ? this[d + 1] : 0;
                k = (g = d + 2 < this.length) ? this[d +
                    2] : 0;
                h = l >> 2;
                l = (l & 3) << 4 | n >> 4;
                n = (n & 15) << 2 | k >> 6;
                k &= 63;
                g || (k = 64, e || (n = 64));
                c.push(b[h], b[l], b[n] || "", b[k] || "")
            }
            return c.join("")
        };
        try {
            return JSON.stringify(this.V && Xj(this), Yj)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.V && Xj(this), Yj)
    };

    function Yj(a, b) {
        return "number" != typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    }
    Rj.prototype.toString = function() {
        Wj(this);
        return this.V.toString()
    };
    Rj.prototype.getExtension = function(a) {
        if (this.$) {
            this.P || (this.P = {});
            var b = a.vj;
            if (a.xj) {
                if (a.Uh()) return this.P[b] || (this.P[b] = Ia(this.$[b] || [], function(c) {
                    return new a.hh(c)
                })), this.P[b]
            } else if (a.Uh()) return !this.P[b] && this.$[b] && (this.P[b] = new a.hh(this.$[b])), this.P[b];
            return this.$[b]
        }
    };
    Rj.prototype.clone = function() {
        return new this.constructor(Zj(Xj(this)))
    };

    function Zj(a) {
        if (v(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Zj(d) : d)
            }
            return b
        }
        if (Sj && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Zj(d) : d);
        return b
    };

    function ak() {
        this.oh = Me();
        this.Fc = null
    }

    function bk(a, b) {
        var c = ck,
            d = c.Fc ? c.Fc.getData() : {},
            e = c.oh;
        a = Lg(a(b || Mg, void 0, d), e);
        c.pf(a, yf);
        return a
    }
    ak.prototype.g = function(a, b) {
        a = a(b || {}, this.Fc ? this.Fc.getData() : {});
        this.pf(null, a && a.Y);
        return String(a)
    };
    ak.prototype.pf = sa;
    var ck = new ak,
        dk = {},
        ek = (dk[2] = "sc_", dk[3] = "tc_", dk);

    function fk(a, b, c) {
        this.aj = a;
        this.me = b;
        if (a = a.s) {
            b = {};
            for (var d = 0; d < a.length; d++) b[a[d].sk] = {
                rules: a[d].r,
                jc: a[d].hr
            };
            a = b
        } else a = {};
        this.Zi = a;
        this.N = c
    }
    fk.prototype.g = function(a, b) {
        function c(h, k, l) {
            var n = "adBlock" == h.dbk;
            k = {
                id: n ? "adBlock" : k,
                qa: (h.sk || "") + " " + (void 0 === l ? "" : l),
                A: d.N
            };
            l = h.dbk ? Ej(a, d.me, h.dbk) : void 0;
            if (h.dbk && !l && !n || h.hnk && null != Ej(a, d.me, h.hnk)) return null;
            n = null;
            if (h.ac) {
                var p = h.ac[0],
                    r = p.act,
                    q = p.dbk ? Ej(a, d.me, p.dbk) : void 0,
                    w = {};
                p.ad && p.ad.forEach(function(D) {
                    w[D.n] = D.v
                });
                var z = p.en,
                    A = void 0,
                    E = void 0;
                switch (r) {
                    case 0:
                        k.href = q;
                        k.Bb = !1;
                        k.xe = null != p.nb ? p.nb : w.nb;
                        break;
                    case 3:
                        k.qa += " uc_", E = "vc_", A = T(), k.id || (k.id = T()), e.push({
                            kc: k.id,
                            Ea: A
                        })
                }
                z && (n = c(z, A, E))
            }
            q = null;
            p = h.nt;
            r = h.lr || {};
            q = (d.Zi[h.sk] || {}).rules || {};
            switch (p) {
                case 0:
                    l = r.o;
                    null == l && (l = 0);
                    k.orientation = l;
                    k.vb = r.a;
                    k.Hg = 1 == r.t;
                    k.overflow = r.ov;
                    k.Xg = r.cf;
                    k.Wh = r.ap && !q.po;
                    q = Kj;
                    break;
                case 1:
                    k.text = H(l);
                    k.si = r.nl;
                    k.hj = r.t;
                    q = Mj;
                    break;
                case 2:
                    k.src = l;
                    q = Nj;
                    break;
                case 4:
                    "string" == typeof l && (l = parseFloat(l));
                    if ("number" != typeof l || isNaN(l)) return null;
                    k.Vi = q.bu;
                    k.Wi = q.fu;
                    k.la = l;
                    q = Oj;
                    break;
                default:
                    return null
            }
            if (l = ek[r.sb]) k.qa += " " + l;
            k = bk(q, k);
            h = h.ch;
            if (0 == p && h && 0 < h.length) {
                l = !1;
                for (p =
                    0; p < h.length; p++) r = c(h[p]), null != r && (l = !0, k.appendChild(r));
                if (!l) return null
            }
            return n ? (h = document.createDocumentFragment(), h.appendChild(k), h.appendChild(n), h) : k
        }
        var d = this;
        b = void 0 === b ? [] : b;
        var e = [],
            g = T();
        b = c(this.aj.l || {}, g, b.join(" "));
        b || (b = document.createElement("span"), b.id = g);
        return {
            rootElement: b,
            qj: e,
            Ji: g
        }
    };

    function gk(a, b) {
        function c(q) {
            var w = q.style.wordWrap,
                z = q.style.whiteSpace;
            q.style.whiteSpace = "nowrap";
            q.style.wordWrap = "normal";
            var A = q.offsetHeight;
            q.style.whiteSpace = z;
            q.style.wordWrap = w;
            return A
        }

        function d(q, w) {
            var z = 0 == q.childElementCount;
            w = w && "true" == q.getAttribute("data-drop");
            if (z || w) z = q.parentNode, z.removeChild(q), q.id != b && d(z, w)
        }
        a = a.querySelectorAll("[data-lines]");
        for (var e = a.length - 1; 0 <= e; e--) {
            var g = a[e],
                h = g.parentNode,
                k = parseInt(g.getAttribute("data-lines"), 10),
                l = parseInt(g.getAttribute("data-truncate"),
                    10),
                n = g.getBoundingClientRect(),
                p = h.getBoundingClientRect(),
                r = p.left > n.left || p.right < n.right;
            n = n.left > p.right || n.right < p.left;
            if (1 == k && 0 == l) n && h.removeChild(g);
            else if (n = 1 < k ? c(g) : void 0, p = ac() ? -1 : 0, (1 == k ? g.offsetWidth < g.scrollWidth + p : 1 < k && g.offsetHeight / n > k) || r) switch (l) {
                case 0:
                    aj(g, (n + 1) * k);
                    break;
                case 1:
                    h.removeChild(g), d(h, !0)
            }
        }
    };
    var hk = {
        nt: 0,
        sk: "si128"
    };

    function ik(a, b, c, d) {
        this.sg = vf;
        this.ea = [];
        c = new fk(b, c, d);
        this.Ub = null;
        a: {
            b = u(b.s || []);
            for (d = b.next(); !d.done; d = b.next())
                if (d = d.value, "si128" == d.sk && d.r && d.r.h && "0" != d.r.h) {
                    b = {
                        s: [d],
                        l: hk
                    };
                    break a
                }
            b = null
        }
        null != b && (this.Ub = (new fk(b, {}, !1)).g({}).rootElement, this.Ub.removeAttribute("id"));
        a = u(a);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, this.ea.push(c.g(b[b.adtype], ["c_"]))
    }
    ik.prototype.g = function() {
        for (var a = document.createDocumentFragment(), b = 0; b < this.ea.length; b++) a.appendChild(this.ea[b].rootElement), this.Ub && b < this.ea.length - 1 && a.appendChild(this.Ub.cloneNode(!0));
        return a
    };

    function jk(a, b) {
        var c = [];
        b = u(b.s || []);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = d.r;
            e && e.hasOwnProperty("ff") && (e.ff = I(e.ff));
            (e = d.hr) && e.hasOwnProperty("ff") && (e.ff = I(e.ff));
            c.push({
                className: d.sk,
                rules: d.r || {},
                jc: d.hr || {}
            })
        }
        a = a.isRtl;
        v(c);
        b = "<style>";
        d = c.length;
        for (e = 0; e < d; e++) {
            var g = c[e];
            b += (g.rules && 0 < Mf(g.rules).length ? "." + R(g.className) + "{" + Ij({
                rules: g.rules,
                J: a
            }) + "}" : "") + (g.jc && 0 < Mf(g.jc).length ? "." + R(g.className) + ":hover{" + Ij({
                rules: g.jc,
                J: a
            }) + "}" : "")
        }
        return H(b + "</style>")
    };
    var kk = window;

    function lk(a) {
        Tj(this, a, null)
    }
    Da(lk, Rj);

    function mk(a) {
        Tj(this, a, null)
    }
    Da(mk, Rj);

    function nk(a) {
        this.S = a || {
            cookie: ""
        }
    }
    t = nk.prototype;
    t.isEnabled = function() {
        return navigator.cookieEnabled
    };
    t.set = function(a, b, c, d, e, g) {
        if ("object" === typeof c) {
            var h = c.Hj;
            g = c.Ij;
            e = c.domain;
            d = c.path;
            c = c.Aj
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === c && (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        g = g ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Aa() + 1E3 * c)).toUTCString();
        this.S.cookie = a + "=" + b + e + d + c + g + (null != h ? ";samesite=" + h : "")
    };
    t.get = function(a, b) {
        for (var c = a + "=", d = (this.S.cookie || "").split(";"), e = 0, g; e < d.length; e++) {
            g = mb(d[e]);
            if (0 == g.lastIndexOf(c, 0)) return g.substr(c.length);
            if (g == a) return ""
        }
        return b
    };
    t.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", 0, b, c);
        return d
    };
    t.clear = function() {
        for (var a = (this.S.cookie || "").split(";"), b = [], c = [], d, e, g = 0; g < a.length; g++) e = mb(a[g]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function ok(a) {
        return (a = (new nk(a)).get("DATA_USE_CONSENT", "")) ? a : null
    }

    function pk(a) {
        var b = (b = (new nk(a)).get("FCCDCF", "")) ? b : null;
        try {
            var c = b ? new lk(b ? JSON.parse(b) : null) : null
        } catch (d) {
            c = null
        }
        if (!c) return ok(a);
        c.P || (c.P = {});
        c.P[3] || (b = Vj(c, 3)) && (c.P[3] = new mk(b));
        c = c.P[3];
        if (!c || null == Vj(c, 1)) return ok(a);
        a = Vj(c, 2);
        b = Aa();
        if (a) {
            if (b < a || b > a + 33696E6) return null
        } else return null;
        return Vj(c, 1)
    };

    function qk(a) {
        Tj(this, a, rk)
    }
    Da(qk, Rj);
    var rk = [1, 2, 3, 4];

    function sk(a) {
        tk();
        return new bb(cb, a, null)
    }
    var tk = sa;

    function uk(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    };

    function vk(a) {
        var b = document;
        try {
            var c = pk(b);
            var d = c ? new qk(c ? JSON.parse(c) : null) : null
        } catch (e) {
            d = null
        }
        if (!d) return 0;
        if (Vj(d, 7)) return 4;
        if (6048E5 < Aa() - (Vj(d, 5) || 0)) return 0;
        if (a) {
            if (Ja(Vj(d, 3), a)) return 2;
            if (Ja(Vj(d, 4), a)) return 3
        }
        return 1
    };

    function wk(a, b) {
        a.src = fb(b);
        if (null === ra) a: {
            b = pa.document;
            if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && qa.test(b)) {
                ra = b;
                break a
            }
            ra = ""
        }(b = ra) && a.setAttribute("nonce", b)
    };

    function xk(a, b, c) {
        c = void 0 === c ? document : c;
        var d = Me(c).createElement("SCRIPT");
        d.type = "text/javascript";
        b && (void 0 !== d.onreadystatechange ? d.onreadystatechange = function() {
            if ("complete" == d.readyState || "loaded" == d.readyState) try {
                b()
            } catch (g) {}
        } : d.onload = b);
        wk(d, sk(a));
        var e = c.getElementsByTagName("head")[0];
        if (e) try {
            pa.setTimeout(function() {
                e.appendChild(d)
            }, 0)
        } catch (g) {}
    };

    function yk(a, b, c) {
        var d = this;
        this.Xi = b;
        this.qh = c;
        this.Ha = "0";
        this.Qe = null;
        this.sd = a;
        this.cb = null;
        a && a.document && "complete" === a.document.readyState ? this.dc() : Wd(a, "load", function() {
            return d.dc()
        })
    }
    t = yk.prototype;
    t.dc = function() {
        var a = this;
        if (!this.cb) {
            var b = (new Ne(this.sd.document)).createElement("IFRAME");
            b.frameBorder = "0";
            b.style.height = 0;
            b.style.width = 0;
            b.style.position = "absolute";
            this.cb = b;
            this.sd.document.body && (this.sd.document.body.appendChild(b), this.cb.contentDocument ? this.zc() : Wd(this.cb, "load", function() {
                return a.zc()
            }))
        }
    };
    t.zc = function() {
        var a = this,
            b = this.cb;
        b && (b = b.contentDocument ? b.contentDocument : b.contentWindow ? b.contentWindow.document : null) && (this.Ha = "1", b.open(), b.write("<!doctype html><html><head></head><body></body></html>"), b.close(), xk(this.Xi, function() {
            return a.bd()
        }, b))
    };
    t.bd = function() {
        var a = this.cb;
        if (a)
            if (a = a.contentWindow, this.Ha = "", a.botguard)
                if (a = a.botguard.bg) try {
                    this.Qe = new a(this.qh)
                } catch (b) {
                    this.Ha = "5"
                } else this.Ha = "3";
                else this.Ha = "2"
    };
    t.vd = function() {
        if (this.Ha) return this.Ha;
        var a = this.Qe;
        if (!a) return "5";
        if (!a.invoke) return "4";
        var b = "";
        try {
            a.invoke(function(c) {
                b = c
            })
        } catch (c) {
            return "6"
        }
        return "string" !== typeof b || 0 == b.length ? "6" : 3 > b.length ? "7" : 1124 < b.length ? "8" : b
    };
    t.dc = y(yk.prototype.dc, "BGcI");
    t.zc = y(yk.prototype.zc, "BGpI");
    t.bd = y(yk.prototype.bd, "BGcBV");
    t.vd = y(yk.prototype.vd, "BGgBR");

    function zk(a, b) {
        if (0 != a.length) {
            a = {
                family: a.join("|")
            };
            a = eb(ib(), a, void 0);
            var c;
            (c = od().data.fd || null) && (a = eb(a, {
                display: c
            }));
            b = u(b);
            for (c = b.next(); !c.done; c = b.next()) {
                c = c.value.document;
                var d = c.createElement("link"),
                    e = a;
                d.rel = "stylesheet";
                d.href = e.Pf ? e.Pf : fb(e).toString();
                c.head.appendChild(d)
            }
        }
    }
    var Ak = zc(function(a, b) {
        if (od().data.lawf) {
            var c = rd().data.wftl || [];
            0 != c.length && (a = a.map(function(d) {
                return Vd(d, b)
            }), zk(c, a))
        }
    }, "mLWF");
    var Bk = null,
        Ck = {
            ads: 0,
            rss: 2,
            pbs: 3,
            ad_data: 8
        },
        Dk = {
            text_ads: 0,
            pla_npack: 3
        },
        Ek = {};

    function Fk(a) {
        !Bk && a.name && (Bk = (a = a.name.match(/master-(\d+)/)) && a[1] ? a[1] : null);
        Bk || (Bk = -1);
        return Bk
    }
    Fk = y(Fk, "gMN");
    var Gk = {},
        Hk = (Gk.d_ = "0", Gk.e_ = "1", Gk.sl = "6", Gk.sfblSitelink = "6", Gk.f_ = "14", Gk);

    function Ik(a) {
        var b = [];
        a = a.getElementsByTagName("a");
        for (var c, d = 0; c = a[d]; d++)
            for (var e in Hk)
                if (Eh(c, e)) {
                    b.push(new xf(c, Hk[e]));
                    break
                }
        return b
    }
    Ik = y(Ik, "gTASSL");

    function Jk(a) {
        var b = "master-" + Fk(a);
        return Vd(b, a)
    }
    Jk = y(Jk, "gMI");

    function Kk(a, b, c) {
        try {
            if (a.document.getElementsByTagName("html")) {
                var d = a.document.getElementsByTagName("html")[0];
                d && (!d.lang && b && (d.lang = b), !d.dir && c && (d.dir = c))
            }
        } catch (e) {}
    }
    Kk = y(Kk, "sSILD");

    function Lk(a, b, c) {
        if (a && a.document && a.document.querySelectorAll) {
            var d = new nc("rafsitelinks");
            d.Nb = c || "";
            c = u(a.document.querySelectorAll(".g_"));
            for (var e = c.next(); !e.done; e = c.next())
                if (Mk(e.value)) {
                    jc && sc(d, "wrapping");
                    break
                }
            c = u(a.document.querySelectorAll(".h_"));
            for (e = c.next(); !e.done; e = c.next())
                if (e = e.value, e.hasChildNodes() && 2 == e.childNodes.length && e.offsetWidth < e.childNodes[0].offsetWidth + e.childNodes[1].offsetWidth) {
                    jc && sc(d, "hiding");
                    break
                }
            a = u(a.document.querySelectorAll(".i_"));
            for (c = a.next(); !c.done; c =
                a.next())
                if (c.value.offsetWidth - 30 > b.offsetWidth) {
                    jc && sc(d, "cropping");
                    break
                }
        }
    }
    Lk = y(Lk, "dRSLW");

    function Mk(a) {
        if (a instanceof Array) {
            for (var b = 0; b < a.length; b++)
                if (Mk(a[b])) return !0;
            return !1
        }
        b = a.offsetHeight;
        var c = a.cloneNode(!0);
        c.style.visibility = "hidden";
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.whiteSpace = "nowrap";
        a.parentNode.appendChild(c);
        a = new Zd(c.offsetWidth, c.offsetHeight);
        c.parentNode.removeChild(c);
        return b > a.height
    }
    Mk = y(Mk, "iW");

    function Nk(a, b, c, d, e, g, h) {
        a: {
            var k = g.ipa;g = 0 < d.plas.length;
            var l = d.hasOwnProperty("gbrs") || d.hasOwnProperty("cbrs");
            if (g && l) {
                var n = qe(h);
                g = null != d.cbrs;
                var p = d.gbrs || d.cbrs;
                var r = p.pars;
                l = p.gfs;
                switch (l) {
                    case 1:
                        var q = rj;
                        l = tj;
                        break;
                    case 2:
                        q = sj;
                        l = vj;
                        break;
                    case 3:
                        q = qj;
                        l = tj;
                        break;
                    case 5:
                        q = rj;
                        l = tj;
                        break;
                    default:
                        xc.log(l, "crpGc");
                        break a
                }
                for (var w = p.i, z = !!e.fillPlaEuData, A = !!e.useAfsGooglesyndicationDomain, E = p.r, D = p.c, C = [], J = 0; J < E; J++) {
                    C[J] = [];
                    for (var M = 0; M < D; M++) {
                        var N = d.plas[J * D + M];
                        if (!N) break;
                        var W =
                            Ji(N);
                        C[J].push(q(N, r, k, w, n, z, A, g, W))
                    }
                }
                d = new Zd(r.w, r.h);
                k = p.bbs;
                d = new Zd(w + D * (d.width + w) + 2 * k, w + E * (d.height + w) + 2 * k);
                g && (k = parseInt(h.width, 10)) && (d.width = k);
                k = C[0][0];
                k = k.Yi({
                    Ta: k.ha.w,
                    Ra: k.ha.h,
                    ka: k.nc,
                    Dd: k.vf,
                    zb: k.Pg,
                    imageHeight: k.ha.ih,
                    imageWidth: k.ha.iw,
                    Xa: k.Ze,
                    Ya: k.Yg,
                    tb: k.ha.ts,
                    ib: k.ha.ms,
                    qb: k.ha.ps,
                    hb: k.ha.mc
                });
                g = new zj(C, d, w, k, g, l);
                Qg(yj({
                    fa: e.pubId
                }), c);
                Qg(g.g(), c);
                Aj(g, a);
                Sc(b + ".w", d.width, Pc.G);
                Cj(g, a.document, c, e);
                a = Nd(b);
                ah(h, c, a)
            } else xc.log("PLA block json failed to provide a known render spec.",
                "crpBc")
        }
    }
    Nk = y(Nk, "fP");

    function Ok(a, b) {
        var c = {};
        a = u(a);
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, c[d.k] = d.v;
        b = u(b);
        for (d = b.next(); !d.done; d = b.next()) a = d.value, c[a.k] = a.v;
        return c
    }

    function Pk(a, b, c, d, e, g, h, k, l) {
        var n = Ok(h.r || [], l.r || []),
            p = qe(k);
        e = [H("<style>body{font-family:arial,sans-serif;}div{" + Jj({
                value: 0
            }) + "max-width:100%;}span:last-child, div:last-child{" + Jj({
                value: 1
            }) + "}." + R("sc_") + "{" + Jj({
                value: 1
            }) + "}." + R("hc_") + ">span:last-child, ." + R("hc_") + ">div:last-child, ." + R("tc_") + ", ." + R("tc_") + ":last-child{" + Jj({
                value: 0
            }) + "}a{text-decoration:none; text-transform:none; color:inherit; display:inline-block;}span{" + Jj({
                value: 0
            }) + "display:inline-block; overflow:hidden; text-transform:none; }img{border:none; max-width:100%; max-height:100%; min-width:1px; min-height:1px;}." +
            R("gc_") + "{display:-ms-flexbox; display:-webkit-box; display:-webkit-flex; display:flex;" + Gj({
                vb: "flex-start"
            }) + "box-sizing:border-box; overflow:hidden;}." + R("pc_") + "{position:relative; display:inline-block;}." + R("rc_") + "{position:absolute; top:0; left:0; height:100%; background-repeat:no-repeat; background-size:cover;}." + R("qc_") + "{display:block;}." + R("oc_") + "{" + Fj() + "}." + R("nc_") + "{box-sizing:border-box; max-width:100%; max-height:100%;" + Fj() + "}." + R("kc_") + "{-ms-flex-negative:1; text-overflow:ellipsis; white-space:nowrap;}." +
            R("mc_") + "{-ms-flex-negative:1; max-width: 100%;}." + R("jc_") + "{overflow:hidden;}." + R("lc_") + "{white-space:nowrap;}." + R("uc_") + "{cursor:pointer;}." + R("vc_") + "{display:none; position:absolute; z-index:1;}." + R("ic_") + ">div:not(." + R("vc_") + ") {display:-webkit-inline-box; display:-moz-inline-box; display:-ms-inline-flexbox; display:-webkit-inline-flex; display:inline-flex;}." + R("ic_") + ".topAlign>div{vertical-align:top;}." + R("ic_") + ".centerAlign>div{vertical-align:middle;}." + R("ic_") + ".bottomAlign>div{vertical-align:bottom;}." +
            R("ic_") + ">span, ." + R("ic_") + ">a, ." + R("ic_") + ">img, ." + R("ic_") + "{display:inline;}</style>")];
        var r = h.act;
        r && (h = jk(g, r), r = (new fk(r, n, p)).g({}).rootElement, c.parentNode.replaceChild(r, c), c = a.document.getElementById("adBlock"), e.push(h));
        h = jk(g, l);
        var q = new ik(d, l, n, p);
        e.push(h);
        "iev" in l && Sc(b + ".eV", l.iev, Oc.G);
        c.appendChild(q.g());
        d = {
            fa: g.pubId
        };
        switch (l.at) {
            case 1:
                Qg(wj(d), c);
                break;
            case 2:
                Qg(yj(d), c)
        }
        l = u(e);
        for (d = l.next(); !d.done; d = l.next()) Qg(d.value, c);
        var w = Xd();
        window.setTimeout(function() {
            for (var z =
                    c, A = [], E = u(z.querySelectorAll("a[href]")), D = E.next(); !D.done; D = E.next())
                if (D = D.value, "true" != D.getAttribute("data-notrack")) {
                    var C = D.getAttribute("data-nb");
                    C && A.push(new xf(D, C))
                }
            E = u(z.querySelectorAll(".c_"));
            for (D = E.next(); !D.done; D = E.next()) D.value.setAttribute("data-bg", "true");
            q.sg(A, z, a.document.body, g);
            A = u(q.ea);
            for (E = A.next(); !E.done; E = A.next()) {
                E = E.value;
                D = a;
                C = u(E.qj || []);
                for (var J = C.next(); !J.done; J = C.next()) {
                    var M = J.value;
                    J = D.document.getElementById(M.Ea);
                    M = D.document.getElementById(M.kc);
                    Ii(D, M, J)
                }
                gk(z, E.Ji)
            }
            w.resolve()
        }, 0);
        b = Nd(b);
        ah(k, c, b);
        a.requestAnimationFrame && a.requestAnimationFrame(function() {
            c.style.transform = "rotateZ(0deg)"
        });
        return w.ge
    }
    Pk = y(Pk, "fSA");

    function Qk(a, b, c, d, e, g, h, k) {
        var l = !wd(vd());
        e = 0 != k.domainLinkAboveDescription;
        g.isRtl && (a.document.dir = "rtl");
        var n = k.type || "ads",
            p = ch;
        "relatedsearch" != n && "searchbox" != n && (p = eh(h.iaa.t), l = !1);
        if ("relatedsearch" == n) {
            var r = h.rs_attr.t,
                q = h.rs_attr.u;
            k.horizontalFlow && (r += ":");
            r && Rg(q, r, c)
        }
        l = {
            Be: l,
            type: n
        };
        h.cat && pd() && (n = Zi(h.cat), Object.assign(l, n));
        Pg(g, c, k, l);
        d = Rk(d, b, c, k, e, p, g, h);
        setTimeout(function() {
            return Lk(a, c, g.queryId)
        }, 100);
        b = Nd(b);
        ah(k, c, b);
        d ? d.D(a, g) : Sk(c, g)
    }
    Qk = y(Qk, "fA");

    function Sk(a, b) {
        var c = Ka(Pe("div", "a_", a));
        c = c.concat(Ka(Pe("tr", "a_", a)));
        for (var d, e = 0; d = c[e]; e++) vf(Ik(d), d, a, b)
    }
    Sk = y(Sk, "aSSTATU");

    function Tk(a, b, c) {
        var d = Jk(a);
        if (d) {
            var e = d.document.documentElement.lang;
            var g = d.document.documentElement.dir
        }
        if ((d = c.at) && 0 < d.length) {
            var h = {};
            for (var k = u(d), l = k.next(); !l.done; l = k.next())
                if (l = l.value, l.c)
                    for (var n = u(l.c), p = n.next(); !p.done; p = n.next()) h[p.value] = l;
                else var r = l
        }
        k = [];
        l = [];
        for (var q in Ek)
            if (p = Ek[q], n = Vd(q, a), null != n) {
                Kk(n, e, g);
                var w = null;
                try {
                    w = n.document.getElementById("adBlock")
                } catch (J) {}
                if (null != w) {
                    var z = 2 == p[0].type,
                        A = 5 == p[0].type,
                        E = !!c.cat && pd(),
                        D = te(q, a),
                        C = Promise.resolve();
                    !d || z || A || E ? 3 == p[0].type ? Nk(n, q, w, p[0], b, c, D) : Qk(n, q, w, p, a, b, c, D) : (C = void 0, C = h ? (C = h[D.container]) ? C : r : d[0], C = Pk(n, q, w, p, a, b, c, D, C));
                    c.bg && (p = new yk(n, c.bg.i, c.bg.p), n.csabg = p);
                    l.push(C);
                    Qd[q] = !0;
                    k.push(q);
                    delete Ek[q]
                }
            }
        Ak(k, a);
        Promise.all(l).then(function() {
            ke(a)
        })
    }
    Tk = y(Tk, "mPAASH");

    function Uk(a, b, c) {
        var d = Math.max.apply(Math, a);
        a = Math.min.apply(Math, a);
        if (d - a > Gd)
            for (d = 0; d < b.length; d++) c[b[d]] = null;
        return c
    }
    Uk = y(Uk, "pBDF");

    function Vk(a, b) {
        var c = {},
            d = !1,
            e = [],
            g = [],
            h;
        for (h in b)
            if (h in a) {
                var k = b[h],
                    l = a[h];
                "undefined" != typeof l && (l = Id(k, l), null != l && (c[h] = l, k.j == Hd && (e.push(l), g.push(h)), d = !0))
            }
        0 < e.length && (c = Uk(e, g, c));
        return d ? c : null
    }
    Vk = y(Vk, "vO");

    function Wk(a, b) {
        return (/^slave-\d+-\d+$/.test(a) || /^master-\d+$/.test(a)) && "object" == typeof b
    }
    Wk = y(Wk, "iPABO");

    function Xk(a) {
        try {
            if (!a) throw Error("Null, undefined or empty window.name.");
            var b = JSON.parse(a)
        } catch (d) {
            var c = d.message;
            a && (c = "Invalid window.name: " + a.split(",")[0]);
            xc.log(c, "pNAO")
        }
        return b || {}
    }
    Xk = y(Xk, "pNAO");

    function Yk(a, b) {
        var c = {},
            d;
        for (d in a) {
            var e = a[d];
            "name" == d ? c[d] = /^slave-\d+-\d+$/.test(e) || /^master-\d+$/.test(e) ? e : null : Wk(d, e) && (e = Vk(e, b), c[d] = e, Ek[d] = [])
        }
        return c
    }
    Yk = y(Yk, "vNAO");

    function Zk(a, b, c, d) {
        c = b.horizontalFlow ? -1 : b.columns;
        if (2 <= c && !(0 >= c)) {
            for (var e = [], g = 0, h = 0; h < c; h++)
                for (var k = Math.ceil((a.length - g) / (c - h)), l = 0; l < k; l++) e[l * c + h] = a[g++];
            a = e
        }
        b = !b.horizontalFlow;
        if (d && d.Dj && 1 == c) throw Error(yc("not AFD"));
        v(a);
        e = '<table cellspacing="0" cellpadding="0"' + (2 <= c || b ? ' width="100%"' : "") + "><tbody><tr>";
        d = a.length;
        for (b = 0; b < d; b++) g = a[b], h = 0 > c || 2 <= c && b < c, e += (0 != b && 0 < c && 0 == b % c ? "</tr><tr>" : "") + '<td class="col' + (b == d - 1 ? " l" : "") + '"' + (2 <= c ? ' width="' + P(100 / c) + '%"' : "") + ">", k = a.length %
            c ? a.length % c : c, h = '<div class="ad' + (0 == b ? " f" : "") + (h ? " fr" : "") + (b == d - 1 ? " l" : "") + (!h && 2 <= c && b >= a.length - k ? " lr" : "") + '"><div class="' + P("b_") + " " + P("c_") + ' radlinkC">' + ug({
                Da: g,
                Zc: !1,
                A: !1,
                Md: ""
            }) + '<div class="adD">', k = Pf("" + Q(g.l)), g = L("" + G(g.t)), g = H('<div class="adStd"><a href="' + P(Q(k)) + '" class="' + P("d_") + '" data-notrack="true" target="_top">' + g + "</a></div>"), e += h + g + "</div></div></div></td>";
        c = H(e + "</tr></tbody></table>");
        return c
    }
    Zk = y(Zk, "cRSN");

    function Rk(a, b, c, d, e, g, h) {
        if (0 >= a.length) return null;
        var k = qe(d),
            l = b = null;
        if (td().data.cucai) {
            var n = "https:" == window.location.protocol;
            null != d.adIconUrl && 0 < d.adIconHeight && 0 < d.adIconWidth && Tg(a, d.adIconUrl, n)
        }
        Dj(d, a);
        n = d.type || "ads";
        var p = !!h.isRtl,
            r = re(d, h) && "relatedsearch" != n,
            q = d.lines;
        if (d.adLayout) switch (d.adLayout) {
            case "oneline":
                q = 1;
                break;
            case "twoline":
                q = 2;
                break;
            default:
                q = 3
        }
        if (wd(vd()) || xd(vd()) || od().data.atl) q = 3;
        oc().bc = h.pubId;
        oc().bc = h.styleId;
        e = {
            kb: q,
            Wa: !!h.clickableIcon,
            ph: e,
            Ja: g,
            J: p,
            A: k,
            wj: d.hl,
            La: r,
            pe: d.sellerColumnWidth
        };
        if ("ads" == n) {
            d = [];
            g = vd();
            for (b = 0; b < a.length; ++b) e.La ? d.push(new Mi(a[b], e, b == a.length - 1)) : wd(g) || xd(g) ? d.push(new Li(a[b], e)) : (l = a[b], l = Ci(l, e).concat([Bi(l, e), wi(l, e)]), d.push(new Si(a[b], l, e)));
            l = new Yi(d, e.La ? Gg : Xi);
            b = l.g()
        } else "relatedsearch" == n && (b = Zk(a, d, e, null));
        Qg(wj({
            fa: h.pubId
        }), c);
        b && Qg(b, c);
        return l
    }
    Rk = y(Rk, "cAN");

    function $k(a) {
        var b = [{
            index: a.indexOf("{{NUM_START}}"),
            fb: 13
        }, {
            index: a.indexOf("{{NUM_END}}"),
            fb: 11
        }, {
            index: a.indexOf("{{LINK_START}}"),
            fb: 14
        }, {
            index: a.indexOf("{{LINK_END}}"),
            fb: 12
        }, {
            index: a.indexOf("{{RATING}}"),
            fb: 10
        }];
        b.sort(function(g, h) {
            return g.index - h.index
        });
        for (var c = [], d = 0, e = 0; e < b.length && -1 == b[e].index;) e++;
        if (e == b.length) return [a];
        for (; e < b.length; e++) d < b[e].index && c.push(a.substring(d, b[e].index)), d = a.substring(b[e].index, b[e].index + b[e].fb), d = d.replace("{{", "").replace("}}", ""), c.push(d),
            d = b[e].index + b[e].fb;
        d < a.length && c.push(a.substring(d));
        return c
    }
    $k = y($k, "pSSTA");

    function al(a) {
        if (a.u) {
            a.u = Dd(a.u);
            a.ctc && (a.ctc.u = Dd(a.ctc.u));
            for (var b = u("sl1l sl2l sl3l sl4l sl2c2l sl2c3l sl2e sl4e".split(" ")), c = b.next(); !c.done; c = b.next())
                if (c = c.value, a[c] && (c = a[c].sls)) {
                    c = u(c);
                    for (var d = c.next(); !d.done; d = c.next()) d = d.value, d.u = Dd(d.u)
                }
        }
    }
    al = y(al, "aDTU");

    function bl(a) {
        if (a.sr && a.sr.wt && a.sr.nt) {
            var b = $k(a.sr.wt);
            a.sr.wt = 1 == b.length ? b[0] : b;
            b = $k(a.sr.nt);
            a.sr.nt = 1 == b.length ? b[0] : b
        }
    }
    bl = y(bl, "fSRD");

    function cl(a, b, c) {
        var d = !1,
            e = Fk(b),
            g = td();
        c.queryId && (Sc("qi", c.queryId, B.G), oc().Nb = c.queryId || "");
        c.effectiveAdsWebProperty && Sc("eawp", c.effectiveAdsWebProperty, B.G);
        for (var h = {}, k, l = 0; l < a.length; l++) {
            var n = a[l].adtype;
            k = void 0 != n;
            var p = a[l],
                r = p.fn;
            "slave-0" == r && (d = !0);
            r = r + "-" + e;
            Ek[r] || (xc.log(r, "pAJ2"), Ek[r] = []);
            Ek[r].push(p);
            k && (p = p[n]);
            3 != p.type && (c.useAfsGooglesyndicationDomain || al(p), p.v && (p.visDomain = p.v.replace(/<[^>^<]*>/g, "").replace(/\/.*$/, "").replace(/^www\./, ""), p.nonBreakingVisDomain = p.visDomain.replace(/-/g,
                "&#8209;")), 0 == p.type && bl(p), g.data.cgavu && p.v && (h[p.v.replace(/<[^>^<]*>/g, "")] = 1))
        }
        if (g.data.cgavu) {
            a = [];
            for (var q in h) a.push(q);
            h = a.sort().join("|");
            Sc("v." + e, h, B.G)
        }
        for (var w in Ek)
            if (q = Ek[w], h = q.length, 0 < h && !k && (a = q[0], 3 == a.type && (h = a.plas ? a.plas.length : 0)), d && /^master/.test(w)) 0 < h && xc.log(q.length, "pAJ3"), delete Ek[w];
            else {
                Sc(w + ".hA", 0 < h, Oc.G);
                g.data.cgna && Sc(w + ".aC", h, Pc.G);
                if (1 > h && (q = Vd(w, b))) try {
                    var z = q.document.getElementById("adBlock");
                    if (z) {
                        var A = {
                            fa: c.pubId
                        };
                        A = A || {};
                        var E = H(xj({
                            fa: A.fa,
                            Sa: "googNoAds"
                        }));
                        Qg(E, z)
                    }
                } catch (D) {}
                1 > h && delete Ek[w]
            }
        g.data.cgna && Sc("aD." + e, !0, Oc.G);
        Tc()
    }
    cl = y(cl, "pAJ");

    function dl(a) {
        var b = [],
            c;
        for (c in Ck) {
            var d = a[c];
            if (d) {
                for (var e = Ck[c], g = 0; g < d.length; g++) d[g].type = "ad_data" == c ? Dk[d[g].adtype] : e;
                b = b.concat(d)
            }
        }
        return b
    }
    dl = y(dl, "cAA");

    function el(a, b, c) {
        var d = null;
        window.XMLHttpRequest ? d = new XMLHttpRequest : window.ActiveXObject && (d = new ActiveXObject("Microsoft.XMLHTTP"));
        if (d) d.open("GET", "/afs/ads?" + c, !0), d.setRequestHeader("Duplicate", "1"), d.onreadystatechange = function() {
            if (4 == d.readyState) {
                var e = JSON.parse(d.responseText.substr(d.responseText.indexOf("//") + 2));
                if (!e) throw Error("Unable to use waitForAds");
                window.ad_json = e;
                fl(a, b)
            }
        }, d.send();
        else throw Error("Unable to create the HTTP request object.");
    }
    el = y(el, "rCAAC");

    function gl(a) {
        if (!a) return {};
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c],
                e = d.n;
            d = d.v;
            "t" == d ? b[e] = !0 : "f" != d && (b[e] = d)
        }
        return b
    }
    gl = y(gl, "cPATO");

    function hl(a, b, c) {
        window.cMF_ = function(d) {
            /Opera/i.test($b) ? setTimeout(function() {
                d()
            }, 0) : d()
        };
        window.sPH = function() {
            window.cMF_(za(ke, a))
        };
        window.mPAASH = function() {
            window.cMF_(za(Tk, a, b, c))
        };
        Tk(a, b, c)
    }
    hl = y(hl, "sCFC");

    function il(a) {
        return function(b) {
            b = b.data.split(":");
            2 == b.length && "orientation" == b[0] && ke(a)
        }
    }
    il = y(il, "bOCH");

    function jl(a) {
        var b = "" + (rd().data.spb2 || 0);
        if ("0" != b) {
            a = Ud(a).names;
            for (var c = 0; c < a.length; c++) Sc(a[c] + "spb", b, B.G);
            Tc()
        }
    }
    jl = y(jl, "sSPM");

    function fl(a, b) {
        var c = window.ad_json || {};
        "string" == typeof c && (c = JSON.parse(c));
        var d = gl(c.caps);
        a = Yk(b, a);
        cl(dl(c), a, d);
        window.onresize = za(ke, a, d);
        hl(a, d, c);
        wd(vd()) && window.addEventListener("message", il(a));
        jl(a, d)
    }
    fl = y(fl, "raa");

    function kl(a, b) {
        var c = b.name,
            d = b && b[c] && Md(b[c]);
        ll();
        d ? el(a, b, b[c].adRequestUrlParams) : fl(a, b)
    }
    kl = y(kl, "init");

    function ll() {
        Sc("it", document.title, B.G);
        Tc()
    }
    ll = y(ll, "setTitle");

    function ml(a, b) {
        for (var c = 0; c < b.length; c++) a[b[c].key] = b[c]
    };

    function nl(a, b) {
        this.Ga = a;
        this.qc = b
    }
    nl.prototype.U = function() {
        var a = this.Ga.U() + " (one by itself, or multiple in an Array";
        this.qc && (a += " with fewer than " + (this.qc + 1) + " elements");
        return a + ")"
    };
    nl.prototype.M = function(a) {
        a = v(a) ? a : [a];
        if (this.qc && a.length > this.qc) return null;
        for (var b = [], c = 0; c < a.length; c++) {
            var d = this.Ga.M(a[c]);
            if (null == d) return null;
            b.push(d)
        }
        return 0 == b.length ? null : b
    };
    nl.prototype.T = function(a) {
        a = this.M(a);
        return null == a || 1 > a.length ? null : this.Ga.T(a[0])
    };

    function ol(a, b) {
        this.Lb = Math.ceil(a);
        this.Kb = Math.floor(b)
    }
    ol.prototype.U = function() {
        return this.Lb + " - " + this.Kb
    };
    ol.prototype.M = function(a) {
        a = parseInt(a, 10);
        return a >= this.Lb && a <= this.Kb ? a : null
    };
    ol.prototype.T = function(a) {
        return this.M(a)
    };
    var pl = /#(.)(.)(.)/;

    function ql(a) {
        if (!rl.test(a)) throw Error("'" + a + "' is not a valid hex color");
        4 == a.length && (a = a.replace(pl, "#$1$1$2$2$3$3"));
        return a.toLowerCase()
    }
    var rl = /^#(?:[0-9a-f]{3}){1,2}$/i,
        sl = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
    var tl = {
        black: "#000000",
        blue: "#0000ff",
        darkorange: "#ff8c00",
        darkred: "#8b0000",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        grey: "#808080",
        orange: "#ffa500",
        red: "#ff0000",
        royalblue: "#4169e1",
        skyblue: "#87ceeb",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00"
    };

    function ul() {
        this.Ne = !1
    }
    ul.prototype.U = function() {
        var a = "A hexadecimal color string";
        this.Ne && (a += " or 'transparent'");
        return a
    };
    ul.prototype.M = function(a) {
        var b = mb("" + a).toLowerCase();
        if (this.Ne && "transparent" == b) return "transparent";
        if (tl[b]) return tl[b];
        a = null;
        try {
            a = ql("#" == b.charAt(0) ? b : "#" + b)
        } catch (p) {}
        if (!a) try {
            a: {
                var c = b.match(sl);
                if (c) {
                    var d = Number(c[1]),
                        e = Number(c[2]),
                        g = Number(c[3]);
                    if (0 <= d && 255 >= d && 0 <= e && 255 >= e && 0 <= g && 255 >= g) {
                        var h = [d, e, g];
                        break a
                    }
                }
                h = []
            }
            if (!h.length) throw Error(b + " is not a valid RGB color");
            var k = h[0],
                l = h[1],
                n = h[2];k = Number(k);l = Number(l);n = Number(n);
            if (k != (k & 255) || l != (l & 255) || n != (n & 255)) throw Error('"(' +
                k + "," + l + "," + n + '") is not a valid RGB color');h = k << 16 | l << 8 | n;a = 16 > k ? "#" + (16777216 | h).toString(16).substr(1) : "#" + h.toString(16)
        }
        catch (p) {}
        return a
    };
    ul.prototype.T = m(null);
    var qm = new ul;

    function rm(a) {
        this.Ga = a
    }
    rm.prototype.U = function() {
        return this.Ga.U() + " (one or more, comma separated)"
    };
    rm.prototype.M = function(a) {
        a = sm(a);
        for (var b = [], c = 0; c < a.length; c++) {
            var d = this.Ga.M(a[c]);
            null != d && b.push(d)
        }
        return 0 == b.length ? null : b.join(",")
    };
    rm.prototype.T = function(a) {
        a = sm(a);
        for (var b = 0; b < a.length; b++) {
            var c = this.Ga.T(a[b]);
            if (null != c) return c
        }
        return null
    };

    function sm(a) {
        if ("string" !== typeof a) return [];
        a = a.split(",");
        for (var b = [], c = 0; c < a.length; c++) b.push(mb(a[c]));
        return b
    };

    function tm(a, b) {
        b = void 0 === b ? 0 : b;
        this.Fe = a;
        this.Ge = {};
        for (a = 0; a < this.Fe.length; a++) {
            var c = this.Fe[a];
            this.Ge[c.toLowerCase()] = new um(c, b + a)
        }
    }
    tm.prototype.U = function() {
        return this.Fe.join(", ") + " (case insensitive)"
    };

    function vm(a, b) {
        if (!b || "string" !== typeof b) return wm;
        b = b.toLowerCase();
        return a.Ge.hasOwnProperty(b) ? a.Ge[b] : wm
    }
    tm.prototype.M = function(a) {
        return vm(this, a).ui
    };
    tm.prototype.T = function(a) {
        return vm(this, a).id
    };

    function um(a, b) {
        this.ui = a;
        this.id = b
    }
    var wm = new um(null, null);
    var xm = /^\d+px$/i,
        ym = /^\d+%$/,
        zm = /^[0-9]+\.[0-9]{1,}$/;

    function Am() {}
    Am.prototype.U = m("Width in px (e.g. '500px') or 'auto'");
    Am.prototype.M = function(a) {
        var b = Bm(a);
        return null != b ? b + "px" : "string" !== typeof a || "auto" != a && !ym.test(a) ? null : a
    };
    Am.prototype.T = function(a) {
        return Bm(a)
    };

    function Bm(a) {
        var b;
        (b = "number" === typeof a) || (b = "string" === typeof a && (!/[^0-9]/.test(a) || zm.test(a) || xm.test(a)));
        return b ? (a = parseInt(a, 10), isNaN(a) ? null : a) : null
    }
    var Cm = new Am;
    var Dm = /^[0-9]{10}$/;

    function Em() {}
    Em.prototype.T = m(null);
    Em.prototype.U = m("A settings id");
    Em.prototype.M = function(a) {
        return "string" === typeof a || Dm.test(a) ? "" + a : null
    };

    function Fm() {}
    Fm.prototype.U = m("A string");
    Fm.prototype.M = function(a) {
        return "string" === typeof a ? a : null
    };
    Fm.prototype.T = m(null);
    var Gm = new Fm;

    function Hm() {}
    Hm.prototype.U = m("An http(s) url");
    Hm.prototype.M = function(a) {
        return "string" === typeof a && Im.test(a) ? a : null
    };
    Hm.prototype.T = m(null);
    var Im = /^((https?):)?\/\/([a-zA-Z0-9~!@#\$&\*\(\)_\+\-=:;',\.\?\/%]*)$/,
        Jm = new Hm;
    var Km = new ol(2, 400),
        Lm = new ol(0, 400),
        Mm = new ol(8, 50),
        Nm = new rm(new tm("verdana;arial;tahoma;times new roman;georgia;trebuchet ms;meiryo;ms gothic;roboto;helvetica neue".split(";"), 1)),
        Om = new rm(new tm(["right", "left", "top", "bottom"])),
        Pm = {
            key: "container",
            j: Gm
        },
        Qm = {
            key: "styleId",
            j: new Em
        },
        Rm = {
            key: "adtest",
            j: F,
            jb: !0
        },
        Sm = {
            key: "adsafe",
            j: new tm(["off", "low", "med", "high"]),
            jb: !0
        },
        Tm = {
            key: "clicktrackUrl",
            j: new nl(Jm)
        },
        Um = {
            key: "linkTarget",
            j: new tm(["_top", "_blank"]),
            Ab: "_top",
            K: !0
        },
        Vm = {
            key: "personalizedAds",
            j: F
        };

    function Wm(a, b) {
        for (var c in b) b.hasOwnProperty(c) && !a.hasOwnProperty(c) && (a[c] = b[c])
    }
    var Xm = {
            role: 2,
            slaveNumber: 1,
            masterNumber: 1,
            cx: 1,
            cref: 1,
            bgresponse: 1,
            sbsignals: 1,
            gcsc: 1,
            fexp: 1,
            forceEx: 1,
            e: 1,
            expflags: 1,
            userAgent: 1,
            domainName: 1,
            adRequestUrlParams: 1,
            deb: 1,
            uideb: 1,
            debug: 1,
            fcap: 1,
            fakeads: 1,
            uuld: 1,
            jsSrc: 1,
            ms: 1,
            rowkeyV2: 1,
            source: 1,
            source_ip: 1,
            tcString: 1
        },
        V = {},
        Ym = (V.pubId = 1, V.propertyCode = 1, V.container = 2, V.channel = 1, V.hl = 1, V.adtest = 1, V.adsafe = 1, V.clicktrackUrl = 1, V.adLoadedCallback = 1, V.noAdLoadedCallback = 1, V.iframeHeightCallback = 1, V.adsResponseCallback = 1, V.linkTarget = 1, V.type = 1, V.personalizedAds =
            1, V.settingsId = 1, V.styleId = 1, V),
        Zm = {
            lines: 1,
            width: 1,
            verticalSpacing: 1,
            colorAdBackground: 1,
            colorAdBorder: 1,
            colorAdSeparator: 1,
            colorText: 1,
            colorTitleLink: 1,
            colorDomainLink: 1,
            colorBackground: 1,
            colorBorder: 1,
            colorAttribution: 1,
            colorLocation: 1,
            colorAnnotation: 1,
            fontFamily: 1,
            fontFamilyAttribution: 1,
            fontSizeTitle: 1,
            fontSizeDescription: 1,
            fontSizeDomainLink: 1,
            fontSizeAttribution: 1,
            fontSizeLocation: 1,
            fontSizeAnnotation: 1,
            titleBold: 1,
            rolloverLinkBold: 1,
            rolloverLinkColor: 1,
            rolloverLinkBackgroundColor: 1,
            rolloverLinkUnderline: 1,
            rolloverAdBackgroundColor: 1,
            noTitleUnderline: 1,
            attributionSpacingBelow: 1,
            rightHandAttribution: 1,
            adBorderSelections: 1,
            borderSelections: 1,
            position: 1,
            adIconUrl: 1,
            adIconWidth: 1,
            adIconHeight: 1,
            adIconSpacingAbove: 1,
            adIconSpacingBefore: 1,
            adIconSpacingAfter: 1,
            adIconSpacingBelow: 1,
            lineHeightTitle: 1,
            lineHeightDescription: 1,
            lineHeightDomainLink: 1,
            domainLinkAboveDescription: 1,
            detailedAttribution: 1,
            columns: 1,
            columnSpacing: 1,
            horizontalFlow: 1,
            horizontalAlignment: 1,
            maxTermLength: 1,
            sellerColumnWidth: 1,
            domTemplate: 1,
            adLayout: 1
        },
        $m = {
            query: 2,
            number: 1,
            oe: 1,
            ie: 1,
            maxTop: 1,
            minTop: 1,
            gcse_nc: 1,
            queryLink: 1,
            queryContext: 1,
            siteLinks: 1,
            location: 1,
            sellerRatings: 1,
            callouts: 1,
            consumerRatings: 1,
            slotName: 1,
            adPage: 1,
            adpage: 1,
            adstyle: 1,
            numRepeated: 1,
            gl: 1,
            gcs: 1,
            gr: 1,
            gm: 1,
            afdToken: 1,
            radlinkQueryId: 1,
            colorKeyword: 1,
            relatedSearches: 1,
            heightConstrained: 1,
            referrer: 1,
            visibleUrlsCallback: 1,
            cseGoogleHosting: 1,
            waitForAds: 1,
            resultsPageBaseUrl: 1,
            resultsPageQueryParam: 1
        };

    function Kd() {
        var a = {};
        ml(a, [Sm, Rm, Tm, Pm, Um, Vm, {
                key: "verticalSpacing",
                j: new ol(2, 34)
            }, {
                key: "lines",
                j: new ol(1, 3),
                H: "af",
                Ab: 3
            }, {
                key: "colorAdBackground",
                j: qm
            }, {
                key: "colorAdBorder",
                j: qm
            }, {
                key: "colorAdSeparator",
                j: qm
            }, {
                key: "colorText",
                j: qm,
                K: !0
            }, {
                key: "colorTitleLink",
                j: qm,
                K: !0
            }, {
                key: "colorDomainLink",
                j: qm,
                K: !0
            }, {
                key: "colorBackground",
                j: qm,
                K: !0
            }, {
                key: "colorBorder",
                j: qm,
                K: !0
            }, {
                key: "colorAttribution",
                j: qm
            }, {
                key: "colorKeyword",
                j: qm
            }, {
                key: "colorLocation",
                j: qm
            }, {
                key: "colorAnnotation",
                j: qm
            }, {
                key: "fontFamily",
                j: Nm,
                H: "ff",
                K: !0
            }, {
                key: "fontFamilyAttribution",
                j: Nm,
                H: "fa"
            }, {
                key: "fontSizeTitle",
                j: Hd,
                H: "st",
                K: !0
            }, {
                key: "fontSizeDescription",
                j: Hd,
                H: "sd",
                K: !0
            }, {
                key: "fontSizeDomainLink",
                j: Hd,
                H: "sv",
                K: !0
            }, {
                key: "fontSizeAttribution",
                j: Hd,
                H: "sa",
                K: !0
            }, {
                key: "fontSizeLocation",
                j: Hd,
                H: "sc",
                K: !0
            }, {
                key: "fontSizeAnnotation",
                j: Hd,
                H: "sn",
                K: !0
            }, {
                key: "titleBold",
                j: F,
                K: !0
            }, {
                key: "rolloverLinkBold",
                j: F,
                K: !0
            }, {
                key: "rolloverLinkColor",
                j: qm,
                K: !0
            }, {
                key: "rolloverLinkBackgroundColor",
                j: qm,
                K: !0
            }, {
                key: "rolloverLinkUnderline",
                j: F,
                K: !0
            },
            {
                key: "rolloverAdBackgroundColor",
                j: qm,
                K: !0
            }, {
                key: "noTitleUnderline",
                j: F
            }, {
                key: "adBorderSelections",
                j: Om
            }, {
                key: "borderSelections",
                j: Om
            }, {
                key: "position",
                j: new tm(["top", "right", "bottom"])
            }, {
                key: "cseGoogleHosting",
                j: new tm(["full", "iframe", "partner"])
            }, {
                key: "adIconUrl",
                j: Jm
            }, {
                key: "adIconWidth",
                j: Km
            }, {
                key: "adIconHeight",
                j: Km
            }, {
                key: "adIconSpacingAbove",
                j: Lm,
                K: !0
            }, {
                key: "adIconSpacingBefore",
                j: Lm
            }, {
                key: "adIconSpacingAfter",
                j: Lm
            }, {
                key: "adIconSpacingBelow",
                j: Lm
            }, {
                key: "lineHeightTitle",
                j: Mm,
                H: "lt"
            }, {
                key: "lineHeightDescription",
                j: Mm,
                H: "ld"
            }, {
                key: "lineHeightDomainLink",
                j: Mm,
                H: "lv"
            }, {
                key: "domainLinkAboveDescription",
                j: F,
                H: "va"
            }, {
                key: "adRequestUrlParams",
                j: Gm
            }, {
                key: "waitForAds",
                j: F,
                H: "wa"
            }, {
                key: "heightConstrained",
                j: F,
                H: "hc"
            }, {
                key: "width",
                j: Cm,
                H: "wi",
                K: !0
            }, {
                key: "attributionSpacingBelow",
                j: new ol(0, 40)
            }, {
                key: "siteLinks",
                j: F,
                H: "sl",
                jb: !0
            }, {
                key: "sellerRatings",
                j: F,
                H: "sr",
                jb: !0
            }, {
                key: "location",
                j: F,
                H: "lo",
                jb: !0
            }, {
                key: "resultsPageBaseUrl",
                j: Jm
            }, {
                key: "type",
                j: new tm(["ads", "relatedsearch"])
            }, {
                key: "hl",
                j: Gm
            }, {
                key: "columns",
                j: new ol(1,
                    20),
                Ab: 1
            }, {
                key: "columnSpacing",
                j: new ol(2, 100)
            }, {
                key: "horizontalFlow",
                j: F
            }, {
                key: "horizontalAlignment",
                j: new tm(["center", "left", "right"]),
                Ab: "left"
            }, {
                key: "resultsPageQueryParam",
                j: Gm,
                Ab: "query"
            }, {
                key: "sellerColumnWidth",
                j: new ol(130, 200)
            }, {
                key: "callouts",
                j: F,
                H: "co",
                jb: !0
            }, {
                key: "adLayout",
                j: new tm("oneline twoline threeline    sellerfirst".split(" "), 1),
                H: "af"
            },
            Qm
        ]);
        return a
    }

    function Ld() {
        var a = {};
        Wm(a, $m);
        Wm(a, Zm);
        Wm(a, Xm);
        Wm(a, Ym);
        return a
    };

    function an() {
        var a = Jd();
        kl(a, Xk(window.name));
        setTimeout(function() {
            try {
                var b = document.getElementById("response_debug_output");
                if (b) {
                    var c = document.getElementById("adBlock");
                    c && (b.parentNode.removeChild(b), 0 == c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[0]))
                }
            } catch (d) {}
        }, 0)
    }
    window.IS_GOOGLE_AFS_IFRAME_ && (ac() ? window.onload = an : an());

    function bn() {}
    bn.prototype.gc = m(null);
    bn.prototype.Af = m(!1);

    function cn(a, b) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return Qe(b || window).round()
        } catch (c) {
            return new Zd(-12245933, -12245933)
        }
    };

    function dn() {
        this.Cc = void 0
    }
    dn.prototype.Lf = function(a) {
        var b = [];
        en(this, a, b);
        return b.join("")
    };

    function en(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (v(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", g = 0; g < b; g++) c.push(e), e = d[g], en(a, a.Cc ? a.Cc.call(d, String(g), e) : e, c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    g = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(g), fn(d, c), c.push(":"), en(a, a.Cc ? a.Cc.call(b, d, e) : e, c), g = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    fn(b,
                        c);
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
    var gn = {
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
        hn = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function fn(a, b) {
        b.push('"', a.replace(hn, function(c) {
            var d = gn[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), gn[c] = d);
            return d
        }), '"')
    };

    function X(a, b, c, d, e, g, h, k) {
        this.ba = a;
        this.Ua = b;
        this.za = this.ya = this.xa = 0;
        this.options = {};
        this.container = null;
        this.Pb = d;
        this.qf = !1;
        this.Yd = "0";
        this.Ca = k || [];
        this.Bf = e || null;
        this.Hb = this.rc = !1;
        this.sa = oc();
        this.Qb = this.ua = this.ra = this.Rf = "";
        this.oc = this.aa = !1;
        this.lf = "";
        this.Vb = new gc("");
        this.Bd(c, g, h, k)
    }
    t = X.prototype;
    t.$c = function(a) {
        if (this.aa) return "n0";
        var b = this.ya,
            c = this.xa,
            d = this.za;
        null != a && (b += "minTop" in a ? a.minTop : 0, c += "maxTop" in a ? a.maxTop : 0, d += "rhs" in a ? a.rhs : 0);
        if (c && b > c) throw yc("Cannot request more minTop ads than maxTop.");
        return (0 < d ? "n" + d : "") + (0 < c ? "p" + c : "") + (0 < b ? "a" + b : "")
    };
    t.ed = function(a, b) {
        a = this.ia(a);
        b && 0 < b.length && (b.splice(0, 0, a), a = b.join("|"));
        return a
    };
    t.ia = function(a) {
        this.za = a.number || 0;
        this.ya = a.minTop;
        this.xa = a.maxTop;
        this.za || this.ya || this.xa || (this.za = 2);
        if (this.za && (this.xa || this.ya)) throw yc("Cannot request standard and top ads in the same ad block.");
        if (this.aa && 0 != a.slaveNumber && !a.firstAdBlock && (this.xa || this.ya)) throw yc("Only the first ad block can have top ads.");
        var b;
        this.xa || this.ya ? b = "p" : this.za && (b = "n");
        return "" + b + (this.xa || this.ya || this.za || 0)
    };
    t.Dc = function(a) {
        if (/^pub-.*/.test(a.pubId) || "gcsc" in a) a.siteLinks = 0 != a.siteLinks, a.sellerRatings = 0 != a.sellerRatings;
        return a = jn(a)
    };
    t.Rb = f();
    t.He = function(a, b, c) {
        var d = {};
        a.settingsId && !a.styleId && (a.styleId = a.settingsId);
        a.styleId && delete a.settingsId;
        var e = "partner-" + a.pubId;
        var g = vk(e);
        0 != g ? e = g : (g = pa.top, e = uk(g, "googlefcInactive") ? 4 : e && uk(g, "googlefcPA-" + e) ? 2 : uk(g, "googlefcNPA") ? 3 : 0);
        if ((pa.googlefc || uk(pa.top, "googlefcPresent")) && 4 != e || 0 != e) d.fcsa = e;
        "plas" == a.type && a.styleId && (this.Ua.width = 1, this.Ua.height = 1);
        a.lines && a.adLayout && delete a.lines;
        for (var h in this.Ua)
            if (this.Ua.hasOwnProperty(h))
                if (2 != this.Ua[h] || ("query" != h || null !=
                        a[h] && "" != a[h]) && ("query" == h || a[h])) "undefined" != typeof a[h] && null != a[h] && (d[h] = a[h]);
                else throw yc("Missing option '" + h + "'.");
        this.aa = "m" != a.role;
        if (!this.aa) {
            a: {
                h = window.location.href;e = h.indexOf("#");h = 0 > e ? h : h.substr(0, e);
                if ((h = h.match(/[?&]rsToken=([^&]*)/)) && h[1]) try {
                    var k = decodeURIComponent(h[1]);
                    break a
                } catch (l) {}
                k = null
            }
            k && (d.afdToken = k)
        }
        d.adLoadedCallback = a.adLoadedCallback || a.callback || null;
        d.oe = d.oe || "UTF-8";
        d.ie = d.ie || "UTF-8";
        d.number = kn(d.number);
        d.minTop = kn(d.minTop);
        d.maxTop = kn(d.maxTop);
        d.fexp = (d.fexp ? d.fexp + "," : "") + (d.gcsc ? "20606" : "21404");
        k = parseInt(window._googCsaX, 10) || 0;
        0 < k && k < ln.length && (d.fexp += "," + ln[k]);
        window._googCsaFetchExpIds ? (k = window._googCsaExpIds) && (d.fexp += "," + k) : (k = parseInt(window._googCsaExp, 10) || 0, 0 < k && (d.fexp += "," + k));
        void 0 != d.forceEx && ("MostLaunches" === d.forceEx ? (d.e = "MostLaunches", delete d.forceEx) : d.e || (d.e = "OnlyForcedExperiments"));
        d.gcsc && "top" == a.position && (d.maxTop = a.number, d.number = null);
        d.format = this.aa ? this.ia(d) : this.ed(d, b);
        this.lf = d.format;
        d.ads =
            this.$c(c);
        d.nocache = [Math.floor(1E3 * Math.random()), (new Date).getTime()].join("");
        d.num = "0";
        d.output = this.Pb.xd();
        this.Pb.Af() ? (d.domainName || (d.domainName = window.document.domain), d.domainName = d.domainName.substring(0, 80)) : "googleads.g.doubleclick.net" != window.document.domain && (d.domainName = "");
        "googleads.g.doubleclick.net" != window.document.domain && d.radlinkQueryId && (d.radlinkQueryId = "");
        d.gcsc && (d.source = "gcsc");
        d.v = Md(d) ? "4" : "3";
        "string" !== typeof d.pubId && (d.pubId = "" + d.pubId);
        0 == d.pubId.indexOf("partner-") &&
            (d.pubId = d.pubId.substring(8));
        d = this.Dc(d);
        !d.titleBold || !0 !== d.titleBold && 1 != d.titleBold ? d.titleBold && delete d.titleBold : d.titleBold = 1;
        this.Rb(d);
        return d
    };
    t.Xd = function(a) {
        var b = [],
            c;
        for (c in a) a.hasOwnProperty(c) && c in this.ba && this.ba[c].H && b.push(mn(a[c], this.ba[c]));
        return b.join("")
    };
    t.wb = function(a, b) {
        var c = [],
            d;
        for (d in a) !(a.hasOwnProperty(d) && d in this.ba && this.ba[d].H) || d in b && b[d] == a[d] || c.push(mn(a[d], this.ba[d]));
        return c.join("")
    };
    t.jd = function(a, b, c) {
        if (0 == b.length) return this.wb(a, {}) + "-";
        c.pubId = a.pubId;
        c = this.Dc(c);
        var d = this.Xd(c),
            e = [];
        e.push(this.wb(a, c));
        for (var g = 0; a = b[g]; g++) a.options.slaveNumber && 0 != a.options.slaveNumber && e.push(this.wb(a.options, c));
        return [d, e.join("-")].join("-")
    };
    t.dd = function(a, b) {
        var c = /^[A-Za-z]+[\w\-:\.]*$/,
            d = [];
        this.oc || (a = a.container, d.push(c.test(a) ? a : ""));
        b = u(b);
        for (a = b.next(); !a.done; a = b.next()) a = a.value, 2 != a.options.type && 5 != a.options.type && (a = a.options.container, d.push(c.test(a) ? a : ""));
        return d.join("|")
    };
    t.kd = function(a) {
        var b = this.Pb.ud();
        this.Nc(a, b);
        var c = 2 == window.googleAltLoader || 4 == window.googleAltLoader;
        3 == window.googleAltLoader ? x(b, "bsl", 8) : 4 == window.googleAltLoader ? x(b, "bsl", 10) : 15 == window.googleAltLoader ? x(b, "bsl", 2) : c && x(b, "bsl", 6);
        if (!this.aa) {
            var d = void 0 === d ? window : d;
            var e = void 0 === e ? document : e;
            var g = void 0 === g ? new Date : g;
            c = d;
            c = void 0 === c ? kk : c;
            try {
                var h = c.history.length
            } catch (n) {
                h = 0
            }
            x(b, "u_his", h);
            x(b, "u_tz", -g.getTimezoneOffset());
            x(b, "dt", g.getTime());
            x(b, "u_w", d.screen.width);
            x(b,
                "u_h", d.screen.height);
            g = cn(!0, d);
            x(b, "biw", g.width);
            x(b, "bih", g.height);
            d.top != d && (g = cn(!1, d), x(b, "isw", g.width), x(b, "ish", g.height));
            e.body ? (g = !d.scrollY && "CSS1Compat" != e.compatMode, e = new Zd(g ? e.body.scrollWidth : e.body.offsetWidth, g ? e.body.scrollHeight : e.body.offsetHeight)) : e = new Zd(-1, -1);
            x(b, "psw", e.width);
            x(b, "psh", e.height);
            if (d.top == d) var k = 0;
            else {
                d = d.top;
                try {
                    var l;
                    if (l = !!d && null != d.location.href) b: {
                        try {
                            ve(d.foo);
                            l = !0;
                            break b
                        } catch (n) {}
                        l = !1
                    }
                    k = l
                } catch (n) {
                    k = !1
                }
                k = k ? 1 : 2
            }
            x(b, "frm", k)
        }
        x(b, "uio",
            this.Rf);
        x(b, "cont", this.dd(this.options, this.Ca));
        x(b, "jsv", uc().substring(0, 5));
        x(b, "rurl", window.location.href, !0);
        x(b, nn.referer, document.referrer, !0);
        a.referrer && x(b, "optref", a.referrer, !0);
        return b
    };
    t.Nc = function(a, b) {
        for (var c in a)
            if (a.hasOwnProperty(c) && nn.hasOwnProperty(c)) {
                var d = nn[c],
                    e = a[c];
                "clkwd" == d && (e = "t");
                "type" == d && (e = Fd[a[c]]);
                "domainSessionToken" == c && "afdToken" in a && d == nn.afdToken || x(b, d, e)
            }
        c = [];
        a.siteLinks && c.push("as1");
        a.location && c.push("l1");
        a.sellerRatings && c.push("sr1");
        0 < c.length && x(b, "adext", c.join(","))
    };
    t.W = function() {
        return "s" == this.options.role ? ["slave", this.options.slaveNumber, this.options.masterNumber].join("-") : ["master", this.options.masterNumber].join("-")
    };
    t.wd = function(a, b, c, d) {
        var e = {};
        e.name = b;
        a = c.concat([a]);
        b = d.concat([b]);
        for (d = 0; d < a.length; d++) {
            c = b[d];
            var g = void 0,
                h = a[d],
                k = this.ba,
                l = {};
            for (g in k)
                if (k.hasOwnProperty(g) && !k[g].jb) {
                    var n = h[g],
                        p = k[g].Ab;
                    "undefined" == typeof n || "container" == g && "object" == typeof n ? "undefined" != typeof p && (l[g] = p) : l[g] = n
                }
            e[c] = l
        }
        return (new dn).Lf(e)
    };
    t.td = function(a, b, c, d) {
        document.getElementById(a) && xc.log("iframe: " + a + ". pubId: " + d + ". ", "dI");
        d = document.createElement("iframe");
        d.frameBorder = "0";
        d.marginWidth = "0";
        d.marginHeight = "0";
        d.vspace = 0;
        d.hspace = 0;
        d.setAttribute("allowTransparency", "true");
        d.scrolling = "no";
        d.style.visibility = "hidden";
        d.width = "100%";
        d.style.height = "0px";
        d.name = b;
        d.id = a;
        d.src = c;
        this.container.style.fontWeight = "normal";
        this.container.style.textAlign = "center";
        Rb(this.container, Pb);
        this.container.appendChild(d);
        try {
            d.contentWindow.name =
                b
        } catch (e) {}
        return d
    };
    t.Yc = function(a) {
        var b = window.innerWidth < window.innerHeight;
        if (this.Hb && !b || !this.Hb && b) {
            this.Hb = b;
            try {
                a.contentWindow.postMessage("orientation:" + (this.Hb ? "portrait" : "landscape"), "*")
            } catch (c) {}
        }
    };
    t.Gb = function(a, b, c, d) {
        var e = this,
            g = this.td(a, b, c, d);
        this.aa || (this.Cd(g), "postMessage" in window && (this.Hb = window.innerWidth < window.innerHeight, window.addEventListener("resize", function() {
            return e.Yc(g)
        })))
    };
    t.$d = function() {
        var a = {},
            b;
        for (b in this.options) this.options.hasOwnProperty(b) && (a[b] = this.options[b]);
        a.ads = "n0";
        a[""] = "";
        a.slaveNumber = "0";
        a.role = "s";
        a = on(this.ba, this.Ua, a);
        Y[a.W()] = a;
        this.Ca.splice(0, 0, a);
        a = document.createElement("div");
        document.body.appendChild(a);
        a.style.height = "0px";
        a.style.visibility = "hidden";
        this.options.container = a;
        this.oc = this.options.preload = !0
    };
    t.Bd = function(a, b, c, d) {
        this.options = this.He(a, b, c, d);
        this.sa.bc = this.options.pubId;
        this.sa.ye = this.options.styleId || "";
        this.ec() || this.aa || !document.body || this.$d();
        this.Rf = null == this.Bf ? "" : this.jd(this.options, this.Ca, this.Bf);
        this.Vb = (this.aa ? this.Pb.gc() : null) || this.kd(this.options);
        this.ua = this.ra = this.W();
        hc(this.Vb, this.ra);
        this.Qb = ic(this.Vb);
        if (!this.aa) {
            a = [];
            b = [];
            for (c = 0; c < this.Ca.length; c++) a.push(this.Ca[c].W()), b.push(this.Ca[c].options);
            Md(this.options) && (this.options.adRequestUrlParams =
                this.Qb.substr(this.Qb.indexOf("?") + 1));
            this.ua = this.wd(this.options, this.ra, b, a)
        }
    };
    t.cc = function() {
        var a = this,
            b = zc(function() {
                if (!a.ec()) return !1;
                if (!a.Fd()) {
                    var e = new nc("containerNotVisible");
                    if (jc) {
                        var g = a.options.pubId,
                            h = pc(e);
                        x(h, "pbt", "ui");
                        x(h, "action", g);
                        e.Ob(ic(h))
                    }
                }
                a.ve(a.options.container);
                if (a.options.width && !a.oc) {
                    if ("plas" == a.options.type && void 0 != a.ba.width && null == a.ba.width.j.M(a.options.width)) throw yc("width " + a.options.width + " is invalid.");
                    "auto" == a.options.width ? a.container.style.width = "100%" : pn(a.options.width) && (a.container.style.width = a.options.width)
                }
                a.Od();
                return !0
            }, "cI_mA");
        if (!b()) var c = Date.now(),
            d = window.setInterval(function() {
                if (b()) clearInterval(d);
                else if (6E4 < Date.now() - c) throw clearInterval(d), yc('container "' + a.options.container + '" does not exist.');
            }, 5)
    };
    t.Od = function() {
        if (this.Vb) {
            var a = this.Pb.gc();
            if (a && ic(a) && Md(this.options)) {
                !0 === this.options.debug && x(a, "debug", !0);
                hc(a, this.ra);
                var b = ic(a);
                if (this.aa) this.Gb(this.ra, this.ua, b, this.options.pubId);
                else {
                    var c = this;
                    window.google.renderCsaAds = function() {
                        c.Gb(c.ra, c.ua, b, c.options.pubId)
                    };
                    document.write('<script src="' + this.Qb + '">\x3c/script>')
                }
            } else this.Gb(this.ra, this.ua, this.Qb, this.options.pubId)
        }
    };
    t.Hc = function(a) {
        var b = this;
        if ("0" != this.Yd && this.qf) {
            var c = this.W(),
                d = qn(c, !0);
            setTimeout(function() {
                return b.re(d, c, a)
            }, 1500)
        }
    };
    t.vc = function(a, b, c, d) {
        this.Yd = d;
        this.Hc(a)
    };
    t.Cd = function(a) {
        var b = this,
            c = "" + this.options.masterNumber,
            d = new Jc(c, a);
        Lc(d, "aD." + c, Oc.G, rn);
        Lc(d, "qi", B.G, function(g, h, k, l) {
            b.sa.Nb = l || ""
        });
        Lc(d, "eawp", B.G);
        Lc(d, "it", B.G, function(g, h, k, l) {
            a.title = l
        });
        var e = null;
        this.oc || (e = this.W(), Lc(d, e + ".hA", Oc.G, sn), Lc(d, e + ".h", Pc.G, tn), Lc(d, e + ".w", Pc.G, un), Lc(d, e + ".aC", Pc.G), Lc(d, e + "spb", B.G, ya(this.vc, this)));
        Lc(d, "v." + c, B.G, vn);
        for (c = 0; c < this.Ca.length; c++) e = this.Ca[c].W(), Lc(d, e + ".hA", Oc.G, sn), Lc(d, e + ".h", Pc.G, tn), Lc(d, e + ".aC", Pc.G), Lc(d, e + "spb", B.G, ya(this.vc,
            this))
    };
    t.Ud = function() {
        if (!this.rc) {
            this.rc = !0;
            var a = this.options.container,
                b = this.options.noAdLoadedCallback;
            if (b) try {
                b(a, !1, void 0)
            } catch (c) {}
            if (b = this.options.adLoadedCallback) try {
                b(a, !1, void 0)
            } catch (c) {}
        }
    };
    t.we = function(a, b) {
        var c = fc(dc),
            d = fc(ec);
        /Mobile/i.test($b) && (0 < c || 0 < d) ? (a.style.width = "1px", a.style.minWidth = "100%", a.removeAttribute("width")) : a.width = "100%";
        a.style.visibility = 0 < b ? "visible" : "hidden";
        a.style.height = b + "px";
        this.container.style.height = b + "px"
    };
    t.ue = function(a) {
        this.container.style.width = a + "px";
        var b = fc(dc),
            c = fc(ec);
        if (0 < b || 0 < c)
            if (b = this.W(), b = qn(b, !0)) b.style.width = a + "px", b.removeAttribute("width")
    };
    t.re = function(a, b, c) {
        var d = this,
            e = Ze(a),
            g = [e.y, e.x, a.offsetHeight, a.offsetWidth, b, Kc(c, "eawp"), uc(), this.Yd];
        this.sa.Ni.apply(this.sa, g);
        var h = null;
        h = setInterval(function() {
            var k = new Ve(0, Infinity, Infinity, 0);
            for (var l = Me(a), n = l.S.body, p = l.S.documentElement, r = Re(l.S), q = a; q = Ye(q);)
                if (!(ze && 0 == q.clientWidth || Ce && 0 == q.clientHeight && q == n) && q != n && q != p && "visible" != We(q, "overflow")) {
                    var w = Ze(q),
                        z = new Le(q.clientLeft, q.clientTop);
                    w.x += z.x;
                    w.y += z.y;
                    k.top = Math.max(k.top, w.y);
                    k.right = Math.min(k.right, w.x + q.clientWidth);
                    k.bottom = Math.min(k.bottom, w.y + q.clientHeight);
                    k.left = Math.max(k.left, w.x)
                }
            n = r.scrollLeft;
            r = r.scrollTop;
            k.left = Math.max(k.left, n);
            k.top = Math.max(k.top, r);
            l = l.S;
            l = Qe(l.parentWindow || l.defaultView || window);
            k.right = Math.min(k.right, n + l.width);
            k.bottom = Math.min(k.bottom, r + l.height);
            k = 0 <= k.top && 0 <= k.left && k.bottom > k.top && k.right > k.left ? k : null;
            r = new Le(a.offsetLeft, a.offsetTop);
            l = $e(a);
            r = new Ve(r.y, r.x + l.width, r.y + l.height, r.x);
            l = -(.3 * l.height);
            k.left <= r.right + l && r.left <= k.right + l && k.top <= r.bottom + l && r.top <=
                k.bottom + l && (d.sa.Oi.apply(d.sa, g), clearInterval(h))
        }, 500)
    };
    t.se = function() {
        if (kc) {
            var a = "",
                b;
            try {
                var c = Vk(this.options, this.ba)
            } catch (k) {
                return
            }
            for (var d = function(k) {
                    return c[k].toString().replace(/\|/g, "&#124;")
                }, e = c && c.hasOwnProperty("adIconUrl") && c.hasOwnProperty("adIconWidth") && c.hasOwnProperty("adIconHeight"), g = 0; b = wn[g]; g++) {
                if (c && c.hasOwnProperty(b)) switch (b) {
                    case "adIconHeight":
                    case "adIconSpacingAbove":
                    case "adIconSpacingBefore":
                    case "adIconWidth":
                    case "adIconUrl":
                        if (!e) break;
                        a += d(b);
                        break;
                    case "adIconSpacingAfter":
                        if (!e) break;
                        if (4 == c.adIconSpacingAfter) break;
                        a += d(b);
                        break;
                    case "adIconSpacingBelow":
                        if (!e) break;
                        if (0 == c.adIconSpacingBelow) break;
                        a += d(b);
                        break;
                    case "adBorderSelections":
                        if (!c.hasOwnProperty("colorAdBorder")) break;
                        a += xn(c, "adBorderSelections");
                        break;
                    case "borderSelections":
                        if (!c.hasOwnProperty("colorBorder")) break;
                        a += xn(c, "borderSelections");
                        break;
                    case "adLayout":
                        if ("threeline" == c.adLayout) break;
                        a += d(b);
                        break;
                    case "colorBackground":
                        var h = c.colorBackground;
                        if ("#ffff" == h || "#ffffff" == h || "fff" == h || "ffffff" == h || "white" == h) break;
                        a += d(b);
                        break;
                    case "domainLinkAboveDescription":
                        if (1 ==
                            c.domainLinkAboveDescription) break;
                        a += d(b);
                        break;
                    case "lines":
                        if (3 == c.lines) break;
                        a += d(b);
                        break;
                    case "heightConstrained":
                    case "noTitleUnderline":
                    case "rolloverLinkBold":
                    case "rolloverLinkUnderline":
                        if (0 == c[b]) break;
                        a += d(b);
                        break;
                    case "position":
                    case "colorKeyword":
                        break;
                    default:
                        a += d(b)
                }
                a += "|"
            }
            rc(this.sa, this.W(), a)
        }
    };

    function xn(a, b) {
        for (var c = [], d = u(["left", "right", "top", "bottom"]), e = d.next(); !e.done; e = d.next()) e = e.value, a[b].toString().includes(e) && c.push(e);
        return 4 == c.length ? "" : c.join()
    }
    t.le = function(a, b) {
        var c = this.W(),
            d = qn(c, !0);
        if (d && (this.we(d, a), !this.rc && 0 < a && (this.qf = this.rc = !0, this.Hc(b), this.se(), a = Kc(b, c + ".eV"), null == a && (a = void 0), b = this.options.adLoadedCallback))) {
            c = this.options.container;
            try {
                b(c, !0, a)
            } catch (e) {}
        }
    };
    t.ec = function() {
        var a = this.options.container;
        return "string" == typeof a ? (a = document.getElementById(a), !!a) : "string" == typeof a.innerHTML ? !0 : !1
    };
    t.Fd = function() {
        var a = this.options.container;
        "string" == typeof a && (a = document.getElementById(a));
        return !!a.offsetParent
    };
    t.ve = function(a) {
        this.container = "string" == typeof a ? document.getElementById(a) : a
    };
    var mn = zc(function(a, b) {
        var c = b.H;
        a = b.j.T(a);
        return null != a && pn(a) ? yn.hasOwnProperty(c) ? a ? c.charAt(0) + c.charAt(1).toUpperCase() : c : c + a : ""
    }, "gPFO");

    function kn(a) {
        try {
            var b = parseInt(a, 10);
            return !isNaN(b) && 0 <= b ? b : 0
        } catch (c) {
            return 0
        }
    }

    function pn(a) {
        a = parseInt(a, 10);
        return !isNaN(a) && 0 <= a
    }
    var jn = zc(function(a) {
            for (var b = ["fontSizeTitle", "fontSizeDescription", "fontSizeDomainLink", "fontSizeAttribution"], c = 0; c < b.length; c++) {
                var d = b[c];
                if (a[d]) {
                    var e = "string" == typeof a[d] ? parseInt(a[d].replace("px", ""), 10) : a[d];
                    e = e > Ad ? Ad : e;
                    e = 8 > e ? 8 : e;
                    a[d] = e + "px"
                }
            }
            return a
        }, "vFS"),
        ln = ["", "17300000", "17300001", "17300003", "17300002"],
        wn = "adBorderSelections adIconHeight adIconSpacingAbove adIconSpacingAfter adIconSpacingBefore adIconSpacingBelow adIconUrl adIconWidth adLayout adsLabel attributionHref attributionSpacingBelow attributionText borderSelections callouts colorAdBackground colorAdBorder colorAdSeparator colorAnnotation colorAttribution colorBackground colorBorder colorDomainLink colorKeyword colorLocation colorText colorTitleLink columns columnSpacing detailedAttribution domainLinkAboveDescription domTemplate fontFamily fontFamilyAttribution fontSizeAnnotation fontSizeAttribution fontSizeDescription fontSizeDomainLink fontSizeLocation fontSizeTitle heightConstrained horizontalAlignment horizontalFlow lineHeightDescription lineHeightDomainLink lineHeightTitle lines linkTarget location maxTermLength noTitleUnderline position rightHandAttribution rolloverAdBackgroundColor rolloverLinkBackgroundColor rolloverLinkBold rolloverLinkColor rolloverLinkUnderline sellerColumnWidth sellerRatings siteLinks titleBold verticalSpacing width container attributionUppercase type styleId".split(" "),
        Z = {},
        nn = (Z.query = "q", Z.type = "type", Z.format = "format", Z.ads = "ad", Z.pubId = "client", Z.channel = "channel", Z.adtest = "adtest", Z.hl = "hl", Z.adsafe = "adsafe", Z.adPage = "adpage", Z.adpage = "adpage", Z.oe = "oe", Z.ie = "ie", Z.output = "output", Z.role = "r", Z.referer = "referer", Z.rurl = "rurl", Z.v = "v", Z.source = "source", Z.safe = "safe", Z.num = "num", Z.fexp = "fexp", Z.nocache = "nocache", Z.cx = "cx", Z.cref = "cref", Z.bgresponse = "bgresponse", Z.sbsignals = "sbsignals", Z.gcse_nc = "gcse_nc", Z.queryLink = "qry_lnk", Z.queryContext = "qry_ctxt", Z.allwcallad =
            "allwcallad", Z.adstyle = "adstyle", Z.numRepeated = "adrep", Z.gl = "gl", Z.uuld = "uuld", Z.gcs = "gcs", Z.gr = "gr", Z.gm = "gm", Z.glp = "glp", Z.preload = "preload", Z.forceEx = "expid", Z.e = "e", Z.expflags = "expflags", Z.userAgent = "useragent", Z.fcap = "fcap", Z.afdToken = "afdt", Z.radlinkQueryId = "rqid", Z.colorKeyword = "clkwd", Z.deb = "deb", Z.uideb = "uideb", Z.debug = "debug", Z.fakeads = "fakeads", Z.jsSrc = "csa_js_src", Z.domainName = "domain_name", Z.maxTermLength = "max_radlink_len", Z.slotName = "slotname", Z.theme = "theme", Z.textColorPalette = "tcpal",
            Z.merchantFilter = "cmf", Z.placement = "plm", Z.inlinePosition = "ilp", Z.styleId = "psid", Z.brand = "brand", Z.mpn = "mpn", Z.priceCurrency = "pfcrncy", Z.priceMin = "pfmin", Z.priceMax = "pfmax", Z.pparestricts = "pparestricts", Z.ms = "ms", Z.rowkeyV2 = "rowkeyV2", Z.source_ip = "source_ip", Z.excludedIds = "sku", Z.personalizedAds = "pcsa", Z.fcsa = "fcsa", Z.cont = "cont", Z.gpcId = "gpcId", Z),
        yn = {
            hc: 1
        };
    t = X.prototype;
    t.$c = y(X.prototype.$c, "cAA");
    t.ed = y(X.prototype.ed, "cFAM");
    t.ia = y(X.prototype.ia, "cFA");
    t.Dc = y(X.prototype.Dc, "sDIUP");
    t.He = y(X.prototype.He, "vASDO");
    t.Xd = y(X.prototype.Xd, "oTPP");
    t.wb = y(X.prototype.wb, "oTBP");
    t.dd = y(X.prototype.dd, "cCP");
    t.jd = y(X.prototype.jd, "cUIP");
    t.kd = y(X.prototype.kd, "cU");
    t.Nc = y(X.prototype.Nc, "aOTU");
    t.W = y(X.prototype.W, "gFN");
    t.wd = y(X.prototype.wd, "gFNAOAJ");
    t.td = y(X.prototype.td, "gAI");
    t.Yc = y(X.prototype.Yc, "cO");
    t.Gb = y(X.prototype.Gb, "iAI");
    t.$d = y(X.prototype.$d, "pM");
    t.Bd = y(X.prototype.Bd, "i");
    t.cc = y(X.prototype.cc, "cI");
    t.Od = y(X.prototype.Od, "mA");
    t.Hc = y(X.prototype.Hc, "tSP");
    t.vc = y(X.prototype.vc, "oSPE");
    t.Cd = y(X.prototype.Cd, "iFS");
    t.Ud = y(X.prototype.Ud, "nNA");
    t.we = y(X.prototype.we, "sIH");
    t.ue = y(X.prototype.ue, "sCW");
    t.re = y(X.prototype.re, "sP");
    t.se = y(X.prototype.se, "sUOP");
    t.le = y(X.prototype.le, "rIS");
    t.ec = y(X.prototype.ec, "dCE");
    t.Fd = y(X.prototype.Fd, "iCR");
    t.ve = y(X.prototype.ve, "sC");

    function zn() {}
    ka(zn, bn);
    zn.prototype.ud = function() {
        var a = Zb().replace("www.google", "cse.google");
        return new gc(a + "/cse_v2/ads")
    };
    zn.prototype.xd = m("uds_ads_only");

    function An() {}
    ka(An, bn);
    An.prototype.ud = function() {
        return new gc(Zb() + "/afs/ads")
    };
    An.prototype.gc = function() {
        return new gc(Zb() + "/afs/ads/i/iframe.html")
    };
    An.prototype.xd = m("uds_ads_only");
    var Bn = {
        key: "textColorPalette",
        j: new nl(qm, 5)
    };

    function Cn(a, b, c, d, e, g, h, k) {
        X.call(this, a, b, c, d, e, g, h, k)
    }
    ka(Cn, X);
    Cn.prototype.Rb = function(a) {
        if (a.textColorPalette) {
            var b = a.textColorPalette;
            v(b) || (b = [b]);
            b = Id(Bn, b);
            for (var c = 0; c < b.length; c++) try {
                var d = b[c];
                b[c] = ql("#" == d.charAt(0) ? d : "#" + d).substr(1)
            } catch (e) {}
            a.textColorPalette = b.join(",")
        }
        Pd(a)
    };
    Cn.prototype.ia = function(a) {
        return a.number ? "n" + a.number : ""
    };

    function Dn(a, b, c, d, e, g, h, k) {
        X.call(this, a, b, c, d, e, g, h, k)
    }
    ka(Dn, X);
    Dn.prototype.Rb = function(a) {
        Pd(a);
        a = a.excludedIds;
        if (Array.isArray(a))
            for (var b = 0; b < a.length; b++) a[b] = encodeURIComponent(a[b])
    };
    Dn.prototype.ia = m("");
    Dn.prototype.Rb = y(Dn.prototype.Rb, "vAURSO_PPA");

    function En(a, b, c, d, e, g, h, k) {
        X.call(this, a, b, c, d, e, g, h, k)
    }
    ka(En, X);
    En.prototype.ia = function(a) {
        var b = a.relatedSearches;
        b || 0 === b || (b = a.number) || 0 === b || (b = 10);
        return "r" + b
    };
    En.prototype.ia = y(En.prototype.ia, "cFA_RS");

    function Fn() {}
    ka(Fn, bn);
    Fn.prototype.ud = function() {
        var a = (window._googCsaAlwaysHttps ? "https:" : "") + "//www.google.com";
        return new gc((window.gwsBase_ || a) + "/dp/ads?")
    };
    Fn.prototype.gc = function() {
        return new gc(Zb() + "/afs/ads/i/iframe.html")
    };
    Fn.prototype.xd = m("afd_ads");
    Fn.prototype.Af = m(!0);
    var on = zc(function(a, b, c, d, e, g, h) {
        c.relatedSearches ? c.type = "relatedsearch" : c.type || (c.type = "ads");
        if ("relatedsearch" == c.type) return new En(a, b, c, new Fn, d, e, g, h);
        if ("ads" == c.type) return new X(a, b, c, c.gcsc ? new zn : new An, d, e, g, h);
        if ("plas" == c.type) return new Cn(a, b, c, new An, d, e, g, h);
        if ("ppas" == c.type) return new Dn(a, b, c, new An, d, e, g, h);
        throw yc("invalid block type: " + c.type);
    }, "nAB");

    function Gn() {
        this.options = {}
    }

    function Hn() {
        this.Wd = {};
        this.Je = [];
        this.Jf = []
    };

    function In(a) {
        if (2 > a.length) throw yc("No options specified.");
        return 1 < a.length && a[1] instanceof Array ? [a[0]].concat(a[1]) : Array.prototype.slice.call(a, 0)
    }
    In = y(In, "ppata");

    function Jn(a, b, c, d) {
        d = void 0 === d ? "" : d;
        c = In(c);
        var e = $b.toLowerCase();
        if (-1 == e.indexOf("series60") && -1 == e.indexOf("series 60")) {
            d && (c[0].type = d);
            d = new Hn;
            e = c[0];
            for (var g, h = 1; h < c.length; h++) {
                g = new Gn;
                var k = void 0,
                    l = void 0,
                    n = g,
                    p = c[h];
                for (l in p) p.hasOwnProperty(l) && (n.options[l] = p[l]);
                for (k in e) e.hasOwnProperty(k) && (n.options[k] = e[k]);
                g.options.relatedSearches ? d.Jf.push(g) : d.Je.push(g)
            }
            for (var r in e) e.hasOwnProperty(r) && (d.Wd[r] = e[r]);
            Kn(a, b, d.Wd, d.Je, {});
            Kn(a, b, d.Wd, d.Jf)
        }
    }
    Jn = y(Jn, "aasi");

    function Kn(a, b, c, d) {
        if (0 != d.length) {
            var e = [],
                g = [],
                h = {
                    maxTop: 0,
                    minTop: 0,
                    rhs: 0
                };
            Ln++;
            for (var k = d.length - 1; 0 <= k; k--) {
                var l = d[k].options;
                0 == k ? (l.role = "m", l.masterNumber = Ln, l = on(a, b, l, c, e, h, g)) : (l.role = "s", l.slaveNumber = k, l.masterNumber = Ln, l = on(a, b, l), e.unshift(l.lf), g.unshift(l), h.maxTop += l.xa, h.minTop += l.ya, h.rhs += l.za);
                Y[l.W()] = l
            }
            a = "master-" + Ln;
            b = new RegExp("slave-[0-9]+-" + Ln);
            for (var n in Y) b.test(n) && (Y[n].ua += "|" + Y[a].ua);
            for (d = d.length - 1; 0 <= d; d--) n = ["slave", d, Ln].join("-"), Y.hasOwnProperty(n) &&
                Y[n].cc();
            Y.hasOwnProperty(a) ? Y[a].cc() : xc.log("Missing ad block for " + a, "cAFOMM")
        }
    }
    Kn = y(Kn, "cAFO");

    function qn(a, b) {
        var c = document.getElementById(a);
        if (!c && b) {
            b = [];
            try {
                for (var d = document.getElementsByTagName("iframe"), e = 0; e < d.length; e++) {
                    var g = d[e];
                    try {
                        b.push(["N=" + g.name + "ID=" + g.id])
                    } catch (h) {}
                }
            } catch (h) {}
            xc.log("iframe name: " + a + ". existing frames: " + b.join(",") + ". num masters: " + Ln, "gAFBN2")
        }
        return c
    }
    qn = y(qn, "gAFBN");

    function sn(a, b, c, d) {
        d || Y[c.split(".")[0]].Ud()
    }
    sn = y(sn, "hAC");

    function tn(a, b, c, d) {
        b = Y[c.split(".")[0]];
        b.le(d, a);
        if (b.options && b.options.iframeHeightCallback) try {
            b.options.iframeHeightCallback(0 < d ? d : 0)
        } catch (e) {}
    }
    tn = y(tn, "hC");

    function un(a, b, c, d) {
        a = Y[c.split(".")[0]];
        window.getComputedStyle && a instanceof Cn && (b = parseInt(window.getComputedStyle(a.container || document.body).width, 10), d == b && /Mobile/i.test($b) && d--);
        a.ue(d)
    }
    un = y(un, "wC");

    function Mn(a, b) {
        var c = {},
            d;
        for (d in Y)
            if (Y.hasOwnProperty(d)) {
                var e = Y[d];
                e.options && e.options.masterNumber == b && "string" == typeof e.options.container && (c[e.options.container] = a.L[d + ".aC"].value)
            }
        return c
    }
    Mn = y(Mn, "gAC");

    function rn(a, b) {
        var c = Y["master-" + b];
        if (c && c.options && c.options.adsResponseCallback) {
            a = Mn(a, b);
            try {
                c.options.adsResponseCallback(a)
            } catch (d) {}
        }
    }
    rn = y(rn, "aCC");

    function vn(a, b, c, d) {
        if ((a = Y["master-" + b]) && a.options && a.options.visibleUrlsCallback) {
            d = d ? d.split("|") : [];
            try {
                a.options.visibleUrlsCallback(d)
            } catch (e) {}
        }
    }
    vn = y(vn, "vUC");
    var Ln = 0,
        Y = {};
    var Nn = {
        wc: Kd(),
        Wb: Ld()
    };
    var On = {};
    ml(On, [Sm, Rm, Tm, Pm, Um, Qm, {
        key: "width",
        j: new ol(0, 1E4),
        H: "wi"
    }, {
        key: "height",
        j: new ol(0, 1E4),
        H: "he"
    }, {
        key: "disableCarousel",
        j: F,
        H: "dc"
    }, {
        key: "enableInteractive",
        j: F,
        H: "ei"
    }, {
        key: "gpcId",
        j: Gm,
        H: "gi"
    }]);
    var Pn = Object.assign({}, Ym, Xm, {
            query: 2,
            width: 2,
            height: 2,
            promoted: 1,
            adPage: 1,
            adpage: 1,
            theme: 1,
            priceMin: 1,
            priceMax: 1,
            priceCurrency: 1,
            textColorPalette: 1,
            merchantFilter: 1,
            disableCarousel: 1,
            testgl: 1,
            number: 1,
            enableInteractive: 1,
            gpcId: 1
        }),
        Qn = {
            wc: On,
            Wb: Pn,
            Sa: "plas"
        };
    var Rn = {};
    ml(Rn, [Rm, Pm, Qm, {
        key: "inlinePosition",
        j: new ol(0, 1E3)
    }]);
    var Sn = Object.assign({}, Ym, Xm, {
            query: 2,
            styleId: 2,
            placement: 1,
            inlinePosition: 1,
            excludedIds: 1,
            priceMin: 1,
            priceMax: 1,
            priceCurrency: 1,
            pparestricts: 1
        }),
        Tn = {
            wc: Rn,
            Wb: Sn,
            Sa: "ppas"
        };
    var Un = Jn;

    function Vn(a) {
        Un(Nn.wc, Nn.Wb, arguments)
    }
    var Wn = {},
        Xn = (Wn.ads = Nn, Wn.plas = Qn, Wn.ppas = Tn, Wn),
        Zn = zc(function() {
            var a = window._googCsa,
                b = [],
                c = null;
            a && (b = a.q || [], c = a.t);
            Ca("_googCsa", function() {
                Yn(arguments)
            });
            c && (window._googCsa.t = c);
            for (a = 0; a < b.length; a++) Yn(b[a])
        }, "cmps"),
        Yn = zc(function(a) {
            if (a && !(1 > a.length))
                if (Xn.hasOwnProperty(a[0])) {
                    var b = Xn[a[0]];
                    Un(b.wc, b.Wb, 3 == a.length ? [a[1], a[2]] : [a[1], Array.prototype.slice.call(a, 2)], b.Sa)
                } else if ("jsLoadedCallback" == a[0]) try {
                a[1]()
            } catch (c) {}
        }, "cmpe");
    window.IS_GOOGLE_AFS_IFRAME_ || window.google && window.google.ads && window.google.ads.search && window.google.ads.search.Ads || (Ca("google.ads.search.Ads", Vn), Zn());
})();