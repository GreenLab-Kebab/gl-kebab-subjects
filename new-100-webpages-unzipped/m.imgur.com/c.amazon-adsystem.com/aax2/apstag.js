/*! amazon-dtb-javascript-api - apstag - v7.37.00 - 2019-10-03 18:06:34 */ ! function(t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = t, r.c = e, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) r.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 16)
}([function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };

    function o(t) {
        var e = t.length,
            r = void 0,
            n = void 0;
        for (t = [].concat(function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
                    return r
                }
                return Array.from(t)
            }(t)); 0 !== e;) n = Math.floor(Math.random() * e), r = t[--e], t[e] = t[n], t[n] = r;
        return t
    }

    function a(t) {
        return "object" === (void 0 === t ? "undefined" : n(t)) && null !== t
    }

    function i(t, e) {
        return a(t) && Object.prototype.hasOwnProperty.call(t, e) && void 0 !== t[e] && "" !== t[e]
    }

    function s() {
        return document.cookie.split("; ").map(function(t) {
            return t.split("=")
        })
    }
    e.shouldSample = function(t) {
        try {
            var e = parseInt(t, 10);
            if (!isNaN(e)) {
                if (e <= 0) return !1;
                if (100 <= e) return !0;
                if (100 * Math.random() <= e) return !0
            }
            return !1
        } catch (t) {
            return !1
        }
    }, e.getRandomArrayElement = function(t) {
        return o(t)[0]
    }, e.shuffleArray = o, e.chunkArray = function(t, e) {
        var r = parseInt(e, 10),
            n = [],
            o = 0;
        if (!Array.isArray(t)) return n;
        if ("number" != typeof r || r < 1) return [t];
        for (var a = t.length; o < a;) n.push(t.slice(o, o += r));
        return n
    }, e.getRand = function() {
        return "" + Math.round(1e12 * Math.random()) + Date.now()
    }, e.isObject = a, e.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }, e.getAmpAmznBidValue = function(t) {
        return "string" == typeof t ? t.split("_").pop() : ""
    }, e.safeObjectHasProp = i, e.hasLocalStorage = function() {
        var t = "amzn_lsTest";
        try {
            return window.localStorage.setItem(t, t), window.localStorage.removeItem(t), !0
        } catch (t) {
            return !1
        }
    }, e.checkAllPossibleBidCacheIds = function(t, e, r) {
        return t.amzniid === e || t[r + "amzniid"] === e || t.amzniid_sp === e
    }, e.inArray = function(t, e) {
        return -1 !== t.indexOf(e)
    }, e.getCookieParts = s, e.getCookieValue = function(t) {
        var e = "";
        try {
            e = s().filter(function(e) {
                return e[0] === t
            })[0][1]
        } catch (e) {}
        return e
    }, e.getUTCStringForDate = function(t) {
        var e = new Date;
        return e.setDate(e.getDate() + t), e.toUTCString()
    }, e.isAAXPunt = function(t) {
        return !i(t, "slots")
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.DISPLAY_TARGETING_KEYS = ["amznbid", "amzniid", "amznsz", "amznp"], e.VIDEO_TARGETING_KEYS = ["amznbid", "amzniid", "amznp", "r_amznbid", "r_amzniid", "r_amznp"], e.BID_STATES = {
        new: "NEW",
        exposed: "EXPOSED",
        set: "SET",
        rendered: "RENDERED"
    };
    var n, o, a, i = e.RB_AID_COOKIE_KEY = "__aps_f_aid";
    e.RB_HOST_COOKIE_KEY = "__aps_host", e.RB_MAGIC_NUMBER_FOR_AID_PRESENT = 1, e.RB_PAGELOAD_ID_GLOBAL = "apsPageloadID", e.IS_GET_BIDS_URL_PARAM = "&isgb=1", e.DEBUG_LOCAL_STORAGE_KEY = "apstagDebug", e.VALID_DEBUG_MODES = ["redux", "fake_bids", "verbose", "console", "console_v2", "errors"], e.DEBUG_CONSOLE_HEIGHT_KEY = "apstagDebugHeight", e.DEBUG_GLOBAL = "apstagDEBUG", e.CFG_LOCAL_STORAGE_KEY = "apstagCfg", e.NO_LOCAL_STORAGE_SUPPORT_MAGIC_NUMBER_FOR_AAX = 0, e.MINIMUM_BID_TIMEOUT = 0, e.MOCKBID = {
        amznbid: "testBid",
        amzniid: "testImpression",
        amznp: "testP",
        crid: "testCrid"
    }, e.MEDIA_TYPES_MAGIC_STRING_FOR_AAX = {
        video: "v"
    }, e.SLOT_STATE_KEYS = ["amznbid", "amznp"], e.FIRST_PARTY_COOKIE_KEYS = (a = {
        urlParam: "aidp"
    }, (o = i) in (n = {
        __apsid: {
            urlParam: "ck"
        },
        __aps_id_p: {
            urlParam: "ckp"
        },
        aps_ext_917: {
            urlParam: "st"
        }
    }) ? Object.defineProperty(n, o, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[o] = a, n), e.SLOT_STATES = {
        noRequest: "0",
        bidInFlight: "1",
        noBid: "2"
    }, e.AAX_RESP_REMAP_COOKIE_KEY = "cr", e.SELF_SERVE_PUB_SRC = "600", e.LIBRARY_VERSION = "7.37.00", e.PROTOCOL = function() {
        try {
            var t = window.document.location.protocol;
            if ("h" === t[0]) return t + "//"
        } catch (t) {}
        return "https://"
    }(), e.HAS_XHR_SUPPORT = "function" == typeof XMLHttpRequest && void 0 !== (new XMLHttpRequest).withCredentials, e.APSTAG_LOADED_VARIABLE = "apstagLOADED"
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.store = void 0;
    var n = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    };
    e.reducer = l;
    var o = r(1),
        a = r(0),
        i = r(5);

    function s(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function c(t) {
        if (Array.isArray(t)) {
            for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
            return r
        }
        return Array.from(t)
    }
    var d = void 0,
        u = [];

    function l() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments[1];
        return {
            AAXReqs: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments[1];
                switch (e.type) {
                    case "RECORD_AAX_REQUEST":
                        return [].concat(c(t), [n({}, e.data)]);
                    case "RECORD_AAX_RESPONSE_PROP":
                        return t.map(function(t) {
                            return (t = n({}, t)).bidReqID === e.bidReqID && (t[e.key] = e.value), t
                        });
                    default:
                        return [].concat(c(t))
                }
            }(t.AAXReqs, e),
            amznCsmParams: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1];
                switch (e.type) {
                    case "SET_AMZNCSMPARAMS":
                        return n({}, e.amznCsmParams);
                    default:
                        return t
                }
            }(t.amznCsmParams, e),
            bidConfigs: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1];
                switch (e.type) {
                    case "RECORD_ORIGINAL_BID_CONFIG":
                        return n({}, t, s({}, e.bidConfig.bidReqID, n({}, e.bidConfig)));
                    default:
                        return n({}, t)
                }
            }(t.bidConfigs, e),
            bidReqs: function() {
                var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments[1];
                switch (r.type) {
                    case "ADD_CHUNKED_REQUESTS":
                        return n({}, e, s({}, r.fid, n({}, e[r.fid], {
                            networkReqs: new Array(r.numChunks)
                        })));
                    case "NEW_FETCH_BID_REQUEST":
                        return n({}, e, s({}, r.fid, {
                            pto: r.pto,
                            hasCallbackExecuted: !1
                        }));
                    case "RECORD_CALLBACK":
                        return n({}, e, s({}, r.fid, n({}, e[r.fid], {
                            hasCallbackExecuted: !0
                        })));
                    case "RECORD_NETWORK_EXCHANGE":
                        return n({}, e, s({}, r.fid, n({}, e[r.fid], {
                            networkReqs: n([].concat(c(e[r.fid].networkReqs)), s({}, r.networkID, n({}, e[r.fid].networkReqs[r.networkID], (t = {}, s(t, r.exchangeType + "Time", r.timestamp), s(t, "inFlight", "request" === r.exchangeType), t))))
                        })));
                    case "RECORD_TIMEOUT":
                        return n({}, e, s({}, r.fid, n({}, e[r.fid], {
                            networkReqs: e[r.fid].networkReqs.map(function(t) {
                                return t.inFlight ? n({}, t, {
                                    timeOut: r.timeOut
                                }) : t
                            })
                        })));
                    default:
                        return n({}, e)
                }
            }(t.bidReqs, e),
            bsPixels: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1];
                switch (e.type) {
                    case "RECORD_BID_INFO_SENT":
                        return n({}, t, s({}, e.bidInfo.iid, e.bidInfo.state));
                    default:
                        return n({}, t)
                }
            }(t.bsPixels, e),
            cfg: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                        CSM_JS: "//c.amazon-adsystem.com/aax2/csm.js.gz",
                        CSM_RTB_COMMUNICATOR_JS: "//c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js",
                        DEBUG_APP_HTML: "//c.amazon-adsystem.com/aax2/debugApp.html",
                        DEBUG_APP_HTML_V2: "//c.amazon-adsystem.com/aax2/debug_app_v2.html",
                        DEFAULT_TIMEOUT: 2e3,
                        DTB_PATH: "/e/dtb",
                        PIXEL_PATH: "/x/px/",
                        LATENCY_SAMPLING_RATE: 1,
                        COOKIE_MATCH_DELAY: 0,
                        MAX_SLOTS_PER_REQUEST: 1,
                        CF_ROUTING_RATE: 100,
                        SLOT_RENDER_SAMPLING_RATE: 1
                    },
                    e = arguments[1];
                switch (e.type) {
                    case "SET_CFG":
                        return n({}, t, e.cfg);
                    default:
                        return n({}, t)
                }
            }(t.cfg, e),
            cmpFired: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                switch (arguments[1].type) {
                    case "CMP_FIRED":
                        return !0;
                    default:
                        return t
                }
            }(t.cmpFired, e),
            config: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1];
                switch (e.type) {
                    case "SET_CONFIG":
                        return n({}, e.config, {
                            gdpr: n({
                                cmpTimeout: e.defaultCmpTimeout
                            }, e.config.gdpr),
                            isSelfServePub: e.config.pubID && 5 <= e.config.pubID.length
                        });
                    default:
                        return n({}, t)
                }
            }(t.config, e),
            displayAdServer: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                        noBidSlotIDs: [],
                        shouldSampleRender: !1
                    },
                    e = arguments[1];
                switch (e.type) {
                    case "SLOT_RENDER_ENDED_SET":
                        return n({}, t, {
                            slotRenderEndedSet: !0
                        });
                    case "NO_BID_ON_ADSERVER_SLOTS":
                        return n({}, t, {
                            noBidSlotIDs: t.noBidSlotIDs.concat(e.slotIDs)
                        });
                    case "REQUESTED_BID_FOR_ADSERVER_SLOTS":
                        return n({}, t, {
                            noBidSlotIDs: t.noBidSlotIDs.filter(function(t) {
                                return !(0, a.inArray)(e.slotIDs, t)
                            })
                        });
                    case "SHOULD_SAMPLE_SLOT_RENDER":
                        return n({}, t, {
                            shouldSampleRender: e.value
                        });
                    default:
                        return n({}, t, {
                            noBidSlotIDs: [].concat(c(t.noBidSlotIDs))
                        })
                }
            }(t.displayAdServer, e),
            eventLog: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments[1];
                switch (e.type) {
                    case "LOG_EVENT":
                        return [].concat(c(t), [n({}, e.event)]);
                    default:
                        return [].concat(c(t))
                }
            }(t.eventLog, e),
            experiments: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1];
                switch (e.type) {
                    case "SHOULD_CHUNK_REQUESTS":
                        return n({
                            chunkRequests: !0 === t.shouldSampleLatency && e.value
                        }, t);
                    case "SHOULD_CF_ROUTE":
                        return n({}, t, {
                            shouldCFRoute: e.value
                        });
                    case "SHOULD_SAMPLE_LATENCY":
                        return n({}, t, {
                            shouldSampleLatency: e.value
                        });
                    default:
                        return n({}, t)
                }
            }(t.experiments, e),
            gamSlotFetchLog: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments[1];
                switch (e.type) {
                    case "LOG_GAM_EVENT":
                        return [].concat(c(t), [n({}, e.event)]);
                    default:
                        return [].concat(c(t))
                }
            }(t.gamSlotFetchLog, e),
            gamSlotRenderPixel: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                        aaxReqOffset: 0,
                        gamSlotFetchLogOffset: 0
                    },
                    e = arguments[1];
                switch (e.type) {
                    case "UPDATE_RENDER_OFFSETS":
                        return n({}, t, e.offsets);
                    default:
                        return n({}, t)
                }
            }(t.gamSlotRenderPixel, e),
            gdpr: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                    e = arguments[1];
                switch (e.type) {
                    case "SET_GDPR_CONFIG":
                        return null === e.config ? null : n({}, e.config);
                    default:
                        return null === t ? t : n({}, t)
                }
            }(t.gdpr, e),
            gdprQue: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments[1];
                switch (e.type) {
                    case "ADD_GDPR_QUE_ITEM":
                        return [].concat(c(t), [e.func]);
                    case "CLEAR_GDPR_QUE":
                        return [];
                    default:
                        return [].concat(c(t))
                }
            }(t.gdprQue, e),
            hosts: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                        DEFAULT_AAX_BID_HOST: (0, i.getDebugValue)("host") || "aax.amazon-adsystem.com",
                        DEFAULT_AAX_PIXEL_HOST: (0, i.getDebugValue)("host") || "aax.amazon-adsystem.com"
                    },
                    e = arguments[1];
                switch (e.type) {
                    case "SET_HOST":
                        return n({}, t, s({}, e.hostName, e.hostValue));
                    default:
                        return n({}, t)
                }
            }(t.hosts, e),
            Q: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments[1];
                switch (e.type) {
                    case "SET_Q":
                        return [].concat(c(e.Q));
                    default:
                        return [].concat(c(t))
                }
            }(t.Q, e),
            slotBids: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1];
                switch (e.type) {
                    case "BID_STATE_CHANGE":
                        return n({}, t, s({}, e.slotID, t[e.slotID].map(function(t) {
                            var r = {};
                            return t._targetingSetID === e._targetingSetID && (r.bidState = e.bidState, e.bidState === o.BID_STATES.rendered ? r.renderTime = e.ts : e.bidState === o.BID_STATES.set && (r.setAtTimes = (0, a.safeObjectHasProp)(t, "setAtTimes") ? [].concat(c(t.setAtTimes), [e.ts]) : [e.ts])), n({}, t, r)
                        })));
                    case "UPDATE_BID_INFO_PROP":
                        return void 0 === t[e.slotID] || t[e.slotID].filter(function(t) {
                            return (0, a.checkAllPossibleBidCacheIds)(t, e.iid, e.dealId)
                        }).length < 1 ? n({}, t) : n({}, t, s({}, e.slotID, t[e.slotID].map(function(t) {
                            return t = n({}, t), (0, a.checkAllPossibleBidCacheIds)(t, e.iid, e.dealId) && (t[e.key] = e.value), t
                        })));
                    case "UPDATE_SLOT_BIDS":
                        return n({}, t, e.bids.reduce(function(e, r) {
                            return (0, a.safeObjectHasProp)(e, r.slotID) ? e[r.slotID] = [].concat(c(e[r.slotID]), [n({}, r)]) : (0, a.safeObjectHasProp)(t, r.slotID) ? e[r.slotID] = [].concat(c(t[r.slotID]), [n({}, r)]) : e[r.slotID] = [n({}, r)], e
                        }, {}));
                    default:
                        return n({}, t)
                }
            }(t.slotBids, e),
            sync917: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    e = arguments[1];
                switch (e.type) {
                    case "SET_SYNC_917":
                        return e.value;
                    default:
                        return t
                }
            }(t.sync917, e),
            targetingKeys: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1];
                switch (e.type) {
                    case "UPDATE_SLOT_BIDS":
                        return n({}, t, e.bids.reduce(function(e, r) {
                            return (0, a.safeObjectHasProp)(t, r.slotID) ? e[r.slotID] = [].concat(c(t[r.slotID]), c((r.targeting ? r.targeting : o.DISPLAY_TARGETING_KEYS).filter(function(e) {
                                return -1 === t[r.slotID].indexOf(e)
                            }))) : e[r.slotID] = r.targeting ? r.targeting : o.DISPLAY_TARGETING_KEYS, e
                        }, {}));
                    default:
                        return n({}, t)
                }
            }(t.targetingKeys, e),
            tests: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1];
                switch (e.type) {
                    case "UPDATE_TEST":
                        return n({}, t, s({}, e.id, {
                            name: e.name,
                            status: e.status,
                            case: e.case
                        }));
                    default:
                        return n({}, t)
                }
            }(t.tests, e)
        }
    }
    var f = {
        getState: function() {
            return d
        },
        dispatch: function(t) {
            d = l(d, t), u.forEach(function(t) {
                return t()
            })
        },
        subscribe: function(t) {
            u.push(t)
        }
    };
    (0, i.isDebugEnabled)("redux") && (0, a.hasLocalStorage)() && (0, a.safeObjectHasProp)(window, "__REDUX_DEVTOOLS_EXTENSION__") && (e.store = f = window.__REDUX_DEVTOOLS_EXTENSION__(l)), f.dispatch({
        type: "NOOP"
    }), e.store = f
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.reportError = g, e.wrapFunction = function(t, e) {
        return function() {
            try {
                return t.apply(null, arguments)
            } catch (t) {
                return g(t, e), null
            }
        }
    }, e.consoleWarn = function(t) {
        (1 < arguments.length && void 0 !== arguments[1] && arguments[1] || (0, s.isDebugEnabled)("errors")) && window[d][l](t)
    };
    var n = r(0),
        o = r(1),
        a = r(4),
        i = r(2),
        s = r(5),
        c = (0, n.shouldSample)(10),
        d = "console",
        u = "error",
        l = "warn",
        f = void 0,
        p = void 0;

    function g(t, e, r) {
        try {
            if ((r || (0, s.isDebugEnabled)("errors")) && window[d][u](t), !c) return !1;
            var n = {
                lv: o.LIBRARY_VERSION,
                ts: Date.now(),
                url: encodeURIComponent(window.document.documentURI),
                r: encodeURIComponent(window.document.referrer),
                _type: "apsLibraryError",
                e: {
                    et: t.name,
                    el: e,
                    msg: t.message
                }
            };
            if (void 0 === f) {
                var l = i.store.getState();
                void 0 !== l && void 0 !== l.config && (f = l.config.isSelfServePub, p = l.config.pubID)
            }
            return void 0 !== f && (f ? (n.src = o.SELF_SERVE_PUB_SRC, n.pubid = p) : n.src = p), (0, a.noBidCacheIdPixel)(n), !0
        } catch (t) {}
        return !1
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.pixels = e.pixelQueue = void 0, e.sendPixel = u, e.noBidCacheIdPixel = function(t) {
        return u(d() + "p/PH/" + c(t))
    }, e.bidCacheIdPixel = function(t, e) {
        return u("" + d() + t + "/" + c(e))
    }, e.sendPixels = function() {
        i || (i = !0, a.forEach(u))
    }, e.resetSendPixels = function() {
        i = !1, e.pixels = s = [], e.pixelQueue = a = []
    };
    var n = r(1),
        o = r(2),
        a = e.pixelQueue = [],
        i = !1,
        s = e.pixels = [];

    function c(t) {
        t._tl = "aps-tag";
        var e = JSON.stringify(t);
        return e = e.replace(/\\.{1}/g, ""), encodeURIComponent(e)
    }

    function d() {
        var t = o.store.getState(),
            e = t.cfg.PIXEL_PATH,
            r = t.hosts.DEFAULT_AAX_PIXEL_HOST;
        return "" + n.PROTOCOL + r + e
    }

    function u(t) {
        if (i) {
            var e = new Image;
            return e.src = t, s.push(e), e
        }
        return a.push(t), t
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.debugPublicApi = function(t, e, r) {
        switch (-1 !== d.indexOf(t) && ((0, c.reportError)("Debug call made: " + t, "__apstag-debug-call-" + t + "__"), d = d.filter(function(e) {
            return e !== t
        })), t) {
            case "getLog":
                return n.store.getState().eventLog;
            case "getState":
                return n.store.getState();
            case "enable":
                return w("fake_bids", !0), "DEBUG MODE ENABLED";
            case "disable":
                return w("fake_bids", !1), "DEBUG MODE DISABLED";
            case "enableConsole":
                return g(!1, "command"), "Debug console enabled";
            case "enableConsoleV2":
                return g(!0, "command"), "Debug console v2 enabled";
            case "disableConsole":
                return _(), "Debug console disabled";
            case "setDebug":
                return w(e, r) ? "Set debug mode '" + e + "' to '" + r + "'" : "Failed to set debug mode '" + e + "' to '" + r + "'";
            default:
                return "unknown debug argument"
        }
    }, e.enableDebugConsole = g, e.disableDebugConsole = _, e.isDebugEnabled = O, e.setDebugMode = w, e.getDebugValue = function(t) {
        return "undefined" != typeof window && (0, o.safeObjectHasProp)(window, a.DEBUG_GLOBAL) && (0, o.safeObjectHasProp)(window[a.DEBUG_GLOBAL], t) ? window[a.DEBUG_GLOBAL][t] : ""
    }, e.pixelDebugModes = I;
    var n = r(2),
        o = r(0),
        a = r(1),
        i = r(6),
        s = r(4),
        c = r(3),
        d = ["getLog", "getState"],
        u = null,
        l = null,
        f = null,
        p = null;

    function g() {
        var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if (w(t ? "console_v2" : "console", !0), null === u) {
            var r = {
                url: t ? n.store.getState().cfg.DEBUG_APP_HTML_V2 : n.store.getState().cfg.DEBUG_APP_HTML,
                onload: m,
                onerror: console.error
            };
            (0, i.xhrGet)(r), setTimeout(function() {
                var r = {
                        _type: "debugLoad",
                        mode: t ? 2 : 1
                    },
                    o = n.store.getState().config.pubID;
                void 0 !== o && (r.src = o), null !== e && (r.method = e), (0, s.noBidCacheIdPixel)(r)
            }, 5e3)
        }
    }

    function _() {
        w("console", !1), w("console_v2", !1), null !== u && document.body.removeChild(u), f = l = u = null, (0, o.hasLocalStorage)() && window.localStorage.removeItem(a.DEBUG_CONSOLE_HEIGHT_KEY)
    }

    function m(t) {
        var e = t.responseText;
        u = document.createElement("div"), l = document.createElement("div"), f = document.createElement("iframe");
        var r = 200;
        O("console_v2") && (r = 330), (0, o.hasLocalStorage)() && null !== window.localStorage.getItem(a.DEBUG_CONSOLE_HEIGHT_KEY) && (r = window.localStorage.getItem(a.DEBUG_CONSOLE_HEIGHT_KEY)), r > window.innerHeight && (r = 200), u.style = "background: #eaeded;z-index: 2147483647;bottom: 0;position: fixed !important;display: block !important;left: 0;right: 0;height: " + r + "px;", l.style = "cursor: row-resize;height: 2px;position: absolute;top: 0;left: 0;right: 0;background-color: RGBA(0,0,0,0);", u.appendChild(l), f.frameBorder = 0, f.marginHeight = 0, f.marginWidth = 0, f.topMargin = 0, f.leftMargin = 0, f.scrolling = "no", f.allowTransparency = !0, f.id = "apstag-debug-iframe", f.src = "about:blank", f.style = "display: block; width: 100%; height: " + r + "px;", u.appendChild(f), document.body.appendChild(u), f.contentDocument.open(), f.contentDocument.write(e), f.contentDocument.close(), l.addEventListener("mousedown", E)
    }

    function S(t) {
        var e = window.innerHeight - t.clientY;
        return e < 200 && (e = 200), u.style.height = e + "px", f.style.height = e + "px", e
    }

    function b(t) {
        return t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), t.cancelBubble = !0, t.returnValue = !1
    }

    function E() {
        (p = document.createElement("div")).style = "position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: 9999999999;", u.appendChild(p), window.addEventListener("mouseup", v), window.addEventListener("mousemove", h)
    }

    function h(t) {
        return S(t), b(t)
    }

    function v(t) {
        null !== p && (u.removeChild(p), p = null), window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", v);
        var e = S(t);
        return (0, o.hasLocalStorage)() && window.localStorage.setItem(a.DEBUG_CONSOLE_HEIGHT_KEY, e), b(t)
    }

    function y() {
        if (!(0, o.hasLocalStorage)()) return [];
        var t = window.localStorage.getItem(a.DEBUG_LOCAL_STORAGE_KEY);
        null === t || "false" === t ? t = "[]" : "true" === t && (t = '["fake_bids"]');
        var e = void 0;
        try {
            e = JSON.parse(t)
        } catch (t) {}
        return (0, o.isArray)(e) || (e = []), e.filter(function(t) {
            return -1 !== a.VALID_DEBUG_MODES.indexOf(t)
        })
    }

    function O(t) {
        return (0, o.inArray)(y(), t)
    }

    function w(t, e) {
        if (!(0, o.hasLocalStorage)()) return !1;
        if (-1 === a.VALID_DEBUG_MODES.indexOf(t)) return !1;
        var r = y();
        return e && -1 === r.indexOf(t) ? r.push(t) : e || (r = r.filter(function(e) {
            return e !== t
        })), 0 === r.length ? window.localStorage.removeItem(a.DEBUG_LOCAL_STORAGE_KEY) : window.localStorage.setItem(a.DEBUG_LOCAL_STORAGE_KEY, JSON.stringify(r)), I(), !0
    }
    var D = [];

    function I() {
        try {
            y().filter(function(t) {
                return -1 === D.indexOf(t)
            }).forEach(function(t) {
                (0, c.reportError)(new Error("Debug method enabled: " + t), "__error-debug-mode-" + t + "__", !0), D.push(t)
            })
        } catch (t) {
            (0, c.reportError)(t, "__error-debug-pixeled__", !0)
        }
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.xhrGet = function(t) {
        var e = t.url,
            r = t.onload,
            o = t.onerror,
            a = void 0 === o ? null : o,
            i = t.ontimeout,
            s = void 0 === i ? null : i,
            c = t.withCredentials,
            d = void 0 === c ? null : c;
        try {
            var u = new window.XMLHttpRequest;
            u.onload = r.bind(null, u), null !== a && (u.onerror = a), null !== s && (u.ontimeout = s), null !== d && (u.withCredentials = d), u.open("GET", e), u.send(null)
        } catch (t) {
            (0, n.reportError)(t, "__xhrGet__")
        }
    }, e.loadScriptTag = function(t, e) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        try {
            if (null === r && (r = document), void 0 === t) return "function" == typeof e && e(!0), !1;
            var a = r.getElementsByTagName("script")[0] || r.body.firstChild,
                i = r.createElement("script");
            return i.type = "text/javascript", i.async = !0, i.src = t, e && o(i, e), a.parentNode.insertBefore(i, a), !0
        } catch (t) {
            return (0, n.reportError)(t, "__loadScriptTag__", !0), !1
        }
    }, e.addOnLoadFunction = o;
    var n = r(3);

    function o(t, e) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
        try {
            return "function" == typeof e && (t.readyState ? t.onreadystatechange = function() {
                -1 !== ["loaded", "complete"].indexOf(t.readyState) && (t.onreadystatechange = null, e.apply(null, r))
            } : t.onload = function() {
                e.apply(null, r)
            }, !0)
        } catch (t) {
            return (0, n.reportError)(t, "__addOnLoadFunction__"), !1
        }
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.GDPR = e.cmpLocalStorageChanged = e.cmpResponseKey = void 0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        },
        a = r(0),
        i = r(3);
    Number.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    };
    var s = e.cmpResponseKey = "cmpRTimesA",
        c = e.cmpLocalStorageChanged = "crfgL0cSt0rC";
    e.GDPR = function(t, e) {
        t = o({}, t);
        var r, d, u = void 0,
            l = 50,
            f = [1, 1, 3, 5],
            p = 0,
            g = !1,
            _ = "crfgL0cSt0r",
            m = !1,
            S = "cmp-timeout";
        try {
            e = (0, i.wrapFunction)(e, "GdprCallback");
            var b = function(t) {
                try {
                    t = o({}, t), Object.keys(t.log).map(function(e) {
                        "string" == typeof t.log[e] && -1 !== t.log[e].indexOf("/") && (t.log[e] = encodeURIComponent(t.log[e]))
                    }), t.log = JSON.stringify(t.log)
                } catch (t) {
                    (0, i.reportError)(t, "__gdpr_stringify_log__", !0)
                }
                e(t)
            };
            "object" === (void 0 === t ? "undefined" : n(t)) && null !== t || (t = {});
            var E = {
                cmpGlobal: t.cmpGlobal,
                cmpTimeout: t.cmpTimeout,
                enabled: t.enabled
            };
            !1 === t.enabled ? E.status = "explicit-no-gdpr" : !0 === t.enabled && (E.status = void 0 !== t.consent ? "explicit-consent-passed" : "explicit-no-consent-passed"), (0, a.hasLocalStorage)() && (m = function() {
                try {
                    var t = window.localStorage.getItem(_);
                    return null !== t && JSON.parse(t)
                } catch (t) {
                    return (0, i.reportError)(t, "__gdpr_parse_ls__"), !1
                }
            }()), !1 !== m && (void 0 === window.document.cookie || -1 === window.document.cookie.indexOf(_ + "=true") ? (m = !1, E.lsStatus = "invalid") : (E.lsStatus = "present", l = 50, S = "cmp-timeout-cfb")), "string" != typeof t.cmpGlobal && (t.cmpGlobal = "__cmp"), Number.isInteger(t.cmpTimeout) || (t.cmpTimeout = l);
            var h = (d = {
                log: E
            }, void 0 === (r = t).enabled || (!1 === r.enabled ? d.enabled = 0 : (Number.isInteger(r.enabled) ? d.enabled = r.enabled : d.enabled = 1, "string" == typeof r.consent && (d.consent = r.consent))), d);
            if (void 0 !== h.enabled) return void b(h);
            !1 !== m && (h = o({}, m, h)), !1 === m || m.enabled === h.enabled && m.consent === h.consent || (E.lsStatus = "pub-override"),
                function t(e, r) {
                    if (!(0, a.safeObjectHasProp)(window, e.cmpGlobal) || "function" != typeof window[e.cmpGlobal]) return r({
                        error: "no-cmp"
                    }), void(p < f.length && (setTimeout(t, 1e3 * f[p], e, r), p++));
                    setTimeout(r, e.cmpTimeout, {
                        timeout: !0
                    }, !0), u = Date.now();
                    try {
                        window[e.cmpGlobal]("getConsentData", null, r)
                    } catch (t) {
                        r({
                            error: "cmp-internal-error"
                        }), (0, i.reportError)(t, "__gdpr_cmp__", !0)
                    }
                }(t, function(t, e, r) {
                    if (!g || "object" !== (void 0 === e ? "undefined" : n(e)) || null === e || !e.timeout) {
                        g = !0;
                        try {
                            return "object" === (void 0 === e ? "undefined" : n(e)) && null !== e && void 0 !== e.error ? (E.status = e.error, void b(t)) : r && "object" === (void 0 === e ? "undefined" : n(e)) && null !== e ? e.timeout ? (E.status = S, void b(t)) : (function(t) {
                                if ((0, a.hasLocalStorage)()) try {
                                    var e = window.localStorage.getItem(s);
                                    (e = null !== e ? JSON.parse(e) : []).push(t), window.localStorage.setItem(s, JSON.stringify(e))
                                } catch (t) {
                                    (0, i.reportError)(t, "__gdpr_save_time__")
                                }
                            }(Date.now() - u), E.status = "success", e.gdprApplies ? (t.enabled = 1, t.consent = e.consentData) : (t.enabled = 0, delete t.consent), function(t) {
                                try {
                                    if (!(0, a.hasLocalStorage)()) return;
                                    window.localStorage.setItem(c, "0"), !1 !== m && m.enabled === t.enabled && m.consent === t.consent || (window.localStorage.setItem(c, "2"), window.localStorage.setItem(_, JSON.stringify({
                                        enabled: t.enabled,
                                        consent: t.consent
                                    })), !1 !== m && (E.lsStatus = "cmp-override", window.localStorage.setItem(c, "1"))), window.document.cookie = _ + "=true;max-age=604800"
                                } catch (t) {
                                    return void(0, i.reportError)(t, "__gdpr_save__")
                                }
                            }(t), void b(t)) : (E.status = "cmp-error", void b(t))
                        } catch (e) {
                            return (0, i.reportError)(e, "__gdpr_cmp_callback__", !0), E.status = "func-error", void b(t)
                        }
                    }
                }.bind(null, h))
        } catch (t) {
            g || e({
                log: '{"status":"global-func-error"}'
            }), g = !0, (0, i.reportError)(t, "__gdpr_global_func__", !0)
        }
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getMetricFromPerformanceObject = o, e.getResourcePerformanceObject = function(t, e) {
        try {
            var r = a(t, e)[0];
            return void 0 === r ? null : r
        } catch (t) {
            return null
        }
    }, e.getPerformanceResourceObjects = a, e.getWindowPerformanceMetric = function(t, e) {
        try {
            var r = t.performance.timing[e];
            return void 0 === r ? n : r
        } catch (t) {
            return n
        }
    }, e.isResourceCached = function(t) {
        try {
            if (0 === ["redirectStart", "redirectEnd", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "secureConnectionStart"].reduce(function(e, r) {
                    return e + o(t, r)
                }, 0)) return null;
            var e = o(t, "fetchStart");
            return ["domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd"].reduce(function(r, n) {
                return r && o(t, n) === e
            }, !0)
        } catch (t) {
            return null
        }
    }, e.getTimeOrigin = function() {
        try {
            var t = window.performance.timeOrigin;
            return void 0 === t && (t = window.performance.timing.navigationStart), t
        } catch (t) {
            return n
        }
    };
    var n = 0;

    function o(t, e) {
        try {
            return "number" != typeof t[e] ? n : Math.round(t[e])
        } catch (t) {
            return n
        }
    }

    function a(t, e) {
        try {
            return t.performance.getEntriesByType("resource").filter(function(t) {
                return -1 !== t.name.indexOf(e)
            })
        } catch (t) {
            return []
        }
    }
}, , , , , , , , function(t, e, r) {
    t.exports = r(17)
}, function(e, t, r) {
    "use strict";
    var At = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        },
        Tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        n = r(18),
        Rt = a(n),
        Pt = r(7),
        wt = r(2),
        Ct = r(0),
        Lt = r(5),
        zt = r(1),
        Bt = r(8),
        jt = r(19),
        xt = r(4),
        Nt = r(3),
        Mt = r(6),
        Ht = r(20),
        Gt = r(21),
        Ut = r(22),
        kt = r(23),
        qt = r(24),
        o = r(25);

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function Ft(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function Kt(t, e) {
        var r = {};
        for (var n in t) 0 <= e.indexOf(n) || Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
        return r
    }
    var Xt = {};
    try {
        var i = (0, o.isApstagLibrary)(window.apstag);
        i ? (0, Nt.reportError)(new Error("apstag has already loaded - preventing duplicate load"), "__error-apstag_duplicate_load__", !0) : ((0, o.hasApstagJsLoaded)(window) && (0, Nt.reportError)(new Error("apstag was loaded and then destroyed"), "__error-apstag-destroyed-reloaded__", !0), window[zt.APSTAG_LOADED_VARIABLE] = !0, function() {
            var n = (0, Bt.getWindowPerformanceMetric)(window, "navigationStart"),
                O = (0, qt.getPageLoadID)(),
                e = "ls",
                t = (0, Lt.isDebugEnabled)("console") || function() {
                    try {
                        return -1 !== window.location.href.indexOf("amzn_debug_console=1") && (e = "url", !0)
                    } catch (t) {
                        return !1
                    }
                }(),
                r = (0, Lt.isDebugEnabled)("console_v2") || function() {
                    try {
                        return -1 !== window.location.href.indexOf("amzn_debug_console=2") && (e = "url", !0)
                    } catch (t) {
                        return !1
                    }
                }();

            function o() {
                try {
                    return window.top !== window.self ? encodeURIComponent(document.referrer) : ""
                } catch (t) {
                    return (0, Nt.reportError)(t, "__error-detectIframeAndGetURL__"), encodeURIComponent(document.documentURI)
                }
            }

            function D() {
                var t, e;
                try {
                    try {
                        e = window.top.document.referrer
                    } catch (t) {
                        (0, Nt.reportError)(t, "__error-getPageReferrerURL-1__"), e = window.document.referrer
                    }
                    t = encodeURIComponent(e)
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-getPageReferrerURL-2__")
                }
                return t
            }

            function I() {
                var t = (0, Lt.getDebugValue)("url");
                if ("" !== t) return encodeURIComponent(t);
                var e = encodeURIComponent(document.documentURI);
                try {
                    (e = encodeURIComponent(window.top.location.href)) && void 0 !== e || (e = o())
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-getReferrerURL__"), e = o()
                }
                return e
            }

            function A() {
                if (!(0, Ct.hasLocalStorage)()) return zt.NO_LOCAL_STORAGE_SUPPORT_MAGIC_NUMBER_FOR_AAX;
                var t = wt.store.getState();
                return (0, Ct.safeObjectHasProp)(t, "cfg") && (0, Ct.safeObjectHasProp)(t.cfg, "v") ? t.cfg.v : null
            }

            function T(t) {
                return encodeURIComponent(JSON.stringify(t))
            }! function() {
                if ((0, Ct.hasLocalStorage)()) {
                    var t = localStorage.getItem(zt.CFG_LOCAL_STORAGE_KEY);
                    if (t && "undefined" !== t) {
                        var e = JSON.parse(t);
                        wt.store.dispatch({
                            type: "SET_CFG",
                            cfg: e
                        })
                    }
                }
            }();
            var f = (a = {}, i = Date.now(), s = 0, {
                    addTimer: function(t, e) {
                        e = e || Date.now(), a[t] = e - i
                    },
                    set: function(t, e) {
                        a[t] = e
                    },
                    schedule: function(t, e) {
                        t = t || 5e3, setTimeout(function() {
                            a.i = s, a.t0 = i, a.site = function() {
                                var t = decodeURIComponent(I());
                                return (-1 < t.indexOf("://") ? t.split("/")[2] : t.split("/")[0]).split(":")[0]
                            }(), (0, xt.noBidCacheIdPixel)(a), a = {}, i = Date.now(), s++
                        }, t)
                    }
                }),
                a, i, s;

            function c(t) {
                t.ts = Date.now(), wt.store.dispatch({
                    type: "LOG_EVENT",
                    event: t
                })
            }

            function d(t) {
                function e(t) {
                    if (!wt.store.getState().cmpFired) {
                        wt.store.dispatch({
                            type: "CMP_FIRED"
                        });
                        var e = document.createElement("iframe");
                        e.style.display = "none", e.src = t, document.body.appendChild(e)
                    }
                }
                document.readyState && "loading" === document.readyState ? document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
                    e(t)
                }, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function() {
                    "complete" === document.readyState && e(t)
                }) : e(t)
            }

            function u(t) {
                try {
                    var e = wt.store.getState().cfg.COOKIE_MATCH_DELAY;
                    window.setTimeout(function() {
                        try {
                            t && t.cmp && "" !== t.cmp && void 0 !== t.cmp ? d(t.cmp) : t && t.cmpjs && "" !== t.cmpjs && void 0 !== t.cmpjs && (0, Mt.loadScriptTag)(t.cmpjs)
                        } catch (t) {
                            (0, Nt.reportError)(t, "__error-tryCookieMatch-1__")
                        }
                    }, e)
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-tryCookieMatch-2__")
                }
            }

            function l(t) {
                if (!t) return !1;
                try {
                    var e = Math.floor(Number(t));
                    if (e > zt.MINIMUM_BID_TIMEOUT) return e
                } catch (t) {
                    return (0, Nt.reportError)(t, "__error-getValidMilliseconds__", !0), !1
                }
                return !1
            }

            function p(t) {
                return !wt.store.getState().experiments.chunkRequests || 0 === wt.store.getState().bidReqs[t.split("-")[0]].networkReqs.filter(function(t) {
                    return t.inFlight
                }).length
            }

            function g(t, e) {
                !wt.store.getState().bidReqs[t[0]].hasCallbackExecuted && p(t[0]) && (wt.store.dispatch({
                    type: "RECORD_CALLBACK",
                    fid: t[0]
                }), e())
            }

            function _(t) {
                wt.store.getState().experiments.chunkRequests && wt.store.dispatch({
                    type: "RECORD_NETWORK_EXCHANGE",
                    fid: t[0],
                    timestamp: Date.now(),
                    exchangeType: "response",
                    networkID: t[1]
                })
            }

            function m(r, n, e) {
                var o = e.split("-"),
                    t = {
                        url: r,
                        withCredentials: !0
                    };
                try {
                    t.onload = function(e) {
                        _(o);
                        var t = e.responseText;
                        (0, qt.isRenderBiddingGetBidsRequest)(r) && (t = (0, qt.injectCBForGetBids)(r, t)), eval(t), g(o, n)
                    }, t.onerror = function() {
                        _(o), g(o, n)
                    }, (0, Mt.xhrGet)(t)
                } catch (e) {
                    (0, Nt.reportError)(e, "__error-xhrBid__", !0), _(o), g(o, n)
                }
            }

            function R() {
                var t = {},
                    e = (0, Ct.getCookieParts)();
                return t.cookiesParams = "", e.forEach(function(e) {
                    if (e[0] in zt.FIRST_PARTY_COOKIE_KEYS) switch (e[0]) {
                        case "aps_ext_917":
                            t.fb = e[1];
                            break;
                        case zt.RB_AID_COOKIE_KEY:
                            t.cookiesParams += "&" + zt.FIRST_PARTY_COOKIE_KEYS[zt.RB_AID_COOKIE_KEY].urlParam + "=" + zt.RB_MAGIC_NUMBER_FOR_AID_PRESENT;
                            break;
                        default:
                            t.cookiesParams += "&" + zt.FIRST_PARTY_COOKIE_KEYS[e[0]].urlParam + "=" + e[1]
                    }
                }), t.fb || wt.store.getState().sync917 || wt.store.dispatch({
                    type: "SET_SYNC_917",
                    value: !0
                }), t
            }

            function S(t) {
                var e = new Date;
                return e.setTime(e.getTime() + 1e3 * t), e.toGMTString()
            }

            function b(t) {
                if (t[zt.AAX_RESP_REMAP_COOKIE_KEY]) try {
                    t[zt.AAX_RESP_REMAP_COOKIE_KEY].forEach(function(t) {
                        document.cookie = t.k + "=" + t.v + ";expires=" + (-1 !== t.exp ? S(t.exp) : (0, Ct.getUTCStringForDate)(365)) + ";path=/;"
                    })
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-setFirstPartyCookies__")
                }
            }

            function E(t) {
                (0, Ct.safeObjectHasProp)(t, "cb") && (wt.store.dispatch({
                    type: "RECORD_AAX_RESPONSE_PROP",
                    bidReqID: t.cb,
                    key: "resTs",
                    value: Date.now()
                }), wt.store.dispatch({
                    type: "RECORD_AAX_RESPONSE_PROP",
                    bidReqID: t.cb,
                    key: "perf",
                    value: (0, Bt.getResourcePerformanceObject)(window, t.cb)
                })), (0, Ct.safeObjectHasProp)(t, "cfg") && wt.store.dispatch({
                    type: "SET_CFG",
                    cfg: t.cfg
                }), f.addTimer("br"), f.set("brs", (0, Ct.isAAXPunt)(t) ? "0" : "1"), (0, Ct.safeObjectHasProp)(t, "rm") && f.schedule(t.to, t.id), he(t)
            }

            function h(t) {
                if (u(t), b(t), (0, Ct.safeObjectHasProp)(t, "cfg") && localStorage.setItem(zt.CFG_LOCAL_STORAGE_KEY, JSON.stringify(t.cfg)), (0, Ct.safeObjectHasProp)(t, "st") && t.st.includes(917) && wt.store.getState().sync917) {
                    wt.store.dispatch({
                        type: "SET_SYNC_917",
                        value: !1
                    });
                    try {
                        ee()
                    } catch (t) {
                        (0, Nt.reportError)(t, "__error-doFbSync__")
                    }
                }
                v(t), (0, Ct.isAAXPunt)(t) || (0, xt.sendPixels)()
            }

            function v(t) {
                if ((0, Ct.safeObjectHasProp)(t, "fp")) {
                    var e = t.fp;
                    (0, Ct.safeObjectHasProp)(e, "length") && e.forEach(function(t) {
                        var e = t.d ? t.d : 0;
                        setTimeout(function() {
                            (0, xt.sendPixel)(t.s)
                        }, e)
                    })
                }
            }

            function y(t, e) {
                function r(e) {
                    if (!n) {
                        try {
                            t(e), o && clearTimeout(o)
                        } catch (e) {
                            (0, Nt.reportError)(e, "__error-wrapCallback__", !0)
                        }
                        n = !0
                    }
                }
                var n = !1,
                    o = null;
                return o = window.setTimeout(r.bind(null, !0), e || wt.store.getState().cfg.DEFAULT_TIMEOUT), r.bind(null, !1)
            }

            function P() {
                try {
                    return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) + "x" + (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-getWindowsDimensions__")
                }
                return "x"
            }

            function w(t) {
                if ("string" == typeof t && 0 < t.length) return !0;
                if (Array.isArray(t)) {
                    for (var e = 0; e < t.length; e++) {
                        if ("string" != typeof t[e]) return !1;
                        if (0 === t[e].length) return !1
                    }
                    return !0
                }
                return !1
            }

            function C(t) {
                return T(t.map(function(t) {
                    var e = {};
                    return (0, Ct.safeObjectHasProp)(t, "mediaType") && "video" === t.mediaType ? (e.id = t.slotID, e.mt = zt.MEDIA_TYPES_MAGIC_STRING_FOR_AAX.video) : (0, Ct.safeObjectHasProp)(t, "sizes") && (e.sd = t.slotID, e.s = t.sizes.filter(Ct.isArray).map(function(t) {
                        return t.join("x")
                    }), (0, Ct.safeObjectHasProp)(t, "slotName") && t.slotName !== t.slotID && (e.sn = t.slotName)), (0, Ct.safeObjectHasProp)(t, "slotParams") && "object" === Tt(t.slotParams) && null !== t.slotParams && (e.kv = {}, Object.keys(t.slotParams).forEach(function(r) {
                        w(t.slotParams[r]) && (e.kv[r] = t.slotParams[r])
                    })), 0 !== Object.keys(e).length ? e : At({}, t, {
                        id: "error"
                    })
                }).filter(function(t) {
                    return "error" !== t.id
                }))
            }

            function L(t) {
                var e, r = t.blockedBidders && (0, Ct.isArray)(t.blockedBidders) ? t.blockedBidders : wt.store.getState().config.blockedBidders;
                return r && (0, Ct.isArray)(r) && (e = JSON.stringify(r)), e
            }

            function z(t, e) {
                var r, n, o = (0, Lt.getDebugValue)("host") || wt.store.getState().hosts.DEFAULT_AAX_BID_HOST,
                    a = wt.store.getState().cfg.DTB_PATH,
                    i = wt.store.getState().config.pubID,
                    s = O,
                    c = I(),
                    d = D(),
                    u = P(),
                    l = zt.LIBRARY_VERSION,
                    f = R(),
                    p = L(t),
                    g = A(),
                    _ = {};
                if (wt.store.dispatch({
                        type: "RECORD_AAX_REQUEST",
                        data: {
                            bidConfig: t,
                            timeout: e,
                            bidReqID: t.bidReqID,
                            ws: u,
                            url: c,
                            rqTs: Date.now()
                        }
                    }), wt.store.getState().experiments.chunkRequests) {
                    var m = t.bidReqID.split("-");
                    wt.store.dispatch({
                        type: "RECORD_NETWORK_EXCHANGE",
                        fid: m[0],
                        networkID: m[1],
                        timestamp: Date.now(),
                        exchangeType: "request"
                    })
                }
                r = wt.store.getState().config.isSelfServePub ? "src=600&pubid=" + i : "src=" + i, r += "&u=" + c + "&pid=" + s + "&cb=" + t.bidReqID + "&ws=" + u + "&v=" + l + "&t=" + e, (0, Ct.safeObjectHasProp)(t, "slots") && (r += "&slots=" + C(t.slots));
                var S = wt.store.getState().config.params,
                    b = t.params,
                    E = wt.store.getState().experiments;
                S = (0, Ct.isObject)(S) ? S : {}, b = (0, Ct.isObject)(b) ? b : {}, n = At({}, S, b, {
                    apse: E
                }), r += "&pj=" + T(n), f.cookiesParams && (r += f.cookiesParams), f.fb && (_[917] = f.fb, r += "&" + zt.FIRST_PARTY_COOKIE_KEYS.aps_ext_917.urlParam + "=" + encodeURIComponent(JSON.stringify(_))), qt.IS_RENDER_BIDDING_PAGELOAD && (0, qt.isFirstAAXRequest)(wt.store.getState()) && (r += zt.IS_GET_BIDS_URL_PARAM), !g && g !== zt.NO_LOCAL_STORAGE_SUPPORT_MAGIC_NUMBER_FOR_AAX || (r += "&cfgv=" + g);
                var h = (0, Lt.getDebugValue)("bidParams");
                if ("" !== h && Object.keys(h).forEach(function(t) {
                        r += "&" + t + "=" + h[t]
                    }), d && "" !== d && (r += "&pr=" + d), p && (r += "&bb=" + p), "object" === Tt(wt.store.getState().gdpr) && null !== wt.store.getState().gdpr) {
                    var v = At({}, wt.store.getState().gdpr),
                        y = {
                            enabled: "gdpre",
                            consent: "gdprc",
                            log: "gdprl"
                        };
                    Object.keys(y).filter(function(t) {
                        return void 0 !== v[t]
                    }).map(function(t) {
                        switch (t) {
                            case "log":
                                if ((0, Ct.hasLocalStorage)()) {
                                    var e = window.localStorage.getItem(Pt.cmpResponseKey);
                                    if (null !== e) {
                                        try {
                                            e = JSON.parse(e)
                                        } catch (t) {
                                            e = null
                                        }
                                        window.localStorage.removeItem(Pt.cmpResponseKey)
                                    }
                                    null !== e && (v.log = JSON.stringify(At({}, JSON.parse(v.log), {
                                        rtimes: e
                                    })));
                                    var n = window.localStorage.getItem(Pt.cmpLocalStorageChanged);
                                    null !== n && (window.localStorage.removeItem(Pt.cmpLocalStorageChanged), v.log = JSON.stringify(At({}, JSON.parse(v.log), {
                                        cc: n
                                    })))
                                }
                        }
                        r += "&" + y[t] + "=" + encodeURIComponent(v[t])
                    })
                }
                return "" + zt.PROTOCOL + o + a + "/bid?" + r
            }

            function B() {
                wt.store.getState().Q.forEach(function(t) {
                    "i" === t[0] ? window.apstag.init.apply(null, t[1]) : window.apstag.fetchBids.apply(null, t[1])
                })
            }

            function j(t) {
                var e = wt.store.getState().config;
                return (0, Ct.safeObjectHasProp)(e, "pubID") && (0, Ct.safeObjectHasProp)(t, "pubID") && e.pubID !== t.pubID && (0, Nt.reportError)(new Error("`apstag.init` was called multiple times with different pubIDs (" + e.pubID + " then " + t.pubID + ")"), "__error-init-multiple-calls__", !0), wt.store.dispatch({
                    type: "SET_GDPR_CONFIG",
                    config: null
                }), wt.store.dispatch({
                    type: "SET_CONFIG",
                    config: t,
                    defaultCmpTimeout: wt.store.getState().cfg.GDPR_CMP_TIMEOUT
                }), "success"
            }

            function x() {
                var t = wt.store.getState();
                return (0, Ct.safeObjectHasProp)(t, "config") && (0, Ct.safeObjectHasProp)(t.config, "deals") && !0 === t.config.deals || Xt.needNewBidObject
            }

            function N(t) {
                var e = t.slotID;
                (0, Ct.safeObjectHasProp)(t, "mediaType") && "video" === t.mediaType || Xt.hasAdServerObjectLoaded() && Xt.isCommandQueueDefined() && (Xt.hasAdServerObjectLoaded() ? M(e) && J(t) : Xt.cmdQueuePush(function() {
                    N(t)
                }))
            }

            function M(t) {
                var e;
                try {
                    e = q().filter(function(e) {
                        return Xt.getSlotElementId(e) === t
                    })[0]
                } catch (e) {
                    (0, Nt.reportError)(e, "__error-getAdServerSlot__")
                }
                return e
            }

            function H(t) {
                try {
                    var e = wt.store.getState().targetingKeys[t];
                    if (Xt.hasAdServerObjectLoaded() && (0, Ct.isArray)(e)) {
                        var r = M(t);
                        e.forEach(function(t) {
                            0 < Xt.getTargeting(t, r).length && Xt.clearTargeting(t, r)
                        })
                    }
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-clearTargetingFromSlot__")
                }
            }

            function G(t) {
                try {
                    if ((0, Ct.safeObjectHasProp)(wt.store.getState().slotBids, t)) {
                        var e = wt.store.getState().slotBids[t].filter(function(t) {
                            return t.bidState === zt.BID_STATES.set
                        })[0];
                        e && e.bidState === zt.BID_STATES.set && wt.store.dispatch({
                            type: "BID_STATE_CHANGE",
                            slotID: t,
                            _targetingSetID: e._targetingSetID,
                            bidState: zt.BID_STATES.exposed
                        })
                    }
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-clearbidSetOnSlot__")
                }
            }

            function U(t, e) {
                return decodeURIComponent(t).split("?")[0].split("#")[0] === decodeURIComponent(e).split("?")[0].split("#")[0]
            }

            function k(t, e) {
                return t.map(function(t) {
                    return (0, Ct.inArray)(e, t)
                }).filter(function(t) {
                    return t
                }).length === t.length
            }

            function q() {
                var t = [];
                try {
                    Xt.hasAdServerObjectLoaded() && (t = Xt.getSlots())
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-getAdServerSlots__")
                }
                return t
            }

            function F() {
                var t = {};
                try {
                    Object.keys(wt.store.getState().slotBids).forEach(function(e) {
                        if (-1 === wt.store.getState().displayAdServer.noBidSlotIDs.indexOf(e)) {
                            var r = wt.store.getState().slotBids[e].filter(function(t) {
                                return Date.now() - wt.store.getState().AAXReqs.filter(function(e) {
                                    return e.bidReqID === t.bidReqID
                                })[0].rqTs < 24e4
                            }).filter(function(t) {
                                return U(I(), wt.store.getState().AAXReqs.filter(function(e) {
                                    return e.bidReqID === t.bidReqID
                                })[0].url)
                            }).filter(function(t) {
                                return t.bidState !== zt.BID_STATES.rendered
                            });
                            0 < r.length && (t[e] = r.map(function(t) {
                                var e = wt.store.getState().AAXReqs.filter(function(e) {
                                    return e.bidReqID === t.bidReqID
                                })[0].rqTs;
                                return At({}, t, {
                                    rqTs: e
                                })
                            }).reduce(function(t, e) {
                                return t.rqTs > e.rqTs ? t : e
                            }))
                        }
                    })
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-getCurrentSlotBids__")
                }
                return t
            }

            function K(t, e) {
                return (0, Ct.isArray)(wt.store.getState().targetingKeys[t]) ? e ? ["amzniid_sp"] : wt.store.getState().targetingKeys[t].filter(function(t) {
                    return -1 < t.indexOf("amzniid") && t.indexOf("amzniid_sp") < 0
                }) : ["amzniid"]
            }

            function X(t, e) {
                var r, n;
                try {
                    var o = wt.store.getState().slotBids;
                    Object.keys(o).forEach(function(a) {
                        o[a].forEach(function(o) {
                            K(a, e).forEach(function(e) {
                                o[e] === t && (r = o, "amzniid_sp" === e ? n = "sp" : "amzniid" !== e && (n = e.substr(0, e.indexOf("amzniid"))))
                            })
                        })
                    })
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-findSlotBidByBidID__", !0)
                }
                return {
                    slotBid: r,
                    dealId: n
                }
            }

            function Q(t, e, r) {
                var n;
                return e[r + "amzniid"] === t && (n = r.split("_").pop().trim()), n
            }

            function Y(t) {
                var e = {};
                return t.slots.forEach(function(t) {
                    "video" !== t.mediaType ? e[t.slotID] = t : (0 <= t.slotID.indexOf("rsv-") && (t = {
                        slotID: t.slotID.substring(4),
                        r_amznbid: t.amznbid,
                        r_amzniid: t.amzniid,
                        r_amznp: t.amznp,
                        mediaType: "video",
                        targeting: ["r_amznbid", "r_amzniid", "r_amznp"]
                    }), e[t.slotID] ? (t.targeting = t.targeting.concat(e[t.slotID].targeting), e[t.slotID] = At({}, e[t.slotID], t)) : e[t.slotID] = t)
                }), Object.keys(e).map(function(t) {
                    return e[t]
                })
            }

            function V(t) {
                var e, r = Y(t),
                    n = ["host", "ev", "cb", "cmp", "cfe"];
                try {
                    e = r.map(function(e) {
                        var r = {
                            bidState: zt.BID_STATES.new,
                            _targetingSetID: (0, Ct.getRand)()
                        };
                        return (0, Ct.safeObjectHasProp)(e, "amznsz") || (r.amznsz = e.size), n.forEach(function(e) {
                            if ((0, Ct.safeObjectHasProp)(t, e)) {
                                var n = t[e],
                                    o = e;
                                "cb" === e && (o = "bidReqID"), r[o] = n
                            }
                        }), At({}, e, r)
                    })
                } catch (e) {
                    (0, Nt.reportError)(e, "__error-convertAAXResponse__")
                }
                return e
            }

            function J(t) {
                try {
                    var e, r = t.slotID,
                        n = t._targetingSetID,
                        o = t.targeting ? t.targeting : yt("display");
                    if (t.bidState === zt.BID_STATES.set) return;
                    (e = M(r)) && (G(r), Object.keys(t).filter(function(t) {
                        return (0, Ct.inArray)(o, t)
                    }).forEach(function(r) {
                        return Xt.setTargeting(r, t[r], e)
                    }), wt.store.dispatch({
                        type: "BID_STATE_CHANGE",
                        slotID: r,
                        _targetingSetID: n,
                        bidState: zt.BID_STATES.set,
                        ts: Date.now()
                    }))
                } catch (r) {
                    (0, Nt.reportError)(r, "__error-applyTargetingToAdServerSlot__")
                }
            }

            function W(t) {
                var e = F();
                t.forEach(function(t) {
                    e[t] && N(e[t])
                })
            }

            function $() {
                var t = F();
                Object.keys(t).forEach(function(e) {
                    N(t[e])
                })
            }

            function Z(t) {
                try {
                    t ? W(t) : $(), wt.store.getState().displayAdServer.slotRenderEndedSet || (Xt.cmdQueuePush(function() {
                        Xt.slotRenderEndedEvent(function(t) {
                            H(Xt.getSlotElementId(t.slot)), G(Xt.getSlotElementId(t.slot))
                        })
                    }), wt.store.dispatch({
                        type: "SLOT_RENDER_ENDED_SET"
                    }))
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-applySlotTargeting__", !0)
                }
            }

            function ee() {
                var t = 197,
                    e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    r = "1881141382166183",
                    n = "https://www.facebook.com/audiencenetwork/token/update";

                function o(t) {
                    var e = JSON.parse(t),
                        r = e.fbToken,
                        n = new Date(parseInt(e.expAfter, 10)).toUTCString();
                    document.cookie = "aps_ext_917=" + r + "; expires=" + n
                }

                function a(r) {
                    ! function(t, e, r) {
                        ! function(t, e) {
                            var r = {
                                url: t,
                                withCredentials: !0
                            };
                            try {
                                r.onload = function(t) {
                                    e(t.responseText)
                                }, r.onerror = function() {}, (0, Mt.xhrGet)(r)
                            } catch (t) {
                                (0, Nt.reportError)(t, "__error-fbTokenRequest__")
                            }
                        }(function(t, e) {
                            return n + "?partner=" + encodeURIComponent(t) + "&vr_token=" + encodeURIComponent(e)
                        }(t, e), r)
                    }(r, function() {
                        for (var r = "VR_", n = 0; n < t; ++n) r += e.charAt(Math.floor(Math.random() * e.length));
                        return r
                    }(), o)
                }
                "complete" === document.readyState ? a(r) : window.addEventListener("load", function() {
                    a(r)
                })
            }

            function te(t, e) {
                function r() {
                    if (!n)
                        if (20 <= o++)(0, Nt.reportError)({
                            name: "LoopError",
                            message: "Too many attempts to append to document.body"
                        }, "__error-safeDocumentBodyAppendChild-loops__", !0);
                        else {
                            try {
                                if (t && t.body && null !== t.body && "function" == typeof t.body.appendChild) return t.body.appendChild(e), void(n = !0)
                            } catch (t) {
                                (0, Nt.reportError)(t, "__error-safeDocumentBodyAppendChild-callback__")
                            }
                            setTimeout(r, 100)
                        }
                }
                var n = !1,
                    o = 0;
                try {
                    "complete" === t.readyState || "interactive" === t.readyState ? r() : t.addEventListener ? t.addEventListener("DOMContentLoaded", r) : t.attachEvent("onreadystatechange", function() {
                        "complete" !== t.readyState && "interactive" !== t.readyState || r()
                    })
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-safeDocumentBodyAppendChild-outer__")
                }
            }

            function re(t) {
                var e, r;
                return e = "" + t.host + wt.store.getState().cfg.DTB_PATH + "/imp", r = "" + t.host + wt.store.getState().cfg.DTB_PATH + "/adm", t.cfe || t.isAmp ? r : e
            }

            function ne(t) {
                var e, r = "?b=" + t.bidID + "&rnd=" + (0, Ct.getRand)();
                return (0, Ct.safeObjectHasProp)(t, "pp") && (r += "&pp=" + t.pp), (0, Ct.safeObjectHasProp)(t, "amznp") && (r += "&p=" + t.amznp), (0, Ct.safeObjectHasProp)(t, "crID") && (r += "&crid=" + t.crID), (0, Ct.safeObjectHasProp)(t, "isSharedPMP") && !0 === t.isSharedPMP && (r += "&sp=true"), e = re(t), "1" === t.fif ? e + "j" + r : e + "i" + r
            }

            function oe(t) {
                var e = t.doc.createElement("iframe");
                return e.frameBorder = 0, e.marginHeight = 0, e.marginWidth = 0, e.topMargin = 0, e.leftMargin = 0, e.scrolling = "no", e.allowTransparency = !0, e.width = t.sizes[0] + "px", e.height = t.sizes[1] + "px", e
            }

            function ae(t) {
                var e;
                try {
                    if ((0, Ct.safeObjectHasProp)(t, "bidType")) {
                        var r = t.kvMap;
                        switch (t.bidType) {
                            case "sharedPMP":
                                e = {
                                    bidID: r.amzniid_sp[0],
                                    pp: r.amznbid_sp[0],
                                    sizes: r.amznsz_sp[0].split("x"),
                                    amznp: r.amznp_sp[0],
                                    isSharedPMP: t.isSharedPMP
                                };
                                break;
                            case "preferredPMP":
                                var n = t.amzndeal.split("_").pop().trim();
                                e = {
                                    bidID: r[t.amzndeal + "amzniid"][0],
                                    sizes: nt(n)
                                };
                                break;
                            case "openAuction":
                                e = (0, Ct.safeObjectHasProp)(t, "kvMap") ? {
                                    bidID: r.amzniid[0],
                                    pp: (0, Ct.getAmpAmznBidValue)(r.amznbid[0]),
                                    amznp: r.amznp[0],
                                    sizes: r.amznsz[0].split("x")
                                } : {
                                    bidID: t.amzniid,
                                    pp: (0, Ct.getAmpAmznBidValue)(t.amznbid),
                                    amznp: t.amznp,
                                    sizes: t.amznsz.split("x")
                                };
                                break;
                            default:
                                try {
                                    (0, Nt.reportError)({
                                        name: "Invalid AMP Bid Type: " + t.bidType,
                                        message: "No valid AMP bid type"
                                    }, "__error-ampBidAuctionTypeSelectionDefaultBlock__")
                                } catch (t) {
                                    (0, Nt.reportError)(t, "__error-ampBidAuctionSwitchStatement__")
                                }
                        }
                    }
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-getAmpAdData__")
                }
                return e
            }

            function ie(t, e) {
                try {
                    var r = {},
                        n = {},
                        o = {};
                    if ((0, Ct.safeObjectHasProp)(e, "ampEnv") && e.ampEnv && (r = e, (0, Ct.safeObjectHasProp)(e, "bidType") && "sharedPMP" === e.bidType ? r.isSharedPMP = !0 : r.isSharedPMP = !1, r.document = t), tt(t) && ((r = t).bidType = "openAuction", r.ampEnv = !0), (0, Ct.safeObjectHasProp)(r, "kvMap") && (r.amznhost = e.kvMap.amznhost[0]), n = ae(r), (0, Ct.safeObjectHasProp)(r, "kvMap") && (0, Ct.safeObjectHasProp)(r.kvMap, "amzncsmparams") && r.kvMap.amzncsmparams[0] && (o.amznCsmParams = JSON.parse(decodeURIComponent(r.kvMap.amzncsmparams[0])), ct(o)), n.doc = r.document, n.host = r.amznhost.replace("http://", "https://"), n.adID = "amznad" + (0, Ct.getRand)(), n.isAmp = r.ampEnv, n.isSf = (0, jt.isSafeFrame)(window), wt.store.getState().amznCsmParams.ev) return void it(n, n.doc);
                    ce(n)
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-renderAmpImpression__")
                }
            }

            function se(t) {
                try {
                    var e = oe(t = At({
                        hasRendered: !1,
                        hasStartedRender: !1
                    }, t));
                    e.id = "apstag-f-iframe-" + (0, Ct.getRand)(), e.addEventListener("load", function(t) {
                        !t.hasStartedRender || t.hasRendered ? t.hasStartedRender ? (0, Nt.reportError)(new Error(t.bidID), "__error-loadAdIntoFriendlyIframe-multiple__", !0) : (t.hasStartedRender = !0, e.contentWindow.document.open(), e.contentWindow.document.write(t.html), e.contentWindow.document.close(), t.hasRendered = !0) : (0, Nt.reportError)(new Error(t.bidID), "__error-loadAdIntoFriendlyIframe-incomplete__", !0)
                    }.bind(null, t)), e.src = "about:blank", te(t.doc, e)
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-loadAdIntoFriendlyIframe__", !0)
                }
            }

            function ce(t, e) {
                try {
                    var r = oe(t),
                        n = {};
                    if (r.id = t.adID, r.sandbox = "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation", (0, Lt.isDebugEnabled)("fake_bids")) {
                        var o = '<body style="background-color: #FF9900;">' + (50 < t.sizes[1] ? "<h3>apstag Test Creative</h3>" : "") + "<h4>amzniid - " + t.bidID + " | amznbid: " + t.pp + " | size: " + t.sizes.join("x") + "</h4></body>";
                        r.src = "javascript:'" + o + "'"
                    } else r.src = ne(t);
                    t.isAmp ? (n.doc = t.doc, n.amzniid = t.bidID, n.slotID = "amp", t.isSf && (0, jt.is1x1Creative)(window) && (0, jt.expandSf)(t.sizes, window)) : (n = X(t.bidID, t.isSharedPMP).slotBid).doc = t.doc, te(t.doc, r), t.viewabilityParams = t.viewabilityParams || {
                        states: {}
                    }, (t.viewabilityParams.iframe = r).onload = function() {
                        t.viewabilityParams.states.iframeLoaded = !0, e && e()
                    }
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-loadAdIntoUnfriendlyIframe__", !0)
                }
            }

            function de(t, e) {
                var r, n = t.states,
                    o = t.doc,
                    a = t.bidID,
                    i = t.iframe;
                Je(n) || (n.shouldRunViewability = !1, (0, Ct.safeObjectHasProp)(window, "amzncsm") ? r = window.amzncsm : (0, Ct.safeObjectHasProp)(o.defaultView, "amzncsm") && (r = o.defaultView.amzncsm), r && (0, Ct.safeObjectHasProp)(r, "rmD") && (r.host = wt.store.getState().hosts.DEFAULT_AAX_PIXEL_HOST, r.rmD(i, a, o.defaultView, o, null, e)))
            }

            function ue(t) {
                var e = t.map(Ee),
                    r = {};
                return Object.keys(wt.store.getState().slotBids).forEach(function(t) {
                    var n = wt.store.getState().slotBids[t].filter(function(t) {
                        return t.bidState === zt.BID_STATES.new
                    })[0];
                    n && (0, Ct.inArray)(e, t) && (r[t] = n, wt.store.dispatch({
                        type: "BID_STATE_CHANGE",
                        slotID: t,
                        _targetingSetID: n._targetingSetID,
                        bidState: zt.BID_STATES.exposed
                    }))
                }), r
            }

            function le(t, e) {
                var r = "0x0";
                return x() ? {
                    slotID: t,
                    size: r,
                    mediaType: "banner",
                    targeting: {
                        amznbid: e,
                        amzniid: "",
                        amznp: e,
                        amznsz: r
                    },
                    helpers: {
                        targetingKeys: ["amznbid", "amzniid", "amznp", "amznsz"]
                    }
                } : {
                    slotID: t,
                    amzniid: "",
                    amznbid: e,
                    amznp: e,
                    amznsz: r,
                    size: r
                }
            }

            function fe(t, e) {
                var r = "";
                return t.targeting.forEach(function(e) {
                    r += "&" + e + "=" + t[e]
                }), !0 === e && (r = encodeURIComponent(r)), r
            }

            function pe(t, e, r) {
                var n, o = e.slots.filter($e).map(Ee),
                    a = t.map(Ee);
                return n = r ? o.map(function(t) {
                    return le(t, zt.SLOT_STATES.bidInFlight)
                }) : o.reduce(function(t, e) {
                    return (0, Ct.inArray)(a, e) || t.push(le(e, zt.SLOT_STATES.noBid)), t
                }, []), t.concat(n)
            }

            function ge(t, e) {
                return function(r) {
                    var n = ue(e.slots),
                        o = Object.keys(n),
                        a = [];
                    r && (wt.store.dispatch({
                        type: "RECORD_AAX_RESPONSE_PROP",
                        bidReqID: e.bidReqID,
                        key: "timedOutAt",
                        value: Date.now()
                    }), wt.store.getState().experiments.chunkRequests && wt.store.dispatch({
                        type: "RECORD_TIMEOUT",
                        fid: e.bidReqID,
                        timeOut: Date.now()
                    })), o.forEach(function(t) {
                        if ((0, Ct.safeObjectHasProp)(n, t)) {
                            var e = n[t],
                                r = {};
                            if (x()) e.meta.forEach(function(t) {
                                r[t] = e[t]
                            }), r.targeting = {}, e.targeting.forEach(function(t) {
                                r.targeting[t] = e[t]
                            }), r.helpers = {
                                targetingKeys: e.targeting,
                                qsParams: fe.bind(null, e, !1),
                                encodedQsParams: fe.bind(null, e, !0)
                            };
                            else if ((0, Ct.safeObjectHasProp)(e, "amznbid")) {
                                if ((0, Ct.safeObjectHasProp)(e, "amznp") || (e.amznp = ""), r = {
                                        amzniid: e.amzniid,
                                        amznbid: e.amznbid,
                                        amznp: e.amznp,
                                        slotID: t
                                    }, (0, Ct.safeObjectHasProp)(e, "size") && (r.size = e.size, r.amznsz = e.amznsz), "video" === e.mediaType) {
                                    r.mediaType = "video";
                                    var o = "";
                                    e.amznbid ? o += "&amzniid=" + e.amzniid + "&amznbid=" + e.amznbid + "&amznp=" + e.amznp : (r.amznbid = "", r.amzniid = ""), e.r_amznbid ? (r.r_amznbid = e.r_amznbid, r.r_amzniid = e.r_amzniid, r.r_amznp = e.r_amznp, o += "&r_amzniid=" + e.r_amzniid + "&r_amznbid=" + e.r_amznbid + "&r_amznp=" + e.r_amznp) : (r.r_amznbid = "", r.r_amzniid = "", r.r_amznp = ""), r.qsParams = o, r.encodedQsParams = encodeURIComponent(o)
                                }
                            } else r = le(e.slotID, zt.SLOT_STATES.noBid);
                            a.push(r)
                        }
                    }), Xt.isSupported && (a = pe(a, e, r)), Xt.appendTargeting(a), t(a, {
                        fromTimeout: r
                    })
                }
            }

            function _e(t, e) {
                try {
                    var r;
                    (r = t.defaultView && t.defaultView.frameElement ? t.defaultView.frameElement : window.frameElement).width = e[0], r.height = e[1]
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-resizeIframe__")
                }
            }

            function me(t) {
                return t[0] + "x" + t[1]
            }

            function Se(t) {
                return 1 === t.length ? me(t[0]) : me(t[Math.floor(t.length * Math.random())])
            }

            function be(t, e) {
                var r, n = wt.store.getState().hosts.DEFAULT_AAX_BID_HOST,
                    o = I(),
                    a = t.bidReqID,
                    i = P(),
                    s = (0, Lt.getDebugValue)("testBidTimeout") || 200;
                wt.store.dispatch({
                    type: "RECORD_AAX_REQUEST",
                    data: {
                        bidConfig: t,
                        timeout: s,
                        bidReqID: a,
                        ws: i,
                        url: o,
                        rqTs: Date.now()
                    }
                }), r = t.slots.map(function(t) {
                    var e = {
                        slotID: t.slotID,
                        amzniid: zt.MOCKBID.amzniid + "-" + (0, Ct.getRand)(),
                        amznbid: zt.MOCKBID.amznbid,
                        amznp: zt.MOCKBID.amznp,
                        crid: zt.MOCKBID.crid + "-" + (0, Ct.getRand)()
                    };
                    if ((0, Ct.safeObjectHasProp)(t, "sizes")) {
                        var r = Se(t.sizes);
                        e.size = r, e.amznsz = r
                    } else "video" === t.mediaType && (e.mediaType = "video", e.amznbid = "v_" + e.amznbid);
                    if (x()) {
                        e.mediaType = "banner", e.meta = ["slotID", "mediaType", "size"], e.amznbid_sp = zt.MOCKBID.amznbid + "SP", e.amznp_sp = zt.MOCKBID.amznp + "SP", e.amznsz_sp = e.size;
                        var n = "testDeal" + (0, Ct.getRand)() + "_" + e.size,
                            o = "testDealImpression-" + (0, Ct.getRand)();
                        e.amzndeal_sp = n, e.amzndeals = [n], e[n + "amzniid"] = o, e.amzniid_sp = o, e.targeting = ["amzniid", "amznbid", "amznp", "amznsz", "amzniid_sp", "amznbid_sp", "amznp_sp", "amznsz_sp", "amzndeal_sp", "amzndeals", n + "amzniid"]
                    }
                    return e
                }), window.setTimeout(function() {
                    window.apstag.bids({
                        slots: r,
                        host: n,
                        status: "ok",
                        cb: a
                    }), e(!0)
                }, s)
            }

            function Ee(t) {
                return t.slotID
            }

            function he(t) {
                var e = wt.store.getState().AAXReqs.filter(function(e) {
                    return e.bidReqID === t.cb
                })[0];
                if (e && e.bidConfig && e.bidConfig.slots) {
                    var r = e.bidConfig.slots.filter($e).map(function(t) {
                            return t.slotID
                        }),
                        n = (0, Ct.safeObjectHasProp)(t, "slots") ? t.slots.map(function(t) {
                            return t.slotID
                        }) : [],
                        o = r.filter(function(t) {
                            return !(0, Ct.inArray)(n, t)
                        });
                    wt.store.dispatch({
                        type: "NO_BID_ON_ADSERVER_SLOTS",
                        slotIDs: o
                    }), Xt.hasAdServerObjectLoaded() ? Oe() : Xt.isCommandQueueDefined() && Xt.cmdQueuePush(function() {
                        Oe()
                    })
                }
            }

            function ve(t) {
                return (0, Ct.inArray)(wt.store.getState().AAXReqs.filter(function(t) {
                    return !t.resTs
                }).map(function(t) {
                    return t.bidConfig.slots
                }).reduce(function(t, e) {
                    return t.concat(e)
                }, []).map(Ee), t)
            }

            function ye(t) {
                var e = Xt.getTargeting("amznbid", t);
                return 0 < e.length && 2 < e[0].length
            }

            function Oe() {
                Xt.hasAdServerObjectLoaded() && "1" === Xt.getTargeting("amznbid")[0] && Ie(), q().forEach(function(t) {
                    !(0, Ct.inArray)(wt.store.getState().displayAdServer.noBidSlotIDs, Xt.getSlotElementId(t)) || ve(Xt.getSlotElementId(t)) || ye(t) || "2" === Xt.getTargeting("amznbid", t)[0] || De("noBid", t)
                })
            }

            function De(t, e) {
                zt.SLOT_STATE_KEYS.forEach(function(r) {
                    return Xt.setTargeting(r, zt.SLOT_STATES[t], e)
                })
            }

            function Ie() {
                zt.SLOT_STATE_KEYS.forEach(function(t) {
                    return Xt.clearTargeting(t)
                })
            }

            function Ae(t) {
                var e = {
                    _type: "dupePixel",
                    dd: Date.now() - t.renderTime
                };
                (0, xt.bidCacheIdPixel)(t.amzniid, e)
            }

            function Te() {
                var t = (0, Bt.getResourcePerformanceObject)(window, "aax2/apstag.js"),
                    e = {
                        pid: O,
                        ns: n,
                        fs: (0, Bt.getMetricFromPerformanceObject)(t, "fetchStart"),
                        re: (0, Bt.getMetricFromPerformanceObject)(t, "responseEnd")
                    },
                    r = (0, Bt.isResourceCached)(t);
                null !== r && (e.c = r ? 1 : 0), window.setTimeout(xt.noBidCacheIdPixel, 1e3, e)
            }
            var Re = 0,
                Pe;

            function we() {
                (0, Ct.safeObjectHasProp)(window, "googletag") && (0, Ct.safeObjectHasProp)(window.googletag, "cmd") ? Gt.displayAdServerGoogletag.cmdQueuePush(function() {
                    window.googletag.pubads().addEventListener("slotRequested", function(t) {
                        try {
                            var e = t.slot;
                            wt.store.dispatch({
                                type: "LOG_GAM_EVENT",
                                event: At({}, gt(e), {
                                    ts: Date.now(),
                                    targeting: e.getTargetingMap()
                                })
                            })
                        } catch (t) {
                            (0, Nt.reportError)(t, "__error-latency-parse-event__")
                        }
                    })
                }): ++Re < 5 && window.setTimeout(we, 100)
            }

            function Ce(t) {
                var e = t.AAXReqs.slice(t.gamSlotRenderPixel.aaxReqOffset).reduce(function(t, e) {
                        return t.concat(e.bidConfig.slots)
                    }, []).map(function(t) {
                        return At({}, t, {
                            type: "a"
                        })
                    }).filter(function(t) {
                        return "video" !== t.mediaType
                    }),
                    r = t.gamSlotFetchLog.slice(t.gamSlotRenderPixel.gamSlotFetchLogOffset).map(function(t) {
                        return At({}, t, {
                            type: "g"
                        })
                    }),
                    n = [].concat(e).concat(r).reduce(function(t, e) {
                        return (0, Ct.safeObjectHasProp)(t, e.slotID) || (t[e.slotID] = {
                            sd: e.slotID,
                            a: {
                                c: 0
                            },
                            g: {
                                c: 0
                            }
                        }), t[e.slotID][e.type].c++, t[e.slotID][e.type].s = e.sizes, t[e.slotID][e.type].sn = e.slotName || "", t
                    }, {});
                return Object.keys(n).map(function(t) {
                    return n[t]
                }).filter(function(t) {
                    return 0 !== t.a.c || 0 !== t.g.c
                })
            }

            function Le() {
                var t = wt.store.getState(),
                    e = Ce(t);
                0 < Object.keys(e).length && ((0, Ct.chunkArray)(e, 5).forEach(function(e) {
                    (0, xt.noBidCacheIdPixel)({
                        slots: e,
                        pid: O,
                        url: I().split("?")[0],
                        ws: P(),
                        pubid: t.config.pubID,
                        _type: "slotRenders"
                    })
                }), wt.store.dispatch({
                    type: "UPDATE_RENDER_OFFSETS",
                    offsets: {
                        aaxReqOffset: t.AAXReqs.length,
                        gamSlotFetchLogOffset: t.gamSlotFetchLog.length
                    }
                }))
            }

            function ze() {
                window.setInterval(function() {
                    Le()
                }, 5e3)
            }

            function Be() {
                try {
                    window.setTimeout(function() {
                        var t = Me().filter(function(t) {
                            return !(0, Ct.safeObjectHasProp)(wt.store.getState().bsPixels, t.iid) || t.state !== wt.store.getState().bsPixels[t.iid]
                        });
                        t && t.length && 0 < t.length && (t.forEach(function(t) {
                            var e = t.iid,
                                r = Kt(t, ["iid"]);
                            (0, xt.bidCacheIdPixel)(e, xe(r))
                        }), je(t));
                        var e = {
                            fetchStart: "a",
                            domainLookupStart: "b",
                            domainLookupEnd: "c",
                            connectStart: "d",
                            secureConnectionStart: "e",
                            connectEnd: "f",
                            requestStart: "g",
                            responseStart: "h",
                            responseEnd: "i",
                            resTs: "j"
                        };
                        Object.keys(wt.store.getState().slotBids).forEach(function(t) {
                            wt.store.getState().slotBids[t].filter(function(t) {
                                return void 0 !== t.amzniid
                            }).forEach(function(r) {
                                if (!r.pixelSent) {
                                    var n = wt.store.getState().AAXReqs.filter(function(t) {
                                        return t.bidReqID === r.bidReqID
                                    })[0];
                                    if ("object" === (void 0 === n ? "undefined" : Tt(n)) && null !== n) {
                                        var o = n.rqTs - (0, Bt.getTimeOrigin)(),
                                            a = {
                                                pid: O,
                                                lv: zt.LIBRARY_VERSION,
                                                ns: n.bidConfig.slots.length,
                                                fid: r.bidReqID,
                                                fbrq: n.rqTs,
                                                _type: "latencyBd"
                                            };
                                        "object" === Tt(n.perf) && null !== n.perf && Object.keys(e).forEach(function(t) {
                                            0 !== (0, Bt.getMetricFromPerformanceObject)(n.perf, t) && (a[e[t]] = (0, Bt.getMetricFromPerformanceObject)(n.perf, t) - o)
                                        }), a[e.resTs] = n.resTs - n.rqTs, (0, xt.bidCacheIdPixel)(r.amzniid, a), wt.store.dispatch({
                                            type: "UPDATE_BID_INFO_PROP",
                                            slotID: t,
                                            iid: r.amzniid,
                                            key: "pixelSent",
                                            value: !0
                                        })
                                    }
                                }
                            })
                        }), Be()
                    }, 5e3)
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-bidSetPixel__")
                }
            }

            function je(t) {
                t.forEach(function(t) {
                    return wt.store.dispatch({
                        type: "RECORD_BID_INFO_SENT",
                        bidInfo: t
                    })
                })
            }

            function xe(t) {
                var e = {};
                try {
                    var r = Ne(t.fid);
                    (e = {
                        status: t.state,
                        pubid: wt.store.getState().config.pubID,
                        lv: zt.LIBRARY_VERSION,
                        _type: "bidSetPixel"
                    }).toa = (0, Ct.safeObjectHasProp)(r.req, "timedOutAt") ? r.req.timedOutAt : "0", e.fbrq = r.req.rqTs, e.pto = r.req.timeout, e.ns = r.req.bidConfig.slots.length, e.bla = r.req.resTs - r.req.rqTs, e.reqindex = r.index, e.fid = t.fid, wt.store.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION && (e.eid = wt.store.getState().experiments.chunkRequests ? 2 : 1, e.fbindex = r.fbIndex, e.fbns = wt.store.getState().bidConfigs[t.fid.split("-")[0]].slots.length), t.delta && (e.delay = t.delta)
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-mapBidInfoToPixel__")
                }
                return e
            }

            function Ne(t) {
                var e = {
                    req: wt.store.getState().AAXReqs.filter(function(e) {
                        return e.bidReqID === t
                    })[0]
                };
                return e.index = wt.store.getState().AAXReqs.indexOf(e.req) + 1, wt.store.getState().experiments.chunkRequests ? e.fbIndex = wt.store.getState().AAXReqs.filter(function(t) {
                    return -1 === t.bidReqID.indexOf("-") || "0" === t.bidReqID.split("-")[1]
                }).map(function(t) {
                    return t.bidReqID.split("-")[0]
                }).indexOf(t.split("-")[0]) + 1 : e.fbIndex = e.index, e
            }

            function Me() {
                var t = ke(),
                    e = [];
                return t && Object.keys(wt.store.getState().slotBids).forEach(function(r) {
                    "video" !== wt.store.getState().slotBids[r][0].mediaType && wt.store.getState().slotBids[r].filter(function(t) {
                        return void 0 !== t.amzniid
                    }).forEach(function(n) {
                        var o = {
                                slotID: r,
                                iid: n.amzniid,
                                fid: n.bidReqID
                            },
                            a = [],
                            i = [];
                        if (r in t && (a = t[r].fetchedAt.filter(function(t) {
                                return t.AAXReqInfo && t.AAXReqInfo.bidReqID === n.bidReqID
                            }), i = t[r].targetedAt.filter(function(t) {
                                return t.targeting === n.amzniid
                            })), 0 < a.length ? 0 < a.length && i.length >= a.length && a.slice(a.length - 1)[0].ts > i.slice(a.length - 1)[0].ts ? 1 === t[r].fetchWithIID.filter(function(t) {
                                return t === n.amzniid
                            }).length ? o.state = 1 : o.state = 4 : -1 !== t[r].fetchWithIID.indexOf(n.amzniid) ? o.state = 3 : o.state = 2 : o.state = 0, 1 === o.state || 2 === o.state) {
                            var s = wt.store.getState().AAXReqs.filter(function(t) {
                                    return t.bidReqID === n.bidReqID
                                })[0].resTs,
                                c = He(s, t[r].fetchedAt, 2 === o.state);
                            c && (0, Ct.safeObjectHasProp)(c, "ts") && (o.delta = s - c.ts)
                        }
                        e.push(o)
                    })
                }), e
            }

            function He(t, e, r) {
                var n = e.map(function(e) {
                    var n = t - e.ts;
                    return r ? 0 <= n ? n : null : n <= 0 ? -n : null
                });
                return e[Ge(n)]
            }

            function Ge(t) {
                for (var e, r, n, o = 0; o < t.length; o++) "number" == typeof(e = t[o]) && ("number" != typeof n || e < r) && (n = o, r = e);
                return n
            }

            function Ue(t, e) {
                return wt.store.getState().AAXReqs.filter(function(t) {
                    return -1 < t.bidConfig.slots.map(function(t) {
                        return t.slotID
                    }).indexOf(e)
                })[t]
            }

            function ke() {
                if (!Xt.hasAdServerObjectLoaded()) return null;
                var t = wt.store.getState().gamSlotFetchLog.reduce(function(t, e) {
                    (0, Ct.safeObjectHasProp)(t, e.slotID) || (t[e.slotID] = {
                        fetchedAt: [],
                        targetedAt: []
                    });
                    var r = t[e.slotID];
                    return r.fetchedAt.push({
                        ts: e.ts,
                        AAXReqInfo: Ue(r.fetchedAt.length, e.slotID)
                    }), (0, Ct.safeObjectHasProp)(e.targeting, "amzniid") && (0, Ct.safeObjectHasProp)(e.targeting.amzniid, 0) ? r.targetedAt.push({
                        ts: e.ts - 1,
                        targeting: e.targeting.amzniid[0]
                    }) : r.targetedAt.push({
                        ts: e.ts - 1,
                        targeting: ""
                    }), t
                }, {});
                return Object.keys(t).forEach(function(e) {
                    var r = t[e];
                    r.fetchWithIID = r.fetchedAt.map(function(t) {
                        var e = He(t.ts, r.targetedAt, !0);
                        return e ? e.targeting : 0
                    }), t[e] = r
                }), t
            }

            function qe() {
                Fe(), Ke()
            }

            function Fe() {
                "http://" === zt.PROTOCOL && new Rt.default({
                    run: Xe.bind(null, ["http", "https"]),
                    cases: {
                        aax: ["http://aax.amazon-adsystem.com/dtb-ping", "https://aax.amazon-adsystem.com/dtb-ping"],
                        cf: ["http://c.amazon-adsystem.com/aax2/dtb-ping.txt", "https://c.amazon-adsystem.com/aax2/dtb-ping.txt"]
                    },
                    name: "https",
                    sample: "EXPERIMENT_HTTPS"
                })
            }

            function Ke() {
                new Rt.default({
                    run: Xe.bind(null, ["aax", "cf"]),
                    cases: {
                        tst: [zt.PROTOCOL + "aax.amazon-adsystem.com/dtb-ping", zt.PROTOCOL + "c.amazon-adsystem.com/dtb-ping"]
                    },
                    name: "edge-server",
                    pixelTemplate: {
                        env: zt.PROTOCOL.replace(/[\W]/g, "")
                    },
                    sample: "EXPERIMENT_EDGE"
                })
            }

            function Xe(t, e, r) {
                r = Qe(r), Ve((0, Ct.shuffleArray)(r), function() {
                    var n;
                    return e((Ft(n = {
                        pubID: wt.store.getState().config ? wt.store.getState().config.pubID : null
                    }, t[0], Ye(r[0])), Ft(n, t[1], Ye(r[1])), n))
                })
            }

            function Qe(t) {
                return t.map(function(t) {
                    return t + (-1 === t.indexOf("?") ? "?" : "&") + "cb=" + (0, Ct.getRand)()
                })
            }

            function Ye(t) {
                try {
                    var e = (0, Bt.getResourcePerformanceObject)(window, t);
                    return (0, Bt.getMetricFromPerformanceObject)(e, "responseEnd") - (0, Bt.getMetricFromPerformanceObject)(e, "fetchStart")
                } catch (t) {
                    return (0, Nt.reportError)(t, "__getRoundTripTime-error__"), 0
                }
            }

            function Ve(t, e) {
                var r = {
                    requests: {},
                    callback: !1
                };

                function n(t) {
                    r.requests[t] = !0, !r.callback && Je(r.requests) && e()
                }
                t.map(function(t) {
                    r.requests[t] = !1
                }), t.map(function(t) {
                    (0, Mt.xhrGet)({
                        url: t,
                        onload: n.bind(null, t),
                        onerror: n.bind(null, t, !0)
                    })
                })
            }

            function Je(t) {
                var e = Object.keys(t);
                return e.map(function(e) {
                    return t[e]
                }).filter(function(t) {
                    return t
                }).length === e.length
            }

            function We() {
                Xt.hasAdServerObjectLoaded() ? De("noRequest") : Xt.isCommandQueueDefined() && Xt.cmdQueuePush(function() {
                    De("noRequest")
                })
            }

            function $e(t) {
                return "video" !== t.mediaType
            }

            function Ze(t) {
                Xt.isCommandQueueDefined() && (wt.store.dispatch({
                    type: "REQUESTED_BID_FOR_ADSERVER_SLOTS",
                    slotIDs: t
                }), wt.store.dispatch({
                    type: "REQUESTED_BID_FOR_PMP_ONLY_DFP_SLOTS",
                    slotIDs: t
                }), Xt.cmdQueuePush(function() {
                    var e = q();
                    "0" === Xt.getTargeting("amznbid")[0] && Ie(), k(t, e.map(function(t) {
                        return Xt.getSlotElementId(t)
                    })) ? e.forEach(function(e) {
                        (0, Ct.inArray)(t, Xt.getSlotElementId(e)) && !ye(e) && De("bidInFlight", e)
                    }) : Xt.cmdQueuePush(function() {
                        De("bidInFlight")
                    })
                }))
            }

            function et() {
                return window.AMP_CONTEXT_DATA && "AMP-AD" === window.AMP_CONTEXT_DATA.tagName
            }

            function tt(t) {
                return (0, Ct.safeObjectHasProp)(t, "type") && "amp" === t.type && !(t instanceof Document)
            }

            function rt(t, e) {
                return (0, Ct.safeObjectHasProp)(e, "ampEnv") && e.ampEnv || tt(t)
            }

            function nt(t) {
                return t.split("x").map(function(t) {
                    return parseInt(t, 10)
                })
            }

            function ot(t, e, r) {
                try {
                    (0, xt.sendPixels)()
                } catch (t) {
                    (0, Nt.reportError)(t, "__sendPixels-renderImp__")
                }
                if (rt(t, r) && et()) ie(t, r);
                else {
                    var n = !1;
                    e && "string" == typeof e && 0 === e.indexOf("sp|") && (e = e.substring(3), n = !0);
                    var o, a = e || t.amzniid,
                        i = X(a, n),
                        s = i.slotBid,
                        c = i.dealId;
                    if (o = c && 1 <= c.length ? nt("sp" === c ? s.amznsz_sp : Q(a, s, c)) : nt(s.size), 1 !== arguments.length)
                        if (s) {
                            s.bidState === zt.BID_STATES.rendered && Ae(s), wt.store.dispatch({
                                type: "BID_STATE_CHANGE",
                                slotID: s.slotID,
                                _targetingSetID: s._targetingSetID,
                                bidState: zt.BID_STATES.rendered,
                                dealId: c,
                                ts: Date.now()
                            }), f.addTimer("imp");
                            var d = s.host,
                                u = "amznad" + Math.round(1e6 * Math.random()),
                                l = {
                                    bidID: e,
                                    doc: t,
                                    pp: at("amznbid", s, c),
                                    host: d,
                                    adID: u,
                                    sizes: o,
                                    amznp: at("amznp", s, c),
                                    crID: at("crid", s, c),
                                    fif: !1,
                                    dealId: c,
                                    isSharedPMP: n,
                                    cfe: s.cfe
                                };
                            "1" === s.fif ? (l.fif = "1", wt.store.dispatch({
                                type: "UPDATE_BID_INFO_PROP",
                                slotID: s.slotID,
                                iid: e,
                                key: "doc",
                                value: t,
                                dealId: c
                            }), (0, Mt.loadScriptTag)(ne(l), null, document)) : wt.store.getState().amznCsmParams.ev ? it(l, t) : ce(l), _e(t, o)
                        } else(0, Nt.reportError)(new Error("Invalid bid ID tried to render"), "__error-invalid_bid_id_render__");
                    else se({
                        doc: s.doc,
                        bidID: s.amzniid,
                        sizes: o,
                        html: t.html
                    })
                }
            }

            function at(t, e, r) {
                return r && 1 <= r.length ? "sp" === r ? e[t + "_sp"] : "" : e[t] ? e[t] : ""
            }

            function it(t, e) {
                var r = e.createElement("script");
                r.type = "text/javascript", r.async = !0, t.viewabilityParams = {
                    doc: e,
                    bidID: t.bidID,
                    states: {
                        csmLoaded: !1,
                        iframeLoaded: !1,
                        shouldRunViewability: !0
                    }
                }, t.amznCsmParams = wt.store.getState().amznCsmParams;
                var n = de.bind(null, t.viewabilityParams, t.amznCsmParams);
                (0, Mt.addOnLoadFunction)(r, function() {
                    t.viewabilityParams.states.csmLoaded = !0, n()
                });
                try {
                    r.onerror = function(t) {
                        return (0, xt.noBidCacheIdPixel)({
                            _type: "csm_fail",
                            ts: Date.now(),
                            msg: t.message
                        })
                    }
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-csm_onerror__")
                }
                ce(t, n), r.src = t.amznCsmParams.cfn, te(e, r)
            }

            function st(t) {
                return "//" === t.substring(0, 2) ? t : "//c.amazon-adsystem.com/" + t
            }

            function ct(t) {
                try {
                    var e = {
                        ev: !1,
                        cfn: wt.store.getState().cfg.CSM_JS
                    };
                    (0, Ct.safeObjectHasProp)(t, "ev") && (e.ev = t.ev), (0, Ct.safeObjectHasProp)(t, "cfn") && (e.cfn = st(t.cfn)), (0, Ct.safeObjectHasProp)(t, "amznCsmParams") && (e = t.amznCsmParams, (0, Ct.safeObjectHasProp)(t.amznCsmParams, "cfn") && (e.cfn = st(t.amznCsmParams.cfn))), wt.store.dispatch({
                        type: "SET_AMZNCSMPARAMS",
                        amznCsmParams: e
                    })
                } catch (t) {
                    (0, Nt.reportError)(t, "__setCsmState__")
                }
            }

            function dt(t) {
                E(t), (0, Ct.safeObjectHasProp)(t, "slots") && (wt.store.dispatch({
                    type: "UPDATE_SLOT_BIDS",
                    bids: V(t)
                }), ct(t)), h(t)
            }

            function ut() {
                return "number" == typeof wt.store.getState().cfg.MAX_SLOTS_PER_REQUEST && 0 < wt.store.getState().cfg.MAX_SLOTS_PER_REQUEST
            }

            function lt(t, e) {
                var r = St.bind(null, t, e);
                void 0 === wt.store.getState().gdpr || null === wt.store.getState().gdpr ? (wt.store.dispatch({
                    type: "ADD_GDPR_QUE_ITEM",
                    func: r
                }), 1 === wt.store.getState().gdprQue.length && (0, Pt.GDPR)(wt.store.getState().config.gdpr, ft)) : r()
            }

            function ft(t) {
                wt.store.dispatch({
                    type: "SET_GDPR_CONFIG",
                    config: t
                }), wt.store.getState().gdprQue.map(function(t) {
                    try {
                        t()
                    } catch (t) {
                        (0, Nt.reportError)(t, "__gdpr_que__")
                    }
                }), wt.store.dispatch({
                    type: "CLEAR_GDPR_QUE"
                })
            }

            function pt(t) {
                var e = [];
                try {
                    e = t.filter(function(t) {
                        return "fluid" !== t
                    }).map(function(t) {
                        return [t.getWidth(), t.getHeight()]
                    })
                } catch (t) {}
                return e
            }

            function gt(t) {
                var e = P().split("x");
                return {
                    slotID: t.getSlotElementId(),
                    slotName: t.getAdUnitPath(),
                    sizes: pt(t.getSizes(Number(e[0]), Number(e[1])))
                }
            }

            function _t(t) {
                return t.filter(function(t) {
                    return 0 !== t.sizes.length
                })
            }

            function mt(t) {
                return _t((t = t || q()).map(function(t) {
                    return gt(t)
                }))
            }

            function St(t, e) {
                var r = !1;
                !0 === wt.store.getState().config.simplerGPT && (!(0, Ct.safeObjectHasProp)(t, "slots") || 0 < t.slots.length && !(0, Ct.safeObjectHasProp)(t.slots[0], "slotID")) && (0 === q().length ? ((0, Nt.reportError)(new Error("fetchBids was called in simplerGPT mode before any slots were defined in GPT"), !0), r = !0, t.slots = []) : (t.slots = mt(t.slots), 0 === t.slots.length && ((0, Nt.consoleWarn)(new Error("No GPT slots provided to apstag.fetchBids() had valid sizes"), !0), r = !0)));
                var n, o, a = Et(t.slots);
                a && (t.slots = a);
                try {
                    n = (n = l(n = t.timeout || wt.store.getState().config.bidTimeout || wt.store.getState().cfg.DEFAULT_TIMEOUT)) || wt.store.getState().cfg.DEFAULT_TIMEOUT, "function" != typeof e && (void 0 !== e && (0, Nt.reportError)(new Error("Invalid callback function provided to apstag.fetchBids"), "__error-invalid_callback_fetchbids_", !0), e = function() {}), t.bidReqID = (0, Ct.getRand)(), e = y(ge(e, t), n)
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-fetchBids__", !0)
                }
                if (0 === t.slots.length) return !1 === r && (0, Nt.reportError)(new Error("No slots provided to apstag.fetchBids"), "__error-no_slots_provided_bid_request__", !0), void setTimeout(e.bind(null, []), 10);
                if (Ze(t.slots.filter($e).map(Ee)), wt.store.dispatch({
                        type: "NEW_FETCH_BID_REQUEST",
                        fid: t.bidReqID,
                        pto: n
                    }), wt.store.dispatch({
                        type: "RECORD_ORIGINAL_BID_CONFIG",
                        bidConfig: t
                    }), (0, Lt.isDebugEnabled)("fake_bids")) be(t, e);
                else if (zt.HAS_XHR_SUPPORT)
                    if (wt.store.dispatch({
                            type: "SHOULD_CHUNK_REQUESTS",
                            value: (0, Ct.shouldSample)(wt.store.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION)
                        }), wt.store.getState().experiments.chunkRequests && ut()) {
                        o = bt(t);
                        for (var i = 0; i < o.length; i++) o[i].bidReqID = t.bidReqID + "-" + i;
                        wt.store.dispatch({
                            type: "ADD_CHUNKED_REQUESTS",
                            fid: t.bidReqID,
                            numChunks: o.length
                        }), o.forEach(function(t) {
                            m(z(t, n), e, t.bidReqID)
                        })
                    } else m(z(t, n), e, t.bidReqID);
                else(0, Mt.loadScriptTag)(z(t, n), e)
            }

            function bt(t) {
                for (var e = Math.ceil(t.slots.length / wt.store.getState().cfg.MAX_SLOTS_PER_REQUEST), r = new Array(e), n = 0; n < e; n++) {
                    var o = n * wt.store.getState().cfg.MAX_SLOTS_PER_REQUEST;
                    r[n] = {
                        slots: t.slots.slice(o, o + wt.store.getState().cfg.MAX_SLOTS_PER_REQUEST)
                    }
                }
                return r.map(function(e) {
                    return At({}, t, e)
                })
            }

            function Et(t) {
                try {
                    return t.map(function(t) {
                        return t.sizes && (0, Ct.isArray)(t.sizes) && !(0, Ct.isArray)(t.sizes[0]) ? At({}, t, {
                            sizes: [t.sizes]
                        }) : t
                    })
                } catch (t) {
                    (0, Nt.reportError)(t, "__error-adjustSlotArraySizes__", !0)
                }
                return !1
            }

            function ht(t) {
                (0, Ct.safeObjectHasProp)(wt.store.getState().config, "adServer") ? Xt.isSupported ? (Z(t), Oe()) : (0, Nt.reportError)(new Error("apstag.setDisplayBids called with unsupported ad server: " + wt.store.getState().config.adServer), "__error-invalid_ad_server_setdisplaybids__", !0): (0, Nt.reportError)(new Error("apstag.setDisplayBids called without specifying ad server"), "__error-no_ad_server_setdisplaybids__", !0)
            }

            function vt(t, e) {
                switch (t.adServer) {
                    case "appnexus":
                        Xt = Ht.displayAdServerAppNexus;
                        break;
                    case "googletag":
                        Xt = Gt.displayAdServerGoogletag;
                        break;
                    case "sas":
                        Xt = kt.displayAdServerSAS;
                        break;
                    default:
                        Xt = Ut.displayAdServerDefault
                }
                var r = j(t);
                We(), "success" === r && "function" == typeof e && e()
            }

            function yt() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "display";
                switch (t) {
                    case "display":
                        return zt.DISPLAY_TARGETING_KEYS;
                    case "video":
                        return zt.VIDEO_TARGETING_KEYS;
                    default:
                        return x() && (0, Ct.isArray)(wt.store.getState().targetingKeys[t]) ? wt.store.getState().targetingKeys[t] : "unknown targeting type " + t
                }
            }

            function Ot() {
                return wt.store.getState().AAXReqs.reduce(function(t, e) {
                    return e.bidConfig.slots.reduce(function(t, e) {
                        return t[e.slotID] = e.slotName, t
                    }, t)
                }, {})
            }

            function Dt(t, e) {
                var r = e;
                return function() {
                    return c({
                        method: t,
                        args: arguments
                    }), r.apply(void 0, arguments)
                }
            }

            function It(t, e) {
                return function() {
                    try {
                        return t.apply(void 0, arguments)
                    } catch (t) {
                        return (0, Nt.reportError)(t, e, !0), null
                    }
                }
            }
            f.addTimer("tlt");
            try {
                (0, Ct.safeObjectHasProp)(window, "apstag") && (0, Ct.safeObjectHasProp)(window.apstag, "_Q") && 0 < window.apstag._Q.length && wt.store.dispatch({
                    type: "SET_Q",
                    Q: window.apstag._Q
                })
            } catch (e) {
                (0, Nt.reportError)(e, "__error-storeApstagQ__")
            }
            window.apstag = (Pe = {
                    punt: dt,
                    init: vt,
                    debug: Lt.debugPublicApi,
                    _getSlotIdToNameMapping: Ot,
                    targetingKeys: yt,
                    fetchBids: lt,
                    setDisplayBids: ht,
                    renderImp: ot,
                    bids: dt
                }, Object.keys(Pe).forEach(function(t) {
                    Pe[t] = Dt(t, Pe[t])
                }), r ? (0, Lt.enableDebugConsole)(!0, e) : t && (0, Lt.enableDebugConsole)(!1, e), Object.keys(Pe).forEach(function(t) {
                    Pe[t] = It(Pe[t], t)
                }), Pe),
                function() {
                    try {
                        qt.IS_RENDER_BIDDING_PAGELOAD && (0, qt.setRenderBiddingHosts)(), wt.store.dispatch({
                            type: "SHOULD_CF_ROUTE",
                            value: (0, Ct.shouldSample)(wt.store.getState().cfg.CF_ROUTING_RATE)
                        }), wt.store.getState().experiments.shouldCFRoute && !qt.IS_RENDER_BIDDING_PAGELOAD && wt.store.dispatch({
                            type: "SET_HOST",
                            hostName: "DEFAULT_AAX_BID_HOST",
                            hostValue: "c.amazon-adsystem.com"
                        }), wt.store.dispatch({
                            type: "SHOULD_SAMPLE_LATENCY",
                            value: (0, Ct.shouldSample)(wt.store.getState().cfg.LATENCY_SAMPLING_RATE)
                        }), wt.store.dispatch({
                            type: "SHOULD_SAMPLE_SLOT_RENDER",
                            value: (0, Ct.shouldSample)(wt.store.getState().cfg.SLOT_RENDER_SAMPLING_RATE)
                        });
                        var e = wt.store.getState();
                        (e.experiments.shouldSampleLatency || e.displayAdServer.shouldSampleRender) && we(), e.displayAdServer.shouldSampleRender && ze(), e.experiments.shouldSampleLatency && (Te(), Be()), qe()
                    } catch (e) {
                        (0, Nt.reportError)(e, "__error-sampleLatency__")
                    }
                    try {
                        B()
                    } catch (e) {
                        (0, Nt.reportError)(e, "__error-doLast__")
                    }
                    if (!et()) try {
                        var t = {};
                        t.url = wt.store.getState().cfg.CSM_RTB_COMMUNICATOR_JS;
                        var r = function(t) {
                            t && "object" !== (void 0 === t ? "undefined" : Tt(t)) || (t = "Request Timeout or Error"), (0, Nt.reportError)({
                                message: "csm-rtb-comm-js loading failed",
                                name: t
                            }, "__csm-rtb-comm-js__")
                        };
                        t.onload = function(e) {
                            e.readyState === XMLHttpRequest.DONE && 200 === e.status ? eval(e.responseText) : r(JSON.stringify({
                                status: e.statusText,
                                response: e.responseXML
                            }))
                        }, t.onerror = r, t.ontimeout = r, (0, Mt.xhrGet)(t)
                    } catch (e) {
                        (0, Nt.reportError)(e, "__load-csm-rtb-comm-js__")
                    }(0, Lt.pixelDebugModes)()
                }()
        }())
    } catch (e) {
        (0, Nt.reportError)(e, "__error-global__")
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    };
    e.default = function(t) {
        var e = this,
            r = t.run,
            s = t.cases,
            c = t.name,
            d = t.sample,
            u = void 0 === d ? 1 : d,
            l = t.delay,
            f = void 0 === l ? 5e3 : l,
            p = t.pixelTemplate,
            g = void 0 === p ? {} : p;
        this.testId = (0, a.getRand)();
        var _ = function(t) {
                m("pixeling"), (t = n({}, g, t))._type = encodeURIComponent(c + "-tst"), 1 < Object.keys(s).length && (t._case = encodeURIComponent(e.runningCase)), (0, i.noBidCacheIdPixel)(t), m("done")
            },
            m = function(t) {
                e.status = t, o.store.dispatch({
                    type: "UPDATE_TEST",
                    id: e.testId,
                    status: e.status,
                    name: e.name,
                    case: e.runningCase
                })
            };
        this.name = c, this.sampleRate = u, this.runningCase = "", this.status = "", m("config"), m("waiting"), setTimeout(function() {
            "string" == typeof u && (u = o.store.getState().cfg[u]), (0, a.shouldSample)(u) ? (m("setup"), e.runningCase = (0, a.getRandomArrayElement)(Object.keys(s)), m("running"), r(_, s[e.runningCase])) : m("nosample")
        }, f)
    };
    var o = r(2),
        a = r(0),
        i = r(4)
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isSafeFrame = function(t) {
        return !(!(0, o.safeObjectHasProp)(t, "$sf") || !(0, o.safeObjectHasProp)(t.$sf, "ext"))
    }, e.expandSf = function(t, e) {
        try {
            var r = e.innerWidth,
                o = e.innerHeight,
                a = parseInt(t[0], 10),
                i = parseInt(t[1], 10),
                s = a - r,
                c = i - o,
                d = e.sfAPI || e.$sf.ext;
            d && (r === a && o === i || (d.register(a, i), d.expand({
                r: s,
                b: c,
                push: !0
            })))
        } catch (t) {
            (0, n.reportError)(t, "__error-expandSF__")
        }
    }, e.is1x1Creative = function(t) {
        return 1 === t.innerWidth && 1 === t.innerHeight
    };
    var n = r(3),
        o = r(0)
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.displayAdServerAppNexus = void 0;
    var n = r(0),
        o = {
            isSupported: !0,
            needNewBidObject: !1,
            cmdQueuePush: function(t) {
                window.apntag.anq.push(t)
            },
            setTargeting: function(t, e, r) {
                void 0 === r ? window.apntag.requests.keywords[t] = e : r.keywords[t] = e
            },
            getTargeting: function(t, e) {
                var r;
                return void 0 === (r = void 0 === e ? ((0, n.safeObjectHasProp)(window.apntag.requests, "keywords") || (window.apntag.requests.keywords = {}), window.apntag.requests.keywords[t]) : ((0, n.safeObjectHasProp)(e, "keywords") || (e.keywords = {}), e.keywords[t])) ? [] : [r]
            },
            clearTargeting: function(t, e) {
                void 0 === e ? delete window.apntag.requests.keywords[t] : delete e.keywords[t]
            },
            slotRenderEndedEvent: function(t) {
                window.apntag.onEvent("adLoaded", t)
            },
            hasAdServerObjectLoaded: function() {
                return void 0 !== window.apntag && (0, n.safeObjectHasProp)(window.apntag, "loaded") && !0 === window.apntag.loaded
            },
            isCommandQueueDefined: function() {
                return void 0 !== window.apntag && void 0 !== window.apntag.anq
            },
            getSlotElementId: function(t) {
                return t.targetId
            },
            getSlots: function() {
                return Object.keys(window.apntag.requests.tags).map(function(t) {
                    return window.apntag.requests.tags[t]
                })
            },
            appendTargeting: function() {}
        };
    e.displayAdServerAppNexus = o
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.displayAdServerGoogletag = void 0;
    var n = r(0),
        o = {
            isSupported: !0,
            needNewBidObject: !1,
            cmdQueuePush: function(t) {
                googletag.cmd.push(t)
            },
            setTargeting: function(t, e, r) {
                void 0 === r ? googletag.pubads().setTargeting(t, e) : r.setTargeting(t, e)
            },
            getTargeting: function(t, e) {
                return void 0 === e ? googletag.pubads().getTargeting(t) : e.getTargeting(t)
            },
            clearTargeting: function(t, e) {
                void 0 === e ? googletag.pubads().clearTargeting(t) : e.clearTargeting(t)
            },
            slotRenderEndedEvent: function(t) {
                googletag.pubads().addEventListener("slotRenderEnded", t)
            },
            hasAdServerObjectLoaded: function() {
                return "undefined" != typeof googletag && (0, n.safeObjectHasProp)(googletag, "apiReady") && !0 === googletag.apiReady
            },
            isCommandQueueDefined: function() {
                return "undefined" != typeof googletag && void 0 !== googletag.cmd
            },
            getSlotElementId: function(t) {
                return t.getSlotElementId()
            },
            getSlots: function() {
                return googletag.pubads().getSlots()
            },
            appendTargeting: function() {}
        };
    e.displayAdServerGoogletag = o
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.displayAdServerDefault = {
        isSupported: !1,
        needNewBidObject: !1,
        cmdQueuePush: function() {},
        setToBeginningOfCmdQueue: function() {},
        setTargeting: function() {},
        getTargeting: function() {
            return []
        },
        clearTargeting: function() {},
        slotRenderEndedEvent: function() {},
        hasAdServerObjectLoaded: function() {},
        isCommandQueueDefined: function() {},
        getSlotElementId: function() {},
        getSlots: function() {
            return []
        },
        appendTargeting: function() {}
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.displayAdServerSAS = void 0;
    var n = r(0),
        o = {
            isSupported: !0,
            needNewBidObject: !0,
            cmdQueuePush: function(t) {
                window.sas.cmd.push(t)
            },
            setTargeting: function() {},
            getTargeting: function() {
                return []
            },
            clearTargeting: function() {},
            slotRenderEndedEvent: function() {},
            hasAdServerObjectLoaded: function() {
                return (0, n.safeObjectHasProp)(window, "sas") && (0, n.safeObjectHasProp)(window.sas, "__smartLoaded") && !0 === window.sas.__smartLoaded
            },
            isCommandQueueDefined: function() {
                return !!(0, n.safeObjectHasProp)(window, "sas") && (0, n.safeObjectHasProp)(window.sas, "cmd")
            },
            getSlotElementId: function() {},
            getSlots: function() {
                return []
            },
            appendTargeting: function(t) {
                t.forEach(function(t) {
                    (0, n.safeObjectHasProp)(t, "slotID") && -1 < t.slotID.indexOf("_") && (t.sasTargeting = t.helpers.targetingKeys.reduce(function(e, r) {
                        return 0 < e.length && (e += ";"), e + r + "_" + t.slotID.split("_")[1] + "=" + t.targeting[r]
                    }, ""))
                })
            }
        };
    e.displayAdServerSAS = o
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IS_RENDER_BIDDING_PAGELOAD = void 0, e.getPageLoadID = function() {
        return c ? window[n.RB_PAGELOAD_ID_GLOBAL] : (0, o.getRand)()
    }, e.setRenderBiddingHosts = function() {
        var t = s(i) ? i : "aax";
        a.store.dispatch({
            type: "SET_HOST",
            hostName: "DEFAULT_AAX_BID_HOST",
            hostValue: t + ".amazon-adsystem.com"
        }), a.store.dispatch({
            type: "SET_HOST",
            hostName: "DEFAULT_AAX_PIXEL_HOST",
            hostValue: t + ".amazon-adsystem.com"
        })
    }, e.isFirstAAXRequest = function(t) {
        return 1 === t.AAXReqs.length
    }, e.isRenderBiddingGetBidsRequest = function(t) {
        return -1 !== t.indexOf(n.IS_GET_BIDS_URL_PARAM)
    }, e.injectCBForGetBids = function(t, e) {
        if (-1 < e.indexOf('"cb":')) return e;
        var r = e.split(/\}\)$/),
            n = t.split("?")[1].split("&").filter(function(t) {
                return -1 < t.indexOf("cb=")
            })[0].split("=")[1];
        return r[0] + (-1 < e.indexOf("{}") ? "" : ",") + '"cb":"' + n + '"})'
    };
    var n = r(1),
        o = r(0),
        a = r(2),
        i = (0, o.getCookieValue)(n.RB_HOST_COOKIE_KEY);

    function s(t) {
        return "" !== t
    }
    var c = e.IS_RENDER_BIDDING_PAGELOAD = (0, o.safeObjectHasProp)(window, n.RB_PAGELOAD_ID_GLOBAL) && s(i)
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isApstagLibrary = function(t) {
        return void 0 !== t && !!(0, o.isObject)(t) && (0, o.safeObjectHasProp)(t, "debug")
    }, e.hasApstagJsLoaded = function(t) {
        return !!(0, o.safeObjectHasProp)(t, n.APSTAG_LOADED_VARIABLE) && !0 === t[n.APSTAG_LOADED_VARIABLE]
    };
    var n = r(1),
        o = r(0)
}]);
//# sourceMappingURL=apstag.js.map