! function o(r, s, d) {
    function c(t, e) {
        if (!s[t]) {
            if (!r[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (l) return l(t, !0);
                var a = new Error("Cannot find module '" + t + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            var i = s[t] = {
                exports: {}
            };
            r[t][0].call(i.exports, function(e) {
                return c(r[t][1][e] || e)
            }, i, i.exports, o, r, s, d)
        }
        return s[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < d.length; e++) c(d[e]);
    return c
}({
    1: [function(e, t, n) {
        var a = e("./lib/replace"),
            i = e("./lib/getSlotPlaceholder");
        t.exports.replace = a, t.exports.getSlotPlaceholder = i
    }, {
        "./lib/getSlotPlaceholder": 2,
        "./lib/replace": 4
    }],
    2: [function(e, t, n) {
        var s = e("./globals"),
            d = "data-val";
        t.exports = function(e, t, n) {
            var a = s.getDocument(),
                i = [e, n, t].join("_"),
                o = a.getElementById("ape_" + i + "_placement_ClickTracking");
            if (!(o && o.hasAttribute && "function" == typeof o.hasAttribute && o.hasAttribute(d) && o.getAttribute && "function" == typeof o.getAttribute)) return "";
            var r = o.getAttribute(d);
            return "string" != typeof r ? "" : r
        }
    }, {
        "./globals": 3
    }],
    3: [function(e, t, n) {
        t.exports.getDocument = function() {
            return document
        }
    }, {}],
    4: [function(e, t, n) {
        var i = /(&amp;|\?){1}pd_rd_plhdr=t(&amp;|'|&quot;){1}/g,
            o = /(&|\?){1}pd_rd_plhdr=t(&|'|"|\\"|\\'){1}/g;
        t.exports = function(e, t) {
            var n = t,
                a = e;
            "string" != typeof e || "&pd_rd_plhdr=t" === e ? a = "" : (a.startsWith("&") && (a = a.replace(/^&+/, "")), a.endsWith("&") && (a = a.replace(/&+$/, "")));
            try {
                return n.replace(o, "$1" + a + "$2").replace(i, "$1" + a.replace(/&/g, "&amp;") + "$2")
            } catch (e) {
                return t
            }
        }
    }, {}],
    5: [function(e, t, n) {
        var a = e("./ajaxRequest");
        t.exports.Tracer = function(e, t) {
            return this.traceId = e, this.adStartTime = t, this.storedTrace = {}, this.logTrace = function(e, t) {
                if (void 0 !== this.traceId) {
                    var n, a = (new Date).getTime();
                    this.storedTrace.hasOwnProperty(e) || (this.storedTrace[e] = []), (n = t === Object(t) ? Object.assign({}, t) : (n = '{ "' + e + '":"' + t + '"}', JSON.parse(n))).timeStamp = a, n.timeSinceAdStart = a - this.adStartTime, this.storedTrace[e].push(n)
                }
            }, this.sendTrace = function() {
                var t = function() {
                    console.log("failed to send request to /gp/adbarplus")
                };
                if (! function(e) {
                        for (var t in e)
                            if (e.hasOwnProperty(t)) return !1;
                        return !0
                    }(this.storedTrace)) {
                    var e = "/gp/adbarplus?traceId=" + this.traceId + "&systemName=browser";
                    for (var n in a.sendAjaxRequest(e, "POST", JSON.stringify(this.storedTrace), {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }, function(e) {
                            4 === e.readyState && 200 !== e.status && t()
                        }, t), this.storedTrace) this.storedTrace.hasOwnProperty(n) && delete this.storedTrace[n]
                }
            }, this.bindSendTraceToPageOnLoad = function() {
                var e = function(e, t) {
                        return function() {
                            return e.apply(t)
                        }
                    },
                    t = function() {
                        this.sendTrace()
                    },
                    n = function() {
                        this.sendTrace(), window.setInterval(e(t, this), 3e3)
                    };
                "loading" !== document.readyState ? e(n, this)() : window.addEventListener ? window.addEventListener("load", e(n, this)) : document.attachEvent("onreadystatechange", function() {
                    "complete" === document.readyState && e(n, this)()
                })
            }, void 0 !== e && this.bindSendTraceToPageOnLoad(), {
                traceId: this.traceId,
                adStartTime: this.adStartTime,
                storedTrace: this.storedTrace,
                allData: this.allData,
                logTrace: this.logTrace,
                sendTrace: this.sendTrace
            }
        }
    }, {
        "./ajaxRequest": 7
    }],
    6: [function(e, t, n) {
        t.exports.AdBlockerCSMMediator = function(i, e) {
            var o = this;
            this.adbMap = e || {};
            var a = function(e, t, n) {
                var a = o.adbMap;
                !0 !== a[e].adBlockerIsDisabled && void 0 !== a[e].adBlockerIsDisabled && !1 === a[e].adBlockerIsDisabled && (!1 === t ? i(a[e].slot, a[e].placementId, "adblocker:blocked:".concat(n), 1) : !0 === t && i(a[e].slot, a[e].placementId, "adblocker:notblocked:".concat(n), 1))
            };
            this.updateAdBlockerIsDisabled = function(e, t) {
                var n = o.adbMap;
                n[e] && (n[e].adBlockerIsDisabled = t, n[e].adBlockerIsDisabled ? i(n[e].slot, n[e].placementId, "adblockernotdetected", 1) : i(n[e].slot, n[e].placementId, "adblockerdetected", 1), a(e, n[e].adImgLoaded, "adimg"), a(e, n[e].adImpressionsFired, "adimpressions"), a(e, n[e].adViewabilityFired, "adviewability"))
            }, this.updateAdImgLoaded = function(e, t) {
                var n = o.adbMap;
                n[e] && void 0 === n[e].adImgLoaded && (n[e].adImgLoaded = t, a(e, n[e].adImgLoaded, "adimg"))
            }, this.updateAdImpressionsFired = function(e, t) {
                var n = o.adbMap;
                n[e] && void 0 === n[e].adImpressionsFired && (n[e].adImpressionsFired = t, a(e, n[e].adImpressionsFired, "adimpressions"))
            }, this.updateAdViewabilityFired = function(e, t) {
                var n = o.adbMap;
                n[e] && void 0 === n[e].adViewabilityFired && (n[e].adViewabilityFired = t, a(e, n[e].adViewabilityFired, "adviewability"))
            }, this.updateNoInventoryViewabilityFired = function(e, t) {
                var n = o.adbMap;
                n[e] && void 0 === n[e].noInventoryViewabilityFired && (n[e].noInventoryViewabilityFired = t, a(e, n[e].noInventoryViewabilityFired, "noInventoryViewability"))
            }, this.updateNoInventoryImpressionFired = function(e, t) {
                var n = o.adbMap;
                n[e] && void 0 === n[e].noInventoryImpressionsFired && (n[e].noInventoryImpressionsFired = t, a(e, n[e].noInventoryImpressionsFired, "noInventoryImpressions"))
            }
        }
    }, {}],
    7: [function(e, t, n) {
        t.exports.sendAjaxRequest = function(e, t, n, a, i, o) {
            try {
                var r = null;
                if (window.XMLHttpRequest ? r = new XMLHttpRequest : o(), r) {
                    if (r.onreadystatechange = function() {
                            i(r)
                        }, r.open(t, e, !0), null !== a)
                        for (var s in a) r.setRequestHeader(s, a[s]);
                    r.send(n)
                } else o()
            } catch (e) {
                o()
            }
        }
    }, {}],
    8: [function(e, t, n) {
        var l = e("./counters");
        t.exports.checkCache = function(e, t, n, a, i) {
            var o = l.CACHE_COUNTERS;
            if ("undefined" != typeof performance && void 0 !== performance.getEntriesByType) {
                var r = performance.getEntriesByType("resource");
                if (void 0 !== r && Array.isArray(r) && !(r.length < 1) && void 0 !== r[0].duration) {
                    var s = void 0 !== r[0].transferSize ? function(e, t) {
                        0 === e.transferSize ? d(t + "cached") : d(t + "uncached")
                    } : function(e, t) {
                        e.duration < 20 ? d(t + "fastload") : d(t + "slowload")
                    };
                    c(e, o.SF_LIBRARY), c(t, o.SF_HTML)
                }
            }

            function d(e) {
                i(n, a, e, 1)
            }

            function c(e, t) {
                if (e)
                    for (var n = 0; n < r.length; n++) {
                        var a = r[n];
                        if (a.name && -1 !== a.name.indexOf(e)) return void s(a, t)
                    }
            }
        }
    }, {
        "./counters": 10
    }],
    9: [function(e, t, n) {
        var a = e("@apejs/click-tracking");
        t.exports.getSlotPlaceholder = function(e) {
            if (!("pageType" in e && "subPageType" in e && "slot" in e)) return "";
            try {
                return a.getSlotPlaceholder(e.pageType, e.subPageType, e.slot)
            } catch (e) {
                return ""
            }
        }
    }, {
        "@apejs/click-tracking": 1
    }],
    10: [function(e, t, n) {
        t.exports.AD_LOAD_COUNTERS = {
            START: "adload:start",
            CALLBACK: "adload:delayloadcallback",
            IFRAME_CREATED: "adload:iframecreated"
        }, t.exports.CACHE_COUNTERS = {
            SF_LIBRARY: "cache:sflibrary:",
            SF_HTML: "cache:sfhtml:"
        }, t.exports.FEEDBACK_COUNTERS = {
            REQUEST: "adfeedback:request",
            SUCCESS: "adfeedback:success",
            FALLBACK: "adfeedback:fallback"
        }, t.exports.MESSENGER_COUNTERS = {
            API: "messenger:"
        }, t.exports.ABP_STATUS_COUNTERS = {
            1: "abpstatus:enabled",
            0: "abpstatus:notenabled",
            "-1": "abpstatus:unknown"
        }, t.exports.SF_VERSION_COUNTERS = {
            VERSION: "sfversion"
        }
    }, {}],
    11: [function(e, t, n) {
        var r = {
            bb: "uet",
            af: "uet",
            cf: "uet",
            be: "uet",
            ld: "uex"
        };
        t.exports.sendCsmMetric = function(e, t, n, a) {
            var i = r[e],
                o = a ? a + ":" : "";
            "function" == typeof window[i] && (window[i](e, "adplacements:" + o + t.replace(/_/g, ":"), {
                wb: 1
            }), n && window[i](e, "adplacements:" + o + n, {
                wb: 1
            }))
        }, t.exports.sendCsmCounter = function(e, t, n, a) {
            if (window.ue && "function" == typeof window.ue.count) {
                var i = "adplacements:" + n;
                if (e && (i += ":" + e.replace(/_/g, ":")), window.ue.count(i, a), t) {
                    var o = "adplacements:" + (n && t ? n + ":" : n) + t;
                    window.ue.count(o, a)
                }
            }
        }, t.exports.addCsmTag = function(e, t, n, a) {
            if (window.ue && window.ue.tag) {
                var i = e + ":" + t.replace(/_/g, ":") + (a ? ":" + a : "");
                if (window.ue.tag(i), n) {
                    var o = e + ":" + n + (a ? ":" + a : "");
                    window.ue.tag(o)
                }
            }
        }
    }, {}],
    12: [function(e, n, t) {
        /*
            @license
            Underscore.js 1.8.3
            http://underscorejs.org
            (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
            Underscore may be freely distributed under the MIT license.
        */
        n.exports.debounce = function(t, n, a) {
            var i, o, r, s, d, c = function() {
                var e = p() - s;
                e < n && 0 <= e ? i = setTimeout(c, n - e) : (i = null, a || (d = t.apply(r, o), i || (r = o = null)))
            };
            return function() {
                r = this, o = arguments, s = p();
                var e = a && !i;
                return i || (i = setTimeout(c, n)), e && (d = t.apply(r, o), r = o = null), d
            }
        }, n.exports.throttle = function(n, a, i) {
            var o, r, s, d = null,
                c = 0;
            i || (i = {});
            var l = function() {
                c = !1 === i.leading ? 0 : p(), d = null, s = n.apply(o, r), d || (o = r = null)
            };
            return function() {
                var e = p();
                c || !1 !== i.leading || (c = e);
                var t = a - (e - c);
                return o = this, r = arguments, t <= 0 || a < t ? (d && (clearTimeout(d), d = null), c = e, s = n.apply(o, r), d || (o = r = null)) : d || !1 === i.trailing || (d = setTimeout(l, t)), s
            }
        };
        var p = function() {
            return Date.now ? Date.now() : (new Date).getTime()
        };

        function a() {
            return window.P && window.P.AUI_BUILD_DATE
        }
        n.exports.addListener = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : window.attachEvent && e.attachEvent("on" + t, n)
        }, n.exports.addWindowListener = function(e, t) {
            n.exports.addListener(window, e, t)
        }, n.exports.removeWindowListener = function(e, t) {
            window.removeEventListener ? window.removeEventListener(e, t, !1) : window.detachEvent && window.detachEvent("on" + e, t)
        }, n.exports.ensureMessageListener = function(e) {
            n.exports.removeWindowListener("message", e), n.exports.addWindowListener("message", e)
        }, n.exports.decodeBase64 = function(e) {
            var t, n, a, i, o, r, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                d = "",
                c = 0;
            for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < e.length;) t = s.indexOf(e.charAt(c++)) << 2 | (i = s.indexOf(e.charAt(c++))) >> 4, n = (15 & i) << 4 | (o = s.indexOf(e.charAt(c++))) >> 2, a = (3 & o) << 6 | (r = s.indexOf(e.charAt(c++))), d += String.fromCharCode(t), 64 != o && (d += String.fromCharCode(n)), 64 != r && (d += String.fromCharCode(a));
            return d = function(e) {
                for (var t = "", n = 0, a = 0, i = 0, o = 0; n < e.length;)(a = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(a), n++) : 191 < a && a < 224 ? (i = e.charCodeAt(n + 1), t += String.fromCharCode((31 & a) << 6 | 63 & i), n += 2) : (i = e.charCodeAt(n + 1), o = e.charCodeAt(n + 2), t += String.fromCharCode((15 & a) << 12 | (63 & i) << 6 | 63 & o), n += 3);
                return t
            }(d)
        }, n.exports.createScript = function(e, t, n, a, i) {
            if (!document.getElementById(n)) {
                var o = document.createElement("script");
                return o.async = !0, o.setAttribute("crossorigin", "anonymous"), o.src = e, o.type = t, o.id = n, o.onerror = a, o.onload = i, o
            }
        }, n.exports.isAUIAvailable = a, n.exports.safeFunctionWrapper = function(e, t, n) {
            return a() && "function" == typeof window.P.guardError ? P.guardError("APE-SafeFrame", e) : function() {
                try {
                    e.apply(this, arguments)
                } catch (e) {
                    "function" == typeof t && n && t(n, e)
                }
            }
        }, n.exports.getCookie = function(e) {
            var t = e + "=";
            try {
                for (var n = decodeURIComponent(document.cookie).split(";"), a = 0; a < n.length; a++) {
                    for (var i = n[a];
                        " " == i.charAt(0);) i = i.substring(1);
                    if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
                }
            } catch (e) {}
            return ""
        }
    }, {}],
    13: [function(e, l, t) {
        function p(e, t, n) {
            var a = 0;
            return document.hidden ? a : (a = 0 < e ? n - e : 0 < t ? Math.min(t, n) : 0, Math.min(a, t - e))
        }

        function u() {
            try {
                var e = {};
                return e.t = window.screenY ? window.screenY : window.screenTop, e.l = window.screenX ? window.screenX : window.screenLeft, e.w = l.exports.windowWidth(), e.h = l.exports.windowHeight(), e.b = e.t + e.h, e.r = e.l + e.w, e
            } catch (e) {
                return null
            }
        }

        function f(e, t) {
            try {
                var n = {},
                    a = t || e.getBoundingClientRect();
                n.t = a.top, n.l = a.left, n.r = a.right, n.b = a.bottom, n.w = a.width || n.r - n.l, n.h = a.height || n.b - n.t, e && (n.z = Number(window.getComputedStyle(e, null).zIndex));
                var i = l.exports.windowWidth(),
                    o = l.exports.windowHeight(),
                    r = Math.max(0, p(n.t, n.b, o)),
                    s = Math.max(0, p(n.l, n.r, i)),
                    d = r * s,
                    c = n.h * Math.min(n.w, l.exports.windowWidth());
                return n.xiv = Number(Math.min(1, s / n.w).toFixed(2)), n.yiv = Number(Math.min(1, r / n.h).toFixed(2)), n.iv = Number(Math.min(1, Math.max(0, d / c)).toFixed(2)), n
            } catch (e) {
                return null
            }
        }

        function m(e, t) {
            try {
                var n = {},
                    a = t || e.getBoundingClientRect();
                return n.t = a.top, n.l = a.left, n.r = l.exports.windowWidth() - a.right, n.b = l.exports.windowHeight() - a.bottom, n.xs = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) > l.exports.windowWidth() ? 1 : 0, n.yx = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) > l.exports.windowHeight() ? 1 : 0, n
            } catch (e) {
                return null
            }
        }
        l.exports.PERCENT_VIEWABLE = .5, l.exports.DURATION_VIEWABLE = 500, l.exports.findPercentInView = function(e) {
            try {
                var t = e.getBoundingClientRect(),
                    n = p(t.top, t.bottom, l.exports.windowHeight()) * p(t.left, t.right, l.exports.windowWidth()),
                    a = (t.bottom - t.top) * Math.min(t.right - t.left, l.exports.windowWidth());
                return Math.min(1, Math.max(0, n / a))
            } catch (e) {
                return null
            }
        }, l.exports.findDistanceInView = function(e) {
            try {
                return e.getBoundingClientRect().top - l.exports.windowHeight()
            } catch (e) {
                return null
            }
        }, l.exports.getViewableInfo = function(e) {
            if (!e) return null;
            var t = {},
                n = u(),
                a = f(e),
                i = m(e);
            return n && a && i ? (t.geom = {}, t.geom.win = n, t.geom.self = a, t.geom.exp = i, t.payload = {}, t.payload.wh = n.h, t.payload.ww = n.w, t.payload.sx = window.scrollX, t.payload.sy = window.scrollY, t.payload.ah = a.h, t.payload.aw = a.w, t.payload.top = a.t, t.payload.left = a.l, t) : null
        }, l.exports.takeSnapshotOfSlotPosition = function(e) {
            try {
                return {
                    initialBoundingRect: e.getBoundingClientRect(),
                    adHeight: e.offsetHeight,
                    adWidth: e.offsetWidth,
                    originalScrollX: window.scrollX,
                    originalScrollY: window.scrollY
                }
            } catch (e) {
                return null
            }
        }, l.exports.getNoInventoryViewabilityData = function(e) {
            var t, n, a, i, o, r, s = {},
                d = (n = (t = e).initialBoundingRect, a = n.top - (window.scrollY - t.originalScrollY), i = a + t.adHeight, o = n.left - (window.scrollX - t.originalScrollX), r = o + t.adWidth, {
                    top: a,
                    bottom: i,
                    left: o,
                    right: r,
                    width: t.adWidth,
                    height: t.adHeight
                }),
                c = u(),
                l = f(null, d),
                p = m(null, d);
            return c && l && p ? (s.geom = {}, s.geom.win = c, s.geom.self = l, s.geom.exp = p, s.payload = {}, s.payload.wh = c.h, s.payload.ww = c.w, s.payload.sx = window.scrollX, s.payload.sy = window.scrollY, s.payload.ah = l.h, s.payload.aw = l.w, s.payload.top = l.t, s.payload.left = l.l, s) : null
        }, l.exports.windowHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, l.exports.windowWidth = function() {
            return window.innerWidth || document.documentElement.clientWidth
        }
    }, {}],
    14: [function(o, e, t) {
        /**
         * @license
         * Copyright (c) 2016, Amazon.com
         * APE SafeFrame v1.50.66c9ea1 -- 2019-02-05T19:03:29+0000
         */
        ! function(C, k) {
            var e = o("./messenger/msgHandler"),
                t = o("../components/adBlockerHandler"),
                d = o("../components/counters"),
                c = o("../components/cacheChecker"),
                L = o("../components/adBarTracer"),
                n = o("../components/csm"),
                F = o("../components/clickTrackingHelper"),
                W = e.util,
                N = e.messenger,
                R = e.logError,
                l = N.appendErrorDetails,
                a = e.loadScript,
                D = n.sendCsmMetric,
                _ = n.sendCsmCounter,
                p = n.addCsmTag,
                u = e.fireViewableLatencyMetrics,
                B = e.hasClass,
                f = e.createIframeWithName,
                z = e.logCounter,
                O = e.collapseSlot,
                m = e.resizeSafeFrameAd,
                V = e.delayLoad,
                H = e.getMediaCentralOrigin,
                U = e.scriptValidator,
                j = e.sizeValidator,
                J = e.appendJsScript,
                q = e.checkAgainstWhitelist,
                $ = new t.AdBlockerCSMMediator(_);

            function i() {
                if (C.MAsf) C.MAsf.loadAds();
                else {
                    C.MAsf = {
                        version: "1.50.66c9ea1"
                    }, _(null, null, d.SF_VERSION_COUNTERS.VERSION + ":" + C.MAsf.version, 1);
                    var h = "text/x-dacx-safeframe",
                        r = e.SF_DOMAIN + "/images/G/01/ape/sf/mobile/msf-1.50.66c9ea1._V455838591_.html",
                        g = "data-arid",
                        w = "ape_postMessageUnsupported",
                        v = "ape_postMessageSupported",
                        y = d.AD_LOAD_COUNTERS,
                        n = d.MESSENGER_COUNTERS,
                        i = {},
                        s = {},
                        b = {},
                        I = {};
                    N.supportedCommands = {
                        sendAdBarTrace: function(e, t) {
                            e.options.arid in I && I[e.options.arid].logTrace(t.field, t.traceInfo)
                        },
                        logAPIInvocation: function(e, t) {
                            _(null, null, n.API + t.apiName, 1), _(e.options.slot, e.options.placementId, n.API + t.apiName, 1), e.options.arid in I && I[e.options.arid].logTrace("apiCalls", t)
                        },
                        resizeSafeFrameAd: function(e, t) {
                            W.addWindowListener("resize", i[e.options.arid].defaultResizeSafeFrameHandler), m(e.options.arid, e.options.size.width, e.options.size.height, e.options.maxAdWidth, N, b)
                        },
                        changeSize: function(e, t) {
                            var n = e.options.allowedSizes;
                            if (q(t, n, j)) e.iframe.style.height = t.height, e.iframe.style.width = t.width, e.slot.style.height = t.height, e.slot.style.width = t.width, W.removeWindowListener("resize", i[e.options.arid].defaultResizeSafeFrameHandler);
                            else {
                                var a = "Size is not whitelisted: " + t.width + " x " + t.height + l(e.options.arid);
                                R(a)
                            }
                        },
                        collapseSlot: function(e, t) {
                            O(b[e.options.arid].wrapperDivId)
                        },
                        embedScript: function(e, t) {
                            var n = e.options.allowedDomains;
                            if (q(t.src, n, U)) e.slot = k.getElementById(b[e.options.arid].wrapperDivId), void 0 !== e.slot && J(t.src, e.slot, t.charset);
                            else {
                                var a = "Domain is not whitelisted: " + t.src + l(e.options.arid);
                                R(a)
                            }
                        },
                        openInExternalBrowser: function(t, n) {
                            t.options.isAUIAvailable && (n.successCallback = W.safeFunctionWrapper(function() {
                                N.sendMessageToAd(t.options.arid, "mash.openInExternalBrowser.update", {})
                            }), n.failCallback = W.safeFunctionWrapper(function(e) {
                                N.sendMessageToAd(t.options.arid, "mash.openInExternalBrowser.update", {
                                    value: e
                                })
                            }), n.failCallback = W.safeFunctionWrapper(function() {}), P.when("mash").execute(function(e) {
                                e.openInExternalBrowser(n)
                            }))
                        },
                        launchIntentURL: function(t, n) {
                            if (t.options.isAUIAvailable) {
                                if (void 0 === n.url || void 0 === n.fallbackUrl) return;
                                var a = W.safeFunctionWrapper(function() {
                                        N.sendMessageToAd(t.options.arid, "mash.launchIntentURL.update", {})
                                    }),
                                    i = W.safeFunctionWrapper(function(e) {
                                        C.location = n.fallbackUrl, N.sendMessageToAd(t.options.arid, "mash.launchIntentURL.update", {
                                            errorMsg: e
                                        })
                                    });
                                P.when("mash").execute(function(e) {
                                    e.launchIntentURL({
                                        url: n.url,
                                        successCallback: a,
                                        failCallback: i
                                    })
                                })
                            }
                        },
                        advertisementText: function(e, t) {
                            ! function(e, t, n) {
                                var a = {};
                                if (a.advertisementTextHTMLContentEncoded = t || "undefined", t) {
                                    var i = k.getElementById(b[e].wrapperDivId);
                                    a.wrapperDivId = i, I[e].logTrace("loadAdvertisementText", a), i.insertAdjacentHTML(n ? "beforebegin" : "afterend", W.decodeBase64(t))
                                }
                            }(e.options.arid, e.options.advertisementTextHTMLContentEncoded, e.options.advertisementTextOnTop)
                        },
                        logError: function(e, t) {
                            R(t.message + l(e.options.arid) + ": " + e.options.slot, t.error)
                        },
                        customMessage: function(e, t) {
                            N.customMessage(t.key, t.body)
                        },
                        sendMetrics: function(e, t) {
                            D(t.metric, e.options.slot, e.options.placementId, t.metricMsg)
                        },
                        countMetric: function(e, t) {
                            _(e.options.slot, e.options.placementId, t.metricMsg, t.value)
                        },
                        addCsmTag: function(e, t) {
                            p(t.tag, e.options.slot, e.options.placementId, t.msg)
                        },
                        fireViewableLatencyMetrics: function(e, t) {
                            u(e.options.arid, e.options.slot, e.options.placementId)
                        },
                        notifyWhenVisible: function(e, t) {
                            s[e.options.arid] || (e.rendered = !1, s[e.options.arid] = e), a(e.options.slot, e.options.placementId)
                        },
                        enableViewabilityTracker: function(e, t) {
                            N.updateViewability(e.options.arid);
                            var n = W.throttle(N.updateViewability, 20);
                            A(e.options.arid, e.options.slot, "viewabilityTracker", function() {
                                n(e.options.arid)
                            }), W.addWindowListener("scroll", i[e.options.arid].viewabilityTracker), W.addWindowListener("resize", i[e.options.arid].viewabilityTracker), W.addListener(k, "visibilitychange", i[e.options.arid].viewabilityTracker)
                        },
                        enableNoInventoryViewabilityTrackerAndInvokeFallback: function(e) {
                            N.takeSnapshotOfSlotPosition(e.options.arid), N.updateNoInventoryViewability(e.options.arid), N.sendMessageToAd(e.options.arid, "handleFallbackBehavior", {});
                            var t = W.throttle(N.updateNoInventoryViewability, 20);
                            A(e.options.arid, e.options.slot, "noInventoryViewabilityTracker", function() {
                                t(e.options.arid)
                            }), W.addWindowListener("scroll", i[e.options.arid].noInventoryViewabilityTracker), W.addWindowListener("resize", i[e.options.arid].noInventoryViewabilityTracker), W.addListener(k, "visibilitychange", i[e.options.arid].noInventoryViewabilityTracker)
                        },
                        loadAdBlockerDetectorScript: function(e, t) {
                            var n = H() + "/images/G/01/ads/advertising/ads._TTH_.js?cachebust=" + Math.ceil(99989999 * Math.random() + 1e4),
                                a = W.safeFunctionWrapper(function() {
                                    $.updateAdBlockerIsDisabled(e.options.arid, !1)
                                }),
                                i = W.safeFunctionWrapper(function() {
                                    $.updateAdBlockerIsDisabled(e.options.arid, !0)
                                }),
                                o = W.createScript(n, "text/javascript", "ape_adblockerdetector", a, i),
                                r = k.getElementById(b[e.options.arid].wrapperDivId);
                            r ? r.appendChild(o) : k.body.appendChild(o)
                        },
                        onPageEvent: function(e, t) {
                            V(t.eventName, W.safeFunctionWrapper(function() {
                                N.sendMessageToAd(e.options.arid, "onPageEvent.update", {})
                            }, R, "Failed to send message to Ad"))
                        },
                        updateAdImpressionsFired: function(e, t) {
                            $.updateAdImpressionsFired(e.options.arid, t.isImpFired)
                        },
                        updateAdViewabilityFired: function(e, t) {
                            $.updateAdViewabilityFired(e.options.arid, t.isViewed)
                        },
                        updateNoInventoryViewabilityFired: function(e, t) {
                            $.updateNoInventoryViewabilityFired(e.options.arid, t.isViewed)
                        },
                        updateAdImgLoaded: function(e, t) {
                            $.updateAdImgLoaded(e.options.arid, t.isLoaded)
                        },
                        updateNoInventoryImpressionFired: function(e, t) {
                            $.updateNoInventoryImpressionFired(e.options.arid, t.isNoInventoryImpFired)
                        },
                        getAdInfo: function(e, t) {
                            var n = e.options.slot.split("_")[1];
                            n && (k.mobileAds = k.mobileAds || {}, k.mobileAds[n] = t.mobileAdsInfo)
                        }
                    }, W.addWindowListener("message", N.receiveMessage), C.MAsf.registerCustomMessageListener = N.registerCustomMessageListener, C.MAsf.sendCustomMessage = N.sendCustomMessage, C.MAsf.loadAds = function() {
                        var e, t, n, a, i, o = 0,
                            r = null;
                        for (e = k.getElementsByClassName(h); r = e[o++];) {
                            var s = null,
                                d = null;
                            if ("DIV" === r.tagName && B(r, h)) try {
                                var c = "ape_" + (s = JSON.parse(r.getAttribute("data-ad-details"))).slot + "_placement",
                                    l = k.getElementById(c);
                                if (!N.adMap[s.arid] && l && l.innerHTML) {
                                    l.innerHTML = "", r.removeAttribute(g);
                                    var p = "ape_" + s.slot + "_text-wrapper";
                                    k.getElementById(p) && k.getElementById(p).remove()
                                }
                                if (r.getAttribute(g)) continue;
                                if (n = s.slot, t = k.getElementById("ape_" + n + "_userData")) try {
                                    d = JSON.parse(t.getAttribute("data-user-data"))
                                } catch (e) {
                                    d = null
                                }
                                s.arid = s.arid || Math.random().toString(16).slice(2), I[s.arid] = new L.Tracer(s.traceId, C[s.slotName] && C[s.slotName].adStartTime || 0), I[s.arid].logTrace("safeFrameInput", s);
                                var u = {};
                                u.caches = C.caches ? C.caches : null, u.plugins = k.plugins ? k.plugins : null, u.cookies = k.cookie ? k.cookie : null, u.userAgents = navigator.userAgent ? navigator.userAgent : null, I[s.arid].logTrace("browserData", u), r.setAttribute(g, s.arid), s.hostDomain = location.protocol + "//" + location.host, s.userAgent = C.top.navigator.userAgent, s.isAUIAvailable = W.isAUIAvailable(), s.cookie = M(s.allowedCookies), s.aPageStart = C.aPageStart, s.adStartTime = C[s.slotName] && C[s.slotName].adStartTime || 0, s.userConnectionInfo = S(d), E(s);
                                var f = "d3l3lkinz3f56t.cloudfront.net,g-ecx.images-amazon.com,z-ecx.images-amazon.com,images-na.ssl-images-amazon.com,g-ec4.images-amazon.com,images-cn.ssl-images-amazon.com".split(",");
                                s.allowedDomains = "object" == typeof s.allowedDomains && 0 <= s.allowedDomains.length ? s.allowedDomains.concat(f) : f, A(s.arid, n, "defaultResizeSafeFrameHandler", T(s)), a = s.arid, i = n, b[a] = {
                                    slotId: i,
                                    wrapperDivId: "ape_" + i + "_wrapper",
                                    placementDivId: "ape_" + i + "_placement",
                                    iframeId: "ape_" + i + "_iframe",
                                    textDivWrapperId: "ape_" + i + "_text-wrapper",
                                    textDivId: "ape_" + i + "_text"
                                }, D("af", n, s.placementId), _(n, s.placementId, y.START, 1), "clickTracking" in s && "" === s.clickTracking && (s.clickTracking = F.getSlotPlaceholder(s));
                                var m = {};
                                if (m.hostDomain = s.hostDomain, m.allowedSizes = s.allowedSizes, m.allowedDomains = s.allowedDomains, m.productAdsUrl = s.productAdsUrl, m.parentLocation = s.parentLocation, m.queryParams = s.queryParams, m.aPageStart = s.aPageStart, m.adStartTime = s.adStartTime, m.safeFrameSrc = s.safeFrameSrc, m.abpStatus = s.abpStatus, "function" != typeof C.postMessage) {
                                    z(w, 1), O(r.getAttribute("id")), m.postMessage = "postMessageNotSupported";
                                    continue
                                }
                                z(v, 1), V(s.loadAfter, x(s), s.extraDelay, r), m.postMessage = "postMessageSupported", m.loadAfter = s.loadAfter, I[s.arid].logTrace("additionalInitilizationParams", m)
                            } catch (e) {
                                s = null, R("Error parsing sf tag", e)
                            }
                        }
                    }, C.MAsf.loadAds(), W.addWindowListener("resize", function() {
                        C.MAsf.sendCustomMessage("resize", {
                            height: C.innerHeight,
                            width: C.innerWidth
                        })
                    })
                }

                function A(e, t, n, a) {
                    i[e] = i[e] || {}, i[e][n] = W.safeFunctionWrapper(a, R, "Error within ad handler " + n + ": " + t)
                }

                function a(e, t) {
                    var n, a, i, o = W.safeFunctionWrapper(function() {
                        for (var e in s) {
                            (s[e].iframe ? s[e].iframe.contentWindow : null) && !s[e].alreadyRendered && (void 0, n = {
                                key: "readyToRender",
                                data: t = e
                            }, N.sendMessageToAd(t, "customMessage", n), s[t].alreadyRendered = !0)
                        }
                        var t, n
                    });
                    n = o, a = e, i = t, k.hidden ? (_(a, i, "prerender", 1), W.addListener(k, "visibilitychange", function e() {
                        try {
                            n(), W.removeWindowListener("visibilitychange", e)
                        } catch (e) {
                            R("Error prerendering ad: " + a, e)
                        }
                    })) : n()
                }

                function T(e) {
                    return function() {
                        m(e.arid, e.size.width, e.size.height, e.maxAdWidth, N, b)
                    }
                }

                function o(t) {
                    try {
                        var e, n = JSON.stringify(t),
                            a = k.getElementById(b[t.arid].placementDivId),
                            i = function(e) {
                                if (!e) return null;
                                var t = k.getElementById("inline-msf-" + e);
                                if (!t) return null;
                                var n = t.getAttribute("data-htmlcontent");
                                return n && n.match(/<html>/) ? n : null
                            }(t.slot),
                            o = {};
                        (e = f(n)).id = b[t.arid].iframeId, i && (e.srcdoc = i, e.setAttribute("sandbox", "allow-scripts"), t.msfInlined = !0), e.src = r, e.scrolling = "no", e.height = t.size.height, e.width = t.size.width, e.className = t.iframeClass || "", e.setAttribute("frameborder", "0"), e.setAttribute("marginheight", "0"), e.setAttribute("marginwidth", "0"), e.setAttribute("scrolling", "no"), e.setAttribute("allowtransparency", "true"), e.setAttribute("allowfullscreen", ""), e.setAttribute("mozallowfullscreen", ""), e.setAttribute("webkitallowfullscreen", ""), e.setAttribute(g, t.arid), e.style.cssText = t.iframeExtraStyle || "", t.iframeSandbox && (e.sandbox = t.iframeSandbox), e.onload = function() {
                            c.checkCache(t.MAsfUrl, r, t.slot, t.placementId, _)
                        }, a.appendChild(e), _(t.slot, t.placementId, y.IFRAME_CREATED, 1), N.adMap[t.arid] = {
                            slot: a,
                            iframe: e,
                            options: t
                        }, $.adbMap[t.arid] = {
                            slot: t.slot,
                            adBlockerIsDisabled: void 0,
                            adImgLoaded: void 0,
                            adImpressionsFired: void 0,
                            adViewabilityFired: void 0,
                            placementId: t.placementId
                        }, o.id = e.id, o.src = e.src, o.scrolling = e.scrolling, o.height = e.height, o.width = e.width, o.className = e.className, o.styleCssText = e.style.cssText, I[t.arid].logTrace("createSafeFrame", o)
                    } catch (e) {
                        R("Error creating safeFrame: " + t.slot, e), I[t.arid] && I[t.arid].logTrace("createSafeFrame", {
                            error: {
                                message: "errorCreatingSafeFrame",
                                ex: e
                            }
                        })
                    }
                }

                function x(a) {
                    return W.safeFunctionWrapper(function() {
                        var e = {
                            callbackOccurred: !0
                        };
                        e.loadAfter = a.loadAfter, I[a.arid].logTrace("pageCallBack", e), _(a.slot, a.placementId, y.CALLBACK, 1);
                        var t = b[a.arid].placementDivId;
                        if (t) {
                            var n = k.getElementById(t);
                            n && !n.innerHTML && o(a)
                        }
                    }, R, "Error in callback to create Safeframe.")
                }

                function S(e) {
                    var t = e && e.userContext,
                        n = {
                            mobileConnectionType: t && t.mobileConnectionType
                        },
                        a = t && t.connectionType;
                    if (a) n.connectionType = a.toLowerCase();
                    else {
                        var i = C.navigator,
                            o = i && (i.connection || i.mozConnection || i.webkitConnection);
                        n.connectionType = o && o.type || "unknown"
                    }
                    return n
                }

                function M(e) {
                    var t = "";
                    if (Array.isArray(e))
                        for (var n = 0; n < e.length; n++) {
                            var a = W.getCookie(e[n]);
                            void 0 !== a && "" !== a && (t += e[n] + "=" + a + "; ")
                        }
                    return t
                }

                function E(n) {
                    n.isAUIAvailable && P.now("devmea:controller").execute(function(e) {
                        if (void 0 !== e) {
                            var t = {
                                chosenPrediction: e.getPrediction(),
                                headPrediction: e.getHeadPrediction(),
                                serverPrediction: e.getServerPrediction()
                            };
                            n.toofanPredictionInfo = t
                        }
                    })
                }
            }
            W.safeFunctionWrapper(function() {
                "undefined" == typeof JSON ? a("https://images-na.ssl-images-amazon.com/images/G/01/da/js/json3.min._V308851628_.js", i) : i()
            }, R, "Error initializing safeFrame")()
        }(window, document)
    }, {
        "../components/adBarTracer": 5,
        "../components/adBlockerHandler": 6,
        "../components/cacheChecker": 8,
        "../components/clickTrackingHelper": 9,
        "../components/counters": 10,
        "../components/csm": 11,
        "./messenger/msgHandler": 15
    }],
    15: [function(e, t, n) {
        var f = e("../../components/viewability"),
            m = e("../../components/util"),
            a = e("../../components/csm"),
            i = a.sendCsmMetric,
            o = a.sendCsmCounter,
            r = {
                ERROR: "ERROR",
                WARN: "WARN",
                FATAL: "FATAL"
            },
            l = s();

        function h(e, t) {
            var n = t || new Error(e);
            o("", null, "safeFrameError", 1), window.sfLogErrors && (window.ueLogError ? window.ueLogError(n, {
                logLevel: r.ERROR,
                attribution: "APE-safeframe",
                message: e + " "
            }) : "undefined" != typeof console && console.error && console.error(e, n))
        }

        function s() {
            var e = window.location.host.match(/^.*\.([^.:/]*)/),
                t = null;
            if (e && 1 < e.length && (t = e[1]), !/s/.test(location.protocol)) return "cn" === t ? "http://g-ec4.images-amazon.com" : "http://z-ecx.images-amazon.com";
            var n = "na";
            return /^(com|ca|mx)$/.test(t) ? n = "na" : /^(uk|de|fr|it|es|in)$/.test(t) ? n = "eu" : /^(jp|au)$/.test(t) ? n = "fe" : /^(cn)$/.test(t) && (n = "cn"), "https://images-" + n + ".ssl-images-amazon.com"
        }

        function p(e) {
            return e.replace(/^.{1,5}:\/\/|^\/\//, "")
        }
        t.exports.util = m, t.exports.viewability = f, t.exports.messenger = new function(e, t, n) {
            var c = this;
            this.adMap = e || {}, this.supportedCommands = t || {}, this.msgListeners = n || {};
            var r = function(e) {
                var t = c.adMap,
                    n = t[e].options;
                if (t === {} || n === {}) return null;
                var a = "ape_" + n.slot + "_iframe";
                return t[e].iframe && (t[e].iframe = t[e].iframe && t[e].iframe.innerHTML ? t[e].iframe : document.getElementById(a)), t[e].iframe
            };
            this.sendMessageToAd = function(e, t, n) {
                var a = r(e),
                    i = a ? a.contentWindow : null;
                if (i) {
                    var o = {
                        command: t,
                        data: n
                    };
                    o = JSON.stringify(o), i.postMessage(o, "*")
                }
            }, this.receiveMessage = function(t) {
                var e = c.adMap,
                    n = c.supportedCommands;
                if (e !== {}) {
                    var a, i, o, r, s;
                    try {
                        if (t.data && t.data.message && /.*Mash.*/i.test(t.data.message.id)) throw "Received Mash message";
                        i = e[(a = JSON.parse(t.data)).arid]
                    } catch (e) {
                        return
                    }
                    try {
                        if (s = t, !(r = i) || !r.options || !r.options.msfInlined && p(s.origin) !== p(l) || "object" != typeof a.data) throw "Invalid Message: " + JSON.stringify(t.data);
                        var d = n[a.command];
                        d && (i.options.debug && "undefined" != typeof console && console.log(t), d(i, a.data))
                    } catch (e) {
                        o = "Problem with message: " + t.data, void 0 !== a && (o += c.appendErrorDetails(a.arid)), h(o, e)
                    }
                }
            }, this.appendErrorDetails = function(e) {
                var t = c.adMap;
                if (t === {}) return "";
                var n = "";
                if (void 0 !== t[e]) {
                    var a = t[e].options;
                    void 0 !== a.aanResponse && (n = " Ad Details: " + JSON.stringify(a.aanResponse))
                }
                return n
            }, this.customMessage = function(e, t) {
                var n = c.msgListeners;
                if (n[e]) try {
                    n[e](t)
                } catch (e) {
                    h("Custom Message Error", e)
                } else h("Unrecognized custom message key: " + e)
            }, this.registerCustomMessageListener = function(e, t, n) {
                var a = !1,
                    i = c.msgListeners;
                try {
                    !i[e] || "function" != typeof i[e] || n ? (i[e] = t, a = !0) : h("Duplicate Key", new Error("Custom message listener already exists for key: " + e))
                } catch (e) {
                    h("Error registering custom message listener", e)
                }
                return a
            }, this.sendCustomMessage = function(e, t) {
                var n = c.adMap,
                    a = {
                        key: e,
                        data: t
                    };
                for (var i in n) c.sendMessageToAd(i, "customMessage", a)
            }, this.sendCustomMessageToAd = function(e, t, n) {
                var a = {
                    key: t,
                    data: n
                };
                c.sendMessageToAd(e, "customMessage", a)
            }, this.takeSnapshotOfSlotPosition = function(e) {
                var t = c.adMap,
                    n = t && t[e] && t[e].options;
                if (t && t !== {} && n && n !== {}) {
                    var a = r(e);
                    c.adMap[e].options.slotSnapshot = f.takeSnapshotOfSlotPosition(a)
                }
            }, this.updateViewability = function(e) {
                var t = c.adMap,
                    n = t && t[e] && t[e].options;
                if (t && t !== {} && n && n !== {}) {
                    var a = r(e),
                        i = t[e].options.viewabilityStandards,
                        o = f.getViewableInfo(a);
                    null !== o && (o.viewabilityStandards = i, c.sendMessageToAd(e, "updateViewability", o))
                }
            }, this.updateNoInventoryViewability = function(e) {
                var t = c.adMap,
                    n = t && t[e] && t[e].options,
                    a = n && n.slotSnapshot;
                if (t && t !== {} && n && n !== {} && a) {
                    var i = n.viewabilityStandards,
                        o = f.getNoInventoryViewabilityData(a);
                    null !== o && (o.viewabilityStandards = i, c.sendMessageToAd(e, "updateViewability", o))
                }
            }
        }, t.exports.logError = h, t.exports.SF_DOMAIN = l, t.exports.loadScript = function(e, t) {
            var n = document.createElement("script");
            n.src = e, n.setAttribute("crossorigin", "anonymous"), n.onload = n.onreadystatechange = function() {
                n.readyState && "loaded" !== n.readyState && "complete" !== n.readyState || (n.onload = n.onreadystatechange = null, t && "function" == typeof t && t())
            }, n.onerror = function(e) {
                return h("Error loading script", e), !1
            }, (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(n)
        }, t.exports.fireViewableLatencyMetrics = function(e, t, n) {
            window.apeViewableLatencyTrackers && window.apeViewableLatencyTrackers[e] && window.apeViewableLatencyTrackers[e].valid && (window.apeViewableLatencyTrackers[e].loaded = !0, window.apeViewableLatencyTrackers[e].viewed && (i("ld", t, n, "viewablelatency"), o(t, n, "htmlviewed:loaded", 1)))
        }, t.exports.hasClass = function(e, t) {
            var n = new RegExp("(^|\\s)" + t + "(\\s|$)"),
                a = e.className;
            return a && n.test(a)
        }, t.exports.createIframeWithName = function(e) {
            var t = document.createElement("iframe");
            return t.name = e, t
        }, t.exports.logCounter = function(e, t) {
            window.ue && "function" == typeof window.ue.count && window.ue.count(e, t)
        }, t.exports.collapseSlot = function(e) {
            var t = document.getElementById(e);
            void 0 !== t && t && (t.style.display = "none")
        }, t.exports.resizeSafeFrameAd = function(t, n, a, e, i, o) {
            try {
                var r = document.getElementById(o[t].placementDivId),
                    s = document.getElementById(o[t].wrapperDivId) || r,
                    d = document.getElementById(o[t].iframeId);
                if (null === s || null === r || null === d) return;
                var c = a,
                    l = n,
                    p = function(e) {
                        c = Math.round(e * a / n), l = Math.round(e)
                    },
                    u = 0 === s.offsetWidth ? window.innerWidth : s.offsetWidth;
                e && window.innerHeight < window.innerWidth ? p(e) : p(u), i && i.adMap && i.adMap[t] && i.adMap[t].options && i.adMap[t].options.slotSnapshot && (i.adMap[t].options.slotSnapshot.adHeight = c, i.adMap[t].options.slotSnapshot.adWidth = l), c += "px", l += "px", d.style.height = c;
                var f = {
                    width: d.style.width = l,
                    height: c
                };
                s !== r && (r.style.height = c, i.sendMessageToAd(t, "resizeCreativeWrapper", f))
            } catch (e) {
                h("Error resizing ad: " + o[t].slotId, e)
            }
        }, t.exports.delayLoad = function(a, e, t, i) {
            var n = "undefined" != typeof P,
                o = "undefined" != typeof amznJQ,
                r = "number" == typeof t && 0 !== t ? function() {
                    setTimeout(e, t)
                } : e;
            if ("windowOnLoad" === a) "complete" === document.readyState ? r() : m.addWindowListener("load", r);
            else if ("spATFEvent" === a) n ? P.when("search-page-utilities").execute(function(e) {
                e.afterEvent("spATFEvent", r)
            }) : o ? amznJQ.available("search-js-general", function() {
                window.SPUtils.afterEvent("spATFEvent", r)
            }) : r();
            else if ("aboveTheFold" === a) n ? P.when("af").execute(r) : o ? amznJQ.onCompletion("amznJQ.AboveTheFold", r) : r();
            else if ("criticalFeature" === a) n ? P.when("cf").execute(r) : o ? amznJQ.onCompletion("amznJQ.criticalFeature", r) : r();
            else if ("r2OnLoad" === a) n ? P.when("r2Loaded").execute(r) : o ? amznJQ.onReady("r2Loaded", r) : r();
            else if (a.match("[^:]+:.+")) {
                var s = a.split(":"),
                    d = s[0].split("."),
                    c = s[1],
                    l = 2 < s.length ? s[2] : c;
                n ? P.when(l, "A").execute(r) : o && 1 < d.length ? amznJQ[d[1]](c, r) : r()
            } else if (a.match(/^\d{1,4}px$/g)) {
                var p = !1,
                    u = m.safeFunctionWrapper(m.throttle(function() {
                        var e, t, n;
                        e = a, t = r, (n = i) && f.findDistanceInView(n) <= parseInt(e, 10) && (t(), p = !0), p && (m.removeWindowListener("scroll", u), m.removeWindowListener("resize", u))
                    }, 20));
                m.addWindowListener("scroll", u), m.addWindowListener("resize", u)
            } else r()
        }, t.exports.getMediaCentralOrigin = s, t.exports.appendJsScript = function(e, t, n) {
            var a = document.createElement("script");
            a.charset = n || "utf-8", a.src = e, t.appendChild(a)
        }, t.exports.scriptValidator = function(e, t) {
            return e.match(/^((?:https?:)?\/\/)?([\w\-\.]+(?::[0-9]+)?)\/?(.*)$/)[2] === t
        }, t.exports.sizeValidator = function(e, t) {
            return e.height === t.height && e.width === t.width
        }, t.exports.checkAgainstWhitelist = function(e, t, n) {
            if (!t || "object" != typeof t) return !1;
            for (var a = 0, i = t.length; a < i; a++)
                if (n(e, t[a])) return !0;
            return !1
        }
    }, {
        "../../components/csm": 11,
        "../../components/util": 12,
        "../../components/viewability": 13
    }]
}, {}, [14]);