var CS_CONF = {
    "projectId": 2355,
    "status": 1,
    "hostnames": ["doubleclick.net", "adobe.com", "iperceptions.com", "mountsinai.org", "cathaypacific.com", "tycg.gov.tw", "adobeexchange.com"],
    "crossDomainTracking": 0,
    "consentRequired": 1,
    "collectHtml": 0,
    "allowSubdomains": 1,
    "visitorCookieTimeout": 34164000000,
    "sampleRate": 1,
    "recordingRate": 1,
    "replayRecordingRate": 0,
    "validationRate": 10,
    "jquery": false,
    "lastTrackingDraw": null,
    "trackerDomain": "c.clicktale.net",
    "recordingDomain": "r.clicktale.net",
    "ed": "l.clicktale.net/log/web",
    "eMerchandisingEnabled": 0,
    "eMerchandisingDomain": "e.contentsquare.net",
    "triggerSessionReplayEnabled": 0,
    "triggerSessionReplayRegex": null,
    "dynamicIdRegex": null
};
! function(t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 1)
}([function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = /(@import\s+url\s*\(\s*(["'])?([^"')]+)(\2)\s*\))|(@import\s+(["'])([^"']+)\6)|(url\s*\(\s*(["'])?([^"')]+)(\9)\s*\))/g;

    function r(t, e) {
        return t.replace(n, function() {
            for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
            var n = t[3] || t[7],
                r = t[10],
                o = (n || r).trim();
            return (n ? "@import " : "") + "url(" + e(o) + ")"
        })
    }
    e.replaceIn = r, e.extractFrom = function(t) {
        var e = [];
        return r(t, function(t) {
            return e.push(t), t
        }), e
    }
}, function(t, e, i) {
    "use strict";
    i.r(e);
    var n = {};
    i.r(n), i.d(n, "get", function() {
        return Z
    }), i.d(n, "getRequestParameters", function() {
        return tt
    });
    var r = {};

    function o(t) {
        return t.replace(/([#;&,.+*~':"!^$[\]()<=>|/%?@`{}\\ ])/g, "\\$1")
    }
    i.r(r), i.d(r, "getRequestParameters", function() {
        return Ci
    });
    var s = "detached";

    function a(t) {
        for (var e = t, i = [e]; null !== e.parentNode;) e = e.parentNode, i.push(e);
        return function(t) {
            return y.isValidElement(t)
        }(e) && i.push(s), {
            ancestors: i,
            selectionRoot: e
        }
    }

    function c(t) {
        return Array.prototype.slice.call(t)
    }
    var u = 1,
        h = 9;
    var p = [/\d{4}/, /^ember\d+$/],
        l = "data-cs-override-id",
        f = "data-cs-dynamic-id";

    function d(t, e, i, n) {
        var r = function(t) {
            return o(t.localName.toLowerCase())
        }(t);
        if (function(t, e) {
                var i = g(t);
                return i && i.match(/^[\w-]+$/) && v(l, i, e)
            }(t, i)) {
            var a = g(t);
            return {
                hasUniqueIdentifier: !0,
                elementSelector: r + "[" + l + '="' + a + '"]'
            }
        }
        var d = function(t) {
            var e = t.getAttribute("id");
            return e ? o(e) : e
        }(t);
        return function(t, e, i, n) {
            return e && ! function(t) {
                return null !== g(t)
            }(t) && ! function(t, e, i) {
                return t.hasAttribute(f) || function(t, e) {
                    var i = !1;
                    t && e && (i = e.test(t));
                    return t && (p.some(function(e) {
                        return e.test(t)
                    }) || i)
                }(e, i)
            }(t, e, n) && function(t, e) {
                return t && v("id", t, e)
            }(e, i)
        }(t, d, i, n) ? {
            hasUniqueIdentifier: !0,
            elementSelector: r + "#" + d
        } : {
            hasUniqueIdentifier: !1,
            elementSelector: r + ":eq(" + function(t, e) {
                return t === s || t.nodeType === h ? 0 : c(t.childNodes).filter(function(t) {
                    return t.nodeType === u && t.localName.toLowerCase() === e.localName.toLowerCase()
                }).indexOf(e)
            }(e, t) + ")"
        }
    }

    function g(t) {
        return t.getAttribute(l)
    }

    function v(t, e, i) {
        try {
            return 1 === i.querySelectorAll("[" + t + '="' + e + '"]').length
        } catch (t) {
            if ("SyntaxError" !== t.name) throw t
        }
        return !1
    }
    var y, m = 11;

    function S(t, e, i, n) {
        var r = t.shift();
        if (0 === t.length) return E(r, i, n);
        var o = d(r, t[0], e, n),
            s = o.elementSelector,
            a = o.hasUniqueIdentifier;
        if (!i && a) return "" + E(t[t.length - 1], i, n) + s;
        var c = S(t, e, i, n);
        return (c ? c + ">" : "") + s
    }

    function E(t, e, i) {
        if (t === s) return "|detached|";
        if (t.host) {
            var n = a(t.host);
            return S(n.ancestors, n.selectionRoot, e, i) + "|shadow-root|"
        }
        return t.nodeType === m ? "|fragment|" : ""
    }

    function w(t) {
        return T(t) && ("number" == typeof t || t instanceof Number) && !isNaN(t)
    }

    function C(t) {
        return t === parseInt(t, 10)
    }

    function R(t) {
        return T(t) && ("string" == typeof t || t instanceof String)
    }

    function T(t) {
        return void 0 !== t
    }

    function b(t) {
        return T(t) && null !== t
    }

    function k(t, e, i) {
        return C(t) && t >= e && t <= i
    }

    function P(t) {
        return "function" == typeof t
    }

    function A(t) {
        return t instanceof Element
    }! function(t) {
        function e(t) {
            return !!t && "localName" in t && "getAttribute" in t && "hasAttribute" in t && "parentNode" in t
        }
        t.INVALID_ELEMENT = "INVALID_ELEMENT", t.isValidElement = e, t.getElementPath = function(i, n) {
            var r = void 0 === n ? {} : n,
                o = r.fullPath,
                s = void 0 !== o && o,
                c = r.dynamicIdRegex,
                u = void 0 === c ? null : c,
                h = function(t) {
                    return t && "jquery" in t && 1 === t.length ? t[0] : t
                }(i);
            if (h === document) return "";
            if (!e(h)) return t.INVALID_ELEMENT;
            var p = a(h);
            return S(p.ancestors, p.selectionRoot, s, u)
        }
    }(y || (y = {})), window.CSPathComputation = window.CSPathComputation || y;
    var O = function() {
        function t() {}
        return t.preventConflict = function(e) {
            window.jQuery_cs = t.getJQueryInstance(), window.jQuery_cs && e.jquery && window.jQuery_cs.noConflict(!0)
        }, t.getJQueryInstance = function() {
            return T(window.jQuery) ? window.jQuery : T(window.$) && T(window.$.fn) && T(window.$.fn.jquery) ? window.$ : null
        }, t
    }();

    function I() {
        return Math.floor(Date.now() / 1e3)
    }

    function x() {}

    function N(t, e) {
        return 0 === t.lastIndexOf(e, 0)
    }

    function _(t, e) {
        return -1 !== t.indexOf(e, t.length - e.length)
    }
    var L = 34164e6;

    function D(t) {
        return M() < t
    }

    function M() {
        return Math.floor(1e4 * Math.random()) / 100
    }
    var V, q, U = 0,
        z = function() {
            function t(t) {
                this.trackerDomain = t.trackerDomain, this.errorDomain = t.ed, this.projectId = t.projectId, this.status = t.status, this.hostnames = t.hostnames, this.crossDomainTracking = !!t.crossDomainTracking, this.collectHtml = !!t.collectHtml, this.consentRequired = !!t.consentRequired, this.allowSubdomains = !!t.allowSubdomains, this.visitorCookieTimeout = t.visitorCookieTimeout || L, this.sampleRate = t.sampleRate, this.analysisRecordingRate = t.recordingRate, this.replayRecordingRate = t.replayRecordingRate, this.validationRate = t.validationRate, this.jquery = !!t.jquery, this.lastTrackingDraw = t.lastTrackingDraw || 1, this.useHttps = !0, this.recordingDomain = t.recordingDomain, this.eMerchandisingDomain = t.eMerchandisingDomain, this.eMerchandisingEnabled = t.eMerchandisingEnabled, this.triggerSessionReplayEnabled = t.triggerSessionReplayEnabled, this.triggerSessionReplayRegex = this.computeTriggerSessionReplayRegex(t.triggerSessionReplayRegex), this.metricRate = void 0 === t.metricRate ? U : t.metricRate, this.dynamicIdRegex = t.dynamicIdRegex ? new RegExp(t.dynamicIdRegex) : null
            }
            return t.prototype.getTrackerUri = function() {
                return this.protocol() + "://" + this.trackerDomain
            }, t.prototype.getRecordingUri = function() {
                return this.protocol() + "://" + this.recordingDomain
            }, t.prototype.getEMerchandisingUri = function() {
                return this.protocol() + "://" + this.eMerchandisingDomain
            }, t.prototype.getErrorUri = function() {
                return this.protocol() + "://" + this.errorDomain
            }, t.prototype.protocol = function() {
                return this.useHttps ? "https" : "http"
            }, t.prototype.isProjectActive = function() {
                return 1 === this.status
            }, t.prototype.processOptionOverrides = function(t) {
                var e = this;
                t && t.forEach && t.forEach(function(t) {
                    var i = t[0],
                        n = t.slice(1);
                    if ("setOption" === i) {
                        var r = n[0],
                            o = n[1];
                        e.setOverridableField(r, o)
                    }
                })
            }, t.prototype.setOverridableField = function(t, e) {
                "trackerDomain" === t && (this.trackerDomain = e), "recordingDomain" === t && (this.recordingDomain = e), "errorDomain" === t && (this.errorDomain = e), "useHttps" === t && (this.useHttps = !!e)
            }, t.prototype.computeTriggerSessionReplayRegex = function(t) {
                return t ? new RegExp("^" + t + "$") : null
            }, t.prototype.getRequestParameters = function() {
                return {
                    pid: "" + this.projectId
                }
            }, t
        }();
    ! function(t) {
        var e, i = "{domain}/tag/bridge.html?v={version}#{token}",
            n = {
                loadBundle: function(t) {
                    var a = t.source,
                        c = t.data;
                    if (o(c)) {
                        var p = function() {
                            ! function(t, e) {
                                var i = document.createElement("script");
                                i.type = "text/javascript", i.async = !0, i.src = t, i.onload = e, document.head.appendChild(i)
                            }(r("{domain}/tag/tag.bundle.js?v={version}", c), function() {
                                return a.postMessage("csBundleLoaded", t.origin)
                            })
                        };
                        e = c.token, h(n.loadBundle), s(t.origin) ? p() : function(t, e) {
                            var n = function(t) {
                                    var e = document.createElement("iframe");
                                    return e.src = t, e.id = "content-square-bridge", e.setAttribute("style", "display: none !important; visibility: hidden !important;"), e
                                }(r(i, t)),
                                o = function(t) {
                                    t.source === n.contentWindow && "TOKEN_VALID" === t.data && (h(o), n.remove(), e())
                                };
                            u(o), document.head.appendChild(n)
                        }(c, p)
                    }
                }
            };

        function r(t, e) {
            return t.replace("{version}", e.version).replace("{token}", e.token).replace("{domain}", e.domain)
        }

        function o(t) {
            return t && "csBundleInjection" === t.type && s(t.domain) && c(t.version) && a(t.token)
        }

        function s(t) {
            return /^https?:\/\/[a-zA-Z0-9\.\-]+\.(content-square\.fr|contentsquare\.com)$/.test(t)
        }

        function a(t) {
            return /^[a-zA-Z0-9]+$/.test(t)
        }

        function c(t) {
            return /^[a-zA-Z0-9\.]+$/.test(t)
        }

        function u(t) {
            window.addEventListener("message", t, !1)
        }

        function h(t) {
            window.removeEventListener("message", t, !1)
        }
        t.getToken = function() {
            return e
        }, t.isAuthorizedIncomingMessage = o, t.isAuthorizedDomain = s, t.isAuthorizedToken = a, t.isAuthorizedTagVersion = c, t.isActivable = function() {
            var t = window.opener || window.parent;
            return window !== t && window.addEventListener
        }, t.waitForBundleInjection = function() {
            u(n.loadBundle)
        }, t.listen = u, t.removeListener = h
    }(V || (V = {})),
    function(t) {
        var e, i = window.opener || window.parent,
            n = "tag",
            r = [/^https?:\/\/.*\.content-square\.fr$/, /^https:\/\/.*\.contentsquare\.com$/],
            o = {
                ping: function(t) {
                    "ping" === t.data && s(t.origin) && (e = t.origin, h(o.ping), u(o.insertMessageScript), a(c("jquery.js"), function() {
                        window.jQuery_cs = window.jQuery.noConflict(!0), a(c("utils.js"))
                    }))
                },
                insertMessageScript: p(function(t) {
                    var e = t.data;
                    "string" == typeof e && "ping" !== e && (h(o.insertMessageScript), a(e))
                })
            };

        function s(t) {
            return r.some(function(e) {
                return e.test(t)
            })
        }

        function a(t, i) {
            var r = document.createElement("script");
            r.type = "text/javascript", r.async = !0;
            var o = e.replace(/^https?:/, "");
            r.src = o + "/" + n + "/" + t, r.onload = i, document.getElementsByTagName("head")[0].appendChild(r)
        }

        function c(t) {
            return t + "?cb=" + (new Date).getTime()
        }

        function u(t) {
            window.addEventListener("message", t, !1)
        }

        function h(t) {
            window.removeEventListener("message", t, !1)
        }

        function p(t) {
            return function(i) {
                i.origin === e && t(i)
            }
        }
        t.getToken = function() {
            return V.getToken()
        }, t.isActivable = function() {
            return window !== i && window.addEventListener
        }, t.isAuthorizedDomain = s, t.waitForConnection = function() {
            u(o.ping), V.waitForBundleInjection()
        }, t.listen = u, t.removeListener = h, t.secureListener = p, t.post = function(t) {
            e && i.postMessage(t, e)
        }
    }(q || (q = {}));
    var H = window.CSFrameCommunication || q;
    var B, F = function() {
        function t() {}
        return t.check = function() {
            return void 0 === Object.assign || this.tryObjectAssign()
        }, t.tryObjectAssign = function() {
            try {
                var t = {},
                    e = Object.assign(t, {
                        a: 1
                    }, {
                        b: 2,
                        c: {
                            d: 4
                        }
                    }),
                    i = {
                        a: 1,
                        b: 2,
                        c: {
                            d: 4
                        }
                    };
                return JSON.stringify(e) === JSON.stringify(i) && JSON.stringify(t) === JSON.stringify(i)
            } catch (t) {
                return !1
            }
        }, t
    }();
    ! function(t) {
        function e(t) {
            var e = new RegExp("(^|;)[ ]*" + t + "=([^;]*)").exec(document.cookie);
            return e ? decodeURIComponent(e[2]) : null
        }

        function i(e, i, n, r) {
            var o = encodeURIComponent("" + i),
                s = n === t.CURRENT_DOMAIN ? void 0 : n,
                a = function(t) {
                    if (w(t)) return new Date(Date.now() + t);
                    return t
                }(r),
                c = a ? ";expires=" + a.toUTCString() : "",
                u = b(s) ? ";domain=" + s : "";
            return document.cookie = e + "=" + o + c + ";path=/" + u, !0
        }

        function n(t, n) {
            e(t) && i(t, "", n, -1)
        }

        function r() {
            for (var t = window.location.hostname.split("."), r = t.pop(), o = "_cs_" + (new Date).getTime(); t.length && null === e(o);) i(o, o, r = [t.pop(), r].join("."));
            return n(o, r), r
        }
        t.CURRENT_DOMAIN = "CURRENT_DOMAIN", t.get = e, t.set = i, t.remove = n, t.getCookieDomain = function(e) {
            return e ? r() : t.CURRENT_DOMAIN
        }, t.getRootDomain = r
    }(B || (B = {}));
    var j, G = function() {
            function t(t) {
                this.configuration = t
            }
            return t.prototype.canTrack = function() {
                return this.isBrowsingContextSupported() && this.canTrackProject()
            }, t.prototype.canTrackProject = function() {
                return this.configuration.isProjectActive() && this.matchHostnames()
            }, t.prototype.matchHostnames = function() {
                return this.configuration.hostnames.some(function(t) {
                    return window.location.hostname.indexOf(t) >= 0
                })
            }, t.prototype.isBrowsingContextSupported = function() {
                return this.areCookieEnabled() && !this.isDocPrerendered() && this.isBrowserSupported() && F.check()
            }, t.prototype.areCookieEnabled = function() {
                return "cookie" in document && (document.cookie.length > 0 || B.set("_cs_t", 1, B.CURRENT_DOMAIN) && document.cookie.indexOf("_cs_t") > -1)
            }, t.prototype.isDocPrerendered = function() {
                return "visibilityState" in document && "prerender" === document.visibilityState
            }, t.prototype.isBrowserSupported = function() {
                return "pageXOffset" in window && "pageYOffset" in window && "onpagehide" in window && function() {
                    var t = "CSLocalStorageTest";
                    try {
                        return localStorage.setItem(t, t), localStorage.removeItem(t), !0
                    } catch (t) {
                        return !1
                    }
                }() && window.JSON && window.JSON.parse && window.JSON.stringify && window.addEventListener && window.removeEventListener && window.Node && Array.prototype.filter && Array.prototype.forEach && document.querySelectorAll && Date.now && Object.keys && window.performance
            }, t
        }(),
        W = function() {
            function t(t, e, i) {
                this.configuration = t, this.request = e, this.pii = i, this.isLoggingActive = !1, this.logCount = 0
            }
            return t.prototype.init = function() {
                var t = 0 === this.configuration.validationRate || this.configuration.validationRate ? this.configuration.validationRate : 10;
                this.isLoggingActive = D(t), this.request.init()
            }, t.prototype.logMessage = function(t) {
                var e = {
                    message: t,
                    app: "uxa",
                    level: "WARNING",
                    stacktrace: this.getContext()
                };
                this.sendLog(e)
            }, t.prototype.logError = function(t) {
                this.tryToExecute("logError", function() {
                    throw new Error(t)
                })()
            }, t.prototype.tryToExecute = function(t, e) {
                var i = this;
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    try {
                        return e.apply(void 0, n)
                    } catch (e) {
                        try {
                            var o = {
                                app: "uxa",
                                level: "ERROR",
                                message: i.pii.anonymize((e.message || e.toString()) + " function " + t),
                                stacktrace: (e.stack || "No stacktrace") + " " + i.getContext()
                            };
                            i.sendLog(o)
                        } catch (t) {}
                    }
                }
            }, t.prototype.sendLog = function(t) {
                this.isLoggingAllowed() && (this.request.send(t), this.logCount += 1)
            }, t.prototype.isLoggingAllowed = function() {
                return this.isLoggingActive && this.logCount < 5
            }, t.prototype.setContext = function(t, e) {
                this.visitorService = t, this.sessionService = e
            }, t.prototype.getContext = function() {
                if (!this.visitorService || !this.visitorService.doesVisitorExist()) return "No context";
                var t = this.visitorService.getVisitor(),
                    e = this.sessionService.getSession(),
                    i = {
                        userId: t.id,
                        sessionNumber: t.visitsCount,
                        pageNumber: null !== e ? e.pageNumber : null
                    };
                return window.JSON.stringify(i)
            }, t
        }();
    ! function(t) {
        t.toQuery = function(t) {
            return Object.keys(t).map(function(e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            }).join("&")
        }
    }(j || (j = {}));
    var X = function() {
            return (X = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        },
        $ = function() {
            function t(t, e) {
                this.domainUri = t, this.path = e, this.beforeRequestCallbacks = [], this.afterRequestCallbacks = []
            }
            return t.prototype.setRequestParametersProviders = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.requestParametersProviders = t
            }, t.prototype.before = function(t) {
                this.beforeRequestCallbacks.push(t)
            }, t.prototype.after = function(t) {
                this.afterRequestCallbacks.push(t)
            }, t.prototype.retrieveParameters = function() {
                return this.requestParametersProviders ? this.requestParametersProviders.map(function(t) {
                    return t.getRequestParameters()
                }).reduce(function(t, e) {
                    return X({}, t, e)
                }) : {}
            }, t
        }(),
        K = function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(),
        J = function(t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return K(e, t), e.prototype.send = function() {
                this.beforeRequestCallbacks.forEach(function(t) {
                    return t()
                });
                var t = this.retrieveParameters();
                this.addCacheBusting(t);
                var e = j.toQuery(t);
                this.generatePixel(e), this.afterRequestCallbacks.forEach(function(t) {
                    return t()
                })
            }, e.prototype.generatePixel = function(t) {
                var e = new window.Image(1, 1);
                e.onload = x, e.onerror = x, e.src = this.domainUri + (this.path ? "/" + this.path : "") + "?" + t
            }, e.prototype.addCacheBusting = function(t) {
                t.r = ("" + Math.random()).slice(2, 8)
            }, e
        }($),
        Y = function() {
            function t(t, e) {
                this.projectConfiguration = t, this.basicLogRequestParameter = e
            }
            return t.prototype.init = function() {
                this.request = new J(this.projectConfiguration.getErrorUri()), this.request.setRequestParametersProviders(this, this.basicLogRequestParameter)
            }, t.prototype.send = function(t) {
                this.log = t, this.request.send()
            }, t.prototype.getRequestParameters = function() {
                return {
                    a: this.log.app,
                    l: this.log.level,
                    m: this.log.message,
                    s: this.log.stacktrace
                }
            }, t
        }(),
        Q = "8.6.3";

    function Z() {
        return Q
    }

    function tt() {
        return {
            v: Q
        }
    }
    var et, it = function() {
            return (it = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        },
        nt = function() {
            function t(t, e) {
                this.configuration = t, this.pii = e
            }
            return t.prototype.getRequestParameters = function() {
                return it({
                    d: "" + Date.now(),
                    p: this.pii.anonymize(window.location.href),
                    u: navigator.userAgent
                }, this.configuration.getRequestParameters(), tt())
            }, t
        }(),
        rt = function() {
            function t(t, e) {
                this.configuration = t, this.pii = e
            }
            return t.prototype.create = function() {
                var t = new nt(this.configuration, this.pii),
                    e = new Y(this.configuration, t),
                    i = new W(this.configuration, e, this.pii);
                return i.init(), i
            }, t
        }(),
        ot = /[a-zA-Z0-9._%+-]+(?:@|%40)[a-zA-Z0-9.%-_]+((?:\.|%2[eE])[a-zA-Z0-9-]+)+/g,
        st = /[a-zA-Z0-9+_-](?:@|%40)/,
        at = function() {
            function t() {}
            return t.prototype.anonymize = function(t) {
                return "string" == typeof t && st.test(t) ? t.replace(ot, "CS_ANONYMIZED_EMAIL") : t
            }, t.prototype.anonymizeFields = function(t, e) {
                var i = this;
                return e.forEach(function(e) {
                    t[e] = i.anonymize(t[e])
                }), t
            }, t
        }(),
        ct = "_cs_cvars";
    ! function(t) {
        function e() {
            return B.get(ct)
        }

        function i(t, e) {
            B.set(ct, t, e)
        }
        t.get = function() {
            return window.JSON.parse(e())
        }, t.set = function(t, e) {
            i(window.JSON.stringify(t), e)
        }, t.getRaw = e, t.setRaw = i, t.remove = function(t) {
            B.remove(ct, t)
        }, t.isValidCustomVarString = function(t) {
            return "string" == typeof t
        }
    }(et || (et = {}));
    var ut, ht, pt = function() {
            function t(t, e, i, n, r) {
                this.visitorService = t, this.sessionService = e, this.exclusionService = i, this.configuration = n, this.cookieDomain = r
            }
            return t.prototype.get = function() {
                return {
                    exclusion: this.exclusionService.getAppliedTrackingDraw(),
                    visitor: this.visitorService.getVisitor(),
                    session: this.sessionService.getSession(),
                    cvars: et.getRaw()
                }
            }, t.prototype.apply = function(t) {
                t && (t.exclusion ? this.exclude() : this.include(t))
            }, t.prototype.exclude = function() {
                this.exclusionService.exclude(this.configuration.lastTrackingDraw), this.visitorService.removeCurrentVisitor(), this.sessionService.removeCurrentSession(), et.remove(this.cookieDomain)
            }, t.prototype.include = function(t) {
                this.exclusionService.removeExclusion(), this.visitorService.setVisitor(t.visitor), t.session ? this.sessionService.setSession(t.session) : this.sessionService.removeCurrentSession(), t.cvars ? et.setRaw(t.cvars, this.cookieDomain) : et.remove(this.cookieDomain)
            }, t
        }(),
        lt = "_cs_id",
        ft = ".",
        dt = /^([a-z0-9\-])+(\.[0-9]+){6}$/;
    ! function(t) {
        function e(t) {
            var e = t.split(ft),
                i = e[0],
                n = e.slice(1).map(Number);
            return {
                id: i,
                creationTimestamp: n[0],
                visitsCount: n[1],
                hitTimestamp: n[2],
                lastVisitTimestamp: n[3],
                appliedTrackingDraw: n[4],
                expires: n[5]
            }
        }
        t.get = function() {
            var t = B.get(lt);
            return t ? e(t) : null
        }, t.set = function(t, e) {
            var i = function(t) {
                    return [t.id, t.creationTimestamp, t.visitsCount, t.hitTimestamp, t.lastVisitTimestamp, t.appliedTrackingDraw, t.expires].join(ft)
                }(t),
                n = new Date(t.expires);
            B.set(lt, i, e, n)
        }, t.remove = function(t) {
            B.remove(lt, t)
        }, t.fromString = e, t.isValidVisitorString = function(t) {
            return dt.test(t)
        }
    }(ut || (ut = {})),
    function(t) {
        var e = {},
            i = {};
        t.getCookie = function(t) {
            var i = e[t];
            return i || B.get(t)
        }, t.setCookie = function(t, n, r, o) {
            B.set(t, n, r, o), e[t] = n,
                function(t, n) {
                    clearTimeout(i[t]), i[t] = setTimeout(function() {
                        delete e[t]
                    }, n)
                }(t, o)
        }, t.deleteCookie = function(t, n) {
            B.remove(t, n), clearTimeout(i[t]), delete e[t]
        }
    }(ht || (ht = {}));
    var gt, vt = /^\d+\.[012]$/,
        yt = function() {
            function t(t) {
                this.cookieDomain = t
            }
            return t.prototype.get = function(e) {
                var i = this.getRawSession(e);
                return this.isValid(i) ? t.fromString(i) : null
            }, t.prototype.getRawSession = function(t) {
                return t ? B.get("_cs_s") : ht.getCookie("_cs_s")
            }, t.prototype.set = function(t) {
                ht.setCookie("_cs_s", this.toString(t), this.cookieDomain, 18e5)
            }, t.prototype.remove = function(t) {
                ht.deleteCookie("_cs_s", t)
            }, t.prototype.isValid = function(e) {
                return null !== e && t.isValidSessionString(e)
            }, t.prototype.toString = function(t) {
                return [t.pageNumber, t.recordingState].join(".")
            }, t.fromString = function(t) {
                var e = t.split("."),
                    i = e[0];
                return {
                    recordingState: e[1],
                    pageNumber: parseInt(i, 10)
                }
            }, t.isValidSessionString = function(t) {
                return vt.test(t)
            }, t
        }();
    ! function(t) {
        (gt || (gt = {})).fromRaw = function(t) {
            return {
                exclusion: Number(t._cs_ex),
                visitor: t._cs_id ? ut.fromString(t._cs_id) : null,
                session: t._cs_s ? yt.fromString(t._cs_s) : null,
                cvars: t._cs_cvars
            }
        }
    }();
    var mt, St = /^[0-9]+$/,
        Et = function() {
            function t(t, e) {
                this.location = t, this.cookieDomain = e
            }
            return t.prototype.exclude = function(t) {
                B.set("_cs_ex", t, this.cookieDomain, 2592e6)
            }, t.prototype.removeExclusion = function() {
                B.remove("_cs_ex", this.cookieDomain)
            }, t.prototype.isExcluded = function() {
                return this.hasExclusionCookie() || this.hasExclusionInURL()
            }, t.prototype.hasExclusionCookie = function() {
                return 0 !== this.getAppliedTrackingDraw()
            }, t.prototype.getAppliedTrackingDraw = function() {
                return Number(B.get("_cs_ex"))
            }, t.prototype.hasExclusionInURL = function() {
                return this.location.href.indexOf("_cs_ex") > 0
            }, t.isValidExclusionString = function(t) {
                return St.test(t)
            }, t
        }();
    ! function(t) {
        (mt || (mt = {})).isValid = function(t) {
            return (!t._cs_id || ut.isValidVisitorString(t._cs_id)) && (!t._cs_s || yt.isValidSessionString(t._cs_s)) && (!t._cs_ex || Et.isValidExclusionString(t._cs_ex)) && (!t._cs_cvars || et.isValidCustomVarString(t._cs_cvars))
        }
    }();
    var wt, Ct = function() {
            function t(t, e, i) {
                this.xdframeOpener = t, this.logger = e, this.location = i
            }
            return t.prototype.retrieve = function(e, i) {
                var n = this;
                this.callback = i, this.retrievedStates = [], this.xdframeOrigins = e.filter(function(t) {
                    return n.isNotCurrentHostname(t)
                }).map(t.getXdframeOrigin), this.xdframeOpener.onMessage(function(t) {
                    n.handleXdframeMessage(t)
                }), this.xdframeOpener.onTimeout(function() {
                    n.handleTimeout()
                }), this.xdframeOpener.start(), this.xdframeOrigins.map(t.getXdframeUrl).forEach(function(t) {
                    return n.xdframeOpener.open(t)
                })
            }, t.prototype.handleXdframeMessage = function(t) {
                if (this.isXdframeMessage(t)) {
                    var e = t.data;
                    if (!mt.isValid(e)) throw this.xdframeOpener.stop(), "Invalid domain state: " + JSON.stringify(t.data) + " from " + t.origin;
                    this.retrievedStates.push(e)
                }
                this.allMessagesAreIn() && (this.xdframeOpener.stop(), this.callback(this.retrievedStates.map(gt.fromRaw)))
            }, t.prototype.handleTimeout = function() {
                this.logger.logMessage("xdframe: all messages not received")
            }, t.prototype.isXdframeMessage = function(t) {
                return this.xdframeOrigins.indexOf(t.origin) > -1
            }, t.prototype.allMessagesAreIn = function() {
                return this.retrievedStates.length === this.xdframeOrigins.length
            }, t.prototype.isNotCurrentHostname = function(t) {
                return !_(this.location.hostname, t)
            }, t.getXdframeOrigin = function(t) {
                return "https://csxd." + t
            }, t.getXdframeUrl = function(t) {
                return t + "/xdframe-1.0.0.html"
            }, t
        }(),
        Rt = function() {
            function t(t) {
                var e = this;
                this.logger = t, this.ALL_MESSAGES_RECEIVED_TIMEOUT = 3e3, this.scopedHandleMessage = function(t) {
                    e.handleMessage(t)
                }
            }
            return t.prototype.onMessage = function(t) {
                this.onMessageCallback = t
            }, t.prototype.onTimeout = function(t) {
                this.onTimeoutCallback = t
            }, t.prototype.start = function() {
                var t = this;
                window.addEventListener("message", this.scopedHandleMessage), this.timeout = window.setTimeout(function() {
                    t.onTimeoutCallback()
                }, this.ALL_MESSAGES_RECEIVED_TIMEOUT)
            }, t.prototype.open = function(t) {
                var e = document.createElement("iframe");
                e.src = t, e.style.display = "none", document.body.appendChild(e)
            }, t.prototype.stop = function() {
                window.removeEventListener("message", this.scopedHandleMessage), window.clearTimeout(this.timeout), this.onMessageCallback = x, this.onTimeoutCallback = x
            }, t.prototype.handleMessage = function(t) {
                var e = this;
                this.logger.tryToExecute("XdframeMessage", function() {
                    e.onMessageCallback(t)
                })()
            }, t
        }(),
        Tt = function() {
            return (Tt = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        };
    ! function(t) {
        t[t.WebElement = 0] = "WebElement", t[t.MobileView = 1] = "MobileView", t[t.WebViewContainer = 2] = "WebViewContainer"
    }(wt || (wt = {}));
    var bt, kt = function() {
            function t(t) {
                this.processors = t
            }
            return t.prototype.serialize = function(t, e) {
                void 0 === e && (e = {});
                var i = Tt({}, e),
                    n = t.nodeType,
                    r = this.processors.reduce(function(t, e) {
                        return e.beforeSerialize(t, i)
                    }, t);
                switch (n) {
                    case Node.ELEMENT_NODE:
                        return this.serializeElementNode(r, i);
                    case Node.TEXT_NODE:
                        return this.serializeTextNode(r, i);
                    case Node.COMMENT_NODE:
                        return this.serializeCommentNode(r, i);
                    case Node.DOCUMENT_TYPE_NODE:
                        return this.serializeDoctypeNode(r, i);
                    case Node.DOCUMENT_NODE:
                        return this.serializeDocumentNode(r, i);
                    case Node.DOCUMENT_FRAGMENT_NODE:
                        return this.serializeDocumentFragmentNode(r, i);
                    default:
                        throw new Error("serialization is not supported (nodeType: " + n + ")")
                }
            }, t.prototype.serializeElementNode = function(t, e) {
                var i, n = this.processors.reduce(function(i, n) {
                    var r = n.serializeNode(t, i, e);
                    return n.serializeElementNode(t, r, e)
                }, {
                    attributes: []
                });
                (i = n.attributes).push.apply(i, this.serializeAttributes(t, e));
                var r = t.shadowRoot;
                return r && (n.shadowRoot = this.serializeShadowRootNode(r, e)), n.children = this.serializeChildren(t, e), n
            }, t.prototype.serializeAttributes = function(t, e) {
                var i = this,
                    n = c(t.attributes);
                return this.processors.reduce(function(i, n) {
                    return n.beforeSerializeAttributes(t, i, e)
                }, n).map(function(n) {
                    return i.serializeAttribute(t, n, e)
                })
            }, t.prototype.serializeAttribute = function(t, e, i) {
                return this.processors.reduce(function(n, r) {
                    return r.serializeAttribute(t, e, n, i)
                }, {})
            }, t.prototype.serializeChildren = function(t, e) {
                var i = this,
                    n = c(t.childNodes);
                return this.processors.reduce(function(i, n) {
                    return n.beforeSerializeChildren(t, i, e)
                }, n).map(function(t) {
                    return i.serialize(t, e)
                })
            }, t.prototype.serializeTextNode = function(t, e) {
                return this.processors.reduce(function(i, n) {
                    var r = n.serializeNode(t, i, e);
                    return n.serializeTextNode(t, r, e)
                }, {})
            }, t.prototype.serializeCommentNode = function(t, e) {
                return this.processors.reduce(function(i, n) {
                    var r = n.serializeNode(t, i, e);
                    return n.serializeCommentNode(t, r, e)
                }, {})
            }, t.prototype.serializeDoctypeNode = function(t, e) {
                return this.processors.reduce(function(i, n) {
                    var r = n.serializeNode(t, i, e);
                    return n.serializeDoctypeNode(t, r, e)
                }, {})
            }, t.prototype.serializeDocumentNode = function(t, e) {
                var i = this.processors.reduce(function(i, n) {
                    var r = n.serializeNode(t, i, e);
                    return n.serializeDocumentNode(t, r, e)
                }, {});
                return i.children = this.serializeChildren(t, e), i
            }, t.prototype.serializeShadowRootNode = function(t, e) {
                var i = this.processors.reduce(function(i, n) {
                    var r = n.serializeNode(t, i, e);
                    return n.serializeShadowRootNode(t, r, e)
                }, {});
                return i.children = this.serializeChildren(t, e), i
            }, t.prototype.serializeDocumentFragmentNode = function(t, e) {
                if (t.mode) return this.serializeShadowRootNode(t, e);
                throw new Error("Not implemented yet.")
            }, t
        }(),
        Pt = function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(),
        At = function(t) {
            function e(e, i, n, r) {
                var o = t.call(this, e, i) || this;
                return o.compressor = n, o.logger = r, o.afterRequestDataRetrievedCallbacks = [], o.requestHeaders = [], o
            }
            return Pt(e, t), e.prototype.setRequestPayloadProvider = function(t) {
                this.requestPayloadProvider = t
            }, e.prototype.setRequestHeader = function(t) {
                this.requestHeaders.push(t)
            }, e.prototype.afterProvidersCalled = function(t) {
                this.afterRequestDataRetrievedCallbacks.push(t)
            }, e.prototype.send = function() {
                var t = this;
                this.beforeRequestCallbacks.forEach(function(t) {
                    return t()
                });
                var e = this.retrieveParameters(),
                    i = j.toQuery(e),
                    n = this.retrievePayload();
                this.afterRequestDataRetrievedCallbacks.forEach(function(t) {
                    return t()
                }), this.compressor.compress(n, function(e) {
                    t.logger.tryToExecute("POST request", function() {
                        t.sendXMLHttpRequest(i, e), t.afterRequestCallbacks.forEach(function(t) {
                            return t()
                        })
                    })()
                })
            }, e.prototype.retrievePayload = function() {
                return this.requestPayloadProvider ? this.requestPayloadProvider.getRequestPayload() : ""
            }, e.prototype.sendXMLHttpRequest = function(t, e) {
                if (null !== window.XMLHttpRequest) {
                    var i = new XMLHttpRequest;
                    i.open("POST", this.domainUri + "/" + this.path + "?" + t, !0);
                    for (var n = 0, r = this.requestHeaders; n < r.length; n++) {
                        var o = r[n];
                        i.setRequestHeader(o.name, o.value)
                    }
                    i.onreadystatechange = x, i.send(e)
                }
            }, e
        }($);
    ! function(t) {
        t[t.MUTATION_INSERT = 1] = "MUTATION_INSERT", t[t.MUTATION_REMOVE = 2] = "MUTATION_REMOVE", t[t.MUTATION_ATTRIBUTE = 3] = "MUTATION_ATTRIBUTE", t[t.MUTATION_CHARACTER_DATA = 4] = "MUTATION_CHARACTER_DATA", t[t.INITIAL_DOM = 5] = "INITIAL_DOM", t[t.SCROLL = 6] = "SCROLL", t[t.MOUSE_MOVE = 7] = "MOUSE_MOVE", t[t.CLICK = 8] = "CLICK", t[t.RESIZE = 9] = "RESIZE", t[t.INPUT_CHECKABLE = 10] = "INPUT_CHECKABLE", t[t.INPUT_SELECT = 11] = "INPUT_SELECT", t[t.INPUT_TEXT = 12] = "INPUT_TEXT", t[t.HASH_CHANGE = 13] = "HASH_CHANGE", t[t.CONSENT_GRANTED = 14] = "CONSENT_GRANTED", t[t.CONSENT_WITHDRAWN = 15] = "CONSENT_WITHDRAWN", t[t.MOUSE_OVER = 16] = "MOUSE_OVER", t[t.VISIBILITY_CHANGE = 17] = "VISIBILITY_CHANGE", t[t.STYLESHEET_RULE_INSERT = 18] = "STYLESHEET_RULE_INSERT", t[t.STATIC_RESOURCE_URL = 19] = "STATIC_RESOURCE_URL", t[t.PERFORMANCE_TIMINGS = 20] = "PERFORMANCE_TIMINGS"
    }(bt || (bt = {}));
    var Ot = !0;

    function It(t) {
        t.boundElement.addEventListener(t.type, t.listener, Ot)
    }

    function xt(t) {
        t.boundElement.removeEventListener(t.type, t.listener, Ot)
    }
    var Nt = function() {
            function t(e, i, n, r) {
                var o = this;
                this.logger = e, this.selector = i, this.nodeIdentifier = n, this.sensitiveContent = r, this.onEventCallbacks = [], this.eventHandlers = [{
                    boundElement: document,
                    type: "change",
                    listener: this.selector.on(t.whiteListedCheckableInputsSelector, function(t) {
                        return o.inputCheckableListener(t.target)
                    })
                }, {
                    boundElement: document,
                    type: "change",
                    listener: this.selector.on("select", function(t) {
                        return o.inputSelectListener(t.target)
                    })
                }, {
                    boundElement: document,
                    type: "keyup",
                    listener: this.selector.on(t.whiteListedTextInputSelector, function(t) {
                        return o.inputTextListener(t.target)
                    })
                }, {
                    boundElement: document,
                    type: "scroll",
                    listener: function(t) {
                        return o.scrollListener(t.target)
                    }
                }, {
                    boundElement: document,
                    type: "mousemove",
                    listener: function(t) {
                        return o.mouseMoveListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "mouseover",
                    listener: function(t) {
                        return o.mouseOverListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "click",
                    listener: function(t) {
                        return o.clickListener(t)
                    }
                }]
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallbacks.push(function(e) {
                    e.date = Date.now(), t(e)
                })
            }, t.prototype.triggerCallbacks = function(t) {
                this.onEventCallbacks.forEach(function(e) {
                    return e(t)
                })
            }, t.prototype.start = function() {
                this.bindHandlers(), this.triggerInitialEvents()
            }, t.prototype.stop = function() {
                this.unbindHandlers()
            }, t.prototype.bindHandlers = function() {
                this.eventHandlers.forEach(function(t) {
                    return It(t)
                })
            }, t.prototype.unbindHandlers = function() {
                this.eventHandlers.forEach(function(t) {
                    return xt(t)
                })
            }, t.prototype.triggerInitialEvents = function() {
                this.initialTextInputListener(), this.initialScrollListener(), this.initialSelectListener(), this.initialCheckableListener()
            }, t.prototype.initialTextInputListener = function() {
                for (var e = document.querySelectorAll(t.whiteListedTextInputSelector), i = 0; i < e.length; i += 1) {
                    var n = e.item(i);
                    n.value.length > 0 && this.inputTextListener(n)
                }
            }, t.prototype.initialScrollListener = function() {
                for (var t = document.getElementsByTagName("*"), e = 0; e < t.length; e += 1) {
                    var i = t[e],
                        n = this.getScrollPosition(i),
                        r = n.top,
                        o = n.left;
                    0 === r && 0 === o || this.scrollListener(i)
                }
            }, t.prototype.initialSelectListener = function() {
                for (var t = document.getElementsByTagName("select"), e = 0; e < t.length; e += 1) this.inputSelectListener(t[e])
            }, t.prototype.initialCheckableListener = function() {
                for (var e = document.querySelectorAll(t.whiteListedCheckableInputsSelector), i = 0; i < e.length; i += 1) this.inputCheckableListener(e[i])
            }, t.prototype.getScrollPosition = function(t) {
                return t === document ? {
                    top: window.pageYOffset,
                    left: window.pageXOffset
                } : {
                    top: t.scrollTop,
                    left: t.scrollLeft
                }
            }, t.prototype.scrollListener = function(t) {
                var e = this;
                this.logger.tryToExecute("scroll", function() {
                    e.nodeIdentifier.ifIdentified(t, function(i) {
                        if (!e.sensitiveContent.isSensitiveElementNode(t)) {
                            var n = e.getScrollPosition(t);
                            e.triggerCallbacks({
                                type: bt.SCROLL,
                                args: [i, n.left, n.top]
                            })
                        }
                    })
                })()
            }, t.prototype.mouseMoveListener = function(t) {
                var e = this;
                this.logger.tryToExecute("mouseMove", function() {
                    e.triggerCallbacks({
                        type: bt.MOUSE_MOVE,
                        args: [t.clientX, t.clientY]
                    })
                })()
            }, t.prototype.mouseOverListener = function(t) {
                var e = this;
                this.logger.tryToExecute("mouseOver", function() {
                    e.nodeIdentifier.ifIdentified(t.target, function(t) {
                        e.triggerCallbacks({
                            type: bt.MOUSE_OVER,
                            args: [t]
                        })
                    })
                })()
            }, t.prototype.clickListener = function(t) {
                var e = this;
                this.logger.tryToExecute("click", function() {
                    e.nodeIdentifier.ifIdentified(t.target, function(t) {
                        e.triggerCallbacks({
                            type: bt.CLICK,
                            args: [t]
                        })
                    })
                })()
            }, t.prototype.inputCheckableListener = function(t) {
                var e = this;
                this.logger.tryToExecute("checkable", function() {
                    e.nodeIdentifier.ifIdentified(t, function(i) {
                        e.sensitiveContent.isSensitiveElementNode(t) || e.triggerCallbacks({
                            type: bt.INPUT_CHECKABLE,
                            args: [i, t.checked]
                        })
                    })
                })()
            }, t.prototype.inputSelectListener = function(t) {
                var e = this;
                this.logger.tryToExecute("select", function() {
                    e.nodeIdentifier.ifIdentified(t, function(i) {
                        e.sensitiveContent.isSensitiveElementNode(t) || e.triggerCallbacks({
                            type: bt.INPUT_SELECT,
                            args: [i, t.selectedIndex]
                        })
                    })
                })()
            }, t.prototype.inputTextListener = function(t) {
                var e = this;
                this.logger.tryToExecute("text", function() {
                    e.nodeIdentifier.ifIdentified(t, function(i) {
                        e.sensitiveContent.isSensitiveElementNode(t) || e.triggerCallbacks({
                            type: bt.INPUT_TEXT,
                            args: [i, t.value.replace(/\S/g, "•")]
                        })
                    })
                })()
            }, t.whiteListedTextInputSelector = ["textarea", "input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="search"]', 'input[type="tel"]', 'input[type="url"]'].join(","), t.whiteListedCheckableInputsSelector = ['input[type="checkbox"]', 'input[type="radio"]'].join(","), t
        }(),
        _t = function() {
            function t(t, e, i) {
                var n = this;
                this.mutationSerializer = t, this.staticResourceUrlTracker = e, this.logger = i, this.mutationObserverConfig = {
                    subtree: !0,
                    attributes: !0,
                    childList: !0,
                    characterData: !0
                }, this.mutationObserver = new MutationObserver(function(t) {
                    n.logger.tryToExecute("mutations", function() {
                        for (var e = Date.now(), i = 0; i < t.length; i += 1) {
                            var r = t[i];
                            switch (r.date = e, r.type) {
                                case "attributes":
                                    n.attributesMutation(r);
                                    break;
                                case "characterData":
                                    n.characterDataMutation(r);
                                    break;
                                case "childList":
                                    n.childListMutation(r);
                                    break;
                                default:
                                    throw new Error("mutation type is not supported")
                            }
                        }
                    })()
                })
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.mutationObserver.observe(document, this.mutationObserverConfig), this.recordInitialDom()
            }, t.prototype.stop = function() {
                this.mutationObserver.disconnect()
            }, t.prototype.recordInitialDom = function() {
                var t = this.mutationSerializer.serializeDocument(document);
                this.onEventCallback({
                    args: t,
                    date: Date.now(),
                    type: bt.INITIAL_DOM
                })
            }, t.prototype.attributesMutation = function(t) {
                var e = this.mutationSerializer.serializeMutationAttribute(t);
                e && (this.onEventCallback({
                    args: e,
                    date: t.date,
                    type: bt.MUTATION_ATTRIBUTE
                }), this.staticResourceUrlTracker.scanAttribute(t.target, t.attributeName))
            }, t.prototype.characterDataMutation = function(t) {
                var e = this.mutationSerializer.serializeMutationCharacterData(t);
                e && (this.onEventCallback({
                    args: e,
                    date: t.date,
                    type: bt.MUTATION_CHARACTER_DATA
                }), this.staticResourceUrlTracker.scanText(t.target))
            }, t.prototype.childListMutation = function(t) {
                var e = this,
                    i = this.mutationSerializer.serializeMutationChildList(t);
                if (i) {
                    var n = i.removedNodes,
                        r = i.addedNodes;
                    n.forEach(function(i) {
                        e.onEventCallback({
                            args: i,
                            date: t.date,
                            type: bt.MUTATION_REMOVE
                        })
                    }), r.forEach(function(i) {
                        e.onEventCallback({
                            args: i,
                            date: t.date,
                            type: bt.MUTATION_INSERT
                        })
                    })
                }
            }, t
        }(),
        Lt = 2,
        Dt = function() {
            function t(t) {
                this.storageCharsUsed = 0, this.maxStoredChars = 0, this.maxStoredChars = t / Lt
            }
            return t.prototype.add = function(t) {
                this.storageCharsUsed += t.length
            }, t.prototype.isThresholdReached = function() {
                return this.storageCharsUsed > this.maxStoredChars
            }, t.prototype.reset = function() {
                this.storageCharsUsed = 0
            }, t
        }(),
        Mt = 512e3,
        Vt = function() {
            function t(t, e, i) {
                void 0 === t && (t = []), void 0 === e && (e = {}), void 0 === i && (i = Mt), this.events = t, this.requestParameters = e, this.sizeCounter = new Dt(i)
            }
            return t.prototype.addEvent = function(t) {
                this.sizeCounter.add(JSON.stringify(t)), this.events.push(t)
            }, t.prototype.eventsCount = function() {
                return this.events.length
            }, t.prototype.clearEvents = function() {
                this.sizeCounter.reset(), this.events = []
            }, t.prototype.isFull = function() {
                return this.sizeCounter.isThresholdReached() || this.eventsCount() >= 100
            }, t.prototype.setRequestParametersFromProvider = function(t) {
                var e = t.getRequestParameters();
                for (var i in e) e.hasOwnProperty(i) && (this.requestParameters[i] = e[i])
            }, t.prototype.getEvents = function() {
                return this.events
            }, t.prototype.getRequestPayload = function() {
                return JSON.stringify(this.events)
            }, t.prototype.getRequestParameters = function() {
                return this.requestParameters
            }, t
        }(),
        qt = function() {
            function t() {
                this.index = 1
            }
            return t.prototype.increment = function() {
                this.index += 1
            }, t.prototype.reset = function() {
                this.index = 1
            }, t.prototype.getRequestParameters = function() {
                return {
                    ri: "" + this.index
                }
            }, t
        }(),
        Ut = Ht.toString(),
        zt = Ht();

    function Ht() {
        var t = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            _f: String.fromCharCode,
            compressToBase64: function(e) {
                if (null == e) return "";
                var i, n, r, o, s, a, c, u = "",
                    h = 0;
                for (e = t.compress(e); h < 2 * e.length;) h % 2 == 0 ? (i = e.charCodeAt(h / 2) >> 8, n = 255 & e.charCodeAt(h / 2), r = h / 2 + 1 < e.length ? e.charCodeAt(h / 2 + 1) >> 8 : NaN) : (i = 255 & e.charCodeAt((h - 1) / 2), (h + 1) / 2 < e.length ? (n = e.charCodeAt((h + 1) / 2) >> 8, r = 255 & e.charCodeAt((h + 1) / 2)) : n = r = NaN), h += 3, o = i >> 2, s = (3 & i) << 4 | n >> 4, a = (15 & n) << 2 | r >> 6, c = 63 & r, isNaN(n) ? a = c = 64 : isNaN(r) && (c = 64), u = u + t._keyStr.charAt(o) + t._keyStr.charAt(s) + t._keyStr.charAt(a) + t._keyStr.charAt(c);
                return u
            },
            decompressFromBase64: function(e) {
                if (null == e) return "";
                var i, n, r, o, s, a, c, u = "",
                    h = 0,
                    p = 0,
                    l = t._f;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); p < e.length;) n = t._keyStr.indexOf(e.charAt(p++)) << 2 | (s = t._keyStr.indexOf(e.charAt(p++))) >> 4, r = (15 & s) << 4 | (a = t._keyStr.indexOf(e.charAt(p++))) >> 2, o = (3 & a) << 6 | (c = t._keyStr.indexOf(e.charAt(p++))), h % 2 == 0 ? (i = n << 8, 64 != a && (u += l(i | r)), 64 != c && (i = o << 8)) : (u += l(i | n), 64 != a && (i = r << 8), 64 != c && (u += l(i | o))), h += 3;
                return t.decompress(u)
            },
            compressToUTF16: function(e) {
                if (null == e) return "";
                var i, n, r, o = "",
                    s = 0,
                    a = t._f;
                for (e = t.compress(e), i = 0; i < e.length; i++) switch (n = e.charCodeAt(i), s++) {
                    case 0:
                        o += a(32 + (n >> 1)), r = (1 & n) << 14;
                        break;
                    case 1:
                        o += a(r + (n >> 2) + 32), r = (3 & n) << 13;
                        break;
                    case 2:
                        o += a(r + (n >> 3) + 32), r = (7 & n) << 12;
                        break;
                    case 3:
                        o += a(r + (n >> 4) + 32), r = (15 & n) << 11;
                        break;
                    case 4:
                        o += a(r + (n >> 5) + 32), r = (31 & n) << 10;
                        break;
                    case 5:
                        o += a(r + (n >> 6) + 32), r = (63 & n) << 9;
                        break;
                    case 6:
                        o += a(r + (n >> 7) + 32), r = (127 & n) << 8;
                        break;
                    case 7:
                        o += a(r + (n >> 8) + 32), r = (255 & n) << 7;
                        break;
                    case 8:
                        o += a(r + (n >> 9) + 32), r = (511 & n) << 6;
                        break;
                    case 9:
                        o += a(r + (n >> 10) + 32), r = (1023 & n) << 5;
                        break;
                    case 10:
                        o += a(r + (n >> 11) + 32), r = (2047 & n) << 4;
                        break;
                    case 11:
                        o += a(r + (n >> 12) + 32), r = (4095 & n) << 3;
                        break;
                    case 12:
                        o += a(r + (n >> 13) + 32), r = (8191 & n) << 2;
                        break;
                    case 13:
                        o += a(r + (n >> 14) + 32), r = (16383 & n) << 1;
                        break;
                    case 14:
                        o += a(r + (n >> 15) + 32, 32 + (32767 & n)), s = 0
                }
                return o + a(r + 32)
            },
            decompressFromUTF16: function(e) {
                if (null == e) return "";
                for (var i, n, r = "", o = 0, s = 0, a = t._f; s < e.length;) {
                    switch (n = e.charCodeAt(s) - 32, o++) {
                        case 0:
                            i = n << 1;
                            break;
                        case 1:
                            r += a(i | n >> 14), i = (16383 & n) << 2;
                            break;
                        case 2:
                            r += a(i | n >> 13), i = (8191 & n) << 3;
                            break;
                        case 3:
                            r += a(i | n >> 12), i = (4095 & n) << 4;
                            break;
                        case 4:
                            r += a(i | n >> 11), i = (2047 & n) << 5;
                            break;
                        case 5:
                            r += a(i | n >> 10), i = (1023 & n) << 6;
                            break;
                        case 6:
                            r += a(i | n >> 9), i = (511 & n) << 7;
                            break;
                        case 7:
                            r += a(i | n >> 8), i = (255 & n) << 8;
                            break;
                        case 8:
                            r += a(i | n >> 7), i = (127 & n) << 9;
                            break;
                        case 9:
                            r += a(i | n >> 6), i = (63 & n) << 10;
                            break;
                        case 10:
                            r += a(i | n >> 5), i = (31 & n) << 11;
                            break;
                        case 11:
                            r += a(i | n >> 4), i = (15 & n) << 12;
                            break;
                        case 12:
                            r += a(i | n >> 3), i = (7 & n) << 13;
                            break;
                        case 13:
                            r += a(i | n >> 2), i = (3 & n) << 14;
                            break;
                        case 14:
                            r += a(i | n >> 1), i = (1 & n) << 15;
                            break;
                        case 15:
                            r += a(i | n), o = 0
                    }
                    s++
                }
                return t.decompress(r)
            },
            compressToUint8Array: function(e) {
                for (var i = t.compress(e), n = new Uint8Array(2 * i.length), r = 0, o = i.length; r < o; r++) {
                    var s = i.charCodeAt(r);
                    n[2 * r] = s >>> 8, n[2 * r + 1] = s % 256
                }
                return n
            },
            decompressFromUint8Array: function(e) {
                if (null === e || void 0 === e) return t.decompress(e);
                for (var i = new Array(e.length / 2), n = 0, r = i.length; n < r; n++) i[n] = 256 * e[2 * n] + e[2 * n + 1];
                return t.decompress(String.fromCharCode.apply(null, i))
            },
            compressToEncodedURIComponent: function(e) {
                return t.compressToBase64(e).replace("=", "$").replace("/", "-")
            },
            decompressFromEncodedURIComponent: function(e) {
                return e && (e = e.replace("$", "=").replace("-", "/")), t.decompressFromBase64(e)
            },
            compress: function(e) {
                if (null == e) return "";
                var i, n, r, o = {},
                    s = {},
                    a = "",
                    c = "",
                    u = "",
                    h = 2,
                    p = 3,
                    l = 2,
                    f = "",
                    d = 0,
                    g = 0,
                    v = t._f;
                for (r = 0; r < e.length; r += 1)
                    if (a = e.charAt(r), Object.prototype.hasOwnProperty.call(o, a) || (o[a] = p++, s[a] = !0), c = u + a, Object.prototype.hasOwnProperty.call(o, c)) u = c;
                    else {
                        if (Object.prototype.hasOwnProperty.call(s, u)) {
                            if (u.charCodeAt(0) < 256) {
                                for (i = 0; i < l; i++) d <<= 1, 15 == g ? (g = 0, f += v(d), d = 0) : g++;
                                for (n = u.charCodeAt(0), i = 0; i < 8; i++) d = d << 1 | 1 & n, 15 == g ? (g = 0, f += v(d), d = 0) : g++, n >>= 1
                            } else {
                                for (n = 1, i = 0; i < l; i++) d = d << 1 | n, 15 == g ? (g = 0, f += v(d), d = 0) : g++, n = 0;
                                for (n = u.charCodeAt(0), i = 0; i < 16; i++) d = d << 1 | 1 & n, 15 == g ? (g = 0, f += v(d), d = 0) : g++, n >>= 1
                            }
                            0 == --h && (h = Math.pow(2, l), l++), delete s[u]
                        } else
                            for (n = o[u], i = 0; i < l; i++) d = d << 1 | 1 & n, 15 == g ? (g = 0, f += v(d), d = 0) : g++, n >>= 1;
                        0 == --h && (h = Math.pow(2, l), l++), o[c] = p++, u = String(a)
                    }
                if ("" !== u) {
                    if (Object.prototype.hasOwnProperty.call(s, u)) {
                        if (u.charCodeAt(0) < 256) {
                            for (i = 0; i < l; i++) d <<= 1, 15 == g ? (g = 0, f += v(d), d = 0) : g++;
                            for (n = u.charCodeAt(0), i = 0; i < 8; i++) d = d << 1 | 1 & n, 15 == g ? (g = 0, f += v(d), d = 0) : g++, n >>= 1
                        } else {
                            for (n = 1, i = 0; i < l; i++) d = d << 1 | n, 15 == g ? (g = 0, f += v(d), d = 0) : g++, n = 0;
                            for (n = u.charCodeAt(0), i = 0; i < 16; i++) d = d << 1 | 1 & n, 15 == g ? (g = 0, f += v(d), d = 0) : g++, n >>= 1
                        }
                        0 == --h && (h = Math.pow(2, l), l++), delete s[u]
                    } else
                        for (n = o[u], i = 0; i < l; i++) d = d << 1 | 1 & n, 15 == g ? (g = 0, f += v(d), d = 0) : g++, n >>= 1;
                    0 == --h && (h = Math.pow(2, l), l++)
                }
                for (n = 2, i = 0; i < l; i++) d = d << 1 | 1 & n, 15 == g ? (g = 0, f += v(d), d = 0) : g++, n >>= 1;
                for (;;) {
                    if (d <<= 1, 15 == g) {
                        f += v(d);
                        break
                    }
                    g++
                }
                return f
            },
            decompress: function(e) {
                if (null == e) return "";
                if ("" == e) return null;
                var i, n, r, o, s, a, c, u = [],
                    h = 4,
                    p = 4,
                    l = 3,
                    f = "",
                    d = "",
                    g = t._f,
                    v = {
                        string: e,
                        val: e.charCodeAt(0),
                        position: 32768,
                        index: 1
                    };
                for (i = 0; i < 3; i += 1) u[i] = i;
                for (r = 0, s = Math.pow(2, 2), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), r |= (o > 0 ? 1 : 0) * a, a <<= 1;
                switch (r) {
                    case 0:
                        for (r = 0, s = Math.pow(2, 8), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), r |= (o > 0 ? 1 : 0) * a, a <<= 1;
                        c = g(r);
                        break;
                    case 1:
                        for (r = 0, s = Math.pow(2, 16), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), r |= (o > 0 ? 1 : 0) * a, a <<= 1;
                        c = g(r);
                        break;
                    case 2:
                        return ""
                }
                for (u[3] = c, n = d = c;;) {
                    if (v.index > v.string.length) return "";
                    for (r = 0, s = Math.pow(2, l), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), r |= (o > 0 ? 1 : 0) * a, a <<= 1;
                    switch (c = r) {
                        case 0:
                            for (r = 0, s = Math.pow(2, 8), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), r |= (o > 0 ? 1 : 0) * a, a <<= 1;
                            u[p++] = g(r), c = p - 1, h--;
                            break;
                        case 1:
                            for (r = 0, s = Math.pow(2, 16), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), r |= (o > 0 ? 1 : 0) * a, a <<= 1;
                            u[p++] = g(r), c = p - 1, h--;
                            break;
                        case 2:
                            return d
                    }
                    if (0 == h && (h = Math.pow(2, l), l++), u[c]) f = u[c];
                    else {
                        if (c !== p) return null;
                        f = n + n.charAt(0)
                    }
                    d += f, u[p++] = n + f.charAt(0), n = f, 0 == --h && (h = Math.pow(2, l), l++)
                }
            }
        };
        return t
    }
    var Bt = function() {
            function t(t) {
                this.onError = t, this.worker = this.tryCreateCompressionWorker(), this.callbacks = {}, this.callbackId = 0
            }
            return t.prototype.isSupported = function() {
                return void 0 !== this.worker
            }, t.prototype.compress = function(t, e) {
                if (this.isSupported()) {
                    var i = this.getNewCallbackId();
                    this.callbacks[i] = e, this.worker.postMessage([t, i])
                }
            }, t.prototype.compressSync = function(t) {
                return zt.compressToBase64(t)
            }, t.prototype.terminateWorker = function() {
                this.worker && this.worker.terminate()
            }, t.prototype.tryCreateCompressionWorker = function() {
                try {
                    var t = this.compressionScript.toString().replace("GET_LZ_STRING_SOURCE", Ut);
                    return this.createWorker("(" + t + ")();")
                } catch (t) {}
            }, t.prototype.createWorker = function(t) {
                var e = this,
                    i = window.URL || window.webkitURL,
                    n = window.Blob,
                    r = window.Worker;
                if (i && n && r) {
                    var o = new window.Blob([t], {
                            type: "application/javascript"
                        }),
                        s = new r(i.createObjectURL(o));
                    return s.onerror = function(t) {
                        return e.handleWorkerError(t)
                    }, s.onmessage = function(t) {
                        return e.handleWorkerMessage(t)
                    }, s
                }
            }, t.prototype.handleWorkerError = function(t) {
                var e = "WorkerError: " + (t.message ? t.message : "No message");
                return this.onError(e)
            }, t.prototype.handleWorkerMessage = function(t) {
                var e = t.data,
                    i = e[0],
                    n = e[1];
                this.callbacks[i](n), delete this.callbacks[i]
            }, t.prototype.compressionScript = function() {
                var t = GET_LZ_STRING_SOURCE();
                self.addEventListener("message", function(e) {
                    var i = e.data,
                        n = i[0],
                        r = i[1];
                    self.postMessage([r, t.compressToBase64(n)])
                })
            }, t.prototype.getNewCallbackId = function() {
                return this.callbackId += 1
            }, t
        }(),
        Ft = function() {
            function t() {}
            return t.prototype.emit = function(e, i) {
                var n = t.prefix + "." + e,
                    r = t.createEvent(n, {
                        detail: i
                    });
                null !== r && document.dispatchEvent(r)
            }, t.createEvent = function(t, e) {
                if (void 0 === e && (e = {}), "function" == typeof CustomEvent) return new CustomEvent(t, e);
                var i = this.tryToCreateCustomEvent();
                if (null === i) return null;
                var n = e.bubbles,
                    r = void 0 !== n && n,
                    o = e.cancelable,
                    s = void 0 !== o && o,
                    a = e.detail;
                return i.initCustomEvent(t, r, s, a), i
            }, t.tryToCreateCustomEvent = function() {
                try {
                    return document.createEvent("CustomEvent")
                } catch (t) {
                    return null
                }
            }, t.prefix = "cs.tracking", t
        }(),
        jt = function() {
            function t() {
                this.isStarted = !1
            }
            return t.prototype.start = function() {
                this.isStarted || (this.isStarted = !0, this.onStart())
            }, t.prototype.stop = function() {
                this.isStarted && (this.isStarted = !1, this.onStop())
            }, t.prototype.restart = function() {
                this.stop(), this.start()
            }, t
        }(),
        Gt = function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(),
        Wt = function() {
            return (Wt = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        },
        Xt = function(t) {
            function e(e, i, n, r, o, s, a, c, u, h, p) {
                var l = t.call(this) || this;
                return l.recordingRequest = e, l.recordingBatch = i, l.requestParameters = n, l.requestIndex = r, l.styleSheetRuleTracker = o, l.recordingMutationsTracker = s, l.recordingPageEventsTracker = a, l.recordingBrowserEventsTracker = c, l.sessionRenewer = u, l.staticResourceUrlTracker = h, l.recordingPerformanceTimingsTracker = p, l.eventEmitter = new Ft, l
            }
            return Gt(e, t), e.prototype.init = function() {
                this.bindRecordingRequest(), this.bindTrackers()
            }, e.prototype.bindRecordingRequest = function() {
                var t = this;
                this.recordingRequest.setRequestPayloadProvider(this.recordingBatch), this.recordingRequest.setRequestParametersProviders(this.recordingBatch), this.recordingRequest.afterProvidersCalled(function() {
                    t.recordingBatch.clearEvents(), t.requestIndex.increment(), t.recordingBatch.setRequestParametersFromProvider(t.requestParameters)
                })
            }, e.prototype.bindTrackers = function() {
                var t = this,
                    e = function(e) {
                        return t.processEvent(e)
                    };
                this.styleSheetRuleTracker.onEvent(e), this.recordingMutationsTracker.onEvent(e), this.recordingBrowserEventsTracker.onEvent(e), this.recordingPageEventsTracker.onEvent(e), this.staticResourceUrlTracker.onEvent(e), this.recordingPerformanceTimingsTracker.onEvent(e)
            }, e.prototype.processEvent = function(t) {
                this.sessionRenewer.isSessionValid() && (this.recordingBatch.addEvent(t), this.recordingBatch.isFull() && this.pushEvents(), this.eventEmitter.emit("recordingEvent", Wt({}, t, {
                    typeName: bt[t.type]
                })))
            }, e.prototype.onStart = function() {
                this.recordingBatch.setRequestParametersFromProvider(this.requestParameters), this.recordingPerformanceTimingsTracker.start(), this.styleSheetRuleTracker.start(), this.recordingMutationsTracker.start(), this.recordingBrowserEventsTracker.start(), this.recordingPageEventsTracker.start(), this.eventEmitter.emit("replayRecordingStarted")
            }, e.prototype.onStop = function() {
                this.styleSheetRuleTracker.stop(), this.recordingMutationsTracker.stop(), this.recordingBrowserEventsTracker.stop(), this.recordingPageEventsTracker.stop()
            }, e.prototype.clearStates = function() {
                this.pushEvents(), this.requestIndex.reset(), this.recordingBatch.setRequestParametersFromProvider(this.requestParameters)
            }, e.prototype.pushEvents = function() {
                this.recordingBatch.eventsCount() > 0 && this.recordingRequest.send()
            }, e.prototype.triggerConsentGranted = function() {
                this.recordingBatch.addEvent({
                    date: Date.now(),
                    type: bt.CONSENT_GRANTED
                })
            }, e.prototype.triggerConsentWithdrawn = function() {
                this.recordingBatch.addEvent({
                    date: Date.now(),
                    type: bt.CONSENT_WITHDRAWN
                })
            }, e
        }(jt),
        $t = function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(),
        Kt = function(t) {
            function e(e, i, n) {
                var r = t.call(this) || this;
                return r.recordingRecoveryRequest = e, r.recordingBatch = i, r.recoveryStorage = n, r.pageChangeHandler = function() {
                    try {
                        r.recordingBatch.eventsCount() > 0 && r.recoveryStorage.save({
                            events: r.recordingBatch.getEvents(),
                            metadata: r.recordingBatch.getRequestParameters()
                        })
                    } catch (t) {}
                }, r
            }
            return $t(e, t), e.prototype.onStart = function() {
                this.addPageChangeListener()
            }, e.prototype.onStop = function() {
                this.removePageChangeListener()
            }, e.prototype.recover = function() {
                this.sendPersistedRecordings()
            }, e.prototype.sendPersistedRecordings = function() {
                var t = this.recoveryStorage.recover();
                if (null !== t) {
                    var e = t,
                        i = e.metadata,
                        n = e.events,
                        r = new Vt(n, i);
                    this.recordingRecoveryRequest.setRequestPayloadProvider(r), this.recordingRecoveryRequest.setRequestParametersProviders(r), this.recordingRecoveryRequest.send()
                }
            }, e.prototype.addPageChangeListener = function() {
                window.addEventListener("pagehide", this.pageChangeHandler)
            }, e.prototype.removePageChangeListener = function() {
                window.removeEventListener("pagehide", this.pageChangeHandler)
            }, e
        }(jt),
        Jt = function() {
            function t(t, e, i, n, r) {
                this.consentService = t, this.domSerializer = e, this.nodeIdentifier = i, this.sensitiveContent = n, this.anonymization = r, this.resetAnonymization()
            }
            return t.prototype.serializeDocument = function(t) {
                return [this.domSerializer.serialize(t, {
                    forceChildrenSerialization: !0,
                    withAnonymization: this.useAnonymization
                })]
            }, t.prototype.serializeMutationCharacterData = function(t) {
                var e = this;
                return this.nodeIdentifier.ifIdentified(t.target, function(i) {
                    var n = t.target.data;
                    return [i, n = e.anonymizeTextIfNeeded(n)]
                })
            }, t.prototype.anonymizeTextIfNeeded = function(t) {
                return this.useAnonymization ? this.anonymization.anonymizeText(t) : t
            }, t.prototype.serializeMutationAttribute = function(t) {
                var e = this,
                    i = t.target,
                    n = t.attributeName,
                    r = t.attributeNamespace;
                return this.nodeIdentifier.ifIdentified(t.target, function(o) {
                    if (!e.sensitiveContent.isSensitiveAttributeName(i, n)) {
                        var s = t.target.getAttributeNS(r, n);
                        return s = e.anonymizeAttributeIfNeeded(n, s), [o, r, n, s]
                    }
                })
            }, t.prototype.anonymizeAttributeIfNeeded = function(t, e) {
                return this.useAnonymization ? this.anonymization.anonymizeAttributeValue(t, e) : e
            }, t.prototype.serializeMutationChildList = function(t) {
                var e = this;
                return this.nodeIdentifier.ifIdentified(t.target, function(i) {
                    if (!e.sensitiveContent.isSensitiveElementNode(t.target)) return {
                        removedNodes: e.serializeRemovedNodes(t),
                        addedNodes: e.serializeAddedNodes(t, i)
                    }
                })
            }, t.prototype.serializeRemovedNodes = function(t) {
                for (var e = [], i = 0; i < t.removedNodes.length; i += 1) {
                    var n = this.nodeIdentifier.popId(t.removedNodes[i]);
                    n && e.push([n])
                }
                return e
            }, t.prototype.serializeAddedNodes = function(t, e) {
                for (var i = [], n = t.nextSibling ? this.nodeIdentifier.ifIdentified(t.nextSibling, function(t) {
                        return t
                    }) : null, r = 0; r < t.addedNodes.length; r += 1) {
                    var o = t.addedNodes[r];
                    if (!this.nodeIdentifier.hasIdentifier(o)) {
                        var s = this.domSerializer.serialize(o, {
                            withAnonymization: this.useAnonymization
                        });
                        i.push([e, n, s])
                    }
                }
                return i
            }, t.prototype.resetAnonymization = function() {
                this.useAnonymization = !this.consentService.isAllowedByConsent()
            }, t
        }(),
        Yt = function() {
            function t(t, e) {
                this.isActive = !1, this.proxify(t, e)
            }
            return t.prototype.decorate = function(t) {
                this.onCall = t
            }, t.prototype.enable = function() {
                this.isActive = !0
            }, t.prototype.disable = function() {
                this.isActive = !1
            }, t.prototype.proxify = function(t, e) {
                var i = t[e],
                    n = this;
                t[e] = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    n.onCall && n.isActive ? n.onCall(i, this, t) : i.apply(this, t)
                }
            }, t
        }(),
        Qt = function() {
            function t(t, e, i) {
                var n = this;
                this.nodeIdentifier = t, this.staticResourceUrlTracker = e, this.logger = i, this.canTrackRuleInsertions() && (this.insertRuleDecorator = new Yt(window.CSSStyleSheet.prototype, "insertRule"), this.insertRuleDecorator.decorate(function(t, e, i) {
                    t.apply(e, i), n.sendInsertion(e, i)
                }))
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.canTrackRuleInsertions() && this.insertRuleDecorator.enable()
            }, t.prototype.stop = function() {
                this.canTrackRuleInsertions() && this.insertRuleDecorator.disable()
            }, t.prototype.canTrackRuleInsertions = function() {
                return window.CSSStyleSheet && "function" == typeof window.CSSStyleSheet.prototype.insertRule
            }, t.prototype.sendInsertion = function(t, e) {
                var i = this,
                    n = e[0],
                    r = e[1];
                this.logger.tryToExecute("styleSheetRuleTracker.sendInsertion", function() {
                    i.nodeIdentifier.ifIdentified(t.ownerNode, function(t) {
                        i.onEventCallback({
                            date: Date.now(),
                            type: bt.STYLESHEET_RULE_INSERT,
                            args: T(r) ? [t, n, r] : [t, n]
                        }), i.staticResourceUrlTracker.scanCssString(n)
                    })
                })()
            }, t
        }(),
        Zt = function() {
            function t() {}
            return t.prototype.beforeSerialize = function(t, e) {
                return t
            }, t.prototype.beforeSerializeChildren = function(t, e, i) {
                return e
            }, t.prototype.beforeSerializeAttributes = function(t, e, i) {
                return e
            }, t.prototype.serializeNode = function(t, e, i) {
                return e
            }, t.prototype.serializeElementNode = function(t, e, i) {
                return e
            }, t.prototype.serializeAttribute = function(t, e, i, n) {
                return i
            }, t.prototype.serializeTextNode = function(t, e, i) {
                return e
            }, t.prototype.serializeCommentNode = function(t, e, i) {
                return e
            }, t.prototype.serializeDoctypeNode = function(t, e, i) {
                return e
            }, t.prototype.serializeDocumentNode = function(t, e, i) {
                return e
            }, t.prototype.serializeShadowRootNode = function(t, e, i) {
                return e
            }, t
        }(),
        te = function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(),
        ee = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.currentCsId = 1, e
            }
            return te(e, t), e.prototype.beforeSerialize = function(t, e) {
                return e.forceChildrenSerialization && this.popId(t), t
            }, e.prototype.beforeSerializeChildren = function(t, e) {
                var i = this;
                return e.filter(function(t) {
                    return !i.hasIdentifier(t)
                })
            }, e.prototype.serializeNode = function(t, e) {
                var i = this.currentCsId;
                return this.currentCsId += 1, t.__contentsquare_identifier = i, e.csId = i, e
            }, e.prototype.ifIdentified = function(t, e) {
                if (this.hasIdentifier(t)) return e(t.__contentsquare_identifier)
            }, e.prototype.popId = function(t) {
                var e = t.__contentsquare_identifier;
                delete t.__contentsquare_identifier;
                for (var i = t.firstChild; null !== i; i = i.nextSibling) this.popId(i);
                return e
            }, e.prototype.hasIdentifier = function(t) {
                return "__contentsquare_identifier" in t
            }, e
        }(Zt);

    function ie(t) {
        return t.nodeType === Node.ELEMENT_NODE
    }

    function ne(t) {
        return t.nodeType === Node.TEXT_NODE
    }

    function re(t) {
        return function(t) {
            return ie(t) && "link" === t.localName
        }(t) && "stylesheet" === t.rel
    }

    function oe(t) {
        return ie(t) && "style" === t.localName
    }
    var se, ae = function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(),
        ce = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return ae(e, t), e.prototype.beforeSerializeChildren = function(t, e) {
                if (oe(t)) {
                    var i = this.cssRules(t);
                    this.isEmptyStyleElementWithRules(t, i) && e.push(this.createTextNodeFromRules(i))
                }
                return e
            }, e.prototype.cssRules = function(t) {
                try {
                    var e = t.sheet;
                    if (!e) return;
                    return e.cssRules || e.rules
                } catch (t) {
                    if ("SecurityError" !== t.name && "InvalidAccessError" !== t.name) throw t;
                    return
                }
            }, e.prototype.isEmptyStyleElementWithRules = function(t, e) {
                var i = t.textContent || "";
                return /^\s*$/.test(i) && void 0 !== e && 0 !== e.length
            }, e.prototype.createTextNodeFromRules = function(t) {
                var e = c(t).map(function(t) {
                    return t.cssText
                }).join("");
                return document.createTextNode(e)
            }, e.prototype.serializeNode = function(t, e) {
                return e.nodeType = t.nodeType, e.format = wt.WebElement, e
            }, e.prototype.serializeElementNode = function(t, e) {
                return e.tagName = t.tagName, e.localName = t.localName, e.namespaceURI = t.namespaceURI, e
            }, e.prototype.serializeAttribute = function(t, e, i) {
                return i.name = e.name, i.value = e.value, i.namespaceURI = null !== e.namespaceURI ? e.namespaceURI : "", i
            }, e.prototype.serializeTextNode = function(t, e) {
                return e.data = t.data, e
            }, e.prototype.serializeCommentNode = function(t, e) {
                return e.data = t.data, e
            }, e.prototype.serializeDoctypeNode = function(t, e) {
                return e.name = t.name, e.publicId = t.publicId, e.systemId = t.systemId, e
            }, e.prototype.serializeDocumentNode = function(t, i) {
                return i.baseURI = e.getBaseURI(t), i
            }, e.prototype.serializeShadowRootNode = function(t, e) {
                return e.mode = t.mode, e
            }, e.getBaseURI = function(t) {
                var e = t.baseURI;
                if (null === e || void 0 === e) {
                    var i = t.getElementsByTagName("base");
                    e = 0 !== i.length ? i[0].href : t.URL
                }
                return e
            }, e
        }(Zt),
        ue = function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(),
        he = ["value", "checked", "src", "data", "alt"],
        pe = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return ue(e, t), e.prototype.beforeSerializeChildren = function(t, e) {
                return this.isSensitiveElementNode(t) ? [] : e
            }, e.prototype.beforeSerializeAttributes = function(t, e) {
                var i = this;
                return this.isSensitiveElementNode(t) && e.push(this.createSensitiveElementDimensionsAttribute(t)), e.filter(function(e) {
                    return !i.isSensitiveAttributeName(t, e.name)
                })
            }, e.prototype.isSensitiveElementNode = function(t) {
                return ie(t) && (t.hasAttribute("data-cs-mask") || function(t) {
                    return ie(t) && "script" === t.localName
                }(t))
            }, e.prototype.isSensitiveAttributeName = function(t, e) {
                return this.isSensitiveElementNode(t) && -1 !== he.indexOf(e) || this.isSensitiveInputValue(t, e)
            }, e.prototype.isSensitiveInputValue = function(t, e) {
                return function(t) {
                    return ie(t) && "input" === t.localName
                }(t) && "value" === e && "button" !== t.getAttribute("type")
            }, e.prototype.createSensitiveElementDimensionsAttribute = function(t) {
                var e = t.getBoundingClientRect(),
                    i = document.createAttribute("style");
                return i.value = "width: " + e.width + "px; height: " + e.height + "px;", i
            }, e
        }(Zt),
        le = function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(),
        fe = ["id", "class", "style", "src", "srcset", "href", "rel", "type", "width", "height", "media"],
        de = /[^\s]/g,
        ge = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.pii = e, i
            }
            return le(e, t), e.prototype.beforeSerializeChildren = function(t, e, i) {
                return oe(t) && (i.withAnonymization = !1), e
            }, e.prototype.serializeNode = function(t, e, i) {
                return e.anonymized = i.withAnonymization, e
            }, e.prototype.serializeAttribute = function(t, e, i, n) {
                i.anonymized = n.withAnonymization;
                var r = n.withAnonymization ? this.anonymizeAttributeValue(e.name, e.value) : e.value;
                return i.value = this.pii.anonymize(r), i
            }, e.prototype.serializeTextNode = function(t, e, i) {
                var n = t.data,
                    r = i.withAnonymization ? this.anonymizeText(n) : n;
                return e.data = this.pii.anonymize(r), e
            }, e.prototype.anonymizeAttributeValue = function(t, e) {
                return -1 === fe.indexOf(t) ? "" : e
            }, e.prototype.anonymizeText = function(t) {
                return t.replace(de, "a")
            }, e
        }(Zt),
        ve = function() {
            function t(t, e) {
                this.storageName = t, this.logger = e
            }
            return t.prototype.save = function(t) {
                localStorage.setItem(this.storageName, JSON.stringify(t))
            }, t.prototype.clear = function() {
                localStorage.removeItem(this.storageName)
            }, t.prototype.recover = function() {
                var t = localStorage.getItem(this.storageName);
                if (null === t) return null;
                var e = null;
                try {
                    e = JSON.parse(t)
                } catch (e) {
                    this.logger.logError("Invalid item in localStorage.\n         (key:" + this.storageName + "; value:" + t + ")")
                } finally {
                    this.clear()
                }
                return e
            }, t
        }(),
        ye = function() {
            return (ye = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        },
        me = function() {
            function t() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.requestParametersProviders = t
            }
            return t.prototype.getRequestParameters = function() {
                return this.requestParametersProviders.reduce(function(t, e) {
                    return ye({}, e.getRequestParameters(), t)
                }, {})
            }, t
        }(),
        Se = function() {
            function t(t) {
                this.asyncTaskFactory = t, this.userActive = !1, this.pendingInactivity = null
            }
            return t.prototype.start = function() {
                this.userActive = !0, this.createPendingInactivity()
            }, t.prototype.stop = function() {
                this.userActive = !1, this.clearPendingInactivity()
            }, t.prototype.trackActivity = function() {
                this.userActive || (this.onActivityResumedCallback(), this.userActive = !0), this.clearPendingInactivity(), this.createPendingInactivity()
            }, t.prototype.createPendingInactivity = function() {
                var t = this;
                this.pendingInactivity = this.asyncTaskFactory.create("recorded user inactive", function() {
                    t.userActive = !1, t.clearPendingInactivity(), t.onActivityStoppedCallback()
                }, 3e4)
            }, t.prototype.clearPendingInactivity = function() {
                null !== this.pendingInactivity && (this.pendingInactivity.cancel(), this.pendingInactivity = null)
            }, t.prototype.isUserActive = function() {
                return this.userActive
            }, t.prototype.onActivityStopped = function(t) {
                this.onActivityStoppedCallback = t
            }, t.prototype.onActivityResumed = function(t) {
                this.onActivityResumedCallback = t
            }, t
        }(),
        Ee = function() {
            function t(t, e, i, n) {
                var r = this;
                this.logger = t, this.taskName = e, this.task = i, this.timeout = n, this.timeoutId = setTimeout(function() {
                    r.execute()
                }, this.timeout)
            }
            return t.prototype.execute = function() {
                var t = this;
                this.logger.tryToExecute(this.taskName, function() {
                    t.task()
                })()
            }, t.prototype.cancel = function() {
                clearTimeout(this.timeoutId)
            }, t
        }(),
        we = function() {
            function t(t) {
                this.logger = t
            }
            return t.prototype.create = function(t, e, i) {
                return new Ee(this.logger, t, e, i)
            }, t
        }();
    ! function(t) {
        function e() {
            var t = [n()];
            return document.documentElement && t.push(document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight), document.body && t.push(document.body.scrollHeight, document.body.offsetHeight), Math.max.apply(Math, t)
        }

        function i() {
            return document.documentElement.scrollWidth
        }

        function n() {
            return window.innerHeight
        }

        function r() {
            return window.innerWidth
        }

        function o() {
            return screen.width
        }

        function s() {
            return screen.height
        }
        t.documentHeight = e, t.documentWidth = i, t.windowHeight = n, t.windowWidth = r, t.screenWidth = o, t.screenHeight = s, t.windowOffsetX = function() {
            return window.pageXOffset
        }, t.windowOffsetY = function() {
            return window.pageYOffset
        }, t.getRequestParameters = function() {
            return {
                dw: "" + i(),
                dh: "" + e(),
                ww: "" + r(),
                wh: "" + n(),
                sw: "" + o(),
                sh: "" + s()
            }
        }
    }(se || (se = {}));
    var Ce = function() {
            function t(t, e, i) {
                var n = this;
                this.logger = t, this.location = e, this.pii = i, this.eventHandlers = [{
                    boundElement: window,
                    type: "resize",
                    listener: function() {
                        return n.resizeListener()
                    }
                }, {
                    boundElement: window,
                    type: "hashchange",
                    listener: function() {
                        return n.hashChangeListener()
                    }
                }, {
                    boundElement: document,
                    type: "visibilitychange",
                    listener: function() {
                        return n.visibilityChangeListener()
                    }
                }]
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = function(e) {
                    e.date = Date.now(), t(e)
                }
            }, t.prototype.start = function() {
                this.bindHandlers(), this.triggerInitialEvents()
            }, t.prototype.stop = function() {
                this.unbindHandlers()
            }, t.prototype.bindHandlers = function() {
                this.eventHandlers.forEach(function(t) {
                    return It(t)
                })
            }, t.prototype.unbindHandlers = function() {
                this.eventHandlers.forEach(function(t) {
                    return xt(t)
                })
            }, t.prototype.triggerInitialEvents = function() {
                this.resizeListener(), this.hashChangeListener()
            }, t.prototype.resizeListener = function() {
                var t = this;
                this.logger.tryToExecute("resize", function() {
                    t.onEventCallback({
                        type: bt.RESIZE,
                        args: [se.windowWidth(), se.windowHeight()]
                    })
                })()
            }, t.prototype.hashChangeListener = function() {
                var t = this;
                this.logger.tryToExecute("hashChange", function() {
                    t.onEventCallback({
                        type: bt.HASH_CHANGE,
                        args: [t.pii.anonymize(t.location.href)]
                    })
                })()
            }, t.prototype.visibilityChangeListener = function() {
                var t = this;
                this.logger.tryToExecute("visibilityChange", function() {
                    t.onEventCallback({
                        type: bt.VISIBILITY_CHANGE,
                        args: [document.visibilityState]
                    })
                })()
            }, t
        }(),
        Re = function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(),
        Te = function(t) {
            function e(e, i, n, r) {
                var o = t.call(this) || this;
                return o.recordingPageEventsTracker = e, o.recordingMutationsTracker = i, o.recordingActivityTracker = n, o.recordingRequest = r, o.recordingRequestDuringInactivityCount = 0, o.isMutationTrackerStopped = !1, o
            }
            return Re(e, t), e.prototype.init = function() {
                var t = this;
                this.recordingPageEventsTracker.onEvent(function() {
                    t.recordingActivityTracker.trackActivity(), t.recordingRequestDuringInactivityCount = 0
                }), this.recordingRequest.after(function() {
                    t.recordingRequestDuringInactivityCount += 1
                }), this.recordingActivityTracker.onActivityStopped(function() {
                    t.recordingRequestDuringInactivityCount >= 2 && (t.recordingMutationsTracker.stop(), t.isMutationTrackerStopped = !0)
                }), this.recordingActivityTracker.onActivityResumed(function() {
                    t.isMutationTrackerStopped && (t.recordingMutationsTracker.start(), t.isMutationTrackerStopped = !1)
                })
            }, e.prototype.onStart = function() {
                this.recordingActivityTracker.start()
            }, e.prototype.onStop = function() {
                this.recordingActivityTracker.stop()
            }, e
        }(jt),
        be = i(0);

    function ke(t) {
        return t.split(/,$/)[0]
    }
    var Pe, Ae = function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(),
        Oe = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.toAbsoluteUrlHelperAnchor = document.createElement("a"), e
            }
            return Ae(e, t), e.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, e.prototype.serializeElementNode = function(t, e, i) {
                return this.scanElement(t), e
            }, e.prototype.beforeSerializeChildren = function(t, e, i) {
                return this.scanStyleElement(t, e), e
            }, e.prototype.scanElement = function(t) {
                this.scanElementAttributes(t)
            }, e.prototype.scanAttribute = function(t, e) {
                this.scanElementAttributes(t, e)
            }, e.prototype.scanText = function(t) {
                ne(t) && t.parentNode && oe(t.parentNode) && this.scanCssString(t.data)
            }, e.prototype.scanStyleElement = function(t, e) {
                if (oe(t))
                    for (var i = 0, n = e; i < n.length; i++) {
                        var r = n[i];
                        ne(r) && this.scanCssString(r.data)
                    }
            }, e.prototype.scanElementAttributes = function(t, e) {
                this.scanCssLink(t, e), this.scanImage(t, e), this.scanStyleAttribute(t, e)
            }, e.prototype.scanCssLink = function(t, e) {
                !re(t) || e && "href" !== e || !t.href || this.onStaticResourceUrl(t.href)
            }, e.prototype.scanImage = function(t, e) {
                (function(t) {
                    return ie(t) && "img" === t.localName
                })(t) && (e && "src" !== e || !t.src || this.isDataUrl(t.src) || null === t.getAttribute("src") || this.isHashStartUrl(t.getAttribute("src")) || this.onStaticResourceUrl(t.src), e && "srcset" !== e || !t.srcset || this.scanSrcset(t.srcset))
            }, e.prototype.scanStyleAttribute = function(t, e) {
                e && "style" !== e || !t.hasAttribute("style") || this.scanCssString(t.getAttribute("style"))
            }, e.prototype.isHashStartUrl = function(t) {
                return N(t, "#")
            }, e.prototype.isDataUrl = function(t) {
                return N(t, "data:")
            }, e.prototype.scanCssString = function(t) {
                this.processRawUrls(Object(be.extractFrom)(t))
            }, e.prototype.scanSrcset = function(t) {
                this.processRawUrls(function t(e) {
                    var i = e.trim();
                    if ("" === e) return [];
                    var n = function(t) {
                            return t.split(/\s(.+)/)
                        }(i),
                        r = n[0],
                        o = n[1];
                    return o ? (_(r, ",") || (o = function(t) {
                        return t.split(/,(.+)/)[1] || ""
                    }(o)), [ke(r)].concat(t(o))) : [ke(r)]
                }(t))
            }, e.prototype.processRawUrls = function(t) {
                var e = this;
                return t.filter(function(t) {
                    return !e.isDataUrl(t)
                }).filter(function(t) {
                    return !e.isHashStartUrl(t)
                }).map(function(t) {
                    return e.toAbsoluteUrl(t)
                }).forEach(function(t) {
                    return e.onStaticResourceUrl(t)
                })
            }, e.prototype.toAbsoluteUrl = function(t) {
                return this.toAbsoluteUrlHelperAnchor.href = t, this.toAbsoluteUrlHelperAnchor.href
            }, e.prototype.onStaticResourceUrl = function(t) {
                this.onEventCallback({
                    date: Date.now(),
                    type: bt.STATIC_RESOURCE_URL,
                    args: [t]
                })
            }, e
        }(Zt);
    ! function(t) {
        t.REQUEST_START = "requestStart", t.DOM_INTERACTIVE = "domInteractive"
    }(Pe || (Pe = {}));
    var Ie, xe, Ne, _e = function() {
            function t(t) {
                this.windowPerformance = t.performance
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.areTimingsAvailable() && this.recordPerformanceTimings()
            }, t.prototype.recordPerformanceTimings = function() {
                var t = this.getPerformanceTimings();
                this.onEventCallback({
                    args: t,
                    date: Date.now(),
                    type: bt.PERFORMANCE_TIMINGS
                })
            }, t.prototype.areTimingsAvailable = function() {
                return !(!this.windowPerformance || !this.windowPerformance.timing)
            }, t.prototype.getPerformanceTimings = function() {
                return [{
                    performanceTiming: Pe.REQUEST_START,
                    timestamp: this.windowPerformance.timing.requestStart
                }, {
                    performanceTiming: Pe.DOM_INTERACTIVE,
                    timestamp: this.windowPerformance.timing.domInteractive
                }]
            }, t
        }(),
        Le = function() {
            function t(t, e, i, n, r, o, s, a, c, u) {
                this.sessionService = t, this.configuration = e, this.logger = i, this.compressor = n, this.selector = r, this.consentService = o, this.basicParameters = s, this.commandsService = a, this.pii = c, this.sessionRenewer = u
            }
            return t.prototype.init = function() {
                var t = new ce,
                    e = new ee,
                    i = new pe,
                    n = new ge(this.pii),
                    r = new Oe,
                    o = new kt([t, e, i, n, r]),
                    s = new Vt,
                    a = new qt,
                    c = new me(a, this.basicParameters),
                    u = this.createRecordingPostRequest(this.compressor);
                this.mutationSerializer = new Jt(this.consentService, o, e, i, n);
                var h = new Nt(this.logger, this.selector, e, i),
                    p = new _t(this.mutationSerializer, r, this.logger);
                this.recordingService = new Xt(u, s, c, a, new Qt(e, r, this.logger), p, h, new Ce(this.logger, window.location, this.pii), this.sessionRenewer, r, new _e(window)), this.recordingInactivityService = new Te(h, p, new Se(new we(this.logger)), u);
                var l = new ve("csPersisted", this.logger),
                    f = this.createRecordingPostRequest(this.compressor);
                this.recordingRecoveryService = new Kt(f, s, l), this.recordingInactivityService.init(), this.recordingService.init()
            }, t.prototype.onStartTracking = function() {
                this.recordingRecoveryService.recover(), this.sessionService.isReplayRecorded() && (this.recordingInactivityService.start(), this.recordingService.start(), this.recordingRecoveryService.start())
            }, t.prototype.onAfterArtificialPageView = function() {
                this.recordingService.clearStates(), this.sessionService.isReplayRecorded() ? (this.recordingInactivityService.restart(), this.recordingService.restart(), this.recordingRecoveryService.restart()) : (this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop())
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.recordingService.clearStates(), this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()
            }, t.prototype.onOptout = function() {
                this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()
            }, t.prototype.onConsentGranted = function() {
                this.mutationSerializer.resetAnonymization(), this.recordingService.triggerConsentGranted()
            }, t.prototype.onConsentWithdrawn = function() {
                this.mutationSerializer.resetAnonymization(), this.recordingService.triggerConsentWithdrawn()
            }, t.prototype.createRecordingPostRequest = function(t) {
                return new At(this.configuration.getRecordingUri(), "recording", t, this.logger)
            }, t.isSupported = function() {
                var t = new Bt(x),
                    e = "MutationObserver" in window && t.isSupported() && "visibilityState" in document;
                return t.terminateWorker(), e
            }, t
        }(),
        De = function() {
            function t(t, e) {
                this.visitorService = t, this.sessionService = e, this.naturalPageViewSent = !1
            }
            return t.prototype.isNaturalPageViewSent = function() {
                return this.naturalPageViewSent
            }, t.prototype.setNaturalPageViewSent = function(t) {
                this.naturalPageViewSent = t
            }, t.prototype.getTrackingContext = function() {
                var t = this.getSessionKey(),
                    e = this.getPageNumber();
                return t && e ? {
                    sessionKey: t,
                    pageNumber: e
                } : null
            }, t.prototype.getSessionKey = function() {
                if (this.visitorService.doesVisitorExist()) {
                    var t = this.visitorService.getVisitor();
                    return t.id + "." + t.visitsCount
                }
                return null
            }, t.prototype.getPageNumber = function() {
                return this.sessionService.doesSessionExist() ? this.sessionService.getSession().pageNumber : null
            }, t
        }(),
        Me = function() {
            function t(t) {
                this.trackingContextService = t, this.registeredCallbacks = []
            }
            return t.prototype.handleCommand = function(t) {
                if (P(t) && (this.registerCallback(t), this.trackingContextService.isNaturalPageViewSent())) {
                    var e = this.trackingContextService.getTrackingContext();
                    null !== e && this.executeAsync(t, e)
                }
            }, t.prototype.registerCallback = function(t) {
                this.registeredCallbacks.push(t)
            }, t.prototype.executeRegisteredCallbacks = function() {
                var t = this,
                    e = this.trackingContextService.getTrackingContext();
                null !== e && this.registeredCallbacks.map(function(i) {
                    return t.executeAsync(i, e)
                })
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout(function() {
                    t(e)
                })
            }, t
        }(),
        Ve = function() {
            function t(t) {
                this.trackingContextService = t, this.pendingCallbacks = []
            }
            return t.prototype.handleCommand = function(t) {
                return this.trackingContextService.isNaturalPageViewSent() ? this.applyGetSessionKey(t) : void this.addPendingCallback(t)
            }, t.prototype.applyGetSessionKey = function(t) {
                var e = this.trackingContextService.getSessionKey();
                return this.hasCallback(t) && null !== e && this.executeAsync(t.callback, e), e
            }, t.prototype.addPendingCallback = function(t) {
                this.hasCallback(t) && this.pendingCallbacks.push(t.callback)
            }, t.prototype.flushPendingCallbacks = function() {
                var t = this,
                    e = this.trackingContextService.getSessionKey();
                null !== e && this.pendingCallbacks.forEach(function(i) {
                    t.executeAsync(i, e)
                }), this.pendingCallbacks = []
            }, t.prototype.hasCallback = function(t) {
                return t && "function" == typeof t.callback
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout(function() {
                    t(e)
                })
            }, t
        }(),
        qe = function() {
            function t(t, e, i) {
                this.visitorService = t, this.sessionService = e, this.commandsService = i
            }
            return t.prototype.init = function() {
                var t = this;
                this.trackingContextService = new De(this.visitorService, this.sessionService), this.afterPageViewService = new Me(this.trackingContextService), this.getSessionKeyService = new Ve(this.trackingContextService), this.commandsService.register("getSessionKey", function(e) {
                    return t.getSessionKeyService.handleCommand(e)
                }), this.commandsService.register("afterPageView", function(e) {
                    t.afterPageViewService.handleCommand(e)
                })
            }, t.prototype.onAfterNaturalPageView = function() {
                this.trackingContextService.setNaturalPageViewSent(!0), this.getSessionKeyService.flushPendingCallbacks(), this.afterPageViewService.executeRegisteredCallbacks()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.afterPageViewService.executeRegisteredCallbacks()
            }, t
        }(),
        Ue = 50,
        ze = 255,
        He = function() {
            function t(t, e) {
                this.key = t.slice(0, Ue), this.value = R(e) ? e.slice(0, ze) : e
            }
            return t.isValid = function(t, e) {
                return R(t) && (R(e) || C(e))
            }, t
        }(),
        Be = function() {
            function t(t, e) {
                this.batch = t, this.pii = e
            }
            return t.prototype.trackDynamicVariable = function(t, e) {
                He.isValid(t, e) && this.batch.add(new He(this.pii.anonymize(t), this.pii.anonymize(e)))
            }, t
        }(),
        Fe = function() {
            function t(t, e) {
                this.logger = t, this.compressor = e, this.batch = []
            }
            return t.prototype.add = function(t) {
                this.batch.push(t), this.setBatchReadyCall()
            }, t.prototype.clear = function() {
                this.batch = []
            }, t.prototype.onBatchReady = function(t) {
                this.batchReadyCallback = t
            }, t.prototype.getRequestParameters = function() {
                for (var t = {}, e = 0, i = this.batch; e < i.length; e++) {
                    var n = i[e];
                    t[n.key] = n.value
                }
                return {
                    dv: this.compressor.compressSync(JSON.stringify(t))
                }
            }, t.prototype.setBatchReadyCall = function() {
                var t = this;
                void 0 === this.timeout && (this.timeout = setTimeout(this.logger.tryToExecute("dynamicVariablesBatchReady", function() {
                    t.batchReadyCallback(), t.timeout = void 0
                })))
            }, t
        }(),
        je = "dvar",
        Ge = function() {
            function t(t, e, i, n, r, o) {
                this.commandsService = t, this.configuration = e, this.basicParameters = i, this.logger = n, this.compressor = r, this.pii = o, this.request = new J(this.configuration.getTrackerUri(), je), this.batch = new Fe(this.logger, this.compressor), this.service = new Be(this.batch, this.pii)
            }
            return t.prototype.init = function() {
                var t = this;
                this.request.setRequestParametersProviders(this.basicParameters, this.batch), this.batch.onBatchReady(function() {
                    return t.request.send()
                }), this.request.after(function() {
                    return t.batch.clear()
                }), this.commandsService.register("trackDynamicVariable", function(e) {
                    var i = void 0 === e ? {} : e,
                        n = i.key,
                        r = i.value;
                    t.service.trackDynamicVariable(n, r)
                })
            }, t
        }(),
        We = function() {
            function t(t, e) {
                this.id = t, this.revenue = e
            }
            return t.from = function(e) {
                var i = new t(e.id, parseFloat(e.revenue));
                return isNaN(parseFloat(e.tax)) || (i.tax = parseFloat(e.tax)), isNaN(parseFloat(e.shipping)) || (i.shipping = parseFloat(e.shipping)), i
            }, t
        }(),
        Xe = function() {
            function t(t, e, i, n) {
                this.id = t, this.name = e, this.price = i, this.quantity = n
            }
            return t.from = function(e) {
                if (!t.isValid(e)) return null;
                var i = new t(e.id, e.name, parseFloat(e.price), parseInt(e.quantity, 10));
                return T(e.sku) && (i.sku = e.sku), T(e.category) && (i.category = e.category), i
            }, t.isValid = function(t) {
                return R(t.id) && R(t.name) && w(parseFloat(t.price)) && C(parseInt(t.quantity, 10)) && (!T(t.sku) || R(t.sku)) && (!T(t.category) || R(t.category))
            }, t
        }(),
        $e = function() {
            function t(t, e, i) {
                this.pii = t, this.transactionRequest = e, this.sessionRenewer = i, this.clear()
            }
            return t.prototype.addTransaction = function(t) {
                var e = this.pii.anonymizeFields(t, ["id"]);
                this.transaction = We.from(e)
            }, t.prototype.getTransaction = function() {
                return this.transaction
            }, t.prototype.sendTransaction = function() {
                this.sessionRenewer.isSessionValid() && this.transactionRequest.send()
            }, t.prototype.addItem = function(t) {
                if (!P(t)) {
                    var e = this.pii.anonymizeFields(t, ["id", "name", "sku", "category"]),
                        i = Xe.from(e);
                    null !== i && this.transactionItems.push(i)
                }
            }, t.prototype.getItems = function() {
                return this.transactionItems
            }, t.prototype.clear = function() {
                this.transaction = {
                    id: void 0,
                    revenue: NaN
                }, this.transactionItems = []
            }, t.prototype.getRequestParameters = function() {
                var t = {
                    id: "" + this.transaction.id,
                    revenue: "" + this.transaction.revenue
                };
                return T(this.transaction.tax) && (t.tax = "" + this.transaction.tax), T(this.transaction.shipping) && (t.shipping = "" + this.transaction.shipping), t.items = window.JSON.stringify(this.transactionItems), t
            }, t
        }(),
        Ke = function() {
            function t(t, e, i, n, r, o) {
                this.configuration = t, this.visitorService = e, this.sessionService = i, this.commandsService = n, this.pii = r, this.sessionRenewer = o
            }
            return t.prototype.init = function() {
                var t = new J(this.configuration.getTrackerUri(), "transaction"),
                    e = new $e(this.pii, t, this.sessionRenewer);
                t.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, e, n), t.after(function() {
                    e.clear()
                }), this.commandsService.register("ecommerce:addTransaction", function(t) {
                    e.addTransaction(t)
                }), this.commandsService.register("ecommerce:addItem", function(t) {
                    return e.addItem(t)
                }), this.commandsService.register("ecommerce:send", function() {
                    return e.sendTransaction()
                })
            }, t
        }(),
        Je = function() {
            function t(t) {
                this.windowPerformance = t.performance
            }
            return t.prototype.getRequestParameters = function() {
                if (this.areTimingsUnavailable()) return {};
                var t = this.compute();
                return {
                    str: t.startRender,
                    di: t.domInteractive,
                    dc: t.domComplete,
                    fl: t.fullyLoaded
                }
            }, t.prototype.compute = function() {
                var t = this.windowPerformance.timing;
                return {
                    startRender: "" + (t.domLoading - t.requestStart),
                    domInteractive: "" + (t.domInteractive - t.requestStart),
                    domComplete: "" + (t.domComplete - t.requestStart),
                    fullyLoaded: "" + (t.loadEventEnd - t.requestStart)
                }
            }, t.prototype.areTimingsUnavailable = function() {
                return !(this.windowPerformance && this.windowPerformance.timing && this.windowPerformance.timing.loadEventEnd > 0)
            }, t
        }();
    ! function(t) {
        t[t.TAP = 0] = "TAP", t[t.LONG_PRESS = 1] = "LONG_PRESS", t[t.DRAG = 2] = "DRAG", t[t.FLICK = 3] = "FLICK"
    }(Ie || (Ie = {})),
    function(t) {
        t[t.UP = 1] = "UP", t[t.DOWN = 2] = "DOWN", t[t.LEFT = 3] = "LEFT", t[t.RIGHT = 4] = "RIGHT"
    }(xe || (xe = {})),
    function(t) {
        t[t.RESIZE = 0] = "RESIZE", t[t.SCROLL = 1] = "SCROLL", t[t.MOUSEMOVE = 2] = "MOUSEMOVE", t[t.MOUSEDOWN = 3] = "MOUSEDOWN", t[t.MOUSEUP = 4] = "MOUSEUP", t[t.CLICK = 5] = "CLICK", t[t.MOUSEOVER = 6] = "MOUSEOVER", t[t.MOUSEOUT = 7] = "MOUSEOUT", t[t.FOCUSIN = 11] = "FOCUSIN", t[t.FOCUSOUT = 12] = "FOCUSOUT", t[t.TAP = 14] = "TAP"
    }(Ne || (Ne = {}));
    var Ye, Qe = function() {
            function t(t, e) {
                var i = this;
                this.gestureTracker = t, this.pathComputation = e, this.gestureTracker.onEvent(function(t) {
                    return i.onTap(t)
                })
            }
            return t.prototype.onTap = function(t) {
                if (t.type === Ie.TAP) {
                    var e = this.pathComputation.getElementPath(t.target);
                    e !== y.INVALID_ELEMENT && this.onEventCallback({
                        type: Ne.TAP,
                        target: e
                    })
                }
            }, t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.gestureTracker.start()
            }, t.prototype.stop = function() {
                this.gestureTracker.stop()
            }, t
        }(),
        Ze = function() {
            function t() {}
            return t.prototype.compute = function(t, e) {
                var i = this.convertPixelsToDPs(e.x) - this.convertPixelsToDPs(t.x),
                    n = this.convertPixelsToDPs(e.y) - this.convertPixelsToDPs(t.y),
                    r = e.time - t.time;
                return {
                    duration: r,
                    distance: this.computeGestureDistance(i, n),
                    direction: this.computeGestureDirection(i, n),
                    velocity: this.computeGestureVelocity(i, n, r)
                }
            }, t.prototype.convertPixelsToDPs = function(t) {
                return t / window.devicePixelRatio
            }, t.prototype.computeGestureDistance = function(t, e) {
                return Math.round(Math.sqrt(t * t + e * e))
            }, t.prototype.computeGestureVelocity = function(t, e, i) {
                var n = i / 1e3,
                    r = t / n,
                    o = e / n;
                return Math.round(Math.abs(r) + Math.abs(o))
            }, t.prototype.computeGestureDirection = function(t, e) {
                return Math.abs(t) > Math.abs(e) ? t > 0 ? xe.RIGHT : xe.LEFT : e > 0 ? xe.DOWN : xe.UP
            }, t
        }(),
        ti = function(t) {
            return null !== t.target && t.target.shadowRoot && t.composedPath ? t.composedPath()[0] : t.target
        },
        ei = function() {
            function t() {
                this.metricsComputer = new Ze, this.reset()
            }
            return t.prototype.onGesture = function(t) {
                this.onGestureCallback = t
            }, t.prototype.isValidTouchEvent = function(t) {
                return "touches" in t && "changedTouches" in t
            }, t.prototype.processActionDown = function(t) {
                this.isGestureStart(t) && this.reset(), this.pendingInputs.push({
                    x: t.touches[0].pageX,
                    y: t.touches[0].pageY,
                    time: Date.now()
                }), this.target = ti(t)
            }, t.prototype.processActionMove = function() {
                this.hasMove = !0
            }, t.prototype.processActionUp = function(t) {
                this.pendingInputs.push({
                    x: t.changedTouches[0].pageX,
                    y: t.changedTouches[0].pageY,
                    time: Date.now()
                }), this.isValidSingleTouchGesture() && this.runDetection()
            }, t.prototype.reset = function() {
                this.pendingInputs = [], this.target = null, this.hasMove = !1
            }, t.prototype.runDetection = function() {
                var t = this.metricsComputer.compute(this.pendingInputs[0], this.pendingInputs[1]),
                    e = this.hasMove ? this.computeSwipeGesture(t) : this.computePressGesture(t);
                this.onGestureCallback(e)
            }, t.prototype.computeSwipeGesture = function(t) {
                return {
                    type: t.velocity < 100 ? Ie.DRAG : Ie.FLICK,
                    target: this.target,
                    velocity: t.velocity,
                    distance: t.distance,
                    direction: t.direction
                }
            }, t.prototype.computePressGesture = function(t) {
                return {
                    type: t.duration < 1e3 ? Ie.TAP : Ie.LONG_PRESS,
                    target: this.target
                }
            }, t.prototype.isGestureStart = function(t) {
                return 1 === t.touches.length
            }, t.prototype.isValidSingleTouchGesture = function() {
                return 2 === this.pendingInputs.length
            }, t
        }(),
        ii = function() {
            function t(t) {
                var e = this;
                this.logger = t, this.eventHandlers = [{
                    boundElement: document,
                    type: "touchstart",
                    listener: function(t) {
                        return e.processEvent(t)
                    }
                }, {
                    boundElement: document,
                    type: "touchmove",
                    listener: function(t) {
                        return e.processEvent(t)
                    }
                }, {
                    boundElement: document,
                    type: "touchend",
                    listener: function(t) {
                        return e.processEvent(t)
                    }
                }], this.detector = new ei
            }
            return t.prototype.onEvent = function(t) {
                this.detector.onGesture(t)
            }, t.prototype.start = function() {
                this.canDetectGesture() && this.eventHandlers.forEach(function(t) {
                    return It(t)
                })
            }, t.prototype.stop = function() {
                this.canDetectGesture() && this.eventHandlers.forEach(function(t) {
                    return xt(t)
                })
            }, t.prototype.canDetectGesture = function() {
                return void 0 !== window.devicePixelRatio
            }, t.prototype.processEvent = function(t) {
                var e = this;
                this.logger.tryToExecute("process gesture event", function() {
                    if (e.detector.isValidTouchEvent(t)) switch (t.type) {
                        case "touchstart":
                            e.detector.processActionDown(t);
                            break;
                        case "touchmove":
                            e.detector.processActionMove();
                            break;
                        case "touchend":
                            e.detector.processActionUp(t)
                    }
                })()
            }, t.isSwipe = function(t) {
                return t.type === Ie.FLICK || t.type === Ie.DRAG
            }, t
        }(),
        ni = "data-cs-scroll-container";
    ! function(t) {
        t.isEventOnScrollContainer = function(t) {
            return !(!b(t) || !A(t.target) || null === t.target.getAttribute(ni))
        }, t.getScrollContainer = function() {
            return document.querySelector("[" + ni + "]")
        }
    }(Ye || (Ye = {}));
    var ri = function() {
            function t(t, e, i, n) {
                var r = this;
                this.logger = t, this.sessionService = e, this.pathComputation = i, this.selector = n, this.FOCUSABLE_ELEMENTS_SELECTOR = "select, select *, input, textarea", this.HOVERABLE_ELEMENTS_SELECTOR = "a, a *, button, button *, select, select *, input, textarea", this.scrollContainerDimensionSent = !1, this.globalHandlers = [{
                    boundElement: window,
                    type: "resize",
                    listener: function() {
                        return r.resizeListener()
                    }
                }, {
                    boundElement: document,
                    type: "scroll",
                    listener: function(t) {
                        return r.scrollListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "mousemove",
                    listener: function(t) {
                        return r.mouseMoveListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "mousedown",
                    listener: function(t) {
                        return r.mouseDownListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "mouseup",
                    listener: function(t) {
                        return r.mouseUpListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "click",
                    listener: function(t) {
                        return r.clickListener(t)
                    }
                }], this.onSelectorHandlers = [{
                    boundElement: document,
                    type: "mouseover",
                    listener: this.selector.on(this.HOVERABLE_ELEMENTS_SELECTOR, function(t) {
                        return r.mouseOverListener(t)
                    })
                }, {
                    boundElement: document,
                    type: "mouseout",
                    listener: this.selector.on(this.HOVERABLE_ELEMENTS_SELECTOR, function(t) {
                        return r.mouseOutListener(t)
                    })
                }, {
                    boundElement: document,
                    type: "focusin",
                    listener: this.selector.on(this.FOCUSABLE_ELEMENTS_SELECTOR, function(t) {
                        return r.focusInListener(t)
                    })
                }, {
                    boundElement: document,
                    type: "focusout",
                    listener: this.selector.on(this.FOCUSABLE_ELEMENTS_SELECTOR, function(t) {
                        return r.focusOutListener(t)
                    })
                }]
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.getSupportedHandlers().forEach(function(t) {
                    return It(t)
                }), this.resizeListener()
            }, t.prototype.stop = function() {
                this.getSupportedHandlers().forEach(function(t) {
                    return xt(t)
                })
            }, t.prototype.getSupportedHandlers = function() {
                return this.selector.isMatchesSelectorSupported() ? this.globalHandlers.concat(this.onSelectorHandlers) : (this.logger.logMessage("Element.matches is not implemented yet"), this.globalHandlers)
            }, t.prototype.resizeListener = function() {
                var t = this;
                this.logger.tryToExecute("Event handler type: resize", function() {
                    var e = Ye.getScrollContainer(),
                        i = A(e);
                    i && (t.scrollContainerDimensionSent = !0), t.onEventCallback({
                        type: Ne.RESIZE,
                        x: i ? e.clientWidth : se.windowWidth(),
                        y: i ? e.clientHeight : se.windowHeight()
                    })
                })()
            }, t.prototype.scrollListener = function(t) {
                var e = this;
                this.logger.tryToExecute("Event handler type: scroll", function() {
                    if (e.sessionService.isAnalysisRecorded()) {
                        var i = Ye.isEventOnScrollContainer(t);
                        !e.scrollContainerDimensionSent && i && e.resizeListener(), e.onEventCallback({
                            type: Ne.SCROLL,
                            x: i ? t.target.scrollLeft : se.windowOffsetX(),
                            y: i ? t.target.scrollTop : se.windowOffsetY()
                        })
                    }
                })()
            }, t.prototype.mouseMoveListener = function(t) {
                var e = this;
                this.logger.tryToExecute("Event handler type: mouseMove", function() {
                    e.sessionService.isAnalysisRecorded() && e.onEventCallback({
                        type: Ne.MOUSEMOVE,
                        x: t.pageX,
                        y: t.pageY
                    })
                })()
            }, t.prototype.mouseDownListener = function(t) {
                var e = this;
                this.logger.tryToExecute("Event handler type: mouseDown", function() {
                    e.onEventCallbackIfValidTarget({
                        type: Ne.MOUSEDOWN,
                        x: t.pageX,
                        y: t.pageY,
                        target: e.pathComputation.getTargetPath(t)
                    })
                })()
            }, t.prototype.mouseUpListener = function(t) {
                var e = this;
                this.logger.tryToExecute("Event handler type: mouseUp", function() {
                    e.onEventCallback({
                        type: Ne.MOUSEUP,
                        x: t.pageX,
                        y: t.pageY,
                        target: e.pathComputation.getTargetPath(t)
                    })
                })()
            }, t.prototype.clickListener = function(t) {
                var e = this;
                this.logger.tryToExecute("Event handler type: click", function() {
                    e.onEventCallbackIfValidTarget({
                        type: Ne.CLICK,
                        x: t.pageX,
                        y: t.pageY,
                        target: e.pathComputation.getTargetPath(t)
                    })
                })()
            }, t.prototype.mouseOverListener = function(t) {
                var e = this;
                this.logger.tryToExecute("Event handler type: mouseOver", function() {
                    e.onEventCallbackIfValidTarget({
                        type: Ne.MOUSEOVER,
                        x: t.pageX,
                        y: t.pageY,
                        target: e.pathComputation.getTargetPath(t)
                    })
                })()
            }, t.prototype.mouseOutListener = function(t) {
                var e = this;
                this.logger.tryToExecute("Event handler type: mouseOut", function() {
                    e.onEventCallbackIfValidTarget({
                        type: Ne.MOUSEOUT,
                        x: t.pageX,
                        y: t.pageY,
                        target: e.pathComputation.getTargetPath(t)
                    })
                })()
            }, t.prototype.focusInListener = function(t) {
                var e = this;
                this.logger.tryToExecute("Event handler type: focusIn", function() {
                    e.onEventCallbackIfValidTarget({
                        type: Ne.FOCUSIN,
                        target: e.pathComputation.getTargetPath(t)
                    })
                })()
            }, t.prototype.focusOutListener = function(t) {
                var e = this;
                this.logger.tryToExecute("Event handler type: focusOut", function() {
                    e.onEventCallbackIfValidTarget({
                        type: Ne.FOCUSOUT,
                        target: e.pathComputation.getTargetPath(t)
                    })
                })()
            }, t.prototype.onEventCallbackIfValidTarget = function(t) {
                t.target !== y.INVALID_ELEMENT && this.onEventCallback(t)
            }, t
        }(),
        oi = function() {
            function t(t) {
                var e = this;
                this.logger = t, this.MAX_SCROLL_RATE_THRESHOLD = 100, this.maxScrollRate = 0, this.maxDocumentHeight = se.documentHeight(), this.maxScrollRateHandler = {
                    boundElement: document,
                    type: "scroll",
                    listener: function(t) {
                        return e.maxScrollRateListener(t)
                    }
                }
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                It(this.maxScrollRateHandler), this.reset()
            }, t.prototype.stop = function() {
                xt(this.maxScrollRateHandler)
            }, t.prototype.reset = function() {
                var t = Ye.getScrollContainer();
                if (null === t) this.maxScrollRate = this.currentScrollRate(se.documentHeight());
                else {
                    var e = this.computePaddingTop(t);
                    this.maxScrollRate = this.currentScrollRateWithScrollContainer(t, e)
                }
                this.onEventCallback()
            }, t.prototype.maxScrollRateListener = function(t) {
                var e = this;
                this.logger.tryToExecute("MaxScrollRate handler", function() {
                    var i, n;
                    if (Ye.isEventOnScrollContainer(t)) {
                        var r = t.target,
                            o = e.computePaddingTop(r);
                        i = e.documentHeightWithScrollContainer(r, o), n = e.currentScrollRateWithScrollContainer(r, o)
                    } else i = se.documentHeight(), n = e.currentScrollRate(i);
                    (n > e.maxScrollRate || i > e.maxDocumentHeight) && (e.maxScrollRate = n, i > e.maxDocumentHeight && (e.maxDocumentHeight = i), e.onEventCallback())
                })()
            }, t.prototype.currentScrollRate = function(t) {
                var e = Math.round(this.lastPixelLine() / t * 100);
                return Math.min(e, this.MAX_SCROLL_RATE_THRESHOLD)
            }, t.prototype.lastPixelLine = function() {
                var t = se.windowHeight();
                return se.windowOffsetY() + t
            }, t.prototype.currentScrollRateWithScrollContainer = function(t, e) {
                var i = t.scrollTop + t.clientHeight + t.getBoundingClientRect().top + e,
                    n = this.documentHeightWithScrollContainer(t, e),
                    r = Math.round(i / n * 100);
                return Math.min(r, this.MAX_SCROLL_RATE_THRESHOLD)
            }, t.prototype.computePaddingTop = function(t) {
                var e = window.getComputedStyle(t).paddingTop || "0px";
                return parseInt(e, 10)
            }, t.prototype.documentHeightWithScrollContainer = function(t, e) {
                return t.scrollHeight + t.getBoundingClientRect().top + e
            }, t.prototype.getRequestParameters = function() {
                return {
                    sr: "" + this.maxScrollRate,
                    mdh: "" + this.maxDocumentHeight
                }
            }, t
        }(),
        si = function() {
            return (si = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        },
        ai = function() {
            function t(t, e, i, n, r, o, s, a, c, u) {
                var h = this;
                this.analysisEventsTracker = t, this.gestureTracker = e, this.maxScrollRateTracker = i, this.performanceTimingMetrics = n, this.analysisEventsBatch = r, this.analysisEventsRequest = o, this.analysisLastEventsRequest = s, this.analysisEventRequestParameters = a, this.sessionRenewer = c, this.recoveryStorage = u, this.eventEmitter = new Ft, this.visibilityChangeListener = function() {
                    "hidden" === document.visibilityState && h.sendLastEvents()
                }, this.sendLastEvents = function() {
                    h.analysisEventsBatch.isEmpty() || h.analysisLastEventsRequest.send()
                }
            }
            return t.prototype.init = function() {
                var t = this;
                this.analysisEventsTracker.onEvent(function(e) {
                    return t.processEvent(e)
                }), this.gestureTracker.onEvent(function(e) {
                    return t.processEvent(e)
                }), this.maxScrollRateTracker.onEvent(function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.maxScrollRateTracker)
                }), this.bindRequests()
            }, t.prototype.bindRequests = function() {
                var t = this;
                this.analysisEventsRequest.setRequestParametersProviders(this.analysisEventsBatch), this.analysisEventsRequest.before(function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.performanceTimingMetrics), t.analysisEventsBatch.enableCompression()
                }), this.analysisEventsRequest.after(function() {
                    t.analysisEventsBatch.clearEvents(), t.analysisEventsBatch.setRequestParametersFromProvider(t.analysisEventRequestParameters)
                }), this.analysisLastEventsRequest.setRequestParametersProviders(this.analysisEventsBatch), this.analysisLastEventsRequest.before(function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.performanceTimingMetrics), t.analysisEventsBatch.disableCompression()
                }), this.analysisLastEventsRequest.onBeaconSuccess(function() {
                    t.analysisEventsBatch.clearEvents(), t.analysisEventsBatch.setRequestParametersFromProvider(t.analysisEventRequestParameters)
                }), this.analysisLastEventsRequest.onBeaconFailure(function() {
                    t.saveLastEvents()
                })
            }, t.prototype.initStates = function() {
                this.analysisEventsBatch.setRequestParametersFromProvider(this.analysisEventRequestParameters), this.resetStartTime()
            }, t.prototype.start = function() {
                this.addLastEventsListeners(), this.analysisEventsTracker.start(), this.maxScrollRateTracker.start(), this.gestureTracker.start()
            }, t.prototype.processEvent = function(t) {
                this.sessionRenewer.isSessionValid() && (this.analysisEventsBatch.addEvent(this.serializeAnalysisEvent(t)), this.analysisEventsBatch.isFull() && this.sendEvents(), this.eventEmitter.emit("analysisEvent", si({}, t, {
                    typeName: Ne[t.type]
                })))
            }, t.prototype.serializeAnalysisEvent = function(t) {
                var e = [t.type, this.getRelativeTime()];
                return "x" in t && e.push(t.x), "y" in t && e.push(t.y), "target" in t && e.push(t.target), e
            }, t.prototype.sendEvents = function() {
                this.analysisEventsBatch.isEmpty() || this.analysisEventsRequest.send()
            }, t.prototype.stop = function() {
                this.removeLastEventsListeners(), this.analysisEventsTracker.stop(), this.maxScrollRateTracker.stop(), this.gestureTracker.stop(), this.analysisEventsBatch.empty()
            }, t.prototype.clearStates = function() {
                this.sendEvents(), this.maxScrollRateTracker.reset()
            }, t.prototype.resetStartTime = function() {
                this.startTime = Date.now()
            }, t.prototype.getRelativeTime = function() {
                return Date.now() - this.startTime
            }, t.prototype.addLastEventsListeners = function() {
                this.addVisibilityChangeListener(), this.addPageHideListener(), this.addBlurListener()
            }, t.prototype.removeLastEventsListeners = function() {
                this.removeVisibilityChangeListener(), this.removePageHideListener(), this.removeBlurListener()
            }, t.prototype.addVisibilityChangeListener = function() {
                document.addEventListener("visibilitychange", this.visibilityChangeListener)
            }, t.prototype.removeVisibilityChangeListener = function() {
                document.removeEventListener("visibilitychange", this.visibilityChangeListener)
            }, t.prototype.addPageHideListener = function() {
                window.addEventListener("pagehide", this.sendLastEvents)
            }, t.prototype.removePageHideListener = function() {
                window.removeEventListener("pagehide", this.sendLastEvents)
            }, t.prototype.addBlurListener = function() {
                window.addEventListener("blur", this.sendLastEvents)
            }, t.prototype.removeBlurListener = function() {
                window.removeEventListener("blur", this.sendLastEvents)
            }, t.prototype.saveLastEvents = function() {
                try {
                    this.analysisEventsBatch.isEmpty() || this.recoveryStorage.save({
                        events: this.analysisEventsBatch.getEvents(),
                        metadata: this.analysisEventsBatch.getMetadata()
                    })
                } catch (t) {}
            }, t
        }(),
        ci = function() {
            return (ci = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        },
        ui = 15360,
        hi = function() {
            function t(t, e, i) {
                void 0 === e && (e = []), void 0 === i && (i = {}), this.sessionService = t, this.events = e, this.requestParameters = i, this.compressed = !0, this.sizeCounter = new Dt(ui)
            }
            return t.prototype.addEvent = function(t) {
                this.sizeCounter.add(encodeURIComponent(JSON.stringify(t))), this.events.push(t)
            }, t.prototype.setRequestParametersFromProvider = function(t) {
                var e = t.getRequestParameters();
                for (var i in e) e.hasOwnProperty(i) && (this.requestParameters[i] = e[i])
            }, t.prototype.eventsCount = function() {
                return this.events.length
            }, t.prototype.clearEvents = function() {
                this.sizeCounter.reset(), this.events = []
            }, t.prototype.empty = function() {
                this.clearEvents()
            }, t.prototype.isFull = function() {
                return this.sizeCounter.isThresholdReached() || this.eventsCount() >= (this.sessionService.isAnalysisRecorded() ? 100 : 50)
            }, t.prototype.isEmpty = function() {
                return 0 === this.events.length
            }, t.prototype.getEvents = function() {
                return this.events
            }, t.prototype.getMetadata = function() {
                return this.requestParameters
            }, t.prototype.getRequestParameters = function() {
                var t = window.JSON.stringify(this.events);
                return this.compressed ? ci({}, this.requestParameters, {
                    e: zt.compressToBase64(t)
                }) : ci({}, this.requestParameters, {
                    eu: t
                })
            }, t.prototype.enableCompression = function() {
                this.compressed = !0
            }, t.prototype.disableCompression = function() {
                this.compressed = !1
            }, t
        }(),
        pi = function() {
            function t(t, e, i) {
                var n = this;
                this.sessionService = t, this.analysisEventsRecoveryRequest = e, this.recoveryStorage = i, this.visibilityChangeHandler = function() {
                    "visible" === document.visibilityState && n.sendPersistedRecordings()
                }
            }
            return t.prototype.start = function() {
                this.sendPersistedRecordings(), this.addVisibilityChangeListener()
            }, t.prototype.stop = function() {
                this.removeVisibilityChangeListener()
            }, t.prototype.getRecoveryStorage = function() {
                return this.recoveryStorage
            }, t.prototype.sendPersistedRecordings = function() {
                var t = this.recoveryStorage.recover();
                if (null !== t) {
                    var e = t,
                        i = e.metadata,
                        n = e.events,
                        r = new hi(this.sessionService, n, i);
                    this.analysisEventsRecoveryRequest.setRequestParametersProviders(r), this.analysisEventsRecoveryRequest.before(function() {
                        r.enableCompression()
                    }), this.analysisEventsRecoveryRequest.send()
                }
            }, t.prototype.addVisibilityChangeListener = function() {
                document.addEventListener("visibilitychange", this.visibilityChangeHandler)
            }, t.prototype.removeVisibilityChangeListener = function() {
                document.removeEventListener("visibilitychange", this.visibilityChangeHandler)
            }, t
        }(),
        li = "csLegacyRecovered",
        fi = "CSStorageData";
    var di = function() {
            var t = function(e, i) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(),
        gi = function(t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this;
                return n.onBeaconSuccessCallbacks = [], n.onBeaconFailureCallbacks = [], n
            }
            return di(e, t), e.prototype.setRequestPayloadProvider = function(t) {
                this.requestPayloadProvider = t
            }, e.prototype.onBeaconSuccess = function(t) {
                this.onBeaconSuccessCallbacks.push(t)
            }, e.prototype.onBeaconFailure = function(t) {
                this.onBeaconFailureCallbacks.push(t)
            }, e.prototype.send = function() {
                this.beforeRequestCallbacks.forEach(function(t) {
                    return t()
                });
                var t = this.retrieveParameters(),
                    e = j.toQuery(t),
                    i = this.retrievePayload();
                this.sendBeacon(e, i) ? this.onBeaconSuccessCallbacks.forEach(function(t) {
                    return t()
                }) : this.onBeaconFailureCallbacks.forEach(function(t) {
                    return t()
                }), this.afterRequestCallbacks.forEach(function(t) {
                    return t()
                })
            }, e.prototype.retrievePayload = function() {
                return this.requestPayloadProvider ? this.requestPayloadProvider.getRequestPayload() : ""
            }, e.prototype.sendBeacon = function(t, e) {
                return void 0 !== navigator.sendBeacon && navigator.sendBeacon(this.domainUri + "/" + this.path + "?" + t, e)
            }, e
        }($),
        vi = function() {
            function t(t, e, i, n, r, o, s, a, c) {
                this.configuration = t, this.visitorService = e, this.sessionService = i, this.logger = n, this.pathComputation = r, this.eventPathComputation = o, this.selector = s, this.commandsService = a, this.sessionRenewer = c
            }
            return t.prototype.init = function() {
                ! function() {
                    localStorage.removeItem(li);
                    for (var t = [], e = 0; e < localStorage.length; e += 1) {
                        var i = localStorage.key(e);
                        0 === i.indexOf(fi) && t.push(i)
                    }
                    t.forEach(function(t) {
                        return localStorage.removeItem(t)
                    })
                }();
                var t = new hi(this.sessionService);
                this.analysisEventsRecovery = this.createRecovery(), this.analysisEventsService = this.createService(t, this.analysisEventsRecovery.getRecoveryStorage()), this.analysisEventsService.init()
            }, t.prototype.onStartTracking = function() {
                this.analysisEventsRecovery.start(), this.analysisEventsService.start()
            }, t.prototype.onAfterNaturalPageView = function() {
                this.analysisEventsService.initStates()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.analysisEventsService.initStates()
            }, t.prototype.onBeforeArtificialPageView = function() {
                this.analysisEventsService.clearStates()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.analysisEventsService.clearStates(), this.analysisEventsService.stop(), this.analysisEventsRecovery.stop()
            }, t.prototype.onOptout = function() {
                this.analysisEventsService.stop(), this.analysisEventsRecovery.stop()
            }, t.prototype.createService = function(t, e) {
                var i = new Je(window),
                    r = new oi(this.logger),
                    o = new ri(this.logger, this.sessionService, this.eventPathComputation, this.selector),
                    s = new Qe(new ii(this.logger), this.pathComputation),
                    a = new J(this.configuration.getTrackerUri(), "events"),
                    c = new gi(this.configuration.getTrackerUri(), "events"),
                    u = new me(this.configuration, this.visitorService, this.sessionService, r, i, n);
                return new ai(o, s, r, i, t, a, c, u, this.sessionRenewer, e)
            }, t.prototype.createRecovery = function() {
                var t = new J(this.configuration.getTrackerUri(), "events");
                return new pi(this.sessionService, t, new ve("csAnalysisEventsPersisted", this.logger))
            }, t
        }(),
        yi = function() {
            function t(t, e, i, n, r, o, s) {
                this.sessionService = t, this.projectConfiguration = e, this.logger = i, this.compressor = n, this.consentService = r, this.htmlPageRequest = o, this.pii = s, this.stopSend = 0, this.startSend = 1
            }
            return t.prototype.init = function() {
                this.htmlSent = !1, this.isPageViewAlreadyTracked = !1
            }, t.prototype.send = function() {
                this.sendHtml(!1)
            }, t.prototype.forceSend = function() {
                this.sendHtml(!0)
            }, t.prototype.incrementStartSend = function() {
                this.startSend += 1
            }, t.prototype.incrementStopSend = function() {
                this.stopSend += 1
            }, t.prototype.setPageViewTracked = function() {
                this.isPageViewAlreadyTracked = !0
            }, t.prototype.sendHtml = function(t) {
                var e = this;
                if (this.isSendAllowed() && (t || this.isPageViewAlreadyTracked && !this.htmlSent && this.startSend > this.stopSend)) {
                    this.htmlSent = !0;
                    var i = this.stringifyHtml();
                    i = this.stripSensitiveContent(i), i = this.stripUserInputData(i), i = this.pii.anonymize(i), this.compressor.compress(i, function(t) {
                        e.logger.tryToExecute("Send compressed HTML", function() {
                            t && e.htmlPageRequest.send(t)
                        })()
                    })
                }
            }, t.prototype.isSendAllowed = function() {
                return this.sessionService.isAnalysisRecorded() && this.projectConfiguration.collectHtml && this.consentService.isAllowedByConsent()
            }, t.prototype.stringifyHtml = function() {
                var t = document.doctype || window.document.doctype,
                    e = "";
                if (t) {
                    var i = t.publicId ? ' PUBLIC "' + t.publicId + '"' : "",
                        n = !t.publicId && t.systemId ? " SYSTEM" : "",
                        r = t.systemId ? ' "' + t.systemId + '"' : "";
                    e = "<!DOCTYPE " + t.name + i + n + r + ">"
                }
                return e += document.documentElement.outerHTML || "<html>" + document.documentElement.innerHTML + "</html>"
            }, t.prototype.stripSensitiveContent = function(t) {
                for (var e = t.replace(/<!-- MousetestSensitiveStart ([\s\S]*?)-->([\s\S]*?)<!-- MousetestSensitiveEnd -->/g, "$1"), i = document.querySelectorAll("[data-cs-mask]"), n = 0; n < i.length; n += 1) {
                    var r = i[n];
                    e = e.replace(r.outerHTML, r.outerHTML.replace(r.innerHTML, ""))
                }
                return e
            }, t.prototype.stripUserInputData = function(t) {
                var e = t.replace(/(<\s*input)([^>]*)(type\s*=\s*('|")\s*(?:email|file|hidden|number|password|search|tel|text)\s*\4)([^>]*)(value\s*=\s*'[^']*'|value\s*=\s*"[^"]*")/gim, "$1$2$3$5value=''");
                return e = (e = (e = e.replace(/(<\s*input)([^>]*)(value\s*=\s*'[^']*'|value\s*=\s*"[^"]*")([^>]*)(type\s*=\s*('|")\s*(?:email|file|hidden|number|password|search|tel|text)\s*\6)/gim, "$1$2value=''$4$5")).replace(/(<\s*input)((?:(?!type\s*=\s*)[^>])*)(?:value\s*=\s*'[^']*'|value\s*=\s*"[^"]*")((?:(?!type\s*=\s*).)*?>)/gim, "$1$2value=''$3")).replace(/(<\s*textarea)([^>]*)>([^<]*)/gim, "$1$2>")
            }, t
        }(),
        mi = function() {
            function t(t, e, i) {
                this.domainUri = t, this.path = e, this.parametersGroup = i
            }
            return t.prototype.send = function(t) {
                var e = this.parametersGroup.getRequestParameters();
                e.url = window.location.href, e.content = t;
                var i = j.toQuery(e);
                this.sendHtmlPageRequest(i)
            }, t.prototype.sendHtmlPageRequest = function(t) {
                var e = new XMLHttpRequest;
                e.open("POST", this.domainUri + "/" + this.path, !0), e.setRequestHeader("Access-Control-Expose-Headers", "Content-compression"), e.setRequestHeader("Content-type", "text/plain; charset=UTF-8"), e.setRequestHeader("Content-compression", "LZString"), e.onreadystatechange = function() {}, e.send(t)
            }, t
        }(),
        Si = function() {
            function t(t, e, i, n, r, o, s, a) {
                this.visitorService = t, this.sessionService = e, this.configuration = i, this.logger = n, this.compressor = r, this.consentService = o, this.commandsService = s, this.pii = a
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new me(this.configuration, this.visitorService, this.sessionService, n),
                    i = new mi(this.configuration.getTrackerUri(), "page", e);
                this.htmlPage = new yi(this.sessionService, this.configuration, this.logger, this.compressor, this.consentService, i, this.pii), this.htmlPage.init(), this.commandsService.register("page:asyncSendHtml", function() {
                    t.htmlPage.incrementStopSend()
                }), this.commandsService.register("page:sendHtml", function() {
                    t.htmlPage.incrementStartSend(), t.htmlPage.send()
                })
            }, t.prototype.onStartTracking = function() {
                this.htmlPage.send()
            }, t.prototype.onAfterNaturalPageView = function() {
                this.htmlPage.setPageViewTracked()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.htmlPage.forceSend()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.htmlPage.init()
            }, t
        }(),
        Ei = function() {
            function t(t, e, i, n) {
                this.lifeCycleEvents = t, this.pageViewRequest = e, this.pii = i, this.urlService = n
            }
            return t.prototype.init = function() {
                this.isNaturalPageViewTriggered = !1
            }, t.prototype.triggerNaturalPageView = function() {
                this.isNaturalPageViewTriggered || this.sendNaturalPageView()
            }, t.prototype.triggerArtificialPageView = function(t) {
                this.urlService.overridePath(t), this.isNaturalPageViewTriggered ? this.sendArtificialPageView() : this.sendNaturalPageView()
            }, t.prototype.sendNaturalPageView = function() {
                this.isNaturalPageViewTriggered = !0, this.lifeCycleEvents.emitBeforeNaturalPageView(), this.pageViewRequest.send(), this.lifeCycleEvents.emitAfterNaturalPageView()
            }, t.prototype.sendArtificialPageView = function() {
                this.lifeCycleEvents.emitBeforeArtificialPageView(), this.pageViewRequest.send(), this.lifeCycleEvents.emitAfterArtificialPageView()
            }, t.prototype.getRequestParameters = function() {
                var t = this.urlService.getUrl();
                return {
                    url: this.pii.anonymize(t)
                }
            }, t
        }(),
        wi = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.systemLanguage || "unknown";

    function Ci() {
        return {
            la: wi
        }
    }
    var Ri = function() {
            function t(t, e) {
                this.pii = t, this.cookieDomain = e
            }
            return t.prototype.getRequestParameters = function() {
                return {
                    dr: this.get()
                }
            }, t.prototype.get = function() {
                var t = this.consumeTestingTagRedirectionReferrer();
                return this.pii.anonymize(t || this.getReferrer())
            }, t.prototype.consumeTestingTagRedirectionReferrer = function() {
                var t = B.get("uxt_referrer_source");
                return null !== t ? (B.remove("uxt_referrer_source", this.cookieDomain), t) : null
            }, t.prototype.getReferrer = function() {
                var t = "";
                try {
                    t = window.top.document.referrer
                } catch (e) {
                    if (window.parent) try {
                        t = window.parent.document.referrer
                    } catch (e) {
                        t = ""
                    }
                }
                return "" === t && (t = document.referrer), t
            }, t
        }(),
        Ti = function() {
            function t(t, e, i, n, r, o, s, a, c, u, h) {
                this.configuration = t, this.commandsService = e, this.lifeCycleEvents = i, this.visitorService = n, this.sessionService = r, this.consentService = o, this.customVariablesService = s, this.testContextService = a, this.pii = c, this.cookieDomain = u, this.urlService = h
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new J(this.configuration.getTrackerUri(), "pageview");
                this.pageViewService = new Ei(this.lifeCycleEvents, e, this.pii, this.urlService), this.pageViewService.init(), e.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, this.testContextService, se, new Ri(this.pii, this.cookieDomain), this.pageViewService, this.consentService, r, this.customVariablesService, n), this.commandsService.register("trackPageview", function(e) {
                    return t.pageViewService.triggerArtificialPageView(e)
                }), this.commandsService.register("setPath", function(e) {
                    return t.urlService.overridePath(e)
                }), this.commandsService.register("setQuery", function(e) {
                    return t.urlService.overrideQuery(e)
                })
            }, t.prototype.start = function() {
                this.pageViewService.triggerNaturalPageView()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.pageViewService.init()
            }, t
        }(),
        bi = function() {
            function t(t, e) {
                this.pathComputation = t, this.configuration = e
            }
            return t.prototype.getTargetPath = function(t) {
                var e = ti(t);
                return this.pathComputation.getElementPath(e, {
                    dynamicIdRegex: this.configuration.dynamicIdRegex
                })
            }, t.prototype.hasValidTarget = function(t) {
                var e = ti(t);
                return this.pathComputation.isValidElement(e)
            }, t
        }(),
        ki = function() {
            function t(t) {
                this.pathComputation = t
            }
            return t.prototype.on = function(t, e) {
                var i = this;
                return function(n) {
                    i.pathComputation.hasValidTarget(n) && i.targetMatchesSelector(n, t) && e(n)
                }
            }, t.prototype.targetMatchesSelector = function(t, e) {
                var i = ti(t);
                return this.getSelectorMatcher().call(i, e)
            }, t.prototype.isMatchesSelectorSupported = function() {
                return !!this.getSelectorMatcher()
            }, t.prototype.getSelectorMatcher = function() {
                return Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector
            }, t
        }(),
        Pi = function() {
            return (Pi = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        },
        Ai = function() {
            function t(t, e, i) {
                this.configuration = t, this.visitorService = e, this.sessionService = i
            }
            return t.prototype.getRequestParameters = function() {
                if (!this.visitorService.doesVisitorExist() || !this.sessionService.doesSessionExist()) return {};
                var t = this.visitorService.getVisitor();
                return Pi({}, tt(), this.configuration.getRequestParameters(), {
                    uu: t.id,
                    sn: "" + t.visitsCount,
                    pn: "" + this.sessionService.getSession().pageNumber
                })
            }, t
        }(),
        Oi = {
            SESSION: ["visit", 2],
            PAGE: ["page", 3]
        },
        Ii = function() {
            function t(t, e) {
                this.pii = t, this.cookieDomain = e, this.customVariablesPage = {}
            }
            return t.prototype.set = function(t, e, i, n) {
                var r, o;
                if (t > 0 && b(e) && b(i)) {
                    var s = this.pii.anonymize("" + (R(e) ? e : String(e))),
                        a = this.pii.anonymize("" + (R(i) ? i : String(i)));
                    if (r = [s.slice(0, 20), a.slice(0, 255)], o = "" !== i, !T(n) || Oi.SESSION.indexOf(n) >= 0) {
                        var c = this.getCustomVariablesSession();
                        o ? c[t] = r : delete c[t], et.set(c, this.cookieDomain)
                    }(!T(n) || Oi.PAGE.indexOf(n) >= 0) && (o ? this.customVariablesPage[t] = r : delete this.customVariablesPage[t])
                }
            }, t.prototype.getRequestParameters = function() {
                var t = this.getCustomVariablesSession();
                for (var e in this.customVariablesPage) this.customVariablesPage.hasOwnProperty(e) && (t[e] = this.customVariablesPage[e]);
                if (window.JSON.stringify(t).length <= 2) return {};
                var i = {
                    cvars: this.getValidCustomVars(t)
                };
                return this.customVariablesPage && window.JSON.stringify(this.customVariablesPage).length > 2 && (i.cvarp = this.getValidCustomVars(this.customVariablesPage)), i
            }, t.prototype.getCustomVariablesSession = function() {
                var t = et.get();
                return null !== t && function(t) {
                    return "object" == typeof t
                }(t) ? t : {}
            }, t.prototype.getValidCustomVars = function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) {
                        var i = parseInt(e, 10),
                            n = t[e],
                            r = n[0],
                            o = n[1];
                        (!k(i, 1, 20) || r.length > 20 || o.length > 255) && delete t[e]
                    }
                var s = function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                }(t) ? [] : t;
                return window.JSON.stringify(s)
            }, t
        }(),
        xi = function() {
            function t(t, e, i) {
                this.commandsService = t, this.customVariablesService = e, this.cookieDomain = i
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register("setCustomVariable", function(e, i, n, r) {
                    t.customVariablesService.set(e, i, n, r)
                })
            }, t.prototype.onOptout = function() {
                et.remove(this.cookieDomain)
            }, t
        }(),
        Ni = function() {
            function t() {}
            return t.prototype.set = function(t) {
                this.activeTests = t.tests, this.testingTagVersion = t.tagVersion
            }, t.prototype.getRequestParameters = function() {
                return this.activeTests && this.testingTagVersion ? {
                    uxt: function(t) {
                        return window.JSON.stringify(t.map(function(t) {
                            return [t.id, t.version]
                        }))
                    }(this.activeTests),
                    uxtv: this.testingTagVersion
                } : {}
            }, t
        }();
    var _i = function() {
            function t(t, e) {
                this.commandsService = t, this.testContextService = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register("setTestContext", function(e) {
                    return t.testContextService.set(e)
                })
            }, t
        }(),
        Li = function() {
            function t(t) {
                this.logger = t
            }
            return t.prototype.onLoad = function(t) {
                this.onLoadCallback = t
            }, t.prototype.start = function() {
                var t = this;
                this.onDocumentLoaded(function() {
                    t.logger.tryToExecute("onLoad", function() {
                        t.onLoadCallback()
                    })()
                })
            }, t.prototype.onDocumentLoaded = function(t) {
                function e() {
                    document.removeEventListener("DOMContentLoaded", e), window.removeEventListener("load", e), t()
                }
                "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? setTimeout(t) : (document.addEventListener("DOMContentLoaded", e), window.addEventListener("load", e))
            }, t
        }(),
        Di = function() {
            function t(t, e, i, n, r) {
                this.visitorService = t, this.sessionService = e, this.commandsService = i, this.cookieDomain = n, this.urlService = r
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register("clearSession", function() {
                    return t.sessionService.removeSession(t.cookieDomain)
                })
            }, t.prototype.onBeforeNaturalPageView = function() {
                this.visitorService.createOrUpdateVisitor(), this.sessionService.createOrUpdateSession(this.urlService.getUrl())
            }, t.prototype.onBeforeArtificialPageView = function() {
                this.visitorService.createOrUpdateVisitor(), this.sessionService.createOrUpdateSession(this.urlService.getUrl())
            }, t.prototype.onOptout = function() {
                this.visitorService.removeCurrentVisitor(), this.sessionService.removeCurrentSession()
            }, t
        }(),
        Mi = function() {
            function t(t) {
                this.sessionService = t
            }
            return t.prototype.onSessionExpired = function(t) {
                this.onSessionExpiredCallback = t
            }, t.prototype.isSessionValid = function() {
                var t = this.sessionService.hasValidSession();
                return !t && this.canRenewSession() ? (this.lastSessionRenewalTime = Date.now(), this.onSessionExpiredCallback(), this.sessionService.hasValidSession()) : t
            }, t.prototype.canRenewSession = function() {
                return !T(this.lastSessionRenewalTime) || Date.now() - this.lastSessionRenewalTime > 6e4
            }, t
        }(),
        Vi = function() {
            function t(t, e) {
                this.eMerchandisingRequest = t, this.configuration = e, this.products = []
            }
            return t.prototype.start = function() {
                this.collectEMerchandisingData(), this.sendEMerchandisingData()
            }, t.prototype.clearProducts = function() {
                this.products = []
            }, t.prototype.getRequestPayload = function() {
                return JSON.stringify({
                    targetUrl: this.targetUrl,
                    windowWidth: se.windowWidth(),
                    windowHeight: se.windowHeight(),
                    products: this.products
                })
            }, t.prototype.collectEMerchandisingData = function() {
                var t = this;
                this.targetUrl = window.location.href, c(document.querySelectorAll("a")).filter(function(t) {
                    return t.offsetWidth > 0 && t.offsetHeight > 0
                }).forEach(function(e) {
                    var i = {
                            targetPath: y.getElementPath(e, {
                                dynamicIdRegex: t.configuration.dynamicIdRegex
                            }),
                            fullPath: y.getElementPath(e, {
                                fullPath: !0
                            }),
                            width: e.offsetWidth,
                            height: e.offsetHeight,
                            href: e.href
                        },
                        n = e.querySelector("img");
                    null !== n && (i.imgSrc = n.src), t.products.push(i)
                })
            }, t.prototype.sendEMerchandisingData = function() {
                this.eMerchandisingRequest.send()
            }, t
        }(),
        qi = function() {
            function t(t, e, i, n, r) {
                this.configuration = t, this.logger = e, this.compressor = i, this.basicRequestParameters = n, this.customVariablesService = r
            }
            return t.prototype.init = function() {
                var t = this.createEMerchandisingPostRequest(this.compressor);
                t.setRequestParametersProviders(this.basicRequestParameters, this.customVariablesService), this.eMerchandisingService = new Vi(t, this.configuration), t.setRequestPayloadProvider(this.eMerchandisingService), t.setRequestHeader({
                    name: "Access-Control-Expose-Headers",
                    value: "Content-compression"
                }), t.setRequestHeader({
                    name: "Content-type",
                    value: "text/plain; charset=UTF-8"
                }), t.setRequestHeader({
                    name: "Content-compression",
                    value: "LZString"
                })
            }, t.prototype.onStartTracking = function() {
                this.eMerchandisingService.start()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.eMerchandisingService.clearProducts()
            }, t.prototype.onBeforeArtificialPageView = function() {
                this.eMerchandisingService.clearProducts()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.eMerchandisingService.start()
            }, t.prototype.createEMerchandisingPostRequest = function(t) {
                return new At(this.configuration.getEMerchandisingUri(), "emerch", t, this.logger)
            }, t
        }();

    function Ui(t, e, i) {
        if (!T(e) && !T(i)) return t.href;
        var n = T(e) ? function(t) {
                return N(t, "/") ? t : "/" + t
            }(e) : t.pathname,
            r = T(i) ? function(t) {
                return N(t, "?") || "" === t ? t : "?" + t
            }(i) : t.search;
        return t.protocol + "//" + t.host + n + r
    }
    var zi, Hi = function() {
            function t(t) {
                this.location = t
            }
            return t.prototype.overridePath = function(t) {
                T(t) && R(t) && (this.path = "" === t ? void 0 : t)
            }, t.prototype.overrideQuery = function(t) {
                T(t) && R(t) && (this.query = t)
            }, t.prototype.getUrl = function() {
                return Ui(this.location, this.path, this.query)
            }, t
        }(),
        Bi = function() {
            function t(t, e, i, n, r, o, s, a, c, u, h, p, l) {
                this.visitorService = t, this.sessionService = e, this.lifeCycleEvents = i, this.logger = n, this.commandsService = r, this.commandsModule = o, this.configuration = s, this.optoutModule = a, this.optoutService = c, this.consentModule = u, this.consentService = h, this.pii = p, this.cookieDomain = l
            }
            return t.prototype.start = function() {
                var t = this;
                if (this.optoutModule.init(), this.optoutService.init(), !this.optoutService.isActive()) {
                    var e = new Mi(this.sessionService),
                        i = new bi(y, this.configuration),
                        n = new ki(i),
                        r = new Bt(function(e) {
                            t.logger.logMessage(e)
                        }),
                        o = new Ai(this.configuration, this.visitorService, this.sessionService),
                        s = new vi(this.configuration, this.visitorService, this.sessionService, this.logger, y, i, n, this.commandsService, e),
                        a = new Si(this.visitorService, this.sessionService, this.configuration, this.logger, r, this.consentService, this.commandsService, this.pii),
                        c = new Ge(this.commandsService, this.configuration, o, this.logger, r, this.pii),
                        u = new qe(this.visitorService, this.sessionService, this.commandsService),
                        h = new Ke(this.configuration, this.visitorService, this.sessionService, this.commandsService, this.pii, e),
                        p = new Ii(this.pii, this.cookieDomain),
                        l = new xi(this.commandsService, p, this.cookieDomain),
                        f = new Ni,
                        d = new _i(this.commandsService, f),
                        g = new Hi(window.location),
                        v = new Ti(this.configuration, this.commandsService, this.lifeCycleEvents, this.visitorService, this.sessionService, this.consentService, p, f, this.pii, this.cookieDomain, g),
                        m = new Di(this.visitorService, this.sessionService, this.commandsService, this.cookieDomain, g),
                        S = new Li(this.logger);
                    if (this.consentModule.init(), u.init(), c.init(), h.init(), a.init(), l.init(), d.init(), v.init(), m.init(), this.lifeCycleEvents.addListeners(m, this.commandsModule, s, this.consentModule, u, a, l, v), Le.isSupported()) {
                        var E = new Le(this.sessionService, this.configuration, this.logger, r, n, this.consentService, o, this.commandsService, this.pii, e);
                        E.init(), this.lifeCycleEvents.addListeners(E)
                    }
                    if (this.configuration.eMerchandisingEnabled) {
                        var w = new qi(this.configuration, this.logger, r, o, p);
                        w.init(), this.lifeCycleEvents.addListeners(w)
                    }
                    s.init(), e.onSessionExpired(function() {
                        t.lifeCycleEvents.emitBeforeSessionRenewal(), t.doStart(v, S)
                    }), this.doStart(v, S)
                }
            }, t.prototype.doStart = function(t, e) {
                var i = this;
                this.commandsService.start(), t.start(), e.onLoad(function() {
                    i.lifeCycleEvents.emitStartTracking()
                }), e.start()
            }, t
        }(),
        Fi = function() {
            function t(t, e, i, n, r, o, s) {
                this.configuration = t, this.visitorService = e, this.exclusionService = i, this.outdatedState = n, this.allowSubdomainsChange = r, this.crossDomainService = o, this.forceInclusionService = s
            }
            return t.prototype.compute = function(t) {
                var e = this;
                this.configuration.crossDomainTracking ? this.crossDomainService.applyUpToDate(function() {
                    return e.computeState(t)
                }) : this.computeState(t)
            }, t.prototype.computeState = function(t) {
                this.allowSubdomainsChange.handle(), this.outdatedState.clear(), this.isIncluded() ? (this.outdatedState.restoreClearedVisitor(), t(!0)) : (this.exclusionService.exclude(this.configuration.lastTrackingDraw), t(!1))
            }, t.prototype.isIncluded = function() {
                var t = D(this.configuration.sampleRate);
                return this.forceInclusionService.isForceIncluded() || !this.exclusionService.isExcluded() && this.visitorService.doesVisitorExist() || !this.exclusionService.isExcluded() && t
            }, t
        }();
    ! function(t) {
        t.generate = function() {
            var t = function(t) {
                    for (var e = 0, i = 0; i < t.length; i += 1) e = t.charCodeAt(i) + (e << 6) + (e << 16) - e;
                    return Math.abs(e)
                }(navigator.userAgent + navigator.language + navigator.platform).toString(16).slice(-4),
                e = (new Date).getTime();
            return "xxxxxxxx-hhhh-axxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var i = (e + 16 * Math.random()) % 16 | 0;
                return e = Math.floor(e / 16), ("x" === t ? i : 7 & i | 8).toString(16)
            }).replace("hhhh", t)
        }
    }(zi || (zi = {}));
    var ji, Gi = function() {
            function t(t, e, i) {
                this.configuration = t, this.sessionService = e, this.cookieDomain = i
            }
            return t.prototype.createOrUpdateVisitor = function() {
                var t = this.getVisitor();
                null === t && (t = this.createVisitor(), this.sessionService.removeCurrentSession()), this.updateVisitor(t), this.setVisitor(t)
            }, t.prototype.createVisitor = function() {
                return {
                    id: zi.generate(),
                    visitsCount: 0,
                    appliedTrackingDraw: this.configuration.lastTrackingDraw,
                    creationTimestamp: I(),
                    lastVisitTimestamp: 0,
                    hitTimestamp: 0,
                    expires: Date.now() + this.configuration.visitorCookieTimeout
                }
            }, t.prototype.updateVisitor = function(t) {
                var e = I();
                this.sessionService.doesSessionExist() || (t.visitsCount += 1, t.lastVisitTimestamp = e), t.hitTimestamp = e, t.appliedTrackingDraw = this.configuration.lastTrackingDraw
            }, t.prototype.getRequestParameters = function() {
                if (this.doesVisitorExist()) {
                    var t = this.getVisitor();
                    return {
                        uu: t.id,
                        sn: "" + t.visitsCount,
                        lv: "" + t.lastVisitTimestamp,
                        lhd: "" + t.lastVisitTimestamp,
                        hd: "" + t.hitTimestamp
                    }
                }
                return {}
            }, t.prototype.getVisitor = function() {
                return ut.get()
            }, t.prototype.setVisitor = function(t) {
                ut.set(t, this.cookieDomain)
            }, t.prototype.doesVisitorExist = function() {
                return null !== ut.get()
            }, t.prototype.removeCurrentVisitor = function() {
                this.removeVisitor(this.cookieDomain)
            }, t.prototype.removeVisitor = function(t) {
                ut.remove(t)
            }, t
        }(),
        Wi = function() {
            function t(t, e, i, n, r) {
                this.configuration = t, this.sessionStorage = e, this.logger = i, this.forceInclusionService = n, this.cookieDomain = r, this.triggerSessionReplayOngoing = !1
            }
            return t.prototype.createOrUpdateSession = function(t) {
                void 0 === t && (t = window.location.href);
                var e = this.getSessionWithoutCache();
                null === e && (e = this.createSession()), this.updateSession(e), this.setSession(e), this.configuration.triggerSessionReplayEnabled && "2" !== e.recordingState && (this.triggerSessionReplayOngoing = this.doesUrlTriggerSessionReplay(t, this.configuration.triggerSessionReplayRegex))
            }, t.prototype.createSession = function() {
                return {
                    pageNumber: 0,
                    recordingState: this.computeRecordingState()
                }
            }, t.prototype.computeRecordingState = function() {
                return this.isCompressionSupported() ? this.forceInclusionService.isForceNotRecorded() ? "0" : this.forceInclusionService.isForceAnalysisRecorded() ? "1" : this.forceInclusionService.isForceReplayRecorded() ? "2" : this.computeRecordingType(this.configuration.replayRecordingRate, this.configuration.analysisRecordingRate) : "0"
            }, t.prototype.isCompressionSupported = function() {
                var t = new Bt(x),
                    e = t.isSupported();
                return t.terminateWorker(), e
            }, t.prototype.computeRecordingType = function(t, e) {
                var i = t + e;
                if (i > 100) return this.reportMaxRecordingRatesExceeded(t, e), "0";
                var n = M();
                return n < t ? Le.isSupported() ? "2" : "0" : n < i ? "1" : "0"
            }, t.prototype.doesUrlTriggerSessionReplay = function(t, e) {
                return !!e && e.test(t)
            }, t.prototype.reportMaxRecordingRatesExceeded = function(t, e) {
                var i = "Sum of recording rates exceeds 100.\n      Replay recording rate: " + t + " \n      Analysis recording rate: " + e;
                this.logger.logError(i)
            }, t.prototype.updateSession = function(t) {
                t.pageNumber += 1
            }, t.prototype.isAnalysisRecorded = function() {
                return this.doesSessionExist() && "1" === this.getSession().recordingState
            }, t.prototype.isReplayRecorded = function() {
                return this.doesSessionExist() && ("2" === this.getSession().recordingState || this.triggerSessionReplayOngoing)
            }, t.prototype.removeCurrentSession = function() {
                this.removeSession(this.cookieDomain)
            }, t.prototype.getRequestParameters = function() {
                if (this.doesSessionExist()) {
                    var t = this.getSession(),
                        e = t.recordingState;
                    if (this.triggerSessionReplayOngoing) switch (t.recordingState) {
                        case "0":
                            e = "4";
                            break;
                        case "1":
                            e = "5"
                    }
                    return {
                        re: e,
                        pn: "" + t.pageNumber
                    }
                }
                return {}
            }, t.prototype.getSession = function() {
                return this.sessionStorage.get()
            }, t.prototype.getSessionWithoutCache = function() {
                return this.sessionStorage.get(!0)
            }, t.prototype.doesSessionExist = function() {
                return null !== this.sessionStorage.get()
            }, t.prototype.setSession = function(t) {
                this.sessionStorage.set(t)
            }, t.prototype.removeSession = function(t) {
                this.sessionStorage.remove(t)
            }, t.prototype.hasValidSession = function() {
                var t = this.sessionStorage.getRawSession();
                return this.sessionStorage.isValid(t)
            }, t
        }(),
        Xi = function() {
            function t(t, e, i, n) {
                this.configuration = t, this.visitorService = e, this.exclusionService = i, this.cookieDomain = n
            }
            return t.prototype.clear = function() {
                this.isVisitorOutdated() && (this.savedVisitor = this.visitorService.getVisitor(), this.visitorService.removeVisitor(this.cookieDomain)), this.isExclusionOutdated() && this.exclusionService.removeExclusion()
            }, t.prototype.isVisitorOutdated = function() {
                return this.visitorService.doesVisitorExist() && this.visitorService.getVisitor().appliedTrackingDraw !== this.configuration.lastTrackingDraw
            }, t.prototype.isExclusionOutdated = function() {
                return this.exclusionService.getAppliedTrackingDraw() !== this.configuration.lastTrackingDraw
            }, t.prototype.restoreClearedVisitor = function() {
                this.savedVisitor && this.visitorService.setVisitor(this.savedVisitor)
            }, t
        }(),
        $i = function() {
            function t(t, e, i) {
                this.configuration = t, this.visitorService = e, this.sessionService = i
            }
            return t.prototype.handle = function() {
                this.handleVisitor(), this.handleSession()
            }, t.prototype.handleVisitor = function() {
                var t = this.visitorService.getVisitor();
                t && (this.configuration.allowSubdomains ? this.visitorService.removeVisitor(B.CURRENT_DOMAIN) : this.visitorService.removeVisitor(B.getRootDomain()), this.visitorService.setVisitor(t))
            }, t.prototype.handleSession = function() {
                var t = this.sessionService.getSessionWithoutCache();
                t && (this.configuration.allowSubdomains ? this.sessionService.removeSession(B.CURRENT_DOMAIN) : this.sessionService.removeSession(B.getRootDomain()), this.sessionService.setSession(t))
            }, t
        }(),
        Ki = function() {
            function t() {
                this.listeners = []
            }
            return t.prototype.addListeners = function() {
                for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                (t = this.listeners).push.apply(t, e)
            }, t.prototype.emitBeforeNaturalPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onBeforeNaturalPageView && i.onBeforeNaturalPageView()
                }
            }, t.prototype.emitAfterNaturalPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onAfterNaturalPageView && i.onAfterNaturalPageView()
                }
            }, t.prototype.emitInitTracking = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onInitTracking && i.onInitTracking()
                }
            }, t.prototype.emitStartTracking = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onStartTracking && i.onStartTracking()
                }
            }, t.prototype.emitBeforeArtificialPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onBeforeArtificialPageView && i.onBeforeArtificialPageView()
                }
            }, t.prototype.emitAfterArtificialPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onAfterArtificialPageView && i.onAfterArtificialPageView()
                }
            }, t.prototype.emitBeforeSessionRenewal = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onBeforeSessionRenewal && i.onBeforeSessionRenewal()
                }
            }, t.prototype.emitOptout = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onOptout && i.onOptout()
                }
            }, t.prototype.emitConsentGranted = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onConsentGranted && i.onConsentGranted()
                }
            }, t.prototype.emitConsentWithdrawn = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onConsentWithdrawn && i.onConsentWithdrawn()
                }
            }, t
        }();
    ! function(t) {
        t[t.NOT_REQUIRED = 0] = "NOT_REQUIRED", t[t.NOT_EXPRESSED = 1] = "NOT_EXPRESSED", t[t.GRANTED = 2] = "GRANTED", t[t.WITHDRAWN = 3] = "WITHDRAWN"
    }(ji || (ji = {}));
    var Ji, Yi = function() {
            function t(t) {
                this.cookieDomain = t
            }
            return t.prototype.get = function() {
                var t = B.get("_cs_c");
                return null === t ? t : Number(t)
            }, t.prototype.set = function(t) {
                B.set("_cs_c", t, this.cookieDomain, L)
            }, t.prototype.remove = function(t) {
                B.remove("_cs_c", t)
            }, t
        }(),
        Qi = function() {
            function t(t, e) {
                this.commandsService = t, this.service = e
            }
            return t.prototype.init = function() {
                this.service.handleSubdomainChange(), this.service.setInitialConsent(), this.registerCommands()
            }, t.prototype.registerCommands = function() {
                var t = this;
                this.commandsService.register("trackConsentGranted", function() {
                    t.service.grantConsent()
                }), this.commandsService.register("trackConsentWithdrawn", function() {
                    t.service.withdrawConsent()
                })
            }, t.prototype.onOptout = function() {
                this.service.removeCurrentConsent()
            }, t
        }(),
        Zi = function() {
            function t(t, e, i, n) {
                this.configuration = t, this.storage = e, this.lifeCycleEvents = i, this.cookieDomain = n
            }
            return t.prototype.setInitialConsent = function() {
                var t = this.storage.get();
                (null === t || this.hasConsentRequiredChanged(t)) && this.setDefault()
            }, t.prototype.hasConsentRequiredChanged = function(t) {
                var e = this.configuration.consentRequired;
                return e && t === ji.NOT_REQUIRED || !e && t !== ji.NOT_REQUIRED
            }, t.prototype.handleSubdomainChange = function() {
                this.configuration.allowSubdomains ? this.storage.remove(B.CURRENT_DOMAIN) : this.storage.remove(B.getRootDomain())
            }, t.prototype.setDefault = function() {
                var t = this.configuration.consentRequired ? ji.NOT_EXPRESSED : ji.NOT_REQUIRED;
                this.storage.set(t)
            }, t.prototype.grantConsent = function() {
                this.configuration.consentRequired && (this.storage.set(ji.GRANTED), this.lifeCycleEvents.emitConsentGranted())
            }, t.prototype.withdrawConsent = function() {
                this.configuration.consentRequired && (this.storage.set(ji.WITHDRAWN), this.lifeCycleEvents.emitConsentWithdrawn())
            }, t.prototype.removeCurrentConsent = function() {
                this.storage.remove(this.cookieDomain)
            }, t.prototype.isAllowedByConsent = function() {
                return !this.configuration.consentRequired || this.storage.get() === ji.GRANTED
            }, t.prototype.getRequestParameters = function() {
                return {
                    uc: "" + this.storage.get()
                }
            }, t
        }(),
        tn = function() {
            function t(t, e, i, n, r, o, s) {
                this.lifeCycleEvents = t, this.commandsService = e, this.commandsModule = i, this.optoutModule = n, this.optoutService = r, this.exclusionModule = o, this.consentModule = s
            }
            return t.prototype.start = function() {
                this.lifeCycleEvents.addListeners(this.exclusionModule, this.consentModule, this.commandsModule), this.consentModule.init(), this.optoutModule.init(), this.optoutService.init(), this.optoutService.isActive() || this.commandsService.start()
            }, t
        }(),
        en = function() {
            function t(t) {
                this.service = t
            }
            return t.prototype.onOptout = function() {
                this.service.removeExclusion()
            }, t
        }(),
        nn = function() {
            function t(t) {
                this.location = t
            }
            return t.prototype.isForceIncluded = function() {
                return this.hasForceInclusionCookie() || this.hasForceInclusionInURL()
            }, t.prototype.isForceNotRecorded = function() {
                return this.hasForceInclusionCookieValue("0") || this.hasForceInclusionValueInURL("0")
            }, t.prototype.isForceAnalysisRecorded = function() {
                return this.hasForceInclusionCookieValue("1") || this.hasForceInclusionValueInURL("1")
            }, t.prototype.isForceReplayRecorded = function() {
                return this.hasForceInclusionCookieValue("2") || this.hasForceInclusionValueInURL("2")
            }, t.prototype.hasForceInclusionCookie = function() {
                return null !== B.get("_cs_inc")
            }, t.prototype.hasForceInclusionCookieValue = function(t) {
                return B.get("_cs_inc") === t
            }, t.prototype.hasForceInclusionInURL = function() {
                return this.location.href.indexOf("_cs_inc") > 0
            }, t.prototype.hasForceInclusionValueInURL = function(t) {
                return this.location.href.indexOf("_cs_inc=" + t) > 0
            }, t
        }(),
        rn = function() {
            return (rn = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        },
        on = function() {
            function t() {
                this.metrics = {}
            }
            return t.prototype.start = function(t, e) {
                void 0 === e && (e = Date.now());
                var i = this.metrics[t];
                this.metrics[t] = rn({
                    startedAt: e
                }, i)
            }, t.prototype.stop = function(t, e) {
                void 0 === e && (e = Date.now());
                var i = this.metrics[t];
                this.metrics[t] = rn({
                    stoppedAt: e
                }, i), this.onStopCallback(t, this.metrics[t])
            }, t.prototype.onStop = function(t) {
                this.onStopCallback = t
            }, t
        }(),
        sn = function() {
            function t() {}
            return t.prototype.getRequestParameters = function() {
                var t = window.location;
                return {
                    pr: t.protocol,
                    ho: t.hostname,
                    pa: t.pathname,
                    qu: t.search,
                    ha: t.hash
                }
            }, t
        }(),
        an = function() {
            function t(t, e) {
                this.configuration = t, this.request = e, this.isLoggingActive = !1
            }
            return t.prototype.init = function() {
                this.isLoggingActive = D(this.configuration.metricRate)
            }, t.prototype.getRequestParameters = function() {
                return {
                    a: "uxam",
                    mk: this.metricKey,
                    mv: "" + this.metricValue
                }
            }, t.prototype.logMetric = function(t, e) {
                this.metricKey = t, this.metricValue = e.stoppedAt - e.startedAt, this.sendLog()
            }, t.prototype.sendLog = function() {
                this.isLoggingActive && this.request.send()
            }, t
        }();
    ! function(t) {
        t.TIME_BEFORE_EXECUTION = "TimeBeforeExecution", t.PAGE_LOAD = "PageLoad"
    }(Ji || (Ji = {}));
    var cn, un = function() {
            function t(t, e, i) {
                this.service = e, this.pii = i, this.locationRequestParameters = new sn, this.basicLogRequestParameters = new nt(t, this.pii), this.request = new J(t.getErrorUri()), this.logger = new an(t, this.request)
            }
            return t.prototype.init = function() {
                var t = this;
                this.request.setRequestParametersProviders(this.logger, this.basicLogRequestParameters, this.locationRequestParameters), this.logger.init(), this.service.onStop(function(e, i) {
                    t.logger.logMetric(e, i)
                }), this.recordInitialMetrics()
            }, t.prototype.recordInitialMetrics = function() {
                this.isSupported() && (this.service.start(Ji.PAGE_LOAD, window.performance.timing.navigationStart), this.service.stop(Ji.PAGE_LOAD, window.performance.timing.domContentLoadedEventEnd), this.service.start(Ji.TIME_BEFORE_EXECUTION, window.performance.timing.domContentLoadedEventEnd), this.service.stop(Ji.TIME_BEFORE_EXECUTION))
            }, t.prototype.isSupported = function() {
                return window.performance && window.performance.timing
            }, t
        }(),
        hn = function() {
            function t(t, e, i) {
                this.lifeCycleEvents = t, this.location = e, this.cookieDomain = i
            }
            return t.prototype.init = function() {
                !this.isActive() && this.hasOptoutInURL() && this.activate()
            }, t.prototype.isActive = function() {
                return "1" === B.get("_cs_optout")
            }, t.prototype.activate = function() {
                this.lifeCycleEvents.emitOptout(), B.set("_cs_optout", "1", this.cookieDomain, L)
            }, t.prototype.hasOptoutInURL = function() {
                return this.location.href.indexOf("_cs_optout") > 0
            }, t
        }(),
        pn = function() {
            function t(t, e) {
                this.commandsService = t, this.optoutService = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register("optout", function() {
                    t.optoutService.activate()
                })
            }, t
        }();

    function ln(t, e) {
        return e.visitor.visitsCount !== t.visitor.visitsCount ? e.visitor.visitsCount - t.visitor.visitsCount : t.session ? e.session ? e.session.pageNumber - t.session.pageNumber : -1 : 1
    }! function(t) {
        t.select = function(t, e) {
            var i = function(t, e) {
                    return t.filter(function(t) {
                        return t.exclusion === e
                    })[0]
                }(t, e),
                n = function(t, e) {
                    return t.filter(function(t) {
                        return function(t, e) {
                            return t.visitor && t.visitor.appliedTrackingDraw === e
                        }(t, e)
                    }).sort(ln)[0]
                }(t, e);
            return i || n
        }
    }(cn || (cn = {}));
    var fn = function() {
            function t(t, e, i) {
                this.configuration = t, this.currentDomainState = e, this.otherDomainStates = i
            }
            return t.prototype.applyUpToDate = function(t) {
                var e = this;
                this.otherDomainStates.retrieve(this.configuration.hostnames, function(i) {
                    var n = [e.currentDomainState.get()].concat(i),
                        r = cn.select(n, e.configuration.lastTrackingDraw);
                    e.currentDomainState.apply(r), t()
                })
            }, t
        }(),
        dn = function() {
            function t(t) {
                this.commandsService = t
            }
            return t.prototype.onOptout = function() {
                this.commandsService.stop()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.commandsService.stop()
            }, t
        }();
    var gn = function() {
            function t(t) {
                this.logger = t, this.registry = {}
            }
            return t.prototype.register = function(t, e) {
                this.registry[t] = e, this.registry
            }, t.prototype.start = function() {
                this.applyPending(), this.enableImmediateApplication()
            }, t.prototype.stop = function() {
                window._uxa = []
            }, t.prototype.applyPending = function() {
                var t = this;
                window._uxa.forEach(function(e) {
                    var i = e[0],
                        n = e.slice(1);
                    return t.apply(i, n)
                })
            }, t.prototype.enableImmediateApplication = function() {
                var t = this;
                window._uxa = {
                    push: function(e) {
                        var i = e[0],
                            n = e.slice(1);
                        return t.apply(i, n)
                    }
                }
            }, t.prototype.apply = function(t, e) {
                var i = this;
                return this.logger.tryToExecute("Commands.apply", function() {
                    var n;
                    if (i.registry[t]) return (n = i.registry)[t].apply(n, e)
                })()
            }, t
        }(),
        vn = function() {
            function t(t) {
                var e = this;
                this.logger = t, this.eventHandler = {
                    boundElement: document,
                    type: "securitypolicyviolation",
                    listener: function(t) {
                        return e.securityPolicyViolationListener(t)
                    }
                }
            }
            return t.prototype.start = function() {
                It(this.eventHandler)
            }, t.prototype.stop = function() {
                xt(this.eventHandler)
            }, t.prototype.securityErrorIsRelevant = function(e) {
                return e && e.sourceFile && 0 !== e.sourceFile.length && t.whilelistDomains.some(function(t) {
                    return e.sourceFile.indexOf(t) > 0
                })
            }, t.prototype.securityPolicyViolationListener = function(t) {
                var e = this;
                this.logger.tryToExecute("Event handler type: securitypolicyviolation", function() {
                    if (e.securityErrorIsRelevant(t)) {
                        var i = "Content Security Policy error. Violated directive: " + t.violatedDirective + " - Source file: " + t.sourceFile;
                        e.logger.logMessage(i)
                    }
                })()
            }, t.whilelistDomains = ["contentsquare", "localhost", "website.com/build/e2e"], t
        }(),
        yn = function() {
            function t(t) {
                this.logger = t
            }
            return t.prototype.init = function() {
                this.contentSecurityPolicyErrorsService = new vn(this.logger)
            }, t.prototype.onInitTracking = function() {
                this.contentSecurityPolicyErrorsService.start()
            }, t.prototype.onOptout = function() {
                this.contentSecurityPolicyErrorsService.stop()
            }, t
        }(),
        mn = function() {
            function t(t, e, i) {
                this.configuration = t, this.logger = e, this.pii = i
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new on,
                    i = new un(this.configuration, e, this.pii),
                    n = new nn(window.location),
                    r = B.getCookieDomain(this.configuration.allowSubdomains),
                    o = new yt(r),
                    s = new Wi(this.configuration, o, this.logger, n, r),
                    a = new Gi(this.configuration, s, r);
                this.logger.setContext(a, s);
                var c = new $i(this.configuration, a, s),
                    u = new Et(window.location, r),
                    h = new en(u),
                    p = new Xi(this.configuration, a, u, r),
                    l = new pt(a, s, u, this.configuration, r),
                    f = new Rt(this.logger),
                    d = new Ct(f, this.logger, window.location),
                    g = new fn(this.configuration, l, d),
                    v = new Fi(this.configuration, a, u, p, c, g, n);
                return i.init(), v.compute(function(e) {
                    var i = new gn(t.logger),
                        n = new dn(i),
                        o = new Ki,
                        c = new Yi(r),
                        u = new Zi(t.configuration, c, o, r),
                        p = new Qi(i, u),
                        l = new hn(o, window.location, r),
                        f = new pn(i, l),
                        d = new yn(t.logger);
                    (d.init(), o.addListeners(d), e) ? (o.emitInitTracking(), new Bi(a, s, o, t.logger, i, n, t.configuration, f, l, p, u, t.pii, r).start()) : new tn(o, i, n, f, l, h, p).start()
                }), {
                    LZString: zt
                }
            }, t
        }();
    try {
        O.preventConflict(window.CS_CONF);
        var Sn = new z(window.CS_CONF);
        window._uxa = window._uxa || [], Sn.processOptionOverrides(window._uxa);
        var En = new at,
            wn = new rt(Sn, En).create();
        wn.tryToExecute("index.start", function() {
            var t = new G(Sn);
            if (!window.UXAnalytics && t.canTrack()) {
                var e = new mn(Sn, wn, En);
                window.UXAnalytics = e.init()
            }!window.CSFrameCommunication && H.isActivable() && (window.CSFrameCommunication = H, H.waitForConnection())
        })()
    } catch (t) {}
}]);