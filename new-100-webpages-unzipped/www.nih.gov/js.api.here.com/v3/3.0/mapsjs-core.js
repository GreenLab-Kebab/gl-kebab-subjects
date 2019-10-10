(function() {
    var p, aa = [];

    function ba(a) {
        return function() {
            return aa[a].apply(this, arguments)
        }
    }

    function ca(a, b) {
        return aa[a] = b
    }
    var da = da || {},
        fa = this;

    function ga(a) {
        return void 0 !== a
    }

    function ha(a, b, c) {
        a = a.split(".");
        c = c || fa;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) !a.length && ga(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
    }

    function ja(a) {
        a = a.split(".");
        for (var b = fa, c; c = a.shift();)
            if (null != b[c]) b = b[c];
            else return null;
        return b
    }

    function ka() {}

    function ma() {
        throw Error("unimplemented abstract method");
    }

    function oa(a) {
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

    function pa(a) {
        return "array" == oa(a)
    }

    function qa(a) {
        var b = oa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ra(a) {
        return "string" == typeof a
    }

    function sa(a) {
        return "function" == oa(a)
    }

    function ta(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var ua = "closure_uid_" + (1E9 * Math.random() >>> 0),
        va = 0;

    function wa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function xa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
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
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var Aa = Date.now || function() {
        return +new Date
    };

    function r(a, b) {
        ha(a, b, void 0)
    }

    function v(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.u = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Si = function(a, c, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[c].apply(a, g)
        }
    };
    var Ba = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ca(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ba.length; f++) c = Ba[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var w = function() {
        return this
    }();

    function Da(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Da);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    v(Da, Error);
    Da.prototype.name = "CustomError";
    var Ea = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function Fa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Ga = Array.prototype,
        Ha = Ga.indexOf ? function(a, b, c) {
            return Ga.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (ra(a)) return ra(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ia = Ga.forEach ? function(a, b, c) {
            Ga.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = ra(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        };

    function Ka() {
        return Object.create(x, void 0)
    }
    var z = ya,
        La = String;

    function Ma(a) {
        return eval("" + a)
    }
    var Na = w.Object.freeze || function(a) {
        return a
    };

    function Oa(a) {
        for (var b = Object.keys(a), c = b.length, d; c--;) d = a[b[c]], Pa(d) && Oa(d);
        return Na(a)
    }

    function Qa(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var A = Ma(),
        x = Ma(null);

    function Ra(a, b) {
        return La(a).split(b !== A ? b : " ")
    }
    var Sa = "prototype constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function B(a, b, c, d, e) {
        if (!(b = a instanceof b) && c) throw new C(c, d, Ta(e) ? e : a);
        return b
    }

    function Ua(a, b) {
        if (!0 === (B(a, b) && a.constructor === b)) throw new TypeError("Illegal constructor " + Va(b));
    }
    var Pa = ta;
    r("H.lang.isObject", Pa);

    function Wa(a) {
        for (var b in a) return !1;
        return !0
    }
    r("H.lang.isEmptyObject", Wa);

    function Xa(a, b, c, d, e) {
        if (!(b = Ya(a) === b) && c) throw new C(c, d, Ta(e) ? e : a);
        return b
    }

    function Za(a, b, c, d) {
        return Xa(a, "Array", b, c, d)
    }
    r("H.lang.isArray", Za);

    function Ta(a) {
        return a !== A
    }
    r("H.lang.isString", ra);
    var $a = parseFloat,
        D = isNaN;

    function ab(a) {
        return a === +a
    }
    r("H.lang.isNumber", ab);

    function bb(a) {
        return !D(+a)
    }

    function Ya(a) {
        var b = Object[Sa[0]][Sa[6]].call(a).match(/^\[object (\w+)\]$/);
        return b ? b[1] : typeof a
    }

    function Va(a, b, c, d) {
        var e = "",
            f = 2 > arguments.length;
        f && (b = {
            H: w.H
        }, c = "", d = []);
        cb(b, !0, function(b, f) {
            try {
                var k = b[f];
                f = db(b, k);
                var l;
                if (l = !(Pa(k) && k.window === k && k.self === k)) l = !(Pa(k) && 0 < k.nodeType && sa(k.cloneNode));
                if (l && Pa(k)) {
                    if (k === a) return e = c + "." + f, !0;
                    if (0 > d.indexOf(k) && (d.push(k), e = Va(a, k, c + "." + f, d))) return !0
                }
            } catch (m) {}
        });
        f && (e = e ? e.substr(1).replace("." + Sa[0] + ".", "#") : "~" + (sa(a) ? eb(a) + "()" : Ya(a)));
        return e
    }

    function db(a, b) {
        var c = [];
        cb(a, !1, function(a, e) {
            a[e] === b && c.push(e)
        });
        return c.sort(fb)[0]
    }

    function fb(a, b) {
        return b.length - a.length
    }
    var gb = Object[Sa[0]][Sa[2]];

    function cb(a, b, c) {
        var d, e;
        if (a) {
            for (d in a)
                if ((!b || gb.call(a, d)) && c(a, d, !0)) return;
            for (e = Sa.length; e-- && (d = Sa[e], b && !gb.call(a, d) || !c(a, d, !1)););
        }
    }

    function eb(a) {
        return (a = /^\s*function ([^\( ]+)/.exec(a)) ? a[1] : "anonymous"
    }

    function hb(a, b, c) {
        c[b] = "#" + b
    }
    var ib = "[object Undefined]" !== {}.toString.call(void 0);

    function jb(a, b) {
        var c = w.console,
            d;
        !ib && c && c.warn && (d = Va(a) + " is deprecated and will be removed soon. ", b && (d += b), c.warn(d))
    };

    function C(a, b, c) {
        var d = arguments.length,
            e;
        b = 1 < d ? +b : b;
        d = 2 < d ? La(c) : "";
        b !== A && (e = (e = /^.*?\(([^\)]+)/.exec(("" + a).replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, ""))) ? Ra(e[1].replace(/\s+/g, ""), ",") : [], e.forEach(hb), e = e[b] || "#" + b);
        this.message = (a ? Va(a) : "") + (e || d ? " (" : "") + (e ? "Argument " + e : "") + (d ? (e ? " " : "") + d : "") + (e || d ? ")" : "");
        this.stack = Error().stack
    }
    r("H.lang.InvalidArgumentError", C);
    C.prototype = Error();
    C.prototype.name = "InvalidArgumentError";
    var kb = Math,
        lb = kb.min,
        mb = kb.max,
        nb = kb.round,
        pb = kb.floor,
        qb = kb.ceil,
        rb = kb.abs,
        sb = kb.log,
        tb = kb.sqrt,
        ub = kb.pow,
        vb = kb.exp,
        wb = kb.sin,
        xb = kb.asin,
        yb = kb.cos,
        zb = kb.tan,
        Ab = kb.atan,
        Bb = kb.atan2,
        Cb = kb.LN2,
        Db = kb.PI,
        Eb = Db / 2,
        Fb = Db / 4,
        Gb = 2 * Db,
        Hb = 3 * Db,
        Ib = Db / 180,
        Kb = 180 / Db,
        Lb = 1 / 0,
        Mb = ub(-2, 53),
        Nb = Nb || function(a) {
            return sb(a) / Cb
        };

    function Ob(a, b) {
        var c;
        return 0 > (c = a % b) === 0 > b ? c : c + b
    }

    function Pb(a, b, c) {
        b -= c = c || 0;
        a -= c;
        return a - pb(a / b) * b + c
    }
    r("H.math.normalize", Pb);

    function Qb(a, b, c) {
        return (a -= 0) > c ? c : a < b ? b : a
    }
    r("H.math.clamp", Qb);

    function Rb(a, b, c, d) {
        (d -= 0) || (d = 0);
        return b < c ? a >= b - d && a <= c + d : a >= c - d && a <= b + d
    }

    function Sb(a, b, c, d, e, f) {
        return tb(ub((a - e) * (d - f) - (b - f) * (c - e), 2) / (ub(c - e, 2) + ub(d - f, 2)))
    }
    var Tb = {
        NONE: 0,
        Ri: 1,
        Li: 2,
        Qi: 3
    };

    function Ub(a, b, c, d, e) {
        for (var f = c.length, g = f, h, k, l, m = c[0], n = 0, q = 0, t = 0, u = d / 2 || 0, y = e ? 1 : 3; 1 != n && g > y;) {
            h = c[--g];
            d = c[--g];
            l = c[g ? g - 1 : (f + (g - 1)) % f];
            k = c[g ? g - 2 : (f + (g - 2)) % f];
            if (d >= a - u && d <= a + u && h >= b - u && h <= b + u || k >= a - u && k <= a + u && l >= b - u && l <= b + u) n = 1;
            else if (!n && d === a) k === a && (h < b && l > b || h > b && l < b) || (m <= a && k > a || m >= a && k < a) && (h >= b ? ++q : ++t), n = Rb(b, h, l, u) && Sb(a, b, d, h, k, l) <= u ? 2 : 0;
            else if (!n && Rb(a, d, k, u)) {
                if (d < a && k > a || d > a && k < a) m = h + (a - d) / (k - d) * (l - h), q += m > b, t += m < b;
                n = Rb(b, h, l, u) && Sb(a, b, d, h, k, l) <= u ? 2 : 0
            }
            m = d
        }!n && e && 0 !== t && 0 !==
            q % 2 && (n = 3);
        return n
    };
    var Vb = {
        undefined: "GL",
        GL: "GL",
        OL: "OL",
        SL: "SL",
        SB: "SB",
        WE: "WE",
        WG: "WG"
    };
    r("H.geo.AltitudeContext", Vb);

    function Wb(a, b, c) {
        var d = Qb(+a, -90, 90);
        if (b && D(d)) throw new C(b, c, a);
        return d
    }

    function Xb(a, b, c) {
        var d = +a;
        if (-180 > d || 180 < d) d = Ob(d + 180, 360) - 180;
        if (b && D(d)) throw new C(b, c, a);
        return d
    }

    function Yb(a, b, c) {
        var d;
        if (a !== A && D(d = +a) && b) throw new C(b, c, a);
        return d
    }

    function Zb(a, b, c) {
        var d = !Vb[a];
        if (b && d) throw new C(b, c, a);
        return !d
    }

    function $b(a) {
        return !a || D(a.lat) || D(a.lng) ? !1 : !0
    }

    function ac(a, b) {
        return 0 !== (0 > a ^ 0 > b) && 180 < rb(b - a)
    }
    r("H.geo.isDBC", ac);

    function bc() {
        Ua(this, bc)
    }
    r("H.geo.AbstractGeometry", bc);
    bc.prototype.getBounds = bc.prototype.S;
    bc.prototype.equals = bc.prototype.pa;
    bc.prototype.toString = function() {
        return this.Lb([this.qd, " "]).join("")
    };
    bc.prototype.toString = bc.prototype.toString;

    function E(a, b) {
        var c;
        E.u.constructor.call(this);
        B(a, F, E, 0);
        if (b !== A && Za(b, E, 1)) {
            for (c = 0; c < b.length; c++) B(b[c], F, E, 1, "index " + c);
            this.lb = b
        } else this.lb = [];
        this.$a = a;
        this.a = []
    }
    v(E, bc);
    r("H.geo.Polygon", E);
    var cc = {
        NORTH: 90,
        SOUTH: -90
    };
    E.Direction = cc;
    E.prototype.hc = cc.NORTH;
    E.prototype.i = function(a) {
        this.hc !== a && (this.c = x, this.a.length = 0, this.hc = a);
        return this
    };
    E.prototype.setPoleCovering = E.prototype.i;
    E.prototype.o = function() {
        return this.hc
    };
    E.prototype.getPoleCovering = E.prototype.o;
    E.prototype.l = function() {
        return this.$a
    };
    E.prototype.getExterior = E.prototype.l;
    E.prototype.g = function(a) {
        if (!B(a, F)) throw new C(this.g, 0, a);
        this.$a = a;
        this.c = x
    };
    E.prototype.setExterior = E.prototype.g;
    E.prototype.j = function() {
        return this.lb
    };
    E.prototype.getInteriors = E.prototype.j;
    E.prototype.b = function(a, b, c) {
        var d = arguments.length,
            e, f;
        for (e = 2; e < d; e++) B(arguments[e], F, this.b, e);
        f = this.lb.splice.apply(this.lb, arguments);
        for (e = 2; e < d; e++) arguments[e] = A;
        this.a.splice.apply(this.a, arguments);
        return f
    };
    E.prototype.spliceInteriors = E.prototype.b;
    E.prototype.v = function(a) {
        return this.b(a, 1)[0]
    };
    E.prototype.removeInteriorAt = E.prototype.v;
    E.prototype.m = function(a) {
        a = this.lb.indexOf(a);
        return 0 > a ? A : this.b(a, 1)[0]
    };
    E.prototype.removeInterior = E.prototype.m;
    E.prototype.f = function(a) {
        if (!B(a, F)) throw new C(this.f, 0, a);
        this.lb.push(a)
    };
    E.prototype.pushInterior = E.prototype.f;
    E.prototype.S = function() {
        var a = this.c;
        a || (this.c = a = dc(this.$a, this.hc));
        return a
    };
    E.prototype.getBounds = E.prototype.S;
    p = E.prototype;
    p.ig = function(a) {
        var b = this.lb.length;
        if (0 > a || a >= b) throw new ec(this.ig, a, [0, b - 1]);
        (b = this.a[a]) || (this.a[a] = b = dc(this.lb[a], this.hc));
        return b
    };
    p.$a = x;
    p.lb = [];
    p.qd = "POLYGON";
    p.Lb = function(a) {
        var b = this.lb,
            c = b.length,
            d;
        if (this.$a.f()) {
            a.push("(");
            this.$a.Lb(a);
            for (d = 0; d < c; d++) b[d].f() && (a.push(","), b[d].Lb(a));
            a.push(")")
        } else a.push("EMPTY");
        return a
    };

    function dc(a, b) {
        var c, d, e;
        if (e = a.S())(c = a.l(!0)) && (d = a.f()) && (e = e.wb(fc([a.g(0), a.g(d - 1)], !0), !0)), 360 === e.ab() && 1 === c % 2 && (e = e.b(b, 0));
        return e
    };

    function gc(a, b, c, d) {
        this.lat = Wb(a, gc, 0);
        this.lng = Xb(b, gc, 1);
        c !== A && (this.alt = Yb(c, gc, 2));
        d !== A && Zb(d, gc, 3) && (this.ctx = d)
    }
    v(gc, bc);
    r("H.geo.Point", gc);
    gc.prototype.pa = function(a) {
        return this === a || !!a && this.lat === a.lat && this.lng === a.lng && Vb[this.ctx] === Vb[a.ctx] && (this.alt || 0) === (a.alt || 0)
    };
    gc.prototype.equals = gc.prototype.pa;
    gc.prototype.distance = function(a) {
        var b, c;
        this === a || this.lat === a.lat && this.lng === a.lng ? a = 0 : (b = this.lat * Ib, c = a.lat * Ib, a = 1.274200158E7 * xb(lb(1, tb(ub(wb((b - c) / 2), 2) + yb(b) * yb(c) * ub(wb((this.lng * Ib - a.lng * Ib) / 2), 2)))));
        return a
    };
    gc.prototype.distance = gc.prototype.distance;
    gc.prototype.Gf = function(a, b, c) {
        var d, e, f, g, h, k;
        if (c) {
            if (b /= 6371000.79) {
                a *= Ib;
                d = Ib * this.lat;
                f = wb(d);
                g = wb(b);
                h = yb(b);
                e = Ib * this.lng;
                var l = yb(d);
                d = xb(l * yb(a) * g + f * h);
                a = Bb(wb(a) * l * g, h - f * wb(d));
                l = ((e + a + Db) % (2 * Db) - Db) * Kb
            }
            return b ? new gc(d * Kb, (l + 540) % 360 - 180) : this
        }
        a = (a % 360 + 360) % 360;
        if (0 === (a + 90) % 180) return d = this.lng + b / (6371000.79 * Gb * yb(this.lat * Ib)) * (270 === a ? -360 : 360), new gc(this.lat, (d + 540) % 360 - 180);
        if (b /= 6371000.79) a *= Ib, e = this.lat * Ib, f = this.lng * Ib, g = e + b * yb(a), h = g - e, d = sb(zb(g / 2 + Fb) / zb(e / 2 + Fb)), d = D(h / d) ?
            yb(e) : h / d, k = b * wb(a) / d, rb(g) > Eb && (g = 0 < g ? Db - g : -(Db + g));
        return b ? new gc(g * Kb, ((f + k + Hb + (rb(e + h) > Eb ? Db : 0)) % Gb - Db) * Kb) : this
    };
    gc.prototype.walk = gc.prototype.Gf;
    gc.prototype.S = function() {
        return new G(this.lat, this.lng, this.lat, this.lng)
    };
    gc.prototype.getBounds = gc.prototype.S;

    function hc(a, b, c) {
        var d = !!a && !(D(a.lat = Wb(a.lat)) || D(a.lng = Xb(a.lng)) || a.alt !== A && D(a.alt = Yb(a.alt)) || a.ctx !== A && !Zb(a.ctx));
        if (!d && b) throw new C(b, c, a);
        return d
    }
    gc.validate = hc;

    function ic(a) {
        if (!a) throw new C(ic, 0, a);
        return new gc(a.lat, a.lng, a.alt, a.ctx)
    }
    gc.fromIPoint = ic;
    gc.prototype.qd = "POINT";
    gc.prototype.Lb = function(a) {
        a.push("(", this.lng, " ", this.lat, ")");
        return a
    };
    var jc;

    function kc(a, b) {
        var c = [];
        a && c.push(Va(a));
        1 < arguments.length && c.push(b);
        this.message = c.join(" ");
        this.stack = Error().stack
    }
    v(kc, Error);
    r("H.lang.IllegalOperationError", kc);
    kc.prototype = Error();
    kc.prototype.name = "IllegalOperationError";

    function lc(a) {
        if (!ra(a)) throw new C(this.constructor, 0);
        this.g = w.indexedDB || w.webkitIndexedDB || w.mozIndexedDB || w.msIndexedDB;
        if (!this.g) throw new kc(this.constructor, "This browser does not support IndexedDB");
        this.l = a;
        this.a = [];
        this.c = [];
        this.pf = z(this.pf, this)
    }
    var mc, nc;
    r("H.util.IndexedDBStorage", lc);
    p = lc.prototype;
    p.gd = function(a, b, c, d) {
        if (!oc(a)) throw new C(this.gd, 0);
        if (!pc(b)) throw new C(this.gd, 1);
        qc(this, function(e) {
            rc(e.put(b, a), c, d)
        }, d)
    };
    p.get = function(a, b, c) {
        var d;
        if (!oc(a)) throw new C(this.get, 0);
        if (!sa(b)) throw new C(this.get, 1);
        qc(this, function(e) {
            d = e.get(a);
            rc(d, b, c)
        }, c);
        return {
            cancel: function() {
                d && (d.onsuccess = sc)
            }
        }
    };
    p.remove = function(a, b, c) {
        if (!oc(a)) throw new C(this.remove, 0);
        qc(this, function(d) {
            rc(d["delete"](a), b, c)
        }, c)
    };
    p.clear = function(a, b) {
        qc(this, function(c) {
            rc(c.clear(), a, b)
        }, b)
    };
    p.Gh = w.IDBTransaction && w.IDBTransaction.READ_WRITE || "readwrite";
    p.pf = function() {
        var a = this.b.result;
        a.objectStoreNames.contains("data") || a.createObjectStore("data")
    };

    function tc(a, b, c) {
        var d;
        a.b ? a.a ? (a.a.push(b), c && a.c.push(c)) : a.f ? c && c(a.f) : b(a.b.result) : (a.b = a.g.open(uc + a.l, 1), a.b.onupgradeneeded = a.pf, d = a.b.onerror = function() {
            clearTimeout(a.i);
            a.f = this.error;
            a.c.forEach(function(b) {
                b(a.f)
            });
            a.a = a.c = null
        }, a.i = setTimeout(function() {
            d.call({
                error: Error("DbOpenTimeoutError")
            })
        }, 500), a.b.onsuccess = function() {
            clearTimeout(a.i);
            a.a ? (a.a.forEach(function(a) {
                a(this.result)
            }, this), a.a = a.c = null) : (a.b = a.f = null, a.a = [], a.c = [])
        }, a.a.push(b), c && a.c.push(c))
    }

    function qc(a, b, c) {
        tc(a, function(c) {
            c = c.transaction(["data"], a.Gh);
            b(c.objectStore("data"))
        }, c)
    }

    function rc(a, b, c) {
        b && (a.onsuccess = function() {
            b(this.result)
        });
        c && (a.onerror = function() {
            c(this.error)
        })
    }

    function pc(a) {
        var b = Object.prototype.toString.call(a);
        return "[object Blob]" === b || "[object ArrayBuffer]" === b || ra(a) || Pa(a)
    }

    function oc(a) {
        return ra(a) || ab(a)
    }

    function vc() {
        mc || (mc = new lc("STATIC_DB"));
        return mc
    }
    lc.getInstance = vc;
    var uc = "H_";

    function wc() {
        var a, b, c;
        if (!Ta(nc))
            if ("file:" === window.location.protocol && -1 < navigator.userAgent.toLowerCase().indexOf("firefox") && 128 <= window.location.href.length) nc = !1;
            else {
                a = w.indexedDB || w.webkitIndexedDB || w.mozIndexedDB || w.msIndexedDB;
                c = uc + "TEST_DB";
                try {
                    b = a && a.open(c, 1)
                } catch (d) {}
                nc = !!b && null === b.onupgradeneeded;
                b && a.deleteDatabase && a.deleteDatabase(c)
            }
        return nc
    }
    lc.isSupported = wc;

    function xc() {
        0 != yc && (zc[this[ua] || (this[ua] = ++va)] = this);
        this.pb = this.pb;
        this.Ta = this.Ta
    }
    var yc = 0,
        zc = {};
    xc.prototype.pb = !1;
    xc.prototype.J = function() {
        if (!this.pb && (this.pb = !0, this.D(), 0 != yc)) {
            var a = this[ua] || (this[ua] = ++va);
            delete zc[a]
        }
    };
    xc.prototype.Eb = function(a, b) {
        this.pb ? a.call(b) : (this.Ta || (this.Ta = []), this.Ta.push(ga(b) ? ya(a, b) : a))
    };
    xc.prototype.D = function() {
        if (this.Ta)
            for (; this.Ta.length;) this.Ta.shift()()
    };

    function Ac(a) {
        a && "function" == typeof a.J && a.J()
    };

    function Bc(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.a = !1;
        this.ah = !0
    }
    Bc.prototype.stopPropagation = function() {
        this.a = !0
    };
    Bc.prototype.preventDefault = function() {
        this.ah = !1
    };
    r("H.util.Event", Bc);
    Bc.prototype.stopPropagation = Bc.prototype.stopPropagation;
    Bc.prototype.stopPropagation = Bc.prototype.stopPropagation;
    Bc.prototype.j = 1;
    Bc.prototype.CAPTURING_PHASE = Bc.prototype.j;
    Bc.prototype.i = 2;
    Bc.prototype.AT_TARGET = Bc.prototype.i;
    Bc.prototype.l = 3;
    Bc.prototype.BUBBLING_PHASE = Bc.prototype.l;
    Bc.prototype.o = 0;
    Bc.prototype.eventPhase = Bc.prototype.o;

    function Cc(a, b, c) {
        Cc.u.constructor.call(this, a, c);
        this.data = b
    }
    v(Cc, Bc);
    r("H.util.DataEvent", Cc);

    function Dc(a, b, c) {
        Dc.u.constructor.call(this, a, c);
        this.message = b
    }
    v(Dc, Bc);
    r("H.util.ErrorEvent", Dc);

    function Ec(a, b, c) {
        this.g = c;
        this.c = a;
        this.f = b;
        this.b = 0;
        this.a = null
    }
    Ec.prototype.get = function() {
        var a;
        0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
        return a
    };

    function Fc(a, b) {
        a.f(b);
        a.b < a.g && (a.b++, b.next = a.a, a.a = b)
    };

    function Gc() {
        this.b = this.a = null
    }
    var Ic = new Ec(function() {
        return new Hc
    }, function(a) {
        a.reset()
    }, 100);
    Gc.prototype.add = function(a, b) {
        var c = Ic.get();
        c.set(a, b);
        this.b ? this.b.next = c : this.a = c;
        this.b = c
    };
    Gc.prototype.remove = function() {
        var a = null;
        this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
        return a
    };

    function Hc() {
        this.next = this.b = this.a = null
    }
    Hc.prototype.set = function(a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    };
    Hc.prototype.reset = function() {
        this.next = this.b = this.a = null
    };
    var Jc;
    a: {
        var Kc = fa.navigator;
        if (Kc) {
            var Lc = Kc.userAgent;
            if (Lc) {
                Jc = Lc;
                break a
            }
        }
        Jc = ""
    };

    function Mc() {
        return -1 != Jc.indexOf("Edge") || -1 != Jc.indexOf("Trident") || -1 != Jc.indexOf("MSIE")
    };

    function Nc() {
        return -1 != Jc.indexOf("Edge")
    };

    function Oc(a) {
        fa.setTimeout(function() {
            throw a;
        }, 0)
    }
    var Pc;

    function Qc() {
        var a = fa.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == Jc.indexOf("Presto") && (a = function() {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow,
                a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                a = ya(function(a) {
                    if (("*" == d || a.origin ==
                            d) && a.data == c) this.port1.onmessage()
                }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !Mc()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (ga(c.next)) {
                    c = c.next;
                    var a = c.$f;
                    c.$f = null;
                    a()
                }
            };
            return function(a) {
                d.next = {
                    $f: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
            var b = document.createElement("SCRIPT");
            b.onreadystatechange =
                function() {
                    b.onreadystatechange = null;
                    b.parentNode.removeChild(b);
                    b = null;
                    a();
                    a = null
                };
            document.documentElement.appendChild(b)
        } : function(a) {
            fa.setTimeout(a, 0)
        }
    };

    function Rc(a, b) {
        Sc || Tc();
        Uc || (Sc(), Uc = !0);
        Vc.add(a, b)
    }
    var Sc;

    function Tc() {
        if (fa.Promise && fa.Promise.resolve) {
            var a = fa.Promise.resolve();
            Sc = function() {
                a.then(Wc)
            }
        } else Sc = function() {
            var a = Wc;
            !sa(fa.setImmediate) || fa.Window && fa.Window.prototype && fa.Window.prototype.setImmediate == fa.setImmediate ? (Pc || (Pc = Qc()), Pc(a)) : fa.setImmediate(a)
        }
    }
    var Uc = !1,
        Vc = new Gc;

    function Wc() {
        for (var a = null; a = Vc.remove();) {
            try {
                a.a.call(a.b)
            } catch (b) {
                Oc(b)
            }
            Fc(Ic, a)
        }
        Uc = !1
    };

    function Xc(a, b) {
        this.G = Yc;
        this.i = void 0;
        this.c = this.a = this.b = null;
        this.f = this.g = !1;
        if (a == Zc) $c(this, ad, b);
        else try {
            var c = this;
            a.call(b, function(a) {
                $c(c, ad, a)
            }, function(a) {
                $c(c, bd, a)
            })
        } catch (d) {
            $c(this, bd, d)
        }
    }
    var Yc = 0,
        ad = 2,
        bd = 3;

    function cd() {
        this.next = this.c = this.b = this.f = this.a = null;
        this.g = !1
    }
    cd.prototype.reset = function() {
        this.c = this.b = this.f = this.a = null;
        this.g = !1
    };
    var dd = new Ec(function() {
        return new cd
    }, function(a) {
        a.reset()
    }, 100);

    function ed(a, b, c) {
        var d = dd.get();
        d.f = a;
        d.b = b;
        d.c = c;
        return d
    }

    function Zc() {}

    function fd(a) {
        return new Xc(function(b, c) {
            c(a)
        })
    }

    function gd() {
        var a, b, c = new Xc(function(c, e) {
            a = c;
            b = e
        });
        return new hd(c, a, b)
    }
    Xc.prototype.then = function(a, b, c) {
        return id(this, sa(a) ? a : null, sa(b) ? b : null, c)
    };
    Xc.prototype.then = Xc.prototype.then;
    Xc.prototype.$goog_Thenable = !0;
    Xc.prototype.cancel = function(a) {
        this.G == Yc && Rc(function() {
            var b = new jd(a);
            kd(this, b)
        }, this)
    };

    function kd(a, b) {
        if (a.G == Yc)
            if (a.b) {
                var c = a.b;
                if (c.a) {
                    for (var d = 0, e = null, f = null, g = c.a; g && (g.g || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (c.G == Yc && 1 == d ? kd(c, b) : (f ? (d = f, d.next == c.c && (c.c = d), d.next = d.next.next) : ld(c), md(c, e, bd, b)))
                }
                a.b = null
            } else $c(a, bd, b)
    }

    function nd(a, b) {
        a.a || a.G != ad && a.G != bd || od(a);
        a.c ? a.c.next = b : a.a = b;
        a.c = b
    }

    function id(a, b, c, d) {
        var e = ed(null, null, null);
        e.a = new Xc(function(a, g) {
            e.f = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (l) {
                    g(l)
                }
            } : a;
            e.b = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !ga(e) && b instanceof jd ? g(b) : a(e)
                } catch (l) {
                    g(l)
                }
            } : g
        });
        e.a.b = a;
        nd(a, e);
        return e.a
    }
    Xc.prototype.l = function(a) {
        this.G = Yc;
        $c(this, ad, a)
    };
    Xc.prototype.j = function(a) {
        this.G = Yc;
        $c(this, bd, a)
    };

    function $c(a, b, c) {
        if (a.G == Yc) {
            if (a == c) b = bd, c = new TypeError("Promise cannot resolve to itself");
            else {
                var d;
                if (c) try {
                    d = !!c.$goog_Thenable
                } catch (e) {
                    d = !1
                } else d = !1;
                if (d) {
                    a.G = 1;
                    b = c;
                    c = a.l;
                    d = a.j;
                    b instanceof Xc ? nd(b, ed(c || ka, d || null, a)) : b.then(c, d, a);
                    return
                }
                if (ta(c)) try {
                    var f = c.then;
                    if (sa(f)) {
                        pd(a, c, f);
                        return
                    }
                } catch (g) {
                    b = bd, c = g
                }
            }
            a.i = c;
            a.G = b;
            a.b = null;
            od(a);
            b != bd || c instanceof jd || qd(a, c)
        }
    }

    function pd(a, b, c) {
        function d(b) {
            f || (f = !0, a.j(b))
        }

        function e(b) {
            f || (f = !0, a.l(b))
        }
        a.G = 1;
        var f = !1;
        try {
            c.call(b, e, d)
        } catch (g) {
            d(g)
        }
    }

    function od(a) {
        a.g || (a.g = !0, Rc(a.o, a))
    }

    function ld(a) {
        var b = null;
        a.a && (b = a.a, a.a = b.next, b.next = null);
        a.a || (a.c = null);
        return b
    }
    Xc.prototype.o = function() {
        for (var a = null; a = ld(this);) md(this, a, this.G, this.i);
        this.g = !1
    };

    function md(a, b, c, d) {
        if (c == bd && b.b && !b.g)
            for (; a && a.f; a = a.b) a.f = !1;
        if (b.a) b.a.b = null, rd(b, c, d);
        else try {
            b.g ? b.f.call(b.c) : rd(b, c, d)
        } catch (e) {
            sd.call(null, e)
        }
        Fc(dd, b)
    }

    function rd(a, b, c) {
        b == ad ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c)
    }

    function qd(a, b) {
        a.f = !0;
        Rc(function() {
            a.f && sd.call(null, b)
        })
    }
    var sd = Oc;

    function jd(a) {
        Da.call(this, a)
    }
    v(jd, Da);
    jd.prototype.name = "cancel";

    function hd(a, b, c) {
        this.sf = a;
        this.resolve = b;
        this.reject = c
    };

    function td(a, b, c) {
        this.type = a;
        this.data = b;
        this.$d = gd();
        this.resolve = z(this.resolve, this);
        this.reject = z(this.reject, this);
        this.c = ud;
        c !== A && (this.c = c);
        this.Fe().add(this)
    }
    var ud = 1,
        vd = {
            Ni: 0,
            NORMAL: ud,
            Mi: 2
        };
    td.prototype.then = function(a, b, c) {
        return this.$d.sf.then(a, b, c)
    };
    Ca(td.prototype, {
        resolve: function(a) {
            this.state = 3;
            this.$d.resolve(a)
        },
        reject: function(a) {
            this.state = 5;
            this.$d.reject(a)
        },
        state: 0,
        cancel: function() {
            this.$d.sf.cancel();
            3 > this.state && (this.Sc(), this.Fe().remove(this), this.state = 4)
        },
        Sc: ma,
        De: ma,
        Th: function(a) {
            this.state = this.De(a) ? 1 : 5
        }
    });

    function wd(a) {
        this.kc = {};
        for (var b in vd) this.kc[vd[b]] = [];
        this.ae = a;
        this.ae.addEventListener("allocatable", z(this.eg, this))
    }
    r("H.util.JobManager", wd);
    var xd = Object.keys(vd).map(function(a) {
        return vd[a]
    }).sort().reverse();
    Ca(wd.prototype, {
        add: function(a) {
            B(a, td, this.add, 0);
            this.kc[a.c].push(a);
            this.eg()
        },
        contains: function(a) {
            return -1 < this.kc[a.c].indexOf(a)
        },
        remove: function(a) {
            var b = a.c;
            a = this.kc[b].indexOf(a);
            return -1 < a ? (this.kc[b].splice(a, 1), !0) : !1
        },
        eg: function() {
            xd.forEach(function(a) {
                this.kc[a] = this.kc[a].filter(function(a) {
                    var c, d;
                    if ((c = this.ae.se(a)) !== x) d = z(this.ae.ye, this.ae, c, a), a.then(d, d), a.Th(c);
                    else return !0
                }, this)
            }, this)
        }
    });

    function ec(a, b, c) {
        var d = [];
        1 < arguments.length && d.push(b);
        2 < arguments.length && d.push("out of [" + c[0] + "..." + c[1] + "]");
        this.message = (a ? Va(a) : "") + (d.length ? " (" + d.join(" ") + ")" : "");
        this.stack = Error().stack
    }
    r("H.lang.OutOfRangeError", ec);
    ec.prototype = Error();
    ec.prototype.name = "OutOfRangeError";
    var yd = "closure_listenable_" + (1E6 * Math.random() | 0);

    function zd(a) {
        return !(!a || !a[yd])
    }
    var Ad = 0;

    function Bd(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.ya = !!d;
        this.Dd = e;
        this.key = ++Ad;
        this.Hc = this.wd = !1
    }

    function Cd(a) {
        a.Hc = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.Dd = null
    };

    function Dd(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
    Dd.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var g = Ed(a, b, d, e); - 1 < g ? (b = a[g], c || (b.wd = !1)) : (b = new Bd(b, this.src, f, !!d, e), b.wd = c, a.push(b));
        return b
    };
    Dd.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.a)) return !1;
        var e = this.a[a];
        b = Ed(e, b, c, d);
        return -1 < b ? (Cd(e[b]), Ga.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };

    function Fd(a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = a.a[c],
            e = Ha(d, b),
            f;
        (f = 0 <= e) && Ga.splice.call(d, e, 1);
        f && (Cd(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return f
    }
    Dd.prototype.Ea = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.a)
            if (!a || c == a) {
                for (var d = this.a[c], e = 0; e < d.length; e++) ++b, Cd(d[e]);
                delete this.a[c];
                this.b--
            }
        return b
    };

    function Ed(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Hc && f.listener == b && f.ya == !!c && f.Dd == d) return e
        }
        return -1
    };
    var Gd = -1 != Jc.indexOf("Opera") || -1 != Jc.indexOf("OPR"),
        Hd = Mc(),
        Id = -1 != Jc.indexOf("Gecko") && !(-1 != Jc.toLowerCase().indexOf("webkit") && !Nc()) && !(-1 != Jc.indexOf("Trident") || -1 != Jc.indexOf("MSIE")) && !Nc(),
        Jd = -1 != Jc.toLowerCase().indexOf("webkit") && !Nc();

    function Kd() {
        var a = Jc;
        if (Id) return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (Hd && Nc()) return /Edge\/([\d\.]+)/.exec(a);
        if (Hd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Jd) return /WebKit\/(\S+)/.exec(a)
    }

    function Ld() {
        var a = fa.document;
        return a ? a.documentMode : void 0
    }
    var Md = function() {
            if (Gd && fa.opera) {
                var a = fa.opera.version;
                return sa(a) ? a() : a
            }
            var a = "",
                b = Kd();
            b && (a = b ? b[1] : "");
            return Hd && !Nc() && (b = Ld(), b > parseFloat(a)) ? String(b) : a
        }(),
        Nd = {};

    function Od(a) {
        var b;
        if (!(b = Nd[a])) {
            b = 0;
            for (var c = Ea(String(Md)).split("."), d = Ea(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "",
                    k = /(\d*)(\D*)/g,
                    l = /(\d*)(\D*)/g;
                do {
                    var m = k.exec(g) || ["", "", ""],
                        n = l.exec(h) || ["", "", ""];
                    if (0 == m[0].length && 0 == n[0].length) break;
                    b = Fa(0 == m[1].length ? 0 : parseInt(m[1], 10), 0 == n[1].length ? 0 : parseInt(n[1], 10)) || Fa(0 == m[2].length, 0 == n[2].length) || Fa(m[2], n[2])
                } while (0 == b)
            }
            b = Nd[a] = 0 <= b
        }
        return b
    }
    var Pd = fa.document,
        Qd = Ld(),
        Rd = !Pd || !Hd || !Qd && Nc() ? void 0 : Qd || ("CSS1Compat" == Pd.compatMode ? parseInt(Md, 10) : 5);
    var Td;
    (Td = !Hd) || (Td = Hd && (Nc() || 9 <= Rd));
    var Ud = Td,
        Vd = Hd && !Od("9");
    !Jd || Od("528");
    Id && Od("1.9b") || Hd && Od("8") || Gd && Od("9.5") || Jd && Od("528");
    Id && !Od("8") || Hd && Od("9");

    function Wd(a) {
        Wd[" "](a);
        return a
    }
    Wd[" "] = ka;

    function Xd(a, b) {
        Bc.call(this, a ? a.type : "");
        this.currentTarget = this.target = null;
        this.keyCode = 0;
        this.b = this.state = null;
        if (a) {
            this.type = a.type;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var c = a.relatedTarget;
            if (c && Id) try {
                Wd(c.nodeName)
            } catch (d) {}
            this.keyCode = a.keyCode || 0;
            this.state = a.state;
            this.b = a;
            a.defaultPrevented && this.preventDefault()
        }
    }
    v(Xd, Bc);
    Xd.prototype.stopPropagation = function() {
        Xd.u.stopPropagation.call(this);
        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
    };
    Xd.prototype.preventDefault = function() {
        Xd.u.preventDefault.call(this);
        var a = this.b;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Vd) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Yd = "closure_lm_" + (1E6 * Math.random() | 0),
        Zd = {},
        $d = 0;

    function ae(a, b, c, d, e) {
        if (pa(b)) {
            for (var f = 0; f < b.length; f++) ae(a, b[f], c, d, e);
            return null
        }
        c = be(c);
        return zd(a) ? a.Ob.add(String(b), c, !1, d, e) : ce(a, b, c, !1, d, e)
    }

    function ce(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = !!e,
            h = de(a);
        h || (a[Yd] = h = new Dd(a));
        c = h.add(b, c, d, e, f);
        if (c.a) return c;
        d = ee();
        c.a = d;
        d.src = a;
        d.listener = c;
        a.addEventListener ? a.addEventListener(b.toString(), d, g) : a.attachEvent(fe(b.toString()), d);
        $d++;
        return c
    }

    function ee() {
        var a = ge,
            b = Ud ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }

    function he(a, b, c, d, e) {
        if (pa(b)) {
            for (var f = 0; f < b.length; f++) he(a, b[f], c, d, e);
            return null
        }
        c = be(c);
        return zd(a) ? a.Ob.add(String(b), c, !0, d, e) : ce(a, b, c, !0, d, e)
    }

    function ie(a, b, c, d, e) {
        if (pa(b)) {
            for (var f = 0; f < b.length; f++) ie(a, b[f], c, d, e);
            return null
        }
        c = be(c);
        if (zd(a)) return a.Ob.remove(String(b), c, d, e);
        if (!a) return !1;
        if (a = de(a))
            if (b = a.a[b.toString()], a = -1, b && (a = Ed(b, c, !!d, e)), c = -1 < a ? b[a] : null) return je(c);
        return !1
    }

    function je(a) {
        if ("number" == typeof a || !a || a.Hc) return !1;
        var b = a.src;
        if (zd(b)) return Fd(b.Ob, a);
        var c = a.type,
            d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.ya) : b.detachEvent && b.detachEvent(fe(c), d);
        $d--;
        (c = de(b)) ? (Fd(c, a), 0 == c.b && (c.src = null, b[Yd] = null)) : Cd(a);
        return !0
    }

    function fe(a) {
        return a in Zd ? Zd[a] : Zd[a] = "on" + a
    }

    function ke(a, b, c, d) {
        var e = !0;
        if (a = de(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.ya == c && !f.Hc && (f = le(f, d), e = e && !1 !== f)
                }
        return e
    }

    function le(a, b) {
        var c = a.listener,
            d = a.Dd || a.src;
        a.wd && je(a);
        return c.call(d, b)
    }

    function ge(a, b) {
        if (a.Hc) return !0;
        if (!Ud) {
            var c = b || ja("window.event"),
                d = new Xd(c, this),
                e = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        f = !0
                    }
                    if (f || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (f = d.currentTarget; f; f = f.parentNode) c.push(f);
                for (var f = a.type, h = c.length - 1; !d.a && 0 <= h; h--) {
                    d.currentTarget = c[h];
                    var k = ke(c[h], f, !0, d),
                        e = e && k
                }
                for (h = 0; !d.a && h < c.length; h++) d.currentTarget = c[h],
                k = ke(c[h], f, !1, d),
                e = e && k
            }
            return e
        }
        return le(a, new Xd(b,
            this))
    }

    function de(a) {
        a = a[Yd];
        return a instanceof Dd ? a : null
    }
    var me = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function be(a) {
        if (sa(a)) return a;
        a[me] || (a[me] = function(b) {
            return a.handleEvent(b)
        });
        return a[me]
    };

    function I() {
        xc.call(this);
        this.Ob = new Dd(this);
        this.ph = this;
        this.Me = null
    }
    v(I, xc);
    I.prototype[yd] = !0;
    p = I.prototype;
    p.jb = function() {
        return this.Me
    };
    p.ia = function(a) {
        this.Me = a
    };
    p.addEventListener = function(a, b, c, d) {
        ae(this, a, b, c, d)
    };
    p.removeEventListener = function(a, b, c, d) {
        ie(this, a, b, c, d)
    };
    p.dispatchEvent = function(a) {
        var b, c = this.jb();
        if (c)
            for (b = []; c; c = c.jb()) b.push(c);
        var c = this.ph,
            d = a.type || a;
        if (ra(a)) a = new Bc(a, c);
        else if (a instanceof Bc) a.target = a.target || c;
        else {
            var e = a;
            a = new Bc(d, c);
            Ca(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var g = b.length - 1; !a.a && 0 <= g; g--) f = a.currentTarget = b[g], e = f.dc(d, !0, a) && e;
        a.a || (f = a.currentTarget = c, e = f.dc(d, !0, a) && e, a.a || (e = f.dc(d, !1, a) && e));
        if (b)
            for (g = 0; !a.a && g < b.length; g++) f = a.currentTarget = b[g], e = f.dc(d, !1, a) && e;
        return e
    };
    p.D = function() {
        I.u.D.call(this);
        this.Ob && this.Ob.Ea(void 0);
        this.Me = null
    };
    p.dc = function(a, b, c) {
        a = this.Ob.a[String(a)];
        if (!a) return !0;
        a = a.concat();
        for (var d = !0, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (f && !f.Hc && f.ya == b) {
                var g = f.listener,
                    h = f.Dd || f.src;
                f.wd && Fd(this.Ob, f);
                d = !1 !== g.call(h, c) && d
            }
        }
        return d && 0 != c.ah
    };
    r("H.util.EventTarget", I);
    I.prototype.ia = I.prototype.ia;
    I.prototype.setParentEventTarget = I.prototype.ia;
    I.prototype.jb = I.prototype.jb;
    I.prototype.getParentEventTarget = I.prototype.jb;
    I.prototype.addEventListener = I.prototype.addEventListener;
    I.prototype.addEventListener = I.prototype.addEventListener;
    I.prototype.removeEventListener = I.prototype.removeEventListener;
    I.prototype.removeEventListener = I.prototype.removeEventListener;
    I.prototype.dispatchEvent = I.prototype.dispatchEvent;
    I.prototype.dispatchEvent = I.prototype.dispatchEvent;
    I.prototype.J = I.prototype.J;
    I.prototype.dispose = I.prototype.J;
    I.prototype.Eb = I.prototype.Eb;
    I.prototype.addOnDisposeCallback = I.prototype.Eb;
    I.prototype.th = I.prototype.dc;
    I.prototype.dc = function(a, b, c) {
        var d, e, f, g = !0;
        d = c[c.currentTarget === c.target ? "AT_TARGET" : b ? "CAPTURING_PHASE" : (e = !0, "BUBBLING_PHASE")];
        if (!e || "pointerenter" !== (f = c.type) && "pointerleave" !== f) c.eventPhase = d, g = I.prototype.th.apply(this, arguments), e && this.jb && null === this.jb() && delete c.eventPhase;
        return g
    };

    function ne(a) {
        a = a || {};
        var b = a.callback;
        this.a = a.label;
        sa(b) && (this.callback = b);
        this.g = !!a.disabled;
        ne.u.constructor.call(this)
    }
    v(ne, I);
    r("H.util.ContextItem", ne);
    ne.prototype.b = function() {
        return this.a
    };
    ne.prototype.getLabel = ne.prototype.b;
    ne.prototype.Sa = function(a) {
        this.a !== a && (this.a = a, this.dispatchEvent("update"));
        return this
    };
    ne.prototype.setLabel = ne.prototype.Sa;
    ne.prototype.c = function() {
        return this.g
    };
    ne.prototype.isDisabled = ne.prototype.c;
    ne.prototype.qa = function(a) {
        a ^ this.g && (this.g = a, this.dispatchEvent("update"));
        return this
    };
    ne.prototype.setDisabled = ne.prototype.qa;
    var oe = new ne;
    ne.SEPARATOR = oe;

    function pe() {
        if (w.document) {
            var a = document.createElement("canvas");
            a.width = a.height = 1;
            return a.getContext("2d")
        }
        return null
    }
    var qe = /^rgba\(([^,]+),([^,]+),([^,]+),([^)]+)\)$/;

    function re(a) {
        var b = se[a],
            c = w.RegExp;
        b || (w.Uint8ClampedArray || (w.Uint8ClampedArray = function(a) {
            return a instanceof Number ? Array(a) : a.map(function(a) {
                return Qb(nb(a), 0, 255)
            })
        }), "none" === a ? b = new Uint8ClampedArray([0, 0, 0, 0]) : (te.fillStyle = "black", te.fillStyle = a, qe.test(te.fillStyle) ? b = new Uint8ClampedArray([c.$1, c.$2, c.$3, 255 * c.$4]) : (te.clearRect(0, 0, 1, 1), te.fillRect(0, 0, 1, 1), b = te.getImageData(0, 0, 1, 1).data)), se[a] = b);
        return b
    }

    function ue(a) {
        return "none" !== a && 0 < re(a)[3]
    }
    var se = Ka(),
        ve = !!w.VBArray;
    r("H.util.eval", function(a) {
        return eval(a)
    });

    function we(a, b) {
        return a !== A ? a : b
    }

    function xe(a) {
        return /^<svg/.test(a) ? "data:image/svg+xml;charset=utf-8," + encodeURIComponent(a) : a
    }
    r("H.util.provide", function(a) {
        ha(a, void 0)
    });

    function ye() {
        this.xb = 0
    }
    ye.prototype.next = function(a) {
        if (4294967295 === this.xb) throw new ec(a, this.xb, [0, 4294967295]);
        return this.xb++
    };
    var ze = new ye,
        Ae = z(ze.next, ze);

    function Be() {
        return !0
    }

    function Ce() {
        return !1
    }

    function sc() {}
    var De = Na([]);

    function Ee(a) {
        return "CANVAS" === a.tagName ? [a] : a.getElementsByTagName("CANVAS")
    }

    function Fe(a, b, c) {
        var d;
        b = a.ownerDocument === b ? a.cloneNode(!0) : b.importNode(a, !0);
        if (c)
            for (a = Ee(a), c = Ee(b), d = c.length; d--;) c[d].getContext("2d").drawImage(a[d], 0, 0);
        return b
    }

    function Ge(a) {
        a.parentNode.removeChild(a)
    }
    var te = pe(),
        He = pe();

    function Ie(a) {
        var b = a.complete,
            c = 0 < a.naturalWidth;
        if (b && !c && ve) try {
            He.drawImage(a, 0, 0), c = !0
        } catch (d) {}
        return b && c
    }
    var Je = w.BlobBuilder || w.WebKitBlobBuilder || w.MozBlobBuilder;

    function Ke(a, b) {
        var c = b || "",
            d;
        Je ? (d = new Je, d.append(a), c = d.getBlob(c)) : c = new Blob([a], {
            type: c
        });
        return c
    };

    function Le() {}
    r("H.map.provider.Invalidations", Le);
    Le.MARK_INITIAL = Mb;
    Le.prototype.c = function(a, b) {
        b !== Me.NONE && (this.a = a, b & Me.SPATIAL && (this.m = a), b & Me.VISUAL && (this.v = a), b & Me.ADD && (this.l = a), b & Me.REMOVE && (this.o = a), b & Me.Z_ORDER && (this.s = a))
    };
    Le.prototype.update = Le.prototype.c;
    Le.prototype.B = function() {
        return this.a
    };
    Le.prototype.getMark = Le.prototype.B;
    Le.prototype.a = Mb;
    Le.prototype.A = function(a) {
        return this.a > a
    };
    Le.prototype.isAny = Le.prototype.A;
    Le.prototype.v = Mb;
    Le.prototype.b = function(a) {
        return this.v > a
    };
    Le.prototype.isVisual = Le.prototype.b;
    Le.prototype.m = Mb;
    Le.prototype.g = function(a) {
        return this.m > a
    };
    Le.prototype.isSpatial = Le.prototype.g;
    Le.prototype.l = Mb;
    Le.prototype.j = function(a) {
        return this.l > a
    };
    Le.prototype.isAdd = Le.prototype.j;
    Le.prototype.o = Mb;
    Le.prototype.f = function(a) {
        return this.o > a
    };
    Le.prototype.isRemove = Le.prototype.f;
    Le.prototype.s = Mb;
    Le.prototype.i = function(a) {
        return this.s > a
    };
    Le.prototype.isZOrder = Le.prototype.i;
    var Me = {
        NONE: 0,
        VISUAL: 1,
        SPATIAL: 2,
        ADD: 4,
        REMOVE: 8,
        Z_ORDER: 16
    };
    Le.Flag = Me;

    function Ne(a, b, c) {
        Ne.u.constructor.call(this, a);
        this.oldValue = c;
        this.newValue = b
    }
    v(Ne, Bc);
    r("H.util.ChangeEvent", Ne);

    function K(a) {
        var b;
        Ua(this, K);
        K.u.constructor.call(this);
        this.zb = Oe.next();
        a && (b = "min", ab(a[b]) && (this.Ga = a[b]), b = "max", ab(a[b]) && (this.ea = a[b]), b = "visibility", b in a && (this.T = !!a[b]), b = "zIndex", b in a && (this.I = +a[b] || 0), b = "provider", b in a && (this.l = a[b], this.ua(Me.ADD)), b = "data", b in a && this.g(a[b]))
    }
    v(K, I);
    r("H.map.Object", K);
    var Oe = new ye,
        Pe = {
            ANY: 0,
            OVERLAY: 1,
            SPATIAL: 2,
            MARKER: 3,
            DOM_MARKER: 4,
            GROUP: 5
        };
    K.Type = Pe;
    K.prototype.yb = {
        Hh: "visibilitychange",
        Ih: "zindexchange"
    };
    K.prototype.ta = function() {
        return this.zb
    };
    K.prototype.getId = K.prototype.ta;
    K.prototype.Ga = -1 / 0;
    K.prototype.ea = 1 / 0;
    K.prototype.Ld = function() {
        return this.ea
    };
    K.prototype.getMax = K.prototype.Ld;
    K.prototype.Xd = function() {
        return this.Ga
    };
    K.prototype.getMin = K.prototype.Xd;
    K.prototype.T = !0;
    K.prototype.setVisibility = function(a) {
        var b = this.T;
        (a = !!a) ^ b && (this.T = a, this.invalidate(Me.VISUAL), this.dispatchEvent(new Ne(this.yb.Hh, a, b)));
        return this
    };
    K.prototype.setVisibility = K.prototype.setVisibility;
    K.prototype.getVisibility = function(a) {
        for (var b = this, c;
            (c = b.T) && a && (b = b.Da););
        return c
    };
    K.prototype.getVisibility = K.prototype.getVisibility;
    K.prototype.I = A;
    K.prototype.he = function() {
        return this.I
    };
    K.prototype.getZIndex = K.prototype.he;
    K.prototype.Ha = function(a) {
        var b = this.I;
        a !== b && (this.K(), this.I = a, this.invalidate(Me.Z_ORDER), this.dispatchEvent(new Ne(this.yb.Ih, a, b)));
        return this
    };
    K.prototype.setZIndex = K.prototype.Ha;
    K.prototype.U = A;

    function Qe(a) {
        var b = a.U,
            c, d, e;
        b || (c = (d = a.I) !== A, (b = a.Da) ? (b = Qe(b).slice(), b[0] |= c) : b = [c | 0], b.push(d || 0, (e = a.fh) !== A ? e : a.zb), a.U = b);
        return b
    }
    K.prototype.K = function() {
        this.U = A
    };

    function Re(a, b, c) {
        if (!c || a[0] | b[0])
            for (var d = a.length, e = b.length, f = lb(d, e), g, h = 1, k = 1 + c; h < f; h += k)
                if (g = a[h] - b[h]) return g;
        return c ? 0 : d - e
    }

    function Se(a, b) {
        return a.Xa(b)
    }
    K.compareZOrder = Se;
    K.prototype.Xa = function(a) {
        return this.je - a.je || Re(Qe(this), Qe(a), !1)
    };
    K.prototype.compareZOrder = K.prototype.Xa;
    p = K.prototype;
    p.previousSibling = x;
    p.nextSibling = x;
    p.fh = A;
    p.Da = x;
    p.Zh = function() {
        return this.Da
    };
    K.prototype.getParentGroup = K.prototype.Zh;
    K.prototype.ee = function() {
        for (var a = this, b; b = a.Da;) a = b;
        return a
    };
    K.prototype.getRootGroup = K.prototype.ee;
    K.prototype.contains = function(a) {
        return this === a
    };
    K.prototype.contains = K.prototype.contains;
    K.prototype.ia = function(a) {
        if (this.Da) throw new kc(this.ia, "Not allowed for a child of a group");
        K.u.ia.call(this, a)
    };
    K.prototype.setParentEventTarget = K.prototype.ia;
    K.prototype.l = x;
    K.prototype.Pa = function() {
        return this.l
    };
    K.prototype.getProvider = K.prototype.Pa;
    K.prototype.F = function(a, b) {
        var c = this.l,
            d, e;
        if (d = c !== a) {
            if (b && (c && !B(c, L) || a && !B(a, L))) throw new kc(b, "Only LocalObjectProvider allows an object transfers");
            e = this.type !== Pe.GROUP;
            c && (this.invalidate(Me.REMOVE), e && c.a(this));
            if (this.l = a) e && a.V(this), this.Fb = x, this.invalidate(Me.ADD)
        }
        return d
    };
    K.prototype.j = function() {
        return this.Fb || (this.Fb = new Le)
    };
    K.prototype.getInvalidations = K.prototype.j;
    K.prototype.ua = function(a) {
        var b = this.Pa(),
            c;
        (c = !!b) && b.invalidateObject(this, a);
        return c
    };
    K.prototype.invalidate = K.prototype.ua;
    K.prototype.D = function() {
        this.Da && this.Da.a(this);
        K.u.D.call(this)
    };
    K.prototype.getData = function() {
        return this.P
    };
    K.prototype.getData = K.prototype.getData;
    K.prototype.g = function(a) {
        this.P = a;
        return this
    };
    K.prototype.setData = K.prototype.g;

    function G(a, b, c, d) {
        Te(this, Wb(a, G, 0), Xb(b, G, 1), Wb(c, G, 2), Xb(d, G, 3))
    }
    v(G, bc);
    r("H.geo.Rect", G);
    G.prototype.qd = "POLYGON";
    G.prototype.Lb = function(a) {
        var b = this.ka,
            c = this.ga,
            d = this.ja,
            e = this.ha;
        a.push("(", c, " ", b, ",", e, " ", b, ",", e, " ", d, ",", c, " ", d, ",", c, " ", b, ")");
        return a
    };
    G.prototype.pa = function(a) {
        return this === a || !!a && this.ka === a.ka && this.ga === a.ga && this.ja === a.ja && this.ha === a.ha
    };
    G.prototype.equals = G.prototype.pa;
    G.prototype.clone = function() {
        return new G(this.ka, this.ga, this.ja, this.ha)
    };
    G.prototype.clone = G.prototype.clone;

    function Te(a, b, c, d, e) {
        a.ga = c;
        a.ha = e;
        b < d && (c = b, b = d, d = c);
        a.ka = b;
        a.ja = d;
        a.i = a.f = a.o = null;
        return a
    }
    G.prototype.tb = function() {
        this.i || (this.i = new gc(this.ka, this.ga));
        return this.i
    };
    G.prototype.getTopLeft = G.prototype.tb;
    G.prototype.rb = function() {
        this.f || (this.f = new gc(this.ja, this.ha));
        return this.f
    };
    G.prototype.getBottomRight = G.prototype.rb;
    G.prototype.F = function() {
        return this.ka
    };
    G.prototype.getTop = G.prototype.F;
    G.prototype.s = function() {
        return this.ja
    };
    G.prototype.getBottom = G.prototype.s;
    G.prototype.B = function() {
        return this.ga
    };
    G.prototype.getLeft = G.prototype.B;
    G.prototype.A = function() {
        return this.ha
    };
    G.prototype.getRight = G.prototype.A;
    G.prototype.Oa = function() {
        this.o || (this.o = new gc(this.ja + (this.ka - this.ja) / 2, Ue(this.ga, this.ab())));
        return this.o
    };
    G.prototype.getCenter = G.prototype.Oa;
    G.prototype.ab = function() {
        return Ve(this.ga, this.ha)
    };
    G.prototype.getWidth = G.prototype.ab;
    G.prototype.c = function() {
        return this.ka - this.ja
    };
    G.prototype.getHeight = G.prototype.c;
    G.prototype.g = function() {
        return this.ga > this.ha
    };
    G.prototype.isCDB = G.prototype.g;
    G.prototype.ed = function() {
        return !this.ab() && !this.c()
    };
    G.prototype.isEmpty = G.prototype.ed;
    G.prototype.S = function() {
        return new G(this.ka, this.ga, this.ja, this.ha)
    };
    G.prototype.l = function(a, b, c) {
        var d = this.Oa();
        c || (a = Wb(a, this.l, 0), b = Xb(b, this.l, 1));
        b = this.b(a, b, c);
        a = b.Oa();
        return a.lat === d.lat && a.lng === d.lng && this.c() === b.c() && this.ab() === b.ab()
    };
    G.prototype.containsLatLng = G.prototype.l;
    G.prototype.Vc = function(a, b) {
        b || hc(a, this.Vc, 0);
        return this.l(a.lat, a.lng, b)
    };
    G.prototype.containsPoint = G.prototype.Vc;
    G.prototype.j = function(a, b) {
        var c = this.Oa(),
            d, e;
        if (!b && !B(a, G)) throw new C(this.j, 0, a);
        e = this.wb(a, b);
        d = e.Oa();
        return d.lat === c.lat && d.lng === c.lng && this.c() === e.c() && this.ab() === e.ab()
    };
    G.prototype.containsRect = G.prototype.j;
    G.prototype.b = function(a, b, c, d) {
        if (!c) {
            if (D(a = Wb(a))) throw new C(this.b, 0, a);
            if (D(b = Xb(b))) throw new C(this.b, 1, b);
        }
        return We(this.ka, this.ga, this.ja, this.ha, a, b, a, b, d)
    };
    G.prototype.mergeLatLng = G.prototype.b;
    G.prototype.m = function(a, b, c) {
        b || hc(a, this.m, 0);
        return this.b(a.lat, a.lng, b, c)
    };
    G.prototype.mergePoint = G.prototype.m;
    G.prototype.wb = function(a, b, c) {
        if (!b && !B(a, G)) throw new C(this.wb, 0, a);
        return We(this.ka, this.ga, this.ja, this.ha, a.ka, a.ga, a.ja, a.ha, c)
    };
    G.prototype.mergeRect = G.prototype.wb;
    G.prototype.a = function(a, b, c, d, e, f) {
        e || (a = Wb(a, this.a, 0), b = Xb(b, this.a, 1), c = Wb(c, this.a, 2), d = Xb(d, this.a, 3));
        return We(this.ka, this.ga, this.ja, this.ha, a, b, c, d, f)
    };
    G.prototype.mergeTopLeftBottomRight = G.prototype.a;
    G.prototype.xc = function(a, b) {
        if (!b && !B(a, G)) throw new C(this.xc, 0, a);
        var c = this.ga <= this.ha,
            d = a.ga <= a.ha,
            e = this.ga < a.ha,
            f = a.ga < this.ha;
        return this.ja <= a.ka && a.ja <= this.ka && (!c && (!d || e || f) || !d && (e || f) || e && f)
    };
    G.prototype.intersects = G.prototype.xc;

    function Ve(a, b) {
        var c = b - a;
        return c + (0 > c ? 360 : 0)
    }

    function Ue(a, b) {
        var c = a + b / 2;
        return c - (180 < c ? 360 : 0)
    }

    function We(a, b, c, d, e, f, g, h, k) {
        var l, m, n;
        c = lb(c, g);
        a = mb(a, e);
        e = Ve(b, d);
        l = Ue(b, e);
        g = Ve(f, h);
        n = Ue(f, g) - l;
        n += 0 > n - 1E-6 ? 360 : 0;
        180 > n - 1E-6 ? (l = b, m = h) : (n = 360 - n, l = f, m = d);
        n = n + e / 2 + g / 2;
        360 <= n + 5E-7 ? (l = -180, m = 180) : n - 5E-7 < e ? (l = b, m = d) : n - 5E-7 < g && (l = f, m = h);
        return k ? Te(k, a, l, c, m) : new G(a, l, c, m)
    }
    G.merge = We;

    function Xe(a, b, c) {
        c || (hc(a, Xe, 0), hc(b, Xe, 1));
        return new G(a.lat, a.lng, b.lat, b.lng)
    }
    G.fromPoints = Xe;

    function fc(a, b) {
        if (!qa(a)) throw new C(fc, 0, a);
        var c = 1,
            d = a.length,
            e, f = null;
        if (0 < d)
            for (e = a[0], f = Xe(e, e, b); c < d; c++) e = a[c], f.b(e.lat, e.lng, b, f);
        return f
    }
    G.coverPoints = fc;

    function Ye(a, b) {
        if (!(b || a && null != a.length)) throw new C(Ye, 0, a);
        var c = 3,
            d = a.length,
            e;
        if (0 < d)
            for (e = new G(a[0], a[1], a[0], a[1]); c < d; c += 3) e.b(a[c], a[c + 1], b, e);
        return e
    }
    G.coverLatLngAlts = Ye;

    function Ze(a, b) {
        if (b && (!a || null == a.length)) throw new C(Ze, 0, a);
        var c = 1,
            d = a.length,
            e;
        if (0 < d)
            for (e = new G(a[0].ka, a[0].ga, a[0].ja, a[0].ha); c < d; c++) e.wb(a[c], b, e);
        return e
    }
    G.coverRects = Ze;
    G.prototype.v = function(a, b) {
        hc(a, this.v, 0);
        var c = this.ga,
            d = this.ka,
            e = this.ha,
            f = this.ja,
            g = this.Oa().lng,
            h = a.lat - f - (d - f) / 2,
            k = a.lng - g,
            k = 180 < k || -180 > k ? -(g + a.lng) : k,
            c = c + (0 > k ? 2 * k : 0),
            c = -180 > c ? 360 + c : c,
            e = e + (0 < k ? 2 * k : 0),
            e = 180 < e ? e - 360 : e,
            d = 0 < h ? d + 2 * h : d;
        90 <= d && (d = 90);
        f = 0 > h ? f + 2 * h : f; - 90 >= f && (f = -90);
        return b ? Te(b, d, c, f, e) : new G(d, c, f, e)
    };
    G.prototype.resizeToCenter = G.prototype.v;

    function $e(a, b, c, d, e) {
        this.j = a || 10;
        this.a = this.b = this.l = null;
        this.c = d || 0;
        this.f = e || 0;
        this.g = b || 1;
        this.i = c || 1;
        this.a = this.l = new af(null, 0, this.c - this.g, this.f - this.i, this.c + this.g, this.f + this.i);
        this.b = null
    }

    function bf(a, b) {
        for (var c, d, e, f, g, h, k, l = 0, m, n, q = 4, t; q--;) {
            t = q + 4;
            g = [];
            c = +!(q % 3);
            h = b[q];
            for (m = (d = a[q]).length; m--;) {
                e = d[m];
                if (f = e.Y)
                    for (n = f.length; n--;)((k = f[n][q]) > h) - c && (h = k);
                for (n = 4; n--;)
                    if (f = e[n]) c ? f[t] < h && g.push(f) : f[t] > h && g.push(f)
            }
            l += g.length;
            b[q] = h;
            a[q] = g
        }
        l && (b = bf(a, b));
        return b
    }
    $e.prototype.remove = function(a) {
        var b, c = a.a,
            d = c.Y;
        if (d && (b = d.indexOf(a), -1 !== b && (d.splice(b, 1), !d.length))) {
            delete c.Y;
            for (var e = this.a;
                (d = c.a) && !(c.Y || c[0] || c[1] || c[2] || c[3]);) c === e && (e = d), delete c.a, delete d[c.b], c = d;
            this.a = e;
            cf(this)
        }(b = 0 <= b) && df(this, a, !1);
        return b
    };

    function df(a, b, c) {
        var d, e;
        if (d = a.b)
            for (e = 4; e--;)
                if (e % 3 ? b[e] >= d[e] : b[e] <= d[e])
                    if (c) d[e] = b[e];
                    else {
                        a.b = null;
                        break
                    }
    }

    function ef(a, b, c, d, e, f, g) {
        var h = b[8],
            k = b[9];
        if (g && (e < h || e < b[5] && c >= h) && (f < k || f < b[6] && d >= k)) {
            var l = ef,
                h = (d >= k ? 2 : 0) | c >= h;
            b = b[h] || (b[h] = new af(b, h));
            c = l(a, b, c, d, e, f, g - 1)
        } else c = new ff(b, c, d, e, f), (b.Y || (b.Y = [])).push(c), df(a, c, !0), cf(a, b);
        return c
    }

    function cf(a, b) {
        var c = a.a,
            d;
        if (b) {
            if (d = b, d !== c)
                for (c = d; d = d.a;)
                    if (d.Y || 3 > !d[0] + !d[1] + !d[2] + !d[3]) c = d
        } else
            for (; !c.Y && 2 < !c[0] + !c[1] + !c[2] + !c[3];)
                if (d = c[0] || c[1] || c[2] || c[3]) c = d;
                else break;
        a.a = c
    }
    $e.prototype.bb = function(a, b, c, d) {
        var e = [];
        gf(this, this.a, e, a, b, c, d);
        return e
    };

    function gf(a, b, c, d, e, f, g) {
        var h, k, l = b.Y;
        k = b[7];
        var m = b[8],
            n = b[5],
            q = b[4],
            t = b[9],
            u = b[6],
            y;
        if (l)
            if (h = l.length, d > k || f < n || e > q || g < u)
                for (; h--;) k = l[h], n = k[3], q = k[0], u = k[1], y = k[2], n > f || u < d || q > g || y < e || c.push(k);
            else
                for (; h--;) c.push(l[h]);
        f >= m && (e <= t && b[1] && gf(a, b[1], c, d, e, f, g), g >= t && b[3] && gf(a, b[3], c, d, e, f, g));
        d <= m && (e <= t && b[0] && gf(a, b[0], c, d, e, f, g), g >= t && b[2] && gf(a, b[2], c, d, e, f, g))
    }

    function af(a, b, c, d, e, f) {
        a ? (this.a = a, this.b = b, b & 1 ? (c = a[8], e = a[5]) : (c = a[7], e = a[8]), b & 2 ? (d = a[9], f = a[6]) : (d = a[4], f = a[9])) : this.b = this.a = null;
        this[7] = c;
        this[5] = e;
        this[8] = (c + e) / 2;
        this[4] = d;
        this[6] = f;
        this[9] = (d + f) / 2
    }

    function ff(a, b, c, d, e) {
        this.id = ++hf;
        this.a = a;
        this[0] = c;
        this[1] = d;
        this[2] = e;
        this[3] = b
    }
    var hf = 0;

    function jf(a) {
        this.i = new $e(+a || 10, 180, 90, 0, 0);
        this.g = [];
        this.b = this.f = this.a = null
    }
    jf.prototype.c = 0;
    jf.prototype.S = function() {
        var a, b, c;
        if (!this.a) {
            c = [];
            var d;
            if (d = !this.f) {
                a = this.i;
                var e;
                !(e = a.b) && (d = a.a, d.Y || d[0] || d[1] || d[2] || d[3]) && (e = [d], e = bf([e, e, e, e], [d[6], d[7], d[4], d[5]]), a.b = e);
                d = a = e
            }
            d && (this.f = new G(-a[0], a[3], -a[2], a[1]));
            (b = this.f) && c.push(b);
            var f, g, h, k;
            if (!this.b && (k = (g = this.g).length)) {
                a = 90;
                d = 360;
                e = -90;
                for (f = 0; k--;) h = g[k], a = lb(a, h[0]), d = lb(d, h[3]), e = mb(e, h[2]), f = mb(f, h[1]);
                this.b = new G(-a, d, -e, f - 360)
            }(b = this.b) && c.push(b);
            if (b = c[0]) c[1] && (b = b.wb(c[1], !0)), this.a = b
        }
        return this.a
    };

    function kf(a, b, c, d, e, f) {
        f ? (f = new ff(null, e, -b, c + 360, -d), a.g.push(f), a.b && a.b.a(b, c, d, e, !0, a.b)) : (f = a.i, f = ef(f, f.l, c, -b, e, -d, f.j), a.f && a.f.a(b, c, d, e, !0, a.f));
        ++a.c;
        a.a = null;
        return f
    }
    jf.prototype.remove = function(a) {
        var b, c = !1;
        if (a.a) c = this.i.remove(a), this.f = null;
        else if (a = (b = this.g).indexOf(a), c = 0 <= a) b.splice(a, 1), this.b = null;
        c && (--this.c, this.a = null);
        return c
    };

    function lf(a, b, c, d, e) {
        a = a.g;
        var f = a.length,
            g, h = [],
            k, l;
        if (f)
            for (k = c + 360, l = e + 360; f--;) g = a[f], mf(g, b, c, d, e) ? h.push(g) : mf(g, b, k, d, l) && h.push(g);
        return h
    }

    function mf(a, b, c, d, e) {
        var f = a[0],
            g = a[1],
            h = a[2];
        return !(a[3] > e || g < c || f > d || h < b)
    }

    function nf(a, b) {
        var c, d, e, f;
        if (d = b.length) {
            c = a.length;
            for (e = {}; c--;) e[a[c].id] = 1;
            for (; d--;)(f = b[d]).id in e || a.push(f)
        }
    }

    function of (a, b) {
        var c = a.i,
            d = b.tb(),
            e = b.rb(),
            f = -d.lat,
            d = d.lng,
            g = -e.lat,
            e = e.lng,
            h;
        b.g() ? (h = c.bb(-180, f, e, g), nf(h, c.bb(d, f, 180, g)), nf(h, lf(a, f, e, g, d + 360))) : (h = c.bb(d, f, e, g), nf(h, lf(a, f, d, g, e)));
        return h
    };

    function F(a, b) {
        F.u.constructor.call(this);
        a && pf(a, F, 0);
        this.na = a || [];
        this.j = b;
        this.b = qf(this, 0, this.na.length)
    }
    v(F, bc);
    r("H.geo.LineString", F);

    function qf(a, b, c) {
        a = a.na;
        var d = 0;
        b = mb(b, 0);
        c = lb(c, a.length);
        c -= 2;
        for (b += 1; b < c;) d += tf(a[b], a[b += 3]);
        return d
    }
    F.prototype.o = function(a, b, c) {
        uf(this, a, b, c, this.o)
    };
    F.prototype.pushLatLngAlt = F.prototype.o;

    function uf(a, b, c, d, e) {
        var f = a.na.length;
        b = Wb(b, e);
        c = Xb(c, e);
        a.na.push(Wb(b, e), Xb(c, e), d === A ? 0 : Yb(d, e));
        f && (a.b += tf(a.na[f - 2], c));
        delete a.a;
        delete a.m
    }
    F.prototype.i = function(a, b, c) {
        c && pf(c, this.i, 2);
        var d;
        void 0 === b && (b = this.na.length);
        b && (this.b -= qf(this, a - 3, a + b + 3));
        d = c ? this.na.splice.apply(this.na, [a, b].concat(c)) : this.na.splice(a, b);
        c && (this.b += qf(this, a - 3, a + c.length + 3));
        b && !c && (this.b += qf(this, a - 3, a - 3));
        delete this.a;
        delete this.m;
        return d
    };
    F.prototype.spliceLatLngAlts = F.prototype.i;
    F.prototype.v = function(a, b, c, d) {
        this.i(a, 0, [b, c, d])
    };
    F.prototype.insertLatLngAlt = F.prototype.v;
    F.prototype.s = function(a) {
        this.i(a, 3)
    };
    F.prototype.removeLatLngAlt = F.prototype.s;
    F.prototype.c = function(a) {
        uf(this, a.lat, a.lng, a.alt, this.c)
    };
    F.prototype.pushPoint = F.prototype.c;
    F.prototype.C = function(a, b) {
        this.v(3 * a, b.lat, b.lng, b.alt)
    };
    F.prototype.insertPoint = F.prototype.C;
    F.prototype.N = function(a) {
        this.s(3 * a)
    };
    F.prototype.removePoint = F.prototype.N;
    F.prototype.g = function(a, b) {
        var c = this.na,
            d = 3 * a,
            e = c[d],
            f = c[d + 1],
            c = c[d + 2];
        b && (b.lat = e, b.lng = f, b.alt = c, void 0 !== c && this.j && (b.ctx = this.j));
        return b || new gc(e, f, c, null != c ? this.j : void 0)
    };
    F.prototype.extractPoint = F.prototype.g;
    F.prototype.B = function(a, b, c) {
        var d = this.na;
        b = b || 0;
        c = we(c, d.length / 3);
        for (var e = 3 * b; b < c;) a(d[e++], d[e++], d[e++], b++)
    };
    F.prototype.eachLatLngAlt = F.prototype.B;
    var tf = ac;
    F.isDBC = tf;
    F.prototype.l = function(a) {
        var b = this.b;
        a && (a = this.na, b += ac(a[a.length - 2], a[1]));
        return b
    };
    F.prototype.getDBCs = F.prototype.l;
    F.prototype.f = function() {
        return this.na.length / 3
    };
    F.prototype.getPointCount = F.prototype.f;
    F.prototype.A = function() {
        return this.na
    };
    F.prototype.getLatLngAltArray = F.prototype.A;
    F.prototype.a = x;
    F.prototype.S = function() {
        var a;
        if (!(a = this.a)) {
            a = this.na;
            var b = a.length,
                c = 3,
                d, e, f, g, h, k = x,
                l = We;
            if (3 <= b)
                for (d = e = a[0], f = g = a[1], k = new G(d, f, e, g); c < b; c += 3) {
                    d = a[c - 3];
                    f = a[c - 2];
                    e = a[c];
                    g = a[c + 1];
                    if (f > g && 180 < g - f || f < g && -180 > f - g || g < f && 180 > rb(g - f)) h = f, f = g, g = h;
                    d < e && (h = d, d = e, e = h);
                    l(k.ka, k.ga, k.ja, k.ha, d, f, e, g, k)
                }
            a = this.a = k
        }
        return a
    };
    F.prototype.getBounds = F.prototype.S;
    F.prototype.F = function() {
        return this.a !== x
    };
    F.prototype.hasBounds = F.prototype.F;

    function pf(a, b, c) {
        for (var d = a.length, e = !(d % 3), f; e && d;) e = !(D(a[--d] = Yb((f = a[d]) === A ? 0 : f)) || D(a[--d] = Xb(a[d])) || D(a[--d] = Wb(a[d])));
        if (!e && b) throw new C(b, c, a);
    }

    function vf(a) {
        var b = new F,
            c = 0,
            d = a.length;
        if (d % 2) throw new C(vf, 0, a);
        for (; c < d;) uf(b, a[c++], a[c++], 0, vf);
        return b
    }
    F.fromLatLngArray = vf;
    F.prototype.pa = function(a) {
        var b = this === a,
            c, d;
        if (!b && (b = B(a, F)))
            for (c = this.na, a = a.na, b = (d = c.length) === a.length; b && d--;) b = c[d] == a[d];
        return b
    };
    F.prototype.equals = F.prototype.pa;

    function wf(a, b) {
        return a.ke - b.ke
    }

    function xf(a) {
        var b = a.m,
            c, d, e, f, g, h, k;
        if (!b)
            for (b = a.m = new jf, c = 0, a = a.na, d = a.length, e = 0; e < d; e += 3) {
                f = a[e];
                g = a[e + 1];
                if (e) {
                    var l = void 0,
                        m = void 0,
                        n = void 0,
                        q = void 0;
                    k < g ? (l = k, n = g) : (l = g, n = k);
                    h < f ? (m = f, q = h) : (m = h, q = f);
                    h = kf(b, m, l, q, n, 180 < n - l);
                    h.ke = c++
                }
                h = f;
                k = g
            }
        return b
    }

    function yf(a, b) {
        var c, d, e = a.na,
            f, g, h, k = -2,
            l = [],
            m, n, q;
        c = of (xf(a), b).sort(wf);
        f = c.length;
        for (g = 0; g < f; g++) d = c[g], d = d.ke, h = 3 * d, d > k + 1 && (m = [e[h], e[h + 1]], l.push(m)), k = d, m.push(e[h + 3], e[h + 4]);
        if (a.b) {
            e = [];
            f = l.length;
            for (g = 0; g < f; g++)
                if (m = l[g], k = m.length) {
                    d = [];
                    for (c = 0; c < k; c += 2) h = m[c], n = m[c + 1], d.push(h, n), q = m[c - 1], c && ac(n, q) && (e.push(d), d = [], q += 0 > q ? 360 : -360, d.push(m[c - 2], q, h, n));
                    e.push(d)
                }
            l = e
        }
        return l
    }
    F.prototype.qd = "LINESTRING";
    F.prototype.Lb = function(a) {
        var b = this.na,
            c = b.length,
            d;
        if (c) {
            a.push("(");
            for (d = 0; d < c; d += 3) d && a.push(","), a.push(b[d + 1], " ", b[d]);
            a.push(")")
        } else a.push("EMPTY");
        return a
    };
    r("H.geo.Strip", F);

    function zf(a) {
        var b, c, d, e;
        if (a) {
            b = Af;
            for (e = B(a, zf); b--;)
                if (c = Bf[b], a.hasOwnProperty(c))
                    if (d = a[c], e) this[c] = d;
                    else {
                        if ((d = Cf[b](d)) === Df) throw new C(zf, 0, c + ": " + a[c]);
                        d !== this[c] && d !== A && (this[c] = d)
                    }
            b = e ? a.b : this.lineWidth && ue(this.strokeColor);
            b || (this.b = b);
            b = e ? a.c : ue(this.fillColor);
            b || (this.c = b);
            b = e ? a.a : "none" !== this.strokeColor && this.lineWidth;
            b || (this.a = b)
        }
        Na(this)
    }
    r("H.map.SpatialStyle", zf);
    zf.prototype.c = !0;
    zf.prototype.b = !0;
    zf.prototype.a = !0;
    var Bf = [];
    zf.prototype[Bf[0] = "strokeColor"] = "rgba(0,85,170,.6)";
    zf.prototype[Bf[1] = "fillColor"] = "rgba(0,85,170,.4)";
    zf.prototype[Bf[2] = "lineWidth"] = 2;
    zf.prototype[Bf[3] = "lineCap"] = "round";
    zf.prototype[Bf[4] = "lineJoin"] = "miter";
    zf.prototype[Bf[5] = "miterLimit"] = 10;
    zf.prototype[Bf[6] = "lineDash"] = De;
    zf.prototype[Bf[7] = "lineDashOffset"] = 0;
    var Af = Bf.length;
    zf.prototype.pa = function(a) {
        var b, c;
        b = this === a;
        if (!b && a) {
            for (b = 0; b < Af && (c = Bf[b], this[c] === a[c]); b++);
            b = b === Af
        }
        return b
    };
    zf.prototype.equals = zf.prototype.pa;
    zf.prototype.f = function(a) {
        var b;
        a ? (b = {}, Ca(b, this, a)) : b = this;
        return new zf(b)
    };
    zf.prototype.getCopy = zf.prototype.f;
    var Df = Na({}),
        Cf = [function(a) {
            return a ? La(a) : Df
        }, function(a) {
            return a ? La(a) : Df
        }, function(a) {
            return 0 <= a && 100 >= a ? +a : Df
        }, function(a) {
            return "butt" === (a = La(a)) || "square" === a || "round" === a ? a : Df
        }, function(a) {
            return "round" === a || "bevel" === a || "miter" === a ? a : Df
        }, function(a) {
            return 0 < a && 100 >= a ? +a : Df
        }, function(a) {
            return a && a.every && a.every(bb) ? a : Df
        }, function(a) {
            return D(+a) ? Df : +a
        }];
    zf.MAX_LINE_WIDTH = 100;
    var Ef = new zf;
    zf.DEFAULT_STYLE = Ef;

    function Ff(a) {
        var b, c, d;
        if (a) {
            b = B(a, Ff);
            for (c in a) c in this && (d = a[c], d !== this[c] && ("fillColor" === c || 0 < (d = +d)) && (this[c] = d));
            a = b ? a.fd : !!(ue(this.fillColor) && this.width && this.width);
            a || (this.fd = a)
        }
        Na(this)
    }
    r("H.map.ArrowStyle", Ff);
    Ff.prototype.fd = !0;
    Ca(Ff.prototype, {
        fillColor: "rgba(255,255,255,.75)",
        width: 1.2,
        length: 1.6,
        frequency: 5
    });
    Ff.prototype.pa = function(a) {
        var b = this === a;
        !b && a && (b = a.width === this.width && a.fillColor === this.fillColor && a.length === this.length && a.frequency === this.frequency);
        return b
    };
    Ff.prototype.equals = Ff.prototype.pa;

    function Gf(a, b) {
        var c;
        Gf.u.constructor.call(this, b);
        b && this.O(b.style);
        a && (this.B = !0);
        b && (c = b.arrows) && this.Vb(c)
    }
    v(Gf, K);
    r("H.map.Spatial", Gf);
    Gf.prototype.type = Pe.SPATIAL;
    Gf.prototype.je = 0;
    Gf.prototype.style = Ef;
    Gf.prototype.Na = function() {
        return this.style
    };
    Gf.prototype.getStyle = Gf.prototype.Na;
    Gf.prototype.O = function(a) {
        var b = this.style,
            c = !0;
        a ? this.style = B(a, zf) ? a : new zf(a) : this.style ? delete this.style : c = !1;
        c && (this.dispatchEvent(new Ne("stylechange", this.style, b)), this.invalidate(Me.VISUAL));
        return this
    };
    Gf.prototype.setStyle = Gf.prototype.O;
    Gf.prototype.jc = function() {
        return this.s
    };
    Gf.prototype.getArrows = Gf.prototype.jc;
    Gf.prototype.Vb = function(a) {
        var b = this.s,
            c = !1;
        !a && b ? (delete this.s, c = !0) : !a || b && b.pa(a) || (this.s = new Ff(a), c = !0);
        c && "none" !== this.style.strokeColor && this.ua(1);
        return this
    };
    Gf.prototype.setArrows = Gf.prototype.Vb;

    function Hf(a, b) {
        var c = !1,
            d = !1,
            e;
        if (b.length) {
            for (c = 0; c < b.length; c++)
                if (b[c] !== If) {
                    d = !0;
                    break
                }
            c = a.style;
            c = d ? c.b || c.c && a.B || (e = a.s || !1) && c.a && e.fd : c.c
        }
        return c && a.getVisibility(!0)
    }
    Gf.prototype.B = !1;
    Gf.prototype.be = function() {
        return this.B
    };
    Gf.prototype.isClosed = Gf.prototype.be;
    Gf.prototype.getGeometriesForTile = Gf.prototype.ec;
    Gf.prototype.ba = function() {
        return x
    };
    Gf.prototype.getLabels = Gf.prototype.ba;

    function Jf(a, b) {
        Jf.u.constructor.call(this, a, b)
    }
    v(Jf, Gf);
    r("H.map.GeoShape", Jf);
    Jf.prototype.getStrip = Jf.prototype.b;
    Jf.prototype.setStrip = Jf.prototype.f;
    Jf.prototype.getBounds = Jf.prototype.S;

    function Kf(a, b, c, d) {
        var e = [],
            f = b.length,
            g, h;
        for (g = 0; g < f; g++) h = b[g], h.length && e.push(Lf(a, h, c, d));
        return e
    }

    function Lf(a, b, c, d) {
        var e, f = [],
            g = b.length,
            h = 0;
        a.Va = 0;
        for (e = e || 0; h < g;) f.push(Mf(a, b[h++], b[h++], e, d));
        c && f.push(Mf(a, b[0], b[1], e, d));
        return f
    }

    function Mf(a, b, c, d, e) {
        var f = a.Va;
        f && 180 < rb(f - c) && (c += 0 > f ? -360 : 360);
        a.Va = c;
        return e.f(b, c + d)
    }

    function Nf(a, b, c) {
        for (var d = b, e, f = a.length + b, g, h; d--;) {
            b = a[d];
            g = b.length;
            for (e = Array(g); g--;) h = b[g], e[g] = new M(h.x + c, h.y);
            a[--f] = e
        }
    }
    var Of = new F([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    function Pf(a) {
        Ua(this, Pf);
        Pf.u.constructor.call(this);
        this.ma = Qf(this, a, this.constructor, 0)
    }
    v(Pf, bc);
    r("H.geo.MultiGeometry", Pf);
    Pf.prototype.splice = function(a, b, c) {
        a = [a];
        b !== A && a.push(b);
        c && (b = Qf(this, c, this.splice, 2), a = a.concat(b));
        this.a = x;
        return this.ma.splice.apply(this.ma, a)
    };
    Pf.prototype.splice = Pf.prototype.splice;
    Pf.prototype.f = function(a) {
        var b = this.ma.length;
        if (!(0 <= a && a < b)) throw new ec(this.f, a, [0, b - 1]);
        this.a = x;
        return this.ma.splice(a, 1)[0]
    };
    Pf.prototype.removeAt = Pf.prototype.f;
    Pf.prototype.remove = function(a) {
        a = this.ma.indexOf(a);
        var b;
        0 <= a && (b = this.ma.splice(a, 1)[0], this.a = x);
        return b || x
    };
    Pf.prototype.remove = Pf.prototype.remove;
    Pf.prototype.j = function() {
        return this.ma
    };
    Pf.prototype.getGeometries = Pf.prototype.j;
    Pf.prototype.push = function(a) {
        var b = Qf(this, [a], this.push, 0)[0];
        this.a && (this.a = this.a.wb(a.S()));
        this.ma.push(b)
    };
    Pf.prototype.push = Pf.prototype.push;
    Pf.prototype.S = function() {
        var a;
        if (!(a = this.a)) {
            a = x;
            var b, c;
            if (this.ma.length)
                for (a = this.ma[0].S(), c = 1; c < this.ma.length; c++)
                    if (b = this.ma[c].S()) a = a ? a.wb(b) : b
        }
        return this.a = a
    };
    Pf.prototype.getBounds = Pf.prototype.S;
    Pf.prototype.a = x;

    function Qf(a, b, c, d) {
        var e, f = [];
        if (!Za(b)) throw new C(c, d);
        for (e = 0; e < b.length; e++)
            if (a.c(b[e])) f.push(a.l(b[e]));
            else throw new C(c, d);
        return f
    }
    Pf.prototype.c = function(a) {
        return B(a, this.b)
    };
    Pf.prototype.l = function(a) {
        return a
    };
    Pf.prototype.pa = function(a) {
        var b = this === a,
            c, d;
        if (!b && (b = B(a, this.constructor)))
            for (c = this.ma, a = a.ma, b = (d = c.length) === a.length; b && d--;) b = c[d].pa(a[d]);
        return b
    };
    Pf.prototype.equals = Pf.prototype.pa;
    Pf.prototype.Lb = function(a) {
        var b = this.ma,
            c = b.length,
            d, e, f = !1;
        if (c) {
            a.push("(");
            for (d = 0; d < c; d++)(e = 0 < d && f) && a.push(","), b[d].Lb(a), "EMPTY" === a[a.length - 1] ? a.splice(-1 - e, 1 + e) : f = !0;
            f ? a.push(")") : a.splice(-1, 1, "EMPTY")
        } else a.push("EMPTY");
        return a
    };
    Pf.prototype.toString = function() {
        return this.Lb(["MULTI", this.b.prototype.qd, " "]).join("")
    };

    function Rf(a) {
        Rf.u.constructor.call(this, a)
    }
    v(Rf, Pf);
    r("H.geo.MultiPolygon", Rf);
    Rf.prototype.b = E;

    function Sf(a, b, c) {
        this.Ra = a;
        b !== A && (this.a = b);
        c !== A && (this.b = c)
    }
    Sf.prototype.a = Lb;
    Sf.prototype.b = Lb;
    var If = Oa(new Sf([])),
        Tf = Na([]);

    function Uf(a, b) {
        Uf.u.constructor.call(this, !0, b);
        B(a, F) ? this.c(new E(a)) : this.c(a)
    }
    v(Uf, Jf);
    r("H.map.Polygon", Uf);
    Uf.prototype.i = x;
    Uf.prototype.Ca = function() {
        return this.i
    };
    Uf.prototype.getGeometry = Uf.prototype.Ca;
    Uf.prototype.c = function(a) {
        var b;
        a === x || B(a, E) ? b = !1 : (B(a, Rf, this.c, 0), b = !0);
        this.m = b;
        b = this.i;
        this.i = a;
        b !== x && this.ua(Me.SPATIAL);
        return this
    };
    Uf.prototype.setGeometry = Uf.prototype.c;
    Uf.prototype.b = function() {
        var a = B(this.i, E) ? this.i : this.i.ma[0];
        jb(this.b, "See H.map.Polygon#getGeometry");
        return a.$a
    };
    Uf.prototype.getStrip = Uf.prototype.b;
    Uf.prototype.f = function(a) {
        var b;
        jb(this.f, "See H.map.Polygon#setGeometry");
        B(a, F, this.f, 0);
        if (3 > a.f()) throw new C(this.f, 0);
        b = this.b();
        this.c(new E(a));
        this.dispatchEvent(new Ne("stripchange", this.b(), b));
        return this
    };
    Uf.prototype.setStrip = Uf.prototype.f;
    Uf.prototype.S = function() {
        return this.Ca().S()
    };
    Uf.prototype.getBounds = Uf.prototype.S;
    Uf.prototype.ec = function(a) {
        var b, c = this.Ca(),
            d, e, f;
        if (this.m)
            for (c = c.ma, f = 0, e = c.length; f < e; f++) {
                if (d = Vf(this, c[f], a, c[f].hc)) b || (b = []), b.push(d)
            } else(d = Vf(this, c, a, Wf(this))) && (b = [d]);
        return b
    };
    Uf.prototype.getGeometriesForTile = Uf.prototype.ec;

    function Vf(a, b, c, d) {
        var e, f, g, h, k = 0,
            l = !0;
        if (e = Xf(a, b.$a, c, d, b.S())) {
            f = new Sf(e);
            g = b.lb;
            if (h = g.length)
                for (f.a = f.Ra.length; k < h; k++)
                    if (e = Xf(a, g[k], c, d, b.ig(k))) f.Ra = f.Ra.concat(e);
            h = f.Ra.length;
            for (k = 0; k < h; k++)
                if (f.Ra[k] !== Tf) {
                    l = !1;
                    break
                }
            l && (f = k % 2 ? If : A)
        }
        return f
    }

    function Xf(a, b, c, d, e) {
        var f = c.j(),
            g, h = Yf(b, e);
        g = c.B();
        a = Kf(a, h, !0, g);
        if (360 === e.ab() && 1 === b.l(!0) % 2) {
            b = a;
            a = c.j();
            var k, l, m;
            b[0][1].x > b[0][b[0].length - 1].x && (b[0] = b[0].reverse());
            l = [];
            k = b[0].length - 1;
            for (h = 0; h < k; h++) m = b[0][h], l[h] = new M(m.x - 2 * g.w, m.y), l[h + k] = new M(m.x - g.w, m.y), l[h + 2 * k] = new M(m.x, m.y), l[h + 3 * k] = new M(m.x + g.w, m.y), l[h + 4 * k] = new M(m.x + 2 * g.w, m.y);
            b[0] = l;
            g = g.f(d, 0);
            g.y = 2 * a[d === cc.NORTH ? "top" : "bottom"];
            d = g.clone();
            g.x = b[0][b[0].length - 1].x + 1;
            d.x = b[0][0].x - 1;
            b[0].push(g, d);
            a = b
        }
        b = a;
        d = f.left;
        g = f.top;
        a = f.right;
        f = f.bottom;
        if (Zf(b, d, g, a, f, !0).length) {
            if (!c.s().j(e)) {
                c = b;
                e = [new M(d, g), new M(a, g), new M(a, f), new M(d, f)];
                f = [];
                for (d = c.length; d--;) {
                    b = c[d];
                    l = h = void 0;
                    g = $f(e);
                    b = $f(b);
                    var n = m = void 0,
                        q = void 0,
                        t = void 0,
                        u = void 0,
                        y = void 0,
                        J = q = a = void 0;
                    k = a = void 0;
                    a = {};
                    k = h = 1;
                    l = 0;
                    l = ~~(1 * l);
                    switch (l) {
                        case 1:
                            k = h = 0;
                            break;
                        case 2:
                            h = 0;
                            k = 1;
                            break;
                        case 3:
                            h = 1, k = 0
                    }
                    l = k;
                    k = h;
                    var T = t = void 0,
                        q = m = h = void 0;
                    if (b && g) {
                        b.zd = ag(b.x, b.y, null, bg(b));
                        g.zd = ag(g.x, g.y, null, bg(g));
                        for (m = b; m.next; m = m.next)
                            if (!m.bb)
                                for (n = g; n.next; n =
                                    n.next) !n.bb && (t = cg(m.next), T = cg(n.next), q = dg(m, t, n, T, a)) && (q = a.Kh, J = a.Zf, u = a.Hi, y = a.Ii, q = ag(u, y, null, null, null, null, 1, 0, 0, q), eg(q, m, t), t = ag(u, y, null, null, null, null, 1, 0, 0, J), eg(t, n, T), q.df = t, t.df = q);
                        a = fg(b, g);
                        k && (a = 1 - a);
                        for (m = b; m; m = m.next) m.bb && (m.Ce = a, a = 1 - a);
                        a = fg(g, b);
                        l && (a = 1 - a);
                        for (n = g; n.next; n = n.next) n.bb && (n.Ce = a, a = 1 - a);
                        gg(b);
                        for (gg(g);
                            (a = hg(b)) != b;) {
                            for (m = null; !a.ie; a = a.df) {
                                for (k = a.Ce;;) {
                                    m = ag(a.x, a.y, m);
                                    a.ie = 1;
                                    a = k ? a.next : a.nb;
                                    if (!a) break;
                                    if (a.bb) {
                                        a.ie = 1;
                                        break
                                    }
                                }
                                if (!a) break
                            }
                            m.ef = h;
                            h = m
                        }
                        g = h
                    } else g =
                        void 0;
                    if (g)
                        for (b = ig(g), f.push(b); g.ef;) g = g.ef, b = ig(g), f.push(b)
                }
                b = f
            }
        } else c = jg(d, g, b[0]), b[1] && (c ^= jg(d, g, b[1])), b = c ? [Tf] : A;
        return b
    }

    function jg(a, b, c) {
        var d, e, f, g, h, k, l, m;
        e = g = c[0].x;
        f = h = c[0].y;
        d = 1;
        for (m = c.length; d < m; d++) k = c[d].x, l = c[d].y, k > g ? g = k : k < e && (e = k), l > h ? h = l : l < f && (f = l);
        return e <= a && a <= g && f <= b && b <= h ? 1 === fg({
            x: a,
            y: b
        }, c.concat(c[0])) : !1
    }

    function ig(a) {
        var b = [],
            c, d = a,
            e, f;
        do {
            e = nb(100 * (d.ti ? d.ti : d.x)) / 100;
            f = nb(100 * (d.ui ? d.ui : d.y)) / 100;
            if (!c || .01 < tb(ub(c.x - e, 2) + ub(c.y - f, 2))) c = new M(e, f), b.push(c);
            d = d.next
        } while (d && d !== a);
        return b
    }
    Uf.prototype.kb = x;
    Uf.prototype.A = function(a) {
        a = a ? cc.NORTH : cc.SOUTH;
        jb(this.A, "See H.geo.Polygon#setPoleCovering");
        this.Ub !== a && (this.Ub = a, this.m || this.ua(Me.SPATIAL));
        return this
    };
    Uf.prototype.setNorthPoleCovering = Uf.prototype.A;
    Uf.prototype.Ya = function() {
        jb(this.Ya, "See H.geo.Polygon#getPoleCovering");
        return Wf(this) === cc.NORTH
    };
    Uf.prototype.getNorthPoleCovering = Uf.prototype.Ya;

    function Wf(a) {
        var b = a.Ub;
        b === A && (b = a.m ? cc.NORTH : a.Ca().hc);
        return b
    }

    function Yf(a, b) {
        var c, d, e = b.ab();
        c = [
            []
        ];
        d = a.na;
        var f = [],
            g = d.length,
            h, k, l, m = !1;
        for (h = 0; h < g; h += 3) k = d[h], l = d[h + 1], m || 180 != rb(l) || (f.push(k), f.push(l), f.push(k), f.push(-l), m = !0), f.push(k), f.push(l);
        d = f;
        360 > e && -180 == b.ga && (b = new G(b.ka, 180, b.ja, b.ha));
        360 > e && 180 == b.ha && (b = new G(b.ka, b.ga, b.ja, -180));
        if (b.g()) {
            e = d;
            k = e.length;
            d = -1;
            for (f = 0; f < k - 2; f += 2)
                if (ac(e[f + 1], e[f + 3])) {
                    d = f + 2;
                    break
                } - 1 === d && ac(e[k - 1], e[1]) && (d = k); - 1 !== d && (g = e[d - 2], f = e[d - 1], h = e[d % k], m = e[(d + 1) % k], 180 !== rb(g) && 180 !== rb(h) && (l = rb(h - g), k = rb(m -
                f), k += 180 < k ? -360 : 0, m = rb(180 - m), m += 180 < m ? -360 : 0, k && m && (l /= rb(k) / rb(m), g = h + (h > g ? -l : l), f = 0 < f ? 180 : -180, e.splice(d, 0, g, f, g, -f))));
            d = e
        }
        c[0] = kg([].concat(d), b.ga);
        360 > b.ab() && b.Vc(new gc(b.ka, 180)) && (d = kg([].concat(d), b.ha), c.push(d));
        return c
    }
    Uf.prototype.Tb = function() {
        var a = this.Ca(),
            b, c, d;
        jb(Uf.prototype.Tb);
        if (this.m)
            for (b = a.ma, d = b.length, a = [], c = 0; c < d; c++) a = a.concat(Yf(b[c].$a, b[c].S()));
        else a = Yf(a.$a, a.S());
        return a
    };
    Uf.prototype.clip = Uf.prototype.Tb;

    function kg(a, b) {
        for (var c = [], d = Number.POSITIVE_INFINITY, e = -1, f, g = a.length, c = 0; c < g; c += 2) f = rb(a[c + 1] - b), f += 180 < f ? 360 - f : f, f < d && (d = f, e = c);
        return 0 < c ? (c = a.splice(e, a.length - e), c.concat(a)) : a
    };

    function lg(a, b, c) {
        lg.u.constructor.call(this, Of, c);
        this.Za(a);
        this.wa(b);
        c && "precision" in c && this.sa(c.precision)
    }
    v(lg, Uf);
    r("H.map.Circle", lg);
    lg.prototype.Za = function(a) {
        (a = ic(a)).pa(this.o) || (this.o = a, mg(this))
    };
    lg.prototype.setCenter = lg.prototype.Za;
    lg.prototype.Oa = function() {
        return this.o
    };
    lg.prototype.getCenter = lg.prototype.Oa;
    lg.prototype.wa = function(a) {
        if (D(a = Qb(a, 0, 6371000.79 * Db / 2))) throw new C(this.wa, 0, a);
        this.Ba !== a && (this.Ba = a, mg(this))
    };
    lg.prototype.setRadius = lg.prototype.wa;
    lg.prototype.Zd = function() {
        return this.Ba
    };
    lg.prototype.getRadius = lg.prototype.Zd;
    lg.prototype.a = 60;
    lg.prototype.sa = function(a) {
        if (!ab(a)) throw new C(this.sa, 0, a);
        this.a !== (a = Qb(nb(a), 4, 360)) && (this.a = a, mg(this))
    };
    lg.prototype.setPrecision = lg.prototype.sa;
    lg.prototype.Yd = function() {
        return this.a
    };
    lg.prototype.getPrecision = lg.prototype.Yd;
    lg.prototype.A = function() {
        return this
    };
    lg.prototype.setNorthPoleCovering = lg.prototype.A;
    lg.prototype.c = function() {
        return this
    };
    lg.prototype.setGeometry = lg.prototype.c;
    lg.prototype.Ca = function() {
        this.i || lg.u.c.call(this, ng(this));
        return this.i
    };
    lg.prototype.getGeometry = lg.prototype.Ca;
    lg.prototype.f = function() {
        return this
    };
    lg.prototype.setStrip = lg.prototype.f;
    lg.prototype.b = function() {
        return this.Ca().$a
    };
    lg.prototype.getStrip = lg.prototype.b;

    function mg(a) {
        a.i !== x && lg.u.c.call(a, ng(a))
    }

    function ng(a) {
        var b = a.o,
            c = b.lat,
            d = a.Ba,
            e = 0,
            f = new F;
        if (90 === rb(c))
            for (c = b.Gf(0, d, !0).lat; 360 > e; e += 120) f.o(c, e - 180, A);
        else
            for (a = a.a, a = 360 / a; 360 > e; e += a) f.c(b.Gf(e, d, !0));
        b = new E(f);
        0 > c && b.i(cc.SOUTH);
        return b
    };

    function og(a) {
        og.u.constructor.call(this, a)
    }
    v(og, Pf);
    r("H.geo.MultiLineString", og);
    og.prototype.b = F;

    function pg(a, b) {
        pg.u.constructor.call(this, !1, b);
        this.c(a)
    }
    v(pg, Jf);
    r("H.map.Polyline", pg);
    pg.prototype.S = function() {
        return this.a.S()
    };
    pg.prototype.getBounds = pg.prototype.S;
    pg.prototype.f = function(a) {
        var b;
        jb(this.f, "See H.map.Polyline#setGeometry");
        qg(a, this.f);
        b = this.b();
        this.c(a);
        this.dispatchEvent(new Ne("stripchange", this.b(), b));
        return this
    };
    pg.prototype.setStrip = pg.prototype.f;
    pg.prototype.b = function() {
        jb(this.b, "See H.map.Polyline#getGeometry");
        return B(this.a, F) ? this.a : this.a.ma[0]
    };
    pg.prototype.getStrip = pg.prototype.b;
    pg.prototype.a = x;
    pg.prototype.c = function(a) {
        var b = this.c,
            c, d, e;
        if (B(a, og))
            if (c = a.ma, d = c.length)
                for (e = 0; e < d; e++) qg(c[e], b);
            else throw new C(b, 0);
        else qg(a, b);
        this.m = !!c;
        this.a = a;
        this.ua(Me.SPATIAL);
        return this
    };
    pg.prototype.setGeometry = pg.prototype.c;
    pg.prototype.Ca = function() {
        return this.a
    };
    pg.prototype.getGeometry = pg.prototype.Ca;
    pg.prototype.i = function(a) {
        var b = this.a;
        return yf(this.m ? b.ma[0] : b, a)
    };
    pg.prototype.clip = pg.prototype.i;
    pg.prototype.ec = function(a) {
        var b;
        b = this.a;
        var c, d = [];
        if (this.m)
            for (b = b.ma, c = b.length; c--;) rg(this, b[c], a, d);
        else rg(this, b, a, d);
        return d.length ? d : A
    };
    pg.prototype.getGeometriesForTile = pg.prototype.ec;

    function qg(a, b) {
        if (!B(a, F) || 2 > a.f()) throw new C(b, 0);
    }

    function rg(a, b, c, d) {
        var e = yf(b, c.s()),
            f;
        e.length && (b = c.B(), a = Kf(a, e, !1, b), e = a.length) && (f = c.j(), b = b.w, c.x || Nf(a, e, -b), c.x === (1 << c.z) - 1 && Nf(a, e, b), c = Zf(a, f.left, f.top, f.right, f.bottom, !1), c.length && d.push(new Sf(c)))
    };

    function sg(a) {
        sg.u.constructor.call(this, a)
    }
    v(sg, Pf);
    r("H.geo.MultiPoint", sg);
    sg.prototype.c = function(a) {
        return hc(a)
    };
    sg.prototype.l = function(a) {
        return B(a, gc) ? a : ic(a)
    };
    sg.prototype.b = gc;

    function tg(a, b, c) {
        var d, e = 6;
        if (b) {
            for (d = ' expected close to: "' + b; e--;) b = a.a.next(), -1 !== b && (d += String.fromCharCode(b));
            d += '"'
        }
        throw new C(ug, 0, "- Malformed WKT: " + (d ? c + d : "unexpected end of stream"));
    }
    var vg = {
        Eh: " ",
        Ch: "(",
        Dh: ")",
        sh: ",",
        wh: ""
    };
    Object.keys(vg).reduce(function(a, b) {
        a[vg[b]] = !0;
        return a
    }, Ka());

    function wg(a, b) {
        var c = a.next(),
            d = b ? ")" : "(";
        c !== d && tg(a, c, '"' + d + '"')
    }

    function xg(a) {
        return "," === yg(a) ? (a.next(), !0) : !1
    }

    function zg(a, b, c, d, e) {
        var f, g, h = 2 + b + c;
        for (g = 1; g <= h; g++)(c = a.next()) ? (f = +c) !== f ? tg(a, c, "number") : 1 === g ? d[e + 1] = f : 2 === g ? d[e + 0] = f : 3 === g && (d[e + 2] = f) : tg(a, c);
        b || (d[e + 2] = 0)
    }
    var Ag = [];

    function Bg(a, b, c, d) {
        d || wg(a, 0);
        zg(a, b, c, Ag, 0);
        d || wg(a, 1);
        return new gc(Ag[0], Ag[1], b ? Ag[2] : A)
    }

    function Cg(a, b, c) {
        var d = [];
        wg(a, 0);
        do zg(a, b, c, d, d.length); while (xg(a));
        wg(a, 1);
        return new F(d)
    }

    function Dg(a, b, c) {
        var d, e;
        wg(a, 0);
        d = Cg(a, b, c);
        if (xg(a)) {
            e = [];
            do e.push(Cg(a, b, c)); while (xg(a))
        }
        wg(a, 1);
        return new E(d, e)
    }
    var Eg = [],
        Fg = [Dg],
        Gg = [Bg],
        Hg = {
            POINT: Gg,
            LINESTRING: [Cg],
            POLYGON: Fg,
            MULTIPOINT: [Bg, sg],
            MULTILINESTRING: [Cg, og],
            MULTIPOLYGON: [Dg, Rf],
            GEOMETRY: Eg,
            GEOMETRYCOLLECTION: Eg,
            CIRCULARSTRING: Eg,
            COMPOUNDCURVE: Eg,
            CURVEPOLYGON: Eg,
            MULTICURVE: Eg,
            MULTISURFACE: Eg,
            CURVE: Eg,
            SURFACE: Eg,
            POLYHEDRALSURFACE: Eg,
            TIN: Eg,
            TRIANGLE: Eg
        },
        Ig = {
            Z: 1,
            M: 2,
            ZM: 3
        };

    function ug(a) {
        a = new Jg(a);
        var b, c, d, e, f;
        c = a.next();
        (b = Hg[c.toUpperCase()]) || tg(a, c, "type name");
        if (b !== Eg) {
            c = yg(a);
            c = Ig[c.toUpperCase()];
            d = c & 1;
            e = c >> 1;
            d | e && a.next();
            c = yg(a);
            if ("EMPTY" === c) a.next(), (d = b[1]) ? f = new d([]) : b !== Gg && (f = new F([]), b === Fg && (f = new E(f)));
            else if ("(" === c) {
                f = b[0];
                b = b[1];
                var g, h;
                if (b) {
                    g = [];
                    wg(a, 0);
                    if (f === Bg) {
                        h = "(" !== yg(a);
                        do g.push(f(a, d, e, h)); while (xg(a))
                    } else {
                        do g.push(f(a, d, e)); while (xg(a))
                    }
                    wg(a, 1);
                    d = new b(g)
                } else d = f(a, d, e);
                f = d
            } else tg(a, c, '"Z", "M", "ZM", "(" or "EMPTY"');
            a.next() && tg(a, c, "end of stream")
        }
        return f || x
    }

    function Jg(a) {
        this.a = a
    }

    function yg(a) {
        var b = a.b;
        if (b === A) {
            for (b = a.a; b.a() === Kg;) b.next();
            if (Lg[b.a()]) b = b.next(), b = b === Mg ? "" : String.fromCharCode(b);
            else {
                b.m();
                do b.next(); while (!Lg[b.a()]);
                b = String.fromCharCode.apply(null, b.l())
            }
            a.b = b
        }
        return b
    }
    Jg.prototype.next = function() {
        var a = yg(this);
        "" !== a && delete this.b;
        return a
    };
    var Kg = 32,
        Mg = -1,
        Ng = {
            Eh: Kg,
            Ch: 40,
            Dh: 41,
            sh: 44,
            wh: Mg
        },
        Lg = Object.keys(Ng).reduce(function(a, b) {
            a[Ng[b]] = !0;
            return a
        }, Ka());

    function Og() {}
    r("H.util.ICharStream", Og);
    Og.prototype.next = function() {};
    Og.prototype.m = function() {};
    Og.prototype.l = function() {};
    Og.prototype.a = function() {};

    function Pg(a) {
        this.f = String(a);
        this.g = 0;
        this.b = [];
        this.c = !1
    }
    r("H.util.CharStream", Pg);
    Pg.prototype.next = function() {
        var a = this.f.charCodeAt(this.g++),
            a = isNaN(a) ? -1 : a;
        this.c && this.b.push(a);
        return a
    };
    Pg.prototype.m = function() {
        this.c = !0;
        this.b = []
    };
    Pg.prototype.l = function() {
        var a = this.b.slice();
        this.c = !1;
        this.b = [];
        return a
    };
    Pg.prototype.a = function(a) {
        a = this.f.charCodeAt(this.g + (a || 0));
        return isNaN(a) ? -1 : a
    };
    r("H.util.wkt.toGeometry", function(a) {
        return ug(new Pg(a))
    });

    function Qg(a) {
        var b = "" + Ae(),
            c;
        a = a || {};
        this.min = a.min || 0;
        this.max = a.max || 22;
        if (c = a.uri) {
            if (/_/.test(c)) throw new C(Qg, 0, "uri " + c);
        } else c = b;
        this.uri = c || b;
        this.uid = b;
        a.getCopyrights && Xa(a.getCopyrights, "Function", Qg) && (this.getCopyrights = a.getCopyrights);
        Qg.u.constructor.call(this)
    }
    v(Qg, I);
    r("H.map.provider.Provider", Qg);
    Qg.prototype.F = {
        la: "update"
    };

    function Rg(a, b) {
        a.dispatchEvent(new Bc(a.F.la, b))
    }
    Qg.prototype.D = function() {
        I.prototype.D.call(this)
    };
    Qg.prototype.Ia = function() {
        return null
    };
    Qg.prototype.getCopyrights = Qg.prototype.Ia;
    Qg.prototype.s = Ce;
    Qg.prototype.providesSpatials = Qg.prototype.s;
    Qg.prototype.ba = Ce;
    Qg.prototype.providesOverlays = Qg.prototype.ba;
    Qg.prototype.l = Ce;
    Qg.prototype.providesMarkers = Qg.prototype.l;
    Qg.prototype.i = Ce;
    Qg.prototype.providesDomMarkers = Qg.prototype.i;

    function Sg(a) {
        var b;
        Ua(this, Sg);
        Sg.u.constructor.call(this, a);
        if (a && "tileSize" in a) {
            b = sb(+a.tileSize) / Cb;
            if (isNaN(b) || b % 1 || 0 > b || 30 < b) throw new C(Sg, 0, "tileSize: " + a.tileSize);
            this.tileSize = +a.tileSize
        }
    }
    v(Sg, Qg);
    r("H.map.provider.TileProvider", Sg);

    function Tg(a, b) {
        return Nb(a) - 8 - nb(Nb(b))
    }
    Sg.getZoomLevelOffset = Tg;
    Sg.prototype.A = function(a, b, c) {
        return this.uri.concat("_", a, "_", b, "_", c)
    };
    Sg.prototype.getTileKey = Sg.prototype.A;
    Sg.prototype.Va = 256;
    Sg.prototype.tileSize = Sg.prototype.Va;

    function Ug() {}
    r("H.util.ICache", Ug);
    Ug.prototype.add = function() {};
    Ug.prototype.add = Ug.prototype.add;
    Ug.prototype.get = function() {};
    Ug.prototype.get = Ug.prototype.get;
    Ug.prototype.g = function() {};
    Ug.prototype.drop = Ug.prototype.g;
    Ug.prototype.forEach = function() {};
    Ug.prototype.forEach = Ug.prototype.forEach;
    Ug.prototype.Ea = function() {};
    Ug.prototype.removeAll = Ug.prototype.Ea;
    Ug.prototype.c = function() {};
    Ug.prototype.registerOnDrop = Ug.prototype.c;

    function Vg(a, b, c) {
        b && this.c(b);
        if (c && !sa(c)) throw new C(Vg, 2, c);
        this.a = 0;
        this.filter = c;
        this.Y = {};
        this.f = this.b = null;
        this.i(a)
    }
    r("H.util.Cache", Vg);
    Vg.prototype.add = function(a, b, c) {
        var d, e;
        c = +c;
        if (!ab(c) || 0 > c) throw new C(this.add, 2, c);
        a = String(a);
        d = this.Y[a];
        e = !0;
        this.filter && (e = this.filter(a, b, c));
        d ? e ? (this.a += c - d.size, d.size = c, d.data = b, Wg(this, d)) : Xg(this, d, !0) : e && (this.Y[a] = Yg(this, {
            id: a,
            data: b,
            size: c,
            xb: null,
            Xb: null
        }, this.b));
        Zg(this);
        return e
    };
    Vg.prototype.add = Vg.prototype.add;
    Vg.prototype.c = function(a) {
        if (!sa(a)) throw new C(this.c, 0, a);
        this.j = a
    };
    Vg.prototype.registerOnDrop = Vg.prototype.c;
    Vg.prototype.get = function(a, b) {
        var c = b ? this.Y[a] : Wg(this, this.Y[a]);
        return c && c.data
    };
    Vg.prototype.get = Vg.prototype.get;
    Vg.prototype.g = function(a) {
        var b;
        (b = this.Y[a]) && Xg(this, b, !0)
    };
    Vg.prototype.drop = Vg.prototype.g;
    Vg.prototype.forEach = function(a, b, c) {
        var d, e;
        for (e in this.Y) d = this.Y[e], (c ? c(e, d.data, d.size) : 1) && a.call(b, e, d.data, d.size)
    };
    Vg.prototype.forEach = Vg.prototype.forEach;
    Vg.prototype.Ea = function(a) {
        var b, c;
        for (c in this.Y) b = this.Y[c], (a ? a(c, b.data, b.size) : 1) && Xg(this, this.Y[c], !0)
    };
    Vg.prototype.removeAll = Vg.prototype.Ea;
    Vg.prototype.i = function(a) {
        if (!(0 < +a)) throw new C(Vg.prototype.i, 0, a);
        this.l = +a;
        Zg(this);
        return this
    };
    Vg.prototype.setMaxSize = Vg.prototype.i;
    Vg.prototype.m = function() {
        return this.l
    };
    Vg.prototype.getMaxSize = Vg.prototype.m;
    Vg.prototype.o = function() {
        return this.a
    };
    Vg.prototype.getCurrentSize = Vg.prototype.o;

    function Wg(a, b) {
        b && (a.b = Yg(a, b, a.b));
        return b
    }

    function Zg(a) {
        for (; a.a > a.l && a.f;) Xg(a, a.f, !0)
    }

    function Yg(a, b, c) {
        if (c !== b) {
            (b.xb || b.Xb) && Xg(a, b);
            if (b.xb = c) b.Xb = c.Xb, c.Xb = b;
            b.Xb || (a.b = b);
            b.xb || (a.f = b);
            a.a += b.size
        }
        return b
    }

    function Xg(a, b, c) {
        var d = b.Xb,
            e = b.xb;
        if (d || e || b == a.b && b == a.f) d ? d.xb = e : a.b = e, e ? e.Xb = d : a.f = d, a.a -= b.size, c && (a.j && a.j(b.id, b.data, b.size), delete a.Y[b.id]);
        b.xb = b.Xb = null
    };

    function $g(a, b, c, d) {
        this.key = "";
        this.x = a;
        this.y = b;
        this.z = c;
        this.data = d;
        this.valid = !0
    }
    r("H.map.provider.Tile", $g);

    function N(a) {
        Ua(this, N);
        N.u.constructor.call(this, a);
        this.a = {};
        this.Ha = new ah;
        this.m = z(this.m, this);
        this.g = bh
    }
    v(N, Sg);
    r("H.map.provider.RemoteTileProvider", N);
    N.prototype.v = function() {
        return 1
    };
    N.prototype.getEntryWeight = N.prototype.v;
    var bh = new Vg(65536);
    N.prototype.Ba = function() {
        return this.g
    };
    N.prototype.getCache = N.prototype.Ba;
    N.prototype.N = ba(0);
    N.prototype.m = function(a) {
        var b = this.uri;
        return !a.indexOf(b) && "_" === a.charAt(b.length)
    };
    N.prototype.cacheFilter = N.prototype.m;
    N.prototype.sa = function(a, b) {
        b.valid = !1
    };
    N.prototype.j = function(a) {
        var b, c = this.getCache();
        a ? c.Ea(this.m) : c.forEach(this.sa, this, this.m);
        for (b in this.a) this.a[b].cancel();
        this.a = {};
        Rg(this)
    };
    N.prototype.reload = N.prototype.j;
    N.prototype.Rc = function() {
        return !1
    };
    N.prototype.canStore = N.prototype.Rc;
    N.prototype.MAX_STORE_TIME = Infinity;
    N.prototype.B = function() {
        return this.Ha
    };
    N.prototype.getStorage = N.prototype.B;
    N.prototype.Ga = function(a, b) {
        b(a)
    };

    function ch(a, b, c, d, e, f) {
        var g = a.B();
        d = ~~d;
        return a.requestInternal(b, c, d, function(h, k) {
            g.gd(a.A(b, c, d), k && {
                raw: k.zi,
                timestamp: w.Date.now()
            }, e, f)
        }, f, 0)
    }
    N.prototype.requestInternal = N.prototype.c;
    N.prototype.o = function(a, b, c, d) {
        var e = this,
            f, g, h, k = this.getCache(),
            l, m = this.a,
            n = this.B();
        if (D(a = +a)) throw new C(this.o, 0, a);
        if (D(b = +b)) throw new C(this.o, 0, b);
        if (D(c = +c)) throw new C(this.o, 0, c);
        c = ~~c;
        f = this.getTileKey(a, b, c);
        g = k.get(f);
        g && g.valid || d || this.a[f] || (m[f] = dh, h = function(d) {
            var h;
            d && (h = w.Date.now() - d.timestamp);
            d && h < e.MAX_STORE_TIME ? e.Ga(d.raw, function(h) {
                delete e.a[f];
                g = e.createTileInternal(a, b, c, h, {});
                g.key = f;
                k.add(f, g, e.v(d));
                Rg(e, g)
            }) : (h && n.remove(f), g = void 0, e.a[f] = e.requestInternal(a,
                b, c,
                function(d, h) {
                    g = e.createTileInternal(a, b, c, d, h);
                    g.key = f;
                    k.add(f, g, e.v(d));
                    delete e.a[f];
                    Rg(e, g)
                },
                function() {
                    delete e.a[f]
                }), g && delete e.a[f])
        }, (l = n.get(f, h, function() {
            l = e.Ha.get(f, h)
        })) && m[f] === dh && (m[f] = l));
        return g
    };
    N.prototype.requestTile = N.prototype.o;
    var dh = {
        cancel: function() {}
    };
    N.prototype.createTileInternal = function(a, b, c, d) {
        return new $g(a, b, c, d)
    };
    N.prototype.K = function(a) {
        var b = this.a[a];
        b && (b.cancel(), delete this.a[a])
    };
    N.prototype.cancelTileByKey = N.prototype.K;
    N.prototype.T = function(a, b, c) {
        this.cancelTileByKey(this.getTileKey(a, b, c))
    };
    N.prototype.cancelTile = N.prototype.T;
    N.prototype.D = function() {
        var a;
        N.u.D.call(this);
        this.getCache().Ea(this.m);
        for (a in this.a) this.a[a].cancel(), delete this.a[a]
    };

    function ah() {}
    N.NullStorage = ah;
    ah.prototype.get = function(a, b) {
        b();
        return dh
    };
    ah.prototype.get = ah.prototype.get;
    ah.prototype.gd = function(a, b, c) {
        c && c()
    };
    ah.prototype.put = ah.prototype.gd;
    ah.prototype.clear = function(a) {
        a && a()
    };
    ah.prototype.clear = ah.prototype.clear;
    ah.prototype.remove = function(a, b) {
        b && b()
    };
    ah.prototype.remove = ah.prototype.remove;

    function eh(a) {
        if (!a || !sa(a.requestData)) throw new C(eh, 0, "options.requestData");
        eh.u.constructor.call(this, a);
        this.ea = a.requestData;
        this.O = !!a.providesDomMarkers
    }
    v(eh, N);
    r("H.map.provider.MarkerTileProvider", eh);
    eh.prototype.v = function(a) {
        return a ? a.length + 1 : 1
    };
    eh.prototype.getEntryWeight = eh.prototype.v;
    eh.prototype.c = function(a, b, c, d, e) {
        var f = this;
        return this.ea(a, b, c, function(e) {
            for (var h = [], k, l, m = e.length; m--;) l = e[m], l.Di = f.getTileKey(a, b, c), l.ia(f), k = l.sb(), (B(l, fh) || k.getState() === k.Pc.READY) && h.push(e[m]);
            d(h)
        }, e)
    };
    eh.prototype.requestInternal = eh.prototype.c;
    eh.prototype.C = function(a, b) {
        var c;
        b !== Me.NONE && ((c = this.g.get(a.Di)) && (c.valid = !1), Rg(this, c))
    };
    eh.prototype.invalidateObject = eh.prototype.C;
    eh.prototype.i = function() {
        return this.O
    };
    eh.prototype.providesDomMarkers = eh.prototype.i;
    eh.prototype.l = Be;
    eh.prototype.providesMarkers = eh.prototype.l;

    function M(a, b) {
        this.x = +a;
        this.y = +b
    }
    r("H.math.Point", M);
    M.prototype.set = M;
    M.prototype.set = M.prototype.set;
    M.prototype.clone = function(a) {
        a ? (a.x = this.x, a.y = this.y) : a = new M(this.x, this.y);
        return a
    };
    M.prototype.clone = M.prototype.clone;
    M.prototype.add = function(a) {
        this.x += a.x;
        this.y += a.y;
        return this
    };
    M.prototype.add = M.prototype.add;
    M.prototype.b = function(a) {
        this.x -= a.x;
        this.y -= a.y;
        return this
    };
    M.prototype.sub = M.prototype.b;
    M.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= void 0 === b ? a : b;
        return this
    };
    M.prototype.scale = M.prototype.scale;
    M.prototype.round = function() {
        this.x = nb(this.x);
        this.y = nb(this.y);
        return this
    };
    M.prototype.round = M.prototype.round;
    M.prototype.floor = function() {
        this.x = pb(this.x);
        this.y = pb(this.y);
        return this
    };
    M.prototype.floor = M.prototype.floor;
    M.prototype.ceil = function() {
        this.x = qb(this.x);
        this.y = qb(this.y);
        return this
    };
    M.prototype.ceil = M.prototype.ceil;
    M.prototype.pa = function(a) {
        return !(!a || this.x !== a.x || this.y !== a.y)
    };
    M.prototype.equals = M.prototype.pa;
    M.prototype.a = function(a, b) {
        var c = b.x - a.x,
            d = b.y - a.y,
            e, f = a;
        if (c || d) e = ((this.x - a.x) * c + (this.y - a.y) * d) / (c * c + d * d), 0 >= e ? f = a : 1 <= e ? f = b : f = new M(a.x + e * c, a.y + e * d);
        return f
    };
    M.prototype.getNearest = M.prototype.a;
    M.prototype.distance = function(a) {
        return tb(ub(this.x - a.x, 2) + ub(this.y - a.y, 2))
    };
    M.prototype.distance = M.prototype.distance;

    function gh(a) {
        if (!a) throw new C(gh, 0, a);
        return B(a, M) ? a : new M(a.x, a.y)
    }
    M.fromIPoint = gh;

    function hh() {}
    hh.prototype.zc = function() {};
    r("H.geo.IProjection.prototype.latLngToPoint", hh.prototype.zc);
    hh.prototype.Aa = function() {};
    r("H.geo.IProjection.prototype.xyToGeo", hh.prototype.Aa);
    hh.prototype.Fc = function() {};
    r("H.geo.IProjection.prototype.pointToGeo", hh.prototype.Fc);
    hh.prototype.qb = function() {};
    r("H.geo.IProjection.prototype.geoToPoint", hh.prototype.qb);
    var ih = {};
    r("H.geo.mercator", ih);
    ih.a = function(a) {
        return lb(1, mb(0, .5 - sb(zb(Fb + Eb * a / 180)) / Db / 2))
    };
    ih.b = function(a) {
        return a / 360 + .5
    };
    ih.zc = function(a, b, c) {
        c ? (c.x = ih.b(b), c.y = ih.a(a)) : c = new M(ih.b(b), ih.a(a));
        return c
    };
    ih.latLngToPoint = ih.zc;
    ih.qb = function(a, b) {
        return ih.zc(a.lat, a.lng, b)
    };
    ih.geoToPoint = ih.qb;
    ih.f = function(a) {
        return 0 >= a ? 90 : 1 <= a ? -90 : Kb * (2 * Ab(vb(Db * (1 - 2 * a))) - Eb)
    };
    ih.c = function(a, b) {
        return b ? 0 >= a ? -180 : 1 <= a ? 180 : 360 * Ob(a, 1) - 180 : 360 * (1 === a ? 1 : Ob(a, 1)) - 180
    };
    ih.Aa = function(a, b, c, d) {
        c ? (c.lat = ih.f(b), c.lng = ih.c(a, d)) : c = new gc(ih.f(b), ih.c(a, d));
        return c
    };
    ih.xyToGeo = ih.Aa;
    ih.Fc = function(a, b, c) {
        return ih.Aa(a.x, a.y, b, c)
    };
    ih.pointToGeo = ih.Fc;

    function jh(a, b) {
        this.projection = a || ih;
        this.g = 0;
        this.c = this.exp = sb(b || 256) / Cb;
        kh(this);
        this.y = this.x = 0
    }
    r("H.geo.PixelProjection", jh);
    var lh = rb(28) + rb(-8);
    jh.prototype.Ja = function(a) {
        if (D(a)) throw new C(this.Ja, 0, a);
        var b = this.x / this.w,
            c = this.y / this.h;
        this.g = a;
        this.c = this.exp + a;
        kh(this);
        this.x = b * this.w;
        this.y = c * this.h
    };
    jh.prototype.rescale = jh.prototype.Ja;

    function kh(a) {
        a.c > lh && (a.c = lh);
        a.w = ub(2, a.c);
        a.h = ub(2, a.c)
    }
    jh.prototype.mg = function() {
        return this.g || 0
    };
    jh.prototype.getZoomScale = jh.prototype.mg;
    jh.prototype.geoToPixel = function(a, b) {
        var c = this.projection.zc(a.lat, a.lng, b);
        c.x = c.x * this.w - this.x;
        c.y = c.y * this.h - this.y;
        return c
    };
    jh.prototype.geoToPixel = jh.prototype.geoToPixel;
    jh.prototype.a = function(a, b, c) {
        return this.projection.Aa((a.x + this.x) / this.w, (a.y + this.y) / this.h, b, c)
    };
    jh.prototype.pixelToGeo = jh.prototype.a;
    jh.prototype.Aa = function(a, b, c, d) {
        return this.projection.Aa((a + this.x) / this.w, (b + this.y) / this.h, c, d)
    };
    jh.prototype.xyToGeo = jh.prototype.Aa;
    jh.prototype.f = function(a, b, c) {
        a = this.projection.zc(a, b, c);
        a.x = a.x * this.w - this.x;
        a.y = a.y * this.h - this.y;
        return a
    };
    jh.prototype.latLngToPixel = jh.prototype.f;
    jh.prototype.b = function(a) {
        return new M(a.x * this.w - this.x, a.y * this.h - this.y)
    };
    jh.prototype.pointToPixel = jh.prototype.b;

    function mh(a) {
        mh.u.constructor.call(this);
        a = a || {};
        this.min = 0;
        this.max = 22;
        this.Oh = !!a.dark;
        a.min && this.B(a.min);
        a.max && this.s(a.max);
        this.pixelProjection = new jh(a.projection, a.minWorldSize)
    }
    v(mh, I);
    r("H.map.layer.Layer", mh);
    mh.prototype.a = {
        la: "update",
        Uf: "minchange",
        Tf: "maxchange"
    };
    mh.prototype.K = function(a) {
        return this.min <= a && a <= this.max
    };
    mh.prototype.isValid = mh.prototype.K;
    mh.prototype.B = function(a) {
        var b = this.min;
        if (a !== b) {
            if (D(a)) throw new C(mh.prototype.B, 0, "min is NaN");
            if (a <= this.max) this.min = a, this.dispatchEvent(new Ne(this.a.Uf, a, b)), this.l();
            else throw new C(mh.prototype.B, 0, "min > max");
        }
        return this
    };
    mh.prototype.setMin = mh.prototype.B;
    mh.prototype.s = function(a) {
        var b = this.max;
        if (a !== b) {
            if (D(a)) throw new C(mh.prototype.s, 0, "max is NaN");
            if (a >= this.min) this.max = a, this.dispatchEvent(new Ne(this.a.Tf, a, b)), this.l();
            else throw new C(mh.prototype.s, 0, "max < min");
        }
        return this
    };
    mh.prototype.setMax = mh.prototype.s;
    mh.prototype.l = function() {
        this.dispatchEvent(this.a.la)
    };
    mh.prototype.D = function() {
        mh.u.D.call(this)
    };
    mh.prototype.Ia = function() {
        return null
    };
    mh.prototype.getCopyrights = mh.prototype.Ia;

    function nh(a, b) {
        var c = b || {};
        if (!a) throw new C(oh, 0, a);
        this.l = z(this.l, this);
        this.f = a;
        a.addEventListener(Qg.prototype.F.la, this.l, !1, this);
        this.tileSize = a.tileSize;
        this.N = {};
        mh.call(this, {
            min: a.min,
            max: a.max,
            minWorldSize: this.tileSize,
            projection: c.bj,
            dark: c.dark
        })
    }
    v(nh, mh);
    r("H.map.layer.BaseTileLayer", nh);
    nh.prototype.Pa = function() {
        return this.f
    };
    nh.prototype.getProvider = nh.prototype.Pa;
    nh.prototype.j = function(a, b) {
        var c, d = this.pixelProjection,
            e;
        if (!B(a, G)) throw new C(this.j, 0, a);
        D(b) || (c = d.mg(), d.Ja(b));
        e = ph(d.geoToPixel(a.tb()), d.geoToPixel(a.rb()));
        !D(c) && d.Ja(c);
        return e
    };
    nh.prototype.geoRectToRect = nh.prototype.j;
    nh.prototype.i = function(a, b) {
        if (!B(a, qh)) throw new C(this.i, 0, a);
        if (D(b = +b)) throw new C(this.i, 1, b);
        var c = ub(2, pb(b)),
            d = this.tileSize,
            e, f;
        e = pb(a.left / d);
        e === c && --e;
        f = pb(a.right / d);
        f === c && --f;
        return new qh(e, Qb(pb(a.top / d), 0, c - 1), f, Qb(pb(a.bottom / d), 0, c - 1))
    };
    nh.prototype.getTileBounds = nh.prototype.i;
    nh.prototype.A = function(a, b, c, d) {
        return this.f.requestTile(a, b, c, d)
    };
    nh.prototype.m = function(a, b, c) {
        this.f.cancelTile(a, b, c)
    };
    nh.prototype.cancelTile = nh.prototype.m;
    nh.prototype.Ia = function(a, b) {
        return this.f.getCopyrights ? this.f.getCopyrights(a, b) : null
    };
    nh.prototype.getCopyrights = nh.prototype.Ia;

    function rh(a, b, c, d, e) {
        d = pb(d);
        var f = ub(2, d),
            g = b.left,
            h = b.top,
            k = b.right;
        c = k + (c ? f + (k === b.left ? 0 : 1) : 1);
        var l = b.bottom,
            m = [],
            n, q;
        e && (n = g + (1 + k - g) / 2 + e.x / a.tileSize - .5, q = h + (1 + l - h) / 2 + e.y / a.tileSize - .5);
        for (; g < c;) {
            for (h = b.top; h <= l;) a = g % f, m.push([a, h, d, e ? rb(n - g) + rb(q - h) : 0]), h++;
            g++
        }
        return m
    }

    function sh(a, b, c) {
        var d;
        c = pb(c);
        a.pixelProjection.Ja(c);
        b = a.j(b);
        d = a.i(b, c);
        return rh(a, d, b.left > b.right, c)
    }
    nh.prototype.o = function(a, b, c, d, e, f) {
        if (!B(a, qh)) throw new C(this.o, 0, a);
        if (D(c = +c)) throw new C(this.o, 1, c);
        var g, h = [],
            k, l = this.f;
        f = null != f ? f : "__default__";
        var m = l.requestTile;
        d || (g = {});
        b = rh(this, a, b, c, e);
        if (a = b.length)
            for (d || b.sort(th), c = a; c--;) e = b[c], d || (g[l.A.apply(l, e)] = !0), e[3] = +d, (k = m.apply(l, e)) && h.push(k);
        if (!d) {
            d = g;
            var n;
            g = this.N[f] || {};
            for (n in g) g.hasOwnProperty(n) && g[n] && !d[n] && this.f.cancelTileByKey(n);
            this.N[f] = d
        }
        return {
            total: a,
            tiles: h
        }
    };
    nh.prototype.getProviderTiles = nh.prototype.o;

    function th(a, b) {
        return b[3] - a[3]
    };

    function uh(a, b) {
        this.opacity = 1;
        uh.u.constructor.call(this, a, b)
    }
    v(uh, nh);
    r("H.map.layer.MarkerTileLayer", uh);
    var vh = {
        markers: [],
        total: 0,
        requested: 0
    };

    function wh(a, b, c, d, e) {
        var f;
        f = pb(c);
        a.pixelProjection.Ja(f);
        b = a.j(b);
        f = a.i(b, f);
        c = a.o(f, f.left > f.right, ~~c, d, e);
        a = c.tiles;
        c = c.total;
        d = a.length;
        e = [];
        var g;
        for (g = 0; g < d; g++)
            for (f = a[g], b = f.data.length; b--;) e.push(f.data[b]);
        return {
            markers: e,
            total: a.length,
            requested: c
        }
    }
    uh.prototype.c = function(a, b, c, d) {
        return this.f.providesDomMarkers() ? vh : wh(this, a, b, c, d)
    };
    uh.prototype.requestMarkers = uh.prototype.c;
    uh.prototype.b = function(a, b, c, d) {
        return this.f.providesDomMarkers() ? wh(this, a, b, c, d) : vh
    };
    uh.prototype.requestDomMarkers = uh.prototype.b;

    function xh(a, b) {
        xh.u.constructor.call(this, Of, b);
        this.o(a)
    }
    v(xh, Uf);
    r("H.map.Rect", xh);
    xh.prototype.o = function(a) {
        if (!B(a, G)) throw new C(this.o, 0, a);
        a.pa(this.kb) || (this.kb = this.a = a, this.i !== x && xh.u.c.call(this, yh(this)))
    };
    xh.prototype.setBounds = xh.prototype.o;
    xh.prototype.S = function() {
        return this.a
    };
    xh.prototype.getBounds = xh.prototype.S;
    xh.prototype.A = function() {
        return this
    };
    xh.prototype.setNorthPoleCovering = xh.prototype.A;
    xh.prototype.c = function() {
        return this
    };
    xh.prototype.setGeometry = xh.prototype.c;
    xh.prototype.Ca = function() {
        this.i || xh.u.c.call(this, yh(this));
        return this.i
    };
    xh.prototype.getGeometry = xh.prototype.Ca;
    xh.prototype.f = function() {
        return this
    };
    xh.prototype.setStrip = xh.prototype.f;
    xh.prototype.b = function() {
        return this.Ca().$a
    };
    xh.prototype.getStrip = xh.prototype.b;

    function yh(a) {
        var b = a.a,
            c, d, e, f;
        a = [c = b.ka, d = b.ga, A, c, f = b.ha, A, e = b.ja, f, A, e, d, A];
        180 <= b.ab() && (a.splice(9, 0, e, d = b.Oa().lng, A), a.splice(3, 0, c, d, A));
        return new E(new F(a))
    };

    function zh(a, b, c) {
        if (!a || !b || !c) throw new C(zh, null, "Must specify name, version and revision parameter");
        this.name = a;
        this.version = b;
        this.revision = c
    }
    r("H.util.BuildInfo", zh);
    zh.prototype.toString = function() {
        return this.name + ";" + this.version + ";" + this.revision
    };
    var Ah = {};

    function Bh(a, b, c) {
        if (!a) throw new C(Bh, 1, "Must specify a name parameter");
        return Ah[a] || (Ah[a] = new zh(a, b, c))
    }
    zh.get = Bh;

    function Ch() {
        Ch.u.constructor.call(this);
        this.a = Dh(this);
        this.f = Ka();
        this.c = z(this.c, this);
        this.a.addEventListener("message", this.c)
    }
    v(Ch, I);
    Ch.prototype.D = function() {
        this.a.terminate()
    };
    Ch.prototype.i = function(a) {
        var b = a.type,
            c = !!this.f[b],
            d = a.data,
            e = Eh++,
            f = d && d.Ei ? d.Ei : A,
            g = !0;
        c ? (this.b[e] = a, Fh(this, b, e, d && d.message, f)) : (a.reject(new C(this.i, 0, "processor_not_found")), g = !1);
        return g
    };
    Ch.prototype.c = function(a) {
        a = a.data;
        var b = this.b[a.taskId],
            c = a.taskId,
            d = a.data,
            e = this;
        if (2 === a.type)(new Gh(Hh, d)).then(function(a) {
            e.a.postMessage(["3", c, [a]], [a])
        }, function() {
            e.a.postMessage(["3", c, [null, "ERROR"]])
        });
        else {
            if (b) {
                switch (a.type) {
                    case 1:
                        b.resolve(d);
                        break;
                    case 0:
                        b.reject(d)
                }
                delete this.b[c]
            }
            this.dispatchEvent(new Bc(this.g.IDLE))
        }
    };
    Ch.prototype.b = {};
    var Eh = 0;

    function Ih(a, b, c) {
        var d = Eh++,
            e;
        a.b[d] = e = gd();
        Fh(a, b, d, c);
        return e.sf
    }

    function Fh(a, b, c, d, e) {
        d === A || qa(d) || (d = [d]);
        try {
            a.a.postMessage([b, c, d], e)
        } catch (f) {
            a = a.b[c], a.reject(f.message)
        }
    }
    Ch.prototype.g = {
        IDLE: "idle",
        ERROR: "error"
    };
    Ch.prototype.l = function(a, b) {
        var c = this.j || (this.j = new Bc(this.g.ERROR));
        c.data = b;
        delete this.f[a];
        this.dispatchEvent(c)
    };
    Ch.prototype.importScripts = function(a) {
        Ih(this, "0", a)
    };

    function Dh(a) {
        var b = w.H.__bootstrap__,
            c, b = sa(b) ? ("" + b).replace(/^[^{]+{((.|[\r\n])+?)}\s*$/, "$1") : "" + b;
        if (w.Worker && w.URL) try {
            c = new w.Worker(w.URL.createObjectURL(Ke(b, "application/javascript")))
        } catch (d) {}
        c || (a = new Jh(a), function() {
            eval("var self = arguments[0];" + b)
        }(a), c = new Kh(a));
        return c
    }

    function Kh(a) {
        I.call(this);
        this.a = a
    }
    v(Kh, I);
    Kh.prototype.postMessage = function(a) {
        w.setTimeout(z(this.b, this, a), 0)
    };
    Kh.prototype.b = function(a) {
        var b = new Bc("message");
        b.data = a;
        this.a.dispatchEvent(b)
    };
    Kh.prototype.terminate = function() {
        this.a.J();
        this.J()
    };

    function Jh(a) {
        I.call(this);
        this.a = a;
        this.addEventListener = z(this.addEventListener, this);
        this.removeEventListener = z(this.removeEventListener, this);
        this.postMessage = z(this.postMessage, this);
        this.eval = z(eval, this)
    }
    v(Jh, I);
    Jh.prototype.postMessage = function(a) {
        var b = new Bc("message");
        b.data = a;
        w.setTimeout(z(this.a.c, this.a, b), 0)
    };

    function Lh() {
        var a = Mh;
        a || (a = Mh = this, I.call(a), this.b());
        return a
    }
    var Mh;
    v(Lh, I);
    Lh.prototype.D = function() {
        Lh.u.D.call(this);
        this.b()
    };
    Ca(Lh.prototype, {
        b: function() {
            var a = this.Hf,
                b;
            if (a)
                for (b = a.length; b--;) a[b].J();
            this.Hf = [];
            this.Ed = Ka();
            this.Zg = Ka()
        },
        se: function(a) {
            var b, c, d;
            a = a.type;
            if (d = this.Zg[a]) b = this.Hf, c = b[0], c || (c = b[0] = new Ch, this.Eb(za(Ac, c)), Wa(this.Ed) || c.importScripts(w.Object.keys(this.Ed))), b = c, b.f[a] || (b.f[a] = d, Ih(b, "1", [a, sa(d) ? d + "" : d]).then(sc, z(b.l, b, a)));
            else throw new kc(this.se, 'Unknown type "' + a + '"');
            return c
        },
        ye: function() {},
        md: function(a, b) {
            var c = this.Zg,
                d = c[a];
            if (d) {
                if (b !== d) throw new kc(this.md, 'Type "' +
                    a + '" is already registered');
            } else c[a] = b
        },
        importScripts: function(a) {
            [].concat(a).forEach(function(a) {
                this.Ed[a] || (this.Ed[a] = !0, this.Hf.forEach(function(c) {
                    c.importScripts(a)
                }))
            }, this)
        }
    });

    function Nh(a, b, c) {
        td.call(this, a, b, c)
    }
    v(Nh, td);
    Ca(Nh.prototype, {
        Fe: function() {
            var a = new wd(new Lh);
            return function() {
                return a
            }
        }(),
        Sc: sc,
        De: function(a) {
            return a.i(this)
        }
    });

    function Oh(a, b) {
        var c = b || {},
            d = c.contextType,
            c = c.contextAttributes;
        Oh.u.constructor.call(this, b);
        B(a, Function, Oh, 0, "invalid render callback");
        if (d) {
            if (-1 === Ph.indexOf(d)) throw new C(Oh, 1, "invalid context type");
            this.v = d
        }
        c && (this.F = c);
        this.g = a
    }
    v(Oh, mh);
    r("H.map.layer.CanvasLayer", Oh);
    var Ph = Ra("2d webgl webgl2 experimental-webgl");
    Oh.prototype.v = "2d";
    Oh.prototype.ca = function(a, b) {
        this.f && this.f.canvas === a || (this.f = a.getContext(this.v, this.F));
        return this.g(this.f, b)
    };
    Oh.prototype.D = function() {
        Oh.u.D.call(this);
        this.f = A
    };

    function Qh(a, b) {
        Qh.u.constructor.call(this, b);
        B(a, Function, Qh, 0, "invalid render callback");
        this.f = a
    }
    v(Qh, mh);
    r("H.map.layer.DomLayer", Qh);
    Qh.prototype.ca = function(a, b) {
        return this.f(a, b)
    };

    function Rh(a, b) {
        var c, d = a;
        if (!B(d, Element)) {
            Sh.innerHTML = d;
            d = Sh.firstElementChild;
            if (!d) throw new C(Rh, 0, "No element data");
            Sh.removeChild(d);
            c = !0;
            Sh.innerHTML = ""
        }
        this.c = 0 !== Ee(d).length;
        this.i = c ? d : Fe(d, w.document, this.c);
        b && (c = "onAttach", c in b && Xa(d = b[c], "Function", Rh, 1, c) && (this.ff = d), c = "onDetach", c in b && Xa(d = b[c], "Function", Rh, 1, c) && (this.f = d))
    }
    r("H.map.DomIcon", Rh);
    var Sh = document.createElement("DIV");
    Rh.prototype.ff = null;
    Rh.prototype.f = null;
    Rh.prototype.c = !1;

    function Th(a, b) {
        this.w = +a;
        this.h = +b
    }
    r("H.math.Size", Th);

    function Uh(a, b) {
        var c, d, e, f, g, h, k;
        f = a;
        var l = b || [];
        if (a !== Vh.NONE) {
            c = d = l.length;
            if (-1 === this.c.indexOf(f)) throw new C(Uh, 0, a);
            if (!l) throw new C(Uh, 1, l);
            for (; d--;)
                if (D(l[d])) throw new C(Uh, 1, l);
            f === Vh.RECT && 3 < c && (l = [l[0], l[1], l[2], l[1], l[2], l[3], l[0], l[3]], f = Vh.POLYGON);
            if (f === Vh.CIRCLE && 2 < c && (e = l[2], 0 < e)) {
                f = l[0];
                g = l[1];
                d = lb(2 * qb(e), 40);
                h = 360 / d;
                for (l = []; d--;) k = h * d * Ib, l.push(f + wb(k) * e, g + yb(k) * e);
                f = Vh.POLYGON
            }
            if (f !== Vh.POLYGON || !c || l.length % 2) throw new C(Uh, 1, l);
            this.b = l
        }
    }
    r("H.map.HitArea", Uh);
    var Vh = {
        NONE: 0,
        RECT: 1,
        CIRCLE: 2,
        POLYGON: 3
    };
    Uh.ShapeType = Vh;
    Uh.prototype.c = [Vh.RECT, Vh.CIRCLE, Vh.POLYGON];
    Uh.prototype.a = function(a, b, c) {
        return this.b ? Ub(a, b, this.b, c, !0) : Tb.NONE
    };
    Uh.prototype.hitTest = Uh.prototype.a;

    function Wh(a, b) {
        var c;
        Ua(this, Wh);
        Wh.u.constructor.call(this, b);
        this.a(a);
        b && "icon" in b && (c = b.icon);
        this.$b(c || Xh(this))
    }
    v(Wh, K);
    r("H.map.AbstractMarker", Wh);
    Wh.prototype.getPosition = function() {
        return B(this.b, sg) ? this.b.ma[0] : this.b
    };
    Wh.prototype.getPosition = Wh.prototype.getPosition;
    Wh.prototype.f = function(a) {
        hc(a, this.f, 0);
        this.a(a);
        return this
    };
    Wh.prototype.setPosition = Wh.prototype.f;
    Wh.prototype.Ca = function() {
        return this.b
    };
    Wh.prototype.getGeometry = Wh.prototype.Ca;
    Wh.prototype.a = function(a) {
        var b = this.b;
        B(a, gc) || B(a, sg) ? this.b = a : (hc(a, this.a, 0), this.b = ic(a));
        b && this.ua(Me.SPATIAL);
        return this
    };
    Wh.prototype.setGeometry = Wh.prototype.a;
    Wh.prototype.S = function() {
        return this.b.S()
    };
    Wh.prototype.sb = function() {
        return this.icon
    };
    Wh.prototype.getIcon = Wh.prototype.sb;
    Wh.prototype.$b = function(a) {
        var b = this.icon,
            c = !b;
        if (b !== a) {
            if (!B(a, this.pg)) throw C.apply(b = new C, c ? [this.constructor, 1, "icon"] : [this.a, 0, a]), b;
            this.icon = a;
            c || this.ua(Me.VISUAL)
        }
        return this
    };
    Wh.prototype.setIcon = Wh.prototype.$b;

    function Xh(a) {
        var b = a.i;
        b || (b = a.constructor.prototype.i = a.c(Yh));
        return b
    }
    var Yh = {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28px" height="36px"><path d="M 19 31 C 19 32.7 16.3 34 13 34 C 9.7 34 7 32.7 7 31 C 7 29.3 9.7 28 13 28 C 16.3 28 19 29.3 19 31 Z" fill="#000" fill-opacity=".2"/><path d="M 13 0 C 9.5 0 6.3 1.3 3.8 3.8 C 1.4 7.8 0 9.4 0 12.8 C 0 16.3 1.4 19.5 3.8 21.9 L 13 31 L 22.2 21.9 C 24.6 19.5 25.9 16.3 25.9 12.8 C 25.9 9.4 24.6 6.1 22.1 3.8 C 19.7 1.3 16.5 0 13 0 Z" fill="#fff"/><path d="M 13 2.2 C 6 2.2 2.3 7.2 2.1 12.8 C 2.1 16.1 3.1 18.4 5.2 20.5 L 13 28.2 L 20.8 20.5 C 22.9 18.4 23.8 16.2 23.8 12.8 C 23.6 7.07 20 2.2 13 2.2 Z" fill="#18d"/></svg>',
        size: new Th(28,
            36),
        anchor: new M(14, 32),
        hitArea: new Uh(3, [0, 16, 0, 7, 8, 0, 18, 0, 26, 7, 26, 16, 18, 34, 8, 34])
    };

    function fh(a, b) {
        fh.u.constructor.call(this, a, b)
    }
    v(fh, Wh);
    r("H.map.DomMarker", fh);
    fh.prototype.type = Pe.DOM_MARKER;
    fh.prototype.je = 2;
    fh.prototype.c = function(a) {
        var b = new Rh(a.svg, a);
        a = a.anchor;
        b.i.style.margin = -a.y + "px 0 0 -" + a.x + "px";
        return b
    };
    fh.prototype.pg = Rh;

    function Zh(a, b) {
        var c = b || {};
        "status" in c && (this.status = +c.status);
        "statusText" in c && (this.statusText = c.statusText);
        this.ok = 200 <= this.status && 300 > this.status;
        this.b = !1;
        a ? "string" === typeof a && (this.a = a) : this.a = ""
    }
    r("H.net.Response", Zh);
    Zh.prototype.type = "default";
    Zh.prototype.type = Zh.prototype.type;
    Zh.prototype.status = 200;
    Zh.prototype.status = Zh.prototype.status;
    Zh.prototype.statusText = "OK";
    Zh.prototype.statusText = Zh.prototype.statusText;
    Zh.b = function(a) {
        if (a.b) return fd(new TypeError("Already read"));
        a.b = !0
    };
    Zh.error = function() {
        Zh.a || (Zh.a = new Zh(null, {
            status: 0,
            statusText: ""
        }), Zh.a.type = "error");
        return Zh.a
    };
    Zh.error = Zh.error;
    Zh.prototype.text = function() {
        var a = Zh.b(this);
        a || (a = this.a ? new Xc(Zc, this.a) : fd("Unsupported response body"));
        return a
    };
    Zh.prototype.json = function() {
        return this.text().then(w.JSON.parse)
    };
    w.Response && w.Response.error && (Zh = w.Response);

    function $h(a, b, c) {
        function d() {
            var a = z(l.b, l),
                b = +k.timeout || 0;
            ai ? (bi(l, "timeout", a), e.timeout = b) : b && (l.f = setTimeout(function() {
                e.abort();
                l.b({
                    type: "timeout"
                })
            }, b));
            bi(l, "error", a);
            bi(l, "load", a);
            e.send(k.data)
        }
        var e, f, g, h = c && c.headers || {},
            k = {},
            l = this;
        if (!sa(b)) throw new C($h, 1, "function required");
        a += "";
        Ca(h, ci.headers, h);
        Ca(k, ci, c || {});
        k.headers = h;
        this.c = b;
        this.a = e = new XMLHttpRequest;
        b = k.method;
        try {
            e.open(b, a, !0);
            for (f in h) h.hasOwnProperty(f) && (g = h[f]) && e.setRequestHeader(f, g);
            e.withCredentials = !!k.withCredentials;
            d()
        } catch (m) {
            if (di) this.b({
                type: "cors"
            });
            else {
                this.a = e = new XDomainRequest;
                try {
                    e.open(b, a), e.onprogress = function() {}, d()
                } catch (n) {
                    this.b({
                        type: "cors"
                    })
                }
            }
        }
    }
    r("H.net.Xhr", $h);
    var ci = {
            method: "GET",
            headers: {},
            data: null
        },
        di = "withCredentials" in new XMLHttpRequest,
        ai = "timeout" in new XMLHttpRequest;

    function bi(a, b, c) {
        di ? a.a.addEventListener(b, c) : a.a["on" + b] = c
    }

    function ei(a, b, c) {
        di ? a.a.removeEventListener(b, c) : a.a["on" + b] = null
    }
    $h.prototype.g = function() {
        this.a && (this.a.abort(), this.a && this.b({
            type: "abort"
        }))
    };
    $h.prototype.abort = $h.prototype.g;
    $h.prototype.b = function(a) {
        var b = a.type;
        a = this.a;
        var c, d;
        this.f && clearTimeout(this.f);
        "load" === b ? a instanceof XMLHttpRequest && 200 !== a.status && (c = "network") : c = 4 === a.readyState && 0 === a.status && "error" == b ? "cors" : "error" != b ? b : "network";
        b = this.b;
        ei(this, "timeout", b);
        ei(this, "error", b);
        ei(this, "load", b);
        0 === a.status || c && "network" !== c ? d = Zh.error() : d = new Zh(a.responseText, a);
        c = this.c;
        delete this.b;
        delete this.c;
        delete this.a;
        c(d)
    };

    function fi() {
        var a = fi.a;
        a || (a = this, fi.a = a, I.call(a), this.a());
        return a
    }
    v(fi, I);
    fi.prototype.D = function() {
        fi.u.D.call(this);
        this.a()
    };
    Ca(fi.prototype, {
        a: function() {
            this.oi = 10;
            this.pi = 6;
            this.Jc = Ka();
            this.uf = Ka();
            this.xf = 0
        },
        se: function(a) {
            a = a.type;
            var b = this.Jc[a] || 0,
                c;
            return this.xf < this.oi && b < this.pi ? (c = this.Fi(), this.xf++, this.Jc[a] = b + 1, this.uf[c] = a, c) : x
        },
        ye: function(a) {
            var b = this.uf[a];
            if (!Ta(b) || !this.Jc[b]) throw new kc(this.ye, "Unknown requestId");
            this.xf--;
            this.Jc[b]--;
            this.Jc[b] || delete this.Jc[b];
            delete this.uf[a];
            this.dispatchEvent("allocatable")
        },
        di: -1,
        Fi: function() {
            return ++this.di
        }
    });

    function Gh(a, b, c, d) {
        var e = gi;
        if (!this.b[a]) throw new C(Gh, 0, "Mime type is not supported");
        this.g = a;
        this.a = d;
        e.href = b;
        td.call(this, e.protocol + "//" + e.hostname, b, c)
    }
    v(Gh, td);
    Gh.prototype.De = function() {
        this.f = this.b[this.g].call(this);
        return !0
    };
    Gh.prototype.Sc = function() {
        this.f && (this.f.abort(), this.f = null)
    };
    Gh.prototype.b = {
        "application/json": function() {
            var a = this,
                b = this.a || {};
            (b.headers || (b.headers = {})).Accept = "application/json";
            return new $h(this.data, function(b) {
                200 <= b.status && 300 > b.status ? a.resolve(b.json()) : a.reject(b)
            }, b)
        },
        "text/plain": function() {
            var a = this;
            return new $h(this.data, function(b) {
                200 <= b.status && 300 > b.status ? a.resolve(b.text()) : a.reject(b)
            }, this.a)
        },
        image: function() {
            var a = w.document.createElement("img"),
                b = this.a && this.a.crossOrigin,
                c = this;
            a.onload = z(this.resolve, this, a);
            a.onerror = function() {
                c.reject(Zh.error())
            };
            a.src = this.data;
            Ta(b) && (a.crossOrigin = b);
            return {
                abort: function() {
                    a.onerror = a.onload = null;
                    ve && Ie(a) || a.removeAttribute("src")
                }
            }
        }
    };
    (function() {
        var a;
        try {
            a = new XMLHttpRequest, a.open("get", "/", !0)
        } catch (b) {
            a = {}
        }
        "response" in a && (Gh.prototype.b.arraybuffer = function() {
            var a = new XMLHttpRequest,
                b = this;
            a.open("GET", this.data);
            a.responseType = "arraybuffer";
            a.onerror = a.ontimeout = function() {
                b.reject(Zh.error())
            };
            a.onload = function() {
                b.resolve(a.response)
            };
            a.send();
            return a
        })
    })();
    Gh.prototype.Fe = function() {
        var a = new wd(new fi);
        return function() {
            return a
        }
    }();
    var Hh = "arraybuffer",
        gi = w.document.createElement("a");

    function hi(a) {
        var b = ii[a];
        if (!b)
            if (a in ji) b = ii[a] = a;
            else {
                var b = ki.length,
                    c = "",
                    d = a.substr(0, 1).toUpperCase() + a.substr(1),
                    e = "",
                    f = !1;
                li && (e = li + d, f = e in ji);
                for (; b-- && !f;) c = ki[b], e = c + d, f = e in ji;
                f && (li = c);
                if (b = f ? e : null) ii[a] = b;
                else throw Error("Could not find any variant of CSS property [" + a + "]");
            }
        return b
    }
    r("H.dom.cssPrefixer.prefix", hi);
    var ki = ["O", "Ms", "ms", "Moz", "Webkit"],
        ii = {},
        li = "",
        ji = document.createElement("span").style;

    function mi(a, b, c, d, e) {
        b && (this.c = b);
        Ta(c) && (this.te = !!c);
        this.te && d && (this.b = new Th(d.w, d.h));
        e && (this.f = {
            crossOrigin: "anonymous"
        });
        switch (ni[Ya(a)]) {
            case 2:
                this.ic = a;
                oi(this, 1);
                break;
            case 1:
                if (Ie(a)) {
                    this.ic = a;
                    pi(this);
                    oi(this, 1);
                    break
                }
                a = a.src;
            case 0:
                if (a) {
                    a = xe(a);
                    this.a = new Gh("image", a, A, this.f);
                    this.a.then(z(this.i, this), z(this.g, this));
                    break
                }
            default:
                throw oi(this, -1), new C(mi, 0, "No image data");
        }
    }
    p = mi.prototype;
    p.G = 0;
    p.getState = function() {
        return this.G
    };

    function oi(a, b) {
        a.G = b;
        delete a.a;
        a.c && a.c(b, a)
    }
    p.te = !0;

    function pi(a) {
        if (a.te) {
            var b = a.ic,
                c = qi(a),
                d, e = c && c.w || +b.width,
                f = c && c.h || +b.height;
            B(b, w.HTMLCanvasElement) ? c = b : (c = b.ownerDocument.createElement("CANVAS"), c.width = e, c.height = f, d = c.getContext("2d"), d.drawImage(b, 0, 0, e, f));
            a.ic = c
        }
    }
    p.ic = x;
    p.getData = function() {
        return this.ic
    };
    var ni = {
        String: 0,
        HTMLImageElement: 1,
        HTMLCanvasElement: 2
    };
    mi.prototype.b = x;

    function qi(a) {
        var b = a.b,
            c, d, e, f;
        if (!b) {
            c = a.ic;
            b = c.naturalWidth || c.width;
            if (0 === b && ve && 1 === ni[Ya(c)]) {
                d = !0;
                if (e = c.parentNode) f = c.nextSibling;
                document.body.appendChild(c)
            }
            a.b = b = new Th(c.naturalWidth || c.width, c.naturalHeight || c.height);
            d && (e ? e.insertBefore(c, f) : document.body.removeChild(c))
        }
        return b
    }
    mi.prototype.i = function(a) {
        this.ic = a;
        pi(this);
        oi(this, 1)
    };
    mi.prototype.g = function() {
        oi(this, -1)
    };
    mi.prototype.cancel = function() {
        this.a && this.a.cancel()
    };

    function ri(a, b) {
        var c, d, e, f;
        this.uid = si.next();
        ri.u.constructor.call(this);
        if (b) {
            c = "size";
            if (c in b) {
                d = b[c];
                if (!d || isNaN(d.w) || isNaN(d.h)) throw new C(ri, 1, c);
                this.b = new Th(d.w, d.h)
            }
            c = "anchor";
            if (c in b) {
                d = b[c];
                if (!d || isNaN(d.x) || isNaN(d.y)) throw new C(ri, 1, c);
                this.a = new M(d.x, d.y)
            }
            c = "hitArea";
            c in b && (d = b[c], B(d, Uh, ri, 1), this.g = b[c]);
            c = "asCanvas";
            c in b && (e = b[c]);
            c = "crossOrigin";
            c in b && (f = b[c])
        }
        c = new mi(a, z(this.i, this), e, this.b, f);
        d = this.G = c.getState();
        0 !== d ? this.i(d, c) : this.f = c
    }
    v(ri, I);
    r("H.map.Icon", ri);
    var si = new ye;
    ri.prototype.Pc = {
        ERROR: -1,
        LOADING: 0,
        READY: 1
    };
    ri.prototype.State = ri.prototype.Pc;
    ri.prototype.getState = function() {
        return this.G
    };
    ri.prototype.getState = ri.prototype.getState;
    ri.prototype.i = function(a, b) {
        this.c = b.getData();
        if (1 === a) {
            var c = this.b;
            c || (c = this.b = 1 === b.G ? qi(b) : x);
            this.a || (this.a = new M(c.w / 2 | 0, c.h))
        }
        this.f && (this.G = a, delete this.f, this.dispatchEvent("statechange"))
    };
    ri.prototype.c = x;
    ri.prototype.Pb = function() {
        return this.c
    };
    ri.prototype.getBitmap = ri.prototype.Pb;
    ri.prototype.b = x;
    ri.prototype.o = function() {
        return this.b
    };
    ri.prototype.getSize = ri.prototype.o;
    ri.prototype.a = x;
    ri.prototype.j = function() {
        return this.a
    };
    ri.prototype.getAnchor = ri.prototype.j;
    ri.prototype.g = x;
    ri.prototype.l = function() {
        return this.g
    };
    ri.prototype.getHitArea = ri.prototype.l;
    ri.prototype.D = function() {
        ri.u.D.call(this);
        this.c ? (this.c.removeAttribute("src"), delete this.c) : (this.f.cancel(), delete this.f)
    };
    var ti = he;
    r("H.util.events.listenOnce", ti);
    r("H.util.events.dispatchEvent", function(a, b) {
        return a.dispatchEvent(b)
    });
    r("H.util.events.fireListeners", function(a, b, c, d) {
        return zd(a) ? a.dc(b, c, d) : ke(a, b, c, d)
    });
    var ui = ae;
    r("H.util.events.listen", ui);
    var vi = ie;
    r("H.util.events.unlisten", vi);
    var wi = le,
        le = function(a, b) {
            var c, d, e, f = !0;
            c = b[b.currentTarget === b.target ? "AT_TARGET" : a.ya ? "CAPTURING_PHASE" : (d = !0, "BUBBLING_PHASE")];
            if (!d || "pointerenter" !== (e = b.type) && "pointerleave" !== e) b.eventPhase = c, f = wi(a, b), d && a.src && a.src.jb && null === a.src.jb() && delete b.eventPhase;
            return f
        };

    function xi(a, b) {
        xi.u.constructor.call(this, a, b)
    }
    v(xi, Wh);
    r("H.map.Marker", xi);
    p = xi.prototype;
    p.type = Pe.MARKER;
    p.je = 1;
    p.ua = function(a) {
        var b;
        if (a !== Me.VISUAL || 1 === this.Yg || 1 === this.icon.getState()) b = xi.u.ua.call(this, a);
        return b || !1
    };
    p.Yg = 0;
    p.pg = ri;
    p.Le = !1;
    p.Hg = function() {
        this.ua(Me.VISUAL)
    };
    p.$b = function(a) {
        var b = this.icon;
        this.Le && (b.removeEventListener("statechange", this.Hg, !1, this), delete this.Le);
        b && (this.Yg = b.getState());
        xi.u.$b.call(this, a);
        0 === a.getState() && (this.Le = !0, ti(a, "statechange", this.Hg, !1, this));
        return this
    };
    xi.prototype.setIcon = xi.prototype.$b;
    xi.prototype.c = function(a) {
        return new ri(a.svg, a)
    };

    function yi(a, b, c, d) {
        yi.u.constructor.call(this, a, b, c);
        this.modifiers = d
    }
    v(yi, Ne);
    r("H.map.ChangeEvent", yi);
    yi.prototype.b = 1;
    yi.prototype.FOV = yi.prototype.b;
    yi.prototype.PITCH = 2;
    yi.prototype.PITCH = yi.prototype.PITCH;
    yi.prototype.POSITION = 4;
    yi.prototype.POSITION = yi.prototype.POSITION;
    yi.prototype.c = 8;
    yi.prototype.ROLL = yi.prototype.c;
    yi.prototype.f = 16;
    yi.prototype.SIZE = yi.prototype.f;
    yi.prototype.g = 32;
    yi.prototype.YAW = yi.prototype.g;
    yi.prototype.ZOOM = 64;
    yi.prototype.ZOOM = yi.prototype.ZOOM;

    function zi() {
        this.Y = [];
        zi.u.constructor.call(this)
    }
    v(zi, I);
    r("H.util.OList", zi);

    function Ai(a, b, c) {
        a = a.Y.length;
        var d;
        if (c) d = a;
        else if (D(d = 0 > (d = +b) ? mb(0, a + d) : lb(a, d))) throw new ec(zi, b, [0, a - 1]);
        return d
    }
    zi.prototype.add = function(a, b) {
        var c = Ai(this, b, D(b));
        this.Y.splice(c, 0, a);
        this.dispatchEvent(new Bi(this, this.a.Lc, c, a, null, null))
    };
    zi.prototype.add = zi.prototype.add;

    function Ci(a, b) {
        var c = a.Y.splice(b, 1)[0];
        a.dispatchEvent(new Bi(a, a.a.Nc, b, null, c, null));
        return c
    }
    zi.prototype.b = function(a) {
        this.get(a);
        return Ci(this, a)
    };
    zi.prototype.removeAt = zi.prototype.b;
    zi.prototype.remove = function(a) {
        a = this.indexOf(a);
        return 0 <= a ? (Ci(this, a), !0) : !1
    };
    zi.prototype.remove = zi.prototype.remove;
    zi.prototype.set = function(a, b) {
        var c = this.get(a);
        a = Ai(this, a, !1);
        c = this.Y[a];
        this.Y[a] = b;
        this.dispatchEvent(new Bi(this, this.a.td, a, b, c, null));
        return c
    };
    zi.prototype.set = zi.prototype.set;
    zi.prototype.indexOf = function(a) {
        return this.Y.indexOf(a)
    };
    zi.prototype.indexOf = zi.prototype.indexOf;
    zi.prototype.get = function(a) {
        var b = Ai(this, a, !1),
            c = this.Y;
        if (b >= c.length) throw new ec(this.get, a, [0, c.length - 1]);
        return c[b]
    };
    zi.prototype.get = zi.prototype.get;
    zi.prototype.g = function() {
        return this.Y.length
    };
    zi.prototype.getLength = zi.prototype.g;
    zi.prototype.c = function() {
        return [].concat(this.Y)
    };
    zi.prototype.asArray = zi.prototype.c;
    zi.prototype.f = function() {
        for (var a = this.Y.length; a--;) Ci(this, a)
    };
    zi.prototype.flush = zi.prototype.f;
    zi.prototype.D = function() {
        this.f();
        zi.u.D.call(this)
    };
    zi.prototype.a = {
        Lc: "add",
        Nc: "remove",
        td: "set",
        Pi: "move"
    };

    function Bi(a, b, c, d, e, f) {
        Bi.u.constructor.call(this, b, a);
        this.idx = c;
        this.added = d;
        this.removed = e;
        this.moved = f
    }
    v(Bi, Bc);

    function Di(a) {
        Di.u.constructor.call(this);
        this.dispatchEvent = z(this.dispatchEvent, this);
        if (a)
            for (var b = 0, c = a.length; b < c; b++) this.add(a[b])
    }
    v(Di, zi);
    r("H.map.DataModel", Di);
    Di.prototype.add = function(a, b) {
        B(a, mh, this.add, 0);
        Di.u.add.call(this, a, b);
        a.addEventListener(a.a.la, this.dispatchEvent, !1)
    };
    Di.prototype.add = Di.prototype.add;
    Di.prototype.set = function(a, b) {
        var c;
        B(b, mh, this.set, 0);
        c = Di.u.set.call(this, a, b);
        b.addEventListener(b.a.la, this.dispatchEvent, !1);
        c.removeEventListener(c.a.la, this.dispatchEvent, !1);
        return c
    };
    Di.prototype.set = Di.prototype.set;
    Di.prototype.b = function(a) {
        var b;
        (b = Di.u.b.call(this, a)) && b.removeEventListener(b.a.la, this.dispatchEvent, !1);
        return b
    };
    Di.prototype.removeAt = Di.prototype.b;
    Di.prototype.remove = function(a) {
        var b;
        (b = Di.u.remove.call(this, a)) && a.removeEventListener(a.a.la, this.dispatchEvent, !1);
        return b
    };
    Di.prototype.remove = Di.prototype.remove;
    Di.prototype.f = function() {
        for (var a = this.Y.length; a--;) this.b(a);
        Di.u.f.call(this)
    };
    Di.prototype.flush = Di.prototype.f;

    function Ei(a, b) {
        sa(a) && (this.i = a);
        ab(b) && (this.a = b)
    }
    r("H.util.Request", Ei);
    Ei.State = {
        PENDING: 0,
        PROCESSING: 1,
        COMPLETE: 2,
        CANCELLED: 3,
        ERROR: 4
    };
    var Fi = {
            Vf: 0,
            ne: 1,
            le: 2,
            Ji: 3,
            ERROR: 4
        },
        Gi = [0, 1, 2, 3, 4];
    Ei.prototype.G = 0;
    Ei.prototype.getState = function() {
        return this.G
    };
    Ei.prototype.getState = Ei.prototype.getState;
    Ei.prototype.L = function(a) {
        if (0 > Gi.indexOf(a)) throw new C(this.L, 0, a);
        if (this.G !== a || 1 === a && 1 < this.a) this.G = a, this.i && this.i(this)
    };
    Ei.prototype.a = 1;
    Ei.prototype.m = function() {
        return this.a
    };
    Ei.prototype.getTotal = Ei.prototype.m;
    Ei.prototype.b = 0;
    Ei.prototype.o = function() {
        return this.b
    };
    Ei.prototype.getProcessed = Ei.prototype.o;
    Ei.prototype.g = 0;
    Ei.prototype.j = function() {
        return this.g
    };
    Ei.prototype.getFailed = Ei.prototype.j;

    function Hi(a, b) {
        a.b < a.a && (Ta(b) || (b = Fi.le), b === Fi.Vf || b === Fi.ne || a.G !== Fi.Vf && a.G !== Fi.ne || (a.b++, b !== Fi.le && a.g++, a.L(a.b < a.a ? Fi.ne : Fi.le)))
    }
    Ei.prototype.cancel = function() {
        3 !== this.G && (this.Sc(), this.L(3))
    };
    Ei.prototype.cancel = Ei.prototype.cancel;

    function Ii() {}
    r("H.util.ICapturable", Ii);
    Ii.prototype.ya = function() {};
    Ii.prototype.capture = Ii.prototype.ya;
    r("H.util.Disposable", xc);
    xc.prototype.Eb = xc.prototype.Eb;
    xc.prototype.addOnDisposeCallback = xc.prototype.Eb;
    r("H.util.dispose", Ac);

    function Ji(a, b) {
        var c = a.b,
            d = c.ownerDocument;
        Ji.u.constructor.call(this);
        this.a = a;
        this.b = c = c.appendChild(Ki(d, "DIV", "position:absolute;bottom:4.55em;left:0.5em;z-index:1;height:0px;direction:ltr"));
        this.ve = Ki(d, "DIV", "position:absolute;top:0px;pointer-events:none;", Li);
        this.m = c.appendChild(this.ve).firstChild.firstChild.style;
        c = c.appendChild(Ki(d, "DIV", "-webkit-touch-callout: none;-webkit-user-select:none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select:none;whiteSpace:nowrap;position:relative;top:2.73em;padding-left:1px"));
        this.i = c.appendChild(Ki(d, "SPAN"));
        this.i.setAttribute("unselectable", "on");
        this.l = c.appendChild(Ki(d, "A", "color:inherit", "Terms of use"));
        this.l.target = "_blank";
        this.s = c = c.appendChild(Ki(d, "SPAN", "color:inherit", " | "));
        this.B = c.appendChild(function() {
            var a = Ki(d, "A", "color:inherit", "Report image");
            a.target = "_blank";
            return a
        }());
        this.o = Qa(Mi);
        this.g(b);
        this.f = z(this.f, this);
        this.c = z(this.c, this);
        this.a.addEventListener(this.a.v.Sf, this.f);
        this.a.fa.addEventListener("add", this.c);
        this.a.fa.addEventListener("remove",
            this.c);
        this.a.fa.addEventListener("set", this.c);
        this.c()
    }
    var Ni;
    v(Ji, xc);
    r("H.map.Imprint", Ji);
    var Mi = {
        font: "11px Arial,sans-serif",
        href: "https://legal.here.com/{LN}/terms/serviceterms/{CN}",
        invert: !1,
        reportHref: "https://wego.here.com/",
        locale: "en-US"
    };
    Ji.prototype.g = function(a) {
        var b, c;
        a || (this.o = Qa(Mi));
        c = this.o;
        for (b in c) a && b in a && (c[b] = a[b]);
        a = c.invert;
        this.m.fill = a ? "#FFF" : "rgba(0,0,0, 0.7)";
        this.b.style.color = a ? "#FFF" : "#333";
        this.sg = a;
        a = c.locale;
        Oi[a] || (a = "en-US", c.locale = a);
        this.l.innerHTML = Oi[a];
        a = a.split("-");
        this.l.href = c.href.replace("{LN}", a[0]).replace("{CN}", a[1].toLowerCase());
        this.b.style.font = c.font
    };
    Ji.prototype.setOptions = Ji.prototype.g;

    function Ki(a, b, c, d) {
        a = a.createElement(b);
        c && (a.style.cssText = c);
        d && (a.innerHTML = d);
        return a
    }
    Ji.prototype.v = function() {
        return this.b
    };
    Ji.prototype.getElement = Ji.prototype.v;
    Ji.prototype.f = function() {
        var a = Mi.reportHref,
            b = this.a,
            c = this.B,
            d = this.s,
            e;
        b.g().type !== Pi ? d.style.display = "none" : (b = b.c.Ab(), e = b.position, d.style.display = "inline", c.href = a + [e.lat, e.lng, 22, b.yaw, 90 + b.pitch].join() + ",panorama.day,report");
        this.i.innerHTML = this.j + " " + this.Ia() + " | "
    };
    Ji.prototype.c = function() {
        this.f();
        setTimeout(this.f, 5E3)
    };
    var Li = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="3.64em" height="2.72em" viewBox="7 10 33 18" style="position: relative; left: 2px;"><g><path id="triangle_22_" d="M14.1,28l-3.6,3.6L7,28L14.1,28z"/><path id="here_21_" d="M19.4,19.9c-0.7-0.9-0.7-1.4-0.2-1.8c0.6-0.6,1.1-0.3,1.8,0.3L19.4,19.9z M27,10.3c0.6-0.6,1.1-0.3,1.8,0.3l-1.5,1.5C26.5,11.2,26.6,10.7,27,10.3z M31.6,11.8c-0.7,1-1.9,2.7-3.2,1.4l3.2-3.2c-0.3-0.3-0.5-0.6-0.7-0.7c-1.7-1.7-3.7-1.7-5.2-0.2c-1,1-1.3,2.2-1,3.3l-1-1.1c-0.3,0.2-1.5,1.2-0.6,2.9l-1.1-1l-1.5,1.5l2.1,2.1C21,15.5,19.3,15.6,18,17c-1.5,1.5-1.4,3.2-0.3,4.7l-0.2-0.2c-1.5-1.5-3-0.9-3.8-0.2c-0.6,0.6-1,1.4-0.8,2l-3.1-3.1L8,21.8l6.2,6.2h3.3l-2.2-2.2c-1.2-1.2-1.2-1.8-0.6-2.4c0.5-0.5,1.2-0.2,2.3,0.9l2.2,2.2l1.7-1.7l-2.1-2.1c1.5,1.1,3.3,1.2,4.9-0.4c0,0,0,0,0,0l0,0c1-0.9,1.3-1.8,1.3-1.8l-1.3-0.8c-0.7,1-1.9,2.7-3.1,1.5l3.2-3.2l2,2l1.7-1.7l-2.5-2.5c-1.2-1.2-0.5-2.3,0-2.7c0.2,0.5,0.6,0.9,1,1.4c1.6,1.6,3.7,1.9,5.5,0.1c0,0,0,0,0,0l0,0c1-0.9,1.3-1.8,1.3-1.8L31.6,11.8z"/></g></svg>',
        Qi =
        "1987&ndash;" + mb(2015, (new Date).getFullYear()) + " HERE";
    Ji.prototype.Ia = function() {
        var a = this.a,
            b = a.getZoom(),
            c = a.ba(),
            a = a.fa,
            d = a.Y.length,
            e = {},
            f = 0,
            g, h, k, l = [Qi];
        if (c)
            for (; f < d; f++)
                if (h = a.get(f).getCopyrights(c, b))
                    for (g = 0; g < h.length; g++) e[k = h[g].label] || (l.push(k), e[k] = 1);
        return l.join(", ")
    };
    Ji.prototype.getCopyrights = Ji.prototype.Ia;
    Ji.prototype.Na = function() {
        return this.b.style
    };
    Ji.prototype.getStyle = Ji.prototype.Na;
    Ji.prototype.j = String.fromCharCode(169);
    Ji.prototype.D = function() {
        this.a.removeEventListener(this.a.v.Sf, this.f);
        this.a.fa.removeEventListener("add", this.c);
        this.a.fa.removeEventListener("remove", this.c);
        this.a.fa.removeEventListener("set", this.c);
        this.b.parentNode && Ge(this.b)
    };
    Ji.prototype.ya = function(a, b, c, d) {
        var e = a.getContext("2d"),
            f = window.getComputedStyle(this.i),
            g = $a(f.getPropertyValue("font-size")),
            h;
        h = this.ve.childNodes[0];
        var k = this.b.ownerDocument,
            l = this.a.b,
            m = +a.height,
            n = nb(this.b.offsetLeft * b),
            q = nb(m - (l.offsetHeight - this.b.offsetTop) * b),
            l = h.getBoundingClientRect ? h.getBoundingClientRect() : {},
            t = l.width * b,
            u = l.height * b,
            y = sc;
        sa(d) && (y = function() {
            d("capture_error")
        });
        h = this.j + " " + function(a) {
            a = Ki(k, "div", null, a);
            return a.textContent || a.innerText || ""
        }(this.Ia());
        e.font =
            g * b + "px " + f.getPropertyValue("font-family");
        e.fillStyle = f.getPropertyValue("color");
        e.textBaseline = "top";
        e.fillText(h, n, q + nb(l.height * b));
        Ri(this, e.font, function(b) {
            (new Gh("image", b)).then(function(b) {
                e.drawImage(b, n, q, t, u);
                c(a)
            }, y)
        }, y)
    };
    Ji.prototype.capture = Ji.prototype.ya;

    function Ri(a, b, c, d) {
        Si(z(function(a) {
            a ? this.sg ? c("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAADNklEQVRYR82XW6hVVRSGv7+rmJfSMKSnSkMEfY7EogcJC7tilGRopBAiSaI+SBARQSCIIqgFISih2YW0oAgLCsKXojA0RB+81VugZEFZv/yHuWTt7d7Hfc4+6+h4OWefNfcc3xlj/v+YS1zjoab5bE8DZgGngB8keSg5GwO0PQ54F3i2BnQIWCLpx14hGwG0fT3wOfBwB5DzwOOSDvQC2RTgM8Ae4D/gaeA3YDdwN5AWvyxp+6gD2r4OmAq8AbwInAMmA/OAT4CbgBWStvYClzUjWkHbrwHLgF8LVHJ8DDxah7P9JHCil7M40oA/A7OBC8ANtSqlrQOVs30/8CWQat8r6cxg1RwRQNvPA88Bk4D7gJzBV4A5teSp5MlS4VuA/ZIeu1Kr+wa0/QTwIRDlRhT5eTswBvi2CKOd42AULilndNAYCcA7gK+BmbVMiyXtsh3Qt4FFBTgW8w6wXtLfV4LrSyS2FwAvAWOBX+JtwF0laUDmS/oun23fDNwJnJb0Ty9g1ZphVdB2qrK2LdFfBbb685/AIxXkUKDqa4cMaDs2kjalRe8Fola57J3qRQSJviGHA3gMuAdYI2lDUfDOArQLWAd8VTuTOW9vjUoFy6TIGYpS9wKfAjuK5wVuSfn91iKcvZJeHy5ci0hsZwzNk5Qh3xIFbLyks7aPAtPLgv+L4VZwDwLvA6uKz6XdfcVAi22PBz4q4+lVSRurXW2vKYKIZfwEHCmmXC35HngAyITYD0ys2t8XWflyBfhmvKm24QCk7aVFCPVc7WMszzKucknI+NoHPCUppt13VICZm2nNwjoksByY0SXL72Vi3FieZ97mgrpyqF432H9xScW2O0H+W6oSE/4D2FYuA9kzlUzVTwO3Ad9IOtx3ydo2aLGZLpABm5KW2Z4AfAbMLfsEcpGkKLqRuMwHu0CukrSpCCrvGlF6hBEVL5MUw24kOhp1B8gc+FTqgxpkFLuzSbjk6jpJOkC2tDPeKCkVbDRkO67fDTTC2VK7vgfyBUlfNEpV2zyAK4HNXRLmZfshScdHC6g9T+WDGU2XpkdZdNXhWs6g7dXAhmsJ7jKR2M77bG4kV7Wt9TZfBLgYEC7PSpcIAAAAAElFTkSuQmCC") : c("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIMSURBVFiFzdZPiE1RGADwXzPTTPIMQoodVpbKgpoUG5qExUi8DSVJQv4slJJsbNjYWFhNETWLUUosRDRLUVLCYhIiojFojHkW997uvefNGIuZc99Xp/fOO6/Or++c75xDi0d7hDlWYQNqeB9hvv+OGq6jUWjPsKZKVBbtuKOMy9p3bKqOlsROCWYc27AWr9PfJnCgKlgbluNqivmGDmzBrxR3sCocnMEw7sqXdEAzboeK9uLTFPVbed8VcesxglFJtqNEHbcxlIL68ChADuCSpEgauBULt11SDI3C5yJJdrLCCNsQumMBl+J5AKinY4slBfNTfsRcxJwYsK0YxD3J0r1RPut6Cv/twgp0xoDBBc3LNhr0RwJktNifAn7gsnLmsuxVinyVTn4i7dcLoH4sU96Tp2Pi2uSVehN75Gdev+QO7pIXztmZnLwTvf+AzU+/v5Rn50+A24gP2IW5M4mbJ7+ejgVjJ/EpHXuCa8p77nGK68FX5eWfsTgfTJoh92qu1vAaa+CtPJuDZuEh3CHZUyHyxSSYrL3DWKE/gStm8aybDDkmKYperJM/BrJMnsJuHMLq2YJNh/wsX7JuPAyQfTFg0yGPFMZreCCv4n2xgTQjxyXP+CxquK8iXBYhMlzOtliQBVg4RVuCG/iSto/YHAuWxWFTHyXDWBkbNFkc1cK4LI5rYVwW57QY7i/pZeJv8QQJRQAAAABJRU5ErkJggg==") :
                (a = this.ve.cloneNode(!0), a.firstChild.setAttribute("style", "font:" + b), c(xe(a.innerHTML)))
        }, a), d)
    }
    Ji.prototype.sg = !1;

    function Si(a, b) {
        var c = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(Li),
            d = Ni;
        Ta(d) ? a(d) : (new Gh("image", c)).then(function(b) {
            te.drawImage(b, 0, 0);
            try {
                te.getImageData(0, 0, 1, 1), d = !1
            } catch (c) {
                d = 18 === c.code
            } finally {
                Ni = d, a(d)
            }
        }, b)
    }
    var Oi = {
        "de-DE": "Nutzungsbedingungen",
        "en-US": "Terms of use",
        "en-GB": "Terms of use",
        "es-ES": "Condiciones de uso",
        "fi-FI": "Palveluehdot",
        "fr-FR": "Conditions d'utilisation",
        "it-IT": "Condizioni di utilizzo",
        "nl-NL": "Dienstvoorwaarden",
        "pl-PL": "Warunki \u015bwiadczenia us\u0142ugi",
        "pt-BR": "Termos de servi\u00e7o",
        "pt-PT": "Termos do servi\u00e7o",
        "ru-RU": "\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",
        "tr-TR": "Servis Ko\u015fullar\u0131",
        "zh-CN": "\u4f7f\u7528\u6761\u6b3e"
    };

    function Ti(a, b) {
        if (D(this.x = +a)) throw new C(Ti, 0, a);
        if (D(this.y = +b)) throw new C(Ti, 1, b);
    }
    Ti.prototype.add = function(a) {
        return new Ti(this.x + a.x, this.y + a.y)
    };
    Ti.prototype.a = function(a) {
        if (!B(a, Ti)) throw new C(this.a, 0, a);
        a = this.b(a);
        return a.x + a.y
    };
    Ti.prototype.b = function(a) {
        if (!B(a, Ti)) throw new C(this.b, 0, a);
        return new Ti(this.x * a.x, this.y * a.y)
    };
    Ti.prototype.Ja = function(a) {
        return new Ti(this.x * a, this.y * a)
    };

    function Ui(a) {
        return tb(a.a(a))
    };

    function Vi(a) {
        a = a || {};
        this.j = a.minSpeed || 3;
        this.l = a.vectorTolerance || 3;
        this.i = a.maxSpeed || 300;
        this.m = a.timeTolerance || 50;
        this.b = [];
        this.f = this.g = !1;
        this.c = this.a = null
    }

    function Wi(a, b) {
        var c, d, e, f;
        b ? (a.bifocal && b.bifocal ? (c = Xi(a), d = Xi(b)) : b.bifocal ? (c = Yi(a), e = Yi(b).distance(c), f = Yi(b, !0).distance(c), d = e > f ? Yi(b, !0) : Yi(b)) : a.bifocal && !b.bifocal ? (d = Yi(b), e = Yi(a).distance(d), f = Yi(a, !0).distance(d), c = e > f ? Yi(a, !0) : Yi(a)) : (c = a, d = b), e = c.x - d.x, c = c.y - d.y, c = new Ti(e, c)) : c = new Ti(0, 0);
        return c
    }

    function Zi(a) {
        var b;
        if (!a || D(a.bx) || D(a.by)) return 0;
        b = a.bx - a.x;
        a = a.by - a.y;
        return tb(b * b + a * a)
    }

    function Xi(a) {
        var b, c;
        !a || D(a.bx) || D(a.by) || (b = a.x - a.bx, c = a.y - a.by, b = new M(a.x - b / 2, a.y - c / 2));
        return b
    }

    function Yi(a, b) {
        return b ? new M(a.bx, a.by) : new M(a.x, a.y)
    }
    p = Vi.prototype;
    p.start = function(a, b) {
        if (D(a)) throw new C(this.start, 0, a);
        this.g && this.clear();
        this.o = a;
        this.g = !0;
        this.f = !!b
    };
    p.gh = function(a, b, c, d, e) {
        var f = D(a) ? 0 : D(b) ? 1 : null != c && D(c) ? 2 : null != d && D(d) ? 3 : null != e && D(e) ? 4 : A;
        if (0 <= f) throw new C(this.gh, f, arguments[f]);
        this.g && (e = e || (new Date).getTime(), this.c = this.a, this.a = {
            x: a,
            y: b,
            bx: null != c ? c : NaN,
            by: null != d ? d : NaN,
            ts: e,
            bifocal: null != c && null != d
        }, this.f && this.b.push(this.a))
    };
    p.clear = function() {
        this.b = [];
        this.f = this.g = !1;
        this.a = this.c = null
    };
    p.Fd = function(a) {
        if (D(a)) throw new C(this.Fd, 0, a);
        return !!(this.o & a)
    };
    p.mb = function() {
        return this.g
    };
    p.Ge = ba(1);

    function $i(a) {
        var b = a.b.length,
            c = 0,
            d = new Ti(0, 0);
        if (a.f)
            for (; --b && c < a.l;) d = d.add(Wi(a.b[b], a.b[b - 1])), c++;
        else d = Wi(a.a, a.c);
        a = d;
        b = Ui(a);
        return 0 !== b ? new Ti(a.x / b, a.y / b) : a
    }

    function aj(a) {
        var b;
        b = b || Date.now();
        var c = a.b.length,
            d = a.b[c - 1],
            e = 0,
            f = 0;
        if (a.f) {
            for (; --c && e < a.l;) f += Ui(Wi(a.b[c], a.b[c - 1])), e++;
            c = f / e
        } else d = a.a, c = Ui(Wi(a.a, a.c));
        c >= a.j && b - d.ts <= a.m ? c = c > a.i ? a.i : c : c = 0;
        return c
    }
    p.hg = function(a) {
        var b;
        b = this.a;
        var c;
        if (D(a)) throw new C(this.hg, 0, a);
        b && this.c && (b = Zi(this.c), 0 !== b && (c = Zi(this.a), a = sb(ub(2, a) * (c / b)) / Cb));
        return a
    };

    function bj(a, b, c, d) {
        bj.u.constructor.call(this);
        this.ac = a;
        this.za = d;
        this.a = a.appendChild(this.createElement(a.ownerDocument));
        cj(this, b, c)
    }
    v(bj, xc);

    function cj(a, b, c) {
        a.size ? (a.size.w = b, a.size.h = c) : a.size = new Th(b, c);
        a.eh(a.a, a.a.style, b, c, a.za)
    }
    p = bj.prototype;
    p.tg = !0;
    p.setVisibility = function(a) {
        a !== this.tg && (this.a.style.display = a ? "block" : "none", this.tg = a)
    };
    p.Se = 1;

    function dj(a, b) {
        a.Se !== b && (a.dh(b), a.Se = b)
    }
    p.Bd = function() {
        return this.Se
    };
    p.D = function() {
        this.clear();
        this.ac.removeChild(this.a);
        cj(this, 0, 0);
        this.a = this.ac = null;
        bj.u.D.call(this)
    };
    p.Te = 0;
    p.Ib = function() {
        ++this.Te
    };

    function ej(a) {
        this.a = a
    }
    v(ej, xc);
    ej.prototype.od = function(a) {
        var b = this.b;
        a !== b && (this.b = a, a.Ib(), b && (--b.Te || b.J()))
    };
    ej.prototype.D = function() {
        var a = this.b;
        --a.Te || a.J()
    };

    function fj(a, b) {
        fj.u.constructor.call(this, a);
        this.Nb = !(!b || !b.Nb);
        this.l = !(!b || !b.noWrap);
        this.g = {}
    }
    v(fj, ej);
    fj.prototype.od = function(a) {
        fj.u.od.call(this, a);
        this.i = a.ac.ownerDocument
    };
    var gj = function(a, b) {
        var c = b.Ca();
        return B(c, Pf) ? c.ma : (a[0] = c, a)
    }.bind(null, []);
    fj.prototype.ca = function(a, b, c, d, e, f) {
        var g, h, k = this.a,
            l, m, n, q, t, u, y;
        this.m = g = this.g;
        this.g = h = {};
        if (d >= k.min && d <= k.max && (l = this.fg(a, d, e, f), m = l.markers, a = m.length)) {
            d = [];
            e = this.b;
            dj(e, k.opacity);
            for (k = 0; k < a; k++)
                for (f = m[k], n = gj(f), q = n.length; q--;)
                    if (t = c.geoToPixel(n[q])) this.l || (u = c.w, t.x -= nb(t.x / u) * u), t.add(b), (u = g[y = f.ta() + "_" + q]) ? delete g[y] : u = {
                        marker: f
                    }, h[y] = u, d.push([u, f, f.sb(), e, t.x, t.y]);
            d.sort(hj);
            a = d.length;
            for (k = 0; k < a; k++) this.wg.apply(this, d[k])
        }
        return !l || l.requested && l.requested === l.total ||
            !l.requested && m.length === l.total ? ij.DONE : ij.PENDING
    };

    function hj(a, b) {
        return Re(Qe(a[1]), Qe(b[1]), !0) || a[5] - b[5] || Re(Qe(a[1]), Qe(b[1]), !1)
    };

    function jj(a, b) {
        jj.u.constructor.apply(this, arguments);
        this.f = 0;
        this.c = [];
        this.Ee = z(this.Ee, this)
    }
    v(jj, fj);
    p = jj.prototype;
    p.fg = function() {
        return this.a.b.apply(this.a, arguments)
    };
    p.ca = function() {
        var a;
        this.Ee();
        this.o = 0;
        a = jj.u.ca.apply(this, arguments);
        var b = this.b,
            c = this.m,
            d;
        for (d in c) kj(this, b, c[d]);
        return 0 === this.c.length && a ? ij.DONE : ij.PENDING
    };
    p.od = function(a) {
        jj.u.od.call(this, a);
        this.j = a.za
    };
    p.Ee = function() {
        for (var a = this.c.length, b, c, d; a--;) d = this.c[a], b = d.sd, c = d.sd.sb(), c.ff(d, c, b);
        this.c.length = 0
    };
    p.wg = function(a, b, c, d, e, f) {
        var g = b.j(),
            h;
        this.Nb || (e = nb(e), f = nb(f));
        a.detail && (g.b(a.bi) ? kj(this, d, a) : h = a.detail);
        h || (a.detail = h = Fe(c.i, this.i, c.c), this.f++, sa(c.ff) && this.c.push(h));
        a.bi = g.a;
        h.style.zIndex = this.o++;
        h.sd = b;
        d.bc(h, e, f, 0, 0)
    };
    var lj, mj = "pointer-events",
        nj;
    if (ve) {
        var oj;
        ve && jc !== x && (jc = (oj = /(MSIE\s+|rv\:)([^\);]+)(\)|;)/.exec(navigator.userAgent)) ? +oj[2] : x);
        nj = jc;
        9 === nj ? mj = "display" : 10 === nj && (mj = "visibility")
    }
    lj = mj;
    jj.prototype.Ma = function(a, b, c) {
        var d = this.j,
            e, f, g, h = De,
            k, l, m, n, q, t;
        if (this.f) {
            a /= d;
            b /= d;
            d = this.i;
            e = d.documentElement;
            f = this.b.a;
            g = f.getBoundingClientRect();
            a += g.left;
            for (b += g.top;
                (l = m = d.elementFromPoint(a, b)) && l !== f && l !== e && m !== n;) {
                for (;
                    (q = l.parentNode) && (!sa(q.contains) || !q.contains(f));) l = q;
                if (q === f && (l !== m || "svg" !== l.nodeName) && 0 > h.indexOf(t = l.sd) && (h === De && (h = []), h.push(t), c)) break;
                k || (k = []);
                n = l.style;
                k.push({
                    bg: n.getPropertyValue(lj),
                    $h: n.getPropertyPriority(lj),
                    style: n
                });
                n.setProperty(lj, "visibility" ===
                    lj ? "hidden" : "none", "important");
                n = m
            }
            if (k)
                for (b = k.length; b--;) a = k[b], a.style.removeProperty(lj), ra(a.bg) && a.style.setProperty(lj, a.bg, a.$h)
        }
        return h
    };
    jj.prototype.dd = function() {
        return 2
    };

    function kj(a, b, c) {
        b.clear(b = c.detail);
        delete b.sd;
        a.f--;
        c = (a = c.marker).sb();
        c.f && c.f(b, c, a)
    }
    jj.prototype.D = function() {
        this.c.length = 0;
        var a = this.b,
            b = this.g,
            c;
        for (c in b) kj(this, a, b[c]);
        this.b.J();
        jj.u.D.call(this)
    };

    function pj(a, b) {
        if (!a) throw new C(pj, 0, a);
        pj.u.constructor.call(this, a);
        this.f = {};
        this.g = b && b.Nb;
        this.l = b && b.noWrap;
        this.i = qj++
    }
    v(pj, ej);
    var qj = 0;
    pj.prototype.ca = function(a, b, c, d, e, f) {
        var g = nb(d),
            h = this.a,
            k = g + (c.exp - h.pixelProjection.exp),
            l = h.max;
        d = h.tileSize;
        var m = h.opacity,
            n, q = this.b,
            t = q.Bd();
        n = q.size.w;
        var u = c.w,
            y = c.x,
            J = c.y,
            T = {};
        if (g < h.min || g > l) return ij.DONE;
        e = h.requestTiles(a, k, e, f, this.i);
        a = e.total;
        e = e.tiles;
        f = e.length;
        this.j = c;
        this.m = b;
        this.c = k;
        t !== m && dj(q, m);
        c = d = d * u / (ub(2, k) * d);
        this.g || (d % 1 && (d = pb(d), u = c / d, y = y / u, J = J / u, u = ub(2, k) * d), y = pb(y), J = pb(J));
        this.o = c;
        k = -d;
        g = n + d;
        for (h = 0; h < f; h++) {
            n = e[h];
            if (l = n.data)
                if (c = b.x - (y - n.x * d), m = b.y - (J - n.y *
                        d), q.bc(l, c, m, d, d), !this.l) {
                    for (t = c;
                        (t -= u) > k;) q.bc(l, t, m, d, d);
                    for (t = c;
                        (t += u) < g;) q.bc(l, t, m, d, d)
                }
            T[this.c + "_" + n.x + "_" + n.y] = n
        }
        this.f = T;
        return f === a ? ij.DONE : ij.PENDING
    };
    pj.prototype.Ma = function(a, b, c) {
        if (Ta(this.c)) {
            var d = this.o,
                e = d / this.a.tileSize,
                f = this.j,
                g = this.m,
                h, k;
            a = f.x + (a - g.x);
            b = f.y + (b - g.y);
            h = pb(f.w / d);
            var l = f = pb(a / d),
                g = pb(b / d);
            rb(l) >= h && (l %= h);
            0 > l && (l = h + l);
            (h = this.f[this.c + "_" + l + "_" + g]) && h.Ma && (k = h.Ma((a - d * f) / e, (b - d * g) / e, c))
        }
        return k || De
    };
    pj.prototype.dd = function() {
        return 0
    };
    var rj, sj = function() {
            function a() {}
            for (var b, c, d, e = Ra("o ms moz webkit "), f = 5; f-- && !b;) b = e[f], b = (c = w[b + (b ? "R" : "r") + "equestAnimationFrame"]) && !D(c.call(window, a)) && (d = w[b + (b ? "C" : "c") + "ancelAnimationFrame"]);
            rj = b ? function(a) {
                return c.call(w, a)
            } : function(a) {
                return w.setTimeout(a, 25)
            };
            return b ? function(a) {
                return d.call(w, a)
            } : function(a) {
                return w.clearTimeout(a)
            }
        }(),
        tj = w.performance && w.performance.now ? function() {
            return w.performance.now()
        } : function() {
            return w.Date.now()
        };

    function qh(a, b, c, d) {
        this.left = +a;
        this.top = +b;
        this.right = +c;
        this.bottom = +d
    }
    r("H.math.Rect", qh);
    qh.prototype.set = qh;
    qh.prototype.set = qh.prototype.set;
    qh.prototype.tb = function() {
        return this.i || (this.i = new M(this.left, this.top))
    };
    qh.prototype.getTopLeft = qh.prototype.tb;
    qh.prototype.rb = function() {
        return this.f || (this.f = new M(this.right, this.bottom))
    };
    qh.prototype.getBottomRight = qh.prototype.rb;
    qh.prototype.a = function(a, b) {
        return this.left <= a && this.right >= a && this.top <= b && this.bottom >= b
    };
    qh.prototype.containsXY = qh.prototype.a;

    function ph(a, b) {
        return new qh(a.x, a.y, b.x, b.y)
    }
    qh.fromPoints = ph;
    qh.prototype.clone = function() {
        return new qh(this.left, this.top, this.right, this.bottom)
    };
    qh.prototype.clone = qh.prototype.clone;
    var ij = {
        PENDING: 0,
        ACTIVE: 1,
        DONE: 2
    };
    r("H.map.render.RenderState", ij);

    function uj(a, b) {
        var c = b || {},
            d, e;
        if (!B(a, Element)) throw new C(uj, 0, a);
        d = a.ownerDocument.createElement("div");
        this.b = a;
        uj.u.constructor.call(this);
        this.padding = new qh(0, 0, 0, 0);
        this.center = new M(0, 0);
        this.margin = 0;
        this.element = d;
        d.style.zIndex = 0;
        d.style.height = d.style.width = "100%";
        d.style.position = "relative" === a.style.position ? "absolute" : "relative";
        this.resize();
        a.appendChild(d);
        (e = c.padding) !== A && this.f(e.top, e.right, e.bottom, e.left);
        this.c((e = c.margin) !== A ? e : 0);
        (e = c.fixedCenter) !== A && (this.g = !!e)
    }
    v(uj, I);
    r("H.map.ViewPort", uj);
    uj.prototype.a = {
        la: "update",
        Oc: "sync"
    };
    uj.prototype.g = !0;
    uj.prototype.c = function(a) {
        if (this.margin !== +a) {
            if (D(this.margin = +a)) throw new C(this.c, 0, a);
            vj(this);
            this.dispatchEvent(this.a.la)
        }
    };
    uj.prototype.setMargin = uj.prototype.c;
    uj.prototype.f = function(a, b, c, d) {
        var e = this.padding;
        if (e.top !== a || e.right !== b || e.bottom !== c || e.left !== d) {
            if (D(a + b + c + d)) throw new C(this.f);
            e.top = a;
            e.right = b;
            e.bottom = c;
            e.left = d;
            vj(this);
            this.dispatchEvent(this.a.la)
        }
    };
    uj.prototype.setPadding = uj.prototype.f;

    function vj(a) {
        var b = a.padding;
        a.center.set((a.width + b.left - b.right) / 2 << 0, (a.height + b.top - b.bottom) / 2 << 0)
    }
    uj.prototype.resize = function() {
        var a = this.b.offsetWidth,
            b = this.b.offsetHeight;
        if (this.width !== a || this.height !== b) this.m = new Th(this.width, this.height), this.width = a, this.height = b, vj(this), this.dispatchEvent(this.a.la)
    };
    uj.prototype.resize = uj.prototype.resize;
    uj.prototype.D = function() {
        w.clearTimeout(this.i);
        this.i = null;
        this.b.removeChild(this.element);
        this.element = this.b = null;
        uj.u.D.call(this)
    };
    uj.prototype.startInteraction = uj.prototype.o;
    uj.prototype.interaction = uj.prototype.j;
    uj.prototype.endInteraction = uj.prototype.l;

    function wj(a, b, c, d) {
        var e = new qh(0, 0, 0, 0);
        wj.u.constructor.call(this);
        this.za = d.pixelRatio;
        this.wa = {
            1: e.clone(),
            2: e.clone(),
            4: e.clone()
        };
        this.g = a;
        if (!a) throw new C(wj, 0, a);
        xj(this);
        a.addEventListener(a.a.la, this.Dc, !1, this);
        this.N = z(this.N, this);
        this.C = z(this.C, this);
        this.B = z(this.B, this);
        a.startInteraction = this.N;
        a.interaction = this.C;
        a.endInteraction = this.B;
        this.I = b;
        if (!b) throw new C(wj, 1, b);
        this.O = z(this.O, this);
        this.j = z(this.j, this);
        this.s = z(this.s, this);
        b.startControl = this.O;
        b.control = this.j;
        b.endControl = this.s;
        b.addEventListener(b.c.la, this.zb, !1, this);
        this.Ga = c;
        if (!c) throw new C(wj, 2, c);
    }
    v(wj, I);
    r("H.map.render.RenderEngine", wj);
    wj.prototype.getBBox = wj.prototype.v;

    function xj(a) {
        var b = a.g,
            c = b.width,
            d = b.height,
            e = b.padding,
            f = e.top,
            g = e.left,
            h = e.bottom,
            e = e.right,
            b = b.margin,
            k = -(c + g - e) / 2 << 0,
            l = -(d + f - h) / 2 << 0,
            c = c + k,
            d = d + l,
            m = a.wa;
        a = a.za;
        m[1].set((k - b) * a, (l - b) * a, (c + b) * a, (d + b) * a);
        m[2].set(k * a, l * a, c * a, d * a);
        m[4].set((k + g) * a, (l + f) * a, (c - e) * a, (d - h) * a)
    }
    wj.prototype.Dc = function() {
        xj(this)
    };
    wj.prototype.D = function() {
        var a = this.I,
            b = this.g;
        a.removeEventListener(a.c.la, this.zb, !1, this);
        a.startControl === this.O && (a.startControl = yj.prototype.B);
        a.control === this.j && (a.control = yj.prototype.v);
        a.endControl === this.s && (a.endControl = yj.prototype.s);
        b.removeEventListener(b.a.la, this.Dc, !1, this);
        b.startInteraction === this.N && (b.startInteraction = uj.prototype.o);
        b.interaction === this.C && (b.interaction = uj.prototype.j);
        b.endInteraction === this.B && (b.endInteraction = uj.prototype.l)
    };
    wj.prototype.getCamForBounds = wj.prototype.P;
    wj.prototype.ya = function() {
        return null
    };
    wj.prototype.setPointer = wj.prototype.sa;

    function zj(a, b) {
        a.style.transition = "opacity 1.5s";
        a.addEventListener("transitionend", function() {
            b()
        }, !1);
        a.style.opacity = 0
    }
    var Aj = {
        ZOOM: 1,
        HEADING: 2,
        TILT: 4,
        INCLINE: 8,
        COORD: 16
    };
    wj.InteractionModifiers = Aj;
    wj.prototype.ee = {
        Xf: "render"
    };
    var Bj = {
        P2D: 0,
        PANORAMA: 1
    };
    wj.EngineType = Bj;

    function Cj(a, b, c, d, e, f) {
        var g = e || "2d";
        Cj.u.constructor.apply(this, arguments);
        this.b = this.a.getContext(g, f);
        this.c = "2d" === g;
        this.f = g;
        this.g = f
    }
    v(Cj, bj);
    p = Cj.prototype;
    p.createElement = function(a) {
        a = a.createElement("CANVAS");
        var b = a.style;
        b.position = "absolute";
        b.top = b.left = 0;
        return a
    };
    p.eh = function(a, b, c, d, e) {
        a.width = mb(c, 1);
        a.height = mb(d, 1);
        b.width = nb(c / e) + "px";
        b.height = nb(d / e) + "px"
    };
    p.dh = function(a) {
        this.b.globalAlpha = a
    };
    p.bc = function(a, b, c, d, e) {
        this.c && this.b.drawImage(a, b, c, d, e)
    };
    p.clear = function(a) {
        var b, c;
        this.c && (a ? this.b.clearRect(b = a.left, c = a.top, a.right - b, a.bottom - c) : this.a.width = this.size.w)
    };
    p.D = function() {
        this.a.width = this.a.height = 0;
        this.b = x;
        Cj.u.D.call(this)
    };

    function Dj() {
        I.call(this);
        this.reset()
    }
    v(Dj, I);
    Dj.prototype.start = function(a, b) {
        this.a && this.reset();
        D(a) || D(b) || (this.atX = a, this.atY = b);
        this.a = !0
    };
    Dj.prototype.g = {
        Mf: "animationupdate"
    };

    function Ej(a) {
        Ej.u.constructor.call(this, Dj.prototype.g.Mf);
        this.offset = a
    }
    v(Ej, Bc);
    Dj.prototype.mb = function() {
        return this.a
    };
    Dj.prototype.set = function(a, b, c) {
        !this.a || this.b === a && this.c === b && this.f === c || (this.b = a, this.c = b, this.f = c, this.dispatchEvent(new Ej(Fj(this))))
    };

    function Fj(a) {
        return {
            x: 91.401472 * a.b,
            y: 91.401472 * a.c,
            z: a.f
        }
    }
    Dj.prototype.reset = function() {
        this.a = !1;
        this.atY = this.atX = null;
        this.f = this.c = this.b = 0
    };

    function Gj(a) {
        a = Fj(a);
        return tb(a.x * a.x + a.y * a.y + a.z * a.z)
    }

    function Hj(a) {
        var b = Fj(a);
        a = Gj(a) || 1;
        return {
            x: b.x / a,
            y: b.y / a,
            z: b.z / a
        }
    }
    Dj.prototype.D = function() {
        this.reset();
        Dj.u.D.call(this)
    };

    function Ij(a, b) {
        var c = b || {};
        B(a, Jj, Ij, 0);
        Ij.u.constructor.call(this, a);
        this.Nb = !!c.Nb;
        this.g = b && b.noWrap;
        this.i = c.yi || 0;
        this.c = [];
        this.f = {}
    }
    v(Ij, ej);
    Ij.prototype.ca = function(a, b, c, d, e) {
        var f, g, h = this.a,
            k, l, m, n, q, t, u = 0,
            y, J, T, ea, la, ob;
        d -= this.i;
        this.c.length = 0;
        f = this.f;
        this.f = g = {};
        if (d >= h.min && d <= h.max && (k = h.C(a, d, e), l = k.overlays, a = l.length))
            for (l.sort(Se), d = this.b, e = this.Nb, ob = h.opacity, h = 0; h < a; h++) m = l[h], n = m.S(), q = c.geoToPixel(n.tb()), t = c.geoToPixel(n.rb()), n = c.w, q.x >= t.x && (q.x -= n), this.g || (u = -((q.x + t.x) / n >> 1) * n), q.x += u, q.add(b), t.x += u, t.add(b), e || (q.round(), t.round()), (n = f[y = m.ta()]) ? delete f[y] : n = {
                    vi: m
                }, g[y] = n, J = q.x, q = q.y, T = t.x, t = t.y, ea = T - J,
                la = t - q, dj(d, m.Bd() * ob), d.bc(m.Pb(), J, q, ea, la), n.Ae ? n.Ae.set(J, q, T, t) : n.Ae = new qh(J, q, T, t), this.c.push(n);
        return !k || k.requested && k.requested === k.total || !k.requested && l.length === k.total ? ij.DONE : ij.PENDING
    };
    Ij.prototype.Ma = function(a, b, c) {
        for (var d = this.c, e = d.length, f, g, h; e--;)
            if (f = d[e], g = f.Ae, g.a(a, b))
                if (f = f.vi, h) h.push(f);
                else if (h = [f], c) break;
        return h || De
    };
    Ij.prototype.dd = function() {
        return 0
    };
    Ij.prototype.D = function() {
        this.c = null;
        Ij.u.D.call(this)
    };
    var Kj = {
        zoom: {
            min: -8,
            max: 28
        },
        camera: {
            alt: {
                min: 0,
                max: 0
            },
            pitch: {
                min: 0,
                max: 0
            },
            roll: {
                min: 0,
                max: 0
            },
            yaw: {
                min: 0,
                max: 0
            },
            fov: {
                min: 70,
                max: 70
            }
        },
        interaction: {
            ZOOM: 1,
            Ki: 16
        },
        capture: !0
    };
    r("H.map.render.p2d.capabilities", Kj);

    function Lj(a, b) {
        this.c = [];
        Lj.u.constructor.apply(this, arguments)
    }
    v(Lj, fj);
    p = Lj.prototype;
    p.fg = function() {
        return this.a.c.apply(this.a, arguments)
    };
    p.ca = function() {
        this.c = [];
        return Lj.u.ca.apply(this, arguments)
    };
    p.wg = function(a, b, c, d, e, f) {
        var g = c.b;
        b = g.w;
        var g = g.h,
            h = c.a;
        this.Nb ? (e -= h.x, f -= h.y) : (e = nb(e - h.x), f = nb(f - h.y));
        d.bc(c.Pb(), e, f, b, g);
        a.detail ? a.detail.set(e, f, e + b, f + g) : a.detail = new qh(e, f, e + b, f + g);
        this.c.push(a)
    };
    p.Ma = function(a, b, c) {
        for (var d = this.c, e = d.length, f, g, h, k = De; e-- && !(f = d[e], g = f.detail, g.a(a, b) && (f = f.marker, (!(h = f.sb().g) || h.a(a - g.left, b - g.top, 0)) && 0 > k.indexOf(f) && (k === De && (k = []), k.push(f), c))););
        return k
    };
    p.dd = function() {
        return 0
    };
    p.D = function() {
        this.c = null;
        Lj.u.D.call(this)
    };

    function Mj(a) {
        var b = 2;
        Mj.u.constructor.call(this, a);
        B(this.a, Oh) && (b = "2d" === a.v ? 0 : 1);
        this.c = b
    }
    v(Mj, ej);
    Mj.prototype.ca = function(a, b, c, d, e, f) {
        var g = this.a,
            h = this.b,
            k = !(B(h, Cj) && "2d" === h.f);
        if (d >= g.min && d <= g.max) return k && h.setVisibility(!0), g.ca(h.a, {
            bounds: a,
            zoom: d,
            screenCenter: b,
            priorityCenter: f,
            projection: c,
            cacheOnly: e,
            size: h.size,
            pixelRatio: h.za
        });
        k && h.setVisibility(!1);
        return ij.DONE
    };
    Mj.prototype.dd = function() {
        return this.c
    };
    r("H.util.animation.ease.LINEAR", function(a) {
        return a
    });
    r("H.util.animation.ease.EASE_IN_QUAD", function(a) {
        return a * a
    });

    function Nj(a) {
        return -a * (a - 2)
    }
    r("H.util.animation.ease.EASE_OUT_QUAD", Nj);
    r("H.util.animation.ease.EASE_IN_OUT_QUINT", function(a) {
        a *= 2;
        return 1 > a ? ub(a, 5) / 2 : (a -= 2, ub(a, 5) / 2 + 1)
    });
    r("H.util.animation.ease.EASE_OUT_CIRC", function(a) {
        return tb(2 * a - a * a)
    });

    function Oj(a, b, c, d) {
        if (!sa(this.i = a)) throw new C(Oj, 0, a);
        if (D(this.g = +b)) throw new C(Oj, 1, b);
        if (!sa(this.f = c) && null != c) throw new C(Oj, 2, c);
        if (!sa(this.c = d) && null != d) throw new C(Oj, 3, d);
        this.id = Pj.next();
        this.a = !1
    }
    r("H.util.animation.Animation", Oj);
    var Pj = new ye;
    Oj.prototype.start = function() {
        var a = this,
            b, c = rj,
            d;
        d = function() {
            var e = tj(),
                f = e - a.Kb,
                g = f / a.g,
                g = 1 < g ? 1 : g;
            a.c && (g = a.c(g));
            a.i(g, f, e - b, e);
            b = e;
            1 <= g ? a.stop() : a.b = c(d)
        };
        a.Kb = tj();
        b = a.Kb;
        a.a = !0;
        a.b = c(d)
    };
    Oj.prototype.start = Oj.prototype.start;
    Oj.prototype.stop = function(a) {
        sj(this.b);
        this.a = !1;
        a || this.f && this.f(this)
    };
    Oj.prototype.stop = Oj.prototype.stop;
    Oj.prototype.mb = function() {
        return this.a
    };
    Oj.prototype.isRunning = Oj.prototype.mb;

    function Qj(a, b) {
        if (D(this.b = +a)) throw new C(Qj, 0, a);
        this.a = 0;
        b && this.f(b)
    }
    r("H.util.kinetics.KineticMove", Qj);
    Qj.prototype.f = function(a) {
        this.a = a;
        return this
    };
    Qj.prototype.setInitialSpeed = Qj.prototype.f;
    Qj.prototype.i = function() {
        return Math.abs(this.a / this.b)
    };
    Qj.prototype.getDuration = Qj.prototype.i;
    Qj.prototype.c = function(a) {
        return this.a + this.b * a
    };
    Qj.prototype.getCurrentSpeed = Qj.prototype.c;
    Qj.prototype.g = function(a) {
        return this.a * a + this.b * a * a / 2
    };
    Qj.prototype.getCurrentPath = Qj.prototype.g;

    function Rj(a, b, c, d) {
        Rj.u.constructor.apply(this, arguments)
    }
    v(Rj, bj);
    p = Rj.prototype;
    p.createElement = function(a) {
        a = a.createElement("DIV");
        a.style.position = "absolute";
        return a
    };
    p.eh = function(a, b, c, d) {
        b.width = c + "px";
        b.height = d + "px"
    };
    p.dh = function(a) {
        this.a.style.opacity = a
    };
    p.bc = function(a, b, c) {
        var d = this.za,
            e = a.style;
        e[hi("transform")] = "matrix(1,0,0,1," + b / d + "," + c / d + ")";
        a.parentNode !== this.a && (e.position = "absolute", this.a.appendChild(a))
    };
    p.clear = function(a) {
        a ? this.a.removeChild(a) : this.a.innerHTML = ""
    };

    function Sj(a, b) {
        this.a = a;
        this.b = b
    }

    function Tj(a, b, c) {
        var d, e, f, g, h, k = [],
            l = {
                ac: a.a,
                width: b.w,
                height: b.h,
                za: a.b
            };
        for (a = 0; a < c.length; a++) {
            b = c[a];
            d = b.dd();
            g = {};
            Ca(g, l);
            e = b.b;
            switch (d) {
                case 0:
                    B(b.a, Oh) && (g.xe = b.a.F);
                    if (d = f && "2d" === f.f) {
                        d = g.xe;
                        var m = f.g;
                        d = m === d ? !0 : m && !d ? !m.alpha && !m.willReadFrequently : d && !m ? !d.alpha && !d.willReadFrequently : !d.alpha === !d.alpha && !m.willReadFrequently === !d.willReadFrequently
                    }
                    d ? h = !1 : e && !h ? (f = e, h = !1) : (f = new Cj(g.ac, g.width, g.height, g.za, "2d", g.xe), h = !0);
                    break;
                case 2:
                    f = e || new Rj(g.ac, g.width, g.height, g.za);
                    h = !e;
                    break;
                default:
                    f = e || new Cj(g.ac, g.width, g.height, g.za, b.a.v, g.xe), h = !e
            }
            k[k.length - 1] !== f && (f.a.style.zIndex = k.length, k.push(f));
            b.od(f)
        }
        return k
    };

    function yj() {
        yj.u.constructor.call(this);
        this.a = {};
        this.g = {
            position: new gc(0, 0),
            pitch: 0,
            yaw: 0,
            roll: 0,
            fov: 70
        };
        this.b = 0
    }
    v(yj, I);
    r("H.map.ViewModel", yj);
    yj.prototype.c = {
        la: "update",
        Oc: "sync"
    };
    yj.prototype.i = Ra("position pitch yaw roll fov zoom");
    var Uj = Ra("fov pitch position roll yaw zoom").reduce(function(a, b) {
        a[b] = yi.prototype[b.toUpperCase()];
        return a
    }, {});

    function Vj(a, b, c, d) {
        var e = d.length,
            f, g, h;
        a.f = 0;
        a.o = {};
        for (a.j = {}; e--;)
            if (f = d[e], h = c[f], g = b[f], null != h) {
                if (a.o[f] = g, a.j[f] = h, b[f] = h, $b(h) && $b(g) && (h.lat !== g.lat || h.lng !== g.lng) || !$b(h) && h !== g) a.f |= Uj[f]
            } else delete b[f];
        return b
    }
    yj.prototype.Ab = function() {
        return Vj(this, {}, this.g, this.i)
    };
    yj.prototype.getCameraData = yj.prototype.Ab;
    yj.prototype.Jb = function(a) {
        var b, c = a.animate;
        if (!a) throw new C(this.Jb, 0, a);
        if ((b = a.position) && !$b(b)) throw new C(this.Jb, 0, "position");
        this.a.zoom = D(a.zoom) ? D(this.a.zoom) ? this.b : this.a.zoom : a.zoom;
        b = this.a.zoom;
        a = Vj(this, {}, a, this.i);
        this.a = {
            animate: c,
            zoom: b,
            camera: a
        };
        this.dispatchEvent(new Wj(this.a));
        return this
    };
    yj.prototype.setCameraData = yj.prototype.Jb;

    function Xj(a, b) {
        var c = b.zoom;
        Vj(a, a.g, b, a.i);
        c !== a.b && (a.f |= Uj.zoom);
        a.o.zoom = a.b;
        a.j.zoom = c;
        a.b = null != c ? c : a.b;
        a.g.zoom = a.b;
        a.a = {};
        a.dispatchEvent(new yi(a.c.Oc, a.j, a.o, a.f))
    }
    yj.prototype.l = function(a, b) {
        if (D(a = +a)) throw new C(this.l, 0, a);
        this.a = {
            animate: b,
            zoom: a,
            camera: this.a.camera || this.g
        };
        this.dispatchEvent(new Wj(this.a))
    };
    yj.prototype.setZoom = yj.prototype.l;
    yj.prototype.getZoom = function() {
        return this.b
    };
    yj.prototype.getZoom = yj.prototype.getZoom;
    yj.prototype.m = function() {
        var a = this.a.camera;
        a.zoom = ab(this.a.zoom) ? this.a.zoom : a.zoom;
        return a
    };
    yj.prototype.getRequestedCameraData = yj.prototype.m;
    yj.prototype.startControl = yj.prototype.B;
    yj.prototype.control = yj.prototype.v;
    yj.prototype.endControl = yj.prototype.s;

    function Wj(a) {
        Wj.u.constructor.call(this, yj.prototype.c.la);
        this.requested = a
    }
    v(Wj, Bc);

    function O(a, b, c, d) {
        var e;
        O.u.constructor.call(this, a, b, c, d);
        this.K = new M(0, 0);
        if (e = d.renderBaseBackground) this.Bh = e.lower, this.Ah = e.higher;
        this.zh = !!d.enableSubpixelRendering;
        this.yb = !!d.noWrap;
        this.Vb = Yj;
        this.he = this.b = 0;
        this.jc = this.Yd = !1;
        this.l = new M(.5, .5);
        this.i = sb(this.za) / Cb;
        this.f = new Vi;
        this.c = d = new Dj;
        this.Tb = z(this.Tb, this);
        d.addEventListener(d.g.Mf, this.Tb);
        this.a = new jh;
        d = a.element;
        this.Ba = a = d.ownerDocument.createElement("div");
        a.style.position = "absolute";
        a.style.width = a.style.height =
            "100%";
        a.style.zIndex = 0;
        d.insertBefore(a, d.firstChild);
        this.Nf = new Sj(this.Ba, this.za);
        this.m = [];
        Zj(this);
        c.addEventListener("update", this.Gg, !1, this);
        c.addEventListener(c.a.Lc, this.hf, !1, this);
        c.addEventListener(c.a.Nc, this.jf, !1, this);
        c.addEventListener(c.a.td, this.Ig, !1, this);
        this.Ub = z(O.prototype.Ub, this);
        this.G = ak;
        this.kh();
        this.b = bk(this, this.I.getZoom() + this.i);
        ck(this);
        dk(this, b.Ab().position, this.b);
        ek(this);
        this.Dc()
    }
    v(O, wj);
    r("H.map.render.p2d.RenderEngine", O);
    O.prototype.type = Bj.P2D;
    O.prototype.type = O.prototype.type;
    var ak = 2;
    O.prototype.ih = Kj;
    O.prototype.getState = function() {
        return this.G
    };
    O.prototype.getState = O.prototype.getState;

    function fk(a, b, c) {
        b = c - b;
        return rb(b) < a.a.w / 2 ? b : b - a.a.w * c / rb(c)
    }
    O.prototype.zb = function(a) {
        var b = this,
            c, d, e = a.requested,
            f = e.animate,
            e = e.camera.position,
            g = b.a.geoToPixel(e),
            h = g.x,
            k = g.y,
            l = this.b,
            m = this.l,
            n = 0,
            q, t, u;
        gk(this);
        this.K.set(0, 0);
        a = hk(this, a);
        c = a.zoom;
        u = a.position;
        if (f) {
            if (d = c - l, q = {
                    x: m.x,
                    y: m.y
                }, f = this.a.b(q).x, t = this.a.projection.qb(e), t.x !== this.l.x || t.y !== this.l.y || c !== this.b) h = fk(this, f, h), ik(this, function(a) {
                var e = a - n,
                    f;
                c !== l && (g = b.a.b(t), f = b.a.b(q), h = fk(b, f.x, g.x), k = g.y - f.y);
                n = a;
                jk(b, h * e, k * e);
                l += d * e;
                kk(b, l);
                ek(b);
                ok(b)
            }, this.Ua, function() {
                dk(b, u, c);
                kk(b, c);
                ek(b, u);
                ok(b)
            }, this.Xa)
        } else pk(this), dk(this, u, c), kk(this, c), ek(this, u);
        ok(this)
    };
    O.prototype.Ua = 300;
    O.prototype.lh = function(a) {
        var b = ab(a);
        if (!b || b && 0 > a) throw new C(this.lh, 1, "positive number required");
        this.Ua = a
    };
    O.prototype.setAnimationDuration = O.prototype.lh;
    O.prototype.xh = function() {
        return this.Ua
    };
    O.prototype.getAnimationDuration = O.prototype.xh;
    O.prototype.Xa = Nj;
    O.prototype.mh = function(a) {
        if (!sa(a)) throw new C(this.mh, 1, "function required");
        this.Xa = a
    };
    O.prototype.setAnimationEase = O.prototype.mh;
    O.prototype.yh = function() {
        return this.Xa
    };
    O.prototype.getAnimationEase = O.prototype.yh;
    O.prototype.kh = function() {
        this.Xa = Nj;
        this.Ua = 300
    };
    O.prototype.resetAnimationDefaults = O.prototype.kh;
    p = O.prototype;
    p.Gg = function() {
        ok(this)
    };
    p.hf = function(a) {
        var b = a.added;
        a = a.idx;
        qk(this, a, b);
        0 === a && (ck(this), rk(this, b, !0));
        sk(this);
        ok(this)
    };
    p.jf = function(a, b) {
        var c = a.removed,
            d = a.idx,
            e;
        this.Xd = tj();
        (e = this.U.Fa.splice(d, 1)[0]) && e.J();
        (e = this.F.Fa.splice(d, 1)[0]) && e.J();
        (e = this.ea.Fa.splice(d, 1)[0]) && e.J();
        (e = this.ba.Fa.splice(d, 1)[0]) && e.J();
        this.T = this.Ga.c();
        0 === d && (rk(this, c, !1), ck(this));
        this.m = Tj(this.Nf, tk(this), uk(this));
        sk(this);
        b || ok(this)
    };
    p.Ig = function(a) {
        this.jf(a, !0);
        this.hf(a)
    };

    function Zj(a) {
        var b = a.Ga.c(),
            c = 0,
            d = b.length,
            e;
        [a.U = {}, a.F = {}, a.ea = {}, a.ba = {}].forEach(function(a) {
            a.Yc = [];
            a.Fa = []
        });
        for (a.T = b; c < d; c++) e = b[c], qk(a, c, e, 1), 0 === c && rk(a, e, !0);
        ck(a)
    }

    function rk(a, b, c) {
        c = c ? b.addEventListener : b.removeEventListener;
        c.call(b, b.a.Uf, a.Kg, !1, a);
        c.call(b, b.a.Tf, a.Kg, !1, a)
    }
    p.Kg = function() {
        ck(this);
        ok(this)
    };

    function qk(a, b, c, d) {
        var e, f, g, h, k;
        c && (k = {
            Nb: a.zh,
            yi: a.i,
            noWrap: a.yb
        }, c.ca ? B(c, Oh) ? f = new Mj(c) : B(c, Qh) && (h = new Mj(c)) : (c.requestOverlays && (e = new Ij(c, k)), c.requestTiles && (f = new pj(c, k)), c.requestMarkers && (g = new Lj(c, k)), c.requestDomMarkers && (h = new jj(c, k))));
        d = d || 0;
        a.U.Fa.splice(b, d, e);
        a.F.Fa.splice(b, d, f);
        a.ea.Fa.splice(b, d, g);
        a.ba.Fa.splice(b, d, h);
        a.T = a.Ga.c();
        a.m = Tj(a.Nf, tk(a), uk(a))
    }

    function uk(a) {
        var b = [],
            b = b.concat(a.F.Fa),
            b = b.concat(a.U.Fa),
            b = b.concat(a.ea.Fa),
            b = b.concat(a.ba.Fa);
        return b = b.filter(Ta)
    }

    function ck(a) {
        var b;
        if (0 < a.T.length) b = a.T[0].max, a.be = a.T[0].min, a.Zd = b;
        else {
            b = a.ih.zoom;
            var c = b.max;
            a.be = b.min;
            a.Zd = c
        }
        b = vk(a, a.b);
        b !== a.b && (a.b = b, a.a.Ja(b), ek(a))
    }

    function hk(a, b) {
        var c = b.requested,
            d, e;
        e = (d = c.camera) && d.position;
        d = vk(a, vk(a, c.zoom) + a.i);
        e = wk({
            position: new gc(e.lat, e.lng)
        });
        a.b = c.animate ? a.b : d;
        e.zoom = d;
        return e
    }

    function dk(a, b, c) {
        var d = a.a;
        d.Ja(c);
        a.l = d.projection.qb(b);
        d.x = d.w * a.l.x;
        d.y = d.h * a.l.y
    }

    function vk(a, b) {
        var c = a.ih.zoom;
        return Qb(b, mb(c.min, a.be), lb(c.max, a.Zd))
    }

    function wk(a) {
        a.yaw = a.pitch = a.roll = 0;
        a.fov = 70;
        return a
    }
    p.Ka = function(a, b) {
        var c = this.g.center,
            d = this.za;
        return this.a.Aa((a - c.x) * d, (b - c.y) * d, null, this.yb)
    };
    O.prototype.screenToGeo = O.prototype.Ka;
    O.prototype.sa = sc;
    O.prototype.setPointer = O.prototype.sa;
    O.prototype.Za = function(a, b) {
        var c = this.Ka(a, b),
            d = this.I.Ab();
        d.position = c;
        return d
    };
    O.prototype.screenToCameraData = O.prototype.Za;
    O.prototype.Ya = function(a) {
        var b = this.za,
            c = this.g.center,
            d = c.x * b,
            c = c.y * b;
        a = this.a.geoToPixel(a);
        var e = this.a.w;
        return new M(this.yb ? nb((a.x + d) / b) : nb((a.x - nb(a.x / e) * e + d) / b), nb((a.y + c) / b))
    };
    O.prototype.geoToScreen = O.prototype.Ya;
    O.prototype.v = function(a, b) {
        var c = this.wa[a || 4],
            d = this.a,
            e = c.left - b,
            f = d.Aa(e, c.top - b),
            g = c.right + b,
            c = d.Aa(g, c.bottom + b);
        g - e >= d.w && (f.lng = -(c.lng = 180));
        return Xe(f, c)
    };
    O.prototype.getBBox = O.prototype.v;
    O.prototype.Ma = function(a, b, c) {
        var d = [],
            e = this.za;
        a *= e;
        b *= e;
        d = xk(d, this.ba.Fa, a, b, c);
        if (c && d.length) return d;
        d = xk(d, this.ea.Fa, a, b, c);
        if (c && d.length) return d;
        d = xk(d, this.F.Fa, a, b, c);
        return c && d.length ? d : xk(d, this.U.Fa, a, b, c)
    };
    O.prototype.getObjectsAt = O.prototype.Ma;

    function xk(a, b, c, d, e) {
        for (var f = b.length, g; f-- && !((g = b[f]) && g.Ma && (a = a.concat(g.Ma(c, d, e)), a.length && e)););
        return a
    }
    O.prototype.kb = x;

    function tk(a) {
        a = a.wa[2];
        return {
            w: a.right - a.left,
            h: a.bottom - a.top
        }
    }
    O.prototype.Dc = function() {
        var a = this.m.length,
            b = this.wa,
            c, d, e, f, g;
        this.g.g || (e = b[2].clone());
        O.u.Dc.call(this);
        c = tk(this);
        this.K.set(0, 0);
        f = c.w;
        for (g = c.h; a--;) c = this.m[a], d = c.size, d.w === f && d.h === g || cj(c, f, g);
        this.kb = new Th(f, g);
        e && (a = b[2], jk(this, e.left - a.left, e.top - a.top), ek(this));
        ok(this)
    };
    O.prototype.Ha = function() {
        return Kj
    };
    O.prototype.getCapabilities = O.prototype.Ha;

    function yk(a) {
        tj() - a.Xd < a.Vb && !a.Yb ? a.uh = rj(a.Ub) : (a.Yb && (sk(a), zk(a)), a.G = ak)
    }

    function sk(a) {
        a.U.Yc.length = 0;
        a.F.Yc.length = 0;
        a.ea.Yc.length = 0;
        a.ba.Yc.length = 0
    }
    O.prototype.Ub = function() {
        var a = this.F.Fa,
            b = this.g.center.clone().scale(this.za).round(),
            c = this.v(1, 0),
            d = this.v(1, 256),
            e = this.b,
            f = e - this.i,
            g, h, k = Ak,
            l, m = this.a;
        g = this.Bh;
        var n = this.Ah,
            q = a[0],
            a = this.K;
        for (h = this.m.length; h--;) l = this.m[h], B(l, Cj) && l.clear();
        if (q) {
            if (g)
                for (; g;) h = e - g, q.ca(c, b, m, h, !0, a), --g;
            if (n && this.jc)
                for (l = 1; l <= n && (h = e + l, m.Ja(h), g = this.v(2, 0), m.Ja(e), !q.ca(g, b, m, h, !0, a)); l++);
        }
        this.Vb = Yj;
        c = this.jh(c, b, e, !1, a, k.Yf, this.F, this.U);
        b = this.jh(d, b, f, !1, a, k.Qf, this.ea, this.ba);
        this.Yb = c &&
            b;
        this.Fb && (Xj(this.I, this.Fb), this.Fb = null);
        this.kb && (b = this.g, b.dispatchEvent(new yi(b.a.Oc, b.m, this.kb, yi.prototype.SIZE)), this.kb = x);
        e < this.he ? this.jc = !0 : this.Yd && (this.jc = !1);
        this.he = e;
        this.Yd = c;
        yk(this)
    };
    O.prototype.jh = function(a, b, c, d, e, f, g) {
        var h = Array.prototype.slice.call(arguments, 6),
            k = h.length,
            l = h[0].Fa.length,
            m = k * l,
            n = Ak,
            q, t, u = !!m,
            y, J, T;
        for (y = 0; y < m; y++) f === n.Yf ? (T = y % k, J = Math.floor(y / k)) : f === n.Qf && (T = Math.floor(y / l), J = y % l), q = h[T].Fa[J], t = h[T].Yc, q && (q = q.ca(a, b, this.a, c, d, e), q === ij.ACTIVE && (this.Vb = Infinity), q !== ij.DONE || t[J] || (zk(this, this.T[J]), t[J] = !0), t[J] || (u = !1));
        return u
    };

    function zk(a, b) {
        a.dispatchEvent({
            type: a.ee.Xf,
            target: b || a
        })
    }
    O.prototype.D = function() {
        var a = this.Ga,
            b = this.Ga.c()[0],
            c = this.g;
        sj(this.uh);
        pk(this, !0);
        a.removeEventListener("update", this.Gg, !1, this);
        a.removeEventListener(a.a.Lc, this.hf, !1, this);
        a.removeEventListener(a.a.Nc, this.jf, !1, this);
        a.removeEventListener(a.a.td, this.Ig, !1, this);
        b && rk(this, b, !1);
        uk(this).forEach(function(a) {
            a.J()
        });
        c.element && c.element.removeChild(this.Ba);
        this.Ba = null;
        this.G = 3;
        O.u.D.call(this)
    };

    function ok(a) {
        a.Xd = tj();
        a.G === ak && (a.Yb = !1, a.G = 1, yk(a))
    }

    function Bk(a) {
        return wk({
            position: a.a.projection.Fc(a.l)
        })
    }

    function ek(a, b) {
        var c = Bk(a);
        b && (c.position = b);
        a.Fb = c;
        a.Fb.zoom = a.b - a.i
    }

    function Ck(a, b, c) {
        jk(a, b * a.za, c * a.za);
        a.K.set(0, 0);
        ek(a);
        ok(a)
    }

    function jk(a, b, c) {
        var d = a.a,
            e = a.l;
        d.x = a.yb ? mb(0, lb(d.w, d.x + b)) : Ob(d.x + b, d.w);
        d.y = mb(0, lb(d.w, d.y + c));
        e.x = d.x / d.w;
        e.y = d.y / d.h
    }
    O.prototype.rd = function(a, b, c) {
        a = vk(this, vk(this, a) + this.i);
        kk(this, a, b, c)
    };
    O.prototype.zoomAt = O.prototype.rd;

    function kk(a, b, c, d) {
        var e = a.za,
            f = a.g.center;
        c === +c && d === +d ? (c = (c - f.x) * e, d = (d - f.y) * e, a.K.set(c, d), jk(a, c, d), a.a.Ja(b), jk(a, -c, -d)) : (a.K.set(0, 0), a.a.Ja(b));
        a.b = b;
        ek(a);
        ok(a)
    }
    O.prototype.P = function(a, b) {
        var c = this.Ha().zoom.max,
            d = a.Oa(),
            e, f, g, h, k;
        a.ed() || (e = new jh(this.a.projection), e.Ja(c), f = e.geoToPixel(a.tb()).round(), g = e.geoToPixel(a.rb()).round(), c = e.w, a.g() && (f.x -= c), b ? (h = e.geoToPixel(d), k = 2 * mb(h.x - f.x, g.x - h.x), h = 2 * mb(h.y - f.y, g.y - h.y)) : (k = g.x - f.x, h = g.y - f.y, d = e.a(f.add(g).scale(.5))), f = this.wa[4], e = f.right - f.left, f = f.bottom - f.top, c = -8 + lb(sb(e / k * c) / Cb, sb(f / h * c) / Cb) - this.i);
        return {
            zoom: vk(this, c),
            position: d
        }
    };
    O.prototype.getCamForBounds = O.prototype.P;

    function gk(a) {
        pk(a, !0);
        a.c.mb() && a.s(!0);
        a.f.mb() && a.B(!0);
        pk(a, !0)
    }
    O.prototype.N = function(a, b) {
        gk(this);
        Dk(this, b);
        this.f.start(a, !!b)
    };
    O.prototype.startInteraction = O.prototype.N;

    function Dk(a, b) {
        if (b) {
            var c = {};
            c.Xg = b.power;
            c.Be = b.ease;
            c.duration = b.duration;
            a.o = c
        }
    }

    function bk(a, b) {
        return vk(a, vk(a, b - a.i) + a.i)
    }
    O.prototype.C = function(a, b, c, d, e) {
        var f = !1;
        this.f.mb() && (this.f.gh(a, b, c, d, e), this.f.Fd(Aj.COORD) && (e = this.f, e = Wi(e.a, e.c), 0 < Ui(e) && (Ck(this, -e.x, -e.y), f = !0)), this.f.Fd(Aj.ZOOM) && a === +a && b === +b && c === +c && d === +d && (b = Xi(this.f.a), a = this.f.hg(this.b), a !== this.b && (a = bk(this, a), kk(this, a, b.x, b.y), f = !0)), f && ok(this))
    };
    O.prototype.interaction = O.prototype.C;
    O.prototype.B = function(a) {
        var b = this,
            c, d, e, f;
        this.f.mb() && !a && (this.o && (a = aj(this.f), e = $i(this.f), f = this.o.duration, c = (this.o.Xg || 1) * a, d = new Qj(-(c / f), c), !D(e.x) && !D(e.y) && 0 < c && b.f.Fd(Aj.COORD) && ik(this, function(a) {
            c = d.c(a * f);
            D(c) || Ck(b, nb(-e.x * c), nb(-e.y * c))
        }, f, void 0, this.o.Be)), this.o = null, this.f.clear())
    };
    O.prototype.endInteraction = O.prototype.B;
    O.prototype.O = function(a, b, c) {
        gk(this);
        this.c.start(b, c);
        Dk(this, a)
    };
    O.prototype.startControl = O.prototype.O;
    O.prototype.j = function(a, b, c, d, e, f, g) {
        if (D(c = +g || +c)) throw new C(this.j, 2, c);
        if (D(a)) throw new C(this.j, 0, a);
        if (D(b)) throw new C(this.j, 2, b);
        this.c.mb() && this.c.set(a, b, c)
    };
    O.prototype.control = O.prototype.j;
    O.prototype.s = function(a, b) {
        var c = this,
            d, e, f, g, h, k, l, m;
        this.c.mb() && (pk(this, !0), e = tj(), d = e - this.Ld, 1 <= d && (f = Fj(this.c), Ek(this, f, d)), !this.o || a || b ? "function" === typeof b && (d = {
                camera: Bk(this),
                zoom: this.b - this.i
            }, b(d), d.zoom += this.i, Fk(this, d)) : (d = Gj(this.c), k = Hj(this.c), l = this.o.duration, g = (this.o.Xg || 1) * d, h = new Qj(-(g / l), g), !D(k.x) && !D(k.y) && 0 < g && ik(this, function(a, b, d, f) {
                e && (d = f - e, e = 0);
                g = h.c(a * l) * d;
                D(g) || ((m = k.z * g) && kk(c, bk(c, c.b + m), c.c.atX, c.c.atY), Ck(c, nb(k.x * g), nb(k.y * g)))
            }, l, void 0, this.o.Be)),
            this.c.reset())
    };
    O.prototype.endControl = O.prototype.s;

    function Fk(a, b) {
        var c, d, e, f = a.l,
            g = a.a.projection.qb(b.camera.position),
            h = a.a.b(g),
            k = h.y,
            h = h.x,
            l = b.zoom,
            m = a.a.b(f),
            f = m.y,
            n = m.x,
            m = a.b,
            q = Gj(a.c),
            t = a.c.atX,
            u = a.c.atY,
            y = 0,
            J, h = fk(a, n, h),
            h = h - n,
            k = k - f,
            m = l - m,
            f = tb(h * h + k * k + m * m);
        0 !== q && 0 !== f && (c = h / f, d = k / f, e = m / f, J = q * q / (2 * f), ik(a, function(b, f) {
            var h, k, m;
            if (1 !== b) {
                h = q * f - J * f * f / 2;
                k = h - y;
                if (m = e * k) m = bk(a, a.b + m), kk(a, bk(a, m), t, u);
                Ck(a, nb(c * k), nb(d * k));
                y = h
            } else a.l = g, kk(a, bk(a, l), t, u), ek(a), ok(a)
        }, 2 * f / q))
    }
    O.prototype.Tb = function(a) {
        var b = this,
            c = a.offset;
        this.K.set(0, 0);
        c.x || c.y || c.z ? (this.Ld = tj(), ik(this, function(a, e, f, g) {
            b.Ld = g;
            Ek(b, c, f)
        }, Number.POSITIVE_INFINITY)) : pk(this, !0)
    };

    function Ek(a, b, c) {
        c = c || 0;
        b.z && kk(a, bk(a, a.b + b.z * c), a.c.atX, a.c.atY);
        Ck(a, b.x * c, b.y * c)
    }

    function ik(a, b, c, d, e) {
        a.A && a.A.mb() && a.A.stop(!0);
        a.A = new Oj(b, c, d, e);
        a.A.start()
    }

    function pk(a, b) {
        a.A && a.A.mb() && a.A.stop(b)
    }
    O.prototype.enter = sc;
    O.prototype.enter = O.prototype.enter;
    O.prototype.Va = function(a) {
        var b = this.I.Ab();
        this.zb({
            requested: {
                camera: b,
                zoom: b.zoom,
                animate: !0
            }
        });
        zj(this.Ba, a)
    };
    O.prototype.exit = O.prototype.Va;
    O.prototype.ya = function(a, b, c, d) {
        var e = this.Ba.ownerDocument.createElement("canvas"),
            f = e.getContext("2d"),
            g = this.za;
        e.width = (c - a) * g;
        e.height = (d - b) * g;
        for (c = 0; c < this.m.length; c++) d = this.m[c], B(d, Cj) && f.drawImage(d.a, -a * g, -b * g);
        return e
    };
    var Ak = {
            Qf: 0,
            Yf: 1
        },
        Yj = 1E3;

    function P(a) {
        var b = {};
        this.O = b.previousSibling = b.nextSibling = b;
        this.kb = new ye;
        P.u.constructor.call(this, a);
        a && "objects" in a && this.m(a.objects)
    }
    v(P, K);
    r("H.map.Group", P);
    P.prototype.type = Pe.GROUP;
    P.prototype.F = function(a, b) {
        var c;
        this.B = !0;
        c = P.u.F.call(this, a, b);
        this.B = !1;
        c && this.forEach(Gk, !0);
        return c
    };
    P.prototype.setProvider = P.prototype.F;

    function Gk(a, b, c) {
        a.F(c.l)
    }
    P.prototype.contains = function(a) {
        var b = this === a;
        if (!b && this.b && B(a, K))
            for (; !b && a;) a === this ? b = !0 : a = a.Da;
        return b
    };
    P.prototype.contains = P.prototype.contains;
    P.prototype.K = function() {
        this.U = A;
        this.forEach(Hk, !0)
    };
    P.prototype.resetZInfo = P.prototype.K;

    function Hk(a) {
        a.K()
    }
    P.prototype.B = !1;
    P.prototype.ua = function(a) {
        var b = P.u.ua.call(this, a);
        b && !this.B && (this.A = a, this.forEach(Ik, !0), delete this.A);
        return b
    };
    P.prototype.invalidate = P.prototype.ua;

    function Ik(a, b, c) {
        a.ua(c.A)
    }
    P.prototype.forEach = function(a, b, c) {
        var d, e, f, g;
        if (this.b)
            for (d = this.O, e = d.nextSibling, f = 0; e !== d;) g = e.nextSibling, a.call(c, e, f++, this), b && B(e, P) && e.forEach(a, b, c), e = g
    };
    P.prototype.forEach = P.prototype.forEach;
    P.prototype.s = function(a) {
        var b = [];
        this.forEach(Jk, a, b);
        return b
    };
    P.prototype.getObjects = P.prototype.s;
    P.prototype.S = function() {
        var a = null;
        this.b && this.forEach(function(b) {
            (b = b.S()) && (a ? a = a.wb(b) : a = b)
        });
        return a
    };
    P.prototype.getBounds = P.prototype.S;

    function Jk(a) {
        this.push(a)
    }
    P.prototype.b = 0;
    P.prototype.Ba = function() {
        return this.b
    };
    P.prototype.getChildCount = P.prototype.Ba;
    P.prototype.V = function(a) {
        var b = this.O,
            c = b.previousSibling,
            d;
        B(a, K, this.V, 0);
        if (a.contains(this)) throw new kc(this.V, "The new object contains the parent group");
        d = a.Da;
        if (d !== this) {
            if (d) {
                d = a.previousSibling;
                var e = a.nextSibling;
                d.nextSibling = e;
                e.previousSibling = d
            }
            a.Da = this;
            K.u.ia.call(a, this);
            c.nextSibling = a;
            a.previousSibling = c;
            a.nextSibling = b;
            b.previousSibling = a;
            this.b++
        }
        b = a.F(this.l, this.V);
        a.fh = this.kb.next();
        a.K();
        b || a.ua(Me.Z_ORDER);
        return a
    };
    P.prototype.addObject = P.prototype.V;
    P.prototype.m = function(a) {
        var b, c;
        Za(a, this.m, 0);
        b = a.length;
        for (c = 0; c < b; c++) this.V(a[c])
    };
    P.prototype.addObjects = P.prototype.m;
    P.prototype.a = function(a) {
        if (!a || a.Da !== this) throw new kc(this.a, "object not found");
        var b = a.previousSibling,
            c = a.nextSibling;
        b.nextSibling = c;
        c.previousSibling = b;
        a.Da = null;
        K.u.ia.call(a, null);
        delete a.previousSibling;
        delete a.nextSibling;
        B(a.l, L) && a.F(null, this.a);
        this.b--;
        return a
    };
    P.prototype.removeObject = P.prototype.a;
    P.prototype.v = function(a) {
        var b, c;
        Za(a, this.v, 0);
        b = a.length;
        for (c = 0; c < b; c++) this.a(a[c])
    };
    P.prototype.removeObjects = P.prototype.v;
    P.prototype.Ea = function() {
        var a = this.s();
        this.v(a)
    };
    P.prototype.removeAll = P.prototype.Ea;

    function Kk(a) {
        var b;
        Ua(this, Kk);
        Kk.u.constructor.call(this, a);
        this.C = a = [];
        for (b in Pe) a[Pe[b]] = new Le
    }
    v(Kk, Qg);
    r("H.map.provider.ObjectProvider", Kk);
    Kk.prototype.N = function(a) {
        return this.C[a || Pe.ANY]
    };
    Kk.prototype.getInvalidations = Kk.prototype.N;
    Kk.prototype.o = function(a, b) {
        var c, d;
        b !== Me.NONE && (d = this.C[Pe.ANY], c = d.a + 1, d.c(c, b), d = this.C[a.type], d.c(c, b), a.j().c(c, b), Rg(this, a))
    };
    Kk.prototype.invalidateObject = Kk.prototype.o;
    Kk.prototype.requestOverlays = Kk.prototype.K;
    Kk.prototype.requestSpatials = Kk.prototype.m;
    Kk.prototype.requestSpatialsByTile = Kk.prototype.g;
    Kk.prototype.P = !1;
    Kk.prototype.requestMarkers = Kk.prototype.c;
    Kk.prototype.requestDomMarkers = Kk.prototype.b;

    function L(a) {
        a = a || {};
        L.u.constructor.call(this, a);
        this.f = a = new P({
            provider: this,
            min: a.min,
            max: a.max
        });
        a.ia(this);
        this.A = new jf;
        this.v = new jf;
        this.j = new jf;
        this.B = new jf
    }
    v(L, Kk);
    r("H.map.provider.LocalObjectProvider", L);
    L.prototype.I = function() {
        return this.f
    };
    L.prototype.getRootGroup = L.prototype.I;
    L.prototype.o = function(a, b) {
        b & Me.SPATIAL && this.V(a);
        L.u.o.call(this, a, b)
    };
    L.prototype.invalidateObject = L.prototype.o;
    L.prototype.V = function(a) {
        var b;
        B(a, K, this.V, 0);
        if (a.l !== this) throw new kc(this.V, "foreign object");
        this.a(a);
        b = B(a, xi) ? this.j : B(a, fh) ? this.B : B(a, Lk) ? this.A : this.v;
        var c = a.S(),
            d = c.tb(),
            e = c.rb();
        b = (c = c.g()) ? kf(b, d.lat, e.lng, e.lat, d.lng, c) : kf(b, d.lat, d.lng, e.lat, e.lng, c);
        b.Lf = a;
        a.Ua = b
    };
    L.prototype.a = function(a) {
        var b;
        if (a)
            if (a.l !== this) {
                if (B(a, K)) throw new kc(this.a, "foreign object");
            } else if (b = a.Ua)(B(a, xi) ? this.j : B(a, fh) ? this.B : B(a, Lk) ? this.A : this.v).remove(b), delete b.Lf, delete a.Ua
    };
    L.prototype.removeObject = L.prototype.a;

    function Mk(a, b, c, d, e) {
        var f, g, h;
        if (b.c) {
            a = b !== a.j;
            e = !e;
            b = of (b, c);
            g = 0;
            c = b.length;
            for (f = 0; f < c; f++) {
                h = b[f].Lf;
                for (var k = nb(d), l = h, m = void 0;
                    (m = l.Ga <= k && l.ea >= k) && (l = l.Da););
                m && (e || h.getVisibility(!0)) && (a || 1 === h.sb().getState()) && (b[g++] = h)
            }
            b.length = g
        } else b = De;
        return b
    }
    L.prototype.ba = function() {
        return 0 < this.A.c
    };
    L.prototype.providesOverlays = L.prototype.ba;
    L.prototype.K = function(a, b, c) {
        return Mk(this, this.A, a, b, c).filter(function(a) {
            return a.Pb()
        })
    };
    L.prototype.requestOverlays = L.prototype.K;
    L.prototype.s = function() {
        return 0 < this.v.c
    };
    L.prototype.providesSpatials = L.prototype.s;
    L.prototype.m = function(a, b, c) {
        return Mk(this, this.v, a, b, c)
    };
    L.prototype.requestSpatials = L.prototype.m;
    L.prototype.g = function(a, b) {
        return Mk(this, this.v, a.s(), a.zL, b)
    };
    L.prototype.requestSpatialsByTile = L.prototype.g;
    L.prototype.l = function() {
        return 0 < this.j.c
    };
    L.prototype.providesMarkers = L.prototype.l;
    L.prototype.c = function(a, b, c) {
        return Mk(this, this.j, a, b, c)
    };
    L.prototype.requestMarkers = L.prototype.c;
    L.prototype.i = function() {
        return 0 < this.B.c
    };
    L.prototype.providesDomMarkers = L.prototype.i;
    L.prototype.b = function(a, b, c) {
        return Mk(this, this.B, a, b, c)
    };
    L.prototype.requestDomMarkers = L.prototype.b;
    L.prototype.D = function() {
        this.f.Ea();
        L.u.D.call(this)
    };

    function Nk(a, b, c, d, e, f) {
        var g;
        for (g = []; d <= e; d++) g = g.concat(sh(a, c, d));
        a = g.length;
        Ei.call(this, f, a);
        this.l = c = [];
        this.f = z(this.f, this);
        this.c = z(this.c, this);
        for (this.L(1); a--;) f = g[a], c.push(ch(b, f[0], f[1], f[2], this.f, this.c))
    }
    v(Nk, Ei);
    Nk.prototype.f = function() {
        Hi(this, 2)
    };
    Nk.prototype.c = function() {
        Hi(this, 4)
    };
    Nk.prototype.Sc = function() {
        for (var a = this.l, b = a.length; b--;) a[b].cancel();
        this.l = x
    };

    function Ok(a, b) {
        var c = this;
        if (!sa(b)) throw new C(Pk, 1, b);
        if (!sa(a.next || sa(a.cycle))) throw new C(Ok, 2, 'Argument "mode" must implement H.util.AsyncQueue.Mode');
        this.b = [];
        this.c = [];
        this.g = a;
        this.i = b;
        this.l = function() {
            Qk(c)
        };
        this.a = null;
        this.f = function() {
            c.a || (c.a = w.setTimeout(c.l, 1))
        }
    }
    r("H.util.AsyncQueue", Ok);
    Ok.prototype.push = function(a, b) {
        if (!sa(b)) throw new C(this.push, 1, b);
        var c = Rk(new Sk, a, this.f, b);
        this.b.push(c);
        this.f();
        return c
    };
    Ok.prototype.push = Ok.prototype.push;

    function Qk(a) {
        var b, c = a.c,
            d = 0,
            e = a.g;
        e.Kb = tj();
        for (a.a = null; d < c.length;) b = c[d], b.rg ? c.splice(d, 1) : d++;
        for (; b = e.next(a.b, a.c);) b.cancelled ? b.done(null, "cancelled") : (c.push(b), a.i(b, b.data))
    }

    function Sk() {
        Rk(this, null, null, null)
    }
    Ok.Task = Sk;

    function Rk(a, b, c, d) {
        a.data = b;
        a.cancelled = !1;
        a.rg = !1;
        a.b = c;
        a.c = d;
        a.a = null;
        return a
    }
    Sk.prototype.done = function(a, b) {
        this.rg = !0;
        this.b();
        this.c(this, a, b)
    };
    Sk.prototype.done = Sk.prototype.done;
    Sk.prototype.cancel = function() {
        this.a && this.a();
        this.cancelled = !0
    };
    Sk.prototype.cancel = Sk.prototype.cancel;
    Sk.prototype.f = function(a) {
        this.a = a;
        return this
    };
    Sk.prototype.setCancelFn = Sk.prototype.f;

    function Tk(a, b) {
        Tk.u.constructor.call(this, new Uk(a), b)
    }
    v(Tk, Ok);
    r("H.util.SequentialQueue", Tk);

    function Uk(a) {
        if (isNaN(a) || 0 > a) throw new C(Tk, 1, 'Argument "maxTime" must be a positive number');
        this.a = a;
        this.Kb = tj()
    }
    Uk.prototype.next = function(a) {
        return a.length && tj() - this.Kb < this.a ? a.shift() : null
    };

    function Zf(a, b, c, d, e, f) {
        var g, h, k = a.length,
            l, m, n, q, t, u, y;
        if (k)
            for (g = []; k--;)
                for (u = a[k], q = u.length, t = 0, l = 1; l < q; l++) {
                    if (y = Vk(u[l - 1], u[l], c, b, d, e)) m = y[0], n = y[1], t && t.pa(m) ? h.push(n) : g.push(h = y), t = n, f && (l = q, k = 0)
                } else g = a;
        return g
    }

    function Vk(a, b, c, d, e, f) {
        var g = a.x;
        a = -a.y;
        var h = b.x;
        b = -b.y;
        var k, l, m;
        c = -c;
        f = -f;
        if (g > h) {
            if (h > e || g < d) return;
            l = g;
            m = a;
            g = h;
            a = b;
            h = l;
            b = m;
            l = 1
        } else if (g > e || h < d) return;
        if (a > b) {
            if (b > c || a < f) return;
            k = 1;
            a = -a;
            b = -b;
            m = f;
            f = -c;
            c = -m
        } else if (a > c || b < f) return;
        if (g < d) {
            if ((a += (d - g) * (b - a) / (h - g)) > c) return;
            g = d
        }
        if (a < f) {
            if ((g += (f - a) * (h - g) / (b - a)) > e) return;
            a = f
        }
        h > e && (b = a + (e - g) * (b - a) / (h - g), h = e);
        b > c && (h = g + (c - a) * (h - g) / (b - a), b = c);
        k && (a = -a, b = -b);
        return l ? [new M(h, -b), new M(g, -a)] : [new M(g, -a), new M(h, -b)]
    }

    function ag(a, b, c, d, e, f, g, h, k, l) {
        a = {
            x: a,
            y: b,
            next: c || null,
            nb: d || null,
            ef: e || null,
            df: f || null,
            bb: g || 0,
            Ce: h || 0,
            ie: k || 0,
            alpha: l || 0
        };
        d && (a.nb.next = a);
        c && (a.next.nb = a);
        return a
    }

    function cg(a) {
        for (; a && a.bb;) a = a.next;
        return a
    }

    function bg(a) {
        if (a)
            for (; a.next;) a = a.next;
        return a
    }

    function hg(a) {
        var b = a;
        if (b) {
            do b = b.next; while (b != a && (!b.bb || b.bb && b.ie))
        }
        return b
    }

    function gg(a) {
        var b = bg(a);
        b.nb.next = a;
        a.nb = b.nb
    }

    function dg(a, b, c, d, e, f) {
        var g, h, k, l = b.x - a.x,
            m = b.y - a.y;
        g = d.x - c.x;
        var n = d.y - c.y;
        h = l * n - m * g;
        if (!h) return 0;
        g = ((c.x - a.x) * n - (c.y - a.y) * g) / h;
        h = (m * (c.x - a.x) - l * (c.y - a.y)) / h;
        if (0 > g || 1 < g || 0 > h || 1 < h) return 0;
        0 === g ? k = a : 1 === g ? k = b : 0 === h ? k = c : 1 === h && (k = d);
        if (k && !f) return k.x += 2.480549651603763E-5, k.y += 7.321997314118067E-5, k.zd && (k.zd.x = k.x, k.zd.y = k.y), dg(a, b, c, d, e);
        e.Hi = a.x + g * l;
        e.Ii = a.y + g * m;
        e.Kh = g;
        e.Zf = h;
        return 1
    }

    function fg(a, b, c) {
        var d, e = 0,
            f = {},
            g, h, k, l, m, n;
        c = c || a.y;
        d = ag(-137438953472, c);
        Array.isArray(b) ? (k = 0, g = b[k], l = function() {
            return b[++k]
        }) : (m = g = b, l = function() {
            return m = m.next
        });
        for (; n = l();) {
            h = dg(d, a, g, n, f, !0);
            g = f.Zf;
            if (0 === g || 1 === g) return fg(a, b, c + 6E-5);
            h && e++;
            g = n
        }
        return e % 2
    }

    function eg(a, b, c) {
        for (b = b.next; b !== c && b.alpha <= a.alpha;) b = b.next;
        a.next = b;
        a.nb = b.nb;
        a.next.nb = a;
        a.nb.next = a
    }

    function $f(a) {
        for (var b, c = null, d = 0, e = a.length; d < e; d++) {
            b = ag(a[d].x, a[d].y, c);
            if (b.next = c) c.nb = b;
            c = b
        }
        return c
    };

    function Wk(a, b, c, d) {
        a -= c;
        b -= d;
        return a * a + b * b
    }

    function Xk(a, b, c, d, e) {
        var f, g = 0,
            h = d,
            k = a[d].x,
            l = a[d].y,
            m = a[e].x,
            n = a[e].y,
            q = d + 1,
            t, u = Wk(k, l, m, n),
            y;
        if (u)
            for (; q < e;) t = a[q++], f = t.x, t = t.y, y = ((f - k) * (m - k) + (t - l) * (n - l)) / u, f = 0 > y ? Wk(f, t, k, l) : 1 < y ? Wk(f, t, m, n) : Wk(f, t, k + y * (m - k), l + y * (n - l)), f > g && (g = f, h = q - 1);
        else
            for (; q < e;) t = a[q++], f = t.x, t = t.y, f = Wk(f, t, k, l), f > g && (g = f, h = q - 1);
        g >= b || 0 < c && h - d ? (--c, 1 < h - d ? (d = Xk(a, b, c, d, h), d.splice(d.length - 1, 1)) : d = [a[d]], d = 1 < e - h ? d.concat(Xk(a, b, c, h, e)) : d.concat(a.slice(h, e + 1))) : d = [a[d], a[e]];
        return d
    };

    function Yk(a, b, c, d, e, f, g, h) {
        Yk.u.constructor.call(this, b, c, d, null);
        this.key = a;
        this.C = h;
        this.b = e;
        1 !== f && (this.Wb = f);
        this.g = {};
        this.zL = g;
        this.F = qb(zf.MAX_LINE_WIDTH / 2 * this.Wb + 1)
    }
    v(Yk, $g);
    r("H.map.provider.SpatialTile", Yk);
    Yk.prototype.f = Mb;
    Yk.prototype.N = Mb;
    Yk.prototype.c = Mb;

    function Zk(a) {
        return a.C.getInvalidations(Pe.SPATIAL)
    }

    function $k(a) {
        var b = Zk(a),
            c = b.a,
            d = a.f,
            e = d === c,
            f, g, h, k, l, m;
        if (!(e || b.j(d) || b.g(d))) {
            e = a.a;
            f = a.g;
            if (b.f(d))
                for (g = e.length; g--;) h = e[g], h.j().f(d) && (e.splice(g, 1), k = k || al(a, h.ta()));
            if (b.i(d)) {
                for (g = e.length; g--;)
                    if (h = e[g], h.j().i(d) && (l = 1, (h = f[h.ta()]) && h.a)) {
                        k = 1;
                        break
                    }
                l && e.sort(bl)
            }
            if (!k && b.b(d))
                for (g = e.length; g--;)
                    if (e[g].j().b(d)) {
                        m = 1;
                        break
                    }
            a.N !== d || m || (a.N = c, a.c !== d || k || (a.c = c));
            a.f = c;
            e = !0
        }
        return e
    }
    Yk.prototype.yc = function() {
        var a = Zk(this),
            b = a.a,
            c = this.c,
            d = c === b;
        d || (this.C.P && !a.b(c) ? d = !0 : $k(this) && (d = this.c === b));
        return d
    };
    Yk.prototype.isCanvasValid = Yk.prototype.yc;
    Object.defineProperty(Yk.prototype, "valid", {
        get: function() {
            return this.yc()
        },
        set: sc,
        configurable: !0
    });

    function cl(a, b) {
        this.b = a;
        this.a = b
    }

    function al(a, b) {
        var c = a.g,
            d = c[b];
        if (d) return delete c[b], d.a
    }
    Yk.prototype.a = De;

    function bl(a, b) {
        return Re(Qe(a), Qe(b), !1)
    }
    Yk.prototype.I = function() {
        return this.a
    };
    Yk.prototype.getObjects = Yk.prototype.I;
    var dl = {};
    Yk.prototype.j = function() {
        var a = this.b + "_" + this.Wb,
            b = dl[a],
            c;
        b || (b = -this.F, c = this.b - b, b = dl[a] = new qh(b, b, c, c));
        return b
    };
    Yk.prototype.getPxClipRect = Yk.prototype.j;
    Yk.prototype.s = function() {
        var a = this.K,
            b, c;
        a || (c = this.B(), a = 0, b = this.b, this.z && (b -= a += this.j().top), a = this.K = Xe(c.a(new M(a, a)), c.a(new M(b, b))));
        return a
    };
    Yk.prototype.getGeoClipRect = Yk.prototype.s;
    Yk.prototype.B = function() {
        var a = this.P,
            b;
        a || (b = this.b, a = this.P = new jh(A, b), a.Ja(this.z), a.x = this.x * b, a.y = this.y * b);
        return a
    };
    Yk.prototype.getPxProj = Yk.prototype.B;
    Yk.prototype.Wb = 1;
    Yk.prototype.pb = function() {
        return this.Wb
    };
    Yk.prototype.getPixelRatio = Yk.prototype.pb;
    Yk.prototype.o = function() {
        var a = this.data;
        this.data = null;
        this.c = Mb;
        return a
    };
    Yk.prototype.releaseCanvas = Yk.prototype.o;
    Yk.prototype.m = function() {
        this.g = {};
        delete this.a;
        this.f = Mb
    };
    Yk.prototype.releaseData = Yk.prototype.m;
    Yk.prototype.ca = function(a) {
        var b = a.getContext("2d"),
            c, d, e, f, g, h, k, l, m, n = k = 0;
        c = Zk(this);
        d = this.f;
        e = this.a;
        if (!$k(this)) {
            for (k = e.length; k--;) h = e[k], f = h.j(), (f.f(d) || f.g(d)) && al(this, h.ta());
            this.a = this.C.requestSpatialsByTile(this, !1, !1).sort(bl);
            this.f = c.a
        }
        if (this.c < this.f) {
            c = this.a;
            if (d = c.length)
                for (a.width = a.height = this.b, b.clearRect(0, 0, this.b, this.b), e = this.g, f = 0; f < d; f++)
                    if (h = c[f], g = h.ta(), l = (k = e[g]) ? k.b : h.getGeometriesForTile(this)) {
                        if (k) h.j().b(this.c) && (k.a = Hf(h, l)), k = k.a;
                        else {
                            k = Hf(h, l);
                            m =
                                l;
                            for (var q = h.B ? 2 : 0, t = m.length, u = void 0, y = u = void 0, J = void 0; t--;)
                                if (u = m[t], u !== If)
                                    for (y = u.Ra, u = y.length; u--;) J = y[u], 4 < J.length && (y[u] = Xk(J, .36, q || 0, 0, J.length - 1));
                            this.g[g] = new cl(l, k)
                        }
                        if (k) {
                            b.save();
                            m = h.B ? this.T : this.O;
                            for (g = 0; g < l.length; g++) m.call(this, h, l[g], h.Na(), b);
                            if (l = h.getLabels(this))
                                for (h = b, g = l.length, m = m = t = q = q = void 0; g--;)
                                    for (q = l[g], m = q.size, h.font = m + "px " + q.font, h.fillStyle = q.color, h.textAlign = "center", h.translate(q.x, q.y), h.rotate(q.angle), m = q.lineHeight || 1.375 * m, q = q.lines, t = q.length; t--;) h.fillText(q[t],
                                        0, t * m);
                            b.restore()
                        }
                        n |= k
                    }
            this.data = n ? a : null;
            this.N = this.c = this.f
        } else this.data && (n = 1);
        return 0 < n
    };
    Yk.prototype.render = Yk.prototype.ca;
    Yk.prototype.O = function(a, b, c, d) {
        var e;
        c.b && (el(d, c, this.Wb), fl(b, d, !1, !0, !1, this.b, this.F));
        c.a && (e = a.s) && e.fd && (gl(d, e), hl(this, d, b, e, c.lineWidth))
    };
    Yk.prototype.T = function(a, b, c, d) {
        var e = c.c,
            f = c.b,
            g, h, k = this.b,
            l = this.F;
        if (b === If) e && (gl(d, c), d.fillRect(0, 0, k, k));
        else if (f && el(d, c, this.Wb), c.a && (g = a.s) && (h = c.lineWidth, g.fd || (g = null)), a = b.b, a === Lb) {
            if (f || e) gl(d, c), fl(b, d, !0, f, e, k, this.F);
            g && (gl(d, g), hl(this, d, b, g, h, 0))
        } else e && (gl(d, c), fl(b, d, !0, !1, e, k, l, 0, a)), f && fl(b, d, !1, f, !1, k, l, a), g && (gl(d, g), hl(this, d, b, g, h, a))
    };

    function fl(a, b, c, d, e, f, g, h, k) {
        var l, m, n, q = a.Ra,
            t = -g;
        g = f + g;
        h = h || 0;
        k === A && (k = q.length);
        if (e && a === If) b.fillRect(0, 0, f, f);
        else if (k > h) {
            b.beginPath();
            for (f = h; f < k; f++) {
                m = q[f];
                n = m.length;
                if (m === Tf) b.moveTo(t, t), b.lineTo(t, g), b.lineTo(g, g), b.lineTo(g, t);
                else
                    for (l = m[0], b.moveTo(l.x, l.y), h = 1; h < n; h++) l = m[h], b.lineTo(l.x, l.y);
                c && b.closePath()
            }
            c && e && b.fill(a.a !== Lb ? "evenodd" : "nonzero");
            d && b.stroke()
        }
    }

    function el(a, b, c) {
        var d;
        a.strokeStyle = b.strokeColor;
        a.lineWidth = b.lineWidth * c;
        a.lineCap = b.lineCap;
        a.lineJoin = b.lineJoin;
        a.miterLimit = b.miterLimit;
        a.setLineDash && (d = b.lineDash) !== De && (a.setLineDash(d), a.lineDashOffset = b.lineDashOffset)
    }

    function gl(a, b) {
        a.fillStyle = b.fillColor
    }

    function hl(a, b, c, d, e, f) {
        var g = e * d.width / 2;
        e = e * d.length / 2;
        var h = e / 2;
        d = 2 * e * d.frequency;
        var k = tb(ub(e, 2) + ub(g, 2));
        a = a.b - k;
        a = new qh(k, k, a, a);
        c = c.Ra;
        var l, m, n, q, t, u, y, J, T, ea, la, ob = Db / 2;
        f = f || 0;
        for (k = c.length; k-- > f;) {
            u = 0;
            l = c[k];
            if (q = m = l.length) {
                n = l;
                q = n.length;
                for (t = 0; --q;) t += n[q].distance(n[q - 1]);
                q = (n = t) >= d
            }
            if (q)
                for (q = lb(pb(n / d), 1E3), q = n / (q + 1), t = q / 2; --m;) {
                    for (y = (J = l[m]).distance(T = l[m - 1]); t <= u + y;) la = J.x + (T.x - J.x) * (ea = (t - u) / y), ea = J.y + (T.y - J.y) * ea, a.a(la, ea) && (b.save(), b.translate(la, ea), b.rotate(-Ab((T.y -
                        J.y) / (J.x - T.x)) + (J.x < T.x ? ob : -ob)), b.beginPath(), b.moveTo(-g, -e), b.lineTo(0, e), b.lineTo(g, -e), b.lineTo(0, -h), b.closePath(), b.fill(), b.restore()), t += q;
                    u += y
                }
        }
    }
    var il = [];
    Yk.prototype.Ma = function(a, b, c) {
        for (var d = this.a, e = d.length, f, g, h, k, l, m, n = De, q, t = this.Wb; e--;)
            if (g = d[e], g.getVisibility(!0) && (h = this.g[g.ta()]) && (k = h.b)) {
                f = g.Na();
                m = "none" !== f.fillColor && g.B;
                q = "none" === f.strokeColor ? 0 : f.lineWidth * t;
                for (f = k.length; f--;) {
                    l = k[f];
                    var u;
                    if (!(u = m && l === If) && (u = m || q)) {
                        u = a;
                        var y = b,
                            J = m,
                            T = q,
                            ea = l.a,
                            la = l.b,
                            ob = la !== Lb,
                            na = void 0,
                            ia = void 0;
                        l = l.Ra;
                        for (var Ja = l.length, Jb = void 0, Sd = void 0, lk = void 0, rf = void 0, sf = void 0, ia = Jb = void 0, mk = 0, nk = 0, ia = void 0, Co = !1, rf = 0; rf < Ja; rf++)
                            if (Jb = l[rf],
                                ia = rf >= la, na = !ia && rf >= ea, Jb === Tf && J) na ? mk++ : nk++;
                            else {
                                lk = Jb.length;
                                il.length = 2 * lk;
                                for (sf = 0; sf < lk; sf++) Sd = Jb[sf], il[2 * sf] = Sd.x, il[2 * sf + 1] = Sd.y;
                                Jb = J && !ia;
                                ia = ob && !ia ? 0 : T;
                                if (Jb || ia)
                                    if (ia = Ub(u, y, il, ia, Jb), 2 === ia || 1 === ia) {
                                        Co = !0;
                                        break
                                    } else if (3 === ia)
                                    if (na) mk++;
                                    else if (nk++, ea === Lb) break
                            }
                        u = Co || 0 < nk && !(mk % 2)
                    }
                    if (u) {
                        n === De && (n = []);
                        n.push(g);
                        break
                    }
                }
                if (c && n.length) break
            }
        return n
    };

    function jl(a, b) {
        var c, d;
        jl.u.constructor.call(this, b);
        this.m = a;
        this.B = c = b.pixelRatio;
        this.tileSize = d = 1 << nb(Nb((b.tileSize || 256) * c));
        this.C = Tg(d, c);
        this.Qe = z(this.Qe, this);
        this.gf = z(this.gf, this);
        this.Re = z(this.Re, this);
        this.Pe = z(this.Pe, this);
        this.g = z(this.g, this);
        this.m.addEventListener(Qg.prototype.F.la, this.g, !1, this);
        this.b = [];
        this.c = new Vg(b.tileCacheSize || 256, this.Qe);
        this.f = new Vg(b.dataCacheSize || 512, this.gf);
        this.v = new Tk(20, this.Re);
        this.a = {};
        this.j = tj()
    }
    v(jl, Sg);
    r("H.map.provider.SpatialTileProvider", jl);
    jl.prototype.g = function(a) {
        a.target.type === Pe.SPATIAL && Rg(this, a.target)
    };
    jl.prototype.o = function(a, b, c, d) {
        var e = this.getTileKey(a, b, c),
            f;
        if (f = this.c.get(e, d)) {
            if (d || f.yc()) return f;
            d || this.c.g(e)
        }
        if ((f = this.f.get(e, d)) && (d || $k(f))) return a = this.b.pop() || document.createElement("canvas"), f.ca(a) || this.b.push(a), this.c.add(e, f, 1), f;
        d || ((f = this.a[e]) ? f.count++ : (f = this.v.push([e, a, b, c], this.Pe), f.count = 1, this.a[e] = f))
    };
    jl.prototype.requestTile = jl.prototype.o;
    jl.prototype.T = function(a, b, c) {
        this.K(this.getTileKey(a, b, c))
    };
    jl.prototype.cancelTile = jl.prototype.T;
    jl.prototype.K = function(a) {
        var b;
        if (b = this.a[a]) b.count--, b.count || (b.cancel(), delete this.a[a])
    };
    jl.prototype.cancelTileByKey = jl.prototype.K;
    p = jl.prototype;
    p.Re = function(a, b) {
        var c = b[0],
            d = b[1],
            e = b[2],
            f = b[3],
            c = this.c.get(c) || new Yk(c, d, e, f, this.tileSize, this.B, f + this.C, this.m),
            d = c.data || this.b.pop() || document.createElement("canvas");
        c.ca(d) || this.b.push(d);
        b.push(c);
        a.done(c)
    };
    p.Pe = function(a, b) {
        var c = a.data[0];
        b && this.c.add(c, b, 1);
        delete this.a[c];
        Rg(this)
    };
    p.Qe = function(a, b) {
        b.data && this.b.push(b.o());
        this.f.add(a, b, 1)
    };
    p.gf = function(a, b) {
        b.m()
    };
    p.D = function() {
        for (var a in this.a) this.a[a].cancel();
        this.c.Ea();
        this.f.Ea();
        this.b.length = 0;
        jl.u.D.call(this)
    };

    function Pk(a) {
        var b = "getURL";
        if (!a || !sa(a[b])) throw new C(Pk, 0, "options." + b);
        Pk.u.constructor.call(this, a);
        this.P = this[b] = a[b];
        b = "tileSize";
        this[b] = a[b] || 256;
        this.I = {
            crossOrigin: a.crossOrigin
        };
        this.b = w.URL || w.webkitURL;
        if (Ta(this.I.crossOrigin)) a = !!this.I.crossOrigin;
        else {
            a = this.P(0, 0, 0);
            var b = window.location,
                c = document.createElement("a");
            c.href = a;
            a = c.hostname === b.hostname && c.port === b.port && c.protocol === b.protocol
        }(this.O = a && !!Gh.prototype.b[Hh] && !!this.b) && this.g.c(z(this.ea, this))
    }
    v(Pk, N);
    r("H.map.provider.ImageTileProvider", Pk);
    Pk.prototype.v = function() {
        return this.tileSize
    };
    Pk.prototype.getEntryWeight = Pk.prototype.v;
    Pk.prototype.c = function(a, b, c, d, e, f) {
        var g = this,
            h = this.P(a, b, c),
            k, l;
        a = null;
        h ? (l = w.setTimeout(function() {
            g.O ? (k = new Gh(Hh, h, f), k.then(function(a) {
                var b = new Image;
                b.onload = z(d, null, b, {
                    zi: a
                });
                b.onerror = z(e, null, "bad url");
                try {
                    b.src = g.b.createObjectURL(g.f(a))
                } catch (c) {}
            }, e)) : k = (new Gh("image", h, f, g.I)).then(d, e)
        }, 150), a = {
            cancel: function() {
                k ? k.cancel() : w.clearTimeout(l)
            }
        }) : d(null);
        return a
    };
    Pk.prototype.requestInternal = Pk.prototype.c;
    Pk.prototype.Ga = function(a, b) {
        var c = new Image;
        c.onload = function() {
            b(this)
        };
        c.src = this.b.createObjectURL(this.f(a))
    };
    Pk.prototype.f = function(a) {
        var b = w.BlobBuilder || w.WebKitBlobBuilder || w.MozBlobBuilder,
            c = Pk.prototype;
        c.f = b ? function(a) {
            var c = new b;
            c.append(a);
            return c.getBlob("application/octet-stream")
        } : function(a) {
            return new Blob([a], {
                type: "application/octet-stream"
            })
        };
        return c.f(a)
    };
    Pk.prototype.ea = function(a, b) {
        var c = b.data;
        c && c instanceof HTMLImageElement && this.b.revokeObjectURL(c.src)
    };

    function oh(a, b) {
        var c = b || {},
            d = c.opacity;
        this.opacity = Ta(d) ? d : 1;
        nh.call(this, a, c)
    }
    v(oh, nh);
    r("H.map.layer.TileLayer", oh);
    oh.prototype.g = function(a, b, c, d, e) {
        if (!B(a, G)) throw new C(this.g, 0, a);
        if (D(b = +b)) throw new C(this.g, 1, b);
        var f;
        b = pb(b);
        this.pixelProjection.Ja(b);
        a = this.j(a);
        f = this.i(a, b);
        return this.o(f, a.left > a.right, b, c, d, e)
    };
    oh.prototype.requestTiles = oh.prototype.g;

    function Jj(a, b) {
        var c = b || {};
        c.tileSize = c.tileSize || 256;
        c.pixelRatio = c.pixelRatio || 1;
        c.max = 28;
        this.f = new jl(a, c);
        this.i = new oh(this.f, {
            opacity: 1
        });
        c.minWorldSize = this.f.tileSize;
        Jj.u.constructor.call(this, c);
        this.opacity = this.i.opacity;
        this.tileSize = this.i.tileSize;
        this.j = a;
        this.o = z(this.o, this);
        this.f.addEventListener(this.f.F.la, this.o);
        a.addEventListener("update", this.o)
    }
    v(Jj, mh);
    r("H.map.layer.ObjectLayer", Jj);
    Jj.prototype.o = function(a) {
        a.currentTarget !== this.f && a.target.type === Pe.SPATIAL || this.l()
    };
    Jj.prototype.Pa = function() {
        return this.j
    };
    Jj.prototype.getProvider = Jj.prototype.Pa;
    var kl = {
        markers: De,
        total: 0
    };
    Jj.prototype.c = function(a, b, c) {
        var d = this.j,
            e;
        return d.providesMarkers() && (e = d.requestMarkers(a, b, !0, c)).length ? {
            markers: e,
            total: e.length
        } : kl
    };
    Jj.prototype.requestMarkers = Jj.prototype.c;
    Jj.prototype.b = function(a, b, c) {
        var d = this.j,
            e;
        return d.providesDomMarkers() && (e = d.requestDomMarkers(a, b, !0, c)).length ? {
            markers: e,
            total: e.length
        } : kl
    };
    Jj.prototype.requestDomMarkers = Jj.prototype.b;
    var ll = {
        tiles: De,
        total: 0
    };
    Jj.prototype.g = function(a, b, c, d) {
        var e;
        this.j.providesSpatials() ? (e = this.i.g(a, b, c, d), c || (c = this.f, e = tj(), 33 < e - c.j && (Qk(c.v), c.j = e), e = this.i.g(a, b, !0, d))) : e = ll;
        return e
    };
    Jj.prototype.requestTiles = Jj.prototype.g;
    Jj.prototype.A = function(a, b, c, d) {
        return this.i.A(a, b, c, d)
    };
    Jj.prototype.requestTile = Jj.prototype.A;
    Jj.prototype.m = function(a, b, c) {
        this.i.m(a, b, c)
    };
    Jj.prototype.cancelTile = Jj.prototype.m;
    var ml = {
        overlays: De,
        total: 0
    };
    Jj.prototype.C = function(a, b, c) {
        var d = this.j,
            e = ml;
        d.providesOverlays && d.providesOverlays() && (a = d.requestOverlays(a, b, !0, c), b = a.length) && (e = {
            overlays: a,
            total: b
        });
        return e
    };
    Jj.prototype.requestOverlays = Jj.prototype.C;
    Jj.prototype.D = function() {
        this.f.J();
        this.i.J();
        this.j.dispose();
        Jj.u.D.call(this)
    };

    function Q(a, b, c) {
        Q.u.constructor.call(this);
        this.O = z(Q.prototype.O, this);
        this.l = nl(c, Q);
        this.c = c = new yj;
        this.F = !1;
        c.addEventListener(c.c.Oc, this.Za, !1, this);
        if (!B(a, Element)) throw new C(Q, 0, a);
        c = this.b = a.ownerDocument.createElement("div");
        var d = c.style;
        d.position = "relative";
        d.height = c.style.width = "100%";
        d.overflow = "hidden";
        d.webkitTapHighlightColor = "transparent";
        "transparent" !== d.webkitTapHighlightColor && (d.webkitTapHighlightColor = "rgba(0,0,0,0)");
        a.appendChild(c);
        this.va = new uj(this.b, this.l);
        this.va.addEventListener(this.va.a.Oc,
            this.Za, !1, this);
        a = this.fa = new Di(this.l.layers);
        a.addEventListener(a.a.td, this.Ba, !1, this);
        a.addEventListener(a.a.Lc, this.Ba, !1, this);
        a.addEventListener(a.a.Nc, this.Ba, !1, this);
        this.B = new L({
            max: 28
        });
        this.ea = new Jj(this.B, this.l);
        this.re(this.ea);
        this.i = null;
        this.fa.add(b, 0);
        this.f = this.P(this.l.engineType || ol.P2D, this.l);
        b = this.l.center || new gc(0, 0);
        a = +this.l.zoom || 0;
        c = this.l.bounds;
        this.C = z(this.C, this);
        this.T = z(this.T, this);
        B(c, G) ? this.sa(c) : (this.Ga(b), this.Ha(a));
        b = this.l.imprint;
        if (b !== A &&
            "object" !== typeof b) throw new C(Q, 1, "imprint");
        this.j = null === b ? b : new Ji(this, b);
        b = this.l.autoColor;
        this.I = b === A || !!b;
        pl(this)
    }
    v(Q, I);
    r("H.Map", Q);

    function nl(a, b) {
        var c;
        if (a)
            if (c = a.pixelRatio, c === A) a.pixelRatio = 1;
            else {
                if (!(0 < c)) throw new C(b, 0, "pixelRatio: " + c);
            }
        else a = {
            pixelRatio: 1
        };
        a.renderBaseBackground || (a.renderBaseBackground = {
            lower: 3,
            higher: 2
        });
        return a
    }
    Q.prototype.D = function() {
        this.I = !1;
        this.j && this.j.J();
        this.ea.J();
        this.B.J();
        this.fa.J();
        this.c.J();
        this.va.J();
        this.f.J();
        Ge(this.b);
        this.b = null;
        I.prototype.D.call(this)
    };
    Q.prototype.Vb = function() {
        return this.b
    };
    Q.prototype.getElement = Q.prototype.Vb;
    Q.prototype.A = function() {
        return this.l.pixelRatio
    };
    Q.prototype.getPixelRatio = Q.prototype.A;

    function pl(a) {
        a.j && a.I && a.j.g({
            invert: a.i.Oh
        })
    }
    Q.prototype.Ba = function(a) {
        var b = a.added,
            c = a.removed;
        b && sa(b.Pa) && b.Pa().ia(this);
        c && sa(c.Pa) && c.Pa().ia(null);
        0 === a.idx && (this.dispatchEvent(new Ne(this.v.oh, this.i = a.type !== this.fa.a.Nc ? b : 0 < this.fa.Y.length ? this.fa.get(0) : x, a.type !== this.fa.a.Lc ? c : 1 < this.fa.Y.length ? this.fa.get(1) : x)), pl(this))
    };
    Q.prototype.Za = function(a) {
        a.modifiers && (this.F || (ql(this, "start"), this.F = !0), ql(this, "", a));
        this.F && (this.Ya && w.clearTimeout(this.Ya), this.Ya = w.setTimeout(this.T, 333))
    };

    function ql(a, b, c) {
        a.dispatchEvent(c ? new yi(a.v.Rf, c.newValue, c.oldValue, c.modifiers) : a.v.Rf + b)
    }
    Q.prototype.T = function() {
        ql(this, "end");
        this.F = !1
    };
    Q.prototype.Ga = function(a, b) {
        this.c.Jb({
            animate: !!b,
            position: a
        });
        return this
    };
    Q.prototype.setCenter = Q.prototype.Ga;
    Q.prototype.Oa = function() {
        var a = this.c.Ab();
        return a ? ic(a.position) : x
    };
    Q.prototype.getCenter = Q.prototype.Oa;
    Q.prototype.Ha = function(a, b) {
        this.c.l(a, !!b);
        return this
    };
    Q.prototype.setZoom = Q.prototype.Ha;
    Q.prototype.getZoom = function() {
        return this.c.getZoom()
    };
    Q.prototype.getZoom = Q.prototype.getZoom;
    Q.prototype.rd = function(a, b, c) {
        this.f.rd(a, b, c)
    };
    Q.prototype.zoomAt = Q.prototype.rd;
    Q.prototype.sa = function(a, b) {
        if (!B(a, G)) throw new C(this.sa, 0, a);
        var c = this.f.P(a, !1);
        c.zoom = pb(c.zoom);
        c.animate = b;
        this.c.Jb(c);
        return this
    };
    Q.prototype.setViewBounds = Q.prototype.sa;
    Q.prototype.ba = function() {
        return this.f.v(4, 0)
    };
    Q.prototype.getViewBounds = Q.prototype.ba;
    Q.prototype.U = function(a) {
        if (!B(a, G)) throw new C(this.U, 0, a);
        return this.f.P(a, !0)
    };
    Q.prototype.getCameraDataForBounds = Q.prototype.U;
    Q.prototype.Ub = function() {
        return this.va
    };
    Q.prototype.getViewPort = Q.prototype.Ub;
    Q.prototype.Tb = function() {
        return this.c
    };
    Q.prototype.getViewModel = Q.prototype.Tb;
    Q.prototype.kb = function() {
        return this.fa
    };
    Q.prototype.getLayers = Q.prototype.kb;
    Q.prototype.Fb = function() {
        return this.j
    };
    Q.prototype.getImprint = Q.prototype.Fb;
    Q.prototype.ya = function(a, b, c, d, e, f) {
        function g(a, b) {
            J ? a.cancel() : (n.save(), b.capture(m, t, function(b) {
                n.restore();
                a.done(b)
            }, function(b) {
                a.done(null, b);
                h(null)
            }))
        }

        function h(b) {
            J || (J = !0, a(b))
        }
        var k = this.g(),
            l = k.Ha(),
            m, n, q = this.j,
            t = this.l.pixelRatio,
            u;
        b = b || [];
        var y = this.va,
            J = !1,
            T, ea;
        if (!sa(a)) throw new C(this.ya, 0, a);
        c = c || 0;
        d = d || 0;
        e = e || y.width;
        f = f || y.height;
        T = mb(0, lb(c, e));
        ea = mb(0, lb(d, f));
        c = lb(y.width, mb(c, e));
        d = lb(y.height, mb(d, f));
        l.capture ? (m = k.ya(T, ea, c, d), n = m.getContext("2d"), m.style.width = m.width /
            t + "px", m.style.height = m.height / t + "px", u = new Tk(10, g), b = b.concat(q).filter(function(a) {
                return sa(a && a.capture)
            }), b.length ? (k = b.pop(), b.forEach(function(a) {
                u.push(a, sc)
            }), u.push(k, z(h, this, m)), Qk(u)) : h(m)) : a(null)
    };
    Q.prototype.capture = Q.prototype.ya;
    Q.prototype.g = function() {
        return this.m || this.f
    };
    Q.prototype.getEngine = Q.prototype.g;
    Q.prototype.N = function(a) {
        this.f.type === a || this.wa || (this.wa = !0, this.m = this.P(a), this.m.addEventListener("render", this.C));
        return this
    };
    Q.prototype.setEngineType = Q.prototype.N;
    Q.prototype.C = function(a) {
        a.target === this.m && (this.m.removeEventListener("render", this.C), this.m.enter(), this.f.Va(this.O))
    };
    Q.prototype.O = function() {
        var a = this.f.type;
        this.f.J();
        this.f = this.m;
        this.m = A;
        this.wa = !1;
        this.dispatchEvent(new Ne(this.v.vh, this.f.type, a))
    };
    Q.prototype.P = function(a, b) {
        var c = b ? nl(b, this.P) : this.l;
        if (a === ol.PANORAMA) return this.j && this.I && this.j.g({
            invert: !0
        }), new w.H.map.render.panorama.RenderEngine(this.va, this.c, this.fa, c);
        if (a === ol.P2D) return pl(this), new O(this.va, this.c, this.fa, c);
        throw new C(this.N, 0, a);
    };
    Q.prototype.K = function(a, b, c, d, e) {
        var f;
        b = Ta(b) ? B(b, G, this.K, 1, b) && b : this.ba();
        c = Ta(c) ? +c : this.getZoom();
        d = Ta(d) ? +d : this.getZoom();
        if (!(c <= d)) throw new C(this.K, A, "!(min <= max)");
        e = e || this.i;
        if (!B(e, nh)) throw new C(this.K, 4);
        if (!(f = e.Pa()) || !B(f, N) || !f.Rc()) throw new kc(this.constructor, "Storing is not supported");
        return new Nk(e, f, b, c, d, a)
    };
    Q.prototype.storeContent = Q.prototype.K;

    function rl(a) {
        Ei.call(this, a)
    }
    v(rl, Ei);
    rl.prototype.f = function() {
        Hi(this, 2)
    };
    rl.prototype.c = function() {
        Hi(this, 4)
    };
    Q.prototype.yb = function(a) {
        a = new rl(a);
        vc().clear(z(a.f, a), z(a.c, a));
        return a
    };
    Q.prototype.clearContent = Q.prototype.yb;
    Q.prototype.re = function(a, b) {
        -1 === this.fa.indexOf(a) && this.fa.add(a, D(b) ? this.fa.Y.length - 1 : b);
        return this
    };
    Q.prototype.addLayer = Q.prototype.re;
    Q.prototype.tf = function(a) {
        var b = this.fa.indexOf(a);
        a !== this.i && a !== this.ea && -1 !== b && this.fa.b(b);
        return this
    };
    Q.prototype.removeLayer = Q.prototype.tf;
    Q.prototype.Zb = function(a) {
        this.i !== a && (this.fa.set(0, a), this.i = a);
        return this
    };
    Q.prototype.setBaseLayer = Q.prototype.Zb;
    Q.prototype.zb = function() {
        return this.i
    };
    Q.prototype.getBaseLayer = Q.prototype.zb;
    Q.prototype.o = function(a) {
        if (!hc(a)) throw new C(this.o, 0, a);
        return (a = this.f.Ya(a)) ? gh(a) : x
    };
    Q.prototype.geoToScreen = Q.prototype.o;
    Q.prototype.Ka = function(a, b) {
        var c;
        if (c = +D(a) || 2 * D(b)) throw new C(this.Ka, c - 1, arguments[c - 1]);
        return (c = this.f.Ka(a, b)) ? ic(c) : x
    };
    Q.prototype.screenToGeo = Q.prototype.Ka;
    Q.prototype.Va = function(a, b) {
        return this.f.Za(a, b)
    };
    Q.prototype.screenToCameraData = Q.prototype.Va;
    Q.prototype.V = function(a) {
        if (!B(a, K)) throw new C(this.V, 0, a);
        this.B.f.V(a);
        return a
    };
    Q.prototype.addObject = Q.prototype.V;
    Q.prototype.a = function(a) {
        if (!B(a, K)) throw new C(this.a, 0, a);
        this.B.f.a(a);
        return a
    };
    Q.prototype.removeObject = Q.prototype.a;
    Q.prototype.jc = function() {
        return this.B.f.s(!0)
    };
    Q.prototype.getObjects = Q.prototype.jc;
    Q.prototype.Ua = function(a) {
        var b, c;
        if (!qa(a)) throw new C(this.Ua, 0, a);
        b = a.length;
        for (c = 0; c < b; c++) this.V(a[c]);
        return this
    };
    Q.prototype.addObjects = Q.prototype.Ua;
    Q.prototype.Xa = function(a) {
        if (!B(a, P) && !qa(a)) throw new C(this.Xa, 0, a);
        a.forEach(this.a, this);
        return this
    };
    Q.prototype.removeObjects = Q.prototype.Xa;
    Q.prototype.s = function(a, b) {
        var c;
        if (c = +D(a) || 2 * D(b)) throw new C(this.s, c - 1, arguments[c - 1]);
        return this.f.Ma(a, b, !0)[0] || x
    };
    Q.prototype.getObjectAt = Q.prototype.s;
    Q.prototype.Ma = function(a, b) {
        var c;
        if (c = +D(a) || 2 * D(b)) throw new C(this.s, c - 1, arguments[c - 1]);
        return this.f.Ma(a, b, !1)
    };
    Q.prototype.getObjectsAt = Q.prototype.Ma;
    var Pi = 1,
        ol = {
            P2D: 0,
            PANORAMA: Pi
        };
    Q.EngineType = ol;
    Q.prototype.v = {
        Oi: "mapviewchangestart",
        Rf: "mapviewchange",
        Sf: "mapviewchangeend",
        oh: "baselayerchange",
        vh: "enginechange"
    };

    function Lk(a, b, c) {
        this.c = z(this.c, this);
        K.call(this, c);
        this.i(a);
        this.m(b, c && c.crossOrigin);
        this.f(c && "opacity" in c ? c.opacity : 1)
    }
    v(Lk, K);
    r("H.map.Overlay", Lk);
    Lk.prototype.type = Pe.OVERLAY;
    Lk.prototype.S = function() {
        return this.a
    };
    Lk.prototype.getBounds = Lk.prototype.S;
    Lk.prototype.i = function(a) {
        var b = this.a,
            c = !b;
        B(a, G, Lk, 0, a);
        if (c || !b.pa(a)) this.a = a, c || this.ua(Me.SPATIAL);
        return this
    };
    Lk.prototype.setBounds = Lk.prototype.i;
    Lk.prototype.Pb = function() {
        return this.b.getData()
    };
    Lk.prototype.getBitmap = Lk.prototype.Pb;
    Lk.prototype.m = function(a, b) {
        var c = this.b;
        c && 1 !== c.getState() && c.cancel();
        this.b = new mi(a, this.c, !0, A, b);
        return this
    };
    Lk.prototype.setBitmap = Lk.prototype.m;
    Lk.prototype.c = function(a, b) {
        this.b = b;
        1 === a && this.ua(Me.VISUAL)
    };
    Lk.prototype.Bd = function() {
        return this.o
    };
    Lk.prototype.getOpacity = Lk.prototype.Bd;
    Lk.prototype.f = function(a) {
        var b = this.o,
            c = 2 > b;
        a -= 0;
        if (0 <= a && 1 >= a) a !== b && (this.o = a, c && this.ua(Me.VISUAL));
        else throw new C(this.f, 0);
        return this
    };
    Lk.prototype.setOpacity = Lk.prototype.f;

    function sl() {
        return Bh("mapsjs-core", "0.17.0", "e7c502b")
    }
    r("H.buildInfo", sl);
    r("H.getScriptPath", function() {
        var a;
        a = w.H.scriptPath;
        Ta(a) || (a = tl);
        if (!a) throw Error("Cant't detect script path: H.scriptPath is missing");
        return a
    });
    var tl, ul = w.document.currentScript,
        vl;
    ul || (ul = w.document.querySelector('script[src*="H-"]'), ul || (vl = w.document.getElementsByTagName("script"), ul = vl[vl.length - 1]));
    tl = ul ? ul.src.replace(/\/[^\/]*$/, "/") : "";

    this["maps" + "js"] = H;
}());
H.__bootstrap__ = "var m,q=this;function aa(a,b,c){a=a.split(\".\");c=c||q;a[0]in c||!c.execScript||c.execScript(\"var \"+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b}function ea(){}function fa(){throw Error(\"unimplemented abstract method\");}\nfunction ga(a){var b=typeof a;if(\"object\"==b)if(a){if(a instanceof Array)return\"array\";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(\"[object Window]\"==c)return\"object\";if(\"[object Array]\"==c||\"number\"==typeof a.length&&\"undefined\"!=typeof a.splice&&\"undefined\"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(\"splice\"))return\"array\";if(\"[object Function]\"==c||\"undefined\"!=typeof a.call&&\"undefined\"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(\"call\"))return\"function\"}else return\"null\";\nelse if(\"function\"==b&&\"undefined\"==typeof a.call)return\"object\";return b}function ha(a){return\"string\"==typeof a}function r(a){return\"function\"==ga(a)}function ia(a){var b=typeof a;return\"object\"==b&&null!=a||\"function\"==b}var ka=\"closure_uid_\"+(1E9*Math.random()>>>0),la=0;function ma(a,b,c){return a.call.apply(a.bind,arguments)}\nfunction qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function sa(a,b,c){sa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf(\"native code\")?ma:qa;return sa.apply(null,arguments)}\nfunction ta(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}function u(a,b){aa(a,b,void 0)}function ua(a,b){function c(){}c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.eb=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};function v(){}u(\"H.util.ICache\",v);v.prototype.add=function(){};v.prototype.add=v.prototype.add;v.prototype.get=function(){};v.prototype.get=v.prototype.get;v.prototype.j=function(){};v.prototype.drop=v.prototype.j;v.prototype.forEach=function(){};v.prototype.forEach=v.prototype.forEach;v.prototype.i=function(){};v.prototype.removeAll=v.prototype.i;v.prototype.g=function(){};v.prototype.registerOnDrop=v.prototype.g;var va=\"constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf\".split(\" \");function wa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<va.length;f++)c=va[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var y=function(){return this}();function xa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,xa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ua(xa,Error);xa.prototype.name=\"CustomError\";var Aa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\\s\\xa0]+|[\\s\\xa0]+$/g,\"\")};function Ba(a,b){return a<b?-1:a>b?1:0};var Ca=Array.prototype,Da=Ca.indexOf?function(a,b,c){return Ca.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(ha(a))return ha(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var Ea=sa,Fa=String;function Ga(a){return eval(\"\"+a)}var Ha=y.Object.freeze||function(a){return a};function Ia(a){var b={},c;for(c in a)b[c]=a[c];return b}var z=Ga(),Ja=Ga(null);function Ka(a){return Fa(a).split(\",\"!==z?\",\":\" \")}var Ma=\"prototype constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf\".split(\" \");function Na(a,b,c,d){if(!(b=a instanceof b)&&c)throw new B(c,d,void 0!==z?void 0:a);return b}u(\"H.lang.isObject\",ia);\nfunction Oa(a){for(var b in a)return!1;return!0}u(\"H.lang.isEmptyObject\",Oa);function Pa(a,b,c,d){var e;if(!(e=\"Array\"===Qa(a))&&b)throw new B(b,c,d!==z?d:a);return e}u(\"H.lang.isArray\",function(a,b,c,d){return Pa(a,b,c,d)});u(\"H.lang.isString\",ha);var Ra=isNaN;function Sa(a){return a===+a}u(\"H.lang.isNumber\",Sa);function Qa(a){var b=Object[Ma[0]][Ma[6]].call(a).match(/^\\[object (\\w+)\\]$/);return b?b[1]:typeof a}\nfunction Ta(a,b,c,d){var e=\"\",f=2>arguments.length;f&&(b={H:y.H},c=\"\",d=[]);Ua(b,!0,function(b,f){try{var k=b[f];f=Va(b,k);var l;if(l=!(ia(k)&&k.window===k&&k.self===k))l=!(ia(k)&&0<k.nodeType&&r(k.cloneNode));if(l&&ia(k)){if(k===a)return e=c+\".\"+f,!0;if(0>d.indexOf(k)&&(d.push(k),e=Ta(a,k,c+\".\"+f,d)))return!0}}catch(n){}});f&&(e=e?e.substr(1).replace(\".\"+Ma[0]+\".\",\"#\"):\"~\"+(r(a)?Wa(a)+\"()\":Qa(a)));return e}\nfunction Va(a,b){var c=[];Ua(a,!1,function(a,e){a[e]===b&&c.push(e)});return c.sort(Xa)[0]}function Xa(a,b){return b.length-a.length}var Ya=Object[Ma[0]][Ma[2]];function Ua(a,b,c){var d,e;if(a){for(d in a)if((!b||Ya.call(a,d))&&c(a,d,!0))return;for(e=Ma.length;e--&&(d=Ma[e],b&&!Ya.call(a,d)||!c(a,d,!1)););}}function Wa(a){return(a=/^\\s*function ([^\\( ]+)/.exec(a))?a[1]:\"anonymous\"}function Za(a,b,c){c[b]=\"#\"+b}({}).toString.call(void 0);function C(a,b,c){b&&this.g(b);if(c&&!r(c))throw new B(C,2,c);this.b=0;this.filter=c;this.a={};this.f=this.c=null;this.l(a)}u(\"H.util.Cache\",C);C.prototype.add=function(a,b,c){var d,e;c=+c;if(!Sa(c)||0>c)throw new B(this.add,2,c);a=String(a);d=this.a[a];e=!0;this.filter&&(e=this.filter(a,b,c));d?e?(this.b+=c-d.size,d.size=c,d.data=b,$a(this,d)):bb(this,d,!0):e&&(this.a[a]=cb(this,{id:a,data:b,size:c,F:null,J:null},this.c));db(this);return e};C.prototype.add=C.prototype.add;\nC.prototype.g=function(a){if(!r(a))throw new B(this.g,0,a);this.v=a};C.prototype.registerOnDrop=C.prototype.g;C.prototype.get=function(a,b){var c=b?this.a[a]:$a(this,this.a[a]);return c&&c.data};C.prototype.get=C.prototype.get;C.prototype.j=function(a){var b;(b=this.a[a])&&bb(this,b,!0)};C.prototype.drop=C.prototype.j;C.prototype.forEach=function(a,b,c){var d,e;for(e in this.a)d=this.a[e],(c?c(e,d.data,d.size):1)&&a.call(b,e,d.data,d.size)};C.prototype.forEach=C.prototype.forEach;\nC.prototype.i=function(a){var b,c;for(c in this.a)b=this.a[c],(a?a(c,b.data,b.size):1)&&bb(this,this.a[c],!0)};C.prototype.removeAll=C.prototype.i;C.prototype.l=function(a){if(!(0<+a))throw new B(C.prototype.l,0,a);this.o=+a;db(this);return this};C.prototype.setMaxSize=C.prototype.l;C.prototype.C=function(){return this.o};C.prototype.getMaxSize=C.prototype.C;C.prototype.B=function(){return this.b};C.prototype.getCurrentSize=C.prototype.B;function $a(a,b){b&&(a.c=cb(a,b,a.c));return b}\nfunction db(a){for(;a.b>a.o&&a.f;)bb(a,a.f,!0)}function cb(a,b,c){if(c!==b){(b.F||b.J)&&bb(a,b);if(b.F=c)b.J=c.J,c.J=b;b.J||(a.c=b);b.F||(a.f=b);a.b+=b.size}return b}function bb(a,b,c){var d=b.J,e=b.F;if(d||e||b==a.c&&b==a.f)d?d.F=e:a.c=e,e?e.J=d:a.f=d,a.b-=b.size,c&&(a.v&&a.v(b.id,b.data,b.size),delete a.a[b.id]);b.F=b.J=null};function E(){}u(\"H.service.extension.dataView.ITable\",E);E.prototype.getMeta=E.prototype.Aa;E.prototype.getRowCount=E.prototype.i;E.prototype.getRow=E.prototype.c;E.prototype.getColumnNames=E.prototype.f;E.prototype.getColumn=E.prototype.g;E.prototype.getCell=E.prototype.b;E.prototype.concat=E.prototype.a;function eb(){}u(\"H.service.extension.dataView.IRow\",eb);eb.prototype.getColumnNames=eb.prototype.f;eb.prototype.getCell=eb.prototype.c;eb.prototype.getTable=eb.prototype.b;function fb(a,b){this.a=a;this.g=b}u(\"H.service.extension.dataView.ObjRow\",fb);fb.prototype.f=function(){return this.a.f()};fb.prototype.getColumnNames=fb.prototype.f;fb.prototype.c=function(a){return this.a.b(this.g,a)};fb.prototype.getCell=fb.prototype.c;fb.prototype.b=function(){return this.a};fb.prototype.getTable=fb.prototype.b;function gb(){}u(\"H.service.extension.dataView.IColumn\",gb);gb.prototype.getCell=gb.prototype.a;function hb(a,b){this.c=a;this.b=b}u(\"H.service.extension.dataView.ObjColumn\",hb);hb.prototype.a=function(a){return this.c.b(a,this.b)};hb.prototype.getCell=hb.prototype.a;function B(a,b,c){var d=arguments.length,e;b=1<d?+b:b;d=2<d?Fa(c):\"\";b!==z&&(e=(e=/^.*?\\(([^\\)]+)/.exec((\"\"+a).replace(/(\\/\\*([\\s\\S]*?)\\*\\/)|(\\/\\/(.*)$)/gm,\"\")))?Ka(e[1].replace(/\\s+/g,\"\")):[],e.forEach(Za),e=e[b]||\"#\"+b);this.message=(a?Ta(a):\"\")+(e||d?\" (\":\"\")+(e?\"Argument \"+e:\"\")+(d?(e?\" \":\"\")+d:\"\")+(e||d?\")\":\"\");this.stack=Error().stack}u(\"H.lang.InvalidArgumentError\",B);B.prototype=Error();B.prototype.name=\"InvalidArgumentError\";function F(a,b,c){var d;b=b||(a&&a.length?Object.keys(a[0]):z);this.K=a;if(b)for(this.R=b,this.qa=a=Object.create(Ja,void 0),d=b.length;d--;)a[b[d]]=!0;c!==z&&(this.ta=c)}u(\"H.service.extension.dataView.ObjTable\",F);m=F.prototype;m.ta=z;m.K=z;m.R=z;m.qa=z;m.Aa=function(){return this.ta};F.prototype.getMeta=F.prototype.Aa;F.prototype.i=function(){return this.K?this.K.length:0};F.prototype.getRowCount=F.prototype.i;F.prototype.c=function(a){var b=this.K;return b&&b[a]?new fb(this,a):z};\nF.prototype.getRow=F.prototype.c;F.prototype.f=function(){return this.R||ib};F.prototype.getColumnNames=F.prototype.f;F.prototype.g=function(a){return this.qa[a]?new hb(this,a):z};F.prototype.getColumn=F.prototype.g;F.prototype.b=function(a,b){var c=this.K;return(c=c&&this.qa[b]&&c[a])&&c[b]};F.prototype.getCell=F.prototype.b;\nF.prototype.a=function(){var a=arguments.length,b,c=this.R,d=\"\"+this.R,e=(this.K||[]).slice(),f;for(b=0;b<a;b++){f=arguments[b];if(!(f instanceof F))throw new B(this.a,b);if(f.K){if(c&&\"\"+f.R!==d)throw new B(this.a,b,\"Incompatible columns!\");e=e.concat(f.K)}}return new F(e,this.R,this.ta)};F.prototype.concat=F.prototype.a;function J(a,b){this.x=+a;this.y=+b}u(\"H.math.Point\",J);J.prototype.set=J;J.prototype.set=J.prototype.set;J.prototype.clone=function(a){a?(a.x=this.x,a.y=this.y):a=new J(this.x,this.y);return a};J.prototype.clone=J.prototype.clone;J.prototype.add=function(a){this.x+=a.x;this.y+=a.y;return this};J.prototype.add=J.prototype.add;J.prototype.f=function(a){this.x-=a.x;this.y-=a.y;return this};J.prototype.sub=J.prototype.f;J.prototype.c=function(a,b){this.x*=a;this.y*=void 0===b?a:b;return this};\nJ.prototype.scale=J.prototype.c;J.prototype.round=function(){this.x=jb(this.x);this.y=jb(this.y);return this};J.prototype.round=J.prototype.round;J.prototype.floor=function(){this.x=kb(this.x);this.y=kb(this.y);return this};J.prototype.floor=J.prototype.floor;J.prototype.ceil=function(){this.x=lb(this.x);this.y=lb(this.y);return this};J.prototype.ceil=J.prototype.ceil;J.prototype.Ca=function(a){return!(!a||this.x!==a.x||this.y!==a.y)};J.prototype.equals=J.prototype.Ca;\nJ.prototype.a=function(a,b){var c=b.x-a.x,d=b.y-a.y,e,f=a;if(c||d)e=((this.x-a.x)*c+(this.y-a.y)*d)/(c*c+d*d),0>=e?f=a:1<=e?f=b:f=new J(a.x+e*c,a.y+e*d);return f};J.prototype.getNearest=J.prototype.a;J.prototype.b=function(a){return mb(nb(this.x-a.x,2)+nb(this.y-a.y,2))};J.prototype.distance=J.prototype.b;function ob(a){if(!a)throw new B(ob,0,a);return Na(a,J)?a:new J(a.x,a.y)}J.fromIPoint=ob;function pb(a,b,c,d,e,f){var g,h,k=a.length,l,n,p,w,G,D,I;if(k)for(g=[];k--;)for(D=a[k],w=D.length,G=0,l=1;l<w;l++){if(I=qb(D[l-1],D[l],c,b,d,e))n=I[0],p=I[1],G&&G.Ca(n)?h.push(p):g.push(h=I),G=p,f&&(l=w,k=0)}else g=a;return g}\nfunction qb(a,b,c,d,e,f){var g=a.x;a=-a.y;var h=b.x;b=-b.y;var k,l,n;c=-c;f=-f;if(g>h){if(h>e||g<d)return;l=g;n=a;g=h;a=b;h=l;b=n;l=1}else if(g>e||h<d)return;if(a>b){if(b>c||a<f)return;k=1;a=-a;b=-b;n=f;f=-c;c=-n}else if(a>c||b<f)return;if(g<d){if((a+=(d-g)*(b-a)/(h-g))>c)return;g=d}if(a<f){if((g+=(f-a)*(h-g)/(b-a))>e)return;a=f}h>e&&(b=a+(e-g)*(b-a)/(h-g),h=e);b>c&&(h=g+(c-a)*(h-g)/(b-a),b=c);k&&(a=-a,b=-b);return l?[new J(h,-b),new J(g,-a)]:[new J(g,-a),new J(h,-b)]}\nfunction rb(a,b,c,d,e,f,g,h,k,l){a={x:a,y:b,next:c||null,D:d||null,Da:e||null,ua:f||null,I:g||0,ra:h||0,na:k||0,alpha:l||0};d&&(a.D.next=a);c&&(a.next.D=a);return a}function sb(a){for(;a&&a.I;)a=a.next;return a}function tb(a){if(a)for(;a.next;)a=a.next;return a}function ub(a){var b=a;if(b){do b=b.next;while(b!=a&&(!b.I||b.I&&b.na))}return b}function vb(a){var b=tb(a);b.D.next=a;a.D=b.D}\nfunction wb(a,b,c,d,e,f){var g,h,k,l=b.x-a.x,n=b.y-a.y;g=d.x-c.x;var p=d.y-c.y;h=l*p-n*g;if(!h)return 0;g=((c.x-a.x)*p-(c.y-a.y)*g)/h;h=(n*(c.x-a.x)-l*(c.y-a.y))/h;if(0>g||1<g||0>h||1<h)return 0;0===g?k=a:1===g?k=b:0===h?k=c:1===h&&(k=d);if(k&&!f)return k.x+=2.480549651603763E-5,k.y+=7.321997314118067E-5,k.ia&&(k.ia.x=k.x,k.ia.y=k.y),wb(a,b,c,d,e);e.Za=a.x+g*l;e.$a=a.y+g*n;e.Ja=g;e.xa=h;return 1}\nfunction xb(a,b,c){var d,e=0,f={},g,h,k,l,n,p;c=c||a.y;d=rb(-137438953472,c);Array.isArray(b)?(k=0,g=b[k],l=function(){return b[++k]}):(n=g=b,l=function(){return n=n.next});for(;p=l();){h=wb(d,a,g,p,f,!0);g=f.xa;if(0===g||1===g)return xb(a,b,c+6E-5);h&&e++;g=p}return e%2}function yb(a,b,c){for(b=b.next;b!==c&&b.alpha<=a.alpha;)b=b.next;a.next=b;a.D=b.D;a.next.D=a;a.D.next=a}function zb(a){for(var b,c=null,d=0,e=a.length;d<e;d++){b=rb(a[d].x,a[d].y,c);if(b.next=c)c.D=b;c=b}return c};function Ab(a,b){var c=[];a&&c.push(Ta(a));1<arguments.length&&c.push(b);this.message=c.join(\" \");this.stack=Error().stack}ua(Ab,Error);u(\"H.lang.IllegalOperationError\",Ab);Ab.prototype=Error();Ab.prototype.name=\"IllegalOperationError\";function Bb(a){if(!ha(a))throw new B(this.constructor,0);this.i=y.indexedDB||y.webkitIndexedDB||y.mozIndexedDB||y.msIndexedDB;if(!this.i)throw new Ab(this.constructor,\"This browser does not support IndexedDB\");this.o=a;this.a=[];this.c=[];this.g=Ea(this.g,this)}var Cb,Db;u(\"H.util.IndexedDBStorage\",Bb);\nBb.prototype.get=function(a,b,c){var d;if(!Eb(a))throw new B(this.get,0);if(!r(b))throw new B(this.get,1);Fb(this,function(e){d=e.get(a);Gb(d,b,c)},c);return{cancel:function(){d&&(d.onsuccess=Hb)}}};Bb.prototype.remove=function(a,b,c){if(!Eb(a))throw new B(this.remove,0);Fb(this,function(d){Gb(d[\"delete\"](a),b,c)},c)};Bb.prototype.l=y.IDBTransaction&&y.IDBTransaction.READ_WRITE||\"readwrite\";Bb.prototype.g=function(){var a=this.b.result;a.objectStoreNames.contains(\"data\")||a.createObjectStore(\"data\")};\nfunction Ib(a,b,c){var d;a.b?a.a?(a.a.push(b),c&&a.c.push(c)):a.f?c&&c(a.f):b(a.b.result):(a.b=a.i.open(Jb+a.o,1),a.b.onupgradeneeded=a.g,d=a.b.onerror=function(){clearTimeout(a.j);a.f=this.error;a.c.forEach(function(b){b(a.f)});a.a=a.c=null},a.j=setTimeout(function(){d.call({error:Error(\"DbOpenTimeoutError\")})},500),a.b.onsuccess=function(){clearTimeout(a.j);a.a?(a.a.forEach(function(a){a(this.result)},this),a.a=a.c=null):(a.b=a.f=null,a.a=[],a.c=[])},a.a.push(b),c&&a.c.push(c))}\nfunction Fb(a,b,c){Ib(a,function(c){c=c.transaction([\"data\"],a.l);b(c.objectStore(\"data\"))},c)}function Gb(a,b,c){b&&(a.onsuccess=function(){b(this.result)});c&&(a.onerror=function(){c(this.error)})}function Eb(a){return ha(a)||Sa(a)}Bb.getInstance=function(){Cb||(Cb=new Bb(\"STATIC_DB\"));return Cb};var Jb=\"H_\";\nBb.isSupported=function(){var a,b,c;if(Db===z)if(\"file:\"===window.location.protocol&&-1<navigator.userAgent.toLowerCase().indexOf(\"firefox\")&&128<=window.location.href.length)Db=!1;else{a=y.indexedDB||y.webkitIndexedDB||y.mozIndexedDB||y.msIndexedDB;c=Jb+\"TEST_DB\";try{b=a&&a.open(c,1)}catch(d){}Db=!!b&&null===b.onupgradeneeded;b&&a.deleteDatabase&&a.deleteDatabase(c)}return Db};function L(){0!=Kb&&(Lb[this[ka]||(this[ka]=++la)]=this);this.g=this.g;this.c=this.c}var Kb=0,Lb={};L.prototype.g=!1;L.prototype.S=function(){if(!this.g&&(this.g=!0,this.ja(),0!=Kb)){var a=this[ka]||(this[ka]=++la);delete Lb[a]}};L.prototype.f=function(a,b){this.g?a.call(b):(this.c||(this.c=[]),this.c.push(void 0!==b?sa(a,b):a))};L.prototype.ja=function(){if(this.c)for(;this.c.length;)this.c.shift()()};function N(a,b){this.type=a;this.currentTarget=this.target=b;this.a=!1;this.Ea=!0}N.prototype.c=function(){this.a=!0};N.prototype.f=function(){this.Ea=!1};u(\"H.util.Event\",N);N.prototype.c=N.prototype.c;N.prototype.stopPropagation=N.prototype.c;N.prototype.j=1;N.prototype.CAPTURING_PHASE=N.prototype.j;N.prototype.g=2;N.prototype.AT_TARGET=N.prototype.g;N.prototype.i=3;N.prototype.BUBBLING_PHASE=N.prototype.i;N.prototype.l=0;N.prototype.eventPhase=N.prototype.l;function Mb(a,b,c){Mb.W.constructor.call(this,a,c);this.data=b}ua(Mb,N);u(\"H.util.DataEvent\",Mb);function Nb(a,b,c){Nb.W.constructor.call(this,a,c);this.message=b}ua(Nb,N);u(\"H.util.ErrorEvent\",Nb);var P=Math,Ob=P.min,Pb=P.max,jb=P.round,kb=P.floor,lb=P.ceil,Qb=P.abs,Rb=P.log,mb=P.sqrt,nb=P.pow,Sb=P.exp,Tb=P.sin,Ub=P.asin,Vb=P.cos,Wb=P.tan,Xb=P.atan,Yb=P.atan2,Zb=P.LN2,Q=P.PI,$b=Q/2,ac=Q/4,bc=2*Q,cc=3*Q,dc=Q/180,ec=180/Q,fc=1/0;nb(-2,53);function gc(a,b){var c;return 0>(c=a%b)===0>b?c:c+b}u(\"H.math.normalize\",function(a,b,c){b-=c=c||0;a-=c;return a-kb(a/b)*b+c});function kc(a,b,c){return(a-=0)>c?c:a<b?b:a}u(\"H.math.clamp\",kc);\nfunction lc(a,b,c){var d=0;(d-=0)||(d=0);return b<c?a>=b-d&&a<=c+d:a>=c-d&&a<=b+d}function mc(a,b,c,d,e,f){return mb(nb((a-e)*(d-f)-(b-f)*(c-e),2)/(nb(c-e,2)+nb(d-f,2)))}\nfunction nc(a,b,c){for(var d=c.length,e=d,f,g,h,k,l=c[0],n=0,p=0,w=0;1!=n&&1<e;){g=c[--e];f=c[--e];k=c[e?e-1:(d+(e-1))%d];h=c[e?e-2:(d+(e-2))%d];if(f>=a-0&&f<=a+0&&g>=b-0&&g<=b+0||h>=a-0&&h<=a+0&&k>=b-0&&k<=b+0)n=1;else if(!n&&f===a)h===a&&(g<b&&k>b||g>b&&k<b)||(l<=a&&h>a||l>=a&&h<a)&&(g>=b?++p:++w),n=lc(b,g,k)&&0>=mc(a,b,f,g,h,k)?2:0;else if(!n&&lc(a,f,h)){if(f<a&&h>a||f>a&&h<a)l=g+(a-f)/(h-f)*(k-g),p+=l>b,w+=l<b;n=lc(b,g,k)&&0>=mc(a,b,f,g,h,k)?2:0}l=f}!n&&0!==w&&0!==p%2&&(n=3);return n};function oc(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null}oc.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};function pc(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b)};function qc(){this.b=this.a=null}var sc=new oc(function(){return new rc},function(a){a.reset()},100);qc.prototype.add=function(a,b){var c=sc.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};qc.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};function rc(){this.next=this.b=this.a=null}rc.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};rc.prototype.reset=function(){this.next=this.b=this.a=null};var R;a:{var tc=q.navigator;if(tc){var uc=tc.userAgent;if(uc){R=uc;break a}}R=\"\"};function vc(){return-1!=R.indexOf(\"Edge\")||-1!=R.indexOf(\"Trident\")||-1!=R.indexOf(\"MSIE\")};function wc(){return-1!=R.indexOf(\"Edge\")};function xc(a){q.setTimeout(function(){throw a;},0)}var yc;\nfunction zc(){var a=q.MessageChannel;\"undefined\"===typeof a&&\"undefined\"!==typeof window&&window.postMessage&&window.addEventListener&&-1==R.indexOf(\"Presto\")&&(a=function(){var a=document.createElement(\"IFRAME\");a.style.display=\"none\";a.src=\"\";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write(\"\");a.close();var c=\"callImmediate\"+Math.random(),d=\"file:\"==b.location.protocol?\"*\":b.location.protocol+\"//\"+b.location.host,a=sa(function(a){if((\"*\"==d||a.origin==\nd)&&a.data==c)this.port1.onmessage()},this);b.addEventListener(\"message\",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if(\"undefined\"!==typeof a&&!vc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.ya;c.ya=null;a()}};return function(a){d.next={ya:a};d=d.next;b.port2.postMessage(0)}}return\"undefined\"!==typeof document&&\"onreadystatechange\"in document.createElement(\"SCRIPT\")?function(a){var b=document.createElement(\"SCRIPT\");\nb.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}};function Ac(a,b){Bc||Cc();Dc||(Bc(),Dc=!0);Ec.add(a,b)}var Bc;function Cc(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve();Bc=function(){a.then(Fc)}}else Bc=function(){var a=Fc;!r(q.setImmediate)||q.Window&&q.Window.prototype&&q.Window.prototype.setImmediate==q.setImmediate?(yc||(yc=zc()),yc(a)):q.setImmediate(a)}}var Dc=!1,Ec=new qc;function Fc(){for(var a=null;a=Ec.remove();){try{a.a.call(a.b)}catch(b){xc(b)}pc(sc,a)}Dc=!1};function Gc(a,b){this.a=Hc;this.j=void 0;this.f=this.b=this.c=null;this.g=this.i=!1;if(a==Ic)Jc(this,Kc,b);else try{var c=this;a.call(b,function(a){Jc(c,Kc,a)},function(a){Jc(c,Lc,a)})}catch(d){Jc(this,Lc,d)}}var Hc=0,Kc=2,Lc=3;function Mc(){this.next=this.c=this.b=this.f=this.a=null;this.g=!1}Mc.prototype.reset=function(){this.c=this.b=this.f=this.a=null;this.g=!1};var Nc=new oc(function(){return new Mc},function(a){a.reset()},100);function Oc(a,b,c){var d=Nc.get();d.f=a;d.b=b;d.c=c;return d}\nfunction Ic(){}function Pc(a){return new Gc(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},h=0,k;k=a[h];h++)Qc(k,ta(f,h),g);else b(e)})}function Rc(){var a,b,c=new Gc(function(c,e){a=c;b=e});return new Sc(c,a,b)}Gc.prototype.then=function(a,b,c){return Tc(this,r(a)?a:null,r(b)?b:null,c)};Gc.prototype.then=Gc.prototype.then;Gc.prototype.$goog_Thenable=!0;function Qc(a,b,c,d){a instanceof Gc?Uc(a,Oc(b||ea,c||null,d)):a.then(b,c,d)}\nGc.prototype.cancel=function(a){this.a==Hc&&Ac(function(){var b=new Vc(a);Wc(this,b)},this)};function Wc(a,b){if(a.a==Hc)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.g||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==Hc&&1==d?Wc(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Xc(c),Yc(c,e,Lc,b)))}a.c=null}else Jc(a,Lc,b)}function Uc(a,b){a.b||a.a!=Kc&&a.a!=Lc||Zc(a);a.f?a.f.next=b:a.b=b;a.f=b}\nfunction Tc(a,b,c,d){var e=Oc(null,null,null);e.a=new Gc(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){g(l)}}:a;e.b=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof Vc?g(b):a(e)}catch(l){g(l)}}:g});e.a.c=a;Uc(a,e);return e.a}Gc.prototype.l=function(a){this.a=Hc;Jc(this,Kc,a)};Gc.prototype.o=function(a){this.a=Hc;Jc(this,Lc,a)};\nfunction Jc(a,b,c){if(a.a==Hc){if(a==c)b=Lc,c=new TypeError(\"Promise cannot resolve to itself\");else{var d;if(c)try{d=!!c.$goog_Thenable}catch(e){d=!1}else d=!1;if(d){a.a=1;Qc(c,a.l,a.o,a);return}if(ia(c))try{var f=c.then;if(r(f)){$c(a,c,f);return}}catch(g){b=Lc,c=g}}a.j=c;a.a=b;a.c=null;Zc(a);b!=Lc||c instanceof Vc||ad(a,c)}}function $c(a,b,c){function d(b){f||(f=!0,a.o(b))}function e(b){f||(f=!0,a.l(b))}a.a=1;var f=!1;try{c.call(b,e,d)}catch(g){d(g)}}function Zc(a){a.i||(a.i=!0,Ac(a.v,a))}\nfunction Xc(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}Gc.prototype.v=function(){for(var a=null;a=Xc(this);)Yc(this,a,this.a,this.j);this.i=!1};function Yc(a,b,c,d){if(c==Lc&&b.b&&!b.g)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,bd(b,c,d);else try{b.g?b.f.call(b.c):bd(b,c,d)}catch(e){cd.call(null,e)}pc(Nc,b)}function bd(a,b,c){b==Kc?a.f.call(a.c,c):a.b&&a.b.call(a.c,c)}function ad(a,b){a.g=!0;Ac(function(){a.g&&cd.call(null,b)})}var cd=xc;\nfunction Vc(a){xa.call(this,a)}ua(Vc,xa);Vc.prototype.name=\"cancel\";function Sc(a,b,c){this.la=a;this.resolve=b;this.reject=c};function dd(a,b,c){this.type=a;this.data=b;this.G=Rc();this.resolve=Ea(this.resolve,this);this.reject=Ea(this.reject,this);this.a=ed;c!==z&&(this.a=c);this.Pa().add(this)}var ed=1,fd={bb:0,NORMAL:ed,ab:2};dd.prototype.then=function(a,b,c){return this.G.la.then(a,b,c)};\nwa(dd.prototype,{resolve:function(a){this.state=3;this.G.resolve(a)},reject:function(a){this.state=5;this.G.reject(a)},state:0,cancel:function(){this.G.la.cancel();3>this.state&&(this.Ka(),this.Pa().remove(this),this.state=4)},Ka:fa,Na:fa,Ma:function(a){this.state=this.Na(a)?1:5}});function gd(a){this.O={};for(var b in fd)this.O[fd[b]]=[];this.ma=a;this.ma.addEventListener(\"allocatable\",Ea(this.za,this))}u(\"H.util.JobManager\",gd);var hd=Object.keys(fd).map(function(a){return fd[a]}).sort().reverse();\nwa(gd.prototype,{add:function(a){Na(a,dd,this.add,0);this.O[a.a].push(a);this.za()},contains:function(a){return-1<this.O[a.a].indexOf(a)},remove:function(a){var b=a.a;a=this.O[b].indexOf(a);return-1<a?(this.O[b].splice(a,1),!0):!1},za:function(){hd.forEach(function(a){this.O[a]=this.O[a].filter(function(a){var c,d;if((c=this.ma.cb(a))!==Ja)d=Ea(this.ma.fb,this.ma,c,a),a.then(d,d),a.Ma(c);else return!0},this)},this)}});function id(a,b,c){var d=[];1<arguments.length&&d.push(b);2<arguments.length&&d.push(\"out of [\"+c[0]+\"...\"+c[1]+\"]\");this.message=(a?Ta(a):\"\")+(d.length?\" (\"+d.join(\" \")+\")\":\"\");this.stack=Error().stack}u(\"H.lang.OutOfRangeError\",id);id.prototype=Error();id.prototype.name=\"OutOfRangeError\";var jd=\"closure_listenable_\"+(1E6*Math.random()|0),kd=0;function ld(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.ga=!!d;this.ka=e;++kd;this.V=this.fa=!1}function md(a){a.V=!0;a.listener=null;a.a=null;a.src=null;a.ka=null};function nd(a){this.src=a;this.a={};this.b=0}nd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=od(a,b,d,e);-1<g?(b=a[g],c||(b.fa=!1)):(b=new ld(b,this.src,f,!!d,e),b.fa=c,a.push(b));return b};nd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=od(e,b,c,d);return-1<b?(md(e[b]),Ca.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.b--),!0):!1};\nfunction pd(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=Da(d,b),f;(f=0<=e)&&Ca.splice.call(d,e,1);f&&(md(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}function od(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.V&&f.listener==b&&f.ga==!!c&&f.ka==d)return e}return-1};var qd=-1!=R.indexOf(\"Opera\")||-1!=R.indexOf(\"OPR\"),rd=vc(),sd=-1!=R.indexOf(\"Gecko\")&&!(-1!=R.toLowerCase().indexOf(\"webkit\")&&!wc())&&!(-1!=R.indexOf(\"Trident\")||-1!=R.indexOf(\"MSIE\"))&&!wc(),td=-1!=R.toLowerCase().indexOf(\"webkit\")&&!wc();function ud(){var a=R;if(sd)return/rv\\:([^\\);]+)(\\)|;)/.exec(a);if(rd&&wc())return/Edge\\/([\\d\\.]+)/.exec(a);if(rd)return/\\b(?:MSIE|rv)[: ]([^\\);]+)(\\)|;)/.exec(a);if(td)return/WebKit\\/(\\S+)/.exec(a)}\nfunction vd(){var a=q.document;return a?a.documentMode:void 0}var wd=function(){if(qd&&q.opera){var a=q.opera.version;return r(a)?a():a}var a=\"\",b=ud();b&&(a=b?b[1]:\"\");return rd&&!wc()&&(b=vd(),b>parseFloat(a))?String(b):a}(),xd={};\nfunction yd(a){var b;if(!(b=xd[a])){b=0;for(var c=Aa(String(wd)).split(\".\"),d=Aa(String(a)).split(\".\"),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||\"\",h=d[f]||\"\",k=/(\\d*)(\\D*)/g,l=/(\\d*)(\\D*)/g;do{var n=k.exec(g)||[\"\",\"\",\"\"],p=l.exec(h)||[\"\",\"\",\"\"];if(0==n[0].length&&0==p[0].length)break;b=Ba(0==n[1].length?0:parseInt(n[1],10),0==p[1].length?0:parseInt(p[1],10))||Ba(0==n[2].length,0==p[2].length)||Ba(n[2],p[2])}while(0==b)}b=xd[a]=0<=b}return b}\nvar zd=q.document,Ad=vd(),Bd=!zd||!rd||!Ad&&wc()?void 0:Ad||(\"CSS1Compat\"==zd.compatMode?parseInt(wd,10):5);var Cd;(Cd=!rd)||(Cd=rd&&(wc()||9<=Bd));var Dd=Cd,Ed=rd&&!yd(\"9\");!td||yd(\"528\");sd&&yd(\"1.9b\")||rd&&yd(\"8\")||qd&&yd(\"9.5\")||td&&yd(\"528\");sd&&!yd(\"8\")||rd&&yd(\"9\");function Fd(a){Fd[\" \"](a);return a}Fd[\" \"]=ea;function Gd(a,b){N.call(this,a?a.type:\"\");this.b=this.state=this.currentTarget=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var c=a.relatedTarget;if(c&&sd)try{Fd(c.nodeName)}catch(d){}this.state=a.state;this.b=a;a.defaultPrevented&&this.f()}}ua(Gd,N);Gd.prototype.c=function(){Gd.W.c.call(this);this.b.stopPropagation?this.b.stopPropagation():this.b.cancelBubble=!0};\nGd.prototype.f=function(){Gd.W.f.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ed)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Hd=\"closure_lm_\"+(1E6*Math.random()|0),Id={},Jd=0;function Kd(a,b,c,d,e){if(\"array\"==ga(b))for(var f=0;f<b.length;f++)Kd(a,b[f],c,d,e);else if(c=Ld(c),a&&a[jd])a.M.add(String(b),c,!1,d,e);else{if(!b)throw Error(\"Invalid event type\");var f=!!d,g=Md(a);g||(a[Hd]=g=new nd(a));c=g.add(b,c,!1,d,e);c.a||(d=Nd(),c.a=d,d.src=a,d.listener=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(Od(b.toString()),d),Jd++)}}\nfunction Nd(){var a=Pd,b=Dd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Qd(a,b,c,d,e){if(\"array\"==ga(b))for(var f=0;f<b.length;f++)Qd(a,b[f],c,d,e);else(c=Ld(c),a&&a[jd])?a.M.remove(String(b),c,d,e):a&&(a=Md(a))&&(b=a.a[b.toString()],a=-1,b&&(a=od(b,c,!!d,e)),(c=-1<a?b[a]:null)&&Rd(c))}\nfunction Rd(a){if(\"number\"!=typeof a&&a&&!a.V){var b=a.src;if(b&&b[jd])pd(b.M,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.ga):b.detachEvent&&b.detachEvent(Od(c),d);Jd--;(c=Md(b))?(pd(c,a),0==c.b&&(c.src=null,b[Hd]=null)):md(a)}}}function Od(a){return a in Id?Id[a]:Id[a]=\"on\"+a}function Sd(a,b,c,d){var e=!0;if(a=Md(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.ga==c&&!f.V&&(f=Td(f,d),e=e&&!1!==f)}return e}\nfunction Td(a,b){var c=a.listener,d=a.ka||a.src;a.fa&&Rd(a);return c.call(d,b)}\nfunction Pd(a,b){if(a.V)return!0;if(!Dd){var c;if(!(c=b))a:{c=[\"window\",\"event\"];for(var d=q,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new Gd(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,h=e.length-1;!c.a&&0<=h;h--){c.currentTarget=e[h];var k=Sd(e[h],f,!0,c),d=d&&k}for(h=0;!c.a&&h<e.length;h++)c.currentTarget=\ne[h],k=Sd(e[h],f,!1,c),d=d&&k}return d}return Td(a,new Gd(b,this))}function Md(a){a=a[Hd];return a instanceof nd?a:null}var Ud=\"__closure_events_fn_\"+(1E9*Math.random()>>>0);function Ld(a){if(r(a))return a;a[Ud]||(a[Ud]=function(b){return a.handleEvent(b)});return a[Ud]};function S(){L.call(this);this.M=new nd(this);this.j=this;this.i=null}ua(S,L);S.prototype[jd]=!0;m=S.prototype;m.N=function(){return this.i};m.sa=function(a){this.i=a};m.addEventListener=function(a,b,c,d){Kd(this,a,b,c,d)};m.removeEventListener=function(a,b,c,d){Qd(this,a,b,c,d)};\nm.X=function(a){var b,c=this.N();if(c)for(b=[];c;c=c.N())b.push(c);var c=this.j,d=a.type||a;if(ha(a))a=new N(a,c);else if(a instanceof N)a.target=a.target||c;else{var e=a;a=new N(d,c);wa(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.a&&0<=g;g--)f=a.currentTarget=b[g],e=f.T(d,!0,a)&&e;a.a||(f=a.currentTarget=c,e=f.T(d,!0,a)&&e,a.a||(e=f.T(d,!1,a)&&e));if(b)for(g=0;!a.a&&g<b.length;g++)f=a.currentTarget=b[g],e=f.T(d,!1,a)&&e;return e};\nm.ja=function(){S.W.ja.call(this);if(this.M){var a=this.M,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,md(d[e]);delete a.a[c];a.b--}}this.i=null};m.T=function(a,b,c){a=this.M.a[String(a)];if(!a)return!0;a=a.concat();for(var d=!0,e=0;e<a.length;++e){var f=a[e];if(f&&!f.V&&f.ga==b){var g=f.listener,h=f.ka||f.src;f.fa&&pd(this.M,f);d=!1!==g.call(h,c)&&d}}return d&&0!=c.Ea};u(\"H.util.EventTarget\",S);S.prototype.sa=S.prototype.sa;S.prototype.setParentEventTarget=S.prototype.sa;S.prototype.N=S.prototype.N;S.prototype.getParentEventTarget=S.prototype.N;S.prototype.addEventListener=S.prototype.addEventListener;S.prototype.addEventListener=S.prototype.addEventListener;S.prototype.removeEventListener=S.prototype.removeEventListener;S.prototype.removeEventListener=S.prototype.removeEventListener;S.prototype.X=S.prototype.X;S.prototype.dispatchEvent=S.prototype.X;\nS.prototype.S=S.prototype.S;S.prototype.dispose=S.prototype.S;S.prototype.f=S.prototype.f;S.prototype.addOnDisposeCallback=S.prototype.f;S.prototype.l=S.prototype.T;S.prototype.T=function(a,b,c){var d,e,f,g=!0;d=c[c.currentTarget===c.target?\"AT_TARGET\":b?\"CAPTURING_PHASE\":(e=!0,\"BUBBLING_PHASE\")];if(!e||\"pointerenter\"!==(f=c.type)&&\"pointerleave\"!==f)c.eventPhase=d,g=S.prototype.l.apply(this,arguments),e&&this.N&&null===this.N()&&delete c.eventPhase;return g};function T(a){a=a||{};var b=a.callback;this.b=a.label;r(b)&&(this.callback=b);this.a=!!a.disabled;T.W.constructor.call(this)}ua(T,S);u(\"H.util.ContextItem\",T);T.prototype.o=function(){return this.b};T.prototype.getLabel=T.prototype.o;T.prototype.C=function(a){this.b!==a&&(this.b=a,this.X(\"update\"));return this};T.prototype.setLabel=T.prototype.C;T.prototype.v=function(){return this.a};T.prototype.isDisabled=T.prototype.v;T.prototype.B=function(a){a^this.a&&(this.a=a,this.X(\"update\"));return this};\nT.prototype.setDisabled=T.prototype.B;var Vd=new T;T.SEPARATOR=Vd;function Wd(){if(y.document){var a=document.createElement(\"canvas\");a.width=a.height=1;a.getContext(\"2d\")}}u(\"H.util.eval\",function(a){return eval(a)});u(\"H.util.provide\",function(a){aa(a,void 0)});function Xd(){this.F=0}Xd.prototype.next=function(a){if(4294967295===this.F)throw new id(a,this.F,[0,4294967295]);return this.F++};var Yd=new Xd;Ea(Yd.next,Yd);function Hb(){}var ib=Ha([]);Wd();Wd();var ae={undefined:\"GL\",GL:\"GL\",OL:\"OL\",SL:\"SL\",SB:\"SB\",WE:\"WE\",WG:\"WG\"};u(\"H.geo.AltitudeContext\",ae);function be(a,b,c){var d=kc(+a,-90,90);if(b&&Ra(d))throw new B(b,c,a);return d}function de(a,b,c){var d=+a;if(-180>d||180<d)d=gc(d+180,360)-180;if(b&&Ra(d))throw new B(b,c,a);return d}function ee(a,b,c){var d;if(a!==z&&Ra(d=+a)&&b)throw new B(b,c,a);return d}function fe(a,b,c){var d=!ae[a];if(b&&d)throw new B(b,c,a);return!d}u(\"H.geo.isDBC\",function(a,b){return 0!==(0>a^0>b)&&180<Qb(b-a)});function ge(){var a=ge;if(!0===(Na(this,a)&&this.constructor===a))throw new TypeError(\"Illegal constructor \"+Ta(a));}u(\"H.geo.AbstractGeometry\",ge);ge.prototype.getBounds=ge.prototype.B;ge.prototype.equals=ge.prototype.j;ge.prototype.toString=function(){return this.da([this.ea,\" \"]).join(\"\")};ge.prototype.toString=ge.prototype.toString;function U(a,b,c,d){this.lat=be(a,U,0);this.lng=de(b,U,1);c!==z&&(this.alt=ee(c,U,2));d!==z&&fe(d,U,3)&&(this.ctx=d)}ua(U,ge);u(\"H.geo.Point\",U);U.prototype.j=function(a){return this===a||!!a&&this.lat===a.lat&&this.lng===a.lng&&ae[this.ctx]===ae[a.ctx]&&(this.alt||0)===(a.alt||0)};U.prototype.equals=U.prototype.j;\nU.prototype.a=function(a){var b,c;this===a||this.lat===a.lat&&this.lng===a.lng?a=0:(b=this.lat*dc,c=a.lat*dc,a=1.274200158E7*Ub(Ob(1,mb(nb(Tb((b-c)/2),2)+Vb(b)*Vb(c)*nb(Tb((this.lng*dc-a.lng*dc)/2),2)))));return a};U.prototype.distance=U.prototype.a;\nU.prototype.b=function(a,b,c){var d,e,f,g,h,k;if(c){if(b/=6371000.79){a*=dc;d=dc*this.lat;f=Tb(d);g=Tb(b);h=Vb(b);e=dc*this.lng;var l=Vb(d);d=Ub(l*Vb(a)*g+f*h);a=Yb(Tb(a)*l*g,h-f*Tb(d));l=((e+a+Q)%(2*Q)-Q)*ec}return b?new U(d*ec,(l+540)%360-180):this}a=(a%360+360)%360;if(0===(a+90)%180)return d=this.lng+b/(6371000.79*bc*Vb(this.lat*dc))*(270===a?-360:360),new U(this.lat,(d+540)%360-180);if(b/=6371000.79)a*=dc,e=this.lat*dc,f=this.lng*dc,g=e+b*Vb(a),h=g-e,d=Rb(Wb(g/2+ac)/Wb(e/2+ac)),d=Ra(h/d)?Vb(e):\nh/d,k=b*Tb(a)/d,Qb(g)>$b&&(g=0<g?Q-g:-(Q+g));return b?new U(g*ec,((f+k+cc+(Qb(e+h)>$b?Q:0))%bc-Q)*ec):this};U.prototype.walk=U.prototype.b;U.prototype.B=function(){return new V(this.lat,this.lng,this.lat,this.lng)};U.prototype.getBounds=U.prototype.B;function he(a,b,c){var d=!!a&&!(Ra(a.lat=be(a.lat))||Ra(a.lng=de(a.lng))||a.alt!==z&&Ra(a.alt=ee(a.alt))||a.ctx!==z&&!fe(a.ctx));if(!d&&b)throw new B(b,c,a);return d}U.validate=he;\nfunction ie(a){if(!a)throw new B(ie,0,a);return new U(a.lat,a.lng,a.alt,a.ctx)}U.fromIPoint=ie;U.prototype.ea=\"POINT\";U.prototype.da=function(a){a.push(\"(\",this.lng,\" \",this.lat,\")\");return a};function je(){}je.prototype.U=function(){};u(\"H.geo.IProjection.prototype.latLngToPoint\",je.prototype.U);je.prototype.L=function(){};u(\"H.geo.IProjection.prototype.xyToGeo\",je.prototype.L);je.prototype.b=function(){};u(\"H.geo.IProjection.prototype.pointToGeo\",je.prototype.b);je.prototype.a=function(){};u(\"H.geo.IProjection.prototype.geoToPoint\",je.prototype.a);var W={};u(\"H.geo.mercator\",W);W.c=function(a){return Ob(1,Pb(0,.5-Rb(Wb(ac+$b*a/180))/Q/2))};W.f=function(a){return a/360+.5};W.U=function(a,b,c){c?(c.x=W.f(b),c.y=W.c(a)):c=new J(W.f(b),W.c(a));return c};W.latLngToPoint=W.U;W.a=function(a,b){return W.U(a.lat,a.lng,b)};W.geoToPoint=W.a;W.i=function(a){return 0>=a?90:1<=a?-90:ec*(2*Xb(Sb(Q*(1-2*a)))-$b)};W.g=function(a,b){return b?0>=a?-180:1<=a?180:360*gc(a,1)-180:360*(1===a?1:gc(a,1))-180};\nW.L=function(a,b,c,d){c?(c.lat=W.i(b),c.lng=W.g(a,d)):c=new U(W.i(b),W.g(a,d));return c};W.xyToGeo=W.L;W.b=function(a,b,c){return W.L(a.x,a.y,b,c)};W.pointToGeo=W.b;function X(a,b){this.projection=a||W;this.i=0;this.b=this.exp=Rb(b||256)/Zb;ke(this);this.y=this.x=0}u(\"H.geo.PixelProjection\",X);var le=Qb(28)+Qb(-8);X.prototype.a=function(a){if(Ra(a))throw new B(this.a,0,a);var b=this.x/this.w,c=this.y/this.h;this.i=a;this.b=this.exp+a;ke(this);this.x=b*this.w;this.y=c*this.h};X.prototype.rescale=X.prototype.a;function ke(a){a.b>le&&(a.b=le);a.w=nb(2,a.b);a.h=nb(2,a.b)}X.prototype.g=function(){return this.i||0};X.prototype.getZoomScale=X.prototype.g;\nX.prototype.j=function(a,b){var c=this.projection.U(a.lat,a.lng,b);c.x=c.x*this.w-this.x;c.y=c.y*this.h-this.y;return c};X.prototype.geoToPixel=X.prototype.j;X.prototype.f=function(a,b,c){return this.projection.L((a.x+this.x)/this.w,(a.y+this.y)/this.h,b,c)};X.prototype.pixelToGeo=X.prototype.f;X.prototype.L=function(a,b,c,d){return this.projection.L((a+this.x)/this.w,(b+this.y)/this.h,c,d)};X.prototype.xyToGeo=X.prototype.L;\nX.prototype.c=function(a,b,c){a=this.projection.U(a,b,c);a.x=a.x*this.w-this.x;a.y=a.y*this.h-this.y;return a};X.prototype.latLngToPixel=X.prototype.c;X.prototype.l=function(a){return new J(a.x*this.w-this.x,a.y*this.h-this.y)};X.prototype.pointToPixel=X.prototype.l;u(\"H.util.Disposable\",L);L.prototype.f=L.prototype.f;L.prototype.addOnDisposeCallback=L.prototype.f;u(\"H.util.dispose\",function(a){a&&\"function\"==typeof a.S&&a.S()});function me(a,b,c,d){this.key=\"\";this.x=a;this.y=b;this.a=c;this.Y=d;this.G=Rc()}me.prototype.then=function(a,b,c){return this.G.la.then(a,b,c)};me.prototype.resolve=function(a){this.G.resolve(a)};me.prototype.reject=function(a){this.G.reject(a)};me.prototype.cancel=function(){this.G.la.cancel()};function Z(a,b,c,d,e,f){if(a&&b)this.P(a),this.l(b),this.o(c),this.C(e),this.B(f),this.v(d);else throw Error('Parameters \"scheme\" and \"host\" must be specified');}u(\"H.service.Url\",Z);\nfunction ne(a,b){var c=a,d=y.document,e,f,g,h,k=d&&d.createElement(\"a\"),l=\"\";d?(b&&(f=(e=d.getElementsByTagName(\"base\")[0])&&e.href,g=d.head,h=e||g.appendChild(d.createElement(\"base\")),h.href=b),k.href=c,l=k.href,b&&(e?e.href=f:g.removeChild(h))):/[\\w]+:\\/\\//.test(c)&&(l=c);g=/(?:(\\w+):\\/\\/)?(?:([^:]+):([^@/]*)@)?([^/:]+)?(?:[:]{1}([0-9]+))?(\\/[^?#]*)?(\\?[^#]+)?(#.*)?/.exec(l);c=g[1];k=g[4];d=g[5];h=g[6];e=g[7];f=g[8];!g[2]&&k&&/@/.test(k)&&(k=k.split(\"@\")[1]);g=k;h=h&&0<h.length?h.substr(1):\"\";var k=\n{},n;if(e)for(l=/([?&]?([^=&+]+))(=([^&]+))?/g;n=l.exec(e);)k[decodeURIComponent(n[2])]=n[4]?decodeURIComponent(n[4]):void 0;return new Z(c,g,h,k,isNaN(+d)?void 0:+d,f&&0<f.length?f.substr(1):\"\")}Z.parse=ne;var oe=0;Z.prototype.clone=function(){oe++;var a={},b;for(b in this.a)a[b]=this.a[b];return new Z(this.j,this.g,this.b,a,this.i,this.c)};Z.prototype.clone=Z.prototype.clone;\nZ.prototype.P=function(a){if(!a||\"string\"!==typeof a)throw Error('The \"scheme\" parameter must be a non-empty string.');this.j=a;return this};Z.prototype.setScheme=Z.prototype.P;Z.prototype.oa=function(){return this.j};Z.prototype.getScheme=Z.prototype.oa;Z.prototype.l=function(a){if(!a||\"string\"!==typeof a||\"-\"===a.charAt(0)||\".\"===a.charAt(0)||\".\"===a.charAt(a.length-1))throw Error('The \"host\" parameter is not a valid host name.');this.g=a;return this};Z.prototype.setHost=Z.prototype.l;\nZ.prototype.ba=function(){return this.g};Z.prototype.getHost=Z.prototype.ba;Z.prototype.o=function(a){this.b=a||void 0;return this};Z.prototype.setPath=Z.prototype.o;Z.prototype.ca=function(){return this.b};Z.prototype.getPath=Z.prototype.ca;Z.prototype.v=function(a){if(a)if(\"object\"==typeof a)this.a=a;else throw Error('Parameter \"params\" must be an object.');else this.a={};return this};Z.prototype.setQuery=Z.prototype.v;Z.prototype.pa=function(){return!pe(this)};Z.prototype.hasQuery=Z.prototype.pa;\nZ.prototype.ea=function(){return this.a};Z.prototype.getQuery=Z.prototype.ea;Z.prototype.C=function(a){if(a&&isNaN(parseInt(a,10)))throw Error('Parameter \"port\" must be a number or undefined');this.i=+a||void 0;return this};Z.prototype.setPort=Z.prototype.C;Z.prototype.da=function(){return this.i};Z.prototype.getPort=Z.prototype.da;Z.prototype.B=function(a){this.c=a||void 0;return this};Z.prototype.setAnchor=Z.prototype.B;Z.prototype.aa=function(){return this.c};Z.prototype.getAnchor=Z.prototype.aa;\nZ.prototype.f=function(a){if(\"object\"!==typeof a)throw Error('Parameter \"other\" must be an object.');var b=this.a,c;for(c in a)a.hasOwnProperty(c)&&\"function\"!==typeof a[c]&&(b[c]=a[c]);return this};Z.prototype.mergeQuery=Z.prototype.f;Z.prototype.Z=function(a){if(!a||\"string\"!==typeof a)throw Error('Parameter \"subDomain\" must be a non-empty string');\".\"===a.substr(a.length-1)&&(a=a.substr(0,a.length-1));return this.l(a+\".\"+this.g)};Z.prototype.addSubDomain=Z.prototype.Z;\nZ.prototype.$=function(a){if(!a||\"string\"!==typeof a)throw Error('Parameter \"subPath\" must be a non-empty string');return this.o((this.b?this.b+\"/\":\"\")+a)};Z.prototype.addSubPath=Z.prototype.$;Z.prototype.toString=function(){return[this.j+\"://\",this.g,this.i?\":\"+this.i:\"\",this.b||!pe(this)||this.c?\"/\":\"\",this.b?encodeURI(this.b):\"\",qe(this),this.c?\"#\"+encodeURIComponent(this.c):\"\"].join(\"\")};Z.prototype.toString=Z.prototype.toString;\nfunction qe(a){var b=[],c,d=a.a,e;for(c in d)d.hasOwnProperty(c)&&\"function\"!==typeof d[c]&&(e=a.a[c],b.push(encodeURIComponent(c)+(void 0===e?\"\":\"=\"+encodeURIComponent(e))));return 0<b.length?\"?\"+b.join(\"&\"):\"\"}function pe(a){var b,c=0;for(b in a.a)if(a.a.hasOwnProperty(b)&&\"function\"!==typeof a.a[b]&&(c++,0<c))break;return!c};var re={};function se(a){try{importScripts.apply(self,arguments)}catch(b){this.postError(\"invalid_script\")}}function te(a){re[a]=null;this.postMessage(a)}function ue(a,b,c){var d;if(r(b))d=b;else try{d=self.eval(\"(\"+b+\")\"),r(d)||(d=null)}catch(e){}d?(re[a]=d,c||this.postMessage(a)):this.postError(\"invalid_processor\")}function ve(a){this.b=a&&a[0];this.a=a&&a[1];this.c=a&&a[2]||[]}ve.prototype.postError=function(a){this.postMessage(a,z,0)};\nve.prototype.postMessage=function(a,b,c){self.postMessage({processor:this.b,taskId:this.a,type:c===z?1:c,data:a},b||z)};function we(a,b,c){var d;if(!ha(a))throw new B(we,0,\"InvalidArgument\");if(!r(b))throw new B(we,1,\"InvalidArgument\");d=xe++;ye[d]={b:c||ze,a:b};(new ve([\"3\",d,[]])).postMessage(a,[],2)}var ye={},xe=0;\nfunction Ae(a,b){var c,d,e=a;if(ye[this.a])if(d=ye[this.a],c=d.a,delete ye[this.a],b)c(null,b);else{if(d.b===Be){d=new Uint8Array(a);for(var e=d.byteLength,f=\"\",g=0,h,k,l,n;g<e;)h=d[g++],192>h||(k=d[g++],224>h?h=(h&31)<<6|k&63:(l=d[g++],240>h?h=(h&15)<<12|(k&63)<<6|l&63:(n=d[g++],h=(h&7)<<18|(k&63)<<12|(l&63)<<6|n&63))),65536>h?f+=String.fromCharCode(h):(h-=65536,f+=String.fromCharCode((h>>10)+55296,(h&1023)+56320));e=f}c(e)}}var ze=0,Be=1;function V(a,b,c,d){Ce(this,be(a,V,0),de(b,V,1),be(c,V,2),de(d,V,3))}ua(V,ge);u(\"H.geo.Rect\",V);V.prototype.ea=\"POLYGON\";V.prototype.da=function(a){var b=this.A,c=this.m,d=this.u,e=this.s;a.push(\"(\",c,\" \",b,\",\",e,\" \",b,\",\",e,\" \",d,\",\",c,\" \",d,\",\",c,\" \",b,\")\");return a};V.prototype.j=function(a){return this===a||!!a&&this.A===a.A&&this.m===a.m&&this.u===a.u&&this.s===a.s};V.prototype.equals=V.prototype.j;V.prototype.clone=function(){return new V(this.A,this.m,this.u,this.s)};\nV.prototype.clone=V.prototype.clone;function Ce(a,b,c,d,e){a.m=c;a.s=e;b<d&&(c=b,b=d,d=c);a.A=b;a.u=d;a.C=a.o=a.v=null;return a}V.prototype.$=function(){this.C||(this.C=new U(this.A,this.m));return this.C};V.prototype.getTopLeft=V.prototype.$;V.prototype.Z=function(){this.o||(this.o=new U(this.u,this.s));return this.o};V.prototype.getBottomRight=V.prototype.Z;V.prototype.Ga=function(){return this.A};V.prototype.getTop=V.prototype.Ga;V.prototype.oa=function(){return this.u};V.prototype.getBottom=V.prototype.oa;\nV.prototype.pa=function(){return this.m};V.prototype.getLeft=V.prototype.pa;V.prototype.Fa=function(){return this.s};V.prototype.getRight=V.prototype.Fa;V.prototype.f=function(){this.v||(this.v=new U(this.u+(this.A-this.u)/2,De(this.m,this.a())));return this.v};V.prototype.getCenter=V.prototype.f;V.prototype.a=function(){return Ee(this.m,this.s)};V.prototype.getWidth=V.prototype.a;V.prototype.c=function(){return this.A-this.u};V.prototype.getHeight=V.prototype.c;\nV.prototype.Ha=function(){return this.m>this.s};V.prototype.isCDB=V.prototype.Ha;V.prototype.Ia=function(){return!this.a()&&!this.c()};V.prototype.isEmpty=V.prototype.Ia;V.prototype.B=function(){return new V(this.A,this.m,this.u,this.s)};V.prototype.i=function(a,b,c){var d=this.f();c||(a=be(a,this.i,0),b=de(b,this.i,1));b=this.b(a,b,c);a=b.f();return a.lat===d.lat&&a.lng===d.lng&&this.c()===b.c()&&this.a()===b.a()};V.prototype.containsLatLng=V.prototype.i;\nV.prototype.ha=function(a,b){b||he(a,this.ha,0);return this.i(a.lat,a.lng,b)};V.prototype.containsPoint=V.prototype.ha;V.prototype.P=function(a,b){var c=this.f(),d,e;if(!b&&!Na(a,V))throw new B(this.P,0,a);e=this.l(a,b);d=e.f();return d.lat===c.lat&&d.lng===c.lng&&this.c()===e.c()&&this.a()===e.a()};V.prototype.containsRect=V.prototype.P;\nV.prototype.b=function(a,b,c,d){if(!c){if(Ra(a=be(a)))throw new B(this.b,0,a);if(Ra(b=de(b)))throw new B(this.b,1,b);}return Fe(this.A,this.m,this.u,this.s,a,b,a,b,d)};V.prototype.mergeLatLng=V.prototype.b;V.prototype.ba=function(a,b,c){b||he(a,this.ba,0);return this.b(a.lat,a.lng,b,c)};V.prototype.mergePoint=V.prototype.ba;V.prototype.l=function(a,b,c){if(!b&&!Na(a,V))throw new B(this.l,0,a);return Fe(this.A,this.m,this.u,this.s,a.A,a.m,a.u,a.s,c)};V.prototype.mergeRect=V.prototype.l;\nV.prototype.g=function(a,b,c,d,e,f){e||(a=be(a,this.g,0),b=de(b,this.g,1),c=be(c,this.g,2),d=de(d,this.g,3));return Fe(this.A,this.m,this.u,this.s,a,b,c,d,f)};V.prototype.mergeTopLeftBottomRight=V.prototype.g;V.prototype.aa=function(a,b){if(!b&&!Na(a,V))throw new B(this.aa,0,a);var c=this.m<=this.s,d=a.m<=a.s,e=this.m<a.s,f=a.m<this.s;return this.u<=a.A&&a.u<=this.A&&(!c&&(!d||e||f)||!d&&(e||f)||e&&f)};V.prototype.intersects=V.prototype.aa;function Ee(a,b){var c=b-a;return c+(0>c?360:0)}\nfunction De(a,b){var c=a+b/2;return c-(180<c?360:0)}function Fe(a,b,c,d,e,f,g,h,k){var l,n,p;c=Ob(c,g);a=Pb(a,e);e=Ee(b,d);l=De(b,e);g=Ee(f,h);p=De(f,g)-l;p+=0>p-1E-6?360:0;180>p-1E-6?(l=b,n=h):(p=360-p,l=f,n=d);p=p+e/2+g/2;360<=p+5E-7?(l=-180,n=180):p-5E-7<e?(l=b,n=d):p-5E-7<g&&(l=f,n=h);return k?Ce(k,a,l,c,n):new V(a,l,c,n)}V.merge=Fe;function Ge(a,b,c){c||(he(a,Ge,0),he(b,Ge,1));return new V(a.lat,a.lng,b.lat,b.lng)}V.fromPoints=Ge;\nfunction He(a,b){var c=ga(a);if(\"array\"!=c&&(\"object\"!=c||\"number\"!=typeof a.length))throw new B(He,0,a);var c=1,d=a.length,e,f=null;if(0<d)for(e=a[0],f=Ge(e,e,b);c<d;c++)e=a[c],f.b(e.lat,e.lng,b,f);return f}V.coverPoints=He;function Ie(a,b){if(!(b||a&&null!=a.length))throw new B(Ie,0,a);var c=3,d=a.length,e;if(0<d)for(e=new V(a[0],a[1],a[0],a[1]);c<d;c+=3)e.b(a[c],a[c+1],b,e);return e}V.coverLatLngAlts=Ie;\nfunction Je(a,b){if(b&&(!a||null==a.length))throw new B(Je,0,a);var c=1,d=a.length,e;if(0<d)for(e=new V(a[0].A,a[0].m,a[0].u,a[0].s);c<d;c++)e.l(a[c],b,e);return e}V.coverRects=Je;V.prototype.ca=function(a,b){he(a,this.ca,0);var c=this.m,d=this.A,e=this.s,f=this.u,g=this.f().lng,h=a.lat-f-(d-f)/2,k=a.lng-g,k=180<k||-180>k?-(g+a.lng):k,c=c+(0>k?2*k:0),c=-180>c?360+c:c,e=e+(0<k?2*k:0),e=180<e?e-360:e,d=0<h?d+2*h:d;90<=d&&(d=90);f=0>h?f+2*h:f;-90>=f&&(f=-90);return b?Ce(b,d,c,f,e):new V(d,c,f,e)};\nV.prototype.resizeToCenter=V.prototype.ca;function Ke(a,b,c,d){var e=!!c,f,g,h=0,k=0,l=0,n=0,p=0,w,G,D,I=-1;f=y.Float32Array;var M,x=[];if(b){b=Ka(b);a=Ka(a);e&&(g=Ka(c));c=b.length;d=d?1E-7:1E-5;for(M=new f(3*c);h<c;)f=b[h],G=+f,w=+a[h],e&&(D=+g[h]),Le.test(f)?0<=I&&(0<h-I&&x.push(I,h+1),I=-1):0>I&&(I=h),h++,n=M[k++]=n+w*d,l=M[k++]=l+G*d,e&&(p=M[k]=p+D),k++;0<=I&&1<c-I&&x.push(I,c)}else M=new f(0);return{path:M,outlineIndices:x}}var Le=/^-?0\\d/;\nfunction Me(a,b){for(var c=0,d=a.length/3,e=new y.Array(d),f=0;c<d;)e[c++]=b.c(a[f],a[++f]),f+=2;return e};function Ne(a,b){var c=180/(1<<b),d=a.lat+90,e=(a.lng+180)%360,f=0;180==d&&f--;f+=Math.floor(d/c);c=0+Math.floor(e/c);return[f,c]}var Oe=1/Math.pow(10,10);function Pe(a,b){var c=[],d=a.$(),e=a.Z(),f,g;180==e.lng&&(e.lng-=Oe);d=Ne(d,b);e=Ne(e,b);for(g=d[0];g>=e[0];g--)for(f=d[1];f<=e[1];f++)c.push(g,f);return c};function Qe(a,b){this.b={};this.v=ne(a.serverUrl);this.l=b;this.C=a.layerConfigs||[];this.o=a.projected;this.a=a.tileSize||256;this.B=!1!==a.batchTiles;this.P=a.onlyOutline;this.j=new X(Ja,this.a);this.i=new X(Ja,this.a);this.i.a(22-Math.log(this.a)/Math.LN2+8)}ua(Qe,L);m=Qe.prototype;m.Wa=function(a,b,c){var d,e;d={x:a*this.a,y:b*this.a};e={x:a*this.a+(this.a-1),y:b*this.a+(this.a-1)};this.j.a(c);d=this.j.f(d);e=this.j.f(e);d=new V(d.lat,d.lng,e.lat,e.lng);return Re(this,d,this.C,{x:a,y:b,z:c})};\nm.Va=function(a,b,c,d,e){return Re(this,new V(a,b,c,d),e)};\nfunction Re(a,b,c,d){var e=d||{};c=Se(c);var f=Te(c),g,h=[],k=[],l,n,p={},w,G,D;for(G=0;G<c.length;G++)for(l=c[G].layerId,n=c[G].level,p[l]=c[G].columns,g=Pe(b,n),D=0;D<g.length-1;D+=2)d=[l,g[D+1],g[D],n].join(\"_\"),w=a.b[d]||a.l.get(d),w||(w=new me(g[D+1],g[D],n,l),w.key=d,a.b[d]=w,k.push(w)),h.push(w);k.length&&(a.B?Ue(a,k):Ve(a,k));return Pc(h.map(function(a){return a.then(Ea(this.Oa,this,a.Y,f)).then(Ea(this.Ua,this,a,e)).then(Ea(this.Ya,this,p[a.Y]))},a))}\nm.Oa=function(a,b,c){var d=c.Rows,e=d.length,f,g,h,k;if(e&&(f=b[a])){b=new F(c.Rows);g=[];for(h=0;h<e;h++)k=d[h],f(b.c(h),a)&&g.push(k);a={Rows:g};if(c=c.Meta)a.Meta=c}else a=c;return a};function Ve(a,b){function c(b,c,d){d?(delete a.b[b.key],b.reject(d)):We(a,b,c)}var d,e,f;for(d=0;d<b.length;d++)f=b[d],e=a.v.clone().f({tilex:f.x}).f({tiley:f.y}).f({level:f.a}).f({layer:f.Y}),new we(e.toString(),Ea(c,null,f),Be)}function Ue(a,b){var c=b.length,d,e;for(d=0;d<c;d+=15)e=b.slice(d,d+15),Xe(a,e)}\nfunction Xe(a,b){var c=a.v.clone(),d=[],e=[],f=[],g=c.a;b.length&&(b.forEach(function(a){d.push(a.x,a.y);e.push(a.a);f.push(a.Y)}),g.tilexy=d.join(\",\"),g.layers=f.join(\",\"),g.levels=e.join(\",\"),c.v(g),new we(c.toString(),function(c,d){d?b.forEach(function(b){delete a.b[b.key];b.reject(\"error\")}):We(a,b,c)},Be))}\nfunction We(a,b,c){var d,e,f,g;if(Pa(b,void 0,void 0,void 0))for(e=c.indexOf(\"[\")+1,g=0;g<b.length;g++)f=c.indexOf(\"]},{\",e+3)+2,f<e&&(f=c.lastIndexOf(\"]}\")),d=c.substr(e,f-e),e=f+1,Ye(a,b[g],d);else Ye(a,b,c)}function Ye(a,b,c){var d=0;try{d=c.length,delete a.b[b.key],a.l.add(b.key,b,2*d),b.resolve(JSON.parse(c))}catch(e){b.reject(e.message)}}function Te(a){var b={},c,d,e;for(e=0;e<a.length;e++)c=a[e],c.rowFilter&&(d=c.layerId,d=d!==z?d:c.layer,b[d]=Ea(c.rowFilter,c.rowFilterContext));return b}\nm.Ua=function(a,b,c){var d,e,f,g=!1,h,k,l=[],n=[],p=[];a=/^ADAS/.test(a.Y);for(var w=this.P,G=a?\"HPY\":\"LAT\",D=a?\"HPX\":\"LON\",I=a?\"HPZ\":\"ZLEVEL\",M,x,na,ya=0,Zd=c.Rows,ja,oa,gf=Zd.length,$d=this.i;ya<gf;ya++){x=Zd[ya];if(x[G]&&x[D]&&(f=Ke(x[G],x[D],x[I],a),x.geometry=f,delete x[G],delete x[D],delete x[I],x.INNER_LON)){x.INNER_LAT=x.INNER_LAT.split(\";\");x.INNER_LON=x.INNER_LON.split(\";\");M=[];na=x.INNER_LON.length;for(f=0;f<na;f++)M.push(Ke(x.INNER_LAT[f],x.INNER_LON[f],\"\",a));x.interiors=M;delete x.INNER_LAT;\ndelete x.INNER_LON}if(this.o){ja=x.$$projected$$;if(!ja){f=x.geometry;na=(M=x.interiors)?M.length:0;h=Me(f.path,$d);oa=[h];x.$$projected$$=ja={Ta:oa};oa.length+=na;g|=Ze(oa,h,f.outlineIndices);if(na)for(ja.Qa=1,f=0;f<na;f++)x=M[f],h=Me(x.path,$d),oa[1+f]=h,g|=Ze(oa,h,x.outlineIndices);g&&(ja.va=1+na)}if(ja){h=[];oa=ja.Ta;M=na=x=oa.length;for(f=w?ja.va:0;f<x;f++){k=oa[f];var ba=f>=ja.va,ca=void 0,da=void 0,A=void 0,t=void 0,K=e=d=e=void 0,K=void 0,La=[],t=K=A=void 0,K=[],A=void 0,t=0,pa=this.i.g()-\nb.z,ca=(b.x<<pa)*this.a,da=(b.y<<pa)*this.a,K=50<<pa;e=this.a<<pa;if(1===k.length)K=[ca,da,ca+e,da,ca+e,da+e,ca,da+e],nc(k[0].x,k[0].y,K)&&(K=new Int32Array(2),K[0]=k[0].x-ca>>pa,K[1]=k[0].y-da>>pa,La.push(K));else if(A=da-K,t=ca+e+K,e=da+e+K,d=ca-K,K=[new J(d,A),new J(t,A),new J(t,e),new J(d,e),new J(d,A)],ba)for(K=pb([k],d,A,t,e,!1),A=K.length,t=0;t<A;t+=1)La.push($e(K[t],2*K[t].length,ca,da,pa,!0));else if(af(K,k))La.push($e(K,2*K.length,ca,da,pa,!0));else{var A=k,ba=zb(K),A=zb(A),O=void 0,Y=void 0,\nra=void 0,za=void 0,hc=void 0,ic=void 0,ce=ra=t=void 0;d=t=void 0;t={};e=d=1;var ab=0,ab=~~(1*ab);switch(ab){case 1:e=d=0;break;case 2:d=0;e=1;break;case 3:d=1,e=0}var ab=e,jc=za=void 0,ra=O=e=void 0;if(A&&ba){A.ia=rb(A.x,A.y,null,tb(A));ba.ia=rb(ba.x,ba.y,null,tb(ba));for(O=A;O.next;O=O.next)if(!O.I)for(Y=ba;Y.next;Y=Y.next)!Y.I&&(za=sb(O.next),jc=sb(Y.next),ra=wb(O,za,Y,jc,t))&&(ra=t.Ja,ce=t.xa,hc=t.Za,ic=t.$a,ra=rb(hc,ic,null,null,null,null,1,0,0,ra),yb(ra,O,za),za=rb(hc,ic,null,null,null,null,\n1,0,0,ce),yb(za,Y,jc),ra.ua=za,za.ua=ra);t=xb(A,ba);d&&(t=1-t);for(O=A;O;O=O.next)O.I&&(O.ra=t,t=1-t);t=xb(ba,A);ab&&(t=1-t);for(Y=ba;Y.next;Y=Y.next)Y.I&&(Y.ra=t,t=1-t);vb(A);for(vb(ba);(t=ub(A))!=A;){for(O=null;!t.na;t=t.ua){for(d=t.ra;;){O=rb(t.x,t.y,O);t.na=1;t=d?t.next:t.D;if(!t)break;if(t.I){t.na=1;break}}if(!t)break}O.Da=e;e=O}A=e}else A=void 0;t=2*k.length;if(!A&&af(k,K))La.push($e(k,t,ca,da,pa,!0));else for(;A;)La.push($e(A,t,ca,da,pa)),A=A.Da}k=La;if(f===ja.Qa){if(!h.length)break;M=h.length}f===\nja.va&&(na=h.length);k.length&&h.push.apply(h,k)}h.length&&(l[ya]=h,w?n[ya]=p[ya]=fc:(n[ya]=M,p[ya]=na))}}}return{Xa:c,La:l,Ra:n,Sa:p}};function Ze(a,b,c){for(var d=c.length,e=0,f,g,h=b.length;e<d;)f=c[e++],g=c[e++],a.push(g-f===h?b:b.slice(f,g));return 0<c.length}function af(a,b){for(var c=!1,d=[],e=0,f=b.length;e<f;e++)d.push(b[e].x,b[e].y);nc(a[0].x,a[0].y,d)&&(pb([b],a[0].x,a[0].y,a[2].x,a[2].y,!0).length||(c=!0));return c}\nfunction $e(a,b,c,d,e,f){var g=0,h=0,k=a,l=!!f,n=new Int32Array(b);for(l&&(a=k[0]);a;)n[g]=a.x-c>>e,g+=1,n[g]=a.y-d>>e,g+=1,g===b&&(f=new Int32Array(2*b),f.set(n),n=f),h+=1,a=l?k[h]:a.next;f=new Int32Array(g);f.set(Array.prototype.slice.apply(n,[0,g]));return f}\nm.Ya=function(a,b){for(var c=b.Xa,d=b.La,e=b.Ra,f=b.Sa,g=[],h,k={Rows:g},l,n=a?a.length:0,p=0,w,G=c.Rows,D=G.length,I;p<D;p+=1)if(d[p]||!this.o){h={};w=G[p];if(n)for(l=0;l<n;l+=1)w.hasOwnProperty(a[l])&&(h[a[l]]=w[a[l]]);else for(I in w)\"$$projected$$\"!==I&&(h[I]=w[I]);d[p]&&(h.$HProjGeometry={paths:d[p],interiorsIndex:e[p],outlinesIndex:f[p]});w.geometry&&(h.geometry=w.geometry);g.push(h)}c.Meta&&(k.Meta=c.Meta);return k};\nm.ja=function(){for(var a in this.b)this.b.hasOwnProperty(a)&&(this.b[a].reject(\"disposed\"),delete this.b[a])};function Se(a){var b=[],c,d;for(d=0;d<a.length;d++){c=Ia(a[d]);if(c.rowFilter&&(c.rowFilter=eval(\"(\"+c.rowFilter+\")\"),!r(c.rowFilter)))throw Error(\"Invalid row filter for layer \"+c.layerId);b.push(c)}return b};u(\"H.service.extension.worker.processor\",function(a,b,c){function d(a){e.postMessage(a)}var e=this,f=bf[a],g;g=function(a){e.postError(a.toString())};if(0===b)f||(bf[a]=new Qe(c,cf)),this.postMessage();else if(f)switch(b){case 1:try{f.Wa.apply(f,c).then(d,g)}catch(h){this.postError(h.message)}break;case 2:try{f.Va.apply(f,c).then(d,g)}catch(k){this.postError(k.message)}break;case 3:f.S();delete bf[a];Oa(bf)&&cf.i();break;default:e.postError(\"Unsupported command\")}else e.postError(\"TileProvider is not initialized\")});\nvar cf=new C(26214400),bf=Object.create(Ja,void 0);function df(a,b,c){var d=a[b];a=a[b+1];this.Ba=[];this.wa=0;this.a=[a-c,d-c,a+c,d+c]}df.prototype.ha=function(a,b){var c=a[b],d=a[b+1],e=this.a;return e[1]<=c&&c<=e[3]&&e[0]<=d&&d<=e[2]};var ef=new J(0,0);function ff(a,b,c,d,e){d[e]=b;d[e+1]=a}var hf=new X;function jf(a,b,c,d,e){hf.c(a,b,ef);d[e]=ef.x;d[e+1]=ef.y}\nu(\"H.clustering.dynamicgrid.worker\",function(a,b,c,d,e){var f=e?ff:jf,g=0;e=!!self.ArrayBuffer;var h=a.byteLength?new Float64Array(a):a,k=h.length/3,l,n;a=[];var p,w=[],G=[],D=e?new Float64Array(2*k):[],k=0,I,M=0;for(hf.a(d);g<h.length;){I=h[g++];n=h[g++];l=h[g++];f(l,n,d,D,M);for(l=a.length;l--;)if(n=a[l],n.ha(D,M)){p=n;break}p||(p=new df(D,M,b),a.push(p));l=M/2;p.wa+=I||1;p.Ba.push(l);p=null;M+=2}for(l=a.length;l--;)n=a[l],b=n.wa>=c,f=n.Ba,d=f.length,b?(w.push(d),w=w.concat(f)):(k+=d,G=G.concat(f));\nc=[k].concat(G).concat(w);c=e?(new Uint32Array(c)).buffer:c;this.postMessage(c,[c])});self.addEventListener(\"message\",function(a){a=new ve(a.data);var b=re[a.b];if(b)try{b.apply(a,a.c)}catch(c){a.postError(c.message)}else a.postError(\"processor_not_found\")});(function(){var a,b;a=new ve;b=function(b,d){ue.apply(a,[b,d,!0])};b(\"0\",se);b(\"1\",ue);b(\"2\",te);b(\"3\",Ae)})();\n";