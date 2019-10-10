(function(window, document, location) {
    var p;

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

    function u(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function w(a) {
        if (!(a instanceof Array)) {
            a = u(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var ba = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
    else {
        var da;
        a: {
            var ea = {
                    a: !0
                },
                fa = {};
            try {
                fa.__proto__ = ea;
                da = fa.a;
                break a
            } catch (a) {}
            da = !1
        }
        ca = da ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = ca;

    function ka(a, b) {
        a.prototype = ba(b.prototype);
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

    function oa() {
        oa = function() {};
        ma.Symbol || (ma.Symbol = pa)
    }

    function qa(a, b) {
        this.j = a;
        la(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
    qa.prototype.toString = function() {
        return this.j
    };
    var pa = function() {
        function a(c) {
            if (this instanceof a) throw new TypeError("Symbol is not a constructor");
            return new qa("jscomp_symbol_" + (c || "") + "_" + b++, c)
        }
        var b = 0;
        return a
    }();

    function ra() {
        oa();
        var a = ma.Symbol.iterator;
        a || (a = ma.Symbol.iterator = ma.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && la(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return sa(aa(this))
            }
        });
        ra = function() {}
    }

    function sa(a) {
        ra();
        a = {
            next: a
        };
        a[ma.Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function ta() {
        this.o = !1;
        this.l = null;
        this.B = void 0;
        this.j = 1;
        this.D = this.v = 0;
        this.m = null
    }

    function ua(a) {
        if (a.o) throw new TypeError("Generator is already running");
        a.o = !0
    }
    ta.prototype.C = function(a) {
        this.B = a
    };

    function va(a, b) {
        a.m = {
            exception: b,
            bd: !0
        };
        a.j = a.v || a.D
    }
    ta.prototype.return = function(a) {
        this.m = {
            return: a
        };
        this.j = this.D
    };

    function xa(a) {
        this.j = new ta;
        this.l = a
    }

    function ya(a, b) {
        ua(a.j);
        var c = a.j.l;
        if (c) return Ba(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return Ca(a)
    }

    function Ba(a, b, c, d) {
        try {
            var e = b.call(a.j.l, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.o = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.l = null, va(a.j, g), Ca(a)
        }
        a.j.l = null;
        d.call(a.j, f);
        return Ca(a)
    }

    function Ca(a) {
        for (; a.j.j;) try {
            var b = a.l(a.j);
            if (b) return a.j.o = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.B = void 0, va(a.j, c)
        }
        a.j.o = !1;
        if (a.j.m) {
            b = a.j.m;
            a.j.m = null;
            if (b.bd) throw b.exception;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function Da(a) {
        this.next = function(b) {
            ua(a.j);
            a.j.l ? b = Ba(a, a.j.l.next, b, a.j.C) : (a.j.C(b), b = Ca(a));
            return b
        };
        this.throw = function(b) {
            ua(a.j);
            a.j.l ? b = Ba(a, a.j.l["throw"], b, a.j.C) : (va(a.j, b), b = Ca(a));
            return b
        };
        this.return = function(b) {
            return ya(a, b)
        };
        ra();
        this[Symbol.iterator] = function() {
            return this
        }
    }

    function Fa(a, b) {
        b = new Da(new xa(b));
        ja && ja(b, a.prototype);
        return b
    }

    function Ga(a, b) {
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
    Ga("String.prototype.endsWith", function(a) {
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
    Ga("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    Ga("Promise", function(a) {
        function b(g) {
            this.l = 0;
            this.m = void 0;
            this.j = [];
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.j = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.l = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.m(function() {
                    h.v()
                })
            }
            this.j.push(g)
        };
        var e = ma.setTimeout;
        c.prototype.m = function(g) {
            e(g, 0)
        };
        c.prototype.v = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.o(l)
                    }
                }
            }
            this.j = null
        };
        c.prototype.o = function(g) {
            this.m(function() {
                throw g;
            })
        };
        b.prototype.o = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.F),
                reject: g(this.v)
            }
        };
        b.prototype.F = function(g) {
            if (g === this) this.v(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.H(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.G(g) : this.B(g)
            }
        };
        b.prototype.G = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.v(k);
                return
            }
            "function" == typeof h ? this.I(h, g) : this.B(g)
        };
        b.prototype.v = function(g) {
            this.C(2, g)
        };
        b.prototype.B = function(g) {
            this.C(1, g)
        };
        b.prototype.C = function(g, h) {
            if (0 != this.l) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.l);
            this.l = g;
            this.m = h;
            this.D()
        };
        b.prototype.D = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.l(this.j[g]);
                this.j = null
            }
        };
        var f = new c;
        b.prototype.H = function(g) {
            var h = this.o();
            g.Ma(h.resolve, h.reject)
        };
        b.prototype.I = function(g, h) {
            var k = this.o();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(q, t) {
                return "function" == typeof q ? function(v) {
                    try {
                        l(q(v))
                    } catch (z) {
                        m(z)
                    }
                } : t
            }
            var l, m, n = new b(function(q, t) {
                l = q;
                m = t
            });
            this.Ma(k(g, l), k(h, m));
            return n
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.Ma = function(g, h) {
            function k() {
                switch (l.l) {
                    case 1:
                        g(l.m);
                        break;
                    case 2:
                        h(l.m);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.l);
                }
            }
            var l = this;
            null == this.j ? f.l(k) : this.j.push(k)
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = u(g), m = l.next(); !m.done; m = l.next()) d(m.value).Ma(h, k)
            })
        };
        b.all = function(g) {
            var h = u(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function n(v) {
                    return function(z) {
                        q[v] = z;
                        t--;
                        0 == t && l(q)
                    }
                }
                var q = [],
                    t = 0;
                do q.push(void 0), t++, d(k.value).Ma(n(q.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return b
    });

    function Ha(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var Ja = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Ha(d, e) && (a[e] = d[e])
        }
        return a
    };
    Ga("Object.assign", function(a) {
        return a || Ja
    });

    function Ka(a, b) {
        ra();
        a instanceof String && (a += "");
        var c = 0,
            d = {
                next: function() {
                    if (c < a.length) {
                        var e = c++;
                        return {
                            value: b(e, a[e]),
                            done: !1
                        }
                    }
                    d.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    };
                    return d.next()
                }
            };
        d[Symbol.iterator] = function() {
            return d
        };
        return d
    }
    Ga("WeakMap", function(a) {
        function b(k) {
            this.j = (h += Math.random() + 1).toString();
            if (k) {
                k = u(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }

        function c() {}

        function d(k) {
            var l = typeof k;
            return "object" === l && null !== k || "function" === l
        }

        function e(k) {
            if (!Ha(k, g)) {
                var l = new c;
                la(k, g, {
                    value: l
                })
            }
        }

        function f(k) {
            var l = Object[k];
            l && (Object[k] = function(m) {
                if (m instanceof c) return m;
                e(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (2 != m.get(k) || 3 != m.get(l)) return !1;
                    m.delete(k);
                    m.set(l, 4);
                    return !m.has(k) && 4 == m.get(l)
                } catch (n) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(k, l) {
            if (!d(k)) throw Error("Invalid WeakMap key");
            e(k);
            if (!Ha(k, g)) throw Error("WeakMap key fail: " + k);
            k[g][this.j] = l;
            return this
        };
        b.prototype.get = function(k) {
            return d(k) && Ha(k, g) ? k[g][this.j] : void 0
        };
        b.prototype.has = function(k) {
            return d(k) && Ha(k, g) && Ha(k[g], this.j)
        };
        b.prototype.delete = function(k) {
            return d(k) && Ha(k, g) && Ha(k[g], this.j) ? delete k[g][this.j] : !1
        };
        return b
    });
    Ga("Map", function(a) {
        function b() {
            var h = {};
            return h.Z = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.j;
            return sa(function() {
                if (l) {
                    for (; l.head != h.j;) l = l.Z;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.l[l];
            if (m && Ha(h.l, l))
                for (h = 0; h < m.length; h++) {
                    var n = m[h];
                    if (k !== k && n.key !== n.key || k === n.key) return {
                        id: l,
                        list: m,
                        index: h,
                        J: n
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                J: void 0
            }
        }

        function e(h) {
            this.l = {};
            this.j = b();
            this.size = 0;
            if (h) {
                h = u(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        ra();
        var f = new WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.l[l.id] = []);
            l.J ? l.J.value = k : (l.J = {
                next: this.j,
                Z: this.j.Z,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.J), this.j.Z.next = l.J, this.j.Z = l.J, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.J && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.l[h.id], h.J.Z.next = h.J.next, h.J.next.Z = h.J.Z, h.J.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.l = {};
            this.j = this.j.Z = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).J
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).J) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });
    Ga("Set", function(a) {
        function b(c) {
            this.j = new Map;
            if (c) {
                c = u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        ra();
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return this.j.entries()
        };
        b.prototype.values = function() {
            return this.j.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    Ga("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    Ga("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    Ga("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    Ga("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    Ga("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ka(this, function(b, c) {
                return [b, c]
            })
        }
    });
    var x = this || self;

    function y(a) {
        return void 0 !== a
    }

    function La(a) {
        return "string" == typeof a
    }

    function Ma(a) {
        return "number" == typeof a
    }

    function Na(a, b, c) {
        a = a.split(".");
        c = c || x;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Oa() {
        if (null === Pa) a: {
            var a = x.document;
            if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Qa.test(a)) {
                Pa = a;
                break a
            }
            Pa = ""
        }
        return Pa
    }
    var Qa = /^[\w+/_-]+[=]{0,2}$/,
        Pa = null;

    function Ra() {}

    function Sa(a) {
        a.kb = void 0;
        a.U = function() {
            return a.kb ? a.kb : a.kb = new a
        }
    }

    function Ta(a) {
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

    function Ua(a) {
        return null === a
    }

    function Va(a) {
        return null != a
    }

    function A(a) {
        return "array" == Ta(a)
    }

    function Wa(a) {
        var b = Ta(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Xa(a) {
        return "function" == Ta(a)
    }

    function B(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Ya(a) {
        return a[Za] || (a[Za] = ++$a)
    }
    var Za = "closure_uid_" + (1E9 * Math.random() >>> 0),
        $a = 0;

    function ab(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function bb(a, b, c) {
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

    function cb(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? cb = ab : cb = bb;
        return cb.apply(null, arguments)
    }

    function fb(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function C() {
        return +new Date
    }

    function D(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };

    function gb(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, gb);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    D(gb, Error);
    gb.prototype.name = "CustomError";
    var hb;

    function ib(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        gb.call(this, c + a[d])
    }
    D(ib, gb);
    ib.prototype.name = "AssertionError";

    function jb(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function kb(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function lb(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function mb(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function nb(a, b) {
        var c = 0;
        kb(a, function(d, e) {
            c = b.call(void 0, c, d, e, a)
        });
        return c
    }

    function ob(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function pb(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    }

    function qb(a, b) {
        return 0 <= jb(a, b)
    }

    function sb(a, b) {
        b = jb(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function tb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function ub(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function vb(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (Wa(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function wb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function xb(a) {
        for (var b = {}, c = 0, d = 0; d < a.length;) {
            var e = a[d++];
            var f = e;
            f = B(f) ? "o" + Ya(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
        }
        a.length = c
    }

    function yb(a, b) {
        a.sort(b || zb)
    }

    function zb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Ab() {
        for (var a = Bb().length, b = [], c = 0; c < a; c++) b[c] = 0;
        return b
    }

    function Cb(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (A(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = Cb.apply(null, wb(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    }

    function Db(a, b) {
        b = b || Math.random;
        for (var c = a.length - 1; 0 < c; c--) {
            var d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Eb() {
        return !1
    }

    function Fb() {
        return !0
    }

    function Ib(a) {
        var b = arguments,
            c = b.length;
        return function() {
            for (var d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function Jb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Kb(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Lb(a, b) {
        var c = 0;
        return function(d) {
            x.clearTimeout(c);
            var e = arguments;
            c = x.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Mb(a, b) {
        function c() {
            e = x.setTimeout(d, 100);
            a.apply(b, g)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        var e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };

    function Nb(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function Ob(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Pb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Qb(a, b) {
        return null !== a && b in a
    }

    function Rb(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    }

    function Sb(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var Tb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ub(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Tb.length; f++) c = Tb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Vb = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function Wb(a, b) {
        this.j = a === Xb && b || "";
        this.l = Yb
    }
    Wb.prototype.V = !0;
    Wb.prototype.M = function() {
        return this.j
    };

    function Zb(a) {
        return a instanceof Wb && a.constructor === Wb && a.l === Yb ? a.j : "type_error:Const"
    }
    var Yb = {},
        Xb = {},
        $b = new Wb(Xb, "");

    function ac(a, b, c) {
        this.m = a === bc && b || "";
        this.l = a === bc && c || null;
        this.o = cc
    }
    ac.prototype.V = !0;
    ac.prototype.M = function() {
        return this.m.toString()
    };
    ac.prototype.jb = !0;
    ac.prototype.j = function() {
        return 1
    };

    function dc(a) {
        if (a instanceof ac && a.constructor === ac && a.o === cc) return a.m;
        Ta(a);
        return "type_error:TrustedResourceUrl"
    }

    function ec(a) {
        var b = Zb(new Wb(Xb, "//tpc.googlesyndication.com/sodar/%{basename}.js"));
        if (!fc.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
        var c = b.replace(gc, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(a, e)) throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
            d = a[e];
            return d instanceof Wb ? Zb(d) : encodeURIComponent(String(d))
        });
        return hc(c)
    }
    var gc = /%{(\w+)}/g,
        fc = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        ic = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        cc = {};

    function hc(a) {
        return new ac(bc, a, null)
    }

    function jc(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
            var e = c[d];
            e = A(e) ? e : [e];
            for (var f = 0; f < e.length; f++) {
                var g = e[f];
                null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
            }
        }
        return b
    }
    var bc = {};

    function kc(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function lc(a, b) {
        if (b) a = a.replace(mc, "&amp;").replace(nc, "&lt;").replace(oc, "&gt;").replace(pc, "&quot;").replace(qc, "&#39;").replace(rc, "&#0;");
        else {
            if (!sc.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(mc, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(nc, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(oc, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(pc, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(qc, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(rc, "&#0;"))
        }
        return a
    }
    var mc = /&/g,
        nc = /</g,
        oc = />/g,
        pc = /"/g,
        qc = /'/g,
        rc = /\x00/g,
        sc = /[\x00&<>"']/;

    function tc(a, b) {
        var c = 0;
        a = kc(String(a)).split(".");
        b = kc(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = uc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || uc(0 == f[2].length, 0 == g[2].length) || uc(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function uc(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function E(a, b) {
        this.l = a === vc && b || "";
        this.m = Ac
    }
    E.prototype.V = !0;
    E.prototype.M = function() {
        return this.l.toString()
    };
    E.prototype.jb = !0;
    E.prototype.j = function() {
        return 1
    };

    function Bc(a) {
        if (a instanceof E && a.constructor === E && a.m === Ac) return a.l;
        Ta(a);
        return "type_error:SafeUrl"
    }
    var Cc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,
        Dc = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,
        Ec = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Fc(a) {
        if (a instanceof E) return a;
        a = "object" == typeof a && a.V ? a.M() : String(a);
        Ec.test(a) || (a = "about:invalid#zClosurez");
        return new E(vc, a)
    }

    function Gc(a, b) {
        if (a instanceof E) return a;
        a = "object" == typeof a && a.V ? a.M() : String(a);
        if (b && /^data:/i.test(a)) {
            b = a.replace(/(%0A|%0D)/g, "");
            var c = b.match(Dc);
            c = c && Cc.test(c[1]);
            b = new E(vc, c ? b : "about:invalid#zClosurez");
            if (b.M() == a) return b
        }
        Ec.test(a) || (a = "about:invalid#zClosurez");
        return new E(vc, a)
    }
    var Ac = {},
        vc = {};

    function Hc() {
        this.j = "";
        this.l = Ic
    }
    Hc.prototype.V = !0;
    var Ic = {};
    Hc.prototype.M = function() {
        return this.j
    };

    function Jc(a) {
        if (a instanceof Hc && a.constructor === Hc && a.l === Ic) return a.j;
        Ta(a);
        return "type_error:SafeStyle"
    }

    function Kc(a) {
        var b = new Hc;
        b.j = a;
        return b
    }
    var Lc = Kc("");

    function Mc(a) {
        var b = "",
            c;
        for (c in a) {
            if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
            var d = a[c];
            null != d && (d = A(d) ? mb(d, Nc).join(" ") : Nc(d), b += c + ":" + d + ";")
        }
        return b ? Kc(b) : Lc
    }

    function Nc(a) {
        if (a instanceof E) return 'url("' + Bc(a).toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof Wb) a = Zb(a);
        else {
            a = String(a);
            var b = a.replace(Oc, "$1").replace(Oc, "$1").replace(Pc, "url");
            if (Qc.test(b)) {
                if (b = !Rc.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Sc(a)
                }
                a = b ? Tc(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new ib("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Sc(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var Qc = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        Pc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        Oc = /\b(calc|cubic-bezier|fit-content|hsl|hsla|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        Rc = /\/\*/;

    function Tc(a) {
        return a.replace(Pc, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = Fc(d).M();
            return c + f + b + f + e
        })
    };

    function Uc() {
        this.j = "";
        this.l = Vc
    }
    Uc.prototype.V = !0;
    var Vc = {};

    function F(a, b) {
        if (-1 != a.indexOf("<")) throw Error("Selector does not allow '<', got: " + a);
        var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
        a: {
            for (var d = {
                    "(": ")",
                    "[": "]"
                }, e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                if (d[g]) e.push(d[g]);
                else if (Rb(d, g) && e.pop() != g) {
                    c = !1;
                    break a
                }
            }
            c = 0 == e.length
        }
        if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
        b instanceof Hc || (b = Mc(b));
        a = a + "{" + Jc(b).replace(/</g, "\\3C ") + "}";
        return Wc(a)
    }

    function Xc(a) {
        function b(d) {
            A(d) ? kb(d, b) : c += Yc(d)
        }
        var c = "";
        kb(arguments, b);
        return Wc(c)
    }
    Uc.prototype.M = function() {
        return this.j
    };

    function Yc(a) {
        if (a instanceof Uc && a.constructor === Uc && a.l === Vc) return a.j;
        Ta(a);
        return "type_error:SafeStyleSheet"
    }

    function Wc(a) {
        var b = new Uc;
        b.j = a;
        return b
    }
    Wc("");
    var Zc;
    a: {
        var $c = x.navigator;
        if ($c) {
            var ad = $c.userAgent;
            if (ad) {
                Zc = ad;
                break a
            }
        }
        Zc = ""
    }

    function G(a) {
        return -1 != Zc.indexOf(a)
    }

    function bd(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function cd() {
        return G("Opera")
    }

    function dd() {
        return G("Trident") || G("MSIE")
    }

    function ed() {
        return G("Safari") && !(kd() || G("Coast") || cd() || G("Edge") || G("Edg/") || G("OPR") || G("Firefox") || G("FxiOS") || G("Silk") || G("Android"))
    }

    function kd() {
        return (G("Chrome") || G("CriOS")) && !G("Edge")
    }

    function ld() {
        function a(e) {
            var f = pb(e, d);
            return c[0 > f ? null : "string" === typeof e ? e.charAt(f) : e[f]] || ""
        }
        var b = Zc;
        if (dd()) return md(b);
        b = bd(b);
        var c = {};
        kb(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = fb(Qb, c);
        return cd() ? a(["Version", "Opera"]) : G("Edge") ? a(["Edge"]) : G("Edg/") ? a(["Edg"]) : kd() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
    }

    function nd(a) {
        return 0 <= tc(ld(), a)
    }

    function md(a) {
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

    function od() {
        this.l = "";
        this.o = pd;
        this.m = null
    }
    od.prototype.jb = !0;
    od.prototype.j = function() {
        return this.m
    };
    od.prototype.V = !0;
    od.prototype.M = function() {
        return this.l.toString()
    };

    function qd(a) {
        if (a instanceof od && a.constructor === od && a.o === pd) return a.l;
        Ta(a);
        return "type_error:SafeHtml"
    }

    function rd(a) {
        if (a instanceof od) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.jb && (c = a.j());
        return sd(lc(b && a.V ? a.M() : String(a)), c)
    }
    var td = /^[a-zA-Z0-9-]+$/,
        ud = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        vd = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };

    function wd(a) {
        function b(f) {
            A(f) ? kb(f, b) : (f = rd(f), e.push(qd(f).toString()), f = f.j(), 0 == d ? d = f : 0 != f && d != f && (d = null))
        }
        var c = rd(xd),
            d = c.j(),
            e = [];
        kb(a, b);
        return sd(e.join(qd(c).toString()), d)
    }

    function yd(a) {
        return wd(Array.prototype.slice.call(arguments))
    }
    var pd = {};

    function sd(a, b) {
        return zd(a, b)
    }

    function zd(a, b) {
        var c = new od;
        c.l = a;
        c.m = b;
        return c
    }
    zd("<!DOCTYPE html>", 0);
    var xd = zd("", 0);
    zd("<br>", 0);
    var Ad = Kb(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = qd(xd);
        return !b.parentElement
    });

    function Bd(a, b) {
        if (Ad())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = qd(b)
    }

    function Cd(a) {
        var b = hc(Zb($b));
        a.src = b.l ? b.l : dc(b).toString()
    }

    function Dd(a, b, c) {
        a.rel = c;
        a.href = -1 != c.toLowerCase().indexOf("stylesheet") ? b.l ? b.l : dc(b).toString() : b instanceof ac ? b.l ? b.l : dc(b).toString() : b instanceof E ? Bc(b) : Bc(Gc(b))
    }

    function Ed(a, b) {
        a.src = dc(b);
        (b = Oa()) && a.setAttribute("nonce", b)
    };

    function Fd(a) {
        return a = lc(a, void 0)
    }

    function Gd(a, b) {
        var c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var d = b ? b.createElement("div") : x.document.createElement("div");
        return a.replace(Hd, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = zd(e + " ", null), Bd(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Hd = /&([^;\s<&]+);?/g,
        Id = {
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
        Jd = {
            "'": "\\'"
        };

    function Kd(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Ld(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Md(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Nd(a) {
        Nd[" "](a);
        return a
    }
    Nd[" "] = Ra;

    function Od(a, b) {
        try {
            return Nd(a[b]), !0
        } catch (c) {}
        return !1
    }

    function Pd(a, b) {
        var c = Qd;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Rd = cd(),
        H = dd(),
        Sd = G("Edge"),
        Td = G("Gecko") && !(-1 != Zc.toLowerCase().indexOf("webkit") && !G("Edge")) && !(G("Trident") || G("MSIE")) && !G("Edge"),
        Ud = -1 != Zc.toLowerCase().indexOf("webkit") && !G("Edge");

    function Vd() {
        var a = x.document;
        return a ? a.documentMode : void 0
    }
    var Wd;
    a: {
        var Xd = "",
            Yd = function() {
                var a = Zc;
                if (Td) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Sd) return /Edge\/([\d\.]+)/.exec(a);
                if (H) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Ud) return /WebKit\/(\S+)/.exec(a);
                if (Rd) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Yd && (Xd = Yd ? Yd[1] : "");
        if (H) {
            var Zd = Vd();
            if (null != Zd && Zd > parseFloat(Xd)) {
                Wd = String(Zd);
                break a
            }
        }
        Wd = Xd
    }
    var $d = Wd,
        Qd = {};

    function ae(a) {
        return Pd(a, function() {
            return 0 <= tc($d, a)
        })
    }
    var be;
    be = x.document && H ? Vd() : void 0;
    var ce = {},
        de = null;

    function I() {}
    var ee = "function" == typeof Uint8Array;

    function J(a, b, c, d) {
        a.j = null;
        b || (b = []);
        a.H = void 0;
        a.v = -1;
        a.m = b;
        a: {
            if (b = a.m.length) {
                --b;
                var e = a.m[b];
                if (!(null === e || "object" != typeof e || A(e) || ee && e instanceof Uint8Array)) {
                    a.B = b - a.v;
                    a.o = e;
                    break a
                }
            }
            a.B = Number.MAX_VALUE
        }
        a.D = {};
        if (c)
            for (b = 0; b < c.length; b++) e = c[b], e < a.B ? (e += a.v, a.m[e] = a.m[e] || fe) : (ge(a), a.o[e] = a.o[e] || fe);
        if (d && d.length)
            for (b = 0; b < d.length; b++) {
                e = c = void 0;
                for (var f = a, g = d[b], h = 0; h < g.length; h++) {
                    var k = g[h],
                        l = L(f, k);
                    null != l && (e = k, c = l, M(f, k, void 0))
                }
                e && M(f, e, c)
            }
    }
    var fe = [];

    function ge(a) {
        var b = a.B + a.v;
        a.m[b] || (a.o = a.m[b] = {})
    }

    function L(a, b) {
        if (b < a.B) {
            b += a.v;
            var c = a.m[b];
            return c === fe ? a.m[b] = [] : c
        }
        if (a.o) return c = a.o[b], c === fe ? a.o[b] = [] : c
    }

    function he(a, b) {
        a = L(a, b);
        return null == a ? a : +a
    }

    function ie(a, b) {
        a = L(a, b);
        return null == a ? a : !!a
    }

    function je(a, b) {
        a = ie(a, b);
        return null == a ? !1 : a
    }

    function M(a, b, c) {
        b < a.B ? a.m[b + a.v] = c : (ge(a), a.o[b] = c);
        return a
    }

    function ke(a, b, c, d) {
        c !== d ? M(a, b, c) : a.m[b + a.v] = null;
        return a
    }

    function N(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            var d = L(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    }

    function O(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            for (var d = L(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
        b = a.j[c];
        b == fe && (b = a.j[c] = []);
        return b
    }

    function le(a, b, c) {
        a.j || (a.j = {});
        var d = c ? me(c) : c;
        a.j[b] = c;
        return M(a, b, d)
    }

    function me(a) {
        if (a.j)
            for (var b in a.j) {
                var c = a.j[b];
                if (A(c))
                    for (var d = 0; d < c.length; d++) c[d] && me(c[d]);
                else c && me(c)
            }
        return a.m
    }
    I.prototype.C = ee ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            var b;
            void 0 === b && (b = 0);
            if (!de) {
                de = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    ce[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === de[h] && (de[h] = g)
                    }
                }
            }
            b = ce[b];
            c = [];
            for (d = 0; d < this.length; d += 3) {
                var k = this[d],
                    l = (e = d + 1 < this.length) ? this[d + 1] : 0;
                h = (f = d + 2 < this.length) ? this[d + 2] : 0;
                g = k >> 2;
                k = (k & 3) << 4 | l >> 4;
                l = (l & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64, e || (l = 64));
                c.push(b[g], b[k], b[l] || "", b[h] || "")
            }
            return c.join("")
        };
        try {
            return JSON.stringify(this.m && me(this), ne)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.m && me(this), ne)
    };

    function ne(a, b) {
        return Ma(b) && (isNaN(b) || Infinity === b || -Infinity === b) ? String(b) : b
    }

    function oe(a, b) {
        return new a(b ? JSON.parse(b) : null)
    }
    I.prototype.clone = function() {
        return new this.constructor(pe(me(this)))
    };

    function pe(a) {
        if (A(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? pe(d) : d)
            }
            return b
        }
        if (ee && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? pe(d) : d);
        return b
    };

    function qe(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                b.document.body.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            g.async = c;
            Ed(g, a);
            b.document.body.appendChild(g)
        })
    };
    /*
     Copyright (c) Microsoft Corporation. All rights reserved.
     Licensed under the Apache License, Version 2.0 (the "License"); you may not use
     this file except in compliance with the License. You may obtain a copy of the
     License at http://www.apache.org/licenses/LICENSE-2.0

     THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
     KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
     WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
     MERCHANTABLITY OR NON-INFRINGEMENT.

     See the Apache Version 2.0 License for specific language governing permissions
     and limitations under the License.
    */
    function re(a, b) {
        var c = void 0,
            d = void 0;
        return new(d || (d = Promise))(function(e, f) {
            function g(l) {
                try {
                    k(b.next(l))
                } catch (m) {
                    f(m)
                }
            }

            function h(l) {
                try {
                    k(b["throw"](l))
                } catch (m) {
                    f(m)
                }
            }

            function k(l) {
                l.done ? e(l.value) : (new d(function(m) {
                    m(l.value)
                })).then(g, h)
            }
            k((b = b.apply(a, c)).next())
        })
    };

    function se(a, b, c) {
        return re(this, function e() {
            var f, g;
            return Fa(e, function(h) {
                switch (h.j) {
                    case 1:
                        f = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + (a + "&tv=" + b);
                        g = void 0;
                        h.v = 2;
                        var k = te(f);
                        h.j = 4;
                        return {
                            value: k
                        };
                    case 4:
                        g = h.B;
                        h.j = 3;
                        h.v = 0;
                        break;
                    case 2:
                        h.v = 0, h.m = null;
                    case 3:
                        return g ? (c = c || g.sodar_query_id) && g.bg_hash_basename && g.bg_binary ? h.return({
                            context: "pt",
                            Qc: g.bg_hash_basename,
                            Pc: g.bg_binary,
                            ed: a + "_" + b,
                            cd: c
                        }) : h.return(void 0) : h.return(void 0)
                }
            })
        })
    }

    function te(a) {
        return new Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    }

    function ue(a, b, c) {
        var d = void 0 === d ? "sodar2" : d;
        re(this, function f() {
            var g;
            return Fa(f, function(h) {
                if (1 == h.j) {
                    var k = se(a, b, c);
                    h.j = 2;
                    return {
                        value: k
                    }
                }
                g = h.B;
                if (!g) return h.return(void 0);
                k = d;
                k = void 0 === k ? "sodar2" : k;
                var l = window,
                    m = l.GoogleGcLKhOms;
                m && "function" === typeof m.push || (m = l.GoogleGcLKhOms = []);
                var n = {};
                m.push((n._ctx_ = g.context, n._bgv_ = g.Qc, n._bgp_ = g.Pc, n._li_ = g.ed, n._jk_ = g.cd, n));
                if (m = l.GoogleDX5YKUSk) l.GoogleDX5YKUSk = void 0, m[1]();
                k = ec({
                    basename: k
                });
                qe(k);
                return h.return(g)
            })
        })
    };

    function ve(a) {
        J(this, a, we, null)
    }
    D(ve, I);

    function He(a) {
        J(this, a, null, null)
    }
    D(He, I);
    var we = [2, 3];
    var Ie = document,
        P = window;
    var Je = {
        Id: "google_adtest",
        Md: "google_ad_client",
        Nd: "google_ad_format",
        Od: "google_ad_height",
        ae: "google_ad_width",
        Sd: "google_ad_layout",
        Td: "google_ad_layout_key",
        Ud: "google_ad_output",
        Vd: "google_ad_region",
        Yd: "google_ad_slot",
        Zd: "google_ad_type",
        $d: "google_ad_url",
        be: "google_allow_expandable_ads",
        re: "google_analytics_domain_name",
        se: "google_analytics_uacct",
        Ie: "google_container_id",
        Te: "google_gl",
        nf: "google_enable_ose",
        wf: "google_full_width_responsive",
        rg: "google_rl_filtering",
        qg: "google_rl_mode",
        sg: "google_rt",
        pg: "google_rl_dest_url",
        Wf: "google_max_radlink_len",
        ag: "google_num_radlinks",
        bg: "google_num_radlinks_per_unit",
        Ld: "google_ad_channel",
        Vf: "google_max_num_ads",
        Xf: "google_max_responsive_height",
        De: "google_color_border",
        mf: "google_enable_content_recommendations",
        Qe: "google_content_recommendation_ui_type",
        Pe: "google_source_type",
        Oe: "google_content_recommendation_rows_num",
        Me: "google_content_recommendation_columns_num",
        Le: "google_content_recommendation_ad_positions",
        Re: "google_content_recommendation_use_square_imgs",
        Fe: "google_color_link",
        Ee: "google_color_line",
        He: "google_color_url",
        Jd: "google_ad_block",
        Xd: "google_ad_section",
        Kd: "google_ad_callback",
        ze: "google_captcha_token",
        Ge: "google_color_text",
        pe: "google_alternate_ad_url",
        Rd: "google_ad_host_tier_id",
        Ae: "google_city",
        Pd: "google_ad_host",
        Qd: "google_ad_host_channel",
        qe: "google_alternate_color",
        Ce: "google_color_bg",
        qf: "google_encoding",
        tf: "google_font_face",
        We: "google_cust_ch",
        Ze: "google_cust_job",
        Ye: "google_cust_interests",
        Xe: "google_cust_id",
        $e: "google_cust_u_url",
        Df: "google_hints",
        Hf: "google_image_size",
        fe: "google_scs",
        lg: "google_core_dbp",
        Yf: "google_mtl",
        Wg: "google_cpm",
        Ke: "google_contents",
        $f: "google_native_settings_key",
        fh: "google_video_url_to_fetch",
        Se: "google_country",
        Og: "google_targeting",
        uf: "google_font_size",
        cf: "google_disable_video_autoplay",
        eh: "google_video_product_type",
        bh: "google_video_doc_id",
        cg: "google_only_pyv_ads",
        Sf: "google_lact",
        $g: "google_cust_gender",
        ih: "google_yt_up",
        hh: "google_yt_pt",
        Kg: "google_cust_lh",
        Jg: "google_cust_l",
        Vg: "google_tfs",
        Zf: "google_native_ad_template",
        Qf: "google_kw",
        Lg: "google_tag_for_child_directed_treatment",
        Mg: "google_tag_for_under_age_of_consent",
        ug: "google_region",
        Ve: "google_cust_criteria",
        Wd: "google_safe",
        Ue: "google_ctr_threshold",
        zg: "google_resizing_allowed",
        Bg: "google_resizing_width",
        Ag: "google_resizing_height",
        Zg: "google_cust_age",
        LANGUAGE: "google_language",
        Rf: "google_kw_type",
        mg: "google_pucrd",
        kg: "google_page_url",
        Ng: "google_tag_partner",
        pf: "google_enable_single_iframe"
    };

    function Ke(a) {
        J(this, a, null, null)
    }
    D(Ke, I);

    function Le(a) {
        J(this, a, null, null)
    }
    D(Le, I);

    function Me(a) {
        this.j = a || {
            cookie: ""
        }
    }
    Me.prototype.set = function(a, b, c, d, e, f) {
        if ("object" === typeof c) {
            var g = c.o;
            f = c.v;
            e = c.j;
            d = c.l;
            c = c.m
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === c && (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(C() + 1E3 * c)).toUTCString();
        this.j.cookie = a + "=" + b + e + d + c + f + (null != g ? ";samesite=" + g : "")
    };
    Me.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = kc(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };

    function Ne(a) {
        var b = (b = (new Me(a)).get("FCCDCF", "")) ? b : null;
        if (!b) return Oe(a);
        try {
            var c = oe(Ke, b)
        } catch (d) {
            c = null
        }
        if (!c) return Oe(a);
        c = N(c, Le, 3);
        if (!c) return Oe(a);
        a = L(c, 2);
        a ? (b = C(), a = b < a ? !1 : b <= a + 33696E6) : a = !1;
        return a ? L(c, 1) : null
    }

    function Oe(a) {
        return (a = (new Me(a)).get("DATA_USE_CONSENT", "")) ? a : null
    };

    function Pe(a) {
        J(this, a, Qe, null)
    }
    D(Pe, I);
    var Qe = [1, 2, 3, 4];
    var Re = !H || 9 <= Number(be),
        Se = H && !ae("9"),
        Te = H || Rd || Ud;

    function Ue(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function Ve(a) {
        return nb(arguments, function(b, c) {
            return b + c
        })
    }

    function We(a) {
        return Ve.apply(null, arguments) / arguments.length
    };

    function Xe(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    p = Xe.prototype;
    p.clone = function() {
        return new Xe(this.x, this.y)
    };
    p.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    p.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    p.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    p.translate = function(a, b) {
        a instanceof Xe ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    p.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };

    function Ye(a, b) {
        this.width = a;
        this.height = b
    }
    p = Ye.prototype;
    p.clone = function() {
        return new Ye(this.width, this.height)
    };
    p.aspectRatio = function() {
        return this.width / this.height
    };
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    p.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };

    function Ze(a) {
        return a ? new $e(af(a)) : hb || (hb = new $e)
    }

    function bf(a, b) {
        Nb(b, function(c, d) {
            c && "object" == typeof c && c.V && (c = c.M());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : cf.hasOwnProperty(d) ? a.setAttribute(cf[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var cf = {
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

    function df(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Ye(a.clientWidth, a.clientHeight)
    }

    function ef(a) {
        var b = a.scrollingElement ? a.scrollingElement : Ud || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = ff(a);
        return H && ae("10") && a.pageYOffset != b.scrollTop ? new Xe(b.scrollLeft, b.scrollTop) : new Xe(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function ff(a) {
        return a.parentWindow || a.defaultView
    }

    function gf(a, b, c) {
        function d(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !Wa(f) || B(f) && 0 < f.nodeType ? d(f) : kb(hf(f) ? ub(f) : f, d)
        }
    }

    function jf(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function kf(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function lf(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function mf(a) {
        var b;
        if (Te && !(H && ae("9") && !ae("10") && x.SVGElement && a instanceof x.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return B(b) && 1 == b.nodeType ? b : null
    }

    function af(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var nf = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        of = {
            IMG: " ",
            BR: "\n"
        };

    function pf(a) {
        if (Se && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            qf(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Se || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function qf(a, b, c) {
        if (!(a.nodeName in nf))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in of ) b.push( of [a.nodeName]);
        else
            for (a = a.firstChild; a;) qf(a, b, c), a = a.nextSibling
    }

    function hf(a) {
        if (a && "number" == typeof a.length) {
            if (B(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (Xa(a)) return "function" == typeof a.item
        }
        return !1
    }

    function rf(a) {
        return sf(a, function(b) {
            return "INS" == b.nodeName && "string" === typeof b.className && qb(b.className.split(/\s+/), "adsbygoogle")
        })
    }

    function sf(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function $e(a) {
        this.j = a || x.document || document
    }

    function tf(a, b) {
        a = a.j;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        a.querySelectorAll && a.querySelector && b ? b = a.querySelectorAll(b) : b = a.getElementsByTagName(b || "*");
        return b
    }
    $e.prototype.l = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = String(e[0]),
            g = e[1];
        if (!Re && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', Fd(g.name), '"');
            if (g.type) {
                f.push(' type="', Fd(g.type), '"');
                var h = {};
                Ub(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = jf(d, f);
        g && ("string" === typeof g ? f.className = g : A(g) ? f.className = g.join(" ") : bf(f, g));
        2 < e.length && gf(d, f, e);
        return f
    };

    function uf(a, b) {
        return jf(a.j, b)
    }
    $e.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    $e.prototype.m = function(a) {
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
    };

    function vf(a) {
        wf();
        return hc(a)
    }
    var wf = Ra;

    function xf() {
        return !yf() && (G("iPod") || G("iPhone") || G("Android") || G("IEMobile"))
    }

    function yf() {
        return G("iPad") || G("Android") && !G("Mobile") || G("Silk")
    };
    var zf = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Af(a) {
        return a ? decodeURI(a) : a
    }

    function Bf(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.substr(0, d), e, a.substr(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function Cf(a, b, c) {
        if (A(b))
            for (var d = 0; d < b.length; d++) Cf(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };

    function Df(a) {
        try {
            return !!a && null != a.location.href && Od(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function Ef(a) {
        for (var b = x, c = 0; b && 40 > c++ && (!Df(b) || !a(b));) b = Ff(b)
    }

    function Gf() {
        var a = x;
        Ef(function(b) {
            a = b;
            return !1
        });
        return a
    }

    function Ff(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    }

    function Hf(a, b) {
        var c = a.createElement("script");
        Ed(c, vf(b));
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function If(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Jf(a, b, c) {
        var d = !1;
        void 0 === c || c || (d = Kf());
        return !d && !Lf() && (c = Math.random(), c < b) ? (c = Mf(x), a[Math.floor(c * a.length)]) : null
    }

    function Mf(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function Nf(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Bb() {
        var a = [];
        Nf(Of, function(b, c) {
            a.push(c)
        });
        return a
    }

    function Pf(a) {
        var b = [];
        Nf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Qf(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Lf = Kb(function() {
            return -1 != Zc.indexOf("Google Web Preview") || 1E-4 > Math.random()
        }),
        Kf = Kb(function() {
            return -1 != Zc.indexOf("MSIE")
        }),
        Rf = /^([0-9.]+)px$/,
        Sf = /^(-?[0-9.]{1,30})$/;

    function Tf(a) {
        return Sf.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function Uf(a) {
        return /^true$/.test(a)
    }

    function Vf(a) {
        return (a = Rf.exec(a)) ? +a[1] : null
    }

    function Wf() {
        var a = x.document.URL;
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    }
    var Xf = {
            ce: "allow-forms",
            de: "allow-modals",
            ee: "allow-orientation-lock",
            ge: "allow-pointer-lock",
            he: "allow-popups",
            ie: "allow-popups-to-escape-sandbox",
            je: "allow-presentation",
            ke: "allow-same-origin",
            le: "allow-scripts",
            me: "allow-top-navigation",
            ne: "allow-top-navigation-by-user-activation"
        },
        Yf = Kb(function() {
            return Pf(Xf)
        });

    function Zf() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation"],
            b = Yf();
        return a.length ? lb(b, function(c) {
            return !qb(a, c)
        }) : b
    }

    function $f() {
        var a = jf(document, "IFRAME").sandbox,
            b = a && a.supports;
        if (!b) return {};
        var c = {};
        kb(Yf(), function(d) {
            b.call(a, d) && (c[d] = !0)
        });
        return c
    }

    function ag(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }

    function Ag() {
        for (var a = x, b = 0; 40 > b; ++b) {
            if (ag(a, "__cmpLocator")) return a;
            if (!(a = Ff(a))) break
        }
        return null
    }
    var Bg = {
            "http://googleads.g.doubleclick.net": !0,
            "http://pagead2.googlesyndication.com": !0,
            "https://googleads.g.doubleclick.net": !0,
            "https://pagead2.googlesyndication.com": !0
        },
        Cg = /\.google\.com(:\d+)?$/;

    function Dg(a, b) {
        return !!Bg[a] || (void 0 === b ? !1 : b) && Cg.test(a)
    }

    function Eg(a, b) {
        b = pb(a, b);
        if (0 <= b) {
            var c = a[b];
            Array.prototype.splice.call(a, b, 1);
            return c
        }
        return null
    }

    function Fg(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52))
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    var Of = {
        Of: 0,
        Bf: 1,
        Af: 2,
        zf: 3,
        ng: 4,
        og: 5,
        Ff: 6,
        Cf: 7
    };
    var Gg = {
            passive: !0
        },
        Hg = Kb(function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                x.addEventListener("test", null, b)
            } catch (c) {}
            return a
        });

    function Ig(a) {
        return a ? a.passive && Hg() ? a : a.capture || !1 : !1
    }

    function Q(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Ig(d)), !0) : !1
    }

    function Jg(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Ig(d)), !0) : !1
    };

    function Kg(a, b) {
        Lg(a, void 0 === b ? null : b)
    }

    function Lg(a, b) {
        x.google_image_requests || (x.google_image_requests = []);
        var c = x.document.createElement("img");
        if (b) {
            var d = function(e) {
                b && b(e);
                Jg(c, "load", d);
                Jg(c, "error", d)
            };
            Q(c, "load", d);
            Q(c, "error", d)
        }
        c.src = a;
        x.google_image_requests.push(c)
    };
    var Mg = !1;

    function Ng(a) {
        var b = document;
        try {
            var c = Ne(b);
            var d = c ? oe(Pe, c) : null
        } catch (e) {
            d = null
        }
        if (!d) return 0;
        if (ie(d, 7)) return 4;
        if (6048E5 < C() - (L(d, 5) || 0)) return 0;
        if (a) {
            if (qb(L(d, 3), a)) return 2;
            if (qb(L(d, 4), a)) return 3
        }
        return 1
    }

    function Og() {
        return ag(x.top, "GoogleSetNPA") || ag(Gf(), "GoogleSetNPA")
    }
    var Pg = Kb(function() {
            var a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
            try {
                return a.test(x.top.location.href)
            } catch (b) {
                return a.test(x.location.href)
            }
        }),
        Qg = {},
        Rg = null,
        Sg = null;

    function Tg() {
        var a = Ug();
        a && x.setTimeout && .01 > Math.random() && x.setTimeout(function() {
            x.__cmp && x.__cmp("getConsentData", null, function(b) {
                b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=iabcmp&vcd=" + JSON.stringify(b);
                Kg(b)
            })
        }, 1E4);
        return a
    }

    function Ug() {
        if (x.__cmp) {
            var a = !1;
            try {
                x.__cmp("ping", null, function() {
                    a = !0
                })
            } catch (b) {}
            if (a) return !0
        }
        Sg = Ag();
        return !!Sg
    }
    var Vg = 1;

    function Wg() {
        if (!x.__cmp && Sg) {
            try {
                if (Sg.__cmp) {
                    x.__cmp = Sg.__cmp;
                    return
                }
            } catch (a) {}
            x.__cmp = function(a, b, c) {
                var d = "google_cmp_callback_" + Vg;
                Vg++;
                a = {
                    __cmpCall: {
                        command: a,
                        parameter: b,
                        callId: d
                    }
                };
                Qg[d] = c;
                Sg.postMessage(a, "*")
            };
            Q(x, "message", function(a) {
                a = a.data;
                if ("string" == typeof a) try {
                    a = JSON.parse(a)
                } catch (b) {}(a = a.__cmpReturn) && "function" == typeof Qg[a.callId] && (Qg[a.callId](a.returnValue, a.success), delete Qg[a.callId])
            })
        }
    }

    function Xg(a, b) {
        function c(l, m) {
            m && l && (g = !!l.gdprAppliesGlobally)
        }
        var d = void 0 === b ? function() {} : b,
            e = Og(),
            f = Ab();
        f[0] = a ? 1 : 2;
        f[6] = 1;
        f[5] = e ? 1 : 2;
        var g = !1;
        x.__cmp && x.__cmp("ping", null, c);
        if (g || a) {
            var h = function(l) {
                l && (l.gdprApplies ? (f[6] = 8, Rg = {
                    Ga: 5,
                    Fa: e,
                    va: !1,
                    ta: f.join("."),
                    Va: l.consentData,
                    Pb: l.googleVendorIds
                }, d(Rg)) : (Rg = {
                    Ga: 5,
                    Fa: e,
                    va: !1,
                    ta: f.join(".")
                }, d(Rg)))
            };
            a = Gf().GoogleMostRecentCmpConsentData;
            var k = !!a;
            a && h(a);
            x.__cmp && x.__cmp("getConsentData", null, function(l, m) {
                m && (Gf().GoogleMostRecentCmpConsentData = l, k || h(l))
            })
        } else Rg = {
            Ga: 5,
            Fa: e,
            va: !1,
            ta: f.join(".")
        }, d(Rg)
    }

    function Yg(a, b) {
        var c = Ab();
        Pg() && (a = !0);
        c[0] = a ? 1 : 2;
        var d = Og();
        c[5] = d ? 1 : 2;
        if (Mg && Tg()) return Wg(), Xg(a), Rg || (c[6] = 7, Rg = {
            Ga: 5,
            Fa: d,
            va: !0,
            ta: c.join("."),
            Va: "NCS"
        }), Rg;
        c[4] = 2;
        var e = !!x.googlefc || ag(x.top, "googlefcPresent");
        c[1] = e ? 1 : 2;
        var f = Ng(b);
        0 != f ? b = {
            Nb: f,
            Qb: 3
        } : (f = x.top, b = {
            Nb: ag(f, "googlefcInactive") ? 4 : b && ag(f, "googlefcPA-" + b) ? 2 : ag(f, "googlefcNPA") ? 3 : 0,
            Qb: 2
        });
        f = b;
        b = f.Nb;
        c[f.Qb] = b;
        if (!d) a: switch (b) {
            case 2:
            case 4:
                d = !1;
                break a;
            case 3:
                d = !0;
                break a;
            case 1:
                d = a;
                break a;
            default:
                d = (void 0 === e ? !1 : e) && a
        }
        return {
            Ga: b,
            Fa: d,
            va: 0 == b && a && e,
            ta: c.join(".")
        }
    }

    function Zg(a, b, c) {
        if (Mg && Tg()) Wg(), Xg(a, c);
        else {
            var d = Yg(a, b);
            d.va ? x.setTimeout(function() {
                Zg(a, b, c)
            }, 1E3) : c(d)
        }
    };

    function $g(a, b, c, d) {
        this.j = a;
        this.pubWin = b;
        this.iframeWin = c;
        this.A = d || c || {};
        this.l = b.document.getElementById(this.A.google_async_iframe_id + "_anchor");
        this.m = -1;
        this.v = !1;
        this.G = "";
        this.C = 0;
        this.o = !1;
        this.B = this.H = null;
        this.F = 0;
        this.D = null;
        this.I = 0
    };

    function ah(a, b) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? b : a
    }
    var bh = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/;

    function ch(a, b) {
        return a ? (a = a.match(bh)) ? a[0] : b : b
    };

    function dh() {
        return "r20191003"
    }
    var eh = Uf("false"),
        fh = Uf("false"),
        gh = Uf("false"),
        hh = Uf("false"),
        ih = Uf("true"),
        jh = Uf("true"),
        kh = jh || !hh,
        lh = ah("0.02", 0),
        mh = ah("0.0", 0);

    function nh() {
        return ch("", "googleads.g.doubleclick.net")
    }

    function oh() {
        return ch("", "pagead2.googlesyndication.com")
    };

    function ph(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = ph.prototype;
    p.Pa = function() {
        return this.right - this.left
    };
    p.fb = function() {
        return this.bottom - this.top
    };
    p.clone = function() {
        return new ph(this.top, this.right, this.bottom, this.left)
    };
    p.contains = function(a) {
        return this && a ? a instanceof ph ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    p.expand = function(a, b, c, d) {
        B(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };

    function qh(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    p.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    p.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    p.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    p.translate = function(a, b) {
        a instanceof Xe ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    p.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function rh(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    p = rh.prototype;
    p.clone = function() {
        return new rh(this.left, this.top, this.width, this.height)
    };

    function sh(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new rh(c, e, d - c, a - e)
        }
        return null
    }

    function th(a, b) {
        var c = sh(a, b);
        if (!c || !c.height || !c.width) return [a.clone()];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new rh(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new rh(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new rh(a.left, d, b.left - a.left, e));
        h < f && c.push(new rh(h, d, f - h, e));
        return c
    }
    p.contains = function(a) {
        return a instanceof Xe ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    p.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    p.translate = function(a, b) {
        a instanceof Xe ? (this.left += a.x, this.top += a.y) : (this.left += a, "number" === typeof b && (this.top += b));
        return this
    };
    p.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };

    function uh(a, b, c) {
        if ("string" === typeof b)(b = vh(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = vh(c, d);
                f && (c.style[f] = e)
            }
    }
    var wh = {};

    function vh(a, b) {
        var c = wh[b];
        if (!c) {
            var d = Ld(b);
            c = d;
            void 0 === a.style[d] && (d = (Ud ? "Webkit" : Td ? "Moz" : H ? "ms" : Rd ? "O" : null) + Md(d), void 0 !== a.style[d] && (c = d));
            wh[b] = c
        }
        return c
    }

    function xh(a, b) {
        var c = af(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function yh(a) {
        return xh(a, "position") || (a.currentStyle ? a.currentStyle.position : null) || a.style && a.style.position
    }

    function zh(a) {
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
        H && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Ah(a) {
        var b = af(a),
            c = new Xe(0, 0);
        var d = b ? af(b) : document;
        d = !H || 9 <= Number(be) || "CSS1Compat" == Ze(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = zh(a);
        b = ef(Ze(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Bh(a, b) {
        b = Ze(b);
        var c = b.j;
        if (H && c.createStyleSheet) b = c.createStyleSheet(), Ch(b, a);
        else {
            c = tf(b, "HEAD")[0];
            if (!c) {
                var d = tf(b, "BODY")[0];
                c = b.l("HEAD");
                d.parentNode.insertBefore(c, d)
            }
            b = b.l("STYLE");
            Ch(b, a);
            c.appendChild(b)
        }
    }

    function Ch(a, b) {
        b = Yc(b);
        H && void 0 !== a.cssText ? a.cssText = b : a.innerHTML = b
    }

    function Dh(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function Eh(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Dh(a, b) : 0
    }
    var Fh = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Gh(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Fh ? Fh[b] : Dh(a, b)
    };

    function Hh(a) {
        this.j = a
    }
    var Ih = new Hh(2),
        Jh = new Hh(3),
        Kh = new Hh(5),
        Lh = new Hh(6);

    function Mh(a, b, c) {
        return b[a.j] || c || function() {}
    };

    function Nh() {
        this.j = function() {
            return !1
        };
        this.l = function() {
            return 0
        }
    }
    Sa(Nh);

    function Oh(a) {
        var b = void 0 === b ? !1 : b;
        return Nh.U().j(a, b)
    }

    function Ph(a) {
        var b = void 0 === b ? 0 : b;
        return Nh.U().l(a, b)
    };
    var Qh = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Rh(a) {
        a = void 0 === a ? x : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Sh() {
        var a = Rh();
        return a && a.initialIntersection
    }

    function Th() {
        var a = Sh();
        return a && B(a.rootBounds) ? new Ye(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Uh(a) {
        return (a = a || Rh()) ? Df(a.master) ? a.master : null : null
    }

    function Vh(a, b) {
        function c() {}
        var d = a.ampInaboxIframes = a.ampInaboxIframes || [];
        b && (d.push(b), c = function() {
            a.AMP && a.AMP.inaboxUnregisterIframe ? a.AMP.inaboxUnregisterIframe(b) : sb(d, b)
        });
        if (!a.ampInaboxInitialized && (a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [], !d.google_amp_listener_added)) {
            d.google_amp_listener_added = !0;
            var e = function(f) {
                if (a.ampInaboxInitialized) return Jg(a, "message", e), c;
                var g, h = Oh(198) && "amp-ini-load" === f.data;
                a.ampInaboxPendingMessages && !h && (g = /^amp-(\d{15,20})?/.exec(f.data)) && (a.ampInaboxPendingMessages.push(f), f = g[1], a.ampInaboxInitialized || f && !/^\d{15,20}$/.test(f) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Hf(a.document, "https://cdn.ampproject.org/" + (f ? "rtv/" + f + "/" : "") + "amp4ads-host-v0.js"))
            };
            Q(a, "message", e)
        }
    };
    var Wh = /^((market|itms|intent|itms-appss):\/\/)/i;

    function Xh(a, b) {
        "about:invalid#zClosurez" === (a instanceof E ? a : Gc(a)).M() && b(String(a))
    }

    function Yh(a, b) {
        return function(c) {
            c = {
                id: "unsafeurl",
                ctx: a,
                url: c
            };
            var d = [];
            for (e in c) Cf(e, c[e], d);
            var e = Bf(b, d.join("&"));
            navigator.sendBeacon && navigator.sendBeacon(e, "")
        }
    };

    function S(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Zh(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function $h(a, b) {
        if (a.filter) return a.filter(b, void 0);
        for (var c = [], d = 0; d < a.length; d++) b.call(void 0, a[d], d, a) && c.push(a[d]);
        return c
    }

    function ai(a, b) {
        if (a.indexOf) return a = a.indexOf(b), 0 < a || 0 === a;
        for (var c = 0; c < a.length; c++)
            if (a[c] === b) return !0;
        return !1
    }

    function bi() {
        var a = T();
        "google_onload_fired" in a || (a.google_onload_fired = !1, Q(a, "load", function() {
            a.google_onload_fired = !0
        }))
    }

    function ci(a, b) {
        var c = b.slice(-1),
            d = "?" === c || "#" === c ? "" : "&",
            e = [b];
        S(a, function(f, g) {
            if (f || 0 === f || !1 === f) "boolean" === typeof f && (f = f ? 1 : 0), e.push(d), e.push(g), e.push("="), e.push(encodeURIComponent(String(f))), d = "&"
        });
        return e.join("")
    }

    function di() {
        var a = void 0 === a ? P : a;
        try {
            return a.history.length
        } catch (b) {
            return 0
        }
    }

    function ei() {
        var a = void 0 === a ? P : a;
        return "http:" === a.location.protocol
    }

    function fi(a) {
        a = Uh(Rh(a)) || a;
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
    }

    function gi(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function hi(a) {
        var b = 9 !== a.nodeType && a.id;
        a: {
            if (a && a.nodeName && a.parentElement) {
                var c = a.nodeName.toString().toLowerCase();
                for (var d = a.parentElement.childNodes, e = 0, f = 0; f < d.length; ++f) {
                    var g = d[f];
                    if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                        if (a === g) {
                            c = "." + e;
                            break a
                        }++e
                    }
                }
            }
            c = ""
        }
        return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
    }

    function ii(a) {
        return !!a.google_async_iframe_id
    }
    var ji = ii(window),
        ki = ji && window.parent || window;

    function T() {
        if (ji && !Df(ki)) {
            var a = "." + Ie.domain;
            try {
                for (; 2 < a.split(".").length && !Df(ki);) Ie.domain = a = a.substr(a.indexOf(".") + 1), ki = window.parent
            } catch (b) {}
            Df(ki) || (ki = window)
        }
        return ki
    }
    var li = /(^| )adsbygoogle($| )/;

    function mi(a) {
        return function() {
            if (a) {
                var b = a;
                a = null;
                b.apply(null, arguments)
            }
        }
    }
    var ni = hc(Zb(new Wb(Xb, "//fonts.googleapis.com/css")));

    function oi(a) {
        a = uf(Ze(a), "LINK");
        a.type = "text/css";
        var b = Yh(638, "https://pagead2.googlesyndication.com/pagead/gen_204");
        var c = dc(ni).toString();
        c = ic.exec(c);
        var d = c[3] || "";
        c = hc(c[1] + jc("?", c[2] || "", {
            family: "Roboto:300,500"
        }) + jc("#", d, void 0));
        c instanceof ac || Xh(c, b);
        Dd(a, c, "stylesheet");
        return a
    }

    function pi() {
        var a, b = window.ActiveXObject;
        if (navigator.plugins && navigator.mimeTypes.length) {
            if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
        } else {
            if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                var c = 3;
                for (a = 1; a;) try {
                    a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1)), c++
                } catch (d) {
                    a = null
                }
                return c.toString()
            }
            if (dd()) {
                a = null;
                try {
                    a = new b("ShockwaveFlash.ShockwaveFlash.7")
                } catch (d) {
                    c = 0;
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash.6"), c = 6, a.AllowScriptAccess = "always"
                    } catch (e) {
                        if (6 === c) return c.toString()
                    }
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash")
                    } catch (e) {}
                }
                if (a) return c = a.GetVariable("$version").split(" ")[1], c.replace(/,/g, ".")
            }
        }
        return "0"
    }

    function qi(a) {
        return (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1
    }

    function ri() {
        if (gh) try {
            var a = P.google_cafe_host || P.top.google_cafe_host;
            if (a) return a
        } catch (b) {}
        return oh()
    }

    function si(a) {
        return gh && a.google_top_window || a.top
    }

    function ti(a) {
        a = si(a);
        return Df(a) ? a : null
    }

    function ui(a, b) {
        try {
            b = b || P;
            for (var c = 0; 20 > c; c++) {
                if (a == b) return !0;
                if (a == b.top) break;
                a = a.parent
            }
        } catch (d) {}
        return !1
    }

    function vi(a) {
        var b = Number(a.google_ad_width),
            c = Number(a.google_ad_height);
        if (!(0 < b && 0 < c)) {
            a: {
                try {
                    var d = String(a.google_ad_format);
                    if (d && d.match) {
                        var e = d.match(/(\d+)x(\d+)/i);
                        if (e) {
                            var f = parseInt(e[1], 10),
                                g = parseInt(e[2], 10);
                            if (0 < f && 0 < g) {
                                var h = {
                                    width: f,
                                    height: g
                                };
                                break a
                            }
                        }
                    }
                } catch (k) {}
                h = null
            }
            a = h;
            if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
        }
        return {
            width: b,
            height: c
        }
    };

    function wi(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function xi(a) {
        return wi(a).eids || []
    }

    function yi(a, b) {
        a = wi(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        var c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };
    var U = {},
        zi = (U.google_ad_channel = "channel", U.google_ad_type = "ad_type", U.google_ad_format = "format", U.google_color_bg = "color_bg", U.google_color_border = "color_border", U.google_color_link = "color_link", U.google_color_text = "color_text", U.google_color_url = "color_url", U.google_page_url = "url", U.google_allow_expandable_ads = "ea", U.google_ad_section = "region", U.google_cpm = "cpm", U.google_encoding = "oe", U.google_safe = "adsafe", U.google_flash_version = "flash", U.google_font_face = "f", U.google_font_size = "fs", U.google_hints = "hints", U.google_ad_host = "host", U.google_ad_host_channel = "h_ch", U.google_ad_host_tier_id = "ht_id", U.google_kw_type = "kw_type", U.google_kw = "kw", U.google_contents = "contents", U.google_targeting = "targeting", U.google_adtest = "adtest", U.google_alternate_color = "alt_color", U.google_alternate_ad_url = "alternate_ad_url", U.google_cust_age = "cust_age", U.google_cust_ch = "cust_ch", U.google_cust_gender = "cust_gender", U.google_cust_interests = "cust_interests", U.google_cust_job = "cust_job", U.google_cust_l = "cust_l", U.google_cust_lh = "cust_lh", U.google_cust_u_url = "cust_u_url", U.google_cust_id = "cust_id", U.google_language = "hl", U.google_city = "gcs", U.google_country = "gl", U.google_region = "gr", U.google_available_width = "avail_w", U.google_content_recommendation_ad_positions = "ad_pos", U.google_content_recommendation_columns_num = "cr_col", U.google_content_recommendation_rows_num = "cr_row", U.google_content_recommendation_ui_type = "crui", U.google_content_recommendation_use_square_imgs = "cr_sq_img", U.google_color_line = "color_line", U.google_disable_video_autoplay = "disable_video_autoplay", U.google_full_width_responsive_allowed = "fwr", U.google_full_width_responsive = "fwrattr", U.efwr = "efwr", U.google_pgb_reactive = "pra", U.google_resizing_allowed = "rs", U.google_resizing_height = "rh", U.google_resizing_width = "rw", U.rpe = "rpe", U.google_responsive_formats = "resp_fmts", U.google_safe_for_responsive_override = "sfro", U.google_video_doc_id = "video_doc_id", U.google_video_product_type = "video_product_type", U.google_webgl_support = "wgl", U.google_refresh_count = "rc", U),
        V = {},
        Ai = (V.google_ad_block = "ad_block", V.google_ad_client = "client", V.google_ad_output = "output", V.google_ad_callback = "callback", V.google_ad_height = "h", V.google_ad_resize = "twa", V.google_ad_slot = "slotname", V.google_ad_unit_key = "adk", V.google_ad_dom_fingerprint = "adf", V.google_ad_width = "w", V.google_captcha_token = "captok", V.google_content_recommendation_columns_num = "cr_col", V.google_content_recommendation_rows_num = "cr_row", V.google_ctr_threshold = "ctr_t", V.google_cust_criteria = "cust_params", V.gfwrnwer = "fwrn", V.gfwrnher = "fwrnh", V.google_bfa = "bfa", V.ebfa = "ebfa", V.ebfaca = "ebfaca", V.google_image_size = "image_size", V.google_last_modified_time = "lmt", V.google_loeid = "loeid", V.google_max_num_ads = "num_ads", V.google_max_radlink_len = "max_radlink_len", V.google_mtl = "mtl", V.google_native_settings_key = "nsk", V.google_enable_content_recommendations = "ecr", V.google_infinite_scroll_slot_type = "ifsl", V.google_num_radlinks = "num_radlinks", V.google_num_radlinks_per_unit = "num_radlinks_per_unit", V.google_pucrd = "pucrd", V.google_reactive_plaf = "plaf", V.google_reactive_plat = "plat", V.google_reactive_fba = "fba", V.google_reactive_sra_channels = "plach", V.google_responsive_auto_format = "rafmt", V.armr = "armr", V.google_rl_dest_url = "rl_dest_url", V.google_rl_filtering = "rl_filtering", V.google_rl_mode = "rl_mode", V.google_rt = "rt", V.google_source_type = "src_type", V.google_tag_for_child_directed_treatment = "tfcd", V.google_tag_for_under_age_of_consent = "tfua", V.google_tag_origin = "to", V.google_ad_semantic_area = "sem", V.google_tfs = "tfs", V.google_package = "pwprc", V.google_tag_partner = "tp", V.fra = "fpla", V.google_ml_rank = "mlr", V.google_apsail = "psa", V),
        Bi = {},
        Ci = (Bi.google_core_dbp = "dbp", Bi.google_lact = "lact", Bi.google_only_pyv_ads = "pyv", Bi.google_scs = "scs", Bi.google_video_url_to_fetch = "durl", Bi.google_yt_pt = "yt_pt", Bi.google_yt_up = "yt_up", Bi);

    function Di(a, b) {
        a.C |= b
    };

    function Ei(a) {
        S(zi, function(b, c) {
            a[c] = null
        });
        S(Ai, function(b, c) {
            a[c] = null
        });
        S(Ci, function(b, c) {
            a[c] = null
        });
        a.google_container_id = null;
        a.google_eids = null;
        a.google_page_location = null;
        a.google_referrer_url = null;
        a.google_enable_single_iframe = null;
        a.google_ad_region = null;
        a.google_gl = null;
        a.google_loader_used = null;
        a.google_loader_features_used = null;
        a.google_debug_params = null
    }

    function Fi(a, b, c) {
        Di(a, 2);
        return b[c % b.length]
    };
    var Gi = {
            mc: 1,
            nc: 2,
            xf: 8,
            sc: 9,
            Eg: 16,
            ue: 26,
            te: 27,
            qc: 30,
            Lf: 32
        },
        Hi = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6
        },
        Ii = {},
        Ji = (Ii[1] = 1, Ii[2] = 1, Ii[8] = 2, Ii[27] = 3, Ii[9] = 4, Ii[30] = 5, Ii[32] = 6, Ii);

    function Ki(a) {
        var b = a.iframeWin;
        if (b && ii(b) && b != b.parent && b.google_async_iframe_close) {
            var c = function() {
                return b.setTimeout(function() {
                    b.document.close()
                }, 0)
            };
            a.D ? a.D(c) : c()
        }
    };

    function Li(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Mi = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i, /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i, /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i];

    function Ni(a) {
        return ob(Mi, function(b) {
            return b.test(a)
        })
    }

    function Oi(a) {
        if (a = /[-\w]+\.[-\w]+$/.exec(a)) switch (Kd(a[0].toLowerCase())) {
            case 1967261364:
                return 0;
            case 3147493546:
                return 1;
            case 1567346461:
                return 2;
            case 2183041838:
                return 3;
            case 763236279:
                return 4;
            case 1342279801:
                return 5;
            case 526831769:
                return 6;
            case 352806002:
                return 7;
            case 2755048925:
                return 8;
            case 3306848407:
                return 9;
            case 2207000920:
                return 10;
            case 484037040:
                return 11;
            case 3506871055:
                return 12;
            case 672143848:
                return 13;
            case 2528751226:
                return 14;
            case 2744854768:
                return 15;
            case 3703278665:
                return 16;
            case 2014749173:
                return 17;
            case 133063824:
                return 18;
            case 2749334602:
                return 19;
            case 3131239845:
                return 20;
            case 2074086763:
                return 21;
            case 795772493:
                return 22;
            case 290857819:
                return 23;
            case 3035947606:
                return 24;
            case 2983138003:
                return 25;
            case 2197138676:
                return 26;
            case 4216016165:
                return 27;
            case 239803524:
                return 28;
            case 975993579:
                return 29;
            case 1794940339:
                return 30;
            case 1314429186:
                return 31;
            case 1643618937:
                return 32;
            case 497159982:
                return 33
        }
        return -1
    }

    function Pi(a) {
        if (!a.length) return 0;
        for (var b = [], c = 0; 33 >= c; c++) b[c] = 0;
        for (c = a.length - 1; 0 <= c; c--) {
            var d = Oi(a[c]);
            0 <= d && (b[33 - d] = 1)
        }
        return parseInt(b.join(""), 2)
    };
    var Qi = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function Ri(a) {
        a = (this.j = a || x) || x;
        this.m = a.top == a ? 1 : Df(a.top) ? 2 : 3;
        3 != this.m && Date.parse(x.top.document.lastModified);
        this.l = Si(this.j)
    }

    function Ti(a, b) {
        for (var c = 0, d = (a = a.l[Math.max(a.l.length - 1, 0)].url || null) && Af(a.match(zf)[3] || null), e = Math.min(b.length, 26), f = 0; f < e; f++) a = null != b[f] && Af(b[f].match(zf)[3] || null) || "", c *= 4, a && (d && a == d ? c += 3 : Ni(b[f]) ? c += 2 : a && 0 <= Oi(a) && (c += 1));
        return c
    }

    function Si(a) {
        var b = a || x,
            c = [],
            d = null;
        do {
            var e = b;
            if (Df(e)) {
                var f = e.location.href;
                d = e.document && e.document.referrer || null
            } else f = d, d = null;
            c.push(new Ui(f || "", e));
            try {
                b = e.parent
            } catch (g) {
                b = null
            }
        } while (b && e != b);
        e = 0;
        for (b = c.length - 1; e <= b; ++e) c[e].depth = b - e;
        e = a || x;
        if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == c.length - 1)
            for (a = 1; a < c.length; ++a) b = c[a], b.url || (b.url = e.location.ancestorOrigins[a - 1] || "", b.Rb = !0);
        return c
    }

    function Vi(a, b) {
        this.j = a;
        this.l = b
    }

    function Ui(a, b, c) {
        this.url = a;
        this.ca = b;
        this.Rb = !!c;
        this.depth = null
    };

    function Wi() {
        this.m = "&";
        this.o = !1;
        this.l = {};
        this.v = 0;
        this.j = []
    }

    function Xi(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Yi(a, b, c, d, e) {
        var f = [];
        Nf(a, function(g, h) {
            (g = Zi(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Zi(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Zi(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Yi(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function $i(a, b, c, d) {
        a.j.push(b);
        a.l[b] = Xi(c, d)
    }

    function aj(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = bj(a) - c.length;
        if (0 > d) return "";
        a.j.sort(function(m, n) {
            return m - n
        });
        c = null;
        for (var e = "", f = 0; f < a.j.length; f++)
            for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var l = Yi(h[k], a.m, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.m;
                        break
                    }
                    a.o && (e = d, l[e - 1] == a.m && --e, b += l.substr(0, e), e = a.m, d = 0);
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function bj(a) {
        var b = 1,
            c;
        for (c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.m.length - 1
    };

    function cj() {
        this.l = ei() ? "http:" : "https:";
        this.j = Math.random()
    }

    function dj() {
        var a = ej,
            b = fj.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    }

    function gj(a, b, c, d, e, f) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            if (c instanceof Wi) var g = c;
            else g = new Wi, Nf(c, function(k, l) {
                var m = g,
                    n = m.v++;
                k = Xi(l, k);
                m.j.push(n);
                m.l[n] = k
            });
            var h = aj(g, a.l, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" === typeof f ? Kg(h) : Kg(h, f))
        } catch (k) {}
    };
    var hj = !1,
        ij = null;

    function jj(a) {
        this.j = {};
        this.l = {};
        this.m = !1;
        a = a || [];
        for (var b = 0, c = a.length; b < c; ++b) this.l[a[b]] = ""
    }

    function kj() {
        var a = lj(),
            b = new jj;
        Nf(a.j, function(c, d) {
            b.j[d] = c
        });
        Nf(a.l, function(c, d) {
            b.l[d] = c
        });
        return b
    }

    function mj() {
        if (null === ij) {
            ij = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    ij = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return ij
    }

    function nj(a, b, c) {
        return "" == b ? "" : c ? a.l.hasOwnProperty(c) ? a.l[c] = b : "" : (a.j[b] = !0, b)
    }

    function bk(a, b, c, d) {
        if (a.m) return "";
        if (d ? a.l.hasOwnProperty(d) && "" == a.l[d] : 1) {
            var e;
            e = (e = mj()) ? (e = e.match(new RegExp("\\b(" + b.join("|") + ")\\b"))) ? e[0] : null : null;
            if (b = e ? e : hj ? null : Jf(b, c, !1)) return nj(a, b, d)
        }
        return ""
    }

    function ck(a, b) {
        return a.l.hasOwnProperty(b) ? a.l[b] : ""
    }

    function dk(a) {
        var b = [];
        Nf(a.j, function(c, d) {
            b.push(d)
        });
        Nf(a.l, function(c) {
            "" != c && b.push(c)
        });
        return b
    };

    function ek() {
        var a = x.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : C()
    }

    function fk() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function gk(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var hk = x.performance,
        ik = !!(hk && hk.mark && hk.measure && hk.clearMarks),
        jk = Kb(function() {
            var a;
            if (a = ik) a = mj(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function kk(a) {
        this.l = [];
        this.m = a || x;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.l = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.j = jk() || (null != b ? b : 1 > Math.random())
    }

    function lk(a) {
        a.j = !1;
        a.l != a.m.google_js_reporting_queue && (jk() && kb(a.l, mk), a.l.length = 0)
    }

    function mk(a) {
        a && hk && jk() && (hk.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), hk.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    kk.prototype.start = function(a, b) {
        if (!this.j) return null;
        var c = fk() || ek();
        a = new gk(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        hk && jk() && hk.mark(b);
        return a
    };

    function nk(a, b) {
        if (a.j && "number" === typeof b.value) {
            var c = fk() || ek();
            b.duration = c - b.value;
            c = "goog_" + b.label + "_" + b.uniqueId + "_end";
            hk && jk() && hk.mark(c);
            !a.j || 2048 < a.l.length || a.l.push(b)
        }
    }

    function ok(a, b) {
        if (!a.j) return b();
        var c = a.start("491", 3);
        try {
            var d = b()
        } catch (e) {
            throw mk(c), e;
        }
        nk(a, c);
        return d
    };

    function pk() {
        var a = qk;
        this.B = ej;
        this.o = !0;
        this.l = null;
        this.C = this.j;
        this.m = void 0 === a ? null : a;
        this.v = !1
    }

    function rk(a, b, c, d) {
        try {
            if (a.m && a.m.j) {
                var e = a.m.start(b.toString(), 3);
                var f = c();
                nk(a.m, e)
            } else f = c()
        } catch (g) {
            c = a.o;
            try {
                mk(e), c = a.C(b, new Li(g, {
                    message: sk(g)
                }), void 0, d)
            } catch (h) {
                a.j(217, h)
            }
            if (!c) throw g;
        }
        return f
    }

    function tk(a, b, c, d, e) {
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return rk(a, b, function() {
                return c.apply(d, g)
            }, e)
        }
    }
    pk.prototype.j = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Wi;
            f.o = !0;
            $i(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new Li(b, {
                message: sk(b)
            }));
            b.msg && $i(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.l) try {
                this.l(g)
            } catch (t) {}
            if (d) try {
                d(g)
            } catch (t) {}
            b = [g];
            f.j.push(3);
            f.l[3] = b;
            var h = Si(),
                k = new Ui(x.location.href, x, !1);
            b = null;
            var l = h.length - 1;
            for (d = l; 0 <= d; --d) {
                var m = h[d];
                !b && Qi.test(m.url) && (b = m);
                if (m.url && !m.Rb) {
                    k = m;
                    break
                }
            }
            m = null;
            var n = h.length && h[l].url;
            0 != k.depth && n && (m = h[l]);
            var q = new Vi(k, m);
            q.l && $i(f, 4, "top", q.l.url || "");
            $i(f, 5, "url", q.j.url || "");
            gj(this.B, e, f, this.v, c)
        } catch (t) {
            try {
                gj(this.B, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: sk(t),
                    url: q && q.j.url
                }, this.v, c)
            } catch (v) {}
        }
        return this.o
    };

    function sk(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = uk(a.stack, b));
        return b
    }

    function uk(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (d) {
            return b
        }
    };
    var ej, vk, wk, fj = T(),
        qk = new kk(fj);

    function xk(a) {
        var b = P.jerExpIds;
        if (A(b) && 0 !== b.length) {
            var c = a.eid;
            c ? (b = w(c.split(",")).concat(w(b)), xb(b), a.eid = b.join(",")) : a.eid = b.join(",")
        }
    }

    function yk(a) {
        var b = P.jerUserAgent;
        b && (a.useragent = b)
    }(function() {
        ej = new cj;
        "number" !== typeof fj.google_srt && (fj.google_srt = Math.random());
        dj();
        vk = new pk;
        vk.l = function(b) {
            xk(b);
            wk && (b.jc = wk);
            yk(b)
        };
        vk.v = !0;
        "complete" == fj.document.readyState ? fj.google_measure_js_timing || lk(qk) : qk.j && Q(fj, "load", function() {
            fj.google_measure_js_timing || lk(qk)
        });
        var a = Ie.currentScript;
        wk = a ? a.dataset.jc : ""
    })();

    function zk() {}

    function Ak(a, b) {
        rk(vk, a, b, void 0)
    }

    function W(a, b, c) {
        return tk(vk, a, b, c, void 0)
    }

    function X(a, b, c) {
        gj(ej, a, b, !0, c, void 0)
    }

    function Bk() {
        return Yh(611, (ei() ? "http:" : "https:") + "//pagead2.googlesyndication.com/pagead/gen_204")
    }

    function Ck(a, b) {
        X("rmvasft", {
            code: a,
            branch: b ? "exp" : "cntr"
        })
    };

    function Dk(a, b) {
        var c = Wf();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(x.document.location.protocol), "//", encodeURIComponent(x.document.location.host)].join("")
    };

    function Ek(a) {
        var b = [];
        Fk(new Gk, a, b);
        return b.join("")
    }

    function Gk() {}

    function Fk(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (A(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), Fk(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Hk(d, c), c.push(":"), Fk(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Hk(b, c);
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
    var Ik = {
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
        Jk = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function Hk(a, b) {
        b.push('"', a.replace(Jk, function(c) {
            var d = Ik[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Ik[c] = d);
            return d
        }), '"')
    };

    function Kk() {
        var a = {
            notify: /^expandable-xpc-ready$/
        };
        this.j = this.l = null;
        Xa(a) ? this.j = a : this.l = a
    }
    Kk.prototype.getVerifier = function(a) {
        return this.l ? this.l[a] : null
    };
    Kk.prototype.getSchema = function(a) {
        return this.j ? this.j(a) : null
    };
    Kk.prototype.doesReturnAnotherSchema = function() {
        return this.j ? !0 : !1
    };

    function Lk(a, b, c, d) {
        function e(g) {
            try {
                var h = JSON.parse(g.data)
            } catch (k) {
                return
            }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
        }
        d = void 0 === d ? null : d;
        Q(a, "message", e);
        var f = !1;
        return function() {
            var g = !1;
            f || (f = !0, g = Jg(a, "message", e));
            return g
        }
    }

    function Mk(a, b, c, d) {
        var e = Lk(a, b, Ib(c, function() {
            return e()
        }), void 0 === d ? null : d)
    }

    function Nk() {}
    D(Nk, Error);

    function Ok(a, b, c, d, e) {
        if (A(a)) {
            var f = a;
            for (var g = 0; g < a.length; g++) a[g] = Ok(a[g], b, c, d, e)
        } else if (B(a)) {
            if (b.doesReturnAnotherSchema())
                if (f = b.getSchema(a)) {
                    if (b = f, b.doesReturnAnotherSchema()) return Ok(a, b, c, d, e)
                } else throw new Nk("in_sc", c ? c : "root", a);
            f = {};
            for (g in a)
                if (Object.prototype.hasOwnProperty.call(a, g)) {
                    d = b.getVerifier(g);
                    c = a[g];
                    var h = b;
                    if (d) {
                        var k = d.predicate || d;
                        if (Xa(k)) {
                            h = k(c);
                            if (!h) {
                                if (!d || !d.nullOnInvalid) throw new Nk("sm", g, c);
                                e && (e[g] = !0);
                                f[g] = null;
                                continue
                            }
                            if (h instanceof Kk) d = null;
                            else {
                                f[g] = c;
                                continue
                            }
                        }
                    } else if (!B(c)) continue;
                    f[g] = Ok(c, h, g, d, e)
                }
        } else if (f = a, b = d ? d.predicate || d : void 0, b instanceof RegExp && !b.test("string" === typeof a || void 0 == a ? a : String(a)) || Xa(b) && !b(a)) {
            if (!d || !d.nullOnInvalid) throw new Nk("sm", c, a);
            e && (e[c] = !0);
            f = null
        }
        return f
    }

    function Pk(a, b) {
        var c = Qk;
        Lk(a, "ct", function(d, e) {
            try {
                var f = Ok(d, c, null, null, null);
                b(f, e)
            } catch (g) {
                if (!(g instanceof Nk)) throw g;
            }
        })
    }

    function Rk(a, b, c, d, e) {
        if (!(0 >= e) && (c.googMsgType = b, a.postMessage(Ek(c), d), a = a.frames))
            for (var f = 0; f < a.length; ++f) 1 < e && Rk(a[f], b, c, d, --e)
    };
    var Qk = new Kk;

    function Sk(a, b, c, d) {
        Dg(d.origin, gh) && "expandable-xpc-ready" == c.notify && Tk(a, b)
    }

    function Tk(a, b) {
        var c = a.ib;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.ha,
            f: a.vd,
            g: a.Ic,
            h: a.ad,
            i: void 0
        });
        x.setTimeout(W(220, mi(fb(function(d) {
            Hf(c.document, d)
        }, b))), 0)
    };
    var Uk = {
            ve: "google_ads_preview",
            df: "google_mc_lab",
            nc: "google_anchor_debug",
            mc: "google_bottom_anchor_debug",
            Kf: "google_ifsl_debug",
            oc: "google_ia_debug",
            If: "google_scr_debug",
            Nf: "google_ia_debug_allow_onclick",
            jg: "googleads",
            qc: "google_pedestal_debug",
            yg: "google_resize_debug",
            Gg: "google_shoppable_images_debug",
            Hg: "google_shoppable_images_cookie",
            Ig: "google_shoppable_images_forced",
            rc: "google_responsive_slot_debug",
            Dg: "google_responsive_slot_preview",
            Cg: "google_responsive_dummy_ad"
        },
        Vk = {},
        Wk = (Vk.google_bottom_anchor_debug = 1, Vk.google_anchor_debug = 2, Vk.google_ia_debug = 8, Vk.google_resize_debug = 16, Vk.google_ifsl_debug = 32, Vk.google_scr_debug = 9, Vk.googleads = 2, Vk.google_pedestal_debug = 30, Vk);
    var Xk = {
        oc: 1,
        ye: 2,
        Yg: 3,
        sc: 4,
        rc: 6
    };

    function Yk(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Zk(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Zk(a) {
        var b = "";
        S(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    }

    function $k() {
        var a = x.location,
            b = !1;
        S(Uk, function(c) {
            Yk(a, c) && (b = !0)
        });
        return b
    }

    function al(a, b) {
        switch (a) {
            case 1:
                return Yk(b, "google_ia_debug");
            case 2:
                return Yk(b, "google_bottom_anchor_debug");
            case 3:
                return Yk(b, "google_anchor_debug") || Yk(b, "googleads");
            case 4:
                return Yk(b, "google_scr_debug");
            case 6:
                return Yk(b, "google_responsive_slot_debug")
        }
        return !1
    };

    function bl() {
        this.C = this.C;
        this.G = this.G
    }
    bl.prototype.C = !1;

    function cl(a) {
        a.C || (a.C = !0, a.L())
    }
    bl.prototype.L = function() {
        if (this.G)
            for (; this.G.length;) this.G.shift()()
    };

    function dl() {
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
        this.floatingAdsStacking = new el
    }

    function fl(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new el) : a.google_reactive_ads_global_state = new dl;
        return a.google_reactive_ads_global_state
    }

    function el() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var gl = 728 * 1.38;

    function hl(a) {
        return a != a.top ? 512 : 0
    }

    function il(a, b) {
        return (a = jl(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    }

    function kl(a) {
        var b = jl(a).clientWidth;
        a = a.innerWidth;
        return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
    }

    function jl(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function ll(a) {
        return jl(a).clientHeight
    }

    function ml(a, b) {
        var c = jl(a);
        return b ? c.scrollHeight == ll(a) ? c.offsetHeight : c.scrollHeight : c.offsetHeight
    }

    function nl(a, b) {
        return a.adCount ? 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) && 27 != b && 26 != b ? 1 <= a : !1 : !1
    }

    function ol(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function pl(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function ql(a) {
        return void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function rl(a) {
        var b = {},
            c;
        A(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                var d = c[a];
                if ("key" in d && "value" in d) {
                    var e = d.value;
                    b[d.key] = null == e ? null : String(e)
                }
            }
        return b
    }

    function sl(a, b, c, d, e) {
        gj(c, b, {
            c: e.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    };

    function tl(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        bl.call(this);
        var e = this;
        this.j = a;
        this.aa = b;
        this.wc = c;
        this.vc = d;
        this.ea = {};
        this.ga = tk(this.aa, 168, function(f, g) {
            a: {
                try {
                    if (!e.da(g.origin)) break a
                } catch (l) {
                    break a
                }
                var h = f.msg_type,
                    k;
                "string" === typeof h && (k = e.ea[h]) && k.call(e, f, g)
            }
        });
        this.zb = tk(this.aa, 169, function(f, g) {
            return sl(e.j, "ras::xsf", e.wc, f, g)
        });
        this.D = [];
        this.ua(this.ea);
        this.D.push(Lk(this.j, "sth", this.ga, this.zb))
    }
    ka(tl, bl);
    tl.prototype.da = function(a) {
        return Dg(a, this.vc)
    };
    tl.prototype.L = function() {
        for (var a = u(this.D), b = a.next(); !b.done; b = a.next()) b = b.value, b();
        this.D.length = 0;
        bl.prototype.L.call(this)
    };

    function ul(a) {
        tl.call(this, a, vk, ej, gh);
        this.j = a
    }
    ka(ul, tl);

    function vl(a, b) {
        this.m = a;
        this.o = b;
        this.l = 0;
        this.j = null
    }
    vl.prototype.get = function() {
        if (0 < this.l) {
            this.l--;
            var a = this.j;
            this.j = a.next;
            a.next = null
        } else a = this.m();
        return a
    };

    function wl(a, b) {
        a.o(b);
        100 > a.l && (a.l++, b.next = a.j, a.j = b)
    };

    function xl(a) {
        x.setTimeout(function() {
            throw a;
        }, 0)
    }
    var yl;

    function zl() {
        var a = x.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !G("Presto") && (a = function() {
            var e = jf(document, "IFRAME");
            e.style.display = "none";
            Cd(e);
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(qd(xd));
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = cb(function(k) {
                if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !dd()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Fb;
                    c.Fb = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Fb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in jf(document, "SCRIPT") ? function(e) {
            var f = jf(document, "SCRIPT");
            f.onreadystatechange = function() {
                f.onreadystatechange = null;
                f.parentNode.removeChild(f);
                f = null;
                e();
                e = null
            };
            document.documentElement.appendChild(f)
        } : function(e) {
            x.setTimeout(e, 0)
        }
    };

    function Al() {
        this.l = this.j = null
    }
    var Cl = new vl(function() {
        return new Bl
    }, function(a) {
        a.reset()
    });
    Al.prototype.add = function(a, b) {
        var c = Cl.get();
        c.set(a, b);
        this.l ? this.l.next = c : this.j = c;
        this.l = c
    };

    function Dl() {
        var a = El,
            b = null;
        a.j && (b = a.j, a.j = a.j.next, a.j || (a.l = null), b.next = null);
        return b
    }

    function Bl() {
        this.next = this.l = this.j = null
    }
    Bl.prototype.set = function(a, b) {
        this.j = a;
        this.l = b;
        this.next = null
    };
    Bl.prototype.reset = function() {
        this.next = this.l = this.j = null
    };

    function Fl(a, b) {
        Gl || Hl();
        Il || (Gl(), Il = !0);
        El.add(a, b)
    }
    var Gl;

    function Hl() {
        if (x.Promise && x.Promise.resolve) {
            var a = x.Promise.resolve(void 0);
            Gl = function() {
                a.then(Jl)
            }
        } else Gl = function() {
            var b = Jl;
            !Xa(x.setImmediate) || x.Window && x.Window.prototype && !G("Edge") && x.Window.prototype.setImmediate == x.setImmediate ? (yl || (yl = zl()), yl(b)) : x.setImmediate(b)
        }
    }
    var Il = !1,
        El = new Al;

    function Jl() {
        for (var a; a = Dl();) {
            try {
                a.j.call(a.l)
            } catch (b) {
                xl(b)
            }
            wl(Cl, a)
        }
        Il = !1
    };

    function Kl(a) {
        this.j = 0;
        this.C = void 0;
        this.o = this.l = this.m = null;
        this.v = this.B = !1;
        if (a != Ra) try {
            var b = this;
            a.call(void 0, function(c) {
                Ll(b, 2, c)
            }, function(c) {
                Ll(b, 3, c)
            })
        } catch (c) {
            Ll(this, 3, c)
        }
    }

    function Ml() {
        this.next = this.context = this.l = this.m = this.j = null;
        this.o = !1
    }
    Ml.prototype.reset = function() {
        this.context = this.l = this.m = this.j = null;
        this.o = !1
    };
    var Nl = new vl(function() {
        return new Ml
    }, function(a) {
        a.reset()
    });

    function Ol(a, b, c) {
        var d = Nl.get();
        d.m = a;
        d.l = b;
        d.context = c;
        return d
    }

    function Pl() {
        var a, b, c = new Kl(function(d, e) {
            a = d;
            b = e
        });
        return new Ql(c, a, b)
    }
    Kl.prototype.then = function(a, b, c) {
        return Rl(this, Xa(a) ? a : null, Xa(b) ? b : null, c)
    };
    Kl.prototype.$goog_Thenable = !0;

    function Sl(a, b) {
        Rl(a, null, b, void 0)
    }
    Kl.prototype.cancel = function(a) {
        if (0 == this.j) {
            var b = new Tl(a);
            Fl(function() {
                Ul(this, b)
            }, this)
        }
    };

    function Ul(a, b) {
        if (0 == a.j)
            if (a.m) {
                var c = a.m;
                if (c.l) {
                    for (var d = 0, e = null, f = null, g = c.l; g && (g.o || (d++, g.j == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.j && 1 == d ? Ul(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : Vl(c), Wl(c, e, 3, b)))
                }
                a.m = null
            } else Ll(a, 3, b)
    }

    function Xl(a, b) {
        a.l || 2 != a.j && 3 != a.j || Yl(a);
        a.o ? a.o.next = b : a.l = b;
        a.o = b
    }

    function Rl(a, b, c, d) {
        var e = Ol(null, null, null);
        e.j = new Kl(function(f, g) {
            e.m = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (l) {
                    g(l)
                }
            } : f;
            e.l = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    void 0 === k && h instanceof Tl ? g(h) : f(k)
                } catch (l) {
                    g(l)
                }
            } : g
        });
        e.j.m = a;
        Xl(a, e);
        return e.j
    }
    Kl.prototype.G = function(a) {
        this.j = 0;
        Ll(this, 2, a)
    };
    Kl.prototype.F = function(a) {
        this.j = 0;
        Ll(this, 3, a)
    };

    function Ll(a, b, c) {
        if (0 == a.j) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.j = 1;
            a: {
                var d = c,
                    e = a.G,
                    f = a.F;
                if (d instanceof Kl) {
                    Xl(d, Ol(e || Ra, f || null, a));
                    var g = !0
                } else {
                    if (d) try {
                        var h = !!d.$goog_Thenable
                    } catch (l) {
                        h = !1
                    } else h = !1;
                    if (h) d.then(e, f, a), g = !0;
                    else {
                        if (B(d)) try {
                            var k = d.then;
                            if (Xa(k)) {
                                Zl(d, k, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (l) {
                            f.call(a, l);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
            }
            g || (a.C = c, a.j = b, a.m = null, Yl(a), 3 != b || c instanceof Tl || $l(a, c))
        }
    }

    function Zl(a, b, c, d, e) {
        function f(k) {
            h || (h = !0, d.call(e, k))
        }

        function g(k) {
            h || (h = !0, c.call(e, k))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (k) {
            f(k)
        }
    }

    function Yl(a) {
        a.B || (a.B = !0, Fl(a.D, a))
    }

    function Vl(a) {
        var b = null;
        a.l && (b = a.l, a.l = b.next, b.next = null);
        a.l || (a.o = null);
        return b
    }
    Kl.prototype.D = function() {
        for (var a; a = Vl(this);) Wl(this, a, this.j, this.C);
        this.B = !1
    };

    function Wl(a, b, c, d) {
        if (3 == c && b.l && !b.o)
            for (; a && a.v; a = a.m) a.v = !1;
        if (b.j) b.j.m = null, am(b, c, d);
        else try {
            b.o ? b.m.call(b.context) : am(b, c, d)
        } catch (e) {
            bm.call(null, e)
        }
        wl(Nl, b)
    }

    function am(a, b, c) {
        2 == b ? a.m.call(a.context, c) : a.l && a.l.call(a.context, c)
    }

    function $l(a, b) {
        a.v = !0;
        Fl(function() {
            a.v && bm.call(null, b)
        })
    }
    var bm = xl;

    function Tl(a) {
        gb.call(this, a)
    }
    D(Tl, gb);
    Tl.prototype.name = "cancel";

    function Ql(a, b, c) {
        this.j = a;
        this.resolve = b;
        this.reject = c
    };

    function Y(a, b) {
        a = void 0 === a ? null : a;
        b = void 0 === b ? null : b;
        var c = void 0 === c ? [] : c;
        var d = void 0 === d ? [] : d;
        if (a && b || !a && !b) throw Error("Invalid model");
        this.nodeType = a ? 0 : 1;
        this.tagName = (a || "DIV").toString();
        this.text = b || "";
        this.attributes = c;
        this.children = d;
        this.j = Pl()
    }

    function cm(a, b, c) {
        a: {
            switch (b) {
                case "aria-hidden":
                case "class":
                case "dir":
                case "href":
                case "id":
                case "src":
                case "target":
                    var d = !0;
                    break a
            }
            d = !1
        }
        if (!d) throw Error("Unsupported attr");a.attributes.push([b, c.toString()]);
        return a
    }

    function dm(a, b) {
        a.children.push(b);
        return a
    }

    function em(a, b) {
        a.j.j.then(b);
        return a
    }
    Y.prototype.create = function(a, b) {
        switch (this.nodeType) {
            case 0:
                a = a.createElement(this.tagName.toString());
                for (var c = u(this.attributes), d = c.next(); !d.done; d = c.next()) {
                    d = u(d.value);
                    var e = d.next().value;
                    d = d.next().value;
                    switch (e) {
                        case "aria-hidden":
                        case "class":
                        case "dir":
                        case "id":
                        case "target":
                            a.setAttribute(e, d);
                            break;
                        case "href":
                            e = a;
                            var f = Bk();
                            d = d instanceof E || !Wh.test(d) ? d : new E(vc, d);
                            Xh(d, f);
                            d = d instanceof E ? d : Gc(d);
                            e.href = Bc(d);
                            break;
                        case "src":
                            e = a;
                            Xh(d, Bk());
                            d = d instanceof E ? d : Gc(d, /^data:image\//i.test(d));
                            e.src = Bc(d);
                            break;
                        default:
                            throw Error("Bad attr");
                    }
                }
                break;
            case 1:
                a = a.createTextNode(this.text);
                break;
            default:
                throw Error("Bad nodeType");
        }
        b.appendChild(a);
        this.j.resolve(a);
        return a
    };

    function fm(a, b, c) {
        c = u(c);
        for (var d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = d.create(a, b);
            fm(a, e, d.children)
        }
    };

    function gm(a, b, c, d, e, f) {
        bl.call(this);
        this.ha = a;
        this.status = 1;
        this.j = b;
        this.l = c;
        this.I = d;
        this.H = !!e;
        this.o = Math.random();
        this.v = {};
        this.m = null;
        this.B = cb(this.wd, this);
        this.F = f
    }
    ka(gm, bl);
    p = gm.prototype;
    p.wd = function(a) {
        if (a.origin === this.l && (this.H || a.source == this.j)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (B(b) && (a = b.i, b.c === this.ha && a != this.o)) {
                if (2 !== this.status) try {
                    this.status = 2, hm(this), this.m && (this.m(), this.m = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || B(b)) && this.v.hasOwnProperty(a)) this.v[a](b)
            }
        }
    };

    function hm(a) {
        var b = {};
        b.c = a.ha;
        b.i = a.o;
        a.F && (b.e = a.F);
        a.j.postMessage(Ek(b), a.l)
    }
    p.Yb = function() {
        if (1 === this.status) {
            try {
                this.j.postMessage && hm(this)
            } catch (a) {}
            window.setTimeout(cb(this.Yb, this), 50)
        }
    };
    p.connect = function(a) {
        a && (this.m = a);
        Q(window, "message", this.B);
        this.I && this.Yb()
    };
    p.Ob = function(a, b) {
        var c = {};
        c.c = this.ha;
        c.i = this.o;
        c.s = a;
        c.p = b;
        try {
            this.j.postMessage(Ek(c), this.l)
        } catch (d) {}
    };
    p.L = function() {
        this.status = 3;
        Jg(window, "message", this.B);
        bl.prototype.L.call(this)
    };

    function im(a, b, c, d, e) {
        gm.call(this, a, b, c, d);
        this.D = e
    }
    ka(im, gm);
    im.prototype.Ob = function(a, b) {
        jm(this, a, b)
    };

    function jm(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = {},
            e = (d.c = a.ha, d.i = a.o, d.s = b, d.p = c, d);
        a.D && (e.msg_type = a.D);
        H ? x.setTimeout(function() {
            a.j.postMessage(JSON.stringify(e), a.l)
        }, 0) : a.j.postMessage(JSON.stringify(e), a.l)
    };

    function km(a, b) {
        if (!b.source || !Dg(b.origin, gh)) throw X("mcca", {
            context: "badinit"
        }), Error("Bad eventData");
        bl.call(this);
        var c = this;
        this.j = new im(a, b.source, b.origin, !1);
        this.j.connect();
        setTimeout(function() {
            jm(c.j, "apmc:bc:cr", {})
        }, 50)
    }
    ka(km, bl);
    km.prototype.L = function() {
        cl(this.j);
        bl.prototype.L.call(this)
    };

    function lm(a) {
        ul.call(this, a);
        this.v = this.l = this.o = this.m = null;
        this.F = this.B = !1
    }
    ka(lm, ul);

    function mm(a, b, c) {
        if (a.m && a.m.j) a.m.j.v[b] = c;
        else throw Error("register failed");
    }

    function nm(a, b, c) {
        if (a.m && a.m.j) a.m.j.Ob(b, c);
        else throw Error("send failed");
    }
    p = lm.prototype;
    p.dd = function(a, b) {
        var c = this;
        b.source && ui(b.source) && !this.m && (this.m = new km("mta-ch", b), mm(this, "show-lbx", cb(this.Ac, this)), mm(this, "chk-lbx", cb(this.pd, this)), mm(this, "hide-lbx", function() {
            om(c)
        }))
    };
    p.Ac = function(a) {
        var b = this;
        if (!this.j.document.getElementById("mta-lbx")) {
            this.l = jf(document, "IFRAME");
            this.l.setAttribute("id", "mta-lbx");
            a = cb(this.zc, this, a);
            Q(this.l, "load", a);
            this.v = fb(Jg, this.l, "load", a);
            this.j.document.body.appendChild(this.l);
            if (this.o["d-elbbi"]) {
                this.j.history.pushState(null, "", "#");
                this.B = !0;
                var c = function() {
                    b.B = !1;
                    om(b, 6);
                    Jg(b.j, "popstate", c)
                };
                Q(this.j, "popstate", c)
            }
            a = {};
            X("gdn::mta-lbx", (a.exit = 0, a), 1)
        }
    };
    p.zc = function() {
        function a() {
            om(b, 2)
        }
        var b = this;
        this.v && this.v();
        uh(this.l, {
            display: "none",
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "0px",
            border: "0px",
            margin: "0px"
        });
        Bh(Xc(F("body", {
            margin: "0px"
        }), F("#fe", {
            transition: "opacity 0.25s linear",
            opacity: "0"
        }), F("#fe.show", {
            opacity: "1"
        }), F(".hcb", {
            "float": "right"
        }), F('[dir="rtl"] .hcb', {
            "float": "left"
        }), F(".mtasw", {
            "background-color": "rgba(0,0,0,0.8)",
            bottom: "0px",
            opacity: "1",
            "overflow-y": "auto",
            position: "absolute",
            top: "0px",
            width: "100%"
        }), F(".mtas", {
            display: "block",
            "font-size": "16px",
            margin: "126px auto 96px auto",
            transition: "margin-top 0.25s linear",
            width: "320px",
            "max-width": "92%"
        }), F(".show .mtas", {
            "margin-top": "96px"
        }), F(".mtas span, .mta-menu span", {
            display: "inline-block"
        }), F(".mtas img", {
            height: "24px",
            "margin-top": "12px",
            width: "24px"
        }), F(".mtas div", {
            display: "block",
            width: "100%"
        }), F(".sh", {
            "background-color": "#4285f4",
            color: "#FFFFFF",
            display: "block",
            width: "100%",
            "border-top-left-radius": "3px",
            "-webkit-border-top-left-radius": "3px",
            "border-top-right-radius": "3px",
            "-webkit-border-top-right-radius": "3px"
        }), F(".sh>div", {
            padding: "24px",
            width: "auto"
        }), F(".sh span", {
            "font-size": "1.25em",
            "font-family": '"Roboto-Light", arial, sans-serif',
            "max-width": "224px"
        }), F(".sh img", {
            margin: "0",
            opacity: "0.4",
            cursor: "pointer"
        }), F(".bsctr", {
            "border-radius": "3px",
            "-webkit-border-radius": "3px",
            "background-color": "#FFFFFF",
            "box-shadow": "0 2px 7px 1px rgba(0,0,0,0.8)"
        }), F(".bs", {
            "border-top": "1px solid rgb(221, 221, 221)",
            padding: "0.8em 0px"
        }), F(".bs a", {
            cursor: "pointer"
        }), F(".bs a", {
            "box-sizing": "border-box",
            display: "block",
            padding: "0 24px",
            width: "100%"
        }), F(".bs a span", {
            color: "rgba(0, 0, 0, 0.54)",
            "font-family": '"Roboto-Medium", arial, sans-serif',
            "font-size": "1em",
            margin: "14px 0",
            "max-width": "224px"
        }), F(".mctr", {
            position: "absolute",
            top: "15px",
            left: "15px"
        }), F(".mbs", {
            padding: "5px 0",
            margin: "0",
            "box-shadow": "0 0 3px 3px rgba(0,0,0,0.2)"
        }), F(".mbs img", {
            height: "21px",
            margin: "3px 14px 0 0"
        }), F(".mbs a", {
            "box-sizing": "border-box",
            display: "table",
            padding: "0 14px",
            width: "100%"
        }), F(".mbs a div", {
            display: "table-cell",
            "vertical-align": "middle"
        }), F("div.ictr", {
            width: "35px"
        }), F(".mbs a span", {
            display: "inline-block",
            color: "rgba(0, 0, 0, 0.54)",
            "font-family": '"Roboto-Medium", arial, sans-serif',
            "font-size": "1em",
            margin: "11px 0",
            "max-width": "224px"
        })), this.l.contentDocument.head);
        this.l.contentDocument.head.appendChild(oi(this.l.contentDocument));
        var c = em(cm(cm(cm(new Y("IMG"), "class", "hcb"), "id", "ex"), "src", this.o["d-pgh"] + "/images/icons/material/system/2x/close_white_24dp.png"), function(k) {
            Q(k, "click", a)
        });
        c = dm(cm(new Y("DIV"), "class", "sh"), dm(dm(new Y("DIV"), dm(new Y("SPAN"), new Y(null, this.o["d-lht"]))), c));
        for (var d = cm(cm(new Y("DIV"), "id", "fb"), "class", "bs"), e = this.o["d-oa"], f = {
                na: 0
            }; f.na < e.length; f = {
                na: f.na
            }, ++f.na) {
            var g = e[f.na];
            dm(d, em(dm(new Y("A"), dm(new Y("SPAN"), new Y(null, g))), function(k) {
                return function(l) {
                    Q(l, "click", function() {
                        var m = {};
                        nm(b, "lbx-exit", (m.foi = k.na, m));
                        om(b, 1)
                    })
                }
            }(f)))
        }
        c = dm(dm(cm(new Y("DIV"), "class", "bsctr"), c), d);
        if (this.o["d-els"]) {
            var h = function() {
                om(b, 4)
            };
            d = em(dm(cm(new Y("DIV"), "class", "bs"), dm(dm(cm(cm(cm(new Y("A"), "id", "as"), "target", "_blank"), "href", "//www.google.com/settings/ads/anonymous"), dm(new Y("SPAN"), new Y(null, this.o["d-sbt"]))), cm(cm(new Y("IMG"), "class", "hcb"), "src", this.o["d-siu"]))), function(k) {
                Q(k, "click", function() {
                    return setTimeout(h, 0)
                })
            });
            dm(c, d)
        }
        c = em(dm(cm(new Y("DIV"), "id", "fe"), dm(cm(cm(new Y("DIV"), "id", "sbg"), "class", "mtasw"), dm(cm(new Y("DIV"), "class", "mtas"), em(dm(cm(new Y("DIV"), "id", "sv"), c), function(k) {
            Q(k, "click", function(l) {
                l.stopPropagation ? l.stopPropagation() : l.cancelBubble = !0
            })
        })))), function(k) {
            x.setTimeout(function() {
                k.className = "show"
            }, 50)
        });
        fm(this.l.contentDocument, this.l.contentDocument.body, [c]);
        Q(this.l.contentDocument, "click", function() {
            om(b, 3)
        });
        uh(this.l, {
            height: "100%",
            display: "block",
            "z-index": "2147483647"
        });
        nm(this, "lbx-dis", {})
    };

    function om(a, b) {
        b = void 0 === b ? null : b;
        lf(a.l);
        a.l = null;
        nm(a, "lbx-hid", {});
        a.B && a.j.history.back();
        if (b && !a.F) {
            var c = {};
            X("gdn::mta-lbx", (c.exit = b, c), 1);
            a.F = !0
        }
    }
    p.pd = function(a) {
        La(a) || (this.o = a.ufd, nm(this, "lbx-rdy", {}))
    };
    p.L = function() {
        this.m && cl(this.m);
        lf(this.l);
        this.l = null;
        ul.prototype.L.call(this)
    };
    p.ua = function(a) {
        a["mta-lbx"] = this.dd
    };
    var pm = null;

    function qm(a) {
        this.j = a
    }

    function rm(a, b) {
        a = parseFloat(a.j[b]);
        return isNaN(a) ? 0 : a
    }

    function sm(a, b) {
        return Uf(a.j[b])
    }

    function tm(a) {
        pm || (pm = new qm(a.google_t12n_vars || {}));
        return pm
    };
    var um = null;

    function vm(a, b) {
        for (var c = 0, d = a, e = 0; a && a != a.parent;)
            if (a = a.parent, e++, Df(a)) d = a, c = e;
            else if (b) break;
        return {
            ca: d,
            level: c
        }
    }

    function wm() {
        um || (um = vm(x, !0).ca);
        return um
    };

    function xm(a) {
        jj.call(this, a);
        this.dfltBktExt = this.j;
        this.lrsExt = this.l
    }
    ka(xm, jj);

    function ym() {
        this.S = {}
    }

    function zm() {
        var a = T(),
            b = Rh(a);
        if (b) return (b = b || Rh()) ? (a = b.pageViewId, b = b.clientId, "string" === typeof b && (a += b.replace(/\D/g, "").substr(0, 6))) : a = null, +a;
        a = vm(a, !1).ca;
        (b = a.google_global_correlator) || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        return b
    }

    function Am() {
        if (Bm) return Bm;
        var a = Uh() || T(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Bm = b : a.google_persistent_state_async = Bm = new ym
    }

    function Cm(a, b, c) {
        b = Dm[b] || "google_ps_" + b;
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function Em(a, b, c) {
        return a.S[Dm[b] || "google_ps_" + b] = c
    }

    function Fm() {
        var a = Am();
        return Cm(a, 20, {})
    }
    var Bm = null,
        Gm = {},
        Dm = (Gm[8] = "google_prev_ad_formats_by_region", Gm[9] = "google_prev_ad_slotnames_by_region", Gm);

    function Hm() {
        this.j = function() {
            return []
        };
        this.l = function() {
            return []
        }
    }

    function Im() {
        var a = Hm.U(),
            b = Jm;
        a.j = Mh(Ih, b, function() {
            return []
        });
        a.l = Mh(Jh, b, function() {
            return []
        })
    }
    Sa(Hm);
    var Km = {
            Ef: 5,
            rf: 7,
            Pf: 17,
            Be: 41,
            tg: 62,
            dg: 67,
            wg: 82,
            xg: 83,
            ig: 87,
            Ne: 89,
            bf: 103,
            Gf: 106,
            gh: 107,
            vf: 108,
            eg: 114,
            Gd: 124,
            ah: 126,
            Hd: 128,
            Jf: 132,
            vg: 134,
            Tf: 138,
            hg: 139
        },
        Lm = null;

    function Mm(a) {
        try {
            return !!a && Nd(!0)
        } catch (b) {
            return !1
        }
    }

    function Nm() {
        if (Mm(Lm)) return !0;
        var a = Am();
        if (a = Cm(a, 3, null)) {
            var b = void 0 === b ? !0 : b;
            if (a && a.dfltBktExt && a.lrsExt) {
                var c = new xm;
                c.j = a.dfltBktExt;
                c.dfltBktExt = c.j;
                c.l = a.lrsExt;
                c.lrsExt = c.l;
                b && (c.m = !0);
                a = c
            } else a = null;
            a || (a = new xm, b = {
                context: "ps::gpes::cf",
                url: T().location.href
            }, X("jserror", b))
        }
        b = a;
        return Mm(b) ? (Lm = b, !0) : !1
    }

    function Om(a) {
        if (!Nm()) {
            var b = lj();
            a(b);
            b.m = !0
        }
    }

    function lj() {
        if (Nm()) return Lm;
        var a = Am(),
            b = new xm(Pf(Km));
        return Lm = Em(a, 3, b)
    }
    var Pm = null;

    function Qm() {
        Pm || (Pm = kj());
        return Pm
    }

    function Rm(a) {
        var b = Hm.U().l().join(),
            c = Qm();
        c && (b += (b ? "," : "") + dk(c).join());
        b && (a.eid = 50 < b.length ? b.substring(0, 50) + "T" : b)
    }
    var Sm = {
            W: "618018085",
            $: "618018086"
        },
        Tm = {
            yb: "21060078",
            W: "21060079"
        },
        Um = {},
        Vm = {
            NONE: "480596784",
            Mf: "480596785",
            yf: "21063355"
        },
        Wm = {
            W: "370204018",
            pc: "370204019",
            uc: "370204052"
        },
        Xm = {
            W: "20040010",
            $: "20040011"
        },
        Ym = {
            W: "423550200",
            $: "423550201"
        },
        Zm = T();
    hj = gh && !!Zm.google_disable_experiments;

    function $m(a) {
        a = void 0 === a ? Qm() : a;
        return $h(dk(a), function(b) {
            return !!Um[b]
        })
    }

    function an(a) {
        a = void 0 === a ? Qm() : a;
        return $h(dk(a), function(b) {
            return !Um[b]
        })
    };

    function bn(a, b) {
        var c = Hm.U().j(13).concat(Hm.U().j(11)),
            d = a.A,
            e = wi(d);
        e.eids = w(e.eids || []).concat(w(mb(c, String)));
        kb(xi(d), function(f) {
            nj(b, f)
        });
        c = tm(a.pubWin);
        bk(b, ["551"], 0, 108);
        ck(b, 108) && (kh = jh);
        d = ["42631002", "42631003"];
        bk(b, d, rm(c, 22), 17);
        d = ["21062174", "21062175"];
        bk(b, d, rm(c, 129), 126);
        d = ["26835105", "26835106"];
        bk(b, d, rm(c, 24), 41);
        (d = Nd("")) && nj(b, d);
        d = Sm;
        d = [d.W, d.$];
        bk(b, d, rm(c, 28), 67);
        d = Tm;
        d = [d.yb, d.W];
        bk(b, d, rm(c, 29), 87);
        d = Vm;
        d = Pb(d);
        bk(b, d, rm(c, 126), 124);
        d = Wm;
        d = [d.W, d.pc, d.uc];
        bk(b, d, rm(c, 103), 114);
        d = Xm;
        d = [d.$, d.W];
        bk(b, d, rm(c, 162), 134);
        d = Ym;
        d = [d.$, d.W];
        bk(b, d, rm(c, 177), 139);
        a.j && cn(b, c, a.j)
    }

    function cn(a, b, c) {
        var d = ["410075105", "410075106"];
        if (c = fl(c)) switch (bk(a, d, rm(b, 155), 132)) {
            case "410075105":
                c.improveCollisionDetection = 1;
                break;
            case "410075106":
                c.improveCollisionDetection = -1
        }
    };

    function dn(a, b) {
        b = void 0 === b ? x : b;
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new Xe(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function en(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function fn(a, b) {
        try {
            return (void 0 === b ? 0 : b) ? (new Ye(a.innerWidth, a.innerHeight)).round() : df(a || window).round()
        } catch (c) {
            return new Ye(-12245933, -12245933)
        }
    }

    function gn(a, b) {
        var c;
        var d;
        c = (d = (d = Rh()) && (c = d.initialLayoutRect) && "number" === typeof c.top && "number" === typeof c.left && "number" === typeof c.width && "number" === typeof c.height ? new rh(c.left, c.top, c.width, c.height) : null) ? new Xe(d.left, d.top) : (c = Sh()) && B(c.rootBounds) ? new Xe(c.rootBounds.left + c.boundingClientRect.left, c.rootBounds.top + c.boundingClientRect.top) : null;
        if (c) return c;
        try {
            var e = a.j,
                f = new Xe(0, 0),
                g = af(b);
            var h = g ? ff(g) : window;
            if (Od(h, "parent")) {
                a = b;
                do {
                    if (h == e) var k = Ah(a);
                    else {
                        var l = zh(a);
                        k = new Xe(l.left, l.top)
                    }
                    b = k;
                    f.x += b.x;
                    f.y += b.y
                } while (h && h != e && h != h.parent && (a = h.frameElement) && (h = h.parent))
            }
            return f
        } catch (m) {
            return new Xe(-12245933, -12245933)
        }
    };

    function hn(a) {
        J(this, a, jn, null)
    }
    D(hn, I);
    var jn = [15];

    function kn(a) {
        J(this, a, null, null)
    }
    D(kn, I);

    function ln(a) {
        J(this, a, null, null)
    }
    D(ln, I);
    var mn = parseInt("2019", 10),
        nn = isNaN(mn) ? 2012 : mn;

    function on(a, b, c) {
        c || (c = kh ? "https" : "http");
        x.location && "https:" == x.location.protocol && "http" == c && (c = "https");
        return [c, "://", a, b].join("")
    }

    function pn(a, b, c) {
        a = on(a, b, c);
        Oh(182) && 2012 < nn && (a = a.replace(new RegExp(".js".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), ("_fy" + nn + ".js").replace(/\$/g, "$$$$")));
        Oh(202) && (a += (0 < a.indexOf("?") ? "&" : "?") + "cache=bust");
        return a
    };
    var qn = null;

    function rn() {
        if (!gh) return !1;
        if (null != qn) return qn;
        qn = !1;
        try {
            var a = ti(x);
            a && -1 != a.location.hash.indexOf("google_logging") && (qn = !0);
            x.localStorage.getItem("google_logging") && (qn = !0)
        } catch (b) {}
        return qn
    }

    function sn(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        x.google_logging_queue || (c = !0, x.google_logging_queue = []);
        x.google_logging_queue.push([a, b]);
        c && rn() && (a = pn(oh(), "/pagead/js/logging_library.js"), Hf(x.document, a))
    };

    function tn(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function un(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function vn(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function wn() {
        var a = xn,
            b = yn;
        if (!(window && Math.random && navigator)) return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId()) return c.getOseId()
            } catch (e) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            if (!0 === c) var d = 2;
            else !1 !== c && (d = Jf([0], a), null == d && ((d = Jf([2], b)) || (d = 3)));
            if (!d) return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };
    var zn = new kk(T());

    function An() {
        var a = T();
        a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || lk(zn))
    }(function() {
        var a = T();
        a && a.document && ("complete" == a.document.readyState ? An() : zn.j && Q(a, "load", function() {
            An()
        }))
    })();
    C();

    function Bn(a, b, c) {
        a && (c ? Q(a, "load", b) : Jg(a, "load", b))
    }

    function Cn() {
        var a = (T() || x).google_osd_amcb;
        return Xa(a) ? a : null
    }

    function Dn(a) {
        var b = !kh;
        return ((void 0 === b ? 0 : b) ? "http:" : "https:") + "//www.googletagservices.com/activeview/js/current/osd.js?cb=" + encodeURIComponent(void 0 === a ? "/r20100101" : a)
    };

    function En(a, b) {
        this.l = b && b.l ? b.l : 0;
        this.m = b ? b.m : "";
        this.j = b && b.j ? b.j : [];
        this.o = !0;
        if (b)
            for (a = 0; a < this.j.length; ++a) this.j[a].o = !0
    }

    function Fn(a) {
        var b = a.o ? T() : x;
        a = Gn;
        b = b || x;
        b.google_osd_loaded ? a = !1 : (Hf(b.document, a), a = b.google_osd_loaded = !0);
        a && bi()
    }
    p = En.prototype;
    p.getNewBlocks = function(a, b) {
        for (var c = this.j.length, d = 0; d < c; d++) {
            var e = this.j[d];
            !e.m && e.j && (e.m = !0, a(e.j, e.B, e.F, e.l, void 0, e.o, e.C, e.G, e.D))
        }
        b && ((T() || x).google_osd_amcb = a)
    };
    p.setupOse = function(a) {
        if (this.getOseId()) return this.getOseId();
        var b = wn();
        if (!b) return 0;
        this.l = b;
        this.m = String(a || 0);
        return this.getOseId()
    };
    p.getOseId = function() {
        return window && Math.random && navigator ? this.l : -1
    };
    p.getCorrelator = function() {
        return this.m
    };
    p.numBlocks = function() {
        return this.j.length
    };
    p.registerAdBlock = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? function() {
            return null
        } : g;
        c = Cn();
        e = ek() || -1;
        f = x.pageYOffset;
        0 <= f || (f = -1);
        c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new Hn(a, b, d, g, e, f), this.j.push(g), Bn(d, g.v, !0), Gn || (Kg("//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=" + b + ("&req=" + a)), Gn = Dn("/r20190131")), Fn(this))
    };
    p.unloadAdBlock = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        var d = this.o ? T() : window;
        y(d.Goog_Osd_UnloadAdBlock) && d.Goog_Osd_UnloadAdBlock(a, b);
        c && (b = Eg(this.j, function(e) {
            return e.j == a
        })) && Bn(a, b.v, !1)
    };
    p.setLoadOsdJsOnPubWindow = function(a) {
        this.o = a
    };

    function In() {
        var a = T(),
            b = a.__google_ad_urls;
        if (!b) return a.__google_ad_urls = new En(a);
        try {
            if (0 <= b.getOseId()) return b
        } catch (c) {}
        try {
            return a.__google_ad_urls = new En(a, b)
        } catch (c) {
            return a.__google_ad_urls = new En(a)
        }
    }
    var Gn = "",
        yn = 0,
        xn = 0;

    function Hn(a, b, c, d, e, f) {
        var g = this;
        d = void 0 === d ? Ra : d;
        this.B = a;
        this.F = b;
        this.j = c;
        this.o = this.m = this.l = !1;
        this.C = d;
        this.G = void 0 === e ? -1 : e;
        this.D = void 0 === f ? -1 : f;
        this.v = function() {
            return g.l = !0
        }
    }
    Na("Goog_AdSense_getAdAdapterInstance", In, void 0);
    Na("Goog_AdSense_OsdAdapter", En, void 0);

    function Jn() {}
    p = Jn.prototype;
    p.getNewBlocks = function() {};
    p.setupOse = function() {};
    p.getOseId = function() {
        return -1
    };
    p.getCorrelator = function() {
        return ""
    };
    p.numBlocks = function() {
        return 0
    };
    p.registerAdBlock = function() {};
    p.unloadAdBlock = function() {};
    p.setLoadOsdJsOnPubWindow = function() {};

    function Kn() {
        var a = T(),
            b = a.__google_ad_urls;
        return b ? b : a.__google_ad_urls = new Jn
    };

    function Ln(a, b, c, d) {
        c = c || a.google_ad_width;
        d = d || a.google_ad_height;
        if (a && a.top == a) return !1;
        var e = b.documentElement;
        if (c && d) {
            var f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
            if (g > 2 * d || f > 2 * c) return !1
        }
        return !0
    }

    function Mn(a, b) {
        S(a, function(c, d) {
            b[d] = c
        })
    }

    function Nn(a) {
        var b = a.location.href;
        if (a == a.top) return {
            url: b,
            lb: !0
        };
        var c = !1,
            d = a.document;
        d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            lb: c
        }
    }

    function On() {
        var a = T();
        if (a == a.top) return 0;
        for (; a && a != a.top && Df(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function Pn(a) {
        ul.call(this, a)
    }
    ka(Pn, ul);
    Pn.prototype.ua = function(a) {
        a["ifsl-load-rec"] = this.l
    };
    Pn.prototype.da = function() {
        return !0
    };
    Pn.prototype.l = function(a, b) {
        if (!b.isHandled_ && (b.isHandled_ = !0, b = (b = fl(this.j).stateForType[32]) ? b : null)) {
            var c = rl(a);
            a = c.ifsl_url;
            var d = c.ifsl_purl,
                e = c.ifsl_t,
                f = c.ifsl_s,
                g = c.ifsl_img,
                h = c.ifsl_qqid,
                k = c.ifsl_gqid;
            c = c.ifsl_pch;
            a && d && e && b.tryAddRecommendation({
                url: a,
                pingUrl: d,
                title: e,
                imageUrl: g,
                snippet: f,
                header: c
            });
            h && k && b.updateReporterParams(h, k)
        }
    };
    var Qn = {
            google: 1,
            googlegroups: 1,
            gmail: 1,
            googlemail: 1,
            googleimages: 1,
            googleprint: 1
        },
        Rn = /(corp|borg)\.google\.com:\d+$/;

    function Sn(a) {
        a = a.google_reactive_ad_format;
        return Rb(Gi, a) ? "" + a : null
    }

    function Tn(a) {
        return !!Sn(a) || null != a.google_pgb_reactive
    }

    function Un(a) {
        a = Sn(a);
        return 26 == a || 27 == a || 30 == a || 16 == a
    };

    function Vn(a) {
        var b = 0;
        try {
            b |= hl(a)
        } catch (c) {
            b |= 32
        }
        return b
    }

    function Wn(a) {
        return !!a.name && -1 != a.name.indexOf("google_ifsl_cifr")
    }

    function Xn(a, b) {
        if (b = Sn(b)) {
            if ("32" == b) return 1;
            if ("30" == b) return 0
        }
        a: {
            for (b = T(); b && Df(b);) {
                if (Wn(b)) {
                    b = !0;
                    break a
                }
                if (b.parent == b) break;
                b = b.parent
            }
            b = !1
        }
        if (b) return 3;
        if (!Df(a)) return 0;
        a = fl(a);
        return a.stateForType[32] ? 2 : a.stateForType[30] ? 4 : 0
    };

    function Yn(a) {
        var b = 0;
        try {
            b |= hl(a), b |= a.getComputedStyle ? 0 : 2097152, b |= il(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    }

    function Zn(a) {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };

    function $n(a) {
        var b = 0;
        try {
            b |= hl(a), b |= a.getComputedStyle ? 0 : 2097152, b |= a.document.querySelectorAll && a.document.querySelector ? 0 : 4194304, b |= il(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var ao = !H && !ed();

    function bo(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (ao && a.dataset) {
            if (!(!G("Android") || kd() || G("Firefox") || G("FxiOS") || cd() || G("Silk") || "adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };

    function co(a, b, c) {
        if (!b) return null;
        var d = jf(document, "INS");
        d.id = "google_pedestal_container";
        d.style.width = "100%";
        d.style.zIndex = "-1";
        if (c) {
            var e = a.getComputedStyle(c),
                f = "";
            if (e && "static" != e.position) {
                var g = c.parentNode.lastElementChild;
                for (f = e.position; g && g != c;) {
                    if ("none" != a.getComputedStyle(g).display) {
                        f = a.getComputedStyle(g).position;
                        break
                    }
                    g = g.previousElementSibling
                }
            }
            if (c = f) d.style.position = c
        }
        b.appendChild(d);
        if (d) {
            var h = a.document;
            f = h.createElement("div");
            f.style.width = "100%";
            f.style.height = "2000px";
            c = ll(a);
            e = h.body.scrollHeight;
            a = a.innerHeight;
            g = h.body.getBoundingClientRect().bottom;
            d.appendChild(f);
            var k = f.getBoundingClientRect().top;
            h = h.body.getBoundingClientRect().top;
            d.removeChild(f);
            f = e;
            e <= a && 0 < c && 0 < g && (f = g - h);
            a = k - h >= .8 * f
        } else a = !1;
        return a ? d : (b.removeChild(d), null)
    }

    function eo(a) {
        var b = 0;
        try {
            b |= hl(a);
            b |= a.getComputedStyle ? 0 : 2097152;
            xf() || (b |= 1048576);
            var c = Math.floor(a.document.body.getBoundingClientRect().width),
                d = rm(tm(a), 79);
            c <= d || (b |= 32768);
            fo(a) && (b |= 33554432)
        } catch (e) {
            b |= 32
        }
        return b
    }

    function fo(a) {
        a = a.document.getElementsByClassName("adsbygoogle");
        for (var b = 0; b < a.length; b++)
            if ("autorelaxed" == bo(a[b])) return !0;
        return !1
    };

    function go(a, b) {
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

    function ho(a, b) {
        return !!a.google_ad_resizable && !a.google_reactive_ad_format && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && si(b) == b
    }

    function io(a, b, c) {
        "rtl" == b ? a.style.marginRight = c : a.style.marginLeft = c
    }

    function jo(a, b, c) {
        a = go(b, a);
        return "rtl" == c ? -a.x : a.x
    };

    function ko() {
        this.j = {};
        this.l = {}
    }
    ko.prototype.set = function(a, b) {
        this.j[a] = b;
        this.l[a] = a
    };
    ko.prototype.get = function(a, b) {
        return y(this.j[a]) ? this.j[a] : b
    };

    function lo(a) {
        var b = [],
            c;
        for (c in a.j) y(a.j[c]) && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    };

    function mo() {
        var a = Pl();
        this.promise = a.j;
        this.resolve = a.resolve
    }

    function no(a, b, c) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        b[a] || (b[a] = new mo, c && c());
        return b[a]
    }

    function oo(a, b, c) {
        return no(a, b, function() {
            Hf(b.document, c)
        }).promise
    };

    function po(a) {
        var b = 0;
        try {
            b |= hl(a);
            var c = Math.min(a.screen.width || 0, a.screen.height || 0);
            b |= c ? 320 > c ? 8192 : 0 : 2048;
            var d;
            if (d = a.navigator) {
                var e = a.navigator.userAgent;
                d = /Firefox/.test(e) || /Android 2/.test(e) || /iPhone OS [34]_/.test(e) || /Windows Phone (?:OS )?[67]/.test(e)
            }
            b |= d ? 1048576 : 0
        } catch (f) {
            b |= 32
        }
        return b
    }

    function qo(a, b) {
        var c = 0;
        try {
            c |= a.innerHeight >= a.innerWidth ? 0 : 8, c |= il(a, gl), c |= kl(a)
        } catch (m) {
            c |= 32
        }
        if (2 == b) {
            var d = a.innerWidth;
            b = fl(a).improveCollisionDetection;
            for (var e = Math.round(a.innerWidth / 320 * 50 + 15), f = [], g = 0; 3 > g; g++)
                for (var h = 0; 3 > h; h++) f.push({
                    x: h / 2 * d,
                    y: g / 2 * e
                });
            a: {
                for (d = 0; d < f.length; d++) {
                    e = a;
                    h = f[d];
                    g = b;
                    var k = e.document;
                    k.elementFromPoint(h.x, h.y);
                    var l = h.x;
                    h = h.y;
                    k.hasOwnProperty("_goog_efp_called_") || (k._goog_efp_called_ = k.elementFromPoint(l, h));
                    if ((k = h = k.elementFromPoint(l, h)) && !(k = "fixed" == yh(h))) {
                        if (g = 1 == g) b: {
                            e = e.document;
                            for (g = h.offsetParent; g && g != e.body; g = g.offsetParent)
                                if ("fixed" == yh(g)) {
                                    g = !0;
                                    break b
                                }
                            g = !1
                        }
                        k = g
                    }
                    if (k) {
                        a = !0;
                        break a
                    }
                }
                a = !1
            }
            a && (c |= 16777216)
        }
        return c
    };

    function ro(a) {
        var b = 0;
        try {
            b |= hl(a), b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        } catch (d) {
            b |= 32
        }
        var c = 0;
        try {
            c |= il(a, gl), c |= kl(a), c |= a.innerHeight >= a.innerWidth ? 0 : 8
        } catch (d) {
            c |= 32
        }
        return b | c
    };

    function so(a) {
        var b = 0;
        try {
            b |= hl(a), b |= kl(a), b |= il(a), b |= a.innerHeight >= a.innerWidth ? 0 : 8, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        } catch (c) {
            b |= 32
        }
        return b
    };

    function to(a, b, c) {
        var d = "script";
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        try {
            Dd(e, b, "preload")
        } catch (f) {
            return
        }
        d && (e.as = d);
        c && e.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(e)
        } catch (f) {}
    };
    var uo = {},
        vo = (uo[16] = 4, uo[27] = 512, uo[26] = 128, uo[32] = 16, uo);

    function wo(a, b) {
        switch (b) {
            case 1:
            case 2:
                return !(po(a) | qo(a, b));
            case 8:
                return 0 == ro(a);
            case 9:
                return !so(a);
            case 32:
                return !!fl(a).wasReactiveAdConfigReceived[32] && 0 == Vn(a);
            case 30:
                return 0 == eo(a);
            case 26:
                return 0 == $n(a) && !0;
            case 27:
                return !Yn(a) && !0;
            default:
                return !1
        }
    }

    function xo(a, b, c) {
        switch (c) {
            case 1:
            case 2:
                return po(a) | qo(a, c);
            case 8:
                return ro(a);
            case 9:
                return so(a);
            case 32:
                return Vn(a);
            case 16:
                return ho(b, a) ? 0 : 8388608;
            case 30:
                return eo(a);
            case 26:
                return $n(a);
            case 27:
                return Yn(a);
            default:
                return 32
        }
    }

    function yo(a, b) {
        b = b.google_reactive_ad_format;
        if (!Rb(Gi, b)) return !1;
        a = ti(a);
        if (!a || !wo(a, b)) return !1;
        a = fl(a);
        if (nl(a, b)) return !1;
        a.adCount[b] || (a.adCount[b] = 0);
        a.adCount[b]++;
        return !0
    }

    function zo(a) {
        return !a.google_reactive_ads_config && Tn(a) && 16 != a.google_reactive_ad_format
    }

    function Ao(a) {
        if (!a.hash) return null;
        var b = null;
        S(Uk, function(c) {
            !b && Yk(a, c) && (b = Wk[c])
        });
        return b
    }

    function Bo(a, b) {
        if (!a.document.getElementById("goog_info_card")) {
            var c = fl(a).tagSpecificState[1] || null;
            c && S(Xk, function(d) {
                !c.debugCardRequested && al(d, a.location) && (c.debugCardRequested = !0, Co(a, function(e) {
                    c.debugCard = e.createDebugCard(d, a, b)
                }))
            })
        }
    }

    function Do(a, b) {
        if (!b) return null;
        var c = fl(b);
        if (!c.wasReactiveAdConfigHandlerRegistered) return null;
        var d = 0;
        S(Gi, function(e) {
            var f = vo[e];
            f && 0 === Eo(a, b, e) && (d |= f)
        });
        c.wasPlaTagProcessed && (d |= 256);
        c.isReactiveTagFirstOnPage && (d |= 1024);
        return d ? "" + d : null
    }

    function Fo(a, b) {
        var c = [];
        S(Gi, function(d) {
            var e = Eo(b, a, d);
            0 !== e && c.push(d + ":" + e)
        });
        return c.join(",") || null
    }

    function Go(a) {
        var b = [],
            c = {};
        S(a, function(d, e) {
            if ((e = Hi[e]) && !c[e]) {
                c[e] = !0;
                if (d) d = 1;
                else if (!1 === d) d = 2;
                else return;
                b.push(e + ":" + d)
            }
        });
        return b.join(",")
    }

    function Ho(a) {
        a = a.overlays;
        if (!a) return "";
        a = a.bottom;
        return "boolean" == typeof a ? a ? "1" : "0" : ""
    }

    function Io(a, b) {
        var c = fl(b);
        if (c.wasReactiveAdConfigHandlerRegistered) return !1;
        S(Gi, function(d) {
            c.wasReactiveAdConfigHandlerRegistered = c.wasReactiveAdConfigHandlerRegistered || !!vo[d] && !Eo(a, b, d)
        });
        c.isReactiveTagFirstOnPage = !!a.google_reactive_tag_first;
        return c.wasReactiveAdConfigHandlerRegistered
    }

    function Eo(a, b, c) {
        if (!b) return 256;
        var d = 0,
            e = fl(b),
            f = nl(e, c);
        if (a.google_reactive_ad_format == c || 26 != c && 27 != c && f) d |= 64;
        var g = !1;
        S(e.reactiveTypeDisabledByPublisher, function(h, k) {
            String(c) === k && (g = !0)
        });
        g && Ao(b.location) !== c && (d |= 128);
        return d | xo(b, a, c)
    }

    function Jo(a, b) {
        if (a) {
            var c = fl(a),
                d = {};
            S(b, function(e, f) {
                (f = Hi[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
            });
            S(Gi, function(e) {
                d[Ji[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
            })
        }
    }

    function Ko(a, b) {
        function c() {
            f || (f = !0, e.elapsed = C() - d, X("rctlib", e, .001))
        }
        var d = C(),
            e = {
                context: a,
                type: "time"
            },
            f = !1,
            g = x.setTimeout(function() {
                c()
            }, 2E4);
        return function(h) {
            x.clearTimeout(g);
            c();
            return b(h)
        }
    }

    function Lo() {
        var a = ri();
        return pn(a, "/pagead/js/" + dh() + "/r20190131/reactive_library.js", jh ? "https" : "http")
    }

    function Mo(a, b) {
        a = W(a, Ko(a, b));
        return oo(1, T(), Lo()).then(a)
    }

    function Co(a, b) {
        b = W(212, b);
        var c = ri();
        c = pn(c, "/pagead/js/" + dh() + "/r20190131/debug_card_library.js", jh ? "https" : "http");
        oo(3, a, c).then(b)
    }

    function No(a) {
        if (!a.adsbygoogle) {
            a.adsbygoogle = [];
            var b = on(ri(), "/pagead/js/adsbygoogle.js");
            Hf(a.document, b)
        }
    }

    function Oo(a, b, c) {
        a.setAttribute("data-adsbygoogle-status", "reserved");
        a.className += " adsbygoogle-noablate";
        No(c);
        c.adsbygoogle.push({
            element: a,
            params: b
        })
    }

    function Po(a, b, c) {
        var d = Ji[a],
            e = {};
        a = b.page_level_pubvars;
        B(a) && Ub(e, a);
        S(b, function(f, g) {
            Hi[g] == d && B(f) && Ub(e, f)
        });
        B(c) && Ub(e, c);
        return e
    }

    function Qo(a, b) {
        Q(a, "load", function() {
            No(a);
            a.adsbygoogle.push(b)
        })
    };
    Nd("script");
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
    var Ro = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };
    var So = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_semantic_area google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_apsail google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ad_positions google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_content_recommendation_use_square_imgs google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_bfa ebfa ebfaca google_eids google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed efwr google_full_width_responsive gfwroh gfwrow gfwroml gfwromr gfwroz gfwrnh gfwrnwer gfwrnher google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_max_responsive_height google_ml_rank google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_only_pyv_ads google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width rpe google_responsive_formats google_responsive_auto_format armr google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_tag_origin google_tag_partner google_targeting google_tfs google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_yt_pt google_yt_up google_package google_debug_params google_enable_single_iframe dash google_refresh_count".split(" ");

    function To(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null
    }

    function Uo(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
        return null
    }

    function Vo(a) {
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
                            var g = void 0 === g ? P : g;
                            try {
                                var h = !(!g.navigator.standalone && !si(g).navigator.standalone)
                            } catch (t) {
                                h = !1
                            }
                            f = !h
                        }
                        e = f
                    }
                    d = e
                }
                c = d ? To : Uo;
                for (var k = b.length - 1; 0 <= k; k--) {
                    var l = b[k];
                    if (!l.google_parsed_script) {
                        l.google_parsed_script = !0;
                        var m = c(l);
                        if (m) {
                            var n = m;
                            break a
                        }
                    }
                }
                n = null
            }
        }
        catch (t) {
            return !1
        }
        if (!n) return !1;
        try {
            b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
            k = {};
            for (var q; q = b.exec(n);) k[q[1]] = Wo(q[2]);
            Xo(k, a)
        } catch (t) {
            return !1
        }
        return !!a.google_ad_client
    }

    function Wo(a) {
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

    function Xo(a, b) {
        for (var c = 0; c < So.length; c++) {
            var d = So[c];
            null == b[d] && null != a[d] && (b[d] = a[d])
        }
    };

    function Yo() {
        this.j = null
    }
    Yo.prototype.verifyAndProcessConfig = function(a, b) {
        var c = fl(a);
        if (!b || c.wasReactiveAdConfigReceived[16] || !Zo(a).length) return !1;
        c.wasReactiveAdConfigReceived[16] = !0;
        this.j = a.innerHeight >= a.innerWidth ? 0 : 90;
        Q(a, "resize", cb(this.l, this, a));
        return !0
    };
    Yo.prototype.l = function(a) {
        var b = a.innerHeight >= a.innerWidth ? 0 : 90;
        if (this.j != b) {
            this.j = b;
            b = Zo(a);
            for (var c = 0; c < b.length; c++)
                if (b[c].rb.offsetWidth != b[c].offsetWidth || b[c].A.google_full_width_responsive_allowed) b[c].offsetWidth = b[c].rb.offsetWidth, Ak(467, fb($o, b[c].rb, b[c].A, a))
        }
    };

    function ap(a, b, c) {
        if (ho(c, b)) {
            var d;
            if (d = b.document.getElementById(c.google_async_iframe_id))
                for (d = d.parentElement; d && !li.test(d.className);) d = d.parentElement;
            else d = null;
            d && (b = Zo(b), a == c ? (c = {}, null == a.google_ad_client && Vo(a) && (c.google_loader_features_used = 2048), Xo(a, c), a = c) : a = Sb(c), b.push({
                rb: d,
                A: a,
                offsetWidth: d.offsetWidth
            }))
        }
    }

    function Zo(a) {
        a = fl(a);
        a.stateForType[16] || (a.stateForType[16] = []);
        return a.stateForType[16]
    }

    function $o(a, b, c) {
        var d = bp(a, b);
        b.google_full_width_responsive_allowed && (a.style.marginLeft = b.gfwroml || "", a.style.marginRight = b.gfwromr || "", a.style.height = b.gfwroh ? b.gfwroh + "px" : "", a.style.width = b.gfwrow ? b.gfwrow + "px" : "", a.style.zIndex = b.gfwroz || "", delete b.google_full_width_responsive_allowed);
        delete b.google_ad_format;
        delete b.google_ad_width;
        delete b.google_ad_height;
        delete b.google_content_recommendation_ui_type;
        delete b.google_content_recommendation_rows_num;
        delete b.google_content_recommendation_columns_num;
        T().google_spfd(a, b, c);
        var e = bp(a, b);
        !e && d && 1 == a.childNodes.length ? (cp(d, !1), b.google_reactive_ad_format = 16, b.google_ad_section = "responsive_resize", Oo(a, b, c)) : e && d ? e != d && (cp(d, !1), cp(e, !0)) : X("auto_size_refresh", {
            context: "showOrHideElm",
            url: c.location.href,
            nodes: a.childNodes.length
        })
    }

    function cp(a, b) {
        a.style.display = b ? "inline-block" : "none"
    }

    function bp(a, b) {
        for (var c = 0; c < a.childNodes.length; c++) {
            for (var d = {}, e = a.childNodes[c], f = e.style, g = ["width", "height"], h = 0; h < g.length; h++) {
                var k = "google_ad_" + g[h];
                if (!d.hasOwnProperty(k)) {
                    var l = Vf(f[g[h]]);
                    l = null === l ? null : Math.round(l);
                    null != l && (d[k] = l)
                }
            }
            if (d.google_ad_width == b.google_ad_width && d.google_ad_height == b.google_ad_height) return e
        }
        return null
    }
    Sa(Yo);

    function dp(a, b) {
        var c = this;
        this.j = a;
        a = W(426, function(e, f) {
            return ep(c, e, f)
        });
        var d = W(427, fb(sl, b, "rach::xsf", ej));
        Lk(b, "rctcnf", a, d)
    }

    function ep(a, b, c) {
        if (Dg(c.origin, gh)) {
            var d = b.config,
                e = d.adFormat;
            e ? 16 !== e ? (X("rctlib", {
                context: "pgms",
                type: e
            }), Mo(523, function(f) {
                fp(a.j, e, d, f)
            })) : fp(a.j, e, d) : vk.j(428, Error("config not recognized " + c.data), void 0, void 0)
        }
    }

    function fp(a, b, c, d) {
        var e;
        16 === b ? e = Yo.U() : d && (e = d.configProcessorForAdFormat(b));
        e && Ak(465, function() {
            return e.verifyAndProcessConfig(a, c)
        })
    };

    function gp(a) {
        J(this, a, hp, null)
    }
    D(gp, I);

    function ip(a) {
        J(this, a, null, null)
    }
    D(ip, I);
    var hp = [3];
    ip.prototype.Aa = function() {
        return L(this, 1)
    };

    function jp(a) {
        J(this, a, kp, null)
    }
    D(jp, I);
    var kp = [2];

    function lp(a) {
        J(this, a, null, null)
    }
    D(lp, I);

    function mp(a) {
        J(this, a, np, null)
    }
    D(mp, I);
    var np = [1];

    function op(a) {
        J(this, a, pp, null)
    }
    D(op, I);
    var pp = [4];

    function qp(a) {
        J(this, a, null, null)
    }
    D(qp, I);
    qp.prototype.K = function() {
        return N(this, op, 1)
    };
    qp.prototype.l = function() {
        return L(this, 2)
    };

    function rp(a) {
        J(this, a, null, sp)
    }
    D(rp, I);

    function tp(a) {
        J(this, a, null, null)
    }
    D(tp, I);

    function up(a) {
        J(this, a, null, null)
    }
    D(up, I);

    function vp(a) {
        J(this, a, null, null)
    }
    D(vp, I);
    var sp = [
        [1, 2, 3]
    ];

    function wp(a) {
        J(this, a, null, null)
    }
    D(wp, I);

    function xp(a) {
        J(this, a, yp, null)
    }
    D(xp, I);

    function zp(a) {
        J(this, a, Ap, null)
    }
    D(zp, I);
    var yp = [2],
        Ap = [2];

    function Bp(a) {
        J(this, a, Cp, null)
    }
    D(Bp, I);
    var Cp = [4];

    function Dp(a) {
        J(this, a, null, Ep)
    }
    D(Dp, I);
    var Ep = [
        [1, 2]
    ];

    function Fp(a) {
        J(this, a, Gp, null)
    }
    D(Fp, I);
    var Gp = [1, 2];

    function Hp(a) {
        J(this, a, Ip, null)
    }
    D(Hp, I);
    var Ip = [2];

    function Jp(a) {
        J(this, a, null, null)
    }
    D(Jp, I);

    function Kp(a) {
        J(this, a, Lp, null)
    }
    D(Kp, I);

    function Mp(a) {
        J(this, a, null, null)
    }
    D(Mp, I);
    var Lp = [1];

    function Np(a) {
        J(this, a, Op, null)
    }
    D(Np, I);
    var Op = [3, 4];

    function Pp(a) {
        J(this, a, null, null)
    }
    D(Pp, I);

    function Qp(a) {
        J(this, a, null, null)
    }
    D(Qp, I);

    function Rp() {
        var a = new Qp;
        return M(a, 2, 1)
    };

    function Sp(a) {
        J(this, a, Tp, null)
    }
    D(Sp, I);
    var Tp = [6, 7, 9, 10, 11];
    Sp.prototype.K = function() {
        return N(this, op, 1)
    };
    Sp.prototype.l = function() {
        return L(this, 2)
    };

    function Up(a) {
        J(this, a, Vp, null)
    }
    D(Up, I);

    function Wp(a) {
        J(this, a, null, null)
    }
    D(Wp, I);

    function Xp(a) {
        J(this, a, Yp, null)
    }
    D(Xp, I);

    function Zp(a) {
        J(this, a, null, null)
    }
    D(Zp, I);

    function $p(a) {
        J(this, a, null, null)
    }
    D($p, I);

    function aq(a) {
        J(this, a, null, null)
    }
    D(aq, I);

    function bq(a) {
        J(this, a, null, null)
    }
    D(bq, I);

    function cq(a) {
        J(this, a, null, null)
    }
    D(cq, I);
    var Vp = [1, 2, 5, 7],
        Yp = [2, 5, 6];

    function dq(a) {
        return N(a, aq, 13)
    }

    function eq(a) {
        return N(a, cq, 15)
    };

    function fq(a, b) {
        a = L(a, 2);
        if (!a) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function gq(a, b) {
        a = a.replace(/(^\/)|(\/$)/g, "");
        var c = Qf(a),
            d = hq(a);
        return b.find(function(e) {
            var f = null != L(e, 7) ? L(N(e, Zp, 7), 1) : L(e, 1);
            e = null != L(e, 7) ? L(N(e, Zp, 7), 2) : 2;
            if (!Ma(f)) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function hq(a) {
        for (var b = {};;) {
            b[Qf(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function iq(a, b) {
        this.Gb = a;
        this.Wb = b
    }

    function jq(a) {
        var b = [].slice.call(arguments).filter(Jb(Ua));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Gb || []);
            d = Object.assign(d, e.Wb)
        });
        return new iq(c, d)
    }

    function kq(a) {
        switch (a) {
            case 1:
                return new iq(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new iq(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new iq(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new iq(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function lq(a) {
        return null == a ? null : new iq(null, {
            google_ml_rank: a
        })
    };
    var mq = new iq(["google-auto-placed"], {
        google_tag_origin: "qs"
    });
    var nq = {},
        oq = (nq.google_ad_channel = !0, nq.google_ad_host = !0, nq);

    function pq(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        X("ama", b, .01)
    }

    function qq(a) {
        var b = {};
        Nf(oq, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function rq(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    };

    function sq(a, b, c) {
        this.m = a;
        this.j = b;
        this.l = c
    }

    function tq(a, b, c) {
        return {
            top: a.j - c,
            right: a.m + a.l + b,
            bottom: a.j + c,
            left: a.m - b
        }
    };

    function uq(a) {
        J(this, a, null, null)
    }
    D(uq, I);

    function vq(a) {
        J(this, a, null, null)
    }
    D(vq, I);

    function wq(a) {
        J(this, a, null, null)
    }
    D(wq, I);

    function xq(a) {
        J(this, a, yq, null)
    }
    D(xq, I);
    var yq = [5];

    function zq(a) {
        try {
            var b = a.localStorage.getItem("google_ama_settings");
            return b ? oe(xq, b) : null
        } catch (c) {
            return null
        }
    }

    function Aq(a, b) {
        if (y(a.za) || y(a.Oa) || y(a.Za) || y(a.Ya)) {
            var c = zq(b);
            c || (c = new xq);
            y(a.za) && M(c, 2, a.za);
            y(a.Oa) && M(c, 4, a.Oa);
            if (y(a.Za)) {
                var d = c,
                    e = a.Za;
                d.j || (d.j = {});
                e = e || [];
                for (var f = [], g = 0; g < e.length; g++) f[g] = me(e[g]);
                d.j[5] = e;
                M(d, 5, f)
            }
            y(a.Ya) && le(c, 6, a.Ya);
            a = c;
            d = C() + 864E5;
            M(a, 1, d);
            c = c.C();
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (h) {}
        } else if ((c = zq(b)) && L(c, 1) < C()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (h) {}
    };

    function Bq(a, b) {
        Cq(a).forEach(b, void 0)
    }

    function Cq(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Dq(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Eq(a) {
        return Cq(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function Fq(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Dq(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Yq(a) {
        if (a && a.parentNode) {
            var b = a.parentNode;
            b.removeChild(a);
            Dq(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };

    function ns(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Ld(d.qb);
            a[e] = d.value
        }
    }

    function qs(a, b, c, d, e, f) {
        var g = uf(new $e(a), "DIV"),
            h = g.style;
        h.textAlign = "center";
        h.width = "100%";
        h.height = "auto";
        h.clear = e.Hb ? "both" : "none";
        e.Qa && ns(h, e.Qa);
        a = uf(new $e(a), "INS");
        h = a.style;
        h.display = "block";
        h.margin = "auto";
        h.backgroundColor = "transparent";
        e.xb && (h.marginTop = e.xb);
        e.$a && (h.marginBottom = e.$a);
        e.wa && ns(h, e.wa);
        g.appendChild(a);
        e = {
            ia: g,
            T: a
        };
        e.T.setAttribute("data-ad-format", d ? d : "auto");
        rs(e, b, c, f);
        return e
    }

    function rs(a, b, c, d) {
        var e = [];
        if (d = d && d.Gb) a.ia.className = d.join(" ");
        a = a.T;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function ss(a, b, c) {
        b.setAttribute("data-adsbygoogle-status", "reserved");
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.Wb;
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function ts(a) {
        var b = Eq(a.document);
        kb(b, function(c) {
            var d = us(a, c),
                e;
            if (e = d) e = go(c, a), e = !((e ? e.y : 0) < ll(a));
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), ss(a, c))
        })
    }

    function us(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (var c in Je) a[Je[c]] && (b[Je[c]] = a[Je[c]]);
        return b
    };

    function vs() {}
    vs.prototype.l = function(a, b, c, d) {
        return qs(d.document, a, null, null, {}, b)
    };
    vs.prototype.m = function(a) {
        return Zn(Math.min(a.screen.width || 0, a.screen.height || 0))
    };

    function ws(a, b, c, d) {
        this.o = a;
        this.l = b;
        this.m = c;
        this.j = d
    }

    function xs(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.o)
        } catch (g) {}
        if (!c.length) return [];
        b = ub(c);
        b = ys(a, b);
        Ma(a.l) && (c = a.l, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if (Ma(a.m)) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = zs(b[d]),
                    f = a.m;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    ws.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.o,
            occurrenceIndex: this.l,
            paragraphIndex: this.m,
            ignoreMode: this.j
        })
    };

    function ys(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }

    function zs(a) {
        var b = [];
        Bq(a.getElementsByTagName("p"), function(c) {
            100 <= As(c) && b.push(c)
        });
        return b
    }

    function As(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Bq(a.childNodes, function(c) {
            b += As(c)
        });
        return b
    }

    function Bs(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function Cs(a) {
        if (!a) return null;
        var b = L(a, 7);
        if (L(a, 1) || L(a, 3) || 0 < L(a, 4).length) {
            var c = L(a, 3),
                d = L(a, 1),
                e = L(a, 4);
            b = L(a, 2);
            var f = L(a, 5);
            a = Ds(L(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Bs(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Bs(e[c]);
            b = (e = g) ? new ws(e, b, f, a) : null
        } else b = b ? new ws(b, L(a, 2), L(a, 5), Ds(L(a, 6))) : null;
        return b
    }
    var Es = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ds(a) {
        return null != a ? Es[a] : a
    }

    function Fs(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = L(a[c], 1),
                e = L(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.qb = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Gs(a, b) {
        var c = {};
        a && (c.xb = L(a, 1), c.$a = L(a, 2), c.Hb = !!ie(a, 3));
        b && (c.Qa = Fs(O(b, wp, 3)), c.wa = Fs(O(b, wp, 4)));
        return c
    }
    var Hs = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Is(a) {
        a = Hs[a];
        return y(a) ? a : null
    }
    var Js = {
        0: 1,
        1: 2,
        2: 3,
        3: 4
    };

    function Ks(a) {
        this.j = a
    }
    Ks.prototype.l = function(a, b, c, d) {
        return qs(d.document, a, null, null, this.j, b)
    };
    Ks.prototype.m = function() {
        return null
    };

    function Ls(a) {
        this.j = a
    }
    Ls.prototype.l = function(a, b, c, d) {
        var e = 0 < O(this.j, Np, 9).length ? O(this.j, Np, 9)[0] : null,
            f = Gs(N(this.j, Pp, 3), e);
        if (!e) return null;
        if (e = L(e, 1)) {
            d = d.document;
            var g = c.tagName;
            c = uf(new $e(d), g);
            c.style.clear = f.Hb ? "both" : "none";
            "A" == g && (c.style.display = "block");
            c.style.padding = "0px";
            c.style.margin = "0px";
            f.Qa && ns(c.style, f.Qa);
            d = uf(new $e(d), "INS");
            f.wa && ns(d.style, f.wa);
            c.appendChild(d);
            f = {
                ia: c,
                T: d
            };
            f.T.setAttribute("data-ad-type", "text");
            f.T.setAttribute("data-native-settings-key", e);
            rs(f, a, null, b);
            a = f
        } else a = null;
        return a
    };
    Ls.prototype.m = function() {
        var a = 0 < O(this.j, Np, 9).length ? O(this.j, Np, 9)[0] : null;
        if (!a) return null;
        a = O(a, wp, 3);
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if ("height" == L(c, 1) && 0 < parseInt(L(c, 2), 10)) return parseInt(L(c, 2), 10)
        }
        return null
    };

    function Ms(a) {
        this.l = a
    }
    Ms.prototype.j = function(a) {
        a = Math.floor(a.l);
        var b = Zn(a),
            c = {};
        return new iq(["ap_container"], (c.google_reactive_ad_format = 27, c.google_max_num_ads = 1, c.google_ad_type = this.l, c.google_ad_format = a + "x" + b, c.google_ad_width = a, c.google_ad_height = b, c))
    };

    function Ns(a) {
        this.l = a
    }
    Ns.prototype.j = function() {
        var a = {};
        return new iq([], (a.google_ad_type = this.l, a.google_reactive_ad_format = 26, a.google_ad_format = "fluid", a))
    };

    function Os(a, b) {
        this.m = a;
        this.o = b
    }
    Os.prototype.j = function() {
        return this.m
    };
    Os.prototype.l = function() {
        return this.o
    };

    function Ps(a, b) {
        this.o = a;
        this.m = b
    }
    Ps.prototype.l = function() {
        return this.m
    };
    Ps.prototype.j = function(a) {
        a = xs(this.o, a.document);
        return 0 < a.length ? a[0] : null
    };

    function Qs(a, b, c, d, e, f, g, h, k, l) {
        l = void 0 === l ? null : l;
        this.B = a;
        this.v = b;
        this.C = c;
        this.D = d;
        this.Ub = e;
        this.Sb = f;
        this.Sa = g ? g : new Qp;
        this.m = h;
        this.G = k;
        this.j = l;
        this.o = !1
    }
    Qs.prototype.l = function() {
        return this.B.l()
    };

    function Rs(a, b, c, d) {
        var e = a.K();
        if (!e) return null;
        var f = Cs(e);
        if (!f) return null;
        var g = Is(a.l());
        if (null === g) return null;
        var h = N(a, Pp, 3);
        h = h ? ie(h, 3) : null;
        f = new Ps(f, g);
        g = L(a, 10).slice(0);
        null != L(e, 5) && g.push(1);
        var k = d ? d : {};
        d = L(a, 12);
        e = null != L(a, 4) ? N(a, Qp, 4) : null;
        switch (L(a, 8)) {
            case 1:
                return k = k.Oc || null, new Qs(f, new Ks(Gs(N(a, Pp, 3), null)), k, h, 0, g, e, c, b, d);
            case 2:
                return new Qs(f, new Ls(a), k.$c || new Ns("text"), h, 1, g, e, c, b, d)
        }
        return null
    }

    function Ss(a) {
        return a.o
    };

    function Ts() {
        this.j = new ko
    }

    function Us(a, b, c) {
        y(a.j.j[b]) || a.j.set(b, []);
        a.j.get(b).push(c)
    };

    function Vs(a, b, c, d, e) {
        this.xa = a;
        this.ka = b;
        this.Ha = c;
        this.j = d;
        this.l = e
    };

    function Ws(a, b, c) {
        this.P = a;
        this.j = b;
        this.R = c
    }
    Ws.prototype.K = function() {
        return this.j
    };
    Ws.prototype.fill = function(a, b) {
        var c = this.P;
        if (a = c.v.l(a, b, this.j, c.m)) {
            if (this.P.o) throw Error("AMA:AP:AP");
            Fq(a.ia, this.K(), this.P.l());
            this.P.o = !0
        }
        return a
    };

    function Xs(a, b) {
        var c = Ys(b, ".google-auto-placed"),
            d = Zs(b),
            e = $s(b),
            f = at(b),
            g = bt(b),
            h = ct(b),
            k = Ys(b, "iframe[id^=aswift_],iframe[id^=google_ads_frame]").concat(Ys(b, "ins.adsbygoogle"));
        b = [];
        a = u([
            [a.Ba, c],
            [a.la, d],
            [a.Zc, e],
            [a.Ca, f],
            [a.Da, g],
            [a.Yc, h]
        ]);
        for (c = a.next(); !c.done; c = a.next()) d = u(c.value), c = d.next().value, d = d.next().value, !1 === c ? b = b.concat(d) : k = k.concat(d);
        k = dt(k);
        a = dt(b);
        b = k.slice(0);
        k = u(a);
        for (a = k.next(); !a.done; a = k.next())
            for (a = a.value, c = 0; c < b.length; c++)(a.contains(b[c]) || b[c].contains(a)) && b.splice(c, 1);
        return b
    }

    function et(a) {
        return !!a.className && -1 != a.className.indexOf("google-auto-placed")
    }

    function ft(a) {
        try {
            return lb(mb(a.googletag.pubads().getSlots(), function(b) {
                return a.document.getElementById(b.getSlotElementId())
            }), Va)
        } catch (b) {}
        return null
    }

    function Ys(a, b) {
        return ub(a.document.querySelectorAll(b))
    }

    function Zs(a) {
        return Ys(a, 'ins.adsbygoogle[data-anchor-shown="true"]')
    }

    function $s(a) {
        return Ys(a, "ins.adsbygoogle[data-ad-format=autorelaxed]")
    }

    function at(a) {
        return (ft(a) || Ys(a, "div[id^=div-gpt-ad]")).concat(Ys(a, "iframe[id^=google_ads_iframe]"))
    }

    function bt(a) {
        return Ys(a, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")
    }

    function ct(a) {
        return Ys(a, "ins.adsbygoogle-ablated-ad-slot")
    }

    function dt(a) {
        var b = [];
        a = u(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };
    var gt = W(453, Xs),
        ht = W(454, function(a, b) {
            var c = Ys(b, ".google-auto-placed"),
                d = Zs(b),
                e = $s(b),
                f = at(b),
                g = bt(b);
            b = ct(b);
            return dt((!0 === a.Ba ? c : []).concat(!0 === a.la ? d : [], !0 === a.Zc ? e : [], !0 === a.Ca ? f : [], !0 === a.Da ? g : [], !0 === a.Yc ? b : []))
        });

    function it(a, b) {
        this.nd = a;
        this.j = b.slice(0);
        this.mb = null
    }

    function jt(a) {
        return a.j.map(function(b) {
            return b.ab
        })
    }
    it.prototype.Aa = function() {
        return this.j.length
    };

    function kt(a) {
        return lt(a).reduce(function(b, c) {
            return b + c.ab.bottom - c.ab.top
        }, 0)
    }

    function lt(a) {
        return y(void 0) ? a.j.filter(function(b) {
            return void 0 == b.yc
        }) : a.j
    }

    function mt(a) {
        return new it(a, nt(a))
    }

    function nt(a) {
        var b = gt({
                la: !1
            }, a),
            c = ql(a),
            d = pl(a);
        return b.map(function(e) {
            var f = e.getBoundingClientRect();
            return (e = et(e)) || 1 < (f.bottom - f.top) * (f.right - f.left) ? {
                ab: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                yc: e ? 1 : 0
            } : null
        }).filter(Jb(Ua))
    };

    function ot(a) {
        var b = a.Cb;
        a = a.placement;
        var c = a.D,
            d = a.m.document.createElement("div");
        d.className = "google-auto-placed";
        var e = d.style;
        e.textAlign = "center";
        e.width = "100%";
        e.height = "0px";
        e.clear = c ? "both" : "none";
        try {
            return Fq(d, b, a.l()), d
        } catch (f) {
            throw Yq(d), f;
        }
    };

    function pt(a) {
        this.j = {};
        this.l = {};
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    pt.prototype.add = function(a) {
        this.j[a] = !0;
        this.l[a] = a
    };
    pt.prototype.contains = function(a) {
        return !!this.j[a]
    };

    function qt() {
        this.j = new ko
    }
    qt.prototype.set = function(a, b) {
        var c = this.j.get(a);
        c || (c = new pt, this.j.set(a, c));
        c.add(b)
    };

    function rt(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function st(a, b) {
        this.l = a;
        this.j = b
    }

    function tt(a, b) {
        var c = new qt,
            d = new pt;
        b.forEach(function(e) {
            if (N(e, tp, 1)) {
                e = N(e, tp, 1);
                if (N(e, qp, 1) && N(e, qp, 1).K() && N(e, qp, 2) && N(e, qp, 2).K()) {
                    var f = ut(a, N(e, qp, 1).K()),
                        g = ut(a, N(e, qp, 2).K());
                    if (f && g)
                        for (f = u(rt({
                                anchor: f,
                                position: N(e, qp, 1).l()
                            }, {
                                anchor: g,
                                position: N(e, qp, 2).l()
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Ya(g.anchor), g.position)
                }
                N(e, qp, 3) && N(e, qp, 3).K() && (f = ut(a, N(e, qp, 3).K())) && c.set(Ya(f), N(e, qp, 3).l())
            } else N(e, up, 2) ? vt(a, N(e, up, 2), c) : N(e, vp, 3) && wt(a, N(e, vp, 3), d)
        });
        return new st(c, d)
    }

    function xt(a, b, c) {
        b = Ya(b);
        return (a = a.l.j.get(b)) ? a.contains(c) : !1
    }

    function yt(a, b, c) {
        if (a.j.contains(Ya(b))) switch (c) {
            case 2:
            case 3:
                return !0;
            default:
                return !1
        }
        for (b = b.parentElement; b;) {
            if (a.j.contains(Ya(b))) return !0;
            b = b.parentElement
        }
        return !1
    }

    function vt(a, b, c) {
        N(b, op, 1) && (a = zt(a, N(b, op, 1))) && a.forEach(function(d) {
            d = Ya(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function wt(a, b, c) {
        N(b, op, 1) && (a = zt(a, N(b, op, 1))) && a.forEach(function(d) {
            c.add(Ya(d))
        })
    }

    function ut(a, b) {
        return (a = zt(a, b)) && 0 < a.length ? a[0] : null
    }

    function zt(a, b) {
        return (b = Cs(b)) ? xs(b, a) : null
    };

    function At(a) {
        return function(b) {
            var c = [],
                d = [];
            try {
                for (var e = [], f = 0; f < b.length; f++) {
                    var g = b[f],
                        h = g.B.j(g.m);
                    h && e.push({
                        placement: g,
                        Cb: h
                    })
                }
                for (f = 0; f < e.length; f++) d.push(ot(e[f]));
                var k = pl(a),
                    l = ql(a);
                for (f = 0; f < d.length; f++) {
                    b = l;
                    g = k;
                    var m = d[f].getBoundingClientRect(),
                        n = e[f];
                    c.push(new Ws(n.placement, n.Cb, new sq(m.left + b, m.top + g, m.right - m.left)))
                }
            } finally {
                for (f = 0; f < d.length; f++) Yq(d[f])
            }
            return c
        }
    }

    function Bt(a) {
        var b = ll(a);
        return b ? fb(Ct, b + pl(a)) : Eb
    }

    function Dt(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return Eb;
        b = jt(c || mt(b));
        return fb(Et, b, a)
    }

    function Ft(a) {
        return function(b) {
            return b.Ub == a
        }
    }

    function Gt(a) {
        return function(b) {
            b = u(b.Sb);
            for (var c = b.next(); !c.done; c = b.next())
                if (-1 < a.indexOf(c.value)) return !1;
            return !0
        }
    }

    function Ht(a) {
        return a.length ? function(b) {
            var c = b.Sb;
            return a.some(function(d) {
                return -1 < c.indexOf(d)
            })
        } : Fb
    }

    function It(a, b) {
        if (0 >= a) return Fb;
        var c = ml(b, !0) - a;
        return function(d) {
            return d.R.j <= c
        }
    }

    function Jt(a) {
        var b = {};
        a && a.forEach(function(c) {
            b[c] = !0
        });
        return function(c) {
            return !b[L(c.Sa, 2) || 0]
        }
    }

    function Kt(a) {
        return a.length ? function(b) {
            return a.includes(L(b.Sa, 2) || 0)
        } : Fb
    }

    function Lt(a) {
        return a.length ? function(b) {
            return a.includes(L(b.Sa, 1) || 0)
        } : Fb
    }

    function Mt(a, b) {
        var c = tt(a, b);
        return function(d) {
            var e = d.K();
            d = Js[d.P.l()];
            return !(xt(c, e, d) || yt(c, e, d))
        }
    }

    function Nt(a, b, c) {
        var d = tq(c, b + 1, b + 1);
        return !ob(a, function(e) {
            return rq(e, d)
        })
    }

    function Ct(a, b) {
        return b.R.j >= a
    }

    function Ot(a, b) {
        return b.R.j < a
    }

    function Et(a, b, c) {
        return Nt(a, b, c.R)
    }

    function Pt(a, b, c) {
        c = c.R.l;
        return a <= c && c <= b
    };

    function Qt(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = Rt(St(c), a);
                    break a;
                case 3:
                    a = Rt(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = Rt(e ? 1 == e.nodeType ? e : St(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !Tt(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !Dq(b) && 0 >= b.offsetWidth);
        return d
    }

    function Rt(a, b) {
        if (!a) return !1;
        a = If(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function St(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Tt(a) {
        return !!a.nextSibling || !!a.parentNode && Tt(a.parentNode)
    };

    function Ut(a, b) {
        return a && null != L(a, 4) && b[L(N(a, Qp, 4), 2)] ? !1 : !0
    }

    function Vt(a) {
        var b = {};
        a && L(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function Wt(a, b, c, d, e) {
        this.j = a;
        this.H = b;
        this.l = c;
        this.G = e || null;
        this.D = (this.F = d) ? tt(a.document, O(d, rp, 5)) : tt(a.document, []);
        this.m = 0;
        this.B = !1
    }
    Wt.prototype.C = function() {
        return Xt(this, !1)
    };
    Wt.prototype.o = function() {
        Xt(this, !0)
    };
    Wt.prototype.v = function() {
        return new Vs(Yt(this).numAutoAdsPlaced || 0, [], [], O(this.l, Sp, 1).length, void 0)
    };

    function Xt(a, b) {
        if (a.B) return !0;
        a.B = !0;
        var c = O(a.l, Sp, 1);
        a.m = 0;
        var d = Vt(a.F),
            e;
        if (e = eq(a.l) && je(eq(a.l), 12)) a: {
            e = zq(a.j);e = null === e ? null : O(e, wq, 5);
            var f = zq(a.j);
            var g = null != f ? N(f, uq, 6) || null : null;
            if (null == e) e = !1;
            else {
                var h = .3,
                    k = f = 4;
                g && (h = he(g, 2) || h, f = L(g, 1) || f, k = L(g, 3) || k);
                g = h;
                h = zq(a.j);
                h = null !== h && null != L(h, 4) ? he(h, 4) : 1;
                g -= h;
                h = [];
                for (var l = 0; l < e.length; l++) {
                    if (.05 > g || (Yt(a).numAutoAdsPlaced || 0) >= f) {
                        e = !0;
                        break a
                    }
                    var m = L(e[l], 1);
                    if (null == m) break;
                    var n = c[m],
                        q = N(e[l], vq, 2);
                    null != q && null != he(q, 1) && null != he(q, 2) && null != he(q, 3) && (q = new sq(he(q, 1), he(q, 2), he(q, 3)), Nt(h, k, q) && (m = Zt(a, n, m, b, d, !1), null != m && null != m.T && (m = m.T.getBoundingClientRect(), h.push(m), n = a.j, g -= m.width * m.height / (ll(n) * jl(n).clientWidth))))
                }
                e = 0 < (Yt(a).numAutoAdsPlaced || 0)
            }
        }
        if (e) return !0;
        e = zq(a.j);
        if (null !== e && je(e, 2)) return Yt(a).eatf = !0, sn(7, [!0, 0, !1]), !0;
        for (e = 0; e < c.length; e++)
            if (Zt(a, c[e], e, b, d, !0)) return !0;
        sn(7, [!1, a.m, !1]);
        return !1
    }

    function Zt(a, b, c, d, e, f) {
        if (1 !== L(b, 8) || !Ut(b, e)) return null;
        var g = N(b, Qp, 4);
        if (!f || g && 2 == L(g, 1)) {
            a.m++;
            if (b = $t(a, b, d, e)) d = Yt(a), d.placement = c, d.numAutoAdsPlaced || (d.numAutoAdsPlaced = 0), d.numAutoAdsPlaced++, sn(7, [!1, a.m, !0]);
            return b
        }
        return null
    }

    function $t(a, b, c, d) {
        if (!Ut(b, d) || 1 != L(b, 8)) return null;
        d = b.K();
        if (!d) return null;
        d = Cs(d);
        if (!d) return null;
        d = xs(d, a.j.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = Is(b.l());
        if (!(c = null == e || !Qt(a.j, e, d, c))) {
            c = a.D;
            var f = b.l();
            c = xt(c, d, f) || yt(c, d, f)
        }
        if (c) return null;
        c = Gs(N(b, Pp, 3), null);
        f = N(b, Qp, 4) && L(N(b, Qp, 4), 2) ? L(N(b, Qp, 4), 2) : null;
        f = kq(f);
        b = null == L(b, 12) ? null : L(b, 12);
        b = jq(a.G, f, lq(b));
        f = a.j;
        a = qs(f.document, a.H, null, null, c, b);
        a: {
            try {
                Fq(a.ia, d, e), ss(f, a.T, b)
            } catch (g) {
                Yq(a.ia);
                b = !1;
                break a
            }
            b = !0
        }
        return b ? a : null
    }

    function Yt(a) {
        return a.j.google_ama_state = a.j.google_ama_state || {}
    };

    function au() {
        this.j = new bu(this);
        this.l = 0
    }
    au.prototype.resolve = function(a) {
        cu(this);
        this.l = 1;
        this.o = a;
        du(this.j)
    };
    au.prototype.reject = function(a) {
        cu(this);
        this.l = 2;
        this.m = a;
        du(this.j)
    };

    function cu(a) {
        if (0 != a.l) throw Error("Already resolved/rejected.");
    }

    function bu(a) {
        this.j = a
    }
    bu.prototype.then = function(a, b) {
        if (this.l) throw Error("Then functions already set.");
        this.l = a;
        this.m = b;
        du(this)
    };

    function du(a) {
        switch (a.j.l) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.o);
                break;
            case 2:
                a.m && a.m(a.j.m);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function eu(a, b) {
        this.j = a;
        this.exception = b
    }

    function fu(a, b, c) {
        this.m = a;
        this.j = b;
        this.l = c
    }
    fu.prototype.start = function() {
        this.o()
    };
    fu.prototype.o = function() {
        try {
            switch (this.m.document.readyState) {
                case "complete":
                case "interactive":
                    this.j.o();
                    gu(this);
                    break;
                default:
                    this.j.C() ? gu(this) : this.m.setTimeout(cb(this.o, this), 100)
            }
        } catch (a) {
            gu(this, a)
        }
    };

    function gu(a, b) {
        try {
            a.l.resolve(new eu(a.j.v(), b))
        } catch (c) {
            a.l.reject(c)
        }
    };

    function hu(a) {
        pq(a, {
            atf: 1
        })
    }

    function iu(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        pq(a, {
            atf: 0
        })
    };

    function ju(a) {
        this.j = a
    };

    function ku(a) {
        this.j = a
    }

    function lu(a) {
        var b = a.j.document.createElement("SCRIPT");
        b.src = "//www.google.com/adsense/search/ads.js";
        b.setAttribute("async", "async");
        a.j.document.head.appendChild(b);
        (function(c, d) {
            c[d] = c[d] || function() {
                (c[d].q = c[d].q || []).push(arguments)
            };
            c[d].t = 1 * new Date
        })(a.j, "_googCsa")
    };

    function mu() {}
    mu.prototype.j = function() {};

    function nu(a, b) {
        this.m = a;
        this.l = b
    }
    ka(nu, mu);
    nu.prototype.j = function() {
        var a = Cs(this.l);
        return a ? xs(a, this.m.document).map(function(b) {
            return b.textContent
        }).filter(function(b) {
            return !!b
        }) : []
    };

    function ou(a, b) {
        this.m = a;
        this.l = b
    }
    ka(ou, mu);
    ou.prototype.j = function() {
        return (new URL(this.l)).searchParams.getAll(this.m)
    };

    function pu(a, b) {
        this.l = a;
        this.j = b
    }

    function qu(a, b) {
        return b.map(function(c) {
            var d = N(c, op, 1);
            if (d) c = new nu(a.l, d);
            else if (c = L(c, 2)) c = new ou(c, a.j);
            else throw Error("Unable to get extractor for SearchQueryIdentifier");
            return c
        })
    };

    function ru(a, b) {
        this.l = a;
        this.j = b
    }
    ru.prototype.K = function() {
        return this.l
    };
    ru.prototype.Pa = function() {
        return this.j.l
    };

    function su() {
        this.l = [];
        this.j = []
    }

    function tu(a, b, c) {
        a.l.push(b);
        a.j.push(c)
    }

    function uu(a) {
        if (!a.j.length) return null;
        var b = a.j.reduce(function(d, e) {
                return Math.min(d, e.left)
            }, Number.MAX_VALUE),
            c = a.j.reduce(function(d, e) {
                return Math.max(d, e.right)
            }, Number.MIN_VALUE);
        a = a.j.reduce(function(d, e) {
            return Math.max(d, e.bottom)
        }, Number.MIN_VALUE);
        return new sq(b, a, c - b)
    }

    function vu(a) {
        return 2 != a.length ? !1 : !!a[0].parentElement && !!a[1].parentElement && a[0].parentElement == a[1].parentElement
    }

    function wu(a, b) {
        return a.length ? b(a) ? a : a.every(function(c) {
            return !!c.parentElement
        }) ? wu(a.map(function(c) {
            return c.parentElement
        }), b) : null : null
    };

    function xu(a, b, c, d, e) {
        this.j = a;
        this.o = b;
        this.v = c;
        this.m = d;
        this.l = e.slice(0)
    }

    function yu(a) {
        var b = zu(a);
        if (!b) return null;
        a = Au(a, b);
        if (!a) return null;
        a.elements.forEach(function(c) {
            Fq(c, b.K(), 3)
        });
        return a.container
    }

    function Au(a, b) {
        var c = N(a.m, xp, 2);
        if (!c) return null;
        var d = L(c, 1);
        if (!d) return null;
        d = a.j.document.createElement(d);
        ns(d.style, Fs(O(c, wp, 2)));
        d.style.width = b.Pa() + "px";
        b = a.j.document.createElement("div");
        d.appendChild(b);
        d = [d];
        if (c = N(c, zp, 3)) {
            var e = L(c, 1);
            e ? (a = a.j.document.createElement(e), ns(a.style, Fs(O(c, wp, 2)))) : a = null
        } else a = null;
        a && d.push(a);
        return {
            elements: d,
            container: b
        }
    }

    function zu(a) {
        var b = ll(a.j) || 0;
        return Bu(a, function(c) {
            c = c.j;
            var d;
            if (d = c.j >= b) {
                a: {
                    c = tq(c, 5, 200);d = u(a.o.j);
                    for (var e = d.next(); !e.done; e = d.next())
                        if (rq(c, e.value)) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
                d = !c
            }
            return d
        })
    }

    function Bu(a, b) {
        for (var c = Cu(a), d = 0; d < c.length; ++d) {
            a: {
                var e = d;
                for (var f = c.length, g = L(a.m, 4), h = 0; h < g.length; ++h) switch (g[h]) {
                    case 1:
                        if (e < f - 1) {
                            e = !0;
                            break a
                        }
                        break;
                    case 2:
                        if (e == f - 1) {
                            e = !0;
                            break a
                        }
                }
                e = !1
            }
            if (e && (e = c[d + 1] || c[d - 1]) && (f = c[d], f = f.l.length ? f.l[f.l.length - 1] : null, e = e.l[0] || null, e = f && e ? (e = wu([f, e], vu)) ? e[0] : null : null, e && (f = uu(c[d]))) && (e = new ru(e, f), b(e))) return e
        }
        return null
    }

    function Cu(a) {
        if (0 == a.l.length) return [];
        var b = a.l.map(function(e) {
                return e.getBoundingClientRect()
            }),
            c = [new su];
        tu(c[0], a.l[0], b[0]);
        for (var d = 1; d < b.length; ++d) Du(b[d - 1], b[d]) || c.push(new su), tu(c[c.length - 1], a.l[d], b[d]);
        return c
    }

    function Du(a, b) {
        return a.top < b.bottom && b.top < a.bottom
    };

    function Eu(a, b, c, d, e) {
        this.l = a;
        this.v = b;
        this.j = c;
        this.m = d;
        this.o = e
    }

    function Fu(a) {
        var b = [];
        O(a.j, Fp, 2).forEach(function(c) {
            vb(b, Gu(a, c))
        });
        return b
    }

    function Gu(a, b) {
        var c = Hu(a, b);
        if (!c) return [];
        var d = L(b, 3);
        d && (c = d.replace("%s", c));
        var e = [];
        O(b, Bp, 1).forEach(function(f) {
            var g;
            g = (g = N(f, op, 1)) ? (g = Cs(g)) ? xs(g, a.l.document) : [] : [];
            g.length && e.push(new xu(a.l, a.o, c, f, g))
        });
        return e
    }

    function Hu(a, b) {
        a = qu(new pu(a.l, a.v), O(b, Dp, 2));
        return [].concat.apply([], a.map(function(c) {
            return c.j()
        })).filter(function(c) {
            return !!c
        })[0] || null
    };

    function Iu(a) {
        this.j = a
    };

    function Ju(a) {
        this.B = {};
        this.B.c = a;
        this.m = [];
        this.l = null;
        this.o = [];
        this.C = 0
    }

    function Ku(a, b) {
        a.B.wpc = b;
        return a
    }

    function Lu(a, b) {
        for (var c = 0; c < b.length; c++) a.ba(b[c]);
        return a
    }
    Ju.prototype.ba = function(a) {
        for (var b = 0; b < this.m.length; b++)
            if (this.m[b] == a) return this;
        this.m.push(a);
        return this
    };

    function Mu(a, b) {
        a.l = a.l ? a.l : b;
        return a
    }
    Ju.prototype.v = function(a) {
        var b = Sb(this.B);
        0 < this.C && (b.t = this.C);
        b.err = this.m.join();
        b.warn = this.o.join();
        this.l && (b.excp_n = this.l.name, b.excp_m = this.l.message && this.l.message.substring(0, 512), b.excp_s = this.l.stack && uk(this.l.stack, ""));
        b.w = 0 < a.innerWidth ? a.innerWidth : null;
        b.h = 0 < a.innerHeight ? a.innerHeight : null;
        return b
    };

    function Nu(a) {
        Ju.call(this, a);
        this.j = {}
    }
    ka(Nu, Ju);

    function Ou(a, b) {
        b && (a.j.apv = L(b, 4));
        return a
    }

    function Pu(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    Nu.prototype.v = function(a) {
        try {
            this.j.su = a.location.hostname
        } catch (b) {
            this.j.su = "_ex"
        }
        a = Ju.prototype.v.call(this, a);
        Ub(a, this.j);
        return a
    };

    function Qu(a) {
        return null != a ? Number.isInteger(a) ? a.toString() : a.toFixed(3) : null
    };

    function Ru(a, b) {
        return a.reduce(function(c, d) {
            return c.concat(b(d))
        }, [])
    };

    function Su(a, b, c, d, e, f) {
        this.j = a.slice(0);
        this.m = b;
        this.o = c;
        this.v = d;
        this.B = e;
        this.l = f
    }

    function Tu(a, b) {
        return a.m - b.m
    };

    function Uu(a, b, c) {
        this.j = a;
        this.l = b.Na;
        this.o = b.Lb;
        this.m = c
    };
    var Vu = new pt("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function Wu(a, b) {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = -1 != b.indexOf("&") ? Gd(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Vu.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Wu(a, b[c])) return !0
        }
        return !1
    };

    function Xu(a, b) {
        a = Yu(a, b);
        return Ru(a, function(c) {
            var d = void 0 === d ? 3 : d;
            if (c.o) {
                var e = c.j;
                for (var f = c.m, g = [], h = [], k = e.childNodes, l = k.length, m = 0, n = "", q = 0; q < l; q++) {
                    var t = k[q];
                    if (1 == t.nodeType || 3 == t.nodeType) {
                        if (1 != t.nodeType) var v = null;
                        else "BR" == t.tagName ? v = t : (v = f.getComputedStyle(t).getPropertyValue("display"), v = "inline" == v || "inline-block" == v ? null : t);
                        v ? (g.length && n && h.push(new Su(g, q - 1, v, 0, n, f)), g = [], m = q + 1, n = "") : (g.push(t), t = pf(t).trim(), n += t && n ? " " + t : t)
                    }
                }
                g.length && n && h.push(new Su(g, m, e, 2, n, f));
                e = h
            } else e = [];
            if (c.l) {
                k = c.j;
                f = c.m;
                g = k.childNodes;
                h = [];
                c = u(k.querySelectorAll(c.l));
                for (k = c.next(); !k.done; k = c.next()) k = k.value, l = jb(g, k), 0 > l || h.push(new Su([k], l, k, 3, pf(k).trim(), f));
                c = h
            } else c = [];
            c = tb(e, c);
            d = void 0 === d ? 3 : d;
            if (2 > d) throw Error("minGroupSize should be at least 2, found " + d);
            f = c.slice(0);
            f.sort(Tu);
            c = [];
            e = [];
            f = u(f);
            for (g = f.next(); !g.done; g = f.next())
                if (g = g.value, !(50 >= g.B.length)) {
                    if (h = c.length) {
                        k = c[c.length - 1];
                        a: {
                            h = k.l;l = k.j[k.j.length - 1];k = g.j[0];
                            if (l && k && (m = l.parentElement, n = k.parentElement, m && n && m == n))
                                for (m = 0, l = l.nextSibling; 10 > m && l;) {
                                    if (l == k) {
                                        h = !0;
                                        break a
                                    }
                                    if (Wu(h, l)) break;
                                    l = l.nextSibling;
                                    m++
                                }
                            h = !1
                        }
                        h = !h
                    }
                    h ? c = [g] : (c.push(g), c.length >= d && (e.push(c[1]), c.shift()))
                }
            return e
        })
    }

    function Yu(a, b) {
        var c = new ko;
        a.forEach(function(d) {
            var e = Cs(N(d, op, 1));
            if (e) {
                var f = e.toString();
                y(c.j[f]) || c.set(f, {
                    jh: d,
                    Hc: e,
                    Na: null,
                    Lb: !1
                });
                e = c.get(f);
                (d = (d = N(d, op, 2)) ? L(d, 7) : null) ? e.Na = e.Na ? e.Na + "," + d : d: e.Lb = !0
            }
        });
        return lo(c).map(function(d) {
            var e = xs(d.Hc, b.document);
            return e.length ? new Uu(e[0], d, b) : null
        }).filter(Va)
    };

    function Zu(a, b, c) {
        var d = N(a, Kp, 6);
        if (!d) return [];
        c = Xu(O(d, Mp, 1), c);
        return (a = eq(a)) && ie(a, 11) ? c.map(function(e) {
            var f = Rp();
            return new Qs(new Os(e.o, e.v), new Ks({}), null, !1, 2, [], f, e.l, null, null)
        }) : c.map(function(e) {
            var f = Rp();
            return new Qs(new Os(e.o, e.v), new vs, new Ms(b), !1, 2, [], f, e.l, null, null)
        })
    };
    var $u = {
            1: "0.5vp",
            2: "300px"
        },
        av = {
            1: 700,
            2: 1200
        },
        bv = {},
        cv = (bv[1] = {
            ic: "3vp",
            vb: "1vp",
            hc: "0.3vp"
        }, bv[2] = {
            ic: "900px",
            vb: "300px",
            hc: "90px"
        }, bv);

    function dv(a, b, c, d, e) {
        this.l = a;
        this.o = b;
        this.v = c.sort(function(f, g) {
            return f.adCount - g.adCount
        });
        this.j = d;
        this.m = e
    }

    function ev(a, b) {
        var c = {
            Ea: a.l,
            ma: a.o
        };
        a = u(a.v);
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, d.adCount <= b && (c = d.ub);
        return c
    }

    function fv(a, b, c) {
        var d = gv(a),
            e = ll(a) || av[d];
        var f = gv(a);
        a = ll(a) || av[f];
        var g = hv(cv[f].vb, a);
        f = null === g ? iv(f, a) : new dv(g, g, jv(g, g, 8), 8, .3);
        a = hv(cv[d].ic, e);
        g = hv(cv[d].vb, e);
        e = hv(cv[d].hc, e);
        d = f.l;
        a && e && g && void 0 !== b && (d = .5 >= b ? g + (1 - 2 * b) * (a - g) : e + (2 - 2 * b) * (g - e));
        c && (d = Math.min(d, f.l));
        b = d;
        return new dv(d, b, jv(d, b, f.j), f.j, f.m)
    }

    function kv(a, b) {
        var c = gv(a);
        a = ll(a) || av[c];
        a: {
            b = O(b, gp, 2);b = u(b);
            for (var d = b.next(); !d.done; d = b.next())
                if (d = d.value, L(d, 1) == c) {
                    b = d;
                    break a
                }
            b = null
        }
        return b && (b = lv(b, a)) ? b : iv(c, a)
    }

    function mv(a) {
        var b = gv(a);
        return iv(b, ll(a) || av[b])
    }

    function lv(a, b) {
        var c = hv(L(a, 2), b),
            d = hv(L(a, 5), b);
        if (null === c) return null;
        var e = L(a, 4);
        if (null == e) return null;
        var f = [],
            g = O(a, ip, 3);
        g = u(g);
        for (var h = g.next(); !h.done; h = g.next()) {
            var k = h.value;
            h = k.Aa();
            var l = hv(L(k, 2), b);
            k = hv(L(k, 3), b);
            if (!Ma(h) || null === l) return null;
            f.push({
                adCount: h,
                ub: {
                    Ea: l,
                    ma: k
                }
            })
        }
        return new dv(c, d, f, e, he(a, 6))
    }

    function iv(a, b) {
        a = hv($u[a], b);
        return new dv(null === a ? Infinity : a, null, [], 3, null)
    }

    function hv(a, b) {
        if (!a) return null;
        var c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function gv(a) {
        a = 900 <= jl(a).clientWidth;
        return xf() && !a ? 1 : 2
    }

    function jv(a, b, c) {
        if (4 > c) return [];
        var d = Math.ceil(c / 2);
        return [{
            adCount: d,
            ub: {
                Ea: 2 * a,
                ma: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            ub: {
                Ea: 3 * a,
                ma: 3 * b
            }
        }]
    };

    function nv() {}
    nv.prototype.j = function(a) {
        return ov(Math.floor(a.l))
    };

    function ov(a) {
        a = Math.floor(a);
        var b = {};
        return new iq(["pedestal_container"], (b.google_reactive_ad_format = 30, b.google_phwr = 2.189, b.google_ad_width = a, b.google_ad_format = "autorelaxed", b.google_full_width_responsive = !0, b.google_enable_content_recommendations = !0, b.google_content_recommendation_ui_type = "pedestal", b))
    };
    var pv = {};

    function qv(a, b) {
        var c = rv(a, b);
        if (!c) return !0;
        for (var d = -1, e = b.o.j; c.pb && c.pb.length;) {
            var f = c.pb.shift(),
                g = f.P;
            g = g.v.m(g.m);
            var h = f.R.j;
            if ((b.F || b.H || b.ea || h > d) && (!g || g <= c.Db) && sv(b, f, c.Db)) {
                d = h;
                if (c.Wa.Aa() + 1 >= e) return !0;
                c = rv(a, b);
                if (!c) return !0
            }
        }
        return b.l
    }

    function rv(a, b) {
        var c = b.o.j,
            d = b.o.m,
            e = mt(b.j);
        if (e.Aa() >= c) return null;
        d ? (c = e.mb || (e.mb = ml(e.nd, !0) || null), d = !c || 0 > c ? -1 : e.mb * d - kt(e)) : d = void 0;
        a = null == d || 50 <= d ? tv(b, e, {
            type: a
        }) : null;
        return {
            Wa: e,
            Db: d,
            pb: a
        }
    }
    pv[2] = fb(function(a, b) {
        a = tv(b, mt(b.j), {
            type: a,
            ra: mv(b.j)
        });
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (sv(b, a[c])) return !0;
        return b.l ? (b.v.push(11), !0) : !1
    }, 0);
    pv[5] = fb(qv, 0);
    pv[3] = function(a) {
        if (!a.l) return !1;
        var b = tv(a, mt(a.j), {
            type: 0,
            ra: mv(a.j)
        });
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (sv(a, b[c])) return !0;
        a.v.push(11);
        return !0
    };

    function uv(a) {
        var b;
        a.qa ? b = new dv(0, null, [], 3, null) : b = mv(a.j);
        return {
            type: 0,
            ra: b
        }
    }

    function vv(a) {
        var b = a.j.document.body.getBoundingClientRect().width;
        b = ov(b);
        var c = a.j;
        var d = c.document.body,
            e = co(c, d, null);
        if (e) c = e;
        else {
            if (c.document.body) {
                e = Math.floor(c.document.body.getBoundingClientRect().width);
                for (var f = [{
                        element: c.document.body,
                        depth: 0,
                        height: 0
                    }], g = -1, h = null; 0 < f.length;) {
                    var k = f.pop(),
                        l = k.element,
                        m = k.height;
                    0 < k.depth && m > g && (g = m, h = l);
                    if (5 > k.depth)
                        for (m = 0; m < l.children.length; m++) {
                            var n = l.children[m],
                                q = n.getBoundingClientRect().width;
                            (null == q || null == e ? 0 : q >= .9 * e && q <= 1.01 * e) && f.push({
                                element: n,
                                depth: k.depth + 1,
                                height: n.getBoundingClientRect().height
                            })
                        }
                }
                e = h
            } else e = null;
            c = e ? co(c, e.parentNode || d, e) : null
        }
        c && (b = jq(a.C, b), d = qs(a.j.document, a.G, null, null, {}, b)) && (Fq(d.ia, c, 2), wv(a, d, b))
    }

    function xv(a, b) {
        var c = uv(a);
        c.tb = [5];
        c = tv(a, mt(a.j), c);
        yv(a, c.reverse(), b)
    }

    function yv(a, b, c) {
        b = u(b);
        for (var d = b.next(); !d.done; d = b.next())
            if (d = d.value, sv(a, d, void 0, c.j(d.R))) return !0;
        return !1
    }
    pv[8] = function(a) {
        var b = a.j.document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", function() {
            return pv[8](a)
        }, {
            once: !0
        }), !0;
        if (!a.l) return !1;
        if (fo(a.j)) return !0;
        b = uv(a);
        b.sb = [2, 4, 5];
        b = tv(a, mt(a.j), b);
        var c = new nv;
        if (yv(a, b, c)) return !0;
        if (a.X) switch (a.Y) {
            case 1:
                xv(a, c);
                break;
            default:
                vv(a)
        }
        return !0
    };
    pv[6] = fb(qv, 2);
    pv[7] = fb(qv, 1);

    function zv(a) {
        this.j = void 0 === a ? 1 : a
    }
    zv.prototype.next = function() {
        var a = 48271 * this.j % 2147483647;
        this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
        return this.j / 2147483647
    };

    function Av(a) {
        this.j = a.slice(0)
    }
    Av.prototype.filter = function(a) {
        return new Av(lb(this.j, a))
    };
    Av.prototype.apply = function(a) {
        return new Av(a(this.j.slice(0)))
    };

    function Bv(a, b) {
        return new Av(a.j.slice(0).sort(b))
    }

    function Cv(a, b) {
        if (0 > b) return a;
        a = a.j.slice(0);
        a.splice(b, 1);
        return new Av(a)
    }

    function Dv(a, b) {
        a = a.j.slice(0);
        var c = new zv(void 0 === b ? 1 : b);
        Db(a, function() {
            return c.next()
        });
        return new Av(a)
    };

    function Ev(a) {
        this.j = void 0 === a ? 0 : a
    };

    function Fv(a) {
        this.l = a;
        this.j = -1
    };

    function Gv(a) {
        var b = a.K();
        a = a.P.l();
        return 0 == a || 3 == a ? Hv(b.parentElement) : Hv(b)
    }

    function Hv(a) {
        for (var b = 0; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function Iv(a, b) {
        this.l = new Fv(a);
        this.j = new Ev(void 0 === b ? 0 : b)
    }

    function Jv(a, b) {
        var c = b.R.j + 200 * Math.min(20, Gv(b)),
            d = a.l;
        0 > d.j && (d.j = ml(d.l, !0) || 0);
        d = d.j - b.R.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.j;
        b = b.K();
        return c + (La(b.className) && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    };

    function Kv(a, b, c) {
        this.l = new Av(a);
        this.m = new Iv(b, void 0 === c ? 0 : c);
        this.j = b;
        this.o = new Ts
    }

    function Lv(a, b) {
        a = a.j;
        var c = ll(a);
        b = b.filter(c ? fb(Ot, c + pl(a)) : Eb);
        return b = b.j.slice(0)
    }

    function Mv(a, b) {
        if (null != b) {
            var c = [];
            b = u(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = null != e ? e.P.G : null;
                e = null != e ? e.R : null;
                if (null != d && null != e) {
                    var f = new vq;
                    f = M(f, 1, e.m);
                    f = M(f, 2, e.j);
                    e = M(f, 3, e.l);
                    f = new wq;
                    d = M(f, 1, d);
                    d = le(d, 2, e);
                    c.push(d)
                }
            }
            a = a.j;
            if (c) {
                (b = zq(a)) || (b = new xq);
                c = c.concat(O(b, wq, 5));
                b = new Set;
                d = [];
                for (e = 0; e < c.length; e++) b.has(L(c[e], 1)) || (d.push(c[e]), b.add(L(c[e], 1)));
                Aq({
                    Za: d
                }, a)
            }
        }
    }
    Kv.prototype.find = function(a) {
        var b = this,
            c = Ma(a.gc) ? a.gc : -1;
        if (c >= this.l.j.length) throw Error("AMA:PF:I");
        var d = a.Tb ? a.Tb : 0,
            e = Ma(a.Vb) ? a.Vb : 0,
            f = Ma(a.minWidth) ? a.minWidth : 0,
            g = Ma(a.maxWidth) ? a.maxWidth : Infinity,
            h = Ma(a.ma) ? a.ma : 0;
        c = Cv(this.l, c);
        c = c.filter(Ft(d));
        c = c.filter(Gt(a.ya || []));
        c = c.filter(Jt(a.eb || []));
        c = c.filter(Kt(a.lh || []));
        c = c.filter(Lt(a.tb || []));
        c = c.filter(Ht(a.sb || []));
        c = c.filter(Jb(Ss));
        c = c.apply(At(this.j));
        e = c.filter(Dt(e, this.j, a.Wa));
        e = e.filter(fb(Pt, f, g));
        a.La && (e = e.filter(Mt(this.j.document, a.La)));
        a.Ra && (f = Lv(this, e), Mv(this, f));
        e = e.filter(Bt(this.j));
        e = e.filter(It(h, this.j));
        e = a.Ua ? Bv(e, function(k, l) {
            var m = k.P.j,
                n = l.P.j;
            null == m || null == n ? null == m && null == n ? (m = b.m, k = Jv(m, k) - Jv(m, l)) : k = null == m ? 1 : -1 : k = m - n;
            return k
        }) : Bv(e, function(k, l) {
            var m = b.m;
            return Jv(m, k) - Jv(m, l)
        });
        a.Ta && (e = Dv(e, Kd(this.j.location.href + this.j.localStorage.google_experiment_mod)));
        Us(this.o, d, {
            Kc: c.j.length,
            Fd: e.j.length
        });
        return e.j.slice(0)
    };

    function Nv(a, b) {
        this.l = a;
        this.j = b;
        this.m = ["633794002", "633794005"]
    }

    function Ov(a, b, c, d) {
        var e = xf() && !(900 <= jl(a.l).clientWidth);
        d = lb(d, function(f) {
            return qb(a.m, f)
        }).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            pg_h: Pv(a.j.nb),
            pg_w: Pv(a.j.qd),
            c: Pv(a.j.gd),
            aa_c: Pv(a.j.Jc),
            av_h: Pv(a.j.Mc),
            av_w: Pv(a.j.Nc),
            av_a: Pv(a.j.Lc),
            s: Pv(a.j.md),
            all_s: Pv(a.j.ld),
            b: Pv(a.j.kd),
            all_b: Pv(a.j.jd),
            d: Pv(a.j.cb),
            all_d: Pv(a.j.bb),
            ard: Pv(a.j.Gc),
            all_ard: Pv(a.j.Fc),
            pd_h: Pv(a.j.sd),
            dt: e ? "m" : "d"
        }
    }

    function Qv(a) {
        var b = ml(a, !0),
            c = jl(a).scrollWidth,
            d = pl(a),
            e = [],
            f = [],
            g = [],
            h = [],
            k = [],
            l = [],
            m = [],
            n = 0,
            q = 0,
            t = Infinity,
            v = Infinity,
            z = null,
            R = Xs({
                la: !1
            }, a);
        R = u(R);
        for (var K = R.next(); !K.done; K = R.next()) {
            K = K.value;
            var za = K.getBoundingClientRect(),
                db = b - (za.bottom + d);
            if (K.className && -1 != K.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                var na = K.getAttribute("google_element_uid");
                var ha = a.google_sv_map;
                if (!na || !ha || !ha[na]) continue;
                na = (ha = vi(ha[na])) ? ha.height : 0;
                ha = ha ? ha.width : 0
            } else if (na = za.bottom - za.top, ha = za.right - za.left, 1 >= na || 1 >= ha) continue;
            e.push(na);
            g.push(ha);
            h.push(na * ha);
            et(K) ? (q += 1, K.className && -1 != K.className.indexOf("pedestal_container") && (z = na)) : (t = Math.min(t, db), l.push(za), n += 1, f.push(na), k.push(na * ha));
            v = Math.min(v, db);
            m.push(za)
        }
        t = Infinity === t ? null : t;
        v = Infinity === v ? null : v;
        d = Rv(l);
        m = Rv(m);
        f = Sv(b, f);
        l = Sv(b, e);
        k = Sv(b * c, k);
        R = Sv(b * c, h);
        return new Nv(a, {
            nb: b,
            qd: c,
            gd: n,
            Jc: q,
            Mc: Tv(e),
            Nc: Tv(g),
            Lc: Tv(h),
            md: d,
            ld: m,
            kd: t,
            jd: v,
            cb: f,
            bb: l,
            Gc: k,
            Fc: R,
            sd: z
        })
    }

    function Tv(a) {
        return We.apply(null, lb(a, function(b) {
            return 0 < b
        })) || null
    }

    function Sv(a, b) {
        return 0 >= a ? null : Ve.apply(null, b) / a
    }

    function Rv(a) {
        for (var b = Infinity, c = 0; c < a.length - 1; c++)
            for (var d = c + 1; d < a.length; d++) {
                var e = a[c],
                    f = a[d];
                e = Math.max(Math.max(0, e.left - f.right, f.left - e.right), Math.max(0, e.top - f.bottom, f.top - e.bottom));
                0 < e && (b = Math.min(e, b))
            }
        return Infinity !== b ? b : null
    }

    function Pv(a) {
        return null != a ? Number.isInteger(a) ? a.toString() : a.toFixed(3) : null
    };

    function Uv(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        this.m = a;
        this.G = b;
        this.j = c;
        this.o = d.ra;
        this.aa = d.ya || [];
        this.C = d.Vc || null;
        this.da = d.eb || [];
        this.I = d.La || [];
        this.F = !!e.Ta;
        this.H = !!e.Ua;
        this.ea = !!e.Ib;
        this.qa = !!e.lc;
        this.X = !!e.Jb;
        this.pa = !!e.dc;
        this.Y = e.Xb || 0;
        this.ga = !!e.Ra;
        this.l = !1;
        this.D = [];
        this.v = [];
        this.B = void 0
    }

    function Vv(a) {
        return a.B ? a.B : a.B = a.j.google_ama_state
    }

    function tv(a, b, c) {
        var d = ev(c.ra ? c.ra : a.o, b.Aa());
        return a.m.find({
            gc: Wv(a),
            Tb: c.type,
            Vb: d.Ea,
            Wa: b,
            ya: a.aa,
            ma: d.ma || void 0,
            Ta: a.F,
            Ua: a.H,
            sb: c.sb,
            minWidth: c.minWidth,
            maxWidth: c.maxWidth,
            eb: a.da,
            La: a.I,
            tb: c.tb,
            Ra: a.ga
        })
    }
    Uv.prototype.ba = function(a) {
        this.D.push(a)
    };

    function sv(a, b, c, d) {
        var e = b.P;
        if (e.o) return !1;
        var f = b.K(),
            g = e.l();
        if (!Qt(a.j, g, f, a.l)) return !1;
        c = null == c ? null : new iq(null, {
            google_max_responsive_height: c
        });
        f = kq(L(e.Sa, 2) || 0);
        d = jq(a.C, e.C ? e.C.j(b.R) : null, c, d || null, f, lq(e.j));
        b = b.fill(a.G, d);
        if (!wv(a, b, d)) return !1;
        sn(9, [e.j, e.Ub]);
        return !0
    }

    function wv(a, b, c) {
        if (!b) return !1;
        try {
            ss(a.j, b.T, c)
        } catch (d) {
            return Yq(b.ia), a.v.push(6), !1
        }
        return !0
    }

    function Wv(a) {
        var b = Vv(a);
        if (null == b) return -1;
        b = b.placement;
        return !Ma(b) || 0 > b || b > a.m.l.j.length ? -1 : b
    }

    function Xv(a, b) {
        b = (ll(b) || 0) - pl(b);
        for (var c = 0; c < a.length; c++) {
            var d = a[c].getBoundingClientRect();
            if (Yv(d) && d.top <= b) return !0
        }
        return !1
    }

    function Zv(a, b) {
        var c = ll(b),
            d = jl(b).clientWidth;
        if (0 == c || 0 == d) return 1;
        b = c - pl(b);
        for (var e = 0, f = 0; f < a.length; f++) {
            var g = a[f].getBoundingClientRect();
            Yv(g) && (e += (Math.min(g.bottom, b) - Math.min(g.top, b)) * (g.right - g.left))
        }
        return e / (c * d)
    }

    function $v(a) {
        var b = {},
            c = gt({
                la: !1,
                Ba: !1,
                Ca: !1,
                Da: !1
            }, a).map(function(d) {
                return d.getBoundingClientRect()
            }).filter(Yv);
        b.Bc = c.length;
        c = ht({
            Ca: !0
        }, a).map(function(d) {
            return d.getBoundingClientRect()
        }).filter(Yv);
        b.Sc = c.length;
        c = ht({
            Da: !0
        }, a).map(function(d) {
            return d.getBoundingClientRect()
        }).filter(Yv);
        b.od = c.length;
        c = ht({
            Ba: !0
        }, a).map(function(d) {
            return d.getBoundingClientRect()
        }).filter(Yv);
        b.Ec = c.length;
        c = (ll(a) || 0) - pl(a);
        c = gt({
            la: !1
        }, a).map(function(d) {
            return d.getBoundingClientRect()
        }).filter(Yv).filter(cb(aw, null, c));
        b.Cc = c.length;
        a = Qv(a);
        c = null != a.j.cb ? a.j.cb : null;
        null != c && (b.hd = c);
        a = null != a.j.bb ? a.j.bb : null;
        null != a && (b.Dc = a);
        return b
    }

    function Yv(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function aw(a, b) {
        return b.top <= a
    };

    function bw(a, b) {
        this.B = a.slice(0);
        this.l = a.slice(0);
        this.m = sb(this.l, 1);
        this.j = b
    }
    bw.prototype.C = function() {
        for (; 0 < this.l.length;) {
            if (!cw(this, this.l[0])) return !1;
            this.l.shift()
        }
        return !0
    };
    bw.prototype.o = function() {
        for (this.j.l = !0; 0 < this.l.length;) cw(this, this.l[0]) || this.j.ba(5), this.l.shift()
    };
    bw.prototype.v = function() {
        return new Vs(this.j.m.l.filter(Ss).j.length, this.j.D.slice(0), this.j.v.slice(0), this.j.m.l.j.length, this.j.m.o.j)
    };

    function cw(a, b) {
        b = pv[b];
        return b ? b(a.j) : (a.j.ba(12), !0)
    };

    function dw() {}
    dw.prototype.j = function() {
        var a = {};
        return new iq([], (a.google_tag_origin = "qs", a))
    };

    function ew() {}
    ew.prototype.j = function() {
        return new iq(["adsbygoogle-resurrected-ad-slot"], {})
    };

    function fw(a) {
        this.j = a
    }
    fw.prototype.l = function(a, b, c, d) {
        if (!this.j) return null;
        var e = this.j.google_ad_format || null,
            f = this.j.google_ad_slot || null;
        if (c = c.style) {
            for (var g = [], h = 0; h < c.length; h++) {
                var k = c.item(h);
                "width" !== k && "height" !== k && g.push({
                    qb: k,
                    value: c.getPropertyValue(k)
                })
            }
            c = {
                wa: g
            }
        } else c = {};
        a = qs(d.document, a, f, e, c, b);
        a.T.setAttribute("data-pub-vars", JSON.stringify(this.j));
        return a
    };
    fw.prototype.m = function() {
        return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
    };

    function gw(a, b) {
        this.j = a;
        this.l = b || null
    }

    function hw(a) {
        return Eq(a.j.document).map(function(b) {
            var c = new Os(b, 3);
            b = new fw(us(a.j, b));
            return new Qs(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    };
    var iw = {
        xb: "10px",
        $a: "10px"
    };

    function jw(a, b) {
        this.j = a;
        this.l = b || null
    }

    function kw(a) {
        return Cq(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(function(b) {
            return new Qs(new Os(b, 1), new Ks(iw), a.l, !1, 0, [], null, a.j, null)
        })
    };

    function lw(a) {
        this.j = a
    }

    function mw(a, b) {
        a = b.v(a.j);
        a.r = .1;
        X("ama_failure", a, .1)
    };

    function nw(a, b, c, d, e, f, g) {
        this.l = a;
        this.G = b;
        this.F = c;
        this.j = d;
        this.m = e;
        this.C = f;
        this.H = g || null;
        this.B = []
    }

    function ow(a) {
        a.C.forEach(function(b) {
            switch (b) {
                case 0:
                    dq(a.j) && 1 === L(dq(a.j), 1) && (b = N(dq(a.j), bq, 6)) && 2 === L(b, 1) && ts(a.l);
                    b = a.m.ud;
                    var c = eq(a.j) ? je(eq(a.j), 7) : !1,
                        d = kv(a.l, b);
                    a.m.N && null != L(a.m.N, 10) ? (c = he(N(a.m.N, $p, 10), 1), null !== c && void 0 !== c && (d = fv(a.l, c, !1))) : c && (c = eq(a.j) && null != L(eq(a.j), 9) ? he(eq(a.j), 9) : null, null !== c && (d = fv(a.l, c, !0)));
                    c = a.m.N ? L(a.m.N, 6) : [];
                    var e = a.m.N ? O(a.m.N, rp, 5) : [];
                    var f = a.j;
                    var g = O(f, Sp, 1),
                        h = a.m.N && fq(a.m.N, 1) ? "text_image" : "text",
                        k = new dw,
                        l = new ew;
                    var m = a.l;
                    for (var n = {
                            Oc: k,
                            $c: new Ns(h)
                        }, q = [], t = 0; t < g.length; t++) {
                        var v = Rs(g[t], t, m, n);
                        null === v || q.push(v)
                    }
                    m = q;
                    g.length != m.length && a.B.push(13);
                    m = m.concat(kw(new jw(a.l, k)));
                    g = 0;
                    dq(f) && 1 === L(dq(f), 1) && (k = N(dq(f), bq, 6)) && (g = L(k, 2) || 0, 1 === L(k, 1) && (l = hw(new gw(a.l, l)), m = m.concat(l)));
                    m = m.concat(Zu(f, h, a.l));
                    f = new Kv(m, a.l, g);
                    h = a.F;
                    l = a.l;
                    d = {
                        ra: d,
                        Vc: a.H,
                        ya: a.m.ya,
                        eb: c,
                        La: e
                    };
                    eq(a.j) ? (c = eq(a.j), e = je(c, 14), g = je(c, 2), k = je(c, 3), m = je(c, 4), n = je(c, 5), q = je(c, 6), t = he(c, 8), c = {
                        Ta: e,
                        Ua: g,
                        Ib: k,
                        lc: m,
                        Jb: n,
                        dc: q,
                        td: null == t ? 0 : t,
                        Xb: L(c, 10),
                        Ra: je(c, 12)
                    }) : c = {
                        Ta: !1,
                        Ua: !1,
                        Ib: !1,
                        lc: !1,
                        Jb: !1,
                        dc: !1,
                        td: 0,
                        Xb: 0,
                        Ra: !1
                    };
                    a.o = new Uv(f, h, l, d, c);
                    d = a.m.N ? L(a.m.N, 2) : [];
                    b = L(b, 1);
                    c = a.o;
                    e = !fo(c.j);
                    f = c.pa;
                    e = void 0 === e ? !1 : e;
                    f = void 0 === f ? !1 : f;
                    h = []; - 1 < d.indexOf(3) && h.push(6); - 1 < d.indexOf(4) && !f && e && h.push(8); - 1 < d.indexOf(1) && (3 === b ? h.push(1, 5) : h.push(1, 2, 3)); - 1 < d.indexOf(2) && h.push(7); - 1 < d.indexOf(4) && f && e && h.push(8);
                    b = new bw(h, c);
                    a.v = b;
                    b = a.v;
                    d = new au;
                    b.o();
                    try {
                        d.resolve(new eu(b.v(), void 0))
                    } catch (z) {
                        d.reject(z)
                    }
                    d.j.then(cb(a.I, a), cb(a.D, a));
                    break;
                case 1:
                    if (b = N(a.j, Hp, 14))
                        if (d = a.l, c = a.l.location.href, e = new ju(jt(mt(d))), e = new Eu(d, c, b, new ku(d), e), b = L(e.j, 1))
                            for (lu(e.m), c = Fu(e), f = 0; f < c.length; ++f)
                                if (h = c[f], d = yu(h)) {
                                    c = e.m;
                                    f = h.v;
                                    h = L(h.m, 3) || "";
                                    e = L(e.j, 3) || null;
                                    l = "afs_container_" + Ya(d);
                                    d.id = l;
                                    b = {
                                        pubId: b,
                                        styleId: h,
                                        query: f
                                    };
                                    e && (b.fexp = e);
                                    c.j._googCsa("ads", b, {
                                        container: l
                                    });
                                    break
                                }
                    break;
                case 2:
                    (b = N(a.j, Jp, 18)) && L((new Iu(b)).j, 1)
            }
        })
    }

    function pw(a, b) {
        for (var c = Lu(Lu(new Nu(b.xa), b.ka), a.B), d = b.Ha, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.o.length; g++)
                if (c.o[g] == f) break a;c.o.push(f)
        }
        c.j.eatf = b.Xa;
        c.j.reatf = b.hb;
        c.j.a = a.v.B.slice(0).join(",");
        c = Ku(Pu(Ou(c, a.j), a.C), a.F);
        if (d = b.Ab) c.j.as_count = d.Bc, c.j.d_count = d.Sc, c.j.ng_count = d.od, c.j.am_count = d.Ec, c.j.atf_count = d.Cc, c.j.mdns = Qu(d.hd), c.j.alldns = Qu(d.Dc);
        d = b.ob;
        null != d && (c.j.allp = d);
        if (d = b.Wc) {
            e = [];
            f = [];
            for (var h in d.j) y(d.j[h]) && d.j.hasOwnProperty(h) && f.push(d.l[h]);
            h = u(f);
            for (f = h.next(); !f.done; f = h.next()) f = f.value, 0 < d.get(f).length && (g = d.get(f)[0], e.push("(" + [f, g.Kc, g.Fd].join() + ")"));
            c.j.fd = e.join(",")
        }
        h = b.nb;
        null != h && (c.j.pgh = h);
        y(b.exception) && Mu(c, b.exception).ba(1);
        0 < b.ka.length || 0 < a.B.length || y(b.exception) ? mw(a.G, c) : (a = c.v(a.G.j), a.r = .1, X("ama_success", a, .1))
    }

    function qw(a) {
        return dq(a.j) && 1 === L(dq(a.j), 1) ? !(N(dq(a.j), bq, 6) && 1 <= (L(N(dq(a.j), bq, 6), 3) || 0)) : !1
    }

    function rw(a) {
        if (qw(a)) {
            a = a.o;
            var b = ht({
                Ca: !0,
                Da: !0
            }, a.j);
            a = Xv(b, a.j)
        } else a = a.o.j, b = gt({
            la: !1,
            Ba: !1
        }, a), a = Xv(b, a);
        return a
    }
    nw.prototype.I = function(a) {
        try {
            var b = rw(this) || qw(this) ? rw(this) : void 0;
            if (eq(this.j) && je(eq(this.j), 12)) {
                if (qw(this)) {
                    var c = this.o,
                        d = ht({
                            Ca: !0,
                            Da: !0
                        }, c.j);
                    var e = Zv(d, c.j)
                } else {
                    var f = this.o,
                        g = gt({
                            la: !1,
                            Ba: !1
                        }, f.j);
                    e = Zv(g, f.j)
                }
                var h = N(this.j, jp, 19);
                if (h) {
                    var k = kv(this.l, h),
                        l = new uq,
                        m = ev(k, 0).Ea;
                    M(l, 3, m);
                    M(l, 1, k.j);
                    M(l, 2, k.m);
                    Aq({
                        za: b,
                        Oa: e,
                        Ya: l
                    }, this.l)
                } else Aq({
                    za: b,
                    Oa: e
                }, this.l)
            } else Aq({
                za: b
            }, this.l);
            var n = rw(this);
            var q = Vv(this.o),
                t = a.j,
                v = t.j,
                z = t.xa,
                R = t.ka.slice(),
                K = t.Ha.slice(),
                za = a.exception;
            if (q) {
                q.numAutoAdsPlaced ? z += q.numAutoAdsPlaced : this.v.m && K.push(13);
                y(q.exception) && (za = q.exception);
                var db = {
                    xa: z,
                    ob: v,
                    ka: t.ka.slice(),
                    Ha: K,
                    exception: za,
                    hb: n,
                    Xa: !!q.eatf
                }
            } else K.push(12), this.v.m && K.push(13), db = {
                xa: z,
                ob: v,
                ka: R,
                Ha: K,
                exception: za,
                hb: n,
                Xa: !1
            };
            b = db;
            b.Ab = $v(this.o.j);
            var na = a.j.l;
            na && (b.Wc = na);
            b.nb = ml(this.l, !0);
            pw(this, b)
        } catch (ha) {
            this.D(ha)
        }
    };
    nw.prototype.D = function(a) {
        pw(this, {
            xa: 0,
            ob: void 0,
            ka: [],
            Ha: [],
            exception: a,
            hb: void 0,
            Xa: void 0,
            Ab: void 0
        })
    };

    function sw(a) {
        return 5 == a.google_pgb_reactive && !!a.google_reactive_ads_config
    }

    function tw(a, b) {
        var c = b.j,
            d = b.A;
        d.google_reactive_plat = Fo(c, d);
        var e = Go(a);
        e && (d.google_reactive_plaf = e);
        (e = Ho(a)) && (d.google_reactive_fba = e);
        uw(a, d);
        e = Ao(c.location);
        vw(a, e, d);
        e ? (d.fra = e, d.google_pgb_reactive = 6) : d.google_pgb_reactive = 5;
        e = W(429, function(h, k) {
            return ww(c, d.google_ad_client, a, h, k)
        });
        var f = fl(c),
            g = W(430, fb(sl, c, 431, ej));
        Mk(c, "rsrai", e, g);
        f.wasReactiveTagRequestSent = !0;
        xw(b, a)
    }

    function xw(a, b) {
        var c = a.j,
            d = a.A,
            e = B(b.page_level_pubvars) ? b.page_level_pubvars : {};
        a = W(353, function(f, g) {
            var h = d.google_ad_client;
            if (Dg(g.origin, gh)) a: {
                f = f.config;
                try {
                    var k = c.localStorage.getItem("google_ama_config")
                } catch (z) {
                    k = null
                }
                try {
                    var l = k ? oe(Up, k) : null
                } catch (z) {
                    l = null
                }
                k = l;b: {
                    if (f) try {
                        var m = oe(Up, f);
                        break b
                    } catch (z) {
                        pq(c, {
                            cfg: 1,
                            inv: 1
                        })
                    }
                    m = null
                }
                if (m) {
                    k = new Wp;
                    le(m, 3, k);
                    l = eq(m) && L(eq(m), 13) ? L(eq(m), 13) : 1;
                    l = C() + 864E5 * l;
                    M(k, 1, l);
                    l = !1;
                    k = new m.constructor(pe(me(m)));
                    eq(k) && (je(eq(k), 12) && (l = !0), le(k, 15, void 0), l && (l = new cq, M(l, 12, !0), le(k, 15, l)));
                    dq(k) && (le(dq(k), 5, void 0), M(dq(k), 3, void 0));
                    l = O(k, Sp, 1);
                    for (f = 0; f < l.length; f++) M(l[f], 11, []);
                    try {
                        c.localStorage.setItem("google_ama_config", k.C())
                    } catch (z) {
                        pq(c, {
                            lserr: 1
                        })
                    }
                    k = gq(c.location.pathname, O(m, Xp, 7));
                    b: {
                        if (k && (l = L(k, 3), f = N(m, mp, 9), l && f)) {
                            c: {
                                f = O(f, lp, 1);f = u(f);
                                for (g = f.next(); !g.done; g = f.next())
                                    if (g = g.value, L(g, 1) == l) {
                                        l = N(g, jp, 2) || null;
                                        break c
                                    }
                                l = null
                            }
                            if (l) break b
                        }
                        l = N(m, jp, 8) || new jp
                    }
                    l = {
                        ud: l
                    };
                    k && (l.N = k);
                    k && fq(k, 3) && (l.ya = [1]);
                    if (7 == e.google_pgb_reactive && (k = l.N, !k || !ie(k, 8))) {
                        h = !1;
                        break a
                    }
                    k = qq(e);
                    if (yi(c, 2)) {
                        sn(5, [me(m)]);
                        if (Oh(222) && !wi(c).ama_ran_on_page) {
                            wi(c).ama_ran_on_page = !0;
                            f = jq(mq, new iq(null, k));
                            try {
                                var n = gq(c.location.pathname, O(m, Xp, 7));
                                if (n && fq(n, 1)) {
                                    if (L(n, 4)) {
                                        g = {};
                                        var q = new iq(null, (g.google_package = L(n, 4), g));
                                        f = jq(f, q)
                                    }
                                    var t = new Wt(c, h, m, n, f),
                                        v = new au;
                                    (new fu(c, t, v)).start();
                                    v.j.then(fb(hu, c), fb(iu, c))
                                }
                            } catch (z) {
                                pq(c, {
                                    atf: -1
                                })
                            }
                        }
                        n = (n = l.N) && L(n, 4) || "";
                        k.google_package = n;
                        n = new lw(c);
                        q = new iq(["google-auto-placed"], k);
                        if (h)
                            if (m) {
                                t = [];
                                N(m, Jp, 18) && t.push(2);
                                l.N && t.push(0);
                                N(m, Hp, 14) && t.push(1);
                                try {
                                    ow(new nw(c, n, h, m, l, t, q))
                                } catch (z) {
                                    mw(n, Mu(Pu(Ou(Ku(new Nu(0), h), m), t).ba(1), z))
                                }
                            } else mw(n, Ku(new Nu(0), h).ba(8));
                        else mw(n, (new Nu(0)).ba(9))
                    }
                    h = !0
                } else {
                    if (k) {
                        pq(c, {
                            cfg: 1,
                            cl: 1
                        });
                        try {
                            c.localStorage.removeItem("google_ama_config")
                        } catch (z) {
                            pq(c, {
                                lserr: 1
                            })
                        }
                    }
                    h = !1
                }
            }
            else h = !1;
            return h
        });
        b = W(353, fb(sl, c, 353, ej));
        Mk(c, "apcnf", a, b)
    }

    function ww(a, b, c, d, e) {
        if (!Dg(e.origin, gh)) return !1;
        d = d.data;
        if (!d || !A(d)) return !1;
        if (!yi(a, 1)) return !0;
        sn(6, [d]);
        var f = [];
        e = [];
        for (var g = fl(a), h = 0; h < d.length; h++)
            if (d[h]) {
                var k = d[h],
                    l = k.adFormat;
                g && k.enabledInAsfe && (g.reactiveTypeEnabledInAsfe[l] = !0);
                k.noCreative || (k.google_reactive_sra_index = h, f.push(k), e.push(l))
            }
        X("rasra::pm", {
            rt: e.join(","),
            c: b
        }, .1);
        Mo(522, function(m) {
            yw(f, a, b, m, c)
        });
        return !0
    }

    function yw(a, b, c, d, e) {
        for (var f = [], g = {}, h = 0; h < a.length; g = {
                Ia: g.Ia,
                O: g.O
            }, h++) {
            g.O = a[h];
            var k = g.O.adFormat,
                l = g.O.adKey,
                m = g.O.piggyback;
            g.Ia = d.configProcessorForAdFormat(k);
            if (k && g.Ia && (m || l)) {
                if (m) l = Po(k, e, g.O.pubVars), l.google_pgb_reactive = l.google_pgb_reactive || 5, g.O.pubVars = l;
                else {
                    delete g.O.adKey;
                    m = {};
                    var n = e.page_level_pubvars;
                    B(n) && Ub(m, n);
                    m.google_ad_unit_key = l;
                    m.google_reactive_sra_index = g.O.google_reactive_sra_index;
                    30 === k && (m.google_reactive_ad_format = 30);
                    ck(Qm(), 134) === Xm.$ && (m.google_enable_single_iframe = !0);
                    m.google_pgb_reactive = m.google_pgb_reactive || 5;
                    g.O.pubVars = m
                }
                delete g.O.google_reactive_sra_index;
                f.push(k);
                Ak(466, function(q) {
                    return function() {
                        return q.Ia.verifyAndProcessConfig(b, q.O)
                    }
                }(g))
            } else X("rasra::ivc", {
                af: k,
                ak: l,
                c: c
            }, .1)
        }
        X("rasra::pr", {
            rt: f.join(","),
            c: c
        }, .1)
    }

    function uw(a, b) {
        var c = [],
            d = !1;
        S(Hi, function(e, f) {
            var g;
            if (a.hasOwnProperty(f)) {
                var h = a[f];
                B(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
            }
            f = Hi[f] - 1;
            c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function vw(a, b, c) {
        var d = a.page_level_pubvars;
        !c.google_adtest && ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
    };
    var zw = {},
        Aw = (zw.client = "google_ad_client", zw.format = "google_ad_format", zw.slotname = "google_ad_slot", zw.ad_type = "google_ad_type", zw);

    function Bw(a) {
        Nf(Aw, function(b, c) {
            try {
                null != x[b] && (a[c] = x[b])
            } catch (d) {}
        })
    }

    function Cw(a) {
        a.shv = dh()
    }
    vk.o = !gh;

    function Dw(a, b, c) {
        this.B = a;
        this.C = b;
        this.j = c;
        this.o = null;
        this.l = this.m = 0
    }
    Dw.prototype.v = function() {
        10 <= ++this.m && x.clearInterval(this.o);
        var a;
        a = (a = this.C.parentElement) ? (a = If(a, this.B)) ? a.direction : "" : "";
        var b = this.B,
            c = this.C;
        if (0 === jo(b, c, a)) a = !1;
        else {
            io(c, a, "0px");
            var d = jo(b, c, a);
            io(c, a, -1 * d + "px");
            b = jo(b, c, a);
            0 !== b && b !== d && io(c, a, d / (b - d) * d + "px");
            a = !0
        }
        a && (a = xi(this.j).join(","), this.l++, X("rspv:al", {
            aligns: this.l,
            attempt: this.m,
            client: this.j.google_ad_client,
            eids: a,
            slot: this.j.google_ad_slot,
            url: this.j.google_page_url
        }))
    };

    function Ew(a) {
        this.o = [];
        this.l = a || window;
        this.j = 0;
        this.m = null;
        this.v = 0
    }
    var Fw;
    p = Ew.prototype;
    p.Tc = function(a, b) {
        0 != this.j || 0 != this.o.length || b && b != window ? this.Kb(a, b) : (this.j = 2, this.cc(new Gw(a, window)))
    };
    p.Kb = function(a, b) {
        this.o.push(new Gw(a, b || this.l));
        Hw(this)
    };
    p.rd = function(a) {
        this.j = 1;
        if (a) {
            var b = W(188, cb(this.ac, this, !0));
            this.m = this.l.setTimeout(b, a)
        }
    };
    p.ac = function(a) {
        a && ++this.v;
        1 == this.j && (null != this.m && (this.l.clearTimeout(this.m), this.m = null), this.j = 0);
        Hw(this)
    };
    p.Bd = function() {
        return !(!window || !Array)
    };
    p.Xc = function() {
        return this.v
    };

    function Hw(a) {
        var b = W(189, cb(a.Ed, a));
        a.l.setTimeout(b, 0)
    }
    p.Ed = function() {
        if (0 == this.j && this.o.length) {
            var a = this.o.shift();
            this.j = 2;
            var b = W(190, cb(this.cc, this, a));
            a.ca.setTimeout(b, 0);
            Hw(this)
        }
    };
    p.cc = function(a) {
        this.j = 0;
        a.j()
    };

    function Iw(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function Jw(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && Iw(a) && Zh(a.nq) && Zh(a.nqa) && Zh(a.al) && Zh(a.rl)
    }
    Ew.prototype.nq = Ew.prototype.Tc;
    Ew.prototype.nqa = Ew.prototype.Kb;
    Ew.prototype.al = Ew.prototype.rd;
    Ew.prototype.rl = Ew.prototype.ac;
    Ew.prototype.sz = Ew.prototype.Bd;
    Ew.prototype.tc = Ew.prototype.Xc;

    function Gw(a, b) {
        this.j = a;
        this.ca = b
    };

    function Kw(a, b, c) {
        ul.call(this, a);
        var d = this;
        this.l = b;
        this.B = c;
        this.o = !1;
        this.m = function() {
            !d.o && d.l.getAttribute("data-google-query-id") && Lw(d.j, d.B.google_ad_client, null)
        };
        Q(this.l, "load", this.m)
    }
    ka(Kw, ul);
    Kw.prototype.L = function() {
        Jg(this.l, "load", this.m);
        ul.prototype.L.call(this)
    };

    function Mw(a) {
        try {
            var b = a.localStorage.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Ob(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && La(e) && A(d)
            })
        } catch (d) {
            return {}
        }
    }

    function Lw(a, b, c) {
        var d = Mw(a),
            e = null == c,
            f = null != c && 0 == O(c, He, 2).length && 0 == L(c, 3).length;
        !e && !f || Oh(211) ? e || (d[b] = me(c)) : delete d[b];
        try {
            a: {
                for (var g in d) {
                    var h = !1;
                    break a
                }
                h = !0
            }
            h && !Oh(211) ? a.localStorage.removeItem("google_adsense_settings") : a.localStorage.setItem("google_adsense_settings", JSON.stringify(d));
            return !0
        }
        catch (k) {
            return !1
        }
    }
    Kw.prototype.ua = function(a) {
        a["adsense-labs"] = this.v
    };
    Kw.prototype.v = function(a) {
        if (a = rl(a).settings) try {
            var b = new ve(JSON.parse(a));
            null != L(b, 1) && Lw(this.j, L(b, 1) || "", b) && (this.o = !0)
        } catch (c) {}
    };
    var Nw = (new Date).getTime();

    function Ow(a) {
        var b = {};
        b.dtd = Pw((new Date).getTime(), Nw);
        return ci(b, a)
    }

    function Pw(a, b, c) {
        a -= b;
        return a >= (void 0 === c ? 1E5 : c) ? "M" : 0 <= a ? a : "-M"
    };

    function Qw(a) {
        var b = this;
        this.j = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {},
            upd: function(c, d) {
                var e = c;
                var f = /\brx=(\d+)/,
                    g = f.exec(e);
                g && (e = e.replace(f, "rx=" + (+g[1] + 1 || 1)));
                f = Number;
                a: {
                    if (c && (c = c.match("dt=([^&]+)")) && 2 == c.length) {
                        c = c[1];
                        break a
                    }
                    c = ""
                }
                c = f(c);
                e = e.replace(/&dtd=(\d+|-?M)/, "&dtd=" + Pw((new Date).getTime(), c));
                b.set(d, e);
                return e
            }
        });
        this.l = a.google_iframe_oncopy
    }
    Qw.prototype.set = function(a, b) {
        var c = this;
        this.l.handlers[a] = b;
        this.j.addEventListener && this.j.addEventListener("load", function() {
            var d = c.j.document.getElementById(a);
            try {
                var e = d.contentWindow.document;
                if (d.onload && e && (!e.body || !e.body.firstChild)) d.onload()
            } catch (f) {}
        }, !1)
    };
    Fd("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");

    function Rw(a) {
        switch (a) {
            case "":
            case "Test":
            case "Real":
                return !0;
            default:
                return !1
        }
    }

    function Sw(a) {
        var b = Oh(226);
        this.m = a;
        this.l = void 0 === b ? !1 : b;
        this.j = new Me(a.document)
    }
    Sw.prototype.write = function(a) {
        var b = a.I();
        if (this.l) {
            if (!Rw(this.j.get("__gads", ""))) return;
            Rw(b) || (b = "Real")
        }
        this.j.set("__gads", b, a.G() - this.m.Date.now() / 1E3, a.F(), a.l(), !1)
    };
    var Tw = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Uw = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;

    function Vw(a) {
        return Tw.test(a) && !Uw.test(a)
    }

    function Ww() {
        return x
    }
    var Xw = x;

    function Yw(a) {
        a = "https://adservice" + (a + "/adsid/integrator.js");
        var b = ["domain=" + encodeURIComponent(x.location.hostname)];
        Z[3] >= C() && b.push("adsid=" + encodeURIComponent(Z[1]));
        return a + "?" + b.join("&")
    }
    var Z, Zw;

    function $w() {
        Xw = Ww();
        Z = Xw.googleToken = Xw.googleToken || {};
        var a = C();
        Z[1] && Z[3] > a && 0 < Z[2] || (Z[1] = "", Z[2] = -1, Z[3] = -1, Z[4] = "", Z[6] = "");
        Zw = Xw.googleIMState = Xw.googleIMState || {};
        Vw(Zw[1]) || (Zw[1] = ".google.com");
        A(Zw[5]) || (Zw[5] = []);
        "boolean" !== typeof Zw[6] && (Zw[6] = !1);
        A(Zw[7]) || (Zw[7] = []);
        "number" !== typeof Zw[8] && (Zw[8] = 0)
    }
    var ax = {
        gb: function() {
            return 0 < Zw[8]
        },
        xd: function() {
            Zw[8]++
        },
        yd: function() {
            0 < Zw[8] && Zw[8]--
        },
        zd: function() {
            Zw[8] = 0
        },
        mh: function() {
            return !1
        },
        Mb: function() {
            return Zw[5]
        },
        Eb: function(a) {
            try {
                a()
            } catch (b) {
                x.setTimeout(function() {
                    throw b;
                }, 0)
            }
        },
        Zb: function() {
            if (!ax.gb()) {
                var a = x.document,
                    b = function(e) {
                        e = Yw(e);
                        a: {
                            try {
                                var f = Oa();
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        to(a, e, f);
                        f = a.createElement("script");
                        f.type = "text/javascript";
                        f.onerror = function() {
                            return x.processGoogleToken({}, 2)
                        };
                        e = vf(e);
                        Ed(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), ax.xd()
                        } catch (g) {}
                    },
                    c = Zw[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT", b);
                x.setTimeout(function() {
                    return x.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    };

    function bx(a) {
        $w();
        var b = Xw.googleToken[5] || 0;
        a && (0 != b || Z[3] >= C() ? ax.Eb(a) : (ax.Mb().push(a), ax.Zb()));
        Z[3] >= C() && Z[2] >= C() || ax.Zb()
    }

    function cx(a) {
        x.processGoogleToken = x.processGoogleToken || function(b, c) {
            var d = b;
            d = void 0 === d ? {} : d;
            c = void 0 === c ? 0 : c;
            b = d.newToken || "";
            var e = "NT" == b,
                f = parseInt(d.freshLifetimeSecs || "", 10),
                g = parseInt(d.validLifetimeSecs || "", 10),
                h = d["1p_jar"] || "";
            d = d.pucrd || "";
            $w();
            1 == c ? ax.zd() : ax.yd();
            var k = Xw.googleToken = Xw.googleToken || {},
                l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
            e = e && !ax.gb() && (!(Z[3] >= C()) || "NT" == Z[1]);
            var m = !(Z[3] >= C()) && 0 != c;
            if (l || e || m) e = C(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && Kg("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, $w();
            if (l || !ax.gb()) {
                c = ax.Mb();
                for (b = 0; b < c.length; b++) ax.Eb(c[b]);
                c.length = 0
            }
        };
        bx(a)
    };
    Nd("script");
    var dx = W(215, function(a) {
        var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || X("shimpl", {
            t: "no_fn"
        });
        Xa(c) && Ak(216, c);
        b.length && a.setTimeout(function() {
            return dx(a)
        }, 0)
    });

    function ex(a) {
        var b = jf(document, "IFRAME");
        S(a, function(c, d) {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function fx(a) {
        var b = ["<iframe"];
        S(a, function(c, d) {
            null != c && b.push(" " + d + '="' + Fd(c) + '"')
        });
        b.push("></iframe>");
        return b.join("")
    }

    function gx(a, b, c, d) {
        null != b && (a.width = b && "" + b);
        null != c && (a.height = c && "" + c);
        a.frameborder = "0";
        d && (a.src = d);
        a.marginwidth = "0";
        a.marginheight = "0";
        a.vspace = "0";
        a.hspace = "0";
        a.allowtransparency = "true";
        a.scrolling = "no";
        a.allowfullscreen = "true"
    };

    function hx(a, b) {
        Mk(a, "adpnt", function(c, d) {
            ol(d, b.contentWindow) ? (b.dataset.googleQueryId || (c = rl(c).qid, b.setAttribute("data-google-query-id", c)), c = !0) : c = !1;
            return c
        })
    };

    function ix(a, b, c) {
        bl.call(this);
        var d = this;
        this.l = a;
        this.v = b;
        this.m = c;
        this.B = 0;
        this.m && (this.o = jx(this), this.F = Lb(this.D, this), this.j = W(433, function() {
            var e = d.F;
            P.requestAnimationFrame ? P.requestAnimationFrame(e) : e()
        }), Q(this.l, "scroll", this.j, Gg))
    }
    ka(ix, bl);

    function jx(a) {
        var b = a.m.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.l.innerHeight) && !c
    }
    ix.prototype.D = function() {
        var a = jx(this);
        if (a && !this.o) {
            var b = {
                    rr: "vis-bcr"
                },
                c = this.v.contentWindow;
            c && (Rk(c, "ig", b, "*", 2), 10 <= ++this.B && this.j && Jg(this.l, "scroll", this.j, Gg))
        }
        this.o = a
    };
    var kx = {
        display: "block",
        left: "auto",
        position: "fixed",
        bottom: "0px"
    };

    function lx(a, b, c) {
        a.j && ul.call(this, a.j);
        var d = this;
        this.o = b;
        this.B = (this.I = a.iframeWin && ii(a.A) ? a.iframeWin.frameElement : b) ? this.I : a.l;
        this.l = c;
        this.H = this.l.parentElement;
        this.X = parseInt(this.l.style.height, 10);
        this.F = null;
        this.Ka = !1;
        this.pa = "";
        this.m = 0;
        this.v = Ah(this.B).y;
        this.qa = null;
        this.Ja = x.requestAnimationFrame || x.webkitRequestAnimationFrame || x.mozRequestAnimationFrame || x.oRequestAnimationFrame || x.msRequestAnimationFrame;
        this.Y = W(636, function() {
            d.Ja.call(d.j, d.Y);
            var e = d.j.innerHeight,
                f = pl(d.j);
            d.v = Ah(d.H).y;
            f + e > d.v ? (f = f + e - d.v, e = Math.min(f, d.X), f = d.m - f, f = Math.max(0, f), 0 >= f ? uh(d.l, {
                position: "absolute",
                top: "0px",
                bottom: "auto"
            }) : uh(d.l, {
                position: "fixed",
                top: "auto",
                bottom: "0px"
            }), uh(d.l, {
                clip: "rect(" + f + "px, " + d.o.width + "px, " + (f + e) + "px, 0px)"
            })) : uh(d.l, {
                clip: "rect(3000px, " + d.o.width + "px, 0px, 0px)"
            })
        })
    }
    ka(lx, ul);

    function mx(a, b) {
        var c = a.pubWin.document.getElementById(a.A.google_async_iframe_id + "_anchor");
        c && new lx(a, b, c)
    }
    lx.prototype.ua = function(a) {
        a["parallax-scroll"] = this.xc
    };
    lx.prototype.xc = function(a, b) {
        a = rl(a);
        this.F = a.i_expid;
        this.pa = a.qid;
        this.qa = a.gen204_fraction;
        if (!this.Ka && (b.source === this.o.contentWindow || b.source.parent === this.o.contentWindow)) {
            this.Ka = !0;
            a = nx(this, a);
            var c = {};
            c = (c.msg_type = "parallax-scroll-result", c.ps_success = "0" === a, c);
            b = b.source;
            c.googMsgType = "sth";
            b.postMessage(Ek(c), "*");
            b = {
                err: a
            };
            b = void 0 === b ? {} : b;
            this.F && (b.eid = this.F);
            b.qid = this.pa;
            X("pscrl", b, ah(String(this.qa), .05))
        }
    };

    function nx(a, b) {
        if (!a.Ja) return "1";
        b = Tf(b.r_nh);
        a.m = null == b ? 0 : b;
        if (0 >= a.m) return "2";
        a.v = Ah(a.B).y;
        b = a.j.innerHeight;
        if (a.v + a.X < b) return "4";
        if (a.v > ml(a.j) - b) return "3";
        a.B && (a.B.setAttribute("height", a.m), a.B.style.height = a.m + "px");
        a.o.setAttribute("height", a.m);
        a.o.style.height = a.m + "px";
        uh(a.l, kx);
        a.l.style.height = a.m + "px";
        a.H.style.position = "relative";
        a.Y();
        return "0"
    }
    lx.prototype.L = function() {
        this.H = this.l = this.B = this.I = this.o = null;
        ul.prototype.L.call(this)
    };

    function ox(a) {
        var b = [5, 8, 9],
            c = [3, 4],
            d = void 0,
            e = 2;
        b = void 0 === b ? px : b;
        c = void 0 === c ? qx : c;
        d = void 0 === d ? rx : d;
        e = void 0 === e ? 0 : e;
        this.j = Ze(a);
        this.o = b;
        this.v = c;
        this.m = d;
        this.l = e
    }

    function sx(a, b) {
        var c = ff(a.j.j),
            d = a.j.j;
        return new Kl(function(e, f) {
            var g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(function(k) {
                                    var l = new kk,
                                        m = ok(l, function() {
                                            return tx(a, k)
                                        });
                                    m && (l.l.length && (m.executionTime = Math.round(Number(l.l[0].duration))), h.disconnect(), e(m))
                                }, ux);
                                h.observe(b)
                            } else f(new Tl("5"));
            else f(new Tl("4"));
            else f(new Tl("3"));
            else f(new Tl("2"));
            else f(new Tl("1"))
        })
    }

    function tx(a, b) {
        function c(n) {
            return qb(a.o, n.overlapType) && qb(a.v, n.overlapDepth) && qb(a.m, n.overlapDetectionPoint)
        }
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        var d = b.getBoundingClientRect(),
            e = df(ff(a.j.j) || window);
        if (0 >= d.bottom || d.bottom > e.height || 0 >= d.right || d.left >= e.width) return null;
        var f = vx(a, b, d, a.j.j.elementsFromPoint(Ue(d.left + d.width / 2, d.left, d.right - 1), Ue(d.bottom - 1 - a.l, d.top, d.bottom - 1)), 1, []),
            g = vx(a, b, d, a.j.j.elementsFromPoint(Ue(d.left + d.width / 2, d.left, d.right - 1), Ue(d.top + a.l, d.top, d.bottom - 1)), 2, f.ja),
            h = vx(a, b, d, a.j.j.elementsFromPoint(Ue(d.left + a.l, d.left, d.right - 1), Ue(d.top + d.height / 2, d.top, d.bottom - 1)), 3, w(f.ja).concat(w(g.ja))),
            k = vx(a, b, d, a.j.j.elementsFromPoint(Ue(d.right - 1 - a.l, d.left, d.right - 1), Ue(d.top + d.height / 2, d.top, d.bottom - 1)), 4, w(f.ja).concat(w(g.ja), w(h.ja))),
            l = wx(a, b, d);
        f = lb(w(f.entries).concat(w(g.entries), w(h.entries), w(k.entries)), c);
        g = lb(l, c);
        l = w(f).concat(w(g));
        h = d.left < -a.l || d.right > e.width + a.l;
        h = 0 < l.length || h;
        k = ef(a.j.j);
        var m = new rh(d.left, d.top, d.width, d.height);
        f = w(mb(f, function(n) {
            return new rh(n.elementRect.left, n.elementRect.top, n.elementRect.width, n.elementRect.height)
        })).concat(w(Cb(mb(g, function(n) {
            return th(m, n.elementRect)
        }))), w(lb(th(m, new rh(0, 0, e.width, e.height)), function(n) {
            return 0 <= n.top && n.top + n.height <= e.height
        })));
        return {
            entries: l,
            isOverlappingOrOutsideViewport: h,
            scrollPosition: {
                scrollX: k.x,
                scrollY: k.y
            },
            target: b,
            targetRect: d,
            viewportSize: {
                width: e.width,
                height: e.height
            },
            overlappedArea: 20 > f.length ? xx(m, f) : yx(d, f)
        }
    }

    function xx(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        for (var c = 0, d = 1; d < 1 << b.length; d++) {
            for (var e = a, f = 0, g = 0; g < b.length && (!(d & 1 << g) || (f++, e = sh(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function yx(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        for (var c = 0, d = a.left; d <= a.right; d++)
            for (var e = a.top; e <= a.bottom; e++)
                for (var f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function vx(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            ja: []
        };
        for (var g = [], h = [], k = 0; k < d.length; k++) {
            var l = d[k];
            if (l !== b && !qb(f, l)) {
                h.push(l);
                var m = l.getBoundingClientRect();
                if (a.j.contains(l, b)) g.push(zx(a, c, l, m, 1, e));
                else if (a.j.contains(b, l)) g.push(zx(a, c, l, m, 2, e));
                else {
                    var n = a,
                        q = b,
                        t = n.j.m(q, l);
                    if (t) {
                        var v = Ax(n, q, t, l) || {};
                        var z = v.suspectAncestor;
                        v = v.sa;
                        q = Ax(n, l, t, q) || {};
                        n = q.suspectAncestor;
                        q = q.sa;
                        z = z && v && n && q ? v <= q ? {
                            suspectAncestor: z,
                            overlapType: Bx[v]
                        } : {
                            suspectAncestor: n,
                            overlapType: Cx[q]
                        } : z && v ? {
                            suspectAncestor: z,
                            overlapType: Bx[v]
                        } : n && q ? {
                            suspectAncestor: n,
                            overlapType: Cx[q]
                        } : null
                    } else z = null;
                    v = z || {};
                    z = v.suspectAncestor;
                    v = v.overlapType;
                    z && v ? g.push(zx(a, c, l, m, v, e, z)) : g.push(zx(a, c, l, m, 9, e))
                }
            }
        }
        return {
            entries: g,
            ja: h
        }
    }

    function wx(a, b, c) {
        var d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            var e = b.getBoundingClientRect();
            if (e) {
                var f = If(b, ff(a.j.j));
                f && "visible" !== f.overflow && ("auto" !== f.overflowY && "scroll" !== f.overflowY && c.bottom > e.bottom + a.l ? d.push(zx(a, c, b, e, 5, 1)) : (f = "auto" === f.overflowX || "scroll" === f.overflowX, !f && c.left < e.left - a.l ? d.push(zx(a, c, b, e, 5, 3)) : !f && c.right > e.right + a.l && d.push(zx(a, c, b, e, 5, 4))))
            }
        }
        return d
    }

    function zx(a, b, c, d, e, f, g) {
        var h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (qb(a.o, e) && qb(a.m, f)) {
            b = new ph(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = Dx(a, c)) && qh(b, a)) c = 4;
            else {
                a = Ex(c, d);
                if (H) {
                    e = Eh(c, "paddingLeft");
                    f = Eh(c, "paddingRight");
                    var k = Eh(c, "paddingTop"),
                        l = Eh(c, "paddingBottom");
                    e = new ph(k, f, l, e)
                } else e = xh(c, "paddingLeft"), f = xh(c, "paddingRight"), k = xh(c, "paddingTop"), l = xh(c, "paddingBottom"), e = new ph(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                qh(b, new ph(a.top + e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = Ex(c, d), c = qh(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function Ax(a, b, c, d) {
        for (var e = [], f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = ff(a.j.j);
        for (f = 0; f < e.length; f++) {
            var g = e[f],
                h = If(g, c);
            if (h) {
                if ("fixed" === h.position) return {
                    suspectAncestor: g,
                    sa: 1
                };
                if ("sticky" === h.position && a.j.contains(g.parentElement, d)) return {
                    suspectAncestor: g,
                    sa: 2
                };
                if ("absolute" === h.position) return {
                    suspectAncestor: g,
                    sa: 3
                };
                if ("none" !== h.cssFloat) {
                    h = g === e[0];
                    var k = Fx(a, e.slice(0, f), g);
                    if (h || k) return {
                        suspectAncestor: g,
                        sa: 4
                    }
                }
            }
        }
        return (a = Fx(a, e, b)) ? {
            suspectAncestor: a,
            sa: 5
        } : null
    }

    function Fx(a, b, c) {
        var d = c.getBoundingClientRect();
        if (!d) return null;
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            if (a.j.contains(f, c)) {
                var g = f.getBoundingClientRect();
                if (g) {
                    var h = If(f, ff(a.j.j));
                    if (h && d.bottom > g.bottom + a.l && "visible" === h.overflowY) return f
                }
            }
        }
        return null
    }

    function Ex(a, b) {
        if (!H || 9 <= Number(be)) {
            var c = xh(a, "borderLeftWidth");
            d = xh(a, "borderRightWidth");
            e = xh(a, "borderTopWidth");
            a = xh(a, "borderBottomWidth");
            c = new ph(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = Gh(a, "borderLeft");
            var d = Gh(a, "borderRight"),
                e = Gh(a, "borderTop");
            a = Gh(a, "borderBottom");
            c = new ph(e, d, a, c)
        }
        return new ph(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }

    function Dx(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: function(d) {
                return /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new ph(a.top, a.right, a.bottom, a.left)
    }
    var Gx = {},
        Bx = (Gx[1] = 3, Gx[4] = 10, Gx[3] = 12, Gx[2] = 4, Gx[5] = 5, Gx),
        Hx = {},
        Cx = (Hx[1] = 6, Hx[4] = 11, Hx[3] = 13, Hx[2] = 7, Hx[5] = 8, Hx),
        px = lb(Pf({
            kf: 1,
            lf: 2,
            Qg: 3,
            Rg: 4,
            Tg: 5,
            ff: 6,
            gf: 7,
            jf: 8,
            fg: 9,
            Sg: 10,
            hf: 11,
            Pg: 12,
            ef: 13
        }), function(a) {
            return !qb([1, 2], a)
        }),
        qx = Pf({
            we: 1,
            gg: 2,
            Je: 3,
            Ug: 4
        }),
        rx = Pf({
            xe: 1,
            Xg: 2,
            Uf: 3,
            Fg: 4
        }),
        ux = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function Ix(a, b) {
        A(b) || (b = [b]);
        b = mb(b, function(c) {
            return "string" === typeof c ? c : c.qb + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        uh(a, "transition", b.join(","))
    }
    var Jx = Kb(function() {
        if (H) return ae("10.0");
        var a = jf(document, "DIV"),
            b = Ud ? "-webkit" : Td ? "-moz" : H ? "-ms" : Rd ? "-o" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        if (!td.test("div")) throw Error("");
        if ("DIV" in vd) throw Error("");
        c = null;
        var d = "";
        if (b)
            for (g in b) {
                if (!td.test(g)) throw Error("");
                var e = b[g];
                if (null != e) {
                    var f = g;
                    if (e instanceof Wb) e = Zb(e);
                    else if ("style" == f.toLowerCase()) {
                        if (!B(e)) throw Error("");
                        e instanceof Hc || (e = Mc(e));
                        e = Jc(e)
                    } else {
                        if (/^on/i.test(f)) throw Error("");
                        if (f.toLowerCase() in ud)
                            if (e instanceof ac) e = dc(e).toString();
                            else if (e instanceof E) e = Bc(e).toString();
                        else if ("string" === typeof e) e = Fc(e).M();
                        else throw Error("");
                    }
                    e.V && (e = e.M());
                    f = f + '="' + lc(String(e)) + '"';
                    d += " " + f
                }
            }
        var g = "<div" + d;
        d = void 0;
        null == d ? d = [] : A(d) || (d = [d]);
        !0 === Vb.div ? g += ">" : (c = yd(d), g += ">" + qd(c).toString() + "</div>", c = c.j());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        b = zd(g, c);
        Bd(a, b);
        a = a.firstChild;
        b = a.style[Ld("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[vh(a, "transition")] || "")
    });

    function Kx(a, b) {
        this.l = ["", ""];
        this.j = a || "";
        this.m = b || ""
    }

    function Lx(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function Mx(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function Nx(a, b) {
        0 > a.m.indexOf(b) && (a.m = b + a.m)
    }
    Kx.prototype.toString = function() {
        return [this.l[0], this.l[1], this.j, this.m].join("|")
    };

    function Ox(a) {
        var b = Px(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }

    function Px(a, b, c, d) {
        return "" != a.m || b ? null : "" == a.j.replace(Qx, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function Rx(a, b, c, d, e, f, g) {
        this.Ja = a;
        this.I = c;
        this.D = b;
        this.ea = (a = this.D.ownerDocument) && (a.defaultView || a.parentWindow);
        this.v = new Sx(this.D);
        this.o = g;
        this.pa = Tx(this.v, d.wb, d.height, d.ec);
        this.C = this.o ? this.v.boundingClientRect ? this.v.boundingClientRect.right - this.v.boundingClientRect.left : null : e;
        this.B = this.o ? this.v.boundingClientRect ? this.v.boundingClientRect.bottom - this.v.boundingClientRect.top : null : f;
        this.m = Ux(d.width);
        this.l = Ux(d.height);
        this.aa = this.o ? Ux(d.opacity) : null;
        this.X = d.check;
        this.G = "animate" == d.wb && !Vx(this.v, this.l, this.ga) && Jx();
        this.qa = !!d.Bb;
        this.j = new Kx;
        Vx(this.v, this.l, this.ga) && Mx(this.j, "r");
        e = this.v;
        e.j && e.l >= e.m && Mx(this.j, "b");
        this.H = this.F = null;
        this.da = !1;
        this.Y = !!d.Ad;
        this.Ka = !!d.$b;
        this.ga = !!d.ec
    }

    function Wx(a) {
        if (a.o && !a.pa || null == a.m && null == a.l && null == a.aa && a.o) return a.j;
        var b = a.o;
        a.o = !1;
        Xx(a);
        a.o = b;
        if (!b || null != a.X && !Px(a.j, a.X, a.m, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.C = null, a.B = null);
        if (null == a.C && null !== a.m || null == a.B && null !== a.l) a.G = !1;
        (0 == a.m || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.m = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.m = "";
        Yx(a);
        return Xx(a)
    }

    function Yx(a) {
        function b() {
            Zx(c, h, k);
            if (l && !m && !k) {
                var n = function(q) {
                    for (var t = 0; t < q.length; t++) uh(l, q[t], "0px")
                };
                n($x);
                n(ay)
            }
        }
        var c = a.D;
        c.style.overflow = a.qa ? "visible" : "hidden";
        a.G && (a.H ? (Ix(c, by), Ix(a.H, by)) : Ix(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.aa && (c.style.opacity = a.aa);
        var d = null != a.C && null != a.m && (a.Y || a.m > a.C) ? a.m : null,
            e = null != a.B && null != a.l && (a.Y || a.l > a.B) ? a.l : null;
        if (a.I)
            for (var f = a.I.length, g = 0; g < f; g++) Zx(a.I[g], d, e);
        var h = a.m,
            k = a.l,
            l = a.H,
            m = a.da;
        a.G ? x.setTimeout(b, 1E3) : b()
    }

    function cy(a, b) {
        var c = !1;
        "none" == b.display && (Mx(a.j, "n"), a.o && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || Mx(a.j, "v");
        "hidden" == b.overflow && Mx(a.j, "o");
        "absolute" == b.position ? (Mx(a.j, "a"), c = !0) : "fixed" == b.position && (Mx(a.j, "f"), c = !0);
        return c
    }

    function Xx(a) {
        var b = a.ea;
        a.F = function() {};
        dy(a, a.D, b);
        var c = a.D.parentElement;
        if (!c) return a.j;
        for (var d = !0, e = null; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : If(c, b)
            } catch (g) {
                Nx(a.j, "c")
            }
            var f = ey(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.da = !0);
            if (d && !f && fy(e)) {
                Mx(a.j, "l");
                a.H = c;
                break
            }
            d = d && f;
            if (e && cy(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.Ja) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Df(b)) {
                        Mx(a.j, "c");
                        break
                    }
                } catch (g) {
                    Mx(a.j, "c");
                    break
                }
            }
        }
        a.G && a.o && gy(a);
        return a.j
    }

    function hy(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            var d = null;
            try {
                d = If(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.v.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.v.boundingClientRect.left ? 2 : 0) | (c.bottom > a.v.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function dy(a, b, c) {
        var d = 0;
        if (!b || !b.parentElement) return !0;
        for (var e = !1, f = 0, g = b.parentElement.childNodes, h = 0; h < g.length; h++) {
            var k = g[h];
            k == b ? e = !0 : (k = hy(a, k, c), d |= k, e && (f |= k))
        }
        f & 1 && (d & 2 && Lx(a.j, 0, "o"), d & 4 && Lx(a.j, 1, "o"));
        return !(d & 1)
    }

    function iy(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = Tf(f);
                null == f && (Nx(a.j, "n"), Lx(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.o)
                        if (a.G) {
                            var k = Math.max(f + h - (g || 0), 0),
                                l = a.F;
                            a.F = function(m, n) {
                                m == b && d.setAttribute(e, k - n);
                                l && l(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else Lx(a.j, b, "d")
        }
    }

    function jy(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? ky(f) : ly(f)) || (f = Vf(f), null == f ? Mx(a.j, "p") : null != k && Mx(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? ky(h) : ly(h)) return;
                h = Vf(h);
                null == h && (Nx(a.j, "p"), Lx(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.o)
                        if (a.G) {
                            var m = Math.max(h + l - (k || 0), 0),
                                n = a.F;
                            a.F = function(q, t) {
                                q == b && (e[g] = m - t + "px");
                                n && n(q, t)
                            }
                        } else e[g] = l + "px"
                } else Lx(a.j, b, c)
        }
    }

    function ey(a, b, c, d) {
        var e = null;
        try {
            e = c.style
        } catch (z) {
            Nx(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = Tf(f),
            h = c.getAttribute("height"),
            k = Tf(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = dy(a, c, b);
        var m = d && d.width,
            n = d && d.height,
            q = e && e.width,
            t = e && e.height,
            v = Vf(m) == a.C && Vf(n) == a.B;
        m = v ? m : q;
        t = v ? n : t;
        q = Vf(m);
        v = Vf(t);
        g = null !== a.C && (null !== q && a.C >= q || null !== g && a.C >= g);
        v = null !== a.B && (null !== v && a.B >= v || null !== k && a.B >= k);
        k = !b && fy(d);
        v = b || v || k || !(f || m || d && (!ky(String(d.minWidth)) || !ly(String(d.maxWidth))));
        l = b || g || k || l || !(h || t || d && (!ky(String(d.minHeight)) || !ly(String(d.maxHeight))));
        iy(a, 0, v, c, "width", f, a.C, a.m);
        jy(a, 0, "d", v, e, d, "width", m, a.C, a.m);
        jy(a, 0, "m", v, e, d, "minWidth", e && e.minWidth, a.C, a.m);
        jy(a, 0, "M", v, e, d, "maxWidth", e && e.maxWidth, a.C, a.m);
        a.Ka ? (c = /^html|body$/i.test(c.nodeName), f = Vf(n), h = null != a.l && d && f && Math.round(f) !== a.l && "auto" !== d.overflowY && "scroll" !== d.overflowY && "100%" !== d.minHeight, a.o && !c && h && (e.setProperty("height", "auto", "important"), d && !ky(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !ly(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (iy(a, 1, l, c, "height", h, a.B, a.l), jy(a, 1, "d", l, e, d, "height", t, a.B, a.l), jy(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.B, a.l), jy(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.B, a.l));
        return b
    }

    function gy(a) {
        function b() {
            if (0 < c) {
                var l = If(e, d) || {},
                    m = Vf(l.width);
                l = Vf(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else x.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        var c = 31.25,
            d = a.ea,
            e = a.D,
            f = a.m,
            g = a.l,
            h = a.F,
            k;
        x.setTimeout(function() {
            k = x.setInterval(b, 16)
        }, 990)
    }

    function Sx(a) {
        var b = a && a.ownerDocument,
            c = b && (b.defaultView || b.parentWindow);
        c = c && (Df(c.top) ? c.top : null);
        this.j = !!c;
        this.boundingClientRect = null;
        if (a) try {
            this.boundingClientRect = a.getBoundingClientRect()
        } catch (k) {}
        for (var d = a, e = 0, f = this.boundingClientRect; d;) try {
            f && (e += f.top);
            var g = d.ownerDocument,
                h = g && (g.defaultView || g.parentWindow);
            (d = h && h.frameElement) && (f = d.getBoundingClientRect())
        } catch (k) {
            break
        }
        this.l = e;
        c = c || x;
        this.m = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
        b = b && tn(b);
        this.o = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
    }

    function Vx(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.o) && (c ? (b = a.l + Math.min(b, Ux(a.fb())), a = a.j && b >= a.m) : a = a.j && a.l >= a.m, d = a);
        return d
    }
    Sx.prototype.isVisible = function() {
        return this.o
    };
    Sx.prototype.Pa = function() {
        return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
    };
    Sx.prototype.fb = function() {
        return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
    };

    function Tx(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return Vx(a, c, d)
        }
    }

    function fy(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function my(a, b, c, d) {
        return Wx(new Rx(a, b, d, c, null, null, !0))
    }
    var ny = new Kx("s", ""),
        Qx = /[lonvafrbpEe]/g;

    function ly(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function ky(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function Zx(a, b, c) {
        null !== b && null !== Tf(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== Tf(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    for (var $x = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "), ay = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" "), oy = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s", py = $x, qy = 0; qy < py.length; qy++) oy += ", " + py[qy] + " .2s cubic-bezier(.4, 0, 1, 1)";
    py = ay;
    for (var ry = 0; ry < py.length; ry++) oy += ", " + py[ry] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var by = oy;

    function Ux(a) {
        return "string" === typeof a ? Tf(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function sy(a, b, c, d) {
        ul.call(this, a);
        this.l = b;
        this.m = c;
        this.F = String(d.google_ad_unit_key || "");
        this.o = String(d.google_ad_dom_fingerprint || "");
        this.B = String(d.google_ad_format || "");
        this.H = xi(d);
        this.X = String(d.google_ad_slot || "");
        this.Y = String(d.google_page_url || "")
    }
    ka(sy, ul);
    sy.prototype.ua = function(a) {
        a["ablate-me"] = this.v;
        a["resize-me"] = this.I
    };
    sy.prototype.v = function(a, b) {
        ol(b, this.l.contentWindow) && (a = rl(a), b = a.clp_btf_only, ty(this, null, null, 0, 0, "animate" === a["collapse-after-close"] ? "animate" : "1" === b ? "safe" : "force", !1, !1, !1, a))
    };
    sy.prototype.I = function(a, b) {
        if (ol(b, this.l.contentWindow)) {
            a = rl(a);
            var c = a.r_chk;
            if (null == c || "" === c) {
                var d = Tf(a.r_nw),
                    e = Tf(a.r_nh),
                    f = Tf(a.r_no);
                null != f || 0 !== d && 0 !== e || (f = 0);
                var g = a.r_str;
                g = g ? g : null;
                c = ty(this, c, d, e, f, g, Uf(a.r_ao), Uf(a.r_ifr), Uf(a.r_cab), a);
                b.source.postMessage(Ek({
                    msg_type: "resize-result",
                    r_str: g,
                    r_status: c,
                    googMsgType: "sth"
                }), "*");
                this.l.dataset.googleQueryId || this.l.setAttribute("data-google-query-id", a.qid)
            }
        }
    };

    function uy(a, b, c) {
        var d = {
            scrl: pl(a.j || T()),
            adk: a.F,
            adf: a.o,
            fmt: a.B
        };
        b && (d.str = Vx(b, Tf(c.r_nh), Uf(c.r_cab)), d.ad_y = b.l, d.vph = b.m);
        S(c, function(e, f) {
            d[f] = e
        });
        return d
    }

    function ty(a, b, c, d, e, f, g, h, k, l) {
        var m = T();
        if (!a.l || !m) return l.err = "2", vy(a, l, null), !1;
        if ("no_rsz" === f) return l.err = "7", vy(a, l, null), !0;
        var n = new Sx(a.m || a.l);
        if (!n.j) return l.err = "3", vy(a, l, null), !1;
        var q = n.Pa();
        null != q && (l.w = q);
        q = n.fb();
        null != q && (l.h = q);
        if (Tx(n, f, d, k)) {
            var t = a.m && a.m.ownerDocument.getElementById(a.m.id + "_anchor");
            q = t ? [a.m, a.l] : null;
            t = t || a.l;
            var v = Oh(154);
            b = my(m, t, {
                width: c,
                height: d,
                opacity: e,
                check: b,
                wb: f,
                Bb: g,
                Ad: h,
                $b: v,
                ec: k
            }, q);
            null != c && (l.nw = c);
            null != d && (l.nh = d);
            l.rsz = b.toString();
            l.abl = Ox(b);
            l.frsz = ("force" === f).toString();
            l.err = "0";
            vy(a, l, n);
            ob(Hm.U().l(), function(z) {
                return qb([248427477, 248427478], z)
            }) && a.j === m && Sl(sx(new ox(a.j), t).then(function(z) {
                sn(8, [z]);
                return z
            }).then(function(z) {
                X("resize-ovlp", {
                    adf: a.o,
                    eid: a.H.join(","),
                    io: Number(z.isOverlappingOrOutsideViewport),
                    oa: z.overlappedArea.toFixed(2),
                    qid: l.qid || "",
                    slot: a.X,
                    url: a.Y,
                    vp: z.viewportSize.width + "x" + z.viewportSize.height
                }, 1)
            }), function(z) {
                X("resize-ovlp-err", {
                    err: z.message
                }, 1)
            });
            return !0
        }
        l.err = "1";
        vy(a, l, n);
        return !1
    }

    function vy(a, b, c) {
        var d = ah(String(b.gen204_fraction), .05);
        b = uy(a, c, b);
        b.url = a.j.document.URL;
        X("resize", b, d)
    };

    function wy(a, b) {
        b = void 0 === b ? {} : b;
        this.root = b.root ? b.root : null;
        this.C = b.rootMargin ? xy(b.rootMargin) : [{
            value: 0,
            type: "px"
        }, {
            value: 0,
            type: "px"
        }, {
            value: 0,
            type: "px"
        }, {
            value: 0,
            type: "px"
        }];
        this.rootMargin = mb(this.C, function(c) {
            return "" + c.value + c.type
        }).join(" ");
        this.G = yy(b.threshold);
        this.D = a;
        this.j = [];
        this.o = [];
        this.v = !1;
        this.l = null;
        this.m = Mb(this.B, this)
    }

    function zy(a) {
        if (a.root) var b = Ay(a.root);
        else {
            var c = df(window);
            b = {
                top: 0,
                right: c.width,
                bottom: c.height,
                left: 0,
                width: c.width,
                height: c.height
            }
        }
        a = mb(a.C, function(d, e) {
            return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
        });
        return {
            top: b.top - a[0],
            right: b.right + a[1],
            bottom: b.bottom + a[2],
            left: b.left - a[3],
            width: b.width + a[1] + a[3],
            height: b.height + a[0] + a[2]
        }
    }

    function By(a, b, c) {
        if (!b || b.isIntersecting != c.isIntersecting) return !0;
        var d = b.intersectionRatio,
            e = c.intersectionRatio;
        return d == e ? !1 : ob(a.G, function(f) {
            return f < d != f < e
        })
    }
    wy.prototype.B = function() {
        var a = this,
            b = zy(this);
        kb(this.j, function(c) {
            var d = c.target,
                e = Ay(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                m = h - l,
                n = k - g;
            g = 0 <= m && 0 <= n ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: m,
                height: n
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            l = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0
            };
            By(a, c.J, d) && a.o.push(d);
            c.J = d
        });
        this.o.length && this.D(Cy(this), this)
    };
    wy.prototype.observe = function(a) {
        ob(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            J: null
        }), this.B(), this.v || (this.v = !0, Q(x, "scroll", this.m), Q(x, "resize", this.m), x.MutationObserver && !this.l && (this.l = new MutationObserver(this.m), this.l.observe(x.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    wy.prototype.unobserve = function(a) {
        this.j = lb(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    wy.prototype.disconnect = function() {
        this.v = !1;
        this.j.length = 0;
        Jg(x, "scroll", this.m);
        Jg(x, "resize", this.m);
        this.l && (this.l.disconnect(), this.l = null)
    };

    function Cy(a) {
        var b = w(a.o).concat();
        a.o.length = 0;
        return b
    }

    function xy(a) {
        a = mb(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    }

    function yy(a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = lb(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        xb(a);
        yb(a, function(b, c) {
            return b - c
        });
        return a
    }

    function Ay(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };

    function Dy(a, b, c) {
        return a.IntersectionObserver ? new a.IntersectionObserver(c, b) : new wy(c, b)
    }

    function Ey(a, b, c) {
        Q(a, b, c);
        return function() {
            return Jg(a, b, c)
        }
    }
    var Fy = null;

    function Gy() {
        Fy = ek()
    }

    function Hy(a, b) {
        return b ? null === Fy ? (Q(a, "mousemove", Gy, {
            passive: !0
        }), Q(a, "scroll", Gy, {
            passive: !0
        }), Gy(), !1) : ek() - Fy >= 1E3 * b : !1
    }

    function Iy(a) {
        var b = a.ca,
            c = a.element,
            d = a.Dd,
            e = a.Cd,
            f = void 0 === a.kc ? 0 : a.kc,
            g = a.Rc,
            h = a.Uc,
            k = null,
            l = !1,
            m = !1,
            n = [],
            q = Dy(b, void 0 === a.options ? {} : a.options, function(t, v) {
                try {
                    var z = function() {
                        n.length || (e && (n.push(Ey(c, "mouseenter", function() {
                            l = !0;
                            z()
                        })), n.push(Ey(c, "mouseleave", function() {
                            l = !1;
                            z()
                        }))), n.push(Ey(b.document, "visibilitychange", function() {
                            return z()
                        })));
                        var R = Hy(b, f);
                        !m || l || R || vn(b.document) ? (b.clearTimeout(k), k = null) : k = k || b.setTimeout(function() {
                            Hy(b, f) ? z() : (g(), v.disconnect())
                        }, 1E3 * d)
                    };
                    m = t[t.length - 1].isIntersecting;
                    z()
                } catch (R) {
                    h && h(R)
                }
            });
        q.observe(c);
        return function() {
            q.disconnect();
            for (var t = u(n), v = t.next(); !v.done; v = t.next()) v = v.value, v();
            null != k && b.clearTimeout(k)
        }
    };

    function Jy(a, b, c, d) {
        ul.call(this, a);
        this.o = b;
        this.l = c;
        this.B = d;
        this.m = null;
        this.v = !1;
        (b = (b = b.contentWindow) && b.parent) && a != b && this.D.push(Lk(b, "sth", this.ga, this.zb))
    }
    ka(Jy, ul);
    Jy.prototype.ua = function(a) {
        var b = this;
        a.av_ref = function(c, d) {
            return Ky(b, c, d)
        }
    };

    function Ky(a, b, c) {
        if (ol(c, a.o.contentWindow) && (a.v = !!b.tac, cl(a), b = rl(b), c = parseInt(b["int"], 10), !b.ocpc || !a.v)) {
            var d = a.j.document.getElementById(a.l.google_async_iframe_id);
            for (d = d && mf(d); d && !li.test(d.className);) d = mf(d);
            if (d && !(0 >= c)) {
                var e = d;
                c -= .2;
                a.m = Iy({
                    ca: a.j,
                    element: e,
                    Cd: !xf(),
                    kc: c * (parseInt(b.idt, 10) || 3),
                    Dd: c,
                    Rc: function() {
                        return Ly(a, e)
                    },
                    options: {
                        threshold: 1
                    },
                    Uc: function(f) {
                        return vk.j(623, f, void 0, void 0)
                    }
                })
            }
        }
    }

    function Ly(a, b) {
        a.B(a.v);
        setTimeout(W(624, function() {
            a.l.google_refresh_count = (parseInt(a.l.google_refresh_count, 10) || 0) + 1;
            kf(b);
            a.o = null;
            Oo(b, a.l, a.j)
        }), 200)
    }
    Jy.prototype.L = function() {
        ul.prototype.L.call(this);
        this.o = null;
        this.m && this.m()
    };

    function My(a, b, c, d) {
        new Jy(a, b, c, d)
    };
    var Ny = navigator;

    function Oy() {
        try {
            return Ny.javaEnabled()
        } catch (a) {
            return !1
        }
    }

    function Py(a) {
        var b = 1,
            c;
        if (void 0 != a && "" != a)
            for (b = 0, c = a.length - 1; 0 <= c; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = 0 != d ? b ^ d >> 21 : b
            }
        return b
    }

    function Qy(a, b) {
        if (!a || "none" == a) return 1;
        a = String(a);
        "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
        return Py(a.toLowerCase())
    }
    var Ry = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        Sy = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
        Ty = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    var Uy = /^blogger$/,
        Vy = /^wordpress(.|\s|$)/i,
        Wy = /^joomla!/i,
        Xy = /^drupal/i,
        Yy = /\/wp-content\//,
        Zy = /\/wp-content\/plugins\/advanced-ads/,
        $y = /\/wp-content\/themes\/genesis/,
        az = /\/wp-content\/plugins\/genesis/;

    function bz(a) {
        for (var b = a.getElementsByTagName("script"), c = b.length, d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src");
                if (Zy.test(e)) return 5;
                if (az.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href"), $y.test(e) || az.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content");
                if (Uy.test(f)) return 1;
                if (Vy.test(f)) return 2;
                if (Wy.test(f)) return 3;
                if (Xy.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href"), Yy.test(d))) return 2;
        return 0
    };

    function cz() {
        this.l = [];
        this.j = -1
    }
    cz.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && 0 === a % 1 && this.l[a] != b && (this.l[a] = b, this.j = -1)
    };
    cz.prototype.get = function(a) {
        return !!this.l[a]
    };

    function dz(a) {
        -1 == a.j && (a.j = nb(a.l, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.j
    };
    var ez = /[+, ]/;

    function fz(a, b) {
        var c = a.A,
            d = T().document,
            e = {},
            f = T(),
            g;
        var h = vm(T(), !1).ca;
        var k = Nn(h);
        var l = g = Ln(T(), d, c.google_ad_width, c.google_ad_height),
            m = k.lb,
            n = T();
        var q = n.top == n ? 0 : Df(n.top) ? 1 : 2;
        var t = 4;
        l || 1 != q ? l || 2 != q ? l && 1 == q ? t = 7 : l && 2 == q && (t = 8) : t = 6 : t = 5;
        m && (t |= 16);
        var v = "" + t;
        var z = On();
        var R = h,
            K = g,
            za = !!c.google_page_url;
        e.google_iframing = v;
        0 != z && (e.google_iframing_environment = z);
        if (!za && "ad.yieldmanager.com" == d.domain) {
            for (var db = d.URL.substring(d.URL.lastIndexOf("http")); - 1 < db.indexOf("%");) try {
                db = decodeURIComponent(db)
            } catch (Ia) {
                break
            }
            c.google_page_url = db;
            za = !!db
        }
        za ? (e.google_page_url = c.google_page_url, e.google_page_location = (K ? d.referrer : d.URL) || "EMPTY") : (K && Df(f.top) && d.referrer && f.top.document.referrer === d.referrer ? e.google_page_url = f.top.document.URL : e.google_page_url = K ? d.referrer : d.URL, e.google_page_location = null);
        a: {
            if (d.URL == e.google_page_url) try {
                var na = Date.parse(d.lastModified) / 1E3;
                break a
            } catch (Ia) {}
            na = null
        }
        e.google_last_modified_time = na;
        if (R == R.top) var ha = R.document.referrer;
        else {
            var Gq = Rh();
            ha = Gq && Gq.referrer || ""
        }
        e.google_referrer_url = ha;
        Mn(e, c);
        var bg = c.google_page_location || c.google_page_url;
        "EMPTY" == bg && (bg = c.google_page_url);
        if (gh || !bg) var oj = !1;
        else {
            var eb = bg.toString();
            0 == eb.indexOf("http://") ? eb = eb.substring(7, eb.length) : 0 == eb.indexOf("https://") && (eb = eb.substring(8, eb.length));
            var pj = eb.indexOf("/"); - 1 == pj && (pj = eb.length);
            var Hq = eb.substring(0, pj);
            if (Rn.test(Hq)) oj = !1;
            else {
                var fd = Hq.split("."),
                    cg = !1;
                3 <= fd.length && (cg = fd[fd.length - 3] in Qn);
                2 <= fd.length && (cg = cg || fd[fd.length - 2] in Qn);
                oj = cg
            }
        }
        var Iq = oj ? ch("", "pagead2.googlesyndication.com") : nh(),
            r = {};
        gz(a, r);
        $w();
        r.adsid = Z[1];
        $w();
        r.pucrd = Z[6];
        var rb = a.A,
            xe = a.A;
        r.dt = Nw;
        ii(xe) && xe.google_bpp && (r.bpp = xe.google_bpp);
        var Jq, Cz = T();
        a: {
            var Dz = T();
            try {
                var gd = Dz.performance;
                if (gd && gd.timing && gd.now) {
                    var Kq = gd.timing.navigationStart + Math.round(gd.now()) - gd.timing.domLoading;
                    break a
                }
            } catch (Ia) {}
            Kq = null
        }
        var Lq = Kq;
        (Jq = Lq ? Pw(Lq, Cz.Date.now() - Nw, 1E6) : null) && (r.bdt = Jq);
        var Mq = xe.google_iframe_start_time;
        if (Ma(Mq)) {
            xe.google_iframe_start_time = null;
            var Nq = Pw(Mq, Nw)
        } else Nq = null;
        var Oq = Nq;
        null != Oq && (r.fdt = Oq);
        r.idt = Pw(a.I, Nw);
        var Pq = a.A;
        r.shv = dh();
        r.cbv = "/r20190131".replace("/", "");
        /^\w{1,3}$/.test(Pq.google_loader_used) && (r.saldr = Pq.google_loader_used);
        eh && (r.jscb = 1);
        fh && (r.jscd = 1);
        var qj = Rh(a.pubWin);
        if (qj) {
            r.is_amp = 1;
            var rj = qj || Rh();
            r.amp_v = rj && rj.mode ? +rj.mode.version || null : null;
            var sj = qj || Rh();
            if (sj && sj.container) {
                for (var Qq = sj.container.split(","), Rq = [], tj = 0; tj < Qq.length; tj++) Rq.push(Qh[Qq[tj]] || "x");
                var Sq = Rq.join()
            } else Sq = null;
            var Tq = Sq;
            Tq && (r.act = Tq)
        }
        T() == window.top && (r.abxe = 1);
        if ("_gfp_a_" in a.pubWin) {
            var uj = a.pubWin._gfp_a_;
            if ("boolean" !== typeof uj) throw Error("Illegal value of _gfp_a_: " + uj);
            if (uj && Oh(225)) {
                var vj, Uq = new Sw(a.pubWin),
                    Vq = Uq.j.get("__gads", "");
                if (vj = Uq.l && !Rw(Vq) ? "Real" : Vq) r.cookie = vj, r.crv = "Test" !== vj
            }
        }
        var wc = Am(),
            Wq = Cm(wc, 8, {}),
            dg = rb.google_ad_section;
        Wq[dg] && (r.prev_fmts = Wq[dg]);
        var Xq = Cm(wc, 9, {});
        Xq[dg] && (r.prev_slotnames = Xq[dg].toLowerCase());
        hz(rb, wc);
        var Zq = Cm(wc, 15, 0);
        0 < Zq && (r.nras = String(Zq));
        r.correlator = Cm(wc, 7, zm());
        Qm().j["21060549"] && (r.rume = 1);
        if (rb.google_ad_channel) {
            for (var $q = Cm(wc, 10, {}), ar = "", br = rb.google_ad_channel.split(ez), wj = 0; wj < br.length; wj++) {
                var xj = br[wj];
                $q[xj] ? ar += xj + "+" : $q[xj] = !0
            }
            r.pv_ch = ar
        }
        if (rb.google_ad_host_channel) {
            for (var eg = Cm(wc, 11, []), cr = rb.google_ad_host_channel.split("|"), fg = -1, yj = [], Gb = 0; Gb < cr.length; Gb++) {
                var dr = cr[Gb].split(ez);
                eg[Gb] || (eg[Gb] = {});
                for (var ye = "", zj = 0; zj < dr.length; zj++) {
                    var gg = dr[zj];
                    "" !== gg && (eg[Gb][gg] ? ye += "+" + gg : eg[Gb][gg] = !0)
                }
                ye = ye.slice(1);
                yj[Gb] = ye;
                "" !== ye && (fg = Gb)
            }
            var Aj = "";
            if (-1 < fg) {
                for (var Bj = 0; Bj < fg; Bj++) Aj += yj[Bj] + "|";
                Aj += yj[fg]
            }
            r.pv_h_ch = Aj
        }
        r.frm = rb.google_iframing;
        r.ife = rb.google_iframing_environment;
        var er = rb.google_ad_client;
        try {
            var fr = wm(),
                hg = fr.google_prev_clients;
            hg || (hg = fr.google_prev_clients = {});
            if (er in hg) var Cj = 1;
            else hg[er] = !0, Cj = 2
        } catch (Ia) {
            Cj = 0
        }
        r.pv = Cj;
        var Dj = a.pubWin.document,
            gr = a.A,
            hr = "";
        try {
            hr = Dj.cookie
        } catch (Ia) {}
        var ir = Dj.domain,
            ze = hr,
            ig = a.pubWin.screen,
            Ez = Dj.referrer,
            Fz = di();
        if (Rh()) var jr = T().gaGlobal || {};
        else {
            var Ej = Math.round((new Date).getTime() / 1E3),
                Fj = gr.google_analytics_domain_name,
                jg = "undefined" == typeof Fj ? Qy("auto", ir) : Qy(Fj, ir),
                Gz = -1 < ze.indexOf("__utma=" + jg + "."),
                Hz = -1 < ze.indexOf("__utmb=" + jg),
                Gj;
            if (!(Gj = (Uh() || T()).gaGlobal)) {
                var Iz = {};
                Gj = (Uh() || T()).gaGlobal = Iz
            }
            var ia = Gj,
                kr = !1;
            if (Gz) {
                var Hj = ze.split("__utma=" + jg + ".")[1].split(";")[0].split(".");
                Hz ? ia.sid = Hj[3] : ia.sid || (ia.sid = Ej + "");
                ia.vid = Hj[0] + "." + Hj[1];
                ia.from_cookie = !0
            } else {
                ia.sid || (ia.sid = Ej + "");
                if (!ia.vid) {
                    kr = !0;
                    var Jz = Math.round(2147483647 * Math.random()),
                        lr = Fz,
                        mr, xc = [Ny.appName, Ny.version, Ny.language ? Ny.language : Ny.browserLanguage, Ny.platform, Ny.userAgent, Oy() ? 1 : 0].join("");
                    if (ig) xc += ig.width + "x" + ig.height + ig.colorDepth;
                    else if (x.java && x.java.awt) {
                        var nr = x.java.awt.Toolkit.getDefaultToolkit().getScreenSize();
                        xc += nr.screen.width + "x" + nr.screen.height
                    }
                    xc = xc + ze + (Ez || "");
                    for (mr = xc.length; 0 < lr;) xc += lr-- ^ mr++;
                    ia.vid = (Jz ^ Py(xc) & 2147483647) + "." + Ej
                }
                ia.from_cookie = !1
            }
            if (!ia.cid) {
                b: {
                    var hd = Fj,
                        or = 999;hd && (hd = 0 == hd.indexOf(".") ? hd.substr(1) : hd, or = hd.split(".").length);
                    for (var pr, qr = 999, kg = ze.split(";"), Ae = 0; Ae < kg.length; Ae++) {
                        var lg = Ry.exec(kg[Ae]) || Sy.exec(kg[Ae]) || Ty.exec(kg[Ae]);
                        if (lg) {
                            var Ij = lg[1] || 0;
                            if (Ij == or) {
                                var rr = lg[2];
                                break b
                            }
                            Ij < qr && (qr = Ij, pr = lg[2])
                        }
                    }
                    rr = pr
                }
                var Be = rr;kr && Be && -1 != Be.search(/^\d+\.\d+$/) ? ia.vid = Be : Be != ia.vid && (ia.cid = Be)
            }
            ia.dh = jg;
            ia.hid || (ia.hid = Math.round(2147483647 * Math.random()));
            jr = ia
        }
        var Ce = jr;
        r.ga_vid = Ce.vid;
        r.ga_sid = Ce.sid;
        r.ga_hid = Ce.hid;
        r.ga_fc = Ce.from_cookie;
        r.ga_cid = Ce.cid;
        r.ga_wpids = gr.google_analytics_uacct;
        var De = a.pubWin,
            Ea = new Ri(De);
        if (De.location && De.location.ancestorOrigins) {
            for (var sr, tr = [], Kz = Math.min(Ea.l.length, 27), id = 1; id < Kz; id++) Ea.l[id] && Ea.l[id].url && (tr[id - 1] = Ea.l[id].url);
            sr = Ti(Ea, tr.reverse());
            r.iag = sr
        }
        var mg = Ea.j.document && Ea.j.document.scripts ? Ea.j.document.scripts : [];
        if (mg) {
            for (var Jj = [], ng = mg.length - 1; 0 <= ng && 26 > Jj.length;) mg[ng].src && Jj.unshift(mg[ng].src), ng--;
            var ur = Ti(Ea, Jj)
        } else ur = 0;
        r.icsg = ur;
        var Kj = Ea.l[0].depth;
        Kj && 0 < Kj && (r.nhd = Kj);
        r.dssz = De.document.scripts ? De.document.scripts.length : 0;
        for (var vr = Ea.l, wr = [], Lj = vr.length - 1; 0 < Lj; Lj--) {
            var Mj = vr[Lj];
            Mj && null != Mj.url && wr.push(Af(Mj.url.match(zf)[3] || null))
        }
        r.mdo = Pi(wr);
        var Nj = Ea.j.document && Ea.j.document.scripts ? Ea.j.document.scripts : [];
        if (Nj) {
            for (var xr = [], Oj = Nj.length - 1; 0 <= Oj; Oj--) {
                var Pj = Nj[Oj];
                Pj && null != Pj.src && xr.push(Af(Pj.src.match(zf)[3] || null))
            }
            var yr = Pi(xr)
        } else yr = 0;
        r.mso = yr;
        var Qj = rb.google_ad_layout;
        Qj && 0 <= Ro[Qj] && (r.rplot = Ro[Qj]);
        r.u_tz = -(new Date).getTimezoneOffset();
        r.u_his = di();
        r.u_java = !!P.navigator && "unknown" !== typeof P.navigator.javaEnabled && !!P.navigator.javaEnabled && P.navigator.javaEnabled();
        P.screen && (r.u_h = P.screen.height, r.u_w = P.screen.width, r.u_ah = P.screen.availHeight, r.u_aw = P.screen.availWidth, r.u_cd = P.screen.colorDepth);
        P.navigator && P.navigator.plugins && (r.u_nplug = P.navigator.plugins.length);
        P.navigator && P.navigator.mimeTypes && (r.u_nmime = P.navigator.mimeTypes.length);
        if (b) try {
            var og = gn(a, b);
            r.adx && -12245933 != r.adx && r.ady && -12245933 != r.ady || (r.adx = Math.round(og.x), r.ady = Math.round(og.y));
            en(b) || (Oh(186) && (r.adx = -12245933, r.ady = -12245933), X("asihe", {
                x: og.x,
                y: og.y,
                url: a.A.google_page_url
            }))
        } catch (Ia) {}
        var Rj = Th() || fn(si(a.pubWin));
        Rj && (r.biw = Rj.width, r.bih = Rj.height);
        var zr = a.pubWin;
        if (si(zr) != zr) {
            var Sj = fn(a.pubWin);
            Sj && (r.isw = Sj.width, r.ish = Sj.height)
        }
        var yc = a.pubWin;
        if (null !== yc && yc != yc.top) {
            var pg = [yc.document.URL];
            yc.name && pg.push(yc.name);
            var Ar = fn(yc, !1);
            pg.push(Ar.width.toString());
            pg.push(Ar.height.toString());
            var Br = Qf(pg.join(""))
        } else Br = 0;
        var Cr = Br;
        0 !== Cr && (r.ifk = Cr);
        var qg = ti(a.pubWin);
        var rg = qg && qg.document ? dn(qg.document, qg) : new Xe(-12245933, -12245933);
        Oh(196) ? (r.scr_x = Math.round(rg.x), r.scr_y = Math.round(rg.y)) : (r.scr_x = rg.x, r.scr_y = rg.y);
        var Dr = Qm(),
            Er = an(Dr),
            sg = a.A.google_eids;
        if (A(sg)) {
            Di(a, 64);
            for (var tg = 0; tg < sg.length; tg++) La(sg[tg]) && Er.push(sg[tg])
        }
        r.eid = Er.join();
        var Fr = $m(Dr),
            Gr = a.A.google_loeid;
        La(Gr) && (Di(a, 4096), vb(Fr, Gr.split(",")));
        r.loeid = Fr.join();
        a.F && (r.oid = a.F);
        if (ck(Qm(), 139) === Ym.$) {
            var Hr = ti(a.pubWin);
            Hr && (r.pg_h = ml(Hr, !0))
        }
        var Ir = Fm()[a.A.google_ad_client];
        Ir && (r.psts = Ir.join());
        r.pvsid = Fg(a.pubWin);
        a: {
            var Jr = a.pubWin,
                ug = -1;
            try {
                Jr.localStorage && (ug = parseInt(Jr.localStorage.getItem("google_pem_mod"), 10))
            } catch (Ia) {
                var Kr = null;
                break a
            }
            Kr = 0 <= ug && 1E3 > ug ? ug : null
        }
        r.pem = Kr;
        var Aa = a.A,
            wa = a.pubWin,
            Lr = wm();
        r.ref = Aa.google_referrer_url;
        r.loc = Aa.google_page_location;
        var vg = Rh(a.pubWin);
        if (vg && B(vg.data) && "string" === typeof vg.data.type) {
            var Tj = vg.data.type.toLowerCase();
            var Mr = "doubleclick" == Tj || "adsense" == Tj ? null : Tj
        } else Mr = null;
        var Nr = Mr;
        Nr && (r.apn = Nr.substr(0, 10));
        var Ee = Nn(Lr);
        r.url || r.loc || !Ee.url || (r.url = Ee.url, Ee.lb || (r.usrc = 1));
        Ee.url != (r.loc || r.url) && (r.top = Ee.url);
        Aa.google_async_rrc && (r.rr = Aa.google_async_rrc);
        r.rx = 0;
        var Or;
        if (Fw && Iw(Fw)) var Pr = Fw;
        else {
            var Uj = wm(),
                Qr = Uj.google_jobrunner;
            Pr = Jw(Qr) ? Fw = Qr : Uj.google_jobrunner = Fw = new Ew(Uj)
        }
        var Rr = Pr;
        (Or = Zh(Rr.tc) ? Rr.tc() : null) && (r.jtc = Or);
        0 <= a.m && (r.eae = a.m);
        var Sr = Do(Aa, a.j);
        Sr && (r.fc = Sr);
        if (!qi(Aa)) {
            var Fe = (a.iframeWin || a.pubWin).document,
                Tr = "";
            if (Fe.documentMode) {
                var zc = uf(new $e(Fe), "IFRAME");
                zc.frameBorder = "0";
                zc.style.height = 0;
                zc.style.width = 0;
                zc.style.position = "absolute";
                if (Fe.body) {
                    Fe.body.appendChild(zc);
                    try {
                        var wg = zc.contentWindow.document;
                        wg.open();
                        wg.write("<!DOCTYPE html>");
                        wg.close();
                        Tr += wg.documentMode
                    } catch (Ia) {}
                    Fe.body.removeChild(zc)
                }
            }
            r.docm = Tr
        }
        try {
            var Lz = wa.screenX;
            var Mz = wa.screenY
        } catch (Ia) {}
        try {
            var Nz = wa.outerWidth;
            var Oz = wa.outerHeight
        } catch (Ia) {}
        try {
            var Pz = wa.innerWidth;
            var Qz = wa.innerHeight
        } catch (Ia) {}
        r.brdim = [wa.screenLeft, wa.screenTop, Lz, Mz, wa.screen ? wa.screen.availWidth : void 0, wa.screen ? wa.screen.availTop : void 0, Nz, Oz, Pz, Qz].join();
        var Rz = Sm.$;
        var Sz = ck(Qm(), 67) === Rz;
        var xg = 0;
        !y(x.postMessage) && (xg |= 1);
        if (Sz) {
            var Ur = Rh(wa);
            Ur && Ur.observeIntersection && (xg |= 256);
            var Vr = wa.document;
            Vr && Xa(Vr.elementFromPoint) && (xg |= 1024)
        }
        var Wr = xg;
        0 < Wr && (r.osd = Wr);
        r.vis = tn(wa.document);
        if (b) {
            var Xr = Tn(Aa) ? ny : Wx(new Rx(wa, b, null, {
                width: 0,
                height: 0
            }, Aa.google_ad_width, Aa.google_ad_height, !1));
            r.rsz = Xr.toString();
            r.abl = Ox(Xr)
        }
        if (!Tn(Aa)) {
            var Vj = vi(Aa);
            if (Vj) {
                var Yr = 0;
                a: {
                    try {
                        var Zr = Aa.google_async_iframe_id,
                            $r = T().document;
                        if (Zr) var as = $r.getElementById(Zr);
                        else {
                            var bs = $r.getElementsByTagName("script"),
                                cs = bs[bs.length - 1];
                            as = cs && cs.parentNode || null
                        }
                        var ds = as;
                        if (ds) {
                            for (var Ge = [], yg = ds, Tz = 0, Uz = C(); 100 >= ++Tz && 50 > C() - Uz && (yg = iz(yg));) 1 === yg.nodeType && Ge.push(yg);
                            b: {
                                for (var Wj = 0; Wj < Ge.length; Wj++) {
                                    c: {
                                        var Hb = Ge[Wj];
                                        try {
                                            if (Hb.parentNode && 0 < Hb.offsetWidth && 0 < Hb.offsetHeight && Hb.style && "none" !== Hb.style.display && "hidden" !== Hb.style.visibility && (!Hb.style.opacity || 0 !== Number(Hb.style.opacity))) {
                                                var es = Hb.getBoundingClientRect();
                                                var fs = 0 < es.right && 0 < es.bottom;
                                                break c
                                            }
                                        } catch (Ia) {}
                                        fs = !1
                                    }
                                    if (!fs) {
                                        var gs = !1;
                                        break b
                                    }
                                }
                                gs = !0
                            }
                            if (gs) {
                                b: {
                                    for (var Wz = C(), Xz = /^html|body$/i, Yz = /^fixed/i, Xj = 0; Xj < Ge.length && 50 > C() - Wz; Xj++) {
                                        var zg = Ge[Xj];
                                        if (!Xz.test(zg.tagName) && Yz.test(zg.style.position || yh(zg))) {
                                            var Yj = zg;
                                            break b
                                        }
                                    }
                                    Yj = null
                                }
                                break a
                            }
                        }
                    } catch (Ia) {}
                    Yj = null
                }
                var Zj = Yj;
                Zj && Zj.offsetWidth * Zj.offsetHeight <= 4 * Vj.width * Vj.height && (Yr = 1);
                r.pfx = Yr
            }
        }
        if ("26835106" === ck(Qm(), 41) && a.j) {
            try {
                var hs = a.j.document.getElementsByTagName("head")[0];
                var is = hs ? bz(hs) : 0
            } catch (Ia) {
                is = 0
            }
            var js = is;
            0 !== js && (r.cms = js)
        }
        var ks = Xn(Lr, Aa);
        0 != ks && (r.ifsl = ks);
        Aa.google_lrv !== dh() && (r.alvm = Aa.google_lrv || "none");
        r.fu = a.C;
        var jd = new cz;
        x.SVGElement && x.document.createElementNS && jd.set(0);
        var ls = $f();
        ls["allow-top-navigation-by-user-activation"] && jd.set(1);
        ls["allow-popups-to-escape-sandbox"] && jd.set(2);
        x.crypto && x.crypto.subtle && jd.set(3);
        x.TextDecoder && x.TextEncoder && jd.set(4);
        var Zz = dz(jd);
        r.bc = Zz;
        $w();
        r.jar = Z[4];
        if (gh) {
            if (gh) {
                var ms = mj();
                ms && (r.debug_experiment_id = ms)
            }
            r.creatives = jz(/\b(?:creatives)=([\d,]+)/);
            r.adgroups = jz(/\b(?:adgroups)=([\d,]+)/);
            r.adgroups && (r.adtest = "on", r.disable_budget_throttling = !0, r.use_budget_filtering = !1, r.retrieve_only = !0, r.disable_fcap = !0)
        }
        rn() && (r.atl = !0);
        var os = a.A,
            $z = os.google_ad_channel,
            ps = "/pagead/ads?";
        "ca-pub-6219811747049371" === os.google_ad_client && kz.test($z) && (ps = "/pagead/lopri?");
        var ak = on(Iq, ps);
        3 === tn(a.pubWin.document) && (a.v = !0, a.G = ak, ak = on(Iq, "/pagead/blank.gif#?"));
        var bA = ci(r, ak + (gh && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = bA
    }

    function lz(a) {
        var b = "RS-" + a.google_reactive_sra_index + "-",
            c = {};
        return ci((c.adk = a.google_ad_unit_key, c.client = a.google_ad_client, c.fa = a.google_reactive_ad_format, c), on(nh(), ["/pagead/html/", dh(), "/r20190131/zrt_lookup.html#", encodeURIComponent(b)].join("")))
    }

    function iz(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch (e) {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                var b = a ? ff(a) : window;
                if (b) {
                    var c = b.frameElement;
                    if (c && Df(b.parent)) {
                        var d = c;
                        break a
                    }
                }
            } catch (e) {}
            d = null
        }
        else d = null;
        return d
    }

    function jz(a) {
        try {
            var b = x.top.location.hash;
            if (b) {
                var c = b.match(a);
                return c && c[1] || ""
            }
        } catch (d) {}
        return ""
    }

    function hz(a, b) {
        var c = Cm(b, 8, {});
        b = Cm(b, 9, {});
        var d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + ("," + e) : e : a && (b[d] = b[d] ? b[d] + ("," + a) : a)
    }

    function mz(a, b) {
        if (a = a.B) a.Fa && (b.npa = 1), a.ta && (b.guci = a.ta), a.Va && (b.vcd = a.Va, a.Pb && (b.gvcd = a.Pb))
    }

    function gz(a, b) {
        var c = a.A;
        S(Ai, function(d, e) {
            b[d] = c[e]
        });
        mz(a, b);
        S(zi, function(d, e) {
            b[d] = c[e]
        });
        S(Ci, function(d, e) {
            b[d] = c[e]
        });
        Tn(c) && (b.fa = Sn(c))
    }
    var kz = /YtLoPri/;

    function nz(a) {
        a = void 0 === a ? x : a;
        return a.ggeac || (a.ggeac = {})
    };

    function oz() {}
    Sa(oz);

    function pz(a, b, c, d) {
        try {
            ue(b, c, d)
        } catch (e) {}
    }

    function qz(a) {
        var b = dh();
        var c = void 0 === c ? pz : c;
        if (!a.goog_sdr_l) {
            Object.defineProperty(a, "goog_sdr_l", {
                value: !0
            });
            var d = String(Fg(a));
            "complete" === a.document.readyState ? c(a, "gda", b, d) : Q(a, "load", function() {
                c(a, "gda", b, d)
            })
        }
    };
    var rz = this;

    function sz(a) {
        var b = a.iframeWin,
            c = a.vars;
        b && (c.google_iframe_start_time = b.google_iframe_start_time);
        var d = new $g(ti(a.pubWin), a.pubWin, b, c);
        d.I = Date.now();
        sn(1, [d.A]);
        b = ai(xi(a.pubWin), "20040013");
        a = ai(xi(a.pubWin), "20040012");
        (b || a) && Ck("cr_strt", b);
        Ak(159, function() {
            return tz(d)
        });
        Oh(209) && Ak(639, function() {
            var e = d.A;
            var f = d.j;
            if (f && 1 === e.google_responsive_auto_format && !0 === e.google_full_width_responsive_allowed) {
                var g;
                (g = (g = f.document.getElementById(e.google_async_iframe_id)) ? rf(g) : null) ? (e = new Dw(f, g, e), e.o = x.setInterval(cb(e.v, e), 500), e.v(), e = !0) : e = !1
            } else e = !1;
            return e
        });
        Ak(160, function() {
            var e = d.iframeWin;
            !ii(d.A) && e ? Ei(e) : (e = wm().google_jobrunner, Jw(e) && e.rl(), Ki(d))
        })
    }

    function tz(a) {
        if (!/_sdo/.test(a.A.google_ad_format)) {
            Om(function(c) {
                return bn(a, c)
            });
            var b = Qm();
            ck(b, 108) && (kh = jh);
            a.o = !1;
            Rh() || cd() || (a.o = uz(a, b));
            a.o || vz(a, b)
        }
    }

    function wz(a, b) {
        b = gn(a, b);
        var c = Th() || fn(si(a.pubWin));
        if (!b || -12245933 == b.y || -12245933 == c.width || -12245933 == c.height || !c.height) return 0;
        var d = 0;
        try {
            var e = si(a.pubWin);
            d = dn(e.document, e).y
        } catch (f) {
            return 0
        }
        a = d + c.height;
        return b.y < d ? (d - b.y) / c.height : b.y > a ? (b.y - a) / c.height : 0
    }

    function xz(a) {
        try {
            return a.iframeWin.frameElement
        } catch (b) {}
        return null
    }

    function uz(a, b) {
        return yz(a, b) || zz(a, b)
    }

    function yz(a, b) {
        var c = a.A;
        if (!c.google_pause_ad_requests) return !1;
        var d = x.setTimeout(function() {
                X("abg:cmppar", {
                    client: a.A.google_ad_client,
                    url: a.A.google_page_url
                })
            }, 1E4),
            e = W(450, function() {
                c.google_pause_ad_requests = !1;
                x.clearTimeout(d);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", e);
                uz(a, b) || vz(a, b)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", e);
        return !0
    }

    function zz(a, b) {
        var c = a.pubWin.document,
            d = Az(a);
        if (0 > d.hidden && 0 > d.visible) return !1;
        var e = xz(a),
            f = e || a.l;
        null == e && null != a.l && X("ins_no_ifr", {
            sf: a.A.google_enable_single_iframe
        });
        var g = un(c);
        if (!f || !g) return !1;
        if (!vn(c)) return Bz(a, b, d.visible, f);
        if (wz(a, f) <= d.hidden) return !1;
        var h = W(332, function() {
            !vn(c) && h && (Jg(c, g, h), Bz(a, b, d.visible, f) || vz(a, b), h = null)
        });
        return Q(c, g, h)
    }

    function Az(a) {
        var b = {
            hidden: 0,
            visible: Ph(30) || 4
        };
        a = tm(a.pubWin);
        if (!x.IntersectionObserver || sm(a, 118)) b.visible = -1;
        xf() && (a = Ph(29) || Math.max(rm(a, 82), 1), b.visible *= a);
        return b
    }

    function Bz(a, b, c, d) {
        if (!d || 0 > c) return !1;
        var e = a.A;
        if (Tn(e) || e.google_reactive_ads_config) return !1;
        if (!Oh(205)) {
            var f = Am(),
                g = Cm(f, 8, {});
            f = Cm(f, 9, {});
            e = e.google_ad_section || e.google_ad_region || "";
            if (!g[e] && !f[e]) return !1
        }
        if (!en(d) || wz(a, d) <= c) return !1;
        a.H = new x.IntersectionObserver(function(h, k) {
            kb(h, function(l) {
                0 >= l.intersectionRatio || (k.unobserve(l.target), Ak(294, function() {
                    vz(a, b)
                }))
            })
        }, {
            rootMargin: 100 * c + "%"
        });
        a.H.observe(d);
        return !0
    }

    function vz(a, b) {
        Ak(326, function() {
            var d = a.A;
            if (ii(d) ? 1 == gi(d) : !gi(d)) {
                var e = (d = !!b.j["1337"]) || b.j["21060549"] || b.j["20040067"] || ck(b, 87) == Tm.yb,
                    f = T();
                if (e && f === f.top) {
                    e = me;
                    var g = b.j["21060549"] && b.j["21060624"],
                        h = b.j["21062272"],
                        k = b.j["22324607"],
                        l = Am(),
                        m = new kn,
                        n = new ln;
                    l = Cm(l, 7, zm());
                    ke(m, 1, l, 0);
                    l = dk(b).join();
                    ke(m, 5, l, "");
                    ke(m, 2, 1, 0);
                    le(n, 1, m);
                    m = new hn;
                    m = ke(m, 10, !0, !1);
                    m = ke(m, 8, g, !1);
                    m = ke(m, 9, g, !1);
                    g = ke(m, 7, g, !1);
                    h = ke(g, 14, h, !1);
                    k = ke(h, 13, k, !1);
                    le(n, 2, k);
                    f.google_rum_config = e(n);
                    f = f.document;
                    e = pn(ri(), "/pagead/js/r20191003/r20190131/rum.js");
                    gh && d && (e = e.replace("rum", "rum_debug"));
                    Hf(f, e)
                } else lk(qk)
            }
        });
        a.A.google_ad_channel = Vz(a, a.A.google_ad_channel);
        a.A.google_tag_partner = aA(a, a.A.google_tag_partner);
        cA(a);
        var c = a.A.google_start_time;
        Ma(c) && (Nw = c, a.A.google_start_time = null);
        Ak(161, function() {
            var d = a.A;
            null == d.google_ad_output && (d.google_ad_output = "html");
            if (null != d.google_ad_client) {
                var e;
                (e = String(d.google_ad_client)) ? (e = e.toLowerCase()) && "ca-" != e.substring(0, 3) && (e = "ca-" + e): e = "";
                d.google_ad_client = e
            }
            null != d.google_ad_slot && (d.google_ad_slot = String(d.google_ad_slot));
            if (null == d.google_flash_version) {
                try {
                    var f = pi()
                } catch (g) {
                    f = "0"
                }
                d.google_flash_version = f
            }
            d.google_webgl_support = !!P.WebGLRenderingContext;
            d.google_ad_section = d.google_ad_section || d.google_ad_region || "";
            d.google_country = d.google_country || d.google_gl || "";
            f = (new Date).getTime();
            A(d.google_color_bg) && (d.google_color_bg = Fi(a, d.google_color_bg, f));
            A(d.google_color_text) && (d.google_color_text = Fi(a, d.google_color_text, f));
            A(d.google_color_link) && (d.google_color_link = Fi(a, d.google_color_link, f));
            A(d.google_color_url) && (d.google_color_url = Fi(a, d.google_color_url, f));
            A(d.google_color_border) && (d.google_color_border = Fi(a, d.google_color_border, f));
            A(d.google_color_line) && (d.google_color_line = Fi(a, d.google_color_line, f))
        });
        dA(a);
        if (c = a.A.google_reactive_ads_config)
            if (Jo(a.j, c), a.j) tw(c, a), c = c.page_level_pubvars, B(c) && Ub(a.A, c);
            else return;
        Tn(a.A) && ($k() && (a.A.google_adtest = a.A.google_adtest || "on"), a.A.google_pgb_reactive = a.A.google_pgb_reactive || 3);
        eA(a)
    }

    function dA(a) {
        if (a.j) {
            Bo(a.j, a.A);
            if (Ao(a.j.location)) {
                var b = a.j,
                    c = a.A.google_ad_client,
                    d = {},
                    e = {};
                c = (e.enable_page_level_ads = (d.pltais = !0, d), e.google_ad_client = c, e);
                Qo(b, c)
            }
            b = fl(a.j);
            Io(a.A, a.j) && (c = a.j, new dp(c, c), b.adRegion = a.A.google_ad_region || null);
            a.iframeWin && b.wasReactiveAdConfigHandlerRegistered && (b = a.j, new dp(b, a.iframeWin || b))
        }
    }

    function Vz(a, b) {
        b = (b ? [b] : []).concat(wi(a.A).ad_channels || []);
        var c = a.pubWin;
        Wn(c) ? (a = ["GoogleInfScrollTrigger"], c = c.name.split(":"), 2 <= c.length && c[1] && a.push(c[1])) : a = [];
        a.length && (b = b.concat(a));
        return b.join("+")
    }

    function aA(a, b) {
        return (b ? [b] : []).concat(wi(a.A).tag_partners || []).join("+")
    }

    function fA(a, b, c, d) {
        var e = d.iframeWin ? d.A.google_container_id : d.l.id;
        c.src = Ow(a);
        var f = (d.iframeWin || d.pubWin).document,
            g = f.currentScript || f.scripts && f.scripts[0],
            h = T() == window.top;
        if (cd() || !g && !e) c = fx(c), h && (Vh(d.pubWin), x.setTimeout(W(222, function() {
            var l = f.getElementById(b);
            l ? Vh(d.pubWin, l) : X("inabox:no-iframe", {
                adUrl: a
            })
        }), 0)), e ? gA(e, f, c) : f.write(c);
        else {
            var k = uf(new $e(f), "IFRAME");
            S(c, function(l, m) {
                null != l && k.setAttribute(m, l)
            });
            h && Vh(d.pubWin, k);
            e ? hA(e, f, k) : g.parentNode.insertBefore(k, g.nextSibling)
        }
    }

    function iA(a, b, c) {
        return a.j ? Mo(525, function(d) {
            (a.iframeWin ? a.iframeWin.document.body : a.l).appendChild(b);
            d.createAdSlot(a.j, a.A, c, b);
            return b
        }) : (X("jserror", {
            context: "ac_crai"
        }), null)
    }

    function jA(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        Oh(215) && qz(a.pubWin);
        var f = La(b) ? (a.iframeWin || a.pubWin).document.getElementById(b) : b;
        if (f) {
            var g = a.j,
                h = a.iframeWin && ii(a.A) ? a.iframeWin.frameElement : f;
            Q(f, "load", function() {
                f && f.setAttribute("data-load-complete", !0);
                if ((a.A.ovlp || Oh(190)) && g && g === a.pubWin && h) {
                    var n = h.ownerDocument.getElementById(h.id + "_expand");
                    n && kA(g, a, n, f)
                }
            });
            var k = lA(a);
            !g || Tn(a.A) && !Un(a.A) || (new sy(g, f, h, a.A), mx(a, f), g.IntersectionObserver || new ix(g, f, a.l), My(g, f, a.A, W(627, function(n) {
                n || k();
                n = !dd() || nd(11) ? In() : Kn();
                n.getOseId() && n.unloadAdBlock(f, !0)
            })));
            g && (new Pn(g), new lm(g), new Kw(g, f, a.A), ap(a.iframeWin, g, a.A), hx(g, f));
            a.v && mA(a, f, a.pubWin.document);
            nA(c, f);
            f && f.setAttribute("data-google-container-id", d);
            e = a.A.iaaso;
            if (null != e && h) {
                var l = h.ownerDocument.getElementById(h.id + "_expand"),
                    m = l.parentElement;
                (m && li.test(m.className) ? m : l).setAttribute("data-auto-ad-size", e)
            }
            oA(a)
        } else e ? X("jserror", {
            context: "ac::nfrm",
            url: c
        }) : (e = W(162, function() {
            return jA(a, b, c, d, !0)
        }), x.setTimeout(e, 0))
    }

    function lA(a) {
        var b = a.iframeWin || a.pubWin;
        if (!b) return function() {};
        var c = a.A.google_ad_client,
            d = Fm(),
            e = null,
            f = Lk(b, "pvt", function(g, h) {
                h.source && La(g.token) && ui(h.source, b) && (e = g.token, f(), d[c] = d[c] || [], d[c].push(e), 100 < d[c].length && d[c].shift())
            });
        return function() {
            e && A(d[c]) && (sb(d[c], e), d[c].length || delete d[c], e = null)
        }
    }

    function oA(a) {
        var b = Rh(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                var c = a.iframeWin || a.pubWin,
                    d = function(f) {
                        "fill_sticky" === f.data && (b.renderStart && b.renderStart(), a.iframeWin && Jg(c, "message", d))
                    },
                    e = W(616, d, rz);
                Q(c, "message", e)
            } else b.renderStart && b.renderStart()
    }

    function kA(a, b, c, d) {
        Sl(sx(new ox(a), c).then(function(e) {
            sn(8, [e]);
            return e
        }).then(function(e) {
            var f = c.parentElement;
            (f && li.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(function(e) {
            var f = b.A.armr || "",
                g = xi(b.A).join(","),
                h = e.executionTime || "",
                k = null == b.A.iaaso ? "" : Number(b.A.iaaso),
                l = Number(e.isOverlappingOrOutsideViewport),
                m = mb(e.entries, function(q) {
                    return q.overlapType + ":" + q.overlapDepth + ":" + q.overlapDetectionPoint
                }),
                n = e.overlappedArea.toFixed(2);
            X("ovlp", {
                adf: b.A.google_ad_dom_fingerprint,
                armr: f,
                client: b.A.google_ad_client,
                eid: g,
                et: h,
                fwrattr: b.A.google_full_width_responsive,
                iaaso: k,
                io: l,
                saldr: b.A.google_loader_used,
                oa: n,
                oe: m.join(","),
                qid: d.dataset.googleQueryId || "",
                rafmt: b.A.google_responsive_auto_format,
                roa: n * e.targetRect.width * e.targetRect.height,
                slot: b.A.google_ad_slot,
                sp: e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                tgt: hi(e.target),
                tr: [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join(),
                url: b.A.google_page_url,
                vp: e.viewportSize.width + "x" + e.viewportSize.height
            }, 1)
        }), function(e) {
            sn(8, ["Error:", e.message, c]);
            X("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function mA(a, b, c) {
        if (3 !== tn(c)) pA(a.G, b);
        else {
            var d = un(c);
            if (d) {
                var e = function() {
                    pA(a.G, b);
                    Jg(c, d, e)
                };
                Q(c, d, e)
            }
        }
        a.v = !1
    }

    function qA(a) {
        var b = Zf().join(" ");
        a.sandbox = b
    }

    function rA(a) {
        var b = G("Edge") ? 4E3 : 8100;
        var c = a;
        var d = b - 8;
        c.length > b && (c = c.substring(0, d), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        c !== a && (b -= 8, d = a.lastIndexOf("&", b), -1 === d && (d = a.lastIndexOf("?", b)), X("trn", {
            ol: a.length,
            tr: -1 === d ? "" : a.substring(d + 1),
            url: a
        }, .01));
        return c
    }

    function sA(a, b) {
        var c = a.A,
            d = gi(c);
        c = a.iframeWin ? "google_ads_frame" + d : c.google_async_iframe_id;
        var e = b,
            f = 0 === a.m,
            g = a.A;
        b = g.google_async_iframe_id;
        var h = a.iframeWin ? "google_ads_frame" + d : b,
            k = g.google_ad_width,
            l = g.google_ad_height,
            m = {
                id: h,
                name: h
            },
            n = Ma(g.google_reactive_sra_index),
            q = !n && !sw(g) && zo(g),
            t;
        if ((t = Oh(228)) || Oh(207)) {
            var v = $f();
            v = !(!v["allow-top-navigation-by-user-activation"] || !v["allow-popups-to-escape-sandbox"]);
            t = !t && v
        } else t = !(q || n) && !xf() && !yf() && kd() && nd(58);
        var z = t;
        z && (t = "=" + encodeURIComponent("1"), e = Bf(e, "fsb" + t), qA(m));
        v = e;
        e = rA(e);
        var R = f ? e.replace(/&ea=[^&]*/, "") + "&ea=0" : e;
        gx(m, k, l, Ow(R));
        t = fx(m);
        var K = "";
        if (f) {
            K = 10;
            for (R = ""; 0 < K--;) R += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
            K = R;
            e = Dk(e, K);
            Dk(v, K)
        } else e = R;
        g.dash && (m.srcdoc = g.dash);
        v = null;
        n ? (v = e, q = a.A, m = q.google_ad_width, n = q.google_ad_height, q = q.google_reactive_sra_index, m && n && null != q ? (q = a.iframeWin ? "google_ads_frame_rsra_" + q : a.A.google_async_iframe_id, q = {
            id: q,
            name: q
        }, z && qA(q), gx(q, m, n, v), v = ex(q), v = iA(a, v, b)) : v = null) : q ? (m.src = Ow(e), v = ex(m), v = iA(a, v, b)) : fA(e, h, m, a);
        f && (f = e, z = K, e = on(ri(), "/pagead/js/r20191003/r20190131/creativetoolset/xpc_expansion_embed.js"), d = {
            id: h,
            url: f,
            width: k,
            height: l,
            ha: z,
            vd: a.pubWin,
            Ic: b || void 0,
            kh: "google_expandable_ad_slot" + d,
            ad: e,
            ib: a.iframeWin || a.pubWin
        }, !d.id || !d.url || 0 >= d.width || 0 >= d.height || !d.ha || !d.ib || Pk(d.ib, fb(Sk, d, e)));
        if (a.iframeWin && ii(g)) {
            a = ["<!DOCTYPE html><html><body>", t, "</body></html>"].join("");
            a = String(a);
            d = ['"'];
            for (g = 0; g < a.length; g++) {
                k = a.charAt(g);
                l = k.charCodeAt(0);
                h = g + 1;
                if (!(f = Id[k])) {
                    if (!(31 < l && 127 > l))
                        if (l = k, l in Jd) k = Jd[l];
                        else if (l in Id) k = Jd[l] = Id[l];
                    else {
                        f = l.charCodeAt(0);
                        if (31 < f && 127 > f) k = l;
                        else {
                            if (256 > f) {
                                if (k = "\\x", 16 > f || 256 < f) k += "0"
                            } else k = "\\u", 4096 > f && (k += "0");
                            k += f.toString(16).toUpperCase()
                        }
                        k = Jd[l] = k
                    }
                    f = k
                }
                d[h] = f
            }
            d.push('"');
            a = "javascript:" + d.join("");
            d = T();
            (new Qw(d)).set(b, a)
        }
        return v || c
    }

    function nA(a, b) {
        var c = !dd() || nd(11) ? In() : Kn();
        if (c.getOseId()) {
            var d = T();
            Na("Goog_AdSense_getAdAdapterInstance", In, d);
            c.setLoadOsdJsOnPubWindow(!0);
            c.registerAdBlock(a, 1, "", b)
        }
    }

    function tA(a, b, c) {
        var d = a.A,
            e = "";
        Ma(d.google_reactive_sra_index) ? (e = lz(d), hz(d, Am()), uA(d)) : (sw(d) || !zo(d) || yo(a.pubWin, d)) && uA(d) && (e = fz(a, b));
        sn(2, [a.A, e]);
        b && b.id == c && lf(b);
        if (e) {
            ii(d) || fi(a.pubWin);
            b = gi(a.A);
            var f = x.window === x.window.top ? "a!" + b.toString(36) : b.toString(36) + "." + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ C()).toString(36));
            c = {};
            b = (c.ifi = b, c.uci = f, c);
            e = ci(b, e);
            c = ai(xi(a.pubWin), "20040013");
            d = ai(xi(a.pubWin), "20040012");
            (c || d) && Ck("cr_urlbuilt", c);
            b = sA(a, e);
            e = rA(e);
            vA(a, xz(a) || a.l);
            (c || d) && Ck("cr_postwrite", c);
            c = function(g) {
                jA(a, g, e, f)
            };
            La(b) ? c(b) : b.then(c).then(null, function(g) {
                vk.j(223, g, void 0, void 0)
            })
        }
    }

    function wA(a, b, c) {
        var d = a.A;
        d = "aa" === d.google_loader_used || "sa" === d.google_loader_used;
        var e = W(449, tA);
        d && ed() && nd(11) ? (cx(function() {
            e(a, b, c)
        }), a.D = cx) : tA(a, b, c)
    }

    function xA(a, b, c) {
        var d = a.A,
            e = "aa" === d.google_loader_used || "sa" === d.google_loader_used,
            f = Qm();
        Mg = f = sm(tm(a.pubWin), 128) || "21062175" === ck(f, 126);
        var g = d.google_ad_client;
        d = Yg(ih, g);
        if (e && d.va) {
            var h = x.setTimeout(function() {
                X("abg:cmpnc", {
                    client: a.A.google_ad_client,
                    url: a.A.google_page_url,
                    consent: JSON.stringify(Yg(ih, g))
                })
            }, 1E4);
            a.o = !0;
            Zg(ih, g, W(450, function(k) {
                x.clearTimeout(h);
                a.B = k;
                wA(a, b, c)
            }))
        } else f && Tg() && 5 == d.Ga && "NCS" == d.Va && X("sync:cmpnc", {
            client: a.A.google_ad_client,
            url: a.A.google_page_url,
            consent: JSON.stringify(d)
        }), a.B = d, wA(a, b, c)
    }

    function eA(a) {
        var b = a.A.google_ad_width,
            c = a.A.google_ad_height;
        var d = a.pubWin.document;
        var e = a.A,
            f = 0;
        try {
            !1 === e.google_allow_expandable_ads && (f |= 1);
            if (!d.body || isNaN(e.google_ad_height) || isNaN(e.google_ad_width) || a.iframeWin && d.domain != a.iframeWin.location.hostname || !/^http/.test(d.location.protocol)) f |= 2;
            a: {
                e = navigator;
                var g = e.userAgent,
                    h = e.platform,
                    k = /WebKit\/(\d+)/,
                    l = /rv:(\d+\.\d+)/,
                    m = /rv:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(h) && !/^Opera/.test(g)) {
                    var n = (k.exec(g) || [0, 0])[1],
                        q = (l.exec(g) || [0, 0])[1];
                    if (/Win/.test(h) && /Trident/.test(g) && 11 <= d.documentMode || !n && "Gecko" === e.product && 27 <= q && !m.test(g) || 536 <= n) {
                        var t = !0;
                        break a
                    }
                }
                t = !1
            }
            t || (f |= 4)
        } catch (v) {
            f |= 8
        }
        d = f;
        Ln(a.pubWin, a.pubWin.document, b, c) && (d |= 2);
        a.m = d;
        0 === a.m || (a.A.google_allow_expandable_ads = !1);
        wm() != a.pubWin && Di(a, 4);
        kh && Di(a, 16);
        hh && Di(a, 8);
        3 === tn(a.pubWin.document) && Di(a, 32);
        if (b = a.j) b = a.j, b = !(jl(b).scrollWidth <= jl(b).clientWidth);
        b && Di(a, 1024);
        null == a.iframeWin && Di(a, 8192);
        a.A.google_loader_features_used && Di(a, a.A.google_loader_features_used);
        Gn = Dn();
        yn = lh;
        xn = mh;
        b = !dd() || nd(11) ? In() : Kn();
        c = Am();
        a.F = b.setupOse(Cm(c, 7, zm()));
        b = "";
        (c = a.A.google_async_iframe_id) && null == a.iframeWin ? c = a.l : c ? c = a.pubWin.document.getElementById(c) : (c = b = "google_temp_span", d = a.A.google_container_id, f = a.iframeWin.document, t = d && f.getElementById(d) || f.getElementById(c), t || d || !c || (f.write("<span id=" + c + "></span>"), t = f.getElementById(c)), c = t);
        Ww = T;
        $w();
        Vw(".google.nl") && (Zw[1] = ".google.nl");
        xA(a, c, b)
    }

    function hA(a, b, c) {
        if (a = b.getElementById(a)) a.style.visibility = "visible", kf(a), a.appendChild(c)
    }

    function gA(a, b, c) {
        a && (a = b.getElementById(a)) && c && (a.style.visibility = "visible", a.innerHTML = c)
    }

    function pA(a, b) {
        var c = b.src,
            d = c.indexOf("/pagead/blank.gif#?");
        a = -1 === d ? c : a + c.substr(d + 19);
        a !== c && (c = b.nextSibling, d = b.parentNode, d.removeChild(b), b.src = a, d.insertBefore(b, c))
    }

    function uA(a) {
        var b = Am(),
            c = a.google_ad_section;
        Tn(a) && Em(b, 15, Cm(b, 15, 0) + 1);
        if (qi(a)) {
            if (100 < Em(b, 5, Cm(b, 5, 0) + 1)) return !1
        } else if (100 < Em(b, 6, Cm(b, 6, 0) + 1) - Cm(b, 15, 0) && "" == c) return !1;
        return !0
    }

    function vA(a, b) {
        b && a.A.rpe && my(a.pubWin, b, {
            height: a.A.google_ad_height,
            wb: "force",
            Bb: !0,
            $b: !0
        })
    }

    function cA(a) {
        var b = a.j;
        if (b && !wi(b).ads_density_stats_processed && !Rh(b) && (wi(b).ads_density_stats_processed = !0, .01 > Mf(b))) {
            var c = function() {
                if (b) {
                    var d = Ov(Qv(b), a.A.google_ad_client, b.location.hostname, xi(a.A));
                    X("ama_stats", d, 1)
                }
            };
            "complete" === b.document.readyState ? x.setTimeout(c, 1E3) : Q(b, "load", function() {
                x.setTimeout(c, 1E3)
            })
        }
    };
    (function() {
        var a = [Cw, Bw, Rm, zk];
        vk.l = function(b) {
            kb(a, function(c) {
                c(b)
            });
            xk(b);
            wk && (b.jc = wk);
            yk(b)
        }
    })();
    var yA = x.google_sl_win || x;
    if (!yA.google_sa_impl) {
        yA.google_sa_impl = sz;
        var zA = nz(yA),
            Jm = zA = void 0 === zA ? nz() : zA;
        Im();
        var AA = zA,
            BA = Nh.U();
        BA.j = Mh(Kh, AA);
        BA.l = Mh(Lh, AA);
        oz.U();
        yA.google_process_slots && yA.google_process_slots()
    };
}).call(this, window, document, location)