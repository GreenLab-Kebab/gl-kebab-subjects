var ae = accessEnabler = function(t) {
    function e(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var n = window.webpackJsonpae_accessEnabler;
    window.webpackJsonpae_accessEnabler = function(e, r, i) {
        for (var a, s, u = 0, c = []; u < e.length; u++) s = e[u], o[s] && c.push(o[s][0]), o[s] = 0;
        for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
        for (n && n(e, r, i); c.length;) c.shift()()
    };
    var r = {},
        o = {
            1: 0
        };
    return e.e = function(t) {
        function n() {
            s.onerror = s.onload = null, clearTimeout(u);
            var e = o[t];
            0 !== e && (e && e[1](new Error("Loading chunk " + t + " failed.")), o[t] = void 0)
        }
        var r = o[t];
        if (0 === r) return new Promise(function(t) {
            t()
        });
        if (r) return r[2];
        var i = new Promise(function(e, n) {
            r = o[t] = [e, n]
        });
        r[2] = i;
        var a = document.getElementsByTagName("head")[0],
            s = document.createElement("script");
        s.type = "text/javascript", s.charset = "utf-8", s.async = !0, s.timeout = 12e4, e.nc && s.setAttribute("nonce", e.nc), s.src = e.p + "" + t + ".js";
        var u = setTimeout(n, 12e4);
        return s.onerror = s.onload = n, a.appendChild(s), i
    }, e.m = t, e.c = r, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e.oe = function(t) {
        throw console.error(t), t
    }, e.h = "925f2c3d39000521e496", e.cn = "AccessEnabler", e(e.s = 13)
}([function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "LogLevel", function() {
        return r
    });
    var r;
    ! function(t) {
        t[t.TRACE = 0] = "TRACE", t[t.DEBUG = 1] = "DEBUG", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT"
    }(r || (r = {}));
    var o = function() {
        function t() {
            this.level = r.INFO, this.prefix = "", this.logMethods = ["trace", "debug", "info", "warn", "error"], this.bindConsoleLog()
        }
        return t.prototype.debug = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        }, t.prototype.warn = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        }, t.prototype.error = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        }, t.prototype.info = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        }, t.prototype.log = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        }, t.prototype.trace = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        }, t.prototype.setLevel = function(t) {
            this.level = t, this.bindConsoleLog()
        }, t.prototype.setPrefix = function(t) {
            this.prefix = "[" + t + "]", this.bindConsoleLog()
        }, t.prototype.bindConsoleLog = function() {
            if (console)
                for (var t in console)
                    if (console.hasOwnProperty(t)) {
                        var e = "function" == typeof console[t];
                        this.logMethods.indexOf(t) >= this.level ? this[t] = console[e ? t : "log"].bind(window.console, this.prefix + "[" + t.toString() + "]") : this[t] = function() {}
                    }
        }, t
    }();
    e.default = new o
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", function() {
        return r
    }), n.d(e, "a", function() {
        return o
    }), n.d(e, "b", function() {
        return i
    });
    var r = function() {
            function t() {}
            return t.parseXML = function(t) {
                return t && "string" == typeof t ? (new DOMParser).parseFromString(t, "text/xml") : null
            }, t
        }(),
        o = function() {
            function t() {}
            return t.extend = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = 1; n < t.length; n++)
                    for (var r in t[n]) t[n].hasOwnProperty(r) && (t[0][r] = t[n][r]);
                return t[0]
            }, t.isEmpty = function(e) {
                if (!e || t.isUndefined(e) || null === e) return !0;
                if (e.length) return !e.length;
                if (e.size) return !e.size;
                for (var n in e)
                    if (e.hasOwnProperty(n)) return !1;
                return !0
            }, t.isUndefined = function(t) {
                return void 0 === t
            }, t
        }(),
        i = function() {
            function t() {}
            return t.inArray = function(t, e) {
                if (e.indexOf) return e.indexOf(t);
                for (var n in e)
                    if (e[n] === t) return n;
                return -1
            }, t.createHiddenIframe = function(t, e) {
                var n, r = document.getElementsByTagName("iframe");
                if (r.length > 0)
                    for (var o = 0; o < r.length; o++)
                        if (r[o].getAttribute("name") === t) {
                            n = r[o];
                            break
                        }
                n || (n = document.createElement("iframe"), n.setAttribute("name", t), n.setAttribute("id", t), n.setAttribute("style", "display:none"), document.body.appendChild(n)), n.setAttribute("src", e)
            }, t.convertServerDateToISO8601DateFormat = function(t) {
                var e = t.split(" "),
                    n = e[0],
                    r = e[1],
                    o = e[3];
                n = n.split("/").join("-");
                var i = o.length - 2;
                return o = o.substr(0, i) + ":" + o.substr(i), n + "T" + r + o
            }, t.isIE = function() {
                var t = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/),
                    e = !(!navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/MSIE/));
                return t || e
            }, t
        }()
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return u
    });
    var r = n(5),
        o = n(1),
        i = n(0),
        a = n(6),
        s = n(3),
        u = function() {
            function t(e) {
                var n = this;
                if (this.defaultOptions = {
                        url: window.location.href,
                        async: !0,
                        cache: !1,
                        type: "GET",
                        context: this,
                        dataType: "xml",
                        timeout: 3e4,
                        data: t.globalData,
                        headers: t.globalHeaders,
                        cookies: t.globalCookies,
                        traditional: !1,
                        proxyRequest: !(navigator.vendor && navigator.vendor.match(/Apple/)),
                        proxyResponse: !1
                    }, this.mimeTypes = {
                        xml: "application/xml",
                        json: "application/json",
                        text: "*/*"
                    }, this.options = this.processOptions(e), this.urlObj = new s(this.options.url, null, !1), this.options.proxyRequest) {
                    var r = this.options.proxyURL + "#" + encodeURIComponent(document.location.href);
                    this.postMesager = new a.a(r, window.accessEnablerProxy.contentWindow)
                } else this.setCookies(), this.setCache(), this.setData(), this.xhr = this.getXHR(), this.xhr.onreadystatechange = function(r) {
                    var o = r.target;
                    if (e.data && e.data.resource_id && (o.resourceID = e.data.resource_id), 4 === o.readyState) {
                        var a = o.status >= 200 && o.status < 400 ? n.options.success : n.options.error,
                            s = "xml" !== n.options.dataType || n.options.proxyResponse ? o.responseText : o.responseXML;
                        i.default.debug("XHR response received: ", o), a.apply(n.options.context, [s, r.target.status, t.xhrToObject(o)])
                    }
                }, this.options.url = this.options.url = this.urlObj.toString(), this.xhr.open(this.options.type, this.options.url, this.options.async), this.options.async && (this.xhr.timeout = this.options.timeout), this.setHeaders()
            }
            return t.xhrToObject = function(t) {
                if (t.getAllResponseHeaders) {
                    var e = t.getAllResponseHeaders().split("\r\n"),
                        n = {};
                    e.map(function(t) {
                        var e = t.split(": ");
                        2 === e.length && (n[e[0].toLowerCase()] = e[1])
                    });
                    var r = {
                        status: t.status,
                        statusText: t.statusText,
                        responseText: t.responseText,
                        responseHeaders: n
                    };
                    return t.resourceID && (r.resourceID = t.resourceID), i.default.debug("Converted xhr into serializable object", t, r), r
                }
                return i.default.warn("trying to objectify a non xhr!", t), t
            }, t.isCors = function(t) {
                var e = new s(t, null, !1);
                return 0 !== window.location.href.indexOf(e.origin)
            }, t.prototype.send = function() {
                var t = this;
                this.options.proxyRequest ? (i.default.debug("Sending proxy request: ", this.options), this.postMesager.postAjax(this.options).then(function(e) {
                    i.default.debug("Proxy response received: ", e);
                    var n = e.status,
                        r = e.data,
                        a = e.status >= 200 && e.status < 400 ? t.options.success : t.options.error;
                    r = "xml" === t.options.dataType ? o.c.parseXML(r) : r, a.apply(t.options.context, [r, n, e.xhr])
                })) : (i.default.debug("Sending request: ", this.options), this.xhr.send(this.options.data))
            }, t.prototype.processOptions = function(e) {
                var n = o.a.extend(Object.create(t.globalOptions), this.defaultOptions, e);
                return e.data && (n.data = o.a.extend({}, this.defaultOptions.data, e.data)), e.headers && (n.headers = o.a.extend({}, this.defaultOptions.headers, e.headers)), n
            }, t.prototype.setData = function() {
                if (!o.a.isEmpty(this.options.data)) {
                    var t = r.a.param(this.options.data, this.options.traditional);
                    "POST" === this.options.type ? "json" === this.options.dataType ? this.options.data = JSON.stringify(this.options.data) : this.options.data = t : (this.urlObj.query && this.urlObj.query.length > 1 ? this.urlObj.query += "&" + t : this.urlObj.query = t, this.options.data = null)
                }
            }, t.prototype.setCookies = function() {
                var t = "https:" === this.urlObj.protocol ? ";secure" : "";
                for (var e in this.options.cookies) o.a.isEmpty(e) ? document.cookie = e + "=;path=/" + t + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;" : document.cookie = e + "=" + this.options.cookies[e] + ";path=/" + t
            }, t.prototype.setCache = function() {
                if (!this.options.cache) {
                    i.default.debug("busting cache!");
                    var t = "_=" + (new Date).getTime();
                    this.urlObj.query && this.urlObj.query.length > 1 ? this.urlObj.query += "&" + t : this.urlObj.query = t
                }
            }, t.prototype.setHeaders = function() {
                if ("POST" === this.options.type && ("json" === this.options.dataType ? this.xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8") : this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")), this.options.headers)
                    for (var t in this.options.headers) this.options.headers.hasOwnProperty(t) && this.xhr.setRequestHeader(t, this.options.headers[t]);
                this.options.dataType && this.mimeTypes[this.options.dataType] && this.xhr.setRequestHeader("Accept", this.mimeTypes[this.options.dataType])
            }, t.prototype.getXHR = function() {
                var e = new XMLHttpRequest;
                return t.isCors(this.urlObj.origin) && (i.default.debug("Enabling CORS"), e.withCredentials = !0), e
            }, t.globalOptions = {
                proxyURL: "AccessEnablerProxy.html"
            }, t.globalHeaders = {}, t.globalCookies = {
                client_type: "html5",
                client_version: "3.4.2"
            }, t.globalData = {}, t
        }()
}, function(t, e, n) {
    "use strict";
    (function(e) {
        function r(t) {
            t = t || e.location || {};
            var n, r = {},
                o = typeof t;
            if ("blob:" === t.protocol) r = new a(unescape(t.pathname), {});
            else if ("string" === o) {
                r = new a(t, {});
                for (n in p) delete r[n]
            } else if ("object" === o) {
                for (n in t) n in p || (r[n] = t[n]);
                void 0 === r.slashes && (r.slashes = d.test(t.href))
            }
            return r
        }

        function o(t) {
            var e = h.exec(t);
            return {
                protocol: e[1] ? e[1].toLowerCase() : "",
                slashes: !!e[2],
                rest: e[3]
            }
        }

        function i(t, e) {
            for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), r = n.length, o = n[r - 1], i = !1, a = 0; r--;) "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), a++) : a && (0 === r && (i = !0), n.splice(r, 1), a--);
            return i && n.unshift(""), "." !== o && ".." !== o || n.push(""), n.join("/")
        }

        function a(t, e, n) {
            if (!(this instanceof a)) return new a(t, e, n);
            var s, u, h, d, p, f, I = g.slice(),
                v = typeof e,
                T = this,
                E = 0;
            for ("object" !== v && "string" !== v && (n = e, e = null), n && "function" != typeof n && (n = l.parse), e = r(e), u = o(t || ""), s = !u.protocol && !u.slashes, T.slashes = u.slashes || s && e.slashes, T.protocol = u.protocol || e.protocol || "", t = u.rest, u.slashes || (I[2] = [/(.*)/, "pathname"]); E < I.length; E++) d = I[E], h = d[0], f = d[1], h !== h ? T[f] = t : "string" == typeof h ? ~(p = t.indexOf(h)) && ("number" == typeof d[2] ? (T[f] = t.slice(0, p), t = t.slice(p + d[2])) : (T[f] = t.slice(p), t = t.slice(0, p))) : (p = h.exec(t)) && (T[f] = p[1], t = t.slice(0, p.index)), T[f] = T[f] || (s && d[3] ? e[f] || "" : ""), d[4] && (T[f] = T[f].toLowerCase());
            n && (T.query = n(T.query)), s && e.slashes && "/" !== T.pathname.charAt(0) && ("" !== T.pathname || "" !== e.pathname) && (T.pathname = i(T.pathname, e.pathname)), c(T.port, T.protocol) || (T.host = T.hostname, T.port = ""), T.username = T.password = "", T.auth && (d = T.auth.split(":"), T.username = d[0] || "", T.password = d[1] || ""), T.origin = T.protocol && T.host && "file:" !== T.protocol ? T.protocol + "//" + T.host : "null", T.href = T.toString()
        }

        function s(t, e, n) {
            var r = this;
            switch (t) {
                case "query":
                    "string" == typeof e && e.length && (e = (n || l.parse)(e)), r[t] = e;
                    break;
                case "port":
                    r[t] = e, c(e, r.protocol) ? e && (r.host = r.hostname + ":" + e) : (r.host = r.hostname, r[t] = "");
                    break;
                case "hostname":
                    r[t] = e, r.port && (e += ":" + r.port), r.host = e;
                    break;
                case "host":
                    r[t] = e, /:\d+$/.test(e) ? (e = e.split(":"), r.port = e.pop(), r.hostname = e.join(":")) : (r.hostname = e, r.port = "");
                    break;
                case "protocol":
                    r.protocol = e.toLowerCase(), r.slashes = !n;
                    break;
                case "pathname":
                case "hash":
                    if (e) {
                        var o = "pathname" === t ? "/" : "#";
                        r[t] = e.charAt(0) !== o ? o + e : e
                    } else r[t] = e;
                    break;
                default:
                    r[t] = e
            }
            for (var i = 0; i < g.length; i++) {
                var a = g[i];
                a[4] && (r[a[1]] = r[a[1]].toLowerCase())
            }
            return r.origin = r.protocol && r.host && "file:" !== r.protocol ? r.protocol + "//" + r.host : "null", r.href = r.toString(), r
        }

        function u(t) {
            t && "function" == typeof t || (t = l.stringify);
            var e, n = this,
                r = n.protocol;
            r && ":" !== r.charAt(r.length - 1) && (r += ":");
            var o = r + (n.slashes ? "//" : "");
            return n.username && (o += n.username, n.password && (o += ":" + n.password), o += "@"), o += n.host + n.pathname, e = "object" == typeof n.query ? t(n.query) : n.query, e && (o += "?" !== e.charAt(0) ? "?" + e : e), n.hash && (o += n.hash), o
        }
        var c = n(8),
            l = n(9),
            h = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
            d = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            g = [
                ["#", "hash"],
                ["?", "query"],
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            p = {
                hash: 1,
                query: 1
            };
        a.prototype = {
            set: s,
            toString: u
        }, a.extractProtocol = o, a.location = r, a.qs = l, t.exports = a
    }).call(e, n(4))
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var r = function() {
            function t() {
                this.r20 = /%20/g, this.class2type = {}, this.rbracket = /\[\]$/, this.toString = this.class2type.toString
            }
            return t.prototype.type = function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? this.class2type[this.toString.call(t)] || "object" : typeof t
            }, t.prototype.isFunction = function(t) {
                return "function" === this.type(t)
            }, t.prototype.buildParams = function(t, e, n) {
                var r, o, i;
                if (Array.isArray(e))
                    for (o in e) e.hasOwnProperty(o) && (i = e[o], this.rbracket.test(t) ? n(t, i) : this.buildParams(t + "[" + ("object" == typeof i ? o : "") + "]", i, n));
                else if ("object" === this.type(e))
                    for (r in e) e.hasOwnProperty(r) && this.buildParams(t + "[" + r + "]", e[r], n);
                else n(t, e)
            }, t
        }(),
        o = new r,
        i = function() {
            function t() {}
            return t.param = function(t, e) {
                void 0 === e && (e = !1);
                var n, r, i, a = [],
                    s = function(t, e) {
                        e = o.isFunction(e) ? e() : null == e ? "" : e, a[a.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    };
                if (Array.isArray(t))
                    for (r in t) t.hasOwnProperty(r) && (i = t[r], s(r, i));
                else
                    for (n in t) t.hasOwnProperty(n) && o.buildParams(n, t[n], s);
                var u = a.join("&").replace(o.r20, "+");
                return e && (u = u.replace(/%5B%5D/g, "")), u
            }, t
        }()
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return s
    });
    var r = n(0),
        o = n(2),
        i = n(1),
        a = n(7),
        s = function() {
            function t(t, e) {
                void 0 === t && (t = null), void 0 === e && (e = parent), this.handlers = {}, this.url = t, this.target = e, this.handlers = {}, this.cookieService = a.a.getInstance()
            }
            return t.prototype.postMessage = function(t) {
                this.target.postMessage(t, this.url.replace(/([^:]+:\/\/[^\/]+).*/, "$1"))
            }, t.prototype.postAjax = function(t) {
                var e = this;
                return new Promise(function(n) {
                    try {
                        var o = i.a.extend({}, t);
                        o.proxyRequest = !1, o.proxyResponse = !0, delete o.context, delete o.success, delete o.error;
                        var a = "c.a.p.pm.xhr." + e.getOpId();
                        e.addEventListener(a, function(t) {
                            t.data.id === a && (r.default.debug("Proxy response event message received: ", t), e.removeEventListener(t.data.id), n(t.data))
                        });
                        var s = {
                            id: a,
                            payload: o
                        };
                        r.default.debug("Sending proxy request event message: ", s), e.postMessage(s)
                    } catch (t) {
                        r.default.error(t), n({
                            error: t.toString()
                        })
                    }
                })
            }, t.prototype.postStorage = function(t) {
                for (var e = this, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                return new Promise(function(o) {
                    try {
                        var i = "c.a.p.pm.s." + e.getOpId();
                        e.addEventListener(i, function(t) {
                            t.data.id === i && (e.removeEventListener(t.data.id), o(t.data.result))
                        });
                        var a = {
                            id: i,
                            operation: t,
                            params: n
                        };
                        e.postMessage(a)
                    } catch (t) {
                        r.default.error(t), o()
                    }
                })
            }, t.prototype.handleAjax = function() {
                var t = this;
                this.addEventListener("ajax", function(e) {
                    if (e && e.data && e.data.id && 0 === e.data.id.indexOf("c.a.p.pm.xhr.")) {
                        var n = e.data.payload;
                        n.success = n.error = function(n, o, i) {
                            var a = {
                                id: e.data.id,
                                status: o,
                                data: n,
                                xhr: i
                            };
                            r.default.debug("Sending proxy response event message: ", a), t.postMessage(a)
                        };
                        try {
                            r.default.debug("Handling proxy request event message: ", e), new o.a(n).send()
                        } catch (t) {
                            r.default.error(t)
                        }
                    }
                })
            }, t.prototype.handleStorage = function() {
                var t = this;
                this.addEventListener("storage", function(e) {
                    if (e && e.data && e.data.id && 0 === e.data.id.indexOf("c.a.p.pm.s.") && e.data.operation && e.data.params) {
                        var n = {
                                id: e.data.id
                            },
                            o = e.data.params;
                        switch (e.data.operation) {
                            case "getItems":
                                if (n.result = {}, t.isLocalStorageSpaceEnabled())
                                    for (var i = 0, a = o; i < a.length; i++) {
                                        var s = a[i],
                                            u = localStorage.getItem(s);
                                        null !== u && (n.result[s] = u)
                                    } else n.result.error = !0, r.default.debug("Web localStorage is not available for 3rd parties for read operations");
                                break;
                            case "setItem":
                                t.isLocalStorageSpaceEnabled() ? 2 === o.length ? localStorage.setItem(o[0], o[1]) : r.default.error("Did not receive valid data to write!", o) : r.default.debug("Web localStorage is not available for 3rd parties for write operations");
                                break;
                            case "isSessionCookieSet":
                                n.result = {
                                    isSessionCookieSet: t.cookieService.isSessionCookieSet()
                                };
                                break;
                            case "setSessionCookie":
                                t.cookieService.setSessionCookie();
                                break;
                            default:
                                r.default.error("Unsupported storage operation: ", e.data.operation)
                        }
                        t.postMessage(n)
                    }
                })
            }, t.prototype.addEventListener = function(t, e) {
                this.handlers[t] = e, window.addEventListener("message", e, !1)
            }, t.prototype.removeEventListener = function(t) {
                window.removeEventListener("message", this.handlers[t], !1), delete this.handlers[t]
            }, t.prototype.getOpId = function() {
                return t.opSeq > 1e3 && (t.opSeq = 0), +new Date + "." + t.opSeq++
            }, t.prototype.isLocalStorageSpaceEnabled = function() {
                try {
                    return localStorage.setItem("canWrite", "test"), localStorage.removeItem("canWrite"), !0
                } catch (t) {
                    return !1
                }
            }, t.opSeq = 0, t
        }()
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = function() {
        function t() {
            this.SESSION_COOKIE_NAME = "ap_93"
        }
        return t.getInstance = function() {
            return this.instance || (this.instance = new t), this.instance
        }, t.prototype.setSessionCookie = function() {
            document.cookie = this.SESSION_COOKIE_NAME + "=" + (new Date).getTime() + ";path=/"
        }, t.prototype.isSessionCookieSet = function() {
            return -1 !== document.cookie.indexOf(this.SESSION_COOKIE_NAME)
        }, t
    }()
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        if (e = e.split(":")[0], !(t = +t)) return !1;
        switch (e) {
            case "http":
            case "ws":
                return 80 !== t;
            case "https":
            case "wss":
                return 443 !== t;
            case "ftp":
                return 21 !== t;
            case "gopher":
                return 70 !== t;
            case "file":
                return !1
        }
        return 0 !== t
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return decodeURIComponent(t.replace(/\+/g, " "))
    }

    function o(t) {
        for (var e, n = /([^=?&]+)=?([^&]*)/g, o = {}; e = n.exec(t); o[r(e[1])] = r(e[2]));
        return o
    }

    function i(t, e) {
        e = e || "";
        var n = [];
        "string" != typeof e && (e = "?");
        for (var r in t) a.call(t, r) && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
        return n.length ? e + n.join("&") : ""
    }
    var a = Object.prototype.hasOwnProperty;
    e.stringify = i, e.parse = o
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n) {
        if (t.forEach) return void t.forEach(e, n);
        for (var r = 0; r < t.length; r += 1) e.call(n, t[r], r, t)
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "ScriptLocation", function() {
        return r
    });
    var r = function() {
        function t() {}
        return t.get = function() {
            var t = this.findScript(document.getElementsByTagName("script"));
            return !t && window.$ && (t = this.findScript($("script"))), t || (t = this.findUsingStacktraces()), t && t.length > 0 ? t : this.DEFAULT_SCRIPT_URL
        }, t.findScript = function(t) {
            for (var e, n = new RegExp("(.*)AccessEnabler.js(.*)"), r = 0, o = t; r < o.length; r++) {
                var i = o[r];
                if (i.src && i.src.match(n)) {
                    e = i.src;
                    break
                }
            }
            return e
        }, t.findUsingStacktraces = function() {
            var t, e = function(e, n) {
                t = n
            };
            try {
                throw new Error
            } catch (n) {
                return "AccessEnabler.js" in n ? t = n["AccessEnabler.js"] : "stacktrace" in n ? n.stacktrace.replace(/called from line \d+, column \d+ in (.*):/gm, e) : "stack" in n && n.stack.replace(/at.*?\(?(\S+):\d+:\d+\)?$/g, e), t
            }
        }, t.DEFAULT_SCRIPT_URL = "https://entitlement.auth.adobe.com/entitlement/AccessEnabler.js", t
    }()
}, function(t, e, n) {
    var r;
    ! function(o) {
        "use strict";

        function i(t, e) {
            var n = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
        }

        function a(t, e) {
            return t << e | t >>> 32 - e
        }

        function s(t, e, n, r, o, s) {
            return i(a(i(i(e, t), i(r, s)), o), n)
        }

        function u(t, e, n, r, o, i, a) {
            return s(e & n | ~e & r, t, e, o, i, a)
        }

        function c(t, e, n, r, o, i, a) {
            return s(e & r | n & ~r, t, e, o, i, a)
        }

        function l(t, e, n, r, o, i, a) {
            return s(e ^ n ^ r, t, e, o, i, a)
        }

        function h(t, e, n, r, o, i, a) {
            return s(n ^ (e | ~r), t, e, o, i, a)
        }

        function d(t, e) {
            t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
            var n, r, o, a, s, d = 1732584193,
                g = -271733879,
                p = -1732584194,
                f = 271733878;
            for (n = 0; n < t.length; n += 16) r = d, o = g, a = p, s = f, d = u(d, g, p, f, t[n], 7, -680876936), f = u(f, d, g, p, t[n + 1], 12, -389564586), p = u(p, f, d, g, t[n + 2], 17, 606105819), g = u(g, p, f, d, t[n + 3], 22, -1044525330), d = u(d, g, p, f, t[n + 4], 7, -176418897), f = u(f, d, g, p, t[n + 5], 12, 1200080426), p = u(p, f, d, g, t[n + 6], 17, -1473231341), g = u(g, p, f, d, t[n + 7], 22, -45705983), d = u(d, g, p, f, t[n + 8], 7, 1770035416), f = u(f, d, g, p, t[n + 9], 12, -1958414417), p = u(p, f, d, g, t[n + 10], 17, -42063), g = u(g, p, f, d, t[n + 11], 22, -1990404162), d = u(d, g, p, f, t[n + 12], 7, 1804603682), f = u(f, d, g, p, t[n + 13], 12, -40341101), p = u(p, f, d, g, t[n + 14], 17, -1502002290), g = u(g, p, f, d, t[n + 15], 22, 1236535329), d = c(d, g, p, f, t[n + 1], 5, -165796510), f = c(f, d, g, p, t[n + 6], 9, -1069501632), p = c(p, f, d, g, t[n + 11], 14, 643717713), g = c(g, p, f, d, t[n], 20, -373897302), d = c(d, g, p, f, t[n + 5], 5, -701558691), f = c(f, d, g, p, t[n + 10], 9, 38016083), p = c(p, f, d, g, t[n + 15], 14, -660478335), g = c(g, p, f, d, t[n + 4], 20, -405537848), d = c(d, g, p, f, t[n + 9], 5, 568446438), f = c(f, d, g, p, t[n + 14], 9, -1019803690), p = c(p, f, d, g, t[n + 3], 14, -187363961), g = c(g, p, f, d, t[n + 8], 20, 1163531501), d = c(d, g, p, f, t[n + 13], 5, -1444681467), f = c(f, d, g, p, t[n + 2], 9, -51403784), p = c(p, f, d, g, t[n + 7], 14, 1735328473), g = c(g, p, f, d, t[n + 12], 20, -1926607734), d = l(d, g, p, f, t[n + 5], 4, -378558), f = l(f, d, g, p, t[n + 8], 11, -2022574463), p = l(p, f, d, g, t[n + 11], 16, 1839030562), g = l(g, p, f, d, t[n + 14], 23, -35309556), d = l(d, g, p, f, t[n + 1], 4, -1530992060), f = l(f, d, g, p, t[n + 4], 11, 1272893353), p = l(p, f, d, g, t[n + 7], 16, -155497632), g = l(g, p, f, d, t[n + 10], 23, -1094730640), d = l(d, g, p, f, t[n + 13], 4, 681279174), f = l(f, d, g, p, t[n], 11, -358537222), p = l(p, f, d, g, t[n + 3], 16, -722521979), g = l(g, p, f, d, t[n + 6], 23, 76029189), d = l(d, g, p, f, t[n + 9], 4, -640364487), f = l(f, d, g, p, t[n + 12], 11, -421815835), p = l(p, f, d, g, t[n + 15], 16, 530742520), g = l(g, p, f, d, t[n + 2], 23, -995338651), d = h(d, g, p, f, t[n], 6, -198630844), f = h(f, d, g, p, t[n + 7], 10, 1126891415), p = h(p, f, d, g, t[n + 14], 15, -1416354905), g = h(g, p, f, d, t[n + 5], 21, -57434055), d = h(d, g, p, f, t[n + 12], 6, 1700485571), f = h(f, d, g, p, t[n + 3], 10, -1894986606), p = h(p, f, d, g, t[n + 10], 15, -1051523), g = h(g, p, f, d, t[n + 1], 21, -2054922799), d = h(d, g, p, f, t[n + 8], 6, 1873313359), f = h(f, d, g, p, t[n + 15], 10, -30611744), p = h(p, f, d, g, t[n + 6], 15, -1560198380), g = h(g, p, f, d, t[n + 13], 21, 1309151649), d = h(d, g, p, f, t[n + 4], 6, -145523070), f = h(f, d, g, p, t[n + 11], 10, -1120210379), p = h(p, f, d, g, t[n + 2], 15, 718787259), g = h(g, p, f, d, t[n + 9], 21, -343485551), d = i(d, r), g = i(g, o), p = i(p, a), f = i(f, s);
            return [d, g, p, f]
        }

        function g(t) {
            var e, n = "",
                r = 32 * t.length;
            for (e = 0; e < r; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
            return n
        }

        function p(t) {
            var e, n = [];
            for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
            var r = 8 * t.length;
            for (e = 0; e < r; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
            return n
        }

        function f(t) {
            return g(d(p(t), 8 * t.length))
        }

        function I(t, e) {
            var n, r, o = p(t),
                i = [],
                a = [];
            for (i[15] = a[15] = void 0, o.length > 16 && (o = d(o, 8 * t.length)), n = 0; n < 16; n += 1) i[n] = 909522486 ^ o[n], a[n] = 1549556828 ^ o[n];
            return r = d(i.concat(p(e)), 512 + 8 * e.length), g(d(a.concat(r), 640))
        }

        function v(t) {
            var e, n, r = "0123456789abcdef",
                o = "";
            for (n = 0; n < t.length; n += 1) e = t.charCodeAt(n), o += r.charAt(e >>> 4 & 15) + r.charAt(15 & e);
            return o
        }

        function T(t) {
            return unescape(encodeURIComponent(t))
        }

        function E(t) {
            return f(T(t))
        }

        function m(t) {
            return v(E(t))
        }

        function A(t, e) {
            return I(T(t), T(e))
        }

        function y(t, e) {
            return v(A(t, e))
        }

        function R(t, e, n) {
            return e ? n ? A(e, t) : y(e, t) : n ? E(t) : m(t)
        }
        void 0 !== (r = function() {
            return R
        }.call(e, n, e, t)) && (t.exports = r)
    }()
}, function(t, e, n) {
    function r(e, r) {
        void 0 === r && (r = !0);
        var o = n(14).AccessEnablerHelper.getInstance(e),
            i = {
                version: "3.4.2-3ff3b09"
            };
        for (var a in o._api_methods) ! function(t) {
            o._api_methods.hasOwnProperty(t) && (i[t] = function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                o[t].apply(o, e)
            })
        }(a);
        t.exports = i, r || (window.ae = i, window.accessEnabler = i)
    }
    var o = "undefined" != typeof Promise && -1 !== Promise.toString().indexOf("[native code]"),
        i = n(0).default;
    if (i.setPrefix("AccessEnabler.js"), window.ae || window.accessEnabler) i.error("The AccessEnabler library was already loaded.");
    else {
        var a = n(11).ScriptLocation,
            s = n(3)(a.get(), null, !0);
        if (n.p = s.protocol + "//" + s.host + s.pathname.replace("AccessEnabler.js", ""), o) r(s);
        else {
            i.warn("You have an old / non standards compliant browser, loading polyfills...");
            var u = document.createElement("script");
            u.src = n.p + "/polyfill.js", u.onload = function() {
                return r(s, !1)
            }, u.onerror = function() {
                i.error("Failed to load polyfills"), r(s, !1)
            }, document.head.appendChild(u)
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.data && t.updated
    }

    function o(t, e) {
        try {
            t = JSON.parse(t), F.CACHE = t;
            var n = t && t.data && t.data[e] ? t.data[e] : null,
                r = t && t.encrypted && u.b.inArray(e, t.encrypted) > -1;
            W.getInstance().callCallback("setMetadataStatus", e, null != n ? r : null, n)
        } catch (t) {
            s.default.error(t), W.getInstance().callCallback("setMetadataStatus", e, null, null)
        }
    }

    function i(t) {
        W.getInstance().callCallback("setMetadataStatus", t, null, null)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t() {}
            return t.SERVER_API_TOO_OLD = "API version too old. Please update your application.", t.USER_AUTHENTICATED = "User Authenticated", t.USER_NOT_AUTHENTICATED_ERROR = "User Not Authenticated Error", t.GENERIC_AUTHENTICATION_ERROR = "Generic Authentication Error", t.USER_NOT_AUTHORIZED_ERROR = "User not Authorized Error", t.GENERIC_AUTHORIZATION_ERROR = "Generic Authorization Error", t.USER_NOT_AUTHORIZED_NETWORK_ERROR = 'A network error occured when communicating with the provider"s authorization service', t.PROVIDER_NOT_SELECTED_ERROR = "Provider not Selected Error", t.PROVIDER_ALREADY_AUTHENTICATED = "You are already authenticated with this Provider", t.PROVIDER_NOT_AVAILABLE_ERROR = "Provider not Available Error", t.TRACK_AUTHORIZATION_DETECTION = "authorizationDetection", t.TRACK_AUTHENTICATION_DETECTION = "authenticationDetection", t.TRACK_MVPD_SELECTION = "mvpdSelection", t.BACKGROUND_LOGIN_IE_COOKIE = "apass-ie-background-login-cookie", t.MISSING_INDIVIDUALIZATION_KEY_ERROR = "Missing Individualization Key Error", t.INVALID_INDIVIDUALIZATION_DATA_ERROR = "Invalid Individualization Data Error", t
        }(),
        s = n(0),
        u = n(1),
        c = "error",
        l = function() {
            function t() {}
            return t.Z500 = function(t) {
                return {
                    errorId: "Z500",
                    level: c,
                    resource: t
                }
            }, t.Z010 = function(t) {
                return {
                    errorId: "Z010",
                    level: "warning",
                    resource: t
                }
            }, t.Z011 = function(t) {
                return {
                    errorId: "Z011",
                    level: "info",
                    resource: t
                }
            }, t.Z100 = function(t, e) {
                return {
                    errorId: "Z100",
                    level: c,
                    message: t,
                    resource: e
                }
            }, t.Z110 = function(t, e) {
                return {
                    errorId: "Z110",
                    level: c,
                    message: t,
                    resource: e
                }
            }, t.Z120 = function(t) {
                return {
                    errorId: "Z120",
                    level: c,
                    message: "network error",
                    resource: t
                }
            }, t.Z130 = function(t, e) {
                return {
                    errorId: "Z130",
                    level: c,
                    message: "" === t ? "invalid resource" : t,
                    resource: e
                }
            }, t.Z169 = function(t, e) {
                return {
                    errorId: "Z169",
                    level: c,
                    message: t,
                    resource: e
                }
            }, t.IS2XX = function(t, e) {
                return {
                    errorId: t,
                    level: c,
                    message: e
                }
            }, t.buildError = function(t, e, n, r, o) {
                return void 0 === e && (e = c), void 0 === n && (n = null), void 0 === r && (r = null), void 0 === o && (o = {}), o.level = e, n && (o.message = n), r && (o.subErrorId = r), u.a.extend({
                    errorId: t
                }, o)
            }, t.fromAuthzErrorResponse = function(e, n) {
                var r;
                if ("code" in e && "message" in e) s.default.warn("Received a non xhr object!"), r = e;
                else {
                    if (!e.responseText) return t.Z120(n);
                    var o = e.responseText.split("details")[1];
                    o && o.length > 2 && (o = o.substring(1, o.length - 2));
                    var i = e.responseHeaders["authzf-error-code"],
                        u = e.responseHeaders["authzf-sub-error-code"];
                    r = u && "1010" === u ? {
                        code: a.USER_NOT_AUTHORIZED_ERROR,
                        subErrorCode: u,
                        message: o
                    } : {
                        code: a.USER_NOT_AUTHORIZED_ERROR,
                        shortErrorCode: i,
                        message: o
                    }
                }
                if ("authzNone" === r.shortErrorCode) return t.Z169(r.message, n);
                if ("invalid" === r.shortErrorCode) return t.Z130(r.message, n);
                if ("1010" === r.subErrorCode) return t.Z110(r.message, n);
                switch (r.code) {
                    case a.USER_NOT_AUTHORIZED_ERROR:
                        switch (r.message) {
                            case a.USER_NOT_AUTHORIZED_NETWORK_ERROR:
                                return t.Z120(n);
                            default:
                                return t.Z100(r.message, n)
                        }
                    case a.USER_NOT_AUTHENTICATED_ERROR:
                        return t.N000;
                    default:
                        return t.Z500(n)
                }
            }, t.getReasonFromErrorResponse = function(t) {
                var e = null,
                    n = t.indexOf("<reason>");
                if (n >= 0) {
                    var r = t.indexOf("</reason>");
                    r >= 0 && (e = t.substring(n + "<reason>".length, r))
                }
                return e
            }, t.PREFIX_IS = "IS", t.PREFIX_CFG = "CFG", t.SEC420 = {
                errorId: "SEC420",
                level: c
            }, t.SEC412 = {
                errorId: "SEC412",
                level: "warning"
            }, t.CFG100 = {
                errorId: "CFG100",
                level: "warning",
                message: "incorrect time"
            }, t.N000 = {
                errorId: "N000",
                level: "info",
                message: "user not authenticated"
            }, t.N010 = {
                errorId: "N010",
                level: "warning"
            }, t.N011 = {
                errorId: "N011",
                level: "info",
                message: "authenticated with temp pass"
            }, t.N111 = {
                errorId: "N111",
                level: "warning"
            }, t.N005 = {
                errorId: "N005",
                level: "info",
                message: "authentication cancelled"
            }, t.N500 = {
                errorId: "N500",
                level: c
            }, t.N130 = {
                errorId: "N130",
                level: c
            }, t.LS011 = {
                errorId: "LS011",
                level: "warning",
                message: "using volatile storage"
            }, t.N001 = {
                errorId: "N001",
                level: "info",
                message: "passive authentication"
            }, t.P100 = {
                errorId: "P100",
                level: c
            }, t
        }(),
        h = n(5),
        d = function() {
            function t() {}
            return t.getNodeText = function(t, e) {
                return this._getNode(t, e, "textContent")
            }, t.getNode = function(t, e) {
                return this._getNode(t, e)
            }, t.getNodes = function(t, e) {
                return this._getNode(t, e, void 0, !0)
            }, t.appendChild = function(t) {
                "interactive" === document.readyState || "complete" === document.readyState ? document.body.appendChild(t) : (this.createDOMContentLoadedListener(), this.elementsToBeAppended.push(t))
            }, t.createDOMContentLoadedListener = function() {
                var t = this;
                if (!this.DOMContentLoadedListenerCreated) {
                    this.DOMContentLoadedListenerCreated = !0;
                    var e = function() {
                        for (; t.elementsToBeAppended.length > 0;) document.body.appendChild(t.elementsToBeAppended.pop());
                        document.removeEventListener ? document.removeEventListener("DOMContentLoaded", e, !1) : document.detachEvent("onDOMContentLoaded", e)
                    };
                    document.addEventListener ? document.addEventListener("DOMContentLoaded", e, !1) : document.attachEvent("onDOMContentLoaded", e)
                }
            }, t._getNode = function(t, e, n, r) {
                if (void 0 === n && (n = null), void 0 === r && (r = !1), e) {
                    var o = e.getElementsByTagName(t);
                    if (o.length > 0) return r ? o : n ? o[0][n] : o[0]
                }
                return ""
            }, t.elementsToBeAppended = [], t.DOMContentLoadedListenerCreated = !1, t
        }(),
        g = n(2),
        p = function() {
            function t(t) {
                this.xmlElement = t
            }
            return t.prototype.getAuthorizedResourceID = function() {
                return s.default.debug("Entered - AuthorizedResource::getAuthorizedResourceID()"), this.xmlElement ? this.xmlElement.getAttribute("simpleResourceID") : null
            }, t
        }(),
        f = function() {
            function t(t) {
                this.source = t, this.xmlData = u.c.parseXML(t.split("<signatureInfo>")[2])
            }
            return t.prototype.getSource = function() {
                return this.source
            }, t.prototype.getExpiryDate = function() {
                var t = this.getProperty("simpleTokenExpires");
                if (t) t = new Date(u.b.convertServerDateToISO8601DateFormat(t));
                else {
                    var e = void 0,
                        n = this.getProperty("issueTime");
                    if (n) {
                        e = this.getProperty("ttl");
                        var r = new Date(u.b.convertServerDateToISO8601DateFormat(n)).getTime();
                        t = new Date(r + e)
                    } else {
                        if (!(e = this.getProperty("simpleTokenTTL"))) throw {
                            message: "Invalid token format."
                        };
                        t = new Date(u.b.convertServerDateToISO8601DateFormat(e))
                    }
                }
                return t
            }, t.prototype.isExpired = function() {
                try {
                    var t = this.getExpiryDate().getTime();
                    return (new Date).getTime() > t
                } catch (t) {
                    return s.default.error(t.message), !1
                }
            }, t.prototype.isValid = function() {
                try {
                    var t = !this.isExpired();
                    return t && this.isAuthZAll() && (t = W.requestorID === this.getRequestorID()), t
                } catch (t) {
                    return s.default.error(t.message), !1
                }
            }, t.prototype.isAuthNAll = function() {
                var t = this.getProperty("simpleTokenAuthenticationGuid");
                return "d35b501e0385360feccc755c59f5767b46c54c7d" === t || 0 === t.indexOf("95cf93bcd183214a")
            }, t.prototype.isAuthZAll = function() {
                return "true" === this.getProperty("zAll")
            }, t.prototype.getProperty = function(t) {
                return d.getNodeText(t, this.xmlData)
            }, t.prototype.getRequestorID = function() {
                return this.getProperty("simpleTokenRequestorID")
            }, t.prototype.getResourceID = function() {
                return this.getProperty("simpleTokenResourceID") || this.getProperty("resourceID")
            }, t.prototype.getMVPDID = function() {
                return this.getProperty("simpleTokenMsoID")
            }, t.prototype.getSubMVPDID = function() {
                return this.getProperty("simpleTokenSubMvpdID")
            }, t.prototype.getAuthorizedResources = function() {
                s.default.trace("Entered - Token::getAuthorizedResources()");
                var t = new Array(0);
                if (this.xmlData) {
                    var e = this.xmlData.getElementsByTagName("simpleAuthorizedResource");
                    t = new Array(e.length);
                    for (var n = 0; n < t.length; n++) {
                        var r = new p(e[n]);
                        t[n] = r
                    }
                }
                return t
            }, t
        }(),
        I = function() {
            function t() {
                this.memoryStorageContent = {}
            }
            return t.prototype.setItem = function(t, e) {
                this.memoryStorageContent[t] = e
            }, t.prototype.getItem = function(t) {
                return this.memoryStorageContent[t]
            }, t.prototype.removeItem = function(t) {
                delete this.memoryStorageContent[t]
            }, t
        }(),
        v = function() {
            function t() {}
            return t.AUTHN_TOKEN = "authenticationToken", t.AUTHZ_TOKEN = "authorizationToken", t.USER_METADATA = "userMeta", t.MVPD = "mvpd", t.CAN_AUTHN = "canAuthenticate", t.PREAUTHORIZATION_CACHE = "preauthorizationCache", t
        }(),
        T = function() {
            function t() {
                this.authenticationToken = [], this.authorizationToken = [], this.userMeta = {}, this.mvpd = null, this.canAuthenticate = !1, this.preauthorizationCache = []
            }
            return t.prototype.setAuthenticationTokens = function(t) {
                this.authenticationToken = t
            }, t.prototype.getAuthenticationTokens = function() {
                return this.authenticationToken
            }, t.prototype.setAuthorizationTokens = function(t) {
                this.authorizationToken = t
            }, t.prototype.getAuthorizationTokens = function() {
                return this.authorizationToken
            }, t.prototype.setUserMetadata = function(t) {
                this.userMeta = t
            }, t.prototype.getUserMetadata = function() {
                return this.userMeta
            }, t.prototype.setMvpdID = function(t) {
                this.mvpd = t
            }, t.prototype.getMvpdID = function() {
                return this.mvpd
            }, t.prototype.setCanAuthenticate = function(t) {
                this.canAuthenticate = t
            }, t.prototype.getCanAuthenticate = function() {
                return this.canAuthenticate
            }, t.prototype.setPreauthorizationCache = function(t) {
                this.preauthorizationCache = t
            }, t.prototype.getPreauthorizationCache = function() {
                return this.preauthorizationCache
            }, t.prototype.loadEntitlementTokenFromJSONObject = function(t) {
                this.authenticationToken = t[v.AUTHN_TOKEN], this.authorizationToken = t[v.AUTHZ_TOKEN], this.userMeta = t[v.USER_METADATA], this.mvpd = t[v.MVPD], this.canAuthenticate = t[v.CAN_AUTHN], this.preauthorizationCache = t[v.PREAUTHORIZATION_CACHE]
            }, t.prototype.isEntitlementTokenContentValid = function() {
                return this && !u.a.isUndefined(this.authenticationToken) && !u.a.isUndefined(this.authorizationToken) && !u.a.isUndefined(this.mvpd) && !u.a.isUndefined(this.canAuthenticate) && Array.isArray(this.authenticationToken) && Array.isArray(this.authorizationToken)
            }, t
        }(),
        E = n(7),
        m = function() {
            function t() {
                this.mvpds = {}, this.storageManager = S.getInstance()
            }
            return t.getInstance = function() {
                return this.instance || (this.instance = new t), this.instance
            }, t.prototype.getCurrentSP = function() {
                var t = null,
                    e = this.getCurrentMvpdID();
                return e && this.getMVPDByID(e) && (t = this.getMVPDByID(e).serviceProvider), t
            }, t.prototype.setCurrentMvpdID = function(t) {
                this.switchToCurrentMvpdStorageType(t), this.storageManager.clearStorage(t !== this.getCurrentMvpdID()), this.storageManager.setMvpdID(t)
            }, t.prototype.getCurrentMvpdID = function() {
                return this.storageManager.getMvpdID()
            }, t.prototype.getRequestorMVPDs = function() {
                return this.mvpds
            }, t.prototype.clearRequestorMVPDs = function() {
                this.mvpds = {}
            }, t.prototype.addMvpds = function(t) {
                if (t && t.length > 0)
                    for (var e = 0, n = t; e < n.length; e++) {
                        var r = n[e];
                        this.mvpds.hasOwnProperty(r.id) || (this.mvpds[r.id] = r)
                    }
            }, t.prototype.getMVPDByID = function(t) {
                return u.a.isEmpty(this.mvpds) ? null : this.mvpds.hasOwnProperty(t) ? this.mvpds[t] : null
            }, t.prototype.isValidMVPD = function(t) {
                var e = this.getMVPDByID(t);
                return !!e && e.id === t
            }, t.prototype.switchToCurrentMvpdStorageType = function(t) {
                if (t) {
                    var e = this.getMVPDByID(t);
                    e && (e.authPerBrowserSession ? this.storageManager.switchToSessionStorage() : this.storageManager.switchToLocalStorage())
                }
            }, t.prototype.getCurrentMvpd = function() {
                var t = null,
                    e = this.getCurrentMvpdID();
                return e && (t = this.getMVPDByID(e)), t
            }, t
        }(),
        A = n(6),
        y = {
            LOCAL_STORAGE_PRIMARY_KEY: "entitlementToken",
            SESSION_STORAGE_PRIMARY_KEY: "sessionStorage",
            MEMORY_STORAGE_PRIMARY_KEY: "memoryStorage",
            STORAGE_VERSION_KEY: "storageVersion",
            GENERIC_REQUESTOR: "GenericRequestor",
            DEVICE_IID_KEY: "iid"
        },
        R = function() {
            function t() {}
            return t.LOCAL_STORAGE = "local", t.SESSION_STORAGE = "session", t.MEMORY_STORAGE = "memory", t
        }(),
        S = function() {
            function t() {
                this.internalMemoryStorage = new I, this.pm = new A.a(g.a.globalOptions.proxyURL, window.accessEnablerProxy.contentWindow), this.cookieService = E.a.getInstance(), this.isLocalStorageSpaceEnabled() && this.isLocalStorageSpaceAvailable() ? (this.storageType = R.LOCAL_STORAGE, this.storagePrimaryKey = y.LOCAL_STORAGE_PRIMARY_KEY, this.storage = this.internalLocalStorage) : (s.default.warn("Web localStorage is not enabled or not available, switch to using memory storage!"), this.storageType = R.MEMORY_STORAGE, this.storagePrimaryKey = y.MEMORY_STORAGE_PRIMARY_KEY, this.storage = this.internalMemoryStorage), this.storage.setItem(y.STORAGE_VERSION_KEY, 1), this.storageType !== R.MEMORY_STORAGE && this.pm.postStorage("setItem", y.STORAGE_VERSION_KEY, 1)
            }
            return t.getInstance = function() {
                return this.instance || (this.instance = new t), this.instance
            }, t.prototype.getEntitlementToken = function() {
                return this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.entitlementToken
            }, t.prototype.syncStorage = function() {
                var t = this;
                return new Promise(function(e) {
                    t.pm.postStorage("getItems", y.STORAGE_VERSION_KEY, y.DEVICE_IID_KEY, y.GENERIC_REQUESTOR, y.LOCAL_STORAGE_PRIMARY_KEY, y.SESSION_STORAGE_PRIMARY_KEY).then(function(n) {
                        if (!t.isDirty && !u.a.isEmpty(n) && !n.error)
                            for (var r in n)
                                if (n[r] !== localStorage.getItem(r) && (localStorage.setItem(r, n[r]), r === t.storagePrimaryKey)) try {
                                    t.entitlementToken = JSON.parse(n[r])
                                } catch (t) {
                                    s.default.error("Error parsing value from SSO storage", t)
                                }
                        t.pm.postStorage("isSessionCookieSet").then(function(e) {
                            t.isDirty || u.a.isEmpty(n) || e.isSessionCookieSet && t.cookieService.setSessionCookie()
                        }), t.startTimer(), e()
                    })
                })
            }, t.prototype.getStorageData = function() {
                return [this.internalLocalStorage.getItem(y.LOCAL_STORAGE_PRIMARY_KEY), this.internalLocalStorage.getItem(y.SESSION_STORAGE_PRIMARY_KEY)]
            }, t.prototype.switchToSessionStorage = function() {
                this.isLocalStorageSpaceEnabled() && (s.default.warn("Switch to using session storage!"), this.storageType = R.SESSION_STORAGE, this.storagePrimaryKey = y.SESSION_STORAGE_PRIMARY_KEY, this.storage = this.internalLocalStorage), this.entitlementToken = this.loadEntitlementTokenFromStorage()
            }, t.prototype.switchToLocalStorage = function() {
                this.isLocalStorageSpaceEnabled() && (s.default.warn("Switch to using local storage!"), this.storageType = R.LOCAL_STORAGE, this.storagePrimaryKey = y.LOCAL_STORAGE_PRIMARY_KEY, this.storage = this.internalLocalStorage), this.entitlementToken = this.loadEntitlementTokenFromStorage()
            }, t.prototype.setAuthenticationToken = function(t) {
                this.isDirty = !0, this.entitlementToken = this.loadEntitlementTokenFromStorage();
                for (var e, n = this.entitlementToken.getAuthenticationTokens(), r = 0; r < n.length;) e = new f(n[r]), e.getRequestorID() === t.getRequestorID() ? n.splice(r, 1) : r++;
                n.push(t.getSource()), this.saveEntitlementTokenToStorage(this.entitlementToken)
            }, t.prototype.getAuthenticationToken = function() {
                var t = this.getMvpdID(),
                    e = null;
                if (t) {
                    var n = m.getInstance().getMVPDByID(t);
                    n && (e = n.authPerAggregator ? this.searchForAuthenticationTokenForRequestor(W.requestorID) : this.searchForFirstValidAuthenticationToken())
                }
                return e
            }, t.prototype.searchForFirstValidAuthenticationTokenForCurrentMvpd = function() {
                var t = this.getMvpdID(),
                    e = null;
                if (t) {
                    this.entitlementToken = this.loadEntitlementTokenFromStorage();
                    for (var n = this.entitlementToken.getAuthenticationTokens(), r = void 0, o = 0, i = n; o < i.length; o++) {
                        var a = i[o];
                        if (r = new f(a), r.getMVPDID() === t && r.isValid()) {
                            e = r;
                            break
                        }
                    }
                }
                return e
            }, t.prototype.setAuthorizationToken = function(t) {
                this.isDirty = !0, this.entitlementToken = this.loadEntitlementTokenFromStorage();
                for (var e, n = this.entitlementToken.getAuthorizationTokens(), r = 0; r < n.length;) e = new f(n[r]), e.getRequestorID() === t.getResourceID() && e.getResourceID() === t.getResourceID() ? n.splice(r, 1) : r++;
                n.push(t.getSource()), this.saveEntitlementTokenToStorage(this.entitlementToken)
            }, t.prototype.getAuthorizationToken = function(t, e) {
                this.entitlementToken = this.loadEntitlementTokenFromStorage();
                for (var n, r = this.entitlementToken.getAuthorizationTokens(), o = null, i = 0, a = r; i < a.length; i++) {
                    var s = a[i];
                    if (n = new f(s), n.getRequestorID() === t && n.getResourceID() === e) {
                        o = n;
                        break
                    }
                }
                return o
            }, t.prototype.setUserMetadata = function(t) {
                if (this.isDirty = !0, u.a.isEmpty(t)) s.default.warn("Received empty userMetadata");
                else if (W.requestorID) {
                    var e = this.getMvpdID();
                    this.entitlementToken = this.loadEntitlementTokenFromStorage();
                    try {
                        if (this.entitlementToken.getUserMetadata() || this.entitlementToken.setUserMetadata({}), e) {
                            var n = m.getInstance().getMVPDByID(e);
                            if (n) {
                                var r = JSON.parse(t),
                                    o = n.authPerAggregator ? W.requestorID : y.GENERIC_REQUESTOR;
                                this.entitlementToken.getUserMetadata()[o] = r, this.saveEntitlementTokenToStorage(this.entitlementToken)
                            } else s.default.warn("Cannot set user metadata token: invalid MVPD selected.")
                        } else s.default.warn("Cannot set user metadata token: no MVPD selected.")
                    } catch (t) {
                        s.default.error(t)
                    }
                } else s.default.warn("Cannot set user metadata: requestor is not configured.")
            }, t.prototype.mergeUserMetadata = function(t) {
                var e = this.getUserMetadata();
                try {
                    var n = JSON.parse(t),
                        r = parseInt(n.updated, 10);
                    if (parseInt(e.updated, 10) < r && n.data) try {
                        e.updated = r;
                        var o = n.data;
                        for (var i in o) o.hasOwnProperty(i) && (e.data[i] = o[i]);
                        this.setUserMetadata(JSON.stringify(e))
                    } catch (e) {
                        s.default.warn("Error merging user metadata tokens."), this.setUserMetadata(t)
                    } else s.default.warn("The metadata token received from the server has invalid properties.")
                } catch (t) {
                    s.default.warn("The metadata token received from the server cannot be parsed.")
                }
            }, t.prototype.getUserMetadata = function() {
                var t = this.getMvpdID(),
                    e = null;
                if (t) {
                    var n = m.getInstance().getMVPDByID(t);
                    if (n) {
                        this.entitlementToken = this.loadEntitlementTokenFromStorage();
                        var r = this.entitlementToken.getUserMetadata();
                        r && (e = n.authPerAggregator ? r[W.requestorID] : r[y.GENERIC_REQUESTOR])
                    }
                }
                return e
            }, t.prototype.setMvpdID = function(t) {
                this.isDirty = !0, this.storageType === R.SESSION_STORAGE && (this.storagePrimaryKey = y.LOCAL_STORAGE_PRIMARY_KEY), this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.entitlementToken.setMvpdID(null === t ? null : String(t)), this.saveEntitlementTokenToStorage(this.entitlementToken), this.storageType === R.SESSION_STORAGE && (this.storagePrimaryKey = y.SESSION_STORAGE_PRIMARY_KEY)
            }, t.prototype.getMvpdID = function() {
                return this.storageType === R.SESSION_STORAGE && (this.storagePrimaryKey = y.LOCAL_STORAGE_PRIMARY_KEY), this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.storageType === R.SESSION_STORAGE && (this.storagePrimaryKey = y.SESSION_STORAGE_PRIMARY_KEY), this.entitlementToken.getMvpdID()
            }, t.prototype.setCanAuthenticate = function(t) {
                this.isDirty = !0, this.storageType === R.SESSION_STORAGE && (this.storagePrimaryKey = y.LOCAL_STORAGE_PRIMARY_KEY), this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.entitlementToken.setCanAuthenticate(Boolean(t)), this.saveEntitlementTokenToStorage(this.entitlementToken), this.storageType === R.SESSION_STORAGE && (this.storagePrimaryKey = y.SESSION_STORAGE_PRIMARY_KEY)
            }, t.prototype.getCanAuthenticate = function() {
                return this.storageType === R.SESSION_STORAGE && (this.storagePrimaryKey = y.LOCAL_STORAGE_PRIMARY_KEY), this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.storageType === R.SESSION_STORAGE && (this.storagePrimaryKey = y.SESSION_STORAGE_PRIMARY_KEY), Boolean(this.entitlementToken.getCanAuthenticate())
            }, t.prototype.setPreauthorizationCache = function(t) {
                this.isDirty = !0, this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.entitlementToken.setPreauthorizationCache(t.concat()), this.saveEntitlementTokenToStorage(this.entitlementToken)
            }, t.prototype.getPreauthorizationCache = function() {
                return this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.entitlementToken.getPreauthorizationCache()
            }, t.prototype.setDeviceId = function(t) {
                var e = this;
                this.isDirty = !0, this.storage.setItem(y.DEVICE_IID_KEY, t), this.storageType !== R.MEMORY_STORAGE && this.pm.postStorage("setItem", y.DEVICE_IID_KEY, t).then(function() {
                    return e.isDirty = !1
                })
            }, t.prototype.getDeviceId = function() {
                return this.storage.getItem(y.DEVICE_IID_KEY)
            }, t.prototype.clearDeviceId = function() {
                this.storage.removeItem(y.DEVICE_IID_KEY)
            }, t.prototype.getSAMLNameID = function() {
                this.entitlementToken = this.loadEntitlementTokenFromStorage();
                var t = this.searchForFirstValidAuthenticationToken();
                return t ? t.getProperty("simpleSamlNameID") : null
            }, t.prototype.getSAMLSessionIndex = function() {
                this.entitlementToken = this.loadEntitlementTokenFromStorage();
                var t = this.searchForFirstValidAuthenticationToken();
                return t ? t.getProperty("simpleSamlSessionIndex") : null
            }, t.prototype.clearStorage = function(t) {
                void 0 === t && (t = !0), this.isDirty = !0, this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.entitlementToken.setMvpdID(null), this.entitlementToken.setCanAuthenticate(!1), t && (this.entitlementToken.setAuthenticationTokens([]), this.entitlementToken.setUserMetadata({})), this.entitlementToken.setAuthorizationTokens([]), this.saveEntitlementTokenToStorage(this.entitlementToken)
            }, t.prototype.resetStorage = function() {
                this.isDirty = !0, s.default.warn("Storage content was reset!"), this.entitlementToken = new T, this.saveEntitlementTokenToStorage(this.entitlementToken)
            }, t.prototype.searchForAuthenticationTokenForRequestor = function(t) {
                this.entitlementToken = this.loadEntitlementTokenFromStorage();
                for (var e, n = this.entitlementToken.getAuthenticationTokens(), r = null, o = 0, i = n; o < i.length; o++) {
                    var a = i[o];
                    if (e = new f(a), e.getRequestorID() === t) {
                        r = e;
                        break
                    }
                }
                return r
            }, t.prototype.searchForFirstValidAuthenticationToken = function() {
                this.entitlementToken = this.loadEntitlementTokenFromStorage();
                for (var t, e = this.entitlementToken.getAuthenticationTokens(), n = null, r = 0, o = e; r < o.length; r++) {
                    var i = o[r];
                    if (t = new f(i), t.isValid()) {
                        n = t;
                        break
                    }
                }
                return n
            }, t.prototype.loadEntitlementTokenFromStorage = function() {
                var t = this,
                    e = null,
                    n = new T;
                try {
                    var r = this.storage.getItem(this.storagePrimaryKey);
                    r && (e = JSON.parse(r))
                } catch (t) {
                    s.default.error(t), s.default.warn("Storage content was invalid when trying to convert from String to JSON Object!")
                }
                if (!e) return s.default.warn("Storage content was missing, null or couldn't be parsed!"), this.resetStorage(), new T;
                if (u.a.isEmpty(e)) return s.default.warn("Storage content was an empty JSON Object!"), this.resetStorage(), new T;
                if (n.loadEntitlementTokenFromJSONObject(e), !n.isEntitlementTokenContentValid()) return s.default.warn("Storage content was invalid when trying to validate entitlement token content!"), this.resetStorage(), new T;
                if (this.storageType === R.SESSION_STORAGE && !this.cookieService.isSessionCookieSet()) {
                    s.default.warn("New authentication session! Session storage was reset!"), this.isDirty = !0, this.cookieService.setSessionCookie(), this.pm.postStorage("setSessionCookie").then(function() {
                        t.isDirty = !1
                    });
                    var o = new T;
                    return this.storagePrimaryKey = y.SESSION_STORAGE_PRIMARY_KEY, this.saveEntitlementTokenToStorage(o), o
                }
                return n
            }, t.prototype.saveEntitlementTokenToStorage = function(t) {
                var e = this;
                try {
                    this.storageType === R.MEMORY_STORAGE && this.isLocalStorageSpaceEnabled() && (this.storagePrimaryKeyBeforeSwitchingToMemoryStorage === y.LOCAL_STORAGE_PRIMARY_KEY ? (s.default.warn("Switch to local storage from memory storage!"), this.storageType = R.LOCAL_STORAGE, this.storagePrimaryKey = y.LOCAL_STORAGE_PRIMARY_KEY, this.storage = this.internalLocalStorage) : (s.default.warn("Switch to session storage from memory storage!"), this.storageType = R.SESSION_STORAGE, this.storagePrimaryKey = y.SESSION_STORAGE_PRIMARY_KEY, this.storage = this.internalLocalStorage)), this.storage.setItem(this.storagePrimaryKey, JSON.stringify(t)), this.storageType !== R.MEMORY_STORAGE && this.pm.postStorage("setItem", this.storagePrimaryKey, JSON.stringify(t)).then(function() {
                        var t = e.getDeviceId();
                        u.a.isEmpty(t) || e.pm.postStorage("setItem", y.DEVICE_IID_KEY, t), e.isDirty = !1
                    })
                } catch (n) {
                    s.default.error(n), t = this.sanitizeEntitlementToken(t);
                    try {
                        this.storage.setItem(this.storagePrimaryKey, JSON.stringify(t)), this.pm.postStorage("setItem", this.storagePrimaryKey, JSON.stringify(t)).then(function() {
                            var t = e.getDeviceId();
                            u.a.isEmpty(t) || e.pm.postStorage("setItem", y.DEVICE_IID_KEY, t), e.isDirty = !1
                        })
                    } catch (e) {
                        s.default.error(e), s.default.warn("Web browser localStorage space is still exceeded, switch to using memory storage!"), this.storagePrimaryKeyBeforeSwitchingToMemoryStorage = this.storagePrimaryKey, this.storageType = R.MEMORY_STORAGE, this.storagePrimaryKey = y.MEMORY_STORAGE_PRIMARY_KEY, this.storage = this.internalMemoryStorage, this.storage.setItem(this.storagePrimaryKey, JSON.stringify(t))
                    }
                }
            }, t.prototype.isLocalStorageSpaceEnabled = function() {
                try {
                    return this.internalLocalStorage = localStorage, !0
                } catch (e) {
                    return t.error = l.LS011, !1
                }
            }, t.prototype.isLocalStorageSpaceAvailable = function() {
                try {
                    return this.internalLocalStorage.setItem("canWrite", "test"), this.internalLocalStorage.removeItem("canWrite"), this.internalLocalStorage.setItem("canWrite", "yes"), "yes" === this.internalLocalStorage.getItem("canWrite") || (t.error = l.LS011, !1)
                } catch (e) {
                    return t.error = l.LS011, !1
                }
            }, t.prototype.startTimer = function() {
                var t = this;
                setTimeout(function() {
                    return t.syncStorage()
                }, 1e3)
            }, t.prototype.sanitizeEntitlementToken = function(t) {
                for (var e, n = t.getAuthenticationTokens(), r = 0; r < n.length;) e = new f(n[r]), e.isValid() ? r++ : n.splice(r, 1);
                for (var o = t.getAuthorizationTokens(), r = 0; r < o.length;) e = new f(o[r]), e.isValid() ? r++ : o.splice(r, 1);
                return t
            }, t
        }(),
        _ = n(12),
        D = function() {
            function t() {
                this.defaultFingerprint = _(navigator.userAgent)
            }
            return t.getInstance = function() {
                return this.instance || (this.instance = new t), this.instance
            }, t.prototype.getFingerprint = function() {
                var t = this;
                return new Promise(function(e) {
                    n.e(0).then(function() {
                        try {
                            (new(0, n(22).Fingerprint)).get(function(t) {
                                s.default.debug("Fingerprinting result ", t), e(t)
                            })
                        } catch (n) {
                            s.default.error("Error calculating fingerprint!", n), e(t.defaultFingerprint)
                        }
                    }.bind(null, n)).catch(function(n) {
                        s.default.error("Error loading fingerprint library", n), s.default.debug("Using default fingerprinting value ", t.defaultFingerprint), e(t.defaultFingerprint)
                    })
                })
            }, t
        }(),
        O = function() {
            function t() {
                this.ajaxReference = g.a
            }
            return t.getInstance = function() {
                return this.instance || (this.instance = new t), this.instance
            }, t.prototype.ajax = function(t, e, n) {
                var r = this;
                void 0 === n && (n = {});
                var o;
                return new Promise(function(i, a) {
                    o = new r.ajaxReference({
                        type: n.method || "GET",
                        url: "" + n.url + t,
                        data: e,
                        dataType: n.dataType || "json",
                        success: function(t, e) {
                            i({
                                data: t,
                                status: e
                            })
                        },
                        error: function(t, e) {
                            a({
                                data: t,
                                status: e
                            })
                        },
                        context: n.context || r
                    }), W.getInstance().getService().getRequiredHeaders(!1).then(function(t) {
                        o.headers = t;
                        try {
                            o.send()
                        } catch (t) {
                            a(t)
                        }
                    })
                })
            }, t.prototype.post = function(t, e, n) {
                return void 0 === n && (n = {}), n.method = "POST", this.ajax(t, e, n)
            }, t.prototype.get = function(t, e, n) {
                return void 0 === e && (e = {}), void 0 === n && (n = {}), n.method = "GET", this.ajax(t, e, n)
            }, t.prototype.delete = function(t, e, n) {
                return void 0 === e && (e = {}), void 0 === n && (n = {}), n.method = "DELETE", this.ajax(t, e, n)
            }, t.prototype.put = function(t, e, n) {
                return void 0 === n && (n = {}), n.method = "PUT", this.ajax(t, e, n)
            }, t
        }(),
        k = n(10),
        C = function() {
            function t(t) {
                this.TRUE = "true", this.ATTR_VISIBLE = "visible", this.VISIBLE_TRUE = "true", this.MVPD = "mvpd", this.MVPD_ID = "id", this.MVPD_LOGO_URL = "logoUrl", this.MVPD_DISPLAY_NAME = "displayName", this.MVPD_AUTH_PER_AGGREGATOR = "authPerAggregator", this.MVPD_PASSIVE_AUTHN = "passiveAuthnEnabled", this.MVPD_AUTH_PER_BROWER_SESSION = "authPerBrowserSession", this.MVPD_IFRAME_REQUIRED = "iFrameRequired", this.MVPD_IFRAME_HEIGHT = "iFrameHeight", this.MVPD_IFRAME_WIDTH = "iFrameWidth", this.TEMP_PASS = "tempPass", this.mvpds = null, this.config = t
            }
            return t.prototype.getMvpds = function() {
                var t = this;
                return this.mvpds || (this.mvpds = [], k(d.getNodes(this.MVPD, this.config), function(e) {
                    var n = d.getNodeText(t.MVPD_ID, e),
                        r = {
                            id: n,
                            displayName: t.extractMvpdConfig(t.MVPD_DISPLAY_NAME, n, e, !1),
                            logoUrl: t.extractMvpdConfig(t.MVPD_LOGO_URL, n, e, !1),
                            authPerAggregator: t.extractMvpdConfig(t.MVPD_AUTH_PER_AGGREGATOR, n, e, !0),
                            passiveAuthnEnabled: t.extractMvpdConfig(t.MVPD_PASSIVE_AUTHN, n, e, !0, !0),
                            authPerBrowserSession: t.extractMvpdConfig(t.MVPD_AUTH_PER_BROWER_SESSION, n, e, !0),
                            iFrameRequired: t.extractMvpdConfig(t.MVPD_IFRAME_REQUIRED, n, e, !0),
                            tempPass: d.getNodeText(t.TEMP_PASS, e).toLowerCase() === t.TRUE
                        };
                    r.iFrameRequired && (r.iFrameHeight = t.extractMvpdConfig(t.MVPD_IFRAME_HEIGHT, n, e, !1), r.iFrameWidth = t.extractMvpdConfig(t.MVPD_IFRAME_WIDTH, n, e, !1)), t.mvpds.push(r)
                })), this.mvpds
            }, t.prototype.getConfigForProgrammer = function() {
                var t = null;
                if (this.config && this.config.documentElement) {
                    var e = this.config.documentElement.cloneNode(!0);
                    if (this.removeNonVisibleNode(e))
                        if (void 0 !== window.XMLSerializer) try {
                            t = (new XMLSerializer).serializeToString(e)
                        } catch (n) {
                            t = e.xml
                        } else t = e.xml
                }
                return t
            }, t.prototype.removeNonVisibleNode = function(t) {
                var e = !1;
                return t.getAttribute(this.ATTR_VISIBLE) === this.VISIBLE_TRUE ? (t.removeAttribute(this.ATTR_VISIBLE), e = !0) : t.hasChildNodes() && (e = this.removeNonVisibleChildNodes(t)) && this.removeAttributes(t), e
            }, t.prototype.removeNonVisibleChildNodes = function(t) {
                for (var e = !1, n = t.childNodes, r = 0; r < n.length; r++) {
                    var o = n[r];
                    1 === o.nodeType && (this.removeNonVisibleNode(o) ? e = !0 : (t.removeChild(o), r--))
                }
                return e
            }, t.prototype.removeAttributes = function(t) {
                for (var e = t.attributes.length - 1; e >= 0; e--) {
                    var n = t.attributes.item(e);
                    t.removeAttributeNode(n)
                }
            }, t.prototype.extractMvpdConfig = function(t, e, n, r, o) {
                void 0 === o && (o = null);
                var i, a = W.clientInfo && W.clientInfo.getMvpdConfig() ? W.clientInfo.getMvpdConfig() : {},
                    s = null !== a[e] && void 0 !== a[e] && null !== a[e][t] && void 0 !== a[e][t],
                    u = d.getNode(t, n);
                return s ? (i = a[e][t], u && (u.textContent = i), i) : (i = d.getNodeText(t, n), null !== i && void 0 !== i && "" !== i || void 0 === o ? r ? i === this.TRUE : i : o)
            }, t
        }(),
        P = function() {
            function t() {}
            return t.checkPendingLogout = function(t) {
                if ("string" == typeof t) return new RegExp("<pendingLogout.*>(s)*true(s)*</pendingLogout>").test(t);
                var e = !1;
                return d.getNode("pendingLogout", t) && "true" === d.getNodeText("pendingLogout", t) && (e = !0), e
            }, t.getPendingLogoutReason = function(t) {
                var e = null;
                if ("string" == typeof t) e = new RegExp('<pendingLogout reason="(.*)">true</pendingLogout>').exec(t), e = e[1] ? e[1] : null;
                else {
                    var n = d.getNode("pendingLogout", t);
                    n && "true" === d.getNodeText("pendingLogout", t) && (e = n.attr("reason"))
                }
                return e
            }, t
        }(),
        M = function() {
            function t(t, e, n) {
                this.initialized = !1, this.authenticationProviderURL = null, this.validRequestor = !1, this.configForProgrammer = null, this.instance = this, this.reqID = t, this.callSetConfig = e, this.completeHandler = n
            }
            return t.prototype.initialize = function(e) {
                var n = this;
                e && Array.isArray(e) && e.length > 0 && (t.serviceProviderURL = e[0]), t.numConfigCalls++, O.getInstance().get("/config/" + this.reqID, {
                    noflash: !0
                }, {
                    url: t.serviceProviderURL,
                    dataType: "xml"
                }).then(function(t) {
                    return n.onConfig(t.data, t.status)
                }, function(t) {
                    return n.onConfig(t.data, t.status)
                })
            }, t.prototype.isValidRequestor = function() {
                return this.validRequestor
            }, t.prototype.getConfigForProgrammer = function() {
                return this.configForProgrammer
            }, t.prototype.retrieveAuthenticationToken = function() {
                this.instance.authenticationProviderURL || (this.instance.authenticationProviderURL = t.serviceProviderURL), s.default.debug("Pending authentication detected..."), new x(this.instance.authenticationProviderURL, W.requestorID).retrieveAuthenticationToken(function(t) {
                    return W.getInstance().authnSuccess(t)
                }, function(t, e, n, r) {
                    return W.getInstance().authnError(t, e, n, r)
                })
            }, t.prototype.completeInitialization = function() {
                0 !== t.numConfigCalls || this.instance.authenticationProviderURL || (s.default.debug("Configuration INITIALIZED"), this.completeHandler())
            }, t.prototype.resetAuthenticationProviderURL = function() {
                this.instance.authenticationProviderURL = null
            }, t.prototype.onConfig = function(e, n) {
                if (200 !== n && (s.default.error("Invalid configuration response: HTTP", n), W.getInstance().callbackManager.onErrorHandler(0 === n ? l.SEC420 : l.buildError(l.PREFIX_CFG + n)), 410 === n)) return void W.getInstance().callCallback("setAuthenticationStatus", 0, a.SERVER_API_TOO_OLD);
                P.checkPendingLogout(e) && W.getInstance().ditchTokens(), 200 === n && (this.validRequestor = !0);
                var r = 0;
                d.getNode("time", e) && (r = parseInt(d.getNodeText("time", e), 10), s.default.debug("Server time:", r));
                var o = (new Date).getTime();
                if (r && r > 0) {
                    var i = o - r;
                    (i > 59e3 || i < -59e3) && W.getInstance().callbackManager.onErrorHandler(l.CFG100)
                }
                "" === W.deviceInfo.deviceType && d.getNode("device", e) && (W.deviceInfo.deviceType = d.getNodeText("device", e)), "" === W.deviceInfo.clientType && d.getNode("clientType", e) && (W.deviceInfo.clientType = d.getNodeText("clientType", e)), "" === W.deviceInfo.os && d.getNode("os", e) && (W.deviceInfo.os = d.getNodeText("os", e));
                var u = new C(e),
                    c = u.getMvpds();
                this.callSetConfig && (this.configForProgrammer = u.getConfigForProgrammer());
                for (var h = 0, g = c; h < g.length; h++) g[h].serviceProvider = t.serviceProviderURL;
                m.getInstance().addMvpds(c), --t.numConfigCalls, d.getNode("pendingAuthentication", e) && "true" === d.getNodeText("pendingAuthentication", e) && !this.instance.authenticationProviderURL ? this.instance.retrieveAuthenticationToken() : this.instance.completeInitialization()
            }, t.serviceProviderURL = null, t.numConfigCalls = 0, t
        }(),
        b = n(3),
        N = function() {
            function t() {
                this.INDIVIDUALIZATION_ENDPOINT_PATH = "/indiv/devices", this.INDIVIDUALIZATION_DEVICE_ID_KEY = "deviceId", this.REQUIRED_INDIVIDUALIZATION_KEYS = [this.INDIVIDUALIZATION_DEVICE_ID_KEY], this.fingerprintService = D.getInstance(), this.httpService = O.getInstance()
            }
            return t.prototype.getIndividualizationData = function() {
                var t = this;
                return new Promise(function(e, n) {
                    t.fingerprintService.getFingerprint().then(function(r) {
                        var o = function(r) {
                                try {
                                    for (var o = JSON.parse(r.data), i = 0, s = t.REQUIRED_INDIVIDUALIZATION_KEYS; i < s.length; i++)
                                        if (!o[s[i]]) return void n(l.IS2XX("" + l.PREFIX_IS + r.status, a.MISSING_INDIVIDUALIZATION_KEY_ERROR));
                                    e(o[t.INDIVIDUALIZATION_DEVICE_ID_KEY])
                                } catch (t) {
                                    n(l.IS2XX("" + l.PREFIX_IS + r.status, a.INVALID_INDIVIDUALIZATION_DATA_ERROR))
                                }
                            },
                            i = function(t) {
                                n(l.buildError("" + l.PREFIX_IS + t.status))
                            };
                        t.httpService.post(t.INDIVIDUALIZATION_ENDPOINT_PATH, {
                            fingerprint: r
                        }, {
                            url: new b(M.serviceProviderURL, null, !0).origin
                        }).then(o, i)
                    })
                })
            }, t.INDIVIDUALIZATION_ERROR_STATUS = 23081993, t
        }(),
        w = function() {
            function t() {
                this.storageManager = S.getInstance(), this.individualizationService = new N
            }
            return t.getInstance = function() {
                return this.instance || (this.instance = new t), this.instance
            }, t.prototype.getDeviceInfo = function() {
                return {
                    ap_42: navigator.vendor ? navigator.vendor : "anonymous",
                    ap_11: navigator.platform,
                    ap_z: navigator.userAgent
                }
            }, t.prototype.getDeviceId = function() {
                var t = this;
                return new Promise(function(e, n) {
                    var r = t.storageManager.getDeviceId();
                    r ? e(r) : t.individualizationService.getIndividualizationData().then(function(n) {
                        t.storageManager.setDeviceId(n), e(n)
                    }, function(t) {
                        n(t)
                    })
                })
            }, t
        }(),
        L = n(10),
        U = function() {
            function t() {}
            return t.AUTHENTICATION_ENDPOINT_PATH = "/authenticate/saml?", t.AUTHENTICATION_TOKEN_ENDPOINT_PATH = "/session", t.AUTHORIZATION_TOKEN_ENDPOINT_PATH = "/authorize", t.MEDIA_TOKEN_ENDPOINT_PATH = "/shortAuthorize", t.PREAUTHORIZATION_ENDPOINT_PATH = "/preauthorize", t.LOGOUT_ENDPOINT_PATH = "/logout?", t.DEVICE_ID_ENDPOINT_PATH = "/getMetadata", t.USER_METADATA_ENDPOINT_PATH = "/usermetadata", t.PASSIVE_AUTHENTICATION_REDIRECT_ENDPOINT_PATH = "/completePassiveAuthentication", t.BACKGROUND_LOGIN_COMPLETE = n.p + "completeBackgroundLogin.html", t.BACKGROUND_LOGOUT_COMPLETE = n.p + "completeBackgroundLogout.html", t
        }(),
        x = function() {
            function t(t, e) {
                this.spURL = t, this.requestorID = e, this.storageManager = S.getInstance(), this.identificationManager = w.getInstance()
            }
            return t.prototype.goToLoginPage = function(t, e, n, r) {
                var o = W.clientInfo && W.clientInfo.isBackgroundLogin(),
                    i = this.getLoginPageUrl(!1, t, e, r, o && !t.tempPass);
                if (o && (n = U.BACKGROUND_LOGIN_COMPLETE), o && t.tempPass) return s.default.debug("Attempting background temp pass..."), void new g.a({
                    url: i,
                    data: {
                        iframe_required: !0,
                        redirect_url: "about:blank"
                    },
                    success: function() {
                        return W.getInstance().completeBackgroundLogin()
                    },
                    error: function() {
                        return W.getInstance().completeBackgroundLogin()
                    }
                }).send();
                t.iFrameRequired ? W.getInstance().callCallback("openIFrame", i, t.iFrameWidth, t.iFrameHeight, n) : W.getInstance().callCallback("navigateToURL", i, n, o)
            }, t.prototype.getLoginPageUrl = function(t, e, n, r, o) {
                void 0 === r && (r = null), void 0 === o && (o = !1);
                var i = {
                    noflash: !0,
                    mso_id: e.id,
                    requestor_id: this.requestorID,
                    no_iframe: o ? "true" : "false",
                    domain_name: "adobe.com"
                };
                return n && (i.reg_code = n), r && (i.generic_data = r), t && (i.passive = "true", i.redirect_url = this.spURL + U.PASSIVE_AUTHENTICATION_REDIRECT_ENDPOINT_PATH), W.clientInfo && null !== W.clientInfo.isIFrameRequiredForMvpd(e.id) && (i.iframe_required = W.clientInfo.isIFrameRequiredForMvpd(e.id)), i = u.a.extend(i, g.a.globalData), this.spURL + U.AUTHENTICATION_ENDPOINT_PATH + h.a.param(i)
            }, t.prototype.retrieveAuthenticationToken = function(t, e) {
                var n = this;
                this.getRequiredHeaders(!0).then(function(r) {
                    new g.a({
                        type: "POST",
                        url: n.spURL + U.AUTHENTICATION_TOKEN_ENDPOINT_PATH,
                        data: {
                            _method: "GET",
                            requestor_id: n.requestorID
                        },
                        dataType: "xml",
                        success: t,
                        error: e,
                        headers: r
                    }).send()
                }, function(t) {
                    e(t, N.INDIVIDUALIZATION_ERROR_STATUS)
                })
            }, t.prototype.retrieveAuthorizationToken = function(t, e, n, r) {
                var o = this;
                this.getRequiredHeaders(!0).then(function(i) {
                    var a = o.storageManager.getAuthenticationToken();
                    new g.a({
                        type: "POST",
                        url: o.spURL + U.AUTHORIZATION_TOKEN_ENDPOINT_PATH,
                        data: {
                            resource_id: t,
                            requestor_id: o.requestorID,
                            authentication_token: a.getSource(),
                            mso_id: m.getInstance().getCurrentMvpdID(),
                            generic_data: e,
                            userMeta: 1
                        },
                        dataType: "text",
                        success: n,
                        error: r,
                        headers: i,
                        context: o
                    }).send()
                }, function(t) {
                    r(t, N.INDIVIDUALIZATION_ERROR_STATUS)
                })
            }, t.prototype.retrieveMediaToken = function(t, e, n, r) {
                var o = this;
                this.getRequiredHeaders(!0).then(function(i) {
                    var a = o.storageManager.getAuthenticationToken();
                    new g.a({
                        type: "POST",
                        url: o.spURL + U.MEDIA_TOKEN_ENDPOINT_PATH,
                        data: {
                            authz_token: t.getSource(),
                            requestor_id: o.requestorID,
                            generic_data: e,
                            session_guid: a.getProperty("simpleTokenAuthenticationGuid"),
                            hashed_guid: "false"
                        },
                        dataType: "text",
                        success: n,
                        error: r,
                        headers: i,
                        context: o
                    }).send()
                }, function(t) {
                    r(t, N.INDIVIDUALIZATION_ERROR_STATUS)
                })
            }, t.prototype.retrieveDeviceIDHash = function(t, e, n) {
                var r = this;
                this.requestorID ? this.getRequiredHeaders(!1).then(function(o) {
                    new g.a({
                        type: "POST",
                        url: r.spURL + U.DEVICE_ID_ENDPOINT_PATH,
                        data: {
                            requestor_id: r.requestorID,
                            device_id: t
                        },
                        dataType: "text/plain",
                        success: e,
                        error: n,
                        headers: o,
                        context: r
                    }).send()
                }) : e(null)
            }, t.prototype.retrieveEncryptedMetadata = function(t, e, n) {
                var r = this,
                    o = S.getInstance().getAuthenticationToken();
                this.requestorID && o ? this.getRequiredHeaders(!1).then(function(i) {
                    new g.a({
                        type: "POST",
                        url: r.spURL + U.USER_METADATA_ENDPOINT_PATH,
                        data: {
                            requestor: r.requestorID,
                            authn: o.getSource(),
                            metadata: JSON.stringify(t)
                        },
                        dataType: "text",
                        success: e,
                        error: n,
                        headers: i,
                        context: r
                    }).send()
                }) : n(null)
            }, t.prototype.checkPreauthorizedResources = function(t) {
                var e = this,
                    n = S.getInstance().getAuthenticationToken();
                n && n.isValid() && this.spURL && this.getRequiredHeaders(!1).then(function(r) {
                    new g.a({
                        type: "POST",
                        url: e.spURL + U.PREAUTHORIZATION_ENDPOINT_PATH,
                        data: {
                            authentication_token: n.getSource(),
                            requestor_id: e.requestorID,
                            resource_id: t,
                            noflash: !0
                        },
                        dataType: "xml",
                        success: e.onPreauthorizationComplete,
                        error: e.onPreauthorizationError,
                        headers: r,
                        context: e,
                        traditional: !0
                    }).send()
                })
            }, t.prototype.logout = function(t) {
                var e = W.clientInfo && W.clientInfo.isBackgroundLogout();
                if (t && this.spURL) {
                    var n = {
                            noflash: !0,
                            mso_id: t.getMVPDID(),
                            requestor_id: this.requestorID,
                            name_id: t.getProperty("simpleSamlNameID"),
                            session_index: t.getProperty("simpleSamlSessionIndex"),
                            pi: t.getProperty("simpleSamlNameID")
                        },
                        r = t.getProperty("simpleTransientPartOfGuid");
                    r && (n.p1 = r), n = u.a.extend(n, g.a.globalData);
                    var o = this.spURL + U.LOGOUT_ENDPOINT_PATH;
                    e ? (n.redirect_url = U.BACKGROUND_LOGOUT_COMPLETE, W.getInstance().doBackgroundLogout(o + h.a.param(n))) : W.getInstance().callCallback("navigateToURL", o + h.a.param(n), null, null)
                } else e ? W.getInstance().completeBackgroundLogout() : W.getInstance().callCallback("reload")
            }, t.prototype.getRequiredHeaders = function(t) {
                var e = this;
                return new Promise(function(n, r) {
                    var o = JSON.parse(JSON.stringify(e.identificationManager.getDeviceInfo())),
                        i = e.storageManager.getSAMLNameID();
                    i && (o.ap_19 = i);
                    var a = e.storageManager.getSAMLSessionIndex();
                    a && (o.ap_23 = a), t ? e.identificationManager.getDeviceId().then(function(t) {
                        o.ap_21 = t, n(o)
                    }, function(t) {
                        r(t)
                    }) : n(o)
                })
            }, t.prototype.onPreauthorizationComplete = function(t, e) {
                if (200 !== e) return void this.onPreauthorizationError();
                var n = [],
                    r = [];
                if (t) {
                    var o = d.getNodes("resource", t);
                    L(o, function(t) {
                        var e = {
                            id: d.getNodeText("id", t),
                            authorized: "true" === d.getNodeText("authorized", t).toLowerCase()
                        };
                        n.push(e), e.authorized && r.push(e.id)
                    })
                }
                S.getInstance().setPreauthorizationCache(n), W.getInstance().callCallback("preauthorizedResources", r)
            }, t.prototype.onPreauthorizationError = function() {
                s.default.warn("/preauthorize call failed - returning empty preauthorizedResources array"), W.getInstance().callCallback("preauthorizedResources", []), W.getInstance().callbackManager.onErrorHandler(l.P100)
            }, t
        }(),
        z = function() {
            function t(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                this.thisArg = t, this.fn = e, this.params = [], n && (this.params = Array.isArray(n) ? n : [n])
            }
            return t.prototype.execute = function() {
                return this.fn.apply(this.thisArg, this.params)
            }, t
        }(),
        H = function() {
            function t(t) {
                this.callbackMap = {}, this.callbackFacade = t
            }
            return t.prototype.bind = function(t, e) {
                this.validate(t), this.validate(e), this.callbackMap[t] && Array.isArray(this.callbackMap[t]) || (this.callbackMap[t] = []), this.callbackMap[t].push(e)
            }, t.prototype.unbind = function(t, e) {
                if (this.validate(t), e && this.validate(e), this.callbackMap[t] && Array.isArray(this.callbackMap[t]))
                    if (e) {
                        var n = this.callbackMap[t].indexOf(e);
                        n > -1 && this.callbackMap[t].splice(n, 1)
                    } else delete this.callbackMap[t]
            }, t.prototype.executeCallbacks = function(t, e) {
                if (this.callbackMap[t] && Array.isArray(this.callbackMap[t]))
                    for (var n = 0, r = this.callbackMap[t]; n < r.length; n++) {
                        var o = r[n],
                            i = e ? [o].concat(e) : [o];
                        this.callbackFacade.callCallback.apply(this.callbackFacade, i)
                    }
            }, t.prototype.onErrorHandler = function(t) {
                s.default.debug("Sending", t), this.executeCallbacks("errorEvent", t)
            }, t.prototype.validate = function(t) {
                if (t.length > 1024) throw new TypeError("InvalidArgumentError");
                var e = /^[0-9a-zA-Z][-._a-zA-Z0-9]*$/;
                if (null == t.match(e)) throw new TypeError("InvalidArgumentError")
            }, t
        }(),
        V = function(t, e, n) {
            return t._api_methods || (t._api_methods = {}), t._api_methods[e] = e, n
        },
        F = function() {
            function t() {}
            return t.getValue = function(e, n) {
                var a = W.getInstance().callCallback;
                switch (e) {
                    case "TTL_AUTHN":
                        t.getAuthnTTL();
                        break;
                    case "TTL_AUTHZ":
                        t.getAuthzTTL(n);
                        break;
                    case "DEVICEID":
                        t.getDeviceID();
                        break;
                    default:
                        try {
                            var s = S.getInstance().getUserMetadata(),
                                c = t.CACHE;
                            if (!e) return void a("setMetadataStatus", e, null, null);
                            if (r(s))
                                if (r(c) && c.updated >= s.updated) {
                                    var l = c.data[e],
                                        h = l ? c.encrypted && u.b.inArray(e, c.encrypted) > -1 : null;
                                    a("setMetadataStatus", e, h, l)
                                } else W.getInstance().getService().retrieveEncryptedMetadata(s, function(t, n) {
                                    return o(t, e)
                                }, function(t) {
                                    return i(e)
                                });
                            else a("setMetadataStatus", e, null, null)
                        } catch (t) {
                            a("setMetadataStatus", e, null, null)
                        }
                }
            }, t.getAuthnTTL = function() {
                var t = null,
                    e = S.getInstance().getAuthenticationToken();
                e && e.isValid() && (t = e.getExpiryDate().getTime()), W.getInstance().callCallback("setMetadataStatus", "TTL_AUTHN", null, t)
            }, t.getAuthzTTL = function(t) {
                var e = null,
                    n = Array.isArray(t) && t.length > 0 ? t[0] : null;
                if (n) {
                    var r = S.getInstance().getAuthorizationToken(W.requestorID, n);
                    r && r.isValid() && (e = r.getExpiryDate().getTime())
                }
                W.getInstance().callCallback("setMetadataStatus", "TTL_AUTHZ", t, e)
            }, t.getDeviceID = function() {
                var t = W.getInstance().callCallback,
                    e = function(e) {
                        P.checkPendingLogout(e) ? (W.getInstance().ditchTokens(), t("setMetadataStatus", "DEVICEID", null, null)) : t("setMetadataStatus", "DEVICEID", null, e)
                    };
                w.getInstance().getDeviceId().then(function(n) {
                    W.getInstance().getService().retrieveDeviceIDHash(n, function(t) {
                        return e(t)
                    }, function(e) {
                        return t("setMetadataStatus", "DEVICEID", null, null)
                    })
                }, function(e) {
                    W.getInstance().callbackManager.onErrorHandler(e), t("setMetadataStatus", "DEVICEID", null, null)
                })
            }, t.CACHE = null, t
        }(),
        q = function() {
            function t(t) {
                this.info = t, this.clientInfo = {
                    callSetConfig: !1,
                    backgroundLogin: !1,
                    backgroundLogout: !1,
                    visitorID: ""
                }, this.mvpdConfigs = {}, this.mvpdConfigDefault = {
                    iFrameRequired: !1,
                    iFrameWidth: 0,
                    iFrameHeight: 0
                }, this.parseClientInfo(t), this.parseMvpdConfig(t), s.default.debug("Parsed ClientInfo data", this.clientInfo, this.mvpdConfigs)
            }
            return t.prototype.callSetConfig = function() {
                return this.clientInfo.callSetConfig
            }, t.prototype.getVisitorID = function() {
                return this.clientInfo.visitorID
            }, t.prototype.isBackgroundLogin = function() {
                return this.clientInfo.backgroundLogin
            }, t.prototype.isBackgroundLogout = function() {
                return this.clientInfo.backgroundLogout
            }, t.prototype.getMvpdConfig = function() {
                return this.mvpdConfigs
            }, t.prototype.isIFrameRequiredForMvpd = function(t) {
                var e = this.mvpdConfigs[t];
                return e ? e.iFrameRequired : null
            }, t.prototype.parseClientInfo = function(t) {
                for (var e in this.clientInfo) t && t.hasOwnProperty(e) && typeof this.clientInfo[e] == typeof t[e] && (this.clientInfo[e] = t[e])
            }, t.prototype.parseMvpdConfig = function(t) {
                var e = t && t.mvpdConfig;
                if (!u.a.isEmpty(e)) {
                    s.default.error(e);
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var r = e[n],
                                o = {};
                            for (var i in this.mvpdConfigDefault) r && r.hasOwnProperty(i) && typeof this.mvpdConfigDefault[i] == typeof r[i] && (o[i] = r[i]);
                            o !== {} && (this.mvpdConfigs[n] = u.a.extend({}, this.mvpdConfigDefault, o))
                        }
                }
            }, t
        }(),
        G = n(11),
        K = function() {
            function t() {}
            return t.KEY_VISITOR_ID = "ap_vi", t
        }();
    n.d(e, "AccessEnablerHelper", function() {
        return W
    });
    var Z = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length,
                a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a), a
        },
        Y = n(10),
        B = n(12),
        j = n(3),
        W = function() {
            function t(t) {
                var e = this;
                this.callbackManager = new H(this), this.spHost = "sp.auth.adobe.com", this.methodInvokingAuthorization = null, this.cachedAuthorization = !1, this.cachedAuthentication = !0, this.authenticationInProgress = !1, this.pendingAuthorizationInProgress = !1, this.authorizationExtraParameters = null, this.authenticationExtraParameters = null, this.resourceID = null, this.redirectURL = null, this.registrationCode = null, this.pendingCallsQueue = [], this.backgroundLoginInProgress = null, this.configuration = null, this.retryDueToInvalidIndividualization = !0, s.default.info("Version: 3.4.2-3ff3b09 " + (this.isDebug(t) ? "DEBUG" : "RELEASE")), this.loadProxy(t), s.default.setLevel(this.isDebug(t) ? s.LogLevel.DEBUG : s.LogLevel.ERROR), this.addGenericEvent("message", function(t) {
                    return e.passiveAuthnHandler(t)
                }), this.configureApassEndpoints(), this.addGenericEvent("message", function(t) {
                    return e.receiveMessage(t)
                })
            }
            return t.getInstance = function(e) {
                return this.instance || (this.instance = new t(e)), this.instance
            }, t.prototype.completeBackgroundLogout = function() {
                s.default.debug("completeBackgroundLogout"), this.callCallback("setAuthenticationStatus", 0, ""), this.callbackManager.onErrorHandler(l.N000)
            }, t.prototype.doBackgroundLogout = function(t) {
                s.default.debug("Performing background logout..."), this.callCallback("doBackgroundLogout", t)
            }, t.prototype.ditchTokens = function() {
                this.storageManager.switchToSessionStorage(), this.storageManager.resetStorage(), this.storageManager.switchToLocalStorage(), this.storageManager.resetStorage(), F.CACHE = null
            }, t.prototype.authnSuccess = function(t) {
                var e;
                if (P.checkPendingLogout(t)) this.ditchTokens();
                else {
                    this.configuration.resetAuthenticationProviderURL();
                    var n = d.getNodeText("authnToken", t);
                    e = new f(n)
                }
                if (e && e.isValid()) {
                    s.default.debug("Successfully retrieved authn token"), this.cachedAuthentication = !1;
                    var r = e.getMVPDID(),
                        o = this.mvpdManager.getMVPDByID(r);
                    this.mvpdManager.setCurrentMvpdID(r), o && !o.tempPass && this.storageManager.setCanAuthenticate(!0), this.storageManager.setAuthenticationToken(e);
                    var i = d.getNodeText("userMeta", t);
                    this.storageManager.setUserMetadata(i), F.CACHE = null, this.backgroundLoginInProgress && this.backgroundLoginSuccessHelper(e, o), this.configuration.initialized || this.configurationInitializedHelper()
                } else this.authnError(t, null, null, e)
            }, t.prototype.authnError = function(t, e, n, r) {
                var o = this;
                if (void 0 === r && (r = null), e === N.INDIVIDUALIZATION_ERROR_STATUS) s.default.warn("Authentication token retrieval failed due to individualization failure!"), this.callbackManager.onErrorHandler(t), this.completeAuthnError();
                else if (400 !== e || "34763" !== l.getReasonFromErrorResponse(n.responseText) && "34764" !== l.getReasonFromErrorResponse(n.responseText)) {
                    if (this.configuration.resetAuthenticationProviderURL(), this.callbackManager.onErrorHandler(l.N000), r) {
                        if (r.isExpired()) {
                            var i = this.mvpdManager.getCurrentMvpdID();
                            if (i) {
                                var a = this.mvpdManager.getMVPDByID(i);
                                a && a.tempPass && this.callbackManager.onErrorHandler(l.N111)
                            }
                        }
                    } else s.default.error("Error retrieving authentication token:", t);
                    401 === e && this.callbackManager.onErrorHandler(l.N130), this.completeAuthnError()
                } else this.retryDueToInvalidIndividualization ? (s.default.warn("Authentication token retrieval failed due to invalid individualization. Will retry the call!"), this.retryDueToInvalidIndividualization = !1, this.storageManager.clearDeviceId(), this.service.retrieveAuthenticationToken(function(t) {
                    return o.authnSuccess(t)
                }, function(t, e, n) {
                    return o.authnError(t, e, n)
                })) : "34763" === l.getReasonFromErrorResponse(n.responseText) && (this.callbackManager.onErrorHandler(l.N130), this.completeAuthnError())
            }, t.prototype.completeBackgroundLogin = function() {
                s.default.debug("completeBackgroundLogin");
                var t = this.mvpdManager.getCurrentMvpdID();
                if (t) {
                    var e = this.mvpdManager.getMVPDByID(t);
                    e && e.iFrameRequired && (s.default.debug("Calling destroyIFrame."), this.callCallback("destroyIFrame"))
                }
                this.configuration.retrieveAuthenticationToken()
            }, t.prototype.callCallback = function(t) {
                for (var e = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                setTimeout(function() {
                    switch (s.default.debug("Callback: " + t + "()"), t) {
                        case "reload":
                            location.reload();
                            break;
                        case "openIFrame":
                            createIFrame(n[1], n[2]);
                            var r = n[0] + "&" + h.a.param({
                                    redirect_url: e.getRedirectURL(n[3])
                                }),
                                o = document.getElementsByName("mvpdframe");
                            o.length > 0 ? (s.default.debug("iframe url: ", r), o[0].setAttribute("src", r)) : (s.default.debug("popup url: ", r), e.openLoginWindow(r, "mvpdframe"));
                            break;
                        case "navigateToURL":
                            var i = n[0] + "&" + h.a.param({
                                redirect_url: e.getRedirectURL(n[1])
                            });
                            s.default.debug("navigateToUrl:", i), n[2] ? e.openLoginWindow(i, "mvpdwindow") : window.location.href = i;
                            break;
                        case "doBackgroundLogout":
                            e.createHiddenIframe("com_adobe_pass_background_logout", n[0]);
                            break;
                        default:
                            var a = window.eval.call(window, t);
                            if (void 0 === a) return void s.default.warn("Callback < " + t + " > is NOT implemented");
                            a.apply(window, n)
                    }
                }, 4)
            }, t.prototype.bind = function(t, e) {
                void 0 === e && (e = void 0), s.default.debug("bind(" + t + ", " + e + ")"), this.callbackManager.bind(t, e)
            }, t.prototype.unbind = function(t, e) {
                void 0 === e && (e = void 0), this.callbackManager.unbind(t, e)
            }, t.prototype.getProxyMVPD = function() {
                var t = null,
                    e = this.storageManager.getAuthenticationToken();
                if (e) {
                    var n = e.getMVPDID(),
                        r = e.getSubMVPDID();
                    n && r && "" !== n && "" !== r && (t = n)
                }
                this.callCallback("proxyMVPD", t)
            }, t.prototype.setRequestor = function(e) {
                var n = this;
                void 0 === e && (e = "");
                for (var r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                u.a.isEmpty(S.error) || (this.callbackManager.onErrorHandler(S.error), S.error = null);
                var i = null,
                    a = {};
                Y(r, function(t) {
                    Array.isArray(t) ? i = t : a = t
                }), a.callSetConfig = "function" == typeof setConfig, t.clientInfo = new q(a);
                var c = t.clientInfo.getVisitorID();
                u.a.isEmpty(c) || (g.a.globalData[K.KEY_VISITOR_ID] = c), F.CACHE = null, t.requestorID = String(e), s.default.debug("processing setRequestor(" + t.requestorID + "," + i + ")"), this.service = new x(M.serviceProviderURL, t.requestorID), this.mvpdManager.clearRequestorMVPDs(), this.configuration = new M(t.requestorID, null != t.clientInfo && t.clientInfo.callSetConfig(), function() {
                    return n.onConfigurationInitialized()
                }), this.configuration.initialize(i), this.retryDueToInvalidIndividualization = !0
            }, t.prototype.getSelectedProvider = function() {
                if (this.configuration && this.configuration.initialized) {
                    s.default.debug("Processing getSelectedProvider()");
                    var t = "New User",
                        e = this.mvpdManager.getCurrentMvpdID();
                    if (e) {
                        var n = this.storageManager.getAuthenticationToken();
                        if (n) {
                            var r = n.getSubMVPDID();
                            r && "" !== r && (e = r), t = n.isValid() ? "User Authenticated" : "User Not Authenticated"
                        }
                    }
                    this.callCallback("selectedProvider", {
                        MVPD: e,
                        AE_State: t
                    })
                } else s.default.debug("put getSelectedProvider() in call queue"), this.pendingCallsQueue.push(new z(this, this.getSelectedProvider))
            }, t.prototype.setSelectedProvider = function(e, n) {
                void 0 === n && (n = null), this.registrationCode = n, this.configuration && this.configuration.initialized ? (s.default.debug("Processing setSelectedProvider()", e, n), e && e.length > 0 ? this.authenticationInProgress ? (this.mvpdManager.setCurrentMvpdID(e), this.service = new x(this.mvpdManager.getCurrentSP(), t.requestorID), this.sendTrackingData(a.TRACK_MVPD_SELECTION), this.isRedirectedToMvpdLoginPage() || (this.callbackManager.onErrorHandler(l.N500), this.callCallback("setAuthenticationStatus", 0, a.GENERIC_AUTHENTICATION_ERROR))) : String(e) === this.mvpdManager.getCurrentMvpdID() ? this.callCallback("setAuthenticationStatus", 1, a.PROVIDER_ALREADY_AUTHENTICATED) : (this.callbackManager.onErrorHandler(l.N500), this.callCallback("setAuthenticationStatus", 0, a.GENERIC_AUTHENTICATION_ERROR)) : (this.mvpdManager.setCurrentMvpdID(null), this.authenticationInProgress = !1, this.backgroundLoginInProgress = !1, this.pendingAuthorizationInProgress && this.completeAuthorizationInternalFlow(), this.callbackManager.onErrorHandler(l.N005), this.callCallback("setAuthenticationStatus", 0, a.PROVIDER_NOT_SELECTED_ERROR), this.sendTrackingData(a.TRACK_AUTHENTICATION_DETECTION, !1))) : (s.default.debug("put setSelectedProvider() in call queue"), this.pendingCallsQueue.push(new z(this, this.setSelectedProvider, e, n)))
            }, t.prototype.getAuthorization = function(t, e, n) {
                void 0 === e && (e = void 0), void 0 === n && (n = void 0), this.configuration && this.configuration.initialized ? (this.resourceID = t, this.authorizationExtraParameters = n, this.methodInvokingAuthorization = "getAuthorization", this.getAuthenticationInternalStatusMessages() === a.USER_AUTHENTICATED ? this.startAuthorizationInternalFlow(this.resourceID, this.authorizationExtraParameters) : (this.pendingAuthorizationInProgress = !0, this.getAuthentication([e, this.authorizationExtraParameters]))) : (s.default.debug("put getAuthorization() in call queue"), this.pendingCallsQueue.push(new z(this, this.getAuthorization, t, e, n)))
            }, t.prototype.checkAuthorization = function(t, e) {
                void 0 === e && (e = void 0), this.configuration && this.configuration.initialized ? (this.resourceID = t, this.authorizationExtraParameters = e, this.methodInvokingAuthorization = "checkAuthorization", this.getAuthenticationInternalStatusMessages() === a.USER_AUTHENTICATED ? this.startAuthorizationInternalFlow(this.resourceID, this.authorizationExtraParameters) : this.onAuthorizationError(null, null, {
                    code: a.USER_NOT_AUTHENTICATED_ERROR,
                    message: "",
                    resourceID: t
                })) : (s.default.debug("put checkAuthorization() in call queue"), this.pendingCallsQueue.push(new z(this, this.checkAuthorization, t, e)))
            }, t.prototype.getAuthentication = function(t, e) {
                void 0 === t && (t = void 0), void 0 === e && (e = void 0), this.configuration && this.configuration.initialized ? (s.default.debug("Processing getAuthentication()!"), t && (this.redirectURL = t), e && (this.authenticationExtraParameters = e), this.getAuthenticationInternalStatusMessages() === a.USER_AUTHENTICATED ? (this.callCallback("setAuthenticationStatus", 1, ""), this.sendTrackingData(a.TRACK_AUTHENTICATION_DETECTION, !0)) : this.startAuthenticationInternalFlow()) : (s.default.debug("put getAuthentication() in call queue"), this.pendingCallsQueue.push(new z(this, this.getAuthentication, t, e)))
            }, t.prototype.checkAuthentication = function() {
                if (this.configuration && this.configuration.initialized) {
                    s.default.debug("Processing checkAuthentication()!");
                    var t = void 0,
                        e = this.getAuthenticationInternalStatusMessages();
                    e === a.USER_AUTHENTICATED ? (t = 1, e = "", this.mvpdManager.getMVPDByID(this.storageManager.getMvpdID()).tempPass && this.callbackManager.onErrorHandler(l.N011), this.storageManager.getAuthenticationToken().isAuthNAll() && this.callbackManager.onErrorHandler(l.N010), this.sendTrackingData(a.TRACK_AUTHENTICATION_DETECTION, !0)) : (t = 0, this.sendTrackingData(a.TRACK_AUTHENTICATION_DETECTION, !1), this.callbackManager.onErrorHandler(e === a.USER_NOT_AUTHENTICATED_ERROR ? l.N000 : l.N500)), this.callCallback("setAuthenticationStatus", t, e)
                } else s.default.debug("put checkAuthentication() in call queue"), this.pendingCallsQueue.push(new z(this, this.checkAuthentication))
            }, t.prototype.getMetadata = function(t, e) {
                void 0 === e && (e = []), this.configuration && this.configuration.initialized ? this.storageManager.getAuthenticationToken() ? F.getValue(t, e) : this.callCallback("setMetadataStatus", t, null, null) : (s.default.debug("put getMetadata() in call queue"), this.pendingCallsQueue.push(new z(this, this.getMetadata, t, e)))
            }, t.prototype.checkPreauthorizedResources = function(t) {
                if (void 0 === t && (t = []), this.configuration && this.configuration.initialized) {
                    var e = this.storageManager.getAuthenticationToken();
                    if (e && e.isValid()) {
                        var n = e.getAuthorizedResources();
                        if (n && n.length > 0) {
                            for (var r = new Array, o = 0, i = n.length; o < i; o++) r.push(n[o].getAuthorizedResourceID().toUpperCase());
                            var a = this.intersectPreflight(t, r);
                            this.callCallback("preauthorizedResources", a)
                        } else this.requestedResourcesEqualsPreauthorizationCache(t) ? this.callCallback("preauthorizedResources", this.getAuthorizedResourcesFromPreauthorizationCache()) : this.service.checkPreauthorizedResources(t)
                    }
                } else s.default.debug("put checkPreauthorizedResources() in call queue"), this.pendingCallsQueue.push(new z(this, this.checkPreauthorizedResources, t))
            }, t.prototype.logout = function() {
                if (this.configuration && this.configuration.initialized) {
                    s.default.debug("Processing logout()!"), this.authenticationInProgress = !1;
                    var t = this.storageManager.getAuthenticationToken();
                    this.configuration.isValidRequestor() && this.ditchTokens(), this.service.logout(t)
                } else s.default.debug("put logout() in call queue"), this.pendingCallsQueue.push(new z(this, this.logout))
            }, t.prototype.getStorageData = function() {
                this.callCallback("storageData", this.storageManager.getStorageData())
            }, t.prototype.sendTrackingData = function(e, n, r, o) {
                void 0 === n && (n = !1), void 0 === r && (r = null), void 0 === o && (o = null);
                var i = null,
                    s = this.mvpdManager.getCurrentMvpdID(),
                    u = null,
                    c = this.storageManager.getAuthenticationToken();
                switch (c && c.getSubMVPDID() && (u = s, s = c.getSubMVPDID()), e) {
                    case a.TRACK_MVPD_SELECTION:
                        i = [this.mvpdManager.getCurrentMvpdID(), t.deviceInfo.deviceType, t.deviceInfo.clientType, t.deviceInfo.os];
                        break;
                    case a.TRACK_AUTHENTICATION_DETECTION:
                        n ? (i = [!0, s, B(c.getProperty("simpleTokenAuthenticationGuid")), this.cachedAuthentication, t.deviceInfo.deviceType, t.deviceInfo.clientType, t.deviceInfo.os, u], this.cachedAuthentication = !0) : i = [!1, null, null, null, t.deviceInfo.deviceType, t.deviceInfo.clientType, t.deviceInfo.os, null];
                        break;
                    case a.TRACK_AUTHORIZATION_DETECTION:
                        i = n ? [!0, s, B(c.getProperty("simpleTokenAuthenticationGuid")), this.cachedAuthorization, r, o, t.deviceInfo.deviceType, t.deviceInfo.clientType, t.deviceInfo.os, u] : [!1, s, c ? B(c.getProperty("simpleTokenAuthenticationGuid")) : null, this.cachedAuthorization, r, o, t.deviceInfo.deviceType, t.deviceInfo.clientType, t.deviceInfo.os, u]
                }
                this.callCallback("sendTrackingData", e, i)
            }, t.prototype.getService = function() {
                return this.service
            }, t.prototype.intersectPreflight = function(t, e) {
                var n = [];
                if (t && e)
                    for (var r = 0, o = t; r < o.length; r++) {
                        var i = o[r];
                        e.indexOf(i.toUpperCase()) >= 0 && n.push(i)
                    }
                return n
            }, t.prototype.getAuthorizedResourcesFromPreauthorizationCache = function() {
                for (var t = this.storageManager.getPreauthorizationCache(), e = new Array, n = 0, r = t.length; n < r; n++) !0 === t[n].authorized && e.push(t[n].id);
                return e
            }, t.prototype.requestedResourcesEqualsPreauthorizationCache = function(t) {
                var e = this.storageManager.getPreauthorizationCache();
                if (e.length !== t.length) return !1;
                for (var n = 0, r = t; n < r.length; n++) {
                    var o = r[n];
                    if (-1 === u.b.inArray(o, e)) return !1
                }
                return !0
            }, t.prototype.getAuthenticationInternalStatusMessages = function() {
                var t = this.storageManager.getAuthenticationToken();
                return t && t.isValid() ? this.mvpdManager.isValidMVPD(t.getMVPDID()) ? a.USER_AUTHENTICATED : a.GENERIC_AUTHENTICATION_ERROR : this.configuration.isValidRequestor() ? a.USER_NOT_AUTHENTICATED_ERROR : a.GENERIC_AUTHENTICATION_ERROR
            }, t.prototype.isRedirectedToMvpdLoginPage = function() {
                var e = !1;
                if (this.authenticationInProgress) {
                    var n = this.mvpdManager.getCurrentMvpdID();
                    if (n) {
                        var r = this.mvpdManager.getMVPDByID(n);
                        r && (this.backgroundLoginInProgress = t.clientInfo && t.clientInfo.isBackgroundLogin(), this.service.goToLoginPage(r, this.registrationCode, this.redirectURL, this.authenticationExtraParameters), e = !0)
                    }
                }
                return e
            }, t.prototype.backgroundLoginSuccessHelper = function(t, e) {
                this.backgroundLoginInProgress = !1, t && t.isAuthNAll() && this.callbackManager.onErrorHandler(l.N010), e && e.tempPass && this.callbackManager.onErrorHandler(l.N011), this.pendingAuthorizationInProgress ? null !== this.resourceID ? (s.default.debug("Performing authorization for pending resource: " + this.resourceID + " and extra parameters: " + this.authorizationExtraParameters), this.getAuthorization(this.resourceID, null, this.authorizationExtraParameters)) : (this.callbackManager.onErrorHandler(l.Z100), this.callCallback("tokenRequestFailed", this.resourceID, a.GENERIC_AUTHORIZATION_ERROR, ""), this.sendTrackingData(a.TRACK_AUTHORIZATION_DETECTION, !1, a.GENERIC_AUTHORIZATION_ERROR, ""), this.completeAuthorizationInternalFlow()) : (this.callCallback("setAuthenticationStatus", "1", ""), this.sendTrackingData(a.TRACK_AUTHENTICATION_DETECTION, !0))
            }, t.prototype.completeAuthorizationInternalFlow = function() {
                this.pendingAuthorizationInProgress = !1, this.methodInvokingAuthorization = null, this.authorizationExtraParameters = null, this.resourceID = null
            }, t.prototype.onAuthorizationComplete = function(t, e, n) {
                var r = this;
                if (P.checkPendingLogout(t)) return this.ditchTokens(), "34764" === P.getPendingLogoutReason(t) && (s.default.warn("Device id mismatch!"), this.callbackManager.onErrorHandler(l.SEC412), this.storageManager.clearDeviceId()), void("getAuthorization" === this.methodInvokingAuthorization ? this.getAuthorization(this.resourceID) : this.checkAuthorization(this.resourceID));
                try {
                    t = u.c.parseXML(t)
                } catch (r) {
                    return s.default.warn("Authorization failed"), void this.onAuthorizationError(t, e, n)
                }
                var o = d.getNodeText("authzToken", t);
                if (!o) return s.default.warn("Authorization failed"), void this.onAuthorizationError(t, e, n);
                var i = new f(o);
                if (i && i.isValid()) {
                    s.default.debug("Successfully retrieved authorization token!"), this.storageManager.setAuthorizationToken(i);
                    var a = d.getNodeText("userMeta", t);
                    a && (s.default.debug("Merging user metadata tokens."), this.storageManager.mergeUserMetadata(a), F.CACHE = null), this.service.retrieveMediaToken(i, JSON.stringify({}), function(t, e, n) {
                        return r.onMediaTokenComplete(t, e, n)
                    }, function(t, e, n) {
                        return r.onMediaTokenError(t, e, n)
                    })
                } else this.onAuthorizationError(t, e, n)
            }, t.prototype.onMediaTokenComplete = function(e, n, r) {
                var o = new f(e),
                    i = o.getResourceID();
                if (P.checkPendingLogout(e)) this.ditchTokens(), "58772" === P.getPendingLogoutReason(e) && (s.default.warn("Device id mismatch!"), this.callbackManager.onErrorHandler(l.SEC412), this.storageManager.clearDeviceId()), "getAuthorization" === this.methodInvokingAuthorization ? this.getAuthorization(i) : this.checkAuthorization(i);
                else {
                    s.default.debug("Successfully retrieved media token!"), this.callCallback("setToken", i, e), this.sendTrackingData(a.TRACK_AUTHORIZATION_DETECTION, !0);
                    var u = this.storageManager.getAuthorizationToken(t.requestorID, i);
                    u && u.isAuthZAll() && this.callbackManager.onErrorHandler(l.Z010(i));
                    var c = this.mvpdManager.getCurrentMvpd();
                    c && c.tempPass && this.callbackManager.onErrorHandler(l.Z011(i)), this.completeAuthorizationInternalFlow()
                }
            }, t.prototype.onAuthorizationError = function(t, e, n) {
                var r = n.resourceID;
                if (e === N.INDIVIDUALIZATION_ERROR_STATUS) s.default.warn("Authorization token retrieval failed due to individualization failure!"), this.callbackManager.onErrorHandler(t), this.callCallback("tokenRequestFailed", r, a.GENERIC_AUTHORIZATION_ERROR, ""), this.sendTrackingData(a.TRACK_AUTHORIZATION_DETECTION, !1, a.GENERIC_AUTHORIZATION_ERROR, ""), this.completeAuthorizationInternalFlow();
                else if (400 === e && "34763" === l.getReasonFromErrorResponse(n.responseText)) this.storageManager.clearDeviceId(), this.retryDueToInvalidIndividualization ? (s.default.warn("Authorization token retrieval failed due to invalid individualization. Will retry the call!"), this.retryDueToInvalidIndividualization = !1, this.startAuthorizationInternalFlow(r, this.authorizationExtraParameters)) : (this.callbackManager.onErrorHandler(l.N130), this.completeAuthorizationInternalFlow());
                else {
                    var o = this.parseErrorResponse(n);
                    this.callbackManager.onErrorHandler(l.fromAuthzErrorResponse(n, r)), this.callCallback("tokenRequestFailed", r, o.code, o.message), this.sendTrackingData(a.TRACK_AUTHORIZATION_DETECTION, !1, o.code, o.message), this.completeAuthorizationInternalFlow()
                }
            }, t.prototype.onMediaTokenError = function(t, e, n) {
                if (e === N.INDIVIDUALIZATION_ERROR_STATUS) s.default.warn("Media token retrieval failed due to individualization failure!"), this.callbackManager.onErrorHandler(t), this.callCallback("tokenRequestFailed", this.resourceID, a.GENERIC_AUTHORIZATION_ERROR, ""), this.sendTrackingData(a.TRACK_AUTHORIZATION_DETECTION, !1, a.GENERIC_AUTHORIZATION_ERROR, ""), this.completeAuthorizationInternalFlow();
                else if (400 === e && "34763" === l.getReasonFromErrorResponse(n.responseText)) this.storageManager.clearDeviceId(), this.retryDueToInvalidIndividualization ? (s.default.warn("Media token retrieval failed due to invalid individualization. Will retry the call!"), this.retryDueToInvalidIndividualization = !1, this.startAuthorizationInternalFlow(this.resourceID, this.authorizationExtraParameters)) : (this.callbackManager.onErrorHandler(l.N130), this.completeAuthorizationInternalFlow());
                else {
                    var r = this.parseErrorResponse(n);
                    this.callCallback("tokenRequestFailed", this.resourceID, a.USER_NOT_AUTHORIZED_ERROR, r.message), this.sendTrackingData(a.TRACK_AUTHORIZATION_DETECTION, !1, a.USER_NOT_AUTHORIZED_ERROR, r.message), this.completeAuthorizationInternalFlow()
                }
            }, t.prototype.startAuthorizationInternalFlow = function(e, n) {
                var r = this,
                    o = this.storageManager.getAuthorizationToken(t.requestorID, e);
                o && o.isValid() ? (s.default.debug("Authorization token found and valid!"), this.cachedAuthorization = !0, this.service.retrieveMediaToken(o, JSON.stringify({}), function(t, e, n) {
                    return r.onMediaTokenComplete(t, e, n)
                }, function(t, e, n) {
                    return r.onMediaTokenError(t, e, n)
                })) : (s.default.debug("Authorization token not found or invalid!"), this.cachedAuthorization = !1, this.service.retrieveAuthorizationToken(Array.isArray(e) ? e[0] : e, n, function(t, e, n) {
                    return r.onAuthorizationComplete(t, e, n)
                }, function(t, e, n) {
                    return r.onAuthorizationError(t, e, n)
                }))
            }, t.prototype.completeAuthnError = function() {
                this.backgroundLoginInProgress && this.backgroundLoginFailHelper(), this.configuration.initialized || this.configurationInitializedHelper()
            }, t.prototype.backgroundLoginFailHelper = function() {
                this.backgroundLoginInProgress = !1, this.pendingAuthorizationInProgress ? (this.callCallback("tokenRequestFailed", this.resourceID, a.GENERIC_AUTHORIZATION_ERROR, ""), this.sendTrackingData(a.TRACK_AUTHORIZATION_DETECTION, !1, a.GENERIC_AUTHORIZATION_ERROR, ""), this.completeAuthorizationInternalFlow()) : (this.callCallback("setAuthenticationStatus", "0", a.USER_NOT_AUTHENTICATED_ERROR), this.sendTrackingData(a.TRACK_AUTHENTICATION_DETECTION, !1))
            }, t.prototype.mustRetrieveAuthenticationPerRequestorForMvpd = function(t) {
                return t && t.authPerAggregator && t.passiveAuthnEnabled && null === this.storageManager.getAuthenticationToken() && this.storageManager.searchForFirstValidAuthenticationTokenForCurrentMvpd()
            }, t.prototype.onConfigurationInitialized = function() {
                var e = this.mvpdManager.getCurrentSP();
                u.a.isEmpty(e) || (this.service = new x(e, t.requestorID));
                var n = this.mvpdManager.getCurrentMvpdID(),
                    r = this.mvpdManager.getMVPDByID(n);
                this.mvpdManager.switchToCurrentMvpdStorageType(n), this.mustRetrieveAuthenticationPerRequestorForMvpd(r) ? (s.default.debug("Attempt to retrieve authn per requestor token."), this.doPassiveAuthentication(), this.callbackManager.onErrorHandler(l.N001)) : this.configurationInitializedHelper()
            }, t.prototype.configurationInitializedHelper = function() {
                this.removeGenericEvent("configInit", this.onConfigurationInitialized);
                var e = this.mvpdManager.getCurrentSP();
                if (u.a.isEmpty(e) || (this.service = new x(e, t.requestorID)), this.configuration.initialized = !0, t.clientInfo && t.clientInfo.callSetConfig()) {
                    var n = this.configuration.getConfigForProgrammer();
                    n || (n = ""), this.callCallback("setConfig", n)
                }
                for (var r = 0, o = this.pendingCallsQueue; r < o.length; r++) {
                    var i = o[r];
                    s.default.debug("Executing pending call: "), i.execute()
                }
                this.pendingCallsQueue.length = 0
            }, t.prototype.startAuthenticationInternalFlow = function() {
                this.authenticationInProgress = !0;
                var t = !1;
                if (this.storageManager.getCanAuthenticate() && (this.storageManager.setCanAuthenticate(!1), t = this.isRedirectedToMvpdLoginPage()), !t) {
                    this.storageManager.setCanAuthenticate(!1);
                    var e = [],
                        n = this.mvpdManager.getRequestorMVPDs();
                    for (var r in n)
                        if (n.hasOwnProperty(r)) {
                            var o = n[r];
                            e.push({
                                ID: o.id,
                                displayName: o.displayName,
                                logoURL: o.logoUrl
                            })
                        }
                    e.length > 0 ? this.callCallback("displayProviderDialog", e) : (this.callbackManager.onErrorHandler(l.N500), this.callCallback("setAuthenticationStatus", 0, a.GENERIC_AUTHENTICATION_ERROR))
                }
            }, t.prototype.doPassiveAuthentication = function() {
                s.default.debug("Performing passive authentication...");
                var e = this.mvpdManager.getCurrentMvpdID(),
                    n = this.mvpdManager.getMVPDByID(e),
                    r = this.service.getLoginPageUrl(!0, n, this.registrationCode, this.authenticationExtraParameters, !1);
                this.backgroundLoginInProgress = t.clientInfo && t.clientInfo.isBackgroundLogin(), u.b.createHiddenIframe("com_adobe_pass_passive_authn", r)
            }, t.prototype.completePassiveAuthentication = function() {
                var t = this;
                s.default.debug("completePassiveAuthentication"), this.service.retrieveAuthenticationToken(function(e) {
                    return t.authnSuccess(e)
                }, function(e, n, r) {
                    return t.authnError(e, n, r)
                })
            }, t.prototype.configureApassEndpoints = function() {
                var t = new j(G.ScriptLocation.get(), null, !0);
                t && t.host && t.host.match(/(.*)-staging.(.*)/) && (this.spHost = "sp.auth-staging.adobe.com"), M.serviceProviderURL = "https://" + this.spHost + "/adobe-services", s.default.info("Running against: " + this.spHost)
            }, t.prototype.addGenericEvent = function(t, e) {
                window.addEventListener ? window.addEventListener(t, e, !1) : window.attachEvent("on" + t, e)
            }, t.prototype.removeGenericEvent = function(t, e) {
                window.removeEventListener ? window.removeEventListener(t, e, !1) : window.detachEvent("on" + t, e)
            }, t.prototype.passiveAuthnHandler = function(t) {
                t && "PASSIVE_AUTHN_COMPLETE" === t.data && this.completePassiveAuthentication()
            }, t.prototype.isDebug = function(t) {
                return -1 !== document.cookie.indexOf("debug") || t && t.hasOwnProperty("query") && t.query.hasOwnProperty("debug")
            }, t.prototype.getRedirectURL = function(t) {
                return t && "null" !== t && t.length > 4 ? t : window.location.href
            }, t.prototype.createHiddenIframe = function(t, e) {
                var n = document.querySelector("iframe[name=" + t + "]");
                if (n) n.setAttribute("src", e);
                else {
                    var r = document.createElement("iframe");
                    r.setAttribute("name", t), r.setAttribute("src", e), r.setAttribute("style", "display:none"), document.body.appendChild(r)
                }
            }, t.prototype.receiveMessage = function(t) {
                var e = this;
                if (t.origin && !/auth.*\.adobe\.com/.test(t.origin)) return void s.default.trace("Ignoring postmessage from origin " + t.origin);
                var n = {
                        PROXY_LOADED: function() {
                            return e.completeInitialization()
                        },
                        LOGIN_COMPLETE: this.completeBackgroundLogin,
                        LOGOUT_COMPLETE: this.completeBackgroundLogout
                    },
                    r = n[t.data];
                return r ? void r.call(this) : void 0
            }, t.prototype.completeInitialization = function() {
                var t = this;
                this.mvpdManager = m.getInstance(), this.storageManager = S.getInstance(), this.storageManager.syncStorage().then(function() {
                    s.default.debug("Initial storage sync complete!"), t.callCallback("entitlementLoaded")
                })
            }, t.prototype.loadProxy = function(t) {
                var e = this.determineProxyHost(t);
                s.default.info("Loading proxy from: " + e);
                var r = t.pathname.replace("AccessEnabler.js", "");
                g.a.globalOptions.proxyURL = "https://" + e + r + "AccessEnablerProxy.html";
                var o = g.a.globalOptions.proxyURL + "?" + n.h;
                this.isDebug(t) && (o += "&debug"), o += "#" + encodeURIComponent(document.location.href), window.accessEnablerProxy = document.createElement("iframe"), accessEnablerProxy.setAttribute("name", "adobeIFrame"), accessEnablerProxy.setAttribute("id", "adobeIFrame"), accessEnablerProxy.setAttribute("style", "display:none"), accessEnablerProxy.setAttribute("src", o), d.appendChild(accessEnablerProxy)
            }, t.prototype.determineProxyHost = function(t) {
                if (t) switch (t.hostname) {
                    case "entitlement.auth.adobe.com":
                        return s.default.info("Environment: PRODUCTION"), "sp.auth.adobe.com";
                    case "entitlement.auth-staging.adobe.com":
                        return s.default.info("Environment: STAGING"), "sp.auth-staging.adobe.com";
                    default:
                        return s.default.info("Environment: CUSTOM"), t.host
                }
            }, t.prototype.parseErrorResponse = function(t) {
                var e, n;
                return "code" in t && "message" in t ? (s.default.warn("Received a non xhr object!"), e = t) : 400 === t.status ? (S.getInstance().clearStorage(), e = {
                    code: a.GENERIC_AUTHORIZATION_ERROR,
                    message: t.statusText
                }) : t.responseText ? (n = t.responseText.split("details")[1], n && n.length > 2 && (n = n.substring(1, n.length - 2)), e = {
                    code: a.USER_NOT_AUTHORIZED_ERROR,
                    message: n
                }) : e = {
                    code: a.GENERIC_AUTHORIZATION_ERROR,
                    message: ""
                }, e
            }, t.prototype.openLoginWindow = function(t, e) {
                var n = this;
                setTimeout(function() {
                    var r = window.open(t, e);
                    if (u.b.isIE()) {
                        s.default.warn("Internet Explorer 11 or older detected: using a timer to handle login completion...");
                        var o = setInterval(function() {
                            r.closed && (s.default.debug("Login window closed"), clearInterval(o), n.completeBackgroundLogin())
                        }, 200)
                    }
                }, 150)
            }, t.clientInfo = null, t.deviceInfo = {
                deviceType: "",
                clientType: "",
                os: ""
            }, t.requestorID = null, Z([V], t.prototype, "completeBackgroundLogout", null), Z([V], t.prototype, "doBackgroundLogout", null), Z([V], t.prototype, "ditchTokens", null), Z([V], t.prototype, "authnSuccess", null), Z([V], t.prototype, "authnError", null), Z([V], t.prototype, "completeBackgroundLogin", null), Z([V], t.prototype, "callCallback", null), Z([V], t.prototype, "bind", null), Z([V], t.prototype, "unbind", null), Z([V], t.prototype, "getProxyMVPD", null), Z([V], t.prototype, "setRequestor", null), Z([V], t.prototype, "getSelectedProvider", null), Z([V], t.prototype, "setSelectedProvider", null), Z([V], t.prototype, "getAuthorization", null), Z([V], t.prototype, "checkAuthorization", null), Z([V], t.prototype, "getAuthentication", null), Z([V], t.prototype, "checkAuthentication", null), Z([V], t.prototype, "getMetadata", null), Z([V], t.prototype, "checkPreauthorizedResources", null), Z([V], t.prototype, "logout", null), Z([V], t.prototype, "getStorageData", null), t
        }()
}]);
//# sourceMappingURL=AccessEnabler.js.map