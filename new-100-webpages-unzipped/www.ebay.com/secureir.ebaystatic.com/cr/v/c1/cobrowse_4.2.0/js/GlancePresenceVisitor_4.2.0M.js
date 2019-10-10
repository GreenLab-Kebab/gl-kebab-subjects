(function() {
    /*
     Copyright 2017 Glance Networks, Inc.
    */
    var aa = ["4", "2", "0", "38"].slice(0, 3).join(".");

    function g(a) {
        for (a = a.toString(); 2 > a.length;) a = "0" + a;
        return a
    }
    Uint8Array.prototype.slice || (Uint8Array.prototype.slice = function(a, c) {
        return new Uint8Array(this.subarray(a, c))
    });
    ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = this.byteLength);
        a = Math.floor(a);
        c = Math.floor(c);
        0 > a && (a += this.byteLength);
        0 > c && (c += this.byteLength);
        a = Math.min(Math.max(0, a), this.byteLength);
        c = Math.min(Math.max(0, c), this.byteLength);
        if (0 >= c - a) return new ArrayBuffer(0);
        var d = new ArrayBuffer(c - a),
            e = new Uint8Array(d),
            f = new Uint8Array(this, a, c - a);
        e.set(f);
        return d
    });
    var h = navigator.userAgent.toLowerCase(),
        l = h.match(/(edge)[\s\/:]([\w\d\.]+)?/) || h.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || h.match(/(rv):([\w\d\.]+)/) || [null, "unknown", 0];
    "rv" === l[1] && (l[1] = "ie");

    function ba(a) {
        for (var c = new Date, c = c.getUTCFullYear() + "/" + (c.getUTCMonth() + 1) + "/" + c.getUTCDate() + " " + g(c.getUTCHours()) + ":" + g(c.getUTCMinutes()) + ":" + g(c.getUTCSeconds()) + " ", d = 0; d < a.length; d++) c += ("object" === typeof a[d] ? JSON.stringify(a[d]) : a[d]) + " ";
        return c
    }

    function m(a) {
        window.console && window.console.log && window.console.log(ba(arguments))
    };
    /*
     Copyright (c) 2018 Glance Networks, Inc.
    */
    var n = n || {};
    window.GLANCE = window.GLANCE || {};
    window.GLANCE.VERSION = "4.2.0.38";
    window.GLANCE.PATCH = "";
    var p = navigator.userAgent.toLowerCase(),
        ca = navigator.platform.toLowerCase(),
        r = p.match(/(edge)[\s\/:]([\w\d\.]+)?/) || p.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || p.match(/(rv):([\w\d\.]+)/) || [null, "unknown", 0];
    "rv" === r[1] && (r[1] = "ie");
    var t = {
        extend: Function.prototype.extend,
        name: "version" == r[1] ? r[3] : r[1],
        version: "ie" == r[1] && document.documentMode || parseFloat("opera" == r[1] && r[4] ? r[4] : r[2]),
        m: {
            name: p.match(/ip(?:ad|od|hone)/) ? "ios" : (p.match(/(?:webos|android)/) || ca.match(/mac|win|linux/) || ["other"])[0]
        },
        V: {
            Z: !!document.evaluate,
            X: !!window.runtime,
            query: !!document.querySelector,
            json: !!window.JSON
        },
        W: {}
    };
    document.documentMode && window.XDomainRequest ? (t.name = "ie", t.version = document.documentMode) : window.navigator && navigator.appVersion && -1 != navigator.appVersion.indexOf("MSIE 7.") && (t.name = "ie", t.version = "7");
    t[t.name] = !0;
    t[t.name + parseInt(t.version, 10)] = !0;
    t.m[t.m.name] = !0;
    if ("undefined" !== typeof window.Prototype && 1.7 > parseFloat(window.Prototype.Version.substr(0, 3)) && "undefined" !== typeof Array.prototype.toJSON) var u = function(a) {
        var c = Array.prototype.toJSON;
        delete Array.prototype.toJSON;
        a = JSON.stringify(a);
        Array.prototype.toJSON = c;
        return a
    };
    void 0 === u && (u = function(a) {
        return JSON.stringify(a)
    });

    function v(a) {
        a.onmessage = function(c) {
            c = JSON.parse(c.data);
            a.D && a.D(c)
        };
        a.l = function(c) {
            c = u(c);
            a.send(c)
        };
        a.J = function(a) {
            return a && a.code || 0
        };
        a.K = function(a) {
            return a && a.reason || ""
        }
    }

    function da(a) {
        var c = {},
            d;
        n.T ? d = new w(a) : (t.ie9 && "http:" === window.location.protocol && (c.protocols_whitelist = ["iframe-eventsource", "iframe-htmlfile"]), d = new SockJS(a, "", c));
        d.i = 0;
        d.G = function() {
            d.A();
            d.transport && !d.transport.match(/^iframe-/) && (d.B = window.setInterval(function() {
                d.i++;
                d.P && d.P({
                    i: d.i
                })
            }, 15E3))
        };
        d.A = function() {
            d.B && window.clearInterval(d.B)
        };
        v(d);
        d.onclose = function(a) {
            d.A();
            d.N && d.N(a)
        };
        d.onheartbeat = function() {
            d.i = 0;
            d.G();
            d.O && d.O()
        };
        return d
    }

    function x(a, c) {
        window.setTimeout(function() {
            x(a, c)
        }, 100)
    }

    function w(a) {
        this.readyState = SockJS.CONNECTING;
        this.a = Math.round(1E6 * Math.random());
        y = y || {};
        y[this.a] = this;
        x({
            from: "GSockJSProxy",
            sockid: this.a,
            cmd: "open",
            url: a
        }, "*")
    }
    var y;
    w.prototype.send = function(a) {
        x({
            from: "GSockJSProxy",
            sockid: this.a,
            cmd: "send",
            data: a
        }, "*")
    };
    w.prototype.close = function() {
        this.readyState = SockJS.CLOSING;
        x({
            from: "GSockJSProxy",
            sockid: this.a,
            cmd: "close"
        }, "*")
    };

    function A(a, c, d) {
        void 0 !== a && (d = d || Object.keys(a), d.forEach(function(d) {
            void 0 !== a[d] && (c[d] = a[d])
        }))
    }

    function ea(a) {
        var c = a.func.split(".");
        if ("GLANCE" !== c[0]) B("ERR_BADINVOKE:" + c[0]);
        else {
            for (var d = window.GLANCE, e = 1; e < c.length; e++)
                if (d = d[c[e]], !d) {
                    B("ERR_UNDEFINVOKE:" + c[e]);
                    return
                }
            a.args = a.args || {};
            a.args.remote = !0;
            d(a.args)
        }
    }

    function C(a, c, d) {
        window.addEventListener(a, c, d)
    }

    function D(a) {
        n.T ? this.f = new E(a) : this.a = this.g();
        this.response = null;
        this.type = a
    }
    D.prototype.g = function() {
        var a;
        if (window.XMLHttpRequest && (a = new window.XMLHttpRequest, void 0 !== a.withCredentials)) return a;
        if (window.XDomainRequest) return "https:" === location.protocol.toLowerCase() || "" === location.hostname && "https:" === window.parent.location.protocol.toLowerCase() ? (a = new XDomainRequest, a.onload = function() {
                a.readyState = 4;
                a.status = 200;
                a.onreadystatechange()
            }, a.onerror = function() {
                a.readyState = 4;
                a.status = 0;
                a.onreadystatechange()
            }, a.ontimeout = function() {
                a.readyState = 4;
                a.status = 0;
                a.onreadystatechange()
            },
            a.onprogress = function() {
                F("p")
            }, a) : new G;
        throw Error("Can't get xmlhttp request");
    };
    window.Sarissa && Sarissa._SARISSA_IS_IE && !(new window.XMLHttpRequest).withCredentials && !window.XDomainRequest && (D.prototype.g = function() {
        F("Sarissa");
        return new Sarissa.originalXMLHttpRequest
    });
    D.prototype.abort = function() {
        this.f ? this.f.abort() : this.a.abort()
    };
    D.prototype.onreadystatechange = function() {
        if (4 == this.a.readyState) {
            var a = "error";
            if (0 == this.a.status) F(this.method + " to " + this.url + " failed: network"), this.b(!0, "connection");
            else if (200 !== this.a.status) {
                B(this.method + " to " + this.url + " failed with status: " + this.a.status);
                null !== this.a.responseText && F(this.a.responseText);
                if (401 === this.a.status || 403 === this.a.status) a = "authorization", this.c && this.c.Y();
                this.b(!1, a)
            } else {
                if ("" !== this.a.response) {
                    "XML" === this.accept ? (this.response = this.a.responseXML &&
                        this.a.responseXML.documentElement, null === this.response && B("Invalid XML response: " + this.a.responseText)) : this.response = this.a.responseXML ? fa(this.a.responseXML.childNodes[0].childNodes[0].nodeValue) : "HTML" === this.accept ? this.a.responseText : fa(this.a.responseText);
                    if (null === this.response) {
                        F(this.method + " to " + this.url + " failed - can't parse response " + this.a.responseText);
                        this.b(!1, a);
                        return
                    }
                    if (void 0 !== this.response.H && void 0 !== this.response.M) {
                        F(this.method + " to " + this.url + " failed with error:" +
                            this.response.H + " " + this.response.M);
                        this.b(!1, a);
                        return
                    }
                }
                this.onsuccess(this.response)
            }
        }
    };

    function fa(a) {
        var c = null;
        try {
            c = JSON.parse(a)
        } catch (d) {
            return F("JSON parse failed with error: " + d.toString() + " parsing: " + a), null
        }
        return c
    }
    D.prototype.get = function(a, c, d, e, f) {
        this.method = "GET";
        ga(this, a, null, c, d, e, f)
    };

    function ga(a, c, d, e, f, q, z) {
        a.url = c;
        a.onsuccess = void 0 !== q ? q : function() {};
        a.b = void 0 !== z ? z : function() {};
        a.method = a.method || "POST";
        if (a.f) ha(a.f, c, d, e, f, q, z);
        else {
            var P;
            "string" === typeof d ? P = d : d && (P = "JSON" === a.type ? u(d) : "data=" + u(d));
            d = "JSON" === a.type ? "application/json; charset=utf-8" : "application/x-www-form-urlencoded; charset=utf-8";
            a.a.onreadystatechange = function() {
                a.onreadystatechange()
            };
            try {
                a.a.open(a.method, c, e), void 0 !== a.h && a.a.setRequestHeader("Accept", a.h), void 0 !== a.a.setRequestHeader && "GET" !==
                    a.method && a.a.setRequestHeader("Content-type", d), a.c && a.c.L() && a.a.setRequestHeader("Authorization", "Bearer " + a.c.L()), f && void 0 !== a.a.withCredentials && (a.a.withCredentials = f), a.a.send(P)
            } catch (ua) {
                F(a.method + " to " + c + " failed with: " + ua.toString()), a.b()
            }
        }
    }

    function G() {
        H || F("ERR_INITNOTCALLED");
        if (!document.getElementById(I)) {
            var a = document.createElement("iframe");
            a.id = I;
            a.width = "0px";
            a.height = "0px";
            a.src = "https://" + H + "/IEXDRProxy2.htm";
            document.body.appendChild(a)
        }
        this.b = document.getElementById(I).contentWindow;
        for (a = String(Math.round(Math.random() * Math.pow(10, 4))); 4 > a.length;) a = "0" + a;
        this.a = a;
        J[this.a] = this;
        this.j = []
    }
    var I, H, ia, J = {};
    G.prototype.postMessage = function(a) {
        ia ? this.b.postMessage(this.a + a, "*") : this.j.push(a)
    };
    G.prototype.open = function(a, c) {
        this.postMessage(c)
    };
    G.prototype.send = function(a) {
        this.postMessage(a)
    };
    G.prototype.abort = function() {
        this.postMessage("abrt")
    };

    function ja(a) {
        window.XMLHttpRequest && void 0 !== (new window.XMLHttpRequest).withCredentials || (H = a, I = "glance_ie_xdr_proxy_" + K(a).replace(/\./g, "_"), C("message", ka, !1))
    }

    function ka(a) {
        if (K(a.origin) === K(H)) {
            var c;
            try {
                c = JSON.parse(a.data)
            } catch (f) {
                return
            }
            if (c.proxy_ready) {
                ia = !0;
                for (var d in J) {
                    a = J[d];
                    for (var e = 0; e < a.j.length; e++) a.postMessage(a.j[e]);
                    a.j = []
                }
            }
            c.status && c.responseText && (d = c.requestid, a = J[d]) && (a.readyState = 4, a.status = c.status, a.responseText = c.responseText, a.response = c.responseText, a.onreadystatechange(), delete J[d])
        }
    }

    function E(a) {
        this.type = a
    }

    function ha(a, c, d, e, f, q, z) {
        a.onsuccess = q;
        a.b = z;
        x({
            from: "IFrameProxyRequest",
            type: a.type,
            url: c,
            obj: d,
            async: e,
            withcred: f
        }, "*")
    }
    E.prototype.abort = function() {
        E.postMessage({
            from: "IFrameProxyRequest",
            abort: !0
        }, "*")
    };

    function la(a) {
        this.name = a
    }
    la.prototype.get = function() {
        return ma(this) ? localStorage.getItem(this.name) : null
    };

    function ma(a) {
        var c = localStorage.getItem(a.name + "_exp");
        if (!c) return !1;
        c = new Date(c);
        return c < new Date ? (localStorage.removeItem(a.name), localStorage.removeItem(a.name + "_exp"), !1) : !0
    }

    function L(a) {
        this.a = a.document;
        this.c = a;
        var c = [
            ["hidden", "visibilitychange"],
            ["mozHidden", "mozvisibilitychange"],
            ["webkitHidden", "webkitvisibilitychange"],
            ["msHidden", "msvisibilitychange"],
            ["oHidden", "ovisibilitychange"]
        ];
        for (a = 0; a < c.length; a++)
            if (c[a][0] in document) {
                this.b = c[a][0];
                this.f = c[a][1];
                break
            }
    }

    function K(a) {
        var c = new RegExp(/^(?:[a-z]{1,5}:\/\/|)([^\:\?\/]*)/),
            d = a.match(/^\d+\.\d+.\d+.\d+$/),
            c = c.exec(a);
        if (d) return a;
        if (null === c || 2 !== c.length) return "about:" !== a && F("ERR_DOMAINPARSE: " + a), null;
        d = c[1].split(".");
        return 1 === d.length ? (F("ERR_DOMAINPARSE: " + a), null) : 2 === d.length ? d.join(".") : 3 === d.length ? d.slice(1).join(".") : 4 >= d[d.length - 2].length ? d.slice(d.length - 3).join(".") : d.slice(d.length - 2).join(".")
    }
    L.prototype.getElementsByTagName = function(a) {
        return this.a.getElementsByTagName(a)
    };

    function na(a, c) {
        var d = [
                ["src", "//www.glancecdn.net/cobrowse/js/sockjs1.0.2.min.js"]
            ],
            e = a.a.createElement("script");
        c && e.addEventListener("load", c);
        e.setAttribute("type", "text/javascript");
        e.setAttribute("charset", "UTF-8");
        for (var f = 0; f < d.length; f++) e.setAttribute(d[f][0], d[f][1]);
        a.a.head.appendChild(e)
    }

    function M(a) {
        return void 0 === a.b ? !1 : a.a[a.b]
    }

    function oa(a, c) {
        a.addEventListener(a.f, c)
    }
    L.prototype.head = function() {
        return void 0 !== this.a.head ? this.a.head : this.getElementsByTagName("head")[0]
    };
    L.prototype.addEventListener = function(a, c, d) {
        this.a.addEventListener(a, c, d)
    };
    L.prototype.removeEventListener = function(a, c, d) {
        this.a.removeEventListener(a, c, d)
    };

    function B(a) {
        window.console && window.console.error && window.console.error(a)
    }

    function F(a) {
        window.console && window.console.log && window.console.log(a)
    };

    function pa(a, c) {
        var d;
        a && (d = d || Object.keys(a), d.forEach(function(d) {
            void 0 !== a[d] && (c[d] = a[d])
        }))
    }

    function qa(a) {
        var c = {};
        if (!a) return c;
        var d = 0;
        for (a = a.attributes; d < a.length; d++) {
            var e = a[d].nodeName.match(/data-(.*)/);
            e && 2 === e.length && (c[e[1]] = a[d].nodeValue)
        }
        return c
    }

    function ra() {
        var a = window.GLANCE_COBROWSE ? window.GLANCE_COBROWSE : {},
            c = document.getElementById("glance-cobrowse"),
            d = qa(document.getElementById("cobrowsescript")),
            c = qa(c);
        pa(d, a);
        pa(c, a);
        return a
    };

    function N() {}

    function sa(a, c) {
        a.u = "undefined" === typeof WebSocket;
        a.b = {};
        a.b.presenceserver = "presence.glance.net";
        a.b.ws = "www.glance.net";
        a.g = new L(window);
        A(ra(), a.b);
        A(c, a.b);
        a.s = [];
        a.f = O;
        a.v = new la("glance_presence");
        var d;
        d = a.v;
        ma(d) ? (d = localStorage.getItem(d.name), d = JSON.parse(d)) : d = null;
        d && (a.c = d.direct)
    }
    var O = 1;
    N.prototype.C = function() {};

    function Q(a, c, d, e, f) {
        if (c && !a.c) m("ERR_NODIRECTSERVER");
        else {
            var q = (f || "https") + "://" + (c ? a.c : a.b.presenceserver) + "/" + d;
            e && (q += "?", ["groupid", "visitorid"].forEach(function(c) {
                q += c + "=" + a.b[c] + "&"
            }));
            return q
        }
    }
    N.prototype.F = function(a) {
        ta(this, "findvisitor", "GET", a)
    };

    function R(a) {
        m("connecting to " + a.c);
        var c = !1;
        a.u && !window.SockJS ? na(a.g, function() {
            c || (c = !0, window.SockJS ? R(a) : m("ERR_NOSOCKJS"))
        }) : (a.a && a.a.close(), a.a = va(a), a.a.R = a.c, a.a.onopen = function() {
            a.a.l({
                type: "connect",
                authorization: void 0,
                groupid: a.b.groupid,
                visitorid: a.b.visitorid,
                version: aa
            });
            a.s.forEach(function(c) {
                a.a.l(c)
            });
            a.s = [];
            a.f = 3
        }, a.a.D = function(c) {
            m("received:" + u(c));
            if (a.a) {
                var d = c.mtype || c.type,
                    f = c.data;
                switch (d) {
                    case "connected":
                        a.h || (a.h = window.setInterval(function() {
                                a.a.l({
                                    type: "k"
                                })
                            },
                            1E3 * c.keepalive));
                        break;
                    case "invoke":
                        "visitor" === a.U && ea(f);
                        break;
                    default:
                        if (a["on" + d]) a["on" + d](f)
                }
            }
        }, a.a.onclose = function(c) {
            a.a === this && (m("Connection closed, reconnecting", this.J(c), this.K(c)), wa(a), window.setTimeout(function() {
                a.connect()
            }, 2E3))
        }, a.a.onerror = function(c) {
            a.a === this && (a.u = !0, a.a.onclose(c))
        })
    }

    function ta(a, c, d, e) {
        var f = new D("JSON");
        f.c = void 0;
        f.method = d;
        m(c, JSON.stringify(e));
        ga(f, Q(a, !1, c, !0), e.data ? e.data : {}, !0, !0, function(c) {
            c.direct && (a.c = c.direct, a.C());
            a.a && a.c != a.a.R && R(a);
            if (e && e.onsuccess) e.onsuccess(c)
        }, function(d, f) {
            m(c, "failed");
            if (e.onfail) e.onfail(f);
            else xa(a, {
                error: "connfail",
                detail: f
            })
        })
    }

    function S(a) {
        a.a && a.a.close();
        wa(a)
    }

    function wa(a) {
        a.h && (window.clearInterval(a.h), delete a.h);
        a.f = O;
        delete a.a;
        delete a.c
    }

    function T(a, c) {
        m("sending", c.type, a.f);
        3 === a.f ? a.a.l(c) : (a.s.push(c), a.connect())
    }
    N.prototype.connect = function() {
        if (!this.b.visitorid) m("CONN_NOVISITORID");
        else if (this.f === O) {
            this.f = 2;
            var a = this;
            this.onscaledown = function() {
                a.disconnect();
                a.connect()
            };
            this.c ? R(this) : this.F({
                onsuccess: function() {
                    m("found visitor, connect");
                    R(a)
                },
                onfail: function(c) {
                    xa(a, {
                        error: "connfail",
                        detail: c
                    });
                    a.f = O
                }
            })
        }
    };
    N.prototype.connect = N.prototype.connect;
    N.prototype.disconnect = function() {
        S(this)
    };
    N.prototype.disconnect = N.prototype.disconnect;

    function xa(a, c) {
        m("Error: ", JSON.stringify(c));
        if (a.onerror) a.onerror(c)
    }
    N.prototype.I = function(a, c) {
        T(this, {
            type: a,
            data: c
        })
    };
    N.prototype.fire = N.prototype.I;

    function U(a) {
        sa(this, a);
        this.U = "visitor";
        this.g = new L(window);
        var c = this;
        C("focus", function() {
            c.o = !1;
            c.S && c.w()
        });
        oa(this.g, function() {
            m("visibility:", M(c.g) ? "hidden" : "visible");
            if (3 === c.f && !c.o) {
                var a = {
                    type: "visibility"
                };
                a.data = {
                    visibility: M(c.g) ? "hidden" : "visible"
                };
                T(c, a);
                M(c.g) && S(c)
            }
        });
        ja(this.b.presenceserver + "/static");
        U.instance = this
    }
    var ya = U,
        V = ["GLANCE", "Presence", "Visitor"],
        W = this;
    V[0] in W || !W.execScript || W.execScript("var " + V[0]);
    for (var X; V.length && (X = V.shift());) V.length || void 0 === ya ? W[X] ? W = W[X] : W = W[X] = {} : W[X] = ya;
    U.prototype = new N;
    U.prototype.C = function() {
        var a = {};
        a.direct = this.c;
        var c = this.v,
            d = new Date;
        d.setUTCHours(d.getUTCHours() + 8);
        localStorage.setItem(c.name, u(a));
        localStorage.setItem(c.name + "_exp", d.toGMTString());
        a = this.v;
        c = new Date;
        c.setUTCMinutes(c.getUTCMinutes() + 20);
        localStorage.setItem(a.name + "_exp", c.toGMTString())
    };
    U.prototype.w = function(a) {
        if (this.b.visitorid) {
            var c = {};
            A(this.b, c, ["groupid", "visitorid"]);
            var d = {},
                e;
            for (e in this.b) e.indexOf("user-") || (d[e.substring(5)] = this.b[e]);
            d.url = window.location.href;
            d.browser = t.name;
            d.browserver = t.version;
            d.platform = t.m.name;
            (a = a && a.data) && A(a, d);
            c.data = d;
            this.o || (d = {
                type: "presence"
            }, d.data = c.data, T(this, d), this.S = !0)
        } else m("PRES_NOVISITORID")
    };
    U.prototype.presence = U.prototype.w;

    function va(a) {
        a.u ? a = da(Q(a, !0, "visitor")) : (a = Q(a, !0, "visitorws", !1, "wss"), a = new WebSocket(a), v(a));
        return a
    }
    U.prototype.F = function(a) {
        a.data = {};
        ta(this, "presence", "POST", a)
    };
    U.prototype.onblur = function() {
        m("BLURRED");
        this.o = !0;
        S(this)
    };
    var za = !1;

    function Y() {
        if (!za) {
            za = !0;
            var a = ra();
            if (a.presence && (ja((a.ws || "www.glance.net") + "/cobrowse"), "api" !== a.presence)) {
                var c = new U;
                c.onerror = function(a) {
                    "connfail" === a.error && window.setTimeout(function() {
                        c.connect()
                    }, 5E3)
                };
                c.w()
            }
        }
    }
    var Z = new L(window);
    Z.c.addEventListener && (document.readyState.match(/complete/) ? Y() : (Z.c.addEventListener("load", Y), Z.a.addEventListener("DOMContentLoaded", Y, !1)));
}).call(window);