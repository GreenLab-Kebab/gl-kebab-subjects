window.scriptsLoaded = window.scriptsLoaded || {};
window.scriptProcessStart = window.scriptProcessStart || {};
window.scriptProcessStart['boot.worldwide.1.narrow.js'] = (new Date()).getTime();;
_a.b.M = function() {
    _a.b.r = +new Date
};
_a.b.d = function(n, t) {
    n && n.q(t)
};
_a.b.J = function() {
    _a.b.n = _a.b.o()
};
_a.b.m = function(n) {
    n in _a.b.l || (_a.b.l[n] = _a.b.o())
};
_a.b.A = function(n, t) {
    _a.b.B.test(t) && t || _j.e.c(n, "Invalid CTQ name('{0}')", t)
};
_a.b.s = function(n, t, i, r, u, f, e, o, s, h, c, l, a) {
    for (var w = new _a.jm(n, t, i, r, u, f, s, h, c, e, _a.b.n, o, l, a), y = 0; y < _a.b.h.length; y++) {
        var b = _a.b.h[y];
        b(w)
    }
    if (_a.bh.d() && _a.bh.c) {
        var v = null;
        var p;
        w.c(p = {
            val: v
        }), v = p.val;
        console.info("\r\n" + v + "\r\n\r\n")
    }
};
_a.b.z = function(n) {
    if (_a.b.j && n.w() < _a.b.j.w()) {
        _a.b.k = _j.m.a().b(_a.b.k);
        _a.b.j = null
    }
    if (!_a.b.k) {
        var t = Math.max(0, n.w() - _a.L.b());
        _a.b.j = n;
        _a.b.k = _j.m.a().a(_a.a.R, "CTQTimeoutsTask", _a.b.E, t)
    }
};
_a.b.E = function() {
    _a.b.k = null;
    _a.b.j = null;
    var t = null;
    var f = _a.L.b();
    var u = _a.b.i;
    for (var r in u) {
        var e = {
            key: r,
            value: u[r]
        };
        var n = e.value;
        if (f >= n.w() - 15e3) {
            var i = "CTQTimeout";
            n.s.l |= 1024;
            if (n.E) {
                n.s.l |= 2048;
                i += "_WATSON_" + n.F;
                n.p = n.E
            }
            n.n = i;
            _a.p.g(n);
            _a.b.a(n)
        } else(!t || n.w() < t.w()) && (t = n)
    }
    t && _j.m.a().s && _a.b.z(t)
};
_a.b.D = function(n) {
    _a.b.h && (Array.contains(_a.b.h, n) || Array.add(_a.b.h, n))
};
_a.b.H = function(n) {
    _a.b.h && Array.contains(_a.b.h, n) && Array.remove(_a.b.h, n)
};
_a.b.N = function(n) {
    var t = null;
    _j.C.a(n.s.k) ? t = "UndefinedStartTime" : _j.C.a(n.s.i) ? t = "UndefinedEndTime" : n.s.k <= 0 ? t = "InvalidStartTime" : n.s.i <= 0 ? t = "InvalidEndTime" : n.s.i < n.s.k && (t = "NegativeLatency");
    return t
};
_a.b.o = function() {
    return _a.L.c() ? Math.floor(window.performance.now()) : _a.be.c() ? +new Date - window.performance.timing.navigationStart : window.scriptStart ? +new Date - window.scriptStart : 0
};
_a.b.L = function(n, t, i) {
    if (n in _a.b.p) _a.b.d(t, _a.b.w);
    else {
        _a.b.d(t, _a.b.u);
        _a.b.p[n] = 1;
        if (i && n in _a.b.l) {
            _a.b.d(t, _a.b.v);
            t.H = t.C - _a.b.l[n]
        }
    }
};
_a.b.K = function(n) {
    n.x = _a.b.x();
    n.x > 0 && (n.J = n.x / window.performance.memory.jsHeapSizeLimit)
};
_a.b.x = function() {
    return window.performance && window.performance.memory ? window.performance.memory.usedJSHeapSize || 0 : 0
};
_a.y = function(n) {
    this.a = n
};
_a.y.prototype = {
    a: null
};
_a.K = function() {
    this.f = _a.b.t
};
_a.K.prototype = {
    a: !1,
    b: !1,
    d: !1,
    e: !1,
    c: !1
};
_a.p = function() {};
_a.p.b = function(n, t, i, r, u) {
    var f = _a.b.b(n, t, i, r);
    if (f) {
        f.z = u;
        _a.p.f(f)
    }
    return f
};
_a.p.a = function(n) {
    var t;
    t = _a.p.h(n);
    t && _a.b.a(t);
    return t
};
_a.p.c = function(n) {
    return n ? _a.p.d[n] : null
};
_a.p.g = function(n) {
    if (n) {
        var t = _a.p.d[n.A()];
        t && t.s.m === n.s.m && delete _a.p.d[n.A()]
    }
};
_a.p.f = function(n) {
    var t = _a.p.d[n.A()];
    if (t) {
        t.s.l |= 32;
        n.s.l |= 32;
        _a.b.a(n)
    } else _a.p.d[n.A()] = n
};
_a.p.h = function(n) {
    var t;
    if (n) {
        t = _a.p.d[n];
        if (!t) {
            _a.p.e(n, 64);
            return null
        }
        delete _a.p.d[n]
    } else {
        _j.e.c(_a.a.cQ, "Invalid PerfTrace end detected");
        _a.p.e("NoInfo-NodeType", 512);
        return null
    }
    return t
};
_a.p.e = function(n, t) {
    var i = new _a.bA(_a.a.R, 517, n, 2);
    i.l |= t;
    i.t();
    _a.L.a().i(i)
};
_a.bt = function(n, t, i) {
    this.a = {};
    _a.c.b(t, "id");
    this.k = n;
    this.l = t;
    this.j = i || _a.d.get_utcNow()
};
_a.bt.prototype = {
    k: 0,
    l: null,
    j: null,
    o: function(n) {
        var t = new Sys.StringBuilder;
        t.append(_a.d.p(this.j) + "," + this.l + ",");
        var u = this.a;
        for (var r in u) {
            var i = {
                key: r,
                value: u[r]
            };
            var f = i.value ? i.value.toString() : "";
            t.append(i.key + "=" + _j.h.f(f, " ") + ";")
        }
        n && t.append("<BR>");
        return t.toString()
    }
};
_a.dM = function() {
    this.d = new _j.q;
    _a.L.a().j(this);
    this.e = 0
};
_a.dM.prototype = {
    f: 0,
    e: 0,
    g: function(n) {
        n.r(this.d.d)
    },
    c: function(n) {
        if (n.h())
            if (this.d.d.length >= 200) {
                var t = this.d.d[0];
                this.d.f();
                this.d.c(t);
                _a.bA.a(_a.a.R, 517, "HotTracesDropped", 2, t.a(), _a.L.b())
            } else this.d.c(n);
        else {
            this.d.f();
            this.d.c(n);
            this.f = n.a();
            this.e = n.b()
        }
    },
    a: function(n) {
        n.b() < this.e && this.c(n)
    },
    b: function(n) {
        n.b() < this.e && (this.e = n.b());
        this.c(n)
    }
};
_a.bg = function(n, t) {
    this.m = n;
    this.k = t;
    this.i = window.getClientId() + "_" + _a.cB.b().a;
    this.e = new _a.bA(this.m, 518, this.k, 1);
    this.s = this.d = this.e.k;
    this.l = this.j = this.e.m;
    this.g = new _j.q;
    _a.bg.i.g(this)
};
_a.bg.j = function(n) {
    _a.bg.k(n)
};
_a.bg.m = function(n) {
    _a.bg.n(n)
};
_a.bg.d = function(n, t, i, r) {
    if (_j.n.d < 1) return null;
    var u = new _a.bg(n, t);
    var f = u.i;
    _a.bg.e[f] = u;
    u.n = i;
    _a.bg.h[f] = _j.m.a().a(_a.a.R, "RunawayPerfTrace", function() {
        u.h = 1024;
        _a.bg.b(f)
    }, r ? r : 12e4);
    _a.L.a().j(u);
    return f
};
_a.bg.b = function(n, t) {
    var i = _a.bg.e[n];
    if (i) {
        delete _a.bg.e[n];
        i.e.t();
        if (!(_j.n.d < 1)) {
            if (!_a.bg.f) {
                _j.m.a().c(_a.a.cQ, "TrackCaptureCompleted", function() {
                    i.q(t)
                });
                return
            }
            _a.bg.f(_a.d.x(i.d), _a.d.x(i.e.i), !1, function(n) {
                var r = "MergePALNodes-";
                if (n) {
                    r += "NodeCount-" + n.length;
                    i.r(n)
                } else r += "NotSupported";
                i.b(_a.bA.b(_a.a.R, 517, r, 2, _a.k.a(), _a.k.a()));
                i.q(t)
            })
        }
    }
};
_a.bg.k = function(n) {
    _a.bg.a && (Array.contains(_a.bg.a, n) || Array.add(_a.bg.a, n))
};
_a.bg.n = function(n) {
    if (n) {
        var t = Array.indexOf(_a.bg.a, n);
        t >= 0 && Array.removeAt(_a.bg.a, t)
    }
};
_a.bg.c = function(n, t, i, r) {
    var u = n.a();
    var f = n.d();
    var s = n.j();
    var o = f - u;
    var e = n.g();
    if (!f || f > i) {
        f = i;
        s = 0;
        o = i - u;
        e |= 1
    }
    if (u < t) {
        u = t;
        s = 0;
        o = f - u;
        e |= 1
    }
    return "\r\n" + u + "," + n.f().a() + "," + n.e() + "," + n.h() + "," + n.c() + "," + (n.b() - r) + "," + (u - t) + "," + (f - t) + "," + s + "," + o + "," + e
};
_a.bg.prototype = {
    g: null,
    m: null,
    k: null,
    i: null,
    s: 0,
    d: 0,
    f: 0,
    h: 0,
    o: 3e3,
    l: 0,
    j: 0,
    e: null,
    n: null,
    c: function(n) {
        this.g.c(n);
        this.t()
    },
    a: function(n) {
        if (n.b() < this.l) {
            var t = n.g();
            if (t & 8192) {
                n = _a.bA.a(n.f(), n.h(), n.e(), n.c(), n.a(), _a.L.b());
                n.l |= t
            }
            n.b() < this.j && (this.j = n.b());
            this.c(n)
        }
    },
    b: function(n) {
        this.u(n);
        this.c(n)
    },
    r: function(n) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t];
            this.u(i);
            this.g.c(i)
        }
        this.t()
    },
    u: function(n) {
        n.a() < this.d && (this.d = n.a());
        n.b() < this.l && (this.l = n.b())
    },
    v: function() {
        var o = this.g.d.length;
        this.h && (this.e.l |= this.h);
        var e = _a.bA.a(this.m, 517, this.k + " (Adjusted)", 1, this.d, this.f);
        var i = _a.bg.c(e, this.d, this.f, e.m);
        i += _a.bg.c(this.e, this.d, this.f, this.e.m - 1);
        if (!o) return i;
        for (var f = this.j - 2, u = null, t = null, s = _j.n.d >= 4, r = 0; r < o; r++) {
            var n = this.g.d[r];
            if (!(n.a() > this.f))
                if (n.c() <= 2 || n.d() - n.a() > 1 || s) {
                    if (t) {
                        i += this.p(t, u, f);
                        t = null
                    }
                    i += _a.bg.c(n, this.d, this.f, f)
                } else {
                    t || (t = new _a.bg.l(n.e(), n.a(), n.b(), 3));
                    u = n;
                    t.r(n)
                }
        }
        t && (i += this.p(t, u, f));
        return i
    },
    p: function(n, t, i) {
        return n.k - n.l > 0 ? n.i > 1 ? _a.bg.c(n, this.d, this.f, i) : _a.bg.c(t, this.d, this.f, i) : ""
    },
    q: function(n) {
        _j.m.a().b(_a.bg.h[this.i]);
        delete _a.bg.h[this.i];
        _a.L.a().m(this);
        this.f = _a.L.b();
        var i = this.v();
        _a.bh.d() && _a.bh.c && !_a.bg.g && console.info("\r\n" + i + "\r\n\r\n");
        for (var u = new _a.jn(this.n, this.k, this.f - this.d, this.h, i), t = 0; t < _a.bg.a.length; t++) {
            var r = _a.bg.a[t];
            r(u)
        }
        n && _a.g.c().a(_a.br, new _a.br)
    },
    t: function() {
        if (this.g.d.length >= this.o && !this.e.i) {
            _a.L.a().m(this);
            this.h = 1;
            _a.bg.b(this.i, !0)
        }
    }
};
_a.bg.l = function(n, t, i, r) {
    this.m = n;
    this.l = t;
    this.q = i;
    this.p = r
};
_a.bg.l.prototype = {
    m: null,
    l: 0,
    q: 0,
    p: 0,
    i: 0,
    n: 0,
    k: 0,
    o: 0,
    f: function() {
        return _a.a.R
    },
    e: function() {
        return this.m + " (+" + this.i + " other entries)"
    },
    h: function() {
        return 517
    },
    c: function() {
        return this.p
    },
    b: function() {
        return this.q
    },
    g: function() {
        return this.n
    },
    a: function() {
        return this.l
    },
    d: function() {
        return this.k
    },
    j: function() {
        return this.o
    },
    r: function(n) {
        this.i = this.i + 1;
        this.k = n.d();
        this.o += n.j();
        this.n |= n.g()
    }
};
_a.bA = function(n, t, i, r) {
    this.s = n;
    this.o = t;
    this.p = i;
    this.r = r;
    this.k = _a.L.b();
    this.q = t >= 512;
    this.m = _a.bA.c++;
    if (!i) {
        this.p = "NullNodeName-" + this.o;
        this.l |= 4096
    }
};
_a.bA.b = function(n, t, i, r, u, f) {
    if (_a.L.c()) {
        u = u - window.performance.timing.navigationStart;
        f = f - window.performance.timing.navigationStart
    }
    return _a.bA.a(n, t, i, r, u, f)
};
_a.bA.a = function(n, t, i, r, u, f) {
    var e = new _a.bA(n, t, i, r);
    e.k = u;
    if (f) {
        e.i = f;
        e.q || (e.n = f - u)
    }
    return e
};
_a.bA.d = function(n) {
    _j.s.a(n, "nodeData");
    var r = n.N;
    var i = n.ST;
    var f = n.IT;
    var u = n.ET;
    var t = new _a.bA(_a.a.j, 517, r, 2);
    t.k = i;
    t.i = i + f;
    t.n = u;
    return t
};
_a.bA.prototype = {
    s: null,
    o: 0,
    r: 0,
    q: !1,
    p: null,
    k: 0,
    i: 0,
    m: 0,
    l: 0,
    n: 0,
    f: function() {
        return this.s
    },
    e: function() {
        return this.p
    },
    h: function() {
        return this.o
    },
    c: function() {
        return this.r
    },
    b: function() {
        return this.m
    },
    g: function() {
        return this.l
    },
    a: function() {
        return this.k
    },
    d: function() {
        return this.i
    },
    j: function() {
        return this.n
    },
    t: function() {
        this.i ? this.l |= 8192 : this.i = _a.L.b()
    },
    u: function(n) {
        if (this.i) this.l |= 8192;
        else {
            this.i = _a.L.b();
            var t = this.i - this.k;
            this.n += t;
            this.n < 0 && (this.l |= 128);
            n && (n.n -= t)
        }
    }
};
_a.dN = function() {
    this.c = []
};
_a.dN.prototype = {
    d: 3e5,
    b: function(n, t, i, r) {
        if (!t && this.c.length > 0) {
            var e = this.c;
            var o = _a.L.b() - e[0].a();
            if (o >= this.d)
                while (this.c.length > 0) {
                    var f = e[this.c.length - 1];
                    f.l |= 1;
                    this.a(f)
                } else t = 2
        }
        var u = new _a.bA(n, t, i, r);
        if (!u.q) {
            t && !this.c.length && (u.l |= 16);
            this.c.push(u)
        }
        return u
    },
    a: function(n) {
        if (Object.getType(n) !== _a.bA) throw Error.argumentType("entry", Object.getType(n), _a.bA);
        var t = n;
        if (t.q) {
            t.t();
            return
        }
        for (var u = !1; this.c.length > 0;) {
            var i = this.c.pop();
            if (i.m < t.m) {
                this.c.push(i);
                break
            }
            var r = null;
            if (this.c.length > 0) {
                var f = this.c;
                r = f[this.c.length - 1]
            }
            i.u(r);
            if (i.m === t.m) {
                u = !0;
                break
            }
            i.l |= 4
        }
        if (!u) {
            t.u(null);
            t.l |= 2;
            _a.L.a().i(t)
        }
    }
};
_a.iN = function(n, t) {
    _a.iN.initializeBase(this, [1, "PerfNavTime"]);
    window.navBackEndServer && (this.a.NAVBE = window.navBackEndServer);
    window.navFrontEndServer && (this.a.NAVFE = window.navFrontEndServer);
    this.a.URI = window.location.href.split("#")[0];
    if (_a.be.c()) {
        if (n)
            for (var f = 0; f < n.d.length; f++) {
                var u = n.d[f];
                var e = null;
                var o, h;
                (h = this.b(u.p, o = {
                    val: e
                }), e = o.val, h) && (this.a[e] = u.i - u.k)
            }
        this.a.RC = window.performance.navigation.redirectCount;
        this.a.NT = window.performance.navigation.type
    }
    if (t) {
        this.a.AType = _a.k.q ? _a.k.b + "N" : _a.k.b;
        _a.k.K || _j.h.a(_a.k.U) || _a.k.b === "ALT3" && _a.k.bc || (this.a.RR = _a.k.U);
        _a.k.b === "ALT3" && _a.k.K++;
        this.a.ALT3C = _a.k.K;
        this.a.AT = _a.k.m;
        this.a.HRU = _a.k.l;
        this.a.HSSDT = _a.k.y;
        this.a.HLIAT = _a.k.x;
        this.a.IBA = _a.k.q;
        _a.k.B && (this.a.LMEM = _a.k.B);
        this.a.RTA = _a.k.T;
        this.a.RSA = _a.k.S;
        this.a.SSSDS = _a.fq.toString(_a.k.c);
        this.a.SNS = _a.fr.toString(_a.k.u);
        this.a.LVWT = _a.k.h && _a.k.k ? _a.k.h - _a.k.k : 0;
        this.a.AQWT = _a.k.bf;
        this.a.RRC = _a.k.V;
        this.a.TRT = _a.k.bd;
        this.a.TST = _a.k.be * 1e3;
        this.a.ER = _a.fp.toString(_a.k.w);
        var c = t;
        for (var s in c) {
            var l = {
                key: s,
                value: c[s]
            };
            var r = l.value;
            this.a[r.a + "-L"] = r.c;
            this.a[r.a + "-C"] = r.b
        }
        var i = _a.k.l ? _a.k.f : _a.k.e;
        if (_a.k.b !== "ALT3") {
            this.a.B1ET = _a.k.L - i;
            this.a.OWST = _a.k.Q - i;
            if (_a.k.b !== "ALT") {
                this.a.PUCT = _a.k.R - i;
                this.a.CLRT = _a.k.M - i;
                this.a.UIRT = _a.k.X - i;
                this.a.DVRT = _a.k.N - i
            }
            _a.k.v && (this.a.CLIT = _a.k.v - i);
            _a.k.z && (this.a.IMDC = _a.k.z - i);
            _a.k.C && (this.a.SSSDT = _a.k.C - i);
            _a.k.p && (this.a.SINT = _a.k.p - i)
        } else i = _a.k.d;
        _a.k.n && (this.a.SSDT = _a.k.n - i);
        _a.k.A && (this.a.LIAT = i - _a.k.A);
        _a.k.H && (this.a.SMST = _a.k.H - i);
        _a.k.G && (this.a.SMET = _a.k.G - i);
        _a.k.h && (this.a.OFIT = _a.k.h - i);
        _a.k.s && (this.a.LVRT = _a.k.s - i);
        this.a.WID = _a.k.Y;
        this.a.TT = _a.k.W;
        this.a.OE = _a.k.P;
        this.a.LVR = _a.k.bh;
        this.a.PFS = _a.k.bv();
        this.a["SU-C"] = _a.k.r;
        this.a["SSSDR-C"] = _a.k.D;
        this.a.LAView = _a.k.bg;
        if (_a.k.I) {
            this.a.SType = _a.k.I;
            this.a.SS = _a.k.bb
        }
        _a.k.t && (this.a.MC = _a.k.t)
    }
};
_a.iN.prototype = {
    b: function(n, t) {
        t.val = null;
        switch (n) {
            case "NavAPI_TotalTime":
                t.val = "NV";
                break;
            case "NavAPI_Redirect":
                t.val = "RT";
                break;
            case "NavAPI_Fetch":
                t.val = "FT";
                break;
            case "NavAPI_DomainLookup":
                t.val = "DN";
                break;
            case "NavAPI_Connect":
                t.val = "CT";
                break;
            case "NavAPI_SecureConnect":
                t.val = "ST";
                break;
            case "NavAPI_Request":
                t.val = "RQ";
                break;
            case "NavAPI_Response":
                t.val = "RS";
                break;
            case "NavAPI_UnloadEvent":
                t.val = "UL";
                break;
            case "NavAPI_DomLoad":
                t.val = "DL";
                break;
            case "NavAPI_DomPreInteractive":
                t.val = "D1";
                break;
            case "NavAPI_DomPostInteractive":
                t.val = "D2";
                break;
            case "NavAPI_DomContentLoadEvent":
                t.val = "DE";
                break;
            case "NavAPI_WindowsLoadEvent":
                t.val = "PL";
                break;
            default:
                break
        }
        return !_j.h.a(t.val)
    }
};
_a.iO = function(n, t) {
    _a.iO.initializeBase(this, [1, "Framework.TaskRunner.TaskRunnerFailureDatapoint"]);
    this.a.s = n;
    this.a.f = t
};
_a.lh = function() {};
_a.fY = function() {};
_a.fY.prototype = {
    mailData: 0,
    calendarData: 1,
    groupData: 2,
    optionData: 3,
    composeSlab: 4,
    calendarSlab: 5,
    groupSlab: 6,
    unknown: 7
};
_a.fY.registerEnum("_a.fY", !1);
_a.lg = function() {};
_a.lg.registerInterface("_a.lg");
_a.cV = function() {};
_a.cV.registerInterface("_a.cV");
_a.lD = function() {};
_a.lD.registerInterface("_a.lD");
_a.gk = function() {};
_a.gk.prototype = {
    unspecified: 0,
    genericReadingMessage: 1,
    genericSendingMessage: 2,
    genericSavingMessage: 3,
    genericLoadingDraft: 4,
    readingSignedMessage: 11,
    readingEncryptedMessage: 12,
    signingMessage: 13,
    encryptingMessage: 14,
    encodingMessage: 15
};
_a.gk.registerEnum("_a.gk", !1);
_a.bm = function() {};
_a.bm.a = function(n, t, i) {
    if (!n) return t ? t.toLowerCase() : "en-us";
    if (!i) return n.toLowerCase();
    var r = i.a().d();
    if (_a.bm.b(r.SupportedMarkets, n)) return n.toLowerCase();
    var e = n.split("-")[1].toUpperCase();
    if (e === "\x00\x00") return t.toLowerCase();
    if (r.CountryDefaultMapMarkets && r.CountryDefaultMapMarkets.length > 0)
        for (var o = r.CountryDefaultMapMarkets, s = o.length, u = 0; u < s; ++u) {
            var f = o[u];
            if (f.startsWith(e)) return f.split(":")[1].toLowerCase()
        }
    return n.toLowerCase()
};
_a.bm.b = function(n, t) {
    return n && t ? Array.contains(n, t.toUpperCase()) : !0
};
_a.bm.c = function(n, t, i, r) {
    if (!n || n.a().fd().Enabled || r) return !1;
    var u = n.a();
    if (i === "Mouse") {
        var h = [u.ff().Enabled, u.fj().Enabled, u.fh().Enabled, u.fi().Enabled, u.fk().Enabled, u.fm().Enabled, u.eZ().Enabled, u.fa().Enabled, u.fb().Enabled, u.fc().Enabled];
        var s = [u.cH().Enabled, u.cI().Enabled, u.cF().Enabled, u.cG().Enabled, u.cL().Enabled, u.cK().Enabled, u.cB().Enabled, u.cA().Enabled, u.cD().Enabled, u.cC().Enabled];
        var l = [u.cH().SupportedMarkets, u.cI().SupportedMarkets, u.cF().SupportedMarkets, u.cG().SupportedMarkets, u.cL().SupportedMarkets, u.cK().SupportedMarkets, u.cB().SupportedMarkets, u.cA().SupportedMarkets, u.cD().SupportedMarkets, u.cC().SupportedMarkets];
        if (Array.contains(h, !0)) return !0;
        for (var f = 0; f < s.length; f++)
            if (_a.bm.e(s[f], l[f], t)) return !0
    }
    if (i === "TouchNarrow")
        for (var o = [u.dI().Enabled, u.dA().Enabled, u.dB().Enabled, u.dF().Enabled, u.dG().Enabled], c = [u.dI().SupportedMarkets, u.dA().SupportedMarkets, u.dB().SupportedMarkets, u.dF().SupportedMarkets, u.dG().SupportedMarkets], e = 0; e < o.length; e++)
            if (_a.bm.e(o[e], c[e], t)) return !0;
    return !1
};
_a.bm.f = function(n, t, i, r) {
    if (!n || n.a().fd().Enabled || r) return !1;
    var u = n.a();
    if (i === "Mouse") {
        var o = [u.fg().Enabled, u.fl().Enabled, u.fo().Enabled];
        var e = [u.cE().Enabled, u.cJ().Enabled, u.cN().Enabled, u.cO().Enabled];
        var s = [u.cE().SupportedMarkets, u.cJ().SupportedMarkets, u.cN().SupportedMarkets, u.cO().SupportedMarkets];
        if (Array.contains(o, !0)) return !0;
        for (var f = 0; f < e.length; f++)
            if (_a.bm.e(e[f], s[f], t)) return !0
    }
    return !1
};
_a.bm.d = function(n, t) {
    if (!n || !t) return !0;
    var i = t.split("-")[1].toUpperCase();
    return Array.contains(n, i)
};
_a.bm.e = function(n, t, i) {
    return n && _a.bm.b(t, i)
};
_a.cZ = function() {};
_a.cZ.a = function(n) {
    var t = n.a.modurl;
    return n.g() ? n.h() ? 1 : 0 : t ? parseInt(_j.u.b(_a.M, t)) : 0
};
_a.cZ.b = function(n) {
    var t = n.a.path;
    if (!t) {
        var i = _a.cZ.a(n);
        t = _a.W.a(i)
    }
    return t
};
_a.cZ.c = function(n) {
    var r = null;
    if (n) {
        var i = n.split("/");
        if (i.length >= 4) {
            var t = parseInt(i[2]);
            isNaN(t) || (r = "" + t)
        }
    }
    return r
};
_a.jE = function(n) {
    this.r = n;
    this.m = n
};
_a.jE.prototype = {
    m: null,
    r: null,
    i: function(n, t, i) {
        i(this.m.Initialize(n, t))
    },
    e: function(n, t) {
        this.m.CreateMessageFromSmimeAsync(n, t)
    },
    f: function(n, t, i, r, u) {
        this.m.CreateSmimeFromMessageAsync(n, t, i, r, u)
    },
    d: function(n, t) {
        t(this.m.CreateMessageFromItemAttachment(n))
    },
    b: function(n, t) {
        t(this.m.GetSigningCertificate(n))
    },
    g: function(n) {
        this.m.Dispose();
        _j.k.f(this.r);
        n(null)
    },
    j: function() {
        return this.m.OpenFile()
    },
    k: function() {
        return this.m.OpenImageFile()
    },
    l: function(n, t) {
        return this.m.SaveFile(n, t)
    },
    h: function() {
        return !1
    },
    c: function() {
        _a.c.h("SmimePlugin.OpenExtensionOptionsPage is not supported for IE")
    }
};
_a.SmimePluginFirefox = function(n) {
    this.s = Function.createDelegate(this, this.t);
    this.p = [];
    _a.SmimePluginFirefox.initializeBase(this, [null]);
    _a.c.a(n, "version");
    document.addEventListener("OwaSmime-Callback", this.s, !0);
    this.q = document.createElement("div");
    this.q.style.display = "none";
    document.body.appendChild(this.q);
    this.n = document.createElement("div");
    this.q.appendChild(this.n)
};
_a.SmimePluginFirefox.prototype = {
    q: null,
    n: null,
    i: function(n, t, i) {
        this.o("Initialize", i, "settings", t)
    },
    e: function(n, t) {
        this.o("CreateMessageFromSmime", t, "smime", n)
    },
    f: function(n, t, i, r, u) {
        this.o("CreateSmimeFromMessage", u, "smimeType", "emailMessage", "encryptionCertificates", "signingCertificate", n.toString(), t, i, r)
    },
    d: function(n, t) {
        this.o("CreateMessageFromItemAttachment", t, "mime", n)
    },
    b: function(n, t) {
        this.o("GetSigningCertificate", t, "subjectKeyIdentifier", n)
    },
    g: function(n) {
        this.o("Dispose", n)
    },
    j: function() {
        _a.c.h("OpenFile is not supported for Firefox");
        return null
    },
    k: function() {
        _a.c.h("OpenImageFile is not supported for Firefox");
        return null
    },
    l: function(n, t) {
        _a.c.h("SaveFile is not supported for Firefox");
        return !1
    },
    h: function() {
        return !1
    },
    c: function() {
        _a.c.h("OpenExtensionOptionsPage is not supported for firefox")
    },
    o: function(n, t) {
        for (var i = [], f = 2; f < arguments.length; ++f) i[f - 2] = arguments[f];
        this.n.setAttribute("callbackId", this.p.length.toString());
        this.n.setAttribute("funcName", n);
        var u = 0;
        if (i) {
            u = i.length / 2;
            for (var r = 0; r < u; r++) {
                var h = i[r];
                var o = i[r + u];
                o || (o = "");
                this.n.setAttribute(h, o)
            }
        }
        var s = document.createEvent("Events");
        s.initEvent("OwaSmime-Calling", !0, !1);
        Array.add(this.p, t);
        this.n.dispatchEvent(s);
        for (var e = 0; e < u; e++) this.n.removeAttribute(i[e])
    },
    t: function(n) {
        var t = n.target;
        var i = Number.parseInvariant(t.getAttribute("callbackId"));
        if (this.p[i]) {
            this.p[i](t.getAttribute("result"));
            this.p[i] = null
        }
        t.removeAttribute("callbackId");
        t.removeAttribute("result");
        this.q.removeChild(t);
        return !1
    }
};
_a.fn = function() {
    this.o = Function.createDelegate(this, this.p);
    this.n = {};
    document.addEventListener("SmimeToOwa", this.o, !0);
    var n = null;
    var t = this;
    this.m("GetExtensionVersion", null, function(t) {
        var i = JsonParser.deserialize(t);
        n = i.version
    });
    if (!n) throw _a.V.a("Smime extension is not installed", 75);
};
_a.fn.prototype = {
    i: function(n, t, i) {
        var r = {
            settings: t
        };
        this.m("Initialize", r, i)
    },
    e: function(n, t) {
        var i = {
            smime: n
        };
        this.m("CreateMessageFromSmime", i, t)
    },
    f: function(n, t, i, r, u) {
        var f = {
            smimeType: n,
            emailMessage: t,
            encryptionCertificates: i,
            signingCertificate: r
        };
        this.m("CreateSmimeFromMessage", f, u)
    },
    d: function(n, t) {
        var i = {
            mime: n
        };
        this.m("CreateMessageFromItemAttachment", i, t)
    },
    b: function(n, t) {
        var i = {
            subjectKeyIdentifier: n
        };
        this.m("GetSigningCertificate", i, t)
    },
    j: function() {
        _a.c.h("SmimePluginModernExtension.OpenFile is not supported for modern browsers");
        return null
    },
    k: function() {
        _a.c.h("SmimePluginModernExtension.OpenImageFile is not supported for modern browsers");
        return null
    },
    l: function(n, t) {
        _a.c.h("SmimePluginModernExtension.SaveFile is not supported for modern browsers");
        return !1
    },
    h: function() {
        return !0
    },
    c: function() {
        var n = this;
        this.m("ShowOptionsPage", null, function(n) {})
    },
    g: function(n) {
        var t = this;
        this.m("Dispose", null, function(i) {
            document.removeEventListener("SmimeToOwa", t.o, !0);
            n(null)
        })
    },
    m: function(n, t, i) {
        var r = ++_a.fn.a;
        var f = $d.a(n, r, t);
        var u = new CustomEvent("OwaToSmime", {
            detail: f
        });
        this.n[r.toString()] = i;
        document.dispatchEvent(u)
    },
    p: function(n) {
        var t = n.detail;
        var r = t.data.toString();
        var i = this.n[t.requestId.toString()];
        i(r);
        delete this.n[t.requestId.toString()];
        return !1
    }
};

function $d() {}
$d.a = function(n, t, i) {
    var r;
    return r = new $d, r.messageType = n, r.requestId = t, r.data = i, r
};
$d.prototype = {
    messageType: null,
    requestId: 0,
    data: null
};

function $l() {}
$l.prototype = {
    version: null
};
_a.bf = function() {};
_a.bf.a = function(n) {
    if (_j.h.a(n)) return n;
    try {
        return window.btoa(n)
    } catch (l) {}
    for (var s = "", f, e, o, h, c, u, r, i = 0, t = _a.C.n(n); i < t.length;) {
        f = t.charCodeAt(i++);
        e = i < t.length ? t.charCodeAt(i++) : 0;
        o = i < t.length ? t.charCodeAt(i++) : 0;
        h = f >> 2;
        c = (f & 3) << 4 | e >> 4;
        u = (e & 15) << 2 | o >> 6;
        r = o & 63;
        if (i === t.length)
            if ((t.length % 3 + 3) % 3 == 1) {
                u = 64;
                r = 64
            } else(t.length % 3 + 3) % 3 == 2 && (r = 64);
        s += "" + _a.bf.c.charAt(h) + _a.bf.c.charAt(c) + _a.bf.c.charAt(u) + _a.bf.c.charAt(r)
    }
    return s
};
_a.bf.b = function(n) {
    if (_j.h.a(n)) return n;
    var s = n.toLowerCase().charCodeAt(0);
    if (s >= 97 && s <= 122 && n.indexOf("#") === -1 && n.indexOf("-") === -1) try {
        return window.atob(n)
    } catch (a) {}
    var r = "";
    var o, h, l, c, f, i, u;
    var e = 0;
    var t = null;
    t = function() {
        var i = n.charAt(e++);
        switch (i) {
            case "\r":
            case "\n":
                return t();
            default:
                return i
        }
    };
    while (e < n.length) {
        c = _a.bf.c.indexOf(t());
        f = _a.bf.c.indexOf(t());
        i = _a.bf.c.indexOf(t());
        u = _a.bf.c.indexOf(t());
        o = c << 2 | f >> 4;
        h = (f & 15) << 4 | i >> 2;
        l = (i & 3) << 6 | u;
        r += String.fromCharCode(o);
        i !== 64 && (r += String.fromCharCode(h));
        u !== 64 && (r += String.fromCharCode(l))
    }
    return r
};
_a.bf.d = function(n, t) {
    for (var c = _a.bf.b(n), h = c.length, u = 1024, a = Math.ceil(h / u), l = new Array(a), i = 0; i < a; ++i) {
        for (var r = i * u, s = Math.min(r + u, h), o = new Array(s - r), f = r, e = 0; f < s; ++e, ++f) o[e] = c.charCodeAt(f);
        l[i] = new Uint8Array(o)
    }
    var v = {
        type: t || "application/octet-stream"
    };
    return new Blob(l, v)
};
_a.dW = function() {};
_a.dW.a = function(n) {
    window.clipboardData && window.clipboardData.setData("Text", n)
};
_a.B = function() {};
_a.B.c = function() {
    var n = _a.o.a();
    return n.I && 9 > n.L.b() ? "\u2028" : "\n"
};
_a.B.h = function(n, t) {
    t.val = null;
    try {
        var u = document.createElement("div");
        n = n.replace(_a.B.v, "$1removedSrc$2");
        u.innerHTML = n;
        var i = u.querySelectorAll("style");
        if (i && i.length > 0)
            for (var r = 0; r < i.length; r++) i[r] && _j.k.w(i[r]);
        t.val = _j.k.t(u);
        return !0
    } catch (f) {
        return !1
    }
};
_a.B.a = function(n, t) {
    n = _a.B.O(n, ["BR", "DIV", "P"]);
    n = n.replace(_a.B.w, "</P>");
    n = n.replace(_a.B.g, " ");
    n = n.replace(_a.B.y, "");
    n = n.replace(_a.B.i, _a.B.c() + "<BR>");
    n = n.replace(_a.B.k, _a.B.c() + "<Div>");
    n = n.replace(_a.B.m, _a.B.c() + "</P>");
    n = n.replace(_a.B.l, _a.B.c() + "</li>");
    return _a.B.t(n, t)
};
_a.B.D = function(n, t) {
    if (_a.B.a(n, t)) {
        t.val = _ff.g.a(t.val);
        return !0
    }
    return !1
};
_a.B.E = function(n, t) {
    var i = n;
    i = i.replace(new RegExp("\r", "gi"), "");
    i = i.replace(new RegExp("\n", "gi"), "");
    i = i.replace(_a.B.i, _a.B.c() + "<BR>");
    i = i.replace(_a.B.k, "<DIV>" + _a.B.c());
    i = i.replace(_a.B.m, _a.B.c() + "</P>");
    i = i.replace(_a.B.l, "</li>" + _a.B.c());
    i = i.replace(new RegExp('<a.*href="(.*?)".*>(.*?)</a>', "gi"), "$2 ($1)");
    i = i.replace(new RegExp("<(?:.|\\s)*?>", "g"), "");
    return _a.B.t(i, t)
};
_a.B.F = function(n, t) {
    var i = n;
    i = i.replace(new RegExp("<!--((.|\n)*?)-->", "gi"), "");
    return _a.B.a(i, t)
};
_a.B.J = function(n, t) {
    t.val = null;
    var i = null;
    var u, r;
    if (r = _a.B.D(n, u = {
            val: i
        }), i = u.val, r) {
        t.val = _a.B.p(i);
        return !0
    }
    return !1
};
_a.B.b = function(n, t, i) {
    var r = null;
    r = _ff.g.a(n);
    i && (r = _a.B.M(r));
    r = _a.o.a().I ? t ? _a.B.p(r) : _a.B.K(r) : _a.B.p(r);
    r = _a.B.L(r);
    return r
};
_a.B.M = function(n) {
    var t = n;
    t = t.replace(_a.B.B, _a.B.N);
    return t
};
_a.B.G = function(n) {
    return "<div>" + _a.B.b(n) + "</div>"
};
_a.B.e = function(n) {
    return "<html><head></head><body>" + _a.B.b(n) + "</body></html>"
};
_a.B.H = function(n) {
    var i = new RegExp("</?body[^>]*>", "gi");
    var t = n.split(i);
    return t.length !== 3 ? null : t[1]
};
_a.B.p = function(n) {
    return n.replace(_a.B.g, _a.B.j)
};
_a.B.K = function(n) {
    var t = n;
    if (_a.B.g.test(n)) {
        n = _a.B.f + n + " " + _a.B.d;
        t = n.replace(_a.B.g, _a.B.s)
    }
    return t
};
_a.B.L = function(n) {
    return n.replace(_a.B.z, "&nbsp;")
};
_a.B.t = function(n, t) {
    t.val = null;
    var i;
    var u, r;
    if (r = _a.B.h(n, u = {
            val: i
        }), i = u.val, r) {
        t.val = i.replace(_a.B.x, "\n");
        return !0
    }
    return !1
};
_a.B.O = function(n, t) {
    for (var u = t, e = u.length, r = 0; r < e; ++r) {
        var i = u[r];
        var f = _a.B.o[i] || (_a.B.o[i] = new RegExp(String.format("<{0}(?:(?:\\s+[\\w-]+(?:\\s*=\\s*(?:\"(.|\\s)*?\"|'(.|\\s)*?'|[^'\">\\s]+))?)+)+\\s*>", i), "gi"));
        n = n.replace(f, String.format("<{0}>", i))
    }
    return n
};
_a.B.N = function(n) {
    var r;
    var t;
    var i = n.substr(n.length - 1);
    if (_a.B.A[i]) t = n.substr(0, n.length - 1);
    else {
        t = n;
        i = ""
    }
    r = n.startsWith(_a.B.q) || n.startsWith(_a.B.C) ? _a.B.u + t : t;
    return String.format(_a.B.r, r, t, i)
};
_a.Z = function(n) {
    this.c = n
};
_a.Z.c = function(n) {
    return typeof window.self[n] != "undefined"
};
_a.Z.b = function(n, t, i) {
    if (n && n !== "none") {
        var u = 0;
        var r = 0;
        if (_a.o.a().I) {
            var e = new MSCSSMatrix(n);
            u = t.x - e.e;
            r = t.y - e.f
        } else {
            var f = new WebKitCSSMatrix(n);
            u = t.x - f.e;
            r = t.y - f.f
        }
        var o = Math.sqrt(Math.pow(u, 2) + Math.pow(r, 2));
        return o > i
    }
    return !1
};
_a.Z.a = function(n, t, i, r) {
    var e = "width={0}, height={1}, top={2}, left={3}, menubar=no, toolbar=no";
    var f = 0;
    var u = 0;
    if (r) {
        u = (window.screen.width - t) / 2;
        f = (window.screen.height - i) / 2
    }
    var o = window.open(n, "_blank", String.format(e, t, i, f, u))
};
_a.Z.prototype = {
    c: null,
    b: function() {
        return window.location.href
    },
    f: function() {
        return window.location.hash
    },
    k: function() {
        return window.self.sessionStorage
    },
    l: function() {
        return window.document.title
    },
    a: function(n, t, i, r) {
        var u = !1;
        i = i || "";
        _j.h.a(t) && (t = "_blank");
        if (this.c && this.c.b(this.c.d()) && this.c.d().b().a()) {
            this.c.d().a(n);
            u = !0
        } else {
            var f = window.open(n, t, i);
            if (f) {
                if (!r) try {
                    f.opener = null
                } catch (e) {}
                u = !0
            }
        }
        return u
    },
    d: function(n) {
        window.location.href = n
    },
    g: function(n) {
        window.location.hash = n
    },
    e: function(n, t, i) {
        window.history.replaceState(n, t, i)
    },
    m: function(n, t, i) {
        window.history.pushState(n, t, i)
    },
    h: function(n, t) {
        window.external.addFavorite(t, n)
    },
    i: function(n) {
        window.onhashchange = n
    },
    j: function(n) {
        window.onpopstate = n
    }
};
_a.gj = function() {};
_a.gj.a = function(n, t) {
    var i = "/ecp/";
    var r = n.split("/");
    var u = r.length > 2 && r[2].indexOf("@") !== -1;
    u && (i += r[2] + "/");
    t && (i += t);
    u || (i = _a.w.a(i, "rfr", "owa"));
    return i
};
_a.c = function() {};
_a.c.a = function(n, t) {
    n === null && _a.c.i(Error.argumentNull(t, "Argument can't be null"), "ExceptionHelpers.ThrowOnNullArgument({0})", t)
};
_a.c.b = function(n, t) {
    _j.E.a(n) && _a.c.i(Error.argumentNull(t, "Argument can't be null or undefined"), "ExceptionHelpers.ThrowOnNullOrUndefinedArgument(argument, {0})", _j.E.a(t) ? t : "[null]")
};
_a.c.c = function(n, t) {
    n && n.length || _a.c.i(Error.argumentNull(t, "Argument can't be null or empty"), "ExceptionHelpers.ThrowOnNullOrEmptyArgument({0}, {1})", n ? n : "[null]", _j.E.a(t) ? t : "[null]")
};
_a.c.j = function(n, t) {
    n && n.length || _a.c.i(Error.argumentNull(t, "Argument can't be null or empty"), "ExceptionHelpers.ThrowOnNullOrEmptyArrayArgument({0}, {1})", n ? n.toString() : "[null]", _j.E.a(t) ? t : "[null]")
};
_a.c.k = function(n, t) {
    t ? _a.c.i(Error.argument(n, t), "ExceptionHelpers.ThrowOnArgument({0}, {1})", n, t) : _a.c.i(Error.argument(n), "ExceptionHelpers.ThrowOnArgument({0})", n)
};
_a.c.h = function(n) {
    n || (n = "null");
    _a.c.i(Error.invalidOperation(n), "ExceptionHelpers.ThrowOnInvalidOperation({0})", n)
};
_a.c.g = function(n, t, i) {
    n === t && _a.c.i(Error.argument(i, "Argument value should not be equal to " + t), "ExceptionHelpers.ThrowOnEquals({0}, {1}, {2})", n, t, i)
};
_a.c.f = function(n, t, i) {
    n !== t && _a.c.i(Error.argument(i, "Argument is " + n + " but should be equal to " + t), "ExceptionHelpers.ThrowOnNotEquals({0}, {1}, {2})", n, t, i)
};
_a.c.e = function(n, t, i, r) {
    (n < t || n > i) && _a.c.i(Error.argumentOutOfRange(r), "ExceptionHelpers.ThrowOnOutOfRange({0}, {1}, {2}, {3})", n, t, i, r)
};
_a.c.d = function(n, t) {
    n || _a.c.i(Error.create("ExceptionHelpers.ThrowOnAssert(" + t + ")"), "ExceptionHelpers.ThrowOnAssert({0})", t)
};
_a.c.o = function(n, t) {
    _a.c.i(n, t, null)
};
_a.c.n = function(n) {
    return _a.c.m(n) && n.isTransientError
};
_a.c.p = function(n) {
    return _a.c.m(n) && !n.isTransientError
};
_a.c.l = function(n) {
    if (!n) return null;
    var t = n.responseCode;
    return t ? t.toString() : null
};
_a.c.m = function(n) {
    var t = n.__type;
    return !!t && "clientStoreError" === t
};
_a.c.i = function(n, t, i, r, u, f) {
    _j.e.d(_a.bd.f(), n, t, i, r, u, f);
    throw n;
};
_a.bs = function() {};
_a.bs.a = function() {
    return !_j.h.a(_a.bs.b())
};
_a.bs.b = function(n) {
    try {
        n = n || window.location.pathname
    } catch (c) {}
    var r = null;
    var f = 1;
    if (!_j.h.a(n))
        for (var s = 0; s < 2 && f < n.length; ++s) {
            var t = n.indexOf("/", f);
            var i = n.length;
            if (t > 0 && t < n.length) {
                t++;
                i = n.indexOf("/", t);
                i === -1 && (i = n.length);
                var h = n.substring(t, i);
                if (h.indexOf("@") !== -1) {
                    r = h;
                    break
                }
            }
            f = i
        }
    var u;
    var o, e;
    !_j.h.a(r) && (e = _a.w.h(r, o = {
        val: u
    }, !0), u = o.val, e) && (r = u);
    return r
};
_a.bK = function(n) {
    this.j = Function.createDelegate(this, this.p);
    this.k = Function.createDelegate(this, this.f);
    _a.c.c(n, "highlightClassName");
    this.b = n
};
_a.bK.$$cctor = function() {
    _a.bK.a = [];
    Array.add(_a.bK.a, "script");
    Array.add(_a.bK.a, "style")
};
_a.bK.c = function(n) {
    for (var t = 0; t < _a.bK.b.length; t++)
        if (n.indexOf(_a.bK.b[t]) >= 0) {
            var i = "" + _a.bK.b[t];
            var r = "\\" + i;
            n = n.split(i).join(r)
        }
    return n
};
_a.bK.d = function(n) {
    return new RegExp("\\W" + _a.bK.c(n), "im")
};
_a.bK.prototype = {
    b: null,
    d: null,
    i: null,
    e: !1,
    h: null,
    l: function(n, t) {
        _a.c.c(n, "term");
        _a.c.a(t, "selectedObjects");
        this.o(n);
        _j.B.a(t, this.k)
    },
    n: function(n, t) {
        _a.c.c(n, "term");
        _a.c.a(t, "selectedObject");
        this.o(n);
        this.f(0, t)
    },
    g: function(n, t) {
        _a.c.c(n, "term");
        _a.c.c(t, "selector");
        this.l(n, document.querySelectorAll(t))
    },
    r: function(n, t, i, r) {
        _a.c.c(n, "term");
        _a.c.c(t, "selector");
        _a.c.a(i, "selectedObject");
        this.e = r;
        i.children && i.children.length > 0 && this.l(n, i.querySelectorAll(t));
        _j.k.C(i, t) && this.n(n, i)
    },
    c: function() {
        this.a(document.querySelectorAll("." + this.b + ",.currentHitHighlight"))
    },
    a: function(n) {
        _j.B.a(n, this.j)
    },
    f: function(n, t) {
        if (t.nodeType === 1) {
            if (t.hasChildNodes() && !this.q(t))
                for (var i = 0; i < t.childNodes.length; i++) this.f(i, t.childNodes[i])
        } else if (t.nodeType === 3) {
            var u = t.nodeValue.toUpperCase();
            if (u.indexOf(this.i)) {
                var r = u.search(this.h);
                r >= 0 && this.m(t, r + 1)
            } else this.m(t, 0)
        }
    },
    p: function(n, t) {
        _j.k.c(t, "touchstart click");
        if (t.nodeType === 1 && t.tagName.toUpperCase() === "span".toUpperCase() && t.childNodes.length === 1 && t.childNodes[0].nodeType === 3) {
            var r = t.parentNode;
            var i = document.createTextNode(t.childNodes[0].nodeValue);
            r.replaceChild(i, t)
        }
    },
    q: function(n) {
        var t = n.tagName.toLowerCase();
        return Array.contains(_a.bK.a, t) || t === "span" && n.className === this.b
    },
    m: function(n, t) {
        var r = n.nodeValue;
        var u = n.parentNode;
        var o = r.substring(t, t + this.d.length);
        var i = document.createElement("span");
        i.className = this.b;
        i.appendChild(document.createTextNode(o));
        if (this.e) {
            var s = Math.random().toString();
            i.id = s;
            i.setAttribute("name", "searchHitInReadingPane")
        }
        var f = document.createTextNode(r.substring(0, t));
        var e = document.createTextNode(r.substring(t + this.d.length, r.length));
        u.insertBefore(f, n);
        u.insertBefore(i, n);
        u.replaceChild(e, n)
    },
    o: function(n) {
        this.d = n;
        this.i = n.toUpperCase();
        this.h = _a.bK.d(n)
    }
};
_a.w = function() {};
_a.w.o = function() {
    if (!_a.w.j) {
        var n = getCookie("targetServer");
        _a.w.j = n ? _a.w.c() + "_" + n.toLocaleLowerCase() : _a.w.c()
    }
    return _a.w.j
};
_a.w.c = function() {
    return _a.g.b ? "X-E4E-CANARY" : "X-OWA-CANARY"
};
_a.w.s = function(n) {
    return n ? "String" in n ? _a.w.n(n.String) : n.hasOwnProperty("values") ? _a.w.n(n.values) : _a.w.n(n) : []
};
_a.w.t = function() {
    var n = {};
    n[_a.w.c()] = _a.w.d();
    return n
};
_a.w.d = function() {
    var n = getCookie(_a.w.o());
    return _j.h.a(n) ? _a.w.o() + "_cookie_is_null_or_empty" : n
};
_a.w.f = function() {
    return "&" + _a.w.c() + "=" + _a.w.d()
};
_a.w.n = function(n) {
    return Array.prototype.slice.call(n)
};
_a.w.i = function(n, t, i) {
    if (n.indexOf("?") === -1) {
        t.val = n;
        i.val = "";
        return
    }
    var r = _a.w.k(n, "?");
    if (r.length === 2) {
        t.val = r[0];
        i.val = r[1];
        return
    }
    throw Error.argument("GetUrlParts cannot parse " + n);
};
_a.w.b = function(n, t, i) {
    if (t || _j.h.a(n)) return {};
    var r = _a.w.k(n, "#");
    var u = "";
    r.length === 2 && (u = r[1]);
    r = _a.w.k(r[0], "?");
    r.length === 2 && (u = _j.h.b(u) ? r[1] : r[1] + "&" + u);
    return _a.w.g(u, i)
};
_a.w.g = function(n, t) {
    var r = {};
    if (_j.h.b(n)) return r;
    for (var s = n.split("&"), f = 0; f < s.length; f++) {
        var i = _a.w.k(s[f], "=");
        if (i.length === 2) {
            var u = i[0];
            var o = u.toLowerCase();
            o === "traceActions".toLowerCase() && (u = o);
            var e = String.format("/{0}", _a.M.toString(0));
            r[decodeURIComponent(u)] = i[1].substr(0, e.length) === e || t ? i[1] : decodeURIComponent(i[1].replace(_a.w.l, "%20"))
        }
    }
    return r
};
_a.w.q = function(n, t) {
    var f = {};
    if (_j.h.b(n)) return f;
    for (var c = n.split("&"), e = 0; e < c.length; e++) {
        var r = c[e].split("=");
        if (r.length === 2) {
            var i = null;
            var u = null;
            var l, h, o, s;
            if ((h = _a.w.h(r[0], l = {
                    val: i
                }, !0), i = l.val, h) && (s = _a.w.h(r[1], o = {
                    val: u
                }, !0), u = o.val, s)) {
                t && (i = i.toLowerCase());
                f[i] = u
            }
        }
    }
    return f
};
_a.w.h = function(n, t, i) {
    var r = !0;
    t.val = null;
    try {
        i && (n = n.replace(_a.w.l, "%20"));
        t.val = decodeURIComponent(n)
    } catch (u) {
        _j.e.d(_a.a.dH, u, "An exception has been caught for TryDecodeUri for string: {0}", n);
        r = !1
    }
    return r
};
_a.w.a = function(n, t, i) {
    if (!n || !t || !i) throw Error.argument("Key and Value parameters should not be null");
    if (_a.w.e(n, t)) {
        var f = _a.w.e(n, t, !0);
        return n.replace(f, i)
    } else {
        var r = _a.w.k(n, "#");
        var u = r.length === 1 ? "" : n.substr(n.indexOf("#"));
        n = r[0].indexOf("?") >= 0 ? r[0] + String.format("&{0}={1}", t, i) + u : r[0] + String.format("?{0}={1}", t, i) + u
    }
    return n
};
_a.w.e = function(n, t, i) {
    var r = _a.w.b(n, !1, i);
    return r && t in r ? r[t].toString() : null
};
_a.w.p = function(n) {
    return "http".toLowerCase() === n.b.toLowerCase()
};
_a.w.m = function(n) {
    return "https".toLowerCase() === n.b.toLowerCase()
};
_a.w.k = function(n, t) {
    var i;
    return _j.h.a(n) ? [] : (i = n.indexOf(t)) === -1 ? [n] : [n.slice(0, i), n.slice(i + 1)]
};
_a.cD = function() {};
_a.bu = function() {};
_a.m = function() {};
_a.m.$$cctor = function() {
    window.getSmimeCachedContent = _a.m.Z
};
_a.m.L = function() {
    return _a.m.a && (_a.o.a().I || _a.m.s())
};
_a.m.E = function(n, t) {
    return t ? n : String.format("{0}?v={1}", n, _a.m.O())
};
_a.m.V = function() {
    return _a.m.c.a().de().Filename
};
_a.m.C = function() {
    if (_a.m.n === -1)
        if (_a.m.d().I) try {
            var n = new ActiveXObject("htmlfile");
            n = null;
            _a.m.n = 1
        } catch (t) {
            _a.m.n = 0
        } else _a.m.n = 0;
    return _a.m.n === 1
};
_a.m.W = function() {
    return _a.m.C() && !(_a.m.c && _a.m.c.a().kW().Enabled)
};
_a.m.k = function() {
    _a.m.y === -1 && (_a.m.y = _a.m.d().bk && (_a.m.d().ba && _a.m.C() || _a.m.d().X || _a.m.s()) ? 1 : 0);
    return _a.m.y === 1
};
_a.m.N = function() {
    return _a.m.d().Q
};
_a.m.s = function() {
    return _a.m.d().Q && _a.m.d().bl >= 57 && !!_a.m.c && _a.m.c.a().kX().Enabled || _a.m.d().O && _a.m.d().bm >= 16 && !!_a.m.c && _a.m.c.a().kY().Enabled
};
_a.m.f = function() {
    return !!_a.m.b
};
_a.m.D = function() {
    if (!_a.m.a) return !1;
    if (!_a.m.M()) return !0;
    if (_a.m.l === -1)
        if (_a.m.i) {
            var n = _a.m.i.split(".");
            n[0] !== _a.m.w && (_a.m.o = !0);
            if (n.length < 2) {
                _j.e.c(_a.a.k, "The installed S/MIME control version format is invalid {0}.", _a.m.i);
                _a.m.l = 0
            } else {
                var i = Number.parseInvariant(n[0]) - Number.parseInvariant(_a.m.w);
                var t = Number.parseInvariant(n[1]) - Number.parseInvariant(_a.m.B);
                _a.m.l = !i && t >= 0 ? 1 : 0
            }
        } else _a.m.l = 0;
    return _a.m.l === 1
};
_a.m.g = function() {
    if (!_a.m.a) return !1;
    _a.m.p === -1 && (_a.m.p = _a.m.f() ? _a.m.D() ? 1 : _a.m.o ? 0 : 1 : 0);
    return _a.m.p === 1
};
_a.m.X = function() {
    return _a.m.N() && !_a.m.I
};
_a.m.M = function() {
    return !!_a.m.z
};
_a.m.O = function() {
    return _a.m.Y() + "." + _a.m.J
};
_a.m.Y = function() {
    return _a.m.w + "." + _a.m.B
};
_a.m.d = function() {
    _a.m.A || (_a.m.A = _a.o.a());
    return _a.m.A
};
_a.m.h = function(n) {
    _j.e.c(_a.a.k, n)
};
_a.m.q = function(n, t) {
    _j.e.d(_a.a.k, n, t)
};
_a.m.u = function(n) {
    return !!n && n.startsWith("IPM.Note.SMIME")
};
_a.m.P = function(n) {
    return !!n && n.startsWith("IPM.Note.SMIME") && !n.startsWith("IPM.Note.SMIME.MultipartSigned")
};
_a.m.H = function(n) {
    return !!n && n.startsWith("IPM.Note.SMIME.MultipartSigned")
};
_a.m.bc = function(n) {
    _a.m.c = n;
    _a.m.t = !0;
    _a.m.a = !0
};
_a.m.ba = function(n, t, i, r) {
    _a.m.K = t;
    _a.m.o = i;
    _a.m.c = r;
    _a.m.J = n;
    try {
        _a.m.d().ba && _a.m.C() ? _a.m.bd() : _a.m.d().X && _a.m.d().bb ? _a.m.bb() : _a.m.s() ? _a.m.be() : _a.m.a = !0
    } catch (u) {
        _a.m.a = !0;
        _a.V.b(u) || _a.m.h("Failed to activate or initialize S/MIME control: " + u.message)
    }
};
_a.m.be = function() {
    _a.m.G(new _a.fn)
};
_a.m.bb = function() {
    _a.m.G(new _a.SmimePluginFirefox(_a.m.d().bb))
};
_a.m.bd = function() {
    var t = _a.m.T(document.body);
    var n = new _a.jE(t);
    _a.m.bg(n);
    _a.m.G(n)
};
_a.m.T = function(n) {
    try {
        var t = n.ownerDocument.createElement("OBJECT");
        t.id = _a.m.r();
        t.setAttribute("CLASSID", "CLSID:56023A83-B4FC-413B-9285-6BB1DAD977A2");
        n.appendChild(t);
        return t
    } catch (i) {
        throw _a.V.a(String.format("Failed to create Smime ActiveX object. {0}", i.message), 73);
    }
};
_a.m.bg = function(n) {
    var t = n.m.GetVersion();
    var r = t.split(".");
    var i = Number.parseInvariant(r[0]);
    if (i < _a.m.Q) {
        _a.m.i = t;
        throw _a.V.a(String.format("The version of currently installed control {0} is not supported by this client.", _a.m.i), 74);
    }
};
_a.m.G = function(n) {
    _a.m.j = 0;
    n.i(function(n, t) {
        _a.m.bf(n, t)
    }, JsonParser.serialize(_a.m.K), function(t) {
        var i = JsonParser.deserialize(t);
        _j.e.a(_a.a.k, "S/MIME plugin errorcode: " + i.ErrorCode);
        _j.e.a(_a.a.k, "S/MIME plugin capabilities: " + i.Data);
        switch (i.ErrorCode) {
            case 0:
                window.addEventListener ? window.addEventListener("unload", _a.m.S, !1) : window.attachEvent("unload", _a.m.S);
                var r = i.Data;
                _a.m.i = r.Version;
                _a.m.z = 1;
                _j.e.a(_a.a.k, "S/MIME plugin version: " + r.Version);
                _a.m.b = n;
                _a.m.a = !0;
                break;
            case 81:
                _a.m.I = 0;
                _a.m.a = !0;
                break;
            case 82:
                _a.m.z = 0;
                _a.m.i = "";
                _a.m.b = n;
                _a.m.a = !0;
                break;
            default:
                _a.m.h("Unable to initialize the S/MIME control. ErrorCode=" + i.ErrorCode);
                break
        }
    })
};
_a.m.Z = function(n) {
    var t = _a.m.v[n];
    delete _a.m.v[n];
    return t
};
_a.m.e = function() {
    if (_a.m.d().O) {
        _a.m.U("owa_download_smime_edge_extension", _a.m.E(_a.m.c.a().de().Url, _a.m.c.a().de().IsUrlVersionSpecific), _a.m.V());
        return
    }
    if (_a.m.d().Q) {
        window.open(_a.m.E(_a.m.c.a().gi().Url, _a.m.c.a().gi().IsUrlVersionSpecific));
        return
    }
    window.open(_a.m.E(_a.m.c.a().gj().Url, _a.m.c.a().gj().IsUrlVersionSpecific))
};
_a.m.U = function(n, t, i) {
    var r = document.getElementById(n);
    if (!r) {
        r = document.createElement("A");
        r.id = n;
        r.href = t;
        r.style.visibility = "hidden";
        r.setAttribute("download", i);
        document.body.appendChild(r)
    }
    r.click()
};
_a.m.F = function(n) {
    if (_j.h.a(n)) return null;
    var t = n.indexOf("=");
    var i = n.indexOf(",");
    return t >= 0 && i > t ? n.substr(t + 1, i - t - 1).trim() : t >= 0 && i <= t ? n.substr(t + 1).trim() : n
};
_a.m.r = function() {
    return "smime-" + _a.m.m() + _a.m.m() + _a.m.m() + _a.m.m()
};
_a.m.m = function() {
    return (Math.floor(Math.random() * 4026531839) + 268435456).toString(16)
};
_a.m.bi = function(n) {
    (_a.m.g() || !_a.m.a && n.get_url().toLowerCase().indexOf("getowauserconfiguration") > 0 && _a.m.d().bb) && (n.get_headers()["X-OWA-SmimeInstalled"] = "1")
};
_a.m.R = function(n) {
    _a.m.g() && n.setRequestHeader("X-OWA-SmimeInstalled", "1")
};
_a.m.bh = function(n) {
    _a.m.g() && n.setRequestHeader("X-OWA-SmimeInstalled", "1")
};
_a.m.S = function(n) {
    _a.m.b && _a.m.b.g(function(n) {
        _a.m.b = null
    })
};
_a.m.x = function() {
    _a.m.j || (_a.m.j = _a.m.k() ? _a.m.f() ? _a.m.M() ? _a.m.D() ? 8 : _a.m.o ? 7 : 6 : _a.m.s() ? 5 : 4 : _a.m.X() || !_a.m.N() ? 2 : 3 : 1);
    return _a.m.j
};
_a.m.bf = function(n, t) {
    switch (n) {
        case 1:
            _a.m.h(t);
            break;
        case 2:
            break;
        case 4:
            break;
        case 5:
            break;
        case 3:
            break;
        default:
            break
    }
};
_a.V = function(n) {
    this.a = n
};
_a.V.a = function(n, t) {
    var i = new _a.V(t);
    return Error.create(t + "_" + n, {
        SmimeException: i
    })
};
_a.V.c = function(n, t) {
    if (!_a.V.b(n)) return n;
    n.SmimeException.b = t;
    return n
};
_a.V.e = function(n, t) {
    if (!_a.V.b(n)) return n;
    n.SmimeException.c = t;
    return n
};
_a.V.d = function(n) {
    return _a.V.b(n) ? n.SmimeException.c : !1
};
_a.V.b = function(n) {
    return n ? _a.V.isInstanceOfType(n.SmimeException) : !1
};
_a.V.prototype = {
    a: 0,
    c: !1,
    b: 0
};
_a.gl = function(n, t) {
    this.a = Function.createDelegate(this, this.d);
    this.b = this.$$gta["_a.gl"].T === Number || Type.isEnum(this.$$gta["_a.gl"].T) ? 0 : this.$$gta["_a.gl"].T === Boolean ? !1 : null;
    _a.c.a(t, "userCommand");
    this.c = t;
    this.b = n
};
_a.gl.$$ = function(n) {
    var u = _a.__tc = _a.__tc || {};
    var i = "gl" + "$" + n.getName().replace(/\./g, "_");
    if (!u[i]) {
        var t = u[i] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _a.gl.apply(this, t)
        };
        t.registerClass("_a.__tc." + i);
        var o = {
            "_a.gl": {
                T: n
            },
            ctor: _a.gl
        };
        t.prototype.$$gta = o;
        var e = _a.gl.prototype;
        for (var f in e) {
            var r = {
                key: f,
                value: e[f]
            };
            "constructor" !== r.key && (t.prototype[r.key] = r.value)
        }
        t.a = function(n, i) {
            for (var u = new Array(n.x.length), r = 0; r < n.x.length; r++) {
                var e = n.x[r];
                var f = new t(e, i);
                u[r] = f
            }
            return u
        }
    }
    return u[i]
};
_a.gl.prototype = {
    c: null,
    d: function() {
        this.c(this.b)
    }
};
_a.C = function() {};
_a.C.b = function(n) {
    return _j.h.d(n) ? null : n.toLocaleLowerCase()
};
_a.C.c = function(n) {
    var i = 0;
    if (n)
        for (var t = 0; t < n.length; t++) i += n.charCodeAt(t);
    return i
};
_a.C.d = function(n, t) {
    return n ? n.replace(_a.C.e, function(n) {
        n = n.replace(_a.C.f, "");
        t && (n = n.replace(_a.C.i, ' src="'));
        return n
    }) : n
};
_a.C.m = function(n) {
    return n.replace(_a.C.e, function(n) {
        n = n.replace(_a.C.h, "");
        return n
    })
};
_a.C.g = function() {
    return _ff.g.a(_a.d.get_utcNow().h().toString())
};
_a.C.n = function(n) {
    for (var f = new String, u = 0; u < n.length; u++) {
        var r = n.charCodeAt(u);
        var t = [];
        do {
            Array.add(t, r & 255);
            r >>= 8
        } while (r);
        for (var i = t.length - 1; i > -1; i--) f += String.fromCharCode(t[i])
    }
    return f
};
_a.C.l = function(n, t) {
    var r = [];
    var i = [];
    if (!n && !t) throw Error.argumentUndefined("currentVersion or targetVersion needs to be defined");
    if (n) Array.addRange(r, n.split("."));
    else return -1;
    if (t) Array.addRange(i, t.split("."));
    else return 1;
    while (r.length > i.length) Array.add(i, "0");
    while (i.length > r.length) Array.add(r, "0");
    for (var u = 0; u < i.length; u++) {
        var e = parseInt(r[u], 10);
        var f = parseInt(i[u], 10);
        if (e > f) return 1;
        if (f > e) return -1
    }
    return 0
};
_a.C.a = function() {
    var n = function(n) {
        var t = Math.random() * 16 | 0;
        t = n === "x" ? t : t & 3 | 8;
        return t.toString(16)
    };
    return _a.C.k.replace(_a.C.j, n)
};
_a.db = function() {};
_a.db.prototype = {
    h: null,
    b: null,
    a: null,
    f: !1,
    e: !1,
    d: null,
    c: !1,
    g: function(n, t, i) {
        var r = this;
        r.b = n;
        r.d && r.d(r)
    }
};
_a.bR = function() {};
_a.bR.b = function() {
    _a.bR.a || (_a.bR.a = _a.bR.g());
    return _a.bR.a
};
_a.bR.c = function(n) {
    var t = _a.bR.e(n);
    return String.format("{1}: {2}{0}{3}{0}", "\r\n", Object.getType(n).getName(), n.message, t)
};
_a.bR.e = function(n) {
    var t = n;
    return _a.bR.f(t, 0)
};
_a.bR.d = function(n) {
    var t = new Error;
    if (!t.stack) try {
        throw t;
    } catch (i) {
        t = i
    }
    return _a.bR.f(t, n)
};
_a.bR.f = function(n, t) {
    if (!n || !n.stack) return "";
    var f = n.stack.split("\n");
    var r = _a.o.a();
    (r.Q || r.M || r.T) && (t += 1);
    for (var e = "", i = t; i < f.length; i++) {
        var u = f[i];
        u !== "" && (e += u + "\r\n")
    }
    return e
};
_a.bR.g = function() {
    var n = window.navigator;
    return {
        "CPU Class": n.cpuClass,
        Platform: window.navigator.platform,
        "Browser language": _a.o.a().I ? n.browserLanguage : n.language,
        "Cookie enabled": window.navigator.cookieEnabled,
        "User agent": window.navigator.userAgent,
        "Document.Cookie": window.document.cookie
    }
};
_a.bd = function() {};
_a.bd.f = function() {
    return _a.bd.d || _a.a.T
};
_a.bd.a = function(n, t) {
    if (n.c) {
        _a.bd.g(n, t);
        return 0
    }
    var i = 0;
    var e = n.d ? 3 : 1;
    var o = _j.n.b(n.b, 0, n.e, e);
    try {
        var s = _a.bd.e();
        var r = new Date;
        _a.bd.g(n, t);
        var u = new Date;
        var f = _a.bd.e();
        n.f = f - s;
        i = u - r
    } finally {
        _j.n.a(o)
    }
    return i
};
_a.bd.j = function(n, t, i, r) {
    var u = _a.bd.c || r.type === "load";
    var o = r.currentTarget ? r.currentTarget.className : "";
    var e = "jQuery_" + r.type + "_" + o;
    var f = _j.n.b(_a.a.dI, 0, e);
    try {
        if (!u) {
            _j.m.a().R();
            _a.bd.c = !0
        }
        return n.apply(t, i)
    } catch (s) {
        var h = s;
        _j.e.d(_a.a.T, s, "jQuery error {0}", r.type);
        return null
    } finally {
        _j.n.a(f);
        if (!u) {
            _a.bd.c = !1;
            _j.m.a().L()
        }
    }
};
_a.bd.i = function(n, t, i) {
    var r = _a.bd.c || i.type === "load";
    var e = i.currentTarget ? i.currentTarget.className : "";
    var f = "Dom_" + i.type + "_" + e;
    var u = _j.n.b(_a.a.dI, 0, f);
    try {
        if (!r) {
            _j.m.a().R();
            _a.bd.c = !0
        }
        n(t)
    } catch (o) {
        var s = o;
        _j.e.d(_a.a.T, o, "Dom Event error {0}", i.type)
    } finally {
        _j.n.a(u);
        if (!r) {
            _a.bd.c = !1;
            _j.m.a().L()
        }
    }
};
_a.bd.b = function(n) {
    return _a.bd.f() !== _a.a.T ? _a.bd.f() : n
};
_a.bd.g = function(n, t) {
    _a.bd.d = n.b;
    try {
        t()
    } catch (i) {
        var r = i;
        _j.e.d(n.b, i, "Exception context: {0}", n.a)
    } finally {
        _a.bd.d = _a.a.T
    }
};
_a.bd.h = function() {
    return 0
};
_a.cg = function(n, t) {
    this.b = n;
    this.e = this.a = t;
    this.c = !1;
    this.d = !1
};
_a.cg.prototype = {
    b: null,
    e: null,
    a: null,
    c: !1,
    d: !1,
    f: 0
};
_a.ba = function(n, t, i, r) {
    this.a = n;
    this.d = t;
    this.c = i;
    this.b = r
};
_a.ba.prototype = {
    a: null,
    d: !1,
    c: 0,
    b: 0
};
_a.jG = function() {};
_a.jG.registerInterface("_a.jG");
_a.d = function(n, t, i, r, u, f, e, o, s, h, c) {
    r = r | 0;
    u = u | 0;
    f = f | 0;
    e = e | 0;
    this.n = new Date(Date.UTC(n, t, i, r, u, f, e));
    h && this.n.setUTCFullYear(n);
    this.U(this.n);
    if (o === undefined || s)
        if (s === "UTC") this.t = 0;
        else {
            var l = c || _a.d.bb();
            this.t = l.j(s || _a.d.ba(), _a.d.o(this.n))
        }
    else this.t = o
};
_a.d.$$cctor = function() {
    _a.d.bG = function() {
        return _a.d.o(new Date)
    }
};
_a.d.bF = function() {
    return new _a.d(0, 0, 0, 0, 0, 0, 0, 0)
};
_a.d.a = function() {
    return _a.d.bb().d("UTC", _a.d.ba(), _a.d.get_utcNow())
};
_a.d.get_utcNow = function() {
    var n = _a.d.bG();
    return n.o()
};
_a.d.bq = function() {
    if (!_a.d.v) {
        _a.d.v = new Array(7);
        _a.d.v[0] = _fs.T.BH;
        _a.d.v[1] = _fs.T.D;
        _a.d.v[2] = _fs.T.CS;
        _a.d.v[3] = _fs.T.Cd;
        _a.d.v[4] = _fs.T.Bb;
        _a.d.v[5] = _fs.T.CX;
        _a.d.v[6] = _fs.T.BI
    }
    return _a.d.v
};
_a.d.bN = function() {
    if (!_a.d.t) {
        _a.d.t = new Array(7);
        _a.d.t[0] = _fs.T.Bn;
        _a.d.t[1] = _fs.T.a;
        _a.d.t[2] = _fs.T.Cf;
        _a.d.t[3] = _fs.T.Bq;
        _a.d.t[4] = _fs.T.BT;
        _a.d.t[5] = _fs.T.By;
        _a.d.t[6] = _fs.T.l
    }
    return _a.d.t
};
_a.d.bQ = function() {
    if (!_a.d.w) {
        _a.d.w = new Array(7);
        _a.d.w[0] = _fs.T.CH;
        _a.d.w[1] = _fs.T.CI;
        _a.d.w[2] = _fs.T.CP;
        _a.d.w[3] = _fs.T.F;
        _a.d.w[4] = _fs.T.q;
        _a.d.w[5] = _fs.T.CL;
        _a.d.w[6] = _fs.T.Bt
    }
    return _a.d.w
};
_a.d.Y = function() {
    _a.d.bi === null && (_a.d.bi = _a.v.c().w());
    return _a.d.bi
};
_a.d.bC = function() {
    if (_a.d.T === null) {
        _a.d.T = !1; - 1 !== _a.d.A().indexOf("('ddd')") && (_a.d.T = !0)
    }
    return _a.d.T
};
_a.d.cw = function() {
    if (_a.d.R === null) {
        _a.d.R = !1;
        _a.d.H().indexOf("tt") || (_a.d.R = !0)
    }
    return _a.d.R
};
_a.d.Z = function() {
    if (_a.d.S === null) {
        _a.d.S = !1;
        _a.d.A().indexOf("yy") || (_a.d.S = !0)
    }
    return _a.d.S
};
_a.d.cA = function() {
    if (!_a.d.bn) {
        if (-1 !== _a.d.H().indexOf("'h'")) return "'h'".replace(_a.F.d, "");
        else if (-1 !== _a.d.H().indexOf("' h '")) return "' h '".replace(_a.F.d, "");
        var i = _a.d.H().split(new RegExp("[hH]+"));
        if (i)
            for (var r = i, u = r.length, n = 0; n < u; ++n) {
                var t = r[n];
                t.length > 1 && (_a.d.bn = t.substring(0, 1))
            }
    }
    return _a.d.bn
};
_a.d.O = function() {
    if (_a.d.V === null) {
        _a.d.V = !1;
        _a.F.o[_a.v.b()] && (_a.d.V = !0)
    }
    return _a.d.V
};
_a.d.cm = function() {
    if (!_a.d.X) {
        for (var r = !1, u = !1, f = !1, n = new _j.q, e = _a.d.A(), t = 0; t < e.length && !(f && u && r); t++) {
            var i = e.charAt(t);
            if (!r && i === "y") {
                r = !0;
                n.c(5);
                continue
            }
            if (!u && i === "M") {
                u = !0;
                n.c(6);
                continue
            }
            if (!f && i === "d") {
                f = !0;
                n.c(7)
            }
        }
        _a.d.X = n.d.length === 3 ? n.i() : [5, 6, 7]
    }
    return _a.d.X
};
_a.d.bA = function() {
    _a.d.M || (_a.d.M = _a.F.q[_a.v.b()] ? _a.F.q[_a.v.b()].toString() : "yyyy");
    return _a.d.M
};
_a.d.bD = function() {
    _a.d.bj = !1;
    _a.d.A().indexOf("M") < _a.d.A().indexOf("d") && (_a.d.bj = !0);
    return _a.d.bj
};
_a.d.A = function() {
    return _a.v.c().s() ? _a.v.c().s() : _a.cl.a().c
};
_a.d.H = function() {
    return _a.v.c().p() ? _a.v.c().p() : _a.cl.a().e
};
_a.d.cB = function() {
    return _a.v.c().A() === undefined ? _a.cl.a().h : _a.v.c().A()
};
_a.d.cn = function() {
    return _a.v.c().z() === undefined ? _a.cl.a().d : _a.v.c().z()
};
_a.d.ba = function() {
    return _a.v.c().m() ? _a.v.c().m() : _a.cl.a().f
};
_a.d.bb = function() {
    return _a.v.c().u() ? _a.v.c().u() : _a.cl.a().u()
};
_a.d.bB = function() {
    _a.d.bf || (_a.d.bf = _a.v.a().culture().calendar.days);
    return _a.d.bf
};
_a.d.bL = function() {
    _a.d.bh || (_a.d.bh = _a.v.a().culture().calendar.months);
    return _a.d.bh
};
_a.d.cq = function() {
    _a.d.bd || (_a.d.bd = _a.d.bB().names);
    return _a.d.bd
};
_a.d.bK = function() {
    _a.d.be || (_a.d.be = _a.d.bB().namesShort);
    return _a.d.be
};
_a.d.ct = function() {
    _a.d.bg || (_a.d.bg = _a.d.bL().names);
    return _a.d.bg
};
_a.d.bO = function() {
    if (!_a.d.u) {
        _a.d.u = new Array(7);
        _a.d.u[0] = _fs.T.Bc;
        _a.d.u[1] = _fs.T.BQ;
        _a.d.u[2] = _fs.T.BW;
        _a.d.u[3] = _fs.T.H;
        _a.d.u[4] = _fs.T.Cb;
        _a.d.u[5] = _fs.T.CQ;
        _a.d.u[6] = _fs.T.Bv
    }
    return _a.d.u
};
_a.d.bR = function() {
    if (!_a.d.k) {
        _a.d.k = new Array(13);
        _a.d.k[0] = _fs.T.Bw;
        _a.d.k[1] = _fs.T.N;
        _a.d.k[2] = _fs.T.x;
        _a.d.k[3] = _fs.T.Ca;
        _a.d.k[4] = _fs.T.Bx;
        _a.d.k[5] = _fs.T.V;
        _a.d.k[6] = _fs.T.Bz;
        _a.d.k[7] = _fs.T.Be;
        _a.d.k[8] = _fs.T.Bg;
        _a.d.k[9] = _fs.T.R;
        _a.d.k[10] = _fs.T.CR;
        _a.d.k[11] = _fs.T.CV;
        _a.d.k[12] = " "
    }
    return _a.d.k
};
_a.d.cy = function() {
    if (!_a.d.i) {
        _a.d.i = new Array(13);
        _a.d.i[0] = _fs.T.CE;
        _a.d.i[1] = _fs.T.BO;
        _a.d.i[2] = _fs.T.s;
        _a.d.i[3] = _fs.T.CY;
        _a.d.i[4] = _fs.T.CN;
        _a.d.i[5] = _fs.T.A;
        _a.d.i[6] = _fs.T.S;
        _a.d.i[7] = _fs.T.CO;
        _a.d.i[8] = _fs.T.E;
        _a.d.i[9] = _fs.T.Bp;
        _a.d.i[10] = _fs.T.BU;
        _a.d.i[11] = _fs.T.b;
        _a.d.i[12] = " "
    }
    return _a.d.i
};
_a.d.bS = function() {
    if (!_a.d.l) {
        _a.d.l = new Array(13);
        _a.d.l[0] = _fs.T.X;
        _a.d.l[1] = _fs.T.e;
        _a.d.l[2] = _fs.T.BK;
        _a.d.l[3] = _fs.T.Bd;
        _a.d.l[4] = _fs.T.BF;
        _a.d.l[5] = _fs.T.Bs;
        _a.d.l[6] = _fs.T.Bh;
        _a.d.l[7] = _fs.T.CD;
        _a.d.l[8] = _fs.T.Bu;
        _a.d.l[9] = _fs.T.Ba;
        _a.d.l[10] = _fs.T.Bk;
        _a.d.l[11] = _fs.T.BG;
        _a.d.l[12] = " "
    }
    return _a.d.l
};
_a.d.bE = function() {
    if (!_a.d.j) {
        _a.d.j = new Array(13);
        _a.d.j[0] = _fs.T.o;
        _a.d.j[1] = _fs.T.BZ;
        _a.d.j[2] = _fs.T.BA;
        _a.d.j[3] = _fs.T.y;
        _a.d.j[4] = _fs.T.Br;
        _a.d.j[5] = _fs.T.c;
        _a.d.j[6] = _fs.T.P;
        _a.d.j[7] = _fs.T.CT;
        _a.d.j[8] = _fs.T.J;
        _a.d.j[9] = _fs.T.BY;
        _a.d.j[10] = _fs.T.i;
        _a.d.j[11] = _fs.T.n;
        _a.d.j[12] = " "
    }
    return _a.d.j
};
_a.d.cr = function() {
    if (!_a.d.E) {
        var n = _a.d.bK();
        _a.d.E = {};
        _a.d.E.names = _a.d.bq();
        _a.d.E.namesAbbr = _a.d.bQ();
        _a.d.E.namesShort = n
    }
    return _a.d.E
};
_a.d.cu = function() {
    if (!_a.d.J) {
        _a.d.J = {};
        _a.d.J.names = _a.d.bR();
        _a.d.J.namesAbbr = _a.d.bS()
    }
    return _a.d.J
};
_a.d.cp = function() {
    if (!_a.d.D) {
        var t = _a.d.cq();
        var n = _a.d.bK();
        _a.d.D = {};
        _a.d.D.names = t;
        _a.d.D.namesAbbr = _a.d.bO();
        _a.d.D.namesShort = n
    }
    return _a.d.D
};
_a.d.cs = function() {
    if (!_a.d.I) {
        var n = _a.d.ct();
        _a.d.I = {};
        _a.d.I.names = n;
        _a.d.I.namesAbbr = _a.d.bE()
    }
    return _a.d.I
};
_a.d.co = function() {
    if (!_a.d.C) {
        _a.d.C = new Array(3);
        _a.d.C[0] = _fs.T.Ce;
        _a.d.C[1] = _fs.T.BD;
        _a.d.C[2] = _fs.T.M
    }
    return _a.d.C
};
_a.d.cv = function() {
    if (!_a.d.F) {
        _a.d.F = new Array(3);
        _a.d.F[0] = _fs.T.BC;
        _a.d.F[1] = _fs.T.BX;
        _a.d.F[2] = _fs.T.Bo
    }
    return _a.d.F
};
_a.d.cx = function() {
    if (_a.d.U === null) {
        _a.d.U = !1;
        _a.F.v[_a.v.b()] && (_a.d.U = !0)
    }
    return _a.d.U
};
_a.d.ck = function() {
    _a.d.L || _a.d.Y() || (_a.d.L = _a.F.j[_a.v.b()] ? "%t" : "tt");
    return _a.d.L
};
_a.d.cl = function() {
    _a.d.W || (_a.d.W = _a.d.br());
    return _a.d.W
};
_a.d.bM = function() {
    _a.d.bk || (_a.d.bk = _a.d.bT(1));
    return _a.d.bk
};
_a.d.cz = function() {
    _a.d.bm || (_a.d.bm = _a.d.bu());
    return _a.d.bm
};
_a.d.bP = function() {
    _a.d.bl || (_a.d.bl = _a.d.ca(1));
    return _a.d.bl
};
_a.d.o = function(n) {
    return new _a.d(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds(), -n.getTimezoneOffset())
};
_a.d.bp = function(n) {
    var i = new _a.d(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds(), n.getUTCMilliseconds(), 0);
    return _a.d.bb().d("UTC", _a.d.ba(), i)
};
_a.d.x = function(n) {
    var t = _a.d.get_utcNow();
    t.n.setTime(n);
    return t
};
_a.d.bI = function(n) {
    _a.c.b(n, "utcTicks");
    var r = 1e4;
    var i = 621355968000000000;
    var t = (n - i) / r;
    return _a.d.x(Number.parseInvariant(t.toString()))
};
_a.d.cj = function(n) {
    return _a.d.bb().d("UTC", _a.d.ba(), _a.d.bI(n))
};
_a.d.s = function(n, t) {
    return n && n !== 2 && n !== 4 && n !== 6 && n !== 7 && n !== 9 && n !== 11 ? n === 1 ? _a.d.cf(t) ? 29 : 28 : 30 : 31
};
_a.d.cC = function(n) {
    return _a.d.cf(n) ? 366 : 365
};
_a.d.e = function(n, t) {
    t === undefined && (t = _a.d.bs());
    var i = t - n.r();
    i > 0 && (i = i - 7);
    return n.c(i)
};
_a.d.bv = function(n, t, i) {
    t === undefined && (t = _a.d.cn());
    i === undefined && (i = _a.d.bs());
    if (i < 0 || i > 6) throw Error.argumentOutOfRange("firstDayOfWeek", i);
    switch (t) {
        case 0:
            return _a.d.cD(n, i);
        case 1:
            return _a.d.ce(n, i, 7);
        case 2:
            return _a.d.ce(n, i, 4)
    }
    throw Error.argumentOutOfRange("firstWeekRule", t);
};
_a.d.bX = function(n) {
    for (var r = n.f(), t = 0, i = 0; i < r; i++) t += _a.d.s(i, n.g());
    t += n.j();
    return t
};
_a.d.bJ = function(n) {
    return _a.d.N(n, 2) + n.K()
};
_a.d.d = function(n) {
    return _a.d.N(n, 0)
};
_a.d.p = function(n) {
    return _a.d.N(n, 1)
};
_a.d.f = function(n) {
    return _a.d.p(n) + n.K()
};
_a.d.m = function(n) {
    return _a.d.d(n) + n.K()
};
_a.d.bs = function() {
    return _a.d.cB()
};
_a.d.n = function(n, t) {
    return t === 2 ? _a.d.bq()[n] : t === 1 ? _a.d.bN()[n] : _a.v.a().culture().calendar.days.names[n]
};
_a.d.r = function(n, t) {
    return t === 2 ? _a.d.bQ()[n] : _a.v.a().culture().calendar.days.namesAbbr[n]
};
_a.d.bZ = function(n) {
    return _a.H.o()[_a.bT.toString(n)]
};
_a.d.bc = function(n, t) {
    return t === 2 ? _a.d.bR()[n] : t === 1 ? _a.d.cy()[n] : _a.v.a().culture().calendar.months.names[n]
};
_a.d.P = function(n, t) {
    if (t === 1) return _a.d.bE()[n];
    else if (t === 2) return _a.d.bS()[n];
    return _a.v.a().culture().calendar.months.namesAbbr[n]
};
_a.d.br = function() {
    return _a.d.bT(0)
};
_a.d.bu = function() {
    return _a.d.ca(0)
};
_a.d.by = function(n) {
    _a.c.b(n, "timeString");
    var t = Globalize.parseDate(n, _a.v.c().p(), _a.v.b());
    if (!t) return null;
    var i = _a.d.a();
    return new _a.d(i.g(), i.f(), i.j(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds(), i.t)
};
_a.d.cG = function() {
    return _a.d.bW(_a.v.c().p())
};
_a.d.cd = function() {
    return _a.d.bW(_a.v.c().s())
};
_a.d.bW = function(n) {
    var t = [];
    if (!n) return new Array(0);
    var i = n.indexOf("H");
    i = i > -1 ? i : n.indexOf("h");
    i > -1 && Array.add(t, new _a.d.G(1, i));
    var h = n.indexOf("m");
    h > -1 && Array.add(t, new _a.d.G(2, h));
    var s = n.indexOf("s");
    s > -1 && Array.add(t, new _a.d.G(3, s));
    var e = n.indexOf("t");
    e > -1 && Array.add(t, new _a.d.G(4, e));
    var c = n.indexOf("yy");
    c > -1 && Array.add(t, new _a.d.G(5, c));
    var o = n.indexOf("M");
    o > -1 && Array.add(t, new _a.d.G(6, o));
    var u = n.indexOf("d");
    u > -1 && Array.add(t, new _a.d.G(7, u));
    t.sort(function(n, t) {
        var r = n;
        var i = t;
        return r.a < i.a ? -1 : 1
    });
    for (var f = new Array(t.length), r = 0; r < t.length; r++) f[r] = t[r].b;
    return f
};
_a.d.b = function(n, t, i, r) {
    var u = _a.d.cg.exec(n);
    if (!u || u.length !== 15) throw Error.invalidOperation(String.format("Unexpected datetime format (value: {0}). ex:{1}", n, Date.prototype.format ? Date.prototype.format.toString().substr(0, 70) : "undef"));
    var a = parseInt(u[1], 10);
    var c = parseInt(u[2], 10);
    var l = parseInt(u[3], 10);
    var s = 0;
    var h = 0;
    var o = 0;
    var e = 0;
    var f = 0;
    if (!_j.h.b(u[5])) {
        s = parseInt(u[5], 10);
        _j.h.b(u[6]) || (h = parseInt(u[6], 10));
        _j.h.b(u[7]) || (o = parseInt(u[7], 10));
        _j.h.b(u[9]) || (e = parseInt(u[9], 10))
    }
    if (u[10] && !i && u[10] !== "Z" && u[10] !== "z") {
        f += 60 * parseInt(u[13], 10);
        f += parseInt(u[14], 10);
        u[12] === "-" && (f = -f)
    }
    return new _a.d(a, c - 1, l, s, h, o, e, f, i, t, r)
};
_a.d.ch = function(n, t, i) {
    i.val = null;
    try {
        i.val = _a.d.b(t)
    } catch (r) {
        _j.e.b(n, "Could not parse date time {0}", t);
        return !1
    }
    return !0
};
_a.d.cb = function(n, t, i) {
    var r = null;
    r = _a.F.p[_a.v.b()] ? _a.F.p[_a.v.b()].toString() : _a.d.bt(19);
    var u = _a.d.bE()[n.f()];
    return String.format(i ? "{0} {1}-{2}" : "{0}{1}-{2}", u, _a.v.a().format(n.n, _a.d.bt(19)), _a.v.a().format(t.n, r))
};
_a.d.Q = function(n, t) {
    var u = n.b(14);
    var f = t.b(14);
    var r = n.b(13);
    var i = t.b(13);
    return _a.d.O() ? String.format("{0}{1} – {2}{3}", r, _a.d.q(n), i, _a.d.q(t)) : u === f && r === i ? _a.v.g().toLowerCase() === "he" ? String.format("‪{0}–{1}‬ {2}, {3}", _a.v.a().format(n.n, _a.d.B()), _a.v.a().format(t.n, _a.d.B()), _a.v.a().format(t.n, "MMMM"), t.b(13)) : _a.d.bD() ? _a.d.Z() ? String.format("{0}, {1}–{2}", t.b(13), _a.d.q(n), _a.v.a().format(t.n, _a.d.B())) : String.format("{0}–{1}, {2}", _a.d.q(n), _a.v.a().format(t.n, _a.d.B()), t.b(13)) : String.format("{0}–{1}, {2}", _a.v.a().format(n.n, _a.d.B()), _a.d.q(t), t.b(13)) : r === i ? _a.d.Z() ? String.format("{0}, {1} – {2}", i, _a.d.q(n), _a.d.q(t)) : String.format("{0} – {1}, {2}", _a.d.q(n), _a.d.q(t), i) : _a.d.Z() ? String.format("{0}, {1} – {2}, {3}", r, _a.d.q(n), i, _a.d.q(t)) : String.format("{0}, {1} – {2}, {3}", _a.d.q(n), r, _a.d.q(t), i)
};
_a.d.bY = function(n, t, i) {
    var r;
    var u = new _j.q;
    r = n / 31622400;
    r = Math.floor(r);
    if (r >= 1) {
        u.c(r.toString(10));
        u.c(_a.bH.f(r, _a.v.b(), i));
        if (t) return u.d;
        n = n % 31622400
    }
    r = n / 2592e3;
    r = Math.floor(r);
    if (r >= 1) {
        u.c(r.toString(10));
        u.c(_a.bH.d(r, _a.v.b(), i));
        if (t) return u.d;
        n = n % 2592e3
    }
    r = n / 604800;
    r = Math.floor(r);
    if (r >= 1) {
        u.c(r.toString(10));
        u.c(_a.bH.i(r, _a.v.b(), i));
        if (t) return u.d;
        n = n % 604800
    }
    r = n / 86400;
    r = Math.floor(r);
    if (r >= 1) {
        u.c(r.toString(10));
        u.c(_a.bH.c(r, _a.v.b(), i));
        if (t) return u.d;
        n = n % 86400
    }
    r = n / 3600;
    r = Math.floor(r);
    if (r >= 1) {
        u.c(r.toString(10));
        u.c(_a.bH.g(r, _a.v.b(), i));
        if (t) return u.d;
        n = n % 3600
    }
    r = n / 60;
    r = Math.floor(r);
    if (r >= 1) {
        u.c(r.toString(10));
        u.c(_a.bH.b(r, _a.v.b(), i));
        if (t) return u.d;
        n = n % 60
    }
    if (n > 0) {
        u.c(n.toString(10));
        u.c(_a.bH.h(n, _a.v.b(), i))
    }
    return u.d
};
_a.d.y = function(n, t) {
    if (!n) {
        var e = _a.bH.b(0, _a.v.b(), t);
        return "0 " + e
    }
    for (var u = _a.d.bY(n, !1, t), i = new Sys.StringBuilder, r = 0; r < u.length; r += 2) {
        i.append(u[r]);
        i.append(" ");
        i.append(u[r + 1]);
        i.append(" ")
    }
    var f = i.toString();
    i.toString().lastIndexOf(" ") === i.toString().length - 1 && (f = i.toString().substring(0, i.toString().length - 1));
    return f
};
_a.d.c = function(n, t) {
    if (!n && !t) return !0;
    if (!n || !_a.d.isInstanceOfType(n) || !t || !_a.d.isInstanceOfType(t)) return !1;
    var r = n;
    var i = t;
    return r.C(i)
};
_a.d.h = function(n, t) {
    return !n && !t ? !0 : !n || !t ? !1 : !n.k(t)
};
_a.d.bz = function(n, t) {
    return !n && !t ? !0 : !n || !t ? !1 : !n.L(t)
};
_a.d.bw = function(n) {
    return _a.d.h(n, _a.d.a())
};
_a.d.N = function(n, t) {
    var f = "-";
    var u = ":";
    var o = ".";
    var e = "T";
    var r = function(n, t) {
        for (var i = n.toString(), r = t; r > 0; r--) {
            if (n / Math.pow(10, r) >= 1) return i;
            i = "0" + i
        }
        return i
    };
    var i = new Sys.StringBuilder;
    i.append(r(n.g(), 3));
    i.append(f);
    i.append(r(n.f() + 1, 1));
    i.append(f);
    i.append(r(n.j(), 1));
    if (t === 2) return i.toString();
    i.append(e);
    i.append(r(n.m(), 1));
    i.append(u);
    i.append(r(n.q(), 1));
    i.append(u);
    i.append(r(n.v(), 1));
    if (!t) return i.toString();
    i.append(o);
    i.append(r(n.y(), 2));
    return i.toString()
};
_a.d.ci = function() {
    _a.d.bi = _a.d.U = _a.d.T = _a.d.R = _a.d.S = _a.d.V = _a.d.bj = null;
    _a.d.bx = _a.d.bo = !1;
    _a.d.bd = _a.d.be = _a.d.bg = _a.d.v = _a.d.t = _a.d.w = _a.d.u = _a.d.k = _a.d.i = _a.d.l = _a.d.j = _a.d.C = _a.d.F = null;
    _a.d.E = _a.d.J = _a.d.D = _a.d.I = null;
    _a.d.bn = _a.d.M = _a.d.W = _a.d.bk = _a.d.bm = _a.d.bl = _a.d.L = null;
    _a.d.bf = null;
    _a.d.bh = null;
    _a.d.X = null
};
_a.d.q = function(n) {
    var i = _a.v.a().format(n.n, _a.d.B());
    var t = _a.v.a().format(n.n, "MMMM");
    return _a.d.O() ? t + i : _a.d.bD() ? t + " " + i : i + " " + t
};
_a.d.cf = function(n) {
    return !(n % 4) && !!(n % 100) || !(n % 100) && !(n % 400)
};
_a.d.bV = function(n) {
    return n.j() + (n.f() << 5) + (n.g() << 9)
};
_a.d.cc = function(n) {
    return n.y() + (n.v() << 10) + (n.q() << 16) + (n.m() << 22)
};
_a.d.cD = function(n, t) {
    var i = _a.d.bX(n) - 1;
    var u = n.r() - i % 7;
    var r = (u - t + 14) % 7;
    return Math.floor((i + r) / 7 + 1)
};
_a.d.ce = function(n, t, i) {
    var u = _a.d.bX(n) - 1;
    var e = n.r() - u % 7;
    var r = (t - e + 14) % 7;
    r && r >= i && (r -= 7);
    var f = u - r;
    if (f < 0) {
        u = _a.d.cC(n.g() - 1);
        e -= u % 7;
        r = (t - e + 14) % 7;
        r && r >= i && (r -= 7);
        f = u - r
    }
    return Math.floor(f / 7 + 1)
};
_a.d.bt = function(n) {
    var t = _a.d.A();
    var i = _a.d.H();
    switch (n) {
        case 0:
            return i;
        case 1:
            return t;
        case 2:
            return _a.F.r[_a.v.b()] ? _a.F.r[_a.v.b()].toString() : _a.d.Z() ? String.format("{1} {0}", "MMMM", _a.d.bA()) : String.format("{0} {1}", "MMMM", _a.d.bA());
        case 3:
            return "D";
        case 4:
            return _a.d.bC() ? t + " " + i : _a.F.f[_a.v.b()] ? t + " (ddd) " + i : "ddd " + t + " " + i;
        case 5:
            return _a.d.bC() ? t : _a.F.f[_a.v.b()] ? t + " " + "(ddd)" : "ddd " + t;
        case 6:
            return _a.F.f[_a.v.b()] ? i + " (ddd) " : "ddd " + i;
        case 7:
            return _a.d.bU(!1);
        case 25:
            return _a.d.bU(!0);
        case 8:
            return "M";
        case 9:
            return t + " " + i;
        case 10:
            throw Error.argument("DayDate format should be handled by caller");
        case 12:
            throw Error.argument("ShortHour format should be handled by caller");
        case 22:
            throw Error.argument("ShortHourWithZeroMinutes format should be handled by caller");
        case 13:
            return _a.d.bA();
        case 14:
            return "MM";
        case 15:
            return _a.d.B();
        case 19:
            return "%d";
        case 21:
            return "dd";
        case 23:
            return _a.F.n[_a.v.b()] ? _a.F.n[_a.v.b()].toString() : _a.d.bD() ? "MMM d" : "d MMM";
        case 16:
            return _a.d.cE();
        case 17:
            return "mm";
        case 18:
            throw Error.argument("ShortTime format should be handled by caller");
        case 20:
            throw Error.argument("DayShortTime format should be handled by caller");
        default:
            throw Error.argumentOutOfRange("Invalid OwaDateTimeFormat.");
    }
};
_a.d.B = function() {
    if (_a.d.O()) return _a.F.o[_a.v.b()].toString();
    var n = _a.d.A().match(new RegExp("[d]+"));
    return n && n.length === 1 && n[0].length === 1 ? "%d" : "dd"
};
_a.d.bT = function(n) {
    _a.d.bH();
    if (_a.v.a().culture().calendar.AM) return _a.v.a().culture().calendar.AM[n];
    else {
        _j.e.b(_ff.c.g, "Calendar.AM array is null");
        return "am"
    }
};
_a.d.ca = function(n) {
    _a.d.bH();
    if (_a.v.a().culture().calendar.PM) return _a.v.a().culture().calendar.PM[n];
    else {
        _j.e.b(_ff.c.g, "Calendar.PM array is null");
        return "pm"
    }
};
_a.d.bH = function() {
    if (_a.d.cx() && !_a.d.bo) {
        _a.d.cH();
        _a.d.bo = !0
    }
};
_a.d.cE = function() {
    var t = "hh";
    var i = "HH";
    var n = _a.d.H().match(new RegExp("[H]+"));
    if (n && n.length === 1) return n[0].length === 1 ? "%H" : i;
    else {
        n = _a.d.H().match(new RegExp("[h]+"));
        if (n && n.length === 1 && n[0].length === 1) return "%h"
    }
    return t
};
_a.d.bU = function(n) {
    var f = _a.d.A().split(new RegExp("[y]+"));
    var i = null;
    if (f)
        for (var u = f, e = u.length, r = 0; r < e; ++r) {
            var t = u[r];
            t.length > 1 && (i = _a.d.Z() ? t.substring(1, t.length) : t.substring(0, t.length - 1))
        }
    return _a.d.bC() ? i : _a.F.f[_a.v.b()] ? i + (n ? " (dddd) " : " (ddd) ") : (n ? "dddd" : "ddd") + " " + i
};
_a.d.K = function(n) {
    if (!Number.isInstanceOfType(n)) throw Error.argumentType("argument", Object.getType(n), Number, "Argument must be an int.");
};
_a.d.cF = function(n, t) {
    var f = t ? "tt" : _a.d.ck();
    if (!f) return "";
    var i = _a.v.a().format(n.n, f);
    if (n.m() < 12) {
        var u = _a.d.cl();
        if (i === u) return _a.d.bM();
        else if (i === "" + u.charAt(0)) return "" + _a.d.bM().charAt(0)
    } else {
        var r = _a.d.cz();
        if (i === r) return _a.d.bP();
        else if (i === r.substring(0, 1)) return _a.d.bP().substring(0, 1)
    }
    return i
};
_a.d.cH = function() {
    _a.v.a().culture().calendar.AM = _a.d.co();
    _a.v.a().culture().calendar.PM = _a.d.cv()
};
_a.d.prototype = {
    n: null,
    t: 0,
    y: function() {
        return this.n.getUTCMilliseconds()
    },
    v: function() {
        return this.n.getUTCSeconds()
    },
    q: function() {
        return this.n.getUTCMinutes()
    },
    m: function() {
        return this.n.getUTCHours()
    },
    j: function() {
        return this.n.getUTCDate()
    },
    f: function() {
        return this.n.getUTCMonth()
    },
    g: function() {
        return this.n.getUTCFullYear()
    },
    r: function() {
        return this.n.getUTCDay()
    },
    P: function() {
        return _a.d.s(this.f(), this.g()) === this.j()
    },
    l: function(n) {
        _a.d.K(n);
        var t = this.u();
        var i = t.n.getTime() + n;
        t.n.setTime(i);
        return t
    },
    B: function(n) {
        _a.d.K(n);
        return this.l(n * 1e3)
    },
    p: function(n) {
        _a.d.K(n);
        return this.l(n * 6e4)
    },
    A: function(n) {
        _a.d.K(n);
        return this.l(n * 36e5)
    },
    c: function(n) {
        _a.d.K(n);
        var t = this.u();
        t.n.setUTCDate(this.j() + n);
        return t
    },
    s: function(n) {
        _a.d.K(n);
        var i = this.u();
        var t = this.f() + n;
        var u = t % 12;
        var f = this.g() + (t - u) / 12;
        var r = _a.d.s(u, f);
        this.j() > r && i.n.setUTCDate(r);
        i.n.setUTCMonth(t);
        return i
    },
    x: function(n) {
        _a.d.K(n);
        var t = this.u();
        var r = this.g() + n;
        var i = _a.d.s(this.f(), r);
        this.j() > i && t.n.setUTCDate(i);
        t.n.setUTCFullYear(r);
        return t
    },
    Q: function() {
        var n = this.u();
        n.n.getHours() >= 12 && n.c(1);
        n.n.setHours(0);
        n.n.setMinutes(0);
        n.n.setSeconds(0);
        n.n.setMilliseconds(0);
        return n
    },
    H: function(n) {
        var t = this.p(n);
        t.t += n;
        return t
    },
    u: function() {
        var n = _a.d.bF();
        n.n.setTime(this.n.getTime());
        n.t = this.t;
        return n
    },
    F: function() {
        return this.m() > 0 || this.q() > 0 || this.v() > 0
    },
    a: function(n) {
        _a.c.d(!!n, "value");
        return this.n.getTime() - n.n.getTime()
    },
    k: function(n) {
        return _a.d.bV(this) - _a.d.bV(n)
    },
    L: function(n) {
        return _a.d.cc(this) - _a.d.cc(n)
    },
    C: function(n) {
        if (!n || !_a.d.isInstanceOfType(n)) return !1;
        var t = n;
        return this.n.getTime() === t.n.getTime()
    },
    i: function() {
        return _a.d.N(this, 1)
    },
    G: function() {
        return _a.d.N(this, 0) + "Z"
    },
    K: function() {
        if (!this.t) return "Z";
        var i = Math.floor(Math.abs(this.t) / 60);
        var t = Math.abs(this.t) % 60;
        var n = this.t < 0 ? "-" : "+";
        return String.format("{0}{1:D2}:{2:D2}", n, i, t)
    },
    z: function() {
        return _a.d.N(this, 2)
    },
    b: function(n, t) {
        var i = null;
        if (!_a.d.bx) {
            this.O();
            _a.d.bx = !0
        }
        t === 2 ? this.W() : t === 1 && this.V();
        switch (n) {
            case 10:
                i = this.R();
                break;
            case 12:
                i = this.N();
                break;
            case 18:
                i = this.I();
                break;
            case 22:
                i = _a.d.Y() ? this.I() : this.N();
                break;
            case 20:
                i = this.M(!1);
                break;
            case 24:
                i = this.M(!0);
                break;
            case 11:
                i = this.T();
                break;
            default:
                var r = _a.d.bt(n);
                i = _a.v.a().format(this.n, r);
                break
        }
        t > 0 && this.O();
        return i
    },
    toString: function() {
        return _a.v.a().format(this.n, "F")
    },
    d: function() {
        return new _a.d(this.g(), this.f(), this.j(), 0, 0, 0, 0, this.t)
    },
    e: function(n) {
        _a.c.d(!!n, "value");
        return this.n.getTime() - n.n.getTime()
    },
    E: function() {
        return _a.d.bb().d("UTC", _a.d.ba(), this.o())
    },
    o: function() {
        if (!this.t) return this;
        var n = this.p(-this.t);
        n.t = 0;
        return n
    },
    h: function() {
        var n = this.t ? this.o() : this;
        return n.n.getTime()
    },
    w: function() {
        return this.n.getTime()
    },
    D: function() {
        return new Date(this.o().h())
    },
    M: function(n) {
        var i = _a.v.a().format(this.n, n ? "dddd" : "ddd");
        var t = n ? this.S() : this.I();
        return _a.F.f[_a.v.b()] ? t + " (" + i + ") " : i + " " + t
    },
    I: function() {
        return this.J(!0, !1)
    },
    S: function() {
        return this.J(!0, !0)
    },
    N: function() {
        return this.J(!1, !1)
    },
    J: function(n, t) {
        var r;
        r = _a.d.Y() ? "%H" : "%h";
        var i = _a.v.a().format(this.n, r);
        (n || !n && this.n.getMinutes() > 0) && (i = i + _a.d.cA() + _a.v.a().format(this.n, "mm"));
        var u = _a.d.cF(this, t);
        return _a.d.cw() ? u + i : i + u
    },
    T: function() {
        var t = this.I();
        var n = _a.v.a().format(this.n, _a.d.bt(8));
        return n + " " + t
    },
    R: function() {
        var n = _a.d.bO()[this.n.getDay()];
        return _a.d.O() ? String.format("{0}({1})", _a.v.a().format(this.n, "%d"), n) : String.format("{0}{1}", n, _a.v.a().format(this.n, _a.d.B()))
    },
    U: function(n) {
        n.getFullYear = n.getUTCFullYear;
        n.getMonth = n.getUTCMonth;
        n.getDate = n.getUTCDate;
        n.getHours = n.getUTCHours;
        n.getMinutes = n.getUTCMinutes;
        n.getSeconds = n.getUTCSeconds;
        n.getMilliseconds = n.getUTCMilliseconds;
        n.getDay = n.getUTCDay
    },
    W: function() {
        _a.v.a().culture().calendar.days = _a.d.cr();
        _a.v.a().culture().calendar.months = _a.d.cu()
    },
    V: function() {
        _a.v.a().culture().calendar.days = _a.d.cp();
        _a.v.a().culture().calendar.months = _a.d.cs()
    },
    O: function() {
        _a.v.a().culture().calendar.days = _a.d.bB();
        _a.v.a().culture().calendar.months = _a.d.bL()
    }
};
_a.d.G = function(n, t) {
    this.b = n;
    this.a = t
};
_a.d.G.prototype = {
    b: 0,
    a: 0
};
_a.fo = function(n) {
    this.s = n
};
_a.fo.prototype = {
    s: null,
    t: null,
    i: function() {
        return this.s.currentTarget
    },
    e: function() {
        return this.t ? this.t.x : this.s.pageX
    },
    f: function() {
        return this.t ? this.t.y : this.s.pageY
    },
    o: function() {
        return this.s.relatedTarget
    },
    b: function() {
        return this.s.target
    },
    n: function() {
        return this.s.timeStamp || +new Date
    },
    a: function() {
        var n = this.s.which;
        !n && _a.o.a().K && this.s.type === "keypress" && (n = this.u());
        return n
    },
    u: function() {
        return this.s.keyCode
    },
    m: function() {
        return this.s.originalEvent
    },
    j: function() {
        return this.s.type
    },
    k: function() {
        return this.s.originalEvent.touches
    },
    q: function() {
        return this.s.isDefaultPrevented()
    },
    g: function() {
        return this.s.shiftKey
    },
    h: function() {
        return _j.G.a().P ? this.s.metaKey : this.s.ctrlKey
    },
    l: function() {
        return this.s.altKey
    },
    r: function() {
        return this.s.metaKey
    },
    p: function() {
        return this.g() || this.h() || this.l() || this.r()
    },
    c: function() {
        this.s.preventDefault()
    },
    d: function() {
        this.s.stopPropagation()
    }
};
_a.I = function(n) {
    n || (n = {});
    this.a = n
};
_a.I.prototype = {
    a: null,
    g: function() {
        return this.e("cmd", "contents", !1)
    },
    m: function() {
        return this.c("part", !0)
    },
    h: function() {
        return this.e("module", "calendar", !1)
    },
    n: function() {
        return this.e("module", "discovery", !1)
    },
    f: function() {
        return this.c("ispopout", !0)
    },
    j: function() {
        return this.c("sharepointapp", !0)
    },
    d: function() {
        return this.c("leanMode", !0)
    },
    q: function() {
        return this.c("superTag", !0)
    },
    l: function() {
        return this.c("animation", !1)
    },
    p: function() {
        return this.c("prefetch", !1)
    },
    k: function() {
        return this.c("tasksOptOut", !0)
    },
    o: function() {
        return this.c("folderPrefetch", !1)
    },
    i: function(n, t) {
        this.a[n] = t;
        return t
    },
    b: function(n) {
        return n in this.a
    },
    e: function(n, t, i) {
        var r = this.a[n];
        return r === t ? !0 : !i && !!r && r.toLowerCase() === t
    },
    c: function(n, t) {
        return t ? this.e(n, "1", !1) || this.e(n, "true", !1) : this.e(n, "0", !1) || this.e(n, "false", !1)
    }
};
_a.o = function() {
    _a.o.initializeBase(this);
    this.L = new _j.N(this.J);
    this.bj = document.cookie.indexOf("PALEnabled") !== -1 || window.location.search.toLowerCase().indexOf("palenabled=1") !== -1 || window.location.pathname.toLowerCase().indexOf("outofboxexperience") !== -1 ? !0 : !1;
    this.U = this.J.indexOf("rv:") !== -1 && this.J.indexOf("Trident") !== -1;
    this.I && (this.bn = !0);
    this.bB = "ontouchstart" in window.document || navigator.msMaxTouchPoints > 0;
    this.I && (this.br = this.J.indexOf("IEMobile") !== -1 || this.J.indexOf("ZuneWP7") !== -1 || this.J.indexOf("WPDesktop") !== -1);
    this.ba = this.bD() || this.U;
    this.T = this.bC() || this.U;
    this.bh = this.I && !this.T ? !1 : !!navigator.geolocation;
    var n = this.J.indexOf("Firefox");
    var t = n > 0 ? Number.parseInvariant(this.J.substr(n + 8).split(".", 1)[0]) : 0;
    var r = this.K && t < 4;
    this.X = this.K && t >= 23;
    var i = n > 0 ? this.J.substr(n + 8) : "0";
    this.bf = parseFloat(i);
    this.bl = this.bo(" Chrome/");
    this.bm = this.bo(" Edge/");
    this.bt = this.R && this.bo(" Version/") >= 9;
    this.V = this.br && this.T;
    r || this.V || (this.Z() ? this.S = !0 : this.be = !0);
    this.bp = _a.o.d() && !this.V;
    this.bg = this.bE();
    this.bv = _a.o.e();
    this.Y = window.navigator.appVersion.indexOf("NT 6.2") !== -1;
    this.bu = window.navigator.userAgent.indexOf("Windows NT 10.0") !== -1;
    this.bi = _a.o.g();
    this.bb = this.bG();
    this.bs = this.bF();
    this.bA = this.J.indexOf("QtCarBrowser") > -1
};
_a.o.a = function() {
    _a.o.b || (_a.o.b = new _a.o);
    return _a.o.b
};
_a.o.d = function() {
    var n = window.document.createElement("input");
    n.type = "file";
    return n.type === "file" && !n.disabled
};
_a.o.e = function() {
    var n = !1;
    var i = {};
    try {
        if (Object.defineProperty) {
            var t = {
                get: _a.o.f,
                configurable: !1
            };
            Object.defineProperty(i, "testProperty", t);
            n = !0
        }
    } catch (r) {}
    return n
};
_a.o.f = function() {
    return null
};
_a.o.g = function() {
    return _a.o.c(window.navigator.appVersion, "NT ", 6.2)
};
_a.o.c = function(n, t, i) {
    try {
        var r = n.indexOf(t);
        if (r !== -1) return _a.o.h(n.substr(r + t.length)) >= i
    } catch (u) {}
    return !1
};
_a.o.h = function(n) {
    var t = n.split(";");
    if (t.length > 0) return parseFloat(t[0]);
    throw Error.argument("input", "The version string was not semi-colon terminated.");
};
_a.o.prototype = {
    bj: !1,
    bB: !1,
    bg: !1,
    bh: !1,
    S: !1,
    be: !1,
    bv: !1,
    Y: !1,
    bu: !1,
    V: !1,
    bi: !1,
    bA: !1,
    bn: !0,
    bp: !1,
    ba: !1,
    T: !1,
    U: !1,
    bt: !1,
    X: !1,
    bf: 0,
    bl: 0,
    bm: 0,
    br: !1,
    bb: null,
    bs: !1,
    L: null,
    d: function() {
        return this.L
    },
    c: function() {
        return !_a.g.j && this.bj
    },
    A: function() {
        return !!window.applicationCache
    },
    u: function() {
        return (this.bz() || !!this.bq()) && (this.Q || this.I || this.O || this.R || this.c() || this.K && this.X)
    },
    x: function() {
        return this.I && !!this.bq()
    },
    bz: function() {
        return _a.Z.c("openDatabase")
    },
    bq: function() {
        var n = null;
        try {
            n = window.self.indexedDB || window.self.msIndexedDB
        } catch (t) {
            _j.e.b(_a.a.T, "Exception while accessing indexedDB property: {0}", t.message)
        }
        return n
    },
    Z: function() {
        return typeof FileReader != "undefined"
    },
    B: function() {
        return this.bp && (this.S || this.be)
    },
    r: function() {
        return this.S
    },
    t: function() {
        return this.be
    },
    H: function() {
        return this.bv
    },
    m: function() {
        return this.T
    },
    D: function() {
        return this.X
    },
    C: function() {
        return this.bf
    },
    p: function() {
        return this.Y
    },
    G: function() {
        return this.bu
    },
    w: function() {
        return this.bi
    },
    F: function() {
        return this.bs
    },
    y: function() {
        return this.bn
    },
    E: function() {
        return this.ba && !this.T
    },
    bE: function() {
        var n = !1;
        if (this.M) return !1;
        var t = window.document.createElement("audio");
        try {
            t.canPlayType && (n = !_j.h.a(t.canPlayType("audio/mpeg")))
        } catch (i) {
            n = !1
        }
        return n
    },
    bD: function() {
        return _a.o.c(this.J, "MSIE ", 9)
    },
    bC: function() {
        return _a.o.c(this.J, "MSIE ", 10)
    },
    bF: function() {
        return this.a() && _a.o.c(this.J, "OS", 8)
    },
    bG: function() {
        var r = "OWASMIME/";
        var n = this.J.indexOf(r);
        if (n === -1) return null;
        else {
            n += r.length;
            for (var t = n; t < this.J.length; t++) {
                var i = this.J.charAt(t);
                if ((i > "9" || i < "0") && i !== ".") break
            }
            return this.J.substr(n, t - n)
        }
    },
    bo: function(n) {
        var t = this.J.indexOf(n);
        return t >= 0 ? Number.parseInvariant(this.J.substr(t + n.length).split(".", 1)[0]) : -1
    }
};
_a.cN = function() {};
_a.cN.b = function(n, t) {
    var c = _j.F.m(Object.getType(n), _a.bw);
    if (c) {
        var r = null;
        var u = -1;
        var v = !1;
        var a = !1;
        var o = "%";
        var f = "%";
        switch (t) {
            case "TouchNarrow":
                o = "TouchNarrowView";
                f = ".Narrow";
                break;
            case "TouchWide":
                o = "TouchWideView";
                f = ".Wide";
                break;
            case "Mouse":
                o = "MouseView";
                f = ".Mouse";
                break
        }
        for (var l = c.length - 1; l >= 0; l--) {
            var i = c[l];
            var e = !1;
            if (i.d.endsWith(o)) {
                var y = _a.cN.a(r, i, u, 2);
                if (y) {
                    r = y;
                    u = 2
                } else e = !0
            } else if (i.d.endsWith(f)) {
                var h = _a.cN.a(r, i, u, 1);
                if (h) {
                    if (h !== r) {
                        r = h;
                        u = 1
                    }
                } else e = !0
            } else if (i.d.indexOf(".") < 0 && !i.d.endsWith("TouchNarrowView") && !i.d.endsWith("TouchWideView") && !i.d.endsWith("MouseView")) {
                var s = _a.cN.a(r, i, u, 0);
                if (s) {
                    if (s !== r) {
                        r = s;
                        u = 0
                    }
                } else e = !0
            }
            e && (i.e ? a = !0 : v = !0)
        }
        if (a || !r.e && v) throw Error.invalidOperation("Multiple templates found for ViewModel " + Object.getType(n).getName() + '. Use PrimaryTemplate="true" attribute in your primary template that you want to be picked up.');
        return r
    }
    return null
};
_a.cN.c = function(n, t) {
    var i = _a.cN.b(n, t);
    return i ? i.d : null
};
_a.cN.a = function(n, t, i, r) {
    if (!t) return n;
    if (!n) return t;
    if (n.f !== t.f) {
        if (_j.F.c(n.f)) return n;
        else if (_j.F.c(t.f)) return t
    } else if (t.e === n.e) {
        if (i > r) return n;
        else if (r > i) return t;
        else if (_a.cN.d(n, t)) return n;
        return null
    } else if (n.e) return n;
    else if (t.e) return t;
    return null
};
_a.cN.d = function(n, t) {
    return n.h > 0 && t.h > 0 && n.h === t.h && n.d === t.d ? !0 : !1
};
_a.bw = function() {
    _a.bw.initializeBase(this)
};
_a.bw.prototype = {
    jh: null,
    k: function() {
        this.jh || (this.jh = (++_a.bw.a).toString());
        return this.jh
    },
    nz: function() {
        return Object.getType(this).getName()
    }
};
_a.dm = function() {
    this.b = {}
};
_a.dm.a = function(n) {
    return n.value ? n.value : null
};
_a.dm.prototype = {
    a: function(n) {
        return n.nz() in this.b
    },
    d: function(n) {
        delete this.b[n.nz()]
    },
    c: function(n, t) {
        var u = new _j.q;
        var f = this.b;
        for (var i in f) {
            var r = {
                key: i,
                value: f[i]
            };
            n(r) && u.c(t(r))
        }
        return u
    }
};
_a.fP = function(n, t, i, r, u, f, e) {
    this.a = n;
    this.b = t;
    this.f = i;
    this.e = r;
    this.g = u;
    this.h = f;
    this.i = e
};
_a.fP.prototype = {
    a: 0,
    b: 0,
    f: 0,
    e: 0,
    g: 0,
    h: 0,
    i: 0,
    c: function() {
        return !isNaN(this.a) && !isNaN(this.b)
    },
    d: function(n) {
        return n ? this.c() && n.c() ? this.a === n.a && this.b === n.b : !this.c() && !n.c() ? !0 : !1 : !1
    }
};
_a.bE = function(n, t, i, r, u, f, e, o) {
    if (_j.C.a(n) && _j.C.a(t)) {
        this.a = new _a.fP(Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN);
        this.b = null
    } else {
        this.a = new _a.fP(n, t, i, r, u, f, e);
        this.b = o
    }
};
_a.bE.d = function(n) {
    _a.c.a(n, "pos");
    return new _a.bE(n.coords.latitude, n.coords.longitude, n.coords.altitude, n.coords.accuracy, n.coords.altitudeAccuracy, n.coords.heading, n.coords.speed, _a.d.x(n.timestamp))
};
_a.bE.b = function(n) {
    _a.c.a(n, "pos");
    return new _a.bE(n.latitude, n.longitude, n.altitude, 0, Number.NaN, Number.NaN, Number.NaN, null)
};
_a.bE.c = function(n, t) {
    _a.c.a(n, "latitude");
    _a.c.a(t, "longitude");
    return new _a.bE(n, t, Number.NaN, 0, Number.NaN, Number.NaN, Number.NaN, null)
};
_a.bE.a = function(n) {
    _a.c.a(n, "pos");
    return new Microsoft.Maps.Location(n.a.a, n.a.b)
};
_a.bE.prototype = {
    a: null,
    b: null
};
_a.la = function() {};
_a.la.registerInterface("_a.la");
_a.ci = function(n) {
    _a.ci.initializeBase(this);
    _a.c.a(n, "uri");
    this.d({});
    this.h(n)
};
_a.ci.prototype = {
    g: function(n) {
        this.eK(_a.ci.c, n);
        return n
    },
    f: function() {
        return this.eM(_a.ci.a).a
    },
    d: function(n) {
        this.eK(_a.ci.a, new _a.ca(n));
        return n
    },
    c: function() {
        return this.eM(_a.ci.b)
    },
    h: function(n) {
        this.eK(_a.ci.b, n);
        return n
    },
    b: function(n) {
        this.eK(_a.ci.d, n);
        return n
    }
};
_a.bU = function(n) {
    _a.bU.initializeBase(this, [n])
};
_a.bU.prototype = {
    i: function(n) {
        this.eK(_a.bU.b, n);
        return n
    },
    j: function(n) {
        this.eK(_a.bU.c, n);
        return n
    },
    e: function() {
        return this.eM(_a.bU.a)
    },
    a: function(n) {
        this.eK(_a.bU.a, n);
        return n
    }
};
_a.bz = function() {
    _a.bz.initializeBase(this);
    this.g({})
};
_a.bz.prototype = {
    e: function() {
        return this.eM(_a.bz.c)
    },
    d: function() {
        return this.eM(_a.bz.a)
    },
    f: function(n) {
        this.eK(_a.bz.a, n);
        return n
    },
    b: function() {
        return this.eM(_a.bz.b)
    },
    g: function(n) {
        this.eK(_a.bz.b, n);
        return n
    },
    a: function() {
        return this.eM(_a.bz.d)
    },
    c: function() {
        return this.eM(_a.bz.e)
    }
};
_a.cz = function(n) {
    _a.cz.initializeBase(this, [n]);
    this.i({});
    this.j({})
};
_a.cz.prototype = {
    a: function() {
        return this.eM(_a.cz.a).a
    },
    i: function(n) {
        this.eK(_a.cz.a, new _a.ca(n));
        return n
    },
    e: function() {
        return this.eM(_a.cz.b).a
    },
    j: function(n) {
        this.eK(_a.cz.b, new _a.ca(n));
        return n
    }
};
_a.fb = function(n, t, i, r, u, f, e) {
    _a.c.c(n, "actionName");
    _a.c.c(t, "serviceUriDir");
    _a.c.c(u, "requestMethod");
    _a.c.a(e, "taskRunner");
    this.c = n;
    this.j = t;
    this.h = i;
    this.k = r;
    this.i = u;
    this.g = f;
    this.f = new XMLHttpRequest;
    this.b = !1;
    this.d = e
};
_a.fb.prototype = {
    c: null,
    j: null,
    h: !1,
    k: 0,
    i: null,
    g: !1,
    d: null,
    f: null,
    b: !1,
    e: null,
    a: function() {
        return this.f
    },
    l: function(n) {
        this.f = n;
        return n
    },
    m: function(n, t) {
        _a.c.a(n, "successCallback");
        _a.c.a(t, "failureCallback");
        if (this.a().onreadystatechange) throw Error.invalidOperation("SyncInlineAttachmentRequestManager is already executing sync request");
        this.a().open(this.i, _a.fb.a + this.j, this.g);
        _a.m.R(this.a());
        this.h && (this.a().responseType = "blob");
        this.o(n, t);
        this.e = this.n(this.k, t);
        try {
            this.a().send(null)
        } catch (i) {
            t(503, i)
        }
    },
    o: function(n, t) {
        var i = this;
        this.a().onreadystatechange = function() {
            if (!i.b && i.a().readyState === 4) {
                i.b = !0;
                i.e = i.d.b(i.e);
                i.a().onreadystatechange = null;
                var u = 0;
                var e = "unkown";
                var o = !1;
                var r = "";
                try {
                    u = i.a().status;
                    e = i.a().statusText;
                    r = i.a().getResponseHeader("Content-Disposition");
                    o = !!r && r.toLowerCase().startsWith("inline;".toLowerCase())
                } catch (c) {}
                if (u === 200)
                    if (o) n(i.a().response);
                    else {
                        var f = 503;
                        var h = String.format("Overriding the actual response status ('{0} {1}' due to invalid content-disposition ({2}) for {3}", f, f, r, i.c);
                        t(f, Error.create(h))
                    }
                else {
                    var s = String.format("{0} failed with StatusCode: {1} - StatusText: {2}", i.c, u, e);
                    t(u, Error.create(s))
                }
                i.l(null)
            }
        }
    },
    n: function(n, t) {
        var i = this;
        return this.d.a(_a.a.co, "ScheduleTimeoutCallback", function() {
            if (!i.b) {
                i.b = !0;
                i.a().onreadystatechange = null;
                i.a().abort();
                var n = 408;
                var r = String.format("{0} failed with StatusCode: {1} - StatusText: TimeOut", i.c, n);
                t(n, Error.create(r));
                i.l(null)
            }
        }, n)
    }
};
_a.P = function(n) {
    _a.c.c(n, "uri");
    if (!_a.P.b(n)) throw Error.format("Input string is not a valid URI: " + n);
    var t = _a.P.c.exec(n);
    this.c = n;
    this.b = t[1];
    this.e = t[2];
    this.d = t[3];
    this.f = t[4];
    this.g = t[5];
    if (!_j.h.a(this.e)) {
        var i = _a.P.d.exec(this.e);
        this.i = i[1];
        this.a = i[2];
        this.h = i[3]
    }
};
_a.P.b = function(n) {
    if (!_a.P.c.test(n)) return !1;
    var i = _a.P.c.exec(n);
    var t = i[2];
    return _j.h.a(t) || _a.P.d.test(t)
};
_a.P.condense = function(n) {
    return n ? n.c : null
};
_a.P.create = function(n) {
    return _a.P.parse(n)
};
_a.P.parse = function(n) {
    return _j.h.a(n) ? null : new _a.P(n)
};
_a.P.a = function(n) {
    var t;
    var r = document.createElement("a");
    r.href = n;
    t = r.href;
    if (t === n) {
        var i = document.createElement("img");
        i.src = n;
        t = i.src
    }
    return t
};
_a.P.prototype = {
    c: null,
    b: null,
    e: null,
    d: null,
    f: null,
    g: null,
    i: null,
    a: null,
    h: null,
    toString: function() {
        return this.c
    }
};
_a.fg = function() {
    _j.k.J = _a.bd.i;
    Error.stackTraceLimit = 30
};
_a.dE = function() {};
_a.dE.prototype = {
    unknownError: 0,
    constraintError: 1,
    notFoundError: 2,
    quotaError: 3,
    timeoutError: 4,
    aborted: 5
};
_a.dE.registerEnum("_a.dE", !1);
_a.lj = function() {};
_a.lj.registerInterface("_a.lj");
_a.ge = function() {};
_a.ge.registerInterface("_a.ge");
_a.lk = function() {};
_a.ll = function() {};
_a.ll.registerInterface("_a.ll");
_a.ln = function() {};
_a.ln.registerInterface("_a.ln");
_a.lq = function() {};
_a.lr = function() {};
_a.ls = function() {};
_a.ls.registerInterface("_a.ls");
_a.lp = function() {};
_a.lp.registerInterface("_a.lp");
_a.lo = function() {};
_a.lo.registerInterface("_a.lo");
_a.lv = function() {};
_a.lv.registerInterface("_a.lv");
_a.lw = function() {};
_a.lw.registerInterface("_a.lw");
_a.lu = function() {};
_a.lu.registerInterface("_a.lu");
_a.lt = function() {};
_a.dF = function() {};
_a.dF.registerInterface("_a.dF");
_a.lm = function() {};
_a.lm.registerInterface("_a.lm");
_a.jy = function() {};
_a.jy.registerInterface("_a.jy");
_a.bQ = function(n, t) {
    this.b = n;
    this.a = _a.bQ.b(n, t)
};
_a.bQ.a = function(n, t) {
    var i = new _a.bQ(n, t);
    throw Error.create(i.a);
};
_a.bQ.b = function(n, t) {
    var i = "BrowserDbError: ";
    switch (n) {
        case 1:
            i += "ConstraintError. ";
            break;
        case 2:
            i += "NotFoundError. ";
            break;
        case 3:
            i += "QuotaError. ";
            break;
        case 4:
            i += "TimeoutError. ";
            break;
        default:
            i += "UnknownError. ";
            break
    }
    return i + t
};
_a.bQ.prototype = {
    a: null,
    b: 0
};
_a.Q = function(n, t) {
    this.a = n;
    this.b = t
};
_a.Q.prototype = {
    a: null,
    b: 0
};
_a.T = function(n) {
    _a.c.c(n, "path");
    this.a = n
};
_a.T.prototype = {
    a: null,
    b: function(n) {
        for (var r = this.a.split("."), t = n, i = 0; i < r.length && t; ++i) t = t[r[i]];
        return t
    },
    c: function(n, t) {
        for (var f = this.a.split("."), u = n, i = 0; i < f.length - 1; ++i) {
            var e = f[i];
            var r = u[e];
            if (!r) {
                r = {};
                u[e] = r
            }
            u = r
        }
        u[f[i]] = t
    },
    d: function(n) {
        for (var i = this.a.split("."), t = n, r = 0; r < i.length - 1 && t; ++r) t = t[i[r]];
        t && delete t[i[i.length - 1]]
    }
};
_a.gf = function() {};
_a.gf.b = function(n) {
    var t = "";
    if (!_j.u.a(n)) switch (n) {
        case 0:
            t = "TEXT";
            break;
        case 1:
            t = "INTEGER";
            break
    }
    return t
};
_a.gf.a = function(n) {
    var t = null;
    switch (n) {
        case 0:
            t = "";
            break;
        case 1:
            t = 0;
            break;
        default:
            break
    }
    return t
};
_a.dj = function(n) {
    if (n) {
        var t = Object.getType(n);
        if (t !== String && t !== Number && t !== Number && t !== Date) throw Error.argumentType("keyValue", t, null, "keyValue must be a javascript primitive (string, int, float, Datetime (or null))");
    }
    this.a = n
};
_a.dj.prototype = {
    a: null,
    toString: function() {
        return this.a ? "" + this.a : null
    }
};
_a.bj = function(n, t) {
    if (t && t.length > 2) throw Error.invalidOperation("SortBy can have at most 2 sort fields.");
    this.b = n;
    this.a = t
};
_a.bj.prototype = {
    b: null,
    a: null
};
_a.ly = function(n) {
    this.a = n || []
};
_a.ly.prototype = {
    a: null,
    f: function(n, t) {
        var i = this.a[0].a === _a.T.a.a ? n : this.a[0].b(t);
        return this.e(i)
    },
    g: function(n) {
        var t = n[this.a[0].a];
        return this.e(t)
    }
};
_a.es = function(n, t) {
    this.b = n;
    this.a = t
};
_a.es.prototype = {
    b: null,
    a: null
};
_a.ce = function(n, t) {
    _a.c.a(n, "sortField");
    this.a = n;
    this.b = t
};
_a.ce.prototype = {
    a: null,
    b: 0
};
_a.gg = function(n, t) {
    _a.gg.initializeBase(this);
    this.code = n;
    this.message = t
};
_a.lx = function() {};
_a.lx.prototype = {
    insertId: 0,
    rowsAffected: 0,
    columnNames: null,
    rows: null
};
_a.lE = function() {};
_a.lE.prototype = {
    code: 0,
    message: null
};
_a.lz = function() {};
_a.cJ = function() {};
_a.cJ.prototype = {
    full: 1,
    timeBased: 2,
    notificationBased: 3,
    cleanup: 4,
    refresh: 5,
    quick: 6,
    reconcile: 7,
    backgroundSync: 8
};
_a.cJ.registerEnum("_a.cJ", !1);
_a.cY = function() {};
_a.cY.prototype = {
    byDefault: 0,
    owaStart: 1,
    syncEnabled: 2,
    onResumePendingGetEvent: 3,
    onPendingGetRequestAliveChangedEvent: 4,
    reloadNotification: 5,
    palSyncNotification: 6,
    notificationQueueManager: 7,
    mobileDevicePolicyComplianceChangedEvent: 8,
    userConfigImportantChange: 9,
    owaResume: 10,
    reachMaxSyncLimitPostALT1: 11,
    invalidSyncState: 12,
    backgroundSyncNotification: 13,
    hierarchyNotification: 14,
    invalidSyncSortOrder: 15,
    test: 100
};
_a.cY.registerEnum("_a.cY", !1);
_a.lA = function() {};
_a.lA.registerInterface("_a.lA");
_a.gh = function() {};
_a.gh.registerInterface("_a.gh");
_a.lB = function() {};
_a.lB.registerInterface("_a.lB");
_a.lC = function() {};
_a.lC.registerInterface("_a.lC");
_a.et = function() {};
_a.et.registerInterface("_a.et");
_a.gi = function() {};
_a.gi.prototype = {
    batchCompleted: 0,
    syncCompleted: 1,
    syncAborted: 2
};
_a.gi.registerEnum("_a.gi", !1);
_a.by = function() {};
_a.by.prototype = {
    none: -1,
    owaUserConfiguration: 0,
    timeZoneOffsets: 1,
    folderHierarchy: 2,
    reminders: 3,
    conversationMinimum: 4,
    messageMinimum: 5,
    favoriteFolders: 6,
    peopleFilters: 7,
    people: 8,
    calendarFolders: 9,
    calendar: 10,
    conversationFull: 11,
    messageFull: 12,
    otherMailboxConfiguration: 13,
    attachment: 14,
    lastPrimaryModule: 14,
    conversationItemsMinimum: 15,
    conversationItemsFull: 16,
    messageItemsMinimum: 17,
    messageItemsFull: 18,
    conversationItemsReadFlag: 19,
    syncCompleted: 20
};
_a.by.registerEnum("_a.by", !1);
_a.cu = function() {};
_a.cu.prototype = {
    moduleEnqueued: 0,
    moduleSyncStarted: 1,
    moduleProgress: 2,
    moduleCompleted: 3,
    moduleSyncCanceled: 4,
    syncCompleted: 5,
    syncAborted: 6
};
_a.cu.registerEnum("_a.cu", !1);

function CalendarSyncState(n, t, i, r, u, f, e) {
    CalendarSyncState.initializeBase(this, ["CalendarSyncState", n]);
    _a.c.b(t, "folderId");
    _a.c.b(i, "windowStart");
    _a.c.b(r, "windowEnd");
    _a.c.c(u, "timeZone");
    this.FolderId = t;
    this.WindowStart = i.i();
    this.WindowEnd = r.i();
    this.TimeZone = u;
    this.ApproximateWindowSize = f;
    this.TryToIncrementWindowSizeOnNextSync = e
}
CalendarSyncState.prototype = {
    FolderId: null,
    WindowStart: null,
    WindowEnd: null,
    TimeZone: null,
    ApproximateWindowSize: 0,
    TryToIncrementWindowSizeOnNextSync: !1
};

function MultiFolderSyncState(n) {
    MultiFolderSyncState.initializeBase(this, [n, MultiFolderSyncState.a]);
    _a.c.c(n, "parentSyncStateId");
    this.PerFolderSyncStateContainer = {}
}
MultiFolderSyncState.prototype = {
    PerFolderSyncStateContainer: null
};

function SyncFolderListItem(n, t) {
    this.FolderId = n;
    this.LastAccessTime = t
}
SyncFolderListItem.prototype = {
    FolderId: null,
    LastAccessTime: null
};
_a.dV = function(n, t, i, r, u, f, e, o, s, h) {
    this.a = n;
    this.c = t;
    this.i = i;
    this.e = r;
    this.h = t.toString();
    this.f = u;
    this.k = f;
    this.b = e;
    this.j = o;
    this.d = null;
    this.g = h;
    s && (this.d = s)
};
_a.dV.a = function(n, t, i, r, u, f, e, o, s, h) {
    return new _a.dV(n, t, i, r, u, f, e, o, s, h)
};
_a.dV.b = function(n, t) {
    return new _a.dV(n, 20, 0, null, null, !1, null, null, t, null)
};
_a.dV.prototype = {
    k: !1,
    a: 0,
    d: null,
    c: 0,
    h: null,
    i: 0,
    f: null,
    e: null,
    b: null,
    j: null,
    g: null
};

function SyncState(n, t) {
    _a.c.c(n, "syncStateId");
    this.Id = n;
    this.IsSynced = !1;
    this.LastAttemptedSyncTime = _a.d.d(_a.d.a());
    this.State = t;
    this.Diagnostics = new OfflineDiagnostics;
    this.SortKeyVersionAtLastSync = SyncState.a
}
SyncState.prototype = {
    Id: null,
    IsSynced: !1,
    LastAttemptedSyncTime: null,
    LastSuccessfulSyncTime: null,
    UserCultureAtLastSync: null,
    SortKeyVersionAtLastSync: null,
    Diagnostics: null,
    State: null,
    ModuleSpecificContext: null
};
_a.cq = function() {};
_a.gm = function() {
    _a.gm.initializeBase(this)
};
_a.gm.prototype = {
    AllowedSenderDomains: null
};
_a.gn = function() {
    _a.gn.initializeBase(this)
};
_a.go = function() {
    _a.go.initializeBase(this)
};
_a.go.prototype = {
    LocalyticsAppKey: null
};
_a.gp = function() {
    _a.gp.initializeBase(this)
};
_a.gp.prototype = {
    ServerVersionForRTV2: null
};
_a.gq = function() {
    _a.gq.initializeBase(this)
};
_a.gq.prototype = {
    UserVoiceForumUrl: null
};
_a.gr = function() {
    _a.gr.initializeBase(this)
};
_a.gs = function() {
    _a.gs.initializeBase(this)
};
_a.gs.prototype = {
    MinimumServerVersion: null
};
_a.gt = function() {
    _a.gt.initializeBase(this)
};
_a.gt.prototype = {
    ServerVersionForOnline: null
};
_a.gu = function() {
    _a.gu.initializeBase(this)
};
_a.gu.prototype = {
    ConnectUrl: null
};
_a.gv = function() {
    _a.gv.initializeBase(this)
};
_a.gw = function() {
    _a.gw.initializeBase(this)
};
_a.gx = function() {
    _a.gx.initializeBase(this)
};
_a.gx.prototype = {
    AriaTenant: null,
    DeploymentRing: null
};
_a.gy = function() {
    _a.gy.initializeBase(this)
};
_a.gy.prototype = {
    DemoPageUrl: null
};
_a.gz = function() {
    _a.gz.initializeBase(this)
};
_a.gz.prototype = {
    LearnMoreLinkEnabled: !1
};
_a.gA = function() {
    _a.gA.initializeBase(this)
};
_a.gA.prototype = {
    MerchantManagementURL: null
};
_a.gB = function() {
    _a.gB.initializeBase(this)
};
_a.gB.prototype = {
    DefaultMaxNumberOfTrustedEntries: 0,
    DefaultMaxNumberOfBlockedEntries: 0
};
_a.i = function() {
    _a.i.initializeBase(this)
};
_a.i.prototype = {
    Enabled: !1
};
_a.gC = function() {
    _a.gC.initializeBase(this)
};
_a.gC.prototype = {
    VendorJsonScript: null
};
_a.gD = function() {
    _a.gD.initializeBase(this)
};
_a.gE = function() {
    _a.gE.initializeBase(this)
};
_a.gE.prototype = {
    IssuesServiceEndpoint: null,
    SuggestFaqsServiceEndpoint: null,
    GeFaqByIdServiceEndpoint: null,
    WriteOnlyAPIKey: null,
    ReadOnlyAPIKey: null
};
_a.gF = function() {
    _a.gF.initializeBase(this)
};
_a.gF.prototype = {
    MinimumConfidenceScore: 0
};
_a.gG = function() {
    _a.gG.initializeBase(this)
};
_a.gG.prototype = {
    AllowedManifestUrls: null
};
_a.jH = function() {
    _a.jH.initializeBase(this)
};
_a.jH.prototype = {
    IsNonMicrosoftUser: !1
};
_a.gH = function() {
    _a.gH.initializeBase(this)
};
_a.gH.prototype = {
    SkypeScriptsUrl: null,
    SkypeConsumerApiKey: null,
    SkypeEnterpriseApiKey: null,
    ShowDogfoodExperience: !1
};
_a.gI = function() {
    _a.gI.initializeBase(this)
};
_a.gI.prototype = {
    MaxAllowedConnectedAccounts: 0
};
_a.gJ = function() {
    _a.gJ.initializeBase(this)
};
_a.gJ.prototype = {
    OptionsEndpoint: null
};
_a.gK = function() {
    _a.gK.initializeBase(this)
};
_a.gK.prototype = {
    MCBingInlineImagePickerEndpoint: null,
    MCBingInlineImagePickerBaseEndpoint: null
};
_a.gL = function() {
    _a.gL.initializeBase(this)
};
_a.gL.prototype = {
    GetConceptsEndpoint: null
};
_a.gM = function() {
    _a.gM.initializeBase(this)
};
_a.gM.prototype = {
    CrossOrigin: null
};
_a.gN = function() {
    _a.gN.initializeBase(this)
};
_a.gN.prototype = {
    SubstrateSearchEndpoint: null
};
_a.gO = function() {
    _a.gO.initializeBase(this)
};
_a.gO.prototype = {
    DateThreshold: null
};
_a.gP = function() {
    _a.gP.initializeBase(this)
};
_a.gP.prototype = {
    SupportedMarkets: null,
    BingCardPickerEndpoint: null,
    BingCardPickerUrlFormat: null,
    OptionsEndpoint: null,
    BingCardPickerLocationParam: null
};
_a.gQ = function() {
    _a.gQ.initializeBase(this)
};
_a.gQ.prototype = {
    ActionsToMeasure: null
};
_a.gR = function() {
    _a.gR.initializeBase(this)
};
_a.gR.prototype = {
    WidgetBaseUrl: null,
    WidgetAppId: null,
    WidgetLoadTimeout: null
};
_a.gS = function() {
    _a.gS.initializeBase(this)
};
_a.gT = function() {
    _a.gT.initializeBase(this)
};
_a.gT.prototype = {
    SupportedMarkets: null
};
_a.gU = function() {
    _a.gU.initializeBase(this)
};
_a.gU.prototype = {
    SupportedMarkets: null
};
_a.gV = function() {
    _a.gV.initializeBase(this)
};
_a.gV.prototype = {
    SupportedMarkets: null
};
_a.gW = function() {
    _a.gW.initializeBase(this)
};
_a.gW.prototype = {
    SupportedMarkets: null
};
_a.gX = function() {
    _a.gX.initializeBase(this)
};
_a.gX.prototype = {
    SupportedMarkets: null
};
_a.gY = function() {
    _a.gY.initializeBase(this)
};
_a.gY.prototype = {
    SupportedMarkets: null
};
_a.gZ = function() {
    _a.gZ.initializeBase(this)
};
_a.gZ.prototype = {
    SupportedMarkets: null
};
_a.ha = function() {
    _a.ha.initializeBase(this)
};
_a.ha.prototype = {
    SupportedMarkets: null
};
_a.hb = function() {
    _a.hb.initializeBase(this)
};
_a.hb.prototype = {
    SupportedMarkets: null
};
_a.hc = function() {
    _a.hc.initializeBase(this)
};
_a.hc.prototype = {
    SupportedMarkets: null
};
_a.hd = function() {
    _a.hd.initializeBase(this)
};
_a.hd.prototype = {
    SupportedMarkets: null
};
_a.he = function() {
    _a.he.initializeBase(this)
};
_a.he.prototype = {
    SupportedMarkets: null
};
_a.hf = function() {
    _a.hf.initializeBase(this)
};
_a.hf.prototype = {
    SupportedMarkets: null
};
_a.hg = function() {
    _a.hg.initializeBase(this)
};
_a.hg.prototype = {
    SupportedMarkets: null
};
_a.hh = function() {
    _a.hh.initializeBase(this)
};
_a.hh.prototype = {
    SupportedMarkets: null
};
_a.hi = function() {
    _a.hi.initializeBase(this)
};
_a.hi.prototype = {
    SupportedMarkets: null
};
_a.hj = function() {
    _a.hj.initializeBase(this)
};
_a.hj.prototype = {
    OPayUrlFormat_petch: null,
    OPayUrlFormat_adeka: null,
    OPayUrlFormat_patawari: null
};
_a.hk = function() {
    _a.hk.initializeBase(this)
};
_a.hk.prototype = {
    OPayUrlFormat: null,
    OPayRefreshUrl: null
};
_a.hl = function() {
    _a.hl.initializeBase(this)
};
_a.hl.prototype = {
    OPayUrlFormat: null,
    OPayRefreshUrl: null
};
_a.hm = function() {
    _a.hm.initializeBase(this)
};
_a.hn = function() {
    _a.hn.initializeBase(this)
};
_a.ho = function() {
    _a.ho.initializeBase(this)
};
_a.ho.prototype = {
    OptionsEndpoint: null
};
_a.hp = function() {
    _a.hp.initializeBase(this)
};
_a.hp.prototype = {
    AllowedUrls: null,
    RootDomain: null
};
_a.jI = function() {
    _a.jI.initializeBase(this)
};
_a.jI.prototype = {
    SettingsJson: null
};
_a.jJ = function() {
    _a.jJ.initializeBase(this)
};
_a.jJ.prototype = {
    SettingsJson: null
};
_a.hq = function() {
    _a.hq.initializeBase(this)
};
_a.hq.prototype = {
    RedirectUrl: null
};
_a.hr = function() {
    _a.hr.initializeBase(this)
};
_a.hr.prototype = {
    SaveToCloudTimeout: 0
};
_a.hs = function() {
    _a.hs.initializeBase(this)
};
_a.hs.prototype = {
    DirectFeedbackLinkEnabled: !1
};
_a.ht = function() {
    _a.ht.initializeBase(this)
};
_a.ht.prototype = {
    UpsellUrlFormat: null
};
_a.hu = function() {
    _a.hu.initializeBase(this)
};
_a.hu.prototype = {
    UpsellUrlFormat: null
};
_a.hv = function() {
    _a.hv.initializeBase(this)
};
_a.hv.prototype = {
    UpsellUrlFormat: null
};
_a.hx = function() {
    _a.hx.initializeBase(this)
};
_a.hx.prototype = {
    DisplayId: null
};
_a.hy = function() {
    _a.hy.initializeBase(this)
};
_a.hy.prototype = {
    DisplayId: null
};
_a.hw = function() {
    _a.hw.initializeBase(this)
};
_a.hw.prototype = {
    DisplayId: null
};
_a.hz = function() {
    _a.hz.initializeBase(this)
};
_a.hz.prototype = {
    UpsellUrlFormat: null
};
_a.hA = function() {
    _a.hA.initializeBase(this)
};
_a.hA.prototype = {
    UpsellUrlFormat: null
};
_a.hB = function() {
    _a.hB.initializeBase(this)
};
_a.hB.prototype = {
    UpsellUrlFormat: null
};
_a.hC = function() {
    _a.hC.initializeBase(this)
};
_a.hC.prototype = {
    UpsellUrlFormat: null,
    RenewUrlFormat: null,
    ReactiveUrlFormat: null
};
_a.hD = function() {
    _a.hD.initializeBase(this)
};
_a.hD.prototype = {
    UpsellUrlFormat: null
};
_a.hE = function() {
    _a.hE.initializeBase(this)
};
_a.hE.prototype = {
    ActionsToProxy: null
};
_a.hF = function() {
    _a.hF.initializeBase(this)
};
_a.hF.prototype = {
    CacheSize: 0
};
_a.hG = function() {
    _a.hG.initializeBase(this)
};
_a.hG.prototype = {
    DLRequestLimit: 0,
    OnPremisesDLUpgradeAvailable: !1,
    ContactUsAddress: null,
    DLHideDelay: 0
};
_a.hH = function() {
    _a.hH.initializeBase(this)
};
_a.hH.prototype = {
    Url: null,
    IsUrlVersionSpecific: !1
};
_a.hI = function() {
    _a.hI.initializeBase(this)
};
_a.hI.prototype = {
    Url: null,
    IsUrlVersionSpecific: !1
};
_a.hJ = function() {
    _a.hJ.initializeBase(this)
};
_a.hJ.prototype = {
    Url: null,
    Filename: null,
    IsUrlVersionSpecific: !1
};
_a.hK = function() {
    _a.hK.initializeBase(this)
};
_a.hK.prototype = {
    Region: null
};
_a.hL = function() {
    _a.hL.initializeBase(this)
};
_a.hL.prototype = {
    ChromeEnabled: !1,
    MinSupportedFireFoxVersion: 0,
    FirefoxEnabled: !1,
    EdgeEnabled: !1,
    MinSupportedEdgeVersion: 0,
    SafariEnabled: !1,
    MinSupportedDesktopSafariVersion: 0,
    MinSupportedMobileSafariVersion: 0,
    DefaultEnabled: !1
};
_a.jK = function() {};
_a.jK.prototype = {
    Name: null
};
_a.hM = function() {
    _a.hM.initializeBase(this)
};
_a.hM.prototype = {
    ImmersiveReaderAppDomain: null,
    Region: null,
    ImmersiveReaderAppPath: null
};
_a.hN = function() {
    _a.hN.initializeBase(this)
};
_a.hN.prototype = {
    MaxFilesToShow: 0
};
_a.jL = function() {
    _a.jL.initializeBase(this)
};
_a.jL.prototype = {
    CacheMaxAgeInSeconds: null
};
_a.hO = function() {
    _a.hO.initializeBase(this)
};
_a.hO.prototype = {
    MaxNumberOfFilesForEmail: 0
};
_a.hP = function() {
    _a.hP.initializeBase(this)
};
_a.hP.prototype = {
    LogEntries: null
};
_a.hQ = function() {
    _a.hQ.initializeBase(this)
};
_a.hQ.prototype = {
    MaxAllowedNameLength: 0,
    MaxAllowedAliasLength: 0
};
_a.hR = function() {
    _a.hR.initializeBase(this)
};
_a.hR.prototype = {
    ClientLoggingUrl: null,
    ClientLoggingThreshold: 0
};
_a.hS = function() {
    _a.hS.initializeBase(this)
};
_a.hS.prototype = {
    AolCountryCodes: null,
    SupportedMarkets: null,
    OwaAdBarBaseUrl: null,
    OwaAdBarScript: null,
    AstScriptUrl: null,
    CountryDefaultMapMarkets: null,
    GDPRCountries: null
};
_a.hT = function() {
    _a.hT.initializeBase(this)
};
_a.hT.prototype = {
    PixelUrl: null
};
_a.hU = function() {
    _a.hU.initializeBase(this)
};
_a.hU.prototype = {
    PixelUrl: null
};
_a.hV = function() {
    _a.hV.initializeBase(this)
};
_a.hV.prototype = {
    PixelUrl: null
};
_a.hW = function() {
    _a.hW.initializeBase(this)
};
_a.hW.prototype = {
    SupportedMarkets: null
};
_a.hX = function() {
    _a.hX.initializeBase(this)
};
_a.hX.prototype = {
    SupportedMarkets: null
};
_a.hY = function() {
    _a.hY.initializeBase(this)
};
_a.hY.prototype = {
    SupportedMarkets: null
};
_a.hZ = function() {
    _a.hZ.initializeBase(this)
};
_a.hZ.prototype = {
    SupportedMarkets: null
};
_a.jM = function() {
    _a.jM.initializeBase(this)
};
_a.jM.prototype = {
    SupportedMarkets: null
};
_a.ia = function() {
    _a.ia.initializeBase(this)
};
_a.ia.prototype = {
    SupportedMarkets: null
};
_a.jN = function() {
    _a.jN.initializeBase(this)
};
_a.jN.prototype = {
    SupportedMarkets: null
};
_a.ib = function() {
    _a.ib.initializeBase(this)
};
_a.ib.prototype = {
    ConciergeUrl: null
};
_a.ic = function() {
    _a.ic.initializeBase(this)
};
_a.ic.prototype = {
    OneRMServiceUrl: null
};
_a.id = function() {
    _a.id.initializeBase(this)
};
_a.id.prototype = {
    ServiceUrl: null,
    ViewChancePercent: 0,
    ORMServiceUrl: null
};
_a.ie = function() {
    _a.ie.initializeBase(this)
};
_a.ie.prototype = {
    DaysBeforeNextFetch: 0
};
_a.ig = function() {
    _a.ig.initializeBase(this)
};
_a.ig.prototype = {
    UpsellPremiumBaseUrlFormat: null
};
_a.ih = function() {
    _a.ih.initializeBase(this)
};
_a.ih.prototype = {
    DefaultAdTargetUpsellUrlFormat: null,
    ShowAdsNumber: 0
};
_a.ii = function() {
    _a.ii.initializeBase(this)
};
_a.ii.prototype = {
    SupportedMarkets: null
};
_a.ij = function() {
    _a.ij.initializeBase(this)
};
_a.ij.prototype = {
    SupportedMarkets: null
};
_a.jO = function() {
    _a.jO.initializeBase(this)
};
_a.jO.prototype = {
    SupportedMarkets: null
};
_a.ik = function() {
    _a.ik.initializeBase(this)
};
_a.ik.prototype = {
    SupportedMarkets: null
};
_a.jP = function() {
    _a.jP.initializeBase(this)
};
_a.jP.prototype = {
    SupportedMarkets: null
};
_a.il = function(n) {
    this.bs = n
};
_a.il.prototype = {
    bs: null,
    dR: function() {
        return this.a(_a.i, "AriaUsage")
    },
    lK: function() {
        return this.a(_a.i, "TailoredPropertiesInItemViewV1_C")
    },
    bS: function() {
        return this.a(_a.i, "OwaOneNoteSupport")
    },
    gs: function() {
        return this.a(_a.i, "SuggestPublicGroupsSearch")
    },
    jR: function() {
        return this.a(_a.i, "MowaEndOfLifeNotification")
    },
    dd: function() {
        return this.a(_a.i, "RequestPersonaResponseShape")
    },
    kr: function() {
        return this.a(_a.i, "OwaLocationWellDeleteLocationsFromCache")
    },
    mh: function() {
        return this.a(_a.i, "XOWAClientTxSyncConnectedAccountsDisplayDeprecatedMessage")
    },
    ig: function() {
        return this.a(_a.i, "CollegeBasketballPromotion")
    },
    gv: function() {
        return this.a(_a.i, "SuperCharmingMeetings")
    },
    hx: function() {
        return this.a(_a.i, "BasicInvoiceV1")
    },
    w: function() {
        return this.a(_a.i, "ExtReactTaskPane")
    },
    jr: function() {
        return this.a(_a.i, "MCInlineImageDiagnostics")
    },
    hB: function() {
        return this.a(_a.i, "BookingCustomColorScheme")
    },
    iX: function() {
        return this.a(_a.i, "InsertPictureInline")
    },
    hy: function() {
        return this.a(_a.i, "BasicLodgingReservationV1")
    },
    bJ: function() {
        return this.a(_a.gO, "MCSmartReplyForEmailExperimentWithUI")
    },
    jN: function() {
        return this.a(_a.i, "MFSchedulingNoString")
    },
    ln: function() {
        return this.a(_a.i, "SubstrateSearchInstrumentation_SearchPerf")
    },
    cs: function() {
        return this.a(_a.i, "InvitationManagerErrorFiltering")
    },
    dS: function() {
        return this.a(_a.i, "AttachmentIntraOrgSafelinks")
    },
    hl: function() {
        return this.a(_a.i, "AgendaMail")
    },
    lB: function() {
        return this.a(_a.i, "SuperTriageOne")
    },
    lS: function() {
        return this.a(_a.i, "TopicQuerySearchUX")
    },
    x: function() {
        return this.a(_a.gC, "GDPRAds")
    },
    eC: function() {
        return this.a(_a.gG, "InvokeAddinInstallByManifest")
    },
    hf: function() {
        return this.a(_a.gm, "ActionInjectionMessages")
    },
    dK: function() {
        return this.a(_a.i, "AgendaMailFeedback")
    },
    kO: function() {
        return this.a(_a.i, "RelevantSearch")
    },
    O: function() {
        return this.a(_a.i, "OWAInClientStore")
    },
    ex: function() {
        return this.a(_a.i, "FrePanel")
    },
    A: function() {
        return this.a(_a.gE, "HelpShift")
    },
    lg: function() {
        return this.a(_a.hK, "ServiceRegion")
    },
    dP: function() {
        return this.a(_a.i, "AriaError")
    },
    ml: function() {
        return this.a(_a.id, "XOWAConsumerPromotion")
    },
    y: function() {
        return this.a(_a.i, "GDPRAdsOption")
    },
    H: function() {
        return this.a(_a.i, "XOWAPeopleToPicker")
    },
    el: function() {
        return this.a(_a.i, "ConnectorGenereicSenderLightningCalloutEnabled")
    },
    kz: function() {
        return this.a(_a.i, "Oxford")
    },
    b: function() {
        return this.a(_a.i, "XOWAIsConsumerUser")
    },
    q: function() {
        return this.a(_a.hL, "ServiceWorkerV2")
    },
    L: function() {
        return this.a(_a.gK, "MCBingInlineImagePicker")
    },
    kn: function() {
        return this.a(_a.i, "OWAInClientStoreFeedback")
    },
    iz: function() {
        return this.a(_a.i, "DownloadAuthenticatorFactory")
    },
    kx: function() {
        return this.a(_a.i, "OwaTimeEntityFeedback")
    },
    iZ: function() {
        return this.a(_a.i, "InstantSurfaceFiltering")
    },
    bT: function() {
        return this.a(_a.hB, "PremiumUpsellNoCC_C")
    },
    fR: function() {
        return this.a(_a.ht, "PremiumUpsellAdBar")
    },
    jE: function() {
        return this.a(_a.i, "MentionsPlaceholderB")
    },
    dw: function() {
        return this.a(_a.i, "TrapOnSendAddinCommands")
    },
    hj: function() {
        return this.a(_a.i, "AddMemberWithOnlyGuestValidation")
    },
    ij: function() {
        return this.a(_a.i, "ConferenceRoomInQuickCompose")
    },
    jO: function() {
        return this.a(_a.i, "MFTimeSimplification")
    },
    jv: function() {
        return this.a(_a.i, "MCSmartSuggestions_NoUI")
    },
    eM: function() {
        return this.a(_a.i, "LivePeopleCardsPrefetchOnly")
    },
    fo: function() {
        return this.a(_a.i, "NativeAdsPrebidAppNexusOneClickDesktopOtherOnlyAccountOnly")
    },
    M: function() {
        return this.a(_a.gL, "MCHighlightAcronyms")
    },
    kw: function() {
        return this.a(_a.i, "OwaShowActiveGroupsInDiscovery")
    },
    lf: function() {
        return this.a(_a.i, "SeparateBlockedSendersAndDomains")
    },
    bc: function() {
        return this.a(_a.i, "SuperSwitcher")
    },
    lv: function() {
        return this.a(_a.i, "SuperHashtagsPartialSearchResults")
    },
    mp: function() {
        return this.a(_a.i, "XOWAManageMailboxQuotaOptionShowUpsell")
    },
    bK: function() {
        return this.a(_a.gS, "ModernGroupsConversationReadUnread")
    },
    hH: function() {
        return this.a(_a.gr, "BookingMobileAppAvailable")
    },
    ba: function() {
        return this.a(_a.i, "MOWASharingInterruptDesignV1")
    },
    cR: function() {
        return this.a(_a.i, "O365SuiteMeControl")
    },
    hY: function() {
        return this.a(_a.i, "CalendarPeekSkypeExperiment")
    },
    fj: function() {
        return this.a(_a.i, "NativeAdsBingOneClickRefreshAccountOnly")
    },
    fL: function() {
        return this.a(_a.i, "OwaXRFArchiveAndSharedFolder")
    },
    iV: function() {
        return this.a(_a.gF, "InfoTipsSettings")
    },
    fU: function() {
        return this.a(_a.hy, "PremiumUpsellFlexPaneGearMenu")
    },
    hZ: function() {
        return this.a(_a.i, "CalendarPeopleRecommendations")
    },
    ka: function() {
        return this.a(_a.i, "OwaAttachmentsAriaEvents")
    },
    jC: function() {
        return this.a(_a.i, "MentionsFriendlyName")
    },
    dU: function() {
        return this.a(_a.go, "BookerAnalytics")
    },
    dC: function() {
        return this.a(_a.i, "XOWAClientThumbnail")
    },
    kG: function() {
        return this.a(_a.i, "PreserveMeetingHistory")
    },
    eS: function() {
        return this.a(_a.gQ, "MeasureActionsLatency")
    },
    ga: function() {
        return this.a(_a.i, "PublicGroupsSearchInInboxSearchRefiner")
    },
    eL: function() {
        return this.a(_a.i, "LivePeopleCardsForLocations")
    },
    iG: function() {
        return this.a(_a.i, "FasterPhoto")
    },
    hv: function() {
        return this.a(_a.i, "BasicFlightReservationV1")
    },
    jG: function() {
        return this.a(_a.i, "MFCategoriesSimplification")
    },
    cX: function() {
        return this.a(_a.i, "PeopleSmartCard")
    },
    fe: function() {
        return this.a(_a.i, "NativeAdsBingMobileHidePersona")
    },
    dI: function() {
        return this.a(_a.ik, "XOWATaboolaMobileOneClickNativeAds")
    },
    fh: function() {
        return this.a(_a.i, "NativeAdsBingOneClickDisplayAccountOnly")
    },
    iL: function() {
        return this.a(_a.i, "ForcePdfPreviewApi")
    },
    kM: function() {
        return this.a(_a.hF, "RecipientCacheSize")
    },
    lw: function() {
        return this.a(_a.i, "SuperNotification")
    },
    dj: function() {
        return this.a(_a.i, "SuperCleanup")
    },
    eu: function() {
        return this.a(_a.i, "EnsurePrimaryAddressForExplicitLogon")
    },
    iU: function() {
        return this.a(_a.i, "IgnoreSkipSendingMeetingInviteToGroup")
    },
    hR: function() {
        return this.a(_a.i, "BookingsSms")
    },
    fr: function() {
        return this.a(_a.i, "ODBThumbnailsInFilePicker")
    },
    bW: function() {
        return this.a(_a.i, "SuiteExtensionsAttachmentHandler")
    },
    cU: function() {
        return this.a(_a.i, "OwaFlow")
    },
    bP: function() {
        return this.a(_a.hm, "OPayFlexPane")
    },
    mb: function() {
        return this.a(_a.i, "UpdateAttPerm")
    },
    gM: function() {
        return this.a(_a.i, "UnifiedCreateGroupLearnability")
    },
    md: function() {
        return this.a(_a.i, "UseEmbeddedThumbnail")
    },
    hc: function() {
        return this.a(_a.ie, "XOWAConsumerSubscription")
    },
    bH: function() {
        return this.a(_a.i, "MCAutoHighlights_c")
    },
    gi: function() {
        return this.a(_a.hH, "RPSmimeChromeCompanionInstaller")
    },
    hW: function() {
        return this.a(_a.i, "CalendarComposePopoutExperiment")
    },
    ku: function() {
        return this.a(_a.i, "OwaOneDriveConsumerProviderForO365")
    },
    js: function() {
        return this.a(_a.gM, "MCInlineImageSettings")
    },
    U: function() {
        return this.a(_a.i, "AttachmentsClientTest")
    },
    E: function() {
        return this.a(_a.i, "SuperAutoSuggestions")
    },
    gd: function() {
        return this.a(_a.i, "RefreshOptIn")
    },
    I: function() {
        return this.a(_a.gA, "BookingsPayments")
    },
    lx: function() {
        return this.a(_a.i, "SuperSearchInContextFeedback")
    },
    dW: function() {
        return this.a(_a.i, "BookingInternalNotes")
    },
    fK: function() {
        return this.a(_a.i, "OWAUnifiedInClientStore")
    },
    lj: function() {
        return this.a(_a.i, "SingleDaySchedulingGrid")
    },
    hn: function() {
        return this.a(_a.i, "AppendXdataToSafeLinksWrappedODSPServiceGeneratedLinks")
    },
    id: function() {
        return this.a(_a.i, "ClearCalendarOOF")
    },
    jL: function() {
        return this.a(_a.i, "MFPrivateSettingSimplification")
    },
    mq: function() {
        return this.a(_a.i, "XOWAPeopleTypeAheadSearch")
    },
    k: function() {
        return this.a(_a.i, "ExtPinnableTaskPane")
    },
    eQ: function() {
        return this.a(_a.i, "MCSmartReplyForEmailExperimentWithoutUI")
    },
    hI: function() {
        return this.a(_a.i, "BookingPageRegionSettings")
    },
    kV: function() {
        return this.a(_a.i, "RPScrollLast")
    },
    gT: function() {
        return this.a(_a.i, "XOFilterReportingOptions")
    },
    bF: function() {
        return this.a(_a.i, "GroupsRegionalConfiguration")
    },
    gG: function() {
        return this.a(_a.i, "TailoredRemoveAllEventsV1")
    },
    jg: function() {
        return this.a(_a.i, "LivePeopleCardsUseAadAuthToken")
    },
    lP: function() {
        return this.a(_a.i, "ThreadsOnGroups")
    },
    hi: function() {
        return this.a(_a.i, "AddinsTelemetry")
    },
    jc: function() {
        return this.a(_a.i, "LegacyConversationalScheduling")
    },
    hq: function() {
        return this.a(_a.i, "AttachmentsWacAnonymous")
    },
    F: function() {
        return this.a(_a.i, "SuperDiagnostics")
    },
    cI: function() {
        return this.a(_a.hd, "NativeAdsBingOneClickRefreshRamp")
    },
    ir: function() {
        return this.a(_a.i, "CopyLinkToConversation")
    },
    kK: function() {
        return this.a(_a.i, "React")
    },
    fF: function() {
        return this.a(_a.i, "OwaLinkPrefetch")
    },
    ei: function() {
        return this.a(_a.i, "ClutterReasons")
    },
    cB: function() {
        return this.a(_a.gW, "NativeAdsAppNexusOneClickRamp")
    },
    kf: function() {
        return this.a(_a.i, "OwaClientLinkInBodyReplaceText")
    },
    hA: function() {
        return this.a(_a.i, "BasicRentalCarReservationV1")
    },
    ms: function() {
        return this.a(_a.i, "XOWAUserVoiceSatisfactionWidget")
    },
    hG: function() {
        return this.a(_a.gq, "BookingFeedback")
    },
    bQ: function() {
        return this.a(_a.i, "OwaConversationAttachmentWell")
    },
    bt: function() {
        return this.a(_a.i, "AddinComplianceVerification")
    },
    jM: function() {
        return this.a(_a.i, "MFRequestResponses")
    },
    hX: function() {
        return this.a(_a.i, "CalendarComposeSkypeExperiment")
    },
    z: function() {
        return this.a(_a.i, "GroupsDiscoveryInOwa")
    },
    jJ: function() {
        return this.a(_a.i, "MFFieldsSimplification")
    },
    hL: function() {
        return this.a(_a.i, "BookingSelfServicePageAuthenticated")
    },
    dx: function() {
        return this.a(_a.i, "UnifiedGroupHeaderV1")
    },
    iC: function() {
        return this.a(_a.i, "EnhancedPeopleHubInfiniteScrollSearch")
    },
    eD: function() {
        return this.a(_a.i, "IsBlackForest")
    },
    gL: function() {
        return this.a(_a.i, "TxpTeeTriggeredDonation")
    },
    iS: function() {
        return this.a(_a.i, "HelpPanel")
    },
    eh: function() {
        return this.a(_a.i, "ClutterOverridesDialogPrompt")
    },
    eT: function() {
        return this.a(_a.i, "MeetingCollabShowAttachmentsFromEventConversation")
    },
    lc: function() {
        return this.a(_a.i, "SchedulingGridGreyAreas")
    },
    gR: function() {
        return this.a(_a.i, "UserVoiceSuggestionV2")
    },
    dr: function() {
        return this.a(_a.i, "SuperSweepGreyEmailsOlderThan90Days")
    },
    lZ: function() {
        return this.a(_a.i, "UnifiedGroupFilesShowTitleAndMoreFilesLink")
    },
    gu: function() {
        return this.a(_a.i, "SuperBundle")
    },
    S: function() {
        return this.a(_a.i, "XOWAWeather")
    },
    hk: function() {
        return this.a(_a.i, "AgavePerformance")
    },
    ct: function() {
        return this.a(_a.i, "LivePeopleCardsForGroups")
    },
    fl: function() {
        return this.a(_a.i, "NativeAdsBingTwoClickDesktopOtherOnlyAccountOnly")
    },
    fA: function() {
        return this.a(_a.i, "OwaDropbox")
    },
    le: function() {
        return this.a(_a.i, "SearchSuggestionsV2")
    },
    eU: function() {
        return this.a(_a.i, "MeLike")
    },
    kH: function() {
        return this.a(_a.i, "PrintPopup")
    },
    fz: function() {
        return this.a(_a.i, "OwaClientUnsharableAttachmentImprovements")
    },
    ey: function() {
        return this.a(_a.i, "GroupDataPrefetching")
    },
    em: function() {
        return this.a(_a.i, "ConnectorSenderLightningCalloutEnabled")
    },
    ez: function() {
        return this.a(_a.i, "HashtagsFeedbackYammer")
    },
    lU: function() {
        return this.a(_a.i, "TxpEntityProcessingEmailOnlyV2")
    },
    fI: function() {
        return this.a(_a.i, "OwaOfflinePinnedSupport")
    },
    jd: function() {
        return this.a(_a.i, "ListViewActions")
    },
    ii: function() {
        return this.a(_a.i, "ConditionalAction")
    },
    l: function() {
        return this.a(_a.gH, "LWX")
    },
    kX: function() {
        return this.a(_a.i, "RPSmimeModernExtensionChrome")
    },
    cV: function() {
        return this.a(_a.i, "OwaODBAttachmentsFolder")
    },
    ej: function() {
        return this.a(_a.i, "ComposeMentionsSearchRecipients")
    },
    iI: function() {
        return this.a(_a.i, "FindUnifiedGroupsEWS")
    },
    kT: function() {
        return this.a(_a.i, "RPOofFilter")
    },
    jk: function() {
        return this.a(_a.i, "LocationSuggestionsInQuickCompose")
    },
    kk: function() {
        return this.a(_a.i, "OWAExperiment1")
    },
    gP: function() {
        return this.a(_a.i, "UnifiedGroupsHub")
    },
    eV: function() {
        return this.a(_a.i, "ModalPopupForGroupsApp_t1")
    },
    bi: function() {
        return this.a(_a.i, "ModernGroupsUnreadCountLocalLies")
    },
    mc: function() {
        return this.a(_a.i, "UrlManager")
    },
    kI: function() {
        return this.a(_a.i, "ProxyOws")
    },
    kv: function() {
        return this.a(_a.i, "OwaRoomSelectionFromPeoplePicker")
    },
    hz: function() {
        return this.a(_a.i, "BasicParcelDeliveryV1")
    },
    jq: function() {
        return this.a(_a.i, "MCHighlightsTestMode")
    },
    bv: function() {
        return this.a(_a.i, "AllPublicGroupsSearch")
    },
    kS: function() {
        return this.a(_a.i, "RPLeanPopout")
    },
    gF: function() {
        return this.a(_a.i, "TailoredPropertiesInItemViewV1")
    },
    bb: function() {
        return this.a(_a.i, "RichSharingMessages")
    },
    kB: function() {
        return this.a(_a.i, "PdfJsPreview")
    },
    iO: function() {
        return this.a(_a.i, "GroupProfilePage")
    },
    bE: function() {
        return this.a(_a.i, "GroupRelevantSearch")
    },
    lH: function() {
        return this.a(_a.i, "TailoredExperiencesV1_T")
    },
    eK: function() {
        return this.a(_a.i, "LivePeopleCards")
    },
    jI: function() {
        return this.a(_a.i, "MFDetailsStrings")
    },
    lt: function() {
        return this.a(_a.i, "SuperDeleteAndExportSearch")
    },
    dt: function() {
        return this.a(_a.i, "TailoredFoodEstablishmentReservationV1")
    },
    ds: function() {
        return this.a(_a.i, "TailoredEventReservationV1")
    },
    cZ: function() {
        return this.a(_a.i, "PrankieForUnifiedGroups")
    },
    dk: function() {
        return this.a(_a.i, "SuperClientNotifications")
    },
    C: function() {
        return this.a(_a.hp, "OWAConnectors")
    },
    bL: function() {
        return this.a(_a.i, "ModernGroupsListViewNewTriage")
    },
    dQ: function() {
        return this.a(_a.i, "AriaSamplePerf")
    },
    r: function() {
        return this.a(_a.i, "OWADiagnostics")
    },
    bO: function() {
        return this.a(_a.hk, "OPayEndpointPPE")
    },
    J: function() {
        return this.a(_a.i, "HashtagsUX")
    },
    dX: function() {
        return this.a(_a.gs, "BookingMultiCustomerServices")
    },
    kt: function() {
        return this.a(_a.i, "OwaLocationWellUseLocationsApi")
    },
    dy: function() {
        return this.a(_a.i, "WaitTrapOnSendAddinCommands")
    },
    im: function() {
        return this.a(_a.i, "ConnectorHoverExperienceOnHomePageWithoutAddButton")
    },
    cC: function() {
        return this.a(_a.gX, "NativeAdsAppNexusTwoClickDisplayRamp")
    },
    ck: function() {
        return this.a(_a.i, "BootExperienceBoost")
    },
    gE: function() {
        return this.a(_a.i, "TailoredParcelDeliveryV1")
    },
    bo: function() {
        return this.a(_a.i, "ShowBookingsOverride")
    },
    j: function() {
        return this.a(_a.i, "UnifiedGroupGuestAccess")
    },
    dv: function() {
        return this.a(_a.i, "TenantIndex")
    },
    du: function() {
        return this.a(_a.i, "TailoredShareEventV1")
    },
    bm: function() {
        return this.a(_a.hC, "PremiumUpsellNoCC_T")
    },
    gK: function() {
        return this.a(_a.i, "TopicQuerySearch")
    },
    ee: function() {
        return this.a(_a.gz, "BookingServiceWindows")
    },
    gU: function() {
        return this.a(_a.hT, "XOWAAdsBingCGif")
    },
    dA: function() {
        return this.a(_a.hZ, "XOWAAppNexusMobileOneClickNativeAds")
    },
    eO: function() {
        return this.a(_a.i, "LocationWellDesignV2")
    },
    dF: function() {
        return this.a(_a.ii, "XOWAPrebidMobileOneClickNativeAds")
    },
    iw: function() {
        return this.a(_a.i, "DocLinkSxS")
    },
    Q: function() {
        return this.a(_a.i, "XOWAConsumerFirstRun")
    },
    er: function() {
        return this.a(_a.i, "EmailReminders")
    },
    iy: function() {
        return this.a(_a.i, "DoNotForwardMeeting")
    },
    gk: function() {
        return this.a(_a.i, "RWResolveFixExperiment")
    },
    lY: function() {
        return this.a(_a.i, "UnifiedGroupFilesHubHideToggleButton")
    },
    jm: function() {
        return this.a(_a.i, "MCAvailableTime")
    },
    kd: function() {
        return this.a(_a.i, "OwaClientAnonymousLinksInBody")
    },
    fs: function() {
        return this.a(_a.i, "OnlyPeopleIndexSearchResults")
    },
    fx: function() {
        return this.a(_a.i, "OWACalendarAgendaReadingPaneView")
    },
    eR: function() {
        return this.a(_a.i, "MCUserHighlighting")
    },
    lb: function() {
        return this.a(_a.i, "SatoriInterestingCalendars")
    },
    B: function() {
        return this.a(_a.i, "NativeAdsBingUseHeaderPrebiddingDesktopOneClick")
    },
    la: function() {
        return this.a(_a.i, "Sacker")
    },
    df: function() {
        return this.a(_a.i, "SimpleComposeForBots")
    },
    m: function() {
        return this.a(_a.i, "UnifiedGroupSearchV2")
    },
    dB: function() {
        return this.a(_a.ia, "XOWABingMobileOneClickNativeAds")
    },
    lD: function() {
        return this.a(_a.i, "SxSSingleShowHideEmailButton")
    },
    hu: function() {
        return this.a(_a.i, "BasicEventReservationV1")
    },
    R: function() {
        return this.a(_a.i, "XOWAPeopleLandingPage")
    },
    gn: function() {
        return this.a(_a.i, "SendLinkClickedSignalToSP")
    },
    dh: function() {
        return this.a(_a.i, "SummaryCardRendering")
    },
    fW: function() {
        return this.a(_a.hA, "PremiumUpsellLeftNav")
    },
    eo: function() {
        return this.a(_a.gB, "ConsumerJunkEmailRuleSettings")
    },
    ge: function() {
        return this.a(_a.i, "ReplyAllByMeetingThroughSidePanel")
    },
    fN: function() {
        return this.a(_a.i, "PeoplePackageWW")
    },
    is: function() {
        return this.a(_a.i, "CreateBookingMailbox")
    },
    me: function() {
        return this.a(_a.i, "UserVoiceNpsRating")
    },
    kb: function() {
        return this.a(_a.i, "OwaCalendarSchedulingAssistantAddRecipient")
    },
    dc: function() {
        return this.a(_a.i, "ReactAgendaPlus")
    },
    bw: function() {
        return this.a(_a.i, "AtAllMentionUX")
    },
    gc: function() {
        return this.a(_a.i, "RefAttachmentDirectDownload")
    },
    cE: function() {
        return this.a(_a.gZ, "NativeAdsBingOneClickDesktopOtherOnly_Major")
    },
    G: function() {
        return this.a(_a.i, "XOWACircularAvatars")
    },
    jY: function() {
        return this.a(_a.i, "O365WaitToShowToasts")
    },
    gy: function() {
        return this.a(_a.i, "SuperForesight")
    },
    hQ: function() {
        return this.a(_a.i, "BookingsServiceSpecificUrl")
    },
    iq: function() {
        return this.a(_a.i, "ConversationLinkingForMeetings")
    },
    cS: function() {
        return this.a(_a.i, "OwaAttachWellExperimentIcon")
    },
    bu: function() {
        return this.a(_a.i, "AgendaMailSelectedCalendars")
    },
    bg: function() {
        return this.a(_a.i, "MCImage")
    },
    db: function() {
        return this.a(_a.hw, "PremiumUpsellFlexPane_T1")
    },
    jF: function() {
        return this.a(_a.i, "MentionsPlaceholderC")
    },
    gx: function() {
        return this.a(_a.i, "SuperEmailEntitySuggestions")
    },
    dO: function() {
        return this.a(_a.i, "AriaCorePerf")
    },
    ih: function() {
        return this.a(_a.i, "ComposeResponsiveness")
    },
    bB: function() {
        return this.a(_a.i, "ExtDetectedEntity")
    },
    cl: function() {
        return this.a(_a.i, "CalendarMeetingCard")
    },
    he: function() {
        return this.a(_a.i, "AccountSettingsOption")
    },
    gC: function() {
        return this.a(_a.i, "TailoredLodgingReservationV1")
    },
    ea: function() {
        return this.a(_a.gu, "BookingPageFacebookConnect")
    },
    ju: function() {
        return this.a(_a.i, "MCSmartSuggestions_AutoOpen")
    },
    jW: function() {
        return this.a(_a.i, "O365Panorama")
    },
    jx: function() {
        return this.a(_a.i, "MeetingCollabAttachmentsFromEventConversation")
    },
    ma: function() {
        return this.a(_a.i, "UnInstallLegacyUrlAppcache")
    },
    cL: function() {
        return this.a(_a.hg, "NativeAdsBingTwoClickRamp")
    },
    iM: function() {
        return this.a(_a.gD, "GetOutlookMobileGearMenu")
    },
    lk: function() {
        return this.a(_a.i, "SkypeShortCircuit")
    },
    gV: function() {
        return this.a(_a.hU, "XOWAAdsCLiveGif")
    },
    gj: function() {
        return this.a(_a.hI, "RPSmimeDefaultExtensionInstaller")
    },
    fq: function() {
        return this.a(_a.i, "O365SuiteMeFlexPane")
    },
    ix: function() {
        return this.a(_a.i, "DocumentThumbnail")
    },
    bM: function() {
        return this.a(_a.i, "ModernGroupsListViewNewTriageAlt")
    },
    fw: function() {
        return this.a(_a.i, "OwaBox")
    },
    kc: function() {
        return this.a(_a.i, "OwaClassicSlicedAttachments")
    },
    iY: function() {
        return this.a(_a.i, "InsightSettingsPage")
    },
    gh: function() {
        return this.a(_a.i, "RPResponsiveness")
    },
    gN: function() {
        return this.a(_a.i, "UnifiedGroupDragDropToGroup")
    },
    es: function() {
        return this.a(_a.i, "EmailRemindersRefresh")
    },
    mn: function() {
        return this.a(_a.i, "XOWAEnterpriseSharing")
    },
    jB: function() {
        return this.a(_a.i, "MeetingCollabCalendarAgendaReminderTable")
    },
    br: function() {
        return this.a(_a.ih, "XOWANativeAdsSettings")
    },
    bV: function() {
        return this.a(_a.hM, "ShowInImmersiveReader")
    },
    lN: function() {
        return this.a(_a.i, "TailoredViewInCalendarV1_T")
    },
    eP: function() {
        return this.a(_a.i, "MCArticleSummarization")
    },
    o: function() {
        return this.a(_a.gP, "MCSmartSuggestions")
    },
    h: function() {
        return this.a(_a.i, "FolderBasedClutter")
    },
    hV: function() {
        return this.a(_a.i, "CalendarChangeNotifications")
    },
    iQ: function() {
        return this.a(_a.i, "GroupSuggestionInCompose")
    },
    jf: function() {
        return this.a(_a.i, "LivePeopleCardsDogfoodRegionOverride")
    },
    bY: function() {
        return this.a(_a.i, "SuperDumpster")
    },
    lE: function() {
        return this.a(_a.i, "TailoredEventOptionsV2")
    },
    fm: function() {
        return this.a(_a.i, "NativeAdsBingTwoClickDisplayAccountOnly")
    },
    ib: function() {
        return this.a(_a.i, "CalendarTimeSuggestionsInSchedulingAssistant")
    },
    cv: function() {
        return this.a(_a.i, "MCInlineImageInSxS")
    },
    ch: function() {
        return this.a(_a.i, "AttachmentChangeUploadFolder")
    },
    lF: function() {
        return this.a(_a.i, "TailoredEventReservationV1_C")
    },
    T: function() {
        return this.a(_a.i, "ActionableMessagesUseAADToken")
    },
    jz: function() {
        return this.a(_a.i, "MeetingCollabBodyHtmlToPlainTextConversion")
    },
    dJ: function() {
        return this.a(_a.i, "AddinsOnSmime")
    },
    lQ: function() {
        return this.a(_a.i, "TimezonePicker")
    },
    il: function() {
        return this.a(_a.i, "ConnectorHoverExperienceOnHomePageWithAddButton")
    },
    fb: function() {
        return this.a(_a.i, "NativeAdsAppNexusTwoClickAccountOnly")
    },
    bZ: function() {
        return this.a(_a.i, "SuperUnsubscribe")
    },
    hK: function() {
        return this.a(_a.gw, "BookingPageShareViaTwitter")
    },
    ly: function() {
        return this.a(_a.i, "SuperSubstrateArchiveSearch")
    },
    eE: function() {
        return this.a(_a.i, "IsGccModerateForest")
    },
    e: function() {
        return this.a(_a.i, "AddinCommands")
    },
    W: function() {
        return this.a(_a.i, "ConsumerClientPeopleCard")
    },
    hJ: function() {
        return this.a(_a.gv, "BookingPageShareViaFacebook")
    },
    lJ: function() {
        return this.a(_a.i, "TailoredInvoiceV1_C")
    },
    bl: function() {
        return this.a(_a.i, "OwsFindPlacesGateway")
    },
    gl: function() {
        return this.a(_a.i, "SearchCacheForImplicitGroups")
    },
    jw: function() {
        return this.a(_a.i, "MCUseThumbnailApiForInlineImage")
    },
    eB: function() {
        return this.a(_a.i, "InterestingCalendarsSportPromotion")
    },
    fS: function() {
        return this.a(_a.hu, "PremiumUpsellAdBar2")
    },
    hd: function() {
        return this.a(_a.ig, "XOWAManageMailboxQuotaOption")
    },
    kC: function() {
        return this.a(_a.i, "PdfJsPreviewAsDefaultInFirefox")
    },
    ef: function() {
        return this.a(_a.i, "BootDiagnostics")
    },
    fT: function() {
        return this.a(_a.hx, "PremiumUpsellFlexPaneAdbar")
    },
    bk: function() {
        return this.a(_a.i, "OwaOnLoadNotifications")
    },
    kW: function() {
        return this.a(_a.i, "RPSmimeAvoidUsingAxForAttachmentDownloading")
    },
    ls: function() {
        return this.a(_a.i, "SuperAutoSuggestions_5CharGAL")
    },
    jK: function() {
        return this.a(_a.i, "MFMoreOptions_exp1")
    },
    gQ: function() {
        return this.a(_a.i, "UserVoiceSuggestion")
    },
    cf: function() {
        return this.a(_a.i, "XOWADownloadDomain")
    },
    lq: function() {
        return this.a(_a.i, "SubstrateSearchInstrumentation_SuggestionsPerf")
    },
    cx: function() {
        return this.a(_a.i, "ModernGroupsListViewTimeBasedHeaders")
    },
    bf: function() {
        return this.a(_a.i, "JoinedGroupsSearch")
    },
    iu: function() {
        return this.a(_a.i, "DocCollabVisioPreview")
    },
    gb: function() {
        return this.a(_a.i, "RecentActivity")
    },
    iE: function() {
        return this.a(_a.i, "ExtTrackCalendarUsage")
    },
    mm: function() {
        return this.a(_a.i, "XOWADisableNativeAdIcons")
    },
    iK: function() {
        return this.a(_a.i, "ForceEnableBingSuggestions")
    },
    ed: function() {
        return this.a(_a.i, "BookingSendMeetingInviteToCustomer")
    },
    mj: function() {
        return this.a(_a.i, "XOWAClientTxSyncDisableAddNewAccount")
    },
    mk: function() {
        return this.a(_a.ib, "XOWAConcierge")
    },
    ec: function() {
        return this.a(_a.i, "BookingSelfServiceManagement")
    },
    iW: function() {
        return this.a(_a.i, "InlinePreview")
    },
    gf: function() {
        return this.a(_a.i, "RPModernConversations")
    },
    lW: function() {
        return this.a(_a.i, "TxpGriffinShareEventCall")
    },
    cY: function() {
        return this.a(_a.i, "PrankieAndFavoritesForUnifiedGroups")
    },
    iT: function() {
        return this.a(_a.i, "HelpShiftFaqs")
    },
    ep: function() {
        return this.a(_a.i, "DisableAnimations")
    },
    hT: function() {
        return this.a(_a.i, "BookingsTrialInfo")
    },
    kR: function() {
        return this.a(_a.i, "RPFossilizedText")
    },
    bG: function() {
        return this.a(_a.i, "IrmCloudAttachments")
    },
    fC: function() {
        return this.a(_a.i, "OwaGoogleDrive")
    },
    fX: function() {
        return this.a(_a.hD, "PremiumUpsellReadingPane")
    },
    de: function() {
        return this.a(_a.hJ, "RPSmimeEdgeExtensionInstaller")
    },
    eI: function() {
        return this.a(_a.i, "LightBoxV3")
    },
    ho: function() {
        return this.a(_a.i, "AttachmentsDualAttachEntries")
    },
    hC: function() {
        return this.a(_a.i, "BookingCustomerConsent")
    },
    mi: function() {
        return this.a(_a.i, "XOWAClientTxSyncDeprecateConnectedAccounts")
    },
    mr: function() {
        return this.a(_a.i, "XOWASeparateSafeLists")
    },
    fY: function() {
        return this.a(_a.i, "PromptUnblockPopup")
    },
    dG: function() {
        return this.a(_a.ij, "XOWAPrebidMobileOneClickNativeAds_ROW")
    },
    cd: function() {
        return this.a(_a.hQ, "UnifiedGroupMaxLengths")
    },
    eA: function() {
        return this.a(_a.i, "InClientLinkFromEmailClick")
    },
    jh: function() {
        return this.a(_a.i, "LivePeopleCardsUseChatClientFallbackInsteadOfSkypePopup")
    },
    iA: function() {
        return this.a(_a.i, "EdgePromoChrome")
    },
    cj: function() {
        return this.a(_a.gx, "BookingsAria")
    },
    bX: function() {
        return this.a(_a.i, "SuperAutoSuggestionsWithGateway")
    },
    kY: function() {
        return this.a(_a.i, "RPSmimeModernExtensionEdge")
    },
    fv: function() {
        return this.a(_a.i, "OwaAttachmentsSharingPermissions")
    },
    ev: function() {
        return this.a(_a.i, "ExtDisableLegacyInMouseRead")
    },
    hN: function() {
        return this.a(_a.i, "BookingsHomePageStatistics")
    },
    co: function() {
        return this.a(_a.i, "GroupHeaderRedesign")
    },
    hP: function() {
        return this.a(_a.i, "BookingsReportDownload")
    },
    bq: function() {
        return this.a(_a.i, "TailoredFeedbackTicketV1")
    },
    dE: function() {
        return this.a(_a.i, "XOWAForceDownloadDomain")
    },
    eY: function() {
        return this.a(_a.gU, "NativeAdsAppNexusFallbacktoBingMobile")
    },
    dY: function() {
        return this.a(_a.i, "BookingMultiDay")
    },
    cP: function() {
        return this.a(_a.i, "NativeAdsUsePrebidForAppNexusOneClickDesktop")
    },
    fZ: function() {
        return this.a(_a.hE, "ProxyActionsToOwsGateway")
    },
    ek: function() {
        return this.a(_a.i, "ConnectorActionCardsV1")
    },
    di: function() {
        return this.a(_a.i, "SuperAutoReadInUnreadView")
    },
    iP: function() {
        return this.a(_a.i, "GroupsFRE_t2")
    },
    ia: function() {
        return this.a(_a.i, "CalendarTimeSuggestions")
    },
    dm: function() {
        return this.a(_a.i, "SuperNewsAndPromos")
    },
    iv: function() {
        return this.a(_a.i, "DocCollabWacSafetySwitch")
    },
    gg: function() {
        return this.a(_a.i, "RPRehydrateReparent")
    },
    kF: function() {
        return this.a(_a.i, "PreinstalledAddinTeachingUx_T1")
    },
    gJ: function() {
        return this.a(_a.i, "TailoredViewInCalendarV1")
    },
    cu: function() {
        return this.a(_a.gI, "MaxConnectedAccounts")
    },
    dl: function() {
        return this.a(_a.i, "SuperFocusedAllPivot")
    },
    hm: function() {
        return this.a(_a.i, "AgendaMailIntroduction")
    },
    kl: function() {
        return this.a(_a.i, "OwaFrequentLocations")
    },
    V: function() {
        return this.a(_a.i, "ConsensusScheduling")
    },
    gm: function() {
        return this.a(_a.i, "SenderAddIns")
    },
    eW: function() {
        return this.a(_a.i, "MOWAStarReadingPane")
    },
    eq: function() {
        return this.a(_a.i, "DisableModernGroupsRequestButton")
    },
    gH: function() {
        return this.a(_a.i, "TailoredRentalCarReservationV1")
    },
    fn: function() {
        return this.a(_a.i, "NativeAdsBingUseHeaderPrebiddingMobileOneClick")
    },
    fB: function() {
        return this.a(_a.i, "OwaFacebookAttachments")
    },
    Y: function() {
        return this.a(_a.i, "MessageSafetyReporting")
    },
    fi: function() {
        return this.a(_a.i, "NativeAdsBingOneClickDisplayRefreshAccountOnly")
    },
    fV: function() {
        return this.a(_a.hz, "PremiumUpsellGearMenu")
    },
    bz: function() {
        return this.a(_a.i, "CalendarFeeds")
    },
    fM: function() {
        return this.a(_a.i, "OwaXRFRemoteExecute")
    },
    jQ: function() {
        return this.a(_a.i, "ModernGroupsUserSessionRefresh")
    },
    lu: function() {
        return this.a(_a.i, "SuperEmptyPost")
    },
    cr: function() {
        return this.a(_a.i, "HashtagsForCompass")
    },
    et: function() {
        return this.a(_a.i, "EnhancedPeopleHub")
    },
    dV: function() {
        return this.a(_a.gp, "BookingAdditonalInformationRTF")
    },
    gZ: function() {
        return this.a(_a.hY, "XOWAAdsYield")
    },
    kU: function() {
        return this.a(_a.i, "RPSafeLink")
    },
    cg: function() {
        return this.a(_a.i, "ActionableMessages")
    },
    cO: function() {
        return this.a(_a.hi, "NativeAdsPrebidAppNexusOneClickDesktopOtherOnly_ROW")
    },
    lO: function() {
        return this.a(_a.i, "ThirdPartyAnalytics")
    },
    ll: function() {
        return this.a(_a.i, "SmartPrefetch")
    },
    dn: function() {
        return this.a(_a.i, "SuperRestoreAction")
    },
    mg: function() {
        return this.a(_a.i, "XOWAAdsNativeAdsShowDisplay")
    },
    jX: function() {
        return this.a(_a.i, "O365ThemePanel")
    },
    t: function() {
        return this.a(_a.i, "Schedules")
    },
    lo: function() {
        return this.a(_a.i, "SubstrateSearchInstrumentation_SearchResultClicks")
    },
    bC: function() {
        return this.a(_a.i, "GroupDataCaching")
    },
    jn: function() {
        return this.a(_a.i, "MCAvailableTimeRP")
    },
    kP: function() {
        return this.a(_a.i, "RPAttachmentLeanPopout")
    },
    hM: function() {
        return this.a(_a.i, "BookingSelfServicePageSearchIndexability")
    },
    bD: function() {
        return this.a(_a.i, "GroupHeaderV3")
    },
    ja: function() {
        return this.a(_a.i, "InterestingCalendarsCalendarModulePromotion")
    },
    hh: function() {
        return this.a(_a.gn, "AddCorrelationVector")
    },
    it: function() {
        return this.a(_a.i, "DisableNativePdfViewerInChrome")
    },
    dT: function() {
        return this.a(_a.i, "AttachmentsThumbnailViewInCompose")
    },
    fk: function() {
        return this.a(_a.i, "NativeAdsBingTwoClickAccountOnly")
    },
    cJ: function() {
        return this.a(_a.he, "NativeAdsBingTwoClickDesktopOtherOnly_Major")
    },
    gr: function() {
        return this.a(_a.i, "SplitSingleDaySchedulingGrid")
    },
    en: function() {
        return this.a(_a.i, "ConnectorSettingsLightningCalloutEnabled")
    },
    eX: function() {
        return this.a(_a.gT, "NativeAdsAppNexusFallbacktoBingDesktop")
    },
    go: function() {
        return this.a(_a.i, "ShowClientWatson")
    },
    bp: function() {
        return this.a(_a.i, "TailoredExperiencesV1")
    },
    dp: function() {
        return this.a(_a.i, "SuperSubstrateSearch")
    },
    ft: function() {
        return this.a(_a.hl, "OPayEndpointProd")
    },
    gB: function() {
        return this.a(_a.i, "TailoredFlightsV1")
    },
    lr: function() {
        return this.a(_a.i, "SuiteExtensionsAzureADStorage")
    },
    fD: function() {
        return this.a(_a.hq, "OWAInClientStoreDebug")
    },
    cF: function() {
        return this.a(_a.ha, "NativeAdsBingOneClickDisplayRamp")
    },
    eF: function() {
        return this.a(_a.i, "ItemAttachment")
    },
    cm: function() {
        return this.a(_a.i, "EventCoauthoring")
    },
    ie: function() {
        return this.a(_a.i, "ClutterUserVoiceSurvey")
    },
    hb: function() {
        return this.a(_a.ic, "XOWAConsumerFirstRun1RM")
    },
    iB: function() {
        return this.a(_a.i, "EdgePromoFirefox")
    },
    dM: function() {
        return this.a(_a.i, "AllPublicGroupsRelevantSearch")
    },
    ca: function() {
        return this.a(_a.i, "TailoredInvoiceV1")
    },
    lp: function() {
        return this.a(_a.i, "SubstrateSearchInstrumentation_SuggestionsInteractions")
    },
    iF: function() {
        return this.a(_a.i, "ExtTrackUsage")
    },
    fg: function() {
        return this.a(_a.i, "NativeAdsBingOneClickDesktopOtherOnlyAccountOnly")
    },
    X: function() {
        return this.a(_a.i, "ConversationalSchedulingHighlight")
    },
    jy: function() {
        return this.a(_a.i, "MeetingCollabAttachmentsInPeek")
    },
    je: function() {
        return this.a(_a.i, "LivePeopleCardsBootstrapperAriaTelemetry")
    },
    hE: function() {
        return this.a(_a.i, "BookingCustomTimeSlotInterval")
    },
    hU: function() {
        return this.a(_a.i, "BookingTwilioIntegration")
    },
    io: function() {
        return this.a(_a.i, "ConsumerSocialConnect")
    },
    eG: function() {
        return this.a(_a.i, "JoinedGroupsRelevantSearch")
    },
    fc: function() {
        return this.a(_a.i, "NativeAdsAppNexusTwoClickDisplayAccountOnly")
    },
    fu: function() {
        return this.a(_a.ho, "OutlookServiceOptionsManager")
    },
    lm: function() {
        return this.a(_a.i, "SubstrateSearchInstrumentation_SearchInteractions")
    },
    kZ: function() {
        return this.a(_a.i, "RWSelfAsYou")
    },
    kA: function() {
        return this.a(_a.i, "PALDogfoodEnforcement")
    },
    eN: function() {
        return this.a(_a.i, "LocalEvents")
    },
    iJ: function() {
        return this.a(_a.i, "FloatingTasksWidget")
    },
    kN: function() {
        return this.a(_a.i, "RelevanceGroupRankingInfoTips")
    },
    mo: function() {
        return this.a(_a.i, "XOWAHolidayCalendars")
    },
    hs: function() {
        return this.a(_a.i, "AttendeeTypeManagementInMeetingForm")
    },
    lC: function() {
        return this.a(_a.i, "SuperUseJsonNetSerializer")
    },
    ew: function() {
        return this.a(_a.i, "FindPeopleEntityFeedback")
    },
    bI: function() {
        return this.a(_a.i, "MCQuickReply")
    },
    kD: function() {
        return this.a(_a.i, "PdfPrint")
    },
    kQ: function() {
        return this.a(_a.i, "RPDefaultReplyOption")
    },
    bU: function() {
        return this.a(_a.i, "SaveToOneNote")
    },
    be: function() {
        return this.a(_a.i, "AttachmentsFilePicker")
    },
    gX: function() {
        return this.a(_a.hW, "XOWAAdsSmall")
    },
    kJ: function() {
        return this.a(_a.i, "ProxyOwsPrime")
    },
    gW: function() {
        return this.a(_a.hV, "XOWAAdsLinkedInInsightTag")
    },
    cG: function() {
        return this.a(_a.hb, "NativeAdsBingOneClickDisplayRefreshRamp")
    },
    gt: function() {
        return this.a(_a.i, "SuperArchiveSearch")
    },
    ik: function() {
        return this.a(_a.i, "ConnectorHoverExperienceOnHomePageControl")
    },
    gw: function() {
        return this.a(_a.i, "SuperDeletedItemsSort")
    },
    cT: function() {
        return this.a(_a.i, "OwaClientAssignLabelInComposeView")
    },
    ko: function() {
        return this.a(_a.i, "OWAInClientStoreMenuTitle2")
    },
    eJ: function() {
        return this.a(_a.i, "Like")
    },
    d: function() {
        return this.a(_a.hS, "XOWAAds")
    },
    ic: function() {
        return this.a(_a.i, "ClassicAttachmentsProgressBar")
    },
    cn: function() {
        return this.a(_a.i, "FlightAndScriptVersionOption")
    },
    jH: function() {
        return this.a(_a.i, "MFCharmSimplification")
    },
    lR: function() {
        return this.a(_a.i, "TopicBasedPeopleSuggestions")
    },
    gD: function() {
        return this.a(_a.i, "TailoredParcelDeliveryStatusV1")
    },
    cH: function() {
        return this.a(_a.hc, "NativeAdsBingOneClickRamp")
    },
    lX: function() {
        return this.a(_a.hN, "UnifiedGroupFilesFileListSize")
    },
    dz: function() {
        return this.a(_a.i, "WopiClient")
    },
    dN: function() {
        return this.a(_a.i, "AppointmentSchedulingGrid")
    },
    f: function() {
        return this.a(_a.i, "EntitySharing")
    },
    ip: function() {
        return this.a(_a.i, "ContactCleanupV2")
    },
    eg: function() {
        return this.a(_a.i, "BootNetworkTrace")
    },
    jt: function() {
        return this.a(_a.i, "MCLinkPreviewMetadata")
    },
    g: function() {
        return this.a(_a.i, "PrefetchThrottler")
    },
    fE: function() {
        return this.a(_a.i, "OwaLightning")
    },
    hr: function() {
        return this.a(_a.i, "AttachmentViewModelRefactoring1")
    },
    iD: function() {
        return this.a(_a.i, "ExtSSO")
    },
    da: function() {
        return this.a(_a.hv, "PremiumUpsellAdBarBlock")
    },
    gO: function() {
        return this.a(_a.hO, "UnifiedGroupFilesHubMaxFilesEmail")
    },
    fP: function() {
        return this.a(_a.i, "PeopleSmartLists")
    },
    hO: function() {
        return this.a(_a.i, "BookingShowTimeSlotsInBusinessTimeZone")
    },
    K: function() {
        return this.a(_a.gJ, "MCAutoHighlights")
    },
    ce: function() {
        return this.a(_a.i, "XOWAAdsDefaultPG")
    },
    gS: function() {
        return this.a(_a.hR, "XOClientLoggingProduction")
    },
    hS: function() {
        return this.a(_a.i, "BookingStaffMembershipInfo")
    },
    bj: function() {
        return this.a(_a.i, "OwaClientLinkInBodySharingTips")
    },
    fQ: function() {
        return this.a(_a.hs, "PersonalSchedulingPage")
    },
    lL: function() {
        return this.a(_a.i, "TailoredPropertiesInItemViewV1_T")
    },
    gA: function() {
        return this.a(_a.i, "SuperTriageTwo")
    },
    cD: function() {
        return this.a(_a.gY, "NativeAdsAppNexusTwoClickRamp")
    },
    jo: function() {
        return this.a(_a.i, "MCHighlightAcronymsDebugMode")
    },
    ji: function() {
        return this.a(_a.i, "LivePeopleCardsUseNewApi")
    },
    N: function() {
        return this.a(_a.gN, "MCReplyWith")
    },
    gq: function() {
        return this.a(_a.i, "SPDocLinkPreview")
    },
    hD: function() {
        return this.a(_a.i, "BookingCustomQuestions")
    },
    kh: function() {
        return this.a(_a.i, "OwaClientOwaSearchInFilePicker")
    },
    iH: function() {
        return this.a(_a.i, "Filmstrip")
    },
    ke: function() {
        return this.a(_a.i, "OwaClientConsumerGroupUX")
    },
    hg: function() {
        return this.a(_a.i, "ActiveSyncSuppressReadReceipt")
    },
    cM: function() {
        return this.a(_a.i, "NativeAdsBingUseHeaderPrebiddingDesktopTwoClick")
    },
    s: function() {
        return this.a(_a.hr, "OwaSaveToCloudImprovements")
    },
    bh: function() {
        return this.a(_a.i, "ModernGroupsDirectDelivery")
    },
    lV: function() {
        return this.a(_a.i, "TxpGriffinServiceCalls")
    },
    jU: function() {
        return this.a(_a.i, "NotificationBroker")
    },
    bR: function() {
        return this.a(_a.i, "OwaLocationWellRanking")
    },
    kj: function() {
        return this.a(_a.i, "OwaDeferrableSlabs")
    },
    lI: function() {
        return this.a(_a.i, "TailoredFoodEstablishmentReservationV1_C")
    },
    dZ: function() {
        return this.a(_a.gt, "BookingOnlineMeetingEnabledServices")
    },
    mf: function() {
        return this.a(_a.i, "UseXAnchorMailboxHeader")
    },
    cW: function() {
        return this.a(_a.i, "OWAStoreRedirectURLToBlackForest")
    },
    hw: function() {
        return this.a(_a.i, "BasicFoodEstablishmentReservationV1")
    },
    Z: function() {
        return this.a(_a.gR, "MiniMavenWidget")
    },
    fH: function() {
        return this.a(_a.i, "OwaLocationWellInferences")
    },
    jS: function() {
        return this.a(_a.i, "MSOnlineServiceProbe")
    },
    cq: function() {
        return this.a(_a.i, "HashtagsFeedbackUV")
    },
    cN: function() {
        return this.a(_a.hh, "NativeAdsPrebidAppNexusOneClickDesktopOtherOnly_Major")
    },
    jp: function() {
        return this.a(_a.i, "MCHighlightsPopupV2")
    },
    kE: function() {
        return this.a(_a.i, "PeoplePanePackage2")
    },
    jj: function() {
        return this.a(_a.i, "LocalEventsFirstRun")
    },
    p: function() {
        return this.a(_a.i, "PeopleProfilePage")
    },
    gI: function() {
        return this.a(_a.i, "TailoredViewEvent")
    },
    fO: function() {
        return this.a(_a.i, "PeopleProfileWorkingWith")
    },
    cw: function() {
        return this.a(_a.i, "MeetingCollabShowLocalLiesForReplyAllAttachments")
    },
    fa: function() {
        return this.a(_a.i, "NativeAdsAppNexusOneClickDisplayAccountOnly")
    },
    P: function() {
        return this.a(_a.hG, "RequestEligibleDistributionGroups")
    },
    cc: function() {
        return this.a(_a.i, "UnifiedGroupGuestAccessLearnability")
    },
    jZ: function() {
        return this.a(_a.hn, "OPayModelBEndpoint")
    },
    cb: function() {
        return this.a(_a.hP, "UnifiedGroupFilesLogFileIds")
    },
    fp: function() {
        return this.a(_a.i, "O365Settings")
    },
    by: function() {
        return this.a(_a.gy, "BookingSelfService")
    },
    jD: function() {
        return this.a(_a.i, "MentionsPlaceholderA")
    },
    jV: function() {
        return this.a(_a.i, "O365Miniatures")
    },
    km: function() {
        return this.a(_a.i, "OWAInClientStoreDefaultAddins")
    },
    ht: function() {
        return this.a(_a.i, "AutoRefreshAction")
    },
    c: function() {
        return this.a(_a.i, "ModernGroups")
    },
    fJ: function() {
        return this.a(_a.i, "OwaSlicedAttachments")
    },
    lh: function() {
        return this.a(_a.i, "ServiceWorker")
    },
    ki: function() {
        return this.a(_a.i, "OwaClientSharingDialogOnMailSend")
    },
    dg: function() {
        return this.a(_a.i, "StaticGroupSearchRefiner")
    },
    dH: function() {
        return this.a(_a.i, "XOWASharing")
    },
    dq: function() {
        return this.a(_a.i, "SuperSweepGreyEmailsOlderThan180Days")
    },
    lA: function() {
        return this.a(_a.i, "SuperSweepGreyEmailsOlderThan365Days")
    },
    bA: function() {
        return this.a(_a.i, "DefaultMeetingDuration")
    },
    lG: function() {
        return this.a(_a.i, "TailoredExperiencesV1_C")
    },
    jl: function() {
        return this.a(_a.i, "LocationWellFetchAvailability")
    },
    fy: function() {
        return this.a(_a.i, "OwaClientSharingTipsWithoutSharingInfo")
    },
    ky: function() {
        return this.a(_a.i, "OwsFindMeetingTimesGateway")
    },
    lT: function() {
        return this.a(_a.i, "TrapOnSendFullComposeEnabled")
    },
    D: function() {
        return this.a(_a.i, "QuickCapture")
    },
    lM: function() {
        return this.a(_a.i, "TailoredShareEventV1_C")
    },
    hF: function() {
        return this.a(_a.i, "BookingDropDownCustomQuestions")
    },
    ks: function() {
        return this.a(_a.i, "OwaLocationWellMultipleLocations")
    },
    bd: function() {
        return this.a(_a.i, "UserVoiceTicketV1")
    },
    u: function() {
        return this.a(_a.i, "MentionsUX")
    },
    jb: function() {
        return this.a(_a.i, "JoinedGroupsSearchHitsCountInInboxSearchRefiner")
    },
    gY: function() {
        return this.a(_a.hX, "XOWAAdsWide")
    },
    bn: function() {
        return this.a(_a.i, "RmsV2UI")
    },
    cK: function() {
        return this.a(_a.hf, "NativeAdsBingTwoClickDisplayRamp")
    },
    ci: function() {
        return this.a(_a.i, "AttachmentsProgressBar")
    },
    dD: function() {
        return this.a(_a.i, "XOWADeepLinkMail")
    },
    bN: function() {
        return this.a(_a.hj, "OPayEndpointDev")
    },
    eH: function() {
        return this.a(_a.i, "JoinedGroupsSearchInInboxSearchRefiner")
    },
    hp: function() {
        return this.a(_a.i, "AttachmentsSharePointDogfood")
    },
    dL: function() {
        return this.a(_a.i, "AgendaMailWeatherDisplay")
    },
    i: function() {
        return this.a(_a.i, "PerfExperiment")
    },
    lz: function() {
        return this.a(_a.i, "SuperSubstrateSearchEmptyPost")
    },
    iN: function() {
        return this.a(_a.i, "GroupHeaderSites")
    },
    ha: function() {
        return this.a(_a.i, "XOWAClientConnectedAccountsVnext")
    },
    jT: function() {
        return this.a(_a.i, "NewGroupFromInboxCommandBar")
    },
    li: function() {
        return this.a(_a.i, "ShowAppCacheDiagnostic")
    },
    kL: function() {
        return this.a(_a.i, "RecentAttachmentsInFilePicker")
    },
    eb: function() {
        return this.a(_a.i, "BookingPersonalCalendars")
    },
    eZ: function() {
        return this.a(_a.i, "NativeAdsAppNexusOneClickAccountOnly")
    },
    n: function() {
        return this.a(_a.i, "XOWAAdsNativeAdsInAccountOnlyFlights")
    },
    ff: function() {
        return this.a(_a.i, "NativeAdsBingOneClickAccountOnly")
    },
    fd: function() {
        return this.a(_a.i, "NativeAdsBigSwitchOff")
    },
    cA: function() {
        return this.a(_a.gV, "NativeAdsAppNexusOneClickDisplayRamp")
    },
    cy: function() {
        return this.a(_a.i, "MowaInternalFeedback")
    },
    bx: function() {
        return this.a(_a.i, "BookerModule")
    },
    iR: function() {
        return this.a(_a.i, "GroupSyncDeliveryDisabled")
    },
    kg: function() {
        return this.a(_a.i, "OwaClientOneDriveMruInFilePicker")
    },
    ld: function() {
        return this.a(_a.i, "SearchAddressListIndex")
    },
    kq: function() {
        return this.a(_a.i, "OwaLocationWellAddRoomShowsAllRoomsOption")
    },
    cp: function() {
        return this.a(_a.i, "GroupsFRE_t1")
    },
    fG: function() {
        return this.a(_a.i, "OwaLocationWellAvailability")
    },
    cQ: function() {
        return this.a(_a.i, "O365NFDPanel")
    },
    jP: function() {
        return this.a(_a.i, "ModernAttachments")
    },
    gz: function() {
        return this.a(_a.i, "SuperReact")
    },
    kp: function() {
        return this.a(_a.i, "OwaLocationEntityFeedback")
    },
    gp: function() {
        return this.a(_a.i, "SimpleLeftNavGroup")
    },
    cz: function() {
        return this.a(_a.i, "MOWASharingInterruptDesignV2")
    },
    v: function() {
        return this.a(_a.i, "RecipientWellPeopleIndexSearch")
    },
    jA: function() {
        return this.a(_a.i, "MeetingCollabCalendarAgendaReminder_C")
    },
    a: function(n, t) {
        if (t in this.bs) return this.bs[t];
        else {
            var i;
            return i = new n, i.Name = t, i
        }
    }
};
_a.jR.registerClass("_a.jR");
_a.cs.registerClass("_a.cs");
_a.ei.registerClass("_a.ei");
_a.cI.registerClass("_a.cI");
_a.bZ.registerClass("_a.bZ");
_a.dA.registerClass("_a.dA", _a.bZ);
_a.di.registerClass("_a.di", null, _a.kK);
_a.bk.registerClass("_a.bk", null, _a.eY);
_a.ey.registerClass("_a.ey");
_a.U.registerClass("_a.U");
_a.cE.registerClass("_a.cE");
_a.dt.registerClass("_a.dt");
_a.eZ.registerClass("_a.eZ");
_a.eA.registerClass("_a.eA");
_a.dh.registerClass("_a.dh");
_a.fa.registerClass("_a.fa");
_a.df.registerClass("_a.df");
_a.dZ.registerClass("_a.dZ");
_a.dv.registerClass("_a.dv");
_a.fV.registerClass("_a.fV", null, _a.fD);
_a.dn.registerClass("_a.dn", _j.S, IActionBase);
_a.cj.registerClass("_a.cj", null, _a.q);
_a.bp.registerClass("_a.bp", _j.S);
_a.ip.registerClass("_a.ip");
_a.dX.registerClass("_a.dX");
_a.jQ.registerClass("_a.jQ");
_a.iy.registerClass("_a.iy", _a.ip);
_a.it.registerClass("_a.it");
_a.cQ.registerClass("_a.cQ", null, _a.fB);
_a.dY.registerClass("_a.dY");
_a.eC.registerClass("_a.eC");
_a.fs.registerClass("_a.fs", null, _a.eO);
_a.jS.registerClass("_a.jS");
_a.eE.registerClass("_a.eE", _a.jS);
_a.dl.registerClass("_a.dl", _a.jS);
_a.jq.registerClass("_a.jq", _a.jS);
_a.bG.registerClass("_a.bG");
_a.dr.registerClass("_a.dr", null, _a.z);
_a.R.registerClass("_a.R");
_a.R.prototype.toString = _a.R.prototype.toString;
_a.jT.registerClass("_a.jT");
_a.G.registerClass("_a.G");
_a.cw.registerClass("_a.cw", null, _a.kk);
CoreFrameworkComponent.registerClass("CoreFrameworkComponent", null, _a.kj, _j.ce);
_a.eD.registerClass("_a.eD");
_a.iA.registerClass("_a.iA", _a.eC);
_a.ec.registerClass("_a.ec", _j.bY);
_a.bW.registerClass("_a.bW");
_a.iB.registerClass("_a.iB");
_a.f.registerClass("_a.f", _j.K);
_a.r.registerClass("_a.r", _j.S);
_a.ca.registerClass("_a.ca");
_a.dI.registerClass("_a.dI");
_a.dp.registerClass("_a.dp");
_a.dH.registerClass("_a.dH");
_a.cP.registerClass("_a.cP");
_a.dq.registerClass("_a.dq");
_a.da.registerClass("_a.da");
_a.eB.registerClass("_a.eB");
_a.cS.registerClass("_a.cS");
_a.ea.registerClass("_a.ea");
_a.br.registerClass("_a.br");
_a.eg.registerClass("_a.eg");
_a.dw.registerClass("_a.dw");
_a.cn.registerClass("_a.cn");
_a.fz.registerClass("_a.fz");
_a.cU.registerClass("_a.cU");
_a.dP.registerClass("_a.dP");
_a.cd.registerClass("_a.cd");
_a.dC.registerClass("_a.dC");
_a.dD.registerClass("_a.dD");
_a.bq.registerClass("_a.bq");
_a.el.registerClass("_a.el");
_a.cA.registerClass("_a.cA");
_a.en.registerClass("_a.en");
_a.ep.registerClass("_a.ep");
_a.eq.registerClass("_a.eq");
_a.bP.registerClass("_a.bP");
_a.fe.registerClass("_a.fe");
_a.jv.registerClass("_a.jv");
_a.cW.registerClass("_a.cW");
_a.fh.registerClass("_a.fh");
_a.dU.registerClass("_a.dU");
_a.fi.registerClass("_a.fi");
_a.cp.registerClass("_a.cp");
_a.dk.registerClass("_a.dk");
_a.ev.registerClass("_a.ev");
_a.cC.registerClass("_a.cC");
_a.fm.registerClass("_a.fm");
_a.fy.registerClass("_a.fy", null, _a.x, _a.e);
_a.cb.registerClass("_a.cb", null, _a.e);
_a.bX.registerClass("_a.bX");
_a.ch.registerClass("_a.ch");
_a.bn.registerClass("_a.bn", null, _a.cy);
_a.dx.registerClass("_a.dx", _a.bn);
_a.cr.registerClass("_a.cr");
_a.dz.registerClass("_a.dz");
_a.bC.registerClass("_a.bC", _a.fN.$$(_j.l));
_a.fQ.registerClass("_a.fQ", null, _a.bv);
_a.kZ.registerClass("_a.kZ");
_a.gd.registerClass("_a.gd", _a.ec, _j.bs, Sys.IDisposable);
_a.co.registerClass("_a.co", _a.gd);
_a.iW.registerClass("_a.iW", _a.eC);
_a.fR.registerClass("_a.fR", _a.r);
_a.fW.registerClass("_a.fW", null, _a.cL);
_a.dg.registerClass("_a.dg", _ff.n);
_a.dg.a.registerClass("_a.dg.a", _j.q);
_a.jf.registerClass("_a.jf", _j.S, _j.M, _j.bs, Sys.IDisposable, _j.cg, _a.cG);
_a.j.registerClass("_a.j", _j.S, _a.cG, _j.cg);
_a.fU.registerClass("_a.fU", null, _a.eW);
_a.F.m.registerClass("_a.F.m");
_a.em.registerClass("_a.em", null, _a.dy);
_a.er.registerClass("_a.er");
_a.eu.a.registerClass("_a.eu.a");
_a.a.registerClass("_a.a", null, _j.cr);
_a.bO.registerClass("_a.bO");
_a.bt.registerClass("_a.bt");
_a.jl.registerClass("_a.jl", _a.bt);
_a.jm.registerClass("_a.jm", _a.bt);
_a.l.registerClass("_a.l");
_a.jn.registerClass("_a.jn", _a.bt);
_a.eo.registerClass("_a.eo", _a.bn);
_a.fd.registerClass("_a.fd");
_a.js.registerClass("_a.js");
_a.fZ.registerClass("_a.fZ", _a.gd, _a.S, _j.bs, Sys.IDisposable);
_a.gc.registerClass("_a.gc", null, _a.E, _a.km);
_a.ds.registerClass("_a.ds");
_a.fl.registerClass("_a.fl");
_a.cX.registerClass("_a.cX");
_a.u.registerClass("_a.u");
_a.J.registerClass("_a.J");
_a.fk.registerClass("_a.fk", _a.bt);
_a.bl.registerClass("_a.bl", _j.S);
_a.dB.registerClass("_a.dB", null, _no.h);
_a.ja.registerClass("_a.ja", _no.k);
_a.ja.prototype.toString = _no.k.prototype.toString;
_a.jb.registerClass("_a.jb", _no.k);
_a.jb.prototype.toString = _no.k.prototype.toString;
_a.lf.registerClass("_a.lf", null, _no.r);
_a.jc.registerClass("_a.jc", _a.lf);
_a.jd.registerClass("_a.jd", _a.lf);
_a.cK.registerClass("_a.cK");
_a.cT.registerClass("_a.cT");
_a.dJ.registerClass("_a.dJ");
_a.ef.registerClass("_a.ef");
_a.jY.registerClass("_a.jY");
_a.eI.registerClass("_a.eI");
_a.eK.registerClass("_a.eK");
_a.eL.registerClass("_a.eL", _a.jY);
_a.eN.registerClass("_a.eN", _a.jY);
_a.eJ.registerClass("_a.eJ");
_a.cx.registerClass("_a.cx");
_a.cm.registerClass("_a.cm", _a.jY);
_a.ed.registerClass("_a.ed");
_a.eM.registerClass("_a.eM");
_a.dd.registerClass("_a.dd");
_a.ee.registerClass("_a.ee");
_a.dK.registerClass("_a.dK");
_a.bM.registerClass("_a.bM");
_a.eH.registerClass("_a.eH");
OfflineDiagnostics.registerClass("OfflineDiagnostics");
_a.eR.registerClass("_a.eR");
_a.bY.registerClass("_a.bY");
_a.eT.registerClass("_a.eT", _a.bY);
_a.bx.registerClass("_a.bx", _a.bY);
_a.fJ.registerClass("_a.fJ", _a.bt);
_a.eV.registerClass("_a.eV", _a.bY);
_a.bN.registerClass("_a.bN", null, _a.kF, _j.ck);
_a.y.registerClass("_a.y");
_a.K.registerClass("_a.K");
_a.bg.registerClass("_a.bg", null, _a.kG);
_a.bg.l.registerClass("_a.bg.l", null, _j.ck);
_a.bA.registerClass("_a.bA", null, _j.ck);
_a.iN.registerClass("_a.iN", _a.bt);
_a.iO.registerClass("_a.iO", _a.bt);
_a.jE.registerClass("_a.jE", null, _a.lD);
_a.SmimePluginFirefox.registerClass("_a.SmimePluginFirefox", _a.jE, _a.lD);
$d.registerClass("$d");
_a.Z.registerClass("_a.Z");
_a.V.registerClass("_a.V");
_a.db.registerClass("_a.db");
_a.ba.registerClass("_a.ba");
_a.d.registerClass("_a.d", null, _j.L);
_a.d.G.registerClass("_a.d.G");
_a.I.registerClass("_a.I");
_a.o.registerClass("_a.o", _j.G, _j.o, _j.p);
_a.bw.registerClass("_a.bw", _a.gd, _a.kW, _j.bs, Sys.IDisposable);
_a.dm.registerClass("_a.dm");
_a.fP.registerClass("_a.fP");
_a.bE.registerClass("_a.bE");
_a.ci.registerClass("_a.ci", _a.ec);
_a.bU.registerClass("_a.bU", _a.ci);
_a.bz.registerClass("_a.bz", _a.ec);
_a.cz.registerClass("_a.cz", _a.ci);
_a.P.registerClass("_a.P");
_a.fg.registerClass("_a.fg");
_a.bQ.registerClass("_a.bQ");
_a.T.registerClass("_a.T");
_a.dj.registerClass("_a.dj");
_a.bj.registerClass("_a.bj");
_a.ly.registerClass("_a.ly");
_a.es.registerClass("_a.es");
_a.lE.registerClass("_a.lE");
_a.gg.registerClass("_a.gg", _a.lE);
SyncState.registerClass("SyncState");
CalendarSyncState.registerClass("CalendarSyncState", SyncState);
MultiFolderSyncState.registerClass("MultiFolderSyncState", SyncState);
SyncFolderListItem.registerClass("SyncFolderListItem");
_a.dV.registerClass("_a.dV");
_a.cq.registerClass("_a.cq");
_a.jK.registerClass("_a.jK");
_a.i.registerClass("_a.i", _a.jK);
_a.jI.registerClass("_a.jI", _a.i);
_a.gm.registerClass("_a.gm", _a.jI);
_a.gn.registerClass("_a.gn", _a.jI);
_a.go.registerClass("_a.go", _a.jI);
_a.gp.registerClass("_a.gp", _a.jI);
_a.gq.registerClass("_a.gq", _a.jI);
_a.gr.registerClass("_a.gr", _a.jI);
_a.gs.registerClass("_a.gs", _a.jI);
_a.gt.registerClass("_a.gt", _a.jI);
_a.gu.registerClass("_a.gu", _a.jI);
_a.gv.registerClass("_a.gv", _a.jI);
_a.gw.registerClass("_a.gw", _a.jI);
_a.gx.registerClass("_a.gx", _a.jI);
_a.gy.registerClass("_a.gy", _a.jI);
_a.gz.registerClass("_a.gz", _a.jI);
_a.gA.registerClass("_a.gA", _a.jI);
_a.gB.registerClass("_a.gB", _a.jI);
_a.gC.registerClass("_a.gC", _a.jI);
_a.gD.registerClass("_a.gD", _a.jI);
_a.gE.registerClass("_a.gE", _a.jI);
_a.jJ.registerClass("_a.jJ", _a.jK);
_a.gF.registerClass("_a.gF", _a.jJ);
_a.gG.registerClass("_a.gG", _a.jI);
_a.jH.registerClass("_a.jH", _a.jI);
_a.gH.registerClass("_a.gH", _a.jI);
_a.gI.registerClass("_a.gI", _a.jI);
_a.gJ.registerClass("_a.gJ", _a.jI);
_a.gK.registerClass("_a.gK", _a.jI);
_a.gL.registerClass("_a.gL", _a.jI);
_a.gM.registerClass("_a.gM", _a.jJ);
_a.gN.registerClass("_a.gN", _a.jI);
_a.gO.registerClass("_a.gO", _a.jI);
_a.gP.registerClass("_a.gP", _a.jI);
_a.gQ.registerClass("_a.gQ", _a.jI);
_a.gR.registerClass("_a.gR", _a.jI);
_a.gS.registerClass("_a.gS", _a.jI);
_a.gT.registerClass("_a.gT", _a.jI);
_a.gU.registerClass("_a.gU", _a.jI);
_a.gV.registerClass("_a.gV", _a.jI);
_a.gW.registerClass("_a.gW", _a.jI);
_a.gX.registerClass("_a.gX", _a.jI);
_a.gY.registerClass("_a.gY", _a.jI);
_a.gZ.registerClass("_a.gZ", _a.jI);
_a.ha.registerClass("_a.ha", _a.jI);
_a.hb.registerClass("_a.hb", _a.jI);
_a.hc.registerClass("_a.hc", _a.jI);
_a.hd.registerClass("_a.hd", _a.jI);
_a.he.registerClass("_a.he", _a.jI);
_a.hf.registerClass("_a.hf", _a.jI);
_a.hg.registerClass("_a.hg", _a.jI);
_a.hh.registerClass("_a.hh", _a.jI);
_a.hi.registerClass("_a.hi", _a.jI);
_a.hj.registerClass("_a.hj", _a.jI);
_a.hk.registerClass("_a.hk", _a.jI);
_a.hl.registerClass("_a.hl", _a.jI);
_a.hm.registerClass("_a.hm", _a.jI);
_a.hn.registerClass("_a.hn", _a.jI);
_a.ho.registerClass("_a.ho", _a.jI);
_a.hp.registerClass("_a.hp", _a.jI);
_a.hq.registerClass("_a.hq", _a.jI);
_a.hr.registerClass("_a.hr", _a.jI);
_a.hs.registerClass("_a.hs", _a.jI);
_a.ht.registerClass("_a.ht", _a.jI);
_a.hu.registerClass("_a.hu", _a.jI);
_a.hv.registerClass("_a.hv", _a.jI);
_a.hx.registerClass("_a.hx", _a.jI);
_a.hy.registerClass("_a.hy", _a.jI);
_a.hw.registerClass("_a.hw", _a.jI);
_a.hz.registerClass("_a.hz", _a.jI);
_a.hA.registerClass("_a.hA", _a.jI);
_a.hB.registerClass("_a.hB", _a.jI);
_a.hC.registerClass("_a.hC", _a.jI);
_a.hD.registerClass("_a.hD", _a.jI);
_a.hE.registerClass("_a.hE", _a.jI);
_a.hF.registerClass("_a.hF", _a.jI);
_a.hG.registerClass("_a.hG", _a.jI);
_a.hH.registerClass("_a.hH", _a.jI);
_a.hI.registerClass("_a.hI", _a.jI);
_a.hJ.registerClass("_a.hJ", _a.jI);
_a.hK.registerClass("_a.hK", _a.jI);
_a.hL.registerClass("_a.hL", _a.jI);
_a.hM.registerClass("_a.hM", _a.jI);
_a.hN.registerClass("_a.hN", _a.jJ);
_a.jL.registerClass("_a.jL", _a.jI);
_a.hO.registerClass("_a.hO", _a.jJ);
_a.hP.registerClass("_a.hP", _a.jI);
_a.hQ.registerClass("_a.hQ", _a.jI);
_a.hR.registerClass("_a.hR", _a.jI);
_a.hS.registerClass("_a.hS", _a.jI);
_a.hT.registerClass("_a.hT", _a.jI);
_a.hU.registerClass("_a.hU", _a.jI);
_a.hV.registerClass("_a.hV", _a.jI);
_a.hW.registerClass("_a.hW", _a.jI);
_a.hX.registerClass("_a.hX", _a.jI);
_a.hY.registerClass("_a.hY", _a.jI);
_a.hZ.registerClass("_a.hZ", _a.jI);
_a.jM.registerClass("_a.jM", _a.jI);
_a.ia.registerClass("_a.ia", _a.jI);
_a.jN.registerClass("_a.jN", _a.jI);
_a.ib.registerClass("_a.ib", _a.jI);
_a.ic.registerClass("_a.ic", _a.jI);
_a.id.registerClass("_a.id", _a.jJ);
_a.ie.registerClass("_a.ie", _a.jI);
_a.ig.registerClass("_a.ig", _a.jI);
_a.ih.registerClass("_a.ih", _a.jJ);
_a.ii.registerClass("_a.ii", _a.jI);
_a.ij.registerClass("_a.ij", _a.jI);
_a.jO.registerClass("_a.jO", _a.jI);
_a.ik.registerClass("_a.ik", _a.jI);
_a.jP.registerClass("_a.jP", _a.jI);
_a.il.registerClass("_a.il");
_a.ey.a = 0;
_a.t.b = null;
_a.L.d = null;
_a.L.f = null;
_a.L.e = null;
_a.dn.a = new _a.f("State", _a.ew, _a.dn, 0);
_a.dn.b = 0;
_a.cj.a = 0;
_a.bp.b = "LastUserActivityTime";
_a.bp.a = null;
_a.k.k = 0;
_a.k.h = 0;
_a.k.p = 0;
_a.k.H = 0;
_a.k.G = 0;
_a.k.s = 0;
_a.k.bu = 0;
_a.k.bs = 0;
_a.k.bt = 0;
_a.k.bg = "";
_a.k.I = null;
_a.k.bb = null;
_a.k.t = null;
_a.k.ba = 0;
_a.k.E = {};
_a.k.i = !1;
_a.k.bh = !1;
_a.k.c = 0;
_a.k.u = 0;
_a.k.o = null;
_a.k.j = null;
_a.k.Z = null;
_a.k.f = 0;
_a.k.d = 0;
_a.k.e = 0;
_a.k.Q = 0;
_a.k.L = 0;
_a.k.M = 0;
_a.k.v = 0;
_a.k.z = 0;
_a.k.C = 0;
_a.k.R = 0;
_a.k.X = 0;
_a.k.N = 0;
_a.k.n = 0;
_a.k.bf = 0;
_a.k.bd = 0;
_a.k.be = 0;
_a.k.V = 0;
_a.k.b = null;
_a.k.q = !1;
_a.k.w = 0;
_a.k.O = !1;
_a.k.m = !1;
_a.k.K = 0;
_a.k.r = 0;
_a.k.D = 0;
_a.k.P = !1;
_a.k.W = 0;
_a.k.Y = null;
_a.k.l = !1;
_a.k.U = null;
_a.k.y = !1;
_a.k.bc = !1;
_a.k.T = 0;
_a.k.S = 0;
_a.k.x = !1;
_a.k.B = 0;
_a.k.A = 0;
_a.cf.b = {};
_a.bh.b = 0;
_a.bh.c = !1;
_a.bh.e = {};
_a.bh.a = !1;
CoreFrameworkComponent.$$cctor();
_a.eD.a = new _a.eD(0, 0, 0, 0, 0);
_a.n.f = {};
_a.n.h = {};
_a.n.g = {};
_a.du.b = !1;
_a.ck.a = !1;
_a.ck.d = 0;
_a.ck.$$cctor();
_a.bi.c = new _a.bG(100);
_a.bi.b = !1;
_a.bi.e = {};
_a.bi.f = {};
_a.bi.g = {};
_a.bi.h = {};
_a.bi.a = 0;
_a.bW.b = null;
_a.bW.a = null;
_a.ErrorConverter.c = "errorMessage";
_a.ErrorConverter.e = "errorType";
_a.ErrorConverter.d = "errorString";
_a.ErrorConverter.a = "errorCause";
_a.ErrorConverter.b = "message";
_a.ErrorConverter.h = "name";
_a.ErrorConverter.g = "exceptionString";
_a.ErrorConverter.f = "innerException";
_a.bX.a = [];
_a.bX.b = null;
_a.v.i = null;
_a.v.h = null;
_a.v.f = null;
_a.v.e = null;
_a.bL.i = {};
_a.dx.a = {};
_a.be.a = null;
_a.be.d = null;
_a.X.i = 500;
_a.X.h = .5;
_a.X.g = null;
_a.X.f = 0;
_a.X.c = 0;
_a.X.d = 0;
_a.X.$$cctor();
_a.dz.a = new _a.dz;
_a.co.c = _a.co.b(1);
_a.co.a = _a.co.b(2);
_a.co.d = new Array(0);
_a.g.E = new _j.R;
_a.g.I = !1;
_a.g.y = !1;
_a.g.K = !1;
_a.g.a = new _a.cj;
_a.g.d = null;
_a.g.l = new _a.cr;
_a.g.k = null;
_a.g.u = null;
_a.g.w = null;
_a.g.z = null;
_a.g.v = null;
_a.g.p = !1;
_a.g.j = !1;
_a.g.b = !1;
_a.g.r = null;
_a.g.C = !1;
_a.g.G = null;
_a.g.m = null;
_a.g.B = null;
_a.g.x = null;
_a.g.t = null;
_a.g.H = new Sys.EventHandlerList;
_a.g.o = new _a.ek;
_a.g.A = null;
_a.g.F = !1;
_a.g.q = null;
_a.g.i = !1;
_a.cl.b = null;
_a.F.d = new RegExp("\\'+", "g");
_a.F.k = new RegExp("^1$");
_a.F.u = new RegExp(".");
_a.F.t = new RegExp("^[234]$");
_a.F.l = new RegExp("^[234]$|[^1][234]$");
_a.F.x = new RegExp("^1$|[^1]1$");
_a.F.e = new _a.F.m(_a.F.x, _a.F.l);
_a.F.g = new _a.F.m(_a.F.k, _a.F.t);
_a.F.i = {
    "cs-CZ": _a.F.g,
    "sk-SK": _a.F.g,
    "sl-SI": _a.F.g,
    "uk-UA": _a.F.g,
    "pl-PL": new _a.F.m(_a.F.k, _a.F.l),
    "ru-RU": _a.F.e,
    "sr-Latn-CS": _a.F.e,
    "sr-Cyrl-CS": _a.F.e,
    "lt-LT": _a.F.e,
    "lv-LV": _a.F.e
};
_a.F.s = {
    "default": "default",
    "af-za": "af-ZA",
    "am-et": "am-ET",
    "ar-ae": "ar-AE",
    "ar-bh": "ar-BH",
    "ar-dz": "ar-DZ",
    "ar-eg": "ar-EG",
    "ar-iq": "ar-IQ",
    "ar-jo": "ar-JO",
    "ar-kw": "ar-KW",
    "ar-lb": "ar-LB",
    "ar-ly": "ar-LY",
    "ar-ma": "ar-MA",
    "ar-om": "ar-OM",
    "ar-qa": "ar-QA",
    "ar-sa": "ar-SA",
    "ar-sy": "ar-SY",
    "ar-tn": "ar-TN",
    "ar-ye": "ar-YE",
    "az-latn-az": "az-Latn-AZ",
    "be-by": "be-BY",
    "bg-bg": "bg-BG",
    "bn-bd": "bn-BD",
    "bn-in": "bn-IN",
    "bs-latn-ba": "bs-Latn-BA",
    "ca-es": "ca-ES",
    "cs-cz": "cs-CZ",
    "cy-gb": "cy-GB",
    "da-dk": "da-DK",
    "de-at": "de-AT",
    "de-ch": "de-CH",
    "de-de": "de-DE",
    "de-li": "de-LI",
    "de-lu": "de-LU",
    "el-gr": "el-GR",
    "en-029": "en-029",
    "en-au": "en-AU",
    "en-bz": "en-BZ",
    "en-ca": "en-CA",
    "en-gb": "en-GB",
    "en-ie": "en-IE",
    "en-in": "en-IN",
    "en-jm": "en-JM",
    "en-my": "en-MY",
    "en-nz": "en-NZ",
    "en-ph": "en-PH",
    "en-sg": "en-SG",
    "en-tt": "en-TT",
    "en-us": "en-US",
    "en-za": "en-ZA",
    "en-zw": "en-ZW",
    "es-ar": "es-AR",
    "es-bo": "es-BO",
    "es-cl": "es-CL",
    "es-co": "es-CO",
    "es-cr": "es-CR",
    "es-do": "es-DO",
    "es-ec": "es-EC",
    "es-es": "es-ES",
    "es-gt": "es-GT",
    "es-hn": "es-HN",
    "es-mx": "es-MX",
    "es-ni": "es-NI",
    "es-pa": "es-PA",
    "es-pe": "es-PE",
    "es-pr": "es-PR",
    "es-py": "es-PY",
    "es-sv": "es-SV",
    "es-us": "es-US",
    "es-uy": "es-UY",
    "es-ve": "es-VE",
    "et-ee": "et-EE",
    "eu-es": "eu-ES",
    "fa-ir": "fa-IR",
    "fi-fi": "fi-FI",
    "fil-ph": "fil-PH",
    "fr-be": "fr-BE",
    "fr-ca": "fr-CA",
    "fr-ch": "fr-CH",
    "fr-fr": "fr-FR",
    "fr-lu": "fr-LU",
    "fr-mc": "fr-MC",
    "ga-ie": "ga-IE",
    "gl-es": "gl-ES",
    "gu-in": "gu-IN",
    "ha-latn-ng": "ha-Latn-NG",
    "he-il": "he-IL",
    "hi-in": "hi-IN",
    "hr-ba": "hr-BA",
    "hr-hr": "hr-HR",
    "hu-hu": "hu-HU",
    "hy-am": "hy-AM",
    "id-id": "id-ID",
    "is-is": "is-IS",
    "it-ch": "it-CH",
    "it-it": "it-IT",
    "ja-jp": "ja-JP",
    "ka-ge": "ka-GE",
    "kk-kz": "kk-KZ",
    "km-kh": "km-KH",
    "kn-in": "kn-IN",
    "ko-kr": "ko-KR",
    "lb-lu": "lb-LU",
    "lt-lt": "lt-LT",
    "lv-lv": "lv-LV",
    "mk-mk": "mk-MK",
    "ml-in": "ml-IN",
    "mn-mn": "mn-MN",
    "mr-in": "mr-IN",
    "ms-bn": "ms-BN",
    "mt-mt": "mt-MT",
    "ms-my": "ms-MY",
    "nb-no": "nb-NO",
    "ne-np": "ne-NP",
    "nl-be": "nl-BE",
    "nl-nl": "nl-NL",
    "nn-no": "nn-NO",
    "or-in": "or-IN",
    "pl-pl": "pl-PL",
    "pt-br": "pt-BR",
    "pt-pt": "pt-PT",
    "ro-ro": "ro-RO",
    "ru-ru": "ru-RU",
    "si-lk": "si-LK",
    "sk-sk": "sk-SK",
    "sl-si": "sl-SI",
    "sq-al": "sq-AL",
    "sr-cyrl-cs": "sr-Cyrl-CS",
    "sr-latn-cs": "sr-Latn-CS",
    "sv-fi": "sv-FI",
    "sv-se": "sv-SE",
    "sw-ke": "sw-KE",
    "ta-in": "ta-IN",
    "te-in": "te-IN",
    "th-th": "th-TH",
    "tr-tr": "tr-TR",
    "uk-ua": "uk-UA",
    "ur-pk": "ur-PK",
    "vi-vn": "vi-VN",
    "zh-cn": "zh-CN",
    "zh-hk": "zh-HK",
    "zh-mo": "zh-MO",
    "zh-sg": "zh-SG",
    "zh-tw": "zh-TW"
};
_a.F.j = {
    "default": !0,
    en: !0,
    "am-ET": !0,
    "bg-BG": !0,
    "bn-IN": !0,
    "ca-ES": !0,
    "cz-CZ": !0,
    "cy-GB": !0,
    "da-DK": !0,
    "de-DE": !0,
    "el-GR": !0,
    "en-029": !0,
    "en-AU": !0,
    "en-BZ": !0,
    "en-CA": !0,
    "en-GB": !0,
    "en-IE": !0,
    "en-IN": !0,
    "en-JM": !0,
    "en-MY": !0,
    "en-NZ": !0,
    "en-PH": !0,
    "en-SG": !0,
    "en-TT": !0,
    "en-US": !0,
    "en-ZA": !0,
    "en-ZW": !0,
    "es-ES": !0,
    "es-MX": !0,
    "et-EE": !0,
    "eu-ES": !0,
    "fi-FI": !0,
    "fr-BE": !0,
    "fr-CA": !0,
    "fr-CH": !0,
    "fr-FR": !0,
    "fr-LU": !0,
    "fr-MC": !0,
    "gl-ES": !0,
    "gu-IN": !0,
    "hi-IN": !0,
    "hr-HR": !0,
    "hu-HU": !0,
    "id-ID": !0,
    "is-IS": !0,
    "it-IT": !0,
    "kk-KZ": !0,
    "kn-IN": !0,
    "lt-LT": !0,
    "lv-LV": !0,
    "ms-MY": !0,
    "nb-NO": !0,
    "nl-NL": !0,
    "pl-PL": !0,
    "pt-BR": !0,
    "pt-PT": !0,
    "ro-RO": !0,
    "ru-RU": !0,
    "sk-SK": !0,
    "sl-SI": !0,
    "sv-SE": !0,
    "ta-IN": !0,
    "te-IN": !0,
    "tr-TR": !0,
    "uk-UA": !0,
    "vi-VN": !0
};
_a.F.A = {
    "ar-SA": !0,
    "fa-IR": !0,
    "he-IL": !0,
    "ur-PK": !0
};
_a.F.z = {
    "fil-PH": !0,
    "ja-JP": !0,
    "ko-KR": !0,
    "ml-IN": !0,
    "mr-IN": !0,
    "or-IN": !0,
    "sw-KE": !0,
    "th-TH": !0,
    "zh-CN": !0,
    "zh-HK": !0,
    "zh-SG": !0,
    "zh-TW": !0
};
_a.F.f = {
    "ja-JP": !0,
    "ko-KR": !0,
    "tr-TR": !0
};
_a.F.o = {
    "ja-JP": "d'日'",
    "ko-KR": "d'일'",
    "zh-CN": "d'日'",
    "zh-HK": "d'日'",
    "zh-MO": "d'日'",
    "zh-SG": "d'日'",
    "zh-TW": "d'日'"
};
_a.F.q = {
    "ja-JP": "yyyy'年'",
    "ko-KR": "yyyy'년'",
    "zh-CN": "yyyy'年'",
    "zh-HK": "yyyy'年'",
    "zh-MO": "yyyy'年'",
    "zh-SG": "yyyy'年'",
    "zh-TW": "yyyy'年'"
};
_a.F.n = {
    "ja-JP": "MMM'月'd'日'",
    "ko-KR": "MMM'월' d'일'",
    "zh-CN": "M'月'd'日'",
    "zh-HK": "M'月'd'日'",
    "zh-MO": "M'月'd'日'",
    "zh-SG": "M'月'd'日'",
    "zh-TW": "M'月'd'日'"
};
_a.F.r = {
    "zh-CN": "yyyy'年'M'月'",
    "zh-HK": "yyyy'年'M'月'",
    "zh-MO": "yyyy'年'M'月'",
    "zh-SG": "yyyy'年'M'月'",
    "zh-TW": "yyyy'年'M'月'"
};
_a.F.p = {
    "zh-CN": "d'日'",
    "zh-HK": "d'日'",
    "zh-MO": "d'日'",
    "zh-SG": "d'日'",
    "zh-TW": "d'日'",
    "ja-JP": "d'日'",
    "ko-KR": "d'일'"
};
_a.F.w = {
    hi: !0,
    th: !0,
    ar: !0,
    gu: !0,
    fa: !0,
    he: !0,
    hi: !0,
    ja: !0,
    kn: !0,
    ko: !0,
    ml: !0,
    mr: !0,
    or: !0,
    ur: !0,
    ta: !0,
    te: !0,
    vi: !0,
    zh: !0,
    "zh-hans": !0,
    "zh-hant": !0
};
_a.F.v = {
    "fil-PH": !0,
    "he-IL": !0,
    "ml-IN": !0,
    "or-IN": !0,
    "sw-KE": !0,
    "th-TH": !0,
    "ur-PK": !0,
    "zh-SG": !0
};
_a.F.a = {
    "ja-JP": !0,
    "ko-KR": !0,
    "zh-CN": !0,
    "zh-HK": !0,
    "zh-MO": !0,
    "zh-SG": !0,
    "zh-TW": !0
};
_a.F.y = {
    en: !0,
    bg: !0,
    ca: !0,
    cs: !0,
    da: !0,
    de: !0,
    el: !0,
    es: !0,
    fi: !0,
    fil: !0,
    fr: !0,
    gl: !0,
    id: !0,
    is: !0,
    it: !0,
    kk: !0,
    ms: !0,
    nl: !0,
    nn: !0,
    "nn-no": !0,
    nb: !0,
    no: !0,
    pl: !0,
    pt: !0,
    "pt-pt": !0,
    ro: !0,
    ru: !0,
    sk: !0,
    sl: !0,
    "sr-Cyrl": !0,
    "sr-cyrl": !0,
    "sr-Latn": !0,
    sr: !0,
    sv: !0,
    sw: !0,
    tr: !0,
    uk: !0
};
_a.H.b = null;
_a.a.dJ = new _a.a(0);
_a.a.B = new _a.a(1);
_a.a.cZ = new _a.a(486);
_a.a.dK = new _a.a(247);
_a.a.ep = new _a.a(2);
_a.a.cc = new _a.a(3);
_a.a.bL = new _a.a(4);
_a.a.bR = new _a.a(5);
_a.a.eq = new _a.a(6);
_a.a.er = new _a.a(7);
_a.a.es = new _a.a(8);
_a.a.c = new _a.a(9);
_a.a.m = new _a.a(10);
_a.a.dN = new _a.a(11);
_a.a.eu = new _a.a(12);
_a.a.ba = new _a.a(283);
_a.a.b = new _a.a(13);
_a.a.ev = new _a.a(14);
_a.a.dp = new _a.a(410);
_a.a.n = new _a.a(15);
_a.a.ez = new _a.a(16);
_a.a.dr = new _a.a(17);
_a.a.dO = new _a.a(18);
_a.a.l = new _a.a(19);
_a.a.gh = new _a.a(20);
_a.a.W = new _a.a(23);
_a.a.ce = new _a.a(24);
_a.a.eB = new _a.a(25);
_a.a.X = new _a.a(26);
_a.a.U = new _a.a(27);
_a.a.cN = new _a.a(28);
_a.a.S = new _a.a(29);
_a.a.de = new _a.a(470);
_a.a.O = new _a.a(30);
_a.a.dP = new _a.a(34);
_a.a.eD = new _a.a(35);
_a.a.eE = new _a.a(36);
_a.a.gl = new _a.a(39);
_a.a.eH = new _a.a(40);
_a.a.eI = new _a.a(41);
_a.a.eJ = new _a.a(42);
_a.a.gx = new _a.a(301);
_a.a.du = new _a.a(43);
_a.a.dv = new _a.a(44);
_a.a.cE = new _a.a(255);
_a.a.eL = new _a.a(45);
_a.a.gn = new _a.a(46);
_a.a.i = new _a.a(47);
_a.a.eO = new _a.a(48);
_a.a.eP = new _a.a(49);
_a.a.dU = new _a.a(298);
_a.a.V = new _a.a(302);
_a.a.v = new _a.a(50);
_a.a.T = new _a.a(51);
_a.a.dV = new _a.a(488);
_a.a.cP = new _a.a(268);
_a.a.dW = new _a.a(406);
_a.a.eQ = new _a.a(52);
_a.a.gq = new _a.a(277);
_a.a.eR = new _a.a(53);
_a.a.eS = new _a.a(54);
_a.a.eT = new _a.a(55);
_a.a.dX = new _a.a(56);
_a.a.dd = new _a.a(500);
_a.a.eW = new _a.a(57);
_a.a.cw = new _a.a(291);
_a.a.eX = new _a.a(59);
_a.a.H = new _a.a(60);
_a.a.cg = new _a.a(454);
_a.a.cQ = new _a.a(61);
_a.a.cG = new _a.a(62);
_a.a.bT = new _a.a(63);
_a.a.fa = new _a.a(64);
_a.a.dg = new _a.a(271);
_a.a.cb = new _a.a(278);
_a.a.bu = new _a.a(65);
_a.a.fb = new _a.a(66);
_a.a.a = new _a.a(67);
_a.a.bq = new _a.a(68);
_a.a.dx = new _a.a(69);
_a.a.fd = new _a.a(70);
_a.a.ck = new _a.a(71);
_a.a.fk = new _a.a(72);
_a.a.F = new _a.a(73);
_a.a.fm = new _a.a(74);
_a.a.bx = new _a.a(75);
_a.a.bC = new _a.a(76);
_a.a.cy = new _a.a(77);
_a.a.ed = new _a.a(79);
_a.a.gA = new _a.a(80);
_a.a.j = new _a.a(81);
_a.a.R = new _a.a(84);
_a.a.fp = new _a.a(85);
_a.a.dB = new _a.a(86);
_a.a.di = new _a.a(499);
_a.a.fq = new _a.a(87);
_a.a.z = new _a.a(88);
_a.a.fs = new _a.a(89);
_a.a.r = new _a.a(90);
_a.a.o = new _a.a(91);
_a.a.A = new _a.a(92);
_a.a.gD = new _a.a(253);
_a.a.fv = new _a.a(93);
_a.a.fw = new _a.a(94);
_a.a.gF = new _a.a(95);
_a.a.G = new _a.a(96);
_a.a.J = new _a.a(97);
_a.a.bb = new _a.a(460);
_a.a.eh = new _a.a(481);
_a.a.fA = new _a.a(98);
_a.a.cn = new _a.a(99);
_a.a.ee = new _a.a(100);
_a.a.fC = new _a.a(101);
_a.a.fD = new _a.a(102);
_a.a.fE = new _a.a(103);
_a.a.bc = new _a.a(104);
_a.a.g = new _a.a(105);
_a.a.cH = new _a.a(106);
_a.a.dj = new _a.a(107);
_a.a.gG = new _a.a(108);
_a.a.bP = new _a.a(109);
_a.a.gH = new _a.a(110);
_a.a.dC = new _a.a(111);
_a.a.fH = new _a.a(112);
_a.a.by = new _a.a(304);
_a.a.fK = new _a.a(113);
_a.a.fL = new _a.a(114);
_a.a.fM = new _a.a(115);
_a.a.dk = new _a.a(116);
_a.a.co = new _a.a(117);
_a.a.fN = new _a.a(118);
_a.a.dD = new _a.a(119);
_a.a.fP = new _a.a(120);
_a.a.gK = new _a.a(121);
_a.a.fT = new _a.a(122);
_a.a.gL = new _a.a(123);
_a.a.fU = new _a.a(124);
_a.a.fV = new _a.a(125);
_a.a.fW = new _a.a(126);
_a.a.fX = new _a.a(127);
_a.a.cY = new _a.a(485);
_a.a.cB = new _a.a(128);
_a.a.gM = new _a.a(129);
_a.a.df = new _a.a(130);
_a.a.dI = new _a.a(133);
_a.a.gb = new _a.a(134);
_a.a.cJ = new _a.a(135);
_a.a.p = new _a.a(136);
_a.a.q = new _a.a(137);
_a.a.bZ = new _a.a(243);
_a.a.bY = new _a.a(295);
_a.a.bX = new _a.a(138);
_a.a.bh = new _a.a(139);
_a.a.bB = new _a.a(140);
_a.a.u = new _a.a(141);
_a.a.bl = new _a.a(142);
_a.a.fx = new _a.a(143);
_a.a.D = new _a.a(144);
_a.a.eM = new _a.a(145);
_a.a.d = new _a.a(146);
_a.a.bk = new _a.a(147);
_a.a.bo = new _a.a(405);
_a.a.bj = new _a.a(459);
_a.a.gv = new _a.a(148);
_a.a.w = new _a.a(149);
_a.a.cs = new _a.a(150);
_a.a.Z = new _a.a(151);
_a.a.bi = new _a.a(152);
_a.a.fr = new _a.a(153);
_a.a.dQ = new _a.a(154);
_a.a.dE = new _a.a(155);
_a.a.cx = new _a.a(156);
_a.a.dR = new _a.a(157);
_a.a.dz = new _a.a(158);
_a.a.Q = new _a.a(159);
_a.a.gu = new _a.a(160);
_a.a.cU = new _a.a(161);
_a.a.fu = new _a.a(270);
_a.a.fz = new _a.a(162);
_a.a.bU = new _a.a(163);
_a.a.eC = new _a.a(164);
_a.a.em = new _a.a(165);
_a.a.bQ = new _a.a(166);
_a.a.fB = new _a.a(167);
_a.a.cu = new _a.a(168);
_a.a.gj = new _a.a(169);
_a.a.eA = new _a.a(170);
_a.a.eo = new _a.a(171);
_a.a.cD = new _a.a(172);
_a.a.fi = new _a.a(173);
_a.a.bH = new _a.a(174);
_a.a.gr = new _a.a(175);
_a.a.fj = new _a.a(176);
_a.a.ey = new _a.a(177);
_a.a.ft = new _a.a(178);
_a.a.cC = new _a.a(179);
_a.a.dm = new _a.a(496);
_a.a.gk = new _a.a(180);
_a.a.cA = new _a.a(181);
_a.a.cm = new _a.a(182);
_a.a.gB = new _a.a(183);
_a.a.cO = new _a.a(184);
_a.a.fO = new _a.a(185);
_a.a.be = new _a.a(186);
_a.a.P = new _a.a(187);
_a.a.gc = new _a.a(188);
_a.a.gN = new _a.a(189);
_a.a.dt = new _a.a(190);
_a.a.fZ = new _a.a(191);
_a.a.gE = new _a.a(192);
_a.a.bK = new _a.a(194);
_a.a.cp = new _a.a(195);
_a.a.gC = new _a.a(196);
_a.a.Y = new _a.a(197);
_a.a.eK = new _a.a(198);
_a.a.fn = new _a.a(269);
_a.a.fl = new _a.a(199);
_a.a.gI = new _a.a(200);
_a.a.ch = new _a.a(201);
_a.a.ex = new _a.a(202);
_a.a.fQ = new _a.a(203);
_a.a.dA = new _a.a(204);
_a.a.bG = new _a.a(205);
_a.a.cK = new _a.a(206);
_a.a.fh = new _a.a(207);
_a.a.cF = new _a.a(208);
_a.a.dL = new _a.a(209);
_a.a.dH = new _a.a(210);
_a.a.gw = new _a.a(211);
_a.a.cS = new _a.a(212);
_a.a.dM = new _a.a(213);
_a.a.ga = new _a.a(214);
_a.a.ci = new _a.a(215);
_a.a.eU = new _a.a(216);
_a.a.cd = new _a.a(276);
_a.a.fF = new _a.a(217);
_a.a.gt = new _a.a(218);
_a.a.dl = new _a.a(219);
_a.a.gi = new _a.a(220);
_a.a.k = new _a.a(221);
_a.a.fG = new _a.a(292);
_a.a.gg = new _a.a(222);
_a.a.bw = new _a.a(223);
_a.a.bt = new _a.a(455);
_a.a.y = new _a.a(472);
_a.a.E = new _a.a(264);
_a.a.el = new _a.a(266);
_a.a.ea = new _a.a(244);
_a.a.ec = new _a.a(224);
_a.a.h = new _a.a(225);
_a.a.K = new _a.a(465);
_a.a.bD = new _a.a(226);
_a.a.dn = new _a.a(227);
_a.a.dq = new _a.a(228);
_a.a.dy = new _a.a(229);
_a.a.go = new _a.a(230);
_a.a.dF = new _a.a(231);
_a.a.f = new _a.a(232);
_a.a.x = new _a.a(233);
_a.a.dZ = new _a.a(299);
_a.a.gs = new _a.a(309);
_a.a.ca = new _a.a(400);
_a.a.eV = new _a.a(267);
_a.a.gz = new _a.a(234);
_a.a.bA = new _a.a(236);
_a.a.gJ = new _a.a(238);
_a.a.M = new _a.a(275);
_a.a.bd = new _a.a(239);
_a.a.ct = new _a.a(258);
_a.a.bF = new _a.a(240);
_a.a.cz = new _a.a(404);
_a.a.t = new _a.a(241);
_a.a.eN = new _a.a(242);
_a.a.bf = new _a.a(248);
_a.a.gy = new _a.a(245);
_a.a.fR = new _a.a(246);
_a.a.cT = new _a.a(249);
_a.a.cR = new _a.a(273);
_a.a.cv = new _a.a(274);
_a.a.et = new _a.a(257);
_a.a.ds = new _a.a(250);
_a.a.fJ = new _a.a(251);
_a.a.cL = new _a.a(252);
_a.a.L = new _a.a(254);
_a.a.en = new _a.a(256);
_a.a.bI = new _a.a(259);
_a.a.s = new _a.a(260);
_a.a.gm = new _a.a(474);
_a.a.fy = new _a.a(261);
_a.a.ei = new _a.a(262);
_a.a.eb = new _a.a(263);
_a.a.fY = new _a.a(272);
_a.a.eZ = new _a.a(280);
_a.a.cI = new _a.a(279);
_a.a.bv = new _a.a(282);
_a.a.eG = new _a.a(287);
_a.a.da = new _a.a(281);
_a.a.eF = new _a.a(284);
_a.a.fc = new _a.a(286);
_a.a.eY = new _a.a(285);
_a.a.gd = new _a.a(288);
_a.a.ge = new _a.a(289);
_a.a.dG = new _a.a(290);
_a.a.gp = new _a.a(293);
_a.a.cW = new _a.a(296);
_a.a.dw = new _a.a(297);
_a.a.cj = new _a.a(300);
_a.a.db = new _a.a(303);
_a.a.e = new _a.a(305);
_a.a.bN = new _a.a(308);
_a.a.bO = new _a.a(450);
_a.a.cX = new _a.a(493);
_a.a.ek = new _a.a(494);
_a.a.fS = new _a.a(495);
_a.a.bs = new _a.a(306);
_a.a.fe = new _a.a(471);
_a.a.bS = new _a.a(452);
_a.a.dY = new _a.a(490);
_a.a.ef = new _a.a(453);
_a.a.cl = new _a.a(307);
_a.a.gf = new _a.a(310);
_a.a.bz = new _a.a(402);
_a.a.fI = new _a.a(407);
_a.a.bn = new _a.a(408);
_a.a.dc = new _a.a(451);
_a.a.ew = new _a.a(412);
_a.a.cr = new _a.a(457);
_a.a.dT = new _a.a(463);
_a.a.N = new _a.a(411);
_a.a.br = new _a.a(458);
_a.a.bm = new _a.a(461);
_a.a.fo = new _a.a(462);
_a.a.bg = new _a.a(464);
_a.a.cV = new _a.a(456);
_a.a.bp = new _a.a(466);
_a.a.cf = new _a.a(473);
_a.a.bM = new _a.a(475);
_a.a.fg = new _a.a(476);
_a.a.bJ = new _a.a(477);
_a.a.I = new _a.a(480);
_a.a.ff = new _a.a(482);
_a.a.bW = new _a.a(483);
_a.a.bV = new _a.a(484);
_a.a.cM = new _a.a(487);
_a.a.C = new _a.a(489);
_a.a.cq = new _a.a(491);
_a.a.bE = new _a.a(492);
_a.a.eg = new _a.a(497);
_a.a.dh = new _a.a(498);
_a.a.ej = new _a.a(501);
_a.bD.b = null;
_a.O.d = {};
_a.O.c = {};
_a.eo.a = _a.eo.b();
_a.Y.b = null;
_a.W.e = "/" + _a.M.toString(2) + "/browsegroups";
_a.cX.a = {};
_a.cX.b = 0;
_a.J.b = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2177, 129, 1, 1, 129, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2432, 536, 518, 536, 536, 536, 536, 792, 774, 774, 536, 792, 774, 792, 778, 788, 888, 888, 888, 888, 888, 888, 888, 888, 888, 888, 262, 518, 518, 788, 518, 788, 518, 1880, 1880, 1880, 1880, 1880, 1880, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 518, 518, 518, 536, 792, 536, 1880, 1880, 1880, 1880, 1880, 1880, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 536, 536, 536, 536, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
_a.cB.a = -1;
_a.N.a = null;
_a.N.f = null;
_a.N.e = 0;
_a.N.n = null;
_a.N.c = null;
_a.N.b = null;
_a.N.o = null;
_a.N.h = null;
_a.N.i = null;
_a.N.j = null;
_a.N.k = null;
_a.N.l = null;
_a.N.m = null;
_a.N.$$cctor();
_a.bo.b = null;
_a.bo.a = null;
_a.cF.a = [];
_a.bB.g = "FL.RP";
_a.bB.f = "FL.MC";
_a.bB.a = "FL.GN";
_a.bB.e = "FL.GLSD";
_a.bB.d = "FL.BES";
_a.bB.c = "FL.BEL";
_a.bB.b = "FL.GUCL";
_a.bY.f = "te";
_a.bY.e = "s";
_a.bY.c = "se";
_a.bY.a = "en";
_a.bY.d = "st";
_a.bY.b = {};
_a.eT.a = "owaclienterror";
_a.bx.a = "ec";
_a.bx.b = "ed";
_a.eV.a = "Usage";
_a.A.a = new _a.eb(_a.g.l, 1);
_a.A.b = new _a.eb(_a.g.l, 1);
_a.A.f = new _j.q;
_a.A.e = null;
_a.b.t = 3e5;
_a.b.f = "Abandoned";
_a.b.B = new RegExp("^[a-zA-Z0-9\\._]{0,64}$");
_a.b.i = null;
_a.b.h = null;
_a.b.p = null;
_a.b.l = null;
_a.b.r = 0;
_a.b.n = 0;
_a.b.w = new _a.y("Warm");
_a.b.u = new _a.y("Cold");
_a.b.v = new _a.y("Ready");
_a.b.k = null;
_a.b.j = null;
_a.b.q = null;
_a.b.$$cctor();
_a.p.d = {};
_a.dM.a = new _a.dM;
_a.bg.a = [];
_a.bg.i = _a.dM.a;
_a.bg.e = {};
_a.bg.h = {};
_a.bg.g = !1;
_a.bg.f = null;
_a.bA.c = 0;
_a.dN.a = new _a.dN;
_a.fn.a = 0;
_a.bf.c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
_a.B.j = "<BR>";
_a.B.f = "<P style='margin-top:0;margin-bottom:0'>";
_a.B.d = "</P>";
_a.B.r = '<a href="{0}" target="_blank">{1}</a>{2}';
_a.B.q = "WWW";
_a.B.C = _a.B.q.toLowerCase();
_a.B.u = "http://";
_a.B.s = _a.B.d + _a.B.f;
_a.B.I = _a.B.f + _a.B.d;
_a.B.i = new RegExp("<BR([^>]*)>", "gi");
_a.B.n = new RegExp("\r|\n", "g");
_a.B.g = new RegExp("\n", "g");
_a.B.y = new RegExp("\r", "g");
_a.B.k = new RegExp("<DIV([^>]*)>", "gi");
_a.B.m = new RegExp("</P>", "gi");
_a.B.l = new RegExp("</li>", "gi");
_a.B.z = new RegExp(" (?= )", "g");
_a.B.x = new RegExp(_a.B.c(), "gi");
_a.B.B = new RegExp("(https://[^\\s]+|http://[^\\s]+|www[.][^\\s]+)", "gi");
_a.B.v = new RegExp("(<img[^>]*\\s)src(.?=.?['\\u0022])", "gi");
_a.B.w = new RegExp("<BR([^>]*)></P>", "gi");
_a.B.A = {
    ",": ",",
    ";": ";",
    "!": "!",
    "?": "?",
    ".": "."
};
_a.B.o = {};
_a.bK.a = null;
_a.bK.b = ["\\", "/", "[", "]", "(", ")", "{", "}", "?", "+", "*", "|", ".", "^", "$"];
_a.bK.$$cctor();
_a.w.j = null;
_a.w.l = new RegExp("\\+", "g");
_a.w.r = _a.a.dH;
_a.cD.a = !0;
_a.bu.a = !1;
_a.m.K = null;
_a.m.c = null;
_a.m.w = "4";
_a.m.B = "0700";
_a.m.Q = 4;
_a.m.a = !1;
_a.m.t = !1;
_a.m.o = !1;
_a.m.b = null;
_a.m.n = -1;
_a.m.y = -1;
_a.m.l = -1;
_a.m.p = -1;
_a.m.j = 0;
_a.m.I = -1;
_a.m.z = -1;
_a.m.v = {};
_a.m.J = null;
_a.m.A = null;
_a.m.i = null;
_a.m.$$cctor();
_a.C.f = new RegExp('\\sSRC\\s*=\\s*"[\\s\\S]+?"', "im");
_a.C.e = new RegExp('<IMG[^>]+?ORIGINALSRC\\s*=\\s*"[\\s\\S]+?"[\\s\\S]*?>', "gim");
_a.C.h = new RegExp('\\sONLOAD\\s*=\\s*"[\\s\\S]+?"', "im");
_a.C.i = new RegExp('\\sORIGINALSRC\\s*=\\s*"', "im");
_a.C.j = new RegExp("[xy]", "g");
_a.C.k = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
_a.bR.a = null;
_a.bd.d = null;
_a.bd.c = !1;
_a.bd.e = _a.bd.h;
_a.d.g = new _a.d(-271821, 3, 20, 0, 0, 0, 0, 0);
_a.d.z = new _a.d(275760, 8, 13, 0, 0, 0, 0, 0);
_a.d.cg = new RegExp("^(\\d{4})-{0,1}(\\d{2})-{0,1}(\\d{2})(T(\\d{2}):{0,1}(\\d{2}){0,1}:{0,1}(\\d{2}){0,1}([,\\.](\\d{3})\\d*){0,1}){0,1}(Z|(([-\\+])(\\d{2}):?(\\d{2}))){0,1}$");
_a.d.bG = null;
_a.d.X = null;
_a.d.bx = !1;
_a.d.bo = !1;
_a.d.U = null;
_a.d.T = null;
_a.d.R = null;
_a.d.S = null;
_a.d.V = null;
_a.d.bj = null;
_a.d.bi = null;
_a.d.bd = null;
_a.d.be = null;
_a.d.bg = null;
_a.d.v = null;
_a.d.t = null;
_a.d.w = null;
_a.d.u = null;
_a.d.k = null;
_a.d.i = null;
_a.d.l = null;
_a.d.j = null;
_a.d.bf = null;
_a.d.bh = null;
_a.d.E = null;
_a.d.J = null;
_a.d.D = null;
_a.d.I = null;
_a.d.C = null;
_a.d.F = null;
_a.d.bn = null;
_a.d.M = null;
_a.d.W = null;
_a.d.bk = null;
_a.d.bm = null;
_a.d.bl = null;
_a.d.L = null;
_a.d.$$cctor();
_a.o.b = null;
_a.bw.a = 0;
_a.ci.c = new _a.f("accept", String, _a.ci, "");
_a.ci.a = new _a.f("headers", _a.ca, _a.ci, null);
_a.ci.b = new _a.f("requestUri", _a.P, _a.ci, null);
_a.ci.d = new _a.f("timeout", Number, _a.ci, 1e5);
_a.bU.b = new _a.f("body", String, _a.bU, "");
_a.bU.c = new _a.f("contentType", String, _a.bU, "");
_a.bU.a = new _a.f("method", String, _a.bU, "GET");
_a.bz.c = new _a.f("body", String, _a.bz, null);
_a.bz.f = new _a.f("characterSet", String, _a.bz, null);
_a.bz.g = new _a.f("contentEncoding", String, _a.bz, null);
_a.bz.h = new _a.f("contentLength", Number, _a.bz, -1);
_a.bz.a = new _a.f("contentType", String, _a.bz, null);
_a.bz.b = new _a.f("headers", Object, _a.bz, null);
_a.bz.i = new _a.f("protocolVersion", String, _a.bz, null);
_a.bz.d = new _a.f("statusCode", _ff.C, _a.bz, null);
_a.bz.e = new _a.f("statusDescription", String, _a.bz, null);
_a.cz.a = new _a.f("formData", _a.ca, _a.cz, null);
_a.cz.b = new _a.f("formFiles", _a.ca, _a.cz, null);
_a.fb.a = "";
_a.P.g = String.format("{0}.{0}.{0}.{0}", "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])");
_a.P.h = String.format("(?:{0}|{1}|{2})*", "[A-Za-z0-9-\\._~]", "%[A-Fa-f0-9][A-Fa-f0-9]", "[!\\$&'\\(\\)\\*\\+,;=]");
_a.P.f = String.format("({0}|{1})", _a.P.g, _a.P.h);
_a.P.i = String.format("((?:{0}|{1}|{2}|:)*)", "[A-Za-z0-9-\\._~]", "%[A-Fa-f0-9][A-Fa-f0-9]", "[!\\$&'\\(\\)\\*\\+,;=]");
_a.P.e = String.format("^(?:{0}@)?{1}(?::([0-9]*))?$", _a.P.i, _a.P.f);
_a.P.c = new RegExp("^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$");
_a.P.d = new RegExp(_a.P.e);
_a.T.a = new _a.T("id");
MultiFolderSyncState.a = "##MultiFolderSyncState##";
SyncState.a = "none";
Type.registerNamespace("_z");
_z.a = function() {};
_z.a.registerInterface("_z.a");
_z.b = function() {};
_z.b.b = function(n, t, i) {
    var et = new _a.cf;
    et.g();
    var tt = _a.bn.a();
    var ft = new _a.bB(tt);
    var it = _j.n.b(_a.a.by, 0, "BootStrap");
    var r = new _j.bK;
    var a = new _a.fs;
    var b = new _j.N(window.navigator.userAgent);
    var nt = n.clientSettings;
    var e = new _a.cb(nt);
    var k = new _a.ft;
    var rt = new _a.iu(e, k);
    var u = new _a.dr(n, a, e, i);
    var s = new _j.j;
    _a.g.r = s;
    _a.g.c().b(_a.cC, function(n) {
        ft.g()
    });
    var h = _j.m.a();
    var p = new _a.dS(u, h, b, window);
    var w = window.matchMedia ? window.matchMedia("screen and (-webkit-min-device-pixel-ratio: 2)") : null;
    var ut = !!w && w.matches;
    var y = new _a.dG(u.bg, u.bw, u.bx, _a.o.a(), h, ut, window);
    var g = _dtl.f(h, u.S);
    var f = new _j.be(t, p, y, new _j.bS(_a.t.c, function(n) {
        n.b(r, a, u)
    }, function(n) {
        return r.g(n)
    }, s, u.P, u.X), s, g, u.bf.toLowerCase());
    if (u.R && e.b.ck().Enabled && !_a.g.j && !e.b.i().Enabled) {
        f.m("deferredwebservices");
        f.m("nonbootwebservices");
        f.m("deferredboot");
        var o = _a.cZ.b(u.L);
        if (o.startsWith("/mail")) {
            f.m("textboys");
            f.m("peoplecore");
            f.m("readingpane");
            f.m("mailcompose")
        } else o.startsWith("/calendar") ? f.m("calendarsurface") : o.startsWith("/group") && (o.endsWith("/mail") ? f.m("moderngroupsconversation") : o.endsWith("/people") ? f.m("moderngroupspeople") : o.endsWith("/files") && f.m("files"))
    }
    _j.h.b(window.location.origin) && (window.location.origin = window.location.protocol + "//" + window.location.hostname + (_j.h.b(window.location.port) ? "" : ":" + window.location.port));
    var c = _z.b.a(n, "outlookGatewayUrl", window.location.origin + "/outlookgateway");
    var v = "";
    v = e.b.kI().Enabled ? c + "/owa/" + "service.svc" : _z.b.a(n, "owaServiceUrl", "");
    var l = "";
    l = e.b.kJ().Enabled ? c + "/ows" : _z.b.a(n, "owsApiUrl", window.location.origin + "/ows");
    var d = _z.b.a(n, "getCustomGetPhotoUrl", "");
    r.b(_a.fW, function() {
        return new _a.fW(v, l, c, d)
    }).b(_a.cL).a();
    r.b(_a.dr, function() {
        return u
    }).b(_a.z).a();
    r.b(_a.fs, function() {
        return a
    }).b(_a.eO).a();
    r.b(_j.Z, function() {
        return b
    }).a();
    r.b(_a.cb, function() {
        return e
    }).b(_a.e).a();
    r.b(_j.bb, function() {
        return p
    }).a();
    r.b(_j.bv, function() {
        return y
    }).a();
    r.b(_j.I, function() {
        return f
    }).a();
    r.b(_a.ct, function() {
        return k
    }).a();
    r.b(_j.j, function() {
        return s
    }).a();
    r.b(_a.cc, function() {
        return rt
    }).a();
    f.X();
    e.b.g().Enabled && (_a.g.a = new _a.cj(r.d(_a.cV)));
    if (e.b.ef().Enabled && e.b.F().Enabled && !u.L.d()) try {
        r.a(_a.eF).a(u.bc)
    } catch (ot) {}
    e.b.eg().Enabled && _a.cF.c();
    _j.b.Instance = r;
    _j.n.a(it);
    return r
};
_z.b.a = function(n, t, i) {
    return t in n ? n[t].toString() : i
};

function Program() {}
Program.main = function(n, t) {
    var i = _z.b.b(n, t);
    i.a(_z.a).a();
    delete window.applicationBooting
};
Program.registerClass("Program");
Type.registerNamespace("_g");
_g.q = function() {};
_g.q.prototype = {
    OneDrivePro: 0,
    OneDriveConsumer: 1,
    Dropbox: 2,
    Box: 3,
    Mailbox: 4,
    GDrive: 5,
    Facebook: 6,
    WopiBox: 7,
    WopiEgnyte: 8,
    WopiDropbox: 9,
    MailMessage: 10
};
_g.q.registerEnum("_g.q", !1);
_g.ib = function() {};
_g.ib.prototype = {
    Undefined: 0,
    Active: 1,
    PendingApproval: 2,
    ApprovedByUser: 3,
    DeniedByUser: 4
};
_g.ib.registerEnum("_g.ib", !1);
_g.hg = function() {};
_g.hg.prototype = {
    Invalid: 0,
    Administrator: 1,
    Viewer: 2,
    Guest: 3
};
_g.hg.registerEnum("_g.hg", !1);
_g.id = function() {};
_g.id.prototype = {
    LightBlue: 0,
    LightGreen: 1,
    LightOrange: 2,
    LightGray: 3,
    LightYellow: 4,
    LightTeal: 5,
    LightPink: 6,
    LightBrown: 7,
    LightRed: 8,
    MaxColor: 9,
    Auto: -1
};
_g.id.registerEnum("_g.id", !1);
_g.ig = function() {};
_g.ig.prototype = {
    MyCalendars: 0,
    OtherCalendars: 1,
    PeoplesCalendars: 2,
    Normal: 3
};
_g.ig.registerEnum("_g.ig", !1);
_g.cT = function() {};
_g.cT.prototype = {
    NotResponded: 0,
    NotConsented: 1,
    Consented: 2
};
_g.cT.registerEnum("_g.cT", !1);
_g.iA = function() {};
_g.iA.prototype = {
    NotSet: 0,
    User: 1,
    AllAttendees: 2,
    Staff: 3,
    Customer: 4
};
_g.iA.registerEnum("_g.iA", !1);
_g.cW = function() {};
_g.cW.prototype = {
    Free: 0,
    Owned: 1,
    InTrial: 2,
    TrialExpired: 3
};
_g.cW.registerEnum("_g.cW", !1);
_g.iF = function() {};
_g.iF.prototype = {
    None: 0,
    Attached: 1,
    Uploaded: 2,
    Modified: 3,
    Shared: 4
};
_g.iF.registerEnum("_g.iF", !1);
_g.iU = function() {};
_g.iU.prototype = {
    None: 0,
    IsCalculated: 1,
    GuestsEnabled: 2,
    GroupHasGuests: 4
};
_g.iU.registerEnum("_g.iU", !0);
_g.kB = function() {};
_g.kB.prototype = {
    MeetingSuggestion: 1,
    TaskSuggestion: 2,
    Address: 3,
    Url: 4,
    PhoneNumber: 5,
    EmailAddress: 6,
    Contact: 7
};
_g.kB.registerEnum("_g.kB", !1);
_g.ja = function() {};
_g.ja.prototype = {
    None: 0,
    Message: 1,
    Calendar: 2,
    All: 3
};
_g.ja.registerEnum("_g.ja", !0);
_g.jb = function() {};
_g.jb.prototype = {
    None: 0,
    ClassicAttachment: 2,
    OneDrive: 3,
    SharePoint: 4,
    Link: 5,
    ModernAttachment: 6,
    All: 100
};
_g.jb.registerEnum("_g.jb", !1);
_g.jc = function() {};
_g.jc.prototype = {
    None: 0,
    Delete: 1,
    Archive: 2,
    PinUnpin: 3,
    ReadUnread: 4,
    FlagUnflag: 5,
    Move: 6
};
_g.jc.registerEnum("_g.jc", !1);
_g.jt = function() {};
_g.jt.prototype = {
    None: 0,
    ConversationStarterIsYou: 1,
    OnlyRecipient: 2,
    ConversationContributions: 3,
    MarkedImportantBySender: 4,
    SenderIsManager: 5,
    SenderIsInManagementChain: 6,
    SenderIsDirectReport: 7,
    ActionBasedOnSender: 8,
    NameOnToLine: 9,
    NameOnCcLine: 10,
    ManagerPosition: 11,
    ReplyToAMessageFromMe: 12,
    PreviouslyFlagged: 13,
    ActionBasedOnRecipients: 14,
    ActionBasedOnSubjectWords: 15,
    ActionBasedOnBasedOnBodyWords: 16,
    SenderIsYou: 17,
    ItemClass: 18,
    ReplyForwardRule: 19,
    BulkAutoListMimeHeaders: 20,
    WellKnownBulkSenderLocalpart: 21,
    ReturnPathMatches: 22,
    InlineAttachmentCount: 23,
    NotInlineImageCount: 24,
    InferenceBypassedByTransportRuleOverride: 25,
    OverriddenByClutterConversationAction: 26,
    OverriddenByNotClutterConversationAction: 27,
    OverriddenByNeverClutterRule: 28,
    OverriddenByAlwaysClutterRule: 29,
    PreviousMessageNotClutter: 30
};
_g.jt.registerEnum("_g.jt", !1);
_g.G = function() {};
_g.G.prototype = {
    DateTimeReceived: 1,
    SearchRecipients: 2,
    From: 3,
    HasAttachment: 4,
    FolderEntryId: 5,
    Hashtags: 6,
    Actiontags: 7
};
_g.G.registerEnum("_g.G", !1);
_g.jx = function() {};
_g.jx.prototype = {
    Calendar: 0,
    Task: 1
};
_g.jx.registerEnum("_g.jx", !1);
_g.jy = function() {};
_g.jy.prototype = {
    None: 0,
    Calendar: 1,
    Task: 2,
    Birthdays: 4,
    All: 268435455
};
_g.jy.registerEnum("_g.jy", !0);
_g.df = function() {};
_g.df.prototype = {
    Restricted: 0,
    ReadItem: 1,
    ReadWriteMailbox: 2,
    ReadWriteItem: 3
};
_g.df.registerEnum("_g.df", !1);
_g.kM = function() {};
_g.kM.prototype = {
    NotDefined: 0,
    FromContact: 5,
    Newsletter: 15,
    Photo: 53,
    SocialUpdate: 55,
    Video: 61,
    Document: 63,
    File: 65,
    MailingList: 67,
    ShippingNotification: 69,
    LiveView: 71,
    DocumentPlus: 73,
    Important: 75,
    Family: 77,
    Bills: 81,
    Shopping: 83,
    Travel: 85,
    Flight: 87,
    RestaurantReservation: 89,
    Lodging: 91,
    RentalCar: 93,
    Purchase: 95,
    Event: 97,
    RetiredPromotion: 99,
    MaxValue: 100
};
_g.kM.registerEnum("_g.kM", !1);
_g.gF = function() {};
_g.gF.prototype = {
    None: 0,
    Mock: 1,
    Facebook: 2,
    Twitter: 3,
    LinkedIn: 4,
    Google: 5,
    Yahoo: 6,
    SinaWeibo: 7,
    TripIt: 8,
    AirBrake: 9,
    AppSignal: 10,
    Asana: 11,
    BeanStalk: 12,
    BingNews: 13,
    BitBucket: 14,
    Boundary: 15,
    Bugsnag: 16,
    BuildKite: 17,
    Cloud66: 18,
    Crashlytics: 19,
    CircleCI: 20,
    Codeship: 21,
    Datadog: 22,
    DynamicsCrm: 23,
    Enchant: 24,
    Envoy: 25,
    Github: 26,
    GoSquared: 27,
    Groove: 28,
    GroupFiles: 29,
    HelpScout: 30,
    Heroku: 31,
    HoneyBadger: 32,
    IncomingWebhook: 33,
    Intercom: 34,
    Jira: 35,
    LogEntries: 36,
    MagnumCI: 37,
    MailChimp: 38,
    OpsGenie: 39,
    PagerDuty: 40,
    Papertrail: 41,
    Pingdom: 42,
    PivotalTracker: 43,
    RainforestQA: 44,
    Raygun: 45,
    RSS: 46,
    Runscope: 47,
    Salesforce: 48,
    Semaphore: 49,
    Sentry: 50,
    StackExchange: 51,
    StatusPageIO: 52,
    Subversion: 53,
    TravisCI: 54,
    Trello: 55,
    UserLike: 56,
    UserVoice: 57,
    VisualStudioOnline: 58,
    Wunderlist: 59,
    Yo: 60,
    Zendesk: 61,
    AAD: 62,
    SkypeSpaces: 63,
    SkypeSpaces_DM2P: 64,
    Aha: 65,
    Librato: 66,
    Chatra: 67,
    XPDev: 68,
    BitHound: 69,
    Chatlio: 70,
    CheckMarket: 71,
    Doorbell: 72,
    GhostInspector: 73,
    HipMob: 74,
    Insping: 75,
    NewRelic: 76,
    Ramen: 77,
    TestFairy: 78,
    XPlenty: 79,
    ConnectorExtension: 80,
    Flickr: 81,
    Pickit: 82,
    AppleICloud: 83,
    TeamSnap: 84
};
_g.gF.registerEnum("_g.gF", !1);
_g.jR = function() {};
_g.jR.prototype = {
    Default: 0,
    HomeRoom: 1,
    Yammer: 2,
    SkypeConsumer: 3,
    PartialCreate: 4,
    PartialPostCreate: 5,
    TeamsChannel: 6
};
_g.jR.registerEnum("_g.jR", !1);
_g.hA = function() {};
_g.hA.prototype = {
    UploadPhoto: 0,
    UploadPreview: 1,
    ClearPhoto: 2,
    ClearPreview: 3
};
_g.hA.registerEnum("_g.hA", !1);
_g.kA = function() {};
_g.kA.registerInterface("_g.kA");
_g.hM = function(n) {
    this.a(n)
};
_g.hM.prototype = {
    a: function(n) {
        this.source = n
    }
};
_g.H = function(n) {
    this.__type = _g.H.dataContractName;
    this.request = n;
    this.state = 0;
    this.attemptCount = 0;
    this.successCount = 0;
    this.rejectedCount = 0;
    this.failureCount = 0;
    this.responseCode = "NoError";
    this.timeoutCount = 0;
    this.abandonedCount = 0;
    this.firstAttempt = null;
    this.lastAttempt = null;
    this.processingTime = 0;
    this.checkpointValue = "";
    this.startTime = 0;
    this.offlineRejectCode = 0;
    this.edgeRequest = 0;
    this.webrequestCompletedCount = 0;
    if (n && n.actionContext && n.actionContext.correlationId) this.correlationId = n.actionContext.correlationId;
    else {
        this.correlationId = _g.H.e();
        n && n.actionContext && (n.actionContext.correlationId = this.correlationId)
    }
    this.activityId = "";
    this.beginTimeString = "";
    this.timestamps = {};
    this.externalTimestamps = {};
    this.externalCorrelationId = "";
    this.externalClientName = "";
    this.externalServerName = "";
    this.backEndTime = 0;
    this.frontEndTime = 0;
    this.requestLength = 0;
    this.responseLength = 0;
    this.responseBytes = Number.NaN;
    this.callBackStartTime = 0;
    this.callBackEndTime = 0;
    this.responseEndTimeStamp = 0;
    this.requestInvokedTimeStamp = 0;
    this.actionType = 0;
    this.nextHopProtocol = "";
    this.msEdgeRef = ""
};
_g.H.d = function(n) {
    if (n.id) return n.id < 0;
    else {
        n.id = _g.H.f();
        return !0
    }
};
_g.H.g = function(n) {
    n.attemptCount++;
    n.lastAttempt = _a.d.f(_a.d.get_utcNow());
    n.firstAttempt = n.firstAttempt || n.lastAttempt
};
_g.H.c = function(n, t) {
    var i = _a.d.get_utcNow().e(t);
    n.processingTime = (n.processingTime || 0) + i
};
_g.H.a = function(n) {
    var t = "ActionRecord [";
    if (n) {
        t += n.id.toString();
        n.request && (t += ", " + n.request.methodName);
        n.response && (t += ", " + n.response.statusCode);
        n.correlationId && (t += ", " + n.correlationId)
    } else t += "null";
    t += "]";
    return t
};
_g.H.f = function() {
    _g.H.b--;
    _g.H.b === Number.NEGATIVE_INFINITY && (_g.H.b = -1);
    return _g.H.b
};
_g.H.e = function() {
    var n = window.getClientId();
    return n + "_" + _a.cB.b().a.toString()
};
_g.H.prototype = {
    id: 0,
    state: 0,
    request: null,
    response: null,
    attemptCount: 0,
    successCount: 0,
    failureCount: 0,
    rejectedCount: 0,
    responseCode: "NoError",
    timeoutCount: 0,
    abandonedCount: 0,
    firstAttempt: null,
    lastAttempt: null,
    processingTime: 0,
    correlationId: null,
    activityId: null,
    beginTimeString: null,
    timestamps: null,
    externalTimestamps: null,
    externalCorrelationId: null,
    externalClientName: null,
    externalServerName: null,
    backEndTime: 0,
    frontEndTime: 0,
    requestLength: 0,
    responseLength: 0,
    responseBytes: 0,
    callBackStartTime: 0,
    callBackEndTime: 0,
    responseEndTimeStamp: 0,
    requestInvokedTimeStamp: 0,
    actionType: 0,
    offlineRejectCode: 0,
    edgeRequest: 0,
    webrequestCompletedCount: 0,
    resource: null,
    frontEndServer: null,
    backEndServer: null,
    checkpointValue: null,
    startTime: 0,
    nextHopProtocol: null,
    msEdgeRef: null
};
_g.hb = function(n) {
    _g.hb.initializeBase(this, [n])
};
_g.hb.prototype = {
    instanceKeysToRemoveFromPendingOperations: null,
    folderIdForInstanceKeysToRemoveFromPendingOperations: null,
    isActionGlobal: !1
};
_g.em = function() {
    this.DirtyState = undefined;
    _g.em.initializeBase(this);
    this.__type = _g.em._dataContractName
};
_g.em._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["LastDeliveryTime", "GlobalLastDeliveryTime", "LastModifiedTime", "LastDeliveryOrRenewTime", "GlobalLastDeliveryOrRenewTime", "ReturnTime", "LastSentTime", "LastAttachmentsProcessedTime", "GlobalLastAttachmentsProcessedTime", "ExtractedCardAndActionsLastUpdatedTime"], null)
};
_g.hk = function(n) {
    _g.hk.initializeBase(this, [n])
};
_g.hk.prototype = {
    clientStoreItem: 0,
    itemIds: null,
    createdCalendarItemIds: null,
    isQueued: !1,
    parentFolderId: null,
    uIds: null,
    userEmailAddress: null,
    userDisplayName: null,
    isReferencedItemMeetingRequest: !1,
    referencedCalendarItemType: "Single",
    draftsFolderId: null,
    inboxFolderId: null,
    outboxFolderId: null,
    deletedItemsFolderId: null,
    calendarFolderId: null,
    clientStoreBodyValue: null,
    rightsManagementLicenseData: null,
    outboxItemId: null,
    conversationId: null,
    parentConversationNodeId: null,
    bodySubstring: null,
    viewModelContextId: null,
    itemPartsOrderDescending: !1,
    resendItemId: null,
    a: function(n) {
        _g.hM.prototype.a.call(this, n);
        this.popOutContext = new _g.kl("CreateItemResponseMessageSuccess", "CreateItemResponseMessageFailure", "CreateItemResponseCompleted")
    }
};
_g.cs = function() {
    _g.cs.initializeBase(this);
    this.__type = _g.cs._dataContractName
};
_g.e = function(n) {
    _g.e.initializeBase(this);
    this.__type = _g.e._dataContractName;
    this.Id = n
};
_g.e.b = function(n) {
    if (!n) return null;
    var t = new _g.e(n);
    t.Id = n;
    return t
};
_g.e.a = function(n, t) {
    if (_g.dl.isInstanceOfType(n)) {
        var r = new _g.bn(n.Id);
        t || (r.ChangeKey = n.ChangeKey);
        return r
    } else {
        var i = new _g.e(n.Id);
        t || (i.ChangeKey = n.ChangeKey);
        return i
    }
};
_g.cz = function(n) {
    _g.cz.initializeBase(this);
    this.__type = _g.cz._dataContractName;
    this.Value = n
};
_g.cz.a = function(n) {
    return !n || _j.h.b(n.Value)
};
_g.hl = function(n) {
    _g.hl.initializeBase(this, [n])
};
_g.hl.prototype = {
    clientStoreItem: 0,
    folderToReloadOnError: null,
    isReferencedItemRecurringMaster: !1,
    instanceKeysToRemoveFromPendingOperations: null,
    folderIdForInstanceKeysToRemoveFromPendingOperations: null
};
_g.iB = function(n) {
    _g.iB.initializeBase(this, [n])
};
_g.iB.prototype = {
    b: !1
};
_g.z = function() {
    _g.z.initializeBase(this);
    this.__type = _g.z._dataContractName
};
_g.z._TZ = function(n, t, i, r) {
    if (t !== i && n) {
        r.a(!0, n, i, n.StartTimeZoneId, ["Start"], ["StartWallClock"]);
        r.a(!0, n, i, n.EndTimeZoneId, ["End"], ["EndWallClock"]);
        r.a(!1, n, i, t, ["DateTimeStamp", "TailoredXpEntitiesSourceUpdatedTime", "OriginalStart", "AppointmentReplyTime"], null);
        _g.M._TZ(n, t, i, r)
    }
};
_g.z.prototype = {
    unfoldedIndex: 0
};
_g.bY = function(n) {
    _g.bY.initializeBase(this, [n])
};
_g.bY.b = function(n, t, i) {
    if (t && t.explicitLogonUser) {
        i.val = 307;
        return !1
    }
    if (_j.u.a(n.ViewFilter) || n.ViewFilter !== "All") {
        i.val = 308;
        return !1
    }
    if (!_j.h.a(n.FromFilter)) {
        i.val = 309;
        return !1
    }
    var u = !1;
    var r = n.SortOrder;
    if (r) {
        if (r.length === 1 || r.length === 2) {
            var f = r[0];
            f.Order === _g.bY.a && (f.Path.FieldURI === "ConversationLastDeliveryTime" || f.Path.FieldURI === "ConversationLastDeliveryOrRenewTime") && (u = _g.cz.a(n.QueryString))
        }
    } else u = _g.cz.a(n.QueryString);
    i.val = u ? -1 : 311;
    return u
};
_g.bY.prototype = {
    itemLastDeliveryTime: null
};
_g.bt = function(n) {
    _g.bt.initializeBase(this, [n])
};
_g.bt.c = function(n) {
    return _g.D.a(n, "DateTimeReceived")
};
_g.bt.d = function(n) {
    var f = _g.bt.b(n);
    if (n.Restriction || n.Traversal !== "Shallow" || _j.u.a(n.ViewFilter) || n.ViewFilter !== "All" || !_g.bt.e(n.Paging) && !_g.bt.f(n.Paging) || !_j.h.a(n.FromFilter)) return !1;
    var i = !1;
    var t = n.SortOrder;
    if (t) {
        if (t.length === 1) {
            var r = t[0];
            var u = _g.bt.c(f);
            r.Order === _g.bt.a && r.Path.FieldURI === u && (i = _g.cz.a(n.QueryString))
        }
    } else i = _g.cz.a(n.QueryString);
    return i
};
_g.bt.b = function(n) {
    _a.c.a(n, "request");
    var t = n.ParentFolderIds;
    _a.c.a(t, "ParentFolderIds");
    _a.c.e(t.length, 1, 1, "ParentFolderIds should contain exactly one ID.");
    var i = t[0];
    _a.c.b(i, "ParentFolderIds[0]");
    return i
};
_g.bt.e = function(n) {
    return _g.L.isInstanceOfType(n) && n.BasePoint === "Beginning"
};
_g.bt.f = function(n) {
    return _g.bj.isInstanceOfType(n) && _g.ba.isInstanceOfType(n.Condition.Item)
};
_g.bt.prototype = {
    tableSize: 0,
    loadedStartIndex: 0,
    firstMatchingRowIndex: 0,
    itemReceivedTime: null,
    isReload: !1
};
_g.kC = function() {
    _g.kC.initializeBase(this)
};
_g.kC.prototype = {
    Sender: null,
    Subject: null,
    PreviewText: null,
    ItemId: null,
    ConversationId: null,
    IsClutter: !1,
    SenderSmtpEmailAddress: null,
    InferenceClassification: "Focused"
};
_g.fW = function(n) {
    _g.fW.initializeBase(this, [n])
};
_g.fW.a = function(n, t, i, r, u, f, e) {
    var o = new _g.fW(n);
    o.lastModifiedTimeDictionary = t;
    o.currentUserOptionsIgnoringDeletedItems = i;
    o.currentUserOptionsSortOrder = r;
    o.requestIgnoringDeleteditems = u;
    o.explicitLogonUser = f;
    o.actionName = e;
    return o
};
_g.fW.prototype = {
    lastModifiedTimeDictionary: null,
    currentUserOptionsIgnoringDeletedItems: !1,
    currentUserOptionsSortOrder: "TreeOrderAscending",
    requestIgnoringDeleteditems: !1,
    a: function(n) {
        _g.hM.prototype.a.call(this, n);
        this.isAutomated = !0
    }
};
_g.bz = function(n) {
    _g.bz.initializeBase(this, [n])
};
_g.bz.prototype = {
    clientStoreItem: 0,
    requireNormalizedBody: !1
};
_g.W = function(n, t) {
    _g.W.initializeBase(this);
    this.__type = _g.W._dataContractName;
    this.FaultMessage = n;
    this.ErrorCode = t
};
_g.W.c = function(n) {
    return !_g.bs.a(n.ErrorCode)
};
_g.W.b = function(n) {
    var t = _a.c.l(n);
    if (!t) {
        var r = n.ErrorCode;
        var i = _ff.C.toString(r);
        t = "HTTP_" + (i === "" ? r : i)
    }
    return t
};
_g.W.a = function(n) {
    var t = n.__type;
    return !!t && t === _g.W._dataContractName
};
_g.eC = function() {
    _g.eC.initializeBase(this);
    this.__type = _g.eC._dataContractName
};
_g.eC.prototype = {
    ErrorInfo: null
};
_g.iZ = function(n) {
    _g.iZ.initializeBase(this, [n])
};
_g.iZ.prototype = {
    a: function(n) {
        _g.hM.prototype.a.call(this, n);
        this.isAutomated = !0
    }
};
_g.je = function(n) {
    _g.je.initializeBase(this, [n])
};
_g.je.prototype = {
    folderToReloadOnError: null
};
_g.bq = function() {
    _g.bq.initializeBase(this);
    this.__type = _g.bq._dataContractName
};
_g.bq._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["LastModifiedTime"], null)
};
_g.dD = function() {
    this.ParentItemId = undefined;
    this.IsAttachmentItemAttachment = undefined;
    this.MimeContent = undefined;
    this.IsIrmRestricted = undefined;
    _g.dD.initializeBase(this);
    this.__type = _g.dD._dataContractName
};
_g.dD._TZ = function(n, t, i, r) {
    _g.bq._TZ(n, t, i, r)
};
_g.dj = function() {
    _g.dj.initializeBase(this);
    this.__type = _g.dj._dataContractName
};
_g.dj.prototype = {
    b: !0,
    a: null
};
_g.dv = function() {
    _g.dv.initializeBase(this)
};
_g.dv.a = function(n, t) {
    if (_g.s.isInstanceOfType(n) && _g.s.isInstanceOfType(t)) {
        var r = n;
        var i = t;
        var f = r.Mailbox ? r.Mailbox.EmailAddress : "";
        var u = i.Mailbox ? i.Mailbox.EmailAddress : "";
        return r.Id === i.Id && f === u
    } else return !n || !t ? n === t : n.Id === t.Id
};
_g.ck = function() {
    _g.ck.initializeBase(this);
    this.__type = _g.ck._dataContractName
};
_g.ck.prototype = {
    WasLoadedFromServer: !1,
    IsLoadingFromServer: !1,
    PopulateFromServerData: function(n) {
        this.RmsTemplates = n.RmsTemplates;
        this.MessageClassifications = n.MessageClassifications;
        this.OmeSettings = n.OmeSettings;
        this.IsLoadingFromServer = !1;
        this.WasLoadedFromServer = !0
    }
};
_g.jm = function(n) {
    _g.jm.initializeBase(this, [n])
};
_g.jm.prototype = {
    clientStoreItem: 0,
    folderToReloadOnError: null,
    instanceKeysToRemoveFromPendingOperations: null,
    folderIdForInstanceKeysToRemoveFromPendingOperations: null
};
_g.bP = function(n, t) {
    _g.bP.initializeBase(this);
    this.a = n;
    this.DisplayText = n.Name;
    this.b = t
};
_g.bP.prototype = {
    a: null,
    b: 0
};
_g.jz = function() {
    _g.jz.initializeBase(this)
};
_g.jz.prototype = {
    Item: null,
    Conversation: null,
    Prior: null,
    Reload: !1
};
_g.P = function() {
    _g.P.initializeBase(this);
    this.__type = _g.P._dataContractName
};
_g.P.b = function() {
    if (!_g.P.a) {
        _g.P.a = new _g.P;
        _g.P.a.CheckCRLOnSend = !1;
        _g.P.a.DLExpansionTimeout = 6e4;
        _g.P.a.UseSecondaryProxiesWhenFindingCertificates = !0;
        _g.P.a.CRLConnectionTimeout = 6e4;
        _g.P.a.CRLRetrievalTimeout = 1e4;
        _g.P.a.DisableCRLCheck = !1;
        _g.P.a.AlwaysSign = !1;
        _g.P.a.AlwaysEncrypt = !1;
        _g.P.a.ClearSign = !0;
        _g.P.a.IncludeCertificateChainWithoutRootCertificate = !1;
        _g.P.a.IncludeCertificateChainAndRootCertificate = !1;
        _g.P.a.EncryptTemporaryBuffers = !0;
        _g.P.a.SignedEmailCertificateInclusion = !0;
        _g.P.a.BccEncryptedEmailForking = 0;
        _g.P.a.IncludeSMIMECapabilitiesInMessage = !1;
        _g.P.a.CopyRecipientHeaders = !1;
        _g.P.a.OnlyUseSmartCard = !1;
        _g.P.a.TripleWrapSignedEncryptedMail = !1;
        _g.P.a.UseKeyIdentifier = !1;
        _g.P.a.EncryptionAlgorithms = "0x6610";
        _g.P.a.SigningAlgorithms = "0x8004";
        _g.P.a.ForceSmimeClientUpgrade = !0;
        _g.P.a.SenderCertificateAttributesToDisplay = "";
        _g.P.a.AllowUserChoiceOfSigningCertificate = !1
    }
    return _g.P.a
};
_g.jK = function(n) {
    _g.jK.initializeBase(this, [n])
};
_g.jK.prototype = {
    a: function(n) {
        _g.hM.prototype.a.call(this, n);
        this.isAutomated = !0
    }
};
_g.jL = function(n) {
    _g.jL.initializeBase(this, [n])
};
_g.jL.prototype = {
    a: function(n) {
        _g.hM.prototype.a.call(this, n);
        this.isAutomated = !0
    }
};
_g.jM = function(n) {
    _g.jM.initializeBase(this, [n])
};
_g.jM.prototype = {
    a: function(n) {
        _g.hM.prototype.a.call(this, n);
        this.isAutomated = !0
    }
};
_g.S = function() {
    _g.S.initializeBase(this);
    this.__type = _g.S._dataContractName
};
_g.S.prototype = {
    subscriptionIdSuffix: ""
};
_g.cm = function() {
    _g.cm.initializeBase(this)
};
_g.cm.prototype = {
    d: null,
    c: null,
    b: null,
    e: null,
    a: null
};
_g.jS = function(n) {
    _g.jS.initializeBase(this, [n])
};
_g.jS.prototype = {
    a: function(n) {
        _g.hM.prototype.a.call(this, n);
        this.isAutomated = !0
    }
};
_g.jT = function(n) {
    _g.jT.initializeBase(this, [n])
};
_g.jT.prototype = {
    a: function(n) {
        _g.hM.prototype.a.call(this, n);
        this.isAutomated = !0
    }
};
_g.gG = function(n) {
    _g.gG.initializeBase(this, [n])
};
_g.gG.prototype = {
    clientStoreItem: 0,
    itemIds: null,
    folderToReloadOnError: null,
    clientStoreBodyValue: null,
    inboxFolderId: null,
    outboxFolderId: null,
    isFlagConversation: !1,
    flag: null,
    rightsManagementLicenseData: null,
    isUpdatingRightsManagementLicenseData: !1,
    outboxItemId: null,
    parentFolderId: null,
    conversationId: null,
    parentConversationNodeId: null,
    bodySubstring: null,
    isReferencedItemRecurring: !1,
    itemPartsOrderDescending: !1,
    isTextBodyValue: !1,
    instanceKeysToRemoveFromPendingOperations: null,
    folderIdForInstanceKeysToRemoveFromPendingOperations: null,
    resendItemId: null
};
_g.dt = function() {
    _g.dt.initializeBase(this)
};
_g.dt._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["CreatedDateTime", "ServerCreatedDateTime"], null)
};
_g.cS = function() {
    _g.cS.initializeBase(this);
    this.__type = _g.cS._dataContractName
};
_g.cS._TZ = function(n, t, i, r) {
    _g.dG._TZ(n, t, i, r)
};
_g.fj = function() {
    _g.fj.initializeBase(this);
    this.__type = _g.fj._dataContractName
};
_g.fj._TZ = function(n, t, i, r) {
    _g.eL._TZ(n, t, i, r)
};
_g.fk = function() {
    _g.fk.initializeBase(this);
    this.__type = _g.fk._dataContractName
};
_g.fk._TZ = function(n, t, i, r) {
    _g.bo._TZ(n, t, i, r)
};
_g.bJ = function(n) {
    _g.bJ.initializeBase(this);
    this.__type = _g.bJ._dataContractName;
    this.Id = n
};
_g.du = function() {
    _g.du.initializeBase(this);
    this.__type = _g.du._dataContractName
};
_g.ec = function() {
    _g.ec.initializeBase(this);
    this.__type = _g.ec._dataContractName
};
_g.ec._TZ = function(n, t, i, r) {
    _g.dt._TZ(n, t, i, r)
};
_g.hO = function() {
    _g.hO.initializeBase(this);
    this.__type = _g.hO._dataContractName
};
_g.ee = function() {
    _g.ee.initializeBase(this);
    this.__type = _g.ee._dataContractName
};
_g.ee._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["ApprovalDecisionTime"], null)
};
_g.bi = function(n) {
    _g.bi.initializeBase(this);
    this.__type = _g.bi._dataContractName;
    this.Id = n
};
_g.fr = function() {
    _g.fr.initializeBase(this);
    this.__type = _g.fr._dataContractName
};
_g.hY = function() {
    _g.hY.initializeBase(this);
    this.__type = _g.hY._dataContractName
};
_g.hc = function() {
    _g.hc.initializeBase(this)
};
_g.ft = function() {
    _g.ft.initializeBase(this)
};
_g.kr = function() {
    _g.kr.initializeBase(this)
};
_g.ef = function() {
    _g.ef.initializeBase(this)
};
_g.he = function() {
    _g.he.initializeBase(this)
};
_g.hf = function() {
    _g.hf.initializeBase(this)
};
_g.kv = function() {
    _g.kv.initializeBase(this)
};
_g.eg = function() {
    _g.eg.initializeBase(this);
    this.__type = _g.eg._dataContractName
};
_g.t = function(n, t) {
    _g.t.initializeBase(this);
    this.__type = _g.t._dataContractName;
    this.BodyType = n;
    this.Value = t
};
_g.hh = function() {
    _g.hh.initializeBase(this);
    this.__type = _g.hh._dataContractName
};
_g.ic = function() {
    _g.ic.initializeBase(this);
    this.__type = _g.ic._dataContractName
};
_g.ie = function() {
    _g.ie.initializeBase(this);
    this.__type = _g.ie._dataContractName;
    this.Name = _name
};
_g.ei = function() {
    _g.ei.initializeBase(this);
    this.__type = _g.ei._dataContractName
};
_g.ei._TZ = function(n, t, i, r) {
    _g.cc._TZ(n, t, i, r)
};
_g.bC = function() {
    _g.bC.initializeBase(this);
    this.__type = _g.bC._dataContractName
};
_g.ClientVersionProvider = function() {};
_g.hi = function() {
    _g.hi.initializeBase(this);
    this.__type = _g.hi._dataContractName;
    this.SubscriptionGuid = _subscriptionGuid;
    this.EmailAddress = _emailAddress;
    this.DisplayName = _displayName
};
_g.dw = function() {
    _g.dw.initializeBase(this);
    this.__type = _g.dw._dataContractName
};
_g.dw._TZ = function(n, t, i, r) {
    _g.M._TZ(n, t, i, r)
};
_g.ek = function() {
    _g.ek.initializeBase(this);
    this.__type = _g.ek._dataContractName
};
_g.cl = function(n) {
    _g.cl.initializeBase(this);
    this.__type = _g.cl._dataContractName;
    this.InternetMessageId = n;
    this.Items = new Array(0)
};
_g.el = function(n) {
    _g.el.initializeBase(this);
    this.__type = _g.el._dataContractName;
    this.ThreadId = n
};
_g.el._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["LastDeliveryTime"], null)
};
_g.kx = function() {
    _g.kx.initializeBase(this)
};
_g.cV = function() {
    _g.cV.initializeBase(this);
    this.__type = _g.cV._dataContractName
};
_g.cV._TZ = function(n, t, i, r) {
    _g.dG._TZ(n, t, i, r)
};
_g.s = function(n) {
    _g.s.initializeBase(this);
    this.__type = _g.s._dataContractName;
    this.Id = n
};
_g.dy = function() {
    _g.dy.initializeBase(this);
    this.__type = _g.dy._dataContractName
};
_g.dy._TZ = function(n, t, i, r) {
    _g.M._TZ(n, t, i, r)
};
_g.eq = function() {
    _g.eq.initializeBase(this);
    this.__type = _g.eq._dataContractName
};
_g.cH = function() {
    _g.cH.initializeBase(this);
    this.__type = _g.cH._dataContractName
};
_g.g = function() {
    _g.g.initializeBase(this);
    this.__type = _g.g._dataContractName
};
_g.iE = function() {
    _g.iE.initializeBase(this);
    this.__type = _g.iE._dataContractName
};
_g.T = function() {
    _g.T.initializeBase(this);
    this.__type = _g.T._dataContractName
};
_g.O = function() {
    _g.O.initializeBase(this);
    this.__type = _g.O._dataContractName
};
_g.er = function() {
    _g.er.initializeBase(this);
    this.__type = _g.er._dataContractName;
    this.Body = new _g.et
};
_g.et = function() {
    _g.et.initializeBase(this);
    this.__type = _g.et._dataContractName
};
_g.cI = function() {
    _g.cI.initializeBase(this);
    this.__type = _g.cI._dataContractName
};
_g.cI._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["StartDate", "DueDate", "CompleteDate"], null)
};
_g.m = function(n) {
    _g.m.initializeBase(this);
    this.__type = _g.m._dataContractName;
    this.Id = n
};
_g.bD = function() {
    _g.bD.initializeBase(this);
    this.__type = _g.bD._dataContractName
};
_g.bL = function() {
    _g.bL.initializeBase(this);
    this.__type = _g.bL._dataContractName
};
_g.bL._TZ = function(n, t, i, r) {
    _g.cc._TZ(n, t, i, r)
};
_g.iH = function() {};
_g.iH.a = function(n) {
    var t = _ff.e;
    return n === t || n.inheritsFrom(t) ? new n : null
};
_g.cX = function() {
    _g.cX.initializeBase(this);
    this.__type = _g.cX._dataContractName
};
_g.L = function(n) {
    _g.L.initializeBase(this);
    this.__type = _g.L._dataContractName;
    this.BasePoint = n
};
_g.gi = function() {
    _g.gi.initializeBase(this);
    this.__type = _g.gi._dataContractName
};
_g.iW = function() {
    _g.iW.initializeBase(this);
    this.__type = _g.iW._dataContractName
};
_g.ba = function() {
    _g.ba.initializeBase(this);
    this.__type = _g.ba._dataContractName
};
_g.dE = function() {
    _g.dE.initializeBase(this);
    this.__type = _g.dE._dataContractName;
    this.Items = new Array(0)
};
_g.M = function() {
    _g.M.initializeBase(this);
    this.__type = _g.M._dataContractName
};
_g.M._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["DateTimeReceived", "DateTimeSent", "DateTimeCreated", "ReminderDueBy", "ReminderNextTime", "LastModifiedTime", "RetentionDate", "ReceivedOrRenewTime", "RenewTime", "ReturnTime", "LastSmartResponseTime", "ExtractedCardAndActionsLastUpdatedTime"], null)
};
_g.gj = function() {
    _g.gj.initializeBase(this);
    this.__type = _g.gj._dataContractName
};
_g.eD = function(n, t, i) {
    _g.eD.initializeBase(this);
    this.__type = _g.eD._dataContractName;
    this.Name = n;
    this.Longitude = t;
    this.Latitude = i
};
_g.iY = function() {
    _g.iY.initializeBase(this);
    this.__type = _g.iY._dataContractName
};
_g.iY._TZ = function(n, t, i, r) {
    _g.dt._TZ(n, t, i, r)
};
_g.iX = function() {
    _g.iX.initializeBase(this);
    this.__type = _g.iX._dataContractName
};
_g.iX._TZ = function(n, t, i, r) {
    _g.dt._TZ(n, t, i, r)
};
_g.dF = function(n, t, i, r) {
    _g.dF.initializeBase(this);
    this.__type = _g.dF._dataContractName;
    this.MailboxId = n;
    this.DisplayName = t;
    this.ItemCount = i;
    this.Size = r
};
_g.jd = function() {
    _g.jd.initializeBase(this);
    this.__type = _g.jd._dataContractName
};
_g.cY = function() {
    _g.cY.initializeBase(this);
    this.__type = _g.cY._dataContractName
};
_g.eE = function() {
    _g.eE.initializeBase(this);
    this.__type = _g.eE._dataContractName
};
_g.cp = function() {
    _g.cp.initializeBase(this);
    this.__type = _g.cp._dataContractName
};
_g.cp._TZ = function(n, t, i, r) {
    if (t !== i && n) {
        r.a(!1, n, i, t, ["DateTimeStamp"], null);
        _g.J._TZ(n, t, i, r)
    }
};
_g.dG = function() {
    _g.dG.initializeBase(this);
    this.__type = _g.dG._dataContractName
};
_g.dG._TZ = function(n, t, i, r) {
    if (t !== i && n) {
        r.a(!1, n, i, t, ["ProposedStart", "ProposedEnd"], null);
        _g.gO._TZ(n, t, i, r)
    }
};
_g.bZ = function() {
    _g.bZ.initializeBase(this);
    this.__type = _g.bZ._dataContractName
};
_g.bZ._TZ = function(n, t, i, r) {
    if (t !== i && n) {
        r.a(!0, n, i, n.StartTimeZoneId, ["Start"], ["StartWallClock"]);
        r.a(!0, n, i, n.EndTimeZoneId, ["End"], ["EndWallClock"]);
        r.a(!1, n, i, t, ["OriginalStart", "AppointmentReplyTime"], null);
        _g.cp._TZ(n, t, i, r)
    }
};
_g.cq = function() {
    _g.cq.initializeBase(this);
    this.__type = _g.cq._dataContractName
};
_g.cq._TZ = function(n, t, i, r) {
    if (t !== i && n) {
        r.a(!1, n, i, t, ["Start", "End", "ProposedStart", "ProposedEnd"], null);
        _g.cp._TZ(n, t, i, r)
    }
};
_g.jh = function() {
    _g.jh.initializeBase(this);
    this.__type = _g.jh._dataContractName
};
_g.J = function() {
    _g.J.initializeBase(this);
    this.__type = _g.J._dataContractName
};
_g.J._TZ = function(n, t, i, r) {
    if (t !== i && n) {
        r.a(!1, n, i, t, ["LastActionTime"], null);
        _g.M._TZ(n, t, i, r)
    }
};
_g.eF = function(n) {
    _g.eF.initializeBase(this);
    this.__type = _g.eF._dataContractName;
    this.Value = n
};
_g.gn = function() {
    _g.gn.initializeBase(this);
    this.__type = _g.gn._dataContractName
};
_g.eG = function() {
    _g.eG.initializeBase(this);
    this.__type = _g.eG._dataContractName
};
_g.cL = function() {
    _g.cL.initializeBase(this);
    this.__type = _g.cL._dataContractName
};
_g.cL._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["ReferenceTime", "CustomReminderTime", "DueDate"], null)
};
_g.cZ = function() {
    _g.cZ.initializeBase(this);
    this.__type = _g.cZ._dataContractName
};
_g.eH = function() {
    _g.eH.initializeBase(this);
    this.__type = _g.eH._dataContractName
};
_g.eI = function() {
    _g.eI.initializeBase(this);
    this.__type = _g.eI._dataContractName
};
_g.bE = function() {
    _g.bE.initializeBase(this);
    this.__type = _g.bE._dataContractName
};
_g.jn = function() {
    _g.jn.initializeBase(this);
    this.__type = _g.jn._dataContractName
};
_g.jr = function() {
    _g.jr.initializeBase(this);
    this.__type = _g.jr._dataContractName
};
_g.js = function() {
    _g.js.initializeBase(this);
    this.__type = _g.js._dataContractName
};
_g.js._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["WhenChanged"], null)
};
_g.kD = function() {};
_g.kD.prototype = {
    dw: function(n, t, i, r) {
        this.jC(Number, "AcceptChatSession", {
            chatSessionId: n
        }, t, i, r)
    },
    U: function(n, t, i, r, u) {
        this.jC(0, "AcceptPersonaLinkSuggestion", {
            linkToPersonaId: n,
            suggestedPersonaId: t
        }, i, r, u)
    },
    dx: function(n, t, i, r) {
        this.jC(0, "AcceptSharedCalendarInvite", n, t, i, r)
    },
    dy: function(n, t, i, r) {
        this.jC(0, "AddActiveRetentionPolicyTags", n, t, i, r)
    },
    V: function(n, t, i, r) {
        this.jC(0, "AddEntityFeedback", n, t, i, r)
    },
    W: function(n, t, i, r) {
        this.jC(0, "AddEventToMyCalendar", {
            request: n
        }, t, i, r)
    },
    dz: function(n, t, i, r) {
        this.jC(Boolean, "AddFavorite", {
            instantMessageBuddy: n
        }, t, i, r)
    },
    dA: function(n, t, i, r) {
        this.jC(0, "AddFeedSubscriptions", n, t, i, r)
    },
    X: function(n, t, i, r) {
        this.jC(0, "AddNewAttachmentDataProvider", n, t, i, r)
    },
    Y: function(n, t, i, r) {
        this.jC(0, "AddSharedCalendar", {
            request: n
        }, t, i, r)
    },
    dB: function(n, t, i, r, u) {
        this.jC(Boolean, "AddSharedFolders", {
            displayName: n,
            primarySMTPAddress: t
        }, i, r, u)
    },
    Z: function(n, t, i, r) {
        this.jC(0, "AddTailoredExperienceEventsToCalendar", n, t, i, r)
    },
    j: function(n, t, i, r) {
        this.jD("AddTrustedSender", {
            itemId: n
        }, t, i, r)
    },
    ba: function(n, t, i, r) {
        this.jD("ApplyBulkItemAction", n, t, i, r)
    },
    k: function(n, t, i, r) {
        this.jD("ApplyConversationAction", n, t, i, r)
    },
    dC: function(n, t, i, r) {
        this.jC(0, "ApplyGroupedItemAction", n, t, i, r)
    },
    l: function(n, t, i, r) {
        this.jD("ApplyMessageAction", n, t, i, r)
    },
    bb: function(n, t, i, r) {
        this.jC(Boolean, "CancelAttachment", {
            cancellationId: n
        }, t, i, r)
    },
    m: function(n, t, i, r) {
        this.jD("CancelCalendarEvent", n, t, i, r)
    },
    bc: function(n, t, i, r) {
        this.jC(Boolean, "CancelConvertLocalToRefAttachment", n, t, i, r)
    },
    bd: function(n, t, i, r) {
        this.jC(Boolean, "CancelConvertRefToLocalAttachment", n, t, i, r)
    },
    be: function(n, t, i, r) {
        this.jC(0, "CancelMeetingPoll", n, t, i, r)
    },
    dD: function(n, t, i, r) {
        this.jC(Boolean, "CancelSaveAttachmentsToCloud", {
            itemId: n
        }, t, i, r)
    },
    dE: function(n, t, i, r) {
        this.jC(0, "CheckPendingAttachmentOperation", n, t, i, r)
    },
    dF: function(n, t, i, r) {
        this.jC(0, "CheckPermissionsForPaymentsSetup", n, t, i, r)
    },
    dG: function(n, t, i, r) {
        this.jC(0, "ClearMobileDevice", n, t, i, r)
    },
    dH: function(n, t, i, r) {
        this.jC(0, "ClearTextMessagingAccount", n, t, i, r)
    },
    dI: function(n, t, i, r) {
        this.jC(0, "CompareTextMessagingVerificationCode", n, t, i, r)
    },
    dJ: function(n, t, i, r) {
        this.jC(Boolean, "ConnectedAccountsNotification", {
            isOWALogon: n
        }, t, i, r)
    },
    bf: function(n, t, i, r) {
        this.jC(0, "ConvertAttachmentToInline", {
            requestObject: n
        }, t, i, r)
    },
    n: function(n, t, i, r) {
        this.jC(0, "ConvertIcsToCalendarItem", n, t, i, r)
    },
    bg: function(n, t, i, r) {
        this.jC(0, "ConvertId", n, t, i, r)
    },
    bh: function(n, t, i, r) {
        this.jC(String, "ConvertLocalToRefAttachment", {
            requestObject: n
        }, t, i, r)
    },
    bi: function(n, t, i, r) {
        this.jC(String, "ConvertRefToLocalAttachment", {
            requestObject: n
        }, t, i, r)
    },
    dK: function(n, t, i, r) {
        this.jC(0, "CopyItem", n, t, i, r)
    },
    d: function(n, t, i, r) {
        this.jC(0, "CreateAttachment", n, t, i, r)
    },
    bj: function(n, t, i, r, u, f, e, o, s, h, c, l, a) {
        this.jC(String, "CreateAttachmentFromAttachmentDataProvider", {
            itemId: n,
            attachmentDataProviderId: t,
            location: i,
            attachmentId: r,
            subscriptionId: u,
            channelId: f,
            dataProviderParentItemId: e,
            providerEndpointUrl: o,
            cancellationId: l,
            isInline: a
        }, s, h, c)
    },
    bk: function(n, t, i, r) {
        this.jC(0, "CreateAttachmentFromLocalFile", n, t, i, r)
    },
    bl: function(n, t, i, r, u, f, e, o, s) {
        this.jC(String, "CreateAttachmentFromUri", {
            itemId: n,
            uri: t,
            name: i,
            subscriptionId: r,
            isInline: o,
            contentId: s
        }, u, f, e)
    },
    dL: function(n, t, i, r) {
        this.jC(0, "CreateAttachmentSharingLink", n, t, i, r)
    },
    dM: function(n, t, i, r) {
        this.jC(0, "CreateBirthdayEvent", n, t, i, r)
    },
    dN: function(n, t, i, r) {
        this.jC(0, "CreateBookingCustomQuestionCommand", n, t, i, r)
    },
    dO: function(n, t, i, r) {
        this.jC(0, "CreateBookingService", n, t, i, r)
    },
    dP: function(n, t, i, r) {
        this.jC(0, "CreateBookingStaff", n, t, i, r)
    },
    dQ: function(n, t, i, r, u, f) {
        this.jC(0, "CreateCalendar", {
            newCalendarName: n,
            parentGroupGuid: t,
            emailAddress: i
        }, r, u, f)
    },
    o: function(n, t, i, r) {
        this.jD("CreateCalendarEvent", n, t, i, r)
    },
    dS: function(n, t, i, r) {
        this.jC(0, "CreateCalendarGroup", {
            newGroupName: n
        }, t, i, r)
    },
    dT: function(n, t, i, r) {
        this.jC(0, "CreateConnectedAccount", n, t, i, r)
    },
    dU: function(n, t, i, r, u, f) {
        this.jC(0, "CreateContactFolder", {
            parentFolderId: n,
            displayName: t,
            priority: i
        }, r, u, f)
    },
    dV: function(n, t, i, r) {
        this.jC(0, "CreateFolder", n, t, i, r)
    },
    p: function(n, t, i, r) {
        this.jC(0, "CreateItem", n, t, i, r)
    },
    bm: function(n, t, i, r) {
        this.jC(0, "CreateMeetingPoll", n, t, i, r)
    },
    dW: function(n, t, i, r, u) {
        this.jC(0, "CreateMeetNow", {
            sipUri: n,
            subject: t
        }, i, r, u)
    },
    dX: function(n, t, i, r) {
        this.jC(0, "CreateModernGroup", {
            request: n
        }, t, i, r)
    },
    bn: function(n, t, i, r, u) {
        this.jC(0, "CreateOnlineMeeting", {
            sipUri: n,
            itemId: t
        }, i, r, u)
    },
    dY: function(n, t, i, r) {
        this.jC(0, "CreateOrUpdateFocusedOtherOverride", n, t, i, r)
    },
    q: function(n, t, i, r) {
        this.jC(0, "CreatePersona", {
            request: n
        }, t, i, r)
    },
    bo: function(n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
        this.jC(0, "CreateReferenceAttachmentFromAttachmentDataProvider", {
            itemId: n,
            attachmentDataProviderId: t,
            location: i,
            attachmentId: r,
            dataProviderParentItemId: u,
            providerEndpointUrl: f,
            cancellationId: h,
            thumbnailUrl: c,
            previewUrl: l,
            isFolder: a,
            mimeType: v
        }, e, o, s)
    },
    bp: function(n, t, i, r) {
        this.jC(String, "CreateReferenceAttachmentFromLocalFile", {
            requestObject: n
        }, t, i, r)
    },
    bq: function(n, t, i, r, u) {
        this.jC(String, "CreateResendDraft", {
            ndrMessageId: n,
            draftsFolderId: t
        }, i, r, u)
    },
    dZ: function(n, t, i, r) {
        this.jC(0, "CreateResponseFromModernGroup", n, t, i, r)
    },
    ea: function(n, t, i, r) {
        this.jC(0, "CreateSchedule", n, t, i, r)
    },
    eb: function(n, t, i, r) {
        this.jC(0, "CreateSharePointDocumentAndGetEditLink", n, t, i, r)
    },
    ec: function(n, t, i, r) {
        this.jC(0, "CreateSharingPermission", n, t, i, r)
    },
    br: function(n, t, i, r) {
        this.jC(0, "CreateSweepRuleForSender", n, t, i, r)
    },
    ed: function(n, t, i, r) {
        this.jC(0, "CreateSweepRuleForSystemCategory", n, t, i, r)
    },
    ee: function(n, t, i, r, u) {
        this.jC(0, "CreateTaskFolder", {
            newTaskFolderName: n,
            parentGroupGuid: t
        }, i, r, u)
    },
    ef: function(n, t, i, r) {
        this.jC(0, "CreateUnifiedGroup", {
            request: n
        }, t, i, r)
    },
    r: function(n, t, i, r) {
        this.jC(0, "DeleteAttachment", n, t, i, r)
    },
    eg: function(n, t, i, r) {
        this.jC(0, "DeleteBookingCustomQuestion", n, t, i, r)
    },
    eh: function(n, t, i, r) {
        this.jC(0, "DeleteBookingService", n, t, i, r)
    },
    ei: function(n, t, i, r) {
        this.jC(0, "DeleteBookingStaff", n, t, i, r)
    },
    ej: function(n, t, i, r) {
        this.jC(0, "DeleteCalendar", {
            itemId: n
        }, t, i, r)
    },
    s: function(n, t, i, r) {
        this.jD("DeleteCalendarEvent", n, t, i, r)
    },
    ek: function(n, t, i, r) {
        this.jC(0, "DeleteCalendarGroup", {
            groupId: n
        }, t, i, r)
    },
    el: function(n, t, i, r) {
        this.jC(0, "DeleteCalendarSharingPermissions", n, t, i, r)
    },
    em: function(n, t, i, r) {
        this.jC(0, "DeleteConnectedAccount", n, t, i, r)
    },
    en: function(n, t, i, r) {
        this.jC(Boolean, "DeleteContactFolder", {
            folderId: n
        }, t, i, r)
    },
    eo: function(n, t, i, r) {
        this.jC(0, "DeleteFolder", n, t, i, r)
    },
    ep: function(n, t, i, r) {
        this.jC(0, "DeleteFullSearchHistoryFromRest", n, t, i, r)
    },
    t: function(n, t, i, r) {
        this.jD("DeleteItem", n, t, i, r)
    },
    u: function(n, t, i, r, u) {
        this.jD("DeletePersona", {
            personaId: n,
            folderId: t
        }, i, r, u)
    },
    eq: function(n, t, i, r) {
        this.jC(Boolean, "DeletePersonas", {
            request: n
        }, t, i, r)
    },
    bs: function(n, t, i, r) {
        this.jD("DeletePlace", {
            request: n
        }, t, i, r)
    },
    er: function(n, t, i, r) {
        this.jC(0, "DeleteSchedule", n, t, i, r)
    },
    es: function(n, t, i, r) {
        this.jC(0, "DeleteSharingInvitation", n, t, i, r)
    },
    et: function(n, t, i, r) {
        this.jC(0, "DeleteSharingPermission", n, t, i, r)
    },
    eu: function(n, t, i, r) {
        this.jC(0, "DeleteTaskFolder", {
            itemId: n
        }, t, i, r)
    },
    kj: function(n, t, i, r) {
        this.jC(0, "Deprovision", n, t, i, r)
    },
    ev: function(n, t, i, r) {
        this.jC(0, "DisableApp", n, t, i, r)
    },
    ew: function(n, t, i) {
        this.jC(0, "DisableBirthdayCalendar", {}, n, t, i)
    },
    ex: function(n, t, i, r) {
        this.jC(0, "DisableExtension", n, t, i, r)
    },
    ey: function(n, t, i, r) {
        this.jC(0, "DisableUMCallAnsweringRule", n, t, i, r)
    },
    ez: function(n, t, i, r) {
        this.jC(0, "DisconnectPhoneCall", n, t, i, r)
    },
    eA: function(n, t, i, r) {
        this.jC(0, "DismissUserUnifiedGroupSuggestion", n, t, i, r)
    },
    bt: function(n, t, i, r) {
        this.jC(0, "EmptyFolder", n, t, i, r)
    },
    eB: function(n, t, i, r) {
        this.jC(0, "EnableApp", n, t, i, r)
    },
    eC: function(n, t, i) {
        this.jC(0, "EnableBirthdayCalendar", {}, n, t, i)
    },
    eD: function(n, t, i, r) {
        this.jC(0, "EnableUMCallAnsweringRule", n, t, i, r)
    },
    eE: function(n, t, i, r) {
        this.jC(0, "EndInstantSearchSession", {
            sessionId: n
        }, t, i, r)
    },
    eF: function(n, t, i, r) {
        this.jC(0, "EndSearchSession", n, t, i, r)
    },
    bu: function(n, t, i, r) {
        this.jC(0, "ExecuteEwsProxy", n, t, i, r)
    },
    eG: function(n, t, i, r) {
        this.jC(0, "ExecuteSearch", n, t, i, r)
    },
    eH: function(n, t, i, r) {
        this.jC(0, "FetchOwaUserSessions", {
            filterOnCurrentSession: r
        }, n, t, i)
    },
    eI: function(n, t, i) {
        this.jC(0, "FetchUserSubscription", {}, n, t, i)
    },
    bv: function(n, t, i, r) {
        this.jC(0, "FinalizeMeetingPoll", n, t, i, r)
    },
    eJ: function(n, t, i, r) {
        this.jC(0, "FindBookingCustomers", n, t, i, r)
    },
    eK: function(n, t, i, r) {
        this.jC(0, "FindConnectedAccounts", n, t, i, r)
    },
    bw: function(n, t, i, r) {
        this.jC(0, "FindConversation", n, t, i, r)
    },
    bx: function(n, t, i, r) {
        this.jC(0, "FindFolder", n, t, i, r)
    },
    eL: function(n, t, i, r) {
        this.jC(0, "FindInsights", n, t, i, r)
    },
    e: function(n, t, i, r) {
        this.jC(0, "FindItem", n, t, i, r)
    },
    by: function(n, t, i, r) {
        this.jC(0, "FindMeetingTimeCandidates", n, t, i, r)
    },
    eM: function(n, t, i, r) {
        this.jC(0, "FindMembersInUnifiedGroup", n, t, i, r)
    },
    v: function(n, t, i, r) {
        this.jC(0, "FindPeople", n, t, i, r)
    },
    bz: function(n, t, i, r) {
        this.jC(Array, "FindPlaces", n, t, i, r)
    },
    eN: function(n, t, i, r) {
        this.jC(0, "FindTags", n, t, i, r)
    },
    eO: function(n, t, i, r) {
        this.jC(0, "FindUnifiedGroups", n, t, i, r)
    },
    eP: function(n, t, i, r) {
        this.jC(0, "FindWeatherLocations", n, t, i, r)
    },
    bA: function(n, t, i, r) {
        this.jD("ForwardCalendarEvent", n, t, i, r)
    },
    eQ: function(n, t, i, r) {
        this.jC(0, "GetAccessTokenforResource", n, t, i, r)
    },
    bB: function(n, t, i, r) {
        this.jC(0, "GetAccountInformation", n, t, i, r)
    },
    eR: function(n, t, i, r) {
        this.jC(0, "GetActiveRetentionPolicyTags", n, t, i, r)
    },
    bC: function(n, t, i, r) {
        this.jC(String, "GetAddIns", {
            addInType: n
        }, t, i, r)
    },
    bD: function(n, t, i) {
        this.jC(0, "GetAllAttachmentDataProviderCreators", {}, n, t, i)
    },
    bE: function(n, t, i, r) {
        this.jC(Array, "GetAllAttachmentDataProviders", n, t, i, r)
    },
    eS: function(n, t, i, r) {
        this.jC(0, "GetAllowedOptions", n, t, i, r)
    },
    eT: function(n, t, i, r) {
        this.jC(0, "GetApp", n, t, i, r)
    },
    bF: function(n, t, i, r) {
        this.jC(0, "GetAttachment", n, t, i, r)
    },
    eU: function(n, t, i, r) {
        this.jC(0, "GetAttachmentDataProviderCreator", n, t, i, r)
    },
    bG: function(n, t, i) {
        this.jC(0, "GetAttachmentDataProviderGroups", {}, n, t, i)
    },
    bH: function(n, t, i, r) {
        this.jC(0, "GetAttachmentDataProviderItems", {
            request: n
        }, t, i, r)
    },
    bI: function(n, t, i) {
        this.jC(0, "GetAttachmentDataProviderRecentItems", {}, n, t, i)
    },
    bJ: function(n, t, i) {
        this.jC(0, "GetAttachmentDataProviderUploadFolderProps", {}, n, t, i)
    },
    bK: function(n, t, i) {
        this.jC(String, "GetAttachmentDownloadToken", {}, n, t, i)
    },
    eV: function(n, t, i, r, u, f, e) {
        this.jC(0, "GetAttachmentInfo", {
            attachmentId: n,
            isEdit: t,
            draftId: i,
            appId: e
        }, r, u, f)
    },
    eW: function(n, t, i, r) {
        this.jC(0, "GetAttachmentItems", n, t, i, r)
    },
    eX: function(n, t, i, r) {
        this.jC(0, "GetAttachmentPreviews", n, t, i, r)
    },
    bL: function(n, t, i, r) {
        this.jC(0, "GetAttachmentTextPreview", n, t, i, r)
    },
    eY: function(n, t, i, r) {
        this.jC(0, "GetAutoSuggestions", n, t, i, r)
    },
    eZ: function(n, t, i, r) {
        this.jC(0, "GetAvailableRetentionPolicyTags", n, t, i, r)
    },
    fa: function(n, t, i, r) {
        this.jC(0, "GetBirthdayCalendarView", n, t, i, r)
    },
    bM: function(n, t, i, r) {
        this.jC(0, "GetBirthdayEvent", n, t, i, r)
    },
    fb: function(n, t, i, r) {
        this.jC(0, "GetBookingCalendarPublishing", n, t, i, r)
    },
    fc: function(n, t, i, r) {
        this.jC(0, "GetBookingCustomQuestionsCommand", n, t, i, r)
    },
    fd: function(n, t, i, r) {
        this.jC(0, "GetBookingMailboxDiagnostics", n, t, i, r)
    },
    fe: function(n, t, i, r) {
        this.jC(0, "GetBookingMailboxes", n, t, i, r)
    },
    ff: function(n, t, i, r) {
        this.jC(0, "GetBookingService", n, t, i, r)
    },
    fg: function(n, t, i, r) {
        this.jC(0, "GetBookingServices", n, t, i, r)
    },
    fh: function(n, t, i, r) {
        this.jC(0, "GetBookingStaff", n, t, i, r)
    },
    fi: function(n, t, i, r) {
        this.jC(0, "GetBookingStatistics", n, t, i, r)
    },
    fj: function(n, t, i, r) {
        this.jC(0, "GetBookingSubscriptionInfo", n, t, i, r)
    },
    bN: function(n, t, i) {
        this.jC(0, "GetBposShellInfoNavBarData", {}, n, t, i)
    },
    fk: function(n, t, i, r) {
        this.jC(0, "GetBusinessInformation", n, t, i, r)
    },
    bO: function(n, t, i, r) {
        this.jC(0, "GetCalendarEvent", n, t, i, r)
    },
    fl: function(n, t, i, r) {
        this.jC(0, "GetCalendarFeeds", n, t, i, r)
    },
    fm: function(n, t, i, r) {
        this.jC(0, "GetCalendarFeedsLanguagesAndRegions", n, t, i, r)
    },
    w: function(n, t, i, r) {
        this.jC(0, "GetCalendarFolderConfiguration", {
            request: n
        }, t, i, r)
    },
    x: function(n, t, i) {
        this.jC(0, "GetCalendarFolders", {}, n, t, i)
    },
    fn: function(n, t, i) {
        this.jC(0, "GetCalendarNotification", {}, n, t, i)
    },
    bP: function(n, t, i) {
        this.jC(0, "GetCalendarProcessing", {}, n, t, i)
    },
    fo: function(n, t, i, r) {
        this.jC(0, "GetCalendarSharingPermissions", {
            request: n
        }, t, i, r)
    },
    y: function(n, t, i, r) {
        this.jC(0, "GetCalendarSharingRecipientInfo", {
            request: n
        }, t, i, r)
    },
    bQ: function(n, t, i, r) {
        this.jC(0, "GetCalendarView", n, t, i, r)
    },
    fp: function(n, t, i, r) {
        this.jC(0, "GetCASMailbox2", n, t, i, r)
    },
    bR: function(n, t, i, r, u) {
        this.jC(0, "GetCertsInfo", {
            certRawData: n,
            isSend: t
        }, i, r, u)
    },
    f: function(n, t, i, r) {
        this.jC(0, "GetClientAccessToken", n, t, i, r)
    },
    fq: function(n, t, i, r) {
        this.jC(0, "GetClutterState", n, t, i, r)
    },
    bS: function(n, t, i) {
        this.jC(0, "GetComplianceConfiguration", {}, n, t, i)
    },
    fr: function(n, t, i, r) {
        this.jC(0, "GetConnectedAccounts", n, t, i, r)
    },
    bT: function(n, t, i, r) {
        this.jC(0, "GetConnectSubscription", n, t, i, r)
    },
    fs: function(n, t, i, r) {
        this.jC(0, "GetConnectToSocialNetworksOAuthInfo", n, t, i, r)
    },
    z: function(n, t, i, r) {
        this.jC(0, "GetConsumerMailbox", n, t, i, r)
    },
    ft: function(n, t, i, r) {
        this.jC(0, "GetContentSubmissionRules", n, t, i, r)
    },
    bU: function(n, t, i, r) {
        this.jC(0, "GetConversationItems", n, t, i, r)
    },
    fu: function(n, t, i, r) {
        this.jC(0, "GetConversationItemsDiagnostics", n, t, i, r)
    },
    bV: function(n, t, i) {
        this.jC(Number, "GetDaysUntilPasswordExpiration", {}, n, t, i)
    },
    fv: function(n, t, i, r) {
        this.jC(0, "GetDlMembersForUnifiedGroup", n, t, i, r)
    },
    bW: function(n, t, i, r) {
        this.jC(0, "GetDlpPolicyTips", n, t, i, r)
    },
    bX: function(n, t, i, r) {
        this.jC(0, "GetEncryptionCerts", {
            request: n
        }, t, i, r)
    },
    bY: function(n, t, i, r) {
        this.jC(0, "GetExtensibilityContext", {
            request: n
        }, t, i, r)
    },
    A: function(n, t, i) {
        this.jC(0, "GetFavorites", {}, n, t, i)
    },
    fw: function(n, t, i, r) {
        this.jC(0, "GetFileItems", n, t, i, r)
    },
    fx: function(n, t, i) {
        this.jC(0, "GetFlightsOverrideData", {}, n, t, i)
    },
    bZ: function(n, t, i) {
        this.jC(Array, "GetFlightsSettings", {}, n, t, i)
    },
    fy: function(n, t, i, r, u) {
        this.jC(0, "GetFlowConversation", {
            folderId: n,
            conversationCount: t
        }, i, r, u)
    },
    fz: function(n, t, i) {
        this.jC(0, "GetFocusedInboxConfiguration", {}, n, t, i)
    },
    g: function(n, t, i, r) {
        this.jC(0, "GetFolder", n, t, i, r)
    },
    fA: function(n, t, i, r) {
        this.jC(0, "GetFolderChangeDigest", n, t, i, r)
    },
    ca: function(n, t, i) {
        this.jC(0, "GetFolderMruConfiguration", {}, n, t, i)
    },
    fB: function(n, t, i, r) {
        this.jC(0, "GetFullSearchHistoryFromRest", n, t, i, r)
    },
    fC: function(n, t, i, r, u, f, e, o) {
        this.jC(0, "GetGroup", {
            itemId: n,
            adObjectId: t,
            emailAddress: i,
            paging: r,
            resultSet: u
        }, f, e, o)
    },
    cb: function(n, t, i, r) {
        this.jC(0, "GetGroupInfo", {
            getGroupInfoRequest: n
        }, t, i, r)
    },
    fD: function(n, t, i, r) {
        this.jC(0, "GetHolidayCalendars", n, t, i, r)
    },
    fE: function(n, t, i, r) {
        this.jC(0, "GetHotmailSubscription", n, t, i, r)
    },
    fF: function(n, t, i, r) {
        this.jC(0, "GetImapSubscription", n, t, i, r)
    },
    fG: function(n, t, i, r) {
        this.jC(0, "GetInboxRule", n, t, i, r)
    },
    fH: function(n, t, i, r, u) {
        this.jC(0, "GetInlineExploreSpContent", {
            query: n,
            targetUrl: t
        }, i, r, u)
    },
    a: function(n, t, i, r) {
        this.jC(0, "GetItem", n, t, i, r)
    },
    cc: function(n, t, i, r) {
        this.jC(0, "GetLinkPreview", {
            getLinkPreviewRequest: n
        }, t, i, r)
    },
    fI: function(n, t, i) {
        this.jC(0, "GetMailboxAutoReplyConfiguration", {}, n, t, i)
    },
    cd: function(n, t, i, r) {
        this.jC(0, "GetMailboxByIdentity", n, t, i, r)
    },
    ce: function(n, t, i) {
        this.jC(0, "GetMailboxCalendarConfiguration", {}, n, t, i)
    },
    B: function(n, t, i) {
        this.jC(0, "GetMailboxJunkEmailConfiguration", {}, n, t, i)
    },
    C: function(n, t, i) {
        this.jC(0, "GetMailboxMessageConfiguration", {}, n, t, i)
    },
    fJ: function(n, t, i, r) {
        this.jC(0, "GetMailboxPermission", n, t, i, r)
    },
    fK: function(n, t, i, r) {
        this.jC(0, "GetMailboxRegionalConfiguration", n, t, i, r)
    },
    cf: function(n, t, i, r) {
        this.jC(0, "GetMailTips", n, t, i, r)
    },
    fL: function(n, t, i, r) {
        this.jC(0, "GetMeetingPoll", n, t, i, r)
    },
    fM: function(n, t, i) {
        this.jC(0, "GetMerchantStatus", {}, n, t, i)
    },
    fN: function(n, t, i) {
        this.jC(0, "GetMessageCategory", {}, n, t, i)
    },
    fO: function(n, t, i) {
        this.jC(0, "GetMessageClassification", {}, n, t, i)
    },
    cg: function(n, t, i, r) {
        this.jC(String, "GetMime", {
            itemId: n
        }, t, i, r)
    },
    fP: function(n, t, i, r) {
        this.jC(0, "GetMobileDeviceStatistics", n, t, i, r)
    },
    fQ: function(n, t, i, r) {
        this.jC(0, "GetModernGroup", {
            request: n
        }, t, i, r)
    },
    fR: function(n, t, i) {
        this.jC(0, "GetModernGroupDomain", {}, n, t, i)
    },
    fS: function(n, t, i) {
        this.jC(0, "GetModernGroups", {}, n, t, i)
    },
    fT: function(n, t, i, r) {
        this.jC(0, "GetModernGroupUnseenItems", {
            request: n
        }, t, i, r)
    },
    fU: function(n, t, i, r) {
        this.jC(0, "GetMrsConnectedAccounts", n, t, i, r)
    },
    ch: function(n, t, i, r) {
        this.jC(0, "GetNewAttachmentDataProviderCreationInfo", n, t, i, r)
    },
    fV: function(n, t, i, r) {
        this.jC(0, "GetNextMeetingWithPerson", n, t, i, r)
    },
    ci: function(n, t, i, r) {
        this.jC(0, "GetNotesForPersona", {
            getNotesForPersonaRequest: n
        }, t, i, r)
    },
    fW: function(n, t, i, r) {
        this.jC(0, "GetOAuth2AuthorizationEndpointInfo", n, t, i, r)
    },
    fX: function(n, t, i, r) {
        this.jC(0, "GetOAuth2RefreshTokenInfo", n, t, i, r)
    },
    fY: function(n, t, i) {
        this.jC(0, "GetOptionSummary", {}, n, t, i)
    },
    cj: function(n, t, i, r) {
        this.jC(0, "GetOrganizationHierarchyForPersona", {
            getOrganizationHierarchyForPersonaRequest: n
        }, t, i, r)
    },
    ck: function(n, t, i) {
        this.jC(0, "GetOtherMailboxConfiguration", {}, n, t, i)
    },
    fZ: function(n, t, i, r) {
        this.jC(0, "GetOutlookDotComMigrationDiagnostics", n, t, i, r)
    },
    ga: function(n, t, i) {
        this.jC(Array, "GetOverridableFlights", {}, n, t, i)
    },
    cl: function(n, t, i) {
        this.jC(0, "GetOwaNonBootUserConfiguration", {}, n, t, i)
    },
    h: function(n, t, i) {
        this.jC(0, "GetOwaUserConfiguration", {}, n, t, i)
    },
    cm: function(n, t, i) {
        this.jC(0, "GetOwaUserOofSettings", {}, n, t, i)
    },
    cn: function(n, t, i, r) {
        this.jC(0, "GetParcelDeliveryStatus", n, t, i, r)
    },
    D: function(n, t, i) {
        this.jC(Array, "GetPeopleFilters", {}, n, t, i)
    },
    co: function(n, t, i, r) {
        this.jC(0, "GetPeopleIKnowGraphCommand", {
            request: n
        }, t, i, r)
    },
    gb: function(n, t, i, r) {
        this.jC(0, "GetPeopleUserMeetsWith", {
            request: n
        }, t, i, r)
    },
    gc: function(n, t, i, r) {
        this.jC(0, "GetPeopleWaitingOnUser", {
            request: n
        }, t, i, r)
    },
    cp: function(n, t, i, r) {
        this.jC(0, "GetPersona", n, t, i, r)
    },
    gd: function(n, t, i, r) {
        this.jC(0, "GetPersonalListsMapping", {
            request: n
        }, t, i, r)
    },
    ge: function(n, t, i, r) {
        this.jC(0, "GetPersonalSchedulingPage", n, t, i, r)
    },
    gf: function(n, t, i, r) {
        this.jC(0, "GetPersonaModernGroupMembership", {
            request: n
        }, t, i, r)
    },
    gg: function(n, t, i, r, u) {
        this.jC(0, "GetPersonaNotes", {
            personaId: n,
            maxBytesToFetch: t
        }, i, r, u)
    },
    gh: function(n, t, i, r) {
        this.jC(0, "GetPersonaOrganizationHierarchy", {
            galObjectGuid: n
        }, t, i, r)
    },
    cq: function(n, t, i, r) {
        this.jC(Array, "GetPersonaSuggestions", {
            personaId: n
        }, t, i, r)
    },
    gi: function(n, t, i, r) {
        this.jC(0, "GetPopSubscription", n, t, i, r)
    },
    gj: function(n, t, i, r) {
        this.jC(Number, "GetPresence", {
            sipUris: n
        }, t, i, r)
    },
    E: function(n, t, i, r) {
        this.jC(0, "GetRegionalConfiguration", n, t, i, r)
    },
    F: function(n, t, i, r) {
        this.jC(0, "GetReminders", n, t, i, r)
    },
    cr: function(n, t, i, r) {
        this.jC(0, "GetRoomLists", n, t, i, r)
    },
    cs: function(n, t, i, r) {
        this.jC(Array, "GetRoomsInternal", {
            roomList: n
        }, t, i, r)
    },
    gk: function(n, t, i, r) {
        this.jC(0, "GetSchedule", n, t, i, r)
    },
    gl: function(n, t, i, r) {
        this.jC(0, "GetSchedulesView", n, t, i, r)
    },
    ct: function(n, t, i, r) {
        this.jC(0, "GetSearchSuggestions", n, t, i, r)
    },
    gm: function(n, t, i, r) {
        this.jC(0, "GetSharePointSiteDetails", {
            sharePointObjectUrl: n
        }, t, i, r)
    },
    gn: function(n, t, i, r) {
        this.jC(0, "GetSharePointTextFileContent", {
            request: n
        }, t, i, r)
    },
    cu: function(n, t, i, r) {
        this.jC(0, "GetSharingInformation", n, t, i, r)
    },
    cv: function(n, t, i, r) {
        this.jC(0, "GetSharingInvitations", n, t, i, r)
    },
    go: function(n, t, i, r) {
        this.jC(0, "GetSharingPermissionInfo", n, t, i, r)
    },
    gp: function(n, t, i, r) {
        this.jC(0, "GetSharingPermissions", n, t, i, r)
    },
    gq: function(n, t, i, r) {
        this.jC(0, "GetSocialActivityNotifications", {
            request: n
        }, t, i, r)
    },
    cw: function(n, t, i, r) {
        this.jC(0, "GetSocialActivityNotifications2", n, t, i, r)
    },
    gr: function(n, t, i, r) {
        this.jC(0, "GetStaffAvailability", n, t, i, r)
    },
    gs: function(n, t, i) {
        this.jC(0, "GetSubscription", {}, n, t, i)
    },
    gt: function(n, t, i, r) {
        this.jC(0, "GetSuggestedGroupsFromRecipients", n, t, i, r)
    },
    cx: function(n, t, i, r) {
        this.jC(0, "GetSuggestedUnifiedGroups", n, t, i, r)
    },
    gu: function(n, t, i, r) {
        this.jC(0, "GetSupportOfficeFaqs", n, t, i, r)
    },
    gv: function(n, t, i, r) {
        this.jC(0, "GetSweepRules", n, t, i, r)
    },
    gw: function(n, t, i, r) {
        this.jC(0, "GetSyncRequest", n, t, i, r)
    },
    gx: function(n, t, i) {
        this.jC(0, "GetTaskFolders", {}, n, t, i)
    },
    gy: function(n, t, i, r) {
        this.jC(0, "GetTextMessagingAccount", n, t, i, r)
    },
    G: function(n, t, i) {
        this.jC(0, "GetThemes", {}, n, t, i)
    },
    gz: function(n, t, i, r) {
        this.jC(0, "GetThreadedConversationItems", n, t, i, r)
    },
    gA: function(n, t, i, r) {
        this.jC(0, "GetTimeZone", {
            needTimeZoneList: n
        }, t, i, r)
    },
    gB: function(n, t, i, r) {
        this.jC(0, "GetTimeZoneOffsets", n, t, i, r)
    },
    cy: function(n, t, i, r) {
        this.jC(0, "GetUcwaUserConfiguration", {
            sipUri: n
        }, t, i, r)
    },
    gC: function(n, t, i, r) {
        this.jC(0, "GetUMCallAnsweringRule", n, t, i, r)
    },
    gD: function(n, t, i, r) {
        this.jC(0, "GetUMMailbox", n, t, i, r)
    },
    gE: function(n, t, i, r) {
        this.jC(0, "GetUMMailboxConfiguration", n, t, i, r)
    },
    gF: function(n, t, i, r) {
        this.jC(0, "GetUMPhoneSession", n, t, i, r)
    },
    cz: function(n, t, i, r) {
        this.jC(0, "GetUnifiedGroupDetails", n, t, i, r)
    },
    cA: function(n, t, i, r) {
        this.jC(0, "GetUnifiedGroupMembers", n, t, i, r)
    },
    cB: function(n, t, i, r) {
        this.jC(0, "GetUnifiedGroupsSettings", n, t, i, r)
    },
    cC: function(n, t, i, r) {
        this.jC(0, "GetUnifiedGroupUnseenCount", n, t, i, r)
    },
    gG: function(n, t, i) {
        this.jC(0, "GetUnseenLightningIds", {}, n, t, i)
    },
    gH: function(n, t, i, r) {
        this.jC(0, "GetUserAvailability", n, t, i, r)
    },
    i: function(n, t, i, r) {
        this.jC(0, "GetUserAvailabilityInternal", {
            request: n
        }, t, i, r)
    },
    cD: function(n, t, i, r) {
        this.jC(0, "GetUserUnifiedGroups", n, t, i, r)
    },
    gI: function(n, t, i) {
        this.jC(0, "GetUserVoiceData", {}, n, t, i)
    },
    cE: function(n, t, i, r, u, f, e) {
        this.jC(0, "GetWacAttachmentInfo", {
            attachmentId: n,
            isEdit: t,
            draftId: i,
            appId: e
        }, r, u, f)
    },
    gJ: function(n, t, i, r) {
        this.jC(String, "GetWacIframeUrl", {
            attachmentId: n
        }, t, i, r)
    },
    gK: function(n, t, i, r) {
        this.jC(0, "GetWacInfo", {
            request: n
        }, t, i, r)
    },
    gL: function(n, t, i, r) {
        this.jC(0, "GetWeatherForecast", n, t, i, r)
    },
    gM: function(n, t, i, r, u, f) {
        this.jC(0, "ImmersiveReaderProcessText", {
            itemId: n,
            sessionId: t,
            version: f
        }, i, r, u)
    },
    cF: function(n, t, i, r) {
        this.jC(0, "ImportCalendarEvent", n, t, i, r)
    },
    gN: function(n, t, i, r) {
        this.jC(0, "ImportContactList", n, t, i, r)
    },
    gO: function(n, t, i, r) {
        this.jC(0, "InstallExtension", n, t, i, r)
    },
    gP: function(n, t, i, r) {
        this.jC(Number, "InstantMessageSignIn", {
            signedInManually: n
        }, t, i, r)
    },
    gQ: function(n, t, i, r) {
        this.jC(Number, "InstantMessageSignOut", {
            reserved: n
        }, t, i, r)
    },
    gR: function(n, t, i) {
        this.jC(0, "InvalidateOwaUserSessions", {}, n, t, i)
    },
    cG: function(n, t, i, r) {
        this.jC(0, "JoinPrivateUnifiedGroup", n, t, i, r)
    },
    cH: function(n, t, i, r) {
        this.jC(0, "LikeItem2", n, t, i, r)
    },
    gS: function(n, t, i, r, u) {
        this.jC(0, "LinkPersona", {
            linkToPersonaId: n,
            personaIdToBeLinked: t
        }, i, r, u)
    },
    gT: function(n, t, i, r) {
        this.jC(0, "LinkPersonas", {
            request: n
        }, t, i, r)
    },
    cI: function(n, t, i, r) {
        this.jC(0, "LoadExtensionCustomProperties", {
            request: n
        }, t, i, r)
    },
    H: function(n, t, i, r) {
        this.jD("LogDatapoint", {
            datapoints: n
        }, t, i, r)
    },
    gU: function(n, t, i, r) {
        this.jC(0, "LogPushNotificationData", n, t, i, r)
    },
    gV: function(n, t, i, r) {
        this.jC(0, "LogSubstrateSearchEvents", n, t, i, r)
    },
    gW: function(n, t, i, r) {
        this.jC(0, "MarkAllItemsAsRead", n, t, i, r)
    },
    I: function(n, t, i, r) {
        this.jD("MarkAsJunk", n, t, i, r)
    },
    gX: function(n, t, i, r) {
        this.jC(0, "MarkSocialActivityNotificationsAsSeen2", n, t, i, r)
    },
    J: function(n, t, i, r) {
        this.jD("MaskAutoCompleteRecipient", n, t, i, r)
    },
    gY: function(n, t, i, r) {
        this.jC(0, "MeetNowInit", {
            request: n
        }, t, i, r)
    },
    gZ: function(n, t, i, r) {
        this.jC(0, "ModernGroupMembershipRequestMessageDetails", {
            request: n
        }, t, i, r)
    },
    ha: function(n, t, i, r, u) {
        this.jC(0, "MoveContactFolder", {
            folderId: n,
            priority: t
        }, i, r, u)
    },
    hb: function(n, t, i, r) {
        this.jC(0, "MoveFolder", n, t, i, r)
    },
    K: function(n, t, i, r) {
        this.jD("MoveItem", n, t, i, r)
    },
    hc: function(n, t, i, r) {
        this.jC(0, "NewApp", n, t, i, r)
    },
    hd: function(n, t, i, r) {
        this.jC(0, "NewBookingMailbox", n, t, i, r)
    },
    he: function(n, t, i, r) {
        this.jC(0, "NewConnectSubscription", n, t, i, r)
    },
    hf: function(n, t, i, r) {
        this.jC(0, "NewImapSubscription", n, t, i, r)
    },
    hg: function(n, t, i, r) {
        this.jC(0, "NewInboxRule", n, t, i, r)
    },
    hh: function(n, t, i, r) {
        this.jC(0, "NewPopSubscription", n, t, i, r)
    },
    hi: function(n, t, i, r) {
        this.jC(0, "NewSubscription", n, t, i, r)
    },
    hj: function(n, t, i, r) {
        this.jC(0, "NewSyncRequest", n, t, i, r)
    },
    hk: function(n, t, i, r) {
        this.jC(0, "NewUMCallAnsweringRule", n, t, i, r)
    },
    hl: function(n, t, i, r) {
        this.jC(Boolean, "NotifyAppWipe", {
            wipeReason: n
        }, t, i, r)
    },
    hm: function(n, t, i) {
        this.jC(0, "OneNoteGetNotebooks", {}, n, t, i)
    },
    hn: function(n, t, i, r) {
        this.jC(0, "OneNoteSaveItem", n, t, i, r)
    },
    ho: function(n, t, i, r) {
        this.jC(0, "PerformInstantSearch", {
            request: n
        }, t, i, r)
    },
    cJ: function(n, t, i, r) {
        this.jD("PerformReminderAction", n, t, i, r)
    },
    hp: function(n, t, i, r) {
        this.jC(0, "PlayOnPhone", n, t, i, r)
    },
    cK: function(n, t, i, r) {
        this.jC(0, "PostGroupItem", n, t, i, r)
    },
    cL: function(n, t, i, r) {
        this.jC(0, "PostModernGroupItem", n, t, i, r)
    },
    hq: function(n, t, i, r) {
        this.jC(0, "PostNewUserVoiceNpsRatingSurvey", n, t, i, r)
    },
    hr: function(n, t, i, r) {
        this.jC(0, "PostNewUserVoiceSuggestion", n, t, i, r)
    },
    cM: function(n, t, i, r) {
        this.jC(0, "PostUnifiedGroupItem", n, t, i, r)
    },
    hs: function(n, t, i, r) {
        this.jC(0, "Provision", n, t, i, r)
    },
    ht: function(n, t, i) {
        this.jC(0, "RefreshSession", {}, n, t, i)
    },
    cN: function(n, t, i, r) {
        this.jC(0, "RegisterConsent", n, t, i, r)
    },
    hu: function(n, t, i, r, u) {
        this.jC(0, "RejectPersonaLinkSuggestion", {
            personaId: n,
            suggestedPersonaId: t
        }, i, r, u)
    },
    hv: function(n, t, i, r) {
        this.jC(0, "RemoveActiveRetentionPolicyTags", n, t, i, r)
    },
    hw: function(n, t, i, r) {
        this.jC(0, "RemoveApp", n, t, i, r)
    },
    hx: function(n, t, i, r) {
        this.jC(0, "RemoveAttachmentDataProvider", n, t, i, r)
    },
    cO: function(n, t, i, r) {
        this.jC(0, "RemoveBirthdayEvent", n, t, i, r)
    },
    hy: function(n, t, i, r) {
        this.jC(0, "RemoveConnectSubscription", n, t, i, r)
    },
    hz: function(n, t, i, r) {
        this.jC(0, "RemoveContentSubmissionRules", n, t, i, r)
    },
    hA: function(n, t, i, r) {
        this.jC(0, "RemoveMobileDevice", n, t, i, r)
    },
    hB: function(n, t, i, r) {
        this.jC(Boolean, "RemoveSharedFolders", {
            primarySMTPAddress: n
        }, t, i, r)
    },
    hC: function(n, t, i, r) {
        this.jC(0, "RemoveSubscription", n, t, i, r)
    },
    hD: function(n, t, i, r) {
        this.jC(0, "RemoveSyncRequest", n, t, i, r)
    },
    cP: function(n, t, i, r) {
        this.jC(0, "RemoveTailoredExperienceEventsFromCalendar", n, t, i, r)
    },
    hE: function(n, t, i, r) {
        this.jC(0, "RemoveUMCallAnsweringRule", n, t, i, r)
    },
    hF: function(n, t, i, r) {
        this.jC(0, "RemoveUnifiedGroup", n, t, i, r)
    },
    hG: function(n, t, i, r, u) {
        this.jC(0, "RenameCalendar", {
            itemId: n,
            newCalendarName: t
        }, i, r, u)
    },
    hH: function(n, t, i, r, u) {
        this.jC(0, "RenameCalendarGroup", {
            groupId: n,
            newGroupName: t
        }, i, r, u)
    },
    hI: function(n, t, i, r, u) {
        this.jC(0, "RenameTaskFolder", {
            itemId: n,
            newTaskFolderName: t
        }, i, r, u)
    },
    hJ: function(n, t, i, r) {
        this.jC(0, "ReplyToBotMessage", {
            replyToBotMessageRequest: n
        }, t, i, r)
    },
    hK: function(n, t, i, r) {
        this.jC(0, "ReportMessageToSafetyLibrary", n, t, i, r)
    },
    hL: function(n, t, i, r) {
        this.jC(0, "RequestDeviceRegistrationChallenge", n, t, i, r)
    },
    cQ: function(n, t, i) {
        this.jC(Number, "ResetPresence", {}, n, t, i)
    },
    L: function(n, t, i, r) {
        this.jD("RespondToCalendarEvent", n, t, i, r)
    },
    hM: function(n, t, i, r) {
        this.jC(0, "RespondToCoauthoringInvitation", n, t, i, r)
    },
    M: function(n, t, i, r) {
        this.jD("RespondToMeetingMessage", n, t, i, r)
    },
    cR: function(n, t, i, r) {
        this.jC(0, "RespondToMeetingPoll", n, t, i, r)
    },
    cS: function(n, t, i, r) {
        this.jC(String, "SanitizeHtml", {
            input: n
        }, t, i, r)
    },
    cT: function(n, t, i, r) {
        this.jC(String, "SaveAttachmentsToCloud", {
            requestObject: n
        }, t, i, r)
    },
    cU: function(n, t, i, r) {
        this.jC(0, "SaveExtensionCustomProperties", {
            request: n
        }, t, i, r)
    },
    cV: function(n, t, i, r) {
        this.jC(0, "SaveExtensionSettings", {
            request: n
        }, t, i, r)
    },
    hN: function(n, t, i, r) {
        this.jC(0, "ScheduleContentSubmission", n, t, i, r)
    },
    cW: function(n, t, i, r) {
        this.jC(0, "SearchAttachmentDataProviderItems", {
            request: n
        }, t, i, r)
    },
    hO: function(n, t, i, r) {
        this.jC(0, "SearchLocalEvents", n, t, i, r)
    },
    hP: function(n, t, i, r) {
        this.jC(0, "SearchMailboxes", n, t, i, r)
    },
    N: function(n, t, i, r) {
        this.jC(0, "SendCalendarSharingInvite", {
            request: n
        }, t, i, r)
    },
    cX: function(n, t, i, r) {
        this.jC(Number, "SendChatMessage", {
            message: n
        }, t, i, r)
    },
    hQ: function(n, t, i, r) {
        this.jC(0, "SendGroupsAppSmsInvite", n, t, i, r)
    },
    hR: function(n, t, i, r) {
        this.jC(0, "SendGroupsAppUpsellEmail", n, t, i, r)
    },
    cY: function(n, t, i, r) {
        this.jD("SendLinkClickedSignalToSP", {
            sendLinkClickedRequest: n
        }, t, i, r)
    },
    O: function(n, t, i, r) {
        this.jD("SendReadReceipt", {
            itemId: n
        }, t, i, r)
    },
    hS: function(n, t, i, r) {
        this.jC(0, "SendScheduleSharingInvite", n, t, i, r)
    },
    hT: function(n, t, i, r) {
        this.jC(0, "SendTextMessagingVerificationCode", n, t, i, r)
    },
    cZ: function(n, t, i, r) {
        this.jC(Boolean, "SetAttachmentPermissions", {
            request: n
        }, t, i, r)
    },
    da: function(n, t, i, r) {
        this.jC(0, "SetAttachmentPermissionsV2", {
            request: n
        }, t, i, r)
    },
    hU: function(n, t, i, r) {
        this.jC(0, "SetBookingCalendarPublishing", n, t, i, r)
    },
    hV: function(n, t, i, r) {
        this.jC(0, "SetBookingMailboxSBGraphLinking", n, t, i, r)
    },
    hW: function(n, t, i, r) {
        this.jC(0, "SetBusinessInformation", n, t, i, r)
    },
    hX: function(n, t, i, r, u) {
        this.jC(0, "SetCalendarColor", {
            itemId: n,
            calendarColor: t
        }, i, r, u)
    },
    hY: function(n, t, i, r) {
        this.jC(0, "SetCalendarNotification", n, t, i, r)
    },
    db: function(n, t, i, r) {
        this.jC(0, "SetCalendarProcessing", n, t, i, r)
    },
    hZ: function(n, t, i, r) {
        this.jC(0, "SetCalendarPublishing", {
            request: n
        }, t, i, r)
    },
    ia: function(n, t, i, r) {
        this.jC(0, "SetCalendarSharingPermissions", {
            request: n
        }, t, i, r)
    },
    ib: function(n, t, i, r) {
        this.jC(0, "SetCASMailbox", n, t, i, r)
    },
    ic: function(n, t, i, r) {
        this.jC(0, "SetClutterState", n, t, i, r)
    },
    id: function(n, t, i, r) {
        this.jC(0, "SetConnectSubscription", n, t, i, r)
    },
    ie: function(n, t, i, r) {
        this.jC(0, "SetConsumerMailbox", n, t, i, r)
    },
    ig: function(n, t, i, r) {
        this.jC(0, "SetContentSubmissionRules", n, t, i, r)
    },
    ih: function(n, t, i, r) {
        this.jC(Boolean, "SetFlightsOverrideData", n, t, i, r)
    },
    ii: function(n, t, i, r) {
        this.jC(0, "SetFocusedInboxConfiguration", {
            request: n
        }, t, i, r)
    },
    ij: function(n, t, i, r) {
        this.jC(Boolean, "SetFolderMruConfiguration", {
            folderMruConfiguration: n
        }, t, i, r)
    },
    ik: function(n, t, i, r) {
        this.jC(0, "SetHolidaySubscriptions", n, t, i, r)
    },
    il: function(n, t, i, r) {
        this.jC(0, "SetHotmailSubscription", n, t, i, r)
    },
    im: function(n, t, i, r) {
        this.jC(0, "SetImapSubscription", n, t, i, r)
    },
    io: function(n, t, i, r) {
        this.jC(0, "SetInboxAndSweepRules", n, t, i, r)
    },
    ip: function(n, t, i, r) {
        this.jC(0, "SetInboxRule", n, t, i, r)
    },
    iq: function(n, t, i, r) {
        this.jC(Boolean, "SetLayoutSettings", {
            layoutSettings: n
        }, t, i, r)
    },
    dc: function(n, t, i, r) {
        this.jC(0, "SetMailbox", n, t, i, r)
    },
    ir: function(n, t, i, r) {
        this.jC(0, "SetMailboxAutoReplyConfiguration", n, t, i, r)
    },
    P: function(n, t, i, r) {
        this.jC(0, "SetMailboxCalendarConfiguration", n, t, i, r)
    },
    is: function(n, t, i, r) {
        this.jC(0, "SetMailboxJunkEmailConfiguration", n, t, i, r)
    },
    dd: function(n, t, i, r) {
        this.jC(0, "SetMailboxMessageConfiguration", n, t, i, r)
    },
    it: function(n, t, i, r) {
        this.jC(0, "SetMailboxRegionalConfiguration", n, t, i, r)
    },
    iu: function(n, t, i, r, u) {
        this.jC(0, "SetModernGroupPinState", {
            smtpAddress: n,
            isPinned: t
        }, i, r, u)
    },
    iv: function(n, t, i, r) {
        this.jC(Boolean, "SetOwaUserOofSettings", {
            userOofSettings: n
        }, t, i, r)
    },
    iw: function(n, t, i, r) {
        this.jC(0, "SetPersonalSchedulingPage", n, t, i, r)
    },
    ix: function(n, t, i, r) {
        this.jC(0, "SetPopSubscription", n, t, i, r)
    },
    de: function(n, t, i, r) {
        this.jC(Number, "SetPresence", {
            presenceSetting: n
        }, t, i, r)
    },
    iy: function(n, t, i, r) {
        this.jC(0, "SetSweepRule", n, t, i, r)
    },
    iz: function(n, t, i, r) {
        this.jC(0, "SetSyncRequest", n, t, i, r)
    },
    iA: function(n, t, i, r) {
        this.jC(0, "SetTextMessagingAccount", n, t, i, r)
    },
    iB: function(n, t, i, r) {
        this.jC(Boolean, "SetTimeZone", {
            timezone: n
        }, t, i, r)
    },
    iC: function(n, t, i, r) {
        this.jC(0, "SetUMCallAnsweringRule", n, t, i, r)
    },
    iD: function(n, t, i, r) {
        this.jC(0, "SetUMMailbox", n, t, i, r)
    },
    iE: function(n, t, i, r) {
        this.jC(0, "SetUMMailboxConfiguration", n, t, i, r)
    },
    iF: function(n, t, i, r) {
        this.jC(0, "SetUMMailboxPIN", n, t, i, r)
    },
    df: function(n, t, i, r) {
        this.jC(0, "SetUnifiedGroupFavoriteState", n, t, i, r)
    },
    dg: function(n, t, i, r) {
        this.jC(0, "SetUnifiedGroupLastVisitedTime", n, t, i, r)
    },
    dh: function(n, t, i, r) {
        this.jC(0, "SetUnifiedGroupMembershipState", n, t, i, r)
    },
    di: function(n, t, i, r) {
        this.jC(0, "SetUnifiedGroupUserSubscribeState", n, t, i, r)
    },
    iG: function(n, t, i, r) {
        this.jC(0, "SetUser", n, t, i, r)
    },
    dj: function(n, t, i, r) {
        this.jC(0, "SetUserTheme", {
            request: n
        }, t, i, r)
    },
    dk: function(n, t, i, r) {
        this.jC(0, "ShareTailoredExperienceEvent", n, t, i, r)
    },
    iH: function(n, t, i, r) {
        this.jC(0, "StartSearchSession", n, t, i, r)
    },
    iI: function(n, t, i, r) {
        this.jC(0, "StartUMPhoneSession", n, t, i, r)
    },
    iJ: function(n, t, i, r) {
        this.jC(0, "StopUMPhoneSession", n, t, i, r)
    },
    iK: function(n, t, i, r) {
        this.jC(Number, "SubscribeForPresenceUpdates", {
            sipUris: n
        }, t, i, r)
    },
    dl: function(n, t, i, r) {
        this.jC(0, "SubscribeInternalCalendar", {
            request: n
        }, t, i, r)
    },
    Q: function(n, t, i, r) {
        this.jC(0, "SubscribeInternetCalendar", {
            request: n
        }, t, i, r)
    },
    iL: function(n, t, i, r, u) {
        this.jC(Array, "SubscribeToGroupNotification", {
            request: n,
            subscriptionData: t
        }, i, r, u)
    },
    iM: function(n, t, i, r, u) {
        this.jC(Array, "SubscribeToGroupUnseenNotification", {
            request: n,
            subscriptionData: t
        }, i, r, u)
    },
    iN: function(n, t, i, r, u) {
        this.jC(Array, "SubscribeToNotification", {
            request: n,
            subscriptionData: t
        }, i, r, u)
    },
    iO: function(n, t, i, r) {
        this.jC(0, "SubscribeToPushNotification", n, t, i, r)
    },
    iP: function(n, t, i, r) {
        this.jC(0, "SubstrateSearchInit", n, t, i, r)
    },
    iQ: function(n, t, i, r) {
        this.jC(0, "SyncCalendar", {
            request: n
        }, t, i, r)
    },
    iR: function(n, t, i, r) {
        this.jC(0, "SyncConversation", n, t, i, r)
    },
    iS: function(n, t, i, r) {
        this.jC(0, "SyncFolderHierarchy", n, t, i, r)
    },
    iT: function(n, t, i, r) {
        this.jC(0, "SyncFolderItems", n, t, i, r)
    },
    dm: function(n, t, i, r) {
        this.jC(0, "SynchronizeWacAttachment", n, t, i, r)
    },
    iU: function(n, t, i, r) {
        this.jC(0, "SyncPeople", n, t, i, r)
    },
    iV: function(n, t, i, r) {
        this.jC(Boolean, "TerminateChatSession", {
            chatSessionId: n
        }, t, i, r)
    },
    iW: function(n, t, i, r) {
        this.jC(0, "UninstallExtension", n, t, i, r)
    },
    dn: function(n, t, i, r, u) {
        this.jC(0, "UnlinkPersona", {
            personaId: n,
            contactId: t
        }, i, r, u)
    },
    iX: function(n, t, i, r) {
        this.jC(Number, "UnsubscribeFromPresenceUpdates", {
            sipUri: n
        }, t, i, r)
    },
    iY: function(n, t, i, r) {
        this.jC(Boolean, "UnsubscribeToGroupNotification", {
            subscriptionData: n
        }, t, i, r)
    },
    iZ: function(n, t, i, r) {
        this.jC(Boolean, "UnsubscribeToGroupUnseenNotification", {
            subscriptionData: n
        }, t, i, r)
    },
    dp: function(n, t, i, r) {
        this.jC(Boolean, "UnsubscribeToNotification", {
            subscriptionData: n
        }, t, i, r)
    },
    ja: function(n, t, i, r) {
        this.jC(0, "UnsubscribeToPushNotification", n, t, i, r)
    },
    jb: function(n, t, i, r) {
        this.jC(0, "UpdateAndPostModernGroupItem", n, t, i, r)
    },
    dq: function(n, t, i, r) {
        this.jC(String, "UpdateAttachmentPermissions", {
            permissionsRequest: n
        }, t, i, r)
    },
    dr: function(n, t, i, r) {
        this.jC(0, "UpdateBirthdayEvent", n, t, i, r)
    },
    jc: function(n, t, i, r) {
        this.jC(0, "UpdateBookingCustomQuestion", n, t, i, r)
    },
    jd: function(n, t, i, r) {
        this.jC(0, "UpdateBookingService", n, t, i, r)
    },
    je: function(n, t, i, r) {
        this.jC(0, "UpdateBookingServiceOrder", n, t, i, r)
    },
    jf: function(n, t, i, r) {
        this.jC(0, "UpdateBookingStaff", n, t, i, r)
    },
    R: function(n, t, i, r) {
        this.jD("UpdateCalendarEvent", n, t, i, r)
    },
    jg: function(n, t, i, r) {
        this.jC(0, "UpdateCalendarSharingPermissions", n, t, i, r)
    },
    ds: function(n, t, i, r) {
        this.jC(0, "UpdateClientExtensionNotifications", n, t, i, r)
    },
    dt: function(n, t, i, r) {
        this.jC(Boolean, "UpdateClientTypeOptInState", {
            clientTypeOptInState: n
        }, t, i, r)
    },
    jh: function(n, t, i, r) {
        this.jC(0, "UpdateDelegateSharingPermission", n, t, i, r)
    },
    ji: function(n, t, i, r) {
        this.jC(0, "UpdateFavoriteFolder", {
            request: n
        }, t, i, r)
    },
    b: function(n, t, i, r) {
        this.jC(0, "UpdateFolder", n, t, i, r)
    },
    jj: function(n, t, i, r) {
        this.jC(0, "UpdateGlobalDelegateOptions", n, t, i, r)
    },
    c: function(n, t, i, r) {
        this.jC(0, "UpdateItem", n, t, i, r)
    },
    jk: function(n, t, i, r) {
        this.jC(Boolean, "UpdateLightning", n, t, i, r)
    },
    du: function(n, t, i, r) {
        this.jC(0, "UpdateMasterCategoryList", {
            request: n
        }, t, i, r)
    },
    jl: function(n, t, i, r) {
        this.jC(0, "UpdateMeetingPoll", n, t, i, r)
    },
    jm: function(n, t, i, r) {
        this.jC(0, "UpdateModernGroup", {
            request: n
        }, t, i, r)
    },
    S: function(n, t, i, r) {
        this.jC(0, "UpdatePersona", {
            request: n
        }, t, i, r)
    },
    jn: function(n, t, i, r) {
        this.jC(Array, "UpdatePersonas", {
            request: n
        }, t, i, r)
    },
    jo: function(n, t, i, r) {
        this.jC(0, "UpdateSchedule", n, t, i, r)
    },
    jp: function(n, t, i, r) {
        this.jC(0, "UpdateSharingInvitation", n, t, i, r)
    },
    jq: function(n, t, i, r) {
        this.jC(0, "UpdateSharingPermissions", n, t, i, r)
    },
    jr: function(n, t, i, r) {
        this.jC(Boolean, "UpdateTasksClientTypeOptInState", {
            clientTypeOptInState: n
        }, t, i, r)
    },
    dv: function(n, t, i, r) {
        this.jC(0, "UpdateUnifiedGroup", n, t, i, r)
    },
    T: function(n, t, i, r) {
        this.jD("UpdateUserConfiguration", n, t, i, r)
    },
    js: function(n, t, i, r) {
        this.jC(0, "UpdateUserGroupsSetConfiguration", {
            request: n
        }, t, i, r)
    },
    jt: function(n, t, i, r) {
        this.jC(0, "UpgradeDistributionGroup", n, t, i, r)
    },
    ju: function(n, t, i, r) {
        this.jC(String, "UploadFileToCloud", {
            requestObject: n
        }, t, i, r)
    },
    jv: function(n, t, i, r) {
        this.jC(0, "UploadPhoto", {
            request: n
        }, t, i, r)
    },
    jw: function(n, t, i, r) {
        this.jC(0, "ValidateAggregatedConfiguration", n, t, i, r)
    },
    jx: function(n, t, i, r) {
        this.jC(0, "ValidateModernGroupAlias", {
            request: n
        }, t, i, r)
    },
    jy: function(n, t, i, r) {
        this.jC(0, "ValidateUnifiedGroupAlias", n, t, i, r)
    },
    jz: function(n, t, i, r) {
        this.jC(0, "ValidateUnifiedGroupProperties", n, t, i, r)
    },
    jA: function(n, t, i, r) {
        this.jC(Number, "VerifyCert", {
            certRawData: n
        }, t, i, r)
    },
    dR: function(n, t, i, r) {
        this.jC(0, "CreateCalendarEvent", n, t, i, r)
    }
};
_g.cy = function() {
    _g.cy.initializeBase(this);
    this.__type = _g.cy._dataContractName
};
_g.cy._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["WhenOutlookFavoritesChanged", "MailboxCreateDate"], null)
};
_g.db = function() {
    _g.db.initializeBase(this);
    this.__type = _g.db._dataContractName
};
_g.eJ = function() {
    _g.eJ.initializeBase(this);
    this.__type = _g.eJ._dataContractName
};
_g.cM = function() {
    _g.cM.initializeBase(this);
    this.__type = _g.cM._dataContractName
};
_g.p = function(n, t) {
    _g.p.initializeBase(this);
    this.__type = _g.p._dataContractName;
    this.Number = n;
    this.Type = t
};
_g.gt = function() {
    _g.gt.initializeBase(this);
    this.__type = _g.gt._dataContractName
};
_g.cr = function(n, t) {
    _g.cr.initializeBase(this);
    this.__type = _g.cr._dataContractName;
    this.Type = n;
    this.LocationSource = t
};
_g.dc = function() {
    _g.dc.initializeBase(this);
    this.__type = _g.dc._dataContractName
};
_g.dc._TZ = function(n, t, i, r) {
    if (t !== i && n) {
        r.a(!1, n, i, t, ["PostedTime"], null);
        _g.M._TZ(n, t, i, r)
    }
};
_g.gu = function() {
    _g.gu.initializeBase(this);
    this.__type = _g.gu._dataContractName
};
_g.gu._TZ = function(n, t, i, r) {
    _g.bo._TZ(n, t, i, r)
};
_g.eK = function() {
    _g.eK.initializeBase(this);
    this.__type = _g.eK._dataContractName
};
_g.eK._TZ = function(n, t, i, r) {
    _g.gu._TZ(n, t, i, r)
};
_g.hr = function() {
    _g.hr.initializeBase(this);
    this.__type = _g.hr._dataContractName;
    this.ErrorCode = _errorCode
};
_g.ju = function() {
    _g.ju.initializeBase(this);
    this.__type = _g.ju._dataContractName
};
_g.hs = function() {
    _g.hs.initializeBase(this)
};
_g.d = function(n) {
    _g.d.initializeBase(this);
    this.__type = _g.d._dataContractName;
    this.FieldURI = n
};
_g.gv = function() {
    _g.gv.initializeBase(this);
    this.__type = _g.gv._dataContractName
};
_g.gv._TZ = function(n, t, i, r) {
    _g.bo._TZ(n, t, i, r)
};
_g.jv = function() {
    _g.jv.initializeBase(this);
    this.__type = _g.jv._dataContractName
};
_g.jw = function() {
    _g.jw.initializeBase(this);
    this.__type = _g.jw._dataContractName
};
_g.bn = function(n) {
    _g.bn.initializeBase(this);
    this.__type = _g.bn._dataContractName;
    this.OccurrenceId = n
};
_g.eL = function() {
    _g.eL.initializeBase(this);
    this.__type = _g.eL._dataContractName
};
_g.eL._TZ = function(n, t, i, r) {
    _g.bo._TZ(n, t, i, r)
};
_g.kF = function() {
    _g.kF.initializeBase(this)
};
_g.eM = function() {
    _g.eM.initializeBase(this);
    this.__type = _g.eM._dataContractName
};
_g.eM._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["StartTime", "EndTime"], null)
};
_g.de = function() {
    _g.de.initializeBase(this);
    this.__type = _g.de._dataContractName
};
_g.de._TZ = function(n, t, i, r) {
    _g.bo._TZ(n, t, i, r)
};
_g.dK = function() {
    _g.dK.initializeBase(this);
    this.__type = _g.dK._dataContractName
};
_g.dK._TZ = function(n, t, i, r) {
    _g.cc._TZ(n, t, i, r)
};
_g.bw = function() {
    _g.bw.initializeBase(this);
    this.__type = _g.bw._dataContractName
};
_g.bw._TZ = function(n, t, i, r) {
    _g.cc._TZ(n, t, i, r)
};
_g.bQ = function() {
    _g.bQ.initializeBase(this);
    this.__type = _g.bQ._dataContractName
};
_g.bQ._TZ = function(n, t, i, r) {
    _g.cc._TZ(n, t, i, r)
};
_g.gx = function() {
    _g.gx.initializeBase(this)
};
_g.gx._TZ = function(n, t, i, r) {
    _g.J._TZ(n, t, i, r)
};
_g.bo = function() {
    _g.bo.initializeBase(this);
    this.__type = _g.bo._dataContractName
};
_g.bo._TZ = function(n, t, i, r) {
    _g.gx._TZ(n, t, i, r)
};
_g.eN = function(n, t, i, r, u, f, e, o) {
    _g.eN.initializeBase(this);
    this.__type = _g.eN._dataContractName;
    this.DisplayName = n;
    this.RetentionId = t;
    this.RetentionPeriod = i;
    this.Type = r;
    this.RetentionAction = u;
    this.IsVisible = f;
    this.OptedInto = e;
    this.IsArchive = o
};
_g.bM = function(n) {
    _g.bM.initializeBase(this);
    this.__type = _g.bM._dataContractName;
    this.Value = n
};
_g.dL = function() {
    _g.dL.initializeBase(this);
    this.__type = _g.dL._dataContractName
};
_g.dL._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["ContentExpiryDate"], null)
};
_g.eO = function() {
    _g.eO.initializeBase(this);
    this.__type = _g.eO._dataContractName
};
_g.kG = function() {
    _g.kG.initializeBase(this)
};
_g.dM = function() {
    _g.dM.initializeBase(this);
    this.__type = _g.dM._dataContractName
};
_g.jF = function() {
    _g.jF.initializeBase(this);
    this.__type = _g.jF._dataContractName
};
_g.jG = function() {
    _g.jG.initializeBase(this);
    this.__type = _g.jG._dataContractName;
    this.Id = _id;
    this.Mailbox = _mailbox;
    this.ParentId = _parentId
};
_g.bj = function(n, t) {
    _g.bj.initializeBase(this);
    this.__type = _g.bj._dataContractName;
    this.BasePoint = n;
    this.Condition = t
};
_g.dN = function() {
    _g.dN.initializeBase(this);
    this.__type = _g.dN._dataContractName
};
_g.kH = function() {
    _g.kH.initializeBase(this)
};
_g.kI = function() {
    _g.kI.initializeBase(this)
};
_g.dO = function() {
    _g.dO.initializeBase(this);
    this.__type = _g.dO._dataContractName
};
_g.jJ = function() {
    _g.jJ.initializeBase(this);
    this.__type = _g.jJ._dataContractName
};
_g.R = function() {
    _g.R.initializeBase(this);
    this.__type = _g.R._dataContractName
};
_g.gB = function() {
    _g.gB.initializeBase(this);
    this.__type = _g.gB._dataContractName
};
_g.dP = function() {
    _g.dP.initializeBase(this);
    this.__type = _g.dP._dataContractName
};
_g.dP._TZ = function(n, t, i, r) {
    _g.bo._TZ(n, t, i, r)
};
_g.cc = function() {
    _g.cc.initializeBase(this);
    this.__type = _g.cc._dataContractName
};
_g.cc._TZ = function(n, t, i, r) {
    _g.dP._TZ(n, t, i, r)
};
_g.bA = function(n) {
    _g.bA.initializeBase(this);
    this.__type = _g.bA._dataContractName;
    this.Order = n
};
_g.gD = function() {
    _g.gD.initializeBase(this);
    this.__type = _g.gD._dataContractName
};
_g.gD._TZ = function(n, t, i, r) {
    _g.eL._TZ(n, t, i, r)
};
_g.jO = function() {
    _g.jO.initializeBase(this);
    this.__type = _g.jO._dataContractName
};
_g.jP = function() {
    _g.jP.initializeBase(this);
    this.__type = _g.jP._dataContractName;
    this.SyncState = _syncState;
    this.IncludesLastFolderInRange = _includesLastFolderInRange;
    this.Changes = new _g.jO
};
_g.F = function(n) {
    _g.F.initializeBase(this);
    this.__type = _g.F._dataContractName;
    this.BaseFolderId = n
};
_g.bR = function() {
    _g.bR.initializeBase(this);
    this.__type = _g.bR._dataContractName
};
_g.bR._TZ = function(n, t, i, r) {
    if (t !== i && n) {
        r.a(!1, n, i, t, ["CompleteDate", "DueDate", "StartDate", "DoItTime"], null);
        _g.M._TZ(n, t, i, r)
    }
};
_g.dg = function() {
    _g.dg.initializeBase(this);
    this.__type = _g.dg._dataContractName
};
_g.dg._TZ = function(n, t, i, r) {
    _g.dG._TZ(n, t, i, r)
};
_g.hy = function() {
    _g.hy.initializeBase(this);
    this.__type = _g.hy._dataContractName
};
_g.kN = function() {
    _g.kN.initializeBase(this)
};
_g.eS = function(n, t) {
    _g.eS.initializeBase(this);
    this.__type = _g.eS._dataContractName;
    this.UnseenCount = n;
    this.LastVisitedTime = t
};
_g.eS._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["LastVisitedTime"], null)
};
_g.kc = function() {
    _g.kc.initializeBase(this)
};
_g.dT = function(n) {
    _g.dT.initializeBase(this);
    this.__type = _g.dT._dataContractName;
    this.DictionaryKey = n
};
_g.cB = function(n) {
    _g.cB.initializeBase(this);
    this.__type = _g.cB._dataContractName;
    this.Type = n;
    this.Value = new Array(0)
};
_g.eV = function() {
    _g.eV.initializeBase(this);
    this.__type = _g.eV._dataContractName
};
_g.dU = function() {
    _g.dU.initializeBase(this);
    this.__type = _g.dU._dataContractName
};
_g.dU._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["LastSurveyDate", "PeopleIKnowFirstUseDate", "PeopleIKnowLastUseDate", "ModernGroupsFirstUseDate", "ModernGroupsLastUseDate", "BuildGreenLightSurveyLastShownDate", "InferenceSurveyDate", "UserVoiceSatisfactionWidgetFirstUseDate", "IsFocusedInboxOnLastUpdateTime", "IsFocusedInboxOnAdminLastUpdateTime", "GroupSuggestionDismissalDate"], null)
};
_g.kf = function() {
    _g.kf.initializeBase(this);
    this.__type = _g.kf._dataContractName
};
_g.di = function() {
    _g.di.initializeBase(this);
    this.__type = _g.di._dataContractName
};
_g.gO = function() {
    _g.gO.initializeBase(this);
    this.__type = _g.gO._dataContractName
};
_g.gO._TZ = function(n, t, i, r) {
    _g.bo._TZ(n, t, i, r)
};
_g.dk = function() {
    _g.dk.initializeBase(this);
    this.__type = _g.dk._dataContractName
};
_g.hZ = function(n) {
    _g.hZ.initializeBase(this);
    this.Header = n
};
_g.ku = function() {
    _g.ku.initializeBase(this)
};
_g.cw = function(n, t, i) {
    _g.cw.initializeBase(this);
    this.__type = _g.cw._dataContractName;
    this.Id = n;
    this.SourceId = t;
    this.DisplayName = i
};
_g.ca = function() {
    _g.ca.initializeBase(this);
    this.__type = _g.ca._dataContractName
};
_g.ca._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["CreationTimeString", "LastModifiedTimeString", "LastContactedDate"], null)
};
_g.dQ = function() {
    _g.dQ.initializeBase(this);
    this.__type = _g.dQ._dataContractName;
    this.Values = new Array(0);
    this.Attributions = new Array(0)
};
_g.hj = function() {
    _g.hj.initializeBase(this);
    this.__type = _g.hj._dataContractName;
    this.ConversationId = _conversationId
};
_g.hj._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["LastModifiedTime"], null)
};
_g.hq = function() {
    _g.hq.initializeBase(this);
    this.__type = _g.hq._dataContractName
};
_g.dJ = function(n, t, i, r, u, f) {
    _g.dJ.initializeBase(this);
    this.__type = _g.dJ._dataContractName;
    this.Subject = n;
    this.ReminderTime = t;
    this.StartDate = i;
    this.EndDate = r;
    this.ItemId = u;
    this.UID = f
};
_g.dJ._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["ReminderTime", "StartDate", "EndDate"], null)
};
_g.eu = function() {
    _g.eu.initializeBase(this);
    this.__type = _g.eu._dataContractName;
    this.Body = new _g.fN
};
_g.ev = function() {
    _g.ev.initializeBase(this);
    this.__type = _g.ev._dataContractName;
    this.Body = new _g.fQ
};
_g.ex = function() {
    _g.ex.initializeBase(this);
    this.__type = _g.ex._dataContractName;
    this.Body = new _g.fY
};
_g.ez = function() {
    _g.ez.initializeBase(this);
    this.__type = _g.ez._dataContractName;
    this.Body = new _g.ge
};
_g.hv = function() {
    _g.hv.initializeBase(this);
    this.__type = _g.hv._dataContractName
};
_g.eT = function() {
    _g.eT.initializeBase(this);
    this.__type = _g.eT._dataContractName;
    this.Body = new _g.gH
};
_g.eU = function() {
    _g.eU.initializeBase(this);
    this.__type = _g.eU._dataContractName
};
_g.ik = function() {
    _g.ik.initializeBase(this);
    this.__type = _g.ik._dataContractName;
    this.Body = new _g.il
};
_g.io = function() {
    _g.io.initializeBase(this);
    this.__type = _g.io._dataContractName;
    this.Body = new _g.ip
};
_g.fS = function() {
    _g.fS.initializeBase(this);
    this.__type = _g.fS._dataContractName
};
_g.fz = function() {
    _g.fz.initializeBase(this);
    this.__type = _g.fz._dataContractName;
    this.Body = new _g.fA
};
_g.iv = function() {
    _g.iv.initializeBase(this);
    this.__type = _g.iv._dataContractName;
    this.Body = new _g.iw
};
_g.fO = function() {
    _g.fO.initializeBase(this);
    this.__type = _g.fO._dataContractName
};
_g.fR = function() {
    _g.fR.initializeBase(this);
    this.__type = _g.fR._dataContractName
};
_g.iM = function() {
    _g.iM.initializeBase(this);
    this.__type = _g.iM._dataContractName
};
_g.fZ = function() {
    _g.fZ.initializeBase(this);
    this.__type = _g.fZ._dataContractName
};
_g.iN = function() {
    _g.iN.initializeBase(this);
    this.__type = _g.iN._dataContractName
};
_g.ga = function() {
    _g.ga.initializeBase(this);
    this.__type = _g.ga._dataContractName
};
_g.gc = function() {
    _g.gc.initializeBase(this);
    this.__type = _g.gc._dataContractName;
    this.Body = new _g.gd
};
_g.eP = function() {
    _g.eP.initializeBase(this);
    this.__type = _g.eP._dataContractName
};
_g.iS = function() {
    _g.iS.initializeBase(this);
    this.__type = _g.iS._dataContractName
};
_g.iL = function() {
    _g.iL.initializeBase(this);
    this.__type = _g.iL._dataContractName
};
_g.gs = function() {
    _g.gs.initializeBase(this);
    this.__type = _g.gs._dataContractName
};
_g.jN = function() {
    _g.jN.initializeBase(this);
    this.__type = _g.jN._dataContractName
};
_g.jk = function() {
    _g.jk.initializeBase(this);
    this.__type = _g.jk._dataContractName;
    this.Body = new _g.jl
};
_g.jV = function() {
    _g.jV.initializeBase(this);
    this.__type = _g.jV._dataContractName;
    this.Body = new _g.jW
};
_g.jB = function() {
    _g.jB.initializeBase(this);
    this.__type = _g.jB._dataContractName;
    this.Body = new _g.jC
};
_g.jD = function() {
    _g.jD.initializeBase(this);
    this.__type = _g.jD._dataContractName
};
_g.jY = function() {
    _g.jY.initializeBase(this);
    this.__type = _g.jY._dataContractName
};
_g.hN = function(n) {
    _g.hN.initializeBase(this, [n])
};
_g.ed = function(n) {
    _g.ed.initializeBase(this, [n]);
    this.__type = _g.ed._dataContractName;
    this.Body = new _g.fn
};
_g.hU = function() {
    _g.hU.initializeBase(this);
    this.__type = _g.hU._dataContractName;
    this.Body = new _g.hV
};
_g.fo = function(n) {
    _g.fo.initializeBase(this, [n]);
    this.__type = _g.fo._dataContractName;
    this.Body = new _g.fp
};
_g.hQ = function() {
    _g.hQ.initializeBase(this);
    this.__type = _g.hQ._dataContractName;
    this.Body = new _g.hR
};
_g.dx = function(n) {
    _g.dx.initializeBase(this, [n]);
    this.__type = _g.dx._dataContractName;
    this.Body = new _g.cU
};
_g.eo = function(n, t) {
    _g.eo.initializeBase(this, [n]);
    this.__type = _g.eo._dataContractName;
    this.Body = t
};
_g.ix = function() {
    _g.ix.initializeBase(this);
    this.__type = _g.ix._dataContractName;
    this.Body = new _g.iy
};
_g.fG = function(n, t) {
    _g.fG.initializeBase(this, [n]);
    this.__type = _g.fG._dataContractName;
    this.Body = t
};
_g.iC = function() {
    _g.iC.initializeBase(this);
    this.__type = _g.iC._dataContractName;
    this.Body = new _g.iD
};
_g.jI = function(n) {
    _g.jI.initializeBase(this, [n])
};
_g.dR = function(n, t) {
    _g.dR.initializeBase(this, [n]);
    this.__type = _g.dR._dataContractName;
    this.Body = t
};
_g.jZ = function(n) {
    _g.jZ.initializeBase(this, [n])
};
_g.gJ = function(n, t) {
    _g.gJ.initializeBase(this, [n]);
    this.__type = _g.gJ._dataContractName;
    this.Body = t
};
_g.ka = function() {
    _g.ka.initializeBase(this);
    this.__type = _g.ka._dataContractName;
    this.Body = new _g.kb
};
_g.ir = function() {
    _g.ir.initializeBase(this);
    this.__type = _g.ir._dataContractName;
    this.Body = new _g.is
};
_g.iJ = function() {
    _g.iJ.initializeBase(this);
    this.__type = _g.iJ._dataContractName;
    this.AllowedOptions = new Array(0)
};
_g.gf = function() {
    _g.gf.initializeBase(this);
    this.__type = _g.gf._dataContractName;
    this.Body = new _g.gh
};
_g.ke = function() {
    _g.ke.initializeBase(this);
    this.__type = _g.ke._dataContractName
};
_g.bK = function(n, t) {
    _g.bK.initializeBase(this);
    this.__type = _g.bK._dataContractName;
    this.Action = n;
    this.ConversationId = t
};
_g.bK._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["ConversationLastSyncTime", "ScheduleReturnTime"], null)
};
_g.gm = function() {
    _g.gm.initializeBase(this);
    this.__type = _g.gm._dataContractName
};
_g.gm._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["ScheduleReturnTime"], null)
};
_g.bm = function(n) {
    _g.bm.initializeBase(this);
    this.__type = _g.bm._dataContractName;
    this.ItemId = n
};
_g.V = function(n) {
    _g.V.initializeBase(this, [n]);
    this.__type = _g.V._dataContractName
};
_g.co = function(n) {
    _g.co.initializeBase(this);
    this.__type = _g.co._dataContractName;
    this.RequestServerVersion = n
};
_g.cU = function() {
    _g.cU.initializeBase(this);
    this.__type = _g.cU._dataContractName;
    this.Items = new Array(0)
};
_g.kw = function() {
    _g.kw.initializeBase(this)
};
_g.bf = function(n) {
    _g.bf.initializeBase(this);
    this.__type = _g.bf._dataContractName;
    this.Item = n
};
_g.dA = function(n, t) {
    _g.dA.initializeBase(this);
    this.__type = _g.dA._dataContractName;
    this.ItemShape = n;
    this.ParentFolderIds = new Array(0);
    this.Traversal = t
};
_g.cG = function(n) {
    _g.cG.initializeBase(this);
    this.__type = _g.cG._dataContractName;
    this.ConversationId = n
};
_g.gb = function(n) {
    _g.gb.initializeBase(this, [n])
};
_g.cK = function() {
    _g.cK.initializeBase(this);
    this.__type = _g.cK._dataContractName
};
_g.gC = function() {
    _g.gC.initializeBase(this);
    this.__type = _g.gC._dataContractName
};
_g.es = function(n) {
    _g.es.initializeBase(this);
    this.__type = _g.es._dataContractName;
    this.ParentFolderId = n
};
_g.fD = function() {
    _g.fD.initializeBase(this);
    this.__type = _g.fD._dataContractName
};
_g.kE = function(n) {
    _g.kE.initializeBase(this);
    this.Path = n
};
_g.jU = function(n) {
    _g.jU.initializeBase(this, [n])
};
_g.fU = function() {
    _g.fU.initializeBase(this);
    this.__type = _g.fU._dataContractName
};
_g.jH = function() {
    _g.jH.initializeBase(this);
    this.__type = _g.jH._dataContractName
};
_g.gE = function() {
    _g.gE.initializeBase(this);
    this.__type = _g.gE._dataContractName
};
_g.r = function(n) {
    _g.r.initializeBase(this, [n]);
    this.__type = _g.r._dataContractName;
    this.Item = new _g.M
};
_g.bd = function(n) {
    _g.bd.initializeBase(this, [n]);
    this.__type = _g.bd._dataContractName
};
_g.gI = function() {
    _g.gI.initializeBase(this);
    this.__type = _g.gI._dataContractName
};
_g.cJ = function(n) {
    _g.cJ.initializeBase(this, [n]);
    this.__type = _g.cJ._dataContractName
};
_g.fu = function(n) {
    _g.fu.initializeBase(this, [n]);
    this.__type = _g.fu._dataContractName
};
_g.fs = function(n) {
    _g.fs.initializeBase(this, [n]);
    this.__type = _g.fs._dataContractName
};
_g.jo = function() {
    _g.jo.initializeBase(this);
    this.__type = _g.jo._dataContractName
};
_g.iV = function() {
    _g.iV.initializeBase(this);
    this.__type = _g.iV._dataContractName
};
_g.ej = function(n) {
    _g.ej.initializeBase(this);
    this.__type = _g.ej._dataContractName;
    this.Body = n;
    this.Recipients = new Array(0)
};
_g.dd = function(n) {
    _g.dd.initializeBase(this);
    this.__type = _g.dd._dataContractName;
    this.RefinerCategory = n;
    this.RefinerDataEntryTypes = new Array(0)
};
_g.jA = function() {
    _g.jA.initializeBase(this);
    this.__type = _g.jA._dataContractName
};
_g.jQ = function() {
    _g.jQ.initializeBase(this);
    this.__type = _g.jQ._dataContractName
};
_g.jE = function() {
    _g.jE.initializeBase(this);
    this.__type = _g.jE._dataContractName
};
_g.eA = function(n) {
    _g.eA.initializeBase(this, [n]);
    this.__type = _g.eA._dataContractName;
    this.Body = new _g.gg
};
_g.br = function(n) {
    _g.br.initializeBase(this, [n]);
    this.__type = _g.br._dataContractName
};
_g.gw = function() {
    _g.gw.initializeBase(this);
    this.__type = _g.gw._dataContractName;
    this.RefinerQueries = new Array(0)
};
_g.eh = function() {
    _g.eh.initializeBase(this);
    this.__type = _g.eh._dataContractName
};
_g.kJ = function(n) {
    _g.kJ.initializeBase(this, [n])
};
_g.fn = function() {
    _g.fn.initializeBase(this);
    this.__type = _g.fn._dataContractName
};
_g.fp = function() {
    _g.fp.initializeBase(this);
    this.__type = _g.fp._dataContractName
};
_g.hu = function(n, t) {
    _g.hu.initializeBase(this);
    this.__type = _g.hu._dataContractName;
    this.RefinementQuery = n;
    this.HitCount = t
};
_g.ih = function() {
    _g.ih.initializeBase(this);
    this.__type = _g.ih._dataContractName
};
_g.hd = function(n) {
    _g.hd.initializeBase(this);
    this.__type = _g.hd._dataContractName;
    this.ToFolderId = n;
    this.FolderIds = new Array(0)
};
_g.hX = function() {
    _g.hX.initializeBase(this);
    this.__type = _g.hX._dataContractName
};
_g.fA = function() {
    _g.fA.initializeBase(this);
    this.__type = _g.fA._dataContractName
};
_g.hp = function(n) {
    _g.hp.initializeBase(this);
    this.Interval = n
};
_g.ey = function() {
    _g.ey.initializeBase(this);
    this.__type = _g.ey._dataContractName;
    this.Conversations = new Array(0)
};
_g.dI = function(n) {
    _g.dI.initializeBase(this);
    this.StartDate = n
};
_g.dI._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["StartDate"], null)
};
_g.hw = function(n) {
    _g.hw.initializeBase(this);
    this.__type = _g.hw._dataContractName;
    this.BaseShape = n
};
_g.kK = function() {
    _g.kK.initializeBase(this);
    this.ChangeType = _changeType
};
_g.dS = function(n) {
    _g.dS.initializeBase(this);
    this.__type = _g.dS._dataContractName;
    this.ItemChanges = new Array(0);
    this.ConflictResolution = n
};
_g.gH = function() {
    _g.gH.initializeBase(this);
    this.__type = _g.gH._dataContractName
};
_g.da = function() {
    _g.da.initializeBase(this);
    this.__type = _g.da._dataContractName
};
_g.ji = function() {
    _g.ji.initializeBase(this);
    this.__type = _g.ji._dataContractName;
    this.IsOwner = _isOwner;
    this.GroupPersona = new _g.ca
};
_g.cN = function() {
    _g.cN.initializeBase(this);
    this.__type = _g.cN._dataContractName
};
_g.fq = function() {
    _g.fq.initializeBase(this);
    this.__type = _g.fq._dataContractName
};
_g.ii = function() {
    _g.ii.initializeBase(this);
    this.__type = _g.ii._dataContractName
};
_g.fH = function() {
    _g.fH.initializeBase(this);
    this.__type = _g.fH._dataContractName
};
_g.fI = function() {
    _g.fI.initializeBase(this);
    this.__type = _g.fI._dataContractName
};
_g.kg = function() {
    _g.kg.initializeBase(this);
    this.__type = _g.kg._dataContractName
};
_g.fN = function() {
    _g.fN.initializeBase(this);
    this.__type = _g.fN._dataContractName
};
_g.fQ = function() {
    _g.fQ.initializeBase(this);
    this.__type = _g.fQ._dataContractName
};
_g.fY = function() {
    _g.fY.initializeBase(this);
    this.__type = _g.fY._dataContractName
};
_g.ge = function() {
    _g.ge.initializeBase(this);
    this.__type = _g.ge._dataContractName
};
_g.il = function() {
    _g.il.initializeBase(this);
    this.__type = _g.il._dataContractName
};
_g.ip = function() {
    _g.ip.initializeBase(this);
    this.__type = _g.ip._dataContractName
};
_g.iw = function() {
    _g.iw.initializeBase(this);
    this.__type = _g.iw._dataContractName
};
_g.gd = function() {
    _g.gd.initializeBase(this);
    this.__type = _g.gd._dataContractName
};
_g.iP = function() {
    _g.iP.initializeBase(this);
    this.__type = _g.iP._dataContractName
};
_g.jl = function() {
    _g.jl.initializeBase(this);
    this.__type = _g.jl._dataContractName
};
_g.jW = function() {
    _g.jW.initializeBase(this);
    this.__type = _g.jW._dataContractName
};
_g.jC = function() {
    _g.jC.initializeBase(this);
    this.__type = _g.jC._dataContractName
};
_g.hR = function() {
    _g.hR.initializeBase(this);
    this.__type = _g.hR._dataContractName
};
_g.hV = function() {
    _g.hV.initializeBase(this);
    this.__type = _g.hV._dataContractName
};
_g.iy = function() {
    _g.iy.initializeBase(this);
    this.__type = _g.iy._dataContractName
};
_g.iD = function() {
    _g.iD.initializeBase(this);
    this.__type = _g.iD._dataContractName
};
_g.kb = function() {
    _g.kb.initializeBase(this);
    this.__type = _g.kb._dataContractName
};
_g.is = function() {
    _g.is.initializeBase(this);
    this.__type = _g.is._dataContractName
};
_g.gh = function() {
    _g.gh.initializeBase(this);
    this.__type = _g.gh._dataContractName
};
_g.gg = function() {
    _g.gg.initializeBase(this);
    this.__type = _g.gg._dataContractName
};
_g.dh = function() {
    _g.dh.initializeBase(this);
    this.__type = _g.dh._dataContractName
};
_g.cA = function() {
    _g.cA.initializeBase(this);
    this.__type = _g.cA._dataContractName
};
_g.fw = function(n) {
    _g.fw.initializeBase(this, [n]);
    this.__type = _g.fw._dataContractName
};
_g.fv = function(n, t) {
    _g.fv.initializeBase(this, [n]);
    this.__type = _g.fv._dataContractName;
    this.Body = t
};
_g.ij = function(n) {
    _g.ij.initializeBase(this, [n])
};
_g.fy = function(n) {
    _g.fy.initializeBase(this);
    this.__type = _g.fy._dataContractName;
    this.ParentFolderId = n;
    this.Folders = new Array(0)
};
_g.fx = function(n, t) {
    _g.fx.initializeBase(this, [n]);
    this.__type = _g.fx._dataContractName;
    this.Body = t
};
_g.im = function(n) {
    _g.im.initializeBase(this, [n])
};
_g.gN = function() {
    _g.gN.initializeBase(this);
    this.__type = _g.gN._dataContractName
};
_g.gN._TZ = function(n, t, i, r) {
    _g.bo._TZ(n, t, i, r)
};
_g.fF = function(n) {
    _g.fF.initializeBase(this);
    this.__type = _g.fF._dataContractName;
    this.FolderIds = new Array(0);
    this.DeleteType = n
};
_g.fE = function(n, t) {
    _g.fE.initializeBase(this, [n]);
    this.__type = _g.fE._dataContractName;
    this.Body = t
};
_g.iu = function(n) {
    _g.iu.initializeBase(this, [n])
};
_g.ep = function(n) {
    _g.ep.initializeBase(this);
    this.__type = _g.ep._dataContractName;
    this.ItemIds = new Array(0);
    this.DeleteType = n
};
_g.fL = function() {
    _g.fL.initializeBase(this);
    this.__type = _g.fL._dataContractName;
    this.Folders = new Array(0)
};
_g.fM = function(n, t, i) {
    _g.fM.initializeBase(this);
    this.__type = _g.fM._dataContractName;
    this.FolderShape = n;
    this.Paging = t;
    this.ParentFolderIds = new Array(0);
    this.Traversal = i
};
_g.fK = function(n, t) {
    _g.fK.initializeBase(this, [n]);
    this.__type = _g.fK._dataContractName;
    this.Body = t
};
_g.iG = function(n) {
    _g.iG.initializeBase(this, [n])
};
_g.dz = function(n, t) {
    _g.dz.initializeBase(this, [n]);
    this.__type = _g.dz._dataContractName;
    this.Body = t
};
_g.bv = function(n) {
    _g.bv.initializeBase(this);
    this.__type = _g.bv._dataContractName;
    this.ItemShape = n;
    this.ItemIds = new Array(0)
};
_g.bu = function(n, t) {
    _g.bu.initializeBase(this, [n]);
    this.__type = _g.bu._dataContractName;
    this.Body = t
};
_g.iK = function(n) {
    _g.iK.initializeBase(this, [n])
};
_g.iO = function(n) {
    _g.iO.initializeBase(this, [n])
};
_g.fX = function(n) {
    _g.fX.initializeBase(this, [n]);
    this.__type = _g.fX._dataContractName;
    this.Body = new _g.ey
};
_g.fV = function() {
    _g.fV.initializeBase(this);
    this.__type = _g.fV._dataContractName
};
_g.hm = function(n) {
    _g.hm.initializeBase(this, [n])
};
_g.dC = function(n) {
    _g.dC.initializeBase(this);
    this.__type = _g.dC._dataContractName;
    this.FolderShape = n;
    this.FolderIds = new Array(0)
};
_g.dB = function(n, t) {
    _g.dB.initializeBase(this, [n]);
    this.__type = _g.dB._dataContractName;
    this.Body = t
};
_g.iQ = function(n) {
    _g.iQ.initializeBase(this, [n])
};
_g.iR = function(n) {
    _g.iR.initializeBase(this, [n])
};
_g.ew = function() {
    _g.ew.initializeBase(this);
    this.__type = _g.ew._dataContractName
};
_g.iT = function(n) {
    _g.iT.initializeBase(this, [n])
};
_g.hn = function(n) {
    _g.hn.initializeBase(this, [n])
};
_g.dH = function(n) {
    _g.dH.initializeBase(this, [n]);
    this.__type = _g.dH._dataContractName
};
_g.fJ = function(n, t) {
    _g.fJ.initializeBase(this, [n]);
    this.__type = _g.fJ._dataContractName;
    this.Body = t
};
_g.gl = function(n, t) {
    _g.gl.initializeBase(this);
    this.__type = _g.gl._dataContractName;
    this.ItemIds = new Array(0);
    this.IsJunk = n;
    this.MoveItem = t
};
_g.gk = function(n, t) {
    _g.gk.initializeBase(this, [n]);
    this.__type = _g.gk._dataContractName;
    this.Body = t
};
_g.cx = function() {
    _g.cx.initializeBase(this);
    this.__type = _g.cx._dataContractName
};
_g.cx._TZ = function(n, t, i, r) {
    _g.dt._TZ(n, t, i, r)
};
_g.jg = function() {
    _g.jg.initializeBase(this);
    this.__type = _g.jg._dataContractName
};
_g.jg._TZ = function(n, t, i, r) {
    _g.dt._TZ(n, t, i, r)
};
_g.gr = function(n) {
    _g.gr.initializeBase(this, [n]);
    this.__type = _g.gr._dataContractName
};
_g.gq = function(n, t) {
    _g.gq.initializeBase(this, [n]);
    this.__type = _g.gq._dataContractName;
    this.Body = t
};
_g.gp = function(n) {
    _g.gp.initializeBase(this, [n]);
    this.__type = _g.gp._dataContractName
};
_g.go = function(n, t) {
    _g.go.initializeBase(this, [n]);
    this.__type = _g.go._dataContractName;
    this.Body = t
};
_g.jj = function(n) {
    _g.jj.initializeBase(this, [n])
};
_g.jp = function(n) {
    _g.jp.initializeBase(this, [n])
};
_g.cb = function(n, t) {
    _g.cb.initializeBase(this, [n]);
    this.__type = _g.cb._dataContractName;
    this.Folder = t
};
_g.cn = function(n) {
    _g.cn.initializeBase(this);
    this.__type = _g.cn._dataContractName;
    this.FolderId = n
};
_g.cd = function() {
    _g.cd.initializeBase(this);
    this.__type = _g.cd._dataContractName;
    this.FolderChanges = new Array(0)
};
_g.ct = function(n) {
    _g.ct.initializeBase(this, [n]);
    this.__type = _g.ct._dataContractName;
    this.Body = new _g.cd
};
_g.cO = function(n) {
    _g.cO.initializeBase(this, [n])
};
_g.gz = function(n, t, i) {
    _g.gz.initializeBase(this);
    this.__type = _g.gz._dataContractName;
    this.SearchId = n;
    this.ResultType = t;
    this.PageDirection = i
};
_g.gy = function(n, t) {
    _g.gy.initializeBase(this, [n]);
    this.__type = _g.gy._dataContractName;
    this.Body = t
};
_g.gL = function(n, t) {
    _g.gL.initializeBase(this, [n]);
    this.__type = _g.gL._dataContractName;
    this.Name = t
};
_g.gA = function(n) {
    _g.gA.initializeBase(this);
    this.__type = _g.gA._dataContractName;
    this.UserConfigurationName = n
};
_g.gK = function(n) {
    _g.gK.initializeBase(this, [n]);
    this.__type = _g.gK._dataContractName
};
_g.en = function(n) {
    _g.en.initializeBase(this, [n]);
    this.__type = _g.en._dataContractName
};
_g.jX = function(n) {
    _g.jX.initializeBase(this, [n])
};
_g.kL = function() {
    _g.kL.initializeBase(this, [_changeType])
};
_g.hS = function() {
    _g.hS.initializeBase(this);
    this.__type = _g.hS._dataContractName
};
_g.hW = function() {
    _g.hW.initializeBase(this);
    this.__type = _g.hW._dataContractName
};
_g.iz = function() {
    _g.iz.initializeBase(this);
    this.__type = _g.iz._dataContractName
};
_g.fm = function(n, t) {
    _g.fm.initializeBase(this);
    this.__type = _g.fm._dataContractName;
    this.SourceFolderId = n;
    this.EmailAddresses = new Array(0);
    this.ActionType = t
};
_g.fm._TZ = function(n, t, i, r) {
    t !== i && n && r.a(!1, n, i, t, ["ClientLastSyncTime"], null)
};
_g.hP = function(n) {
    _g.hP.initializeBase(this, [n])
};
_g.fl = function(n, t) {
    _g.fl.initializeBase(this, [n]);
    this.__type = _g.fl._dataContractName;
    this.Body = t
};
_g.fC = function(n, t) {
    _g.fC.initializeBase(this);
    this.__type = _g.fC._dataContractName;
    this.EmailAddresses = new Array(0);
    this.ActionType = n;
    this.RuleName = t
};
_g.iq = function(n) {
    _g.iq.initializeBase(this, [n])
};
_g.fB = function(n, t) {
    _g.fB.initializeBase(this, [n]);
    this.__type = _g.fB._dataContractName;
    this.Body = t
};
_g.it = function() {
    _g.it.initializeBase(this);
    this.__type = _g.it._dataContractName
};
_g.iI = function(n) {
    _g.iI.initializeBase(this, [n])
};
_g.fT = function(n) {
    _g.fT.initializeBase(this, [n]);
    this.__type = _g.fT._dataContractName
};
_g.ho = function(n) {
    _g.ho.initializeBase(this, [n])
};
_g.kd = function(n) {
    _g.kd.initializeBase(this, [n])
};
_g.gM = function() {
    _g.gM.initializeBase(this);
    this.__type = _g.gM._dataContractName
};
_g.kt = function(n) {
    _g.kt.initializeBase(this);
    this.ToFolderId = n;
    this.ItemIds = new Array(0)
};
_g.hz = function(n) {
    _g.hz.initializeBase(this);
    this.__type = _g.hz._dataContractName;
    this.UserConfiguration = n
};
_g.hT = function(n) {
    _g.hT.initializeBase(this, [n])
};
_g.ks = function() {
    _g.ks.initializeBase(this)
};
_g.Y = function() {
    _g.Y.initializeBase(this);
    this.__type = _g.Y._dataContractName
};
_g.ky = function(n) {
    _g.ky.initializeBase(this, [n])
};
_g.Z = function() {
    _g.Z.initializeBase(this);
    this.__type = _g.Z._dataContractName
};
_g.kz = function() {
    _g.kz.initializeBase(this)
};
_g.jf = function() {
    _g.jf.initializeBase(this);
    this.__type = _g.jf._dataContractName
};
_g.ht = function() {
    _g.ht.initializeBase(this)
};
_g.hx = function() {
    _g.hx.initializeBase(this);
    this.__type = _g.hx._dataContractName;
    this.Updates = new Array(0)
};
_g.eQ = function() {
    _g.eQ.initializeBase(this);
    this.__type = _g.eQ._dataContractName
};
_g.eR = function() {
    _g.eR.initializeBase(this);
    this.__type = _g.eR._dataContractName
};
_g.fP = function() {
    _g.fP.initializeBase(this);
    this.__type = _g.fP._dataContractName
};
_g.eB = function() {
    _g.eB.initializeBase(this);
    this.__type = _g.eB._dataContractName
};
_g.jq = function() {
    _g.jq.initializeBase(this);
    this.__type = _g.jq._dataContractName
};
_g.hB = function() {
    _g.hB.initializeBase(this);
    this.__type = _g.hB._dataContractName
};
_g.kh = function() {
    _g.kh.initializeBase(this);
    this.__type = _g.kh._dataContractName
};
_g.ia = function() {
    _g.ia.initializeBase(this);
    this.__type = _g.ia._dataContractName
};
_g.cP = function(n, t, i) {
    this.hasActionHandler = undefined;
    this.actionHandler = undefined;
    this.methodName = n;
    this.parameters = t;
    this.actionContext = i
};
_g.kO = function() {};
_g.kO.prototype = {
    nonQueuedCall: 0,
    detectionFailed: -1,
    fromClientStore: -2,
    firstTimeActionSavedResults: 1,
    firstTimeActionDidNotSaveResults: 2,
    duplicatedActionReturnedSavedResults: 3,
    duplicatedActionWithoutSavedResults: 4
};
_g.kO.registerEnum("_g.kO", !1);
_g.dl = function() {};
_g.dl.registerInterface("_g.dl");
_g.eX = function() {};
_g.eX.registerInterface("_g.eX");
_g.hC = function(n) {
    this.map = n
};
_g.kQ = function() {};
_g.kQ.registerInterface("_g.kQ");
_g.kR = function() {};
_g.kR.registerInterface("_g.kR");
_g.eY = function() {};
_g.eY.registerInterface("_g.eY");
_g.hD = function() {};
_g.hD.registerInterface("_g.hD");
_g.dm = function() {};
_g.dm.registerInterface("_g.dm");
_g.eZ = function() {};
_g.eZ.registerInterface("_g.eZ");
_g.gQ = function() {};
_g.gQ.registerInterface("_g.gQ");
_g.kS = function() {};
_g.kS.registerInterface("_g.kS");
_g.dV = function(n, t, i) {
    _g.dV.initializeBase(this, [1, "Action"]);
    this.e(n, t, i)
};
_g.dV.a = function(n, t, i, r) {
    if (n.request.methodName !== "LogDatapoint") {
        var e = n.id;
        !n.id && e && (n.id = e);
        if (_a.be.c()) {
            var u = _a.X.j(r);
            var o = _a.X.n(u);
            o && (n.checkpointValue = o);
            if (u) {
                n.resource = u;
                var f = u.startTime;
                n.startTime = Math.floor(f);
                n.nextHopProtocol = u.nextHopProtocol ? u.nextHopProtocol : "";
                u.responseEnd >= 0 && f >= 0 && (n.responseEndTimeStamp = Math.floor(n.requestInvokedTimeStamp - f + u.responseEnd));
                _a.X.k(u, n.request.methodName + "_" + n.id, n.requestInvokedTimeStamp - f)
            }
        }
        _a.A.b.a(new _g.dV(n, t, i))
    }
};
_g.dV.prototype = {
    e: function(n, t, i) {
        this.a.id = n.id;
        this.a.typ = n.actionType;
        this.a.mn = n.request.methodName;
        if (n.request.actionContext) {
            this.a.can = n.request.actionContext.actionName || "";
            this.a.ras = _ff.y.toString(n.request.actionContext.source) || ""
        }
        this.a.as = n.state;
        this.a.ac = n.attemptCount;
        this.a.sc = n.successCount;
        this.a.fc = n.failureCount;
        this.a.rc = n.rejectedCount;
        this.a.tc = n.timeoutCount;
        this.a.bc = n.abandonedCount;
        this.a.at = n.processingTime;
        this.a.be = n.backEndTime * 1e3;
        this.a.fe = n.frontEndTime;
        this.a.rql = n.requestLength;
        this.a.rsl = n.responseLength;
        this.a.edge = n.edgeRequest;
        this.a.fes = n.frontEndServer || "";
        this.a.bes = n.backEndServer || "";
        this.a.nhprt = n.nextHopProtocol;
        this.a.edgeRef = n.msEdgeRef || "";
        this.a.cpv = n.checkpointValue;
        this.a.cpst = n.startTime;
        n.responseBytes && !isNaN(n.responseBytes) && (this.a.rsb = n.responseBytes);
        this.a.ci = n.correlationId;
        this.a.ActId = n.activityId;
        this.a.cbt = n.callBackEndTime - n.callBackStartTime;
        n.resource && n.responseEndTimeStamp > 0 && (this.a.cbd = Math.floor(n.callBackStartTime - n.responseEndTimeStamp));
        if (n.response) {
            this.a.rsc = n.response.statusCode;
            this.a.rsk = n.response.responseKind;
            if (n.response.fault) {
                this.a.rsf = n.response.fault.FaultMessage;
                this.a.rst = _j.z.a(n.response.fault.IsTransient) ? "?" : n.response.fault.IsTransient
            }
            if (n.timestamps) {
                var r = this.d(n.timestamps);
                if (!_j.h.a(n.externalClientName) && n.externalTimestamps) {
                    this.a.ecn = n.externalClientName;
                    _j.h.b(n.externalCorrelationId) || (this.a.eci = n.externalCorrelationId);
                    _j.h.b(n.externalServerName) || (this.a.esn = n.externalServerName);
                    r += this.c(n.externalTimestamps)
                }
                this.a.tt = r
            }
        } else n.rejectedCount > 0 && (this.a.rsc = n.offlineRejectCode);
        this.a.cp = t;
        if (t) {
            var u = i || 0;
            this.a.ar = u
        }
    },
    d: function(n) {
        var i = "";
        var t = new Array(4);
        if (n)
            for (var r = 0; r < 4; r++) {
                var u = n[_g.Q.c[r]];
                u && (t[r] = new Date(u))
            }
        i += this.b(t, 0);
        i += this.b(t, 1);
        i += this.b(t, 3);
        i += this.b(t, 2);
        return i
    },
    c: function(n) {
        var r = "";
        var i = new Array(4);
        if (n)
            for (var t = 0; t < 4; t++) {
                var u = n[_g.Q.b[t]];
                u && (i[t] = new Date(u))
            }
        r += this.b(i, 4);
        r += this.b(i, 5);
        return r
    },
    b: function(n, t) {
        var r = -1;
        var i = -1;
        var u = "";
        var f = "";
        switch (t) {
            case 0:
                r = 0;
                i = 1;
                u = "DF";
                break;
            case 3:
                r = 3;
                i = 1;
                u = "DFE";
                break;
            case 2:
                r = 0;
                i = 2;
                u = "DFB";
                break;
            case 1:
                r = 2;
                i = 3;
                u = "DB";
                break;
            case 4:
                r = 0;
                i = 1;
                u = "DEP";
                break;
            case 5:
                r = 2;
                i = 3;
                u = "DEPACS";
                break
        }
        if (n[r] && n[i]) {
            var e = n[i].getTime() - n[r].getTime();
            f += u + "=" + e + ";"
        }
        return f
    }
};
_g.bB = function(n, t, i) {
    this.statusCode = t ? t.ErrorCode : 200;
    this.result = n;
    this.fault = t;
    this.responseKind = i;
    this.whenReceived = _a.d.f(_a.d.get_utcNow())
};
_g.bB.a = function(n, t) {
    return new _g.bB(n, null, t)
};
_g.bB.b = function(n, t) {
    return new _g.bB(null, n, t)
};
_g.bB.c = function(n, t, i) {
    var u = t === "True";
    var r = i === "True";
    switch (n) {
        case "null":
            return -1;
        case "True":
            return u ? 3 : 4;
        case "False":
            return r ? 1 : 2;
        default:
            return 0
    }
};
_g.bB.prototype = {
    result: null,
    fault: null,
    statusCode: 0,
    responseKind: 0,
    whenReceived: null
};
_g.I = function(n, t, i, r, u, f) {
    var e = _a.bm.a(n.bH.AdMarket, n.o(), r);
    _g.I.b = _a.bm.d(r.b.d().GDPRCountries, e);
    _g.I.f = u;
    _g.I.e = f;
    if (r.b.x().Enabled && (r.b.d().Enabled || _a.bm.c(r, e, i.a(), t.bH.IsShadowMailbox))) {
        _g.I.h();
        window.__cmp = _g.I.g;
        window.addEventListener("message", _g.I.i, !1)
    }
};
_g.I.h = function() {
    if (!window.frames.__cmpLocator) {
        var n = document.createElement("iframe");
        n.style.display = "none";
        n.name = "__cmpLocator";
        document.body.appendChild(n)
    }
};
_g.I.i = function(n) {
    var t = n;
    if (t && t.origin && t.origin === "https://acdn.adnxs.com") {
        var i = null;
        var u = Object.getType(t.data) === String;
        if (u) try {
            i = JSON.parse(t.data)
        } catch (f) {} else i = t.data;
        if (i && i.__cmpCall) {
            var r = i.__cmpCall;
            _g.I.g(r.command, r.parameter, function(n, i) {
                r.returnValue = n;
                var f = {};
                f.__cmpReturn = r;
                t.source.postMessage(u ? JSON.stringify(f) : f, t.origin)
            })
        }
    }
};
_g.I.g = function(n, t, i) {
    switch (n) {
        case "getConsentData":
            _g.I.j(i);
            break;
        case "ping":
            _g.I.k(i);
            break
    }
};
_g.I.j = function(n) {
    var t = {};
    t.gdprApplies = _g.I.b;
    t.hasGlobalScope = !0;
    t.consentData = "";
    _g.I.b ? _g.I.d(function(i) {
        t.consentData = i;
        n(t, !0)
    }) : n(t, !0)
};
_g.I.k = function(n) {
    var t = {};
    t.gdprAppliesGlobally = !0;
    t.cmpLoaded = !0;
    n(t, !0)
};
_g.I.d = function(n) {
    if (_g.I.c) {
        n(_g.I.c);
        return
    }
    _g.I.a = _g.I.e.b(_g.eW, "/v1.0/OutlookOptions/GdprAdsPrefs", _a.C.a());
    _g.I.f.a(_g.I.a);
    _g.I.a.a(function(t) {
        _g.I.a.d && _g.I.a.d.options && _g.I.a.d.options[0] && (_g.I.c = _g.I.a.d.options[0].consentString);
        n(_g.I.c)
    });
    _g.I.a.b(function(t) {
        n(null)
    })
};
_g.eW = function() {};
_g.eW.prototype = {
    options: function() {
        return null
    }
};
_g.kP = function() {};
_g.kP.prototype = {
    consentString: function() {
        return null
    },
    id: function() {
        return null
    }
};
_g.bs = function(n, t) {
    this.g = Function.createDelegate(this, this.o);
    _g.bs.initializeBase(this);
    _a.c.a(n, "onlineProxy");
    _a.c.a(t, "eventAggregator");
    this.k = n;
    this.h = t
};
_g.bs.a = function(n) {
    return n >= 100 && n <= 599 && n !== 408 && n !== 449 && n !== 502 && n !== 503 && n !== 401 && n !== 440
};
_g.bs.c = function(n) {
    n.set_userContext(n);
    n.invoke()
};
_g.bs.prototype = {
    k: null,
    h: null,
    b: !1,
    a: !1,
    d: !1,
    j: 0,
    c: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.h.a(_a.cS, new _a.cS(n));
            this.a
        }
        return n
    },
    e: function(n) {
        if (this.d !== n) {
            this.d = n;
            if (n) {
                Sys.Net.WebRequestManager.add_completedRequest(this.g);
                this.f()
            } else Sys.Net.WebRequestManager.remove_completedRequest(this.g)
        }
        return n
    },
    l: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.by("DetectingConnectivity")
        }
        return n
    },
    m: function() {
        this.c(!1);
        this.i()
    },
    f: function() {
        this.a || this.i()
    },
    bz: function() {
        this.e(!1);
        this.c(!1);
        _j.S.prototype.bz.call(this)
    },
    i: function() {
        if (this.d && !this.b) {
            this.l(!0);
            var i = _a.d.get_utcNow();
            var t = _a.b.b(_g.bs.b, "OwaPing", !1, null);
            var n = this;
            this.k.ko(function(r) {
                n.j = _a.d.get_utcNow().e(i);
                var f = r.get_statusCode();
                var u = _g.bs.a(f);
                if (t) {
                    t.m = n.n(f, u).toString();
                    _a.b.a(t)
                }
                n.c(u);
                n.l(!1)
            })
        }
    },
    o: function(n, t) {
        var i = n;
        var r = i.get_webRequest();
        r.get_userContext() !== r && (_g.bs.a(i.get_statusCode()) ? this.c(!0) : i.get_statusCode() === 440 ? this.c(!1) : this.i())
    },
    n: function(n, t) {
        var i = new _a.l;
        i.b("sc", n);
        i.c("c", t);
        return i
    }
};
_g.gP = function() {};
_g.gP.prototype = {
    a: function(n, t) {
        return new _g.bs(n, t)
    }
};

function CoreWebServicesComponent() {}
CoreWebServicesComponent.$$cctor = function() {
    _a.t.a().a(CoreWebServicesComponent)
};
CoreWebServicesComponent.prototype = {
    b: function(n, t, i) {
        n.e(_g.kk).b(_a.eS).b(_g.eY).a();
        n.e(_g.bS).b(_a.eQ).a();
        if (!t.a()) {
            var o = this;
            n.b(_g.dW, function() {
                return new _g.dW(function() {
                    return n.a(_g.E).bH.UserEmailAddress
                }, n.a(_a.e), n.a(_g.eY), n.d(_g.eZ), n.a(_g.cC), n.a(_j.j), n.d(_j.t), n.a(_a.cc), n.d(_g.dm), n.d(_g.eX))
            }).a()
        }
        n.e(_g.gP).a();
        var s = this;
        n.b(_g.gS, function() {
            return new _g.gS(function(n, t) {
                t ? Sys.Net.WebRequestManager.add_completedRequest(n) : Sys.Net.WebRequestManager.remove_completedRequest(n)
            }, n.a(_j.j))
        }).a();
        var h = this;
        n.b(_g.fc, function() {
            return new _g.fc(_g.ClientVersionProvider.currentOWSVersion, n.a(_a.eQ), n.a(_a.eS), i)
        }).b(_g.gQ).a();
        var e = this;
        n.b(_g.cC, function() {
            return new _g.cC(n.a(_a.z).h(), _g.ClientVersionProvider.currentOWSVersion)
        }).a();
        var r = this;
        n.b(_g.gT, function() {
            return new _g.gT
        }).a();
        var u = this;
        n.b(_g.bU, function() {
            return new _g.bU(n.a(_a.cL), n.a(_a.cc), n.d(_g.dm))
        }).a();
        var f = this;
        n.b(_g.I, function() {
            return new _g.I(n.a(_g.a), n.a(_g.E), i, n.a(_a.cb), n.a(_a.q), n.a(_g.bU))
        }).a()
    },
    a: function() {
        return [new _j.y(_g.gT, 0, -1), new _j.y(_g.gS, 0, -1), new _j.y(_g.I, 1, -1)]
    }
};
_g.bT = function(n, t, i) {
    _g.bT.initializeBase(this, [n]);
    this.b = t;
    this.a = i
};
_g.bT.a = function(n) {
    var t = n.split("#");
    var i = null;
    if (t.length === 2) {
        var r = t[0];
        r === "SystemCategory" ? i = new _g.bT(n, "SystemCategory", _g.A.f(t[1]).toString()) : r === "UserCategory" ? i = new _g.bT(n, "UserCategory", t[1]) : r === "Hashtag".toLowerCase() && (i = new _g.bT(n, "Hashtag", "#" + t[1].toString()))
    }
    return i
};
_g.bT.prototype = {
    b: "All",
    a: null
};
_g.bb = function() {};
_g.l = function() {};
_g.l.b = function(n, t) {
    return !n != !t ? !1 : n ? n.Id === t.Id : !0
};
_g.l.d = function(n) {
    return _g.b.a.nameToId(n)
};
_g.l.a = function(n) {
    if (n && _g.N.isInstanceOfType(n)) return n.a;
    var t = _g.b.a.idToName(n);
    return t === _g.bb.a ? new _g.m(n.Id) : new _g.s(t)
};
_g.l.c = function(n) {
    return new _g.F(_g.l.a(n))
};
_g.l.f = function(n) {
    return n ? String.format("FolderId: Id= {0} ChangeKey= {1}", n.Id || "", n.ChangeKey || "") : ""
};
_g.l.e = function(n) {
    if (n.__type === _g.m._dataContractName) {
        var i = n;
        return new _g.m(i.Id)
    } else if (n.__type === _g.bJ._dataContractName) {
        var t = n;
        return new _g.bJ(t.Id)
    } else throw Error.invalidOperation("unpexpected type for baseFolderId: " + n.__type);
};
_g.ki = function() {};
_g.ki.a = function(n, t) {
    var u = 24856;
    var f = 24856;
    var i = n;
    var r = t;
    i && i.RetentionPeriod > 0 && (u = i.RetentionPeriod);
    r && r.RetentionPeriod > 0 && (f = r.RetentionPeriod);
    return u - f
};
_g.n = function() {};
_g.n.p = function() {
    if (!_g.n.f) {
        var i = "otmail.com;htmail.com;homail.com;hotail.com;hotmil.com;hotmal.com;hotmai.com;ohtmail.com;htomail.com;homtail.com;hotamil.com;hotmial.com;hotmali.com;ghotmail.com;hgotmail.com;yhotmail.com;hyotmail.com;uhotmail.com;huotmail.com;jhotmail.com;hjotmail.com;nhotmail.com;hnotmail.com;bhotmail.com;hbotmail.com;hiotmail.com;hoitmail.com;h9otmail.com;ho9tmail.com;h0otmail.com;ho0tmail.com;hpotmail.com;hoptmail.com;hlotmail.com;holtmail.com;hkotmail.com;hoktmail.com;hortmail.com;hotrmail.com;ho5tmail.com;hot5mail.com;ho6tmail.com;hot6mail.com;hoytmail.com;hotymail.com;hohtmail.com;hothmail.com;hogtmail.com;hotgmail.com;hoftmail.com;hotfmail.com;hotnmail.com;hotmnail.com;hotjmail.com;hotmjail.com;hotkmail.com;hotmkail.com;hotmqail.com;hotmaqil.com;hotmwail.com;hotmawil.com;hotmsail.com;hotmasil.com;hotmxail.com;hotmaxil.com;hotmzail.com;hotmazil.com;hotmauil.com;hotmaiul.com;hotma8il.com;hotmai8l.com;hotma9il.com;hotmai9l.com;hotmaoil.com;hotmaiol.com;hotmalil.com;hotmaill.com;hotmakil.com;hotmaikl.com;hotmajil.com;hotmaijl.com;hotmaikl.com;hotmailk.com;hotmaiol.com;hotmailo.com;hotmaipl.com;hotmailp.com;mail.com;gail.com;gmil.com;gmal.com;gmai.com;mgail.com;gamil.com;gmial.com;gmali.com;fgmail.com;gfmail.com;tgmail.com;gtmail.com;ygmail.com;gymail.com;hgmail.com;ghmail.com;bgmail.com;gbmail.com;vgmail.com;gvmail.com;gnmail.com;gmnail.com;gjmail.com;gmjail.com;gkmail.com;gmkail.com;gmqail.com;gmaqil.com;gmwail.com;gmawil.com;gmsail.com;gmasil.com;gmxail.com;gmaxil.com;gmzail.com;gmazil.com;gmauil.com;gmaiul.com;gma8il.com;gmai8l.com;gma9il.com;gmai9l.com;gmaoil.com;gmaiol.com;gmalil.com;gmaill.com;gmakil.com;gmaikl.com;gmajil.com;gmaijl.com;gmaikl.com;gmailk.com;gmaiol.com;gmailo.com;gmaipl.com;gmailp.com;ahoo.com;yhoo.com;yaoo.com;yaho.com;yaho.com;ayhoo.com;yhaoo.com;yaoho.com;tyahoo.com;ytahoo.com;6yahoo.com;y6ahoo.com;7yahoo.com;y7ahoo.com;uyahoo.com;yuahoo.com;jyahoo.com;yjahoo.com;hyahoo.com;yhahoo.com;gyahoo.com;ygahoo.com;yqahoo.com;yaqhoo.com;ywahoo.com;yawhoo.com;ysahoo.com;yashoo.com;yxahoo.com;yaxhoo.com;yzahoo.com;yazhoo.com;yaghoo.com;yahgoo.com;yayhoo.com;yahyoo.com;yauhoo.com;yahuoo.com;yajhoo.com;yahjoo.com;yanhoo.com;yahnoo.com;yabhoo.com;yahboo.com;yahioo.com;yahoio.com;yah9oo.com;yaho9o.com;yah0oo.com;yaho0o.com;yahpoo.com;yahopo.com;yahloo.com;yaholo.com;yahkoo.com;yahoko.com;yahoio.com;yahooi.com;yaho9o.com;yahoo9.com;yaho0o.com;yahoo0.com;yahopo.com;yahoop.com;yaholo.com;yahool.com;yahoko.com;yahook.com;utlook.com;otlook.com;oulook.com;outook.com;outlok.com;outlok.com;outloo.com;uotlook.com;otulook.com;oultook.com;outolok.com;outloko.com;ioutlook.com;oiutlook.com;9outlook.com;o9utlook.com;0outlook.com;o0utlook.com;poutlook.com;oputlook.com;loutlook.com;olutlook.com;koutlook.com;okutlook.com;oyutlook.com;ouytlook.com;o7utlook.com;ou7tlook.com;o8utlook.com;ou8tlook.com;oiutlook.com;ouitlook.com;okutlook.com;ouktlook.com;ojutlook.com;oujtlook.com;ohutlook.com;ouhtlook.com";
        var t = i.split(";");
        _g.n.f = {};
        for (var n = 0; n < t.length; n++) _g.n.f[t[n]] = null
    }
    return _g.n.f
};
_g.n.l = function(n) {
    return !!n && !!n.EmailAddress && n.EmailAddress.substr(n.EmailAddress.indexOf("@") + 1).toLowerCase() in _g.n.p()
};
_g.n.c = function(n) {
    return _j.h.a(n.RoutingType) || _g.n.d(n) ? n.OriginalDisplayName : _g.n.h(n) && _g.n.j(n) ? n.Name : n.EmailAddress
};
_g.n.m = function(n) {
    return _j.h.a(n.RoutingType) || _g.n.d(n) ? n.OriginalDisplayName : _g.n.h(n) && _g.n.j(n) ? n.ItemId.Id : n.EmailAddress
};
_g.n.d = function(n) {
    return !_j.h.b(n.RoutingType) && n.RoutingType.toUpperCase() === "EX"
};
_g.n.h = function(n) {
    return !_j.h.b(n.RoutingType) && n.RoutingType.toUpperCase() === "MAPIPDL"
};
_g.n.j = function(n) {
    return !_j.h.b(n.MailboxType) && n.MailboxType.toUpperCase() === "PRIVATEDL"
};
_g.n.e = function(n) {
    return _g.n.h(n) || _g.n.j(n)
};
_g.n.q = function(n) {
    for (var r = new _a.R, t, i = 0; i < n.b.length; i++) {
        t = n.c(i);
        t && r.a(t.EmailAddress)
    }
    return r
};
_g.n.g = function(n) {
    for (var i = new _j.l, t = 0; t < n.b(); t++) i.a(n.c(t));
    return i
};
_g.n.o = function(n) {
    return n ? _g.R.isInstanceOfType(n) || n.__type === _g.R._dataContractName || n.Mailbox !== undefined && _g.n.b(n.Mailbox) : !1
};
_g.n.b = function(n) {
    return n ? _g.g.isInstanceOfType(n) || n.__type === _g.g._dataContractName || n.RoutingType === "MAPIPDL" || n.EmailAddress !== undefined || n.MailboxType !== undefined : !1
};
_g.n.a = function(n, t) {
    if (!n || !t || Object.getType(t).getName() !== Object.getType(n).getName() && n.__type !== t.__type) return !1;
    var r = n;
    var i = t;
    if (_g.n.d(r) && _g.n.d(i)) return r.EmailAddress && i.EmailAddress ? _a.C.b(r.EmailAddress) === _a.C.b(i.EmailAddress) : !1;
    else {
        var f = _g.n.m(r);
        var u = _g.n.m(i);
        return _a.C.b(f) === _a.C.b(u)
    }
};
_g.n.n = function(n) {
    if (n) {
        var t;
        if (_g.n.o(n)) t = n.Mailbox;
        else if (_g.n.b(n)) t = n;
        else return "Invalid address type: " + Object.getType(n).getName();
        return t ? "Name=" + t.Name + "; Address=" + t.EmailAddress + "; RoutingType=" + t.RoutingType + "; MailboxType=" + t.MailboxType + "; Id=" + (t.ItemId ? t.ItemId.Id + ":" + t.ItemId.ChangeKey : "null") + "; SipUrl=" + t.SipUri + "; Submitted=" + t.Submitted + "; OriDisplayName=" + t.OriginalDisplayName + ";" : "null"
    } else return "null"
};
_g.n.k = function(n, t) {
    if (!n || !t) return !1;
    for (var i = 0; i < n.length; i++)
        if (t.EmailAddress === n[i].EmailAddress) return !0;
    return !1
};
_g.n.i = function(n, t) {
    var i = !!n && _g.n.j(n);
    if (i || n && n.EmailAddress) {
        t.val = i ? n.Name : n.EmailAddress;
        return !0
    } else {
        t.val = "";
        return !1
    }
};
_g.N = function(n, t) {
    _g.N.initializeBase(this, [n]);
    _a.c.c(n, "groupSmtpAddress");
    this.a = new _g.s("inbox");
    this.a.Mailbox = new _g.g;
    this.a.Mailbox.EmailAddress = n;
    this.a.Mailbox.MailboxType = "GroupMailbox";
    this.b = t
};
_g.N.prototype = {
    a: null,
    b: 0
};
_g.dn = function() {};
_g.dn.a = function(n) {
    return n ? n.__type === _g.p._dataContractName : !1
};
_g.C = function() {};
_g.C.a = function() {
    return "service.svc/s/GetFileAttachment?id={0}" + _a.w.f()
};
_g.C.l = function() {
    return "pdfprint.aspx?id={0}" + _a.w.f()
};
_g.C.r = function() {
    return "service.svc/s/GetReferenceAttachment?attachmentId={0}&location={1}" + _a.w.f()
};
_g.C.s = function() {
    return "service.svc/s/GetReferenceAttachment?attachmentId={0}&location={1}&permissionLevel={2}" + _a.w.f()
};
_g.C.j = function() {
    return "service.svc/s/GetFileAttachment?id={0}&UA=0" + _a.w.f()
};
_g.C.m = function() {
    return "service.svc/s/GetAllAttachmentsAsZip?id={0}" + _a.w.f()
};
_g.C.c = function() {
    return "service.svc/s/GetFileAttachment?id={0}&isImagePreview=False&asDataUri=True&UA=0" + _a.w.f()
};
_g.C.f = function() {
    return _a.g.b ? "service.svc/s/GetFileAttachment?id={0}&isImagePreview=True" + _a.w.f() : "service.svc/s/GetAttachmentThumbnail?id={0}&thumbnailType=2" + _a.w.f()
};
_g.C.i = function() {
    return "service.svc/s/ExportContactList"
};
_g.C.d = function() {
    return "service.svc/s/GetAttachmentThumbnail?id={0}" + _a.w.f()
};
_g.C.g = function() {
    return String.format(_g.C.a(), "{id}")
};
_g.C.h = function() {
    return "service.svc/CreateAttachmentFromForm"
};
_g.C.n = function() {
    return "service.svc/CreateAttachmentFromLocalFile"
};
_g.C.p = function() {
    return "service.svc/GetAccessTokenforDataProvider"
};
_g.C.k = function() {
    return "service.svc/UploadAndShareAttachmentFromForm"
};
_g.C.q = function() {
    return "service.svc/UploadPhotoFromForm"
};
_g.C.o = function() {
    return String.format(_g.C.a(), "{id}") + _g.C.e()
};
_g.C.e = function() {
    return String.format("&ManagementRole={0}&RequestServerVersion={1}", escape(_g.C.t()), "Exchange2013")
};
_g.C.t = function() {
    if (!_g.C.b) {
        var n = new _g.cY;
        n.UserRoles = ["MailboxSearch"];
        _g.C.b = JsonParser.serialize(n)
    }
    return _g.C.b
};
_g.C.u = function(n) {
    return (n ? "service.svc/s/GetFileAttachment?id={0}&UA=0" : "service.svc/s/GetFileAttachment?id={0}&isImagePreview=False&asDataUri=True&UA=0") + _a.w.f()
};
_g.bS = function() {};
_g.bS.prototype = {
    c: function(n) {
        return _g.bS.a[n]
    },
    d: function() {
        var i = new _j.q;
        var t = _g.bS.a;
        for (var n in t) {
            var r = {
                key: n,
                value: t[n]
            };
            i.c(r.key)
        }
        return i.e()
    }
};
_g.kj = function() {
    _g.kj.initializeBase(this)
};
_g.kj.prototype = {
    folderHierarchy: null
};
_g.k = function(n, t, i, r, u) {
    this.R = Function.createDelegate(this, this.Y);
    _g.k.initializeBase(this);
    _a.c.a(t, "onlineProxyFactory");
    _a.c.a(i, "connectionManagerFactory");
    _a.c.a(u, "eventAggregator");
    this.t = n;
    this.F = t.p(this.R);
    this.v = u;
    this.n = i.a(this.F, this.v);
    this.G = r
};
_g.k.i = function(n) {
    if (_g.k.a !== n) try {
        _g.k.a && _g.k.a.dispose()
    } finally {
        _g.k.a = n
    }
    return n
};
_g.k.h = function() {
    _g.k.d(function(n) {})
};
_g.k.d = function(n) {
    if (_g.k.a) n(_g.k.a.A());
    else if (_g.k.f) _g.k.c.addHandler("$", n);
    else if (_g.k.e) {
        _g.k.f = !0;
        _g.k.c = new Sys.EventHandlerList;
        _g.k.c.addHandler("$", n);
        _g.k.e(function(n) {
            _g.k.a = n;
            _g.k.f = !1;
            var t = _g.k.c.getHandler("$");
            _g.k.c = null;
            t(_g.k.a.A())
        })
    } else n(null)
};
_g.k.prototype = {
    G: null,
    v: null,
    t: null,
    n: null,
    S: null,
    F: null,
    h: function() {
        return this.t
    },
    m: function() {
        return this.n
    },
    A: function() {
        return this.F
    },
    b: function() {
        return this.F
    },
    i: function(n, t, i) {
        throw Error.invalidOperation("RemoveSendAction is only valid when offline is enabled.");
    },
    Y: function(n, t, i) {
        if (n.request.hasActionHandler) n.response.result ? this.G.b(n, this, t, i) : t();
        else {
            this.G.b(n, this, t, i);
            this.S && this.S(n)
        }
    },
    z: function(n, t, i) {},
    u: function(n, t, i) {},
    q: function(n) {
        return n
    },
    E: function(n, t, i, r, u) {
        var e = this,
            f = this;
        t(i, function(n) {}, function(t) {
            _j.e.c(_g.k.g, "ExecuteWithActionQueue action failed.  Action: {0}.  Exception: {1}", n, t.FaultMessage)
        });
        r(null)
    },
    D: function() {
        this.n.dispose()
    }
};
_g.kk = function() {
    this.f = {}
};
_g.kk.prototype = {
    e: function(n, t) {
        this.f[n.toLowerCase()] = t
    },
    c: function(n) {
        return this.f[n.toLowerCase()]
    },
    d: function() {
        var i = new _j.q;
        var t = this.f;
        for (var n in t) {
            var r = {
                key: n,
                value: t[n]
            };
            i.c(r.key)
        }
        return i.e()
    }
};
_g.bk = function() {};
_g.bk.a = function(n) {
    return _g.N.isInstanceOfType(n) ? !1 : _a.bL.g(n.Id)
};
_g.Q = function(n, t, i, r, u, f, e, o, s, h, c) {
    this.jB = {};
    this.jO = {};
    this.kg = new Sys.EventHandlerList;
    this.kf = _g.Q.g;
    _g.Q.initializeBase(this);
    _a.c.a(n, "processResponse");
    this.jX = n;
    this.jM = r;
    this.jQ = u;
    this.jN = f;
    this.jU = e;
    this.jF = s;
    this.jZ = h;
    this.jT = c;
    this.jB.SyncConversation = 12e4;
    this.jB.SyncFolderHierarchy = 12e4;
    this.jB.SyncFolderItems = 12e4;
    this.jB.GetItem = 12e4;
    this.jB.CreateItem = 18e4;
    this.jB.UpdateItem = 18e4;
    this.jB.CreateAttachment = 72e4;
    this.jB.CreateAttachmentFromLocalFile = 72e4;
    this.jB.CreateReferenceAttachmentFromLocalFile = 72e4;
    this.jB.GetAttachment = 72e4;
    this.jB.SearchMailboxes = 18e4;
    this.jB.CreateModernGroup = 18e4;
    this.jB.CreateUnifiedGroup = 18e4;
    this.jB.ImportContactList = 12e4;
    this.jB.UploadFileToCloud = 6e5;
    this.ka = i.a().lu().Enabled;
    this.jS = i.a().hh().Enabled;
    this.jP = i.a().F().Enabled;
    this.jG = i.a().fZ().Enabled ? i.a().fZ().ActionsToProxy || new Array(0) : new Array(0);
    this.jR = i.a().eS().Enabled ? i.a().eS().ActionsToMeasure || new Array(0) : new Array(0);
    this.kb = i.a().lC().Enabled;
    var l = this;
    this.jJ = new _j.J(function() {
        return i.a().eu().Enabled ? _a.bs.a() && t ? t() : null : _a.bs.b()
    });
    this.jO.InstantMessageSignIn = !0;
    this.jO.GetDlpPolicyTips = !0;
    _dh.a(o, this)
};
_g.Q.e = function(n) {
    return n ? _j.h.a(n.explicitLogonUser) ? _j.h.a(n.anchorMailbox) ? "" : n.anchorMailbox : n.explicitLogonUser : ""
};
_g.Q.h = function(n) {
    return n ? !_j.h.a(n.anchorMailbox) || !_j.h.a(n.explicitLogonUser) : !1
};
_g.Q.f = function(n, t) {
    _j.h.a(n) || (t = String.format("{0}:Edge-Header:{1}", t, n));
    return t
};
_g.Q.j = function() {
    _g.Q.d || (_g.Q.d = window.location.href.split("?")[0].split("#")[0]);
    return _g.Q.d
};
_g.Q.prototype = {
    jG: null,
    jR: null,
    jJ: null,
    jM: null,
    jQ: null,
    jN: null,
    jU: null,
    ka: !1,
    jX: null,
    jL: null,
    jK: null,
    jH: null,
    jP: !1,
    jF: null,
    kb: !1,
    jZ: null,
    jT: null,
    jS: !1,
    ko: function(n) {
        var t = _j.h.a(_a.g.m) ? "ping.owa" : _a.g.m;
        t = t.indexOf("?") === -1 ? t + "?" + "UA=0" : t + "&" + "UA=0";
        var i = new Sys.Net.WebRequest;
        i.set_url(_g.Q.a + t);
        i.set_timeout(6e4);
        i.add_completed(n);
        _g.bs.c(i)
    },
    jC: function(n, t, i, r, u, f) {
        var e = new _g.H(new _g.cP(t, i, r));
        var o = this;
        this.jV(e, function() {
            var n = e.response.fault;
            if (n) {
                var i = n;
                _j.h.b(e.activityId) && (i.ActivityId = e.activityId);
                var r = Error.create(t + n.FaultMessage, i);
                f(r)
            } else u(e, e.response.result)
        })
    },
    jD: function(n, t, i, r, u) {
        _a.c.a(r, "invokeSucceeded");
        _a.c.a(u, "invokeFailed");
        var f = new _g.H(new _g.cP(n, t, i));
        var e = this;
        this.jV(f, function() {
            e.kq(f)
        });
        r(f)
    },
    jV: function(n, t) {
        var r = _a.d.get_utcNow();
        var f = _g.H.d(n);
        n.beginTimeString = _a.d.p(r);
        _g.H.g(n);
        var u = n.request ? _g.Q.e(n.request.actionContext) : "";
        var i = _a.g.f().g(n.request.methodName, !1, u);
        this.jY("InvokingAction", n);
        this.jL && this.jL.a(n.request.parameters);
        this.jY("SendingAction", n);
        var e = this;
        this.jW(n, function() {
            _j.m.a().c(_a.a.cy, "TrackAction_" + n.request.methodName, function() {
                if (f) {
                    var t = i ? i.n : 0;
                    _g.dV.a(n, !0, t, i ? i.s : null)
                }
            });
            n.callBackStartTime = _a.L.b();
            t();
            n.callBackEndTime = _a.L.b();
            _g.H.c(n, r)
        }, i)
    },
    jW: function(n, t, i) {
        if (this.kf) {
            var u = n.request.methodName;
            var r = _g.Q.a + "service.svc" + "?action=" + u;
            _a.g.D(u) && (r += "&trace=1");
            var e = JsonParser.serialize(n.request, !0);
            n.responseCode = "ErrorConnectionFailed";
            this.kc(n, r, e, 0, "", "", "", "", "", "", "", "", t, i);
            return
        }
        if (n.request.hasActionHandler) this.km(n, t, i);
        else {
            var f = this;
            this.kp(n, function() {
                f.kn(n, t, i)
            })
        }
    },
    kp: function(n, t) {
        if (null === n || null === n.request || null === n.request.actionContext) {
            t();
            return
        }
        this.ka && !this.jO[n.request.methodName] && (n.request.actionContext.useEmptyPost = !0);
        var i = n.request.actionContext;
        if (null !== this.jQ && i.useEmptyPost && _g.Q.h(i)) {
            var r = this;
            this.jQ.a(function(r) {
                var u = r.a(i);
                u || (n.request.actionContext.useEmptyPost = !1);
                t()
            })
        } else t()
    },
    kt: function(n, t, i, r) {
        if (_g.gR.isInstanceOfType(t)) {
            var f = t;
            n.attemptCount += f.b - 1;
            n.failureCount += f.e;
            n.timeoutCount += f.h;
            n.abandonedCount += f.d
        }
        if (t.get_responseAvailable()) {
            for (var o = 0; o < _g.Q.c.length; o++) {
                var w = _g.Q.c[o];
                var p = t.getResponseHeader(w);
                n.timestamps || (n.timestamps = {});
                p && (n.timestamps[w] = p)
            }
            var y;
            if (!_j.h.a(y = t.getResponseHeader("X-OWA-STO"))) {
                var d = this;
                _j.m.a().c(_a.a.cy, "RaiseEvent SessionTimeoutEvent", function() {
                    d.jU.a(_a.fh, new _a.fh(y))
                })
            }
            var b = t.getResponseHeader("X-EXT-ClientName");
            if (!_j.h.a(b)) {
                n.externalClientName = b;
                n.externalServerName = t.getResponseHeader("X-EXT-Server") || "";
                n.externalCorrelationId = t.getResponseHeader("X-EXT-CorrelationId") || "";
                for (var e = 0; e < _g.Q.b.length; e++) {
                    var k = _g.Q.b[e];
                    var v = t.getResponseHeader(k);
                    n.externalTimestamps || (n.externalTimestamps = {});
                    v && (n.externalTimestamps[k] = v)
                }
            }
            this.ks(n, t);
            t.get_webRequest() && t.get_webRequest().get_body() && (n.requestLength = t.get_webRequest().get_body().length);
            t.get_responseData() && (n.responseLength = t.get_responseData().length);
            var u = t.getResponseHeader("X-MSEdge-Ref");
            if (u) {
                n.edgeRequest = 1;
                n.msEdgeRef = u
            } else u = "";
            var s = t.getResponseHeader("X-FrontEnd-End");
            var a = t.getResponseHeader("X-FrontEnd-Begin");
            _j.h.a(s) || _j.h.a(a) || (n.frontEndTime = new Date(s) - new Date(a));
            var l = t.get_statusCode();
            if (l === 503) {
                var g = t.getResponseHeader("X-OWA-TransientErrorResponse");
                if (g) var nt = t.getResponseHeader("X-OWA-ERROR")
            }
            var c = t.getResponseHeader("X-FEServer");
            var h = t.getResponseHeader("X-BEServer");
            n.frontEndServer = c;
            n.backEndServer = h;
            if (r) {
                r.q = c;
                r.o = h
            }
            this.kc(n, t.get_webRequest().get_url(), t.get_webRequest().get_body(), l, t.get_statusText(), t.get_responseData(), t.getResponseHeader("Content-Type"), t.getResponseHeader("X-OWA-DuplicatedAction"), t.getResponseHeader("X-OWA-ReturnedSavedResult"), t.getResponseHeader("X-OWA-ResultSaved"), t.getResponseHeader("X-OWA-DiagnosticsInfo"), u, i, r)
        } else this.ku(n, t.get_timedOut(), i, r)
    },
    kc: function(n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
        var w = n.request.methodName;
        var p = null;
        var y = null;
        var nt = !!e && e.startsWith("application/json");
        if (nt) {
            try {
                var b = JsonParser.deserialize(f);
                if (!Array.contains(this.jG, n.request.methodName) || b.Header || b.Body) p = b;
                else {
                    var g = {};
                    g.Body = b;
                    g.Header = {};
                    p = g
                }
            } catch (ut) {
                y = new _g.W(ut.message, r)
            }
            typeof p == "xml" && (y = new _g.W(String.format(_wss.i.G, w), r))
        }
        var it = r < 200 || r >= 300;
        if (it) {
            _no.a.c(r) && !_g.Q.h(n.request.actionContext) && _a.g.J();
            if (p) y = p.Body;
            else {
                var k = u ? String.format(_wss.i.W, w, u) : String.format(_wss.i.V, w, r);
                k = _g.Q.f(l, k);
                y = new _g.W(k, r)
            }
        } else {
            if (!nt) {
                var rt = 503;
                var d = e ? String.format(_wss.i.k, w, e) : String.format(_wss.i.a, w);
                d = _g.Q.f(l, d);
                y = new _g.W(d, rt)
            }
            _j.E.a(p)
        }
        var tt = _g.bB.c(o, s, h);
        y ? this.jE(n, y, tt, c, a, v) : this.ke(n, p, tt, c, a, v)
    },
    ku: function(n, t, i, r) {
        var u;
        var f = n.request.methodName;
        if (t) {
            n.timeoutCount++;
            u = new _g.W(String.format(_wss.i.j, f), 408)
        } else {
            n.abandonedCount++;
            u = new _g.W(String.format(_wss.i.A, f), 0)
        }
        this.jE(n, u, 0, "", i, r)
    },
    ke: function(n, t, i, r, u, f) {
        n.successCount++;
        n.response = _g.bB.a(t, i);
        this.kh(n, "", "", r, u, f)
    },
    ks: function(n, t) {
        if (n.request) {
            var r = _g.Q.e(n.request.actionContext);
            if (!_j.h.a(r)) {
                var i = t.getResponseHeader("X-OWA-Version");
                _j.h.a(i) || this.jM && this.jM.e(r, new _a.bk(i))
            }
        }
    },
    jE: function(n, t, i, r, u, f) {
        n.failureCount++;
        n.response = _g.bB.b(t, i);
        this.kh(n, t.FaultMessage, t.StackTrace, r, u, f)
    },
    kh: function(n, t, i, r, u, f) {
        n.state = 1;
        f && f.z(n.timestamps);
        var e = this.kr(n, r);
        _a.g.f().f(f, n.response.statusCode, t, i, e[0], e[1], e[2], this.jP);
        this.jY("ResponseReceived", n);
        u();
        this.jP && _a.g.f().k(f, n.callBackEndTime - n.callBackStartTime)
    },
    kr: function(n, t) {
        var r = new Array(3);
        if (t) {
            var i = t.split(";");
            var u = 0;
            var e = 0;
            var f = 0;
            if (i && i.length >= 3) {
                u = _j.h.b(i[0]) ? 0 : Number.parseInvariant(i[0]) / 1e3;
                e = _j.h.b(i[1]) ? 0 : Number.parseInvariant(i[1]) / 1e3;
                f = _j.h.b(i[2]) ? 0 : Number.parseInvariant(i[2]) / 1e3
            }
            r[0] = u.toFixed(3);
            r[1] = e.toFixed(3);
            r[2] = f.toFixed(3);
            n.backEndTime = u
        }
        return r
    },
    km: function(n, t, i) {
        if (n.request.actionHandler) {
            var e = this,
                o = this;
            n.request.actionHandler(n.request.parameters, function(r) {
                e.ke(n, r, 0, "", t, i)
            }, function(r) {
                o.jE(n, r, 0, "", t, i)
            })
        } else {
            var f = "An online-only {0} action was found in the action queue without a corresponding handler in memory - this happens if the application restarted before the request had a chance to be handled.";
            var r = String.format(f, n.request.methodName);
            var u = new _g.W(r, 598);
            this.jE(n, u, 0, "", t, i)
        }
    },
    kn: function(n, t, i) {
        var f = n.request.methodName;
        var rt = n.request.parameters;
        var u = n.request.actionContext;
        var d = "";
        var k = null;
        var ft = _j.n.b(_a.a.cy, 2, "WebInvoke_" + f + "_" + n.correlationId);
        var r = new Sys.Net.WebRequest;
        var s = null;
        s = Array.contains(this.jG, f) ? this.jH.a() + "/messaging/" : this.jH && !_j.h.b(this.jH.b()) ? _j.h.c(this.jH.b(), f) : _g.Q.a + "service.svc";
        s += "?action=" + f;
        var l = s;
        _a.g.D(f) && (l += "&trace=1");
        var c = JsonParser.serialize(rt, !0);
        if (u && u.useEmptyPost) {
            var b = encodeURIComponent(c);
            if (b.length > 2048) r.set_body(c);
            else {
                l += "&EP=1";
                r.get_headers()["X-OWA-UrlPostData"] = b;
                r.set_httpVerb("POST");
                r.set_body(null)
            }
        } else r.set_body(c);
        r.set_url(l);
        r.get_headers().Action = f;
        r.get_headers()["Content-Type"] = "application/json; charset=utf-8";
        r.get_headers()[_a.w.c()] = _a.w.d();
        this.jN && (r.get_headers()["X-OWA-ClientBuildVersion"] = this.jN.a);
        var h = !1;
        if (u) {
            h = u.isAutomated;
            u.actionName && (r.get_headers()["X-OWA-ActionName"] = u.actionName);
            u.timeZone && (r.get_headers()["X-TimeZoneContext"] = u.timeZone);
            if (u.isDiscovery) {
                var nt = new _g.cY;
                nt.UserRoles = ["MailboxSearch"];
                r.get_headers()["X-OWA-ManagementRole"] = JsonParser.serialize(nt)
            }!_j.u.a(u.source) && u.source && (r.get_headers()["X-OWA-ActionSource"] = _ff.y.toString(u.source));
            _a.A.d() && (r.get_headers()["X-OWA-OfflineRejectCode"] = u.offlineRejectCode);
            if (u.anchorMailbox) r.get_headers()[this.jF.c()] = u.anchorMailbox;
            else if (_j.h.b(u.explicitLogonUser))
                if (_j.h.b(this.jJ.e())) {
                    var g = this.jF.b();
                    _j.h.b(g) || (r.get_headers()[this.jF.a()] = g)
                } else r.get_headers()[this.jF.c()] = this.jJ.e();
            else r.get_headers()[this.jF.c()] = u.explicitLogonUser;
            u.explicitLogonUser && (r.get_headers()["X-OWA-ExplicitLogonUser"] = u.explicitLogonUser);
            u.remoteUserIdentifier && (r.get_headers()["X-OWA-RemoteUserId"] = u.remoteUserIdentifier);
            u.publicFolderMailbox && (r.get_headers()["X-PublicFolderMailbox"] = u.publicFolderMailbox);
            u.selfIdentifier && (r.get_headers()["X-OWA-SelfId"] = u.selfIdentifier);
            if (u.owsVersion !== "Exchange2007") {
                var e = u.owsVersion;
                if (e && e.startsWith("V")) {
                    e = e.substring(1, e.length);
                    e = e.replace("_", ".");
                    _j.h.b(e) || (r.get_headers()["X-EWS-TargetVersion"] = e)
                }
            }
            u.setServiceUnavailableOnTransientError && (r.get_headers()["X-OWA-ServiceUnavailableOnTransientError"] = u.setServiceUnavailableOnTransientError.toString());
            d = u.actionName
        }
        r.get_headers()["X-OWA-ActionName"] || (r.get_headers()["X-OWA-ActionName"] = f + "Action");
        if (!h && _a.bp.a) {
            var ut = new Date - _a.bp.a.a;
            ut > 6e4 && (h = !0)
        }
        h && r.set_url(r.get_url() + "&UA=0");
        this.kb && (r.get_headers()["X-UseJsonNetSerializer"] = "1");
        r.set_url(r.get_url() + ("&ID=" + n.id + "&AC=" + n.attemptCount));
        r.get_headers()["X-OWA-Attempt"] = n.attemptCount.toString();
        r.get_headers()["X-OWA-ActionId"] = n.id.toString();
        r.set_timeout(this.jB[f] || 6e4);
        if (this.jK) {
            var v = this.jK();
            if (v) {
                var w = v;
                for (var a in w) {
                    var p = {
                        key: a,
                        value: w[a]
                    };
                    r.get_headers()[p.key] = p.value
                }
            }
        }
        var y = !0;
        u && (y = !u.preventRetry);
        _g.H.d(n) && y && r.set_executor(new _g.gR(_j.m.a()));
        var o = null;
        if (Array.contains(this.jR, f)) {
            o = new _a.bx(14, 1, !0);
            o.e(1, f);
            o.e(2, s)
        }
        var tt = this;
        r.add_completed(function(r) {
            var u = new _a.cg(_a.a.cJ, "WebResponse_" + f);
            u.a = "Handling callback for " + _g.H.a(n);
            _a.bd.a(u, function() {
                _j.n.a(k);
                o && o.l();
                var u = r.getResponseHeader("Content-Length");
                n.activityId = r.getResponseHeader("request-id");
                n.responseBytes = parseInt(u);
                n.webrequestCompletedCount++;
                n.webrequestCompletedCount > 1;
                tt.kt(n, r, t, i)
            })
        });
        if (i) {
            i.m = n.correlationId;
            i.s = _g.Q.j() + r.get_url()
        }
        r.get_headers()["X-OWA-CorrelationId"] = n.correlationId;
        r.get_headers()["client-request-id"] = n.correlationId;
        u && u.sendClientLocalTime && (r.get_headers()["X-Client-LocalTime"] = _a.d.f(_a.d.a()));
        r.get_headers()["X-OWA-ClientBegin"] = n.beginTimeString;
        _a.m.bi(r);
        var it = this;
        this.kk(f, r, function() {
            it.kl(f, r, function() {
                k = _j.n.b(_a.a.cy, 513, "WebRequest_" + f + "_" + d + "_" + n.id);
                r.invoke();
                n.requestInvokedTimeStamp = _a.L.b();
                _j.n.a(ft)
            })
        })
    },
    kq: function(n) {
        var i = this,
            t = this;
        this.jX(n, function() {}, function(t) {
            _j.e.c(_g.Q.i, "Processing response from {0} failed: {1}", n.request.methodName, t.message)
        })
    },
    jY: function(n, t) {
        var i = this.kg.getHandler(n);
        i && i(t)
    },
    kl: function(n, t, i) {
        if (this.jS)
            if (Array.contains(this.jG, n)) {
                var r = this;
                this.jT.a(function(n) {
                    var u = n.a();
                    if (!(u in t.get_headers())) {
                        var r = n.b();
                        r && (t.get_headers()[u] = r)
                    }
                    i()
                })
            } else i();
        else i()
    },
    kk: function(n, t, i) {
        if (Array.contains(this.jG, n)) {
            var r = this;
            this.jZ.a(function(n) {
                var u = n.b(window.location.origin);
                var r = u[0];
                var f = u[1];
                if (r) {
                    t.get_headers().Authorization = "Bearer " + r;
                    i()
                } else f.then(function(n) {
                    if (n) {
                        t.get_headers().Authorization = "Bearer " + n;
                        i()
                    }
                })
            })
        } else i()
    }
};
_g.dW = function(n, t, i, r, u, f, e, o, s, h) {
    this.h = n;
    this.b = t;
    this.c = i;
    this.e = r;
    this.d = u;
    this.g = f;
    this.i = e;
    this.a = o;
    this.j = s;
    this.f = h
};
_g.dW.prototype = {
    h: null,
    b: null,
    c: null,
    e: null,
    d: null,
    g: null,
    i: null,
    a: null,
    j: null,
    f: null,
    p: function(n) {
        return new _g.Q(n, this.h, this.b, this.c, this.e, this.d, this.g, this.i, this.a, this.j, this.f)
    }
};
_g.gR = function(n) {
    this.i = Function.createDelegate(this, this.m);
    _g.gR.initializeBase(this);
    this.g = n
};
_g.gR.prototype = {
    a: null,
    f: null,
    b: 0,
    e: 0,
    h: 0,
    d: 0,
    g: null,
    c: !1,
    j: 5e3,
    get_aborted: function() {
        return this.a ? this.a.get_aborted() : !1
    },
    get_responseAvailable: function() {
        return this.a ? this.a.get_responseAvailable() : !1
    },
    get_responseData: function() {
        return this.a ? this.a.get_responseData() : null
    },
    get_started: function() {
        return !!this.f
    },
    get_statusCode: function() {
        return this.a && this.a.get_responseAvailable() ? this.a.get_statusCode() : 0
    },
    get_statusText: function() {
        return this.a ? this.a.get_statusText() : null
    },
    get_timedOut: function() {
        return this.a ? this.a.get_timedOut() : !1
    },
    get_xml: function() {
        return this.a ? this.a.get_xml() : null
    },
    l: function() {
        this.c = !1;
        if (this.b < 2 && this.get_responseAvailable())
            if (_g.bs.a(this.get_statusCode()) || this.get_statusCode() === 503 || this.get_statusCode() === 504) {
                if (this.getResponseHeader("X-RetriableError") === "1") {
                    this.c = !0;
                    return !0
                }
            } else return !0;
        return !1
    },
    abort: function() {
        this.a && this.a.abort()
    },
    getAllResponseHeaders: function() {
        return this.a ? this.a.getAllResponseHeaders() : null
    },
    getResponseHeader: function(n) {
        return this.a ? this.a.getResponseHeader(n) : null
    },
    executeRequest: function() {
        this.b++;
        var t = this.get_webRequest();
        var n = new Sys.Net.WebRequest;
        n.set_body(t.get_body());
        n.set_httpVerb(t.get_httpVerb());
        n.set_timeout(t.get_timeout());
        n.set_url(t.get_url());
        n.set_userContext(t.get_userContext());
        var u = t.get_headers();
        for (var r in u) {
            var i = {
                key: r,
                value: u[r]
            };
            n.get_headers()[i.key] = i.value
        }
        n.get_headers()[_a.w.c()] = _a.w.d();
        n.get_headers()["X-OWA-Attempt"] = this.b.toString();
        n.add_completed(this.i);
        this.f = n;
        _g.bs.c(n);
        this.a = n.get_executor()
    },
    m: function(n) {
        this.a = n;
        if (this.l()) {
            this.e++;
            n.get_responseAvailable() || (n.get_timedOut() ? this.h++ : this.d++);
            if (this.c) {
                var t = this;
                this.g.a(_a.a.cy, "Retry on server error", function() {
                    t.executeRequest()
                }, this.j)
            } else this.executeRequest()
        } else this.k()
    },
    k: function() {
        this.get_webRequest().completed(Sys.EventArgs.Empty)
    }
};
_g.hE = function(n, t, i, r, u, f, e, o) {
    this.p = Function.createDelegate(this, this.q);
    this.d = _g.hE.TResponse === Number || Type.isEnum(_g.hE.TResponse) ? 0 : _g.hE.TResponse === Boolean ? !1 : null;
    _g.hE.$$(this.$$gta["_g.hE"].TResponse).initializeBase(this);
    this.j = t;
    this.o = n;
    this.h = u;
    this.k = f;
    this.e = e;
    this.l = o;
    this.f = i;
    this.m = r
};
_g.hE.$$ = function(n) {
    var u = _g.__tc = _g.__tc || {};
    var i = "hE" + "$" + n.getName().replace(/\./g, "_");
    if (!u[i]) {
        var t = u[i] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _g.hE.apply(this, t)
        };
        var o = _a.dn;
        t.registerClass("_g.__tc." + i, o);
        var s = {
            "_g.hE": {
                TResponse: n
            },
            ctor: _g.hE
        };
        t.prototype.$$gta = s;
        var e = _g.hE.prototype;
        for (var f in e) {
            var r = {
                key: f,
                value: e[f]
            };
            "constructor" !== r.key && (t.prototype[r.key] = r.value)
        }
        t.b = function(t, i, r) {
            r.val = "";
            i.val = n === Number || Type.isEnum(n) ? 0 : n === Boolean ? !1 : null;
            try {
                i.val = JsonParser.deserialize(t);
                return !0
            } catch (u) {
                r.val = "Exception when deserializing response. Response Text: " + t + ". Exception: " + u.message;
                return !1
            }
        };
        t.a = "HTTP Status: {0}. Message: {1}. CorrelationId: {2}"
    }
    return u[i]
};
_g.hE.prototype = {
    e: null,
    j: null,
    o: null,
    h: null,
    k: null,
    l: 0,
    f: null,
    m: null,
    bb: function() {
        var n = new XMLHttpRequest;
        var t = this;
        n.onreadystatechange = function() {
            n.readyState === 4 && (n.status >= 200 && n.status < 300 ? t.s(n, t.e) : t.r(n, t.e))
        };
        var r = this;
        n.ontimeout = function() {
            r.X(Error.create("Timeout"))
        };
        n.open(this.j, this.o, !0);
        n.timeout = this.l;
        n.setRequestHeader(_a.w.c(), _a.w.d());
        n.setRequestHeader(this.f.a(), this.f.b());
        n.setRequestHeader("x-ms-appname", "owa-jsmvvm");
        _j.h.a(this.h) || n.setRequestHeader("Content-Type", this.h);
        _j.h.a(this.e) || n.setRequestHeader("client-request-id", this.e);
        var i = this;
        this.m.a(function(t) {
            t.a(window.location.origin).then(function(t) {
                t && n.setRequestHeader("Authorization", "Bearer " + t);
                n.send(i.k)
            }, i.p)
        });
        return 1
    },
    s: function(n, t) {
        var i;
        var r;
        var e, f, u;
        if (u = _g.hE.$$(this.$$gta["_g.hE"].TResponse).b(n.responseText, e = {
                val: r
            }, f = {
                val: i
            }), r = e.val, i = f.val, u) {
            this.d = r;
            this.X(null)
        } else {
            i = String.format(_g.hE.$$(this.$$gta["_g.hE"].TResponse).a, n.status, i, t);
            this.X(Error.create(i))
        }
    },
    r: function(n, t) {
        var i = String.format(_g.hE.$$(this.$$gta["_g.hE"].TResponse).a, n.status, n.responseText, t);
        this.X(Error.create(i))
    },
    q: function(n) {
        _j.e.a(_a.a.bc, String.format("[OutlookServiceAction] GetAccessTokenforResource failed with exception message: {0}", n.message));
        this.X(null)
    }
};
_g.bU = function(n, t, i) {
    this.d = n;
    this.a = t;
    this.e = i
};
_g.bU.prototype = {
    d: null,
    a: null,
    e: null,
    c: function(n, t, i, r) {
        return this.g(n, t, i, r, r.correlationId)
    },
    g: function(n, t, i, r, u) {
        return new(_g.hE.$$(n))(this.d.a() + i, "POST", this.a, this.e, "application/json", JsonParser.serialize(r), u, 2e4)
    },
    b: function(n, t, i) {
        return new(_g.hE.$$(n))(this.d.a() + t, "GET", this.a, this.e, null, null, i, 2e4)
    },
    f: function(n, t, i, r) {
        return new(_g.hE.$$(n))(this.d.a() + i, "PATCH", this.a, this.e, "application/json", JsonParser.serialize(r), r.correlationId, 2e4)
    }
};
_g.kT = function() {};
_g.kT.prototype = {
    correlationId: null
};
_g.gS = function(n, t) {
    this.b = Function.createDelegate(this, this.d);
    _a.c.a(n, "subscriber");
    _a.c.a(t, "aggregator");
    this.a = t;
    this.c = n;
    n(this.b, !0);
    _a.g.g().a(this)
};
_g.gS.prototype = {
    c: null,
    a: null,
    dispose: function() {
        this.a = null;
        this.c(this.b, !1);
        _a.g.g().b(this)
    },
    d: function(n, t) {
        var i = n;
        if (i.get_statusCode() === 500 || i.get_statusCode() === 412) {
            var r = i.getResponseHeader("X-OWA-ExtendedErrorCode");
            if (!_j.h.a(r)) {
                var e = i.getResponseHeader("X-OWA-ExtendedErrorMessage");
                var f = i.getResponseHeader("X-OWA-ExtendedErrorUser");
                var u = i.getResponseHeader("X-OWA-ExtendedErrorData");
                this.a.a(_a.cA, new _a.cA(Number.parseInvariant(r), e, f, u))
            }
        }
    }
};
_g.cC = function(n, t) {
    _a.c.c(n, "buildVersion");
    this.a = n;
    this.b = t
};
_g.cC.prototype = {
    a: null,
    b: "Exchange2007"
};
_g.OWSVersion = function(n) {
    this.a = n
};
_g.OWSVersion.create = function(n) {
    return new _g.OWSVersion(n)
};
_g.OWSVersion.prototype = {
    a: null,
    d: 0,
    e: 0,
    c: !1,
    b: function() {
        this.g();
        return this.d
    },
    f: function() {
        this.g();
        return this.e
    },
    supports: function(n) {
        return this.a === n.a ? !0 : this.h(n) > 0
    },
    h: function(n) {
        if (this.a === n.a) return 0;
        var t = n;
        return this.b() > t.b() ? 1 : this.b() < t.b() ? -1 : this.f() > t.f() ? 1 : -1
    },
    toString: function() {
        return this.a
    },
    g: function() {
        if (!this.c) {
            this.c = !0;
            var n = this.a.substr(1).split("_");
            this.d = Number.parseInvariant(n[0]);
            this.e = Number.parseInvariant(n[1])
        }
    }
};
_g.fa = function(n) {
    this.palActionNeeded = n
};
_g.fa.prototype = {
    palActionNeeded: !1
};
_g.kl = function(n, t, i) {
    this.successEventName = n;
    this.failureEventName = t;
    this.completedEventName = i
};
_g.kl.prototype = {
    windowId: null,
    successEventName: null,
    failureEventName: null,
    completedEventName: null
};
_g.bV = function() {};
_g.bV.a = function(n, t, i, r, u) {
    var f = new Array(5);
    f[0] = _j.h.b(n) ? "" : n.trim();
    f[1] = _j.h.b(t) ? "" : t.trim();
    f[2] = _j.h.b(i) ? "" : i.trim();
    f[3] = _j.h.b(r) ? "" : r.trim();
    f[4] = _j.h.b(u) ? "" : u.trim();
    return f.join("$#$")
};
_g.bV.c = function(n, t) {
    for (var u = new _g.cr(t, "None"), i = n.split("$#$"), r = 0; r < i.length; r++) i[r] = i[r] === "" ? null : i[r].trim();
    u.Street = i[0];
    u.City = i[1];
    u.State = i[2];
    u.PostalCode = i[3];
    u.Country = i[4];
    return u
};
_g.kU = function(n, t, i) {
    this.c = n;
    this.v = _g.H.a(this.c);
    this.e = t;
    this.f = i
};
_g.kU.prototype = {
    v: null,
    c: null,
    e: null,
    f: null,
    H: function() {
        return !0
    },
    w: function(n, t) {
        this.n(n, t)
    }
};
_g.dX = function(n) {
    _a.c.a(n, "ResponseProcessors.modelResponseProcessorResolver");
    this.a = n
};
_g.dX.prototype = {
    a: null,
    c: function(n, t, i) {
        !n;
        var f = _g.H.a(n);
        !n.response;
        var r = n.response;
        if (!_g.bs.a(r.statusCode)) {
            i(!1);
            return
        }
        if (r.statusCode === 500 && r.fault && !1 === r.fault.IsTransient) {
            i(!0);
            return
        }
        if (r.statusCode === 404) {
            n.attemptCount <= 3 ? i(!1) : i(!0);
            return
        }
        switch (r.responseKind) {
            case 0:
                i(!0);
                return;
            case -1:
                i(!1);
                return;
            case 3:
                i(!0);
                return;
            case 4:
                break;
            case 1:
                i(!0);
                return;
            case 2:
                break;
            default:
                throw Error.argumentOutOfRange("response.DuplicatedAction", r.responseKind);
        }
        var u = this;
        this.a.a(function(r) {
            r.a(n, t, function(n) {
                for (var r = !1, t = 0; t < n.length; t++) {
                    var u = n[t];
                    if (u.H()) r = !0;
                    else break
                }
                i(r)
            })
        })
    },
    b: function(n, t, i, r) {
        var u = this;
        this.a.a(function(u) {
            u.a(n, t, function(t) {
                if (t.length > 0)
                    for (var u = 0; u < t.length; u++) {
                        var f = t[u];
                        f.w(i, r)
                    } else r(Error.create(String.format("Response processor for {0} not found", n.request.methodName)))
            })
        })
    }
};
_g.fb = function() {};
_g.fb.prototype = {
    a: function(n, t) {
        var r = n;
        var i = t;
        return r === i || r.Id === i.Id && r.ChangeKey === i.ChangeKey && r.RootItemId === i.RootItemId && r.RootItemChangeKey === i.RootItemChangeKey && r.InstanceIndex === i.InstanceIndex && r.RecurringMasterId === i.RecurringMasterId && r.OccurrenceId === i.OccurrenceId && (!r.__type || !i.__type || r.__type === i.__type)
    },
    b: function(n) {
        var t = n;
        return t.Id || t.RootItemId || t.RecurringMasterId || t.OccurrenceId
    }
};
_g.km = function() {};
_g.km.prototype = {
    a: function(n, t) {
        var r = n;
        var i = t;
        return r === i || r.Id === i.Id && r.RootItemId === i.RootItemId && r.InstanceIndex === i.InstanceIndex && r.RecurringMasterId === i.RecurringMasterId && r.OccurrenceId === i.OccurrenceId
    },
    b: function(n) {
        var t = n;
        return t.Id || t.RootItemId || t.RecurringMasterId || t.OccurrenceId
    }
};
_g.fc = function(n, t, i, r) {
    this.e = n;
    this.c = t;
    this.d = i;
    this.b = r
};
_g.fc.a = function(n, t, i, r, u) {
    var s = n();
    if (s.length > 0) {
        i.append(u);
        i.append(r);
        i.append(u);
        for (var o = s, l = o.length, f = 0; f < l; ++f) {
            var e = o[f];
            var c = t(e);
            var h = String.format("{0} : {1}", e, c.c());
            i.append(h);
            i.append(u)
        }
    }
};
_g.fc.prototype = {
    e: "Exchange2007",
    c: null,
    d: null,
    b: null,
    a: function(n) {
        var t = new Sys.StringBuilder;
        t.append("Chicago OWA Version: ");
        t.append(this.b.h());
        t.append(n);
        t.append("Utah Sever Version: ");
        t.append(this.b.d().d);
        t.append(n);
        t.append("Client OWS Version: ");
        t.append(this.e);
        t.append(n);
        var u = this.c,
            f = this.c;
        _g.fc.a(u.a || (u.a = Function.createDelegate(u, u.d)), f.b || (f.b = Function.createDelegate(f, f.c)), t, "Feature Versions: ", n);
        var i = this.d,
            r = this.d;
        _g.fc.a(i.a || (i.a = Function.createDelegate(i, i.d)), r.b || (r.b = Function.createDelegate(r, r.c)), t, "Mailbox Versions: ", n);
        return t.toString()
    }
};
_g.gT = function() {};
_g.gT.$$cctor = function() {
    _ff.e.f(_g.iH.a)
};
_g.hI = function() {};
_g.hI.registerInterface("_g.hI");
_g.hK = function() {};
_g.hK.registerInterface("_g.hK");
_g.kZ = function() {};
_g.kZ.registerInterface("_g.kZ");
_g.kX = function() {};
_g.kX.registerInterface("_g.kX");
_g.hG = function() {};
_g.hG.registerInterface("_g.hG");
_g.ff = function() {};
_g.ff.registerInterface("_g.ff");
_g.hH = function() {};
_g.hH.registerInterface("_g.hH");
_g.ch = function() {};
_g.ch.registerInterface("_g.ch");
_g.hL = function() {};
_g.hL.prototype = {
    unknown: 0,
    email: 1,
    task: 2,
    meetingMessage: 3,
    contact: 4,
    calendarItem: 5,
    meetingRecurrenceException: 6,
    ndr: 7
};
_g.hL.registerEnum("_g.hL", !1);
_g.hJ = function() {};
_g.hJ.registerInterface("_g.hJ");
_g.kW = function() {};
_g.kW.registerInterface("_g.kW");
_g.x = function() {};
_g.x.registerInterface("_g.x");
_g.ko = function() {};
_g.ko.prototype = {
    unsupported: 0,
    emailMessage: 1,
    appointment: 2,
    contact: 3,
    task: 4,
    postItem: 5,
    distributionList: 6
};
_g.ko.registerEnum("_g.ko", !1);
_g.kq = function() {};
_g.kq.prototype = {
    undefined: 0,
    plainTextBody: 1,
    rtfCompressedBody: 2,
    htmlBody: 3,
    clearSignedBody: 4
};
_g.kq.registerEnum("_g.kq", !1);
_g.fg = function() {};
_g.fg.registerInterface("_g.fg");
_g.ld = function() {};
_g.ld.prototype = {
    Ascending: 0,
    Descending: 1
};
_g.ld.registerEnum("_g.ld", !1);
_g.ResponseActions = function() {};
_g.ResponseActions.prototype = {
    none: 0,
    acceptItem: 1,
    tentativelyAcceptItem: 2,
    declineItem: 4,
    replyToItem: 8,
    replyAllToItem: 16,
    forwardItem: 32,
    cancelCalendarItem: 64,
    removeItem: 128,
    suppressReadReceipt: 256,
    postReplyItem: 512,
    acceptSharingInvitation: 1024,
    addItemToMyCalendar: 2048,
    proposeNewTime: 4096
};
_g.ResponseActions.registerEnum("_g.ResponseActions", !0);
_g.kp = function() {};
_g.kp.prototype = {
    open: 0,
    votingOptionMin: 1,
    votingOptionMax: 31,
    first: 100,
    replyToSender: 102,
    replyToAll: 103,
    forward: 104,
    replyToFolder: 108
};
_g.kp.registerEnum("_g.kp", !1);
_g.kY = function() {};
_g.kY.registerInterface("_g.kY");
_g.bH = function() {};
_g.bH.registerInterface("_g.bH");
_g.kn = function() {};
_g.kn.prototype = {
    conversationView: 1,
    dateView: 2,
    dateViewOnly: 3,
    itemGroupView: 4,
    bundledView: 5
};
_g.kn.registerEnum("_g.kn", !1);
_g.cg = function() {};
_g.cg.registerInterface("_g.cg");
_g.IReadingPaneOptions = function() {};
_g.IReadingPaneOptions.registerInterface("_g.IReadingPaneOptions");
_g.lb = function() {};
_g.lb.registerInterface("_g.lb");
_g.h = function() {};
_g.h.registerInterface("_g.h");
_g.lc = function() {};
_g.lc.registerInterface("_g.lc");
_g.K = function() {
    this.cA = {};
    _g.K.initializeBase(this)
};
_g.K.a = function(n, t) {
    return n ? n.cb(t) : !t
};
_g.K.g = function(n, t, i, r) {
    return !t && r[n] !== undefined ? !0 : t !== i
};
_g.K.c = function(n, t, i, r) {
    if (!i[t]) {
        i[t] = n(r);
        return
    }
    i[t].l(r)
};
_g.K.d = function(n, t, i, r) {
    i[t] = _a.d.b(r)
};
_g.K.e = function(n) {
    return n.i()
};
_g.K.f = function(n) {
    return _a.d.f(n)
};
_g.K.prototype = {
    bH: null,
    gw: !1,
    eA: function(n) {
        if (this.bH && n && this.bH.ClientProperties && !n.ClientProperties) {
            var t = this.bH.ClientProperties;
            this.bH = n;
            this.bH.ClientProperties = t
        } else this.bH = n;
        return n
    },
    fl: function() {
        this.bH || (this.bH = new _ff.e);
        this.bH.ClientProperties || (this.bH.ClientProperties = new _ff.e);
        return this.bH.ClientProperties
    },
    iR: function() {
        if (!_g.K.b) {
            _g.K.b = {};
            _g.K.b.ClientProperties = 1;
            _g.K.b.__type = 1;
            _g.K.b._shape = 1
        }
        return _g.K.b
    },
    cb: function(n) {
        return n ? this === n ? !0 : Object.getType(n).getName() !== Object.getType(this).getName() ? !1 : _ff.e.b(this.bH, n.bH) : !1
    },
    fa: function(n) {
        throw Error.invalidOperation("Not valid to call SetValues on a Generated model, use the appropriate Update method instead " + Object.getType(this).getName());
    },
    fo: function() {
        throw Error.invalidOperation("Not valid to call GetValues on a Generated model, use the appropriate JSON property getter instead " + Object.getType(this).getName());
    },
    eK: function(n, t) {
        throw Error.invalidOperation("Not valid to call SetValue on a Generated model, use the appropriate property setter instead " + Object.getType(this).getName());
    },
    eM: function(n) {
        throw Error.invalidOperation("Not valid to call GetValue on a Generated model, use the appropriate property getter instead " + Object.getType(this).getName());
    },
    iS: function() {
        var n = _ff.e.a(this.bH);
        delete n.ClientProperties;
        return n
    },
    l: function(n) {
        this.fn(n);
        this.bJ(n);
        this.dR()
    },
    i: function() {
        return this.bH
    },
    fn: function(n) {},
    dR: function() {},
    bL: function(n, t) {
        if ((this.hr > 0 || this.gw) && t !== this.bH) return !1;
        if (!n) {
            this.eA(t);
            return !0
        }
        var u = t._shape;
        var r = this.bH ? this.bH._shape : null;
        if (n && !u) throw Error.invalidOperation("Must set _shape member in JSON before calling Update for this Model because is enabled for 'shapes'");
        if (!this.bH || u === r || !r) {
            this.eA(t);
            return !0
        }
        var s = this.bH;
        var o = t;
        var e = s;
        for (var f in e) {
            var i = {
                key: f,
                value: e[f]
            };
            i.key in o || (o[i.key] = i.value)
        }
        u._shape = r;
        return !1
    },
    bS: function(n, t) {
        this.fH(t, this.cA[t], !0) && (this.cA[t] = _a.n.c(n, this.bH[t], n));
        return this.cA[t]
    },
    bP: function(n, t) {
        this.fH(t, this.cA[t], !0) && (this.cA[t] = new _a.j(this.bH[t]));
        return this.cA[t]
    },
    ca: function(n, t, i) {
        this.fH(i, this.cA[i], !0) && (this.cA[i] = new(_a.fT.$$(n, t))(this.bH[i]));
        return this.cA[i]
    },
    bW: function(n) {
        if (this.fH(n, this.cA[n], !1)) {
            var t = this.bH[n];
            if (_j.h.a(t)) return null;
            this.cA[n] = _a.d.b(this.bH[n])
        }
        return this.cA[n]
    },
    fH: function(n, t, i) {
        if (!t && this.bH[n] !== undefined) {
            i && (this.gw = !0);
            return !0
        }
        return !1
    },
    bQ: function(n, t) {
        return this.bH[n] === undefined ? t : this.bH[n]
    },
    bI: function(n, t) {
        if (this.bH[n] !== t) {
            this.bH[n] = t;
            this.eJ(n)
        }
    },
    bO: function(n, t) {
        this.iT(n, t) && this.eJ(n)
    },
    iT: function(n, t) {
        return this.gx(n, t, _g.K.e)
    },
    cm: function(n, t) {
        this.hn(n, t) && this.eJ(n)
    },
    hn: function(n, t) {
        return this.gx(n, t, _g.K.f)
    },
    bN: function(n, t) {
        this.hm(n, t, n);
        this.hm(this.bH, t, n)
    },
    hm: function(n, t, i) {
        var u = n;
        for (var f in u) {
            var r = {
                key: f,
                value: u[f]
            };
            Function.isInstanceOfType(r.value) || r.key in t || r.key in this.iR() || this.bI(r.key, i[r.key])
        }
    },
    ei: function(n, t, i) {
        return this.gy(n, t, i, _g.K.c)
    },
    bK: function(n, t, i, r) {
        this.ho(n, t, i, r, _g.K.c)
    },
    iU: function(n, t) {
        return this.gy(null, n, t, _g.K.d)
    },
    cg: function(n, t, i) {
        this.ho(null, n, t, i, _g.K.d)
    },
    ho: function(n, t, i, r, u) {
        for (var f = 0; f < t.length; ++f) {
            r && (r[t[f]] = 1);
            this.gy(n, t[f], i[t[f]], u) && this.eJ(t[f])
        }
    },
    bM: function(n) {
        n.ClientProperties && this.by(n.ClientProperties)
    },
    bR: function() {
        this.l(this.bH)
    },
    gx: function(n, t, i) {
        var r = this.bH;
        if (_g.K.g(n, this.cA[n], t, r)) {
            if (t) {
                r[n] = i(t);
                this.cA[n] = t
            } else {
                delete r[n];
                this.cA[n] = null
            }
            return !0
        }
        return !1
    },
    gy: function(n, t, i, r) {
        var u = this.bH;
        if (!i) {
            if (!u[t]) return !1;
            i === undefined ? delete u[t] : u[t] = null;
            this.cA[t] = null;
            return !0
        }
        if (!this.wI(t) && (!this.cA[t] || _a.d.isInstanceOfType(this.cA[t]))) {
            u[t] = i;
            this.cA[t] = null;
            return !1
        }
        r(n, t, this.cA, i);
        u[t] = i;
        return !0
    }
};
_g.Attachment = function(n) {
    _g.Attachment.initializeBase(this);
    n || (n = new _g.bq);
    this.d(n);
    _a.s.a(this, "_Attachment")
};
_g.Attachment.$$cctor = function() {
    _a.n.a(_g.Attachment, _g.bq, _g.Attachment._C)
};
_g.Attachment.a = function(n) {
    return _a.n.c(_g.Attachment, n)
};
_g.Attachment._C = function(n) {
    return new _g.Attachment(n)
};
_g.Attachment.prototype = {
    t: null,
    p: !1,
    L: function() {
        !this.t && this.bH.DateTimeReceived && (this.t = _a.d.b(this.bH.DateTimeReceived));
        return this.t
    },
    N: function(n) {
        if (this.t !== n) {
            this.t = n;
            this.eJ("DateTimeReceived")
        }
        return n
    },
    O: function(n) {
        if (this.bH.IsSmimeDecoded !== n) {
            this.bH.IsSmimeDecoded = n;
            this.eJ("IsSmimeDecoded")
        }
        return n
    },
    z: !1,
    q: function(n) {
        if (this.bH.TemporaryId !== n) {
            this.bH.TemporaryId = n;
            this.eJ("TemporaryId")
        }
        return n
    },
    u: !1,
    n: function() {
        var n = this.bH.AttachmentId || this.bH.TemporaryId;
        return !!n && !!n.Id && n.Id.startsWith("smime-")
    },
    M: function(n) {
        var t;
        t = this.bH.Name === "smime.p7m" || !!this.bH.Name && this.bH.Name.endsWith(".p7m") && !!this.bH.ContentType && (this.bH.ContentType.startsWith("application/x-pkcs7-mime") || this.bH.ContentType.startsWith("application/pkcs7-mime")) || _a.m.g() && n === "IPM.Note.SMIME.MultipartSigned";
        this.p = t
    },
    r: function() {
        throw Error.invalidOperation("This should be overridden in derived classes.");
    },
    v: function() {
        var n = this.w();
        n.ContentId = this.bH.ContentId;
        n.ContentLocation = this.bH.ContentLocation;
        n.ContentType = this.bH.ContentType;
        n.IsInline = this.a();
        n.Name = this.bH.Name;
        n.Size = this.b();
        n.AttachmentId = this.bH.AttachmentId;
        return n
    },
    w: function() {
        throw Error.invalidOperation("This should be overridden in derived classed.");
    },
    g: function(n) {
        this.bI("AttachmentId", n);
        return n
    },
    e: function(n) {
        this.bI("Name", n);
        return n
    },
    j: function(n) {
        this.bI("ContentType", n);
        return n
    },
    m: function(n) {
        this.bI("ContentId", n);
        return n
    },
    H: function(n) {
        this.bI("AttachmentOriginalUrl", n);
        return n
    },
    b: function() {
        return this.bH.Size || 0
    },
    f: function(n) {
        this.bI("Size", n);
        return n
    },
    o: function() {
        return this.bW("LastModifiedTime")
    },
    a: function() {
        return this.bH.IsInline ? !0 : !1
    },
    h: function(n) {
        this.bI("IsInline", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.x(n)
    },
    x: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.cg(["LastModifiedTime"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.y = function(n) {
    this.h = Function.createDelegate(this, this.m);
    _g.y.initializeBase(this);
    n || (n = new _g.t);
    this.d(n);
    _a.s.a(this, "_Body")
};
_g.y.$$cctor = function() {
    _a.n.a(_g.y, _g.t, _g.y._C)
};
_g.y._C = function(n) {
    return new _g.y(n)
};
_g.y.prototype = {
    g: !1,
    fr: function() {
        return this.g
    },
    fI: function() {
        this.g = !1
    },
    _Body: function() {
        this.J(this.h)
    },
    m: function(n, t) {
        this.g = !0
    },
    a: function() {
        return this.bQ("BodyType", "Text")
    },
    c: function(n) {
        this.bI("BodyType", n);
        return n
    },
    b: function(n) {
        this.bI("Value", n);
        return n
    },
    n: function(n) {
        this.bI("IsTruncated", n);
        return n
    },
    f: function() {
        return this.bH.DataUriCount || 0
    },
    k: function(n) {
        this.bI("DataUriCount", n);
        return n
    },
    e: function() {
        return this.bH.CustomDataUriCount || 0
    },
    j: function(n) {
        this.bI("CustomDataUriCount", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.o(n)
    },
    o: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["BodyFragmentInformation"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.bF = function(n) {
    _g.bF.initializeBase(this);
    n || (n = new _g.cI);
    this.d(n);
    _a.s.a(this, "_Flag")
};
_g.bF.$$cctor = function() {
    _a.n.a(_g.bF, _g.cI, _g.bF._C)
};
_g.bF.a = function(n, t) {
    var i = new _g.bF;
    var r = _a.d.a();
    switch (n) {
        case "ClearFlag":
            i.f("NotFlagged");
            break;
        case "MarkComplete":
            i.f("Complete");
            i.k(r);
            break;
        case "Today":
            i.f("Flagged");
            i.h(r);
            i.g(i.c());
            break;
        case "Tomorrow":
            i.f("Flagged");
            i.h(r.c(1));
            i.g(i.c());
            break;
        case "ThisWeek":
            i.f("Flagged");
            i.n(t);
            break;
        case "NextWeek":
            i.f("Flagged");
            i.m(t);
            break;
        case "SpecificDate":
        case "DateAndReminder":
        case "NoDate":
            i.f("Flagged");
            break
    }
    return i
};
_g.bF.b = function(n, t) {
    var i;
    var u = _a.H.j(n, t.bH.WeekStartDay);
    var f = 7 - u;
    i = n.c(f);
    for (var r = 0; r < 7 && !_a.H.h(i, t.w().bH.WorkDays); ++r) i = i.c(1);
    return i
};
_g.bF._C = function(n) {
    return new _g.bF(n)
};
_g.bF.prototype = {
    j: function() {
        var n = new _g.cI;
        n.FlagStatus = this.a();
        n.StartDate = this.c() ? this.c().i() : null;
        n.DueDate = this.b() ? this.b().i() : null;
        n.CompleteDate = this.e() ? this.e().i() : null;
        return n
    },
    n: function(n) {
        var t;
        var i;
        var u = _a.d.a();
        var e = _a.H.j(u, n.bH.WeekStartDay);
        var r = 7 - e;
        var f = 2;
        0 < r && r <= 2 && (f = r - 1);
        t = u.c(f);
        while (u.a(t) < 0 && !_a.H.h(t, n.w().bH.WorkDays)) t = t.c(-1);
        i = u.c(r - 1);
        while (t.a(i) < 0 && !_a.H.h(i, n.w().bH.WorkDays)) i = i.c(-1);
        this.h(t);
        this.g(i)
    },
    m: function(n) {
        var i = _g.bF.b(_a.d.a(), n);
        var r = 7 - _a.H.j(i, n.bH.WeekStartDay);
        r === 7 && (r = 6);
        for (var t = i.c(r); i.a(t) < 0 && !_a.H.h(t, n.w().bH.WorkDays);) t = t.c(-1);
        this.h(i);
        this.g(t)
    },
    a: function() {
        return this.bQ("FlagStatus", "NotFlagged")
    },
    f: function(n) {
        this.bI("FlagStatus", n);
        return n
    },
    c: function() {
        return this.bW("StartDate")
    },
    h: function(n) {
        this.cm("StartDate", n);
        return n
    },
    b: function() {
        return this.bW("DueDate")
    },
    g: function(n) {
        this.cm("DueDate", n);
        return n
    },
    e: function() {
        return this.bW("CompleteDate")
    },
    k: function(n) {
        this.cm("CompleteDate", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.o(n)
    },
    o: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.cg(["StartDate", "DueDate", "CompleteDate"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.cf = function(n) {
    _g.cf.initializeBase(this);
    n || (n = new _g.cX);
    this.d(n);
    _a.s.a(this, "_HighlightTerm")
};
_g.cf.$$cctor = function() {
    _a.n.a(_g.cf, _g.cX, _g.cf._C)
};
_g.cf.a = function(n, t) {
    var u = 0;
    var f = 0;
    var i = n;
    var r = t;
    i && i.bH.Value && (u = i.bH.Value.length);
    r && r.bH.Value && (f = r.bH.Value.length);
    return f - u
};
_g.cf._C = function(n) {
    return new _g.cf(n)
};
_g.cf.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.a(n)
    },
    a: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.bG = function() {};
_g.f = function(n) {
    this.cq = new _a.j;
    this.u = this.k;
    this.C = this.cb;
    this.V = this.S;
    this.s = this.G;
    _g.f.initializeBase(this);
    n || (n = new _g.M);
    this.d(n);
    _a.s.a(this, "_Item")
};
_g.f.$$cctor = function() {
    _a.n.b(_g.f, _g.M, _g.f._C, "Item:#Exchange")
};
_g.f.E = function() {
    if (!_g.f.b) {
        _g.f.b = {};
        _g.f.b[_g.ResponseActions.toString(0)] = null;
        _g.f.b[_g.ResponseActions.toString(1)] = new _g.bh(new _g.cS);
        _g.f.b[_g.ResponseActions.toString(2)] = new _g.bh(new _g.dg);
        _g.f.b[_g.ResponseActions.toString(4)] = new _g.bh(new _g.cV);
        _g.f.b[_g.ResponseActions.toString(8)] = new _g.bh(new _g.bQ);
        _g.f.b[_g.ResponseActions.toString(16)] = new _g.bh(new _g.bw);
        _g.f.b[_g.ResponseActions.toString(32)] = new _g.bh(new _g.bL);
        _g.f.b[_g.ResponseActions.toString(64)] = new _g.bh(new _g.ei);
        _g.f.b[_g.ResponseActions.toString(128)] = new _g.bh(new _g.de);
        _g.f.b[_g.ResponseActions.toString(256)] = new _g.bh(new _g.gD);
        _g.f.b[_g.ResponseActions.toString(512)] = new _g.bh(new _g.eK);
        _g.f.b[_g.ResponseActions.toString(1024)] = new _g.bh(new _g.fj);
        _g.f.b[_g.ResponseActions.toString(2048)] = new _g.bh(new _g.fk);
        _g.f.b[_g.ResponseActions.toString(4096)] = new _g.bh(new _g.gv)
    }
    return _g.f.b
};
_g.f.a = function(n) {
    if (_g.f.A(n.ItemClass, !1)) return new _g.cj(n);
    else if (_g.f.v(n.ItemClass) || _g.f.w(n.ItemClass) || _g.f.J(n.ItemClass)) return _a.n.c(_g.i, n, _g.i);
    return _a.n.c(_g.f, n, _g.f)
};
_g.f.j = function(n, t) {
    if (!n && !t) return !1;
    if (!n || !t || n.b() !== t.b()) return !0;
    for (var i = 0; i < n.b(); i++) {
        if (!String.isInstanceOfType(n.a(i)) || !String.isInstanceOfType(t.a(i))) return !0;
        var u = n.a(i);
        var r = t.a(i);
        if (u !== r) return !0
    }
    return !1
};
_g.f.o = function(n) {
    var t = null;
    var i = n.ItemClass;
    i || (i = "");
    if (_g.f.v(i)) {
        t = new _g.bZ;
        t.Sender = new _g.R;
        t.Sender.Mailbox = new _g.g;
        t.Sender.Mailbox.Name = n.Sender;
        t.From = t.Sender
    } else if (_g.f.w(i)) {
        t = new _g.cq;
        t.Sender = new _g.R;
        t.Sender.Mailbox = new _g.g;
        t.Sender.Mailbox.Name = n.Sender;
        t.From = t.Sender
    } else if (_g.f.x(i)) {
        t = new _g.dc;
        t.Sender = new _g.R;
        t.Sender.Mailbox = new _g.g;
        t.Sender.Mailbox.Name = n.Sender;
        t.From = t.Sender
    } else if (_g.f.l(i)) t = new _g.z;
    else if (_g.f.t(i)) t = new _g.dw;
    else if (_g.f.z(i)) t = new _g.bR;
    else if (_g.f.u(i)) t = new _g.dy;
    else {
        t = new _g.J;
        if (n.Sender) {
            t.Sender = new _g.R;
            t.Sender.Mailbox = new _g.g;
            t.Sender.Mailbox.Name = n.Sender;
            t.From = t.Sender
        }
    }
    t.ItemId = n.Id;
    t.ItemClass = i;
    t.DateTimeSent = n.SentTime;
    t.DateTimeReceived = n.ReceivedTime;
    t.HasAttachments = n.HasAttachment;
    t.Importance = n.Importance;
    t.Preview = n.Preview;
    t.Subject = n.Subject;
    t.Size = n.Size;
    return _g.f.a(t)
};
_g.f.I = function(n) {
    return n === "IPM.CoOrganizer.Request"
};
_g.f.x = function(n) {
    return n.startsWith("IPM.Post") ? !0 : !1
};
_g.f.r = function(n) {
    return n.bH.ItemClass === "IPM.Sharing"
};
_g.f.H = function(n) {
    return _g.f.I(n.bH.ItemClass)
};
_g.f.f = function(n) {
    return n.bH.ItemClass === "IPM.GroupMailbox.JoinRequest"
};
_g.f.h = function(n) {
    return n.bH.ItemClass === "IPM.GroupMailbox.AddMemberRequest"
};
_g.f.s = function(n) {
    return _j.h.a(n) ? !1 : n.startsWith("IPM.Note.ConnectorMessage")
};
_g.f.q = function(n) {
    return n === "IPM.Note.ConnectorMessage.Bot"
};
_g.f.k = function(n) {
    var t = _g.b.a;
    switch (n) {
        case 2:
            return t.nameToId("calendar");
        case 3:
        case 6:
            return t.nameToId("contacts");
        case 1:
        case 5:
            return t.nameToId("inbox");
        case 4:
            return t.nameToId("tasks");
        default:
            return t.nameToId("inbox")
    }
};
_g.f.F = function(n) {
    return _g.f.z(n) ? 4 : _g.f.x(n) ? 5 : _g.f.l(n) ? 2 : _g.f.t(n) ? 3 : _g.f.u(n) ? 6 : 1
};
_g.f.A = function(n, t) {
    if (_g.a.a().c().bH.IsUMEnabled || t) switch (n) {
        case "IPM.Note.Microsoft.Missed.Voice":
        case "IPM.Note.Microsoft.Fax.CA":
            return !0;
        default:
            return _g.f.B(n)
    } else return !1
};
_g.f.B = function(n) {
    switch (n) {
        case "IPM.Note.Microsoft.Voicemail.UM.CA":
        case "IPM.Note.Microsoft.Voicemail.UM":
        case "IPM.Note.Microsoft.Voicemail":
            return !0;
        default:
            return _g.f.m(n)
    }
};
_g.f.G = function(n) {
    return n && n.toLowerCase().startsWith("ipm.note.microsoft.approval.request") ? !0 : !1
};
_g.f.m = function(n) {
    switch (n) {
        case "IPM.Note.rpmsg.Microsoft.Voicemail.UM.CA":
        case "IPM.Note.rpmsg.Microsoft.Voicemail.UM":
            return !0;
        default:
            return !1
    }
};
_g.f.p = function(n) {
    return n && n.toLowerCase().startsWith("IPM.Note.Reminder.Event.Booking".toLowerCase()) ? !0 : !1
};
_g.f.y = function(n) {
    return n && n.toLowerCase().startsWith("IPM.Note.Reminder.Event.2".toLowerCase()) ? !0 : !1
};
_g.f.d = function(n) {
    var t = n.em();
    if (0 === t) {
        var i = _g.bx.isInstanceOfType(n) ? n.f() : n.X();
        t = i && i.a() === "Text" ? 1 : 3
    }
    return t
};
_g.f.g = function(n) {
    n = n.o();
    return _a.d.h(n, _g.f.c) || n.a(_g.f.i) >= 0 && n.a(_g.f.D) <= 0
};
_g.f.e = function(n) {
    var i = n;
    if (n.gd) {
        var t = _a.n.m(n.bH.__type);
        t && Object.getType(n) !== t && (i = _a.n.c(_g.f, n.iS(), _g.f))
    }
    return i
};
_g.f.l = function(n) {
    return !!n && n.startsWith("IPM.Appointment")
};
_g.f.v = function(n) {
    return !!n && n.startsWith(_g.f.n)
};
_g.f.w = function(n) {
    return !!n && n.startsWith("IPM.Schedule.Meeting.Resp")
};
_g.f.J = function(n) {
    return !!n && n.startsWith("IPM.Schedule.Meeting.Canceled")
};
_g.f.t = function(n) {
    return n.startsWith("IPM.Contact")
};
_g.f.z = function(n) {
    return n.startsWith("IPM.Task")
};
_g.f.u = function(n) {
    return n.startsWith("IPM.DistList")
};
_g.f.C = function(n, t) {
    var i = n;
    i.hp()
};
_g.f._C = function(n) {
    return new _g.f(n)
};
_g.f.prototype = {
    dh: !1,
    cP: null,
    fz: null,
    dJ: 0,
    fy: !1,
    fV: function(n) {
        this.cP !== n && (this.cP = n);
        return n
    },
    eH: function() {
        return this.bi() ? this.bi().f : null
    },
    ft: function() {
        return this.bZ().DocumentId
    },
    hJ: function(n) {
        if (this.bZ().DocumentId !== n) {
            this.bZ().DocumentId = n;
            this.eJ("DocumentId")
        }
        return n
    },
    df: function() {
        return this.bZ().NormalizedSubject || null
    },
    hR: function(n) {
        if (this.bZ().NormalizedSubject !== n) {
            this.bZ().NormalizedSubject = n;
            this.eJ("NormalizedSubject")
        }
        return n
    },
    hs: function() {
        return this.bH.MentionedMe || this.bH.AtAllMention
    },
    p: function() {
        return this.bH.ItemId.Id
    },
    bU: function() {
        return this.bZ().ItemCategory
    },
    eq: function(n) {
        this.bZ().ItemCategory = n;
        return n
    },
    ek: function() {
        return this.bZ().IsClassified ? !0 : !1
    },
    fW: function(n) {
        if (this.bZ().IsClassified !== n) {
            this.bZ().IsClassified = n;
            this.eJ("IsClassified")
        }
        return n
    },
    fs: function() {
        return this.bZ().ClassificationGuid || null
    },
    fU: function(n) {
        if (this.bZ().ClassificationGuid !== n) {
            this.bZ().ClassificationGuid = n;
            this.eJ("ClassificationGuid")
        }
        return n
    },
    dU: function() {
        return this.bZ().DlpSenderOverride
    },
    hI: function(n) {
        if (this.dU() !== n) {
            this.bZ().DlpSenderOverride = n;
            this.eJ("DlpSenderOverride")
        }
        return n
    },
    dK: function() {
        return this.bZ().DlpFalsePositive
    },
    hH: function(n) {
        if (this.dK() !== n) {
            this.bZ().DlpFalsePositive = n;
            this.eJ("DlpFalsePositive")
        }
        return n
    },
    ej: function() {
        return this.bZ().DlpDetectedClassification
    },
    hG: function(n) {
        if (this.ej() !== n) {
            this.bZ().DlpDetectedClassification = n;
            this.eJ("DlpDetectedClassification")
        }
        return n
    },
    fp: function() {
        return this.bZ().Classification || null
    },
    fR: function(n) {
        if (this.bZ().Classification !== n) {
            this.bZ().Classification = n;
            this.eJ("Classification")
        }
        return n
    },
    fq: function() {
        return this.bZ().ClassificationDescription || null
    },
    fT: function(n) {
        if (this.bZ().ClassificationDescription !== n) {
            this.bZ().ClassificationDescription = n;
            this.eJ("ClassificationDescription")
        }
        return n
    },
    iZ: function() {
        return this.bZ().ClassificationKeep ? !0 : !1
    },
    gG: function(n) {
        if (this.bZ().ClassificationKeep !== n) {
            this.bZ().ClassificationKeep = n;
            this.eJ("ClassificationKeep")
        }
        return n
    },
    jd: function() {
        return !!this.bT() && this.bT().b() > 0 || this.je()
    },
    je: function() {
        if (!this.cE()) return !1;
        for (var t = this.cE().e(), n = 0; n < t.length; n++) {
            var i = _g.A.d(t[n]);
            if (i) return !0
        }
        return !1
    },
    jh: function() {
        return this.bZ().MessageBccMe ? !0 : !1
    },
    hQ: function(n) {
        if (this.bZ().MessageBccMe !== n) {
            this.bZ().MessageBccMe = n;
            this.eJ("MessageBccMe")
        }
        return n
    },
    jk: function() {
        return this.bZ().SharingInstanceGuid ? this.bZ().SharingInstanceGuid : null
    },
    hV: function(n) {
        if (this.bZ().SharingInstanceGuid !== n) {
            this.bZ().SharingInstanceGuid = n;
            this.eJ("SharingInstanceGuid")
        }
        return n
    },
    em: function() {
        return this.bZ().NativeBodyInfo === undefined ? 0 : this.bZ().NativeBodyInfo
    },
    gM: function(n) {
        if (this.bZ().NativeBodyInfo !== n) {
            this.bZ().NativeBodyInfo = n;
            this.eJ("NativeBodyInfo")
        }
        return n
    },
    fw: function() {
        return this.bZ().IsEmbeddedAttachmentItem
    },
    gL: function(n) {
        this.bZ().IsEmbeddedAttachmentItem = n;
        return n
    },
    w: function() {
        return this.fy
    },
    hN: function(n) {
        this.fy = n;
        this.eJ("IsPinned");
        return n
    },
    jf: function() {
        return !!this.dM() && _g.f.g(this.dM())
    },
    gC: !1,
    bZ: function() {
        return this.fl()
    },
    k: function() {
        return this.bH.ItemId.Id
    },
    r: function() {
        return this.cr()
    },
    bd: function() {
        return this.dM()
    },
    be: function() {
        return this.bH.DateTimeReceived
    },
    M: function() {
        return this.bX() ? this.bX().a() : "NotFlagged"
    },
    bf: function() {
        return 1
    },
    j: function() {
        return !this.cL()
    },
    W: function() {
        return this.bH.ItemId
    },
    bD: function() {
        return this.df() || this.bH.Subject || ""
    },
    bB: function() {
        return this.bH.Preview || ""
    },
    eR: function(n) {
        return !!this.cE() && this.cE().j(n)
    },
    _Item: function() {
        _g.f.l(this.bH.ItemClass) ? this.eq(2) : this.eq(0);
        _j.u.a(this.bH.Importance) && (this.bH.Importance = "Normal");
        this.apcl("ExtendedProperty", _g.f.C);
        this.hp();
        this.gB()
    },
    bE: function() {
        return _g.f.k(this.bU())
    },
    U: function() {
        return this.fz
    },
    bF: function(n) {
        this.fz = n;
        return n
    },
    bh: function(n) {
        this.dJ = n;
        this.eJ("ExtractedActionState");
        return n
    },
    dj: function() {
        return !1
    },
    cL: function() {
        return !0
    },
    hw: function() {
        return null
    },
    hx: function() {
        return 0
    },
    jc: function() {
        return _g.b.a.idToName(this.bH.ParentFolderId) === "sentitems" ? this.cK() : this.cr()
    },
    jb: function() {
        return this.bH.DateTimeReceived
    },
    el: function() {
        return !!this.bY()
    },
    jg: function() {
        if (this.bV()) {
            var n = _g.c.a(this.bV().e(), _g.c.bw());
            if (n) return n.e()
        }
        return null
    },
    fJ: function() {
        return this.eF(_g.c.q(), !1)
    },
    hD: function(n) {
        this.eV(_g.c.q(), "EntityExtraction/Highlights", n);
        return n
    },
    eB: function() {
        return this.eF(_g.c.bh(), !1)
    },
    hE: function(n) {
        this.eV(_g.c.bh(), "EntityExtraction/Highlights_Delayed", n);
        return n
    },
    fL: function() {
        return this.eF(_g.c.bj(), !1)
    },
    jp: function(n) {
        this.eV(_g.c.bj(), "EntityExtraction/HighlightsTypes", n);
        return n
    },
    fK: function() {
        return this.eF(_g.c.bi(), !1)
    },
    jo: function(n) {
        this.eV(_g.c.bi(), "EntityExtraction/HighlightsTypes_Delayed", n);
        return n
    },
    eE: function() {
        return this.eF(_g.c.bp(), !1)
    },
    jG: function(n) {
        this.eV(_g.c.bp(), "EntityExtraction/SmartReplyForEmail", n);
        return n
    },
    gA: function() {
        return this.eF(_g.c.bo(), !1)
    },
    jE: function(n) {
        this.eV(_g.c.bo(), "EntityExtraction/ReplyWithQueryCoverage", n);
        return n
    },
    cb: function(n) {
        if (_j.E.a(n) || !_g.f.isInstanceOfType(n)) return !1;
        if (!this.bH.ItemId || !n.bH.ItemId) throw Error.invalidOperation("ItemModel not in a valid state.");
        return _ff.e.b(this.bH.ItemId, n.bH.ItemId)
    },
    N: function(n) {
        return this.cb(n) && this.bH.InstanceKey === n.bH.InstanceKey
    },
    cX: function(n) {
        return this.hy(n) >= 0
    },
    dI: function(n) {
        if (!this.cX(n)) {
            var t = _g.f.E()[_g.ResponseActions.toString(n)];
            this.dV() || this.gQ(new(_a.fT.$$(_g.bh, _g.bo)));
            this.dV().c(t);
            this.eJ("ResponseObjects")
        }
    },
    jn: function(n) {
        if (this.cX(n)) {
            var t = this.hy(n);
            this.dV().o(t);
            this.eJ("ResponseObjects")
        }
    },
    du: function(n) {
        this.hq(n);
        this.db(n.ParentFolderId);
        this.hF(n.ConversationId);
        this.cg(["DateTimeReceived", "DateTimeCreated", "DateTimeSent", "LastModifiedTime"], n, null);
        var t = n.ReceivedOrRenewTime || n.DateTimeReceived;
        if (this.iU("ReceivedOrRenewTime", t)) {
            this.eJ("ReceivedOrRenewTime");
            this.ib()
        }
        this.gK(n.IsDraft);
        this.hW(n.Size);
        this.hM(n.IsClutter);
        this.hS(n.Preview);
        this.fP() < n.TailoredXpEntitiesChangeNumber && this.hZ(n.TailoredXpEntitiesChangeNumber);
        var r = this;
        this.bK(function(n) {
            return new _g.bp(n)
        }, ["PolicyTag", "ArchiveTag"], n, null);
        this.js(n.DisplayTo);
        n = this.hB(n);
        var i = this;
        this.bK(function(n) {
            return new(_a.fT.$$(_g.be, _g.T))(n)
        }, ["ExtendedProperty"], n, null);
        this.hL(n.IconIndex)
    },
    ec: function(n, t) {
        switch (n) {
            case "Flag":
                var f = this;
                this.ei(function(n) {
                    return new _g.bF(n)
                }, "Flag", t);
                this.eJ("Flag");
                break;
            case "Categories":
                var e = this;
                this.ei(function(n) {
                    return new _a.j(n)
                }, "Categories", t);
                this.eJ("Categories");
                break;
            case "SystemCategories":
                var o = this;
                this.ei(function(n) {
                    return new _a.j(n)
                }, "SystemCategories", t);
                this.eJ("SystemCategories");
                break;
            case "PolicyTag":
                var i = this;
                this.ei(function(n) {
                    return new _g.bp(n)
                }, "PolicyTag", t);
                this.eJ("PolicyTag");
                break;
            case "ArchiveTag":
                var r = this;
                this.ei(function(n) {
                    return new _g.bp(n)
                }, "ArchiveTag", t);
                this.eJ("ArchiveTag");
                break;
            case "PredictedActionReasons":
                var u = this;
                this.ei(function(n) {
                    return new _a.j(n)
                }, "PredictedActionReasons", t);
                this.eJ("PredictedActionReasons");
                break;
            default:
                break
        }
    },
    dX: function(n) {
        this.cc(n.ItemId);
        this.fX(n.ItemClass);
        this.db(n.ParentFolderId);
        this.cg(["LastModifiedTime", "DateTimeReceived"], n, null);
        var u = this;
        this.bK(function(n) {
            return new _a.j(n)
        }, ["Categories"], n, null);
        var f = this;
        this.bK(function(n) {
            return new _a.j(n)
        }, ["SystemCategories"], n, null);
        var r = this;
        this.bK(function(n) {
            return new _a.j(n)
        }, ["Hashtags"], n, null);
        var t = this;
        this.bK(function(n) {
            return new _a.j(n)
        }, ["PredictedActionReasons"], n, null);
        var i = this;
        this.bK(function(n) {
            return new _g.bF(n)
        }, ["Flag"], n, null);
        this.hW(n.Size);
        this.hM(n.IsClutter);
        this.hL(n.IconIndex);
        n = this.hB(n)
    },
    dY: function(n) {
        this.hq(n)
    },
    hp: function() {
        if (this.bV())
            for (var n = 0, i = this.bV().b(); n < i; n++) {
                var t = this.bV().a(n);
                this.er(t)
            }
    },
    by: function(n) {
        var t = n;
        this.hR(t.NormalizedSubject);
        this.fW(t.IsClassified);
        this.fU(t.ClassificationGuid);
        this.fR(t.Classification);
        this.fT(t.ClassificationDescription);
        this.gG(t.ClassificationKeep);
        this.hQ(t.MessageBccMe);
        this.hV(t.SharingInstanceGuid);
        this.gM(t.NativeBodyInfo);
        this.hJ(t.DocumentId)
    },
    er: function(n) {
        if (n) {
            var i = n.a();
            var u = i.bH.PropertyTag;
            var r = i.c();
            var o = i.bH.PropertyName;
            var e = i.bH.PropertySetId;
            var f = i.a();
            i.dispose();
            var t = n.bH.Value === undefined ? "" : n.bH.Value;
            u === "0x3fd9" ? this.hS(t) : u === "0xe1d" ? this.hR(t) : u === _g.c.bm().PropertyTag ? this.gM(_j.u.b(_g.kq, t)) : u === "0x6815" ? this.hJ(Number.parseInvariant(t)) : "Common" === f ? r === _g.c.S().PropertyId ? this.fW(Boolean.parse(t)) : r === _g.c.O().PropertyId ? this.fU(t) : r === _g.c.M().PropertyId ? this.fR(t) : r === _g.c.N().PropertyId ? this.fT(t) : r === _g.c.bz().PropertyId && this.gG(Boolean.parse(t)) : "Sharing" === f ? r === _g.c.w().PropertyId && this.hV(t) : e && "41F28F13-83F4-4114-A584-EEDB5A6B0BFF" === e.toUpperCase() && o === _g.c.bG().PropertyName && this.hQ(Boolean.parse(t))
        }
    },
    jm: function(n) {
        var t = this;
        this.ei(function(n) {
            return new(_a.fT.$$(_g.be, _g.T))(n)
        }, "ExtendedProperty", n) && this.eJ("ExtendedProperty")
    },
    eL: function() {
        this.rpcl("ExtendedProperty", _g.f.C);
        _a.gd.prototype.eL.call(this)
    },
    fn: function(n) {
        var t = n;
        !t.PredictedActionReasons && this.fO() && (t.PredictedActionReasons = this.fO().e());
        t.ReceivedOrRenewTime || (t.ReceivedOrRenewTime = t.DateTimeReceived);
        _g.K.prototype.fn.call(this, n)
    },
    dR: function() {
        this.ib();
        this.gB();
        _g.K.prototype.dR.call(this)
    },
    hy: function(n) {
        if (this.dV())
            for (var t = 0; t < this.dV().b(); t++)
                if (this.dV().a(t).B().__type.toLowerCase() === (_g.ResponseActions.toString(n) + ":#Exchange").toLowerCase()) return t;
        return -1
    },
    hq: function(n) {
        this.cc(n.ItemId);
        this.dZ(n.InstanceKey);
        this.cW(n.Subject);
        this.ep(n.Importance);
        this.eb(n.Sensitivity);
        this.eo(n.HasAttachments);
        this.fX(n.ItemClass);
        var r = this;
        this.bK(function(n) {
            return new _g.bF(n)
        }, ["Flag"], n, null);
        var u = this;
        this.bK(function(n) {
            return new _a.j(n)
        }, ["Categories"], n, null);
        var t = this;
        this.bK(function(n) {
            return new _a.j(n)
        }, ["SystemCategories"], n, null);
        var i = this;
        this.bK(function(n) {
            return new _a.j(n)
        }, ["PredictedActionReasons"], n, null)
    },
    ib: function() {
        this.hN(this.jf())
    },
    eF: function(n, t) {
        if (this.bV()) {
            var i = _g.c.a(this.bV().e(), n);
            if (i) return t ? i.e() : i.bH.Value
        }
        return null
    },
    iV: function(n) {
        for (var i = n, u = i.length, t = 0; t < u; ++t) {
            var r = i[t];
            if (this.hz(r)) return !0
        }
        return !1
    },
    iW: function(n) {
        for (var i = n, u = i.length, t = 0; t < u; ++t) {
            var r = i[t];
            if (this.hA(r)) return !0
        }
        return !1
    },
    hB: function(n) {
        if (n && n.ExtendedProperty) {
            var o = this.bH.ExtendedProperty;
            var t = n.ExtendedProperty;
            if (o && t) {
                var e = this.iV(t);
                var u = this.iW(t);
                if (!e || !u)
                    for (var f = o, s = f.length, r = 0; r < s; ++r) {
                        var i = f[r];
                        if (this.hz(i) && !e) {
                            t = t.concat(i);
                            n.ExtendedProperty = t
                        }
                        if (this.hA(i) && !u) {
                            t = t.concat(i);
                            n.ExtendedProperty = t
                        }
                    }
            }
        }
        return n
    },
    hz: function(n) {
        return !!n.ExtendedFieldURI && n.ExtendedFieldURI.PropertyName === "ExplicitMessageCard" && n.ExtendedFieldURI.DistinguishedPropertySetId === "Common" && n.ExtendedFieldURI.PropertyType === "String"
    },
    hA: function(n) {
        return !!n.ExtendedFieldURI && n.ExtendedFieldURI.PropertyName === "ShowContextualSuggestion" && n.ExtendedFieldURI.DistinguishedPropertySetId === "Common" && n.ExtendedFieldURI.PropertyType === "Boolean"
    },
    iX: function(n) {
        var t = new _g.be;
        var i = _g.c.b(n, "Common", "String");
        t.c(new _g.bW(i));
        return t
    },
    eV: function(n, t, i) {
        if (this.bV()) {
            var u = _g.c.a(this.bV().e(), n);
            if (u) u.b(i);
            else {
                var r = this.iX(t);
                r.b(i);
                this.bV().c(r)
            }
        }
    },
    fZ: null,
    fY: null,
    bC: function() {
        this.bA() && !this.bZ().SmimeType && (this.bZ().SmimeType = this.cZ() ? 11 : -1);
        return this.bZ().SmimeType
    },
    jH: function(n) {
        if (this.bZ().SmimeType !== n) {
            this.bZ().SmimeType = n;
            this.eJ("SmimeType")
        }
        return n
    },
    cR: function() {
        return this.bZ().IsSmimeDecoded || !1
    },
    cS: function() {
        !this.fZ && this.bZ().SmimeNormalizedBody && (this.fZ = new _g.y(this.bZ().SmimeNormalizedBody));
        return this.fZ
    },
    dq: function() {
        !this.fY && this.bZ().SmimeAttachments && (this.fY = new(_a.fT.$$(_g.Attachment, _g.bq))(this.bZ().SmimeAttachments));
        return this.fY
    },
    cF: function() {
        return this.bZ().SmimeSignature
    },
    jj: function() {
        return this.bZ().RawDate
    },
    bA: function() {
        return _a.m.u(this.bH.ItemClass)
    },
    hu: function() {
        return _a.m.P(this.bH.ItemClass)
    },
    cZ: function() {
        return _a.m.H(this.bH.ItemClass)
    },
    gz: function() {
        return _a.m.u(this.bH.ItemClass) && !this.eD() && !_a.m.g()
    },
    eD: function() {
        return this.bi() && this.bi().b() > 0 ? this.bi().a(0).p : !1
    },
    jl: function() {
        return this.cF().ServerVerificationResult
    },
    ht: function() {
        return this.cF() ? this.cF().IsHashMatched && this.cF().IsCertValidToServer : !1
    },
    gB: function() {
        this.bA() && this.bi() && this.bi().b() === 1 && this.bi().a(0).M(this.bH.ItemClass)
    },
    jA: function(n) {
        this.bI("MimeContent", n);
        return n
    },
    jL: function() {
        return this.bH.ItemId
    },
    cc: function(n) {
        this.bI("ItemId", n);
        return n
    },
    jM: function() {
        return this.bH.ParentFolderId
    },
    db: function(n) {
        this.bI("ParentFolderId", n);
        return n
    },
    fX: function(n) {
        this.bI("ItemClass", n);
        return n
    },
    jN: function() {
        return this.bH.Subject
    },
    cW: function(n) {
        this.bI("Subject", n);
        return n
    },
    cp: function() {
        return this.bQ("Sensitivity", "Normal")
    },
    eb: function(n) {
        this.bI("Sensitivity", n);
        return n
    },
    X: function() {
        return this.bS(_g.y, "Body")
    },
    da: function(n) {
        this.bO("Body", n);
        return n
    },
    bi: function() {
        return this.ca(_g.Attachment, _g.bq, "Attachments")
    },
    bp: function(n) {
        this.bO("Attachments", n);
        return n
    },
    cr: function() {
        return this.bW("DateTimeReceived")
    },
    hW: function(n) {
        this.bI("Size", n);
        return n
    },
    bT: function() {
        return this.bP(String, "Categories")
    },
    di: function(n) {
        this.bO("Categories", n);
        return n
    },
    cx: function() {
        return this.bP(String, "Hashtags")
    },
    jx: function(n) {
        this.bO("Hashtags", n);
        return n
    },
    bg: function() {
        return this.bQ("Importance", "Low")
    },
    ep: function(n) {
        this.bI("Importance", n);
        return n
    },
    gJ: function(n) {
        this.bI("InReplyTo", n);
        return n
    },
    hO: function(n) {
        this.bI("IsSubmitted", n);
        return n
    },
    gK: function(n) {
        this.bI("IsDraft", n);
        return n
    },
    jz: function(n) {
        this.bI("IsFromMe", n);
        return n
    },
    jy: function(n) {
        this.bO("InternetMessageHeaders", n);
        return n
    },
    cK: function() {
        return this.bW("DateTimeSent")
    },
    jr: function(n) {
        this.cm("DateTimeSent", n);
        return n
    },
    dT: function() {
        return this.bW("DateTimeCreated")
    },
    dV: function() {
        return this.ca(_g.bh, _g.bo, "ResponseObjects")
    },
    gQ: function(n) {
        this.bO("ResponseObjects", n);
        return n
    },
    fx: function() {
        return this.bW("ReminderDueBy")
    },
    jD: function(n) {
        this.cm("ReminderDueBy", n);
        return n
    },
    ea: function(n) {
        this.bI("ReminderIsSet", n);
        return n
    },
    hU: function(n) {
        this.bI("ReminderMinutesBeforeStart", n);
        return n
    },
    js: function(n) {
        this.bI("DisplayTo", n);
        return n
    },
    bz: function() {
        return this.bH.HasAttachments
    },
    eo: function(n) {
        this.bI("HasAttachments", n);
        return n
    },
    bV: function() {
        return this.ca(_g.be, _g.T, "ExtendedProperty")
    },
    gH: function(n) {
        this.bO("ExtendedProperty", n);
        return n
    },
    ju: function(n) {
        this.bI("EffectiveRights", n);
        return n
    },
    S: function() {
        return this.bW("LastModifiedTime")
    },
    hF: function(n) {
        this.bI("ConversationId", n);
        return n
    },
    cf: function() {
        return this.bS(_g.y, "UniqueBody")
    },
    bX: function() {
        return this.bS(_g.bF, "Flag")
    },
    hK: function(n) {
        this.bO("Flag", n);
        return n
    },
    G: function() {
        return this.bH.InstanceKey
    },
    dZ: function(n) {
        this.bI("InstanceKey", n);
        return n
    },
    ck: function() {
        return this.bS(_g.y, "NormalizedBody")
    },
    jw: function(n) {
        this.bI("EntityExtractionResult", n);
        return n
    },
    cs: function() {
        return this.bS(_g.bp, "PolicyTag")
    },
    gP: function(n) {
        this.bO("PolicyTag", n);
        return n
    },
    cC: function() {
        return this.bS(_g.bp, "ArchiveTag")
    },
    gE: function(n) {
        this.bO("ArchiveTag", n);
        return n
    },
    dW: function() {
        return this.bW("RetentionDate")
    },
    hS: function(n) {
        this.bI("Preview", n);
        return n
    },
    bY: function() {
        return this.bS(_g.cu, "RightsManagementLicenseData")
    },
    jF: function(n) {
        this.bO("RightsManagementLicenseData", n);
        return n
    },
    fO: function() {
        return this.bP(_g.jt, "PredictedActionReasons")
    },
    hM: function(n) {
        this.bI("IsClutter", n);
        return n
    },
    fA: function(n) {
        this.bI("BlockStatus", n);
        return n
    },
    gI: function(n) {
        this.bI("HasBlockedImages", n);
        return n
    },
    fQ: function() {
        return this.bS(_g.y, "TextBody")
    },
    jK: function(n) {
        this.bO("TextBody", n);
        return n
    },
    ja: function() {
        return this.bH.ContainsOnlyMandatoryProperties ? !0 : !1
    },
    fN: function() {
        return this.bQ("IconIndex", "PostItem")
    },
    hL: function(n) {
        this.bI("IconIndex", n);
        return n
    },
    fv: function() {
        return this.bP(_g.hr, "ErrorProperties")
    },
    eC: function() {
        return this.bS(_g.o, "Conversation")
    },
    jq: function(n) {
        this.bO("Conversation", n);
        return n
    },
    dM: function() {
        return this.bW("ReceivedOrRenewTime")
    },
    jC: function(n) {
        this.cm("ReceivedOrRenewTime", n);
        return n
    },
    cE: function() {
        return this.bP(Number, "SystemCategories")
    },
    hX: function(n) {
        this.bO("SystemCategories", n);
        return n
    },
    cl: function() {
        return this.bH.EntityNamesMap || 0
    },
    jv: function(n) {
        this.bI("EntityDocument", n);
        return n
    },
    dL: function() {
        return this.bP(String, "PendingSocialActivityTagIds")
    },
    jB: function(n) {
        this.bO("PendingSocialActivityTagIds", n);
        return n
    },
    cD: function() {
        return this.bP(_g.cx, "MentionsEx")
    },
    hP: function(n) {
        this.bO("MentionsEx", n);
        return n
    },
    cQ: function() {
        return this.bP(_g.ec, "AppliedHashtags")
    },
    gD: function(n) {
        this.bO("AppliedHashtags", n);
        return n
    },
    dS: function() {
        return this.bP(_g.hB, "Apps")
    },
    hC: function(n) {
        this.bO("Apps", n);
        return n
    },
    jJ: function(n) {
        this.bI("TailoredXpEntities", n);
        return n
    },
    gF: function(n) {
        this.bI("AtAllMention", n);
        return n
    },
    fP: function() {
        return this.bH.TailoredXpEntitiesChangeNumber || 0
    },
    hZ: function(n) {
        this.bI("TailoredXpEntitiesChangeNumber", n);
        return n
    },
    jI: function(n) {
        this.bI("SortOrderSource", n);
        return n
    },
    fM: function() {
        return this.bP(_g.eq, "DocLinks")
    },
    jt: function(n) {
        this.bO("DocLinks", n);
        return n
    },
    iY: function() {
        return this.bH.CanDelete ? !0 : !1
    },
    hv: function() {
        return this.bW("LastSmartResponseTime")
    },
    dt: function() {
        return this.bP(String, "QuotedTextList")
    },
    hT: function(n) {
        this.bO("QuotedTextList", n);
        return n
    },
    en: function() {
        return this.bP(String, "UserHighlightData")
    },
    ia: function(n) {
        this.bO("UserHighlightData", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.eY(n)
    },
    eY: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var w = this;
            this.bK(function(n) {
                return new _g.y(n)
            }, ["Body", "UniqueBody", "NormalizedBody", "TextBody", "FirstBody"], n, t);
            var b = this;
            this.bK(function(n) {
                return new(_a.fT.$$(_g.Attachment, _g.bq))(n)
            }, ["Attachments"], n, t);
            var p = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["Categories", "Hashtags", "Actiontags", "PendingSocialActivityTagIds", "QuotedTextList", "UserHighlightData"], n, t);
            var v = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["InternetMessageHeaders"], n, t);
            var y = this;
            this.bK(function(n) {
                return new(_a.fT.$$(_g.bh, _g.bo))(n)
            }, ["ResponseObjects"], n, t);
            var nt = this;
            this.bK(function(n) {
                return new(_a.fT.$$(_g.be, _g.T))(n)
            }, ["ExtendedProperty"], n, t);
            var tt = this;
            this.bK(function(n) {
                return new _g.bF(n)
            }, ["Flag"], n, t);
            var g = this;
            this.bK(function(n) {
                return new _g.bp(n)
            }, ["PolicyTag", "ArchiveTag"], n, t);
            var k = this;
            this.bK(function(n) {
                return new _g.cu(n)
            }, ["RightsManagementLicenseData"], n, t);
            var d = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["PredictedActionReasons"], n, t);
            var a = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["ErrorProperties"], n, t);
            var f = this;
            this.bK(function(n) {
                return new _g.o(n)
            }, ["Conversation"], n, t);
            var e = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["SystemCategories"], n, t);
            var u = this;
            this.bK(function(n) {
                return new _g.dZ(n)
            }, ["Thread"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["Mentions"], n, t);
            var r = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["MentionsEx"], n, t);
            var c = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["AppliedHashtags"], n, t);
            var l = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["Likes"], n, t);
            var h = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["Apps"], n, t);
            var o = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["DocLinks"], n, t);
            var s = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["MessageOutlookServerId"], n, t);
            this.cg(["DateTimeReceived", "DateTimeSent", "DateTimeCreated", "ReminderDueBy", "ReminderNextTime", "LastModifiedTime", "RetentionDate", "ReceivedOrRenewTime", "RenewTime", "ReturnTime", "LastSmartResponseTime", "ExtractedCardAndActionsLastUpdatedTime"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.la = function() {
    this.ItemCategory = undefined;
    this.NormalizedSubject = undefined;
    this.IsClassified = undefined;
    this.ClassificationGuid = undefined;
    this.Classification = undefined;
    this.ClassificationDescription = undefined;
    this.ClassificationKeep = undefined;
    this.MessageBccMe = undefined;
    this.SharingInstanceGuid = undefined;
    this.NativeBodyInfo = undefined;
    this.DocumentId = undefined;
    this.DlpSenderOverride = undefined;
    this.DlpFalsePositive = undefined;
    this.DlpDetectedClassification = undefined;
    this.SmimeType = undefined;
    this.IsSmimeDecoded = undefined;
    this.SmimeNormalizedBody = undefined;
    this.SmimeAttachments = undefined;
    this.SmimeSignature = undefined;
    this.RawDate = undefined;
    this.IsEmbeddedAttachmentItem = undefined;
    _g.la.initializeBase(this)
};
_g.B = function(n) {
    _g.B.initializeBase(this, [n || new _g.dD]);
    this.bR();
    _a.s.a(this, "_ItemIdAttachment")
};
_g.B.$$cctor = function() {
    _a.n.b(_g.B, _g.dD, _g.B._C, "ItemIdAttachment:#Exchange")
};
_g.B.b = function(n) {
    var t = new _g.B;
    t.c(n.bH.ItemId);
    t.e(n.df() || n.bH.Subject || _wss.i.M);
    t.h(!1);
    t.k(!0);
    t.f(n.bH.Size);
    t.s(n.el());
    return t
};
_g.B._C = function(n) {
    return new _g.B(n)
};
_g.B.prototype = {
    A: function(n) {
        if (this.bH.ParentItemId !== n) {
            this.bH.ParentItemId = n;
            this.eJ("ParentItemId")
        }
        return n
    },
    k: function(n) {
        if (this.bH.IsAttachmentItemAttachment !== n) {
            this.bH.IsAttachmentItemAttachment = n;
            this.eJ("IsAttachmentItemAttachment")
        }
        return n
    },
    y: function(n) {
        if (this.bH.MimeContent !== n) {
            this.bH.MimeContent = n;
            this.eJ("MimeContent")
        }
        return n
    },
    s: function(n) {
        this.bH.IsIrmRestricted !== n && (this.bH.IsIrmRestricted = n);
        return n
    },
    by: function(n) {
        var t = n;
        this.A(t.ParentItemId);
        this.k(t.IsAttachmentItemAttachment);
        this.y(t.MimeContent)
    },
    r: function() {
        return new _g.B(_ff.e.a(this.bH))
    },
    w: function() {
        var n = new _g.dD;
        n.Name = this.bH.Name;
        if (this.bH.ItemId) {
            n.ItemId = this.bH.ItemId;
            return n
        }
        if (this.bH.AttachmentIdToAttach) {
            n.AttachmentIdToAttach = this.bH.AttachmentIdToAttach;
            return n
        }
        if (this.bH.MimeContent) {
            n.MimeContent = this.bH.MimeContent;
            this.y(null);
            return n
        }
        throw Error.argument("At least one of item id or attachment id needs to be defined.");
    },
    c: function(n) {
        this.bI("ItemId", n);
        return n
    },
    C: function(n) {
        this.bI("AttachmentIdToAttach", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.D(n)
    },
    D: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.Attachment.prototype.x.call(this, n);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.bp = function(n) {
    _g.bp.initializeBase(this);
    n || (n = new _g.bM);
    this.d(n);
    _a.s.a(this, "_RetentionTag")
};
_g.bp.$$cctor = function() {
    _a.n.a(_g.bp, _g.bM, _g.bp._C)
};
_g.bp._C = function(n) {
    return new _g.bp(n)
};
_g.bp.prototype = {
    a: function() {
        return this.e() ? this.bH.Value : null
    },
    cb: function(n) {
        return !n || Object.getType(n).getName() !== Object.getType(this).getName() ? !1 : this.bH.Value === n.bH.Value
    },
    e: function() {
        return this.bH.IsExplicit ? !0 : !1
    },
    b: function(n) {
        this.bI("IsExplicit", n);
        return n
    },
    c: function(n) {
        this.bI("Value", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.f(n)
    },
    f: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.cu = function(n) {
    _g.cu.initializeBase(this);
    n || (n = new _g.dL);
    this.d(n);
    _a.s.a(this, "_RightsManagementLicenseData")
};
_g.cu.$$cctor = function() {
    _a.n.a(_g.cu, _g.dL, _g.cu._C)
};
_g.cu._C = function(n) {
    return new _g.cu(n)
};
_g.cu.prototype = {
    a: function() {
        return this.bH.RightsManagedMessageDecryptionStatus || 0
    },
    s: function(n) {
        this.bI("RightsManagedMessageDecryptionStatus", n);
        return n
    },
    t: function(n) {
        this.bI("RmsTemplateId", n);
        return n
    },
    u: function(n) {
        this.bI("TemplateName", n);
        return n
    },
    k: function(n) {
        this.bI("TemplateDescription", n);
        return n
    },
    m: function() {
        return this.bH.EditAllowed ? !0 : !1
    },
    o: function() {
        return this.bH.ReplyAllowed ? !0 : !1
    },
    f: function() {
        return this.bH.ReplyAllAllowed ? !0 : !1
    },
    g: function() {
        return this.bH.ForwardAllowed ? !0 : !1
    },
    v: function() {
        return this.bH.ModifyRecipientsAllowed ? !0 : !1
    },
    j: function() {
        return this.bH.ExtractAllowed ? !0 : !1
    },
    e: function() {
        return this.bH.PrintAllowed ? !0 : !1
    },
    n: function() {
        return this.bH.ExportAllowed ? !0 : !1
    },
    w: function() {
        return this.bH.ProgrammaticAccessAllowed ? !0 : !1
    },
    b: function() {
        return this.bH.IsOwner ? !0 : !1
    },
    r: function(n) {
        this.bI("IsOwner", n);
        return n
    },
    q: function(n) {
        this.bI("ContentOwner", n);
        return n
    },
    c: function() {
        return this.bW("ContentExpiryDate")
    },
    h: function() {
        return this.bQ("BodyType", "Text")
    },
    p: function(n) {
        this.bI("BodyType", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.x(n)
    },
    x: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.cg(["ContentExpiryDate"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.c = function() {};
_g.c.T = function() {
    if (!_g.c.u) {
        _g.c.u = new _g.O;
        _g.c.u.PropertyTag = "0x5d02";
        _g.c.u.PropertyType = "String"
    }
    return _g.c.u
};
_g.c.v = function() {
    _g.c.U || (_g.c.U = new _g.d("InstanceKey"));
    return _g.c.U
};
_g.c.bA = function() {
    _g.c.E || (_g.c.E = new _g.d("DateTimeReceived"));
    return _g.c.E
};
_g.c.bD = function() {
    _g.c.K || (_g.c.K = new _g.d("FolderDisplayName"));
    return _g.c.K
};
_g.c.S = function() {
    if (!_g.c.j) {
        _g.c.j = new _g.O;
        _g.c.j.PropertyId = 34229;
        _g.c.j.DistinguishedPropertySetId = "Common";
        _g.c.j.PropertyType = "Boolean"
    }
    return _g.c.j
};
_g.c.O = function() {
    if (!_g.c.g) {
        _g.c.g = new _g.O;
        _g.c.g.PropertyId = 34232;
        _g.c.g.DistinguishedPropertySetId = "Common";
        _g.c.g.PropertyType = "String"
    }
    return _g.c.g
};
_g.c.M = function() {
    if (!_g.c.e) {
        _g.c.e = new _g.O;
        _g.c.e.PropertyId = 34230;
        _g.c.e.DistinguishedPropertySetId = "Common";
        _g.c.e.PropertyType = "String"
    }
    return _g.c.e
};
_g.c.N = function() {
    if (!_g.c.f) {
        _g.c.f = new _g.O;
        _g.c.f.PropertyId = 34231;
        _g.c.f.DistinguishedPropertySetId = "Common";
        _g.c.f.PropertyType = "String"
    }
    return _g.c.f
};
_g.c.bz = function() {
    if (!_g.c.h) {
        _g.c.h = new _g.O;
        _g.c.h.PropertyId = 34234;
        _g.c.h.DistinguishedPropertySetId = "Common";
        _g.c.h.PropertyType = "Boolean"
    }
    return _g.c.h
};
_g.c.w = function() {
    if (!_g.c.l) {
        _g.c.l = new _g.O;
        _g.c.l.PropertyId = 35356;
        _g.c.l.DistinguishedPropertySetId = "Sharing";
        _g.c.l.PropertyType = "CLSID"
    }
    return _g.c.l
};
_g.c.bv = function() {
    _g.c.W || (_g.c.W = new _g.d("IsRead"));
    return _g.c.W
};
_g.c.bC = function() {
    _g.c.I || (_g.c.I = new _g.d("Flag"));
    return _g.c.I
};
_g.c.bG = function() {
    if (!_g.c.k) {
        _g.c.k = new _g.O;
        _g.c.k.PropertyName = "MessageBccMe";
        _g.c.k.PropertySetId = "41F28F13-83F4-4114-A584-EEDB5A6B0BFF";
        _g.c.k.PropertyType = "Boolean"
    }
    return _g.c.k
};
_g.c.bx = function() {
    if (!_g.c.t) {
        _g.c.t = new _g.O;
        _g.c.t.PropertyTag = "0xe1d";
        _g.c.t.PropertyType = "String"
    }
    return _g.c.t
};
_g.c.bu = function() {
    _g.c.L || (_g.c.L = new _g.d("FolderPolicyTag"));
    return _g.c.L
};
_g.c.bt = function() {
    _g.c.J || (_g.c.J = new _g.d("FolderArchiveTag"));
    return _g.c.J
};
_g.c.bn = function() {
    _g.c.bc || (_g.c.bc = new _g.d("PermissionSet"));
    return _g.c.bc
};
_g.c.bl = function() {
    _g.c.Y || (_g.c.Y = new _g.d("ItemPolicyTag"));
    return _g.c.Y
};
_g.c.bk = function() {
    _g.c.X || (_g.c.X = new _g.d("ItemArchiveTag"));
    return _g.c.X
};
_g.c.bF = function() {
    _g.c.ba || (_g.c.ba = new _g.d("EnhancedLocation"));
    return _g.c.ba
};
_g.c.br = function() {
    _g.c.C || (_g.c.C = new _g.d("Categories"));
    return _g.c.C
};
_g.c.by = function() {
    if (!_g.c.n) {
        _g.c.n = new _g.O;
        _g.c.n.PropertyName = "SuggestionData";
        _g.c.n.PropertySetId = "542CEFF2-DCE1-4F81-B643-77F4E3792AE9";
        _g.c.n.PropertyType = "String"
    }
    return _g.c.n
};
_g.c.i = function() {
    _g.c.x || (_g.c.x = _g.c.b("AppendOnSend", "Common", "String"));
    return _g.c.x
};
_g.c.bI = function() {
    _g.c.bf || (_g.c.bf = new _g.d("SystemCategories"));
    return _g.c.bf
};
_g.c.bm = function() {
    if (!_g.c.s) {
        _g.c.s = new _g.O;
        _g.c.s.PropertyTag = "0x1016";
        _g.c.s.PropertyType = "Integer"
    }
    return _g.c.s
};
_g.c.bE = function() {
    if (!_g.c.r) {
        _g.c.r = new _g.O;
        _g.c.r.PropertyTag = "0x1082";
        _g.c.r.PropertyType = "SystemTime"
    }
    return _g.c.r
};
_g.c.bB = function() {
    if (!_g.c.p) {
        _g.c.p = new _g.O;
        _g.c.p.PropertyTag = "0x6815";
        _g.c.p.PropertyType = "Integer"
    }
    return _g.c.p
};
_g.c.R = function() {
    _g.c.H || (_g.c.H = _g.c.b("X-Ms-Exchange-Organization-Dlp-SenderOverrideJustification", "InternetHeaders", "String"));
    return _g.c.H
};
_g.c.Q = function() {
    _g.c.G || (_g.c.G = _g.c.b("X-Ms-Exchange-Organization-Dlp-FalsePositive", "InternetHeaders", "String"));
    return _g.c.G
};
_g.c.P = function() {
    _g.c.F || (_g.c.F = _g.c.b("X-Ms-Exchange-Organization-Dlp-DetectedClassifications", "InternetHeaders", "String"));
    return _g.c.F
};
_g.c.bq = function() {
    if (!_g.c.o) {
        _g.c.o = new _g.O;
        _g.c.o.PropertyTag = "0x35FF";
        _g.c.o.PropertyType = "Binary"
    }
    return _g.c.o
};
_g.c.d = function() {
    _g.c.V || (_g.c.V = _g.c.b("X-MS-Exchange-Organization-Ome-IsRequested", "InternetHeaders", "String"));
    return _g.c.V
};
_g.c.c = function() {
    _g.c.bb || (_g.c.bb = _g.c.b("X-MS-Exchange-Organization-Ome-TimeExpiration", "InternetHeaders", "String"));
    return _g.c.bb
};
_g.c.bw = function() {
    _g.c.Z || (_g.c.Z = _g.c.b("LinkPreviewMetadata", "Common", "StringArray"));
    return _g.c.Z
};
_g.c.bJ = function() {
    _g.c.bg || (_g.c.bg = _g.c.b("UserHighlightData", "Common", "StringArray"));
    return _g.c.bg
};
_g.c.q = function() {
    _g.c.y || (_g.c.y = _g.c.b("EntityExtraction/Highlights", "Common", "String"));
    return _g.c.y
};
_g.c.bh = function() {
    _g.c.z || (_g.c.z = _g.c.b("EntityExtraction/Highlights_Delayed", "Common", "String"));
    return _g.c.z
};
_g.c.bj = function() {
    _g.c.B || (_g.c.B = _g.c.b("EntityExtraction/HighlightsTypes", "Common", "String"));
    return _g.c.B
};
_g.c.bi = function() {
    _g.c.A || (_g.c.A = _g.c.b("EntityExtraction/HighlightsTypes_Delayed", "Common", "String"));
    return _g.c.A
};
_g.c.bp = function() {
    _g.c.be || (_g.c.be = _g.c.b("EntityExtraction/SmartReplyForEmail", "Common", "String"));
    return _g.c.be
};
_g.c.bo = function() {
    _g.c.bd || (_g.c.bd = _g.c.b("EntityExtraction/ReplyWithQueryCoverage", "Common", "String"));
    return _g.c.bd
};
_g.c.bs = function() {
    _g.c.D || (_g.c.D = _g.c.b("ConnectorSenderGuid", "Common", "CLSID"));
    return _g.c.D
};
_g.c.bH = function() {
    if (!_g.c.m) {
        _g.c.m = new _g.O;
        _g.c.m.PropertyName = "SourceWellKnownFolderType";
        _g.c.m.PropertySetId = "9137A2FD-2FA5-4409-91AA-2C3EE697350A";
        _g.c.m.PropertyType = "Integer"
    }
    return _g.c.m
};
_g.c.a = function(n, t) {
    if (!n || !n.length) return null;
    for (var r = new _j.q, u = 0; u < n.length; u++) {
        var f = n[u];
        var i = f.a().bH;
        i.PropertySetId === t.PropertySetId && i.PropertyTag === t.PropertyTag && i.PropertyId === t.PropertyId && i.PropertyName === t.PropertyName && i.DistinguishedPropertySetId === t.DistinguishedPropertySetId && r.c(f)
    }
    if (r.d.length === 1) return r.d[0];
    else if (r.d.length > 1) throw Error.invalidOperation("Multiple elements with the same URI found in extended properties.");
    else return null
};
_g.c.b = function(n, t, i) {
    var r = new _g.O;
    r.PropertyName = n;
    r.DistinguishedPropertySetId = t;
    r.PropertyType = i;
    return r
};
_g.j = function(n) {
    this.C = this.cb;
    _g.j.initializeBase(this);
    n || (n = new _g.hc);
    this.d(n);
    _a.s.a(this, "_Folder")
};
_g.j.$$cctor = function() {
    _a.n.a(_g.j, _g.hc, _g.j._C)
};
_g.j.a = function(n) {
    var t = new _g.u;
    t.j(_g.b.a.nameToId(n));
    t.R(n);
    return t
};
_g.j.c = function(n) {
    var i = "";
    if (!_g.j.isInstanceOfType(n) || !n) return i;
    var t = n;
    i = t.b ? t.a() !== "msgfolderroot" && (t.bH.ParentFolderId || t.bH.DisplayName !== t.q) ? String.format(_wss.i.F, t.bH.DisplayName, t.q) : t.q : !_j.h.a(t.w) && _g.a.a().c().bH.IsShadowMailbox ? t.w : t.bH.DisplayName;
    return i
};
_g.j.g = function(n) {
    if (n.a() === undefined) return "CF";
    switch (n.a()) {
        case "inbox":
            return "IN";
        case "sentitems":
            return "SI";
        case "deleteditems":
            return "DI";
        case "drafts":
            return "DR";
        case "conversationhistory":
            return "CH";
        case "journal":
            return "JO";
        case "junkemail":
            return "JU";
        case "clutter":
            return "CL";
        case "msgfolderroot":
            return "RT";
        case "none":
            return "CF"
    }
    return n.a()
};
_g.j.b = function(n) {
    return _g.j.l(n) || _g.j.d(n)
};
_g.j.l = function(n) {
    if (_g.bT.isInstanceOfType(n)) {
        var t = n.b;
        return t === "SystemCategory" || t === "UserCategory"
    }
    return !1
};
_g.j.d = function(n) {
    return _g.bT.isInstanceOfType(n) && n.b === "Hashtag"
};
_g.j.f = function(n) {
    return !!n && _g.u.isInstanceOfType(n) && n.c() && (!n.bH.FolderClass || n.bH.FolderClass.toLowerCase() === "IPF.Note".toLowerCase())
};
_g.j.i = function(n) {
    return !!n && _g.dr.isInstanceOfType(n) && n.c()
};
_g.j.e = function(n) {
    return !n || !n.bH.FolderId ? !1 : _g.j.i(n) ? !0 : !n.b || !n.e || n.e.a() === "Owner" || n.e.a() === "PublishingEditor" || n.e.a() === "Editor" || n.e.a() === "Custom" && n.e.o() === "All"
};
_g.j.j = function(n) {
    return !n || !n.bH.FolderId ? !1 : !n.b || !n.e || n.e.a() === "Owner" || n.e.a() === "PublishingEditor" || n.e.a() === "PublishingAuthor" || n.e.a() === "Custom" && n.e.bH.CanCreateSubFolders
};
_g.j.k = function(n) {
    return !n || !n.bH.FolderId ? !1 : !n.b || !n.e || n.e.a() === "Owner" || n.e.a() === "PublishingEditor" || n.e.a() === "Editor" || n.e.a() === "Custom" && n.e.o() === "All"
};
_g.j.h = function(n) {
    return !n || !n.bH.FolderId ? !1 : !n.b || !n.e || n.e.a() === "Owner" || n.e.a() === "PublishingEditor" || n.e.a() === "Editor" || n.e.a() === "Custom" && n.e.b() === "All"
};
_g.j._C = function(n) {
    return new _g.j(n)
};
_g.j.prototype = {
    m: !1,
    b: !1,
    q: null,
    P: !0,
    e: null,
    g: null,
    r: !1,
    n: 0,
    w: null,
    z: 0,
    W: function(n) {
        this.apcl("DisplayName", n)
    },
    X: function(n) {
        this.apcl("TotalCount", n)
    },
    x: function(n) {
        this.m = n;
        this.eJ("IsFavoriteFolder");
        return n
    },
    D: !1,
    u: null,
    G: function() {
        return this.bH.FolderId && _g.a.a().a().bH.ArchiveFolderId ? this.bH.FolderId.Id === _g.a.a().a().bH.ArchiveFolderId : !1
    },
    y: function(n) {
        this.P = n;
        this.eJ("DefaultCollapsed");
        return n
    },
    I: function(n) {
        this.g = n;
        this.eJ("SubFolders");
        return n
    },
    ba: function(n) {
        this.r = n;
        this.eJ("IsHidden");
        return n
    },
    S: function(n) {
        if (n !== this.z) {
            this.z = n;
            this.eJ("SyncMode")
        }
        return n
    },
    Z: function(n) {
        if (this.n !== n) {
            this.n = n;
            this.eJ("FolderSize")
        }
        return n
    },
    bc: function(n) {
        if (this.w !== n) {
            this.w = n;
            this.eJ("RemoteFolderDisplayName")
        }
        return n
    },
    a: function() {
        return this.bH.DistinguishedFolderId
    },
    p: function() {
        return this.bH.FolderId.Id
    },
    c: function() {
        return !!this.bH.FolderId && _g.bk.a(this.bH.FolderId)
    },
    v: 0,
    cb: function(n) {
        return !n || !_g.j.isInstanceOfType(n) ? !1 : this.bH.FolderId ? _g.l.b(this.bH.FolderId, n.bH.FolderId) : this === n
    },
    dR: function() {
        if (this.O()) {
            this.bH.DistinguishedFolderId && this.bH.FolderId && !_g.b.a.nameToId(this.a()) && _g.a.a().K(this.a(), this.bH.FolderId);
            for (var r = 0, f = this.O().b(); r < f; r++) {
                var n = this.O().a(r);
                var t = n.a();
                var i = t.bH.PropertyTag;
                var u = t.bH.PropertyName;
                i === "0x10f4" && this.ba(n.bH.Value === "true");
                i === "0xe08" && this.Z(n.bH.Value);
                i === "0x7018" && this.bc(n.bH.Value);
                u === _g.c.bH().PropertyName && (this.v = Number.parseInvariant(n.bH.Value));
                t.dispose();
                n.dispose()
            }
        }
    },
    j: function(n) {
        this.bI("FolderId", n);
        return n
    },
    t: function(n) {
        this.bI("ParentFolderId", n);
        return n
    },
    f: function(n) {
        this.bI("DisplayName", n);
        return n
    },
    k: function(n) {
        this.bI("TotalCount", n);
        return n
    },
    s: function(n) {
        this.bI("ChildFolderCount", n);
        return n
    },
    O: function() {
        return this.ca(_g.be, _g.T, "ExtendedProperty")
    },
    L: function(n) {
        this.bI("EffectiveRights", n);
        return n
    },
    R: function(n) {
        this.bI("DistinguishedFolderId", n);
        return n
    },
    H: function() {
        return this.bS(_g.bp, "PolicyTag")
    },
    bb: function(n) {
        this.bO("PolicyTag", n);
        return n
    },
    E: function() {
        return this.bS(_g.bp, "ArchiveTag")
    },
    Y: function(n) {
        this.bO("ArchiveTag", n);
        return n
    },
    Q: function() {
        return this.bP(String, "ReplicaList")
    },
    bd: function(n) {
        this.bO("ReplicaList", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.M(n)
    },
    M: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var u = this;
            this.bK(function(n) {
                return new(_a.fT.$$(_g.be, _g.T))(n)
            }, ["ExtendedProperty"], n, t);
            var r = this;
            this.bK(function(n) {
                return new _g.bp(n)
            }, ["PolicyTag", "ArchiveTag"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["ReplicaList"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.o = function(n) {
    this.u = this.k;
    this.C = this.cb;
    this.s = this.G;
    _g.o.initializeBase(this);
    n || (n = new _g.em);
    this.d(n);
    _a.s.a(this, "_Conversation")
};
_g.o.$$cctor = function() {
    _a.n.a(_g.o, _g.em, _g.o._C)
};
_g.o.a = function(n) {
    if (!n.length) return new Array(0);
    for (var e = 0, u = 0; u < n.length; u++) e += n[u].a().b();
    for (var f = new Array(e), o = 0, t = 0; t < n.length; t++)
        for (var i = 0; i < n[t].a().b(); i++) {
            var r;
            f[o] = (r = new _g.f, r.cc(n[t].a().a(i)), r);
            o++
        }
    return f
};
_g.o._C = function(n) {
    return new _g.o(n)
};
_g.o.prototype = {
    T: !1,
    O: !1,
    H: 0,
    L: !1,
    X: null,
    D: !1,
    x: !1,
    P: null,
    y: null,
    t: 0,
    p: function() {
        return this.bH.ConversationId.Id
    },
    bA: function() {
        this.T || this.E();
        return this.O
    },
    bC: function() {
        this.T || this.E();
        return this.H
    },
    bi: function() {
        return this.a().b()
    },
    bb: function() {
        return this.bH.GlobalMentionedMe || this.bH.GlobalAtAllMention
    },
    ba: !1,
    k: function() {
        return this.bH.ConversationId.Id
    },
    r: function() {
        return this.h()
    },
    bd: function() {
        return this.n()
    },
    be: function() {
        return this.bH.LastDeliveryTime
    },
    j: function() {
        return this.bH.UnreadCount > 0
    },
    bD: function() {
        return this.bH.ConversationTopic || ""
    },
    bB: function() {
        return this.bH.Preview || ""
    },
    W: function() {
        return this.a().b() ? this.a().a(0) : null
    },
    _Conversation: function() {
        if (_a.m.a && this.f()) {
            var t = this;
            this.f().J(function() {
                t.E()
            });
            var n = this;
            this.f().p(function() {
                n.E()
            })
        }
    },
    cb: function(n) {
        if (!n || !_g.o.isInstanceOfType(n)) return !1;
        if (!this.bH.ConversationId || !n.bH.ConversationId) throw Error.invalidOperation("Conversation not in a valid state.");
        return _ff.e.b(this.bH.ConversationId, n.bH.ConversationId)
    },
    N: function(n) {
        return this.cb(n) && this.bH.InstanceKey === n.bH.InstanceKey
    },
    bE: function() {
        if (!this.f()) return _g.f.k(1);
        for (var r = this.f().b(), t = 1, n = 0; n < r; n++) {
            var u = this.f().a(n);
            var i = _g.f.F(u);
            if (!n) {
                t = i;
                continue
            }
            if (t !== i) return null
        }
        return _g.f.k(t)
    },
    S: function() {
        return this.b() && this.b().bH.From && this.b().bH.From.Mailbox ? this.b().bH.From.Mailbox.Name : ""
    },
    bn: function() {
        return this.b() && this.b().cr() ? this.b().cr() : null
    },
    w: function() {
        return this.D
    },
    bl: function(n) {
        this.D = n;
        this.eJ("IsPinned");
        return n
    },
    bo: function() {
        return !!this.n() && _g.f.g(this.n())
    },
    bT: function() {
        return !!this.m() && this.m().b() > 0 || this.bU()
    },
    bU: function() {
        if (!this.q()) return !1;
        for (var t = this.q().e(), n = 0; n < t.length; n++) {
            var i = _g.A.d(t[n]);
            if (i) return !0
        }
        return !1
    },
    bw: function(n) {
        if (this.P !== n) {
            this.P = n;
            this.eJ("QueuedDraftId")
        }
        return n
    },
    K: !1,
    I: null,
    U: function() {
        return this.I
    },
    bF: function(n) {
        this.I = n;
        return n
    },
    bh: function(n) {
        this.t = n;
        this.eJ("ExtractedActionState");
        return n
    },
    bq: function(n) {
        if (n) {
            var t = this;
            return this.a().s(function(t) {
                return t.Id === n.bH.ItemId.Id
            })
        } else return this.a().b()
    },
    bX: function(n) {
        return this.e().b() === 1 && !!this.q() && this.q().j(n)
    },
    fn: function(n) {
        var t = n;
        !t.FolderId && this.bH.FolderId && (t.FolderId = this.bH.FolderId);
        t.LastDeliveryOrRenewTime || (t.LastDeliveryOrRenewTime = t.LastDeliveryTime);
        _g.K.prototype.fn.call(this, n)
    },
    dR: function() {
        this.bl(this.bo());
        _g.K.prototype.dR.call(this)
    },
    eL: function() {
        if (_a.m.a && this.f()) {
            var t = this;
            this.f().F(function() {
                t.E()
            });
            var n = this;
            this.f().q(function() {
                n.E()
            })
        }
        _a.gd.prototype.eL.call(this)
    },
    E: function() {
        this.O = !1;
        this.H = 0;
        if (this.f()) {
            var n = this;
            this.f().n(function(t) {
                var i = t;
                if (_a.m.P(i)) {
                    n.O = !0;
                    n.H = -1
                } else if (_a.m.H(i)) {
                    n.O = !0;
                    n.H || (n.H = 11)
                }
            })
        }
        this.T = !0;
        this.eJ("IsSmimeClass");
        this.eJ("SmimeType")
    },
    Q: function(n) {
        this.bI("FolderId", n);
        return n
    },
    bY: function(n) {
        this.bI("ConversationId", n);
        return n
    },
    bZ: function(n) {
        this.bI("ConversationTopic", n);
        return n
    },
    v: function() {
        return this.bP(String, "UniqueRecipients")
    },
    g: function() {
        return this.bP(String, "UniqueSenders")
    },
    by: function(n) {
        this.bO("UniqueSenders", n);
        return n
    },
    h: function() {
        return this.bW("LastDeliveryTime")
    },
    bu: function(n) {
        this.cm("LastDeliveryTime", n);
        return n
    },
    m: function() {
        return this.bP(String, "Categories")
    },
    Y: function(n) {
        this.bO("Categories", n);
        return n
    },
    M: function() {
        return this.bQ("FlagStatus", "NotFlagged")
    },
    bj: function(n) {
        this.bI("FlagStatus", n);
        return n
    },
    bz: function() {
        return this.bH.HasAttachments
    },
    bm: function(n) {
        this.bI("MessageCount", n);
        return n
    },
    bf: function() {
        return this.bH.GlobalMessageCount
    },
    A: function(n) {
        this.bI("GlobalMessageCount", n);
        return n
    },
    o: function(n) {
        this.bI("UnreadCount", n);
        return n
    },
    R: function(n) {
        this.bI("GlobalUnreadCount", n);
        return n
    },
    f: function() {
        return this.bP(String, "ItemClasses")
    },
    bg: function() {
        return this.bQ("Importance", "Low")
    },
    a: function() {
        return this.bP(_g.ft, "ItemIds")
    },
    cc: function(n) {
        this.bO("ItemIds", n);
        return n
    },
    e: function() {
        return this.bP(_g.ft, "GlobalItemIds")
    },
    bk: function(n) {
        this.bO("GlobalItemIds", n);
        return n
    },
    V: function() {
        return this.bW("LastModifiedTime")
    },
    G: function() {
        return this.bH.InstanceKey
    },
    bt: function(n) {
        this.bI("InstanceKey", n);
        return n
    },
    bv: function(n) {
        this.bI("Preview", n);
        return n
    },
    bp: function() {
        return this.bQ("MailboxScope", "PrimaryOnly")
    },
    bV: function() {
        return this.bQ("IconIndex", "PostItem")
    },
    c: function() {
        return this.bP(_g.ft, "DraftItemIds")
    },
    br: function(n) {
        this.bO("DraftItemIds", n);
        return n
    },
    bc: function() {
        return this.bH.GlobalLikeCount || 0
    },
    bs: function(n) {
        this.bI("GlobalLikeCount", n);
        return n
    },
    n: function() {
        return this.bW("LastDeliveryOrRenewTime")
    },
    cd: function(n) {
        this.cm("LastDeliveryOrRenewTime", n);
        return n
    },
    q: function() {
        return this.bP(Number, "SystemCategories")
    },
    Z: function(n) {
        this.bO("SystemCategories", n);
        return n
    },
    b: function() {
        return this.bS(_g.i, "InitialPost")
    },
    z: function() {
        return this.ca(_g.i, _g.J, "RecentReplys")
    },
    bx: function(n) {
        this.bO("RecentReplys", n);
        return n
    },
    bG: function() {
        return this.bH.AvailableFeaturesFlag || 0
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.ce(n)
    },
    ce: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var o = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["UniqueRecipients", "GlobalUniqueRecipients", "UniqueUnreadSenders", "GlobalUniqueUnreadSenders", "UniqueSenders", "GlobalUniqueSenders", "Categories", "GlobalCategories", "ItemClasses", "GlobalItemClasses", "GlobalItemChangeKeys", "MailboxGuids", "Hashtags", "CouponExpiryDates"], n, t);
            var e = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["ItemIds", "GlobalItemIds", "DraftItemIds"], n, t);
            var h = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["GlobalItemReadFlags"], n, t);
            var s = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["GlobalRichContent"], n, t);
            var r = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["SystemCategories", "GlobalSystemCategories", "CouponRanks"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _g.i(n)
            }, ["InitialPost"], n, t);
            var f = this;
            this.bK(function(n) {
                return new(_a.fT.$$(_g.i, _g.J))(n)
            }, ["RecentReplys"], n, t);
            var u = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["ConversationThreadIds", "GlobalConversationThreadIds"], n, t);
            this.cg(["LastDeliveryTime", "GlobalLastDeliveryTime", "LastModifiedTime", "LastDeliveryOrRenewTime", "GlobalLastDeliveryOrRenewTime", "ReturnTime", "LastSentTime", "LastAttachmentsProcessedTime", "GlobalLastAttachmentsProcessedTime", "ExtractedCardAndActionsLastUpdatedTime"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.fe = function() {};
_g.fe.a = function(n) {
    return String.format("conversationID= {0} \n itemCount= {1}", n.p(), n.bi().toString())
};
_g.fe.b = function(n) {
    for (var r = new Sys.StringBuilder, t = 0; t < n.x.length; t++) {
        var i = n.x[t];
        var u = i ? i.bH.InternetMessageId : "null";
        r.append(String.format(" [{0}] InternetMessageId = {1}\n", t, u))
    }
    return r.toString()
};
_g.fe.c = function(n) {
    for (var r = new Sys.StringBuilder, t = 0; t < n.length; t++) {
        var i = n[t];
        var u = i ? i.InternetMessageId : "null";
        r.append(String.format(" [{0}] InternetMessageId = {1}\n", t, u))
    }
    return r.toString()
};
_g.i = function(n) {
    this.cU = Function.createDelegate(this, this.eg);
    this.bv = null;
    _g.i.resolveInheritance();
    this.m = this.cK;
    _g.i.initializeBase(this, [n || new _g.J]);
    this.bR();
    _a.s.a(this, "_EmailMessage")
};
_g.i.$$cctor = function() {
    _a.n.b(_g.i, _g.J, _g.i._C, "Message:#Exchange")
};
_g.i._C = function(n) {
    return new _g.i(n)
};
_g.i.prototype = {
    dn: !1,
    dp: !1,
    co: !1,
    bw: !1,
    _EmailMessage: function() {
        this.eq(1);
        this.apcl("IsRead", this.cU)
    },
    eg: function(n, t) {
        this.eJ("IsReadValue")
    },
    dj: function() {
        return !0
    },
    cL: function() {
        return this.bH.IsRead ? !0 : !1
    },
    hw: function() {
        return this.bH.MessageSafety
    },
    hx: function() {
        return this.ef()
    },
    bG: function() {
        return this.ct().LastVerbExecuted
    },
    dl: function(n) {
        if (this.ct().LastVerbExecuted !== n) {
            this.ct().LastVerbExecuted = n;
            this.eJ("LastVerbExecuted")
        }
        return n
    },
    cd: function() {
        return this.ct().LastVerbExecutionTime
    },
    dm: function(n) {
        try {
            n && n.b(9);
            if (this.ct().LastVerbExecutionTime !== n) {
                this.ct().LastVerbExecutionTime = n;
                this.eJ("LastVerbExecutionTime")
            }
        } catch (t) {
            _j.e.c(_a.a.U, "Attempting to set LastVerbExecutionTime with object that doesn't contain method CultureFormat.  Value type: {0}, StackTrace: {1}", Object.getTypeName(n), t.stack);
            this.ct().LastVerbExecutionTime = null
        }
        return n
    },
    et: function(n) {
        if (this.dn !== n) {
            this.dn = n;
            this.eJ("SmimeEncryptMessage")
        }
        return n
    },
    eu: function(n) {
        if (this.dp !== n) {
            this.dp = n;
            this.eJ("SmimeSignMessage")
        }
        return n
    },
    dz: function(n) {
        if (this.co !== n) {
            this.co = n;
            this.eJ("HasTruncatedRecipients")
        }
        return n
    },
    cV: !1,
    g: function() {
        return this.bH.From && this.bH.From.Mailbox ? this.bH.From.Mailbox.Name : null
    },
    dg: function(n) {
        if (this.bw !== n) {
            this.bw = n;
            this.eJ("IsQueuedForSubmission")
        }
        return n
    },
    ct: function() {
        return this.fl()
    },
    dR: function() {
        _g.f.prototype.dR.call(this);
        this.cM()
    },
    eL: function() {
        this.rpcl("IsRead", this.cU);
        _g.f.prototype.eL.call(this)
    },
    ec: function(n, t) {
        switch (n) {
            case "IsRead":
                this.h(t);
                break;
            default:
                _g.f.prototype.ec.call(this, n, t);
                break
        }
    },
    dc: function(n) {
        this.cw(new _a.j(n.ToRecipients));
        this.cv(new _a.j(n.CcRecipients));
        this.cz(new _a.j(n.BccRecipients));
        this.cM()
    },
    by: function(n) {
        _g.f.prototype.by.call(this, n);
        var t = n;
        this.dl(t.LastVerbExecuted);
        this.dm(t.LastVerbExecutionTime)
    },
    dX: function(n) {
        _g.f.prototype.dX.call(this, n);
        var t = n;
        this.dd(t.InternetMessageId);
        this.h(t.IsRead);
        this.eh(new _a.j(t.Likers));
        this.cJ(t.LikeCount);
        this.jm(n.ExtendedProperty)
    },
    du: function(n) {
        _g.f.prototype.du.call(this, n);
        this.h(n.IsRead);
        this.dk(n.IsReadReceiptRequested);
        this.de(n.IsDeliveryReceiptRequested)
    },
    dY: function(n) {
        _g.f.prototype.dY.call(this, n);
        this.h(n.IsRead)
    },
    cY: function(n) {
        this.bH.InternetMessageId || this.dd("<" + +new Date + "." + Math.floor(Math.random() * 1e5) + n + ">")
    },
    er: function(n) {
        if (n) {
            _g.f.prototype.er.call(this, n);
            var r = n.a();
            var i = r.bH.PropertyTag;
            r.dispose();
            var t = n.bH.Value === undefined ? "" : n.bH.Value;
            i === "0x1081" ? this.dl(_j.u.b(_g.kp, t)) : i === "0x1082" && this.dm(_a.d.b(t))
        }
    },
    dw: function() {
        if (!this.bV()) return !1;
        var n = _g.c.a(this.bV().e(), _g.c.d());
        return !!n && n.bH.Value.toUpperCase() === "TRUE"
    },
    ch: function() {
        if (!this.bV()) return null;
        var i = _g.c.a(this.bV().e(), _g.c.c());
        if (i) {
            var t = i.bH.Value;
            var n = _a.d.b(t);
            n || _j.e.c(_a.a.U, "Attempt to get OME expiration time but value in extended property cannot be parsed into a datetime object.  Value: {0}", t);
            return n
        } else return null
    },
    cM: function() {
        var t = !1;
        var n = this.bH;
        n.RecipientCounts && (n.ToRecipients && n.RecipientCounts.ToRecipientsCount > n.ToRecipients.length || n.CcRecipients && n.RecipientCounts.CcRecipientsCount > n.CcRecipients.length || n.BccRecipients && n.RecipientCounts.BccRecipientsCount > n.BccRecipients.length) && (t = !0);
        this.dz(t)
    },
    e: function() {
        return this.bH.Sender
    },
    es: function(n) {
        this.bI("Sender", n);
        return n
    },
    q: function() {
        return this.bP(_g.g, "ToRecipients")
    },
    cw: function(n) {
        this.bO("ToRecipients", n);
        return n
    },
    A: function() {
        return this.bP(_g.g, "CcRecipients")
    },
    cv: function(n) {
        this.bO("CcRecipients", n);
        return n
    },
    E: function() {
        return this.bP(_g.g, "BccRecipients")
    },
    cz: function(n) {
        this.bO("BccRecipients", n);
        return n
    },
    dk: function(n) {
        this.bI("IsReadReceiptRequested", n);
        return n
    },
    de: function(n) {
        this.bI("IsDeliveryReceiptRequested", n);
        return n
    },
    b: function() {
        return this.bH.From
    },
    cI: function(n) {
        this.bI("From", n);
        return n
    },
    n: function() {
        return this.bH.InternetMessageId
    },
    dd: function(n) {
        this.bI("InternetMessageId", n);
        return n
    },
    a: function() {
        return this.bH.IsRead
    },
    h: function(n) {
        this.bI("IsRead", n);
        return n
    },
    K: function() {
        return this.bH.IsResponseRequested
    },
    dx: function() {
        return this.bP(_g.g, "ReplyTo")
    },
    H: function() {
        return this.bS(_g.dY, "ApprovalRequestData")
    },
    cn: function() {
        return this.bS(_g.eb, "ReminderMessageData")
    },
    cu: function() {
        return this.bH.LikeCount || 0
    },
    cJ: function(n) {
        this.bI("LikeCount", n);
        return n
    },
    ce: function() {
        return this.bP(_g.g, "Likers")
    },
    eh: function(n) {
        this.bO("Likers", n);
        return n
    },
    ee: function() {
        return this.bQ("MessageResponseType", 0)
    },
    ef: function() {
        return this.bQ("TrustedSourceType", 0)
    },
    dy: function() {
        return this.bP(_g.e, "TailoredXpCalendarEventIds")
    },
    ev: function(n) {
        this.bO("TailoredXpCalendarEventIds", n);
        return n
    },
    cH: function() {
        return this.bQ("Charm", "None")
    },
    ew: function(n) {
        this.bI("TailoredXpEntitiesStatus", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.cN(n)
    },
    cN: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.f.prototype.eY.call(this, n);
            var e = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["ToRecipients", "CcRecipients", "BccRecipients", "ReplyTo", "Likers"], n, t);
            var o = this;
            this.bK(function(n) {
                return new _g.dY(n)
            }, ["ApprovalRequestData"], n, t);
            var s = this;
            this.bK(function(n) {
                return new _g.eb(n)
            }, ["ReminderMessageData"], n, t);
            var f = this;
            this.bK(function(n) {
                return new(_a.fT.$$(_g.ds, _g.cL))(n)
            }, ["ModernReminders"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["MailboxGuids", "CouponExpiryDates"], n, t);
            var r = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["TailoredXpCalendarEventIds"], n, t);
            var u = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["CouponRanks"], n, t);
            this.cg(["LastActionTime"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.ce = function(n) {
    _g.ce.initializeBase(this);
    n || (n = new _g.cl);
    this.d(n);
    _a.s.a(this, "_ConversationNodeModel")
};
_g.ce.$$cctor = function() {
    _a.n.a(_g.ce, _g.cl, _g.ce._C)
};
_g.ce._C = function(n) {
    return new _g.ce(n)
};
_g.ce.prototype = {
    f: null,
    b: function() {
        this.f || (this.f = new _j.l);
        return this.f
    },
    n: function(n) {
        this.bI("InternetMessageId", n);
        return n
    },
    q: function(n) {
        this.bI("ParentInternetMessageId", n);
        return n
    },
    a: function() {
        return this.ca(_g.f, _g.M, "Items")
    },
    c: function() {
        return this.bP(_g.g, "NewParticipants")
    },
    h: function(n) {
        this.bO("NewParticipants", n);
        return n
    },
    m: function(n) {
        this.bI("InReplyToItem", n);
        return n
    },
    p: function(n) {
        this.bI("IsRootNode", n);
        return n
    },
    s: function(n) {
        this.bO("ForwardMessages", n);
        return n
    },
    j: function() {
        return this.bH.IsQuotedTextChanged ? !0 : !1
    },
    o: function(n) {
        this.bI("IsQuotedTextChanged", n);
        return n
    },
    e: function() {
        return this.bP(String, "QuotedTextList")
    },
    r: function(n) {
        this.bO("QuotedTextList", n);
        return n
    },
    g: function() {
        return this.bH.HasQuotedText ? !0 : !1
    },
    k: function(n) {
        this.bI("HasQuotedText", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.t(n)
    },
    t: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var u = this;
            this.bK(function(n) {
                return new(_a.fT.$$(_g.f, _g.M))(n)
            }, ["Items"], n, t);
            var f = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["NewParticipants"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["ForwardMessages"], n, t);
            var r = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["QuotedTextList"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.kV = function() {
    this.LastVerbExecuted = undefined;
    this.LastVerbExecutionTime = undefined;
    _g.kV.initializeBase(this)
};
_g.v = function(n) {
    _g.v.initializeBase(this, [n || new _g.cM]);
    this.bR();
    _a.s.a(this, "_MailFolderPermission")
};
_g.v.$$cctor = function() {
    _a.n.a(_g.v, _g.cM, _g.v._C)
};
_g.v.f = function() {
    _g.v.b || _g.v.d();
    return _g.v.b
};
_g.v.e = function() {
    _g.v.a || _g.v.d();
    return _g.v.a
};
_g.v.g = function() {
    _g.v.c || _g.v.d();
    return _g.v.c
};
_g.v.d = function() {
    _g.v.b = {};
    _g.v.a = new _a.R;
    var n = new _g.v;
    n.g("None");
    n.h(!1);
    n.j(!1);
    n.k("None");
    n.e("None");
    n.c(!1);
    n.m(!1);
    n.f(!1);
    n.n("None");
    _g.v.b[n.a()] = n;
    _g.v.a.a(n);
    _g.v.c = n;
    n = new _g.v;
    n.g("Contributor");
    n.h(!0);
    n.j(!1);
    n.k("None");
    n.e("None");
    n.c(!1);
    n.m(!1);
    n.f(!0);
    n.n("None");
    _g.v.b[n.a()] = n;
    _g.v.a.a(n);
    n = new _g.v;
    n.g("Reviewer");
    n.h(!1);
    n.j(!1);
    n.k("None");
    n.e("None");
    n.c(!1);
    n.m(!1);
    n.f(!0);
    n.n("FullDetails");
    _g.v.b[n.a()] = n;
    _g.v.a.a(n);
    n = new _g.v;
    n.g("NoneditingAuthor");
    n.h(!0);
    n.j(!1);
    n.k("Owned");
    n.e("None");
    n.c(!1);
    n.m(!1);
    n.f(!0);
    n.n("FullDetails");
    _g.v.b[n.a()] = n;
    _g.v.a.a(n);
    n = new _g.v;
    n.g("Author");
    n.h(!0);
    n.j(!1);
    n.k("Owned");
    n.e("Owned");
    n.c(!1);
    n.m(!1);
    n.f(!0);
    n.n("FullDetails");
    _g.v.b[n.a()] = n;
    _g.v.a.a(n);
    n = new _g.v;
    n.g("PublishingAuthor");
    n.h(!0);
    n.j(!0);
    n.k("Owned");
    n.e("Owned");
    n.c(!1);
    n.m(!1);
    n.f(!0);
    n.n("FullDetails");
    _g.v.b[n.a()] = n;
    _g.v.a.a(n);
    n = new _g.v;
    n.g("Editor");
    n.h(!0);
    n.j(!1);
    n.k("All");
    n.e("All");
    n.c(!1);
    n.m(!1);
    n.f(!0);
    n.n("FullDetails");
    _g.v.b[n.a()] = n;
    _g.v.a.a(n);
    n = new _g.v;
    n.g("PublishingEditor");
    n.h(!0);
    n.j(!0);
    n.k("All");
    n.e("All");
    n.c(!1);
    n.m(!1);
    n.f(!0);
    n.n("FullDetails");
    _g.v.b[n.a()] = n;
    _g.v.a.a(n);
    n = new _g.v;
    n.g("Owner");
    n.h(!0);
    n.j(!0);
    n.k("All");
    n.e("All");
    n.c(!0);
    n.m(!0);
    n.f(!0);
    n.n("FullDetails");
    _g.v.b[n.a()] = n;
    _g.v.a.a(n);
    var t = n;
    n = _g.v.c.p();
    n.f(!0);
    _g.v.a.a(n);
    n = _g.v.c.p();
    n.c(!0);
    _g.v.a.a(n);
    n = _g.v.c.p();
    n.c(!0);
    n.f(!0);
    _g.v.a.a(n);
    n = t.p();
    n.c(!1);
    _g.v.a.a(n)
};
_g.v._C = function(n) {
    return new _g.v(n)
};
_g.v.prototype = {
    p: function() {
        var n = new _g.v;
        return this.u(n)
    },
    u: function(n) {
        n.g(this.a());
        n.h(this.bH.CanCreateItems);
        n.j(this.bH.CanCreateSubFolders);
        n.c(this.q());
        n.f(this.bH.IsFolderVisible);
        n.m(this.bH.IsFolderOwner);
        n.e(this.b());
        n.k(this.o());
        n.n(this.r());
        return n
    },
    x: function(n) {
        return this.bH.CanCreateItems === n.bH.CanCreateItems && this.bH.CanCreateSubFolders === n.bH.CanCreateSubFolders && this.q() === n.q() && this.bH.IsFolderVisible === n.bH.IsFolderVisible && this.bH.IsFolderOwner === n.bH.IsFolderOwner && this.b() === n.b() && this.o() === n.o() && this.r() === n.r()
    },
    y: function(n) {
        var t = this.bH.UserId;
        return !t || !n ? !1 : _j.u.a(t.DistinguishedUser) || _j.u.a(n.DistinguishedUser) ? t.PrimarySmtpAddress === n.PrimarySmtpAddress : t.DistinguishedUser === n.DistinguishedUser ? this.bH.UserId.DistinguishedUser === "None" ? t.PrimarySmtpAddress === n.PrimarySmtpAddress : !0 : !1
    },
    w: function() {
        for (var n = 0; n < _g.v.e().b.length; n++) {
            var t = _g.v.e().c(n);
            if (this.x(t)) return t.a()
        }
        return "Custom"
    },
    v: function() {
        if (this.a() !== "Custom") {
            var n = _g.v.f()[this.a()];
            n.u(this)
        }
    },
    r: function() {
        return this.bQ("ReadItems", "None")
    },
    n: function(n) {
        this.bI("ReadItems", n);
        return n
    },
    a: function() {
        return this.bQ("PermissionLevel", "None")
    },
    g: function(n) {
        this.bI("PermissionLevel", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.z(n)
    },
    z: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.gU.prototype.t.call(this, n);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.ds = function(n) {
    _g.ds.initializeBase(this);
    n || (n = new _g.cL);
    this.d(n);
    _a.s.a(this, "_ModernReminderModel")
};
_g.ds.$$cctor = function() {
    _a.n.a(_g.ds, _g.cL, _g.ds._C)
};
_g.ds._C = function(n) {
    return new _g.ds(n)
};
_g.ds.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.a(n)
    },
    a: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.cg(["ReferenceTime", "CustomReminderTime", "DueDate"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.bl = function(n) {
    this.c = Function.createDelegate(this, this.f);
    _g.bl.resolveInheritance();
    this.m = this.cK;
    _g.bl.initializeBase(this, [n || new _g.dc]);
    this.bR();
    _a.s.a(this, "_PostItem")
};
_g.bl.$$cctor = function() {
    _a.n.b(_g.bl, _g.dc, _g.bl._C, "PostItem:#Exchange")
};
_g.bl._C = function(n) {
    return new _g.bl(n)
};
_g.bl.prototype = {
    _PostItem: function() {
        this.eq(5);
        this.apcl("IsRead", this.c)
    },
    g: function() {
        return this.bH.From && this.bH.From.Mailbox ? this.bH.From.Mailbox.Name : null
    },
    f: function(n, t) {
        this.eJ("IsReadValue")
    },
    dj: function() {
        return !0
    },
    cL: function() {
        return this.bH.IsRead ? !0 : !1
    },
    dX: function(n) {
        _g.f.prototype.dX.call(this, n);
        this.q(n.InternetMessageId);
        this.h(n.IsRead)
    },
    du: function(n) {
        _g.f.prototype.du.call(this, n);
        this.h(n.IsRead)
    },
    dY: function(n) {
        _g.f.prototype.dY.call(this, n);
        this.h(n.IsRead)
    },
    b: function() {
        return this.bH.From
    },
    o: function(n) {
        this.bI("From", n);
        return n
    },
    n: function() {
        return this.bH.InternetMessageId
    },
    q: function(n) {
        this.bI("InternetMessageId", n);
        return n
    },
    a: function() {
        return this.bH.IsRead
    },
    h: function(n) {
        this.bI("IsRead", n);
        return n
    },
    e: function() {
        return this.bH.Sender
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.t(n)
    },
    t: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.f.prototype.eY.call(this, n);
            this.cg(["PostedTime"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.cF = function(n) {
    this.h = Function.createDelegate(this, this.o);
    _g.cF.initializeBase(this);
    n || (n = new _g.eS);
    this.d(n);
    _a.s.a(this, "_UnseenData")
};
_g.cF.$$cctor = function() {
    _a.n.a(_g.cF, _g.eS, _g.cF._C)
};
_g.cF.a = function() {
    var n = new _g.cF;
    n.apcl("UnseenCount", n.h);
    n.j();
    return n
};
_g.cF._C = function(n) {
    return new _g.cF(n)
};
_g.cF.prototype = {
    b: 0,
    c: !1,
    k: function(n) {
        this.b = Math.max(0, n);
        this.eJ("UnseenOrUnreadCount");
        return n
    },
    g: function() {
        return this.c ? this.b : this.bH.UnseenCount
    },
    j: function() {
        this.m(0);
        this.e(_a.d.get_utcNow())
    },
    p: function(n) {
        this.c = !0;
        this.k(n);
        this.a() || this.e(_a.d.g)
    },
    f: function(n) {
        this.c && this.k(n)
    },
    o: function(n, t) {
        this.eJ("UnseenOrUnreadCount")
    },
    m: function(n) {
        this.bI("UnseenCount", n);
        return n
    },
    a: function() {
        return this.bW("LastVisitedTime")
    },
    e: function(n) {
        this.cm("LastVisitedTime", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.n(n)
    },
    n: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.cg(["LastVisitedTime"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["SeenConversations"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.w = function(n) {
    _g.w.initializeBase(this);
    n || (n = new _g.eG);
    this.d(n);
    _a.s.a(this, "_UserModernGroup")
};
_g.w.$$cctor = function() {
    _a.n.a(_g.w, _g.eG, _g.w._C)
};
_g.w.b = function(n) {
    return new _g.N(n.bH.SmtpAddress, n.f())
};
_g.w.f = function(n) {
    var t = new _g.u;
    t.f(n.bH.DisplayName);
    t.j(_g.w.b(n));
    return t
};
_g.w.d = function(n) {
    var t = new _g.g;
    t.Name = n.bH.DisplayName;
    t.EmailAddress = n.bH.SmtpAddress;
    t.RoutingType = "SMTP";
    t.MailboxType = n.m ? "RecommendedGroup" : "GroupMailbox";
    return t
};
_g.w.a = function(n, t, i, r, u, f) {
    var e = new _g.w;
    e.c(n);
    e.g(t);
    e.b = r;
    e.n(1);
    !!i !== i || (e.isMember = i);
    u && e.s(u);
    f && e.t(f);
    return e
};
_g.w.g = function(n) {
    var t = new _g.w(n);
    t.e = 1;
    return t
};
_g.w.c = function(n) {
    var t = new _g.w;
    t.c(n);
    t.g(n);
    t.n(0);
    return t
};
_g.w.e = function(n) {
    return n ? n.toLowerCase() : ""
};
_g.w._C = function(n) {
    return new _g.w(n)
};
_g.w.prototype = {
    position: 0,
    unseenData: null,
    isMember: !1,
    e: 0,
    b: 0,
    m: !1,
    p: !1,
    j: null,
    a: function() {
        return _g.w.e(this.bH.SmtpAddress)
    },
    n: function(n) {
        if (this.e === n) return n;
        this.e = n;
        this.eJ("ObjectStatus");
        return n
    },
    o: function() {
        return this.j ? this.j : this.unseenData ? this.unseenData.a() : _a.d.get_utcNow()
    },
    q: function(n) {
        this.r(n.bH);
        this.b = n.b;
        n.e === 1 && this.n(1)
    },
    g: function(n) {
        this.bI("SmtpAddress", n);
        return n
    },
    c: function(n) {
        this.bI("DisplayName", n);
        return n
    },
    h: function() {
        return this.bH.IsPinned ? !0 : !1
    },
    k: function(n) {
        this.bI("IsPinned", n);
        return n
    },
    f: function() {
        return this.bQ("GroupObjectType", 0)
    },
    s: function(n) {
        this.bI("ExternalDirectoryObjectId", n);
        return n
    },
    t: function(n) {
        this.bI("MailboxGuid", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.r(n)
    },
    r: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.le = function() {
    this.NeedsUpdate = undefined;
    _g.le.initializeBase(this)
};
_g.cj = function(n) {
    _g.cj.initializeBase(this, [n])
};
_g.cj.prototype = {
    v: function() {
        return this.c().VoiceMessageAttachmentOrder
    },
    o: function(n) {
        if (this.c().VoiceMessageAttachmentOrder !== n) {
            this.c().VoiceMessageAttachmentOrder = n;
            this.eJ("VoiceMessageAttachmentOrder")
        }
        return n
    },
    x: function() {
        return this.c().VoiceMessageDuration
    },
    t: function(n) {
        if (this.c().VoiceMessageDuration !== n) {
            this.c().VoiceMessageDuration = n;
            this.eJ("VoiceMessageDuration")
        }
        return n
    },
    f: function(n) {
        if (this.c().PstnCallbackTelephoneNumber !== n) {
            this.c().PstnCallbackTelephoneNumber = n;
            this.eJ("PstnCallbackTelephoneNumber")
        }
        return n
    },
    c: function() {
        return this.fl()
    },
    by: function(n) {
        _g.i.prototype.by.call(this, n);
        var t = n;
        this.o(t.VoiceMessageAttachmentOrder);
        this.t(t.VoiceMessageDuration);
        this.f(t.PstnCallbackTelephoneNumber)
    },
    er: function(n) {
        if (n) {
            _g.i.prototype.er.call(this, n);
            var t = n.a();
            var r = t.bH.PropertyTag;
            var u = t.bH.PropertyName;
            var f = t.a();
            t.dispose();
            var i = n.bH.Value === undefined ? "" : n.bH.Value;
            r === "0x6805" ? this.o(i) : r === "0x6801" ? this.t(Number.parseInvariant(i)) : u === "PstnCallbackTelephoneNumber" && f === "UnifiedMessaging" && this.f(i)
        }
    }
};
_g.lf = function() {
    this.VoiceMessageAttachmentOrder = undefined;
    this.VoiceMessageDuration = undefined;
    this.PstnCallbackTelephoneNumber = undefined;
    _g.lf.initializeBase(this)
};
_g.bg = function(n) {
    _g.bg.initializeBase(this);
    n || (n = new _g.bC);
    this.d(n);
    _a.s.a(this, "_Category")
};
_g.bg.$$cctor = function() {
    _a.n.a(_g.bg, _g.bC, _g.bg._C)
};
_g.bg.a = function(n) {
    var t = new _g.bC;
    t.Color = n.bH.Color;
    t.Name = n.bH.Name;
    var i = new _g.bg(t);
    i.a = n.a;
    return i
};
_g.bg.c = function(n, t) {
    var i = new _g.bC;
    i.Color = -1;
    i.Name = t;
    var r = new _g.bg(i);
    r.a = n;
    return r
};
_g.bg.b = function(n, t) {
    var i = new _g.bC;
    i.Color = t;
    i.Name = n;
    return new _g.bg(i)
};
_g.bg._C = function(n) {
    return new _g.bg(n)
};
_g.bg.prototype = {
    a: 0,
    b: function() {
        return !!this.a
    },
    e: function(n) {
        this.bI("Name", n);
        return n
    },
    c: function(n) {
        this.bI("Color", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.f(n)
    },
    f: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.b = function() {};
_g.D = function() {};
_g.D.h = function(n) {
    _g.D.f = n ? "ConversationLastModifiedTime" : "ConversationLastDeliveryTime";
    _g.D.c = n ? "ItemLastModifiedTime" : "DateTimeReceived"
};
_g.D.d = function(n, t) {
    var u = !1;
    var f = !1;
    var i = _g.bb.a;
    if (n) {
        u = _g.bk.a(n);
        i = _g.b.a.idToName(n);
        f = _g.j.b(n)
    }
    var r = _g.D.k(i, n, t, u, f);
    r.c = n;
    return r
};
_g.D.m = function(n) {
    var t = new _g.D;
    try {
        t.c = _g.D.r(n.FolderId);
        t.b = _g.D.b(n.View, 1, 4, "View");
        t.i = _g.D.b(n.Width, 0, Number.MAX_VALUE, "Width");
        t.g = _g.D.b(n.SortOrder, 0, 1, "SortOrder");
        t.f = _g.D.b(n.SortColumn, 1, 12, "SortColumn");
        t.e = _g.D.b(n.ReadingPanePosition, 0, 3, "ReadingPanePosition");
        t.h = _g.D.q(n.IsExpanded);
        t.j = _g.D.b(n.SearchScope, 0, 3, "SearchScope")
    } catch (i) {
        return null
    }
    return t
};
_g.D.l = function(n) {
    var t = {};
    t.FolderId = n.c;
    t.View = n.a();
    t.Width = n.i;
    t.SortOrder = n.g;
    t.SortColumn = n.f;
    t.ReadingPanePosition = n.e;
    t.IsExpanded = n.h;
    t.SearchScope = n.j;
    return t
};
_g.D.a = function(n, t) {
    switch (_g.D.j(n)) {
        case "drafts":
            return _g.a.a().E ? "ItemLastModifiedTime" : "DateTimeCreated";
        case "outbox":
            return "DateTimeCreated";
        case "sentitems":
            return "DateTimeSent";
        case "deleteditems":
        case "recoverableitemsdeletions":
            return _g.D.c;
        default:
            return t
    }
};
_g.D.i = function(n, t) {
    return _g.D.j(n) === "deleteditems" ? _g.D.f : t
};
_g.D.j = function(n) {
    return _g.s.isInstanceOfType(n) ? n.Id : _g.b.a.idToName(n)
};
_g.D.k = function(n, t, i, r, u) {
    var f = new _g.D;
    f.b = _g.D.n(n, t, i || r);
    f.i = 375;
    if (n === "todosearch") {
        f.g = 0;
        f.f = 11
    } else {
        f.g = 1;
        f.f = 1
    }
    f.e = 3;
    f.h = !1;
    f.j = _g.D.o(n, i, u);
    return f
};
_g.D.n = function(n, t, i) {
    return i ? 3 : n === "drafts" || n === "junkemail" || n === "outbox" || n === "notes" ? 3 : n === "deleteditems" || n === "recoverableitemsdeletions" ? 2 : _g.D.p(t) ? 4 : 1
};
_g.D.p = function(n) {
    return _g.D.e && Array.contains(_g.D.g, n.Id)
};
_g.D.o = function(n, t, i) {
    if (i) return 2;
    else if (n === "inbox" && !t) return 0;
    return 2
};
_g.D.q = function(n) {
    if (!Boolean.isInstanceOfType(n)) throw Error.argumentType("value", Object.getType(n), Boolean, "");
    return n
};
_g.D.b = function(n, t, i, r) {
    _g.D.s(n, r);
    var u = n;
    _a.c.e(u, t, i, r);
    return n
};
_g.D.s = function(n, t) {
    if (!Number.isInstanceOfType(n)) throw Error.argument(t, "is not a number ");
    return n
};
_g.D.r = function(n) {
    if (!n) throw Error.argumentNull("FolderId", "is null or undefined ");
    return n
};
_g.D.prototype = {
    c: null,
    b: 0,
    i: 0,
    g: 0,
    f: 0,
    e: 0,
    h: !1,
    j: 0,
    d: !1,
    a: function() {
        return this.b === 3 || this.b === 4 || this.b === 5 ? this.b : _g.a.a().E ? _g.a.a().b().u().b ? 1 : 2 : this.b
    },
    k: function(n) {
        if (n === 3 || n === 4 || n === 5) {
            this.b = n;
            this.d = !0;
            return n
        }
        if (_g.a.a().E) {
            var t = _g.a.a().b();
            t.u().d(n === 1);
            t.Z(_g.a.a().b().x);
            if (this.b === 4) {
                this.b = n;
                this.d = !0
            }
            return n
        }
        if (this.b !== n) {
            this.b = n;
            this.d = !0
        }
        return n
    },
    n: function(n) {
        if (this.g !== n) {
            this.g = n;
            this.d = !0
        }
        return n
    },
    m: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.d = !0
        }
        return n
    },
    l: function(n) {
        if (this.e !== n) {
            this.e = n;
            this.d = !0
        }
        return n
    },
    p: function(n) {
        if (this.h !== n) {
            this.h = n;
            this.d = !0
        }
        return n
    },
    q: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.d = !0
        }
        return n
    },
    o: function() {
        return this.d
    }
};
_g.ea = function(n) {
    _g.ea.initializeBase(this, [n || new _g.eR]);
    this.bR();
    _a.s.a(this, "_GroupsSets")
};
_g.ea.$$cctor = function() {
    _a.n.a(_g.ea, _g.eR, _g.ea._C)
};
_g.ea._C = function(n) {
    return new _g.ea(n)
};
_g.ea.prototype = {
    b: function() {
        var i = !1;
        if (this.a())
            for (var t = 0; t < this.a().b(); t++) {
                var n = this.a().a(t);
                if (n && n.Groups && n.Groups.length > 0) {
                    i = !0;
                    break
                }
            }
        return i
    },
    a: function() {
        return this.bP(_g.eQ, "UnifiedGroupsSets")
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.c(n)
    },
    c: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.lg.prototype.C.call(this, n);
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["UnifiedGroupsSets"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.hF = function() {
    this.a = -1
};
_g.hF.a = function(n) {
    var t = new _g.hF;
    try {
        var i = JsonParser.deserialize(n);
        t.a = Number.isInstanceOfType(i.Width) ? i.Width : -1;
        Boolean.isInstanceOfType(i.IsConversationView) ? t.d(i.IsConversationView) : t.d(!0)
    } catch (r) {
        t.d(!0)
    }
    return t
};
_g.hF.prototype = {
    b: !1,
    c: !1,
    f: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.c = !0
        }
        return n
    },
    d: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.c = !0
        }
        return n
    },
    e: function() {
        var n = {};
        n.Width = this.a;
        n.IsConversationView = this.b;
        return n
    }
};
_g.bc = function(n) {
    this.f = Function.createDelegate(this, this.g);
    _g.bc.initializeBase(this);
    n || (n = new _g.eE);
    this.d(n);
    _a.s.a(this, "_MasterCategoryList")
};
_g.bc.$$cctor = function() {
    _a.n.a(_g.bc, _g.eE, _g.bc._C)
};
_g.bc.a = function(n, t, i, r) {
    t && (r || i);
    var f = !!n && n.b() > 0;
    var o = null;
    var e = !1;
    if (t) t && f && (o = new _a.j);
    else {
        var u = new _a.j;
        f && u.g(n.e());
        if (f && i && u.j(i)) {
            u.k(i);
            e = !0
        }
        if (r && !u.j(r)) {
            u.r(0, r);
            e = !0
        }
        e && (o = u)
    }
    return o
};
_g.bc.b = function(n, t, i, r) {
    t && (r || i);
    var f = !!n && n.b() > 0;
    var o = null;
    var e = !1;
    if (t) t && f && (o = new _a.j);
    else {
        var u = new _a.j;
        f && u.g(n.e());
        if (f && i && u.j(i)) {
            u.k(i);
            e = !0
        }
        if (r && !u.j(r)) {
            u.r(0, r);
            e = !0
        }
        e && (o = u)
    }
    return o
};
_g.bc._C = function(n) {
    return new _g.bc(n)
};
_g.bc.prototype = {
    e: function(n) {
        var t = [];
        n && n.length > 0 && Array.addRange(t, n);
        Array.addRange(t, this.a().f.f());
        t.sort(this.f);
        return t
    },
    c: function(n) {
        for (var i, t = 0; t < this.a().f.b(); t++) {
            i = this.a().f.c(t);
            if (i.bH.Name === n) return i
        }
        return null
    },
    g: function(n, t) {
        var r = n.bH.Name.toLowerCase();
        var i = t.bH.Name.toLowerCase();
        return r.localeCompare(i)
    },
    a: function() {
        return this.ca(_g.bg, _g.bC, "MasterList")
    },
    b: function(n) {
        this.bO("MasterList", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.h(n)
    },
    h: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var i = this;
            this.bK(function(n) {
                return new(_a.fT.$$(_g.bg, _g.bC))(n)
            }, ["MasterList", "DefaultList"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.bO = function(n) {
    _g.bO.resolveInheritance();
    this.r = this.J;
    _g.bO.initializeBase(this, [n || new _g.eO]);
    this.bR();
    _a.s.a(this, "_SafetyUserOptions")
};
_g.bO.$$cctor = function() {
    _a.n.a(_g.bO, _g.eO, _g.bO._C)
};
_g.bO.b = function() {
    if (!_g.bO.a) {
        var n = {};
        n.ReportToExternalSender = "Boolean";
        n.BlockContentFromUnknownSenders = "Boolean";
        n.TrustedListsOnly = "Boolean";
        _g.bO.a = n
    }
    return _g.bO.a
};
_g.bO._C = function(n) {
    return new _g.bO(n)
};
_g.bO.prototype = {
    f: null,
    a: !1,
    b: null,
    e: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.eJ("TrustedListsOnly")
        }
        return n
    },
    j: function(n) {
        this.b !== n && (this.b = n);
        return n
    },
    g: function() {
        return this.f
    },
    t: function() {
        return this.bH
    },
    s: function() {
        return "Safety.UserOptions"
    },
    _SafetyUserOptions: function() {
        this.f = new _g.fi(this, _g.bO.b())
    },
    c: function(n) {
        this.bI("ReportToExternalSender", n);
        return n
    },
    h: function(n) {
        this.bI("BlockContentFromUnknownSenders", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.k(n)
    },
    k: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.lg.prototype.C.call(this, n);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.E = function(n) {
    _g.E.initializeBase(this);
    n || (n = new _g.dO);
    this.d(n);
    _a.s.a(this, "_SessionSettings")
};
_g.E.$$cctor = function() {
    _a.n.a(_g.E, _g.dO, _g.E._C)
};
_g.E._C = function(n) {
    return new _g.E(n)
};
_g.E.prototype = {
    c: !1,
    f: function() {
        var n = this.bH.UserEmailAddress;
        if (n) {
            var t = n.indexOf("@");
            if (t > -1) return n.substr(t, n.length - t)
        }
        return null
    },
    b: function() {
        return this.bP(String, "UserProxyAddresses")
    },
    h: function(n) {
        this.bO("UserProxyAddresses", n);
        return n
    },
    a: function() {
        return this.bP(String, "NotManagedEmailAddresses")
    },
    g: function(n) {
        this.bO("NotManagedEmailAddresses", n);
        return n
    },
    k: function(n) {
        this.bI("DefaultFromAddress", n);
        return n
    },
    n: function(n) {
        this.bI("UserCulture", n);
        return n
    },
    m: function(n) {
        this.bI("IsUserCultureRightToLeft", n);
        return n
    },
    e: function() {
        return this.bP(_g.hi, "ConnectedAccountInfos")
    },
    j: function(n) {
        this.bO("ConnectedAccountInfos", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.o(n)
    },
    o: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var u = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["UserProxyAddresses", "NotManagedEmailAddresses", "DefaultFolderNames"], n, t);
            var r = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["DefaultFolderIds"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["ConnectedAccountInfos"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.fh = function(n, t) {
    this.a = n;
    this.b = t
};
_g.fh.b = function(n) {
    return _g.fh.a(n) ? new _g.fh(n.c().bH.SharePointTitle, n.c().bH.SharePointUrl) : null
};
_g.fh.a = function(n) {
    return !!n.c().bH.SharePointTitle && !!n.c().bH.SharePointUrl
};
_g.fh.prototype = {
    a: null,
    b: null
};

function SmimeControlSettings() {}
SmimeControlSettings.prototype = {
    CodePage: 0,
    CertificateSubjects: null,
    Culture: null,
    AttachmentSizeLimit: 0,
    OwaVersion: null,
    Strings: null,
    AllowUserChoiceOfSigningCertificate: !1,
    IncludeCertificateChainWithoutRootCertificate: !1,
    IncludeCertificateChainAndRootCertificate: !1,
    EncryptTemporaryBuffers: !1,
    SignedEmailCertificateInclusion: !1,
    IncludeSmimeCapabilitiesInMessage: !1,
    CopyRecipientHeaders: !1,
    OnlyUseSmartCard: !1,
    UseKeyIdentifier: !1,
    EncryptionAlgorithms: null,
    SigningAlgorithms: null,
    DiagnosticDumpsEnabled: !1,
    OwaControlVersion: null,
    a: function(n) {
        this.AllowUserChoiceOfSigningCertificate = n.AllowUserChoiceOfSigningCertificate;
        this.IncludeCertificateChainWithoutRootCertificate = n.IncludeCertificateChainWithoutRootCertificate;
        this.IncludeCertificateChainAndRootCertificate = n.IncludeCertificateChainAndRootCertificate;
        this.EncryptTemporaryBuffers = n.EncryptTemporaryBuffers;
        this.SignedEmailCertificateInclusion = n.SignedEmailCertificateInclusion;
        this.IncludeSmimeCapabilitiesInMessage = n.IncludeSMIMECapabilitiesInMessage;
        this.CopyRecipientHeaders = n.CopyRecipientHeaders;
        this.OnlyUseSmartCard = n.OnlyUseSmartCard;
        this.UseKeyIdentifier = n.UseKeyIdentifier;
        this.EncryptionAlgorithms = n.EncryptionAlgorithms;
        this.SigningAlgorithms = n.SigningAlgorithms
    }
};

function SmimeStrings() {
    this.PickCertDialogTitle = _wss.i.I;
    this.PickCertToEncrypt = _wss.i.P;
    this.PickCertToSign = _wss.i.C;
    this.PickCertToEncryptNotFound = _wss.i.E;
    this.PickCertToSignNotFound = _wss.i.D;
    this.PickEncryptCertToSign = _wss.i.J;
    this.ChooseAttachmentDialogTitle = _wss.i.c;
    this.SaveAttachmentDialogTitle = _wss.i.Q;
    this.TooLargeToBeAttached = _wss.i.K;
    this.ImageFilesFilter = _wss.i.Y;
    this.ExternalImageWarning = _wss.i.U;
    this.ExternalImageAltText = _wss.i.g
}
_g.A = function() {};
_g.A.e = function() {
    _g.A.a || _g.A.k();
    return _g.A.a
};
_g.A.m = function() {
    _g.A.b || _g.A.k();
    return _g.A.b
};
_g.A.n = function() {
    for (var i = new Array(_g.A.i), r = 0, n = 0; n < 100; n++) {
        var t = _g.A.e()[n];
        t && (i[r++] = _g.bg.c(n, t))
    }
    return i
};
_g.A.d = function(n) {
    var t = _g.A.e()[n];
    return t ? t : null
};
_g.A.g = function(n) {
    var t = _g.A.d(n);
    t || (t = _g.A.c[n]);
    return t ? t : null
};
_g.A.f = function(n) {
    for (var t = 0; t < 100; t++)
        if (_g.A.e()[t] === n || _g.A.c[t] === n) return t;
    return -1
};
_g.A.k = function() {
    _g.A.i = _g.A.h.length;
    _g.A.a = new Array(100);
    _g.A.a[15] = _wss.i.h;
    _g.A.a[53] = _wss.i.f;
    _g.A.a[55] = _wss.i.B;
    _g.A.a[63] = _wss.i.H;
    _g.A.a[69] = _wss.i.d;
    _g.A.a[77] = _wss.i.Z;
    _g.A.a[81] = _wss.i.L;
    _g.A.a[83] = _wss.i.T;
    _g.A.a[85] = _wss.i.N;
    _g.A.l = _g.A.j.length;
    _g.A.c = new Array(100);
    _g.A.c[5] = _wss.i.e;
    _g.A.b = [];
    Array.addRange(_g.A.b, _g.A.j);
    Array.addRange(_g.A.b, _g.A.h)
};
_g.a = function(n) {
    this.L = {};
    this.P = {};
    this.N = undefined;
    this.v = this.o;
    _g.a.initializeBase(this);
    n || (n = new _g.cy);
    this.d(n);
    _a.s.a(this, "_UserConfiguration")
};
_g.a.$$cctor = function() {
    _a.n.a(_g.a, _g.cy, _g.a._C)
};
_g.a.a = function() {
    if (!_g.a.b) {
        _g.a.b = new _g.a(_g.a.c());
        _g.a.b.Q = !0
    }
    return _g.a.b
};
_g.a.c = function() {
    var i = new _g.cy;
    var n = new _g.dU;
    n.TimeZone = null;
    n.WeekStartDay = 0;
    n.HourIncrement = 0;
    n.FirstWeekOfYear = 0;
    n.SpellingDictionaryLanguage = 0;
    n.MarkAsReadDelaytime = 0;
    n.NavigationBarWidth = 0;
    n.NavigationBarWidthRatio = "1.0";
    n.ShowUpNext = !0;
    n.MailFolderPaneExpanded = !1;
    n.IsFavoritesFolderTreeCollapsed = !1;
    n.IsMailRootFolderTreeCollapsed = !1;
    n.IsHashtagTreeCollapsed = !1;
    n.IsGroupsTreeCollapsed = !1;
    n.GroupSuggestionDismissalCount = 0;
    n.GroupSuggestionDismissalDate = null;
    n.TasksSearchScope = 0;
    n.UseDataCenterCustomTheme = 0;
    n.CheckForForgottenAttachments = !0;
    n.WorkingHours = new _g.dk;
    n.WorkingHours.WorkDays = 0;
    n.WorkingHours.WorkHoursEndTimeInMinutes = 0;
    n.WorkingHours.WorkHoursStartTimeInMinutes = 0;
    n.DefaultReminderTimeInMinutes = 15;
    n.TimeZone = "Pacific Standard Time";
    n.ShowInferenceUiElements = !1;
    n.ActiveSurvey = 0;
    n.CompletedSurveys = 0;
    n.DismissedSurveys = 0;
    n.LastSurveyDate = null;
    n.IsInferenceSurveyComplete = !1;
    n.InferenceSurveyDate = null;
    n.ModernGroupsFirstUseDate = null;
    n.ModernGroupsLastUseDate = null;
    n.ModernGroupsUseCount = 0;
    n.DontShowSurveys = !1;
    n.HasShownClutterBarIntroductionMouse = !1;
    n.HasShownClutterDeleteAllIntroductionMouse = !1;
    n.HasShownClutterBarIntroductionTNarrow = !1;
    n.HasShownClutterDeleteAllIntroductionTNarrow = !1;
    n.HasShownClutterBarIntroductionTWide = !1;
    n.HasShownClutterDeleteAllIntroductionTWide = !1;
    n.ShowReadingPaneOnFirstLoad = !1;
    n.NavigationPaneViewOption = 0;
    n.ReportJunkSelected = !1;
    n.CheckForReportJunkDialog = !1;
    n.HasShownIntroductionForModernGroups = !1;
    n.LearnabilityTypesShown = 0;
    n.CalendarSearchUseCount = 0;
    n.FrequentlyUsedFolders = null;
    n.BuildGreenLightSurveyLastShownDate = null;
    n.ArchiveFolderId = null;
    n.MruEmojis = null;
    n.WeatherEnabled = 0;
    n.WeatherUnit = 0;
    n.WeatherLocations = new Array(0);
    n.IsFocusedInboxCapable = !1;
    n.IsFocusedInboxEnabled = !1;
    n.IsFocusedInboxOnAdminLastUpdateTime = null;
    n.IsFocusedInboxOnLastUpdateTime = null;
    i.UserOptions = n;
    var r = new _g.dO;
    r.UserCulture = null;
    r.IsPublicComputerSession = !0;
    i.SessionSettings = r;
    var e = new _g.gt;
    i.PolicySettings = e;
    var t = new _g.db;
    t.CalendarViewTypeNarrow = 1;
    t.CalendarViewTypeWide = 4;
    t.CalendarViewTypeDesktop = 4;
    t.CalendarSidePanelIsExpanded = !0;
    t.CalendarAgendaViewIsExpandedMouse = !0;
    t.CalendarAgendaViewIsExpandedTWide = !0;
    t.SchedulingViewType = 1;
    t.SearchHistory = new Array(0);
    t.BookingCalendarViewType = 1;
    t.SelectedBookingSubModule = 1;
    t.BookingSidePanelIsExpanded = !0;
    t.BookingsTilesDismissed = 0;
    t.BookingsTilesVisited = 0;
    t.EdgePromotionRejectedLast = !1;
    t.PinnedComposeAddin = null;
    t.PinnedReadAddin = null;
    i.ViewStateConfiguration = t;
    var f = new _g.dN;
    i.SegmentationSettings = f;
    var u = new _g.du;
    i.ApplicationSettings = u;
    i.MaxRecipientsPerMessage = 2e3;
    i.PublicComputersDetectionEnabled = !1;
    return i
};
_g.a._C = function(n) {
    return new _g.a(n)
};
_g.a.prototype = {
    M: null,
    Q: !1,
    S: !1,
    O: function() {
        if (this.N === undefined) {
            var t = !1;
            var i;
            if (this.G() && this.G().b() > 0)
                for (var n = 0; n < this.G().b(); n++) {
                    i = this.G().a(n);
                    if (!i.IsArchive) {
                        t = !0;
                        break
                    }
                }
            this.N = t
        }
        return this.N
    },
    p: function() {
        return this.a().bH.TimeFormat
    },
    s: function() {
        return this.a().bH.DateFormat
    },
    m: function() {
        return this.a().bH.TimeZone
    },
    H: null,
    r: function() {
        return this.H
    },
    y: function(n) {
        this.H = n;
        return n
    },
    o: function() {
        return this.c().bH.UserCulture
    },
    A: function() {
        return this.a().bH.WeekStartDay
    },
    z: function() {
        return this.a().ci()
    },
    w: function() {
        var n = this.p();
        return !!n && n.indexOf("H") > -1
    },
    u: function() {
        if (!this.M) {
            this.M = new _a.eu;
            var t = this.a().bH.MailboxTimeZoneOffset;
            var n = t;
            n = n || new Array(0);
            this.M.h(n)
        }
        return this.M
    },
    T: function() {
        return this.e() && this.c() ? this.e().bH.InstantMessage && (this.E || !_j.h.b(this.c().bH.UserSipUri)) : !1
    },
    U: function() {
        return this.c().bH.IsPublicLogon || this.bH.PublicComputersDetectionEnabled && this.c().bH.IsPublicComputerSession
    },
    g: function() {
        return this.c().bH.IsUserCultureRightToLeft
    },
    E: !1,
    j: function() {
        return this.E
    },
    R: function() {
        for (var u = this.c().bH, i = this.c().bH.DefaultFolderNames, f = u.DefaultFolderIds, e = i ? i.length : 0, t = 0; t < e; t++) {
            var n = f[t];
            if (n) {
                n.__type = _g.m._dataContractName;
                var r = i[t].toLowerCase();
                this.L[r] = n;
                this.P[n.Id] = r
            }
        }
    },
    K: function(n, t) {
        t.__type = _g.m._dataContractName;
        if (!(n in this.L)) {
            this.L[n] = t;
            this.P[t.Id] = n
        }
    },
    nameToId: function(n) {
        return this.L[n] || null
    },
    idToName: function(n) {
        return n ? this.P[n.Id] || _g.bb.a : _g.bb.a
    },
    doesIdEqualName: function(n, t) {
        var i = this.idToName(n);
        return i === t
    },
    a: function() {
        return this.bS(_g.U, "UserOptions")
    },
    c: function() {
        return this.bS(_g.E, "SessionSettings")
    },
    e: function() {
        return this.bS(_g.bI, "SegmentationSettings")
    },
    f: function() {
        return this.bH.AttachmentPolicy
    },
    k: function() {
        return this.bH.PolicySettings
    },
    n: function() {
        return this.bS(_g.dp, "ApplicationSettings")
    },
    b: function() {
        return this.bS(_g.by, "ViewStateConfiguration")
    },
    h: function() {
        return this.bS(_g.bc, "MasterCategoryList")
    },
    V: function(n) {
        this.bI("SmimeAdminSettings", n);
        return n
    },
    q: function() {
        return this.bS(_g.bO, "SafetyUserOptions")
    },
    I: function() {
        return this.bS(_g.ea, "GroupsSets")
    },
    G: function() {
        return this.bP(_g.eN, "RetentionPolicyTags")
    },
    t: function() {
        return this.bH.RecoverDeletedItemsEnabled
    },
    C: function() {
        return this.bH.HexCID
    },
    D: function() {
        return this.bH.IsConsumerChild
    },
    x: function() {
        return this.bH.AdMarket
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.W(n)
    },
    W: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var h = this;
            this.bK(function(n) {
                return new _g.U(n)
            }, ["UserOptions"], n, t);
            var s = this;
            this.bK(function(n) {
                return new _g.E(n)
            }, ["SessionSettings"], n, t);
            var c = this;
            this.bK(function(n) {
                return new _g.bI(n)
            }, ["SegmentationSettings"], n, t);
            var a = this;
            this.bK(function(n) {
                return new _g.dp(n)
            }, ["ApplicationSettings"], n, t);
            var l = this;
            this.bK(function(n) {
                return new _g.by(n)
            }, ["ViewStateConfiguration"], n, t);
            var o = this;
            this.bK(function(n) {
                return new _g.bc(n)
            }, ["MasterCategoryList"], n, t);
            var r = this;
            this.bK(function(n) {
                return new _g.bO(n)
            }, ["SafetyUserOptions"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _g.ea(n)
            }, ["GroupsSets"], n, t);
            var u = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["RetentionPolicyTags"], n, t);
            var e = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["FlightConfiguration"], n, t);
            var f = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["OutlookFavorites"], n, t);
            this.cg(["WhenOutlookFavoritesChanged", "MailboxCreateDate"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.fi = function(n, t) {
    this.f = Function.createDelegate(this, this.i);
    this.c = {};
    this.d = n;
    this.d.r(this.f);
    this.e = t
};
_g.fi.prototype = {
    d: null,
    e: null,
    b: function() {
        return this.d.s()
    },
    g: function() {
        this.c = {}
    },
    a: function() {
        var r = _ff.i.a(this.c);
        if (!r) return null;
        var u = new Array(r);
        var i = 0;
        var n = this.c;
        for (var t in n) {
            var f = {
                key: t,
                value: n[t]
            };
            u[i] = this.h(f);
            i++
        }
        return u
    },
    i: function(n, t) {
        if (t in this.e) {
            var i = this.e[t];
            var u = new _g.cB(i);
            var r = this.d.t()[t];
            u.Value = i === "Boolean" ? [r ? r.toString() : "false"] : i === "Integer32" || i === "Integer64" || i === "UnsignedInteger32" || i === "UnsignedInteger64" || i === "Byte" ? [Number.isInstanceOfType(r) ? r.toString() : null] : i !== "StringArray" ? [r ? r.toString() : null] : r;
            this.c[t] = u
        }
    },
    h: function(n) {
        var t = new _g.dT(new _g.cB("String"));
        t.DictionaryKey.Value = [n.key];
        t.DictionaryValue = n.value;
        return t
    }
};
_g.U = function(n) {
    _g.U.resolveInheritance();
    this.r = this.J;
    _g.U.initializeBase(this, [n || new _g.dU]);
    this.bR();
    _a.s.a(this, "_UserOptions")
};
_g.U.$$cctor = function() {
    _a.n.a(_g.U, _g.dU, _g.U._C)
};
_g.U.b = function() {
    if (!_g.U.a) {
        var n = {};
        n.SendAsMruAddresses = "StringArray";
        n.CheckForForgottenAttachments = "Boolean";
        n.NewEnabledPonts = "Integer32";
        n.NavigationBarWidth = "Integer32";
        n.NavigationBarWidthRatio = "String";
        n.MailFolderPaneExpanded = "Boolean";
        n.IsMailRootFolderTreeCollapsed = "Boolean";
        n.IsFavoritesFolderTreeCollapsed = "Boolean";
        n.IsHashtagTreeCollapsed = "Boolean";
        n.IsGroupsTreeCollapsed = "Boolean";
        n.GroupSuggestionDismissalCount = "Integer32";
        n.GroupSuggestionDismissalDate = "String";
        n.FormatBarState = "Integer32";
        n.MruFonts = "StringArray";
        n.AutoAddSignatureOnMobile = "Boolean";
        n.SignatureTextOnMobile = "String";
        n.UseDesktopSignature = "Boolean";
        n.IsOptimizedForAccessibility = "Boolean";
        n.ShowInferenceUiElements = "Boolean";
        n.ClutterTimeWindow = "Integer32";
        n.ShowUpNext = "Boolean";
        n.NumberOfEmailsWouldGoToClutter = "Integer32";
        n.ClutterTimeWindowUnit = "Integer32";
        n.HasEverClassifiedAsClutter = "Boolean";
        n.KeyboardShortcutsMode = "Integer32";
        n.ActiveSurvey = "Integer32";
        n.CompletedSurveys = "Integer32";
        n.DismissedSurveys = "Integer32";
        n.LastSurveyDate = "String";
        n.DontShowSurveys = "Boolean";
        n.InferenceSurveyDate = "String";
        n.IsInferenceSurveyComplete = "Boolean";
        n.HasShownClutterBarIntroductionMouse = "Boolean";
        n.HasShownClutterDeleteAllIntroductionMouse = "Boolean";
        n.HasShownClutterReadyIntroductionMouse = "Boolean";
        n.HasShownClutterBarIntroductionTNarrow = "Boolean";
        n.HasShownClutterDeleteAllIntroductionTNarrow = "Boolean";
        n.HasShownClutterReadyIntroductionTNarrow = "Boolean";
        n.HasShownClutterBarIntroductionTWide = "Boolean";
        n.HasShownClutterDeleteAllIntroductionTWide = "Boolean";
        n.HasShownClutterReadyIntroductionTWide = "Boolean";
        n.ShowReadingPaneOnFirstLoad = "Boolean";
        n.NavigationPaneViewOption = "Integer32";
        n.SmimeEncrypt = "Boolean";
        n.SmimeSign = "Boolean";
        n.ManuallyPickCertificate = "Boolean";
        n.SigningCertificateSubject = "String";
        n.SigningCertificateId = "String";
        n.ReportJunkSelected = "Boolean";
        n.CheckForReportJunkDialog = "Boolean";
        n.HasShownIntroductionForModernGroups = "Boolean";
        n.LearnabilityTypesShown = "Integer32";
        n.ModernGroupsFirstUseDate = "String";
        n.ModernGroupsLastUseDate = "String";
        n.ModernGroupsUseCount = "Integer32";
        n.CalendarSearchUseCount = "Integer32";
        n.FrequentlyUsedFolders = "StringArray";
        n.FavoriteFolders = "StringArray";
        n.BuildGreenLightSurveyLastShownDate = "String";
        n.ArchiveFolderId = "String";
        n.MruEmojis = "StringArray";
        n.WeatherEnabled = "Integer32";
        n.WeatherUnit = "Integer32";
        n.WeatherLocationBookmark = "Integer32";
        n.WeatherLocations = "StringArray";
        n.IsReplyAllTheDefaultResponse = "Boolean";
        n.IsZenSubscribed = "Boolean";
        n.HideUserVoiceSatisfactionWidget = "Boolean";
        n.UserVoiceSatisfactionWidgetFirstUseDate = "String";
        n.MailSendUndoInterval = "Integer32";
        n.ExtensibilityMinibarOn = "Boolean";
        n.IsFocusedInboxCapable = "Boolean";
        n.IsFocusedInboxEnabled = "Boolean";
        n.IsFocusedInboxOnAdminOverride = "Boolean";
        n.IsFocusedInboxOnLastUpdateTime = "String";
        n.IsFocusedInboxOnAdminLastUpdateTime = "String";
        n.IsFocusedInboxFeatureSupported = "Boolean";
        n.FocusedInboxServerOverride = "Boolean";
        n.WebSuggestedRepliesEnabledForUser = "Boolean";
        _g.U.a = n
    }
    return _g.U.a
};
_g.U._C = function(n) {
    return new _g.U(n)
};
_g.U.prototype = {
    u: null,
    h: function() {
        return this.u
    },
    s: function() {
        return "OWA.UserOptions"
    },
    t: function() {
        return this.bH
    },
    b: function() {
        return this.q() !== "AlwaysSend"
    },
    X: function() {
        return this.I() === 1 || this.I() === 4
    },
    y: function(n, t) {
        return n && this.bH.DefaultMeetingDuration >= 0 ? this.bH.DefaultMeetingDuration * 6e4 : t
    },
    di: function(n) {
        this.bI("IsFocusedInboxOnLastUpdateTime", n)
    },
    _UserOptions: function() {
        this.u = new _g.fi(this, _g.U.b())
    },
    cf: function(n) {
        this.bI("WeekStartDay", n);
        return n
    },
    bw: function(n) {
        this.bI("HourIncrement", n);
        return n
    },
    bE: function(n) {
        this.bI("ShowWeekNumbers", n);
        return n
    },
    ci: function() {
        return this.bQ("FirstWeekOfYear", 0)
    },
    ba: function(n) {
        this.bI("FirstWeekOfYear", n);
        return n
    },
    P: function() {
        return this.bQ("WeatherEnabled", 0)
    },
    cc: function(n) {
        this.bI("WeatherEnabled", n);
        return n
    },
    bo: function() {
        return this.bQ("WeatherUnit", 0)
    },
    ce: function(n) {
        this.bI("WeatherUnit", n);
        return n
    },
    D: function() {
        return this.bP(_g.di, "WeatherLocations")
    },
    cd: function(n) {
        this.bO("WeatherLocations", n);
        return n
    },
    bi: function(n) {
        this.bI("WeatherLocationBookmark", n);
        return n
    },
    H: function() {
        return this.bQ("LocalEventsEnabled", 0)
    },
    be: function(n) {
        this.bI("LocalEventsEnabled", n);
        return n
    },
    bz: function(n) {
        this.bI("LocalEventsLocation", n);
        return n
    },
    bt: function(n) {
        this.bI("EnableReminders", n);
        return n
    },
    cD: function(n) {
        this.bI("EnableReminderSound", n);
        return n
    },
    A: function() {
        return this.bQ("NewItemNotify", 0)
    },
    S: function(n) {
        this.bI("NewItemNotify", n);
        return n
    },
    bV: function(n) {
        this.bI("SmimeEncrypt", n);
        return n
    },
    bX: function(n) {
        this.bI("SmimeSign", n);
        return n
    },
    cn: function(n) {
        this.bI("AlwaysShowBcc", n);
        return n
    },
    co: function(n) {
        this.bI("AlwaysShowFrom", n);
        return n
    },
    m: function() {
        return this.bQ("ComposeMarkup", "Html")
    },
    cw: function(n) {
        this.bI("ComposeMarkup", n);
        return n
    },
    cu: function(n) {
        this.bI("ComposeFontName", n);
        return n
    },
    cv: function(n) {
        this.bI("ComposeFontSize", n);
        return n
    },
    cs: function(n) {
        this.bI("ComposeFontColor", n);
        return n
    },
    ch: function() {
        return this.bQ("ComposeFontFlags", 0)
    },
    ct: function(n) {
        this.bI("ComposeFontFlags", n);
        return n
    },
    bq: function(n) {
        this.bI("AutoAddSignature", n);
        return n
    },
    cr: function(n) {
        this.bI("AutoAddSignatureOnReply", n);
        return n
    },
    bG: function(n) {
        this.bI("SignatureText", n);
        return n
    },
    bF: function(n) {
        this.bI("SignatureHtml", n);
        return n
    },
    cq: function(n) {
        this.bI("AutoAddSignatureOnMobile", n);
        return n
    },
    df: function(n) {
        this.bI("SignatureTextOnMobile", n);
        return n
    },
    dg: function(n) {
        this.bI("UseDesktopSignature", n);
        return n
    },
    f: function() {
        return this.bQ("PreviewMarkAsRead", "Delayed")
    },
    U: function(n) {
        this.bI("PreviewMarkAsRead", n);
        return n
    },
    L: function() {
        return this.bQ("EmailComposeMode", "Inline")
    },
    cB: function(n) {
        this.bI("EmailComposeMode", n);
        return n
    },
    W: function() {
        return this.bP(String, "SendAsMruAddresses")
    },
    bC: function(n) {
        this.bO("SendAsMruAddresses", n);
        return n
    },
    br: function(n) {
        this.bI("CheckForForgottenAttachments", n);
        return n
    },
    e: function() {
        return this.bH.MarkAsReadDelaytime
    },
    bB: function(n) {
        this.bI("MarkAsReadDelaytime", n);
        return n
    },
    p: function() {
        return this.bQ("NextSelection", "Previous")
    },
    T: function(n) {
        this.bI("NextSelection", n);
        return n
    },
    q: function() {
        return this.bQ("ReadReceipt", "DoNotAutomaticallySend")
    },
    dc: function(n) {
        this.bI("ReadReceipt", n);
        return n
    },
    cC: function(n) {
        this.bI("EmptyDeletedItemsOnLogoff", n);
        return n
    },
    cY: function(n) {
        this.bI("NavigationBarWidth", n);
        return n
    },
    cZ: function(n) {
        this.bI("NavigationBarWidthRatio", n);
        return n
    },
    cW: function(n) {
        this.bI("MailFolderPaneExpanded", n);
        return n
    },
    cS: function(n) {
        this.bI("IsFavoritesFolderTreeCollapsed", n);
        return n
    },
    cT: function(n) {
        this.bI("IsHashtagTreeCollapsed", n);
        return n
    },
    Q: function(n) {
        this.bI("IsGroupsTreeCollapsed", n);
        return n
    },
    de: function(n) {
        this.bI("ShowReadingPaneOnFirstLoad", n);
        return n
    },
    I: function() {
        return this.bQ("NavigationPaneViewOption", 0)
    },
    da: function(n) {
        this.bI("NavigationPaneViewOption", n);
        return n
    },
    cU: function(n) {
        this.bI("IsMailRootFolderTreeCollapsed", n);
        return n
    },
    bn: function() {
        return this.bP(String, "MruEmojis")
    },
    cX: function(n) {
        this.bO("MruEmojis", n);
        return n
    },
    bY: function(n) {
        this.bI("ThemeStorageId", n);
        return n
    },
    bx: function(n) {
        this.bI("IsOptimizedForAccessibility", n);
        return n
    },
    v: function() {
        return this.bQ("NewEnabledPonts", 0)
    },
    x: function(n) {
        this.bI("NewEnabledPonts", n);
        return n
    },
    bA: function(n) {
        this.bI("ManuallyPickCertificate", n);
        return n
    },
    bU: function(n) {
        this.bI("SigningCertificateSubject", n);
        return n
    },
    bT: function(n) {
        this.bI("SigningCertificateId", n);
        return n
    },
    n: function() {
        return this.bQ("ConversationSortOrder", "Chronological")
    },
    bs: function(n) {
        this.bI("ConversationSortOrder", n);
        return n
    },
    o: function() {
        return this.bH.HideDeletedItems
    },
    bv: function(n) {
        this.bI("HideDeletedItems", n);
        return n
    },
    dd: function(n) {
        this.bI("SendAddressDefault", n);
        return n
    },
    w: function() {
        return this.bS(_g.cv, "WorkingHours")
    },
    cy: function(n) {
        this.bI("DefaultReminderTimeInMinutes", n);
        return n
    },
    N: function() {
        return this.bQ("KeyboardShortcutsMode", 0)
    },
    by: function(n) {
        this.bI("KeyboardShortcutsMode", n);
        return n
    },
    a: function() {
        return this.bH.ShowInferenceUiElements
    },
    bD: function(n) {
        this.bI("ShowInferenceUiElements", n);
        return n
    },
    cI: function(n) {
        this.bI("HasShownClutterBarIntroductionMouse", n);
        return n
    },
    cL: function(n) {
        this.bI("HasShownClutterDeleteAllIntroductionMouse", n);
        return n
    },
    cO: function(n) {
        this.bI("HasShownClutterReadyIntroductionMouse", n);
        return n
    },
    cJ: function(n) {
        this.bI("HasShownClutterBarIntroductionTNarrow", n);
        return n
    },
    cM: function(n) {
        this.bI("HasShownClutterDeleteAllIntroductionTNarrow", n);
        return n
    },
    cP: function(n) {
        this.bI("HasShownClutterReadyIntroductionTNarrow", n);
        return n
    },
    cK: function(n) {
        this.bI("HasShownClutterBarIntroductionTWide", n);
        return n
    },
    cN: function(n) {
        this.bI("HasShownClutterDeleteAllIntroductionTWide", n);
        return n
    },
    cQ: function(n) {
        this.bI("HasShownClutterReadyIntroductionTWide", n);
        return n
    },
    z: function() {
        return this.bQ("LearnabilityTypesShown", 0)
    },
    G: function(n) {
        this.bI("LearnabilityTypesShown", n);
        return n
    },
    bh: function(n) {
        this.bI("ShowSenderOnTopInListView", n);
        return n
    },
    bg: function(n) {
        this.bI("ShowPreviewTextInListView", n);
        return n
    },
    V: function(n) {
        this.bI("ShowUpNext", n);
        return n
    },
    bu: function(n) {
        this.bI("GlobalReadingPanePosition", n);
        return n
    },
    g: function() {
        return this.bH.ReportJunkSelected
    },
    k: function(n) {
        this.bI("ReportJunkSelected", n);
        return n
    },
    c: function() {
        return this.bH.CheckForReportJunkDialog
    },
    j: function(n) {
        this.bI("CheckForReportJunkDialog", n);
        return n
    },
    bc: function(n) {
        this.bI("IsInferenceSurveyComplete", n);
        return n
    },
    K: function(n) {
        this.bI("ActiveSurvey", n);
        return n
    },
    Y: function(n) {
        this.bI("CompletedSurveys", n);
        return n
    },
    cz: function(n) {
        this.bI("DismissedSurveys", n);
        return n
    },
    O: function() {
        return this.bW("LastSurveyDate")
    },
    R: function(n) {
        this.cm("LastSurveyDate", n);
        return n
    },
    Z: function(n) {
        this.bI("DontShowSurveys", n);
        return n
    },
    bb: function(n) {
        this.cm("InferenceSurveyDate", n);
        return n
    },
    bl: function() {
        return this.bP(String, "FrequentlyUsedFolders")
    },
    cF: function(n) {
        this.bO("FrequentlyUsedFolders", n);
        return n
    },
    M: function() {
        return this.bP(String, "FavoriteFolders")
    },
    cE: function(n) {
        this.bO("FavoriteFolders", n);
        return n
    },
    cp: function(n) {
        this.bI("ArchiveFolderId", n);
        return n
    },
    bZ: function(n) {
        this.bI("UseBrightCalendarColorThemeInOwa", n);
        return n
    },
    bd: function(n) {
        this.bI("IsReplyAllTheDefaultResponse", n);
        return n
    },
    cV: function(n) {
        this.bI("LinkPreviewEnabled", n);
        return n
    },
    cR: function(n) {
        this.bI("HideUserVoiceSatisfactionWidget", n);
        return n
    },
    cl: function() {
        return this.bW("UserVoiceSatisfactionWidgetFirstUseDate")
    },
    dh: function(n) {
        this.cm("UserVoiceSatisfactionWidgetFirstUseDate", n);
        return n
    },
    bf: function(n) {
        this.bI("MailSendUndoInterval", n);
        return n
    },
    cx: function(n) {
        this.bI("DefaultMeetingDuration", n);
        return n
    },
    E: function(n) {
        this.bI("IsFocusedInboxEnabled", n);
        return n
    },
    cG: function(n) {
        this.bI("GroupSuggestionDismissalCount", n);
        return n
    },
    bm: function() {
        return this.bW("GroupSuggestionDismissalDate")
    },
    cH: function(n) {
        this.cm("GroupSuggestionDismissalDate", n);
        return n
    },
    ck: function() {
        return this.bP(_g.hh, "UserProfileV2")
    },
    db: function(n) {
        this.bI("PreferAccessibleContent", n);
        return n
    },
    bk: function() {
        return this.bQ("ClientTypeOptInState", 0)
    },
    cj: function() {
        return this.bQ("TasksClientTypeOptInState", 0)
    },
    bp: function(n) {
        this.bI("AgendaPaneEnabled", n);
        return n
    },
    bj: function(n) {
        this.bI("WebSuggestedRepliesEnabledForUser", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.dj(n)
    },
    dj: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.lg.prototype.C.call(this, n);
            var f = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["WeatherLocations"], n, t);
            var e = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["SendAsMruAddresses", "MruFonts", "MruEmojis", "FrequentlyUsedFolders", "FavoriteFolders", "FavoriteNodes", "QuickNotes", "FavoriteTimezonesForDisplay", "InboxPlusTabs", "InboxPlusWatermarks"], n, t);
            var u = this;
            this.bK(function(n) {
                return new _g.cv(n)
            }, ["WorkingHours"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["MailboxTimeZoneOffset"], n, t);
            var r = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["UserProfileV2"], n, t);
            this.cg(["LastSurveyDate", "PeopleIKnowFirstUseDate", "PeopleIKnowLastUseDate", "ModernGroupsFirstUseDate", "ModernGroupsLastUseDate", "BuildGreenLightSurveyLastShownDate", "InferenceSurveyDate", "UserVoiceSatisfactionWidgetFirstUseDate", "IsFocusedInboxOnLastUpdateTime", "IsFocusedInboxOnAdminLastUpdateTime", "GroupSuggestionDismissalDate"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.by = function(n) {
    this.j = {};
    _g.by.resolveInheritance();
    this.r = this.J;
    _g.by.initializeBase(this, [n || new _g.db]);
    this.bR();
    _a.s.a(this, "_ViewStateConfiguration")
};
_g.by.$$cctor = function() {
    _a.n.a(_g.by, _g.db, _g.by._C)
};
_g.by.b = function() {
    if (!_g.by.a) {
        var n = {};
        n.CalendarSidePanelIsExpanded = "Boolean";
        n.CalendarViewTypeDesktop = "Integer32";
        n.CalendarViewTypeNarrow = "Integer32";
        n.CalendarViewTypeWide = "Integer32";
        n.SchedulingViewType = "Integer32";
        n.SchedulingLastUsedRoomListName = "String";
        n.SchedulingLastUsedRoomListEmailAddress = "String";
        n.CalendarSidePanelMonthPickerCount = "Integer32";
        n.SearchHistory = "StringArray";
        n.FolderViewState = "StringArray";
        n.PeopleHubDisplayOption = "Integer32";
        n.PeopleHubSortOption = "Integer32";
        n.SelectedCalendarsDesktop = "StringArray";
        n.SelectedCalendarsTWide = "StringArray";
        n.SelectedCalendarsTNarrow = "StringArray";
        n.AttachmentsFilePickerViewTypeForMouse = "Integer32";
        n.AttachmentsFilePickerViewTypeForTouch = "Integer32";
        n.AttachmentsFilePickerHideBanner = "Boolean";
        n.AttachmentsFilePickerHideAddBox = "Boolean";
        n.AttachmentsFilePickerHideAddDropbox = "Boolean";
        n.AttachmentsFilePickerHideAddOneDriveConsumer = "Boolean";
        n.AttachmentsFilePickerHideAddGDrive = "Boolean";
        n.AttachOrShareLocalFiles = "Integer32";
        n.AttachOrShareCloudFiles = "Integer32";
        n.AttachOrShareGroupsFiles = "Integer32";
        n.BookmarkedWeatherLocations = "StringArray";
        n.CurrentWeatherLocationBookmarkIndex = "Integer32";
        n.TemperatureUnit = "Integer32";
        n.GlobalFolderViewState = "String";
        n.CalendarAgendaViewIsExpandedMouse = "Boolean";
        n.CalendarAgendaViewIsExpandedTWide = "Boolean";
        n.DefaultSystemCategoriesSetForFolderPane = "StringArray";
        n.SystemCategoriesToShowAsFilter = "StringArray";
        n.SystemCategoriesToShowInFolderPane = "StringArray";
        n.UserCategoriesToShowAsFilter = "StringArray";
        n.UserCategoriesToShowInFolderPane = "StringArray";
        n.ShowCategoryColumnOnMessageItems = "Boolean";
        n.MailLeftSwipeAction = "Integer32";
        n.MailRightSwipeAction = "Integer32";
        n.MailTriageOnHoverActions = "StringArray";
        n.FocusedViewWatermark = "String";
        n.FocusedInboxBitFlags = "Integer32";
        n.ClutterViewWatermark = "String";
        n.SelectedBookingMailbox = "String";
        n.SelectedBookingMailboxDisplayName = "String";
        n.SelectedBookingSubModule = "Integer32";
        n.BookingCalendarViewType = "Integer32";
        n.BookingSidePanelIsExpanded = "Integer32";
        n.BookingsTilesVisited = "Integer32";
        n.BookingsTilesDismissed = "Integer32";
        n.PeopleHubViewOptions = "String";
        n.BundleEntries = "StringArray";
        n.EdgePromotionRejectedLast = "Boolean";
        n.PinnedComposeAddin = "String";
        n.PinnedReadAddin = "String";
        _g.by.a = n
    }
    return _g.by.a
};
_g.by._C = function(n) {
    return new _g.by(n)
};
_g.by.prototype = {
    D: !1,
    E: !1,
    x: null,
    L: null,
    c: function() {
        return this.L
    },
    t: function() {
        return this.bH
    },
    s: function() {
        return "OWA.ViewStateConfiguration"
    },
    k: function(n) {
        if (n.o()) {
            this.j[n.c.Id] || (this.j[n.c.Id] = n);
            this.ce();
            n.d = !1;
            this.eJ("FolderSettingsChanged")
        }
    },
    o: function(n) {
        this.apcl("FolderSettingsChanged", n)
    },
    v: function(n) {
        this.rpcl("FolderSettingsChanged", n)
    },
    z: function(n) {
        this.apcl("GlobalFolderSettingsChanged", n)
    },
    G: function(n) {
        this.rpcl("GlobalFolderSettingsChanged", n)
    },
    g: function(n, t, i) {
        this.be();
        var r = this.j[n.Id] || _g.D.d(n, t);
        if (i) {
            r.n(1);
            r.m(1)
        }
        return r
    },
    u: function() {
        if (!this.E) {
            this.x = _g.hF.a(this.bH.GlobalFolderViewState);
            this.E = !0
        }
        return this.x
    },
    Z: function(n) {
        if (n.c) {
            this.bA(JsonParser.serialize(n.e()));
            n.c = !1;
            this.eJ("GlobalFolderSettingsChanged")
        }
    },
    _ViewStateConfiguration: function() {
        this.L = new _g.fi(this, _g.by.b())
    },
    M: function() {
        this.eJ("FolderSettingsChanged")
    },
    ba: function() {
        this.eJ("GlobalFolderSettingsChanged")
    },
    ce: function() {
        var i = [];
        var t = this.j;
        for (var n in t) {
            var u = {
                key: n,
                value: t[n]
            };
            var r = _g.D.l(u.value);
            Array.add(i, JsonParser.serialize(r))
        }
        this.bz(new _a.j(i))
    },
    be: function() {
        if (!this.D) {
            this.j = {};
            if (this.A()) {
                for (var i = this.A().b(), t = 0; t < i; t++) try {
                    var n = _g.D.m(JsonParser.deserialize(this.A().a(t)));
                    n && !_g.j.b(n.c) && (this.j[n.c.Id] = n)
                } catch (r) {}
                this.D = !0
            }
        }
    },
    bu: function(n) {
        this.bI("CalendarViewTypeNarrow", n);
        return n
    },
    bv: function(n) {
        this.bI("CalendarViewTypeWide", n);
        return n
    },
    bt: function(n) {
        this.bI("CalendarViewTypeDesktop", n);
        return n
    },
    br: function(n) {
        this.bI("CalendarSidePanelIsExpanded", n);
        return n
    },
    bs: function(n) {
        this.bI("CalendarSidePanelMonthPickerCount", n);
        return n
    },
    bb: function() {
        return this.bP(String, "SelectedCalendarsDesktop")
    },
    bV: function(n) {
        this.bO("SelectedCalendarsDesktop", n);
        return n
    },
    bd: function() {
        return this.bP(String, "SelectedCalendarsTWide")
    },
    bY: function(n) {
        this.bO("SelectedCalendarsTWide", n);
        return n
    },
    bc: function() {
        return this.bP(String, "SelectedCalendarsTNarrow")
    },
    bX: function(n) {
        this.bO("SelectedCalendarsTNarrow", n);
        return n
    },
    A: function() {
        return this.bP(String, "FolderViewState")
    },
    bz: function(n) {
        this.bO("FolderViewState", n);
        return n
    },
    bA: function(n) {
        this.bI("GlobalFolderViewState", n);
        return n
    },
    bT: function(n) {
        this.bI("SchedulingViewType", n);
        return n
    },
    b: function() {
        return this.bH.SchedulingLastUsedRoomListName
    },
    f: function(n) {
        this.bI("SchedulingLastUsedRoomListName", n);
        return n
    },
    a: function() {
        return this.bH.SchedulingLastUsedRoomListEmailAddress
    },
    e: function(n) {
        this.bI("SchedulingLastUsedRoomListEmailAddress", n);
        return n
    },
    w: function() {
        return this.bP(String, "SearchHistory")
    },
    K: function(n) {
        this.bO("SearchHistory", n);
        return n
    },
    T: function(n) {
        this.bI("PeopleHubDisplayOption", n);
        return n
    },
    U: function(n) {
        this.bI("PeopleHubSortOption", n);
        return n
    },
    bk: function(n) {
        this.bI("AttachmentsFilePickerViewTypeForMouse", n);
        return n
    },
    bl: function(n) {
        this.bI("AttachmentsFilePickerViewTypeForTouch", n);
        return n
    },
    bf: function(n) {
        this.bI("AttachmentsFilePickerHideAddBox", n);
        return n
    },
    bg: function(n) {
        this.bI("AttachmentsFilePickerHideAddDropbox", n);
        return n
    },
    bh: function(n) {
        this.bI("AttachmentsFilePickerHideAddFacebook", n);
        return n
    },
    bj: function(n) {
        this.bI("AttachmentsFilePickerHideAddOneDriveConsumer", n);
        return n
    },
    bi: function(n) {
        this.bI("AttachmentsFilePickerHideAddGDrive", n);
        return n
    },
    H: function(n) {
        this.bI("AttachOrShareLocalFiles", n);
        return n
    },
    Q: function(n) {
        this.bI("AttachOrShareCloudFiles", n);
        return n
    },
    R: function(n) {
        this.bI("AttachOrShareGroupsFiles", n);
        return n
    },
    bp: function(n) {
        this.bI("CalendarAgendaViewIsExpandedMouse", n);
        return n
    },
    bq: function(n) {
        this.bI("CalendarAgendaViewIsExpandedTWide", n);
        return n
    },
    q: function() {
        return this.bP(String, "SystemCategoriesToShowInFolderPane")
    },
    cd: function(n) {
        this.bO("SystemCategoriesToShowInFolderPane", n);
        return n
    },
    p: function() {
        return this.bP(String, "SystemCategoriesToShowAsFilter")
    },
    cc: function(n) {
        this.bO("SystemCategoriesToShowAsFilter", n);
        return n
    },
    n: function() {
        return this.bP(String, "UserCategoriesToShowInFolderPane")
    },
    Y: function(n) {
        this.bO("UserCategoriesToShowInFolderPane", n);
        return n
    },
    m: function() {
        return this.bP(String, "UserCategoriesToShowAsFilter")
    },
    X: function(n) {
        this.bO("UserCategoriesToShowAsFilter", n);
        return n
    },
    bZ: function(n) {
        this.bI("ShowCategoryColumnOnMessageItems", n);
        return n
    },
    I: function(n) {
        this.bI("FocusedInboxBitFlags", n);
        return n
    },
    O: function() {
        return this.bQ("MailLeftSwipeAction", 0)
    },
    bB: function(n) {
        this.bI("MailLeftSwipeAction", n);
        return n
    },
    P: function() {
        return this.bQ("MailRightSwipeAction", 0)
    },
    bC: function(n) {
        this.bI("MailRightSwipeAction", n);
        return n
    },
    h: function() {
        return this.bP(_g.jc, "MailTriageOnHoverActions")
    },
    bD: function(n) {
        this.bO("MailTriageOnHoverActions", n);
        return n
    },
    bw: function(n) {
        this.bI("ClutterViewWatermark", n);
        return n
    },
    by: function(n) {
        this.bI("FocusedViewWatermark", n);
        return n
    },
    V: function(n) {
        this.bI("SelectedBookingMailbox", n);
        return n
    },
    bU: function(n) {
        this.bI("SelectedBookingSubModule", n);
        return n
    },
    bm: function(n) {
        this.bI("BookingCalendarViewType", n);
        return n
    },
    W: function(n) {
        this.bI("SelectedBookingMailboxDisplayName", n);
        return n
    },
    bo: function(n) {
        this.bI("BookingsTilesVisited", n);
        return n
    },
    bn: function(n) {
        this.bI("BookingsTilesDismissed", n);
        return n
    },
    bE: function(n) {
        this.bI("PeopleHubViewOptions", n);
        return n
    },
    N: function() {
        return this.bP(String, "BundleEntries")
    },
    S: function(n) {
        this.bO("BundleEntries", n);
        return n
    },
    bx: function(n) {
        this.bI("EdgePromotionRejectedLast", n);
        return n
    },
    bF: function(n) {
        this.bI("PinnedComposeAddin", n);
        return n
    },
    bG: function(n) {
        this.bI("PinnedReadAddin", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.y(n)
    },
    y: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.lg.prototype.C.call(this, n);
            var r = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["BookmarkedWeatherLocations", "SelectedCalendarsDesktop", "SelectedCalendarsTWide", "SelectedCalendarsTNarrow", "FolderViewState", "SavedSearches", "SearchHistory", "SystemCategoriesToShowInFolderPane", "SystemCategoriesToShowAsFilter", "DefaultSystemCategoriesSetForFolderPane", "UserCategoriesToShowInFolderPane", "UserCategoriesToShowAsFilter", "BundleEntries"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["MailTriageOnHoverActions"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.dY = function(n) {
    _g.dY.initializeBase(this);
    n || (n = new _g.ee);
    this.d(n);
    _a.s.a(this, "_ApprovalRequestData")
};
_g.dY.$$cctor = function() {
    _a.n.a(_g.dY, _g.ee, _g.dY._C)
};
_g.dY._C = function(n) {
    return new _g.dY(n)
};
_g.dY.prototype = {
    c: function() {
        return this.bH.IsUndecidedApprovalRequest ? !0 : !1
    },
    a: function() {
        return this.bH.ApprovalDecision || 0
    },
    b: function() {
        return this.bW("ApprovalDecisionTime")
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.e(n)
    },
    e: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.cg(["ApprovalDecisionTime"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.gU = function(n) {
    _g.gU.initializeBase(this);
    n || (n = new _g.hf);
    this.d(n);
    _a.s.a(this, "_BaseFolderPermission")
};
_g.gU.$$cctor = function() {
    _a.n.a(_g.gU, _g.hf, _g.gU._C)
};
_g.gU._C = function(n) {
    return new _g.gU(n)
};
_g.gU.prototype = {
    s: function(n) {
        this.bI("UserId", n);
        return n
    },
    h: function(n) {
        this.bI("CanCreateItems", n);
        return n
    },
    j: function(n) {
        this.bI("CanCreateSubFolders", n);
        return n
    },
    m: function(n) {
        this.bI("IsFolderOwner", n);
        return n
    },
    f: function(n) {
        this.bI("IsFolderVisible", n);
        return n
    },
    q: function() {
        return this.bH.IsFolderContact ? !0 : !1
    },
    c: function(n) {
        this.bI("IsFolderContact", n);
        return n
    },
    b: function() {
        return this.bQ("EditItems", "None")
    },
    e: function(n) {
        this.bI("EditItems", n);
        return n
    },
    o: function() {
        return this.bQ("DeleteItems", "None")
    },
    k: function(n) {
        this.bI("DeleteItems", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.t(n)
    },
    t: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.gV = function(n) {
    _g.gV.initializeBase(this);
    n || (n = new _g.he);
    this.d(n);
    _a.s.a(this, "_BaseFolderPermissionSet")
};
_g.gV.$$cctor = function() {
    _a.n.a(_g.gV, _g.he, _g.gV._C)
};
_g.gV._C = function(n) {
    return new _g.gV(n)
};
_g.gV.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.b(n)
    },
    b: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.gW = function(n) {
    _g.gW.initializeBase(this);
    n || (n = new _g.eg);
    this.d(n);
    _a.s.a(this, "_BingNativeAdsDataModel")
};
_g.gW.$$cctor = function() {
    _a.n.a(_g.gW, _g.eg, _g.gW._C)
};
_g.gW._C = function(n) {
    return new _g.gW(n)
};
_g.gW.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.a(n)
    },
    a: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.fd = function(n) {
    _g.fd.initializeBase(this);
    n || (n = new _g.cZ);
    this.d(n);
    _a.s.a(this, "_BposNavBarData")
};
_g.fd.$$cctor = function() {
    _a.n.a(_g.fd, _g.cZ, _g.fd._C)
};
_g.fd._C = function(n) {
    return new _g.fd(n)
};
_g.fd.prototype = {
    a: function() {
        return this.bS(_g.X, "AboutMeLink")
    },
    h: function() {
        return this.bS(_g.X, "AdminLink")
    },
    j: function() {
        return this.bS(_g.bN, "AppsImage")
    },
    c: function() {
        return this.ca(_g.X, _g.bE, "AppsLinks")
    },
    k: function() {
        return this.bS(_g.X, "CommunityLink")
    },
    m: function() {
        return this.ca(_g.X, _g.bE, "CurrentWorkloadHelpSubLinks")
    },
    n: function() {
        return this.bS(_g.X, "CurrentWorkloadSettingsLink")
    },
    o: function() {
        return this.ca(_g.X, _g.bE, "CurrentWorkloadSettingsSubLinks")
    },
    p: function() {
        return this.ca(_g.X, _g.bE, "CurrentWorkloadUserSubLinks")
    },
    q: function() {
        return this.bS(_g.bN, "DownArrowImage")
    },
    r: function() {
        return this.bS(_g.bN, "DownWhiteArrowImage")
    },
    s: function() {
        return this.bS(_g.X, "FeedbackLink")
    },
    t: function() {
        return this.bS(_g.bN, "HelpImage")
    },
    e: function() {
        return this.bS(_g.X, "HelpLink")
    },
    u: function() {
        return this.bS(_g.X, "LegalLink")
    },
    v: function() {
        return this.bS(_g.bN, "LogoThemeableImage")
    },
    w: function() {
        return this.bS(_g.X, "O365SettingsLink")
    },
    x: function() {
        return this.bS(_g.X, "PartnerLink")
    },
    f: function() {
        return this.bS(_g.X, "PrivacyLink")
    },
    y: function() {
        return this.bS(_g.bN, "SettingsImage")
    },
    g: function() {
        return this.bS(_g.X, "SignOutLink")
    },
    z: function() {
        return this.bS(_g.bN, "UpArrowImage")
    },
    b: function() {
        return this.ca(_g.X, _g.bE, "WorkloadLinks")
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.A(n)
    },
    A: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var u = this;
            this.bK(function(n) {
                return new _g.X(n)
            }, ["AboutMeLink", "AdminLink", "CommunityLink", "CurrentWorkloadSettingsLink", "FeedbackLink", "FooterICPLink", "HelpLink", "LegalLink", "O365SettingsLink", "PartnerLink", "PrivacyLink", "SignOutLink", "TenantBackgroundImageUrl", "TenantLogoNavigationUrl", "TenantLogoUrl"], n, t);
            var f = this;
            this.bK(function(n) {
                return new _g.bN(n)
            }, ["AppsImage", "DownArrowImage", "DownWhiteArrowImage", "FooterLogoImage", "HelpImage", "LogoImage", "LogoThemeableImage", "NotificationsBellIconImage", "NotificationsHighIconImage", "NotificationsLowIconImage", "NotificationsMediumIconImage", "SettingsImage", "UpArrowImage"], n, t);
            var i = this;
            this.bK(function(n) {
                return new(_a.fT.$$(_g.X, _g.bE))(n)
            }, ["AppsLinks", "CurrentWorkloadHelpSubLinks", "CurrentWorkloadSettingsSubLinks", "CurrentWorkloadUserSubLinks", "WorkloadLinks"], n, t);
            var r = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["ThemeColors"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.dq = function(n) {
    _g.dq.initializeBase(this);
    n || (n = new _g.eH);
    this.d(n);
    _a.s.a(this, "_BposNavBarImageClipInfo")
};
_g.dq.$$cctor = function() {
    _a.n.a(_g.dq, _g.eH, _g.dq._C)
};
_g.dq._C = function(n) {
    return new _g.dq(n)
};
_g.dq.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.a(n)
    },
    a: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.bN = function(n) {
    _g.bN.initializeBase(this);
    n || (n = new _g.eI);
    this.d(n);
    _a.s.a(this, "_BposNavBarImageData")
};
_g.bN.$$cctor = function() {
    _a.n.a(_g.bN, _g.eI, _g.bN._C)
};
_g.bN._C = function(n) {
    return new _g.bN(n)
};
_g.bN.prototype = {
    a: function() {
        return this.bS(_g.dq, "ClipInfo")
    },
    b: function() {
        return this.bS(_g.dq, "HoverClipInfo")
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.c(n)
    },
    c: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var i = this;
            this.bK(function(n) {
                return new _g.dq(n)
            }, ["ClipInfo", "HoverClipInfo", "PressedClipInfo"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.X = function(n) {
    _g.X.initializeBase(this);
    n || (n = new _g.bE);
    this.d(n);
    _a.s.a(this, "_BposNavBarLinkData")
};
_g.X.$$cctor = function() {
    _a.n.a(_g.X, _g.bE, _g.X._C)
};
_g.X._C = function(n) {
    return new _g.X(n)
};
_g.X.prototype = {
    b: function(n) {
        this.bI("Id", n);
        return n
    },
    a: function() {
        return this.ca(_g.X, _g.bE, "SubLinks")
    },
    c: function(n) {
        this.bI("Text", n);
        return n
    },
    e: function(n) {
        this.bI("Url", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.f(n)
    },
    f: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var i = this;
            this.bK(function(n) {
                return new(_a.fT.$$(_g.X, _g.bE))(n)
            }, ["SubLinks"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.dr = function(n) {
    _g.dr.initializeBase(this, [n || new _g.ek]);
    this.bR();
    _a.s.a(this, "_ContactsFolder")
};
_g.dr.$$cctor = function() {
    _a.n.b(_g.dr, _g.ek, _g.dr._C, "ContactsFolder:#Exchange")
};
_g.dr._C = function(n) {
    return new _g.dr(n)
};
_g.dr.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.h(n)
    },
    h: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.j.prototype.M.call(this, n);
            var i = this;
            this.bK(function(n) {
                return new _g.cR(n)
            }, ["PermissionSet"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.dZ = function(n) {
    _g.dZ.initializeBase(this);
    n || (n = new _g.el);
    this.d(n);
    _a.s.a(this, "_ConversationThread")
};
_g.dZ.$$cctor = function() {
    _a.n.a(_g.dZ, _g.el, _g.dZ._C)
};
_g.dZ._C = function(n) {
    return new _g.dZ(n)
};
_g.dZ.prototype = {
    o: function(n) {
        this.bI("ThreadId", n);
        return n
    },
    a: function() {
        return this.ca(_g.ce, _g.cl, "ConversationNodes")
    },
    h: function(n) {
        this.bO("ConversationNodes", n);
        return n
    },
    e: function() {
        return this.bP(_g.g, "ToRecipients")
    },
    p: function(n) {
        this.bO("ToRecipients", n);
        return n
    },
    c: function() {
        return this.bP(_g.g, "CcRecipients")
    },
    g: function(n) {
        this.bO("CcRecipients", n);
        return n
    },
    m: function(n) {
        this.cm("LastDeliveryTime", n);
        return n
    },
    q: function(n) {
        this.bO("UniqueSenders", n);
        return n
    },
    n: function(n) {
        this.bI("Preview", n);
        return n
    },
    j: function(n) {
        this.bI("GlobalHasAttachments", n);
        return n
    },
    k: function(n) {
        this.bI("GlobalHasIrm", n);
        return n
    },
    b: function(n) {
        this.bI("GlobalImportance", n);
        return n
    },
    r: function(n) {
        this.bI("UnreadCount", n);
        return n
    },
    f: function(n) {
        this.bI("BackwardMessage", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.s(n)
    },
    s: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var f = this;
            this.bK(function(n) {
                return new(_a.fT.$$(_g.ce, _g.cl))(n)
            }, ["ConversationNodes"], n, t);
            var e = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["ToRecipients", "CcRecipients", "UniqueSenders"], n, t);
            var u = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["GlobalItemIds", "DraftItemIds"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["GlobalRichContent"], n, t);
            var r = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["GlobalItemClasses"], n, t);
            this.cg(["LastDeliveryTime"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.be = function(n) {
    _g.be.initializeBase(this);
    n || (n = new _g.T);
    this.d(n);
    _a.s.a(this, "_ExtendedPropertyModel")
};
_g.be.$$cctor = function() {
    _a.n.a(_g.be, _g.T, _g.be._C)
};
_g.be._C = function(n) {
    return new _g.be(n)
};
_g.be.prototype = {
    a: function() {
        return this.bS(_g.bW, "ExtendedFieldURI")
    },
    c: function(n) {
        this.bO("ExtendedFieldURI", n);
        return n
    },
    b: function(n) {
        this.bI("Value", n);
        return n
    },
    e: function() {
        return this.bP(String, "Values")
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.f(n)
    },
    f: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var r = this;
            this.bK(function(n) {
                return new _g.bW(n)
            }, ["ExtendedFieldURI"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["Values"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.bW = function(n) {
    _g.bW.initializeBase(this, [n || new _g.O]);
    this.bR();
    _a.s.a(this, "_ExtendedPropertyUriModel")
};
_g.bW.$$cctor = function() {
    _a.n.a(_g.bW, _g.O, _g.bW._C)
};
_g.bW._C = function(n) {
    return new _g.bW(n)
};
_g.bW.prototype = {
    a: function() {
        return this.bQ("DistinguishedPropertySetId", "Meeting")
    },
    e: function(n) {
        this.bI("DistinguishedPropertySetId", n);
        return n
    },
    f: function(n) {
        this.bI("PropertyName", n);
        return n
    },
    c: function() {
        return this.bH.PropertyId || 0
    },
    b: function() {
        return this.bQ("PropertyType", "ApplicationTime")
    },
    g: function(n) {
        this.bI("PropertyType", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.j(n)
    },
    j: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.gX.prototype.h.call(this, n);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.cQ = function(n) {
    _g.cQ.initializeBase(this, [n || new _g.bL]);
    this.bR();
    _a.s.a(this, "_ForwardItem")
};
_g.cQ.$$cctor = function() {
    _a.n.b(_g.cQ, _g.bL, _g.cQ._C, "ForwardItem:#Exchange")
};
_g.cQ._C = function(n) {
    return new _g.cQ(n)
};
_g.cQ.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.y(n)
    },
    y: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.bx.prototype.c.call(this, n);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.ci = function(n) {
    _g.ci.initializeBase(this);
    n || (n = new _g.dF);
    this.d(n);
    _a.s.a(this, "_MailboxStatistics")
};
_g.ci.$$cctor = function() {
    _a.n.a(_g.ci, _g.dF, _g.ci._C)
};
_g.ci._C = function(n) {
    return new _g.ci(n)
};
_g.ci.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.a(n)
    },
    a: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.u = function(n) {
    _g.u.initializeBase(this, [n || new _g.bD]);
    this.bR();
    _a.s.a(this, "_MailFolder")
};
_g.u.$$cctor = function() {
    _a.n.b(_g.u, _g.bD, _g.u._C, "Folder:#Exchange")
};
_g.u._C = function(n) {
    return new _g.u(n)
};
_g.u.prototype = {
    A: function() {
        return this.bS(_g.cR, "PermissionSet")
    },
    h: function(n) {
        this.bI("UnreadCount", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.o(n)
    },
    o: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.j.prototype.M.call(this, n);
            var i = this;
            this.bK(function(n) {
                return new _g.cR(n)
            }, ["PermissionSet"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.cR = function(n) {
    _g.cR.initializeBase(this, [n || new _g.eJ]);
    this.bR();
    _a.s.a(this, "_MailFolderPermissionSet")
};
_g.cR.$$cctor = function() {
    _a.n.a(_g.cR, _g.eJ, _g.cR._C)
};
_g.cR._C = function(n) {
    return new _g.cR(n)
};
_g.cR.prototype = {
    a: function() {
        return this.ca(_g.v, _g.cM, "Permissions")
    },
    c: function(n) {
        this.bO("Permissions", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.e(n)
    },
    e: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.gV.prototype.b.call(this, n);
            var r = this;
            this.bK(function(n) {
                return new(_a.fT.$$(_g.v, _g.cM))(n)
            }, ["Permissions"], n, t);
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["UnknownEntries"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.gX = function(n) {
    _g.gX.initializeBase(this);
    n || (n = new _g.hs);
    this.d(n);
    _a.s.a(this, "_PropertyPathModel")
};
_g.gX.$$cctor = function() {
    _a.n.a(_g.gX, _g.hs, _g.gX._C)
};
_g.gX._C = function(n) {
    return new _g.gX(n)
};
_g.gX.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.h(n)
    },
    h: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.eb = function(n) {
    _g.eb.initializeBase(this);
    n || (n = new _g.eM);
    this.d(n);
    _a.s.a(this, "_ReminderMessageData")
};
_g.eb.$$cctor = function() {
    _a.n.a(_g.eb, _g.eM, _g.eb._C)
};
_g.eb._C = function(n) {
    return new _g.eb(n)
};
_g.eb.prototype = {
    b: function() {
        return this.bW("StartTime")
    },
    a: function() {
        return this.bW("EndTime")
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.c(n)
    },
    c: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.cg(["StartTime", "EndTime"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.gY = function(n) {
    _g.gY.initializeBase(this, [n || new _g.dK]);
    this.bR();
    _a.s.a(this, "_ReparentItem")
};
_g.gY.$$cctor = function() {
    _a.n.b(_g.gY, _g.dK, _g.gY._C, "ReparentItem:#Exchange")
};
_g.gY._C = function(n) {
    return new _g.gY(n)
};
_g.gY.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.y(n)
    },
    y: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.bx.prototype.c.call(this, n);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.cD = function(n) {
    _g.cD.initializeBase(this, [n || new _g.bw]);
    this.bR();
    _a.s.a(this, "_ReplyAllToItem")
};
_g.cD.$$cctor = function() {
    _a.n.b(_g.cD, _g.bw, _g.cD._C, "ReplyAllToItem:#Exchange")
};
_g.cD._C = function(n) {
    return new _g.cD(n)
};
_g.cD.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.y(n)
    },
    y: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.bx.prototype.c.call(this, n);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.cE = function(n) {
    _g.cE.initializeBase(this, [n || new _g.bQ]);
    this.bR();
    _a.s.a(this, "_ReplyToItem")
};
_g.cE.$$cctor = function() {
    _a.n.b(_g.cE, _g.bQ, _g.cE._C, "ReplyToItem:#Exchange")
};
_g.cE._C = function(n) {
    return new _g.cE(n)
};
_g.cE.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.y(n)
    },
    y: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.bx.prototype.c.call(this, n);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.bh = function(n) {
    _g.bh.initializeBase(this, [n || new _g.bo]);
    this.bR();
    _a.s.a(this, "_ResponseObject")
};
_g.bh.$$cctor = function() {
    _a.n.a(_g.bh, _g.bo, _g.bh._C)
};
_g.bh._C = function(n) {
    return new _g.bh(n)
};
_g.bh.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.o(n)
    },
    o: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.gZ.prototype.v.call(this, n);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.gZ = function(n) {
    _g.gZ.initializeBase(this, [n || new _g.gx]);
    this.bR();
    _a.s.a(this, "_ResponseObjectCore")
};
_g.gZ.$$cctor = function() {
    _a.n.a(_g.gZ, _g.gx, _g.gZ._C)
};
_g.gZ._C = function(n) {
    return new _g.gZ(n)
};
_g.gZ.prototype = {
    z: function(n) {
        this.bI("ReferenceItemId", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.v(n)
    },
    v: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.i.prototype.cN.call(this, n);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.bX = function(n) {
    _g.bX.initializeBase(this, [n || new _g.dM]);
    this.bR();
    _a.s.a(this, "_SearchFolder")
};
_g.bX.$$cctor = function() {
    _a.n.b(_g.bX, _g.dM, _g.bX._C, "SearchFolder:#Exchange")
};
_g.bX._C = function(n) {
    return new _g.bX(n)
};
_g.bX.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.K(n)
    },
    K: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.u.prototype.o.call(this, n);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.bI = function(n) {
    _g.bI.initializeBase(this);
    n || (n = new _g.dN);
    this.d(n);
    _a.s.a(this, "_SegmentationSettings")
};
_g.bI.$$cctor = function() {
    _a.n.a(_g.bI, _g.dN, _g.bI._C)
};
_g.bI._C = function(n) {
    return new _g.bI(n)
};
_g.bI.prototype = {
    a: function(n) {
        this.bI("PredictedActions", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.b(n)
    },
    b: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.ha = function(n) {
    _g.ha.initializeBase(this, [n || new _g.dP]);
    this.bR();
    _a.s.a(this, "_SmartResponseBase")
};
_g.ha.$$cctor = function() {
    _a.n.a(_g.ha, _g.dP, _g.ha._C)
};
_g.ha._C = function(n) {
    return new _g.ha(n)
};
_g.ha.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.x(n)
    },
    x: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.bh.prototype.o.call(this, n);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.bx = function(n) {
    _g.bx.initializeBase(this, [n || new _g.cc]);
    this.bR();
    _a.s.a(this, "_SmartResponseItem")
};
_g.bx.$$cctor = function() {
    _a.n.a(_g.bx, _g.cc, _g.bx._C)
};
_g.bx._C = function(n) {
    return new _g.bx(n)
};
_g.bx.prototype = {
    f: function() {
        return this.bS(_g.y, "NewBodyContent")
    },
    D: function(n) {
        this.bO("NewBodyContent", n);
        return n
    },
    t: function() {
        return this.bH.ReferenceItemDocumentId || 0
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.c(n)
    },
    c: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            _g.ha.prototype.x.call(this, n);
            var i = this;
            this.bK(function(n) {
                return new _g.y(n)
            }, ["NewBodyContent"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.lg = function(n) {
    _g.lg.initializeBase(this);
    n || (n = new _g.kc);
    this.d(n);
    _a.s.a(this, "_UserConfigurationBase")
};
_g.lg.prototype = {
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.C(n)
    },
    C: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.cv = function(n) {
    _g.cv.initializeBase(this);
    n || (n = new _g.dk);
    this.d(n);
    _a.s.a(this, "_WorkingHoursModel")
};
_g.cv.$$cctor = function() {
    _a.n.a(_g.cv, _g.dk, _g.cv._C)
};
_g.cv._C = function(n) {
    return new _g.cv(n)
};
_g.cv.prototype = {
    e: function(n) {
        this.bI("WorkHoursStartTimeInMinutes", n);
        return n
    },
    c: function(n) {
        this.bI("WorkHoursEndTimeInMinutes", n);
        return n
    },
    b: function(n) {
        this.bI("WorkDays", n);
        return n
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.a(n)
    },
    a: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            this.bN(n, t);
            this.bM(n)
        }
    }
};
_g.dp = function(n) {
    _g.dp.initializeBase(this);
    n || (n = new _g.du);
    this.d(n);
    _a.s.a(this, "_ApplicationSettings")
};
_g.dp.$$cctor = function() {
    _a.n.a(_g.dp, _g.du, _g.dp._C)
};
_g.dp._C = function(n) {
    return new _g.dp(n)
};
_g.dp.prototype = {
    e: function() {
        return this.bQ("DefaultTraceLevel", 0)
    },
    c: function() {
        return this.bQ("DefaultPerfTraceLevel", 0)
    },
    b: function() {
        return this.bQ("DefaultJsMvvmPerfTraceLevel", 0)
    },
    f: function() {
        return this.bP(String, "TraceInfoComponents")
    },
    h: function() {
        return this.bP(String, "TraceVerboseComponents")
    },
    g: function() {
        return this.bP(String, "TracePerfComponents")
    },
    j: function() {
        return this.bP(String, "TraceWarningComponents")
    },
    k: function(n) {
        this.bI("DownloadUrlBase", n);
        return n
    },
    a: function() {
        return this.bQ("FilterWebBeaconsAndHtmlForms", 0)
    },
    B: function() {
        return this.bH
    },
    d: function(n) {
        this.bJ(n);
        return n
    },
    bJ: function(n) {
        this.m(n)
    },
    m: function(n) {
        if (!this.bL(!1, n)) {
            var t = {};
            var i = this;
            this.bK(function(n) {
                return new _a.j(n)
            }, ["TraceInfoComponents", "TraceVerboseComponents", "TracePerfComponents", "TraceWarningComponents"], n, t);
            this.bN(n, t);
            this.bM(n)
        }
    }
};
var IMeetingMessageModel = function() {};
IMeetingMessageModel.registerInterface("IMeetingMessageModel");
var IMeetingRequestMessageModel = function() {};
IMeetingRequestMessageModel.registerInterface("IMeetingRequestMessageModel");
_g.hM.registerClass("_g.hM", null, 0);
_g.H.registerClass("_g.H");
_g.hb.registerClass("_g.hb", _g.hM, 0, 0);
_g.kH.registerClass("_g.kH", _ff.e, 0);
_g.em.registerClass("_g.em", _g.kH, 0, 0);
_g.hk.registerClass("_g.hk", _g.hM, 0, 0);
_g.cs.registerClass("_g.cs", _ff.e, 0);
_g.kI.registerClass("_g.kI", _ff.e, 0);
_g.ft.registerClass("_g.ft", _g.kI, 0, 0);
_g.e.registerClass("_g.e", _g.ft, 0, 0, 0);
_g.cz.registerClass("_g.cz", _ff.e);
_g.hl.registerClass("_g.hl", _g.hM, 0, 0);
_g.iB.registerClass("_g.iB", _g.hM, 0, 0);
_g.M.registerClass("_g.M", _g.kH, 0, 0);
_g.z.registerClass("_g.z", _g.M, 0, 0, 0);
_g.bY.registerClass("_g.bY", _g.hM, 0, 0);
_g.bt.registerClass("_g.bt", _g.hM, 0, 0);
_g.kC.registerClass("_g.kC", _no.k);
_g.kC.prototype.toString = _no.k.prototype.toString;
_g.fW.registerClass("_g.fW", _g.hM, 0, 0);
_g.bz.registerClass("_g.bz", _g.hM, 0, 0);
_g.W.registerClass("_g.W", _ff.e, 0);
_g.ks.registerClass("_g.ks", _ff.e, 0);
_g.eC.registerClass("_g.eC", _g.ks, 0, 0);
_g.iZ.registerClass("_g.iZ", _g.hM, 0, 0);
_g.je.registerClass("_g.je", _g.hM, 0, 0);
_g.bq.registerClass("_g.bq", _ff.e, 0);
_g.dD.registerClass("_g.dD", _g.bq, 0, 0);
_g.dj.registerClass("_g.dj", _ff.e, 0);
_g.dv.registerClass("_g.dv", _g.kI, 0, 0);
_g.ck.registerClass("_g.ck", _ff.e, 0);
_g.jm.registerClass("_g.jm", _g.hM, 0, 0);
_g.bP.registerClass("_g.bP", _g.cs);
_g.jz.registerClass("_g.jz", _no.k);
_g.jz.prototype.toString = _no.k.prototype.toString;
_g.kc.registerClass("_g.kc", _ff.e, 0);
_g.P.registerClass("_g.P", _g.kc, 0, 0);
_g.jK.registerClass("_g.jK", _g.hM, 0, 0);
_g.jL.registerClass("_g.jL", _g.hM, 0, 0);
_g.jM.registerClass("_g.jM", _g.hM, 0, 0);
_g.S.registerClass("_g.S", _ff.e, 0);
_g.cm.registerClass("_g.cm", _g.cs);
_g.jS.registerClass("_g.jS", _g.hM, 0, 0);
_g.jT.registerClass("_g.jT", _g.hM, 0, 0);
_g.gG.registerClass("_g.gG", _g.hM, 0, 0);
_g.dt.registerClass("_g.dt", _ff.e, 0);
_g.J.registerClass("_g.J", _g.M, 0, 0, 0);
_g.gx.registerClass("_g.gx", _g.J, 0, 0, 0, 0);
_g.bo.registerClass("_g.bo", _g.gx, 0, 0, 0, 0, 0);
_g.gO.registerClass("_g.gO", _g.bo, 0, 0, 0, 0, 0, 0);
_g.dG.registerClass("_g.dG", _g.gO, 0, 0, 0, 0, 0, 0, 0);
_g.cS.registerClass("_g.cS", _g.dG, 0, 0, 0, 0, 0, 0, 0, 0);
_g.eL.registerClass("_g.eL", _g.bo, 0, 0, 0, 0, 0, 0);
_g.fj.registerClass("_g.fj", _g.eL, 0, 0, 0, 0, 0, 0, 0);
_g.fk.registerClass("_g.fk", _g.bo, 0, 0, 0, 0, 0, 0);
_g.bJ.registerClass("_g.bJ", _g.dv, 0, 0, 0);
_g.du.registerClass("_g.du", _ff.e, 0);
_g.ec.registerClass("_g.ec", _g.dt, 0, 0);
_g.hO.registerClass("_g.hO", _ff.e);
_g.ee.registerClass("_g.ee", _ff.e, 0);
_g.bi.registerClass("_g.bi", _g.ft, 0, 0, 0);
_g.fr.registerClass("_g.fr", _ff.e, 0);
_g.hY.registerClass("_g.hY", _ff.e);
_g.hc.registerClass("_g.hc", _g.kH, 0, 0);
_g.kr.registerClass("_g.kr", _ff.e, 0);
_g.ef.registerClass("_g.ef", _ff.e, 0);
_g.he.registerClass("_g.he", _ff.e, 0);
_g.hf.registerClass("_g.hf", _ff.e, 0);
_g.kv.registerClass("_g.kv", _ff.e, 0);
_g.eg.registerClass("_g.eg", _ff.e, 0);
_g.t.registerClass("_g.t", _ff.e, 0);
_g.hh.registerClass("_g.hh", _ff.e, 0);
_g.kF.registerClass("_g.kF", _ff.e, 0);
_g.ic.registerClass("_g.ic", _g.kF, 0, 0);
_g.ie.registerClass("_g.ie", _ff.e);
_g.dP.registerClass("_g.dP", _g.bo, 0, 0, 0, 0, 0, 0);
_g.cc.registerClass("_g.cc", _g.dP, 0, 0, 0, 0, 0, 0, 0);
_g.ei.registerClass("_g.ei", _g.cc, 0, 0, 0, 0, 0, 0, 0, 0);
_g.bC.registerClass("_g.bC", _ff.e, 0);
_g.ClientVersionProvider.registerClass("_g.ClientVersionProvider");
_g.hi.registerClass("_g.hi", _ff.e, 0);
_g.dw.registerClass("_g.dw", _g.M, 0, 0, 0);
_g.ek.registerClass("_g.ek", _g.hc, 0, 0, 0);
_g.cl.registerClass("_g.cl", _ff.e, 0);
_g.el.registerClass("_g.el", _ff.e, 0);
_g.kx.registerClass("_g.kx", _g.kv);
_g.cV.registerClass("_g.cV", _g.dG, 0, 0, 0, 0, 0, 0, 0, 0);
_g.s.registerClass("_g.s", _g.dv, 0, 0, 0);
_g.dy.registerClass("_g.dy", _g.M, 0, 0, 0);
_g.eq.registerClass("_g.eq", _ff.e, 0);
_g.cH.registerClass("_g.cH", _ff.e, 0);
_g.g.registerClass("_g.g", _ff.e, 0);
_g.iE.registerClass("_g.iE", _ff.e, 0);
_g.T.registerClass("_g.T", _ff.e, 0);
_g.hs.registerClass("_g.hs", _ff.e, 0);
_g.O.registerClass("_g.O", _g.hs, 0, 0);
_g.er.registerClass("_g.er", _g.kr, 0, 0);
_g.gB.registerClass("_g.gB", _ff.e, 0);
_g.et.registerClass("_g.et", _g.gB, 0, 0);
_g.cI.registerClass("_g.cI", _ff.e, 0);
_g.m.registerClass("_g.m", _g.dv, 0, 0, 0);
_g.bD.registerClass("_g.bD", _g.hc, 0, 0, 0);
_g.bL.registerClass("_g.bL", _g.cc, 0, 0, 0, 0, 0, 0, 0, 0);
_g.cX.registerClass("_g.cX", _ff.e, 0);
_g.L.registerClass("_g.L", _g.ef, 0, 0);
_g.gi.registerClass("_g.gi", _g.kF, 0, 0);
_g.iW.registerClass("_g.iW", _ff.e, 0);
_g.kG.registerClass("_g.kG", _ff.e, 0);
_g.kN.registerClass("_g.kN", _g.kG, 0, 0);
_g.ba.registerClass("_g.ba", _g.kN, 0, 0, 0);
_g.dE.registerClass("_g.dE", _g.gB, 0, 0);
_g.gj.registerClass("_g.gj", _ff.e);
_g.eD.registerClass("_g.eD", _ff.e, 0);
_g.iY.registerClass("_g.iY", _g.dt, 0, 0);
_g.iX.registerClass("_g.iX", _g.dt, 0, 0);
_g.dF.registerClass("_g.dF", _ff.e, 0);
_g.jd.registerClass("_g.jd", _ff.e);
_g.cY.registerClass("_g.cY", _ff.e, 0);
_g.eE.registerClass("_g.eE", _ff.e, 0);
_g.cp.registerClass("_g.cp", _g.J, 0, 0, 0, 0);
_g.bZ.registerClass("_g.bZ", _g.cp, 0, 0, 0, 0, 0);
_g.cq.registerClass("_g.cq", _g.cp, 0, 0, 0, 0, 0);
_g.jh.registerClass("_g.jh", _ff.e, 0);
_g.eF.registerClass("_g.eF", _ff.e, 0);
_g.gn.registerClass("_g.gn", _ff.e, 0);
_g.eG.registerClass("_g.eG", _ff.e, 0);
_g.cL.registerClass("_g.cL", _ff.e, 0);
_g.cZ.registerClass("_g.cZ", _ff.e, 0);
_g.eH.registerClass("_g.eH", _ff.e, 0);
_g.eI.registerClass("_g.eI", _ff.e, 0);
_g.bE.registerClass("_g.bE", _ff.e, 0);
_g.jn.registerClass("_g.jn", _ff.e);
_g.jr.registerClass("_g.jr", _ff.e);
_g.js.registerClass("_g.js", _ff.e, 0);
_g.kD.registerClass("_g.kD", null, _g.kA);
_g.cy.registerClass("_g.cy", _ff.e, 0);
_g.db.registerClass("_g.db", _g.kc, 0, 0);
_g.eJ.registerClass("_g.eJ", _g.he, 0, 0);
_g.cM.registerClass("_g.cM", _g.hf, 0, 0);
_g.p.registerClass("_g.p", _ff.e, 0);
_g.gt.registerClass("_g.gt", _ff.e, 0);
_g.cr.registerClass("_g.cr", _ff.e, 0);
_g.dc.registerClass("_g.dc", _g.M, 0, 0, 0);
_g.gu.registerClass("_g.gu", _g.bo, 0, 0, 0, 0, 0, 0);
_g.eK.registerClass("_g.eK", _g.gu, 0, 0, 0, 0, 0, 0, 0);
_g.hr.registerClass("_g.hr", _ff.e, 0);
_g.ju.registerClass("_g.ju", _ff.e, 0);
_g.d.registerClass("_g.d", _g.hs, 0, 0);
_g.gv.registerClass("_g.gv", _g.bo, 0, 0, 0, 0, 0, 0);
_g.jv.registerClass("_g.jv", _ff.e, 0);
_g.jw.registerClass("_g.jw", _ff.e);
_g.bn.registerClass("_g.bn", _g.ft, 0, 0, 0);
_g.eM.registerClass("_g.eM", _ff.e, 0);
_g.de.registerClass("_g.de", _g.bo, 0, 0, 0, 0, 0, 0);
_g.dK.registerClass("_g.dK", _g.cc, 0, 0, 0, 0, 0, 0, 0, 0);
_g.bw.registerClass("_g.bw", _g.cc, 0, 0, 0, 0, 0, 0, 0, 0);
_g.bQ.registerClass("_g.bQ", _g.cc, 0, 0, 0, 0, 0, 0, 0, 0);
_g.eN.registerClass("_g.eN", _ff.e, 0);
_g.bM.registerClass("_g.bM", _ff.e, 0);
_g.dL.registerClass("_g.dL", _ff.e, 0);
_g.eO.registerClass("_g.eO", _g.kc, 0, 0);
_g.dM.registerClass("_g.dM", _g.bD, 0, 0, 0, 0);
_g.jF.registerClass("_g.jF", _ff.e);
_g.jG.registerClass("_g.jG", _ff.e);
_g.bj.registerClass("_g.bj", _g.ef, 0, 0);
_g.dN.registerClass("_g.dN", _ff.e, 0);
_g.dO.registerClass("_g.dO", _ff.e, 0);
_g.jJ.registerClass("_g.jJ", _ff.e);
_g.R.registerClass("_g.R", _ff.e, 0);
_g.bA.registerClass("_g.bA", _ff.e, 0);
_g.gD.registerClass("_g.gD", _g.eL, 0, 0, 0, 0, 0, 0, 0);
_g.jO.registerClass("_g.jO", _ff.e);
_g.jP.registerClass("_g.jP", _g.gB, 0, 0);
_g.F.registerClass("_g.F", _ff.e, 0);
_g.bR.registerClass("_g.bR", _g.M, 0, 0, 0);
_g.dg.registerClass("_g.dg", _g.dG, 0, 0, 0, 0, 0, 0, 0, 0);
_g.hy.registerClass("_g.hy", _ff.e, 0);
_g.eS.registerClass("_g.eS", _ff.e, 0);
_g.dT.registerClass("_g.dT", _ff.e, 0);
_g.cB.registerClass("_g.cB", _ff.e, 0);
_g.eV.registerClass("_g.eV", _ff.e, 0);
_g.dU.registerClass("_g.dU", _g.kc, 0, 0);
_g.kf.registerClass("_g.kf", _ff.e, 0);
_g.di.registerClass("_g.di", _ff.e, 0);
_g.dk.registerClass("_g.dk", _ff.e, 0);
_g.hZ.registerClass("_g.hZ", _ff.e, 0);
_g.ku.registerClass("_g.ku", _ff.e, 0);
_g.cw.registerClass("_g.cw", _ff.e, 0);
_g.ca.registerClass("_g.ca", _g.kH, 0, 0);
_g.dQ.registerClass("_g.dQ", _ff.e, 0);
_g.hj.registerClass("_g.hj", _ff.e, 0);
_g.hq.registerClass("_g.hq", _ff.e, 0);
_g.dJ.registerClass("_g.dJ", _ff.e, 0);
_g.eu.registerClass("_g.eu", _g.kr, 0, 0);
_g.ev.registerClass("_g.ev", _g.kr, 0, 0);
_g.ex.registerClass("_g.ex", _g.kr, 0, 0);
_g.ez.registerClass("_g.ez", _g.kr, 0, 0);
_g.hv.registerClass("_g.hv", _g.ku, 0, 0);
_g.eT.registerClass("_g.eT", _g.kr, 0, 0);
_g.eU.registerClass("_g.eU", _g.dE, 0, 0, 0);
_g.ik.registerClass("_g.ik", _g.kr, 0, 0);
_g.io.registerClass("_g.io", _g.kr);
_g.fS.registerClass("_g.fS", _g.gB, 0, 0);
_g.fz.registerClass("_g.fz", _g.kr, 0, 0);
_g.iv.registerClass("_g.iv", _g.kr, 0, 0);
_g.fO.registerClass("_g.fO", _g.gB, 0, 0);
_g.fR.registerClass("_g.fR", _g.gB, 0, 0);
_g.iM.registerClass("_g.iM", _ff.e);
_g.fZ.registerClass("_g.fZ", _g.gB, 0, 0);
_g.iN.registerClass("_g.iN", _ff.e);
_g.ga.registerClass("_g.ga", _ff.e, 0);
_g.gc.registerClass("_g.gc", _g.kr, 0, 0);
_g.eP.registerClass("_g.eP", _ff.e, 0);
_g.iS.registerClass("_g.iS", _ff.e, 0);
_g.eh.registerClass("_g.eh", _ff.e, 0);
_g.iL.registerClass("_g.iL", _g.eh, 0, 0);
_g.gs.registerClass("_g.gs", _ff.e, 0);
_g.jN.registerClass("_g.jN", _ff.e);
_g.jk.registerClass("_g.jk", _g.kr, 0, 0);
_g.jV.registerClass("_g.jV", _g.kr);
_g.jB.registerClass("_g.jB", _g.kr);
_g.jD.registerClass("_g.jD", _g.gB);
_g.jf.registerClass("_g.jf", _g.gB);
_g.jY.registerClass("_g.jY", _g.jf);
_g.hN.registerClass("_g.hN", _g.hM, 0, 0);
_g.ed.registerClass("_g.ed", _g.hZ, 0, 0);
_g.hU.registerClass("_g.hU", _g.kr);
_g.fo.registerClass("_g.fo", _g.hZ, 0, 0);
_g.hQ.registerClass("_g.hQ", _g.kr);
_g.dx.registerClass("_g.dx", _g.hZ, 0, 0);
_g.eo.registerClass("_g.eo", _g.hZ, 0, 0);
_g.ix.registerClass("_g.ix", _g.kr);
_g.fG.registerClass("_g.fG", _g.hZ, 0, 0);
_g.iC.registerClass("_g.iC", _g.kr);
_g.jI.registerClass("_g.jI", _g.hM, 0, 0);
_g.dR.registerClass("_g.dR", _g.hZ, 0, 0);
_g.jZ.registerClass("_g.jZ", _g.hM, 0, 0);
_g.gJ.registerClass("_g.gJ", _g.hZ, 0, 0);
_g.ka.registerClass("_g.ka", _g.kr);
_g.ir.registerClass("_g.ir", _g.kr);
_g.iJ.registerClass("_g.iJ", _g.kr, 0, 0);
_g.gf.registerClass("_g.gf", _g.kr, 0, 0);
_g.ke.registerClass("_g.ke", _ff.e);
_g.bK.registerClass("_g.bK", _ff.e, 0);
_g.gm.registerClass("_g.gm", _ff.e, 0);
_g.hx.registerClass("_g.hx", _ff.e, 0);
_g.bm.registerClass("_g.bm", _g.hx, 0, 0);
_g.hw.registerClass("_g.hw", _ff.e, 0);
_g.V.registerClass("_g.V", _g.hw, 0, 0);
_g.co.registerClass("_g.co", _ff.e, 0);
_g.kw.registerClass("_g.kw", _g.ku);
_g.cU.registerClass("_g.cU", _g.kw);
_g.bf.registerClass("_g.bf", _ff.e, 0);
_g.dA.registerClass("_g.dA", _g.ku, 0, 0);
_g.cG.registerClass("_g.cG", _ff.e, 0);
_g.gb.registerClass("_g.gb", _g.hM, 0, 0);
_g.cK.registerClass("_g.cK", _ff.e, 0);
_g.gC.registerClass("_g.gC", _ff.e, 0);
_g.es.registerClass("_g.es", _g.ku, 0, 0);
_g.fD.registerClass("_g.fD", _ff.e);
_g.kE.registerClass("_g.kE", _ff.e, 0);
_g.jU.registerClass("_g.jU", _g.hM, 0, 0);
_g.fU.registerClass("_g.fU", _g.eh, 0, 0);
_g.jH.registerClass("_g.jH", _ff.e);
_g.gE.registerClass("_g.gE", _ff.e, 0);
_g.kJ.registerClass("_g.kJ", _g.kE, 0, 0);
_g.r.registerClass("_g.r", _g.kJ, 0, 0, 0);
_g.ky.registerClass("_g.ky", _g.kE, 0, 0);
_g.bd.registerClass("_g.bd", _g.ky, 0, 0, 0);
_g.gI.registerClass("_g.gI", _g.ku, 0, 0);
_g.cJ.registerClass("_g.cJ", _g.hw, 0, 0);
_g.fu.registerClass("_g.fu", _g.hw);
_g.fs.registerClass("_g.fs", _g.V, 0, 0, 0);
_g.jo.registerClass("_g.jo", _ff.e, 0);
_g.iV.registerClass("_g.iV", _g.jo, 0, 0);
_g.ej.registerClass("_g.ej", _ff.e, 0);
_g.dd.registerClass("_g.dd", _ff.e, 0);
_g.jA.registerClass("_g.jA", _g.jo, 0, 0);
_g.jQ.registerClass("_g.jQ", _ff.e);
_g.jE.registerClass("_g.jE", _g.jo);
_g.eA.registerClass("_g.eA", _g.hZ, 0, 0);
_g.br.registerClass("_g.br", _g.kE, 0, 0);
_g.gw.registerClass("_g.gw", _ff.e, 0);
_g.fn.registerClass("_g.fn", _ff.e);
_g.fp.registerClass("_g.fp", _g.ku);
_g.hu.registerClass("_g.hu", _ff.e, 0);
_g.hX.registerClass("_g.hX", _g.jo, 0, 0);
_g.ih.registerClass("_g.ih", _g.hX, 0, 0, 0);
_g.hd.registerClass("_g.hd", _g.ku);
_g.fA.registerClass("_g.fA", _g.kx);
_g.ht.registerClass("_g.ht", _ff.e, 0);
_g.hp.registerClass("_g.hp", _g.ht, 0, 0);
_g.ey.registerClass("_g.ey", _g.ku);
_g.dI.registerClass("_g.dI", _ff.e, 0);
_g.kK.registerClass("_g.kK", _ff.e);
_g.dS.registerClass("_g.dS", _g.ku);
_g.gH.registerClass("_g.gH", _g.kv);
_g.da.registerClass("_g.da", _ff.e, 0);
_g.ji.registerClass("_g.ji", _g.kr);
_g.cN.registerClass("_g.cN", _ff.e, 0);
_g.fq.registerClass("_g.fq", _ff.e, 0);
_g.ii.registerClass("_g.ii", _g.ih, 0, 0, 0, 0);
_g.fH.registerClass("_g.fH", _ff.e, 0);
_g.fI.registerClass("_g.fI", _ff.e, 0);
_g.kg.registerClass("_g.kg", _ff.e);
_g.fN.registerClass("_g.fN", _g.kv);
_g.fQ.registerClass("_g.fQ", _g.kv);
_g.fY.registerClass("_g.fY", _g.kv);
_g.ge.registerClass("_g.ge", _g.kv);
_g.il.registerClass("_g.il", _g.kv);
_g.ip.registerClass("_g.ip", _g.kv);
_g.iw.registerClass("_g.iw", _g.kv);
_g.gd.registerClass("_g.gd", _g.kv);
_g.iP.registerClass("_g.iP", _ff.e);
_g.jl.registerClass("_g.jl", _g.kv);
_g.jW.registerClass("_g.jW", _g.kv);
_g.jC.registerClass("_g.jC", _g.kv);
_g.hR.registerClass("_g.hR", _g.kv);
_g.hV.registerClass("_g.hV", _g.kv);
_g.iy.registerClass("_g.iy", _g.kv);
_g.iD.registerClass("_g.iD", _g.kv);
_g.kb.registerClass("_g.kb", _g.kv);
_g.is.registerClass("_g.is", _g.kv);
_g.gh.registerClass("_g.gh", _g.gB, 0, 0);
_g.gg.registerClass("_g.gg", _g.ku);
_g.dh.registerClass("_g.dh", _ff.e, 0);
_g.cA.registerClass("_g.cA", _ff.e, 0);
_g.kt.registerClass("_g.kt", _g.ku);
_g.fw.registerClass("_g.fw", _g.kt);
_g.fv.registerClass("_g.fv", _g.hZ, 0, 0);
_g.ij.registerClass("_g.ij", _g.hM, 0, 0);
_g.fy.registerClass("_g.fy", _g.ku);
_g.fx.registerClass("_g.fx", _g.hZ, 0, 0);
_g.im.registerClass("_g.im", _g.hM, 0, 0);
_g.gN.registerClass("_g.gN", _g.bo, 0, 0, 0, 0, 0, 0);
_g.fF.registerClass("_g.fF", _g.ku);
_g.fE.registerClass("_g.fE", _g.hZ, 0, 0);
_g.iu.registerClass("_g.iu", _g.hM, 0, 0);
_g.ep.registerClass("_g.ep", _g.ku);
_g.kz.registerClass("_g.kz", _ff.e, 0);
_g.fL.registerClass("_g.fL", _g.kz);
_g.fM.registerClass("_g.fM", _g.ku);
_g.fK.registerClass("_g.fK", _g.hZ, 0, 0);
_g.iG.registerClass("_g.iG", _g.hM, 0, 0);
_g.dz.registerClass("_g.dz", _g.hZ, 0, 0);
_g.bv.registerClass("_g.bv", _g.hv);
_g.bu.registerClass("_g.bu", _g.hZ, 0, 0);
_g.iK.registerClass("_g.iK", _g.hM, 0, 0);
_g.iO.registerClass("_g.iO", _g.hM, 0, 0);
_g.fX.registerClass("_g.fX", _g.hZ, 0, 0);
_g.fV.registerClass("_g.fV", _ff.e, 0);
_g.hm.registerClass("_g.hm", _g.hM, 0, 0);
_g.dC.registerClass("_g.dC", _g.ku);
_g.dB.registerClass("_g.dB", _g.hZ, 0, 0);
_g.iQ.registerClass("_g.iQ", _g.hM, 0, 0);
_g.iR.registerClass("_g.iR", _g.hM, 0, 0);
_g.ew.registerClass("_g.ew", _ff.e, 0);
_g.iT.registerClass("_g.iT", _g.hM, 0, 0);
_g.hn.registerClass("_g.hn", _g.hM, 0, 0);
_g.dH.registerClass("_g.dH", _g.hZ, 0, 0);
_g.fJ.registerClass("_g.fJ", _g.hZ, 0, 0);
_g.gl.registerClass("_g.gl", _g.ku);
_g.gk.registerClass("_g.gk", _g.hZ, 0, 0);
_g.cx.registerClass("_g.cx", _g.dt, 0, 0);
_g.jg.registerClass("_g.jg", _g.dt, 0, 0);
_g.gr.registerClass("_g.gr", _g.kt);
_g.gq.registerClass("_g.gq", _g.hZ, 0, 0);
_g.gp.registerClass("_g.gp", _g.hd);
_g.go.registerClass("_g.go", _g.hZ, 0, 0);
_g.jj.registerClass("_g.jj", _g.hM, 0, 0);
_g.jp.registerClass("_g.jp", _g.hM, 0, 0);
_g.cb.registerClass("_g.cb", _g.kJ, 0, 0, 0);
_g.cn.registerClass("_g.cn", _g.hx, 0, 0);
_g.cd.registerClass("_g.cd", _g.ku);
_g.ct.registerClass("_g.ct", _g.hZ, 0, 0);
_g.cO.registerClass("_g.cO", _g.hM, 0, 0);
_g.gz.registerClass("_g.gz", _g.ku);
_g.gy.registerClass("_g.gy", _g.hZ, 0, 0);
_g.gL.registerClass("_g.gL", _g.F);
_g.gA.registerClass("_g.gA", _ff.e);
_g.hz.registerClass("_g.hz", _g.ku);
_g.gK.registerClass("_g.gK", _g.hz);
_g.en.registerClass("_g.en", _g.ky, 0, 0, 0);
_g.jX.registerClass("_g.jX", _g.hM, 0, 0);
_g.kL.registerClass("_g.kL", _g.kK);
_g.hS.registerClass("_g.hS", _g.gB);
_g.hW.registerClass("_g.hW", _g.gB);
_g.iz.registerClass("_g.iz", _g.gB);
_g.fm.registerClass("_g.fm", _g.ku, 0, 0);
_g.hP.registerClass("_g.hP", _g.hM, 0, 0);
_g.fl.registerClass("_g.fl", _g.hZ, 0, 0);
_g.fC.registerClass("_g.fC", _g.ku);
_g.iq.registerClass("_g.iq", _g.hM, 0, 0);
_g.fB.registerClass("_g.fB", _g.hZ, 0, 0);
_g.it.registerClass("_g.it", _g.gB);
_g.iI.registerClass("_g.iI", _g.hM, 0, 0);
_g.fT.registerClass("_g.fT", _g.hZ, 0, 0);
_g.ho.registerClass("_g.ho", _g.hM, 0, 0);
_g.kd.registerClass("_g.kd", _g.hM, 0, 0);
_g.gM.registerClass("_g.gM", _ff.e, 0);
_g.hT.registerClass("_g.hT", _g.hM, 0, 0);
_g.Y.registerClass("_g.Y", _ff.e, 0);
_g.Z.registerClass("_g.Z", _ff.e);
_g.eQ.registerClass("_g.eQ", _ff.e, 0);
_g.eR.registerClass("_g.eR", _g.kc, 0, 0);
_g.fP.registerClass("_g.fP", _g.kz, 0, 0);
_g.eB.registerClass("_g.eB", _g.kN, 0, 0, 0);
_g.jq.registerClass("_g.jq", _ff.e);
_g.hB.registerClass("_g.hB", _ff.e, 0);
_g.kh.registerClass("_g.kh", _ff.e);
_g.ia.registerClass("_g.ia", _ff.e, 0);
_g.cP.registerClass("_g.cP");
_g.hC.registerClass("_g.hC");
_g.dV.registerClass("_g.dV", _a.bt);
_g.bB.registerClass("_g.bB");
_g.I.registerClass("_g.I");
_g.eW.registerClass("_g.eW");
_g.kP.registerClass("_g.kP");
_g.bs.registerClass("_g.bs", _j.S);
_g.gP.registerClass("_g.gP");
CoreWebServicesComponent.registerClass("CoreWebServicesComponent", null, _a.kj, _j.ce);
_g.bT.registerClass("_g.bT", _g.m);
_g.N.registerClass("_g.N", _g.m);
_g.bS.registerClass("_g.bS", null, _a.eQ);
_g.kj.registerClass("_g.kj", _no.k);
_g.kj.prototype.toString = _no.k.prototype.toString;
_g.k.registerClass("_g.k", _j.bZ, _g.kR, Sys.IDisposable);
_g.kk.registerClass("_g.kk", null, _a.eS, _g.eY);
_g.Q.registerClass("_g.Q", _g.kD);
_g.dW.registerClass("_g.dW");
_g.gR.registerClass("_g.gR", Sys.Net.WebRequestExecutor);
_g.bU.registerClass("_g.bU");
_g.kT.registerClass("_g.kT");
_g.gS.registerClass("_g.gS", null, Sys.IDisposable);
_g.cC.registerClass("_g.cC");
_g.OWSVersion.registerClass("_g.OWSVersion");
_g.fa.registerClass("_g.fa");
_g.kl.registerClass("_g.kl");
_g.kU.registerClass("_g.kU");
_g.fc.registerClass("_g.fc", null, _g.gQ);
_g.gT.registerClass("_g.gT");
_g.K.registerClass("_g.K", _a.co, _a.cG);
_g.Attachment.registerClass("_g.Attachment", _g.K, _j.bs, Sys.IDisposable, _a.kw, _a.cG);
_g.y.registerClass("_g.y", _g.K, _a.kw, _a.cG);
_g.bF.registerClass("_g.bF", _g.K, _a.kw, _a.cG);
_g.cf.registerClass("_g.cf", _g.K, _a.kw, _a.cG);
_g.f.registerClass("_g.f", _g.K, _a.eh, _j.L, _ff.u, _g.kX, _g.hK, _g.hI, _a.kw, _a.cG);
_g.la.registerClass("_g.la", _ff.e);
_g.B.registerClass("_g.B", _g.Attachment, _g.kX, _a.kw, _a.cG);
_g.bp.registerClass("_g.bp", _g.K, _a.kw, _a.cG);
_g.cu.registerClass("_g.cu", _g.K, _a.kw, _a.cG);
_g.j.registerClass("_g.j", _g.K, _a.eh, _j.L, _a.kw, _a.cG);
_g.o.registerClass("_g.o", _g.K, _a.eh, _j.L, _ff.u, _g.hK, _g.hI, _a.kw, _a.cG);
_g.fe.registerClass("_g.fe");
_g.i.registerClass("_g.i", _g.f, _g.x, _g.kX, _a.kw, _a.cG);
_g.ce.registerClass("_g.ce", _g.K, _a.kw, _a.cG);
_g.kV.registerClass("_g.kV", _g.la);
_g.gU.registerClass("_g.gU", _g.K, _a.kw, _a.cG);
_g.v.registerClass("_g.v", _g.gU, _a.kw, _a.cG);
_g.ds.registerClass("_g.ds", _g.K, _a.kw, _a.cG);
_g.bl.registerClass("_g.bl", _g.f, _g.x, _a.kw, _a.cG);
_g.cF.registerClass("_g.cF", _g.K, _a.kw, _a.cG);
_g.w.registerClass("_g.w", _g.K, _a.kw, _a.cG);
_g.le.registerClass("_g.le", _g.la);
_g.cj.registerClass("_g.cj", _g.i, _g.kX);
_g.lf.registerClass("_g.lf", _g.kV);
_g.bg.registerClass("_g.bg", _g.K, _a.kw, _a.cG);
_g.D.registerClass("_g.D");
_g.lg.registerClass("_g.lg", _g.K, _a.kw, _a.cG);
_g.ea.registerClass("_g.ea", _g.lg, _a.kw, _a.cG);
_g.bc.registerClass("_g.bc", _g.K, _a.kw, _a.cG);
_g.bO.registerClass("_g.bO", _g.lg, _g.lb, _a.kw, _a.cG);
_g.E.registerClass("_g.E", _g.K, _a.kw, _a.cG);
_g.fh.registerClass("_g.fh");
SmimeControlSettings.registerClass("SmimeControlSettings");
SmimeStrings.registerClass("SmimeStrings");
_g.a.registerClass("_g.a", _g.K, _g.cg, _g.h, _a.jG, _ff.b, _a.kw, _a.cG);
_g.fi.registerClass("_g.fi");
_g.U.registerClass("_g.U", _g.lg, _g.lb, _g.IReadingPaneOptions, _a.kw, _a.cG);
_g.by.registerClass("_g.by", _g.lg, _g.lb, _g.lc, _a.kw, _a.cG);
_g.dY.registerClass("_g.dY", _g.K, _a.kw, _a.cG);
_g.gV.registerClass("_g.gV", _g.K, _a.kw, _a.cG);
_g.gW.registerClass("_g.gW", _g.K, _a.kw, _a.cG);
_g.fd.registerClass("_g.fd", _g.K, _a.kw, _a.cG);
_g.dq.registerClass("_g.dq", _g.K, _a.kw, _a.cG);
_g.bN.registerClass("_g.bN", _g.K, _a.kw, _a.cG);
_g.X.registerClass("_g.X", _g.K, _a.kw, _a.cG);
_g.dr.registerClass("_g.dr", _g.j, _a.kw, _a.cG);
_g.dZ.registerClass("_g.dZ", _g.K, _a.kw, _a.cG);
_g.be.registerClass("_g.be", _g.K, _a.kw, _a.cG);
_g.gX.registerClass("_g.gX", _g.K, _a.kw, _a.cG);
_g.bW.registerClass("_g.bW", _g.gX, _a.kw, _a.cG);
_g.gZ.registerClass("_g.gZ", _g.i, _a.kw, _a.cG);
_g.bh.registerClass("_g.bh", _g.gZ, _a.kw, _a.cG);
_g.ha.registerClass("_g.ha", _g.bh, _a.kw, _a.cG);
_g.bx.registerClass("_g.bx", _g.ha, _a.kw, _a.cG);
_g.cQ.registerClass("_g.cQ", _g.bx, _a.kw, _a.cG);
_g.ci.registerClass("_g.ci", _g.K, _a.kw, _a.cG);
_g.u.registerClass("_g.u", _g.j, _a.kw, _a.cG);
_g.cR.registerClass("_g.cR", _g.gV, _a.kw, _a.cG);
_g.eb.registerClass("_g.eb", _g.K, _a.kw, _a.cG);
_g.gY.registerClass("_g.gY", _g.bx, _a.kw, _a.cG);
_g.cD.registerClass("_g.cD", _g.bx, _a.kw, _a.cG);
_g.cE.registerClass("_g.cE", _g.bx, _a.kw, _a.cG);
_g.bX.registerClass("_g.bX", _g.u, _a.kw, _a.cG);
_g.bI.registerClass("_g.bI", _g.K, _a.kw, _a.cG);
_g.cv.registerClass("_g.cv", _g.K, _a.kw, _a.cG);
_g.dp.registerClass("_g.dp", _g.K, _a.kw, _a.cG);
_g.H.dataContractName = "ActionRecord:#Exchange";
_g.H.b = 0;
_g.em._dataContractName = "Conversation:#Exchange";
_g.cs._dataContractName = "SuggestionType:#Exchange";
_g.e._dataContractName = "ItemId:#Exchange";
_g.cz._dataContractName = "QueryStringType:#Exchange";
_g.z._dataContractName = "CalendarItem:#Exchange";
_g.bY.a = "Descending";
_g.bY.c = new _g.d("ConversationLastDeliveryTime").FieldURI;
_g.bt.a = "Descending";
_g.W._dataContractName = "JsonFaultBody:#Exchange";
_g.eC._dataContractName = "LinkPreview:#Exchange";
_g.bq._dataContractName = "AttachmentType:#Exchange";
_g.dD._dataContractName = "ItemIdAttachment:#Exchange";
_g.dj._dataContractName = "Notification:#Exchange";
_g.ck._dataContractName = "ComplianceConfiguration:#Exchange";
_g.P.a = null;
_g.P._dataContractName = "SmimeAdminSettingsType:#Exchange";
_g.S._dataContractName = "SubscriptionParameters:#Exchange";
_g.cS._dataContractName = "AcceptItem:#Exchange";
_g.fj._dataContractName = "AcceptSharingInvitation:#Exchange";
_g.fk._dataContractName = "AddItemToMyCalendar:#Exchange";
_g.bJ._dataContractName = "AddressListId:#Exchange";
_g.du._dataContractName = "ApplicationSettingsType:#Exchange";
_g.ec._dataContractName = "AppliedHashtagWrapper:#Exchange";
_g.hO._dataContractName = "AppliedHashtagsPreviewWrapper:#Exchange";
_g.ee._dataContractName = "ApprovalRequestDataType:#Exchange";
_g.bi._dataContractName = "AttachmentId:#Exchange";
_g.fr._dataContractName = "AttachmentPolicyType:#Exchange";
_g.hY._dataContractName = "ContentPreview:#Exchange";
_g.eg._dataContractName = "BingNativeAdsData:#Exchange";
_g.t._dataContractName = "BodyContentType:#Exchange";
_g.hh._dataContractName = "BootUserProfile:#Exchange";
_g.ic._dataContractName = "BreadcrumbAdapterType:#Exchange";
_g.ie._dataContractName = "CalendarDataProvider:#Exchange";
_g.ei._dataContractName = "CancelCalendarItem:#Exchange";
_g.bC._dataContractName = "CategoryType:#Exchange";
_g.ClientVersionProvider.currentOWSVersion = "V2018_01_18";
_g.hi._dataContractName = "ConnectedAccountInfo:#Exchange";
_g.dw._dataContractName = "Contact:#Exchange";
_g.ek._dataContractName = "ContactsFolder:#Exchange";
_g.cl._dataContractName = "ConversationNode:#Exchange";
_g.el._dataContractName = "ConversationThread:#Exchange";
_g.cV._dataContractName = "DeclineItem:#Exchange";
_g.s._dataContractName = "DistinguishedFolderId:#Exchange";
_g.dy._dataContractName = "DistributionList:#Exchange";
_g.eq._dataContractName = "DocLink:#Exchange";
_g.cH._dataContractName = "EffectiveRightsType:#Exchange";
_g.g._dataContractName = "EmailAddress:#Exchange";
_g.iE._dataContractName = "EntityExtractionResultType:#Exchange";
_g.T._dataContractName = "ExtendedPropertyType:#Exchange";
_g.O._dataContractName = "ExtendedPropertyUri:#Exchange";
_g.er._dataContractName = "FindConversationJsonResponse:#Exchange";
_g.et._dataContractName = "FindConversationResponseMessage:#Exchange";
_g.cI._dataContractName = "FlagType:#Exchange";
_g.m._dataContractName = "FolderId:#Exchange";
_g.bD._dataContractName = "Folder:#Exchange";
_g.bL._dataContractName = "ForwardItem:#Exchange";
_g.cX._dataContractName = "Term:#Exchange";
_g.L._dataContractName = "IndexedPageView:#Exchange";
_g.gi._dataContractName = "InReplyToAdapterType:#Exchange";
_g.iW._dataContractName = "InternetHeaderType:#Exchange";
_g.ba._dataContractName = "IsEqualTo:#Exchange";
_g.dE._dataContractName = "ItemInfoResponseMessage:#Exchange";
_g.M._dataContractName = "Item:#Exchange";
_g.gj._dataContractName = "JsonFaultResponse:#Exchange";
_g.eD._dataContractName = "LocalEventsLocationType:#Exchange";
_g.iY._dataContractName = "LikeWrapper:#Exchange";
_g.iX._dataContractName = "LikesPreviewWrapper:#Exchange";
_g.dF._dataContractName = "MailboxStatisticsItem:#Exchange";
_g.jd._dataContractName = "ManagedFolderInformationType:#Exchange";
_g.cY._dataContractName = "ManagementRoleType:#Exchange";
_g.eE._dataContractName = "MasterCategoryListType:#Exchange";
_g.cp._dataContractName = "MeetingMessage:#Exchange";
_g.dG._dataContractName = "MeetingRegistrationResponseObjectType:#Exchange";
_g.bZ._dataContractName = "MeetingRequestMessageType:#Exchange";
_g.cq._dataContractName = "MeetingResponseMessageType:#Exchange";
_g.jh._dataContractName = "MessageSafetyType:#Exchange";
_g.J._dataContractName = "Message:#Exchange";
_g.eF._dataContractName = "MimeContentType:#Exchange";
_g.gn._dataContractName = "MobileDevicePolicySettingsType:#Exchange";
_g.eG._dataContractName = "ModernGroupType:#Exchange";
_g.cL._dataContractName = "ModernReminderType:#Exchange";
_g.cZ._dataContractName = "NavBarData:#Exchange";
_g.eH._dataContractName = "NavBarImageClipInfo:#Exchange";
_g.eI._dataContractName = "NavBarImageData:#Exchange";
_g.bE._dataContractName = "NavBarLinkData:#Exchange";
_g.jn._dataContractName = "NavBarUnclusteredImageData:#Exchange";
_g.jr._dataContractName = "OutlookFavorites:#Exchange";
_g.js._dataContractName = "OutlookFavoriteType:#Exchange";
_g.cy._dataContractName = "OwaUserConfiguration:#Exchange";
_g.db._dataContractName = "OwaViewStateConfiguration:#Exchange";
_g.eJ._dataContractName = "Permissions:#Exchange";
_g.cM._dataContractName = "Permission:#Exchange";
_g.p._dataContractName = "PhoneNumberType:#Exchange";
_g.gt._dataContractName = "PolicySettingsType:#Exchange";
_g.cr._dataContractName = "PersonaPostalAddress:#Exchange";
_g.dc._dataContractName = "PostItem:#Exchange";
_g.gu._dataContractName = "PostReplyItemBaseType:#Exchange";
_g.eK._dataContractName = "PostReplyItem:#Exchange";
_g.hr._dataContractName = "PropertyErrorType:#Exchange";
_g.ju._dataContractName = "PropertyExistenceType:#Exchange";
_g.d._dataContractName = "PropertyUri:#Exchange";
_g.gv._dataContractName = "ProposeNewTime:#Exchange";
_g.jv._dataContractName = "ReactOptinSettings:#Exchange";
_g.jw._dataContractName = "RecipientCountsType:#Exchange";
_g.bn._dataContractName = "RecurringMasterItemId:#Exchange";
_g.eL._dataContractName = "ReferenceItemResponseType:#Exchange";
_g.eM._dataContractName = "ReminderMessageDataType:#Exchange";
_g.de._dataContractName = "RemoveItem:#Exchange";
_g.dK._dataContractName = "ReparentItem:#Exchange";
_g.bw._dataContractName = "ReplyAllToItem:#Exchange";
_g.bQ._dataContractName = "ReplyToItem:#Exchange";
_g.bo._dataContractName = "ResponseObjectType:#Exchange";
_g.eN._dataContractName = "RetentionPolicyTag:#Exchange";
_g.bM._dataContractName = "RetentionTagType:#Exchange";
_g.dL._dataContractName = "RightsManagementLicenseDataType:#Exchange";
_g.eO._dataContractName = "SafetyUserOptionsType:#Exchange";
_g.dM._dataContractName = "SearchFolder:#Exchange";
_g.jF._dataContractName = "SearchParametersType:#Exchange";
_g.jG._dataContractName = "SearchPreviewItem:#Exchange";
_g.bj._dataContractName = "SeekToConditionPageView:#Exchange";
_g.dN._dataContractName = "SegmentationSettingsType:#Exchange";
_g.dO._dataContractName = "SessionSettingsType:#Exchange";
_g.jJ._dataContractName = "ShellDimensions:#Exchange";
_g.R._dataContractName = "SingleRecipientType:#Exchange";
_g.gB._dataContractName = "SingleResponseMessage:#Exchange";
_g.dP._dataContractName = "SmartResponseBaseType:#Exchange";
_g.cc._dataContractName = "SmartResponseType:#Exchange";
_g.bA._dataContractName = "SortResults:#Exchange";
_g.gD._dataContractName = "SuppressReadReceipt:#Exchange";
_g.jO._dataContractName = "SyncFolderHierarchyChangesType:#Exchange";
_g.jP._dataContractName = "SyncFolderHierarchyResponseMessage:#Exchange";
_g.F._dataContractName = "TargetFolderId:#Exchange";
_g.bR._dataContractName = "Task:#Exchange";
_g.dg._dataContractName = "TentativelyAcceptItem:#Exchange";
_g.hy._dataContractName = "TimeZoneOffsetsType:#Exchange";
_g.eS._dataContractName = "UnseenData:#Exchange";
_g.dT._dataContractName = "UserConfigurationDictionaryEntry:#Exchange";
_g.cB._dataContractName = "UserConfigurationDictionaryObject:#Exchange";
_g.eV._dataContractName = "UserId:#Exchange";
_g.dU._dataContractName = "UserOptionsType:#Exchange";
_g.kf._dataContractName = "VotingInformationType:#Exchange";
_g.di._dataContractName = "WeatherLocationType:#Exchange";
_g.gO._dataContractName = "WellKnownResponseObjectType:#Exchange";
_g.dk._dataContractName = "WorkingHoursType:#Exchange";
_g.cw._dataContractName = "AttributionType:#Exchange";
_g.ca._dataContractName = "PersonaType:#Exchange";
_g.dQ._dataContractName = "StringArrayAttributedValue:#Exchange";
_g.hj._dataContractName = "Conversation:#Exchange";
_g.hq._dataContractName = "PeopleFilter:#Exchange";
_g.dJ._dataContractName = "Reminder:#Exchange";
_g.eu._dataContractName = "FindFolderJsonResponse:#Exchange";
_g.ev._dataContractName = "FindItemJsonResponse:#Exchange";
_g.ex._dataContractName = "GetConversationItemsJsonResponse:#Exchange";
_g.ez._dataContractName = "GetItemJsonResponse:#Exchange";
_g.hv._dataContractName = "RemoteServiceRequest:#Exchange";
_g.eT._dataContractName = "UpdateItemJsonResponse:#Exchange";
_g.eU._dataContractName = "UpdateItemResponseMessage:#Exchange";
_g.ik._dataContractName = "CopyItemJsonResponse:#Exchange";
_g.io._dataContractName = "CreateFolderJsonResponse:#Exchange";
_g.fS._dataContractName = "FolderInfoResponseMessage:#Exchange";
_g.fz._dataContractName = "CreateItemJsonResponse:#Exchange";
_g.iv._dataContractName = "DeleteFolderJsonResponse:#Exchange";
_g.fO._dataContractName = "FindFolderResponseMessage:#Exchange";
_g.fR._dataContractName = "FindItemResponseMessage:#Exchange";
_g.iM._dataContractName = "GetCertsInfoResponse:#Exchange";
_g.fZ._dataContractName = "GetConversationItemsResponseMessage:#Exchange";
_g.iN._dataContractName = "GetCertsResponse:#Exchange";
_g.ga._dataContractName = "GetFavoritesResponse:#Exchange";
_g.gc._dataContractName = "GetFolderJsonResponse:#Exchange";
_g.eP._dataContractName = "TargetFolderMruConfiguration:#Exchange";
_g.iS._dataContractName = "GetLinkPreviewResponse:#Exchange";
_g.iL._dataContractName = "GetCalendarFolderConfigurationResponse:#Exchange";
_g.gs._dataContractName = "OwaOtherMailboxConfiguration:#Exchange";
_g.jN._dataContractName = "SubscriptionResponseData:#Exchange";
_g.jk._dataContractName = "MoveFolderJsonResponse:#Exchange";
_g.jV._dataContractName = "UpdateFolderJsonResponse:#Exchange";
_g.jB._dataContractName = "SearchMailboxesJsonResponse:#Exchange";
_g.jD._dataContractName = "SearchMailboxesResponseMessage:#Exchange";
_g.jY._dataContractName = "UpdateMasterCategoryListResponse:#Exchange";
_g.ed._dataContractName = "ApplyConversationActionJsonRequest:#Exchange";
_g.hU._dataContractName = "ApplyMessageActionJsonResponse:#Exchange";
_g.fo._dataContractName = "ApplyMessageActionJsonRequest:#Exchange";
_g.hQ._dataContractName = "ApplyConversationActionJsonResponse:#Exchange";
_g.dx._dataContractName = "CreateItemJsonRequest:#Exchange";
_g.eo._dataContractName = "DeleteItemJsonRequest:#Exchange";
_g.ix._dataContractName = "DeleteItemJsonResponse:#Exchange";
_g.fG._dataContractName = "EmptyFolderJsonRequest:#Exchange";
_g.iC._dataContractName = "EmptyFolderJsonResponse:#Exchange";
_g.dR._dataContractName = "UpdateItemJsonRequest:#Exchange";
_g.gJ._dataContractName = "UpdateUserConfigurationJsonRequest:#Exchange";
_g.ka._dataContractName = "UpdateUserConfigurationJsonResponse:#Exchange";
_g.ir._dataContractName = "CreateSweepRuleForSenderJsonResponse:#Exchange";
_g.iJ._dataContractName = "GetAllowedOptionsResponse:#Exchange";
_g.gf._dataContractName = "GetRemindersJsonResponse:#Exchange";
_g.ke._dataContractName = "ValidateAggregatedConfigurationResponse:#Exchange";
_g.bK._dataContractName = "ConversationAction:#Exchange";
_g.gm._dataContractName = "MessageAction:#Exchange";
_g.bm._dataContractName = "ItemChange:#Exchange";
_g.V._dataContractName = "ItemResponseShape:#Exchange";
_g.co._dataContractName = "JsonRequestHeaders:#Exchange";
_g.cU._dataContractName = "CreateItemRequest:#Exchange";
_g.bf._dataContractName = "RestrictionType:#Exchange";
_g.dA._dataContractName = "FindItemRequest:#Exchange";
_g.cG._dataContractName = "ConversationRequestType:#Exchange";
_g.cK._dataContractName = "GetLinkPreviewRequest:#Exchange";
_g.gC._dataContractName = "SubscriptionData:#Exchange";
_g.es._dataContractName = "FindConversationRequest:#Exchange";
_g.fD._dataContractName = "Datapoint:#Exchange";
_g.fU._dataContractName = "GetCalendarFoldersResponse:#Exchange";
_g.jH._dataContractName = "SendLinkClickedSignalToSPRequest:#Exchange";
_g.gE._dataContractName = "TargetFolderMRUEntry:#Exchange";
_g.r._dataContractName = "SetItemField:#Exchange";
_g.bd._dataContractName = "DeleteItemField:#Exchange";
_g.gI._dataContractName = "UpdateMasterCategoryListRequest:#Exchange";
_g.cJ._dataContractName = "FolderResponseShape:#Exchange";
_g.fu._dataContractName = "ConversationResponseShape:#Exchange";
_g.fs._dataContractName = "AttachmentResponseShapeType:#Exchange";
_g.jo._dataContractName = "NotificationPayloadBase:#Exchange";
_g.iV._dataContractName = "HierarchyNotificationPayload:#Exchange";
_g.ej._dataContractName = "ChatMessage:#Exchange";
_g.dd._dataContractName = "RefinerDataType:#Exchange";
_g.jA._dataContractName = "RowNotificationPayload:#Exchange";
_g.jQ._dataContractName = "TenantThemeData:#Exchange";
_g.jE._dataContractName = "SearchNotificationPayload:#Exchange";
_g.eA._dataContractName = "GetRemindersJsonRequest:#Exchange";
_g.br._dataContractName = "PersonaPropertyUpdate:#Exchange";
_g.gw._dataContractName = "RefinementFilterType:#Exchange";
_g.eh._dataContractName = "CalendarActionResponse:#Exchange";
_g.fn._dataContractName = "ApplyConversationActionRequest:#Exchange";
_g.fp._dataContractName = "ApplyMessageActionRequest:#Exchange";
_g.hu._dataContractName = "RefinerDataEntryType:#Exchange";
_g.ih._dataContractName = "ConvertAttachmentTypeNotificationPayload:#Exchange";
_g.hd._dataContractName = "BaseMoveCopyFolderRequest:#Exchange";
_g.hX._dataContractName = "AttachmentNotificationPayload:#Exchange";
_g.fA._dataContractName = "CreateItemResponse:#Exchange";
_g.ey._dataContractName = "GetConversationItemsRequest:#Exchange";
_g.hw._dataContractName = "ResponseShape:#Exchange";
_g.dS._dataContractName = "UpdateItemRequest:#Exchange";
_g.gH._dataContractName = "UpdateItemResponse:#Exchange";
_g.da._dataContractName = "OwaFlightOverrideData:#Exchange";
_g.ji._dataContractName = "ModernGroupMembershipRequestMessageDetailsResponse:#Exchange";
_g.cN._dataContractName = "PhotoPreview:#Exchange";
_g.fq._dataContractName = "AttachmentDataProviderPermissions:#Exchange";
_g.ii._dataContractName = "ConvertLocalToRefAttachmentNotificationPayload:#Exchange";
_g.fH._dataContractName = "ExtensibilityContext:#Exchange";
_g.fI._dataContractName = "Extension:#Exchange";
_g.kg._dataContractName = "VotingOptionDataType:#Exchange";
_g.fN._dataContractName = "FindFolderResponse:#Exchange";
_g.fQ._dataContractName = "FindItemResponse:#Exchange";
_g.fY._dataContractName = "GetConversationItemsResponse:#Exchange";
_g.ge._dataContractName = "GetItemResponse:#Exchange";
_g.il._dataContractName = "CopyItemResponse:#Exchange";
_g.ip._dataContractName = "CreateFolderResponse:#Exchange";
_g.iw._dataContractName = "DeleteFolderResponse:#Exchange";
_g.gd._dataContractName = "GetFolderResponse:#Exchange";
_g.iP._dataContractName = "GetFolderChangeDigestResponse:#Exchange";
_g.jl._dataContractName = "MoveFolderResponse:#Exchange";
_g.jW._dataContractName = "UpdateFolderResponse:#Exchange";
_g.jC._dataContractName = "SearchMailboxesResponse:#Exchange";
_g.hR._dataContractName = "ApplyConversationActionResponse:#Exchange";
_g.hV._dataContractName = "ApplyMessageActionResponse:#Exchange";
_g.iy._dataContractName = "DeleteItemResponse:#Exchange";
_g.iD._dataContractName = "EmptyFolderResponse:#Exchange";
_g.kb._dataContractName = "UpdateUserConfigurationResponse:#Exchange";
_g.is._dataContractName = "CreateSweepRuleForSenderResponse:#Exchange";
_g.gh._dataContractName = "GetRemindersResponse:#Exchange";
_g.gg._dataContractName = "GetRemindersRequest:#Exchange";
_g.dh._dataContractName = "TimeZoneContext:#Exchange";
_g.cA._dataContractName = "TimeZoneDefinitionType:#Exchange";
_g.fw._dataContractName = "CopyItemRequest:#Exchange";
_g.fv._dataContractName = "CopyItemJsonRequest:#Exchange";
_g.fy._dataContractName = "CreateFolderRequest:#Exchange";
_g.fx._dataContractName = "CreateFolderJsonRequest:#Exchange";
_g.gN._dataContractName = "VotingResponseItem:#Exchange";
_g.fF._dataContractName = "DeleteFolderRequest:#Exchange";
_g.fE._dataContractName = "DeleteFolderJsonRequest:#Exchange";
_g.ep._dataContractName = "DeleteItemRequest:#Exchange";
_g.fL._dataContractName = "FindFolderParentWrapper:#Exchange";
_g.fM._dataContractName = "FindFolderRequest:#Exchange";
_g.fK._dataContractName = "FindFolderJsonRequest:#Exchange";
_g.dz._dataContractName = "FindItemJsonRequest:#Exchange";
_g.bv._dataContractName = "GetItemRequest:#Exchange";
_g.bu._dataContractName = "GetItemJsonRequest:#Exchange";
_g.fX._dataContractName = "GetConversationItemsJsonRequest:#Exchange";
_g.fV._dataContractName = "GetCertsRequest:#Exchange";
_g.dC._dataContractName = "GetFolderRequest:#Exchange";
_g.dB._dataContractName = "GetFolderJsonRequest:#Exchange";
_g.ew._dataContractName = "GetCalendarFolderConfigurationRequest:#Exchange";
_g.dH._dataContractName = "NotificationSubscribeJsonRequest:#Exchange";
_g.fJ._dataContractName = "FindConversationJsonRequest:#Exchange";
_g.gl._dataContractName = "MarkAsJunkRequest:#Exchange";
_g.gk._dataContractName = "MarkAsJunkJsonRequest:#Exchange";
_g.cx._dataContractName = "MentionActionWrapper:#Exchange";
_g.jg._dataContractName = "MentionsPreviewWrapper:#Exchange";
_g.gr._dataContractName = "MoveItemRequest:#Exchange";
_g.gq._dataContractName = "MoveItemJsonRequest:#Exchange";
_g.gp._dataContractName = "MoveFolderRequest:#Exchange";
_g.go._dataContractName = "MoveFolderJsonRequest:#Exchange";
_g.cb._dataContractName = "SetFolderField:#Exchange";
_g.cn._dataContractName = "FolderChange:#Exchange";
_g.cd._dataContractName = "UpdateFolderRequest:#Exchange";
_g.ct._dataContractName = "UpdateFolderJsonRequest:#Exchange";
_g.gz._dataContractName = "SearchMailboxesRequest:#Exchange";
_g.gy._dataContractName = "SearchMailboxesJsonRequest:#Exchange";
_g.gL._dataContractName = "UserConfigurationNameType:#Exchange";
_g.gA._dataContractName = "ServiceUserConfiguration:#Exchange";
_g.gK._dataContractName = "UpdateUserConfigurationOwaRequest:#Exchange";
_g.en._dataContractName = "DeleteFolderField:#Exchange";
_g.hS._dataContractName = "ApplyConversationActionResponseMessage:#Exchange";
_g.hW._dataContractName = "ApplyMessageActionResponseMessage:#Exchange";
_g.iz._dataContractName = "DeleteItemResponseMessage:#Exchange";
_g.fm._dataContractName = "ApplyBulkItemActionRequest:#Exchange";
_g.fl._dataContractName = "ApplyBulkItemActionJsonRequest:#Exchange";
_g.fC._dataContractName = "CreateSweepRuleForSenderRequest:#Exchange";
_g.fB._dataContractName = "CreateSweepRuleForSenderJsonRequest:#Exchange";
_g.it._dataContractName = "CreateSweepRuleForSenderResponseMessage:#Exchange";
_g.fT._dataContractName = "GetAllowedOptionsRequest:#Exchange";
_g.gM._dataContractName = "ValidateAggregatedConfigurationRequest:#Exchange";
_g.hz._dataContractName = "UpdateUserConfigurationRequest:#Exchange";
_g.Y._dataContractName = "Constant:#Exchange";
_g.Z._dataContractName = "FieldURIOrConstantType:#Exchange";
_g.jf._dataContractName = "MasterCategoryListActionResponse:#Exchange";
_g.hx._dataContractName = "StoreObjectChangeBase:#Exchange";
_g.eQ._dataContractName = "UnifiedGroupsSet:#Exchange";
_g.eR._dataContractName = "UnifiedGroupsSetsType:#Exchange";
_g.fP._dataContractName = "FindItemParentWrapper:#Exchange";
_g.eB._dataContractName = "IsLessThanOrEqualTo:#Exchange";
_g.jq._dataContractName = "OtherMailboxConfigEntry:#Exchange";
_g.hB._dataContractName = "App:#Exchange";
_g.kh._dataContractName = "WordInformation:#Exchange";
_g.ia._dataContractName = "BodyFragmentType:#Exchange";
_g.I.e = null;
_g.I.f = null;
_g.I.a = null;
_g.I.c = null;
_g.I.b = !1;
_g.bs.b = _a.a.eB;
CoreWebServicesComponent.$$cctor();
_g.bb.a = null;
_g.n.f = null;
_g.C.b = null;
_g.bS.b = new _a.bk("15.01.0603.000");
_g.bS.c = new _a.bk("15.01.0536.000");
_g.bS.d = new _a.bk("15.01.0423.000");
_g.bS.a = {
    DummyFeatureOne: new _a.bk("15.00.0707.000"),
    DummyFeatureTwo: new _a.bk("15.00.0765.000"),
    DraftsForGroupAttachments: new _a.bk("15.00.0878.000"),
    MemberSearchInUnifiedGroup: new _a.bk("15.00.0934.000"),
    AttachmentUploadCancellation: new _a.bk("15.00.1019.000"),
    AttachmentShowGroups: new _a.bk("15.00.1029.000"),
    AttachmentGetOneDriveUploadFolderName: new _a.bk("15.00.1039.000"),
    SlicedAttachments: new _a.bk("15.01.0016.000"),
    UseEmptyPost: new _a.bk("15.01.0036.000"),
    SaveAttachmentsToCloud: new _a.bk("15.01.0081.001"),
    AttachmentGetOneDriveUploadFolderProps: new _a.bk("15.01.0178.000"),
    PersonaEffectiveRights: new _a.bk("15.01.0190.000"),
    OwaPublicFolderFavorites: new _a.bk("15.01.0207.000"),
    ClassicSlicedAttachments: new _a.bk("15.01.0207.000"),
    EntityNamesMapServerChanges: new _a.bk("15.01.0254.000"),
    OwaPublicFolderXRF: new _a.bk("15.01.0330.000"),
    ExtractionSourceIdChanges: new _a.bk("15.01.0342.000"),
    TailoredXpEntitiesChanges: new _a.bk("15.01.0377.000"),
    SetAttachmentPermsV2: _g.bS.d,
    SyncDelivery: new _a.bk("15.01.0477.000"),
    TieredNotification: new _a.bk("15.01.0466.000"),
    OwaLocationWellMultipleLocations: _g.bS.b,
    UnifiedGroupOwnerApproveMembers: new _a.bk("15.01.0709.000"),
    GetFileItemsCrossCacheServer: new _a.bk("15.01.0858.000"),
    PoundPercentInSharePointFileName: new _a.bk("15.01.0917.000"),
    ModernGroupsRetentionPolicyMenu: new _a.bk("15.01.0929.000"),
    ModernGroupsConversationReadUnread: new _a.bk("15.01.0991.000"),
    NewestAddedMemberTypeError: new _a.bk("15.01.1356.000")
};
_g.k.g = _a.a.fb;
_g.k.a = null;
_g.k.f = !1;
_g.k.c = null;
_g.k.e = null;
_g.k.b = null;
_g.Q.c = ["X-FrontEnd-Begin", "X-FrontEnd-End", "X-BackEnd-Begin", "X-BackEnd-End", "X-FrontEnd-Handler-Begin"];
_g.Q.b = ["X-EXT-ProxyBegin", "X-EXT-ProxyEnd", "X-EXT-ACSBegin", "X-EXT-ACSEnd"];
_g.Q.a = "";
_g.Q.g = !1;
_g.Q.i = _a.a.cy;
_g.Q.d = null;
_g.bV.b = _g.bV.a("", "", "", "", "");
_g.dX.a = _a.a.fw;
_g.gT.$$cctor();
_g.K.b = null;
_g.Attachment.$$cctor();
_g.y.$$cctor();
_g.bF.$$cctor();
_g.cf.$$cctor();
_g.bG.a = "IsRead";
_g.f.c = new _a.d(4500, 8, 1, 0, 0, 0, 0, 0);
_g.f.i = _g.f.c.c(-1);
_g.f.D = _g.f.c.c(1);
_g.f.n = "IPM.Schedule.Meeting.Request";
_g.f.b = null;
_g.f.$$cctor();
var $$t_0;
_g.B.a = ($$t_0 = new _g.B, $$t_0.c(new _g.e("ItemIdAttachmentSeparator")), $$t_0);
_g.B.$$cctor();
_g.bp.$$cctor();
_g.cu.$$cctor();
_g.c.u = null;
_g.c.U = null;
_g.c.E = null;
_g.c.K = null;
_g.c.o = null;
_g.c.W = null;
_g.c.I = null;
_g.c.t = null;
_g.c.j = null;
_g.c.g = null;
_g.c.e = null;
_g.c.f = null;
_g.c.h = null;
_g.c.l = null;
_g.c.k = null;
_g.c.L = null;
_g.c.J = null;
_g.c.bc = null;
_g.c.Y = null;
_g.c.X = null;
_g.c.ba = null;
_g.c.C = null;
_g.c.bf = null;
_g.c.n = null;
_g.c.x = null;
_g.c.s = null;
_g.c.r = null;
_g.c.p = null;
_g.c.H = null;
_g.c.G = null;
_g.c.F = null;
_g.c.V = null;
_g.c.bb = null;
_g.c.Z = null;
_g.c.bg = null;
_g.c.y = null;
_g.c.z = null;
_g.c.B = null;
_g.c.A = null;
_g.c.be = null;
_g.c.bd = null;
_g.c.D = null;
_g.c.m = null;
_g.j.$$cctor();
_g.o.$$cctor();
_g.i.$$cctor();
_g.ce.$$cctor();
_g.v.b = null;
_g.v.a = null;
_g.v.c = null;
_g.v.$$cctor();
_g.ds.$$cctor();
_g.bl.$$cctor();
_g.cF.$$cctor();
_g.w.$$cctor();
_g.bg.$$cctor();
_g.b.a = null;
_g.D.c = "DateTimeReceived";
_g.D.f = "ConversationLastDeliveryTime";
_g.D.g = ["hashtag#Newsletters", "hashtag#Promotions", "hashtag#Packages", "hashtag#Travel", "hashtag#Receipts"];
_g.D.e = !1;
_g.ea.$$cctor();
_g.bc.$$cctor();
_g.bO.a = null;
_g.bO.$$cctor();
_g.E.$$cctor();
_g.A.a = null;
_g.A.c = null;
_g.A.i = 0;
_g.A.l = 0;
_g.A.h = [81, 63, 77, 15, 53, 69, 83, 55, 85];
_g.A.j = [5];
_g.A.b = null;
_g.a.b = null;
_g.a.$$cctor();
_g.U.a = null;
_g.U.$$cctor();
_g.by.a = null;
_g.by.$$cctor();
_g.dY.$$cctor();
_g.gU.$$cctor();
_g.gV.$$cctor();
_g.gW.$$cctor();
_g.fd.$$cctor();
_g.dq.$$cctor();
_g.bN.$$cctor();
_g.X.$$cctor();
_g.dr.$$cctor();
_g.dZ.$$cctor();
_g.be.$$cctor();
_g.bW.$$cctor();
_g.cQ.$$cctor();
_g.ci.$$cctor();
_g.u.$$cctor();
_g.cR.$$cctor();
_g.gX.$$cctor();
_g.eb.$$cctor();
_g.gY.$$cctor();
_g.cD.$$cctor();
_g.cE.$$cctor();
_g.bh.$$cctor();
_g.gZ.$$cctor();
_g.bX.$$cctor();
_g.bI.$$cctor();
_g.ha.$$cctor();
_g.bx.$$cctor();
_g.cv.$$cctor();
_g.dp.$$cctor();
var IDialogViewModel = function() {};
IDialogViewModel.registerInterface("IDialogViewModel");
Type.registerNamespace("_bc");
var IBposUrlProvider = function() {};
IBposUrlProvider.registerInterface("IBposUrlProvider");
_bc.w = function() {};
_bc.w.registerInterface("_bc.w");
_bc.a = function() {};
_bc.a.registerInterface("_bc.a");
_bc.bR = function() {};
_bc.bR.registerInterface("_bc.bR");
_bc.M = function() {};
_bc.M.prototype = {
    noneSet: -1,
    errorCategoryNameAlreadyExists: 30,
    errorStaffAlreadyExists: 31,
    errorCategoryNameHasInvalidCharacters: 35,
    errorCannotCreatePublicFolderMeetings: 36,
    errorMessageCanNotBeSaved: 40,
    errorTaskCanNotBeSaved: 41,
    errorQuotaExceededTaskCanNotBeSaved: 42,
    errorQuotaExceededMessageCanNotBeSaved: 43,
    errorCalendarEventCanNotBeCreated: 44,
    errorMessageCanNotBeSent: 45,
    errorQuotaExceededMessageCanNotBeSent: 46,
    errorSubmissionQuotaExceededMessageCanNotBeSent: 47,
    errorIrmTooManyRecipients: 48,
    errorIRMandSMIMEonSameMessage: 49,
    errorDisconnectedCanNotBeSaved: 50,
    errorDisconnectedTaskCanNotBeSaved: 51,
    errorDisconnectedCanNotBeSent: 55,
    errorMessageCanNotBeSavedPermanent: 57,
    errorMessageCanNotBeSentPermanent: 58,
    errorItemNoLongerExistToSave: 60,
    errorItemNoLongerExistToSend: 62,
    errorTaskNoLongerExistToSave: 63,
    errorInvalidRecipientsMailCanNotBeSend: 65,
    errorInvalidSenderMailCanNotBeSend: 66,
    errorInvalidRecipientsMeetingCanNotExecuteOperation: 67,
    errorInvalidPollResource: 68,
    errorNoRecipentsMailCanNotBeSend: 70,
    errorInvalidCustomerAddress: 71,
    errorBookingStaffDownloadFailed: 72,
    errorBookingServicesDownloadFailed: 73,
    errorNoPollOptionSelectedCanNotBeFinalized: 74,
    errorAttachmentInProgressMailCanNotBeSend: 75,
    errorPollWithOneOptionCannotBeSaved: 76,
    errorInvalidPollRecipient: 77,
    errorPollWithOneAttendeeCannotBeSaved: 78,
    errorPollWithMoreThanMaxAllowedInstancesCannotBeSaved: 79,
    errorNoPermissionToSendAs: 80,
    errorNoMeetingOnFamilyCalendar: 81,
    errorKioskFailedRequest: 82,
    errorItemDoesNotExist: 83,
    errorCantPopout: 84,
    errorCantPopoutWithDetails: 85,
    errorCantNavigateAway: 86,
    errorCantNavigateAwayWithDetails: 87,
    errorRequestTimedOut: 88,
    errorServiceUnavailable: 89,
    errorAccountSuspend: 90,
    errorExceededMaxRecipientLimit: 91,
    errorExceededMessageLimit: 92,
    errorMessageBlocked: 93,
    errorMessageSubmissionBlocked: 94,
    errorNoMeetingAllowedOnCalendar: 95,
    errorFilesListRefreshingFailed: 96,
    errorInvalidRecipientsMailCanNotBeSendInvalidRecipientsList: 97,
    errorAccountSuspendShowTierUpgrade: 98,
    errorExceededMaxRecipientLimitShowTierUpgrade: 99,
    errorExceededMessageLimitShowTierUpgrade: 100,
    errorExceededHourlyMessageLimit: 101,
    errorMessageTimeout: 102,
    errorMessageThrottled: 103,
    errorMessageTransientError: 104,
    errorFilesListViewPartialError: 105,
    errorTrapOnSendWaitingExtensibilityContext: 106,
    errorTrapOnSendApplicationBlockingSend: 107,
    errorInvalidPriceValue: 108,
    errorInvalidBookingFeeValue: 109,
    errorInvalidBookingTaxValue: 110,
    errorInvalidTotalBookingFeeValue: 111,
    errorBookingConsentTextNeeded: 112,
    errorBookingDropDownField: 113,
    errorBookingServiceWindows: 114,
    errorBookingCustomColorScheme: 115,
    lastErrorMessage: 499,
    policyTipMessage: 500,
    lastPolicyTipMessage: 550,
    warningDraftVisibleToAllSiteMailboxMembers: 596,
    warningMailTipMailBoxFull: 597,
    warningMailTipNoPermissionToSend: 598,
    warningMailTipModeratedMessage: 599,
    warningFilesCanNotBeAttached: 600,
    warningFilesCannotBeAttachedCheckPolicy: 601,
    warningFilesWithNamesCannotBeAttachedCheckPolicy: 602,
    warningFilesCanNotBeAttachedGenericError: 610,
    warningFilesCanNotBeAttachedGroupSharePointNotProvisioned: 611,
    warningFilesCanNotBeAttachedGroupGenericError: 612,
    warningSeveralFilesCanNotBeAttachedGenericError: 620,
    warningSeveralFilesCanNotBeAttachedGroupSharePointNotProvisioned: 621,
    warningFilesCanNotBeAttachedGenericErrorNoRetry: 630,
    warningSeveralFilesCanNotBeAttachedGenericErrorNoRetry: 640,
    warningEmptyFilesCanNotBeAttached: 650,
    warningLargeReferenceFileCanNotBeAttached: 655,
    warningAttachmentsCanNotBeDeleted: 660,
    warningAttachmentsCanNotBeDownloaded: 661,
    warningConvertingAttachmentExceedsMaxMessageSize: 662,
    warningConvertLocalToRefAttachmentInProgress: 663,
    warningConvertRefToLocalAttachmentInProgress: 664,
    warningNoPermissionToShareButAccessRequest: 665,
    warningSeveralAttachmentsCanNotBeDeleted: 670,
    warningSeveralAttachmentsCanNotBeDownloaded: 671,
    warningCannotUploadToGroupsFiles: 672,
    warningDragAndDropFromDesktopIsNotSupported: 680,
    warningUnsupportedInlineAttachmentType: 690,
    warningNoPermissionToPerformAction: 700,
    firstSmimeWarningMessagge: 701,
    warningSmimeConversationViewNotSupportedWithClickHere: 703,
    warningSmimeConversationViewNotSupportedSortByDateNeeded: 704,
    warningSmimeConversationViewSignatureNotVerifiedWithClickHere: 706,
    firstSmimeWarningMessaggeWhenEnabled: 710,
    warningSmimeUnknownErrorOccured: 711,
    warningSmimeCannotDecrypt: 713,
    warningSmimeCannotVerify: 714,
    warningSmimeCannotEncrypt: 716,
    warningSmimeCannotSign: 717,
    warningSmimeCannotFetchDataPackage: 725,
    warningSmimePluginNotSupported: 726,
    warningSmimePluginNotInstalledOnEncryptedMessage: 727,
    warningSmimePluginOutOfDate: 728,
    warningSmimeCannotGetCerts: 729,
    warningSmimeQuotedBodyIsNotComplete: 730,
    warningSmimePluginNotInstalledOnSignedMessage: 732,
    warningSmimePluginNotSupportedOnSignedMessage: 733,
    warningSmimePluginNotInstalledOnReplyToSignedMessage: 734,
    warningSmimePluginNotSupportedOnReplyToSignedMessage: 735,
    warningSmimePluginNotInstalledOnForwardOfSignedMessage: 736,
    warningSmimePluginNotSupportedOnForwardOfSignedMessage: 737,
    warningSmimePluginNotInstalledOnCompose: 738,
    warningSmimeNotSupportedForAccount: 739,
    warningSmimeNoCertsFound: 741,
    warningSmimeBccForkedSendFailed: 742,
    warningSmimeCannotVerifyChoosenCertificate: 743,
    warningSmimeChoosenCertificateIsInvalid: 744,
    warningSmimeChoosenCertificateIsRevoked: 745,
    warningSmimeChoosenCertificateIsUntrusted: 746,
    warningSmimePluginOutOfDateReplyForward: 747,
    warningSmimePluginOutOfDateCantOpenMessage: 748,
    warningSmimePluginOutOfDateSigned: 749,
    warningSmimeNotSupportedWithFromRecipientWell: 750,
    warningSmimeDataPackageTooLarge: 752,
    warningSmimeCannotParseMimeContent: 753,
    warningSmimeCannotBuildMimeContent: 754,
    warningSmimeCannotAcquireCspContext: 755,
    warningSmimeCannotEncodeSigningTime: 756,
    warningSmimeCannotOpenMsgToEncode: 757,
    warningSmimeCannotOpenMsgToDecode: 758,
    warningSmimeCannotProcessMessage: 759,
    warningSmimeCannotGetMessageParam: 760,
    warningSmimeCannotGetCertContextProperty: 761,
    warningSmimeCannotGetSigningTimes: 762,
    warningSmimeCannotGetCertsInMessage: 763,
    warningSmimeCannotAddSignerToMessage: 764,
    warningSmimeCannotAddCertsToMessage: 765,
    warningSmimeCannotOpenCertStore: 766,
    warningSmimeCannotGetSubjectCertFromStore: 767,
    warningSmimeUserCanceledSelectingCert: 768,
    warningSmimeCannotAccessSmartcard: 769,
    warningSmimeCannotParseEncryptionAlgorithms: 770,
    warningSmimeCannotParseSigningAlgorithms: 771,
    warningSmimeCannotEncodeSmimeCapabilities: 772,
    warningSmimeControlFailedToConnectToExtensionBackground: 781,
    warningSmimeDomainRejectedError: 782,
    warningSmimeExtensionNotInstalledByDomainAdminOnSignedMessage: 783,
    warningSmimeExtensionNotInstalledByDomainAdminOnEncryptedMessage: 784,
    warningSmimeExtensionNotInstalledByDomainAdminOnCompose: 785,
    lastSmimeWarningMessagge: 799,
    warningMaxRecipientsExceed: 800,
    warningSubmittedMessageNotSent: 801,
    warningMessageSubmitted: 802,
    warningEventNotUpToDateVersion: 900,
    warningLinkAndActiveContentDisabled: 950,
    warningNoMeetingsPollsOnSecondaryCalendar: 974,
    warningNoResponseTrackingForMeetingOnSecondaryCalendar: 975,
    warningCannotEditPublicFolderMeetings: 976,
    warningBookingStaffMissing: 977,
    warningFeedbackSendError: 978,
    warningFeedbackScreenshotError: 979,
    warningPollNotCreated: 980,
    warningFeedbackUvAttachmentFileSizeError: 981,
    warningFeedbackSameAttachmentFileError: 982,
    warningPollWillNotBeSupportedSoon: 983,
    lastWarningMessage: 1e3,
    infoDraftSavedAt: 1001,
    infoDraftWillBeSentWithDelay: 1002,
    infoDraftReparentSuccess: 1003,
    infoDraftReparentFailure: 1004,
    lastDraftMessage: 1005,
    infoEventOccursInThePast: 1100,
    infoMeetingHasBeenCanceled: 1200,
    infoMeetingAttendeeDoNotForward: 1210,
    infoDoesNotRequireResponseAttendee: 1300,
    infoDoesNotRequireResponseOrganizer: 1400,
    infoViewAttendeesPivotForResponseTracking: 1500,
    infoMeetingRequestAcceptedOn: 1600,
    infoMeetingRequestDelegateAcceptedOn: 1700,
    infoMeetingRequestTentativelyAcceptedOn: 1800,
    infoMeetingRequestDelegateTentativelyAcceptedOn: 1900,
    infoMeetingRequestDeclinedOn: 2e3,
    infoMeetingRequestDelegateDeclinedOn: 2100,
    infoRecurrenceOccursInThePast: 2200,
    infoReadingPaneResponded: 2300,
    lastCalendarReadingInfoMessage: 3e3,
    delegateReceviedPrincipalMeetingMessage: 3010,
    infoIrmProtectedMessageIsAttached: 3050,
    infoCancelingSeries: 3100,
    infoForwardingSeries: 3105,
    infoAcceptingSeries: 3110,
    infoTentativelyAcceptingSeries: 3115,
    infoDecliningSeries: 3120,
    infoCancelingOccurrence: 3200,
    infoForwardingOccurrence: 3205,
    infoAcceptingOccurrence: 3210,
    infoTentativelyAcceptingOccurrence: 3215,
    infoDecliningOccurrence: 3220,
    infoTailoredFeedback: 3230,
    infoDelegateAccepted: 3250,
    infoDelegateTentativelyAccepted: 3255,
    infoDelegateDeclined: 3260,
    infoRetrievingMessage: 3400,
    infoUpgradeMessage: 3440,
    infoFailureToShowOriginalMessage: 3450,
    infoMessageMovedToDraft: 3480,
    infoPleaseTreatAsPersonal: 3500,
    infoPleaseTreatAsConfidential: 3600,
    infoPleaseTreatAsPrivate: 3700,
    infoMessageClassification: 3800,
    infoMailTipLargeAudience: 3900,
    infoMailtipCustomText: 4e3,
    infoMailtipAutomaticReply: 4100,
    infoAttachmentNotSafe: 4200,
    infoMailTipExternalRecipients: 4300,
    infoMailtipReplyAllToBCC: 4400,
    infoMailtipAccessibilityChecker: 4460,
    infoIrmProtected: 4499,
    infoOnlyIrmOwnerCanChangeFromField: 4525,
    infoIrmOpenMessageInItemView: 4550,
    infoItemPartLoadFailureMessage: 4575,
    infoComposeEventOccursInThePast: 4600,
    infoComposeSkypeMeetingDetails: 4625,
    infoEditingOccurrenceOfSeries: 4700,
    infoViewingOccurrenceOfSeries: 4710,
    infoEditingMasterOfSeries: 4800,
    infoViewingMasterOfSeries: 4810,
    infoMeetingRequestOutOfDateDeleted: 5e3,
    infoPleaseRespondToApprovalRequest: 5200,
    infoRespondToVote: 5210,
    infoOnlineMeeting: 5400,
    infoDoesNotRequireResponseForInformationalUpdate: 5800,
    infoMeetingAcceptedByDelegate: 5900,
    infoMeetingTentativelyAcceptedByDelegate: 6e3,
    infoMeetingDeclinedByDelegate: 6100,
    infoComposeRecurrenceOccursInThePast: 6200,
    infoComposePollOccursInThePast: 6210,
    infoComposePollSomeOptionsInPast: 6220,
    infoFinalizePollOccursInPast: 6230,
    infoReceivedByDelegate: 6300,
    infoRequestSentToDelegate: 6400,
    infoDelegateNotRespond: 6500,
    infoMeetingAttendeeResponse: 6700,
    infoAttendeeHasProposedNewTime: 6701,
    infoMultipleAttendeesHaveProposedNewTime: 6702,
    infoMessageNotSent: 6800,
    infoAcceptedOnBehalf: 7100,
    infoTentativelyAcceptedOnBehalf: 7200,
    infoDeclinedOnBehalf: 7300,
    infoSuggestedLinks: 7400,
    infoContentUnblock: 7700,
    infoContentUnblockedTemporarily: 7725,
    infoContentUnblockAlways: 7750,
    infoFlaggedOrComplete: 7800,
    infoReadReceiptRequested: 8e3,
    infoReadReceiptSent: 8100,
    infoHighImportance: 8200,
    infoLowImportance: 8300,
    infoVotingRequestDecided: 8310,
    infoVotingRequestResponded: 8320,
    infoVotingResponse: 8330,
    infoReplyOnDate: 8400,
    infoForwardOnDate: 8500,
    infoItemWillExpire: 8600,
    infoMessageSetToExpire: 8601,
    retentionPolicyDetails: 8610,
    infoAddressHidden: 8700,
    infoConflictAtThisTime: 8800,
    infoMarkedAsPersonal: 8900,
    infoMarkedAsConfidential: 8901,
    infoMarkedAsPrivate: 8902,
    infoPredictedItemReasons: 9300,
    infoPredictedConversationRespond: 9310,
    infoPredictedConversationFollowUp: 9311,
    infoPredictedConversationDelete: 9312,
    infoSendAgain: 9400,
    sendAgainOpenOriginalMessageError: 9500,
    offlineDiscoveryInfo: 9600,
    infoTaskAssigned: 10010,
    infoTaskDueToday: 10020,
    infoTaskDueYesterday: 10030,
    infoTaskDueTomorrow: 10040,
    infoTaskDueInDays: 10050,
    infoTaskOverDue: 10060,
    infoTaskOverDueInDays: 10070,
    infoTaskCompleted: 10080,
    draftPrefix: 10090,
    policyTipsPrefix: 10091,
    errorPrefix: 10092,
    infoOfflineItemNotSynced: 10100,
    infoShareFileInsteadOfAttachSingle: 10200,
    infoShareFileInsteadOfAttachMultiple: 10201,
    infoLargeFileSuggestSharingSingle: 10202,
    infoLargeFileSuggestSharingMultiple: 10203,
    infoPlainTextShareFromCloudNotSupported: 10204,
    infoCannotAttachFolder: 10205,
    infoOmeWillEncrypt: 10206,
    infoOmeDidEncrypt: 10207,
    infoPeopleRecommendations: 10208,
    likersList: 10209,
    infoCouldNotRetrieveDL: 10210,
    infoDLExpansionTooLarge: 10211,
    infoOmeWillExpire: 10212,
    infoOmeOriginalMessageWillExpire: 10213,
    infoOmeWillTimeExpireEncrypt: 10214,
    infoOmeDidTimeExpireEncrypt: 10215,
    infoCannotUpsell: 10216,
    infoNotificationsWillBeSentToBookingCustomer: 10300,
    infoAddOriginalAttachment: 10301,
    infoAtAllMentionTip: 10302,
    infoStaffNameAndSmtpRequired: 10303,
    infoBusinessNameRequired: 10304,
    infoServiceNameRequired: 10305,
    infoConversationLocked: 10306,
    infoGroupCreateSuggestionTip: 10307,
    infoUserMuted: 10308,
    infoBusinessTypeRequired: 10309,
    infoGuestsDisabledGroupWithGuests: 10310,
    infoScheduleSuccessfullySaved: 10311,
    infoScheduleFailedSave: 10312,
    infoScheduleFailedLoad: 10313,
    infoScheduleFailedDelete: 10314,
    infoSetPermissionsNotSupportedWithReferenceAttachments: 10315,
    infoSaveServiceAfterQuestionsOk: 10316,
    lastInfoMessage: 11e3,
    safetyMessageTrustedSender: 11001,
    safetyMessageSpamFighterTrusted: 11002,
    safetyMessageSafeSenderListed: 11003,
    safetyMessageSenderInContactsList: 11004,
    safetyMessageSafeSenderByOrg: 11005,
    safetyMessageMovedToJunkByOrgRule: 11006,
    safetyMessageMovedToJunkByASFRule: 11007,
    safetyMessageMovedFromJunkByUserRule: 11008,
    safetyMessageMovedToJunkByUserRule: 11009,
    safetyMessageMovedToJunkByClientAction: 11010,
    safetyMessageMovedToJunkByUserAction: 11011,
    safetyMessageMovedToJunkByBlockedSenders: 11012,
    safetyMessageMovedToJunkByService: 11013,
    safetyMessageJunkFilteringDisabled: 11014,
    safetyMessageContentDisabled: 11015,
    safetyMessagePartialContentDisabled: 11016,
    safetyMessageExclusiveModeEnabledForConsumer: 11017,
    safetyMessageExclusiveModeEnabledForEnterprise: 11018,
    safetyMessagePhishDetected: 11019,
    safetyMessagePhishPasswordDetected: 11020,
    safetyMessageSenderFailedAuth: 11021,
    safetyMessageMovedToJunkByUserRuleNoRetention: 11022,
    safetyMessageMovedToJunkByUserActionNoRetention: 11023,
    safetyMessageMovedToJunkByOrgRuleNoRetention: 11024,
    safetyMessageMovedToJunkByClientActionNoRetention: 11025,
    safetyMessageMovedToJunkByASFRuleNoRetention: 11026,
    safetyMessageMovedToJunkByBlockedSendersNoRetention: 11027,
    safetyMessageMovedToJunkByServiceNoRetention: 11028,
    safetyMessageConsumerPhishDetected: 11029,
    infoCannotAttachFilesNoExtension: 11030,
    infoCannotAttachGoogleFileTypes: 11031,
    infoCannotAttachOneNoteNotebook: 11032,
    lastSafetyMessage: 11300,
    extensibilityInfoBar: 12e3,
    attachmentSharingTipsInfoBar: 13e3,
    sharingTipsNoPermissionToShare: 13001,
    sharingTipsNoPermissionToShareExternally: 13002,
    sharingTipsNoPermissionsToShareWithBigDL: 13003,
    sharingTipsCannotShareCSLWithExternalUsers: 13004,
    sharingTipsLinkNotPermissioned: 13005,
    sharingTipsWarningWithoutFilename: 13006,
    lastSharingTipsMessage: 13300,
    connectorActionCardMessage: 13301,
    filesActionStatus: 13302,
    messageListAdDisclaimer: 13305,
    warningAttachmentsSizeTooLargeRecentAttachments: 13306,
    infoAgendaMailFeedback: 13320,
    warningConditionalAccess: 14e3
};
_bc.M.registerEnum("_bc.M", !1);
_bc.bm = function() {};
_bc.bm.registerInterface("_bc.bm");
_bc.y = function() {};
_bc.y.registerInterface("_bc.y");
_bc.bT = function() {};
_bc.bT.registerInterface("_bc.bT");
_bc.s = function() {};
_bc.s.registerInterface("_bc.s");
_bc.bd = function() {};
_bc.bd.registerInterface("_bc.bd");
_bc.j = function() {};
_bc.j.registerInterface("_bc.j");
var IMailComposeLauncher = function() {};
IMailComposeLauncher.registerInterface("IMailComposeLauncher");
_bc.N = function() {};
_bc.N.prototype = {
    defaultSize: 0,
    size30x30: 1,
    size32x32: 2,
    size40x40: 3,
    size48x48: 4,
    size50x50: 5,
    size64x64: 6,
    size70x70: 7,
    size96x96: 8,
    size100x100: 9,
    size25x25: 10,
    size20x20: 11,
    size90x90: 12,
    size160x160: 13,
    size80x80: 14,
    size28x28: 15,
    size14x14: 16
};
_bc.N.registerEnum("_bc.N", !1);
_bc.bn = function() {};
_bc.bn.prototype = {
    none: 0,
    presenceImage: 1,
    displayPicture: 2,
    basicDetails: 4,
    listDetails: 8,
    mapPicture: 16
};
_bc.bn.registerEnum("_bc.bn", !1);
_bc.bU = function() {};
_bc.bU.prototype = {
    displayName: 0,
    emailAddress: 1,
    companyName: 2,
    phoneNumber: 3,
    businessPhone: 4,
    mobilePhone: 5,
    homePhone: 6,
    postalAddress: 7,
    displayNameFirstLast: 8,
    displayNameLastFirst: 9,
    fileAs: 10,
    office: 11,
    imAddress: 12,
    presenceText: 13,
    fullDisplayNameFirstLast: 14,
    fullDisplayNameLastFirst: 15,
    fullYomiName: 16,
    title: 17
};
_bc.bU.registerEnum("_bc.bU", !1);
_bc.l = function() {};
_bc.l.registerInterface("_bc.l");
_bc.f = function() {};
_bc.f.registerInterface("_bc.f");
_bc.p = function() {};
_bc.p.registerInterface("_bc.p");
var IComposeCardContext = function() {};
IComposeCardContext.registerInterface("IComposeCardContext");
_bc.bQ = function() {};
_bc.bQ.registerInterface("_bc.bQ");
_bc.q = function() {};
_bc.q.registerInterface("_bc.q");
var IModernGroupMembershipPivotViewModel = function() {};
IModernGroupMembershipPivotViewModel.registerInterface("IModernGroupMembershipPivotViewModel");
_bc.bS = function() {};
_bc.bS.registerInterface("_bc.bS");
_bc.bV = function() {};
_bc.bV.prototype = {
    Prefix: 0,
    Exact: 1
};
_bc.bV.registerEnum("_bc.bV", !1);
_bc.be = function() {};
_bc.be.registerInterface("_bc.be");
_bc.z = function() {};
_bc.z.registerInterface("_bc.z");
_bc.n = function() {
    this.bn = Function.createDelegate(this, this.G);
    _bc.n.initializeBase(this);
    this.v(new _j.l);
    this.B(new _j.g(this.bn, _a.a.O, this.r))
};
_bc.n.prototype = {
    y: null,
    q: null,
    K: null,
    by: !0,
    p: null,
    x: null,
    H: !1,
    r: !1,
    z: null,
    R: null,
    bo: null,
    bp: null,
    ck: function(n) {
        this.apcl("IsShown", n)
    },
    e: function() {
        return this.y
    },
    s: function(n) {
        if (this.y !== n) {
            this.y = n;
            this.eJ("Title")
        }
        return n
    },
    a: function() {
        return this.q
    },
    B: function(n) {
        if (this.q !== n) {
            this.q = n;
            this.eJ("CloseCommand")
        }
        return n
    },
    bq: function(n) {
        if (this.K !== n) {
            this.K = n;
            this.eJ("ConfirmCommand")
        }
        return n
    },
    C: function(n) {
        if (this.by !== n) {
            this.by = n;
            this.eJ("IsModal")
        }
        return n
    },
    c: function() {
        return this.p
    },
    v: function(n) {
        if (this.p !== n) {
            this.p = n;
            this.eJ("FooterButtons")
        }
        return n
    },
    b: function() {
        return this.x
    },
    t: function(n) {
        if (this.x !== n) {
            this.x = n;
            this.eJ("ContentDataContext")
        }
        return n
    },
    A: function(n) {
        if (this.H !== n) {
            this.H = n;
            this.eJ("IsBusy")
        }
        return n
    },
    d: function() {
        return this.r
    },
    f: function(n) {
        if (this.r !== n) {
            this.q.c(this.r = n);
            this.eJ("IsShown")
        }
        return n
    },
    D: function(n) {
        if (this.z !== n) {
            this.z = n;
            this.eJ("ParentProjectionWindow")
        }
        return n
    },
    E: function(n) {
        if (this.R !== n) {
            this.R = n;
            this.eJ("ContentTemplateID")
        }
        return n
    },
    cl: function(n) {
        if (this.bo !== n) {
            this.bo = n;
            this.eJ("LinkText")
        }
        return n
    },
    cm: function(n) {
        if (this.bp !== n) {
            this.bp = n;
            this.eJ("LinkUrl")
        }
        return n
    },
    g: function() {
        this.f(!0)
    },
    G: function() {
        this.f(!1)
    },
    eL: function() {
        var i;
        _a.h.a(i = {
            val: this.q
        }), this.q = i.val;
        var t;
        _a.h.a(t = {
            val: this.K
        }), this.K = t.val;
        var n;
        _a.h.a(n = {
            val: this.p
        }), this.p = n.val;
        _a.gd.prototype.eL.call(this)
    }
};
_bc.b = function() {
    _bc.b.initializeBase(this);
    this.t(this);
    this.I = this.q;
    this.V(new _j.l)
};
_bc.b.b = function(n, t, i, r, u) {
    switch (n) {
        case 0:
            r.val = _bcs.D.D;
            u.val = null;
            break;
        case 1:
        case 3:
            r.val = _bcs.D.D;
            u.val = _bcs.D.A;
            break;
        case 2:
            r.val = _bcs.D.C;
            u.val = _bcs.D.J;
            break;
        default:
            throw Error.argumentOutOfRange("type", n, "Unknown MessageBoxType");
    }
    t && r.val && (r.val = t);
    i && u.val && (u.val = i)
};
_bc.b.prototype = {
    j: null,
    u: null,
    I: null,
    n: !1,
    m: !1,
    o: null,
    V: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.eJ("MessageList")
        }
        return n
    },
    Q: function(n) {
        if (this.n !== n) {
            this.n = n;
            this.eJ("ShowDoNotShowAgainCheckbox")
        }
        return n
    },
    P: function(n) {
        if (this.o !== n) {
            this.o = n;
            this.eJ("DoNotShowAgainCheckboxText")
        }
        return n
    },
    L: function(n) {
        if (this.m !== n) {
            this.m = n;
            this.eJ("DoNotShowAgainChecked")
        }
        return n
    },
    h: function(n, t, i, r, u, f, e, o) {
        if (_j.h.a(t) && _j.h.a(e)) throw Error.argumentNull("Message box's title and message cannot both be null");
        this.i(n, [t], i, r, u, f, e, o, null, null, null)
    },
    i: function(n, t, i, r, u, f, e, o, s, h, c) {
        if ((!t || !t.length) && _j.h.a(e)) throw Error.argumentNull("Message box's title and message cannot both be null");
        if (this.r) {
            var p = this.j.f().join(" / ");
            _j.e.c(_a.a.T, "Cannot show two MessageBoxes at once. Current messages: {0}", p);
            throw Error.invalidOperation("Cannot show another message when the message box is shown. Current messages:" + p);
        }
        this.j.g();
        this.j.j(t);
        this.s(e);
        var a;
        var l;
        var y, v;
        _bc.b.b(n, u, f, y = {
            val: a
        }, v = {
            val: l
        }), a = y.val, l = v.val;
        this.W(i);
        this.v(new _j.l);
        a && this.p.a(new _ff.d(this.u, a, null, n !== 3, !1));
        l && (n === 3 ? this.p.t(0, new _ff.d(this.q, l, null, !0, !1)) : this.p.a(new _ff.d(this.q, l, null, !1, !1)));
        this.L(!1);
        !!r !== r ? this.Q(!1) : this.Q(r);
        s ? this.P(s) : this.P(_bcs.D.B);
        h && this.cl(h);
        c && this.cm(c);
        this.D(o);
        this.f(!0)
    },
    W: function(n) {
        this.u = null;
        if (n) {
            var i = this;
            this.u = new _j.g(function() {
                n(!0, i.m);
                i.f(!1)
            }, _bc.b.a);
            var t = this;
            this.B(new _j.g(function() {
                n(!1, t.m);
                t.f(!1)
            }, _bc.b.a))
        } else {
            this.u = this.I;
            this.B(this.I)
        }
    }
};
_bc.d = function(n, t) {
    this.d = -1;
    this.c = -1;
    this.b = n;
    this.a = t
};
_bc.d.a = function() {
    return new _bc.d(800, 600)
};
_bc.d.b = function() {
    return new _bc.d(1024, 700)
};
_bc.d.c = function() {
    var n = window.document.body;
    return new _bc.d(_j.k.h(n), _j.k.g(n))
};
_bc.d.d = function() {
    return new _bc.d(800, 600)
};
_bc.d.e = function() {
    return new _bc.d(350, 425)
};
_bc.d.f = function() {
    return new _bc.d(650, 600)
};
_bc.d.prototype = {
    b: 0,
    a: 0
};
_bc.e = function() {};
_bc.e.b = function() {
    return _a.v.b() in _a.F.a ? _bc.e.d : _bc.e.c
};
_bc.e.g = function() {
    return _a.v.b() in _a.F.a ? _bc.e.e : _bc.e.f
};
_bc.bo = function(n, t, i) {
    this.a = n;
    this.b = t;
    this.c = i
};
_bc.bo.prototype = {
    a: null,
    b: !1,
    c: !1
};
_bc.bf = function() {};
_bc.bf.registerInterface("_bc.bf");
_bc.bg = function() {};
_bc.bg.registerInterface("_bc.bg");
_bc.bh = function() {};
_bc.bh.registerInterface("_bc.bh");
_bc.Q = function() {};
_bc.Q.registerInterface("_bc.Q");
_bc.R = function() {};
_bc.R.registerInterface("_bc.R");
_bc.S = function() {};
_bc.S.registerInterface("_bc.S");
_bc.t = function() {};
_bc.t.registerInterface("_bc.t");
_bc.bq = function() {};
_bc.bq.registerInterface("_bc.bq");
_bc.u = function() {};
_bc.u.registerInterface("_bc.u");
_bc.br = function() {};
_bc.br.registerInterface("_bc.br");
_bc.T = function() {};
_bc.T.registerInterface("_bc.T");
_bc.bs = function() {};
_bc.bs.registerInterface("_bc.bs");
_bc.bt = function() {};
_bc.bt.registerInterface("_bc.bt");
_bc.E = function() {};
_bc.E.registerInterface("_bc.E");
_bc.bu = function() {};
_bc.bu.registerInterface("_bc.bu");
_bc.bv = function() {};
_bc.bv.registerInterface("_bc.bv");
_bc.bw = function() {};
_bc.bw.registerInterface("_bc.bw");
_bc.bx = function() {};
_bc.bx.registerInterface("_bc.bx");
_bc.F = function() {};
_bc.F.registerInterface("_bc.F");
_bc.by = function() {};
_bc.by.registerInterface("_bc.by");
_bc.bz = function() {};
_bc.bz.registerInterface("_bc.bz");
_bc.bA = function() {};
_bc.bA.registerInterface("_bc.bA");
_bc.bC = function() {};
_bc.bC.registerInterface("_bc.bC");
_bc.bB = function() {};
_bc.bB.registerInterface("_bc.bB");
_bc.G = function() {};
_bc.G.registerInterface("_bc.G");
_bc.A = function() {};
_bc.A.registerInterface("_bc.A");
_bc.bD = function() {};
_bc.bD.registerInterface("_bc.bD");
_bc.bi = function() {};
_bc.bi.registerInterface("_bc.bi");
_bc.bE = function() {};
_bc.bE.registerInterface("_bc.bE");
_bc.X = function() {};
_bc.X.registerInterface("_bc.X");
_bc.H = function() {};
_bc.H.registerInterface("_bc.H");
_bc.bG = function() {};
_bc.Y = function() {};
_bc.Y.registerInterface("_bc.Y");
_bc.bj = function() {};
_bc.bj.registerInterface("_bc.bj");
_bc.bL = function() {};
_bc.bL.registerInterface("_bc.bL");
_bc.Z = function() {};
_bc.Z.registerInterface("_bc.Z");
_bc.I = function() {};
_bc.I.registerInterface("_bc.I");
_bc.bM = function() {};
_bc.bM.registerInterface("_bc.bM");
_bc.bN = function() {};
_bc.bN.registerInterface("_bc.bN");
_bc.bp = function() {};
_bc.bp.registerInterface("_bc.bp");
_bc.o = function() {};
_bc.o.registerInterface("_bc.o");
_bc.bH = function() {};
_bc.bH.registerInterface("_bc.bH");
_bc.bJ = function() {};
_bc.bI = function() {};
_bc.bI.registerInterface("_bc.bI");
_bc.bK = function() {};
_bc.bK.registerInterface("_bc.bK");
_bc.ba = function() {};
_bc.ba.prototype = {
    None: 0,
    MeetingCreationNotSupported: 1,
    RecurringCreationNotSupported: 2,
    DelegateMeetingResponseNotSupported: 3,
    RecurringMeetingResponseWithMissingRecurringItemNotSupported: 4,
    MeetingDeletionNotSupported: 5,
    MeetingUpdateNotSupported: 6,
    RecurringMasterUpdateNotSupported: 7,
    RecurrencePatternUpdateNotSupported: 8,
    MeetingAttendeesUpdateNotSupported: 9,
    SecondaryCalendarItemCreationNotSupported: 10,
    CalendarItemOutsideSyncWindow: 11,
    OnlyRegularItemIdSupported: 12,
    RemoveItemWithMissingAssociatedItem: 13,
    ItemIdNotSupported: 14,
    ResponseTypeNotSupported: 15,
    TruncatedBody: 16,
    MailBoxTypeNotSupported: 17,
    OnlySyncedFoldersSupported: 18,
    FolderNotFullySynchronized: 19,
    ItemViewNotSupported: 20
};
_bc.ba.registerEnum("_bc.ba", !1);
_bc.U = function() {};
_bc.U.registerInterface("_bc.U");
_bc.V = function() {};
_bc.V.registerInterface("_bc.V");
_bc.C = function() {};
_bc.C.prototype = {
    owaUserConfig: 1,
    findFolders: 2,
    findConversation: 3,
    findMailFolderItem: 4,
    getConversationItems: 5,
    getMailFolderItem: 6,
    owaVersion: 7,
    state: 8,
    allowServerSideSessionData: 9
};
_bc.C.registerEnum("_bc.C", !1);
var IPageDataPayloadLocalStorage = function() {};
IPageDataPayloadLocalStorage.registerInterface("IPageDataPayloadLocalStorage");
_bc.J = function() {};
_bc.J.prototype = {
    cleared: 1,
    fresh: 2,
    stale: 3
};
_bc.J.registerEnum("_bc.J", !1);
_bc.B = function() {};
_bc.B.registerInterface("_bc.B");
_bc.bF = function() {};
_bc.bF.registerInterface("_bc.bF");
_bc.W = function() {};
_bc.W.registerInterface("_bc.W");

function AddressbookOperation() {
    this.Type = 0
}

function AddressbookPersona() {}

function AttachmentInfoRecord(n, t, i, r, u, f, e, o) {
    this.AttachmentId = n;
    this.DataID = t;
    this.Size = i;
    this.LastAccessedDateTime = r;
    this.MessageID = u;
    this.AttachmentType = f;
    this.MessageReceivedDateTime = e;
    this.Synced = o;
    this.RetryCount = 0
}
_bc.bb = function() {};
_bc.bb.prototype = {
    createItem: 0,
    updateItem: 1
};
_bc.bb.registerEnum("_bc.bb", !1);
_bc.bO = function() {};
_bc.bO.prototype = {
    MessageItem: 1,
    ConversationItem: 2
};
_bc.bO.registerEnum("_bc.bO", !1);
_bc.g = function() {
    this.a = _a.d.get_utcNow().i() + ":" + Math.random();
    this.b = new _g.e("CLID:" + this.a);
    this.b.ChangeKey = "CLCK:" + this.a;
    this.c = (+new Date).toString()
};
_bc.g.b = function(n) {
    return n.startsWith("CLATCH:")
};
_bc.g.a = function(n) {
    var i = n.Id;
    var t = n.ChangeKey;
    return !!i && !!t && i.startsWith("CLID:") && t.startsWith("CLCK:")
};
_bc.g.prototype = {
    b: null,
    c: null,
    a: null,
    d: function() {
        return new _g.bi("CLATCH:" + this.a)
    }
};
_bc.m = function(n, t) {
    this.rejectErrorCode = undefined;
    this.originalException = undefined;
    this.__type = _bc.m.dataContractName;
    this.rejectErrorCode = n;
    this.originalException = t
};
_bc.bk = function() {
    _bc.bk.initializeBase(this, [1, "PageDataPayload"])
};
_bc.bk.prototype = {
    c: function(n) {
        this.a.fcpb = n;
        return n
    },
    d: function(n) {
        this.a.fipb = n;
        return n
    },
    g: function(n) {
        this.a.gmfi = n;
        return n
    },
    i: function(n) {
        this.a.sssdrt = n;
        return n
    },
    m: function(n) {
        this.a.sssdrnt = n;
        return n
    },
    b: function(n) {
        this.a.sssdrrk = n;
        return n
    },
    f: function(n) {
        this.a.sssdrsck = n;
        return n
    },
    e: function(n) {
        this.a.sssdrrsk = n;
        return n
    },
    h: function(n) {
        this.a.lvark = n;
        return n
    }
};
_bc.i = function(n) {
    _bc.i.initializeBase(this);
    _a.c.a(n, "folderId");
    this.FolderId = n
};
_bc.i.prototype = {
    FolderId: null
};

function InlineImageRecord() {}
InlineImageRecord.prototype = {
    Blob: null,
    Id: null
};

function MessageSyncStateContext(n, t, i, r, u) {
    _a.c.c(t, "oldestReceivedTime");
    _a.c.b(u, "totalCount");
    this.MoreItemsOnServer = n;
    this.OldestReceivedTime = t;
    this.SyncMinimum = i;
    this.SyncMaximum = r;
    this.TotalCount = u
}
MessageSyncStateContext.prototype = {
    MoreItemsOnServer: !1,
    OldestReceivedTime: null,
    SyncMinimum: 0,
    SyncMaximum: 0,
    TotalCount: 0
};
_bc.OutboxItemContext = function() {};
_bc.OutboxItemContext.b = function(n, t) {
    _a.c.a(n, "itemId");
    _a.c.d(!_bc.OutboxItemContext.c(n), "itemId must be passed to ConvertItemIdToOutboxItemId");
    var i = new _g.e("Outbox:" + n.Id);
    i.ChangeKey = n.ChangeKey;
    return i
};
_bc.OutboxItemContext.a = function(n, t) {
    _a.c.a(n, "outboxItemId");
    var i;
    i = _bc.OutboxItemContext.c(n) ? new _g.e(n.Id.substr(7)) : new _g.e(n.Id);
    i.ChangeKey = n.ChangeKey;
    return i
};
_bc.OutboxItemContext.c = function(n) {
    return n.Id.startsWith("Outbox:")
};
_bc.OutboxItemContext.prototype = {
    ActionId: 0,
    SendAction: 0,
    ParentConversationNodeId: null,
    ComplianceId: null,
    LastResponseCode: "NoError",
    LastResponse: null,
    LastResponseDateTime: null,
    ResendCount: 0,
    IsSending: !1
};

function PartialPersonaRecord(n, t) {
    _a.c.a(n, "persona");
    _a.c.a(t, "folderId");
    this.Persona = n;
    this.FolderId = t
}
PartialPersonaRecord.prototype = {
    Persona: null,
    FolderId: null
};

function SettingRecord() {}
SettingRecord.prototype = {
    Id: null,
    Value: null
};

function TombstonedItemRecord(n, t, i) {
    _a.c.c(n, "id");
    this.Id = n;
    this.TombstoneType = t;
    this.Data = i
}
TombstonedItemRecord.a = function(n, t, i) {
    return new TombstonedItemRecord(n, t, i)
};
TombstonedItemRecord.prototype = {
    Id: null,
    TombstoneType: 0,
    Data: null
};
var ICalendarAnimationContext = function() {};
ICalendarAnimationContext.registerInterface("ICalendarAnimationContext");
var ICalendarScenarioContext = function() {};
ICalendarScenarioContext.registerInterface("ICalendarScenarioContext");
var ICalendarScenarioContextManager = function() {};
ICalendarScenarioContextManager.registerInterface("ICalendarScenarioContextManager");
_bc.r = function() {};
_bc.r.registerInterface("_bc.r");
_bc.k = function() {};
_bc.k.registerInterface("_bc.k");
_bc.P = function() {};
_bc.P.registerInterface("_bc.P");
var IExtensibilityCommandingBarItemsManager = function() {};
IExtensibilityCommandingBarItemsManager.registerInterface("IExtensibilityCommandingBarItemsManager");
_bc.D = function() {};
_bc.D.registerInterface("_bc.D");

function BootCommonComponent() {}
BootCommonComponent.$$cctor = function() {
    _a.t.a().a(BootCommonComponent)
};
BootCommonComponent.prototype = {
    b: function(n, t, i) {
        var r = this;
        n.b(_bc.O, function() {
            return new _bc.O(n.a(_a.z))
        }).b(_ff.a).a()
    },
    a: function() {
        return []
    }
};
_bc.O = function(n) {
    this.b = n.a()
};
_bc.O.prototype = {
    b: 0,
    a: function() {
        return this.b
    }
};
_bc.c = function() {};
_bc.c.prototype = {
    Unknown: 0,
    Person: 1,
    DistributionList: 2,
    Room: 3,
    Place: 4,
    ModernGroup: 5,
    Birthday: 6,
    CalendarPublicFolder: 7,
    Booking: 8,
    AtAllBroadcast: 9,
    ImplicitGroup: 10,
    ExplicitGroup: 11
};
_bc.c.registerEnum("_bc.c", !1);
_bc.bl = function() {};
_bc.bl.prototype = {
    readOnly: 0,
    edit: 1,
    create: 2,
    add: 3
};
_bc.bl.registerEnum("_bc.bl", !1);
var IPresenceObserverFactory = function() {};
IPresenceObserverFactory.registerInterface("IPresenceObserverFactory");
var IPresenceObserver = function() {};
IPresenceObserver.registerInterface("IPresenceObserver");
_bc.v = function() {};
_bc.v.registerInterface("_bc.v");
_bc.x = function() {};
_bc.x.prototype = {
    unknown: 0,
    oneOff: 1,
    partial: 2,
    complete: 3
};
_bc.x.registerEnum("_bc.x", !1);
_bc.bP = function() {};
_bc.bP.prototype = {
    Inline: 0,
    ExclusivePopUp: 1,
    StackedPopUp: 2,
    PopOut: 3
};
_bc.bP.registerEnum("_bc.bP", !1);
_bc.bc = function(n) {
    this.c = n
};
_bc.bc.prototype = {
    b: null,
    a: null,
    c: null
};
_bc.h = function() {
    this.l = !1;
    this.d = !1;
    this.e = !1;
    this.g = !1;
    this.c = !1;
    this.k = !1;
    this.i = !1;
    this.m = !1;
    this.j = !1;
    this.h = !1;
    this.a = 8;
    this.n = !1;
    this.f = !1
};
_bc.h.a = function() {
    var n = new _bc.h;
    n.l = !0;
    n.d = !0;
    n.g = !0;
    n.c = !0;
    n.k = !0;
    n.m = !0;
    n.i = !0;
    n.e = !0;
    n.o = !0;
    n.h = !1;
    n.a = 0;
    return n
};
_bc.h.b = function() {
    var n = new _bc.h;
    n.l = !0;
    n.e = !0;
    n.d = !0;
    n.g = !0;
    n.c = !0;
    n.k = !0;
    n.i = !0;
    n.m = !0;
    n.j = !0;
    n.h = !0;
    n.a = 1;
    return n
};
_bc.h.prototype = {
    m: !1,
    j: !1,
    d: !1,
    e: !1,
    g: !1,
    l: !1,
    c: !1,
    i: !1,
    k: !1,
    o: !1,
    p: !1,
    a: 0,
    q: !0,
    h: !1,
    n: !1,
    b: !1,
    f: !1
};
_bc.K = function() {};
_bc.K.registerInterface("_bc.K");
_bc.L = function() {};
_bc.L.registerInterface("_bc.L");
_bc.n.registerClass("_bc.n", _a.bw, IDialogViewModel, _a.kW, _j.bs, Sys.IDisposable);
_bc.b.registerClass("_bc.b", _bc.n);
_bc.bo.registerClass("_bc.bo");
AddressbookOperation.registerClass("AddressbookOperation");
AddressbookPersona.registerClass("AddressbookPersona");
AttachmentInfoRecord.registerClass("AttachmentInfoRecord");
_bc.m.registerClass("_bc.m");
_bc.bk.registerClass("_bc.bk", _a.bt);
_bc.i.registerClass("_bc.i", _a.cq);
InlineImageRecord.registerClass("InlineImageRecord");
MessageSyncStateContext.registerClass("MessageSyncStateContext");
_bc.OutboxItemContext.registerClass("_bc.OutboxItemContext");
PartialPersonaRecord.registerClass("PartialPersonaRecord");
SettingRecord.registerClass("SettingRecord");
TombstonedItemRecord.registerClass("TombstonedItemRecord");
BootCommonComponent.registerClass("BootCommonComponent", null, _a.kj, _j.ce);
_bc.O.registerClass("_bc.O", null, _ff.a);
_bc.bc.registerClass("_bc.bc");
_bc.h.registerClass("_bc.h");
_bc.b.a = _a.a.O;
_bc.e.a = 5;
_bc.e.c = [8, 0, 2, 1, 3, 4, 6, 5, 12];
_bc.e.d = [9, 0, 2, 1, 3, 4, 6, 5, 12];
_bc.e.f = [14, 8, 0, 2, 1, 3, 4, 6, 5, 12];
_bc.e.e = [15, 9, 0, 2, 1, 3, 4, 6, 5, 12];
_bc.m.dataContractName = "OfflineErrorInfo:#Exchange";
BootCommonComponent.$$cctor();
Type.registerNamespace("_h");
_h.cQ = function(n, t, i, r, u) {
    if (u.f()) {
        var f = this;
        t.b(_j.bl, function() {
            i.d(_a.a.ee, "Validate", function() {
                var t = new _h.eU;
                n.a(t)
            })
        })
    }
};
_h.cL = function(n, t, i, r, u, f, e, o, s, h) {
    _h.b.v = n === "Mouse" ? 2097152 : 51200;
    _h.b.w = n === "Mouse" ? 20 : 0;
    _h.b.k = "rps_" + _ff.p.a(1, 65535).toString(16);
    var c = _a.w.b(window.location.href);
    this.c = s.k();
    if (n === "Mouse") {
        var w = "maxRecipients";
        var v = c[w];
        v && (_h.b.w = _a.bI.b(v.toString()))
    }
    var b = "DisableScopedStyles";
    var k = c[b];
    k && (_h.b.k = null);
    var p = !u.a() || f.a().fI().Enabled;
    if (n === "Mouse" && p) {
        var a = c.disableSuperSort;
        if (!a || a !== "true") {
            _h.b.b = _h.b.F;
            _h.b.e = _h.b.U
        }
    }
    _g.D.h(f.a().gw().Enabled);
    var l = this;
    _g.k.e = function(f) {
        var c = u.c(function(n) {
            f(n);
            l.d(u, e, o)
        }, t, t.g(), o, n, i, r, s ? s.D() : null, h, s.g() !== "SharedHoverCard");
        c && l.a(e, o, !1)
    };
    _h.j.d = f;
    h && (_h.j.h = h.c());
    var y = this;
    o.a(_a.a.O, "NotifyWhenBootstrapCompletes", function() {
        y.a(e, o, !0)
    }, 15e3);
    _g.k.h()
};
_h.cL.prototype = {
    b: !1,
    c: 0,
    d: function(n, t, i) {
        if (n.b()) {
            var r = this;
            t.b(_h.bT, function() {
                r.a(t, i, !1)
            })
        } else this.a(t, i, !1)
    },
    a: function(n, t, i) {
        if (this.c >= 90) {
            var r = this;
            t.c(_a.a.O, "NotifyBootstrapCompleted", function() {
                if (!r.b) {
                    i && _j.e.b(_a.a.O, "the offline bootstrapper did not fire its initialized event within the timeout of {0}ms", 15e3);
                    r.b = !0;
                    n.d(_j.bl, new _j.bl)
                }
            })
        }
    }
};
_h.cP = function(n, t) {
    _h.j.l(n);
    _h.j.m(t)
};
var IAddFavoriteFolderAction = function() {};
IAddFavoriteFolderAction.registerInterface("IAddFavoriteFolderAction");
var IEmptyFolderAction = function() {};
IEmptyFolderAction.registerInterface("IEmptyFolderAction");
var IEmptyPivotAction = function() {};
IEmptyPivotAction.registerInterface("IEmptyPivotAction");
var IMarkAllItemsAsReadAction = function() {};
IMarkAllItemsAsReadAction.registerInterface("IMarkAllItemsAsReadAction");
var IMarkAsJunkAction = function() {};
IMarkAsJunkAction.registerInterface("IMarkAsJunkAction");
var IMarkItemAsClutterAction = function() {};
IMarkItemAsClutterAction.registerInterface("IMarkItemAsClutterAction");
var IMoveFavoriteFolderAction = function() {};
IMoveFavoriteFolderAction.registerInterface("IMoveFavoriteFolderAction");
_h.ce = function() {};
_h.ce.registerInterface("_h.ce");
var IPinConversationAction = function() {};
IPinConversationAction.registerInterface("IPinConversationAction");
var IPinItemAction = function() {};
IPinItemAction.registerInterface("IPinItemAction");
var IRemoveFavoriteFolderAction = function() {};
IRemoveFavoriteFolderAction.registerInterface("IRemoveFavoriteFolderAction");
var IRenameFavoriteFolderAction = function() {};
IRenameFavoriteFolderAction.registerInterface("IRenameFavoriteFolderAction");
_h.dH = function() {};
_h.dH.registerInterface("_h.dH");
var IRestoreConversationAction = function() {};
IRestoreConversationAction.registerInterface("IRestoreConversationAction");
var IRestoreMessagesAction = function() {};
IRestoreMessagesAction.registerInterface("IRestoreMessagesAction");
var IUpdateFavoriteFolderAction = function() {};
IUpdateFavoriteFolderAction.registerInterface("IUpdateFavoriteFolderAction");
_h.bA = function() {};
_h.bA.registerInterface("_h.bA");
_h.bR = function() {};
_h.bR.registerInterface("_h.bR");
_h.fP = function() {};
_h.fP.prototype = {
    None: -1,
    Folder: 0,
    ItemPartUniqueBody: 1,
    EditableItems: 2,
    ItemNormalizedBody: 3,
    MailCompose: 4,
    ItemPartNormalizedBody: 5,
    MailListItem: 6,
    MessageDetails: 7,
    ItemAttachment: 8,
    ConversationListView: 9,
    ConversationSentItemsListView: 10,
    ConversationUberListView: 11,
    TaskListItem: 12,
    FullCalendarItem: 13,
    MailComposeNormalizedBody: 14,
    QuickComposeItemPart: 15,
    GroupConversationListView: 16,
    GroupConversationFeedView: 17,
    InferenceConversationListView: 18,
    InferenceConversationUberListView: 19,
    DiscoveryItem: 20,
    FullBookingItem: 21,
    PartialCalendarItem: 22,
    PartialBookingItem: 23,
    ItemPart: 24,
    ModernItemPart: 25
};
_h.fP.registerEnum("_h.fP", !1);
_h.T = function() {};
_h.T.registerInterface("_h.T");
_h.U = function() {};
_h.U.registerInterface("_h.U");
_h.cF = function() {};
_h.cF.prototype = {
    SendToNone: 0,
    SendOnlyToAll: 1,
    SendOnlyToChanged: 2,
    SendToAllAndSaveCopy: 3,
    SendToChangedAndSaveCopy: 4
};
_h.cF.registerEnum("_h.cF", !1);
_h.ft = function() {};
_h.ft.registerInterface("_h.ft");
_h.fu = function() {};
_h.fu.registerInterface("_h.fu");
_h.ff = function() {};
_h.ff.prototype = {
    NoneSet: -1,
    Red: 0,
    Orange: 1,
    Brown: 2,
    Yellow: 3,
    Green: 4,
    Teal: 5,
    Olive: 6,
    Blue: 7,
    Purple: 8,
    Cranberry: 9,
    Steel: 10,
    DarkSteel: 11,
    Gray: 12,
    DarkGray: 13,
    Black: 14,
    DarkRed: 15,
    DarkOrange: 16,
    DarkBrown: 17,
    DarkYellow: 18,
    DarkGreen: 19,
    DarkTeal: 20,
    DarkOlive: 21,
    DarkBlue: 22,
    DarkPurple: 23,
    DarkCranberry: 24,
    MaxColor: 25
};
_h.ff.registerEnum("_h.ff", !1);
_h.fm = function() {};
_h.fm.prototype = {
    MailListView: 0,
    ReadingPane: 1
};
_h.fm.registerEnum("_h.fm", !1);
_h.C = function() {};
_h.C.prototype = {
    All: 0,
    Subject: 1,
    Body: 2,
    Attachment: 3,
    From: 4,
    To: 5,
    Cc: 6,
    Bcc: 7,
    AllRecipients: 8
};
_h.C.registerEnum("_h.C", !1);
_h.fx = function() {};
_h.fx.registerInterface("_h.fx");
_h.fB = function() {};
_h.dd = function() {};
_h.dd.registerInterface("_h.dd");
_h.y = function() {};
_h.y.prototype = {
    None: 0,
    NoResults: 1,
    SearchError: 2,
    OfflineSearchError: 3,
    OfflinePivotsError: 4,
    OfflineSortByError: 5,
    OfflineTasksError: 6,
    OfflineTurnOnConversation: 7,
    OfflineTurnOffConversation: 8,
    OfflineNotSyncedFolder: 9,
    OfflineUnsupportedFolder: 10,
    KioskFailedRequest: 11,
    SearchNoResults: 12,
    Searching: 13,
    SearchComplete: 14,
    AccessDenied: 15,
    ListViewLoading: 16,
    ListViewNoItemSelected: 17,
    ReadingPaneLoadFailed: 18,
    DumpsterViewNoItemSelected: 19,
    DumpsterViewItemSelected: 20
};
_h.y.registerEnum("_h.y", !1);
_h.bS = function() {};
_h.bS.prototype = {
    SaveOnly: 0,
    SendAndSaveCopy: 1
};
_h.bS.registerEnum("_h.bS", !1);
_h.dw = function() {};
_h.dw.prototype = {
    AllOccurrences: 0,
    SpecifiedOccurrenceOnly: 1
};
_h.dw.registerEnum("_h.dw", !1);
_h.by = function() {};
_h.by.prototype = {
    SendToNone: 0,
    SendOnlyToAll: 1,
    SendToAllAndSaveCopy: 2
};
_h.by.registerEnum("_h.by", !1);
_h.fC = function() {};
_h.fC.registerInterface("_h.fC");
_h.fg = function() {};
_h.fg.prototype = {
    unknown: 0,
    Disabled: 1,
    AttemptingSignIn: 2,
    SignedIn: 3,
    AttemptingSignOut: 4,
    SignedOut: 5,
    Error: 6
};
_h.fg.registerEnum("_h.fg", !1);
_h.eg = function() {};
_h.eg.prototype = {
    notConnected: 0,
    connecting: 1,
    incoming: 2,
    connected: 3,
    terminated: 4
};
_h.eg.registerEnum("_h.eg", !1);
_h.bg = function() {};
_h.bg.registerInterface("_h.bg");
_h.cf = function() {};
_h.cf.registerInterface("_h.cf");
_h.fo = function() {};
_h.fo.registerInterface("_h.fo");
_h.P = function() {};
_h.P.registerInterface("_h.P");
_h.dG = function() {};
_h.dG.registerInterface("_h.dG");
_h.cz = function() {};
_h.cz.registerInterface("_h.cz");
_h.fw = function() {};
_h.dI = function() {};
_h.dI.registerInterface("_h.dI");
_h.ey = function() {};
_h.cx = function() {};
_h.cx.registerInterface("_h.cx");
_h.cy = function() {};
_h.cy.registerInterface("_h.cy");
_h.bj = function() {};
_h.bj.registerInterface("_h.bj");
_h.fv = function() {};
_h.fv.registerInterface("_h.fv");
_h.Y = function() {};
_h.Y.registerInterface("_h.Y");
_h.ev = function() {};
_h.ev.registerInterface("_h.ev");
_h.dF = function() {};
_h.dF.registerInterface("_h.dF");
_h.fz = function() {};
_h.fz.registerInterface("_h.fz");
_h.fy = function() {};
_h.fy.registerInterface("_h.fy");
_h.dJ = function() {};
_h.dJ.registerInterface("_h.dJ");
_h.dD = function() {};
_h.dD.registerInterface("_h.dD");
_h.bf = function() {};
_h.bf.prototype = {
    undefined: -1,
    commandingBar: 0,
    conversationListView: 1,
    mailListView: 2,
    itemReadingPane: 3,
    conversationReadingPane: 4,
    mailBaseListView: 5,
    upNext: 6,
    leftNavigationPane: 7,
    hashtagWell: 8,
    editor: 9,
    readingPane: 10,
    popout: 11,
    expandedConversation: 12,
    itemReadingPaneFullScreen: 13,
    conversationReadingPaneFullScreen: 14,
    searchBox: 15,
    hashtagBody: 16,
    hashtagModernFolder: 17,
    hashtagFolder: 18,
    moduleSwitcher: 19,
    itemGroupListView: 20,
    bundledMailListView: 21,
    deletedItemsFolder: 22,
    otherFolder: 23,
    dumpsterFolder: 24
};
_h.bf.registerEnum("_h.bf", !1);
_h.db = function() {};
_h.db.registerInterface("_h.db");
_h.dc = function() {};
_h.dc.registerInterface("_h.dc");
var IQuickComposeContextModelScope = function() {};
IQuickComposeContextModelScope.registerInterface("IQuickComposeContextModelScope");
_h.fD = function() {};
_h.fD.registerInterface("_h.fD");
_h.fn = function() {};
_h.fn.registerInterface("_h.fn");
_h.fp = function() {};
_h.fp.registerInterface("_h.fp");
_h.fq = function() {};
_h.fq.registerInterface("_h.fq");
_h.fr = function() {};
_h.fr.registerInterface("_h.fr");
_h.fs = function() {};
_h.fs.registerInterface("_h.fs");
_h.bs = function() {};
_h.bs.prototype = {
    none: 0,
    userEntered: 1,
    owaClientSuggested: 2,
    history: 3,
    other: 4,
    zeroInput: 5
};
_h.bs.registerEnum("_h.bs", !1);
_h.fA = function() {};
_h.fA.registerInterface("_h.fA");
_h.t = function() {};
_h.t.c = function(n, t, i, r) {
    r.val = null;
    if (!_h.a.k || _j.E.a(t) || _j.h.a(i) || !_j.h.a(n) || _h.t.e(t)) return !1;
    r.val = _a.bL.c(t.Id);
    return !_j.h.a(r.val) && r.val !== i ? !0 : !1
};
_h.t.b = function(n, t, i, r) {
    r.val = null;
    if (!_h.a.k || null === t || null === i || !_j.h.a(n) || _h.a.P(t)) return !1;
    if (_h.l.k(t)) {
        r.val = i.bH.ArchiveMailboxGuid;
        return !0
    } else {
        r.val = _a.bL.c(t.Id);
        if (!_j.h.a(r.val) && r.val !== i.bH.MailboxGuid) return !0
    }
    return !1
};
_h.t.a = function(n, t) {
    return !_j.h.a(n) && !_j.h.a(t) ? String.format(_h.t.d, n, t) : null
};
_h.t.e = function(n) {
    var t = _h.d.a().a(n.Id);
    return !!t && _h.a.P(t.cP)
};
_h.bx = function() {
    _h.bx.initializeBase(this)
};
_h.bx.prototype = {
    D: !1,
    bc: !1,
    t: !1,
    p: null,
    N: null,
    q: null,
    o: null,
    s: function() {
        return this.eM(_h.bx.b)
    },
    l: function(n) {
        this.eK(_h.bx.b, n);
        return n
    },
    e: function() {
        return this.eM(_h.bx.a)
    },
    f: function(n) {
        this.eK(_h.bx.a, this.bo(n));
        return n
    },
    K: function(n) {
        var i = this.bl();
        var t = this.bg();
        t.shouldPrecedeOfflineSyncActions = this.h();
        n.k(i, t, this.k, this.j)
    },
    bg: function() {
        this.p && !this.s();
        var n = new _g.hb(this.L);
        n.owsVersion = "V2_1";
        n.instanceKeysToRemoveFromPendingOperations = this.p;
        n.folderIdForInstanceKeysToRemoveFromPendingOperations = this.s().Id;
        n.isActionGlobal = this.t;
        n.explicitLogonUser = this.R;
        this.N && (n.actionName = this.N);
        return n
    },
    bl: function() {
        var t = new _g.ed(this.M());
        t.Body.ConversationActions = new Array(this.e().length);
        t.Body.ReturnMovedItemIds = this.bc;
        var i;
        i = this.s() ? _g.l.a(this.s()) : new _g.s("inbox");
        for (var u = new _g.F(i), n = 0; n < this.e().length; n++) {
            var f = this.e()[n];
            var r = this.u(f);
            this.D || this.t || (r.ContextFolderId = u);
            t.Body.ConversationActions[n] = r
        }
        return t
    },
    bo: function(n) {
        if (!n) return null;
        for (var u = {}, r = [], t = 0; t < n.length; t++) {
            var i = n[t];
            if (!(i.bH.ConversationId.Id in u)) {
                Array.add(r, i);
                u[i.bH.ConversationId.Id] = 1
            }
        }
        return r
    }
};
_h.dx = function(n) {
    _h.dx.$$(this.$$gta["_h.dx"].TResult, this.$$gta["_h.dx"].TResponseMessage).initializeBase(this, [n])
};
_h.dx.$$ = function(n, t) {
    var f = _h.__tc = _h.__tc || {};
    var i = "dx" + "$" + n.getName().replace(/\./g, "_") + "$" + t.getName().replace(/\./g, "_");
    if (!f[i]) {
        var r = f[i] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _h.dx.apply(this, t)
        };
        var c = _h.fN;
        r.registerClass("_h.__tc." + i, c, _h.dH);
        var s = {
            "_h.dx": {
                TResult: n,
                TResponseMessage: t
            },
            ctor: _h.dx
        };
        var l = c.prototype.$$gta;
        for (var a in l) {
            var h = {
                key: a,
                value: l[a]
            };
            s[h.key] = h.value
        }
        r.prototype.$$gta = s;
        var e = _h.dx.prototype;
        for (var o in e) {
            var u = {
                key: o,
                value: e[o]
            };
            "constructor" !== u.key && (r.prototype[u.key] = u.value)
        }
        r.a = _a.a.dN
    }
    return f[i]
};
_h.dx.prototype = {
    h: function() {
        return this.Q ? this.Q.responseCode : "NoError"
    },
    cH: function() {
        return new _g.H(null)
    },
    cI: function(n, t) {
        return new(_h.dS.$$(_g.hM, _g.hZ, this.$$gta["_h.dx"].TResult, this.$$gta["_h.dx"].TResponseMessage))(n, t, _h.dx.$$(this.$$gta["_h.dx"].TResult, this.$$gta["_h.dx"].TResponseMessage).a)
    },
    cx: function(n, t) {
        if (t.h.length === 1) {
            var i = t.h[0];
            if (i.ResponseClass !== "Success" && this.cL(i.ResponseCode)) {
                n.responseCode = i.ResponseCode;
                var r = n;
                r.MessageXml = i.MessageXml;
                return Error.create(i.MessageText, r)
            }
        }
        return null
    },
    cU: function(n, t, i) {
        var r = this.Q || this.cH();
        r.response = _g.bB.a(n, 0);
        r.state = 1;
        var u = this.cI(r, _g.k.a);
        var f = this;
        u.w(function() {
            var n = f.cx(r, u);
            if (n) i(n);
            else {
                f.cK(u.h);
                t()
            }
        }, i)
    },
    cL: function(n) {
        return !0
    },
    cK: function(n) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t];
            this.cJ(i)
        }
    }
};
_h.dy = function(n) {
    _h.dy.initializeBase(this);
    this.e = n
};
_h.dy.prototype = {
    e: !1,
    K: function(n) {
        n.dJ(this.e, null, this.I, this.H)
    },
    cU: function(n, t, i) {
        t()
    }
};
_h.bD = function() {
    _h.bD.initializeBase(this)
};
_h.bD.prototype = {
    h: function() {
        return !0
    },
    m: function() {
        return this.eM(_h.bD.a)
    },
    r: function(n) {
        this.eK(_h.bD.a, n);
        return n
    },
    S: function() {
        var n = _h.a.a(this.m());
        _h.O.b(_h.a.a(this.m()))
    },
    u: function(n) {
        var t = new _g.bK("Copy", new _g.e(n.bH.ConversationId.Id));
        t.DestinationFolderId = new _g.F(_g.l.a(this.m()));
        t.ConversationLastSyncTime = n.V() ? n.V().i() : null;
        return t
    }
};
_h.bE = function(n, t, i) {
    _h.bE.initializeBase(this);
    this.f = n;
    this.e = t;
    this.j = i
};
_h.bE.prototype = {
    f: null,
    e: null,
    j: null,
    k: "NoError",
    h: function() {
        return this.k
    },
    K: function(n) {
        var i = new _g.fw(new _g.F(_g.l.a(this.e)));
        i.ItemIds = this.l();
        var t = new _g.ij(this.L);
        if (_g.N.isInstanceOfType(this.e)) {
            var u = this.e;
            if (u.a.Mailbox.EmailAddress) {
                i.RemoteExecute = !0;
                t.actionName = "GroupMailbox";
                t.anchorMailbox = u.a.Mailbox.EmailAddress;
                t.explicitLogonUser = u.a.Mailbox.EmailAddress
            }
        } else if (_h.a.k && _h.a.n) {
            (_h.l.a(this.e) !== _h.l.a(this.f[0].cP) || _h.a.E(this.e) !== _h.a.E(this.f[0].cP)) && (i.RemoteExecute = !0);
            var r = null;
            var e, f;
            (f = _h.t.b(t.explicitLogonUser, this.e, _g.a.a().c(), e = {
                val: r
            }), r = e.val, f) && (t.anchorMailbox = _h.t.a(r, _g.a.a().c().bH.OrganizationDomain))
        }
        var o = new _g.fv(this.M(), i);
        n.dK(o, t, this.I, this.H)
    },
    S: function() {
        var t = _h.a.a(this.e);
        _h.a.j(t) && _h.O.b(t);
        if (_g.N.isInstanceOfType(this.e)) {
            var i = this.e;
            if (i.a.Mailbox.EmailAddress) {
                var n = _g.w.e(i.a.Mailbox.EmailAddress);
                var f = this;
                this.bn(function() {
                    f.j.a(_a.cs, new _a.cs(1, n))
                });
                var u = this;
                this.c(function() {
                    u.j.a(_a.cs, new _a.cs(2, n))
                });
                var r = this;
                this.b(function() {
                    r.j.a(_a.cs, new _a.cs(3, n))
                })
            }
        }
    },
    cU: function(n, t, i) {
        if (!n.Body.ResponseMessages || !n.Body.ResponseMessages.Items || n.Body.ResponseMessages.Items.length < 1) {
            i(Error.create("CopyItemAction failed."));
            return
        }
        if (n.Body.ResponseMessages.Items[0].ResponseCode !== "NoError") {
            i(Error.create(String.format("CopyItemAction failed with response code {0}.", n.Body.ResponseMessages.Items[0].ResponseCode)));
            return
        }
        t()
    },
    V: function() {
        _a.dn.prototype.V.call(this);
        this.N && this.N.Body && this.N.Body.ResponseMessages && this.N.Body.ResponseMessages.Items && this.N.Body.ResponseMessages.Items.length > 0 && (this.k = this.N.Body.ResponseMessages.Items[0].ResponseCode)
    },
    l: function() {
        for (var t = new Array(this.f.length), n = 0; n < this.f.length; n++) t[n] = new _g.e(this.f[n].bH.ItemId.Id);
        return t
    }
};
_h.be = function() {
    _h.be.initializeBase(this);
    this.m = "IPF.Note"
};
_h.be.prototype = {
    f: null,
    e: null,
    m: null,
    j: function() {
        return this.eM(_h.be.b)
    },
    l: function(n) {
        this.eK(_h.be.b, n);
        return n
    },
    o: function() {
        return this.eM(_h.be.a)
    },
    k: function(n) {
        this.eK(_h.be.a, n);
        return n
    },
    S: function() {
        var n = new _g.u;
        n.f(this.o());
        n.t(this.e.bH.FolderId);
        this.f = n;
        this.j().bx.a(this.f);
        var t = this;
        _h.c.a(this.e, "ChildFolderCount", this.e.bH.ChildFolderCount, (this.e.bH.ChildFolderCount || 0) + 1, function(n, t) {
            n.s(t)
        })
    },
    K: function(n) {
        var f = new _g.fy(_g.l.c(this.e.bH.FolderId));
        var r = new _g.bD;
        r.DisplayName = this.o();
        r.FolderClass = this.m;
        f.Folders[0] = r;
        var o = new _g.fx(this.M(), f);
        var i = new _g.im(this.L);
        var t;
        var u, e;
        (e = _h.t.b(i.explicitLogonUser, _g.l.a(this.e.bH.FolderId), _g.a.a().c(), u = {
            val: t
        }), t = u.val, e) && (i.anchorMailbox = _h.t.a(t, _g.a.a().c().bH.OrganizationDomain));
        n.dV(o, i, this.I, this.H)
    },
    cJ: function(n) {
        this.j().bG(this.f, n.Folders[0].FolderId)
    },
    V: function() {
        _a.dn.prototype.V.call(this);
        if (this.j().bx) {
            this.j().bx.p(this.f, !0);
            var n = this;
            _h.c.a(this.e, "ChildFolderCount", this.e.bH.ChildFolderCount, this.e.bH.ChildFolderCount - 1, function(n, t) {
                n.s(t)
            })
        }
    }
};
_h.fk = function(n) {
    _h.fk.initializeBase(this);
    this.co = n;
    this.bu = !0;
    this.bH = "None";
    var t = _g.a.a().bH.PolicySettings;
    this.cd = t.OutboundCharset;
    this.cg = t.UseGB18030;
    this.ch = t.UseISO885915
};
_h.fk.prototype = {
    co: 0,
    bk: null,
    bu: !1,
    br: null,
    bH: "Folder",
    bs: null,
    cd: "AlwaysUTF8",
    bG: null,
    bi: null,
    cf: null,
    bW: null,
    bJ: !1,
    cg: !1,
    ch: !1,
    bD: null,
    e: function() {
        return this.bi
    },
    m: function(n) {
        this.bi = n;
        return n
    },
    p: function(n) {
        this.bu = n;
        return n
    },
    q: function(n) {
        this.bs = n;
        return n
    },
    o: function(n) {
        this.bG = n;
        return n
    },
    M: function() {
        return this.W("V2015_10_15")
    },
    K: function(n) {
        var u = this.bp();
        var t = this.bj();
        this.bi && !t.actionName && (t.actionName = this.bi);
        if (u.Body.SavedItemFolderId) {
            var r = u.Body.SavedItemFolderId.BaseFolderId;
            !t.explicitLogonUser && r && (_g.bk.a(r) || _g.dv.a(r, new _g.s("internalsubmission"))) && (t.explicitLogonUser = r.Id === "internalsubmission" ? _h.p.b(null) : _h.p.b(r.Id))
        } else {
            var e = _h.p.h(null);
            e && (t.publicFolderMailbox = e)
        }
        for (var o = u.Body.Items, s = o.length, f = 0; f < s; ++f) {
            var i = o[f];
            if (_a.m.u(i.ItemClass)) {
                i.Body = undefined;
                i.NormalizedBody = undefined;
                i.UniqueBody = undefined;
                i.TextBody = undefined
            }
        }
        n.p(u, t, this.I, this.H)
    },
    bj: function() {
        var n = new _g.hk(this.L);
        n.clientStoreItem = this.co;
        n.isQueued = this.bu;
        n.clientStoreBodyValue = this.bD;
        n.viewModelContextId = this.ba;
        this.bk && this.bu && (n.parentFolderId = new _g.m(this.bk.Id));
        return n
    },
    bp: function() {
        var n = new _g.cU;
        n.Items = this.bo();
        n.ClientSupportsIrm = !0;
        this.br && (n.ItemShape = this.br);
        this.bH !== "None" && (n.ShapeName = this.bH);
        this.bs && (n.SavedItemFolderId = this.bs);
        _j.h.a(this.bG) || (n.ComplianceId = this.bG);
        _j.h.a(this.cf) || (n.TimeFormat = this.cf);
        _j.u.a(this.cd) || (n.OutboundCharset = this.cd);
        this.cg && (n.UseGB18030 = this.cg);
        this.ch && (n.UseISO885915 = this.ch);
        _j.h.a(this.bW) || (n.SubjectPrefix = this.bW + " ");
        this.bJ && (n.IsNonDraft = !0);
        var t = new _g.dx(this.M());
        t.Body = n;
        return t
    }
};
_h.bF = function() {
    _h.bF.initializeBase(this);
    this.H = !0
};
_h.bF.prototype = {
    r: "MoveToDeletedItems",
    I: 0,
    H: !1,
    h: function() {
        return !0
    },
    m: function(n) {
        n.L(this.e(), this.r, this.I, this.q, this.o)
    },
    be: function() {
        this.p || (this.p = _h.c.f(this.e(), this.s()));
        _h.c.d(this.e())
    },
    S: function() {
        this.N = "DeleteConversationAction";
        this.be()
    },
    u: function(n) {
        var t = new _g.bK("Delete", new _g.e(n.bH.ConversationId.Id));
        t.DeleteType = this.r;
        t.ConversationLastSyncTime = n.V() ? n.V().i() : null;
        t.SuppressReadReceipts = this.H;
        return t
    }
};
_h.bo = function() {
    _h.bo.initializeBase(this)
};
_h.bo.c = function(n, t) {
    n.s(t)
};
_h.bo.prototype = {
    j: 0,
    f: "none",
    k: "NoError",
    e: function() {
        return this.eM(_h.bo.a)
    },
    o: function(n) {
        this.eK(_h.bo.a, n);
        return n
    },
    l: function() {
        return this.eM(_h.bo.b)
    },
    p: function(n) {
        this.eK(_h.bo.b, n);
        return n
    },
    h: function() {
        return this.k
    },
    S: function() {
        var t = _h.l.a(this.e().bH.FolderId);
        this.f = t ? "archivedeleteditems" : "deleteditems";
        if (_g.b.a.idToName(this.e().bH.FolderId) === "deleteditems" || _h.a.h(this.e()) || _g.b.a.idToName(this.e().bH.FolderId) === "archivedeleteditems" || _h.a.F(this.e())) {
            this.j = "SoftDelete";
            this.l().bx.p(this.e(), !0);
            var n = this.l().f(this.e().bH.ParentFolderId);
            n && _h.c.a(n, "ChildFolderCount", n.bH.ChildFolderCount, n.bH.ChildFolderCount - 1, _h.bo.c)
        } else {
            this.j = "MoveToDeletedItems";
            _h.a.J(this.e(), _g.b.a.nameToId(this.f))
        }
        _h.O.f(this.e())
    },
    K: function(n) {
        var f = new _g.fF(this.j);
        f.FolderIds = [_g.l.a(this.e().bH.FolderId)];
        var e = new _g.fE(this.M(), f);
        var t = new _g.iu(this.L);
        var i = null;
        var r, u;
        (u = _h.t.b(t.explicitLogonUser, _g.l.a(this.e().bH.FolderId), _g.a.a().c(), r = {
            val: i
        }), i = r.val, u) && (t.anchorMailbox = _h.t.a(i, _g.a.a().c().bH.OrganizationDomain));
        n.eo(e, t, this.I, this.H)
    },
    cU: function(n, t, i) {
        if (!n.Body.ResponseMessages || !n.Body.ResponseMessages.Items || n.Body.ResponseMessages.Items.length !== 1) {
            i(Error.create("DeleteFolderAction failed."));
            return
        }
        if (n.Body.ResponseMessages.Items[0].ResponseCode !== "NoError") {
            i(Error.create(String.format("DeleteFolderAction failed with response code {0}.", n.Body.ResponseMessages.Items[0].ResponseCode)));
            return
        }
        t()
    },
    V: function() {
        _a.dn.prototype.V.call(this);
        this.N && this.N.Body && this.N.Body.ResponseMessages && this.N.Body.ResponseMessages.Items && this.N.Body.ResponseMessages.Items.length > 0 && (this.k = this.N.Body.ResponseMessages.Items[0].ResponseCode);
        this.m(this.e().bH.FolderId);
        this.m(_g.b.a.nameToId(this.f))
    },
    m: function(n) {
        var t = _h.a.f(n);
        t && t.O()
    }
};
_h.N = function(n, t, i, r) {
    _h.N.initializeBase(this);
    this.be = r;
    this.q = n;
    this.u = t;
    this.bi = i;
    this.r = !0;
    this.l = new _g.hl(this.L)
};
_h.N.b = function(n) {
    return _h.G.a(n, !0)
};
_h.N.a = function(n, t, i) {
    return new _h.N(_h.N.b(n), t, i, n)
};
_h.N.prototype = {
    bi: 0,
    q: null,
    u: "MoveToDeletedItems",
    bg: 0,
    N: 0,
    bc: !1,
    t: 0,
    r: !1,
    D: !1,
    l: null,
    be: null,
    h: function() {
        return !0
    },
    m: function(n) {
        this.be ? n.M(this.be, this.u, this.t, this.f, this.p) : n.N(this.q, this.u, this.t, this.f, this.p)
    },
    bo: function() {
        this.bc || this.o || (this.o = _h.c.E(this.q, this.e));
        this.bj()
    },
    S: function() {
        this.bo()
    },
    bj: function() {
        _h.c.e(this.q)
    },
    bk: function() {
        this.l.folderToReloadOnError = this.e ? _g.l.c(this.e) : null;
        this.l.clientStoreItem = this.bi;
        this.o && !this.e;
        this.l.instanceKeysToRemoveFromPendingOperations = this.o;
        this.e && (this.l.folderIdForInstanceKeysToRemoveFromPendingOperations = this.e.Id);
        return this.l
    },
    K: function(n) {
        this.l = this.bk();
        this.l.shouldPrecedeOfflineSyncActions = this.h();
        var t = new _g.ep(this.u);
        t.ItemIds = this.bl();
        t.SuppressReadReceipts = this.r;
        t.ReturnMovedItemIds = this.D;
        _j.u.a(this.bg) || (t.SendMeetingCancellations = _h.by.toString(this.bg));
        _j.u.a(this.N) || (t.AffectedTaskOccurrences = _h.dw.toString(this.N));
        var r = new _g.eo(this.M(), t);
        if (!this.l.explicitLogonUser && r.Body.ItemIds.length > 0 && _a.bL.a(r.Body.ItemIds[0].Id)) this.l.explicitLogonUser = this.e ? _h.p.b(this.e.Id) : _h.p.b(null);
        else {
            var i = null;
            var f, u;
            (u = _h.t.c(this.l.explicitLogonUser, this.q[0], _g.a.a().c().bH.MailboxGuid, f = {
                val: i
            }), i = f.val, u) && (this.l.anchorMailbox = _h.t.a(i, _g.a.a().c().bH.OrganizationDomain))
        }
        n.t(r, this.l, this.k, this.j)
    },
    V: function() {
        this.e && _h.c.i(_h.E, this.e)
    },
    bl: function() {
        for (var t = new Array(this.q.length), n = 0; n < this.q.length; n++) t[n] = _g.e.a(this.q[n], !0);
        return t
    }
};
_h.bH = function() {
    this.e = new Array(0);
    this.f = new Array(0);
    _h.bH.initializeBase(this)
};
_h.bH.a = function(n) {
    if (n && n.length) {
        for (var i = new Array(n.length), t = 0; t < n.length; t++) i[t] = n[t];
        return i
    } else return null
};
_h.bH.b = function() {
    var n = new _g.L("Beginning");
    n.Offset = 0;
    n.MaxEntriesReturned = _h.b.X();
    return n
};
_h.bH.prototype = {
    j: null,
    k: "Shallow",
    m: null,
    o: null,
    l: null,
    p: function() {
        return _h.b.K()
    },
    q: function() {
        return "Folder"
    },
    bm: function() {
        if (!PageDataPayload.findFolders) return !1;
        var t = PageDataPayload.findFolders;
        PageDataPayload.findFolders = null;
        if (!t.Body.ResponseMessages || !t.Body.ResponseMessages.Items || !t.Body.ResponseMessages.Items.length || !t.Body.ResponseMessages.Items[0]) return !1;
        var i = t.Body.ResponseMessages.Items[0];
        var n = i.RootFolder;
        if (i.ResponseClass !== "Success" || !n || !n.Folders || !n.Folders.length || !n.ParentFolder) {
            _j.e.c(_a.a.v, "PageDataPayload.FindFolders data is invalid and cannot be used. json: {0}", JsonParser.serialize(t));
            return !1
        }
        this.f[0] = n.Folders;
        this.e[0] = n.ParentFolder;
        return !0
    },
    K: function(n) {
        var t = new _g.fM(this.p(), null, this.k);
        t.ShapeName = this.q();
        t.ParentFolderIds = this.j;
        t.ReturnParentFolder = !0;
        t.Paging = this.m ? this.m : _h.bH.b();
        t.RequiredFolders = _h.bH.a(this.o);
        this.l && (t.FoldersToMoveToTop = _h.bH.a(this.l));
        var e = new _g.fK(this.M(), t);
        var i = new _g.iG(this.L);
        i.explicitLogonUser = this.R;
        var r = null;
        if (_j.h.a(i.explicitLogonUser) && _h.l.l(this.j[0], _g.a.a().c())) i.explicitLogonUser = this.j[0].Mailbox.EmailAddress;
        else {
            var u, f;
            (f = _h.t.b(i.explicitLogonUser, this.j[0], _g.a.a().c(), u = {
                val: r
            }), r = u.val, f) && (i.anchorMailbox = _h.t.a(r, _g.a.a().c().bH.OrganizationDomain))
        }
        n.bx(e, i, this.I, this.H)
    },
    cJ: function(n) {
        if (!n || !n.RootFolder) {
            Array.add(this.f, null);
            Array.add(this.e, null);
            return
        }
        var t = this.f.length;
        Array.add(this.f, n.RootFolder.Folders);
        Array.add(this.e, n.RootFolder.ParentFolder);
        !this.f[t] || !this.f[t].length;
        this.e[t] || _j.e.c(_a.a.v, "Parent folder is null after processing the response message. Response message json: {0}", JsonParser.serialize(n))
    }
};
_h.cd = function(n, t, i) {
    _h.cd.initializeBase(this);
    _a.c.b(t, "conversations");
    this.f(t);
    this.l(i);
    this.H = n;
    this.r = _g.bF.a(this.H, _g.a.a().a())
};
_h.cd.a = function(n, t) {
    for (var u = [], f = 0; f < n.length; f++)
        for (var e = n[f], o = e.a().b(), r = 0; r < o; r++) {
            var i = _h.d.a().a(e.a().a(r).Id);
            if (i) {
                r || t === "ClearFlag" || t === "MarkComplete" || Array.add(u, i);
                i.bX() && t === "MarkComplete" && i.bX().a() === "Flagged" && Array.add(u, i);
                i.bX() && t === "ClearFlag" && i.bX().a() !== "NotFlagged" && Array.add(u, i)
            }
        }
    return u
};
_h.cd.b = function(n, t) {
    for (var i = 0; i < n.length; i++) _h.c.a(n[i], "FlagStatus", n[i].M(), t.a(), function(n, t) {
        n.bj(t)
    })
};
_h.cd.prototype = {
    H: "None",
    r: null,
    h: function() {
        return !0
    },
    m: function(n) {
        this.e().length > 0 && n.R(this.e(), this.H, this.q, this.o)
    },
    S: function() {
        _h.cd.b(this.e(), this.r);
        var n = _h.cd.a(this.e(), this.H);
        var i = this,
            t = this;
        _h.c.c(_g.f, _g.bF, n, "Flag", function(n) {
            return n.bX()
        }, this.r, function(n, t) {
            n.hK(t)
        })
    },
    u: function(n) {
        var t = new _g.bK("Flag", new _g.e(n.bH.ConversationId.Id));
        t.Flag = this.r.j();
        t.ConversationLastSyncTime = n.V() ? n.V().i() : null;
        return t
    }
};
_h.bt = function(n, t) {
    _h.bt.initializeBase(this, [2]);
    this.bj = n;
    this.be = t;
    this.k = _g.bF.a(n, _g.a.a().a());
    this.r = "FlagItem"
};
_h.bt.a = function(n, t) {
    for (var u = n, f = u.length, i = 0; i < f; ++i) {
        var r = u[i];
        _h.c.a(r, "Flag", r.bX(), t, function(n, t) {
            n.hK(t)
        })
    }
};
_h.bt.prototype = {
    k: null,
    bj: "None",
    be: null,
    l: null,
    m: function(n) {
        if (this.o.length > 0) {
            var t = _h.G.b(this.o);
            n.S(this.o, this.bj, this.l, this.p)
        }
    },
    S: function() {
        _a.dn.prototype.S.call(this);
        _h.bt.a(this.o, this.k)
    },
    t: function() {
        this.be && (this.D = _g.l.c(this.be));
        var i = new _g.r(_g.c.bC());
        i.Item = new _g.J;
        i.Item.Flag = this.k.j();
        for (var u = [i], t = new Array(this.o.length), n = 0; n < this.o.length; n++) {
            var r = new _g.e(this.o[n].bH.ItemId.Id);
            r.ChangeKey = this.o[n].bH.ItemId.ChangeKey;
            t[n] = new _g.bm;
            t[n].ItemId = r;
            t[n].Updates = u
        }
        return t
    },
    bi: function() {
        _h.cK.prototype.bi.call(this);
        this.u.flag = new _g.cI;
        this.u.flag.FlagStatus = this.k.a();
        this.u.flag.StartDate = this.k.c() ? _a.d.d(this.k.c()) : null;
        this.u.flag.DueDate = this.k.b() ? _a.d.d(this.k.b()) : null;
        this.u.flag.CompleteDate = this.k.e() ? _a.d.d(this.k.e()) : null
    }
};
_h.dz = function() {
    _h.dz.initializeBase(this)
};
_h.dz.prototype = {
    e: null,
    K: function(n) {
        var t = new _g.iK(this.L);
        n.bN(t, this.I, this.H)
    },
    cU: function(n, t, i) {
        try {
            var r = new _g.fd(n);
            this.e = r;
            t()
        } catch (u) {
            i(u)
        }
    }
};
_h.cv = function(n, t) {
    _h.cv.initializeBase(this);
    this.e = n;
    this.f = t
};
_h.cv.prototype = {
    e: null,
    f: null,
    h: function() {
        _a.g.a.a(this);
        this.e.IsLoadingFromServer = !0
    },
    K: function(n) {
        var t = new _g.iO(this.L);
        n.bS(t, this.I, this.H)
    },
    cU: function(n, t, i) {
        this.e.PopulateFromServerData(n);
        t();
        this.f.a(_a.cn, _h.cv.a)
    },
    bc: function(n) {
        this.e.IsLoadingFromServer = !1;
        _h.fN.prototype.bc.call(this, n)
    }
};
_h.em = function() {
    _h.em.initializeBase(this)
};
_h.em.prototype = {
    e: null,
    K: function(n) {
        var t = new _g.hm(this.L);
        n.A(t, this.I, this.H)
    },
    cU: function(n, t, i) {
        try {
            this.f(n)
        } catch (r) {
            i(r);
            return
        }
        t()
    },
    f: function(n) {
        if (n.Favorites.length > 0) {
            this.e = new Array(n.Favorites.length);
            for (var t = 0; t < n.Favorites.length; t++) this.e[t] = n.Favorites[t].FolderId
        }
    }
};
_h.bp = function(n, t) {
    this.e = new Array(0);
    _h.bp.initializeBase(this);
    this.k = new _g.gb(this.L);
    this.k.actionName = n;
    this.k.isAutomated = t
};
_h.bp.prototype = {
    f: null,
    j: null,
    k: null,
    l: !1,
    m: function() {
        var n;
        if (this.l) {
            n = new _g.cJ("IdOnly");
            n.AdditionalProperties = [new _g.d("ReplicaList")]
        } else n = _h.b.K();
        return n
    },
    o: function() {
        return "Folder"
    },
    cK: function(n) {
        for (var r = 0; r < n.length; r++) {
            var u = n[r];
            this.cJ(u)
        }
        if (this.j) {
            this.j.i(this.e, null);
            for (var i = 0; i < this.f.length; i++) {
                var t = this.j.x[i];
                if (t)
                    if (t.a() === "msgfolderroot") {
                        t.f(_g.a.a().c().bH.UserDisplayName);
                        t.y(!1)
                    } else if (t.a() === "archivemsgfolderroot") {
                    t.f(_g.a.a().c().bH.ArchiveDisplayName);
                    t.y(!0)
                }
            }
        }
    },
    cJ: function(n) {
        if (n.Folders)
            for (var t = 0; t < n.Folders.length; t++) Array.add(this.e, n.Folders[t])
    },
    K: function(n) {
        var r = new _g.dC(this.m());
        r.ShapeName = this.o();
        for (var t = 0; t < this.f.length; t++) r.FolderIds[t] = this.f[t];
        var e = new _g.dB(this.M(), r);
        this.k.explicitLogonUser = this.R;
        if (!this.k.explicitLogonUser && this.f.length > 0 && (_g.bk.a(this.f[0]) || _g.dv.a(this.f[0], new _g.s("publicfoldersroot")))) this.k.explicitLogonUser = this.l ? _g.a.a().c().bH.DefaultPublicFolderMailbox : _h.p.b(null);
        else {
            var i;
            var u, f;
            (f = _h.t.b(this.k.explicitLogonUser, this.f[0], _g.a.a().c(), u = {
                val: i
            }), i = u.val, f) && (this.k.anchorMailbox = _h.t.a(i, _g.a.a().c().bH.OrganizationDomain))
        }
        n.g(e, this.k, this.I, this.H)
    },
    M: function() {
        return this.l ? this.W("Exchange2015") : _h.cn.prototype.M.call(this)
    }
};
_h.en = function() {
    _h.en.initializeBase(this)
};
_h.en.prototype = {
    e: null,
    K: function(n) {
        var t = new _g.iQ(this.L);
        n.ca(t, this.I, this.H)
    },
    cU: function(n, t, i) {
        this.e = n;
        t()
    }
};
_h.dB = function() {
    _h.dB.initializeBase(this);
    this.f = new _g.gb(this.L);
    this.f.actionName = "GetFolderPermissionSetAction";
    this.f.isAutomated = !1
};
_h.dB.prototype = {
    j: null,
    e: null,
    f: null,
    cK: function(n) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t];
            this.cJ(i)
        }
    },
    cJ: function(n) {
        if (n.Folders && n.Folders.length > 0) {
            var t = new _g.u(n.Folders[0]);
            this.e = t.A()
        }
    },
    K: function(n) {
        var f = new _g.cJ("IdOnly");
        f.AdditionalProperties = [_g.c.bn(), _g.c.bD()];
        var u = new _g.dC(f);
        u.FolderIds = [_g.l.a(this.j.bH.FolderId)];
        var t = null;
        var i, r;
        (r = _h.t.b(this.f.explicitLogonUser, _g.l.a(this.j.bH.FolderId), _g.a.a().c(), i = {
            val: t
        }), t = i.val, r) && (this.f.anchorMailbox = _h.t.a(t, _g.a.a().c().bH.OrganizationDomain));
        var e = new _g.dB(this.M(), u);
        n.g(e, this.f, this.I, this.H)
    }
};
_h.eo = function(n) {
    _h.eo.initializeBase(this);
    this.e = n
};
_h.eo.prototype = {
    e: null,
    f: null,
    K: function(n) {
        var t = new _g.ew;
        t.FolderId = this.h();
        n.w(t, null, this.I, this.H)
    },
    h: function() {
        var n = new _g.s("calendar");
        n.Mailbox = new _g.g;
        n.Mailbox.EmailAddress = this.e;
        return n
    },
    cU: function(n, t, i) {
        if (!n.WasSuccessful) {
            i(Error.create(n.ErrorCode + ""));
            return
        }
        try {
            n.MasterList && (this.f = new _g.bc(n.MasterList))
        } catch (r) {
            i(r);
            return
        }
        t()
    }
};
_h.cY = function(n, t) {
    _h.cY.initializeBase(this, [n, [t], _h.b.d(), "MailCompose", 2, !1, null, null]);
    this.m = "GetMessageForCompose"
};
_h.cY.prototype = {
    e: null,
    f: !1,
    cJ: function(n) {
        if (this.f) throw Error.invalidOperation("Expected only one response message.");
        this.f = !0;
        var t = _g.f.a(n.Items[0]);
        this.e = t
    }
};
_h.ep = function() {
    _h.ep.initializeBase(this)
};
_h.ep.prototype = {
    e: null,
    K: function(n) {
        n.ck(new _g.iT(this.L), this.I, this.H)
    },
    cU: function(n, t, i) {
        try {
            this.e = n;
            t()
        } catch (r) {
            i(r)
        }
    }
};
_h.cw = function() {
    _h.cw.initializeBase(this)
};
_h.cw.prototype = {
    e: null,
    bm: function() {
        if (PageDataPayload.owaUserConfig) {
            this.e = PageDataPayload.owaUserConfig;
            _a.g.j || (PageDataPayload.owaUserConfig = null);
            return !0
        }
        return !1
    },
    K: function(n) {
        var t = new _g.hn(this.L);
        n.h(t, this.I, this.H)
    },
    cU: function(n, t, i) {
        this.e = n;
        t()
    }
};
_h.eq = function(n, t, i) {
    _h.eq.initializeBase(this);
    this.f = n;
    this.j();
    this.e = new _g.jK(this.L);
    this.e.explicitLogonUser = t;
    this.e.remoteUserIdentifier = t;
    this.e.selfIdentifier = i
};
_h.eq.prototype = {
    f: null,
    e: null,
    K: function(n) {
        n.iL(new _g.dH(this.M()), this.f, this.e, this.I, this.H)
    },
    j: function() {
        for (var i = this.f, r = i.length, n = 0; n < r; ++n) {
            var t = i[n];
            _a.c.c(t.SubscriptionId, "subscriptionId");
            _a.c.a(t.Parameters, "subscription parameters")
        }
    }
};
_h.er = function(n, t, i) {
    _h.er.initializeBase(this);
    this.f = n;
    this.e = new _g.jS(this.L);
    this.e.explicitLogonUser = t;
    this.e.remoteUserIdentifier = t;
    this.e.selfIdentifier = i
};
_h.er.prototype = {
    f: null,
    e: null,
    K: function(n) {
        n.iY([this.f], this.e, this.I, this.H)
    }
};
_h.et = function(n, t, i) {
    _h.et.initializeBase(this);
    this.f = n;
    this.j();
    this.e = new _g.jL(this.L);
    this.e.explicitLogonUser = t;
    this.e.remoteUserIdentifier = t;
    this.e.selfIdentifier = i
};
_h.et.prototype = {
    f: null,
    e: null,
    K: function(n) {
        n.iM(new _g.dH(this.M()), this.f, this.e, this.I, this.H)
    },
    j: function() {
        for (var i = this.f, r = i.length, n = 0; n < r; ++n) {
            var t = i[n];
            _a.c.c(t.SubscriptionId, "subscriptionId");
            _a.c.a(t.Parameters, "subscription parameters")
        }
    }
};
_h.eu = function(n, t, i) {
    _h.eu.initializeBase(this);
    this.f = n;
    this.e = new _g.jT(this.L);
    this.e.explicitLogonUser = t;
    this.e.remoteUserIdentifier = t;
    this.e.selfIdentifier = i
};
_h.eu.prototype = {
    f: null,
    e: null,
    K: function(n) {
        n.iZ([this.f], this.e, this.I, this.H)
    }
};
_h.cZ = function(n, t, i) {
    _h.cZ.initializeBase(this);
    this.f(n);
    this.l(t);
    this.r = i
};
_h.cZ.prototype = {
    r: !1,
    h: function() {
        return !0
    },
    m: function(n) {
        n.X(this.e(), this.r)
    },
    S: function() {
        this.p || !this.s() || _g.b.a.doesIdEqualName(this.s(), "deleteditems") || (this.p = _h.c.f(this.e(), this.s()));
        _h.c.d(this.e())
    },
    u: function(n) {
        var t = new _g.bK("AlwaysDelete", new _g.e(n.bH.ConversationId.Id));
        t.EnableAlwaysDelete = this.r;
        return t
    }
};
_h.da = function(n, t, i) {
    _h.da.initializeBase(this);
    this.l = n;
    this.f = t;
    this.p = i;
    this.e = new _j.q;
    for (var r = 0; r < this.l.length; r++) {
        var u = this.l[r].bH.ConversationId;
        this.e.g(u) || this.e.c(u)
    }
};
_h.da.prototype = {
    p: !1,
    l: null,
    e: null,
    f: null,
    o: null,
    h: function() {
        return !0
    },
    m: function(n) {
        n.Y(this.l, this.p)
    },
    S: function() {
        this.o || !this.f || _g.b.a.doesIdEqualName(this.f, "deleteditems") || (this.o = _h.c.f(this.l, this.f));
        _h.c.d(this.l);
        _h.c.e(this.e.i())
    },
    K: function(n) {
        var r = new _g.ed(this.M());
        r.Body.ConversationActions = new Array(this.e.d.length);
        for (var t = 0; t < this.e.d.length; t++) {
            var i = new _g.bK("AlwaysDelete", new _g.e(this.e.d[t].Id));
            i.EnableAlwaysDelete = this.p;
            i.ContextFolderId = new _g.F(_g.l.a(this.f));
            r.Body.ConversationActions[t] = i
        }
        n.k(r, this.q(), this.k, this.j)
    },
    q: function() {
        this.o && !this.f;
        var n = new _g.hb(this.L);
        n.instanceKeysToRemoveFromPendingOperations = this.o;
        n.folderIdForInstanceKeysToRemoveFromPendingOperations = this.f.Id;
        n.shouldPrecedeOfflineSyncActions = this.h();
        return n
    }
};
_h.ew = function(n, t) {
    _h.ew.initializeBase(this);
    _a.c.a(t, "datapoints");
    this.f = n;
    this.e = t
};
_h.ew.prototype = {
    e: null,
    f: null,
    h: function() {
        return !1
    },
    K: function(n) {
        if (this.e.length) {
            var t = new _g.iZ(this.L);
            if (this.f) {
                t.explicitLogonUser = this.f;
                t.actionName = "ModernGroup"
            }
            t.shouldPrecedeOfflineSyncActions = this.h();
            n.H(this.e, t, this.k, this.j)
        }
    }
};
_h.cB = function() {
    _h.cB.initializeBase(this)
};
_h.cB.prototype = {
    r: !1,
    H: !1,
    I: !1,
    h: function() {
        return !0
    },
    m: function(n) {
        if (this.H && this.e().length > 0) {
            var t = this.e();
            n.bc(this.r, t, this.s(), this.o)
        }
    },
    S: function() {
        this.bh();
        for (var u = this.e(), e = u.length, n = 0; n < e; ++n) {
            var f = u[n];
            if (this.t)
                for (var i = _h.h.a().d(_h.E), t = 0; t < i.length; t++) {
                    var r = i[t].l(f.bH.ConversationId.Id);
                    r && this.be(r)
                } else this.be(f)
        }
    },
    be: function(n) {
        var i = 0;
        var t = 0;
        if (this.r) {
            t = this.t ? 0 : Math.max(n.bH.GlobalUnreadCount - n.bH.UnreadCount, 0);
            i = 0
        } else if (n.a()) {
            t = this.t ? n.bH.GlobalMessageCount : Math.max(n.bH.GlobalUnreadCount + (n.a().b() - n.bH.UnreadCount), 0);
            i = n.a().b()
        }
        var u = this;
        _h.c.a(n, "UnreadCount", n.bH.UnreadCount, i, function(n, t) {
            n.o(t)
        });
        var r = this;
        _h.c.a(n, "GlobalUnreadCount", n.bH.GlobalUnreadCount, t, function(n, t) {
            n.R(t)
        })
    },
    u: function(n) {
        var t = new _g.bK("SetReadState", new _g.e(n.bH.ConversationId.Id));
        t.IsRead = this.r;
        t.SuppressReadReceipts = _g.a.a().a().q() !== "AlwaysSend";
        t.ConversationLastSyncTime = n.V() ? n.V().i() : null;
        return t
    },
    bh: function() {
        this.N = this.I ? this.r ? "ModernGroupMarkAsReadConversationAction_IsRead_True" : "ModernGroupMarkAsReadConversationAction_IsRead_False" : this.r ? "MarkAsReadConversationAction_IsRead_True" : "MarkAsReadConversationAction_IsRead_False"
    }
};
_h.ch = function(n, t, i, r, u) {
    _h.ch.initializeBase(this);
    this.f(n);
    this.bh(t);
    this.l(i);
    this.p = r;
    this.I = u
};
_h.ch.prototype = {
    r: !1,
    I: 0,
    bh: function(n) {
        this.r = n;
        this.be(this.r ? _g.b.a.nameToId("clutter") : _g.b.a.nameToId("inbox"));
        return n
    },
    m: function(n) {
        n.bb(this.e(), this.I, this.r)
    },
    bg: function() {
        var n = this.e().length === 1 ? "Single_" : "Multi_";
        n += this.I + "_";
        n += this.r ? "MarkConversationAsClutter" : "MarkConversationAsNotClutter";
        this.N = n;
        return _h.bx.prototype.bg.call(this)
    }
};
_h.H = function(n, t, i, r, u, f) {
    _h.H.initializeBase(this, [2]);
    _a.c.j(n, "messagesToMarkRead");
    this.q(n);
    this.l = t;
    this.k = i;
    this.be = r;
    this.bj = f;
    (u || _g.a.a().a().q() !== "AlwaysSend") && (this.bP = !0);
    this.r = "MarkMessageRead"
};
_h.H.c = function() {
    if (!_h.H.a) {
        var n = new _g.r(_g.c.bv());
        n.Item = new _g.J;
        n.Item.IsRead = !0;
        _h.H.a = [n]
    }
    return _h.H.a
};
_h.H.d = function() {
    if (!_h.H.b) {
        var n = new _g.r(_g.c.bv());
        n.Item = new _g.J;
        n.Item.IsRead = !1;
        _h.H.b = [n]
    }
    return _h.H.b
};
_h.H.prototype = {
    l: !1,
    be: !1,
    k: null,
    bj: !1,
    m: function(n) {
        if (this.o.length > 0) {
            var t = _h.G.b(this.o);
            n.be(this.l, this.o, this.k, this.p, this.be, this.bj)
        }
    },
    S: function() {
        _a.dn.prototype.S.call(this);
        var t = this,
            n = this;
        _h.c.c(_g.x, Boolean, this.o, "IsRead", function(n) {
            return n.a()
        }, this.l, function(n, t) {
            n.h(t)
        })
    },
    t: function() {
        this.k && (this.D = new _g.F(_g.l.a(this.k)));
        for (var r = this.l ? _h.H.c() : _h.H.d(), t = new Array(this.o.length), n = 0; n < this.o.length; n++) {
            var i = new _g.e(this.o[n].bH.ItemId.Id);
            i.ChangeKey = this.o[n].bH.ItemId.ChangeKey;
            t[n] = new _g.bm;
            t[n].ItemId = i;
            t[n].Updates = r
        }
        return t
    }
};
_h.ba = function() {
    _h.ba.initializeBase(this)
};
_h.ba.prototype = {
    h: function() {
        return !0
    },
    H: function() {
        return this.eM(_h.ba.a)
    },
    be: function(n) {
        this.eK(_h.ba.a, n);
        return n
    },
    m: function(n) {
        this.e().length > 0 && n.v(this.e(), this.H(), this.q, this.o)
    },
    S: function() {
        for (var n = _h.a.a(this.H()), r = 0, i = 0, t = 0; t < this.e().length; t++) {
            r += this.e()[t].bH.MessageCount;
            i += this.e()[t].bH.UnreadCount
        }
        var f = this;
        _h.c.a(n, "UnreadCount", n.bH.UnreadCount, n.bH.UnreadCount + i, function(n, t) {
            n.h(t)
        });
        var u = this;
        _h.c.a(n, "TotalCount", n.bH.TotalCount, n.bH.TotalCount + r, function(n, t) {
            n.k(t)
        });
        this.p || (this.p = _h.c.f(this.e(), this.s()));
        _h.c.d(this.e());
        _h.ch.isInstanceOfType(this) || _h.O.b(_h.a.a(this.H()))
    },
    u: function(n) {
        var t = new _g.bK("Move", new _g.e(n.bH.ConversationId.Id));
        t.DestinationFolderId = new _g.F(_g.l.a(this.H()));
        t.ConversationLastSyncTime = n.V() ? n.V().i() : null;
        return t
    }
};
_h.df = function() {
    _h.df.initializeBase(this)
};
_h.df.prototype = {
    e: null,
    f: null,
    j: "NoError",
    h: function() {
        return this.j
    },
    S: function() {
        _h.a.J(this.e, this.f)
    },
    K: function(n) {
        var t = new _g.gp(_g.l.c(this.f));
        t.FolderIds = [_g.l.a(this.e.bH.FolderId)];
        var r = new _g.go(this.M(), t);
        var i = new _g.jj(this.L);
        n.hb(r, i, this.I, this.H)
    },
    cU: function(n, t, i) {
        if (!n.Body.ResponseMessages || !n.Body.ResponseMessages.Items || n.Body.ResponseMessages.Items.length !== 1 || n.Body.ResponseMessages.Items[0].ResponseCode !== "NoError") {
            i(Error.create("MoveFolderAction failed"));
            return
        }
        t()
    },
    V: function() {
        _a.dn.prototype.V.call(this);
        this.N && this.N.Body && this.N.Body.ResponseMessages && this.N.Body.ResponseMessages.Items && this.N.Body.ResponseMessages.Items.length > 0 && (this.j = this.N.Body.ResponseMessages.Items[0].ResponseCode);
        this.k(this.e.bH.FolderId);
        this.k(this.f)
    },
    k: function(n) {
        var t = _h.a.f(n);
        t && t.O()
    }
};
_h.bb = function(n, t, i) {
    _h.bb.initializeBase(this);
    this.l = _h.cK.a(n);
    this.D = i;
    this.r = t
};
_h.bb.prototype = {
    l: null,
    D: 0,
    r: null,
    q: null,
    s: !1,
    h: function() {
        return !0
    },
    m: function(n) {
        n.v(this.l, this.r, this.f, this.p)
    },
    S: function() {
        this.o || (this.o = _h.c.f(this.l, this.e));
        _h.c.d(this.l);
        if (!this.s) {
            var n = _h.a.a(this.r);
            _h.a.j(n) && _h.O.b(n)
        }
    },
    H: function() {
        var n = new _g.jm(this.L);
        n.clientStoreItem = this.D;
        n.folderToReloadOnError = this.e ? _g.l.c(this.e) : null;
        n.instanceKeysToRemoveFromPendingOperations = this.o;
        this.e && (n.folderIdForInstanceKeysToRemoveFromPendingOperations = this.e.Id);
        n.actionName = this.q ? this.q : "MoveItem";
        return n
    },
    K: function(n) {
        var i = this.H();
        i.shouldPrecedeOfflineSyncActions = this.h();
        var t = new _g.gr(new _g.F(new _g.m(this.r.Id)));
        t.ItemIds = this.I();
        var r = new _g.gq(this.M(), t);
        n.K(r, i, this.k, this.j)
    },
    V: function() {
        this.e || _h.c.i(_h.u, this.e)
    },
    I: function() {
        for (var t = new Array(this.l.length), n = 0; n < this.l.length; n++) t[n] = new _g.e(this.l[n].bH.ItemId.Id);
        return t
    }
};
_h.dM = function() {
    this.h = this.$$gta["_h.dM"].TResponse === Number || Type.isEnum(this.$$gta["_h.dM"].TResponse) ? 0 : this.$$gta["_h.dM"].TResponse === Boolean ? !1 : null;
    _h.dM.$$(this.$$gta["_h.dM"].TResponse).initializeBase(this)
};
_h.dM.$$ = function(n) {
    var u = _h.__tc = _h.__tc || {};
    var t = "dM" + "$" + n.getName().replace(/\./g, "_");
    if (!u[t]) {
        var r = u[t] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _h.dM.apply(this, t)
        };
        var h = _h.fN;
        r.registerClass("_h.__tc." + t, h);
        var o = {
            "_h.dM": {
                TResponse: n
            },
            ctor: _h.dM
        };
        var c = h.prototype.$$gta;
        for (var l in c) {
            var s = {
                key: l,
                value: c[l]
            };
            o[s.key] = s.value
        }
        r.prototype.$$gta = o;
        var f = _h.dM.prototype;
        for (var e in f) {
            var i = {
                key: e,
                value: f[e]
            };
            "constructor" !== i.key && (r.prototype[i.key] = i.value)
        }
    }
    return u[t]
};
_h.dM.prototype = {
    cU: function(n, t, i) {
        this.h = n;
        t()
    }
};
_h.ez = function(n) {
    _h.ez.initializeBase(this);
    this.e = n;
    this.j();
    this.f = new _g.jM(this.L)
};
_h.ez.prototype = {
    e: null,
    f: null,
    K: function(n) {
        n.iN(new _g.dH(this.M()), this.e, this.f, this.I, this.H)
    },
    j: function() {
        for (var i = this.e, r = i.length, n = 0; n < r; ++n) {
            var t = i[n];
            _a.c.c(t.SubscriptionId, "subscriptionId");
            _a.c.a(t.Parameters, "subscription parameters")
        }
    }
};
_h.eA = function(n) {
    _h.eA.initializeBase(this);
    this.f = n;
    this.e = new _g.jU(this.L)
};
_h.eA.prototype = {
    f: null,
    e: null,
    K: function(n) {
        n.dp([this.f], this.e, this.I, this.H)
    }
};
_h.eB = function(n) {
    _h.eB.initializeBase(this);
    this.e = n
};
_h.eB.prototype = {
    e: 0,
    K: function(n) {
        var t = new _g.jp(this.L);
        n.hl(this.e, t, this.I, this.H)
    },
    cU: function(n, t, i) {
        try {
            if (!n) {
                i(Error.create("NotifyAppWipe failed on server."));
                return
            }
            t()
        } catch (r) {
            i(r)
        }
    }
};
_h.bh = function() {};
_h.bh.a = function(n, t, i) {
    t.val = 0;
    i.val = null;
    var u = n[_h.bh.e];
    if (!u || u !== _bc.m.dataContractName) return !1;
    var e = n[_h.bh.d];
    _j.u.a(e) || (t.val = e);
    var f = n[_h.bh.c];
    var r = f[_h.bh.b];
    r = r ? r : "";
    i.val = Error.create(r, f);
    return !0
};
_h.PDPInit = function() {};
_h.PDPInit.$$cctor = function() {
    window.PageDataPayload || (window.PageDataPayload = {})
};
_h.q = function(n, t) {
    this.a = n;
    this.b = t
};
_h.q.prototype = {
    a: "FolderId",
    b: "Ascending",
    e: function() {
        return this.d() || this.a === "DateTimeSent" || this.a === "DateTimeCreated" || this.a === "ItemLastModifiedTime" || this.a === "ConversationLastModifiedTime"
    },
    d: function() {
        return this.a === "DateTimeReceived" || this.a === "ConversationLastDeliveryTime" || this.c()
    },
    c: function() {
        return this.a === "ReceivedOrRenewTime" || this.a === "ConversationLastDeliveryOrRenewTime"
    },
    f: function() {
        return this.a === "ItemLastModifiedTime" || this.a === "ConversationLastModifiedTime"
    },
    C: function(n) {
        return n ? _h.q.isInstanceOfType(n) ? this.a === n.a && this.b === n.b : !1 : !1
    }
};
_h.dR = function() {
    _h.dR.initializeBase(this)
};
_h.dR.prototype = {
    e: null,
    f: null,
    j: null,
    S: function() {
        this.j = this.e.bH.DisplayName;
        var n = this;
        _h.c.a(this.e, "DisplayName", this.j, this.f, function(n, t) {
            n.f(t)
        })
    },
    K: function(n) {
        var e = new _g.bD;
        e.DisplayName = this.f;
        var h = new _g.cb(new _g.d("FolderDisplayName"), e);
        var o = new _g.cn(_g.l.a(this.e.bH.FolderId));
        o.Updates = [h];
        var s = new _g.cd;
        s.FolderChanges = [o];
        var f = new _g.ct(this.M());
        f.Body = s;
        var i = new _g.cO(this.L);
        var t = null;
        var r, u;
        (u = _h.t.b(i.explicitLogonUser, _g.l.a(this.e.bH.FolderId), _g.a.a().c(), r = {
            val: t
        }), t = r.val, u) && (i.anchorMailbox = _h.t.a(t, _g.a.a().c().bH.OrganizationDomain));
        n.b(f, i, this.I, this.H)
    },
    cJ: function(n) {},
    V: function() {
        _a.dn.prototype.V.call(this);
        var n = _h.a.f(this.e.bH.FolderId);
        n && n.O()
    }
};
_h.eJ = function(n, t, i) {
    _h.eJ.initializeBase(this);
    _j.s.e(n, "conversations");
    this.f(n);
    this.r = t;
    this.l(i);
    this.N = "SetConversationInferenceClassification"
};
_h.eJ.prototype = {
    r: "Focused",
    h: function() {
        return !0
    },
    m: function(n) {
        this.e().length > 0 && n.bv(this.e(), this.r, this.s())
    },
    S: function() {
        _a.dn.prototype.S.call(this);
        this.p || (this.p = _h.c.f(this.e(), this.s()));
        _h.c.d(this.e())
    },
    u: function(n) {
        var t = new _g.bK("SetInferenceClassificationState", new _g.e(n.bH.ConversationId.Id));
        t.InferenceClassification = this.r;
        t.ConversationLastSyncTime = n.V() ? n.V().i() : null;
        return t
    }
};
_h.eK = function() {
    _h.eK.initializeBase(this)
};
_h.eK.prototype = {
    e: null,
    K: function(n) {
        var t = new _g.eP;
        t.FolderMruEntries = this.e;
        n.ij(t, null, this.I, this.H)
    },
    cU: function(n, t, i) {
        t()
    }
};
_h.dU = function(n, t, i) {
    _h.dU.initializeBase(this, [2]);
    _j.s.e(n, "items");
    this.q(n);
    this.be = t;
    this.k = i;
    this.r = "SetItemInferenceClassification"
};
_h.dU.prototype = {
    be: "Focused",
    k: null,
    l: null,
    m: function(n) {
        if (this.o.length > 0) {
            var t = _h.G.b(this.o);
            n.bw(t, this.be, this.k)
        }
    },
    S: function() {
        _a.dn.prototype.S.call(this);
        _h.c.d(this.o)
    },
    t: function() {
        this.k && (this.D = _g.l.c(this.k));
        var t = new _g.r(new _g.d("InferenceClassification"));
        t.Item = new _g.M;
        t.Item.InferenceClassification = this.be;
        for (var e = [t], f = new Array(this.o.length), n = 0; n < this.o.length; n++) {
            var u = this.o[n].bH.ItemId;
            var r = new _g.e(u.Id);
            r.ChangeKey = u.ChangeKey;
            var i = new _g.bm;
            i.ItemId = r;
            i.Updates = e;
            f[n] = i
        }
        return f
    },
    bi: function() {
        _h.cK.prototype.bi.call(this);
        this.l || (this.u.instanceKeysToRemoveFromPendingOperations = _h.c.f(this.o, this.k));
        this.u.folderIdForInstanceKeysToRemoveFromPendingOperations = this.k.Id
    }
};
_h.cG = function() {
    _h.cG.initializeBase(this)
};
_h.cG.prototype = {
    m: 0,
    r: null,
    H: null,
    h: function() {
        return !1
    },
    I: function() {
        if (!this.H) {
            this.H = [];
            if (this.e())
                for (var t = 0; t < this.e().length; t++)
                    for (var r = this.e()[t], n = 0; n < r.a().b(); n++) {
                        var u = r.a().a(n);
                        var i = _h.d.a().a(u.Id);
                        i && Array.add(this.H, i)
                    }
        }
        return this.H
    },
    S: function() {
        this.be(this.r)
    },
    u: function(n) {
        var t = new _g.bK("SetRetentionPolicy", new _g.e(n.bH.ConversationId.Id));
        t.RetentionPolicyType = this.m;
        this.r && (t.RetentionPolicyTagId = this.r);
        return t
    },
    be: function(n) {
        var t = new _g.bp;
        if (n) {
            t.c(n);
            t.b(!0)
        } else {
            t.c(null);
            t.b(!1)
        }
        var r = this,
            i = this;
        _h.c.c(_g.f, _g.bp, this.I(), this.m === 1 ? "ArchiveTag" : "PolicyTag", function(n) {
            return r.m === 1 ? n.cC() : n.cs()
        }, t, function(n, t) {
            i.m === 1 ? n.gE(t) : n.gP(t)
        })
    }
};
_h.f = function(n, t) {
    _h.f.initializeBase(this);
    this.e = n;
    this.f = t
};
_h.f.a = function(n, t) {
    var r = n.a();
    if (r) {
        var i = new _h.f(r, n.b());
        t.a(i);
        n.g();
        return i
    }
    return null
};
_h.f.b = function(n, t) {
    if (n.a()) {
        _h.f.c && _h.f.c !== n && _h.f.a(_h.f.c, t);
        _h.f.c = n;
        _h.f.d = _j.m.a().b(_h.f.d);
        _h.f.d = _j.m.a().a(_a.a.fZ, "CommitChangesThrottled", function() {
            _h.f.a(n, t);
            _h.f.c = null
        }, 2e3)
    }
};
_h.f.prototype = {
    f: null,
    h: function() {
        return !1
    },
    e: null,
    K: function(n) {
        var u = _g.b.a.nameToId("root");
        var f = new _g.gL(_g.l.a(u), this.f);
        var t = new _g.gA(f);
        t.Dictionary = this.e;
        var e = new _g.gK(t);
        var r = new _g.gJ(this.M(), e);
        var i = new _g.jZ(this.L);
        i.shouldPrecedeOfflineSyncActions = this.h();
        n.T(r, i, this.k, this.j)
    }
};
_h.ea = function() {
    _h.ea.initializeBase(this)
};
_h.ea.prototype = {
    e: null,
    f: null,
    k: null,
    j: !1,
    S: function() {
        this.k = this.j ? this.e.E() ? this.e.E().bH.Value : null : this.e.H() ? this.e.H().bH.Value : null;
        this.l(this.f)
    },
    K: function(n) {
        var r = new _g.cn(_g.l.a(this.e.bH.FolderId));
        r.Updates = [this.m()];
        var i = new _g.cd;
        i.FolderChanges = [r];
        var t = new _g.ct(this.M());
        t.Body = i;
        var u = new _g.cO(this.L);
        n.b(t, u, this.I, this.H)
    },
    cJ: function(n) {},
    V: function() {
        _a.dn.prototype.V.call(this);
        this.l(this.k)
    },
    m: function() {
        var t = new _g.bD;
        var n;
        if (this.j)
            if (this.f) {
                var r = new _g.bM(this.f);
                r.IsExplicit = !0;
                t.ArchiveTag = r;
                n = new _g.cb(_g.c.bt(), t)
            } else n = new _g.en(_g.c.bt());
        else if (this.f) {
            var i = new _g.bM(this.f);
            i.IsExplicit = !0;
            t.PolicyTag = i;
            n = new _g.cb(_g.c.bu(), t)
        } else n = new _g.en(_g.c.bu());
        return n
    },
    l: function(n) {
        var t = new _g.bp;
        if (this.j) {
            if (n) {
                t.c(n);
                t.b(!0)
            } else {
                t.c(null);
                t.b(!1)
            }
            var r = this;
            _h.c.a(this.e, "ArchiveTag", this.e.E(), t, function(n, t) {
                n.Y(t)
            })
        } else {
            if (n) {
                t.c(n);
                t.b(!0)
            } else {
                t.c(null);
                t.b(!1)
            }
            var i = this;
            _h.c.a(this.e, "PolicyTag", this.e.H(), t, function(n, t) {
                n.bb(t)
            })
        }
    }
};
_h.cK = function(n) {
    _h.cK.initializeBase(this);
    this.bH = n;
    var t = _g.a.a().bH.PolicySettings;
    this.bt = t.OutboundCharset;
    this.bv = t.UseGB18030;
    this.bw = t.UseISO885915
};
_h.cK.a = function(n) {
    if (!n) return null;
    for (var u = {}, r = [], t = 0; t < n.length; t++) {
        var i = n[t];
        if (!(i.bH.ItemId.Id in u)) {
            Array.add(r, i);
            u[i.bH.ItemId.Id] = 1
        }
    }
    return r
};
_h.cK.b = function(n) {
    if (!n) return null;
    for (var u = {}, r = [], t = 0; t < n.length; t++) {
        var i = n[t];
        if (!(i.Id in u)) {
            Array.add(r, i);
            u[i.Id] = 1
        }
    }
    return r
};
_h.cK.prototype = {
    o: null,
    bG: null,
    bH: 0,
    bo: "AlwaysOverwrite",
    s: 0,
    bN: 0,
    bp: null,
    D: null,
    bu: null,
    u: null,
    bt: "AlwaysUTF8",
    bv: !1,
    bw: !1,
    bg: null,
    bP: !1,
    r: null,
    bK: !1,
    bs: null,
    q: function(n) {
        this.o = _h.cK.a(n);
        return n
    },
    f: function(n) {
        this.bo = n;
        return n
    },
    j: function(n) {
        this.s = n;
        return n
    },
    e: function(n) {
        this.bg = n;
        return n
    },
    p: null,
    M: function() {
        return this.W("Exchange2015")
    },
    bi: function() {},
    K: function(n) {
        var i = this.bJ();
        var t = new _g.gG(this.L);
        this.u = t;
        t.folderToReloadOnError = this.D;
        t.clientStoreItem = this.bH;
        t.clientStoreBodyValue = this.bG;
        t.isTextBodyValue = this.bK;
        this.bu && (t.outboxFolderId = new _g.m(this.bu.Id));
        if (!t.explicitLogonUser && i.Body.ItemChanges.length > 0 && _a.bL.a(i.Body.ItemChanges[0].ItemId.Id)) {
            var u = null;
            i.Body.SavedItemFolderId && (u = i.Body.SavedItemFolderId.BaseFolderId);
            t.explicitLogonUser = u ? _h.p.b(u.Id) : _h.p.b(null)
        } else {
            var r = null;
            var e, f;
            (f = _h.t.c(t.explicitLogonUser, i.Body.ItemChanges[0].ItemId, _g.a.a().c().bH.MailboxGuid, e = {
                val: r
            }), r = e.val, f) && (t.anchorMailbox = _h.t.a(r, _g.a.a().c().bH.OrganizationDomain))
        }
        this.bi();
        this.r && !this.u.actionName && (this.u.actionName = this.r);
        n.c(i, this.u, this.I, this.H)
    },
    cJ: function(n) {},
    bJ: function() {
        var n = new _g.dS(this.bo);
        n.ClientSupportsIrm = !0;
        n.ItemChanges = this.t();
        _j.u.a(this.bN) || (n.SendCalendarInvitationsOrCancellations = _h.cF.toString(this.bN));
        _j.u.a(this.s) || (n.MessageDisposition = _h.bS.toString(this.s));
        this.bp && (n.SavedItemFolderId = this.bp);
        _j.h.a(this.bg) || (n.ComplianceId = this.bg);
        n.SuppressReadReceipts = this.bP;
        this.bs && (n.ComposeOperation = this.bs);
        _j.u.a(this.bt) || (n.OutboundCharset = this.bt);
        this.bv && (n.UseGB18030 = this.bv);
        this.bw && (n.UseISO885915 = this.bw);
        return new _g.dR(this.M(), n)
    }
};
_h.bW = function(n, t, i, r) {
    _h.bW.initializeBase(this);
    this.j = r;
    n && n.length > 0 && (this.f = n);
    t && t.length > 0 && (this.k = t);
    i && i.length > 0 && (this.h = i)
};
_h.bW.prototype = {
    f: null,
    k: null,
    h: null,
    j: null,
    e: null,
    l: function() {
        var n = new _g.gI;
        n.AddCategoryList = this.f;
        n.ChangeCategoryColorList = this.h;
        n.RemoveCategoryList = this.k;
        return n
    },
    K: function(n) {
        var i = this.l();
        var t = new _g.jX(this.L);
        t.explicitLogonUser = this.j;
        n.du(i, t, this.I, this.H)
    },
    cU: function(n, t, i) {
        try {
            this.m(n)
        } catch (r) {
            i(r);
            return
        }
        t()
    },
    m: function(n) {
        this.e = new(_a.fT.$$(_g.bg, _g.bC))(n.MasterList)
    }
};
_h.cn = function(n) {
    this.cy = Function.createDelegate(this, this.cR);
    _h.cn.initializeBase(this, [n]);
    this.Z = _h.cn.a
};
_h.cn.prototype = {
    Q: null,
    d: function() {
        return this.Q
    },
    R: null,
    E: function() {
        return this.R
    },
    cY: function(n) {
        this.R = n;
        return n
    },
    Z: "Exchange2007",
    O: function() {
        var n = this.cO();
        return n ? n : _a.dn.prototype.cv.call(this)
    },
    P: function() {
        return this.Q ? this.Q.correlationId : null
    },
    M: function() {
        return this.W(this.Z)
    },
    Y: function() {
        return _g.a.a().a().bH.TimeZone
    },
    W: function(n) {
        var t = new _g.co(n);
        t.TimeZoneContext = new _g.dh;
        t.TimeZoneContext.TimeZoneDefinition = new _g.cA;
        t.TimeZoneContext.TimeZoneDefinition.Id = this.Y();
        return t
    },
    bb: function() {
        if (this.bm()) return 0;
        else {
            _g.k.d(this.cy);
            return 1
        }
    },
    bm: function() {
        return !1
    },
    cR: function(n) {
        this.K(_a.fM.isInstanceOfType(this) ? _g.k.a.b() : n)
    },
    cO: function() {
        if (this.Q) {
            if (this.Q.responseCode !== "NoError") return this.Q.responseCode;
            else if (this.Q.response) return this.Q.response.statusCode !== 200 && this.Q.response.statusCode !== 500 ? "HTTP_" + this.Q.response.statusCode : this.cQ()
        } else return null;
        return null
    },
    cQ: function() {
        if (this.Q.response.fault) {
            if (this.Q.response.fault.ResponseCode && this.Q.response.fault.ResponseCode !== "NoError") return this.Q.response.fault.ResponseCode;
            else if (this.Q.response.fault.ExceptionName) return this.Q.response.fault.ExceptionName
        } else return null;
        return null
    }
};
_h.fM = function(n) {
    this.e = n
};
_h.fM.prototype = {
    e: null
};
_h.fN = function(n) {
    this.cA = Function.createDelegate(this, this.cT);
    this.cz = Function.createDelegate(this, this.cS);
    this.H = Function.createDelegate(this, this.bc);
    this.I = Function.createDelegate(this, this.bh);
    _h.fN.initializeBase(this, [n])
};
_h.fN.prototype = {
    N: null,
    bh: function(n, t) {
        this.Q = n;
        this.N = t;
        this.cU(this.N, this.cz, this.H)
    },
    bc: function(n) {
        this.z() !== 3 && this.X(n)
    },
    cT: function(n, t) {
        this.Q = n;
        this.bc(t)
    },
    cS: function() {
        this.z() !== 3 && this.X(null)
    }
};
_h.fO = function() {
    this.j = Function.createDelegate(this, this.bp);
    this.k = Function.createDelegate(this, this.bq);
    _h.fO.initializeBase(this)
};
_h.fO.prototype = {
    bq: function(n) {
        this.Q = n;
        this.X(null)
    },
    bp: function(n) {
        this.X(n)
    }
};
_h.b = function() {};
_h.b.K = function() {
    _h.b.C || (_h.b.C = new _g.cJ("IdOnly"));
    return _h.b.C
};
_h.b.O = function() {
    if (!_h.b.n) {
        _h.b.n = new _g.cJ("IdOnly");
        _h.b.n.AdditionalProperties = [new _g.d("UnreadCount"), new _g.d("TotalCount")]
    }
    return _h.b.n
};
_h.b.f = function() {
    _h.b.D || (_h.b.D = new _g.V("IdOnly"));
    return _h.b.D
};
_h.b.Q = function() {
    _h.b.B || (_h.b.B = new _g.fu("IdOnly"));
    return _h.b.B
};
_h.b.X = function() {
    _h.b.p === -1 && (_h.b.p = _j.u.a(_g.a.a().n().bH.FindFolderCountLimit) ? 5e3 : _g.a.a().n().bH.FindFolderCountLimit);
    return _h.b.p
};
_h.b.q = function() {
    if (!_h.b.s) {
        _h.b.s = _ff.e.a(_h.b.g());
        _h.b.s.MaximumRecipientsToReturn = 0
    }
    return _h.b.s
};
_h.b.g = function() {
    if (!_h.b.i) {
        _h.b.i = _h.b.G();
        _h.b.i.MaximumBodySize = _h.b.v;
        _h.b.i.MaximumRecipientsToReturn = _h.b.w;
        _h.b.i.CssScopeClassName = _h.b.k
    }
    return _h.b.i
};
_h.b.a = function() {
    if (!_h.b.j) {
        _h.b.j = _h.b.G();
        _h.b.j.MaximumBodySize = _h.b.v;
        _h.b.j.MaximumRecipientsToReturn = _h.b.w;
        _h.b.j.CssScopeClassName = _h.b.k
    }
    return _h.b.j
};
_h.b.L = function() {
    if (!_h.b.t) {
        _h.b.t = _ff.e.a(_h.b.a());
        _h.b.t.MaximumRecipientsToReturn = 0
    }
    return _h.b.t
};
_h.b.S = function(n) {
    if (!_h.b.c) {
        _h.b.c = _h.b.G();
        _h.b.c.BodyType = n ? "Best" : "Text";
        _h.b.c.UniqueBodyType = "HTML";
        _h.b.c.NormalizedBodyType = "HTML";
        _h.b.c.MaximumBodySize = _h.b.v;
        _h.b.c.MaximumRecipientsToReturn = 0
    }
    return _h.b.c
};
_h.b.d = function() {
    if (!_h.b.E) {
        var n = _h.b.H();
        n.BodyType = "HTML";
        _h.b.x(n, !1);
        _h.b.E = n
    }
    return _h.b.E
};
_h.b.l = function() {
    if (!_h.b.u) {
        _h.b.u = _h.b.H();
        _h.b.u.BodyType = "Text"
    }
    return _h.b.u
};
_h.b.M = function() {
    if (!_h.b.m) {
        _h.b.m = _h.b.H();
        _h.b.m.NormalizedBodyType = "HTML";
        _h.b.m.InlineImageUrlTemplate = _g.C.g()
    }
    return _h.b.m
};
_h.b.Z = function() {
    var n = new _g.fs("IdOnly");
    _h.b.N(n);
    n.BodyType = "HTML";
    _h.b.x(n, !0);
    return n
};
_h.b.W = function() {
    if (!_h.b.o) {
        _h.b.o = new _g.V("IdOnly");
        _h.b.o.AdditionalProperties = [new _g.d("EntityExtractionResult")]
    }
    return _h.b.o
};
_h.b.J = function() {
    _h.b.z || (_h.b.z = _h.b.I(!0, !1));
    return _h.b.z
};
_h.b.Y = function() {
    _h.b.y || (_h.b.y = _h.b.I(!0, !0));
    return _h.b.y
};
_h.b.P = function() {
    _h.b.A || (_h.b.A = _h.b.I(!1, !0));
    return _h.b.A
};
_h.b.T = function(n) {
    return _h.l.c(n) ? new _h.q("ConversationLastDeliveryTime", "Descending") : new _h.q(_h.b.b, "Descending")
};
_h.b.h = function(n) {
    var t = null;
    if (n) {
        for (var i = 0; i < _h.b.r.length; ++i) {
            var r = _h.b.r[i];
            if (r.a === n) {
                t = r.b;
                break
            }
        }
        if (!t) {
            t = _ff.e.a(n);
            _h.b.x(t, !0);
            if (_h.b.r.length < 8) {
                var u = new _h.b.V(n, t);
                Array.add(_h.b.r, u)
            }
        }
    }
    return t
};
_h.b.G = function() {
    var n = new _g.V("IdOnly");
    _h.b.N(n);
    return n
};
_h.b.R = function(n, t) {
    return _g.b.a.doesIdEqualName(n, "sentitems") ? t && t.a === "ConversationUniqueSenders" ? "ConversationUberListView" : "ConversationSentItemsListView" : t && t.a === "ConversationUniqueRecipients" ? "ConversationUberListView" : "ConversationListView"
};
_h.b.x = function(n, t) {
    n.InlineImageUrlTemplate = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7";
    n.InlineImageCustomDataTemplate = "{id}";
    t && (n.InlineImageUrlOnLoadTemplate = "InlineImageLoader.GetLoader().Load(this)")
};
_h.b.H = function() {
    var n = new _g.V("IdOnly");
    n.ClientSupportsIrm = !0;
    n.FilterHtmlContent = !0;
    n.FilterInlineSafetyTips = !1;
    n.ShouldUseNarrowGapForPTagHtmlToTextConversion = !0;
    return n
};
_h.b.N = function(n) {
    if (_g.a.a().n().a() === 2) {
        n.FilterHtmlContent = !1;
        n.BlockExternalImagesIfSenderUntrusted = !1
    } else {
        n.FilterHtmlContent = !0;
        n.BlockExternalImagesIfSenderUntrusted = !0
    }
    _g.a.a().q() && (n.BlockContentFromUnknownSenders = _g.a.a().q().bH.BlockContentFromUnknownSenders);
    n.AddBlankTargetToLinks = !0;
    n.ClientSupportsIrm = !0;
    n.InlineImageUrlTemplate = _g.C.g();
    n.FilterInlineSafetyTips = !0;
    n.MaximumBodySize = 0;
    return n
};
_h.b.I = function(n, t) {
    var i = new _g.V("IdOnly");
    _h.b.N(i);
    i.CssScopeClassName = _h.b.k;
    if (n) {
        i.BodyType = "HTML";
        t && (i.AdditionalProperties = [new _g.d("TextBody")])
    } else t && (i.BodyType = "Text");
    return i
};
_h.b.V = function(n, t) {
    this.a = n;
    this.b = t
};
_h.b.V.prototype = {
    a: null,
    b: null
};
_h.m = function(n, t) {
    this.a = n;
    this.b = t
};
_h.m.e = function(n, t) {
    if (!n && t) return new _h.m(t.a, t.b);
    if (n && !t) return new _h.m(n.a, n.b);
    var r = n.a.a(t.a) < 0 ? n.a : t.a;
    var i = n.b.a(t.b) > 0 ? n.b : t.b;
    return new _h.m(r, i)
};
_h.m.b = function(n, t) {
    return n ? n.g(t) : !t
};
_h.m.d = function(n, t) {
    if (!n) throw Error.argumentNull("a");
    if (!t) throw Error.argumentNull("b");
    var r;
    var i;
    if (n.a.a(t.a) < 0) {
        r = n.f();
        i = t.f()
    } else {
        r = t.f();
        i = n.f()
    }
    return r.b.a(i.a) < 0
};
_h.m.a = function(n, t) {
    _a.c.a(n, "a");
    _a.c.a(t, "b");
    return n.a.a(t.a) < 0 ? n.b.a(t.a) > 0 : t.b.a(n.a) > 0
};
_h.m.c = function(n) {
    return n === 6 || n === 3
};
_h.m.prototype = {
    a: null,
    b: null,
    e: function(n) {
        _a.c.a(n, "item");
        return n.a().a(this.b) < 0 && (n.b().a(this.a) > 0 || !n.a().a(this.a))
    },
    i: function(n) {
        return n.b().a(this.a) <= 0 && n.a().a(this.a) ? -1 : n.a().a(this.b) >= 0 ? 1 : 0
    },
    f: function() {
        var t = this.a.u();
        var n = this.b.u();
        return new _h.m(t, n)
    },
    d: function(n, t) {
        if (!n) throw Error.argumentNull("otherRange");
        return t ? this.a.a(n.a) <= 0 && this.b.a(n.b) >= 0 : this.a.a(n.a) < 0 && this.b.a(n.b) > 0
    },
    g: function(n) {
        return n ? !this.a.a(n.a) && !this.b.a(n.b) : !1
    },
    h: function(n, t) {
        if (!n) throw Error.argumentNull("start");
        if (!t) throw Error.argumentNull("end");
        return n.k(this.a) >= 0 && n.k(this.b) <= 0 || t.k(this.b) <= 0 && t.k(this.a) >= 0 || n.k(this.a) < 0 && t.k(this.b) > 0 ? !0 : !1
    },
    c: function(n, t, i) {
        if (!n) throw Error.argumentNull("dateToTest");
        var r;
        r = t ? this.a.a(n) <= 0 : this.a.a(n) < 0;
        return i ? r && this.b.a(n) >= 0 : r && this.b.a(n) > 0
    },
    toString: function() {
        return this.a + "-" + this.b
    }
};
_h.bv = function() {};
_h.bv.a = function(n, t) {
    if (!(n.toString() in _h.bv.b)) {
        _a.A.a.a(new _h.bv.c(n, t));
        _h.bv.b[n.toString()] = !0
    }
};
_h.bv.c = function(n, t) {
    _h.bv.c.initializeBase(this, [16, n.toString()]);
    this.a.s = _h.bv.c.a();
    t && (this.a.f = t.Id)
};
_h.bv.c.a = function() {
    return Math.floor(_a.b.y() / 1e3)
};
_h.dn = function(n) {
    this.a = n
};
_h.dn.prototype = {
    a: null
};
_h.cj = function() {};
_h.ek = function() {
    _h.ek.initializeBase(this)
};
_h.ek.prototype = {
    p: function() {
        return _h.b.O()
    },
    q: function() {
        return null
    }
};
_h.dA = function(n, t) {
    _h.dA.initializeBase(this, [n, t])
};
_h.dA.prototype = {
    m: function() {
        return _h.b.O()
    },
    o: function() {
        return null
    }
};
_h.bq = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w) {
    _h.bq.initializeBase(this);
    this.f = n;
    this.d = t;
    this.i = i;
    this.h = s;
    this.e = h;
    this.k = c;
    this.l = l;
    this.a = a;
    this.m = v;
    this.n = y;
    this.q = r;
    this.r = u;
    this.p = f;
    this.o = e;
    this.s = o;
    this.j = p;
    this.g = w
};
_h.bq.prototype = {
    f: null,
    d: null,
    i: null,
    h: null,
    e: null,
    k: null,
    l: null,
    a: null,
    m: null,
    n: null,
    p: null,
    o: null,
    q: null,
    r: null,
    s: null,
    b: null,
    c: null,
    j: null,
    g: null
};
_h.e = function() {
    this.b = _h.e.d
};
_h.e.b = function(n, t, i) {
    i.val = n && t ? t.c(n) : null;
    return i.val && i.val.bH.Color !== -1 ? !0 : !1
};
_h.e.prototype = {
    b: null,
    c: function(n, t) {
        var i = _h.e.a;
        n !== -1 && (i = this.b[n][t]);
        return i
    },
    e: function(n, t, i, r) {
        _j.k.a(n, t, this.c(i, r))
    },
    d: function(n, t, i, r) {
        _j.k.a(n, t, this.a(i, r))
    },
    a: function(n, t) {
        return this.b[n.bH.Color][t]
    }
};
_h.r = function() {
    this.o = Function.createDelegate(this, this.t);
    this.p = Function.createDelegate(this, this.v);
    _h.r.initializeBase(this);
    this.w();
    this.h = {}
};
_h.r.a = function() {
    _h.r.d || (_h.r.d = new _h.r);
    return _h.r.d
};
_h.r.c = function() {
    _h.r.f || (_h.r.f = new _h.eG);
    return _h.r.f
};
_h.r.j = function(n) {
    var t = null;
    if (n in _h.r.e) t = _h.r.e[n];
    else {
        t = new _h.r;
        _h.r.e[n] = t
    }
    return t
};
_h.r.i = function() {
    var i = window.maxConnectionsPerServer;
    var n = 0;
    i && (n = i);
    if (n > 0) n = Math.max(1, n - 2);
    else {
        var t = _a.o.a();
        n = t.M ? 4 : t.a() ? 5 : 6;
        n = n - 2
    }
    return n
};
_h.r.h = function() {
    return +new Date
};
_h.r.prototype = {
    a: null,
    c: null,
    b: null,
    h: null,
    n: null,
    l: !1,
    j: !1,
    e: null,
    s: function(n) {
        var t = this.j && !n;
        this.j = n;
        t && this.g(0);
        return n
    },
    w: function() {
        this.a = [];
        this.c = {};
        this.b = {};
        this.e = {}
    },
    u: function() {
        var n = [];
        var u = this.c;
        for (var f in u) {
            var e = {
                key: f,
                value: u[f]
            };
            var i = e.value;
            if (i && i.length > 0) {
                var r = i[0];
                r.f() && (n[n.length] = r)
            }
        }
        for (var t = 0; t < n.length; t++) this.m(n[t], !0, !1);
        this.g(0)
    },
    i: function(n) {
        if (!n) {
            _j.e.c(_h.r.b, "AddToControlsQueue: queueableControl is null");
            return
        }
        if (_j.h.a(n.d())) {
            _j.e.c(_h.r.b, "AddToControlsQueue: queueableControl.TaskKey is empty");
            return
        }
        var i = n.d();
        if (n.e() && i in this.h) {
            n.b(!1);
            return
        }
        var t = this.f(i);
        if (!t) {
            t = [];
            this.c[i] = t;
            this.a[this.a.length] = i
        }
        t[t.length] = n;
        n.a(t.length - 1);
        this.g(0)
    },
    m: function(n, t, i) {
        if (!n) {
            _j.e.c(_h.r.b, "RemoveFromControlsQueue: queueableControl is null");
            return
        }
        var u = n.d();
        var f = n.g();
        if (_j.h.a(u)) {
            _j.e.c(_h.r.b, "RemoveFromControlsQueue: queueableControl.TaskKey is empty");
            return
        }
        n.a(-1);
        var r = this.f(u);
        if (r) {
            if (r.length === 1 || t) {
                delete this.c[u];
                Array.remove(this.a, u);
                for (var o = 0; o < r.length; o++) {
                    var h = r[o];
                    h && h.a(-1)
                }
                Array.clear(r)
            } else if (f >= 0 && f < r.length) {
                Array.removeAt(r, f);
                for (var e = f; e < r.length; e++) {
                    var s = r[e];
                    s && s.a(e)
                }
            } else _j.e.c(_h.r.b, "RemoveFromControlsQueue: index={0} of queueableControl with key {1} is out of range. Index has to be between 0 and {2}", f, u, r.length - 1);
            r.length > 0 && !Array.contains(this.a, u) && (this.a[this.a.length] = u)
        }
        this.r(u, i)
    },
    d: function(n, t) {
        if (_j.h.a(n)) {
            _j.e.c(_h.r.b, "OnTaskCompleted: key is empty");
            return
        }
        var r = this.f(n);
        var i = r && r.length > 0 ? r[0] : null;
        t && i && i.e() && _ff.i.a(this.h) < 500 && (this.h[n] = 1);
        if (r) {
            for (var u = 0; u < r.length; u++) {
                i = r[u];
                t && !i.i() && i.b(!1);
                i.a(-1)
            }
            delete this.c[n]
        }
        Array.remove(this.a, n);
        this.r(n, !0)
    },
    x: function() {
        if (!this.l) {
            var n = new _g.S;
            n.NotificationType = "RowNotification";
            n.FolderId = _g.b.a.nameToId("root").Id;
            var t = new _h.K(n);
            t.n(_h.r.b, "OnUserPhoto", this.p, 1);
            this.l = !0
        }
    },
    q: function(n) {
        n in this.e || (this.e[n] = _h.r.h());
        return this.e[n]
    },
    k: function(n) {
        this.e[n] = _h.r.h()
    },
    g: function(n) {
        if (!this.j) {
            var u = _ff.i.a(this.b);
            if (!(u >= _h.r.g) && !(this.a.length <= n)) {
                var i = this.a[n];
                if (!(i in this.b)) {
                    var r = this.f(i);
                    if (r && r.length > 0) {
                        var t = r[0];
                        if (t.c() > 0 && t.c() < _h.r.g && u >= t.c()) {
                            this.g(n + 1);
                            return
                        }
                        Array.removeAt(this.a, n);
                        this.b[i] = +new Date;
                        this.n || (this.n = _j.m.a().e(_h.r.b, "ControlTasksQueue", this.o, 3e4));
                        t.b(!0)
                    }
                }
            }
        }
    },
    r: function(n, t) {
        if (n in this.b) {
            delete this.b[n];
            t && this.g(0)
        }
    },
    f: function(n) {
        var t = null;
        n in this.c && (t = this.c[n]);
        return t
    },
    t: function() {
        if (_ff.i.a(this.b)) {
            var f = +new Date;
            var u = this.b;
            for (var i in u) {
                var t = {
                    key: i,
                    value: u[i]
                };
                var e = t.value;
                if (f - e >= 3e4) {
                    var n = this.f(t.key);
                    var r = n && n.length > 0 ? n[0] : null;
                    var o = r ? r.h() : "";
                    this.d(t.key, !1)
                }
            }
        }
    },
    v: function(n) {
        if (n.EventType === "RowAdded") {
            var i = n;
            var r = i;
            var t = r.Item;
            if (t && (t.ItemClass === "IPM.UserPhoto" || t.ItemClass === "IPM.UserPhoto.DeletedNotification")) {
                this.k(_g.a.a().c().bH.UserEmailAddress);
                this.by("SelfPictureCanary")
            }
        }
    }
};
_h.bG = function(n) {
    this.c = n
};
_h.bG.prototype = {
    c: null,
    e: null,
    h: 0,
    f: null,
    i: 0,
    g: 0,
    a: function() {
        return this.c.name
    },
    b: function() {
        return this.c.size
    },
    d: function() {
        return this.c.type
    }
};
_h.cr = function(n) {
    this.c = n
};
_h.cr.prototype = {
    c: null,
    a: function() {
        return this.c.length
    },
    b: function(n) {
        return new _h.bG(this.c.item(n))
    }
};
_h.ci = function(n) {
    this.c = n
};
_h.ci.prototype = {
    c: null,
    a: function() {
        return this.c.length
    },
    b: function(n) {
        return this.c[n]
    }
};
_h.cs = function(n) {
    this.e = n
};
_h.cs.prototype = {
    e: null,
    c: function() {
        return this.e
    },
    b: function(n) {
        return n.ItemId.Id
    },
    d: function(n) {
        return n.InstanceKey
    }
};
_h.G = function() {};
_h.G.b = function(n) {
    for (var i = new Array(n.length), t = 0; t < n.length; t++) i[t] = n[t].bH.ItemId;
    return i
};
_h.G.a = function(n, t) {
    for (var r = new Array(0), i = 0; i < n.length; i++) _g.f.isInstanceOfType(n[i]) ? r.push(n[i].bH.ItemId) : _g.o.isInstanceOfType(n[i]) ? Array.addRange(r, t ? n[i].a().e() : n[i].e().e()) : _g.fg.isInstanceOfType(n[i]) && n[i].a().n(function(n) {
        r.push(n.bH.ItemId)
    });
    return r
};
_h.G.c = function(n) {
    return n ? n.Id + ":" + n.ChangeKey : "null"
};
_h.eG = function() {
    this.a = new Sys.EventHandlerList
};
_h.eG.prototype = {
    a: null,
    d: function(n, t, i) {
        this.a.addHandler(this.b(n, t), i)
    },
    e: function(n, t, i) {
        this.a.removeHandler(this.b(n, t), i)
    },
    c: function(n, t) {
        var i = this.a.getHandler(this.b(n, t));
        i(this, new Sys.EventArgs)
    },
    b: function(n, t) {
        if (!n || !n.a() || _j.h.a(n.a().EmailAddress) || !t) throw Error.argumentNull("Persona must not be null, should carry an email address and event name should always be present");
        return String.format("{0}:{1}", n.a().EmailAddress, t)
    }
};
_h.dk = function(n, t, i, r) {
    _h.dk.initializeBase(this);
    this.i = n;
    this.m = t;
    this.j = i;
    this.j && (this.l = !0);
    this.k = r;
    this.f = !0;
    this.g = 50
};
_h.dk.prototype = {
    i: null,
    j: !1,
    m: null,
    k: !1,
    f: !1,
    l: !1,
    g: 0,
    h: null,
    e: 0,
    p: function() {
        return this.e === 4 || this.e === 3
    },
    s: function(n) {
        if (this.e === 1) {
            this.e = 3;
            return n
        }
        if (this.e === 2) {
            this.e = 4;
            return n
        }
        return n
    },
    a: function() {
        return this.e === 7
    },
    d: function() {
        return this.e === 5
    },
    c: function() {
        return this.e === 5
    },
    t: function() {
        if (this.e === 2) {
            this.e = 5;
            return
        }
    },
    q: function() {
        this.e = this.g !== 250 ? 1 : 6
    },
    n: function() {
        if (this.e === 6) {
            this.e = 7;
            return
        }
        if (this.e === 1) {
            this.e = 2;
            return
        }
        if (this.e === 3) {
            this.e = 4;
            return
        }!this.f && this.e === 7
    },
    b: function() {
        return this.j ? this.e === 1 || this.e === 6 : this.e === 1 || this.e === 2 || this.e === 6
    },
    u: function(n) {
        var t = this;
        _j.m.a().a(_a.a.D, "StartSearchCompleteNotificationTimer", function() {
            if (!t.p()) {
                t.t();
                n()
            }
        }, 2e4)
    },
    o: function() {
        this.g = 250;
        this.l = !0
    },
    r: function() {
        return this.j ? this.e === 2 : this.e === 4
    }
};
_h.cm = function() {
    _h.cm.initializeBase(this, [_h.cm.a])
};
_h.cm.a = function(n, t) {
    _a.c.b(n, "object1");
    _a.c.b(t, "object2");
    var r = n;
    var i = t;
    return r.b().a(i.b())
};
_h.cm.prototype = {
    C: function(n) {
        this.g();
        for (var t = 0; t < n.length; t++) {
            var i = new _h.w;
            i.fa(n[t]);
            this.a(i)
        }
    }
};
_h.w = function() {
    _h.w.initializeBase(this)
};
_h.w.prototype = {
    j: function() {
        return this.eM(_h.w.j)
    },
    t: function(n) {
        this.eK(_h.w.j, n);
        return n
    },
    g: function() {
        return this.eM(_h.w.c)
    },
    n: function(n) {
        this.eK(_h.w.c, n);
        return n
    },
    h: function() {
        return this.eM(_h.w.d)
    },
    o: function(n) {
        this.eK(_h.w.d, n);
        return n
    },
    b: function() {
        return this.eM(_h.w.h)
    },
    k: function(n) {
        this.eK(_h.w.h, n);
        return n
    },
    a: function() {
        return this.eM(_h.w.i)
    },
    s: function(n) {
        this.eK(_h.w.i, n);
        return n
    },
    f: function() {
        return this.eM(_h.w.a)
    },
    l: function(n) {
        this.eK(_h.w.a, n);
        return n
    },
    c: function() {
        return this.eM(_h.w.b)
    },
    m: function(n) {
        this.eK(_h.w.b, n);
        return n
    },
    d: function() {
        return this.eM(_h.w.e)
    },
    p: function(n) {
        this.eK(_h.w.e, n);
        return n
    },
    e: function() {
        return this.eM(_h.w.f)
    },
    q: function(n) {
        this.eK(_h.w.f, n);
        return n
    },
    i: function() {
        return this.eM(_h.w.g)
    },
    r: function(n) {
        this.eK(_h.w.g, n);
        return n
    },
    C: function(n) {
        return !n || !_h.w.isInstanceOfType(n) ? !1 : this === n || _ff.e.b(this.c(), n.c())
    }
};
_h.eS = function(n, t) {
    this.l = Function.createDelegate(this, this.p);
    this.n = -1;
    _a.c.b(n, "actionSubmitter");
    _a.c.b(t, "action");
    this.m = n;
    this.j = t;
    this.k = String.format("{0}_{1}", t.w(), t.x())
};
_h.eS.prototype = {
    m: null,
    j: null,
    k: null,
    o: !1,
    d: function() {
        return this.k
    },
    g: function() {
        return this.n
    },
    a: function(n) {
        this.n = n;
        return n
    },
    i: function() {
        return this.o
    },
    f: function() {
        return !1
    },
    e: function() {
        return !1
    },
    c: function() {
        return 1
    },
    h: function() {
        return _a.ew.toString(this.j.z())
    },
    b: function(n) {
        n && this.j.a(this.l);
        this.m.c(this.j);
        this.o = !0
    },
    p: function(n) {
        _h.r.a().d(this.k, !0);
        this.j.n(this.l)
    }
};
_h.dq = function(n) {
    _a.c.b(n, "actionSubmitter");
    this.b = n
};
_h.dq.prototype = {
    b: null,
    a: function(n) {
        _h.r.a().i(new _h.eS(this, n))
    },
    c: function(n) {
        this.b.a(n)
    }
};
_h.dj = function(n, t) {
    this.a = n;
    this.c(t)
};
_h.dj.prototype = {
    a: null,
    b: null,
    c: function(n) {
        this.d(n);
        this.b = n;
        return n
    },
    d: function(n) {
        this.a.c.isInstanceOfType(n) || Type.isEnum(this.a.c) && Number.isInstanceOfType(n) || Error.argumentType("value", Object.getType(n), this.a.c, "Property value is not the right type")
    }
};
_h.ex = function() {
    _h.ex.initializeBase(this, [1, "Core.Models.Sync.MailSyncReachedLimit"])
};
_h.eT = function() {
    _h.eT.initializeBase(this, [1, "Core.Models.General.UserRefresh"])
};
_h.cS = function(n) {
    this.a = n
};
_h.cS.prototype = {
    a: 0
};
_h.cp = function(n, t) {
    this.a = n;
    this.b = t
};
_h.cp.prototype = {
    a: null,
    b: null
};
_h.bn = function(n, t) {
    _a.c.e(n, 6, 14, "syncModuleType");
    this.a = n;
    this.b = t
};
_h.bn.prototype = {
    a: 0,
    b: !1
};
_h.cV = function() {};
_h.ct = function(n) {
    this.a = n
};
_h.ct.prototype = {
    a: !1
};
_h.bz = function() {};
_h.bQ = function(n) {
    this.a = n
};
_h.bQ.prototype = {
    a: null
};
_h.dh = function(n, t) {
    this.b = n;
    this.a = t
};
_h.dh.prototype = {
    b: null,
    a: null
};
_h.bT = function() {};
_h.bV = function(n) {
    this.a = n
};
_h.bV.prototype = {
    a: 0
};
_h.bB = function(n) {
    this.a = n
};
_h.bB.prototype = {
    a: null
};
_h.bw = function() {};
_h.bk = function(n) {
    this.a = n
};
_h.bk.prototype = {
    a: null
};
_h.J = function() {};
_h.J.h = function(n, t) {
    var i = new _g.be;
    i.c(new _g.bW);
    i.a().e(_h.J.a);
    i.a().g("String");
    i.a().f("cecp-" + n);
    i.b(t);
    return i
};
_h.J.g = function() {
    var n = new _g.be;
    n.c(new _g.bW);
    n.a().e(_h.J.a);
    n.a().g("String");
    n.a().f("cecp-propertyNames");
    return n
};
_h.J.d = function(n, t) {
    var u = t.split(";");
    if (u.length) {
        var i = _h.J.j(n);
        if (!i) {
            i = _h.J.g();
            n.a(i)
        }
        for (var r = 0; r < u.length; r++) {
            var f = u[r];
            _j.h.a(f) || _h.J.f(i, f)
        }
    }
};
_h.J.b = function(n) {
    return !!n && !!n.a() && n.a().a() === _h.J.a && !!n.a().bH.PropertyName && n.a().bH.PropertyName.startsWith("cecp-")
};
_h.J.c = function(n, t) {
    t.val = null;
    if (_h.J.b(n)) {
        t.val = _h.J.i(n);
        return !0
    }
    return !1
};
_h.J.k = function(n) {
    return _h.J.b(n) && n.a().bH.PropertyName === "cecp-propertyNames"
};
_h.J.e = function(n, t) {
    var i = "cecp-" + t;
    return _h.J.b(n) && n.a().bH.PropertyName === i
};
_h.J.i = function(n) {
    var t = new _g.T;
    t.ExtendedFieldURI = new _g.O;
    t.ExtendedFieldURI.DistinguishedPropertySetId = n.a().a();
    t.ExtendedFieldURI.PropertyType = n.a().b();
    t.ExtendedFieldURI.PropertyName = n.a().bH.PropertyName;
    t.Value = n.bH.Value;
    return t
};
_h.J.f = function(n, t) {
    t.endsWith(";") || (t += ";");
    if (_j.h.a(n.bH.Value)) n.b(t);
    else {
        if (-1 !== n.bH.Value.indexOf(t)) return;
        n.bH.Value.length + t.length < 16e3 && n.b(n.bH.Value + t);
        return
    }
};
_h.J.j = function(n) {
    for (var t = 0; t < n.b(); t++) {
        var i = n.c(t);
        if (_h.J.k(i)) return i
    }
    return null
};
_h.l = function() {};
_h.l.i = function() {
    _h.l.e || (_h.l.e = new _h.cu(_g.j.a("msgfolderroot")));
    return _h.l.e
};
_h.l.h = function() {
    _h.l.d || (_h.l.d = new _h.cu(_g.j.a("archivemsgfolderroot")));
    return _h.l.d
};
_h.l.j = function(n) {
    var t = _h.l.g(n, _h.l.i());
    !t && _g.a.a().c().c && (t = _h.l.g(n, _h.l.h()));
    return t
};
_h.l.b = function(n) {
    var t = _h.l.f(_h.l.i());
    return !!t && !!t.f(n)
};
_h.l.a = function(n) {
    var t = !1;
    if (_g.a.a().c() && _g.a.a().c().c && n)
        if (_g.b.a.doesIdEqualName(n, "archivemsgfolderroot")) t = !0;
        else {
            var i = _h.l.f(_h.l.h());
            if (i) {
                var r = i.f(n);
                t = !!r
            }
        }
    return t
};
_h.l.c = function(n) {
    if (!n) return !0;
    var t = _g.b.a.idToName(n);
    if (t === "inbox") return !1;
    else if (!_h.l.b(n)) return !0;
    switch (t) {
        case "drafts":
        case "deleteditems":
        case "sentitems":
        case "junkemail":
        case "clutter":
            return !0;
        default:
            return !1
    }
};
_h.l.m = function(n) {
    return _h.l.b(n) && !_g.b.a.doesIdEqualName(n, "inbox") || _g.j.b(n)
};
_h.l.g = function(n, t) {
    for (var u = null, f = _h.l.f(t), e = f.bx.x.length, i = 0; i < e; i++) {
        var r = f.bx.x[i];
        if (n.Id === r.bH.FolderId.Id) {
            u = r;
            break
        }
    }
    return u
};
_h.l.f = function(n) {
    return _h.c.b(n, _h.h.a(), function(n) {
        return new _h.a(n)
    })
};
_h.l.k = function(n) {
    if (n.__type !== _g.s._dataContractName) return !1;
    switch (n.Id) {
        case "archivedeleteditems":
        case "archiveinbox":
        case "archivemsgfolderroot":
        case "archiverecoverableitemsdeletions":
        case "archiverecoverableitemspurges":
        case "archiverecoverableitemsroot":
        case "archiverecoverableitemsversions":
        case "archiverecoverableitemsdiscoveryholds":
        case "archiveroot":
            return !0;
        default:
            return !1
    }
};
_h.l.l = function(n, t) {
    return n.__type === _g.s._dataContractName && n.Mailbox && t && n.Mailbox.EmailAddress !== t.bH.UserEmailAddress ? !0 : !1
};
_h.bu = function() {
    _h.bu.initializeBase(this)
};
_h.bu.a = function(n, t) {
    var i = null;
    n && (i = n.g);
    (t.__type === _g.bD._dataContractName || t.__type === _g.dM._dataContractName) && (n = _a.n.e(_g.j, n, t));
    n.I(i);
    return n
};
_h.bu.prototype = {
    i: function(n, t) {
        if (n)
            for (var r, i = 0; i < n.length; i++)
                if (n[i]) {
                    var u = i < this.x.length;
                    r = u ? this.x[i] : null;
                    r = _h.bu.a(r, n[i]);
                    r && !u && this.a(r)
                }
    }
};
_h.i = function(n, t) {
    this.E = Function.createDelegate(this, this.W);
    this.C = -1;
    this.D = -1;
    _h.i.initializeBase(this);
    this.k = {};
    this.x("<div></div>");
    this.d(0);
    this.g = _a.d.a();
    this.o(-1);
    this.R(!1);
    var f = this;
    var r = function(n, t) {
        f.eJ(_h.i.u)
    };
    this.apcl(_h.i.n, r);
    this.apcl(_h.i.o, r);
    if (n) this.apcl("IsRemoteProxyReadyForServerMessages", this.E);
    else {
        var i = this;
        this.apcl(_h.i.m, function(n, t) {
            i.n(_a.d.a());
            i.x(i.l() + i.eM(_h.i.v))
        });
        var u = this;
        this.apcl(_h.i.l, function(n, t) {
            u.ba(u.eM(_h.i.f))
        })
    }
    t && this.fa(t)
};
_h.i.$$cctor = function() {
    _h.i.a.b(new _a.bC(_h.j));
    _a.n.d(_h.i, _g.ej, function(n) {
        return new _h.i(!1, n)
    })
};
_h.i.prototype = {
    k: null,
    g: null,
    h: null,
    i: null,
    j: null,
    B: null,
    r: null,
    w: null,
    z: null,
    v: !1,
    f: "",
    u: !1,
    c: function() {
        return this.eM(_h.i.k)
    },
    N: function(n) {
        this.eK(_h.i.k, n);
        return n
    },
    p: function() {
        return this.I()
    },
    I: function() {
        return this.c().Id
    },
    O: function(n) {
        this.h = n;
        this.eJ(_h.i.n);
        if (!this.h) return n;
        this.y(this.h.bH.ConversationTopic);
        this.Q(this.h.bH.Preview);
        return n
    },
    P: function(n) {
        this.i = n;
        this.eJ(_h.i.o);
        if (!this.i) return n;
        this.y(this.i.bH.Subject);
        this.Q(this.i.bH.Preview);
        return n
    },
    A: function(n) {
        var t = new _a.dl(this, _h.i.m, null, n);
        this.dB(1, t)
    },
    bg: function(n) {
        var t = new _a.dl(this, _h.i.l, null, n);
        this.dB(1, t)
    },
    S: function() {
        return this.eM(_h.i.f)
    },
    ba: function(n) {
        this.eK(_h.i.f, n);
        return n
    },
    H: function() {
        return this.eM(_h.i.d)
    },
    d: function(n) {
        var t = this;
        _h.c.a(this, _h.i.d.a, this.H(), n, function(i, r) {
            t.eK(_h.i.d, n)
        });
        return n
    },
    a: function() {
        var n = this.eM(_h.i.a);
        if (!n) {
            n = new _j.l;
            _h.c.I(this, n, _h.i.a.a);
            _h.c.t(this, [new _h.dj(_h.i.a, n)])
        }
        return n
    },
    m: function() {
        var n = this.eM(_h.i.c);
        return n || ""
    },
    y: function(n) {
        if (n) {
            var t = this;
            _h.c.a(this, _h.i.c.a, this.m(), n, function(n, i) {
                t.eK(_h.i.c, i)
            })
        }
        return n
    },
    T: function() {
        var n = this.eM(_h.i.h);
        return n ? n : ""
    },
    Q: function(n) {
        if (n) {
            var t = this;
            _h.c.a(this, _h.i.h.a, this.T(), n, function(n, i) {
                t.eK(_h.i.h, i)
            })
        }
        return n
    },
    l: function() {
        return this.eM(_h.i.j)
    },
    x: function(n) {
        this.eK(_h.i.j, n);
        return n
    },
    t: function() {
        return this.eM(_h.i.b)
    },
    e: function(n) {
        if (this.s()) return n;
        _j.h.b(n) && (n = _h.i.b.d);
        var t = this;
        _h.c.a(this, _h.i.b.a, this.t(), n, function(n, i) {
            t.eK(_h.i.b, i)
        });
        return n
    },
    n: function(n) {
        this.g = n;
        this.eJ("LastUpdateTime");
        return n
    },
    b: function() {
        return this.eM(_h.i.g)
    },
    o: function(n) {
        var t = this;
        _h.c.a(this, _h.i.g.a, this.b(), n, function(n, i) {
            t.eK(_h.i.g, i)
        });
        return n
    },
    s: function() {
        return this.eM(_h.i.e)
    },
    R: function(n) {
        var t = this;
        _h.c.a(this, _h.i.e.a, this.s(), n, function(n, i) {
            t.eK(_h.i.e, i)
        });
        return n
    },
    Z: function(n) {
        this.v = n;
        this.eJ("IsRemoteProxyReadyForServerMessages");
        return n
    },
    bf: function(n) {
        n = _ff.g.a(n);
        this.e(_j.h.c(_bms.E.BG, n))
    },
    ec: function(n, t) {
        var i = new _a.f(n, Object, _h.i);
        t !== this.eM(i) && this.eK(i, t)
    },
    toString: function() {
        var n = this.b().toString();
        if (this.a().x.length > 0) {
            n = n + " (";
            var t = this;
            this.a().o(function(t) {
                var i = t;
                n = n + ", " + i.c()
            });
            n = n + ")"
        }
        return n
    },
    V: function() {
        var t = [];
        var n = this;
        this.a().o(function(i) {
            var u = i;
            var r = n.U(u);
            if (!r) {
                var f = String.format(_bms.E.X, u.c());
                n.q(f);
                return
            }
            Array.add(t, r)
        });
        return t
    },
    bb: function(n, t) {
        this.k[n.i()] = t
    },
    L: function(n, t) {
        var u = _a.d.a();
        var i = u.b(18);
        var f = String.format(_bms.E.L, n, i, t);
        n = _ff.g.a(n);
        t = _ff.g.a(t);
        var r = String.format(_h.i.r, n, i, t);
        this.n(_a.d.a());
        this.u = !0;
        if (this.v) {
            this.A(r);
            this.bg(f)
        } else this.f += r
    },
    bc: function(n) {
        var t = _a.d.a();
        var r = t.b(18);
        n = _ff.g.a(n);
        var i = this.l() + String.format(_h.i.t, _bms.E.c, r, n);
        this.x(i);
        this.n(t)
    },
    X: function(n, t, i) {
        var r = this.K(n);
        var f = this;
        var u = this.a().k(function(n) {
            var t = n;
            return t.i() === r
        });
        if (u === this.a().x.length) {
            t || (t = _h.j.i(i, r));
            this.a().a(t);
            this.M(i, "joined", _bms.E.m)
        }
    },
    Y: function(n, t) {
        if (this.a().x.length !== 1) {
            var r = this.K(n);
            var u = this;
            var i = this.a().k(function(n) {
                var t = n;
                return t.i() === r
            });
            if (i !== this.a().x.length) {
                this.a().n(i);
                this.M(t, "left", _bms.E.f)
            }
        }
    },
    bd: function(n) {
        if (!n) {
            this.e(_bms.E.B);
            return
        }
        this.t() === _bms.E.B && this.e(null)
    },
    be: function() {
        this.e(_bms.E.q);
        this.R(!0)
    },
    q: function(n) {
        this.G(_h.i.q, n)
    },
    U: function(n) {
        var t = this.k[n.i()];
        t || (t = n.i());
        return t
    },
    M: function(n, t, i) {
        n = _ff.g.a(n);
        var r = String.format(i, n);
        this.G(_h.i.s, r)
    },
    G: function(n, t) {
        var i = String.format(n, t);
        this.A(i);
        this.n(_a.d.a())
    },
    W: function(n, t) {
        for (var r = new Array(_h.i.i.length), i = 0; i < r.length; i++) r[i] = new _h.dj(_h.i.i[i], this.eM(_h.i.i[i]));
        _h.c.t(this, r);
        _j.h.a(this.f) || this.A(this.f);
        this.f = ""
    },
    K: function(n) {
        _a.c.c(n, "imAddress");
        var t = n.toLowerCase();
        t.startsWith(_h.i.p) || (t = _h.i.p + t);
        return t
    }
};
_h.Z = function() {
    this.a = {};
    this.b = new Date
};
_h.Z.a = function() {
    _h.Z.b || (_h.Z.b = new _h.Z);
    return _h.Z.b
};
_h.Z.e = function(n, t) {
    var r = n;
    var i = t;
    return r.a.getTime() - i.a.getTime()
};
_h.Z.c = function(n) {
    var r = 0;
    if (n) {
        var i = n;
        for (var t in i) {
            var f = {
                key: t,
                value: i[t]
            };
            var u = f.value;
            r += _ff.i.a(u)
        }
    }
    return r
};
_h.Z.prototype = {
    b: null,
    c: function(n, t) {
        this.g();
        var i = null;
        if (t in this.a) i = this.a[t];
        else {
            i = {};
            this.a[t] = i
        }
        i[n.recipientAddress] = new _h.Z.d(n, t)
    },
    e: function(n, t) {
        if (!(t in this.a)) return !1;
        var i = this.a[t];
        return n in i && !i[n].d()
    },
    f: function(n, t) {
        if (this.e(n, t)) {
            var i = this.a[t];
            return i[n].b
        }
        return null
    },
    d: function() {
        var f = new Date;
        var s = f.getTime() - this.b.getTime();
        if (!(s < 12e5)) {
            var e = this.a;
            for (var o in e) {
                var u = {
                    key: o,
                    value: e[o]
                };
                var n = u.value;
                var i = n;
                for (var r in i) {
                    var t = {
                        key: r,
                        value: i[r]
                    };
                    t.value.d() && delete n[t.key]
                }
                _ff.i.a(n) || delete this.a[u.key]
            }
            this.b = f
        }
    },
    g: function() {
        _h.Z.c(this.a) > 300 && this.d();
        if (_h.Z.c(this.a) > 300) {
            var t = [];
            var o = this.a;
            for (var e in o) {
                var l = {
                    key: e,
                    value: o[e]
                };
                var h = l.value;
                for (var s in h) {
                    var c = {
                        key: s,
                        value: h[s]
                    };
                    Array.add(t, c.value)
                }
            }
            t.sort(_h.Z.e);
            for (var n = 0; n < 50; n++) {
                var r = t[n];
                var a = this.a[r.c];
                delete a[r.b.recipientAddress]
            }
            var f = this.a;
            for (var u in f) {
                var i = {
                    key: u,
                    value: f[u]
                };
                _ff.i.a(i.value) || delete this.a[i.key]
            }
        }
    }
};
_h.Z.d = function(n, t) {
    this.a = new Date;
    this.b = n;
    this.c = t
};
_h.Z.d.prototype = {
    a: null,
    b: null,
    c: null,
    d: function() {
        var t = new Date;
        var n = t.getTime() - this.a.getTime();
        return n >= 72e5
    }
};
_h.bi = function(n) {
    this.a = n
};
_h.bi.a = function(n, t, i) {
    return new _h.bi(_h.bi.e(n, t, i))
};
_h.bi.b = function(n, t) {
    return new _h.bi(_h.bi.d(n, t))
};
_h.bi.e = function(n, t, i) {
    var r = new _j.q;
    var u = _h.V.c(n.bH.ItemClass, n.fN());
    u !== -1 && r.c(u);
    i && n.jd() && r.c(0);
    (n.bg() === "Low" || n.bg() === "High") && r.c(1);
    n.bH.HasAttachments && r.c(2);
    n.hs() && r.c(34);
    _g.i.isInstanceOfType(n) && n.cu() > 0 && r.c(33);
    t && r.c(35);
    _g.i.isInstanceOfType(n) && n.cH() !== "None" ? r.c(36) : u === 13 && r.c(37);
    return r
};
_h.bi.d = function(n, t) {
    var i = new _j.q;
    var r = _h.bi.c(n);
    r !== -1 && i.c(r);
    !_j.z.a(n.bA()) && n.bA() && i.c(32);
    t && n.bT() && i.c(0);
    (n.bg() === "Low" || n.bg() === "High") && i.c(1);
    n.bH.HasAttachments && i.c(2);
    n.bb() && i.c(34);
    n.bc() > 0 && i.c(33);
    n.bH.Charm !== "None" ? i.c(36) : r === 13 && i.c(37);
    return i
};
_h.bi.c = function(n) {
    var i = n.f();
    var t = n.bV();
    var f = n.bH.HasIrm;
    t === "MailReplied" && f ? t = "MailIrmReplied" : t === "MailForwarded" && f ? t = "MailIrmForwarded" : f && (t = "MailIrm");
    var u = !0;
    if (i) {
        if (i.b() === 1) return _h.V.c(i.a(0), t);
        else
            for (var r = 0; r < i.b(); r++)
                if (!_h.bi.f(i.a(r))) {
                    u = !1;
                    break
                }
    } else u = !1;
    if (u) return 13;
    else switch (t) {
        case "MailReplied":
            return 3;
        case "MailIrmReplied":
            return 6;
        case "MailForwarded":
            return 4;
        case "MailIrmForwarded":
            return 7;
        case "MailIrm":
            return 5
    }
    return -1
};
_h.bi.f = function(n) {
    return n.toLowerCase().indexOf("ipm.schedule.meeting") !== -1
};
_h.bi.prototype = {
    a: null,
    c: function(n) {
        for (var i = Math.min(this.a.d.length, n), r = new Array(i), t = 0; t < i; t++) r[t] = this.a.d[t];
        return r
    },
    b: function() {
        return this.a.d.length > 0 && this.a.d[0] && this.a.d[0] !== 1 && this.a.d[0] !== 2 ? this.a.d[0] : -1
    },
    d: function() {
        for (var n = 0; n < this.a.d.length; n++)
            if (this.a.d[n] === 5 || this.a.d[n] === 7 || this.a.d[n] === 6 || this.a.d[n] === 11) return this.a.d[n];
        return -1
    }
};
_h.V = function() {};
_h.V.c = function(n, t) {
    _j.u.a(t) && (t = "Default");
    if (_j.h.a(n)) return -1;
    n = n.toLowerCase();
    var i = _h.V.d(n, t);
    i === -1 && (i = _h.V.d(n, "Default"));
    i === -1 && (i = _h.V.e(n, t));
    i === -1 && (i = _h.V.e(n, "Default"));
    return i
};
_h.V.d = function(n, t) {
    return _h.V.b(_h.V.f, n, t)
};
_h.V.e = function(n, t) {
    var i = _h.V.b(_h.V.a, n, t);
    if (i === -1) {
        var f = _h.V.a;
        for (var e in f) {
            var o = {
                key: e,
                value: f[e]
            };
            var r = o.key;
            if (n.startsWith(r)) {
                var u = _h.V.a[r];
                t in u && (i = u[t]);
                break
            }
        }
    }
    return i
};
_h.V.b = function(n, t, i) {
    var r = null;
    if (t in n) {
        r = n[t];
        if (i in r) return r[i]
    }
    return -1
};
_h.es = function(n, t, i) {
    _a.c.a(n, "host cannot be null");
    _a.c.a(t, "userIdentifier cannot be null");
    this.d = n;
    this.e = t;
    this.f = i
};
_h.es.prototype = {
    d: null,
    e: null,
    f: !1,
    a: function() {
        return this.d
    },
    b: function(n) {
        return this.f ? new _h.et(n, this.d, this.e) : new _h.eq(n, this.d, this.e)
    },
    c: function(n) {
        return this.f ? new _h.eu(n, this.d, this.e) : new _h.er(n, this.d, this.e)
    },
    toString: function() {
        return this.d
    }
};
_h.K = function(n, t, i, r) {
    if (!n) throw Error.argumentNull("parameters");
    if (_j.u.a(n.NotificationType)) throw Error.argumentNull("NotificationType should be set on the parameters list");
    this.l = n;
    this.B = t || _a.g.a;
    this.y = i || _h.bK.b(this.B);
    this.u = r || _h.cl.a;
    this.m = this.C()
};
_h.K.prototype = {
    y: null,
    m: null,
    u: null,
    o: !1,
    l: null,
    x: "",
    B: null,
    q: null,
    t: null,
    j: function() {
        return this.o
    },
    i: function() {
        return this.x
    },
    J: function(n) {
        this.q || (this.q = new Sys.EventHandlerList);
        this.q.addHandler("Subscribed", n)
    },
    O: function(n) {
        this.q.removeHandler("Subscribed", n)
    },
    a: function() {
        return this.m
    },
    d: function() {
        return this.l.NotificationType
    },
    b: function() {
        return this.l.FolderId
    },
    c: function() {
        return this.u
    },
    e: function() {
        if (!this.t) {
            this.t = new _g.gC;
            this.t.SubscriptionId = this.m;
            this.t.Parameters = this.l
        }
        return this.t
    },
    k: function() {
        return !this.l || this.l.NotificationType !== "SearchNotification" && this.l.NotificationType !== "InstantSearchNotification" && this.l.NotificationType !== "UploadFileToCloudNotificationPayload"
    },
    n: function(n, t, i, r) {
        if (!i) throw Error.argumentNull("callback");
        _a.g.e().q(this.m) ? this.o = !0 : this.P();
        _a.g.e().a(this.m, n, t, i, r);
        return this.m
    },
    v: function(n) {
        _a.g.e().q(this.m) && (n ? _a.g.e().b(this.m, n) : _a.g.e().t(this.m));
        if (!_a.g.e().p(this.m) && this.k()) {
            _a.g.b || this.y.a(this);
            this.o = !1
        }
    },
    p: function() {
        this.v(null)
    },
    f: function() {
        this.K()
    },
    K: function() {
        this.k() ? _a.g.b ? this.h(null, !1) : this.y.b(this) : this.o = !0
    },
    g: function(n, t) {
        this.L(n, t, !0)
    },
    h: function(n, t) {
        this.o = !0;
        this.x = "";
        _a.g.e().s(this.m);
        if (this.q) {
            var i = this.q.getHandler("Subscribed");
            i && i(this, new Sys.EventArgs)
        }
    },
    P: function() {
        this.K();
        _a.g.e().r(this)
    },
    L: function(n, t, i) {
        this.o = !1;
        this.x = t;
        i && _a.g.e().n(this.m)
    },
    C: function() {
        var n = "";
        n += this.l.NotificationType;
        this.l.FolderId && (n += this.l.FolderId);
        if (!_j.z.a(this.l.IsConversation)) {
            n += "_" + this.l.IsConversation;
            this.l.IsConversation && this.l.ConversationShapeName && (n += "_" + this.l.ConversationShapeName)
        }
        this.l.MailboxId && (n += "_" + this.l.MailboxId);
        this.l.CallId && (n += "_" + this.l.CallId);
        if (this.l.SortBy && this.l.SortBy.length > 0)
            for (var t = 0; t < this.l.SortBy.length; t++) n += "_" + this.l.SortBy[t].Path.FieldURI + "_" + this.l.SortBy[t].Order;
        _j.u.a(this.l.Filter) || (n += "_" + this.l.Filter);
        this.l.FromFilter && (n += "_" + this.l.FromFilter);
        _j.u.a(this.l.FocusedViewFilter) || this.l.FocusedViewFilter === -1 || (n += "_" + this.l.FocusedViewFilter);
        _j.u.a(this.l.CategoryFilter) || (n += "_" + _j.h.e(this.l.CategoryFilter));
        _h.cl.isInstanceOfType(this.u) || this.l.NotificationType === "SearchNotification" || (n += "_" + this.u.a());
        _j.h.a(this.l.subscriptionIdSuffix) || (n += "_" + this.l.subscriptionIdSuffix);
        return n
    }
};
_h.bK = function(n) {
    this.l = Function.createDelegate(this, this.x);
    this.k = Function.createDelegate(this, this.w);
    this.j = Function.createDelegate(this, this.u);
    this.f = new _j.q;
    this.d = _a.G.a();
    this.c = _a.G.a();
    _a.c.a(n, "actionSubmitter");
    this.h = n
};
_h.bK.b = function(n) {
    _h.bK.a || (_h.bK.a = new _h.bK(n));
    return _h.bK.a
};
_h.bK.prototype = {
    p: 100,
    h: null,
    i: null,
    g: !1,
    e: null,
    b: function(n) {
        this.f.g(n.c()) || this.f.c(n.c());
        this.d.a(n.a(), n);
        this.n()
    },
    a: function(n) {
        if (this.d.b[n.a()]) this.d.e(n.a());
        else {
            var t = n.e();
            var i = this.s(t, n.c());
            this.o(i, t)
        }
    },
    t: function() {
        _j.m.a().a(_a.a.F, "NotificationSubscriptionSubmissionProxy.Submit", this.j, this.p)
    },
    u: function() {
        if (this.d.f() <= 0) {
            this.g = !1;
            return
        }
        var n = this.v();
        var t = this.r(n, this.e);
        t.b(this.k);
        t.c(this.l);
        this.o(t, n && n.length > 0 ? n[0] : null)
    },
    r: function(n, t) {
        return t.b(n)
    },
    s: function(n, t) {
        return t.c(n)
    },
    n: function() {
        if (!this.g) {
            this.g = !0;
            this.t()
        }
    },
    w: function(n) {
        var t = this;
        this.c.d(function(t, i) {
            i.g(n, "unknown")
        });
        this.m()
    },
    x: function(n) {
        var i = n.h;
        if (this.c.f() !== i.length) {
            for (var e = _a.G.a(), o = "", s = i, a = s.length, r = 0; r < a; ++r) {
                var c = s[r];
                e.a(c.SubscriptionId, !0)
            }
            var v = this;
            this.c.d(function(n, t) {
                e.c(n) || (o += n + "|")
            });
            var l = String.format("Missing response for subscriptions, Expected: {0}, Actual: {1}, Missing {2}", this.c.f(), i.length, o);
            _a.c.d(this.c.f() === i.length, l)
        }
        for (var f = i, h = f.length, u = 0; u < h; ++u) {
            var t = f[u];
            t.SuccessfullyCreated ? this.c.b[t.SubscriptionId].h(n, t.SubscriptionExists) : this.c.b[t.SubscriptionId].g(n, t.ErrorInfo)
        }
        this.m()
    },
    m: function() {
        this.g = !1;
        this.c = _a.G.a();
        this.e = null;
        this.n()
    },
    v: function() {
        for (var n = new Array(0); n.length <= 0;) {
            this.e = this.q();
            if (!this.e) return null;
            var t = this;
            this.d.d(function(i, r) {
                if (t.e === r.c()) {
                    _a.c.d(!!r.e(), String.format("Subscription data for subscription with id {0} is null", r.a()));
                    Array.add(n, r.e());
                    t.c.a(r.a(), r)
                }
            })
        }
        var i = this;
        this.c.d(function(n, t) {
            i.d.e(t.a())
        });
        return n
    },
    q: function() {
        if (this.f.a() <= 0) return null;
        var n = this.f.e()[0];
        this.f.j(0);
        return n
    },
    o: function(n, t) {
        t && t.Parameters && t.Parameters.NotificationType === "UnseenItemNotification" ? this.i.a(n) : this.h.a(n)
    }
};
_h.cl = function() {};
_h.cl.prototype = {
    a: function() {
        return "PrimaryMailbox"
    },
    b: function(n) {
        return new _h.ez(n)
    },
    c: function(n) {
        return new _h.eA(n)
    },
    toString: function() {
        return "PrimaryMailbox"
    }
};
_h.bU = function(n, t, i, r, u, f) {
    this.M = Function.createDelegate(this, this.U);
    this.D = Function.createDelegate(this, this.Q);
    this.F = Function.createDelegate(this, this.V);
    this.E = Function.createDelegate(this, this.S);
    _h.bU.initializeBase(this, [n, t, i, new _h.es(r, u, n.NotificationType === "UnseenItemNotification")]);
    this.H = f
};
_h.bU.prototype = {
    H: !1,
    r: null,
    z: !1,
    s: !1,
    w: !1,
    A: 0,
    k: function() {
        return !0
    },
    n: function(n, t, i, r) {
        _a.g.c().b(_a.cm, this.E);
        _a.g.c().b(_a.cx, this.F);
        this.A++;
        var u = _h.K.prototype.n.call(this, n, t, i, r);
        if (!this.s) {
            _a.g.e().a(u, n, t, this.D, r);
            this.s = !0
        }
        return u
    },
    v: function(n) {
        if (this.s && this.R(this.l.NotificationType)) {
            this.G();
            _a.g.e().b(this.m, this.D);
            this.s = !1;
            this.z = !1
        }
        _a.g.c().c(_a.cm, this.E);
        _a.g.c().c(_a.cx, this.F);
        this.w = !1;
        _h.K.prototype.v.call(this, n);
        this.A--
    },
    g: function(n, t) {
        this.L(n, t, !this.H);
        this.I()
    },
    h: function(n, t) {
        this.z && !t && this.T(this.m);
        this.I();
        this.z = !0;
        _h.K.prototype.h.call(this, n, t)
    },
    I: function() {
        this.G();
        this.N()
    },
    T: function(n) {
        _a.g.e().o(this.m, this.l.FolderId, "SubscriptionNotExistsOnServer", !1)
    },
    C: function() {
        var n = _h.K.prototype.C.call(this);
        this.l.NotificationType === "RowNotification" && (n += "_" + this.u.e);
        return n
    },
    R: function(n) {
        return this.l.NotificationType === "SearchNotification" ? this.A === 1 : _a.g.e().p(this.m) === 2
    },
    Q: function(n) {
        this.I()
    },
    S: function(n) {
        if (this.r) {
            this.G();
            this.w = !0
        }
    },
    V: function(n) {
        this.w && !n.a && this.N()
    },
    G: function() {
        if (this.r) {
            _j.m.a().b(this.r);
            this.r = null
        }
    },
    N: function() {
        this.w = !1;
        this.r = _j.m.a().a(_a.a.F, "RemoteNotificationsSubscriptionsTimer", this.M, 3e5)
    },
    U: function() {
        this.r = null;
        this.f()
    }
};
_h.ef = function(n, t, i, r) {
    this.P = new Sys.EventHandlerList;
    _h.ef.initializeBase(this, [n.u(), t, r]);
    _a.c.d(!n.c(), "The app is PAL enabled");
    this.Q = i
};
_h.ef.prototype = {
    Q: !1,
    z: function(n) {
        this.P.addHandler("UserEnabledOffline", n)
    },
    c: function() {
        var n = this.K.b("userEnabledOffline") || "";
        return !this.g() && !_j.h.a(n)
    },
    g: function() {
        return this.K.b("userEnabledOffline") === "false".toLowerCase()
    },
    f: function() {
        return this.W() <= 1e4
    },
    h: function(n) {
        n ? this.K.a("OfflineSessionInUseKey", this.U().toString()) : this.K.c("OfflineSessionInUseKey");
        return n
    },
    W: function() {
        if (this.c()) {
            var n = this.K.b("OfflineSessionInUseKey");
            if (n) {
                var i = Number.parseInvariant(n);
                return this.U() - i
            }
        }
        return 2147483647
    },
    E: function() {
        var n = this.K.b("userEnabledOffline");
        _j.h.b(n) && (n = "");
        return n
    },
    D: function() {
        var n = this.K.b("userOfflineDisplayName");
        _j.h.b(n) && (n = this.E());
        return n
    },
    d: function() {
        return this.c() && this.K.b("showOfflineSignoutWarning") !== "false"
    },
    y: function(n) {
        this.K.a("showOfflineSignoutWarning", n.toString());
        return n
    },
    J: function(n, t) {
        this.K.a("userEnabledOffline", n);
        this.K.a("userOfflineDisplayName", t);
        this.T(!0)
    },
    s: function() {
        this.o();
        this.K.a("userEnabledOffline", "false".toLowerCase());
        this.T(!1)
    },
    i: function(n, t) {
        return this.f() && !t ? !1 : !this.L || _a.bs.a() ? !1 : this.c() ? n !== "NoComputers" : this.X(n)
    },
    A: function(n) {
        return n === "NoComputers" && this.c() && this.L
    },
    o: function() {
        this.K.c("userEnabledOffline");
        this.K.c("userOfflineDisplayName");
        this.K.c("showOfflineSignoutWarning");
        this.K.c("OfflineSessionInUseKey");
        this.K.c("LastSuccessfullEmailCleanup");
        this.K.c("PageDataPayload.AllowServerSideSessionData");
        _h.br.prototype.o.call(this)
    },
    X: function(n) {
        var t = !1;
        switch (n) {
            case "AllComputers":
                t = !0;
                break;
            case "PrivateComputersOnly":
                t = this.Q;
                break;
            default:
                break
        }
        return t
    },
    T: function(n) {
        var t = this.P.getHandler("UserEnabledOffline");
        t && t(n)
    }
};
_h.dO = function(n, t, i, r) {
    this.E = Function.createDelegate(this, this.bd);
    this.o = Function.createDelegate(this, this.be);
    _h.dO.initializeBase(this);
    _a.c.a(n, "eventAggregator");
    _a.c.a(t, "syncManager");
    _a.c.a(i, "connectionManager");
    _a.c.a(r, "moduleTypes");
    this.b = n;
    this.f = t;
    this.e = i;
    this.j = r;
    this.bf()
};
_h.dO.prototype = {
    b: null,
    f: null,
    e: null,
    j: null,
    p: !1,
    K: function(n) {
        if (this.p !== n) {
            this.p = n;
            this.b.a(_h.bB, new _h.bB(this))
        }
        return n
    },
    D: function() {
        this.bg()
    },
    bf: function() {
        for (var n = 0; n < this.j.length; n++) this.f.c(this.j[n], this.o);
        this.f.c(20, this.o);
        this.b.b(_a.cS, this.E)
    },
    bg: function() {
        for (var n = 0; n < this.j.length; n++) this.f.g(this.j[n], this.o);
        this.f.g(20, this.o);
        this.b.c(_a.cS, this.E)
    },
    be: function(n) {
        if (_j.h.a(n.f)) switch (n.a) {
            case 0:
                this.H(n);
                break;
            case 3:
            case 6:
            case 4:
                this.G(n);
                break;
            case 5:
                n.c !== 20 ? _j.e.c(_h.dO.a, "SyncCompleted event should not be raised for module: {0}", n.h) : this.J(n);
                break
        }
    },
    bd: function(n) {
        this.F()
    }
};
_h.s = function(n, t, i, r, u, f, e, o) {
    this.u = Function.createDelegate(this, this.E);
    this.o = Function.createDelegate(this, this.B);
    this.t = Function.createDelegate(this, this.C);
    _a.c.b(e, "nativeBridge");
    this.e = t;
    this.d = i;
    this.d.e(this.t);
    this.g = n;
    this.r = r;
    this.n = u;
    this.q = f;
    this.m = e;
    this.j = o;
    this.g.b(_h.bO, this.o)
};
_h.s.b = function(n) {
    if (_h.s.a !== n) {
        _h.s.a && _h.s.a.dispose();
        _h.s.a = n
    }
    return n
};
_h.s.prototype = {
    q: !1,
    m: null,
    h: null,
    e: null,
    l: !1,
    g: null,
    d: null,
    r: null,
    s: null,
    n: null,
    j: null,
    k: function(n) {
        if (this.i() || this.d.d()) n();
        else {
            this.h || (this.h = new Sys.EventHandlerList);
            this.h.addHandler("i", n)
        }
    },
    i: function() {
        !this.l && this.a() && this.d.a(null);
        return this.l || !this.a()
    },
    f: function() {
        return this.d.d() ? this.d.b().a() : !1
    },
    x: function() {
        return this.d.d() ? this.d.b().h() : null
    },
    v: function() {
        return this.d.d() ? this.d.b().f() : 0
    },
    b: function() {
        return this.d.d() ? this.d.b().e() : !1
    },
    w: function() {
        return this.d.d() ? this.d.b().g() : !1
    },
    a: function() {
        return this.e.a()
    },
    p: function() {
        return this.d.d() ? this.d.b().c() : null
    },
    A: function() {
        return this.d.d() ? this.d.b().d() : null
    },
    dispose: function() {
        if (this.d) {
            this.d.d() && this.d.b().dispose();
            this.d = null
        }
        this.g.c(_h.bO, this.o)
    },
    D: function(n, t, i, r, u, f, e) {
        var o = this;
        this.d.a(function(s) {
            s.k(n, t, i, r, u, o.n, o.j, f, e)
        })
    },
    z: function(n, t) {
        var i = this;
        this.d.a(function(i) {
            i.m(n, t)
        })
    },
    c: function(n, t, i, r, u, f, e, o, s, h) {
        var l = 1;
        var p = this.e.a();
        var y = this.e.f();
        if (this.q) {
            l = 2;
            var v = this;
            var b = function() {
                v.r.a(function(t) {
                    n(t.a(f, e, v.g, v.j))
                })
            };
            if (_g.k.b) b();
            else {
                var k = null;
                var d = this;
                var w = function() {
                    b();
                    d.g.c(_a.ep, k)
                };
                k = w;
                this.g.b(_a.ep, w)
            }
        } else if (i || !p || y) {
            l = 1;
            var nt = String.format("isForWebPart:{0},IsOfflineEnabled:{1},IsOfflineSessionInUse:{2}", i, p, y);
            var c = new _g.k(null, f, e, new _g.dX(this.j), this.g);
            c.b().jK = o;
            c.b().jH = s;
            c.n.e(h);
            n(c);
            if (this.e.g()) {
                var g = this;
                this.d.a(function(n) {
                    n.l(function() {}, function(n) {})
                })
            }
            y && r.a(_a.a.bx, "InitializeMailboxDataContext", this.u, 1e4)
        } else {
            l = 0;
            var a = this;
            this.k(function() {
                a.d.b().j(n, t, r, u, f, e, a.n, a.j)
            })
        }
        return l
    },
    y: function(n, t, i) {
        if (this.a()) {
            var r = this;
            this.k(function() {
                r.d.b().b().a(n, t, i)
            })
        }
    },
    C: function() {
        this.l = !0;
        if (this.h) {
            this.h.getHandler("i")();
            this.h = null
        }
    },
    E: function() {
        this.e.f() || (this.s ? this.s(window.location, this.m).a("OfflineSessionNoLongerInUse") : new _a.cQ(window.location, this.m).a("OfflineSessionNoLongerInUse"))
    },
    B: function(n) {
        this.e.x(_a.d.get_utcNow().h())
    }
};
_h.eC = function(n) {
    this.a = n
};
_h.eC.prototype = {
    a: null,
    b: function(n) {
        return n && this.a.idToName(n) !== "outbox" && _h.k.n(n) ? !0 : !1
    }
};
_h.br = function(n, t, i) {
    _a.c.b(t, "localStorageAdapter");
    var u = !!i && i.g() === "SharedHoverCard";
    var r = new _a.I(_a.w.b(window.location.href, u));
    this.S = r.a.offline === "disabled";
    this.L = n && !_a.bs.a();
    this.K = t
};
_h.br.a = function(n, t) {
    var i = _a.bn.a();
    return n.c() ? new _h.eF(n, i, t) : new _h.ef(n, i, _a.g.C, t)
};
_h.br.prototype = {
    L: !1,
    K: null,
    S: !1,
    M: null,
    z: function(n) {},
    a: function() {
        return this.L && this.c() && !this.S
    },
    v: function() {
        return this.K.b("showOfflineMoveMailItemsWarning") !== "false".toLowerCase()
    },
    l: function(n) {
        this.K.a("showOfflineMoveMailItemsWarning", n.toString().toLowerCase());
        return n
    },
    b: function() {
        if (this.K.b("UsePostALT1SyncOrderKey") === "true") return !0;
        else {
            this.H(!1);
            return !1
        }
    },
    r: function(n) {
        this.K.a("UsePostALT1SyncOrderKey", n.toString().toLowerCase());
        n || this.H(!1);
        return n
    },
    B: function() {
        return this.K.b("AppStatusShowConnecting") === "true".toLowerCase()
    },
    G: function(n) {
        this.K.a("AppStatusShowConnecting", n.toString().toLowerCase());
        return n
    },
    k: function() {
        return this.K.b("AppCacheCached") === "true".toLowerCase()
    },
    e: function(n) {
        this.K.a("AppCacheCached", n.toString().toLowerCase());
        n || this.H(!1);
        return n
    },
    C: function() {
        return this.K.b("HasShownAppALT1DoneText") === "true".toLowerCase()
    },
    H: function(n) {
        this.K.a("HasShownAppALT1DoneText", n.toString().toLowerCase());
        return n
    },
    u: function() {
        return this.N("AppOnResumeUtcMSKey")
    },
    x: function(n) {
        this.O("AppOnResumeUtcMSKey", n);
        return n
    },
    t: function() {
        return this.N("AppOnInactiveUtcMSKey")
    },
    w: function(n) {
        this.O("AppOnInactiveUtcMSKey", n);
        return n
    },
    n: function() {
        return this.N("PeriodicEmailCleanupTimer")
    },
    q: function(n) {
        this.O("PeriodicEmailCleanupTimer", n);
        return n
    },
    m: function() {
        return this.N("PeriodicCalendarReconcileTimer")
    },
    p: function(n) {
        this.O("PeriodicCalendarReconcileTimer", n);
        return n
    },
    R: function() {
        if (!this.M) {
            var n = this.K.b("SyncTimeDictionaryKey");
            this.M = n ? _a.G.b(JsonParser.deserialize(n)) : _a.G.a()
        }
        return this.M
    },
    F: function(n) {
        var t = parseInt(this.R().b[n]);
        return isFinite(t) && t > 0 ? t : 0
    },
    I: function(n, t) {
        this.R().a(n, t);
        this.K.a("SyncTimeDictionaryKey", this.R().h())
    },
    j: function() {
        this.M = null;
        this.V()
    },
    o: function() {
        this.K.c("showOfflineMoveMailItemsWarning");
        this.K.c("PeriodicCalendarReconcileTimer");
        this.K.c("PeriodicEmailCleanupTimer");
        this.K.c("MaxSyncModuleType");
        this.K.c("AppStatusShowConnecting");
        this.K.c("AppCacheCached");
        this.K.c("HasShownAppALT1DoneText");
        this.K.c("AppOnResumeUtcMSKey");
        this.K.c("AppOnInactiveUtcMSKey");
        this.K.c("SyncFolders.UserSelected");
        this.K.c("SyncFolders.Mail.AutoSelected");
        this.K.c("SyncFolders.Mail.UserSelected");
        this.V()
    },
    U: function() {
        return _a.d.get_utcNow().h()
    },
    V: function() {
        this.K.c("UsePostALT1SyncOrderKey");
        this.K.c("SyncTimeDictionaryKey")
    },
    O: function(n, t) {
        if (!isFinite(t) || t <= 0) throw Error.argument(n, "invalid value");
        this.K.a(n, t.toString())
    },
    N: function(n) {
        var i = this.K.b(n) || "";
        var t = parseInt(i);
        return isFinite(t) && t > 0 ? t : 0
    }
};
_h.eF = function(n, t, i) {
    _h.eF.initializeBase(this, [n.u(), t, i]);
    _a.c.d(n.c(), "The app is not PAL enabled")
};
_h.eF.prototype = {
    c: function() {
        return !0
    },
    d: function() {
        return !1
    },
    y: function(n) {
        return n
    },
    D: function() {
        return ""
    },
    E: function() {
        return ""
    },
    f: function() {
        return !1
    },
    h: function(n) {
        return n
    },
    g: function() {
        return !1
    },
    J: function(n, t) {},
    s: function() {},
    i: function(n, t) {
        return !1
    },
    A: function(n) {
        return !1
    }
};
_h.j = function(n, t, i) {
    _h.j.initializeBase(this);
    t && this.fa(t);
    this.fp = !1;
    this.fN = i;
    !!n === n && n || this.bK()
};
_h.j.$$cctor = function() {
    _a.n.d(_h.j, _g.ca, function(n) {
        return new _h.j(!1, n, null)
    })
};
_h.j.m = function(n) {
    if (!_h.j.e) {
        if (!n) {
            _h.j.c = null;
            _h.j.e = !1;
            Array.clear(_h.j.f);
            return
        }
        n.a(function(n) {
            _h.j.c = n.a();
            Array.forEach(_h.j.f, function(n) {
                n.bK()
            });
            Array.clear(_h.j.f)
        })
    }
};
_h.j.l = function(n) {
    _h.j.e = n !== "Mouse"
};
_h.j.a = function(n, t) {
    if (!n) throw Error.argumentNull("email address");
    var i = new _h.j(t, null, null);
    i.cJ(n);
    i.fQ([n]);
    i.cI(n.Name);
    n.SipUri && i.fA(n.SipUri);
    switch (n.MailboxType) {
        case "PublicDL":
        case "PrivateDL":
        case "PublicFolder":
            i.bo(2);
            break;
        case "GroupMailbox":
        case "RecommendedGroup":
            i.bo(5);
            break;
        case "SchedulingMailbox":
            i.bo(8);
            break;
        default:
            i.bo(1);
            break
    }
    return i
};
_h.j.g = function() {
    return new _g.e("CLPID:" + _a.d.get_utcNow().i() + ":" + Math.random())
};
_h.j.b = function(n, t, i) {
    if (_j.h.b(t)) throw Error.argumentNull("paramId");
    _j.h.b(i) || (i = encodeURIComponent(i));
    var r = String.format("{0}={1}", t, i);
    _j.h.a(n) || (r = String.format("{0}&{1}", n, r));
    return r
};
_h.j.i = function(n, t) {
    if (_j.h.a(n)) throw Error.argumentNull("displayName");
    if (_j.h.a(t)) throw Error.argumentNull("imAddress");
    var i;
    return i = new _h.j(!1, null, null), i.cI(n), i.fA(t), i.bo(1), i
};
_h.j.k = function(n, t) {
    var i = n > t ? n : t;
    return i < 21 ? "UserTileSmall" : i < 180 ? "UserTileMedium,UserTileStatic,UserTileSmall" : i < 96 ? "UserTileStatic,UserTileSmall" : "Win8Static,UserTileMedium,UserTileStatic,UserTileSmall"
};
_h.j.prototype = {
    dv: null,
    fz: null,
    fN: null,
    fO: null,
    dQ: null,
    fL: null,
    dI: null,
    fy: !1,
    fx: null,
    gx: 0,
    gj: null,
    gk: null,
    fG: null,
    gy: null,
    gz: null,
    fH: null,
    fJ: null,
    fP: 0,
    dz: null,
    dL: null,
    fk: !1,
    gq: !1,
    gi: !1,
    gp: !1,
    fU: null,
    fK: null,
    d: function() {
        return this.fw()
    },
    cW: function(n) {
        this.fT(n);
        return n
    },
    c: function() {
        return this.gl()
    },
    cI: function(n) {
        this.gR(n);
        return n
    },
    dm: function() {
        return this.dR()
    },
    hh: function() {
        return this.hk()
    },
    dn: function() {
        return this.dS()
    },
    hs: function(n) {
        this.fR(n);
        return n
    },
    hi: function() {
        return this.hl()
    },
    hj: function() {
        return this.hn()
    },
    b: function() {
        return this.hm()
    },
    bo: function(n) {
        this.fD(n);
        return n
    },
    i: function() {
        return this.gm()
    },
    fA: function(n) {
        this.gu(n);
        return n
    },
    cU: function() {
        return this.gL()
    },
    a: function() {
        return this.ft()
    },
    cJ: function(n) {
        this.fB(n);
        return n
    },
    e: function() {
        return this.fv()
    },
    fQ: function(n) {
        this.fC(n);
        return n
    },
    fp: !1,
    cH: function() {
        return this.dI ? this.dI.a() : 0
    },
    bJ: function() {
        return this.dI
    },
    gQ: function(n) {
        if (this.dI !== n) {
            this.dI = n;
            this.eJ("PresenceObserver")
        }
        return n
    },
    m: function() {
        return _j.h.b(this.dL) ? this.fF(96, 96) : this.dL
    },
    dp: function() {
        return this.fy
    },
    cV: function(n) {
        this.fy = n;
        return n
    },
    T: function() {
        if (!this.gq) {
            this.fk = !1;
            var t = _g.a.a().c();
            if (t && !_j.h.b(t.bH.UserEmailAddress))
                if (this.a() && !_j.h.b(this.a().EmailAddress) && this.a().EmailAddress.toLowerCase() === t.bH.UserEmailAddress.toLowerCase()) this.fk = !0;
                else if (this.e())
                for (var n = 0; n < this.e().length; n++) _j.h.b(this.e()[n].EmailAddress) || this.e()[n].EmailAddress.toLowerCase() !== t.bH.UserEmailAddress.toLowerCase() || (this.fk = !0);
            this.gq = !0
        }
        return this.fk
    },
    cG: function() {
        return this.b() === 5 || this.b() === 8
    },
    o: function() {
        return null === this.dQ ? !1 : "Guest" === this.dQ.MailboxType || !_j.z.a(this.dQ.IsDomainInOrganization) && !this.dQ.IsDomainInOrganization
    },
    dH: null,
    j: function() {
        return this.dH
    },
    cX: function(n) {
        this.dH = n;
        return n
    },
    B: function() {
        return this.l() ? this.dH.c : null
    },
    A: function() {
        this.hq() && !this.fz && (this.fz = this.dv ? this.dv.b() : null);
        return this.fz
    },
    dt: function(n) {
        this.fz = n;
        return n
    },
    l: function() {
        return !!this.dH
    },
    k: function() {
        return this.dv ? this.dv.a() || null : null
    },
    gP: function(n) {
        this.dv.c(n);
        return n
    },
    dD: function() {
        this.fK || (this.fK = new _h.j.j);
        return this.fK
    },
    gK: function() {
        if (!this.gp) {
            this.gi = !this.fp && this.ho() && !_g.a.a().c().bH.PeopleConnectionsExist && !!this.a() && !_j.h.b(this.a().EmailAddress) && _a.J.a(this.a().EmailAddress.trim().toLowerCase());
            this.gp = !0
        }
        return this.gi
    },
    gS: function() {
        this.d() && this.d().Id || this.cW(_h.j.g())
    },
    ds: function(n) {
        if (!n) return null;
        var t = _ff.e.a(n, !0, !0);
        var i = _a.C.b(t.Name);
        if (!t.Name || _a.C.b(t.EmailAddress) === i || _a.C.b(this.c()) === i || _a.C.b(this.dn()) === i) {
            var r = this.c();
            _a.v.b() in _a.F.a && (r = this.dn());
            t.Name = r
        }
        this.i() && (t.SipUri = this.i());
        return t
    },
    C: function(n) {
        return n ? _bc.v.isInstanceOfType(n) ? !this.d() || !n.d() ? !1 : _ff.e.b(this.d(), n.d()) && _ff.e.b(this.a(), n.a()) : !1 : !1
    },
    dq: function() {
        var n = null;
        if (this.a()) {
            var t = this.a().EmailAddress;
            (_g.n.d(this.a()) || _j.h.a(this.a().RoutingType)) && !_j.h.a(this.a().OriginalDisplayName) && (t = this.a().OriginalDisplayName);
            _j.h.b(t) || (n = _h.j.b(n, "email", t.toLowerCase()))
        }!this.d() || _j.h.b(this.d().Id) || this.d().Id.startsWith("CLPID:") || (n = _h.j.b(n, "personId", this.d().Id));
        if (n) {
            n = _h.j.b(n, "UA", "0");
            this.gK() && (n = _h.j.b(n, "fallbackToClearImage", "true"))
        }
        this.a() && this.dL && (n = _h.j.b(n, "name", this.a().Name));
        return n
    },
    bK: function() {
        this.fq = !0;
        if (!_h.j.e) {
            if (!_h.j.c) {
                Array.add(_h.j.f, this);
                return
            }
            var n = this;
            _h.j.c.b(function() {
                _h.j.c.e() && !n.eZ && n.gQ(_h.j.c.e().a(n.i()))
            })
        }
    },
    du: function() {
        this.fq = !1;
        this.gQ(null)
    },
    dr: function(n) {
        return this.C(n)
    },
    fa: function(n) {
        var t = n;
        this.fO = t.PersonaId;
        this.fG = t.DisplayName;
        this.fH = t.DisplayNameFirstLast;
        this.fJ = t.DisplayNameLastFirst;
        this.fP = t.PersonaTypeString;
        this.fx = t.ImAddress;
        this.fB(t.EmailAddress);
        this.fL = t.EmailAddresses;
        this.gx = t.UnreadCount;
        this.eJ("PropertiesChanged")
    },
    fq: !1,
    hq: function() {
        return !!this.fN && this.l() && !!this.dH.a && this.fN.a(this.dH.a, "PersonaEffectiveRights")
    },
    hg: function(n, t) {
        var i = _h.j.k(n, t);
        this.fU || (this.fU = _g.a.a().bH.HexCID);
        this.dz = String.format("https://cid-{0}.users.storage.live.com/users/0x{0}/myprofile/expressionprofile/profilephoto:{1}/MeControlMediumUserTile?ck=1&ex=24&fofoff=1", this.fU, i);
        return this.dz
    },
    hn: function() {
        var n = this.gn() || "";
        var i = this.go() || "";
        var t = n !== "" ? " " : "";
        return _a.v.b() in _a.F.a ? i + t + n : n + t + i
    },
    fj: function(n) {
        return _j.h.a(n) ? "" : n + " "
    },
    gJ: function(n) {
        var t = "";
        t = n ? this.fj(this.fs()) + this.fj(this.dR()) + this.fj(this.fM()) : this.fj(this.dS()) + this.fj(this.fM()) + this.fj(this.fs());
        return t.trim()
    },
    hp: function() {
        return !!_h.j.d && _h.j.d.a().c().Enabled
    },
    ho: function() {
        return !!_h.j.d && _h.j.d.a().iG().Enabled
    },
    eL: function() {
        this.du();
        var n;
        _a.h.a(n = {
            val: this.dv
        }), this.dv = n.val;
        _a.gd.prototype.eL.call(this)
    },
    ft: function() {
        return this.dQ
    },
    fB: function(n) {
        if (this.dD().c()) {
            this.dD().a(n.EmailAddress) && (n.EmailAddress = _g.a.a().c().a().a(0));
            this.dD().a(n.Name) && (n.Name = _g.a.a().c().a().a(0))
        }
        this.dQ = n
    },
    fv: function() {
        return this.dD().d(this.fL)
    },
    fC: function(n) {
        this.fL = n
    },
    hm: function() {
        var n = this.gM();
        return n !== 5 || this.hp() ? n : 1
    },
    gM: function() {
        return this.fP
    },
    fD: function(n) {
        this.fP = n
    },
    gl: function() {
        return this.dD().b(this.fG)
    },
    dR: function() {
        return this.dD().b(this.fH)
    },
    hk: function() {
        if (_j.h.a(this.dR())) return this.dR();
        else {
            var n = this.gJ(!0);
            return this.dD().b(n)
        }
    },
    dS: function() {
        return this.dD().b(this.fJ)
    },
    hl: function() {
        if (_j.h.a(this.dS())) return this.dS();
        else {
            var n = this.gJ(!1);
            return this.dD().b(n)
        }
    },
    gr: function(n) {
        this.fH = n
    },
    fR: function(n) {
        this.fJ = n
    },
    gR: function(n) {
        this.fG = n
    },
    gm: function() {
        return this.fx
    },
    gu: function(n) {
        if (this.fx !== n) {
            var t = this.fq;
            t && this.du();
            this.fx = n;
            t && this.bK();
            this.eJ("ImAddress")
        }
    },
    gL: function() {
        return this.gx
    },
    fs: function() {
        return this.gj
    },
    gs: function(n) {
        this.gj = n
    },
    fM: function() {
        return this.gk
    },
    gt: function(n) {
        this.gk = n
    },
    gn: function() {
        return this.gy
    },
    gv: function(n) {
        this.gy = n
    },
    go: function() {
        return this.gz
    },
    gw: function(n) {
        this.gz = n
    },
    fw: function() {
        return this.fO
    },
    fT: function(n) {
        this.fO = n
    },
    fF: function(n, t) {
        if (this.fy && this.fk) return this.hg(n, t);
        var r = String.format("HR{0}x{1}", n, t);
        if (_j.h.b(this.dz)) {
            this.dz = "no url";
            var i = this.dq();
            if (!_j.h.a(i)) {
                this.dz = _j.h.b(_h.j.h) ? this.gK() ? "service.svc/s/GetUserPhoto" : "service.svc/s/GetPersonaPhoto" : _h.j.h;
                this.dz += "?" + i
            }
        }
        return _a.g.D("GetPersonaPhoto") ? this.dz === "no url" ? null : this.dz + "&size=" + r + "&trace=1" : this.dz === "no url" ? null : this.dz + "&size=" + r
    }
}
window.scriptsLoaded['boot.worldwide.1.narrow.js'] = 1;
window.scriptProcessEnd = window.scriptProcessEnd || {};
window.scriptProcessEnd['boot.worldwide.1.narrow.js'] = (new Date()).getTime();