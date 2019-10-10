/*! Copyright 2006-2015 ClickTale Ltd. */ ! function() {
    ! function() {
        var ct = !0,
            cq = null,
            cp = !1;

        function co(ca) {
            return function() {
                return ca
            }
        }
        var cm;
        var ck;

        function c8(cb) {
            var ca = cb instanceof Array ? [] : {},
                db, da;
            for (da in cb) {
                cb.hasOwnProperty(da) && ((db = cb[da]) && "object" === typeof db && (db instanceof Boolean || db instanceof Number || db instanceof String || (db = c8(db))), ca[da] = db)
            }
            return ca
        }

        function cj() {
            if (ck) {
                return ck
            }
            var ca = window.ClickTaleGlobal;
            ca || (ca = {}, window.ClickTaleGlobal = ca);
            ca.exports = ca.exports || {};
            ca.symbols = ca.symbols || {};
            ca.api = ca.api || {};
            return ck = ca
        }
        var ci;
        cj().symbols.WREH = cL;

        function ch(ca) {
            if (!ci) {
                ca = ca.ClickTaleSettings;
                if ("object" !== typeof ca) {
                    return cq
                }
                ci || (ci = c8(ca))
            }
            return ci
        }

        function cL() {
            ci = cq
        }

        function cg(cb, ca, da) {
            return "function" === typeof cb ? cb : typeof cb === ca ? function() {
                return cb
            } : da || cq
        }

        function cn(cb) {
            var cb = (ch(cb) || {}).Persistence || {},
                ca = cb.EnableStorage,
                du = cb.EnableStreams,
                dt = cb.EnableDispatch,
                db = cb.AutoDispatch,
                da = cb.Providers;
            cb.EnableStorage = function() {
                var dv = "function" === typeof ca ? !!ca() : ca;
                return "boolean" === typeof dv ? dv : ct
            };
            cb.EnableStreams = function() {
                var dv = "function" === typeof du ? !!du() : du;
                return "boolean" === typeof dv ? dv : ct
            };
            cb.EnableDispatch = function() {
                var dv = "function" === typeof dt ? !!dt() : dt;
                return "boolean" === typeof dv ? dv : ct
            };
            cb.AutoDispatch = function() {
                var dv = "function" === typeof db ? !!db() : db;
                return "boolean" === typeof dv ? dv : ct
            };
            cb.Providers = da instanceof Array ? da : [];
            return cb
        }
        var cf;

        function b0() {
            if (!cf) {
                var ca = cj();
                ca.exports.persistence = ca.exports.persistence || {};
                cf = ca.exports.persistence
            }
            return cf
        }

        function ce(cb, ca, da) {
            this.key = cb;
            this.item = ca || {};
            this.u = da || cp
        }

        function cd(cb, ca, da) {
            this.key = cb;
            this.a = ca;
            this.L = da;
            this.T = cp
        }
        try {
            Object.defineProperty({}, "x", {
                get: co(ct)
            })
        } catch (bR) {}

        function cc(cb, ca) {
            this.ra = cb;
            this.la = ca
        }(function(cb, ca) {
            function da() {
                this.constructor = cb
            }
            da.prototype = ca.prototype;
            cb.prototype = new da
        })(cc, Error.prototype);
        cc.prototype.name = "PersistenceMechanismException";

        function dm(cb, ca) {
            this.j = cb;
            this.G = cb.localStorage;
            this.B = ca
        }
        cm = dm.prototype;
        cm.q = function(cb, ca, dt) {
            var db = this.B.stringify(cb.item);
            try {
                this.G.setItem(cb.key, db), dt = ca
            } catch (da) {
                throw new cc(ct, this)
            } finally {
                dt && dt(cb.key)
            }
        };
        cm.remove = function(cb, ca, da) {
            try {
                this.G.removeItem(cb.key), da = ca
            } finally {
                da && da(cb.key)
            }
        };
        cm.get = function(cb, ca) {
            ca && ca(new ce(cb.key, this.B.parse(this.G.getItem(cb.key))))
        };
        cm.all = function(cb, ca, dt) {
            var db = [],
                da;
            for (da in this.G) {
                b8(da, ca, dt) && db.push(new ce(da, this.B.parse(this.G.getItem(da))))
            }
            cb && cb(db)
        };
        cm.clear = function(cb) {
            for (var ca in this.G) {
                b8(ca) && this.G.remove(ca)
            }
            cb && cb(ct)
        };
        cm.w = function(ca) {
            this.clear(ca)
        };

        function b7(cb, ca) {
            var db;
            this.k = cp;
            try {
                if (db = cb.localStorage, this.k = !!db) {
                    db.setItem("ct.p.k", "ct.p.d"), "ct.p.d" === db.getItem("ct.p.k") && db.removeItem("ct.p.k"), c3 || (c3 = new dm(cb, ca))
                }
            } catch (da) {
                this.k = cp
            }
        }
        b7.prototype.$ = co(ct);
        b7.prototype.get = function() {
            return c3
        };
        var c3 = cq;

        function c2() {
            this.db = cq;
            this.r = []
        }
        c2.prototype.qa = 1;
        c2.prototype.pa = "ct.db";
        c2.prototype.ha = "ct.db.os";
        c2.prototype.A = function(cb, ca, da) {
            this.r.push(function() {
                ca.apply(cb, da)
            })
        };

        function dc(cb) {
            for (var ca = 0, da; ca < cb.r.length; ca++) {
                (da = cb.r[ca]) && da()
            }
        }

        function c1(cb, ca, da) {
            this.j = cb;
            this.l = ca;
            this.i = da
        }
        cm = c1.prototype;
        cm.q = function(cb, ca, da) {
            this.i.A(this.l, this.l.q, arguments)
        };
        cm.remove = function(cb, ca, da) {
            this.i.A(this.l, this.l.remove, arguments)
        };
        cm.get = function(cb, ca) {
            this.i.A(this.l, this.l.get, arguments)
        };
        cm.all = function(cb, ca, da) {
            this.i.A(this.l, this.l.all, arguments)
        };
        cm.clear = function(ca) {
            this.i.A(this.l, this.l.clear, arguments)
        };
        cm.w = function(ca) {
            ca && ca(ct)
        };

        function cS(cb, ca, da) {
            this.j = cb;
            this.l = ca;
            this.I = da.db;
            this.t = da.ha
        }
        cm = cS.prototype;
        cm.q = function(dx, dw, dv) {
            var du, dt, db, da = dx.key,
                cb = ct;
            try {
                du = this.I.transaction(this.t, "readwrite"), dt = du.objectStore(this.t), du.onabort = du.onerror = function() {
                    dv && dv(da)
                }, du.oncomplete = function() {
                    var dy = cb ? dw : dv;
                    dy && dy(da)
                }, db = c0(da) ? dt.put(dx.item, da) : dt.add(dx.item, da), db.onerror = function() {
                    cb = cp
                }
            } catch (ca) {
                throw cb = cp, cY(this, ca)
            }
        };
        cm.remove = function(cb, ca, dv) {
            var du, dt, db = ct;
            try {
                du = this.I.transaction(this.t, "readwrite"), du.onabort = du.onerror = function() {
                    dv && dv(cb.key)
                }, du.oncomplete = function() {
                    var dw = db ? ca : dv;
                    dw && dw(cb.key)
                }, dt = du.objectStore(this.t)["delete"](cb.key), dt.onerror = function() {
                    db = cp
                }
            } catch (da) {
                throw db = cp, cY(this, da)
            }
        };
        cm.get = function(cb, ca) {
            var db;
            try {
                db = this.I.transaction(this.t, "readonly"), db.onabort = db.onerror = function() {
                    ca && ca(cb)
                }, db.oncomplete = function(dt) {
                    cb.item = dt.target.result;
                    ca && ca(cb)
                }, db.objectStore(this.t).get(cb.key)
            } catch (da) {
                throw cY(this, da)
            }
        };
        cm.all = function(dx, dw, dv) {
            function du() {
                dx && dx(dt)
            }
            var dt = [],
                db, da, cb;
            try {
                db = this.I.transaction(this.t, "readonly"), db.onabort = db.onerror = db.oncomplete = du, da = db.objectStore(this.t).openCursor(), da.onsuccess = function(dy) {
                    if (cb = dy.target.result) {
                        b8(cb.key, dw, dv) && dt.push(new ce(cb.key, cb.value)), cb["continue"]()
                    }
                }
            } catch (ca) {
                throw cY(this, ca)
            }
        };
        cm.clear = function(cb) {
            var ca;
            try {
                ca = this.I.transaction(this.t, "readwrite"), ca.onabort = ca.onerror = function() {
                    cb && cb(cp)
                }, ca.oncomplete = function() {
                    cb && cb(ct)
                }, ca.objectStore(this.t).clear()
            } catch (da) {
                throw cY(this, da)
            }
        };
        cm.w = function(cb) {
            var ca = ct;
            try {
                this.I.close()
            } catch (da) {
                ca = cp
            }
            cb && cb(ca)
        };

        function cY(cb, ca) {
            var da = cp;
            ca instanceof DOMException && "InvalidStateError" === ca.name && (da = ct);
            return new cc(da, cb)
        }

        function cr() {}
        cm = cr.prototype;
        cm.q = function(cb, ca, da) {
            (ca = da || ca) && ca(cb.key)
        };
        cm.remove = function(cb, ca, da) {
            (ca = da || ca) && ca(cb.key)
        };
        cm.get = function(cb, ca) {
            cb && (cb.item = cq);
            ca && ca(cb)
        };
        cm.all = function(ca) {
            ca && ca([])
        };
        cm.clear = function(ca) {
            ca && ca(cp)
        };
        cm.w = function(ca) {
            ca && ca(ct)
        };

        function b1(ca) {
            this.j = ca;
            this.Q = cp;
            this.i = new c2;
            this.z = new c1(ca, this, this.i);
            bS(this)
        }

        function bS(cb) {
            var ca, da;
            ca = cb.j.indexedDB.open(cb.i.pa, cb.i.qa);
            ca.onupgradeneeded = function(db) {
                (da = db.target.result) ? (da.onerror = da.onabort = function() {
                    cX(cb)
                }, da.onversionchange = function() {
                    cX(cb)
                }, da.onclose = function() {
                    cb.Q && (cb.Q = cp, cb.i.db = cq, cb.z = new c1(cb.j, cb, cb.i))
                }, da.objectStoreNames.contains(cb.i.ha) || (db = da.createObjectStore(cb.i.ha), db.createIndex("s", "s", {
                    unique: cp
                }), db.transaction.oncomplete = function() {
                    dp(cb, da)
                })) : cX(cb)
            };
            ca.onsuccess = function(db) {
                (da = db.target.result) ? dp(cb, da): cX(cb)
            };
            ca.onerror = function() {
                cX(cb)
            };
            ca.onblocked = function() {
                cX(cb)
            }
        }

        function cX(ca) {
            ca.z = new cr;
            dc(ca.i)
        }

        function dp(cb, ca) {
            var da;
            cb.Q || (cb.Q = ct, cb.i.db = ca, cb.z = new cS(cb.j, cb, cb.i), da = setTimeout(function() {
                clearTimeout(da);
                dc(cb.i)
            }, 0))
        }
        cm = b1.prototype;
        cm.q = function(cb, ca, da) {
            this.z.q(cb, ca, da)
        };
        cm.remove = function(cb, ca, da) {
            this.z.remove(cb, ca, da)
        };
        cm.get = function(cb, ca) {
            this.z.get(cb, ca)
        };
        cm.all = function(cb, ca, da) {
            this.z.all(cb, ca, da)
        };
        cm.clear = function(ca) {
            this.z.clear(ca)
        };
        cm.w = function(ca) {
            this.z.w(ca)
        };

        function cW(cb) {
            var ca, db;
            if (this.k = cb.indexedDB && (ca = cb.IDBFactory) && (db = ca.prototype) && "function" === typeof db.open && (ca = cb.IDBDatabase) && (db = ca.prototype) && "function" === typeof db.transaction) {
                try {
                    cV || (cV = new b1(cb))
                } catch (da) {
                    this.k = cp
                }
            }
        }
        cW.prototype.$ = co(ct);
        cW.prototype.get = function() {
            return cV
        };
        var cV = cq;

        function de(cb, ca, da) {
            this.j = cb;
            this.K = ca;
            this.J = da
        }
        cm = de.prototype;
        cm.q = function(cb, ca, da) {
            (cb.u ? this.J : this.K).q(cb, ca, da)
        };
        cm.remove = function(cb, ca, da) {
            (cb.u ? this.J : this.K).remove(cb, ca, da)
        };
        cm.get = function(cb, ca) {
            (cb.u ? this.J : this.K).get(cb, ca)
        };
        cm.all = function(cb, ca, du) {
            function dt() {
                db && da && cb && cb(db.concat(da))
            }
            var db, da;
            this.K.all(function(dv) {
                db = dv;
                dt()
            }, ca, du);
            this.J.all(function(dv) {
                da = dv;
                dt()
            }, ca, du)
        };
        cm.clear = function(cb) {
            function ca(du) {
                du || (da = cp);
                dt && db && cb && cb(da)
            }
            var dt, db, da = ct;
            this.K.clear(function(du) {
                dt = ct;
                ca(du)
            });
            this.J.clear(function(du) {
                db = ct;
                ca(du)
            })
        };
        cm.w = function(cb) {
            function ca(du) {
                du || (da = cp);
                dt && db && cb && cb(da)
            }
            var dt, db, da = ct;
            this.K.w(function(du) {
                dt = ct;
                ca(du)
            });
            this.J.w(function(du) {
                db = ct;
                ca(du)
            })
        };

        function cT(cb, ca) {
            var dv = new b7(cb, ca),
                du = new cW(cb);
            if (this.k = dv.k && du.k) {
                try {
                    if (!cR) {
                        var dt = dv.get(),
                            db = du.get();
                        dt && db ? cR = new de(cb, dt, db) : this.k = cp
                    }
                } catch (da) {
                    this.k = cp
                }
            }
        }
        cT.prototype.$ = co(cp);
        cT.prototype.get = function() {
            return cR
        };
        var cR = cq;

        function cQ(cb, ca, db) {
            this.j = cb;
            this.B = db;
            this.O = {};
            this.O.hybrid = "hybrid";
            this.O.indexedDB = "indexedDB";
            this.O.localStorage = "localStorage";
            if (!cO.length) {
                if (ca.length) {
                    for (cb = 0; cb < ca.length; cb++) {
                        cZ(this, ca[cb], ct)
                    }
                }
                for (var da in this.O) {
                    cZ(this, da, cp)
                }
            }
            return this
        }
        var cO = [];

        function cZ(cb, ca, db) {
            var da = cq;
            if ("string" === typeof ca) {
                db && delete cb.O[ca];
                cb: {
                    db = cb.j;cb = cb.B;
                    switch (ca) {
                        case "hybrid":
                            da = new cT(db, cb);
                            break cb;
                        case "indexedDB":
                            da = new cW(db);
                            break cb;
                        case "localStorage":
                            da = new b7(db, cb);
                            break cb
                    }
                    da = cq
                }
            } else {
                ca && (da = "function" === typeof ca.get && "function" === typeof ca.isSpecified && ca)
            }
            da && da.k && cO.push(da)
        }
        cQ.prototype.top = function() {
            return cO.length ? cO[0] : cq
        };

        function cu() {
            for (var cb, ca = [], da = 0; da < cO.length; da++) {
                cb = cO[da], cb.$() && ca.push(cb)
            }
            return ca
        }

        function b3(cb, ca) {
            this.h = cb;
            this.key = ca;
            this.oa = 1
        }

        function bU() {}
        bU.prototype.R = co(1);

        function dr() {}
        dr.prototype.R = co(3);

        function dh(cb, ca) {
            this.h = cb;
            this.key = ca
        }
        dh.prototype.R = co(4);
        var cN, cM;
        (function() {
            var ca = {};
            cN = function(cb, da) {
                ca[cb] = ca[cb] || [];
                ca[cb].push(da)
            };
            cM = function(cb) {
                var db = ca[cb.R()];
                if (db) {
                    for (var da = 0; da < db.length; da++) {
                        db[da].call(this, cb)
                    }
                }
            }
        })();

        function cK() {
            this.aa = 0;
            this.g = {};
            this.r = []
        }
        cK.prototype.set = function(ca) {
            this.g[ca.key] || this.aa++;
            this.g[ca.key] = ca;
            this.A(ca)
        };
        cK.prototype.ca = function() {
            return !!this.aa
        };
        cK.prototype.next = function() {
            var ca = cq;
            this.r.length && (ca = this.r[0], this.r.splice(0, 1));
            this.r.length || cM(new c4);
            return ca
        };

        function cI(cb, ca) {
            cb.g[ca] && (delete cb.g[ca], cb.aa--);
            cb.ca() || cM(new dr)
        }
        cK.prototype.A = function(cb) {
            var ca = this.r.length;
            this.r.push(cb);
            ca || cM(new bU)
        };
        var b8, c0, cw, b5, bW;

        function bN() {
            return Array.prototype.slice.call(arguments).join(".")
        }
        var dj = Date.now || function() {
            return +new Date
        };
        cw = function(ca) {
            return bN("ct.p.s", "V1", ca)
        };
        b5 = function(cb, ca) {
            return bN("ct.p.m", "V1", cb, ca)
        };
        c0 = function(ca) {
            return 0 === ca.indexOf("ct.p.s")
        };
        bW = function(ca) {
            return 0 === ca.indexOf("ct.p.m")
        };
        b8 = function(cb, ca, da) {
            ca = ca || "ct.p";
            switch (da || 2) {
                case 0:
                    return cb === ca;
                case 1:
                    return -1 < cb.indexOf(ca);
                case 2:
                    return 0 === cb.indexOf(ca)
            }
            return cp
        };

        function cH(cb, ca, dv, du, dt, db, da) {
            this.path = cb;
            this.ga = ca;
            this.data = dv;
            this.u = du;
            this.ja = dt;
            this.ba = db;
            this.ea = da;
            this.P = self && self.Uint8Array
        }
        cH.prototype.Y = function() {
            return {
                p: this.path,
                sd: this.ga,
                d: this.P && this.data instanceof this.P ? Array.prototype.slice(this.data, 0) : this.data,
                sm: this.u,
                b: this.ja,
                f: this.ba,
                m: this.ea
            }
        };
        cH.prototype.M = function() {
            return !!this.path && !isNaN(this.ga) && ("string" === typeof this.data || this.P && this.data instanceof this.P) && "boolean" === typeof this.u && "boolean" === typeof this.ja && !isNaN(this.ba) && !isNaN(this.ea)
        };

        function cG(cb, ca, da) {
            this.h = cb;
            this.D = ca;
            this.H = da
        }
        cG.prototype.Y = function() {
            return {
                s: this.h,
                p: this.D.Y(),
                c: this.H
            }
        };
        cG.prototype.M = function() {
            return !isNaN(this.h) && this.D && this.D instanceof cH && this.D.M() && !isNaN(this.H)
        };

        function c6() {
            this.g = {}
        }
        cm = c6.prototype;
        cm.set = function(cb, ca) {
            this.g[cb] = ca
        };
        cm.get = function(ca) {
            return this.g[ca]
        };
        cm.all = function() {
            var cb, ca = [];
            for (cb in this.g) {
                ca.push(this.g[cb])
            }
            return ca
        };
        cm.remove = function(ca) {
            delete this.g[ca]
        };
        cm.clear = function() {
            this.g = {}
        };
        cm.ca = function() {
            for (var ca in this.g) {
                return ct
            }
            return cp
        };

        function cF(cb, ca, da) {
            this.h = cb;
            this.H = ca;
            this.S = da || this.H + 420000;
            this.n = new c6
        }
        cF.prototype.Y = function() {
            return {
                s: this.h,
                c: this.H,
                e: this.S
            }
        };
        cF.prototype.M = function() {
            return !isNaN(this.h) && !isNaN(this.H) && !isNaN(this.S) && !(new Date > this.S)
        };
        cF.prototype.W = function(ca) {
            ca || (ca = dj() + 420000);
            this.S = ca
        };

        function c4() {}
        c4.prototype.R = co(2);
        var dn;

        function dd() {
            if (!dn) {
                var ca = cj();
                ca.exports.transport = ca.exports.transport || {};
                dn = ca.exports.transport
            }
            return dn
        }

        function cU(cb, ca, db) {
            var da = dd();
            this.j = cb;
            this.B = ca;
            this.Z = db;
            this.X = [];
            this.ma = 0;
            this.U = [];
            this.V = ct;
            this.C = new c6;
            this.g = new cK;
            this.ta = da.getMaxConcurrentRequests();
            this.sa = da.getTransportInterval;
            this.ia = this.Z.AutoDispatch();
            this.F = cp;
            this.ia && this.ka()
        }
        cU.prototype.ka = function() {
            var cb = this;
            if (this.Z.EnableDispatch()) {
                this.X = cu(new cQ(this.j, this.Z.Providers, this.B));
                for (var ca = 0; ca < this.X.length; ca++) {
                    (function(da) {
                        da.get().all(function(dB) {
                            for (var dA = 0; dA < dB.length; dA++) {
                                var dz = dB[dA].key,
                                    dx = dB[dA].item,
                                    dv;
                                if (c0(dz)) {
                                    dv = new cF(dx.s, dx.c, dx.e), dz = new cd(dz, dv, da), cb.C.set(dv.h, dz)
                                } else {
                                    if (bW(dz)) {
                                        dv = dx.c;
                                        var db = dx.s,
                                            du = dx.p,
                                            dx = du.p,
                                            dy = du.sd,
                                            dC = du.d,
                                            dt = du.sm,
                                            dw = du.b,
                                            dD = du.f,
                                            du = du.m;
                                        dw && dC instanceof Array && self.Uint8Array && (dC = new self.Uint8Array(dC));
                                        dv = new cG(db, new cH(dx, dy, dC, dt, dw, dD, du), dv);
                                        dz = new cd(dz, dv, da);
                                        cb.U.push(dz)
                                    }
                                }
                            }
                            cb.ma++;
                            cs(cb)
                        })
                    })(this.X[ca])
                }
            }
        };

        function cs(cb) {
            var ca, dv, du, dt, db;
            if (cb.ma === cb.X.length) {
                db = {};
                for (var da = 0; da < cb.U.length; da++) {
                    du = cb.U[da], ca = du.a.h, dv = cb.C.get(du.a.h), db[ca] || (dv ? (db[ca] = dt = dv.a.M()) || b2(cb, dv.L, dv.a.h, dv.key) : db[ca] = cp), db[ca] && du.a.M() ? (dv.a.n.set(du.key, du), cb.g.set(new b3(du.a.h, du.key))) : bT(cb, du, cp)
                }
                cb.U = [];
                cN(1, function() {
                    cb.V = cp;
                    cE(cb, 0)
                });
                cN(2, function() {
                    cb.V = ct
                });
                cN(3, function() {
                    var dw, dA, dz;
                    if (dq(cb)) {
                        dw = cb.C.all();
                        for (var dy = 0; dy < dw.length; dy++) {
                            if (dA = dw[dy]) {
                                dA = dA.a.n.all();
                                for (var dx = 0; dx < dA.length; dx++) {
                                    (dz = dA[dx]) && cb.g.set(new b3(dz.a.h, dz.key))
                                }
                            }
                        }
                    }
                });
                cN(4, function(dw) {
                    var dx = cb.C.get(dw.h);
                    (dx = dx && dx.a.n.get(dw.key)) ? bT(cb, dx, ct): cI(cb.g, dw.key)
                });
                cb.V = cp;
                cb.F = ct;
                cE(cb, 0)
            }
        }

        function cE(cb, ca) {
            cb.V || dq(cb) && df(cb, ca)
        }

        function dq(cb) {
            for (var ca = cb.C.all(), dt, db = cp, da = 0; da < ca.length; da++) {
                if (dt = ca[da]) {
                    if (dt.a.n.ca()) {
                        db = ct;
                        break
                    } else {
                        b2(cb, dt.L, dt.a.h, dt.key)
                    }
                }
            }
            return db
        }

        function df(cb, ca, dt, db) {
            var da = setTimeout(function() {
                var dv = db,
                    dx = dt,
                    dw = dv && dx,
                    dy = cq,
                    du;
                clearTimeout(da);
                if (!dw && (du = cb.g.next())) {
                    dv = du.h, dx = du.key
                }
                if (dv = cb.C.get(dv)) {
                    dy = dv.a.n.get(dx)
                }
                dy ? dy.T ? cE(cb, 0) : cv(cb, dy) : (cI(cb.g, dx), cE(cb, 0))
            }, ca || 0)
        }

        function cv(cb, ca) {
            var da = ca.a.D;
            ca.T = ct;
            F.WRC4 < cb.ta ? F.WRCm(da.path, da.ga, da.data, da.ba, da.ea, function(du, dt, db) {
                bT(cb, ca, ct);
                cE(cb, cb.da(du, dt, db))
            }, function(dw, dv, du) {
                ca.T = cp;
                var dt = cb.g,
                    db = dt.g[ca.key];
                db && (--db.oa ? dt.A(db) : cM(new dh(db.h, db.key)));
                cE(cb, cb.da(dw, dv, du))
            }) : (ca.T = cp, df(cb, cb.da(), ca.key, ca.a.h))
        }
        cU.prototype.da = function(cb, ca, da) {
            return this.sa.apply(this, arguments) || 0
        };

        function b2(cb, ca, db, da) {
            da = new ce(da);
            ca && ca.get().remove(da);
            cb.C.remove(db.toString())
        }

        function bT(cb, ca, dt) {
            var db = ca.key,
                da = new ce(db, cq, ca.a.D.u);
            dt && (dt = cb.C.get(ca.a.h)) && dt.a.n.remove(db);
            cI(cb.g, ca.key);
            ca.L.get().remove(da)
        }

        function cD(cb, ca, dt, db) {
            var da = this;
            this.j = cb;
            this.B = ca;
            this.Z = dt;
            this.fa = db;
            this.N = this.o = cq;
            this.na = dt.EnableStreams();
            this.F = cp;
            if (dt.EnableStorage() && da.fa && (this.N = (new cQ(cb, dt.Providers, ca)).top())) {
                cb = cw(da.fa), ca = new cF(da.fa, dj()), da.o = new cd(cb, ca, this.N), cC(da, da.o, cp, function() {
                    da.F = ct
                }, function() {})
            }
        }
        cD.prototype.q = function(dy, dx, dw, dv, du) {
            var dt = this,
                db, da, dx = dx || dj(),
                ca = new cH(dw.path, dw.stid, dw.data, dw.stream, dw.binary, dw.flag, dw.mid),
                cb = this.F && this.N;
            ca.u && (cb = this.na);
            if (!cb) {
                return du && du(dw), cq
            }
            db = b5(dy, dx);
            da = new cd(db, new cG(dy, ca, dx), this.N);
            cC(this, da, ca.u, function() {
                dt.o.a.n.set(da.key, da);
                dv && dv(db)
            }, function(dz) {
                dt.o.a.n.remove(dz);
                du && du(dw)
            });
            this.o.a.W();
            cC(this, this.o, cp);
            return da.key
        };

        function cC(cb, ca, du, dt, db) {
            du = new ce(ca.key, ca.a.Y(), du);
            try {
                ca.L ? ca.L.get().q(du, dt, db) : db(ca.key)
            } catch (da) {
                da.la && da.ra && (cb.F = cp, da.la.w(function() {
                    this.o.a.n.clear()
                }))
            }
        }
        cD.prototype.remove = function(cb, ca, du) {
            var dt = this,
                db, da = dt.o.a.n.get(cb);
            da && (db = new ce(cb, cq, da.a.D.u), da.L.get().remove(db, function() {
                dt.o.a.n.remove(cb);
                ca && ca(cb)
            }, du))
        };
        cD.prototype.W = function(cb, ca) {
            this.o.a.W();
            cC(this, this.o, cp, cb, ca)
        };
        (function(cb) {
            var ca = b0(),
                da = cn(cb);
            ca.ua = da.EnableStorage;
            ca.va = da.EnableStreams;
            ca.wa = da.EnableDispatch;
            ca.createPersistenceDispatchService = function(dt, db) {
                var du = new cU(dt, db, da);
                return {
                    dispatchMessages: function() {
                        return du.ka.apply(du)
                    },
                    serviceEnabled: function() {
                        return du.F
                    },
                    autoDispatch: function() {
                        return du.ia
                    }
                }
            };
            ca.createPersistenceStorageService = function(dt, db, dv) {
                var du = new cD(dt, db, da, dv);
                return {
                    storeMessage: function() {
                        return du.q.apply(du, arguments)
                    },
                    removeMessage: function() {
                        du.remove.apply(du, arguments)
                    },
                    prolongSession: function() {
                        du.W.apply(du, arguments)
                    },
                    serviceEnabled: function() {
                        return du.F
                    },
                    streamsEnabled: function() {
                        return du.na
                    }
                }
            }
        })(window);

        function b4(cb) {
            var cb = (ch(cb) || {}).Transport || {},
                ca = cb.LastMessage || {},
                db = cb.MaxInlineExecLength,
                da = cb.Reliability || {};
            cb.LastMessage = function() {
                return ca
            };
            cb.Interval = cg(cb.Interval, "number", co(0));
            cb.MaxConcurrentRequests = cg(cb.MaxConcurrentRequests, "number", co(5));
            cb.MaxInlineExecLength = Math.min(isNaN(db) ? 2000 : db, 2000);
            ca.RegisterToOnBeforeUnload = cg(ca.RegisterToOnBeforeUnload, "boolean", co(cp));
            cb.LastMessage = function() {
                return ca
            };
            da.Load = {
                Retries: da.Load && "number" === typeof da.Load.Retries ? da.Load.Retries : 2,
                Persist: da.Load && "boolean" === typeof da.Load.Persist ? da.Load.Persist : cp
            };
            cb.Reliability = function(dt) {
                return da[dt]
            };
            return cb
        }(function(cb) {
            var ca = dd(),
                cb = b4(cb),
                da = cb.Legacy === ct;
            ca.isLegacy = function() {
                return da
            };
            ca.getTransportInterval = cb.Interval;
            ca.getTransportLastMessage = cb.LastMessage;
            ca.getMaxConcurrentRequests = cb.MaxConcurrentRequests;
            ca.getTransportReliability = cb.Reliability;
            ca.maxInlineExecLength = cb.MaxInlineExecLength
        })(window);
        var bV;

        function cB(ca) {
            return "string" === typeof ca && !!ca.length
        }
        var ds = window,
            cA;
        if (!bV) {
            var di = cj();
            di.exports.proxy = di.exports.proxy || {};
            bV = di.exports.proxy
        }
        cA = bV;
        var cy = (ch(ds) || {}).Proxy || {},
            c5 = cy.WR,
            cx = cy.ImageFlag,
            b6 = cy.UploadPage,
            bX = cy.Reliable;
        cA.wrMessagesHandler = cA.authenticationHandler = cA.reliableHandler = cA.uploadPageHandler = cq;
        cB(cx) && (cA.authenticationHandler = cx);
        cB(c5) && (cA.wrMessagesHandler = c5);
        cB(b6) && (cA.uploadPageHandler = b6);
        cB(bX) && (cA.reliableHandler = bX);
        var bO;
        var dk = window,
            dg;
        if (!bO) {
            var c7 = cj();
            c7.exports.scrollDimensions = c7.exports.scrollDimensions || {};
            bO = c7.exports.scrollDimensions
        }
        dg = bO;
        var cz = (ch(dk) || {}).ScrollDimensions || {},
            b9 = cz.Width,
            bY = cz.Height;
        dg.width = dg.height = 0;
        "number" === typeof b9 && (dg.width = b9);
        "number" === typeof bY && (dg.height = bY);
        var bP;
        var cJ = (ch(window) || {}).RecordingThresholds || {};
        if (!bP) {
            var cl = cj();
            cl.exports.recordingThresholds = cl.exports.recordingThresholds || {};
            bP = cl.exports.recordingThresholds
        }
        bP.maxMid = "number" === typeof cJ.MaxMessageId ? cJ.MaxMessageId : 3000;
        var bZ;
        var bQ = window,
            dl;
        if (!bZ) {
            var c9 = cj();
            c9.exports.protocol = c9.exports.protocol || {};
            bZ = c9.exports.protocol
        }
        dl = bZ;
        var cP = ((ch(bQ) || {}).Protocol || {}).Method;
        dl.method = cq;
        "string" === typeof cP && cP.length && (dl.method = cP)
    }();
    ! function() {
        function cj(ck, cl) {
            ci.symbols[ck] = cl
        }
        var ch;

        function cg() {
            if (ch) {
                return ch
            }
            var ck = window.ClickTaleGlobal;
            ck || (ck = {}, window.ClickTaleGlobal = ck);
            ck.exports = ck.exports || {};
            ck.symbols = ck.symbols || {};
            ck.api = ck.api || {};
            return ch = ck
        }
        var cf;

        function ce() {
            if (!cf) {
                var ck = cg();
                ck.exports.persistence = ck.exports.persistence || {};
                cf = ck.exports.persistence
            }
            return cf
        }
        var cd, cc;
        (function() {
            var ck = ce();
            cd = function(cm, cl) {
                return ck.createPersistenceDispatchService(cm, cl)
            };
            cc = function(cn, cm, cl) {
                return ck.createPersistenceStorageService(cn, cm, cl)
            }
        })();
        var ci = cg();
        cj("WREK", cd);
        cj("WREL", cc);
        var cb;

        function ca() {
            if (!cb) {
                var ck = cg();
                ck.exports.transport = ck.exports.transport || {};
                cb = ck.exports.transport
            }
            return cb
        }
        var b9, b8, b7, b5, b3, b1;
        (function() {
            var ck = ca();
            b9 = ck.isLegacy;
            b8 = function(cn, cm, cl) {
                return ck.getTransportInterval.apply(this, arguments)
            };
            b7 = ck.getTransportLastMessage;
            b5 = ck.getMaxConcurrentRequests;
            b3 = ck.maxInlineExecLength;
            b1 = ck.getTransportReliability
        })();
        cj("WRCw", b9);
        cj("WRC0", b8);
        cj("WRDf", b7);
        cj("WRC7", b5);
        cj("WREk", b1);
        cj("WRE1", b3);
        var bZ;
        var bX, bV, bS, bQ, bO;
        if (!bZ) {
            var b6 = cg();
            b6.exports.proxy = b6.exports.proxy || {};
            bZ = b6.exports.proxy
        }
        bO = bZ;
        bX = bO.wrMessagesHandler;
        bV = bO.authenticationHandler;
        bS = bO.uploadPageHandler;
        bQ = bO.reliableHandler;
        cj("WRDv", bV);
        cj("WRDp", bX);
        cj("WRE2", bS);
        cj("WRE3", bQ);
        var b4;
        if (!b4) {
            var b2 = cg();
            b2.exports.recordingThresholds = b2.exports.recordingThresholds || {};
            b4 = b2.exports.recordingThresholds
        }
        cj("WRDr", b4.maxMid);
        var b0;

        function bY() {
            if (!b0) {
                var ck = cg();
                ck.exports.xhr = ck.exports.xhr || {};
                b0 = ck.exports.xhr
            }
            return b0
        }
        cj("WRBY", function(ck) {
            var ck = ck || window,
                cl = bY();
            return cl.originalXHR ? cl.originalXHR : "undefined" != typeof ck.XMLHttpRequest && ("function" == typeof ck.XMLHttpRequest.OriginalXMLHttpRequest || "object" == typeof ck.XMLHttpRequest.OriginalXMLHttpRequest) ? ck.XMLHttpRequest.OriginalXMLHttpRequest : ck.XMLHttpRequest
        });
        cj("WRCD", function(ck) {
            var ck = ck || window,
                cl = bY();
            return cl.registerRecorderFunctionAPI ? cl.registerRecorderFunctionAPI : ck.XMLHttpRequest && ck.XMLHttpRequest.RegisterRecorderFunction ? ck.XMLHttpRequest.RegisterRecorderFunction : null
        });
        cj("WRCE", function(ck) {
            var ck = ck || window,
                cl = bY();
            return cl.v ? cl.v : ck.XMLHttpRequest && "number" == typeof ck.XMLHttpRequest.ClickTaleWrapperVersion ? ck.XMLHttpRequest.ClickTaleWrapperVersion : null
        });
        var bW;
        if (!bW) {
            var bU = cg();
            bU.exports.protocol = bU.exports.protocol || {};
            bW = bU.exports.protocol
        }
        cj("WREO", bW.method);
        var bT;
        var bR, bP;
        if (!bT) {
            var bN = cg();
            bN.exports.scrollDimensions = bN.exports.scrollDimensions || {};
            bT = bN.exports.scrollDimensions
        }
        bP = bT;
        bR = bP.height;
        cj("WREy", bP.width);
        cj("WREz", bR)
    }();
    var w = ClickTaleGlobal.api;
    if (w && w.ClickTaleOnReadyInvoked) {
        return
    }
    var B = void 0,
        F = ClickTaleGlobal.symbols,
        z = "Copyright 2006-2019 ClickTale Ltd., US Patent and US Patent Pending",
        aQ, bh, br, aP = false,
        S = false,
        aM = false,
        bH, aI = false,
        aK = "",
        aJ = {},
        aH = {},
        ar = "&",
        aq = "=",
        ak = false,
        ah, A, u = "ImpactRecorder",
        L = "",
        D = 'unable to record because either there are no credits for project, the domain is not checked in the account\'s "Manage Domains" section or communication is down';
    F.WRE7 = {
        wr: 1,
        authentication: 2,
        upload: 3,
        reliable: 4
    };
    F.WRFc = ClickTaleGlobal.logger ? ClickTaleGlobal.logger.createLogger(ClickTaleClientLogger.ClientModule.recorder) : m();
    F.WRFt = ClickTaleGlobal.logger ? new ClickTaleClientLogger.PerformanceMetrics() : h();
    F.WRAN = false;
    F.WRD = document;
    F.WRE = "https://wr.clicktale.net/v1/";
    F.WRDx = F.WRE;
    F.WRE4 = F.WRE;
    F.WRE5 = F.WRE;
    F.WRAJ = ".clicktale.net/";
    F.WRDz = false;
    F.WRBU = bd;
    F.WRBS = bd();
    F.WRm = F.WRBS.a;
    F.WRB = [];
    F.WRBP = true, F.WRDh = false;
    F.WRDi = false;
    F.WRBT = aN();
    F.WRCT = false;
    F.WRCc = "";
    F.WRCY = false;
    F.WRC9 = false;
    F.WRDA = false;
    F.WRDB = false;
    F.WRJ = 0;
    F.WRC4 = 0;
    F.WRn = bu;
    F.WREJ = null;
    F.WRBn = aV;
    F.WREs = F.WREO !== u;
    F.WRFA = false;
    F.WRFB = 0;
    F.WRi = bw;
    F.WRj = bv;
    F.WRFI = [];
    F.WRFO = false;
    F.WRFP = {};
    F.WRFX = t;
    F.WRFg = k;
    WRFi = "$";
    WRFk = 0;
    WRFh = 2;
    F.WRGF = 1;
    F.WRFR = function(bQ, bN) {
        var bP = bQ.split(".");
        var bR = window;
        for (var bO = 0; bO < bP.length && bR;) {
            bR = bR[bP[bO++]]
        }
        return bR === undefined ? bN : bR
    };
    F.WRFs = F.WRFR("ClickTaleSettings.Transport.XHRRequestTimeout", 5000);
    F.WRFY = F.WRFR("ClickTaleSettings.Transport.BigBuffer", 20000);
    F.WRFZ = F.WRFR("ClickTaleSettings.Transport.SmallBuffer", 1000);
    WRFj = F.WRFR("ClickTaleSettings.Transport.BigBufferFlushTimeoutMillis", 20000);
    F.WRFm = F.WRFR("ClickTaleSettings.Transport.enableBufferedMessages", false);
    F.WRFy = F.WRFR("ClickTaleSettings.Transport.PreventRequestsOnUnload", F.WRBS.t == F.WRBS.Sa);
    F.WRFz = false;
    F.WREnableCSTag = F.WRFR("ClickTaleSettings.Integration.EnableCSTag", true);
    var bK = F.WRFR("ClickTaleSettings.Transport.ForceImgForLastMessage", F.WRBS.t == F.WRBS.Sa);
    WRFw = F.WRFR("ClickTaleSettings.Performance.Thresholds", {});
    p();

    function m() {
        return {
            close: function() {},
            addToContext: function(bN) {},
            debug: function(bO, bP, bN) {},
            info: function(bO, bP, bN) {},
            warn: function(bO, bP, bN) {},
            error: function(bO, bP, bN) {},
            jsError: function(bP, bQ, bN, bO, bR) {},
            metric: function(bO, bN, bP, bR, bQ) {}
        }
    }

    function h() {
        return {
            timeStart: function() {},
            timeEnd: function() {},
            clearMetric: function(bN) {},
            clearAllMetrics: function() {},
            getMetric: function(bN) {}
        }
    }

    function g(bO, bP) {
        var bN = F.WRFt.getMetric(bO);
        if (bN && WRFw) {
            F.WRFt.timeEnd(bN.name);
            if (bN.totalTime >= WRFw[bN.name]) {
                F.WRFc.metric("7", bN.name, "time", bN.totalTime);
                bP && F.WRFt.clearMetric(bN.name)
            }
        }
    }

    function p() {
        if (F.WRFY === 10000 && F.WRFZ === 1000) {
            return
        }
        if (!F.WRBS.XDR) {
            F.WRFZ = 1000;
            F.WRFY = 1500;
            return
        }
        var bP = {
            10000: 1,
            20000: 1,
            30000: 1,
            40000: 1,
            60000: 1,
            120000: 1
        };
        var bQ = F.WRBS.a.indexOf("IE") > -1;
        var bR = 10000,
            bN = 0;
        F.WRFY = Math.min(F.WRFY, 120000);
        if (!bP[F.WRFY]) {
            for (var bO in bP) {
                if (bP.hasOwnProperty(bO)) {
                    bN = parseInt(bO);
                    if (bN <= F.WRFY) {
                        bR = bN
                    }
                }
            }
            F.WRFY = bR
        }
        F.WRFZ = bQ ? 1000 : Math.min(F.WRFY, F.WRFZ, 80000)
    }
    F.WRFQ = F.WRFR("ClickTaleSettings.Protocol.SendMode", F.WRFR("ClickTaleSettings.Protocol.Method") === "ImpactRecorder" ? 0 : 1);
    var am = F.WRFR("ClickTaleSettings.Protocol.UseBeacon", true);
    F.WRa = bz;
    F.WRCO = aX;
    F.WRCm = az;
    F.WRc = by;
    F.WREj = E;
    F.WRG = bF;
    F.WRH = bE;
    F.WRr = bt;
    F.WRs = bs;
    F.WRAS = bn;
    F.WRAT = bm;
    F.WRBj = a4;
    F.WRBi = a5;
    F.WRBl = a0;
    F.WRBm = aY;
    F.WRCL = a3;
    F.WRBk = a2;
    F.WRAs = bf;
    F.WRDW = av;
    F.WRE0 = ay;
    F.WRE8 = au;
    F.WRFJ = "";
    F.WRF1 = 0;
    F.WRFV = "";
    F.WRFv = g;
    F.WRGA = false;
    F.WRGB = [];
    F.WRGC = o;
    F.WRGD = n;

    function ae() {}
    ae.prototype = {
        write: function(bO, bP, bN) {},
        read: function(bN) {
            return null
        },
        remove: function(bN) {},
        name: "Stub"
    };

    function ac() {}
    ac.prototype = {
        write: function(bO, bR, bN) {
            var bQ = w.ClickTaleCookieDomain,
                bP = bN ? "; expires=" + bN : "";
            F.WRD.cookie = bO + "=" + bR + bP + "; path=/;" + (bQ ? ";domain=" + bQ : "")
        },
        read: function(bN) {
            bN += "=";
            var bO = F.WRD.cookie.split(";"),
                bP = bO.filter(function(bQ) {
                    return bQ.replace(/^\s\s*/, "").indexOf(bN) == 0
                })[0];
            return bP ? bP.trim().substring(bN.length) : null
        },
        remove: function(bN) {
            this.write(bN, null, -1)
        },
        name: "Cookie"
    };

    function aa() {
        var bN = "CT-Storage-Test",
            bO = "CT-OK";
        this.write(bN, bO, aj(1));
        if (this.read(bN) !== bO) {
            throw new Error("LocalStorage support test failed")
        }
        this.remove(bN)
    }
    aa.prototype = {
        write: function(bO, bP, bN) {
            try {
                localStorage.setItem(bO, bP + (bN ? "; expiry=" + bN : ""))
            } catch (bQ) {
                F.WRFc.error("12", {
                    name: bO,
                    value: bP,
                    error: bQ.message
                });
                if (bQ.toLowerCase().indexOf("quota") > -1) {
                    ["_CT_Log", F.WRCR, ClickTaleIgnoreCookieName, ClickTaleUIDCookieName, w.WRFC].forEach(function(bR) {
                        this.remove()
                    })
                }
            }
        },
        read: function(bQ) {
            var bS = localStorage.getItem(bQ);
            if (bS) {
                var bP = new Date(),
                    bN = bS.split("; expiry="),
                    bS = bN[0],
                    bO = new Date(bN[1]),
                    bR = !isNaN(bO) && bO < bP;
                if (bR) {
                    bS = null;
                    this.remove(bQ)
                }
            }
            return bS
        },
        remove: function(bN) {
            localStorage.removeItem(bN)
        },
        name: "LocalStorage"
    };
    var ai = (function() {
        var bP = [ac, aa],
            bR = F.WRFR("ClickTaleSettings.Tracking.Provider"),
            bN = bR || ac.prototype.name,
            bQ = bP.filter(function(bS) {
                return bS.prototype.name === bN
            })[0];
        try {
            return new bQ
        } catch (bO) {
            F.WRFc.error("13", {
                solicited: bR || "None",
                selected: bQ.name
            });
            return new ae
        }
    })();

    function bw(bO, bP, bQ, bN) {
        ai.write(bO, bP, aj(bQ, bN))
    }

    function bv(bN) {
        return ai.read(bN)
    }

    function a1(bN) {
        return ai.remove(bN)
    }

    function aj(bP, bO) {
        var bN = Date.now() + (bP || 0) * (bO || 86400000);
        return new Date(bN).toUTCString()
    }

    function aZ(bQ, bT, bS, bN) {
        var bP = aX(bQ) || [],
            bR = bP.filter(function(bU) {
                return bU[0] === bT
            });
        if (bR.length) {
            bR[0][1] = bS
        } else {
            bP.push([bT, bS])
        }
        var bO = bP.filter(function(bU) {
            return bU[1] !== null
        }).map(function(bU) {
            return bU.join(aq)
        }).join(ar);
        ai.write(bQ, bO, aj(bN))
    }

    function aX(bO, bQ) {
        var bP = bv(bO);
        if (!bP) {
            return null
        }
        var bN = bP.split(ar).map(function(bR) {
            return bR.split(aq)
        }).filter(function(bR) {
            return bR.length == 2
        });
        if (!bQ) {
            return bN
        }
        return bN.filter(function(bR) {
            return bR[0] === bQ
        })[0] || null
    }

    function a3(bO, bQ, bN) {
        var bP = aX(bO, bQ) || [0, 0];
        aZ(bO, bQ, (parseInt(bP[1]) + 1) || 1, bN)
    }

    function aU(bO, bP, bN) {
        aZ(bO, bP, null, bN)
    }
    F.WRFW = F.WRj("_CT_RS_");
    var i = (function() {
        var bQ = "ckp",
            bV = "dm",
            bP = {
                sameDomain: "sd",
                topLevelDomain: "tld",
                customDomain: "cd"
            },
            bS = {
                WRUID: "WRUID",
                WRIgnore: "WRIgnore",
                WRBlock: "WRBlock",
                CT_Data: "__CT_Data",
                CT_RS_: "_CT_RS_"
            },
            bU, b4, bW, bN, bX, bT, b3;

        function b0() {
            bU = bv(bS.CT_Data) ? true : false;
            if (bU) {
                var b5 = aX(bS.CT_Data, bQ);
                bW = b5 && b5[1];
                var b6 = aX(bS.CT_Data, bV);
                b4 = b6 && b6[1]
            }
            bN = bR();
            bX = bN === bP.topLevelDomain ? bO() : undefined
        }

        function bR() {
            var b6 = ClickTaleSettings.cookiePolicy || bP.topLevelDomain;
            var b5 = window.ClickTaleCookieDomain || w.ClickTaleCookieDomain;
            return b5 ? bP.customDomain : b6
        }

        function b2() {
            bT = bW !== bN;
            b3 = b4 !== ap.ClickTaleCookieDomain;
            if (!bU) {
                return
            }
            if (bT && b3) {
                b1()
            }
        }

        function bZ() {
            return window.ClickTaleCookieDomain || w.ClickTaleCookieDomain || bX || F.WRD.domain || B
        }

        function bO() {
            var b5 = F.WRD.location.hostname;
            var ce = /\b(?:\d{1,3}\.){3}\d{1,3}\b/.test(b5);
            if (ce) {
                return ""
            }
            var cf = b5.replace(/^www\./, "");
            var b7 = cf.split(".").length - 1;
            if (b7 === 1) {
                return cf
            }
            var cb = /\.[^.]{2,3}(?:\.[^.]{3})$/;
            if (cb.test(cf)) {
                var cg = cf.substring(cf.lastIndexOf(".") + 1, cf.length);
                var cd = "com;org;edu;gov;net;biz;";
                var b6 = cd.indexOf(cg + ";") > -1;
                if (b6) {
                    var b9 = cf.split(".");
                    return b9[b9.length - 2] + "." + b9[b9.length - 1]
                }
                F.WRFc.error("6", b5, "IdentificationService");
                return ""
            }
            var cc = /[^.]*\.[^.]{2,3}(?:\.[^.]{2,3})?$/;
            var b8 = /[^.]*(?:\.[^.]{4,})?$/;
            var ca = cf.match(cc) || cf.match(b8);
            if (!ca) {
                F.WRFc.error("5", b5, "IdentificationService");
                return ""
            }
            return ca[0]
        }

        function b1() {
            Object.keys(bS).map(function(b5) {
                return bS[b5]
            }).forEach(function(b7) {
                var b6 = bv(b7);
                if (b6 !== undefined && b6 !== null) {
                    var b5 = b4 ? " domain=" + b4 + ";" : "";
                    F.WRD.cookie = b7 + "=; Path=/;" + b5 + " Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                    bw(b7, b6, w.ClickTaleCookieExpiryDays)
                }
            })
        }

        function bY() {
            bT && aZ(bS.CT_Data, bQ, bN, w.ClickTaleCookieExpiryDays);
            b3 && aZ(bS.CT_Data, bV, ap.ClickTaleCookieDomain, w.ClickTaleCookieExpiryDays)
        }
        return {
            init: b0,
            getClickTaleCookieDomain: bZ,
            migrateIfNeeded: b2,
            saveCurrentPolicy: bY
        }
    }());
    i.init();
    ClickTaleUnloadPause = window.ClickTaleUnloadPause || 200;
    ClickTaleEventsMask = window.ClickTaleEventsMask || 511 - 128;
    ClickTaleIgnoreCookieName = window.ClickTaleIgnoreCookieName || "WRIgnore";
    ClickTaleUIDCookieName = window.ClickTaleUIDCookieName || "WRUID";
    ClickTaleLog = w.ClickTaleLog = aG;
    w.WRFC = window.ClickTaleIsSavedCookieName || "_CT_RS_";
    var ap = {
        ClickTale: d,
        ClickTaleCookieDomain: i.getClickTaleCookieDomain(),
        ClickTaleUploadPage: bk,
        ClickTaleDelayUploadPage: a,
        ClickTaleIsUploadPage: an,
        ClickTaleSetAllSensitive: K,
        ClickTaleResetAllSensitive: q,
        ClickTaleSetSomeSensitive: H,
        ClickTaleResetSomeSensitive: bq,
        ClickTaleIgnore: Y,
        ClickTaleRegisterFormSubmitFailure: bL,
        ClickTaleGetVersion: bj,
        ClickTaleSetCustomElementID: f,
        ClickTaleRegisterFormSubmitSuccess: bp,
        ClickTaleExec: bD,
        ClickTaleField: ao,
        ClickTaleNote: r,
        ClickTaleTag: aS,
        ClickTaleEvent: aS,
        ClickTaleGetPID: bA,
        ClickTaleSetUID: aw,
        ClickTaleGetUID: R,
        ClickTaleGetSID: ag,
        ClickTaleLogical: bb,
        ClickTaleDetectAgent: aL,
        ClickTaleIsPlayback: at,
        ClickTaleCookieExpiryDays: (window.ClickTaleCookieExpiryDays || w.ClickTaleCookieExpiryDays || 365),
        ClickTaleIsSavedRecording: W,
        ClickTaleIsRecording: aO,
        ClickTaleSendJsonMessage: bi,
        ClickTaleDispatchPersistedMessages: e,
        ClickTaleUploadPageNow: bM,
        ClickTaleAddAugmentElementPathHandler: ax,
        ClickTaleGetAuthResponse: bo,
        ClickTaleGetSubscriberId: b,
        ClickTaleGetPartition: U,
        ClickTaleGetWRIgnoreExpiry: bJ
    };

    function bJ() {
        return "; expiry=" + aj(0.042)
    }
    for (var P in ap) {
        window[P] = w[P] = ap[P]
    }
    i.migrateIfNeeded();

    function ay() {
        if (window.ClickTaleIncludedOnDOMReady || /complete|interactive/.test(document.readyState)) {
            return true
        }
        return false
    }

    function au() {
        F.WRE = bx(F.WRE);
        F.WRDx = bx(F.WRDx);
        F.WRE4 = bx(F.WRE4);
        F.WRE5 = bx(F.WRE5)
    }

    function aO() {
        return F.WREP.WREF()
    }

    function aG(bN, bP, bR) {
        bR = bR || {};
        bR.module = (bN || "").toString();
        bR.type = (bP || "").toString();
        for (var bQ in aH) {
            if (!!bQ) {
                var bO = aH[bQ];
                if (!!bO) {
                    bO(bR)
                }
            }
        }
    }

    function bE() {
        return (new Date()).getTime() - window.WRInitTime
    }

    function bF() {
        return Math.floor(Math.random() * 2147483647)
    }

    function C() {
        if (window.performance) {
            window.WRInitTime = performance.timing.navigationStart
        } else {
            if (typeof window.WRInitTime === "undefined") {
                window.WRInitTime = (new Date()).getTime();
                return false
            }
        }
        return true
    }

    function E(bU) {
        if (typeof bU === "object" && "length" in bU) {
            var bT = bU.length;
            for (var bP = 0; bP < bT; bP++) {
                var bR = bU[bP],
                    bO = {},
                    bS, bQ, bN;
                if (typeof bR === "string") {
                    bS = window[bR];
                    if (!bS) {
                        continue
                    }
                    bO.func = bS;
                    bO.scope = window;
                    bO.args = []
                } else {
                    if (typeof bR === "function") {
                        bO.func = bR;
                        bO.scope = window;
                        bO.args = []
                    } else {
                        if (typeof bR === "object") {
                            bS = bR.fn;
                            if (typeof bS !== "function") {
                                continue
                            }
                            bO.func = bS;
                            bO.scope = bR.scope || window;
                            bO.args = bR.args || []
                        }
                    }
                }
                bO.func.apply(bO.scope, bO.args)
            }
        }
    }

    function by() {
        var bN = F.WREk("Load");
        F.WRAG = {
            a: "load",
            w: bt(),
            h: bs(),
            cw: a5(),
            ch: a4(),
            lw: a0(),
            lh: aY(),
            t: bE(),
            o: a2(),
            persist: bN.Persist,
            retries: bN.Retries,
            type: F.WRE7.reliable,
            sw: F.WREy || bn(),
            sh: F.WREz || bm()
        };
        bz(F.WRAG)
    }

    function az(bO, bN, bQ, bT, bU, bS, bR) {
        var bP, bV = !!window.Uint8Array && bQ instanceof window.Uint8Array;
        if (bV) {
            bT |= 64
        }
        if (ah) {
            s(bO, bN, bQ, bT, bU, bV, bS, bR);
            return
        }
        bP = {
            isBinaryStream: bV,
            onSuccess: bS,
            onError: bR,
            onBeforeSend: function() {
                ++F.WRC4;
                this.startTime = new Date()
            },
            onComplete: function(bX, bY, bW) {
                --F.WRC4
            },
            startTime: null,
            responded: false
        };
        O(bP, bO, bT, bQ, bN)
    }

    function s(bO, bN, bT, bW, bX, bY, bV, bU) {
        var bR, bP, bZ, bS = (bN === 0 && (bW & 3)),
            bQ = J(bY, bT, bS);
        if (bQ) {
            bZ = "&" + bT + "&" + bF();
            if (bS) {
                bO = bO + (bW | 16) + bZ;
                bR = new XDomainRequest();
                bR.open("GET", bO);
                bR.onload = function() {
                    bR.onerror = bR.ontimeout = bR.onload = null;
                    --F.WRC4;
                    if (bV) {
                        bV(bO.length, new Date() - bP, bY)
                    }
                };
                bR.onerror = bR.ontimeout = bU ? function() {
                    bR.onerror = bR.ontimeout = bR.onload = null;
                    --F.WRC4;
                    if (bU) {
                        bU(bO.length, new Date() - bP, bY)
                    }
                } : bR.onload;
                bR.onprogress = function() {
                    return
                };
                F.WRFs && (bR.timeout = F.WRFs);
                ++F.WRC4;
                bP = new Date();
                bR.send()
            } else {
                bR = new Image();
                bO = bO + bW + bZ;
                bP = new Date();
                bR.src = bO;
                ++F.WRC4;
                bR.onload = bR.onerror = function() {
                    bR.onerror = bR.onload = null;
                    --F.WRC4;
                    if (bV) {
                        bV(bO.length, new Date() - bP, bY)
                    }
                }
            }
        } else {
            bO = bO + (bW | 16);
            bR = new XDomainRequest();
            bR.open("POST", bO);
            bR.onload = function() {
                bR.onerror = bR.ontimeout = bR.onload = null;
                --F.WRC4;
                if (bV) {
                    bV(bO.length, new Date() - bP, bY)
                }
            };
            bR.onerror = bR.ontimeout = bU ? function() {
                bR.onerror = bR.ontimeout = bR.onload = null;
                --F.WRC4;
                if (bU) {
                    bU(bO.length, new Date() - bP, bY)
                }
            } : bR.onload;
            bR.onprogress = function() {};
            F.WRFs && (bR.timeout = F.WRFs);
            ++F.WRC4;
            bP = new Date();
            bR.send(bT)
        }
    }

    function bz(bN) {
        if (aO()) {
            F.WRCb(bN)
        } else {
            if (F.WRB.push) {
                F.WRB.push(bN)
            }
        }
        if (F.WRJ === F.WRDr && !F.WRDh) {
            F.WRDh = true;
            w.ClickTaleSendThresholdExceededEvent();
            w.ClickTaleStop()
        }
    }

    function bt() {
        return window.innerWidth || F.WRu.offsetWidth
    }

    function bs() {
        return window.innerHeight || F.WRu.offsetHeight
    }

    function bn() {
        return F.WRu.scrollWidth
    }

    function bm() {
        if (F.WRD.documentElement) {
            return Math.max(F.WRD.body.scrollHeight, F.WRD.documentElement.scrollHeight)
        }
        return F.WRu.scrollHeight
    }

    function a2() {
        return window.orientation | 0
    }

    function a5() {
        return Math.max(F.WRu.clientWidth, window.innerWidth || 0)
    }

    function a4() {
        return Math.max(F.WRu.clientHeight, window.innerHeight || 0)
    }

    function a0() {
        return F.WRu.clientWidth
    }

    function aY() {
        return F.WRu.clientHeight
    }

    function aW() {}
    aW.prototype = {
        WRD3: function(bN) {
            if (bN == undefined) {
                bN = 1
            }
            bH = bN;
            if (bN == 1) {
                bf("note3: recording all visitors to this page (" + bN + ")")
            } else {
                if (bN == 0) {
                    bf("note3: not recording any visitor to this page (" + bN + ")")
                } else {
                    bf("note3: recording approximately 1 of every " + Math.ceil(1 / bN) + " visitors to this page (" + bN + ")")
                }
            }
        },
        WRD4: function(bN) {
            F.WRBu = true;
            if (Math.random() < bN) {
                F.WRK = bl()
            } else {
                F.WRK = 0
            }
        },
        WRD5: function(bN) {
            bw(ClickTaleUIDCookieName, F.WRK, w.ClickTaleCookieExpiryDays);
            if (F.WRK == 0 || (bv(ClickTaleUIDCookieName) == null && bN != 1)) {
                bf("warning4: the current machine/user is disabled for recording");
                return true
            }
            return false
        },
        WRD6: function(bN) {
            if (bN === null || bN === "0") {
                bw(ClickTaleUIDCookieName, bl(), w.ClickTaleCookieExpiryDays)
            }
        },
        WRD7: function() {
            if (!aP) {
                var bO = this;
                aP = true;
                var bN = new Image();
                bN.src = F.WRDx + "i/" + F.WRA + ".gif?r=" + bH + "&UID=" + F.WRK + (F.WRBu ? "&new" : "") + (F.WRBP ? "&as=1" : "") + (F.WRBS.m ? "&m=1" : "") + "&" + bF();
                bN.onerror = function() {
                    bN.onload = null;
                    bN.onerror = null;
                    aP = false;
                    be(D, true)
                };
                bN.onload = function() {
                    bN.onload = null;
                    bN.onerror = null;
                    aP = false;
                    bO.WRD8(bN)
                }
            }
        },
        WRD8: function(bN) {
            if (bN.width == 2 && bN.height == 1) {
                be(D, true);
                return
            }
            bG(bN)
        },
        WREF: function() {
            return typeof F.WRDw == "number"
        },
        WRD9: function() {
            return typeof F.WRDw == "number" ? F.WRDw : null
        },
        WREA: function(bN) {
            if (bN > 0 || bN === 0 || bN === "0") {
                bw(ClickTaleUIDCookieName, bN, w.ClickTaleCookieExpiryDays)
            } else {
                a1(ClickTaleUIDCookieName)
            }
        },
        WREB: function(bN) {
            F.WRE = F.WRDp ? "https://" + F.WRDp : "https://" + bN + F.WRAJ;
            F.WRDx = F.WRDv ? "https://" + F.WRDv : "https://" + bN + F.WRAJ;
            if (F.WRE2) {
                F.WRE4 = "https://" + F.WRE2
            } else {
                F.WRE4 = F.WRDp ? "https://" + F.WRDp : "https://" + bN + F.WRAJ
            }
            if (F.WRE3) {
                F.WRE5 = "https://" + F.WRE3
            } else {
                F.WRE5 = F.WRDp ? "https://" + F.WRDp : "https://" + bN + F.WRAJ
            }
            F.WRE8()
        },
        WREC: function() {
            d(F.WRA, bH, F.WRCQ, F.WRFb)
        },
        WRED: function() {
            F.WRDw = bF();
            return F.WRDw
        },
        WREu: function() {
            return this.WREF()
        }
    };

    function aT() {}
    aT.prototype = {
        WRFE: false,
        WRD3: function() {
            return
        },
        WRD4: function() {
            F.WRBu = true
        },
        WRD5: function() {
            return false
        },
        WRD6: function(bN) {
            if (bN === null || bN === "0") {
                a1(ClickTaleUIDCookieName)
            }
            this.WRFE = true
        },
        WREB: function() {
            F.WRE = F.WRDp ? "https://" + F.WRDp : F.WRE;
            F.WRDx = F.WRDv ? "https://" + F.WRDv : F.WRDx;
            if (F.WRE2) {
                F.WRE4 = "https://" + F.WRE2
            } else {
                F.WRE4 = F.WRDp ? "https://" + F.WRDp : F.WRE4
            }
            if (F.WRE3) {
                F.WRE5 = "https://" + F.WRE3
            } else {
                F.WRE5 = F.WRDp ? "https://" + F.WRDp : F.WRE5
            }
            F.WRE8()
        },
        WRD7: function() {
            var bN, bP = F.WRDx + "auth/",
                bO = F.WRA,
                bQ = F.WRK || 0,
                bR = this;
            if (S) {
                return
            }
            S = true;
            bP += "?pid=" + bO + (bQ && bQ.indexOf(".") < 0 ? "&uid=" + bQ : "");
            bP += F.WRBP ? "&as=1" : "";
            bP += F.WRBS.m ? "&m=1" : "";
            bP += "&" + bF();
            bP += F.WREP.WRFD();
            bP += (F.WRFO) ? "&skiprnd=1" : "";
            bP += L;
            if (ah) {
                bN = new XDomainRequest();
                bN.open("GET", bP);
                bN.onerror = bN.ontimeout = bN.onload = function() {
                    bN.onerror = bN.ontimeout = bN.onload = null;
                    F.WREP.WREE(bN.responseText)
                };
                bN.onprogress = function() {
                    return
                };
                F.WRFs && (bN.timeout = F.WRFs);
                bN.send();
                return
            }
            var bT = {
                location: document.location.href
            };
            var bS = {
                onSuccess: function(bX, bU, bW, bV) {
                    if (bV.status !== 200) {
                        F.WRFc.error("1", bV.status)
                    }
                    F.WREP.WREE(bV.responseText)
                },
                url: bP,
                method: "POST",
                withCredentials: true,
                data: bT.location.indexOf("#") !== -1 ? JSON.stringify(bT) : "{}"
            };
            af(bS)
        },
        WREE: function(bO) {
            try {
                F.WRFV = bO = JSON.parse(bO);
                var bN = bO.rejectReason.indexOf("RejectedByRandomRatio") >= 0;
                if (bO.authorized) {
                    F.WRFX(bO.userTrackingState, bO.expirationMins || 60, true);
                    F.WRK = bO.uid || F.WRK;
                    F.WRDw = bO.sid || F.WRDw;
                    F.WRFJ = bO.ip;
                    bG();
                    F.WRFc.addToContext({
                        uid: F.WRK,
                        sid: F.WRDw,
                        pid: F.WRA,
                        subsid: F.WRFb,
                        ver: 16 + "." + 28 + "." + 9,
                        url: document.location.href
                    })
                }
                if (bN || !bO.authorized) {
                    be("User rejected for recording [reason: " + bO.rejectReason + "]", bN)
                }
                if (F.WRK !== null) {
                    bw(ClickTaleUIDCookieName, F.WRK, w.ClickTaleCookieExpiryDays)
                }
                if (F.WRK === 0 || bv(ClickTaleUIDCookieName) === null) {
                    bf("warning4: the current machine/user is disabled for recording")
                }
            } catch (bP) {
                be("Authentication process failed")
            }
            S = false
        },
        WREF: function() {
            return F.WRDz
        },
        WRD9: function() {
            return typeof F.WRDw === "string" && F.WRDw.length ? F.WRDw : null
        },
        WREA: function() {
            aW.prototype.WREA.apply(this, arguments)
        },
        WREC: function() {
            d(F.WRA, 1, F.WRCQ, F.WRFb)
        },
        WRED: function() {
            F.WRDz = true;
            return F.WRDw
        },
        WREu: function() {
            return !!F.WREv
        },
        WRFD: function() {
            var bO = F.WRFR("ClickTaleSettings.ForceRecording");
            if (bO && bO()) {
                return "&f=1"
            }
            var bN = F.WRFR("ClickTaleSettings.QARecording");
            if (this.WRFE || (bN && bN())) {
                return "&f=2"
            }
            return ""
        }
    };

    function W() {
        return F.WREP.WREu()
    }
    F.WREP = aR();

    function aR() {
        if (F.WREs) {
            return new aW()
        }
        return new aT()
    }
    aF();
    aE();
    bg();
    aG("recorder", "loaded");
    bf("note1: entering debug mode, ClickTale script is installed");
    if (!C()) {
        bf("warning1: top ClickTale script is missing in the page")
    }
    ah = (F.WRBS.t === F.WRBS.IE && F.WRBS.v < 10);
    A = F.WRBS.XDR && (F.WRBS.t == F.WRBS.FF || (F.WRBS.t == F.WRBS.IE && F.WRBS.v >= 9));
    var a7 = a6();
    br = (F.WRD.compatMode == "BackCompat");
    F.WRu = (br ? F.WRD.body : F.WRD.documentElement);
    if (F.WRBS) {
        F.WRCR = (window.ClickTaleSettings && typeof ClickTaleSettings.CookieName != "undefined") ? ClickTaleSettings.CookieName : "__CT_Data";
        var c = "ClickTaleSettings.SubCookie";
        ar = F.WRFR(c + "Seperator", "&");
        aq = F.WRFR(c + "Equator", "=");
        if (F.WRCR) {
            a3(F.WRCR, "gpv", w.ClickTaleCookieExpiryDays)
        }
    }
    if (window.ClickTaleIncludedOnWindowLoad) {
        window.ClickTaleIncludedOnDOMReady = true
    }
    i.saveCurrentPolicy();
    if (!ay()) {
        if (F.WRD.addEventListener) {
            F.WRD.addEventListener("DOMContentLoaded", y, false)
        } else {
            if (F.WRBS && F.WRBS.t == F.WRBS.IE) {
                F.WRD.write('<script id="ClickTaleDefer" defer="defer" src=//:><\/script>');
                (function(bN) {
                    if (bN) {
                        bN.onreadystatechange = function() {
                            if (this.readyState == "complete") {
                                y()
                            }
                        }
                    }
                })(F.WRD.getElementById("ClickTaleDefer"))
            }
        }
    } else {
        y()
    }
    if (!window.ClickTaleIncludedOnWindowLoad) {
        F.WRn(window, "load", by)
    } else {
        by()
    }
    al();

    function al() {
        F.WREJ = F.WREK(window, window.JSON)
    }

    function a6() {
        var bN = document.getElementsByTagName("script");
        if (bN.length) {
            var bO = bN[bN.length - 1];
            if (bO.src) {
                return bO.src
            }
        }
        return false
    }

    function bx(bO) {
        var bN, bP = window.ClickTaleSSL;
        if (F.WREO !== u) {
            if (location.protocol == "http:") {
                bN = bP === 1 || ah
            } else {
                bN = bP === 0
            }
        }
        return bN ? bO.replace(/^https/, "http") : bO
    }

    function d(bR, bT, bN, bS) {
        F.WRFt.timeStart("RecorderStartToUploadStart");
        var bO;
        F.WRFO = bv(ClickTaleIgnoreCookieName);

        function bQ() {
            if (typeof ClickTaleScriptSource != "undefined" && ClickTaleScriptSource !== null) {
                if (typeof ClickTaleScriptSource == "string") {
                    return ClickTaleScriptSource
                } else {
                    return F.WRAJ
                }
            }
            var bV = bN.substr(0, 3) == "www" ? bN : "www";
            if (a7) {
                var bU = ["http://s.clicktale.net/", "https://s2.clicktale.net/", "https://clicktale.pantherssl.com/", "https://clicktalecdn.sslcs.cdngc.net/" + bV + "/"];
                for (var bW = 0; bW < bU.length; bW++) {
                    if (a7.substr(0, bU[bW].length) == bU[bW]) {
                        return bU[bW]
                    }
                }
            }
            if (ah && location.protocol === "http:") {
                return "http://cdn.clicktale.net/" + bV + "/"
            }
            if (typeof clickTaleSSL !== "undefined") {
                if (clickTaleSSL === 0 || (clickTaleSSL === 1 && location.protocol == "http:")) {
                    return "http://cdn.clicktale.net/" + bV + "/"
                }
            }
            return "https://cdnssl.clicktale.net/" + bV + "/"
        }
        if (F.WRAU) {
            bf("CT: Monitoring has already started");
            return
        }
        if (at()) {
            return
        }
        F.WRA = bR;
        F.WRFb = bS;
        if (!bN) {
            bN = "www"
        }
        F.WRCQ = bN;
        F.WREP.WRD3(bT);
        if (!F.WRm) {
            F.WRFc.warn("8");
            return
        }
        if (location.protocol == "file:") {
            return
        }
        var bP = "_" + F.WRA + "_" + F.WRCQ;
        if (F.WRCR) {
            a3(F.WRCR, "apv" + bP, w.ClickTaleCookieExpiryDays)
        }
        if (!ClickTaleIgnoreCookieName || !ClickTaleUIDCookieName || !F.WRCR) {
            bf("warning9: can't record when cookies are not specified");
            if (F.WREs) {
                return
            }
        }
        if (F.WRFO) {
            if (typeof F.WREP.WRFD === "function" && F.WREP.WRFD() !== "") {
                F.WRFO = false
            } else {
                if (F.WREs) {
                    bf("warning6: the current machine/user is temporarily disabled for recording");
                    return
                }
            }
        }
        F.WRK = bv(ClickTaleUIDCookieName);
        F.WRBu = false;
        if (F.WRK == null) {
            F.WREP.WRD4(bT)
        }
        ak = F.WREP.WRD5(bT);
        if (ak) {
            return
        }
        bf("note3b: visitor id " + F.WRK);
        F.WREP.WREB(bN);
        if (!F.WREs && !F.WRAN) {
            bf("can't record when protocol is set to " + u + " and ClickTaleUpload was not called");
            return
        }
        if (!F.WRCT) {
            F.WRAJ = bQ()
        }
        F.WRAU = true;
        aG("recorder", "initialized", {
            projectId: F.WRA,
            recordingRatio: bH || null,
            partition: F.WRCQ,
            version: w.ClickTaleGetVersion(),
            fetchFromUrl: window.ClickTaleFetchFrom,
            isSslDefined: !!window.ClickTaleSSL,
            userId: F.WRK,
            isLogical: F.WRCT
        });
        bz({
            a: "start",
            t: bE()
        });
        if (F.WRCR) {
            a3(F.WRCR, "cpv" + bP, w.ClickTaleCookieExpiryDays)
        }
        if (!F.WREs) {
            L = F.WRFb ? "&subsid=" + F.WRFb : "";
            L += "&msgsize=" + F.WRFY / 1000
        }
        F.WREP.WRD7()
    }

    function aL() {
        return a9(navigator.userAgent)
    }

    function at() {
        if (typeof ClickTaleContext == "object") {
            return true
        }
        try {
            return parent && parent != window && parent.WebPlayer
        } catch (bN) {}
        return false
    }

    function bG() {
        if (F.WRCT && !F.WRCY) {
            F.WRCY = true;
            by()
        }
        if (aN()) {
            bf("note4: preparing for stage 2");
            F.WRV()
        } else {
            if (!aM) {
                aM = true;
                var bO = F.WRD.createElement("script");
                bO.async = true;
                bO.crossorigin = "anonymous";
                bO.src = F.WRAJ + "WR" + 1028 + "b.js";
                var bN = F.WRD.getElementById("ClickTaleDiv");
                if (!bN) {
                    bN = F.WRD.getElementById("ClickTale")
                }
                if (bN) {
                    bf("note4: preparing for stage 2");
                    bN.appendChild(bO)
                } else {
                    bf("error1: no 'ClickTale' DIV element found in this page")
                }
            }
        }
    }

    function aN() {
        return F.WRBT || typeof F.WRV !== "undefined"
    }

    function be(bO, bN) {
        bf("error2: " + bO);
        if (bN) {
            bw(ClickTaleIgnoreCookieName, true, w.ClickTaleCookieExpiryDays ? 0.042 : false)
        }
        F.WRAU = false;
        aG("recorder", "recording rejected")
    }

    function bl() {
        C();
        return bF() + "." + (window.WRInitTime & 2147483647)
    }

    function bi(bN, bO) {
        bO.type = (bN || "").toString();
        av(bO)
    }

    function av(bP) {
        if (!bP.type) {
            bf("CT: Invalid JSON object. No type was specified.");
            return
        }
        var bO = JSON.stringify(bP);
        var bN = {
            a: "json",
            t: bE()
        };
        if (bP.type !== "LogicalFormDeclaration" && bO.length > F.WRE1 && F.WRBS.XDR) {
            bN.streamval = bO
        } else {
            bN.c = bO
        }
        bz(bN)
    }

    function t(bQ, bP, bO) {
        if (bQ.indexOf("Recording") >= 0) {
            F.WRFB = 256;
            F.WREv = true;
            var bN = bO || !F.WRFW;
            if (bN && F.WRFW !== bQ) {
                F.WRFW = bQ;
                F.WRi(w.WRFC, bQ, bP, 60000)
            }
        } else {
            if (bQ.indexOf("Single") >= 0) {
                F.WRFB = 256;
                F.WREv = true;
                F.WRFW = bQ
            }
        }
    }

    function ag() {
        return F.WREP.WRD9()
    }

    function R() {
        var bN = bv(ClickTaleUIDCookieName);
        return (bN > 0 ? bN : null) || F.WRK || null
    }

    function b() {
        return F.WRFb
    }

    function U() {
        return F.WRCQ
    }

    function aw(bN) {
        F.WREP.WREA(bN)
    }

    function bA() {
        return typeof F.WRA == "number" ? F.WRA : null
    }

    function bo() {
        return F.WRFV
    }

    function aS(bN) {
        bz({
            a: "tag",
            c: bN,
            t: bE()
        });
        if (F.WREnableCSTag && window._uxa) {
            _uxa.push(["trackDynamicVariable", {
                key: "ClickTaleEvent" + F.WRGF++,
                value: bN
            }])
        }
    }

    function r(bN) {
        bz({
            a: "note",
            c: bN,
            t: bE()
        })
    }

    function ao(bO, bN) {
        bz({
            a: "field",
            f: bO,
            v: bN,
            t: bE()
        })
    }

    function bD(bP) {
        if (bP.length > F.WRE1 && F.WRBS.XDR) {
            var bN = {};
            if (F.WRFm) {
                var bO = j(bP);
                bN = {
                    a: "exec",
                    t: bE(),
                    streamid: bO
                }
            } else {
                bN = {
                    a: "exec",
                    streamval: bP,
                    t: bE()
                }
            }
            if (F.WRC9 && !F.WRGA) {
                n("htmlcompressioncompleted", bz, bN)
            } else {
                bz(bN)
            }
        } else {
            bz({
                a: "exec",
                c: bP,
                t: bE()
            })
        }
    }

    function o(bP, bR) {
        var bQ = F.WRGB[bP];
        var bN = bQ ? bQ.length : 0;
        while (bN--) {
            var bO = bQ[bN].args;
            (bO) ? bQ[bN].func(bO): bQ[bN].func()
        }
        if (bR) {
            F.WRGB[bP] = []
        }
    }

    function n(bP, bO, bN) {
        if (!F.WRGB[bP]) {
            F.WRGB[bP] = []
        }
        F.WRGB[bP].push({
            func: bO,
            args: bN
        })
    }

    function j(bO) {
        var bN = ";-;-;";
        WRFi += (WRFi.length > 1) ? bN + bO : bO;
        if (WRFi.length >= F.WRFY) {
            k()
        } else {
            if (WRFk === 0) {
                WRFk = setInterval(k, WRFj)
            }
        }
        return WRFh
    }

    function k() {
        var bN = "$";
        if (aO() && WRFi.length > 1) {
            WRFh = F.WRBb(WRFi);
            WRFi = bN;
            clearInterval(WRFk);
            WRFk = 0;
            WRFh
        }
    }

    function bp(bN) {
        if (aO()) {
            F.WRB0(bN)
        } else {
            if (bN == null) {
                bz({
                    a: "submitsuccess",
                    i: false,
                    t: bE()
                })
            }
        }
    }

    function bL(bN) {
        if (aO()) {
            F.WRB1(bN)
        } else {
            if (bN == null) {
                bz({
                    a: "submitfail",
                    i: false,
                    t: bE()
                })
            }
        }
    }

    function Y(bN) {
        bw(ClickTaleUIDCookieName, 0, bN)
    }

    function bk(bN, bO) {
        if (F.WRAU) {
            bf("CTUP: Monitoring has already started")
        }
        F.WRAN = true;
        F.WRAP = bN;
        F.WRAQ = bO;
        if (F.WRAW && !F.WRFA) {
            F.WRAW()
        }
    }

    function a() {
        F.WRFA = true;
        bk()
    }

    function bM() {
        if (ClickTaleIsRecording() && F.WRFA) {
            F.WRAW()
        }
    }

    function ax(bO, bN) {
        F.WRFP[bO] = bN
    }

    function an() {
        return F.WRAN
    }

    function K() {
        F.WRBP = true;
        F.WRFI = []
    }

    function q() {
        F.WRBP = false;
        F.WRFI = []
    }

    function H(bN) {
        I(bN, !F.WRBP)
    }

    function bq(bN) {
        I(bN, F.WRBP)
    }

    function I(bN, bO) {
        var bP, bR, bS = document.querySelectorAll(bN);
        for (var bQ = 0; bQ < bS.length; bQ++) {
            bR = bS[bQ];
            bP = F.WRFI.indexOf(bR);
            if (bO) {
                bP < 0 && F.WRFI.push(bR)
            } else {
                bP >= 0 && F.WRFI.splice(bP, 1)
            }
        }
    }

    function bj() {
        return [16, 28, 9]
    }

    function f(bN, bO) {
        bN.ClickTale = bN.ClickTale || {};
        bN.ClickTale.CustomID = bO
    }

    function y() {
        var bO = window.requestAnimationFrame || setTimeout;
        if (at() || F.WRDA) {
            return
        }
        F.WRDA = true;
        var bP = F.WRD.getElementById("ClickTaleDefer");
        if (bP) {
            bP.parentNode.removeChild(bP)
        }
        if (window.performance) {
            var bN = function() {
                bz({
                    a: "domload",
                    t: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
                })
            };
            if (performance.timing.domContentLoadedEventEnd) {
                bN()
            } else {
                bO(bN)
            }
        } else {
            bz({
                a: "domload",
                t: bE()
            })
        }
        if (F.WRAW && !F.WRFA) {
            F.WRAW()
        }
    }

    function bg() {
        if (at()) {
            return
        }
        bc(location.hash.substr(1));
        bc(location.search.substr(1))
    }

    function bc(bQ) {
        var bP = bQ.split("&");
        for (var bO = 0; bO < bP.length; bO++) {
            var bR = bP[bO].split("=");
            var bN = decodeURIComponent(bR[0]).toLowerCase();
            if (bR.length == 2 && (bN == "ct" || bN == "clicktale")) {
                ba(bR[1])
            }
        }
    }

    function ba(bQ) {
        var bP = bQ.split(",");
        for (var bO = 0; bO < bP.length; bO++) {
            switch (bP[bO].toLowerCase()) {
                case "debug":
                    if (!ay()) {
                        F.WRD.write('<textarea id="ClickTaleDebugDump" rows="5" cols="80" style="position: absolute; left:10px; top:10px; border: solid #6C358D;"></textarea>')
                    }
                    bh = F.WRD.getElementById("ClickTaleDebugDump");
                    if (bh) {
                        bh.value = ""
                    }
                    aD("inPage");
                    aD("console");
                    break;
                case "enable":
                    if (F.WREs) {
                        a1(ClickTaleIgnoreCookieName);
                        var bN = bv(ClickTaleUIDCookieName)
                    }
                    F.WREP.WRD6(bN);
                    break;
                case "disable":
                    bw(ClickTaleUIDCookieName, 0, w.ClickTaleCookieExpiryDays);
                    break;
                case "reset":
                    a1(ClickTaleUIDCookieName);
                    break;
                case "uaskipcheck":
                    F.WRBS = bd(true);
                    bf("warning8: skipping userAgent support check, running as: " + F.WRBS.a);
                    break;
                default:
                    ts = bP[bO].match(/^(\w+)(\(|%28)(.+)(\)|%29)$/i);
                    if (ts && ts.length == 5) {
                        var bN = decodeURIComponent(ts[3]),
                            bR = ts[1];
                        switch (bR.toLowerCase()) {
                            case "t":
                                w.ClickTaleTag(bN);
                                break;
                            case "u":
                                F.WREP.WREA(bN);
                                break;
                            case "ua":
                                F.WRm = decodeURIComponent(bN);
                                bf("warning7: forcing userAgent type: " + F.WRm);
                                break;
                            case "uao":
                                F.WRBS = JSON.parse(bN);
                                bf("warning7: forcing userAgentObj type: " + bN);
                                break;
                            case "report":
                                if (/test|subs\d?\d?/.test(bN)) {
                                    aD("crossDomainMessaging");
                                    aQ = "http://" + (bN == "test" ? "qa-core.app.clicktale.com" : (bN + ".app.clicktale.com"))
                                }
                                break;
                            default:
                                bf("warning5: unknown parameter in URL: " + bR);
                                break
                        }
                    }
                    break
            }
        }
    }

    function bf(bN) {
        var bO = {
            message: bN
        };
        w.ClickTaleLog("recorder", "debug", bO)
    }

    function aF() {
        aJ.inPage = aC;
        aJ.crossDomainMessaging = aB;
        aJ.console = aA
    }

    function aE() {
        var bO = F.WRFR("ClickTaleSettings.LogHandlers");
        if (bO instanceof window.Array) {
            for (var bN = 0; bN < bO.length; bN++) {
                var bP = bO[bN];
                if (bP) {
                    aD(bP)
                }
            }
        }
    }

    function aD(bN) {
        if (bN in aJ && !(bN in aH)) {
            aH[bN] = aJ[bN]
        }
    }

    function aC(bN) {
        if (bh && bN.type == "debug" && bN.module == "recorder") {
            aK += (bN.message + "\n");
            bh.value = aK
        }
    }

    function aB(bP) {
        if (!!aQ) {
            try {
                var bN = JSON.stringify(bP);
                if (parent && parent != window) {
                    if (parent.postMessage) {
                        parent.postMessage(bN, aQ)
                    } else {
                        console && console.log("CT: Browser doesn't support cross domain logging.")
                    }
                } else {
                    console && console.log("CT: " + bN)
                }
            } catch (bO) {
                console && console.log("CT: exception trying to communicate cross domain log information.")
            }
        }
    }

    function aA(bN) {
        if (console && console.log) {
            console.log(bN.module + " ", bN.type + " ", bN)
        }
    }

    function bb(bQ, bO) {
        var bP = w.ClickTaleStop || window.ClickTaleStop;
        var bN = window.location;
        if (ClickTaleIsRecording() && bP) {
            bP()
        }
        window.WRInitTime = (new Date()).getTime();
        F.WRCT = true;
        F.WRCc = bQ;
        F.WRAU = false;
        if (bO) {
            F.WRCU = bO
        }
        if (window.WRA0) {
            WRA0(true)
        }
        al();
        F.WREP.WREC();
        if (F.WREnableCSTag && window._uxa) {
            _uxa.push(["trackPageview", bN.pathname + bN.search])
        }
    }

    function e() {
        F.WREJ && F.WREJ.dispatchMessages()
    }

    function O(bQ, bP, bU, bS, bO) {
        var bT = (bO === 0 && (bU & 3)),
            bV = bQ.useBeacon = v(bT) && !bK,
            bR = J(bQ.isBinaryStream, bS, bT) && !bV,
            bN = !A && !F.WRDi && bT && bR && bK;
        if (bT) {
            F.WRFc.info("2")
        }
        if (bN) {
            bQ.url = G(bP + bU, bS);
            bQ.onError = bQ.onSuccess;
            N(bQ)
        } else {
            M(bR, bQ, bP, bU, bS)
        }
    }

    function M(bT, bP, bO, bX, bV) {
        var bW = ah ? 16 : 8,
            bR = bO + (bX | bW);
        var bQ = F.WRFQ === 0;
        if (bT) {
            if (bQ && !bP.useBeacon && !bP.isBinaryStream) {
                var b2 = [];
                var b1 = bV.split("&");
                for (var bU = 0; bU < b1.length; bU++) {
                    var bN = b1[bU];
                    var b0 = bN.replace(/\+/g, "!**!").replace(/\//g, "~--~");
                    var bS = decodeURIComponent(b0);
                    var bZ = encodeURIComponent(bS);
                    var bY = bZ.replace(/!\*\*!/g, "+").replace(/~--~/g, "/");
                    b2.push(bY)
                }
                bV = b2.join("&")
            }
            bP.url = G(bR, bV);
            bP.method = "GET"
        } else {
            bP.data = bV;
            bP.url = bR + L;
            bP.method = "POST"
        }
        af(bP)
    }

    function G(bN, bO) {
        return bN + L + "&" + bO + "&" + bF()
    }

    function N(bN) {
        var bO = new Image();
        Z(bO, bN, 5000);
        bO.src = bN.url
    }

    function J(bO, bP, bN) {
        if (bO) {
            return false
        }
        if (F.WRFQ === 0) {
            return bN
        }
        return bP.length <= 1500 || bN || !F.WRBS.XDR
    }

    function v(bN) {
        return bN && navigator.sendBeacon && am
    }

    function af(bP) {
        var bO;
        if (ah) {
            bO = setTimeout(function() {
                clearTimeout(bO);
                Q(ad(bP), bP)
            }, 0)
        } else {
            var bN = bP.useBeacon ? x : ab;
            Q(bN(bP), bP)
        }
    }

    function ad(bO) {
        var bN = new XDomainRequest();
        bN.open(bO.method, bO.url);
        bN.onprogress = bO.method === "GET" ? function() {
            return
        } : function() {};
        Z(bN, bO, F.WRFs);
        return bN
    }

    function x(bN) {
        return {
            send: function(bP) {
                var bO = navigator.sendBeacon(bN.url, bN.data) ? bN.onSuccess : bN.onError;
                if (bO) {
                    (l(bO, {}, bN))()
                }
            }
        }
    }

    function ab(bN) {
        var bO = F.WRBY();
        var bQ = new bO();
        var bP = window.ClickTaleOnXHRCreated;
        if (typeof bP == "function") {
            bQ = bP(bQ) || bQ
        }
        bQ.open(bN.method, bN.url, true);
        if (bN.method === "POST" && !bN.isBinaryStream) {
            bQ.setRequestHeader("Content-Type", "text/plain")
        }
        X(bQ, bN);
        Z(bQ, bN, F.WRFs);
        return bQ
    }

    function Z(bN, bO, bP) {
        V(bN, bO);
        T(bN, bO);
        bN.withCredentials = !!bO.withCredentials;
        bP && (bN.timeout = bP)
    }

    function X(bN, bP, bQ) {
        var bO = l(function(bT, bU, bS) {
            var bV = bP.onSuccess,
                bR = bP.onError || bV;
            if (bN.status === 200 && bV) {
                bV(bT, bU, bS, bN)
            } else {
                if (bR) {
                    bR(bT, bU, bS, bN)
                }
            }
        }, bN, bP);
        bN.onreadystatechange = function() {
            if (bN.readyState === 4) {
                bO()
            }
        }
    }

    function V(bN, bO) {
        bN.onload = l(function(bQ, bR, bP) {
            if (bO.onSuccess) {
                bO.onSuccess(bQ, bR, bP, bN)
            }
        }, bN, bO)
    }

    function T(bN, bO) {
        bN.onerror = bN.ontimeout = l(function(bQ, bS, bP) {
            var bR = bO.onError || bO.onSuccess;
            if (bR) {
                bR(bQ, bS, bP, bN)
            }
        }, bN, bO)
    }

    function l(bP, bN, bO) {
        return function() {
            if (!bN.responded) {
                var bR = bO.url.length,
                    bT = bO.onComplete,
                    bQ = bO.isBinaryStream,
                    bS = new Date() - bO.startTime;
                bN.responded = true;
                bN.ontimeout = bN.onerror = bN.onload = bN.onreadystatechange = null;
                bP(bR, bS, bQ);
                if (bT) {
                    bT(bR, bS, bQ)
                }
            }
        }
    }

    function Q(bO, bN) {
        if (F.WRFz && F.WRFy) {
            return
        }
        if (bN.onBeforeSend) {
            bN.onBeforeSend()
        }
        if (bN.data) {
            bO.send(bN.data);
            return
        }
        bO.send()
    }

    function bd(bN) {
        var bO = a9(navigator.userAgent);
        if (!bN) {
            if (window.ClickTaleSettings && ClickTaleSettings.CheckAgentSupport) {
                bO = ClickTaleSettings.CheckAgentSupport(a8, bO)
            } else {
                bO = a8(bO)
            }
        }
        return bO
    }

    function a8(bN) {
        if (!bN || (bN.t == bN.ED && !bN.m) || (bN.t == bN.Ch && bN.v >= 9) || (bN.t == bN.Sa && (bN.v >= 5.1 || bN.v == 0)) || (bN.t == bN.WK && bN.v >= 534) || (bN.t == bN.IE && bN.v >= 10 && !bN.m) || (bN.t == bN.FF && bN.v >= 25)) {
            return bN
        }
        return false
    }

    function aV(bO) {
        var bQ = {};
        var bR = " " + bO + " ";
        var bP = / (\w+)(?:\/([\w\.]+))? (?:(\([^\)]+\)) )?/img;
        var bN;
        while ((bN = bP.exec(bR)) != null) {
            bQ[bN[1]] = {
                value: bN[2],
                extra: bN[3]
            };
            bP.lastIndex--
        }
        return bQ
    }

    function a9(bP) {
        var bQ = {
            IE: 0,
            FF: 1,
            Ch: 2,
            Sa: 3,
            Op: 4,
            WK: 5,
            ED: 6
        };
        bQ.m = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|CriOS|bada/i.test(bP);
        bQ.XHRBin = !!window.Uint8Array;
        var bS = aV(bP);
        if (bS.Opera || bS.OPR) {
            bQ.t = bQ.Op;
            bQ.v = /(?:Version|OPR)\/(\d+)/i.exec(bP);
            bQ.a = "Op";
            return bQ
        }
        if (bS.Mozilla && bS.Mozilla.extra) {
            var bR = bS.Mozilla.extra;
            var bO = bR.indexOf("MSIE ");
            if (bO != -1) {
                bQ.t = bQ.IE;
                bQ.v = parseFloat(bR.substr(bO + 5, 3));
                bQ.a = "IE" + bQ.v;
                bQ.m = bQ.m || (bR.indexOf("; Touch") != -1) || (bR.indexOf("; IEMobile/") != -1);
                if (bQ.v >= 8) {
                    bQ.XDR = true
                }
                return bQ
            } else {
                if (bR.indexOf("; Trident/") != -1) {
                    var bO = bR.indexOf("; rv:");
                    if (bO != -1) {
                        bQ.t = bQ.IE;
                        bQ.v = parseFloat(bR.substr(bO + 5, 3));
                        bQ.a = "IE" + bQ.v;
                        bQ.m = bQ.m || (bR.indexOf("; Touch") != -1) || (bR.indexOf("; IEMobile/") != -1);
                        bQ.XDR = true;
                        return bQ
                    }
                }
            }
        }
        if (bS.Firefox && bS.Firefox.value) {
            bQ.t = bQ.FF;
            bQ.v = parseFloat(bS.Firefox.value);
            if (bQ.v < 10) {
                bQ.a = "FF" + (bQ.v * 10)
            } else {
                bQ.a = "FF" + bQ.v
            }
            bQ.m = bQ.m || (bS.Mozilla && bS.Mozilla.extra && bS.Mozilla.extra.indexOf("Android; ") != -1);
            if (bQ.v >= 3.5) {
                bQ.XDR = true
            }
            return bQ
        }
        if (bS.Edge && bS.Edge.value) {
            bQ.t = bQ.ED;
            bQ.v = parseInt(bS.Edge.value);
            bQ.a = "ED" + bQ.v;
            bQ.m = bQ.m || bP.indexOf("Windows Phone; ") !== -1;
            bQ.XDR = true;
            return bQ
        }
        if (((bS.Chrome && bS.Chrome.value) || (bS.CriOS && bS.CriOS.value)) && !bS.Version) {
            bQ.t = bQ.Ch;
            bQ.v = parseFloat(bS.Chrome ? bS.Chrome.value : bS.CriOS.value);
            bQ.a = "Ch" + bQ.v;
            bQ.m = bQ.m || (!(!bS.CriOS)) || (bS.Mozilla && bS.Mozilla.extra && bS.Mozilla.extra.indexOf("; Android ") != -1);
            if (bQ.v >= 9) {
                bQ.XDR = true
            }
            return bQ
        }
        if (bS.Safari) {
            if (bS.Mozilla && bS.Mozilla.extra && bS.Mozilla.extra.indexOf("; Android ") != -1 && bS.AppleWebKit && bS.AppleWebKit.value) {
                bQ.t = bQ.WK;
                bQ.v = parseFloat(bS.AppleWebKit.value);
                bQ.a = "WK" + parseInt(bQ.v);
                bQ.m = true;
                if (bQ.v === 0 || bQ.v >= 5) {
                    bQ.XDR = true
                }
                bQ.XHRBin &= bQ.v >= 535;
                return bQ
            }
            if (bS.Mozilla && bS.Mozilla.extra && bS.Mozilla.extra.indexOf("Windows") === -1) {
                var bN = (bS.Version && bS.Version.value) ? parseFloat(bS.Version.value) : 0;
                bQ.t = bQ.Sa;
                bQ.v = bN;
                bQ.a = "Sa" + bQ.v;
                bQ.m = bQ.m || !(!bS.Mobile);
                if (bQ.v === 0 || bQ.v >= 5) {
                    bQ.XDR = true
                }
                bQ.XHRBin &= parseFloat(bS.AppleWebKit.value) >= 535;
                return bQ
            }
        }
        return false
    }

    function bu(bP, bN, bO, bQ) {
        if (bP.addEventListener) {
            bP.addEventListener(bN, bO, bQ)
        }
    }
    window.ClickTaleFetchFromWithCookies = w.ClickTaleFetchFromWithCookies = (function() {
        var bO = [],
            bR, bU, bQ, bN, bT, bP;
        bN = function(bY, bX) {
            bX = bX || bO;
            for (var bW = 0, bV = bO.length; bW < bV; bW++) {
                if (bY.call(bX, bO[bW], bW)) {
                    return true
                }
            }
            return false
        };
        bR = function(bV) {
            return bN(function(bX, bW) {
                return bX.k == bV
            })
        };
        bU = function(bV) {
            var bW = null;
            bN(function(bY, bX) {
                if (bY.k == bV) {
                    bW = bY;
                    return true
                }
                return false
            });
            return bW
        };
        bP = function(bV, bW) {
            var bX = bU(bV);
            if (bX) {
                bX.v = bW
            } else {
                bO.push({
                    k: bV,
                    v: bW
                })
            }
        };
        bT = function(bX) {
            var bW = arguments.callee;
            if (!bW.sRE) {
                var bV = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"];
                bW.sRE = new RegExp("(\\" + bV.join("|\\") + ")", "g")
            }
            return bX.replace(bW.sRE, "\\$1")
        };
        bQ = function(bV) {
            if (bV instanceof String || bV instanceof Boolean || bV instanceof Number) {
                bV = bV.valueOf()
            } else {
                if (bV === null) {
                    return "null"
                }
            }
            switch (typeof bV) {
                case "number":
                    bV = isFinite(bV) ? String(bV) : "null";
                    break;
                case "boolean":
                    bV = String(bV);
                    break;
                case "object":
                    if (typeof bV.toString == "function") {
                        bV = bV.toString()
                    } else {
                        bV = "[Object]"
                    }
                    break
            }
            return bV
        };
        var bS = {
            _URL_PARAM_NAME: "CTFetchCookies",
            cookieNameDecoder: decodeURIComponent,
            cookieValueDecoder: function(bV) {
                return bV
            },
            clear: function() {
                bO = []
            },
            set: function(bW, bV) {
                if (bV === null || typeof bV == "undefined") {
                    bS.setFromCookie(bW);
                    return
                }
                bV = bQ(bV);
                bP(bW, bV)
            },
            setFromCookie: function(bV) {
                var b2, b1, bW, bZ, b0 = document.cookie.split(/;\s/g),
                    bY;
                if (typeof bV == "string") {
                    b2 = function(b3) {
                        return b3 == bV
                    }
                } else {
                    if (typeof bV.test == "function") {
                        b2 = function(b3) {
                            return bV.test(b3)
                        }
                    } else {
                        b2 = function() {
                            return false
                        }
                    }
                }
                for (bY = 0; bY < b0.length; bY++) {
                    bW = b0[bY].match(/([^=]+)=/i);
                    if (bW instanceof Array) {
                        try {
                            b1 = bS.cookieNameDecoder(bW[1]);
                            bZ = bS.cookieValueDecoder(b0[bY].substring(bW[1].length + 1))
                        } catch (bX) {}
                    } else {
                        b1 = bS.cookieNameDecoder(b0[bY]);
                        bZ = b1
                    }
                    if (b2(b1)) {
                        bP(b1, bZ)
                    }
                }
            },
            constructCookiesParam: function() {
                var bV = [];
                bN(function(bX, bW) {
                    bV.push(bX.k);
                    bV.push("=");
                    bV.push(bX.v);
                    bV.push(";");
                    return false
                });
                return bS._URL_PARAM_NAME + "=" + encodeURIComponent(bV.join(""))
            },
            constructCookiesHash: function() {
                return "#" + bS.constructCookiesParam()
            },
            constructFetchFromUrl: function(bV) {
                bV = bV || window.location.href;
                if (!(bV.indexOf("#") >= 0)) {
                    bV += "#"
                } else {
                    bV += "&"
                }
                bV += bS.constructCookiesParam();
                return bV
            }
        };
        return bS
    })();
    if (!w.ClickTaleOnReadyInvoked) {
        w.ClickTaleOnReadyInvoked = true;
        var bC, bB = ClickTaleGlobal.scripts,
            bI = function() {
                if (typeof ClickTaleOnReady == "function") {
                    ClickTaleOnReady()
                }
                F.WREj(window.ClickTaleOnReadyList)
            };
        if (bB) {
            bC = bB.dependencies;
            bC && bC.onDependencyResolved(bI);
            bC.notifyScriptLoaded("wr")
        } else {
            bI()
        }
    }
}();
//Signature:SEWg4kVRWY3ZXdcilXpSNmPuAA1BXOaDe39rxouNYMAEsK1pMRV7awaDErogFsTqxoUDN5TlEcOjaQ971miYFDe4p5YTHBJXq6iLWUnPHTBeuRxsCiOquRW41lk8+Lo62c4n9j/RsVv7PvQFX++ILk5OIlYfZ21lqD70zFJ4RuM=