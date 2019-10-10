! function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? (b(a.ns_ = a.ns_ || {}), define('nyt_comscore_streaming', [], function() {
        return a.ns_
    })) : "object" == typeof module && module.exports ? module.exports = b({}) : b(a.ns_ = a.ns_ || {})
}(this, function(a) {
    "use strict";
    a.ns_ = a;
    var b = b || {};
    b.indexOf = function(a, b) {
        var c = -1;
        return this.forEach(b, function(b, d) {
            b == a && (c = d)
        }), c
    }, b.forEach = function(a, b, c) {
        try {
            if ("function" == typeof b)
                if (c = "undefined" != typeof c ? c : null, "number" != typeof a.length || "undefined" == typeof a[0]) {
                    var d = "undefined" != typeof a.__proto__;
                    for (var e in a) a.hasOwnProperty(e) && (!d || d && "undefined" == typeof a.__proto__[e]) && "function" != typeof a[e] && b.call(c, a[e], e)
                } else
                    for (var f = 0, g = a.length; f < g; f++) b.call(c, a[f], f)
        } catch (h) {}
    };
    var b = b || {};
    b.parseBoolean = function(a, b) {
        return b = b || !1, a ? "0" != a : b
    }, b.parseInteger = function(a, b) {
        return null == a || isNaN(a) ? b || 0 : parseInt(a)
    }, b.parseLong = function(a, b) {
        var c = Number(a);
        return null == a || isNaN(c) ? b || 0 : c
    }, b.toString = function(a) {
        if ("undefined" == typeof a) return "undefined";
        if ("string" == typeof a) return a;
        if (a instanceof Array) return a.join(",");
        var b = "";
        for (var c in a) a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
        return b || a.toString()
    };
    var b = b || {};
    b.filter = function(a, b) {
        var c = {};
        for (var d in b) b.hasOwnProperty(d) && a(b[d]) && (c[d] = b[d]);
        return c
    }, b.extend = function(a) {
        var b, c = arguments.length;
        a = a || {};
        for (var d = 1; d < c; d++)
            if (b = arguments[d])
                for (var e in b) b.hasOwnProperty(e) && (a[e] = b[e]);
        return a
    };
    var b = b || {};
    b.cloneObject = function(a) {
        if (null == a || "object" != typeof a) return a;
        var b = function() {
            function a() {}

            function b(b) {
                return "object" == typeof b ? (a.prototype = b, new a) : b
            }

            function c(a) {
                for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b])
            }

            function d() {
                this.copiedObjects = [];
                var a = this;
                this.recursiveDeepCopy = function(b) {
                    return a.deepCopy(b)
                }, this.depth = 0
            }

            function e(a, b) {
                var c = new d;
                return b && (c.maxDepth = b), c.deepCopy(a)
            }

            function f(a) {
                return "undefined" != typeof window && window && window.Node ? a instanceof Node : "undefined" != typeof document && a === document || "number" == typeof a.nodeType && a.attributes && a.childNodes && a.cloneNode
            }
            var g = [];
            return c.prototype = {
                constructor: c,
                canCopy: function() {
                    return !1
                },
                create: function(a) {},
                populate: function(a, b, c) {}
            }, d.prototype = {
                constructor: d,
                maxDepth: 256,
                cacheResult: function(a, b) {
                    this.copiedObjects.push([a, b])
                },
                getCachedResult: function(a) {
                    for (var b = this.copiedObjects, c = b.length, d = 0; d < c; d++)
                        if (b[d][0] === a) return b[d][1]
                },
                deepCopy: function(a) {
                    if (null === a) return null;
                    if ("object" != typeof a) return a;
                    var b = this.getCachedResult(a);
                    if (b) return b;
                    for (var c = 0; c < g.length; c++) {
                        var d = g[c];
                        if (d.canCopy(a)) return this.applyDeepCopier(d, a)
                    }
                    throw new Error("Unable to clone the following object " + a)
                },
                applyDeepCopier: function(a, b) {
                    var c = a.create(b);
                    if (this.cacheResult(b, c), this.depth++, this.depth > this.maxDepth) throw new Error("Maximum recursion depth exceeded.");
                    return a.populate(this.recursiveDeepCopy, b, c), this.depth--, c
                }
            }, e.DeepCopier = c, e.deepCopiers = g, e.register = function(a) {
                a instanceof c || (a = new c(a)), g.unshift(a)
            }, e.register({
                canCopy: function() {
                    return !0
                },
                create: function(a) {
                    return a instanceof a.constructor ? b(a.constructor.prototype) : {}
                },
                populate: function(a, b, c) {
                    for (var d in b) b.hasOwnProperty(d) && (c[d] = a(b[d]));
                    return c
                }
            }), e.register({
                canCopy: function(a) {
                    return a instanceof Array
                },
                create: function(a) {
                    return new a.constructor
                },
                populate: function(a, b, c) {
                    for (var d = 0; d < b.length; d++) c.push(a(b[d]));
                    return c
                }
            }), e.register({
                canCopy: function(a) {
                    return a instanceof Date
                },
                create: function(a) {
                    return new Date(a)
                }
            }), e.register({
                canCopy: function(a) {
                    return f(a)
                },
                create: function(a) {
                    return "undefined" != typeof document && a === document ? document : a.cloneNode(!1)
                },
                populate: function(a, b, c) {
                    if ("undefined" != typeof document && b === document) return document;
                    if (b.childNodes && b.childNodes.length)
                        for (var d = 0; d < b.childNodes.length; d++) {
                            var e = a(b.childNodes[d]);
                            c.appendChild(e)
                        }
                }
            }), {
                deepCopy: e
            }
        }();
        return b.deepCopy(a)
    };
    var b = b || {};
    b.getNamespace = function() {
        return a.ns_ || a
    }, b.uid = function() {
        var a = 1;
        return function() {
            return +new Date + "_" + a++
        }
    }(), b.isEmpty = function(a) {
        return void 0 === a || null === a || "" === a || a instanceof Array && 0 === a.length
    }, b.isNotEmpty = function(a) {
        return !this.isEmpty(a)
    }, b.safeGet = function(a, b) {
        return b = this.exists(b) ? b : "", this.exists(a) ? a : b
    }, b.isTrue = function(a) {
        return "undefined" != typeof a && ("string" == typeof a ? (a = a.toLowerCase(), "true" === a || "1" === a || "on" === a) : !!a)
    }, b.regionMatches = function(a, b, c, d, e) {
        if (b < 0 || d < 0 || b + e > a.length || d + e > c.length) return !1;
        for (; --e >= 0;) {
            var f = a.charAt(b++),
                g = c.charAt(d++);
            if (f != g) return !1
        }
        return !0
    }, b.exists = function(a) {
        return "undefined" != typeof a && null != a
    }, ! function() {
        var a = [],
            c = !1,
            d = !0,
            e = 1e3;
        b.onSystemClockJump = function(b, f) {
            a.push(b), c || (c = !0, e = f || e, d = +new Date, setInterval(function() {
                var b = d + e,
                    c = +new Date;
                d = c;
                var f = c - b;
                if (Math.abs(f) > e)
                    for (var g = 0; g < a.length; ++g) a[g](f > 0)
            }, e))
        }
    }();
    var b = b || {};
    b.hasPageVisibilityAPISupport = function() {
        if ("undefined" == typeof document) return !1;
        var a = !1;
        return "undefined" != typeof document.hidden ? a = !0 : "undefined" != typeof document.mozHidden ? a = !0 : "undefined" != typeof document.msHidden ? a = !0 : "undefined" != typeof document.webkitHidden && (a = !0),
            function() {
                return a
            }
    }(), b.getPageVisibilityAPI = function() {
        if ("undefined" == typeof document) return null;
        var a, b, c;
        "undefined" != typeof document.hidden ? (a = "hidden", b = "visibilitychange", c = "visibilityState") : "undefined" != typeof document.mozHidden ? (a = "mozHidden", b = "mozvisibilitychange", c = "mozVisibilityState") : "undefined" != typeof document.msHidden ? (a = "msHidden", b = "msvisibilitychange", c = "msVisibilityState") : "undefined" != typeof document.webkitHidden && (a = "webkitHidden", b = "webkitvisibilitychange", c = "webkitVisibilityState");
        var d = {
            hidden: a,
            visibilityChange: b,
            state: c
        };
        return function() {
            return d
        }
    }(), b.isTabInBackground = function() {
        if ("undefined" == typeof document) return null;
        var a = b.getPageVisibilityAPI();
        return function() {
            return document[a.hidden]
        }
    }(), b.getBrowserName = function() {
        if (!navigator) return "";
        var a, b, c = navigator.userAgent || "",
            d = navigator.appName || "";
        return (b = c.indexOf("Opera")) != -1 || (b = c.indexOf("OPR/")) != -1 ? d = "Opera" : (b = c.indexOf("Android")) != -1 ? d = "Android" : (b = c.indexOf("Chrome")) != -1 ? d = "Chrome" : (b = c.indexOf("Safari")) != -1 ? d = "Safari" : (b = c.indexOf("Firefox")) != -1 ? d = "Firefox" : (b = c.indexOf("IEMobile")) != -1 ? d = "Internet Explorer Mobile" : "Microsoft Internet Explorer" == d || "Netscape" == d ? d = "Internet Explorer" : (a = c.lastIndexOf(" ") + 1) < (b = c.lastIndexOf("/")) ? (d = c.substring(a, b), d.toLowerCase() == d.toUpperCase() && (d = navigator.appName)) : d = "unknown", d
    }, b.getBrowserFullVersion = function() {
        if (!navigator) return "";
        var a, b, c, d, e = navigator.userAgent || "",
            f = navigator.appName || "",
            g = navigator.appVersion ? "" + parseFloat(navigator.appVersion) : "";
        return (b = e.indexOf("Opera")) != -1 ? (g = e.substring(b + 6), (b = e.indexOf("Version")) != -1 && (g = e.substring(b + 8))) : (b = e.indexOf("OPR/")) != -1 ? g = e.substring(b + 4) : (b = e.indexOf("Android")) != -1 ? g = e.substring(b + 11) : (b = e.indexOf("Chrome")) != -1 ? g = e.substring(b + 7) : (b = e.indexOf("Safari")) != -1 ? (g = e.substring(b + 7), (b = e.indexOf("Version")) != -1 && (g = e.substring(b + 8))) : (b = e.indexOf("Firefox")) != -1 ? g = e.substring(b + 8) : "Microsoft Internet Explorer" == f ? (d = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), null != d.exec(e) && (g = parseFloat(RegExp.$1))) : "Netscape" == f ? (d = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), null != d.exec(e) && (g = parseFloat(RegExp.$1))) : g = e.lastIndexOf(" ") + 1 < (b = e.lastIndexOf("/")) ? e.substring(b + 1) : "unknown", g = g.toString(), (c = g.indexOf(";")) != -1 && (g = g.substring(0, c)), (c = g.indexOf(" ")) != -1 && (g = g.substring(0, c)), (c = g.indexOf(")")) != -1 && (g = g.substring(0, c)), a = parseInt("" + g, 10), isNaN(a) && (g = "" + parseFloat(navigator.appVersion)), g
    }, b.browserAcceptsLargeURLs = function() {
        return "undefined" == typeof window || (null !== window.ActiveXObject, !0)
    }, b.isBrowser = function() {
        return "undefined" != typeof window && "undefined" != typeof document
    }, b.isWebSecure = function() {
        return "undefined" != typeof document && null != document && "s" === document.location.href.charAt(4)
    };
    var c = function() {
        var a = 1e4;
        return function(b, c) {
            function d(a) {
                a = a || [];
                var c = [h, +new Date];
                return b && c.push(b), a = Array.prototype.slice.call(a), c = c.concat(a)
            }

            function e(a) {
                var b, d, e;
                if ("boolean" == typeof c || !c) return !!c;
                if (e = a.join(" "), c instanceof Array && c.length > 0) {
                    for (b = 0; b < c.length; ++b)
                        if (d = c[b], d instanceof RegExp && d.test(e)) return !0;
                    return !1
                }
                if ("object" == typeof c) {
                    var f = !1;
                    if (c.hide instanceof Array)
                        for (b = 0; b < c.hide.length; ++b)
                            if (d = c.hide[b], d instanceof RegExp && d.test(e)) {
                                f = !0;
                                break
                            }
                    if (c.show instanceof Array)
                        for (b = 0; b < c.show.length; ++b)
                            if (d = c.show[b], d instanceof RegExp && d.test(e)) return !0;
                    return !f && !c.show
                }
                return !0
            }

            function f(b) {
                var d = i.length;
                (d > a || c && c.max && d > c.max) && (i = i.slice(-Math.floor(c.max / 2)), i.push("Previous logs: " + d)), i.push(b)
            }
            var g = this,
                h = "comScore",
                i = [];
            g.log = function() {
                var a = d(arguments);
                f(a), "undefined" != typeof console && "function" == typeof console.log && e(a) && console.log.apply(console, a)
            }, g.warn = function() {
                var a = d(arguments);
                f(a), "undefined" != typeof console && "function" == typeof console.warn && e(a) && console.warn.apply(console, a)
            }, g.error = function() {
                var a = d(arguments);
                f(a), "undefined" != typeof console && "function" == typeof console.error && e(a) && console.error.apply(console, a)
            }, g.apiCall = function(a) {
                for (var b = ["API call to:", a], c = 1; c < arguments.length; ++c) b.push("arg" + c + ":", arguments[c]);
                this.log.apply(this, b)
            }, g.infoLog = function() {
                var a = ["Trace log:"];
                a.push.apply(a, Array.prototype.slice.call(arguments)), this.log.apply(this, a)
            }, g.deprecation = function(a, b) {
                var c = ["Deprecated API:", a, "is deprecated and will be eventually removed."];
                b && c.push("Use", b, "instead."), this.warn.apply(this, c)
            }, g.getLogHistory = function() {
                return i
            }
        }
    }();
    return a.StreamingAnalytics = a.StreamingAnalytics || function() {
        var a = function() {
                var a = "cs_";
                return function() {
                    var c = "undefined" != typeof localStorage ? localStorage : null;
                    b.extend(this, {
                        get: function(b) {
                            return c && c.getItem(a + b)
                        },
                        set: function(b, d) {
                            c && c.setItem(a + b, d)
                        },
                        has: function(b) {
                            return c && c.getItem(a + b)
                        },
                        remove: function(b) {
                            c && c.removeItem(a + b)
                        },
                        clear: function() {
                            for (var b = 0; c && b < c.length; ++b) {
                                var d = c.key(b);
                                d.substr(0, a.length) === a && c.removeItem(d)
                            }
                        }
                    })
                }
            }(),
            d = function(a, b) {
                if ("undefined" == typeof Image) return void("function" == typeof setTimeout ? b && setTimeout(b, 0) : b && b());
                var c = new Image;
                c.onload = function() {
                    b && b(200), c = null
                }, c.onerror = function() {
                    b && b(), c = null
                }, c.src = a
            },
            e = function(a, b, c) {
                "function" == typeof setTimeout ? c && setTimeout(function() {
                    c(200)
                }, 0) : c && c(200)
            },
            f = function() {
                return {
                    dir: function() {
                        return null
                    },
                    append: function(a, b, c) {},
                    write: function(a, b, c) {},
                    deleteFile: function() {
                        return !1
                    },
                    read: function() {
                        return null
                    }
                }
            }(),
            g = function() {
                return {
                    PLATFORM: "generic",
                    httpGet: d,
                    httpPost: e,
                    Storage: a,
                    IO: f,
                    onDataFetch: function(a) {
                        a()
                    },
                    getCrossPublisherId: function() {
                        return null
                    },
                    getAppName: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getAppVersion: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getVisitorId: function() {
                        return +new Date + ~~(1e3 * Math.random())
                    },
                    getVisitorIdSuffix: function() {
                        return "72"
                    },
                    getDeviceModel: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getPlatformVersion: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getPlatformName: function() {
                        return "js"
                    },
                    getRuntimeName: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getRuntimeVersion: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getDisplayResolution: function() {
                        return h.UNKNOWN_RESOLUTION
                    },
                    getApplicationResolution: function() {
                        return h.UNKNOWN_RESOLUTION
                    },
                    getLanguage: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getPackageName: function() {
                        return null
                    },
                    isConnectionAvailable: function() {
                        return !0
                    },
                    isCompatible: function() {
                        return !0
                    },
                    autoSelect: function() {},
                    setPlatformAPI: function() {},
                    isCrossPublisherIdChanged: function() {
                        return !1
                    },
                    setTimeout: function(a, b) {
                        return setTimeout(a, b)
                    },
                    clearTimeout: function(a) {
                        return clearTimeout(a)
                    },
                    getDeviceArchitecture: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getConnectionType: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getDeviceJailBrokenFlag: function() {
                        return h.UNKNOWN_VALUE
                    },
                    isConnectionSecure: function() {
                        return !1
                    },
                    processMeasurementLabels: function() {}
                }
            }(),
            h = {
                UNKNOWN_VALUE: "unknown",
                UNKNOWN_RESOLUTION: "0x0"
            };
        b.jsonObjectToStringDictionary = function(a) {
            var b = {};
            for (var c in a) {
                var d = a[c];
                null === d || void 0 === d ? b[c] = d : b[c] = a[c] + ""
            }
            return b
        }, b.getKeys = function(a, b) {
            var c, d = [];
            for (c in a) b && !b.test(c) || !a.hasOwnProperty(c) || (d[d.length] = c);
            return d
        }, b.fixEventTime = function(a) {
            if (a.ns_ts) return parseInt(a.ns_ts);
            var b = +new Date;
            return a.ns_ts = b + "", b
        }, b.isBrowser = function() {
            return "undefined" != typeof window && "undefined" != typeof document
        }, b.addNewPlaybackInterval = function(a, c, d, e) {
            var f = {};
            if (!(d >= c)) return b.cloneObject(a);
            if (f.start = c, f.end = d, 0 == a.length) return a.push(f), b.cloneObject(a);
            var g;
            for (g = 0; g < a.length; g++)
                if (f.start >= a[g].start && f.end <= a[g].end) return b.cloneObject(a);
            var h, i = !1;
            for (h = 0; h < a.length; h++)
                if (h + 1 === a.length && f.start >= a[h].start || f.start >= a[h].start && f.start < a[h + 1].start) {
                    a.splice(h + 1, 0, f), i = !0;
                    break
                }
            i || a.splice(0, 0, f);
            var j = [a[0]];
            for (g = 1; g < a.length; g++) j[j.length - 1].end + e < a[g].start ? j.push(a[g]) : j[j.length - 1].end < a[g].end && (j[j.length - 1].end = a[g].end);
            return b.cloneObject(j)
        }, b.stateToString = function(a) {
            var b = H.InternalStates;
            for (var c in b)
                if (b.hasOwnProperty(c) && b[c] == a) return c
        };
        var i = function() {
                var a = ["play", "pause", "pause-on-buffering", "end", "buffer", "buffer-stop", "keep-alive", "hb", "custom", "load", "start", "skstart", "adskip", "cta", "error", "trans", "drmfa", "drmap", "drmde", "bitrt", "playrt", "volume", "window", "audio", "video", "subs", "cdn"];
                return {
                    PLAY: 0,
                    PAUSE: 1,
                    PAUSE_ON_BUFFERING: 2,
                    END: 3,
                    BUFFER: 4,
                    BUFFER_STOP: 5,
                    KEEPALIVE: 6,
                    HEARTBEAT: 7,
                    CUSTOM: 8,
                    LOAD: 9,
                    ENGAGE: 10,
                    SEEK_START: 11,
                    AD_SKIP: 12,
                    CTA: 13,
                    ERROR: 14,
                    TRANSFER: 15,
                    DRM_FAILED: 16,
                    DRM_APPROVED: 17,
                    DRM_DENIED: 18,
                    BIT_RATE: 19,
                    PLAYBACK_RATE: 20,
                    VOLUME: 21,
                    WINDOW_STATE: 22,
                    AUDIO: 23,
                    VIDEO: 24,
                    SUBS: 25,
                    CDN: 26,
                    toString: function(b) {
                        return a[b]
                    }
                }
            }(),
            j = function() {
                return {
                    IDLE: 0,
                    PLAYBACK_NOT_STARTED: 1,
                    PLAYING: 2,
                    PAUSED: 3,
                    BUFFERING_BEFORE_PLAYBACK: 4,
                    BUFFERING_DURING_PLAYBACK: 5,
                    BUFFERING_DURING_SEEKING: 6,
                    BUFFERING_DURING_PAUSE: 7,
                    SEEKING_BEFORE_PLAYBACK: 8,
                    SEEKING_DURING_PLAYBACK: 9,
                    SEEKING_DURING_BUFFERING: 10,
                    SEEKING_DURING_PAUSE: 11,
                    PAUSED_DURING_BUFFERING: 12
                }
            }(),
            k = function() {
                var a = ["c", "s", "r"];
                return {
                    SINGLE_CLIP: 0,
                    SEGMENTED: 1,
                    REDUCED: 2,
                    toString: function(b) {
                        return a[b]
                    }
                }
            }(),
            l = {
                STREAMINGANALYTICS_VERSION: "6.1.0.170130",
                MODEL_VERSION: "5.8",
                LOG_NAMESPACE: "STA",
                DEFAULT_PLAYERNAME: "js_api",
                DEFAULT_HEARTBEAT_INTERVAL: [{
                    playingtime: 6e4,
                    interval: 1e4
                }, {
                    playingtime: null,
                    interval: 6e4
                }],
                DEFAULT_KEEP_ALIVE_INTERVAL: 12e5,
                DEFAULT_PAUSED_ON_BUFFERING_INTERVAL: 500,
                C1_VALUE: "19",
                C10_VALUE: "js",
                NS_AP_C12M_VALUE: "1",
                NS_NC_VALUE: "1",
                PAGE_NAME_LABEL: "name",
                RESTRICTED_URL_LENGTH_LIMIT: 2048,
                URL_LENGTH_LIMIT: 4096,
                THROTTLING_DELAY: 500,
                INTERVAL_MERGE_TOLERANCE: 500,
                SYSTEM_CLOCK_JUMP_DETECTION_DEFAULT_INTERVAL: 1e3,
                SYSTEM_CLOCK_JUMP_DETECTION_MINIMUM_INTERVAL: 500,
                DEFAULT_ASSET_PLAYBACK_RATE: 100,
                STANDARD_METADATA_LABELS: ["ns_st_st", "ns_st_ci", "ns_st_pr", "ns_st_sn", "ns_st_en", "ns_st_ep", "ns_st_ty", "ns_st_ct", "ns_st_li", "ns_st_ad", "ns_st_bn", "ns_st_tb", "ns_st_an", "ns_st_ta", "ns_st_pu", "c3", "c4", "c6"],
                LABELS_ORDER: ["c1", "c2", "ca2", "cb2", "cc2", "cd2", "ns_site", "ca_ns_site", "cb_ns_site", "cc_ns_site", "cd_ns_site", "ns_vsite", "ca_ns_vsite", "cb_ns_vsite", "cc_ns_vsite", "cd_ns_vsite", "ns_alias", "ca_ns_alias", "cb_ns_alias", "cc_ns_alias", "cd_ns_alias", "ns_ap_an", "ca_ns_ap_an", "cb_ns_ap_an", "cc_ns_ap_an", "cd_ns_ap_an", "ns_ap_pn", "ns_ap_pv", "c12", "ca12", "cb12", "cc12", "cd12", "ns_ak", "ns_ap_hw", "name", "ns_ap_ni", "ns_ap_ec", "ns_ap_ev", "ns_ap_device", "ns_ap_id", "ns_ap_csf", "ns_ap_bi", "ns_ap_pfm", "ns_ap_pfv", "ns_ap_ver", "ca_ns_ap_ver", "cb_ns_ap_ver", "cc_ns_ap_ver", "cd_ns_ap_ver", "ns_ap_sv", "ns_ap_cv", "ns_ap_smv", "ns_type", "ca_ns_type", "cb_ns_type", "cc_ns_type", "cd_ns_type", "ns_radio", "ns_nc", "cs_partner", "cs_xcid", "cs_impid", "ns_ap_ui", "ca_ns_ap_ui", "cb_ns_ap_ui", "cc_ns_ap_ui", "cd_ns_ap_ui", "ns_ap_gs", "ns_st_sv", "ns_st_pv", "ns_st_smv", "ns_st_it", "ns_st_id", "ns_st_ec", "ns_st_sp", "ns_st_sc", "ns_st_psq", "ns_st_asq", "ns_st_sq", "ns_st_ppc", "ns_st_apc", "ns_st_spc", "ns_st_cn", "ns_st_ev", "ns_st_po", "ns_st_cl", "ns_st_el", "ns_st_sl", "ns_st_pb", "ns_st_hc", "ns_st_mp", "ca_ns_st_mp", "cb_ns_st_mp", "cc_ns_st_mp", "cd_ns_st_mp", "ns_st_mv", "ca_ns_st_mv", "cb_ns_st_mv", "cc_ns_st_mv", "cd_ns_st_mv", "ns_st_pn", "ns_st_tp", "ns_st_ad", "ns_st_li", "ns_st_ci", "ns_st_si", "ns_st_pt", "ns_st_dpt", "ns_st_ipt", "ns_st_et", "ns_st_det", "ns_st_upc", "ns_st_dupc", "ns_st_iupc", "ns_st_upa", "ns_st_dupa", "ns_st_iupa", "ns_st_lpc", "ns_st_dlpc", "ns_st_lpa", "ns_st_dlpa", "ns_st_pa", "ns_st_ie", "ns_ap_jb", "ns_ap_et", "ns_ap_res", "ns_ap_sd", "ns_ap_po", "ns_ap_ot", "ns_ap_c12m", "cs_c12u", "ca_cs_c12u", "cb_cs_c12u", "cc_cs_c12u", "cd_cs_c12u", "ns_ap_install", "ns_ap_updated", "ns_ap_lastrun", "ns_ap_cs", "ns_ap_runs", "ns_ap_usage", "ns_ap_fg", "ns_ap_ft", "ns_ap_dft", "ns_ap_bt", "ns_ap_dbt", "ns_ap_dit", "ns_ap_as", "ns_ap_das", "ns_ap_it", "ns_ap_uc", "ns_ap_aus", "ns_ap_daus", "ns_ap_us", "ns_ap_dus", "ns_ap_ut", "ns_ap_oc", "ns_ap_uxc", "ns_ap_uxs", "ns_ap_lang", "ns_ap_ar", "ns_ap_miss", "ns_ts", "ns_ap_cfg", "ns_st_ca", "ns_st_cp", "ns_st_er", "ca_ns_st_er", "cb_ns_st_er", "cc_ns_st_er", "cd_ns_st_er", "ns_st_pe", "ns_st_ui", "ca_ns_st_ui", "cb_ns_st_ui", "cc_ns_st_ui", "cd_ns_st_ui", "ns_st_bc", "ns_st_dbc", "ns_st_bt", "ns_st_dbt", "ns_st_bp", "ns_st_lt", "ns_st_skc", "ns_st_dskc", "ns_st_ska", "ns_st_dska", "ns_st_skd", "ns_st_skt", "ns_st_dskt", "ns_st_pc", "ns_st_dpc", "ns_st_pp", "ns_st_br", "ns_st_pbr", "ns_st_rt", "ns_st_prt", "ns_st_ub", "ns_st_vo", "ns_st_pvo", "ns_st_ws", "ns_st_pws", "ns_st_ki", "ns_st_rp", "ns_st_bn", "ns_st_tb", "ns_st_an", "ns_st_ta", "ns_st_pl", "ns_st_pr", "ns_st_sn", "ns_st_en", "ns_st_ep", "ns_st_sr", "ns_st_ty", "ns_st_ct", "ns_st_cs", "ns_st_ge", "ns_st_st", "ns_st_stc", "ns_st_ce", "ns_st_ia", "ns_st_dt", "ns_st_ddt", "ns_st_tdt", "ns_st_tm", "ns_st_dtm", "ns_st_ttm", "ns_st_de", "ns_st_pu", "ns_st_ti", "ns_st_cu", "ns_st_fee", "ns_st_ft", "ns_st_at", "ns_st_pat", "ns_st_vt", "ns_st_pvt", "ns_st_tt", "ns_st_ptt", "ns_st_cdn", "ns_st_pcdn", "ns_st_ami", "ns_st_amt", "ns_st_ams", "ns_ap_i1", "ns_ap_i2", "ns_ap_i3", "ns_ap_i4", "ns_ap_i5", "ns_ap_i6", "ns_ap_referrer", "ns_clid", "ns_campaign", "ns_source", "ns_mchannel", "ns_linkname", "ns_fee", "gclid", "utm_campaign", "utm_source", "utm_medium", "utm_term", "utm_content", "ns_ecommerce", "ns_ec_sv", "ns_client_id", "ns_order_id", "ns_ec_cur", "ns_orderline_id", "ns_orderlines", "ns_prod_id", "ns_qty", "ns_prod_price", "ns_prod_grp", "ns_brand", "ns_shop", "ns_category", "category", "ns_c", "ns_search_term", "ns_search_result", "ns_m_exp", "ns_m_chs", "c3", "ca3", "cb3", "cc3", "cd3", "c4", "ca4", "cb4", "cc4", "cd4", "c5", "ca5", "cb5", "cc5", "cd5", "c6", "ca6", "cb6", "cc6", "cd6", "c10", "c11", "c13", "c14", "c15", "c16", "c7", "c8", "c9", "ns_ap_er", "ns_st_amc"]
            },
            m = function() {
                function a() {
                    function a() {
                        f = {}, f.ns_st_cl = "0", f.ns_st_pn = "1", f.ns_st_tp = "0", f.ns_st_cn = "1", f.ns_st_skd = "0", f.ns_st_ci = "0", f.c3 = "*null", f.c4 = "*null", f.c6 = "*null", f.ns_st_st = "*null", f.ns_st_pu = "*null", f.ns_st_pr = "*null", f.ns_st_ep = "*null", f.ns_st_sn = "*null", f.ns_st_en = "*null", f.ns_st_ct = "*null", g = {}, e = !1, d = !1, c = h.UNKNOWN_VALUE, i = !0, j = 0, k = NaN, p = 0, n = 0, m = NaN, q = 0, r = NaN, t = 0, s = 0, o = 0, w = NaN, u = [], v = [], x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = NaN, F = 0, G = 0, H = 0, I = !1, J = NaN, N = !1, M = 0, Q = 0, K = 0, L = 0, O = 0, P = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, $ = !1, _ = l.DEFAULT_ASSET_PLAYBACK_RATE
                    }
                    var c, d, e, f, g, i, j, k, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa = this,
                        ba = l.INTERVAL_MERGE_TOLERANCE;
                    b.extend(this, {
                        getHash: function() {
                            return c
                        },
                        setHash: function(a) {
                            c = a
                        },
                        setPlaybackIntervalMergeTolerance: function(a) {
                            ba = a
                        },
                        getPlaybackIntervalMergeTolerance: function() {
                            return ba
                        },
                        setInternalLabel: function(a, b) {
                            f[a] = b
                        },
                        getInternalLabel: function(a) {
                            return f[a]
                        },
                        hasInternalLabel: function(a) {
                            return null != f[a]
                        },
                        setLabels: function(a) {
                            a && b.extend(g, a)
                        },
                        getLabels: function() {
                            return g
                        },
                        setLabel: function(a, b) {
                            g[a] = b
                        },
                        getLabel: function(a) {
                            return g[a]
                        },
                        hasLabel: function(a) {
                            return a in g
                        },
                        getClipNumber: function() {
                            return parseInt(aa.getInternalLabel("ns_st_cn"))
                        },
                        setClipNumber: function(a) {
                            aa.setInternalLabel("ns_st_cn", a + "")
                        },
                        getPartNumber: function() {
                            return aa.hasLabel("ns_st_pn") ? parseInt(aa.getLabel("ns_st_pn")) : parseInt(aa.getInternalLabel("ns_st_pn"))
                        },
                        createLabels: function(a, c) {
                            var d = a || {},
                                h = b.isEmpty(d.ns_st_pt) ? aa.getPlaybackTime() : parseInt(d.ns_st_pt);
                            d.ns_st_pt = h + (isNaN(k) ? 0 : c - k) + "", d.ns_st_dpt = h + (isNaN(k) ? 0 : c - k) - n + "", d.ns_st_ipt = h + (isNaN(k) ? 0 : c - k) - o + "";
                            var i = b.isEmpty(d.ns_st_et) ? aa.getElapsedTime() : parseInt(d.ns_st_et);
                            d.ns_st_et = i + (isNaN(r) ? 0 : c - r) + "", d.ns_st_det = i + (isNaN(r) ? 0 : c - r) - s + "";
                            var j = b.isEmpty(d.ns_st_bt) ? aa.getBufferingTime() : parseInt(d.ns_st_bt);
                            d.ns_st_bt = j + "", d.ns_st_dbt = j + (isNaN(E) ? 0 : c - E) - F + "";
                            for (var l, m = parseInt(d.ns_st_po), p = b.addNewPlaybackInterval(b.cloneObject(aa.getSegmentPlaybackIntervals()), _ < 0 ? m : w, _ < 0 ? w : m, ba), q = b.addNewPlaybackInterval(b.cloneObject(aa.getAssetPlaybackIntervals()), _ < 0 ? m : w, _ < 0 ? w : m, ba), t = 0, u = 0, v = 0; v < p.length; v++) l = Math.abs(p[v].end - p[v].start), t += l, l > u && (u = l);
                            var D = 0,
                                G = 0;
                            for (v = 0, l; v < q.length; v++) l = Math.abs(q[v].end - q[v].start), D += l, l > G && (G = l);
                            d.ns_st_upc = t + "", d.ns_st_dupc = t - x + "", d.ns_st_iupc = t - y + "", t > y ? d.ns_st_iupc = t - y + "" : d.ns_st_iupc = "0", d.ns_st_lpc = u + "", d.ns_st_dlpc = u - z + "", d.ns_st_upa = D + "", d.ns_st_dupa = D - A + "", D > B ? d.ns_st_iupa = D - B + "" : d.ns_st_iupa = "0", d.ns_st_lpa = G + "", d.ns_st_dlpa = G - C + "";
                            var I = b.isEmpty(d.ns_st_pc) ? aa.getPauses() : parseInt(d.ns_st_pc);
                            d.ns_st_pc = I + "", d.ns_st_dpc = I - S + "";
                            var J = b.isEmpty(d.ns_st_skc) ? aa.getSeeks() : parseInt(d.ns_st_skc);
                            d.ns_st_skc = J + "", d.ns_st_dskc = J - U + "";
                            var K = b.isEmpty(d.ns_st_bc) ? aa.getBuffers() : parseInt(d.ns_st_bc);
                            d.ns_st_bc = K + "", d.ns_st_dbc = K - H + "";
                            var M = b.isEmpty(d.ns_st_skt) ? aa.getSeekingTime() : parseInt(d.ns_st_skt);
                            d.ns_st_skt = M + "", d.ns_st_dskt = M - L + "";
                            var N = b.isEmpty(d.ns_st_ska) ? aa.getSeekingAmount() : parseInt(d.ns_st_ska);
                            return d.ns_st_ska = N + "", d.ns_st_dska = N - P + "", e && (d.ns_st_spc = V + "", d.ns_st_apc = W + "", d.ns_st_sq = X + "", d.ns_st_asq = Y + ""), e || 0 != Z ? d.ns_st_sc = Z + "" : d.ns_st_sc = "1", d.ns_st_rt = _ + "", b.extend(d, f, g), d
                        },
                        updateDeltaLabels: function(a) {
                            n = parseInt(a.ns_st_pt), s = parseInt(a.ns_st_et), F = parseInt(a.ns_st_bt), x = parseInt(a.ns_st_upc), z = parseInt(a.ns_st_lpc), A = parseInt(a.ns_st_upa), C = parseInt(a.ns_st_lpa), S = parseInt(a.ns_st_pc), U = parseInt(a.ns_st_skc), H = parseInt(a.ns_st_bc), L = parseInt(a.ns_st_skt), P = parseInt(a.ns_st_ska), aa.setSeekingDirection(0)
                        },
                        updateIndependentLabels: function(a) {
                            o = parseInt(a.ns_st_pt), y = parseInt(a.ns_st_upc), B = parseInt(a.ns_st_upa)
                        },
                        getVideoTrack: function() {
                            return aa.getInternalLabel("ns_st_vt")
                        },
                        setVideoTrack: function(a) {
                            aa.setInternalLabel("ns_st_vt", a + "")
                        },
                        getAudioTrack: function() {
                            return aa.getInternalLabel("ns_st_at")
                        },
                        setAudioTrack: function(a) {
                            aa.setInternalLabel("ns_st_at", a + "")
                        },
                        getSubtitleTrack: function() {
                            return aa.getInternalLabel("ns_st_tt")
                        },
                        setSubtitleTrack: function(a) {
                            aa.setInternalLabel("ns_st_tt", a + "")
                        },
                        getCDN: function() {
                            return aa.getInternalLabel("ns_st_cdn")
                        },
                        setCDN: function(a) {
                            aa.setInternalLabel("ns_st_cdn", a + "")
                        },
                        getSegmentPlaybackIntervals: function() {
                            return u
                        },
                        setAssetPlaybackIntervals: function(a) {
                            u = a
                        },
                        getAssetPlaybackIntervals: function() {
                            return v
                        },
                        incrementPauses: function() {
                            R++
                        },
                        incrementSeeks: function() {
                            T++
                        },
                        incrementPlayCounter: function() {
                            X++
                        },
                        getPlayCounter: function() {
                            return X
                        },
                        getBufferingTime: function() {
                            return D
                        },
                        setBufferingTime: function(a) {
                            D = a
                        },
                        addBufferingTime: function(a) {
                            if (!isNaN(E)) {
                                var b = aa.getBufferingTime();
                                b += a - E, aa.setBufferingTime(b), E = NaN
                            }
                        },
                        setPlaybackStartPosition: function(a) {
                            w = parseInt(a)
                        },
                        getPlaybackStartPosition: function() {
                            return w
                        },
                        addInterval: function(a) {
                            isNaN(w) || isNaN(a) || (u = b.addNewPlaybackInterval(u, _ < 0 ? a : w, _ < 0 ? w : a, ba), v = b.addNewPlaybackInterval(v, _ < 0 ? a : w, _ < 0 ? w : a, ba), w = NaN)
                        },
                        getElapsedTime: function() {
                            return q
                        },
                        setElapsedTime: function(a) {
                            q = a
                        },
                        addElapsedTime: function(a) {
                            if (!isNaN(r)) {
                                var b = aa.getElapsedTime();
                                b += a - r, aa.setElapsedTime(b), r = NaN
                            }
                        },
                        getElapsedTimestamp: function() {
                            return r
                        },
                        setElapsedTimestamp: function(a) {
                            r = a
                        },
                        addPlaybackTime: function(a) {
                            if (!isNaN(k)) {
                                var b = aa.getPlaybackTime();
                                b += a - k, aa.setPlaybackTime(b), k = NaN
                            }
                        },
                        getPlaybackTime: function() {
                            return j
                        },
                        getExpectedPlaybackPosition: function(a) {
                            return isNaN(k) ? p : p + Math.floor((a - k) * _ / 100)
                        },
                        setPlaybackTimeOffset: function(a) {
                            p = a
                        },
                        getPlaybackTimeOffset: function() {
                            return p
                        },
                        setPlaybackTime: function(a) {
                            j = a
                        },
                        getPlaybackTimestamp: function() {
                            return k
                        },
                        setPlaybackTimestamp: function(a) {
                            k = a
                        },
                        setPreviousPlaybackTime: function(a) {
                            n = a
                        },
                        setPreviousPlaybackTimestamp: function(a) {
                            m = a
                        },
                        getBufferingTimestamp: function() {
                            return E
                        },
                        setBufferingTimestamp: function(a) {
                            E = a
                        },
                        getPauses: function() {
                            return R
                        },
                        setPauses: function(a) {
                            R = a
                        },
                        getSeeks: function() {
                            return T
                        },
                        setSeeks: function(a) {
                            T = a
                        },
                        setSeeking: function(a) {
                            I = a
                        },
                        isSeeking: function() {
                            return I
                        },
                        setCollectingSeekingTime: function(a) {
                            N = a
                        },
                        isCollectingSeekingTime: function() {
                            return N
                        },
                        setAssetStarted: function(a) {
                            d = a
                        },
                        isAssetStarted: function() {
                            return d
                        },
                        setPlaybackStarted: function(a) {
                            e = a
                        },
                        isPlaybackStarted: function() {
                            return e
                        },
                        setSeekingTimestamp: function(a) {
                            J = a
                        },
                        getSeekingTimestamp: function() {
                            return J
                        },
                        addSeekingTime: function(a) {
                            if (!isNaN(J)) {
                                var b = aa.getSeekingTime();
                                b += a - J, aa.setSeekingTime(b), J = NaN
                            }
                        },
                        getSeekingTime: function() {
                            return K
                        },
                        setSeekingTime: function(a) {
                            K = a
                        },
                        setSeekingTimeBeforeEnd: function(a) {
                            Q = a
                        },
                        getSeekingTimeBeforeEnd: function() {
                            return Q
                        },
                        setSeekStartPosition: function(a) {
                            M = a
                        },
                        getSeekStartPosition: function() {
                            return M
                        },
                        setSeekingAmount: function(a) {
                            O = a
                        },
                        getSeekingAmount: function() {
                            return O
                        },
                        addSeekingAmount: function(a) {
                            var b = aa.getSeekingAmount();
                            b += Math.abs(a - M), aa.setSeekingAmount(b);
                            var c;
                            M == a ? c = 0 : M > a ? c = -1 : M < a && (c = 1), aa.setSeekingDirection(c), M = 0
                        },
                        getSeekingDirection: function() {
                            return parseInt(aa.getInternalLabel("ns_st_skd"))
                        },
                        setSeekingDirection: function(a) {
                            aa.setInternalLabel("ns_st_skd", a + "")
                        },
                        resetAssetLifecycleLabels: function() {
                            j = 0, n = 0, o = 0, D = 0, F = 0, G = 0, H = 0, R = 0, S = 0, X = 0, v = [], A = 0, B = 0, C = 0, q = 0, s = 0, K = 0, L = 0, O = 0, P = 0, T = 0, U = 0
                        },
                        incrementSegmentPlaybackCounter: function() {
                            V++
                        },
                        incrementAssetLoadCounter: function() {
                            Z++
                        },
                        incrementAssetPlaybackCounter: function() {
                            W++
                        },
                        getPreviousUniquePlaybackInterval: function() {
                            return x
                        },
                        setPreviousUniquePlaybackInterval: function(a) {
                            x = a
                        },
                        getPreviousEventIndependentUniquePlaybackInterval: function() {
                            return y
                        },
                        setPreviousEventIndependentUniquePlaybackInterval: function(a) {
                            y = a
                        },
                        setPreviousLongestPlaybackInterval: function(a) {
                            z = a
                        },
                        getPreviousLongestPlaybackInterval: function() {
                            return z
                        },
                        resetAssetPlaybackIntervals: function() {
                            v = [], A = 0, B = 0, C = 0
                        },
                        setSegmentPlaybackCounter: function(a) {
                            V = a
                        },
                        setAssetLoadCounter: function(a) {
                            Z = a
                        },
                        setAssetPlaybackCounter: function(a) {
                            W = a
                        },
                        setLowestPartNumberPlayed: function(a) {
                            t = a
                        },
                        getSegmentPlaybackCounter: function() {
                            return V
                        },
                        getAssetLoadCounter: function() {
                            return Z
                        },
                        getAssetPlaybackCounter: function() {
                            return W
                        },
                        getLowestPartNumberPlayed: function() {
                            return t
                        },
                        getBuffers: function() {
                            return G
                        },
                        incrementBufferCount: function() {
                            G++
                        },
                        getPreviousBufferingTime: function() {
                            return F
                        },
                        setPlaySequenceCounter: function(a) {
                            Y = a
                        },
                        incrementPlaySequenceCounter: function() {
                            Y++
                        },
                        getPlaySequenceCounter: function() {
                            return Y
                        },
                        isPlaybackSessionLooping: function() {
                            return $
                        },
                        setPlaybackSessionLooping: function(a) {
                            $ = a
                        },
                        enableAutoCalculatePositions: function(a) {
                            i = !!a
                        },
                        isAutoCalculatePositionsEnabled: function() {
                            return i
                        },
                        getPlaybackRate: function() {
                            return _
                        },
                        setPlaybackRate: function(a) {
                            _ = a
                        }
                    }), a()
                }
                return a.resetAsset = function(a, b, c) {
                    for (var d = a.getLabels(), e = {}, f = 0; c && f < c.length; ++f) d.hasOwnProperty(c[f]) && (e[c[f]] = d[c[f]]);
                    b.setLabels(e), b.setPlaybackIntervalMergeTolerance(a.getPlaybackIntervalMergeTolerance())
                }, a
            }(),
            n = function() {
                function a(a) {
                    function c() {
                        d = new m, h = {}, h.ns_st_id = +new Date + "", k = {}, e = NaN, f = 0, g = NaN, o = {}, p = 0, n = !1, q = !1, r = 0, t = 0, s = 0, u = 1, v = 0, w = []
                    }
                    var d, e, f, g, h, k, n, o, p, q, r, s, t, u, v, w, x = this;
                    b.extend(this, {
                        resetAsset: function() {
                            var a = d;
                            d = new m, m.resetAsset(a, d)
                        },
                        hashExists: function(a) {
                            return null != o[a]
                        },
                        storeHash: function(a) {
                            o[a] = {}
                        },
                        removeHash: function(a) {
                            delete o[a]
                        },
                        storeAssetPlaybackCounters: function() {
                            for (var a in o)
                                if (o.hasOwnProperty(a) && o[a].clipNumber === d.getClipNumber()) {
                                    b.extend(o[a], {
                                        segmentPlaybackCounter: d.getSegmentPlaybackCounter(),
                                        assetLoadCounter: d.getAssetLoadCounter(),
                                        assetPlaybackCounter: d.getAssetPlaybackCounter(),
                                        lowestPartNumberPlayed: d.getLowestPartNumberPlayed(),
                                        seeking: d.isSeeking(),
                                        seekingTimeBeforeEnd: d.getSeekingTimeBeforeEnd(),
                                        seekingStartPosition: d.getSeekStartPosition(),
                                        segmentPlaybackIntervals: d.getSegmentPlaybackIntervals(),
                                        videoTrack: d.getVideoTrack(),
                                        audioTrack: d.getAudioTrack(),
                                        subtitleTrack: d.getSubtitleTrack(),
                                        cdn: d.getCDN(),
                                        playSequenceCounter: d.getPlaySequenceCounter(),
                                        previousUniquePlaybackInterval: d.getPreviousUniquePlaybackInterval(),
                                        previousEventIndependentUniquePlaybackInterval: d.getPreviousEventIndependentUniquePlaybackInterval(),
                                        previousLongestPlaybackInterval: d.getPreviousLongestPlaybackInterval()
                                    });
                                    break
                                }
                        },
                        getStoredAssetRegisters: function(a) {
                            return o[a]
                        },
                        getClipNumber: function(a) {
                            return o[a].clipNumber
                        },
                        getMaxClipNumber: function() {
                            return p
                        },
                        storeClipNumber: function(a, b) {
                            o[a].clipNumber = b, b > p && (p = b)
                        },
                        setLabels: function(a) {
                            null != a && b.extend(k, a)
                        },
                        getLabels: function() {
                            return k
                        },
                        setLabel: function(a, b) {
                            var c = {};
                            c[a] = b, x.setLabels(c)
                        },
                        getLabel: function(a) {
                            return k[a]
                        },
                        getAsset: function() {
                            return d
                        },
                        addInternalErrorFlag: function(a) {
                            for (var b = 0; b < w.length; ++b)
                                if (w[b] == a) return;
                            w.push(a)
                        },
                        createLabels: function(c, e) {
                            var f = c || {},
                                i = b.isEmpty(f.ns_st_pa) ? x.getPlaybackTime() : parseInt(f.ns_st_pa);
                            return f.ns_st_pa = i + (isNaN(g) ? 0 : e - g) + "", f.ns_st_pp = t + "", f.ns_st_sp = u + "", f.ns_st_bp = v + "", q || (f.ns_st_pb = null != f.ns_st_pb ? f.ns_st_pb : "1"), d.isPlaybackStarted() && (f.ns_st_ppc = r + "", f.ns_st_psq = s + ""), w.length > 0 && (f.ns_st_ie = (f.ns_st_ie ? f.ns_st_ie + ";" : "") + w.join(";")), b.extend(f, h, k), a.getPlaybackSession().getAsset().createLabels(f, e), f
                        },
                        incrementPlayCounter: function() {
                            u++
                        },
                        incrementPauses: function() {
                            t++
                        },
                        addPlaybackTime: function(a) {
                            if (!isNaN(g)) {
                                var b = x.getPlaybackTime();
                                b += a - g, x.setPlaybackTime(b), g = NaN
                            }
                        },
                        addBufferingTime: function(a) {
                            if (!isNaN(e)) {
                                var b = x.getBufferingTime();
                                b += a - e, x.setBufferingTime(b), e = NaN
                            }
                        },
                        getBufferingTime: function() {
                            return v
                        },
                        setBufferingTime: function(a) {
                            v = a
                        },
                        getPlaybackTime: function() {
                            return f
                        },
                        setBufferingTimestamp: function(a) {
                            e = a
                        },
                        getBufferingTimestamp: function() {
                            return e
                        },
                        setPlaybackTime: function(a) {
                            f = a
                        },
                        setPlaybackTimestamp: function(a) {
                            g = a
                        },
                        getPlaybackTimestamp: function() {
                            return g
                        },
                        getPauses: function() {
                            return t
                        },
                        setPauses: function(a) {
                            t = a
                        },
                        isPlaybackSessionStarted: function() {
                            return n
                        },
                        setPlaybackSessionStarted: function(a) {
                            n = a
                        },
                        getPlaybackCounter: function() {
                            return r
                        },
                        incrementPlaybackCounter: function() {
                            r++
                        },
                        setFirstEventSent: function(a) {
                            q = a
                        },
                        setPlaySequenceCounter: function(a) {
                            s = a
                        },
                        incrementPlaySequenceCounter: function() {
                            s++
                        },
                        getPlaybackSessionID: function() {
                            return h.ns_st_id
                        },
                        setAsset: function(c, d) {
                            a.getLogging().apiCall("setAsset", c, d), c = b.jsonObjectToStringDictionary(c);
                            var e = a.getStateMachine().getCurrentState();
                            if (e != j.IDLE) {
                                a.getLogging().infoLog("Ending the current Clip. It was in state:", b.stateToString(e));
                                var f = {};
                                a.getStaCore().newEvent(i.END, b.fixEventTime(f), f)
                            }
                            var g = "",
                                h = 0;
                            if (null != c.ns_st_cn) g = c.ns_st_cn;
                            else
                                for (var k = 0; k < l.STANDARD_METADATA_LABELS.length; k++) c[l.STANDARD_METADATA_LABELS[k]] && (g += l.STANDARD_METADATA_LABELS[k] + ":" + c[l.STANDARD_METADATA_LABELS[k]] + ";");
                            var m = x,
                                n = m.getAsset();
                            n.isAssetStarted() ? (m.hashExists(n.getHash()) || (m.storeHash(n.getHash()), m.storeClipNumber(n.getHash(), n.getClipNumber())), m.storeAssetPlaybackCounters(), h = m.hashExists(g) ? m.getClipNumber(g) : b.exists(c.ns_st_cn) ? parseInt(c.ns_st_cn) : m.getMaxClipNumber() + 1) : h = m.hashExists(g) ? m.getClipNumber(g) : n.getClipNumber(), m.resetAsset(), n = m.getAsset(), n.setHash(g), n.setClipNumber(h), n.setLabels(c);
                            var o = m.getStoredAssetRegisters(g);
                            o && (n.setAssetStarted(!0), n.setSegmentPlaybackCounter(o.segmentPlaybackCounter), n.setAssetLoadCounter(o.assetLoadCounter), n.setAssetPlaybackCounter(o.assetPlaybackCounter), n.setLowestPartNumberPlayed(o.lowestPartNumberPlayed), n.setSeeking(o.seeking), n.setSeekingTimeBeforeEnd(o.seekingTimeBeforeEnd), n.setSeekStartPosition(o.seekingStartPosition), n.setAssetPlaybackIntervals(o.segmentPlaybackIntervals), o.videoTrack && n.setVideoTrack(o.videoTrack), o.audioTrack && n.setAudioTrack(o.audioTrack), o.subtitleTrack && n.setSubtitleTrack(o.subtitleTrack), o.cdn && n.setCDN(o.cdn), n.setPlaySequenceCounter(o.playSequenceCounter), n.setPreviousUniquePlaybackInterval(o.previousUniquePlaybackInterval), n.setPreviousEventIndependentUniquePlaybackInterval(o.previousEventIndependentUniquePlaybackInterval), n.setPreviousLongestPlaybackInterval(o.previousLongestPlaybackInterval)),
                                n.incrementAssetLoadCounter(), n.isAssetStarted() && d && m.incrementPlayCounter(), d && (m.setPlaySequenceCounter(0), n.setPlaybackSessionLooping(!0)), !b.exists(c.ns_st_tp) && b.exists(c.ns_st_ad) && b.isNotEmpty(c.ns_st_ad) && "0" !== c.ns_st_ad && n.setInternalLabel("ns_st_tp", "1")
                        }
                    }), c()
                }
                return a.resetPlaybackSession = function(a, b, c) {
                    for (var d = b.getAsset(), e = b.getLabels(), f = {}, g = 0; c && g < c.length; g++) e.hasOwnProperty(c[g]) && (f[c[g]] = e[c[g]]);
                    a.getPlaybackSession().setLabels(f), m.resetAsset(d, a.getPlaybackSession().getAsset(), c)
                }, a
            }(),
            o = function() {
                return function(a) {
                    function c() {
                        e = 1
                    }

                    function d(c) {
                        f = b.extend({}, c);
                        var d = a.getStaCore().getLiveEndpointURL();
                        if (a.getAppCore()) {
                            if (a.getStaCore().isProperlyInitialized()) {
                                var e = a.getStaCore().getExports().et;
                                if ("function" == typeof a.getAppCore().getMeasurementDispatcher) {
                                    var g = a.getAppCore().getMeasurementDispatcher();
                                    g.send(e.HIDDEN, c, d)
                                } else {
                                    var h = a.getStaCore().getExports().am,
                                        i = h.newApplicationMeasurement(a.getAppCore(), e.HIDDEN, c, d);
                                    a.getAppCore().getQueue().offer(i)
                                }
                            }
                        } else d && a.getStaCore().getPlatformAPI().httpGet(a.getStaCore().prepareUrl(d, c))
                    }
                    var e, f, g = this,
                        h = [];
                    b.extend(this, {
                        newEvent: function(a) {
                            for (var b = 0; b < h.length; ++b) h[b](a.eventLabels);
                            d(a.eventLabels), a.eventType != i.HEARTBEAT && g.incrementEventCounter()
                        },
                        addMeasurementListener: function(a) {
                            "function" == typeof a && h.push(a)
                        },
                        removeMeasurementListener: function(a) {
                            for (var b = NaN, c = 0; c < h.length; ++c)
                                if (h[c] == a) {
                                    b = c;
                                    break
                                }
                            isNaN(b) || h.splice(b, 1)
                        },
                        getEventCounter: function() {
                            return e
                        },
                        incrementEventCounter: function() {
                            e++
                        },
                        setEventCounter: function(a) {
                            e = a
                        },
                        getMeasurementSnapshot: function() {
                            return f
                        }
                    }), c()
                }
            }(),
            p = function() {
                return function(a) {
                    function c() {
                        g = 0, h = 0
                    }

                    function d() {
                        h++;
                        var c = {},
                            d = b.fixEventTime(c);
                        c.ns_st_hc = a.getHeartbeat().getCount() + "";
                        var e = a.getStaCore().createLabels(i.HEARTBEAT, c, d);
                        a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), g = 0, j.resume()
                    }

                    function e() {
                        null != f && (a.getStaCore().getPlatformAPI().clearTimeout(f), f = null)
                    }
                    var f, g, h, j = this,
                        k = l.DEFAULT_HEARTBEAT_INTERVAL;
                    b.extend(this, {
                        getCount: function() {
                            return h
                        },
                        setIntervals: function(a) {
                            k = a
                        },
                        getInterval: function(a) {
                            var b = 0;
                            if (null != k)
                                for (var c = 0; c < k.length; c++) {
                                    var d = k[c],
                                        e = d.playingtime;
                                    if (!e || a < e) {
                                        b = d.interval;
                                        break
                                    }
                                }
                            return b
                        },
                        getIntervals: function() {
                            return k
                        },
                        resume: function() {
                            e();
                            var b = j.getInterval(a.getPlaybackSession().getAsset().getPlaybackTime() + (+new Date - a.getPlaybackSession().getAsset().getPlaybackTimestamp()));
                            if (b > 0) {
                                var c = g > 0 ? g : b;
                                f = a.getStaCore().getPlatformAPI().setTimeout(d, c)
                            }
                            g = 0
                        },
                        pause: function() {
                            e();
                            var b = j.getInterval(a.getPlaybackSession().getAsset().getPlaybackTime() + (+new Date - a.getPlaybackSession().getAsset().getPlaybackTimestamp()));
                            g = b - (a.getPlaybackSession().getAsset().getPlaybackTime() + (+new Date - a.getPlaybackSession().getAsset().getPlaybackTimestamp())) % b
                        }
                    }), c()
                }
            }(),
            q = function() {
                return function(a) {
                    function c() {}

                    function d() {
                        var c = {},
                            d = b.fixEventTime(c);
                        a.getStaCore().newPseudoEvent(i.KEEPALIVE, d, c), g.start()
                    }

                    function e() {
                        null != f && (a.getStaCore().getPlatformAPI().clearTimeout(f), f = null)
                    }
                    var f, g = this,
                        h = l.DEFAULT_KEEP_ALIVE_INTERVAL;
                    b.extend(g, {
                        start: function() {
                            e(), f = a.getStaCore().getPlatformAPI().setTimeout(d, h)
                        },
                        stop: e,
                        setInterval: function(a) {
                            h = a
                        },
                        getInterval: function() {
                            return h
                        }
                    }), c()
                }
            }(),
            r = function() {
                return function(a) {
                    function c() {
                        f = j.IDLE, e = null, d = NaN
                    }
                    var d, e, f, g = this;
                    b.extend(g, {
                        eventTypeToState: function(a) {
                            if (f == j.IDLE) {
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.SEEK_START) return j.SEEKING_BEFORE_PLAYBACK;
                                if (a == i.BUFFER) return j.BUFFERING_BEFORE_PLAYBACK
                            } else if (f == j.PLAYBACK_NOT_STARTED) {
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.SEEK_START) return j.SEEKING_BEFORE_PLAYBACK;
                                if (a == i.BUFFER) return j.BUFFERING_BEFORE_PLAYBACK;
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE
                            } else if (f == j.PLAYING) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.BUFFER) return j.BUFFERING_DURING_PLAYBACK;
                                if (a == i.PAUSE) return j.PAUSED;
                                if (a == i.SEEK_START) return j.SEEKING_DURING_PLAYBACK
                            } else if (f == j.PAUSED) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.BUFFER) return j.BUFFERING_DURING_PAUSE;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.SEEK_START) return j.SEEKING_DURING_PAUSE
                            } else if (f == j.BUFFERING_BEFORE_PLAYBACK) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PAUSE || a == i.BUFFER_STOP) return j.PLAYBACK_NOT_STARTED;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.SEEK_START) return j.SEEKING_BEFORE_PLAYBACK
                            } else if (f == j.BUFFERING_DURING_PLAYBACK) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PLAY || a == i.BUFFER_STOP) return j.PLAYING;
                                if (a == i.PAUSE_ON_BUFFERING) return j.PAUSED_DURING_BUFFERING;
                                if (a == i.SEEK_START) return j.SEEKING_DURING_BUFFERING;
                                if (a == i.PAUSE) return j.PAUSED
                            } else if (f == j.BUFFERING_DURING_SEEKING) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.BUFFER_STOP) return j.SEEKING_DURING_PLAYBACK;
                                if (a == i.PAUSE) return j.PAUSED
                            } else if (f == j.BUFFERING_DURING_PAUSE) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.SEEK_START) return j.SEEKING_DURING_PAUSE;
                                if (a == i.BUFFER_STOP || a == i.PAUSE) return j.PAUSED
                            } else if (f == j.SEEKING_BEFORE_PLAYBACK) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PAUSE) return j.PLAYBACK_NOT_STARTED;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.BUFFER) return j.BUFFERING_BEFORE_PLAYBACK
                            } else if (f == j.SEEKING_DURING_PLAYBACK) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.PAUSE) return j.PAUSED;
                                if (a == i.BUFFER) return j.BUFFERING_DURING_SEEKING
                            } else if (f == j.SEEKING_DURING_BUFFERING) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.PAUSE || a == i.BUFFER_STOP) return j.PAUSED;
                                if (a == i.BUFFER) return j.BUFFERING_DURING_SEEKING
                            } else if (f == j.SEEKING_DURING_PAUSE) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.PAUSE || a == i.BUFFER_STOP) return j.PAUSED;
                                if (a == i.BUFFER) return j.BUFFERING_DURING_PAUSE
                            } else if (f == j.PAUSED_DURING_BUFFERING) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.SEEK_START) return j.SEEKING_DURING_BUFFERING;
                                if (a == i.PAUSE) return j.PAUSED;
                                if (a == i.PLAY || a == i.BUFFER_STOP) return j.PLAYING
                            }
                            return null
                        },
                        getCurrentState: function() {
                            return f
                        },
                        newEvent: function(a, b) {
                            var c = g.eventTypeToState(a);
                            f != c && (e = f, f = c, d = b)
                        },
                        getPreviousState: function() {
                            return e
                        },
                        getLastStateChangeTimestamp: function() {
                            return d
                        }
                    }), c()
                }
            }(),
            s = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onSeekStartWhenPausedOrBufferingDuringPause: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().getAsset().isSeeking() ? a.getPlaybackSession().getAsset().isCollectingSeekingTime() || (a.getPlaybackSession().getAsset().setSeekingTimestamp(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0)) : a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().isSeeking() || (a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b)
                        },
                        onBufferWhenSeekingOrPaused: function(b, c) {
                            a.getPlaybackSession().setBufferingTimestamp(b), a.getPlaybackSession().getAsset().setBufferingTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b)
                        },
                        onPlayWhenSeekingDuringBufferingOrSeekingDuringPause: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().start();
                            var e = a.getStaCore().createLabels(i.PLAY, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        },
                        onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause: function(b, c) {
                            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b)
                        },
                        onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause: function(b, c) {
                            a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b)
                        },
                        onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause: function(c, d) {
                            a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().getAsset().addElapsedTime(c);
                            var e = a.getStaCore().createLabels(i.END, d, c);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession()
                        },
                        onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause: function(b, c) {
                            a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b)
                        },
                        onBufferStopOrOnPlayWhenBufferingDuringPlayback: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getStaCore().stopPausedOnBufferingTimer(), a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getHeartbeat().resume(), a.getKeepAlive().start()
                        }
                    })
                }
            }(),
            t = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            a.getPlaybackSession().addBufferingTime(c), a.getPlaybackSession().getAsset().addBufferingTime(c), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession()
                        },
                        onBufferStop: function(b, c) {
                            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1))
                        },
                        onSeekStart: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() ? a.getPlaybackSession().getAsset().isCollectingSeekingTime() || (a.getPlaybackSession().getAsset().setSeekingTimestamp(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0)) : a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().isSeeking() || (a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b))
                        },
                        onPause: function(b, c) {
                            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1))
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().getAsset().setPlaybackStarted(!0), (a.getPlaybackSession().getAsset().isPlaybackSessionLooping() || 0 == a.getPlaybackSession().getPlaybackCounter()) && (a.getPlaybackSession().incrementPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)), a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().setPlaybackStarted(!0), a.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), (0 == a.getPlaybackSession().getAsset().getLowestPartNumberPlayed() || a.getPlaybackSession().getAsset().getPartNumber() <= a.getPlaybackSession().getAsset().getLowestPartNumberPlayed()) && (a.getPlaybackSession().getAsset().setLowestPartNumberPlayed(a.getPlaybackSession().getAsset().getPartNumber()), a.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaySequenceCounter(0), a.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getStaCore().isLoadingTimeSent() || (c.ns_st_lt = a.getStaCore().getLoadTimeOffset() + b - a.getStaCore().getInitTimestamp() + "", a.getStaCore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().start();
                            var e = a.getStaCore().createLabels(i.PLAY, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            u = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndAndSkip: function(c, d) {
                            a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().addBufferingTime(c), a.getPlaybackSession().getAsset().addBufferingTime(c), a.getPlaybackSession().getAsset().addElapsedTime(c);
                            var e = a.getStaCore().createLabels(i.END, d, c);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession()
                        },
                        onPause: function(b, c) {
                            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b)
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().start();
                            var e = a.getStaCore().createLabels(i.PLAY, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            v = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onPauseOnBuffering: function(b, c) {
                            parseInt(c.ns_st_po);
                            a.getStaCore().stopPausedOnBufferingTimer(), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses();
                            var d = a.getStaCore().createLabels(i.PAUSE, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(d.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(d.eventLabels), a.getEventManager().newEvent(d), a.getPlaybackSession().setBufferingTimestamp(b), a.getPlaybackSession().getAsset().setBufferingTimestamp(b)
                        },
                        onEndOrAdSkip: function(c, d) {
                            parseInt(d.ns_st_po);
                            a.getStaCore().stopPausedOnBufferingTimer(), a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().addBufferingTime(c), a.getPlaybackSession().getAsset().addBufferingTime(c), a.getPlaybackSession().getAsset().addElapsedTime(c);
                            var e = a.getStaCore().createLabels(i.END, d, c);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession()
                        },
                        onSeekStart: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getStaCore().stopPausedOnBufferingTimer(), a.getHeartbeat().pause(), a.getKeepAlive().stop(), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b), a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses();
                            var e = a.getStaCore().createLabels(i.PAUSE, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        },
                        onPause: function(b, c) {
                            parseInt(c.ns_st_po);
                            a.getStaCore().stopPausedOnBufferingTimer(), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses();
                            var d = a.getStaCore().createLabels(i.PAUSE, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(d.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(d.eventLabels), a.getEventManager().newEvent(d)
                        }
                    })
                }
            }(),
            w = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getStaCore().stopPausedOnBufferingTimer(), a.getPlaybackSession().addBufferingTime(c), a.getPlaybackSession().getAsset().addBufferingTime(c), a.getPlaybackSession().getAsset().addElapsedTime(c);
                            var e = a.getStaCore().createLabels(i.END, d, c);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession()
                        },
                        onPause: function(b, c) {
                            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses(), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b)
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().start();
                            var e = a.getStaCore().createLabels(i.PLAY, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            x = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onBuffer: function(b, c) {
                            a.getPlaybackSession().setPlaybackSessionStarted(!0), a.getPlaybackSession().getAsset().setAssetStarted(!0), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().setSeekingTime(a.getPlaybackSession().getAsset().getSeekingTimeBeforeEnd()), a.getPlaybackSession().setBufferingTimestamp(b), a.getPlaybackSession().getAsset().setBufferingTimestamp(b)
                        },
                        onSeekStart: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().setPlaybackSessionStarted(!0), a.getPlaybackSession().getAsset().setAssetStarted(!0), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().setSeekingTime(a.getPlaybackSession().getAsset().getSeekingTimeBeforeEnd()), a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b)
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().setPlaybackSessionStarted(!0), a.getPlaybackSession().getAsset().setAssetStarted(!0), (a.getPlaybackSession().getAsset().isPlaybackSessionLooping() || 0 == a.getPlaybackSession().getPlaybackCounter()) && (a.getPlaybackSession().incrementPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().setSeekingTime(a.getPlaybackSession().getAsset().getSeekingTimeBeforeEnd()), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().setPlaybackStarted(!0), a.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(), (0 == a.getPlaybackSession().getAsset().getLowestPartNumberPlayed() || a.getPlaybackSession().getAsset().getPartNumber() <= a.getPlaybackSession().getAsset().getLowestPartNumberPlayed()) && (a.getPlaybackSession().getAsset().setLowestPartNumberPlayed(a.getPlaybackSession().getAsset().getPartNumber()), a.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaySequenceCounter(0), a.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getStaCore().isLoadingTimeSent() || (c.ns_st_lt = a.getStaCore().getLoadTimeOffset() + b - a.getStaCore().getInitTimestamp() + "", a.getStaCore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().start();
                            var e = a.getStaCore().createLabels(i.PLAY, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            y = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().getAsset().addElapsedTime(c);
                            var e = a.getStaCore().createLabels(i.END, d, c);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession()
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().start();
                            var e = a.getStaCore().createLabels(i.PLAY, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            z = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().addBufferingTime(c), a.getPlaybackSession().getAsset().addBufferingTime(c), a.getPlaybackSession().getAsset().addElapsedTime(c), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1));
                            var e = a.getStaCore().createLabels(i.END, d, c);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession()
                        },
                        onBufferStop: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().start();
                            var e = a.getStaCore().createLabels(i.PLAY, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        },
                        onSeekStart: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() ? a.getPlaybackSession().getAsset().isCollectingSeekingTime() || (a.getPlaybackSession().getAsset().setSeekingTimestamp(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0)) : a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().isSeeking() || (a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b)
                        },
                        onPause: function(b, c) {
                            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b)
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(),
                                a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().start();
                            var e = a.getStaCore().createLabels(i.PLAY, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            A = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession()
                        },
                        onSeekStart: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().getAsset().isSeeking() ? a.getPlaybackSession().getAsset().setSeekingTimestamp(b) : a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().isSeeking() || (a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b))
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().setPlaybackSessionStarted(!0), (a.getPlaybackSession().getAsset().isPlaybackSessionLooping() || 0 == a.getPlaybackSession().getPlaybackCounter()) && (a.getPlaybackSession().incrementPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)), a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().setPlaybackStarted(!0), a.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(), (0 == a.getPlaybackSession().getAsset().getLowestPartNumberPlayed() || a.getPlaybackSession().getAsset().getPartNumber() <= a.getPlaybackSession().getAsset().getLowestPartNumberPlayed()) && (a.getPlaybackSession().getAsset().setLowestPartNumberPlayed(a.getPlaybackSession().getAsset().getPartNumber()), a.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaySequenceCounter(0), a.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getStaCore().isLoadingTimeSent() || (c.ns_st_lt = a.getStaCore().getLoadTimeOffset() + b - a.getStaCore().getInitTimestamp() + "", a.getStaCore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().start();
                            var e = a.getStaCore().createLabels(i.PLAY, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        },
                        onBuffer: function() {
                            a.getPlaybackSession().setBufferingTimestamp(eventTimestamp), a.getPlaybackSession().getAsset().setBufferingTimestamp(eventTimestamp)
                        }
                    })
                }
            }(),
            B = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            var e = parseInt(d.ns_st_po);
                            a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().addPlaybackTime(c), a.getPlaybackSession().getAsset().addPlaybackTime(c), a.getPlaybackSession().getAsset().addElapsedTime(c), a.getPlaybackSession().getAsset().addInterval(e);
                            var f = a.getStaCore().createLabels(i.END, d, c);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(f.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(f.eventLabels), a.getEventManager().newEvent(f), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession()
                        },
                        onBuffer: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getHeartbeat().pause(), a.getKeepAlive().stop(), a.getPlaybackSession().addPlaybackTime(b), a.getPlaybackSession().getAsset().addPlaybackTime(b), a.getPlaybackSession().getAsset().addInterval(d), a.getStaCore().isPauseOnBufferingEnabled() && a.getStaCore().startPausedOnBufferingTimer(b, c), a.getPlaybackSession().getAsset().incrementBufferCount(), a.getPlaybackSession().setBufferingTimestamp(b), a.getPlaybackSession().getAsset().setBufferingTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b)
                        },
                        onSeekStart: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getHeartbeat().pause(), a.getKeepAlive().stop(), a.getPlaybackSession().addPlaybackTime(b), a.getPlaybackSession().getAsset().addPlaybackTime(b), a.getPlaybackSession().getAsset().addInterval(d), a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses();
                            var e = a.getStaCore().createLabels(i.PAUSE, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        },
                        onPause: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getHeartbeat().pause(), a.getKeepAlive().stop(), a.getPlaybackSession().addPlaybackTime(b), a.getPlaybackSession().getAsset().addPlaybackTime(b), a.getPlaybackSession().getAsset().addInterval(d), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses();
                            var e = a.getStaCore().createLabels(i.PAUSE, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            C = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession()
                        },
                        onPause: function(b, c) {
                            a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1))
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), (a.getPlaybackSession().getAsset().isPlaybackSessionLooping() || 0 == a.getPlaybackSession().getPlaybackCounter()) && (a.getPlaybackSession().incrementPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)), a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().getAsset().setPlaybackStarted(!0), a.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(), (0 == a.getPlaybackSession().getAsset().getLowestPartNumberPlayed() || a.getPlaybackSession().getAsset().getPartNumber() <= a.getPlaybackSession().getAsset().getLowestPartNumberPlayed()) && (a.getPlaybackSession().getAsset().setLowestPartNumberPlayed(a.getPlaybackSession().getAsset().getPartNumber()), a.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaySequenceCounter(0), a.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getStaCore().isLoadingTimeSent() || (c.ns_st_lt = a.getStaCore().getLoadTimeOffset() + b - a.getStaCore().getInitTimestamp() + "", a.getStaCore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().start();
                            var e = a.getStaCore().createLabels(i.PLAY, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            D = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onPause: function(b, c) {
                            a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses(), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b)
                        }
                    })
                }
            }(),
            E = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            parseInt(d.ns_st_po);
                            a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().getAsset().addElapsedTime(c);
                            var e = a.getStaCore().createLabels(i.END, d, c);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession()
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getStaCore().isLoadingTimeSent() || (c.ns_st_lt = a.getStaCore().getLoadTimeOffset() + b - a.getStaCore().getInitTimestamp() + "", a.getStaCore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().start();
                            var e = a.getStaCore().createLabels(i.PLAY, c, b);
                            a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            F = function() {
                return function(a) {
                    function d() {
                        if (F = new G(ea), b.getNamespace().comScore ? (fa = b.getNamespace().comScore.exports, F.setAppCore(fa.c())) : F.setAppCore(null), a.publisherId) {
                            ea.setLabel("c2", a.publisherId);
                            var d = a.secure;
                            !d && F.getAppCore() ? d = F.getAppCore().isSecure() : !d && b.isBrowser() && (d = b.isWebSecure());
                            var e = (d ? "https://sb" : "http://b") + ".scorecardresearch.com/p?c1=2";
                            ea.setLiveEndpointURL(e)
                        }
                        a.liveEndpointURL && ea.setLiveEndpointURL(a.liveEndpointURL), F.setKeepAlive(new q(F)), F.setHeartbeat(new p(F)), F.setEventManager(new o(F)), F.setStateMachine(new r), F.setLogging(new c(l.LOG_NAMESPACE, a.debug)), F.setPlaybackSession(new n(F)), H = new x(F), I = new y(F), J = new A(F), K = new B(F), L = new t(F), M = new v(F), N = new w(F), O = new u(F), P = new z(F), Q = new C(F), R = new D(F), S = new E(F), T = new s(F), U = !1, V = 0, W = +new Date, Y = !0, $ = !1, aa = [], a.systemClockJumpDetection && ea.enableSystemClockJumpsDetection(parseInt(a.systemClockJumpDetectionInterval))
                    }

                    function e(a) {
                        var b = F.getStateMachine().getCurrentState();
                        if (b == j.IDLE || b == j.PLAYBACK_NOT_STARTED || b == j.BUFFERING_BEFORE_PLAYBACK || b == j.SEEKING_BEFORE_PLAYBACK) {
                            if (a == i.PLAY) return !0
                        } else if (b == j.PLAYING) {
                            if (a == i.END || a == i.AD_SKIP || a == i.SEEK_START || a == i.PAUSE) return !0
                        } else if (b == j.PAUSED || b == j.BUFFERING_DURING_PAUSE || b == j.SEEKING_DURING_PLAYBACK || b == j.SEEKING_DURING_BUFFERING || b == j.SEEKING_DURING_PAUSE) {
                            if (a == i.END || a == i.AD_SKIP || a == i.PLAY) return !0
                        } else if (b == j.BUFFERING_DURING_PLAYBACK) {
                            if (a == i.PAUSE_ON_BUFFERING || a == i.END || a == i.AD_SKIP || a == i.SEEK_START || a == i.PAUSE || a == i.PLAY) return !0
                        } else if (b == j.BUFFERING_DURING_SEEKING) {
                            if (a == i.END || a == i.AD_SKIP || a == i.PAUSE || a == i.PLAY) return !0
                        } else if (b == j.PAUSED_DURING_BUFFERING && (a == i.END || a == i.AD_SKIP || a == i.BUFFER_STOP || a == i.PLAY)) return !0;
                        return !1
                    }

                    function f(a, b, c) {
                        var d = F.getStateMachine().getCurrentState();
                        a == i.AD_SKIP && !c.hasOwnProperty("ns_st_ui") && e(a) ? c.ns_st_ui = "skip" : a == i.SEEK_START && !c.hasOwnProperty("ns_st_ui") && e(a) && (c.ns_st_ui = "seek"), d == j.IDLE ? a == i.BUFFER ? H.onBuffer(b, c) : a == i.SEEK_START ? H.onSeekStart(b, c) : a == i.PLAY && H.onPlay(b, c) : d == j.PLAYBACK_NOT_STARTED ? a == i.END || a == i.AD_SKIP ? J.onEndOrAdSkip(b, c) : a == i.SEEK_START ? J.onSeekStart(b, c) : a == i.PLAY ? J.onPlay(b, c) : a == i.BUFFER && J.onBuffer(b, c) : d == j.PLAYING ? a == i.END || a == i.AD_SKIP ? K.onEndOrAdSkip(b, c) : a == i.BUFFER ? K.onBuffer(b, c) : a == i.SEEK_START ? K.onSeekStart(b, c) : a == i.PAUSE && K.onPause(b, c) : d == j.PAUSED ? a == i.END || a == i.AD_SKIP ? I.onEndOrAdSkip(b, c) : a == i.PLAY ? I.onPlay(b, c) : a == i.BUFFER ? T.onBufferWhenSeekingOrPaused(b, c) : a == i.SEEK_START && T.onSeekStartWhenPausedOrBufferingDuringPause(b, c) : d == j.BUFFERING_BEFORE_PLAYBACK ? a == i.END || a == i.AD_SKIP ? L.onEndOrAdSkip(b, c) : a == i.BUFFER_STOP ? L.onBufferStop(b, c) : a == i.SEEK_START ? L.onSeekStart(b, c) : a == i.PAUSE ? L.onPause(b, c) : a == i.PLAY && L.onPlay(b, c) : d == j.BUFFERING_DURING_PLAYBACK ? a == i.PAUSE_ON_BUFFERING ? M.onPauseOnBuffering(b, c) : a == i.BUFFER_STOP ? T.onBufferStopOrOnPlayWhenBufferingDuringPlayback(b, c) : a == i.END || a == i.AD_SKIP ? M.onEndOrAdSkip(b, c) : a == i.SEEK_START ? M.onSeekStart(b, c) : a == i.PAUSE ? M.onPause(b, c) : a == i.PLAY && T.onBufferStopOrOnPlayWhenBufferingDuringPlayback(b, c) : d == j.BUFFERING_DURING_SEEKING ? a == i.END || a == i.AD_SKIP ? N.onEndOrAdSkip(b, c) : a == i.PAUSE ? N.onPause(b, c) : a == i.PLAY ? N.onPlay(b, c) : a == i.BUFFER_STOP && T.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b, c) : d == j.BUFFERING_DURING_PAUSE ? a == i.END || a == i.AD_SKIP ? O.onEndAndSkip(b, c) : a == i.PAUSE ? O.onPause(b, c) : a == i.PLAY ? O.onPlay(b, c) : a == i.SEEK_START ? T.onSeekStartWhenPausedOrBufferingDuringPause(b, c) : a == i.BUFFER_STOP && T.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b, c) : d == j.SEEKING_BEFORE_PLAYBACK ? a == i.END || a == i.AD_SKIP ? Q.onEndOrAdSkip(b, c) : a == i.PAUSE ? Q.onPause(b, c) : a == i.PLAY ? Q.onPlay(b, c) : a == i.BUFFER && T.onBufferWhenSeekingOrPaused(b, c) : d == j.SEEKING_DURING_PLAYBACK ? a == i.END || a == i.AD_SKIP ? S.onEndOrAdSkip(b, c) : a == i.PLAY ? S.onPlay(b, c) : a == i.BUFFER ? T.onBufferWhenSeekingOrPaused(b, c) : a == i.PAUSE && T.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b, c) : d == j.SEEKING_DURING_BUFFERING ? a == i.PAUSE ? R.onPause(b, c) : a == i.BUFFER ? T.onBufferWhenSeekingOrPaused(b, c) : a == i.PLAY ? T.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b, c) : a == i.END || a == i.AD_SKIP ? T.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b, c) : a == i.BUFFER_STOP && T.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b, c) : d == j.PAUSED_DURING_BUFFERING ? a == i.END || a == i.AD_SKIP ? P.onEndOrAdSkip(b, c) : a == i.BUFFER_STOP ? P.onBufferStop(b, c) : a == i.SEEK_START ? P.onSeekStart(b, c) : a == i.PAUSE ? P.onPause(b, c) : a == i.PLAY && P.onPlay(b, c) : d == j.SEEKING_DURING_PAUSE && (a == i.BUFFER ? T.onBufferWhenSeekingOrPaused(b, c) : a == i.PLAY ? T.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b, c) : a == i.PAUSE ? T.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b, c) : a == i.END || a == i.AD_SKIP ? T.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b, c) : a == i.BUFFER_STOP && T.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b, c)), e(a) && F.getPlaybackSession().setFirstEventSent(!0)
                    }

                    function m(a, c) {
                        for (var d, e = ka.encodeURIComponent || escape, f = [], g = l.LABELS_ORDER, h = a.split("?"), i = h[0], j = h[1], k = j.split("&"), m = 0, n = k.length; m < n; m++) {
                            var o = k[m].split("="),
                                p = unescape(o[0]),
                                q = unescape(o[1]);
                            p && (c[p] = q)
                        }
                        for (var r = {}, s = 0, t = g.length; s < t; s++) {
                            var u = g[s];
                            if (c.hasOwnProperty(u)) {
                                var v = c[u];
                                "undefined" != typeof v && null != v && (r[u] = !0, f.push(e(u) + "=" + e(c[u])))
                            }
                        }
                        for (var w in c)
                            if (c.hasOwnProperty(w)) {
                                if (r[w]) continue;
                                var x = c[w];
                                "undefined" != typeof x && null != x && f.push(e(w) + "=" + e(c[w]))
                            }
                        d = i + "?" + f.join("&"), d = d + (d.indexOf("&c8=") < 0 ? "&c8=" + e(la.title) : "") + (d.indexOf("&c7=") < 0 ? "&c7=" + e(la.URL) : "") + (d.indexOf("&c9=") < 0 ? "&c9=" + e(la.referrer) : "");
                        var y = b.browserAcceptsLargeURLs() ? l.URL_LENGTH_LIMIT : l.RESTRICTED_URL_LENGTH_LIMIT;
                        if (d.length > y && d.indexOf("&") > 0) {
                            var z = d.substr(0, y - 8).lastIndexOf("&");
                            d = (d.substring(0, z) + "&ns_cut=" + e(d.substring(z + 1))).substr(0, y)
                        }
                        return d
                    }
                    var F, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea = this,
                        fa = {},
                        ga = l.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,
                        ha = l.THROTTLING_DELAY,
                        ia = {},
                        ja = !1;
                    b.extend(ea, {
                        getConfiguration: function() {
                            return a || {}
                        },
                        enableSystemClockJumpsDetection: function(a) {
                            (a < l.SYSTEM_CLOCK_JUMP_DETECTION_MINIMUM_INTERVAL || !a) && (a = l.SYSTEM_CLOCK_JUMP_DETECTION_DEFAULT_INTERVAL), b.onSystemClockJump(function(a) {
                                da = a, ja = !0
                            }, a)
                        },
                        createLabels: function(a, c, d) {
                            var e = !1;
                            if (a == i.HEARTBEAT) {
                                var f = isNaN(X) ? W : X;
                                X = d, (d < f || ja) && (e = !0, ja = !1, d < f ? (F.getPlaybackSession().addInternalErrorFlag("1"), F.getLogging().infoLog("System clock jump detected", "to the far past")) : da ? (F.getPlaybackSession().addInternalErrorFlag("3"), F.getLogging().infoLog("System clock jump detected", "to the future")) : (F.getPlaybackSession().addInternalErrorFlag("2"), F.getLogging().infoLog("System clock jump detected", "to the near past")), d = f)
                            }
                            var g = {};
                            if ("undefined" != typeof document) {
                                var h = document;
                                g.c7 = h.URL, g.c8 = h.title, g.c9 = h.referrer
                            }
                            return g.ns_ts = +new Date + "", g.ns_st_ev = i.toString(a), g.ns_st_mp = l.DEFAULT_PLAYERNAME, g.ns_st_mv = l.STREAMINGANALYTICS_VERSION, g.ns_st_ub = "0", g.ns_st_br = "0", g.ns_st_pn = "1", g.ns_st_tp = "0", g.ns_st_it = k.toString(k.SINGLE_CLIP), g.ns_st_sv = l.STREAMINGANALYTICS_VERSION, g.ns_st_smv = l.MODEL_VERSION, g.ns_type = "hidden", g.ns_st_ec = F.getEventManager().getEventCounter() + "", g.ns_st_ki = F.getKeepAlive().getInterval() + "", F.getPlaybackSession().getAsset().isAutoCalculatePositionsEnabled() ? g.ns_st_po = F.getPlaybackSession().getAsset().getExpectedPlaybackPosition(d) + "" : g.ns_st_po = ca + "", ca = parseInt(g.ns_st_po), b.extend(g, ea.getLabels()), F.getPlaybackSession().createLabels(g, d), b.extend(g, c), e && (F.getPlaybackSession().setPlaybackTimestamp(X - parseInt(g.ns_st_pt)), F.getPlaybackSession().getAsset().setPlaybackTimestamp(X - parseInt(g.ns_st_pt)), F.getPlaybackSession().getAsset().setElapsedTimestamp(X - parseInt(g.ns_st_et)), F.getStateMachine().getCurrentState() == j.BUFFERING_DURING_PLAYBACK && F.getPlaybackSession().getAsset().setBufferingTimestamp(X - parseInt(g.ns_st_bp))), {
                                eventType: a,
                                eventLabels: g
                            }
                        },
                        newEvent: function(a, c, d, e) {
                            ea.stopDelayedTransitionTimer();
                            var g = F.getStateMachine().getCurrentState(),
                                h = F.getStateMachine().eventTypeToState(a);
                            if (null == h || h == g) return void F.getLogging().infoLog("Ignored event:", i.toString(a), "during state", b.stateToString(g), d);
                            if (ea.isThrottlingEnabled() && (g == j.PLAYING || g == j.PAUSED) && (h == j.PLAYING || h == j.PAUSED) && !e) {
                                F.getLogging().infoLog("Throttled event:", i.toString(a), "during state", b.stateToString(g), d, ea.getThrottlingDelay(), "ms");
                                var k = function(a, b, d) {
                                    return function() {
                                        ea.newEvent(a, c, d, !0)
                                    }
                                }(a, h, d);
                                return void(_ = F.getPlatformAPI().setTimeout(k, ea.getThrottlingDelay()))
                            }
                            var l = isNaN(X) ? W : X;
                            X = c;
                            var m = !1;
                            (c < l || ja) && (m = !0, ja = !1, c < l ? (F.getPlaybackSession().addInternalErrorFlag("1"), F.getLogging().infoLog("System clock jump detected", "to the far past")) : da ? (F.getPlaybackSession().addInternalErrorFlag("3"), F.getLogging().infoLog("System clock jump detected", "to the future")) : (F.getPlaybackSession().addInternalErrorFlag("2"), F.getLogging().infoLog("System clock jump detected", "to the near past")), c = l), d.ns_st_po || (F.getPlaybackSession().getAsset().isAutoCalculatePositionsEnabled() ? F.getStateMachine().getCurrentState() == j.IDLE ? d.ns_st_po = "0" : d.ns_st_po = F.getPlaybackSession().getAsset().getExpectedPlaybackPosition(c) + "" : d.ns_st_po = ca + ""), ca = parseInt(d.ns_st_po), F.getPlaybackSession().getAsset().setPlaybackTimeOffset(parseInt(d.ns_st_po)), f(a, c, d);
                            var n = 0;
                            isNaN(F.getStateMachine().getLastStateChangeTimestamp()) || (n = c - F.getStateMachine().getLastStateChangeTimestamp()), F.getStateMachine().newEvent(a, c), m && (h != j.IDLE && h != j.PLAYBACK_NOT_STARTED && h != j.SEEKING_BEFORE_PLAYBACK && h != j.BUFFERING_BEFORE_PLAYBACK && F.getPlaybackSession().getAsset().setElapsedTimestamp(X), h != j.BUFFERING_BEFORE_PLAYBACK && h != j.BUFFERING_DURING_PAUSE && h != j.BUFFERING_DURING_PLAYBACK && h != j.BUFFERING_DURING_SEEKING && h != j.PAUSED_DURING_BUFFERING || (F.getPlaybackSession().setBufferingTimestamp(X), F.getPlaybackSession().getAsset().setBufferingTimestamp(X)), h != j.PLAYING && h != j.BUFFERING_DURING_PLAYBACK || (F.getPlaybackSession().setPlaybackTimestamp(X), F.getPlaybackSession().getAsset().setPlaybackTimestamp(X)), h != j.SEEKING_BEFORE_PLAYBACK && h != j.SEEKING_DURING_BUFFERING && h != j.SEEKING_DURING_PAUSE && h != j.SEEKING_DURING_PLAYBACK && h != j.BUFFERING_DURING_SEEKING || F.getPlaybackSession().getAsset().setSeekingTimestamp(X)), F.getLogging().log("Transition from", b.stateToString(g), "to", b.stateToString(h), "due to event:", i.toString(a));
                            for (var o = 0, p = aa.length; o < p; o++) aa[o](g, h, d, n)
                        },
                        newPseudoEvent: function(a, c, d) {
                            if ((a == i.LOAD || a == i.ENGAGE) && F.getStateMachine().getCurrentState() != j.IDLE) return void F.getLogging().infoLog("Ignored pseudo-event:", i.toString(a), "during state", b.stateToString(F.getStateMachine().getCurrentState()), d);
                            a == i.ERROR && null == d.ns_st_er && (d.ns_st_er = h.UNKNOWN_VALUE), a == i.TRANSFER && null == d.ns_st_rp && (d.ns_st_rp = h.UNKNOWN_VALUE);
                            var e, f, g, k, l = !0,
                                m = !1;
                            switch (a) {
                                case i.BIT_RATE:
                                    e = "ns_st_br", f = "ns_st_pbr";
                                    break;
                                case i.PLAYBACK_RATE:
                                    e = "ns_st_rt", f = "ns_st_prt";
                                    break;
                                case i.VOLUME:
                                    e = "ns_st_vo", f = "ns_st_pvo";
                                    break;
                                case i.WINDOW_STATE:
                                    e = "ns_st_ws", f = "ns_st_pws";
                                    break;
                                case i.AUDIO:
                                    e = "ns_st_at", f = "ns_st_pat";
                                    break;
                                case i.VIDEO:
                                    e = "ns_st_vt", f = "ns_st_pvt";
                                    break;
                                case i.SUBS:
                                    e = "ns_st_tt", f = "ns_st_ptt";
                                    break;
                                case i.CDN:
                                    e = "ns_st_cdn", f = "ns_st_pcdn";
                                    break;
                                default:
                                    l = !1
                            }
                            if (l && e in d) switch (k = d[e], a) {
                                case i.BIT_RATE:
                                case i.VOLUME:
                                case i.WINDOW_STATE:
                                    e in ia && (g = ia[e], d[f] = g, m = k == g + ""), ia[e] = d[e];
                                    break;
                                case i.AUDIO:
                                case i.VIDEO:
                                case i.SUBS:
                                case i.CDN:
                                    F.getPlaybackSession().getAsset().hasInternalLabel(e) && (g = F.getPlaybackSession().getAsset().getInternalLabel(e), d[f] = g, m = k == g + ""), F.getPlaybackSession().getAsset().setInternalLabel(e, d[e]);
                                    break;
                                case i.PLAYBACK_RATE:
                                    g = F.getPlaybackSession().getAsset().getPlaybackRate(), d[f] = g + ""
                            }
                            if (l && F.getStateMachine().getCurrentState() != j.PLAYING && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PLAYBACK || l && m) return a == i.PLAYBACK_RATE && F.getPlaybackSession().getAsset().setPlaybackRate(parseInt(d.ns_st_rt)), void F.getLogging().infoLog("No measurement send for the pseudo-event:", i.toString(a), "during state", b.stateToString(F.getStateMachine().getCurrentState()), d);
                            var n = isNaN(X) ? W : X;
                            X = c;
                            var o = !1;
                            (c < n || ja) && (o = !0, ja = !1, c < n ? (F.getPlaybackSession().addInternalErrorFlag("1"), F.getLogging().infoLog("System clock jump detected", "to the far past")) : da ? (F.getPlaybackSession().addInternalErrorFlag("3"), F.getLogging().infoLog("System clock jump detected", "to the future")) : (F.getPlaybackSession().addInternalErrorFlag("2"), F.getLogging().infoLog("System clock jump detected", "to the near past")), c = n), d.ns_st_po || (F.getPlaybackSession().getAsset().isAutoCalculatePositionsEnabled() ? d.ns_st_po = F.getPlaybackSession().getAsset().getExpectedPlaybackPosition(c) + "" : d.ns_st_po = ca + ""), ca = parseInt(d.ns_st_po), F.getPlaybackSession().getAsset().setPlaybackTimeOffset(parseInt(d.ns_st_po)), F.getStateMachine().getCurrentState() != j.IDLE && F.getStateMachine().getCurrentState() != j.PLAYBACK_NOT_STARTED && F.getStateMachine().getCurrentState() != j.SEEKING_BEFORE_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_BEFORE_PLAYBACK && (F.getPlaybackSession().getAsset().addElapsedTime(c), F.getPlaybackSession().getAsset().setElapsedTimestamp(c)), F.getStateMachine().getCurrentState() != j.PLAYING && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PLAYBACK || (F.getPlaybackSession().addPlaybackTime(c), F.getPlaybackSession().setPlaybackTimestamp(c), F.getPlaybackSession().getAsset().addPlaybackTime(c), F.getPlaybackSession().getAsset().setPlaybackTimestamp(c), F.getPlaybackSession().getAsset().addInterval(parseInt(d.ns_st_po)), F.getPlaybackSession().getAsset().setPlaybackStartPosition(parseInt(d.ns_st_po))), F.getStateMachine().getCurrentState() != j.BUFFERING_BEFORE_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PAUSE && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_SEEKING || (F.getPlaybackSession().addBufferingTime(c), F.getPlaybackSession().setBufferingTimestamp(c), F.getPlaybackSession().getAsset().addBufferingTime(c), F.getPlaybackSession().getAsset().setBufferingTimestamp(c));
                            var p = ea.createLabels(a, d, c);
                            F.getPlaybackSession().getAsset().updateDeltaLabels(p.eventLabels), F.getPlaybackSession().getAsset().updateIndependentLabels(p.eventLabels), F.getEventManager().newEvent(p), a == i.PLAYBACK_RATE && F.getPlaybackSession().getAsset().setPlaybackRate(parseInt(d.ns_st_rt)), o && (F.getStateMachine().getCurrentState() != j.PLAYING && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PLAYBACK || (F.getPlaybackSession().setPlaybackTimestamp(X), F.getPlaybackSession().getAsset().setPlaybackTimestamp(X)), F.getStateMachine().getCurrentState() != j.IDLE && F.getStateMachine().getCurrentState() != j.PLAYBACK_NOT_STARTED && F.getStateMachine().getCurrentState() != j.SEEKING_BEFORE_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_BEFORE_PLAYBACK && F.getPlaybackSession().getAsset().setElapsedTimestamp(X), F.getStateMachine().getCurrentState() != j.BUFFERING_BEFORE_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PAUSE && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_SEEKING && F.getStateMachine().getCurrentState() != j.PAUSED_DURING_BUFFERING || (F.getPlaybackSession().setBufferingTimestamp(X), F.getPlaybackSession().getAsset().setBufferingTimestamp(X)), F.getStateMachine().getCurrentState() != j.SEEKING_BEFORE_PLAYBACK && F.getStateMachine().getCurrentState() != j.SEEKING_DURING_BUFFERING && F.getStateMachine().getCurrentState() != j.SEEKING_DURING_PAUSE && F.getStateMachine().getCurrentState() != j.SEEKING_DURING_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_SEEKING || F.getPlaybackSession().getAsset().setSeekingTimestamp(X))
                        },
                        getState: function() {
                            return F.getStateMachine().getCurrentState()
                        },
                        addListener: function(a) {
                            aa.push(a)
                        },
                        removeListener: function(a) {
                            aa.splice(b.indexOf(a, aa), 1)
                        },
                        getLabel: function(a) {
                            return ia[a]
                        },
                        getLabels: function() {
                            return ia
                        },
                        setLabel: function(a, b) {
                            null == b ? delete ia[a] : ia[a] = b
                        },
                        setLabels: function(a) {
                            for (var b in a) a.hasOwnProperty(b) && ea.setLabel(b, a[b])
                        },
                        getPlatformAPI: function() {
                            return F.getAppCore() ? F.getAppCore().getPlatformAPI() : g
                        },
                        getExports: function() {
                            return fa
                        },
                        isProperlyInitialized: function() {
                            var a = F.getAppCore().getAppContext(),
                                b = F.getAppCore().getSalt(),
                                c = F.getAppCore().getPixelURL();
                            return a && c && b
                        },
                        setThrottlingDelay: function(a) {
                            ha = a
                        },
                        getThrottlingDelay: function() {
                            return ha
                        },
                        isThrottlingEnabled: function() {
                            return $
                        },
                        setThrottlingEnabled: function(a) {
                            $ = a
                        },
                        isLoadingTimeSent: function() {
                            return U
                        },
                        setLoadingTimeSent: function(a) {
                            U = a
                        },
                        getLoadTimeOffset: function() {
                            return V
                        },
                        setLoadTimeOffset: function(a) {
                            V = a
                        },
                        getInitTimestamp: function() {
                            return W
                        },
                        setPauseOnBufferingInterval: function(a) {
                            ga = a
                        },
                        getPauseOnBufferingInterval: function() {
                            return ga
                        },
                        isPauseOnBufferingEnabled: function() {
                            return Y
                        },
                        setPauseOnBufferingEnabled: function(a) {
                            Y = a
                        },
                        startPausedOnBufferingTimer: function(a, c) {
                            ea.stopPausedOnBufferingTimer(), Z = ea.getPlatformAPI().setTimeout(function() {
                                var a = {},
                                    d = b.fixEventTime(a),
                                    e = parseInt(c.ns_st_po);
                                a.ns_st_po = e + "", ea.newEvent(i.PAUSE_ON_BUFFERING, d, a)
                            }, ga)
                        },
                        stopPausedOnBufferingTimer: function() {
                            null != Z && (ea.getPlatformAPI().clearTimeout(Z), Z = null)
                        },
                        stopDelayedTransitionTimer: function() {
                            _ && (ea.getPlatformAPI().clearTimeout(_), _ = null)
                        },
                        setLiveEndpointURL: function(a) {
                            if (null == a || 0 == a.length) return null;
                            var b = decodeURIComponent || unescape,
                                c = a.indexOf("?");
                            if (c >= 0) {
                                if (c < a.length - 1) {
                                    for (var d = a.substring(c + 1).split("&"), e = 0, f = d.length; e < f; e++) {
                                        var g = d[e],
                                            h = g.split("=");
                                        2 == h.length ? ea.setLabel(h[0], b(h[1])) : 1 == h.length && ea.setLabel(l.PAGE_NAME_LABEL, b(h[0]))
                                    }
                                    a = a.substring(0, c + 1)
                                }
                            } else a += "?";
                            return ba = a
                        },
                        getLiveEndpointURL: function() {
                            return ba ? ba : "undefined" != typeof ns_p && "string" == typeof ns_p.src ? ba = ns_p.src.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : "string" == typeof ns_pixelUrl ? ba = ns_pixelUrl.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : null
                        },
                        getStaSM: function() {
                            return F
                        },
                        resetPlaybackSession: function(a) {
                            var b = F.getPlaybackSession();
                            F.setPlaybackSession(new n(F)), n.resetPlaybackSession(F, b, a)
                        },
                        resetHeartbeat: function() {
                            F.getHeartbeat().pause();
                            var a = F.getHeartbeat().getIntervals();
                            F.setHeartbeat(new p(F)), F.getHeartbeat().setIntervals(a)
                        }
                    });
                    var ka, la;
                    b.isBrowser() ? (ka = window, la = document) : (ka = {}, la = {
                        location: {
                            href: ""
                        },
                        title: "",
                        URL: "",
                        referrer: "",
                        cookie: ""
                    }), b.extend(ea, {
                        prepareUrl: m
                    }), d()
                }
            }(),
            G = function() {
                return function(a) {
                    var c, d, e, f, g, h, i, j = this;
                    b.extend(j, {
                        getAppCore: function() {
                            return c
                        },
                        getStaCore: function() {
                            return a
                        },
                        getEventManager: function() {
                            return d
                        },
                        getStateMachine: function() {
                            return e
                        },
                        getHeartbeat: function() {
                            return f
                        },
                        getKeepAlive: function() {
                            return g
                        },
                        getPlaybackSession: function() {
                            return h
                        },
                        getLogging: function() {
                            return i
                        },
                        setAppCore: function(a) {
                            c = a
                        },
                        setKeepAlive: function(a) {
                            g = a
                        },
                        setHeartbeat: function(a) {
                            f = a
                        },
                        setEventManager: function(a) {
                            d = a
                        },
                        setStateMachine: function(a) {
                            e = a
                        },
                        setPlaybackSession: function(a) {
                            h = a
                        },
                        setLogging: function(a) {
                            i = a
                        }
                    })
                }
            }(),
            H = function() {
                return function(a) {
                    function c() {
                        a = b.extend({}, a), f = new F(a), f.getStaSM().getLogging().log("New StreamingAnalytics instance with configuration", a)
                    }

                    function d(a) {
                        var c, d;
                        if (c = "object" == typeof arguments[1] ? arguments[1] : "object" == typeof arguments[2] ? arguments[2] : {}, d = "number" == typeof arguments[1] ? arguments[1] : "number" == typeof arguments[2] ? arguments[2] : NaN, i.toString(a)) {
                            c = b.jsonObjectToStringDictionary(c);
                            var e = b.fixEventTime(c);
                            c.ns_st_po || isNaN(d) || (c.ns_st_po = b.parseInteger(d, 0) + ""),
                                a == i.PLAY || a == i.PAUSE || a == i.BUFFER || a == i.END || a == i.SEEK_START || a == i.AD_SKIP || a == i.BUFFER_STOP ? f.newEvent(a, e, c) : f.newPseudoEvent(a, e, c)
                        }
                    }

                    function e() {
                        h && f.getStaSM().getStateMachine().getCurrentState() != j.IDLE && g.notifyEnd()
                    }
                    var f, g = this,
                        h = !0;
                    b.extend(this, {
                        isProperlyInitialized: function() {
                            return f.isProperlyInitialized()
                        },
                        reset: function(a) {
                            d(i.END);
                            var b = f;
                            b.getStaSM().getKeepAlive().stop(), b.getStaSM().getHeartbeat().pause(), f = new F(b.getConfiguration()), n.resetPlaybackSession(f.getStaSM(), b.getStaSM().getPlaybackSession(), a)
                        },
                        setPauseOnBufferingInterval: function(a) {
                            f.setPauseOnBufferingInterval(a)
                        },
                        getPauseOnBufferingInterval: function() {
                            return f.getPauseOnBufferingInterval()
                        },
                        setKeepAliveInterval: function(a) {
                            f.getStaSM().getKeepAlive().setInterval(a)
                        },
                        getKeepAliveInterval: function() {
                            return f.getStaSM().getKeepAlive().getInterval()
                        },
                        setHeartbeatIntervals: function(a) {
                            f.getStaSM().getHeartbeat().setIntervals(a)
                        },
                        notifyPlay: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyPlay", a, b), d(i.PLAY, a, b)
                        },
                        notifyPause: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyPause", a, b), d(i.PAUSE, a, b)
                        },
                        notifyEnd: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyEnd", a, b), d(i.END, a, b)
                        },
                        notifyBufferStart: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyBufferStart", a, b), d(i.BUFFER, a, b)
                        },
                        notifyBufferStop: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyBufferStop", a, b), d(i.BUFFER_STOP, a, b)
                        },
                        notifyLoad: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyLoad", a, b), d(i.LOAD, a, b)
                        },
                        notifyEngage: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyEngage", a, b), d(i.ENGAGE, a, b)
                        },
                        notifySeekStart: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifySeekStart", a, b), d(i.SEEK_START, a, b)
                        },
                        notifySkipAd: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifySkipAd", a, b), d(i.AD_SKIP, a, b)
                        },
                        notifyCallToAction: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyCallToAction", a, b), d(i.CTA, a, b)
                        },
                        notifyError: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyError", a, b), d(i.ERROR, a, b)
                        },
                        notifyTransferPlayback: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyTransferPlayback", a, b), d(i.TRANSFER, a, b)
                        },
                        notifyDrmFail: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyDrmFail", a, b), d(i.DRM_FAILED, a, b)
                        },
                        notifyDrmApprove: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyDrmApprove", a, b), d(i.DRM_APPROVED, a, b)
                        },
                        notifyDrmDeny: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyDrmDeny", a, b), d(i.DRM_DENIED, a, b)
                        },
                        notifyChangeBitrate: function(a, b, c) {
                            if (f.getStaSM().getLogging().apiCall("notifyChangeBitrate", a, b, c), null != a) {
                                var e = c || {};
                                e.ns_st_br = a + "", d(i.BIT_RATE, e, b)
                            }
                        },
                        notifyChangePlaybackRate: function(a, b, c) {
                            if (f.getStaSM().getLogging().apiCall("notifyChangePlaybackRate", a, b, c), null != a) {
                                var e = c || {};
                                e.ns_st_rt = a + "", d(i.PLAYBACK_RATE, e, b)
                            }
                        },
                        notifyChangeVolume: function(a, b, c) {
                            if (f.getStaSM().getLogging().apiCall("notifyChangeVolume", a, b, c), null != a) {
                                var e = c || {};
                                e.ns_st_vo = a + "", d(i.VOLUME, e, b)
                            }
                        },
                        notifyChangeWindowState: function(a, b, c) {
                            if (f.getStaSM().getLogging().apiCall("notifyChangeWindowState", a, b, c), null != a) {
                                var e = c || {};
                                e.ns_st_ws = a + "", d(i.WINDOW_STATE, e, b)
                            }
                        },
                        notifyChangeAudioTrack: function(a, b, c) {
                            if (f.getStaSM().getLogging().apiCall("notifyChangeAudioTrack", a, b, c), null != a) {
                                var e = c || {};
                                e.ns_st_at = a + "", d(i.AUDIO, e, b)
                            }
                        },
                        notifyChangeVideoTrack: function(a, b, c) {
                            if (f.getStaSM().getLogging().apiCall("notifyChangeVideoTrack", a, b, c), null != a) {
                                var e = c || {};
                                e.ns_st_vt = a + "", d(i.VIDEO, e, b)
                            }
                        },
                        notifyChangeSubtitleTrack: function(a, b, c) {
                            if (f.getStaSM().getLogging().apiCall("notifyChangeSubtitleTrack", a, b, c), null != a) {
                                var e = c || {};
                                e.ns_st_tt = a + "", d(i.SUBS, e, b)
                            }
                        },
                        notifyChangeCdn: function(a, b, c) {
                            if (f.getStaSM().getLogging().apiCall("notifyChangeCdn", a, b, c), null != a) {
                                var e = c || {};
                                e.ns_st_cdn = a + "", d(i.CDN, e, b)
                            }
                        },
                        notifyCustomEvent: function(a, b) {
                            f.getStaSM().getLogging().apiCall("notifyCustomEvent", a, b), d(i.CUSTOM, a, b)
                        },
                        getLabels: function() {
                            return f.getLabels()
                        },
                        getState: function() {
                            return f.getStaSM().getStateMachine().getCurrentState()
                        },
                        setLabels: function(a) {
                            f.setLabels(a)
                        },
                        getLabel: function(a) {
                            return f.getLabel(a)
                        },
                        setLabel: function(a, b) {
                            f.setLabel(a, b)
                        },
                        getLoadTimeOffset: function() {
                            return f.getLoadTimeOffset()
                        },
                        setLoadTimeOffset: function(a) {
                            f.setLoadTimeOffset(a)
                        },
                        setLiveEndpointURL: function(a) {
                            return f.setLiveEndpointURL(a)
                        },
                        getLiveEndpointURL: function() {
                            return f.getLiveEndpointURL()
                        },
                        isPauseOnBufferingEnabled: function() {
                            return f.isPauseOnBufferingEnabled()
                        },
                        setPauseOnBufferingEnabled: function(a) {
                            f.setPauseOnBufferingEnabled(a)
                        },
                        isThrottlingEnabled: function() {
                            return f.isThrottlingEnabled()
                        },
                        setThrottlingEnabled: function(a) {
                            f.setThrottlingEnabled(a)
                        },
                        setThrottlingDelay: function(a) {
                            f.setThrottlingDelay(a)
                        },
                        getThrottlingDelay: function() {
                            return f.getThrottlingDelay()
                        },
                        setPlaybackIntervalMergeTolerance: function(a) {
                            f.getStaSM().getPlaybackSession().getAsset().setPlaybackIntervalMergeTolerance(a)
                        },
                        getPlaybackIntervalMergeTolerance: function() {
                            return f.getStaSM().getPlaybackSession().getAsset().getPlaybackIntervalMergeTolerance()
                        },
                        createPlaybackSession: function(a) {
                            f.getStaSM().getLogging().apiCall("createPlaybackSession", a), a = b.jsonObjectToStringDictionary(a);
                            var c = f.getStaSM().getStateMachine().getCurrentState();
                            c != j.IDLE && (f.getStaSM().getLogging().infoLog("Ending the current Clip. It was in state:", b.stateToString(c)), g.notifyEnd()), f.getStaSM().getPlaybackSession().isPlaybackSessionStarted() && f.resetPlaybackSession(), f.getStaSM().getPlaybackSession().setLabels(a)
                        },
                        getVersion: function() {
                            return l.STREAMINGANALYTICS_VERSION
                        },
                        addListener: function(a) {
                            f.addListener(a)
                        },
                        removeListener: function(a) {
                            f.removeListener(a)
                        },
                        addMeasurementListener: function(a) {
                            f.getStaSM().getEventManager().addMeasurementListener(a)
                        },
                        removeMeasurementListener: function(a) {
                            f.getStaSM().getEventManager().removeMeasurementListener(a)
                        },
                        getPlaybackSession: function() {
                            return f.getStaSM().getPlaybackSession()
                        },
                        setExitEndEventEnabled: function(a) {
                            h = a
                        },
                        isExitEndEventEnabled: function() {
                            return h
                        },
                        getPlatformAPI: function() {
                            return f.getPlatformAPI()
                        },
                        _getLogHistory: function() {
                            return f.getStaSM().getLogging().getLogHistory()
                        }
                    }), b.isBrowser() && (window.addEventListener ? (window.addEventListener("beforeunload", e), window.addEventListener("unload", e)) : window.attachEvent && (window.attachEvent("onbeforeunload", e), window.attachEvent("onunload", e))), c()
                }
            }();
        return H.PlayerEvents = i, H.InternalStates = j, H.ImplementationType = k, H.Constants = l, H
    }(), a.ReducedRequirementsStreamingAnalytics = a.ReducedRequirementsStreamingAnalytics || function() {
        var d = {
                LongFormOnDemand: "12",
                ShortFormOnDemand: "11",
                Live: "13",
                UserGeneratedLongFormOnDemand: "22",
                UserGeneratedShortFormOnDemand: "21",
                UserGeneratedLive: "23",
                Bumper: "99",
                Other: "00"
            },
            e = {
                LinearOnDemandPreRoll: "11",
                LinearOnDemandMidRoll: "12",
                LinearOnDemandPostRoll: "13",
                LinearLive: "21",
                BrandedOnDemandPreRoll: "31",
                BrandedOnDemandMidRoll: "32",
                BrandedOnDemandPostRoll: "33",
                BrandedOnDemandContent: "34",
                BrandedOnDemandLive: "35",
                Other: "00"
            },
            f = a.StreamingAnalytics,
            g = a.StreamingAnalytics.InternalStates || null,
            h = a.StreamingAnalytics.ImplementationType || null,
            i = null != a.StreamingAnalytics.InternalStates && null != a.StreamingAnalytics.ImplementationType,
            j = a.StreamingAnalytics.Constants,
            k = function(a) {
                function k() {
                    i && (b.exists(a) && (a.customerC2 || a.publisherId) || b.getNamespace().comScore ? t = new f(a) : w.error("Cannot instantiate StreamingAnalytics", "The property publisherId was not provided (or incorrectly provided) in the StreamingAnalytics configuration."), t && t.setLabel("ns_st_it", h.toString(h.REDUCED)))
                }

                function l(a) {
                    for (var b in j.STANDARD_METADATA_LABELS)
                        if (j.STANDARD_METADATA_LABELS.hasOwnProperty(b) && !m(j.STANDARD_METADATA_LABELS[b], q, a)) return !1;
                    return !0
                }

                function m(a, c, d) {
                    return !!(b.exists(a) && b.exists(c) && b.exists(d) && (c.hasOwnProperty(a) && d.hasOwnProperty(a) && c[a] === d[a] || !c.hasOwnProperty(a) && !d.hasOwnProperty(a)))
                }

                function n(a) {
                    t.getPlaybackSession().setAsset(a), q = a, t.notifyPlay()
                }

                function o(a) {
                    var b = a || {};
                    b.ns_st_ad = "1", b.ns_st_an = ++r + "", t.getPlaybackSession().setAsset(b), t.notifyPlay(), s = !1
                }

                function p(a, b) {
                    v == u.None && (v = b), s && v == b && l(a) ? (t.getPlaybackSession().getAsset().setLabels(a), t.getState() != g.PLAYING && t.notifyPlay()) : n(a), s = !0, v = b
                }
                var q = null,
                    r = 0,
                    s = !1,
                    t = null,
                    u = {
                        None: 0,
                        AudioContent: 1,
                        VideoContent: 2
                    },
                    v = u.None,
                    w = new c("TTSTA", (a || {}).debug);
                b.extend(this, {
                    playVideoAdvertisement: function(a, c) {
                        if (t) {
                            w.apiCall("playVideoAdvertisement", a, c);
                            var d = {
                                ns_st_ct: "va"
                            };
                            c ? d.ns_st_ct = "va" + c : w.warn("Calling 'playVideoAdvertisement' without specifying the media type as a second parameter."), c != e.LinearLive && c != e.BrandedOnDemandLive || (d.ns_st_li = "1"), a && b.extend(d, a), o(d)
                        }
                    },
                    playAudioAdvertisement: function(a, c) {
                        if (t) {
                            w.apiCall("playAudioAdvertisement", a, c);
                            var d = {
                                ns_st_ct: "aa"
                            };
                            c ? d.ns_st_ct = "aa" + c : w.warn("Calling 'playAudioAdvertisement' without specifying the media type as a second parameter."), c != e.LinearLive && c != e.BrandedOnDemandLive || (d.ns_st_li = "1"), a && b.extend(d, a), o(d)
                        }
                    },
                    playVideoContentPart: function(a, c) {
                        if (t) {
                            w.apiCall("playVideoContentPart", a, c);
                            var e = {
                                ns_st_ct: "vc"
                            };
                            c ? e.ns_st_ct = "vc" + c : w.warn("Calling 'playVideoContentPart' without specifying the media type as a second parameter."), c != d.Live && c != d.UserGeneratedLive || (e.ns_st_li = "1"), a && b.extend(e, a), p(e, u.VideoContent)
                        }
                    },
                    playAudioContentPart: function(a, c) {
                        if (t) {
                            w.apiCall("playAudioContentPart", a, c);
                            var e = {
                                ns_st_ct: "ac"
                            };
                            c ? e.ns_st_ct = "ac" + c : w.warn("Calling 'playAudioContentPart' without specifying the media type as a second parameter."), c != d.Live && c != d.UserGeneratedLive || (e.ns_st_li = "1"), a && b.extend(e, a), p(e, u.AudioContent)
                        }
                    },
                    stop: function() {
                        t && (w.apiCall("stop"), t.notifyPause())
                    }
                }), k()
            };
        return k.ContentType = d, k.AdType = e, k
    }(), a
});