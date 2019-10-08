! function() {
    var f, l = this && this.I || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
    };

    function m() {}
    m.prototype.onUnavailable = function() {};

    function p(a) {
        var b = Array.prototype,
            c = b.toJSON;
        return c ? (delete b.toJSON, a = JSON.stringify(a), b.toJSON = c, a) : JSON.stringify(a)
    }

    function q() {
        this.crossPriority = 0;
        this.largePriority = 10;
        this.syncPriority = 100;
        this.storeType = 4;
        try {
            if (this.a = window.localStorage) this.a.setItem("ct.ls.k", "ct.ls.v"), "ct.ls.v" === this.a["ct.ls.k"] && (this.isAvailable = !0), this.a.removeItem("ct.ls.k")
        } catch (a) {
            r(this)
        }
    }
    l(q, m);
    q.prototype.add = function(a, b) {
        a.locator.key = "ct.ls." + a.locator.key;
        this.update(a, b);
        return a.locator
    };
    q.prototype.remove = function(a, b) {
        var c = this;
        t(this, function() {
            return c.a.removeItem(a.key)
        }, function() {
            return b(a)
        })
    };
    q.prototype.update = function(a, b) {
        var c = this;
        t(this, function() {
            return c.a.setItem(a.locator.key, p(a.c))
        }, function() {
            return b(a.locator)
        })
    };
    q.prototype.getAll = function(a) {
        var b = this,
            c = [];
        t(this, function() {
            u(b, function(a) {
                c.push({
                    c: JSON.parse(b.a[a]),
                    locator: {
                        key: a,
                        storeType: b.storeType
                    }
                })
            });
            a(c)
        }, function() {
            return a(c)
        })
    };

    function t(a, b, c) {
        try {
            b()
        } catch (d) {
            r(a), setTimeout(function() {
                return c
            }, 0)
        }
    }

    function r(a) {
        a.isAvailable = !1;
        a.onUnavailable();
        u(a, function(b) {
            return a.a.removeItem(b)
        })
    }

    function u(a, b) {
        if (a.a)
            for (var c in a.a) 0 === c.indexOf("ct.ls.") && b(c)
    }

    function v() {
        var a = this;
        this.f = [];
        this.crossPriority = this.syncPriority = 0;
        this.isAvailable = !0;
        this.largePriority = 100;
        this.storeType = 3;
        try {
            if (window.indexedDB) {
                var b = function() {
                        return w(a)
                    },
                    c = indexedDB.open("ct.db", 2);
                c.onupgradeneeded = function(b) {
                    if (b = x(a, b.target)) b.objectStoreNames.contains("ct.db.os") && b.deleteObjectStore("ct.db.os"), b.objectStoreNames.contains("ct.db.st") || b.createObjectStore("ct.db.st").createIndex("sid", "sid", {
                        unique: !1
                    })
                };
                c.onsuccess = function(c) {
                    var e = a.a;
                    !e && (e = x(a, c.target)) &&
                        (e.onabort = e.onversionchange = e.onclose = b, a.b = !0, y(a))
                };
                c.onerror = c.onblocked = b
            }
        } catch (d) {
            w(this)
        }
    }
    l(v, m);

    function x(a, b) {
        if (b.result.constructor === IDBDatabase) return b.result;
        w(a);
        return null
    }
    v.prototype.add = function(a, b) {
        a.locator.key = "ct.db." + a.locator.key;
        this.update(a, b);
        return a.locator
    };
    v.prototype.remove = function(a, b) {
        A(this, this.remove, 1, [a.key], a, b)
    };
    v.prototype.update = function(a, b) {
        A(this, this.update, 0, [a.c, a.locator.key], a, b)
    };
    v.prototype.getAll = function(a) {
        var b = this,
            c = [];
        if (this.b) try {
            var d = this.a.transaction("ct.db.st", "readonly");
            d.onabort = d.onerror = d.oncomplete = function() {
                return a(c)
            };
            d.objectStore("ct.db.st").openCursor().onsuccess = function(a) {
                (a = a.target.result) && a.constructor === IDBCursorWithValue && (c.push({
                    c: a.value,
                    locator: {
                        key: a.key,
                        storeType: b.storeType
                    }
                }), a["continue"]())
            }
        } catch (e) {
            e.constructor === DOMException && "InvalidStateError" === e.name && (this.a.objectStoreNames.contains("ct.db.st") || w(this)), a(c)
        } else C(this,
            this.getAll, [a])
    };

    function y(a) {
        var b = setTimeout(function() {
            clearTimeout(b);
            var c = a.f.shift();
            c && (c.w.apply(a, c.D), y(a))
        }, 0)
    }

    function w(a) {
        a.isAvailable = a.b = !1;
        try {
            a.a.close()
        } catch (b) {}
        a.a = null;
        a.onUnavailable()
    }

    function A(a, b, c, d, e, z) {
        var k = e.locator || e;
        if (!a.b || a.g) C(a, b, [e, z]);
        else try {
            a.g = !0;
            var g = a.a.transaction("ct.db.st", "readwrite");
            g.onabort = g.onerror = function() {
                D(a);
                z(k)
            };
            g.oncomplete = function() {
                return D(a)
            };
            var n = g.objectStore("ct.db.st");
            switch (c) {
                case 0:
                    n.put(d[0], d[1]);
                    break;
                case 1:
                    n["delete"](d[0])
            }
        } catch (h) {
            w(a), D(a), z(k)
        }
    }

    function D(a) {
        a.g = !1;
        y(a)
    }

    function C(a, b, c) {
        a.f.push({
            w: b,
            D: c
        })
    }

    function E(a, b, c) {
        this.a = a;
        this.f = b;
        this.b = c;
        this.a.registerDispatcher(b)
    }
    f = E.prototype;
    f.throttleUp = function() {
        this.a.throttleUp()
    };
    f.deThrottle = function() {
        this.a.deThrottle()
    };
    f.stopSession = function(a, b) {
        this.a.stopSession(a, b || this.b)
    };
    f.startSession = function(a, b) {
        this.a.startSession(a, b || this.b)
    };
    f.extendSession = function(a, b) {
        this.a.extendSession(a, b || this.b)
    };
    f.sendMessages = function() {
        this.f.dispatched || (this.f.dispatched = !0, this.a.sendMessages())
    };
    f.removeMessage = function(a) {
        this.a.removeMessage(a)
    };
    f.storeMessage = function(a, b, c, d) {
        return this.a.storeMessage(a, b, c, d)
    };

    function F(a, b) {
        var c = this;
        this.j = a;
        this.m = b;
        this.h = this.l = 0;
        this.b = [];
        this.i = [];
        this.g = {};
        this.a = {};
        this.f = {};
        this.o = [];
        this.s();
        this.h = b.curr();
        a.forEach(function(a) {
            return a.onUnavailable = c.s.bind(c)
        })
    }
    f = F.prototype;
    f.registerDispatcher = function(a) {
        var b = this;
        a.supportedMessageNames.forEach(function(c) {
            return b.g[c] = a
        })
    };
    f.unregisterDispatcher = function(a) {
        var b = this;
        a.supportedMessageNames.forEach(function(a) {
            return delete b.g[a]
        })
    };
    f.throttleUp = function() {
        this.h = this.m.next()
    };
    f.deThrottle = function() {
        this.m.reset();
        this.h = this.m.curr()
    };
    f.stopSession = function(a, b) {
        this.a[a] && (this.extendSession(a, b), delete this.a[a])
    };
    f.startSession = function(a, b) {
        var c = this,
            d = Date.now();
        if (!this.a[a]) {
            var e = void 0;
            this.a[a] = e = G({
                sid: a,
                created: d,
                expires: d + b
            }, 1);
            H(this, e, function() {
                return delete c.a[a]
            }, !1, !1)
        }
    };
    f.extendSession = function(a, b) {
        var c;
        if (c = this.a[a]) {
            c.c.item.expires = Date.now() + b;
            var d = J(this, c.locator);
            this.a[a] = c;
            d && d.update(c, function() {})
        }
    };
    f.storeMessage = function(a, b, c, d) {
        return this.a[a.sid] ? (a = G(a, 2), H(this, a, function(a) {
            return b(a)
        }, c, d), a.locator) : null
    };
    f.removeMessage = function(a) {
        K(this, {
            u: a,
            F: 0
        })
    };
    f.sendMessages = function() {
        var a = this,
            b = 0,
            c = [],
            d = this.j.filter(function(a) {
                return a.isAvailable
            });
        this.i.forEach(function(b) {
            a.g[b.c.item.name] && a.b.push(b)
        });
        d.forEach(function(e) {
            return e.getAll(function(e) {
                c = c.concat(e);
                if (++b === d.length) {
                    e = c;
                    for (var k, g = null, n = 0; n < e.length; n++) {
                        var h = e[n];
                        if (k = h.c.item) {
                            var B = h.c.type;
                            1 !== B || a.a[k.sid] || a.f[k.sid] ? 2 === B && -1 === a.b.indexOf(h) && -1 === a.i.indexOf(h) && a.b.push(h) : (g && g.c.type === B && (g.c.item.expires = 0), a.f[k.sid] = h, a.b.push(h))
                        }
                        g = h
                    }
                    L(a)
                }
            })
        })
    };

    function G(a, b) {
        return {
            c: {
                v: 1,
                type: b,
                item: a
            },
            locator: {
                storeType: 0,
                key: Date.now() + "." + parseInt(1E6 * (Math.random() + 1), 10)
            }
        }
    }

    function H(a, b, c, d, e) {
        (a = d && a.C || e && a.G || a.H) ? (b.locator.storeType = a.storeType, a.add(b, c)) : c(b.locator)
    }

    function K(a, b) {
        function c() {
            3 > ++b.F && a.o.push(b);
            M(a.B.bind(a), 1E3)
        }
        var d = b.u,
            e = J(a, b.u);
        e ? e.remove(d, c) : c()
    }

    function L(a) {
        a.l = M(a.A.bind(a), a.h, function() {
            return a.l = 0
        })
    }

    function M(a, b, c) {
        var d = setTimeout(function() {
            c && c();
            clearTimeout(d);
            a()
        }, b);
        return d
    }
    f.A = function() {
        var a = this,
            b = this.b.shift();
        if (b) {
            var c = b.c.item,
                d = this.g[c.name];
            (c = (c = this.f[c.sid]) && c.c.item) ? c.expires < Date.now() ? (delete this.f[c.sid], this.removeMessage(b.locator)) : d && d.isAvailable ? d.dispatch({
                message: b.c.item,
                locator: b.locator
            }, {
                defer: function() {
                    a.b.push(b);
                    a.l || L(a)
                },
                reject: function() {
                    a.removeMessage(b.locator)
                },
                resolve: function() {
                    a.i.push(b)
                }
            }) : this.i.push(b): this.removeMessage(b.locator);
            L(this)
        }
    };
    f.B = function() {
        var a = this.o.shift();
        a && K(this, a)
    };

    function J(a, b) {
        return a.j.filter(function(a) {
            return a.storeType === b.storeType && a.isAvailable
        })[0]
    }
    f.s = function() {
        var a = this.j.filter(function(a) {
            return a.isAvailable
        });
        this.H = a.filter(function(a) {
            return 0 < a.syncPriority
        }).sort(function(a, c) {
            return c.syncPriority - a.syncPriority
        })[0];
        this.G = a.filter(function(a) {
            return 0 < a.largePriority
        }).sort(function(a, c) {
            return c.largePriority - a.largePriority
        })[0];
        this.C = a.filter(function(a) {
            return 0 < a.crossPriority
        }).sort(function(a, c) {
            return c.crossPriority - a.crossPriority
        })[0]
    };

    function N(a, b) {
        void 0 === a && (a = 3E4);
        void 0 === b && (b = window);
        this.g = a;
        this.f = -1;
        this.a = b;
        this.syncPriority = 10;
        this.largePriority = this.crossPriority = 0;
        this.storeType = 2;
        if (this.a.name && 0 !== this.a.name.length)
            if ("_CT_" === this.a.name.substr(0, 4)) try {
                this.b = JSON.parse(this.a.name.substr(4, this.a.name.length));
                this.isAvailable = !0;
                var c = Object.keys(this.b);
                0 < c.length && (this.f = parseInt(c[c.length - 1], 10))
            } catch (d) {
                O(this)
            } else O(this);
            else this.a.name = "", this.b = {}, P(this), this.isAvailable = !0
    }
    l(N, m);

    function P(a) {
        a.a.name = "_CT_" + p(a.b)
    }

    function O(a) {
        a.isAvailable = !1;
        a.onUnavailable()
    }

    function Q(a) {
        if ("_CT_" === a.a.name.substr(0, 4)) return !1;
        O(a);
        return !0
    }
    N.prototype.add = function(a) {
        if (Q(this)) return null;
        if (this.a.name.length > this.g) return O(this), null;
        a.locator.key = (++this.f).toString();
        this.b[this.f] = a.c;
        P(this);
        return a.locator
    };
    N.prototype.remove = function(a) {
        Q(this) || (delete this.b[a.key], P(this))
    };
    N.prototype.update = function(a) {
        Q(this) || (this.b[a.locator.key] = a.c, P(this))
    };
    N.prototype.getAll = function(a) {
        var b = [];
        if (!Q(this))
            for (var c in this.b) b.push({
                c: this.b[c],
                locator: {
                    key: c,
                    storeType: this.storeType
                }
            });
        a(b)
    };
    var R = "object" === typeof module && "object" === typeof module.exports,
        S = (R ? module.exports.ClickTaleGlobal : window.ClickTaleGlobal) || {};
    S.persistence = {
        IndexedDbProvider: v,
        PersistenceClient: E,
        PersistenceManager: F,
        LocalStorageProvider: q,
        WindowNameProvider: N,
        PersistenceDispatcher: function(a) {
            this.supportedMessageNames = a
        }
    };
    R ? module.exports = S : window.ClickTaleGlobal = S;
    if ("object" == typeof module && "object" == typeof module.exports) {
        ClickTaleGlobal.persistence = module.exports.persistence
    };
    ClickTaleGlobal.persistence.version = "0.1.35";
}.call({});
! function() {
    var k, l = this && this.Xa || function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) c.hasOwnProperty(e) && (b[e] = c[e]);
            b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        },
        n = {
            end: 0,
            init: 1,
            auth: 2,
            chunk: 3,
            preinit: 4,
            exclude: 5,
            0: "end",
            1: "init",
            2: "auth",
            3: "chunk",
            4: "preinit",
            5: "exclude"
        };

    function p() {}
    p.prototype.a = function(b) {
        return this.f.a(b)
    };
    p.prototype.b = function(b) {
        this.f = b
    };

    function q() {}
    l(q, p);
    q.prototype.a = function(b) {
        var c = b.cmpn,
            d = window.URLSearchParams,
            d = d ? d.prototype.get.bind(new d(location.search)) : this.c;
        return (d = aa(d)()) && d !== c ? (b.cmpn = d, !0) : this.g.a(b)
    };

    function aa(b) {
        return function() {
            return decodeURIComponent(b("utm_campaign") || "")
        }
    }
    q.prototype.c = function(b) {
        b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        return (b = (new RegExp("[\\?&]" + b + "=([^&#]*)")).exec(window.location.search)) ? decodeURIComponent(b[1].replace(/\+/g, " ")) : ""
    };
    q.prototype.b = function(b) {
        this.g = b
    };
    var r = "undefined" !== typeof ClickTaleGlobal && ClickTaleGlobal.logger ? ClickTaleGlobal.logger.createLogger(2) : {
        close: function() {},
        addToContext: function() {},
        debug: function() {},
        info: function() {},
        warn: function() {},
        error: function() {},
        jsError: function() {}
    };

    function t() {
        return (new Date).getTime()
    }

    function ba(b) {
        return b.match(/[a-z]+/gi).map(function(b) {
            return b.charAt(0).toUpperCase() + b.substr(1).toLowerCase()
        }).join("")
    }

    function ca(b) {
        var c = Array.prototype,
            d = c.toJSON;
        return d ? (delete c.toJSON, b = JSON.stringify(b), c.toJSON = d, b) : JSON.stringify(b)
    }

    function u(b) {
        var c = null;
        try {
            c = b()
        } catch (d) {
            r.error("a", d)
        }
        return c
    }
    var da = Math.pow(2, 53) - 1;

    function v(b) {
        this.config = b
    }
    l(v, p);
    v.prototype.a = function(b) {
        return t() - b.intr >= this.config.identification.visitTimeSpan ? !0 : this.f.a(b)
    };
    v.prototype.b = function(b) {
        this.f = b
    };

    function ea() {}
    ea.prototype.ca = function(b) {
        return this.a.a(b)
    };

    function fa() {}
    fa.prototype.a = function() {
        return !1
    };

    function ha(b) {
        this.config = b;
        var c = new q,
            d = new fa;
        this.a = new v(b);
        this.a.b(c);
        c.b(d)
    }
    l(ha, ea);
    ha.prototype.ca = function(b) {
        return this.a.a(b)
    };
    var x = {
        error: 0,
        keyup: 1,
        scroll: 2,
        resize: 3,
        unload: 4,
        submit: 5,
        online: 6,
        mouseup: 7,
        offline: 8,
        mousedown: 9,
        mouseover: 10,
        touchstart: 11,
        beforeunload: 12,
        DOMContentLoaded: 13,
        visibilitychange: 14,
        0: "error",
        1: "keyup",
        2: "scroll",
        3: "resize",
        4: "unload",
        5: "submit",
        6: "online",
        7: "mouseup",
        8: "offline",
        9: "mousedown",
        10: "mouseover",
        11: "touchstart",
        12: "beforeunload",
        13: "DOMContentLoaded",
        14: "visibilitychange"
    };

    function y() {
        this.b = function() {}
    }
    y.prototype.da = function(b) {
        this.b = b;
        return this
    };
    y.prototype.c = function() {
        this.b()
    };

    function z(b, c, d) {
        this.f = b;
        this.c = (this.c = d) || 1E3;
        this.reset(c)
    }
    z.prototype.curr = function() {
        return ia(this, !1)
    };
    z.prototype.next = function() {
        return ia(this, !0)
    };
    z.prototype.reset = function(b) {
        this.b = b ? b.b : 0;
        this.a = b ? b.a : 1;
        this.g = !1
    };

    function ia(b, c) {
        if (b.g) return b.f;
        var d = (b.b + b.a) * b.c;
        if (d > b.f) b.g = !0, d = b.f;
        else if (c) {
            var e = b.b;
            b.b = b.a;
            b.a += e
        }
        return d
    }

    function ja(b, c, d, e) {
        var f = this;
        y.call(this);
        this.g = b;
        this.config = c;
        this.app = d;
        this.C = e;
        this.f = new z(this.config.metrics.maxFetchInterval);
        ka(this.C, function() {
            return f.deThrottle()
        });
        la(this.C, function() {
            return f.throttleUp()
        })
    }
    l(ja, y);
    k = ja.prototype;
    k.start = function() {
        ma(this, !0)
    };
    k.deThrottle = function() {
        this.a = null;
        na(this, !0)
    };
    k.throttleUp = function() {
        this.a || (this.a = new z(this.config.distribution.maxBackoffInterval, this.f));
        na(this)
    };

    function na(b, c) {
        var d = (b.a || b.f).next();
        b.D();
        b.app.ba() && (b.l = setTimeout(function() {
            b.c();
            c && na(b, !0)
        }, d))
    }
    k.D = function() {
        clearTimeout(this.l)
    };
    k.dispose = function() {
        this.D();
        ma(this)
    };

    function ma(b, c) {
        var d = b.g;
        (c ? d.bind : d.$).call(d, [6], function() {
            return b.deThrottle()
        })
    }
    var oa = {
        visitId: 3,
        version: 6,
        screenX: 16,
        screenY: 17,
        browser: 18,
        location: 7,
        projectId: 1,
        visitorId: 2,
        messageId: 5,
        eventIds: 21,
        rotation: 27,
        pageTags: 35,
        pageviewId: 4,
        viewportX: 29,
        viewportY: 30,
        timeOnPage: 12,
        adobeMCVID: 33,
        gaClientId: 34,
        numOfClicks: 14,
        scrollReach: 13,
        appLoadTime: 98,
        interactions: 28,
        jsErrorCount: 11,
        goalOriented: 24,
        engagementTime: 9,
        firstPageview: 31,
        adobeLegacyId: 32,
        discardedTags: 36,
        browserVersion: 19,
        lackOfInterest: 23,
        attentionSplit: 26,
        timeToProcess: 100,
        briefMovement: 101,
        documentReferrer: 8,
        clientTimeStamp: 22,
        navigationStart: 99,
        domContentLoaded: 10,
        carelessScrolling: 25,
        durationSinceLastVisit: 15,
        abTest: 60,
        cartValue: 61,
        cartUpdate: 62,
        action: 63,
        campaign: 64,
        error: 65,
        3: "visitId",
        6: "version",
        16: "screenX",
        17: "screenY",
        18: "browser",
        7: "location",
        1: "projectId",
        2: "visitorId",
        5: "messageId",
        21: "eventIds",
        27: "rotation",
        35: "pageTags",
        4: "pageviewId",
        29: "viewportX",
        30: "viewportY",
        12: "timeOnPage",
        33: "adobeMCVID",
        34: "gaClientId",
        14: "numOfClicks",
        13: "scrollReach",
        98: "appLoadTime",
        28: "interactions",
        11: "jsErrorCount",
        24: "goalOriented",
        9: "engagementTime",
        31: "firstPageview",
        32: "adobeLegacyId",
        36: "discardedTags",
        19: "browserVersion",
        23: "lackOfInterest",
        26: "attentionSplit",
        100: "timeToProcess",
        101: "briefMovement",
        8: "documentReferrer",
        22: "clientTimeStamp",
        99: "navigationStart",
        10: "domContentLoaded",
        25: "carelessScrolling",
        15: "durationSinceLastVisit",
        60: "abTest",
        61: "cartValue",
        62: "cartUpdate",
        63: "action",
        64: "campaign",
        65: "error"
    };

    function A(b, c, d, e) {
        void 0 === b && (b = !1);
        void 0 === c && (c = !0);
        void 0 === d && (d = !0);
        void 0 === e && (e = !1);
        this.f = b;
        this.A = c;
        this.u = d;
        this.l = e;
        this.m = this.J = !1;
        this.ta = null
    }
    A.prototype.P = function(b) {
        b = this.i(b);
        this.m = !this.J && b !== this.ta && null !== b;
        this.ta = b;
        return {
            type: this.a,
            value: b
        }
    };

    function B(b) {
        A.call(this, !0, !0, !0, !0);
        this.identification = b.identification
    }
    l(B, A);

    function pa(b) {
        B.call(this, b);
        this.a = 4
    }
    l(pa, B);
    pa.prototype.i = function() {
        return this.identification.K
    };

    function C(b, c, d, e) {
        void 0 === c && (c = !1);
        void 0 === d && (d = !0);
        void 0 === e && (e = !0);
        A.call(this, c, d, e, !!(b && b.metrics && b.metrics.enableOptionalEndMetrics));
        this.f = c;
        this.A = d;
        this.u = e
    }
    l(C, A);

    function D(b, c) {
        C.call(this, c);
        this.b = b;
        this.c = 0;
        this.a = 14;
        this.b.bind([7], this.o.bind(this));
        this.b.bind([9], this.g.bind(this))
    }
    l(D, C);
    D.prototype.g = function(b) {
        this.h = b.target
    };
    D.prototype.o = function(b) {
        this.h === b.target && this.c++
    };
    D.prototype.i = function() {
        return this.c
    };

    function qa(b) {
        A.call(this, !1, !1, !1, !0);
        this.b = b;
        this.a = 36
    }
    l(qa, A);
    qa.prototype.i = function(b) {
        var c = [],
            d = ra(this.b),
            e;
        for (e in d) c.push({
            type: parseInt(e),
            value: d[e]
        });
        return c.length ? 0 == b ? c.map(function(b) {
            return b.type + "\v" + b.value
        }).join("\v") : c : null
    };

    function E() {
        A.call(this, !1, !0, !1)
    }
    l(E, A);

    function sa(b) {
        E.call(this);
        this.timing = b;
        this.a = 99
    }
    l(sa, E);
    sa.prototype.i = function() {
        return this.timing.navigationStart
    };

    function F() {
        this.c = [];
        this.a = {}
    }
    F.prototype.O = function(b, c, d) {
        d = d.slice(0, this.b.maxLength);
        var e = [b, c, d].join("|");
        this.a[e] || (Object.keys(this.a).length >= this.b.maxPerPage ? 0 > this.c.indexOf(e) && this.c.push(e) : this.a[e] = new ta({
            id: b,
            type: c,
            value: d
        }, this.b.redundancy))
    };

    function ua(b, c) {
        var d = Object.keys(b.a).map(function(c) {
            return b.a[c]
        }).filter(function(d) {
            return -1 < b.f.indexOf(c) && 0 < d.redundancy--
        }).map(function(b) {
            return b.tag
        });
        0 == c && d.splice(b.b.maxOnEnd);
        return d
    }

    function ta(b, c) {
        this.tag = b;
        this.redundancy = c
    }

    function va(b) {
        F.call(this);
        this.type = 3;
        this.b = b.metrics.pageTags;
        this.f = [1, 3, 0]
    }
    l(va, F);

    function wa(b) {
        for (var c = arguments.length, d, e, f, g, h, m = 1; m < c; m++)
            if (d = arguments[m])
                for (e in d) f = b[e], g = d[e], b !== g && (g && (xa(g) || (h = Array.isArray(g))) ? h ? (h = !1, b[e] = g.slice()) : (f = f && xa(f) ? f : {}, b[e] = wa(f, g)) : void 0 !== g && (b[e] = g));
        return b
    }

    function xa(b) {
        return "object" !== (null == b ? b + "" : "object" === typeof b || "function" === typeof b ? ya[za.call(b)] || "object" : typeof b) || b.nodeType || b === window || b.constructor && !Aa.call(b.constructor.prototype, "isPrototypeOf") ? !1 : !0
    }
    var ya = {},
        za = ya.toString,
        Aa = ya.hasOwnProperty,
        G;

    function H() {
        return G || (G = Ba(window.ClickTaleMonitor.Settings.config))
    }

    function Ba(b) {
        return wa(G || {
            metrics: {
                inactivityTime: 2E4,
                interestInterval: 12E3,
                maxFetchInterval: 5E3,
                touchMouseIgnoreTime: 500,
                goalOrientedCloseInterval: 2E3,
                enableOptionalEndMetrics: !0,
                pageTags: {
                    maxLength: 50,
                    redundancy: 3,
                    maxPerPage: 10,
                    maxOnEnd: 3
                },
                dynamicActions: {
                    maxLength: 50,
                    redundancy: 3,
                    maxPerPage: 10,
                    maxOnEnd: 3
                },
                modifiedChunkToggle: !0,
                maxChunkInactivity: 2,
                disabledMetrics: []
            },
            identification: {
                expirationDays: 365,
                visitTimeSpan: 18E5,
                integrationMessageFormat: "CT2MappingTag_{0}_{1}_{2}_{3}",
                integrationMethod: function() {
                    return window.ClickTaleEvent
                },
                cookie: {
                    useBase64: !1
                }
            },
            transport: {
                url: "https://conductor.clicktale.net/monitor",
                xhrTimeout: 2E3,
                disableImageChannel: !1
            },
            distribution: {
                maxBackoffInterval: 6E4,
                reliableMessages: {
                    retries: 2,
                    waitInterval: 1E3
                },
                persistence: {
                    storeEnabled: !0,
                    dispatchRetries: 3,
                    dispatchEnabled: !0
                }
            },
            onEnd: {
                useOnBeforeUnload: !1
            }
        }, b)
    }

    function I(b, c, d, e, f, g, h) {
        this.J = b;
        this.g = c;
        this.h = d;
        this.u = e;
        this.o = f;
        this.oa = g;
        this.A = h;
        this.c = !1;
        this.m = this.l = this.b = 0;
        this.a = null;
        this.maxChunkInactivity = H().metrics.maxChunkInactivity;
        this.modifiedChunkToggle = H().metrics.modifiedChunkToggle;
        this.f();
        this.a = this.g;
        Ca(this, this.a);
        this.f()
    }
    I.prototype.f = function() {
        var b = this.o.a();
        if (!1 === b.Oa && "chunk" === b.type) {
            var c = Date.now() - this.l;
            if (this.modifiedChunkToggle && c < 6E4 * this.maxChunkInactivity) return
        }
        this.l = Date.now();
        c = this.J.P().value;
        c > this.m && (this.m = c, c = this.A, c.a.intr = c.identification.lastModified = t(), J(c, c.a));
        a: {
            switch (b.type) {
                case "preinit":
                    this.b = 0;
                    break;
                case "auth":
                    break a;
                case "init":
                    this.b = 1;
                    break;
                case "chunk":
                case "end":
                    this.b++
            }
            b.metrics.push({
                type: 5,
                value: this.b
            })
        }
        this.oa.ca(b.metrics, {
            id: this.b,
            type: b.type,
            advance: b.advance,
            reliable: b.reliable
        })
    };
    I.prototype.start = function() {
        this.c || (this.a || (this.a = this.g, Ca(this, this.a)), Ca(this, this.h), this.a = this.a.concat(this.h), Da(this, !0), this.c = !0)
    };

    function Ca(b, c) {
        c.forEach(function(c) {
            return c.da(b.f.bind(b)).start()
        })
    }
    I.prototype.D = function() {
        this.c && (Ea(this, function(b) {
            return b.D()
        }), this.a = null, Da(this), this.c = !1)
    };
    I.prototype.dispose = function(b) {
        b || this.f();
        this.D()
    };

    function Ea(b, c) {
        b.a.forEach(function(b) {
            return c(b)
        })
    }

    function Da(b, c) {
        var d = b.u;
        (c ? d.bind : d.$).call(d, [6], function() {
            Ea(b, function(b) {
                return navigator.onLine ? b.start() : b.D()
            })
        })
    }

    function Fa() {
        this.b = [];
        this.f = [];
        this.a = []
    }

    function ka(b, c) {
        b.f.push(c)
    }

    function la(b, c) {
        b.b.push(c)
    }
    Fa.prototype.resolve = function(b) {
        K(b, this.a);
        K(b, this.f)
    };
    Fa.prototype.reject = function(b) {
        K(b, this.a);
        K(b, this.b)
    };

    function K(b, c) {
        c.forEach(function(c) {
            return c(b)
        })
    }

    function Ga() {}

    function L() {}
    L.prototype.a = function(b) {
        var c = {};
        b.forEach(function(b) {
            return c[oa[b.type]] = b.value
        });
        return ca(c)
    };
    L.prototype.b = function() {
        return null
    };

    function Ha() {}
    Ha.prototype.resolve = function() {};
    Ha.prototype.reject = function() {};

    function Ia(b, c, d) {
        this.f = b;
        this.app = c;
        this.b = d
    }

    function Ja(b, c, d) {
        void 0 === d && (d = 0);
        b.reset(d);
        b.f.U.resolve(c)
    }

    function Ka(b, c, d) {
        void 0 === d && (d = 0);
        b.reset(d);
        b.app.ba() && b.f.U.reject(c)
    }

    function La(b, c) {
        var d = c.message.data;
        return b.b ? b.b.a(d) : d
    }

    function M(b, c, d, e, f, g) {
        void 0 === f && (f = !1);
        void 0 === g && (g = "POST");
        Ia.call(this, b, c, d);
        this.xhrTimeout = e;
        this.c = g;
        this.a = new XMLHttpRequest;
        this.a.withCredentials = f;
        b = window.CEC.onXhrCreated;
        b || (b = (b = window.ClickTaleMonitor) && b.Settings, b = (b = b.get && b.get()) && b.xhrCreatedCallback);
        if (b = b && b(this.a)) this.a = b
    }
    l(M, Ia);
    M.prototype.send = function(b, c) {
        var d = this;
        try {
            var e = this.a,
                f = "GET" === this.c;
            if (f) {
                var g = La(this, c);
                g && (b += "&" + g)
            }
            e.open(this.c, b);
            e.timeout = this.xhrTimeout;
            e.setRequestHeader("Content-Type", "text/plain");
            this.a.onreadystatechange = function() {
                if (4 === e.readyState) switch (e.status) {
                    case 200:
                        c.response = Ma;
                        Ja(d, c);
                        break;
                    case 204:
                        c.response = Na;
                        Ja(d, c);
                        break;
                    default:
                        r.error("8", e.status, "xhr"), Ka(d, c)
                }
            };
            e.onload = function() {
                return Ja(d, c)
            };
            e.onerror = e.ontimeout = e.onabort = function() {
                return Ka(d, c)
            };
            if (f) e.send();
            else {
                var h = La(this, c);
                e.send(h)
            }
        } catch (m) {
            Ka(this, c), r.error("9", m, "xhr")
        }
    };
    M.prototype.reset = function() {
        var b = this.a;
        b && (b.onabort = b.ontimeout = b.onerror = b.onload = b.onreadystatechange = null)
    };

    function Oa(b, c, d) {
        var e = this;
        this.metrics = b;
        this.config = c;
        this.reliable = !0;
        this.b = 4;
        this.f = {
            p: 1,
            2: 1,
            3: 1,
            4: 1,
            7: 1,
            12: 1
        };
        b.filter(function(b) {
            return b.f
        });
        ka(d, function(b) {
            b.advance && Pa(e)
        });
        this.a = Qa(this)
    }

    function Qa(b) {
        return N(b, b.metrics.filter(function(b) {
            return b.f
        }), 4, !0)
    }

    function Ra(b) {
        return N(b, b.metrics.filter(function(b) {
            return b.A
        }), 1, !0, !1, !0)
    }

    function Sa(b) {
        return N(b, b.metrics.filter(function(b) {
            return b.u
        }), 3)
    }

    function Ta(b) {
        return N(b, b.metrics.filter(function(b) {
            return b.l
        }), 0)
    }

    function N(b, c, d, e, f, g) {
        void 0 === e && (e = !1);
        void 0 === f && (f = !1);
        void 0 === g && (g = !1);
        return function() {
            var h = Ua(b, c, d, f, g);
            b.b = d;
            e && Pa(b);
            return h
        }
    }

    function Ua(b, c, d, e, f) {
        var g = c.map(function(b) {
            return b.P(d)
        });
        c = c.some(function(b) {
            return b.m
        });
        g = g.filter(function(c) {
            return c.value || b.f[c.type]
        });
        return {
            reliable: f,
            type: n[d],
            metrics: g,
            Oa: c,
            advance: e
        }
    }

    function Pa(b) {
        switch (b.b) {
            case 4:
                b.a = N(b, [], 2, !1, !0);
                break;
            case 2:
                b.a = Ra(b);
                break;
            case 1:
                b.a = Sa(b);
                break;
            case 3:
                b.a = Ta(b)
        }
    }
    Oa.prototype.aa = function() {
        return n[this.b]
    };

    function Va(b, c) {
        for (var d = 1; d < arguments.length; d++);
        var e = Array.prototype.slice.call(arguments, 1);
        return b.replace(/\{(\d+)\}/g, function(b, c) {
            return e[c]
        })
    }

    function Wa(b, c, d, e) {
        A.call(this, b, c, d, e)
    }
    l(Wa, A);

    function Ya(b) {
        var c = u(function() {
            return decodeURIComponent(b)
        }) || b;
        return {
            value: b,
            encoded: c !== b
        }
    }

    function Za(b) {
        var c = {
            host: Ya(b.host),
            protocol: Ya(b.protocol.replace(":", ""))
        };
        b.hash && (c.hash = Ya(b.hash));
        b.pathname && "/" !== b.pathname && (c.pathname = Ya(b.pathname));
        b.search && (c.search = {
            value: "?" + encodeURIComponent(decodeURIComponent(b.search.substring(1))),
            encoded: !0
        });
        return c
    }

    function $a(b, c) {
        A.call(this, !0, !0, !1, !1);
        this.b = !1;
        this.c = !0;
        this.a = 7;
        var d;
        "string" == typeof b ? (d = document.createElement("a"), d.href = b) : d = b;
        d !== c.location && (d.hash = d.hash || "", d.search = d.search || "", d.href = d.protocol + "//" + d.host + d.pathname + d.search + d.hash);
        this.href = d.href;
        this.location = Za(d)
    }
    l($a, Wa);
    $a.prototype.i = function() {
        return this.c || this.b ? (this.c = !1, this.href) : this.location
    };
    $a.prototype.dispose = function() {
        this.b = !0
    };

    function O(b, c, d) {
        A.call(this, !1, !1, !1, !0);
        this.g = b;
        this.c = !1;
        this.fa();
        b.bind(this.ma(), this.va());
        b = this.pa.bind(this);
        var e = {
            R: {}
        };
        ab(c.a, d.metrics.interestInterval, e) && !e.R.done && e.R.la.push(b)
    }
    l(O, A);
    O.prototype.pa = function() {
        this.c = !0
    };

    function bb(b) {
        var c = b.target;
        b = x[b.type];
        return 5 === b ? !0 : 7 === b && "href" in c
    }
    O.prototype.fa = function() {};

    function P(b, c, d) {
        O.call(this, b, c, d);
        this.b = !0;
        this.a = 23
    }
    l(P, O);
    P.prototype.ma = function() {
        return this.g.h.concat([5])
    };
    P.prototype.va = function() {
        var b = this;
        return function(c) {
            b.c ? b.b = !1 : bb(c) && (b.b = !1)
        }.bind(this)
    };
    P.prototype.i = function() {
        return this.b
    };

    function cb(b) {
        y.call(this);
        this.a = b
    }
    l(cb, y);

    function db(b) {
        cb.call(this, b);
        this.f = this.c.bind(this)
    }
    l(db, cb);
    db.prototype.start = function() {
        this.a.bind([0], this.f)
    };
    db.prototype.D = function() {
        this.a.$([0], this.f)
    };

    function Q(b, c) {
        C.call(this, c);
        this.g = b;
        this.config = c;
        this.a = 28;
        this.h = this.c = 0;
        this.o = 1;
        this.V = 2;
        this.Da = 4;
        this.touchMouseIgnoreTime = this.config.metrics.touchMouseIgnoreTime;
        this.b = 0;
        this.g.bind([1], this.ha.bind(this));
        this.g.bind([11], this.ia.bind(this));
        this.g.bind([9], this.L.bind(this))
    }
    l(Q, C);
    Q.prototype.ha = function() {
        this.b |= this.V
    };
    Q.prototype.ia = function() {
        this.b |= this.Da;
        this.c = Date.now()
    };
    Q.prototype.L = function() {
        var b = this,
            c = this.b & this.o;
        this.h = Date.now();
        c || this.c && !(Math.abs(this.h - this.c) > this.touchMouseIgnoreTime) || (this.c = 0, setTimeout(function() {
            b.c || (b.b |= b.o)
        }, this.touchMouseIgnoreTime))
    };
    Q.prototype.i = function() {
        return this.b
    };

    function eb(b, c, d) {
        ClickTaleGlobal.persistence.PersistenceClient.call(this, b, c, d)
    }
    l(eb, ClickTaleGlobal.persistence.PersistenceClient);
    eb.prototype.sendMessages = function() {
        ClickTaleGlobal.persistence.PersistenceClient.prototype.sendMessages.call(this)
    };

    function fb() {
        E.call(this);
        this.b = null;
        this.a = 34;
        var b = window.ga;
        b && "function" === typeof b.getAll && (b = b.getAll()) && b.length && "function" === typeof b[0].get && (this.b = b[0].get("clientId"))
    }
    l(fb, E);
    fb.prototype.i = function() {
        return this.b
    };

    function gb(b, c, d) {
        O.call(this, b, c, d);
        this.config = d;
        this.h = !1;
        this.a = 24
    }
    l(gb, O);
    k = gb.prototype;
    k.fa = function() {
        var b = this;
        O.prototype.fa.call(this);
        this.b = function(c) {
            !b.c && bb(c) && (b.o = Date.now())
        }.bind(this)
    };
    k.pa = function() {
        O.prototype.pa.call(this);
        this.g.$(this.ma(), this.b)
    };
    k.ma = function() {
        return [7, 5]
    };
    k.va = function() {
        return this.b
    };
    k.i = function() {
        return this.h
    };
    k.dispose = function() {
        Date.now() - this.o < this.config.metrics.goalOrientedCloseInterval && (this.h = !0)
    };

    function hb(b) {
        A.call(this, !1, !0, !1);
        this.b = b;
        this.a = 31
    }
    l(hb, A);
    hb.prototype.i = function() {
        return this.b.f
    };

    function ib(b) {
        C.call(this, b);
        this.c = function() {};
        this.g = !1;
        this.h = 0;
        this.b = [];
        this.a = 21
    }
    l(ib, C);
    k = ib.prototype;
    k.P = function(b) {
        b = this.i(b);
        this.m = !this.J && null !== b && this.h !== b.length;
        this.h = null === b ? 0 : b.length;
        return {
            type: this.a,
            value: b
        }
    };
    k.i = function() {
        return this.b.length ? this.b : null
    };
    k.D = function() {
        this.g = !1
    };
    k.start = function() {
        this.g = !0;
        this.b.length && this.c()
    };
    k.da = function(b) {
        this.c = b;
        return this
    };

    function jb(b) {
        this.a = {};
        var c = {};
        c[n[4]] = "pre";
        c[n[2]] = "auth";
        c[n[1]] = "init";
        c[n[3]] = "main";
        c[n[0]] = "end";
        for (var d in c) this.a[d] = kb(b, "" + c[d])
    }

    function lb(b) {
        A.call(this, !1, !1, !0, !0);
        this.g = b;
        this.c = this.b = 0;
        this.J = !0;
        this.a = 9;
        this.g.bind(b.h, this.h.bind(this))
    }
    l(lb, A);
    lb.prototype.h = function() {
        var b = Date.now();
        this.c && (this.b += Math.min(2E4, b - this.c));
        this.c = b
    };
    lb.prototype.i = function() {
        return this.b
    };

    function mb(b, c, d) {
        Ia.call(this, b, c, d);
        this.c = 0;
        this.a = {}
    }
    l(mb, Ia);
    mb.prototype.send = function(b, c) {
        var d = this,
            e = La(this, c),
            f = new Image,
            g = ++this.c;
        this.a[g] = f;
        f.onload = function() {
            return Ja(d, c, g)
        };
        f.onerror = function() {
            return Ka(d, c, g)
        };
        f.src += b + "&" + e + "&r=" + (new Date).getTime()
    };
    mb.prototype.reset = function(b) {
        delete this.a[b]
    };

    function nb(b) {
        E.call(this);
        this.b = b;
        this.a = 15
    }
    l(nb, E);
    nb.prototype.i = function() {
        return this.b.g
    };

    function ob(b) {
        A.call(this, !1, !0, !1, !1);
        this.referrer = b;
        this.a = 8;
        b && (b = document.createElement("A"), b.href = this.referrer, this.location = Za(b))
    }
    l(ob, Wa);
    ob.prototype.i = function() {
        return this.location || this.referrer
    };

    function pb(b) {
        E.call(this);
        this.timing = b;
        this.a = 10
    }
    l(pb, E);
    pb.prototype.i = function() {
        return this.timing.domContentLoadedEventEnd - this.timing.navigationStart
    };

    function qb() {
        var b, c;
        void 0 === b && (b = window);
        void 0 === c && (c = document);
        this.a = b;
        this.f = c;
        this.b = / (\w+)(?:\/([\w\.]+))? (?:(\([^\)]+\)) )?/img;
        this.userAgent = rb(this, " " + b.navigator.userAgent + " ")
    }

    function rb(b, c) {
        for (var d = b.a.XMLHttpRequest, e = {}, f; f = b.b.exec(c);) e[f[1]] = {
            value: f[2],
            extra: f[3]
        }, b.b.lastIndex--;
        if (f = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|CriOS|bada/i.test(c)) try {
            b.f.createEvent("TouchEvent"), f = !0
        } catch (w) {
            f = !1
        }
        var g = f;
        f = {
            is: {
                N: g
            },
            ka: {
                version: 0
            }
        };
        var h = f.ka,
            m = e.Mozilla && e.Mozilla.extra ? e.Mozilla.extra : null;
        f.supports = {
            sendBeacon: !!b.a.navigator.sendBeacon,
            Ya: d && "withCredentials" in new XMLHttpRequest,
            Ha: sb()
        };
        if (e.Opera || e.OPR) return h.name = "Opera",
            h.type = 1, (e = /(?:Version|OPR)\/(\d+)/i.exec(c)) && e[1] && (h.version = Number(e[1])), f;
        if (e.Edge) return h.type = 0, h.name = "Edge", h.version = parseInt(e.Edge.value), f.is.N = g || -1 !== c.indexOf("Windows Phone; "), f;
        if (m && (d = void 0, d = m.indexOf("MSIE "), -1 < d + m.indexOf("; Trident/") && (d = -1 !== d ? d : m.indexOf("; rv:"), -1 !== d))) return h.name = "IE", h.type = 7, h.version = parseFloat(m.substr(d + 5, 3)), f.is.N = g, f;
        if (e.Firefox && e.Firefox.value) return h.type = 5, h.name = "Firefox", h.version = parseFloat(e.Firefox.value), f.is.N = g || m && -1 !==
            m.indexOf("Android; "), f;
        if (d = /Firefox\/(\d+)/i.exec(c)) return h.type = 5, h.name = "Firefox", d[1] && (h.version = Number(d[1])), f;
        if (d = /PhantomJS\/(\d+(\.\d+)?)/i.exec(c)) return h.type = 8, h.name = "PhantomJS", d[1] && (h.version = Number(d[1])), f;
        if (e.Chrome && e.Chrome.value || e.CriOS && e.CriOS.value) return h.type = 3, h.name = "Chrome", h.version = parseFloat(e.Chrome ? e.Chrome.value : e.CriOS.value), f.is.N = g || e.CriOS || m && -1 !== m.indexOf("; Android "), f;
        e.Safari && (h.name = "Safari", m && -1 === m.indexOf("Windows") && e.Version && e.Version.value &&
            (h.type = 4, h.version = parseFloat(e.Version.value), f.is.N = g, f.supports.sendBeacon = !1));
        return f
    }

    function sb() {
        var b = Function.prototype;
        if (!b || !b.bind) return !1;
        b = Date.prototype;
        if (!(Date.now && b && b.toISOString && b.toJSON)) return !1;
        b = Array.prototype;
        return !!(b && b.every && b.filter && b.forEach && b.indexOf && b.lastIndexOf && b.map && b.some && b.reduce && b.reduceRight && Array.isArray)
    }

    function tb(b) {
        this.f = b;
        this.a = [];
        this.a.push(this.Ma);
        this.a.push(this.Na);
        this.a.push(this.Ia);
        this.a.push(this.Ka);
        this.a.push(this.La)
    }
    k = tb.prototype;
    k.Na = function(b) {
        return b.direction.W && 350 > b.I.F && 650 >= b.I.duration && .5 < b.speed
    };
    k.Ka = function(b) {
        return b.direction.W && 100 > b.I.F && 300 >= b.I.duration
    };
    k.La = function(b) {
        return b.direction.W && 30 > b.I.F
    };
    k.Ia = function(b) {
        return 1 === b.Z
    };
    k.Ma = function(b) {
        return 0 === b.direction.value
    };

    function R(b) {
        this.m = this.u = this.A = this.l = this.f = !1;
        this.a = da;
        this.navigationStart = b.navigationStart;
        this.b = this.c = this.a = 0
    }
    R.prototype.P = function() {
        return {
            value: {
                sum: this.c,
                max: 0,
                min: this.a,
                count: this.b
            },
            type: this.w()
        }
    };

    function S(b, c) {
        C.call(this, c);
        this.h = b;
        this.h.bind(this.c.bind(this))
    }
    l(S, C);
    S.prototype.P = function() {
        return {
            type: this.a,
            value: this.i()
        }
    };

    function ub(b, c) {
        S.call(this, b, c);
        this.g = this.b = 0;
        this.a = 26
    }
    l(ub, S);
    ub.prototype.i = function() {
        return this.b / (this.g || 1) | 0 || void 0
    };
    ub.prototype.c = function(b) {
        1E3 <= b.M && (this.g++, this.b += b.M)
    };

    function vb() {
        A.call(this, !1, !0, !0, !1);
        this.a = 22;
        this.J = !0
    }
    l(vb, A);
    vb.prototype.i = function() {
        return t()
    };

    function T(b, c, d) {
        A.call(this, d[0], d[1], d[2], d[3]);
        this.o = [];
        this.L = [];
        this.V = {};
        this.h = !0;
        this.ia = {
            type: function(b, c, d, h) {
                (b = typeof c[d] === h) || r.error("4", c, "dataEvents");
                return b
            },
            required: function(b, c, d) {
                (b = c.hasOwnProperty(d)) || r.error("5", c, "dataEvents");
                return b
            },
            G: function(b, c, d, h) {
                (b = void 0 !== c[d] && "string" === typeof c[d]) ? c[d] = c[d].slice(0, h): r.error("6", c, "dataEvents");
                return b
            },
            values: function(b, c, d, h) {
                b = h.indexOf(c[d]); - 1 !== b ? c[d] = b : (c[d] = 0, r.error("7", c, "dataEvents"));
                return !0
            }
        };
        this.a =
            this.w();
        ka(c, this.ha.bind(this))
    }
    l(T, A);
    T.prototype.i = function(b) {
        var c = this.o.concat(this.L);
        if (b = c.length ? this.g(c, 0 === b) : null) this.L = this.L.concat(this.o.slice(0)), this.o = [];
        return b
    };
    T.prototype.ha = function() {
        this.L.length = 0
    };
    T.prototype.add = function(b) {
        var c = !0,
            d = this.b,
            e;
        for (e in d)
            if (d.hasOwnProperty(e)) {
                var f;
                f = d[e];
                if (null != f && "object" == typeof f) {
                    var g = f.constructor(),
                        h = void 0;
                    for (h in f) f.hasOwnProperty(h) && (g[h] = f[h]);
                    f = g
                }
                g = f.required;
                f.hasOwnProperty("required") && delete f.required;
                for (var m in f)
                    if (f.hasOwnProperty(m) && (c = this.ia[m](this, b, e, f[m]), !c)) break;
                g || c || (c = !0, delete b[e]);
                if (!c) break
            }
        c && (delete b.event, c = wb(b), (d = this.h && void 0 !== this.V[c]) || (d = this.c, d = void 0 === d ? !1 : Object.keys(this.V).length >= d), d ||
            (this.V[c] = b, this.o.push(b)))
    };

    function wb(b) {
        return Object.keys(b).map(function(c) {
            return b[c]
        }).join("|")
    }

    function xb(b, c) {
        T.call(this, 0, c, [!1, !1, !0, !0]);
        this.c = Infinity;
        this.h = !1;
        this.b = {
            type: {
                values: ["other", "error", "message"],
                required: !0
            },
            message: {
                type: "string",
                G: 50,
                required: !0
            },
            code: {
                type: "string",
                required: !1,
                G: 10
            }
        }
    }
    l(xb, T);
    xb.prototype.g = function(b, c) {
        return c ? yb(b) : b
    };

    function yb(b) {
        return b.reduce(function(b, d, e) {
            return b + ("" + (0 !== e ? "\v" : "") + d.type + "\v" + d.message + "\v" + (d.code ? d.code : ""))
        }, "")
    }
    xb.prototype.w = function() {
        return 65
    };

    function zb(b) {
        E.call(this);
        this.a = 19;
        this.userAgent = b.userAgent
    }
    l(zb, E);
    zb.prototype.i = function() {
        return this.userAgent.ka.version
    };

    function Ab(b, c) {
        T.call(this, 0, c, [!1, !1, !0, !0]);
        this.c = Infinity;
        this.h = !1;
        this.b = {
            amount: {
                type: "number",
                required: !0
            },
            action: {
                values: ["other", "add", "remove"],
                required: !0
            },
            currency: {
                type: "string",
                required: !0,
                G: 3
            },
            products: {
                type: "number",
                required: !1
            }
        }
    }
    l(Ab, T);
    Ab.prototype.g = function(b, c) {
        var d = {
            amount: [],
            products: [],
            currency: void 0
        };
        b.forEach(function(b) {
            d.amount.push(Bb(b, "amount"));
            d.products && d.products.push(Bb(b, "products"));
            d.currency = b.currency
        });
        return c ? "[" + d.products + "]\v" + d.currency + "\v[" + d.amount + "]" : d
    };

    function Bb(b, c) {
        var d = b[c];
        2 === b.action && (d = -1 * b[c]);
        return d
    }
    Ab.prototype.w = function() {
        return 62
    };

    function Cb(b) {
        E.call(this);
        this.a = 18;
        this.userAgent = b.userAgent
    }
    l(Cb, E);
    Cb.prototype.i = function() {
        return this.userAgent.ka.name
    };

    function Db(b, c) {
        T.call(this, 0, c, [!1, !0, !0, !0]);
        this.c = Infinity;
        this.h = !1;
        this.b = {
            gesture: {
                values: ["other", "click"],
                required: !0
            },
            category: {
                values: "other;cart;banner;menu;carousel;submit;call to action;navigation".split(";"),
                required: !0
            },
            name: {
                type: "string",
                required: !1,
                G: 20
            }
        }
    }
    l(Db, T);
    Db.prototype.g = function(b, c) {
        return c ? Eb(b) : b
    };

    function Eb(b) {
        return b.reduce(function(b, d, e) {
            return b + ("" + (0 !== e ? "\v" : "") + d.gesture + "\v" + d.category + "\v" + (d.name ? d.name : ""))
        }, "")
    }
    Db.prototype.w = function() {
        return 63
    };

    function Fb(b) {
        R.call(this, b)
    }
    l(Fb, R);
    Fb.prototype.w = function() {
        return 101
    };

    function Gb(b) {
        A.call(this, !1, !0, !1, !0);
        this.app = b;
        this.a = 98
    }
    l(Gb, A);
    Gb.prototype.i = function() {
        return this.app.wa()
    };

    function Hb(b) {
        B.call(this, b);
        this.a = 2;
        this.l = this.f = !1
    }
    l(Hb, B);
    Hb.prototype.i = function() {
        return this.identification.visitor
    };

    function U() {
        A.call(this, !1, !0, !0, !0);
        this.retries = 5
    }
    l(U, A);
    U.prototype.b = function(b, c, d, e) {
        for (var f = document.cookie.split(";"), g = 0, h = f.length, m = void 0; g < h; g++)
            if (m = f[g].trim().match(b)) return Ib(m[d], c, e);
        return null
    };

    function Ib(b, c, d) {
        b = b || "";
        return (c = (decodeURIComponent(b) || b).match(c)) ? c[d] : null
    }
    U.prototype.i = function() {
        var b = this.g;
        !b && this.retries-- && (this.g = b = this.c());
        return b
    };

    function Jb() {
        U.apply(this, arguments);
        this.a = 33
    }
    l(Jb, U);
    Jb.prototype.c = function() {
        return u(function() {
            var b = window.s || window.s_c_il;
            return (b = b && b.visitor || b[0]) && b.getMarketingCloudVisitorID()
        }) || U.prototype.b.call(this, /AMCV_(.*)AdobeOrg\=(.*)/, /MCMID\|(.*?)\|/, 2, 1)
    };

    function Kb() {
        E.apply(this, arguments);
        this.a = 29
    }
    l(Kb, E);
    Kb.prototype.i = function() {
        return window.innerWidth | 0
    };

    function Lb() {
        U.apply(this, arguments);
        this.a = 32
    }
    l(Lb, U);
    Lb.prototype.c = function() {
        var b = /s_fid\=(.*)/,
            c = /.+?\|([^\[|]+)/;
        return u(function() {
            var b = window.s,
                e = b && b.c_r;
            return e && Ib(e("s_vi"), c, 1) || b && b.fid || e && e("s_fid")
        }) || U.prototype.b.call(this, /s_vi\=(.*)/, c, 1, 1) || U.prototype.b.call(this, b, b, 0, 1)
    };

    function Mb() {
        E.apply(this, arguments);
        this.a = 6
    }
    l(Mb, E);
    Mb.prototype.i = function() {
        return "1.5.5"
    };

    function Nb(b) {
        this.l = this.f = !1;
        this.A = this.u = !0;
        this.m = !1;
        this.c = 0;
        this.b = !1;
        this.a = 0;
        this.navigationStart = b.navigationStart
    }

    function Ob(b) {
        var c = Date.now();
        b.b && (b.a += c - b.c, b.c = c)
    }
    Nb.prototype.P = function() {
        Ob(this);
        return {
            type: this.w(),
            value: Date.now() - this.navigationStart - this.a
        }
    };

    function Pb(b, c) {
        Nb.call(this, c);
        this.g = b;
        this.l = !0;
        this.g.bind([14], this.h.bind(this))
    }
    l(Pb, Nb);
    Pb.prototype.w = function() {
        return 12
    };
    Pb.prototype.h = function() {
        document.hidden ? (this.b = !0, this.c = Date.now()) : (Ob(this), this.b = !1)
    };

    function Qb(b) {
        E.call(this);
        this.userAgent = b;
        this.b = 0;
        this.a = 27
    }
    l(Qb, E);
    Qb.prototype.i = function() {
        this.userAgent.is.N && (this.b = window.innerHeight >= window.innerWidth ? 1 : 2);
        return this.b
    };

    function Rb() {
        E.apply(this, arguments);
        this.a = 16
    }
    l(Rb, E);
    Rb.prototype.i = function() {
        return screen.width
    };

    function Sb(b) {
        A.call(this, !1, !0, !0, !1);
        this.b = b;
        this.a = 1
    }
    l(Sb, A);
    Sb.prototype.i = function() {
        return this.b
    };

    function Tb(b) {
        F.call(this);
        this.type = 4;
        this.b = b.metrics.dynamicActions;
        this.f = [3, 0]
    }
    l(Tb, F);

    function Vb(b) {
        this.a = (b = b.identification.cookie) ? b.useBase64 : !1
    }

    function Wb(b, c) {
        var d = ca(c).split(",").map(function(b) {
            return b.replace(/'/g, "''").replace(/[\"]/g, "'")
        }).join("|");
        return b.a ? btoa(d) : d
    }

    function Xb(b) {
        var c = "{" === b.charAt(0) ? "" : u(function() {
            return atob(b)
        });
        return Yb(c || b)
    }

    function Yb(b) {
        b = b.replace(/[{}]/g, "").split("|").map(function(b) {
            b = b.split(":");
            var d = b[1];
            b[0] = b[0].replace(/'/g, '"');
            isNaN(b[1]) && (b[1] = ('"' + d.substring(1, d.length - 1) + '"').replace("''", "'"));
            return b.join(":")
        });
        return JSON.parse("{" + b.join(",") + "}")
    }

    function Zb() {}
    Zb.prototype.a = function(b) {
        return $b(b)
    };
    Zb.prototype.b = function(b) {
        return b.split("&").map(function(b) {
            b = b.split("=");
            var d = b[1],
                e = Number(d);
            return {
                type: Number(b[0]),
                value: isNaN(e) ? "true" === d ? !0 : "false" === d ? !1 : decodeURIComponent(d) : e
            }
        })
    };

    function $b(b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d];
            e && c.push(e.type + "=" + encodeURIComponent(e.value))
        }
        return c.join("&")
    }

    function ac(b, c, d, e) {
        b = new b({
            waitInterval: 0,
            U: new Ha
        }, e, null, c.transport.xhrTimeout);
        d = {
            message: {
                data: $b([{
                    type: "p",
                    value: d
                }])
            }
        };
        b.send(c.transport.url + "?t=" + n[5], d)
    }

    function bc(b, c, d, e, f, g) {
        var h;
        void 0 === h && (h = window);
        this.config = d;
        this.m = e;
        this.l = f;
        this.c = h;
        this.cookie = "ctm";
        this.f = !1;
        a: {
            if (b = this.config.identification.cookie) {
                if (b.currentDomain) {
                    this.b = "";
                    break a
                }
                if (b.domain) {
                    this.b = b.domain;
                    break a
                }
            }
            this.b = cc(this.c.location.hostname)
        }
        dc(this, g)
    }

    function dc(b, c) {
        var d = !1,
            e = ec(b),
            f = b.c.ClickTaleMonitor,
            g = !c && f && f.pgv,
            f = b.config.identification.visitor,
            h = b.config.identification.visit;
        void 0 !== f && e && f !== e.vstr && (e = null);
        e && (d = fc(b, e, function() {
            var c = t();
            e.vst = h ? h : e.vst;
            if (0 === e.vst || b.m.ca(e)) b.f = !0, e.vst = h || V(), e.lvst = b.g = Math.round((c - e.intr) / 6E4);
            e.intr = c;
            b.g = e.lvst;
            e.pgv = g || V();
            return e
        }));
        d || (b.f = !0, J(b, b.a = {
            pgv: g || V(),
            vst: h || V(),
            vstr: f || V(),
            intr: t()
        }));
        b.identification = {
            visit: b.a.vst,
            visitor: b.a.vstr,
            K: b.a.pgv,
            Za: b.a.lvst,
            lastModified: b.a.intr
        }
    }

    function ec() {
        var b, c = 0,
            d = 0,
            e = 0,
            f = !1,
            g = document.cookie,
            h = g.split(";");
        b = "ctm=";
        for (var m = 0; m < h.length; m++) {
            var w = h[m];
            0 === w.trim().indexOf(b) && (c = d + w.length, e = d + w.split("=")[0].length + 1, f = !0);
            d += w.length + 1
        }
        if (b = f ? g.substring(e, c) : null) try {
            return Xb(b)
        } catch (Ub) {
            r.error("b", b, "IdentificationService")
        }
        return null
    }

    function fc(b, c, d) {
        return gc(c) ? (c = d ? d(c) : c, J(b, c), b.a = c, !0) : !1
    }

    function gc(b) {
        var c = ["vst", "pgv", "vstr", "intr"];
        "lsvt" in b && c.push("lvst");
        return c.every(function(c) {
            c = b[c];
            return !isNaN(parseFloat(c)) && isFinite(c)
        })
    }

    function J(b, c) {
        c.v = 1;
        var d = b.cookie,
            e = Wb(b.l, c),
            f = b.config.identification.expirationDays,
            g = b.b,
            h = "";
        f && (h = new Date, h.setTime(h.getTime() + 864E5 * f), h = "; expires=" + h.toUTCString());
        document.cookie = d + "=" + e + h + "; path=/;" + (g ? " domain=" + g + ";" : "")
    }

    function cc(b) {
        if (/\b(?:\d{1,3}\.){3}\d{1,3}\b/.test(b)) return "";
        var c = b.replace(/^www\./, "");
        if (1 === c.split(".").length - 1) return c;
        if (/\.[^.]{2,3}(?:\.[^.]{3})$/.test(c)) {
            if (-1 < "com;org;edu;gov;net;biz;".indexOf(c.substring(c.lastIndexOf(".") + 1, c.length) + ";")) return b = c.split("."), b[b.length - 2] + "." + b[b.length - 1];
            r.error("d", b, "IdentificationService");
            return ""
        }
        var d = /[^.]*(?:\.[^.]{4,})?$/,
            c = c.match(/[^.]*\.[^.]{2,3}(?:\.[^.]{2,3})?$/) || c.match(d);
        return c ? c[0] : (r.error("c", b, "IdentificationService"),
            "")
    }

    function hc(b) {
        C.call(this, b);
        this.a = this.w()
    }
    l(hc, C);
    hc.prototype.D = function() {};
    hc.prototype.start = function() {};
    hc.prototype.da = function() {
        return this
    };

    function ic(b, c, d) {
        this.b = b;
        this.a = d
    }
    ic.prototype.send = function(b, c) {
        var d = c.message.data,
            d = this.a ? this.a.a(d) : d;
        navigator.sendBeacon(b + "&" + d) ? this.b.U.resolve(c) : this.b.U.reject(c)
    };

    function jc(b, c, d, e) {
        M.call(this, b, c, d, e, !0, "GET")
    }
    l(jc, M);

    function kc(b, c, d) {
        this.userAgent = c;
        this.h = d;
        this.Z = this.c = 0;
        this.f = [];
        this.g = [];
        this.m = [];
        this.f.push(this.Ba.bind(this));
        this.f.push(this.Fa.bind(this));
        this.g.push(this.Ja.bind(this));
        this.g.push(this.Va.bind(this));
        this.A = new tb(this.Ea.bind(this));
        b.bind([2], this.Ra.bind(this));
        b.bind([3], this.Qa.bind(this))
    }
    k = kc.prototype;
    k.bind = function(b) {
        this.m.push(b)
    };
    k.Ra = function() {
        var b = lc(this);
        clearTimeout(this.l);
        this.a && (b.M = b.time - this.a.time, b.F = b.H - this.a.H, b.direction = b.F / (Math.abs(b.F) || 1));
        var c;
        a: {
            c = 0;
            for (var d = this.g; c < d.length; c++)
                if ((0, d[c])(b)) {
                    c = !1;
                    break a
                }
            c = !0
        }
        if (c) {
            a: {
                c = 0;
                for (d = this.f; c < d.length; c++)
                    if ((0, d[c])(b)) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            c && (mc(this), b.direction = 0, b.M = b.F = 0);this.b || (this.b = b);this.a = b;this.Z++;nc(this)
        }
    };
    k.Qa = function() {
        this.c = Date.now()
    };
    k.Ea = function(b) {
        this.m.forEach(function(c) {
            return c(b)
        })
    };
    k.Ja = function(b) {
        return 70 >= b.time - this.c ? (this.c = 0, !0) : !1
    };
    k.Va = function(b) {
        return this.userAgent.is.N && this.a ? 20 > b.time - this.a.time : !1
    };
    k.Fa = function(b) {
        return this.a ? 0 === this.a.direction ? 0 > (this.a.H - this.b.H) * b.direction : 0 == b.direction + this.a.direction : !1
    };
    k.Ba = function(b) {
        return this.a && 1E3 <= b.time - this.a.time ? !0 : !1
    };

    function nc(b) {
        b.l = setTimeout(function() {
            clearTimeout(b.l);
            b.Ba(lc(b)) && mc(b)
        }, 1E3)
    }

    function lc(b) {
        return {
            M: 0,
            F: 0,
            time: Date.now(),
            H: b.h.pageYOffset,
            direction: 0
        }
    }

    function mc(b) {
        if (b.b) {
            var c = b.A,
                d = b.b,
                e = b.a || b.b,
                f = e.H - d.H,
                d = {
                    za: 0,
                    M: 0,
                    speed: 0,
                    Z: b.Z,
                    start: {
                        time: d.time,
                        H: d.H
                    },
                    end: {
                        time: e.time,
                        H: e.H
                    },
                    I: {
                        F: Math.abs(f),
                        duration: e.time - d.time
                    },
                    direction: {
                        value: 0,
                        W: !1
                    }
                };
            d.speed = d.I.F / d.I.duration || 1;
            d.direction.value = f / (d.I.F || 1);
            c.b && (d.za = c.b.za + 1, d.M = d.start.time - c.b.end.time, d.direction.W = 0 !== d.direction.value && d.direction.value !== c.b.direction.value);
            a: {
                f = 0;
                for (e = c.a; f < e.length; f++)
                    if ((0, e[f])(d)) {
                        f = !1;
                        break a
                    }
                f = !0
            }
            f && (c.b = d, c.f(d));
            b.a = b.b = null;
            b.Z = 0
        }
    }
    k.dispose = function() {
        !this.u && (this.u = !0) && mc(this)
    };

    function oc(b, c) {
        T.call(this, 0, c, [!1, !0, !0, !1]);
        this.c = 1;
        this.b = {
            name: {
                type: "string",
                required: !0,
                G: 20
            },
            content: {
                type: "string",
                required: !1,
                G: 20
            },
            marketingChannel: {
                type: "string",
                required: !1,
                G: 20
            }
        }
    }
    l(oc, T);
    oc.prototype.g = function(b) {
        return b[0]
    };
    oc.prototype.w = function() {
        return 64
    };

    function pc(b, c) {
        C.call(this, c, !1, !0, !0);
        this.g = b;
        this.c = /^https?:\/\/((s2?)|(cdn(a|poc|ssl)*))\.clicktale\.net\/.+\.js/i;
        this.a = 11;
        this.b = 0;
        this.g.bind([0], this.h.bind(this))
    }
    l(pc, C);
    pc.prototype.h = function(b) {
        this.c.test(b.filename) || this.b++
    };
    pc.prototype.i = function() {
        return this.b
    };
    var qc = /function ([^\(]+)/;

    function rc(b, c) {
        var d;
        if (!(d = c)) {
            var e;
            if ("string" === typeof b) e = b;
            else {
                if (!((d = b.name) || (d = b.toString().match(qc), d = d && 0 < d.length && d[1]))) {
                    d = [];
                    var f = b.prototype;
                    for (e in f) d.push(e);
                    d = d.join("")
                }
                e = d
            }
            d = e
        }
        this.a = d
    }
    rc.prototype.toString = function() {
        return this.a
    };

    function sc() {
        E.apply(this, arguments);
        this.a = 30
    }
    l(sc, E);
    sc.prototype.i = function() {
        return window.innerHeight | 0
    };

    function W() {}
    W.prototype.add = function(b, c) {
        this[b.toString()] = c
    };
    W.prototype.remove = function(b) {
        delete this[b.toString()]
    };

    function ab(b, c, d) {
        return (b = b[c.toString()]) ? (d.R = b, !0) : !1
    }

    function tc(b) {
        Object.keys(b).forEach(function(c) {
            delete b[c]
        })
    }
    W.prototype.values = function() {
        var b = this;
        return Object.keys(this).map(function(c) {
            return b[c]
        })
    };

    function uc(b) {
        this.X = b
    }
    l(uc, vc);

    function wc(b, c) {
        1 !== b.T && (b.Y = c);
        0 === b.B && c.dispose && b.j.a.push(c);
        b.na && b.na(b.j, c)
    }

    function xc(b) {
        var c = new uc(b.X);
        c.B = b.B;
        c.T = b.T;
        c.Y = b.Y;
        c.j = b.j;
        c.na = b.na;
        return c
    }

    function X() {
        this.a = [];
        this.b = new W;
        var b = xc({
            Y: this,
            X: function(b) {
                return b
            },
            j: this,
            B: 1,
            T: 0
        });
        this.b.add(new rc(X), b)
    }
    X.prototype.dispose = function(b) {
        for (; 0 < this.a.length;) this.a.shift().dispose(b)
    };

    function Y(b, c, d) {
        return yc(b, c, null, d)
    }

    function zc(b, c, d) {
        b = yc(b, Object.getPrototypeOf(d).constructor, c, null);
        b.T = 0;
        b.B = 1;
        wc(b, d)
    }

    function yc(b, c, d, e) {
        c = new rc(c, d);
        e = xc({
            j: b,
            X: e,
            T: 0,
            B: 0
        });
        b.b.add(c, e);
        return e
    }
    X.prototype.resolve = function(b, c, d, e, f) {
        return this.f.apply(this, [b, null, c, d, e, f])
    };
    X.prototype.f = function(b, c, d, e, f, g) {
        var h;
        h = Array.prototype.slice.call(arguments, 2);
        var m, w = Ac(this, b, c);
        w ? (m = w.Y, m || (h = h || [], h.splice(0, 0, w.j), m = w.X.apply(null, h), wc(w, m)), h = m) : h = null;
        return h
    };

    function kb(b, c) {
        var d, e = Ac(b, c, null);
        return e ? function(b, c, h, m) {
            b = [e.j, b, c, h, m];
            d = e.Y;
            d || (d = e.X.apply(null, b), wc(e, d));
            return d
        } : function() {
            return null
        }
    }

    function Ac(b, c, d) {
        var e;
        c = new rc(c, d);
        d = {};
        ab(b.b, c, d) && (e = d.R);
        return e
    }

    function vc() {}

    function Bc(b) {
        b.T = 1;
        return b
    }

    function Cc(b, c, d, e) {
        void 0 === d && (d = document);
        void 0 === e && (e = window);
        C.call(this, c);
        this.g = b;
        this.c = d;
        this.L = e;
        this.a = 13;
        this.o = this.h.bind(this);
        this.b = 0;
        this.g.bind([2, 3], this.o);
        this.h()
    }
    l(Cc, C);
    Cc.prototype.h = function() {
        var b = this.c.documentElement,
            c = this.c.body,
            b = ((this.L.innerHeight || b.clientHeight || c.clientHeight) + (b.scrollTop || c.scrollTop)) / (b.scrollHeight || c.scrollHeight) * 100,
            b = Math.abs(Math.round(Math.min(100, b)));
        this.b = Math.max(b, this.b);
        100 === this.b && this.g.$([2, 3], this.o)
    };
    Cc.prototype.i = function() {
        return this.b
    };

    function Dc() {
        E.apply(this, arguments);
        this.a = 17
    }
    l(Dc, E);
    Dc.prototype.i = function() {
        return screen.height
    };

    function Ec(b, c) {
        void 0 === c && (c = []);
        A.call(this, !1, c.some(function(b) {
            return -1 < b.f.indexOf(1)
        }), !0, c.some(function(b) {
            return -1 < b.f.indexOf(0)
        }));
        this.b = c;
        this.a = this.w()
    }
    l(Ec, A);

    function ra(b) {
        var c = {};
        b.b.forEach(function(b) {
            var e = b.c.length;
            e && (c[b.type] = e)
        });
        return c
    }
    k = Ec.prototype;
    k.O = function(b, c, d) {
        if ("number" === typeof b && "number" === typeof c && "string" === typeof d) {
            var e = this.b.filter(function(b) {
                return b.type == c
            })[0];
            e && e.O(b, c, d)
        }
    };
    k.D = function() {};
    k.start = function() {};
    k.da = function() {
        return this
    };
    k.i = function(b) {
        var c = this.b.reduce(function(c, e) {
            return c.concat(ua(e, b))
        }, []);
        return c.length ? 0 == b ? c.map(function(b) {
            return b.id + "\v" + b.type + "\v" + b.value
        }).join("\v") : c : null
    };
    k.w = function() {
        return 35
    };

    function Fc() {}

    function V() {
        var b = window.crypto || window.msCrypto;
        if (b) {
            var c = new Uint32Array(2);
            b.getRandomValues(c);
            for (var b = c[0] & 2097151, d = 32; 0 < d--;) b = 2 * b;
            c = b - 1 + c[1];
            return -1 === c ? 0 : c
        }
        return Math.floor(Math.random() * da)
    }

    function Gc(b) {
        var c = this;
        this.a = new W;
        b.forEach(function(b) {
            return Hc(c, b)
        })
    }

    function Hc(b, c) {
        b.a.add(c, {
            la: [],
            done: !1
        });
        setTimeout(function() {
            return b.done(c)
        }, c)
    }
    Gc.prototype.done = function(b) {
        this.a[b.toString()] && (b = this.a[b], b.la.forEach(function(b) {
            return b()
        }), b.la = null, b.done = !0)
    };

    function Ic(b, c) {
        ClickTaleGlobal.persistence.PersistenceDispatcher.call(this, b);
        this.supportedMessageNames = b;
        this.oa = c
    }
    l(Ic, ClickTaleGlobal.persistence.PersistenceDispatcher);
    Ic.prototype.dispatch = function(b, c) {
        this.dispatched = !0;
        this.oa(b, c)
    };

    function Jc() {
        this.f = !1;
        this.u = [];
        this.m = this.Pa.bind(this);
        this.b = this.Ua.bind(this);
        this.a = new W;
        this.h = [10, 7, 1, 2, 3, 11];
        this.l = [2, 3, 6, 8, 12, 4];
        this.c = [9, 10, 7, 1, 14, 5, 11];
        Kc(this)
    }

    function Kc(b) {
        b.c.concat(b.l).concat([13]).forEach(function(c) {
            b.a[c] = []
        });
        Lc(b);
        /complete|interactive/.test(document.readyState) || document.addEventListener("DOMContentLoaded", function() {
            return setTimeout(b.m, 0)
        }, !1)
    }
    k = Jc.prototype;
    k.bind = function(b, c) {
        !this.f && Mc(this, b, c)
    };
    k.$ = function(b, c) {
        var d = this;
        b.forEach(function(b) {
            if (d.a && 0 < d.a.values.length) {
                b = d.a[b] || [];
                var f = b.indexOf(c); - 1 < f && b.splice(f, 1)
            }
        })
    };

    function Mc(b, c, d) {
        var e;
        void 0 === e && (e = !1);
        var f = e ? function(b) {
            return b.splice(0, 0, d)
        } : function(b) {
            return b.push(d)
        };
        c.forEach(function(c) {
            return f(b.a[c])
        })
    }
    k.Ua = function(b) {
        var c = this.a[x[b.type]] || [];
        this.f || c.forEach(function(c) {
            return c(b)
        })
    };
    k.dispose = function() {
        tc(this.a);
        Nc(this);
        this.f = !0
    };
    k.Pa = function(b) {
        this.u.forEach(function(c) {
            return c(b)
        });
        document.removeEventListener("DOMContentLoaded", this.m, !1)
    };

    function Lc(b) {
        function c(b) {
            return b.addEventListener
        }
        Oc(c, window, b.l, b.b);
        Oc(c, document, b.c, b.b);
        b.a[0] = [];
        b.g = window.onerror;
        window.onerror = Pc(b)
    }

    function Nc(b) {
        function c(b) {
            return b.removeEventListener
        }
        Oc(c, window, b.l, b.b);
        Oc(c, document, b.c, b.b);
        window.onerror = b.g
    }

    function Oc(b, c, d, e) {
        d.forEach(function(d) {
            d = x[d];
            b(c).apply(c, [d, e, !1])
        })
    }

    function Pc(b) {
        var c = 0;
        return function(d, e, f, g, h) {
            if (0 !== c) return !1;
            c++;
            try {
                b.g && b.g(d, e, f, g, h), b.b({
                    filename: e,
                    type: x[0]
                }), r.jsError("9", d, f, g, e)
            } finally {
                c--
            }
            return !1
        }
    }

    function Qc(b, c) {
        S.call(this, b, c);
        this.b = 0;
        this.a = 25
    }
    l(Qc, S);
    Qc.prototype.i = function() {
        return this.b
    };
    Qc.prototype.c = function(b) {
        b.direction.W && 1E3 > b.M && this.b++
    };

    function Rc(b, c, d, e, f, g, h, m, w) {
        var Ub = this;
        this.h = b;
        this.app = d;
        this.config = e;
        this.m = f;
        this.u = h;
        this.C = m;
        this.j = w;
        this.f = this.c = !1;
        this.b = new W;
        this.l = new Zb;
        this.o = e.transport.url;
        b = e.distribution;
        this.A = {
            U: {
                reject: this.Ta.bind(this),
                resolve: this.Ca.bind(this)
            },
            waitInterval: b.reliableMessages.waitInterval
        };
        this.identification = c.identification;
        this.m.bind([6, 8], function() {
            return Ub.ya
        });
        this.g = new Ic([n[0]], this.Ga.bind(this));
        this.a = new eb(g, this.g, e.identification.visitTimeSpan);
        (this.storeEnabled =
            b.persistence.storeEnabled) && this.a.startSession(this.identification.K);
        this.ya()
    }
    k = Rc.prototype;
    k.ca = function(b, c) {
        var d;
        d = {
            data: b
        };
        var e = {};
        if (c.reliable && ab(this.b, c.id, e)) {
            if (d = e.R, 0 > --d.retries) return this.app.ea()
        } else d = {
            message: d,
            metrics: c,
            retries: this.config.distribution.reliableMessages.retries,
            S: {
                name: c.type,
                enabled: c.type === n[0]
            }
        }, this.b.add(c.id, d);
        e = this.o + "?t=" + d.metrics.type + "&p=" + this.h + "&2=" + this.identification.visitor + "&v=1.5.5";
        Sc(this, d, e);
        Tc(this, d, e) && this.storeEnabled && (d.metrics.type === n[0] ? this.a.stopSession(this.identification.K) : this.a.extendSession(this.identification.K,
            this.config.identification.visitTimeSpan))
    };

    function Tc(b, c, d) {
        var e = b.u.a[c.metrics.type](b.A);
        return b.f ? ("end" === c.metrics.type && r.info("2", "", "distributionService"), e.send(d, c), !0) : !1
    }
    k.Ga = function(b, c) {
        var d;
        d = {};
        var e = b.message.data,
            f = e.data;
        "string" === typeof f && (e.data = this.l.b(f));
        ab(this.b, e.id, d) ? d = d.R : (d = {
            message: e,
            metrics: {
                id: 0,
                type: b.message.name,
                reliable: !1,
                advance: !1
            },
            retries: 0,
            S: {
                C: c,
                locator: b.locator,
                result: b,
                retries: this.config.distribution.persistence.dispatchRetries
            }
        }, this.b.add(e.id, d));
        Tc(this, d, b.message.url) || c.reject(b)
    };

    function Sc(b, c, d) {
        if (c.S.enabled && !c.S.locator && b.storeEnabled) {
            var e = b.l.a(c.message.data);
            c.S.locator = b.a.storeMessage({
                url: d,
                data: {
                    id: Date.now(),
                    data: e
                },
                name: c.metrics.type,
                sid: b.identification.K
            }, function() {}, !1, !1)
        }
    }
    k.Ca = function(b) {
        var c = b.S;
        b.response === Na ? this.app.Aa() : ("auth" === b.metrics.type && ((this.J || (this.J = this.j.resolve("MetricsReader"))).start(), this.c = !0), this.a.deThrottle(), c.C && c.C.resolve(c.result), c.locator && this.a.removeMessage(c.locator), b.metrics && ("end" === b.metrics.type && r.info("3", "", "distributionService"), this.c && this.C.resolve(b.metrics)))
    };
    k.Ta = function(b) {
        var c = b.S;
        this.a.throttleUp();
        c.C && (0 < --c.retries ? c.C.defer(c.result) : c.C.reject(c.result));
        b.metrics && this.C.reject(b.metrics)
    };
    k.ya = function() {
        (this.g.isAvailable = (this.f = navigator.onLine) && this.config.distribution.persistence.dispatchEnabled) && this.a.sendMessages()
    };

    function Uc(b, c) {
        T.call(this, 0, c, [!1, !0, !0, !1]);
        this.c = Infinity;
        this.b = {
            vendor: {
                type: "string",
                required: !1,
                G: 20
            },
            experience: {
                type: "string",
                required: !0,
                G: 100
            }
        }
    }
    l(Uc, T);
    Uc.prototype.w = function() {
        return 60
    };
    Uc.prototype.g = function(b) {
        return b
    };

    function Vc(b) {
        R.call(this, b)
    }
    l(Vc, R);
    Vc.prototype.w = function() {
        return 100
    };
    var Ma = 200,
        Na = 204;

    function Wc(b) {
        B.call(this, b);
        this.a = 3
    }
    l(Wc, B);
    Wc.prototype.i = function() {
        return this.identification.visit
    };

    function Xc(b, c, d, e) {
        var f = this;
        this.j = c;
        this.config = d;
        this.app = e;
        c = [4];
        var g = this.dispose.bind(this);
        d.onEnd.useOnBeforeUnload && c.push(12);
        this.b = setTimeout(function() {
            return g(!1, !1)
        }, d.identification.visitTimeSpan);
        b.bind(c, function() {
            return f.dispose()
        })
    }
    Xc.prototype.dispose = function(b, c) {
        clearTimeout(this.b);
        var d = this.a;
        d.a = Ta(d);
        this.j.dispose(b);
        if (c) {
            var d = this.j.resolve("IdentificationService"),
                e = this.config,
                f = this.app,
                g = d.identification,
                h = e.transport.url.replace("/monitor", "/visitended"),
                e = new M({
                    waitInterval: 0,
                    U: new Ha
                }, f, null, e.transport.xhrTimeout),
                f = {
                    message: {
                        data: ca({
                            projectId: f.xa(),
                            visitorId: g.visitor,
                            visitId: g.visit
                        })
                    }
                };
            e.send("" + h, f);
            h = ec(d);
            J(d, d.a = {
                pgv: null !== h ? h.pgv : V(),
                vst: 0,
                vstr: null !== h ? h.vstr : V(),
                intr: t()
            })
        }
        this.app.sa()
    };
    Xc.prototype.ea = function() {
        this.dispose(!0)
    };

    function Yc(b, c) {
        T.call(this, 0, c, [!1, !0, !0, !1]);
        this.c = 1;
        this.b = {
            amount: {
                type: "number",
                required: !0
            },
            currency: {
                type: "string",
                required: !0,
                G: 3
            },
            products: {
                type: "number",
                required: !1
            }
        }
    }
    l(Yc, T);
    Yc.prototype.g = function(b) {
        return b[0]
    };
    Yc.prototype.w = function() {
        return 61
    };

    function Z(b, c, d, e, f) {
        void 0 === f && (f = !1);
        this.a = b;
        this.u = [];
        this.m = [];
        this.g = this.f = !1;
        this.A = "TagsMetric BrowserMetric EventIdsMetric TimeOnPageMetric ScrollReachMetric AppLoadTimeMetric InputMethodMetric JSErrorCountMetric GoalOrientedMetric DiscardedTagsMetric FirstPageviewMetric ViewPortWidthMetric AdobeLegacyIdMetric ViewPortHeightMetric NumberOfClicksMetric BrowserVersionMetric LackOfInterestMetric AttentionSplitMetric ClientTimeStampMetric ResolutionWidthMetric NavigationStartMetric ResolutionHeightMetric CarelessScrollingMetric ScreenOrientationMetric GoogleAnalyticsIdMetric AdobeMarketingCloudIdMetric DurationSinceLastVisitMetric EngagementTimeAggregatorMetric AbtestMetric CartUpdateMetric CartValueMetric ActionMetric ErrorMetric CampaignMetric".split(" ");
        b = !!d && d.constructor.prototype === Object.prototype;
        this.b = c && c.constructor.prototype === Object.prototype ? Zc(c.onStartCallback, c.location, c.referrer) : Zc(c, d, e);
        e = window.CEC;
        if (b || e && e.config) e = b ? d : e.config, window.autoMonitorConfig && wa(e, window.autoMonitorConfig), G = Ba(e);
        f = f || !!(c && c.constructor.prototype === Object.prototype && c.location || d);
        $c(this);
        !this.g && ad(this, f) && this.start(f)
    }
    var bd;

    function Zc(b, c, d) {
        return {
            location: c || window.location,
            referrer: d || document.referrer,
            onStartCallback: b
        }
    }

    function $c(b) {
        var c = window.CEC = window.CEC || {},
            d = b.a;
        c.monitor = b;
        c.onXhrCreated = function() {};
        var e = {
                stop: function(d) {
                    b.dispose(!1, !1, d);
                    c.monitor = null
                },
                shutdown: b.ea,
                isMonitoring: b.ba,
                getPid: function() {
                    return d
                },
                getState: b.aa,
                logical: function(e, f) {
                    var m = {
                        referrer: f,
                        location: e,
                        onStartCallback: b.b.onStartCallback
                    };
                    b.dispose(!1, !1, !0);
                    c.monitor = b.constructor(d, m, null, f, !0)
                },
                addEvent: b.qa,
                addPageTag: function(c, d) {
                    return b.ja(c, 3, d)
                },
                addDynamicAction: function(c, d) {
                    return b.ja(c, 4, d)
                },
                endVisit: b.ra,
                onStop: function(c) {
                    return b.u.push(c)
                },
                onStart: function(c) {
                    return b.m.push(c)
                },
                ctData: b.ua,
                disable: function() {
                    return b.g = !0
                }
            },
            f;
        for (f in e) c[f] = e[f].bind(b);
        Object.defineProperties(c, {
            config: {
                get: function() {
                    return H()
                },
                configurable: !0
            },
            version: {
                get: function() {
                    return "1.5.5"
                },
                configurable: !0
            },
            pid: {
                get: function() {
                    return d
                },
                configurable: !0
            },
            visit: {
                value: 0,
                writable: !0,
                configurable: !0
            },
            visitor: {
                value: 0,
                writable: !0,
                configurable: !0
            },
            pageView: {
                value: 0,
                writable: !0,
                configurable: !0
            }
        });
        if ("function" === typeof c.onInit) c.onInit(b)
    }
    k = Z.prototype;
    k.wa = function() {
        return bd || (bd = t())
    };
    k.xa = function() {
        return this.a
    };

    function cd(b) {
        Object.defineProperties(window.CEC, {
            visit: {
                get: function() {
                    return b.visit
                },
                configurable: !0
            },
            visitor: {
                get: function() {
                    return b.visitor
                },
                configurable: !0
            },
            pageView: {
                get: function() {
                    return b.K
                },
                configurable: !0
            }
        })
    }
    k.start = function(b) {
        var c = this,
            d = window.ClickTaleGlobal;
        d && dd("onstarting");
        var e = this.j,
            f = e.resolve("Disposer");
        this.f = !0;
        e.resolve("EventListenerHub");
        e.resolve("MetricsReader");
        e.resolve("DistributionService");
        f.a = e.resolve("MetricAggregator");
        if (d) {
            var g = e.resolve("IdentificationService").identification;
            cd(g);
            d = function() {
                var b = H(),
                    d = b.identification.integrationMethod();
                d && (b = Va(b.identification.integrationMessageFormat, c.a, g.visitor, g.visit, g.K), r.addToContext({
                    visit: g.visit,
                    visitor: g.visitor,
                    pageview: g.K,
                    ver: "1.5.5",
                    cecpid: c.a,
                    url: document.location.href
                }), d(b))
            };
            ClickTaleGlobal.scripts.integration.onReady(d);
            b && d();
            dd("onstarted")
        }
        if (this.b.onStartCallback) this.b.onStartCallback(this);
        this.m.forEach(function(b) {
            return b()
        })
    };

    function dd(b) {
        var c = ClickTaleGlobal.diagnostics;
        b = (c = c && c.monitor) && c[b];
        "function" == typeof b && b()
    }

    function ad(b, c) {
        var d = H(),
            e = new qb,
            f = e.userAgent.supports.sendBeacon ? ic : d.transport.disableImageChannel ? jc : mb;
        if (e.userAgent.supports.Ha) {
            var g = new X;
            b.j = g;
            b.l = new ib(d);
            b.c = new Ec(0, [new va(d), new Tb(d)]);
            var h = function() {
                return g.resolve("EventListenerHub")
            };
            ed(b, d, h, e, c);
            zc(g, null, e);
            fd(b, f, d);
            Y(g, "ChannelFactory", function() {
                return new jb(g)
            });
            Y(g, "IdGenerator", function() {
                return new Fc
            });
            Y(g, "MetricsPromise", function() {
                return new Fa
            });
            Y(g, "CookiesService", function() {
                return new Ga
            });
            Y(g, "CookieSerializer",
                function() {
                    return new Vb(d)
                });
            Y(g, "VisitService", function() {
                return new ha(d)
            });
            zc(g, "EventIdsMetric", b.l);
            zc(g, "TagsMetric", b.c);
            Y(g, "EventListenerHub", function() {
                return new Jc
            });
            Y(g, "NavigationStartTimerEventHub", function() {
                return new Gc([d.metrics.interestInterval])
            });
            Y(g, "AttentionSplitMetric", function(b) {
                return new ub(b.resolve("ScrollyBlocksProvider"), d)
            });
            Y(g, "CarelessScrollingMetric", function(b) {
                return new Qc(b.resolve("ScrollyBlocksProvider"), d)
            });
            Y(g, "ScrollyBlocksProvider", function() {
                return new kc(h(),
                    e.userAgent, window)
            });
            Y(g, "Disposer", function(c) {
                return new Xc(h(), c, d, b)
            }).B = 1;
            Y(g, "PeriodicalNotifierRule", function(c) {
                return new ja(h(), d, b, c.resolve("MetricsPromise"))
            });
            Y(g, "IdentificationService", function(b) {
                return new bc(b.resolve("IdGenerator"), b.resolve("CookiesService"), d, b.resolve("VisitService"), b.resolve("CookieSerializer"), c)
            });
            Y(g, "LocalStorageProvider", function() {
                return new ClickTaleGlobal.persistence.LocalStorageProvider
            });
            Y(g, "WindowNameProvider", function() {
                return new ClickTaleGlobal.persistence.WindowNameProvider
            });
            Y(g, "PersistenceManager", function(b) {
                return new ClickTaleGlobal.persistence.PersistenceManager([b.resolve("LocalStorageProvider"), b.resolve("WindowNameProvider")], new z(d.distribution.maxBackoffInterval))
            });
            Y(g, "DistributionService", function(c) {
                return new Rc(b.a, c.resolve("IdentificationService"), b, d, h(), c.resolve("PersistenceManager"), c.resolve("ChannelFactory"), c.resolve("MetricsPromise"), c)
            });
            Y(g, "MetricAggregator", function(c) {
                var e = g.resolve("MetricsPromise"),
                    f = new W;
                d.metrics.disabledMetrics.forEach(function(b) {
                    return f.add(b,
                        b)
                });
                var h = b.A.filter(function(b) {
                    return !f[b.toString()]
                }).map(function(b) {
                    return c.resolve(b)
                }).concat([c.resolve("VersionMetric"), c.resolve("LocationMetric"), c.resolve("ProjectIdMetric"), c.resolve("DocumentReferrerMetric"), c.resolve("VisitIdentificationMetric"), c.resolve("DOMContentLoadedTimeMetric"), c.resolve("VisitorIdentificationMetric"), c.resolve("PageViewIdentificationMetric")]);
                return new Oa(h, d, e)
            });
            Y(g, "MetricsReader", function(b) {
                return new I(b.resolve("EngagementTimeAggregatorMetric"), [b.resolve("PeriodicalNotifierRule")], [b.resolve("EventIdsMetric"), b.resolve("TagsMetric")], h(), b.resolve("MetricAggregator"), b.resolve("DistributionService"), b.resolve("IdentificationService"))
            });
            return !0
        }
        ac(f, d, b.a, b);
        return !1
    }

    function ed(b, c, d, e, f) {
        function g() {
            return b.j.resolve("NavigationStartTimerEventHub")
        }

        function h() {
            return b.j.resolve("IdentificationService")
        }
        var m = gd(f);
        [
            ["VersionMetric", function() {
                return new Mb
            }],
            ["AppLoadTimeMetric", function() {
                return new Gb(b)
            }],
            ["ViewPortWidthMetric", function() {
                return new Kb
            }],
            ["AdobeLegacyIdMetric", function() {
                return new Lb
            }],
            ["ViewPortHeightMetric", function() {
                return new sc
            }],
            ["BrowserMetric", function() {
                return new Cb(e)
            }],
            ["ResolutionWidthMetric", function() {
                return new Rb
            }],
            ["ClientTimeStampMetric", function() {
                return new vb
            }],
            ["ProjectIdMetric", function() {
                return new Sb(b.a)
            }],
            ["ResolutionHeightMetric", function() {
                return new Dc
            }],
            ["GoogleAnalyticsIdMetric", function() {
                return new fb
            }],
            ["LocationMetric", function() {
                return new $a(b.b.location, window)
            }],
            ["NavigationStartMetric", function() {
                return new sa(m)
            }],
            ["AdobeMarketingCloudIdMetric", function() {
                return new Jb
            }],
            ["BrowserVersionMetric", function() {
                return new zb(e)
            }],
            ["DocumentReferrerMetric", function() {
                return new ob(b.b.referrer)
            }],
            ["DOMContentLoadedTimeMetric", function() {
                return new pb(m)
            }],
            ["ScreenOrientationMetric", function() {
                return new Qb(e.userAgent)
            }],
            ["ScrollReachMetric", function() {
                return new Cc(d(), c)
            }],
            ["JSErrorCountMetric", function() {
                return new pc(d(), c)
            }],
            ["NumberOfClicksMetric", function() {
                return new D(d(), c)
            }],
            ["TimeOnPageMetric", function() {
                return new Pb(d(), m)
            }],
            ["FirstPageviewMetric", function() {
                return new hb(h())
            }],
            ["InputMethodMetric", function() {
                return new Q(d(), c)
            }],
            ["VisitIdentificationMetric", function() {
                return new Wc(h())
            }],
            ["VisitorIdentificationMetric", function() {
                return new Hb(h())
            }],
            ["DurationSinceLastVisitMetric", function() {
                return new nb(h())
            }],
            ["PageViewIdentificationMetric", function() {
                return new pa(h())
            }],
            ["EngagementTimeAggregatorMetric", function() {
                return new lb(d())
            }],
            ["GoalOrientedMetric", function() {
                return new gb(d(), g(), c)
            }],
            ["LackOfInterestMetric", function() {
                return new P(d(), g(), c)
            }],
            ["DiscardedTagsMetric", function() {
                return new qa(b.c)
            }],
            ["AbtestMetric", function(b) {
                return new Uc(0, b.resolve("MetricsPromise"))
            }],
            ["CartValueMetric", function(b) {
                return new Yc(0, b.resolve("MetricsPromise"))
            }],
            ["CartUpdateMetric", function(b) {
                return new Ab(0, b.resolve("MetricsPromise"))
            }],
            ["ActionMetric", function(b) {
                return new Db(0, b.resolve("MetricsPromise"))
            }],
            ["ErrorMetric", function(b) {
                return new xb(0, b.resolve("MetricsPromise"))
            }],
            ["CampaignMetric", function(b) {
                return new oc(0, b.resolve("MetricsPromise"))
            }]
        ].forEach(function(c) {
            return yc(b.j, c[0], null, c[1])
        })
    }

    function gd(b) {
        var c = (new Date).getTime();
        return window.performance && !b && (b = performance.timing, !isNaN(b.navigationStart) && 18E5 > c - b.navigationStart) ? b : {
            domContentLoadedEventEnd: c,
            navigationStart: Z.a || c
        }
    }
    k.ea = function() {
        this.dispose(!0)
    };
    k.ra = function() {
        this.dispose(!1, !0)
    };
    k.dispose = function(b, c, d) {
        this.f && (this.j.resolve("Disposer").dispose(b, c), d || (G = null), delete Z.a)
    };
    k.Wa = function(b, c) {
        this.dispose(!1, !1, !0);
        var d = window.ClickTaleMonitor;
        (d = d && d.Settings) && d.onReady && d.onReady(b, c)
    };
    k.sa = function() {
        this.f && (this.f = !1, this.h && this.h(), this.u.forEach(function(b) {
            return b()
        }))
    };
    k.Sa = function(b) {
        this.h = b
    };
    k.Aa = function() {
        this.dispose(!0, !1)
    };
    k.ba = function() {
        return this.f
    };

    function fd(b, c, d) {
        var e = new Zb,
            f = d.transport;
        Bc(Y(b.j, "pre", function(d, h) {
            return new c(h, b, e, f.xhrTimeout)
        })).B = 1;
        Bc(Y(b.j, "auth", function(c, d) {
            return new jc(d, b, e, f.xhrTimeout)
        })).B = 1;
        Bc(Y(b.j, "init", function(c, d) {
            return new M(d, b, new L, f.xhrTimeout)
        })).B = 1;
        Bc(Y(b.j, "main", function(c, d) {
            return new M(d, b, new L, f.xhrTimeout)
        })).B = 1;
        Y(b.j, "end", function(d, h) {
            return new c(h, b, e, f.xhrTimeout)
        }).B = 1
    }
    k.qa = function(b) {
        var c = this.l; - 1 === c.b.indexOf(b) && (c.b.push(b), c.g && c.c())
    };
    k.O = function(b, c, d) {
        this.c.O(b, c, d)
    };
    k.ja = function(b, c, d) {
        this.c.O(b, c, d)
    };
    k.ua = function(b) {
        var c = "object" === typeof b && null !== b && b.event ? b.event : void 0,
            d = c ? this.j.resolve(ba(c) + "Metric") : void 0;
        d ? d.add(b) : r.error("1", c, "dataEvents")
    };
    k.aa = function() {
        return this.j ? this.j.resolve("MetricAggregator").aa() : ""
    };
    Z.a = window.a || (new Date).getTime();
    Z.prototype.stop = Z.prototype.sa;
    Z.prototype.onStop = Z.prototype.Sa;
    Z.prototype.ctData = Z.prototype.ua;
    Z.prototype.addTag = Z.prototype.O;
    Z.prototype.dispose = Z.prototype.dispose;
    Z.prototype.restart = Z.prototype.Wa;
    Z.prototype.endVisit = Z.prototype.ra;
    Z.prototype.getState = Z.prototype.aa;
    Z.prototype.onOptOut = Z.prototype.Aa;
    Z.prototype.shutdown = Z.prototype.ea;
    Z.prototype.addEvent = Z.prototype.qa;
    Z.prototype.addPageTag = Z.prototype.ja;
    Z.prototype.getLoadTime = Z.prototype.wa;
    Z.prototype.isMonitoring = Z.prototype.ba;
    Z.prototype.getProjectId = Z.prototype.xa;
    var hd = "object" === typeof module && "object" === typeof module.exports,
        ClickTaleMonitor = (hd ? module.exports.ClickTaleMonitor : window.ClickTaleMonitor) || {};
    ClickTaleMonitor.App = Z;
    hd ? module.exports = ClickTaleMonitor : window.ClickTaleMonitor = ClickTaleMonitor;
    ClickTaleMonitor.version = "1.5.5";
    if ("object" == typeof module && "object" == typeof module.exports) {
        for (var prop in ClickTaleMonitor) window.ClickTaleMonitor[prop] = ClickTaleMonitor[prop]
    };
    if (window.ClickTaleMonitor && window.ClickTaleMonitor.Settings) {
        window.ClickTaleMonitor.Settings.onReady();
    }
}.call({});

//Signature:ivFc4cMf86fe6ueFwPV2Y97NiQcvyEAGo49hnL1V+G983nL6zpPoo/FZaJh5Ju6b4y4j5vyUvrDSXxcYxZuX37eCFCoI3OfSvuST2z+5cB5dWwCmkKghqbNOZrHKRQ2QUSyp3jmTudyFyKbFZP0cd4gKMTx5O+XeDrEhWvx/5/E=