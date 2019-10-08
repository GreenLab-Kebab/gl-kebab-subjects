(function(_) {
    var ba, fa, ka, na, oa, va, wa, Aa, Da, C, Ua, Va, Wa, Ya, bb, jb, nb, qb, rb, Ab, Bb, Eb, Fb, Gb, Lb, Nb, Mb, Rb, Tb, Ub, Vb, Wb, Xb, Zb, Yb, $b, bc, ac, cc, fc, gc, hc, ic, jc, lc, nc, rc, qc, vc, zc, Bc, Cc, Dc, Fc, Gc, Hc, Ic, Jc, Mc, Nc, Lc, Kc, Ec, Oc, Tc, Vc, Wc, Xc, Zc, $c, dd, bd, ed, id, kd, jd, md, nd, od, rd, ud, xd, yd, Ad, Bd, Cd, Ed, ha, Fd, ia, Kd, Ld;
    ba = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    };
    _.ca = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    _.da = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: _.ca(a)
        }
    };
    fa = function(a) {
        if (!(a instanceof Array)) {
            a = _.da(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    ka = function(a, b) {
        a.prototype = ha(b.prototype);
        a.prototype.constructor = a;
        if (ia) ia(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.W = b.prototype
    };
    na = function(a, b) {
        if (b) {
            var c = _.la;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && (0, _.ma)(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
    oa = function(a, b) {
        this.b = a;
        (0, _.ma)(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    };
    _.p = function(a) {
        return void 0 !== a
    };
    _.t = function(a, b, c) {
        a = a.split(".");
        c = c || _.q;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    _.qa = function() {};
    _.ra = function(a) {
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
    };
    _.sa = function(a) {
        return "array" == _.ra(a)
    };
    _.ta = function(a) {
        return "function" == _.ra(a)
    };
    _.ua = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    va = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    wa = function(a, b, c) {
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
    };
    _.v = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.v = va : _.v = wa;
        return _.v.apply(null, arguments)
    };
    _.y = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    _.z = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.W = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    _.ya = function(a, b) {
        b = (0, _.xa)(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    _.za = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    Aa = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    Da = function(a, b) {
        this.g = a === Ba && b || "";
        this.l = Ca
    };
    _.Ea = function(a) {
        return a instanceof Da && a.constructor === Da && a.l === Ca ? a.g : "type_error:Const"
    };
    _.A = function(a) {
        return new Da(Ba, a)
    };
    _.Ha = function(a, b, c) {
        this.l = a === _.Fa && b || "";
        this.v = a === _.Fa && c || null;
        this.A = Ga
    };
    _.Ia = function(a) {
        if (a instanceof _.Ha && a.constructor === _.Ha && a.A === Ga) return a.l;
        _.ra(a);
        return "type_error:TrustedResourceUrl"
    };
    _.B = function(a, b) {
        this.l = a === _.Ja && b || "";
        this.v = Ka
    };
    _.La = function(a) {
        if (a instanceof _.B && a.constructor === _.B && a.v === Ka) return a.l;
        _.ra(a);
        return "type_error:SafeUrl"
    };
    _.Na = function(a) {
        if (a instanceof _.B) return a;
        a = "object" == typeof a && a.Y ? a.b() : String(a);
        Ma.test(a) || (a = "about:invalid#zClosurez");
        return new _.B(_.Ja, a)
    };
    C = function(a) {
        return -1 != Oa.indexOf(a)
    };
    _.Qa = function() {
        this.l = "";
        this.A = Pa;
        this.v = null
    };
    _.Ra = function(a) {
        if (a instanceof _.Qa && a.constructor === _.Qa && a.A === Pa) return a.l;
        _.ra(a);
        return "type_error:SafeHtml"
    };
    _.Sa = function(a, b) {
        var c = new _.Qa;
        c.l = a;
        c.v = b;
        return c
    };
    Ua = function(a) {
        var b = new _.Ha(_.Fa, _.Ea(Ta), null);
        a.src = b.v ? b.v : _.Ia(b).toString()
    };
    Va = function() {
        return C("iPhone") && !C("iPod") && !C("iPad")
    };
    Wa = function(a) {
        Wa[" "](a);
        return a
    };
    _.Xa = function(a, b) {
        try {
            return Wa(a[b]), !0
        } catch (c) {}
        return !1
    };
    Ya = function() {
        var a = _.q.document;
        return a ? a.documentMode : void 0
    };
    _.E = function() {};
    _.F = function(a, b, c) {
        a.b = null;
        b || (b = []);
        a.C = void 0;
        a.v = -1;
        a.g = b;
        a: {
            if (b = a.g.length) {
                --b;
                var d = a.g[b];
                if (!(null === d || "object" != typeof d || _.sa(d) || Za && d instanceof Uint8Array)) {
                    a.A = b - a.v;
                    a.l = d;
                    break a
                }
            }
            a.A = Number.MAX_VALUE
        }
        a.B = {};
        if (c)
            for (b = 0; b < c.length; b++)
                if (d = c[b], d < a.A) d += a.v, a.g[d] = a.g[d] || $a;
                else {
                    var e = a.A + a.v;
                    a.g[e] || (a.l = a.g[e] = {});
                    a.l[d] = a.l[d] || $a
                }
    };
    _.ab = function(a, b) {
        if (b < a.A) {
            b += a.v;
            var c = a.g[b];
            return c === $a ? a.g[b] = [] : c
        }
        if (a.l) return c = a.l[b], c === $a ? a.l[b] = [] : c
    };
    _.G = function(a, b, c) {
        a = _.ab(a, b);
        return null == a ? c : a
    };
    _.H = function(a, b) {
        a = _.ab(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    };
    _.I = function(a, b, c) {
        a.b || (a.b = {});
        if (!a.b[c]) {
            var d = _.ab(a, c);
            d && (a.b[c] = new b(d))
        }
        return a.b[c]
    };
    bb = function(a, b, c) {
        a.b || (a.b = {});
        if (!a.b[c]) {
            for (var d = _.ab(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.b[c] = e
        }
        b = a.b[c];
        b == $a && (b = a.b[c] = []);
        return b
    };
    _.cb = function(a) {
        if (a.b)
            for (var b in a.b) {
                var c = a.b[b];
                if (_.sa(c))
                    for (var d = 0; d < c.length; d++) c[d] && _.cb(c[d]);
                else c && _.cb(c)
            }
        return a.g
    };
    _.eb = function(a) {
        _.F(this, a, db)
    };
    _.fb = function(a) {
        return _.G(a, 22, "")
    };
    _.gb = function(a) {
        return _.G(a, 23, "")
    };
    _.ib = function(a) {
        _.F(this, a, null)
    };
    jb = function(a) {
        _.F(this, a, null)
    };
    _.lb = function(a) {
        _.F(this, a, null)
    };
    nb = function(a) {
        _.F(this, a, null)
    };
    qb = function(a) {
        _.F(this, a, ob)
    };
    rb = function(a) {
        return bb(a, _.eb, 1)
    };
    _.sb = function(a, b) {
        this.b = void 0 !== a ? a : 0;
        this.g = void 0 !== b ? b : 0
    };
    _.tb = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.ub = function(a) {
        var b = a.indexOf("#");
        0 > b && (b = a.length);
        var c = a.indexOf("?");
        if (0 > c || c > b) {
            c = b;
            var d = ""
        } else d = a.substring(c + 1, b);
        return [a.substr(0, c), d, a.substr(b)]
    };
    _.vb = function(a, b) {
        return b ? a ? a + "&" + b : b : a
    };
    _.wb = function(a, b) {
        if (!b) return a;
        a = _.ub(a);
        a[1] = _.vb(a[1], b);
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    };
    _.xb = function(a, b, c) {
        if (_.sa(b))
            for (var d = 0; d < b.length; d++) _.xb(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    _.yb = function(a) {
        var b = [],
            c;
        for (c in a) _.xb(c, a[c], b);
        return b.join("&")
    };
    _.zb = function(a, b) {
        b = _.yb(b);
        return _.wb(a, b)
    };
    Ab = function(a) {
        try {
            return !!a && null != a.location.href && _.Xa(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Bb = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    };
    _.Cb = function(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    Eb = function(a) {
        return a ? a.passive && Db() ? a : a.capture || !1 : !1
    };
    _.K = function(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Eb(d))
    };
    Fb = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, Eb(void 0))
    };
    _.Hb = function(a, b, c) {
        Gb(a, b, void 0 === c ? null : c)
    };
    Gb = function(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        if (c) {
            var e = function(f) {
                c && c(f);
                Fb(d, "load", e);
                Fb(d, "error", e)
            };
            _.K(d, "load", e);
            _.K(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    };
    Lb = function(a, b) {
        var c = _.Ib(599);
        b = b instanceof _.B || !Jb.test(b) ? b : new _.B(_.Ja, b);
        _.Kb(b, c);
        c = b instanceof _.B ? b : _.Na(b);
        a.href = _.La(c)
    };
    _.Kb = function(a, b) {
        "about:invalid#zClosurez" === (a instanceof _.B ? a : _.Na(a)).b() && b(String(a))
    };
    _.Ib = function(a) {
        var b = (Mb() ? "http:" : "https:") + "//pagead2.googlesyndication.com/pagead/gen_204";
        return function(c) {
            c = _.zb(b, {
                id: "unsafeurl",
                ctx: a,
                url: c
            });
            navigator.sendBeacon && navigator.sendBeacon(c, "")
        }
    };
    Nb = function(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    };
    _.Pb = function(a, b, c, d, e, f, g) {
        if (!g) a: {
            if (1 === a.nodeType) try {
                if (1 == a.nodeType) {
                    c: {
                        try {
                            var h = a.getBoundingClientRect()
                        } catch (r) {
                            var m = {
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0
                            };
                            break c
                        }
                        if (_.Ob && a.ownerDocument.body) {
                            var l = a.ownerDocument;
                            h.left -= l.documentElement.clientLeft + l.body.clientLeft;
                            h.top -= l.documentElement.clientTop + l.body.clientTop
                        }
                        m = h
                    }
                    g = new _.sb(m.left, m.top)
                }
                else {
                    var n = a.changedTouches ? a.changedTouches[0] : a;
                    g = new _.sb(n.clientX, n.clientY)
                }
                break a
            } catch (r) {}
            g = new _.sb(0, 0)
        }
        if (document.createEvent) m = document.createEvent("MouseEvents"), m.initMouseEvent("click", !0, !0, null, 0, g.b, g.g, g.b, g.g, c, f, d, e, b, null);
        else return !1;
        if (a.dispatchEvent) a.dispatchEvent(m);
        else return !1;
        return !0
    };
    Mb = function() {
        var a = void 0 === a ? _.L : a;
        return "http:" === a.location.protocol
    };
    _.Qb = function(a, b, c) {
        c = void 0 === c ? _.M : c;
        switch (a) {
            case 2:
                return c.getElementsByClassName(b);
            case 3:
                return c.getElementsByTagName(b)
        }
        return []
    };
    _.N = function(a, b, c) {
        c = void 0 === c ? _.M : c;
        switch (a) {
            case 1:
                if (c.getElementById) return c.getElementById(b);
                break;
            case 2:
            case 3:
                if (a = _.Qb(a, b, c), 0 < a.length) return a[0]
        }
        return null
    };
    Rb = function(a, b) {
        a && Nb(b, function(c, d) {
            a.style[d] = c
        })
    };
    _.Sb = function(a) {
        a = _.da(a);
        for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value, "use_refactored_boomerang_click_handler" === _.G(b, 1, "") && "true" === _.G(b, 2, "").toLowerCase()) return !0;
        return !1
    };
    Tb = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    Ub = function(a, b) {
        this.b = a;
        this.g = b
    };
    Vb = function(a, b) {
        this.url = a;
        this.Na = !!b;
        this.depth = null
    };
    Wb = function() {
        this.l = "&";
        this.v = !1;
        this.g = {};
        this.A = 0;
        this.b = []
    };
    Xb = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    };
    Zb = function(a, b, c, d, e) {
        var f = [];
        Bb(a, function(g, h) {
            (g = Yb(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    };
    Yb = function(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Yb(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Zb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    };
    $b = function(a, b, c, d) {
        a.b.push(b);
        a.g[b] = Xb(c, d)
    };
    bc = function(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = ac(a) - c.length;
        if (0 > d) return "";
        a.b.sort(function(n, r) {
            return n - r
        });
        c = null;
        for (var e = "", f = 0; f < a.b.length; f++)
            for (var g = a.b[f], h = a.g[g], m = 0; m < h.length; m++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var l = Zb(h[m], a.l, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.l;
                        break
                    }
                    a.v && (e = d, l[e - 1] == a.l && --e, b += l.substr(0, e), e = a.l, d = 0);
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    };
    ac = function(a) {
        var b = 1,
            c;
        for (c in a.g) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    };
    cc = function() {
        this.g = Mb() ? "http:" : "https:";
        this.b = Math.random()
    };
    fc = function() {
        var a = dc,
            b = ec.google_srt;
        0 <= b && 1 >= b && (a.b = b)
    };
    gc = function(a, b, c, d, e, f) {
        if ((d ? a.b : Math.random()) < (e || .01)) try {
            if (c instanceof Wb) var g = c;
            else g = new Wb, Bb(c, function(m, l) {
                var n = g,
                    r = n.A++;
                m = Xb(l, m);
                n.b.push(r);
                n.g[r] = m
            });
            var h = bc(g, a.g, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" === typeof f ? _.Hb(_.q, h) : _.Hb(_.q, h, f))
        } catch (m) {}
    };
    hc = function() {
        var a = _.q.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : (0, _.O)()
    };
    ic = function() {
        var a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    jc = function(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    lc = function() {
        var a = ec;
        this.events = [];
        this.g = a || _.q;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.b = kc() || (null != b ? b : 1 > Math.random())
    };
    nc = function(a) {
        a && mc && kc() && (mc.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), mc.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    _.pc = function() {
        var a = oc;
        this.v = dc;
        this.g = null;
        this.B = this.l;
        this.b = void 0 === a ? null : a;
        this.A = !1
    };
    rc = function(a, b, c) {
        try {
            if (a.b && a.b.b) {
                var d = a.b.start(b.toString(), 3);
                var e = c();
                a.b.end(d)
            } else e = c()
        } catch (f) {
            c = !0;
            try {
                nc(d), c = a.B(b, new Tb(f, {
                    message: qc(f)
                }), void 0, void 0)
            } catch (g) {
                a.l(217, g)
            }
            if (!c) throw f;
        }
        return e
    };
    _.tc = function(a, b, c) {
        var d = sc;
        return function(e) {
            for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
            return rc(d, a, function() {
                return b.apply(c, f)
            })
        }
    };
    qc = function(a) {
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
    vc = function() {
        if (!ec.google_measure_js_timing) {
            var a = oc;
            a.b = !1;
            a.events != a.g.google_js_reporting_queue && (kc() && (0, _.uc)(a.events, nc), a.events.length = 0)
        }
    };
    _.wc = function(a, b, c) {
        gc(dc, a, b, !0, c, void 0)
    };
    _.xc = function(a, b) {
        var c = /[?&]adurl=([^&]+)/.exec(a);
        if (!c || !/[?&]ae=1(&|$)/.test(a) || /[?&]dsh=1(&|$)/.test(a)) return null;
        try {
            var d = b ? c.index : a.length;
            return {
                Ha: a.slice(0, d) + "&act=1" + a.slice(d),
                M: decodeURIComponent(c[1])
            }
        } catch (e) {
            return null
        }
    };
    zc = function(a) {
        var b = _.yc(a.href),
            c = b.oa;
        Lb(a, b.ha);
        return c
    };
    _.yc = function(a) {
        var b = _.xc(a, !0);
        return b ? navigator.sendBeacon ? navigator.sendBeacon(_.Ac(b.Ha, "&ri=1"), "") ? {
            ha: b.M,
            oa: !0
        } : {
            ha: _.Ac(a, "&ri=2"),
            oa: !1
        } : {
            ha: _.Ac(a, "&ri=16"),
            oa: !1
        } : {
            ha: a,
            oa: !1
        }
    };
    _.Ac = function(a, b) {
        var c = a.search(/&adurl=/);
        return 0 > c ? a + b : a.slice(0, c) + b + a.slice(c)
    };
    Bc = function(a) {
        return null !== _.xc(a.href) || (a.getAttribute("data-orig-async-clicktrack-url") ? null !== _.xc(a.getAttribute("data-orig-async-clicktrack-url")) : !1)
    };
    Cc = function(a, b, c, d, e) {
        c = "&" + b + "=" + c;
        var f = a.indexOf("&" + d + "=");
        c = 0 > f ? a + c : a.substring(0, f) + c + a.substring(f);
        return 2E3 < c.length ? _.p(e) ? Cc(a, b, e, d, void 0) : a : c
    };
    Dc = function(a, b, c, d) {
        b = c(d, b);
        if (!(b instanceof Array)) return a;
        (0, _.uc)(b, function(e) {
            if (2 !== e.length && 3 !== e.length) return a;
            a = Cc(a, e[0], e[1], "adurl", e[2])
        });
        return a
    };
    Fc = function(a, b, c) {
        this.b = a;
        this.v = b;
        this.l = c;
        this.G = [];
        this.A = [];
        this.K = {};
        this.g = {};
        this.C = this.D = !1;
        this.B = Ec(this.b);
        this.J = new Promise(function(d) {
            d(!1)
        });
        this.F = -1;
        a = _.fb(this.b);
        b = _.gb(this.b);
        c = bb(this.v, jb, 23);
        this.l && this.b && a && b && _.Sb(c) && 2 === Ec(this.b) && (this.B = 2, this.J = this.l.Za({
            url: a,
            id: a,
            I: b
        }))
    };
    Gc = function(a, b, c) {
        var d = b = b.getAttribute("data-original-click-url");
        if (d)
            for (var e = 0; e < a.G.length; e++) d = Dc(d, b, a.G[e], c);
        return d
    };
    Hc = function(a, b) {
        b = void 0 === b ? Date.now() : b;
        return b - a.F > _.G(a.b, 39, 0)
    };
    Ic = function(a, b) {
        -1 === b.href.indexOf("dbm/clk") && (Bc(b) || _.H(a.b, 38)) && rc(sc, 446, function() {
            var c = Date.now(),
                d;
            if (d = Hc(a, c))
                if (_.H(a.b, 45))
                    if (d = b.getAttribute("data-orig-async-clicktrack-url")) {
                        d = _.yc(d);
                        var e = d.oa;
                        Lb(b, d.ha);
                        d = e
                    } else b.setAttribute("data-orig-async-clicktrack-url", b.href), d = zc(b);
            else d = zc(b);
            d && (a.F = c)
        })
    };
    Jc = function(a, b, c, d) {
        if (0 != a.A.length && (d.preventDefault ? !d.defaultPrevented : !1 !== d.returnValue)) {
            var e = 1 == d.which && !d.ctrlKey && "_blank" != b.target && "_new" != b.target;
            e && _.Cb(d);
            for (var f = [], g = {}, h = 0; h < a.A.length; g = {
                    ta: g.ta
                }, h++)
                if (g.ta = a.A[h](c), g.ta) {
                    var m = new Promise(function(l) {
                        return function(n) {
                            _.Hb(_.L, l.ta, n)
                        }
                    }(g));
                    f.push(m)
                }
            c = Promise.all(f);
            f = new Promise(function(l) {
                window.setTimeout(l, 2E3)
            });
            e && Promise.race([c, f]).then((0, _.v)(Fc.prototype.S, a, b, d))
        }
    };
    Mc = function(a, b, c) {
        var d = bb(a.v, jb, 23),
            e = !1;
        d = _.da(d);
        for (var f = d.next(); !f.done; f = d.next())
            if (f = f.value, "use_async_for_js_click_handler" === _.G(f, 1, "") && "True" === _.G(f, 2, "")) {
                e = !0;
                break
            }
        e && a.l && 2 === a.B ? (_.Cb(c), Kc(a, b, c, a.B, a.J).then(function(g) {
            g || Ic(a, b)
        })) : Lc(a, b, c) || Ic(a, b)
    };
    Nc = function(a, b, c, d) {
        a.g[d] || (a.g[d] = {});
        a.g[d][c] || (a.g[d][c] = []);
        _.K(b, d, (0, _.v)(a.R, a, b, c, d))
    };
    Lc = function(a, b, c) {
        var d = b.href;
        if (a.l) {
            var e = Date.now(),
                f = Hc(a, e);
            if (a.l.Ma(b, c, a.b, a.C, f)) return f && (a.F = e), !0
        } else if (_.q.googdlu && (_.q.googdlu.tryOpenPlayStore && _.q.googdlu.tryOpenPlayStore(c, d, _.G(a.b, 15, "")) || _.q.googdlu.tryOpenItunesStore && _.q.googdlu.tryOpenItunesStore(c, d, _.G(a.b, 15, ""), _.H(a.b, 42), _.H(a.b, 43), _.G(a.v, 7, ""), _.G(a.v, 8, "")))) return !0;
        return _.H(a.b, 31) && _.H(a.b, 30) && _.G(a.b, 28, "") && _.q.googdlu && _.q.googdlu.tryOpenAppUrl ? (_.q.googdlu.tryOpenAppUrl(c, d, _.G(a.b, 32, ""), _.G(a.b, 28, "")), !0) : !1
    };
    Kc = function(a, b, c, d, e) {
        if (a.l) {
            var f = Hc(a, Date.now()),
                g = bb(a.v, jb, 23);
            return a.l.ib(b, c, a.b, a.C, e, f, g, d)
        }
        return new Promise(function(h) {
            h(!1)
        })
    };
    Ec = function(a) {
        return _.H(a, 31) && _.G(a, 28, "") ? 1 : _.fb(a) && _.gb(a) ? _.H(a, 44) ? 3 : 2 : 0
    };
    Oc = function(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return "string" === typeof a && a.match(/\S+/g) || []
    };
    _.Pc = function(a, b) {
        a.classList ? a.classList.add(b) : (a.classList ? a.classList.contains(b) : 0 <= (0, _.xa)(Oc(a), b)) || (a.className += 0 < a.className.length ? " " + b : b)
    };
    _.Rc = function(a, b) {
        if (a.classList) a.classList.remove(b);
        else if (a.classList ? a.classList.contains(b) : 0 <= (0, _.xa)(Oc(a), b)) a.className = Qc(Oc(a), function(c) {
            return c != b
        }).join(" ")
    };
    Tc = function(a) {
        _.q.setTimeout(function() {
            throw a;
        }, 0)
    };
    Vc = function() {
        var a = _.q.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
            var e = _.tb(document, "IFRAME");
            e.style.display = "none";
            Ua(e);
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(_.Ra(Uc));
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = (0, _.v)(function(m) {
                if (("*" == h || m.origin == h) && m.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !C("Trident") && !C("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Ia;
                    c.Ia = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Ia: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in _.tb(document, "SCRIPT") ? function(e) {
            var f = _.tb(document, "SCRIPT");
            f.onreadystatechange = function() {
                f.onreadystatechange = null;
                f.parentNode.removeChild(f);
                f = null;
                e();
                e = null
            };
            document.documentElement.appendChild(f)
        } : function(e) {
            _.q.setTimeout(e, 0)
        }
    };
    Wc = function(a, b) {
        this.l = a;
        this.v = b;
        this.g = 0;
        this.b = null
    };
    Xc = function() {
        this.g = this.b = null
    };
    Zc = function() {
        var a = Yc,
            b = null;
        a.b && (b = a.b, a.b = a.b.next, a.b || (a.g = null), b.next = null);
        return b
    };
    $c = function() {
        this.next = this.g = this.b = null
    };
    dd = function(a) {
        ad || bd();
        cd || (ad(), cd = !0);
        Yc.add(a, void 0)
    };
    bd = function() {
        if (_.q.Promise && _.q.Promise.resolve) {
            var a = _.q.Promise.resolve(void 0);
            ad = function() {
                a.then(ed)
            }
        } else ad = function() {
            var b = ed;
            !_.ta(_.q.setImmediate) || _.q.Window && _.q.Window.prototype && !C("Edge") && _.q.Window.prototype.setImmediate == _.q.setImmediate ? (fd || (fd = Vc()), fd(b)) : _.q.setImmediate(b)
        }
    };
    ed = function() {
        for (var a; a = Zc();) {
            try {
                a.b.call(a.g)
            } catch (c) {
                Tc(c)
            }
            var b = gd;
            b.v(a);
            100 > b.g && (b.g++, a.next = b.b, b.b = a)
        }
        cd = !1
    };
    _.P = function() {
        this.v = this.v;
        this.l = this.l
    };
    _.hd = function(a) {
        _.P.call(this);
        this.C = 1;
        this.A = [];
        this.B = 0;
        this.b = [];
        this.g = {};
        this.F = !!a
    };
    id = function(a, b, c) {
        dd(function() {
            a.apply(b, c)
        })
    };
    kd = function(a, b, c, d, e) {
        this.B = new _.hd;
        this.g = a;
        this.g[0] = [b];
        this.v = [];
        this.l = new Fc(c, d, e);
        this.A = d;
        this.b = c;
        b = _.fb(this.b);
        c = _.gb(this.b);
        d = bb(this.A, jb, 23);
        if (d = e && this.b && _.Sb(d)) d = this.b, d = 2 === (_.H(d, 31) && _.G(d, 28, "") ? 1 : _.fb(d) && _.gb(d) ? _.H(d, 44) ? 3 : 2 : 0);
        !d && b && c && e && (e.canOpenIntents([{
            url: b,
            id: b,
            I: c
        }], (0, _.v)(this.Qa, this)) || e.canOpenURLs(b, (0, _.v)(this.Qa, this)));
        (e = _.N(1, "common_15click_anchor")) ? (a[20] = [e], jd(this, 20)) : (e = _.za(_.Qb(2, "common_15click_anchor")), 0 < e.length && (a[20] = e, jd(this, 20)))
    };
    _.ld = function(a, b, c) {
        a = a.getElementsByAdPiece(b);
        if (c)
            for (b = 0; b < a.length; b++) {
                var d = a[b].getAttribute(c);
                if (d) return d
            }
        return null
    };
    jd = function(a, b) {
        if ((null == _.ab(a.A, 28) || !_.H(_.I(a.A, _.ib, 28), 12)) && a.g[b] && a.Ba(b)) {
            a.v.push(b);
            var c = a.l;
            a = a.g[b];
            for (var d = 0; d < a.length; d++) {
                var e = a[d],
                    f = e;
                f.href && f.setAttribute("data-original-click-url", f.href);
                Nc(c, e, b, "mousedown");
                Nc(c, e, b, "click")
            }
            c.K[b] = !0
        }
    };
    md = function(a, b) {
        a = a.getElementsByAdPiece(b);
        for (b = 0; b < a.length; b++)
            if (!a[b].href) return !1;
        return !0
    };
    nd = function(a) {
        this.C = new _.hd;
        this.A = null;
        this.l = [];
        this.b = a;
        this.v = [];
        this.B = !1;
        this.g = null
    };
    od = function(a) {
        var b = [a];
        b = void 0 === b ? [] : b;
        _.q.google_logging_queue || (_.q.google_logging_queue = []);
        _.q.google_logging_queue.push([10, b]);
        a = new nd(new qb(a));
        _.t("adSlot", a, void 0);
        return a
    };
    _.pd = function() {
        var a = _.q.adSlot;
        return a ? a : (sc.l(536, Error("no adslot"), void 0, void 0), od(null))
    };
    rd = function(a, b, c) {
        kd.call(this, a, b, c, _.pd().b, _.pd().g);
        for (a = 0; a < qd.length; a++) jd(this, qd[a])
    };
    ud = function(a, b) {
        var c = sd,
            d = {};
        if (!b) return null;
        d[0] = [b];
        Nb(td, function(e) {
            c[e] && (d[e] = _.za(_.Qb(2, c[e], b)))
        });
        return new rd(d, b, a)
    };
    xd = function(a, b, c) {
        b.gqid = vd;
        b.qqid = wd;
        b.com = a;
        _.wc("glaurung", b, c)
    };
    yd = function(a, b) {
        var c = _.I(b, nb, 16);
        c && _.H(c, 12) && _.H(b, 5) && Rb(a, {
            backgroundColor: "transparent",
            backgroundImage: "none"
        })
    };
    Ad = function(a, b, c) {
        _.N(2, "app-icon-link", b) && (sd[33] = "app-icon-link");
        var d = a.b,
            e = _.N(1, "adunit", b),
            f = _.N(1, "ads", b);
        if (!e || !f) return 1;
        var g = {
            overflow: "hidden"
        };
        0 == _.G(d, 32, 0) ? (g.width = _.G(d, 2, 0) + "px", g.height = _.G(d, 3, 0) + "px", g.position = "absolute", g.top = "0", g.left = "0") : (g.width = "100%", g.height = "100%");
        Rb(e, g);
        yd(e, d);
        yd(f, d);
        try {
            c(f, a)
        } catch (l) {
            return _.H(d, 13) && (zd = l), 2
        }
        c = 0;
        d = rb(d);
        for (e = 0; e < d.length; e++) {
            g = d[e];
            var h = "taw" + _.G(g, 2, 0);
            f = _.N(1, h, b);
            if (!f) return 3;
            f = ud(g, f);
            if (!f) return 1;
            var m = _.L.registerAd;
            m ? m(f, h) : c = 4;
            h = _.L.initAppPromo;
            _.H(g, 11) && h && h(f, a);
            if (_.H(g, 19) && (g = _.ab(g, 33), 0 < g.length))
                for (h = 0; h < g.length; h++) m = (0, _.v)(rd.prototype.C, f, g[h]), f.l.A.push(m);
            a.Da(f)
        }
        return c
    };
    Bd = function(a, b, c) {
        var d = [];
        d[0] = [c];
        d[15] = [b];
        (b = _.N(1, "abgc")) && (d[27] = [b]);
        (b = _.N(1, "cbc")) && (d[28] = [b]);
        (b = _.N(1, "cta-button-anchor")) && (d[4] = [b]);
        kd.call(this, d, c, a, _.pd().b, _.pd().g);
        jd(this, 15);
        b && jd(this, 4)
    };
    Cd = function(a, b) {
        var c = {};
        c[0] = [b];
        kd.call(this, c, b, a, _.pd().b, _.pd().g)
    };
    Ed = function(a, b, c) {
        kd.call(this, a, b, c, _.pd().b, _.pd().g);
        for (a = 0; a < Dd.length; a++) jd(this, Dd[a]);
        this.listen(4, "mouseover", (0, _.v)(this.H, this, 0, "onhoverbg", !1));
        this.listen(4, "mouseout", (0, _.v)(this.H, this, 0, "onhoverbg", !0))
    };
    _.aa = [];
    ha = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    };
    if ("function" == typeof Object.setPrototypeOf) Fd = Object.setPrototypeOf;
    else {
        var Gd;
        a: {
            var Hd = {
                    Ya: !0
                },
                Id = {};
            try {
                Id.__proto__ = Hd;
                Gd = Id.Ya;
                break a
            } catch (a) {}
            Gd = !1
        }
        Fd = Gd ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    ia = Fd;
    _.la = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
    _.ma = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    };
    na("Promise", function(a) {
        function b(g) {
            this.g = 0;
            this.l = void 0;
            this.b = [];
            var h = this.v();
            try {
                g(h.resolve, h.reject)
            } catch (m) {
                h.reject(m)
            }
        }

        function c() {
            this.b = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.g = function(g) {
            if (null == this.b) {
                this.b = [];
                var h = this;
                this.l(function() {
                    h.A()
                })
            }
            this.b.push(g)
        };
        var e = _.la.setTimeout;
        c.prototype.l = function(g) {
            e(g, 0)
        };
        c.prototype.A = function() {
            for (; this.b && this.b.length;) {
                var g = this.b;
                this.b = [];
                for (var h = 0; h < g.length; ++h) {
                    var m = g[h];
                    g[h] = null;
                    try {
                        m()
                    } catch (l) {
                        this.v(l)
                    }
                }
            }
            this.b = null
        };
        c.prototype.v = function(g) {
            this.l(function() {
                throw g;
            })
        };
        b.prototype.v = function() {
            function g(l) {
                return function(n) {
                    m || (m = !0, l.call(h, n))
                }
            }
            var h = this,
                m = !1;
            return {
                resolve: g(this.G),
                reject: g(this.A)
            }
        };
        b.prototype.G = function(g) {
            if (g === this) this.A(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.J(g);
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
                h ? this.F(g) : this.B(g)
            }
        };
        b.prototype.F = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (m) {
                this.A(m);
                return
            }
            "function" == typeof h ? this.K(h, g) : this.B(g)
        };
        b.prototype.A = function(g) {
            this.C(2, g)
        };
        b.prototype.B = function(g) {
            this.C(1, g)
        };
        b.prototype.C = function(g, h) {
            if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.l = h;
            this.D()
        };
        b.prototype.D = function() {
            if (null != this.b) {
                for (var g = 0; g < this.b.length; ++g) f.g(this.b[g]);
                this.b = null
            }
        };
        var f = new c;
        b.prototype.J = function(g) {
            var h = this.v();
            g.za(h.resolve, h.reject)
        };
        b.prototype.K = function(g, h) {
            var m = this.v();
            try {
                g.call(h, m.resolve, m.reject)
            } catch (l) {
                m.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function m(u, J) {
                return "function" == typeof u ? function(D) {
                    try {
                        l(u(D))
                    } catch (w) {
                        n(w)
                    }
                } : J
            }
            var l, n, r = new b(function(u, J) {
                l = u;
                n = J
            });
            this.za(m(g, l), m(h, n));
            return r
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.za = function(g, h) {
            function m() {
                switch (l.g) {
                    case 1:
                        g(l.l);
                        break;
                    case 2:
                        h(l.l);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.g);
                }
            }
            var l = this;
            null == this.b ? f.g(m) : this.b.push(m)
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, m) {
                m(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, m) {
                for (var l = _.da(g), n = l.next(); !n.done; n = l.next()) d(n.value).za(h, m)
            })
        };
        b.all = function(g) {
            var h = _.da(g),
                m = h.next();
            return m.done ? d([]) : new b(function(l, n) {
                function r(D) {
                    return function(w) {
                        u[D] = w;
                        J--;
                        0 == J && l(u)
                    }
                }
                var u = [],
                    J = 0;
                do u.push(void 0), J++, d(m.value).za(r(u.length - 1), n), m = h.next(); while (!m.done)
            })
        };
        return b
    });
    oa.prototype.toString = function() {
        return this.b
    };
    _.Jd = function() {
        function a(c) {
            if (this instanceof a) throw new TypeError("Symbol is not a constructor");
            return new oa("jscomp_symbol_" + (c || "") + "_" + b++, c)
        }
        var b = 0;
        return a
    }();
    _.q = this || self;
    Kd = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Ld = 0;
    _.O = Date.now || function() {
        return +new Date
    };
    var Qc;
    _.xa = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    _.uc = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };
    Qc = Array.prototype.filter ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    };
    _.Md = Array.prototype.some ? function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    };
    Da.prototype.Y = !0;
    Da.prototype.b = function() {
        return this.g
    };
    var Ca = {},
        Ba = {},
        Ta = _.A("");
    var Ga;
    _.Ha.prototype.Y = !0;
    _.Ha.prototype.b = function() {
        return this.l.toString()
    };
    _.Ha.prototype.Ga = !0;
    _.Ha.prototype.g = ba(2);
    Ga = {};
    _.Fa = {};
    _.Nd = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    var Ma, Ka;
    _.B.prototype.Y = !0;
    _.B.prototype.b = function() {
        return this.l.toString()
    };
    _.B.prototype.Ga = !0;
    _.B.prototype.g = ba(1);
    Ma = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    Ka = {};
    _.Ja = {};
    var Oa;
    a: {
        var Od = _.q.navigator;
        if (Od) {
            var Pd = Od.userAgent;
            if (Pd) {
                Oa = Pd;
                break a
            }
        }
        Oa = ""
    };
    _.Qa.prototype.Ga = !0;
    _.Qa.prototype.g = ba(0);
    _.Qa.prototype.Y = !0;
    _.Qa.prototype.b = function() {
        return this.l.toString()
    };
    var Pa = {};
    _.Sa("<!DOCTYPE html>", 0);
    var Uc = _.Sa("", 0);
    _.Sa("<br>", 0);
    _.Qd = Aa(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.Ra(Uc);
        return !b.parentElement
    });
    Wa[" "] = _.qa;
    var Sd, Yd;
    _.Rd = C("Opera");
    _.Ob = C("Trident") || C("MSIE");
    Sd = C("Edge");
    _.Td = C("Gecko") && !(-1 != Oa.toLowerCase().indexOf("webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge");
    _.Ud = -1 != Oa.toLowerCase().indexOf("webkit") && !C("Edge");
    _.Vd = C("Android");
    _.Wd = Va();
    _.Xd = C("iPad");
    a: {
        var Zd = "",
            $d = function() {
                var a = Oa;
                if (_.Td) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Sd) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Ob) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (_.Ud) return /WebKit\/(\S+)/.exec(a);
                if (_.Rd) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();$d && (Zd = $d ? $d[1] : "");
        if (_.Ob) {
            var ae = Ya();
            if (null != ae && ae > parseFloat(Zd)) {
                Yd = String(ae);
                break a
            }
        }
        Yd = Zd
    }
    _.be = Yd;
    _.ce = _.q.document && _.Ob ? Ya() : void 0;
    _.de = Va() || C("iPod");
    _.ee = C("iPad");
    _.fe = C("Android") && !((C("Chrome") || C("CriOS")) && !C("Edge") || C("Firefox") || C("FxiOS") || C("Opera") || C("Silk"));
    var Za = "function" == typeof Uint8Array,
        $a = [];
    _.z(_.eb, _.E);
    var db = [20, 33];
    _.z(_.ib, _.E);
    _.z(jb, _.E);
    _.z(_.lb, _.E);
    _.z(nb, _.E);
    _.z(qb, _.E);
    var ob = [1, 23];
    _.M = document;
    _.L = window;
    var td;
    td = {
        Mb: 0,
        mc: 1,
        nc: 45,
        oc: 46,
        $b: 48,
        URL: 2,
        Fb: 3,
        xb: 4,
        lc: 5,
        ec: 7,
        Sb: 8,
        Db: 9,
        Ub: 6,
        Xb: 34,
        Nb: 13,
        yb: 14,
        Tb: 15,
        Vb: 16,
        Wb: 40,
        ic: 47,
        rc: 29,
        Jb: 30,
        kc: 49,
        ac: 17,
        Gb: 18,
        Lb: 19,
        Kb: 20,
        gc: 23,
        Bb: 24,
        dc: 25,
        cc: 26,
        Cb: 27,
        bc: 28,
        qc: 39,
        pc: 31,
        Ib: 32,
        Ab: 33,
        Ob: 35,
        Yb: 36,
        zb: 37,
        Hb: 38,
        Zb: 42,
        fc: 43,
        hc: 44,
        Eb: 50,
        Pb: 1E3,
        Qb: 1001,
        Rb: 1002
    };
    _.ge = [16, 47, 49, 18, 27, 28, 39];
    _.sb.prototype.ceil = function() {
        this.b = Math.ceil(this.b);
        this.g = Math.ceil(this.g);
        return this
    };
    _.sb.prototype.floor = function() {
        this.b = Math.floor(this.b);
        this.g = Math.floor(this.g);
        return this
    };
    _.sb.prototype.round = function() {
        this.b = Math.round(this.b);
        this.g = Math.round(this.g);
        return this
    };
    var Db = Aa(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.q.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    var Jb = /^((market|itms|intent|itms-appss):\/\/)/i;
    var he = !!window.google_async_iframe_id,
        ie = he && window.parent || window;
    _.Ea(_.A("//fonts.googleapis.com/css"));
    var je = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    var ke = null;
    var mc = _.q.performance,
        le = !!(mc && mc.mark && mc.measure && mc.clearMarks),
        kc = Aa(function() {
            var a;
            if (a = le) {
                var b;
                if (null === ke) {
                    ke = "";
                    try {
                        a = "";
                        try {
                            a = _.q.top.location.hash
                        } catch (c) {
                            a = _.q.location.hash
                        }
                        a && (ke = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = ke;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });
    lc.prototype.start = function(a, b) {
        if (!this.b) return null;
        var c = ic() || hc();
        a = new jc(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        mc && kc() && mc.mark(b);
        return a
    };
    lc.prototype.end = function(a) {
        if (this.b && "number" === typeof a.value) {
            var b = ic() || hc();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            mc && kc() && mc.mark(b);
            !this.b || 2048 < this.events.length || this.events.push(a)
        }
    };
    _.pc.prototype.pinger = ba(3);
    _.pc.prototype.l = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Wb;
            f.v = !0;
            $b(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new Tb(b, {
                message: qc(b)
            }));
            b.msg && $b(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.g) try {
                this.g(g)
            } catch (x) {}
            if (d) try {
                d(g)
            } catch (x) {}
            b = [g];
            f.b.push(3);
            f.g[3] = b;
            d = _.q;
            b = [];
            g = null;
            do {
                var h = d;
                if (Ab(h)) {
                    var m = h.location.href;
                    g = h.document && h.document.referrer || null
                } else m = g, g = null;
                b.push(new Vb(m || ""));
                try {
                    d = h.parent
                } catch (x) {
                    d = null
                }
            } while (d && h != d);
            m = 0;
            for (var l = b.length - 1; m <= l; ++m) b[m].depth = l - m;
            h = _.q;
            if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                for (l = 1; l < b.length; ++l) {
                    var n = b[l];
                    n.url || (n.url = h.location.ancestorOrigins[l - 1] || "", n.Na = !0)
                }
            var r = new Vb(_.q.location.href, !1);
            h = null;
            var u = b.length - 1;
            for (n = u; 0 <= n; --n) {
                var J = b[n];
                !h && je.test(J.url) && (h = J);
                if (J.url && !J.Na) {
                    r = J;
                    break
                }
            }
            J = null;
            var D = b.length && b[u].url;
            0 != r.depth && D && (J = b[u]);
            var w = new Ub(r, J);
            w.g && $b(f, 4, "top", w.g.url || "");
            $b(f, 5, "url", w.b.url || "");
            gc(this.v, e, f, this.A, c)
        } catch (x) {
            try {
                gc(this.v, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: qc(x),
                    url: w && w.b.url
                }, this.A, c)
            } catch (kb) {}
        }
        return !0
    };
    var dc, sc, me;
    if (he && !Ab(ie)) {
        var ne = "." + _.M.domain;
        try {
            for (; 2 < ne.split(".").length && !Ab(ie);) _.M.domain = ne = ne.substr(ne.indexOf(".") + 1), ie = window.parent
        } catch (a) {}
        Ab(ie) || (ie = window)
    }
    var ec = ie,
        oc = new lc;
    (function() {
        dc = new cc;
        "number" !== typeof ec.google_srt && (ec.google_srt = Math.random());
        fc();
        sc = new _.pc;
        sc.g = function(b) {
            var c = _.L.jerExpIds;
            if (_.sa(c) && 0 !== c.length) {
                var d = b.eid;
                if (d) {
                    c = fa(d.split(",")).concat(fa(c));
                    d = {};
                    for (var e = 0, f = 0; f < c.length;) {
                        var g = c[f++];
                        var h = g;
                        h = _.ua(h) ? "o" + (h[Kd] || (h[Kd] = ++Ld)) : (typeof h).charAt(0) + h;
                        Object.prototype.hasOwnProperty.call(d, h) || (d[h] = !0, c[e++] = g)
                    }
                    c.length = e;
                    b.eid = c.join(",")
                } else b.eid = c.join(",")
            }
            me && (b.jc = me);
            (c = _.L.jerUserAgent) && (b.useragent = c)
        };
        sc.A = !0;
        "complete" == ec.document.readyState ? vc() : oc.b && _.K(ec, "load", function() {
            vc()
        });
        var a = _.M.currentScript;
        me = a ? a.dataset.jc : ""
    })();
    Fc.prototype.S = function(a, b) {
        this.D = !0;
        var c = !1;
        b.target && (c = _.Pb(b.target, b.button, b.ctrlKey, b.shiftKey, b.metaKey, b.altKey, new _.sb(b.x, b.y)));
        !a.href || c || Lc(this, a, b) || (Ic(this, a), _.L.top.location = a.href)
    };
    Fc.prototype.R = function(a, b, c, d) {
        if (this.D) this.D = !1;
        else {
            d || (d = _.L.event);
            this.g[c][b].forEach(function(f) {
                f(d)
            });
            if (a.href) {
                var e = Gc(this, a, d.type);
                e && (a.href = e)
            }
            "click" == c && (Jc(this, a, b, d), (d.preventDefault ? d.defaultPrevented : !1 === d.returnValue) || Mc(this, a, d))
        }
    };
    var fd;
    Wc.prototype.get = function() {
        if (0 < this.g) {
            this.g--;
            var a = this.b;
            this.b = a.next;
            a.next = null
        } else a = this.l();
        return a
    };
    var gd = new Wc(function() {
        return new $c
    }, function(a) {
        a.reset()
    });
    Xc.prototype.add = function(a, b) {
        var c = gd.get();
        c.set(a, b);
        this.g ? this.g.next = c : this.b = c;
        this.g = c
    };
    $c.prototype.set = function(a, b) {
        this.b = a;
        this.g = b;
        this.next = null
    };
    $c.prototype.reset = function() {
        this.next = this.g = this.b = null
    };
    var ad, cd = !1,
        Yc = new Xc;
    _.P.prototype.v = !1;
    _.P.prototype.Ea = ba(4);
    _.P.prototype.L = ba(6);
    _.z(_.hd, _.P);
    _.hd.prototype.subscribe = function(a, b, c) {
        var d = this.g[a];
        d || (d = this.g[a] = []);
        var e = this.C;
        this.b[e] = a;
        this.b[e + 1] = b;
        this.b[e + 2] = c;
        this.C = e + 3;
        d.push(e);
        return e
    };
    _.hd.prototype.G = function(a) {
        var b = this.b[a];
        b && (b = this.g[b], 0 != this.B ? (this.A.push(a), this.b[a + 1] = _.qa) : (b && _.ya(b, a), delete this.b[a], delete this.b[a + 1], delete this.b[a + 2]))
    };
    _.hd.prototype.D = function(a, b) {
        var c = this.g[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.F)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    id(this.b[g + 1], this.b[g + 2], d)
                } else {
                    this.B++;
                    try {
                        for (e = 0, f = c.length; e < f; e++) g = c[e], this.b[g + 1].apply(this.b[g + 2], d)
                    } finally {
                        if (this.B--, 0 < this.A.length && 0 == this.B)
                            for (; c = this.A.pop();) this.G(c)
                    }
                }
        }
    };
    _.hd.prototype.L = ba(5);
    _.k = kd.prototype;
    _.k.Qa = function(a, b) {
        b = (a = _.fb(this.b)) && b ? b[a] : !1;
        this.l.C = !!b;
        this.H(0, "app_installed", !b);
        this.H(0, "rh-ani", b)
    };
    _.k.navigationAdPieces = function() {
        return this.v
    };
    _.k.Ba = function() {
        return !0
    };
    _.k.has = function(a) {
        return (a = this.g[a]) && 0 < a.length
    };
    _.k.listen = function(a, b, c) {
        var d = this.g[a];
        if (d) {
            var e = this.l;
            c = _.y(c, a, this);
            var f = ("click" == b || "mousedown" == b) && e.K[a];
            e.g[b] || (e.g[b] = {});
            e.g[b][a] || (e.g[b][a] = []);
            e.g[b][a].push(c);
            if (!f)
                for (a = 0; a < d.length; a++) _.K(d[a], b, c)
        }
    };
    _.k.H = function(a, b, c) {
        if (b) {
            a = this.getElementsByAdPiece(a);
            for (var d = 0; d < a.length; d++) c ? _.Rc(a[d], b) : _.Pc(a[d], b)
        }
    };
    _.k.getElementsByAdPiece = function(a) {
        return this.g[a] ? this.g[a] : []
    };
    _.k.creativeConversionUrl = function() {
        return _.G(this.b, 6, "")
    };
    _.k.redirectUrl = function() {
        return _.G(this.b, 8, "")
    };
    _.k.getIndex = function() {
        return _.G(this.b, 2, 0)
    };
    _.k.listenOnObject = function(a, b) {
        this.B.subscribe(a, b)
    };
    _.k.fireOnObject = function(a, b) {
        this.B.D(a, b)
    };
    _.k = nd.prototype;
    _.k.forEachAd = function(a) {
        (0, _.uc)(this.l, a)
    };
    _.k.Da = function(a) {
        this.l.push(a)
    };
    _.k.bb = function(a) {
        if (a = _.N(1, a)) this.A = a;
        if (0 == this.l.length) _.q.css = null;
        else {
            for (a = 0; a < this.v.length; ++a) this.v[a]();
            this.B = !0
        }
    };
    _.k.listenOnObject = function(a, b) {
        this.C.subscribe(a, b)
    };
    _.k.fireOnObject = function(a, b) {
        this.C.D(a, b)
    };
    _.k.registerFinalizeCallback = function(a) {
        this.B ? a() : this.v.push(a)
    };
    _.k.getSerializedAdSlotData = function() {
        return _.cb(this.b)
    };
    _.k.getAdsLength = function() {
        return this.l.length
    };
    _.k.getAd = function(a) {
        return 0 <= a && a < this.l.length && this.l[a].getIndex() == a ? this.l[a] : null
    };
    _.k.getContainer = function() {
        return this.A
    };
    _.k.openSystemBrowser = function(a) {
        return this.g ? (this.g.openSystemBrowser(a, {
            useFirstPackage: !0,
            useRunningProcess: !0
        }), !0) : !1
    };
    _.k.openAttribution = function(a) {
        return this.g ? (this.g.openSystemBrowser(a, {
            useFirstPackage: !0,
            useRunningProcess: !0,
            useCustomTabs: !0
        }), !0) : !1
    };
    ka(rd, kd);
    rd.prototype.Ba = function(a) {
        return md(this, a) || 4 === a
    };
    rd.prototype.C = function(a, b) {
        return this.Ba(b) ? a : ""
    };
    var qd = [1, 2, 3, 4, 8, 6, 40, 33, 36, 37, 38, 9];
    var vd = "UNKNOWN",
        wd = "UNKNOWN",
        zd = null,
        Q = {},
        sd = (Q[1] = "title-link", Q[2] = "url-link", Q[3] = "body-link", Q[4] = "button-link", Q[8] = "favicon-link", Q[6] = "image-link", Q[26] = "price", Q[23] = "reviews", Q[43] = "rating-stars", Q[44] = "reviews-count", Q[24] = "app-store", Q[25] = "promo-headline", Q[33] = "app-icon", Q[16] = "image-gallery", Q[40] = "image-gallery-image-link", Q[36] = "logo-link", Q[37] = "advertiser-link", Q[38] = "call-to-action-link", Q[39] = "video", Q[42] = "logo", Q[50] = "badge-box", Q[9] = "ad-background", Q);
    ka(Bd, kd);
    ka(Cd, kd);
    ka(Ed, kd);
    Ed.prototype.Ba = function(a) {
        return md(this, a) || 4 == a
    };
    var R = {},
        oe = (R[1] = "rhtitle", R[45] = "rhtitleline1", R[46] = "rhtitleline2", R[48] = "rhlongtitle", R[3] = "rhbody", R[2] = "rhurl", R[4] = "rhbutton", R[8] = "rhfavicon", R[14] = "rhaddress", R[6] = "rhimage", R[34] = "rhimagetemplate", R[49] = "rh-scrollflow", R[16] = "rhimagegallery", R[47] = "rhreviewgallery", R[29] = "rhviewimagegallery", R[30] = "rhcloseimagegalleryview", R[31] = "rhtrydemobutton", R[32] = "rhclosetrydemoview", R[39] = "rhvideo", R[9] = "rhbackground", R[13] = "rh-icore-empty", R[5] = "rhsitelink", R[7] = "rhradlink", R[17] = "rh-multiframe", R[18] = "rh-box-breadcrumbs", R[23] = "rhstarratings", R[24] = "rhstoreicon", R[25] = "rhpromotext", R[26] = "rhprice", R[27] = "abgc", R[28] = "cbc", R[35] = "rhdemocountdowntimer", R[36] = "rhlogo", R[1001] = "rhoverlap-imagegallery", R[1002] = "rhoverlap-trydemo", R),
        Dd = [1, 45, 46, 48, 2, 4, 5, 7, 8, 3, 9, 6, 14, 15, 34, 26, 24, 36];
    nd.prototype.forEachAd = nd.prototype.forEachAd;
    nd.prototype.addAd = nd.prototype.Da;
    nd.prototype.finalize = nd.prototype.bb;
    _.t("buildAdSlot", od, void 0);
    _.t("buildGlaurungAds", function(a, b, c) {
        var d = (new Date).getTime(),
            e = 1,
            f = !1;
        zd = null;
        try {
            var g = a.b;
            f = _.H(g, 13);
            vd = _.G(g, 8, "");
            wd = _.G(g, 7, "");
            e = Ad(a, b, c)
        } catch (h) {
            f && (zd = h), e = 1
        }
        a = {};
        xd("bridge", (a.r = e, a.d = (new Date).getTime() - d, a));
        return e
    }, void 0);
    _.t("glaurungError", function() {
        return zd
    }, void 0);
    _.t("glaurungBridge.log", xd, void 0);
    _.t("glaurungBridge.getAdPieceClassName", function(a) {
        return sd[a]
    }, void 0);
    _.t("buildImageAd", function(a, b) {
        if (0 > b || b >= rb(a.b).length) a = null;
        else {
            a = rb(a.b)[b];
            b = _.N(1, "google_image_div");
            var c = _.N(1, "aw0");
            a = b && c ? new Bd(a, c, b) : null
        }
        return a
    }, void 0);
    _.t("buildRichmediaAd", function(a, b) {
        return 0 > b || b >= rb(a.b).length ? null : new Cd(rb(a.b)[b], _.M.body)
    }, void 0);
    _.t("buildTextAd", function(a, b) {
        var c = a.b;
        if (!(0 > b || b >= rb(c).length)) {
            if (0 > b || b >= rb(a.b).length) var d = null;
            else {
                d = rb(a.b)[b];
                var e = _.N(1, "taw" + b);
                if (e) {
                    var f = {
                            0: [e]
                        },
                        g;
                    for (g in td) {
                        var h = td[g],
                            m = oe[h];
                        m && (f[h] = _.za(_.Qb(2, m, e)))
                    }
                    d = new Ed(f, e, d)
                } else d = null
            }
            d && (_.L.registerAd && _.L.registerAd(d, "taw" + b), a.Da(d), _.H(rb(c)[b], 11) && _.L.initAppPromo && _.L.initAppPromo(d, a))
        }
    }, void 0);
})(window.hydra = window.hydra || {});