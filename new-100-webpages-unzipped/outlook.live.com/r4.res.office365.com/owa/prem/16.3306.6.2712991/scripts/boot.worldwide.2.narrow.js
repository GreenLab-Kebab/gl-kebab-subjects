window.scriptsLoaded = window.scriptsLoaded || {};
window.scriptProcessStart = window.scriptProcessStart || {};
window.scriptProcessStart['boot.worldwide.2.narrow.js'] = (new Date()).getTime();;
_h.j.j = function() {};
_h.j.j.prototype = {
    c: function() {
        return !!_g.a.a().c().a() && _g.a.a().c().a().b() > 0
    },
    a: function(n) {
        if (_g.a.a().E && this.c()) {
            var t = _j.h.c("outlook_{0}", _g.a.a().bH.HexCID.toLowerCase());
            return !!n && !_j.h.d(n) && n.toLowerCase().startsWith(t)
        }
        return !1
    },
    b: function(n) {
        return this.a(n) ? _g.a.a().c().a().a(0) : n
    },
    d: function(n) {
        var r = n;
        var e = _g.a.a().c().a();
        if (r && _g.a.a().E && this.c())
            for (var u = r, f = u.length, i = 0; i < f; ++i) {
                var t = u[i];
                if (t) {
                    this.a(t.EmailAddress) && (t.EmailAddress = _g.a.a().c().a().a(0));
                    this.a(t.Name) && (t.Name = _g.a.a().c().a().a(0))
                }
            }
        return r
    }
};
_h.L = function() {
    this.c = new Sys.EventHandlerList
};
_h.L.prototype = {
    a: function(n, t) {
        _a.Y.b && this.c.addHandler(n, t)
    },
    d: function(n) {
        return _a.Y.b ? this.c.getHandler(n) : null
    },
    b: function(n, t) {
        _a.Y.b && this.c.removeHandler(n, t)
    }
};
_h.Q = function() {};
_h.Q.a = function(n, t, i, r, u, f, e, o) {
    _h.Q.b(n, t, i, r, u, f, e, o, function(t, i) {
        n.r(t, i)
    }, function(t, i) {
        n.s(t, i)
    }, function(t, i, r) {
        n.v(t, i, r)
    }, function(t, i) {
        n.t(t, i)
    }, function(t) {
        n.j(t)
    })
};
_h.Q.c = function(n, t, i, r, u, f, e, o, s) {
    _h.Q.b(n, t, i, r, u, f, e, o, function(t, i) {
        var u = "MergeRowsWithContext_RemoveRange_" + i;
        var r = _j.n.b(_a.a.df, 2, u);
        n.I(t, i, s);
        _j.n.a(r)
    }, function(t, i) {
        var u = "MergeRowsWithContext_InsertRange_" + i.length;
        var r = _j.n.b(_a.a.df, 2, u);
        n.O(t, i, s);
        _j.n.a(r)
    }, function(t, i, r) {
        n.D(t, i, r, s)
    }, function(t, i) {
        n.C(t, i, s)
    }, function(t) {
        var r = "MergeRowsWithContext_AddRange_" + t.length;
        var i = _j.n.b(_a.a.df, 2, r);
        n.H(t, s);
        _j.n.a(i)
    })
};
_h.Q.b = function(n, t, i, r, u, f, e, o, s, h, c, l, a) {
    o || (o = _a.a.T);
    u || (u = _h.Q.d);
    for (var ut = t ? t.length : 0, ft = {}, tt = 0; tt < ut; tt++) ft[r(t[tt])] = tt;
    var et = {};
    if (e)
        for (var it = 0; it < n.b(); it++) et[i(n.c(it))] = it;
    for (var y = [], k = -1, p = 0, nt = !1, w = -1, v = 0, b = 0; b < ut && v < n.b();) {
        var ot = n.c(v);
        var st = i(ot);
        var d = t[b];
        var rt = r(d);
        var ct = rt === st;
        if (ct || nt) {
            if (p > 0 && f) {
                s(k, p);
                v -= p;
                w -= p;
                k = -1;
                p = 0
            }
            if (y.length > 0) {
                h(v, y);
                v += y.length;
                w += y.length;
                Array.clear(y)
            }
            if (nt) {
                c(w, b, n.c(w));
                nt = !1
            } else n.q(v, u(ot, d));
            v++;
            b++;
            continue
        }
        if (!f && e && !(rt in et)) {
            Array.add(y, u(null, d));
            b++;
            continue
        }
        if (!(st in ft)) {
            if (!f && e) {
                h(v, y);
                v += y.length;
                v++;
                Array.clear(y)
            } else {
                k < 0 && (k = v);
                p++;
                v++
            }
            continue
        }
        w = -1;
        for (var g = 0; g < n.b(); ++g)
            if (i(n.c(g)) === rt) {
                w = g;
                break
            }
        if (w === -1) {
            Array.add(y, u(null, d));
            b++;
            continue
        }
        n.q(w, u(n.c(w), d));
        nt = !0
    }
    for (; b < ut; b++) {
        var ht = t[b];
        Array.add(y, u(null, ht))
    }
    if (y.length > 0)
        if (e && !v) h(0, y);
        else {
            a(y);
            v += y.length
        }
    if (f) {
        p += n.b() - v;
        k < 0 && (k = v);
        k >= 0 && p > 0 && s(k, p)
    }
};
_h.Q.d = function(n, t) {
    return t
};
_h.O = function() {};
_h.O.e = function(n) {
    if (n) {
        var r = _h.a.g();
        if (!(r.x.length > 0)) {
            if (!n.length) {
                var u = _h.a.b("msgfolderroot");
                var f = u.bw(10);
                r.s(0, f);
                return
            }
            for (var i = 0; i < n.length; i++) {
                var t = _h.a.a(new _g.m(n[i].EwsFolderIdEntry));
                !t || _h.a.h(t) || t.r || r.a(t)
            }
        }
    }
};
_h.O.b = function(n) {
    if (n && n.bH.FolderId) {
        _h.a.g().p(n, !0);
        var t = _h.a.g();
        t.t(0, n);
        t.x.length > 10 && t.n(t.x.length - 1);
        _h.O.a && _j.m.a().b(_h.O.a);
        _h.O.c && (_h.O.a = _j.m.a().a(_a.a.v, "DelayMruUpdate", function() {
            _h.O.d(t)
        }, 3e4))
    }
};
_h.O.f = function(n) {
    _h.a.g().p(n, !0);
    _h.O.c && (_h.O.a = _j.m.a().a(_a.a.v, "DelayMruUpdate", function() {
        _h.O.d(_h.a.g())
    }, 3e4))
};
_h.O.d = function(n) {
    var i = new _g.eP;
    i.FolderMruEntries = new Array(n.x.length);
    for (var t = 0; t < n.x.length; t++) {
        i.FolderMruEntries[t] = new _g.gE;
        i.FolderMruEntries[t].EwsFolderIdEntry = n.x[t].bH.FolderId.Id
    }
    var r = new _h.eK;
    r.e = i.FolderMruEntries;
    _a.g.a.a(r)
};
_h.eD = function() {};
_h.eD.prototype = {
    a: function(n, t) {
        return !n && !t ? !0 : !n || !t ? !1 : this.c(n, t)
    },
    b: function(n) {
        return JsonParser.serialize(n)
    },
    c: function(n, t) {
        _a.c.b(n, "userConfiguration_x");
        _a.c.b(t, "userConfiguration_y");
        return !n.UserOptions && !t.UserOptions && !n.SessionSettings && !t.SessionSettings ? !0 : !n.UserOptions || !t.UserOptions || !n.SessionSettings || !t.SessionSettings ? !1 : _a.C.b(n.UserOptions.TimeZone) !== _a.C.b(t.UserOptions.TimeZone) ? !1 : n.UserOptions.HideDeletedItems !== t.UserOptions.HideDeletedItems || n.UserOptions.ConversationSortOrder !== t.UserOptions.ConversationSortOrder || n.SegmentationSettings.PredictedActions !== t.SegmentationSettings.PredictedActions ? !1 : !0
    }
};
_h.bN = function() {
    _h.bN.initializeBase(this)
};
_h.bN.prototype = {
    e: 0,
    m: 0,
    o: 0,
    f: null,
    p: null,
    l: null,
    q: null,
    K: function(n) {
        var t = new _g.fm(this.f, this.e);
        t.EmailAddresses = this.l;
        t.DestinationFolderId = this.p;
        t.CountType = this.m;
        t.KeepNCount = this.o;
        t.ItemPropertyToUpdate = this.q;
        var r = new _g.hP(this.L);
        var i = new _g.fl(this.M(), t);
        n.ba(i, r, this.k, this.j)
    },
    h: function() {
        return !0
    }
};
_h.el = function(n) {
    _h.el.initializeBase(this, [n])
};
_h.el.prototype = {
    K: function(n) {
        var t = new _g.iI(this.L);
        n.eS(new _g.fT(this.M()), t, this.I, this.H)
    },
    cU: function(n, t, i) {
        t()
    }
};
_h.dC = function(n, t) {
    _h.dC.initializeBase(this);
    this.l = t;
    this.k = new _h.cm;
    this.o = n
};
_h.dC.prototype = {
    k: null,
    h: null,
    e: null,
    j: 0,
    f: 0,
    o: !1,
    l: null,
    p: function(n) {
        if (n < 0 || n > 200) throw Error.argumentOutOfRange("MaxItems", n, "Invalid value");
        this.j = n ? n : 200;
        return n
    },
    K: function(n) {
        var i = this.q();
        var t = new _g.ho(this.L);
        n.F(i, t, this.I, this.H)
    },
    cU: function(n, t, i) {
        try {
            var r = n.Body.Reminders;
            this.k.C(r);
            t()
        } catch (u) {
            i(u)
        }
    },
    q: function() {
        var n = new _g.eA(this.M());
        this.h && (n.Body.BeginTime = _a.d.d(this.h));
        this.e && (n.Body.EndTime = _a.d.d(this.e));
        _j.C.a(this.j) || this.j === 200 || (n.Body.MaxItems = this.j);
        !_j.u.a(this.f) && this.f && (n.Body.ReminderType = this.f);
        this.o && this.l.bH.Tasks ? this.l.bH.Calendar || (n.Body.ReminderGroupType = 1) : n.Body.ReminderGroupType = 0;
        return n
    }
};
_h.eI = function() {
    _h.eI.initializeBase(this)
};
_h.eI.prototype = {
    e: null,
    K: function(n) {
        var t = new _g.T;
        t.ExtendedFieldURI = _g.c.bq();
        t.Value = this.e;
        var u = new _g.bD;
        u.ExtendedProperty = [t];
        var o = new _g.cb(_g.c.bq(), u);
        var i = new _g.cn(_g.l.a(_g.b.a.nameToId("inbox")));
        i.Updates = [o];
        var r = new _g.cd;
        r.FolderChanges = [i];
        var f = new _g.ct(this.M());
        f.Body = r;
        var e = new _g.cO(this.L);
        n.b(f, e, this.I, this.H)
    },
    cJ: function(n) {
        n.ResponseClass !== "Success" && _j.e.c(_a.a.B, "SetArchiveFolderAction failed with error code {0}", n.ResponseCode)
    }
};
_h.eU = function() {
    _h.eU.initializeBase(this)
};
_h.eU.prototype = {
    K: function(n) {
        var t = new _g.kd(this.L);
        n.jw(new _g.gM, t, this.I, this.H)
    },
    cU: function(n, t, i) {
        t()
    }
};
_h.bO = function() {};
_h.cq = function(n) {
    this.a = n
};
_h.cq.prototype = {
    a: !1
};
_h.R = function() {};
_h.dl = function() {};
_h.cC = function(n, t) {
    _a.c.d(_bc.i.isInstanceOfType(t), "The context type should match the module.");
    this.b = n;
    this.a = t
};
_h.cC.prototype = {
    b: 0,
    a: null
};
_h.dm = function(n) {
    this.a = n
};
_h.dm.prototype = {
    a: null
};
_h.g = function() {};
_h.g.a = function(n, t, i, r, u) {
    u || (u = new _a.l);
    i === -1 || u.d("al") || u.b("al", i);
    r && !u.d("as") && u.b("as", r);
    _a.b.c(n, t, u.toString(), 0)
};
_h.g.c = function(n, t) {
    n.a("ual", _h.bf.toString(t))
};
_h.g.b = function(n) {
    var r = null;
    var t = null;
    if (_j.m.a().i) {
        r = _j.m.a().i;
        var i = r.b();
        t = i && i.length > 0 ? i[i.length - 1] : _h.bf.toString(-1)
    } else t = _h.bf.toString(-1);
    n.a("uas", t);
    return n
};
_h.g.l = function(n, t) {
    _h.g.g("s", n, t)
};
_h.g.f = function(n, t) {
    _h.g.g("d", n, t)
};
_h.g.k = function(n, t) {
    _a.b.c(_a.a.dl, n, t, 0)
};
_h.g.j = function(n, t) {
    var i = [0, 0, 0, 0, 0, 0];
    if (_g.u.isInstanceOfType(n)) {
        n.D && (i[0] = 1);
        n.b && (i[1] = 1);
        n.m && (i[2] = 1);
        n.G() && (i[3] = 1);
        n.c() && (i[4] = 1);
        _g.bX.isInstanceOfType(n) && (i[5] = 1)
    }
    return i.join(",")
};
_h.g.g = function(n, t, i) {
    i.a(n, _h.g.j(t, i))
};
_h.g.h = function(n, t) {
    return n ? t ? 12 : 1 : 2
};
_h.g.d = function(n) {
    switch (n) {
        case 2:
        case 3:
            return 2;
        case 1:
            return 1;
        case 4:
            return 20;
        case 5:
            return 21;
        default:
            _j.e.b(_a.a.cS, "Folder view {0} is not supported in GetActionLocationForListview", n.toString());
            return 2
    }
};
_h.g.e = function(n, t) {
    return t ? n ? 14 : 13 : n ? 4 : 3
};
_h.g.i = function(n, t) {
    switch (n) {
        case 2:
        case 3:
            return t ? 13 : 2;
        case 1:
            return t ? 14 : 1;
        case 4:
            return t ? 13 : 20;
        case 5:
            return 21;
        default:
            _j.e.b(_a.a.cS, "Folder view {0} is not supported in GetActionLocationForListviewOrReadingPaneFullScreen", n.toString());
            return t ? 13 : 2
    }
};
_h.X = function(n, t) {
    _h.X.initializeBase(this, [n]);
    this.c = t
};
_h.X.prototype = {
    c: null,
    b: function() {
        return this.a + "_" + this.c
    },
    C: function(n) {
        return n && _h.X.isInstanceOfType(n) ? n.a === this.a && n.c === this.c : !1
    }
};
_h.W = function(n) {
    this.a = n
};
_h.W.prototype = {
    a: "All",
    b: function() {
        return this.a
    },
    C: function(n) {
        return n && _h.W.isInstanceOfType(n) ? n.a === this.a : !1
    }
};
_h.eE = function() {};
_h.eE.prototype = {
    d: function() {
        return PageDataPayload.findFolders
    },
    i: function(n) {
        PageDataPayload.findFolders = n;
        return n
    },
    c: function() {
        return PageDataPayload.findConversation
    },
    a: function(n) {
        PageDataPayload.findConversation = n;
        return n
    },
    e: function() {
        return PageDataPayload.findMailFolderItem
    },
    b: function(n) {
        PageDataPayload.findMailFolderItem = n;
        return n
    },
    f: function() {
        return PageDataPayload.getConversationItems
    },
    j: function(n) {
        PageDataPayload.getConversationItems = n;
        return n
    },
    g: function() {
        return PageDataPayload.getMailFolderItem
    },
    k: function(n) {
        PageDataPayload.getMailFolderItem = n;
        return n
    },
    h: function() {
        return PageDataPayload.owaUserConfig
    },
    l: function(n) {
        PageDataPayload.owaUserConfig = n;
        return n
    }
};
_h.dP = function(n) {
    this.e = n
};
_h.dP.prototype = {
    e: null,
    a: function(n) {
        return this.e.b(this.f(n))
    },
    b: function(n, t) {
        this.e.a(this.f(n), t)
    },
    c: function(n) {
        this.e.c(this.f(n))
    },
    d: function() {
        this.e.c("PageDataPayload.OwaVersion");
        this.e.c("PageDataPayload.State");
        this.e.c("PageDataPayload.FindConversation");
        this.e.c("PageDataPayload.FindMailFolderItem");
        this.e.c("PageDataPayload.GetConversationItems");
        this.e.c("PageDataPayload.GetMailFolderItem");
        this.e.c("PageDataPayload.FindFolders");
        this.e.c("PageDataPayload.OwaUserConfig")
    },
    f: function(n) {
        switch (n) {
            case 3:
                return "PageDataPayload.FindConversation";
            case 4:
                return "PageDataPayload.FindMailFolderItem";
            case 5:
                return "PageDataPayload.GetConversationItems";
            case 6:
                return "PageDataPayload.GetMailFolderItem";
            case 2:
                return "PageDataPayload.FindFolders";
            case 1:
                return "PageDataPayload.OwaUserConfig";
            case 7:
                return "PageDataPayload.OwaVersion";
            case 8:
                return "PageDataPayload.State";
            case 9:
                return "PageDataPayload.AllowServerSideSessionData";
            default:
                throw Error.notImplemented(String.format("Unsupported page data payload variable {0}", n));
        }
    }
};
_h.dQ = function(n, t, i, r, u, f) {
    _a.c.a(n, "pageDataPayloadAdapter");
    _a.c.a(t, "localStorageAdapter");
    _a.c.a(i, "generator");
    _a.c.a(r, "lazyPersisterFactory");
    _a.c.a(u, "datapointTracker");
    this.i = n;
    this.j = t;
    this.v = i;
    this.w = r;
    this.t = u;
    this.h = new _bc.bk;
    this.u = f
};
_h.dQ.prototype = {
    i: null,
    j: null,
    t: null,
    h: null,
    v: null,
    w: null,
    l: 1,
    r: !1,
    x: !1,
    B: 1048576,
    s: !1,
    m: null,
    n: null,
    q: null,
    k: 0,
    u: null,
    b: function() {
        return this.l !== 2
    },
    e: function(n) {
        this.x = n;
        return n
    },
    A: function() {
        return _g.b.a.nameToId("inbox")
    },
    a: function() {
        this.j.d()
    },
    c: function(n, t) {
        _a.c.c(n, "currentOwaVersion");
        this.k = t;
        var u = this.j.a(7);
        if (_j.h.a(u) || u !== n) {
            this.a();
            this.j.b(7, n)
        }
        var r = this.j.a(8);
        var f = _j.h.a(r) ? 1 : _j.u.b(_bc.J, r);
        this.y(f);
        var i = this.j.a(9);
        this.r = _j.h.a(i) ? !0 : Boolean.parse(i)
    },
    g: function(n, t, i) {
        this.F(n);
        this.H(t);
        this.G(n, t);
        this.E(i)
    },
    f: function() {
        var n;
        var v = _a.d.get_utcNow().h();
        var h, s;
        this.i.l((s = this.o(_g.cy, 1, this.i.h(), h = {
            val: n
        }), n = h.val, s));
        this.h.a.ouc = n;
        var c, a;
        this.i.a((a = this.o(_g.er, 3, this.i.c(), c = {
            val: n
        }), n = c.val, a));
        this.h.a.fc = n;
        var l, o;
        this.i.b((o = this.o(_g.ev, 4, this.i.e(), l = {
            val: n
        }), n = l.val, o));
        this.h.a.fi = n;
        var r, i;
        this.i.i(this.k === "Mouse" ? (i = this.o(_g.eu, 2, this.i.d(), r = {
            val: n
        }), n = r.val, i) : null);
        this.h.a.ff = this.k === "Mouse" ? n : 2;
        var t, e;
        this.i.j(this.k !== "TouchNarrow" ? (e = this.o(_g.ex, 5, this.i.f(), t = {
            val: n
        }), n = t.val, e) : null);
        this.h.a.gci = this.k !== "TouchNarrow" ? n : 2;
        var f, u;
        this.i.k(this.k !== "TouchNarrow" ? (u = this.o(_g.ez, 6, this.i.g(), f = {
            val: n
        }), n = f.val, u) : null);
        this.h.g(this.k !== "TouchNarrow" ? n : 2);
        this.h.a.lt = _a.d.get_utcNow().h() - v;
        this.h.a.st = this.l
    },
    d: function(n, t) {
        var u = _j.n.b(_a.a.dj, 2, "PersistServerSideSessionData");
        try {
            _a.k.C = _a.k.a();
            this.h.c(2);
            this.h.d(2);
            if (!t) {
                this.h.b(2);
                _a.k.c = 4;
                return
            }
            if (this.x) {
                this.h.h(1);
                _a.k.c = 5;
                return
            }
            if (!this.r) {
                this.h.b(1);
                _a.k.c = 6;
                return
            }
            if (t.status !== 200) {
                this.h.b(3);
                this.h.f(t.status);
                this.h.e(t.readyState);
                _a.k.c = 7;
                return
            }
            if (_j.h.a(t.responseText)) {
                this.h.b(4);
                this.h.f(t.status);
                this.h.e(t.readyState);
                _a.k.c = 8;
                return
            }
            if (!n.a().c()) {
                this.h.b(5);
                _a.k.c = 9;
                return
            }
            this.h.i(window.owaSDReceivedTime);
            var r = _j.n.b(_a.a.dj, 517, "LazyPersistSSSDDelay");
            var i = this;
            this.w.a(function(u) {
                _j.n.a(r);
                var f = u.a(i.i, n, i.A(), i.h, t, i.u);
                f && f.a()
            })
        } catch (f) {
            this.h.a.err = f.toString();
            _a.k.c = 10
        } finally {
            this.t.a(this.h);
            window.owaSD = null;
            _j.n.a(u)
        }
    },
    y: function(n) {
        this.l = n;
        this.j.b(8, _bc.J.toString(this.l))
    },
    p: function(n, t) {
        if (t) {
            var i = JsonParser.serialize(t);
            if (i.length < this.B) try {
                this.j.b(n, i)
            } catch (r) {
                this.j.c(n)
            } else this.j.c(n)
        } else this.j.c(n)
    },
    z: function() {
        if (this.l !== 2 && !this.s) {
            this.s = !0;
            this.m && (this.n = this.m.c("PageDataPayloadManager Generating", "PDPGEN"));
            var t = _g.a.a().b().g(this.A(), !1, !1);
            var i = t.a() !== 1;
            var n = this;
            this.v.a(function(t) {
                t.b(i, n.k, 25, function() {
                    n.s = !1;
                    n.y(2);
                    n.p(1, t.a(1));
                    n.p(2, t.a(2));
                    n.p(3, t.a(3));
                    n.p(4, t.a(4));
                    n.p(5, t.a(5));
                    n.p(6, t.a(6));
                    if (n.n) {
                        n.n();
                        n.n = null
                    }
                })
            })
        }
    },
    F: function(n) {
        var t = this;
        n.b(_a.dJ, function(n) {
            (n.a === 7 || n.a === 6 || n.a === 4) && t.y(3)
        })
    },
    H: function(n) {
        var t = this;
        n.c(20, function(n) {
            if (n.a === 5) {
                t.z();
                if (t.q) {
                    t.q();
                    t.q = null
                }
            }
        })
    },
    G: function(n, t) {
        var i = this;
        n.b(_a.cm, function(n) {
            i.m = n.a;
            i.z();
            t.j() && (i.q = i.m.c("PageDataPayloadManager SyncInProgress", "PDPSYNC"))
        });
        var r = this;
        n.b(_a.cx, function() {
            r.m = null;
            r.n = null;
            r.q = null
        })
    },
    E: function(n) {
        this.C(n.c() || !n.a());
        var t = this;
        n.i(function() {
            t.C(n.c() || !n.a())
        })
    },
    o: function(n, t, i, r) {
        var u = i;
        if (u && this.r) r.val = 0;
        else {
            u = this.l !== 2 ? null : this.D(t);
            r.val = u ? 1 : 2
        }
        return u
    },
    C: function(n) {
        this.j.b(9, n.toString());
        n || (this.r = n)
    },
    D: function(n) {
        var t = this.j.a(n);
        return t ? JsonParser.deserialize(t) : null
    }
};
_h.cE = function(n, t, i) {
    this.c = n;
    this.a = t;
    this.b = i
};
_h.cE.prototype = {
    c: 0,
    a: null,
    b: null
};
_h.cW = function(n, t) {
    _g.b.a = n;
    n.R();
    n.c().bH.HasArchive && _g.b.a.nameToId("archivemsgfolderroot") && (n.c().c = !0);
    t.d(_a.eg, new _a.eg)
};
_h.di = function(n, t, i, r) {
    if (i.a()) {
        t.c(n.a, r);
        t.f()
    }
};
_h.cJ = function() {};
_h.cJ.a = function(n, t, i) {
    var r;
    if (n === "TaskDueDate") {
        r = new Array(1);
        r[0] = new _g.bA(t);
        r[0].Path = new _g.d(n)
    } else {
        var u = "TaskDueDate";
        r = new Array(2);
        r[0] = new _g.bA(t);
        r[0].Path = new _g.d(n);
        r[1] = new _g.bA("Ascending");
        r[1].Path = new _g.d(u)
    }
    return r
};
_h.ca = function() {
    _h.ca.initializeBase(this)
};
_h.ca.prototype = {
    e: null,
    o: 0,
    j: 0,
    h: 0,
    l: 0,
    f: null,
    m: null,
    k: null,
    p: null,
    K: function(n) {
        var e = null;
        var t = new _g.fC(this.h, e);
        t.EmailAddresses = this.f;
        t.SourceFolderId = this.m;
        t.DestinationFolderId = this.k;
        t.CountType = this.j;
        t.KeepNCount = this.l;
        t.ItemPropertyToUpdate = this.p;
        t.Provider = this.o;
        if (this.e) t.RuleNames = this.e;
        else {
            for (var r = new Array(0), i = 0; i < this.f.length; i++) Array.add(r, "");
            t.RuleNames = r
        }
        var f = new _g.iq(200);
        var u = new _g.fB(this.M(), t);
        n.br(u, f, this.I, this.H)
    },
    cU: function(n, t, i) {
        if (!n) {
            i(Error.create("Failed to create a sweep rule"));
            return
        }
        if (!n.Body.ResponseMessages || !n.Body.ResponseMessages.Items) {
            i(Error.create("Failed to create a sweep rule"));
            return
        }
        if (n.Body.ResponseMessages.Items[0].ResponseCode !== "NoError") {
            i(Error.create(String.format("Failed to create a sweep rule with response code {0}", n.Body.ResponseMessages.Items[0].ResponseCode)));
            return
        }
        if (!n.Body.ResponseMessages.Items[0].RuleSucceeded) {
            i(Error.create("Failed to create a sweep rule"));
            return
        }
        t()
    }
};
_h.eV = function() {};
_h.eV.registerInterface("_h.eV");
_h.co = function() {};
_h.co.registerInterface("_h.co");
_h.eW = function() {
    _h.eW.initializeBase(this)
};
_h.eW.prototype = {
    e: null,
    o: null,
    f: null,
    p: null
};
_h.eX = function(n, t, i, r, u) {
    this.a = n;
    this.n = t;
    this.m = 1;
    _h.A.a().e() || this.n.a(_a.bl, new _a.bl(1, i, r, u, null, null, null))
};
_h.eX.prototype = {
    a: null,
    n: null,
    o: null,
    m: 0,
    l: null,
    c: function() {
        return this.a
    },
    f: function() {
        return this.m === 3 || this.m === 4
    },
    b: function(n) {
        return n ? this.p(n) : !1
    },
    g: function() {
        if (this.m === 2) {
            this.n.a(_a.bl, new _a.bl(2, "", "", "", null, null, null));
            this.q();
            this.m = 4
        } else if (this.m === 6) {
            this.j();
            return !0
        } else {
            this.n.a(_a.bl, new _a.bl(2, "", "", "", null, null, null));
            this.m = 3
        }
        return !1
    },
    i: function(n) {
        this.r(n);
        if (this.m === 3) {
            this.q();
            this.m = 4
        } else this.m = 2
    },
    h: function() {
        this.m === 3 ? this.j() : this.m = 6
    },
    j: function() {
        this.n.a(_a.bl, new _a.bl(4, "", "", "", null, null, null))
    },
    k: function() {
        this.s();
        this.m = 5;
        this.n.a(_a.bl, new _a.bl(3, "", "", "", null, null, null))
    },
    e: function(n) {
        return this.a.d() ? this.a.d().correlationId === n : !1
    },
    d: function(n) {
        return this.o && this.o.Q ? this.o.Q.correlationId === n : !1
    }
};
_h.cM = function(n, t, i, r, u) {
    _h.cM.initializeBase(this, [n, t, i, r, u])
};
_h.cM.prototype = {
    toString: function() {
        var n = this.a.q.length;
        return n === 1 ? _bms.E.V : String.format(_bms.E.BD, n)
    },
    t: function(n) {
        for (var t = 0; t < n.length; t++) this.l[t] = n[t].MovedItemId
    },
    p: function(n) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t].MovedItemId;
            if (!i) return !1
        }
        return !0
    }
};
_h.cN = function(n, t, i, r, u) {
    _h.cN.initializeBase(this, [n, t, i, r, u])
};
_h.cN.prototype = {
    toString: function() {
        if (_h.bF.isInstanceOfType(this.a)) {
            var t = this.a.e().length;
            return t === 1 ? _bms.E.V : String.format(_bms.E.Q, t)
        } else if (_h.ba.isInstanceOfType(this.a)) {
            var n = this.a.e().length;
            return n === 1 ? _bms.E.j : String.format(_bms.E.s, n)
        } else return ""
    },
    q: function() {
        var i = this.a;
        _h.D.a().a(_a.a.cI, i.s().Id, i.p, !0);
        for (var r = new Array(this.l.length), t = 0; t < this.l.length; t++) {
            var u = new _g.f;
            u.cc(this.l[t]);
            r[t] = u
        }
        var n = new _h.bb(r, i.q, 2);
        n.q = "UndoAction";
        n.s = !0;
        this.o = n;
        _a.g.a.a(n)
    },
    r: function(n) {
        for (var r = new _j.q, i = 0; i < n.length; i++)
            for (var u = n[i].MovedItemIds, t = 0; t < u.length; t++) r.c(u[t]);
        this.l = r.i()
    },
    s: function() {
        var n = this.a;
        _h.c.i(_h.E, n.q)
    },
    p: function(n) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t].MovedItemIds;
            if (!i) return !1
        }
        return !0
    }
};
_h.cO = function(n, t, i, r, u) {
    _h.cO.initializeBase(this, [n, t, i, r, u])
};
_h.cO.prototype = {
    toString: function() {
        var n = this.a.l.length;
        return n === 1 ? _bms.E.j : String.format(_bms.E.BB, n)
    },
    t: function(n) {
        for (var t = 0; t < n.length; t++) this.l[t] = n[t].Items[0].ItemId
    },
    p: function(n) {
        for (var i = 0; i < n.length; i++) {
            var t = n[i];
            if (!t.Items || !t.Items.length || !t.Items[0] || !t.Items[0].ItemId) return !1
        }
        return !0
    }
};
_h.dt = function(n, t, i, r, u) {
    _h.dt.initializeBase(this, [n, t, i, r, u])
};
_h.dt.prototype = {
    q: function() {
        var i = this.a;
        _h.D.a().a(_a.a.cI, i.f.Id, i.o, !0);
        for (var r = new Array(this.l.length), t = 0; t < this.l.length; t++) {
            var u = new _g.f;
            u.cc(this.l[t]);
            r[t] = u
        }
        var n = new _h.bb(r, i.f, 2);
        n.q = "UndoAction";
        n.s = !0;
        this.o = n;
        _a.g.a.a(n)
    },
    r: function(n) {
        this.l || (this.l = new Array(n.length));
        this.t(n)
    },
    s: function() {
        var n = this.a;
        _h.c.i(_h.I, n.f)
    }
};
_h.ed = function() {};
_h.ed.prototype = {
    none: 0,
    calendarItemModel: 1,
    bookingItemModel: 2
};
_h.ed.registerEnum("_h.ed", !1);
_h.eZ = function() {};
_h.eZ.registerInterface("_h.eZ");
_h.fa = function() {};
_h.fa.registerInterface("_h.fa");
_h.fb = function() {};
_h.fb.registerInterface("_h.fb");
_h.fc = function() {};
_h.fc.registerInterface("_h.fc");
_h.fe = function() {};
_h.fe.registerInterface("_h.fe");
_h.fd = function() {};
_h.fd.registerInterface("_h.fd");
_h.bm = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p) {
    this.bD = Function.createDelegate(this, this.bH);
    this.j = this.h;
    _h.bm.initializeBase(this, [l]);
    _h.x.i(u);
    this.t = n;
    this.q = t;
    this.bk = u;
    this.bt = a;
    this.bq = i || _h.b.f();
    this.bu = r;
    this.r = new _g.bt(l);
    this.r.isAutomated = f;
    this.r.itemReceivedTime = h;
    this.bx = v;
    this.bo = p;
    this.bl = e ? e : "All";
    this.bi = c;
    this.u = o;
    this.bp = y;
    this.Z = "Exchange2016";
    this.br = new _j.J(this.bD);
    this.bj = s;
    this.q && this.q.q()
};
_h.bm.prototype = {
    q: null,
    bi: null,
    s: null,
    D: null,
    bv: 0,
    bG: 0,
    t: null,
    bq: null,
    be: null,
    bu: "Folder",
    r: null,
    bl: "All",
    u: null,
    bt: null,
    bs: "NoError",
    br: null,
    bk: null,
    bp: null,
    bj: !1,
    bg: null,
    bx: 0,
    l: function() {
        return this.D
    },
    f: function() {
        return this.s
    },
    k: function() {
        return this.bv
    },
    bo: !1,
    p: function(n) {
        this.bo = n;
        return n
    },
    bw: !1,
    m: function() {
        return this.bw
    },
    e: function() {
        return this.bk
    },
    h: function() {
        return this.bs
    },
    o: function() {
        return this.be
    },
    bC: function() {
        return _h.x.f(this.u.a, this.u.b, this.t)
    },
    K: function(n) {
        var u = new _g.dz(this.M(), this.br.e());
        this.q && !this.bj && (this.bg = _a.b.b(_a.a.D, "MailItemSearchAction", !0, null));
        var t = null;
        var r, i;
        (i = _h.t.b(this.r.explicitLogonUser, _g.l.a(this.t), _g.a.a().c(), r = {
            val: t
        }), t = r.val, i) && (this.r.anchorMailbox = _h.t.a(t, _g.a.a().c().bH.OrganizationDomain));
        n.e(u, this.r, this.I, this.H)
    },
    cJ: function(n) {
        this.bs = n.ResponseCode;
        if (n.RootFolder) {
            this.bp ? this.s = n.RootFolder.Groups : n.RootFolder.Items && (this.s = n.RootFolder.Items);
            this.bv = n.RootFolder.TotalItemsInView;
            this.bG = n.RootFolder.IndexedPagingOffset;
            this.be = n.SearchFolderId;
            this.bw = n.IsSearchInProgress
        } else {
            this.s = new Array(0);
            this.bv = 0
        }
        if (this.q && !this.bj) {
            this.q.n();
            var u = this.Q ? this.Q.correlationId : "";
            if (this.bg) {
                this.bg.o = u;
                _a.b.a(this.bg);
                this.bg = null
            }
            var r = _a.p.c("MailSearchBeforeRendering");
            if (r) {
                r.o = u;
                _a.p.a("MailSearchBeforeRendering")
            }
        }
        var t = n.HighlightTerms;
        if (t) {
            this.D = new Array(t.length);
            for (var i = 0; i < t.length; i++) this.D[i] = new _g.cf(t[i]);
            this.D.sort(_g.cf.a)
        }
        this.D = this.D || new Array(0)
    },
    V: function() {
        _a.dn.prototype.V.call(this);
        this.q && this.q.n();
        this.bs = this.Q ? this.Q.responseCode : "ErrorInternalServerError"
    },
    bm: function() {
        var t = !1;
        if (PageDataPayload.findMailFolderItem && _g.b.a.doesIdEqualName(this.t, "inbox")) {
            var n = !1;
            var i = _h.br.a(_a.o.a(), null);
            i.a() ? _g.bt.d(this.br.e()) && (n = !0) : n = !0;
            if (n && !0) {
                this.cJ(PageDataPayload.findMailFolderItem.Body.ResponseMessages.Items[0]);
                t = !!this.s
            }
            PageDataPayload.findMailFolderItem = null;
            PageDataPayload.findMailFolderItemRequest = null
        }
        return t
    },
    bH: function() {
        var n = new _g.dA(this.bq, "Shallow");
        n.ParentFolderIds = [_g.l.a(this.t)];
        n.ItemShape = this.bq;
        n.Paging = this.bk;
        n.ViewFilter = this.bl;
        n.IsWarmUpSearch = this.bj;
        n.FocusedViewFilter = this.bx;
        n.Grouping = this.bp;
        this.bu !== "None" && (n.ShapeName = this.bu);
        this.be && (n.SearchFolderId = _g.l.a(this.be));
        this.u && (n.SortOrder = this.bC());
        this.bt && (n.Restriction = this.bt);
        if (this.bi) {
            n.CategoryFilter = this.bi;
            n.AcceptPartialResults = this.bo
        }
        if (this.q) {
            n.QueryString = new _g.cz(this.q.i);
            n.QueryString.ReturnHighlightTerms = !0;
            n.QueryString.ReturnDeletedItems = !0;
            n.QueryString.ResetCache = this.q.f;
            n.QueryString.MaxResultsCount = this.q.g;
            n.QueryString.WaitForSearchComplete = this.q.l;
            n.Traversal = this.q.k ? "SoftDeleted" : "Shallow";
            n.RefinerRestriction = this.q.m;
            this.q.h && (n.SearchFolderIdentity = this.q.h);
            this.r.actionName = "Search_FindItem"
        } else this.r.actionName = _g.b.a.idToName(this.t) === "fromfavoritesenders" ? "Browse_FromFavoriteSenders" : "Browse";
        this.bi && _g.b.a.idToName(this.t) === "msgfolderroot" && (n.Traversal = "SoftDeleted");
        !this.r.explicitLogonUser && _g.bk.a(this.t) && (this.r.explicitLogonUser = _h.p.b(this.t.Id));
        this.r.actionName += "_" + this.bl;
        return n
    }
};
_h.bc = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y) {
    this.k = [];
    _h.bc.initializeBase(this, [n]);
    _a.c.a(t, "conversations");
    _a.c.g(i, 0, "maxItemsToReturn");
    for (var b = t, d = b.length, w = 0; w < d; ++w) {
        var p = b[w];
        if (!p.ConversationId || !p.ConversationId.Id || !p.ConversationId.Id.length) {
            _j.e.c(_a.a.B, "Id is empty.");
            break
        }
    }
    this.p = t;
    this.u = i;
    this.q = s;
    this.j = f;
    this.o = "PrimaryOnly";
    this.f = l;
    this.e = a;
    var k = f === 1 || f === 2;
    this.l = k ? _h.b.h(r || _h.b.q()) : _h.b.h(r || _h.b.g());
    this.l.ExcludeBindForInlineAttachments = y;
    this.s = u;
    !!h !== h || (this.l.SeparateQuotedTextFromBody = h);
    !!c !== c || (this.l.CalculateOnlyFirstBody = c);
    this.t = _j.u.a(e) ? f === 2 ? _h.bc.b("ChronologicalNewestOnBottom") : _h.bc.b(_g.a.a().a().n()) : e;
    !!o !== o || (this.r = o)
};
_h.bc.a = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b) {
    var g = new _g.e(t);
    g.ChangeKey = i;
    var nt = l === 1 || l === 2;
    _j.u.a(h) && (h = _g.a.a().a().n());
    var d = new _g.cG(g);
    d.SyncState = o || "";
    var k = new _h.bc(n, [d], r, f, e, l, _h.bc.b(h), c, a, w, p, v, y, b, s);
    k.m = {};
    u && (k.m[t] = u.h());
    return k
};
_h.bc.b = function(n) {
    return n === "ChronologicalNewestOnBottom" ? "DateOrderAscending" : "DateOrderDescending"
};
_h.bc.prototype = {
    u: 0,
    q: null,
    p: null,
    l: null,
    s: "Folder",
    r: !1,
    j: 0,
    m: null,
    o: 0,
    t: "TreeOrderAscending",
    f: null,
    e: null,
    D: !1,
    M: function() {
        if (this.bj()) return this.W("V2017_08_18");
        else if (this.bl()) return this.W("V2017_04_26");
        else if (this.be()) return this.W("V2016_11_10");
        else if (this.bk()) return this.W("V2016_07_13");
        else if (!this.bg()) return this.W("V2016_06_24");
        this.D = !0;
        return _h.cn.prototype.M.call(this)
    },
    bg: function() {
        return this.j === 1 || this.j === 2
    },
    bk: function() {
        return !!this.f && this.f.a().s().Enabled && !!this.e && this.e.d().b("15.01.0589.000")
    },
    be: function() {
        return !!this.f && this.f.a().bb().Enabled && !!this.e && this.e.d().b("15.01.0736.000")
    },
    bl: function() {
        return !!this.e && this.e.d().b("15.01.1085.000")
    },
    bj: function() {
        return !!this.f && this.f.o()
    },
    K: function(n) {
        var t = new _g.ey;
        t.Conversations = this.p;
        t.ItemShape = this.l;
        t.ShapeName = this.s !== "None" ? this.s : null;
        t.SortOrder = this.t;
        t.MaxItemsToReturn = this.u;
        t.FoldersToIgnore = this.bo();
        this.j === 2 && (t.ReturnSubmittedItems = !0);
        var r = "V2_75";
        var e = this.bg();
        if (e) {
            t.ReturnModernConversationItems = !0;
            r = "V2_77"
        }
        this.be() && (r = "V2016_11_03");
        (this.o === "ArchiveOnly" || this.o === "All") && (t.MailboxScope = this.o);
        var u = new _g.fX(this.M());
        u.Body = t;
        var i = "";
        this.j === 1 ? i = "ModernMail" : this.j === 2 && (i = "ModernGroup");
        var f = _g.fW.a(this.L, this.m, this.r, this.t, this.r, this.q, i);
        this.D && (f.owsVersion = r);
        n.bU(u, f, this.I, this.H)
    },
    cJ: function(n) {
        n.ResponseClass !== "Success";
        Array.add(this.k, n)
    },
    bm: function() {
        if (!PageDataPayload.getConversationItems || !_j.h.a(this.q)) return !1;
        var t = PageDataPayload.getConversationItems;
        PageDataPayload.getConversationItems = null;
        if (!t.Body.ResponseMessages || !t.Body.ResponseMessages.Items || !t.Body.ResponseMessages.Items.length || !t.Body.ResponseMessages.Items[0] || !this.m) return !1;
        var r = t.Body.ResponseMessages.Items[0];
        var n = r.Conversation;
        if (r.ResponseClass !== "Success" || !n) return !1;
        for (var c = n.ConversationId.Id, e = this.p, l = e.length, i = 0; i < l; ++i) {
            var a = e[i];
            var f = a.ConversationId.Id;
            if (f === c) {
                var u = !1;
                var h = this.m[f];
                var s = _j.h.a(n.LastModifiedTime) ? _a.d.g : _a.d.b(n.LastModifiedTime);
                var o = s.h();
                if (!(h > o) && !this.bi(n)) {
                    this.cJ(r);
                    u = !0
                }
                return u
            }
        }
        return !1
    },
    bi: function(n) {
        if (n.ConversationNodes)
            for (var e = n.ConversationNodes, l = e.length, t = 0; t < l; ++t) {
                var o = e[t];
                if (o.Items)
                    for (var s = o.Items, a = s.length, i = 0; i < a; ++i) {
                        var u = s[i];
                        if (u.Attachments)
                            for (var f = u.Attachments, c = f.length, r = 0; r < c; ++r) {
                                var h = f[r];
                                if (!h.IsInline) return !0
                            }
                    }
            }
        return !1
    },
    bo: function() {
        var t = null;
        var i = this.j === 2;
        var n = _g.b.a.nameToId("outbox");
        !i && n && (t = [n]);
        return t
    }
};
_h.cb = function(n, t, i, r, u, f, e, o) {
    _h.cb.initializeBase(this, [n]);
    this.k = t;
    this.D = o;
    this.j = i || _h.b.f();
    this.r = r;
    this.be = f;
    this.q = e;
    if (this.be) {
        this.s = new _g.cY;
        this.s.UserRoles = ["MailboxSearch"];
        this.j.InlineImageUrlTemplate = _g.C.o()
    } else this.j = _h.b.h(this.j);
    this.l = new _g.bz(n);
    this.l.clientStoreItem = u;
    this.t = new _j.q
};
_h.cb.prototype = {
    q: null,
    k: null,
    D: null,
    j: null,
    r: "Folder",
    s: null,
    l: null,
    m: null,
    be: !1,
    t: null,
    M: function() {
        return this.W("Exchange2015")
    },
    bg: function() {
        return this.t.d.length > 0 ? _h.d.a().a(this.t.d[0]) : null
    },
    K: function(n) {
        var t = new _g.bv(this.j);
        this.r !== "None" && (t.ShapeName = this.r);
        t.ItemIds = new Array(this.k.length);
        for (var i = 0; i < this.k.length; i++) t.ItemIds[i] = _g.e.a(this.k[i]);
        t.InternetMessageId = this.D;
        var e = new _g.bu(this.M(), t);
        this.s && (e.Header.ManagementRole = this.s);
        this.m && (this.l.actionName = this.m);
        if (!this.l.explicitLogonUser && this.k.length > 0 && _a.bL.a(this.k[0].Id)) this.l.explicitLogonUser = _h.p.b(null);
        else {
            var r = null;
            var f, u;
            (u = _h.t.c(this.l.explicitLogonUser, this.k[0], _g.a.a().c().bH.MailboxGuid, f = {
                val: r
            }), r = f.val, u) && (this.l.anchorMailbox = _h.t.a(r, _g.a.a().c().bH.OrganizationDomain))
        }
        n.a(e, this.l, this.I, this.H)
    },
    cJ: function(n) {
        _j.e.a(_a.a.B, "GetItemAction: ProcessResponseMessage");
        var i = n.Items[0];
        var t = _h.d.a().a(i.ItemId.Id);
        if (t) {
            _j.e.a(_a.a.B, "GetItemAction: Item found in cache");
            t.l(i);
            _h.c.g(t)
        } else {
            _j.e.a(_a.a.B, "GetItemAction: Item not found in cache");
            t = _g.f.a(i);
            _h.d.a().b(t.bH.ItemId.Id, t)
        }
        if (t) {
            _j.e.a(_a.a.B, "GetItemAction: Add ItemId to returnedIds");
            this.t.c(t.bH.ItemId.Id)
        }
    }
};
_h.M = function(n, t, i, r, u, f, e, o) {
    _h.M.initializeBase(this, [n, t, i, r, u, f, e, o]);
    this.l.requireNormalizedBody = !0;
    this.m = "GetMailItem";
    for (var c = t, l = c.length, s = 0; s < l; ++s) {
        var h = c[s];
        if (!h || !h.Id || !h.Id.length) {
            _j.e.c(_a.a.B, "GetMailItem itemId.Id is null.");
            break
        }
    }
};
_h.M.prototype = {
    e: !0,
    M: function() {
        if (this.q) {
            if (this.q.o()) return this.W("V2017_08_18");
            if (this.q.a().bb().Enabled) return this.W("V2016_11_10");
            if (this.q.a().s().Enabled) return this.W("V2016_07_13")
        }
        return this.W("V2016_06_24")
    },
    cJ: function(n) {
        var i = n.Items[0];
        var t = _h.d.a().a(i.ItemId.Id);
        if (t) {
            if (!i.UniqueBody && t.cf()) {
                i.UniqueBody = new _g.t(t.cf().a(), t.cf().bH.Value);
                i.UniqueBody.IsTruncated = t.cf().bH.IsTruncated
            }
            this.e && !i.ErrorProperties && t.fv() && (i.ErrorProperties = t.fv().e());
            !i.QuotedTextList && t.dt() && (i.QuotedTextList = t.dt().e())
        }
        _h.cb.prototype.cJ.call(this, n)
    },
    bm: function() {
        if (!PageDataPayload.getMailFolderItem) return !1;
        var t = PageDataPayload.getMailFolderItem;
        PageDataPayload.getMailFolderItem = null;
        if (!t.Body || !t.Body.ResponseMessages || !t.Body.ResponseMessages.Items || !t.Body.ResponseMessages.Items[0]) return !1;
        var n = t.Body.ResponseMessages.Items[0];
        if (n.ResponseClass !== "Success" || !n.Items || !n.Items[0]) return !1;
        for (var f = n.Items[0].ItemId.Id, u = this.k, o = u.length, i = 0; i < o; ++i) {
            var e = u[i];
            if (e.Id === f) {
                var r = !1;
                PageDataPayload.getMailFolderItem = null;
                if (!this.f(n.Items[0])) {
                    this.cJ(n);
                    r = !0
                }
                return r
            }
        }
        return !1
    },
    f: function(n) {
        if (n.Attachments)
            for (var i = n.Attachments, u = i.length, t = 0; t < u; ++t) {
                var r = i[t];
                if (!r.IsInline) return !0
            }
        return !1
    }
};
_h.ee = function(n, t, i, r, u, f, e) {
    _h.ee.initializeBase(this, [n, t, i, r, u, f, e, null])
};
_h.ee.prototype = {
    cJ: function(n) {}
};
_h.cR = function(n) {
    _h.cR.initializeBase(this);
    this.f = n
};
_h.cR.prototype = {
    f: null,
    e: null,
    j: null,
    K: function(n) {
        var r = new _g.bv(_h.b.f());
        r.ShapeName = "MessageDetails";
        r.ItemIds = [new _g.e(this.f.Id)];
        var t = new _g.bz(this.L);
        t.clientStoreItem = 0;
        var i = null;
        var f, u;
        (u = _h.t.c(t.explicitLogonUser, this.f, _g.a.a().c().bH.MailboxGuid, f = {
            val: i
        }), i = f.val, u) && (t.anchorMailbox = _h.t.a(i, _g.a.a().c().bH.OrganizationDomain));
        var e = new _g.bu(this.M(), r);
        n.a(e, t, this.I, this.H)
    },
    cJ: function(n) {
        var t = n.Items[0];
        this.j = t.ItemId.Id;
        t.ExtendedProperty && (this.e = t.ExtendedProperty[0].Value)
    }
};
_h.cc = function(n, t, i, r, u, f, e, o, s, h, c, l) {
    this.bC = Function.createDelegate(this, this.bG);
    this.j = this.h;
    _h.cc.initializeBase(this, [s]);
    _h.x.i(i);
    this.bg = n;
    this.q = t;
    this.bp = i;
    this.r = new _g.bY(s);
    this.r.isAutomated = r;
    this.r.itemLastDeliveryTime = e;
    this.bj = u ? u : "All";
    this.bi = o;
    this.bv = c;
    this.t = f;
    this.bl = h;
    this.bk = l;
    this.Z = "V2016_02_03";
    this.bq = new _j.J(this.bC);
    this.q && this.q.q()
};
_h.cc.prototype = {
    bl: null,
    bi: null,
    D: null,
    bg: null,
    u: null,
    q: null,
    bj: "All",
    bv: 0,
    t: null,
    bx: 0,
    bD: 0,
    br: "NoError",
    s: null,
    r: null,
    bq: null,
    bp: null,
    be: null,
    l: function() {
        return this.u
    },
    k: function() {
        return this.bx
    },
    bk: !1,
    p: function(n) {
        this.bk = n;
        return n
    },
    e: function() {
        return this.bp
    },
    f: function() {
        return this.D
    },
    h: function() {
        return this.br
    },
    o: function() {
        return this.s
    },
    bu: !1,
    m: function() {
        return this.bu
    },
    bm: function() {
        var r = !1;
        if (PageDataPayload.findConversation && _g.b.a.doesIdEqualName(this.bg, "inbox")) {
            var n = !1;
            var f = _h.br.a(_a.o.a(), null);
            if (f.a()) {
                var t;
                var i, u;
                (u = _g.bY.b(this.bq.e(), this.r, i = {
                    val: t
                }), t = i.val, u) && (n = !0)
            } else n = !0;
            if (n && !0) {
                this.cJ(PageDataPayload.findConversation.Body);
                r = !!this.D
            }
            PageDataPayload.findConversation = null;
            PageDataPayload.findConversationRequest = null
        }
        return r
    },
    K: function(n) {
        var t = new _g.fJ(this.M(), this.bq.e());
        this.q && (this.be = _a.b.b(_a.a.D, "MailConversationSearchActionTime", !0, null));
        n.bw(t, this.r, this.I, this.H)
    },
    cJ: function(n) {
        if (this.q) {
            var i = this.Q ? this.Q.correlationId : "";
            if (this.be) {
                this.be.o = i;
                _a.b.a(this.be);
                this.be = null
            }
            var t = _a.p.c("MailSearchBeforeRendering");
            if (t) {
                t.o = i;
                _a.p.a("MailSearchBeforeRendering")
            }
        }
        this.br = n.ResponseCode;
        this.bH(n.Conversations, n.HighlightTerms, n.TotalConversationsInView, n.IndexedOffset, n.SearchFolderId, n.IsSearchInProgress)
    },
    V: function() {
        _a.dn.prototype.V.call(this);
        this.q && this.q.n();
        this.br = this.Q ? this.Q.responseCode : "ErrorInternalServerError"
    },
    bG: function() {
        var n = new _g.es(_g.l.c(this.bg));
        n.ConversationShape = _h.b.Q();
        n.ShapeName = this.bw();
        n.Paging = this.bp;
        n.ViewFilter = this.bj;
        n.FocusedViewFilter = this.bv;
        this.bl && (n.ConversationIdFilter = this.bl);
        this.s && (n.SearchFolderId = _g.l.a(this.s));
        this.t && (n.SortOrder = _h.x.e(this.t.a, this.t.b));
        if (this.bi) {
            n.CategoryFilter = this.bi;
            n.AcceptPartialResults = this.bk
        }
        if (this.q) {
            n.QueryString = new _g.cz(this.q.i);
            n.QueryString.ReturnHighlightTerms = !0;
            n.QueryString.ReturnDeletedItems = !0;
            n.QueryString.ResetCache = this.q.f;
            n.QueryString.MaxResultsCount = this.q.g;
            n.QueryString.WaitForSearchComplete = this.q.l;
            n.Traversal = this.q.k ? "Deep" : "Shallow";
            n.RefinerRestriction = this.q.m;
            this.q.h && (n.SearchFolderIdentity = this.q.h);
            this.t.a === "ConversationLastDeliveryTime" && this.t.b === "Descending" && (n.QueryString.OptimizedSearch = !0);
            this.r.actionName = this.bo(!0)
        } else this.r.actionName = this.bo(!1);
        this.bi && _g.b.a.idToName(this.bg) === "msgfolderroot" && (n.Traversal = "Deep");
        this.r.actionName += "_" + this.bj;
        return n
    },
    bH: function(n, t, i, r, u, f) {
        this.D = n ? n : new Array(0);
        if (t) {
            this.u = new Array(t.length);
            for (var e = 0; e < t.length; e++) this.u[e] = new _g.cf(t[e]);
            this.u.sort(_g.cf.a)
        }
        this.u = this.u || new Array(0);
        this.bx = i;
        this.bD = r;
        this.s = u;
        this.bu = f;
        this.q && this.q.n()
    },
    bw: function() {
        return this.q ? "ConversationUberListView" : _h.b.R(this.bg, this.t)
    },
    bo: function(n) {
        return n ? "Search_FindConversation" : "Browse"
    }
};
_h.bM = function(n, t, i, r) {
    _h.bM.initializeBase(this);
    this.k = n;
    this.f = t;
    this.m = i;
    this.l = r
};
_h.bM.prototype = {
    l: 0,
    k: null,
    f: null,
    m: "Ascending",
    j: null,
    e: null,
    K: function(n) {
        var t = new _g.gz(this.k, "PreviewOnly", "Next");
        _j.h.a(this.f) || "allmailboxes" === this.f || (t.MailboxId = this.f);
        t.PageSize = this.l;
        var i = new _g.bA(this.m);
        i.Path = _h.bM.a;
        t.SortBy = i;
        n.hP(new _g.gy(this.M(), t), null, this.I, this.H)
    },
    cJ: function(n) {
        this.j = n.SearchMailboxesResult.ItemCount ? n.SearchMailboxesResult.Items : [];
        this.e = [new _g.dF("allmailboxes", _bms.E.Z, n.SearchMailboxesResult.ItemCount, n.SearchMailboxesResult.Size)];
        var i = n.SearchMailboxesResult.MailboxStats;
        if (i)
            if (i.length <= 500) {
                var r;
                this.e = (r = this.e).concat.apply(r, i)
            } else {
                var u = this.e[0];
                this.e = new Array(501);
                this.e[0] = u;
                for (var t = 0; t < 500; t++) this.e[t + 1] = i[t]
            }
    }
};
_h.du = function() {};
_h.du.registerInterface("_h.du");
_h.fh = function() {};
_h.cT = function() {};
_h.cT.registerInterface("_h.cT");
_h.fi = function() {};
_h.bC = function() {};
_h.bC.registerInterface("_h.bC");
_h.bd = function() {};
_h.bd.prototype = {
    none: 0,
    connnectorMessage: 1,
    explicitMessageCard: 2,
    cardHighlight: 5,
    adaptiveCard: 6,
    listViewExtractedAction: 7
};
_h.bd.registerEnum("_h.bd", !1);
_h.fj = function() {};
_h.v = function() {};
_h.v.d = function() {
    if (!_h.v.a) {
        _h.v.a = new _g.O;
        _h.v.a.PropertyName = "ExplicitMessageCard";
        _h.v.a.DistinguishedPropertySetId = "Common";
        _h.v.a.PropertyType = "String"
    }
    return _h.v.a
};
_h.v.e = function() {
    if (!_h.v.c) {
        _h.v.c = new _g.O;
        _h.v.c.PropertyName = "ShowContextualSuggestion";
        _h.v.c.DistinguishedPropertySetId = "Common";
        _h.v.c.PropertyType = "Boolean"
    }
    return _h.v.c
};
_h.v.j = function() {
    if (!_h.v.b) {
        _h.v.b = new _g.O;
        _h.v.b.PropertyName = "IOpenTypedFacet.Com.Microsoft.Graph.MessageCard";
        _h.v.b.PropertySetId = "{E550B918-9859-47B9-8095-97E4E72F1926}";
        _h.v.b.PropertyType = "String"
    }
    return _h.v.b
};
_h.v.m = function(n, t, i) {
    if (n && t && i)
        for (var r = 0; r < t.length; r++)
            if (t[r].toLowerCase() === i.toLowerCase()) return !0;
    return !1
};
_h.v.f = function(n, t, i) {
    var r = 0;
    if (!n) return r;
    var u = i ? _h.v.h(i) : null;
    _h.v.n(n, t) ? r = 1 : _h.v.k(n, t) ? r = 5 : _h.v.o(n, t) && (r = 2);
    return r
};
_h.v.g = function(n) {
    if (n && n.bV()) {
        var t = _g.c.a(n.bV().e(), _h.v.j());
        if (t) return t.bH.Value
    }
    return null
};
_h.v.h = function(n) {
    if (_j.h.a(n)) return null;
    var t = n.split("@");
    return !t || t.length !== 2 ? null : t[1].toLowerCase()
};
_h.v.i = function(n, t) {
    if (n && n.a().cg().Enabled && t && t.ExtendedProperty)
        for (var f = t.ExtendedProperty, e = f.length, r = 0; r < e; ++r) {
            var u = f[r];
            var i = u.ExtendedFieldURI;
            if (i && i.PropertyName === _h.v.d().PropertyName && i.PropertyType === _h.v.d().PropertyType && i.DistinguishedPropertySetId === _h.v.d().DistinguishedPropertySetId) return u.Value.toLowerCase() === "true"
        }
    return !1
};
_h.v.l = function(n) {
    if (n && n.bV()) {
        var t = _g.c.a(n.bV().e(), _h.v.d());
        if (t) return t.bH.Value.toLowerCase() === "true"
    }
    return !1
};
_h.v.k = function(n, t) {
    if (!n || !t) return !1;
    if (n.a().hf().Enabled && t && t.bV()) {
        var i = _g.c.a(t.bV().e(), _h.v.e());
        if (i) return i.bH.Value.toLowerCase() === "true"
    }
    return !1
};
_h.v.n = function(n, t) {
    return n && t ? n.a().ek().Enabled && _g.f.s(t.bH.ItemClass) : !1
};
_h.v.o = function(n, t) {
    return n && t ? n.a().cg().Enabled && _h.v.l(t) : !1
};
_h.fl = function() {};
_h.fl.registerInterface("_h.fl");
_h.bP = function() {};
_h.bP.registerInterface("_h.bP");
_h.ej = function(n, t) {
    this.l = Function.createDelegate(this, this.s);
    _h.ej.initializeBase(this);
    this.g = {};
    t.b(_a.cU, this.l);
    this.h = {};
    this.h.MruTableCacheByTableType_Default = n;
    this.i = []
};
_h.ej.prototype = {
    g: null,
    i: null,
    h: null,
    b: function(n) {
        this.bB("OnMruTableRemoved", n)
    },
    e: function(n) {
        n.K() ? this.k(!0) : n.dispose();
        return !this.n(n)
    },
    f: function(n) {
        var t = this.d(n);
        if (t) {
            this.q(n, t);
            this.bL("OnMruTableRemoved", t, null)
        }
    },
    d: function(n) {
        for (var r = this.j(n), t = 0; t < r.length; t++) {
            var i = r[t];
            if (i.c().a() === n.a()) return i
        }
        return null
    },
    j: function(n) {
        var t = this.p(Object.getType(n));
        return this.m(t)
    },
    a: function(n) {
        n && this.r(n, this.j(n.c()))
    },
    c: function(n, t) {
        Array.add(this.i, n);
        this.h[n.getName()] = t
    },
    s: function(n) {
        this.k(!1)
    },
    t: function(n, t, i) {
        var r = 2147483647;
        i && (r = n.length - t);
        for (var u = n.length - 1; n.length > 0 && r > 0;) {
            var f = n[u];
            this.f(f.c());
            u--;
            r--
        }
    },
    r: function(n, t) {
        if (n && n.K()) {
            var i = Array.indexOf(t, n);
            i >= 0 && Array.removeAt(t, i);
            Array.insert(t, 0, n);
            i < 0 && this.k(!0)
        }
    },
    n: function(n) {
        var t = this.j(n.c());
        return Array.contains(t, n)
    },
    q: function(n, t) {
        Array.remove(this.j(n), t)
    },
    m: function(n) {
        var t = this.g[n];
        if (!t) {
            t = [];
            this.g[n] = t
        }
        return t
    },
    k: function(n) {
        var r = this.g;
        for (var i in r) {
            var t = {
                key: i,
                value: r[i]
            };
            var u = this.m(t.key);
            this.t(u, this.o(t.key), n)
        }
    },
    p: function(n) {
        for (var t = 0; t < this.i.length; t++) {
            var i = this.i[t];
            if (n.implementsInterface(i)) return i.getName()
        }
        return "MruTableCacheByTableType_Default"
    },
    o: function(n) {
        return this.h[n]
    }
};
_h.eh = function(n, t) {
    this.e = n;
    this.c = t || n;
    this.a = 0;
    this.b = 0
};
_h.eh.prototype = {
    e: null,
    c: null,
    a: 0,
    b: 0,
    d: 0,
    f: function(n) {
        n ? this.a++ : this.b++;
        this.g()
    },
    g: function() {
        var n = this.a + this.b;
        this.d = n ? this.a / n : 0
    }
};
_h.c = function() {};
_h.c.t = function(n, t) {
    for (var i = 0; i < t.length; i++) {
        var r = n.eM(t[i].a);
        n.eK(t[i].a, t[i].b);
        n.dB(1, new _a.dl(n, t[i].a.a, r, t[i].b))
    }
};
_h.c.a = function(n, t, i, r, u) {
    var f = new _a.dl(n, t, i, r);
    u(n, r);
    n.dB(1, f)
};
_h.c.c = function(n, t, i, r, u, f, e) {
    for (var h = new _a.dl(null, null, null, null), o = 0; o < i.length; o++) {
        var s = u(i[o]);
        _h.c.a(i[o], r, s, f, e)
    }
};
_h.c.I = function(n, t, i) {
    t.d(function(r, u) {
        n.dB(1, new _a.dl(n, i, null, t))
    })
};
_h.c.g = function(n) {
    n.dB(4, new _a.jq)
};
_h.c.D = function(n) {
    n.dB(2, new _a.eE);
    _h.c.r(n)
};
_h.c.d = function(n, t) {
    var r = new _a.eE;
    !!t !== t || (r.a = t);
    for (var i = 0; i < n.length; i++) {
        n[i].dB(2, r);
        _h.c.r(n[i])
    }
};
_h.c.e = function(n, t) {
    var u = new _a.eE;
    !!t !== t || (u.a = t);
    for (var i = 0; i < n.length; i++) {
        var r = _h.d.a().a(n[i].Id);
        if (r) {
            var f = r;
            f.dB(2, u);
            _h.c.r(r)
        }
    }
};
_h.c.r = function(n) {
    if (_g.i.isInstanceOfType(n) && n.bH.IsDraft && n.bH.ConversationId)
        for (var h = n.bH.ConversationId, e = _h.h.a().d(_h.E), u = 0; u < e.length; u++) {
            var t = e[u].l(h.Id);
            if (t)
                for (var s = t.e().b(), r = s - 1; r >= 0; r--)
                    if (t.e().a(r).Id === n.bH.ItemId.Id && t.c()) {
                        var f = t.e().t();
                        f.o(r);
                        _h.c.a(t, "GlobalItemIds", t.e(), f, function(n, t) {
                            n.bk(t)
                        });
                        var i = t.c();
                        var o = i.s(function(t) {
                            return t.Id === n.bH.ItemId.Id
                        });
                        if (o < i.b()) {
                            i.o(o);
                            _h.c.a(t, "DraftItemIds", i, i, function(n, t) {})
                        }
                    }
        }
};
_h.c.p = function(n, t, i, r, u) {
    var f = _h.d.a().a(t.bH.ConversationId.Id);
    f || (f = u.a(n, t.bH.ConversationId));
    _h.c.K(f, t, n, r);
    _h.c.u(t.bH.ConversationId, i, f);
    return f
};
_h.c.x = function(n, t) {
    if (t) {
        var r = _h.h.a().a(t);
        if (r)
            for (var i = 0; i < r.length; i++) {
                var u = r[i];
                _h.F.isInstanceOfType(u) ? r[i].R(n) : _h.cA.isInstanceOfType(u) && r[i].l(n)
            }
    }
};
_h.c.b = function(n, t, i) {
    t = t || _h.h.a();
    var r = t.g(n);
    if (!r) {
        r = i(n);
        t.f(r)
    }
    return r
};
_h.c.j = function(n, t, i) {
    var u = _h.h.a();
    var e = u.j(n);
    var r = u.g(n);
    i.val = !1;
    if (r) {
        i.val = !0;
        e && u.i(r)
    } else {
        var f = null;
        _h.bJ.isInstanceOfType(n) && (f = n.d());
        _h.c.q(_h.E, n.b(), f);
        r = t(n);
        u.f(r);
        PageDataPayload.findMailFolderItem && _g.b.a.doesIdEqualName(n.b(), "inbox") && (i.val = !0)
    }
    return r
};
_h.c.w = function(n, t, i) {
    var u = _h.h.a();
    var e = u.j(n);
    var r = u.g(n);
    i.val = !1;
    if (r) {
        i.val = !0;
        e && u.i(r)
    } else {
        var f = null;
        f = n.c();
        _h.c.q(_h.E, n.b(), f);
        r = t(n);
        u.f(r);
        PageDataPayload.findMailFolderItem && _g.b.a.doesIdEqualName(n.b(), "inbox") && (i.val = !0)
    }
    return r
};
_h.c.m = function(n, t, i, r) {
    var f = _h.h.a();
    var e = f.j(n);
    var u = f.g(n);
    r.val = !1;
    if (u) {
        r.val = !0;
        e && f.i(u)
    } else {
        _h.c.q(_h.F, n.b(), n.d());
        u = i(n, t);
        f.f(u);
        PageDataPayload.findConversation && _g.b.a.doesIdEqualName(n.b(), "inbox") && (r.val = !0)
    }
    return u
};
_h.c.v = function(n, t, i, r, u) {
    var e = _h.h.a();
    var f = e.g(n);
    if (f) u.val = !0;
    else {
        f = r(n, t, i);
        e.f(f);
        u.val = !1
    }
    return f
};
_h.c.F = function(n, t, i) {
    var u = _h.h.a();
    var r = u.g(n);
    if (!r) {
        _h.c.J(n.b());
        r = i(n, t);
        u.f(r)
    }
    return r
};
_h.c.i = function(n, t) {
    var r = _h.h.a().a(t);
    if (r)
        for (var i = 0; i < r.length; i++) n.isInstanceOfType(r[i]) && r[i].O()
};
_h.c.f = function(n, t) {
    return _h.c.H(n, t, function(n, t) {
        return n.f(t)
    })
};
_h.c.E = function(n, t) {
    if (!t || !t.Id || !n || !n.length) return null;
    var r = _h.h.a().a(t);
    if (r)
        for (var i = 0; i < r.length; i++)
            if (_h.I.isInstanceOfType(r[i])) return r[i].X(n);
    return null
};
_h.c.k = function(n, t) {
    if (n && n.Id) {
        var r = _h.h.a().d(_h.I);
        if (r)
            for (var i = 0; i < r.length; i++) r[i].bd(n.Id, t);
        _h.c.e([n])
    }
};
_h.c.h = function(n, t) {
    if (n && n.Id) {
        var r = _h.h.a().d(_h.I);
        if (r)
            for (var i = 0; i < r.length; i++) r[i].V(n.Id, t)
    }
};
_h.c.z = function(n) {
    if (n && n.Id) {
        var i = _h.h.a().a(_g.b.a.nameToId("drafts"));
        if (i)
            for (var t = 0; t < i.length; t++) {
                var r = i[t];
                _h.F.isInstanceOfType(r) && r.l(n, !1)
            }
    }
};
_h.c.A = function(n, t) {
    n.dg(t);
    var s = _h.d.a().a(n.bH.ItemId.Id);
    if (s) {
        var o = s;
        _h.c.a(o, "IsQueuedForSubmission", o.bw, t, function(n, t) {
            n.dg(t)
        })
    } else _h.d.a().b(n.bH.ItemId.Id, n);
    for (var h = _h.h.a().d(_h.F), f = 0; f < h.length; f++) {
        var i = h[f].P(n.bH.ItemId.Id);
        if (i && _g.i.isInstanceOfType(i)) {
            var c = i;
            _h.c.a(c, "IsQueuedForSubmission", c.bw, t, function(n, t) {
                n.dg(t)
            })
        }
    }
    var l = n.bH.ConversationId;
    if (l)
        for (var e = _h.h.a().d(_h.E), r = 0; r < e.length; r++) {
            var u = e[r].l(l.Id);
            u && _h.c.a(u, "QueuedDraftId", u.P, n.bH.ItemId, function(n, t) {
                n.bw(t)
            })
        }
};
_h.c.B = function(n, t, i) {
    var u = _h.d.a().a(n.ConversationId.Id);
    u.m(n, t);
    if (i) {
        var f = u.k(n.InternetMessageId);
        var r = new _g.gi;
        r.From = i.bH.From;
        r.InternetMessageId = i.bH.InternetMessageId;
        r.Preview = i.bH.Preview;
        f.m(r)
    }
};
_h.c.y = function(n) {
    var t = _h.d.a().a(n.ConversationId.Id);
    return t ? t.u(n) : _g.f.a(n)
};
_h.c.n = function(n, t) {
    var i = _h.d.a().a(n.Id);
    if (i) {
        var r = i.k(t);
        i.a().p(r, !0)
    }
};
_h.c.s = function(n, t, i) {
    var r = _h.c.l[t];
    if (!r) {
        r = new _h.eh(t, i);
        _h.c.l[t] = r
    }
    r.f(n)
};
_h.c.o = function() {
    var i = new _j.l;
    var t = _h.c.l;
    for (var n in t) {
        var r = {
            key: n,
            value: t[n]
        };
        i.a(r.value)
    }
    return i
};
_h.c.u = function(n, t, i) {
    var u = _h.h.a().a(t);
    if (u)
        for (var r = 0; r < u.length; r++) {
            var f = u[r];
            _h.E.isInstanceOfType(f) && u[r].S(n, i)
        }
};
_h.c.K = function(n, t, i, r) {
    r ? n.i(t, i, function() {
        r(n)
    }) || r(n) : n.i(t, i, null)
};
_h.c.J = function(n) {
    var r = _h.h.a();
    var t = r.a(n);
    if (t && t.length > 0)
        for (var i = 0; i < t.length; i++) _h.I.isInstanceOfType(t[i]) && r.m(t[i])
};
_h.c.q = function(n, t, i) {
    var e = _h.h.a();
    var u = e.a(t);
    if (u)
        for (var r = 0; r < u.length; r++) {
            var o = u[r];
            if (_h.I.isInstanceOfType(o)) {
                var f = o;
                n.isInstanceOfType(f) && f.W() === i && e.p(f)
            }
        }
};
_h.c.H = function(n, t, i) {
    if (!t || !t.Id || !n || !n.length) return null;
    var u = _h.h.a().a(t);
    if (u)
        for (var e = n[0], f = 0; f < u.length; f++) {
            var r = u[f];
            if (_h.E.isInstanceOfType(r) && _g.o.isInstanceOfType(e) || _h.F.isInstanceOfType(r) && _g.f.isInstanceOfType(e) || _h.cA.isInstanceOfType(r) && _g.fg.isInstanceOfType(e)) return i(r, n)
        }
    return null
};
_h.c.G = function(n) {
    _h.d.a().e(n.Id)
};
_h.c.C = function(n) {
    _h.d.a().c(n.Id)
};
_h.cU = function(n) {
    this.d = Function.createDelegate(this, this.h);
    this.c = new Sys.EventHandlerList;
    this.e = n
};
_h.cU.prototype = {
    e: null,
    b: function(n, t, i) {
        this.c.addHandler(n + "." + _a.cR.toString(t), i)
    },
    a: function(n, t, i) {
        this.c.removeHandler(n + "." + _a.cR.toString(t), i)
    },
    f: function(n) {
        n.add_onCacheOperation(this.d)
    },
    g: function(n) {
        n.remove_onCacheOperation(this.d)
    },
    h: function(n, t) {
        var u = this.e(n);
        var f = u + "." + _a.cR.toString(t.d);
        var i = this.c.getHandler(f);
        if (i) {
            var r = i;
            r(n, t)
        }
    }
};
_h.d = function() {
    this.h = !_a.g.i;
    this.g = {};
    var n = this;
    this.f = new _h.cU(function(n) {
        return n.bH.ItemId.Id
    })
};
_h.d.a = function() {
    _h.d.b || (_h.d.b = new _h.d);
    return _h.d.b
};
_h.d.prototype = {
    g: null,
    f: null,
    h: !1,
    a: function(n) {
        return n in this.g ? this.g[n].a : null
    },
    d: function(n) {
        return n in this.g
    },
    c: function(n) {
        var t = this.g[n];
        if (t && !(t.b = t.b - 1)) {
            delete this.g[n];
            if (_h.bP.isInstanceOfType(t.a)) {
                _g.f.isInstanceOfType(t.a) && this.f.g(t.a);
                t.a.z()
            }
        }
    },
    e: function(n) {
        var t = this.g[n];
        t && (t.b = t.b + 1);
        return !!t
    },
    b: function(n, t) {
        if (!this.h) return !1;
        if (this.d(n)) throw Error.invalidOperation("ItemModel already in cache");
        if (!t) throw Error.argumentNull("item");
        if (!n) throw Error.argumentNull("itemId");
        var i = new _h.ei;
        i.a = t;
        i.b = 1;
        i.c = n;
        _g.f.isInstanceOfType(t) && this.f.f(t);
        this.g[n] = i;
        _h.bP.isInstanceOfType(t) && t.Q();
        return !0
    }
};
_h.ei = function() {};
_h.ei.prototype = {
    b: 0,
    c: null,
    a: null
};
_h.h = function(n, t, i, r) {
    this.n = Function.createDelegate(this, this.q);
    this.l = !_a.g.i;
    this.e = n;
    this.c = t;
    this.h = i;
    this.k = r;
    this.h.b(this.n)
};
_h.h.c = function(n, t) {
    var i = new _h.ej(5, t);
    n && n.t() && i.c(IGroupConversationTableQuery, 3);
    var u = new _h.d;
    var r = [];
    _h.h.b = new _h.h(u, r, i, t)
};
_h.h.a = function() {
    _h.h.b || _h.h.c(null, _a.g.c());
    return _h.h.b
};
_h.h.prototype = {
    h: null,
    c: null,
    e: null,
    k: null,
    l: !1,
    a: function(n) {
        for (var r = [], t = 0; t < this.c.length; t++) {
            var i = this.c[t];
            _g.dv.a(i.c().b(), n) && Array.add(r, i)
        }
        return r
    },
    o: function(n) {
        for (var r = [], t = 0; t < this.c.length; t++) {
            var i = this.c[t];
            _g.dv.a(i.g(), n) && Array.add(r, i)
        }
        return r
    },
    g: function(n) {
        var t = this.e.a(n.a());
        t || (t = this.r(n));
        this.h.a(t);
        return t
    },
    j: function(n) {
        return this.e.d(n.a())
    },
    i: function(n) {
        var t = this.e.e(n.c().a());
        t && this.h.a(n);
        return t
    },
    f: function(n) {
        if (!this.l) return !1;
        _a.c.a(n, "table");
        this.e.b(n.c().a(), n);
        Array.contains(this.c, n) || Array.add(this.c, n);
        this.h.a(n);
        this.k.a(_h.dn, new _h.dn(n));
        return !0
    },
    m: function(n) {
        this.b(n);
        this.p(n)
    },
    p: function(n) {
        this.h.f(n.c())
    },
    b: function(n) {
        if (this.e.d(n.c().a())) {
            this.e.c(n.c().a());
            this.e.d(n.c().a()) || this.h.e(n) && Array.remove(this.c, n)
        }
    },
    d: function(n) {
        for (var r = [], t = 0; t < this.c.length; t++) {
            var i = this.c[t];
            i && n.isInstanceOfType(i) && Array.add(r, i)
        }
        return r
    },
    r: function(n) {
        var t = this.h.d(n);
        t && this.f(t);
        return t
    },
    q: function(n) {
        if (!this.e.d(n.c().a())) {
            Array.remove(this.c, n);
            n.dispose()
        }
    }
};
var IGroupConversationTableQuery = function() {};
IGroupConversationTableQuery.registerInterface("IGroupConversationTableQuery");
var IConversationItemParts = function() {};
IConversationItemParts.registerInterface("IConversationItemParts");
var IConversationItemPartsFactory = function() {};
IConversationItemPartsFactory.registerInterface("IConversationItemPartsFactory");
_h.E = function() {};
_h.E.registerInterface("_h.E");
_h.de = function() {};
_h.de.registerInterface("_h.de");
_h.bI = function() {};
_h.bI.registerInterface("_h.bI");
_h.cA = function() {};
_h.cA.registerInterface("_h.cA");
_h.fE = function() {};
_h.fE.registerInterface("_h.fE");
_h.F = function() {};
_h.F.registerInterface("_h.F");
_h.bJ = function() {};
_h.bJ.registerInterface("_h.bJ");
_h.I = function() {};
_h.I.registerInterface("_h.I");
var IModernConversationItemPartsFactory = function() {};
IModernConversationItemPartsFactory.registerInterface("IModernConversationItemPartsFactory");
var IOutstandingComposeContext = function() {};
IOutstandingComposeContext.registerInterface("IOutstandingComposeContext");
_h.fF = function() {};
_h.fF.registerInterface("_h.fF");
var IThreadedConversationItemPartsFactory = function() {};
IThreadedConversationItemPartsFactory.registerInterface("IThreadedConversationItemPartsFactory");
_h.dK = function(n, t, i) {
    _h.dK.initializeBase(this, [n, t]);
    this.r = i;
    this.P(15, 10, 10, 5)
};
_h.dK.prototype = {
    r: null,
    C: function() {
        return _a.a.S
    },
    H: function(n, t) {
        return this.r.a(this.p, n)
    },
    s: function(n) {
        return n.bH.ConversationId
    },
    L: function(n, t, i) {
        n.d() ? i && i() : n.w(t, i);
        return !0
    }
};
_h.dL = function(n) {
    this.e = n
};
_h.dL.prototype = {
    e: null,
    c: function() {
        return this.e
    },
    b: function(n) {
        return n.ConversationId.Id
    },
    d: function(n) {
        return n.InstanceKey
    }
};
_h.x = function() {};
_h.x.b = function() {
    _h.x.c || (_h.x.c = new _h.cU(function(n) {
        return n.bH.ConversationId.Id
    }));
    return _h.x.c
};
_h.x.a = function(n, t) {
    var i = new _g.L("Beginning");
    i.Offset = n;
    i.MaxEntriesReturned = t;
    return i
};
_h.x.i = function(n) {
    n ? _g.L.isInstanceOfType(n) && n.Offset < 0 && _j.e.c(_a.a.dy, "Negative page offset is invalid for a Find request.") : _j.e.c(_a.a.dy, "PageView for a Find request cannot be null")
};
_h.x.d = function() {
    return +new Date + ":" + Math.random()
};
_h.x.f = function(n, t, i) {
    var r;
    if (n === "DateTimeReceived" || n === "DateTimeSent" || n === "DateTimeCreated" || n === "ItemLastModifiedTime" || n === "ConversationLastModifiedTime") {
        r = new Array(1);
        r[0] = new _g.bA(t);
        r[0].Path = _h.x.g(n)
    } else {
        var f = n === "ReceivedOrRenewTime" ? t : "Descending";
        var u = "DateTimeReceived";
        i && (u = _g.D.a(i, "DateTimeReceived"));
        r = new Array(2);
        r[0] = new _g.bA(t);
        r[0].Path = _h.x.g(n);
        r[1] = new _g.bA(f);
        r[1].Path = new _g.d(u)
    }
    return r
};
_h.x.e = function(n, t) {
    var i;
    if (n === "ConversationLastDeliveryTime") {
        i = new Array(1);
        i[0] = new _g.bA(t);
        i[0].Path = new _g.d(n)
    } else {
        var r = n === "ConversationLastDeliveryOrRenewTime" ? t : "Descending";
        i = new Array(2);
        i[0] = new _g.bA(t);
        i[0].Path = new _g.d(n);
        i[1] = new _g.bA(r);
        i[1].Path = new _g.d("ConversationLastDeliveryTime")
    }
    return i
};
_h.x.h = function(n) {
    return n === "Subject" || n === "ConversationTopic"
};
_h.x.g = function(n) {
    if (n === "Flag") {
        var i = new _g.O;
        i.PropertyTag = "0x1090";
        i.PropertyType = "Integer";
        return i
    } else if (n === "From") {
        var t = new _g.O;
        t.PropertyTag = "0x0042";
        t.PropertyType = "String";
        return t
    } else return new _g.d(n)
};
_h.cg = function() {};
_h.cg.b = function(n) {
    var i = "";
    var t = _g.x.isInstanceOfType(n) ? n : null;
    t && t.b() && t.b().Mailbox && t.b().Mailbox.Name && (i = t.b().Mailbox.Name);
    return i
};
_h.cg.c = function(n) {
    return n && n.dj() ? !n.a() : !1
};
_h.cg.a = function(n) {
    var t = n.bH.ParentFolderId ? _g.b.a.idToName(n.bH.ParentFolderId) : "none";
    switch (t) {
        case "sentitems":
            return n.cK();
        case "drafts":
            return _g.a.a().E ? n.S() : n.dT();
        case "outbox":
            return n.dT();
        case "deleteditems":
        case "recoverableitemsdeletions":
            return _g.D.c === "ItemLastModifiedTime" ? n.S() : n.cr();
        default:
            return n.cr()
    }
};
_h.ck = function() {};

function EntityTypeProcessorLevelSettings() {}
_h.bY = function() {};
_h.bY.prototype = {
    testFeature: 1,
    smartSuggestions: 2,
    automaticHighlights: 3,
    gdprAds: 9
};
_h.bY.registerEnum("_h.bY", !1);
_h.dr = function() {};
_h.dr.registerInterface("_h.dr");
_h.ds = function() {
    _h.ds.initializeBase(this)
};
_h.ds.prototype = {
    TxpDisableReason: 0,
    CreateEventsFromEmailAsPrivate: !1,
    EntityTypeProcessorLevelSettings: null
};
_h.bZ = function() {
    _h.bZ.initializeBase(this)
};
_h.bZ.prototype = {
    feature: 0,
    id: null
};
_h.bl = function(n, t) {
    _h.bl.initializeBase(this);
    this.options = n;
    this.correlationId = t
};
_h.bl.prototype = {
    options: null
};
_h.fQ = function() {};
_h.fQ.prototype = {
    none: 0,
    supportsPickerV2: 1,
    supportsCalendarFavorites: 2,
    supportsPeopleFavorites: 4
};
_h.fQ.registerEnum("_h.fQ", !0);
_h.bX = function() {};
_h.bX.registerInterface("_h.bX");
_h.eb = function() {};
_h.eb.registerInterface("_h.eb");
_h.ec = function() {};
_h.ec.registerInterface("_h.ec");
_h.cX = function(n) {
    this.d = n
};
_h.cX.prototype = {
    d: null,
    c: function() {
        return this.d
    },
    b: function(n) {
        return n.FolderId.Id
    }
};
_h.a = function(n, t) {
    this.Y = Function.createDelegate(this, this.bJ);
    this.X = Function.createDelegate(this, this.bb);
    this.A = {};
    this.q = new _j.q;
    this.D = new _j.q;
    _h.a.initializeBase(this, [n, t || _a.g.i ? [] : [new _h.eL], null]);
    this.l = {};
    t || _a.g.i || _a.g.e().a("FolderHierarchyNotification", this.bD(), "FolderTable:FolderHierarchy", this.X, 0)
};
_h.a.d = function() {
    var n = _h.d.a().a(_h.a.C);
    if (!n) {
        n = new _j.l;
        _h.d.a().b(_h.a.C, n)
    }
    return n
};
_h.a.g = function() {
    var n = _h.d.a().a(_h.a.D);
    if (!n) {
        n = new _j.l;
        _h.d.a().b(_h.a.D, n)
    }
    return n
};
_h.a.e = function() {
    var n = _h.d.a().a(_h.a.K);
    if (!n) {
        n = new _j.l;
        _h.d.a().b(_h.a.K, n)
    }
    return n
};
_h.a.i = function() {
    var t = _g.a.a().a().bH.ArchiveFolderId;
    if (t) {
        var i = _h.a.b("msgfolderroot");
        var n = i.f(new _g.m(t));
        if (n && !_h.a.h(n)) return n
    }
    return null
};
_h.a.bq = function(n) {
    if (n) {
        var t = n;
        if (t.bH.FolderId && _g.a.a().a().bH.ArchiveFolderId !== t.bH.FolderId.Id) {
            _g.a.a().a().cp(t.bH.FolderId.Id);
            var i = new _h.eI;
            i.e = _a.bL.j(t.bH.FolderId.Id);
            i.b(function() {});
            _a.g.a.a(i)
        }
    }
    return n
};
_h.a.b = function(n) {
    var t = _h.a.bf(n);
    return t ? n === "publicfoldersroot" ? _h.c.b(t, _h.h.a(), function(n) {
        return new _h.p(n)
    }) : _h.c.b(t, _h.h.a(), function(n) {
        return new _h.a(n)
    }) : null
};
_h.a.O = function(n, t, i) {
    if (!n) return null;
    i || (t = t.toLocaleLowerCase());
    for (var u = 0, f = n.b(); u < f; u++) {
        var r = n.c(u);
        if (!i && r.bH.DisplayName.toLocaleLowerCase() === t || r.bH.DisplayName === t) return r
    }
    return null
};
_h.a.a = function(n) {
    if (!n) return null;
    for (var t, r = 0; r < _h.a.s.length; r++) {
        var u = _h.a.s[r];
        if (_g.b.a.nameToId(u)) {
            t = _h.a.b(u).f(n);
            if (t) return t
        }
    }
    for (var i = 0; i < _h.a.e().x.length; i++) {
        var f = _h.S.a(_h.a.e().x[i]);
        t = f.f(n);
        if (t) return t
    }
    return null
};
_h.a.f = function(n) {
    for (var i, t = 0; t < _h.a.s.length; t++)
        if (_g.b.a.nameToId(_h.a.s[t])) {
            var f = _h.a.b(_h.a.s[t]);
            i = f.f(n);
            if (i) return f
        }
    for (var r = 0; r < _h.a.e().x.length; r++) {
        var u = _h.S.a(_h.a.e().x[r]);
        i = u.f(n);
        if (i) return u
    }
    return null
};
_h.a.bg = function() {
    for (var t = _g.a.a().a().M(), i = t ? t.b() : 0, r = new Array(i), n = 0; n < i; n++) r[n] = new _g.m(t.a(n));
    return r
};
_h.a.z = function(n) {
    var t = new _h.em;
    t.a(_h.a.bm);
    n && t.a(n);
    _a.g.a.a(t)
};
_h.a.ba = function() {
    if (_h.a.br()) {
        _g.a.a().a().cE(new _a.j);
        for (var n = 0, i = _h.a.d().x.length; n < i; n++) {
            var t = _h.a.d().x[n].bH.FolderId;
            _g.bk.a(t) || _g.a.a().a().M().c(t.Id)
        }
        _h.f.a(_g.a.a().a().u, _a.g.a)
    }
};
_h.a.W = function(n) {
    if (n) {
        _h.Q.a(_h.a.d(), _h.a.bh(n), _h.a.M, _h.a.M, _h.a.bk, !0);
        _h.p.m(n)
    }
};
_h.a.w = function(n) {
    for (var t = 0; t < _h.a.d().x.length; t++)
        if (_g.l.b(n, _h.a.d().x[t].bH.FolderId)) return t;
    return -1
};
_h.a.u = function(n, t) {
    t >= 0 && t < _h.a.d().x.length ? _h.a.d().t(t, n) : _h.a.d().a(n)
};
_h.a.Y = function(n) {
    for (var t = 0; t < _h.a.d().x.length; t++)
        if (n.cb(_h.a.d().x[t])) {
            _h.a.d().p(_h.a.d().x[t], !0);
            return t
        }
    return -1
};
_h.a.bl = function(n, t, i) {
    var u = _h.a.d().m(n);
    if (u >= 0) {
        var r = _h.a.w(t);
        if (r >= 0) {
            r = r === _h.a.d().x.length - 1 ? i === 1 ? r : r - 1 : r ? u < r ? i ? r : r - 1 : i ? r + 1 : r : i ? r + 1 : r;
            _h.a.d().v(u, r, n);
            return u
        }
    }
    return -1
};
_h.a.bc = function(n) {
    _h.a.e().a(n)
};
_h.a.bp = function(n) {
    for (var t = 0; t < _h.a.e().x.length; t++) {
        var i = _h.a.e().x[t];
        if (i.Mailbox.EmailAddress === n) {
            _h.a.e().n(t);
            break
        }
    }
};
_h.a.bd = function(n) {
    for (var t = 0; t < _h.a.e().x.length; t++) {
        var i = _h.a.e().x[t];
        if (i.Mailbox.EmailAddress === n) return !0
    }
    return !1
};
_h.a.be = function(n, t) {
    if (n.e) t(n);
    else {
        var i = new _h.dB;
        i.j = n;
        i.a(function(i) {
            if (!i.G && i.e)
                for (var u = i, r = 0; r < u.e.a().b(); r++)
                    if (u.e.a().a(r).bH.UserId.PrimarySmtpAddress === _g.a.a().c().bH.UserEmailAddress) {
                        n.e = u.e.a().a(r);
                        break
                    }
            t(n)
        });
        _a.g.a.a(i)
    }
};
_h.a.J = function(n, t) {
    var r = _h.a.f(n.bH.FolderId);
    var u = _h.a.f(t);
    if (r && u) {
        r.bc(n);
        var i = r.f(n.bH.ParentFolderId);
        i && _h.c.a(i, "ChildFolderCount", i.bH.ChildFolderCount, i.bH.ChildFolderCount - 1, function(n, t) {
            n.s(t)
        });
        n.t(t);
        u.E(n);
        i = u.f(n.bH.ParentFolderId);
        i && _h.c.a(i, "ChildFolderCount", i.bH.ChildFolderCount, i.bH.ChildFolderCount + 1, function(n, t) {
            n.s(t)
        })
    }
};
_h.a.h = function(n) {
    return _h.a.m(n, "deleteditems")
};
_h.a.F = function(n) {
    return _h.a.m(n, "archivedeleteditems")
};
_h.a.T = function(n) {
    return _h.a.m(n, "notes")
};
_h.a.bi = function(n) {
    return _h.a.m(n, "archivemsgfolderroot")
};
_h.a.S = function(n) {
    return _h.a.m(n, "recoverableitemsroot")
};
_h.a.m = function(n, t) {
    if (n.c()) return t === "publicfoldersroot";
    var r = _h.a.f(n.bH.FolderId);
    if (!r) return !1;
    while (n.bH.ParentFolderId) {
        var i = r.f(n.bH.ParentFolderId);
        if (i) {
            if (_g.b.a.idToName(i.bH.FolderId) === t) return !0
        } else return !1;
        n = i
    }
    return !1
};
_h.a.r = function(n) {
    if (!n) return !1;
    for (var t = 0; t < _h.a.e().x.length; t++) {
        var r = _h.S.a(_h.a.e().x[t]);
        var i = r.f(n);
        if (i) return !0
    }
    return !1
};
_h.a.E = function(n) {
    if (!n) return null;
    for (var t = 0; t < _h.a.e().x.length; t++) {
        var i = _h.a.e().x[t].Mailbox.EmailAddress;
        var u = _h.S.c(i);
        var r = u.f(n);
        if (r) return i
    }
    return null
};
_h.a.P = function(n) {
    var i = "SupervisoryReview";
    var t = _h.a.E(n);
    return t && t.startsWith(i) ? !0 : !1
};
_h.a.q = function(n, t) {
    return _g.l.b(n, t) || _h.a.G(n, t)
};
_h.a.G = function(n, t) {
    var r = _h.a.f(n);
    if (!r) return !1;
    while (n) {
        var i = r.f(n);
        if (i) {
            if (_g.l.b(t, i.bH.ParentFolderId)) return !0
        } else return !1;
        n = i.bH.ParentFolderId
    }
    return !1
};
_h.a.j = function(n) {
    return !!n && _g.u.isInstanceOfType(n) && _h.a.U(n.bH.FolderClass)
};
_h.a.p = function(n) {
    return !!n && _g.b.a.idToName(n) !== _g.bb.a
};
_h.a.V = function(n) {
    return !!n && Object.getType(n) === _g.u
};
_h.a.y = function(n) {
    return !!n && n.__type === _g.bD._dataContractName && _h.a.U(n.FolderClass)
};
_h.a.U = function(n) {
    return !n || n.startsWith("IPF.Note") || n.startsWith("IPF.StickyNote") || n.toLocaleLowerCase().startsWith("ipf.imap")
};
_h.a.Q = function(n, t, i) {
    var r = _h.a.f(n.bH.FolderId);
    return r ? _h.a.R(r.C(n.bH.ParentFolderId), t, i) : !1
};
_h.a.x = function(n, t) {
    var i = _h.a.f(n.bH.FolderId);
    return i ? _h.a.R(i.C(n.bH.FolderId), t, !1) : !1
};
_h.a.bs = function(n) {
    _h.a.o[n.Id] = !1;
    if (_g.b.a.idToName(n) === "inbox") {
        var t = _h.h.a().a(n);
        if (t && t.length > 0) {
            _h.a.o[n.Id] = !0;
            for (var i = 0; i < t.length; i++)(_h.E.isInstanceOfType(t[i]) || _h.F.isInstanceOfType(t[i])) && _h.h.a().i(t[i])
        }
    }
};
_h.a.A = function(n) {
    var r = _h.a.o[n.Id];
    delete _h.a.o[n.Id];
    if (r) {
        var t = _h.h.a().a(n);
        if (t)
            for (var i = 0; i < t.length; i++)(_h.E.isInstanceOfType(t[i]) || _h.F.isInstanceOfType(t[i])) && _h.h.a().b(t[i])
    }
};
_h.a.l = function(n) {
    return n.Id in _h.a.o
};
_h.a.X = function(n) {
    var t = new _h.dA("RefreshSingleFolderCount", !1);
    t.f = [new _g.m(n.Id)];
    t.j = new _h.bu;
    t.c(_h.a.bn);
    _a.g.a.a(t)
};
_h.a.R = function(n, t, i) {
    return !!_h.a.O(n, t, i)
};
_h.a.bf = function(n) {
    var r = _h.a.N + n;
    var t = _h.d.a().a(r);
    if (!t) {
        var u = _g.b.a.nameToId(n);
        var i = new _g.u;
        i.j(u);
        t = new _h.cu(i);
        _h.d.a().b(r, t)
    }
    return t
};
_h.a.bm = function(n) {
    var i = _h.a.b("msgfolderroot");
    if (i.bx.x.length)
        if (n.G) _j.e.c(_a.a.v, "OnLoadFavoritesCollectionCompleted failed with error {0}", n.G.message);
        else {
            var t = n.e;
            _h.a.W(t);
            _h.a.ba()
        }
};
_h.a.br = function() {
    if (_h.a.L) return !1;
    var t = _g.a.a().a().M();
    var r = _h.a.d().x.length;
    var i = t ? t.b() : 0;
    if (r !== i) return !0;
    for (var n = 0; n < i; n++)
        if (t.a(n) !== _h.a.d().x[n].bH.FolderId.Id) return !0;
    return !1
};
_h.a.M = function(n) {
    return n.bH.FolderId.Id
};
_h.a.bh = function(n) {
    for (var r = [], u = n, f = u.length, i = 0; i < f; ++i) {
        var e = u[i];
        var t = _h.a.bj(e);
        t && !t.r && Array.add(r, t)
    }
    return r
};
_h.a.bj = function(n) {
    var t = _h.a.a(n);
    t && t.x(!0);
    return t
};
_h.a.bk = function(n, t) {
    return n || t
};
_h.a.bn = function(n) {
    var r = n.e;
    var t = r[0];
    var i = _h.a.a(t.FolderId);
    i && _h.a.bb(i, t)
};
_h.a.bb = function(n, t) {
    n.k(t.TotalCount);
    _g.u.isInstanceOfType(n) && n.h(t.UnreadCount)
};
_h.a.bo = function(n) {
    _a.b.c(_a.a.v, "RefreshFolderCountsFailed")
};
_h.a.prototype = {
    l: null,
    j: null,
    t: !1,
    U: !1,
    B: !0,
    S: !0,
    T: !0,
    bD: function() {
        return _a.a.v
    },
    f: function(n) {
        return n ? n.Id in this.A ? this.A[n.Id] : this.j && _g.l.b(n, this.j.bH.FolderId) ? this.j : null : null
    },
    C: function(n) {
        var t = n.Id;
        t in this.l || (this.l[t] = new _j.l);
        return this.l[t]
    },
    H: function(n) {
        var o = n.Id;
        if (o in this.l) {
            for (var r = this.l[o], e = new Array(r.x.length), t = 0; t < r.x.length; t++) e[t] = r.x[t];
            for (var f = e, s = f.length, i = 0; i < s; ++i) {
                var u = f[i];
                this.bx.p(u, !0);
                this.q.n(u)
            }
        } else return
    },
    cc: function() {
        if (!this.t && this.B) {
            this.V(0, this.Z());
            _j.m.a().j(_a.a.v, "Folders")
        }
    },
    bu: function() {
        this.S && this.P()
    },
    P: function() {
        var t = this.l;
        for (var n in t) {
            var i = {
                key: n,
                value: t[n]
            };
            this.l[i.key].g()
        }
        this.B = !0
    },
    bW: function() {
        if (this.B && !this.t) {
            for (var n = 0; n < this.q.d.length; n++) this.E(this.q.d[n]);
            this.B = !1;
            this.S = !0
        } else this.S = !1
    },
    bK: function(n) {
        return this.R(null, n)
    },
    bG: function(n, t) {
        this.A[t.Id] = n;
        n.j(t)
    },
    bt: function(n) {
        this.A[n.bH.FolderId.Id] = n
    },
    bl: function() {
        throw Error.notImplemented("Should not invoke LazyReload for FolderTable");
    },
    eZ: function() {
        throw Error.notImplemented("Should not invoke LazyReloadFromClientNotification for FolderTable");
    },
    bv: function() {
        var i = new Array(0);
        var t = this.l;
        for (var n in t) {
            var r = {
                key: n,
                value: t[n]
            };
            Array.addRange(i, this.l[r.key].f())
        }
        return i
    },
    bs: function(n) {
        this.E(n)
    },
    bw: function(n) {
        for (var i = new Array(0), u = 0; u < _h.a.B.length && i.length < n; u++) Array.add(i, this.f(_g.b.a.nameToId(_h.a.B[u])));
        for (var f = this.q.i(), e = f.length, r = 0; r < e; ++r) {
            var t = f[r];
            if (_h.a.y(t.bH) && !_h.a.p(t.bH.FolderId) && !_h.a.h(t) && !t.r) {
                if (i.length === n) break;
                Array.add(i, t)
            }
        }
        return i
    },
    ca: function(n) {
        _a.b.c(_a.a.v, "FolderTableReload");
        this.bZ()
    },
    bN: function(n, t) {
        return this.ba(!1)
    },
    bR: function(n) {
        var t = n;
        var i = null;
        if (t.e[0]) {
            this.j = this.R(this.j, t.e[0]);
            i = t.f[0]
        } else this.cW(!0);
        this.G(this.j);
        return new _h.cX(i)
    },
    fb: function(n) {
        var t = n;
        this.q.c(t);
        t.bH.FolderId && (this.A[t.bH.FolderId.Id] = t)
    },
    fc: function() {
        this.cb() && this.V(0, this.Z())
    },
    fd: function(n) {
        var t = n;
        this.bc(t);
        this.q.n(t);
        t.bH.FolderId && delete this.A[t.bH.FolderId.Id]
    },
    bS: function(n, t) {
        var i = n;
        var r = "";
        i.bH.ParentFolderId && i.bH.ParentFolderId.Id && (r = i.bH.ParentFolderId.Id);
        _h.a.y(i.bH) && _a.n.e(_g.j, i, t);
        if (r !== "" && r !== i.bH.ParentFolderId.Id) {
            this.l[r] && this.l[r].p(i, !0);
            this.l[i.bH.ParentFolderId.Id].a(i)
        }
    },
    R: function(n, t) {
        n = _a.n.e(_g.j, n, t);
        return n
    },
    G: function(n) {
        switch (n.a()) {
            case "msgfolderroot":
                n.f(_g.a.a().c().bH.UserDisplayName);
                n.y(!1);
                break;
            case "archivemsgfolderroot":
                n.f(_g.a.a().c().bH.ArchiveDisplayName);
                n.y(!0);
                break;
            default:
                break
        }
    },
    E: function(n) {
        var t = n.bH.ParentFolderId.Id;
        t in this.l || (this.l[t] = new _j.l);
        this.l[t].w(n) || this.l[t].a(n)
    },
    bc: function(n) {
        var t = n.bH.ParentFolderId.Id;
        t in this.l && this.l[t].p(n, !0)
    },
    bb: function(n) {
        if (this.t) {
            this.D.c(n);
            return
        }
        var e = n;
        var f = e.folderHierarchy;
        if (n.EventType === "Reload" && n.clientGenerated) this.O();
        else if (f.ResponseCode === "NoError")
            for (var u = f.Changes.Changes, r = 0; r < u.length; r++) {
                var t = u[r].Folder;
                var i = _h.a.a(t.FolderId);
                if (_h.a.j(i) && i.bH.ParentFolderId.Id === t.ParentFolderId.Id) {
                    i.k(t.TotalCount);
                    i.h(t.UnreadCount)
                } else if (_h.a.y(t)) {
                    this.O();
                    break
                }
            }
    },
    Z: function() {
        for (var f = _g.a.a().a().M(), e = f ? f.b() : 0, s = Math.max(15, _h.a.I - e), u = 0, t = 0, i = {}, r = 0, o = this.q.d.length; r < o; r++) {
            var n = this.q.d[r];
            if (n.bH.FolderId)
                if (!_h.a.V(n) || n.bH.ParentFolderId.Id in i) {
                    t++;
                    i[n.bH.FolderId.Id] = !0
                } else {
                    u++;
                    if (u >= s) break;
                    _g.a.a().b().g(n.bH.FolderId, !1, !1).h || (i[n.bH.FolderId.Id] = !0)
                }
            else t++
        }
        return Math.min(u + t, _h.a.H)
    },
    V: function(n, t) {
        if (n < this.q.d.length) {
            this.t = !0;
            for (var i = 0; i < t && n + i < this.q.d.length; i++) this.E(this.q.d[n + i]);
            var r = this;
            _j.m.a().d(_a.a.v, "ProcessFolders", function() {
                r.V(n + t, 5)
            })
        } else {
            this.q = new _j.q;
            this.t = !1;
            this.B = !1;
            this.bY();
            this.by("ChunkingComplete")
        }
    },
    bY: function() {
        for (var n = 0; n < this.D.d.length; n++) this.bb(this.D.d[n]);
        this.D = new _j.q
    },
    cb: function() {
        if (this.j && this.j.a() === "archivemsgfolderroot") return !0;
        if (this.j && this.j.a() === "msgfolderroot") {
            if (!this.U || _g.a.a().a().X()) return !0;
            if (this.T) {
                this.T = !1;
                return !0
            }
            return !this.B
        }
        return !0
    },
    ba: function(n) {
        var t = n ? new _h.ek : new _h.bH;
        t.j = [this.e()];
        var r = _g.b.a.idToName(this.e());
        var i = r === "msgfolderroot";
        t.k = i || r === "archivemsgfolderroot" ? "Deep" : "Shallow";
        if (i) {
            t.o = _h.a.Z;
            n || (t.l = _h.a.v)
        }
        return t
    },
    bZ: function() {
        var n = this.ba(!0);
        n.c(this.Y);
        n.b(_h.a.bo);
        _a.g.a.a(n)
    },
    bJ: function(n) {
        _a.b.c(_a.a.v, "RefreshFolderCountsSucceeded");
        for (var u = n.f[0], t = 0; t < u.length; t++) {
            var r = u[t];
            var i = this.f(r.FolderId);
            i && _h.a.bb(i, r)
        }
    }
};
_h.cu = function(n, t) {
    _h.cu.initializeBase(this, [t || n.bH.FolderId]);
    this.c = n
};
_h.cu.prototype = {
    c: null
};
_h.S = function(n) {
    _h.S.initializeBase(this, [n, !0])
};
_h.S.a = function(n) {
    var t = _h.S.e(n);
    return _h.c.b(t, _h.h.a(), function(n) {
        return new _h.S(n)
    })
};
_h.S.c = function(n) {
    for (var i = null, t = 0; t < _h.a.e().x.length; t++) {
        var r = _h.a.e().x[t];
        if (r.Mailbox.EmailAddress === n) {
            i = r;
            break
        }
    }
    return i ? _h.S.a(i) : null
};
_h.S.e = function(n) {
    var r = _h.S.b + n.Id + "_" + n.Mailbox.EmailAddress;
    var t = _h.d.a().a(r);
    if (!t) {
        var i = new _g.u;
        i.j(new _g.m(r));
        i.b = !0;
        t = new _h.cu(i, n);
        _h.d.a().b(r, t)
    }
    return t
};
_h.S.prototype = {
    bN: function(n, t) {
        if (_g.s.isInstanceOfType(this.bC.b())) {
            var i = new _h.bH;
            var r = this.bC.b();
            var u = new _g.s("inbox");
            u.Mailbox = r.Mailbox;
            i.j = [r, u];
            i.k = "Deep";
            r.Id === "msgfolderroot" && (i.l = _h.a.v);
            return i
        } else return _h.a.prototype.bN.call(this, n, null)
    },
    bR: function(n) {
        var t = n;
        var i = null;
        if (t.e[0]) {
            this.j = this.R(this.j, t.e[0]);
            i = t.f[0]
        } else if (t.e.length > 1 && t.e[1]) {
            this.j = this.R(this.j, t.e[1]);
            i = t.f[1]
        } else this.cW(!0);
        this.G(this.j);
        return new _h.cX(i)
    },
    G: function(n) {
        if (n.a() === "msgfolderroot") {
            n.f(n.q);
            n.y(!0)
        }
    }
};
_h.p = function(n) {
    this.bd = Function.createDelegate(this, this.cn);
    this.r = {};
    _h.p.initializeBase(this, [n]);
    _h.p.a = this
};
_h.p.n = function(n, t) {
    for (var r = 0, u = 0; u < n.length; u++) {
        var i = _h.a.a(n[u]);
        if (i && !i.r && _g.j.f(i))
            while (r < t.length) {
                if (_g.bk.a(t[r])) {
                    if (!_h.a.d().w(i)) {
                        _h.a.u(i, r);
                        i.x(!0)
                    }
                    r++;
                    break
                }
                r++
            }
    }
};
_h.p.l = function() {
    if (null === _g.b.a.nameToId("publicfoldersroot")) return !1;
    var n = _h.a.b("publicfoldersroot");
    if (null === n.j) return !1;
    var t = n.C(n.j.bH.FolderId);
    return null === t ? !1 : !0
};
_h.p.m = function(n) {
    if (n && n.length && _h.p.f) {
        for (var i = [], e = 0, h = n.length; e < h; e++) {
            var f = n[e];
            _g.bk.a(f) && !_h.a.a(f) && Array.add(i, f)
        }
        if (i.length) {
            var o = "publicfoldersroot";
            var r = new Array(i.length + 2);
            r[0] = new _g.s(o);
            r[1] = new _g.s("internalsubmission");
            for (var u = 0; u < i.length; u++) {
                var s = i[u];
                s.__type = _g.m._dataContractName;
                r[u + 2] = s
            }
            var t = new _h.bp("GetFolderAction_LoadPublicFavoriteFolders", !1);
            t.j = new _h.bu;
            t.f = r;
            t.l = !0;
            t.a(function(i) {
                if (!t.G && t.e[0]) {
                    var s = _a.n.e(_g.j, null, t.e[0]);
                    var h = _a.n.e(_g.j, null, t.e[1]);
                    _g.a.a().K(o, t.e[0].FolderId);
                    _g.a.a().K("internalsubmission", t.e[1].FolderId);
                    var u = _h.a.b(o);
                    u.bx.a(s);
                    u.bx.a(h);
                    if (t.e.length > 1) {
                        for (var e = new Array(t.e.length - 2), r = 2; r < t.e.length; r++) {
                            var f = _a.n.e(_g.j, null, t.e[r]);
                            if (f) {
                                e[r] = f.bH.FolderId;
                                u.bx.a(f);
                                t.e[r].ReplicaList && _h.p.j(e[r].Id, t.e[r].ReplicaList[0])
                            }
                        }
                        _h.p.n(e, n)
                    }
                    u.W(s)
                }
            });
            _a.g.a.a(t)
        }
    }
};
_h.p.k = function() {
    var n = _h.a.b("publicfoldersroot");
    n.P()
};
_h.p.g = function() {
    try {
        if (_h.p.c && _h.p.e && _h.p.c.d().b("15.01.0330.000") && _h.p.e.a(_g.a.a().c().bH.DefaultPublicFolderMailbox, "OwaPublicFolderXRF")) return !0
    } catch (n) {}
    return !1
};
_h.p.i = function(n, t, i) {
    var r = new _h.bp("GetFolderAction_LoadPublicFolderFirstLevelFolders", !1);
    r.j = new _h.bu;
    r.f = [new _g.s("publicfoldersroot")];
    _h.p.c = t;
    _h.p.e = i;
    _h.p.g() && (r.R = _g.a.a().c().bH.DefaultPublicFolderMailbox);
    r.a(function(t) {
        if (r.G) {
            n(t);
            return
        }
        var u = _a.n.e(_g.j, null, r.e[0]);
        _g.a.a().K("publicfoldersroot", r.e[0].FolderId);
        var i = _h.a.b("publicfoldersroot");
        i.bx.a(u);
        i.j = u;
        i.W(u);
        n(r)
    });
    _a.g.a.a(r)
};
_h.p.b = function(n) {
    var i = _g.a.a().c().bH.DefaultPublicFolderMailbox;
    var t = _h.p.h(n);
    t && (i = t);
    return i
};
_h.p.h = function(n) {
    var t = null;
    !n && _h.p.a && _h.p.a.s && _h.p.a.s.bH.FolderId && (n = _h.p.a.s.bH.FolderId.Id);
    n && n in _h.p.d && (t = _h.p.d[n]);
    return t
};
_h.p.j = function(n, t) {
    n && t && (_h.p.d[n] = t)
};
_h.p.prototype = {
    s: null,
    cn: function(n) {
        this.bU;
        for (var u = n, f = new _h.cX(u.f[0]), i = f.c(), r = new Array(i.length), t = 0; t < i.length; t++) r[t] = this.bK(i[t]);
        this.bx.j(r);
        this.cr(n);
        this.cB(n.L);
        this.r[u.j[0].Id] = !0
    },
    bN: function(n, t) {
        var i = new _h.bH;
        _h.p.g() && (i.R = _g.a.a().c().bH.DefaultPublicFolderMailbox);
        if (n) {
            var r = n.bH.FolderId;
            r.__type = _g.m._dataContractName;
            i.j = [r]
        } else i.j = [this.e()];
        var u = _g.b.a.idToName(this.e());
        i.k = "Shallow";
        return i
    },
    G: function(n) {
        n.f("All Public Folders");
        n.y(!0)
    },
    cm: function(n) {
        this.bP(n, this.bd)
    },
    W: function(n) {
        if (n.a() === "publicfoldersroot")
            if (n.bH.FolderId.Id in this.r) return;
            else {
                this.r[n.bH.FolderId.Id] = !1;
                this.k(n, null, null)
            }
        else {
            if (n.bH.FolderId.Id in this.r) return;
            else this.r[n.bH.FolderId.Id] = !1;
            var t = this.bN(n, null);
            t && this.cm(t)
        }
    },
    P: function() {
        this.r = {};
        _h.a.prototype.P.call(this)
    },
    H: function(n) {
        n.Id in this.r && delete this.r[n.Id];
        _h.a.prototype.H.call(this, n)
    },
    ck: function(n) {
        return 0 === n.bH.ChildFolderCount ? !1 : n.bH.FolderId.Id in this.r && !0 === this.r[n.bH.FolderId.Id] ? !1 : !0
    },
    cd: function(n) {
        return n.bH.FolderId.Id in this.r ? !this.r[n.bH.FolderId.Id] : !1
    }
};
_h.fJ = function() {};
_h.fJ.registerInterface("_h.fJ");
_h.fH = function() {};
_h.fH.registerInterface("_h.fH");
_h.fI = function() {};
_h.fK = function() {};
_h.fK.registerInterface("_h.fK");
_h.eO = function() {};
_h.eO.registerInterface("_h.eO");
_h.dW = function() {};
_h.dW.registerInterface("_h.dW");
_h.eN = function() {};
_h.eN.registerInterface("_h.eN");
_h.eL = function() {
    this.h = Function.createDelegate(this, this.m);
    this.b = {};
    _h.eL.initializeBase(this);
    this.g = new _g.S;
    this.g.NotificationType = "HierarchyNotification"
};
_h.eL.prototype = {
    g: null,
    a: function() {
        return this.g
    },
    d: function() {
        return _a.a.v
    },
    e: function() {
        return "FolderNotificationStrategy"
    },
    c: function() {
        return 0
    },
    f: function(n, t) {
        var i = n;
        var r = t;
        if (r.t)
            if (r.bC.a() in this.b) {
                var s = this.b[r.bC.a()];
                s.c(i)
            } else {
                var e = new _j.q;
                e.c(i);
                this.b[r.bC.a()] = e;
                r.apcl("ChunkingComplete", this.h)
            }
        else this.i(i, r);
        if (i.EventType === "Reload" && i.folderId)
            for (var f = _h.h.a().a(new _g.m(i.folderId)), u = 0; u < f.length; u++)
                if (_h.I.isInstanceOfType(f[u])) {
                    var o = i;
                    f[u].Y(o.clientGenerated)
                }
    },
    m: function(n, t) {
        n.rpcl("ChunkingComplete", this.h);
        for (var r = n.bC.a(), u = this.b[r], i = 0; i < u.d.length; i++) this.i(u.d[i], n);
        delete this.b[r]
    },
    i: function(n, t) {
        if (n.folderId && n.parentFolderId || n.EventType === "Reload") {
            var u = new _g.m(n.folderId);
            var f = new _g.m(n.parentFolderId);
            var i = t.f(u);
            var r = t.f(f);
            switch (n.EventType) {
                case "RowAdded":
                    if (r && _h.a.j(r) && !i) {
                        i = new _g.u;
                        i.j(u);
                        i.f(n.displayName);
                        i.t(f);
                        this.l(t.bx, i, r)
                    }
                    break;
                case "RowModified":
                    if (i && r && _h.a.j(i) && _h.a.j(r))
                        if (i.bH.ParentFolderId.Id === r.bH.FolderId.Id) this.j(i, n);
                        else {
                            _h.a.J(i, r.bH.FolderId);
                            _h.a.h(i) && i.m && _h.a.Y(i)
                        }
                    else i && (_g.bX.isInstanceOfType(i) && _h.a.j(i) ? this.j(i, n) : _h.a.S(i) && this.n(i, n));
                    break;
                case "Reload":
                    _g.b.a.idToName(t.e()) !== "recoverableitemsroot" && t.O();
                    break;
                default:
                    break
            }
        }
    },
    j: function(n, t) {
        this.k(n, t);
        this.o(n, t)
    },
    n: function(n, t) {
        this.k(n, t)
    },
    k: function(n, t) {
        if (t.itemCount >= 0)
            if (_h.a.l(n.bH.FolderId)) {
                if (!t.itemCount) {
                    _h.a.A(n.bH.FolderId);
                    n.k(0)
                }
            } else n.k(t.itemCount)
    },
    o: function(n, t) {
        t.unreadCount >= 0 && (_h.a.l(n.bH.FolderId) || n.h(t.unreadCount))
    },
    l: function(n, t, i) {
        var u = this;
        if (n.k(function(n) {
                return n.bH.DisplayName === t.bH.DisplayName && n.bH.ParentFolderId.Id === t.bH.ParentFolderId.Id
            }) === n.b()) {
            n.a(t);
            var r = this;
            _h.c.a(i, "ChildFolderCount", i.bH.ChildFolderCount, i.bH.ChildFolderCount + 1, function(n, t) {
                n.s(t)
            })
        }
    }
};
_h.eM = function(n) {
    this.b = new _g.S;
    this.b.NotificationType = "HierarchyNotification";
    this.b.ChannelId = _no.a.a;
    this.h = n
};
_h.eM.prototype = {
    b: null,
    h: !1,
    g: null,
    a: function() {
        return this.b
    },
    d: function() {
        return _a.a.F
    },
    e: function() {
        return "HierarchyNotificationStrategy"
    },
    c: function() {
        return 0
    },
    f: function(n, t) {
        if (this.h) {
            if (!this.g) {
                var i = this;
                this.g = _j.m.a().a(_ff.c.b, "HierarchyNotificationStrategy.ThrottleIncomingNotifications", function() {
                    i.g = null;
                    i.i(n, t)
                }, 7e3)
            }
        } else this.i(n, t)
    },
    i: function(n, t) {
        var i = n;
        t.v() && (t.e().Id === i.folderId || i.EventType === "Reload") && t.O()
    }
};
_h.o = function(n, t) {
    this.a = n;
    this.b = t
};
_h.o.prototype = {
    a: 0,
    b: 0,
    c: 0,
    d: function() {
        return this.a + this.b - 1
    }
};
_h.dp = function(n, t, i) {
    _h.dp.initializeBase(this, [n, t]);
    this.r = i
};
_h.dp.prototype = {
    r: null,
    C: function() {
        return _a.a.dx
    },
    H: function(n, t) {
        if (t) return t;
        else {
            var i = new _g.f;
            i.cc(n);
            return i
        }
    },
    s: function(n) {
        return n.bH.ItemId
    },
    L: function(n, t, i) {
        var u = 2;
        n.bH.ParentFolderId && _g.b.a.doesIdEqualName(n.bH.ParentFolderId, "outbox") && (u = 3);
        var r = new _h.M(this.p, [n.bH.ItemId], _h.b.a(), "ItemNormalizedBody", u, !1, this.r, null);
        var f = this;
        r.a(function(n) {
            i()
        });
        _a.g.a.a(r);
        return !0
    }
};
_h.u = function(n, t, i) {
    this.eT = Function.createDelegate(this, this.fa);
    this.eU = Function.createDelegate(this, this.dn);
    this.ek = Function.createDelegate(this, this.fY);
    this.eX = Function.createDelegate(this, this.gf);
    this.eW = Function.createDelegate(this, this.ge);
    this.eV = Function.createDelegate(this, this.ga);
    this.bx = new(_ff.w.$$(_fm.r));
    this.er = new Array(0);
    _h.u.initializeBase(this);
    this.cf = i;
    this.bC = n;
    this.dm = !1;
    this.eo(!1);
    this.bx.d(this.eV);
    this.cq = 1;
    this.dp = !1;
    if (!_h.u.b && t) {
        var r = !1;
        n.b() && (r = _g.bk.a(n.b()));
        _g.s.isInstanceOfType(n.b()) || _h.a.r(n.b()) || r || Array.forEach(t, this.eW)
    }
};
_h.u.prototype = {
    bC: null,
    bH: 0,
    el: 0,
    dq: 0,
    cC: !1,
    dJ: !1,
    dm: !1,
    bU: !1,
    cV: !1,
    cq: 0,
    bI: null,
    bQ: null,
    fh: null,
    cv: null,
    dr: !1,
    dp: !1,
    dH: null,
    bf: function(n) {
        this.bB("Stale", n)
    },
    bp: function(n) {
        this.bF("Stale", n)
    },
    be: function(n) {
        this.apcl("Loading", n)
    },
    bo: function(n) {
        this.rpcl("Loading", n)
    },
    eY: function(n) {
        this.apcl("LoadingFailed", n)
    },
    fg: function(n) {
        this.rpcl("LoadingFailed", n)
    },
    c: function() {
        return this.bC
    },
    e: function() {
        return this.bC.b()
    },
    g: function() {
        return this.cv
    },
    gc: function(n) {
        this.cv !== n && (this.cv = n);
        return n
    },
    b: function() {
        return this.bH
    },
    y: function(n) {
        if (this.bH !== n) {
            this.bH = n;
            this.by("TableSize")
        }
        return n
    },
    a: function() {
        return this.bx
    },
    m: function() {
        return this.bx
    },
    h: function() {
        return this.el
    },
    ch: function(n) {
        n < 0 && _j.e.c(_a.a.df, "LoadedStartIndex cannot be set to a negative value.");
        this.el = n;
        return n
    },
    bi: function() {
        return this.dq
    },
    M: function() {
        return this.cC
    },
    L: function() {
        return this.dr
    },
    eo: function(n) {
        this.dr = n;
        this.dr && this.ce("Stale");
        return n
    },
    d: function() {
        return this.dm
    },
    cw: function(n) {
        if (this.dm !== n) {
            this.dm = n;
            this.by("Loading")
        }
        return n
    },
    i: function() {
        return this.cV
    },
    bV: function(n) {
        if (this.cV !== n) {
            this.cV = n;
            this.by("Merging")
        }
        return n
    },
    bj: function() {
        return !0
    },
    n: function() {
        return this.cq
    },
    cl: function(n) {
        this.cq !== n && (this.cq = n);
        return n
    },
    bh: function() {
        return !1
    },
    x: function() {
        return this.bU
    },
    cW: function(n) {
        if (this.bU !== n) {
            this.bU = n;
            this.by("LoadingFailed")
        }
        return n
    },
    dj: null,
    u: function() {
        return this.bI
    },
    w: function() {
        return this.bQ
    },
    o: function() {
        return this.bM
    },
    v: function() {
        return this.dJ
    },
    K: function() {
        return !1
    },
    cf: null,
    dk: function(n) {
        var t = !1;
        if (this.dr) {
            this.O(n);
            t = !0
        }
        return t
    },
    bg: function(n) {
        return this.dk(n)
    },
    O: function(n) {
        if (!_h.a.l(this.e())) {
            this.eo(!1);
            if (this.dp) {
                this.dp = !1;
                this.en()
            } else this.ca(n)
        }
    },
    bl: function() {
        this.eo(!0)
    },
    eZ: function() {
        this.dp = !0;
        this.bl()
    },
    k: function(n, t, i) {
        var r = this.bN(n, t);
        if (r) {
            r.bd = i;
            this.bP(r, null)
        }
    },
    p: function(n, t) {
        this.k(n, t, null)
    },
    bk: function(n) {
        throw Error.notImplemented("Subclasses should implement ITableView.GetUpdatedEntryFromLoadedRows.");
    },
    N: function(n, t) {
        t(1)
    },
    br: function(n) {
        throw Error.notImplemented("Subclasses should implement ITableView.UpdateCollectionFromLoadedRows.");
    },
    bq: function() {
        this.y(0)
    },
    z: function() {
        this.dJ = !1
    },
    Q: function() {
        this.dJ = !0
    },
    bn: function() {},
    bm: function() {},
    dI: function(n, t) {
        var i = this;
        t.val = this.bx.k(function(t) {
            if (!_a.eh.isInstanceOfType(t)) throw Error.invalidOperation("Item should implement ICacheKey");
            return t.p() === n
        });
        return t.val < this.bx.x.length
    },
    bz: function() {
        Array.forEach(this.er, this.eX);
        for (var n = this.bx.x.length - 1; n >= 0; n--) this.cS(this.bx.x[n]);
        this.bx.dispose();
        _j.S.prototype.bz.call(this)
    },
    cS: function(n) {
        this.ci(n)
    },
    cj: function(n) {},
    ci: function(n) {},
    en: function() {},
    fb: function(n) {
        this.cj(n)
    },
    fc: function() {},
    fd: function(n) {
        this.cS(n)
    },
    fZ: function(n) {},
    bS: function(n, t) {
        _a.cG.isInstanceOfType(n) ? n.l(t) : n.fa(t)
    },
    es: function(n, t) {
        this.bS(n, t);
        return !1
    },
    cU: function(n, t) {
        if (this.bI !== n) return !1;
        var r = _j.n.b(this.bD(), 2, "PreMergeRows_" + n.bf);
        this.bV(!0);
        var f = this.bR(n);
        if (this.bU) {
            this.bV(!1);
            return !0
        }
        var u = f.c();
        this.ff(u, f);
        _j.n.a(r);
        var i = f;
        this.cg(u, n, i.a || (i.a = Function.createDelegate(i, i.b)), !0, !1, t);
        r = _j.n.b(this.bD(), 2, "PostMergeRows_" + n.bf);
        this.bV(!1);
        this.dK(this.bx, u);
        _j.n.a(r);
        return !0
    },
    cg: function(n, t, i, r, u, f) {
        var v = t ? t.bf : "";
        var y = _j.n.b(this.bD(), 2, "MergeRows_" + v);
        var o = {};
        var p = this;
        var s = function(n) {
            if (!_a.eh.isInstanceOfType(n)) throw Error.invalidOperation("Item should implement ICacheKey");
            return n.p()
        };
        f || (f = this.bx.x.length ? t && this.cT(t) ? 3 : 2 : 1);
        var c = this;
        _h.Q.c(this.bx, n, s, i, function(n, t) {
            if (!n) {
                n = c.bK(t);
                return n
            }
            var r = c.es(n, t);
            if (r) {
                var i = s(n);
                o[i] = !0
            }
            return n
        }, r, u, this.bD(), f);
        var a = _ff.i.a(o);
        if (a > 0)
            for (var e = 0; e < this.bx.x.length; e++) {
                var h = this.bx.x[e];
                var l = s(h);
                l in o && this.bx.D(e, e, h, f)
            }
        _j.n.a(y)
    },
    ff: function(n, t) {},
    dK: function(n, t) {},
    bP: function(n, t) {
        this.bI;
        this.gd(n, t);
        this.dL(this.bI)
    },
    dL: function(n) {
        this.cw(!0);
        this.cW(!1);
        _a.g.a.a(n)
    },
    cB: function(n) {},
    cI: function(n) {},
    em: function() {},
    cr: function(n) {
        var t = _j.n.b(this.bD(), 2, "Action_Load_Completed_" + n.bf);
        this.cl(0);
        this.cw(!1);
        _j.n.a(t)
    },
    ep: function() {
        this.cW(!0);
        this.cq = 0;
        this.cw(!1)
    },
    cA: function(n) {},
    dn: function(n) {
        if (!this.bM) {
            n.L === 200 && this.cI(n);
            this.cU(n, 0) && this.fe(n)
        }
    },
    fa: function(n) {
        this.bM || this.gb(n) && this.fe(n)
    },
    dl: function() {
        if (this.bI) {
            this.bI.U(this.dH);
            this.bI.T(this.ek);
            this.bI = null;
            this.dH = null
        }
    },
    gd: function(n, t) {
        if (this.bI !== n) {
            this.dl();
            t || (t = this.eU);
            this.bI = n;
            this.dH = t;
            this.bI.c(t);
            this.bI.b(this.ek)
        }
    },
    fe: function(n) {
        this.bQ = this.bI;
        this.dl();
        this.em();
        this.cr(n);
        this.cB(n.L)
    },
    gb: function(n) {
        if (this.bI !== n) return !1;
        this.bV(!0);
        var f = this.bR(n);
        var r = f.c();
        if (this.bU) {
            this.bV(!1);
            return !0
        }
        var u = this.bx.x.length ? 2 : 1;
        this.bx.T(u);
        for (var i = [], t = 0; t < r.length; t++) Array.add(i, this.bK(r[t]));
        this.bx.H(i, u);
        this.bV(!1);
        return !0
    },
    fY: function(n) {
        if (!this.bM) {
            var t = this.eq(n);
            !t;
            if (this.bI === n) {
                this.bQ = this.bI;
                this.dl();
                if (t) this.cr(n);
                else {
                    this.cA(n);
                    this.ep();
                    this.dj = n.G ? n.G.message : null
                }
            }
        }
    },
    eq: function(n) {
        return !1
    },
    cT: function(n) {
        return !1
    },
    cJ: function(n) {
        var t;
        if (_g.N.isInstanceOfType(this.e())) t = new _h.bU(n.a(), null, null, this.e().Id, _g.a.a().c().bH.LogonEmailAddress);
        else if (_h.dW.isInstanceOfType(n)) {
            var i = n;
            i.a().ChannelId = _no.a.a;
            t = new _h.bU(i.a(), null, null, i.b(), _g.a.a().c().bH.LogonEmailAddress)
        } else t = new _h.K(n.a());
        return t
    },
    ga: function(n, t) {
        var i = t.a;
        var s = t.b;
        if (t.c === 1) {
            if (i)
                for (var h = i, y = h.length, u = 0; u < y; ++u) {
                    var l = h[u];
                    this.fZ(l)
                }
            return
        }
        if (s)
            for (var e = s, v = e.length, r = 0; r < v; ++r) {
                var p = e[r];
                this.fd(p)
            }
        if (i) {
            for (var o = i, a = o.length, f = 0; f < a; ++f) {
                var c = o[f];
                c !== this.fh && this.fb(c)
            }
            this.fc()
        }
    },
    ge: function(n) {
        var t = n;
        if (t) {
            var r = this.cJ(t);
            var f = this;
            var i = function(n) {
                t.f(n, f)
            };
            r.n(t.d(), t.e(), i, t.c());
            var u = new _h.u.c(r, i);
            Array.add(this.er, u)
        }
    },
    gf: function(n) {
        var t = n;
        t.b.v(t.a)
    }
};
_h.u.c = function(n, t) {
    this.b = n;
    this.a = t
};
_h.u.c.prototype = {
    b: null,
    a: null
};
_h.dX = function(n, t, i, r) {
    this.e(n);
    this.g(t);
    this.d(i);
    this.h(r)
};
_h.dX.prototype = {
    b: null,
    a: null,
    c: null,
    f: null,
    e: function(n) {
        this.b = n || "";
        return n
    },
    g: function(n) {
        this.a = n || "";
        return n
    },
    d: function(n) {
        this.c = n || "";
        return n
    },
    h: function(n) {
        this.f = n || "";
        return n
    }
};
_h.D = function() {
    this.b = {}
};
_h.D.a = function() {
    _h.D.b || (_h.D.b = new _h.D);
    return _h.D.b
};
_h.D.prototype = {
    b: null,
    g: function(n, t) {
        var u = t.a;
        var i = this.b[n];
        if (!i) {
            i = {};
            this.b[n] = i
        }
        if (i[u]) i[u] = t;
        else {
            var f = i;
            for (var e in f) {
                var o = {
                    key: e,
                    value: f[e]
                };
                var s = o.key;
                var r = i[s];
                r.c === t.a ? t.e(r.a) : r.b === t.a && t.d(r.a)
            }
            i[u] = t
        }
        i[t.f] = t
    },
    c: function(n, t) {
        var i = this.b[n];
        return i ? i[t] : null
    },
    h: function(n, t) {
        var i = this.b[n];
        return i ? i[t] : null
    },
    e: function(n, t) {
        var u = this.b[n];
        if (!u) return null;
        var f = u;
        for (var i in f) {
            var e = {
                key: i,
                value: f[i]
            };
            var r = e.value;
            if (r.b === t) return r
        }
        return null
    },
    i: function(n, t) {
        var u = this.b[n];
        if (!u) return null;
        var f = u;
        for (var i in f) {
            var e = {
                key: i,
                value: f[i]
            };
            var r = e.value;
            if (r.c === t) return r
        }
        return null
    },
    d: function(n, t) {
        var r = this.b[n];
        if (!r) return !1;
        var i = r[t];
        if (i) {
            var f = r[i.b];
            var u = r[i.c];
            u && u.e(i.b);
            f && f.d(i.c);
            delete r[t];
            delete r[i.f];
            return !0
        }
        return !1
    },
    a: function(n, t, i, r) {
        if (_j.m.a().p < 0 || r) this.f(t, i);
        else {
            var u = this;
            _j.m.a().a(n, "RemoveInstanceKeysFromPendingOperations", function() {
                u.f(t, i)
            }, _h.D.c)
        }
    },
    f: function(n, t) {
        for (var i = 0; i < t.length; i++) this.d(n, t[i])
    }
};
_h.fL = function(n, t) {
    this.y = Function.createDelegate(this, this.J);
    this.A = Function.createDelegate(this, this.R);
    this.c = [];
    this.a = [];
    this.e = {};
    this.d = [];
    _h.fL.initializeBase(this);
    if (!t) throw Error.argumentNull("shouldPrefetchFunc");
    this.p = n;
    this.x = t;
    this.K()
};
_h.fL.prototype = {
    p: 0,
    n: !1,
    j: !1,
    u: !1,
    o: !1,
    E: 2147483647,
    x: null,
    g: null,
    b: null,
    l: !1,
    h: 2147483647,
    t: 2147483647,
    k: 2147483647,
    v: 2147483647,
    F: function(n) {
        this.o = n;
        this.o || this.q();
        return n
    },
    i: function(n) {
        this.g = n;
        this.N(n ? this.s(n).Id : null);
        return n
    },
    N: function(n) {
        if (this.b === n) return n;
        this.b && !this.l && _h.d.a().c(this.b);
        this.b = n;
        this.l = !0;
        if (this.b && _h.d.a().d(this.b)) {
            this.l = !1;
            _h.d.a().e(this.b)
        }
        return n
    },
    B: function(n, t) {
        this.G(n, t);
        this.k !== 2147483647 && this.O(t, n.Id)
    },
    f: function(n, t) {
        if (this.u && this.d.length < this.E) {
            if (t) {
                this.m(n) && Array.remove(this.d, n);
                Array.insert(this.d, 0, n)
            } else Array.add(this.d, n);
            this.q()
        }
    },
    w: function(n, t) {
        Array.remove(this.d, n);
        var i = this.s(n);
        if (i.Id in this.e) {
            _h.d.a().c(i.Id);
            delete this.e[i.Id]
        }
        for (var r = 0; r < this.c.length; r++)
            if (this.c[r] === i.Id) {
                Array.removeAt(this.c, r);
                break
            }
        t || this.M(i.Id)
    },
    z: function() {
        if (this.j) {
            this.j = !1;
            var t = this.e;
            for (var r in t) {
                var i = {
                    key: r,
                    value: t[r]
                };
                _h.d.a().c(i.key);
                delete this.e[i.key]
            }
            Array.clear(this.c);
            for (var n = this.a.length - 1; n >= 0; n--) {
                _h.d.a().c(this.a[n]);
                Array.removeAt(this.a, n)
            }
        }
    },
    Q: function() {
        if (!this.j) {
            this.j = !0;
            this.q()
        }
    },
    m: function(n) {
        return Array.contains(this.d, n)
    },
    D: function() {
        this.z();
        this.i(null)
    },
    P: function(n, t, i, r) {
        this.h = n;
        this.t = t;
        this.k = i;
        this.v = r
    },
    q: function() {
        if (!this.n && !this.o && !this.I) {
            while (this.d.length > 0) {
                var n = this.d[0];
                if (!this.j && n !== this.g) return;
                Array.removeAt(this.d, 0);
                var i = this.s(n);
                if (this.x(n) || i.Id in this.e) {
                    var t = _h.d.a().a(i.Id);
                    t || (t = this.H(i, n));
                    this.G(i, t);
                    var r = this;
                    if (this.L(t, n, function() {
                            _j.m.a().d(_a.a.O, "Prefetch", function() {
                                r.n = !1;
                                r.o || r.q()
                            })
                        })) {
                        this.n = !0;
                        return
                    }
                }
            }
            this.n = !1
        }
    },
    K: function() {
        try {
            var n = new _a.I(_a.w.b(window.location.href));
            this.u = !n.f() && !n.d() && !n.p()
        } catch (t) {}
    },
    O: function(n, t) {
        if (this.k !== 2147483647) {
            for (var i = 0, i = 0; i < this.a.length; i++)
                if (this.a[i] === t) break;
            if (i < this.a.length) {
                Array.removeAt(this.a, i);
                Array.insert(this.a, 0, t)
            } else {
                _h.d.a().d(t) ? _h.d.a().e(t) : _h.d.a().b(t, n);
                Array.insert(this.a, 0, t);
                this.a.length > this.k && _j.m.a().d(this.C(), "PrefetchHelper->TrimRecentlyUsedList", this.A)
            }
        }
    },
    M: function(n) {
        for (var t = 0; t < this.a.length; t++)
            if (this.a[t] === n) {
                _h.d.a().c(n);
                Array.removeAt(this.a, t);
                break
            }
    },
    R: function() {
        if (!(this.a.length <= this.k))
            for (var n = this.a.length - 1; n >= this.v; n--) {
                var t = this.a[n];
                Array.removeAt(this.a, n);
                _h.d.a().c(t)
            }
    },
    G: function(n, t) {
        if (!(n.Id in this.e)) {
            _h.d.a().d(n.Id) ? _h.d.a().e(n.Id) : _h.d.a().b(n.Id, t);
            this.e[n.Id] = t;
            this.h !== 2147483647 && Array.add(this.c, n.Id);
            this.h !== 2147483647 && this.c.length > this.h && _j.m.a().d(this.C(), "PrefetchHelper->EvictPrefetchedItems", this.y);
            if (this.l && this.b && this.b === n.Id) {
                _h.d.a().e(n.Id);
                this.l = !1
            }
        }
    },
    J: function() {
        if (this.h !== 2147483647 && !(this.c.length < this.h))
            for (var r = this.c.length - this.t, i = 0; i < r; i++) {
                var n = _ff.p.a(0, this.c.length - 2);
                var t = this.c[n];
                _h.d.a().c(t);
                delete this.e[t];
                Array.removeAt(this.c, n)
            }
    }
};
_h.dY = function(n, t, i) {
    this.a = n;
    this.c = t;
    this.d = i;
    this.b = 0
};
_h.dY.prototype = {
    c: null,
    a: null,
    b: 0,
    d: null
};
_h.eQ = function(n, t) {
    this.f = Function.createDelegate(this, this.j);
    this.a = new _j.q;
    this.d = n;
    this.e = t
};
_h.eQ.prototype = {
    a: null,
    d: null,
    e: null,
    b: null,
    h: !1,
    dispose: function() {
        this.c();
        this.d = null;
        this.e = null
    },
    i: function(n) {
        this.g(n.c, n.a.EventType);
        if (this.a.d.length >= 5 || n.b >= 3) {
            this.c();
            this.e();
            return
        }
        this.a.c(n);
        this.b || this.h || (this.b = _j.m.a().a(_a.a.F, "Dequeue notification on delay", this.f, 2e3))
    },
    c: function() {
        this.b = _j.m.a().b(this.b);
        this.a.f()
    },
    g: function(n, t) {
        for (var i = 0; i < this.a.d.length; i++)
            if (this.a.d[i].c === n && (this.a.d[i].a.EventType === t || t === "RowModified")) {
                this.a.j(i);
                return
            }
    },
    j: function() {
        this.b = null;
        if (this.a.d.length) {
            var n = this.a.d[0];
            n.b = n.b + 1;
            this.a.n(n);
            this.d(n) ? this.a.d.length > 0 && !this.h && (this.b = _j.m.a().a(_a.a.F, "Dequeue notification on delay", this.f, 2e3)) : this.i(n)
        }
    }
};
_h.z = function(n, t, i, r, u, f, e, o, s) {
    this.b = new _g.S;
    this.b.NotificationType = "RowNotification";
    _g.N.isInstanceOfType(n.b()) || (this.b.FolderId = n.b().Id);
    this.b.IsConversation = t;
    this.b.SortBy = i;
    this.b.Filter = r;
    this.b.CategoryFilter = u;
    this.b.FocusedViewFilter = f;
    this.b.ConversationShapeName = e;
    this.b.subscriptionIdSuffix = o;
    this.b.GroupBy = s;
    this.b.ChannelId = _no.a.a
};
_h.z.j = function() {
    return !!_h.z.a
};
_h.z.b = function() {
    _h.z.c || (_h.z.c = new _j.q);
    return _h.z.c
};
_h.z.k = function() {
    if (_h.z.a) {
        _j.m.a().b(_h.z.a);
        _h.z.a = null
    }
    _h.z.a = _j.m.a().a(_a.a.dD, "ResumeRowNotificationProcessing", _h.z.g, _h.z.e)
};
_h.z.g = function() {
    if (_h.z.a) {
        _j.m.a().b(_h.z.a);
        _h.z.a = null
    }
    _h.z.l()
};
_h.z.m = function(n, t) {
    if (!_h.eO.isImplementedBy(n)) {
        _j.e.c(n.bD(), "RowNotificationStrategy is being passed a table that does not support row-notifications. This should never happen.");
        return !1
    }
    var i = n;
    if (_h.z.j()) {
        _h.z.i(i, t);
        return !1
    }
    return _h.z.d(i, t)
};
_h.z.d = function(n, t) {
    switch (t.EventType) {
        case "RowDeleted":
            return n.bu(t);
        case "RowAdded":
            return n.bt(t);
        case "RowModified":
            return n.bv(t);
        case "QueryResultChanged":
            n.bs();
            return !0;
        default:
            n.bl();
            return !0
    }
};
_h.z.l = function() {
    for (var n = 0; n < _h.z.b().d.length; n++) {
        var t = _h.z.b().d[n];
        var r = t.a;
        var i = t.d;
        _h.z.d(i, r)
    }
    _h.z.b().f()
};
_h.z.i = function(n, t) {
    var r = new _h.dY(t, "", n);
    _h.z.b().c(r);
    if (_h.z.b().d.length > _h.z.f) {
        var i = _h.z.h();
        _h.z.d(i.d, i.a)
    }
};
_h.z.h = function() {
    if (_h.z.b().d.length > 0) {
        var n = _h.z.b().d[0];
        _h.z.b().j(0);
        return n
    }
    return null
};
_h.z.prototype = {
    b: null,
    a: function() {
        return this.b
    },
    d: function() {
        return _a.a.F
    },
    e: function() {
        return "RowNotificationStrategy"
    },
    c: function() {
        return 1
    },
    f: function(n, t) {
        if (!t.bM) {
            var r = n;
            var i = t.d();
            t.cl(5);
            t.cw(!0);
            _h.z.m(t, r);
            t.cw(i)
        }
    }
};
_h.eR = function() {
    this.b = new _g.S;
    this.b.NotificationType = "SearchNotification"
};
_h.eR.a = function(n) {
    var r = [];
    if (n.HighlightTerms)
        for (var u = n.HighlightTerms, f = u.length, t = 0; t < f; ++t) {
            var e = u[t];
            var i = new _g.cf;
            i.a(e);
            Array.add(r, i)
        }
    return r
};
_h.eR.prototype = {
    b: null,
    a: function() {
        return this.b
    },
    d: function() {
        return _a.a.D
    },
    c: function() {
        return 2
    },
    f: function(n, t) {
        var r = n;
        var i = this.h(t);
        if (i && t.v() && r.IsComplete && r.ClientId === i.h && i.g !== 250) {
            if (i.e === 5) return;
            var f = this.i(r);
            var u = _h.eR.a(r);
            t.ba(f, u)
        }
    }
};
_h.dV = function(n) {
    _h.dV.initializeBase(this);
    this.g = n
};
_h.dV.prototype = {
    g: null,
    e: function() {
        return Object.getType(this.g).toString()
    },
    i: function(n) {
        return new _h.dL(n.Conversations)
    },
    h: function(n) {
        if (_h.de.isInstanceOfType(n)) return n.c();
        if (_h.E.isInstanceOfType(n)) return n.r();
        throw Error.argumentOutOfRange("table", Object.getType(n), "Allowed types are " + _h.de + " or " + _h.E);
    }
};
_h.eP = function(n) {
    _h.eP.initializeBase(this);
    this.g = n
};
_h.eP.prototype = {
    g: null,
    e: function() {
        return Object.getType(this.g).toString()
    },
    i: function(n) {
        return new _h.cs(n.MessageItems)
    },
    h: function(n) {
        if (_h.bJ.isInstanceOfType(n)) return n.c();
        if (_h.F.isInstanceOfType(n)) return n.r();
        throw Error.argumentOutOfRange("table", Object.getType(n), "Allowed types are " + _h.bJ + " or " + _h.F);
    }
};
_h.bL = function(n, t, i) {
    _a.c.a(n, "condition");
    _a.c.e(i, 1, Number.MAX_VALUE, "rowCount");
    this.a = n;
    this.b = t;
    this.c = i
};
_h.bL.prototype = {
    a: null,
    b: 0,
    c: 0
};
_h.dZ = function(n) {
    this.i = _h.dZ.$$(this.$$gta["_h.dZ"].T).a + "_";
    if (_g.s.isInstanceOfType(n)) {
        var t = n;
        this.i += t.Id;
        t.Mailbox && (this.i += "_" + t.Mailbox.EmailAddress)
    } else this.i += n.Id;
    this.j = n
};
_h.dZ.$$ = function(n) {
    var u = _h.__tc = _h.__tc || {};
    var i = "dZ" + "$" + n.getName().replace(/\./g, "_");
    if (!u[i]) {
        var t = u[i] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _h.dZ.apply(this, t)
        };
        t.registerClass("_h.__tc." + i, null, _h.fK);
        var o = {
            "_h.dZ": {
                T: n
            },
            ctor: _h.dZ
        };
        t.prototype.$$gta = o;
        var e = _h.dZ.prototype;
        for (var f in e) {
            var r = {
                key: f,
                value: e[f]
            };
            "constructor" !== r.key && (t.prototype[r.key] = r.value)
        }
        t.a = n.getName()
    }
    return u[i]
};
_h.dZ.prototype = {
    i: null,
    j: null,
    b: function() {
        return this.j
    },
    a: function() {
        return this.i
    }
};
_h.dE = function() {};
_h.dE.registerInterface("_h.dE");
_h.n = function() {};
_h.n.registerInterface("_h.n");
_h.dg = function() {};
_h.dg.registerInterface("_h.dg");
_h.dN = function() {};
_h.dN.registerInterface("_h.dN");
_h.dS = function(n, t, i) {
    this.h = new Array(0);
    _h.dS.$$(this.$$gta["_h.dS"].TContext, this.$$gta["_h.dS"].TRequest, this.$$gta["_h.dS"].TResponse, this.$$gta["_h.dS"].TResponseMessage).initializeBase(this, [n, t, i])
};
_h.dS.$$ = function(n, t, i, r) {
    var o = _h.__tc = _h.__tc || {};
    var u = "dS" + "$" + n.getName().replace(/\./g, "_") + "$" + t.getName().replace(/\./g, "_") + "$" + i.getName().replace(/\./g, "_") + "$" + r.getName().replace(/\./g, "_");
    if (!o[u]) {
        var e = o[u] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _h.dS.apply(this, t)
        };
        var c = _h.dT.$$(n, i);
        e.registerClass("_h.__tc." + u, c);
        var a = {
            "_h.dS": {
                TContext: n,
                TRequest: t,
                TResponse: i,
                TResponseMessage: r
            },
            ctor: _h.dS
        };
        var v = c.prototype.$$gta;
        for (var y in v) {
            var l = {
                key: y,
                value: v[y]
            };
            a[l.key] = l.value
        }
        e.prototype.$$gta = a;
        var s = _h.dS.prototype;
        for (var h in s) {
            var f = {
                key: h,
                value: s[h]
            };
            "constructor" !== f.key && (e.prototype[f.key] = f.value)
        }
    }
    return o[u]
};
_h.dS.prototype = {
    g: function() {
        return this.c.request.parameters || null
    },
    p: function() {
        if (this.c.response.statusCode === 200) {
            var i = this.k();
            if (!i) throw Error.invalidOperation(this.f + " received an unexpected null response.");
            var r = i.Body;
            if (!r) throw Error.invalidOperation(this.f + " returned an unexpected null response body. The response is: " + JSON.stringify(i));
            var n = r;
            if (n.ResponseCode && n.ResponseClass) this.h = [n];
            else {
                var t = r.ResponseMessages;
                if (t) {
                    var u = t.Items;
                    this.h = u ? u : t
                } else this.h = new Array(0)
            }
            this.r()
        } else {
            this.x();
            _h.dT.prototype.p.call(this)
        }
        this.o()
    },
    j: function(n, t) {
        t.ResponseClass !== "Success" && this.s()
    },
    r: function() {
        for (var n = 0; n < this.h.length; n++) {
            var t = this.h[n];
            var i = "Processing response message {0}: {1} {2} {3} ";
            t.ResponseClass === "Success" || (i += this.q(n, t));
            this.j(n, t)
        }
    },
    q: function(n, t) {
        return ""
    },
    o: function() {},
    x: function() {}
};
_h.CreateItemResponseProcessor = function(n, t) {
    _h.CreateItemResponseProcessor.initializeBase(this, [n, t, _h.CreateItemResponseProcessor.g])
};
_h.CreateItemResponseProcessor.e = function(n) {
    _h.CreateItemResponseProcessor.a.addHandler("CreateItemResponseMessageSuccess", n);
    _h.L.a.a("CreateItemResponseMessageSuccess", n)
};
_h.CreateItemResponseProcessor.c = function(n) {
    _h.CreateItemResponseProcessor.a.removeHandler("CreateItemResponseMessageSuccess", n);
    _h.L.a.b("CreateItemResponseMessageSuccess", n)
};
_h.CreateItemResponseProcessor.f = function(n) {
    _h.CreateItemResponseProcessor.a.addHandler("CreateItemResponseMessageFailure", n);
    _h.L.a.a("CreateItemResponseMessageFailure", n)
};
_h.CreateItemResponseProcessor.i = function(n) {
    _h.CreateItemResponseProcessor.a.removeHandler("CreateItemResponseMessageFailure", n);
    _h.L.a.b("CreateItemResponseMessageFailure", n)
};
_h.CreateItemResponseProcessor.d = function(n) {
    var t = "CreateItemResponseCompleted";
    _h.CreateItemResponseProcessor.a.addHandler(t, n);
    _h.L.a.a(t, n)
};
_h.CreateItemResponseProcessor.b = function(n) {
    var t = "CreateItemResponseCompleted";
    _h.CreateItemResponseProcessor.a.removeHandler(t, n);
    _h.L.a.b(t, n)
};
_h.CreateItemResponseProcessor.h = function(n, t, i) {
    var r = null;
    n === "Success" ? r = "CreateItemResponseMessageSuccess" : n === "Error" && (r = "CreateItemResponseMessageFailure");
    if (r) {
        var u = _h.CreateItemResponseProcessor.a.getHandler(r);
        u && u(t, i)
    }
};
_h.CreateItemResponseProcessor.prototype = {
    A: function() {
        return this.g().Body.SavedItemFolderId
    },
    j: function(n, t) {
        this.a() && this.a().itemIds && _h.CreateItemResponseProcessor.h(t.ResponseClass, new _h.cD(this.a(), n), t);
        _h.dS.prototype.j.call(this, n, t)
    },
    q: function(n, t) {
        if (this.a() && this.a().itemIds) {
            var i = this.a().itemIds[n];
            return " Id: " + i.Id + " ChangeKey: " + i.ChangeKey + " Disposition: " + this.g().Body.MessageDisposition
        } else return _h.dS.prototype.q.call(this, n, t)
    },
    o: function() {
        var n = _h.CreateItemResponseProcessor.a.getHandler("CreateItemResponseCompleted");
        n && n(this.c);
        _h.dS.prototype.o.call(this)
    }
};
_h.eH = function(n, t, i) {
    this.b = n;
    this.a = t;
    this.d = i
};
_h.eH.prototype = {
    b: null,
    a: null,
    d: null,
    c: function(n, t, i) {
        if (this.b) {
            var r = this;
            this.a.e(this.b, t, function(t) {
                t ? r.a.b(r.b, n) : r.e(n, i)
            }, null)
        }
    },
    e: function(n, t) {
        var i = this;
        this.a.e(this.b, n, function(r) {
            if (r) {
                t(r);
                var u = i.a.k(r.d());
                i.a.o(i.b, u, 2, null);
                i.a.b(i.b, n)
            }
        }, null)
    }
};
_h.cD = function(n, t) {
    this.a = n;
    this.b = t
};
_h.cD.prototype = {
    a: null,
    b: 0
};
_h.dT = function(n, t, i) {
    _h.dT.$$(this.$$gta["_h.dT"].TContext, this.$$gta["_h.dT"].TResponse).initializeBase(this, [n, t, i])
};
_h.dT.$$ = function(n, t) {
    var f = _h.__tc = _h.__tc || {};
    var i = "dT" + "$" + n.getName().replace(/\./g, "_") + "$" + t.getName().replace(/\./g, "_");
    if (!f[i]) {
        var u = f[i] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _h.dT.apply(this, t)
        };
        var s = _g.kU;
        u.registerClass("_h.__tc." + i, s);
        var h = {
            "_h.dT": {
                TContext: n,
                TResponse: t
            },
            ctor: _h.dT
        };
        u.prototype.$$gta = h;
        var o = _h.dT.prototype;
        for (var e in o) {
            var r = {
                key: e,
                value: o[e]
            };
            "constructor" !== r.key && (u.prototype[r.key] = r.value)
        }
    }
    return f[i]
};
_h.dT.prototype = {
    b: null,
    l: function() {
        return !!this.b
    },
    a: function() {
        return this.c.request.actionContext || null
    },
    k: function() {
        if (this.c.response.statusCode === 200) return this.c.response.result || (this.$$gta["_h.dT"].TResponse === Number || Type.isEnum(this.$$gta["_h.dT"].TResponse) ? 0 : this.$$gta["_h.dT"].TResponse === Boolean ? !1 : null);
        else throw Error.invalidOperation(this.c.request.methodName + " response is only available when status is OK (200). StatusCode: " + this.c.response.statusCode);
    },
    A: function() {
        return null
    },
    d: function() {
        return this.e.d()
    },
    n: function(n, t) {
        var i = this,
            u = this,
            r = this;
        if (!this.C("ResponseProcessor." + this.B(), function(n) {
                i.b = n;
                i.p()
            }, function() {
                u.b = null;
                n()
            }, function(n) {
                r.b = null;
                var i = Error.create(n.a, n);
                t(i)
            })) {
            this.p();
            n()
        }
    },
    p: function() {
        this.c.response.fault && this.s()
    },
    s: function() {
        var t = this.A();
        if (t) {
            var n = t.BaseFolderId;
            _h.c.i(_h.E, n);
            _h.c.i(_h.F, n)
        }
    },
    C: function(n, t, i, r) {
        if (this.e.t && this.e.t.c()) {
            this.d().v(n, t, i, r);
            return !0
        }
        return !1
    },
    B: function() {
        var n = "Unknown";
        this.c && (this.c.request && this.c.request.methodName ? n = this.c.request.methodName : this.c.response && this.c.response.result && (n = Object.getType(this.c.response.result).getName()));
        return n
    }
};
_h.dv = function() {};
_h.dv.registerInterface("_h.dv");
_h.eY = function() {};
_h.eY.registerInterface("_h.eY");
_h.cH = function() {};
_h.cH.registerInterface("_h.cH");
_h.fG = function() {};
_h.fG.registerInterface("_h.fG");
_h.k = function() {};
_h.k.f = function() {
    if (!_h.k.h) {
        var t = ["inbox", "drafts"];
        _h.k.h = new Array(t.length);
        for (var n = 0; n < t.length; n++) _h.k.h[n] = _g.b.a.nameToId(t[n]).Id
    }
    return _h.k.h
};
_h.k.k = function(n) {
    _h.k.j = !1;
    _h.k.g = 50;
    _h.k.d = 5;
    _h.k.e = 3;
    switch (n) {
        case "TouchNarrow":
            _h.k.a = 5;
            _h.k.c = 100;
            _h.k.b = 100;
            break;
        case "TouchWide":
            _h.k.a = 5;
            _h.k.c = 100;
            _h.k.b = 200;
            break;
        case "Mouse":
            _h.k.a = 5;
            _h.k.c = 160;
            _h.k.b = 200;
            break
    }
};
_h.k.l = function() {
    _h.k.i || (_h.k.i = ["msgfolderroot", "outbox", "deleteditems"]);
    return _h.k.i
};
_h.k.o = function(n) {
    return !Array.contains(_h.k.f(), n.bH.FolderId.Id) && !Array.contains(_h.k.l(), _g.b.a.idToName(n.bH.FolderId))
};
_h.k.n = function(n) {
    return Array.contains(_h.k.l(), _g.b.a.idToName(n))
};
_h.k.m = function(n) {
    return Array.contains(_h.k.f(), n.bH.FolderId.Id)
};
_h.B = function() {};
_h.B.$$cctor = function() {
    _h.B.g()
};
_h.B.g = function() {
    _h.B.a = !0;
    _h.B.f = 5;
    _h.B.d = 3;
    _h.B.c = 1e3;
    _h.B.e = 12e4;
    _h.B.b = new Array(3);
    _h.B.b[0] = 0;
    _h.B.b[1] = 144e5;
    _h.B.b[2] = 864e5
};
_h.cI = function() {};
_h.cI.registerInterface("_h.cI");

function BootModelsComponent() {}
BootModelsComponent.$$cctor = function() {
    _a.t.a().a(BootModelsComponent)
};
BootModelsComponent.prototype = {
    b: function(n, t, i) {
        var a = this;
        n.b(_h.br, function() {
            return _h.br.a(n.a(_j.o), n.a(_a.z))
        }).a().b(_h.bj);
        var l = this;
        n.b(_a.bn, function() {
            return _a.bn.a()
        }).b(_a.cy);
        var c = this;
        n.b(_h.di, function() {
            return new _h.di(n.a(_g.cC), n.a(_bc.B), n.a(_h.bj), i.a())
        }).a();
        var v = this;
        n.b(_h.cW, function() {
            return new _h.cW(n.a(_g.a), n.a(_j.j))
        }).a();
        var w = this;
        n.b(_h.s, function() {
            var t = new _h.s(n.a(_j.j), n.a(_h.bj), n.d(_h.dg), n.c(_h.dF), n.a(_a.de), i.j(), n.a(_a.E), n.d(_g.hD));
            _h.s.b(t);
            return t
        }).b(_h.Y).a();
        n.e(_h.eE).b(_bc.U);
        var p = this;
        n.b(_h.dP, function() {
            return new _h.dP(n.a(_a.cy))
        }).b(IPageDataPayloadLocalStorage);
        var y = this;
        n.b(_h.dQ, function() {
            return new _h.dQ(n.a(_bc.U), n.a(IPageDataPayloadLocalStorage), n.c(_bc.V), n.c(_bc.W), _a.A.a, n.a(_a.e))
        }).b(_bc.B).a();
        var f = this;
        n.b(_h.cL, function() {
            return new _h.cL(i.a(), n.a(_a.z).b(), n.a(_g.dW), n.a(_g.gP), n.a(_h.s), n.a(_a.e), n.a(_j.j), n.a(_j.v), n.a(_a.z), n.a(_a.cL))
        });
        var u = this;
        n.b(_h.cP, function() {
            return new _h.cP(i.a(), n.c(_h.P))
        });
        n.e(_g.ck).a();
        var r = this;
        n.b(_h.r, function() {
            return _h.r.a()
        }).a();
        var e = this;
        n.b(_h.dq, function() {
            var i = n.a(_a.q);
            var t = new _h.dq(i);
            var r = _h.bK.b(i);
            r.i = t;
            return t
        }).a();
        var h = this;
        n.b(_h.cQ, function() {
            return new _h.cQ(n.a(_a.q), n.a(_j.j), n.a(_j.v), n.a(_a.e), n.a(_a.z))
        });
        var s = this;
        n.b(_h.e, function() {
            return new _h.e
        }).a();
        var o = this;
        n.b(_j.cd.$$(_h.U), function() {
            return n.d(_h.U)
        }).a();
        i.a() !== "Mouse" && (_h.a.I = _h.a.H = 15);
        _h.h.c(n.a(_a.x), n.a(_j.j))
    },
    a: function() {
        return [new _j.y(_h.cL, 0, -1), new _j.y(_h.di, 0, -1), new _j.y(_h.cW, 1, 125), new _j.y(_h.r, 2, 9), new _j.y(_h.cQ, 1, 111), new _j.y(_h.cP, 2, 37)]
    }
};
_h.A = function() {
    this.i = Function.createDelegate(this, this.j);
    _h.A.initializeBase(this);
    this.d = []
};
_h.A.a = function() {
    _h.A.b || (_h.A.b = new _h.A);
    return _h.A.b
};
_h.A.prototype = {
    d: null,
    k: function(n) {
        this.bB("AvailabilityChanged", n)
    },
    n: function(n) {
        this.bF("AvailabilityChanged", n)
    },
    g: function() {
        return this.d.length > 0 && !this.e()
    },
    c: function(n) {
        if (!this.e()) {
            var t = this.d.pop();
            _h.co.isInstanceOfType(t) && t.a();
            this.d.push(n);
            this.bO("AvailabilityChanged", this.g())
        }
    },
    h: function() {
        var n = this.d.pop();
        this.bO("AvailabilityChanged", this.g());
        return n
    },
    j: function() {
        var n = this.a();
        if (n) {
            var t = _a.b.b(_a.a.cI, "MailUndo", !1, null);
            n.g() && this.h();
            t && this.m(n, t)
        }
    },
    b: function(n, t) {
        if (this.a())
            if (this.a().e(t)) this.a().b(n) ? this.a().i(n) : this.a().h();
            else if (this.a().d(t)) {
            var i = this.h();
            n ? i.k() : i.j()
        }
    },
    e: function() {
        return this.d.length > 0 && this.a().f()
    },
    f: function() {
        if (!this.e()) {
            var n = this.h();
            _h.co.isInstanceOfType(n) && n.a();
            this.bO("AvailabilityChanged", this.g())
        }
    },
    l: function() {
        return this.a() ? this.a().toString() : ""
    },
    a: function() {
        return this.d[0]
    },
    m: function(n, t) {
        var r = new _a.l;
        r = _h.g.b(r);
        var u = "Unknown";
        if (_h.cN.isInstanceOfType(n) || _h.dt.isInstanceOfType(n)) {
            var i = n.c();
            _h.ba.isInstanceOfType(i) || _h.bb.isInstanceOfType(i) ? u = _h.a.i() && _g.l.b(_h.a.i().bH.FolderId, _h.ba.isInstanceOfType(i) ? i.H() : i.r) ? "MailArchive" : "MailMove" : (_h.bF.isInstanceOfType(i) || _h.N.isInstanceOfType(i)) && (u = "MailDelete")
        }
        r.a("cmd", u);
        t.m = r.toString();
        _a.b.a(t)
    }
};
_h.cQ.registerClass("_h.cQ");
_h.cL.registerClass("_h.cL");
_h.cP.registerClass("_h.cP");
_h.ey.registerClass("_h.ey");
_h.cn.registerClass("_h.cn", _a.dn, _a.fF, _h.bR);
_h.fO.registerClass("_h.fO", _h.cn);
_h.bx.registerClass("_h.bx", _h.fO, _h.bR);
_h.fN.registerClass("_h.fN", _h.cn);
_h.dy.registerClass("_h.dy", _h.fN);
_h.bD.registerClass("_h.bD", _h.bx);
_h.bE.registerClass("_h.bE", _h.fN, _h.dH);
_h.be.registerClass("_h.be", _h.dx.$$(_g.io, _g.fS));
_h.fk.registerClass("_h.fk", _h.dx.$$(_g.fz, _g.dE), _h.eZ, IActionBase);
_h.bF.registerClass("_h.bF", _h.bx, _h.dE);
_h.bo.registerClass("_h.bo", _h.fN, _h.dH);
_h.eW.registerClass("_h.eW", _h.fO, _h.bR);
_h.N.registerClass("_h.N", _h.eW, _h.dE);
_h.bH.registerClass("_h.bH", _h.dx.$$(_g.eu, _g.fO), _a.fF);
_h.cd.registerClass("_h.cd", _h.bx, _h.dE);
_h.cK.registerClass("_h.cK", _h.dx.$$(_g.eT, _g.eU), _h.fd);
_h.bt.registerClass("_h.bt", _h.cK, _h.dE);
_h.dz.registerClass("_h.dz", _h.fN, _a.fF);
_h.cv.registerClass("_h.cv", _h.fN);
_h.em.registerClass("_h.em", _h.fN);
_h.bp.registerClass("_h.bp", _h.dx.$$(_g.gc, _g.fS), _a.fF);
_h.en.registerClass("_h.en", _h.fN);
_h.dB.registerClass("_h.dB", _h.dx.$$(_g.gc, _g.fS), _a.fF);
_h.eo.registerClass("_h.eo", _h.fN, _a.fF);
_h.cb.registerClass("_h.cb", _h.dx.$$(_g.ez, _g.dE));
_h.cY.registerClass("_h.cY", _h.cb);
_h.ep.registerClass("_h.ep", _h.fN, _a.fF);
_h.cw.registerClass("_h.cw", _h.fN, _a.fF);
_h.eq.registerClass("_h.eq", _h.dM.$$(Array));
_h.er.registerClass("_h.er", _h.dM.$$(Boolean));
_h.et.registerClass("_h.et", _h.dM.$$(Array));
_h.eu.registerClass("_h.eu", _h.dM.$$(Boolean));
_h.cZ.registerClass("_h.cZ", _h.bx, _h.dE);
_h.da.registerClass("_h.da", _h.fO, _h.dE);
_h.ew.registerClass("_h.ew", _h.fO);
_h.cB.registerClass("_h.cB", _h.bx, _h.dE);
_h.ba.registerClass("_h.ba", _h.bx, _h.dE);
_h.ch.registerClass("_h.ch", _h.ba, _h.dE);
_h.H.registerClass("_h.H", _h.cK, _h.dE);
_h.df.registerClass("_h.df", _h.fN, _h.dH);
_h.bb.registerClass("_h.bb", _h.eW, _h.dE);
_h.ez.registerClass("_h.ez", _h.dM.$$(Array));
_h.eA.registerClass("_h.eA", _h.dM.$$(Boolean));
_h.eB.registerClass("_h.eB", _h.fN);
_h.q.registerClass("_h.q", null, _j.L);
_h.dR.registerClass("_h.dR", _h.dx.$$(_g.jV, _g.fS));
_h.eJ.registerClass("_h.eJ", _h.bx, _h.dE);
_h.eK.registerClass("_h.eK", _h.fN);
_h.dU.registerClass("_h.dU", _h.cK, _h.dE);
_h.cG.registerClass("_h.cG", _h.bx);
_h.f.registerClass("_h.f", _h.fO);
_h.ea.registerClass("_h.ea", _h.dx.$$(_g.jV, _g.fS));
_h.bW.registerClass("_h.bW", _h.fN);
_h.fM.registerClass("_h.fM");
_h.b.V.registerClass("_h.b.V");
_h.m.registerClass("_h.m");
_h.bv.c.registerClass("_h.bv.c", _a.bt);
_h.dn.registerClass("_h.dn");
_h.cj.registerClass("_h.cj");
_h.ek.registerClass("_h.ek", _h.bH);
_h.dA.registerClass("_h.dA", _h.bp);
_h.bq.registerClass("_h.bq", _a.co);
_h.e.registerClass("_h.e");
_h.r.registerClass("_h.r", _j.S);
_h.bG.registerClass("_h.bG", null, _a.fE);
_h.cr.registerClass("_h.cr", null, _a.iM);
_h.eG.registerClass("_h.eG");
_h.dk.registerClass("_h.dk", _j.S, _h.fp, _j.bs, Sys.IDisposable);
_h.cm.registerClass("_h.cm", _a.dg);
_h.w.registerClass("_h.w", _a.co, _j.L);
_h.dq.registerClass("_h.dq", null, _a.q);
_h.ex.registerClass("_h.ex", _a.bt);
_h.eT.registerClass("_h.eT", _a.bt);
_h.cS.registerClass("_h.cS");
_h.cp.registerClass("_h.cp");
_h.bn.registerClass("_h.bn");
_h.cV.registerClass("_h.cV");
_h.ct.registerClass("_h.ct");
_h.bz.registerClass("_h.bz");
_h.bQ.registerClass("_h.bQ");
_h.dh.registerClass("_h.dh");
_h.bT.registerClass("_h.bT");
_h.bV.registerClass("_h.bV");
_h.bB.registerClass("_h.bB");
_h.bw.registerClass("_h.bw");
_h.bk.registerClass("_h.bk");
_h.bu.registerClass("_h.bu", _j.l);
_h.i.registerClass("_h.i", _a.co, _a.eh);
_h.Z.d.registerClass("_h.Z.d");
_h.es.registerClass("_h.es", null, _a.le);
_h.K.registerClass("_h.K", null, _a.lb, _no.m);
_h.cl.registerClass("_h.cl", null, _a.le);
_h.bU.registerClass("_h.bU", _h.K);
_h.br.registerClass("_h.br", null, _h.bj, _h.fv);
_h.ef.registerClass("_h.ef", _h.br);
_h.dO.registerClass("_h.dO", _j.bZ);
_h.s.registerClass("_h.s", null, Sys.IDisposable, _h.Y);
_h.eC.registerClass("_h.eC");
_h.eF.registerClass("_h.eF", _h.br);
_h.j.registerClass("_h.j", _a.co, _bc.v, _j.bs, Sys.IDisposable, _j.L);
_h.bN.registerClass("_h.bN", _h.fO);
_h.el.registerClass("_h.el", _h.fN);
_h.dC.registerClass("_h.dC", _h.fN);
_h.eI.registerClass("_h.eI", _h.dx.$$(_g.jV, _g.fS));
_h.eU.registerClass("_h.eU", _h.fN);
_h.bO.registerClass("_h.bO");
_h.cq.registerClass("_h.cq");
_h.R.registerClass("_h.R");
_h.dl.registerClass("_h.dl");
_h.cC.registerClass("_h.cC");
_h.dm.registerClass("_h.dm");
_h.W.registerClass("_h.W", null, _j.L);
_h.X.registerClass("_h.X", _h.W);
_h.eE.registerClass("_h.eE", null, _bc.U);
_h.dP.registerClass("_h.dP", null, IPageDataPayloadLocalStorage);
_h.dQ.registerClass("_h.dQ", null, _bc.B);
_h.cE.registerClass("_h.cE");
_h.cW.registerClass("_h.cW");
_h.di.registerClass("_h.di");
_h.ca.registerClass("_h.ca", _h.fN);
_h.eX.registerClass("_h.eX", null, _h.eV);
_h.dt.registerClass("_h.dt", _h.eX);
_h.cM.registerClass("_h.cM", _h.dt);
_h.cN.registerClass("_h.cN", _h.eX);
_h.cO.registerClass("_h.cO", _h.dt);
_h.bm.registerClass("_h.bm", _h.dx.$$(_g.ev, _g.fR), _h.fc);
_h.bc.registerClass("_h.bc", _h.dx.$$(_g.ex, _g.fZ));
_h.M.registerClass("_h.M", _h.cb);
_h.ee.registerClass("_h.ee", _h.M);
_h.cR.registerClass("_h.cR", _h.dx.$$(_g.ez, _g.dE));
_h.cc.registerClass("_h.cc", _h.dx.$$(_g.er, _g.et), _a.fF, _h.fc);
_h.bM.registerClass("_h.bM", _h.dx.$$(_g.jB, _g.jD));
_h.ej.registerClass("_h.ej", _j.S);
_h.eh.registerClass("_h.eh");
_h.ei.registerClass("_h.ei");
_h.fL.registerClass("_h.fL", _j.bZ, _h.bP);
_h.dK.registerClass("_h.dK", _h.fL);
_h.ck.registerClass("_h.ck");
EntityTypeProcessorLevelSettings.registerClass("EntityTypeProcessorLevelSettings");
_h.ds.registerClass("_h.ds", _ff.e);
_h.bZ.registerClass("_h.bZ", _ff.e);
_h.bl.registerClass("_h.bl", _g.kT);
_h.u.registerClass("_h.u", _j.S, _h.bP, _h.eN, _j.bs, Sys.IDisposable);
_h.a.registerClass("_h.a", _h.u);
_h.cu.registerClass("_h.cu", _h.dZ.$$(_h.a));
_h.S.registerClass("_h.S", _h.a);
_h.p.registerClass("_h.p", _h.a);
_h.eL.registerClass("_h.eL", _j.S);
_h.eM.registerClass("_h.eM");
_h.o.registerClass("_h.o");
_h.dp.registerClass("_h.dp", _h.fL);
_h.u.c.registerClass("_h.u.c");
_h.dX.registerClass("_h.dX");
_h.eQ.registerClass("_h.eQ", null, Sys.IDisposable);
_h.z.registerClass("_h.z");
_h.eR.registerClass("_h.eR");
_h.dV.registerClass("_h.dV", _h.eR);
_h.eP.registerClass("_h.eP", _h.eR);
_h.bL.registerClass("_h.bL");
_h.CreateItemResponseProcessor.registerClass("_h.CreateItemResponseProcessor", _h.dS.$$(_g.hk, _g.dx, _g.fz, _g.dE));
_h.eH.registerClass("_h.eH");
_h.cD.registerClass("_h.cD");
BootModelsComponent.registerClass("BootModelsComponent", null, _a.kj, _j.ce);
_h.A.registerClass("_h.A", _j.S);
_h.t.d = "{0}@{1}";
_h.bx.b = new _a.f("FolderId", _g.m, _h.bx);
_h.bx.a = new _a.f("Conversations", Array, _h.bx);
_h.bD.a = new _a.f("DestinationFolderId", _g.m, _h.bD);
_h.bD.b = new _a.f("ItemIds", Array, _h.bD);
_h.be.b = new _a.f("FolderTable", _h.a, _h.be);
_h.be.a = new _a.f("FolderName", String, _h.be);
_h.bo.a = new _a.f("Folder", _g.j, _h.bo);
_h.bo.b = new _a.f("FolderTable", _h.a, _h.bo);
_h.cv.a = new _a.cn;
_h.H.a = null;
_h.H.b = null;
_h.ba.a = new _a.f("DestinationFolderId", _g.m, _h.ba);
_h.bh.d = "rejectErrorCode";
_h.bh.c = "originalException";
_h.bh.e = "__type";
_h.bh.b = "message";
_h.PDPInit.$$cctor();
_h.f.d = null;
_h.f.c = null;
_h.cn.a = "Exchange2013";
_h.b.F = "ConversationLastDeliveryOrRenewTime";
_h.b.U = "ReceivedOrRenewTime";
_h.b.C = null;
_h.b.n = null;
_h.b.D = null;
_h.b.B = null;
_h.b.i = null;
_h.b.s = null;
_h.b.j = null;
_h.b.t = null;
_h.b.c = null;
_h.b.E = null;
_h.b.u = null;
_h.b.o = null;
_h.b.v = 0;
_h.b.w = 0;
_h.b.b = "ConversationLastDeliveryTime";
_h.b.e = "DateTimeReceived";
_h.b.p = -1;
_h.b.z = null;
_h.b.y = null;
_h.b.A = null;
_h.b.m = null;
_h.b.r = [];
_h.b.k = null;
_h.bv.b = {};
_h.e.c = "#666666";
_h.e.a = "#FFFFFF";
_h.e.d = [
    ["#212121", "#ED616F", "#F07D88", "#EE9EA6", "#FADFE3", "#FDF2F4"],
    ["#212121", "#FB6F25", "#FF8C00", "#FDA351", "#FDE5D3", "#FEF4ED"],
    ["#212121", "#E1B46D", "#FECB6F", "#FDD591", "#EEE2D8", "#F8F4F0"],
    ["#212121", "#FCD146", "#FFF100", "#FEF25D", "#FBF4CF", "#FDFAE7"],
    ["#212121", "#56A659", "#5FBE7D", "#97D49E", "#DCF1DE", "#F1F9F2"],
    ["#212121", "#3FA296", "#33BAB1", "#70CFC8", "#D4F5F2", "#ECFAF9"],
    ["#212121", "#82A034", "#A3B367", "#BECC7F", "#EAF0D3", "#F4F8E9"],
    ["#212121", "#3096D0", "#55ABE5", "#88C4ED", "#DDF3FE", "#ECF8FE"],
    ["#212121", "#8C82D0", "#A895E2", "#C9BCFD", "#E6E0FF", "#F5F2FF"],
    ["#212121", "#D475A7", "#E48BB5", "#F99BCC", "#FBE4F1", "#FDF3F9"],
    ["#212121", "#9BA9BC", "#B9C0CB", "#C6CDD8", "#E2E6EC", "#F3F5F7"],
    [_h.e.a, "#343E4F", "#4C596E", "#687384", "#E2E6EC", "#F3F5F7"],
    ["#212121", "#969696", "#ABABAB", "#BFBFBF", "#EEEEEE", "#F7F7F7"],
    [_h.e.a, "#4F4F4F", "#666666", "#8F8F8F", "#EEEEEE", "#F7F7F7"],
    [_h.e.a, "#212121", "#474747", "#5C5C5C", "#EEEEEE", "#F7F7F7"],
    [_h.e.a, "#62030D", "#910A19", "#9B3845", "#FADFE3", "#FDF2F4"],
    [_h.e.a, "#BC2E1B", "#CE4B28", "#DE6346", "#FDE5D3", "#FEF4ED"],
    [_h.e.a, "#7C592E", "#996E36", "#B28F57", "#EEE2D8", "#F8F4F0"],
    ["#212121", "#9B9137", "#B0A923", "#DFD557", "#FBF4CF", "#FDFAE7"],
    [_h.e.a, "#0E440E", "#026802", "#107C10", "#DCF1DE", "#F1F9F2"],
    [_h.e.a, "#143F43", "#1C6367", "#216B6D", "#D4F5F2", "#ECFAF9"],
    [_h.e.a, "#384F11", "#5C6A22", "#607241", "#EAF0D3", "#F4F8E9"],
    [_h.e.a, "#011738", "#254069", "#0D3268", "#DDF3FE", "#ECF8FE"],
    [_h.e.a, "#1E0D3B", "#562685", "#6E4A9C", "#E6E0FF", "#F5F2FF"],
    [_h.e.a, "#5B0743", "#80275D", "#A33E89", "#FBE4F1", "#FDF3F9"]
];
_h.r.b = _a.a.eC;
_h.r.d = null;
_h.r.e = {};
_h.r.g = _h.r.i();
_h.r.f = null;
_h.w.j = new _a.f("Subject", String, _h.w);
_h.w.c = new _a.f("JoinOnlineMeetingUrl", String, _h.w);
_h.w.d = new _a.f("Location", String, _h.w);
_h.w.h = new _a.f("ReminderTime", _a.d, _h.w);
_h.w.i = new _a.f("StartDate", _a.d, _h.w);
_h.w.a = new _a.f("EndDate", _a.d, _h.w);
_h.w.b = new _a.f("ItemId", _g.e, _h.w);
_h.w.e = new _a.f("RecurringMasterItemId", _g.e, _h.w);
_h.w.f = new _a.f("ReminderGroup", _g.jx, _h.w);
_h.w.g = new _a.f("ReminderGroups", _g.jy, _h.w);
_h.J.a = "PublicStrings";
_h.l.e = null;
_h.l.d = null;
_h.i.k = new _a.f("Id", _g.e, _h.i);
_h.i.d = new _a.f("ChatState", _h.eg, _h.i);
_h.i.a = new _a.f("ParticipantPersonas", _j.l, _h.i);
_h.i.c = new _a.f("Subject", String, _h.i);
_h.i.h = new _a.f("Preview", String, _h.i);
_h.i.b = new _a.f("Status", String, _h.i, "&nbsp;");
_h.i.j = new _a.f("BodyText", String, _h.i, "<div></div>");
_h.i.g = new _a.f("LyncConversationId", Number, _h.i, -1);
_h.i.e = new _a.f("SessionEnded", Boolean, _h.i, !1);
_h.i.v = new _a.f("LastMessage", String, _h.i, "");
_h.i.f = new _a.f("LastMessageAriaLabel", String, _h.i, "");
_h.i.u = "ItemOrConversationId";
_h.i.o = "MailItem";
_h.i.n = "MailConversation";
_h.i.m = "LastMessage";
_h.i.l = "LastMessageAriaLabel";
_h.i.p = "sip:";
_h.i.r = "\r\n                <div class='imMessage'>\r\n                    <div>\r\n                        <span class='imSender ms-font-color-themePrimary ms-font-weight-regular'>{0}</span>\r\n                        <span class='imSentTime ms-font-color-themePrimary ms-font-weight-semilight'>{1}</span>\r\n                    </div>\r\n                    <div class='imBody ms-font-color-neutralPrimary ms-font-weight-regular'>{2}</div>\r\n                </div>";
_h.i.t = "\r\n                <div class='imMessage'>\r\n                    <div>\r\n                        <span class='imMe ms-font-weight-regular ms-font-color-black'>{0}</span>\r\n                        <span class='imSentTime ms-font-weight-semilight ms-font-color-black'>{1}</span>\r\n                    </div>\r\n                    <div class='imBody ms-font-color-neutralPrimary ms-font-weight-regular'>{2}</div>\r\n                </div>";
_h.i.s = "<div class='imNotificationMessage ms-font-weight-regular ms-font-color-neutralSecondary'>{0}</div>";
_h.i.q = "<div class='imErrorMessage ms-font-weight-regular'>{0}</div>";
_h.i.i = [_h.i.b, _h.i.d, _h.i.a];
_h.i.$$cctor();
_h.Z.b = null;
_h.V.f = {
    "ipm.note": {
        MailReplied: 3,
        MailForwarded: 4,
        MailIrm: 5,
        MailIrmReplied: 6,
        MailIrmForwarded: 7
    },
    "ipm.note.irm": {
        MailIrmReplied: 6,
        MailReplied: 6,
        MailIrmForwarded: 7,
        MailForwarded: 7,
        Default: 5
    },
    "ipm.note.microsoft.exchange.voice.um.ca": {
        MailForwarded: 10,
        MailReplied: 9,
        Default: 8
    },
    "ipm.note.microsoft.exchange.voice.um": {
        MailForwarded: 10,
        MailReplied: 9,
        Default: 8
    },
    "ipm.note.microsoft.voicemail.um.ca": {
        MailForwarded: 10,
        MailReplied: 9,
        Default: 8
    },
    "ipm.note.microsoft.voicemail.um": {
        MailForwarded: 10,
        MailReplied: 9,
        Default: 8
    },
    "ipm.note.rpmsg.microsoft.voicemail.um.ca": {
        MailReplied: 11,
        Default: 11
    },
    "ipm.note.rpmsg.microsoft.voicemail.um": {
        MailReplied: 11,
        Default: 11
    },
    "ipm.note.microsoft.exchange.fax.ca": {
        Default: 12
    },
    "ipm.note.microsoft.exchange.fax.um.ca": {
        Default: 12
    },
    "ipm.note.microsoft.fax.ca": {
        Default: 12
    },
    "ipm.appointment": {
        Default: 13
    },
    "ipm.schedule.meeting.request": {
        Default: 13
    },
    "ipm.schedule.meeting.canceled": {
        AppointmentMeetCancel: 17,
        Default: 17
    },
    "ipm.contact": {
        Default: 18
    },
    "ipm.distlist": {
        Default: 18
    },
    "ipm.task": {
        TaskRecur: 20,
        TaskItem: 19,
        TaskOwned: 19,
        TaskDelegated: 19,
        Default: 19
    },
    "ipm.activity": {
        Default: 21
    },
    "ipm.post": {
        Default: 22
    },
    "ipm.stickynote": {
        Default: 23
    },
    "report.ipm.note.ndr": {
        Default: 25
    },
    "report.ipm.ndr": {
        Default: 25
    },
    "report.ipm.note.mobile.sms.ndr": {
        Default: 25
    },
    "report.ipm.schedule.meeting.resp.neg.ndr": {
        Default: 25
    },
    "report.ipm.schedule.meeting.resp.pos.ndr": {
        Default: 25
    },
    "report.ipm.schedule.meeting.resp.tent.ndr": {
        Default: 25
    },
    "report.ipm.TaskRequest.ndr": {
        Default: 25
    },
    "report.ipm.oof.ndr": {
        Default: 25
    },
    "report.report.ipm.note.ipnnrn.ndr": {
        Default: 25
    },
    "report.ipm.note.smime.ndr": {
        Default: 25
    },
    "report.ipm.note.smime.multipartsigned.ndr": {
        Default: 25
    },
    "report.ipm.note.dr": {
        Default: 24
    },
    "report.ipm.dr": {
        Default: 24
    },
    "report.ipm.schedule.meeting.request.dr": {
        Default: 24
    },
    "report.ipm.note.smime.dr": {
        Default: 24
    },
    "report.ipm.note.smime.multipartsigned.dr": {
        Default: 24
    },
    "ipm.note.microsoft.approval.request": {
        Default: 26
    },
    "ipm.note.microsoft.approval.reply.approve": {
        Default: 27
    },
    "ipm.note.microsoft.approval.reply.reject": {
        Default: 28
    },
    "ipm.note.rules.ooftemplate.microsoft": {
        Default: 29
    },
    "report.ipm.note.ipnrn": {
        Default: 30
    },
    "ipm.note.reminder.event": {
        Default: 31
    }
};
_h.V.a = {
    "ipm.schedule.meeting.resp.pos": {
        AppointmentMeetYes: 14,
        Default: 14
    },
    "ipm.schedule.meeting.resp.tent": {
        AppointmentMeetMaybe: 16,
        Default: 16
    },
    "ipm.schedule.meeting.resp.neg": {
        AppointmentMeetNo: 15,
        Default: 15
    }
};
_h.bK.a = null;
_h.cl.a = new _h.cl;
_h.dO.a = _a.a.bx;
_h.s.a = null;
_h.j.d = null;
_h.j.h = null;
_h.j.c = null;
_h.j.e = !1;
_h.j.f = [];
_h.j.$$cctor();
_h.L.a = new _h.L;
_h.O.a = null;
_h.O.c = !1;
_h.bM.a = new _g.d("DateTimeReceived");
_h.v.a = null;
_h.v.c = null;
_h.v.b = null;
_h.c.l = {};
_h.d.b = null;
_h.h.b = null;
_h.x.c = null;
_h.a.I = 35;
_h.a.H = 150;
_h.a.L = !1;
_h.a.t = _h.a.getName();
_h.a.C = _h.a.t + ".FavoritesCollection";
_h.a.D = _h.a.t + ".FolderMruCollection";
_h.a.N = _h.a.t + ".RootFolderTableQuery.";
_h.a.K = _h.a.t + ".SharedFolderRoots.";
_h.a.s = ["msgfolderroot", "publicfoldersroot", "archivemsgfolderroot", "recoverableitemsroot"];
_h.a.Z = ["deleteditems", "drafts", "inbox", "junkemail", "notes", "sentitems"];
_h.a.v = ["inbox", "drafts", "sentitems", "deleteditems"];
_h.a.B = ["inbox", "deleteditems", "junkemail"];
_h.a.o = {};
_h.a.c = !1;
_h.a.k = !1;
_h.a.n = !1;
_h.S.d = _h.S.getName();
_h.S.b = _h.S.d + ".RootFolderTableQuery.";
_h.p.a = null;
_h.p.f = !1;
_h.p.c = null;
_h.p.e = null;
_h.p.d = {};
_h.u.b = !1;
_h.u.a = null;
_h.D.c = 15e3;
_h.D.b = null;
_h.z.e = 5e3;
_h.z.f = 10;
_h.z.c = null;
_h.z.a = null;
_h.CreateItemResponseProcessor.g = _a.a.dP;
_h.CreateItemResponseProcessor.a = new Sys.EventHandlerList;
_h.k.j = !1;
_h.k.e = 0;
_h.k.c = 0;
_h.k.b = 0;
_h.k.a = 0;
_h.k.g = 0;
_h.k.d = 0;
_h.k.h = null;
_h.k.i = null;
_h.B.a = !1;
_h.B.f = 0;
_h.B.d = 0;
_h.B.c = 0;
_h.B.b = null;
_h.B.e = 0;
_h.B.$$cctor();
BootModelsComponent.$$cctor();
_h.A.b = null;
Type.registerNamespace("_y");
_y.ka = function() {};
_y.ka.registerInterface("_y.ka");
_y.eF = function() {};
_y.dB = function(n, t) {
    this.a = n;
    this.b = t
};
_y.dB.prototype = {
    a: 0,
    b: !1
};
_y.jY = function() {};
_y.jY.registerInterface("_y.jY");
_y.jZ = function() {};
_y.jZ.registerInterface("_y.jZ");
_y.jV = function() {};
_y.jV.registerInterface("_y.jV");
_y.jW = function() {};
_y.jW.registerInterface("_y.jW");
_y.jX = function() {};
_y.jX.registerInterface("_y.jX");
_y.cE = function() {};
_y.cE.registerInterface("_y.cE");
_y.gx = function() {};
_y.gx.registerInterface("_y.gx");
_y.gg = function() {};
_y.gg.registerInterface("_y.gg");
_y.kM = function() {};
_y.bJ = function() {};
_y.bJ.registerInterface("_y.bJ");
_y.iy = function() {};
_y.iy.registerInterface("_y.iy");
_y.hW = function() {};
_y.hW.registerInterface("_y.hW");
_y.gh = function() {};
_y.gh.registerInterface("_y.gh");
_y.cm = function() {};
_y.cm.registerInterface("_y.cm");
_y.hQ = function() {};
_y.hQ.registerInterface("_y.hQ");
_y.jv = function() {};
_y.jv.registerInterface("_y.jv");
_y.gu = function() {};
_y.gu.registerInterface("_y.gu");
_y.gC = function() {};
_y.gC.registerInterface("_y.gC");
_y.kC = function() {};
_y.ki = function() {};
_y.ki.registerInterface("_y.ki");
_y.fj = function() {};
_y.fj.registerInterface("_y.fj");
_y.kQ = function() {};
_y.kQ.registerInterface("_y.kQ");
_y.kS = function() {};
_y.kS.registerInterface("_y.kS");
_y.kr = function() {};
_y.kr.registerInterface("_y.kr");
_y.go = function() {};
_y.go.registerInterface("_y.go");
_y.kt = function() {};
_y.kt.registerInterface("_y.kt");
_y.gr = function() {};
_y.gr.registerInterface("_y.gr");
_y.eT = function() {};
_y.eT.registerInterface("_y.eT");
var IInfoBarMessageWithActionViewModel = function() {};
IInfoBarMessageWithActionViewModel.registerInterface("IInfoBarMessageWithActionViewModel");
var IInfoBarMessageSimpleViewModel = function() {};
IInfoBarMessageSimpleViewModel.registerInterface("IInfoBarMessageSimpleViewModel");
var IInfoBarMessageViewModel = function() {};
IInfoBarMessageViewModel.registerInterface("IInfoBarMessageViewModel");
var IInfoBarMessageForComplexContentViewModel = function() {};
IInfoBarMessageForComplexContentViewModel.registerInterface("IInfoBarMessageForComplexContentViewModel");
var IInfoBarViewModel = function() {};
IInfoBarViewModel.registerInterface("IInfoBarViewModel");
_y.kj = function() {};
_y.kj.registerInterface("_y.kj");
var IFeedbackPopupViewModel = function() {};
IFeedbackPopupViewModel.registerInterface("IFeedbackPopupViewModel");
_y.iL = function() {};
_y.iL.registerInterface("_y.iL");
_y.ft = function() {};
_y.ft.registerInterface("_y.ft");
_y.kZ = function() {};
_y.kZ.registerInterface("_y.kZ");
_y.bU = function() {};
_y.bU.registerInterface("_y.bU");
_y.eq = function() {};
_y.eq.registerInterface("_y.eq");
_y.kW = function() {};
_y.kW.registerInterface("_y.kW");
_y.ej = function() {};
_y.ej.registerInterface("_y.ej");
var IMessageListAdsReadingPaneViewModel = function() {};
IMessageListAdsReadingPaneViewModel.registerInterface("IMessageListAdsReadingPaneViewModel");
_y.kn = function() {};
_y.kn.registerInterface("_y.kn");
_y.kq = function() {};
_y.kq.registerInterface("_y.kq");
var IFolderTreeViewModel = function() {};
IFolderTreeViewModel.registerInterface("IFolderTreeViewModel");
_y.cP = function() {};
_y.cP.registerInterface("_y.cP");
_y.fc = function() {};
_y.fc.registerInterface("_y.fc");
_y.dQ = function() {};
_y.dQ.registerInterface("_y.dQ");
_y.gD = function() {};
_y.gD.registerInterface("_y.gD");
_y.fe = function() {};
_y.fe.registerInterface("_y.fe");
_y.ko = function() {};
_y.ko.registerInterface("_y.ko");
_y.hN = function() {};
_y.hN.registerInterface("_y.hN");
_y.eP = function() {};
_y.eP.registerInterface("_y.eP");
var IIsHidden = function() {};
IIsHidden.registerInterface("IIsHidden");
_y.eZ = function() {};
_y.eZ.registerInterface("_y.eZ");
_y.gM = function() {};
_y.gM.registerInterface("_y.gM");
var IAdsbarViewModel = function() {};
IAdsbarViewModel.registerInterface("IAdsbarViewModel");
_y.hR = function() {};
_y.hR.registerInterface("_y.hR");
_y.cO = function() {};
_y.cO.registerInterface("_y.cO");
_y.lc = function() {};
_y.lc.registerInterface("_y.lc");
_y.gs = function() {};
_y.gs.registerInterface("_y.gs");
_y.gm = function() {};
_y.gm.registerInterface("_y.gm");
_y.kl = function() {};
_y.kl.registerInterface("_y.kl");
_y.hL = function() {};
_y.hL.registerInterface("_y.hL");
_y.iC = function() {};
_y.iC.registerInterface("_y.iC");
_y.lb = function() {};
_y.lb.registerInterface("_y.lb");
_y.bC = function() {};
_y.bC.registerInterface("_y.bC");
_y.ii = function() {};
_y.ii.registerInterface("_y.ii");
_y.hZ = function() {};
_y.hZ.registerInterface("_y.hZ");
var IReportPhishDialogViewModel = function() {};
IReportPhishDialogViewModel.registerInterface("IReportPhishDialogViewModel");
_y.iD = function() {};
_y.iD.registerInterface("_y.iD");
_y.cS = function() {};
_y.cS.registerInterface("_y.cS");
_y.jA = function() {};
_y.jA.registerInterface("_y.jA");
_y.eN = function() {};
_y.eN.prototype = {
    none: 0,
    owaOptionsSetOOFMessage: 1,
    owaOptionsSetSignature: 2,
    owaOptionsSetThemes: 3,
    owaRecoverDeletedItems: 21,
    owaConfigureDeletedItemsRetention: 22,
    owaCalendarSharing: 31,
    owaCalendarSharingPolicy: 32,
    test: 1e4
};
_y.eN.registerEnum("_y.eN", !1);
_y.ly = function() {};
_y.ly.registerInterface("_y.ly");
_y.lE = function() {};
_y.lE.registerInterface("_y.lE");
_y.iJ = function() {};
_y.iJ.registerInterface("_y.iJ");
_y.kh = function() {};
_y.kh.registerInterface("_y.kh");
_y.ia = function() {};
_y.ia.registerInterface("_y.ia");
_y.kw = function() {};
_y.kx = function() {};
_y.kD = function() {};
_y.kJ = function() {};
_y.kv = function() {};
_y.kv.registerInterface("_y.kv");
_y.fo = function() {};
_y.fo.registerInterface("_y.fo");
_y.hG = function() {};
_y.hG.prototype = {
    userInput: 0,
    undo: 1,
    autoLink: 2,
    linkPreview: 3,
    emoji: 4,
    inlineImage: 5,
    paste: 6,
    system: 7,
    mentions: 8,
    cut: 9,
    hashtags: 10,
    extensibility: 11,
    availableTime: 12,
    smartSuggestions: 13,
    composeUpgrade: 14
};
_y.hG.registerEnum("_y.hG", !1);
_y.ky = function() {};
_y.kz = function() {};
_y.kA = function() {};
_y.kB = function() {};
_y.kE = function() {};
_y.kF = function() {};
_y.kH = function() {};
_y.kI = function() {};
_y.kK = function() {};
_y.kL = function() {};
_y.co = function() {};
_y.co.registerInterface("_y.co");
_y.fa = function() {};
_y.fa.registerInterface("_y.fa");
_y.ls = function() {};
_y.ls.registerInterface("_y.ls");
_y.fm = function() {};
_y.fm.registerInterface("_y.fm");
_y.fn = function() {};
_y.fn.registerInterface("_y.fn");
_y.fl = function() {};
_y.fl.registerInterface("_y.fl");
_y.ku = function() {};
_y.kG = function() {};
_y.lm = function() {};
_y.lm.registerInterface("_y.lm");
_y.lp = function() {};
_y.lp.registerInterface("_y.lp");
_y.hX = function() {};
_y.hX.registerInterface("_y.hX");
_y.g = function() {};
_y.g.registerInterface("_y.g");
_y.gf = function() {};
_y.gf.registerInterface("_y.gf");
_y.hK = function() {};
_y.hK.registerInterface("_y.hK");
_y.hO = function() {};
_y.hO.registerInterface("_y.hO");
_y.kp = function() {};
_y.kp.registerInterface("_y.kp");
_y.eX = function() {};
_y.eX.registerInterface("_y.eX");
var IHashtagTreeViewModel = function() {};
IHashtagTreeViewModel.registerInterface("IHashtagTreeViewModel");
_y.eh = function() {};
_y.eh.registerInterface("_y.eh");
_y.eY = function() {};
_y.eY.registerInterface("_y.eY");
var ITagViewModel = function() {};
ITagViewModel.registerInterface("ITagViewModel");
_y.hY = function() {};
_y.hY.registerInterface("_y.hY");
_y.kT = function() {};
_y.kT.registerInterface("_y.kT");
_y.lC = function() {};
_y.lC.registerInterface("_y.lC");
_y.jw = function() {};
_y.jw.registerInterface("_y.jw");
_y.lA = function() {};
_y.lA.registerInterface("_y.lA");
var IDelayedSendEvent = function() {};
IDelayedSendEvent.registerInterface("IDelayedSendEvent");
var IIsShowingComposeInReadingPaneEvent = function() {};
IIsShowingComposeInReadingPaneEvent.registerInterface("IIsShowingComposeInReadingPaneEvent");
var ISendFailedO365Event = function() {};
ISendFailedO365Event.registerInterface("ISendFailedO365Event");
var ISendFailureRemoveO365Event = function() {};
ISendFailureRemoveO365Event.registerInterface("ISendFailureRemoveO365Event");
_y.gw = function() {};
_y.gw.registerInterface("_y.gw");
_y.iB = function() {};
_y.iB.registerInterface("_y.iB");
_y.ih = function() {};
_y.ih.registerInterface("_y.ih");
_y.jy = function() {};
_y.jy.registerInterface("_y.jy");
_y.ld = function() {};
_y.ld.registerInterface("_y.ld");
_y.il = function() {};
_y.il.registerInterface("_y.il");
_y.lt = function() {};
_y.gJ = function() {};
_y.gJ.registerInterface("_y.gJ");
_y.lu = function() {};
_y.lv = function() {};
_y.lv.registerInterface("_y.lv");
_y.iF = function() {};
_y.iF.registerInterface("_y.iF");
_y.lz = function() {};
_y.lz.registerInterface("_y.lz");
_y.gL = function() {};
_y.gL.registerInterface("_y.gL");
_y.iK = function() {};
_y.iK.registerInterface("_y.iK");
_y.iR = function() {};
_y.iR.prototype = {
    searchMyGroupsButton: 0,
    groupPersonaInSearchSuggestion: 1
};
_y.iR.registerEnum("_y.iR", !1);
_y.em = function() {};
_y.em.registerInterface("_y.em");
_y.bK = function() {};
_y.bK.registerInterface("_y.bK");
_y.gT = function() {};
_y.gT.prototype = {
    none: 0,
    bookingPage: 1
};
_y.gT.registerEnum("_y.gT", !1);
var ISharePointOneDriveProviderItemViewModelFactory = function() {};
ISharePointOneDriveProviderItemViewModelFactory.registerInterface("ISharePointOneDriveProviderItemViewModelFactory");
_y.jx = function() {};
_y.jx.registerInterface("_y.jx");
_y.dI = function() {};
_y.dI.registerInterface("_y.dI");
_y.kY = function() {};
_y.kY.registerInterface("_y.kY");
_y.dl = function() {};
_y.dl.registerInterface("_y.dl");
_y.jt = function() {};
_y.jt.registerInterface("_y.jt");
var ICalendarModernGroupsProvider = function() {};
ICalendarModernGroupsProvider.registerInterface("ICalendarModernGroupsProvider");
_y.bn = function() {};
_y.bn.prototype = {
    noError: 0,
    genericError: 1,
    fileReadError: 2,
    sizeExceeded: 3,
    imageTypeNotSupported: 4,
    groupsDocumentUrlNotFound: 5,
    groupSharePointNotProvisioned: 6,
    groupGenericError: 7
};
_y.bn.registerEnum("_y.bn", !1);
_y.kk = function() {};
_y.kk.registerInterface("_y.kk");
_y.eO = function() {};
_y.eO.registerInterface("_y.eO");
_y.gk = function() {};
_y.gk.registerInterface("_y.gk");
_y.gl = function() {};
_y.gl.registerInterface("_y.gl");
_y.jK = function() {};
_y.jK.prototype = {
    classic: 0,
    modernMail: 1,
    modernGroup: 2
};
_y.jK.registerEnum("_y.jK", !1);
_y.km = function() {};
_y.km.registerInterface("_y.km");
_y.dG = function() {};
_y.dG.registerInterface("_y.dG");
_y.be = function() {};
_y.be.registerInterface("_y.be");
_y.bT = function() {};
_y.bT.registerInterface("_y.bT");
var IDocumentAttachmentViewModel = function() {};
IDocumentAttachmentViewModel.registerInterface("IDocumentAttachmentViewModel");
_y.gq = function() {};
_y.gq.registerInterface("_y.gq");
_y.cN = function() {};
_y.cN.registerInterface("_y.cN");
_y.hM = function() {};
_y.hM.registerInterface("_y.hM");
_y.gv = function() {};
_y.gv.registerInterface("_y.gv");
var IModernItemAttachmentPopOutFactory = function() {};
IModernItemAttachmentPopOutFactory.registerInterface("IModernItemAttachmentPopOutFactory");
_y.B = function() {};
_y.B.registerInterface("_y.B");
_y.bS = function() {};
_y.bS.registerInterface("_y.bS");
_y.X = function() {};
_y.X.prototype = {
    defaultComponent: -1,
    cacheHitRate: 1,
    taskRunnerHistory: 2,
    instantSearch: 3,
    notificationHistory: 4,
    tracingDiagnostics: 5,
    requestHistory: 6,
    notificationSubcriptions: 7,
    offlineModuleDiagnostics: 8,
    offlineDiagnostics: 9,
    notificationQueue: 10,
    flightConfiguration: 11,
    versioningDiagnostics: 12,
    taskRunnerSummary: 13,
    requestSummary: 14,
    disposeTracker: 15,
    overview: 16,
    reflowSummary: 17,
    recipientCacheData: 18,
    pendingGetHistory: 19,
    groupUnseenActivityHistory: 20
};
_y.X.registerEnum("_y.X", !1);
_y.kV = function() {};
_y.ig = function() {};
_y.ig.registerInterface("_y.ig");
_y.fF = function() {};
_y.fF.prototype = {
    older: 1,
    lastMonth: 2,
    earlierThisMonth: 4,
    threeWeeksAgo: 8,
    twoWeeksAgo: 16,
    lastWeek: 32,
    sunday: 64,
    monday: 128,
    tuesday: 256,
    wednesday: 512,
    thursday: 1024,
    friday: 2048,
    saturday: 4096,
    nextWeek: 8192,
    twoWeeksAway: 16384,
    threeWeeksAway: 32768,
    laterThisMonth: 65536,
    nextMonth: 131072,
    beyondNextMonth: 262144,
    yesterday: 524288,
    today: 1048576,
    tomorrow: 2097152,
    none: 4194304,
    pinned: 8388608,
    all: 16777215
};
_y.fF.registerEnum("_y.fF", !0);
_y.js = function() {};
_y.js.prototype = {
    None: -1,
    Mail: 0,
    Calendar: 1,
    Contacts: 2,
    Tasks: 3,
    InferenceMailSuggestionsLearnMore: 4,
    OptionsMobile: 5,
    PeopleView: 6,
    OUG: 7,
    DocCollab: 8,
    Smime: 9,
    ModernAttachments: 10,
    LicenseAssign: 11,
    Hashtag: 12,
    FocusedInbox: 13,
    AutomaticReplies: 100,
    AutoProvisionFailed: 101,
    CalendarOptions: 102,
    ConfigureRegionAndMobileOperator: 103,
    ConnectedAccounts: 104,
    csvExportContactsWizardLearnMore: 105,
    CSVImportContactsWizard: 106,
    editInboxRule: 107,
    EditSmsAccount: 108,
    EmailSignature: 109,
    HomePageOptions: 110,
    InboxRules: 111,
    JunkEmailConfiguration: 112,
    JunkReporting: 113,
    MailMessaging: 114,
    MessageList: 115,
    MobileDevice: 116,
    MyExtensions: 117,
    ProtocolSettings: 118,
    OwaOptionsDefault: 119,
    OwaOptionsChangePassword: 120,
    RegionalSettings: 121,
    SelectRetentionPolicyTags: 122,
    TextMessaging: 123,
    VoiceMail: 124,
    OwaOfflineSettings: 125,
    ResourceScheduling: 126,
    KeyboardShortcuts: 127,
    ReplySettings: 128,
    MessageSafety: 129,
    LinkPreview: 130,
    InboxRulesStopProcessing: 131,
    MailSwipeActions: 132,
    MailQuickActions: 133
};
_y.js.registerEnum("_y.js", !1);
_y.cA = function() {};
_y.cA.registerInterface("_y.cA");
_y.gn = function() {};
_y.gn.registerInterface("_y.gn");
_y.dH = function() {};
_y.dH.registerInterface("_y.dH");
_y.eQ = function() {};
_y.eQ.registerInterface("_y.eQ");
_y.gp = function() {};
_y.gp.registerInterface("_y.gp");
_y.cB = function() {};
_y.cB.registerInterface("_y.cB");
_y.dM = function() {};
_y.dM.registerInterface("_y.dM");
_y.eW = function() {};
_y.eW.registerInterface("_y.eW");
_y.eU = function() {};
_y.eU.registerInterface("_y.eU");
_y.cb = function() {};
_y.cb.registerInterface("_y.cb");
_y.cC = function() {};
_y.cC.registerInterface("_y.cC");
var IInstantSearchRefinerManager = function() {};
IInstantSearchRefinerManager.registerInterface("IInstantSearchRefinerManager");
_y.lq = function() {};
_y.lq.registerInterface("_y.lq");
_y.iE = function() {};
_y.iE.registerInterface("_y.iE");
_y.le = function() {};
_y.le.registerInterface("_y.le");
_y.cc = function() {};
_y.cc.registerInterface("_y.cc");
_y.jz = function() {};
_y.jz.registerInterface("_y.jz");
_y.lk = function() {};
_y.lk.registerInterface("_y.lk");
_y.kX = function() {};
_y.kX.registerInterface("_y.kX");
_y.fg = function() {};
_y.fg.registerInterface("_y.fg");
_y.fh = function() {};
_y.fh.registerInterface("_y.fh");
_y.iz = function() {};
_y.iz.registerInterface("_y.iz");
var IRefinerViewModel = function() {};
IRefinerViewModel.registerInterface("IRefinerViewModel");
_y.ep = function() {};
_y.ep.registerInterface("_y.ep");
_y.C = function() {};
_y.C.registerInterface("_y.C");
var ISearchRefinerCategoryViewModel = function() {};
ISearchRefinerCategoryViewModel.registerInterface("ISearchRefinerCategoryViewModel");
_y.lr = function() {};
_y.lr.registerInterface("_y.lr");
_y.gI = function() {};
_y.gI.registerInterface("_y.gI");
_y.iG = function() {};
_y.iG.registerInterface("_y.iG");
_y.cp = function() {};
_y.cp.registerInterface("_y.cp");
_y.ic = function() {};
_y.ic.registerInterface("_y.ic");
_y.id = function() {};
_y.id.registerInterface("_y.id");
_y.gt = function() {};
_y.gt.registerInterface("_y.gt");
_y.br = function() {};
_y.br.registerInterface("_y.br");
_y.lB = function() {};
_y.lB.registerInterface("_y.lB");
_y.ct = function() {};
_y.ct.prototype = {
    to: 0,
    cc: 1,
    bcc: 2
};
_y.ct.registerEnum("_y.ct", !1);
_y.a = function() {};
_y.a.registerInterface("_y.a");
_y.dk = function() {};
_y.dk.registerInterface("_y.dk");
_y.jF = function(n, t, i, r, u, f, e) {
    this.viewModel = n;
    if (_j.h.b(n)) throw Error.argumentNull("The view model name should not be null!");
    this.viewModelParams = t;
    this.popOutSize = i;
    this.context = r;
    this.popOutContextSymbol = u;
    this.target = f;
    this.preserveViewModelQueryParam = e
};
_y.cT = function() {};
_y.cT.registerInterface("_y.cT");
_y.iI = function() {};
_y.iI.registerInterface("_y.iI");
_y.jq = function() {};
_y.jq.prototype = {
    attachmentSizeExceeded: 9e3,
    numberOfAttachmentsExceeded: 9001,
    internalFormatError: 9002,
    invalidAttachmentId: 9003,
    invalidAttachmentPath: 9004,
    cannotAddAttachmentBeforeUpgrade: 9005,
    attachmentDeletedBeforeUploadCompletes: 9006,
    attachmentUploadGeneralFailure: 9007,
    attachmentToDeleteDoesNotExist: 9008,
    attachmentDeleteGeneralFailure: 9009,
    invalidEndTime: 9010,
    htmlSanitizationFailure: 9011,
    numberOfRecipientsExceeded: 9012,
    noValidRecipientsProvided: 9013,
    cursorPositionChanged: 9014,
    composeFormNotReadyForAttachments: 9015,
    invalidSelection: 9016,
    accessRestricted: 9017,
    genericTokenError: 9018,
    genericSettingsError: 9019,
    genericResponseError: 9020,
    saveError: 9021,
    messageInDifferentStoreError: 9022,
    duplicateNotificationKey: 9023,
    notificationKeyNotFound: 9024,
    numberOfNotificationsExceeded: 9025,
    persistedNotificationArrayReadError: 9026,
    persistedNotificationArraySaveError: 9027,
    cannotPersistPropertyInUnsavedDraftError: 9028,
    callSaveAsyncBeforeToken: 9029,
    invalidCommandIdError: 9031,
    ooeInvalidDataFormat: 2006,
    internalError: 5001,
    ooeSSOUnsupportedUserIdentity: 13003
};
_y.jq.registerEnum("_y.jq", !1);
_y.kO = function() {};
_y.kO.registerInterface("_y.kO");
_y.hV = function() {};
_y.hV.registerInterface("_y.hV");
_y.hU = function() {};
_y.hU.registerInterface("_y.hU");
_y.eS = function() {};
_y.eS.registerInterface("_y.eS");
_y.hP = function() {};
_y.hP.registerInterface("_y.hP");
_y.bB = function() {};
_y.bB.registerInterface("_y.bB");
_y.ef = function() {};
_y.ef.registerInterface("_y.ef");
_y.kR = function() {};
_y.kR.registerInterface("_y.kR");
var IInfoBarExtensibilityViewModel = function() {};
IInfoBarExtensibilityViewModel.registerInterface("IInfoBarExtensibilityViewModel");
_y.ju = function() {};
_y.ju.registerInterface("_y.ju");
_y.dP = function() {};
_y.dP.registerInterface("_y.dP");
_y.ek = function() {};
_y.ek.registerInterface("_y.ek");
_y.dL = function() {};
_y.dL.registerInterface("_y.dL");
_y.iv = function() {};
_y.iv.registerInterface("_y.iv");
_y.bL = function() {};
_y.bL.registerInterface("_y.bL");
_y.gN = function() {};
_y.gN.registerInterface("_y.gN");
_y.im = function() {};
_y.im.registerInterface("_y.im");
_y.t = function() {};
_y.t.registerInterface("_y.t");
_y.V = function() {};
_y.V.registerInterface("_y.V");
_y.ib = function() {};
_y.ib.registerInterface("_y.ib");
_y.eg = function() {};
_y.eg.registerInterface("_y.eg");
_y.iq = function() {};
_y.iq.registerInterface("_y.iq");
_y.is = function() {};
_y.is.registerInterface("_y.is");
_y.lf = function() {};
_y.lf.registerInterface("_y.lf");
_y.dO = function() {};
_y.dO.registerInterface("_y.dO");
_y.io = function() {};
_y.io.registerInterface("_y.io");
_y.lg = function() {};
_y.lg.registerInterface("_y.lg");
_y.fv = function() {};
_y.fv.prototype = {
    window: 0,
    readingPane: 1,
    quick: 2,
    deeplink: 3
};
_y.fv.registerEnum("_y.fv", !1);
_y.m = function() {};
_y.m.prototype = {
    newMail: 0,
    reply: 1,
    replyAll: 2,
    forward: 3,
    edit: 4,
    accept: 5,
    tentativelyAccept: 6,
    decline: 7,
    cancel: 8,
    approve: 9,
    reject: 10,
    newPost: 11,
    postReply: 12,
    postEdit: 13,
    reparent: 14,
    replyToBotMessage: 15,
    rehydrate: 16
};
_y.m.registerEnum("_y.m", !1);
var IQuickComposeViewModel = function() {};
IQuickComposeViewModel.registerInterface("IQuickComposeViewModel");
_y.eV = function() {};
_y.eV.registerInterface("_y.eV");
var IMailQuickComposeViewModel = function() {};
IMailQuickComposeViewModel.registerInterface("IMailQuickComposeViewModel");
var IInlineComposeConductorViewModel = function() {};
IInlineComposeConductorViewModel.registerInterface("IInlineComposeConductorViewModel");
_y.dK = function() {};
_y.dK.registerInterface("_y.dK");
_y.ip = function() {};
_y.ip.registerInterface("_y.ip");
_y.ie = function() {};
_y.ie.registerInterface("_y.ie");
_y.ir = function() {};
_y.ir.registerInterface("_y.ir");
var IQuickComposeContext = function() {};
IQuickComposeContext.registerInterface("IQuickComposeContext");
var IQuickComposeRecipientComponent = function() {};
IQuickComposeRecipientComponent.registerInterface("IQuickComposeRecipientComponent");
var IQuickComposeSendComponent = function() {};
IQuickComposeSendComponent.registerInterface("IQuickComposeSendComponent");
var IQuickComposeAttachmentComponent = function() {};
IQuickComposeAttachmentComponent.registerInterface("IQuickComposeAttachmentComponent");
var IQuickComposeDiscardComponent = function() {};
IQuickComposeDiscardComponent.registerInterface("IQuickComposeDiscardComponent");
var IQuickComposeUpconvertComponent = function() {};
IQuickComposeUpconvertComponent.registerInterface("IQuickComposeUpconvertComponent");
_y.gG = function() {};
_y.gG.registerInterface("_y.gG");
_y.gH = function() {};
_y.gH.registerInterface("_y.gH");
_y.gE = function() {};
_y.gE.registerInterface("_y.gE");
_y.gF = function() {};
_y.gF.registerInterface("_y.gF");
var IQuickComposeSendFailedEvent = function() {};
IQuickComposeSendFailedEvent.registerInterface("IQuickComposeSendFailedEvent");
var IQuickComposeSendFailureRemoveEvent = function() {};
IQuickComposeSendFailureRemoveEvent.registerInterface("IQuickComposeSendFailureRemoveEvent");
_y.it = function() {};
_y.it.registerInterface("_y.it");
var IItemPartPartnerViewModelFactory = function() {};
IItemPartPartnerViewModelFactory.registerInterface("IItemPartPartnerViewModelFactory");
_y.fb = function() {};
_y.fb.registerInterface("_y.fb");
var IItemReadingPaneContextFactory = function() {};
IItemReadingPaneContextFactory.registerInterface("IItemReadingPaneContextFactory");
_y.I = function() {};
_y.I.registerInterface("_y.I");
var IModernItemPartPartnerViewModelFactory = function() {};
IModernItemPartPartnerViewModelFactory.registerInterface("IModernItemPartPartnerViewModelFactory");
_y.el = function() {};
_y.el.registerInterface("_y.el");
_y.bp = function() {};
_y.bp.registerInterface("_y.bp");
_y.gy = function() {};
_y.gy.registerInterface("_y.gy");
_y.la = function() {};
_y.la.registerInterface("_y.la");
_y.lj = function() {};
_y.lj.registerInterface("_y.lj");
_y.ln = function() {};
_y.ln.registerInterface("_y.ln");
_y.bq = function() {};
_y.bq.registerInterface("_y.bq");
var IReminderMessageHeaderViewModel = function() {};
IReminderMessageHeaderViewModel.registerInterface("IReminderMessageHeaderViewModel");
var IReminderMessageViewModel = function() {};
IReminderMessageViewModel.registerInterface("IReminderMessageViewModel");
_y.hT = function() {};
_y.hT.registerInterface("_y.hT");
_y.ks = function() {};
_y.ks.registerInterface("_y.ks");
_y.kU = function() {};
_y.kU.registerInterface("_y.kU");
_y.lF = function() {};
_y.lF.registerInterface("_y.lF");
_y.dJ = function() {};
_y.dJ.registerInterface("_y.dJ");
_y.cQ = function() {};
_y.cQ.registerInterface("_y.cQ");
_y.ij = function() {};
_y.ij.registerInterface("_y.ij");
_y.bV = function() {};
_y.bV.registerInterface("_y.bV");
_y.cR = function() {};
_y.cR.registerInterface("_y.cR");
_y.gz = function() {};
_y.gz.registerInterface("_y.gz");
_y.lh = function() {};
_y.lh.registerInterface("_y.lh");
_y.li = function() {};
_y.li.registerInterface("_y.li");
_y.lw = function() {};
_y.lw.registerInterface("_y.lw");
_y.lx = function() {};
_y.lx.registerInterface("_y.lx");
_y.gK = function() {};
_y.gK.registerInterface("_y.gK");
var IBaseExtendedListViewModelFactory = function() {};
IBaseExtendedListViewModelFactory.registerInterface("IBaseExtendedListViewModelFactory");
_y.kN = function() {};
_y.kN.registerInterface("_y.kN");
_y.hS = function() {};
_y.hS.registerInterface("_y.hS");
_y.eR = function() {};
_y.eR.registerInterface("_y.eR");
_y.dN = function() {};
_y.dN.registerInterface("_y.dN");
_y.ik = function() {};
_y.ik.registerInterface("_y.ik");
_y.gi = function() {};
_y.gi.registerInterface("_y.gi");
_y.gj = function() {};
_y.gj.registerInterface("_y.gj");
_y.bw = function() {};
_y.bw.registerInterface("_y.bw");
_y.cn = function() {};
_y.cn.registerInterface("_y.cn");
_y.kP = function() {};
_y.kP.registerInterface("_y.kP");
_y.cD = function() {};
_y.cD.registerInterface("_y.cD");
_y.bD = function() {};
_y.bD.registerInterface("_y.bD");
_y.ei = function() {};
_y.ei.registerInterface("_y.ei");
_y.U = function() {};
_y.U.registerInterface("_y.U");
_y.Q = function() {};
_y.Q.registerInterface("_y.Q");
_y.dh = function() {};
_y.dh.registerInterface("_y.dh");
_y.fd = function() {};
_y.fd.registerInterface("_y.fd");
_y.gB = function() {};
_y.gB.registerInterface("_y.gB");
_y.ff = function() {};
_y.ff.registerInterface("_y.ff");
_y.bi = function() {};
_y.bi.registerInterface("_y.bi");
_y.dm = function() {};
_y.dm.registerInterface("_y.dm");
_y.dR = function() {};
_y.dR.registerInterface("_y.dR");
_y.ee = function() {};
_y.ee.registerInterface("_y.ee");
_y.fi = function() {};
_y.fi.registerInterface("_y.fi");
_y.iw = function() {};
_y.iw.registerInterface("_y.iw");
_y.ix = function() {};
_y.ix.registerInterface("_y.ix");
_y.dq = function() {};
_y.dq.prototype = {
    inline: 0,
    popup: 1
};
_y.dq.registerEnum("_y.dq", !1);
_y.f = function() {};
_y.f.prototype = {
    none: 0,
    shortcuts: 1,
    optionNotAvailable: 2,
    general: 50,
    myAccount: 100,
    password: 101,
    accountSettings: 110,
    theme: 150,
    keyboardShortcuts: 170,
    manageApps: 200,
    installAppWizard: 201,
    manageConnectors: 202,
    manageInClientStore: 203,
    distributionGroups: 222,
    mobileDevice: 250,
    mobileDeviceDetails: 251,
    recentActivity: 290,
    offlineSettings: 300,
    offlineFolders: 301,
    accessibilityPreferences: 320,
    owaVersion: 350,
    passcode: 400,
    privacyAndTerms: 450,
    regional: 500,
    textMessaging: 550,
    setUpTextMessaging: 551,
    exportData: 552,
    mrsConnectedAccounts: 560,
    editMrsConnectedAccount: 561,
    addMrsConnectedAccount: 562,
    connections: 563,
    voiceMail: 600,
    callAnswering: 605,
    callAnsweringRuleEditor: 606,
    greetings: 610,
    playOrRecordGreetings: 611,
    voiceMailNotifications: 615,
    voiceAccess: 620,
    playOnPhone: 625,
    voiceMailPinReset: 630,
    voiceMailPreview: 635,
    changePhoto: 640,
    contentSubmission: 800,
    setupContentSubmission: 801,
    editContentSubmissionRule: 802,
    flightAndScriptVersion: 850,
    manageMailboxQuota: 860,
    manageAdGdprPreference: 861,
    managePayments: 862,
    mail: 1e3,
    automaticProcessing: 1050,
    automaticReplies: 1055,
    clutter: 1060,
    inboxRules: 1065,
    editInboxRule: 1066,
    junkReporting: 1070,
    markAsRead: 1075,
    messageOptions: 1080,
    readReceipts: 1085,
    replySettings: 1087,
    retentionPolicies: 1090,
    addRetentionPolicies: 1091,
    accounts: 1100,
    blockSenders: 1105,
    connectedAccounts: 1110,
    connectedAccountsDefaultReplyAddress: 1111,
    addConnectedAccount: 1112,
    editConnectedAccount: 1113,
    forwarding: 1115,
    defaultFromAddress: 1116,
    popAndImap: 1120,
    junkEmail: 1130,
    safeSendersList: 1131,
    safeRecipientsList: 1132,
    blockedSendersList: 1133,
    blockedSendersAndDomainsList: 1134,
    mailLayout: 1150,
    conversations: 1155,
    mailSignatures: 1160,
    messageFormat: 1165,
    messageList: 1170,
    readingPane: 1175,
    categories: 1180,
    webSuggestedRepliesEnabledForUser: 1184,
    linkPreview: 1185,
    automaticHighlights: 1186,
    focusedInbox: 1187,
    smartSuggestions: 1188,
    agendaPane: 1189,
    attachmentOptions: 1190,
    attachmentPreferences: 1194,
    attachmentConnectedAccounts: 1198,
    mailDisplayOptions: 1200,
    deliveryReports: 1250,
    mailQuickActions: 1300,
    mailUndoOptions: 1350,
    smime: 1400,
    mailboxCleanup: 1450,
    setupOfflineSettings: 534,
    insightsSettings: 535,
    calendar: 2e3,
    calendarPersonalization: 2001,
    calendarAppearance: 2050,
    calendarAutomaticProcessing: 2051,
    birthdayCalendar: 2100,
    calendarProcessing: 2150,
    calendarNotifications: 2200,
    calendarNotificationsNarrow: 2201,
    calendarGeneralNotifications: 2202,
    calendarPublishing: 2250,
    sharedCalendars: 2251,
    calendarUpdates: 2252,
    calendarReminders: 2300,
    otherCalendars: 2301,
    weather: 2350,
    localEvents: 2351,
    resourceScheduling: 2400,
    connectedCalendars: 2500,
    eventsFromEmail: 2600,
    conversationalScheduling: 2601,
    agendaMail: 2602,
    people: 3e3,
    socialNetworks: 3050,
    facebookLaunchPanel: 3051,
    contactSync: 3150,
    importContacts: 3200,
    exportContacts: 3201
};
_y.f.registerEnum("_y.f", !1);
_y.fk = function() {};
_y.fk.registerInterface("_y.fk");
_y.en = function() {};
_y.en.registerInterface("_y.en");
_y.lD = function() {};
_y.lD.registerInterface("_y.lD");
_y.fs = function() {};
_y.fs.registerInterface("_y.fs");
_y.gA = function() {};
_y.gA.registerInterface("_y.gA");
_y.iu = function() {};
_y.iu.registerInterface("_y.iu");
_y.dj = function() {};
_y.dj.registerInterface("_y.dj");
_y.eo = function() {};
_y.eo.registerInterface("_y.eo");
_y.L = function() {};
_y.L.registerInterface("_y.L");
_y.M = function() {};
_y.M.registerInterface("_y.M");
_y.lo = function() {};
_y.jI = function(n, t, i) {
    this.popOutContextSymbol = t;
    this.serializedPopOutContext = i;
    this.viewModelFactoryDataType = n
};
_y.iA = function() {};
_y.iA.registerInterface("_y.iA");
_y.ca = function() {};
_y.ca.registerInterface("_y.ca");
_y.cd = function() {};
_y.cd.registerInterface("_y.cd");
_y.cF = function() {};
_y.cF.registerInterface("_y.cF");
_y.fp = function() {};
_y.fp.registerInterface("_y.fp");
_y.hF = function(n) {
    this.c = n
};
_y.hF.prototype = {
    c: null,
    a: function() {
        return this.c && this.c.a && this.c.a.a() ? this.c.a.a().bH.Url : ""
    },
    b: function() {
        return this.c && this.c.a ? this.c.g() : null
    }
};
_y.eG = function(n, t, i, r, u, f) {
    this.b = n;
    this.a = [
        [t, i]
    ];
    this.e = r;
    this.f = u;
    this.c = f
};
_y.eG.prototype = {
    c: 0,
    b: 0,
    a: null,
    e: 0,
    f: 0,
    g: function() {
        return this.a[0][0]
    },
    d: function() {
        return this.a[0][1]
    },
    h: function(n) {
        return this.c ? n ? this.c : this.b : 0
    }
};
_y.bg = function(n) {
    _y.bg.initializeBase(this);
    this.b = n;
    this.d()
};
_y.bg.c = function(n) {
    if (!_y.bg.a) {
        _y.bg.a = new _y.bg(n);
        _y.bg.b = !0
    }
};
_y.bg.prototype = {
    b: null,
    a: null,
    c: function() {
        return !!this.a
    },
    d: function() {
        var n = this;
        this.b.a(function(t) {
            n.a = t;
            n.eN("ModuleSwitcherViewModel", "IsModuleSwitcherReady")
        })
    }
};
_y.ha = function(n) {
    this.a = n
};
_y.ha.prototype = {
    a: 0
};
_y.eb = function(n) {
    this.a = n
};
_y.eb.prototype = {
    a: null
};
_y.fz = function(n) {
    this.a = n
};
_y.fz.prototype = {
    a: null
};
_y.bO = function(n) {
    this.a = n
};
_y.bO.prototype = {
    a: null
};
_y.fE = function(n) {
    this.a = n
};
_y.fE.prototype = {
    a: null
};
_y.hb = function(n) {
    this.a = n
};
_y.hb.prototype = {
    a: null
};
_y.bo = function() {};
_y.bb = function() {
    this.a = _g.a.a().a();
    this.b = _y.c.a
};
_y.bb.d = function() {
    _y.bb.c || (_y.bb.c = new _y.bb);
    return _y.bb.c
};
_y.bb.b = function(n) {
    switch (n) {
        case 1:
            return !(_y.bb.a(8) || _y.bb.e());
        case 2:
            return !_y.bb.a(16);
        case 3:
            return !_y.bb.a(32);
        case 4:
            return !_y.bb.a(128);
        case 7:
            return !_y.bb.a(512);
        case 14:
            return !_y.bb.a(65536);
        default:
            return !1
    }
};
_y.bb.a = function(n) {
    return (_y.bb.d().a.z() & n) === n
};
_y.bb.e = function() {
    return _y.bb.d().a.bH.HasShownIntroductionForModernGroups
};
_y.bb.prototype = {
    a: null,
    b: null
};
_y.bM = function(n) {
    this.a = n
};
_y.bM.prototype = {
    a: !1
};
_y.dg = function(n) {
    this.a = n
};
_y.dg.prototype = {
    a: 0
};
_y.bh = function(n, t, i, r, u, f) {
    this.o = Function.createDelegate(this, this.d);
    this.u = Function.createDelegate(this, this.x);
    this.l = Function.createDelegate(this, this.w);
    _y.bh.initializeBase(this);
    this.n = t;
    this.a = i;
    this.h = new _a.R;
    if (this.a) {
        this.a.bY(n, r, u, f);
        this.a.X(this.l)
    } else this.i("ShowSearchBoxForTouch", this.l);
    this.b = !1;
    this.f = !0;
    this.j = n;
    this.t = u;
    this.r = f;
    this.s = r;
    this.g = null;
    this.A(new _j.g(this.u, _y.bh.a, this.f))
};
_y.bh.prototype = {
    j: 0,
    t: null,
    r: null,
    s: null,
    n: null,
    a: null,
    g: null,
    b: !1,
    f: !1,
    k: null,
    m: null,
    h: null,
    e: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.a.i(this.b);
            this.eJ("IsSearchOn")
        }
        return n
    },
    z: function(n) {
        if (this.f !== n) {
            this.k.c(this.f = n);
            this.eJ("ShouldEnableSearch")
        }
        return n
    },
    A: function(n) {
        this.k = n;
        this.eJ("ShowSearchCommand");
        return n
    },
    c: function(n) {
        this.m = n;
        this.eJ("DefaultSearchText");
        return n
    },
    p: function(n) {
        this.apcl("SearchVM", n)
    },
    v: function(n) {
        this.rpcl("SearchVM", n)
    },
    y: function(n) {
        this.g !== n && (this.g = n);
        return n
    },
    d: function(n) {
        if (!this.a && this.n) {
            var t = this;
            this.n.a(function(i) {
                if (t.a !== i) {
                    t.a = i;
                    t.a.bY(t.j, t.s, t.t, t.r);
                    t.a.X(t.l);
                    for (var r = 0; r < t.h.b.length; r++) t.a.q(t.h.c(r).b, t.h.c(r).a);
                    t.g && t.g(t.a);
                    t.eJ("SearchVM")
                }
                n && n(t.a)
            })
        } else n && n(this.a)
    },
    i: function(n, t) {
        this.a ? this.a.q(n, t) : this.h.a(new _y.jp(n, t))
    },
    q: function() {
        this.e(!1);
        this.a && this.a.N()
    },
    x: function() {
        var n = this;
        this.d(function(t) {
            n.e(!0)
        })
    },
    w: function(n, t) {
        this.e(this.a.j())
    }
};
_y.jp = function(n, t) {
    this.b = n;
    this.a = t
};
_y.jp.prototype = {
    b: null,
    a: null
};
_y.fu = function() {};
_y.fx = function() {};
_y.jl = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k) {
    this.bk = Function.createDelegate(this, this.bG);
    _y.jl.initializeBase(this, [n, t, i, r, null, u, f, e, o, s, h, l, a, v, y, p, w, b, null, null, k]);
    this.E && this.by();
    if (c && r.a() === "Mouse") {
        var d = this;
        c.a(function(n) {
            var t = n.a();
            d.bF(t)
        })
    }
};
_y.jl.prototype = {
    bf: function(n) {
        if (n && n.x.length)
            for (var i = 0; i < n.x.length; i++) {
                var u = n.x[i];
                if (_y.Y.isInstanceOfType(u)) {
                    var t = u;
                    if (t.s) {
                        var r = this.x(t.z, t.p, t.n);
                        r.z === "msgfolderroot" && (this.c = r)
                    }
                }
            } else {
                this.c = this.x("msgfolderroot");
                this.c.S(this.bk)
            }
    },
    bz: function() {
        this.d.x.length > 0 ? this.d.t(1, this.m) : this.d.a(this.m)
    },
    bF: function(n) {
        n.c(new _j.g(this.bb, _a.a.v));
        n.d(this);
        n.b();
        this.d.a(n)
    },
    bG: function(n, t) {
        this.l.d(_h.bz, new _h.bz);
        this.j.a() === "Mouse" && this.bA()
    }
};
_y.eJ = function(n) {
    this.a = n
};
_y.eJ.a = function(n) {
    var t = new Sys.StringBuilder;
    t.append(n.b(3));
    t.append(n.b(0));
    return String.format(_u.R.VY, t.toString(" "))
};
_y.eJ.prototype = {
    a: 0,
    j: function(n) {
        var i = this.a === "Mouse" ? _u.R.Qo : _u.R.Cu;
        var t = n ? n.bH.DisplayName : "";
        return String.format(i, t)
    },
    c: function(n) {
        return String.format(_u.R.OX, n.S())
    },
    d: function(n) {
        if (n.g()) {
            var i = new _y.dD;
            var t = i.a(n.g().f, null);
            return String.format(_u.R.OX, t)
        } else return ""
    },
    e: function(n) {
        return n ? String.format(_u.R.Uc, n) : ""
    },
    f: function(n) {
        switch (n.bg()) {
            case "Low":
                return _u.R.QY;
            case "High":
                return _u.R.y;
            default:
                return ""
        }
    },
    l: function(n) {
        return n.bH.ConversationTopic ? String.format(_u.R.SV, n.bH.ConversationTopic) : ""
    },
    k: function(n, t) {
        return n ? String.format(_u.R.NE, t.bH.MessageCount - 1, this.b(n.cr())) : ""
    },
    g: function(n) {
        return n && n.b() ? String.format(_u.R.Bc, n.b().cu()) : ""
    },
    h: function(n) {
        return n.bn() ? this.b(n.bn()) : ""
    },
    i: function(n) {
        return n.h() ? this.b(n.h()) : ""
    },
    b: function(n) {
        return _y.eJ.a(n)
    }
};
_y.cz = function() {};
_y.cz.a = function(n) {
    switch (n) {
        case 1:
            return _y.cz.b;
        case 3:
            return _y.cz.c;
        case 2:
            return _y.cz.d;
        default:
            break
    }
    return 0
};
_y.jE = function() {
    _y.jE.initializeBase(this)
};
_y.jE.prototype = {
    d: function(n, t) {},
    a: function(n, t) {},
    h: function(n, t) {},
    j: function(n) {},
    l: function(n) {},
    g: function(n) {},
    e: function(n) {},
    i: function(n) {},
    f: function() {},
    c: function() {
        return null
    },
    b: function() {
        return null
    }
};
_y.lH = function(n) {
    _y.lH.initializeBase(this);
    this.j = n
};
_y.lH.prototype = {
    v: null,
    s: null,
    t: !1,
    p: null,
    j: null,
    u: function(n) {
        if (this.t !== n) {
            this.t = n;
            this.by("IsEnabled")
        }
        return n
    },
    f: function() {
        return !this.t
    },
    a: function(n) {
        return n
    },
    l: 0,
    g: function() {
        return this.v
    },
    n: function(n) {
        if (this.v !== n) {
            this.v = n;
            this.by("Text")
        }
        return n
    },
    e: function() {
        return this.s
    },
    r: function(n) {
        if (this.s !== n) {
            this.s = n;
            this.by("Image")
        }
        return n
    },
    d: function() {
        return this.p
    },
    q: function(n) {
        if (this.p !== n) {
            this.p = n;
            this.by("ClickCommand")
        }
        return n
    },
    bz: function() {
        var n;
        _a.h.a(n = {
            val: this.p
        }), this.p = n.val;
        this.j = null;
        _j.S.prototype.bz.call(this)
    },
    A: function() {
        switch (this.l) {
            case 2:
                this.u(!(this.j.ba() && _g.a.a().a().bH.ArchiveFolderId && this.j.ba().Id === _g.a.a().a().bH.ArchiveFolderId));
                break;
            case 3:
                var n = this.j;
                this.u(n.j());
                break;
            case 1:
            case 5:
            case 6:
            case 4:
                this.u(!0);
                break;
            default:
                this.j;
                this.u(!1);
                break
        }
    }
};
_y.jo = function() {
    this.a = Attachments
};
_y.jo.prototype = {
    a: null
};
_y.di = function(n, t) {
    this.a = n;
    this.b = t
};
_y.di.prototype = {
    a: null,
    b: 0
};
_y.dT = function(n, t, i, r, u, f, e, o) {
    this.b = n;
    this.a = t;
    this.d = i;
    this.e = r;
    this.h = u;
    this.f = f;
    this.c = e;
    this.g = o
};
_y.dT.prototype = {
    b: 0,
    a: 0,
    e: null,
    h: !1,
    d: null,
    f: null,
    c: 0,
    g: null
};
_y.bW = function(n, t, i) {
    this.i = Function.createDelegate(this, this.l);
    this.j = Function.createDelegate(this, this.m);
    this.h = n;
    this.f = t;
    this.e = i;
    this.b = {}
};
_y.bW.prototype = {
    h: null,
    f: null,
    b: null,
    e: null,
    c: 0,
    g: function() {
        return this.c
    },
    d: function(n) {
        if (!this.c || this.c === 3) {
            this.k();
            this.c = 1;
            var t = new _h.el(n);
            t.c(this.j);
            t.b(this.i);
            this.h.a(t)
        }
    },
    a: function(n) {
        return n.toLowerCase() in this.b
    },
    m: function(n) {
        var r = n;
        if (r.N && r.N.AllowedOptions) {
            for (var i = r.N.AllowedOptions, t = 0, f = i.length; t < f; t++) {
                var u = i[t].toLowerCase();
                this.b[u] = null
            }
            this.n();
            this.c = i.length > 0 ? 2 : 4;
            this.f.a(_h.R, new _h.R);
            return
        }
        this.c = 3;
        this.f.a(_h.R, new _h.R)
    },
    n: function() {
        this.b[_y.f.toString(450).toLowerCase()] = null;
        this.b[_y.f.toString(2600).toLowerCase()] = null
    },
    k: function() {
        if (this.e) {
            this.e.a().o().Enabled && (this.b[_y.f.toString(1188).toLowerCase()] = null);
            this.e.n() && (this.b[_y.f.toString(1186).toLowerCase()] = null);
            this.e.a().y().Enabled && (this.b[_y.f.toString(861).toLowerCase()] = null)
        }
    },
    l: function(n) {
        this.c = 3;
        this.f.a(_h.R, new _h.R)
    }
};
_y.ev = function() {};
_y.hc = function(n, t, i) {
    var e = this;
    t.b(_j.bc, function() {
        e.a(0, n, i)
    });
    var o = this;
    t.b(_j.ba, function() {
        o.a(1, n, i)
    });
    var f = this;
    t.b(_j.O, function() {
        f.a(2, n, i)
    });
    var r = this;
    t.b(_j.bh, function() {
        r.a(3, n, i)
    });
    var u = this;
    t.b(_j.bl, function() {
        u.a(4, n, i)
    })
};
_y.hc.prototype = {
    a: function(n, t, i) {
        for (var r = 0; r < i.a(); ++r) {
            var u = i.b(r);
            u.b === n && t.a(u.a, null, null)
        }
    }
};
_y.hc.a = function() {};
_y.hc.a.prototype = {
    b: 0,
    a: null
};
_y.fZ = function(n, t) {
    _j.F.i = n;
    var i = this;
    _j.F.f = function(n) {
        _j.e.c(_j.A.h, n)
    };
    _y.k.d = t
};
_y.fY = function(n, t) {
    _y.fY.initializeBase(this);
    _a.c.a(n, "eventAggregator");
    this.l = n;
    this.w = t;
    this.M()
};
_y.fY.prototype = {
    l: null,
    w: null,
    M: function() {
        var n = this;
        this.l.b(_h.cp, function(t) {
            if (!n.r) {
                var i = _u.R.Rm;
                n.w.a().li().Enabled && (i += "\r\n[Diagnostic]" + t.b);
                n.h(3, i, function(n, i) {
                    n ? t.a.b("UpgradePrompt") : t.a.c()
                }, !1, _u.R.Jx, _u.R.GE, null)
            }
        })
    }
};
_y.kb = function(n, t, i) {
    this.t = Function.createDelegate(this, this.D);
    this.o = Function.createDelegate(this, this.B);
    this.i = new _j.H;
    _y.kb.initializeBase(this);
    _a.c.a(n, "text");
    var u = !!t;
    var f = !!i && i.length > 0;
    this.b = n;
    if (u) {
        this.e = t;
        this.e.j(this.o)
    }
    if (f) {
        this.d = i;
        var r = this;
        this.e = new _j.g(function() {
            r.i.a(r)
        }, _a.a.bh)
    }
};
_y.kb.prototype = {
    d: null,
    b: null,
    e: null,
    j: null,
    h: !1,
    c: null,
    x: function(n) {
        this.i.b(n)
    },
    C: function(n) {
        this.i.c(n)
    },
    a: function() {
        return this.j ? this.j : this.e
    },
    g: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.eJ("Text")
        }
        return n
    },
    v: function() {
        return this.h
    },
    w: function(n) {
        if (this.h !== n) {
            this.h = n;
            this.eJ("ToggleState");
            this.eJ("ShowCheckmark")
        }
        return n
    },
    z: function() {
        return this.h && this.A()
    },
    p: function() {
        return this.u() || !!this.a() && this.a().b
    },
    u: function() {
        return !!this.d && this.d.length > 0
    },
    A: function() {
        return !0
    },
    y: function() {
        if (this.u()) throw Error.invalidOperation("Cannot invoke EnableAutoToggle if submenus are present");
        this.j = new _j.g(this.t, _a.a.bh)
    },
    f: function(n) {
        this.c || (this.c = new _y.bZ(this.b));
        this.c.Enabled = this.p();
        this.c.SubCommands = _y.bZ.a(this.d, n);
        n[this.c.Id] = this;
        return this.c
    },
    eL: function() {
        if (this.d)
            for (var n = 0; n < this.d.length; n++) this.d[n].dispose();
        else this.e && this.e.i(this.o);
        _a.gd.prototype.eL.call(this)
    },
    D: function() {
        this.w(!this.v());
        this.e.a()
    },
    B: function(n, t) {
        this.c && (this.c.Enabled = this.p());
        this.eJ("IsEnabled")
    }
};
_y.b = function() {};
_y.b.bN = function() {
    return _fm.b.a(_fm.a.d, _fm.WebfontSizes.a.h, "ms-fcl-w-b")
};
_y.b.bC = function() {
    return _fm.b.a(_fm.a.bB, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.bD = function() {
    return _fm.b.a(_fm.a.bB, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.bE = function() {
    return _fm.b.a(_fm.a.br, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.bF = function() {
    return _fm.b.a(_fm.a.br, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.V = function() {
    return _fm.b.a(_fm.a.c, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.W = function() {
    return _fm.b.a(_fm.a.c, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.M = function() {
    return _fm.b.a(_fm.a.i, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.N = function() {
    return _fm.b.a(_fm.a.i, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.bc = function() {
    return _fm.b.b(_fm.a.n, null, ["ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.bd = function() {
    return _fm.b.b(_fm.a.n, null, ["ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.bL = function() {
    return _fm.b.a(_fm.a.a, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.bM = function() {
    return _fm.b.a(_fm.a.a, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.k = function() {
    return _fm.b.a(_fm.a.d, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.l = function() {
    return _fm.b.a(_fm.a.d, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.m = function() {
    return _fm.b.a(_fm.a.Trash, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.n = function() {
    return _fm.b.a(_fm.a.Trash, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.G = function() {
    return _fm.d.a("clutter_delete_all.png")
};
_y.b.bj = function() {
    return _fm.d.a("clutter_delete_all_p.png")
};
_y.b.bk = function() {
    return _fm.b.a(_fm.a.f, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.bm = function() {
    return _fm.b.a(_fm.a.f, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.ck = function() {
    return _fm.b.a(_fm.a.dN, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.cl = function() {
    return _fm.b.a(_fm.a.dN, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.cg = function() {
    return _fm.b.a(_fm.a.B, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.ch = function() {
    return _fm.b.a(_fm.a.B, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.cb = function() {
    return _fm.b.b(_fm.a.E, null, ["ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.cc = function() {
    return _fm.b.b(_fm.a.E, null, ["ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.Q = function() {
    return _fm.b.a(_fm.a.S, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.R = function() {
    return _fm.b.a(_fm.a.S, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.ba = function() {
    return _fm.b.a(_fm.a.D, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.bb = function() {
    return _fm.b.a(_fm.a.D, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.T = function() {
    return _fm.b.b(_fm.a.bf, null, ["ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.U = function() {
    return _fm.b.b(_fm.a.bf, null, ["ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.bQ = function() {
    return _fm.b.a(_fm.a.c, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.bR = function() {
    return _fm.b.a(_fm.a.c, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.v = function() {
    return _fm.b.a(_fm.a.N, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.w = function() {
    return _fm.b.a(_fm.a.N, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.y = function() {
    return _fm.b.a(_fm.a.G, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.cf = function() {
    return _fm.b.b(_fm.a.bi, null, ["ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.ce = function() {
    return _fm.b.b(_fm.a.bi, null, ["ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.z = function() {
    return _fm.b.a(_fm.a.G, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.J = function() {
    return _fm.b.a(_fm.a.s, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.K = function() {
    return _fm.b.a(_fm.a.s, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.X = function() {
    return _fm.b.a(_fm.a.m, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.Y = function() {
    return _fm.b.a(_fm.a.m, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.Z = function() {
    return _fm.b.a(_fm.a.h, _fm.WebfontSizes.a.j, "ms-fcl-w-b")
};
_y.b.bG = function() {
    return _fm.b.a(_fm.a.h, _fm.WebfontSizes.a.a, "ms-fcl-w-b")
};
_y.b.bO = function() {
    return _fm.b.a(_fm.a.bj, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.bP = function() {
    return _fm.b.a(_fm.a.bj, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.bt = function() {
    return _fm.b.b(_fm.a.bS, null, ["ms-fcl-w-b"], null, [_fm.WebfontSizes.a.m], [_fm.WebfontSizes.a.h], null, null)
};
_y.b.S = function() {
    return _fm.b.b(_fm.a.bS, null, ["ms-fcl-td-b"], null, [_fm.WebfontSizes.a.n], [_fm.WebfontSizes.a.k], null, null)
};
_y.b.bV = function() {
    return _fm.b.b(_fm.a.bS, null, ["ms-fcl-tp-b"], null, [_fm.WebfontSizes.a.n], [_fm.WebfontSizes.a.k], null, null)
};
_y.b.bA = function() {
    return _fm.b.a(_fm.a.cW, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.bB = function() {
    return _fm.b.a(_fm.a.cW, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.cn = function() {
    return _fm.b.a(_fm.a.cX, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.co = function() {
    return _fm.b.a(_fm.a.cX, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.bh = function() {
    return _fm.b.a(_fm.a.cU, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.bi = function() {
    return _fm.b.a(_fm.a.cU, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.bo = function() {
    return _fm.b.a(_fm.a.dp, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.bp = function() {
    return _fm.b.a(_fm.a.dp, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.be = function() {
    return _fm.b.b(_fm.a.k, null, ["ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.bf = function() {
    return _fm.b.b(_fm.a.k, null, ["ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.bK = function() {
    return _fm.b.a(_fm.a.j, _fm.WebfontSizes.a.o, "ms-fcl-tp-b")
};
_y.b.cd = function() {
    return _fm.b.a(_fm.a.l, _fm.WebfontSizes.a.o, "ms-fcl-tp-b")
};
_y.b.bS = function() {
    return _fm.b.a(_fm.a.g, _fm.WebfontSizes.a.o, "ms-fcl-tp-b")
};
_y.b.cm = function() {
    return _fm.b.a(_fm.a.bu, _fm.WebfontSizes.a.o, "ms-fcl-tp-b")
};
_y.b.bX = function() {
    return _fm.b.b(_fm.a.g, null, ["ms-fcl-w-b"], null, null, null, null, null)
};
_y.b.bW = function() {
    return _fm.b.b(_fm.a.j, null, ["ms-fcl-w-b"], null, null, null, null, null)
};
_y.b.bZ = function() {
    return _fm.b.b(_fm.a.l, null, ["ms-fcl-w-b"], null, null, null, null, null)
};
_y.b.ca = function() {
    return _fm.b.b(_fm.a.bu, null, ["ms-fcl-w-b"], null, null, null, null, null)
};
_y.b.bY = function() {
    return _fm.d.a("miniatures_o365.png")
};
_y.b.bT = function() {
    return _fm.b.a(_fm.a.g, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.bU = function() {
    return _fm.b.a(_fm.a.g, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.ci = function() {
    return _fm.b.a(_fm.a.dO, "ms-icon-size-appBar", "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-w-b")
};
_y.b.cj = function() {
    return _fm.b.a(_fm.a.dO, "ms-icon-size-appBar", "ms-bcl-w-b ms-bgc-w-b ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.b.a = function() {
    return _fm.b.b(_fm.a.n, null, ["ms-icon-font-size-21"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.A = function() {
    return _fm.b.a(_fm.a.i, "ms-icon-font-size-25")
};
_y.b.D = function() {
    return _fm.b.a(_fm.a.bn, _fm.WebfontSizes.a.j)
};
_y.b.E = function() {
    return _fm.b.a(_fm.a.bn, _fm.WebfontSizes.a.j, "ms-bgc-td", "calendarAgendaIosPressedPadding")
};
_y.b.B = function() {
    return _fm.b.a(_fm.a.bn, _fm.WebfontSizes.a.j)
};
_y.b.C = function() {
    return _fm.b.a(_fm.a.bn, _fm.WebfontSizes.a.j, "ms-bgc-td", "calendarAgendaIosPressedPadding")
};
_y.b.F = function() {
    return _fm.b.a(_fm.a.a, "ms-icon-font-size-19")
};
_y.b.c = function() {
    return _fm.b.b(_fm.a.d, null, [_fm.WebfontSizes.a.g], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.t = function() {
    return _fm.b.a(_fm.a.db, _fm.WebfontSizes.a.j)
};
_y.b.O = function() {
    return _fm.b.a(_fm.a.db, _fm.WebfontSizes.a.j, "ms-fcl-nt-b")
};
_y.b.b = function() {
    return _fm.b.b(_fm.a.cq, null, [_fm.WebfontSizes.a.j], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.b.u = function() {
    return _fm.b.a(_fm.a.dc, _fm.WebfontSizes.a.j)
};
_y.b.P = function() {
    return _fm.b.a(_fm.a.dc, _fm.WebfontSizes.a.j, "ms-fcl-nt-b")
};
_y.b.H = function() {
    return _fm.b.a(_fm.a.f, _fm.WebfontSizes.a.g)
};
_y.b.bl = function() {
    return _fm.b.a(_fm.a.f, _fm.WebfontSizes.a.d)
};
_y.b.g = function() {
    return _fm.b.a(_fm.a.h, "ms-icon-font-size-15")
};
_y.b.I = function() {
    return _fm.b.a(_fm.a.h, _fm.WebfontSizes.a.b)
};
_y.b.o = function() {
    return _fm.b.a(_fm.a.bl, _fm.WebfontSizes.a.j)
};
_y.b.p = function() {
    return _fm.b.a(_fm.a.bf, _fm.WebfontSizes.a.p)
};
_y.b.bq = function() {
    return _fm.b.a(_fm.a.g, _fm.WebfontSizes.a.j)
};
_y.b.h = function() {
    return _fm.b.a(_fm.a.cC, _fm.WebfontSizes.a.j)
};
_y.b.q = function() {
    return _fm.b.a(_fm.a.G, _fm.WebfontSizes.a.h)
};
_y.b.bs = function() {
    return _fm.b.a(_fm.a.G, "ms-icon-font-size-27")
};
_y.b.e = function() {
    return _fm.b.a(_fm.a.dt, "ms-icon-font-size-21")
};
_y.b.f = function() {
    return _fm.b.a(_fm.a.dt, _fm.WebfontSizes.a.g)
};
_y.b.bu = function() {
    return _fm.b.a(_fm.a.eB, _fm.WebfontSizes.a.d)
};
_y.b.bz = function() {
    return _fm.b.a(_fm.a.bu, _fm.WebfontSizes.a.d)
};
_y.b.bn = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.d)
};
_y.b.br = function() {
    return _fm.b.a(_fm.a.bo, _fm.WebfontSizes.a.j)
};
_y.b.bv = function() {
    return _fm.b.a(_fm.a.bB, _fm.WebfontSizes.a.j)
};
_y.b.j = function() {
    return _fm.b.a(_fm.a.c, _fm.WebfontSizes.a.d, "plusIosPadding")
};
_y.b.i = function() {
    return _fm.b.a(_fm.a.c, "ms-icon-font-size-21")
};
_y.b.bw = function() {
    return _fm.b.a(_fm.a.bi, "ms-icon-font-size-25")
};
_y.b.r = function() {
    return _fm.b.a(_fm.a.s, _fm.WebfontSizes.a.h)
};
_y.b.bx = function() {
    return _fm.b.a(_fm.a.B, "ms-icon-font-size-25")
};
_y.b.d = function() {
    return _fm.b.a(_fm.a.m, _fm.WebfontSizes.a.d)
};
_y.b.x = function() {
    return _fm.b.a(_fm.a.m, _fm.WebfontSizes.a.b)
};
_y.b.by = function() {
    return _fm.b.a(_fm.a.m, _fm.WebfontSizes.a.d)
};
_y.b.bI = function() {
    return _fm.b.a(_fm.a.o, _fm.WebfontSizes.a.h)
};
_y.b.bg = function() {
    return _fm.b.a(_fm.a.q, _fm.WebfontSizes.a.h)
};
_y.b.bH = function() {
    return _fm.b.a(_fm.a.x, _fm.WebfontSizes.a.h)
};
_y.b.bJ = function() {
    return _fm.b.a(_fm.a.e, _fm.WebfontSizes.a.h)
};
_y.b.L = function() {
    return _fm.b.a(_fm.a.Trash, _fm.WebfontSizes.a.j)
};
_y.b.s = function() {
    return _fm.b.a(_fm.a.Trash, "ms-icon-font-size-25")
};
_y.h = function(n, t, i, r, u, f) {
    _y.h.initializeBase(this, [i, r, u]);
    this.l = n;
    this.m = t;
    this.q = f
};
_y.h.a = function(n, t) {
    return new _y.h(_y.b.bL(), _y.b.bM(), n, t).r()
};
_y.h.b = function(n) {
    return new _y.h(_y.b.bc(), _y.b.bd(), _u.R.Pt, n).r()
};
_y.h.prototype = {
    l: null,
    m: null,
    q: null,
    n: null,
    s: !1,
    E: function(n) {
        if (this.n !== n) {
            this.n = n;
            this.eJ("TapAndHold")
        }
        return n
    },
    r: function() {
        this.s = !0;
        return this
    }
};
_y.bZ = function(n) {
    this.Label = n || "";
    this.Id = _y.bZ.c() + this.Label.replace(" ", "_")
};
_y.bZ.c = function() {
    _y.bZ.b = (_y.bZ.b + 1) % 4294967295;
    return _y.bZ.b.toString()
};
_y.bZ.a = function(n, t) {
    for (var u = n ? n.length : 0, f = new Array(u), i = 0; i < u; i++) {
        var r = n[i];
        f[i] = r ? r.f(t) : null
    }
    return f
};
_y.bZ.prototype = {
    Enabled: !1,
    Selected: !1,
    Id: null,
    Label: null,
    SubCommands: null,
    ExtraLabels: null
};
_y.i = function(n, t, i) {
    _y.i.initializeBase(this, [n, t, i])
};
_y.hD = function(n, t) {
    _y.hD.initializeBase(this, [_fm.d.a("PIN " + _a.fj.toString(n)), null, t, null])
};
_y.hD.prototype = {
    f: function(n) {
        var t = _y.kb.prototype.f.call(this, n);
        t.ExtraLabels = [_u.R.Vb, _u.R.OY];
        return t
    }
};
_y.k = function() {
    this.O = Function.createDelegate(this, this.be);
    this.N = Function.createDelegate(this, this.bb);
    this.P = Function.createDelegate(this, this.bj);
    this.M = Function.createDelegate(this, this.ba);
    this.i = new _j.H;
    this.j = new _j.H;
    _y.k.initializeBase(this)
};
_y.k.a = function(n, t, i, r) {
    var u = new _y.k;
    i && (u.a = i);
    t && (u.c = t);
    u.p = n;
    r || u.bh(u.Y(new _j.g(u.M, _a.a.bh), new _j.g(u.P, _a.a.bh)));
    return u
};
_y.k.b = function(n, t, i) {
    var r = _y.k.a(n, t, i);
    r.x = _y.h.b(n.fk);
    r.g(r.x, 0);
    n.apcl("IsTransitionedIn", r.N);
    return r
};
_y.k.c = function(n) {
    if (n)
        for (var t = 0; t < n.length; t++) n[t] && n[t].dispose()
};
_y.k.prototype = {
    d: null,
    c: null,
    e: null,
    a: null,
    x: null,
    u: null,
    v: null,
    D: null,
    E: !0,
    y: !1,
    s: null,
    H: null,
    l: null,
    p: null,
    h: null,
    C: !1,
    G: !1,
    A: null,
    z: null,
    V: !0,
    B: !1,
    W: function(n) {
        this.i.b(n)
    },
    bc: function(n) {
        this.i.c(n)
    },
    X: function(n) {
        this.j.b(n)
    },
    bd: function(n) {
        this.j.c(n)
    },
    T: function(n) {
        if (n !== this.E) {
            this.E = n;
            this.eJ("ShowAlwaysPresentGlobalMenuItems")
        }
        return n
    },
    r: function(n) {
        if (n !== this.y) {
            this.y = n;
            this.eJ("ShowMainScreensGlobalMenuItems")
        }
        return n
    },
    S: function(n) {
        var t = _y.dH.isInstanceOfType(this.p);
        if (!t) throw Error.invalidOperation("SearchVM cannot be set on the AppBar for non IComposeScreenViewModel");
        if (this.h !== n) {
            this.h = n;
            this.eJ("SearchVM")
        }
        return n
    },
    o: function(n) {
        if (this.d !== n) {
            this.j.a(this.d);
            _y.k.c(this.d);
            this.d = n;
            this.i.a(this.d);
            this.eJ("LeftButtons")
        }
        return n
    },
    b: function(n) {
        if (this.c !== n) {
            this.j.a(this.c);
            _y.k.c(this.c);
            this.c = n;
            this.i.a(this.c);
            this.eJ("RightButtons")
        }
        return n
    },
    R: function(n) {
        if (this.e !== n) {
            this.j.a(this.e);
            _y.k.c(this.e);
            this.e = n;
            this.i.a(this.e);
            this.eJ("CenterButtons")
        }
        return n
    },
    bh: function(n) {
        if (this.l === n) return n;
        this.l && this.l.dispose();
        this.l = n;
        this.eJ("NavigationButton");
        return n
    },
    f: function(n) {
        if (this.a !== n) {
            this.j.a(this.a);
            _y.k.c(this.a);
            this.a = n;
            this.i.a(this.a);
            this.eJ("MenuItems")
        }
        return n
    },
    L: function(n) {
        if (this.C !== n) {
            this.C = n;
            this.eJ("IsFloat")
        }
        return n
    },
    U: function(n) {
        if (this.G !== n) {
            this.G = n;
            this.eJ("ShowCustomAppBar")
        }
        return n
    },
    bg: function(n) {
        if (this.A !== n) {
            this.A = n;
            this.eJ("CustomAppBarTemplateId")
        }
        return n
    },
    bf: function(n) {
        if (this.z !== n) {
            this.z = n;
            this.eJ("CustomAppBarDataContext")
        }
        return n
    },
    Z: function() {
        var n = null;
        return (n = this.I(this.c)) ? n : (n = this.I(this.e)) ? n : (n = this.I(this.d)) ? n : null
    },
    m: function(n) {
        this.g(_y.h.b(n), 0)
    },
    Q: function() {
        this.D || (this.D = new _j.g(this.O, _a.a.bh, this.V));
        return new _y.h(_y.b.X(), _y.b.Y(), _u.R.ME, this.D)
    },
    n: function() {
        var n = this.Q();
        this.g(n, 0);
        return n
    },
    g: function(n, t, i) {
        var r;
        var u;
        switch (t) {
            case 0:
                r = this.d;
                u = "LeftButtons";
                break;
            case 2:
                r = this.e;
                u = "CenterButtons";
                break;
            default:
                r = this.c;
                u = "RightButtons";
                break
        }
        if (!r) switch (t) {
            case 0:
                this.d = new Array(0);
                r = this.d;
                break;
            case 2:
                this.e = new Array(0);
                r = this.e;
                break;
            default:
                this.c = new Array(0);
                r = this.c;
                break
        }
        if (!Array.contains(r, n)) {
            i ? Array.insert(r, 0, n) : Array.add(r, n);
            this.i.a([n]);
            this.eJ(u)
        }
    },
    q: function(n, t) {
        var i;
        var r;
        switch (t) {
            case 0:
                i = this.d;
                r = "LeftButtons";
                break;
            case 2:
                i = this.e;
                r = "CenterButtons";
                break;
            default:
                i = this.c;
                r = "RightButtons";
                break
        }
        if (i && i.length > 0 && Array.contains(i, n)) {
            Array.remove(i, n);
            this.j.a([n]);
            this.eJ(r)
        }
    },
    w: function(n, t) {
        this.a || (this.a = new Array(0));
        Array.contains(this.a, n) || (_j.C.a(t) ? Array.add(this.a, n) : Array.insert(this.a, t, n));
        this.i.a([n]);
        this.eJ("MenuItems")
    },
    t: function(n) {
        if (this.a && this.a.length > 0 && Array.contains(this.a, n)) {
            Array.remove(this.a, n);
            this.j.a([n]);
            this.eJ("MenuItems")
        }
    },
    K: function(n, t) {
        if (this.a && this.a.length > 0 && Array.contains(this.a, n)) {
            var i = Array.indexOf(this.a, n);
            this.t(n);
            this.w(t, i)
        }
    },
    bi: function(n, t) {
        this.bg(n);
        this.bf(t)
    },
    eL: function() {
        _y.k.c(this.d);
        _y.k.c(this.c);
        _y.k.c(this.e);
        _y.k.c(this.a);
        this.l && this.l.dispose();
        _a.gd.prototype.eL.call(this)
    },
    bb: function(n, t) {
        var r = n;
        if (r.fq) {
            var i = r.bU();
            !i || i.b().x.length <= 1 ? this.q(this.x, 0) : this.g(this.x, 0)
        }
    },
    be: function() {
        this.u && this.u.b && this.u.a();
        this.v && this.v.b && this.v.a()
    },
    ba: function() {
        this.s.b && this.s.a()
    },
    Y: function(n, t) {
        var i = new _y.h(_y.b.bt(), _y.b.S(), _u.R.ED, n);
        i.E(t);
        return i
    },
    I: function(n) {
        if (n)
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                if (i.s) return i
            }
        return null
    },
    bj: function() {
        this.H && this.H.b && this.H.a()
    }
};
_y.bc = function() {
    _y.bc.initializeBase(this)
};
_y.bc.$$cctor = function() {
    _y.bc.a.b(new _a.bC(_g.Attachment))
};
_y.bc.c = function(n) {
    var t = new _j.l;
    t.a(n);
    return _y.bc.d(t)
};
_y.bc.d = function(n) {
    var t = new _y.bc;
    t.b(n);
    return t
};
_y.bc.b = function(n) {
    if (!_j.h.b(n) && n.startsWith("{") && n.endsWith("}")) {
        var t = new _y.bc;
        try {
            var i = JsonParser.deserialize(n);
            i && t.fa(i);
            if (t && t.a().x.length > 0) return t
        } catch (r) {}
    }
    return null
};
_y.bc.prototype = {
    a: function() {
        return this.eM(_y.bc.a)
    },
    b: function(n) {
        this.eK(_y.bc.a, n);
        return n
    }
};
_y.da = function(n, t, i, r, u) {
    this.h = Function.createDelegate(this, this.R);
    this.b = {};
    this.f = [];
    this.g = new _j.l;
    _y.da.initializeBase(this, [
        []
    ]);
    this.d = n;
    this.w = u;
    this.j = t;
    this.i = i;
    this.l = r;
    this.y()
};
_y.da.prototype = {
    d: null,
    i: null,
    l: null,
    j: null,
    v: !1,
    e: null,
    k: !1,
    w: !1,
    S: function(n) {
        this.d !== n && (this.d = n);
        return n
    },
    o: function(n) {
        if (this.k !== n) {
            this.k = n;
            this.by("IsShownInListView")
        }
        return n
    },
    a: function(n, t, i, r, u) {
        this.v = r;
        this.e = u;
        this.Q();
        var s = this.G(n, i);
        this.i.c(!!s);
        for (var e = 0; e < this.p.x.length; e++) {
            var f = this.p.x[e];
            f.rpcl("IsChecked", this.h);
            var o = f.m;
            f.i(this.Y(o, t));
            f.apcl("IsChecked", this.h)
        }
    },
    c: function() {
        var n = new _fm.j(_u.R.Ca, null, this);
        n.O("CategoryContextMenuView");
        n.y(!!this.d);
        return n
    },
    bz: function() {
        if (this.p)
            for (var n = 0; n < this.p.x.length; ++n) {
                var t = this.p.x[n];
                t.rpcl("IsChecked", this.h)
            }
        _j.S.prototype.bz.call(this)
    },
    R: function(n, t) {
        var f = n;
        var u = f.m;
        var o = u.bH.Name;
        var i = null;
        var r = null;
        f.q() ? i = u : r = u;
        if (this.v) {
            var e = _y.o.b("C");
            this.j(i, r, !1, this.e);
            _a.b.a(e)
        } else this.j(i, r, !1, this.e)
    },
    Q: function() {
        if (this.d) {
            var i = this.w ? _g.A.n() : null;
            var t = this.d.e(i);
            this.p.g();
            for (var r = t.length, n = 0; n < r; n++) this.p.a(this.L(t[n]))
        }
    },
    L: function(n) {
        var t = n.bH.Name;
        27 < t.length && (t = t.substring(0, 27) + "...");
        var i = new _fm.g(t, null, null, !1, !0, null);
        i.B("CategoryColorPickerTemplates.CategoryColorViewLabelTemplate");
        i.Q(n);
        return i
    },
    y: function() {
        var t = [];
        Array.add(t, new _fm.c(_u.R.Jp, null, this.i));
        this.l && Array.add(t, new _fm.c(_u.R.Pg, null, this.l));
        this.g.j(t);
        for (var n = 0; n < this.g.x.length; ++n) {
            var i = this.g.x[n];
            i && i.f(this)
        }
    },
    G: function(n, t) {
        var e = 0;
        this.b = {};
        this.f = [];
        var l = n;
        for (var c in l) {
            var y = {
                key: c,
                value: l[c]
            };
            e++;
            for (var a = y.value, u = 0; u < a.length; u++) {
                var i = a[u];
                i in this.b || (this.b[i] = 0);
                var w = this.b[i];
                this.b[i] = ++w
            }
        }
        if (t) {
            var o = t;
            for (var s in o) {
                var p = {
                    key: s,
                    value: o[s]
                };
                e++;
                for (var h = p.value, f = 0; f < h.length; f++) {
                    var r = h[f];
                    this.f[r] || (this.f[r] = 0);
                    var v = this.f[r];
                    this.f[r] = ++v
                }
            }
        }
        return e
    },
    Y: function(n, t) {
        if (n.b() && this.f[n.a] === t) return !0;
        else if (this.b[n.bH.Name] === t) return !0;
        return !1
    }
};
_y.ga = function(n, t, i) {
    this.b = Function.createDelegate(this, this.e);
    this.a = n;
    this.c = t;
    this.d = i;
    _a.N.d(this.b)
};
_y.ga.prototype = {
    a: null,
    c: null,
    d: null,
    dispose: function() {
        _a.N.g(this.b)
    },
    e: function(n, t, i) {
        if (t === 1) {
            var r = i();
            _a.A.k(r);
            this.a && this.a.a().go().Enabled && this.c.I(r);
            if (this.a && this.a.a().la().Enabled) {
                var u = this;
                this.d.a(function(n) {
                    n.a(r)
                })
            }
        }
    }
};
_y.dC = function(n) {
    this.o = Function.createDelegate(this, this.L);
    this.n = Function.createDelegate(this, this.w);
    this.u = Function.createDelegate(this, this.M);
    this.m = new _j.q;
    _y.dC.initializeBase(this);
    this.t(this);
    this.C(!0);
    this.l = n;
    this.v(new _j.l);
    this.j(_u.R.Fz, this.u, !0, !1);
    this.j(_u.R.Qn, this.n, !1, !1);
    this.j("Ignore", this.o, !1, !0)
};
_y.dC.prototype = {
    h: "",
    i: null,
    l: null,
    N: function(n) {
        if (n !== this.h) {
            this.h = n;
            this.eJ("DetailedErrorInformation")
        }
        return n
    },
    I: function(n) {
        if (!this.m.g(n.a.ch)) {
            this.i = n;
            this.s(this.y ? "Multiple Exceptions" : String.format(_u.R.Hy, n.g()));
            this.N(this.h + _ff.g.a(n.c() + "\n--------\n\n").replace(new RegExp("\\n", "g"), "<br>"));
            this.f(!0)
        }
    },
    M: function() {
        this.l.a(_y.hb, new _y.hb(this.i))
    },
    L: function() {
        this.m.c(this.i.a.ch);
        this.w()
    },
    w: function() {
        if (this.q.b) {
            this.s("");
            this.h = "";
            this.q.a()
        }
    },
    j: function(n, t, i, r) {
        var u = new _ff.d(new _j.g(t, _a.a.O), n, null, i, r);
        this.p.a(u)
    }
};
_y.A = function() {
    this.h = new _j.l;
    _y.A.initializeBase(this)
};
_y.A.prototype = {
    b: function() {
        return this.h
    },
    g: function(n) {
        for (var i = this.a(), t = 0; t < this.h.x.length; t++)
            if (this.h.x[t] === n) {
                if (this.h.x.length === 1) throw Error.invalidOperation("Can't remove all the items from the stack!");
                this.h.p(n, !0);
                break
            }
        this.a() !== i && this.eJ("Top")
    }
};
_y.kc = function() {
    this.A = Function.createDelegate(this, this.Q);
    _y.kc.initializeBase(this);
    this.apcl("Top", this.A)
};
_y.kc.prototype = {
    o: null,
    m: null,
    a: function() {
        var n = this.b() ? this.b().x.length : 0;
        return n > 0 ? this.b().x[n - 1] : null
    },
    e: function(n) {
        var t = _j.n.b(_a.a.g, 2, "ConductorViewModelBase:Push");
        if (this.B(n)) {
            this.s(n);
            this.b().a(n);
            this.eJ("Top");
            _j.n.a(t)
        }
    },
    d: function() {
        var n = _j.n.b(_a.a.g, 2, "ConductorViewModelBase:Pop");
        this.f(1);
        _j.n.a(n)
    },
    f: function(n) {
        this.w(n) && this.r(n)
    },
    c: function(n) {
        var i = _j.n.b(_a.a.g, 2, "ConductorViewModelBase:SetTop");
        if (this.B(n)) {
            this.o && this.o(n);
            this.s(n);
            var t = this.b().x.length;
            t ? this.b().q(t - 1, n) : this.b().a(n);
            this.eJ("Top");
            _j.n.a(i)
        }
    },
    r: function(n) {
        var t = this.b().x.length;
        this.b().r(t - n, n);
        this.eJ("Top")
    },
    w: function(n) {
        if (n <= 0) throw Error.argumentOutOfRange("numberOfItems", n, "Cannot pass 0 or negative to the PopMany method.");
        var t = this.b().x.length;
        if (t <= n) {
            _j.e.b(_a.a.ce, "Can't pop all the items from the stack! NumberOfItems: {0}, ActiveNavigationStack.Count: {1}", n, t);
            return !1
        }
        return !0
    },
    s: function(n) {
        _bc.w.isInstanceOfType(n) && n.bt(this)
    },
    B: function(n) {
        if (!n) throw Error.argumentNull("viewModel", "You cannot conduct to a null ViewModel");
        if (this.b() && this.b().w(n)) {
            if (n !== this.a()) throw Error.invalidOperation("You cannot conduct to a ViewModel that is already in the conductor stack. ViewModel = " + Object.getType(n).getName());
            return !1
        }
        return !0
    },
    Q: function(n, t) {
        var i = _j.n.b(_a.a.g, 2, "ConductorViewModelBase:OnTopPropertyChanged");
        if (this.m !== this.a()) {
            _y.eQ.isInstanceOfType(this.m) && this.m.d(!1);
            this.m = this.a();
            _y.eQ.isInstanceOfType(this.m) && this.m.d(!0);
            _j.n.a(i)
        }
    }
};
_y.eH = function(n) {
    this.a = n
};
_y.eH.prototype = {
    a: !1
};
_y.eI = function(n) {
    this.a = n
};
_y.eI.prototype = {
    a: !1
};
_y.eM = function() {};
_y.ck = function() {};
_y.ec = function(n) {
    _a.c.b(n, "email");
    this.a = n
};
_y.ec.prototype = {
    a: null
};
_y.gO = function(n) {
    this.a = n
};
_y.gO.prototype = {
    a: null
};
_y.bk = function(n, t, i, r, u) {
    this.h = Function.createDelegate(this, this.g);
    this.b = n;
    this.a = t;
    this.e = i;
    this.c = r;
    this.f = u
};
_y.bk.prototype = {
    b: 0,
    a: null,
    e: null,
    d: !1,
    g: function(n) {
        this.e && this.e(n)
    },
    c: null,
    f: null
};
_y.cH = function(n) {
    this.a = n
};
_y.cH.prototype = {
    a: null
};
_y.cf = function(n) {
    this.a = n
};
_y.cf.prototype = {
    a: 0
};
_y.cI = function(n) {
    this.a = n
};
_y.cI.prototype = {
    a: !1
};
_y.bl = function(n, t, i, r) {
    this.b = t;
    this.a = i;
    this.c = r;
    t || (this.d = _j.h.a(n) ? "account" : n)
};
_y.bl.prototype = {
    d: null,
    b: 0,
    a: 0,
    c: null
};
_y.bP = function(n, t) {
    this.b = n;
    this.a = t
};
_y.bP.prototype = {
    b: !1,
    a: !1
};
_y.dU = function(n, t, i) {
    this.c = n;
    this.a = t;
    this.d = i
};
_y.dU.prototype = {
    a: 0,
    d: null,
    c: null,
    b: null,
    e: function(n, t) {
        var i = n.n();
        if (i && t === this.c) {
            i !== this.a && (this.b = n.l());
            return !0
        }
        return !1
    }
};
_y.fG = function(n) {
    this.a = n
};
_y.fG.prototype = {
    a: 0
};
_y.dE = function(n) {
    this.M = Function.createDelegate(this, this.S);
    this.N = Function.createDelegate(this, this.T);
    _y.dE.initializeBase(this);
    n.b(_a.u, this.N);
    this.l = [];
    this.ck(this.M)
};
_y.dE.prototype = {
    l: null,
    w: null,
    S: function(n, t) {
        if (!this.r) {
            this.w = null;
            this.j.g();
            if (this.l.length > 0) {
                this.O(this.l[0]);
                Array.removeAt(this.l, 0)
            }
        }
    },
    O: function(n) {
        this.w = n;
        this.i(n.b, n.a, n.j, n.d, n.g, n.f, n.e, n.k, n.c, n.h, n.i)
    },
    T: function(n) {
        this.r ? !n || n.l(this.w) || this.U(n) || Array.add(this.l, n) : this.O(n)
    },
    U: function(n) {
        for (var t = 0; t < this.l.length; t++)
            if (this.l[t].l(n)) return !0;
        return !1
    }
};
_y.dF = function() {};
_y.kg = function(n, t) {
    _y.kg.initializeBase(this);
    if (!n) throw Error.argumentNull("headerFactory");
    if (!t) throw Error.argumentNull("valueGetter");
    this.f = n;
    this.g = t;
    this.c = new _y.jr(this.f)
};
_y.kg.prototype = {
    f: null,
    c: null,
    g: null,
    b: function() {
        return !1
    },
    a: function(n, t) {
        var r = this.i(n);
        var i = null;
        t && (i = this.i(t));
        var f = !t || r.a() !== i.a();
        return new _fm.u(r, f)
    },
    e: function(n) {
        return this.g(n)
    }
};
_y.jr = function(n) {
    this.b = {};
    this.a = n
};
_y.jr.prototype = {
    b: null,
    a: null,
    c: function(n) {
        return !this.a.a() && this.e(n) ? this.b[this.d(n)] : this.f(n)
    },
    e: function(n) {
        return !this.a.a() && this.d(n) in this.b
    },
    f: function(n) {
        var t = this.a.b(n);
        this.a.a() || (this.b[this.d(n)] = t);
        return t
    },
    d: function(n) {
        return String.isInstanceOfType(n) ? n : _y.ig.isInstanceOfType(n) ? n.a() : null
    }
};
_y.ed = function() {};
_y.ed.a = function(n, t, i) {
    for (var r = 0; r < i.b.length; r++) {
        var u = i.c(r);
        if (u.b(t)) return u
    }
    return n === Number || Type.isEnum(n) ? 0 : n === Boolean ? !1 : null
};
_y.bu = function(n, t, i, r) {
    _y.bu.initializeBase(this, [n, t]);
    if (!i) throw Error.argumentNull("stringValueGetter");
    this.h = i;
    this.d = r
};
_y.bu.prototype = {
    d: null,
    h: null,
    i: function(n) {
        var i = this.e(n);
        var t;
        if (i) {
            t = this.h(i);
            _j.h.b(t) && (t = this.d)
        } else t = this.d;
        return this.c.c(t)
    }
};
_y.v = function(n, t, i) {
    _y.v.initializeBase(this, [n, t]);
    this.d = !!i !== i ? !0 : i
};
_y.v.e = function() {
    _y.v.d = !0;
    _y.v.b = new _a.R;
    _y.v.a(_y.v.b, _u.R.GO, -2147483648, 10240);
    _y.v.a(_y.v.b, _u.R.NZ, 10240, 25600);
    _y.v.a(_y.v.b, _u.R.Vn, 25600, 102400);
    _y.v.a(_y.v.b, _u.R.Ic, 102400, 512e3);
    _y.v.a(_y.v.b, _u.R.NI, 512e3, 1048576);
    _y.v.a(_y.v.b, _u.R.EF, 1048576, 5242880);
    _y.v.a(_y.v.b, _u.R.Uv, 5242880, 2147483647);
    _y.v.c = new _a.R;
    _y.v.a(_y.v.c, _u.R.FJ, -2147483648, 10240);
    _y.v.a(_y.v.c, _u.R.MW, 10240, 25600);
    _y.v.a(_y.v.c, _u.R.Gz, 25600, 102400);
    _y.v.a(_y.v.c, _u.R.GF, 102400, 512e3);
    _y.v.a(_y.v.c, _u.R.KU, 512e3, 1048576);
    _y.v.a(_y.v.c, _u.R.Un, 1048576, 5242880);
    _y.v.a(_y.v.c, _u.R.SU, 5242880, 2147483647)
};
_y.v.a = function(n, t, i, r) {
    n.a(new _y.ew(t, i, r))
};
_y.v.prototype = {
    d: !0,
    i: function(n) {
        var t = this.e(n);
        _y.v.d || _y.v.e();
        var i = this.d ? _y.ed.a(_y.ew, t, _y.v.b) : _y.ed.a(_y.ew, t, _y.v.c);
        return this.c.c(i)
    }
};
_y.ew = function(n, t, i) {
    this.c = n;
    this.e = t;
    this.d = i
};
_y.ew.prototype = {
    c: null,
    e: 0,
    d: 0,
    a: function() {
        return this.c
    },
    b: function(n) {
        var t = 0;
        n && (Number.isInstanceOfType(n) ? t = n : Number.isInstanceOfType(n) && (t = n));
        return this.e <= t && t < this.d
    },
    toString: function() {
        return this.c
    },
    C: function(n) {
        if (_y.ew.isInstanceOfType(n)) {
            var t = n;
            return !!t && t.e === this.e && t.d === this.d
        } else return !1
    }
};
_y.bm = function(n, t, i, r, u) {
    _y.bm.initializeBase(this, [n, t]);
    var e, f;
    this.d = (f = _y.bm.a(i, e = {
        val: this.h
    }, r, u), this.h = e.val, f)
};
_y.bm.a = function(n, t, i, r) {
    var e = _y.S.a(n, i);
    var o = new _a.R;
    t.val = null;
    for (var u = 0; u < e.b.length; u++) {
        var f = new _y.ds(e.c(u), r);
        o.a(f);
        f.d.a === 1048576 && (t.val = f)
    }
    return o
};
_y.bm.prototype = {
    d: null,
    h: null,
    j: function(n) {
        this.eO("OnTomorrowHeaderGenerated", n)
    },
    l: function(n) {
        this.eP("OnTomorrowHeaderGenerated", n)
    },
    b: function() {
        return !0
    },
    i: function(n) {
        var i = this.e(n);
        var t = _y.ed.a(_y.ds, i, this.d);
        t.d.a === 2097152 && this.eW("OnTomorrowHeaderGenerated", this, null);
        return this.c.c(t)
    }
};
_y.ds = function(n, t) {
    this.c = t;
    this.d = n;
    this.e = this.f()
};
_y.ds.prototype = {
    e: null,
    d: null,
    c: !1,
    a: function() {
        return this.e
    },
    b: function(n) {
        n;
        var t = n;
        return this.d.d(t)
    },
    toString: function() {
        return this.e
    },
    C: function(n) {
        return _y.ds.isInstanceOfType(n) ? this.d.C(n.d) : !1
    },
    f: function() {
        switch (this.d.a) {
            case 8388608:
                return "";
            case 262144:
                return this.c ? _u.R.FO : _u.R.TW;
            case 131072:
                return this.c ? _u.R.Lf : _u.R.SO;
            case 65536:
                return this.c ? _u.R.IK : _u.R.IB;
            case 32768:
                return this.c ? _u.R.Hp : _u.R.Py;
            case 16384:
                return this.c ? _u.R.Gh : _u.R.Ki;
            case 8192:
                return this.c ? _u.R.IW : _u.R.WC;
            case 2097152:
                return this.c ? _u.R.TZ : _u.R.W;
            case 1048576:
                return this.c ? _u.R.BN : _u.R.Iv;
            case 524288:
                return this.c ? _u.R.Uw : _u.R.UD;
            case 32:
                return this.c ? _u.R.RT : _u.R.Qj;
            case 16:
                return this.c ? _u.R.ND : _u.R.Ds;
            case 8:
                return this.c ? _u.R.GV : _u.R.FP;
            case 4:
                return this.c ? _u.R.Qv : _u.R.Hs;
            case 2:
                return this.c ? _u.R.EO : _u.R.Rf;
            case 1:
                return this.c ? _u.R.LM : _u.R.If;
            case 4194304:
                return this.c ? _u.R.HY : _u.R.DK;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
                return this.c ? _a.d.bq()[this.d.b.r()] : _a.d.bN()[this.d.b.r()];
            default:
                return ""
        }
    }
};
_y.S = function(n, t, i) {
    this.a = n;
    this.b = t;
    this.c = i
};
_y.S.a = function(n, t) {
    var e = 16777215;
    var f = n.d();
    var s = (7 + (f.r() - _a.d.e(f).r())) % 7;
    var k = f.c(1);
    var d = f.c(-1);
    var c = f.c(7 - s);
    var a = c.c(7);
    var h = a.c(7);
    var g = h.c(7);
    var y = f.c(-1 * (7 + s));
    var p = y.c(-7);
    var l = p.c(-7);
    g.f() !== f.f() && (e &= -65537);
    s !== 6 && (e &= -2097153);
    0 !== s && (e &= -524289);
    l.f() === f.f() && 1 < l.j() || (e &= -5);
    var u = new _a.R;
    var r = _a.d.z;
    if (t) {
        u.d(0, new _y.S(8388608, t, r));
        r = t
    }
    var i = new _a.d(f.g(), f.f(), 1);
    i = i.s(2);
    u.d(0, new _y.S(262144, i, r));
    r = i;
    var b = _a.d.s(f.f(), f.g()) - f.j();
    i = 21 < b ? r.s(-1) : h.c(7);
    u.d(0, new _y.S(131072, i, r));
    if (0 < (e & 65536)) {
        r = i;
        i = h.c(7);
        u.d(0, new _y.S(65536, i, r))
    }
    r = i;
    i = h;
    u.d(0, new _y.S(32768, i, r));
    r = i;
    i = a;
    u.d(0, new _y.S(16384, i, r));
    r = i;
    i = s === 6 ? c.c(1) : c;
    u.d(0, new _y.S(8192, i, r));
    if (0 < (e & 2097152)) {
        r = i;
        i = i.c(-1);
        u.d(0, new _y.S(2097152, i, r))
    }
    for (var v = 7; 0 < v; --v) {
        r = i;
        i = i.c(-1);
        var o = 4194304;
        if (k.j() === i.j()) o = 2097152;
        else if (f.j() === i.j()) o = 1048576;
        else if (d.j() === i.j()) o = 524288;
        else {
            var w = i.r();
            o = _y.S.b(w)
        }
        u.d(0, new _y.S(o, i, r))
    }
    if ((e & 524288) == 524288) {
        r = i;
        i = i.c(-1);
        u.d(0, new _y.S(524288, i, r))
    }
    r = i;
    r = i;
    i = y;
    u.d(0, new _y.S(32, i, r));
    r = i;
    i = p;
    u.d(0, new _y.S(16, i, r));
    r = i;
    i = l;
    u.d(0, new _y.S(8, i, r));
    if (0 < (e & 4)) {
        r = i;
        i = i.c(-1 * (i.j() - 1));
        u.d(0, new _y.S(4, i, r))
    }
    r = i;
    r.j() === 1 && (i = i.c(-1));
    i = i.c(-1 * (i.j() - 1));
    u.d(0, new _y.S(2, i, r));
    r = i;
    i = _a.d.g;
    u.d(0, new _y.S(1, i, r));
    u.d(0, new _y.S(4194304, _a.d.g, _a.d.g));
    return u
};
_y.S.b = function(n) {
    switch (n) {
        case 0:
            return 64;
        case 1:
            return 128;
        case 2:
            return 256;
        case 3:
            return 512;
        case 4:
            return 1024;
        case 5:
            return 2048;
        case 6:
            return 4096;
        default:
            return 64
    }
};
_y.S.prototype = {
    b: null,
    c: null,
    a: 0,
    C: function(n) {
        if (_y.S.isInstanceOfType(n)) {
            var t = n;
            return !!t && t.b.C(this.b) && t.c.C(this.c) && t.a === this.a
        } else return !1
    },
    d: function(n) {
        return n ? this.b.a(n) <= 0 && n.a(this.c) < 0 || this.b.C(n) && this.b.C(this.c) : this.a === 4194304
    }
};
_y.ll = function(n) {
    _y.ll.initializeBase(this);
    this.M = n
};
_y.ll.prototype = {
    M: null
};
_y.ea = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
    this.o = Function.createDelegate(this, this.F);
    this.C = Function.createDelegate(this, this.I);
    this.D = Function.createDelegate(this, this.J);
    this.f = n;
    this.p = t;
    this.b = i;
    this.s = r;
    this.B = u;
    this.q = f;
    this.z = e;
    this.d = o;
    this.a = s;
    this.r = h;
    this.u = c;
    this.i = l;
    this.y = v;
    this.H();
    this.h = a;
    this.h.b(_a.cU, this.D);
    this.h.b(_a.br, this.C)
};
_y.ea.b = function(n) {
    var t = new _g.fD;
    t.__type = undefined;
    t.Consumers = n.k;
    t.Id = n.l;
    t.Time = _a.d.p(n.j);
    var e = n.a;
    var r = _ff.i.a(e);
    if (r > 0) {
        t.Keys = new Array(r);
        t.Values = new Array(r);
        var i = 0;
        var o = e;
        for (var u in o) {
            var f = {
                key: u,
                value: o[u]
            };
            t.Keys[i] = f.key;
            t.Values[i] = _y.ea.a(f.value);
            i++
        }
    }
    return t
};
_y.ea.a = function(n) {
    if (_j.E.a(n)) return "";
    if (String.isInstanceOfType(n) || Number.isInstanceOfType(n)) return n;
    if (Boolean.isInstanceOfType(n)) return n ? "1" : "0";
    if (_a.d.isInstanceOfType(n)) return _a.d.p(n);
    try {
        return JsonParser.serialize(n)
    } catch (i) {
        var t = Object.getType(n).getName();
        _j.e.d(_a.a.cQ, i, "Unhandled exception serializing data point member.{0}Type: {1}{0}ToString(): {2}", "\r\n", t, n.toString());
        return "Unable to serialize " + t
    }
};
_y.ea.prototype = {
    f: null,
    p: null,
    z: null,
    d: null,
    a: null,
    r: null,
    u: null,
    i: null,
    b: null,
    y: 0,
    s: null,
    B: null,
    q: null,
    h: null,
    m: 0,
    k: null,
    e: null,
    c: !1,
    t: !0,
    v: "unknown",
    l: null,
    w: null,
    g: null,
    x: null,
    n: null,
    j: !1,
    F: function() {
        if (!this.c) {
            this.A();
            this.b.d();
            this.E(0);
            this.m = 0
        }
    },
    K: function() {
        if (!this.c) {
            this.c = !0;
            this.k && (this.m += _a.d.get_utcNow().a(this.k));
            this.e && (this.e = this.i.b(this.e))
        }
    },
    L: function() {
        if (this.c) {
            this.c = !1;
            this.E(this.m)
        }
    },
    N: function() {
        this.b.f()
    },
    M: function() {
        if (this.f.e()) return !1;
        if (_bc.o.isInstanceOfType(_g.k.a)) {
            var n = _g.k.a.e();
            return n.n() < 50
        }
        return !0
    },
    A: function() {
        _a.bD.g();
        var s = this.G(this.z);
        var o = this.b.i(s, _y.ea.b);
        var f = o;
        for (var r in f) {
            var u = {
                key: r,
                value: f[r]
            };
            var t = u.key;
            t === "null" && (t = null);
            var n = u.value;
            var i = this.s.a();
            if (i.lO().Enabled) {
                var h = this;
                this.B.a(function(t) {
                    t.a(n)
                })
            }
            if (i.F().Enabled) {
                var c = this;
                this.q.a(function(t) {
                    t.c(n)
                })
            }
            if (this.M()) {
                n[0].Time = n[1].Time;
                this.t && this.f.b() || (n[0].Consumers &= -3);
                var e = new _h.ew(t, n);
                this.p.a(e)
            }
        }
        this.t = !1
    },
    H: function() {
        this.n = this.d.d().c().a;
        this.j = !1;
        this.v = this.d.d().c().c;
        if (this.a.b(this.a.c())) {
            this.w = this.a.a().a().c();
            this.l = this.a.a().a().c();
            this.g = this.a.c().a().f();
            this.x = this.a.a().a().f();
            this.j = this.a.a().a().n()
        } else {
            this.l = _a.o.a().L.c().b.toString();
            this.g = this.n
        }
    },
    G: function(n) {
        return new _y.jL(n.l(-1), this.f.a(), _a.v.b(), _g.a.a().a().bH.TimeZone, window.applicationCache ? window.applicationCache.status : -1, window.owaSD ? window.owaSD.readyState : 0, this.d.d().d(), this.d.d().b().toString(), this.v, this.w, this.l, this.g, this.n, this.x, this.j, _g.a.a().a().bH.ShowInferenceUiElements, this.u.e().b(), this.r, window.screen.width, window.screen.height)
    },
    J: function(n) {
        this.A();
        this.b.d()
    },
    I: function(n) {
        this.A();
        this.b.d()
    },
    E: function(n) {
        this.e = this.i.a(_a.a.cQ, "ScheduleNextUpload", this.o, this.y * 1e3 - n);
        this.k = _a.d.get_utcNow()
    }
};
_y.jL = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d) {
    _y.jL.initializeBase(this, [7, "SessionInfo", n]);
    this.a.l = t;
    this.a.clg = i;
    this.a.tz = r;
    this.a.cs = u.toString();
    this.a.sd = f.toString();
    this.a.brn = e;
    this.a.brv = o;
    this.a.osn = s;
    this.a.pl = a;
    this.a.sr = _j.h.c("{0}x{1}", k, d);
    _j.h.a(h) || (this.a.os = h);
    _j.h.a(c) || (this.a.osv = c);
    _j.h.a(l) || (this.a.dm = l);
    _j.h.a(v) || (this.a.pbld = v);
    y && (this.a.pdf = y);
    this.a.uio = p;
    this.a.oe = w;
    _j.h.a(b) || (this.a.cbld = b)
};
_y.fy = function(n) {
    this.e = Function.createDelegate(this, this.i);
    _y.fy.initializeBase(this);
    var t = this;
    n.b(_j.ba, function(n) {
        t.h(n.a.n())
    })
};
_y.fy.prototype = {
    a: !1,
    b: null,
    d: null,
    c: "Start",
    g: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.eN("PerfTracingEnabled", "StartStopPerfTracingCommand")
        }
        return n
    },
    f: function() {
        if (!this.a) return null;
        this.d || (this.d = new _j.g(this.e, _a.a.g));
        return this.d
    },
    h: function(n) {
        n && this.g(n.bH.ManualPerfTracerEnabled ? !0 : !1)
    },
    i: function() {
        var n = "ManualTrace_" + _y.c.a.a();
        if (this.b) {
            _a.bg.b(this.b);
            this.c = "Start";
            this.b = null
        } else {
            this.b = _a.bg.d(_a.a.R, n);
            this.c = "Stop"
        }
        this.eJ("StartStopPerfTracingButtonText")
    }
};
_y.Z = function(n, t) {
    this.a = n;
    this.b = t
};
_y.Z.prototype = {
    a: null,
    b: null
};
_y.ba = function(n, t) {
    this.b = n;
    this.c = t
};
_y.ba.prototype = {
    b: null,
    c: null,
    d: !1,
    a: function() {
        this.d = !0
    }
};
_y.bt = function(n, t, i, r) {
    this.D = Function.createDelegate(this, this.X);
    this.C = Function.createDelegate(this, this.T);
    this.E = Function.createDelegate(this, this.Y);
    this.j = {};
    this.p = {};
    this.i = new _j.l;
    _y.bt.initializeBase(this);
    this.t = n;
    n && n.b(_a.cU, this.E);
    this.x = t;
    this.y = i;
    this.n = r || new _a.dm
};
_y.bt.prototype = {
    x: !1,
    y: 0,
    h: null,
    u: !1,
    n: null,
    l: !1,
    q: !1,
    t: null,
    Z: function(n) {
        if (this.h === n) return n;
        this.U(this.h);
        this.h = n;
        this.G(this.h.c);
        if (!(this.h.c in this.j)) {
            var u = new _j.l;
            var t = this.h;
            u.a(t);
            if (this.h.e()) {
                t = this.h.b.ba();
                this.s(t);
                u.q(0, t)
            } else {
                var r = this.h;
                var i = this;
                r.g(function() {
                    if (i.h === r) {
                        t = r.b.ba();
                        i.s(t);
                        u.q(0, t);
                        var n = i.i.m(r);
                        n >= 0 && i.i.q(n, t);
                        i.eJ("Top")
                    }
                });
                this.h.n()
            }
            if (!t) throw Error.invalidOperation("The module " + this.h.c + " shouldn't return a null initial view model!");
            this.j[this.h.c] = u
        }
        this.R();
        this.h.e() && this.h.b.lr() && this.z();
        if (this.t) {
            var f = this;
            n.g(function() {
                f.t.a(_y.fz, new _y.fz(n.b))
            })
        }
        this.eJ("ActiveNavigationStack");
        this.eJ("Top");
        return n
    },
    N: function(n) {
        if (this.q !== n) {
            this.q = n;
            this.eJ("PreventModuleViewActivation")
        }
        return n
    },
    b: function() {
        return this.h ? this.j[this.h.c] : null
    },
    O: function(n) {
        if (this.l === n) return n;
        this.l = n;
        this.eJ("TransitionInProgress");
        return n
    },
    I: function() {
        this.z();
        this.H();
        var t = new _j.q;
        var u = this.j;
        for (var i in u) {
            var r = {
                key: i,
                value: u[i]
            };
            r.key !== this.h.c && t.c(r.key)
        }
        for (var n = 0; n < t.d.length; n++) delete this.j[t.d[n]]
    },
    z: function() {
        var n = this.b().x.length - 1;
        n > 0 && this.r(n)
    },
    e: function(n) {
        this.L(n, !1)
    },
    f: function(n) {
        this.q && this.b().x.length - n == 1 && this.N(!1);
        _y.kc.prototype.f.call(this, n)
    },
    K: function(n) {
        this.L(n, !0)
    },
    g: function(n) {
        this.M(n, !1)
    },
    V: function(n) {
        this.M(n, !0)
    },
    c: function(n) {
        this.P(n, !1)
    },
    W: function(n) {
        this.P(n, !0)
    },
    r: function(n) {
        for (var r = this.b().x.length, t = r - n; t < r; t++) {
            var i = this.b().x[t];
            this.n.a(i) || this.i.p(i, !0)
        }
        _y.kc.prototype.r.call(this, n)
    },
    w: function(n) {
        return this.v(!1) ? _y.kc.prototype.w.call(this, n) : !1
    },
    P: function(n, t) {
        if (this.v(t) && this.a() !== n) {
            var i = this.a();
            _y.kc.prototype.c.call(this, n);
            this.n.a(i) || this.i.p(i, !0);
            this.i.w(n) || this.i.a(n)
        }
    },
    L: function(n, t) {
        if (this.v(t)) {
            _y.kc.prototype.e.call(this, n);
            this.i.w(n) || this.i.a(n)
        }
    },
    M: function(n, t) {
        if (this.v(t)) {
            var o = this.a();
            var u = this.j;
            for (var f in u)
                for (var e = {
                        key: f,
                        value: u[f]
                    }, i = e.value, r = 0; r < i.x.length; r++)
                    if (i.x[r] === n) {
                        if (i.x.length === 1) throw Error.invalidOperation("Can't remove all the items from the stack!");
                        i.p(n, !0);
                        this.i.w(n) && !this.n.a(n) && this.i.p(n, !0);
                        break
                    }
            this.a() !== o && this.eJ("Top")
        }
    },
    v: function(n) {
        if (!this.h) throw Error.invalidOperation("You cannot navigate in this conductor before setting the CurrentModule!");
        return this.l && !n ? !1 : !0
    },
    U: function(n) {
        if (this.x && n) {
            var t = this;
            var i = _j.m.a().a(_a.a.ce, this.h.c + "ExpirationTimer", function() {
                t.S(t.j[n.c])
            }, this.y);
            this.p[n.c] = i
        }
    },
    G: function(n) {
        if (n in this.p) {
            _j.m.a().b(this.p[n]);
            delete this.p[n]
        }
    },
    Y: function(n) {
        if (!this.u) {
            _j.m.a().c(_a.a.ce, "CleanupInactiveModulesOnLowMemory", this.C);
            this.u = !0
        }
    },
    H: function() {
        var t = this.j;
        for (var i in t) {
            var r = {
                key: i,
                value: t[i]
            };
            this.G(this.p[r.key])
        }
        for (var n = this.i.x.length; n >= 0; n--) this.b().w(this.i.x[n]) || this.i.n(n)
    },
    T: function() {
        this.H();
        for (var t = this.n.c(this.D, _a.dm.a), n = 0; n < t.d.length; n++) this.n.d(t.d[n]);
        this.u = !1
    },
    X: function(n) {
        return !!n.value && !this.b().w(n.value)
    },
    S: function(n) {
        if (n && n !== this.b())
            for (var t = 0; t < n.x.length; t++) this.i.p(n.x[t], !0)
    },
    R: function() {
        for (var t = new _j.q, n = 0; n < this.b().x.length; n++) this.i.w(this.b().x[n]) || t.c(this.b().x[n]);
        t.d.length > 0 && this.i.j(t.i())
    }
};
_y.fA = function(n, t, i) {
    this.jp = Function.createDelegate(this, this.pu);
    this.jq = Function.createDelegate(this, this.eB);
    _y.fA.initializeBase(this);
    this.pv(n);
    this.G = t;
    this.H = i;
    if (this.H) {
        this.G.b(_y.P, this.jq);
        this.jt = !0
    }
};
_y.fA.prototype = {
    jt: !1,
    H: null,
    bJ: null,
    N: !1,
    G: null,
    jr: !1,
    ls: function(n) {
        if (this.N !== n) {
            this.N = n;
            this.S();
            this.eJ("IsVisible")
        }
        return n
    },
    pv: function(n) {
        if (this.bJ !== n) {
            this.bJ = n;
            this.eJ("DisplayName")
        }
        return n
    },
    C: function() {
        return this.H ? this.H.a : null
    },
    eA: function() {
        return null
    },
    lr: function() {
        return !1
    },
    eL: function() {
        this.jt && this.G.c(_y.P, this.jq);
        _a.gd.prototype.eL.call(this)
    },
    js: function() {
        this.G.a(_y.fB, new _y.fB(this))
    },
    dw: function() {},
    du: function() {},
    dx: function() {},
    dv: function() {},
    eB: function(n) {},
    S: function() {
        if (this.N) {
            this.G.b(_y.eM, this.jp);
            this.G.a(_a.bl, null)
        } else this.G.c(_y.eM, this.jp)
    },
    cb: function() {},
    pu: function(n) {
        this.cb()
    }
};
_y.bj = function(n, t, i, r, u, f) {
    _y.bj.initializeBase(this);
    this.b = i;
    this.a = t;
    this.m = r;
    this.c = n;
    this.o = !!u !== u ? !0 : u;
    this.d = !!f !== f ? !1 : f
};
_y.bj.prototype = {
    a: 0,
    d: !1,
    m: null,
    o: !1,
    b: null,
    c: null,
    h: !1,
    f: null,
    i: null,
    l: !1,
    g: function(n) {
        if (this.e()) {
            n();
            return
        }
        this.f || (this.f = []);
        Array.contains(this.f, n) || Array.add(this.f, n)
    },
    j: function() {
        this.i || (this.i = {});
        return this.i
    },
    e: function() {
        return !!this.b
    },
    p: function(n) {
        return n in this.j() ? this.j()[n] : null
    },
    n: function() {
        if (!this.h && !this.e()) {
            this.h = !0;
            this.eJ("IsLoading");
            var n = this;
            this.m.a(function(t) {
                n.b = t;
                n.b.jr = n.l;
                n.h = !1;
                n.eU("IsLoaded", "IsLoading", "ModuleViewModel");
                if (n.f)
                    for (var i = 0; i < n.f.length; i++) {
                        var r = n.f[i];
                        r && r()
                    }
                n.f = null
            })
        }
    }
};
_y.cr = function(n, t) {
    this.a = t;
    this.b = n
};
_y.cr.prototype = {
    b: !1,
    a: "Previous"
};
_y.fB = function(n) {
    this.a = n
};
_y.fB.prototype = {
    a: null
};
_y.p = function(n, t, i, r, u, f, e, o) {
    this.a = n;
    this.f = t;
    this.e = i;
    this.d = r;
    this.h = u;
    this.b = f;
    this.c = e;
    this.g = o
};
_y.p.prototype = {
    a: 0,
    f: null,
    e: !1,
    d: !1,
    h: !1,
    b: !1,
    c: !1,
    g: !1
};
_y.J = function(n, t, i, r) {
    this.A = Function.createDelegate(this, this.bR);
    this.B = Function.createDelegate(this, this.bS);
    this.bz = Function.createDelegate(this, this.o);
    this.bv = Function.createDelegate(this, this.be);
    this.bu = Function.createDelegate(this, this.bd);
    this.bw = Function.createDelegate(this, this.bf);
    this.by = Function.createDelegate(this, this.bU);
    this.bx = Function.createDelegate(this, this.bT);
    this.t = new _j.l;
    _y.J.initializeBase(this);
    this.bc = n;
    this.h = new _y.A;
    this.C = _y.bg.b;
    this.bb = new _j.g(this.bx, _y.J.b);
    this.D = new _j.g(this.by, _y.J.b);
    this.Z = new _j.g(this.bw, _y.J.b);
    this.X = new _j.g(this.bu, _y.J.b);
    this.Y = new _j.g(this.bv, _y.J.b);
    if (r) {
        var u = this;
        r.a(function(n) {
            u.bV(n.a(i));
            u.g.i(u.bb);
            u.g.o(u.D);
            u.g.apcl("SelectedModernGroup", u.bz)
        })
    }
    this.h.e(t ? t : this);
    this.t.a(this)
};
_y.J.prototype = {
    h: null,
    bb: null,
    D: null,
    Z: null,
    X: null,
    Y: null,
    bc: null,
    K: null,
    L: null,
    i: null,
    l: null,
    m: !1,
    g: null,
    w: null,
    bg: function(n) {
        if (this.K !== n) {
            this.K = n;
            this.eJ("NewCommand")
        }
        return n
    },
    bh: function(n) {
        if (this.L !== n) {
            this.L = n;
            this.eJ("NewInPopupCommand")
        }
        return n
    },
    bA: function(n) {
        if (this.i !== n) {
            if (this.i && this.i.a) {
                this.i.a.v("IsSettingsVisible", this.B);
                this.i.a.v("InSearchMode", this.A)
            }
            this.i = n;
            if (this.i) {
                this.i.i("IsSettingsVisible", this.B);
                this.i.i("InSearchMode", this.A)
            }
            this.eJ("MeSpaceSearchControllerViewModel")
        }
        return n
    },
    bB: function(n) {
        if (this.l !== n) {
            if (this.l && this.l.a) {
                this.l.a.v("IsSettingsVisible", this.B);
                this.l.a.v("InSearchMode", this.A)
            }
            this.l = n;
            if (this.l) {
                this.l.i("IsSettingsVisible", this.B);
                this.l.i("InSearchMode", this.A)
            }
            this.eJ("WeSpaceSearchControllerViewModel")
        }
        return n
    },
    n: function(n) {
        if (this.m !== n) {
            this.m = n;
            this.q();
            this.eN("IsExpanded", "ExpandCollapseButtonLabel")
        }
        return n
    },
    I: function() {
        return 0
    },
    bQ: function() {
        return this.i && this.i.a ? this.i.a.bV() : !1
    },
    ba: function() {
        return _y.s.isInstanceOfType(this)
    },
    C: !1,
    bW: function() {
        return this.g
    },
    bV: function(n) {
        if (this.g !== n) {
            this.g = n;
            this.eJ(_y.J.a)
        }
        return n
    },
    bP: function() {
        return this.m ? _u.R.X : _u.R.CE
    },
    bX: function(n) {
        this.w = n;
        return n
    },
    dw: function() {},
    du: function() {},
    dx: function() {},
    dv: function() {},
    u: function() {
        this.l && this.l.a && this.l.a.y() && this.l.a.p().a();
        this.g && this.g.b(null);
        this.h.a() === this.g && this.h.d()
    },
    v: function() {
        this.i && this.i.a && this.i.a.y() && this.i.a.p().a()
    },
    q: function() {},
    o: function(n, t) {
        this.w && this.w.a()
    },
    bf: function() {
        this.n(!this.m)
    },
    bd: function() {
        if (this.i) {
            var n = this;
            this.i.d(function(t) {
                n.i.e(!0);
                n.n(!0)
            })
        }
    },
    be: function() {
        if (this.l) {
            var n = this;
            this.l.d(function(t) {
                n.l.e(!0);
                n.n(!0)
            })
        }
    },
    bS: function(n, t) {
        var i = n;
        i.y() && _a.bw.isInstanceOfType(i.b()) ? this.h.e(i.b()) : !i.y() && _a.bw.isInstanceOfType(i.b()) && this.h.g(i.b())
    },
    bR: function(n, t) {
        this.eJ("ShowExitSearchButton")
    },
    bU: function() {
        this.h.d()
    },
    bT: function() {
        _y.dM.isInstanceOfType(this.h.a()) || this.h.e(this.g)
    }
};
_y.gS = function() {};
_y.gY = function(n, t, i, r) {
    this.f = Function.createDelegate(this, this.h);
    this.d = n;
    this.e = t;
    this.c = i;
    this.g = r
};
_y.gY.prototype = {
    d: null,
    g: !1,
    e: null,
    c: null,
    b: null,
    a: null,
    h: function() {
        this.b && (this.g ? this.b.bd(this) : this.b.be(this))
    }
};
_y.R = function(n, t, i, r, u, f, e, o, s, h, c, l) {
    this.G = [];
    _y.R.initializeBase(this, [n, t, null, c]);
    this.bc = l;
    this.bm(u, f, e, o, s, h);
    this.Q = i;
    this.P = r
};
_y.R.c = function(n) {
    var t = _u.R.MH;
    var u = 0;
    var r = 0;
    var f = 0;
    if (n > 0) {
        u = _y.R.f(n);
        var i = n - u * 365;
        if (i > 0) {
            r = _y.R.e(i);
            f = i - r * 30
        }
        t = _y.R.d(u, r, f);
        t = t.trim()
    }
    return t
};
_y.R.f = function(n) {
    return Math.floor(n / 365)
};
_y.R.e = function(n) {
    return Math.floor(n / 30)
};
_y.R.d = function(n, t, i) {
    var r = 9 * Math.min(n, 2) + 3 * Math.min(t, 2) + Math.min(i, 2);
    _y.R.a && !_y.R.a.f || (_y.R.a = new _j.J(function() {
        return [_u.R.MH, _u.R.CI, _u.R.Sh, _u.R.Du, _u.R.CH, _u.R.La, _u.R.PH, _u.R.PR, _u.R.NC, _u.R.Mo, _u.R.Dz, _u.R.Ru, _u.R.Hu, _u.R.GD, _u.R.Tz, _u.R.Bv, _u.R.Le, _u.R.Mj, _u.R.Bl, _u.R.WM, _u.R.TO, _u.R.SY, _u.R.Nx, _u.R.PN, _u.R.Kf, _u.R.G, _u.R.KJ]
    }));
    return String.format(_y.R.a.e()[r], n, t, i)
};
_y.R.prototype = {
    q: null,
    m: null,
    Q: null,
    P: null,
    bb: null,
    ba: null,
    bc: !1,
    be: function(n) {
        if (this.q !== n) {
            this.q && this.q.a.i(!1);
            this.q = n;
            this.q && this.q.a.i(!0);
            this.by("CurrentDeleteOption");
            this.Q && (this.q ? this.Q(this.q.c) : this.Q(null))
        } else this.q && this.q.a.i(!0);
        return n
    },
    bd: function(n) {
        if (this.m !== n) {
            this.m && this.m.a.i(!1);
            this.m = n;
            this.m && this.m.a.i(!0);
            this.by("CurrentArchiveOption");
            this.P && (this.m ? this.P(this.m.c) : this.P(null))
        } else this.m && this.m.a.i(!0);
        return n
    },
    bj: function() {
        this.q && this.q.a.i(!1);
        this.q = null;
        this.m && this.m.a.i(!1);
        this.m = null
    },
    C: function(n, t) {
        var i = this.bo(n);
        if (t) {
            this.m && this.m.c !== n && this.m.a.i(!1);
            n || (i = this.ba);
            this.m = i;
            this.m && this.m.a.i(!0)
        } else {
            this.q && this.q.c !== n && this.q.a.i(!1);
            n || (i = this.bb);
            this.q = i;
            this.q && this.q.a.i(!0)
        }
    },
    bm: function(n, t, i, r, u, f) {
        if (n && n.b()) {
            var s = this.bp(t);
            var e = [];
            var a = !1;
            var o = 0;
            if (i) {
                Array.add(e, new _fm.n(_u.R.KD));
                if (s !== 12) {
                    var c = this.bi(n, !0);
                    for (o = 0; o < c.length; o++) {
                        var v = c[o];
                        a = f && v.RetentionId === u;
                        Array.add(e, this.Z(v, a, !0))
                    }
                }
                Array.add(e, this.bh(n, s, !0, f));
                Array.add(e, new _fm.i)
            }
            Array.add(e, new _fm.n(_u.R.JY));
            if (s === 17 && !this.bc)
                for (var y = this.bi(n, !1), l = this.bl(y), h = 0; h < l.d.length; h++) Array.add(e, this.bn(l.d[h], f, r));
            Array.add(e, this.bh(n, s, !1, f));
            this.E(new _fm.e(e))
        }
    },
    bi: function(n, t) {
        for (var u = [], i, r = 0; r < n.b(); r++) {
            i = n.a(r);
            i.IsVisible && i.IsArchive === t && Array.add(u, i)
        }
        u.sort(_g.ki.a);
        return u
    },
    bg: function(n, t) {
        return String.format("{0} ({1})", n, _y.R.c(t))
    },
    Z: function(n, t, i) {
        var r = new _y.gY(this.bg(n.DisplayName, n.RetentionPeriod), null, n.RetentionId, i);
        r.b = this;
        var u = new _fm.g(r.d, r.e, new _j.g(r.f, _y.R.b), t, !0);
        r.a = u;
        Array.add(this.G, r);
        t && (i ? this.bd(r) : this.be(r));
        return u
    },
    bn: function(n, t, i) {
        var o = t && n.b.RetentionId === i;
        if (n.a && n.a.d.length) {
            for (var s = [], r = 0; r < n.a.d.length; r++) {
                var e = n.a.d[r];
                var h = t && e.RetentionId === i;
                Array.add(s, this.Z(e, h, !1))
            }
            var u = new _y.gY(n.b.DisplayName, null, null, !1);
            u.b = this;
            Array.add(this.G, u);
            var f = new _fm.j(u.d, null, new _fm.e(s));
            f.d(o);
            return f
        } else return this.Z(n.b, o, !1)
    },
    bh: function(n, t, i, r) {
        var h = t === 12 ? i ? _u.R.s : _u.R.Pv : _u.R.DJ;
        var e = !1;
        if (t !== 17)
            for (var o = 0; o < n.b(); o++) {
                var f = n.a(o);
                f.Type === t && f.IsArchive === i && (h = this.bg(f.DisplayName, f.RetentionPeriod))
            }
        var u = new _y.gY(h, null, null, i);
        u.b = this;
        if (i) {
            this.ba = u;
            e = !!this.m
        } else {
            this.bb = u;
            e = !!this.q
        }
        var s = new _fm.g(u.d, u.e, new _j.g(u.f, _y.R.b), !e && r, !0);
        u.a = s;
        Array.add(this.G, u);
        !e && r && (i ? this.bd(u) : this.be(u));
        return s
    },
    bo: function(n) {
        for (var r = null, t = 0; t < this.G.length; t++) {
            var i = this.G[t];
            if (i.c === n) {
                r = i;
                break
            }
        }
        return r
    },
    bp: function(n) {
        var t = 17;
        if (n === _g.bb.a) return t;
        switch (n) {
            case "archivedeleteditems":
                t = 3;
                break;
            case "archiverecoverableitemsdeletions":
                t = 18;
                break;
            case "calendar":
                t = 1;
                break;
            case "contacts":
                t = 2;
                break;
            case "conversationhistory":
                t = 16;
                break;
            case "deleteditems":
                t = 3;
                break;
            case "drafts":
                t = 4;
                break;
            case "inbox":
                t = 5;
                break;
            case "junkemail":
                t = 6;
                break;
            case "journal":
                t = 7;
                break;
            case "notes":
                t = 8;
                break;
            case "outbox":
                t = 9;
                break;
            case "recoverableitemsdeletions":
                t = 18;
                break;
            case "sentitems":
                t = 10;
                break;
            case "syncissues":
                t = 15;
                break;
            case "tasks":
                t = 11;
                break;
            case "msgfolderroot":
                t = 12;
                break;
            case "archivemsgfolderroot":
                t = 12;
                break;
            default:
                break
        }
        return t
    },
    bl: function(n) {
        for (var e = new _j.q, u = {}, f = 0; f < n.length; f++) {
            var i = n[f];
            if (!i.ParentLabelIdentity || i.ParentLabelIdentity.length <= 0) {
                var o = new _y.R.g(i);
                e.c(o);
                u[i.RetentionId] = o
            }
        }
        for (var r = 0; r < n.length; r++) {
            var t = n[r];
            if (t.ParentLabelIdentity && t.ParentLabelIdentity.length > 0 && t.ParentLabelIdentity in u) {
                var s = u[t.ParentLabelIdentity];
                s.a.c(t)
            }
        }
        return e
    }
};
_y.R.g = function(n) {
    this.b = n;
    this.a = new _j.q
};
_y.R.g.prototype = {
    b: null,
    a: null
};
_y.gZ = function(n) {
    this.a = n
};
_y.gZ.prototype = {
    a: 0
};
_y.lJ = function() {
    this.kK = Function.createDelegate(this, this.fD);
    _y.lJ.initializeBase(this);
    this.fk = new _j.g(this.kK, _a.a.O)
};
_y.lJ.prototype = {
    kM: null,
    fk: null,
    eV: null,
    fq: !1,
    fx: null,
    fe: null,
    eF: function() {
        return this.fq
    },
    nA: function(n) {
        if (n !== this.fq) {
            this.fq = n;
            this.eJ("IsTransitionedIn")
        }
        return n
    },
    bU: function() {
        return this.kM
    },
    bt: function(n) {
        this.kM = n;
        return n
    },
    br: function() {
        return null
    },
    cr: function() {
        return null
    },
    l: function() {
        return this.eV
    },
    ff: function(n) {
        if (this.eV !== n) {
            this.eV = n;
            this.eJ("ApplicationBarViewModel")
        }
        return n
    },
    bR: function() {
        return this.fx
    },
    gb: function(n) {
        if (this.fx !== n) {
            this.fx = n;
            this.eJ("BottomAppBarViewModel")
        }
        return n
    },
    kL: null,
    u: function() {
        return this.fe
    },
    fl: function(n) {
        if (this.fe !== n) {
            this.fe = n;
            this.eJ("TopAppBarViewModel")
        }
        return n
    },
    n: function() {
        return _y.c.a.a() === "Mouse" ? 0 : 2
    },
    hZ: function() {
        return !!this.n() && !!this.eV
    },
    dw: function() {},
    du: function() {
        this.nA(!0)
    },
    dx: function() {
        this.nA(!1)
    },
    dv: function() {},
    fD: function() {
        this.bU().d()
    },
    eL: function() {
        var i;
        _a.h.a(i = {
            val: this.fk
        }), this.fk = i.val;
        var r;
        _a.h.a(r = {
            val: this.eV
        }), this.eV = r.val;
        var n;
        _a.h.a(n = {
            val: this.fe
        }), this.fe = n.val;
        var t;
        _a.h.a(t = {
            val: this.fx
        }), this.fx = t.val;
        _a.gd.prototype.eL.call(this)
    }
};
_y.hE = function() {};
_y.hE.prototype = {
    b: null,
    a: function(n) {
        _j.h.a(this.b) ? this.b = n : this.b += "\r\n" + n
    }
};
_y.c = function(n, t, i, r, u, f, e, o, s, h, c) {
    this.bm = Function.createDelegate(this, this.bD);
    this.by = new _j.R;
    this.bg = new _j.H;
    this.bj = new _j.R;
    this.bi = new _j.R;
    this.bh = new _j.R;
    _y.c.initializeBase(this);
    this.bl = n;
    this.bc = t;
    this.X = r.a();
    this.bv = r.h();
    this.bz = r.q();
    this.bd = r.x();
    this.bu = r.r();
    this.br = r.f();
    this.ba = u;
    this.Z = h;
    this.bb = f;
    this.be = !!s !== s ? !1 : s;
    this.bf = r.g() === "GenericMail";
    this.bp = i;
    this.bo = o;
    this.bq = e;
    this.bt = c;
    if (this.ba) {
        var l = this;
        this.ba.e(function() {
            l.eJ("PopOutViewModel")
        })
    }
};
_y.c.b = function() {
    var n = !1;
    try {
        n = !window.opener
    } catch (t) {}
    n && !_a.o.a().I ? window.location.href = window.location.href : window.close()
};
_y.c.prototype = {
    bl: null,
    bc: null,
    bp: null,
    ba: null,
    bb: null,
    bq: null,
    bo: null,
    bt: null,
    br: !1,
    be: !1,
    bf: !1,
    bv: null,
    bz: null,
    bd: null,
    Z: null,
    bu: null,
    bk: null,
    X: 0,
    bs: !1,
    Y: null,
    bw: null,
    m: function(n) {
        this.bg.b(n)
    },
    l: function(n) {
        this.bg.c(n)
    },
    w: function(n) {
        this.bj.b(n)
    },
    D: function(n) {
        this.bj.c(n)
    },
    n: function(n) {
        this.bi.b(n)
    },
    p: function(n) {
        this.bi.c(n)
    },
    h: function(n) {
        this.bh.b(n)
    },
    j: function(n) {
        this.bh.c(n)
    },
    e: function() {
        return this.be
    },
    i: function() {
        return this.bf
    },
    u: function() {
        return this.X !== "TouchNarrow"
    },
    t: function() {
        return this.bv
    },
    a: function() {
        return this.X
    },
    z: function() {
        return this.bu
    },
    bn: null,
    y: function() {
        return this.bn
    },
    V: function(n) {
        this.bn = n;
        return n
    },
    K: function() {
        return this.bk
    },
    W: function(n) {
        this.bk && Error.invalidOperation("PALStartTime can only be set once.");
        this.bk = n;
        return n
    },
    c: function() {
        return this.bc
    },
    s: function() {
        return this.bb
    },
    bA: function() {
        return this.ba.d() ? this.ba.b() : null
    },
    b: function() {
        return this.br
    },
    I: function() {
        return this.bs
    },
    U: function(n) {
        this.bs = n;
        return n
    },
    bF: function(n) {
        if (this.Y !== n) {
            this.Y && this.Y.rpcl("IsShown", this.bm);
            this.Y = n;
            if (n) {
                n.f(!0);
                n.apcl("IsShown", this.bm)
            }
            this.eJ("DialogBox")
        }
        return n
    },
    A: function() {
        return this.bw
    },
    L: function(n, t) {
        if (_bc.j.isInstanceOfType(n)) {
            var i = n;
            var r = this;
            i.o(function() {
                var n = t.b().m(i);
                if (n >= 0) {
                    var f = !n;
                    if (!r.b() && f) _y.c.b();
                    else {
                        var u = _j.n.b(_a.a.g, 2, "PopMany");
                        t.f(t.b().x.length - n);
                        _j.n.a(u)
                    }
                }
            })
        }
    },
    r: function(n, t, i, r) {
        var u = this;
        this.ba.a(function(f) {
            f.d(n, !t && u.Z ? function() {
                return u.Z(n)
            } : t, i, r)
        })
    },
    g: function(n, t, i, r, u, f) {
        this.bx(n, t, i, r, u, f, null)
    },
    T: function(n, t, i, r, u, f, e) {
        this.bx(n, t, i, r, u, f, e)
    },
    d: function(n) {
        this.f(n, 0, !1)
    },
    C: function(n) {
        this.f(n, 0, !1, !0)
    },
    f: function(n, t, i, r) {
        var u = _j.n.b(_a.a.g, 2, "ShellPopUp");
        var f = Object.getType(n).getName();
        this.bE(this.q(r), t, n, i);
        _j.n.a(u)
    },
    q: function(n) {
        if (this.b() || n) switch (this.X) {
            case "Mouse":
            case "TouchWide":
                return this.bb;
            case "TouchNarrow":
                var t = this.bl.a();
                if (this.be && t && _y.gh.isInstanceOfType(t)) {
                    var i = t;
                    return i.a()
                }
                return this.bf ? this.bc : this.bl;
            default:
                throw Error.invalidOperation("Layout not supported: " + this.X);
        } else return this.bc
    },
    P: function() {
        this.by.a()
    },
    O: function(n) {
        this.bg.a(n)
    },
    S: function() {
        this.bj.a()
    },
    R: function() {
        this.bi.a()
    },
    Q: function() {
        this.bh.a()
    },
    o: function(n) {
        return String.format("{0}/images/0/{1}", this.bd, n)
    },
    N: function(n) {
        return String.format("{0}/sounds/{1}", this.bd, n)
    },
    M: function(n) {
        return String.format("{0}/styles/{1}", this.bd, n)
    },
    H: function() {
        var i = !1;
        var t = this.bB();
        if (t)
            for (var n = 0; n < t.x.length; n++) {
                var r = t.x[n];
                if (_y.dH.isInstanceOfType(r)) {
                    i = !0;
                    break
                }
            }
        return i
    },
    bx: function(n, t, i, r, u, f, e) {
        i || (i = {});
        var o = null;
        if (this.X === "TouchNarrow" && this.Z && u) {
            var h = this.Z(n);
            _bc.y.isInstanceOfType(h) || (o = h.a(u, null, null))
        }
        if (o) this.f(o, 0, f);
        else {
            var s = this;
            this.ba.c(function(o) {
                o.e(n, !t && s.Z ? function() {
                    return s.Z(n)
                } : t, i, r, u, f, e)
            }, !1)
        }
    },
    bB: function() {
        var n = null;
        switch (this.X) {
            case "TouchNarrow":
                var t = this.c().a();
                _y.j.isInstanceOfType(t) && (n = t.g().b());
                break;
            case "TouchWide":
                n = this.bb.b();
                break
        }
        return n
    },
    B: function() {
        var n = this.bC();
        return n ? _a.cN.c(n, this.X) : ""
    },
    bC: function() {
        var t = this.c().a();
        if (_y.j.isInstanceOfType(t)) {
            var n = t.g().b();
            return n.x[n.x.length - 1]
        }
        return null
    },
    bE: function(n, t, i, r) {
        this.L(i, n);
        switch (t) {
            case 1:
                _y.bt.isInstanceOfType(n) && r ? n.W(i) : n.c(i);
                break;
            case 0:
                _y.bt.isInstanceOfType(n) && r ? n.K(i) : n.e(i);
                break;
            default:
                throw Error.notImplemented("Behavior not implemented for operation " + t);
        }
    },
    bD: function(n, t) {
        this.Y && (this.Y.r || this.bF(null))
    }
};
_y.cU = function(n, t) {
    this.t = Function.createDelegate(this, this.E);
    this.n = Function.createDelegate(this, this.D);
    this.l = Function.createDelegate(this, this.C);
    this.i = new _j.l;
    _y.cU.initializeBase(this);
    this.h = n;
    this.q = t;
    this.h.b(_y.ba, this.l);
    this.h.b(_a.di, this.n)
};
_y.cU.a = function(n, t, i, r) {
    return !!r && _bc.s.isInstanceOfType(r) && !!r.x() && r.x()(n, t, i)
};
_y.cU.prototype = {
    h: null,
    q: null,
    j: !1,
    b: function() {
        return this.j ? null : this.i
    },
    y: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.eJ("ActiveNavigationStack");
            this.eJ("Top")
        }
        return n
    },
    e: function(n) {
        var t = _j.n.b(_a.a.g, 2, "PopupPanelControllerViewModel:Push");
        if (this.b()) {
            _y.kc.prototype.e.call(this, n);
            this.z(n)
        }
        _j.n.a(t)
    },
    c: function(n) {
        var i = _j.n.b(_a.a.g, 2, "PopupPanelControllerViewModel:SetTop");
        var t = this;
        _y.cU.a(function() {
            t.x(n)
        }, 4, null, this.b().x[this.b().x.length - 1]) || this.x(n);
        _j.n.a(i)
    },
    x: function(n) {
        var t = _j.n.b(_a.a.g, 2, "PopupPanelControllerViewModel:InternalSetTop");
        _y.kc.prototype.c.call(this, n);
        this.z(n);
        _j.n.a(t)
    },
    f: function(n) {
        this.p(n, 2)
    },
    g: function(n) {
        var t = this.a();
        this.i.p(n, !0);
        t !== this.a() && this.eJ("Top")
    },
    eL: function() {
        this.h.c(_y.ba, this.l);
        this.h.c(_a.di, this.n);
        _a.gd.prototype.eL.call(this)
    },
    C: function(n) {
        if (n.c !== n.b) {
            var t = this;
            this.u(n, function() {
                t.h.a(_y.p, new _y.p(n.c.a, null))
            }, 1)
        }
    },
    D: function(n) {
        this.u(n, n.d, 1)
    },
    u: function(n, t, i) {
        if (this.b() && this.b().x.length) {
            var r = this.v(this.b().x.length, t, i, n);
            r || n.a()
        }
    },
    z: function(n) {
        if (_bc.j.isInstanceOfType(n)) {
            var i = n;
            var t = this;
            i.o(function() {
                var n = t.i.m(i);
                n >= 0 && t.f(t.i.x.length - n)
            })
        }
    },
    E: function(n) {
        this.p(n, 0)
    },
    p: function(n, t) {
        this.G(n);
        var r = this.b().x.length;
        var u = this.b().x[r - n];
        var i = this;
        this.v(n, function() {
            var n = i.b().m(u);
            n >= 0 && i.p(i.b().x.length - n, t)
        }, t, null)
    },
    v: function(n, t, i, r) {
        var o = this.b().x.length;
        var s = this.a();
        try {
            for (var u = 0; u < n; u++) {
                var f = o - u - 1;
                var e = this.b().x[f];
                if (_y.cU.a(t, i, r, e)) return !1;
                else this.b().n(f)
            }
            return !0
        } finally {
            this.a() !== s && this.eJ("Top")
        }
    },
    G: function(n) {
        if (n <= 0) throw Error.argumentOutOfRange("numberOfItems", n, "Cannot pass 0 or negative to the PopMany method.");
        var t = this.b().x.length;
        if (t < n) throw Error.invalidOperation("Can't pop more items from the stack than exist!");
    }
};
_y.fD = function(n) {
    this.a = n
};
_y.fD.prototype = {
    a: null
};
_y.dr = function(n, t, i) {
    _y.dr.initializeBase(this);
    this.d(n, t, i)
};
_y.dr.prototype = {
    a: null,
    b: null,
    c: null,
    d: function(n, t, i) {
        this.b = n;
        this.c = t;
        this.a = i;
        this.eU("ImageId", "PressedImageId", "Command")
    }
};
_y.dV = function(n, t, i, r, u) {
    _y.dV.initializeBase(this);
    this.d = n;
    this.e = t;
    this.f = i;
    this.g = r;
    this.h = u;
    var f = (n ? 1 : 0) + (t ? 1 : 0) + (i ? 1 : 0) + (r ? 1 : 0) + (u ? 1 : 0);
    this.a = f === 2;
    this.c = f === 3;
    this.b = f === 4
};
_y.dV.prototype = {
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    a: !1,
    c: !1,
    b: !1
};
_y.hJ = function() {};
_y.bs = function(n, t) {
    this.e = n;
    this.h = t
};
_y.bs.a = function() {
    return new _y.bs
};
_y.bs.prototype = {
    c: !1,
    e: null,
    i: !1,
    h: null,
    t: function() {
        return this.c
    },
    m: function(n) {
        this.c = n;
        return n
    },
    u: function(n) {
        this.i = n;
        return n
    },
    s: function() {
        return null
    },
    a: function(n) {
        _j.m.a().j(_a.a.a, _y.m.toString(n.a()));
        this.c = !1;
        if (this.e) {
            var t = this;
            this.e.a(function(i) {
                var r = i.a(n, null, null);
                if (_y.c.a.b()) {
                    r.e(t);
                    _y.c.a.c().e(r)
                } else _y.c.a.f(r, 1, !0)
            })
        } else _y.c.a.T(_y.V, null, null, _bc.d.a(), n, !0, this.h)
    },
    f: function(n, t) {
        n.a().cv() && n.a().cv()();
        this.c = !0;
        n.S(t);
        if (n.a().m() === 3)
            if (_y.cJ.b()) _y.c.a.c().d();
            else {
                var i = this;
                _j.m.a().c(_a.a.a, "Deeplink compose closing window", function() {
                    _y.c.b()
                })
            }
        else this.e ? _y.c.a.c().d() : n.y() ? n.y()() : _j.e.c(_a.a.a, "Shell did not set MailComposeViewModel.ClosePopupCommand, causing navigate away from compose to fail.")
    }
};
_y.iM = function(n, t) {
    _j.s.b(n, "mailComposeContextFactory");
    _j.s.b(t, "mailComposeConductor");
    this.f = n;
    this.e = t
};
_y.iM.prototype = {
    f: null,
    e: null,
    a: function(n, t, i) {
        var r = null;
        n && (r = [n]);
        this.c(null, null, r, t, i, null, null, -1, null)
    },
    b: function(n) {
        this.g(null, n)
    },
    g: function(n, t) {
        this.c(n, null, t, null, null, null, null, -1, null)
    },
    c: function(n, t, i, r, u, f, e, o, s) {
        var h = this;
        this.f.a(function(c) {
            var l = c.a(!1, !0);
            l.p(0);
            l.e(0);
            l.em(f);
            l.dK(e);
            l.dZ(o);
            l.ea(s);
            if (null !== i) {
                l.u(new _j.l);
                for (var a = 0; a < i.length; a++) l.g().a(i[a])
            }
            n && n.x.length > 0 && l.T(n);
            t && t.x.length > 0 && l.cB(t);
            _j.h.b(r) || l.t(r);
            if (!_j.h.b(u)) {
                l.r(_a.B.b(u, !0, !0));
                l.i("HTML")
            }
            h.e.a(l)
        })
    },
    d: function(n) {
        var t = this;
        this.f.a(function(i) {
            var r = i.a(!1, !0);
            r.p(0);
            r.e(3);
            r.cJ(!0);
            r.f(!0);
            r.S(n);
            t.e.a(r)
        })
    }
};
_y.W = function(n, t, i, r, u, f, e) {
    this.K = Function.createDelegate(this, this.bb);
    this.W = Function.createDelegate(this, this.bp);
    this.N = Function.createDelegate(this, this.be);
    this.M = Function.createDelegate(this, this.bd);
    this.L = Function.createDelegate(this, this.bc);
    this.T = Function.createDelegate(this, this.bk);
    this.U = Function.createDelegate(this, this.bm);
    this.S = Function.createDelegate(this, this.bj);
    this.R = Function.createDelegate(this, this.bi);
    this.O = Function.createDelegate(this, this.bf);
    this.P = Function.createDelegate(this, this.bg);
    this.V = Function.createDelegate(this, this.bn);
    this.Q = Function.createDelegate(this, this.bh);
    _y.W.initializeBase(this);
    this.x = n;
    this.b = t;
    this.a = i;
    this.y = r;
    this.j = u;
    this.B = _g.a.a().e().bH.OnSendAddinsEnabled;
    _dh.a(e, this);
    if (this.g()) {
        this.d = new _j.g(this.Q, _y.W.a, this.g());
        this.G = new _j.g(this.V, _y.W.a, this.g());
        this.D = new _j.g(this.P, _y.W.a, this.g());
        this.t = new _j.g(this.O, _y.W.a, this.g())
    }
    if (this.f()) {
        this.c = new _j.g(this.R, _y.W.a, this.f());
        this.o = new _j.g(this.S, _y.W.a, this.f());
        this.E = new _j.g(this.U, _y.W.a, this.f());
        this.u = new _j.g(this.T, _y.W.a, this.f())
    }
    if (this.h()) {
        this.e = new _j.g(this.L, _y.W.a, this.h());
        this.z = new _j.g(this.M, _y.W.a, this.h());
        this.Z = new _j.g(this.N, _y.W.a, this.h())
    }
    this.q() && (this.v = new _j.g(this.W, _y.W.a, this.q()));
    this.X = new _j.g(this.K, _y.W.a);
    this.r = f
};
_y.W.c = function(n, t, i, r) {
    if (!n || n.bH.IsDraft && !_g.ff.isInstanceOfType(n) && !t || n.bH.ItemClass && n.bH.ItemClass.toUpperCase().startsWith("REPORT")) return !1;
    else if (n.bA()) return _y.W.b(n, i, r);
    else if (n.bY() && !n.bY().a()) return n.bY().f();
    return !0
};
_y.W.b = function(n, t, i) {
    var u = _a.m.g();
    var f = !n.eD();
    var r;
    r = t ? f || n.cZ() && u : u || f;
    return r
};
_y.W.prototype = {
    d: null,
    c: null,
    o: null,
    E: null,
    t: null,
    e: null,
    z: null,
    v: null,
    G: null,
    u: null,
    D: null,
    Z: null,
    b: null,
    a: null,
    x: null,
    m: null,
    y: null,
    X: null,
    H: !1,
    l: !1,
    B: !1,
    j: null,
    r: null,
    br: function(n) {
        if (this.H !== n) {
            this.H = n;
            this.eJ("RespondPopupShown")
        }
        return n
    },
    bq: function(n) {
        if (this.m !== n) {
            this.m = n;
            this.eJ("MailResponseViewModel")
        }
        return n
    },
    A: function() {
        return this.b.bH.IsDraft && this.a && !this.a.n() || this.b.bH.ItemClass && this.b.bH.ItemClass.toUpperCase().startsWith("REPORT") ? !1 : !0
    },
    g: function() {
        if (this.b.bH.IsDraft && this.a && !this.a.n() || this.b.bH.ItemClass && this.b.bH.ItemClass.toUpperCase().startsWith("REPORT")) return !1;
        else if (this.b.bA()) return _y.W.b(this.b, this.a.u(), this.j);
        else if (this.b.bY() && !this.b.bY().a()) return this.b.bY().o();
        return !0
    },
    f: function() {
        if (this.ba()) return !1;
        var t = this.a ? this.a.n() : !1;
        var n = this.a ? this.a.u() : !0;
        return _y.W.c(this.b, t, n, this.j)
    },
    ba: function() {
        var n = _y.cD.isInstanceOfType(this.a) ? this.a : null;
        return n ? n.bZ() : !1
    },
    h: function() {
        if (this.b.bH.IsDraft && this.a && !this.a.n()) return !1;
        else if (this.b.bA()) return _y.W.b(this.b, this.a.u(), this.j);
        else if (this.b.bY() && !this.b.bY().a()) return this.b.bY().g();
        else if (_g.f.G(this.b.bH.ItemClass)) return !1;
        return _g.ff.isInstanceOfType(this.b) ? this.b.bu() : !0
    },
    q: function() {
        if (!this.b.bH.ItemId || this.a && this.a.n()) return !1;
        else if (this.b.bH.ItemClass && this.b.bH.ItemClass.toUpperCase().startsWith("REPORT") && this.b.bH.ItemClass.toUpperCase().endsWith("NDR") && this.b.bi() && this.b.bi().b() === 1 && _g.hJ.isInstanceOfType(this.b.bi().a(0))) return !0;
        return !1
    },
    w: null,
    s: null,
    C: function(n, t) {
        var i = this;
        this.p(function(i) {
            i.l(!1, n, t)
        }, !1);
        this.a && this.n("MailReplyAll")
    },
    bl: function(n) {
        var t = this;
        this.p(function(t) {
            t.j(!1, n)
        }, !1);
        this.a && this.n("MailReplyAll")
    },
    bo: function() {
        var n = this;
        this.p(function(n) {
            n.m(!1)
        }, !1);
        this.a && this.n("MailReplyAll")
    },
    bb: function() {
        this.br(!1)
    },
    I: function() {
        if (this.B && this.j && this.j.a().lT().Enabled) {
            var n = !0;
            var i = !1;
            if (this.a && this.a.m()) {
                n = this.a.m().y();
                i = this.a.m().z()
            }
            n && _j.e.b(_a.a.a, "Failed to read IsTrapOnSendAddinInstalled from Owa-ClientNext, falling back to only checking isOnSendAddinsEnabled for inline or full compose.");
            if (i || n) return
        }
        if (!this.l && this.a && this.a.f()) {
            var t = this.a.f();
            this.a.bx() ? t.bF(this.a.bx()) : t.bF(this.a)
        }
    },
    p: function(n, t) {
        if (this.a && this.a.f()) {
            var i = this.a.f();
            if (!i.bG(!1)) {
                var r = this;
                i.Z(function() {
                    i.Z(null);
                    r.Y(n, t)
                });
                return
            }
        }
        this.Y(n, t)
    },
    Y: function(n, t) {
        this.I();
        this.i(n, t)
    },
    bh: function() {
        var n = this;
        this.p(function(n) {
            n.c(!1)
        }, !1);
        this.a && this.n("MailReply")
    },
    bi: function() {
        var n = this;
        this.p(function(n) {
            n.d(!1)
        }, !1);
        this.a && this.n("MailReplyAll")
    },
    bj: function() {
        this.I();
        var n = this;
        this.i(function(n) {
            n.h(!1)
        }, !1)
    },
    bm: function() {
        this.I();
        var n = this;
        this.i(function(n) {
            n.i(!1)
        }, !1)
    },
    bf: function() {
        var n = this;
        this.i(function(n) {
            n.b(!1)
        }, !1)
    },
    bc: function() {
        var n = this;
        this.i(function(n) {
            n.a(!1)
        }, !1);
        this.a && this.n("MailForward")
    },
    bd: function() {
        var n = this;
        this.i(function(n) {
            n.g(!1)
        }, !1)
    },
    bp: function() {
        var n = this;
        this.i(function(n) {
            n.n()
        }, !1)
    },
    bn: function() {
        var n = this;
        this.i(function(n) {
            n.c(!0)
        }, !0)
    },
    bk: function() {
        var n = this;
        this.i(function(n) {
            n.d(!0)
        }, !0)
    },
    bg: function() {
        var n = this;
        this.i(function(n) {
            n.b(!0)
        }, !0)
    },
    be: function() {
        var n = this;
        this.i(function(n) {
            n.a(!0)
        }, !0)
    },
    i: function(n, t) {
        if (!this.l) {
            this.l = !0;
            var i = this;
            this.x.b(function(r) {
                var f = !1;
                try {
                    var u = r.a(i);
                    t ? u.e(new _y.bs) : u.e(i.y());
                    i.r.a() !== "Mouse" && u.p(function() {
                        i.l = !1
                    });
                    i.bq(u);
                    i.m.o(i.w);
                    i.m.q(i.s);
                    i.s = "";
                    i.r.a() === "Mouse" && i.a && i.a.f() && i.a.f().dk();
                    n(i.m);
                    f = !0
                } finally {
                    i.r.a() !== "Mouse" && f || (i.l = !1)
                }
            })
        }
    },
    n: function(n) {
        var i = new _a.l;
        i = _h.g.b(i);
        var t = -1;
        t = this.a.P() ? 11 : this.a.ct() ? _h.g.e(this.a.u(), !!this.a.f() && !!this.a.f().d() && this.a.f().d().b) : _h.g.h(this.a.u(), _y.cD.isInstanceOfType(this.a) && this.a.bX());
        _h.g.c(i, t);
        var r = _a.b.b(_y.W.a, n, !1, null);
        r.m = i.toString();
        _a.b.a(r)
    }
};
_y.es = function(n, t, i) {
    this.d = n;
    this.c = t;
    this.b = i
};
_y.es.prototype = {
    b: null,
    c: null,
    d: null,
    a: function(n, t, i, r) {
        return new _y.W(this.c, n, t, i || _y.bs.a, r, this.d, this.b)
    }
};
_y.jG = function(n, t) {
    this.a = n;
    this.b = t
};
_y.jG.prototype = {
    a: null,
    b: null
};
_y.jH = function() {
    this.a = []
};
_y.jH.prototype = {
    b: null
};
_y.bf = function(n, t, i) {
    this.d = n;
    this.c = t;
    this.b = i
};
_y.bf.prototype = {
    d: null,
    c: null,
    b: null,
    e: function(n, t, i) {
        return this.a(n, this.d.a(), t, i)
    },
    a: function(n, t, i, r) {
        _h.bv.a(3, null);
        var u = !!this.b && !this.b.a;
        return n && t === 1 && (u || i) ? n : new _y.bs(!_y.c.a.b() || _y.c.a.i() || t === 3 ? this.c : null, r)
    }
};
_y.fw = function(n, t, i, r) {
    this.d = n;
    this.e = t;
    this.c = i;
    this.b = r
};
_y.fw.prototype = {
    c: !1,
    b: !1,
    d: 0,
    e: null,
    a: function() {
        return this.d === "Mouse" ? this.f() : 2
    },
    f: function() {
        return this.e.a().L() === "SeparateForm" || this.c && !this.b ? 0 : 1
    }
};
_y.cZ = function(n) {
    this.w = Function.createDelegate(this, this.M);
    _y.cZ.initializeBase(this);
    this.t(this);
    this.C(!0);
    this.n = new _j.g(this.w, _y.cZ.a);
    this.s(_u.R.Cc);
    this.l = n
};
_y.cZ.prototype = {
    n: null,
    i: null,
    l: null,
    j: 0,
    m: !1,
    h: null,
    o: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.eJ("ArchiveFolderOption")
        }
        return n
    },
    L: function() {
        return this.i ? this.i.bH.DisplayName : _u.R.KP
    },
    u: function(n) {
        this.i = n;
        this.eJ("SelectedFolder");
        this.eJ("FolderDisplayName");
        return n
    },
    N: function(n) {
        this.h = n;
        this.eJ("FolderPickerDialog");
        return n
    },
    I: function(n) {
        this.m = n;
        this.eJ("ArchiveFolderExists");
        return n
    },
    O: function(n, t) {
        this.u(null);
        this.I(!1);
        for (var u = this.l.c.p.g, r = 0; r < u.x.length; r++) {
            var i = u.x[r];
            if (_h.a.j(i) && i.bH.DisplayName.toLocaleLowerCase() === _u.R.Mq.toLocaleLowerCase()) {
                this.I(!0);
                this.o(1);
                this.u(i);
                break
            }
        }
        var o = this;
        var s = new _j.g(function() {
            o.f(!1);
            t(n)
        }, _y.cZ.a);
        var f = new _ff.d(s, _bcs.D.D, null, !0, !1);
        var e = new _ff.d(this.q, _u.R.BG, null, !1, !1);
        this.v(new _j.l);
        this.p.a(f);
        this.p.a(e);
        this.f(!0)
    },
    M: function() {
        this.N(new _y.df(this.l));
        var i = this;
        this.h.j = function() {
            var n = i.h.h.a();
            return n ? !_h.a.p(n.h.bH.FolderId) && !_h.a.h(n.h) : !1
        };
        var n = this;
        var t = new _j.g(function() {
            var t = n.h.h.a();
            if (t) {
                n.u(t.h);
                n.o(1)
            }
        }, _y.cZ.a);
        this.h.l(t, _u.R.Fc, _bcs.D.D)
    }
};
_y.eK = function(n) {
    this.a = n
};
_y.eK.prototype = {
    a: null
};
_y.dd = function(n, t, i, r, u, f) {
    this.d = Function.createDelegate(this, this.s);
    this.n = Function.createDelegate(this, this.y);
    _y.dd.initializeBase(this, [null, !1, i, r, u, null, f, null]);
    this.a = n;
    this.b = t;
    this.c = new _j.g(this.n, this.bd())
};
_y.dd.prototype = {
    b: null,
    a: "none",
    c: null,
    g: function() {},
    P: function(n) {},
    y: function() {
        if (_g.b.a.nameToId(this.a)) this.p();
        else {
            var n = new _h.bp("GetFolderAction_EmptyFolderTreeViewModel_" + this.a, !1);
            n.j = new _h.bu;
            n.f = [new _g.s(this.a)];
            n.a(this.d);
            _a.g.a.a(n)
        }
    },
    s: function(n) {
        var t = n;
        if (t.G) {
            this.z();
            return
        }
        _g.a.a().K(this.a, t.e[0].FolderId);
        this.a === "archivemsgfolderroot" && (_g.a.a().c().c = !0);
        this.p()
    },
    z: function() {
        _y.c.a.a() === "Mouse" && this.a === "archivemsgfolderroot" && this.w.h(0, _u.R.Ii, null)
    },
    p: function() {
        this.o && this.o.bP(this)
    }
};
_y.bR = function(n, t, i, r, u, f, e, o) {
    _y.bR.initializeBase(this, [n, t, i, r, u, f, e, o, null, null]);
    _y.c.a.a() === "Mouse" && t.X(this.bj || (this.bj = Function.createDelegate(this, this.bQ)))
};
_y.bR.prototype = {
    S: null,
    U: null,
    R: null,
    T: null,
    bj: null,
    bl: null,
    bk: null,
    Q: null,
    I: null,
    x: null,
    l: !1,
    t: null,
    w: null,
    br: function() {
        return !_y.bH.isInstanceOfType(this.i)
    },
    a: function() {
        return this.i.bu()
    },
    f: function() {
        this.Q || (this.Q = new _j.g(this.cP, this.j()));
        return this.Q
    },
    bp: function() {
        var n = this.i.a;
        return !n || !n.x.length ? !1 : n.x[0].cb(this.h)
    },
    bq: function() {
        var n = this.i.a;
        return !n || !n.x.length ? !1 : n.x[n.x.length - 1].cb(this.h)
    },
    bo: function() {
        return null
    },
    bn: function() {
        return !!this.i && !this.i.t
    },
    M: function() {
        return _y.bI.prototype.M.call(this) && !!this.i && !_y.bH.isInstanceOfType(this.i)
    },
    bO: function() {
        var t = this.i.a;
        if (!t || !t.x.length) return null;
        for (var n = 0; n < t.x.length; n++)
            if (t.x[n].cb(this.h)) return n > 0 ? t.x[n - 1].bH.FolderId : null;
        return null
    },
    bN: function() {
        var n = this.i.a;
        if (!n || !n.x.length) return null;
        for (var t = 0; t < n.x.length; t++)
            if (n.x[t].cb(this.h)) return t < n.x.length - 1 ? n.x[t + 1].bH.FolderId : null;
        return null
    },
    N: function() {
        var n = {};
        n.IsDistinguishedFolder = _h.a.p(this.h.bH.FolderId);
        n.FolderId = this.h.bH.FolderId;
        n.DragItemType = 4;
        this.dj(JsonParser.serialize(n))
    },
    E: function() {
        return this.bP()
    },
    B: function() {
        var n = this.bP();
        if (!this.h.c()) {
            Array.add(n, new _fm.c(_h.a.c ? _u.R.IT : _u.R.Hf, null, this.bb));
            this.cW(n)
        }
        _g.u.isInstanceOfType(this.h) && Array.add(n, new _fm.c(_u.R.GI, null, this.bF));
        this.i.K && _g.b.a.nameToId("clutter") && this.h.bH.FolderId.Id === _g.b.a.nameToId("clutter").Id && Array.add(n, new _fm.c(_u.R.RO, null, this.dd()));
        if (_y.c.a.a() === "Mouse") {
            this.cl();
            this.q && Array.add(n, this.q);
            !_g.u.isInstanceOfType(this.h) || this.h.c() || this.h.b || Array.add(n, new _fm.c(_u.R.Nn, null, this.bK))
        }
        return n
    },
    co: function(n, t) {
        this.t && _g.l.b(this.i.x, this.h.bH.FolderId) && this.t.a(!0);
        this.w && _g.l.b(this.i.x, this.h.bH.FolderId) && this.w.a(!0);
        _y.bI.prototype.co.call(this, n, t)
    },
    bP: function() {
        var n = [];
        if (_y.c.a.a() === "Mouse") {
            this.bl = new _j.g(this.T || (this.T = Function.createDelegate(this, this.bT)), this.j());
            this.I = new _fm.c(_u.R.HB, null, this.bl);
            Array.add(n, this.I);
            this.bk = new _j.g(this.R || (this.R = Function.createDelegate(this, this.bR)), this.j());
            this.x = new _fm.c(_u.R.FZ, null, this.bk);
            Array.add(n, this.x)
        }
        this.G = new _fm.c(_u.R.RS, null, this.L());
        Array.add(n, this.G);
        this.bM();
        this.bQ();
        return n
    },
    bQ: function() {
        this.I && this.I.a(this.bp());
        this.x && this.x.a(this.bq())
    },
    bT: function() {
        this.bp() || this.o.a(this.U || (this.U = Function.createDelegate(this, this.bU)))
    },
    bR: function() {
        this.bq() || this.o.a(this.S || (this.S = Function.createDelegate(this, this.bS)))
    },
    bU: function(n) {
        this.bm(n, 0)
    },
    bS: function(n) {
        this.bm(n, 1)
    },
    bm: function(n, t) {
        var i = n.e();
        i.e(this.h);
        i.h(t);
        switch (i.j()) {
            case 0:
                i.f(this.bO());
                break;
            case 1:
                i.f(this.bN());
                break;
            default:
                break
        }
        _a.g.a.a(i)
    }
};
_y.T = function(n, t, i, r, u, f, e, o, s, h, c, l, a) {
    this.bh = Function.createDelegate(this, this.bB);
    this.bi = Function.createDelegate(this, this.bG);
    this.W = Function.createDelegate(this, this.bJ);
    _y.T.initializeBase(this, [r, t, h, u, c, l, a, null]);
    this.c = i;
    this.R = u;
    this.U = e;
    this.br = s;
    if (n) {
        this.bx(n);
        this.bt();
        this.T()
    }
    this.s = this.c.a().bH.IsFavoritesFolderTreeCollapsed;
    this.K = o;
    if (_y.c.a.a() === "Mouse") {
        this.Z = this.bA();
        _h.p.f = !0;
        this.bw = f
    }
    this.z = _u.R.Dr
};
_y.T.prototype = {
    bw: null,
    R: null,
    c: null,
    p: null,
    a: null,
    b: null,
    s: !1,
    Z: null,
    Y: null,
    br: null,
    z: null,
    y: null,
    Q: null,
    bu: function() {
        if (!this.Q) {
            var n = this;
            this.Q = new _j.g(function() {
                n.bC(n.y)
            }, this.bd())
        }
        return this.Q
    },
    bF: function() {
        return !_y.bH.isInstanceOfType(this) && this.B
    },
    bL: function(n) {
        if (n !== this.y) {
            this.y = n;
            this.eJ("NewFolderName")
        }
        return n
    },
    bD: function() {
        return _y.bH.isInstanceOfType(this) ? "FirstLevelFavoritesFolderTreeHeaderMouseView" : "FavoritesFolderTreeHeaderMouseView"
    },
    X: function(n) {
        this.eO("OnFavoriteFolderViewModelsChanged", n)
    },
    bx: function(n) {
        if (this.a !== n) {
            this.a && this.a.e(this.W);
            this.a = n;
            this.a.d(this.W);
            this.eJ("FavoriteFolders")
        }
        return n
    },
    bf: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.eJ("FavoriteFolderViewModels");
            var t = this;
            this.X(function() {
                t.eJ("IsFavoritesEmpty")
            });
            this.eS("OnFavoriteFolderViewModelsChanged")
        }
        return n
    },
    bv: function() {
        return !(!this.b || !this.b.x.length)
    },
    V: function(n) {
        if (n !== this.s) {
            this.s = n;
            this.eJ("IsFavoritesFolderTreeCollapsed")
        }
        if (this.c.a().bH.IsFavoritesFolderTreeCollapsed !== n && !this.t) {
            this.c.a().cS(n);
            _h.f.a(this.c.a().u, _a.g.a)
        }
        return n
    },
    bE: function() {
        return _y.c.a.a() !== "Mouse" && !this.bv()
    },
    bg: function(n) {
        if (this.z !== n) {
            this.z = n;
            this.eJ("TreeLabel")
        }
        return n
    },
    bA: function() {
        var t = [];
        var r = this;
        this.Y = new _fm.c(_u.R.PK, null, new _j.g(function() {
            r.o.bh.a()
        }, this.bd()));
        Array.add(t, this.Y);
        if (this.R && this.R.a().cU().Enabled) {
            var n = this;
            var i = new _fm.c("show flow conversations", null, new _j.g(function() {
                n.o.P && n.o.P.b && n.o.P.a()
            }, this.bd()));
            Array.add(t, i)
        }
        return new _fm.e(t)
    },
    g: function() {
        if (!this.a) {
            this.bH();
            _h.a.z(this.bi)
        }
    },
    P: function(n) {},
    bI: function() {
        _h.a.W(this.p);
        this.a || this.bx(_h.a.d());
        this.a.x.length > 0 && this.bt();
        this.eJ("HasChildren")
    },
    bC: function(n) {
        var i = this.o.c.n;
        var t = new _h.be;
        t.l(i);
        t.e = i.j;
        t.k(n);
        t.b(this.bj);
        t.c(this.bh);
        _a.g.a.a(t)
    },
    bB: function(n) {
        if (!n.G) {
            this.o.c.r(n.f.bH.FolderId);
            this.o.c.q.bc().a()
        }
    },
    bt: function() {
        if (this.a && !(this.a.x.length <= 0)) {
            for (var t = new _j.l, n = 0; n < this.a.x.length; n++) t.a(this.bs(this.a.x[n]));
            this.bf(t)
        }
    },
    bs: function(n) {
        return new _y.bR(n, this, this.c, this.O, this.U, this.K, this.E, this.u)
    },
    bG: function(n) {
        this.p = n.e;
        this.T()
    },
    bJ: function(n, t) {
        switch (t.c) {
            case 0:
                this.b || this.bf(new _j.l);
                for (var u = new Array(t.a.length), i = 0; i < t.a.length; i++) u[i] = this.bs(t.a[i]);
                this.b.s(t.d, u);
                break;
            case 1:
                for (var r = 0; r < t.a.length; r++) {
                    var f = this.b.x[t.d + r];
                    this.b.v(t.d, t.e, f)
                }
                break;
            case 2:
                this.b.r(t.d, t.b.length);
                this.o && _y.T.isInstanceOfType(this.o.e) && this.bK(t) && this.o.O.a();
                break
        }
        this.eJ("HasChildren");
        this.eS("OnFavoriteFolderViewModelsChanged")
    },
    bK: function(n) {
        if (!this.q) return !1;
        for (var u = n.b, i = u, f = i.length, t = 0; t < f; ++t) {
            var r = i[t];
            if (r.bH.FolderId.Id === this.q.h.bH.FolderId.Id) return !0
        }
        return !1
    },
    bH: function() {
        this.p = _h.a.bg();
        this.p.length > 0 && this.T()
    }
};
_y.bH = function(n, t, i, r, u, f, e, o, s, h, c) {
    this.by = Function.createDelegate(this, this.bM);
    _y.bH.initializeBase(this, [_h.a.d(), !1, n, t, i, r, u, f, e, o, s, h, c]);
    this.bg(_u.R.A);
    this.X(this.by);
    this.bf(new _j.l)
};
_y.bH.prototype = {
    D: null,
    n: null,
    d: null,
    G: function() {
        _y.kf.prototype.G.call(this);
        this.d = null
    },
    I: function(n) {
        if (!n || _g.j.d(n.bH.FolderId) && n.bH.FolderId.a) this.G();
        else if (this.a.w(n)) {
            this.r(n.bH.FolderId);
            this.d = null;
            this.o && this.o.g && n.a() === "deleteditems" && this.q.bD(!0, "deleteditems")
        } else {
            this.r(this.n.h.bH.FolderId);
            this.d = n
        }
    },
    bM: function() {
        if (this.n) this.q && !_y.dn.isInstanceOfType(this.q) ? this.I(this.q.h) : this.d && this.I(this.d);
        else {
            var n = new _g.u;
            n.j(new _g.m("More"));
            n.f(_u.R.Ng);
            this.n = new _y.dn(n, this, this.c, this.O, this.u);
            this.b.a(this.n)
        }
    }
};
_y.F = function() {};
_y.F.a = function(n) {
    return n === "Flagged" ? _y.F.g() : _y.F.c
};
_y.F.b = function() {
    return _g.a.a().E ? _u.R.MF : _u.R.NA
};
_y.F.d = function(n) {
    return n === "Flagged" ? _u.R.VU : _u.R.DU
};
_y.F.f = function(n, t) {
    var e = new _j.g(function() {
        n("Today")
    }, t);
    var o = new _j.g(function() {
        n("Tomorrow")
    }, t);
    var s = new _j.g(function() {
        n("ThisWeek")
    }, t);
    var f = new _j.g(function() {
        n("NextWeek")
    }, t);
    var i = new _j.g(function() {
        n("NoDate")
    }, t);
    var r = new _j.g(function() {
        n("ClearFlag")
    }, t);
    var u = new _j.g(function() {
        n("MarkComplete")
    }, t);
    return new _fm.e([new _fm.c(_u.R.Sv, null, e), new _fm.c(_u.R.Fu, null, o), new _fm.c(_u.R.KN, null, s), new _fm.c(_u.R.Oq, null, f), new _fm.c(_u.R.SS, null, i), new _fm.c(_u.R.JH, null, u), new _fm.c(_y.F.b(), null, r)])
};
_y.F.e = function(n) {
    for (var i = n, u = i.length, t = 0; t < u; ++t) {
        var r = i[t];
        if (r.M() !== "Flagged") return _y.F.c
    }
    return _y.F.g()
};
_y.F.g = function() {
    return _g.a.a().E ? "ClearFlag" : "MarkComplete"
};
_y.de = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g) {
    this.bt = Function.createDelegate(this, this.bW);
    this.bq = Function.createDelegate(this, this.bT);
    this.bu = Function.createDelegate(this, this.bX);
    this.br = Function.createDelegate(this, this.bU);
    this.bl = Function.createDelegate(this, this.bJ);
    this.bo = Function.createDelegate(this, this.bQ);
    this.bp = Function.createDelegate(this, this.bS);
    this.bs = Function.createDelegate(this, this.bV);
    this.ba = Function.createDelegate(this, this.bH);
    this.bn = Function.createDelegate(this, this.bL);
    this.bv = Function.createDelegate(this, this.ca);
    this.bm = Function.createDelegate(this, this.bK);
    this.bb = Function.createDelegate(this, this.bR);
    this.d = new _j.l;
    this.H = new _j.l;
    _y.de.initializeBase(this);
    this.l = n;
    this.w = i;
    this.j = r;
    this.t = h;
    this.Q = p;
    this.ch(u);
    this.v = f;
    this.C = l;
    this.u = a;
    this.i = e;
    this.y = o;
    this.A = s;
    this.N = !!h && h.a().r().Enabled;
    this.p = w;
    this.bg = b;
    this.X = d;
    this.s = v;
    this.bw = y;
    this.bi = k;
    this.K = g;
    if (h) {
        this.B = h.a().h().Enabled && !!i && i.e().bH.PredictedActions;
        this.E = h.a().J().Enabled && !!b && this.bN();
        this.U = this.E && h.a().cr().Enabled;
        _h.a.k = h.a().fL().Enabled;
        _h.a.n = h.a().fM().Enabled
    }
    this.o;
    this.T = c;
    this.bf(t)
};
_y.de.prototype = {
    t: null,
    c: null,
    l: null,
    j: null,
    p: null,
    w: null,
    y: !1,
    i: !1,
    A: !1,
    v: null,
    bi: null,
    C: null,
    N: !1,
    B: !1,
    T: null,
    bg: null,
    X: null,
    u: null,
    s: null,
    bw: null,
    U: !1,
    K: !1,
    q: null,
    D: null,
    b: null,
    n: null,
    e: null,
    f: null,
    G: null,
    O: null,
    W: null,
    Y: null,
    S: null,
    bh: null,
    P: null,
    h: null,
    o: null,
    Q: null,
    Z: 0,
    V: null,
    R: null,
    ci: function(n) {
        if (this.Z !== n) {
            this.Z = n;
            this.eJ("WidthOfScrollRegion")
        }
        return n
    },
    bc: 0,
    m: null,
    cc: function(n) {
        if (this.R !== n) {
            this.R = n;
            this.eJ("GroupsNavigationViewModel")
        }
        return n
    },
    a: function() {
        return this.e ? this.e.q : null
    },
    bj: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.eJ("ActionTargetFolder")
        }
        return n
    },
    I: function() {
        return this.e ? this.e.x : null
    },
    z: function() {
        return this.p.c()
    },
    cf: function(n) {
        this.W = n;
        this.eJ("MarkAllAsReadCommand");
        return n
    },
    cg: function(n) {
        this.Y = n;
        this.eJ("SetFolderPermissionsCommand");
        return n
    },
    ce: function(n) {
        this.S = n;
        this.eJ("InitiateMoveFolderCommand");
        return n
    },
    cd: function(n) {
        this.bh = n;
        this.eJ("InitiateAddPublicFolderAsFavorite");
        return n
    },
    ch: function(n) {
        if (this.o !== n) {
            this.o = n;
            this.o && (this.o.b = this.bm);
            this.eJ("SharedFolderViewModel")
        }
        return n
    },
    cb: function(n) {
        if (this.h !== n) {
            var t;
            _a.h.a(t = {
                val: this.h
            }), this.h = t.val;
            this.h = n;
            if (this.h) {
                this.h.e(this.bv);
                this.h.d(this.bn)
            }
            this.eJ("ExtendedSharedFolderViewModel")
        }
        return n
    },
    bN: function() {
        return this.A || this.z()
    },
    g: !1,
    bM: function() {
        return this.i || !this.z()
    },
    r: function() {
        this.e && this.e.G()
    },
    bP: function(n) {
        for (var i = 0; i < this.d.x.length; i++)
            if (this.d.x[i] === n) break;
        if (!(i >= this.d.x.length)) {
            var t = new _y.Y(this.l, n.a, null, null, this.w, this.u, this.s, null, this.v, this.i, this.y, this.N, this.C, this.B, this.t, this.p, this.j);
            this.M(t);
            t.S(this.ba);
            t.g();
            this.d.q(i, t);
            n.dispose();
            switch (t.z) {
                case "archivemsgfolderroot":
                    this.q = t;
                    break
            }
        }
    },
    cj: function() {
        this.bD(!0, null)
    },
    bZ: function(n) {
        this.bD(!1, n)
    },
    bY: function() {
        this.l.a(_y.bX, new _y.bX(this.a().h, !1));
        this.g = !0
    },
    E: !1,
    bf: function(n) {
        if (n && n.x.length)
            for (var e = 0; e < n.x.length; e++) {
                var t = n.x[e];
                if (_y.dQ.isInstanceOfType(t)) {
                    var f = t;
                    this.be(f.d(), f.b(), f.c(), f.a())
                } else if (_y.Y.isInstanceOfType(t)) {
                    var u = t;
                    if (u.s) {
                        var i = this.x(u.z, u.p, u.n);
                        switch (i.z) {
                            case "msgfolderroot":
                                this.c = i;
                                break;
                            case "archivemsgfolderroot":
                                this.q = i;
                                break;
                            case "publicfoldersroot":
                                this.D = i;
                                break
                        }
                    }
                } else if (_y.T.isInstanceOfType(t)) {
                    var o = t;
                    o.a && !this.i && (this.b = this.bd(o.a))
                } else if (_y.dd.isInstanceOfType(t)) {
                    var r = t;
                    this.bx(r.a, r.b);
                    switch (r.a) {
                        case "archivemsgfolderroot":
                            this.q = r;
                            break
                    }
                }
            } else {
                if (!this.i) {
                    this.b = this.bd();
                    if (this.A) {
                        _a.p.b(_a.a.v, "FirstLevelFoldersTreeLoad");
                        this.n = this.bI()
                    }
                }
                this.by();
                this.V = _a.b.b(_a.a.v, "MailFolderTreeLoad", !1, null);
                this.c = this.x("msgfolderroot");
                this.c.S(this.bs);
                this.b && this.b.S(this.bp);
                this.j.b() && this.bO();
                _g.a.a().c() && _g.a.a().c().bH.HasArchive && (this.j.a() === "Mouse" || this.j.a() === "TouchWide") && (this.q = _g.a.a().c().c ? this.x("archivemsgfolderroot") : this.bx("archivemsgfolderroot", _g.a.a().c().bH.ArchiveDisplayName))
            }
    },
    bA: function() {
        var n = new _h.en;
        n.a(this.bo);
        _a.g.a.a(n)
    },
    x: function(n, t, i) {
        var r = new _y.Y(this.l, n, t, i, this.w, this.u, this.s, null, this.v, this.i, this.y, this.N, this.C, this.B, this.t, this.p, this.j);
        this.L(r);
        return r
    },
    bR: function() {
        if (this.G) {
            _a.O.a(_a.a.v, "SwitchFolder", 3);
            this.G.a()
        }
    },
    L: function(n) {
        this.bB(n);
        this.d.a(n)
    },
    bH: function(n, t) {
        if (_y.Y.isInstanceOfType(n)) {
            var i = n;
            i.bQ(this.ba);
            i.r(i.s.h.bH.FolderId);
            i.v.a();
            this.eJ("SelectedFolder")
        }
    },
    bV: function(n, t) {
        _a.b.a(this.V);
        this.V = null;
        this.l.d(_h.bz, new _h.bz);
        this.bC(n, t);
        this.j.a() === "Mouse" && this.bA()
    },
    bS: function(n, t) {
        this.bC(n, t);
        this.A && !this.i && _a.p.a("FirstLevelFoldersTreeLoad")
    },
    bC: function(n, t) {
        this.c.L && this.b.L && this.b.bI()
    },
    bQ: function(n) {
        var i = n;
        if (!i.G) {
            var t = i.e;
            t && _h.O.e(t.FolderMruEntries);
            _h.O.c = !0
        }
    },
    bU: function() {
        this.W && this.W.a()
    },
    bX: function() {
        this.Y && this.Y.a()
    },
    bT: function() {
        this.S && this.S.a()
    },
    bW: function(n, t) {
        this.eJ("SelectedFolderId");
        this.eJ("SelectedFolder");
        var i = this.a();
        this.i && i && i.y && this.j.a() !== "TouchNarrow" && i.bJ(!1)
    },
    bd: function(n) {
        var t = new _y.T(n, this.i, this.w, this.v, this.t, this.T, this.C, this.B, this.Q, this.l, this.p, this.u, this.s);
        this.L(t);
        return t
    },
    bI: function() {
        var n = new _y.bH(this.w, this.v, this.t, this.T, this.C, this.B, this.Q, this.l, this.p, this.u, this.s);
        this.M(n, !0);
        n.g();
        this.H.a(n);
        return n
    },
    by: function() {
        this.E && this.bg.a(this.bl)
    },
    bz: function() {
        this.H.a(this.m);
        this.U || this.d.a(this.m);
        this.eJ("HashtagTreeCreated")
    },
    bx: function(n, t) {
        var i = new _y.dd(n, t, this.l, this.t, this.p, this.s);
        this.L(i);
        return i
    },
    bB: function(n) {
        this.M(n);
        n.g()
    },
    M: function(n, t) {
        n.h(new _j.g(this.bb, _a.a.v));
        if (this.j.a() === "Mouse") {
            n.j(new _j.g(this.br, _a.a.v));
            n.m(new _j.g(this.bu, _a.a.v));
            n.i(new _j.g(this.bq, _a.a.v))
        }
        n.l(this);
        t || n.e("SelectedFolderId", this.bt)
    },
    bO: function() {
        this.o && this.o.e()
    },
    bK: function(n) {
        if (n)
            for (var t = 0; t < n.OtherMailboxEntries.length; t++) {
                var i = n.OtherMailboxEntries[t];
                this.be(null, null, i.DisplayName, i.PrincipalSMTPAddress)
            }
    },
    bL: function(n, t) {
        _h.a.bd(t) || this.be(null, null, n, t)
    },
    be: function(n, t, i, r) {
        var f = new _g.s("msgfolderroot");
        f.Mailbox = new _g.g;
        f.Mailbox.EmailAddress = r;
        _h.a.bc(f);
        if (this.X) {
            var u = this;
            this.X.a(function(e) {
                var o = e.a(u.l, n, t, u.w, u.u, u.s, u.bi, u.v, u.i, u.y, f, i, r, u.N, u.t, u.p, u.j);
                u.L(o)
            })
        }
    },
    bD: function(n, t) {
        if (this.h) this.bE(n, t);
        else if (this.o.a) {
            var i = this;
            this.o.a.a(function(r) {
                i.cb(r);
                i.bE(n, t)
            })
        }
    },
    bE: function(n, t) {
        n ? this.h.a().f(!0) : this.h.c(t)
    },
    ca: function(n) {
        for (var r = 0; r < this.d.x.length; r++) {
            var i = this.d.x[r];
            if (_y.dQ.isInstanceOfType(i) && i.a() === n) {
                this.d.p(i, !0);
                break
            }
        }
        var f = _h.S.c(n);
        if (f)
            for (var t = this.b.b.x.length - 1; t >= 0; t--) {
                var u = this.b.b.x[t];
                var o = u.h;
                var e = f.f(o.bH.FolderId);
                e && u.L().a()
            }
        _h.a.bp(n)
    },
    bJ: function(n) {
        this.m = n.a();
        this.U ? this.M(this.m) : this.bB(this.m);
        this.bz()
    }
};
_y.df = function(n) {
    this.W = Function.createDelegate(this, this.w);
    _y.df.initializeBase(this);
    this.t(this);
    this.C(!0);
    this.I(n)
};
_y.df.prototype = {
    h: null,
    O: null,
    S: !1,
    P: !1,
    Q: !0,
    V: null,
    i: null,
    N: null,
    m: null,
    o: null,
    n: null,
    U: null,
    M: null,
    T: null,
    L: null,
    j: null,
    u: function() {
        return this.h.I() ? this.j ? this.j() : !0 : !1
    },
    bb: function(n) {
        this.O = n;
        this.eJ("CopyOptionText");
        return n
    },
    Y: function(n) {
        this.P = n;
        this.eJ("IsCopyChecked");
        n ? this.be() : this.ba(!1);
        return n
    },
    Z: function(n) {
        this.Q = n;
        this.eJ("IsCopyOptionHidden");
        return n
    },
    bd: function(n) {
        this.S = n;
        this.eJ("IsErrorForPfShown");
        return n
    },
    bc: function(n) {
        if (n !== this.h) {
            this.h = n;
            this.eJ("FolderForest")
        }
        return n
    },
    bf: function(n, t, i, r, u, f, e, o) {
        this.Z(_g.a.a().c().bH.IsShadowMailbox);
        this.V = n;
        this.N = i;
        this.U = t;
        this.M = r;
        this.T = u;
        this.L = f;
        this.bb(e);
        this.i = o;
        this.ba(!0)
    },
    l: function(n, t, i) {
        this.Z(!0);
        var f = this;
        this.m = new _j.g(function() {
            f.f(!1);
            n.a()
        }, _a.a.v);
        var u = new _ff.d(this.m, i, null, !0, !1);
        var r = new _ff.d(this.q, _u.R.BG, null, !1, !1);
        this.v(new _j.l);
        this.p.j([u, r]);
        this.s(t);
        this.w(null, null);
        this.h.r();
        this.f(!0)
    },
    I: function(n) {
        this.bc(n);
        this.h.apcl("SelectedFolderId", this.W)
    },
    w: function(n, t) {
        if (this.m) {
            this.m.c(this.u());
            if (this.p && this.p.x.length > 0)
                for (var i = 0; i < this.p.x.length; i++) {
                    var r = this.p.x[i];
                    if (r.b === this.m) {
                        r.a(this.u());
                        break
                    }
                }
        }
        this.o && this.o.c(this.u());
        this.n && this.n.c(this.u());
        this.eJ("CanExecuteAction")
    },
    ba: function(n) {
        var t = this;
        this.o = new _j.g(function() {
            t.f(!1);
            t.V.a();
            t.i && t.i.a()
        }, _a.a.v);
        var r = new _ff.d(this.o, this.T, null, !0, !1);
        var i = new _ff.d(this.X(), _u.R.BG, null, !1, !1);
        this.v(new _j.l);
        this.p.j([r, i]);
        this.s(this.U);
        this.w(null, null);
        if (n) {
            this.h.r();
            this.Y(!1);
            this.f(!0)
        }
    },
    be: function() {
        var n = this;
        this.n = new _j.g(function() {
            n.f(!1);
            n.N.a();
            n.i && n.i.a()
        }, _a.a.v);
        var i = new _ff.d(this.n, this.L, null, !0, !1);
        var t = new _ff.d(this.X(), _u.R.BG, null, !1, !1);
        this.v(new _j.l);
        this.p.j([i, t]);
        this.s(this.M);
        this.w(null, null)
    },
    X: function() {
        var n = this;
        return new _j.g(function() {
            n.i && n.i.a();
            n.q.a()
        }, _a.a.v)
    }
};
_y.cl = function(n, t) {
    _y.cl.initializeBase(this);
    this.a = n;
    t ? this.fl(t.j(this.fk)) : _y.c.a.a() !== "Mouse" && this.ff(_y.k.b(this))
};
_y.cl.prototype = {
    a: null,
    b: null,
    c: !1,
    n: function() {
        return _y.c.a.a() !== "Mouse" ? _y.lJ.prototype.n.call(this) : 0
    },
    d: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.eJ("FolderPickerTitle")
        }
        return n
    },
    dw: function() {
        this.c = !0;
        _y.lJ.prototype.dw.call(this)
    },
    dv: function() {
        this.c = !1;
        _y.lJ.prototype.dv.call(this)
    }
};
_y.bI = function(n, t, i, r, u, f, e, o, s, h) {
    this.V = Function.createDelegate(this, this.dG);
    this.cg = Function.createDelegate(this, this.dI);
    this.cN = Function.createDelegate(this, this.dN);
    this.cU = Function.createDelegate(this, this.ea);
    this.cO = Function.createDelegate(this, this.dO);
    this.cR = Function.createDelegate(this, this.dT);
    this.cT = Function.createDelegate(this, this.dV);
    this.cS = Function.createDelegate(this, this.dU);
    this.cM = Function.createDelegate(this, this.dH);
    this.ck = Function.createDelegate(this, this.co);
    this.ch = Function.createDelegate(this, this.dQ);
    this.cj = Function.createDelegate(this, this.dS);
    this.bs = Function.createDelegate(this, this.ed);
    this.bt = Function.createDelegate(this, this.ei);
    this.cQ = Function.createDelegate(this, this.N);
    this.ci = Function.createDelegate(this, this.dR);
    this.W = Function.createDelegate(this, this.dP);
    this.cP = Function.createDelegate(this, this.df);
    _y.bI.initializeBase(this);
    this.bf = r;
    this.dk(n);
    this.dY(t);
    this.n = i;
    this.P = h || _y.c.a;
    this.O = u;
    this.cn = f;
    this.o = e;
    this.bd = _g.a.a().E;
    this.X = o;
    _dh.a(this.X, this);
    this.dM(s);
    this.bL();
    this.cv();
    this.h.apcl("TotalCount", this.W);
    this.h.apcl("UnreadCount", this.W);
    this.h.apcl("FolderId", this.ci);
    if (this.P.a() === "Mouse") {
        this.cm = new _j.g(this.cQ, this.j());
        var a = this;
        this.bb = new _j.g(function() {
            a.db(null, !1)
        }, this.j());
        var l = this;
        this.da = new _j.g(function() {
            l.cY(null, !1)
        }, this.j());
        this.dp = this.bt;
        this.dm = this.bs;
        this.p = new _fm.e(null);
        var c = this;
        this.p.t = function() {
            c.dc()
        };
        this.h.apcl("IsFavoriteFolder", this.cj);
        this.h.apcl("DisplayName", this.ch)
    }
    n.bH.FolderId && (this.z = _g.bk.a(n.bH.FolderId));
    this.z || this.i.apcl("SelectedFolderId", this.ck);
    this.D = this.n.a().bH.IsMailRootFolderTreeCollapsed;
    this.y = !0;
    this.h && this.h.bH.FolderId && !this.i.t && (this.y = !this.n.b().g(this.h.bH.FolderId, this.h.b, this.P.a() !== "Mouse").h);
    this.dn();
    _dh.a(o, this)
};
_y.bI.prototype = {
    bf: null,
    n: null,
    Z: !1,
    be: null,
    cn: !1,
    O: null,
    D: !1,
    cV: null,
    cX: null,
    dp: null,
    dm: null,
    p: null,
    cZ: null,
    da: null,
    bb: null,
    bF: null,
    bw: null,
    bK: null,
    bE: null,
    bH: null,
    cm: null,
    bz: null,
    Y: null,
    G: null,
    u: !1,
    h: null,
    i: null,
    C: !1,
    y: !1,
    m: 0,
    bG: null,
    ba: "",
    by: "",
    bx: "",
    bC: !1,
    z: !1,
    bu: !1,
    bv: !1,
    q: null,
    cp: !1,
    s: 1,
    r: null,
    P: null,
    bI: null,
    bd: !1,
    A: !1,
    bg: null,
    v: function(n) {
        this.s = n;
        this.dg();
        this.eJ("TreeNodeMode");
        return n
    },
    cu: function(n) {
        if (n !== this.r) {
            this.r = n;
            this.eJ("NewFolderName")
        }
        return n
    },
    dk: function(n) {
        if (n !== this.h) {
            var t = !this.h;
            this.h = n;
            t || this.bL();
            this.eJ("FolderNode")
        }
        return n
    },
    dY: function(n) {
        if (n !== this.i) {
            this.i = n;
            this.eJ("ParentFolderTree")
        }
        return n
    },
    bh: function(n) {
        if (n !== this.u) {
            this.u = n;
            this.eJ("DefaultSelected")
        }
        return n
    },
    dd: function() {
        this.bw || (this.bw = new _j.g(this.cM, this.j()));
        return this.bw
    },
    K: function() {
        return !1
    },
    bc: function() {
        return null
    },
    L: function() {
        this.bH || (this.bH = new _j.g(this.cS, this.j()));
        return this.bH
    },
    dK: function() {
        this.bI || (this.bI = new _j.g(this.cT, this.j()));
        return this.bI
    },
    d: function() {
        return this.cm
    },
    c: function() {
        return this.bz
    },
    dj: function(n) {
        if (this.bz !== n) {
            this.bz = n;
            this.eJ("DragData")
        }
        return n
    },
    bJ: function(n) {
        if (n !== this.y) {
            this.y = n;
            this.z || this.i.t || this.ej(n);
            this.eJ("IsFolderCollapsed")
        }
        return n
    },
    H: function(n) {
        if (n !== this.D) {
            this.D = n;
            this.eJ("IsMailRootFolderCollapsed")
        }
        if (this.n.a().bH.IsMailRootFolderTreeCollapsed !== n && !this.i.t && !this.h.b) {
            this.n.a().cU(n);
            _h.f.a(this.n.a().u, _a.g.a)
        }
        return n
    },
    dZ: function(n) {
        if (n !== this.C) {
            this.C = n;
            this.eJ("ShowTotalCount")
        }
        return n
    },
    ct: function(n) {
        if (n !== this.bG) {
            this.bG = n;
            this.eJ("NarratedCountString")
        }
        return n
    },
    dW: function(n) {
        if (n !== this.ba) {
            this.ba = n;
            this.eJ("CountNumberDisplay")
        }
        return n
    },
    di: function(n) {
        if (n !== this.by) {
            this.by = n;
            this.eJ("CountNumberDisplayOpenBracket")
        }
        return n
    },
    dh: function(n) {
        if (n !== this.bx) {
            this.bx = n;
            this.eJ("CountNumberDisplayCloseBracket")
        }
        return n
    },
    dX: function(n) {
        if (n !== this.bC) {
            this.bC = n;
            this.eJ("HasItemCount")
        }
        return n
    },
    dJ: function() {
        return !_j.h.a(this.h.w) && this.n.c().bH.IsShadowMailbox ? this.h.w : this.h.bH.DisplayName
    },
    a: function() {
        return null
    },
    f: function() {
        return null
    },
    g: function() {
        return null
    },
    b: function() {
        return null
    },
    e: function() {
        return null
    },
    bA: function() {
        return this.bu
    },
    cq: function(n) {
        if (this.bu !== n) {
            this.bu = n;
            this.eN("CanAddToFavorites", "ShowAddOrRemoveFromFavoritesAction")
        }
        return n
    },
    bB: function() {
        return this.bv
    },
    cr: function(n) {
        if (this.bv !== n) {
            this.bv = n;
            this.eN("CanRemoveFromFavorites", "ShowAddOrRemoveFromFavoritesAction")
        }
        return n
    },
    M: function() {
        return (this.bA() || this.bB()) && !!this.i && !this.i.o.i && this.i.B
    },
    dl: function(n) {
        if (n !== this.A) {
            this.A = n;
            this.eJ("IsShowingDialog")
        }
        return n
    },
    cs: function(n) {
        if (n !== this.m) {
            this.m = n;
            this.eh();
            this.eJ("CountNumber")
        }
        return n
    },
    cW: function(n) {
        if (this.i.o.y && (this.h.a() === "deleteditems" || this.h.a() === "archivedeleteditems")) {
            this.bg = new _fm.c(_u.R.Mw, null, new _j.g(this.cR, this.j()));
            Array.add(n, this.bg)
        }
    },
    dg: function() {},
    eL: function() {
        this.h.rpcl("TotalCount", this.W);
        this.h.rpcl("UnreadCount", this.W);
        this.h.rpcl("FolderId", this.ci);
        if (this.P.a() === "Mouse") {
            this.h.rpcl("IsFavoriteFolder", this.cj);
            this.h.rpcl("DisplayName", this.ch)
        }
        this.z || this.i.rpcl("SelectedFolderId", this.ck);
        this.i = null;
        _a.gd.prototype.eL.call(this)
    },
    j: function() {
        return _a.a.v
    },
    o: null,
    X: null,
    dR: function(n, t) {
        this.h.bH.FolderId && (this.z = _g.bk.a(this.h.bH.FolderId))
    },
    ec: function() {
        this.bi(0, _u.R.j, null, null)
    },
    dc: function() {
        if (this.Z) {
            if (this.cp) {
                var n = this.p.p;
                var t = n.x.length;
                if (this.q) {
                    t = n.m(this.q);
                    n.n(t)
                }
                this.cl();
                this.q && n.t(t, this.q)
            }
        } else {
            this.Z = !0;
            this.bF = new _j.g(this.cO, this.j());
            this.bK = new _j.g(this.cU, this.j());
            this.bE = new _j.g(this.cN, this.j());
            var i = this.i && this.i.t ? this.E() : this.B();
            this.p.p.j(i)
        }
        this.bg && this.i && this.i.o && this.bg.a(this.i.o.g)
    },
    db: function(n, t) {
        var i;
        switch (this.h.a()) {
            case "deleteditems":
                i = this.i.o.g && t ? _u.R.HG : this.de();
                break;
            case "archivedeleteditems":
                i = this.de();
                break;
            case "junkemail":
                i = this.bd ? _u.R.RK : _u.R.UC;
                break;
            default:
                i = _h.a.h(this.h) ? String.format(_u.R.B, this.h.bH.DisplayName) : String.format(_u.R.NV, this.h.bH.DisplayName);
                break
        }
        var u = _j.m.a().i;
        var r = this;
        this.bi(1, i, function(i, f) {
            if (i) {
                _j.m.a().o(u);
                r.cY(n, t)
            }
        }, _h.a.c ? _u.R.IT : _u.R.Bs)
    },
    bD: function(n, t) {
        this.h.bH.FolderId && this.h.a() === t && this.bh(!n)
    },
    bL: function() {
        this.dq()
    },
    dM: function(n) {},
    dG: function(n) {
        if (this.be) this.be.a(n);
        else if (this.bf) {
            var t = this;
            this.bf.a(function(i) {
                t.be = i;
                t.be.a(n)
            })
        }
    },
    cl: function() {
        if (!this.bd) {
            this.cp = !0;
            var n = _g.a.a().G();
            if (n && n.b() > 0) {
                var t = this.h.a();
                if (this.h.b) {
                    this.q = new _y.R(_u.R.OG, null, this.bt, this.bs, n, t, !1, null, null, !0, !1, this.h.G());
                    this.q.y(!1)
                } else {
                    var u = !!this.n.c() && this.n.c().bH.HasArchive;
                    var f = this.h.H() ? this.h.H().a() : null;
                    var i = this.h.E() ? this.h.E().a() : null;
                    var r = u && !_h.l.a(this.h.bH.FolderId ? this.h.bH.FolderId : this.h.bH.ParentFolderId);
                    this.q = new _y.R(_u.R.OG, null, this.bt, this.bs, n, t, r, f, i, !0, !1, this.h.G())
                }
            }
        }
    },
    bM: function() {
        this.cv();
        this.Y && this.Y.a(!this.bA());
        this.G && this.G.a(!this.bB())
    },
    df: function() {
        var n = this.i.o.f;
        if (!n.h.cb(this.h) && (!n.l || !_g.l.b(this.h.bH.FolderId, n.bO())) && (n.l || !_g.l.b(this.h.bH.FolderId, n.bN()))) {
            var t = this;
            this.o.a(function(i) {
                var r = i.e();
                r.e(t.h);
                r.h(n.l ? 0 : 1);
                r.f(n.h.bH.FolderId);
                _a.g.a.a(r)
            })
        }
    },
    eb: function() {
        var n = this.i.x;
        return _g.l.b(n, this.h.bH.FolderId)
    },
    cv: function() {
        if (this.h.b || this.i.t) {
            this.cq(!1);
            this.cr(!1);
            return
        }
        if (this.h.c()) {
            this.cq(!1);
            this.cr(!0);
            return
        }
        var n = !!this.h.bH.FolderId && !(this.h.a() === "outbox" || this.h.a() === "notes" || _h.a.h(this.h) || _h.a.T(this.h));
        this.cq(n && !this.h.m);
        this.cr(n && this.h.m)
    },
    co: function(n, t) {
        this.dn();
        this.eJ("SelectedFolderChanged")
    },
    dI: function(n) {
        var t = null;
        var r = "";
        var u = this.dL();
        if (IAddFavoriteFolderAction.isInstanceOfType(n)) {
            t = "AddFavoritesFolder";
            r = n.O()
        } else if (IRemoveFavoriteFolderAction.isInstanceOfType(n)) {
            t = "RemoveFavoritesFolder";
            r = n.O()
        }
        var i = _a.p.c(t);
        if (i) {
            i.n = r;
            i.m = u;
            _a.p.a(t)
        }
    },
    bi: function(n, t, i, r) {
        var u = this.i.w;
        if (!u.r) {
            this.dl(!0);
            var f = this;
            u.h(n, t, function(n, t) {
                i && i(n, t);
                f.dl(!1)
            }, !1, null, null, r)
        }
    },
    dS: function(n, t) {
        this.bM()
    },
    dQ: function(n, t) {
        this.eJ("FolderOrRemoteFolderDisplayName")
    },
    dn: function() {
        this.h.bH.FolderId && this.i.x ? this.i.x && this.bh(this.eb()) : this.bh(!1);
        this.u && this.i.C(this)
    },
    cY: function(n, t) {
        if (this.i.o.g && t && _h.a.l(_g.b.a.nameToId("recoverableitemsdeletions"))) return;
        else if (_h.a.l(this.h.bH.FolderId)) return;
        var i = this;
        this.o.a(function(r) {
            var o = _a.b.b(_a.a.v, "EmptyFolder", !1, null);
            var e = 23;
            var u = r.c();
            if (i.i.o.g && t) {
                var s = _g.j.a("recoverableitemsdeletions");
                u.e(s);
                u.f(2);
                e = 24
            } else {
                u.e(i.h);
                u.f(i.n.b().g(i.h.bH.FolderId, i.h.b, _y.c.a.a() !== "Mouse").a())
            }
            u.h(i.n.a().b());
            u.j(n);
            i.cZ = u;
            _a.g.a.a(u);
            var f = new _a.l;
            f = _h.g.b(f);
            f.a("fl", _h.bf.toString(e));
            o.m = f.toString();
            _a.b.a(o)
        });
        _a.g.c().a(_a.U, new _a.U(9))
    },
    dO: function() {
        this.i.H(this);
        this.i.bn.a()
    },
    dH: function() {
        this.O && this.O.a(1060, 0)
    },
    ea: function() {
        this.i.H(this);
        this.i.bp.a()
    },
    dN: function() {
        this.i.H(this);
        this.i.bm.a()
    },
    dT: function() {
        if (this.h.a() === "deleteditems")
            if (this.h.b) {
                _a.g.c().a(_y.bX, new _y.bX(this.h, !1));
                _h.g.a(_a.a.v, "RecoverMessagesContextMenuSelected", -1, 0, null)
            } else this.i.o.g || this.i.o.bY();
        else if (this.h.a() === "archivedeleteditems") {
            _a.g.c().a(_y.bX, new _y.bX(this.h, !1));
            _h.g.a(_a.a.v, "RecoverMessagesContextMenuSelected", -1, 0, null)
        }
    },
    de: function() {
        return this.bd ? _u.R.Db : _u.R.F
    },
    dU: function() {
        var n = this;
        this.o.a(function(t) {
            _a.p.b(_a.a.v, "RemoveFavoritesFolder");
            var i = t.j();
            i.e(n.h);
            i.a(n.cg);
            _a.g.a.a(i)
        })
    },
    dP: function(n, t) {
        this.dq()
    },
    dq: function() {
        if (this.h) {
            if (this.h.bH.FolderId)
                for (var n = 0; n < _y.bI.a.length; n++) this.h.a() === _y.bI.a[n] && this.dZ(!0);
            this.C ? this.cs(this.h.bH.TotalCount || 0) : _g.u.isInstanceOfType(this.h) && this.cs(this.h.bH.UnreadCount || 0);
            (this.h.c() || this.h.G()) && this.cs(0)
        }
    },
    eh: function() {
        this.ek();
        this.ee();
        this.el();
        this.eg();
        this.ef()
    },
    ek: function() {
        this.dX(this.m > 0)
    },
    ee: function() {
        this.dW(!this.i.t && this.m > 0 ? this.m.toString() : "")
    },
    el: function() {
        this.m <= 0 ? this.ct("") : this.C ? this.ct(this.m === 1 ? String.format(_u.R.Nr, this.m.toString()) : String.format(_u.R.TD, this.m.toString())) : this.ct(String.format(_u.R.Do, this.m.toString()))
    },
    eg: function() {
        this.m > 0 ? this.di(this.C ? " [" : "") : this.di("")
    },
    ef: function() {
        this.m > 0 ? this.dh(this.C ? "]" : "") : this.dh("")
    },
    ei: function(n) {
        var t = new _h.ea;
        t.e = this.h;
        t.f = n;
        t.j = !1;
        this.cX = t;
        _a.g.a.a(t)
    },
    ed: function(n) {
        var t = new _h.ea;
        t.e = this.h;
        t.f = n;
        t.j = !0;
        this.cV = t;
        _a.g.a.a(t)
    },
    ej: function(n) {
        var t = this.n.b().g(this.h.bH.FolderId, this.h.b, this.P.a() !== "Mouse");
        var i = !n;
        if (!this.h.b && t.h !== i) {
            t.p(i);
            this.n.b().k(t)
        }
        this.i.bT()
    },
    dL: function() {
        var n = new _a.l;
        if (this.i && this.i.o && this.i.o.b && this.i.o.b.a) {
            var t = this.i.o.b.a.x.length;
            n.b("c", t);
            return n.toString()
        } else return ""
    },
    dV: function() {
        var n = this;
        this.bi(1, String.format(_u.R.Eq, this.h.bH.DisplayName), function(t, i) {
            t && n.L().a()
        }, _u.R.x)
    }
};
_y.kf = function(n, t, i, r, u, f, e, o) {
    this.bk = Function.createDelegate(this, this.bP);
    this.bj = Function.createDelegate(this, this.bO);
    _y.kf.resolveInheritance();
    this.e = this.apcl;
    _y.kf.initializeBase(this);
    this.O = n;
    this.t = t;
    this.bb = i;
    this.bc = r;
    this.ba = u;
    this.E = f;
    this.u = e;
    this.bl = o;
    this.B = !!this.bc && this.bc.a().c().Enabled;
    this.A = !!this.ba && this.ba.c();
    _y.c.a.a() === "Mouse" && (this.B || this.A) && this.bb.b(_y.bM, this.bk);
    this.w = new _bc.b;
    _dh.a(this.u, this)
};
_y.kf.prototype = {
    t: !1,
    O: null,
    bc: null,
    ba: null,
    K: !1,
    U: null,
    M: null,
    N: null,
    bn: null,
    bp: null,
    bm: null,
    v: null,
    o: null,
    L: !1,
    q: null,
    x: null,
    be: !1,
    bb: null,
    w: null,
    B: !1,
    S: function(n) {
        this.L ? n(this, "IsFolderTreeLoaded") : this.apcl("IsFolderTreeLoaded", n)
    },
    bQ: function(n) {
        this.rpcl("IsFolderTreeLoaded", n)
    },
    l: function(n) {
        this.o = n;
        this.eJ("ParentForestViewModel");
        return n
    },
    bR: function(n) {
        if (this.be !== n) {
            this.be = n;
            this.eJ("ShowCreateFolderButton")
        }
        return n
    },
    C: function(n) {
        if (this.q !== n) {
            this.q = n;
            this.q && this.q.h ? this.bo(this.q.h.bH.FolderId) : this.q || this.bo(null);
            this.eJ("SelectedFolder")
        }
        return n
    },
    H: function(n) {
        if (this.M !== n) {
            this.M = n;
            this.o && this.o.bj(n);
            this.eJ("ActionTargetFolder")
        }
        return n
    },
    bo: function(n) {
        if (this.x !== n) {
            this.x = n;
            this.eJ("SelectedFolderId")
        }
        return n
    },
    f: function() {
        return this.v
    },
    h: function(n) {
        this.v = n;
        this.eJ("ActivateFolderSelectionCommand");
        return n
    },
    j: function(n) {
        this.bn = n;
        this.eJ("MarkAllAsReadCommand");
        return n
    },
    m: function(n) {
        this.bp = n;
        this.eJ("SetFolderPermissionsCommand");
        return n
    },
    i: function(n) {
        this.bm = n;
        this.eJ("InitiateMoveFolderCommand");
        return n
    },
    bz: function(n) {
        this.L = n;
        this.eJ("IsFolderTreeLoaded");
        return n
    },
    A: !1,
    E: null,
    u: null,
    bl: null,
    bT: function() {
        this.N && (this.N = _j.m.a().b(this.N));
        var n = this;
        this.N = _j.m.a().a(_a.a.v, "DelayMailFoldersExpandedListUpdate", function() {
            n.bN()
        }, 3e4)
    },
    bO: function(n) {
        var t = n;
        t && t.h() === "ErrorFolderExists" && this.bq()
    },
    bq: function() {
        this.w.h(0, _u.R.DV)
    },
    bS: function() {
        this.w.h(0, _u.R.Ot, null, !1, null, null, _u.R.BA)
    },
    bd: function() {
        return _a.a.v
    },
    G: function() {
        this.C(null)
    },
    r: function(n) {
        this.bo(n)
    },
    T: function() {
        this.bz(!0)
    },
    eL: function() {
        _y.c.a.a() === "Mouse" && (this.B || this.A) && this.bb.c(_y.bM, this.bk);
        _a.gd.prototype.eL.call(this)
    },
    bN: function() {
        _h.f.a(_g.a.a().b().c(), _a.g.a);
        this.N = null
    },
    bP: function(n) {
        this.bR(n.a)
    }
};
_y.eu = function(n, t) {
    this.d = Function.createDelegate(this, this.f);
    _y.eu.initializeBase(this);
    this.a = n;
    this.c = t
};
_y.eu.prototype = {
    a: null,
    c: null,
    b: null,
    e: function() {
        var n = new _h.ep;
        n.c(this.d);
        this.c.a(n)
    },
    f: function(n) {
        this.b && this.b(n.e)
    }
};
_y.fr = function(n) {
    this.a = n
};
_y.fr.prototype = {
    a: null
};
_y.n = function(n) {
    _y.n.resolveInheritance();
    this.eF = this.fa;
    this.eE = this.fo;
    _y.n.initializeBase(this);
    !!n !== n ? this.v(!1) : this.v(n)
};
_y.n.prototype = {
    x: function() {
        return this.eM(_y.n.g)
    },
    v: function(n) {
        this.eK(_y.n.g, n);
        return n
    },
    k: function() {
        return this.eM(_y.n.i)
    },
    a: function(n) {
        this.eK(_y.n.i, n);
        return n
    },
    t: function() {
        return this.eM(_y.n.k)
    },
    g: function(n) {
        this.eK(_y.n.k, n);
        return n
    },
    j: function() {
        return this.eM(_y.n.f)
    },
    m: function(n) {
        this.eK(_y.n.f, n);
        return n
    },
    n: function() {
        return this.eM(_y.n.d)
    },
    d: function(n) {
        this.eK(_y.n.d, n);
        return n
    },
    o: function() {
        return this.eM(_y.n.e)
    },
    b: function(n) {
        this.eK(_y.n.e, n);
        return n
    },
    p: function() {
        return this.eM(_y.n.a)
    },
    i: function(n) {
        this.eK(_y.n.a, n);
        return n
    },
    r: function() {
        return this.eM(_y.n.h)
    },
    f: function(n) {
        this.eK(_y.n.h, n);
        return n
    },
    q: function() {
        return this.eM(_y.n.c)
    },
    e: function(n) {
        this.eK(_y.n.c, n);
        return n
    },
    s: function() {
        return this.eM(_y.n.j)
    },
    c: function(n) {
        this.eK(_y.n.j, n);
        return n
    },
    u: function() {
        return this.eM(_y.n.m)
    },
    h: function(n) {
        this.eK(_y.n.m, n);
        return n
    },
    be: function() {
        return this.x() ? [this.k()] : null
    },
    ch: function() {
        return this.k().bH.Subject
    },
    bD: function() {
        return null
    },
    cS: function() {
        return this.eM(_y.n.l)
    },
    bE: function(n) {
        this.eK(_y.n.l, n);
        return n
    },
    w: function() {
        return this.eM(_y.n.b)
    },
    l: function(n) {
        this.eK(_y.n.b, n);
        return n
    }
};
_y.fq = function() {};
_y.fq.a = function(n, t, i) {
    return !t || i.a() !== "Mouse" ? !1 : t.a().dm().Enabled && Array.contains(_g.D.g, n.Id) ? !0 : !1
};
_y.x = function(n, t, i, r, u, f, e, o, s, h) {
    _y.x.initializeBase(this, [n, t, r, u, s, h, f, e, null, null]);
    this.w = r;
    this.x = i;
    this.O = s;
    if (!o || _h.l.b(n.bH.FolderId) && _h.a.p(n.bH.FolderId)) {
        this.bp(n);
        this.ca()
    }
    this.h.bH.FolderId || this.v(2);
    t.o && this.H(this.w.a().bH.IsMailRootFolderTreeCollapsed && !t.o.K);
    r.j() && n.bH.FolderId && (2048 & this.w.a().v()) == 2048 && this.bJ(!1);
    this.eD()
};
_y.x.a = function(n) {
    if (!n.c()) {
        if (!_h.a.V(n) || n.r || _y.x.d(n) || n.a() === "notes" && (!_g.a.a().e().bH.StickyNotes || _g.a.a().E) || n.a() === "junkemail" && !_g.a.a().e().bH.JunkEMail) return !1;
        var t = _g.fh.a(_g.a.a());
        if (t && n.bH.FolderClass === "IPF.ShortcutFolder") return !1
    }
    return !0
};
_y.x.d = function(n) {
    if (!n.bH.FolderId || n.a() === "outbox" && _h.s.a.e.c()) return !1;
    for (var t = 0; t < _y.x.b.length; t++)
        if (n.a() === _y.x.b[t]) return !0;
    return !1
};
_y.x.prototype = {
    bk: null,
    bj: null,
    bl: null,
    bm: null,
    bn: null,
    bo: null,
    cF: null,
    cG: null,
    cD: null,
    cw: null,
    cz: null,
    cE: null,
    cy: null,
    cx: null,
    cC: null,
    cB: null,
    cA: null,
    dr: null,
    ds: null,
    dC: null,
    bY: null,
    dB: null,
    bV: null,
    bT: null,
    bU: null,
    bO: null,
    bP: null,
    bQ: null,
    bX: null,
    Q: null,
    bW: null,
    l: null,
    I: !1,
    bR: !1,
    w: null,
    x: null,
    eA: function(n) {
        this.l = n;
        this.eJ("SubFolders");
        return n
    },
    e: function() {
        this.bV || (this.bV = new _j.g(this.cA || (this.cA = Function.createDelegate(this, this.R)), this.j()));
        return this.bV
    },
    cI: function() {
        this.bT || (this.bT = new _j.g(this.cB || (this.cB = Function.createDelegate(this, this.et)), this.j()));
        return this.bT
    },
    S: function() {
        if (!this.bU) {
            this.bU = new _j.g(this.cC || (this.cC = Function.createDelegate(this, this.eu)), this.j());
            this.bZ()
        }
        return this.bU
    },
    a: function() {
        this.bO || (this.bO = new _j.g(this.cx || (this.cx = Function.createDelegate(this, this.en)), this.j()));
        return this.bO
    },
    b: function() {
        if (!this.bP) {
            this.bP = new _j.g(this.cy || (this.cy = Function.createDelegate(this, this.ep)), this.j());
            this.bZ()
        }
        return this.bP
    },
    g: function() {
        this.bX || (this.bX = new _j.g(this.cE || (this.cE = Function.createDelegate(this, this.ey)), this.j()));
        return this.bX
    },
    cH: function() {
        if (!this.bQ) {
            this.bQ = new _j.g(this.cz || (this.cz = Function.createDelegate(this, this.dt)), this.j());
            this.bZ()
        }
        return this.bQ
    },
    bc: function() {
        return this.eq()
    },
    eq: function() {
        if (!this.Q) {
            var n = this;
            this.Q = new _j.w(this.cw || (this.cw = Function.createDelegate(this, this.em)), this.j(), this.h, "IsSharedFolder", function() {
                return !n.h.b
            })
        }
        return this.Q
    },
    f: function() {
        this.bW || (this.bW = new _j.g(this.cD || (this.cD = Function.createDelegate(this, this.ew)), this.j()));
        return this.bW
    },
    M: function() {
        return _y.bI.prototype.M.call(this) && this.h.a() !== "msgfolderroot" && !this.i.o.z()
    },
    bS: function() {
        return this.h.bH.FolderId ? !_h.a.p(this.h.bH.FolderId) : !1
    },
    dE: function(n) {
        if (n !== this.I) {
            this.I = n;
            this.eJ("HasChildren")
        }
        return n
    },
    er: function() {
        this.bY || (this.bY = new _j.g(this.cG || (this.cG = Function.createDelegate(this, this.eC)), this.j()));
        return this.bY
    },
    ez: function(n) {
        if (n !== this.bR) {
            this.bR = n;
            this.eJ("FolderNameWhenOffline")
        }
        return n
    },
    eL: function() {
        this.eE();
        var n;
        _a.h.a(n = {
            val: this.Q
        }), this.Q = n.val;
        _y.bI.prototype.eL.call(this)
    },
    N: function() {
        var n = {};
        n.IsDistinguishedFolder = _h.a.p(this.h.bH.FolderId);
        n.FolderId = this.h.bH.FolderId;
        n.DragItemType = 3;
        this.dj(JsonParser.serialize(n))
    },
    E: function() {
        if (!this.h.c()) {
            var n = this.dA();
            this.cK();
            return n
        }
        return []
    },
    B: function() {
        if (!this.h.c()) {
            var n = this.dA();
            if (!this.w.c().bH.IsShadowMailbox) {
                var r = new _fm.c(_u.R.UM, null, this.cH());
                Array.add(n, r)
            }
            Array.add(n, new _fm.c(_h.a.c ? _u.R.IT : _u.R.Hf, null, this.bb));
            if (!this.i.o.z()) {
                this.Y = new _fm.c(_u.R.Su, null, this.bc());
                Array.add(n, this.Y);
                this.G = new _fm.c(_u.R.RS, null, this.L());
                Array.add(n, this.G)
            }
            var u = new _fm.c(_u.R.MG, null, this.bE);
            Array.add(n, u);
            this.cW(n);
            _g.u.isInstanceOfType(this.h) && Array.add(n, new _fm.c(_u.R.GI, null, this.bF));
            this.i.K && _g.b.a.nameToId("clutter") && this.h.bH.FolderId.Id === _g.b.a.nameToId("clutter").Id && Array.add(n, new _fm.c(_u.R.RO, null, this.dd()));
            if (_y.c.a.a() === "Mouse" && !this.i.o.z()) {
                if (this.h.a() === "msgfolderroot" && !this.w.c().bH.IsExplicitLogon) {
                    var t = new _j.g(this.cF || (this.cF = Function.createDelegate(this, this.eB)), this.j());
                    var i = new _fm.c(_u.R.Pj, null, t);
                    Array.add(n, i)
                }
                this.cl();
                this.q && Array.add(n, this.q);
                !_g.u.isInstanceOfType(this.h) || this.h.c() || this.h.b || Array.add(n, new _fm.c(_u.R.Nn, null, this.bK))
            }
            this.cK();
            this.bM();
            this.eo(n);
            return n
        }
        return []
    },
    bL: function() {
        _y.bI.prototype.bL.call(this);
        this.cJ();
        this.l && this.l.g()
    },
    dg: function() {
        this.s === 1 || this.s === 2 ? this.i.bv(!1) : this.i.bv(!0)
    },
    R: function() {
        if (!this.l || !this.l.x.length) {
            this.bp(this.h);
            if (this.z) {
                var n = this.i.n;
                n.W(this.h)
            }
            this.I && this.ca()
        }
    },
    bN: function(n, t) {
        if (_y.x.a(t)) {
            t.b = this.h.b;
            t.q = this.h.q;
            t.D = this.h.D;
            var i = new _y.x(t, this.i, this.x, this.w, this.bf, this.o, this.X, !0, this.O, this.cn);
            n.a(i)
        }
    },
    dA: function() {
        var t = [];
        var n;
        n = this.h.a() === "msgfolderroot" || this.h.a() === "archivemsgfolderroot" ? _u.R.DS : _u.R.Kq;
        Array.add(t, new _fm.c(n, null, this.cI()));
        if (!this.w.c().bH.IsShadowMailbox) {
            var i = new _fm.c(_u.R.MT, null, this.S());
            Array.add(t, i)
        }
        return t
    },
    eo: function(n) {
        this.h.bH.FolderId && this.i.Y && (this.h.a() === "msgfolderroot" || this.h.a() === "inbox" && _g.a.a().E) && Array.add(n, new _fm.c(_u.R.Hl, null, this.er()))
    },
    bp: function(n) {
        if ((!this.l || !(this.l.x.length > 0)) && n.bH.FolderId) {
            var t = this.i.n;
            n.g || n.I(t.C(n.bH.FolderId));
            n.g.e(this.bo || (this.bo = Function.createDelegate(this, this.dz)));
            n.g.d(this.bo || (this.bo = Function.createDelegate(this, this.dz)))
        }
    },
    dz: function(n, t) {
        this.h.g || this.bp(this.h);
        if (!this.l) {
            this.ca();
            return
        }
        switch (t.c) {
            case 0:
                for (var u = 0; u < t.a.length; u++) {
                    var e = t.a[u];
                    this.bN(this.l, e)
                }
                break;
            case 2:
                for (var i = 0; i < t.b.length; i++)
                    for (var o = t.b[i], r = 0; r < this.l.x.length; r++) {
                        var f = this.l.x[r];
                        if (o.cb(f.h)) {
                            this.l.p(f, !0);
                            this.i.P(f)
                        }
                    }
                break
        }
    },
    dy: function(n, t) {
        if (this.h.bH.FolderId) {
            this.bp(this.h);
            this.s === 2 && this.v(1);
            this.bM()
        } else this.v(2);
        this.bZ();
        this.eJ("CanDelete");
        this.eJ("EnableContextMenu")
    },
    bZ: function() {
        this.S().c(this.cH().c(this.b().c(this.bS())))
    },
    dw: function(n, t) {
        this.cK()
    },
    dx: function(n, t) {
        this.cJ()
    },
    cJ: function() {
        !this.z && this.l ? this.dE(this.l.x.length > 0) : this.h && this.dE(this.h.bH.ChildFolderCount > 0)
    },
    ca: function() {
        this.l || this.eA(new _j.l);
        if (this.h.g) {
            if (this.i.n.t)
                for (var n = 0, t = this.h.g.x.length; n < t; n++) this.bN(this.l, this.h.g.x[n]);
            else {
                var i = this.es();
                this.dD(i)
            }
            this.cJ()
        }
    },
    es: function() {
        for (var t = 0, n = 0; n < this.h.g.x.length; n++) {
            var i = this.h.g.x[n];
            if (_y.x.a(i)) {
                t = n;
                break
            }
        }
        return t
    },
    dD: function(n) {
        if (n < this.h.g.x.length) {
            var i = this.h.g.x[n];
            this.bN(this.l, i);
            var t = this;
            _j.m.a().d(_a.a.v, "Render tree nodes", function() {
                t.dD(n + 1)
            })
        }
    },
    et: function() {
        this.w.j() && this.i.Q && this.i.bu(!1);
        this.I && this.R();
        this.v(3)
    },
    en: function() {
        var i = this.i.n;
        if (_h.a.x(this.h, this.r)) {
            this.i.bq();
            return
        }
        var t = _a.b.b(_a.a.v, "CreateMailFolder", !0, null);
        var n = new _h.be;
        n.l(i);
        n.e = this.h;
        n.k(this.r);
        this.h.b ? n.b(this.V) : n.b(this.i.bj);
        var r = this;
        n.a(function(n) {
            var i = n;
            t.n = i.O();
            t.o = i.P();
            _a.b.a(t)
        });
        this.dr = n;
        if (!this.l || !this.l.x.length) {
            this.bp(this.h);
            this.ca()
        }
        _a.g.a.a(n)
    },
    dt: function() {
        var r = _h.a.h(this.h) || _h.a.F(this.h);
        var t;
        var u = this.i.n;
        var e = _h.a.b("msgfolderroot");
        var o = _h.l.a(this.h.bH.FolderId);
        t = o ? u.f(_g.b.a.nameToId("archivedeleteditems")) : this.h.b ? e.f(_g.b.a.nameToId("deleteditems")) : u.f(_g.b.a.nameToId("deleteditems"));
        var i = r || !_h.a.x(t, this.h.bH.DisplayName);
        var n;
        n = r ? _u.R.HH : i ? _u.R.Dg : _u.R.Ll;
        var f = this;
        this.bi(i ? 1 : 0, String.format(n, this.h.bH.DisplayName), function(n, t) {
            n && i && f.b().a()
        }, _u.R.Fi)
    },
    ep: function() {
        var u = this.i.n;
        var r = null;
        if (this.h.b) {
            var t = new _h.df;
            t.e = this.h;
            t.f = _g.b.a.nameToId("deleteditems");
            t.b(this.V);
            r = t
        } else {
            var i = _a.b.b(_a.a.v, "DeleteMailFolder", !0, null);
            var n = new _h.bo;
            n.o(this.h);
            n.p(u);
            var f = this;
            n.a(function(n) {
                var t = n;
                i.n = t.O();
                i.o = t.P();
                _a.b.a(i)
            });
            this.ds = n;
            r = n
        }
        _a.g.a.a(r);
        this.h.m && this.L().a()
    },
    eu: function() {
        this.v(4)
    },
    ey: function() {
        if (_h.a.Q(this.h, this.r, !0)) {
            this.i.bq();
            return
        }
        var t = _a.b.b(_a.a.v, "RenameMailFolder", !0, null);
        var n = new _h.dR;
        n.e = this.h;
        n.f = this.r;
        this.h.b && n.b(this.V);
        var i = this;
        n.a(function(n) {
            var i = n;
            t.n = i.O();
            t.o = i.P();
            _a.b.a(t)
        });
        this.dC = n;
        _a.g.a.a(n);
        this.h.m && this.ex(this.r)
    },
    ex: function(n) {
        var t = this;
        this.o.a(function(i) {
            var r = i.k();
            r.e(t.h);
            r.f(n);
            _a.g.a.a(r)
        })
    },
    em: function() {
        if (!this.h.b) {
            var n = this;
            this.o.a(function(t) {
                _a.p.b(_a.a.v, "AddFavoritesFolder");
                var i = t.b();
                i.e(n.h);
                i.a(n.cg);
                _a.g.a.a(i)
            })
        }
    },
    ev: function() {
        if (!this.h.b) {
            var n = this.i.o.f;
            if (this.h.m) this.df();
            else {
                var t = this;
                this.o.a(function(i) {
                    var r = i.b();
                    r.e(t.h);
                    r.h(n.h.bH.FolderId);
                    r.f(n.l ? 0 : 1);
                    _a.g.a.a(r)
                })
            }
        }
    },
    ew: function() {
        var n = this.i.o.f;
        if (_h.l.a(n.h.bH.FolderId) !== _h.l.a(this.h.bH.FolderId)) {
            this.ec();
            return
        }
        if (n.h.b !== this.h.b) {
            this.bi(0, _u.R.Bi, null, null);
            return
        }
        if (_y.bR.isInstanceOfType(n)) _g.b.a.doesIdEqualName(this.h.bH.FolderId, "notes") || _h.a.h(this.h) || _h.a.T(this.h) || this.ev();
        else if (_y.x.isInstanceOfType(n)) {
            if (n.h.bH.FolderId.Id === this.h.bH.FolderId.Id || n.h.bH.FolderId.Id === this.h.bH.ParentFolderId.Id || _g.b.a.doesIdEqualName(n.h.bH.FolderId, "outbox")) return;
            if (n.h.bH.FolderId.Id === _g.b.a.nameToId("deleteditems").Id) {
                this.dt();
                return
            }
            if (_h.a.x(n.h, this.h.bH.DisplayName)) {
                this.i.bS();
                return
            }
            var t = new _h.df;
            t.e = this.h;
            t.f = n.h.bH.FolderId;
            (this.h.b || n.h.b) && t.b(this.V);
            _a.g.a.a(t)
        }
    },
    cK: function() {
        if (this.Z) {
            this.cH().c(this.bS());
            this.S().c(this.bS());
            this.bE.c(this.bS());
            this.cI().c(_g.j.j(this.h));
            this.bb.c(_g.j.k(this.h))
        }
    },
    eB: function() {
        this.i.o.cj()
    },
    eC: function() {
        this.x.a(_y.cf, new _y.cf(-1))
    },
    eD: function() {
        this.h.apcl("FolderId", this.bn || (this.bn = Function.createDelegate(this, this.dy)));
        this.h.apcl("ChildFolderCount", this.bm || (this.bm = Function.createDelegate(this, this.dx)));
        _y.c.a.a() === "Mouse" && this.apcl("CanDelete", this.bl || (this.bl = Function.createDelegate(this, this.dw)));
        this.h.a() === "outbox" && this.x.b(_h.ct, this.bj || (this.bj = Function.createDelegate(this, this.du)));
        this.h.a() === "deleteditems" && this.x.b(_y.dg, this.bk || (this.bk = Function.createDelegate(this, this.dv)))
    },
    eE: function() {
        this.h.rpcl("FolderId", this.bn || (this.bn = Function.createDelegate(this, this.dy)));
        this.h.rpcl("ChildFolderCount", this.bm || (this.bm = Function.createDelegate(this, this.dx)));
        _y.c.a.a() === "Mouse" && this.rpcl("CanDelete", this.bl || (this.bl = Function.createDelegate(this, this.dw)));
        this.h.a() === "outbox" && this.x.c(_h.ct, this.bj || (this.bj = Function.createDelegate(this, this.du)));
        this.h.a() === "deleteditems" && this.x.c(_y.dg, this.bk || (this.bk = Function.createDelegate(this, this.dv)))
    },
    du: function(n) {
        this.ez(n.a)
    },
    dv: function(n) {
        if (n.a === 21 && this.i.v) {
            if (this.i.B && !this.i.t && this.i.o.n && this.i.o.n.D) {
                this.i.o.n.D.a();
                this.i.o.c.C(this);
                this.i.o.c.v.a();
                this.Z || this.dc()
            } else {
                this.i.C(this);
                this.i.v.a()
            }
            this.p.n(this.dB);
            this.p.m(!0)
        }
    }
};
_y.Y = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w) {
    this.W = Function.createDelegate(this, this.bE);
    _y.Y.initializeBase(this, [s, h, n, y, p, f, e, o]);
    _a.c.b(n, "eventAggregator");
    this.Y = l;
    this.K = v;
    this.I = n;
    this.U = a;
    this.bs = c;
    this.R = u;
    _h.a.c = _y.d.b(y, u, p, w);
    this.z = _j.u.a(t) ? "msgfolderroot" : t;
    if (i) {
        this.p = i;
        this.n = r;
        this.bf()
    } else {
        this.p = new _g.u;
        this.p.j(_g.b.a.nameToId(this.z))
    }
};
_y.Y.prototype = {
    bs: !1,
    Y: !1,
    R: null,
    I: null,
    n: null,
    z: "none",
    p: null,
    Q: !1,
    s: null,
    X: !1,
    bG: function() {
        return !this.t && !this.X
    },
    bv: function(n) {
        if (this.X !== n) {
            this.X = n;
            this.eJ("IsDraggableBehaviorEnabled")
        }
        return n
    },
    d: function() {
        return this.p
    },
    Z: function(n) {
        if (n !== this.s) {
            this.s = n;
            this.eJ("RootFolderNodeViewModel")
        }
        return n
    },
    bu: function(n) {
        if (this.Q !== n) {
            this.Q = n;
            this.eN("IsConsumerFolderRootNodeCollapsed", "ConsumerFolderRootNodeToolTip")
        }
        return n
    },
    b: function() {
        return this.n
    },
    bt: function(n) {
        if (this.n !== n) {
            this.n = n;
            this.eJ("FolderTable")
        }
        return n
    },
    bF: function() {
        return this.Q ? _u.R.Oh : _u.R.Us
    },
    g: function() {
        if (!this.n) {
            this.n = _h.a.b(this.z);
            this.n.U = this.o ? this.B : !1;
            this.n.j = this.p;
            this.n.be(this.W);
            this.n.k(null, 0, null)
        }
    },
    P: function(n) {
        this.o && this.o.a() && n.h.cb(this.o.a().h) && !n.i.t && this.o.O.a()
    },
    bf: function() {
        this.Z(new _y.x(this.p, this, this.I, this.R, this.O, this.E, this.u, !1, this.U, this.K))
    },
    bE: function(n, t) {
        if (!this.n.d()) {
            this.br();
            this.T();
            this.n.bo(this.W)
        }
    },
    br: function() {
        if (this.p.bH.FolderId.Id) {
            this.p.I(this.n.C(this.p.bH.FolderId));
            this.bf()
        }!this.p.g || !this.p.g.x.length
    }
};
_y.N = function(n, t, i) {
    _y.N.initializeBase(this);
    this.p(n);
    this.m = t;
    this.o = i
};
_y.N.prototype = {
    o: !1,
    j: !1,
    i: !1,
    l: null,
    m: null,
    a: function() {
        return this.m
    },
    n: !1,
    c: function() {
        return this.n
    },
    b: function(n) {
        this.n = n;
        return n
    },
    h: function() {
        return this.o || this.i ? "" : this.l
    },
    p: function(n) {
        if (this.l !== n) {
            this.l = n;
            this.eJ(_y.N.a)
        }
        return n
    },
    f: function() {
        return this.j
    },
    d: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.eJ(_y.N.c)
        }
        return n
    },
    e: function() {
        return this.i
    },
    g: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.eN(_y.N.a, _y.N.b)
        }
        return n
    }
};
_y.bx = function() {};
_y.bx.b = function(n) {
    switch (n) {
        case 14:
            return _u.R.Tc;
        case 17:
            return _u.R.HW;
        case 15:
            return _u.R.LQ;
        case 13:
            return _u.R.QT;
        case 16:
            return _u.R.RG;
        case 18:
            return _u.R.BO;
        case 24:
            return _u.R.Ph;
        case 12:
            return _u.R.DF;
        case 4:
            return _u.R.U;
        case 5:
            return _u.R.IQ;
        case 7:
            return _u.R.Qz;
        case 6:
            return _u.R.OJ;
        case 21:
            return _u.R.GS;
        case 25:
            return _u.R.IH;
        case 23:
            return _u.R.PO;
        case 22:
            return _u.R.NN;
        case 3:
            return _u.R.Qt;
        case 19:
            return _u.R.OM;
        case 20:
            return _u.R.BU;
        case 10:
            return _u.R.Ne;
        case 11:
            return _u.R.Jc;
        case 8:
            return _u.R.V;
        case 9:
            return _u.R.CA;
        default:
            return ""
    }
};
_y.bx.d = function(n) {
    switch (n) {
        case "High":
            return _u.R.y;
        case "Low":
            return _u.R.QY;
        default:
            return ""
    }
};
_y.bx.c = function(n) {
    switch (n) {
        case "Complete":
            return _u.R.BL;
        case "Flagged":
            return _u.R.CT;
        default:
            return ""
    }
};
_y.bx.a = function(n) {
    return n ? _u.R.GT : ""
};
_y.bx.e = function(n) {
    return _j.h.b(n) ? _g.a.a().c().bH.UserDisplayName : n
};
_y.w = function(n, t, i, r, u, f, e, o, s) {
    this.C = Function.createDelegate(this, this.X);
    this.O = Function.createDelegate(this, this.ba);
    this.D = Function.createDelegate(this, this.Z);
    this.o = -1;
    _y.w.initializeBase(this);
    this.j = n;
    this.w = t;
    this.i = r;
    this.f = this.i.a() === "Mouse";
    this.s = u;
    this.e = f;
    this.a = i;
    this.i.h(this.D);
    this.g = window.document.body.clientWidth * .95;
    this.b = this.a.c;
    this.P = this.a.q;
    this.o = this.e.a().bH.NavigationBarWidth;
    this.c = this.f ? this.e.a().bH.MailFolderPaneExpanded : _y.w.c(r);
    this.a.apcl("SelectedFolderId", this.O);
    this.a.apcl("HashtagTreeCreated", this.C);
    this.v = e;
    this.y = o;
    this.H = s;
    this.E = this.f && !this.y && _y.bg.b;
    this.f || this.ff(this.W());
    this.V()
};
_y.w.a = function(n) {
    var t = _a.o.a();
    return n.a() === "TouchWide" && t.w() && t.b() && t.d().b() > 9
};
_y.w.c = function(n) {
    var t = _a.o.a();
    return _y.w.a(n) && !!window.navigator.cpuClass && window.navigator.cpuClass.toLowerCase() !== "arm"
};
_y.w.prototype = {
    g: 0,
    s: null,
    i: null,
    y: !1,
    a: null,
    j: null,
    w: null,
    d: 0,
    c: !1,
    b: null,
    P: null,
    I: null,
    e: null,
    v: null,
    z: null,
    f: !1,
    A: null,
    B: null,
    H: null,
    E: !1,
    n: function() {
        return this.f ? 0 : _y.lJ.prototype.n.call(this)
    },
    Y: function() {
        return this.c ? _u.R.X : _u.R.CE
    },
    t: function(n) {
        if (n) {
            if (!this.c) {
                this.c = n;
                this.eN("IsExpanded", "FolderPaneExpandCollapseButtonLabel");
                this.d = this.R();
                this.x()
            }
        } else {
            this.c = n;
            this.eN("IsExpanded", "FolderPaneExpandCollapseButtonLabel");
            this.N(!1)
        }
    },
    M: function(n) {
        if (this.c !== n) {
            this.c = n;
            this.eU("IsExpanded", "FolderPaneExpandCollapseButtonLabel", "ShowUpsellButton")
        }
        this.c && this.f && this.v.a(_a.dw, new _a.dw);
        this.N(!1)
    },
    bd: function(n) {
        this.d = n;
        this.x()
    },
    m: function(n) {
        this.M(n);
        this.be(n);
        this.s && _h.f.a(this.e.a().u, this.s);
        this.c && this.v.a(_a.cI, new _a.cI);
        return n
    },
    G: !1,
    K: function(n) {
        if (this.A !== n) {
            this.A = n;
            this.eJ("UpsellButtonText");
            if (this.T()) {
                this.G = !0;
                this.eJ("ShowUpsellButton")
            }
        }
        return n
    },
    S: function(n) {
        if (this.B !== n) {
            this.B = n;
            this.eJ("UpsellUrl")
        }
        return n
    },
    L: function(n) {
        if (this.d !== n) {
            this.d = n;
            this.x();
            this.o = n;
            this.bf(n);
            this.U(n);
            this.s && _h.f.a(this.e.a().u, this.s);
            this.v.a(_a.cI, new _a.cI)
        }
        return n
    },
    h: function() {
        return this.i.a() === "TouchWide" ? 60 : 50
    },
    bc: function(n) {
        this.g = n;
        this.eJ("MaxWidth");
        return n
    },
    R: function() {
        return _y.w.a(this.i) ? _y.w.e : this.i.a() === "TouchWide" ? _y.w.d : _y.w.b
    },
    p: function() {
        return this.z
    },
    r: function(n) {
        if (this.z !== n) {
            this.z = n;
            this.eJ("ReturnCommand")
        }
        return n
    },
    q: function() {
        return _u.R.Jd
    },
    du: function() {
        _y.lJ.prototype.du.call(this);
        _a.p.a("NavigateToSecondLevelFolderNavigationPane")
    },
    dv: function() {
        _y.lJ.prototype.dv.call(this);
        this.b && this.b.s && (this.b.s.s === 3 || this.b.s.s === 4) && this.b.s.v(1)
    },
    bb: function(n) {
        this.a.r();
        return this.a.m.c(n)
    },
    eL: function() {
        this.i.j(this.D);
        this.a.rpcl("HashtagTreeCreated", this.C);
        _y.lJ.prototype.eL.call(this)
    },
    ba: function(n, t) {
        this.eJ("NewMailOrNewPostButtonLabel")
    },
    X: function(n, t) {
        this.eJ("HashtagTreeCreated")
    },
    W: function() {
        return _y.k.b(this, null, null)
    },
    be: function(n) {
        this.f && this.e.a().cW(n)
    },
    U: function(n) {
        if (this.f) {
            this.e.a().cY(n);
            this.e.a().cZ((n / window.document.body.clientWidth).toString())
        }
    },
    N: function(n) {
        var t = this.R();
        var i = n;
        if (this.f)
            if (this.e.a().bH.NavigationBarWidth > this.g) {
                t = this.Q();
                i = !1
            } else this.e.a().bH.NavigationBarWidth >= this.h() && this.e.a().bH.NavigationBarWidth <= this.g && (t = this.o !== -1 ? this.o < 150 ? _y.w.b : this.o : this.e.a().bH.NavigationBarWidth);
        this.d = this.c ? t > this.h() ? t : _y.w.b : this.h();
        this.x();
        i && this.U(this.d)
    },
    x: function() {
        this.eN("Width", "WidthOfScrollRegion");
        this.a.ci(this.d)
    },
    bf: function(n) {
        this.c ? this.m(n > 150) : this.m(n > this.h() + 5)
    },
    Z: function() {
        this.bc(window.document.body.clientWidth * .95);
        if (this.d > this.g) {
            this.d = this.Q();
            this.x()
        } else this.N(!1)
    },
    Q: function() {
        return parseFloat(this.e.a().bH.NavigationBarWidthRatio) * window.document.body.clientWidth
    },
    T: function() {
        return this.c && !!this.j && this.j.a().fW().Enabled && _y.d.l(this.e, this.w)
    },
    V: function() {
        if (this.e.j() && this.T())
            if (this.j.a().bm().Enabled) {
                var n = this;
                this.H.a(function(t) {
                    t.a(function(t, i) {
                        n.K(t);
                        n.S(String.format(i, encodeURIComponent(n.w.bH.EncryptedUserPuid)))
                    })
                })
            } else if (this.j.a().bT().Enabled) {
            this.K(_u.R.WO);
            this.S(String.format(this.j.a().bT().UpsellUrlFormat, encodeURIComponent(this.w.bH.EncryptedUserPuid)))
        } else this.K(_u.R.WO)
    }
};
_y.lG = function(n, t) {
    this.k = -1;
    this.j = new _j.l;
    _y.lG.initializeBase(this);
    this.r = n;
    this.s = t
};
_y.lG.prototype = {
    r: null,
    l: null,
    n: null,
    s: null,
    a: function() {
        return this.k
    },
    g: function(n) {
        if (this.k !== n) {
            this.k = n;
            this.by("ItemHighlightedIndex")
        }
        return n
    },
    b: function() {
        return this.j
    },
    p: function(n) {
        this.n = n;
        return n
    },
    c: function() {
        return this.l
    },
    q: function(n) {
        if (this.l !== n) {
            this.l = n;
            this.by("SelectedItem");
            this.u()
        }
        return n
    },
    e: function() {
        this.g(-1);
        this.j.g()
    },
    o: function(n) {
        var t = n ? 1 : 0;
        this.k < this.j.x.length - t && this.g(this.k + 1);
        return this.k < this.j.x.length
    },
    i: function(n) {
        var t = n ? 1 : 0;
        this.k >= t && this.g(this.k - 1);
        return this.k >= 0
    },
    u: function() {
        for (var n = 0; n < this.j.x.length && this.l; n++)
            if (this.l === this.j.x[n]) {
                this.g(n);
                break
            }
    }
};
_y.ce = function(n, t) {
    _y.ce.initializeBase(this, [n, t])
};
_y.ce.prototype = {
    d: null,
    f: null,
    w: function() {
        if (!_y.ce.a) return _y.ce.a;
        switch (_y.c.a.a()) {
            case "TouchNarrow":
                _y.ce.a = 1;
                break;
            case "TouchWide":
                _y.ce.a = 2;
                break;
            case "Mouse":
                _y.ce.a = 3;
                break
        }
        return _y.ce.a
    },
    e: function() {
        this.d = null;
        _y.lG.prototype.e.call(this)
    },
    v: function() {
        this.d = null;
        this.f = null
    },
    m: function() {
        this.e();
        this.s.i(this.j, this.n, this.w())
    },
    h: function(n, t, i, r) {
        if (!_j.h.b(t)) {
            this.g(-1);
            this.d = r;
            this.f = r;
            if (i)
                for (var u = 0; u < i.length && u < 4; u++) this.j.a(n.c(t, i[u]))
        }
    },
    t: function(n, t) {
        this.d = null;
        if (n) {
            this.j.g();
            for (var r = t, f = r.length, i = 0; i < f; ++i) {
                var u = r[i];
                this.j.a(n.c("", u))
            }
        }
    }
};
_y.iN = function() {};
_y.iN.prototype = {
    b: function(n) {
        var t = n;
        return new _y.N(t.c, t.c, !1)
    },
    a: function() {
        return !1
    }
};
_y.by = function() {};
_y.by.prototype = {
    b: function(n) {
        return new _y.N(n, n, !1)
    },
    a: function() {
        return !1
    }
};
_y.cq = function() {};
_y.cq.prototype = {
    b: function(n) {
        var t = n;
        return new _y.N(t.e, _y.fF.toString(t.d.a), _g.a.a().E)
    },
    a: function() {
        return !0
    }
};
_y.u = function() {};
_y.u.a = function(n, t, i) {
    if (!n.startsWith("mailto:") || n.length === 7) return !1;
    n = n.substr(7);
    var u = n.split("?");
    if (!u.length || u.length > 2) return !1;
    var o = !1;
    if (!_j.h.b(u[0])) {
        var e = null;
        var s, h;
        if (h = _a.w.h(u[0], s = {
                val: e
            }, !1), e = s.val, h) {
            t.u(new _j.l);
            _y.u.b(t.g(), e);
            o = !0
        }
    }
    if (u.length === 2) {
        var r = _y.u.o(u[1]);
        if (!o && !_j.h.b(r[_y.u.i])) {
            t.u(new _j.l);
            _y.u.b(t.g(), r[_y.u.i])
        }
        if (!_j.h.b(r[_y.u.e])) {
            t.bb(new _j.l);
            _y.u.b(t.j(), r[_y.u.e])
        }
        if (!_j.h.b(r[_y.u.c])) {
            t.cb(new _j.l);
            _y.u.b(t.c(), r[_y.u.c])
        }
        _j.h.b(r[_y.u.h]) || _y.u.m(r[_y.u.h], t);
        _j.h.b(r[_y.u.d]) || _y.u.g(r[_y.u.d], t, i);
        if (!_j.h.b(r[_y.u.j]))
            for (var l = r[_y.u.j], f = 0; f < t.g().b(); f++) {
                var c = t.g().c(f);
                c.MailboxType = l
            }
    }
    return _y.u.p(t)
};
_y.u.p = function(n) {
    return n.g() && n.g().b() > 0 || n.j() && n.j().b() > 0 || n.c() && n.c().b() > 0 || !_j.h.b(n.w()) || !_j.h.b(n.y()) ? !0 : !1
};
_y.u.f = function(n) {
    n = _ff.g.a(n);
    return n.replace(_y.u.k, '<a href="mailto:$1" target="_blank">$1</a>')
};
_y.u.g = function(n, t, i) {
    var u = _ff.g.a(n);
    u = u.replace(_y.u.l, _a.B.j);
    var r = null;
    if (i && t.h() !== "Text") {
        var f, e;
        e = _a.B.J(u, f = {
            val: r
        }), r = f.val, e
    } else {
        var o, s;
        s = _a.B.a(u, o = {
            val: r
        }), r = o.val, s
    }
    t.r(r)
};
_y.u.m = function(n, t) {
    var i = n.replace(_a.B.n, "");
    t.t(i)
};
_y.u.o = function(n) {
    var u = {};
    if (_j.h.b(n)) return u;
    for (var h = n.split("&"), f = 0; f < h.length; f++) {
        var t = h[f].split("=");
        if (t.length < 2) continue;
        else if (t.length > 2) {
            var a = t.slice(1, t.length);
            var l = a.join("=");
            t[1] = l
        }
        var i = null;
        var r = null;
        var s, o, e, c;
        if (t && (o = _a.w.h(t[0], s = {
                val: i
            }, !0), i = s.val, o) && (c = _a.w.h(t[1], e = {
                val: r
            }, !0), r = e.val, c)) {
            i = i.toLowerCase();
            u[i] = r
        }
    }
    return u
};
_y.u.b = function(n, t) {
    if (!_j.h.b(t))
        for (var f = t.split(","), u = 0; u < f.length; u++)
            if (!_j.h.b(f[u])) {
                var h = f[u].trim();
                var e = h.replace(_a.B.n, "");
                e = _ff.g.a(e);
                var r = null;
                var s, o;
                o = _a.B.h(e, s = {
                    val: r
                }), r = s.val, o;
                if (!_j.h.b(r)) {
                    var i = new _g.g;
                    i.EmailAddress = r;
                    i.MailboxType = "OneOff";
                    i.RoutingType = "SMTP";
                    i.Name = r;
                    n.a(i)
                }
            }
};
_y.jC = function(n, t) {
    this.c = Function.createDelegate(this, this.g);
    this.d = Function.createDelegate(this, this.h);
    this.b = t;
    n && n.b(_y.gU, this.d)
};
_y.jC.prototype = {
    b: null,
    a: null,
    f: function(n) {
        var t = new _h.eo(n);
        t.c(this.c);
        this.b.a(t)
    },
    e: function(n) {
        return !this.a || !n ? null : this.a[n]
    },
    h: function(n) {
        this.f(n.a)
    },
    g: function(n) {
        this.a || (this.a = {});
        var i = n;
        var t = i.f;
        var r = i.e;
        t && (this.a[r] = t)
    }
};
_y.lI = function() {
    _y.lI.initializeBase(this)
};
_y.gR = function(n, t, i) {
    this.d = new _j.l;
    _y.gR.initializeBase(this);
    this.b = t;
    this.g = n;
    this.f = i;
    var u = !!i && i.a().cZ().Enabled;
    var r = u && i.a().cY().Enabled;
    this.e = r ? 3 : 2;
    this.a = this.b ? this.b.bH.IsGroupsTreeCollapsed : !1;
    this.i()
};
_y.gR.prototype = {
    a: !1,
    c: !1,
    b: null,
    g: null,
    e: 0,
    f: null,
    l: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.eJ("IsCollapsed");
            if (this.b) {
                this.b.Q(this.a);
                _h.f.a(this.b.u, _a.g.a)
            }
        }
        return n
    },
    i: function() {
        this.c = !1;
        var r = _g.a.a().I();
        if (r && r.a() && !(r.a().b() <= 0)) {
            var n = new _j.l;
            var u = this.h(1);
            u.x.length > 0 && n.j(u.f());
            if (n.x.length >= 10 && this.e !== 3) {
                this.d.j(n.f());
                return
            }
            var f = this.e === 3 ? Math.max(10 - n.x.length, 2) : 10 - n.x.length;
            var i = this.h(2);
            if (i.x.length > 0) {
                for (var e = Math.min(f, i.x.length), t = 0; t < e; t++) n.a(i.x[t]);
                this.d.j(n.f())
            }
            this.c = this.d.x.length > 0
        }
    },
    h: function(n) {
        for (var u = new _j.l, r = _g.a.a().I(), e = r ? r.a().b() : 0, i = 0; i < e; i++) {
            var t = r.a().a(i);
            if (t && t.FilterType === n && t.Groups) {
                var f = this.j(t.Groups);
                if (f.x.length > 0) {
                    u.j(f.f());
                    break
                }
            }
        }
        return u
    },
    j: function(n) {
        for (var i = new _j.l, t = 0; t < n.length; t++) i.a(new _y.gQ(this.g, this.f, n[t].SmtpAddress, n[t].DisplayName));
        return i
    }
};
_y.gQ = function(n, t, i, r) {
    _y.gQ.initializeBase(this);
    this.a = t;
    this.d = i;
    this.b = r;
    var u = this;
    this.c = new _j.g(function() {
        n(u.d)
    }, _a.a.h)
};
_y.gQ.prototype = {
    c: null,
    b: null,
    d: null,
    a: null,
    e: function() {
        return this.a ? this.a.a().gp().Enabled : !1
    }
};
_y.gP = function(n) {
    _y.gP.initializeBase(this);
    this.t(this);
    var t = new _j.l;
    t.a(new _ff.d(this.q, _wss.i.O, null, !0, !1));
    this.v(t);
    this.s(n || "")
};
_y.gP.prototype = {
    i: null,
    h: function(n) {
        if (n !== this.i) {
            this.i = n;
            this.eJ("Content")
        }
        return n
    }
};
_y.s = function(n, t, i, r, u, f, e, o) {
    this.bl = Function.createDelegate(this, this.bL);
    this.bm = Function.createDelegate(this, this.bM);
    this.N = Function.createDelegate(this, this.bK);
    this.bi = Function.createDelegate(this, this.bH);
    this.M = Function.createDelegate(this, this.bJ);
    this.bj = Function.createDelegate(this, this.bI);
    this.O = Function.createDelegate(this, this.bN);
    this.bk = Function.createDelegate(this, this.U);
    _y.s.initializeBase(this, [t, null, "GroupsNavigationTreeTemplates.GroupItemViewWithUnseenCount", i]);
    this.s = f;
    this.E = e;
    this.a = n;
    this.f = r;
    this.j = this.a.a.n;
    this.e = u;
    this.Q = o;
    if (this.V()) {
        this.h.e(this.a);
        this.t.a(this.a)
    }
    this.b = this.j;
    this.S = new _j.g(this.bk, _y.s.a);
    this.n(this.a.c);
    var h = this;
    this.a.apcl("IsExpanded", function() {
        h.n(h.a.c)
    });
    this.C && this.a.apcl("Width", this.O);
    var s = this;
    this.a.r(new _j.g(function() {
        s.bt(0);
        s.br("NavigateFromSecondLevelFolderNavigationPane")
    }, _y.s.a));
    this.j.D = this.S;
    this.j.bg(_u.R.Jd);
    this.a.a.b.bg(_u.R.Dr);
    this.y = !!this.e && this.e.a().c().Enabled;
    if (this.y) {
        var c = this;
        this.x = new _y.gR(function(n) {
            c.H = n
        }, this.s.a(), this.e);
        this.apcl(_y.J.a, this.bj);
        this.x.c && _a.b.c(_a.a.h, "FL.GB")
    }
    this.z = this.y;
    this.c || this.a.apcl("HashtagTreeCreated", this.M);
    this.h.apcl("Top", this.bi);
    o && o.b(_y.dy, this.N);
    this.V() ? this.r("SecondLevelFolderPaneOpened") : this.r("FirstLevelNavigationPaneOpened");
    this.bq()
};
_y.s.prototype = {
    a: null,
    j: null,
    f: null,
    S: null,
    b: null,
    d: null,
    s: null,
    E: null,
    G: !1,
    e: null,
    Q: null,
    y: !1,
    z: !1,
    p: null,
    H: null,
    x: null,
    bC: function() {
        return !!this.e && this.e.a().gz().Enabled && this.C
    },
    P: 0,
    bI: function(n, t) {
        this.z && this.a.a.cc(this.g);
        if (this.H && this.g) {
            this.g.d(this.H);
            this.o(n, t)
        }
    },
    bD: function() {
        return this.y && this.x.c
    },
    I: function() {
        return this.a.d
    },
    c: null,
    R: function() {
        !this.p && this.c && (this.p = this.c.b());
        return this.p
    },
    u: function() {
        _y.J.prototype.u.call(this)
    },
    v: function() {
        _y.J.prototype.v.call(this);
        this.bn();
        this.z && this.a.a.r();
        (this.z || this.h.a() !== this.a) && this.h.a() !== this.p || this.h.d()
    },
    bF: function() {
        if (this.h.b().w(this.a)) return this.a.a.g ? this.a.a.b.q ? this.a.a.b.q : this.a.a.a() : this.a.a ? this.a.a.a() : null;
        else if (this.h.b().w(this.p)) {
            var n = null;
            if (this.c) {
                n = this.c.q;
                n || (n = this.a.a.a())
            }
            return n
        } else if (this.b.q.K()) {
            var t = this.b.o.a();
            return t.K() ? null : t
        } else return this.b ? this.b.q : null
    },
    T: function(n, t, i) {
        if (n) {
            n.a() !== "recoverableitemsdeletions" && (this.d = n);
            this.r(_y.s.isInstanceOfType(this.h.a()) ? "FolderSelectFirstLevelNavigation" : "FolderSelectSecondLevelNavigation");
            t || this.f.a(_a.W.a(0), null);
            if (this.e && this.e.a().dD().Enabled && i) {
                var r = n.bH.FolderId;
                var u = _g.b.a.idToName(r) === _g.bb.a ? encodeURIComponent(r.Id) : encodeURIComponent(_g.b.a.idToName(r));
                this.f.b(_a.W.g(u))
            }
            this.g && this.g.b(null);
            this.W(n)
        }
    },
    V: function() {
        return this.s.a().X()
    },
    q: function() {
        _y.J.prototype.q.call(this);
        this.a.m(this.m);
        this.bq()
    },
    o: function(n, t) {
        _y.J.prototype.o.call(this, n, t);
        if (this.g.a()) {
            this.bG() ? this.f.a(_a.W.k(this.f.c(), this.g.a().bH.SmtpAddress), null) : this.f.a(_a.W.b(this.g.a().bH.SmtpAddress, 0), null);
            this.W(null)
        }
    },
    bf: function() {
        var t = this.bE(this.m);
        var n = _a.b.b(_y.s.a, this.m ? "CollapseNavigationPane" : "ExpandNavigationPane", !1, null);
        _y.J.prototype.bf.call(this);
        n.m = t;
        _a.b.a(n)
    },
    bd: function() {
        if (this.i) {
            var t = this.bp(!0);
            var n = _a.b.b(_y.s.a, "ExpandNavigationPaneWithSearch", !1, null);
            _y.J.prototype.bd.call(this);
            n.m = t;
            _a.b.a(n)
        }
    },
    be: function() {
        if (this.l) {
            var t = this.bp(!1);
            var n = _a.b.b(_y.s.a, "ExpandNavigationPaneWithSearch", !1, null);
            _y.J.prototype.be.call(this);
            n.m = t;
            _a.b.a(n)
        }
    },
    bO: function(n) {
        if (_h.a.w(n) === -1) {
            this.h.b().w(this.a) || this.U();
            this.a.a.e = this.a.a.c;
            this.a.b.r(n)
        } else if (this.h.b().w(this.a)) {
            this.a.a.b.V(!1);
            this.a.a.b.r(n)
        } else {
            _y.bH.isInstanceOfType(this.b) || (this.b = this.a.a.n);
            this.b.V(!1);
            this.b.r(n);
            this.bs()
        }
    },
    eL: function() {
        this.Q.c(_y.dy, this.N);
        this.a.rpcl("Width", this.O);
        _a.gd.prototype.eL.call(this)
    },
    U: function() {
        _a.p.b(_y.s.a, "NavigateToSecondLevelFolderNavigationPane");
        if (!this.d || this.g && this.g.a()) this.a.a.r();
        else {
            if (!_g.l.b(this.d.bH.FolderId, this.a.a.I()))
                if (this.d.m) {
                    this.a.a.b.r(this.d.bH.FolderId);
                    this.a.b.G()
                } else if (this.a.a.d.w(this.c) && _g.j.d(this.d.bH.FolderId)) this.c.r(this.d.bH.FolderId);
            else {
                this.a.a.b.G();
                this.a.b.r(this.d.bH.FolderId)
            }
            this.d.m && this.a.a.g && (this.a.a.b && this.a.a.b.q ? this.a.a.b.q.bD(!0, "deleteditems") : this.a.a.a().bD(!0, "deleteditems"))
        }
        this.bs();
        this.h.e(this.a);
        if (!this.t.w(this.a)) {
            this.t.a(this.a);
            this.a.b.n.cc()
        }
        this.bt(1)
    },
    bt: function(n) {
        this.s.a().da(n);
        this.E && _h.f.a(this.s.a().u, this.E)
    },
    br: function(n) {
        this.D.a();
        this.W(this.d);
        _h.g.a(_y.s.a, n, -1, 0, null)
    },
    bG: function() {
        return this.f.c().startsWith("/group/") && this.f.c().split("/").length === 4
    },
    bL: function() {
        this.h.e(this.R());
        this.c.a(!0);
        this.d && _g.j.d(this.d.bH.FolderId) && this.c.r(this.d.bH.FolderId);
        _h.g.a(_a.a.bs, "HashtagMore", 7, 1, null)
    },
    W: function(n) {
        if (n)
            if (_g.j.d(n.bH.FolderId))
                if (this.c && _g.j.d(n.bH.FolderId) && !_j.h.a(n.bH.FolderId.a)) {
                    _y.s.isInstanceOfType(this.h.a()) && this.c.n(n);
                    this.b = this.c
                } else this.b && this.b.G();
        else {
            this.j.I(n);
            this.b = this.j
        } else this.bn()
    },
    bn: function() {
        this.b && this.b.G();
        this.d = null
    },
    bJ: function(n, t) {
        this.a.rpcl("HashtagTreeCreated", this.M);
        this.c = this.a.a.m;
        this.R() && this.R().r(new _j.g(this.bm, _y.s.a));
        this.c.d(new _j.g(this.bl, _y.s.a))
    },
    bM: function() {
        this.c.a(!1);
        this.br("NavigateFromSecondLevelTagNavigationPane")
    },
    bH: function(n, t) {
        var i = this.h.a();
        i && (_y.s.isInstanceOfType(i) ? this.r("FirstLevelNavigationPaneOpened") : _y.w.isInstanceOfType(i) ? this.r("SecondLevelFolderPaneOpened") : _y.dM.isInstanceOfType(i) && this.r("SecondLevelGroupsPaneOpened"))
    },
    r: function(n) {
        _a.b.c(_y.s.a, n)
    },
    bq: function() {
        _a.b.c(_y.s.a, this.m ? "NavigationPaneExpanded" : "NavigationPaneCollapsed")
    },
    bE: function(n) {
        var t = new _a.l;
        this.bo(n ? "cf" : "et", t);
        return t.toString()
    },
    bs: function() {
        this.h.a() === this.p && this.h.d()
    },
    bp: function(n) {
        var i = this.h.a();
        var t = new _a.l;
        if (i) {
            n ? t.a("m", "me") : t.a("m", "we");
            this.bo("esv", t)
        }
        return t.toString()
    },
    bo: function(n, t) {
        var i = this.h.a();
        i && (_y.s.isInstanceOfType(i) ? t.a(n, "0") : _y.w.isInstanceOfType(i) ? t.a(n, "1") : _y.dM.isInstanceOfType(i) ? t.a(n, "2") : _y.D.isInstanceOfType(i) && t.a(n, "3"))
    },
    bK: function(n) {
        if (this.a.c)
            if (n.a) {
                if (this.G) {
                    this.D.a();
                    this.G = !1
                }
            } else {
                this.G = !0;
                this.U()
            }
    },
    bN: function(n, t) {
        this.eJ(_y.J.c)
    }
};
_y.dn = function(n, t, i, r, u) {
    _y.dn.initializeBase(this, [n, t, i, r, null, !1, null, u])
};
_y.dn.prototype = {
    K: function() {
        return !0
    },
    bA: function() {
        return !1
    },
    bB: function() {
        return !1
    },
    bo: function() {
        return this.i.D
    },
    bn: function() {
        return !1
    },
    N: function() {},
    E: function() {
        return null
    },
    B: function() {
        return []
    },
    cv: function() {}
};
_y.dp = function(n, t, i, r, u) {
    this.n = Function.createDelegate(this, this.p);
    this.o = Function.createDelegate(this, this.q);
    this.h = n;
    this.m = i;
    this.d = !0;
    this.k = _g.N.isInstanceOfType(r);
    var f;
    if (_g.f.isInstanceOfType(i[0])) f = i;
    else if (_g.o.isInstanceOfType(i[0])) f = _g.o.a(i);
    else throw Error.argumentType();
    this.l = _h.a.r(r) || _h.a.r(f[0].cP);
    _h.a.k && _h.a.n && (this.j = _h.l.a(r) || _h.l.a(f[0].cP));
    this.l || this.k || this.j ? this.g = new _h.bE(f, r, t) : this.e = new _h.bb(f, r, u)
};
_y.dp.prototype = {
    m: null,
    h: null,
    l: !1,
    j: !1,
    k: !1,
    a: null,
    b: null,
    g: null,
    e: null,
    d: !1,
    c: null,
    i: function() {
        return this.l || this.k || this.j ? this.g : this.e
    },
    f: function() {
        if (this.l || this.k || this.j) {
            this.g.c(this.o);
            this.g.b(this.n);
            this.b || (this.b = _h.c.f(this.m, this.a));
            _h.c.d(this.m);
            this.h.a(this.g)
        } else {
            this.e.e = this.a;
            this.e.o = this.b;
            this.e.f = this.c;
            this.h.a(this.e)
        }
    },
    q: function(n) {
        var t = _h.N.a(this.m, "HardDelete", 2);
        t.e = this.a;
        t.o = this.b;
        t.r = this.d;
        this.h.a(t)
    },
    p: function(n) {
        if (this.a) {
            _h.D.a().a(_a.a.dv, this.a.Id, this.b, !0);
            _h.c.i(_h.eN, this.a)
        }
    }
};
_y.gU = function(n) {
    this.a = n
};
_y.gU.prototype = {
    a: null
};
_y.q = function(n, t, i) {
    this.D = Function.createDelegate(this, this.M);
    this.C = Function.createDelegate(this, this.L);
    this.B = Function.createDelegate(this, this.K);
    this.A = Function.createDelegate(this, this.I);
    _y.q.initializeBase(this);
    this.j = n;
    this.m = t;
    this.b = !1;
    this.a = 1;
    this.m.b(_y.gZ, this.A)
};
_y.q.prototype = {
    j: null,
    m: null,
    r: null,
    s: null,
    t: null,
    n: null,
    o: null,
    z: null,
    k: null,
    b: !1,
    a: 0,
    l: 0,
    h: 1,
    c: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.by("IsReadingPaneFullScreen")
        }
        return n
    },
    f: !1,
    v: !1,
    p: function(n) {
        if (this.a !== n) {
            if (this.j.a() === "Mouse") {
                this.a = n;
                this.c(!1);
                this.N()
            } else this.a = 1;
            this.H()
        }
        return n
    },
    d: function() {
        if (!this.r) {
            this.r = new _j.g(this.B, _y.q.a);
            this.u()
        }
        return this.r
    },
    e: function() {
        if (!this.s) {
            this.s = new _j.g(this.C, _y.q.a);
            this.u()
        }
        return this.s
    },
    g: function() {
        if (!this.t) {
            this.t = new _j.g(this.D, _y.q.a);
            this.u()
        }
        return this.t
    },
    E: function() {
        if (!this.k) {
            this.k = new _j.q;
            this.z = this.w(_y.o.a(this.g(), "RPC"), _y.e.j(), _y.e.j(), _u.R.FG);
            this.n = this.w(_y.o.a(this.d(), "RPN"), _y.e.F(), _y.e.G(), _u.R.S);
            this.n.a.c(this.d().b);
            this.o = this.w(_y.o.a(this.e(), "RPP"), _y.e.H(), _y.e.I(), _u.R.KI);
            this.o.a.c(this.e().b);
            this.k.c(this.z);
            this.k.c(this.n);
            this.k.c(this.o)
        }
        return this.k
    },
    i: function(n) {
        if (this.l !== n) {
            this.l = n;
            this.l || this.m.a(_a.U, new _a.U(19))
        }
        return n
    },
    y: function(n) {
        if (this.h !== n) {
            this.h = n;
            this.by("ReadingPaneListViewTransitionState")
        }
        return n
    },
    q: function() {
        return !this.v && this.j.a() === "Mouse" && !this.a
    },
    x: function() {
        return this.j.a() === "TouchWide" || this.q()
    },
    H: function() {
        this.u();
        this.by("ReadingPanePosition")
    },
    u: function() {
        this.e().c(this.d().c(this.x() || this.j.a() === "TouchNarrow"));
        this.g().c(this.x())
    },
    w: function(n, t, i, r) {
        return new _y.y(new _fm.f(n, "", t, 0, r, i, !0, !1, !1, !1, null), new _y.z(1, 0, null, !0, !1, !1, !0, !1, null, !1, !1))
    },
    K: function() {
        this.i(1);
        this.m.a(_y.cr, new _y.cr(!1, "Next"));
        this.i(0)
    },
    L: function() {
        this.i(2);
        this.m.a(_y.cr, new _y.cr(!1, "Previous"));
        this.i(0)
    },
    M: function() {
        if (this.x() && this.h === 1) {
            this.i(3);
            this.c(!this.b);
            this.i(0)
        }
    },
    I: function(n) {
        var i = !0;
        var t = !0;
        if (n.a === 1 || n.a === 2 || this.a && this.j.a() === "Mouse") {
            i = !1;
            t = !1
        } else n.a === 3 ? t = !1 : n.a === 4 && (i = !1);
        this.d().c(i);
        this.e().c(t);
        this.n && this.n.a.c(this.d().b);
        this.o && this.o.a.c(this.e().b);
        this.j.a() === "TouchWide" && this.G(n.a !== 1)
    },
    G: function(n) {
        this.g().c(n);
        n || this.c(!1)
    },
    N: function() {
        this.d().c(this.e().c(!this.a))
    }
};
_y.jB = function() {};
_y.jB.prototype = {
    a: function(n) {
        return new _y.n(n)
    }
};
_y.iH = function() {};
_y.iH.a = function(n, t) {
    _y.l.a(t, "ReadingPanePopOut", null, null, n);
    _y.l.f("ReadingPanePopOut")
};
_y.O = function() {
    _y.O.initializeBase(this)
};
_y.dS = function() {
    this.bC = Function.createDelegate(this, this.M);
    this.cJ = Function.createDelegate(this, this.cR);
    this.cK = Function.createDelegate(this, this.cS);
    this.X = Function.createDelegate(this, this.bY);
    this.L = Function.createDelegate(this, this.cQ);
    _y.dS.initializeBase(this)
};
_y.dS.prototype = {
    bS: !1,
    dj: function(n) {
        this.eO("IsConversationReadingPaneLoaded", n)
    },
    dk: function() {}
};
_y.D = function(n, t, i, r) {
    _y.D.initializeBase(this);
    this.K = n;
    this.t = t;
    this.D = i;
    this.C = r
};
_y.D.a = function(n, t) {
    var i = _g.b.a.idToName(n.bH.FolderId);
    return i === t ? !0 : _h.a.m(n, t)
};
_y.D.prototype = {
    C: null,
    D: null,
    o: null,
    m: null,
    H: null,
    s: 0,
    O: 1,
    x: 0,
    B: null,
    P: !0,
    t: null,
    K: null,
    L: function(n) {
        if (this.s === n) return n;
        n === 1 && (n = 0);
        this.s = n;
        this.p() || this.bx();
        this.eJ("Scope");
        return n
    },
    bg: function(n) {
        if (this.O !== n) {
            this.O = n;
            this.eJ("FolderView")
        }
        return n
    },
    R: function(n) {
        if (this.m !== n) {
            this.m = n;
            this.bz(String.format(_u.R.GP, this.m.bH.DisplayName));
            this.v = _y.D.a(this.m, "archivemsgfolderroot");
            this.z = _y.D.a(this.m, "sentitems");
            this.G = !!_h.a.b("msgfolderroot").f(this.m.bH.FolderId);
            this.E = _g.j.b(this.m.bH.FolderId);
            this.eQ(["CurrentFolder", "IsFolderScopeSearchRefinerShown", "CurrentMailboxDisplayName", "SearchScenario", "EnableSearchInCurrentFolderAndSubfolders"]);
            this.p() || this.bB()
        }
        return n
    },
    bs: function() {
        return !this.m.c() && !(this.m.a() === "recoverableitemsdeletions")
    },
    bq: function() {
        return !(this.m.b || _g.j.b(this.m.bH.FolderId))
    },
    G: !1,
    v: !1,
    z: !1,
    E: !1,
    bz: function(n) {
        if (this.H !== n) {
            this.H = n;
            this.eJ("CurrentFolderDisplayName")
        }
        return n
    },
    bp: function() {
        return this.v ? _h.a.f(this.m.bH.FolderId).j.bH.DisplayName : _u.R.PE
    },
    S: function(n) {
        if (this.x !== n) {
            this.x = n;
            this.eJ("Date")
        }
        return n
    },
    j: function(n) {
        this.P = n;
        return n
    },
    I: function() {
        return this.p() ? 1 : 0
    },
    p: function() {
        return this.m ? this.G || _g.j.d(this.m.bH.FolderId) || this.bu() : !1
    },
    bA: function(n) {
        this.o = n;
        this.eJ("InstantSearchRefinerManager");
        return n
    },
    bv: function() {
        if (this.E) return _g.b.a.nameToId("msgfolderroot");
        else if (this.v) return this.s ? this.m.bH.FolderId : _g.b.a.nameToId("archivemsgfolderroot");
        return this.s ? this.m.bH.FolderId : _g.b.a.nameToId("msgfolderroot")
    },
    bu: function() {
        return !!this.C && this.C.a().gt().Enabled && this.v && !_a.bs.a()
    },
    bf: function() {
        this.B || (this.B = this.t.b().w());
        return this.B
    },
    bw: function() {
        var r = null;
        if (this.x) {
            var n = _a.d.a();
            switch (this.x) {
                case 1:
                    n = n.c(-7);
                    break;
                case 2:
                    n = n.s(-1);
                    break;
                case 3:
                    n = n.x(-1);
                    break
            }
            var t = new _g.eB;
            t.Item = new _g.d("DateTimeReceived");
            t.FieldURIOrConstant = new _g.Z;
            var i = new _g.Y;
            i.Value = n.i();
            t.FieldURIOrConstant.Item = i;
            r = new _g.bf(t)
        }
        return r
    },
    i: function(n, t, i) {
        var h = _u.R.KC.toLowerCase();
        var s = _u.R.Vp.toLowerCase();
        var o = _u.R.KC;
        var c = h;
        var f = "(";
        var e = ")";
        if (this.m && _g.b.a.doesIdEqualName(this.m.bH.FolderId, "sentitems")) {
            o = _u.R.Vp;
            c = s
        }
        var r = new _y.er;
        r.g(t);
        r.j(!0);
        n.a(r);
        t = t.toLowerCase().trim();
        if (t.indexOf(":") === -1) {
            r = new _y.er;
            r.h(o);
            r.g(f + t + e);
            n.a(r)
        }
        t.startsWith(h) ? t = t.substr(h.length).trim() : t.startsWith(s) && (t = t.substr(s.length).trim());
        var u = n.x.length;
        if (this.D.d() && !_j.h.a(t)) {
            var a = this.D.b().a(t, i + u, 0, _bc.e.b());
            var y = this;
            Array.forEach(a, function(t) {
                var s = f + t + e;
                if ((!u || n.x[0].d.toLowerCase() !== s.toLowerCase()) && n.x.length < i + u) {
                    r = new _y.er;
                    r.h(o);
                    r.g(s);
                    n.a(r)
                }
            })
        } else this.D.a(null);
        if (this.P) {
            u = n.x.length;
            var l = this.A(t, i + u);
            var v = this;
            Array.forEach(l, function(t) {
                if (n.x.length < i + u) {
                    var l = !1;
                    var s = t.toLowerCase().trim();
                    if (s.startsWith(c)) {
                        s = s.substr(o.length).trim();
                        (s.charAt(0) !== f || s.charAt(s.length - 1) !== e) && (s = f + s + e);
                        for (var h = 0; h < n.x.length; h++)
                            if (n.x[h].d.toLowerCase() === s) {
                                l = !0;
                                break
                            }
                    }
                    if (!l) {
                        r = new _y.er;
                        r.g(t);
                        n.a(r)
                    }
                }
            })
        }
    },
    A: function(n, t) {
        for (var f = [], e = _a.bK.c(n), o = n.toLowerCase(), s = new RegExp("\\W" + e + "|^" + e, "i"), i = this.bf(), r = 0; i && r < i.b(); r++) {
            var u = i.a(r);
            if (u.search(s) >= 0 && o.trim() !== u.toLowerCase().trim())
                if (f.length < t) Array.add(f, u);
                else continue
        }
        return f
    },
    be: function(n) {
        if (!_j.h.b(n)) {
            var t = this.bf();
            if (t) {
                for (var r = n.toLocaleLowerCase().trim(), i = 0; i < t.b(); i++)
                    if (t.a(i).toLowerCase().trim() === r) {
                        t.o(i);
                        break
                    }
                while (t.b() >= _y.D.b) t.o(t.b() - 1);
                t.r(0, n)
            }
        }
    },
    by: function() {
        this.B = this.t.b().w();
        this.p() || this.S(0)
    },
    Q: function() {
        this.t.b().K(null);
        this.t.b().K(this.B);
        _h.f.a(this.t.b().c(), _a.g.a);
        this.p() && this.o && this.o.a(this.v)
    },
    bB: function() {
        if (this.m) {
            var n = _y.d.h(this.m, this.t, this.K);
            this.L(n.j);
            this.bg(n.a())
        }
    },
    bx: function() {
        if (this.m) {
            var n = _y.d.h(this.m, this.t, this.K);
            n.q(this.s);
            this.t.b().k(n)
        }
    }
};
_y.bX = function(n, t) {
    this.a = n;
    this.b = t
};
_y.bX.prototype = {
    b: !1,
    a: null
};
_y.ex = function(n, t, i) {
    _y.ex.initializeBase(this, [_y.ex.a]);
    _a.c.a(n, "options");
    _a.c.a(t, "voteAction");
    _a.c.a(i, "owaShell");
    this.a = n;
    this.c = t;
    this.b = i;
    this.f()
};
_y.ex.prototype = {
    a: null,
    b: null,
    c: null,
    d: null,
    f: function() {
        if (this.a.length) {
            for (var t = [], n = 0; n < this.a.length; n++) {
                var i = this.e(n);
                i && Array.add(t, i)
            }
            t.length > 0 && (this.d = new _fm.e(t))
        }
    },
    e: function(n) {
        if (!this.a[n] || _j.h.a(this.a[n].DisplayName)) return null;
        var i = this;
        return new _fm.c(this.b.a() === "TouchNarrow" ? this.a[n].DisplayName : String.format(_u.R.DY, this.a[n].DisplayName), null, new _j.g(function() {
            i.c(n)
        }, _a.a.ga))
    }
};
_y.jD = function() {
    this.a = newMailId
};
_y.jD.prototype = {
    a: null
};
_y.P = function(n, t, i) {
    this.c = n;
    this.b = t;
    this.a = i
};
_y.P.prototype = {
    c: 0,
    b: null,
    a: !1
};
_y.iO = function() {
    this.e = Function.createDelegate(this, this.g);
    _y.iO.initializeBase(this);
    this.c = new _j.g(this.e, _a.a.fl)
};
_y.iO.prototype = {
    b: !0,
    a: null,
    d: null,
    c: null,
    f: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.eJ("ShowDiscovery")
        }
        return n
    },
    bU: function() {
        return this.d
    },
    bt: function(n) {
        this.d = n;
        return n
    },
    y: function() {
        return this.a
    },
    o: function(n) {
        this.a = n;
        return n
    },
    bz: function() {
        return !0
    },
    x: function() {
        return null
    },
    bx: function() {
        return 0
    },
    h: function() {
        return String.format(_u.R.OT, _u.R.HQ)
    },
    g: function() {
        this.a()
    }
};
_y.G = function(n, t, i, r, u, f, e) {
    this.i = Function.createDelegate(this, this.r);
    this.n = Function.createDelegate(this, this.k);
    this.h = Function.createDelegate(this, this.v);
    this.o = Function.createDelegate(this, this.u);
    this.f = n;
    this.d = t;
    this.c = i;
    this.l = r;
    this.g = u;
    this.m = f;
    this.e = e;
    if (this.c) {
        this.c.b(_y.dg, this.o);
        this.c.b(_a.bq, this.h)
    }
};
_y.G.prototype = {
    d: null,
    c: null,
    l: null,
    g: null,
    m: null,
    f: null,
    b: null,
    e: null,
    q: function() {
        return !!this.b && this.b.f()
    },
    s: function() {
        return this.b ? this.b.c() : 119
    },
    t: function() {
        return !!this.b && this.b.e()
    },
    v: function(n) {
        this.c.c(_a.bq, this.h);
        var t = this;
        this.d.a(function(n) {
            t.b = n
        })
    },
    k: function() {
        if (this.p()) {
            var n = this;
            this.e.a(function(t) {
                var i = t.c(n.l.h.a);
                n.g.a(i, null)
            })
        }
    },
    r: function() {
        this.m.d(600);
        this.d.a(null)
    },
    j: function(n) {
        var t = {};
        t.ItemId = n.Id;
        this.a(1066, 1, t)
    },
    a: function(n, t, i) {
        if (t || this.p()) {
            var r = this;
            this.e.a(function(u) {
                var f = u.b(n, t, i);
                r.g.a(f, null)
            })
        }
    },
    p: function() {
        if (!this.q() && !this.t() && this.f.a() !== "TouchNarrow" && this.f.q().b().x.length > 0) {
            _a.D.a(_u.R.Ba, 1);
            return !1
        }
        return !0
    },
    u: function(n) {
        switch (n.a) {
            case 1:
                this.a(1055, 1);
                break;
            case 2:
                this.k();
                break;
            default:
                _j.e.c(_a.a.cv, _j.h.c("{0} - Unknown help article Id sent for navigation.", n.a));
                break
        }
    }
};
_y.gW = function(n, t) {
    this.c = Function.createDelegate(this, this.e);
    if (n) {
        if (!t) throw Error.argumentNull("modelObjects");
        this.a = n;
        this.b = t;
        for (var r = this.b, f = r.length, i = 0; i < f; ++i) {
            var u = r[i];
            u.add_onCacheOperation(this.c)
        }
    }
};
_y.gW.a = function(n, t) {
    return new _y.gW(n, t)
};
_y.gW.prototype = {
    a: null,
    b: null,
    d: function() {
        for (var t = this.b, r = t.length, n = 0; n < r; ++n) {
            var i = t[n];
            i.remove_onCacheOperation(this.c)
        }
    },
    e: function(n, t) {
        if (this.a) {
            var u = n.p();
            switch (t.d) {
                case 1:
                    var r = t.a;
                    var i = t.b;
                    var o = t.c;
                    var e = this;
                    _a.Y.a(this.a, function(n) {
                        var t;
                        if (r in _y.bE.a) {
                            var f = _y.bE.a[r];
                            if (!f.e()) throw Error.invalidOperation("Only complex property types with converters should be added to propertyMap");
                            var e = {};
                            f.e().b(e, f, i);
                            t = e
                        } else t = _a.cG.isInstanceOfType(i) ? i.i() : i;
                        n.performUpdate(u, r, JsonParser.serialize(t))
                    });
                    break;
                case 2:
                    var f = this;
                    _a.Y.a(this.a, function(n) {
                        n.performDelete(u)
                    });
                    break;
                case 4:
                    break;
                default:
                    _j.e.c(_a.a.z, "OnCacheOperation: Unexpected cache operation event type " + t.d + " encountered");
                    break
            }
        }
    }
};
_y.l = function() {};
_y.l.b = function(n, t, i, r) {
    if (_y.l.c()) {
        var u = null;
        var e = function(n) {
            u = _a.bN.parse(n)
        };
        var f = n.toString();
        _g.k.b.ke([0, e, f, t, i, r]);
        return u
    } else return _y.l.e(n, t, i, r)
};
_y.l.a = function(n, t, i, r, u) {
    if (_y.l.c()) {
        var f = _a.bN.condense(n);
        _g.k.b.ke([1, null, f, t, i, r, u])
    } else _y.l.d(n, t, i, r, u)
};
_y.l.g = function(n) {
    var f = n[0];
    var i = n[1];
    var t = null;
    switch (f) {
        case 0:
            var e = _a.a.dS(n[2]);
            t = _y.l.e(e, n[3], n[4], n[5]);
            break;
        case 1:
            var r = _a.bN.parse(n[2]);
            _y.l.d(r, n[3], n[4], n[5], n[6]);
            break;
        default:
            break
    }
    if (i) {
        var u = _a.bN.condense(t);
        i(u)
    }
};
_y.l.f = function(n) {
    _y.l.c() ? _g.k.b.kh(n) : _a.O.b(n)
};
_y.l.c = function() {
    return !!_y.c.a && !_y.c.a.b() && !!_g.k.b
};
_y.l.e = function(n, t, i, r) {
    var f;
    var u;
    var e = (u = new _a.K, u.b = !0, u.c = r, u);
    f = i ? _a.b.b(n, t, !1, e) : _a.p.b(n, t, !1, e);
    return f
};
_y.l.d = function(n, t, i, r, u) {
    var f = !0;
    if (n) n = _a.b.F(n.b());
    else {
        f = !1;
        n = _a.p.c(t)
    }
    if (n) {
        n.n = i;
        n.o = r;
        n.m = u
    }
    f ? _a.b.a(n) : _a.p.a(t)
};
_y.bE = function(n, t) {
    _a.c.b(t, "chatProviderFactory");
    this.c = n;
    this.b = t
};
_y.bE.e = function(n, t) {
    var u = null;
    var i = null;
    var r = n.a.popOutContext;
    if (r) {
        t.ResponseClass === "Success" ? i = r.successEventName : t.ResponseClass === "Error" && (i = r.failureEventName);
        if (i) {
            u = _h.L.a.d(i);
            u && u(n, t)
        }
    }
};
_y.bE.d = function(n) {
    var r = n.request.actionContext.popOutContext;
    var i = "CreateItemResponseCompleted";
    var t = _h.L.a.d(i);
    t && t(n)
};
_y.bE.c = function() {
    var n = {};
    n[_h.i.a.a] = _h.i.a;
    return n
};
_y.bE.prototype = {
    c: null,
    b: null,
    a: null,
    performUpdate: function(n, t, i) {
        var r = this;
        _j.m.a().c(_a.a.z, "PopOutUpdate-" + t, function() {
            var e = r.c.a(n);
            if (e) {
                var f = JsonParser.deserialize(i);
                if (!(t in _y.bE.a)) {
                    e.ec(t, f);
                    return
                }
                var u = _y.bE.a[t];
                if (!u.e()) throw Error.invalidOperation("Only complex property types with converters should be added to propertyMap");
                f = u.e().a(f, u);
                if (u.c === _j.l) {
                    var o = e.eM(u);
                    o.g();
                    var s = f;
                    o.z(s)
                } else f !== e.eM(u) && e.eK(u, f)
            }
        })
    },
    performDelete: function(n) {},
    startChat: function(n, t, i, r) {},
    sendChatMessage: function(n, t) {},
    endChat: function(n) {},
    chatWindowReady: function(n) {},
    reportUserActivity: function(n) {},
    getOwaUserConfig: function(n, t, i, r) {},
    raiseResponseProcessorEvent: function(n, t) {
        var r = JsonParser.deserialize(n);
        var i = JsonParser.deserialize(t);
        var u = this;
        _j.m.a().c(_a.a.z, "PopOutRaiseResponseProcessorEvent", function() {
            _y.bE.e(r, i)
        })
    },
    raiseResponseCompletedEvent: function(n) {
        var t = JsonParser.deserialize(n);
        var i = this;
        _j.m.a().c(_y.bE.b, "PopOutRaiseResponseCompletedEvent", function() {
            _y.bE.d(t)
        })
    },
    updatePresence: function(n, t) {
        var i = this;
        _j.m.a().c(_a.a.z, "PopOutUpdatePresence", function() {
            i.b.a(function(r) {
                i.a = r.a();
                i.a.b(function() {
                    if (i.a.a()) {
                        var r = i.a.a().g(t);
                        i.a.a().h("Main Window Sent Presence Update", n, r)
                    }
                })
            })
        })
    },
    updateSignInState: function(n) {
        var t = this;
        _j.m.a().c(_a.a.z, "PopOutUpdateSignInState", function() {
            t.b.a(function(i) {
                t.a = i.a();
                t.a.b(function() {
                    t.a.a() && t.a.a().n("Main Window Sent Sign In Update", n)
                })
            })
        })
    }
};
_y.fC = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
    this.n = Function.createDelegate(this, this.onGetComplianceConfigurationCompleted);
    this.j = new Array(0);
    _a.c.b(r, "activityManager");
    _a.c.b(u, "presenceCrossWindowNotifier");
    _a.c.b(f, "popOutManager");
    this.d = t;
    this.g = n;
    this.o = r;
    this.p = u;
    this.f = f;
    this.k = e;
    this.q = o;
    this.h = s;
    this.i = h;
    this.l = c;
    this.e = i;
    this.m = l;
    _dh.a(a, this)
};
_y.fC.prototype = {
    g: null,
    d: null,
    f: null,
    p: null,
    h: null,
    i: null,
    l: null,
    e: null,
    o: null,
    k: null,
    m: null,
    q: null,
    getDiagnostics: function(n, t) {
        var i = "";
        var r = this;
        this.m.a(function(r) {
            i = r.d(n, t)
        });
        return i
    },
    clearDiagnosticsData: function(n) {
        var t = this;
        this.m.a(function(t) {
            t.c(n)
        })
    },
    performUpdate: function(n, t, i) {
        var r = this;
        _j.m.a().c(_a.a.z, "MainWindowUpdate", function() {
            var e = r.d.a(n);
            if (e) {
                var f = JsonParser.deserialize(i);
                if (!(t in _y.bE.a)) {
                    e.ec(t, f);
                    return
                }
                var u = _y.bE.a[t];
                if (!u.e()) throw Error.invalidOperation("Only complex property types with converters should be added to propertyMap");
                f = u.e().a(f, u);
                if (f !== e.eM(u))
                    if (u.c === _j.l) {
                        var o = e.eM(u);
                        o.g();
                        var s = f;
                        o.z(s)
                    } else _h.c.t(e, [new _h.dj(u, f)])
            }
        })
    },
    performDelete: function(n) {
        var t = this;
        _j.m.a().c(_a.a.z, "MainWindowDelete", function() {
            var i = t.d.a(n);
            i && _h.c.D(i)
        })
    },
    startChat: function(n, t, i, r) {
        if (!n) throw Error.argumentNull("participantDisplayNames");
        if (!t) throw Error.argumentNull("participantAddresses");
        if (n.length !== t.length) throw Error.argument("participantDisplayNames and participantAddresses must have the same length.");
        var f = null;
        if (i) {
            f = this.d.a(i);
            !f
        }
        for (var c = n.length, e = new _j.l, u = 0; u < c; u++) {
            var l = n[u];
            var h = t[u];
            var o = _h.j.i(l, h);
            e.a(o)
        }
        var s = this;
        this.e.a(function(n) {
            var t;
            var i = n.a();
            t = f ? i.d().b(e, f) : i.d().a(e.x[0], r);
            s.g.a(t)
        })
    },
    sendChatMessage: function(n, t) {
        var i = this.d.a(n);
        if (i) {
            var r = this;
            this.e.a(function(n) {
                var u = n.a();
                u.b(function() {
                    var n = u.d().i(i, t);
                    r.g.a(n)
                })
            })
        }
    },
    endChat: function(n) {
        var t = this.d.a(n);
        if (t) {
            var i = this;
            this.e.a(function(n) {
                var u = n.a();
                var r = u.d().f(t);
                i.g.a(r)
            })
        }
    },
    chatWindowReady: function(n) {
        var t = this.d.a(n);
        t && t.Z(!0)
    },
    reportUserActivity: function(n) {
        this.o.f(n)
    },
    r: function(n, t, i) {
        i(JsonParser.serialize(_h.Z.a().f(n, t)), t)
    },
    initializeChatManager: function(n) {
        var t = this;
        this.e.a(function(t) {
            var i = t.a();
            i.c() && n(i.a().d(), i.a().a())
        })
    },
    registerOrUnregisterForAttachmentCompleteNotification: function(n, t, i, r) {
        i ? this.l.a(n, _a.a.c, r, t, 0) : this.l.b(n, t)
    },
    crossWindowsPerfTracing: function(n) {
        _y.l.g(n)
    },
    crossWindowsStartPerfTrace: function(n, t, i) {
        var r = _a.a.dS(n);
        _a.O.a(r, t, i)
    },
    crossWindowsEndPerfTrace: function(n) {
        _a.O.b(n)
    },
    invoke: function(n, t, i, r, u, f) {
        var o = JsonParser.deserialize(t);
        var s = JsonParser.deserialize(i);
        var e = this;
        _g.k.d(function(t) {
            var rt = u;
            switch (n) {
                case "GetGroup":
                    t.fC(o.itemId, o.adObjectId, o.emailAddress, o.paging, o.resultSet, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetOrganizationHierarchyForPersona":
                    t.cj(o.getOrganizationHierarchyForPersonaRequest, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetNotesForPersona":
                    t.ci(o.getNotesForPersonaRequest, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetPersonaOrganizationHierarchy":
                    t.gh(o.galObjectGuid, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetPersonaNotes":
                    t.gg(o.personaId, o.maxBytesToFetch, s, e.b(r, u), e.a(r, f));
                    break;
                case "FindPlaces":
                    t.bz(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetReminders":
                    t.F(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetDaysUntilPasswordExpiration":
                    t.bV(s, e.b(r, u), e.a(r, f));
                    break;
                case "FindTags":
                    t.eN(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetGroupInfo":
                    t.cb(o.getGroupInfoRequest, s, e.b(r, u), e.a(r, f));
                    break;
                case "CreateItem":
                    t.p(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "CreateModernGroup":
                    t.dX(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "UpdateModernGroup":
                    t.jm(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "ValidateModernGroupAlias":
                    t.jx(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "AddFavorite":
                    t.dz(o.instantMessageBuddy, o.actionContext, e.b(r, u), e.a(r, f));
                    break;
                case "CreatePersona":
                    t.q(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "UpdatePersona":
                    t.S(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "UpdateItem":
                    t.c(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "UpdateMasterCategoryList":
                    t.du(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetItem":
                    t.a(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetCalendarEvent":
                    t.bO(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetAttachmentTextPreview":
                    t.bL(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetAttachmentDownloadToken":
                    t.bK(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetAttachment":
                    t.bF(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "CreateAttachment":
                    t.d(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "CreateAttachmentFromLocalFile":
                    t.bk(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "CancelAttachment":
                    t.bb(o.cancellationId, s, e.b(r, u), e.a(r, f));
                    break;
                case "DeleteAttachment":
                    t.r(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "AcceptPersonaLinkSuggestion":
                    t.U(o.personaId, o.suggestedPersonaId, s, e.b(r, u), e.a(r, f));
                    break;
                case "RejectPersonaLinkSuggestion":
                    t.hu(o.personaId, o.suggestedPersonaId, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetInlineExploreSpContent":
                    t.fH(o.query, o.targetUrl, s, e.b(r, u), e.a(r, f));
                    break;
                case "LinkPersona":
                    t.gS(o.linkToPersonaId, o.personaIdToBeLinked, s, e.b(r, u), e.a(r, f));
                    break;
                case "UnlinkPersona":
                    t.dn(o.personaId, o.contactId, s, e.b(r, u), e.a(r, f));
                    break;
                case "FindPeople":
                    t.v(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetPeopleFilters":
                    t.D(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetExtensibilityContext":
                    t.bY(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetWacIframeUrl":
                    t.gJ(o.attachmentId, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetWacAttachmentInfo":
                    t.cE(o.attachmentId, o.isEdit, o.draftId, s, e.b(r, u), e.a(r, f), null);
                    break;
                case "SynchronizeWacAttachment":
                    t.dm(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "CreateResendDraft":
                    t.bq(o.ndrMessageId, o.draftsFolderId, s, e.b(r, u), e.a(r, f));
                    break;
                case "LoadExtensionCustomProperties":
                    t.cI(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetCalendarSharingRecipientInfo":
                    t.y(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "SendCalendarSharingInvite":
                    t.N(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "AddSharedCalendar":
                    t.Y(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetCalendarFolders":
                    t.x(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetCalendarFolderConfiguration":
                    t.w(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "SaveExtensionCustomProperties":
                    t.cU(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetClientAccessToken":
                    t.f(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "ExecuteEwsProxy":
                    t.bu(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "SaveExtensionSettings":
                    t.cV(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "SendChatMessage":
                    t.cX(o.message, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetPersonaSuggestions":
                    t.cq(o.personaId, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetPersona":
                    t.cp(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetUcwaUserConfiguration":
                    t.cy(o.sipUri, s, e.b(r, u), e.a(r, f));
                    break;
                case "CreateMeetNow":
                    t.dW(o.sipUri, o.subject, s, e.b(r, u), e.a(r, f));
                    break;
                case "MeetNowInit":
                    t.gY(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "PostModernGroupItem":
                    t.cL(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "PostGroupItem":
                    t.cK(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "PostUnifiedGroupItem":
                    t.cM(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "CreateOnlineMeeting":
                    t.bn(o.sipUri, o.itemId, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetUserAvailability":
                    t.gH(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetUserAvailabilityInternal":
                    t.i(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetCalendarProcessing":
                    t.bP(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetMailboxCalendarConfiguration":
                    t.ce(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetMailboxMessageConfiguration":
                    t.C(s, e.b(r, u), e.a(r, f));
                    break;
                case "SetCalendarProcessing":
                    t.db(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "SetMailboxCalendarConfiguration":
                    t.P(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "SetMailboxMessageConfiguration":
                    t.dd(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetRoomLists":
                    t.cr(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetRoomsInternal":
                    t.cs(o.roomList, s, e.b(r, u), e.a(r, f));
                    break;
                case "SubscribeToNotification":
                    break;
                case "ConnectedAccountsNotification":
                    break;
                case "GetMailTips":
                    t.cf(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetFavorites":
                    t.A(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetFolderMruConfiguration":
                    t.ca(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetConversationItems":
                    t.bU(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetComplianceConfiguration":
                    t.bS(s, e.b(r, u), e.a(r, f));
                    break;
                case "ResetPresence":
                    t.cQ(s, e.b(r, u), e.a(r, f));
                    break;
                case "SetPresence":
                    t.de(o.presenceSetting, s, e.b(r, u), e.a(r, f));
                    break;
                case "FindFolder":
                    t.bx(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "FindItem":
                    t.e(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "FindConversation":
                    t.bw(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetBposShellInfoNavBarData":
                    t.bN(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetFolder":
                    t.g(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetOwaUserConfiguration":
                    e.getOwaUserConfig(r, s, u, f);
                    break;
                case "UnsubscribeToNotification":
                    t.dp(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetRegionalConfiguration":
                    t.E(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetUnifiedGroupDetails":
                    t.cz(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetUserUnifiedGroups":
                    t.cD(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetUnifiedGroupMembers":
                    t.cA(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetUnifiedGroupsSettings":
                    t.cB(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "JoinPrivateUnifiedGroup":
                    t.cG(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "SetUnifiedGroupFavoriteState":
                    t.df(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "SetUnifiedGroupMembershipState":
                    t.dh(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "SetUnifiedGroupUserSubscribeState":
                    t.di(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "UpdateUnifiedGroup":
                    t.dv(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetModernGroup":
                    t.fQ(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetModernGroups":
                    t.fS(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetModernGroupUnseenItems":
                    t.fT(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetPersonaModernGroupMembership":
                    t.gf(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "SetModernGroupPinState":
                    var k = o.smtpAddress;
                    var p = o.isPinned;
                    t.iu(k, p, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetUnifiedGroupUnseenCount":
                    t.cC(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "SetUnifiedGroupLastVisitedTime":
                    t.dg(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "VerifyCert":
                    var tt = o.certRawData;
                    t.jA(tt, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetEncryptionCerts":
                    var it = o.request;
                    t.bX(it, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetCertsInfo":
                    var g = o.certRawData;
                    var nt = o.isSend;
                    t.bR(g, nt, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetMime":
                    var b = o.itemId;
                    t.cg(b, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetDlpPolicyTips":
                    t.bW(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetLinkPreview":
                    t.cc(o.getLinkPreviewRequest, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetAttachmentDataProviderItems":
                    t.bH(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetAllAttachmentDataProviders":
                    t.bE(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetNewAttachmentDataProviderCreationInfo":
                    t.ch(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "AddNewAttachmentDataProvider":
                    t.X(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "CreateAttachmentFromAttachmentDataProvider":
                    var h = o.itemId;
                    var i = o.attachmentDataProviderId;
                    var l = o.location;
                    var d = o.subscriptionId;
                    var w = o.channelId;
                    var y = o.providerEndpointUrl;
                    var v = o.attachmentId;
                    var a = o.cancellationId;
                    var c = o.dataProviderParentItemId;
                    t.bj(h, i, l, v, d, w, c, y, s, e.b(r, u), e.a(r, f), a, !1);
                    break;
                case "CreateReferenceAttachmentFromLocalFile":
                    t.bp(o.requestObject, s, e.b(r, u), e.a(r, f));
                    break;
                case "CreateReferenceAttachmentFromAttachmentDataProvider":
                    h = o.itemId;
                    i = o.attachmentDataProviderId;
                    l = o.location;
                    y = o.providerEndpointUrl;
                    v = o.attachmentId;
                    c = o.dataProviderParentItemId;
                    a = o.cancellationId;
                    t.bo(h, i, l, v, c, y, s, e.b(r, u), e.a(r, f), a, null, null, !1, null);
                    break;
                case "GetAttachmentDataProviderRecentItems":
                    t.bI(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetAttachmentDataProviderGroups":
                    t.bG(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetAllAttachmentDataProviderCreators":
                    t.bD(s, e.b(r, u), e.a(r, f));
                    break;
                case "SanitizeHtml":
                    t.cS(o.input, s, e.b(r, u), e.a(r, f));
                    break;
                case "CreateAttachmentFromUri":
                    t.bl(o.itemId, o.uri, o.name, o.subscriptionId, s, e.b(r, u), e.a(r, f), o.isInline, o.contentId);
                    break;
                case "SaveAttachmentsToCloud":
                    t.cT(o.requestObject, s, e.b(r, u), e.a(r, f));
                    break;
                case "ConvertLocalToRefAttachment":
                    t.bh(o.requestObject, s, e.b(r, u), e.a(r, f));
                    break;
                case "CancelConvertLocalToRefAttachment":
                    t.bc(o.requestObject, s, e.b(r, u), e.a(r, f));
                    break;
                case "ConvertRefToLocalAttachment":
                    t.bi(o.requestObject, s, e.b(r, u), e.a(r, f));
                    break;
                case "CancelConvertRefToLocalAttachment":
                    t.bd(o.requestObject, s, e.b(r, u), e.a(r, f));
                    break;
                case "UpdateAttachmentPermissions":
                    t.dq(o.permissionsRequest, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetAttachmentDataProviderUploadFolderProps":
                    t.bJ(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetSharingInformation":
                    t.cu(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "SetAttachmentPermissions":
                    t.cZ(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "SetAttachmentPermissionsV2":
                    t.da(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetBirthdayEvent":
                    t.bM(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "UpdateBirthdayEvent":
                    t.dr(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "RemoveBirthdayEvent":
                    t.cO(o.contactId, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetOwaUserOofSettings":
                    t.cm(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetSocialActivityNotifications":
                    t.gq(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetSocialActivityNotifications2":
                    t.cw(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "CreateSweepRuleForSender":
                    t.br(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetSearchSuggestions":
                    t.ct(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "LikeItem2":
                    t.cH(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "ConvertIcsToCalendarItem":
                    t.n(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "AddEventToMyCalendar":
                    t.W(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetAddIns":
                    t.bC(o.addInType, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetSharingInvitations":
                    t.cv(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetConsumerMailbox":
                    t.z(o.request, s, e.b(r, u), e.a(r, f));
                    break;
                case "FindMeetingTimeCandidates":
                    t.by(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "AddEntityFeedback":
                    t.V(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetPeopleIKnowGraphCommand":
                    t.co(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "UpdateClientExtensionNotifications":
                    t.ds(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetFlightsSettings":
                    t.bZ(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetOwaNonBootUserConfiguration":
                    t.cl(s, e.b(r, u), e.a(r, f));
                    break;
                case "GetSuggestedUnifiedGroups":
                    t.cx(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetCalendarView":
                    t.bQ(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "CreateMeetingPoll":
                    t.bm(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "FinalizeMeetingPoll":
                    t.bv(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "CancelMeetingPoll":
                    t.be(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "RegisterConsent":
                    t.cN(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "RespondToMeetingPoll":
                    t.cR(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "SearchAttachmentDataProviderItems":
                    t.cW(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetMailboxJunkEmailConfiguration":
                    t.B(s, e.b(r, u), e.a(r, f));
                    break;
                case "ShareTailoredExperienceEvent":
                    t.dk(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "RemoveTailoredExperienceEventsFromCalendar":
                    t.cP(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "AddTailoredExperienceEventsToCalendar":
                    t.Z(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "GetParcelDeliveryStatus":
                    t.cn(o, s, e.b(r, u), e.a(r, f));
                    break;
                case "ConvertAttachmentToInline":
                    t.bf(o.requestObject, s, e.b(r, u), e.a(r, f));
                    break;
                default:
                    break
            }
        })
    },
    getOwaUserConfig: function(n, t, i, r) {
        var u = this;
        _g.k.d(function(f) {
            var e = u.q.e().bH;
            e ? _a.Y.a(n, function(n) {
                var r = JsonParser.serialize("");
                var t = JsonParser.serialize(e);
                try {
                    i(r, t)
                } catch (u) {
                    _j.e.d(_a.a.z, u, "Fail to callback to child window after in GetOwaUserConfiguration")
                }
            }) : f.h(t, u.b(n, i), u.a(n, r))
        })
    },
    invokeWithProcessResponse: function(n, t, i, r, u, f) {
        var o = JsonParser.deserialize(t);
        var s = JsonParser.deserialize(i);
        var e = this;
        _g.k.d(function(t) {
            switch (n) {
                case "DeleteItem":
                    t.t(o, s, e.c(r, u), e.a(r, f));
                    break;
                case "MarkAsJunk":
                    t.I(o, s, e.c(r, u), e.a(r, f));
                    break;
                case "LogDatapoint":
                    t.H(o.datapoints, s, e.c(r, u), e.a(r, f));
                    break;
                case "AddTrustedSender":
                    t.j(o, s, e.c(r, u), e.a(r, f));
                    break;
                case "UpdateUserConfiguration":
                    t.T(o, s, e.c(r, u), e.a(r, f));
                    break;
                case "DeletePersona":
                    t.u(o.personaId, o.folderId, s, e.c(r, u), e.a(r, f));
                    break;
                case "MoveItem":
                    t.K(o, s, e.c(r, u), e.a(r, f));
                    break;
                case "SendLinkClickedSignalToSP":
                    t.cY(o.sendLinkClickedRequest, s, e.c(r, u), e.a(r, f));
                    break;
                case "RespondToCalendarEvent":
                    t.L(o, s, e.c(r, u), e.a(r, f));
                    break;
                case "RespondToMeetingMessage":
                    t.M(o, s, e.c(r, u), e.a(r, f));
                    break;
                case "CancelCalendarEvent":
                    t.m(o, s, e.c(r, u), e.a(r, f));
                    break;
                case "MaskAutoCompleteRecipient":
                    t.J(o, s, e.c(r, u), e.a(r, f));
                    break;
                case "CreateCalendarEvent":
                    t.o(o, s, e.c(r, u), e.a(r, f));
                    break;
                case "SendReadReceipt":
                    t.O(o.itemId, s, e.c(r, u), e.a(r, f));
                    break;
                case "DeleteCalendarEvent":
                    t.s(o, s, e.c(r, u), e.a(r, f));
                    break;
                case "UpdateCalendarEvent":
                    t.R(o, s, e.c(r, u), e.a(r, f));
                    break;
                case "ApplyMessageAction":
                    t.l(o, s, e.c(r, u), e.a(r, f));
                    break;
                default:
                    break
            }
        })
    },
    executeWithActionQueue: function(n, t, i, r, u, f) {
        var o = JsonParser.deserialize(r);
        var e = this;
        _j.m.a().c(_a.a.z, "MainWindowExecuteWithActionQueue", function() {
            var r = function(n, r, u) {
                var f = JsonParser.serialize(n);
                _a.Y.a(i, function(n) {
                    t(f, function(n) {
                        var t = JsonParser.deserialize(n);
                        _j.m.a().c(_a.a.z, "MainWindowExecuteWithActionQueueActionHandlerSuccessCallback", function() {
                            r(t)
                        })
                    }, function(n) {
                        var t = JsonParser.deserialize(n);
                        _j.m.a().c(_a.a.z, "MainWindowExecuteWithActionQueueActionHandlerFailureCallback", function() {
                            u(t)
                        })
                    })
                }, function() {
                    r(null)
                })
            };
            _g.k.a.E(n, r, o, e.c(i, u), e.a(i, f))
        })
    },
    setPendingDiscard: function(n, t) {
        var i = this;
        this.k.a(function(i) {
            i.d(n, t)
        })
    },
    getSaveResultForPopout: function(n, t, i) {
        if (n in this.f.get_saveForPopoutMap()) {
            var r = this.f.get_saveForPopoutMap()[n];
            if (r.b) {
                var u = JsonParser.serialize(r.b);
                i(u);
                delete this.f.get_saveForPopoutMap()[n]
            } else {
                var f = new _y.jG(t, i);
                Array.add(r.a, f)
            }
        } else i(null)
    },
    getMainWindowComplianceConfiguration: function(n) {
        var t = this.h;
        if (t.WasLoadedFromServer) n(t);
        else {
            Array.add(this.j, n);
            if (!t.IsLoadingFromServer) {
                var i = this.i;
                i.b(_a.cn, this.n);
                var r = new _h.cv(t, i);
                r.h()
            }
        }
    },
    onGetComplianceConfigurationCompleted: function(n) {
        for (var i = this.j, r = i.length, t = 0; t < r; t++) try {
            i[t](this.h)
        } catch (u) {}
        this.j = new Array(0);
        this.i.c(_a.cn, this.n)
    },
    queryPresence: function(n) {
        var t = this;
        _j.m.a().c(_a.a.z, "MainWindowQueryPresence", function() {
            t.e.a(function(i) {
                var r = i.a();
                r.b(function() {
                    if (r.e()) {
                        var i;
                        var f, u;
                        var e = (u = r.e().b(n, f = {
                            val: i
                        }), i = f.val, u);
                        e && t.p.updatePresenceInAllPopOutWindows(n, i)
                    }
                })
            })
        })
    },
    c: function(n, t) {
        var i = this;
        return function(i) {
            var r = JsonParser.serialize(i);
            _a.Y.a(n, function(n) {
                t(r)
            })
        }
    },
    b: function(n, t) {
        var i = this;
        return function(r, u) {
            var o = JsonParser.serialize(r);
            var s = JsonParser.serialize(u);
            if (!_a.Y.a(n, function(n) {
                    t(o, s)
                }) && r && r.request.methodName === "CreateItem") {
                var f = r.request.actionContext;
                if (f.actionName === "MailComposeUpgrade") {
                    var e = f.viewModelContextId;
                    i.k.a(function(n) {
                        if (n.a(e)) {
                            var i = u.Body.ResponseMessages.Items[0];
                            var t = i.Items[0];
                            n.c(e, new _g.f(t))
                        }
                    })
                }
            }
        }
    },
    a: function(n, t) {
        var i = this;
        return function(i) {
            var r = JsonParser.serialize(i);
            _a.Y.a(n, function(n) {
                t(r)
            })
        }
    }
};
_y.cs = function(n, t) {
    this.h = Function.createDelegate(this, this.t);
    this.m = Function.createDelegate(this, this.s);
    this.i = Function.createDelegate(this, this.u);
    this.l = Function.createDelegate(this, this.q);
    this.p = {};
    if (!n) throw Error.argumentNull("owaShell");
    if (!t) throw Error.argumentNull("mainWindowInstance");
    this.f = t;
    this.a = {};
    this.d = {};
    this.c = {};
    this.e = {};
    this.b = {};
    this.g = n;
    this.g.m(this.l);
    _h.CreateItemResponseProcessor.e(this.i);
    _h.CreateItemResponseProcessor.f(this.i);
    _h.CreateItemResponseProcessor.d(this.m)
};
_y.cs.b = function() {
    return Math.floor(Math.random() * 100 + 1).toString()
};
_y.cs.prototype = {
    f: null,
    a: null,
    d: null,
    c: null,
    b: null,
    e: null,
    g: null,
    k: null,
    j: null,
    get_saveForPopoutMap: function() {
        return this.p
    },
    get_mainWindowInstance: function() {
        return this.f
    },
    r: function() {
        var t = this.a;
        for (var n in t) {
            var r = {
                key: n,
                value: t[n]
            };
            var i = r.value;
            if (!i.closed) return !0
        }
        return !1
    },
    registerPopOut: function(n, t, i, r, u) {
        u || _y.cG.g(r, this.e[r.viewModelFactoryDataType]);
        this.a[n] = t;
        this.d[n] = i;
        this.c[n] = r;
        u && (this.b[n] = 1);
        this.o()
    },
    registerPopoutDependencies: function(n, t) {
        this.e[n] || (this.e[n] = t)
    },
    getContext: function(n) {
        return this.c[n]
    },
    deRegisterWindow: function(n) {
        this.n(n);
        this.o()
    },
    queryPresenceInMainWindow: function(n) {
        var t = this;
        _a.Y.a(this.f, function(t) {
            t.queryPresence(n)
        })
    },
    updatePresenceInAllPopOutWindows: function(n, t) {
        var u = this.a;
        for (var f in u) {
            var i = {
                key: f,
                value: u[f]
            };
            if (this.b[i.key] !== 1) {
                var r = i.value;
                if (!r.closed) {
                    var e = this;
                    _a.Y.a(r, function(i) {
                        i.updatePresence(n, t)
                    })
                }
            }
        }
    },
    updateSignInStateInAllPopOutWindows: function(n) {
        var r = this.a;
        for (var u in r) {
            var t = {
                key: u,
                value: r[u]
            };
            if (this.b[t.key] !== 1) {
                var i = t.value;
                if (!i.closed) {
                    var f = this;
                    _a.Y.a(i, function(t) {
                        t.updateSignInState(n)
                    })
                }
            }
        }
    },
    pushSaveResultToPopout: function(n, t) {
        for (var u = !1, r = t.length - 1; r >= 0; r--) {
            var i = t[r];
            var f = this.a[i.a];
            this.k = u ? null : n;
            this.j = i.b;
            if (this.b[i.a] === 1) {
                _a.Y.d(this.h);
                u = !0
            } else _a.Y.a(f, this.h) && (u = !0)
        }
    },
    u: function(n, t) {
        var r = n.a.popOutContext;
        if (r) {
            var i = r.windowId;
            if (!_j.h.a(i)) {
                var e = this.a[i];
                var f = JsonParser.serialize(n);
                var u = JsonParser.serialize(t);
                var o = this;
                _a.Y.a(e, function(n) {
                    n.raiseResponseProcessorEvent(f, u)
                })
            }
        }
    },
    s: function(n) {
        if (n) {
            var r = n.request;
            if (r) {
                var u = r.actionContext;
                if (u) {
                    var t = u.popOutContext;
                    if (t) {
                        var i = t.windowId;
                        if (!_j.h.a(i)) {
                            var e = this.a[i];
                            var f = JsonParser.serialize(n);
                            var o = this;
                            _a.Y.a(e, function(n) {
                                n.raiseResponseCompletedEvent(f)
                            })
                        }
                    }
                }
            }
        }
    },
    q: function(n) {
        this.g.b() && this.r() && (_y.cs.a || n.a(_u.R.b));
        _y.cs.a = !1
    },
    o: function() {
        var t = [];
        var u = this.a;
        for (var i in u) {
            var r = {
                key: i,
                value: u[i]
            };
            var f = r.value;
            f.closed && Array.add(t, r.key)
        }
        for (var n = 0; n < t.length; n++) this.n(t[n])
    },
    n: function(n) {
        var t = this.d[n];
        if (t) {
            try {
                t.d()
            } catch (i) {
                _j.e.d(_a.a.z, i, "Exception happens when DeRegister window from PeerWindowNotifier.")
            }
            delete this.d[n]
        }
        n in this.b && delete this.b[n];
        delete this.a[n];
        delete this.c[n]
    },
    t: function(n) {
        this.j(this.k)
    }
};
_y.iP = function(n, t, i, r, u, f) {
    this.m = Function.createDelegate(this, this.u);
    this.l = Function.createDelegate(this, this.o);
    this.b = n;
    this.a = t;
    this.f = i;
    this.k = r;
    this.d = f;
    this.g = {};
    this.c = u;
    this.c.e(n);
    if (_bc.j.isInstanceOfType(n)) {
        var e = this;
        n.o(function() {
            e.p(n)
        })
    }
    n.f(this.l);
    n.z(this.m)
};
_y.iP.prototype = {
    f: null,
    k: null,
    c: null,
    b: null,
    a: null,
    j: null,
    i: !1,
    e: !1,
    d: null,
    g: null,
    h: !1,
    v: function(n) {
        this.j = n;
        this.i = !0;
        this.s();
        return n
    },
    t: function() {
        if (this.b) {
            _bc.j.isInstanceOfType(this.b) && this.b.o(null);
            this.b.f(null);
            this.b.z(null);
            this.b.V();
            this.b = null
        }
        this.a = null
    },
    q: function() {
        this.e = !0;
        this.r();
        this.f && (this.a.document.title = this.f);
        this.s()
    },
    r: function() {
        if (this.e) {
            for (var u = document.styleSheets, f = window.location.origin, o = f ? f + this.d.t() : null, h = this.d.n() ? this.d.n() + "/owa" : null, t = 0, s = u.length; t < s; t++) {
                var n = u[t];
                if (n.href) {
                    if (!(n.href in this.g)) {
                        this.g[n.href] = !0;
                        this.a.loadStyleSheets([n.href], o, h)
                    }
                } else if (!this.h) {
                    for (var i = "", r = 0, e = n.cssRules.length; r < e; r++) i = i + n.cssRules[r].cssText;
                    this.n(i)
                }
            }
            this.h = !0
        }
    },
    n: function(n) {
        var i = this.a.document.createElement("STYLE");
        i.innerText = n;
        var t = this.a.document.getElementsByTagName("head");
        t && t.length > 0 && t[0].appendChild(i)
    },
    s: function() {
        if (this.i && this.e) {
            this.a.document.body.appendChild(this.j);
            this.b.X()
        }
    },
    o: function() {
        this.a && !this.a.closed && this.a.close()
    },
    p: function(n) {
        var t = this.c.b().m(n);
        if (t >= 0) {
            var i = !t;
            i ? this.o() : this.c.f(this.c.b().x.length - t)
        }
    },
    u: function(n) {
        this.c.e(n);
        if (_bc.j.isInstanceOfType(n)) {
            var t = this;
            n.o(function() {
                t.p(n)
            })
        }
    }
};
_y.jJ = function(n, t) {
    this.d = Function.createDelegate(this, this.g);
    this.a = new _j.l;
    this.b = n;
    this.c = t;
    this.c.b(_j.bu, this.d);
    this.h()
};
_y.jJ.prototype = {
    b: null,
    c: null,
    projectionReady: function(n) {
        for (var t = 0; t < this.a.x.length; t++) {
            var i = this.a.x[t];
            if (i.a === n) {
                i.q();
                break
            }
        }
    },
    onBeforeProjectionUnload: function(n) {
        for (var t = 0; t < this.a.x.length; t++) {
            var i = this.a.x[t];
            if (i.a === n) return i.b.W()
        }
        _j.e.b(_a.a.z, "Projection popout window onbeforeunload triggered when there's no reference to the popout on main window.");
        return null
    },
    onProjectionUnload: function(n) {
        for (var i = 0; i < this.a.x.length; i++) {
            var t = this.a.x[i];
            if (t.a === n) {
                t.b.m();
                this.a.p(t, !0);
                this.b.deRegisterWindow(t.k);
                t.t();
                break
            }
        }
    },
    e: function(n, t, i, r, u, f) {
        var e = new _y.iP(n, t, i, r, u, f);
        this.a.a(e);
        this.b.registerPopOut(r, t, null, null, !0);
        return e
    },
    g: function(n) {
        for (var t = 0; t < this.a.x.length; t++) {
            var i = this.a.x[t];
            i.r()
        }
    },
    h: function() {
        var n = window.document.getElementsByTagName("head");
        if (window.self.MutationObserver && n && n.length) {
            var r = n[0];
            var u = this;
            var t = new MutationObserver(function(n, t) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    if (i.addedNodes && i.addedNodes.length > 0)
                        for (var f = 0; f < i.addedNodes.length; f++) {
                            var e = i.addedNodes[f];
                            e.tagName === "STYLE" && u.f(e.innerText)
                        }
                }
            });
            var i = {
                attributes: !0,
                childList: !0,
                characterData: !0
            };
            t.observe(r, i)
        }
    },
    f: function(n) {
        for (var t = 0; t < this.a.x.length; t++) {
            var i = this.a.x[t];
            i.n(n)
        }
    }
};
_y.et = function(n, t, i) {
    this.jV = Function.createDelegate(this, this.km);
    this.jU = Function.createDelegate(this, this.ki);
    this.jZ = Function.createDelegate(this, this.kq);
    this.ka = Function.createDelegate(this, this.kr);
    this.kb = Function.createDelegate(this, this.ks);
    this.kd = Function.createDelegate(this, this.kv);
    this.kc = Function.createDelegate(this, this.kt);
    this.jW = Function.createDelegate(this, this.kn);
    this.jY = Function.createDelegate(this, this.kp);
    this.jX = Function.createDelegate(this, this.ko);
    _y.et.initializeBase(this);
    this.jE = t;
    n.w(this.jX);
    _dh.a(i, this)
};
_y.et.a = function(n) {
    n && (n.windowId = _h.L.a.d(n.successEventName) || _h.L.a.d(n.failureEventName) ? _a.Y.b : null)
};
_y.et.prototype = {
    jE: null,
    jF: null,
    jI: null,
    jL: !1,
    jS: null,
    jT: null,
    jR: null,
    jG: null,
    jN: null,
    jP: null,
    jO: null,
    jM: null,
    jJ: null,
    jH: null,
    jK: null,
    kk: function(n, t, i) {
        this.jS = n;
        this.jR = i;
        this.jT = t;
        _a.Y.a(this.jE, this.jY)
    },
    jQ: function(n) {
        this.jG = n;
        _a.Y.a(this.jE, this.jW)
    },
    kf: function(n, t, i) {
        this.jH = n;
        this.jJ = t;
        this.jK = i;
        _a.Y.a(this.jE, this.kc)
    },
    kg: function(n, t) {
        this.jH = n;
        this.jJ = t;
        _a.Y.a(this.jE, this.kd)
    },
    jC: function(n, t, i, r, u, f) {
        r && _y.et.a(r.popOutContext);
        var o = JsonParser.serialize(i);
        var e = JsonParser.serialize(r);
        var s = this;
        _a.Y.a(this.jE, function(n) {
            n.invoke(t, o, e, window.self, function(n, i) {
                var f = JsonParser.deserialize(n);
                var r = JsonParser.deserialize(i);
                _j.m.a().c(_a.a.z, "PopOutProxyInvocationCallbackSuccess-" + t, function() {
                    u(f, r)
                })
            }, function(n) {
                var i = JsonParser.deserialize(n);
                _j.m.a().c(_a.a.z, "PopOutProxyInvocationCallbackFailure-" + t, function() {
                    f(i)
                })
            })
        })
    },
    jD: function(n, t, i, r, u) {
        i && _y.et.a(i.popOutContext);
        var e = JsonParser.serialize(t);
        var f = JsonParser.serialize(i);
        var o = this;
        _a.Y.a(this.jE, function(t) {
            t.invokeWithProcessResponse(n, e, f, window.self, function(n) {
                var t = JsonParser.deserialize(n);
                _j.m.a().c(_a.a.z, "PopOutProxyInvokeWithProcessResponseCallbackSuccess", function() {
                    r(t)
                })
            }, function(n) {
                var t = JsonParser.deserialize(n);
                _j.m.a().c(_a.a.z, "PopOutProxyInvokeWithProcessResponseCallbackFailure", function() {
                    u(t)
                })
            })
        })
    },
    jB: function(n, t, i, r, u) {
        var f = this;
        var h = function(n, i, r) {
            var u = JsonParser.deserialize(n);
            _j.m.a().c(_a.a.z, "PopOutProxyExecuteWithActionQueueActionHandler", function() {
                f.jF = i;
                t(u, function(n) {
                    var t = JsonParser.serialize(n);
                    _a.Y.a(f.jE, function(n) {
                        f.jF = null;
                        i(t)
                    })
                }, function(n) {
                    var t = JsonParser.serialize(n);
                    _a.Y.a(f.jE, function(n) {
                        f.jF = null;
                        r(t)
                    })
                })
            })
        };
        var a = this;
        var s = function(n) {
            var t = JsonParser.deserialize(n);
            _j.m.a().c(_a.a.z, "PopOutProxyExecuteWithActionQueueSuccessInvocationCallback", function() {
                r(t)
            })
        };
        var l = this;
        var e = function(n) {
            var t = JsonParser.deserialize(n);
            _j.m.a().c(_a.a.z, "PopOutProxyExecuteWithActionQueueFailedInvocationCallback", function() {
                u(t)
            })
        };
        var o = JsonParser.serialize(i);
        var c = this;
        _a.Y.a(this.jE, function(t) {
            t.executeWithActionQueue(n, h, window.self, o, s, e)
        })
    },
    ku: function(n, t) {
        this.jI = n;
        this.jL = t;
        _a.Y.a(this.jE, this.kb)
    },
    getSaveResultForPopout: function(n, t, i) {
        this.jI = n;
        this.jN = t;
        this.jP = i;
        _a.Y.a(this.jE, this.ka)
    },
    kl: function(n) {
        this.jO = n;
        _a.Y.a(this.jE, this.jZ)
    },
    ke: function(n) {
        this.jM = n;
        _a.Y.a(this.jE, this.jU)
    },
    kh: function(n) {
        var t = this;
        _a.Y.a(this.jE, function(t) {
            t.crossWindowsEndPerfTrace(n)
        })
    },
    ko: function() {
        if (this.jF) {
            this.jF(_y.et.b);
            this.jF = null
        }
    },
    ks: function(n) {
        n.setPendingDiscard(this.jI, this.jL)
    },
    kr: function(n) {
        n.getSaveResultForPopout(this.jI, this.jN, this.jP)
    },
    kq: function(n) {
        n.getMainWindowComplianceConfiguration(this.jO)
    },
    kp: function(n) {
        _y.fC.isInstanceOfType(n) && n.r(this.jS, this.jT, this.jR)
    },
    ki: function(n) {
        n.crossWindowsPerfTracing(this.jM)
    },
    kn: function(n) {
        n.initializeChatManager(this.jV)
    },
    kt: function(n) {
        n.registerOrUnregisterForAttachmentCompleteNotification(this.jH, this.jJ, !0, this.jK)
    },
    kv: function(n) {
        n.registerOrUnregisterForAttachmentCompleteNotification(this.jH, this.jJ, !1, null)
    },
    km: function(n, t) {
        var i = this;
        this.jG.b(function() {
            if (i.jG.c()) {
                var r = "Initializing state for pop-out window";
                i.jG.a().n(r, n);
                i.jG.a().A(r, t)
            }
        })
    }
};
_y.iQ = function(n) {
    this.b = n
};
_y.iQ.prototype = {
    b: null,
    a: function(n) {
        return this.b(n)
    }
};
_y.cG = function() {};
_y.cG.c = function(n, t, i) {
    var r = null;
    t && (r = JsonParser.serialize(t.eE()));
    return new _y.jI(n, i, r)
};
_y.cG.g = function(n, t) {
    t && (n.serializedPopOutDependency = _y.cG.f(t))
};
_y.cG.d = function(n, t) {
    t.eF(JsonParser.deserialize(n.serializedPopOutContext))
};
_y.cG.f = function(n) {
    var f = _y.cG.b(n);
    var u = {};
    var r = f;
    for (var t in r) {
        var i = {
            key: t,
            value: r[t]
        };
        u[i.key] = i.value.h()
    }
    return JsonParser.serialize(u)
};
_y.cG.e = function(n) {
    return !_j.h.a(n.popOutContextSymbol)
};
_y.cG.a = function(n, t) {
    if (n.serializedPopOutDependency) {
        var o = JsonParser.deserialize(n.serializedPopOutDependency);
        var f = o;
        for (var u in f) {
            var i = {
                key: u,
                value: f[u]
            };
            var r = Type.parse(i.key);
            if (!r) throw Error.argument("DependencyType " + i.key + " not found");
            if (!_y.cG.h(r)) throw Error.argument("The pop out control only supports using dependecies that implements IPopOutDependency");
            var e = t.a(r);
            e.i(i.value)
        }
    }
};
_y.cG.b = function(n) {
    if (!n) return null;
    for (var r = {}, u = n, f = u.length, t = 0; t < f; ++t) {
        var i = u[t];
        r[Object.getType(i).getName()] = i
    }
    return r
};
_y.cG.h = function(n) {
    return n.implementsInterface(_h.ev) || Type.isInterface(n)
};
_y.bN = function() {
    _y.bN.initializeBase(this)
};
_y.bN.prototype = {
    n: function() {
        return this.eM(_y.bN.a)
    },
    p: function(n) {
        this.eK(_y.bN.a, n);
        return n
    },
    i: function() {
        return this.eM(_y.bN.b)
    },
    q: function(n) {
        this.eK(_y.bN.b, n);
        return n
    },
    o: function() {
        return this.eM(_y.bN.c)
    },
    a: function(n) {
        this.eK(_y.bN.c, n);
        return n
    }
};
_y.gV = function(n, t) {
    var i = this;
    n.w(function() {
        _a.g.L(null);
        _h.s.b(null);
        t.d(_a.el, new _a.el)
    })
};
_y.gX = function(n, t, i, r, u, f) {
    window.windowServiceEndPoint = t;
    if (r) {
        _g.k.b = new _y.et(i, n.get_mainWindowInstance(), f);
        u.a(_a.ep, new _a.ep)
    }
    window.popOutManager = n
};
_y.hd = function(n) {
    this.f = Function.createDelegate(this, this.h);
    this.e = new Sys.EventHandlerList;
    this.d = 0;
    n.b(_y.Z, this.f)
};
_y.hd.prototype = {
    d: 0,
    a: function() {
        return this.d
    },
    j: function(n) {
        if (this.d !== n) {
            this.d = n;
            var t = this.e.getHandler("ActiveUIModuleChanged");
            t && t()
        }
        return n
    },
    b: function(n) {
        this.g(n)
    },
    c: function(n) {
        this.i(n)
    },
    g: function(n) {
        this.e.addHandler("ActiveUIModuleChanged", n)
    },
    i: function(n) {
        this.e.removeHandler("ActiveUIModuleChanged", n)
    },
    h: function(n) {
        this.j(n.b.a)
    }
};
_y.bF = function() {
    _y.bF.initializeBase(this)
};
_y.bF.prototype = {
    b: function(n) {
        this.eO("Close", n)
    },
    e: function(n) {
        this.eP("Close", n)
    },
    c: function(n) {
        this.eO("Open", n)
    },
    f: function(n) {
        this.eP("Open", n)
    },
    d: function(n) {
        this.eO("OpenInTarget", n)
    },
    g: function(n) {
        this.eP("OpenInTarget", n)
    },
    a: function(n, t) {
        var i = new Array(2);
        i[0] = n;
        i[1] = t;
        this.eT("OpenInTarget", i)
    }
};
var IAlbumImage = function() {};
IAlbumImage.registerInterface("IAlbumImage");
_y.fX = function() {};
_y.fX.registerInterface("_y.fX");
_y.jU = function() {};
_y.jU.registerInterface("_y.jU");
_y.jT = function() {};
_y.jT.registerInterface("_y.jT");
_y.jj = function() {};
_y.jj.registerInterface("_y.jj");
_y.cy = function() {};
_y.cy.registerInterface("_y.cy");
_y.cj = function() {};
_y.cj.registerInterface("_y.cj");
_y.dY = function() {};
_y.dY.registerInterface("_y.dY");
_y.fW = function() {};
_y.fW.registerInterface("_y.fW");
_y.eE = function() {};
_y.eE.registerInterface("_y.eE");
var IPersonaToNABContactDiffCalculator = function() {};
IPersonaToNABContactDiffCalculator.registerInterface("IPersonaToNABContactDiffCalculator");
_y.hB = function() {};
_y.hB.registerInterface("_y.hB");
_y.hA = function(n, t) {
    this.d = t;
    this.c = n
};
_y.hA.prototype = {
    d: null,
    c: null,
    a: function(n) {
        _y.cW.a(this.c);
        n.PrimaryVmModuleType = this.c.a().a;
        var t = this;
        this.d.a(function(t) {
            t.a(n)
        });
        return !0
    }
};
_y.hC = function(n, t) {
    this.c = t;
    this.d = n
};
_y.hC.prototype = {
    c: null,
    d: null,
    a: function(n) {
        _y.cW.a(this.d);
        var t = this;
        this.c.a(function(t) {
            t.a(n)
        });
        return !0
    }
};
_y.jk = function(n) {
    this.c = n
};
_y.jk.prototype = {
    c: null,
    a: function(n) {
        var t = this;
        this.c.a(function(t) {
            t.a(n)
        });
        return !0
    }
};
_y.e = function() {};
_y.e.A = function() {
    return _fm.b.a(_fm.a.g, "wf-size-swipe", "ms-border-transparent ms-bg-transparent ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.e.bd = function() {
    return _fm.b.a(_fm.a.g, "wf-size-swipe", "ms-bcl-tp-b ms-bgc-tp-b ms-icon-font-circle", "ms-fcl-w-b")
};
_y.e.z = function() {
    return _fm.b.a(_fm.a.bo, "wf-size-swipe", "ms-border-transparent ms-bg-transparent ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.e.bc = function() {
    return _fm.b.a(_fm.a.bo, "wf-size-swipe", "ms-bcl-tp-b ms-bgc-tp-b ms-icon-font-circle", "ms-fcl-w-b")
};
_y.e.p = function() {
    return _fm.b.a(_fm.a.Trash, "wf-size-swipe", "ms-border-transparent ms-bg-transparent ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.e.be = function() {
    return _fm.b.a(_fm.a.bt, _fm.WebfontSizes.a.c, "ms-fcl-w-b")
};
_y.e.C = function() {
    return _fm.b.a(_fm.a.Trash, "wf-size-swipe", "ms-bcl-tp-b ms-bgc-tp-b ms-icon-font-circle", "ms-fcl-w-b")
};
_y.e.w = function() {
    return _fm.b.a(_fm.a.bl, "wf-size-swipe", "ms-border-transparent ms-bg-transparent ms-icon-font-circle", "ms-fcl-tp-b")
};
_y.e.Z = function() {
    return _fm.b.a(_fm.a.bl, "wf-size-swipe", "ms-bcl-tp-b ms-bgc-tp-b ms-icon-font-circle", "ms-fcl-w-b")
};
_y.e.x = function() {
    return _fm.b.b(_fm.a.bf, null, ["wf-size-swipe", "ms-border-transparent ms-bg-transparent ms-icon-font-circle", "ms-fcl-tp-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.e.ba = function() {
    return _fm.b.b(_fm.a.bf, null, ["wf-size-swipe", "ms-fcl-tp-b", "ms-fcl-w-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.e.D = function() {
    return _fm.b.a(_fm.a.h, "ms-fcl-tp-b", "wf-size-swipe")
};
_y.e.y = function() {
    return _fm.d.a("swipe_notclutter.png")
};
_y.e.bb = function() {
    return _fm.d.a("swipe_notclutter_p.png")
};
_y.e.V = function() {
    return _fm.d.a("listview_busstop_bottom.png")
};
_y.e.W = function() {
    return _fm.d.a("listview_busstop_empty.png")
};
_y.e.X = function() {
    return _fm.d.a("listview_busstop_middle.png")
};
_y.e.U = function() {
    return _fm.d.a("listview_buscheck_top.png")
};
_y.e.T = function() {
    return _fm.d.a("listview_buscheck_single.png")
};
_y.e.n = function() {
    return _y.e.i(_fm.a.en)
};
_y.e.Q = function() {
    return _y.e.i(_fm.a.em)
};
_y.e.E = function() {
    return _y.e.i(_fm.a.eC)
};
_y.e.o = function() {
    return _y.e.i(_fm.a.dl)
};
_y.e.S = function() {
    return _y.e.i(_fm.a.er)
};
_y.e.B = function() {
    return _y.e.i(_fm.a.eo)
};
_y.e.R = function() {
    return _y.e.i(_fm.a.ds)
};
_y.e.i = function(n) {
    return _fm.b.a(n, _fm.WebfontSizes.a.t)
};
_y.e.Y = function() {
    return _y.e.i(_fm.a.eN)
};
_y.e.f = function() {
    return _fm.b.a(_fm.a.c, _fm.WebfontSizes.b.d, "ms-fcl-tp-b", "ms-bcl-tp-b ms-bg-transparent ms-icon-font-circle")
};
_y.e.m = function() {
    return _fm.b.a(_fm.a.c, _fm.WebfontSizes.b.d, "ms-fcl-nt-b", "ms-bcl-nt-b ms-bg-transparent ms-icon-font-circle")
};
_y.e.b = function() {
    return _fm.b.a(_fm.a.Trash, _fm.WebfontSizes.a.b, "ms-fcl-tp-b")
};
_y.e.r = function() {
    return _fm.b.a(_fm.a.Trash, _fm.WebfontSizes.a.b, "ms-fcl-nt-b")
};
_y.e.J = function() {
    return _fm.b.a(_fm.a.ch, _fm.WebfontSizes.a.s, "ms-fcl-tp-b")
};
_y.e.M = function() {
    return _fm.b.a(_fm.a.bt, _fm.WebfontSizes.a.c, "ms-fcl-tp-b")
};
_y.e.O = function() {
    return _fm.b.b(_fm.a.bt, null, [_fm.WebfontSizes.a.c, "ms-fcl-tp-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.e.P = function() {
    return _fm.b.b(_fm.a.bt, null, [_fm.WebfontSizes.a.c, "ms-fcl-nt-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.e.t = function() {
    return _fm.b.b(_fm.a.O, null, [_fm.WebfontSizes.a.a, "ms-fcl-tp-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.e.u = function() {
    return _fm.b.b(_fm.a.bi, null, [_fm.WebfontSizes.a.b, "ms-fcl-tp-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_y.e.c = function() {
    return _fm.b.a(_fm.a.s, _fm.WebfontSizes.a.a, "ms-fcl-tp-b")
};
_y.e.N = function() {
    return _fm.b.a(_fm.a.G, _fm.WebfontSizes.a.b, "ms-fcl-tp-b")
};
_y.e.l = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.a, "ms-fcl-tp-b")
};
_y.e.L = function() {
    return _fm.b.a(_fm.a.bc, _fm.WebfontSizes.a.b, "ms-fcl-tp-b")
};
_y.e.q = function() {
    return _fm.b.a(_fm.a.Trash, _fm.WebfontSizes.a.a, "ms-fcl-tp-b")
};
_y.e.F = function() {
    return _fm.b.a(_fm.a.I, _fm.WebfontSizes.a.a, "ms-fcl-tp-b")
};
_y.e.G = function() {
    return _fm.b.a(_fm.a.I, _fm.WebfontSizes.a.a, "ms-fcl-nt-b")
};
_y.e.H = function() {
    return _fm.b.a(_fm.a.w, _fm.WebfontSizes.a.a, "ms-fcl-tp-b")
};
_y.e.I = function() {
    return _fm.b.a(_fm.a.w, _fm.WebfontSizes.a.a, "ms-fcl-nt-b")
};
_y.e.j = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.a, "ms-fcl-tp-b")
};
_y.e.s = function() {
    return _fm.b.a(_fm.a.bo, _fm.WebfontSizes.a.b, "ms-fcl-tp-b")
};
_y.e.K = function() {
    return _fm.b.a(_fm.a.g, _fm.WebfontSizes.a.b, "ms-fcl-tp-b")
};
_y.e.v = function() {
    return _fm.b.a(_fm.a.dH, _fm.WebfontSizes.a.g, "ms-fcl-nt-b")
};
_y.e.a = function() {
    return _fm.d.a("clear1x1.gif")
};
_y.e.g = function() {
    return _fm.b.b(_fm.a.bL, _fm.a.bM, ["ms-icon-font-size-15", "ms-fcl-ns-b"], null, null, null, null, null)
};
_y.e.k = function() {
    return _fm.b.b(_fm.a.bL, _fm.a.bM, ["ms-icon-font-size-15", "ms-fcl-nd-b"], null, null, null, null, null)
};
_y.e.d = function() {
    return _fm.b.b(_fm.a.bM, _fm.a.bL, ["ms-icon-font-size-15", "ms-fcl-ns-b"], null, null, null, null, null)
};
_y.e.h = function() {
    return _fm.b.b(_fm.a.bM, _fm.a.bL, ["ms-icon-font-size-15", "ms-fcl-nd-b"], null, null, null, null, null)
};
_y.e.e = function() {
    return _fm.b.a(_fm.a.a, "ms-fcl-ns-b", _fm.WebfontSizes.a.f)
};

function BootViewModelsComponent() {}
BootViewModelsComponent.$$cctor = function() {
    _a.t.a().a(BootViewModelsComponent)
};
BootViewModelsComponent.prototype = {
    b: function(n, t, i) {
        var u = i.e().a();
        var r = i.a() === "Mouse";
        var f = i.g() === "AnonymousCalendar";
        var ni = this;
        n.b(_y.hd, function() {
            return new _y.hd(n.a(_j.j))
        }).b(_a.de).a();
        var gt = this;
        n.b(_y.ga, function() {
            return new _y.ga(n.a(_a.e), n.a(_y.dC), n.c(_y.iC))
        }).a();
        var dt = this;
        n.b(_y.ea, function() {
            return new _y.ea(n.a(_y.a), n.a(_a.q), n.a(_a.cr), n.a(_a.e), n.d(_y.hL), n.d(_a.eU), i.r(), n.a(_a.o), n.a(_a.E), i.h(), n.f(_h.s), _j.m.a(), n.a(_j.j), n.a(_g.a).n().bH.InstrumentationSendIntervalSeconds)
        }).a();
        var ri = this;
        n.b(_y.dC, function() {
            return new _y.dC(n.a(_j.j))
        }).a();
        n.e(_a.dm).a();
        var ii = this;
        n.b(_y.cA, function() {
            return null
        });
        var ti = this;
        n.b(_y.cU, function() {
            return new _y.cU(n.a(_j.j), n.a(_a.dm))
        }).a();
        var kt = this;
        n.b(_bc.b, function() {
            return new _bc.b
        });
        var yt = this;
        n.b(_y.dE, function() {
            return new _y.dE(n.a(_j.j))
        }).a();
        var vt = this;
        n.b(_y.fY, function() {
            return new _y.fY(n.a(_j.j), n.a(_a.e))
        }).a();
        if (f) n.e(_y.A).b(_bc.a).a();
        else {
            var at = this;
            n.b(_y.bt, function() {
                return new _y.bt(n.a(_j.j), i.a() !== "Mouse", 6e4, n.a(_a.dm))
            }).b(_bc.a).a()
        }
        var bt = this;
        n.b(_y.c, function() {
            var i = n.a(_bc.a);
            var r = f ? i : new _y.A;
            var t = new _y.c(i, r, n.a(_y.dC), n.a(_a.z), n.d(_y.dk), n.a(_y.cU), n.a(_y.dE), n.a(_y.fY), f, function(t) {
                return n.g(t)
            }, n.a(_y.fy));
            _y.c.a = t;
            return t
        }).b(_y.a).b(_ff.a).b(_ff.o).a();
        var wt = this;
        n.b(_y.q, function() {
            return new _y.q(n.a(_y.a), n.a(_j.j), n.a(_a.e))
        }).a();
        var pt = this;
        n.b(_y.fw, function() {
            return new _y.fw(i.a(), n.a(_g.a), i.b().g(), i.b().j())
        }).a();
        var ui = this;
        n.b(_y.bf, function() {
            return new _y.bf(n.a(_y.fw), n.d(_y.V), n.a(_y.q))
        }).a();
        var yi = this;
        n.b(_y.es, function() {
            return new _y.es(n.a(_y.a), n.c(_y.is), n.d(_j.t))
        }).a();
        n.e(_y.bs).b(_y.im).a();
        var vi = this;
        n.b(_y.iM, function() {
            return new _y.iM(n.c(_y.t), n.a(_y.im))
        }).b(IMailComposeLauncher).a();
        var ai = this;
        n.b(_g.E, function() {
            return n.a(_g.a).c()
        });
        var bi = this;
        n.b(_g.bI, function() {
            return n.a(_g.a).e()
        });
        var wi = this;
        n.b(_g.a, function() {
            if (_g.a.a().S) throw Error.invalidOperation("You are trying to get an instance of the UserConfiguration object before it is loaded from the server!");
            return _g.a.a()
        }).b(_g.cg).b(_g.h).b(_ff.b);
        var pi = this;
        n.b(_g.dp, function() {
            return _g.a.a().n()
        });
        var li = this;
        n.b(_y.fy, function() {
            return new _y.fy(n.a(_j.j))
        }).a();
        var oi = this;
        n.b(_y.gV, function() {
            return new _y.gV(n.a(_y.a), n.a(_j.j))
        }).a();
        if (i.g() !== "SharedHoverCard") {
            var ei = this,
                fi = this;
            n.b(_y.j, function() {
                var f = new _a.j;
                var e = n.a(_g.bI);
                if (i.b().g()) {
                    i.b().h() ? e.bH.Calendar ? f.r(0, new _y.bj(_u.R.Io, 1, null, n.c(_y.gn))) : _y.bv.a(_u.R.Md) : i.b().m() ? f.r(0, new _y.bj(_u.R.DL, 0, n.a(_y.ez), null)) : i.b().n() ? f.r(0, new _y.bj("Discovery", 0, null, n.c(_y.hh))) : f.r(0, new _y.bj(_u.R.DL, 0, n.a(_y.dv), null));
                    if (r) {
                        var h = n.a(_g.a);
                        var o = null;
                        i.b().j() && (o = _g.fh.b(h));
                        return new _y.dw(f, n.a(_bc.a), n.a(_j.j), n.a(IOwaUserConfigurationUpdatedViewModel), n.d(_y.ee), t.a() ? n.d(_y.eE) : null, o, n.a(_y.a).c(), n.a(_a.e), n.a(_y.a), n.d(_y.K))
                    }
                    return new _y.j(f, n.a(_bc.a), n.a(_j.j), n.a(IOwaUserConfigurationUpdatedViewModel), n.d(_y.ee), t.a() ? n.d(_y.eE) : null, n.a(_y.a).c(), n.a(_a.e), n.a(_y.a), n.d(_y.gg), n.d(_y.K))
                }
                var s = _a.cZ.b(i.b());
                s.startsWith("/mail") || s.startsWith("/group") ? f.c(new _y.bj(n.a(_g.E).bH.IsBposUser ? _u.R.HK : _u.R.DL, 0, n.a(_y.dv), null)) : f.c(new _y.bj(n.a(_g.E).bH.IsBposUser ? _u.R.HK : _u.R.DL, 0, null, n.c(_y.dv)));
                f.c(new _y.bj("GroupMail", 0, null, n.c(_y.cp), !1, !0));
                r && (u.bx().Enabled || u.bo().Enabled) && f.c(new _y.bj(_u.R.Rl, 10, null, n.c(_y.gm)));
                e.bH.Calendar && f.c(new _y.bj(_u.R.Io, 1, null, n.c(_y.gn)));
                if (e.bH.Contacts) {
                    f.c(new _y.bj(_u.R.Fe, 2, null, n.c(_y.iz)));
                    f.c(new _y.bj("GroupPeople", 2, null, n.c(_y.id), !1, !0))
                }
                r && e.bH.Tasks && f.c(new _y.bj(_u.R.FD, 3, null, n.c(_y.iG)));
                r && u.kz().Enabled && f.c(new _y.bj(_u.R.Cb, 9, null, n.c(_y.gs)));
                r && f.c(new _y.bj("GroupFiles", 11, null, n.c(_y.eT), !1, !0));
                return new _y.j(f, n.a(_bc.a), n.a(_j.j), n.a(IOwaUserConfigurationUpdatedViewModel), n.d(_y.ee), t.a() ? n.d(_y.eE) : null, n.a(_y.a).c(), n.a(_a.e), n.a(_y.a), n.d(_y.gg), n.d(_y.K))
            }).a().c(function(t) {
                var i = n.a(_y.bA);
                i && t.bP(i)
            })
        }
        var ci = this;
        n.b(_y.bv, function() {
            return i.b().g() ? _y.bv.b(i.b()) : null
        }).a();
        r && u.bc().Enabled && !i.j() && _y.bg.c(n.d(_y.gC));
        if (i.g() !== "SharedHoverCard") {
            var hi = this;
            n.b(_y.s, function() {
                return _y.ho.a(n.a(_y.a), n.a(_g.a), n.a(_g.E), n.a(_a.q), n.a(_j.j), n.a(_a.e), n.a(_a.S), n.a(_y.eu), n.d(_y.bp), n.c(_y.eW), n.c(_y.bC), n.a(_y.G), n.a(_bc.a), n.a(_a.z), n.c(_y.eY), n.d(_h.T), n.d(_j.t), n.d(_y.fh), n.c(_y.gD), n.c(_y.gN))
            }).a();
            var si = this;
            n.b(_y.dv, function() {
                return _y.ho.b(n.a(_y.a), n.a(_g.cg), n.a(_y.s), n.d(_y.dS), n.a(_y.gz), n.c(_h.n), n.a(_j.j), n.a(_a.q), n.a(_bc.a), n.a(_g.a), n.a(_g.E), n.a(_a.r), n.d(_y.dj), n.d(_y.fe), n.d(_y.t), n.a(IItemReadingPaneContextFactory), n.c(_h.bA), new _y.D(n.a(_y.a), n.a(_g.h), n.d(_bc.z), n.a(_a.e)), n.a(_y.bf), n.a(_j.v), n.a(_bc.b), n.a(_y.bv), n.a(_y.eu), n.d(_y.bp), n.d(_y.gy), n.a(_a.e), n.a(_a.x), n.a(_y.gK), n.a(IConversationItemPartsFactory), n.d(_y.cC), n.f(_a.S), n.a(_y.hg), n.a(_y.dJ), n.c(_y.iJ), n.c(_y.bC), n.c(_y.hX), n.a(_y.G), i.b(), n.a(_y.q), i.a() === "TouchNarrow" ? n.a(IMailModuleRevealMenuViewModel) : null, n.a(_a.z), i.a() === "TouchNarrow" ? n.a(_y.r) : null, n.d(_y.ik), n.d(_bc.k), n.c(_y.hO), n.c(_y.eY), n.d(_y.fh), n.c(_y.gD), n.c(_h.bX), n.d(_y.gM), n.d(_j.t), n.d(_h.T), n.c(_y.cS), n.d(_y.hY), n.d(_y.go), n.c(_y.cw), n.d(_y.gL), n.d(_y.gx), n.c(_y.gr), n.d(_y.K), n.d(_y.hQ), n.d(_y.iF), n.c(_y.gN))
            });
            var p = this;
            n.b(_y.ez, function() {
                return new _y.ez(n.a(_y.a), n.a(_g.cg), n.d(_y.dS), n.a(_y.gz), n.c(_h.n), n.a(_j.j), n.a(_a.q), n.a(_bc.a), n.a(_g.a), n.a(_g.E), n.a(_a.r), n.d(_y.dj), n.d(_y.fe), n.d(_y.t), n.a(IItemReadingPaneContextFactory), n.c(_h.bA), new _y.D(n.a(_y.a), n.a(_g.h), n.d(_bc.z), n.a(_a.e)), n.a(_y.bf), n.a(_j.v), n.a(_bc.b), n.a(_y.bv), n.a(_y.eu), n.d(_y.bp), n.d(_y.gy), n.a(_y.gK), n.a(IConversationItemPartsFactory), n.d(_y.cC), n.f(_a.S), n.a(_y.dJ), n.a(_y.q), n.c(_y.eY), n.d(_y.gM), n.d(_j.t), n.d(_h.T), n.c(_y.cS), n.d(_y.go), n.c(_y.cw), n.d(_y.gL), n.d(_y.gx), n.c(_y.gr), n.d(_y.K))
            })
        }
        var y = this;
        n.b(_y.H, function() {
            var t = n.a(_a.e);
            return new _y.H(n.a(_g.E), n.a(_a.q))
        }).a();
        var v = this;
        n.b(_y.hF, function() {
            return new _y.hF(n.a(_y.H))
        }).b(IBposUrlProvider).a();
        if (i.a() !== "Mouse") {
            var k = this;
            n.b(_y.bA, function() {
                return null
            })
        }
        var b = this;
        n.b(_y.iQ, function() {
            return new _y.iQ(function(t) {
                return n.g(t)
            })
        }).b(_y.iA).a();
        if (i.j()) {
            var o = this;
            n.b(_a.bp, function() {
                return _a.bp.c(n.a(_a.dX).a(n.a(_y.L).get_mainWindowInstance()))
            }).a();
            var e = this;
            n.b(_y.L, function() {
                return window.opener.popOutManager
            }).a();
            var l = this;
            n.b(_y.bE, function() {
                return new _y.bE(_h.d.a(), n.c(_h.P))
            }).b(_a.eX).a()
        } else {
            var w = this;
            n.b(_a.bp, function() {
                return _a.bp.c(n.a(_a.dX).a(window.self))
            }).a();
            var a = this;
            n.b(_y.cs, function() {
                return new _y.cs(n.a(_y.a), window.self)
            }).b(_y.L).b(_h.dG).a();
            var s = this;
            _dh.e(n.b(_y.fC, function() {
                return new _y.fC(n.a(_a.q), _h.d.a(), n.c(_h.P), n.a(_a.bp), n.a(_h.dG), n.a(_y.L), n.c(_y.io), n.f(_g.h), n.a(_g.ck), n.a(_j.j), n.a(_no.c), n.c(_y.dX), n.d(_j.t), n.a(_a.e))
            }).b(_a.eX).a(), n)
        }
        var c = this;
        n.b(_y.gX, function() {
            return new _y.gX(n.a(_y.L), n.a(_a.eX), n.a(_y.a), i.j(), n.a(_j.j), n.d(_j.t))
        }).a();
        var h = this;
        n.b(_y.fN, function() {
            return new _y.fN(n.a(_no.c), n.a(_a.fB), n.a(IPageDataPayloadLocalStorage), n.a(_j.j), n.a(_j.o))
        }).b(IOwaUserConfigurationUpdatedViewModel);
        var d = this;
        n.b(_y.fZ, function() {
            return new _y.fZ(n.a(_a.z).a(), n.a(_a.e))
        }).a();
        var st = this;
        n.b(_y.fI, function() {
            return i.f() ? new _y.fI(n.a(_a.S), n.a(_a.e), n.a(_y.a), n.a(_y.j), n.a(_j.j), r ? n.c(_y.dP) : null, n.a(_g.cg), n.c(_y.hw), n.c(_y.fP), n.c(_y.fO), n.c(_y.hv), n.c(_y.hq), n.c(_y.eC), n.c(_y.hr), n.c(_y.hx), n.c(_y.hs), n.c(_y.ht), n.c(_y.hu), n.c(_y.bU), n.a(_a.I)) : null
        }).a();
        var ot = this;
        n.b(_y.hg, function() {
            return new _y.iZ(n.a(_y.dE), n.a(_g.a), n.a(_y.a), n.a(_j.j), n.c(_h.n), n.a(_a.q), n.a(_a.e), n.d(_h.T), n.d(_j.t))
        }).a();
        var et = this;
        n.b(_y.gj, function() {
            return null
        });
        var lt = this;
        n.b(_y.gB, function() {
            return null
        });
        var ct = this;
        n.b(_y.fd, function() {
            return null
        });
        var ht = this;
        n.b(_y.G, function() {
            return f ? null : new _y.G(n.a(_y.a), n.c(_y.fi), n.a(_j.j), n.a(_y.bt), n.a(_a.S), n.a(_y.bW), n.c(_y.eD))
        }).a();
        var ft = this;
        n.b(_y.eu, function() {
            return new _y.eu(n.c(_y.hT), n.a(_a.q))
        }).a();
        var tt = this;
        n.b(_y.bW, function() {
            return new _y.bW(n.a(_a.q), n.a(_j.j), n.a(_a.x))
        }).a();
        var nt = this;
        n.b(_y.hc, function() {
            var t = new _j.q;
            if (i.f() && !u.ck().Enabled && !u.i().Enabled) {
                if (i.g() === "PAL" || i.g() === "Standard") {
                    var s;
                    t.c((s = new _y.hc.a, s.b = 4, s.a = "readingpane", s));
                    if (u.eW().Enabled && i.a() === "TouchNarrow") {
                        var h;
                        t.c((h = new _y.hc.a, h.b = 0, h.a = "textboys", h))
                    }
                    var o;
                    t.c((o = new _y.hc.a, o.b = 4, o.a = "findpeople", o))
                }
                if (i.g() === "Standard" && r) {
                    var f;
                    t.c((f = new _y.hc.a, f.b = 0, f.a = "mailcompose", f))
                }
                var e;
                t.c((e = new _y.hc.a, e.b = 4, e.a = "deferredboot", e))
            }
            return new _y.hc(n.a(_j.I), n.a(_j.j), t)
        }).a();
        var g = this;
        n.b(_j.cc.$$(_y.ca), function() {
            return n.c(_y.ca)
        }).a();
        var ut = this;
        n.b(_j.cc.$$(_y.dI), function() {
            return n.c(_y.dI)
        }).a();
        n.e(_y.jB).b(IItemReadingPaneContextFactory).a();
        var rt = this;
        n.b(_j.cc.$$(_y.cy), function() {
            return n.c(_y.cy)
        }).a();
        var it = this;
        n.b(_j.cc.$$(_y.cj), function() {
            return n.c(_y.cj)
        }).a()
    },
    a: function() {
        return [new _j.y(_y.fZ, 0, -1), new _j.y(_y.gX, 0, 17), new _j.y(_y.hd, 1, 9), new _j.y(_y.fI, 1, 9), new _j.y(_y.gV, 2, 9), new _j.y(_y.hc, 0, 9)]
    }
};
_y.jf = function() {};
_y.jf.registerInterface("_y.jf");
var IConflictingMeetingsViewModel = function() {};
IConflictingMeetingsViewModel.registerInterface("IConflictingMeetingsViewModel");
_y.jg = function() {};
_y.jg.registerInterface("_y.jg");
var IMeetingMessageViewModel = function() {};
IMeetingMessageViewModel.registerInterface("IMeetingMessageViewModel");
_y.fQ = function() {};
_y.fQ.registerInterface("_y.fQ");
var IMeetingRequestMessageViewModel = function() {};
IMeetingRequestMessageViewModel.registerInterface("IMeetingRequestMessageViewModel");
var IMeetingResponseViewModel = function() {};
IMeetingResponseViewModel.registerInterface("IMeetingResponseViewModel");
_y.jh = function() {};
_y.jh.registerInterface("_y.jh");
_y.hy = function() {};
_y.hy.registerInterface("_y.hy");
_y.cY = function() {};
_y.cY.d = function(n) {
    return _j.h.c(_u.R.Pn, n)
};
_y.cY.c = function(n) {
    return _j.h.c(_u.R.QJ, n)
};
_y.cY.b = function(n, t) {
    var i;
    i = t !== -1 ? t ? _u.R.FN : _u.R.Ov : n.a() !== "recoverableitemsdeletions" ? String.format(_u.R.Dt, _g.j.c(n)) : null;
    return i
};
_y.cY.a = function(n) {
    var t;
    t = n !== -1 ? String.format(_u.R.Vy, n ? _u.R.FU : _u.R.Lo) : _u.R.UA;
    return t
};
_y.jP = function() {};
_y.jP.registerInterface("_y.jP");
_y.hp = function() {};
_y.hp.registerInterface("_y.hp");
_y.jO = function() {};
_y.jO.registerInterface("_y.jO");
_y.jQ = function() {};
_y.jQ.registerInterface("_y.jQ");
_y.eB = function() {};
_y.eB.registerInterface("_y.eB");
_y.bY = function() {};
_y.bY.registerInterface("_y.bY");
_y.cX = function() {};
_y.cX.registerInterface("_y.cX");
_y.r = function() {};
_y.r.registerInterface("_y.r");
var ICalendarModuleRevealMenuViewModel = function() {};
ICalendarModuleRevealMenuViewModel.registerInterface("ICalendarModuleRevealMenuViewModel");
_y.hk = function() {};
_y.hk.registerInterface("_y.hk");
var IMailModuleRevealMenuViewModel = function() {};
IMailModuleRevealMenuViewModel.registerInterface("IMailModuleRevealMenuViewModel");
var IPeopleModuleRevealMenuViewModel = function() {};
IPeopleModuleRevealMenuViewModel.registerInterface("IPeopleModuleRevealMenuViewModel");
var IRevealMenuViewModel = function() {};
IRevealMenuViewModel.registerInterface("IRevealMenuViewModel");
_y.hh = function() {};
_y.hh.registerInterface("_y.hh");
_y.K = function() {};
_y.K.registerInterface("_y.K");
_y.jN = function() {};
_y.jN.prototype = {
    None: 0,
    Inference: 1,
    FocusedInbox: 2
};
_y.jN.registerEnum("_y.jN", !0);
var ISurvey = function() {};
ISurvey.registerInterface("ISurvey");
_y.hn = function() {};
_y.hn.registerInterface("_y.hn");
_y.hm = function() {};
_y.hm.registerInterface("_y.hm");
_y.bQ = function() {};
_y.bQ.prototype = {
    Unknown: 0,
    One: 1,
    Two: 2,
    Three: 3,
    Four: 4,
    Five: 5
};
_y.bQ.registerEnum("_y.bQ", !1);
_y.jM = function() {};
_y.jM.registerInterface("_y.jM");
_y.bA = function() {};
_y.bA.registerInterface("_y.bA");
_y.hi = function() {};
_y.hi.registerInterface("_y.hi");
_y.bz = function() {};
_y.bz.registerInterface("_y.bz");
_y.fJ = function() {};
_y.fJ.registerInterface("_y.fJ");
_y.fL = function() {};
_y.fL.registerInterface("_y.fL");
_y.fK = function() {};
_y.fK.registerInterface("_y.fK");
_y.hj = function() {};
_y.hj.registerInterface("_y.hj");
var IUserThemesMenuItemDataContext = function() {};
IUserThemesMenuItemDataContext.registerInterface("IUserThemesMenuItemDataContext");
_y.hl = function() {};
_y.hl.registerInterface("_y.hl");
_y.cv = function() {};
_y.cv.registerInterface("_y.cv");
var IOwaUserConfigurationUpdatedViewModel = function() {};
IOwaUserConfigurationUpdatedViewModel.registerInterface("IOwaUserConfigurationUpdatedViewModel");
_y.dX = function() {};
_y.dX.registerInterface("_y.dX");
_y.hg = function() {};
_y.hg.registerInterface("_y.hg");
_y.ey = function() {};
_y.ey.registerInterface("_y.ey");
_y.dv = function() {};
_y.dv.registerInterface("_y.dv");
_y.bd = function() {};
_y.jd = function(n, t, i, r) {
    this.c = n;
    this.e = t;
    this.f = i;
    this.d = r
};
_y.jd.prototype = {
    c: null,
    e: null,
    f: null,
    d: !1,
    a: function(n) {
        if (this.f.a()) {
            if (!this.d) {
                _a.D.a(_u.R.MI, 1);
                return !1
            }
            if (this.e.a() !== "Mouse") {
                _a.D.a(_u.R.NS, 1);
                return !1
            }
        }
        var t = this;
        this.c.a(function(t) {
            t.a(n)
        });
        return !0
    }
};
_y.iX = function(n) {
    this.c = n
};
_y.iX.prototype = {
    c: null,
    a: function(n) {
        var t = this;
        this.c.a(function(t) {
            t.a(n)
        });
        return !0
    }
};
_y.ch = function() {};
_y.iT = function() {
    this.c = Function.createDelegate(this, this.a)
};
_y.iT.prototype = {
    a: function(n) {
        return !0
    }
};
_y.fH = function(n) {
    this.c = n
};
_y.fH.prototype = {
    c: null,
    a: function(n) {
        var t = this;
        this.c.a(function(t) {
            t.a(n)
        });
        return !0
    }
};
_y.iU = function(n) {
    this.c = n
};
_y.iU.prototype = {
    c: null,
    a: function(n) {
        var t = this;
        this.c.a(function(t) {
            t.a(n)
        });
        return !0
    }
};
_y.hf = function(n, t) {
    _j.s.a(t, "featureManager");
    this.d = n;
    this.g = t
};
_y.hf.prototype = {
    g: null,
    d: null,
    c: null,
    i: function(n, t) {
        t.val = n.group;
        return _a.J.a(t.val)
    },
    h: function(n, t) {
        var i = n.module;
        t.val = 0;
        if (i) try {
            t.val = _j.u.b(_a.M, i);
            return !0
        } catch (r) {
            return !1
        }
        return !1
    },
    a: function(n) {
        var c = "UrlNavigationToGroupCalendar";
        var r = !0;
        var t;
        var o, s;
        (s = this.h(n, o = {
            val: t
        }), t = o.val, s) ? t === 1 && (this.c = _a.b.b(_y.hf.a, c, !1, null)): t = 0;
        var u;
        var e, f;
        r = !!(r & (f = this.i(n, e = {
            val: u
        }), u = e.val, f));
        var i = this;
        var h = function() {
            if (r) {
                i.d.a(_y.bk, i.e(n, t, u));
                if (t === 1) {
                    _a.b.a(i.c);
                    i.c = null
                }
            }
        };
        this.d.a(_y.p, new _y.p(t, h, !1, !0, !0, r, !1));
        return !0
    }
};
_y.cu = function(n, t) {
    _y.cu.initializeBase(this, [n, t])
};
_y.cu.b = function() {
    _y.cu.a || (_y.cu.a = _y.cu.c());
    return _y.cu.a
};
_y.cu.d = function(n, t) {
    t.val = 0;
    if (_a.bF.toString(n) in _y.cu.b()) {
        t.val = _y.cu.b()[_a.bF.toString(n)];
        return !0
    }
    return !1
};
_y.cu.c = function() {
    var n = {};
    n[_a.bF.toString(4)] = 0;
    n[_a.bF.toString(5)] = 0;
    n[_a.bF.toString(6)] = 0;
    return n
};
_y.cu.prototype = {
    h: function(n, t) {
        var i;
        t.val = 0;
        var u, r;
        return (r = this.f(n, u = {
            val: i
        }), i = u.val, r) ? _y.cu.d(i, t) : !1
    },
    f: function(n, t) {
        var i = n.action;
        t.val = 0;
        if (i) try {
            t.val = _j.u.b(_a.bF, i);
            return !0
        } catch (r) {
            return !1
        }
        return !1
    },
    e: function(n, t, i) {
        var r;
        var e = null;
        var f, u;
        if (u = this.f(n, f = {
                val: r
            }), r = f.val, u) {
            var o = this;
            e = function(n) {
                n.c(r)
            }
        }
        return new _y.bk(t, i, e, null, null)
    }
};
_y.cW = function(n, t) {
    _j.s.a(n, "folderMappings");
    _j.s.a(t, "primaryViewModel");
    this.d = n;
    this.c = t
};
_y.cW.a = function(n) {
    var i = new _y.eA(n);
    var t = {};
    t.module = _a.M.toString(0);
    i.a(t)
};
_y.cW.prototype = {
    d: null,
    c: null,
    a: function(n) {
        _j.s.a(n, "arguments");
        _y.cW.a(this.c);
        this.e(n.fid, n.readMode);
        return !0
    },
    e: function(n, t) {
        var i = this.c.c;
        if (i.m.h) {
            if (n !== "search") {
                i.H.b && i.H.q();
                if (i.h.b.n.t) return;
                var r = this.d.nameToId(decodeURIComponent(n));
                r && r !== "none" || (r = new _g.m(decodeURIComponent(n)));
                var e = _h.a.b("msgfolderroot");
                var u = e.f(r);
                if (!u) return;
                if (i.o && u.bH.FolderId.Id !== i.o.bH.FolderId.Id) {
                    var f = _a.b.b(_a.a.p, "DeepLinkingInMailModule", !1, null);
                    i.ld(r);
                    _a.b.a(f)
                }
            } else if (!i.H.b || t === "rp" && !i.C().d()) {
                var o = this;
                i.H.d(function(n) {
                    i.mb()
                });
                return
            }
            i.pm(!!i.f.e() && t === "rp")
        }
    }
};
_y.cJ = function(n, t) {
    _y.cJ.a = n;
    this.c = t
};
_y.cJ.c = function(n, t, i) {
    _y.cJ.a.a(function(r) {
        r.g(n, t, i)
    })
};
_y.cJ.b = function() {
    try {
        return window.self !== window.top
    } catch (n) {
        return !0
    }
};
_y.cJ.prototype = {
    d: !1,
    c: null,
    a: function(n) {
        if (this.d) return !0;
        var f = _a.b.b(_a.a.p, "MailComposeDeepLink", !1, null);
        this.d = !0;
        var t = 1;
        var r = _y.cJ.b();
        window.opener || r ? t = 3 : this.c.c && (t = 0);
        var i = null;
        if (t === 1) {
            _y.cW.a(this.c);
            i = this.c.c
        }
        var u = this;
        _y.cJ.a.a(function(e) {
            e.c(t);
            e.d(r);
            e.e(f);
            e.f(i);
            e.a(n);
            u.d = !1
        });
        return !0
    }
};
_y.iY = function(n) {
    this.c = n
};
_y.iY.prototype = {
    c: null,
    a: function(n) {
        var t = this;
        this.c.a(function(t) {
            t.a(n)
        });
        return !0
    }
};
_y.y = function(n, t) {
    this.a = n;
    this.b = t
};
_y.y.prototype = {
    a: null,
    b: null,
    c: function(n, t, i, r, u, f, e, o, s) {
        this.b.m(n, t, i, r, u, f, e, o, s);
        this.a.b(this.b.c)
    }
};
_y.z = function(n, t, i, r, u, f, e, o, s, h, c) {
    this.i = n;
    this.d = t;
    this.a = i;
    this.k = r;
    this.e = u;
    this.h = f;
    this.g = e;
    this.l = o;
    this.b = s;
    this.f = h;
    this.j = c
};
_y.z.prototype = {
    c: !1,
    i: 0,
    d: 0,
    k: !1,
    e: !1,
    h: !1,
    a: null,
    g: !1,
    b: null,
    l: !1,
    f: !1,
    j: !1,
    m: function(n, t, i, r, u, f, e, o, s) {
        var h = !0;
        switch (this.i) {
            case 1:
                h = !!(h & (n > 0 || u));
                break;
            case 2:
                h = !!(h & n === 1);
                break;
            case 4:
                h = !!(h & (!n && !e));
                break;
            case 3:
                h = !!(h & !e);
                break
        }
        this.k || (h = !!(h & t !== 4));
        this.e && (h = !!(h & !o));
        if (i.bH.FolderId) {
            this.h && (h = !!(h & _h.l.b(i.bH.FolderId)));
            if (this.a) switch (this.d) {
                case 1:
                    h = !!(h & Array.contains(this.a, i.bH.FolderId.Id));
                    break;
                case 2:
                    h = !!(h & !Array.contains(this.a, i.bH.FolderId.Id));
                    break
            }
        }
        this.g && (h = !!(h & r));
        this.l || (h = !!(h & !u));
        this.b && (h = !!(h & this.b()));
        this.f && (h = !!(h & !f));
        this.j || (h = !!(h & !s));
        this.c = h
    }
};
_y.o = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt, kt, dt, gt, ni, ti) {
    this.cW = Function.createDelegate(this, this.er);
    this.cR = Function.createDelegate(this, this.ed);
    this.cX = Function.createDelegate(this, this.dv);
    this.cQ = Function.createDelegate(this, this.ec);
    this.cS = Function.createDelegate(this, this.ee);
    this.bD = Function.createDelegate(this, this.eb);
    this.bC = Function.createDelegate(this, this.dn);
    this.cU = Function.createDelegate(this, this.ep);
    this.bJ = Function.createDelegate(this, this.eq);
    this.cT = Function.createDelegate(this, this.eo);
    this.cM = Function.createDelegate(this, this.dD);
    this.cK = Function.createDelegate(this, this.dB);
    this.cJ = Function.createDelegate(this, this.dz);
    this.cO = Function.createDelegate(this, this.dF);
    this.cL = Function.createDelegate(this, this.dC);
    this.cV = Function.createDelegate(this, this.du);
    this.cN = Function.createDelegate(this, this.dE);
    this.bG = Function.createDelegate(this, this.eg);
    this.bI = Function.createDelegate(this, this.ej);
    this.bH = Function.createDelegate(this, this.eh);
    _y.o.initializeBase(this);
    this.ca = n;
    this.i = t;
    this.e = i;
    this.s = this.dd() ? 0 : -1;
    this.bS = r;
    this.bo = _y.o.a(u, "N");
    this.cx = _y.o.a(f, "M");
    this.bY = _y.o.a(e, "D");
    this.cH = _y.o.a(o, "SD");
    this.br = _y.o.a(s, "R");
    this.bq = _y.o.a(h, "RA");
    this.cd = _y.o.a(c, "F");
    this.ck = _y.o.a(l, "MC");
    this.bK = _y.o.a(a, "A");
    this.bZ = _y.o.a(v, "EF");
    this.cs = _y.o.a(y, "MR");
    this.co = _y.o.a(p, "MAR");
    this.cu = _y.o.a(w, "MU");
    this.cr = _y.o.a(b, "MP");
    this.ct = _y.o.a(k, "MUP");
    this.cb = _y.o.a(d, "FL");
    this.cI = _y.o.a(g, "UF");
    this.bU = _y.o.a(nt, "CF");
    this.bW = _y.o.a(tt, "CR");
    this.cp = _y.o.a(it, "MAC");
    this.cq = _y.o.a(rt, "MANC");
    this.bh = _y.o.a(ut, "MAJ");
    this.bj = _y.o.a(ft, "MAP");
    this.Y = _y.o.a(et, "MFHBH");
    this.bx = _y.o.a(ot, "USUB");
    this.bP = _y.o.a(st, "BS");
    this.cj = _y.o.a(ht, "IG");
    this.bQ = _y.o.a(ct, "CIG");
    this.cC = _y.o.a(lt, "P");
    this.cE = _y.o.a(at, "STON");
    this.cG = _y.o.a(ni, "LTIR");
    this.cw = _y.o.a(yt, "MO");
    this.cv = _y.o.a(vt, "MF");
    this.bV = _y.o.a(pt, "CFO");
    this.cA = kt;
    this.cD = _y.o.a(wt, "RM");
    this.cc = bt;
    this.S = ti;
    this.k = dt;
    this.A = gt;
    if (t) {
        this.C = t.a().J().Enabled;
        var ii = this.C;
        this.Q = ii ? 1 : 0;
        this.cn = this.i.a().dn().Enabled
    }
    this.be = r.l();
    _h.A.a().k(this.bH);
    i.a().apcl("IsReplyAllTheDefaultResponse", this.bI);
    i.a().apcl("ShowInferenceUiElements", this.bG)
};
_y.o.b = function(n) {
    var t = _a.b.b(_y.o.c, "MailCommandingBarAction", !1, null);
    t.m = n;
    return t
};
_y.o.a = function(n, t) {
    return n ? new _j.w(function() {
        _y.o.d(n, t)
    }, _y.o.c, n, "CanExecute", function() {
        return n.b
    }) : null
};
_y.o.d = function(n, t) {
    _a.b.g("MCB");
    var i = _y.o.b(t);
    n.a();
    _a.b.a(i)
};
_y.o.prototype = {
    ca: null,
    i: null,
    e: null,
    bS: null,
    k: null,
    bo: null,
    cx: null,
    bY: null,
    cH: null,
    br: null,
    bq: null,
    cd: null,
    ck: null,
    bK: null,
    cD: null,
    cs: null,
    co: null,
    cu: null,
    cr: null,
    ct: null,
    cb: null,
    cI: null,
    bU: null,
    bW: null,
    cp: null,
    cq: null,
    bh: null,
    bj: null,
    Y: null,
    bx: null,
    bP: null,
    cj: null,
    bQ: null,
    cC: null,
    cE: null,
    cc: null,
    cG: null,
    l: null,
    cv: null,
    cw: null,
    bV: null,
    S: null,
    m: null,
    cA: null,
    bZ: null,
    x: null,
    A: null,
    cz: null,
    cB: null,
    cy: null,
    n: null,
    f: null,
    y: null,
    V: null,
    z: null,
    M: null,
    bs: null,
    bl: null,
    H: null,
    bn: null,
    bk: null,
    bm: null,
    X: null,
    bw: null,
    U: null,
    T: null,
    bf: null,
    bi: null,
    bc: null,
    bp: null,
    bt: null,
    bv: null,
    P: null,
    O: null,
    W: null,
    L: null,
    G: null,
    K: null,
    I: null,
    N: null,
    r: null,
    p: null,
    R: null,
    a: null,
    g: 0,
    h: null,
    d: null,
    j: 0,
    c: null,
    w: null,
    bg: 0,
    bR: !1,
    be: !1,
    cF: !1,
    B: !1,
    o: !1,
    v: !1,
    D: !1,
    E: !1,
    C: !1,
    cn: !1,
    bN: !1,
    cm: !1,
    s: 0,
    Q: 0,
    bu: function(n) {
        if (this.n !== n) {
            this.n = n;
            this.by("CommandingBar")
        }
        return n
    },
    bb: function() {
        return this.u().a.g()
    },
    dX: function() {
        return this.dk().a.g()
    },
    ba: function() {
        return this.t().a.g()
    },
    el: function(n) {
        this.l = n;
        this.l && (this.l = _y.o.a(n, "NG"));
        if (this.m) {
            this.m.z(this.l);
            this.m.a(!this.l)
        }
        return n
    },
    dq: function(n) {
        if (this.B !== n) {
            this.B = n;
            this.by("IsComposeCommandingBar")
        }
        return n
    },
    ef: function(n, t) {
        if (_y.g.isInstanceOfType(n) && this.B) {
            var i = n;
            i.i(t)
        }
    },
    dj: function() {
        if (!this.y) {
            var t;
            var r = new _fm.c(_u.R.M, _y.e.f(), this.bo, !1, null, _u.R.EW);
            r.l(_u.R.EW);
            var u = new _fm.c(_u.R.UY, null, this.bo, !1, null, _u.R.EW);
            u.l(_u.R.EW);
            var n = [u];
            if (this.e.e().bH.Calendar) {
                var i = new _fm.c(_u.R.QB, null, this.cx, !1, null, _u.R.Fy);
                i.l(_u.R.Fy);
                n.push(i)
            }
            this.m = new _fm.c(_u.R.Hk, null, this.l, !1, null, _u.R.TX);
            this.m.l(_u.R.TX);
            this.m.a(!this.l);
            n.push(this.m);
            var e = this;
            var f = new _fm.p(n, r, _u.R.u, _u.R.HF, 0, function(n) {
                if (n) {
                    var t = _y.o.b("NI");
                    _a.b.a(t)
                }
            }, !0);
            t = f;
            this.y = new _y.y(t, new _y.z(0, 0, null, !0, !1, !1, !1, !0, null, !1, !1))
        }
        return this.y
    },
    cf: function() {
        this.V || (this.V = new _y.y(new _fm.f(this.bY, _u.R.Ck, _y.e.b(), 0, _u.R.Da, _y.e.r(), !1, !1, !1, !1, this.cH), new _y.z(1, 0, null, !0, !1, !1, !1, !0, null, !1, !0)));
        return this.V
    },
    dk: function() {
        this.z || (this.z = new _y.y(new _fm.t(_u.R.LK, this.cN, 0), new _y.z(0, 2, [this.b("sentitems"), this.b("drafts"), this.b("deleteditems"), this.b("junkemail")], !1, !0, !0, !1, !1, this.cV, !1, !1)));
        return this.z
    },
    u: function() {
        if (!this.I) {
            var t = new _fm.l(_u.R.Ku, this.cL, 0, _u.R.Pi, !1, !1, null, null, !1, this.cO);
            t.n = "SearchableContextMenuView";
            var n = this;
            this.I = new _y.y(t, new _y.z(1, 0, null, !1, !1, !1, !1, !1, function() {
                return n.c.b ? !0 : n.bR
            }, !1, !1))
        }
        return this.I
    },
    da: function() {
        this.N || (this.N = new _y.y(new _fm.l(_u.R.OG, this.cJ, 1, _u.R.OG, !1, !1, null, null, !1, null), new _y.z(1, 0, null, !1, !0, !1, !1, !1, null, !1, !1)));
        return this.N
    },
    t: function() {
        this.r || (this.r = new _y.y(new _fm.l(_u.R.Ja, this.cK, this.Q, _u.R.UI, !1, !1, null, null, !1, this.cM), new _y.z(1, 0, null, !1, !0, !1, !1, !1, null, !1, !1)));
        return this.r
    },
    ci: function() {
        if (!this.p) {
            this.p = new _y.y(new _fm.f(_y.o.a(new _j.g(_h.A.a().i, _y.o.c), "U"), _u.R.KE, _y.e.O(), 0, _u.R.KE, _y.e.P(), !0, !0, this.be, !1, null), new _y.z(0, 0, null, !0, !1, !1, !1, !1, null, !1, !1));
            this.p.a.c(_h.A.a().g())
        }
        return this.p
    },
    cZ: function() {
        this.M || (this.M = new _y.y(new _fm.f(this.bK, _u.R.CC, _y.e.J(), 0, _u.R.PZ, null, !1, !1, !1, !1, null), new _y.z(1, 2, null, !1, !0, !1, !1, !1, this.cT, !1, !1)));
        return this.M
    },
    dU: function() {
        this.bs || (this.bs = new _y.y(new _fm.f(this.cD, _u.R.TH, _y.e.M(), 0, _u.R.Ct, null, !1, !1, !1, !1, null), new _y.z(1, 1, [this.b("deleteditems"), this.b("recoverableitemsdeletions")], !1, !1, !1, !1, !1, null, !1, !0)));
        return this.bs
    },
    df: function() {
        this.H || (this.H = new _y.y(new _fm.f(this.co, _u.R.GI, _y.e.s(), 0, _u.R.Fl, null, !1, !1, !1, !1, null), new _y.z(4, 0, null, !0, !1, !1, !1, !0, null, !0, !1)));
        return this.H
    },
    dh: function() {
        this.bl || (this.bl = new _y.y(new _fm.f(this.cs, _u.R.Ox, _y.e.s(), 1, _u.R.GM, null, !1, !1, !1, !1, null), new _y.z(1, 0, null, !0, !1, !1, !1, !0, null, !0, !1)));
        return this.bl
    },
    di: function() {
        this.bn || (this.bn = new _y.y(new _fm.f(this.cu, _u.R.Ti, null, 1, _u.R.BV, null, !1, !1, !1, !1, null), new _y.z(1, 0, null, !0, !1, !1, !1, !0, null, !1, !1)));
        return this.bn
    },
    dQ: function() {
        this.bk || (this.bk = new _y.y(new _fm.f(this.cr, _u.R.Ke, null, 1, _u.R.TI, null, !1, !1, !1, !1, null), new _y.z(1, 2, [this.b("drafts"), this.b("sentitems"), this.b("clutter"), this.b("junkemail"), this.b("deleteditems")], !1, !0, !0, !1, !1, this.bJ, !1, !1)));
        return this.bk
    },
    dR: function() {
        this.bm || (this.bm = new _y.y(new _fm.f(this.ct, _u.R.LO, null, 1, _u.R.Nj, null, !1, !1, !1, !1, null), new _y.z(1, 2, [this.b("drafts"), this.b("sentitems"), this.b("clutter"), this.b("junkemail"), this.b("deleteditems")], !1, !0, !0, !1, !1, this.bJ, !1, !1)));
        return this.bm
    },
    dM: function() {
        this.X || (this.X = new _y.y(new _fm.f(this.cb, _u.R.VQ, null, 1, _u.R.QK, null, !1, !1, !1, !1, null), new _y.z(1, 2, [this.b("drafts"), this.b("sentitems"), this.b("clutter"), this.b("junkemail"), this.b("deleteditems")], !1, !0, !1, !1, !1, null, !1, !1)));
        return this.X
    },
    dl: function() {
        if (!this.bw) {
            var n = _g.a.a().E ? _u.R.Go : _u.R.JW;
            this.bw = new _y.y(new _fm.f(this.cI, _y.F.b(), null, 1, n, null, !1, !1, !1, !1, null), new _y.z(1, 2, [this.b("drafts"), this.b("sentitems"), this.b("clutter"), this.b("junkemail"), this.b("deleteditems")], !1, !0, !1, !1, !1, null, !1, !1))
        }
        return this.bw
    },
    dK: function() {
        this.U || (this.U = new _y.y(new _fm.f(this.bW, _u.R.Ib, null, 1, _u.R.Ep, null, !1, !1, !1, !1, null), new _y.z(2, 2, [this.b("outbox"), this.b("notes")], !1, !0, !1, !1, !1, null, !1, !1)));
        return this.U
    },
    db: function() {
        this.T || (this.T = new _y.y(new _fm.f(this.bU, _u.R.JH, null, 1, _u.R.SK, null, !1, !1, !1, !1, null), new _y.z(1, 2, [this.b("drafts"), this.b("sentitems"), this.b("clutter"), this.b("junkemail"), this.b("deleteditems")], !1, !0, !1, !1, !1, null, !1, !1)));
        return this.T
    },
    cg: function() {
        this.bf || (this.bf = new _y.y(new _fm.f(this.cp, _u.R.LZ, null, 1, _u.R.LZ, null, !1, !1, !1, !1, null), new _y.z(1, 1, [this.b("inbox")], !1, !1, !1, !1, !1, null, !1, !1)));
        return this.bf
    },
    dg: function() {
        this.bi || (this.bi = new _y.y(new _fm.f(this.cq, _u.R.SJ, null, 0, _u.R.SJ, null, !1, !1, !1, !1, null), new _y.z(1, 1, [this.b("clutter")], !1, !1, !1, !1, !1, null, !1, !1)));
        return this.bi
    },
    dL: function() {
        this.W || (this.W = new _y.y(new _fm.f(this.bZ, _h.a.c || this.de() ? _u.R.IT : _u.R.Hf, _h.a.c || this.de() ? _y.e.b() : null, 0, _u.R.Je, null, !1, !1, !1, !1, null), new _y.z(4, 2, null, !0, !1, !1, !1, !1, this.cU, !0, !0)));
        return this.W
    },
    dN: function() {
        this.bc || (this.bc = new _y.y(new _fm.f(this.cj, _u.R.Uo, null, 1, _u.R.PX, null, !1, !1, !1, !1, null), new _y.z(1, 2, [this.b("drafts"), this.b("sentitems"), this.b("clutter"), this.b("junkemail")], !1, !0, !0, !1, !1, null, !1, !1)));
        return this.bc
    },
    dT: function() {
        this.bp || (this.bp = new _y.y(new _fm.f(this.cC, _u.R.Mz, null, 1, _u.R.Mz, null, !1, !1, !1, !1, null), new _y.z(2, 0, null, !1, !0, !1, !1, !1, null, !1, !1)));
        return this.bp
    },
    dV: function() {
        this.bt || (this.bt = new _y.y(new _fm.f(this.cE, _u.R.Iq, null, 1, _u.R.Iq, null, !1, !1, !1, !1, null), new _y.z(2, 0, null, !1, !0, !1, !1, !1, null, !1, !1)));
        return this.bt
    },
    dW: function() {
        this.bv || (this.bv = new _y.y(new _fm.f(this.cG, _u.R.WB, null, 1, _u.R.WB, null, !1, !1, !1, !1, null), new _y.z(2, 0, null, !1, !0, !1, !1, !1, null, !1, !1)));
        return this.bv
    },
    dJ: function() {
        this.P || (this.P = new _y.y(new _fm.f(this.bQ, _u.R.FX, null, 1, _u.R.FX, null, !1, !1, !1, !1, null), new _y.z(1, 1, [this.b("deleteditems")], !1, !1, !1, !1, !1, null, !1, !1)));
        return this.P
    },
    dI: function() {
        if (!this.O) {
            var n = this;
            this.O = new _y.y(new _fm.f(this.bP, _u.R.GX, null, 0, _u.R.GX, null, !1, !1, !1, !1, null), new _y.z(1, 1, [this.b("junkemail")], !1, !0, !0, !1, !1, function() {
                return !(n.j === 1 && n.g > 1)
            }, !1, !1))
        }
        return this.O
    },
    ch: function() {
        if (!this.L) {
            var i = this.e.a().bH.IsReplyAllTheDefaultResponse;
            var u = i ? new _fm.c(_u.R.N, _y.e.u(), this.bq, !1, null, _u.R.Tm) : new _fm.c(_u.R.JB, _y.e.t(), this.br, !1, null, _u.R.Pm);
            var f = new _fm.c(_u.R.JB, null, this.br, !1, null, _u.R.Pm);
            var r = new _fm.c(_u.R.N, null, this.bq, !1, null, _u.R.Tm);
            var t = new _fm.c(_u.R.VV, null, this.cd, !1, null, _u.R.EM);
            u.l(i ? _u.R.Tm : _u.R.Pm);
            f.l(_u.R.Pm);
            r.l(_u.R.Tm);
            t.l(_u.R.EM);
            var n = this;
            this.L = new _y.y(new _fm.p([f, r, t], u, _u.R.On, _u.R.HF, 0, null, !1), new _y.z(2, 2, [this.b("clutter"), this.b("junkemail"), this.b("drafts")], !0, !1, !1, !1, !1, function() {
                return !(n.j === 1) || !n.k.a && !n.k.b
            }, !1, !1))
        }
        return this.L
    },
    dP: function() {
        if (!this.G) {
            var u;
            var f = (u = new _fm.c(_u.R.TY, null, this.bh, !1, null, _u.R.RN), u.l(_u.R.RN), u);
            var r;
            var h = (r = new _fm.c(_g.a.a().E ? _u.R.SB : _u.R.Ue, null, this.bj, !1, null, _u.R.RC), r.l(_u.R.RC), r);
            var n;
            var s = (n = new _fm.c(_u.R.TR, null, this.bx, !1, null, _u.R.EY), n.l(_u.R.EY), n);
            var t = [f, h];
            Array.insert(t, 3, s);
            if (_g.a.a().E) {
                var i;
                var o = (i = new _fm.c(_u.R.FF, null, this.Y, !1, null, _u.R.Bg), i.l(_u.R.Bg), i);
                Array.insert(t, 2, o)
            }
            var e = new _fm.p(t, f, _u.R.CD, _u.R.HF, 0, null, !1);
            this.G = new _y.y(e, new _y.z(1, 2, [this.b("sentitems"), this.b("junkemail"), this.b("drafts")], !0, !0, !1, !1, !1, this.bC, !1, !1))
        }
        return this.G
    },
    dS: function() {
        if (!this.K) {
            var u;
            var f = (u = new _fm.c(_u.R.Pz, null, this.bh, !1, null, _u.R.Vf), u.l(_u.R.Vf), u);
            var r;
            var h = (r = new _fm.c(_g.a.a().E ? _u.R.SB : _u.R.Ue, null, this.bj, !1, null, _u.R.RC), r.l(_u.R.RC), r);
            var n;
            var s = (n = new _fm.c(_u.R.TR, null, this.bx, !1, null, _u.R.EY), n.l(_u.R.EY), n);
            var t = [f, h];
            Array.insert(t, 3, s);
            if (_g.a.a().E) {
                var i;
                var o = (i = new _fm.c(_u.R.FF, null, this.Y, !1, null, _u.R.Bg), i.l(_u.R.Bg), i);
                Array.insert(t, 2, o)
            }
            var e = new _fm.p(t, f, _u.R.CD, null, 0, null, !1);
            this.K = new _y.y(e, new _y.z(1, 1, [this.b("junkemail")], !1, !1, !1, !1, !1, this.bC, !1, !1))
        }
        return this.K
    },
    Z: function() {
        return !!this.i && this.i.a().h().Enabled
    },
    de: function() {
        return this.bS.a() === "Mouse" && !!this.i && this.i.a().bY().Enabled
    },
    dc: function() {
        return !!this.c && this.c.a() === "recoverableitemsdeletions"
    },
    dd: function() {
        return _h.a.c && this.e.a().bH.IsFocusedInboxEnabled
    },
    dO: function() {
        return !!this.i && this.i.k()
    },
    dY: function(n, t, i, r, u, f) {
        if (!r) throw Error.argumentNull("selectedFolder", "selectedFolder should not be null in InitializeCommandingBar");
        this.f = new _fm.k(_u.R.Uz, _u.R.HF, _u.R.HJ);
        this.f.L = !0;
        this.f.bc(17);
        this.f.cQ(this.bD);
        this.g = n;
        this.x = t;
        this.j = i;
        this.c = r;
        this.w = u;
        this.h = f;
        this.bu(this.f);
        this.a = new _j.q;
        this.a.c(this.dj());
        this.f.a(this.y.a);
        this.a.c(this.df());
        this.f.a(this.H.a);
        var e = this;
        this.S.a(function(n) {
            if (n.b()) {
                e.R = n.p(e.be, function() {
                    return !e.k.b && !e.cm
                });
                e.bd(0, e.R);
                e.bN = !0
            }
        });
        this.a.c(this.ci());
        this.f.a(this.p.a);
        this.v = !0
    },
    eb: function(n) {
        this.z && n !== this.z.a && this.cc.a()
    },
    eA: function(n, t, i) {
        this.g = n;
        this.h = t;
        this.bR = i;
        this.q(0)
    },
    eu: function(n) {
        this.o = n;
        this.q(0)
    },
    et: function(n) {
        this.E = n;
        this.q(5)
    },
    ez: function(n, t, i) {
        if (_y.g.isInstanceOfType(n)) {
            this.q(2);
            var r = n;
            this.bu(r.s());
            r.i(t);
            this.dq(!0)
        } else if (IMessageListAdsReadingPaneViewModel.isInstanceOfType(n)) {
            var u = n;
            this.bu(u.b())
        } else {
            this.bu(this.f);
            this.q(i ? 4 : 3);
            this.dq(!1)
        }
    },
    ey: function(n, t, i, r, u, f, e, o, s, h, c) {
        this.dm(n, t, i, r, u, f, e, o, s, h, c)
    },
    dx: function(n, t, i, r, u, f, e, o, s, h) {
        this.dm(n, t, i, r, u, f, e, o, s, !1, h)
    },
    ex: function() {
        this.bT || _j.m.a().c(_a.a.bY, "UpdateCommandingBarOnWidthChanged", this.n.cg)
    },
    ew: function(n) {
        this.cm = n;
        this.q(6)
    },
    dw: function() {
        this.t().a.c(!this.c.b);
        this.da().a.c(!(this.c.b || _g.a.a().E));
        this.cf().a.c(_g.j.e(this.c));
        this.u().a.c(_g.j.e(this.c))
    },
    dv: function() {
        this.u().a.X()
    },
    bz: function() {
        _h.A.a().n(this.bH);
        this.e.a().rpcl("IsReplyAllTheDefaultResponse", this.bI);
        this.e.e().rpcl("PredictedActions", this.bG);
        this.f.cT(this.bD);
        this.f.dispose();
        _j.S.prototype.bz.call(this)
    },
    ea: function(n, t) {
        switch (this.j) {
            case 4:
                return !0;
            case 5:
                return !1;
            case 1:
                var r = t;
                return r.bX(n);
            case 2:
            case 3:
                var i = t;
                return i.eR(n);
            default:
                _j.e.c(_a.a.bv, String.format("FolderView type: {0} is not supported", this.j));
                return !1
        }
    },
    dH: function() {
        this.a.f();
        this.f.bu()
    },
    ei: function() {
        var i = _a.b.b(_a.a.bY, "InitializeCommandingBar", !1, null);
        this.a.c(this.dj());
        this.a.k(1, this.ch());
        this.a.c(this.cf());
        this.cn && this.a.c(this.dU());
        _y.E.a(this.e.e(), this.Z()) && this.a.c(this.dg());
        this.a.c(this.dL());
        this.a.c(this.df());
        this.a.c(this.cZ());
        this.a.c(this.dP());
        this.e.c().bH.IsShadowMailbox || this.a.c(this.dS());
        this.e.c().bH.IsExplicitLogon || this.a.c(this.dk());
        this.e.c().bH.IsShadowMailbox || this.a.c(this.dI());
        this.a.c(this.u());
        this.C || this.a.c(this.t());
        this.a.c(this.di());
        this.a.c(this.dh());
        this.a.c(this.dQ());
        this.a.c(this.dR());
        this.a.c(this.dM());
        this.a.c(this.dl());
        if (_g.a.a().E) this.bg = this.a.m(this.dl()) + 2;
        else {
            this.a.c(this.db());
            this.bg = this.a.m(this.db()) + 2
        }
        this.a.c(new _y.y(new _fm.w, new _y.z(1, 0, null, !1, !1, !1, !1, !1, null, !1, !1)));
        _y.E.a(this.e.e(), this.Z()) && this.e.a().bH.ShowInferenceUiElements && this.a.c(this.cg());
        this.a.c(this.dN());
        this.a.c(this.dJ());
        this.a.c(new _y.y(new _fm.w, new _y.z(1, 2, [this.b("drafts"), this.b("clutter"), this.b("sentitems"), this.b("junkemail")], !1, !1, !0, !1, !1, null, !1, !1)));
        this.C && this.a.c(this.t());
        this.a.c(this.dK());
        this.a.c(this.dT());
        this.i.a().bU().Enabled && this.i.a().b().Enabled && this.a.c(this.dV());
        this.dO() && this.a.c(this.dW());
        !_g.a.a().E && _g.a.a().G() && _g.a.a().G().b() > 0 && this.a.c(this.da());
        if (this.bN) {
            var t = this;
            this.S.a(function(n) {
                n.b() && t.a.k(0, t.R)
            })
        }
        this.a.c(this.ci());
        this.dy();
        for (var n = 0; n < this.a.d.length; n++) this.f.a(this.a.d[n].a);
        this.v = !1;
        _a.b.a(i)
    },
    dm: function(n, t, i, r, u, f, e, o, s, h, c) {
        if (!u) throw Error.argumentNull("selectedFolder", "selectedFolder should not be null in InternalUpdateCommandingBarOnListViewChanged");
        this.g = n;
        this.j = t;
        this.d = i;
        this.x = r;
        this.cF = this.c.c() !== u.c();
        this.c = u;
        this.w = f;
        this.h = e;
        this.o = o;
        this.s = s;
        this.D = h;
        this.E = c;
        this.q(1)
    },
    es: function() {
        if (!this.bT) {
            this.n.p = !0;
            this.eB();
            this.eC();
            this.eD();
            for (var n = 0; n < this.a.d.length; n++) this.a.d[n].c(this.g, this.j, this.c, this.k.b, this.o, this.D, this.E, this.cl(), this.dc());
            this.dw();
            this.cF && this.eE();
            this.ev();
            this.n.A()
        }
    },
    eD: function() {
        var i = this.cf().a;
        var t = this.dh().a;
        var n = this.di().a;
        if (this.o) {
            t.a(_u.R.GI);
            t.e(_u.R.Fl);
            t.m(_y.e.s());
            t.d = 0;
            n.a(_u.R.IC);
            n.e(_u.R.JX);
            n.m(_y.e.K());
            n.d = 0;
            i.a(_u.R.IT);
            i.e(_u.R.Je)
        } else {
            t.a(_u.R.Ox);
            t.e(_u.R.GM);
            t.d = 1;
            t.m(null);
            n.a(_u.R.Ti);
            n.e(_u.R.BV);
            n.d = 1;
            n.m(null);
            i.a(_u.R.Ck);
            i.e(_u.R.Da)
        }
    },
    eE: function() {
        var n = this.y.a;
        this.c.c() ? n.w(_u.R.JA, _u.R.Fj) : n.w(_u.R.UY, _u.R.EW)
    },
    eB: function() {
        if (!_g.b.a.doesIdEqualName(this.c.bH.FolderId, "clutter")) {
            this.cZ().a.d = 0;
            this.u().a.d = 0;
            this.t().a.d = this.Q;
            return
        }
        _y.E.a(this.e.e(), this.Z()) && (this.t().a.d = 1)
    },
    eC: function() {
        var r = _g.b.a.doesIdEqualName(this.c.bH.FolderId, "junkemail");
        if (!this.e.c().bH.IsShadowMailbox || !r) {
            var n = _g.a.a().E;
            var u = r ? this.K.a : this.G.a;
            var t = u.a.p.x[2];
            var i = u.a.p.x[n ? 3 : 2];
            if (this.k.a || this.k.b) {
                n && t.a(!1);
                i.a(!(this.g === 1 && !(this.i && this.i.a().bZ().Enabled) && this.ea(15, this.h[0]) && (n || _g.a.a().e().bH.ReportJunkEmailEnabled)))
            } else {
                n && t.a(!0);
                i.a(!0)
            }
        }
    },
    ev: function() {
        var n = this.u().a;
        n.bo(this.g > 0 && this.s === 1 ? "FocusedOtherMoveMenuFRE" : null)
    },
    dy: function() {
        for (var n = 0; n < this.k.E().d.length; n++) this.a.c(this.k.E().d[n])
    },
    eq: function() {
        return !!this.w && (this.w.a === "ReceivedOrRenewTime" || this.w.a === "ConversationLastDeliveryOrRenewTime") && (this.j !== 5 || this.cl())
    },
    dC: function(n) {
        var t = _y.o.b("SM");
        _a.b.a(t);
        if (this.d) n(this.dt());
        else {
            this.cB = n;
            this.x(this.h, this.cS)
        }
    },
    dz: function(n) {
        var t = _y.o.b("SA");
        _a.b.a(t);
        if (this.d) n(this.dr());
        else {
            this.cy = n;
            this.x(this.h, this.cQ)
        }
    },
    dt: function() {
        var i = new _j.q;
        var t = new _j.q;
        var r = this.d.t().c();
        if (this.dd() && r !== -1 && !this.D) {
            var n = !r;
            var o = new _fm.c(n ? _u.R.UZ : _u.R.IU, null, n ? this.cw : this.cv);
            i.c(o);
            if (this.g === 1) {
                var s = new _fm.c(n ? _u.R.Od : _u.R.GB, null, this.bV);
                i.c(s)
            }
        }
        var e = this.d.g(_u.R.Ux, this.cA, !0);
        t.c(e);
        if (this.en()) {
            var u = new _j.g(this.cX, _a.a.bv);
            var f = new _fm.c(_u.R.Fw, null, u);
            t.c(f)
        }
        return this.d.B(i, t)
    },
    dr: function() {
        var t = this.d.r(this.c.bH.FolderId, this.c.b);
        var n = null;
        t && (n = t.i);
        return n
    },
    dB: function(n) {
        var t = _y.o.b("SC");
        _a.b.a(t);
        if (this.d) n(this.ds());
        else {
            this.cz = n;
            this.x(this.h, this.cR)
        }
    },
    ds: function() {
        var f = this.d.j(this.h);
        var r = this.d.A(this.h);
        var n = this.d.a();
        n.a(f, this.g, r, !0, this.h);
        var t = _y.o.a(this.d.c(), "CC");
        t.c(this.d.c().b);
        n.p.a(new _fm.i);
        n.p.a(this.d.g(_u.R.Co, this.d.x(), !1));
        n.p.a(new _fm.c(_u.R.Jp, null, t));
        n.p.a(new _fm.c(_u.R.Pg, null, this.ck));
        if (this.em()) {
            var i = new _j.g(this.cW, _a.a.bv);
            i.c(this.dG(r));
            var u = new _fm.c(_u.R.Ol, null, i);
            n.p.a(u)
        }
        return n
    },
    dG: function(n) {
        return this.d.c().b && (!n || !Object.keys(n).length)
    },
    er: function() {
        this.r.a.X()
    },
    ee: function(n) {
        this.d = n;
        this.cB(this.dt())
    },
    ec: function(n) {
        this.d = n;
        this.cy(this.dr())
    },
    ed: function(n) {
        this.d = n;
        this.cz(this.ds())
    },
    eh: function(n) {
        this.ci().a.c(n);
        this.p.a.e(n ? _h.A.a().l() : _u.R.KE)
    },
    b: function(n) {
        var t = _g.b.a.nameToId(n);
        return t ? t.Id : ""
    },
    ek: function() {
        _h.A.a().f()
    },
    q: function(n) {
        var i = !1;
        var t = !1;
        switch (n) {
            case 0:
            case 3:
                t = !this.v || this.g > 0 || this.o;
                break;
            case 1:
                i = !0;
                t = !0;
                break;
            case 2:
                i = !0;
                break;
            case 4:
            case 5:
            case 6:
                t = !0;
                break;
            default:
                break
        }
        i && this.ek();
        if (t) {
            if (this.v) {
                this.dH();
                this.ei();
                this.ca.a(_y.fM, new _y.fM)
            }
            this.es()
        }
    },
    ej: function(n, t) {
        if (this.a && this.a.d && this.a.d[1]) {
            this.dp(this.ch());
            this.L = null;
            this.bd(1, this.ch())
        }
    },
    eg: function(n, t) {
        if (_y.E.a(this.e.e(), this.Z()) && !this.v) {
            this.e.a().bH.ShowInferenceUiElements ? this.bd(this.bg, this.cg()) : this.dp(this.cg());
            this.bd(3, this.dg())
        }
    },
    dp: function(n) {
        if (this.a.g(n)) {
            this.a.n(n);
            this.f.bx(n.a)
        }
    },
    bd: function(n, t) {
        if (!this.a.g(t)) {
            this.a.k(n, t);
            this.f.bv(n, t.a);
            t.c(this.g, this.j, this.c, this.k.b, this.o, this.D, this.E, this.cl(), this.dc())
        }
    },
    ep: function() {
        return _h.a.j(this.c) && !this.dZ() && !(this.e.c().bH.IsShadowMailbox && this.c.v === 86)
    },
    dZ: function() {
        return _g.b.a.doesIdEqualName(this.c.bH.FolderId, "inbox") && (!this.s || this.s === -1)
    },
    eo: function() {
        return !this.c.G() && this.dn()
    },
    dn: function() {
        return _h.l.b(this.c.bH.FolderId) || _g.j.b(this.c.bH.FolderId)
    },
    du: function() {
        return this.j === 1 ? this.g === 1 : this.g > 0
    },
    en: function() {
        return !this.I.a.o && this.cY() && this.du()
    },
    em: function() {
        return !this.r.a.o && this.cY() && this.g === 1
    },
    cY: function() {
        var n = this.c.bH.FolderId;
        return !this.e.c().bH.IsExplicitLogon && _h.l.b(n) && n.Id !== _g.b.a.nameToId("sentitems").Id && n.Id !== _g.b.a.nameToId("drafts").Id
    },
    dE: function(n) {
        this.A(0, n)
    },
    dF: function(n) {
        this.A(1, n)
    },
    dD: function(n) {
        this.A(2, n)
    },
    cl: function() {
        if (this.j !== 5) return !1;
        for (var n = 0; n < this.h.length; n++)
            if (_y.eP.isInstanceOfType(this.h[n])) return !0;
        return !1
    }
};
_y.fM = function() {};
_y.H = function(n, t) {
    this.e = Function.createDelegate(this, this.i);
    this.f = Function.createDelegate(this, this.j);
    _y.H.initializeBase(this);
    this.d = t;
    n.bH.IsBposUser && this.h()
};
_y.H.e = function(n, t) {
    t.val = 0;
    if (!n || !n.bH.Id) return !1;
    if (n.bH.Id === "ShellMail") {
        t.val = 0;
        return !0
    } else if (n.bH.Id === "ShellCalendar") {
        t.val = 1;
        return !0
    } else if (n.bH.Id === "ShellPeople") {
        t.val = 2;
        return !0
    } else if (n.bH.Id === "ShellTasks") {
        t.val = 3;
        return !0
    } else if (n.bH.Id === "ShellBookings") {
        t.val = 10;
        return !0
    } else return !1
};
_y.H.d = function(n, t) {
    if (t) switch (n) {
        case 0:
            return !0;
        case 1:
            return t.bH.Calendar;
        case 2:
            return t.bH.Contacts;
        case 3:
            return t.bH.Tasks;
        default:
            return !0
    }
    return !0
};
_y.H.f = function(n, t) {
    if (t) switch (n) {
        case "ShellMail":
            return !0;
        case "ShellCalendar":
            return t.bH.Calendar;
        case "ShellPeople":
            return t.bH.Contacts;
        case "ShellTasks":
            return t.bH.Tasks;
        case "ShellTodos":
            return t.bH.Todos;
        default:
            return !0
    }
    return !0
};
_y.H.prototype = {
    b: null,
    d: null,
    a: null,
    c: null,
    l: function(n) {
        this.a !== n && (this.a = n);
        this.eJ("BposNavBarData");
        return n
    },
    g: function() {
        var t = new Array(0);
        this.a.b() && Array.addRange(t, this.a.b().e());
        if (this.a.c())
            for (var i = 0; i < this.a.c().b(); i++) {
                var n = this.a.c().a(i);
                n && n.bH.Id !== "ShellMarketplace" && n.bH.Id !== "ShellOfficeDotCom" && Array.add(t, n)
            }
        return t
    },
    h: function() {
        var n = new _h.dz;
        n.c(this.f);
        n.b(this.e);
        this.b = _a.b.b(_y.H.c, "O365HeaderResponse", !1, null);
        this.c = _a.b.b(_y.H.c, "O365HeaderDataPopulation", !1, null);
        this.d.a(n)
    },
    i: function(n) {
        this.eJ(_y.H.b);
        if (this.b) {
            this.b.n = n.O();
            this.b.o = n.P();
            _a.b.a(this.b);
            this.b = null
        }
        if (this.c) {
            this.c.n = n.O();
            this.c.o = n.P();
            _a.b.a(this.c);
            this.c = null
        }
    },
    j: function(n) {
        var t = null;
        n && (t = n.e);
        this.l(t);
        this.eJ(_y.H.a);
        if (this.b) {
            this.b.o = n.P();
            _a.b.a(this.b);
            this.b = null
        }
    }
};
_y.fN = function(n, t, i, r, u) {
    this.l = Function.createDelegate(this, this.n);
    this.m = Function.createDelegate(this, this.r);
    this.f = Function.createDelegate(this, this.p);
    this.g = Function.createDelegate(this, this.q);
    _y.fN.initializeBase(this);
    this.c = n;
    this.h = t;
    this.b = r;
    this.c.a("OwaUserConfigurationNotification", _a.a.g, "OwaUserConfigurationChanged", this.g, 0);
    this.j = i;
    this.b.b(_y.fG, this.f);
    this.i = u.c() ? _u.R.Ir : _u.R.Kh
};
_y.fN.prototype = {
    c: null,
    h: null,
    a: null,
    e: !1,
    j: null,
    b: null,
    i: null,
    o: function() {
        if (!this.a) {
            this.a = new _j.l;
            this.a.a(new _ff.d(new _j.g(this.m, _a.a.bL), _u.R.DW, null, !0, !1));
            this.a.a(new _ff.d(new _j.g(this.l, _a.a.bL), _u.R.BG, null, !1, !1))
        }
        return this.a
    },
    d: function(n) {
        if (this.e !== n) {
            this.e = n;
            this.eJ("IsApplicationReloadConfirmDialogShown")
        }
        return n
    },
    eL: function() {
        _a.gd.prototype.eL.call(this);
        if (this.c) {
            this.c.b("OwaUserConfigurationNotification", this.g);
            this.c = null
        }
        if (this.b) {
            this.b.c(_y.fG, this.f);
            this.b = null
        }
    },
    q: function(n) {
        var t = n;
        t.reload && this.d(!0)
    },
    r: function() {
        this.d(!1);
        this.j.d();
        this.h.a("OwaUserConfigurationUpdated")
    },
    n: function() {
        this.d(!1)
    },
    p: function(n) {
        n.a & 1 && this.d(!0)
    }
};
_y.j = function(n, t, i, r, u, f, e, o, s, h, c) {
    this.O = Function.createDelegate(this, this.bA);
    this.M = Function.createDelegate(this, this.by);
    this.N = Function.createDelegate(this, this.bz);
    this.P = Function.createDelegate(this, this.bB);
    this.R = Function.createDelegate(this, this.bF);
    this.Q = Function.createDelegate(this, this.bE);
    this.bf = Function.createDelegate(this, this.bH);
    this.bi = Function.createDelegate(this, this.bm);
    this.y = Function.createDelegate(this, this.Z);
    this.S = Function.createDelegate(this, this.bL);
    this.bh = Function.createDelegate(this, this.bN);
    this.bg = Function.createDelegate(this, this.bM);
    this.l = [];
    _y.j.initializeBase(this);
    if (!t) throw Error.argumentNull("moduleConductor");
    this.q = t;
    this.ba = e;
    this.r = n || new _a.j;
    this.j = s;
    if (o.a().d().Enabled && this.j.a() === "Mouse") {
        var y = _g.a.a();
        var p = _a.bm.a(y.bH.AdMarket, y.o(), o);
        var l = o.a();
        if (l.gX().Enabled && _a.bm.b(l.gX().SupportedMarkets, p)) {
            this.l.push(new _y.eG(8, 320, 50, 2, 320, 0));
            this.l.push(new _y.eG(7, 728, 90, 2, 750, 0))
        }
        this.l.push(new _y.eG(2, 160, 600, 1, 990, 4));
        if (l.gY().Enabled && _a.bm.b(l.gY().SupportedMarkets, p)) {
            var v = new _y.eG(5, 300, 600, 1, 1900, 0);
            v.a[v.a.length] = [300, 250];
            this.l.push(v)
        }
        this.bt();
        this.o = (32768 & _g.a.a().bH.UserOptions.NewEnabledPonts) != 32768;
        var a = this;
        h.a(function(n) {
            a.bn(n.a(a));
            a.Z(null, null)
        })
    }
    this.v = f;
    this.u = u;
    this.f = i;
    this.bW();
    this.s = r;
    this.s && this.eJ("OwaUserConfigurationUpdatedViewModel");
    if (this.j && this.j.a() === "Mouse") {
        this.T = new _j.g(this.bg, _a.a.g);
        this.U = new _j.g(this.bh, _a.a.g);
        this.apcl("GlobalHeaderViewModel", this.S)
    }
    if (o.a().gV().Enabled) {
        var k = new Image;
        k.src = o.a().gV().PixelUrl || "https://c.live.com/c.gif"
    }
    if (o.a().gU().Enabled) {
        var b = new Image;
        b.src = o.a().gU().PixelUrl || "https://c.bing.com/c.gif?Red3=OLLI_pd"
    }
    if (o.a().gW().Enabled) {
        var w = new Image;
        w.src = o.a().gW().PixelUrl || "https://www.bizographics.com/collect/?fmt=gif&pid=7850"
    }
    this.A = c
};
_y.j.prototype = {
    m: 0,
    r: null,
    q: null,
    ba: null,
    f: null,
    B: null,
    x: null,
    j: null,
    G: null,
    i: null,
    n: null,
    z: null,
    o: !1,
    b: null,
    D: null,
    w: null,
    e: null,
    t: null,
    Y: !1,
    E: !1,
    v: null,
    u: null,
    d: null,
    c: null,
    A: null,
    K: !1,
    a: function() {
        return this.e
    },
    I: function(n) {
        if (this.bG(n) && n !== this.e) {
            var i = this.e;
            var t = !i;
            this.bJ(n, t);
            this.e = n;
            this.e.l = t;
            this.e.e() || this.e.n();
            this.eN("CurrentModule", "IsExtendedListViewLoadedForMailModule");
            this.bI(i)
        }
        return n
    },
    bq: function(n) {
        if (this.Y !== n) {
            this.Y = n;
            this.eJ("IsTransitioned")
        }
        return n
    },
    p: function() {
        return this.r
    },
    g: function() {
        return this.q
    },
    bO: function(n) {
        if (n !== this.t) {
            this.t = n;
            this.eJ("AppStatusBarViewModel")
        }
        return n
    },
    bU: function(n) {
        if (n !== this.w) {
            this.w = n;
            this.eJ("RepromptViewModel")
        }
        return n
    },
    bP: function(n) {
        if (this.n === n) return n;
        this.n = n;
        this.eJ("GlobalHeaderViewModel");
        return n
    },
    bt: function() {
        this.d = null;
        for (var n = this.l.length - 1; n >= 0; n--)
            if (window.innerWidth > this.l[n].f) {
                this.d = this.l[n];
                break
            }
        this.eN("AdsDock", "AdsbarPanelSize")
    },
    bj: function() {
        if (this.d) {
            if (this.bk()) return this.d.d() + 16
        } else return 0;
        return (this.C() === 1 ? this.d.g() : this.d.d()) + 5
    },
    bk: function() {
        return !!this.d && this.d.d() < 60
    },
    C: function() {
        return this.d ? this.d.e : 1
    },
    bn: function(n) {
        if (this.z !== n) {
            this.z = n;
            this.eJ("AdsbarViewModel")
        }
        return n
    },
    br: function(n) {
        if (this.o !== n) {
            this.o = n;
            this.Z(null, null);
            this.eJ("ShowAdBar")
        }
        return n
    },
    bb: function(n) {
        if (this.b !== n) {
            this.b && this.b.rpcl("ShowFlexPane", this.y);
            this.b = n;
            this.b && this.b.apcl("ShowFlexPane", this.y);
            this.eJ("FlexPanePanelViewModel")
        }
        return n
    },
    bp: function(n) {
        if (this.m !== n) {
            this.m = n;
            this.eJ("FlexPanePanelWidth")
        }
        return n
    },
    s: null,
    bS: function(n) {
        this.i = n;
        if (this.i) {
            if (this.j && this.j.a() !== "Mouse") {
                this.i.d(this.bi);
                this.i.c(this.bf)
            }
            this.eJ("ModernGroupsNavigationFactory");
            this.i.b() && this.bm()
        }
        return n
    },
    bT: function(n) {
        if (this.G !== n) {
            this.G = n;
            this.eJ("ModernNavigationViewModel")
        }
        return n
    },
    bQ: function(n) {
        if (this.D !== n) {
            this.D = n;
            this.eJ("GlobalMiniaturesViewModel")
        }
        return n
    },
    V: function() {
        return this.i ? this.i.b() : !1
    },
    bR: function(n) {
        if (this.c !== n) {
            this.c = n;
            this.eJ("MailModule")
        }
        return n
    },
    bc: function(n) {
        if (this.E !== n) {
            this.E = n;
            this.eJ("IsRevealMenuShown")
        }
        return n
    },
    bV: function(n) {
        if (n !== this.K) {
            this.K = n;
            this.eJ("ShowMobileReactOptinToggle")
        }
        return n
    },
    bo: function(n) {
        if (n !== this.B) {
            this.B = n;
            this.eJ("FirstRunModalDialogMainViewModel")
        }
        return n
    },
    bs: function(n) {
        if (n !== this.x) {
            this.x = n;
            this.eJ("UserVoiceSatisfactionViewModel")
        }
        return n
    },
    T: null,
    U: null,
    bx: function() {
        return !this.a().a && this.c.f.dW()
    },
    h: function(n) {
        return this.W(n, this.V())
    },
    W: function(n, t) {
        for (var r = null, i = 0; i < this.r.b(); i++)
            if (this.p().a(i) && this.p().a(i).a === n) {
                r = this.p().a(i);
                if (this.p().a(i).d === t) break
            }
        return r
    },
    bl: function(n, t, i, r, u, f) {
        var e = this.h(n);
        this.H(e, t, i, r, u, f);
        return e
    },
    dw: function() {},
    du: function() {
        this.bq(!0)
    },
    dx: function() {
        this.bq(!1)
    },
    dv: function() {},
    eL: function() {
        _a.gd.prototype.eL.call(this);
        this.bX();
        this.b && this.b.rpcl("ShowFlexPane", this.y);
        this.rpcl("GlobalHeaderViewModel", this.S)
    },
    bW: function() {
        if (this.f) {
            this.f.b(_y.fB, this.Q);
            this.f.b(_y.p, this.R);
            this.f.b(_y.ch, this.P);
            this.f.b(_y.bd, this.N);
            this.v && this.f.b(_a.dY, this.M);
            this.u && this.f.b(_h.bT, this.O)
        }
    },
    bX: function() {
        if (this.f) {
            this.f.c(_y.fB, this.Q);
            this.f.c(_y.p, this.R);
            this.f.c(_y.ch, this.P);
            this.f.c(_y.bd, this.N);
            this.v && this.f.c(_a.dY, this.M);
            this.u && this.f.c(_h.bT, this.O)
        }
    },
    bm: function() {
        if (this.a().e()) {
            this.a().a ? this.I(this.h(0)) : this.X();
            this.j.a() === "TouchNarrow" && this.q.I()
        }
    },
    bH: function(n) {
        var t = this.a().d;
        if (t) {
            this.a().a === n && this.X();
            this.i.a() || this.a().b.e()
        }
        this.I(this.h(n));
        this.j.a() === "TouchNarrow" && t !== this.a().d && this.q.I()
    },
    X: function() {
        if (this.a().d) {
            this.a().b.g(this.i.a());
            this.i.e(this.a().b)
        }
        this.a().p("IsBrowsingGroups") && this.a().b.s(!0)
    },
    bJ: function(n, t) {
        if (n) {
            if (n.a === 1) {
                _a.O.a(_a.a.b, "NavToCal", 2);
                var i;
                _a.p.b(_a.a.b, "NavToCalE2E", !0, (i = new _a.K, i.a = !0, i.b = !0, i.e = !0, i.d = !0, i))
            }
            var r;
            var f = _a.p.b(_a.a.g, "ChangeModule_" + _a.M.toString(n.a), !1, (r = new _a.K, r.b = !0, r));
            var u = t ? "B" : "N";
            f.q(new _a.y(u))
        }
        if (n && !this.p().j(n)) throw Error.invalidOperation("The CurrentModule you are trying to set does not exist.");
    },
    bI: function(n) {
        n && n.e() && n.b.ls(!1);
        this.bD();
        this.f && this.f.a(_y.Z, new _y.Z(n, this.e));
        if (this.e) {
            if (this.A) {
                var i = this;
                this.A.a(function(n) {
                    i.bV(n.b() && !i.e.a || n.c() && i.e.a === 1)
                })
            }
            this.bC(this.e.a);
            var r = "ChangeModule_" + _a.M.toString(this.e.a);
            var u = _a.p.c(r);
            if (u) {
                var t = new _a.l;
                t.b("moduletype", this.e.a);
                t.c("isgroup", this.e.d);
                u.m = t.toString();
                _a.p.a(r)
            }
            if (_a.k.g()) {
                _a.k.t === "" && n && _a.k.bj(_a.M.toString(n.a));
                _a.k.bj(_a.M.toString(this.e.a))
            }
        }
    },
    bC: function(n) {
        switch (n) {
            case 1:
                _h.bv.a(1, null);
                break;
            case 8:
                _h.bv.a(2, null);
                break
        }
    },
    bG: function(n) {
        if (this.f) {
            var t = new _y.ba(this.a(), n);
            this.f.a(_y.ba, t);
            return !t.d
        }
        return !0
    },
    bD: function() {
        if (this.e) {
            var t = this.a();
            var n = this;
            this.e.g(function() {
                n.bK(t)
            });
            this.g().Z(this.a())
        }
    },
    bK: function(n) {
        if (this.e === n) {
            if (_y.d.isInstanceOfType(this.e.b)) {
                this.bR(this.e.b);
                if (this.e.l) {
                    var t = this.c.f;
                    var i = null;
                    var u = this;
                    i = function() {
                        t.rpcl(t.cG(), i);
                        u.eJ("IsExtendedListViewLoadedForMailModule")
                    };
                    t.apcl(t.cG(), i)
                }
            }
            this.V() && this.X();
            var r = n.j();
            "IsBrowsingGroups" in r && r.IsBrowsingGroups && n.b.s(!0);
            n.b.ls(!0)
        }
    },
    bE: function(n) {
        for (var r = n.a.bJ, t = 0; t < this.r.b(); t++) {
            var i = this.r.a(t);
            if (r === i.c) {
                this.H(i, null);
                break
            }
        }
    },
    bF: function(n) {
        var t;
        t = n.h ? this.W(n.a, n.b) : this.h(n.a);
        this.H(t, n.f, n.e, n.d, n.c, n.g);
        n.c && this.j.a() === "TouchNarrow" && this.q.z()
    },
    H: function(n, t, i, r, u, f) {
        i && this.bw();
        if (!n || !this.p().j(n) || this.a() === n) {
            r && t && t();
            return
        }
        this.g().N(f);
        this.I(n);
        this.a() && (this.a().j().IsBrowsingGroups = u);
        t && (this.a().e() ? t() : this.a().g(t))
    },
    bw: function() {
        var t = this.ba.b();
        if (t)
            for (var r = t.x.length, n = r - 1; n >= 0; n--) {
                var i = t.x[n];
                if (_y.cv.isInstanceOfType(i)) {
                    i.a();
                    break
                }
            }
    },
    bB: function(n) {
        this.bc(!0)
    },
    bz: function(n) {
        this.bc(!1)
    },
    bA: function(n) {
        var t = this;
        this.u.a(function(n) {
            t.bO(n)
        })
    },
    by: function(n) {
        var t = this;
        this.v.a(function(i) {
            t.bU(i);
            i.h(n)
        })
    },
    bL: function(n, t) {
        this.n.m("GoToNextRegion");
        this.n.n("GoToPrevRegion")
    },
    Z: function(n, t) {
        if (this.e && this.e.b) {
            var i = this.e.b;
            i === this.c ? this.c.kw(null, null) : _y.ic.isInstanceOfType(i) && i.f()
        }
    },
    bM: function() {
        this.c && !this.a().a && this.c.ia()
    },
    bN: function() {
        this.c && !this.a().a && this.c.dj.a()
    }
};
_y.iV = function(n) {
    _a.c.a(n, "eventAggregator");
    this.c = n
};
_y.iV.prototype = {
    c: null,
    a: function(n) {
        var t = this;
        this.c.a(_y.p, new _y.p(2, function() {
            t.c.a(_y.ck, new _y.ck)
        }, !0, !0, !0, !1, !0));
        return !0
    }
};
_y.iW = function(n) {
    this.c = n
};
_y.iW.prototype = {
    c: null,
    a: function(n) {
        var t = this;
        this.c.a(function(t) {
            t.a(n)
        });
        return !0
    }
};
_y.fI = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d) {
    this.b = e;
    var g = new _y.jk(o);
    this.a(n, "/options", g);
    this.a(n, "/options/$option", g);
    this.a(n, "/options/$option/action/$action", g);
    this.a(n, "/options/$option/mode/$mode", g);
    this.a(n, "/options/$option/mode/$mode/explicitlogonuser/$explicitlogonuser", g);
    this.a(n, "/options/$option/mode/$mode/explicitlogonuser/$explicitlogonuser/referrer/$referrer", g);
    this.a(n, "/options/$option/mode/$mode/action/$action", g);
    this.a(n, "/options/$option/itemid/$itemid*", g);
    this.a(n, "/options/$option/mode/$mode/itemid/$itemid*", g);
    this.a(n, "/options/$option/id/$id*", g);
    this.a(n, "/options/$option/mode/$mode/id/$id*", g);
    var rt = new _y.hC(r, s);
    this.a(n, "/fb/uv", rt);
    var ut = new _y.hA(r, h);
    this.a(n, "/fb/hs", ut);
    if (t.a().bx().Enabled || t.a().bo().Enabled) {
        var nt = new _y.iU(l);
        this.a(n, "/bookings", nt);
        this.a(n, "/bookings/$bookingmailbox/$submodule", nt);
        this.a(n, "/bookings/$mailboxorsubmodule", nt);
        this.a(n, "/bookings/action/$action", nt)
    }
    var it = new _y.eA(r);
    this.a(n, "/$module", it);
    this.a(n, "/calendar/action/$action", new _y.iX(p));
    this.a(n, "/calendar/view/$view", new _y.fH(b));
    this.a(n, "/calendar/view/$view/d/$d/m/$m/y/$y", new _y.fH(b));
    this.a(n, "/calendar/item", new _y.fH(b));
    this.a(n, "/calendar/addgroupevents", new _y.iY(w));
    this.a(n, "/calendar/interestingcalendars", new _y.iW(v));
    this.a(n, "/schedule/action/$action", new _y.jd(y, i, r, t.a().t().Enabled));
    this.a(n, "/mail/$fid", new _y.cW(e, r));
    var tt = new _y.je(r, k);
    this.a(n, "/store/$assetid/campaignid/$campaignid/providerid/$providerid", tt);
    if (t.a().dD().Enabled) {
        this.a(n, "/mail/$fid/$readMode", new _y.cW(e, r));
        this.a(n, "/mail/action/compose", new _y.cJ(c, r))
    }
    if (t.a().c().Enabled) {
        this.a(n, "/group/$group/$module", new _y.jc(u, t));
        this.a(n, "/group/$group/action/$action", new _y.cu(u, t));
        f && this.a(n, "/$module/action/createmoderngroup", new _y.ja(u, f));
        this.a(n, _a.W.e, new _y.iV(u))
    }
};
_y.fI.prototype = {
    b: null,
    a: function(n, t, i) {
        var r = i;
        n.e(t, r.b || (r.b = Function.createDelegate(r, r.a)))
    }
};
_y.ja = function(n, t) {
    _a.c.a(n, "eventAggregator");
    _a.c.a(t, "asyncModernGroupsComposeFactory");
    this.d = n;
    this.c = t
};
_y.ja.prototype = {
    d: null,
    c: null,
    a: function(n) {
        _a.c.a(n, "arguments");
        var f = _a.b.b(_a.a.h, "NavigateToCreateModernGroupPage", !1, null);
        var i = n.module;
        var t = 0;
        if (i) try {
            t = _j.u.b(_a.M, i)
        } catch (e) {}
        var u = this;
        var r = function() {
            u.c.a(function(n) {
                n.e();
                _a.b.a(f)
            })
        };
        this.d.a(_y.p, new _y.p(t, r, !1, !0, !0, !1, !1));
        return !0
    }
};
_y.jc = function(n, t) {
    _y.jc.initializeBase(this, [n, t]);
    _a.c.a(n, "eventAggregator")
};
_y.jc.prototype = {
    e: function(n, t, i) {
        return new _y.bk(t, i)
    }
};
_y.eA = function(n) {
    this.c = n
};
_y.eA.prototype = {
    c: null,
    a: function(n) {
        if (!n) throw Error.argumentNull("arguments");
        var r = n.module;
        var i;
        var t = null;
        if (r) try {
            i = _j.u.b(_a.M, r);
            t = this.c.h(i);
            t || (t = this.c.h(0))
        } catch (u) {
            t = this.c.h(0)
        }
        this.c.I(t);
        return this.c.a() === t
    }
};
_y.cg = function(n, t, i, r, u, f, e, o, s, h, c) {
    this.K = Function.createDelegate(this, this.T);
    this.j = Function.createDelegate(this, this.Z);
    this.r = Function.createDelegate(this, this.bb);
    this.y = Function.createDelegate(this, this.bc);
    this.A = Function.createDelegate(this, this.be);
    this.z = Function.createDelegate(this, this.bd);
    this.B = Function.createDelegate(this, this.bf);
    this.C = Function.createDelegate(this, this.bg);
    this.w = Function.createDelegate(this, this.S);
    this.x = Function.createDelegate(this, this.Y);
    _y.cg.initializeBase(this);
    this.D = !!s && s.a().h().Enabled;
    this.O(n);
    this.m = t;
    this.c = i;
    this.t = r;
    this.o = u;
    this.g = f;
    this.g.b(_h.bk, this.x);
    this.n = e;
    this.l = o;
    this.N = s;
    this.s = h;
    this.P();
    this.i();
    _dh.a(c, this)
};
_y.cg.b = function(n) {
    return !_g.b.a.doesIdEqualName(n, "inbox") && !_g.b.a.doesIdEqualName(n, "clutter")
};
_y.cg.prototype = {
    c: null,
    N: null,
    t: null,
    o: null,
    g: null,
    n: null,
    l: null,
    m: null,
    D: !1,
    s: null,
    a: null,
    f: !1,
    h: !0,
    E: !1,
    p: !1,
    v: !1,
    e: -1,
    I: -1,
    d: null,
    b: null,
    u: function(n) {
        if (this.f !== n) {
            this.f = n;
            if (this.f) {
                var i = this;
                this.n.a(function(n) {
                    n.I()
                })
            } else {
                var t = this;
                this.n.a(function(n) {
                    n.J(t.I)
                })
            }
            this.eJ("IsExpanded")
        }
        return n
    },
    G: function(n) {
        if (this.h !== n) {
            this.h = n;
            this.eJ("IsHidden")
        }
        return n
    },
    H: function(n) {
        this.E !== n && (this.E = n);
        return n
    },
    O: function(n) {
        if (this.a !== n) {
            if (this.a) {
                this.Q(this.a);
                this.q()
            }
            this.a = n;
            this.a && this.bk(this.a)
        }
        return n
    },
    U: function() {
        return this.e <= -1 ? this.b.bH.DisplayName.toLocaleUpperCase() : String.format(_u.R.PC, this.b.bH.DisplayName.toLocaleUpperCase(), this.e.toString())
    },
    bh: function(n) {
        if (this.e !== n) {
            this.e = n;
            this.eN("ClutterCount", "HeaderLabel")
        }
        return n
    },
    V: function() {
        var n = this.a.a().bH.FolderId;
        return _g.b.a.doesIdEqualName(n, "clutter")
    },
    W: function() {
        var n = this.a.a().bH.FolderId;
        return _g.b.a.doesIdEqualName(n, "inbox")
    },
    i: function() {
        if (this.a.a()) {
            this.G(!0);
            if (this.o.a() !== "TouchNarrow" && _y.E.a(_g.a.a().e(), this.D) && this.c.a().bH.ShowInferenceUiElements)
                if (this.V()) {
                    this.G(!1);
                    this.u(!0)
                } else if (this.W()) {
                this.G(!!this.a.b() && this.a.b().j());
                this.u(!1)
            }
        }
    },
    T: function() {
        this.ba()
    },
    eL: function() {
        this.a && this.Q(this.a);
        this.q();
        this.bl();
        this.g.c(_h.bk, this.x);
        _a.gd.prototype.eL.call(this)
    },
    bf: function(n, t) {
        this.i()
    },
    Y: function(n) {
        this.i()
    },
    bd: function(n, t) {
        if (this.f && !this.h) {
            this.d && this.q();
            this.d = this.a.f();
            this.d.a().d(this.w)
        } else this.q()
    },
    be: function(n, t) {
        this.i()
    },
    bc: function(n, t) {
        this.i()
    },
    P: function() {
        if (!this.b) {
            this.b = _h.a.a(_g.b.a.nameToId("clutter"));
            if (this.b) this.bj();
            else if (!this.v) {
                this.g.b(_h.bz, this.C);
                this.v = !0
            }
        }
    },
    bg: function(n) {
        this.P();
        this.g.c(_h.bz, this.C);
        this.v = !1
    },
    bk: function(n) {
        n.apcl(n.X(), this.B);
        n.apcl(n.G(), this.z);
        n.apcl(n.o(), this.A);
        n.apcl(n.A(), this.y)
    },
    Q: function(n) {
        n.rpcl(n.X(), this.B);
        n.rpcl(n.G(), this.z);
        n.rpcl(n.o(), this.A);
        n.rpcl(n.A(), this.y)
    },
    ba: function() {
        var i = this;
        this.n.a(function(n) {
            n.bx()
        });
        var t = -1;
        t = this.a.g() === "All" ? this.e > this.a.f().a().x.length ? this.e : this.a.f().a().x.length : this.a.f().a().x.length;
        if (t > 0)
            if ((1024 & this.c.a().v()) == 1024) {
                var n = this;
                this.t.h(1, _u.R.Rx, function(t, i) {
                    if (i) {
                        var r;
                        (r = n.c.a()).x(r.v() & -1025);
                        _h.f.a(n.c.a().u, n.l)
                    }
                    t ? _j.m.a().c(_y.cg.a, "OnDeleteAll", function() {
                        n.L()
                    }) : n.o.a() !== "TouchNarrow" ? n.a.cT().a() : n.a.cS().a()
                }, !0)
            } else this.L()
    },
    L: function() {
        _a.c.d(!!this.b, "clutter folder is null.");
        var i;
        _a.p.b(_y.cg.a, "DeleteAllClutter", !1, (i = new _a.K, i.a = !0, i));
        if (this.a.g() === "All") {
            var n = this;
            this.s.a(function(t) {
                var i = t.c();
                i.e(n.b);
                i.f(n.c.b().g(n.a.a().bH.FolderId, n.a.a().b, n.o.a() !== "Mouse").a());
                i.h(n.c.a().b());
                i.a(n.r);
                n.q();
                n.M();
                n.l.a(i)
            })
        } else {
            var t = this;
            this.s.a(function(n) {
                var i = n.d(t.a.a(), t.a.f().g(), t.a.g(), t.a.c());
                i.h(t.c.a().b());
                i.a(t.r);
                t.l.a(i)
            })
        }
    },
    bb: function(n) {
        var t = n;
        t.n(this.r);
        if (t.g()) this.X(t.g());
        else {
            var i = _a.p.c("DeleteAllClutter");
            if (i) {
                i.m = "Pivot:" + this.a.g();
                _a.p.a("DeleteAllClutter")
            }
        }
    },
    X: function(n) {
        var u;
        var i;
        var e, o, f;
        var h = (f = _h.bh.a(n, e = {
            val: u
        }, o = {
            val: i
        }), u = e.val, i = o.val, f);
        h || (i = n);
        var r = !1;
        var t = i.ErrorCode;
        if (!_j.u.a(t)) {
            r = !_g.bs.a(t) && t !== 408;
            r
        }
        var s = String.format("Error on completion of EmptyPivotAction = '{0}'; status code = {1}", n.message, _j.u.a(t) ? "no status code" : t);
        _j.e.c(_y.cg.a, s);
        r && u === 20 && this.bi(_u.R.Ft)
    },
    bi: function(n) {
        this.t.h(0, n, null)
    },
    bj: function() {
        if (!this.p) {
            this.b.apcl("TotalCount", this.j);
            this.b.apcl("UnreadCount", this.j);
            this.p = !0;
            this.R()
        }
    },
    bm: function() {
        if (this.p && this.b) {
            this.b.rpcl("TotalCount", this.j);
            this.b.rpcl("UnreadCount", this.j);
            this.p = !1
        }
    },
    q: function() {
        if (this.d) {
            this.d.a().e(this.w);
            this.d = null
        }
    },
    bl: function() {
        if (this.b) {
            this.bm();
            this.b = null
        }
    },
    S: function(n, t) {
        switch (t.c) {
            case 2:
                this.a.b() || this.d.a().x.length || this.a.g() !== "All" || this.M();
                break
        }
    },
    M: function() {
        this.u(!1);
        this.m && this.m.a()
    },
    R: function() {
        if (this.b) {
            this.bh(Math.max(0, this.b.bH.TotalCount));
            this.I = Math.max(0, this.b.bH.UnreadCount)
        }
    },
    Z: function(n, t) {
        this.R()
    }
};
_y.iZ = function(n, t, i, r, u, f, e, o, s) {
    this.h = n;
    this.j = t;
    this.i = i;
    this.d = r;
    this.f = u;
    this.b = f;
    this.e = e;
    this.c = o;
    this.g = s
};
_y.iZ.prototype = {
    h: null,
    j: null,
    i: null,
    d: null,
    f: null,
    b: null,
    e: null,
    c: null,
    g: null,
    a: function(n, t) {
        return new _y.cg(n, t, this.j, this.h, this.i, this.d, this.f, this.b, this.e, this.c, this.g)
    }
};
_y.E = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt, kt, dt, gt, ni, ti, ii, ri, ui, fi, ei, oi, si, hi, ci, li, ai, vi, yi, pi, wi, bi, ki, di, gi) {
    this.jw = Function.createDelegate(this, this.ly);
    this.jv = Function.createDelegate(this, this.jz);
    this.jy = Function.createDelegate(this, this.lJ);
    this.jx = Function.createDelegate(this, this.lB);
    this.ju = Function.createDelegate(this, this.lu);
    this.cc = Function.createDelegate(this, this.lC);
    this.eC = Function.createDelegate(this, this.lA);
    this.eI = Function.createDelegate(this, this.lH);
    this.eD = Function.createDelegate(this, this.lD);
    this.eH = Function.createDelegate(this, this.lG);
    this.eE = Function.createDelegate(this, this.lE);
    this.eG = Function.createDelegate(this, this.lF);
    _y.E.initializeBase(this, [n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, at, vt, yt, pt, wt, bt, kt, dt, gt, ni, ti, ii, ri, ui, fi, ei, oi, si, hi, ci, ai, vi, yi, pi, wi, bi, ki, di, gi]);
    this.eR = lt;
    this.eV = li;
    _g.D.e = n.a() === "Mouse" && !!ut && ut.a().dm().Enabled;
    this.jD() && this.jB();
    this.lz();
    _dh.a(si, this)
};
_y.E.a = function(n, t) {
    return t && !!n && n.bH.PredictedActions
};
_y.E.prototype = {
    eR: null,
    x: null,
    eV: null,
    lI: function(n) {
        if (this.x !== n) {
            this.x = n;
            this.eJ("ClutterHeaderViewModel")
        }
        return n
    },
    ie: function() {
        return this.x ? !this.x.h && this.x.f : !1
    },
    jA: function() {
        return !!this.A() && this.I.doesIdEqualName(this.A(), "clutter")
    },
    y: null,
    ey: function() {
        var n = this.f;
        var i = n.ca();
        _y.d.prototype.ey.call(this);
        if (this.dJ()) {
            this.f.dl(i);
            if (this.p) {
                var t = n;
                this.r.dx(n.h(), this.s, n.p(), t.x || (t.x = Function.createDelegate(t, t.bk)), n.a(), n.t(), n.m(), n.d(), n.c(), n.bF())
            }
        }
    },
    lg: function() {
        this.y && this.y.l(this.f)
    },
    ej: function(n, t) {
        _y.d.prototype.ej.call(this, n, t);
        this.y.a(this.f, this.f.c())
    },
    iM: function(n) {
        if (this.di()) {
            this.bF = new _j.g(this.eG, _y.E.b);
            this.bE = new _j.g(this.eE, _y.E.b)
        }
        this.i.e().apcl("PredictedActions", this.eH);
        _h.a.c && this.i.a().apcl("IsFocusedInboxEnabled", this.eD);
        _y.d.prototype.iM.call(this, n)
    },
    iH: function() {
        _y.d.prototype.iH.call(this);
        if (this.f) {
            if (this.x) {
                this.x.O(this.f);
                this.jC()
            }
            if (_h.a.c) {
                this.f.apcl(this.f.cD(), this.eI);
                this.f.apcl(this.f.cB(), this.eC)
            }
        }
    },
    cS: function() {
        var n = _y.d.prototype.cS.call(this);
        this.di() && (this.jA() ? n.p.a(new _fm.c(_u.R.SJ, null, this.bF)) : this.A() && this.I.doesIdEqualName(this.A(), "inbox") && this.i.a().bH.ShowInferenceUiElements && n.p.a(new _fm.c(_u.R.LZ, null, this.bE)));
        return n
    },
    du: function() {
        _y.d.prototype.du.call(this);
        this.x && this.x.H(!0)
    },
    dx: function() {
        _y.d.prototype.dx.call(this);
        this.x && this.x.H(!1)
    },
    S: function() {
        _y.d.prototype.S.call(this);
        this.x && this.j.a() !== "TouchNarrow" && this.x.H(this.N)
    },
    iR: function() {
        _y.d.prototype.iR.call(this);
        this.dJ() && this.y.j(this.f)
    },
    eL: function() {
        this.i.e().rpcl("PredictedActions", this.eH);
        if (this.x) {
            this.x.rpcl("IsHidden", this.cc);
            this.x.rpcl("IsExpanded", this.cc)
        }
        if (_h.a.c) {
            this.i.a().rpcl("IsFocusedInboxEnabled", this.eD);
            this.y.dispose()
        }
        _y.d.prototype.eL.call(this)
    },
    bk: function(n, t, i) {
        var f = this.f.j();
        var e = this.I.doesIdEqualName(f, "clutter");
        var o = this.f.c();
        _y.d.prototype.bk.call(this, n, t, !1);
        var u = this.f.j();
        if (e) {
            if (this.I.doesIdEqualName(u, "inbox")) {
                var r = _a.p.c("DeleteAllClutter");
                if (r) {
                    r.m = "Pivot:" + this.f.g();
                    _a.p.a("DeleteAllClutter")
                }
            }
            this.j.a() === "TouchWide" && this.dR()
        }
        this.y && this.y.a(this.f, o)
    },
    et: function(n) {
        return this.di() && !_y.cg.b(n)
    },
    iP: function(n, t) {
        this.x && this.x.i();
        _y.d.prototype.iP.call(this, n, t)
    },
    hW: function(n, t) {
        this.f.c() !== -1 ? this.lv(t) : _y.d.prototype.hW.call(this, n, t)
    },
    iF: function() {
        _y.d.prototype.iF.call(this);
        if (this.f) {
            this.f.rpcl(this.f.cD(), this.eI);
            this.f.rpcl(this.f.cB(), this.eC)
        }
    },
    iO: function(n) {
        _y.d.prototype.iO.call(this, n);
        this.y && this.y.i(n)
    },
    iG: function(n) {
        _y.d.prototype.iG.call(this, n);
        this.y && this.y.e(n)
    },
    lz: function() {
        this.y = new _y.jE;
        this.j.b() && _h.a.c && _j.m.a().d(_y.E.b, "InitFocusedRollup", this.ju)
    },
    lu: function() {
        this.eV.a(this.jx)
    },
    lB: function(n) {
        this.y = n;
        this.y.d(this.f, this.T);
        this.eJ("FocusedInboxManager")
    },
    lH: function(n, t) {
        if (this.f && this.o && this.o.a() === "inbox" && !this.dk) {
            var u = this.f.c();
            var i = this.f.cC()[this.f.ca()].a;
            this.f.ba(i);
            this.y.h(this.f, u);
            this.db("All");
            var r = this.bz(this.f.a());
            r.a() !== this.s ? this.d(r.a(), !1) : this.O().d(new _h.W("All"));
            _a.b.c(_a.a.bT, "FO_PivotChange", i.toString(), 0)
        }
    },
    lA: function(n, t) {
        this.y.f()
    },
    lv: function(n) {
        var t = this;
        this.B.h(1, String.format(_u.R.NV, this.f.c() ? _u.R.FU : _u.R.Lo), function(i, r) {
            i && t.lw(t.f.a(), n)
        }, !1, null, null, _h.a.c ? _u.R.IT : _u.R.Bs)
    },
    lw: function(n, t) {
        var i = this;
        this.bw.a(function(r) {
            var u = r.d(i.f.a(), i.f.f().g(), i.f.g(), i.f.c());
            u.e(n);
            u.f(i.bz(n).a());
            u.h(i.i.a().b());
            u.j(t);
            _a.g.a.a(u)
        })
    },
    lE: function() {
        this.f && this.f.cM().a()
    },
    lF: function() {
        this.f && this.f.cN().a()
    },
    lG: function(n, t) {
        if (this.di()) {
            !this.x && this.jD() && this.jB();
            this.lt();
            this.bF = new _j.g(this.eG, _y.E.b);
            this.bE = new _j.g(this.eE, _y.E.b)
        } else {
            this.bF = null;
            this.bE = null
        }
        this.dR()
    },
    jB: function() {
        this.lI(this.eR.a(this.f, new _j.g(this.jy, _a.a.bA)));
        this.x.apcl("IsHidden", this.cc);
        this.x.apcl("IsExpanded", this.cc);
        this.oD(new _j.g(this.x.K, _y.E.b));
        this.jC()
    },
    lC: function(n, t) {
        this.eJ("IsClutterShownExpanded")
    },
    lJ: function() {
        this.jA() ? this.jz() : this.lx();
        this.j.a() === "TouchWide" && this.dR()
    },
    lx: function() {
        var n = this.I.nameToId("clutter");
        if (n) {
            this.h.a.e = this.h.b;
            this.h.b.r(n);
            this.bk(!1, !0, !1)
        }
    },
    jz: function() {
        this.h.a.e = this.h.b;
        this.kI(!0, !1)
    },
    jC: function() {
        this.p || this.f.ey(new _j.g(this.jv, _y.E.b), this.md())
    },
    jD: function() {
        return this.i.e().bH.PredictedActions && !this.p
    },
    di: function() {
        return _y.E.a(this.i.e(), !0)
    },
    lt: function() {
        if (this.I.nameToId("clutter")) _h.a.z(null);
        else {
            var n = new _h.bp("GetFolderAction_InferenceMailModuleViewModel_BootstrapClutterFolder", !1);
            n.j = new _h.bu;
            n.f = [new _g.s("clutter")];
            n.a(this.jw);
            _a.g.a.a(n)
        }
    },
    ly: function(n) {
        var t = n;
        t.G || _h.a.z(null)
    },
    lD: function(n, t) {
        this.eJ("IsFocusedInboxUIEnabled");
        var i = this.dN();
        if (this.N && i && i.h.a() === "inbox") {
            this.dm = !0;
            this.ld(this.I.nameToId("inbox"));
            this.dm = !1
        }
        this.y.g(this.f)
    }
};
_y.ho = function() {};
_y.ho.b = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt, kt, dt, gt, ni, ti, ii, ri, ui, fi, ei, oi, si, hi, ci, li, ai, vi, yi, pi, wi, bi, ki, di, gi) {
    return ut && (ut.a().h().Enabled || _y.d.b(ut, h, dt, n)) ? new _y.E(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, lt, ct, at, vt, yt, pt, wt, bt, kt, dt, gt, ni, ti, ii, ri, ui, fi, ei, oi, si, hi, ci, li, ai, vi, yi, pi, wi, bi, ki, di, gi) : new _y.d(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, lt, at, vt, yt, pt, wt, bt, kt, dt, gt, ni, ti, ii, ri, ui, fi, ei, oi, si, hi, ci, ai, vi, yi, pi, wi, bi, ki, di, gi)
};
_y.ho.a = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d) {
    if (n.a() !== "Mouse" || !h || !f || !f.a().c().Enabled) return null;
    var nt = new _y.de(u, null, t, n, o, s, !1, t.t(), !0, f, c, l, p, w, r, a, v, y, b, k, t.j());
    var g = new _y.w(f, i, nt, n, r, t, u, !0, d);
    return new _y.s(g, _u.R.IP, h, e, f, t, r, u)
};
_y.d = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt, kt, dt, gt, ni, ti, ii, ri, ui, fi, ei, oi, si, hi, ci, li, ai, vi, yi, pi, wi, bi, ki) {
    _y.d.initializeBase(this, [_u.R.DL, e, new _y.bh(n.a(), hi, null, ut, wt, e)]);
    var nr = _j.n.b(_a.a.by, 2, "MMVMInit");
    this.j = n;
    this.i = h;
    this.bY = c;
    this.cN = l;
    this.I = t;
    this.cR = f;
    this.bS = u;
    this.ek = a;
    this.eh = v;
    this.ed = y;
    this.ir = p;
    this.w = b;
    this.ec = k;
    this.ex = d;
    this.bn = nt;
    this.bI = tt;
    this.bN = st;
    this.cU = it;
    this.ee = rt;
    this.L = _y.w.a(n) ? 420 : 327;
    this.B = g;
    this.K = o;
    this.iB = new _y.jC(e, o);
    this.jd = et;
    this.hR = ot;
    this.by = ft;
    this.ic = ct;
    this.ca = lt;
    this.dI = vt;
    this.hQ = ni;
    this.da = yt;
    this.q = ut;
    this.dc = bt;
    this.D = kt;
    this.jg = dt;
    this.is = gt;
    this.im = ii;
    this.bH = ui;
    this.el = fi;
    this.jn = ei;
    this.bw = si;
    this.hN = ci;
    this.dz = yi;
    this.hO = pi;
    this.cT = oi;
    this.jF = ki;
    _dh.a(oi, this);
    this.G.b(_y.jo, this.fs || (this.fs = Function.createDelegate(this, this.mw)));
    this.m = wt;
    this.jI = li;
    this.hJ = ai;
    this.p = this.j.a() === "Mouse";
    this.p && this.m.apcl("ReadingPanePosition", this.cu || (this.cu = Function.createDelegate(this, this.kx)));
    this.E = s;
    this.q = ut;
    this.dq = r;
    _a.c.b(this.dq, "asyncReadingPaneViewModel");
    this.bX = ht;
    this.mQ();
    this.v = i;
    if (i) {
        this.h = i.a;
        i.bA(this.H);
        this.kJ()
    } else this.h = this.D.c() ? new _y.w(this.q, this.bY, new _y.jl(e, null, this.i, this.j, this.cU, !1, this.i.t(), !1, this.q, at, ti, this.da, this.bw, this.cT, this.K, this.E, this.D, this.im, !0), this.j, this.K, this.i, e, !1, ki) : new _y.w(this.q, this.bY, this.bf(null, this.bI, !1, this.i.t(), this.D.c(), at, this.da, this.E, ri, this.bH), this.j, this.K, this.i, e, !1, null);
    var di = this.i.b().g(this.X(), !1, !this.p);
    this.bV = this.et(this.X());
    this.bA = new _j.g(this.gv || (this.gv = Function.createDelegate(this, this.nM)), _y.d.a);
    if (this.q) {
        this.bP = this.q.a().dD().Enabled;
        this.iq = this.q.a().v().Enabled
    }
    this.dn = n.a() === "TouchNarrow" && _a.o.a().a();
    this.bG = new _j.l;
    this.lN(di);
    this.O().k(di, this.A());
    if (this.p) {
        this.kY(di);
        this.i.a().bH.ShowReadingPaneOnFirstLoad || this.lf(_u.R.Tp, _u.R.CY, new _j.g(this.hm || (this.hm = Function.createDelegate(this, this.pa)), _a.a.o))
    } else this.j.a() === "TouchNarrow" && this.dc && this.dc.a(this.h);
    this.mN();
    this.mM();
    this.dh = this.p ? this.h.c : _y.w.c(this.j);
    this.bZ = !1;
    this.cV = this.ij();
    this.H.c(_u.R.HO);
    this.H.y(this.fD || (this.fD = Function.createDelegate(this, this.mY)));
    this.H.p(this.gV || (this.gV = Function.createDelegate(this, this.oj)));
    this.nf();
    this.hX = new _j.g(this.fk || (this.fk = Function.createDelegate(this, this.ma)), _y.d.a);
    this.be = new _j.g(this.gg || (this.gg = Function.createDelegate(this, this.ny)), _y.d.a);
    this.ev = new _j.g(this.ha || (this.ha = Function.createDelegate(this, this.oo)), _y.d.a);
    this.hM = new _j.g(this.fZ || (this.fZ = Function.createDelegate(this, this.nr)), _y.d.a);
    this.iV = new _j.g(this.gS || (this.gS = Function.createDelegate(this, this.og)), _y.d.a);
    this.bK = new _j.g(this.gn || (this.gn = Function.createDelegate(this, this.nF)), _y.d.a);
    this.cL = new _j.g(this.gc || (this.gc = Function.createDelegate(this, this.nt)), _y.d.a);
    this.cM = new _j.g(this.gm || (this.gm = Function.createDelegate(this, this.nE)), _y.d.a);
    this.iw = new _j.g(this.gA || (this.gA = Function.createDelegate(this, this.nR)), _y.d.a);
    this.hL = new _j.g(this.fY || (this.fY = Function.createDelegate(this, this.nq)), _y.d.a);
    this.ef = new _j.g(this.gD || (this.gD = Function.createDelegate(this, this.nU)), _y.d.a);
    this.iv = new _j.g(this.gx || (this.gx = Function.createDelegate(this, this.nO)), _y.d.a);
    this.eg = new _j.g(this.gE || (this.gE = Function.createDelegate(this, this.nV)), _y.d.a);
    this.iz = new _j.g(this.gB || (this.gB = Function.createDelegate(this, this.nS)), _y.d.a);
    this.iA = new _j.g(this.gC || (this.gC = Function.createDelegate(this, this.nT)), _y.d.a);
    this.dU = new _j.g(this.fR || (this.fR = Function.createDelegate(this, this.nj)), _y.d.a);
    this.dT = new _j.g(this.ff || (this.ff = Function.createDelegate(this, this.lU)), _y.d.a);
    this.hV = new _j.g(this.gj || (this.gj = Function.createDelegate(this, this.nB)), _y.d.a);
    this.en = new _j.g(this.gQ || (this.gQ = Function.createDelegate(this, this.oe)), _y.d.a);
    this.em = new _j.g(this.gP || (this.gP = Function.createDelegate(this, this.od)), _y.d.a);
    this.cP = new _j.g(this.go || (this.go = Function.createDelegate(this, this.nG)), _y.d.a);
    this.cJ = new _j.g(this.fV || (this.fV = Function.createDelegate(this, this.nn)), _y.d.a);
    this.dB = new _j.g(this.gk || (this.gk = Function.createDelegate(this, this.nC)), _y.d.a);
    this.hT = new _j.g(this.gf || (this.gf = Function.createDelegate(this, this.nw)), _y.d.a);
    this.hU = new _j.g(this.gi || (this.gi = Function.createDelegate(this, this.nA)), _y.d.a);
    this.ix = new _j.g(this.gy || (this.gy = Function.createDelegate(this, this.nP)), _y.d.a);
    this.iy = new _j.g(this.gz || (this.gz = Function.createDelegate(this, this.nQ)), _y.d.a);
    this.id = new _j.g(this.gp || (this.gp = Function.createDelegate(this, this.nH)), _y.d.a);
    this.jj = new _j.g(this.hd || (this.hd = Function.createDelegate(this, this.or)), _y.d.a);
    this.hK = new _j.g(this.fW || (this.fW = Function.createDelegate(this, this.no)), _y.d.a);
    this.iS = new _j.g(this.gJ || (this.gJ = Function.createDelegate(this, this.nZ)), _y.d.a);
    this.jo = new _j.g(this.he || (this.he = Function.createDelegate(this, this.os)), _y.d.a);
    this.iX = new _j.g(this.gU || (this.gU = Function.createDelegate(this, this.oi)), _y.d.a);
    this.jc = new _j.g(this.gZ || (this.gZ = Function.createDelegate(this, this.on)), _y.d.a);
    this.hF = new _j.g(this.gF || (this.gF = Function.createDelegate(this, this.nW)), _y.d.a);
    this.hG = new _j.g(this.gG || (this.gG = Function.createDelegate(this, this.nX)), _y.d.a);
    this.hS = new _j.g(this.fg || (this.fg = Function.createDelegate(this, this.lV)), _y.d.a);
    this.eo = new _j.g(this.gT || (this.gT = Function.createDelegate(this, this.oh)), _y.d.a);
    this.ib = new _j.g(this.fn || (this.fn = Function.createDelegate(this, this.ia)), _y.d.a);
    var gi = this;
    this.bM = new _j.g(function() {
        gi.jX(null)
    }, _y.d.a);
    this.cX = new _j.g(this.fP || (this.fP = Function.createDelegate(this, this.kf)), _y.d.a);
    this.dy = new _j.g(this.fe || (this.fe = Function.createDelegate(this, this.lT)), _y.d.a);
    this.iC = new _j.g(this.fO || (this.fO = Function.createDelegate(this, this.nh)), _y.d.a);
    this.dl = new _j.g(this.cB || (this.cB = Function.createDelegate(this, this.kF)), _y.d.a);
    this.iU = new _j.g(this.hg || (this.hg = Function.createDelegate(this, this.oy)), _y.d.a);
    this.hy = new _j.g(this.fU || (this.fU = Function.createDelegate(this, this.nl)), _y.d.a);
    this.iY = new _j.g(this.hh || (this.hh = Function.createDelegate(this, this.oA)), _y.d.a);
    this.hI = new _j.g(this.hc || (this.hc = Function.createDelegate(this, this.oq)), _y.d.a);
    if (pt && pt.a.ItemID && pt.a.ispopout && pt.a.ispopout === "0") {
        this.f.ew(!0);
        this.f.eq(pt.a.ItemID);
        pt.a.viewmodel && pt.a.viewmodel.toLowerCase() === "readmessageitem" && this.m.q() && this.kW(!0)
    }
    this.iT = this.i.t();
    this.bO = this.p && !!this.q && this.q.a().bY().Enabled;
    this.iM(di);
    this.hZ = w;
    this.lh(null, null);
    this.apcl("IsClutterShownExpanded", this.hs || (this.hs = Function.createDelegate(this, this.lh)));
    this.li(null, null);
    this.cI = this.p && !!this.q && this.q.a().gy().Enabled;
    if (this.cI) {
        this.i.a().apcl("ShowUpNext", this.cx || (this.cx = Function.createDelegate(this, this.kz)));
        this.dK() && this.kd()
    }
    this.v && this.v.apcl(_y.J.a, this.cl || (this.cl = Function.createDelegate(this, this.kp)));
    this.eb = vi;
    this.mV();
    this.dA = wi;
    this.mP();
    this.ew = bi;
    this.mZ();
    this.kb = !!this.q && this.q.a().d().Enabled;
    _j.n.a(nr)
};
_y.d.c = function(n, t) {
    var i = t.b().g(n, !1, !1).e;
    return i !== 3 ? i : t.a().bH.GlobalReadingPanePosition
};
_y.d.b = function(n, t, i, r) {
    var u = !!_h.s.a && !!_h.s.a.e && _h.s.a.e.a();
    return !!r && r.a() === "Mouse" && !u && !_a.bs.a() && t.a().bH.IsFocusedInboxFeatureSupported
};
_y.d.d = function(n) {
    _y.d.f || (_y.d.f = _y.d.p());
    var t = _y.d.f[n];
    _j.h.a(t) && (t = "DefaultSwitchPivotCategory");
    return t
};
_y.d.h = function(n, t, i) {
    return t.b().g(n.bH.FolderId, n.b, i.a() !== "Mouse")
};
_y.d.k = function(n, t, i) {
    var u = _g.b.a.nameToId("inbox");
    var r = _y.d.c(u, t);
    return n.a().gu().Enabled && i.a() === "Mouse" && !r
};
_y.d.l = function(n, t) {
    return n.j() && !t.bH.IsProsumerConsumerMailbox && !t.bH.IsPremiumConsumerMailbox && (1048576 & n.a().v()) == 1048576 && !t.bH.IsShadowMailbox
};
_y.d.p = function() {
    var n = {};
    n.All = "SwitchPivotAll";
    n.Unread = "SwitchPivotUnread";
    n.ToOrCcMe = "SwitchPivotToMe";
    n.Flagged = "SwitchPivotFlagged";
    n.Pinned = "SwitchPivotPinned";
    n.Mentioned = "SwitchPivotMentioned";
    return n
};
_y.d.prototype = {
    fp: null,
    gu: null,
    fB: null,
    hp: null,
    fh: null,
    fc: null,
    ge: null,
    fd: null,
    hj: null,
    fQ: null,
    fH: null,
    fK: null,
    hl: null,
    cA: null,
    fv: null,
    fx: null,
    fq: null,
    fC: null,
    hx: null,
    ft: null,
    fw: null,
    fy: null,
    fA: null,
    fz: null,
    gM: null,
    gL: null,
    gd: null,
    fi: null,
    fj: null,
    gt: null,
    fL: null,
    gW: null,
    hw: null,
    hv: null,
    cy: null,
    eY: null,
    gI: null,
    hq: null,
    gl: null,
    gb: null,
    gK: null,
    ht: null,
    gq: null,
    hk: null,
    gr: null,
    gs: null,
    hu: null,
    fb: null,
    cH: null,
    gw: null,
    hn: null,
    fE: null,
    hi: null,
    fG: null,
    fM: null,
    gR: null,
    ce: null,
    fl: null,
    bq: null,
    hb: null,
    fX: null,
    fN: null,
    fT: null,
    fF: null,
    cf: null,
    cE: null,
    fJ: null,
    bo: null,
    cg: null,
    ck: null,
    cm: null,
    cF: null,
    bs: null,
    cG: null,
    cp: null,
    ct: null,
    cv: null,
    cs: null,
    cq: null,
    cz: null,
    ci: null,
    Q: null,
    hf: null,
    cj: null,
    cC: null,
    cd: null,
    cD: null,
    gY: null,
    gH: null,
    ho: null,
    cn: null,
    gh: null,
    co: null,
    bp: null,
    ch: null,
    gX: null,
    cw: null,
    cl: null,
    cx: null,
    hs: null,
    hc: null,
    hh: null,
    fU: null,
    hg: null,
    cB: null,
    fO: null,
    fe: null,
    fP: null,
    fn: null,
    gT: null,
    fg: null,
    gG: null,
    gF: null,
    gZ: null,
    gU: null,
    he: null,
    gJ: null,
    fW: null,
    hd: null,
    gp: null,
    gz: null,
    gy: null,
    gi: null,
    gf: null,
    gk: null,
    fV: null,
    go: null,
    gP: null,
    gQ: null,
    gj: null,
    ff: null,
    fR: null,
    gC: null,
    gB: null,
    gE: null,
    gx: null,
    gD: null,
    fY: null,
    gA: null,
    gm: null,
    gc: null,
    gn: null,
    gS: null,
    fZ: null,
    ha: null,
    gg: null,
    fk: null,
    gV: null,
    fD: null,
    hm: null,
    gv: null,
    cu: null,
    fs: null,
    T: null,
    cU: null,
    K: null,
    D: null,
    bn: null,
    q: null,
    by: null,
    el: null,
    j: null,
    i: null,
    bY: null,
    im: null,
    bH: null,
    jn: null,
    dI: null,
    hQ: null,
    cT: null,
    da: null,
    ek: null,
    eh: null,
    ed: null,
    cR: null,
    hR: null,
    ic: null,
    bN: null,
    ee: null,
    hZ: null,
    jd: null,
    bw: null,
    ca: null,
    hJ: null,
    eb: null,
    dA: null,
    ew: null,
    dz: null,
    hO: null,
    de: null,
    dg: null,
    bd: null,
    ex: null,
    m: null,
    bM: null,
    cX: null,
    dy: null,
    iC: null,
    be: null,
    ev: null,
    cJ: null,
    dB: null,
    hM: null,
    iV: null,
    bK: null,
    cL: null,
    cM: null,
    bA: null,
    hL: null,
    iS: null,
    iX: null,
    jc: null,
    iw: null,
    ef: null,
    iv: null,
    eg: null,
    iz: null,
    iA: null,
    dU: null,
    dT: null,
    hV: null,
    en: null,
    em: null,
    cP: null,
    hU: null,
    ix: null,
    iy: null,
    id: null,
    jj: null,
    hK: null,
    hT: null,
    jo: null,
    hS: null,
    eo: null,
    ib: null,
    jI: null,
    jg: null,
    iY: null,
    iU: null,
    kb: !1,
    bW: !1,
    Y: !1,
    bP: !1,
    iq: !1,
    iT: !1,
    bO: !1,
    bS: null,
    ir: null,
    kD: "RaisePeopleModuleSearchEvent",
    f: null,
    bv: null,
    bC: null,
    bj: null,
    bu: null,
    E: null,
    dZ: null,
    g: null,
    dq: null,
    h: null,
    z: null,
    o: null,
    dp: null,
    dr: null,
    bm: null,
    dc: null,
    cW: null,
    bD: 0,
    P: null,
    iE: null,
    bE: null,
    bF: null,
    cN: null,
    I: null,
    s: 0,
    bi: !1,
    bh: !1,
    bG: null,
    ei: null,
    L: 0,
    hN: null,
    cK: null,
    is: null,
    bB: null,
    U: null,
    dS: null,
    io: !1,
    bQ: null,
    ip: !1,
    bI: null,
    ec: null,
    dt: !1,
    dh: !1,
    bZ: !1,
    eu: !1,
    jf: !1,
    hX: null,
    cV: 0,
    dY: !1,
    B: null,
    bx: null,
    iB: null,
    Z: null,
    bb: null,
    bX: null,
    bT: null,
    bV: !1,
    v: null,
    cQ: null,
    w: null,
    dH: null,
    r: null,
    bl: 0,
    dW: !1,
    dX: !1,
    dd: !1,
    je: null,
    ea: null,
    dG: null,
    dF: null,
    dE: null,
    dC: null,
    dD: null,
    dP: !1,
    cO: 0,
    jl: null,
    dO: !1,
    W: null,
    it: null,
    dV: !1,
    jF: null,
    mf: function() {
        return this.i.a().bH.ShowReadingPaneOnFirstLoad || this.dP || !_y.d.c(this.f.a().bH.FolderId, this.i)
    },
    iZ: function(n) {
        if (this.dP !== n) {
            this.dP = n;
            this.eJ("HideSuperStart")
        }
        return n
    },
    kP: function(n) {
        if (this.dD !== n) {
            this.dD = n;
            this.eJ("EmptyRPDisplayImage")
        }
        return n
    },
    kQ: function(n) {
        if (this.dG !== n) {
            this.dG = n;
            this.eJ("EmptyRPMessage")
        }
        return n
    },
    oE: function(n) {
        if (this.dC !== n) {
            this.dC = n;
            this.eJ("EmptyRPDetailedMessage")
        }
        return n
    },
    oG: function(n) {
        if (this.dF !== n) {
            this.dF = n;
            this.eJ("EmptyRPLinkMessage")
        }
        return n
    },
    oF: function(n) {
        if (this.dE !== n) {
            this.dE = n;
            this.eJ("EmptyRPLinkCommand")
        }
        return n
    },
    mq: function() {
        if (!this.dg && this.ca) {
            var n = this;
            this.ca.a(function(t) {
                if (!n.dg) {
                    n.dg = t.b();
                    n.eJ("UserActionsViewModel")
                }
            })
        }
        return this.dg
    },
    bL: function() {
        if (!this.bd && this.p && this.ca) {
            var n = this;
            this.ca.a(function(t) {
                if (!n.bd) {
                    n.bd = t.a();
                    n.eJ("DelayedSendInformationViewModel");
                    n.bd.apcl("ShouldShowMessageBar", n.cw || (n.cw = Function.createDelegate(n, n.ky)))
                }
            })
        }
        return this.bd
    },
    jN: function() {
        return !!this.bL() && this.bL().a()
    },
    V: null,
    ie: function() {
        return !1
    },
    hz: null,
    md: function() {
        return this.hz
    },
    oD: function(n) {
        this.hz = n;
        return n
    },
    hH: null,
    dl: null,
    hy: null,
    l: function() {
        return this.dp
    },
    kN: function(n) {
        if (this.dp !== n) {
            this.dp = n;
            this.eJ("ApplicationBarViewModel")
        }
        return n
    },
    bR: function() {
        return this.dr
    },
    kO: function(n) {
        if (this.dr !== n) {
            this.dr = n;
            this.eJ("BottomAppBarViewModel")
        }
        return n
    },
    u: function() {
        return this.bm
    },
    kX: function(n) {
        if (this.bm !== n) {
            this.bm = n;
            this.eJ("TopAppBarViewModel")
        }
        return n
    },
    eF: function() {
        return this.dY
    },
    kS: function(n) {
        if (n !== this.dY) {
            this.dY = n;
            this.eJ("IsTransitionedIn")
        }
        return n
    },
    n: function() {
        return this.p ? 0 : 2
    },
    hI: null,
    eA: function() {
        return this.dc
    },
    oR: function(n) {
        if (this.ei !== n) {
            this.ei = n;
            this.eJ("OfflineActivityInfo")
        }
        return n
    },
    mh: function() {
        return _a.o.a().K
    },
    hE: null,
    hA: null,
    hB: null,
    hD: null,
    hC: null,
    er: function(n) {
        if (this.f !== n) {
            this.iF();
            this.f = n;
            this.iH();
            this.kj();
            this.eJ("CurrentMailListViewModel")
        }
        return n
    },
    dL: function() {
        this.dZ || (this.dZ = new _y.A);
        return this.dZ
    },
    kT: function(n) {
        if (this.cV !== n) {
            this.cV = n;
            this.eJ("MailNavigationAndListViewControlsWidth")
        }
        return n
    },
    dJ: function() {
        return _y.d.b(this.q, this.i, this.D, this.j) && this.i.a().bH.IsFocusedInboxEnabled
    },
    a: function() {
        return this.s
    },
    eq: function(n) {
        if (this.s !== n) {
            this.s = n;
            this.nx()
        }
        return n
    },
    nx: function() {
        this.eJ("IsInConversationView")
    },
    br: function() {
        return null
    },
    cr: function() {
        return null
    },
    b: function() {
        return !this.g || !this.g.b() ? null : this.g.b().a()
    },
    oC: function(n) {
        if (this.cK === n) return n;
        this.cK = n;
        this.eJ("CategoryManagementDialog");
        return n
    },
    oM: function(n) {
        if (this.bB === n) return n;
        this.bB = n;
        this.eJ("KeyboardShortcutsViewModel");
        return n
    },
    oP: function(n) {
        if (this.bQ === n) return n;
        this.bQ = n;
        this.eJ("MailFolderPermissionsDialog");
        return n
    },
    t: function() {
        return this.eM(_y.d.g)
    },
    kR: function(n) {
        this.eK(_y.d.g, n);
        return n
    },
    hF: null,
    hG: null,
    jK: function() {
        return this.f.h() > 0 && this.f.dN() && _g.j.e(this.o)
    },
    kU: function(n) {
        if (this.cW !== n) {
            this.cW = n;
            this.eJ("PivotOptions")
        }
        return n
    },
    bU: function() {
        return this.E
    },
    bt: function(n) {
        this.E = n;
        return n
    },
    oS: function(n) {
        if (this.bD !== n) {
            this.bD = n;
            this.ol();
            this.eJ("PivotSelectedOptionIndex")
        }
        return n
    },
    es: function(n) {
        if (this.eu !== n) {
            this.eu = n;
            this.eJ("ShouldShowListLoadingIndicator")
        }
        return n
    },
    jP: function() {
        if (this.p && this.m.a === 1) {
            this.L = this.i.b().u().a;
            if (this.L === -1) {
                var n = this.i.b().g(this.R(), !1, !this.p);
                this.L = n.i;
                this.jm(this.L, !0)
            } else if (!(this.L >= 314 && this.L <= 574)) {
                this.L = 327;
                this.jm(this.L, !1)
            }
        }
        return this.L
    },
    oO: function(n) {
        if (this.L !== n && this.p) {
            this.L = n;
            this.m.a === 1 ? this.jm(this.L, !1) : this.i.b().ba();
            this.eJ("ListViewWidth");
            this.r && this.g && this.g.g() && this.r.ef(this.g.g().a(), this.L);
            this.G.a(_a.cI, new _a.cI)
        }
        return n
    },
    jO: function() {
        return this.bn ? !this.bn.g : !!this.C() && this.C().y()
    },
    oQ: function(n) {
        if (this.r !== n) {
            this.r = n;
            this.eJ("MailModuleCommandingBarManager")
        }
        return n
    },
    kM: function(n) {
        if (this.W !== n) {
            this.W && this.W.c();
            this.W = n;
            this.eJ(_y.d.m)
        }
        return n
    },
    jL: function() {
        if (!this.bv) {
            this.bv = this.bS.b(this.hR);
            this.bG.a(this.bv)
        }
        return this.bv
    },
    dM: function() {
        if (!this.bC) {
            this.bC = this.bS.d();
            this.bG.a(this.bC)
        }
        return this.bC
    },
    p: !1,
    mj: function() {
        return _a.F.h()
    },
    O: function() {
        this.Z || (this.Z = this.jd.a(this.f, this, this.i, this.q, this.cR, this.K, this.D));
        return this.Z
    },
    kV: function(n) {
        if (this.o !== n) {
            this.o = n;
            this.eQ(["SelectedFolder", "IsInClutterView", "IsDumpsterView", "HideUpNextControl"])
        }
        return n
    },
    A: function() {
        return this.o ? this.o.bH.FolderId : this.X()
    },
    ml: function() {
        return this.C() && this.C().d() ? 48 : 61
    },
    ig: function() {
        return !!this.v
    },
    mg: function() {
        return !!this.o && this.o.a() === "recoverableitemsdeletions"
    },
    mk: function() {
        return _y.w.a(this.j)
    },
    cI: !1,
    dK: function() {
        return this.i.a().bH.ShowUpNext
    },
    jM: function() {
        return !this.cI || !this.dK() || !!this.o && (this.o.a() === "deleteditems" || this.o.a() === "recoverableitemsdeletions") || !!this.C() && this.C().d()
    },
    mo: function() {
        return this.C() ? this.C().bo() : !1
    },
    me: function() {
        return this.C() ? this.C().bO() : !1
    },
    mn: function() {
        return this.C() ? this.C().P() : !1
    },
    mm: function() {
        return this.C() ? this.C().y() : !1
    },
    oB: function(n) {
        this.bb = n;
        this.eJ("ArchiveFolderPickerDialog");
        return n
    },
    oT: function(n) {
        if (this.bW !== n) {
            this.bW = n;
            this.eJ("ReadingPaneHidden");
            this.G.a(_a.dh, new _a.dh(this.bW))
        }
        return n
    },
    oN: function(n) {
        if (this.Y !== n) {
            this.Y = n;
            this.eJ("ListViewHidden");
            this.G.a(_a.eZ, new _a.eZ(this.Y))
        }
        return n
    },
    kW: function(n) {
        if (this.dd !== n) {
            this.dd = n;
            this.eJ("ShowDeepLinkedEmailInImmersiveReadingPane")
        }
        return n
    },
    oK: function(n) {
        if (this.dW !== n) {
            this.dW = n;
            this.eJ("IsMailHeaderHidden")
        }
        return n
    },
    oL: function(n) {
        if (this.dX !== n) {
            this.dX = n;
            this.eJ("IsMailPivotHidden")
        }
        return n
    },
    mi: function() {
        return !!this.C() && this.C().d()
    },
    oH: function(n) {
        if (n !== this.dH) {
            this.dH = n;
            this.eJ("FilterCalloutViewModel")
        }
        return n
    },
    dn: !1,
    oI: function(n) {
        if (n !== this.dO) {
            this.dO = n;
            this.eJ("HideSortOptionsDropDown")
        }
        return n
    },
    mp: function() {
        return _y.d.l(this.i, this.bY) && !!this.q && this.q.a().fX().Enabled
    },
    dj: null,
    dk: !1,
    dm: !1,
    X: function() {
        return this.R()
    },
    R: function() {
        return this.I.nameToId("inbox")
    },
    mc: function() {
        return !!this.f && !!this.f.R() && this.f.R().b
    },
    ih: function() {
        return this.f.r().length === 1
    },
    bg: function() {
        return !!this.g && !!this.g.b() && this.g.b().bc()
    },
    ij: function() {
        var n = 0;
        var t = _y.w.a(this.j) ? 420 : 327;
        this.m.b || (n = (this.jO() ? this.h.h() : this.h.d) + t);
        return n
    },
    bc: function(n, t, i) {
        if (!this.bh) {
            var o = this;
            this.cR.a(function(n) {
                n.by(o.A())
            });
            _a.O.a(_a.a.p, "MailComposeNewLoad", 3);
            var u;
            var f = (u = new _a.K, u.a = !0, u.b = !0, u.d = !0, u.c = !0, u);
            var e = _a.b.b(_a.a.p, "MailComposeNew", !1, f);
            f.c = !1;
            var h = _a.b.b(_a.a.p, "MailComposeNewLoad", !1, f);
            var s = _j.n.b(_a.a.a, 517, "VM.MailCompose.Setup");
            this.bh = !0;
            var r = this;
            this.ed.c(function(u) {
                var c = !1;
                try {
                    var f = u.a(!1, !1);
                    n && f.p(0);
                    !f.m() && r.p && (e.u = "MailComposeNewPopOut");
                    f.D(e);
                    f.bc(h);
                    f.bd(!0);
                    f.bC();
                    f.e(0);
                    if (r.o && r.o.c()) {
                        f.e(11);
                        f.ep(r.o.bH.DisplayName);
                        f.eo(r.o.bH.FolderId)
                    }
                    if (t) {
                        f.u(new _j.l);
                        f.g().a(t)
                    }
                    i && f.T(i);
                    f.f(!0);
                    r.p || f.el(function() {
                        r.bh = !1
                    });
                    _j.n.a(s);
                    var o = null;
                    !n && r.f.h() > 1 && r.f.N().a();
                    r.M(function() {
                        o = r.ec.a(r.g, f.m(), r.m.a, null);
                        o.a(f)
                    });
                    c = !0
                } finally {
                    (!c || r.p) && (r.bh = !1)
                }
            }, !1)
        }
    },
    c: function(n) {
        var t = this.bz(this.f.a());
        t.a() !== n.c() && t.k(n.c());
        t.m(n.a().a());
        t.n(n.b() === "Ascending" ? 0 : 1);
        this.i.b().k(t);
        _h.f.a(this.i.b().c(), this.K);
        this.w && this.w.bg(t.a());
        this.G.a(_h.bQ, new _h.bQ(this.f.a()))
    },
    pm: function(n) {
        if (n) this.m.a || this.m.c(!0);
        else {
            this.m.c(!1);
            _a.g.c().a(_a.U, new _a.U(20))
        }
    },
    kg: function() {
        switch (this.j.a()) {
            case "Mouse":
            case "TouchWide":
                this.h.m(!this.h.c);
                break;
            case "TouchNarrow":
                this.E.e(this.h);
                break
        }
    },
    nk: function() {
        if (this.f.e() && this.f.v() !== 3 && (this.j.a() !== "TouchNarrow" || !_y.Q.isInstanceOfType(this.E.a()) || !this.E.l)) {
            var t;
            var i = (t = new _a.K, t.a = !0, t.b = !0, t.d = !0, t.e = !0, t);
            var r = _a.b.b(_a.a.p, "SelectMailReadingPaneLoad", !1, i);
            var n = this;
            this.M(function() {
                _a.b.a(r);
                n.g.bl(n.f.b());
                n.g.z(n.f.W());
                if (n.j.a() === "TouchNarrow" && _y.Q.isInstanceOfType(n.E.a())) n.E.c(n.g.c());
                else {
                    n.j.a() === "TouchNarrow" && n.G.a(_y.cr, new _y.cr(!0));
                    n.E.e(n.g.c())
                }
                n.dt = !0
            })
        }
    },
    ba: function() {
        switch (this.j.a()) {
            case "Mouse":
            case "TouchWide":
            case "TouchNarrow":
                return this;
            default:
                throw Error.invalidOperation("Invalid Layout Type.");
        }
    },
    dQ: function(n, t) {
        if (this.h.b.s) {
            switch (this.j.a()) {
                case "Mouse":
                case "TouchWide":
                    this.mS();
                    break;
                case "TouchNarrow":
                    this.mT(n, t);
                    break
            }
            this.bi = !0
        }
    },
    mS: function() {
        this.bi || this.kR(new _y.df(this.bf(this.h.a.d, this.bI, !0, !1, this.D.c(), null, null, null, null, this.bH)))
    },
    mT: function(n, t) {
        this.bi || (this.z = new _y.cl(this.bf(this.h.a.d, this.bI, !0, !1, this.D.c(), null, null, null, null, this.bH), this.jg));
        this.oV(n, t)
    },
    mu: function(n) {
        var t = this;
        this.M(function() {
            n(t.g)
        })
    },
    kz: function(n, t) {
        this.dK() && !this.V && this.kd();
        _h.g.a(_a.a.dG, this.dK() ? "UpNextEnabled" : "UpNextDisabled", 6, 1, null);
        this.eJ(_y.d.e)
    },
    ol: function() {
        if (this.f) {
            var n = this.cW[this.bD].a;
            this.e(new _h.W(n))
        }
    },
    oV: function(n, t) {
        var i = this;
        this.z.a.G = t || new _j.g(function() {
            i.nm(n)
        }, _y.d.a)
    },
    mV: function() {
        if (this.eb) {
            var n = this;
            this.eb.a(function(t) {
                if (t) {
                    n.it = t;
                    n.it.a()
                }
            })
        }
    },
    mP: function() {
        if (this.dA) {
            var n = this;
            this.dA.a(function(n) {})
        }
    },
    mZ: function() {
        var t = (2097152 & this.i.a().v()) == 2097152;
        var n = !!this.q && (this.q.a().lA().Enabled || this.q.a().dq().Enabled || this.q.a().dr().Enabled);
        if (!this.bY.bH.IsProsumerConsumerMailbox && n && t && this.ew) {
            var i = this;
            this.ew.a(function(n) {})
        }
    },
    mO: function(n) {
        if (this.dz) {
            var t = this;
            this.dz.a(function(i) {
                t.U = i.a(n, new _j.g(t.gX || (t.gX = Function.createDelegate(t, t.ok)), _y.d.a), new _j.g(t.ch || (t.ch = Function.createDelegate(t, t.bk)), _y.d.a))
            })
        }
    },
    mR: function(n) {
        if (!this.ip) {
            if (this.ee) {
                var t = this;
                this.ee.a(function(i) {
                    t.oP(i);
                    t.lc(n)
                })
            }
            this.ip = !0
        }
    },
    dw: function() {
        _y.fA.prototype.dw.call(this);
        if (this.dt) {
            this.dt = !1;
            this.lS()
        }
    },
    dx: function() {
        _y.fA.prototype.dx.call(this);
        this.kS(!1)
    },
    dv: function() {
        this.dn && this.G.a(_a.bl, new _a.bl(1, "", "", "", null, null, null))
    },
    du: function() {
        this.H && this.C() && (this.C().d() || !_j.h.b(this.C().a())) && this.H.e(!0);
        _y.fA.prototype.du.call(this);
        this.kS(!0);
        this.s === 1 ? _a.p.a("FromConversationReadingPane") : _a.p.a("FromMailReadingPane")
    },
    d: function(n, t) {
        _a.O.a(_a.a.v, "SwitchFolder", 3);
        var i;
        var u = _a.b.b(_a.a.v, "SwitchMailView", !1, (i = new _a.K, i.a = !0, i));
        var r = this;
        this.jQ(n, this.f.a().bH.FolderId, function(i) {
            r.pd(i, n, t, u)
        })
    },
    pd: function(n, t, i, r) {
        var u = this.f;
        this.dk = !0;
        var e = !n.a();
        var s = !0;
        e || (s = _g.K.a(u.a(), n.a()));
        this.ln(u, n, t);
        n.ba(u.c());
        this.O().q(this.A());
        var o = this.mt(n, u);
        var f = u.g();
        this.ka(f) ? n.bc(new _h.X(f, u.bZ())) : n.bc(new _h.W(f));
        n.cn(this.s);
        e || !s ? n.eB(u.a(), o, r) : n.Y(o, r);
        i && this.c(this.O().j());
        n.dU() || n.eE(this.X());
        this.ds();
        this.dL().c(this.f);
        this.dk = !1;
        this.iR()
    },
    ld: function(n) {
        if (this.ig()) this.v.bO(n);
        else if (_h.a.w(n) === -1) {
            this.h.b.s.H(!1);
            this.h.b.r(n)
        } else {
            this.h.a.b.V(!1);
            this.h.a.b.r(n)
        }
        this.bk()
    },
    mb: function() {
        if (this.p && this.C()) {
            this.H.e(!0);
            this.C().k(!0)
        }
    },
    cY: function(n, t) {
        _y.d.j.c();
        this.H.q();
        this.kM(null);
        this.h.M(n ? this.h.c : this.dh);
        if (this.f.b()) {
            this.f.dm(!0);
            var i = this;
            _j.m.a().c(_y.d.a, "LoadItemsOnCancelSearch", function() {
                i.db("All");
                var n = i.bz(i.f.a());
                i.f.bl(i.f.eC());
                i.f.dM();
                if (i.s !== n.a()) {
                    i.f.bQ(null);
                    i.d(n.a(), !1)
                } else i.f.Y(0, null);
                i.w.Q()
            })
        }
        this.eJ("IsFolderListHidden")
    },
    e: function(n) {
        var r = _y.d.d(n.a);
        var t;
        _a.p.b(_a.a.bT, r, !0, (t = new _a.K, t.a = !0, t));
        if ("Mentioned" === n.a) {
            var i = new _a.bt(1, "MentionedMeViewFilter");
            _a.A.b.a(i)
        }
        this.O().d(n);
        var u = this;
        this.cR.a(function(t) {
            t.bm(n.a)
        });
        this.ds()
    },
    kw: function(n, t) {
        this.r && this.r.ex()
    },
    ia: function() {
        this.f.H() && this.f.H().a()
    },
    iM: function(n) {
        this.kU(this.jT(this.X(), !1));
        var r = _j.n.b(_a.a.by, 2, "MLVMInit");
        this.mW();
        _j.n.a(r);
        this.mJ();
        this.ds();
        var i = _j.n.b(_a.a.by, 2, "FoldersInit");
        this.mU();
        _j.n.a(i);
        if (this.p) {
            this.i.b().o(this.bp || (this.bp = Function.createDelegate(this, this.iI)));
            this.i.a().apcl(_y.d.i, this.bp || (this.bp = Function.createDelegate(this, this.iI)));
            this.m.apcl("ReadingPaneListViewTransitionState", this.co || (this.co = Function.createDelegate(this, this.kr)))
        }
        this.ox();
        if (this.j.a() === "TouchWide") {
            this.cN.apcl("Orientation", this.gh || (this.gh = Function.createDelegate(this, this.kk)));
            this.m.apcl("IsReadingPaneFullScreen", this.cn || (this.cn = Function.createDelegate(this, this.iJ)))
        }
        this.bn && this.lO();
        this.G.b(_j.O, this.ho || (this.ho = Function.createDelegate(this, this.pc)));
        this.G.b(_a.en, this.gH || (this.gH = Function.createDelegate(this, this.nY)));
        this.bO && this.G.b(_y.bX, this.gY || (this.gY = Function.createDelegate(this, this.om)));
        var t = _y.d.d(this.f.g());
        _a.b.c(_a.a.bT, t + "Opened");
        !this.i.a().bH.ShowReadingPaneOnFirstLoad && this.p && this.M(null)
    },
    cb: function() {
        this.P && this.P.b && this.P.a()
    },
    eL: function() {
        this.r && this.r.dispose();
        if (this.p) {
            this.m.rpcl("ReadingPanePosition", this.cu || (this.cu = Function.createDelegate(this, this.kx)));
            this.cI && this.i.a().rpcl("ShowUpNext", this.cx || (this.cx = Function.createDelegate(this, this.kz)));
            this.m.rpcl("ReadingPaneListViewTransitionState", this.co || (this.co = Function.createDelegate(this, this.kr)));
            this.i.a().rpcl(_y.d.i, this.bp || (this.bp = Function.createDelegate(this, this.iI)));
            this.G.c(_y.fE, this.cD || (this.cD = Function.createDelegate(this, this.kL)));
            this.G.c(_y.eF, this.cd || (this.cd = Function.createDelegate(this, this.jR)))
        }
        this.j.a() === "TouchWide" && this.m.rpcl("IsReadingPaneFullScreen", this.cn || (this.cn = Function.createDelegate(this, this.iJ)));
        this.v && this.v.rpcl(_y.J.a, this.cl || (this.cl = Function.createDelegate(this, this.kp)));
        this.bd && this.bd.rpcl("ShouldShowMessageBar", this.cw || (this.cw = Function.createDelegate(this, this.ky)));
        _y.fA.prototype.eL.call(this)
    },
    eB: function(n) {
        var t = this;
        this.H.d(function(i) {
            if (!n.c) {
                t.js();
                t.N && t.w.m ? t.il(n) : t.bx = n
            }
        })
    },
    iR: function() {},
    S: function() {
        _y.fA.prototype.S.call(this);
        if (this.N) {
            this.h.M(this.h.c);
            this.cY(!0, !1);
            this.bx && this.w.m && this.il(this.bx);
            this.m.b && this.kk(this, "Orientation");
            if (this.v) {
                this.v.u();
                this.kJ();
                this.o && this.v.T(this.o, !1, !1)
            } else this.ez()
        }
        this.ot(!this.N)
    },
    dR: function() {
        this.g.y().d(_y.c.a.a() === "Mouse" ? this.iV : this.hM, this.be, this.eo, this.bK, this.bM, this.ef, this.eg, this.bF, this.bE, this.iY);
        this.g.y().c(this.cS())
    },
    db: function(n) {
        var t = this.j.a();
        if (this.p) this.Z.o(this.o, !!this.C() && this.C().d(), this.w.s, n);
        else if (t === "TouchWide") {
            this.bD = 0;
            this.eJ("PivotSelectedOptionIndex");
            this.f.cq("All")
        } else {
            this.f.cq("All");
            this.lR()
        }
    },
    cS: function() {
        if (!this.bT) {
            this.bT = new _fm.e(new Array(0));
            this.bT.p.a(new _fm.c(_u.R.JH, null, this.iw));
            this.bT.p.a(new _fm.c(_u.R.Uo, null, this.bA))
        }
        return this.bT
    },
    iO: function(n) {},
    iG: function(n) {},
    lg: function() {},
    iF: function() {
        if (this.f) {
            this.f.rpcl(this.f.cV(), this.cC || (this.cC = Function.createDelegate(this, this.kK)));
            this.f.z() && this.f.z().rpcl("CurrentFilter", this.cj || (this.cj = Function.createDelegate(this, this.km)))
        }
    },
    iH: function() {
        if (this.f) {
            this.f.apcl(this.f.cV(), this.cC || (this.cC = Function.createDelegate(this, this.kK)));
            this.f.z() && this.f.z().apcl("CurrentFilter", this.cj || (this.cj = Function.createDelegate(this, this.km)));
            this.O().p(this.f)
        }
    },
    ej: function(n, t) {
        this.O().m();
        this.bO && this.U && this.U.b(!!n.b());
        this.eN(_y.d.e, "IsInSearchView")
    },
    bz: function(n) {
        if (this.f.a() !== n || this.f.c() !== 1 || !_y.d.k(this.q, this.i, this.j) || this.C() && this.C().f()) {
            if (n.a() === "recoverableitemsdeletions") return _g.D.d(n.bH.FolderId, !1)
        } else {
            var t = _g.D.d(this.o.bH.FolderId, !1);
            t.k(5);
            return t
        }
        return _y.d.h(n, this.i, this.j)
    },
    kJ: function() {
        this.v.bg(this.P);
        this.v.bh(this.hH)
    },
    iN: function() {
        this.G.a(_y.p, new _y.p(2, this.hf || (this.hf = Function.createDelegate(this, this.ow))))
    },
    lM: function() {
        this.C().g("/topic:")
    },
    nK: function() {
        this.C().G(!1);
        var n = "";
        this.C() && (n = this.C().da());
        this.C().cc(!0);
        var t = this;
        this.G.a(_y.p, new _y.p(0, function() {
            t.ov(0, null, !0, n)
        }, !0, !0, !0, !0, !1));
        this.C().cc(!1)
    },
    ow: function() {
        this.bX.e().b(_a.W.a(2));
        _h.g.a(_a.a.D, this.kD, -1, 0, null);
        var t = null;
        var n = "";
        if (this.C())
            if (this.C().l() && this.C().l().j && this.C().l().j.x.length > 0) {
                t = this.C().l().j.x[0];
                n = t ? t.b() : this.C().a()
            } else _j.h.b(this.C().a()) || (n = this.C().a());
        this.cY(!1, !0);
        this.G.a(_y.P, new _y.P(2, n, !0))
    },
    ov: function(n, t, i, r) {
        this.bX.e().b(_a.W.a(8));
        var f = "";
        var u = null;
        if (this.C() && this.C().f()) {
            f = this.C().f().a();
            u = this.C().f().d()
        }
        this.G.a(_y.dT, new _y.dT(n, 8, t, r, i, f, +new Date, u))
    },
    mW: function() {
        this.kG(this.f);
        this.jS(this.f, !0);
        this.dL().c(this.f);
        this.f.dn(!0)
    },
    kG: function(n) {
        if (n) {
            this.g && this.kH(n);
            n.rpcl(n.bj(), this.Q || (this.Q = Function.createDelegate(this, this.cZ)));
            n.rpcl(n.cd(), this.Q || (this.Q = Function.createDelegate(this, this.cZ)));
            n.rpcl(n.cL(), this.ci || (this.ci = Function.createDelegate(this, this.ki)));
            n.rpcl(n.X(), this.cz || (this.cz = Function.createDelegate(this, this.kA)));
            n.rpcl("SelectedItemsCount", this.cq || (this.cq = Function.createDelegate(this, this.kt)));
            n.rpcl(n.cH(), this.cs || (this.cs = Function.createDelegate(this, this.ku)));
            n.rpcl(n.bJ(), this.cv || (this.cv = Function.createDelegate(this, this.ej)));
            n.rpcl(n.cW(), this.ct || (this.ct = Function.createDelegate(this, this.kv)));
            n.rpcl(n.bM(), this.cp || (this.cp = Function.createDelegate(this, this.ks)));
            n.rpcl(n.cE(), this.cG || (this.cG = Function.createDelegate(this, this.df)));
            n.rpcl(n.o(), this.bs || (this.bs = Function.createDelegate(this, this.iL)));
            n.rpcl(n.da(), this.cF || (this.cF = Function.createDelegate(this, this.jk)));
            n.rpcl(n.cJ(), this.cm || (this.cm = Function.createDelegate(this, this.kq)));
            _y.cQ.isInstanceOfType(n) && n.rpcl(n.bv(), this.ck || (this.ck = Function.createDelegate(this, this.kn)));
            n.dt()
        }
    },
    jS: function(n, t) {
        this.g && this.jE(n, t);
        n.cp(this.i.h());
        n.dh(this.cg || (this.cg = Function.createDelegate(this, this.kg)), this.bo || (this.bo = Function.createDelegate(this, this.bc)), this.fJ || (this.fJ = Function.createDelegate(this, this.jX)), this.cE || (this.cE = Function.createDelegate(this, this.ey)), this.cf || (this.cf = Function.createDelegate(this, this.jW)), this.cB || (this.cB = Function.createDelegate(this, this.kF)), this.cX, this.fF || (this.fF = Function.createDelegate(this, this.jV)), this.en, this.em, this.cP, this.jo, this.fT || (this.fT = Function.createDelegate(this, this.kh)), this.cE || (this.cE = Function.createDelegate(this, this.ey)), this.bo || (this.bo = Function.createDelegate(this, this.bc)), this.dB, this.fN || (this.fN = Function.createDelegate(this, this.iu)));
        if (this.p) {
            n.bO(1);
            n.bV(2);
            n.apcl(n.bj(), this.Q || (this.Q = Function.createDelegate(this, this.cZ)));
            n.apcl(n.X(), this.cz || (this.cz = Function.createDelegate(this, this.kA)));
            n.apcl(n.cH(), this.cs || (this.cs = Function.createDelegate(this, this.ku)));
            _y.cQ.isInstanceOfType(n) && n.apcl(n.bv(), this.ck || (this.ck = Function.createDelegate(this, this.kn)));
            n.apcl(n.da(), this.cF || (this.cF = Function.createDelegate(this, this.jk)));
            n.apcl(n.o(), this.bs || (this.bs = Function.createDelegate(this, this.iL)));
            n.apcl(this.f.cJ(), this.cm || (this.cm = Function.createDelegate(this, this.kq)))
        } else {
            n.bV(2);
            n.cS().a();
            if (this.j.a() === "TouchNarrow") {
                n.bO(0);
                n.apcl(n.cW(), this.ct || (this.ct = Function.createDelegate(this, this.kv)))
            } else {
                n.bO(1);
                n.apcl(n.bj(), this.Q || (this.Q = Function.createDelegate(this, this.cZ)));
                n.apcl(n.cd(), this.Q || (this.Q = Function.createDelegate(this, this.cZ)));
                n.apcl(n.o(), this.bs || (this.bs = Function.createDelegate(this, this.iL)))
            }
            this.kN(n.cK());
            this.kO(n.bR());
            this.kX(n.u());
            this.bm && this.bm.o(this.H.o);
            n.apcl(n.cL(), this.ci || (this.ci = Function.createDelegate(this, this.ki)));
            n.apcl("BottomAppBarViewModel", this.fX || (this.fX = Function.createDelegate(this, this.np)));
            n.apcl("TopAppBarViewModel", this.hb || (this.hb = Function.createDelegate(this, this.op)))
        }
        n.apcl("SelectedItemsCount", this.cq || (this.cq = Function.createDelegate(this, this.kt)));
        n.apcl(n.bM(), this.cp || (this.cp = Function.createDelegate(this, this.ks)));
        n.apcl(n.cE(), this.cG || (this.cG = Function.createDelegate(this, this.df)));
        n.apcl(n.bJ(), this.cv || (this.cv = Function.createDelegate(this, this.ej)));
        if (t && !n.a()) {
            this.dJ() && n.ba(0);
            n.cq("All");
            this.f.es(this.X())
        }
    },
    mX: function() {
        this.kH(this.f);
        this.jE(this.f, !0);
        this.lL();
        this.dR();
        this.oX();
        this.la();
        if (this.o) {
            var n = this.et(this.o.bH.FolderId);
            if (this.bV !== n) {
                this.g.y().c(this.cS());
                this.bV = n
            }
            this.g.y().a(this.o)
        }
        this.eJ("ReadingPane")
    },
    la: function() {
        this.g.ba(this.m.a);
        this.g.bl(this.f.b());
        this.g.cV(this.A());
        this.g.ca(this.f.g())
    },
    kH: function(n) {
        if (n && this.g) {
            n.rpcl(n.G(), this.g.L);
            n.rpcl(n.o(), this.g.X);
            _y.cR.isInstanceOfType(n) && this.g.rpcl("ItemReadingPaneViewModel", this.bq || (this.bq = Function.createDelegate(this, this.iK)));
            n.rpcl(n.X(), this.g.cK);
            n.rpcl(n.cf(), this.g.cJ);
            n.di(this.g.bC)
        }
    },
    jE: function(n, t) {
        if (this.p) {
            _y.cR.isInstanceOfType(n) && this.g.apcl("ItemReadingPaneViewModel", this.bq || (this.bq = Function.createDelegate(this, this.iK)));
            n.apcl(n.G(), this.g.L);
            n.apcl(n.o(), this.g.X)
        } else if (this.j.a() !== "TouchNarrow") {
            _y.cR.isInstanceOfType(n) && this.g.apcl("ItemReadingPaneViewModel", this.bq || (this.bq = Function.createDelegate(this, this.iK)));
            n.apcl(n.G(), this.g.L);
            n.apcl(n.o(), this.g.X)
        }
        n.apcl(n.X(), this.g.cK);
        n.apcl(n.cf(), this.g.cJ);
        n.cx(this.g.bC)
    },
    jk: function(n, t) {
        var i = new _y.jb;
        this.cO = 0;
        if (this.f.C()) {
            this.iZ(!0);
            if (!this.ms(i))
                if (this.f.D() === 16) {
                    this.cO = 300;
                    i.b = _y.e.n();
                    i.a = _u.R.Oj
                } else if (this.f.g() === "All" && this.A().Id === this.R().Id || this.f.b()) this.mr(i);
            else if (this.f.p()) this.f.p().z(i);
            else {
                i.b = _y.e.n();
                i.a = _u.R.UR
            }
        }
        this.hE = i.a;
        this.hA = i.e;
        this.hD = i.d;
        this.hC = i.c;
        this.hB = i.b;
        _j.m.a().b(this.jl);
        this.cO ? this.jl = _j.m.a().a(_a.a.p, "UpdateEmptyStates", this.fl || (this.fl = Function.createDelegate(this, this.jJ)), this.cO) : this.jJ()
    },
    jJ: function() {
        this.eQ(["EmptyListViewMainMessage", "EmptyListViewDetailedMessage", "EmptyListViewLinkCommand", "EmptyListViewLinkMessage", "EmptyListViewImageId"])
    },
    ms: function(n) {
        switch (this.f.D()) {
            case 11:
                n.a = _u.R.It;
                n.d = _u.R.Iw;
                n.c = this.iU;
                n.b = _y.e.Q();
                return !0;
            case 15:
                n.a = _bms.E.v;
                n.b = _y.e.E();
                return !0;
            default:
                return !1
        }
    },
    mr: function(n) {
        if (this.f.b()) switch (this.f.D()) {
            case 13:
                n.b = _y.e.R();
                n.a = _u.R.Qg;
                break;
            case 12:
                n.b = _y.e.B();
                n.a = _u.R.NH;
                n.e = _u.R.Vw;
                break;
            case 2:
                n.b = _y.e.B();
                n.a = _u.R.KY;
                break
        } else {
            var i = this.f.c();
            var t = _h.a.a(this.R());
            n.b = _y.e.S();
            switch (i) {
                case 0:
                    n.a = _u.R.Tr;
                    if (t.bH.TotalCount) {
                        n.d = _u.R.QS;
                        n.c = this.f.db()
                    }
                    break;
                case 1:
                    n.a = _u.R.Mg;
                    n.d = _u.R.KK;
                    n.c = this.f.db();
                    break;
                default:
                    n.a = _u.R.SI;
                    break
            }
        }
    },
    kv: function(n, t) {
        var i = this.f.y() ? this.f.y().a : null;
        (i === this.f.ek() || this.f.ee()) && !this.f.cI() && this.nk()
    },
    cZ: function(n, t) {
        if (this.f.s() && (this.f.e() || this.f.q() !== 1 || !this.g || !this.g.c() || !IMessageListAdsReadingPaneViewModel.isInstanceOfType(this.g.c()))) {
            var u = null;
            if (this.f && this.f.h() > 0) {
                var r;
                var f = (r = new _a.K, r.a = !0, r.b = !0, r.d = !0, r.e = !0, r);
                u = _a.b.b(_a.a.p, "SelectMailReadingPaneLoad", !1, f);
                _h.bv.a(4, null)
            }
            this.G.a(_a.ei, new _a.ei);
            !this.g && this.f.e() && this.lf(_u.R.Oj, null, null);
            var i = this;
            this.M(function() {
                u && _a.b.a(u);
                i.g.bl(i.f.b());
                i.g.Y(n);
                if (i.dd && !i.m.b) {
                    i.m.c(!0);
                    i.kW(!1)
                }
            });
            this.r && this.f.s() === 1 && this.r.eA(this.f.h(), this.f.m(), this.jK())
        }
    },
    kL: function(n) {
        var t = n.a;
        if (!(_g.j.d(this.A()) && t.toLocaleLowerCase() === this.A().a.toLocaleLowerCase())) {
            var i = this.h.bb(t);
            this.ep(i, !1, !1, !1)
        }
    },
    kt: function(n, t) {
        this.bM.c(this.jK());
        this.eJ("CanExecuteMoveAction")
    },
    ki: function(n, t) {
        this.kN(n.cK())
    },
    np: function(n, t) {
        this.kO(n.bR())
    },
    op: function(n, t) {
        this.kX(n.u());
        this.bm && this.bm.o(this.H.o)
    },
    iK: function(n, t) {
        this.f && _y.cR.isInstanceOfType(this.f) && this.f.bu(this.g.e())
    },
    kA: function(n, t) {
        this.O().n(n.g(), this.A())
    },
    ku: function(n, t) {
        this.r.eu(this.f.d());
        this.g && this.g.Y(n)
    },
    nI: function(n) {
        if (n.bH.FolderId.Id === this.o.bH.FolderId.Id) {
            this.be.c(this.bA.c(this.bM.c(_g.j.e(n))));
            this.bK.c(this.cL.c(this.cM.c(_g.j.h(n))));
            this.p && this.r.dw();
            this.f.er(n.e);
            if (this.g) {
                this.g.cU(this.o.b);
                this.g.cT(this.o.e)
            }
        }
    },
    pg: function(n) {
        this.be.c(this.bK.c(this.cL.c(this.cM.c(this.bA.c(this.bM.c(this.cJ.c(n)))))))
    },
    ds: function() {
        if (!this.T && !this.f.b() && !this.f.bZ() && this.A().Id === this.R().Id && this.f.g() === "All") {
            this.T = this.f.f();
            _h.h.a().i(this.T);
            this.iO(this.T)
        }
    },
    mU: function() {
        this.h.b.apcl("SelectedFolder", this.ce || (this.ce = Function.createDelegate(this, this.jU)));
        this.h.b.r(this.X());
        this.h.a.e = !this.v || this.v.V() ? this.h.b : this.h.a.n;
        this.h.a.G = new _j.g(this.ch || (this.ch = Function.createDelegate(this, this.bk)), _y.d.a);
        this.h.a.O = new _j.g(this.gR || (this.gR = Function.createDelegate(this, this.of)), _y.d.a);
        if (this.p) {
            this.h.a.cf(new _j.g(this.fM || (this.fM = Function.createDelegate(this, this.ng)), _y.d.a));
            this.h.a.ce(new _j.g(this.fG || (this.fG = Function.createDelegate(this, this.nb)), _y.d.a));
            this.h.a.cg(new _j.g(this.hi || (this.hi = Function.createDelegate(this, this.oU)), _y.d.a));
            this.h.a.cd(new _j.g(this.fE || (this.fE = Function.createDelegate(this, this.na)), _y.d.a));
            this.q && this.q.a().cU().Enabled && (this.h.a.P = new _j.g(this.hn || (this.hn = Function.createDelegate(this, this.pb)), _y.d.a));
            var t = this;
            this.h.a.apcl("ActionTargetFolder", function(n, i) {
                t.h.a.f && t.f.w(t.h.a.f.h.bH.FolderId)
            });
            this.h.apcl("Width", this.gw || (this.gw = Function.createDelegate(this, this.kw)))
        }
        if (this.j.a() !== "TouchNarrow") {
            var n = this;
            this.h.apcl("Width", function(t, i) {
                n.kT(n.ij());
                n.C() && n.C().dc(n.h.c)
            })
        }
        this.h.I = new _j.g(this.cg || (this.cg = Function.createDelegate(this, this.kg)), _y.d.a);
        this.h.apcl("IsExpanded", this.cH || (this.cH = Function.createDelegate(this, this.lo)))
    },
    mJ: function() {
        this.dS = new _j.g(this.cf || (this.cf = Function.createDelegate(this, this.jW)), _y.d.a)
    },
    lo: function(n, t) {
        this.eJ("IsNavPaneCollapsed")
    },
    jU: function(n, t) {
        var u = this.h.a.c.q;
        if (u) {
            this.kV(u.h);
            this.v && this.h.a.n.I(this.o);
            var i;
            var f = _a.b.b(_a.a.v, "InitialSwitchMailFolder", !0, (i = new _a.K, i.a = !0, i.b = !0, i));
            this.kZ(this.o, f);
            this.C() && this.C().bq(this.o);
            this.h.b.rpcl("SelectedFolder", this.ce || (this.ce = Function.createDelegate(this, this.jU)));
            this.v && this.v.T(this.o, !0, !1);
            this.bx && this.il(this.bx);
            this.mL();
            var r = this.T;
            _j.m.a().a(_a.a.bu, "InitializeSelectedFolderNode", r.I || (r.I = Function.createDelegate(r, r.O)), 3e3)
        }
    },
    kZ: function(n, t) {
        if (n.b) {
            var i = "";
            if (n.u) i = n.u;
            else {
                var u = n.bH.ParentFolderId;
                var r = _h.a.a(u);
                i = r.u
            }
            this.f.cp(this.iB.e(i))
        } else this.f.cp(this.i.h());
        this.f.eA(this.o, t);
        this.kj()
    },
    kj: function() {
        this.bA.c(this.mc());
        this.eJ("CanExecuteIgnoreMessages")
    },
    jX: function(n) {
        this.dQ(n, null);
        if (this.bi) switch (this.j.a()) {
            case "Mouse":
            case "TouchWide":
                this.jb(this.cX, this.f.cQ(), this.dy, this.f.dP(), this.f.dO());
                break;
            case "TouchNarrow":
                if (this.z && this.f.m().length > 0) {
                    this.z.a.r();
                    this.z.d(this.f.cQ());
                    this.E.e(this.z)
                }
                break
        }
    },
    jV: function(n) {
        var t = _h.a.i();
        if (t) {
            this.iD(t, n);
            return
        }
        t = _h.a.O(this.h.a.c.p.g, _u.R.Mq, !1);
        if (t) {
            this.ja(t, n);
            _h.g.a(_a.a.p, "ArchiveFolder_SetExistingFolderNamedArchive", -1, 0, null);
            return
        }
        this.mI();
        this.bb.O(n, this.fb || (this.fb = Function.createDelegate(this, this.lP)))
    },
    nd: function() {
        this.dQ(null, null);
        if (this.bi) switch (this.j.a()) {
            case "Mouse":
            case "TouchWide":
                if (this.g.b()) {
                    var n = this.g.b().i().x.length;
                    var r = String.format(_u.R.VF, n);
                    var i = String.format(_u.R.Dn, n);
                    var t = _u.R.JZ;
                    this.jb(this.dU, r, this.dT, i, t)
                }
                break
        }
    },
    nc: function() {
        var i = null;
        if (this.j.a() === "TouchNarrow") {
            var n = this;
            i = new _j.g(function() {
                n.z.a.a() && n.g.c() && _y.Q.isInstanceOfType(n.g.c()) && n.g.c().bv(n.z.a.a().h.bH.FolderId)
            }, _y.d.a)
        }
        this.dQ(null, i);
        if (this.bi) {
            var t = _y.bw.isInstanceOfType(this.g.c()) ? _u.R.Sg : _u.R.DT;
            switch (this.j.a()) {
                case "Mouse":
                case "TouchWide":
                    var u = _y.bw.isInstanceOfType(this.g.c()) ? _u.R.Lj : _u.R.Ek;
                    var r = _y.bw.isInstanceOfType(this.g.c()) ? _u.R.FC : _u.R.Op;
                    this.jb(this.cX, t, this.dy, u, r);
                    break;
                case "TouchNarrow":
                    if (this.z) {
                        this.z.a.r();
                        this.z.d(t);
                        this.E.e(this.z)
                    }
                    break
            }
        }
    },
    jb: function(n, t, i, r, u) {
        if (this.t()) {
            var l = _a.b.b(_a.a.v, "MoveMessagesFolderPickerDialog", !0, null);
            var c = new _j.l;
            c.j(this.h.a.d.f());
            var h = null;
            _h.a.b("msgfolderroot").bW();
            var y = this;
            h = new _j.g(function() {
                _h.a.b("msgfolderroot").bu()
            }, _y.d.a);
            this.t().I(this.bf(c, this.bI, !0, !1, this.D.c(), null, null, null, null, this.bH));
            var o = this;
            this.t().j = function() {
                return !(o.t().h.I() && _g.bk.a(o.t().h.I()))
            };
            var s = _j.m.a().i;
            var f = this;
            var a = new _j.g(function() {
                if (f.t().h.a()) {
                    f.f.w(f.t().h.a().h.bH.FolderId);
                    _j.m.a().o(s);
                    n.a()
                }
            }, _y.d.a);
            var e = this;
            var v = new _j.g(function() {
                if (e.t().h.a()) {
                    e.f.w(e.t().h.a().h.bH.FolderId);
                    _j.m.a().o(s);
                    i.a()
                }
            }, _y.d.a);
            this.t().bf(a, t, v, r, _u.R.Dl, _u.R.Fh, u, h);
            _a.b.a(l)
        }
    },
    jW: function() {
        if (this.p) {
            var n = this;
            this.mK(function(n) {
                n.g()
            })
        }
    },
    mK: function(n) {
        if (this.io) {
            n(this.cK);
            return
        }
        var t = this;
        this.hN.a(function(i) {
            i.h(t.i.h(), t.hu || (t.hu = Function.createDelegate(t, t.pk)));
            t.oC(i);
            t.io = !0;
            n(i)
        })
    },
    pk: function(n, t, i) {
        var r = new _h.bW(n, t, i, null);
        var u = this;
        r.c(function() {
            u.i.h().b(r.e)
        });
        this.K.a(r)
    },
    kf: function() {
        this.f && (this.bg() ? this.g.b().K(this.f.P()) : this.f.bG().a())
    },
    lT: function() {
        this.f && (this.bg() ? this.g.b().z(this.f.P()) : this.f.bz().a())
    },
    ni: function() {
        this.f.ez();
        this.f.P() && this.kf()
    },
    oq: function() {
        if (this.bL() && this.bL().a()) {
            this.bL().b().a();
            return
        }
        _h.A.a().j()
    },
    lY: function() {
        this.bc(!0, null)
    },
    lX: function() {
        var t = _a.b.b(_a.a.p, "NewCalendarEvent", !1, null);
        var n = this;
        this.hQ.a(function(i) {
            i.c().a(_a.a.n, "UnifiedForms_CreateItemByClickNewEventButton", !0, null, null);
            i.c().i("MM");
            var u = i.g(_a.H.d(_a.d.a()), !0);
            var r = i.h(i.d(u), null, null, function(n) {
                i.c().b(null)
            });
            n.j.d(r);
            _a.b.a(t)
        })
    },
    iD: function(n, t) {
        this.f.w(n.bH.FolderId);
        this.f.df(t, !0)
    },
    nj: function() {
        this.g.b() && this.g.b().K(this.f.P())
    },
    lU: function() {
        this.g.b() && this.g.b().z(this.f.P())
    },
    nB: function() {
        this.g.b() && this.g.b().bo()
    },
    oe: function() {
        if (this.ih()) {
            var n = this;
            this.M(function() {
                var t = null;
                n.s === 1 ? n.g.b() ? t = n.g.b().bf() : _j.e.c(_a.a.p, "ConversationReadingPaneViewModel was null when trying Reply action on selected item") : t = n.ii(function(n) {
                    return n.g()
                });
                t ? t.c().d.a() : n.B.h(0, String.format(n.s === 1 ? _u.R.Qx : _u.R.SH, _u.R.JB), null)
            })
        }
    },
    od: function() {
        if (this.ih()) {
            var n = this;
            this.M(function() {
                var t = null;
                n.s === 1 ? n.g.b() ? t = n.g.b().be() : _j.e.c(_a.a.p, "ConversationReadingPaneViewModel null when trying Reply all action on selected item") : t = n.ii(function(n) {
                    return n.f()
                });
                t ? t.c().c.a() : n.B.h(0, String.format(n.s === 1 ? _u.R.Qx : _u.R.SH, _u.R.N), null)
            })
        }
    },
    nG: function() {
        if (this.ih()) {
            var n = this;
            this.M(function() {
                var t = null;
                n.s === 1 ? n.g.b() ? t = n.g.b().bd() : _j.e.c(_a.a.p, "ConversationReadingPaneViewModel null when trying do forward action on selected item") : t = n.ii(function(n) {
                    return n.h()
                });
                t ? t.c().e.a() : n.B.h(0, String.format(n.s === 1 ? _u.R.Qx : _u.R.SH, _u.R.VV), null)
            })
        }
    },
    os: function() {
        var n = this;
        this.M(function() {
            n.s === 1 || !n.g.e() || !n.g.e().a() ? n.s === 1 && n.g.b() && n.g.b().c().x[0] ? n.g.b().c().x[0].bC().a() : _j.e.b(_a.a.p, "ReadingPaneViewModel null when trying view message details on selected item") : n.g.e().a().bC().a()
        })
    },
    ii: function(n) {
        return this.g.e() && this.g.e().a() && this.g.e().a().c() && n(this.g.e().a().c()) ? this.g.e().a() : null
    },
    pb: function() {
        if (this.dI && this.q && this.q.a().cU().Enabled) {
            var n = this;
            this.dI.a(function(t) {
                n.j.d(t.a())
            })
        }
    },
    na: function() {
        if (null !== this.el) {
            var n = this;
            this.el.a(function(t) {
                t.b(function(t) {
                    null !== t ? t.a() : n.kC()
                })
            })
        } else this.kC()
    },
    kC: function() {
        if (this.I.nameToId("publicfoldersroot")) this.lb();
        else {
            var n = this;
            _h.p.i(function(t) {
                if (t.G) {
                    n.B.h(0, _u.R.ST, null, !1, null, null, _u.R.Et);
                    return
                }
                n.lb()
            }, null, null)
        }
    },
    lb: function() {
        if (!this.h.a.D) {
            var u = _h.a.b("publicfoldersroot");
            var o = u.f(this.I.nameToId("publicfoldersroot"));
            var e = !!this.q && this.q.a().r().Enabled;
            this.h.a.D = new _y.Y(_a.g.c(), "publicfoldersroot", o, u, this.i, this.bw, this.cT, null, this.cU, !0, !1, e, this.da, !1, this.q, this.D, this.j)
        }
        var r = new _j.l;
        r.a(this.h.a.D);
        var t = this.bf(r, null, !0, !1, this.D.c(), null, null, null, null, null);
        this.t() ? this.t().I(t) : this.kR(new _y.df(t));
        var n = this;
        this.t().j = function() {
            if (n.t().h.a()) {
                var t = n.t().h.a().h;
                n.t().bd(!_g.j.f(t));
                for (var i = 0; i < n.h.a.b.a.x.length; i++) {
                    var r = n.h.a.b.a.x[i];
                    if (r.bH.FolderId.Id === t.bH.FolderId.Id) return !1
                }
                return !(n.I.nameToId("publicfoldersroot").Id === t.bH.FolderId.Id || !_g.j.f(t))
            }
            return !1
        };
        var i = this;
        var f = new _j.g(function() {
            if (i.t().h.a()) {
                var n = i.t().h.a();
                n.bc().a()
            }
        }, _y.d.a);
        this.t().l(f, _u.R.Po, _u.R.EP)
    },
    nb: function() {
        this.dQ(null, null);
        if (this.bi) switch (this.j.a()) {
            case "Mouse":
            case "TouchWide":
                if (this.t()) {
                    var e = _a.b.b(_a.a.v, "MoveFolderFolderPickerDialog", !0, null);
                    var t = new _j.l;
                    t.a(this.h.a.c);
                    t.a(this.h.a.q);
                    var n = this.h.a.d;
                    if (n)
                        for (var i = 0; i < n.x.length; i++) _y.dQ.isInstanceOfType(n.x[i]) && t.a(n.x[i]);
                    this.t().I(this.bf(t, this.bI, !0, !1, !1, null, null, null, null, this.bH));
                    var r = this;
                    this.t().j = function() {
                        return !_h.a.q(r.t().h.I(), r.h.a.f.h.bH.FolderId)
                    };
                    var u = this;
                    var f = new _j.g(function() {
                        u.t().h.a() && u.iC.a()
                    }, _y.d.a);
                    this.t().l(f, _u.R.BA, _u.R.Dl);
                    _a.b.a(e)
                }
                break;
            case "TouchNarrow":
                if (this.z) {
                    this.z.a.r();
                    this.z.d(_u.R.BA);
                    this.E.e(this.z)
                }
                break
        }
    },
    nh: function() {
        var n = this.h.a.f;
        if (_h.l.a(n.h.bH.FolderId) !== _h.l.a(this.t().h.a().h.bH.FolderId)) {
            this.B.h(0, _u.R.j, null, !1, null, null, null);
            return
        }
        if (n.h.b !== this.t().h.a().h.b) {
            this.B.h(0, _u.R.Bi, null, !1, null, null, null);
            return
        }
        var i = this.t().h.a().h;
        if (_h.a.x(i, n.h.bH.DisplayName)) {
            this.B.h(0, _u.R.Ot, null, !1, null, null, _u.R.BA);
            return
        }
        var t = new _h.df;
        t.e = n.h;
        t.f = i.bH.FolderId;
        this.K.a(t);
        n.h.m && _h.a.q(i.bH.FolderId, this.I.nameToId("deleteditems")) && n.L().a()
    },
    oU: function() {
        var n = this.h.a.f;
        this.bQ ? this.lc(n) : this.mR(n)
    },
    lc: function(n) {
        var t = new _h.dB;
        t.j = n.h;
        t.a(this.gs || (this.gs = Function.createDelegate(this, this.nJ)));
        t.b(this.gr || (this.gr = Function.createDelegate(this, this.ko)));
        this.K.a(t)
    },
    nJ: function(n) {
        if (!n.G && n.e) {
            var t = n;
            this.bQ.i(t.j, t.e)
        } else this.ko(n)
    },
    ko: function(n) {
        var t = n.j.bH.DisplayName;
        this.B.h(0, String.format(_u.R.Cf, t), null)
    },
    kF: function() {
        this.G.a(_h.bw, new _h.bw);
        _y.d.o.c()
    },
    nl: function() {
        var t = this.i.b().j;
        for (var i in t) {
            var r = {
                key: i,
                value: t[i]
            };
            var n = r.value;
            n.k(2);
            n.l(0);
            this.i.b().k(n);
            _h.f.a(this.i.b().c(), this.K)
        }
        this.Z.e();
        this.Z.a(2)
    },
    ln: function(n, t, i) {
        this.kG(n);
        this.jS(t, !1);
        this.eq(i);
        this.er(t);
        this.f.bQ(n.b());
        this.f.w(n.P());
        this.f.ba(n.c());
        this.r && this.f.dr(this.r.bb(), this.r.ba());
        n.bQ(null);
        n.w(null);
        n.bn(!1);
        var f = n.a().bH.FolderId;
        this.M(this.hk || (this.hk = Function.createDelegate(this, this.la)));
        if (this.A().Id === this.R().Id && f.Id === this.R().Id && this.T) {
            this.iG(this.T);
            _h.h.a().b(this.T);
            this.T = null
        }
        var r = this.f;
        if (this.p) {
            var u = r;
            this.r.dx(r.h(), this.s, r.p(), u.x || (u.x = Function.createDelegate(u, u.bk)), this.o, r.t(), r.m(), r.d(), r.c(), r.bF());
            this.oI(i === 5)
        }
    },
    of: function() {
        this.kI(!1, !1)
    },
    ok: function() {
        var n = _g.j.a("recoverableitemsdeletions");
        this.ep(n, !1, !0, !0)
    },
    lR: function() {
        this.f.z() && this.f.z().j()
    },
    kI: function(n, t) {
        if (this.v && !this.E.b().w(this.h)) {
            this.h.a.c.r(this.R());
            this.h.a.n.I(this.h.a.c.q.h)
        } else this.h.b.r(this.R());
        this.bk(!0, n, t);
        this.ds()
    },
    bk: function(n, t, i) {
        var u = this.dN();
        var r = null;
        u && (r = u.h);
        this.ep(r, n, t, i)
    },
    ep: function(n, t, i, r) {
        this.bO && this.iT && this.pi(n);
        if (!n) {
            this.kB(n, i, t);
            return
        }
        n.b ? _h.a.be(n, this.gq || (this.gq = Function.createDelegate(this, this.nI))) : this.pg(!0);
        var s = null;
        if (this.o !== n) {
            var u;
            s = _a.b.b(_a.a.v, "SwitchMailFolder", !1, (u = new _a.K, u.a = !0, u.b = !0, u.c = !0, u));
            _h.bv.a(5, n.bH.FolderId)
        }
        var e = _g.l.b(this.f.a().bH.FolderId, n.bH.FolderId);
        if (e) this.m.b || this.f.N().a();
        else {
            this.f.bp(_u.R.HT);
            this.f.N().a()
        }
        var h = this.bz(n);
        var f = n.a() === "inbox";
        var o = this.dm && f && e;
        (o || this.oY(f)) && this.f.ba(f && this.dJ() ? 0 : -1);
        if (!_y.d.c(h.c, this.i)) {
            this.m.i(3);
            this.m.c(!1);
            this.m.i(0)
        }
        this.pj(n, h);
        _h.p.a && n.bH.FolderId && (_h.p.a.s = n);
        var c = this;
        this.jQ(this.bz(n).a(), n.bH.FolderId, function(u) {
            c.ou(u, n, r, e, i, t, s, o)
        })
    },
    pn: function(n) {
        this.C() && this.C().bq(this.o);
        this.H.q();
        if (n.b()) {
            _y.d.j.c();
            this.w.Q();
            this.db("All");
            n.Y(0, null)
        }
    },
    pl: function(n) {
        n.a().c() !== this.o.c() && this.kU(this.jT(this.o.bH.FolderId, this.o.c()))
    },
    kB: function(n, t, i) {
        n.a() !== "recoverableitemsdeletions" && this.ph(n, i);
        this.j.a() !== "TouchNarrow" || t ? this.j.a() !== "TouchWide" || _y.w.c(this.j) || this.h.m(!1) : this.G.a(_y.bd, new _y.bd);
        this.j.a() === "TouchWide" && this.jZ()
    },
    ph: function(n, t) {
        if (this.ig()) {
            this.N && (t = !0);
            this.v.T(n, t, !0)
        } else this.bP && this.ez()
    },
    ou: function(n, t, i, r, u, f, e, o) {
        var y = this.o;
        var l = this.f;
        this.kV(t);
        var c = this.bz(t);
        var h = !1;
        if (c.a() !== this.s) {
            this.ln(l, n, c.a());
            h = !0
        }
        this.pl(l);
        this.pn(l);
        this.f.cn(this.s);
        this.O().l(c, t, y);
        if (i && this.bD || r && this.f.g() !== "All") this.oz();
        else if (!r) {
            var w = h && !this.ka(n.g()) ? n.g() : "All";
            this.db(w)
        }
        var b = this.mH(t);
        var a = t.bH.FolderId;
        h && this.f.ba(l.c());
        if (_g.j.b(a)) {
            var v = a;
            this.f.bc(new _h.X(v.b, v.a))
        }
        t.cb(this.f.a()) && (h && n.g() !== "All" || b || o) ? this.f.Y(2, e) : this.kZ(t, e);
        if (h) {
            this.dL().c(this.f);
            this.jk(null, null)
        }
        this.f.H() && this.f.H().a();
        var p = _y.d.d(this.f.g());
        _a.b.c(_a.a.bT, p + "Opened");
        this.p && this.kY(c);
        _h.a.X(t.bH.FolderId);
        var s = this;
        this.M(function() {
            var n = s.et(t.bH.FolderId);
            if (s.bV !== n) {
                s.g.y().c(s.cS());
                s.bV = n
            }
            s.g.y().a(t)
        });
        this.G.a(_h.bk, new _h.bk(t));
        this.cQ && _h.l.m(t.bH.FolderId) && this.cQ.a(t.bH.FolderId.Id);
        this.kB(t, u, f)
    },
    oy: function() {
        this.f.Y(0, null)
    },
    ka: function(n) {
        return n === "SystemCategory" || n === "UserCategory" || n === "Hashtag"
    },
    ez: function() {
        this.p && this.o && this.bX.e().b(_a.W.h(this.I.idToName(this.o.bH.FolderId) !== _g.bb.a ? encodeURIComponent(this.I.idToName(this.o.bH.FolderId)) : encodeURIComponent(this.o.bH.FolderId.Id), this.Y ? "rp" : ""))
    },
    lq: function(n) {
        this.p && this.bX.e().b(_a.W.h("search", n ? "rp" : ""))
    },
    ns: function() {
        this.f.bp(_u.R.Ea);
        this.C().cg(_j.m.a().b(this.C().bU()));
        this.p && this.C() && this.C().d() && this.m.c(!1);
        this.bP && this.ez();
        this.lK();
        this.cY(!1, !0)
    },
    lK: function() {
        if (this.p) {
            var n = new _a.l;
            switch (this.C().bN()) {
                case 2:
                    n.a("cs", "esc");
                    break;
                case 3:
                    n.a("cs", "exit");
                    break
            }
            _a.b.c(_a.a.D, "CancelSearch", n.toString(), 0);
            this.C().cb(0)
        }
    },
    jZ: function() {
        this.m.G(!!this.f.f().a().x.length)
    },
    hW: function(n, t) {
        n.db(t, !0)
    },
    dN: function() {
        return this.v ? this.v.bF() : this.h.a.a()
    },
    et: function(n) {
        return !1
    },
    ng: function() {
        var n = this.h.a.f;
        n.h.bH.FolderId.Id === this.f.a().bH.FolderId.Id ? this.iu(!0) : this.ke(n.h, !0, null)
    },
    iu: function(n) {
        var t = this.f.c() !== -1 ? this.f.f().g() : null;
        this.ke(this.f.a(), n, t)
    },
    ke: function(n, t, i) {
        var r = this;
        this.bw.a(function(u) {
            var f = u.g();
            f.f(n);
            i && f.k(i);
            f.j(t);
            f.l(f.e().b || r.i.a().q() !== "AlwaysSend");
            r.K.a(f)
        })
    },
    nm: function(n) {
        if (this.j.a() === "TouchNarrow") {
            if (this.z.a.a()) {
                this.f.w(this.z.a.a().h.bH.FolderId);
                this.f.df(n ? n : this.f.m(), !1)
            }
            this.E.d()
        }
    },
    mY: function(n) {
        n.dd(!0);
        n.Z(this.w);
        n.df(new _y.ce(this.j, this.w));
        n.cO(this.ht || (this.ht = Function.createDelegate(this, this.li)));
        n.o(!1);
        n.D(!0);
        n.E(1);
        n.bq(this.o);
        n.w(this.p);
        n.C(!0);
        n.Q(new _j.g(this.gK || (this.gK = Function.createDelegate(this, this.oa)), _y.d.a));
        n.t(new _j.g(this.gb || (this.gb = Function.createDelegate(this, this.ns)), _y.d.a));
        n.s(new _j.g(this.gl || (this.gl = Function.createDelegate(this, this.nD)), _y.d.a));
        var t = !this.q || !this.q.a().E().Enabled;
        t && (this.p || this.j.a() === "TouchNarrow") && n.bb(new _j.g(this.hq || (this.hq = Function.createDelegate(this, this.pf)), _y.d.a));
        n.R(new _j.g(this.gI || (this.gI = Function.createDelegate(this, this.iN)), _y.d.a));
        n.ca(new _j.g(this.eY || (this.eY = Function.createDelegate(this, this.lM)), _y.d.a));
        this.w.apcl("Scope", this.cy || (this.cy = Function.createDelegate(this, this.iQ)));
        this.w.apcl("Date", this.cy || (this.cy = Function.createDelegate(this, this.iQ)));
        n.q("IsSettingsVisible", this.cH || (this.cH = Function.createDelegate(this, this.lo)));
        n.q("IsSettingsVisible", this.hv || (this.hv = Function.createDelegate(this, this.po)));
        n.q("ShowSearchBoxForTouch", this.hw || (this.hw = Function.createDelegate(this, this.pp)));
        n.X(this.gW || (this.gW = Function.createDelegate(this, this.iP)))
    },
    pf: function() {},
    nf: function() {
        this.ea = _j.m.a().a(_y.d.a, "LoadSearchSlabsOnDelay", this.fL || (this.fL = Function.createDelegate(this, this.kc)), _y.cz.a(2))
    },
    kc: function() {
        this.ea = _j.m.a().b(this.ea);
        var n = this;
        this.H.d(function(t) {
            n.hZ.a(function(t) {
                n.dh = n.h.c || n.bZ;
                n.w.by();
                n.iq ? t.c().k(null, null, null) : t.e().k(null, null, null)
            });
            n.ek && !n.C().h() && n.ek.a(function(t) {
                t.z(1);
                n.C().h() || n.C().cf(t);
                n.C().h().d()
            });
            n.eh && !n.C().r() && n.q.a().bf().Enabled && n.eh.a(function(t) {
                if (t && !n.C().r()) {
                    n.C().ce(t);
                    n.C().r().h(new _j.g(n.gt || (n.gt = Function.createDelegate(n, n.nK)), _y.d.a))
                }
            })
        })
    },
    lZ: function() {
        var n = null;
        this.C() && this.C().b() && (n = this.C().O());
        n || (n = this.o ? this.o.bH.FolderId : this.X());
        var t = this.C().Y("ItemWarmUpSearch31febf7b418e44878df6e5623e37c828", !1);
        t.h = _h.x.d();
        var r = new _h.q("DateTimeReceived", "Descending");
        var i = new _h.bm(n, t, new _g.V("IdOnly"), "MailListItem", _h.x.a(0, 1), !1, "All", r, !0, null, null, 200, null, -1, null, !1);
        this.K.a(i)
    },
    mN: function() {
        if (this.j.a() !== "TouchNarrow") {
            this.P = new _j.g(this.bo || (this.bo = Function.createDelegate(this, this.bc)), _y.d.a);
            this.hH = new _j.g(this.fj || (this.fj = Function.createDelegate(this, this.lY)), _y.d.a)
        }
    },
    mM: function() {
        this.p && (this.iE = new _j.g(this.fi || (this.fi = Function.createDelegate(this, this.lX)), _y.d.a))
    },
    lL: function() {
        if (_y.c.a.a() !== "TouchNarrow") {
            this.g.dj(this.gd || (this.gd = Function.createDelegate(this, this.nu)));
            this.g.g().apcl("Top", this.gL || (this.gL = Function.createDelegate(this, this.ob)));
            this.g.g().o = this.gM || (this.gM = Function.createDelegate(this, this.oc))
        }
    },
    ox: function() {
        this.G.b(_h.dh, this.fz || (this.fz = Function.createDelegate(this, this.mD)));
        this.G.b(_y.eF, this.cd || (this.cd = Function.createDelegate(this, this.jR)));
        this.j.a() === "TouchWide" && this.G.b(_y.bP, this.fA || (this.fA = Function.createDelegate(this, this.mE)));
        if (this.p) {
            this.G.b(_y.jD, this.fy || (this.fy = Function.createDelegate(this, this.mC)));
            this.G.b(_a.dP, this.fw || (this.fw = Function.createDelegate(this, this.mA)));
            this.G.b(_y.di, this.ft || (this.ft = Function.createDelegate(this, this.mx)));
            this.by && this.by.e() && this.G.b(_y.fE, this.cD || (this.cD = Function.createDelegate(this, this.kL)))
        }
        this.G.b(_h.bB, this.hx || (this.hx = Function.createDelegate(this, this.pt)));
        this.G.b(_h.bw, this.fC || (this.fC = Function.createDelegate(this, this.mG)));
        this.G.b(_y.gS, this.fq || (this.fq = Function.createDelegate(this, this.mv)));
        this.G.b(_a.eM, this.fx || (this.fx = Function.createDelegate(this, this.mB)));
        this.G.b(IIsShowingComposeInReadingPaneEvent, this.fv || (this.fv = Function.createDelegate(this, this.mz)))
    },
    mx: function(n) {
        this.je = n;
        n.b === 1 ? this.r.dv() : this.r.dX().a();
        var t = this;
        _j.m.a().d(_a.a.p, "Resetting the item to sweep to null", function() {
            t.je = null
        })
    },
    mA: function(n) {
        if (n.a) {
            this.bZ = this.C() && this.C().y() ? this.dh : this.h.c;
            this.h.t(!1)
        } else {
            this.h.t(this.bZ);
            this.bZ = !1
        }
    },
    mv: function(n) {
        this.bc()
    },
    mB: function(n) {
        var t = this;
        this.ed.a(function(i) {
            var r = i.a(!1, !0);
            r.e(0);
            r.f(!0);
            r.i("Html" === t.i.a().m() ? "HTML" : "Text");
            if (_y.u.a(n.a, r, t.by.b())) {
                var u = null;
                t.M(function() {
                    u = t.ec.e(t.g, t.m.a, null);
                    u.a(r)
                })
            }
        })
    },
    mG: function(n) {
        this.es(!0);
        var t = this;
        this.ex.a(_a.a.co, "HandleUserRefreshEvent", function() {
            t.df(null, null)
        }, 1e3)
    },
    mz: function(n) {
        this.f.co(n.a())
    },
    lS: function() {
        if (this.j.a() === "TouchNarrow") {
            this.f.i().g();
            this.f.E(null)
        }
    },
    pt: function(n) {
        if (n && n.a && _h.cy.isInstanceOfType(n.a)) {
            this.jf = n.a.p;
            this.df(null, null)
        }
    },
    ks: function(n, t) {
        this.G.a(_h.cq, new _h.cq(this.f.bL()));
        this.df(null, null)
    },
    df: function(n, t) {
        this.jf ? this.es(!0) : this.f.be() ? this.es(!1) : this.es(this.f.bL() || this.f.bD())
    },
    iL: function(n, t) {
        if (this.r) {
            var u = _h.a.a(this.R());
            var i = this.f;
            var f = !!this.U && this.U.a();
            var r = i;
            this.r.ey(i.h(), this.s, i.p(), r.x || (r.x = Function.createDelegate(r, r.bk)), !i.b() || this.o.c() || f ? this.o : u, i.t(), i.m(), i.d(), i.c(), !!i.b(), i.bF())
        }
        this.j.a() === "TouchWide" && this.jZ()
    },
    mE: function(n) {
        n.b && this.m.c(!1)
    },
    mD: function(n) {
        n && _h.cy.isInstanceOfType(n.b) && this.oR(n.a)
    },
    jR: function(n) {
        var i = null;
        this.g && this.g.b() && this.g.b().a() && (i = this.g.b().a().bH.ConversationId.Id);
        for (var r = _h.h.a().d(_h.E), t = 0; t < r.length; t++) r[t].R(i)
    },
    mC: function(n) {
        var r = n.a;
        var i = {};
        i.ItemID = r.Id;
        var u = _h.d.a().a(r.Id);
        if (u) {
            var t = this.ir.a(!0);
            t.a(u);
            t.c(this.i.h());
            this.j.g(_y.I, null, i, _bc.d.a(), t, !1)
        } else this.j.r(_y.I, null, i, _bc.d.a())
    },
    jT: function(n, t) {
        var i = [];
        Array.add(i, new _ff.f(_u.R.Ta, "All"));
        Array.add(i, new _ff.f(_u.R.Ql, "Unread"));
        t || Array.add(i, new _ff.f(_u.R.Gv, "ToOrCcMe"));
        Array.add(i, new _ff.f(_u.R.Fm, "Flagged"));
        this.q.a().u().Enabled && Array.add(i, new _ff.f(_u.R.Ij, "Mentioned"));
        return i
    },
    oa: function() {
        if (_j.h.b(this.C().a())) {
            if (!this.C().d()) {
                this.C().z(!1);
                this.eJ("IsFolderListHidden")
            }
        } else {
            if (this.w.p()) this.h.t(!0);
            else {
                this.C().z(!0);
                this.j.a() === "TouchWide" ? this.h.t(!0) : this.eJ("IsFolderListHidden")
            }
            this.G.a(_a.dw, new _a.dw)
        }
        if (this.C().bP() && this.C().a())
            if (this.w.p()) {
                var n = this;
                this.bN.a(function(t) {
                    n.C().S()
                })
            } else this.C().S();
        this.lm()
    },
    iP: function(n, t) {
        this.kc();
        this.C().cd(!1);
        if (this.H.b && this.f)
            if (this.w.p() && this.bN) {
                var i = this;
                this.bN.a(function(n) {
                    if (i.p) {
                        if (!i.w.o) {
                            i.w.bA(n.i(i.cA || (i.cA = Function.createDelegate(i, i.kE))));
                            i.w.o.r(i.hl || (i.hl = Function.createDelegate(i, i.oZ)))
                        }!i.C().m() && i.q.a().kO().Enabled && i.C().bp(n.f(i.cA || (i.cA = Function.createDelegate(i, i.kE)), !0))
                    }
                    i.jH(n)
                });
                this.lm()
            } else this.lZ();
        else this.H.b || !this.w.p() || this.C().a() || this.cY(!1, !1)
    },
    ey: function() {
        var n;
        n = _y.fq.a(this.A(), this.by, this.j) ? this.s === 4 ? 2 : 4 : this.s === 1 ? 2 : 1;
        this.Z.a(n)
    },
    ot: function(n) {
        for (var r = _h.h.a().d(_h.E), i = 0; i < r.length; i++) r[i].H(n);
        for (var u = _h.h.a().d(_h.F), t = 0; t < u.length; t++) u[t].H(n)
    },
    ma: function() {
        var n = this;
        this.H.d(function(t) {
            n.H.e(!0);
            n.h.t(!0);
            n.p && n.h.bd(280)
        })
    },
    nD: function() {
        this.kl(!1)
    },
    kl: function(n) {
        this.C().cd(n);
        this.w.be(this.C().a());
        this.f.bp(_u.R.PS);
        this.C().cg(_j.m.a().b(this.C().bU()));
        this.bP && this.lq(!1);
        this.m.c(!1);
        if (this.w.p()) {
            this.nN();
            return
        }
        var i = this.C().h();
        if (i && i.f()) {
            this.iN();
            return
        }
        if (!i || !(i.a() >= 0) || !(i.a() < i.b().x.length)) {
            var t = this.C().l();
            if (t) {
                var r = t.c();
                if (t || t.a() >= 0 && t.a() < t.b().x.length) {
                    r || (r = t.b().x[t.a()]);
                    if (this.C().P() && r) {
                        this.C().g(r.a());
                        this.ne() && _h.g.a(_a.a.bs, "HashtagSearch", 15, 0, null)
                    }
                }
            }
            this.C().G(!1);
            this.iQ(null, null)
        }
    },
    ne: function() {
        return !_j.h.a(this.C().a()) && this.C().a().startsWith("#") ? !0 : !1
    },
    iQ: function(n, t) {
        if (this.w.p()) throw Error.invalidOperation("this method should not be invoked if instant search is active and search in regular mailbox folder.");
        if (this.H.b && !_j.h.a(this.C().a()) && this.C().a().trim().length > 0) {
            this.C().n(!0);
            this.db("All");
            this.C().k(this.p);
            this.f.cl(this.C(), !0)
        }
    },
    nN: function() {
        var t = this.C().h();
        var i = this.C().cU();
        if (t) {
            t.w();
            if (t.f()) {
                this.iN();
                return
            }
        }
        var n = this.C().r();
        if (n && n.f()) {
            n.d();
            return
        }
        this.C().bZ();
        this.C().G(!1);
        if (this.w.v && !this.q.a().gt().Enabled) {
            this.C().n(!0);
            this.f.cl(this.C(), !0)
        } else this.iW(!1, !1, i)
    },
    nn: function() {
        var n = this.f.m();
        this.jV(n)
    },
    mI: function() {
        if (!this.bb) {
            var n = new _j.l;
            n.a(this.h.a.c);
            this.oB(new _y.cZ(this.bf(n, null, !0, !1, this.D.c(), null, null, null, null, null)))
        }
    },
    lP: function(n) {
        var i = this.bb.j;
        if (i === 1 && this.bb.i) {
            this.ja(this.bb.i, n);
            _h.g.a(_a.a.p, "ArchiveFolder_SetCustomFolderAsArchive", -1, 0, null)
        } else if (!i) {
            var t = new _h.be;
            t.l(_h.a.b("msgfolderroot"));
            t.e = this.h.a.c.p;
            t.k(_u.R.Mq);
            var r = this;
            t.c(function() {
                r.ja(t.f, n);
                _h.g.a(_a.a.p, "ArchiveFolder_CreateDefaultArchiveFolder", -1, 0, null)
            });
            this.K.a(t)
        }
    },
    ja: function(n, t) {
        this.iD(n, t);
        _h.a.bq(n)
    },
    ny: function() {
        this.f && (this.bg() ? this.g.b().A().a() : this.f.B().a())
    },
    oo: function() {
        this.f && this.f.S().a()
    },
    nr: function() {
        this.f && this.f.cy().a()
    },
    og: function() {
        this.f && this.f.cT().a()
    },
    nF: function() {
        this.f && (this.bg() ? this.g.b().X().a() : this.f.ci().a())
    },
    nt: function() {
        this.f && (this.bg() ? this.g.b().bm().a() : this.f.ch().a())
    },
    nE: function() {
        this.f && (this.bg() ? this.g.b().P().a() : this.f.bK().a())
    },
    nR: function() {
        this.f && this.f.bK().a()
    },
    nU: function() {
        this.f && (this.bg() ? this.g.b().E().a() : this.f.K().a())
    },
    nO: function() {
        this.iu(!0)
    },
    nV: function() {
        this.f && (this.bg() ? this.g.b().G().a() : this.f.L().a())
    },
    nS: function() {
        this.f && this.f.cO().a()
    },
    nT: function() {
        this.f && this.f.cP().a()
    },
    nM: function() {
        this.f && this.f.R() && this.f.R().b && this.f.R().a()
    },
    nq: function() {
        this.f && this.f.cF().a()
    },
    nC: function() {
        var t = this.f.cY() ? this.f.cY() : null;
        var n = this.dN();
        n && this.hW(n, t)
    },
    nw: function() {
        this.f.dg()
    },
    nA: function() {
        if (this.bB) this.bB.a(!0);
        else {
            var n = this;
            this.is.a(function(t) {
                n.oM(t);
                n.bB.a(!0)
            })
        }
    },
    nP: function() {
        this.f && this.f.bg().a()
    },
    nQ: function() {
        this.f && this.f.eb().a()
    },
    nH: function() {
        this.f && this.f.dR().a()
    },
    or: function() {
        this.f && this.f.dc().a()
    },
    no: function() {
        if (this.f.p()) this.f.p().f();
        else {
            var n = this;
            this.f.bk(this.f.m(), function(n) {
                n.f()
            })
        }
    },
    nZ: function() {
        var n = this;
        this.M(function() {
            var t = null;
            !(n.s === 1) && n.g.e() && n.g.e().a() && n.g.e().i() ? t = n.g.e().a().Q() : n.s === 1 && n.g.b() && n.g.b().e() && (t = n.g.b().e().Q());
            t && (t.b ? t.a() : n.B.h(0, String.format(_u.R.SH, _u.R.Mz), null))
        })
    },
    oi: function() {
        this.f && this.f.cg() && this.f.cg().a()
    },
    on: function() {
        this.f && this.f.cj() && this.f.cj().a()
    },
    oh: function() {
        this.f && this.f.cU().a()
    },
    nW: function() {
        this.f && this.f.bh().a()
    },
    nX: function() {
        this.f && this.f.bH().a()
    },
    lV: function() {
        this.f && this.f.cz().a()
    },
    oA: function() {
        this.f.cX().a()
    },
    kY: function(n) {
        this.m.p(_y.d.c(n.c, this.i));
        this.ll(this.m.a)
    },
    oX: function() {
        var i = new _j.g(this.fK || (this.fK = Function.createDelegate(this, this.nd)), _y.d.a);
        var r = new _j.g(this.fH || (this.fH = Function.createDelegate(this, this.nc)), _y.d.a);
        var u = new _j.g(this.fQ || (this.fQ = Function.createDelegate(this, this.ni)), _y.d.a);
        var n = _j.g.a;
        var t = _j.g.a;
        if (this.r) {
            this.r.bb() && (n = this.r.bb());
            this.r.ba() && (t = this.r.ba())
        }
        this.g.cc(i, r, this.dU, this.dT, this.be, u, this.cJ, n, t, this.hV, this.dS)
    },
    ll: function(n) {
        if (n === 2) {
            var i = window.document.body.clientHeight;
            var t = i - 30;
            this.L = .5 * t
        }
        this.eJ("ListViewWidth")
    },
    nu: function() {
        this.f.cs(this.g.b());
        if (this.bl) {
            var n = 0;
            switch (this.bl) {
                case 2:
                    n = 1;
                    break;
                case 3:
                    n = 2;
                    break;
                case 1:
                default:
                    n = 0;
                    break
            }
            this.lp(this.de.a(n), n, null)
        }
    },
    lO: function() {
        this.h.m(!1);
        this.bn.e && this.h.b.S(this.hj || (this.hj = Function.createDelegate(this, this.oW)));
        switch (this.bn.c) {
            case 1:
                this.O().a(2);
                break;
            case 2:
                this.O().b(3);
                break;
            case 3:
                this.O().b(8);
                break;
            case 0:
                this.O().a(1);
                break
        }
    },
    oW: function(n, t) {
        try {
            for (var u = this.h.b.s, e = this.bn.e.split("/"), f = 0; f < e.length; f++)
                for (var r = u.l, i = 0; i < r.x.length; i++) {
                    var o = r.x[i];
                    if (o.h.bH.DisplayName.toLowerCase() === e[f].toLowerCase()) {
                        u = r.x[i];
                        u.e().a();
                        break
                    } else if (i === r.x.length - 1) throw Error.invalidOperation(_u.R.Md);
                }
            this.h.b.r(u.h.bH.FolderId);
            this.h.b.v.a()
        } catch (s) {
            _y.bv.a(_u.R.Md)
        }
    },
    iI: function(n, t) {
        if (this.f.a()) {
            var i = _y.d.c(this.f.a().bH.FolderId, this.i);
            if (this.m.a !== i)
                if (!i && this.g && this.g.c() && _y.g.isInstanceOfType(this.g.c())) this.B.r || this.B.h(0, _u.R.Nk, null);
                else {
                    this.m.p(i);
                    this.ll(i)
                }
        }
    },
    mw: function(n) {
        var t = this;
        this.M(function() {
            if (t.g.g() && _y.g.isInstanceOfType(t.g.g().a())) {
                var i = t.g.g().a();
                if (n.a) {
                    i.a().s() || i.a().T(new _j.l);
                    i.a().s().j(n.a.f())
                }
                i.N()
            } else t.bc(!1, null, n.a)
        })
    },
    il: function(n) {
        var t = this;
        this.H.d(function(i) {
            t.t() && t.t().r && t.t().q.a();
            t.p || _y.w.c(t.j) || t.h.m(!1);
            t.m.c(!1);
            t.H.e(!0);
            t.p && t.C().k(!n.a);
            t.C().g(n.b);
            n.a && t.kl(!0);
            t.bx = null
        })
    },
    pc: function(n) {
        var r = this.i.c().bH.QuotaUsed;
        var i = this.i.c().bH.QuotaWarning;
        var t = this.i.c().bH.QuotaSend;
        if (t > 0 && r > t) {
            this.B.h(0, _u.R.Rz, null);
            return
        }
        if (i > 0 && r > i) {
            this.B.h(0, _u.R.Oa, null);
            return
        }
    },
    jm: function(n, t) {
        var i = this.i.b().u();
        i.f(n);
        this.i.b().Z(i);
        t ? this.ex.a(_y.d.a, "MailModuleViewModel.UpdateGlobalFolderSettingsWidth", this.fd || (this.fd = Function.createDelegate(this, this.hP)), 1e4) : this.hP()
    },
    hP: function() {
        _h.f.a(this.i.b().c(), this.K)
    },
    nY: function(n) {
        this.cQ = this.ic.a();
        this.cQ.b(10)
    },
    om: function(n) {
        if (this.bO && n.a && !n.a.b && n.a.a() === "deleteditems") {
            var i = _a.b.b(_a.a.bH, "OpenDumpster", !1, null);
            var r = _g.j.a("recoverableitemsdeletions");
            this.ep(r, !1, !0, !0);
            var t = new _a.l;
            t = _h.g.b(t);
            i.m = t.toString();
            _a.b.a(i)
        }
    },
    pi: function(n) {
        this.U ? this.U.c(n, this.m, this.dN()) : n.b || n.a() !== "deleteditems" || this.mO(n)
    },
    kk: function(n, t) {
        if (this.j.a() === "TouchWide")
            if (this.cN.a === 1) this.m.c(!1);
            else if (!this.cN.a) {
            var i = !this.g || _y.ff.isInstanceOfType(this.g.c()) || _y.cP.isInstanceOfType(this.g.c());
            this.m.c(!i)
        }
    },
    M: function(n) {
        if (this.g) n && n();
        else {
            var t = this;
            this.dq.a(function(i) {
                if (!t.g) {
                    t.g = i;
                    t.g.ba(t.m.a);
                    t.mX()
                }
                n && n()
            })
        }
    },
    jH: function(n) {
        if (!this.w.p()) throw Error.invalidOperation("this method should only be invoked if the instant search feature is enabled in this folder.");
        var t = null;
        t = _g.j.d(this.A()) ? this.I.nameToId("msgfolderroot").Id : this.A().Id;
        this.C().bk(n, this.s === 1, new _g.m(t), this.g ? this.g.o() : 1)
    },
    iW: function(n, t, i) {
        if (this.C().f()) this.jY(n, t, i);
        else {
            var r = this;
            this.bN.a(function(u) {
                r.jH(u);
                r.jY(n, t, i)
            })
        }
    },
    jY: function(n, t, i) {
        if (this.C().f() && !_j.h.a(this.C().a()) && this.H.b && this.C().a().trim().length > 0) {
            if (this.W && _y.gt.isInstanceOfType(this.W)) {
                this.W.d(this.C().a());
                return
            }
            this.p || this.C().k(!1);
            var r;
            r = this.o ? _g.bX.isInstanceOfType(this.o) ? this.R() : this.o.bH.FolderId : this.X();
            (this.s === 4 || this.s === 5) && this.d(2, !1);
            this.f.dj(this.C(), r, null, n, t, i);
            if (this.p) {
                this.C().z(!0);
                this.eJ("IsFolderListHidden");
                this.m.c(!1)
            } else this.C().z(!0)
        }
    },
    kK: function(n, t) {
        this.iW(!1, !0, !1)
    },
    kE: function(n, t) {
        this.iW(!0, !1, !1)
    },
    mL: function() {
        if (this.p) {
            this.oQ(new _y.o(this.G, this.by, this.i, this.D, this.P, this.iE, this.be, this.ev, this.en, this.em, this.cP, this.dS, this.cJ, this.dB, this.ef, this.iv, this.eg, this.iz, this.iA, this.bK, this.cL, this.cM, this.hT, this.bE, this.bF, this.ix, this.iy, this.id, this.jj, this.hK, this.bA, this.hL, this.iS, this.iX, this.hF, this.hG, this.hS, this.eo, this.ib, this.ge || (this.ge = Function.createDelegate(this, this.nv)), this.m, this.fc || (this.fc = Function.createDelegate(this, this.lQ)), this.jc, this.hO));
            var t = this.g ? this.g.g().a() : null;
            var n = this.f;
            this.r.dY(this.f.h(), n.x || (n.x = Function.createDelegate(n, n.bk)), this.s, this.o, this.f.t(), this.f.m());
            this.f.dr(this.r.bb(), this.r.ba())
        }
    },
    lp: function(n, t, i) {
        i ? this.ps(n, i, t) : this.s === 1 ? this.pq(n, t) : this.pr(n, t)
    },
    pq: function(n, t) {
        if (this.g && this.g.b()) switch (this.g.b().bk()) {
            case 3:
                n.e();
                this.bl = 0;
                break;
            case 1:
                switch (t) {
                    case 0:
                        this.bl = 1;
                        break;
                    case 1:
                        this.bl = 2;
                        break;
                    case 2:
                        this.bl = 3;
                        break
                }
                n.d(!0);
                break;
            case 2:
                var i = this.g.b().W();
                if (i) {
                    var r = i.j().bH.From.Mailbox;
                    n.a([r], this.o, t === 1 ? this.ik() : null, t === 2 ? this.f.e().m() : null)
                }
                break
        }
    },
    pr: function(n, t) {
        if (this.f.r().length) {
            for (var o = this.f.r(), f = new _a.j, u = o, s = u.length, i = 0; i < s; ++i) {
                var r = u[i];
                if (r.bU() === 1) {
                    var e = r;
                    f.c(e.bH.From.Mailbox)
                }
            }
            n.a(f.e(), this.o, t === 1 ? this.ik() : null, t === 2 ? this.f.e().bT() : null)
        }
    },
    ps: function(n, t, i) {
        this.bl = 0;
        n.a([t.a], this.o, i === 1 ? this.ik() : null, null)
    },
    ob: function(n, t) {
        this.le();
        this.lj()
    },
    lj: function() {
        this.g ? this.f.co(this.g.cM(this.m)) : this.f.co(!1)
    },
    le: function() {
        if (this.r && this.g) {
            var t = this.m.a ? this.jP() : 0;
            var n = this.m.b || !!this.m.a;
            this.r.ez(n ? this.g.g().a() : null, t, this.m.b)
        }
    },
    oc: function(n) {
        this.r && _y.g.isInstanceOfType(n) && n.t(!0);
        this.iZ(!0)
    },
    lk: function() {
        if (this.p) {
            this.oN(!this.m.a && this.m.b);
            this.oT(!this.m.a && !this.m.b);
            this.Y && this.f.bm(!1);
            this.le();
            this.lg();
            this.g && _y.g.isInstanceOfType(this.g.g().a()) && this.g.g().a().T(!0)
        }
    },
    iJ: function(n, t) {
        this.lj();
        var i = this.m.b;
        this.lk();
        this.o && this.o.a() === "deleteditems" && this.U && this.U.d(i);
        if (this.j.a() === "TouchWide") {
            this.C() && this.C().d() ? this.H.e(!i) : i && this.H.b && this.cY(!1, !0);
            this.kT(this.ij())
        }
        i ? this.G.a(_y.cr, new _y.cr(!0)) : this.ia();
        this.bP && (this.H.b ? this.lq(this.Y) : this.g && i && _y.g.isInstanceOfType(this.g.g().a()) || this.ez())
    },
    kx: function(n, t) {
        this.g && this.m.a !== this.g.o() && this.g.ba(this.p ? this.m.a : 1);
        this.bv && this.bv.bW();
        this.bC && this.bC.bW();
        this.bj && this.bj.bW();
        this.s === 5 && this.g && this.g.o() ? this.d(2, !1) : this.f.c() === 1 && _y.d.k(this.q, this.i, this.j) && this.d(5, !1);
        this.g && this.V && this.V.a(this.g.o());
        this.lk()
    },
    mH: function(n) {
        var t = this.f.a();
        if (_g.j.d(n.bH.FolderId) && t && _g.j.d(t.bH.FolderId)) {
            var r = n.bH.FolderId.a;
            var i = this.f.bZ();
            return r !== i
        }
        return !1
    },
    nv: function(n) {
        var t = new _h.be;
        t.l(_h.a.b("msgfolderroot"));
        t.e = this.h.a.c.p;
        t.k(n);
        var i = this;
        t.c(function() {
            i.iD(t.f, i.f.m())
        });
        t.b(this.fh || (this.fh = Function.createDelegate(this, this.lW)));
        _a.g.a.a(t)
    },
    lW: function(n) {
        var t = n;
        t && t.h() === "ErrorFolderExists" && this.B.h(0, _u.R.DV, null, !1, null, null, _u.R.DS)
    },
    oj: function(n, t) {
        this.eJ("SearchViewModel")
    },
    ky: function(n, t) {
        this.r.ew(this.jN());
        this.eJ("IsDelayedSendMessageBarShown")
    },
    km: function(n, t) {
        this.e(new _h.W(this.f.z().d()))
    },
    lh: function(n, t) {
        this.oK(this.j.a() === "TouchNarrow" || this.ie())
    },
    li: function(n, t) {
        this.oL(this.j.a() === "TouchNarrow" || !!this.C() && this.C().bO());
        this.eN("DisplayInstantSearchStatusBar", "SearchSettingsVisible")
    },
    po: function(n, t) {
        this.eJ("SearchSettingsVisible")
    },
    pp: function(n, t) {
        this.eJ("ShowSearchBoxForTouch")
    },
    kh: function(n) {
        this.Z.r(n)
    },
    oz: function() {
        this.kh(new _h.W("All"))
    },
    kr: function(n, t) {
        if (this.m.h === 1) {
            this.iJ(null, null);
            this.M(this.hp || (this.hp = Function.createDelegate(this, this.pe)))
        }
    },
    pe: function() {
        this.g.cP()
    },
    mF: function(n, t) {
        this.eN(_y.d.e, _y.d.n)
    },
    kq: function(n, t) {
        this.r && this.r.et(n.bF())
    },
    kd: function() {
        var n = this;
        _j.m.a().d(_a.a.p, "LoadUpNextSlab", function() {
            var t = _a.b.b(_a.a.dG, "UpNextInit", !1, null);
            n.jn.a(function(i) {
                n.V = i;
                n.V.a(n.m.a);
                n.V.apcl(i.b(), n.fB || (n.fB = Function.createDelegate(n, n.mF)));
                n.V.c();
                _a.b.a(t)
            })
        })
    },
    bf: function(n, t, i, r, u, f, e, o, s, h) {
        return new _y.de(this.G, n, this.i, this.j, t, this.cU, i, r, !1, this.q, f, e, this.bw, this.cT, this.K, null, this.D, null, s, h, u)
    },
    kp: function(n, t) {
        if (this.v && this.v.g) {
            this.v.g.apcl("ActionTargetFolder", this.gu || (this.gu = Function.createDelegate(this, this.nL)));
            this.r && !this.v.g.c().z() && this.q.a().jT().Enabled && this.r.el(this.v.g.c().i())
        }
    },
    nL: function(n, t) {
        this.v.g.f() && this.f.w(this.v.g.f())
    },
    lN: function(n) {
        var t = n.a();
        switch (t) {
            case 1:
                this.eq(1);
                this.er(this.jL());
                break;
            case 3:
                this.eq(3);
                this.er(this.dM());
                break;
            case 2:
                this.eq(2);
                this.er(this.dM());
                break;
            default:
                _j.e.c(_a.a.p, String.format("FolderView type: {0} is not supported", t));
                break
        }
        this.f.cn(this.s)
    },
    jQ: function(n, t, i) {
        switch (n) {
            case 1:
                i(this.jL());
                break;
            case 2:
            case 3:
                i(this.dM());
                break;
            case 4:
                if (!_y.fq.a(t, this.q, this.j)) {
                    i(this.dM());
                    break
                }
                if (this.bj) i(this.bj);
                else {
                    var u = this;
                    this.bS.c(function(n) {
                        u.bj = n;
                        u.bG.a(u.bj);
                        i(u.bj)
                    })
                }
                break;
            case 5:
                if (this.bu) i(this.bu);
                else {
                    var r = this;
                    this.bS.a(function(n) {
                        r.bu = n;
                        r.bu.bu(!r.jM());
                        r.bG.a(r.bu);
                        i(r.bu)
                    })
                }
                break;
            default:
                _j.e.c(_a.a.p, String.format("FolderView type: {0} is not supported", n));
                break
        }
    },
    pj: function(n, t) {
        if (!_g.j.b(n.bH.FolderId) && !_h.l.b(n.bH.FolderId) && t.a() !== 3) {
            t.k(3);
            this.i.b().k(t);
            this.hP()
        }
    },
    oY: function(n) {
        return !(this.f.c() && n && this.m.b && !this.m.a)
    },
    mt: function(n, t) {
        var i = 0;
        (n.g() !== t.g() || n.c() !== n.c()) && (i |= 2);
        n.t().C(t.t()) || (i |= 4);
        n.b() && (i |= 1);
        return i
    },
    kn: function(n, t) {
        this.cP.a()
    },
    pa: function() {
        _a.b.c(_a.a.o, "SDSP");
        this.G && this.G.a(_a.fi, new _a.fi)
    },
    mQ: function() {
        if (_y.d.b(this.q, this.i, this.D, this.j)) {
            var u = this.i.a().bH.IsFocusedInboxOnLastUpdateTime;
            var i = this.i.a().bH.IsFocusedInboxOnAdminLastUpdateTime;
            var f = !_j.z.a(this.i.a().bH.IsFocusedInboxEnabled);
            var n = u ? _a.d.o(new Date(u)) : null;
            var t = i ? _a.d.o(new Date(i)) : null;
            _j.e.a(_a.a.Y, "InitializeFocusedInboxConfig: IsFocusedInboxEnabled:{0}; UserTimestamp:{1}; AdminTimestamp:{2}; FocusedInboxServerOverride:{3}; IsFocusedInboxOnAdminOverride:{4};", this.i.a().bH.IsFocusedInboxEnabled, n, t, this.i.a().bH.FocusedInboxServerOverride, this.i.a().bH.IsFocusedInboxOnAdminOverride);
            (!f || !n || t && t.a(n) > 0) && this.i.a().E(this.i.a().bH.FocusedInboxServerOverride);
            if (!f && n) {
                var r;
                (r = this.i.b()).I(r.bH.FocusedInboxBitFlags | 4)
            }
            this.i.a().di(i)
        }
    },
    lm: function() {
        this.C().r() && this.C().de(!_j.h.b(this.C().a()))
    },
    lf: function(n, t, i) {
        if (this.mp()) {
            this.oJ(!0);
            this.kP(_y.e.Y());
            this.kQ(_u.R.TC);
            this.oE(_u.R.Cs)
        } else {
            this.kP(_y.e.o());
            this.kQ(n);
            this.oG(t);
            this.oF(i)
        }
    },
    oJ: function(n) {
        if (this.dV !== n) {
            this.dV = n;
            this.eJ("IsEmptyStateUpsellShown")
        }
        return n
    },
    oZ: function(n) {
        this.kM(n)
    },
    lQ: function(n, t) {
        if (!this.i.c().bH.IsExplicitLogon)
            if (this.de) this.jG(n, t);
            else {
                var i = this;
                this.hJ.a(function(r) {
                    i.de = r;
                    i.jG(n, t)
                })
            }
    },
    ik: function() {
        var n = new _j.l;
        n.a(this.h.a.c);
        return this.bf(n, null, !0, !1, this.D.c(), null, null, null, null, null)
    },
    jG: function(n, t) {
        var i = this.de.a(n);
        this.lp(i, n, null);
        t(i)
    }
};
_y.jb = function() {};
_y.jb.prototype = {
    a: null,
    e: null,
    d: null,
    c: null,
    b: null
};
_y.ez = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt, kt, dt) {
    _y.ez.initializeBase(this, [n, t, null, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, null, null, rt, ut, ft, et, ot, null, null, null, null, null, st, null, null, null, null, null, null, ht, null, null, null, ct, lt, at, vt, yt, pt, wt, bt, kt, dt, null, null, null]);
    document.body.style.minWidth = "200px"
};
_y.dw = function(n, t, i, r, u, f, e, o, s, h, c) {
    this.bu = Function.createDelegate(this, this.bY);
    _y.dw.initializeBase(this, [n, t, i, r, u, f, o, s, null, null, c]);
    if (e) {
        this.bd = !0;
        this.be = e.a;
        this.L = e.b;
        this.bv = new _j.g(this.bu, _a.a.gb)
    }
};
_y.dw.prototype = {
    bv: null,
    bd: !1,
    L: null,
    be: null,
    bY: function() {
        window.navigate(this.L)
    }
};
_y.bv = function(n) {
    this.a = n;
    n.h() ? this.i() : this.j();
    _y.c.a.U(!0)
};
_y.bv.b = function(n) {
    try {
        return new _y.bv(n)
    } catch (t) {
        return null
    }
};
_y.bv.a = function(n) {
    window.location.replace("/owa/auth/errorfe.aspx?msg=" + n)
};
_y.bv.prototype = {
    f: 0,
    h: !1,
    g: !1,
    e: null,
    c: 0,
    b: null,
    d: 0,
    a: null,
    j: function() {
        _a.A.a.a(new _a.bt(1, "VM.WebpartCmdParameterSet"));
        if (this.a.a.part) try {
            this.h = Number.parseInvariant(this.a.a.part) === 1;
            _a.A.a.a(new _a.bt(1, "VM.WebpartPartParameterSet"))
        } catch (t) {
            _y.bv.a(String.format(_u.R.SG, "part"));
            throw Error.argument("An invalid value was specified for the part parameter.");
        }
        if (this.a.a.folderlist) try {
            this.g = Number.parseInvariant(this.a.a.folderlist) === 1;
            _a.A.a.a(new _a.bt(1, "VM.WebpartFolderlistParameterSet"))
        } catch (n) {
            _y.bv.a(String.format(_u.R.SG, "folderlist"));
            throw Error.argument("An invalid value was specified for the folderlist parameter.");
        }
        if (this.a.a.fpath) {
            _a.A.a.a(new _a.bt(1, "VM.WebpartFpathParameterSet"));
            this.e = this.a.a.fpath
        }
        if (this.a.a.view) {
            _a.A.a.a(new _a.bt(1, "VM.WebpartViewParameterSet"));
            switch (this.a.a.view) {
                case "messages":
                    this.c = 1;
                    break;
                case "by sender":
                    this.c = 2;
                    break;
                case "by subject":
                    this.c = 3;
                    break;
                case "by conversation topic":
                    this.c = 0;
                    break;
                default:
                    _y.bv.a(String.format(_u.R.SG, "view"));
                    throw Error.argument("An invalid value was specified for the view parameter.");
            }
        } else this.c = 0;
        if (this.a.a.module) {
            _a.A.a.a(new _a.bt(1, "VM.WebpartModuleParameterSet"));
            switch (this.a.a.module) {
                case "inbox":
                    _a.A.a.a(new _a.bt(1, "VM.WebpartModuleEqualsInbox"));
                    this.f = 0;
                    this.e = null;
                    break;
                case "calendar":
                    _a.A.a.a(new _a.bt(1, "VM.WebpartModuleEqualsCalendar"));
                    this.f = 1;
                    break;
                case "discovery":
                    _a.A.a.a(new _a.bt(1, "VM.WebpartModuleEqualsDiscovery"));
                    this.f = 2;
                    break;
                default:
                    _y.bv.a(String.format(_u.R.SG, "module"));
                    throw Error.argument("An invalid value was specified for the module parameter.");
            }
        }
    },
    i: function() {
        this.b = _a.d.a();
        var i = this.b.j();
        var t = this.b.f();
        var n = this.b.g();
        var r = !1;
        try {
            this.a.a.d && (i = Number.parseInvariant(this.a.a.d));
            this.a.a.m && (t = Number.parseInvariant(this.a.a.m) - 1);
            this.a.a.y && (n = Number.parseInvariant(this.a.a.y));
            this.b = new _a.d(n, t, i)
        } catch (u) {
            r = !0
        }
        if (this.b.j() !== i || this.b.f() !== t || this.b.g() !== n || r) {
            _y.bv.a(String.format(_u.R.SG, "m, d, y"));
            throw Error.argument("An invalid date was specified for the calendar module webpart.");
        }
        if (this.a.a.view) switch (this.a.a.view) {
            case "monthly":
                this.d = 2;
                break;
            case "weekly":
                this.d = 1;
                break;
            case "daily":
                this.d = 0;
                break;
            default:
                _y.bv.a(String.format(_u.R.SG, "view"));
                throw Error.argument("An invalid value was specified for the view parameter.");
        } else this.d = 0
    }
};
_y.hq = function() {};
_y.hq.registerInterface("_y.hq");
_y.hs = function() {};
_y.hs.registerInterface("_y.hs");
_y.ht = function() {};
_y.ht.registerInterface("_y.ht");
_y.hu = function() {};
_y.hu.registerInterface("_y.hu");
_y.fO = function() {};
_y.fO.registerInterface("_y.fO");
_y.hv = function() {};
_y.hv.registerInterface("_y.hv");
_y.hx = function() {};
_y.hx.registerInterface("_y.hx");
_y.fP = function() {};
_y.fP.registerInterface("_y.fP");
_y.hr = function() {};
_y.hr.registerInterface("_y.hr");
_y.eC = function() {};
_y.eC.registerInterface("_y.eC");
_y.hw = function() {};
_y.hw.registerInterface("_y.hw");
_y.je = function(n, t) {
    this.d = n;
    this.c = t
};
_y.je.prototype = {
    d: null,
    c: null,
    a: function(n) {
        _y.cW.a(this.d);
        var t = this;
        this.c.a(function(t) {
            t.b(n)
        });
        return !0
    }
};
_y.fS = function() {};
_y.fS.registerInterface("_y.fS");
_y.fT = function() {};
_y.fT.registerInterface("_y.fT");
_y.jS = function() {};
_y.jS.registerInterface("_y.jS");
_y.db = function() {};
_y.db.registerInterface("_y.db");
_y.kd = function() {};
_y.kd.registerInterface("_y.kd");
_y.cw = function() {};
_y.cw.registerInterface("_y.cw");
_y.fR = function() {};
_y.fR.registerInterface("_y.fR");
_y.dx = function() {};
_y.dx.registerInterface("_y.dx");
_y.ji = function() {};
_y.ji.registerInterface("_y.ji");
var ICalendarItemDetailsViewModel = function() {};
ICalendarItemDetailsViewModel.registerInterface("ICalendarItemDetailsViewModel");
_y.ci = function() {};
_y.ci.registerInterface("_y.ci");
_y.cK = function() {};
_y.bG = function() {};
_y.bG.registerInterface("_y.bG");
_y.dz = function() {};
_y.dz.registerInterface("_y.dz");
_y.jR = function() {};
_y.jR.registerInterface("_y.jR");
_y.dy = function(n) {
    this.a = n
};
_y.dy.prototype = {
    a: 0
};
_y.cL = function(n) {
    this.a = n
};
_y.cL.prototype = {
    a: null,
    c: !1,
    b: function(n) {
        this.c || (this.c = n())
    }
};
_y.jn = function() {};
_y.jn.prototype = {
    a: function(n, t) {
        if (!_g.j.isInstanceOfType(n)) return "";
        var i = _g.j.c(n);
        return _a.v.g().toLowerCase() === "tr" ? i : i.toLocaleUpperCase()
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    }
};
_y.jm = function() {};
_y.jm.prototype = {
    a: function(n, t) {
        var i = n;
        switch (i) {
            case 0:
                return _y.e.a();
            case 1:
                return _y.e.U();
            case 2:
                return _y.e.V();
            case 3:
                return _y.e.X();
            case 4:
                return _y.e.W();
            case 5:
                return _y.e.T();
            default:
                return _y.e.a()
        }
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_y.dc = function() {};
_y.dc.prototype = {
    a: function(n, t) {
        var f = new Sys.StringBuilder;
        var o = "{0}; ";
        var s = "{0} <{1}>; ";
        var h = t ? t : !0;
        if (!n) return "";
        if (!_j.M.isInstanceOfType(n)) throw Error.argumentType("value", Object.getType(n), _j.M, "Value must be an ObservableCollection");
        if (!n.b()) return "";
        for (var u = n, r = null, i = 0; i < u.b(); i++) {
            r = null;
            if (_y.fk.isInstanceOfType(u.c(i))) {
                var e = u.c(i);
                r = e.b().a().a()
            } else _g.n.b(u.c(i)) ? r = u.c(i) : _g.hG.isInstanceOfType(u.c(i)) && (r = u.c(i).a());
            r && (h ? f.append(_j.h.c(s, r.Name, r.EmailAddress)) : f.append(_j.h.c(o, r.Name)))
        }
        return f.toString()
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_y.hH = function() {};
_y.hH.prototype = {
    a: function(n, t) {
        if (n) {
            var i = n;
            switch (i) {
                case "Complete":
                    return _u.R.Ig;
                case "Flagged":
                    return _u.R.JC;
                case "NotFlagged":
                default:
                    return _u.R.IZ
            }
        } else return ""
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_y.gb = function() {};
_y.gb.prototype = {
    a: function(n, t) {
        return n ? _g.b.a.idToName(n) : _g.bb.a
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    }
};
_y.gc = function() {};
_y.gc.prototype = {
    a: function(n, t) {
        if (n) {
            var i = t ? t : !1;
            switch (n) {
                case "High":
                    return i ? _u.R.Oc : _u.R.Re;
                case "Normal":
                    return i ? _u.R.Jh : _u.R.JQ;
                case "Low":
                    return i ? _u.R.BZ : _u.R.Hx;
                default:
                    return ""
            }
        } else return ""
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_y.cM = function() {
    _dh.f(this)
};
_y.cM.prototype = {
    a: function(n, t) {
        var i = n;
        switch (i) {
            case 50:
                return _u.R.SZ;
            case 51:
                return _u.R.Il;
            case 55:
                return _u.R.Qs;
            case 597:
                return _u.R.Mu;
            case 598:
                return _u.R.Rn;
            case 80:
                return _u.R.HA;
            case 4525:
                return _u.R.n;
            case 4550:
                return _u.R.Y;
            case 4575:
                return _u.R.BX;
            case 599:
                return _u.R.Kc;
            case 60:
                return _u.R.DI;
            case 63:
                return _u.R.Vo;
            case 62:
                return _u.R.MD;
            case 40:
                return _u.R.Gg;
            case 57:
                return _u.R.Hj;
            case 43:
                return _u.R.CW;
            case 41:
                return _u.R.Ua;
            case 42:
                return _u.R.Pw;
            case 44:
                return _u.R.Ha;
            case 36:
                return _u.R.Jz;
            case 45:
                return _u.R.EK;
            case 58:
                return _u.R.Fp;
            case 46:
                return _u.R.SD;
            case 47:
                return _u.R.MO;
            case 48:
                return _u.R.QE;
            case 600:
                return _u.R.PV;
            case 690:
                return _u.R.Or;
            case 660:
                return _u.R.Fn;
            case 670:
                return _u.R.DM;
            case 661:
                return _u.R.Ro;
            case 671:
                return _u.R.ON;
            case 700:
                return _u.R.Dh;
            case 800:
                return _u.R.UH;
            case 3400:
                return _u.R.MP;
            case 3500:
                return _u.R.p;
            case 3600:
                return _u.R.Gd;
            case 3700:
                return _u.R.De;
            case 3800:
                return _u.R.Ld;
            case 3900:
                return _u.R.NJ;
            case 4e3:
                return _u.R.PJ;
            case 4100:
                return _u.R.OF;
            case 10208:
                return _u.R.Fg;
            case 4200:
                return _u.R.BS;
            case 4300:
                return _u.R.Sn;
            case 4400:
                return _u.R.UW;
            case 4499:
                return _u.R.RE;
            case 5e3:
                return _u.R.MU;
            case 5400:
                return _u.R.Mx;
            case 5900:
                return _u.R.Ed;
            case 6e3:
                return _u.R.Jv;
            case 6100:
                return _u.R.Qq;
            case 6300:
                return _u.R.Sy;
            case 6400:
                return _u.R.Vi;
            case 6500:
                return _u.R.VG;
            case 6800:
                return _u.R.Bb;
            case 7100:
                return _u.R.Fa;
            case 7200:
                return _u.R.LR;
            case 7300:
                return _u.R.GK;
            case 7400:
                return _u.R.PY;
            case 83:
                return _u.R.EI;
            case 84:
                return _u.R.Sl;
            case 85:
                return _u.R.Rk;
            case 86:
                return _u.R.Bd;
            case 87:
                return _u.R.IV;
            case 950:
                return _u.R.BJ;
            case 7700:
                return _u.R.C;
            case 7725:
                return _u.R.Jj;
            case 7750:
                return _u.R.KW;
            case 7800:
                return _u.R.CG;
            case 8e3:
                return _u.R.So;
            case 8100:
                return _u.R.e;
            case 8200:
                return _u.R.Qk;
            case 8300:
                return _u.R.FQ;
            case 8310:
                return _u.R.Dj;
            case 8320:
                return _u.R.PQ;
            case 8330:
                return _u.R.JS;
            case 8400:
                return _u.R.Gb;
            case 8500:
                return _u.R.VB;
            case 8600:
                return _u.R.Hz;
            case 8601:
                return _u.R.QW;
            case 8610:
                return _u.R.Im;
            case 8700:
                return _u.R.Ei;
            case 8800:
                return _u.R.Jn;
            case 8900:
                return _u.R.Qb;
            case 8901:
                return _u.R.Hr;
            case 8902:
                return _u.R.Mf;
            case 3440:
                return _u.R.DZ;
            case 3450:
                return _u.R.Ka;
            case 5200:
                return _u.R.Gc;
            case 1300:
                return _u.R.Cw;
            case 1400:
                return _u.R.SF;
            case 1500:
                return _u.R.Np;
            case 2200:
                return _u.R.Cv;
            case 6200:
                return _u.R.Cv;
            case 1100:
                return _u.R.NK;
            case 1210:
                return _u.R.Fs;
            case 4600:
                return _u.R.NK;
            case 6210:
                return _u.R.Tk;
            case 6220:
                return _u.R.QP;
            case 6230:
                return _u.R.MK;
            case 4625:
                return _u.R.TF;
            case 974:
                return _u.R.l;
            case 975:
                return _u.R.Hv;
            case 976:
                return _u.R.Ri;
            case 977:
                return _u.R.Ma;
            case 978:
                return _u.R.Cr;
            case 979:
                return _u.R.CF;
            case 980:
                return _u.R.OQ;
            case 10301:
                return _u.R.ML;
            case 4800:
                return _u.R.Ry;
            case 4700:
                return _u.R.FA;
            case 4810:
                return _u.R.CV;
            case 4710:
                return _u.R.Uq;
            case 1600:
                return _u.R.OZ;
            case 1800:
                return _u.R.Oo;
            case 2e3:
                return _u.R.RD;
            case 1700:
                return _u.R.LP;
            case 1900:
                return _u.R.VK;
            case 2100:
                return _u.R.EQ;
            case 1200:
                return _u.R.LT;
            case 5800:
                return _u.R.KG;
            case 6700:
                return _u.R.NU;
            case 10206:
                return _u.R.OS;
            case 10207:
                return _u.R.MV;
            case 10211:
                return _u.R.Nw;
            case 10210:
                return _u.R.GW;
            case 2300:
                return _u.R.Ui;
            case 662:
                return _u.R.NF;
            case 663:
                return _u.R.DC;
            case 664:
                return _u.R.WD;
            case 13306:
                return _u.R.JG;
            case 665:
                return _u.R.RA;
            case 10212:
                return _u.R.Hw;
            case 10213:
                return _u.R.Ga;
            case 10214:
                return _u.R.LG;
            case 10215:
                return _u.R.JU;
            case 10302:
                return _u.R.In;
            case 10306:
                return _u.R.Vv;
            case 10308:
                return _u.R.Lg;
            case 49:
                return _u.R.LI;
            case 90:
                return _u.R.NM;
            case 91:
                return _u.R.d;
            case 92:
                return _u.R.JF;
            case 101:
                return _u.R.HU;
            case 102:
                return _u.R.OB;
            case 103:
                return _u.R.RH;
            case 104:
                return _u.R.QH;
            case 93:
                return _u.R.Ky;
            case 94:
                return _u.R.ER;
            case 98:
                return _u.R.Ub;
            case 100:
                return _u.R.HZ;
            case 99:
                return _u.R.HX;
            case 3100:
                return _u.R.Dq;
            case 3105:
                return _u.R.QX;
            case 3110:
                return _u.R.Nm;
            case 3115:
                return _u.R.CP;
            case 3120:
                return _u.R.Jl;
            case 3200:
                return _u.R.JL;
            case 3205:
                return _u.R.OA;
            case 3210:
                return _u.R.UK;
            case 3215:
                return _u.R.IN;
            case 3220:
                return _u.R.Pf;
            case 3250:
                return _u.R.DE;
            case 3255:
                return _u.R.Ob;
            case 3260:
                return _u.R.FS;
            case 801:
                return _u.R.Nh;
            case 802:
                return _u.R.EL;
            case 900:
                return _u.R.TL;
            case 1001:
                return _u.R.Tl;
            case 1002:
                return _u.R.Vh;
            case 1003:
                return _u.R.Kn;
            case 1004:
                return _u.R.Lp;
            case 650:
                return _u.R.r;
            case 655:
                return _u.R.QZ;
            case 601:
                return _u.R.L;
            case 602:
                return _u.R.Tt;
            case 596:
                return _u.R.CL;
            case 680:
                return _u.R.Ik;
            case 610:
                return _u.R.QR;
            case 620:
                return _u.R.Kr;
            case 611:
                return _u.R.Gy;
            case 621:
                return _u.R.CN;
            case 612:
                return _u.R.WP;
            case 630:
                return _u.R.Dk;
            case 640:
                return _u.R.Lc;
            case 9400:
                return _u.R.Tq;
            case 6701:
                return _u.R.TT;
            case 6702:
                return _u.R.Ex;
            case 75:
                return _u.R.EB;
            case 65:
                return _u.R.WA;
            case 97:
                return _u.R.PG;
            case 66:
                return _u.R.DN;
            case 67:
                return _u.R.Es;
            case 70:
                return _u.R.NT;
            case 106:
                return _u.R.FR;
            case 107:
                return _u.R.Gk;
            case 3480:
                return _u.R.CZ;
            case 30:
                return _u.R.TM;
            case 35:
                return _u.R.RL;
            case 108:
                return _u.R.Sw;
            case 109:
                return _u.R.Hm;
            case 110:
                return _u.R.Rb;
            case 111:
                return _u.R.VH;
            case 10020:
                return _u.R.Er;
            case 10030:
                return _u.R.OH;
            case 10040:
                return _u.R.Ls;
            case 10050:
                return _u.R.JD;
            case 10060:
                return _u.R.Ty;
            case 10070:
                return _u.R.Sm;
            case 10080:
                return _u.R.Va;
            case 10010:
                return _u.R.Qh;
            case 9500:
                return _u.R.Lb;
            case 3050:
                return _u.R.BR;
            case 9600:
                return _u.R.Ci;
            case 10090:
                return _u.R.Uf;
            case 10091:
                return _u.R.Lv;
            case 10092:
                return _u.R.Ey;
            case 88:
                return _u.R.Kb;
            case 10100:
                return _u.R.Ht;
            case 82:
                return _u.R.Rg;
            case 3010:
                return _u.R.MB;
            case 89:
                return _u.R.LX;
            case 74:
                return _u.R.GJ;
            case 76:
                return _u.R.HE;
            case 79:
                return _u.R.FH;
            case 77:
                return _u.R.Ev;
            case 78:
                return _u.R.MM;
            case 68:
                return _u.R.BY;
            case 983:
                return _u.R.Pb;
            case 81:
                return _u.R.GC;
            case 95:
                return _u.R.NP;
            case 703:
                return _u.R.Tf;
            case 704:
                return _u.R.Kd;
            case 706:
                return _u.R.BW;
            case 711:
                return _u.R.Vt;
            case 713:
                return _u.R.Sr;
            case 714:
                return _u.R.OL;
            case 716:
                return _u.R.Pl;
            case 717:
                return _u.R.LB;
            case 725:
                return _u.R.TN;
            case 726:
                return _u.R.Jk;
            case 727:
                return _u.R.DQ;
            case 784:
                return _u.R.Rr;
            case 732:
                return _u.R.BC;
            case 733:
                return _u.R.LF;
            case 734:
                return _u.R.h;
            case 735:
                return _u.R.Pe;
            case 736:
                return _u.R.KZ;
            case 737:
                return _u.R.Pc;
            case 738:
                return _u.R.TQ;
            case 785:
                return _u.R.TP;
            case 728:
                return _u.R.MR;
            case 739:
                return _u.R.RX;
            case 747:
                return _u.R.Vx;
            case 748:
                return _u.R.Di;
            case 749:
                return _u.R.RV;
            case 729:
                return _u.R.Pq;
            case 730:
                return _u.R.JM;
            case 741:
                return _u.R.Os;
            case 742:
                return _u.R.Ni;
            case 743:
                return _u.R.CO;
            case 744:
                return _u.R.Hh;
            case 745:
                return _u.R.Cd;
            case 746:
                return _u.R.Fq;
            case 750:
                return _u.R.HS;
            case 752:
                return _u.R.Eh;
            case 753:
                return _u.R.QQ;
            case 754:
                return _u.R.Dc;
            case 755:
                return _u.R.Tu;
            case 756:
                return _u.R.Dy;
            case 757:
                return _u.R.Vc;
            case 758:
                return _u.R.CQ;
            case 759:
                return _u.R.Gi;
            case 760:
                return _u.R.Fx;
            case 761:
                return _u.R.Ur;
            case 762:
                return _u.R.JN;
            case 763:
                return _u.R.Um;
            case 764:
                return _u.R.Ch;
            case 765:
                return _u.R.Jq;
            case 766:
                return _u.R.VA;
            case 767:
                return _u.R.Mi;
            case 768:
                return _u.R.PP;
            case 769:
                return _u.R.Ie;
            case 770:
                return _u.R.Vt;
            case 771:
                return _u.R.Vt;
            case 772:
                return _u.R.GY;
            case 781:
                return _u.R.II;
            case 782:
                return _a.m.s() ? _u.R.EZ : _u.R.TA;
            case 783:
                return _u.R.GZ;
            case 500:
                return _u.R.Qm;
            case 14e3:
                return _u.R.SL;
            case 10200:
                return _u.R.Nu;
            case 10201:
                return _u.R.HV;
            case 10202:
                return _u.R.Px;
            case 10203:
                return _u.R.Gt;
            case 10204:
                return _u.R.TJ;
            case 10205:
                return _u.R.Kw;
            case 11030:
                return _u.R.Jo;
            case 11031:
                return _u.R.Sk;
            case 11032:
                return _u.R.Bo;
            case 10216:
                return _u.R.Nq;
            case 10315:
                return _u.R.Cn;
            case 13001:
                return _u.R.Mp;
            case 13002:
                return _u.R.Ee;
            case 13003:
                return _u.R.Qa;
            case 13004:
                return _u.R.WK;
            case 13005:
                return _u.R.KM;
            case 13006:
                return _u.R.Pk;
            case 11001:
                return _u.R.TU;
            case 11002:
                return _u.R.Ms;
            case 11003:
                return _u.R.Ml;
            case 11004:
                return _u.R.LN;
            case 11005:
                return _u.R.Uj;
            case 11006:
                return _u.R.Td;
            case 11007:
                return _u.R.Sj;
            case 11008:
                return _u.R.Kv;
            case 11009:
                return _u.R.QF;
            case 11010:
                return _u.R.EU;
            case 11011:
                return _u.R.Jg;
            case 11012:
                return _u.R.Cl;
            case 11013:
                return _u.R.Cy;
            case 11014:
                return _u.R.OV;
            case 11015:
                return _u.R.Ut;
            case 11016:
                return _u.R.Tg;
            case 11017:
                return _u.R.WQ;
            case 11018:
                return _u.R.NO;
            case 11019:
                return _u.R.Dd;
            case 11029:
                return _u.R.Kj;
            case 11020:
                return _u.R.Sf;
            case 11021:
                return _u.R.OK;
            case 11022:
                return _u.R.Vu;
            case 11023:
                return _u.R.SA;
            case 11024:
                return _u.R.KR;
            case 11025:
                return _u.R.g;
            case 11026:
                return _u.R.Lm;
            case 11027:
                return _u.R.Bn;
            case 11028:
                return _u.R.FV;
            case 672:
                return _u.R.LD;
            case 71:
                return _u.R.LW;
            case 72:
                return _u.R.Lu;
            case 73:
                return _u.R.Gr;
            case 10300:
                return _u.R.JV;
            case 31:
                return _u.R.TG;
            case 10303:
                return _u.R.US;
            case 10304:
                return _u.R.SN;
            case 10309:
                return _u.R.Of;
            case 10305:
                return _u.R.IJ;
            case 10316:
                return _u.R.Qp;
            case 112:
                return _u.R.QD;
            case 113:
                return _u.R.Mm;
            case 114:
                return _u.R.Nd;
            case 115:
                return _u.R.PM;
            case 10311:
                return _u.R.DD;
            case 10312:
                return _u.R.Fv;
            case 10313:
                return _u.R.MN;
            case 10314:
                return _u.R.CS;
            case 105:
                return _u.R.RF;
            case 96:
                return _u.R.JI;
            case 3230:
                return _u.R.Pd;
            case 13320:
                return _u.R.KS;
            case 9300:
                return "{0}";
            case 981:
                return _u.R.Sd;
            case 982:
                return _u.R.Kg;
            case 13305:
                return _u.R.BP;
            default:
                return ""
        }
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_y.gd = function() {};
_y.gd.prototype = {
    a: function(n, t) {
        var i = n;
        return i < 499 ? 6 : i < 550 ? 5 : i < 1e3 ? 4 : i < 1005 ? 2 : i < 3e3 ? 3 : 1
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_y.ge = function() {};
_y.ge.prototype = {
    a: function(n, t) {
        if (!n) return !1;
        for (var f = t.split(" "), r = f, e = r.length, i = 0; i < e; ++i) {
            var u = r[i];
            if (u === n) return !0
        }
        return !1
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    }
};
_y.hI = function() {};
_y.hI.prototype = {
    a: function(n, t) {
        var i = n;
        switch (i) {
            case "IPM.Appointment":
                return _u.R.Fo;
            case "IPM.Note.Microsoft.Approval.Request":
                return _u.R.Mc;
            case "IPM.Note.Microsoft.Approval.Reply.Approve":
                return _u.R.Rt;
            case "IPM.Note.Microsoft.Approval.Reply.Reject":
                return _u.R.UX;
            case "IPM.Conflict.Folder":
                return _u.R.Ud;
            case "IPM.Conflict.Message":
                return _u.R.Mr;
            case "IPM.Contact":
                return _u.R.JT;
            case "REPORT.IPM.Note.DR":
                return _u.R.Na;
            case "REPORT.REPORT.IPM.Note.DR.NDR":
                return _u.R.Qu;
            case "IPM.NOTE.SECURE.SIGN":
                return _u.R.Ez;
            case "IPM.Note.Secure.Sign.Reply":
                return _u.R.QC;
            case "IPM.DistList":
                return _u.R.NQ;
            case "IPM.Document":
                return _u.R.Se;
            case "IPM.Document.Outlook.Template":
                return _u.R.UL;
            case "IPM.Note.Exchange.Security.Enrollment":
                return _u.R.NL;
            case "IPM.Note.Microsoft.Fax.CA":
                return _u.R.TE;
            case "IPM.Schedule.Meeting.Resp.Pos":
                return _u.R.CR;
            case "REPORT.IPM.Schedule.Meeting.Resp.Pos.NDR":
                return _u.R.Mk;
            case "IPM.Schedule.Meeting.Canceled":
                return _u.R.BD;
            case "REPORT.IPM.Schedule.Meeting.Canceled.NDR":
                return _u.R.IA;
            case "IPM.Schedule.Meeting.Resp.Neg":
                return _u.R.VT;
            case "REPORT.IPM.Schedule.Meeting.Resp.Neg.NDR":
                return _u.R.Uy;
            case "IPM.Schedule.Meeting.Request":
                return _u.R.WF;
            case "REPORT.IPM.Schedule.Meeting.Request.DR":
                return _u.R.EX;
            case "REPORT.IPM.Schedule.Meeting.Request.NDR":
                return _u.R.EH;
            case "REPORT.IPM.Schedule.Meeting.Request.IPNRN":
                return _u.R.MZ;
            case "IPM.Schedule.Meeting.Resp.Tent":
                return _u.R.HR;
            case "REPORT.IPM.Schedule.Meeting.Resp.Tent.NDR":
                return _u.R.OD;
            case "IPM.Note":
                return _u.R.EG;
            case "IPM.Microsoft.Answer":
                return _u.R.WJ;
            case "REPORT.IPM.Microsoft.Answer.NDR":
                return _u.R.Ou;
            case "IPM.Document.Microsoft Internet Mail Message":
                return _u.R.Gl;
            case "REPORT.IPM.Note.NDR":
                return _u.R.To;
            case "IPM.OCTEL.VOICE":
                return _u.R.Sa;
            case "REPORT.IPM.OCTEL.VOICE.NDR":
                return _u.R.Kz;
            case "IPM.Note.Rules.OofTemplate.Microsoft":
                return _u.R.RU;
            case "IPM.Outlook.Recall":
                return _u.R.KX;
            case "IPM.Post":
                return _u.R.Jb;
            case "REPORT.IPM.Note.IPNNRN":
                return _u.R.Pr;
            case "REPORT.REPORT.IPM.Note.IPNNRN.NDR":
                return _u.R.LU;
            case "REPORT.IPM.Note.IPNRN":
                return _u.R.JP;
            case "IPM.Recall":
                return _u.R.Q;
            case "IPM.Recall.Report.Failure":
                return _u.R.UF;
            case "IPM.Recall.Report.Success":
                return _u.R.Js;
            case "IPM.Sharing":
                return _u.R.D;
            case "IPM.Note.Mobile.SMS":
                return _u.R.O;
            case "IPM.Task":
                return _u.R.Ec;
            case "IPM.TaskRequest":
                return _u.R.Ef;
            case "IPM.TaskRequest.Accept":
                return _u.R.QG;
            case "REPORT.IPM.TaskRequest.Accept.NDR":
                return _u.R.ET;
            case "IPM.TaskRequest.Decline":
                return _u.R.WI;
            case "REPORT.IPM.TaskRequest.Decline.NDR":
                return _u.R.GA;
            case "REPORT.IPM.TaskRequest.NDR":
                return _u.R.RB;
            case "IPM.TaskRequest.Update":
                return _u.R.DR;
            case "REPORT.IPM.TaskRequest.Update.NDR":
                return _u.R.UP;
            case "IPM.Note.Microsoft.Voicemail.UM":
            case "IPM.Note.Microsoft.Voicemail.UM.CA":
            case "IPM.Note.Microsoft.Exchange.Voice.UM":
            case "IPM.Note.Microsoft.Exchange.Voice.UM.CA":
            case "IPM.Note.rpmsg.Microsoft.Voicemail.UM":
            case "IPM.Note.rpmsg.Microsoft.Voicemail.UM.CA":
                return _u.R.Jr;
            default:
                return _a.m.H(i) ? _u.R.I : _a.m.u(i) ? _u.R.T : _u.R.St
        }
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_y.eL = function() {
    _y.eL.initializeBase(this)
};
_y.eL.prototype = {
    a: function(n, t) {
        return this.f(n)
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_y.ke = function() {
    this.e = Function.createDelegate(this, this.c);
    this.d = new _j.J(this.e)
};
_y.ke.prototype = {
    d: null,
    f: function(n) {
        return this.d.e()[_h.y.toString(n)]
    },
    c: function() {
        var n = {};
        n[_h.y.toString(0)] = "";
        n[_h.y.toString(1)] = _u.R.He;
        n[_h.y.toString(2)] = _u.R.KY;
        n[_h.y.toString(3)] = _u.R.OU;
        n[_h.y.toString(4)] = _u.R.VC;
        n[_h.y.toString(5)] = _u.R.BM;
        n[_h.y.toString(6)] = _u.R.Cp;
        n[_h.y.toString(7)] = _u.R.JE;
        n[_h.y.toString(8)] = _u.R.Og;
        n[_h.y.toString(9)] = String.format(_u.R.VZ, 7);
        n[_h.y.toString(10)] = _u.R.Ok;
        n[_h.y.toString(11)] = _u.R.Rg;
        n[_h.y.toString(12)] = _u.R.Uh;
        n[_h.y.toString(13)] = _u.R.Qg;
        n[_h.y.toString(14)] = _u.R.DB;
        n[_h.y.toString(15)] = _bms.E.v;
        return n
    }
};
_y.dD = function() {};
_y.dD.prototype = {
    a: function(n, t) {
        if (!_j.M.isInstanceOfType(n)) throw Error.argumentType("value", Object.getType(n), _j.M, "Value must be an IObservableCollection");
        var i = n;
        if (!i || !i.b()) return "";
        var r = new Sys.StringBuilder;
        r.append(i.c(0));
        for (var u = 1; u < i.b(); u++) {
            r.append("; ");
            r.append(i.c(u))
        }
        return r.toString()
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_y.lK = function() {};
_y.lK.registerInterface("_y.lK");
_y.iS = function() {};
_y.iS.registerInterface("_y.iS");
_y.lL = function() {};
_y.lL.registerInterface("_y.lL");
_y.lM = function() {};
_y.lM.registerInterface("_y.lM");
_y.dt = function() {};
_y.dt.registerInterface("_y.dt");
_y.cV = function() {};
_y.cV.registerInterface("_y.cV");
_y.lN = function() {};
_y.lN.registerInterface("_y.lN");
_y.du = function() {};
_y.du.registerInterface("_y.du");
_y.lO = function() {};
_y.lO.registerInterface("_y.lO");
_y.he = function(n) {
    this.a = n
};
_y.he.prototype = {
    a: null
};
_y.fU = function() {};
_y.fU.registerInterface("_y.fU");
_y.hz = function(n, t) {
    this.a = n;
    this.i = t
};
_y.hz.prototype = {
    e: null,
    f: null,
    g: null,
    c: null,
    h: null,
    a: null,
    i: null,
    m: function() {
        for (var t = 0; t < this.i.length; t++) {
            var i = this.i[t];
            var n = i.bH.Value.toLocaleLowerCase();
            switch (i.bH.Scope) {
                case "SearchSender":
                    if (this.o(n)) {
                        this.b();
                        return !0
                    }
                    break;
                case "SearchRecipientsTo":
                    if (this.l(n)) {
                        this.b();
                        return !0
                    }
                    break;
                case "SearchRecipientsCc":
                    if (this.k(n)) {
                        this.b();
                        return !0
                    }
                    break;
                case "SearchRecipientsBcc":
                    if (this.j(n)) {
                        this.b();
                        return !0
                    }
                    break;
                case "SearchRecipients":
                    if (this.l(n) || this.k(n) || this.j(n)) {
                        this.b();
                        return !0
                    }
                    break;
                case "TextBody":
                    if (this.n(n)) {
                        this.b();
                        return !0
                    }
                    break;
                case "SearchAllIndexedProps":
                    if (this.o(n) || this.l(n) || this.k(n) || this.j(n) || this.n(n)) {
                        this.b();
                        return !0
                    }
                    break
            }
        }
        this.b();
        return !1
    },
    o: function(n) {
        this.f || (this.f = _h.cg.b(this.a).toLocaleLowerCase());
        return this.d(this.f, n)
    },
    l: function(n) {
        this.g || (this.g = this.s());
        return this.d(this.g, n)
    },
    k: function(n) {
        this.c || (this.c = this.q());
        return this.d(this.c, n)
    },
    j: function(n) {
        this.h || (this.h = this.p());
        return this.d(this.h, n)
    },
    n: function(n) {
        this.e || (this.e = this.r());
        return this.d(this.e, n)
    },
    d: function(n, t) {
        return n.indexOf(t) >= 0
    },
    r: function() {
        var n = this.a;
        var r = "";
        var i = "";
        n && n.cf() && (i = n.cf().bH.Value);
        var t = document.createElement("div");
        t.innerHTML = i;
        r = _j.k.t(t);
        return r.toLocaleLowerCase()
    },
    s: function() {
        if (this.a && this.a.bH.DisplayTo) return this.a.bH.DisplayTo.toLocaleLowerCase();
        var n = null;
        var t = "";
        _g.i.isInstanceOfType(this.a) && (n = this.a);
        if (n && n.q()) {
            var u = n.q();
            var r = u.f;
            var i = new _y.dc;
            t = i.a(r, !1).split("; ").toString()
        }
        return t.toLocaleLowerCase()
    },
    q: function() {
        var n = null;
        var t = "";
        _g.i.isInstanceOfType(this.a) && (n = this.a);
        if (n && n.A()) {
            var r = n.A().f;
            var i = new _y.dc;
            t = i.a(r, !1).split("; ").toString()
        }
        return t.toLocaleLowerCase()
    },
    p: function() {
        var n = null;
        var t = "";
        _g.i.isInstanceOfType(this.a) && (n = this.a);
        if (n && n.E()) {
            var r = n.E().f;
            var i = new _y.dc;
            t = i.a(r, !1).split("; ").toString()
        }
        return t.toLocaleLowerCase()
    },
    b: function() {
        this.e = null;
        this.f = null;
        this.g = null;
        this.c = null
    }
};
_y.eD = function() {};
_y.eD.registerInterface("_y.eD");
var IGroupCardMemberPickerViewModel = function() {};
IGroupCardMemberPickerViewModel.registerInterface("IGroupCardMemberPickerViewModel");
_y.fV = function() {};
_y.fV.registerInterface("_y.fV");
var IRichPeoplePickerViewModel = function() {};
IRichPeoplePickerViewModel.registerInterface("IRichPeoplePickerViewModel");
_y.cx = function() {};
_y.cx.registerInterface("_y.cx");
_y.dA = function() {};
_y.dA.registerInterface("_y.dA");
var $j = function() {};
$j.registerInterface("$j");
var IForgottenAttachmentDetector = function() {};
IForgottenAttachmentDetector.registerInterface("IForgottenAttachmentDetector");
_y.dW = function() {};
_y.dW.registerInterface("_y.dW");
var IForgottenAttachmentImplementation = function() {};
IForgottenAttachmentImplementation.registerInterface("IForgottenAttachmentImplementation");
_y.InfoBarMessageType = function() {};
_y.InfoBarMessageType.prototype = {
    info: 1,
    draft: 2,
    calendarReadingInfo: 3,
    warning: 4,
    policyTips: 5,
    error: 6,
    safetyGreen: 20,
    safetyYellow: 21,
    safetyRed: 22
};
_y.InfoBarMessageType.registerEnum("_y.InfoBarMessageType", !1);
_y.dZ = function() {};
_y.dZ.prototype = {
    a: function(n, t) {
        if (!n) return !1;
        for (var r = _g.b.a.idToName(n), i = 0; i < _y.dZ.a.length; i++)
            if (_y.dZ.a[i] === r) return !0;
        return !1
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    }
};
_y.er = function() {
    _y.er.initializeBase(this)
};
_y.er.prototype = {
    e: "",
    d: "",
    f: !1,
    c: function() {
        return null
    },
    h: function(n) {
        if (this.e !== n) {
            this.e = n;
            this.eJ("searchKeyword")
        }
        return n
    },
    b: function() {
        return this.d
    },
    g: function(n) {
        if (this.d !== n) {
            this.d = n;
            this.eJ("searchString")
        }
        return n
    },
    j: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.eJ("IsUserInput")
        }
        return n
    },
    a: function() {
        return this.i() + this.d
    },
    i: function() {
        var n = "";
        if (_j.h.b(this.e)) return n;
        this.e === _u.R.KC ? n = "From:" : this.e === _u.R.Vp && (n = "To:");
        return n
    }
};
_y.eF.registerClass("_y.eF");
_y.dB.registerClass("_y.dB");
_y.jI.registerClass("_y.jI");
_y.hF.registerClass("_y.hF", null, IBposUrlProvider);
_y.eG.registerClass("_y.eG");
_y.bg.registerClass("_y.bg", _a.bw);
_y.ha.registerClass("_y.ha");
_y.eb.registerClass("_y.eb");
_y.fz.registerClass("_y.fz");
_y.bO.registerClass("_y.bO");
_y.fE.registerClass("_y.fE");
_y.hb.registerClass("_y.hb");
_y.bo.registerClass("_y.bo");
_y.bM.registerClass("_y.bM");
_y.dg.registerClass("_y.dg");
_y.bh.registerClass("_y.bh", _a.gd, _j.bs, Sys.IDisposable);
_y.jp.registerClass("_y.jp");
_y.fu.registerClass("_y.fu");
_y.fx.registerClass("_y.fx");
_y.de.registerClass("_y.de", _a.bw);
_y.jl.registerClass("_y.jl", _y.de);
_y.jE.registerClass("_y.jE", _a.bw, _y.hY, _a.kW, _j.bs, Sys.IDisposable);
_y.lH.registerClass("_y.lH", _j.S);
_y.jo.registerClass("_y.jo");
_y.di.registerClass("_y.di");
_y.dT.registerClass("_y.dT");
_y.bW.registerClass("_y.bW");
_y.ev.registerClass("_y.ev");
_y.hc.registerClass("_y.hc");
_y.fZ.registerClass("_y.fZ");
_y.fY.registerClass("_y.fY", _bc.b);
_y.kb.registerClass("_y.kb", _a.bw);
_y.h.registerClass("_y.h", _y.kb);
_y.bZ.registerClass("_y.bZ");
_y.i.registerClass("_y.i", _y.kb);
_y.hD.registerClass("_y.hD", _y.h);
_y.k.registerClass("_y.k", _a.bw);
_y.bc.registerClass("_y.bc", _a.ec, _y.lc);
_y.da.registerClass("_y.da", _fm.e);
_y.ga.registerClass("_y.ga", null, Sys.IDisposable);
_y.dC.registerClass("_y.dC", _bc.n);
_y.kc.registerClass("_y.kc", _a.bw, _bc.a);
_y.A.registerClass("_y.A", _y.kc);
_y.eH.registerClass("_y.eH");
_y.eI.registerClass("_y.eI");
_y.eM.registerClass("_y.eM");
_y.ck.registerClass("_y.ck");
_y.ec.registerClass("_y.ec");
_y.gO.registerClass("_y.gO");
_y.bk.registerClass("_y.bk");
_y.cH.registerClass("_y.cH");
_y.cf.registerClass("_y.cf");
_y.cI.registerClass("_y.cI");
_y.bl.registerClass("_y.bl");
_y.bP.registerClass("_y.bP");
_y.dU.registerClass("_y.dU");
_y.fG.registerClass("_y.fG");
_y.dE.registerClass("_y.dE", _bc.b);
_y.dF.registerClass("_y.dF");
_y.kg.registerClass("_y.kg", _a.bw, _fm.E);
_y.bu.registerClass("_y.bu", _y.kg);
_y.v.registerClass("_y.v", _y.kg);
_y.ew.registerClass("_y.ew", null, _y.ig, _j.L);
_y.bm.registerClass("_y.bm", _y.kg);
_y.ds.registerClass("_y.ds", null, _y.ig, _j.L);
_y.S.registerClass("_y.S", null, _j.L);
_y.ll.registerClass("_y.ll", _a.bw);
_y.ea.registerClass("_y.ea");
_y.jL.registerClass("_y.jL", _a.bt);
_y.fy.registerClass("_y.fy", _a.bw);
_y.Z.registerClass("_y.Z");
_y.ba.registerClass("_y.ba", null, _a.kK);
_y.bt.registerClass("_y.bt", _y.kc);
_y.fA.registerClass("_y.fA", _a.bw, _y.br);
_y.bj.registerClass("_y.bj", _a.bw);
_y.cr.registerClass("_y.cr");
_y.fB.registerClass("_y.fB");
_y.p.registerClass("_y.p");
_y.J.registerClass("_y.J", _a.bw, _y.br);
_y.gS.registerClass("_y.gS");
_y.gY.registerClass("_y.gY");
_y.R.registerClass("_y.R", _fm.j);
_y.R.g.registerClass("_y.R.g");
_y.gZ.registerClass("_y.gZ");
_y.lJ.registerClass("_y.lJ", _a.bw, _y.br, _y.C, _bc.w, _a.kW, _j.bs, Sys.IDisposable, _y.fg);
_y.c.registerClass("_y.c", _a.bw, _y.a, _ff.a, _ff.o);
_y.cU.registerClass("_y.cU", _y.kc);
_y.fD.registerClass("_y.fD");
_y.dr.registerClass("_y.dr", _a.bw);
_y.dV.registerClass("_y.dV", _a.bw);
_y.bs.registerClass("_y.bs", null, _y.im);
_y.iM.registerClass("_y.iM", null, IMailComposeLauncher);
_y.W.registerClass("_y.W", _a.bw);
_y.es.registerClass("_y.es");
_y.jG.registerClass("_y.jG");
_y.jH.registerClass("_y.jH");
_y.bf.registerClass("_y.bf");
_y.fw.registerClass("_y.fw");
_y.cZ.registerClass("_y.cZ", _bc.n);
_y.eK.registerClass("_y.eK");
_y.kf.registerClass("_y.kf", _a.bw, IFolderTreeViewModel);
_y.dd.registerClass("_y.dd", _y.kf);
_y.bI.registerClass("_y.bI", _a.bw, _y.lB);
_y.bR.registerClass("_y.bR", _y.bI);
_y.T.registerClass("_y.T", _y.kf);
_y.bH.registerClass("_y.bH", _y.T);
_y.df.registerClass("_y.df", _bc.n);
_y.cl.registerClass("_y.cl", _y.lJ);
_y.eu.registerClass("_y.eu", _a.bw);
_y.fr.registerClass("_y.fr");
_y.n.registerClass("_y.n", _a.ec, _y.fb, _bc.bT);
_y.x.registerClass("_y.x", _y.bI);
_y.Y.registerClass("_y.Y", _y.kf);
_y.N.registerClass("_y.N", _a.bw, _y.fc, _fm.m);
_y.w.registerClass("_y.w", _y.lJ, _y.gI);
_y.lG.registerClass("_y.lG", _j.S, _y.lr, _j.bs, Sys.IDisposable);
_y.ce.registerClass("_y.ce", _y.lG);
_y.lI.registerClass("_y.lI", _h.fN);
_y.gR.registerClass("_y.gR", _a.bw);
_y.gQ.registerClass("_y.gQ", _a.bw);
_y.gP.registerClass("_y.gP", _bc.n);
_y.s.registerClass("_y.s", _y.J);
_y.dn.registerClass("_y.dn", _y.bR);
_y.dp.registerClass("_y.dp");
_y.gU.registerClass("_y.gU");
_y.q.registerClass("_y.q", _j.S);
_y.jB.registerClass("_y.jB", null, IItemReadingPaneContextFactory);
_y.dS.registerClass("_y.dS", _a.bw, _y.im);
_y.O.registerClass("_y.O", _y.dS);
_y.D.registerClass("_y.D", _y.lJ, _y.lq);
_y.bX.registerClass("_y.bX");
_y.ex.registerClass("_y.ex", _y.ll);
_y.jD.registerClass("_y.jD");
_y.P.registerClass("_y.P");
_y.iO.registerClass("_y.iO", _a.bw, _bc.j, _bc.s, _bc.w, _a.kW, _j.bs, Sys.IDisposable);
_y.G.registerClass("_y.G");
_y.gW.registerClass("_y.gW");
_y.bE.registerClass("_y.bE", null, _a.eX);
_y.fC.registerClass("_y.fC", null, _a.eX);
_y.cs.registerClass("_y.cs", null, _y.L, _h.dG);
_y.iP.registerClass("_y.iP");
_y.jJ.registerClass("_y.jJ");
_y.et.registerClass("_y.et", _g.kD, _g.kS, _g.kA);
_y.iQ.registerClass("_y.iQ", null, _y.iA);
_y.bN.registerClass("_y.bN", _a.bw);
_y.gV.registerClass("_y.gV");
_y.gX.registerClass("_y.gX");
_y.hd.registerClass("_y.hd", null, _a.de);
_y.bF.registerClass("_y.bF", _a.bw);
BootViewModelsComponent.registerClass("BootViewModelsComponent", null, _a.kj, _j.ce);
_y.bd.registerClass("_y.bd");
_y.ch.registerClass("_y.ch");
_y.hf.registerClass("_y.hf");
_y.cu.registerClass("_y.cu", _y.hf);
_y.y.registerClass("_y.y");
_y.o.registerClass("_y.o", _j.S);
_y.fM.registerClass("_y.fM");
_y.H.registerClass("_y.H", _a.bw);
_y.fN.registerClass("_y.fN", _a.bw, IOwaUserConfigurationUpdatedViewModel);
_y.j.registerClass("_y.j", _a.bw, _y.br);
_y.fI.registerClass("_y.fI");
_y.jc.registerClass("_y.jc", _y.hf);
_y.cg.registerClass("_y.cg", _a.bw);
_y.d.registerClass("_y.d", _y.fA, _y.C, _bc.w, _a.kW, _j.bs, Sys.IDisposable, _y.fg, _y.lj, _y.dv);
_y.E.registerClass("_y.E", _y.d);
_y.ez.registerClass("_y.ez", _y.d);
_y.dw.registerClass("_y.dw", _y.j);
_y.bv.registerClass("_y.bv");
_y.cK.registerClass("_y.cK");
_y.dy.registerClass("_y.dy");
_y.cL.registerClass("_y.cL");
_y.jn.registerClass("_y.jn", null, _j.bP);
_y.jm.registerClass("_y.jm", null, _j.bP);
_y.dc.registerClass("_y.dc", null, _j.bP);
_y.gc.registerClass("_y.gc", null, _j.bP);
_y.ge.registerClass("_y.ge", null, _j.bP);
_y.ke.registerClass("_y.ke");
_y.eL.registerClass("_y.eL", _y.ke, _j.bP);
_y.dD.registerClass("_y.dD", null, _j.bP);
_y.he.registerClass("_y.he");
_y.dZ.registerClass("_y.dZ", null, _j.bP);
_y.er.registerClass("_y.er", _a.bw, _y.iE);
_y.bg.a = null;
_y.bg.b = !1;
_y.bb.c = null;
_y.bh.a = _a.a.D;
_y.cz.b = 3e3;
_y.cz.d = 5e3;
_y.cz.c = 8e3;
_y.bZ.b = 0;
_y.k.d = null;
_y.bc.a = new _a.f("Attachments", _j.l, _y.bc);
_y.bc.$$cctor();
_y.v.b = null;
_y.v.c = null;
_y.v.d = !1;
_y.J.a = "GroupsNavigationViewModel";
_y.J.c = "Width";
_y.J.b = _a.a.p;
_y.R.b = _a.a.fx;
_y.R.a = null;
_y.c.a = null;
_y.hJ.a = 1e6;
_y.W.a = _a.a.a;
_y.cZ.a = _a.a.p;
_y.F.c = "Today";
_y.bI.a = ["drafts", "junkemail", "notes", "outbox"];
_y.n.i = new _a.f("Item", _g.f, _y.n);
_y.n.f = new _a.f("IsPrintView", Boolean, _y.n);
_y.n.d = new _a.f("IsDiscovery", Boolean, _y.n);
_y.n.e = new _a.f("IsInSharedFolder", Boolean, _y.n);
_y.n.a = new _a.f("FolderPermission", _g.v, _y.n);
_y.n.h = new _a.f("IsUnderMsgRoot", Boolean, _y.n);
_y.n.j = new _a.f("MasterCategoryList", _g.bc, _y.n);
_y.n.c = new _a.f("IsArchive", Boolean, _y.n);
_y.n.m = new _a.f("ViewFilter", String, _y.n);
_y.n.g = new _a.f("IsSyncDataAcrossWindows", Boolean, _y.n, !1);
_y.n.k = new _a.f("ParentFolderNameToPost", String, _y.n);
_y.n.l = new _a.f("PopoutPerfContext", _a.bN, _y.n);
_y.n.b = new _a.f("GroupSmtpAddress", String, _y.n);
_y.x.b = ["journal", "outbox", "syncissues"];
_y.x.c = ["inbox", "drafts", "sentitems", "deleteditems"];
_y.N.a = "Text";
_y.N.b = "HideText";
_y.N.c = "ShowRollup";
_y.w.b = 210;
_y.w.d = 260;
_y.w.e = 244;
_y.ce.a = 5;
_y.u.n = _a.a.dH;
_y.u.l = new RegExp("(\\n|\\r\\n)", "g");
_y.u.k = new RegExp("([\\w-\\.\\+]+@[\\w-\\.]+)", "gi");
_y.u.i = "to";
_y.u.e = "cc";
_y.u.c = "bcc";
_y.u.d = "body";
_y.u.h = "subject";
_y.u.j = "totype";
_y.s.a = _a.a.v;
_y.q.a = _a.a.eY;
_y.D.b = 100;
_y.ex.a = "VotingOptionsView";
_y.bE.b = _a.a.z;
_y.bE.a = _y.bE.c();
_y.cs.c = _a.a.z;
_y.cs.a = !1;
_y.et.b = JsonParser.serialize(null);
_y.bN.c = new _a.f("PopupVisible", Boolean, _y.bN, !0);
_y.bN.a = new _a.f("PopupAnchorX", Number, _y.bN);
_y.bN.b = new _a.f("PopupAnchorY", Number, _y.bN);
BootViewModelsComponent.$$cctor();
_y.hf.a = _a.a.h;
_y.cu.a = null;
_y.cJ.a = null;
_y.o.c = _a.a.bv;
_y.H.c = _a.a.g;
_y.H.a = "BposNavBarDataSuccess";
_y.H.b = "BposNavBarDataFailed";
_y.cg.a = _a.a.bA;
_y.E.b = _a.a.p;
_y.d.j = new _a.bK("highlight");
_y.d.a = _a.a.p;
_y.d.i = "GlobalReadingPanePosition";
_y.d.e = "HideUpNextControl";
_y.d.n = "UpNextViewModel";
_y.d.m = "AlternateMailListViewModel";
_y.d.f = null;
_y.d.g = new _a.f("FolderPickerDialog", _y.df, _y.d);
_y.d.o = new _a.bO("UiCmd", "ur", 16, !1);
_y.dZ.a = ["outbox"];
Type.registerNamespace("_b");
_b.bd = function(n) {
    this.a = n
};
_b.bd.b = function() {
    return $
};
_b.bd.a = function() {
    return function(n, t, i, r, u) {
        var o = $(n);
        var e = function(n) {
            i(new _a.fo(n))
        };
        var f = r && !r.startsWith(".") ? "." + r : r;
        switch (t) {
            case "mousedown":
                o.touch(e, !1, f);
                break;
            case "mouseup":
                o.touchEnd(e, !1, f);
                break;
            case "mousemove":
                o.touchMove(e, !1, f);
                break;
            case "contextmenu":
                o.rightClick(e, !1, f);
                break;
            case "click":
                o.click(e, !1, f);
                break;
            default:
                o.bind(t + (f || ""), e);
                break
        }
    }
};
_b.bd.c = function() {
    return function(n, t, i) {
        var u = $(n);
        var r = i && !i.startsWith(".") ? "." + i : i;
        switch (t) {
            case "mousedown":
                u.unTouch(r);
                break;
            case "mouseup":
                u.unTouchEnd(r);
                break;
            case "mousemove":
                u.unTouchMove(r);
                break;
            case "contextmenu":
                u.unRightClick(r);
                break;
            case "click":
                u.unClick(r);
                break;
            default:
                u.unbind(t + (r || ""));
                break
        }
    }
};
_b.bd.prototype = {
    a: 0,
    b: function() {
        var n = "";
        switch (this.a) {
            case "Mouse":
                n = "MOUSE";
                break;
            case "TouchNarrow":
            case "TouchWide":
                n = "TOUCH";
                break
        }
        LoadjQueryObjectOwa(jQuery, n)
    }
};
_b.h = function() {};
_b.h.w = function(n) {
    if (!_b.h.r) {
        _b.h.r = !0;
        var t = (n === "TouchNarrow" || n === "TouchWide") && ("ontouchstart" in window || window.PointerEvent || window.MSPointerEvent);
        if (t) {
            delete Hammer.defaults.cssProps.userSelect;
            var i = new Hammer(document.body, {
                domEvents: !0,
                touchAction: "auto"
            });
            if ("ontouchstart" in window) {
                _b.h.f = "touchstart";
                _b.h.i = "touchmove";
                _b.h.d = "touchend touchcancel"
            } else if (window.PointerEvent) {
                _b.h.f = "pointerdown";
                _b.h.i = "pointermove";
                _b.h.d = "pointerup pointerout"
            } else if (window.MSPointerEvent) {
                _b.h.f = "MSPointerDown";
                _b.h.i = "MSPointerMove";
                _b.h.d = "MSPointerUp MSPointerOut"
            } else t = !1
        }
        _b.h.j = t
    }
};
_b.h.v = function(n, t, i, r, u) {
    switch (t) {
        case "click":
            if (_b.h.j) {
                _b.h.t(n, "tap", i, r);
                _b.h.x(n, r)
            } else _j.k.b(n, "click", i, r);
            break;
        case "contextmenu":
            _b.h.j ? _b.h.t(n, "press", i, r) : _j.k.b(n, "contextmenu", i, r);
            break;
        case "mousedown":
            _j.k.b(n, _b.h.f, _b.h.h(n, i, !1), r, u);
            break;
        case "mousemove":
            _j.k.b(n, _b.h.i, _b.h.m(n, i), r, u);
            break;
        case "mouseup":
            _j.k.b(n, _b.h.d, _b.h.l(n, i), r, u);
            break;
        default:
            _j.k.b(n, t, i, r, u);
            break
    }
};
_b.h.z = function(n, t, i) {
    switch (t) {
        case "click":
            if (_b.h.j) {
                _j.k.c(n, "tap", i);
                _j.k.c(n, _b.h.d, i)
            } else _j.k.c(n, "click", i);
            break;
        case "contextmenu":
            _b.h.j ? _j.k.c(n, "press", i) : _j.k.c(n, "contextmenu", i);
            break;
        case "mousedown":
            _j.k.c(n, _b.h.f, i);
            break;
        case "mousemove":
            _j.k.c(n, _b.h.i, i);
            break;
        case "mouseup":
            _j.k.c(n, _b.h.d, i);
            break;
        default:
            _j.k.c(n, t, i);
            break
    }
};
_b.h.p = function(n, t, i) {
    _j.i.d(n, "click", t, i, !1)
};
_b.h.s = function(n, t) {
    _j.i.e(n, "click", t)
};
_b.h.q = function(n, t, i) {
    _j.i.d(n, "contextmenu", t, i, !1)
};
_b.h.n = function(n, t) {
    _j.i.e(n, "contextmenu", t)
};
_b.h.a = function(n, t, i, r, u) {
    _j.i.d(n, _b.h.f, _b.h.h(n, t, r), i, u)
};
_b.h.g = function(n, t) {
    _j.i.e(n, "mousedown", t)
};
_b.h.e = function(n, t, i) {
    _j.i.d(n, "mousemove", t, i, !1)
};
_b.h.o = function(n, t) {
    _j.i.e(n, "mousemove", t)
};
_b.h.b = function(n, t, i) {
    _j.i.d(n, "mouseup", t, i, !1)
};
_b.h.k = function(n, t) {
    _j.i.e(n, "mouseup", t)
};
_b.h.c = function(n, t) {
    _b.h.o(n, t);
    _b.h.k(n, t)
};
_b.h.h = function(n, t, i) {
    return i ? t : function(i) {
        _j.k.m(n, "axisLock", !0);
        _j.k.m(n, "axisX", i.e());
        _j.k.m(n, "axisY", i.f());
        t(i)
    }
};
_b.h.m = function(n, t) {
    return function(i) {
        _j.k.n(n, "axisLock") || t(i);
        var e = _j.k.n(n, "axisX");
        var f = _j.k.n(n, "axisY");
        if (!_j.k.n(n, "axisDirection")) {
            var r = Math.abs(i.e() - e);
            var u = Math.abs(i.f() - f);
            u > r && u > 6 ? _j.k.m(n, "axisDirection", "Y") : r > 6 && _j.k.m(n, "axisDirection", "X")
        }
        if (_j.k.n(n, "axisDirection")) {
            _b.h.u(n, i);
            t(i)
        }
    }
};
_b.h.l = function(n, t) {
    return function(i) {
        if (_j.k.n(n, "axisLock")) {
            _b.h.u(n, i);
            var r = _j.k.x(n);
            delete r.axisLock;
            delete r.axisX;
            delete r.axisY;
            delete r.axisDirection
        }
        t(i)
    }
};
_b.h.t = function(n, t, i, r) {
    var u = function(n) {
        i(new _a.iL(n.s))
    };
    _j.k.b(n, t, u, r)
};
_b.h.u = function(n, t) {
    var i = _j.k.n(n, "axisDirection") === "X";
    var u = i ? t.e() : _j.k.n(n, "axisX");
    var r = i ? _j.k.n(n, "axisY") : t.f();
    t.z(u, r)
};
_b.h.x = function(n, t) {
    _j.k.b(n, _b.h.d, function(n) {
        _b.h.y(n) && n.c()
    }, t)
};
_b.h.y = function(n) {
    var r = !0;
    try {
        r = window.getSelection().isCollapsed
    } catch (f) {}
    if (!r || n.b().nodeName === "INPUT" || n.b().nodeName === "TEXTAREA") return !1;
    for (var u = !1, t = n.b(), i = 0; i < 5; i++) {
        if (!t) break;
        if (t.nodeName === "A") {
            u = !0;
            break
        }
        t = t.parentNode
    }
    return !u
};
_b.be = function(n, t) {
    this.c = n;
    this.b = t
};
_b.be.prototype = {
    c: 0,
    b: null,
    a: function() {
        var n = !!this.b;
        _j.i.g = n ? _b.bd.b() : _j.x.b;
        _j.i.d = n ? _b.bd.a() : _b.h.v;
        _j.i.e = n ? _b.bd.c() : _b.h.z;
        n ? this.b.b() : _b.h.w(this.c)
    }
};
_b.ck = function() {};
_b.ck.registerInterface("_b.ck");
_b.cn = function() {};
_b.cn.registerInterface("_b.cn");
_b.co = function() {};
_b.co.registerInterface("_b.co");
_b.cq = function() {};
_b.cq.registerInterface("_b.cq");
_b.cw = function() {};
_b.cw.registerInterface("_b.cw");
_b.br = function() {};
_b.br.registerInterface("_b.br");
_b.cl = function() {};
_b.cl.registerInterface("_b.cl");
_b.cm = function() {};
_b.cm.registerInterface("_b.cm");
_b.cp = function() {};
_b.cp.registerInterface("_b.cp");
_b.cr = function() {};
_b.cr.registerInterface("_b.cr");
_b.I = function() {};
_b.I.registerInterface("_b.I");
_b.cs = function() {};
_b.cs.registerInterface("_b.cs");
_b.cx = function() {};
_b.cx.registerInterface("_b.cx");
_b.z = function() {};
_b.z.registerInterface("_b.z");
_b.ct = function() {};
_b.ct.registerInterface("_b.ct");
_b.cv = function() {};
_b.cv.registerInterface("_b.cv");
_b.bP = function() {};
_b.bP.registerInterface("_b.bP");
_b.ch = function() {};
_b.ch.prototype = {
    none: 0,
    top: 1,
    bottom: 2,
    centerTop: 3,
    centerBottom: 4
};
_b.ch.registerEnum("_b.ch", !1);
_b.cu = function() {};
_b.cu.registerInterface("_b.cu");
_b.i = function() {};
_b.i.registerInterface("_b.i");
_b.t = function(n, t, i) {
    _b.t.initializeBase(this, [n, t, i])
};
_b.t.prototype = {
    f: null,
    v: !1,
    E: !0,
    g: "activityIndicatorOverlay",
    e: function(n) {
        if (this.v !== n) {
            this.v = n;
            this.by("HideBusyText")
        }
        return n
    },
    u: function() {
        this.f || this.be();
        return this.f
    },
    G: function() {
        _j.c.prototype.G.call(this);
        this.f && this.f.bm()
    },
    M: function() {
        _j.c.prototype.M.call(this);
        this.f && this.f.bx()
    },
    bz: function() {
        this.f && this.f.dispose();
        _fce.bi.prototype.bz.call(this)
    },
    m: function() {
        _fce.bi.prototype.m.call(this);
        this.S().p(!0);
        if (this.z.contains(document.activeElement)) {
            document.activeElement.blur();
            document.selection && document.selection.clear()
        }
        this.u().K(!1)
    },
    q: function() {
        _fce.bi.prototype.q.call(this);
        this.S().p(!1);
        this.u().K(!0)
    },
    be: function() {
        var t = document.createElement("div");
        this.z.appendChild(t);
        var n = t.style;
        n.position = "absolute";
        n.top = "0";
        n.right = "0";
        n.bottom = "0";
        n.left = "0";
        this.f = new _j.c(t);
        this.f.bH(this.g);
        this.f.ba(this);
        this.f.y("ActivityIndicatorPanelView");
        this.f.D(9);
        this.Z() && this.f.bm()
    }
};
_b.S = function(n) {
    _b.S.initializeBase(this, [n])
};
_b.bf = function(n, t, i, r) {
    _b.bf.initializeBase(this, [
        []
    ]);
    this.b = r;
    this.x = _b.bf.a;
    this.a = n;
    this.e = t;
    this.d = i;
    this.f()
};
_b.bf.prototype = {
    d: null,
    b: null,
    a: null,
    e: null,
    c: function(n) {
        for (var r = this.p.x.length, t = 0; t < r; t++) {
            var i = this.p.x[t];
            i.rpcl("IsChecked", this.b);
            i.i(this.a[t] === i.m.toString());
            i.apcl("IsChecked", this.b)
        }
    },
    bz: function() {
        if (this.p)
            for (var n = 0; n < this.p.x.length; ++n) {
                var t = this.p.x[n];
                t.rpcl("IsChecked", this.b)
            }
        _j.S.prototype.bz.call(this)
    },
    f: function() {
        for (var n = 0; n < this.a.length; n++) {
            var i = n.toString();
            var r = this;
            var t = new _fm.g(this.e[n], null, new _j.g(function() {}, _a.a.O), !1, !0, null, this.d, this.a[n]);
            this.p.a(t)
        }
    }
};
_b.bu = function(n) {
    _b.bu.initializeBase(this, [n])
};
_b.bu.a = function(n, t, i) {
    _j.k.a(n, t, i);
    if (i === "#FFFFFF") {
        n.style.borderColor = "#bebebe";
        n.style.borderStyle = "solid";
        n.style.borderWidth = "2px"
    }
};
_b.bu.prototype = {
    a: null,
    c: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.by("ItemColor");
            n && this.b()
        }
        return n
    },
    b: function() {
        _b.bu.a(this.z, "background-color", this.a)
    }
};
_b.n = function(n, t, i, r, u) {
    _b.n.initializeBase(this, [n, i, r, t, u]);
    this.y("ConfirmDialog");
    this.g(!0);
    this.i = 2;
    this.e = !1;
    if (this.bY() === "TouchNarrow") {
        var f = new _fce.I(this.r, u);
        f.a(0);
        this.d(f)
    } else this.d(new _fce.r(this.r, u));
    this.S().a(2);
    this.S().e(_j.D.a());
    this.S().i(_j.D.a())
};
_b.n.prototype = {
    n: null,
    w: null,
    bc: null,
    o: null,
    l: function(n) {
        if (this.w !== n) {
            this.w = n;
            this.by("DialogTitle")
        }
        return n
    },
    m: function(n) {
        if (this.bc !== n) {
            this.bc = n;
            this.by("Message")
        }
        return n
    },
    b: function(n) {
        if (this.o !== n) {
            this.o = n;
            this.by("ButtonDataList")
        }
        return n
    },
    H: function() {
        _fce.l.prototype.H.call(this);
        this.n = this.B ? this.B.a("ButtonList") : null
    },
    M: function() {
        _fce.l.prototype.M.call(this);
        this.n && this.n.bx()
    },
    bz: function() {
        if (this.n) {
            this.n.dispose();
            this.n = null
        }
        _fce.l.prototype.bz.call(this)
    },
    G: function() {
        _fce.l.prototype.G.call(this);
        if (this.n && this.c()) {
            var n = this.n.z.querySelector("button");
            n && n.focus()
        }
    },
    E: function(n) {
        n.a() === 27 && this.bu(n);
        n.a() === 9 && this.i === 2 && this.dm(n)
    }
};
_b.O = function(n, t, i, r, u) {
    _b.O.initializeBase(this, [n, t, i, r, u]);
    this.S().a(24);
    this.f(!0);
    this.e = !0;
    this.ci(!0);
    this.cc = !0;
    this.h(!1)
};
_b.O.prototype = {
    o: null,
    m: null,
    l: null,
    b: null,
    n: null,
    bc: function(n) {
        this.o = n;
        this.b && this.b.y(this.o);
        return n
    },
    w: function() {
        return this.m ? this.m : this.V()
    },
    bl: function(n) {
        this.m = n;
        this.b && this.b.ba(this.m);
        return n
    },
    be: function() {
        return !_a.o.a().N
    },
    H: function() {
        _fce.l.prototype.H.call(this);
        if (this.B) {
            this.l = this.B.a("Notch");
            this.b = this.B.a("PeekContent");
            this.b.y(this.o);
            this.cm && this.l.bo(this.dF());
            this.bo("peekPopup")
        } else {
            this.l = null;
            this.b = null
        }
    },
    M: function() {
        this.l && this.l.bx();
        this.b && this.b.bx();
        _fce.l.prototype.M.call(this)
    },
    bz: function() {
        if (this.l) {
            this.l.dispose();
            this.l = null
        }
        if (this.b) {
            this.b.dispose();
            this.b = null
        }
        _fce.l.prototype.bz.call(this)
    },
    dF: function() {
        return this.be() ? "peekShadowIE8" : "peekShadowAll"
    },
    bs: function() {
        _fce.l.prototype.bs.call(this);
        this.p && this.n && ((this.p.i & 16) > 0 ? this.l.K(!0) : this.n.D(this.l, this.p))
    }
};
_b.f = function(n, t, i) {
    this.a = n;
    this.b = t;
    this.c = i
};
_b.f.a = function(n) {
    var t = window.document.createElement("div");
    n.appendChild(t);
    return t
};
_b.f.prototype = {
    a: null,
    b: null,
    c: null,
    d: function(n) {
        return new _b.O(_b.f.a(n), this.a, this.b, this.c, _g.a.a())
    }
};
_b.k = function() {};
_b.k.h = function(n) {
    var i = null;
    var t = n.querySelectorAll("a[id^='LPUrlAnchor']");
    if (t && t.length > 0) i = t[0];
    else {
        t = n.querySelectorAll("a[id^='LPImageAnchor']");
        t && t.length > 0 && (i = t[0])
    }
    return i
};
_b.k.e = function() {
    return "LPlnk" + Math.round(Math.random() * 1e6).toString()
};
_b.k.a = function(n, t) {
    return !!n && n.startsWith(t)
};
_b.k.i = function(n) {
    return !!n && n.startsWith("LP")
};
_b.k.d = function(n) {
    if (n)
        for (var i = _b.k.g, u = i.length, t = 0; t < u; ++t) {
            var r = i[t];
            if (n.startsWith(r)) return !0
        }
    return !1
};
_b.k.b = function(n) {
    for (var t = null, i = n, r = 0; r < 15; r++) {
        if (!i) break;
        if (_b.k.a(i.id, "LPBorder")) {
            _b.k.h(i) && (t = i);
            break
        }
        i = i.parentNode
    }
    t && t.parentNode && t.parentNode.tagName === "P" && t.parentNode.getAttribute("contentEditable") && t.parentNode.getAttribute("contentEditable").toUpperCase() === "FALSE" && (t = t.parentNode);
    return t
};
_b.k.f = function(n) {
    return !!n.getAttribute("PreviewInformation")
};
_b.k.c = function(n) {
    var t = null;
    _b.k.a(n, "LPNoLP") || _b.k.a(n, "NoLP") ? t = "LPNoLP" : _b.k.a(n, "LPlnk") || _b.k.a(n, "lnk") ? t = "LPlnk" : _b.k.a(n, "LPImageAnchor") ? t = "LPImageAnchor" : _b.k.a(n, "LPUrlAnchor") && (t = "LPUrlAnchor");
    return t
};
_b.k.k = function(n) {
    return n.Id.startsWith("UpdateOEmbed")
};
_b.k.j = function() {
    var n = _g.a.a();
    return n.bH.LinkPreviewEnabled && n.a().bH.LinkPreviewEnabled
};
_b.bR = function(n, t, i, r, u, f, e) {
    this.b = n;
    this.e = t;
    this.c = i;
    this.d = r;
    this.g = u;
    this.f = f;
    this.a = e
};
_b.bR.prototype = {
    b: null,
    e: null,
    c: null,
    d: null,
    g: null,
    f: null,
    a: 0
};

function CoreControlsComponent() {}
CoreControlsComponent.$$cctor = function() {
    _a.t.a().a(CoreControlsComponent)
};
CoreControlsComponent.prototype = {
    b: function(n, t, i) {
        n.e(_b.bX).b(_b.z).a();
        var y = this;
        n.b(_b.bd, function() {
            return new _b.bd(i.a())
        }).a();
        var p = this;
        n.b(_b.be, function() {
            return new _b.be(i.a(), null)
        }).a();
        var a = this;
        n.b(_b.bS, function() {
            return new _b.bS(n.a(_j.j))
        }).b(_b.i).a();
        var v = this;
        n.b(_b.a, function() {
            return new _b.a(n.a(_j.o), n.a(_j.v))
        }).b(_fc.f).a();
        var k = this;
        n.b(_b.f, function() {
            return new _b.f(n.a(_b.a), n.a(_j.j), n.a(_y.a))
        }).a();
        var d = this;
        n.b(_b.bB, function() {
            return new _b.bB(n.a(InlineImageLoader))
        }).a();
        var w = this;
        n.b(InlineImageLoader, function() {
            return new InlineImageLoader(n.a(_h.Y), n.d(_y.gu), n.d(_y.cm))
        }).a();
        var b = this;
        n.b(_b.bQ, function() {
            return new _b.bQ(n.a(_h.Y), n.d(_bc.F), n.d(_bc.R), n.a(_j.v), n.a(_j.o))
        }).b(_b.bP).a();
        var l = this;
        n.b(_b.by, function() {
            var t = new _j.J(function() {
                return n.a(_ff.b)
            });
            return new _b.by(n.a(_j.I), t, n.a(_a.Z), n.a(_a.e))
        }).a();
        var f = this;
        n.b(_j.bF.$$(_b.u), function() {
            return new(_j.bF.$$(_b.u))(function() {
                return new _b.u(document.createElement("div"), n.a(_h.e))
            }, "div")
        });
        var e = this;
        n.b(_b.bk, function() {
            return new _b.bk
        }).a();
        if (i.a() !== "TouchNarrow") {
            var r = this;
            n.b(_b.bC, function() {
                return new _b.bC
            }).a();
            var u = this;
            n.b(_b.bD, function() {
                return new _b.bD
            }).a();
            var h = this;
            n.b(_b.bz, function() {
                return new _b.bz
            }).a();
            var c = this;
            n.b(_b.bs, function() {
                return new _b.bs
            }).a();
            var o = this;
            n.b(_b.d, function() {
                return new _b.d(n.a(_j.j), [n.a(_b.bC), n.a(_b.bk), n.a(_b.bD), n.a(_b.bz), n.a(_b.bs)], n.a(_b.bs))
            }).a()
        } else {
            var s = this;
            n.b(_b.d, function() {
                return new _b.d(n.a(_j.j), [n.a(_b.bk)], n.a(_b.bk))
            }).a()
        }
    },
    a: function() {
        return [new _j.y(_b.by, 0, -1), new _j.y(_b.bB, 0, 25)]
    }
};
_b.bX = function() {
    this.e = {}
};
_b.bX.prototype = {
    d: function(n, t) {
        var i = this;
        return this.a(n, function() {
            return _j.k.g(t.z)
        })
    },
    a: function(n, t) {
        _a.c.a(t, "getMeasurement");
        var i = this.e[n];
        if (i) return i;
        i = t();
        this.e[n] = i;
        return i
    },
    c: function(n) {
        this.e[n] = null
    },
    b: function() {
        this.e = {}
    }
};
_b.u = function(n, t) {
    this.j = Function.createDelegate(this, this.s);
    this.i = Function.createDelegate(this, this.r);
    _b.u.initializeBase(this, [n]);
    this.l = t;
    this.apcl("CategoriesList", this.i);
    this.apcl("MasterCategoryList", this.i)
};
_b.u.prototype = {
    l: null,
    g: null,
    e: null,
    b: !1,
    h: -1,
    a: "catB",
    m: "catName",
    c: !0,
    f: function(n) {
        this.g = n;
        this.by("CategoriesList");
        return n
    },
    d: function(n) {
        if (this.e !== n) {
            this.e && this.e.rpcl("MasterList", this.j);
            this.e = n;
            this.e && this.e.apcl("MasterList", this.j);
            this.by("MasterCategoryList")
        }
        return n
    },
    k: function(n, t) {
        var i = this.l.c(t, 2);
        var r = i;
        i === _h.e.a && (r = _h.e.c);
        _j.k.a(n, "border-color", r);
        _j.k.a(n, "background-color", i)
    },
    r: function(n, t) {
        this.n()
    },
    s: function(n, t) {
        this.n()
    },
    bz: function() {
        this.d(null);
        _j.i.prototype.bz.call(this)
    },
    n: function() {
        _j.B.d(this.z.children);
        var e = this.h;
        if (this.g && this.g.b() > 0) {
            var u = 0;
            var c = this.g.b();
            var o = this.g.b();
            e !== -1 && (o = Math.min(e, this.g.b()));
            var n = null;
            n = this.e ? this.e.a().f : new _j.l;
            for (var l = n.b(), i = 0; u < o && i < c; i++) {
                for (var r = -1, f = this.g.a(i), t = 0; t < l; t++) {
                    var s = n.c(t);
                    if (s.bH.Name === f) {
                        r = s.bH.Color;
                        break
                    }
                }
                var h = r !== -1 || !this.c;
                if (h) {
                    u++;
                    this.o(f, r)
                }
            }
        }
    },
    o: function(n, t) {
        this.b ? this.p(n, t) : this.q(t)
    },
    q: function(n) {
        var t = window.document.createElement("img");
        _j.k.d(t, this.a);
        this.k(t, n);
        this.z.appendChild(t)
    },
    p: function(n, t) {
        var i = window.document.createElement("span");
        var r = window.document.createElement("img");
        var u = window.document.createTextNode(n);
        _j.k.d(r, this.a);
        this.k(r, t);
        _j.k.d(i, this.m);
        i.appendChild(r);
        i.appendChild(u);
        this.z.appendChild(i)
    }
};
_b.R = function(n, t, i) {
    _b.R.initializeBase(this, [n, t, i])
};
_b.R.prototype = {
    c: function(n) {
        this.S().d(n);
        return n
    }
};
_b.bM = function() {};
_b.bM.b = function(n, t) {
    var i = new Sys.StringBuilder(_b.bM.a());
    i.append("(");
    i.append(n);
    for (var r = 0; r < t.length; r++) {
        i.append(", ");
        i.append(t[r].a);
        i.append(" ");
        i.append(t[r].b.toString());
        i.append("%")
    }
    i.append(")");
    return i.toString()
};
_b.bM.a = function() {
    return _a.o.a().I ? "-ms-linear-gradient" : _a.o.a().W ? "-webkit-linear-gradient" : "-moz-linear-gradient"
};
_b.bN = function(n, t) {
    _a.c.b(n, "color");
    this.a = n;
    this.b = t
};
_b.bN.prototype = {
    a: null,
    b: 0
};
_b.N = function(n) {
    _b.N.initializeBase(this, [n])
};
_b.bO = function(n) {
    _b.bO.initializeBase(this, [n])
};
_b.bO.prototype = {
    a: !1,
    c: !1,
    d: null,
    b: 5,
    n: function() {},
    m: function() {},
    q: function(n) {
        var t = this.d.z;
        var i = t.scrollTop;
        var r = t.scrollHeight - t.offsetHeight;
        var f = Math.max(i - this.b, 0);
        var u = Math.min(i + this.b, r);
        i > 0 && i < r ? t.scrollTop = this.a ? f : u : i ? i === r && this.a && (t.scrollTop = f) : this.a || (t.scrollTop = u)
    },
    o: function(n) {
        this.c && _j.k.D(this.z, "mouseenter")
    },
    p: function(n) {
        this.c && _j.k.D(this.z, "mouseleave")
    },
    r: function(n, t) {
        t.val = 1;
        return !0
    },
    s: function(n) {}
};
_b.P = function(n) {
    this.l = Function.createDelegate(this, this.f);
    this.s = _b.l.o();
    _b.P.initializeBase(this, [n])
};
_b.P.prototype = {
    h: function() {
        return this.s
    },
    f: function(n) {
        _j.k.c(this.z, "error");
        this.a(_y.c.a.o(_y.e.a().c));
        _j.k.d(this.z, this.h().a())
    },
    P: function() {
        _j.i.prototype.P.call(this);
        this.bn(1);
        _j.k.b(this.z, "error", this.l)
    }
};
_b.x = function(n, t) {
    this.m = Function.createDelegate(this, this.q);
    this.l = Function.createDelegate(this, this.o);
    this.h = _a.o.a().Z();
    _b.x.initializeBase(this, [n]);
    this.k(this);
    this.S().a(22);
    _dh.a(t, this)
};
_b.x.prototype = {
    g: null,
    a: null,
    i: !1,
    c: function() {
        return this.eM(_b.x.a)
    },
    b: function(n) {
        this.eK(_b.x.a, n);
        return n
    },
    e: function(n) {
        if (this.h !== n) {
            this.a && (n ? this.a.setAttribute("multiple", "true") : this.a.removeAttribute("multiple"));
            this.h = n;
            this.by("AllowMultipleFiles")
        }
        return n
    },
    j: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.a && (n ? this.a.setAttribute("accept", "image/*") : this.a.removeAttribute("accept"))
        }
        return n
    },
    n: function() {
        return this.eM(_b.x.b)
    },
    f: function(n) {
        this.eK(_b.x.b, n);
        return n
    },
    d: function() {
        return this.eM(_b.x.c)
    },
    bz: function() {
        this.k(null);
        _j.c.prototype.bz.call(this)
    },
    Y: function() {
        _j.i.prototype.Y.call(this);
        this.eK(_b.x.c, new _j.g(this.l, this.I()));
        this.a && _j.k.d(this.a, this.cI)
    },
    k: function(n) {
        if (this.g) {
            var t = _j.k.E(this.g.z, "input");
            _j.B.c(t, "change", "FileInput#Change");
            _j.B.c(t, "keyup", "FileInput#Change");
            _j.k.f(this.a);
            this.a = null;
            this.g = null
        }
        if (n) {
            this.g = n;
            this.a = window.document.createElement("input");
            this.a.setAttribute("type", "file");
            this.a.setAttribute("tabIndex", "-1");
            _j.k.b(this.a, "change", this.m, "FileInput#Change");
            this.h && this.a.setAttribute("multiple", "true");
            this.i && this.a.setAttribute("accept", "image/*");
            n.z.appendChild(this.a)
        }
    },
    o: function() {
        var t = _a.b.b(_a.a.c, "ExecuteOpenFilePicker", !1, null);
        var n = new Array(0);
        try {
            this.a.click()
        } catch (i) {
            n[n.length] = i.name.toString()
        } finally {
            if (t) {
                if (n.length === 1) t.n = n[0];
                else if (n.length > 1) {
                    t.n = "MultiExceptions";
                    t.p = n.join("+")
                }
                _a.b.a(t)
            }
        }
    },
    p: function() {
        return this.a.files
    },
    q: function(n) {
        if (_a.o.a().Z()) {
            this.b(new _h.cr(this.p()));
            this.a.setAttribute("disabled", "true");
            this.n() && this.n().a();
            this.k(this)
        }
    }
};
_b.y = function(n) {
    this.cV = Function.createDelegate(this, this.dK);
    _b.y.initializeBase(this, [n]);
    this.D(22);
    this.be(!0)
};
_b.y.prototype = {
    cd: 0,
    w: null,
    E: null,
    x: null,
    bJ: null,
    bD: null,
    bS: null,
    bP: null,
    bQ: null,
    cu: null,
    bN: null,
    cb: 0,
    cc: 0,
    cW: null,
    cv: !0,
    cH: !1,
    cf: !1,
    cG: !0,
    dk: !1,
    dl: !1,
    cy: !1,
    dt: function(n) {
        n && this.ch();
        this.dk = n;
        return n
    },
    bg: !1,
    du: function(n) {
        n && (this.bg ? this.dm() : this.ch());
        this.dl = n;
        return n
    },
    cz: function(n) {
        if (this.cb !== n) {
            this.cb = n;
            this.by("AnchorPositionX")
        }
        return n
    },
    cA: function(n) {
        if (this.cc !== n) {
            this.cc = n;
            this.by("AnchorPositionY")
        }
        return n
    },
    r: function(n) {
        this.cd !== n && (this.cd = n);
        return n
    },
    dn: function(n) {
        this.w !== n && (this.w = n);
        return n
    },
    dw: function(n) {
        this.E !== n && (this.E = n);
        return n
    },
    dq: function(n) {
        this.x !== n && (this.x = n);
        return n
    },
    dx: function(n) {
        this.cG !== n && (this.cG = n);
        return n
    },
    dv: function(n) {
        this.cv !== n && (this.cv = n);
        return n
    },
    dO: function(n) {
        this.cH !== n && (this.cH = n);
        return n
    },
    ds: function(n) {
        if (this.cW !== n) {
            if (n) try {
                this.h(_j.u.b(_fc.C, n))
            } catch (t) {
                this.h(1)
            }
            this.cW = n
        }
        return n
    },
    cC: function(n) {
        this.bJ !== n && (this.bJ = n);
        return n
    },
    cB: function(n) {
        this.bD !== n && (this.bD = n);
        return n
    },
    dD: function(n) {
        this.bS !== n && (this.bS = n);
        return n
    },
    dr: function(n) {
        this.bN !== n && (this.bN = n);
        return n
    },
    cF: function(n) {
        this.bQ !== n && (this.bQ = n);
        return n
    },
    bR: function(n) {
        this.bP !== n && (this.bP = n);
        return n
    },
    cZ: function(n) {
        if (this.cf !== n) {
            this.cf = n;
            this.by("HasTextBeenPasted")
        }
        return n
    },
    dN: function(n) {
        if (this.cy !== n) {
            this.cy = n;
            this.by("SelectAllTextOnFocus")
        }
        return n
    },
    dQ: function() {
        this.bu(this.b.length)
    },
    dK: function() {
        this.ch()
    },
    ch: function() {
        var n = _j.x.a(this.z);
        var u = n.defaultView ? n.defaultView : n.parentWindow;
        if (u) {
            var r = _j.k.j(this.z);
            var f = _j.k.l(this.z, !1);
            var t = r.b;
            _g.a.a().c().bH.IsUserCultureRightToLeft && (t += this.z.clientWidth);
            var i = 0;
            _a.o.a().V && (i = window.document.documentElement.scrollTop);
            this.cz(t);
            this.cA(r.a + f + this.cd - i)
        }
    },
    dP: function(n) {
        this.z.style.width = n.toString() + "px"
    },
    dJ: function() {
        return _j.k.h(this.z)
    },
    dm: function() {
        var t = _j.x.a(this.z);
        var f = t.defaultView ? t.defaultView : t.parentWindow;
        if (f) {
            var n = _j.k.B(this.z);
            var u = _j.k.j(n);
            var e = _j.k.l(n, !1);
            var i = u.b;
            _g.a.a().c().bH.IsUserCultureRightToLeft && (i += n.clientWidth);
            var r = 0;
            _a.o.a().V && (r = window.document.documentElement.scrollTop);
            this.cz(i);
            this.cA(u.a + e + this.cd - r)
        }
    },
    P: function() {
        _fc.i.prototype.P.call(this);
        this.bn(1048833);
        window.addEventListener("resize", this.cV)
    },
    bz: function() {
        window.removeEventListener("resize", this.cV);
        _j.c.prototype.bz.call(this)
    },
    nF: function(n) {
        var i = this.dI(n);
        if (i) {
            var t = i.getData("Text");
            if (!_j.h.a(t)) {
                t = t.trim();
                t = t.replace(_b.y.b, ";");
                t = t.replace(_b.y.a, ";");
                t = t.replace(_b.y.c, ";");
                var u = this.cj();
                var r = this.db();
                this.c(this.b.substring(0, u) + t + this.b.substring(r, this.b.length));
                n.c()
            }
        }
        this.cZ(!0)
    },
    fg: function(n) {
        _j.i.prototype.fg.call(this, n);
        if ((n.a() === 186 || n.a() === 59) && this.E && this.E.b) {
            var r = this.b ? this.b.split("[").length - 1 : 0;
            var i = this.b ? this.b.split("]").length - 1 : 0;
            if (r === i) {
                n.c();
                this.b !== "" && this.E.a()
            }
        }
        if (String.fromCharCode(n.a()) === "," && this.x && this.x.b) {
            var t = this.b ? this.b.split('"').length - 1 : 0;
            if (!(t % 2)) {
                n.c();
                this.b !== "" && this.x.a()
            }
        }
    },
    cg: function(n) {
        _fc.i.prototype.cg.call(this, n);
        switch (n.a()) {
            case 13:
                n.c();
                break;
            case 27:
                if (this.bP && this.bP.b) {
                    this.cH && n.d();
                    n.c();
                    this.bP.a()
                }
                break;
            case 46:
                if (this.bN && this.bN.b && !this.cG && this.cX(this.b.length)) {
                    n.c();
                    this.bN.a()
                }
                break;
            case 40:
                if (this.bD && this.bD.b) {
                    n.c();
                    this.bD.a()
                }
                break;
            case 38:
                if (this.bJ && this.bJ.b) {
                    n.c();
                    this.bJ.a()
                }
                break;
            case 9:
                if (this.bS && this.bS.b) {
                    if (this.cv) {
                        n.c();
                        n.d()
                    }
                    this.bS.a()
                }
                break;
            case 8:
                if (this.w && this.w.b && this.cX(0)) {
                    n.c();
                    this.w.a();
                    this.ch()
                }
                break
        }
        if (n.a() === _ff.j.a) {
            this.b !== "" && n.d();
            this.cu && this.cu.b && this.cu.a()
        } else n.a() === _ff.j.b && this.bQ && this.bQ.b && this.cX(this.b.length) && this.bQ.a()
    },
    dI: function(n) {
        if (window.clipboardData) return window.clipboardData;
        else if (n.s) {
            var t = n.s;
            return t.clipboardData
        } else return null
    },
    cD: function(n) {
        _fc.i.prototype.cD.call(this, n);
        this.cy && this.dL()
    },
    cX: function(n) {
        return (_j.C.a(this.cj()) || this.cj() === n) && this.cj() === this.db()
    },
    dL: function() {
        if (this.z) {
            var n = this.z.value;
            !_j.h.a(n) && n.length > 0 && this.z && this.z.setSelectionRange(0, n.length)
        }
    }
};
_b.ce = function(n, t, i, r, u) {
    this.i = Function.createDelegate(this, this.m);
    this.b = [];
    this.h = [];
    this.g = [];
    this.d = [];
    _b.ce.initializeBase(this);
    this.e = n;
    this.c = r;
    this.f = u;
    this.a = i;
    this.l = t;
    this.e.b(_fce.H, this.i)
};
_b.ce.prototype = {
    e: null,
    l: null,
    c: null,
    f: null,
    a: null,
    D: function() {
        this.e.c(_fce.H, this.i)
    },
    m: function(n) {
        n.b ? this.o(n) : this.n(n)
    },
    o: function(n) {
        var t = n.a;
        this.r(n);
        this.q(t)
    },
    q: function(n) {
        this.a.f = n.dD;
        switch (n.i) {
            case 2:
                Array.add(this.g, n);
                this.a.a(this.f);
                this.a.d(this.f);
                this.a.a(this.c);
                this.a.d(this.c);
                this.j();
                break;
            case 1:
                Array.add(this.h, n);
                this.a.a(this.c);
                this.a.d(this.c);
                this.j();
                break;
            default:
                break
        }
        Array.add(this.b, n)
    },
    r: function(n) {
        Array.add(this.d, n.c);
        if (n.a.cj) {
            n.c && n.c !== document.body && !n.a.bg && n.c.blur();
            if (!_a.o.a().I || _a.o.a().L.b() > 8) try {
                var t = window.getSelection();
                t.isCollapsed || n.a.bg || t.removeAllRanges()
            } catch (i) {}
        }
    },
    j: function() {
        for (var n = this.b.length - 1; n >= 0 && !this.a.c(this.b[n].z);) {
            if (!this.b[n].cH) {
                var t = this.b[n].z;
                this.a.d(t);
                this.a.a(t)
            }
            n--
        }
    },
    n: function(n) {
        var t = n.a;
        this.s(t);
        this.p(t)
    },
    p: function(n) {
        if (this.d.length > 0) {
            var t = this.d[this.d.length - 1];
            Array.removeAt(this.d, this.d.length - 1);
            if (n.cj && t && (!n.bg || n.bZ)) {
                this.e.a(_ff.B, new _ff.B(t));
                t.focus();
                this.e.a(_ff.A, new _ff.A(t))
            }
        }
    },
    s: function(n) {
        Array.remove(this.b, n);
        switch (n.i) {
            case 2:
                Array.remove(this.g, n);
                this.k();
                break;
            case 1:
                Array.remove(this.h, n);
                this.k();
                break;
            default:
                break
        }
        if (!this.g.length) {
            this.a.e(this.f);
            this.a.b(this.f);
            if (!this.h.length) {
                this.a.e(this.c);
                this.a.b(this.c)
            }
        }
        this.a.b(n.z)
    },
    k: function() {
        for (var n = this.b.length - 1; n >= 0;) {
            var t = this.b[n].z;
            this.a.e(t);
            this.a.b(t);
            if (this.b[n].i) break;
            else n--
        }
    }
};
_b.Q = function(n, t, i) {
    this.c = n;
    this.b = t;
    this.d = i
};
_b.Q.prototype = {
    c: null,
    b: null,
    d: null,
    a: function(n, t) {
        return new _b.ce(this.b, this.c, this.d, n, t)
    }
};
_b.bA = function(n) {
    _b.bA.initializeBase(this, [n]);
    this.z.style.position = "absolute"
};
_b.bA.prototype = {
    f: !1,
    i: 0,
    c: 0,
    g: 0,
    j: 0,
    b: 0,
    k: function(n, t) {
        _fce.d.prototype.k.call(this, n, t);
        if (!t.c)
            for (var i = 0; i < t.a.length; i++) this.o(t.a[i], t.d + i)
    },
    o: function(n, t) {
        if (!t && this.f) {
            n.z.style.position = "absolute";
            n.z.style.width = "100%";
            n.z.style.height = this.b + "px";
            return
        }
        var u = 0;
        this.f && (u = this.b);
        var f = this.j / this.c;
        var i = this.g / this.i;
        var r = this.f ? t - 1 : t;
        var o = Math.floor(r / this.c);
        var e = r % this.c;
        n.z.style.position = "absolute";
        n.z.style.top = (o * i + u).toString() + "px";
        n.z.style.height = i.toString() + "px";
        n.z.style.width = f.toString() + "px";
        _j.k.a(n.z, _fc.n.a(), (e * f).toString() + "px")
    }
};
_b.W = function(n, t) {
    this.i = Function.createDelegate(this, this.l);
    _b.W.initializeBase(this, [n]);
    this.d = n;
    this.dM(!1);
    this.cU(2);
    this.fK(2);
    this.D(1);
    this.a("");
    this.g = t;
    _j.k.d(this.z, "offscreen")
};
_b.W.prototype = {
    k: !1,
    h: !1,
    g: null,
    d: null,
    c: !1,
    kM: function() {
        return _j.i.prototype.kM.call(this)
    },
    N: function(n) {
        if (_j.i.prototype.kM.call(this) !== n) {
            this.k && this.a("");
            _j.i.prototype.N.call(this, n);
            this.by("AriaHiddenState")
        }
        return n
    },
    e: function() {
        return _fc.a.prototype.e.call(this)
    },
    a: function(n) {
        if (_fc.a.prototype.e.call(this) !== n && n !== "")
            if (this.c) {
                this.d && this.d.childNodes.length > 1 && this.d.removeChild(this.d.childNodes[1]);
                var t = document.createElement("p");
                t.innerText = n;
                this.d.appendChild(t)
            } else {
                _fc.a.prototype.a.call(this, n);
                this.z.style.display = "none";
                this.z.style.display = "inline"
            }
        return n
    },
    j: function() {
        return _a.o.a().I
    },
    P: function() {
        _j.i.prototype.P.call(this);
        this.h && this.g.b(_a.ba, this.i)
    },
    bz: function() {
        this.h && this.g.c(_a.ba, this.i);
        _fc.a.prototype.bz.call(this)
    },
    l: function(n) {
        this.a("");
        if (n.a) {
            this.c = n.d;
            this.D(n.c);
            this.cU(n.b);
            this.a(n.a)
        }
    }
};
_b.d = function(n, t, i) {
    this.d = Function.createDelegate(this, this.g);
    this.b = {};
    _b.d.initializeBase(this);
    this.c = n;
    this.c.b(_b.B, this.d);
    for (var r = 0; r < t.length; r++) {
        if (t[r].a() in this.b) throw Error.argument("keysets", "The keyset array contained duplicate keys.");
        this.b[t[r].a()] = t[r]
    }
    if (!(i.a() in this.b)) throw Error.argument("activeKeyset", "The active keyset was not provided as one of the available keysets.");
    this.a = i
};
_b.d.prototype = {
    c: null,
    a: null,
    f: function() {
        return this.a.a()
    },
    h: function(n) {
        this.a = this.b[n];
        this.by("ActiveKeyset");
        return n
    },
    bz: function() {
        _j.S.prototype.bz.call(this);
        this.c.c(_b.B, this.d)
    },
    e: function(n) {
        return this.a.b(n)
    },
    g: function(n) {
        this.h(n.a)
    }
};
_b.bz = function() {
    this.c = {
        CreateMailOutsideEditor: [new _b.c("C", 0)],
        SendMail: [new _b.c("ENTER", 2)],
        ReplyMail: [new _b.c("R", 0)],
        ReplyAllMail: [new _b.c("A", 0)],
        ForwardMail: [new _b.c("F", 0)],
        CreateNumberedList: [new _b.c("7", 3)],
        CreateBulletedList: [new _b.c("8", 3)],
        AlignTextLeft: [new _b.c("L", 3)],
        AlignTextCenter: [new _b.c("E", 3)],
        AlignTextRight: [new _b.c("R", 3)],
        IndentLess: [new _b.c("[", 2)],
        IndentMore: [new _b.c("]", 2)],
        InsertHyperlink: [new _b.c("K", 2)],
        SaveDraft: [new _b.c("S", 2)],
        SelectAll2: [new _b.c("8", 1), new _b.c("A", 0)],
        DeselectAll2: [new _b.c("8", 1), new _b.c("N", 0)],
        MoveSelectionDown: [new _b.c("DOWNARROW", 0)],
        MoveSelectionDown1: [new _b.c("J", 0)],
        MoveSelectionUp: [new _b.c("UPARROW", 0)],
        MoveSelectionUp1: [new _b.c("K", 0)],
        OpenMail: [new _b.c("O", 0)],
        CloseMail: [new _b.c("U", 0)],
        ExpandCollapseMail: [new _b.c("X", 0)],
        OpenNextItem: [new _b.c("J", 0)],
        OpenPreviousItem: [new _b.c("K", 0)],
        inbox: [new _b.c("G", 0), new _b.c("I", 0)],
        drafts: [new _b.c("G", 0), new _b.c("D", 0)],
        sentitems: [new _b.c("G", 0), new _b.c("T", 0)],
        GoToFlagged: [new _b.c("G", 0), new _b.c("S", 0)],
        module2: [new _b.c("G", 0), new _b.c("C", 0)],
        Search: [new _b.c("/", 0)],
        help: [new _b.c("/", 1)],
        DeleteMail: [new _b.c("3", 1)],
        ArchiveMail: [new _b.c("E", 0)],
        MarkAsJunk: [new _b.c("1", 1)],
        MoveToFolder: [new _b.c("V", 0)],
        CategorizeMail: [new _b.c("L", 0)],
        MarkAsRead: [new _b.c("I", 1)],
        MarkAsUnread: [new _b.c("U", 1)],
        FlagMail: [new _b.c("S", 0)],
        UndoAction: [new _b.c("Z", 2)]
    }
};
_b.bz.prototype = {
    a: function() {
        return "GMail"
    },
    b: function(n) {
        return n.toString() in this.c ? this.c[n.toString()] : null
    }
};
_b.c = function(n, t) {
    this.a = n;
    this.b = t
};
_b.c.prototype = {
    a: null,
    b: 0
};
_b.B = function(n) {
    this.a = n
};
_b.B.prototype = {
    a: null
};
_b.bk = function() {
    this.c = {}
};
_b.bk.prototype = {
    a: function() {
        return "Off"
    },
    b: function(n) {
        return n.toString() in this.c ? this.c[n.toString()] : null
    }
};
_b.bC = function() {
    this.c = {
        CreateMail: [new _b.c("N", 2)],
        CreateMailOutsideEditor: [new _b.c("N", 0)],
        ShowAddressBook: [new _b.c(".", 4)],
        SendMail: [new _b.c("ENTER", 2)],
        SendMailAltS: [new _b.c("S", 4)],
        ReplyMail: [new _b.c("R", 0)],
        ReplyAllMail: [new _b.c("R", 1)],
        ReplyAllMail1: [new _b.c("A", 0)],
        ForwardMail: [new _b.c("F", 1)],
        SaveDraft: [new _b.c("S", 2)],
        DiscardDraft: [new _b.c("ESC", 0)],
        ChangeFontFamily: [new _b.c("F", 3)],
        ChangeFontSize: [new _b.c("S", 3)],
        ChangeFontColor: [new _b.c("C", 3)],
        ChangeFontHighlightColor: [new _b.c("I", 3)],
        CreateNumberedList: [new _b.c("/", 2)],
        CreateNumberedList1: [new _b.c("O", 3)],
        CreateBulletedList: [new _b.c(".", 2)],
        CreateBulletedList1: [new _b.c("L", 3)],
        AlignTextLeft: [new _b.c("L", 2)],
        AlignTextCenter: [new _b.c("E", 2)],
        AlignTextRight: [new _b.c("R", 2)],
        InsertHyperlink: [new _b.c("K", 2)],
        InsertEmoticon: [new _b.c("Y", 3)],
        InsertTable: [new _b.c("E", 3)],
        IndentLess: [new _b.c("M", 3)],
        IndentLessAltShiftLeft: [new _b.c("LEFTARROW", 5)],
        IndentMoreCtrlM: [new _b.c("M", 2)],
        IndentMoreAltShiftRight: [new _b.c("RIGHTARROW", 5)],
        SelectAll: [new _b.c("S", 0), new _b.c("A", 0)],
        DeselectAll: [new _b.c("S", 0), new _b.c("N", 0)],
        MoveSelectionDown: [new _b.c("DOWNARROW", 0)],
        MoveSelectionDown1: [new _b.c(".", 2)],
        MoveSelectionUp: [new _b.c("UPARROW", 0)],
        MoveSelectionUp1: [new _b.c(",", 2)],
        Refresh: [new _b.c("M", 0)],
        Refresh1: [new _b.c("F9", 0)],
        OpenMail: [new _b.c("O", 0)],
        OpenMail1: [new _b.c("ENTER", 0)],
        CloseMail: [new _b.c("ESC", 0)],
        ExpandCollapseMail: [new _b.c("X", 0)],
        OpenNextItem: [new _b.c(".", 2)],
        OpenPreviousItem: [new _b.c(",", 2)],
        inbox: [new _b.c("G", 0), new _b.c("I", 0)],
        drafts: [new _b.c("G", 0), new _b.c("D", 0)],
        sentitems: [new _b.c("G", 0), new _b.c("S", 0)],
        GoToAll: [new _b.c("G", 0), new _b.c("A", 0)],
        GoToFlagged: [new _b.c("G", 0), new _b.c("L", 0)],
        module2: [new _b.c("G", 0), new _b.c("P", 0)],
        Search: [new _b.c("/", 0)],
        help: [new _b.c("/", 1)],
        DeleteMail: [new _b.c("DELETE", 0)],
        ArchiveMail: [new _b.c("E", 0)],
        MarkAsJunk: [new _b.c("J", 0)],
        MoveToFolder: [new _b.c("V", 0)],
        NewFolder: [new _b.c("E", 1)],
        CategorizeMail: [new _b.c("C", 0)],
        MarkAsRead: [new _b.c("Q", 0)],
        MarkAsUnread: [new _b.c("U", 0)],
        FlagMail: [new _b.c("INSERT", 0)],
        PrintMail: [new _b.c("P", 1)],
        UndoAction: [new _b.c("Z", 2)]
    }
};
_b.bC.prototype = {
    a: function() {
        return "Outlook"
    },
    b: function(n) {
        return n.toString() in this.c ? this.c[n.toString()] : null
    }
};
_b.bs = function() {
    this.c = {
        CreateMail: [new _b.c("N", 2)],
        CreateMailOutsideEditor: [new _b.c("N", 0)],
        ShowAddressBook: [new _b.c(".", 4)],
        SendMail: [new _b.c("ENTER", 2)],
        SendMailAltS: [new _b.c("S", 4)],
        ReplyMail: [new _b.c("R", 0)],
        ReplyMail1: [new _b.c("R", 2)],
        ReplyAllMail: [new _b.c("R", 1)],
        ReplyAllMail1: [new _b.c("R", 3)],
        ForwardMail: [new _b.c("F", 1)],
        ForwardMail1: [new _b.c("F", 3)],
        SaveDraft: [new _b.c("S", 2)],
        DiscardDraft: [new _b.c("ESC", 0)],
        ChangeFontFamily: [new _b.c("F", 3)],
        ChangeFontSize: [new _b.c("S", 3)],
        ChangeFontColor: [new _b.c("C", 3)],
        ChangeFontHighlightColor: [new _b.c("I", 3)],
        ApplyFirstFontHighlightColor: [new _b.c("H", 6)],
        CreateNumberedList: [new _b.c("/", 2)],
        CreateBulletedList: [new _b.c(".", 2)],
        AlignTextLeft: [new _b.c("L", 2)],
        AlignTextCenter: [new _b.c("E", 2)],
        AlignTextRight: [new _b.c("R", 2)],
        InsertHyperlink: [new _b.c("K", 2)],
        InsertEmoticon: [new _b.c("Y", 3)],
        InsertTable: [new _b.c("E", 3)],
        IndentLess: [new _b.c("M", 3)],
        IndentLessAltShiftLeft: [new _b.c("LEFTARROW", 5)],
        IndentMoreCtrlM: [new _b.c("M", 2)],
        IndentMoreAltShiftRight: [new _b.c("RIGHTARROW", 5)],
        SelectAll: [new _b.c("A", 2)],
        SelectAll1: [new _b.c("S", 0), new _b.c("A", 0)],
        DeselectAll: [new _b.c("S", 0), new _b.c("N", 0)],
        MoveSelectionDown: [new _b.c("DOWNARROW", 0)],
        MoveSelectionDown1: [new _b.c(".", 2)],
        MoveSelectionUp: [new _b.c("UPARROW", 0)],
        MoveSelectionUp1: [new _b.c(",", 2)],
        SelectFirstItem: [new _b.c("HOME", 0)],
        SelectLastItem: [new _b.c("END", 0)],
        Refresh: [new _b.c("M", 0)],
        Refresh1: [new _b.c("F9", 0)],
        ViewAs: [new _b.c("V", 6)],
        AccessibilityView: [new _b.c("A", 6)],
        OpenMail: [new _b.c("O", 0)],
        OpenMail1: [new _b.c("ENTER", 0)],
        CloseMail: [new _b.c("ESC", 0)],
        ExpandCollapseMail: [new _b.c("X", 0)],
        OpenNextItem: [new _b.c(".", 2)],
        OpenPreviousItem: [new _b.c(",", 2)],
        inbox: [new _b.c("G", 0), new _b.c("I", 0)],
        drafts: [new _b.c("G", 0), new _b.c("D", 0)],
        sentitems: [new _b.c("G", 0), new _b.c("S", 0)],
        GoToAll: [new _b.c("G", 0), new _b.c("A", 0)],
        GoToFlagged: [new _b.c("G", 0), new _b.c("L", 0)],
        module0: [new _b.c("1", 3)],
        module1: [new _b.c("2", 3)],
        module2: [new _b.c("3", 3)],
        module2_1: [new _b.c("G", 0), new _b.c("P", 0)],
        module3: [new _b.c("4", 3)],
        Search: [new _b.c("Q", 4)],
        help: [new _b.c("/", 1)],
        NewFolder: [new _b.c("E", 1)],
        DeleteMail: [new _b.c("DELETE", 0)],
        DeleteMail1: [new _b.c("D", 2)],
        ArchiveMail: [new _b.c("E", 0)],
        MarkAsJunk: [new _b.c("J", 0)],
        MoveToFolder: [new _b.c("V", 0)],
        CategorizeMail: [new _b.c("C", 0)],
        MarkAsRead: [new _b.c("Q", 0)],
        MarkAsRead1: [new _b.c("Q", 2)],
        MarkAsUnread: [new _b.c("U", 0)],
        MarkAsUnread1: [new _b.c("U", 2)],
        FlagMail: [new _b.c("INSERT", 0)],
        UndoAction: [new _b.c("Z", 2)]
    }
};
_b.bs.prototype = {
    a: function() {
        return "OutlookWebApp"
    },
    b: function(n) {
        return n.toString() in this.c ? this.c[n.toString()] : null
    }
};
_b.e = function(n) {
    this.u = Function.createDelegate(this, this.B);
    _b.e.initializeBase(this);
    this.q = n;
    this.q.apcl(_b.e.a, this.u)
};
_b.e.prototype = {
    r: 0,
    k: null,
    t: null,
    q: null,
    d: function() {
        return this.t
    },
    j: function(n) {
        this.t = n;
        this.k = this.q.e(n);
        return n
    },
    v: !1,
    a: function() {
        return this.v
    },
    w: function(n) {
        this.v = n;
        return n
    },
    s: !1,
    bz: function() {
        _j.bk.prototype.bz.call(this);
        this.q.rpcl(_b.e.a, this.u);
        this.q = null;
        this.k = null
    },
    h: function() {
        this.w(!1);
        this.r = 0
    },
    g: function(n) {
        return this.z(n.j()) ? null : this.l
    },
    b: function(n) {
        if (this.z(n.j()) || !this.k || this.k.length < 1) return !1;
        var i = this.k[this.r];
        var t = this.A(n, i);
        if (t) return !0;
        this.h();
        i = this.k[this.r];
        t = this.A(n, i);
        return t
    },
    A: function(n, t) {
        var i = this.y(n, _fc.r.a(t.a), t.b);
        if (i) {
            this.r++;
            this.w(this.r !== this.k.length);
            this.a() || this.h();
            return !0
        }
        this.w(!1);
        return !1
    },
    B: function(n, t) {
        this.k = this.q.e(this.t)
    },
    z: function(n) {
        return this.s ? n === "keydown" : n === "keyup"
    }
};
_b.bD = function() {
    this.c = {
        CreateMailOutsideEditor: [new _b.c("N", 0)],
        SendMailAltS: [new _b.c("S", 4)],
        ReplyMail: [new _b.c("R", 0)],
        ReplyAllMail: [new _b.c("A", 0)],
        ForwardMail: [new _b.c("F", 0)],
        SaveDraft: [new _b.c("S", 2)],
        CreateNumberedList: [new _b.c("/", 2)],
        CreateBulletedList: [new _b.c(".", 2)],
        MoveSelectionDown: [new _b.c("DOWNARROW", 0)],
        MoveSelectionDown1: [new _b.c(".", 2)],
        MoveSelectionUp: [new _b.c("UPARROW", 0)],
        MoveSelectionUp1: [new _b.c(",", 2)],
        CloseMail: [new _b.c("ESC", 0)],
        ExpandCollapseMail: [new _b.c("X", 0)],
        OpenNextItem: [new _b.c(".", 2)],
        OpenPreviousItem: [new _b.c(",", 2)],
        inbox: [new _b.c("M", 0)],
        Search: [new _b.c("S", 0)],
        help: [new _b.c("/", 1)],
        DeleteMail: [new _b.c("DELETE", 0)],
        MoveToFolder: [new _b.c("D", 0)],
        NewFolder: [new _b.c("E", 3)],
        MarkAsRead: [new _b.c("K", 0)],
        MarkAsUnread: [new _b.c("K", 1)],
        FlagMail: [new _b.c("L", 0)],
        PrintMail: [new _b.c("P", 0)],
        UndoAction: [new _b.c("Z", 2)]
    }
};
_b.bD.prototype = {
    a: function() {
        return "YahooMail"
    },
    b: function(n) {
        return n.toString() in this.c ? this.c[n.toString()] : null
    }
};
_b.p = function(n, t) {
    this.n = Function.createDelegate(this, this.u);
    _b.p.initializeBase(this, [n]);
    this.e = t;
    this.a(this.z.innerHTML);
    this.bn(1)
};
_b.p.d = function(n) {
    var i = n.instance;
    var t = n.newValue;
    try {
        i.z.innerHTML = t || ""
    } catch (r) {
        throw Error.invalidOperation(String.format("Error setting innerHTML.  HTML content={0}, Original exception={1}", t, r));
    }
};
_b.p.prototype = {
    e: null,
    h: !1,
    f: function() {
        return this.eM(_b.p.a)
    },
    a: function(n) {
        this.f() !== n && this.eK(_b.p.a, n);
        return n
    },
    w: function(n) {
        if (this.e && this.e.a().fY().Enabled && _g.a.a().bH.UnblockUnsafeSenderPromptEnabled && this.h !== n) {
            this.h = n;
            this.by("SuppressAnchorNavigation")
        }
        return n
    },
    g: function() {
        return !1
    },
    G: function() {
        _j.i.prototype.G.call(this);
        _j.k.b(this.z, "click", this.n)
    },
    M: function() {
        _j.k.c(this.z, "click");
        _j.i.prototype.M.call(this)
    },
    u: function(n) {
        var o = this;
        var u = _j.i.c(n.b(), function(n) {
            return n.nodeName === "A"
        }, this.z);
        if (u && !this.h && !this.g()) {
            var t = u;
            var i = "";
            try {
                i = t.protocol || ""
            } catch (f) {
                _j.e.b(_a.a.X, "Encountered error trying to determine anchor protocol.")
            }
            var r = !1;
            var e = this;
            Array.forEach(_b.p.c, function(n) {
                n.toUpperCase() === i.toUpperCase() && (r = !0)
            });
            if (r && !this.v(t)) {
                n.c();
                n.d();
                _b.p.b.a(t.href, null, null, !1)
            }
            if (this.g()) {
                n.c();
                n.d()
            }
        }
    },
    v: function(n) {
        if (_j.h.b(n.href)) return !1;
        var i = new _a.P(n.ownerDocument.URL);
        var t = new _a.P(n.href);
        return i.e.toUpperCase() === t.e.toUpperCase() ? !0 : !1
    }
};
_b.A = function(n) {
    this.H = Function.createDelegate(this, this.bU);
    _b.A.initializeBase(this, [n]);
    this.z.setAttribute("FrameBorder", "0");
    _j.k.b(this.z, "load", this.H)
};
_b.A.prototype = {
    g: null,
    bc: function(n) {
        this.z.setAttribute("allowfullscreen", n);
        return n
    },
    q: function(n) {
        if (this.g !== n) {
            this.g = n;
            this.by("LoadCommand")
        }
        return n
    },
    bU: function(n) {
        this.g && this.g.b && this.g.a()
    }
};
_b.cf = function(n) {
    _b.cf.initializeBase(this, [n])
};
_b.cf.prototype = {
    c: function() {
        return _fc.y.prototype.c.call(this)
    },
    a: function(n) {
        _j.h.a(this.z.getAttribute("alt")) || this.z.removeAttribute("alt");
        _j.k.b(this.z, "error", this.l);
        _fc.y.prototype.a.call(this, n);
        return n
    },
    f: function(n) {
        (_a.o.a().K || _a.o.a().I) && this.z.setAttribute("alt", _u.R.Ny)
    }
};
_b.l = function() {};
_b.l.d = function() {
    return _fm.b.b(_fm.a.d, null, ["ms-fcl-ns-b"], [_fm.WebfontSizes.a.r], [_fm.WebfontSizes.a.c], [_fm.WebfontSizes.a.c], null, null)
};
_b.l.o = function() {
    return _fm.d.a("r_jpg.png")
};
_b.l.s = function() {
    return _fm.d.a("thinking16_blue.gif")
};
_b.l.k = function() {
    return _fm.d.a("thinking24.gif")
};
_b.l.t = function() {
    return _fm.d.a("thinking32_blue.gif")
};
_b.l.j = function() {
    return _fm.d.a("loading_whitebg.gif")
};
_b.l.b = function() {
    return _fm.b.a(_fm.a.P, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_b.l.e = function() {
    return _fm.b.a(_fm.a.P, _fm.WebfontSizes.a.a, "ms-fcl-nd-b")
};
_b.l.i = function() {
    return _fm.b.a(_fm.a.P, _fm.WebfontSizes.a.a, "ms-fcl-nt-b")
};
_b.l.g = function() {
    return _fm.b.b(_fm.a.o, null, [_fm.WebfontSizes.a.c, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_b.l.p = function() {
    return _fm.d.a("office_logo_white_small.png")
};
_b.l.q = function() {
    return _fm.d.a("olk_logo_white_cropped.png")
};
_b.l.a = function() {
    return _fm.b.a(_fm.a.p, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_b.l.c = function() {
    return _fm.b.a(_fm.a.r, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_b.l.h = function() {
    return _fm.d.a("swipe_selection.png")
};
_b.l.r = function() {
    return _fm.b.a(_fm.a.J, "ms-bcl-w-b ms-bg-transparent ms-icon-font-circle", _fm.WebfontSizes.b.c)
};
_b.l.m = function() {
    return _fm.d.a("dc-msg.png")
};
_b.l.n = function() {
    return _fm.b.b(_fm.a.n, _fm.a.k, ["ms-bcl-tlr-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-tlr-b", _fm.WebfontSizes.b.d], null, null, null, null, null)
};
_b.l.f = function() {
    return _fm.b.b(_fm.a.n, _fm.a.k, ["ms-bcl-tp-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-tp-b", _fm.WebfontSizes.b.e], null, null, null, null, null)
};
_b.l.l = function() {
    return _fm.b.b(_fm.a.n, _fm.a.k, ["ms-bcl-tp-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-tp-b", _fm.WebfontSizes.b.a], null, null, null, null, null)
};
_b.bb = function(n) {
    _b.bb.initializeBase(this, [n])
};
_b.bb.prototype = {
    d: null,
    g: null,
    h: null,
    k: null,
    l: null,
    c: function(n) {
        if (this.d === n) return n;
        this.d = n;
        this.i();
        return n
    },
    m: function(n) {
        if (this.g === n) return n;
        this.g = n;
        this.i();
        return n
    },
    n: function(n) {
        if (this.h === n) return n;
        this.h = n;
        this.i();
        return n
    },
    i: function() {
        this.a(String.format(this.d || "", this.g, this.h, this.k, this.l))
    }
};
_b.v = function(n, t) {
    this.a = -1;
    this.e = -1;
    _b.v.initializeBase(this, [n, t])
};
_b.v.prototype = {
    d: null,
    b: 0,
    g: !1,
    h: !1,
    j: function(n) {
        if (this.g !== n) {
            this.g = n;
            n && this.bv() && this.bv().t(!1);
            this.by("ClearSelectionOnParentChange")
        }
        return n
    },
    k: function() {
        return !this.d || !this.d.length ? null : this.d
    },
    c: function(n) {
        if (this.d !== n) {
            this.d = n;
            this.by("HighlightedItemClassName")
        }
        return n
    },
    f: function(n) {
        if (n === this.a) return n;
        if (this.w && this.d) {
            var t = "";
            this.kj() && (t = this.kj());
            if (this.a >= 0 && this.a < this.w.a.b()) {
                this.w.a.c(this.a).bH(t);
                this.w.a.c(this.a).gt(0);
                this.e = this.a
            }
            if (n >= 0 && n < this.w.a.b()) {
                this.w.a.c(n).bH(this.k() + " " + t);
                this.w.a.c(n).gt(1);
                this.e = n
            }
            this.a = n;
            this.by("HighlightedIndex")
        }
        return n
    },
    m: function() {
        var n = this.i();
        return n ? n.offsetTop : 0
    },
    l: function() {
        var n = this.i();
        return n ? n.offsetHeight : 0
    },
    du: function(n) {
        var t = _fce.a.prototype.du.call(this, n);
        this.d && this.a === n && t.bH(t.cI + (" " + this.d));
        this.b && t.D(this.b);
        return t
    },
    i: function() {
        if (this.w)
            if (this.a >= 0 && this.a < this.w.a.b()) return this.w.a.c(this.a).z;
            else if (this.e >= 0 && this.e < this.w.a.b()) return this.w.a.c(this.e).z;
        return null
    },
    hf: function(n, t) {
        this.ed || this.cc(n, t);
        this.j(!1);
        this.h && t.d()
    }
};
_b.cg = function() {
    _b.cg.initializeBase(this)
};
_b.cg.prototype = {
    b: function(n) {
        return _a.jT.prototype.b.call(this, n)
    },
    e: function(n, t) {
        _a.jT.prototype.b.call(this, n).t(!1);
        t.t(!0);
        _a.jT.prototype.e.call(this, n, t);
        return t
    },
    c: function(n) {
        n.t(!0);
        _a.jT.prototype.c.call(this, n)
    },
    f: function() {
        for (var n = 0; n < this.a.length; n++) {
            var t = _a.jT.prototype.b.call(this, n);
            t.t(!1)
        }
        _a.jT.prototype.f.call(this)
    },
    d: function(n) {
        n.t(!1);
        return _a.jT.prototype.d.call(this, n)
    },
    g: function(n) {
        this.b(n).t(!1);
        _a.jT.prototype.g.call(this, n)
    },
    h: function(n, t) {
        var i = this.k(n);
        if (i !== -1) {
            this.e(i, t);
            return !0
        } else return !1
    },
    j: function(n, t) {
        t.t(!0);
        _a.jT.prototype.e.call(this, n, t)
    }
};
_b.g = function(n) {
    _b.g.initializeBase(this, [n])
};
_b.g.prototype = {
    c: null,
    b: null,
    d: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.by("SpanCssClass")
        }
        return n
    },
    a: function(n) {
        if (this.c === n) return n;
        this.c = n;
        return n
    },
    P: function() {
        _j.c.prototype.P.call(this);
        var t = this.z.children;
        if (t && !(t.length < 1)) {
            for (var r = new Array(t.length), f = new Array(t.length), n = 0; n < t.length; n++) {
                var o = t[n];
                r[n] = o;
                f[n] = String.format('<div id="a{0}"></div>', n)
            }
            var s = String.format.apply(null, [_ff.g.a(this.c)].concat(f));
            var i = document.createElement("span");
            this.b && _j.k.d(i, this.b);
            i.innerHTML = s;
            _j.k.F(i, r[0]);
            for (var u = 0; u < r.length; u++) {
                var e = i.querySelector(String.format("#a{0}", u));
                _j.k.F(r[u], e);
                _j.k.f(e)
            }
        }
    }
};
_b.F = function(n) {
    this.a = Function.createDelegate(this, this.f);
    _b.F.initializeBase(this, [n]);
    this.bf("click", this.dg || (this.dg = Function.createDelegate(this, this.bI)), null);
    this.S().c(0);
    this.S().a(10)
};
_b.F.prototype = {
    e: !1,
    g: function(n) {
        this.e = n;
        n && this.bn(4);
        return n
    },
    bK: function() {
        return _j.i.prototype.bK.call(this)
    },
    bb: function(n) {
        if (_j.i.prototype.bK.call(this) !== n) {
            _j.i.prototype.bK.call(this) && _j.i.prototype.bK.call(this).i(this.a);
            n && n.j(this.a);
            this.b(n ? n.b : !0);
            _j.i.prototype.bb.call(this, n)
        }
        return n
    },
    d: function() {
        return this.eM(_b.F.a)
    },
    b: function(n) {
        this.eK(_b.F.a, n);
        this.S().p(!n);
        return n
    },
    bI: function(n) {
        this.d() ? this.bK().a() : n.d()
    },
    bz: function() {
        this.bb(null);
        _j.c.prototype.bz.call(this)
    },
    f: function(n, t) {
        this.b(this.bK().b)
    }
};
_b.J = function(n) {
    _b.J.initializeBase(this, [n]);
    this.S().a(12)
};
_b.J.prototype = {
    c: function(n) {
        this.S().d(n);
        return n
    },
    bI: function(n) {
        _b.F.prototype.bI.call(this, n);
        this.d() && this.S().d(1)
    }
};
_b.b = function(n, t, i, r, u) {
    this.nK = Function.createDelegate(this, this.nY);
    this.nL = Function.createDelegate(this, this.oc);
    this.nM = Function.createDelegate(this, this.sT);
    this.qe = Function.createDelegate(this, this.hG);
    this.qF = Function.createDelegate(this, this.tG);
    this.qj = Function.createDelegate(this, this.tc);
    this.ql = Function.createDelegate(this, this.te);
    this.qm = Function.createDelegate(this, this.tf);
    this.qk = Function.createDelegate(this, this.td);
    this.qo = Function.createDelegate(this, this.th);
    this.qr = Function.createDelegate(this, this.tk);
    this.qD = Function.createDelegate(this, this.ra);
    this.qn = Function.createDelegate(this, this.tg);
    this.qq = Function.createDelegate(this, this.tj);
    this.qp = Function.createDelegate(this, this.ti);
    this.qs = Function.createDelegate(this, this.lE);
    this.qu = Function.createDelegate(this, this.tu);
    this.qt = Function.createDelegate(this, this.tt);
    this.qB = Function.createDelegate(this, this.tB);
    this.qy = Function.createDelegate(this, this.ty);
    this.qi = Function.createDelegate(this, this.sX);
    this.qg = Function.createDelegate(this, this.sV);
    this.qA = Function.createDelegate(this, this.tA);
    this.qx = Function.createDelegate(this, this.tx);
    this.qh = Function.createDelegate(this, this.sW);
    this.qf = Function.createDelegate(this, this.sU);
    this.qz = Function.createDelegate(this, this.tz);
    this.qw = Function.createDelegate(this, this.tw);
    this.qv = Function.createDelegate(this, this.tv);
    this.qC = Function.createDelegate(this, this.tC);
    this.qE = Function.createDelegate(this, this.tF);
    this.fL = Function.createDelegate(this, this.gJ);
    this.qd = Function.createDelegate(this, this.sK);
    this.lL = -1;
    this.op = -1;
    this.jl = -1;
    this.jF = -1;
    this.jG = -1;
    this.jd = -1;
    this.hJ = -1;
    this.eR = -1;
    _b.b.initializeBase(this, [n, t]);
    this.ei = t;
    this.dN = i;
    this.fk = r;
    this.bc(this.qd);
    this.bu = new _j.l;
    this.bu.d(this.fL);
    this.bW = new _b.cg;
    var f = this.I();
    this.eF = new _j.g(this.qE, f);
    this.om = new _j.g(this.qC, f);
    this.ol = new _j.g(this.qv, f);
    this.dY = new _j.g(this.qw, f);
    this.eU = new _j.g(this.qz, f);
    this.ej = new _j.g(this.qf, f);
    this.ek = new _j.g(this.qh, f);
    this.jA = new _j.g(this.qx, f);
    this.jB = new _j.g(this.qA, f);
    this.jn = new _j.g(this.qg, f);
    this.jo = new _j.g(this.qi, f);
    this.eo = new _j.g(this.qy, f);
    this.ep = new _j.g(this.qB, f);
    this.eD = new _j.g(this.qt, f);
    this.eE = new _j.g(this.qu, f);
    this.em = new _j.g(this.qs, f);
    this.lD = new _j.g(this.qp, f);
    this.lC = new _j.g(this.qq, f);
    this.lB = new _j.g(this.qn, f);
    this.oo = new _j.g(this.qD, f);
    this.hM = new _j.g(this.qr, f);
    this.hL = new _j.g(this.qo, f);
    this.js = new _j.g(this.qk, f);
    this.hK = new _j.g(this.qm, f);
    this.fm = new _j.g(this.ql, f);
    this.qW = new _j.g(this.qj, f);
    this.hP = new _j.g(this.qF, f);
    window.document.body.setAttribute("unselectable", "on");
    this.nP = this.cd.a() === "TouchWide" ? 1 : 0;
    this.lx = 1;
    _dh.a(u, this)
};
_b.b.prototype = {
    jq: 0,
    dF: 1,
    lf: !1,
    gI: !1,
    dX: null,
    eF: null,
    hI: null,
    hH: null,
    hv: null,
    jm: null,
    lM: null,
    fl: !1,
    bW: null,
    fN: null,
    bu: null,
    dr: null,
    nT: !1,
    fM: !1,
    da: !1,
    lH: !0,
    lJ: null,
    dE: !1,
    gE: !0,
    gF: !1,
    gG: null,
    hF: 0,
    hE: 0,
    dk: null,
    gy: null,
    jk: null,
    fO: null,
    lt: !1,
    fn: null,
    nQ: null,
    ht: null,
    om: null,
    ol: null,
    dY: null,
    eU: null,
    ej: null,
    ek: null,
    jA: null,
    jB: null,
    jn: null,
    jo: null,
    eo: null,
    ep: null,
    eD: null,
    eE: null,
    em: null,
    lD: null,
    lC: null,
    lB: null,
    oo: null,
    lK: !1,
    of: !1,
    hM: null,
    hL: null,
    js: null,
    hP: null,
    gH: null,
    gx: null,
    gz: null,
    je: null,
    hu: null,
    hK: null,
    fm: null,
    qW: null,
    lI: null,
    jp: !1,
    ly: 0,
    lp: 0,
    lk: 0,
    jr: !1,
    og: 0,
    oa: !1,
    gL: !1,
    lx: 0,
    dN: null,
    lv: !1,
    jj: !1,
    hC: !1,
    ei: null,
    hD: null,
    lz: null,
    nP: 0,
    ls: !1,
    jg: 0,
    jf: 0,
    g: function() {
        return this.hu
    },
    tr: function(n) {
        if (!this.lM) {
            this.lM = new _j.g(this.pr, this.I());
            this.by("UpdateFocusBasedOnSelectionCommand")
        }
        return n
    },
    i: function() {
        return this.jg
    },
    tn: function(n) {
        if (this.jg !== n) {
            this.jg = n;
            this.by("DraggedItemType")
        }
        return n
    },
    h: function() {
        return this.jf
    },
    tm: function(n) {
        if (this.jf !== n) {
            this.jf = n;
            this.by("DraggedItemCount")
        }
        return n
    },
    gK: function(n) {
        this.lf !== n && (this.lf = n);
        return n
    },
    tq: function(n) {
        this.lK = n;
        this.lK && this.dC(this.oo);
        return n
    },
    oi: function(n) {
        this.of = n;
        this.of && !this.lK && this.dC(this.hL);
        return n
    },
    tp: function(n) {
        this.lI !== n && (this.lI = n);
        return n
    },
    eS: function(n) {
        if (this.dF !== n) {
            this.dF = n;
            this.oe();
            this.by("SelectionState")
        }
        return n
    },
    cV: function(n) {
        if (this.jq !== n) {
            this.jq = n;
            this.by("SelectionMode")
        }
        return n
    },
    dj: function(n) {
        if (n !== this.bu) {
            this.bu && this.bu.e(this.fL);
            this.bu = n;
            this.qU();
            if (this.bu) {
                this.bu.x.length === 1 && this.fC(this.bu.x[0]);
                this.bu.d(this.fL)
            }
            this.bA("SelectedItems", "SelectionCount")
        }
        return n
    },
    x: function() {
        return _fce.a.prototype.x.call(this)
    },
    bl: function(n) {
        if (n === _fce.a.prototype.x.call(this)) return n;
        _fce.a.prototype.bl.call(this, n);
        _fce.a.prototype.x.call(this) && this.ca() > 0 && this.le(0, this.ca());
        _fce.a.prototype.x.call(this) && this.gL && this.or();
        this.fM && n && this.Z() && this.z.focus();
        return n
    },
    hw: function() {
        return this.bN().c()
    },
    ca: function() {
        return this.bu ? this.bu.x.length : -1
    },
    ok: function(n) {
        if (n === this.fn) return n;
        this.fn && _b.C.isInstanceOfType(this.fn) && this.fn.fv(!1);
        this.fn = n;
        this.fn && _b.C.isInstanceOfType(this.fn) && this.fn.fv(!0);
        return n
    },
    en: function(n) {
        if (n === this.fN) return n;
        this.fN = n;
        return n
    },
    lF: function(n) {
        this.nQ !== n && (this.nQ = n);
        return n
    },
    jx: function(n) {
        this.hI !== n && (this.hI = n);
        return n
    },
    jw: function(n) {
        this.hH !== n && (this.hH = n);
        return n
    },
    ju: function(n) {
        this.hv !== n && (this.hv = n);
        return n
    },
    jv: function(n) {
        this.jm !== n && (this.jm = n);
        return n
    },
    E: function() {
        return this.cb
    },
    bg: function(n) {
        if (n === this.cb) return n;
        !n;
        this.fC(n);
        this.ca() > 0 && this.w && this.lh(!0);
        if (this.cb && this.w) {
            var t = this.bP(this.cb);
            if (t !== -1) {
                this.bu.a(this.cb);
                this.en(n);
                this.B.c(this.bv())
            }
        }
        this.by("SelectedItem");
        return n
    },
    hy: function() {
        return this.E()
    },
    eC: function(n) {
        if (this.w) {
            var t = n !== this.E();
            t && this.jC(!0, !1);
            this.qX(n);
            t && this.lj()
        }
        return n
    },
    jt: function(n) {
        if (this.gy !== n) {
            this.gy = n;
            this.by("DraggedItem")
        }
        return n
    },
    hN: function(n) {
        this.jp !== n && (this.jp = n);
        return n
    },
    oj: function(n) {
        if (this.lH !== n) {
            this.lH = n;
            this.by("ShouldHideSwipeMenu")
        }
        return n
    },
    gA: function() {
        if (!this.lJ && this.B) {
            this.lJ = this.B.a("ListViewSwipeMenuContainer").b();
            var n = this.dX.z;
            var t = _j.k.j(n);
            this.hE = t.b;
            this.hF = _j.k.k(n, !1)
        }
        return this.lJ
    },
    to: function(n) {
        if (this.lv === n) return n;
        this.lv = n;
        this.by("IsWin8MOWAOrBOWA");
        return n
    },
    lG: function(n) {
        if (this.jj !== n) {
            this.jj = n;
            this.by("IsSwipeMenuShown")
        }
        return n
    },
    jz: function(n) {
        if (this.gL !== n) {
            this.gL = n;
            this.by("SupportsMoveNextPrevious")
        }
        return n
    },
    jy: function(n) {
        this.lz !== n && (this.lz = n);
        return n
    },
    cy: function(n) {
        this.nT = n;
        this.fM = n;
        return n
    },
    nN: !1,
    fk: null,
    cM: function() {
        return "#MultiSelectListView"
    },
    I: function() {
        return _a.a.fk
    },
    qM: function() {
        return 150
    },
    hz: function() {
        return !0
    },
    qN: function() {
        return 0
    },
    dq: function() {
        return 0
    },
    bN: function() {
        return this.dX
    },
    hx: function() {
        return Math.ceil(this.hw() / this.nW())
    },
    lm: function() {
        this.eR < 0 && (this.eR = _j.k.g(this.w.z) - this.cZ());
        return this.eR
    },
    cZ: function() {
        if (this.jF <= 0) {
            this.jF = this.bN().z.offsetHeight;
            this.eR = -1;
            this.hJ = -1
        }
        return this.jF
    },
    iu: function() {
        if (this.jG <= 0) {
            this.jG = this.bN().z.offsetWidth;
            this.eR = -1;
            this.hJ = -1
        }
        return this.jG
    },
    bQ: function() {
        if (_fce.a.prototype.bQ.call(this) <= 0) {
            this.gc(1);
            this.cR > 0 && this.gc(Math.floor(this.ll() / this.cR))
        }
        return _fce.a.prototype.bQ.call(this)
    },
    ll: function() {
        return this.jd
    },
    tl: function(n) {
        this.jd !== n && (this.jd = n);
        return n
    },
    jh: function() {
        if (this.hJ < 0) {
            var n = this.nW();
            if (!n) return 0;
            this.hJ = Math.ceil(this.cZ() / n);
            this.od()
        }
        return this.hJ
    },
    nU: function() {
        return this.nP
    },
    dD: function(n, t, i, r, u) {
        var f = !r && this.ts(t, i);
        if (f) {
            this.tK(t, i);
            this.jC(this.hC, !0)
        }
        var e = this.jD();
        this.nZ(n, t, i, u);
        e || this.gw();
        this.fl = !1;
        f && this.lj()
    },
    nX: function() {},
    lh: function(n) {
        if (this.bu) {
            this.bu.e(this.fL);
            this.bu.g();
            this.qH();
            n && this.en(null);
            this.bu.d(this.fL)
        }
    },
    sI: function() {
        if (this.bu)
            for (var n = 0; n < this.x().b(); n++) {
                var t = this.x().c(n);
                this.bu.w(t) && this.bu.p(t, !0)
            }
    },
    l: function(n) {
        if (this.ca() < 1 && !this.dP || this.nN) {
            "preventDefault" in n && n.preventDefault();
            return
        }
        this.jr = !1;
        this.dP && this.jt(this.cp(this.dP.V()));
        this.gz && this.gz.a();
        "stopPropagation" in n && n.stopPropagation()
    },
    j: function(n) {
        var t = n;
        this.oa = t.ctrlKey
    },
    k: function(n) {
        if (this.ca() < 1 && !this.gy) {
            "preventDefault" in n && n.preventDefault();
            return
        } else {
            if (_b.s.b === 2) {
                if (this.oa && this.gx) {
                    _a.b.g("DD");
                    this.gx.a()
                } else if (this.gH) {
                    _a.b.g("DD");
                    this.gH.a()
                }
            } else this.nX();
            "stopPropagation" in n && n.stopPropagation()
        }
        this.je && this.je.a();
        this.jt(null)
    },
    dw: function(n) {
        _fce.a.prototype.dw.call(this, n);
        if (!_j.C.a(this.cx)) {
            n.cx = this.cx;
            n.bn(4)
        }
    },
    ea: function(n) {
        var t = n.be().z;
        t && _b.h.g(t, this.cM());
        _fce.a.prototype.ea.call(this, n);
        _j.C.a(this.cx) || n.cL(4)
    },
    cN: function(n, t, i) {
        _fce.a.prototype.cN.call(this, n, t, i);
        this.gL && this.or()
    },
    H: function() {
        _fce.a.prototype.H.call(this);
        if (this.B) {
            this.dX = this.B.a("ScrollRegion");
            this.dX && _j.k.b(this.dX.z, "scroll", this.qe)
        } else this.dX = null
    },
    bz: function() {
        this.bu && this.bu.e(this.fL);
        if (this.dX) {
            this.dX.e(this.nM);
            _j.k.c(this.bN().z, "scroll")
        }
        _fce.a.prototype.bz.call(this)
    },
    P: function() {
        _fce.a.prototype.P.call(this);
        this.da && this.lN()
    },
    G: function() {
        _fce.a.prototype.G.call(this);
        this.bu && this.le(0, this.bu.x.length);
        this.gL && this.dN.b(_y.cr, this.nL);
        this.qL();
        this.dX && this.dX.d(this.nM);
        this.ei.h(this.nK)
    },
    qL: function() {
        this.nT && this.tH()
    },
    tH: function() {
        this.bu && this.bu.x.length ? this.bR && this.cv() : this.R()
    },
    nZ: function(n, t, i, r) {
        switch (t) {
            case 1:
                this.en(n);
                this.gC(n);
                break;
            case 2:
            case 3:
                if (!this.jp || !i || this.ca() !== 1) {
                    this.en(n);
                    this.eQ(n, i, t)
                }
                break;
            case 4:
                var u = this.x().h(n, this.cs);
                u >= 0 && this.ji(u, t);
                break
        }
    },
    nY: function() {
        this.qV()
    },
    qV: function() {
        this.jF = -1;
        this.jG = -1;
        this.jd = -1;
        this.gc(-1)
    },
    bE: function() {
        this.bu && this.bu.e(this.fL);
        _fce.a.prototype.bE.call(this)
    },
    M: function() {
        this.gL && this.dN.c(_y.cr, this.nL);
        this.ei.j(this.nK);
        this.oj(!0);
        this.fO = null;
        _j.c.prototype.M.call(this)
    },
    kw: function(n) {
        if (this.cb) {
            var t = this.bu.m(this.cb, this.cs);
            t === -1 && this.bu.a(this.cb)
        }
        this.qG(n);
        this.bR && this.cv()
    },
    eW: function(n) {
        if (_fce.e.isInstanceOfType(n) && this.bW.i(n)) {
            n.bD = !0;
            return
        }
        this.dk === n && this.hB(n);
        _fce.a.prototype.eW.call(this, n)
    },
    kr: function(n) {
        if (this.jk === n) {
            _j.k.f(this.gA().z);
            this.jk = null
        }
    },
    sK: function() {
        var n = new _b.C(window.document.createElement(this.fX()));
        n.ck(this);
        return n
    },
    ix: function(n, t) {
        if (this.ei.a() === "Mouse") _fce.a.prototype.ix.call(this, n, t);
        else {
            var i = this.da;
            _b.h.a(n.z, _b.h.h(n.z, t, i), this.cM(), !1, !1)
        }
    },
    fZ: function(n, t) {
        var i = t.a() - 1 == 2;
        var r = this.rb(t);
        if (this.ed || r)
            if (n.e()) {
                i || (this.jr = !0);
                this.ob(n)
            } else t.a() - 1 ? i && this.kk() && this.fB(n, t) : this.cc(n, t);
        this.cd.a() !== "Mouse" && this.sN(n, t);
        this.mZ(n);
        this.ey(t)
    },
    mQ: function(n, t) {
        if (this.jr) {
            this.cc(n, t);
            this.jr = !1
        }
        this.cd.a() !== "Mouse" && this.lr(n, t);
        this.ed && (this.fl = !1);
        this.fV()
    },
    hf: function(n, t) {
        if (!this.da || !this.dE && !this.gF && !n.bc()) {
            var i = this.rb(t);
            this.ed || i || this.cc(n, t);
            this.ey(t)
        }
    },
    ec: function(n, t) {
        _fce.a.prototype.ec.call(this, n, t);
        this.da && t.c()
    },
    cc: function(n, t) {
        if (!this.lw()) {
            this.cO(new _ff.r(t, 3));
            this.dk && this.hB(this.dk);
            var r = this.qP(t);
            var i = this.nO(r);
            this.os(n, t);
            i && this.nS()
        }
    },
    nO: function(n) {
        return !this.gI || n === 1
    },
    fB: function(n, t) {
        this.cO(new _ff.r(t, 4));
        this.os(n, t)
    },
    ko: function(n) {
        return this.cW(n, this.E()) || this.bu.m(n, this.cs) !== -1
    },
    le: function(n, t) {
        if (this.x() && this.x().b() > 0 && t > 0 && this.w) {
            for (var u = -1, i = -1, r = n; r < n + t; r++) {
                i = this.sH(this.bu.x[r]);
                i !== -1 && (u = i)
            }
            this.oq(u)
        }
    },
    li: function() {
        if (this.dr) {
            var t = this.bP(this.dr);
            var n = this.w.a.c(t);
            n && n.bd(!1);
            this.dr = null
        }
    },
    lu: function(n) {
        return 0 <= n && n < this.x().b()
    },
    sM: function() {
        return this.bN().z.scrollTop
    },
    jC: function(n, t) {
        return
    },
    lj: function() {
        return
    },
    jE: function(n) {
        return
    },
    nR: function() {
        return
    },
    ev: function() {
        var n = this.el(0, !1, 1);
        n && n.R()
    },
    ew: function() {
        var n = this.el(1, !1, 1);
        n && n.R()
    },
    pK: function() {
        this.ew()
    },
    pH: function() {
        this.ev()
    },
    pI: function() {
        var n = this.el(2, !1, 1);
        n && n.R()
    },
    pJ: function() {
        var n = this.el(3, !1, 1);
        n && n.R()
    },
    dL: function() {
        _fce.a.prototype.dL.call(this);
        this.bv() && this.bN().a(0)
    },
    gb: function() {
        _fce.a.prototype.gb.call(this);
        this.bv() && this.bN().f(100)
    },
    iB: function() {
        _fce.a.prototype.iB.call(this);
        this.bN() && (this.og = this.bN().c())
    },
    iC: function() {
        _fce.a.prototype.iC.call(this);
        this.bN() && this.bN().a(this.og)
    },
    lg: function(n, t) {
        var i = this.sM();
        var u = i + this.cZ();
        var f = this.dW(n);
        var e = n.z.offsetTop;
        t.val = e + this.qN();
        var r = t.val + f;
        return i > r ? 2 : u < t.val ? 1 : i > t.val && i <= r ? 4 : i < t.val && u <= r ? 3 : 0
    },
    hA: function() {
        this.ly || this.bv() && (this.ly = this.bv().z.offsetHeight);
        return this.ly
    },
    nV: function() {
        if (!this.lp)
            for (var i = this.w.a, r = i.b(), n = 0; n < r; n++) {
                var t = i.c(n);
                if (t.bw === this.cQ && !t.bp()) {
                    this.lp = t.z.offsetHeight;
                    break
                }
            }
        return this.lp
    },
    nW: function() {
        if (!this.lk)
            for (var i = this.w.a, r = i.b(), n = 0; n < r; n++) {
                var t = i.c(n);
                if (t.bw !== this.cQ && !t.bp()) {
                    this.lk = t.z.offsetHeight;
                    break
                }
            }
        return this.lk
    },
    dW: function(n) {
        return n && n.z ? _j.k.g(n.z) : 0
    },
    oc: function(n) {
        n.b || (n.a === "Previous" ? this.ew() : n.a === "Next" && this.ev());
        this.or()
    },
    od: function() {},
    ob: function(n) {},
    ot: function(n, t) {},
    sN: function(n, t) {
        var o = t.a() - 1 == 2;
        this.ls = !1;
        if (!this.da || !this.lw())
            if (this.cd.a() !== "TouchWide") this.mZ(n);
            else if (!n.e() && !(_a.o.a().I && !this.hw())) {
            var r = this;
            _j.m.a().a(this.I(), "HandleTouchStart:ShowSelection", function() {
                r.ls || r.qY(r.cp(n.V()))
            }, 100)
        }
        if (this.da) {
            console.log("scm: Starting swipe; IsInertiaScrolling=" + this.bN().be());
            if (!this.bN().be()) {
                var f = this;
                var s = function(t) {
                    f.qQ(n, t, !1)
                };
                var e = this;
                var u = function(t) {
                    e.lr(n, t)
                };
                var i = n.be().z;
                if (i) {
                    _b.h.e(i, _b.h.m(i, s), "MultiSelectListViewTouchMove");
                    _b.h.b(i, _b.h.l(i, u), "MultiSelectListViewTouchMove")
                }
            }
            this.tE(n, t);
            o && this.qQ(n, t, !0)
        }
        this.lt = !0;
        this.pM(!0)
    },
    lr: function(n, t) {
        n.dK(!1);
        this.lt = !1;
        this.pM(!1);
        if (this.da) {
            var i = n.be().z;
            if (i) {
                _b.h.o(i, "MultiSelectListViewTouchMove");
                _b.h.k(i, "MultiSelectListViewTouchMove")
            }
            this.tD(n, t)
        }
        this.cd.a() !== "TouchWide" || !this.dr || this.ht || this.hw() || this.qI()
    },
    gB: function(n, t) {
        var i;
        switch (n.a) {
            case 2:
                i = this.hA();
                break;
            case 1:
                i = -this.hA();
                break;
            case 8:
                i = this.hA() + this.nV();
                break;
            case 7:
                i = -this.hA() - this.nV();
                break;
            case 4:
                i = this.cZ();
                break;
            case 3:
                i = -this.cZ();
                break;
            case 5:
                i = -this.bN().c();
                break;
            case 6:
                i = this.lm();
                break;
            default:
                _j.e.c(this.I(), "Unknown scrollevent");
                return
        }
        this.bN().a(this.bN().c() + i);
        t && t()
    },
    eB: function() {
        if (this.dr) {
            this.dD(this.dr, 1, !1, !1, null);
            this.dr = null
        }
    },
    tC: function() {
        this.el(3, !0, 1)
    },
    tv: function() {
        this.el(2, !0, 1)
    },
    tw: function() {
        this.el(0, this.hz(), 1)
    },
    tz: function() {
        this.el(1, this.hz(), 1)
    },
    sU: function() {
        var n = this.el(0, !1, 4);
        n && n.R()
    },
    sW: function() {
        var n = this.el(1, !1, 4);
        n && n.R()
    },
    tx: function() {
        this.lA(0, this.hz(), 1)
    },
    tA: function() {
        this.lA(1, this.hz(), 1)
    },
    sV: function() {
        this.lA(0, !1, 4)
    },
    sX: function() {
        this.lA(1, !1, 4)
    },
    cv: function() {
        if (this.bv()) this.bv().R();
        else if (this.bW && this.bW.a.length > 0) {
            var n = this.bW.b(this.bW.a.length - 1);
            n.z.parentNode && n.R()
        }
    },
    eL: function() {
        this.bv() ? _fce.a.prototype.eL.call(this) : this.bW && this.bW.a.length > 0 ? this.bW.b(this.bW.a.length - 1).dI(this.ir()) : _fce.a.prototype.eL.call(this)
    },
    hG: function(n) {
        this.cd.a() !== "TouchWide" ? this.fV() : this.cd.a() === "TouchWide" && this.dr && !this.ht && this.qI()
    },
    iJ: function(n, t) {
        return _fce.a.prototype.iJ.call(this, n, t) ? _ff.t.isInstanceOfType(this.V()) && !this.bu.w(this.V().bs(t.V()), this.cs) || !_ff.t.isInstanceOfType(this.V()) && !this.bu.w(t.V(), this.cs) : !1
    },
    mF: function() {
        this.fM && this.bR && (!this.eu || this.mM()) && this.cv()
    },
    oh: function() {
        return this.jq === 1
    },
    gJ: function(n, t) {
        var i = this.jD();
        this.li();
        switch (t.c) {
            case 0:
                this.le(t.d, t.a.length);
                break;
            case 2:
                this.ta(t.b);
                break;
            case 3:
                this.tb(t.a, t.b);
                break;
            case 4:
                this.qU();
                break;
            default:
                break
        }
        i || this.gw();
        this.by("SelectionCount")
    },
    mN: function() {
        return _fce.a.prototype.mN.call(this) && !!this.bu
    },
    on: function() {
        this.eS(0);
        this.ex(0)
    },
    jD: function() {
        var n = !this.dF;
        n || this.on();
        return n
    },
    el: function(n, t, i) {
        if (this.ca() <= 0) {
            this.dL();
            return this.w.a.c(0)
        }
        var v = this.ln();
        var r = v;
        switch (n) {
            case 0:
                r += this.bQ();
                break;
            case 1:
                r -= this.bQ();
                break;
            case 3:
                r += 1;
                break;
            case 2:
                r -= 1;
                break
        }
        var h = r + this.dq();
        if (!this.lu(h)) return null;
        var o = this.bP(this.x().c(v));
        var p = this.w.a.c(o);
        if (!p) return null;
        var u = this.bP(this.x().c(r));
        var f = this.w.a.c(u);
        if (!f || !f.z) return null;
        var c;
        var w, k;
        var b = (k = this.lg(p, w = {
            val: c
        }), c = w.val, k);
        (b === 2 || b === 1) && this.dX.a(c);
        var y;
        var l, a;
        var d = (a = this.lg(f, l = {
            val: y
        }), y = l.val, a);
        if (!d) {
            t ? this.eT(r) : this.dD(this.x().c(r), i, !1, !1, null);
            return f
        }
        var s;
        s = n && n !== 3 ? u === o - 1 || u === o - this.bQ() ? 1 : 7 : u === o + 1 || u === o + this.bQ() ? 2 : 8;
        var e = this;
        this.gB(new _a.dT(s), function() {
            if (e.lu(h)) {
                r = h - e.dq();
                r < 0 || r > e.x().b() - 1 || e.dD(e.x().c(r), i, !1, !1, null)
            }
        });
        return f
    },
    gw: function() {
        this.eS(1)
    },
    gC: function(n) {
        this.qX(n)
    },
    eQ: function(n, t, i) {
        if (t) this.bu.p(n, !0);
        else if (this.ca()) {
            this.cd.a() === "Mouse" && this.ca() === 1 && this.bv() && this.bv().bW();
            this.gD(null);
            this.bu.a(n)
        } else this.gC(n)
    },
    ji: function(n, t) {
        var r = -1;
        var i = -1;
        var a = this.qO();
        var c;
        if (a >= 0) {
            i = a;
            r = n;
            if (r === i) {
                this.gC(this.x().c(i));
                return
            }
            c = !1
        } else {
            var e = this.x().h(this.bu.x[this.bu.x.length - 1], this.cs);
            if (e === -1) return;
            var u = this.lz[this.fN.p()];
            var v = n + this.dq();
            var h = e + this.dq();
            if (v > u && h < u || v < u && h > u) return;
            var y = h > u;
            var s;
            var o;
            if (y) {
                s = 0;
                o = e
            } else {
                s = e;
                o = this.x().b() - 1
            }
            for (var l = s; l <= o; l++)
                if (!this.bu.w(this.x().c(l))) return;
            i = y ? 0 : this.x().b() - 1;
            r = n;
            c = !0
        }
        this.gD(null);
        c ? this.sI() : this.lh(!1);
        for (var f = i; f !== r;) {
            var p = this.x().c(f);
            this.bu.a(p);
            i < r ? f++ : f--
        }
        this.bu.a(this.x().c(r))
    },
    lq: function(n, t) {},
    oe: function() {
        this.lN()
    },
    qI: function() {
        this.li();
        var n = this.bv();
        n && n.bd(!0)
    },
    qU: function() {
        this.qH();
        this.sY()
    },
    sY: function() {
        this.w && this.le(0, this.ca())
    },
    qH: function() {
        this.ok(null);
        if (this.bW) {
            for (var i = this.bW.a.length, n = i - 1; n >= 0; n--) {
                var t = this.bW.b(n);
                t.bD && this.et(t, !1)
            }
            this.da && this.sJ();
            this.bW.f()
        }
    },
    sP: function(n) {
        var t;
        var i = _a.o.a().M;
        var r = i ? 10 : 20;
        t = Math.abs(n.e() - this.lL) >= r && Math.abs(n.f() - this.op) <= 10;
        t && i && n.c();
        console.log("scm: IsTouchMoveSwiping; returning " + t);
        return t
    },
    tE: function(n, t) {
        console.log("scm: SwipeStartEventHandler; isSwiping=" + this.dE);
        if (!this.dE) {
            this.gF = !1;
            this.lL = t.e();
            this.op = t.f();
            this.jl = t.e();
            this.gG = n
        }
    },
    tD: function(n, t) {
        console.log("scm: SwipeEndEventHandler");
        if (this.gG && n === this.gG) {
            this.gG = null;
            if (this.dE) {
                if (this.dk === n)
                    if (n.bc()) {
                        this.jE(!1);
                        this.qK(t.e())
                    } else {
                        this.jE(!0);
                        this.qJ(t.e())
                    }
                else this.jE(!1);
                this.sL(n);
                this.gF || this.sQ(n, t);
                this.nR();
                this.dE = !1
            }
        }
    },
    qQ: function(n, t, i) {
        console.log("scm: HandleTouchMoveEventForSwipe");
        this.ls = !0;
        if (this.gG && n === this.gG) {
            if (!this.dE && (this.sP(t) || i)) {
                this.dE = !0;
                this.gE = i ? !1 : t.e() > this.lL;
                this.sO(n)
            }
            if (this.dE && this.dk && n === this.dk) {
                this.gF = i ? !1 : this.gE && t.e() < this.jl || !this.gE && t.e() > this.jl;
                n.bc() ? this.qK(t.e()) : this.qJ(t.e());
                console.log("scm: HandleTouchMoveEventForSwipe -- stopping propagation");
                t.d();
                t.c()
            }
            this.jl = t.e()
        }
    },
    tI: function(n) {
        if (this.dR() && this.dR().b !== 3 && this.dR().b !== 4) {
            var r = this.ca();
            if (!this.dE) {
                var t = this.cp(n.V());
                if (r > this.nU()) {
                    this.oj(!1);
                    var i = this.bu.x[this.ca() - 1];
                    if (this.cW(i, t)) this.hO(n, !0);
                    else {
                        n.bN(!0);
                        n.t(!0)
                    }
                } else this.fO && this.cW(this.fO, t) && this.hO(n, !0)
            }
        }
    },
    tJ: function(n) {
        if (n.bc()) {
            this.hB(n);
            this.fO = null
        }
        if (this.ca() > 0) {
            var t = this.lo(this.bu.x[this.ca() - 1]);
            this.lw() && this.hO(t, !0)
        }
    },
    sQ: function(n, t) {
        if (this.nU() === 1 && n.e() && this.ca() === 1) {
            n.bc() ? this.cO(new _ff.r(t, 8)) : this.cO(new _ff.r(t, 3));
            this.lN();
            return
        }
        this.cO(new _ff.r(t, 8));
        if (this.ca() !== this.nU() || this.lw()) {
            this.fl = !0;
            this.os(n, t)
        } else n.bc() && this.dD(this.cp(n.V()), 1, !1, !1, null)
    },
    sO: function(n) {
        if (this.dk) {
            if (this.dk !== n && n.bc()) return
        } else this.oj(!1);
        if (!this.gA()) {
            this.dE = !1;
            return
        }
        n.be().z.appendChild(this.gA().z);
        this.dk = n;
        this.jk = n;
        this.fO = this.cp(n.V());
        _j.m.a().j(this.I(), "InitiateSwipeMenu");
        _j.m.a().g()
    },
    sL: function(n) {
        if (this.gF)
            if (n.bc()) this.hO(n, !1);
            else {
                this.hB(n);
                if (this.ca() > 0) {
                    var t = this.lo(this.bu.x[this.ca() - 1]);
                    if (t.bc()) this.hO(t, !0);
                    else if (this.cd.a() === "TouchWide") {
                        this.li();
                        t.bd(!0)
                    }
                }
            }
        else n.bc() ? this.hB(n) : this.hO(n, !1)
    },
    qJ: function(n) {
        var i = this.gA().z;
        _j.k.a(i, "visibility", "Visible");
        var t;
        if (this.gE) {
            t = this.hF - n + this.hE;
            _j.k.a(i, _b.o.a(), _b.o.c(-t, 0))
        } else {
            t = n - this.hE;
            _j.k.a(i, _b.o.a(), _b.o.c(t, 0))
        }
    },
    qK: function(n) {
        var i = this.gA().z;
        var t;
        if (this.gE) {
            t = n - this.hE;
            _j.k.a(i, _b.o.a(), _b.o.c(t, 0))
        } else {
            t = this.hF - n + this.hE;
            _j.k.a(i, _b.o.a(), _b.o.c(-t, 0))
        }
    },
    hO: function(n, t) {
        var r = this.gA();
        if (r) {
            var i = r.z;
            if (t) {
                n.be().z.appendChild(i);
                this.dk = n;
                this.jk = n;
                this.fO = this.cp(n.V())
            }
            i.style.visibility = "Visible";
            _j.k.a(i, _b.o.a(), _b.o.c(0, 0));
            n.bN(!0)
        }
    },
    hB: function(n) {
        n.bN(!1);
        var t = this.gA().z;
        if (this.dk === n) {
            _j.k.a(t, _b.o.a(), _b.o.c(!(this.gE ^ this.gF) ? -this.hF : this.hF, 0));
            t.style.visibility = "hidden";
            this.dk = null;
            this.fO = null
        }
    },
    lw: function() {
        var t = this.bW.a.length;
        if (!t) return !1;
        for (var n = 0; n < t; n++) {
            var i = this.bW.b(n);
            if (i.bc()) return !0
        }
        return !1
    },
    lo: function(n) {
        for (var r = this.bW.a.length, t = r - 1; t >= 0; t--) {
            var i = this.bW.b(t);
            if (this.cW(n, this.cp(i.V()))) return i
        }
        return null
    },
    sJ: function() {
        var i = this.bW.a.length;
        if (i) {
            for (var t = 0; t < i; t++) {
                var n = this.bW.b(t);
                n.bc() && n.bN(!1);
                n === this.dk && this.hB(n)
            }
            this.dE || (this.dk = null)
        }
    },
    rb: function(n) {
        if (!this.lv) return !1;
        var i = !1;
        i = n.m().button === 1;
        if (!i) return !1;
        var r = n.g();
        if (!r) return !1;
        var t = 4;
        _j.u.a(n.m().pointerType) || (t = n.m().pointerType);
        return t !== 4 ? !1 : !0
    },
    lA: function(n, t, i) {
        if (!(this.ca() <= 0)) {
            var f = this.ln();
            var r = n ? f - 1 : f + 1;
            var u = r + this.dq();
            if (!this.lu(u)) {
                this.lq(u, n);
                return
            }
            t ? this.eT(r) : this.dD(this.x().c(r), i, !1, !1, null)
        }
    },
    ty: function() {
        this.qZ(0)
    },
    tB: function() {
        this.qZ(1)
    },
    qZ: function(n) {
        if (this.ca() <= 0)
            if (this.x() && this.x().b() > 0) this.eT(this.hx());
            else return;
        var c = this.ln();
        var s = c + this.dq();
        var h = this.bP(this.x().c(c));
        var r = this.w.a.c(h);
        if (r) {
            var i;
            var e, o;
            var u = (o = this.lg(r, e = {
                val: i
            }), i = e.val, o);
            (u === 2 || u === 1) && this.dX.a(i);
            r.bW();
            var f = this.hw();
            if (!f && n === 1) {
                this.eT(0);
                return
            }
            if (this.lm() - f < this.hA() && !n) {
                this.eT(this.x().b() - 1);
                return
            }
            var l = h - this.hx();
            var a = n ? 3 : 4;
            var t = this;
            this.gB(new _a.dT(a, 0, 250), function() {
                var u = t.hx();
                var i = u + l;
                _fce.e.isInstanceOfType(t.w.a.c(i)) || (i - u > 0 ? i-- : i++);
                var r;
                if (u < 0 || i < u)
                    if (n) {
                        r = s - t.jh() - t.dq();
                        r < 0 && (r = 0)
                    } else {
                        r = s + t.jh() - t.dq();
                        r >= t.x().b() && (r = t.x().b() - 1)
                    }
                else
                    for (;;) {
                        var o = t.w.a.c(i);
                        if (!_fce.e.isInstanceOfType(o)) {
                            i--;
                            continue
                        }
                        var h;
                        var f, e;
                        var c = (e = t.lg(o, f = {
                            val: h
                        }), h = f.val, e);
                        if (!c) {
                            r = t.kl(i);
                            break
                        }
                        if (i <= u) {
                            r = t.kl(i);
                            break
                        }
                        i--
                    }
                t.eT(r);
                t.lE()
            })
        }
    },
    tt: function() {
        if (this.x().b()) {
            if (!this.hw()) {
                this.eT(0);
                return
            }
            var n = this;
            this.gB(new _a.dT(5), function() {
                n.eT(0);
                n.lE()
            })
        }
    },
    tu: function() {
        if (this.x().b()) {
            if (this.hw() >= this.lm()) {
                this.eT(this.x().b() - 1);
                return
            }
            var n = this;
            this.gB(new _a.dT(6), function() {
                n.eT(n.x().b() - 1);
                n.lE()
            })
        }
    },
    ln: function() {
        return this.dr ? this.x().h(this.dr, this.cs) : this.x().h(this.bu.x[this.bu.x.length - 1], this.cs)
    },
    qO: function() {
        return this.x().h(this.fN, this.cs)
    },
    lE: function() {
        if (!this.ht) {
            this.hC = !0;
            var t = this.qM();
            var i = new Date;
            if (!this.hD || i - this.hD >= t) {
                this.hD = new Date;
                this.eB()
            } else {
                var n = this;
                this.ht = _j.m.a().a(this.I(), "DelayKeyboardNavigateSelection", function() {
                    n.ht = null;
                    n.hD = new Date;
                    n.eB()
                }, t - (i - this.hD))
            }
        }
    },
    ti: function() {
        this.eB();
        this.hI && this.hI.b && this.hI.a()
    },
    tj: function() {
        this.eB();
        this.hH && this.hH.b && this.hH.a()
    },
    tg: function() {
        this.eB();
        this.hv && this.hv.b && this.hv.a()
    },
    tG: function() {
        this.bS() && this.dD(this.bS(), 2, this.bu.w(this.bS()), !1, null)
    },
    qT: function() {
        this.qR() && this.jm && this.jm.a()
    },
    ra: function() {
        this.qR() && (this.bv().bv ? this.bv().bP.a() : this.nS() || this.qT())
    },
    nS: function() {
        if (this.cm && this.cm.b) {
            this.cm.a();
            return !0
        }
        return !1
    },
    qR: function() {
        return !!this.bv() && this.ca() === 1 && this.sc()
    },
    th: function() {
        this.eB();
        this.qT()
    },
    td: function() {
        this.eB();
        this.bu.x.length === 1 && this.nS()
    },
    tk: function() {
        this.eB();
        this.ra()
    },
    tf: function() {
        this.eB();
        this.bv() && this.bv().eB()
    },
    te: function() {
        this.eB();
        if (this.bv()) {
            this.bv().bW();
            this.R()
        }
    },
    os: function(n, t) {
        if (this.bu && this.x()) {
            this.hC = !0;
            var r = this.cp(n.V());
            var i = this.qP(t);
            if (i !== 2 && i !== 3 && this.cW(r, this.E())) {
                if (this.lf) {
                    this.on();
                    this.gw()
                }
                this.li();
                n.bd(!0);
                i === 1 && this.ot(n, t);
                return
            } else {
                var u = n.e();
                this.dD(r, i, u, !1, t)
            }
        }
    },
    qP: function(n) {
        var t = 1;
        if (this.oh()) t = 1;
        else if (this.jq === 3) t = 2;
        else {
            var u = n.h();
            var i = n.g();
            if (this.da) {
                var r = n.a() - 1 == 2;
                if (i && r) {
                    this.fl = !0;
                    return 2
                }
            }
            t = i ? 4 : u ? 3 : this.fl ? 2 : 1
        }
        return t
    },
    qX: function(n) {
        if (n) {
            if (n !== this.E()) {
                var i = this.jD();
                this.bg(n);
                i || this.gw()
            }
        } else {
            var t = this.jD();
            this.gD(null);
            this.lh(!0);
            t || this.gw()
        }
    },
    gD: function(n) {
        this.fC(n);
        this.by("SelectedItem")
    },
    sH: function(n) {
        var i = this.x().h(n, this.cs);
        var t = -1;
        if (i !== -1) {
            if (this.w) {
                t = this.bP(n);
                t !== -1 && t < this.w.a.b() && this.qG(this.w.a.c(t))
            }
            this.fN || this.en(n)
        }
        return t
    },
    qG: function(n) {
        var t = this.qS(n);
        if (t >= 0) {
            var i = this.bW.b(t);
            i.bD && this.et(i, !1);
            this.bW.j(t, n)
        } else this.bW.c(n);
        this.da && this.tI(n)
    },
    ta: function(n) {
        if (this.x() && this.w) {
            for (var i = n.length, t = i - 1; t >= 0; t--) this.sZ(n[t]);
            this.lN()
        }
    },
    sZ: function(n) {
        var t = this.lo(n);
        if (t) {
            this.da && this.tJ(t);
            this.bW.d(t);
            var u = this.bW.a.length;
            var i = this.bP(n);
            if (i !== -1) {
                if (u === 1) {
                    i = this.iv(this.bW.b(0));
                    var r = this.cp(this.bW.b(0).fc());
                    var f = this.x().h(r, this.cs);
                    f >= 0 ? this.gD(r) : this.gD(null);
                    this.en(r)
                } else if (!u) {
                    this.gD(null);
                    this.en(null)
                }
                this.oq(i)
            } else t.bD && this.et(t, !1)
        }
    },
    tb: function(n, t) {
        if (this.x() && this.x().b() > 0 && this.w)
            for (var o = n.length, r = this.w.a, e = r.b(), u = 0; u < o; u++) {
                var i = this.bP(n[u]);
                if (i !== -1 && i < e && !this.sR(r.c(i)))
                    if (this.ca() === 1) {
                        this.oq(i);
                        this.bW.h(this.bW.b(0), r.c(i));
                        this.gD(n[u])
                    } else {
                        var f = this.bP(t[u]);
                        f !== -1 ? this.bW.h(r.c(f), r.c(i)) : this.bW.c(r.c(i))
                    }
            }
    },
    sR: function(n) {
        return this.qS(n) >= 0
    },
    qS: function(n) {
        var i = n;
        var t = this.cp(i.V());
        return this.sS(t)
    },
    sS: function(n) {
        for (var t = 0; t < this.bW.a.length; t++) {
            var i = this.cp(this.bW.b(t).V());
            if (this.cW(i, n)) return t
        }
        return -1
    },
    oq: function(n) {
        if (this.w) {
            var t = null;
            n !== -1 && (t = this.w.a.c(n));
            this.ca() === 1 ? this.ok(t) : this.ok(null)
        }
    },
    tF: function() {
        this.fl = !0
    },
    sT: function() {},
    tc: function() {
        this.eB();
        this.lI.a()
    },
    or: function() {
        if (this.x()) {
            var n = 0;
            if (this.x().b())
                if (this.x().b() === 1) n = 2;
                else {
                    this.E() === this.x().c(0) && (n = 3);
                    var t = this.x().b() - 1;
                    this.E() === this.x().c(t) && (n = 4)
                }
            else n = 1;
            this.lx = n;
            this.dN.a(_y.gZ, new _y.gZ(this.lx))
        }
    },
    eT: function(n) {
        this.qY(this.x().c(n))
    },
    qY: function(n) {
        var u = this.bP(n);
        if (u < 0) {
            this.dD(n, 1, !1, !1, null);
            return
        }
        var t = this.w.a;
        if (this.dr) {
            var f = this.bP(this.dr);
            t.c(f) && t.c(f).bd(!1)
        } else
            for (var e = this.bu.x.length, i = 0; i < e; i++) {
                var o = this.bP(this.bu.x[i]);
                var r = t.c(o);
                r && r.bd(!1)
            }
        t.c(u).bd(!0);
        this.dr = n
    },
    lN: function() {
        if (this.da)
            if (this.ca()) {
                var t = this.lo(this.bu.x[this.ca() - 1]);
                var n = !!t && t.bc();
                this.ca() === 1 && this.jj && this.dE && !n && this.jC(!0, !1);
                this.lG(n)
            } else this.lG(!!this.dk && this.dk.bc());
        else this.lG(!1)
    },
    ts: function(n, t) {
        return this.dE || (n === 2 || n === 3) && t && this.ca() === 1 ? !1 : !0
    },
    tK: function(n, t) {
        n === 4 && this.ca() > 0 ? this.hC = !1 : (n === 2 || n === 3) && (!t && this.ca() > 0 || t && this.ca() > 2) && (this.hC = !1)
    }
};
_b.C = function(n) {
    _b.C.initializeBase(this, [n])
};
_b.C.prototype = {
    fv: function(n) {
        this.eK(_b.C.a, n);
        return n
    },
    cZ: function() {
        return _a.o.a().I
    },
    cX: function() {
        return _a.o.a().K
    },
    fu: function() {
        return _a.o.a().R
    }
};

function InlineImageLoader(n, t, i) {
    this.c = n.a();
    this.b = t;
    this.a = i
}
InlineImageLoader.GetLoader = function() {
    return InlineImageLoader.a
};
InlineImageLoader.prototype = {
    c: !1,
    b: null,
    a: null,
    Load: function(n, t) {
        var i = this;
        this.b.c(function(i) {
            i.b(n, _j.h.d(t) ? "RP" : t)
        }, !1)
    },
    LoadAttachmentImage: function(n, t) {
        var i = this;
        this.a.c(function(i) {
            i.a(n, _j.h.d(t) ? "RP" : t)
        }, !1)
    }
};
_b.bQ = function(n, t, i, r, u) {
    this.k = Function.createDelegate(this, this.q);
    this.l = Function.createDelegate(this, this.r);
    this.f = new _j.q;
    this.d = _a.G.a();
    this.i = n;
    this.e = t;
    this.c = i;
    this.j = r;
    this.h = u
};
_b.bQ.prototype = {
    i: null,
    e: null,
    c: null,
    j: null,
    h: null,
    g: 0,
    b: function(n, t) {
        if (!this.d.b[n]) {
            this.d.a(n, new Array(0));
            this.f.c(n)
        }
        Array.add(this.d.b[n], t)
    },
    a: function() {
        var n = this.o();
        if (n && n.length > 0)
            for (var t = 0; t < n.length; ++t) this.p(n[t], this.l, this.k)
    },
    p: function(n, t, i) {
        var u = _j.h.c(_g.C.u(this.h.x()), n);
        u += "&Scenario=LoadImageFromServerAndStore";
        var f = this.n("GetFileAttachment", u, this.h.x(), 3e4, "GET", !0, this.j);
        var r = this,
            e = this;
        f.m(function(i) {
            r.i.b() && r.t(n, i);
            t(n, _a.eC.a(i).a())
        }, function(t, r) {
            i(n)
        })
    },
    r: function(n, t) {
        this.m(n, t)
    },
    q: function(n) {
        var t = String.format(_g.C.a(), n);
        this.m(n, t)
    },
    m: function(n, t) {
        --this.g;
        this.s(n, t);
        this.a()
    },
    t: function(n, t) {
        var r = decodeURIComponent(n);
        var i = this;
        this.c.a(function() {
            i.e.a(function() {
                i.c.b().n("SaveInlineAttachment", function(n) {
                    i.c.b().bindIn(n, i.c.b().j().b(r), function(u) {
                        if (u && !u.get_data().Synced) {
                            u.get_data().Synced = !0;
                            u.b(n, null);
                            var f = new InlineImageRecord;
                            f.Id = r;
                            f.Blob = t;
                            i.e.b().saveIn(n, i.e.b().fromData(f), 1, null)
                        }
                    }, null)
                }, function() {}, function(n) {
                    _j.e.c(_a.a.cG, "Failed to store inline image: {0}, exception: {1}", r, n.a)
                })
            })
        })
    },
    o: function() {
        for (var n = new Array(0); this.g < 4 && this.f.d.length > 0;) {
            Array.add(n, this.f.d[0]);
            this.f.j(0);
            ++this.g
        }
        return n
    },
    s: function(n, t) {
        var r = this.d.b[n];
        this.d.e(n);
        if (r)
            for (var i = 0; i < r.length; ++i) r[i].src = t
    },
    n: function(n, t, i, r, u, f, e) {
        return new _a.fb(n, t, i, r, u, f, e)
    }
};
_b.bl = function(n) {
    _b.bl.initializeBase(this, [n])
};
_b.bl.prototype = {
    d: !1,
    b: !1,
    c: null,
    a: null,
    e: function(n) {
        this.b !== n && n && !this.d && (this.b = n);
        return n
    },
    P: function() {
        this.y(this.d ? this.a : this.c);
        this.b && this.y(this.a);
        _j.c.prototype.P.call(this)
    }
};
_b.bo = function(n, t, i, r, u, f, e, o, s, h, c, l) {
    this.N = Function.createDelegate(this, this.bk);
    _b.bo.initializeBase(this, [s, h, c]);
    this.b = 4;
    this.v(0);
    this.L = t;
    this.H = n;
    this.K = i;
    this.D = r;
    this.I = f;
    this.O = u;
    this.f = o;
    c.g() && (this.u = !this.u);
    this.f ? this.d = i + e : this.l = i + e;
    this.bj()
};
_b.bo.a = function() {
    return !_a.o.a().N
};
_b.bo.prototype = {
    L: 0,
    H: 0,
    K: 0,
    I: 0,
    O: 0,
    D: 0,
    E: 0,
    i: 0,
    G: null,
    u: !1,
    v: function(n) {
        if (this.i !== n) {
            this.i === 1 && (this.i = 0);
            this.i = n;
            this.T()
        }
        return n
    },
    A: function() {
        return (this.i & 4) > 0
    },
    S: function(n) {
        if (this.E !== n) {
            this.E = n;
            this.T()
        }
        return n
    },
    e: function(n) {
        n.z.style.minWidth = this.O + "px";
        n.z.style.maxHeight = this.I + "px";
        this.v(1);
        _fce.w.prototype.e.call(this, n);
        if (_b.bo.a() && this.u && !this.f) {
            var i = _j.k.r(n.z);
            var t = this.G.x - i.b;
            n.z.style.left = this.G.x + t + "px"
        }
    },
    q: function(n) {
        var i;
        var t;
        if (this.f) {
            var r = _j.k.k(this.a.z, !1) / 2;
            i = _j.k.j(this.a.z).b + r - this.L - this.K;
            t = this.R(this.a.z, this.u) + this.d;
            switch (this.f) {
                case 1:
                    t += _j.k.l(this.a.z, !1);
                    break;
                case 2:
                    t -= _j.k.l(n.z, !1);
                    break;
                default:
                    throw Error.invalidOperation("Context Peek doesnt support the aligment type passed as parameter: " + this.f);
            }
        } else {
            i = this.R(this.a.z, this.u) + this.B();
            t = _j.k.j(this.a.z).a - this.d;
            switch (this.o()) {
                case 4:
                    i += _j.k.k(this.a.z, !1);
                    break;
                case 0:
                    i -= _j.k.k(n.z, !1);
                    break;
                default:
                    throw Error.invalidOperation("Context Peek doesnt support the aligment type passed as parameter: " + this.o());
            }
        }
        return new Sys.UI.Point(i, t)
    },
    bz: function() {
        this.bi();
        _fce.w.prototype.bz.call(this)
    },
    M: function(n, t) {
        var i = new Sys.UI.Point(t.x, t.y);
        if (this.m(i.x, n) !== i.x) {
            this.v(2);
            this.h = !this.h;
            i = this.q(n);
            this.h = !this.h
        }
        if (this.m(i.x, n) !== i.x) {
            this.v(8);
            i = new Sys.UI.Point(t.x, t.y);
            i.x = this.m(i.x, n);
            i.x -= this.bh()
        }
        if (this.y(i.y, n) !== i.y) {
            this.v(this.i | 4);
            var f = this.a.z;
            var u = _j.x.a(n.z).documentElement.clientHeight - _j.k.j(f).a;
            i.y = this.f ? u + this.d : u - this.d
        }
        if (this.y(i.y, n) !== i.y) {
            if (t.y < 0) {
                this.v(this.i & 4);
                i.y = t.y
            }
            var r = _j.x.a(n.z).documentElement.clientHeight;
            if ((this.i & 4) > 0 && i.y + _j.k.g(n.z) > r) {
                i.y = r - _j.k.g(n.z);
                this.v(this.i | 16)
            }
        }
        this.G = i;
        return i
    },
    y: function(n, t) {
        var i = Math.min(n, _j.x.a(t.z).documentElement.clientHeight - this.I);
        i = Math.max(i, 0);
        return i
    },
    bh: function() {
        return this.h ? this.H : -this.H
    },
    T: function() {
        if (!this.f) {
            var n = this.L + this.K;
            this.d = (this.i & 4) > 0 ? n + this.E : n - this.E
        }
    },
    bj: function() {
        this.apcl("AnchorElement", this.N)
    },
    bi: function() {
        this.rpcl("AnchorElement", this.N)
    },
    bk: function(n, t) {
        if (this.a) {
            var i = _j.k.l(this.a.z, !1) / 2;
            this.S(this.D ? this.D : i)
        } else this.S(this.D)
    },
    R: function(n, t) {
        if (this.f) return _j.k.j(n).a;
        else if (this.u) {
            var u = n.getBoundingClientRect();
            var i = 0;
            i = _j.C.a(window.pageXOffset) ? document.documentElement.scrollLeft : Math.abs(window.pageXOffset);
            var r = document.body.clientWidth - document.documentElement.clientWidth - i;
            return u.left + r
        } else return _j.k.j(n).b
    }
};
_b.bg = function(n, t, i, r, u, f) {
    _b.bg.initializeBase(this, [r, u, f]);
    this.b = 5;
    this.u = n;
    this.f = i;
    this.f ? this.l = t + _b.bg.a(n) / 2 : this.d = t + _b.bg.a(n) / 2
};
_b.bg.a = function(n) {
    var t = Math.pow(n, 2);
    t /= 2;
    return Math.sqrt(t)
};
_b.bg.prototype = {
    u: 0,
    i: null,
    v: 0,
    A: function() {
        return (this.v & 4) > 0
    },
    D: function(n, t) {
        n.z.style.width = this.u + "px";
        n.z.style.height = this.u + "px";
        this.v = t.i;
        _fce.w.prototype.e.call(this, n);
        if (_b.bo.a() && _a.v.d() && !this.f) {
            var r = _j.k.r(n.z);
            var i = this.i.x - r.b;
            this.h || (i -= 2);
            n.z.style.left = this.i.x + i + "px"
        }
    },
    q: function(n) {
        var i = this.B();
        var t = this.d;
        if (this.f) switch (this.f) {
            case 3:
                t -= _j.k.l(n.z, !1) / 2;
                break;
            case 4:
                t += _j.k.l(this.a.z, !1) - _j.k.l(n.z, !1) / 2;
                break;
            default:
                throw Error.invalidOperation("NotchPeek doesnt support the aligment type passed as parameter: " + this.f);
        } else switch (this.o()) {
            case 5:
                i -= _j.k.k(n.z, !1) / 2;
                break;
            case 6:
                i += _j.k.k(this.a.z, !1) - _j.k.k(n.z, !1) / 2;
                break;
            default:
                throw Error.invalidOperation("NotchPeek doesnt support the aligment type passed as parameter: " + this.o());
        }
        return new Sys.UI.Point(i, t)
    },
    M: function(n, t) {
        return this.E(this.v, n, t)
    },
    E: function(n, t, i) {
        var r = new Sys.UI.Point(i.x, i.y);
        if ((n & 2) > 0) {
            this.h = !this.h;
            r = this.q(t)
        }
        this.i = r;
        return r
    }
};
_b.cy = function(n, t, i) {
    _b.cy.initializeBase(this, [n, t, i])
};
_b.cy.prototype = {
    f: 0
};
_b.bm = function(n, t, i) {
    _b.bm.initializeBase(this, [n, t, i])
};
_b.bm.prototype = {
    b: 0,
    e: function(n) {
        _b.cz.prototype.e.call(this, n);
        this.b > 0 && (n.z.style.width = _j.h.c("{0}{1}", this.b, "px"))
    },
    d: function() {
        _b.cz.prototype.d.call(this);
        if (this.b > 0) {
            var i = this.X;
            var n = this.C(window.document);
            var t = this.h() + this.b > n ? n - this.h() : this.b;
            i.z.style.width = _j.h.c("{0}{1}", t, "px")
        }
    },
    j: function(n) {
        _b.cz.prototype.j.call(this, n);
        n.z.style.width = ""
    }
};
_b.bc = function(n, t, i) {
    _b.bc.initializeBase(this, [n, t, i])
};
_b.bc.prototype = {
    c: 0,
    b: 0,
    e: function(n) {
        _b.cz.prototype.e.call(this, n);
        _j.k.a(n.z, _fc.n.a(), _j.h.c("{0}{1}", this.c, "px"));
        this.b > 0 && (n.z.style.minWidth = _j.h.c("{0}{1}", this.b, "px"))
    },
    d: function() {
        _b.cz.prototype.d.call(this);
        var n = this.X;
        var i = this.c - this.h();
        var t = Math.max(i, 0);
        _j.k.a(n.z, _fc.n.a(), _j.h.c("{0}{1}", t, "px"));
        this.b > 0 && (n.z.style.minWidth = _j.h.c("{0}{1}", this.b, "px"))
    },
    j: function(n) {
        _b.cz.prototype.j.call(this, n);
        _j.k.a(n.z, _fc.n.a(), "");
        n.z.style.minWidth = ""
    }
};
_b.cz = function(n, t, i) {
    _b.cz.initializeBase(this, [n, t]);
    this.g = i ? "50px" : "0"
};
_b.cz.prototype = {
    a: !1,
    g: null,
    f: 0,
    s: function() {
        return !1
    },
    h: function() {
        return this.f
    },
    i: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.Z() && this.d()
        }
        return n
    },
    e: function(n) {
        _j.k.a(n.z, _fc.n.c(), "0px");
        n.z.style.bottom = "0px";
        n.z.style.top = this.a ? this.g : "0px";
        this.d()
    },
    j: function(n) {
        _j.k.a(n.z, _fc.n.c(), "");
        n.z.style.top = "";
        n.z.style.bottom = ""
    },
    d: function() {
        var n = this.X;
        _j.k.a(n.z, _fc.n.c(), _j.h.c("{0}{1}", this.f, "px"))
    },
    bz: function() {
        _j.bk.prototype.bz.call(this)
    },
    p: function(n, t, i) {
        var r = t ? "overlayIn" : "overlayOut";
        return this.r.a(r, n.z, i, !1)
    }
};
_b.bS = function(n) {
    this.A = Function.createDelegate(this, this.K);
    this.v = Function.createDelegate(this, this.G);
    this.x = Function.createDelegate(this, this.I);
    this.w = Function.createDelegate(this, this.H);
    this.z = Function.createDelegate(this, this.e);
    this.y = Function.createDelegate(this, this.d);
    this.m = new _j.q;
    this.r = [];
    this.s = new _j.g(this.y, _a.a.T);
    this.t = new _j.g(this.z, _a.a.T);
    n.b(_fce.H, this.w);
    n.b(_a.dh, this.x);
    n.b(_a.eZ, this.v)
};
_b.bS.prototype = {
    r: null,
    s: null,
    t: null,
    m: null,
    n: null,
    u: null,
    C: !0,
    q: 0,
    a: function() {
        return this.s
    },
    b: function() {
        return this.t
    },
    c: function() {
        return this.n
    },
    f: function(n) {
        if (this.u !== n) {
            if (this.m.d.length > 0) throw Error.invalidOperation("The region container cannot be set when there is a registered region.");
            this.u = n
        }
        return n
    },
    i: function(n) {
        var t;
        var r = n.a();
        for (t = 0; t < this.m.d.length; t++) {
            var i = this.m.d[t].a();
            if (i > r) break
        }
        this.m.k(t, n)
    },
    j: function(n) {
        if (this.n === n)
            if (this.J(n)) this.d();
            else {
                n.b(!1);
                this.n = null
            }
        this.m.n(n)
    },
    l: function() {
        this.m.l(this.A)
    },
    K: function(n, t) {
        var r = n;
        var i = t;
        return r.a() < i.a() ? -1 : r.a() > i.a() ? 1 : 0
    },
    k: function(n) {
        this.D(n, null)
    },
    d: function() {
        var n = this;
        this.p(!0, function(n) {
            return n.c()
        })
    },
    e: function() {
        var n = this;
        this.p(!1, function(n) {
            return n.c()
        })
    },
    g: function() {
        var n = this;
        this.p(!0, function(n) {
            return n.f()
        })
    },
    h: function() {
        var n = this;
        this.p(!1, function(n) {
            return n.g()
        })
    },
    p: function(n, t) {
        var i = this.B(n);
        i && this.D(i, t(i))
    },
    B: function(n) {
        var i = null;
        var t = this.m.d.length;
        if (this.n) {
            var r = this.m.m(this.n);
            i = r === -1 && t > 0 ? n ? this.o(t - 1, n) : this.o(0, n) : this.o(r, n)
        } else t > 0 && (i = n ? this.o(t - 1, n) : this.o(0, n));
        return i
    },
    J: function(n) {
        return n !== this.B(!0)
    },
    o: function(n, t) {
        for (var i = this.m.d.length, u = !1, r = 0; r < i; r++) {
            if (t) n += 1;
            else {
                n -= 1;
                n < 0 && (n += i)
            }
            n %= i;
            if (this.m.d[n].d()) {
                u = !0;
                break
            }
        }
        return u ? this.m.d[n] : null
    },
    D: function(n, t) {
        this.n && this.n.d() && this.n.b(!1);
        this.n = n;
        this.n.b(!0);
        t && t.b && t.a()
    },
    H: function(n) {
        if (n.a.i === 2 || n.a.i === 1) {
            if (n.b) {
                this.q++;
                this.r.push(this.m);
                this.m = new _j.q
            } else {
                this.q--;
                this.m = this.r.pop()
            }
            this.C = !this.q
        }
        n.b && this.n && this.n.e(0)
    },
    I: function(n) {
        this.E(56, n.a)
    },
    G: function(n) {
        this.E(53, n.a)
    },
    E: function(n, t) {
        var i = this.F(n);
        i > -1 && this.m.d[i].h(!t)
    },
    F: function(n) {
        for (var t = 0; t < this.m.d.length; t++)
            if (this.m.d[t].a() === n) break;
        return t < this.m.d.length ? t : -1
    }
};
_b.bh = function(n) {
    this.b = Function.createDelegate(this, this.d);
    _b.bh.initializeBase(this, [n])
};
_b.bh.prototype = {
    a: null,
    c: function(n) {
        if (null === this.a) {
            this.a = new _j.g(this.b, this.I());
            this.by("SelectMessageBodyCommand")
        }
        return n
    },
    d: function() {
        var i = window.getSelection();
        var t = document.createRange();
        var n = this.B.a("ItemReadingPane.MessageBody");
        if (n) {
            t.selectNodeContents(n.z);
            i.removeAllRanges();
            i.addRange(t)
        }
    }
};
_b.by = function(n, t, i, r) {
    var e = n;
    _j.F.g = e.f || (e.f = Function.createDelegate(e, e.c));
    var f = n;
    _j.F.e = f.e || (f.e = Function.createDelegate(f, f.g));
    var u = r;
    _j.F.c = u.s || (u.s = Function.createDelegate(u, u.g));
    _fce.f.g(_b.l.d(), _b.l.g(), _u.R.FB);
    _fce.k.e(_b.l.b(), _b.l.e(), _b.l.i(), _b.l.d());
    _fc.n.i(t);
    _b.p.b = i
};
_b.bB = function(n) {
    InlineImageLoader.a = n
};
_b.q = function(n, t, i, r, u, f, e, o) {
    this.ov = Function.createDelegate(this, this.ub);
    this.ou = Function.createDelegate(this, this.rv);
    this.oy = Function.createDelegate(this, this.rG);
    this.ox = Function.createDelegate(this, this.jQ);
    this.ow = Function.createDelegate(this, this.uf);
    this.jH = Function.createDelegate(this, this.ur);
    this.rd = Function.createDelegate(this, this.uj);
    this.rc = Function.createDelegate(this, this.ui);
    this.re = Function.createDelegate(this, this.uq);
    this.ug = _a.o.a().K ? "DOMMouseScroll" : "mousewheel";
    this.fs = -1;
    this.eq = -1;
    this.jJ = -1;
    this.ia = -1;
    this.ds = -1;
    this.gM = -1;
    this.fu = -1;
    _b.q.initializeBase(this, [n, i, r, e, o]);
    this.jO = t;
    this.ic = f;
    this.oH = i.a() === "TouchNarrow";
    this.oF = f.b() || f.h();
    this.oz = o;
    _dh.a(o, this);
    u.b("vlvPages") && (this.hX = parseInt(u.a.vlvPages.toString(), 10));
    u.b("guardPages") && (this.hU = parseInt(u.a.guardPages.toString(), 10))
};
_b.q.prototype = {
    jO: 0,
    oF: !1,
    bZ: 0,
    cB: 0,
    hR: 0,
    gR: null,
    lZ: null,
    ft: null,
    hY: null,
    oH: !1,
    br: null,
    jP: null,
    oQ: null,
    jT: -1,
    gU: -1,
    fv: !1,
    jK: !0,
    hW: null,
    hS: null,
    fo: !0,
    ma: !1,
    hX: 5,
    hU: 1,
    jR: null,
    lX: 0,
    oJ: 0,
    jS: !1,
    jI: !1,
    mh: !1,
    fQ: !1,
    hV: 0,
    lP: !1,
    lQ: !1,
    lV: !1,
    fp: null,
    gP: 0,
    lY: 0,
    ic: null,
    gQ: 2,
    jN: 1,
    oI: !1,
    oG: !0,
    oE: !0,
    mg: !1,
    lW: !1,
    me: !0,
    gT: !1,
    mf: !0,
    oK: null,
    oL: null,
    fR: null,
    jM: !1,
    mc: function(n) {
        if (this.mf !== n) {
            this.mf = n;
            this.by("SkipSelectionChangeOnRemove")
        }
        return n
    },
    db: function() {
        return this.fs >= 0 ? this.fs : 0
    },
    ck: function(n) {
        if (n !== this.fs) {
            if (n > 0) {
                var t = this.fs === -1;
                this.fs = n;
                this.jK = !1;
                t || this.ul()
            } else {
                this.fs = 0;
                this.oT()
            }
            this.by("NormalRowHeight")
        }
        return n
    },
    x: function() {
        return _b.b.prototype.x.call(this)
    },
    bl: function(n) {
        if (n !== this.x()) throw Error.invalidOperation("Can't set DataSource on SimpleVlv");
        return n
    },
    dt: function(n) {
        if (this.br === n) return n;
        this.hV = 1;
        this.rB();
        if (this.Z() || !this.oE) {
            this.br = n;
            this.rs();
            _b.b.prototype.bl.call(this, this.br ? this.br.a() : null);
            this.ry()
        } else {
            this.br = n;
            _b.b.prototype.bl.call(this, this.br ? this.br.a() : null);
            this.mg = !0
        }
        return n
    },
    rD: function(n) {
        if (this.fv !== n) {
            this.fv = n;
            this.by("Ready");
            if (this.fv) {
                if (this.oG && (this.ic.f() || this.ic.g())) {
                    this.oG = !1;
                    var t = this;
                    _j.m.a().d(this.I(), "ResetCachedDOMValues", function() {
                        t.bM || t.bT || !t.br || t.br.o() || t.un()
                    })
                }
                if (this.lQ) {
                    this.lQ = !1;
                    this.rt()
                }
                if (!this.gT) {
                    this.gT = !0;
                    this.mi()
                }
            }
        }
        return n
    },
    up: function(n) {
        if (this.oQ !== n) {
            this.oQ = n;
            this.jT = 0
        }
        return n
    },
    dc: function(n) {
        n !== this.hX && (this.hX = n);
        return n
    },
    cF: function(n) {
        n !== this.hU && (this.hU = n);
        return n
    },
    dl: function(n) {
        n !== this.jI && (this.jI = n);
        return n
    },
    dO: function(n) {
        n !== this.lP && (this.lP = n);
        return n
    },
    hQ: !1,
    mb: function(n) {
        if (this.gQ === n) return n;
        var t = this.gQ;
        this.gQ = n;
        if (this.gQ === 2) {
            t || this.uh();
            this.rx()
        }
        return n
    },
    tM: function(n) {
        this.bB("OnScrollPositionChanged", n)
    },
    t: function(n) {
        this.bF("OnScrollPositionChanged", n)
    },
    rf: function(n) {
        this.bB("OnDataLoaded", n)
    },
    oN: function(n) {
        this.bF("OnDataLoaded", n)
    },
    tL: function(n) {
        this.bB("OnCtqDatapointCreated", n)
    },
    um: function(n) {
        this.bF("OnCtqDatapointCreated", n)
    },
    uk: function() {
        this.lW = !0;
        this.mi()
    },
    md: function(n) {
        if (!this.fR) {
            this.fR = new _j.g(this.re, this.I());
            this.by("TriggerSelectViewPortItemsCommand")
        }
        return n
    },
    I: function() {
        return _a.a.cH
    },
    qN: function() {
        return this.bZ
    },
    dq: function() {
        return this.br ? this.br.h() : 0
    },
    oz: null,
    lm: function() {
        this.eR < 0 && (this.eR = this.fP() - this.cZ());
        return this.eR
    },
    hx: function() {
        return this.ro(!0)
    },
    ha: function() {
        return this.iL && !!this.br && this.br.bj()
    },
    ll: function() {
        _b.b.prototype.ll.call(this) <= 0 && _b.b.prototype.tl.call(this, _j.k.h(this.B.a("ElementsCanvas").z));
        return _b.b.prototype.ll.call(this)
    },
    ib: function(n) {
        if (this.cB !== n) {
            this.cB = n;
            this.rz()
        }
        return n
    },
    rj: function() {
        return !1
    },
    fP: function() {
        if (this.eq < 0)
            if (this.br) {
                var t = this.gS();
                var n = Math.floor((this.br.b() - this.br.a().x.length) / this.bQ()) * this.db();
                this.eq = t + n;
                this.fQ && (this.eq += this.rl());
                this.eq = this.tU(this.eq);
                this.eR = -1
            } else return 0;
        return this.eq
    },
    tT: function() {
        return this.rq(!1)
    },
    gS: function() {
        if (this.ds < 0) {
            this.ds = this.rr();
            this.eI && (this.ds += this.tW());
            this.bZ < 0 && (this.ds += this.bZ);
            this.ds < 0 && (this.ds = 0)
        }
        return this.ds
    },
    rl: function() {
        return this.cZ() - this.db()
    },
    oC: function() {
        if (this.jJ < 0) {
            var t = (this.hX - 1) / 2;
            var n = t * this.jh() * this.bQ() >> 0;
            if (n <= 0) return 0;
            this.jJ = n
        }
        return this.jJ
    },
    oD: function() {
        if (this.ia < 0) {
            var n = this.hX * this.jh() * this.bQ();
            if (!n) return 0;
            this.ia = Math.ceil(n / 10) * 10
        }
        return this.ia
    },
    tS: function() {
        return this.lY > 0 ? this.lY : 11e5
    },
    rk: function() {
        return this.hQ && !this.ic.b() && this.cd.a() === "Mouse"
    },
    bQ: function() {
        (!this.oI || this.jN <= 0) && this.oU(0, !0);
        return this.jN
    },
    gc: function(n) {
        this.jN = n;
        this.oI = !0;
        return n
    },
    lR: function() {
        return this.lZ ? this.lZ : this.w
    },
    oR: function() {
        this.dD(this.dZ.bs(this.rm(!0)), 1, !1, !1, null)
    },
    ue: function() {
        this.oP(!1)
    },
    rw: function(n, t) {
        this.oK = _j.n.b(_a.a.cH, 517, "SimpleVLV:LoadRowsAroundCondition");
        this.gU = 0;
        this.hS = t;
        var u = -this.oC();
        var r = this.oD();
        var i = new _h.bL(n, u, r);
        this.br.p(i, 100)
    },
    rm: function(n) {
        for (var i = 0, s = this.cz ? this.bU : this.x(), r = null, o = 0, t, h = this.bQ(), u = 0, e = h - 1, f = 0, c = s.b(); f < c; f++) {
            r = this.pv(s.c(f));
            t = _fm.m.isInstanceOfType(r);
            o = this.hT(r);
            !n && (u === e || t) && (i += o);
            if (!t && i + this.bZ >= this.cB && i + this.bZ <= this.cZ() + this.cB) return r;
            n && (u === e || t) && (i += o);
            u = t ? e : ++u % h
        }
        return null
    },
    H: function() {
        _b.b.prototype.H.call(this);
        if (this.B) {
            this.gR = this.B.a("ElementsCanvas");
            this.lZ = this.B.a("ListPanelContainer");
            this.oH && (this.ft = this.B.a("PullDownContainer"));
            var n = this.lR().z;
            n.style.position = "absolute";
            n.style.width = "100%";
            if (this.rk()) {
                _j.k.b(this.bN().z, "mousedown", this.rc);
                _j.k.b(this.bN().z, "mouseup", this.rd)
            }
            this.fo && this.jQ(this.br, "Merging")
        } else {
            this.gR = null;
            this.ft = null
        }
    },
    G: function() {
        var n = _j.n.b(_a.a.cH, 2, "SimpleVLV:ActivateVLV");
        _b.b.prototype.G.call(this);
        if (this.mg) {
            var t = this.cz ? this.bU : this.x();
            this.rs();
            this.ry();
            this.mg = !1
        }
        this.oU(this.rn(), this.fo);
        this.fo && this.oP(this.rj());
        _j.n.a(n);
        this.mi()
    },
    bz: function() {
        this.rB();
        this.dt(null);
        if (this.rk() && this.bN()) {
            _j.k.c(this.bN().z, "mousedown");
            _j.k.c(this.bN().z, "mouseup")
        }
        _b.b.prototype.bz.call(this)
    },
    hA: function() {
        return this.db()
    },
    nV: function() {
        return this.jO
    },
    nW: function() {
        return this.db()
    },
    dW: function(n) {
        return this.hW ? this.hW.f(n) : n.bw === this.cQ ? this.lS(n) : _fce.e.isInstanceOfType(n) && n.u ? this.rp(n) : this.db()
    },
    hT: function(n) {
        return this.hW ? this.hW.e(n) : this.cz && _fm.m.isInstanceOfType(n) ? this.lU(n) ? 0 : this.jO : this.db()
    },
    od: function() {
        this.jJ = -1;
        this.ia = -1
    },
    lr: function(n, t) {
        _b.b.prototype.lr.call(this, n, t);
        if (this.mh) {
            this.hG(null);
            this.mh = !1
        }
    },
    cN: function(n, t, i) {
        this.oM() ? i = 5 : this.eI ? i = this.hV : this.hV = i;
        _b.b.prototype.cN.call(this, n, t, i);
        this.br.i() || this.lT();
        this.ds = -1;
        this.eq = -1;
        if (this.br.d() || this.br.i()) return;
        else if (t.c === 2 && this.br.b() > this.br.a().x.length && !this.kA && this.gQ !== 2) {
            var r = this;
            _j.m.a().d(this.I(), "SimpleVLV::OnCollectionChanged", function() {
                r.br && !r.br.o() && r.fq(null, !1)
            })
        }
    },
    iw: function(n) {
        n && (this.mf || this.bg(null))
    },
    lu: function(n) {
        return n >= 0 && n < this.br.b()
    },
    gB: function(n, t) {
        _b.b.prototype.gB.call(this, n, null);
        this.ib(this.bN().c());
        var i = this;
        this.fq(function(n) {
            t && t()
        }, !1)
    },
    fa: function(n, t, i) {
        this.jK && this.oT();
        i === 4 && this.rg(0, n, t);
        _fce.a.prototype.fa.call(this, n, t, i)
    },
    ks: function(n, t, i) {
        i === 4 && this.rg(2, n, t);
        _fce.a.prototype.ks.call(this, n, t, i)
    },
    pC: function(n) {
        if (!this.db()) {
            var r = this.oO();
            if (r) return this.tY()
        }
        if (this.db() > 0) {
            var t = this.rr();
            var i = this.cZ() - t;
            return Math.ceil(i / this.fs)
        } else return -1
    },
    hG: function(n) {
        _b.b.prototype.hG.call(this, n);
        var t = this.bN().c();
        if (this.cB !== t) {
            this.ib(t);
            this.oB();
            this.bL("OnScrollPositionChanged", this, null);
            if (this.lt) {
                this.mh = !0;
                return
            }
            if (!this.jM) {
                this.jT = 1;
                this.fq(this.jH, !1);
                this.tR()
            }
        }
    },
    nY: function() {
        _b.b.prototype.nY.call(this);
        var n = this.rn();
        this.fQ && this.hZ();
        this.oU(n, !1)
    },
    kc: function() {
        _fce.a.prototype.kc.call(this);
        this.oB()
    },
    rA: function() {},
    rz: function() {},
    rx: function() {},
    rF: function(n) {
        return !0
    },
    M: function() {
        _b.b.prototype.M.call(this);
        this.me = !0
    },
    ru: function() {
        return this.gS() > this.cZ() && this.fP() <= this.cB + this.cZ()
    },
    jQ: function(n, t) {
        if (this.br)
            if (this.br.i()) {
                this.br.M() || this.gU === 2 || this.rH();
                this.lV = !this.br.a().x.length
            } else {
                if (!this.w) return;
                this.ds = -1;
                this.eq = -1;
                if (!this.lV && this.br.n() === 4) return;
                this.lT();
                this.br.M() ? this.tO() : this.rh();
                this.lV = !1
            }
    },
    rt: function() {
        _j.m.a().c(this.I(), "BackFillRowOnLoad", this.ow)
    },
    uf: function() {
        this.bM || this.bT || !this.br || this.br.o() || this.fq(null, !1)
    },
    oB: function() {
        if ((!this.ft && !this.cB || this.ft && this.cB >= 0 && this.cB <= this.fu) && !this.eI && !this.jM) {
            this.bZ && (this.bZ = 0);
            this.hV = 5;
            this.lO();
            return !0
        }
        return !1
    },
    rn: function() {
        return this.dq() + this.ro(!1)
    },
    ro: function(n) {
        for (var u = 0, s = this.w.a, t, o = this.bQ(), f = 0, e = o - 1, r = 0, h = s.b(); r < h; r++) {
            var i = s.c(r);
            t = i.bw === this.cQ;
            !n && (f === e || t) && (u += this.dW(i));
            if (!t && !(_fce.e.isInstanceOfType(i) && i.u) && u + this.bZ >= this.cB && u + this.bZ <= this.cZ() + this.cB) return r;
            n && (f === e || t) && (u += this.dW(i));
            f = t ? e : ++f % o
        }
        return -1
    },
    rq: function(n) {
        for (var o = 0, f = this.w.a, s = f.b(), t = 0; t < s; t++) {
            var r = f.c(t);
            var e = o + this.bZ;
            var u = this.cZ() + this.cB;
            if (r.bw !== this.cQ && !(_fce.e.isInstanceOfType(r) && r.u) && e >= u) {
                var i = t > 0 ? t - 1 : 0;
                return e === u ? i : n ? i > 0 ? i - 1 : 0 : i
            }
            o += this.dW(r)
        }
        return s - 1
    },
    rg: function(n, t, i) {
        if (this.hx() <= t || !this.bN().c()) {
            t <= this.tT() && this.rA();
            return
        }
        var r = this.tX(t, i);
        n === 2 && (r = -r);
        var u = this.w.a.c(t);
        var f = _fce.e.isInstanceOfType(u) ? u.ew : !1;
        n === 2 && f || this.tN(r)
    },
    oP: function(n) {
        if (this.bN()) {
            if (!this.Z() && this.br) {
                this.ma = n;
                return
            }
            n = this.ma ? !0 : n;
            this.ma = !1;
            this.gM = -1;
            this.hR = 0;
            this.ds = -1;
            this.hZ();
            this.fu === -1 && (this.fu = this.ft ? this.ft.z.offsetHeight : 0);
            (n || !this.br) && this.bN().a(0);
            if (!this.br) {
                this.ib(0);
                return
            }
            this.jK && this.oT();
            this.ib(this.bN().c());
            this.fq(this.jH, !0);
            (n || this.bZ >= 0) && this.rh()
        }
    },
    rv: function(n, t) {
        if (!this.br.d()) {
            this.tQ();
            if (this.jP) {
                this.jP(!0);
                this.jP = null
            }
            this.bL("OnDataLoaded", this, null);
            this.oV();
            this.oA();
            if (this.jS) {
                this.jS = !1;
                var i = this;
                _j.m.a().d(this.I(), "triggerLoadNextLoadComplete", function() {
                    i.fq(i.jH, !1)
                })
            }
        }
    },
    ub: function(n, t) {
        this.oA("DataLoadingFailed")
    },
    rG: function(n, t) {
        this.oV();
        this.hZ()
    },
    oV: function() {
        this.br ? this.rD(!this.br.d()) : this.rD(!1)
    },
    rH: function() {
        var o = 0;
        var t = 0;
        this.gM = -1;
        for (var e = this.bZ, s = this.cB, c = this.w.a, l = c.b(), r = this.bQ(), n = 0, f = r - 1, i = 0; i < l; i++) {
            var u = c.c(i);
            var h = this.dW(u);
            if (u.bw === this.cQ) {
                t += h;
                n = f;
                continue
            }
            if (t + e > s) {
                this.hR = t + e - s;
                this.hR < this.cZ() && (this.gM = o + this.br.h());
                return
            }
            o++;
            n === f && (t += h);
            n = ++n % r
        }
    },
    rh: function() {
        var r = this.br.h();
        var u = this.gM;
        var v = this.bQ();
        this.hZ();
        var a = this.ru();
        var w = r + this.br.a().x.length === this.br.b();
        this.bZ = a && w && !this.fQ ? this.fP() - this.gS() : this.jL() * this.db();
        if (u >= 0 && u < r + this.br.a().x.length && !a) {
            var t = 0;
            var e = r;
            var i = 0;
            var y = v - 1;
            var f = this.w.a;
            var n;
            var l = f.b();
            for (n = 0; e < u && n < l; n++, e++) {
                var s = f.c(n);
                var c = this.dW(s);
                if (s.bw === this.cQ) {
                    t += c;
                    i = y;
                    e--
                } else {
                    i === y && (t += c);
                    i = ++i % v
                }
            }
            if (n < l) {
                var o = f.c(n);
                o.bw === this.cQ && (t += this.lS(o))
            }
            var h = this.bZ + t - this.hR;
            if (this.cB !== h) {
                this.bZ += this.cB - h;
                (!this.jL() || this.bZ < 0) && (this.bZ = 0)
            }
        }
        var p = this.oB();
        p || (this.hV === 3 && this.ha() ? this.tP() : this.lO())
    },
    jL: function() {
        return Math.floor(this.dq() / this.bQ())
    },
    tO: function() {
        var v = this.br.h();
        var e = this.br.bi();
        var l = this.bQ();
        var y = this.gS();
        this.hZ();
        this.bZ = this.jL() * this.db();
        if (e >= 0 && e < v + this.br.a().x.length) {
            var i = 0;
            var a = v;
            var u = this.cz ? this.bU : this.x();
            var n = null;
            var o = null;
            var t;
            var r = u.b();
            var c = 0;
            var f = 0;
            var s = l - 1;
            for (t = 0; t < r && a < e; t++) {
                n = u.c(t);
                var h = this.hT(n);
                if (_fm.m.isInstanceOfType(n)) {
                    if (!this.lU(n)) {
                        i += h;
                        f = s;
                        c = i
                    }
                } else {
                    a++;
                    f === s && (i += h);
                    f = ++f % l
                }
            }
            if (t < r) {
                n = u.c(t);
                if (_fm.m.isInstanceOfType(n) && !this.lU(n)) {
                    o = n;
                    t++
                }
            }
            t < r && (n = u.c(t));
            o ? this.hS && !this.hS(n) && (i += this.hT(o)) : t === r - 1 && this.hS && this.hS(n) && (i = c);
            this.ib(this.bZ + i);
            this.bN().a(this.cB)
        }
        this.lR().z.style.top = this.bZ.toString() + "px"
    },
    ur: function(n) {
        if (n) {
            var t = this.br.bk(this.E());
            t && this.bg(t);
            var i = this.br.br(this.bu);
            i
        }
    },
    fq: function(n, t) {
        this.oL = _j.n.b(_a.a.cH, 517, "SimpleVLV:MakeLoadRowsRequest");
        this.gU = 1;
        var s = this.cZ();
        var v = t ? 0 : s * this.hU;
        var p = this.gS();
        var l = this.fP();
        this.fQ && (l -= this.rl());
        var f = this.db();
        if (f) {
            var u = this.cB;
            var a = this.bZ;
            var o = this.bQ();
            if (!this.oM() && this.ua(v) && this.tZ(v, s, l)) {
                n && n(!1);
                return
            }
            var i;
            if (u)
                if (u > p + a || u + s < a) i = Math.floor(u / f) * o;
                else {
                    this.rH();
                    i = this.gM;
                    (i === -1 || this.hR > f) && (i = Math.floor(u / f) * o)
                }
            else i = 0;
            var r = i - this.oC();
            r = r < 0 ? 0 : r;
            var c = this.oD();
            var e;
            if (this.jI && !this.ri(r, c)) {
                var h = this.jh() * o;
                r = i - Math.floor(h / 2);
                e = h * 2;
                this.jS = !0
            } else e = c;
            if (!e) {
                var y = String.format("SimpleVLV.LoadRows: Got a request to load 0 rows. Current State: IsHidden:{0}. IsScrollRegionHidden: {1}. ScrollRegionHeight: {2}. ViewportHeight: {3}.", this.bp(), this.bN().bp(), _j.k.l(this.bN().z, !1), this.cZ());
                Error.invalidOperation(y)
            }
            this.uc(r, e, n)
        }
    },
    uc: function(n, t, i) {
        n = n < 0 ? 0 : n;
        var u = n + t;
        if (this.br.d()) {
            var e = this.ri(n, t);
            if (!this.jI || e) {
                this.jS = !0;
                i && i(!1);
                return
            }
        }
        var r = this.br.h();
        var f = this.br.a().x.length;
        if (r > n || f + r < u) {
            this.jP = i;
            this.lX = n;
            this.oJ = u;
            this.br.p(new _h.o(n, t), 100)
        } else i && i(!1)
    },
    tU: function(n) {
        if (this.gP > 0) n = n > this.gP ? this.gP : n;
        else if (n > this.tS()) {
            var t = n;
            this.rE(n);
            n = this.gR.z.scrollHeight;
            if (t > n) {
                _j.e.a(this.I(), "Attempted to set canvas height above what the browser supports. Attempted height: {0} px, browser limit: {1} px", t, n);
                this.gP = n
            } else {
                _j.e.a(this.I(), "Canvas height set of {0} px is still under browser limit", n);
                this.lY = t
            }
            if (!n && this.br.b() > 0) {
                _j.e.a(this.I(), "Setting canvas height to known acceptable limit of {0} px as browser is returning 0 for allowable scroll height", 11e5);
                n = 11e5;
                this.gP = n
            } else {
                _j.e.a(this.I(), "Setting canvas height to the acceptable upper limit as browser is returning close to its maximum value {0} px", n);
                n = n / 10 * 9;
                this.gP = n
            }
        }
        return n
    },
    hZ: function() {
        this.eq = -1;
        this.rE(this.fP())
    },
    rE: function(n) {
        this.gR && (this.gR.z.style.height = n.toString() + "px")
    },
    rp: function(n) {
        return _j.k.g(n.z)
    },
    tX: function(n, t) {
        for (var u = 0, e = this.bQ(), i = 0, o = e - 1, s = this.w.a, r = n; r < n + t; r++) {
            var f = s.c(r);
            if (_fm.m.isInstanceOfType(f)) {
                u += this.dW(f);
                i = o
            } else {
                i === o && (u += this.dW(f));
                i = ++i % e
            }
        }
        return u
    },
    tN: function(n) {
        var i = this.cd.a() !== "Mouse" || this.oF;
        if (i) {
            this.bZ += -n;
            this.lO()
        } else {
            var t = this.bN().c() + n;
            this.bN().a(t);
            this.ib(t)
        }
    },
    ul: function() {
        this.ds = -1;
        this.hZ();
        this.bZ = this.jL() * this.fs
    },
    oT: function() {
        if (!this.jR) {
            var n = this;
            this.jR = _j.m.a().a(this.I(), "SimpleVLV: TryResetNormalRowHeight", function() {
                if (n.jR) {
                    n.jR = null;
                    n.oO()
                }
            }, 10)
        }
    },
    oO: function() {
        var u = !1;
        if (this.w)
            for (var r = this.w.a, n = 0, f = r.b(); n < f; n++)
                if (_fce.e.isInstanceOfType(r.c(n))) {
                    var t = r.c(n);
                    if (t.bw !== this.cQ && !t.u) {
                        var i = this.rp(t);
                        if (i > 0) {
                            this.ck(i);
                            return !1
                        }
                        if (!i) {
                            u = !0;
                            break
                        }
                    }
                }
        this.jK = !0;
        return u
    },
    oA: function(n) {
        this.jT || this.bL("OnCtqDatapointCreated", this, null);
        this.jT = -1
    },
    tQ: function() {
        this.w;
        switch (this.gU) {
            case 0:
                _j.n.a(this.oK);
                break;
            case 1:
                _j.n.a(this.oL);
                break
        }
        this.gU = -1
    },
    ri: function(n, t) {
        var f = n + t;
        var r;
        var i;
        var u = this.dq();
        if (this.lX !== u) {
            r = this.lX;
            i = this.oJ
        } else {
            r = u;
            i = u + this.br.a().x.length
        }
        return f >= r && n <= i
    },
    rr: function() {
        for (var o = 0, i = this.w.a, s = this.cQ, e = this.bQ(), t = 0, f = e - 1, n = 0; n < i.b(); n++)
            if (_fce.e.isInstanceOfType(i.c(n))) {
                var u = i.c(n);
                var r = u.bw === s;
                (r || t === f) && (o += this.dW(u));
                t = r ? f : ++t % e
            }
        return o
    },
    tW: function() {
        for (var e = 0, u = this.cz ? this.bU : this.x(), f = this.bQ(), t = 0, i = f - 1, n = this.cG; n < this.cG + this.cC; n++) {
            var r = _fm.m.isInstanceOfType(u.c(n));
            (r || t === i) && (e += this.hT(u.c(n)));
            t = r ? i : ++t % f
        }
        return e
    },
    lT: function() {
        if (this.cz) {
            if (this.fp) {
                var n = this.bU.X(this.fp);
                if (n > 0) {
                    var i = this.bU.x[n - 1];
                    var r = this.eb.a(i, null);
                    r.a.a() !== this.fp.a() && this.oS(this.fp, n, !1)
                } else this.oS(this.fp, n, !1);
                this.fp = null
            }
            if (this.bU && this.bU.x.length > 0 && this.br.h() > 0) {
                var t = this.bU.x[0];
                if (_fm.m.isInstanceOfType(t)) {
                    this.fp = t;
                    this.oS(this.fp, 0, !0)
                }
            }
        }
    },
    lS: function(n) {
        var t = n.bp() || this.lU(n.V());
        return t ? 0 : this.jO
    },
    oS: function(n, t, i) {
        n.b(i);
        if (t >= 0) {
            var r = this.tV(n, t);
            r && r.K(i)
        }
    },
    oM: function() {
        return !this.bZ && this.dq() > 0 || this.bZ + this.gS() >= this.fP() && this.dq() + this.br.a().x.length < this.br.b()
    },
    lU: function(n) {
        return n.c() || _y.fc.isInstanceOfType(n) && n.e()
    },
    tV: function(n, t) {
        var u = this.w.a;
        var i;
        i = this.eI ? this.bP(n) : t;
        if (i >= 0 && i < u.b()) {
            var r = u.c(i);
            if (_fc.v.isInstanceOfType(r)) {
                var f = r.V();
                if (f.a() === n.a()) return r
            }
        }
        return null
    },
    ua: function(n) {
        var t = this.bZ > 0 ? this.bZ : 0;
        return this.cB >= t + n || !t
    },
    tZ: function(n, t, i) {
        var r = this.bZ > 0 ? this.bZ : 0;
        return this.cB + t <= r + this.ds - n || r + this.ds >= i
    },
    uo: function() {
        if (!this.hy()) return !1;
        for (var r = this.w.a, e = r.b(), f = 0, t = 0; t < e; t++) {
            var u = r.c(t);
            var s = this.cp(u.V());
            if (this.cW(s, this.hy())) {
                var n = f + this.bZ;
                if (n < this.cB || n > this.cB + this.cZ()) {
                    var o = this;
                    _j.m.a().d(this.I(), "SimpleVLV::ScrollToItemToSelect - scroll to ItemToSelect", function() {
                        o.bN().a(n)
                    })
                } else {
                    var i = this;
                    _j.m.a().d(this.I(), "SimpleVLV::ScrollToItemToSelect - triggger load rows request", function() {
                        i.br && !i.br.o() && i.fq(null, !1)
                    })
                }
                return !0
            } else f += this.dW(u)
        }
        return !1
    },
    lO: function() {
        var n = this.lR().z;
        n.style.bottom = "auto";
        n.style.top = this.bZ.toString() + "px"
    },
    tP: function() {
        var n = this.lR().z;
        var t = this.fP() - (this.bZ + this.gS());
        n.style.top = "auto";
        n.style.bottom = t.toString() + "px"
    },
    tY: function() {
        switch (this.cd.a()) {
            case "Mouse":
                return 14;
            case "TouchWide":
                return 8;
            default:
                return 6
        }
    },
    ud: function(n) {
        if (this.br) {
            this.gU = 2;
            var u = this.oC();
            var t = n - u;
            t = t < 0 ? 0 : t;
            var r = this.oD();
            var i = new _h.o(t, r);
            this.br.p(i, 100);
            this.gM = n
        }
    },
    oU: function(n, t) {
        if (this.cR <= 0) {
            this.gc(1);
            return
        }
        if (!(this.iu() <= 0)) {
            var i = Math.floor(this.iu() / this.cR);
            if (i !== this.jN) {
                this.gc(i);
                this.od();
                this.ds = -1;
                this.eq = -1;
                t || this.ud(n)
            }
        }
    },
    un: function() {
        this.qV();
        this.oO();
        this.eq = -1;
        this.ds = -1;
        this.ia = -1
    },
    rs: function() {
        if (_j.bs.isInstanceOfType(this.br)) {
            var n = this.br;
            n.apcl("Merging", this.ox)
        }
        if (this.br) {
            this.br.apcl("TableSize", this.oy);
            this.br.apcl("Loading", this.ou);
            this.br.apcl("LoadingFailed", this.ov);
            this.fo && this.rv(this.br, "Loading")
        } else this.Z() && this.rG(this.br, "TableSize")
    },
    ry: function() {
        if (this.fo) {
            this.jQ(this.br, "Merging");
            this.oP(!0)
        }
        this.lP && (this.lQ = !0);
        this.oV();
        if (this.br)
            if (this.br.a().x.length > 0) {
                this.gT = !0;
                this.mi()
            } else this.gT = !1;
        else this.gT = !1
    },
    rB: function() {
        if (_j.bs.isInstanceOfType(this.br)) {
            var n = this.br;
            n.rpcl("Merging", this.ox)
        }
        if (this.br) {
            this.br.rpcl("TableSize", this.oy);
            this.br.rpcl("Loading", this.ou);
            this.br.rpcl("LoadingFailed", this.ov)
        }
    },
    mi: function() {
        if (this.gT && this.Z() && this.lW && this.me) {
            this.qL();
            this.me = !1
        }
    },
    tR: function() {
        if (this.ft) {
            this.fu === -1 && (this.fu = this.ft.z.offsetHeight);
            this.hY && (this.hY = _j.m.a().b(this.hY));
            if (this.bN().c() < this.fu) {
                var n = this;
                this.hY = _j.m.a().a(_a.a.cH, "FixPullDownContainer", function() {
                    n.bN().c() < n.fu / 2 ? n.rC(0) : n.rC(n.fu);
                    n.hY = null
                }, 150)
            }
        }
    },
    rC: function(n) {
        _j.k.G(this.bN().z, n, 200)
    },
    uq: function() {
        if (this.fz()) {
            var o = "SelectViewPortItemsInVLV";
            var h = _a.b.b(_a.a.cH, o, !1, null);
            this.on();
            var f = this.E();
            var u = !1;
            this.lh(!0);
            this.bg(null);
            for (var s = this.hx(), l = this.rq(!0), c = this.w.a, n = null, i = s; i <= l; i++) {
                var t = c.c(i);
                var e = t.bw === this.cQ;
                if (!e && this.rF(t.V())) {
                    var r = this.cp(t.V());
                    if (r === f) {
                        u = !0;
                        continue
                    }
                    this.dD(r, 2, !1, !0, null);
                    n || (n = r)
                }
            }
            u && this.dD(f, 2, !1, !0, null);
            n && this.en(n);
            this.gw();
            _a.b.a(h)
        }
    },
    uh: function() {
        var t = this.jL() * this.db();
        if (this.bZ !== t) {
            this.bZ = t;
            this.lO()
        }
        if (!this.uo()) {
            var n = this;
            _j.m.a().d(this.I(), "SimpleVLV::OnClientDeleteOfSelectedItemsComplete - Scroll to panel top", function() {
                n.bN().a(n.bZ)
            })
        }
    },
    ui: function(n) {
        n.b() === this.bN().z && (this.jM = !0)
    },
    uj: function(n) {
        this.jM = !1;
        this.fq(this.jH, !1)
    }
};
_b.bt = function(n, t) {
    if (n < 0 || t < 0) throw Error.argumentOutOfRange("Size Width And Height Cannot Be Negative");
    this.b = n;
    this.a = t
};
_b.bt.a = function() {
    var n = new _b.bt(0, 0);
    n.b = -1;
    n.a = -1;
    return n
};
_b.bt.prototype = {
    b: 0,
    a: 0
};
_b.w = function() {};
_b.w.$$cctor = function() {
    var t = function(n, t) {
        n.left = t
    };
    var n = function(n, t) {
        n.right = t
    };
    _b.w.c = function(i, r) {
        _b.w.c = _a.v.d() ? n : t;
        _b.w.c(i, r)
    };
    _b.w.d = function(i, r) {
        _b.w.d = _a.v.d() ? t : n;
        _b.w.d(i, r)
    };
    _b.w.b = function(n, t, i) {
        _b.w.b = _a.v.d() ? function(n, t, i) {
            n.left = i;
            n.right = t
        } : function(n, t, i) {
            n.left = t;
            n.right = i
        };
        _b.w.b(n, t, i)
    }
};
_b.w.g = function(n, t, i) {
    _b.w.b(n, t, i)
};
_b.w.a = function(n, t) {
    _b.w.c(n, t)
};
_b.w.f = function(n, t) {
    _b.w.d(n, t)
};
_b.w.e = function(n) {
    var t = n.offsetWidth
};
_b.X = function(n) {
    _b.X.initializeBase(this, [n]);
    this.y("SwipeMenu")
};
_b.X.prototype = {
    a: null,
    H: function() {
        _j.c.prototype.H.call(this);
        this.a = this.B ? this.B.a("ActionList") : null
    },
    M: function() {
        _j.c.prototype.M.call(this);
        this.a && this.a.bx()
    },
    bz: function() {
        if (this.a) {
            this.a.dispose();
            this.a = null
        }
        _j.c.prototype.bz.call(this)
    }
};
_b.K = function(n) {
    _b.K.initializeBase(this, [n])
};
_b.K.prototype = {
    a: null,
    b: function() {
        this.a || this.B && (this.a = this.B.a("SwipeMenu"));
        return this.a
    }
};
_b.Y = function() {
    this.g = Function.createDelegate(this, this.k);
    this.j = Function.createDelegate(this, this.n);
    this.i = Function.createDelegate(this, this.m);
    this.h = Function.createDelegate(this, this.l)
};
_b.Y.prototype = {
    f: !1,
    b: function(n) {
        if (n && this.c(n)) {
            var i = _j.k.n(n, "disabledTabIndexChildrenCollection");
            _j.B.a(i, this.h);
            _j.k.m(n, "disabledTabIndexChildrenCollection", null);
            var t = _j.k.n(n, "customTabIndexChildrenCollection");
            _j.B.a(t, this.i);
            _j.k.m(n, "customTabIndexChildrenCollection", null);
            this.m(0, n);
            _j.k.m(n, "tabsDisabled", !1)
        }
    },
    a: function(n) {
        if (n && !this.c(n)) {
            var i = n.querySelectorAll("*[tabindex]");
            _j.B.a(i, this.j);
            _j.k.m(n, "customTabIndexChildrenCollection", i);
            var t = n.querySelectorAll("a,area:enabled,href:enabled,input:enabled,button:enabled,select:enabled,textarea:enabled,iframe");
            _j.B.a(t, this.g);
            _j.k.m(n, "disabledTabIndexChildrenCollection", t);
            this.n(0, n);
            _j.k.m(n, "tabsDisabled", !0)
        }
    },
    d: function(n) {
        if (n && !n.getAttribute("customAriaHidden")) {
            var t = n.getAttribute("aria-hidden");
            _j.h.a(t) ? n.setAttribute("customAriaHidden", "false") : n.setAttribute("customAriaHidden", t);
            n.setAttribute("aria-hidden", "true")
        }
    },
    e: function(n) {
        if (n) {
            var t = n.getAttribute("customAriaHidden");
            t && Boolean.parse(t) ? n.setAttribute("aria-hidden", t) : n.removeAttribute("aria-hidden");
            n.removeAttribute("customAriaHidden")
        }
    },
    c: function(n) {
        var t = _j.k.n(n, "tabsDisabled");
        return t ? t : !1
    },
    n: function(n, t) {
        var i = t.getAttribute("tabindex");
        i && t.setAttribute("customTabIndex", i);
        this.k(n, t)
    },
    m: function(n, t) {
        this.l(n, t);
        var i = t.getAttribute("customTabIndex");
        if (i) {
            t.tabIndex = i;
            t.removeAttribute("customTabIndex")
        }
    },
    k: function(n, t) {
        t.tabIndex = -1;
        _a.o.a().I || this.f || t.setAttribute("disabled", !0)
    },
    l: function(n, t) {
        t.removeAttribute("tabindex");
        _a.o.a().I || t.removeAttribute("disabled")
    }
};
_b.bT = function(n, t, i) {
    _b.bT.initializeBase(this, [n, t, i])
};
_b.bT.prototype = {
    c: null,
    e: null,
    d: !1,
    j: function(n) {
        if (this.c !== n) {
            this.c = n;
            this.f()
        }
        return n
    },
    l: function(n) {
        if (this.e !== n) {
            this.e = n;
            this.f()
        }
        return n
    },
    k: function(n) {
        if (this.d !== n) {
            this.d = n;
            this.f()
        }
        return n
    },
    G: function() {
        _j.i.prototype.G.call(this);
        this.f()
    },
    f: function() {
        this.Z() && this.a(this.d ? this.e : this.c)
    }
};
_b.G = function(n) {
    this.a = n
};
_b.G.a = function(n) {
    var i = 0;
    if (n && n.endsWith("px")) {
        var r = n.substr(0, n.length - 2);
        var t = parseInt(r, 10);
        isNaN(t) || (i = t)
    }
    return i
};
_b.G.prototype = {
    a: null,
    f: function() {
        return this.a.scrollHeight
    },
    c: function() {
        var n = _j.k.i(this.a, "padding-top");
        return _b.G.a(n)
    },
    b: function() {
        var n = _j.k.i(this.a, "padding-bottom");
        return _b.G.a(n)
    },
    e: function() {
        var n = _j.k.i(this.a, "margin-top");
        return _b.G.a(n)
    },
    d: function() {
        var n = _j.k.i(this.a, "margin-bottom");
        return _b.G.a(n)
    }
};
_b.D = function(n) {
    this.a = Function.createDelegate(this, this.f);
    this.c = Function.createDelegate(this, this.h);
    this.b = Function.createDelegate(this, this.g);
    _b.D.initializeBase(this, [n])
};
_b.D.prototype = {
    bq: function() {
        this.e()
    },
    Y: function() {
        _j.i.prototype.Y.call(this);
        this.Z() && this.d()
    },
    G: function() {
        this.d()
    },
    M: function() {
        this.e()
    },
    d: function() {
        var n = this.V();
        if (n) {
            n.c(this.b);
            n.d(this.c);
            n.b(this.a)
        }
    },
    e: function() {
        var n = this.V();
        if (n) {
            n.f(this.b);
            n.g(this.c);
            n.e(this.a)
        }
    },
    g: function(n) {
        window.open(n)
    },
    h: function(n) {
        n && n.length === 2 && window.open(n[0], n[1])
    },
    f: function() {
        window.close()
    }
};
_b.cc = function() {};
_b.cc.prototype = {
    none: 1,
    mailListViewUnreadCount: 2
};
_b.cc.registerEnum("_b.cc", !1);
_b.bY = function() {};
_b.bY.prototype = {
    a: function(n, t) {
        var i = "";
        try {
            i = _b.a.a(n)
        } catch (r) {
            _j.e.c(_a.a.X, r.message)
        }
        return i
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.bv = function() {};
_b.bv.prototype = {
    a: function(n, t) {
        return n === "Text"
    },
    b: function(n, t) {
        return n ? "Text" : "HTML"
    }
};
_b.bw = function() {};
_b.bw.prototype = {
    a: function(n, t) {
        return _j.D.b(n)
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.bZ = function() {};
_b.bZ.prototype = {
    a: function(n, t) {
        if (_a.d.isInstanceOfType(n)) {
            var i = n;
            return i.b(5)
        }
        return n
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.T = function() {};
_b.T.prototype = {
    c: function() {
        return 0
    },
    a: function(n, t) {
        if (_a.d.isInstanceOfType(n)) {
            var r = n;
            try {
                var i = _j.u.d(_a.ji, t.toString());
                return r.b(i, this.c())
            } catch (u) {
                return ""
            }
        } else return ""
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.M = function() {};
_b.M.prototype = {
    c: !1,
    a: function(n, t) {
        if (_a.d.isInstanceOfType(n)) {
            var r = n;
            var i = t;
            i || (i = _a.d.a());
            if (Boolean.isInstanceOfType(t) && t) {
                this.c = !0;
                i = _a.d.a()
            }
            return this.d(r, i)
        }
        return n
    },
    b: function(n, t) {
        throw Error.notImplemented();
    },
    d: function(n, t) {
        var i = null;
        var r = _a.d.e(t);
        var u = r.c(7);
        var e = r.c(-7);
        var f = u.c(7);
        i = n.d().C(t.d()) ? n.b(this.c ? 0 : 18) : r.a(n) <= 0 && n.a(u) < 0 ? n.b(this.c ? 24 : 20) : e.a(n) <= 0 && n.a(r) < 0 || u.a(n) <= 0 && n.a(f) < 0 ? n.b(this.c ? 25 : 7) : n.b(1);
        return i
    }
};
_b.U = function() {};
_b.U.prototype = {
    a: function(n, t) {
        if (_a.d.isInstanceOfType(n)) {
            var r = n;
            var i = t;
            i || (i = _a.d.a());
            return this.c(r, i)
        }
        return n
    },
    b: function(n, t) {
        throw Error.notImplemented();
    },
    c: function(n, t) {
        var i = null;
        var r = _a.d.e(t);
        var u = r.c(7);
        var e = r.c(-7);
        var f = u.c(7);
        i = n.d().C(t.d()) ? n.b(0) : r.a(n) <= 0 && n.a(u) < 0 ? n.b(6) : e.a(n) <= 0 && n.a(r) < 0 || u.a(n) <= 0 && n.a(f) < 0 ? n.b(7) : n.b(1);
        return i
    }
};
_b.bp = function() {};
_b.bp.prototype = {
    a: function(n, t) {
        if (_a.d.isInstanceOfType(n)) {
            var i = n;
            return i.b(4)
        } else return n
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.ca = function() {};
_b.ca.prototype = {
    a: function(n, t) {
        return _g.n.c(n)
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.bH = function() {};
_b.bH.prototype = {
    a: function(n, t) {
        return n.Name
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.cb = function() {};
_b.cb.prototype = {
    a: function(n, t) {
        var i = _ff.g.a(n);
        return _j.h.c(t, i)
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.Z = function() {};
_b.Z.prototype = {
    a: function(n, t) {
        var u = n;
        var i;
        var r = u;
        if (u >= 1073741824) {
            r /= 1073741824;
            i = _u.R.GR
        } else if (u >= 1048576) {
            r /= 1048576;
            i = _u.R.MQ
        } else if (u >= 1024) {
            r /= 1024;
            i = _u.R.Hb
        } else i = _u.R.q;
        return String.format(i, Math.round(r))
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.bq = function() {};
_b.bq.prototype = {
    a: function(n, t) {
        var i = "";
        var r = 0;
        if (Number.isInstanceOfType(n)) {
            i = n.toString();
            r = n
        } else i = n.toString();
        var u = _j.u.d(_b.cc, t.toString());
        2 === u && (r > 1 && r < 100 ? i = String.format(_u.R.Ju, i) : r >= 100 ? i = String.format(_u.R.Qf, i.charAt(0)) : r && r !== 1 || (i = ""));
        return i
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.bI = function() {};
_b.bI.prototype = {
    a: function(n, t) {
        return n - t
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.ba = function() {};
_b.ba.prototype = {
    a: function(n, t) {
        return Number.isInstanceOfType(n) ? n.toString() : n.toString()
    },
    b: function(n, t) {
        if (!String.isInstanceOfType(n)) throw Error.argumentType("value", Object.getType(n), String, "");
        var i = parseInt(n, 10);
        if (isNaN(i)) throw Error.argument("value", "value is not a valid number.");
        return i
    }
};
_b.cd = function() {};
_b.cd.prototype = {
    a: function(n, t) {
        return t.isInstanceOfType(n)
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    }
};
_b.V = function() {};
_b.V.prototype = {
    a: function(n, t) {
        return n ? _j.M.isInstanceOfType(n) ? !n.b() : !1 : !0
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.bi = function() {};
_b.bi.prototype = {
    a: function(n, t) {
        _j.h.a(t) && Error.argument("parameter", "Parameter to NullOrEmptyToStringConverter must be a non-empty string");
        return _j.h.a(n) ? t : n
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.bK = function() {};
_b.bK.prototype = {
    a: function(n, t) {
        return String.isInstanceOfType(n) || !n ? n : n.toString()
    },
    b: function(n, t) {
        return n
    }
};
_b.bL = function() {};
_b.bL.prototype = {
    a: function(n, t) {
        var i = n;
        return !i || !i.Mailbox ? "" : i.Mailbox.Name
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.bJ = function() {};
_b.bJ.prototype = {
    a: function(n, t) {
        var r = n;
        var i = _j.u.d(_g.ko, t.toString());
        return r !== i
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.bj = function() {};
_b.bj.prototype = {
    a: function(n, t) {
        return n <= 1
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.bx = function() {};
_b.bx.prototype = {
    a: function(n, t) {
        var i = n;
        if (_a.o.a().P)
            if (i === "move") i = "copy";
            else if (i === "linkMove") i = "copyLink";
        else if (i === "all") i = "all";
        else throw Error.notImplemented("UserAgentToEffectsAllowedConverter cannot handle this sort of effect yet: " + i);
        return i
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_b.a = function(n, t) {
    this.d = n;
    this.e = t
};
_b.a.a = function(n) {
    switch (n) {
        case 0:
            return "feedbackList";
        case 1:
            return "listHl";
        case 2:
            return "scaleUpOut";
        case 3:
            return "scaleUpIn";
        case 4:
            return "scaleDownOut";
        case 5:
            return "scaleDownIn";
        case 6:
            return "taskInL";
        case 7:
            return "taskInR";
        case 8:
            return "taskInD";
        case 9:
            return "taskInT";
        case 12:
            return "taskOutL";
        case 13:
            return "taskOutR";
        case 10:
            return "taskOutD";
        case 11:
            return "taskOutT";
        case 16:
            return "taskIconMini";
        case 17:
            return "miniIn";
        case 18:
            return "miniOut";
        case 21:
            return "fadeIn";
        case 22:
            return "fadeIn100";
        case 23:
            return "fadeIn200";
        case 24:
            return "fadeOut";
        case 25:
            return "fadeOut50";
        case 26:
            return "fadeOut100";
        case 27:
            return "slideInL";
        case 28:
            return "slideInR";
        case 29:
            return "slideInLShort";
        case 30:
            return "slideInRShort";
        case 31:
            return "slideOutL";
        case 32:
            return "slideOutR";
        case 33:
            return "slideOutLShort";
        case 34:
            return "slideOutRShort";
        case 35:
            return "slideInT";
        case 36:
            return "slideOutT";
        case 37:
            return "statusBarIn";
        case 39:
            return "overlayIn";
        case 40:
            return "overlayOut";
        case 43:
            return "twistyExpand";
        case 44:
            return "twistyCollapse";
        case 52:
            return "mailDown";
        case 53:
            return "slideDownIn";
        case 54:
            return "scaleUpOutShort";
        case 55:
            return "scaleUpInShort";
        case 59:
            return "scaleUpInShortDelayed";
        case 56:
            return "scaleDownOutShort";
        case 57:
            return "scaleDownInShort";
        case 58:
            return "briefHighlight";
        case 61:
            return "overlayInL";
        case 60:
            return "overlayOutL";
        case 62:
            return "nextMessageRpOut";
        case 63:
            return "nextMessageRpIn";
        case 64:
            return "prevMessageRpOut";
        case 65:
            return "prevMessageRpIn";
        case 66:
            return "slideOutLShorterLinear";
        case 67:
            return "slideOutRShorterLinear";
        case 68:
            return "slideInRShort2";
        case 69:
            return "slideInLShort2";
        case 70:
            return "fadeOutLinear150";
        case 71:
            return "notificationBarSlideIn";
        case 72:
            return "notificationBarSlideOut";
        default:
            throw Error.argument("animationType", "Unsupported animation type.");
    }
};
_b.a.prototype = {
    d: null,
    e: null,
    f: function(n) {
        return n.startsWith("slideIn") || n.startsWith("fadeIn") || n.startsWith("fadeOut") || n === "taskOutD" || n === "taskOutT" || n === "taskInD" || n === "taskInT" || n === "miniIn" ? 1 : 0
    },
    c: function(n, t, i, r) {
        if (n === 1e4) return new _fc.A(i);
        var u = _b.a.a(n);
        var f = r ? 2 : this.f(u);
        return this.h(u, t, i, f)
    },
    a: function(n, t, i, r) {
        var u = r ? 2 : this.f(n);
        return this.h(n, t, i, u)
    },
    g: function(n, t, i) {
        return n === 1e4 ? new _fc.A(i) : this.i(_b.a.a(n), t, i)
    },
    i: function(n, t, i) {
        if (!this.d.j()) return new _fc.A(i);
        var r = this.f(n);
        return new _b.bU(t, i, n, this.e, r)
    },
    b: function() {
        return this.d.j()
    },
    h: function(n, t, i, r) {
        return this.d.j() ? new _b.bV(t, i, n, this.e, r) : new _fc.A(i)
    }
};
_b.bn = function(n, t, i, r) {
    this.d = n;
    this.e = t;
    this.c = i;
    this.f = r || 2500
};
_b.bn.b = function(n, t, i, r) {
    return new _b.bn(n, t, i, r)
};
_b.bn.a = function(n, t, i, r) {
    var u = new _j.q;
    u.c(i);
    return new _b.bn(n, t, u, r)
}
window.scriptsLoaded['boot.worldwide.2.narrow.js'] = 1;
window.scriptProcessEnd = window.scriptProcessEnd || {};
window.scriptProcessEnd['boot.worldwide.2.narrow.js'] = (new Date()).getTime();