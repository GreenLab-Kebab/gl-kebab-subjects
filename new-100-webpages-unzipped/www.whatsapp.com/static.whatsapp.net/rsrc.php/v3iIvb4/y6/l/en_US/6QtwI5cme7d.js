if (self.CavalryLogger) {
    CavalryLogger.start_js(["iiRTm"]);
}

__d("MessagingTag", [], (function(a, b, c, d, e, f) {
    e.exports = {
        GROUPS: "groups",
        UNREAD: "unread",
        FLAGGED: "flagged",
        ACTION_ARCHIVED: "action:archived",
        INBOX: "inbox",
        MARKETPLACE_FOLDER: "marketplace_folder",
        OTHER: "other",
        PENDING: "pending",
        MONTAGE: "montage",
        PAGES: "pages",
        PAGE_BACKGROUND: "page_background",
        ACTION_COPIED_MESSAGE: "action:copy_message",
        ACTION_COPIED_SELF_MESSAGE: "copy_self_message",
        ACTION_COPIED_ATTACHMENT: "action:copy_attachment",
        ACTION_COPIED_SELF_ATTACHMENT: "copy_self_attachment",
        EVENT: "event",
        SENT: "sent",
        SPAM: "spam",
        UPDATES: "broadcasts_inbox",
        BCC: "header:bcc",
        FILTERED_CONTENT: "filtered_content",
        FILTERED_CONTENT_BH: "filtered_content_bh",
        FILTERED_CONTENT_ACCOUNT: "filtered_content_account",
        FILTERED_CONTENT_QUASAR: "filtered_content_quasar",
        FILTERED_CONTENT_INVALID_APP: "filtered_content_invalid_app",
        ONE_WAY_MESSAGE: "one_way_message",
        UNAVAILABLE_ATTACHMENT: "unavailable_attachment",
        ARCHIVED: "archived",
        EMAIL: "email",
        VOICEMAIL: "voicemail",
        SPAM_SPOOFING: "spam:spoofing",
        SPOOF_WARNING: "MTA:spoof_warning",
        SMS_TAG_ROOT: "SMSShortcode:",
        APP_ID_ROOT: "app_id:",
        DOMAIN_AUTH_PASS: "MTA:dmarc:pass",
        DOMAIN_AUTH_FAIL: "MTA:dmarc:fail",
        MTA_SYSTEM_MESSAGE: "MTA:system_message",
        EMAIL_MESSAGE: "source:email",
        ONE_CLICK_MESSAGE: "page_one_click_message",
        MARKETPLACE: "marketplace",
        ROOM: "room",
        PAGE_FOLLOWUP: "page_followup",
        MESSAGE_REQUEST_AGGREGATION_UNIT: "message_request_aggregation_unit",
        IRIS_MAPPING: {
            FOLDER_INVALID: null,
            FOLDER_INBOX: "inbox",
            FOLDER_OTHER: "other",
            FOLDER_SPAM: "spam",
            FOLDER_PENDING: "pending",
            FOLDER_MONTAGE: "montage",
            FOLDER_HIDDEN: "hidden",
            FOLDER_DISABLED: "disabled",
            FOLDER_PAGE_BACKGROUND: "page_background",
            FOLDER_PAGE_DONE: "page_done",
            FOLDER_BLOCKED: "blocked"
        }
    }
}), null);
__d("CallbackManagerController", ["ErrorGuard"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g;
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.$1 = [], this.$2 = [void 0], this.$3 = a
        }
        var c = a.prototype;
        c.executeOrEnqueue = function(a, b, c) {
            c = c || {};
            var d = this.$4(b, a, c);
            if (d) return 0;
            this.$2.push({
                fn: b,
                request: a,
                options: c
            });
            d = this.$2.length - 1;
            this.$1.push(d);
            return d
        };
        c.unsubscribe = function(a) {
            delete this.$2[a]
        };
        c.reset = function() {
            this.$2 = []
        };
        c.getRequest = function(a) {
            return this.$2[a]
        };
        c.runPossibleCallbacks = function(a) {
            __p && __p();
            var b = this,
                c = this.$1;
            this.$1 = [];
            var d = [];
            c.forEach(function(c) {
                var e = b.$2[c];
                if (!e) return;
                e = b.$3(e.request, babelHelpers["extends"]({}, e.options, a));
                e ? d.push({
                    args: e,
                    id: c
                }) : b.$1.push(c)
            });
            d.forEach(function(a) {
                var c = a.args;
                a = a.id;
                var d = b.$2[a];
                if (!d) return;
                delete b.$2[a];
                b.$5(d.fn, c, d.request)
            })
        };
        c.$4 = function(a, b, c) {
            c = this.$3(b, c);
            c && this.$5(a, c, b);
            return !!c
        };
        c.$5 = function(a, c, d) {
            d = {
                ids: d
            };
            (g || (g = b("ErrorGuard"))).applyWithGuard(a, d, c)
        };
        return a
    }();
    e.exports = a
}), null);
__d("KeyedCallbackManager", ["CallbackManagerController", "ErrorGuard"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g;
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = {}, this.$2 = new(b("CallbackManagerController"))(this.$3.bind(this))
        }
        var c = a.prototype;
        c.executeOrEnqueue = function(a, c) {
            __p && __p();
            if (!(a instanceof Array)) {
                var d = a,
                    e = c;
                a = [a];
                c = function(a) {
                    e(a[d])
                }
            }
            a = a.filter(function(a) {
                var c = a !== null && a !== void 0;
                c || (g || (g = b("ErrorGuard"))).applyWithGuard(function() {
                    throw new Error("KeyedCallbackManager.executeOrEnqueue: key " + JSON.stringify(a) + " is invalid")
                }, null, []);
                return c
            });
            return this.$2.executeOrEnqueue(a, c)
        };
        c.unsubscribe = function(a) {
            this.$2.unsubscribe(a)
        };
        c.reset = function() {
            this.$2.reset(), this.$1 = {}
        };
        c.getUnavailableResources = function(a) {
            var b = this;
            a = this.$2.getRequest(a);
            var c = [];
            a && (c = a.request.filter(function(a) {
                return !b.$1[a]
            }));
            return c
        };
        c.getUnavailableResourcesFromRequest = function(a) {
            a = Array.isArray(a) ? a : [a];
            return a.filter(function(a) {
                if (a !== null && a !== void 0) return !this.$1[a]
            }, this)
        };
        c.addResourcesAndExecute = function(a) {
            Object.assign(this.$1, a), this.$2.runPossibleCallbacks()
        };
        c.setResource = function(a, b) {
            this.$1[a] = b, this.$2.runPossibleCallbacks()
        };
        c.getResource = function(a) {
            return this.$1[a]
        };
        c.getAllResources = function() {
            return this.$1
        };
        c.dumpResources = function() {
            var a = {};
            for (var b in this.$1) {
                var c = this.$1[b];
                typeof c === "object" && (c = babelHelpers["extends"]({}, c));
                a[b] = c
            }
            return a
        };
        c.$3 = function(a) {
            var b = {};
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = this.$1[d];
                if (typeof e === "undefined") return !1;
                b[d] = e
            }
            return [b]
        };
        return a
    }();
    e.exports = a
}), null);
__d("BaseAsyncLoader", ["KeyedCallbackManager", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {};

    function h(a, c, d) {
        __p && __p();
        var e = new(b("KeyedCallbackManager"))(),
            f = !1,
            g = [];

        function h() {
            if (!g.length || f) return;
            f = !0;
            b("setTimeoutAcrossTransitions")(j, 0)
        }

        function i(a) {
            f = !1, a.forEach(e.unsubscribe.bind(e)), h()
        }

        function j() {
            __p && __p();
            var b = {},
                c = [];
            g = g.filter(function(a) {
                var d = e.getUnavailableResources(a);
                if (d.length) {
                    d.forEach(function(a) {
                        b[a] = !0
                    });
                    c.push(a);
                    return !0
                }
                return !1
            });
            var h = Object.keys(b);
            h.length ? d(a, h, c, k.bind(null, c), l.bind(null, c)) : f = !1
        }

        function k(a, b) {
            b = b.payload[c] || b.payload;
            e.addResourcesAndExecute(b);
            i(a)
        }

        function l(a) {
            i(a)
        }
        return {
            get: function(a, b) {
                a = e.executeOrEnqueue(a, b);
                b = e.getUnavailableResources(a);
                b.length && (g.push(a), h())
            },
            getCachedKeys: function() {
                return Object.keys(e.getAllResources())
            },
            getNow: function(a) {
                return e.getResource(a) || null
            },
            set: function(a) {
                e.addResourcesAndExecute(a)
            }
        }
    }

    function a(a, b) {
        throw new Error("BaseAsyncLoader can't be instantiated")
    }
    Object.assign(a.prototype, {
        _getLoader: function() {
            g[this._endpoint] || (g[this._endpoint] = h(this._endpoint, this._type, this.send));
            return g[this._endpoint]
        },
        get: function(a, b) {
            return this._getLoader().get(a, b)
        },
        getCachedKeys: function() {
            return this._getLoader().getCachedKeys()
        },
        getNow: function(a) {
            return this._getLoader().getNow(a)
        },
        reset: function() {
            g[this._endpoint] = null
        },
        set: function(a) {
            this._getLoader().set(a)
        }
    });
    e.exports = a
}), null);
__d("AjaxLoader", ["AsyncRequest", "BaseAsyncLoader", "LogHistory"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = b("LogHistory").getInstance("ajax_loader");

    function a(a, b) {
        this._endpoint = a, this._type = b
    }
    Object.assign(a.prototype, b("BaseAsyncLoader").prototype);
    a.prototype.send = function(a, c, d, e, f) {
        new(b("AsyncRequest"))().setURI(a).setData({
            ids: c
        }).setMethod("POST").setReadOnly(!0).setAllowCrossPageTransition(!0).setHandler(function(a) {
            e(a)
        }).setTimeoutHandler(10 * 1e3, function(a) {
            f(), g.error("fetch_timeout", "{}")
        }).setErrorHandler(function(a) {
            f(), g.error("fetch_error", JSON.stringify({
                error_type: a.errorSummary,
                error_text: a.errorDescription
            }))
        }).send()
    };
    e.exports = a
}), null);
__d("AsyncLoader", ["AsyncRequest", "BaseAsyncLoader"], (function(a, b, c, d, e, f) {
    function a(a, b) {
        this._endpoint = a, this._type = b
    }
    Object.assign(a.prototype, b("BaseAsyncLoader").prototype);
    a.prototype.send = function(a, c, d, e, f) {
        new(b("AsyncRequest"))(a).setData({
            ids: c
        }).setHandler(e).setErrorHandler(f).setAllowCrossPageTransition(!0).setMethod("GET").setReadOnly(!0).send()
    };
    e.exports = a
}), null);
__d("ChannelConstants", [], (function(a, b, c, d, e, f) {
    var g = "channel/";
    a = {
        CHANNEL_MANUAL_RECONNECT_DEFER_MSEC: 2e3,
        MUTE_WARNING_TIME_MSEC: 25e3,
        WARNING_COUNTDOWN_THRESHOLD_MSEC: 15e3,
        ON_SHUTDOWN: g + "shutdown",
        ON_INVALID_HISTORY: g + "invalid_history",
        ON_CONFIG: g + "config",
        ON_ENTER_STATE: g + "enter_state",
        ON_EXIT_STATE: g + "exit_state",
        ATTEMPT_RECONNECT: g + "attempt_reconnect",
        RTI_SESSION: g + "new_rti_address",
        CONSOLE_LOG: g + "message:console_log",
        GET_RTI_SESSION_REQUEST: g + "rti_session_request",
        SKYWALKER: g + "skywalker",
        CHANNEL_ESTABLISHED: g + "established",
        OK: "ok",
        ERROR: "error",
        ERROR_MAX: "error_max",
        ERROR_MISSING: "error_missing",
        ERROR_MSG_TYPE: "error_msg_type",
        ERROR_SHUTDOWN: "error_shutdown",
        ERROR_STALE: "error_stale",
        SYS_OWNER: "sys_owner",
        SYS_NONOWNER: "sys_nonowner",
        SYS_ONLINE: "sys_online",
        SYS_OFFLINE: "sys_offline",
        SYS_TIMETRAVEL: "sys_timetravel",
        HINT_AUTH: "shutdown auth",
        HINT_CONN: "shutdown conn",
        HINT_DISABLED: "shutdown disabled",
        HINT_INVALID_STATE: "shutdown invalid state",
        HINT_MAINT: "shutdown maint",
        HINT_UNSUPPORTED: "shutdown unsupported",
        reason_Unknown: 0,
        reason_AsyncError: 1,
        reason_TooLong: 2,
        reason_Refresh: 3,
        reason_RefreshDelay: 4,
        reason_UIRestart: 5,
        reason_NeedSeq: 6,
        reason_PrevFailed: 7,
        reason_IFrameLoadGiveUp: 8,
        reason_IFrameLoadRetry: 9,
        reason_IFrameLoadRetryWorked: 10,
        reason_PageTransitionRetry: 11,
        reason_IFrameLoadMaxSubdomain: 12,
        reason_NoChannelInfo: 13,
        reason_NoChannelHost: 14,
        CAPABILITY_VOIP_INTEROP: 8,
        CAPABILITY_ACTIVE_ON_DESKTOP_APP: 16384,
        CAPABILITY_PLAYING_INSTANT_GAME: 2097152,
        FANTAIL_SERVICE: "WebchatClient",
        SUBSCRIBE: "subscribe",
        UNSUBSCRIBE: "unsubscribe",
        FAKE_DFF: "fake_dff",
        THROTTLED: g + "throttled",
        JUMPSTART: g + "jumpstart",
        ENTITY_PRESENCE_ACTIVE_PING: "entity_presence/active_ping",
        ENTITY_PRESENCE_SKIPPED_PING: "entity_presence/skipped_ping",
        SUBSCRIPTION_STATE: {
            SUBSCRIBE: "s",
            MUTATE_CONTEXT: "m",
            UNSUBSCRIBE: "u"
        },
        DEFAULT_MAX_SUBSCRIPTIONS: 300,
        DEFAULT_EVICTION_BATCH_SIZE: 20,
        DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE: 300,
        DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES: 3,
        getArbiterType: function(a) {
            return g + "message:" + a
        },
        getRTISkywalkerArbiterType: function(a, b) {
            return g + "skywalker:" + a + ":" + b
        }
    };
    e.exports = a
}), null);
__d("AvailableListConstants", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ON_AVAILABILITY_CHANGED: "buddylist/availability-changed",
        ON_UPDATE_ERROR: "buddylist/update-error",
        ON_UPDATED: "buddylist/updated",
        ON_CHAT_NOTIFICATION_CHANGED: "chat-notification-changed",
        OFFLINE: 0,
        IDLE: 1,
        ACTIVE: 2,
        MOBILE: 3,
        WEB_STATUS: "webStatus",
        FB_APP_STATUS: "fbAppStatus",
        MESSENGER_STATUS: "messengerStatus",
        OTHER_STATUS: "otherStatus",
        STATUS_ACTIVE: "active",
        STATUS_IDLE: "idle",
        STATUS_OFFLINE: "offline"
    });
    e.exports = a
}), null);
__d("ChatReliabilityEvents", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        ERROR: "error",
        CHANNEL_DISCONNECT: "channel_disconnect",
        CHANNEL_CONNECT: "channel_connect",
        CHANNEL_INIT: "channel_init",
        CHANNEL_NOCONFIG: "channel_noconfig",
        CHANNEL_HISTORY_INVALID: "channel_history_invalid",
        CHANNEL_STALLED: "channel_stalled",
        MESSAGE_RECEIVED: "msg_received",
        MESSAGE_SEND_START: "msg_send_start",
        THREAD_INFO_ENDPOINT_FATAL: "thread_info_fatal",
        THREAD_INFO_MISSING: "thread_info_missing",
        DFF_ENDPOINT_FATAL: "invalidate_global_state_fatal",
        DFF_DELTA_INIT: "dff_initiated_by_delta",
        DFF_HOLE_INIT: "dff_initiated_by_hole",
        FETCHING_MANY_MESSAGES: "fetching_many_messages",
        PROCESS_DELTA: "process_delta",
        RTI_SESSION: "chatproxy_rti_session",
        ON_INVALID_HISTORY: "chatproxy_on_invalid_history",
        GET_DEBUG_PRESENCE: "chatproxy_get_debug_presence"
    })
}), null);
__d("ChatReliabilityTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function() {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, b("Banzai").BASIC)
        };
        c.logVital = function() {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, b("Banzai").VITAL)
        };
        c.logImmediately = function() {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, {
                signal: !0
            })
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        };
        c.setEventData = function(a) {
            this.$1.event_data = a;
            return this
        };
        c.setTime = function(a) {
            this.$1.time = a;
            return this
        };
        c.setWeight = function(a) {
            this.$1.weight = a;
            return this
        };
        return a
    }();
    c = {
        event: !0,
        event_data: !0,
        time: !0,
        weight: !0
    };
    e.exports = a
}), null);
__d("ChatReliabilityInstrumentation", ["ChatReliabilityEvents", "ChatReliabilityTypedLogger", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = function(a, c) {
        if (!b("gkx")("678576")) return;
        new(b("ChatReliabilityTypedLogger"))().setEvent(a).setEventData(c).log()
    };
    a = {
        logERROR: function(a) {
            g(b("ChatReliabilityEvents").ERROR, a)
        },
        logCHANNEL_DISCONNECT: function(a) {
            g(b("ChatReliabilityEvents").CHANNEL_DISCONNECT, a)
        },
        logCHANNEL_CONNECT: function(a) {
            g(b("ChatReliabilityEvents").CHANNEL_CONNECT, a)
        },
        logCHANNEL_HISTORY_INVALID: function(a) {
            g(b("ChatReliabilityEvents").CHANNEL_HISTORY_INVALID, a)
        },
        logMESSAGE_RECEIVED: function(a) {
            g(b("ChatReliabilityEvents").MESSAGE_RECEIVED, a)
        },
        logMESSAGE_SEND_START: function(a) {
            g(b("ChatReliabilityEvents").MESSAGE_SEND_START, a)
        },
        logCHANNEL_STALLED: function(a) {
            g(b("ChatReliabilityEvents").CHANNEL_STALLED, a)
        },
        logCHANNEL_INIT: function(a) {
            g(b("ChatReliabilityEvents").CHANNEL_INIT, a)
        },
        logCHANNEL_NOCONFIG: function(a) {
            g(b("ChatReliabilityEvents").CHANNEL_NOCONFIG, a)
        },
        logDFF_DELTA_INIT: function(a) {
            g(b("ChatReliabilityEvents").DFF_DELTA_INIT, a)
        },
        logDFF_HOLE_INIT: function(a) {
            g(b("ChatReliabilityEvents").DFF_HOLE_INIT, a)
        },
        logFETCHING_MANY_MESSAGES: function(a) {
            g(b("ChatReliabilityEvents").FETCHING_MANY_MESSAGES, a)
        },
        logPROCESS_DELTA: function(a) {
            g(b("ChatReliabilityEvents").PROCESS_DELTA, a)
        },
        logTHREAD_INFO_MISSING: function(a) {
            g(b("ChatReliabilityEvents").THREAD_INFO_MISSING, a)
        },
        logCHATPROXY_EVENT: function(a) {
            g(a)
        }
    };
    e.exports = a
}), null);
__d("LastActiveTimes", ["fbt", "ServerTime"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = {};

    function i(a) {
        __p && __p();
        if (!a || a < 0) return null;
        a = b("ServerTime").get() / 1e3 - a;
        a = Math.floor(a / 60);
        var c = Math.floor(a / 60),
            d = Math.floor(c / 24);
        if (a <= 1) return g._({
            "*": "{count}m"
        }, [g._param("count", 1, [0])]);
        else if (a < 60) return g._({
            "*": "{count}m"
        }, [g._param("count", a, [0])]);
        else if (c < 24) return g._({
            "*": "{count}h"
        }, [g._param("count", c, [0])]);
        else if (d < 3) return g._({
            "*": "{count}d"
        }, [g._param("count", d, [0])]);
        else return null
    }

    function j(a, b) {
        (!(a in h) || h[a] < b) && (h[a] = b)
    }

    function k(a) {
        if (a in h) return h[a];
        else return 0
    }
    a = {
        update: function(a) {
            for (var b in a) j(b, a[b])
        },
        getShortDisplay: function(a) {
            return i(k(a))
        },
        get: function(a) {
            return k(a)
        },
        getDebugData: function() {
            return h
        }
    };
    e.exports = a
}), null);
__d("JSLogger", ["lowerFacebookDomain"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        MAX_HISTORY: 500,
        counts: {},
        categories: {},
        seq: 0,
        pageId: (Math.random() * 2147483648 | 0).toString(36),
        forwarding: !1
    };

    function h(a) {
        if (a == "/" || a.indexOf("/", 1) < 0) return !1;
        var b = /^\/(v\d+\.\d\d?|head)\//.test(a);
        return b ? /^\/(dialog|plugins)\//.test(a.substring(a.indexOf("/", 1))) : /^\/(dialog|plugins)\//.test(a)
    }

    function i(b) {
        b instanceof Error && a.ErrorUtils && (b = a.ErrorUtils.normalizeError(b));
        try {
            return JSON.stringify(b)
        } catch (a) {
            return "{}"
        }
    }

    function j(a, b, c) {
        g.counts[a] || (g.counts[a] = {}), g.counts[a][b] || (g.counts[a][b] = 0), c = c == null ? 1 : Number(c), g.counts[a][b] += isFinite(c) ? c : 0
    }
    g.logAction = function(a, b, c) {
        __p && __p();
        if (this.type == "bump") j(this.cat, a, b);
        else if (this.type == "rate") b && j(this.cat, a + "_n", c), j(this.cat, a + "_d", c);
        else {
            c = {
                cat: this.cat,
                type: this.type,
                event: a,
                data: b != null ? i(b) : null,
                date: Date.now(),
                seq: g.seq++
            };
            g.head = g.head ? g.head.next = c : g.tail = c;
            while (g.head.seq - g.tail.seq > g.MAX_HISTORY) g.tail = g.tail.next;
            return c
        }
    };

    function c(c) {
        __p && __p();
        if (!g.categories[c]) {
            g.categories[c] = {};
            var d = function(d) {
                __p && __p();
                var e = {
                    cat: c,
                    type: d
                };
                g.categories[c][d] = function() {
                    __p && __p();
                    g.forwarding = !1;
                    var c = null;
                    if (b("lowerFacebookDomain").isValidDocumentDomain()) return;
                    c = g.logAction;
                    if (h(location.pathname)) g.forwarding = !1;
                    else try {
                        c = a.top.require("JSLogger")._.logAction, g.forwarding = c !== g.logAction
                    } catch (a) {}
                    c && c.apply(e, arguments)
                }
            };
            d("debug");
            d("log");
            d("warn");
            d("error");
            d("bump");
            d("rate")
        }
        return g.categories[c]
    }

    function d(a, b) {
        var c = [];
        for (var b = b || g.tail; b; b = b.next)
            if (!a || a(b)) {
                var d = {
                    type: b.type,
                    cat: b.cat,
                    date: b.date,
                    event: b.event,
                    seq: b.seq
                };
                b.data && (d.data = JSON.parse(b.data));
                c.push(d)
            }
        return c
    }
    e.exports = {
        _: g,
        DUMP_EVENT: "jslogger/dump",
        create: c,
        getEntries: d
    }
}), null);
__d("PresenceUtil", ["CurrentUser", "randomInt"], (function(a, b, c, d, e, f) {
    var g = b("randomInt")(0, 4294967295) + 1;

    function a() {
        return g
    }

    function c() {
        return b("CurrentUser").isLoggedInNow()
    }
    e.exports = {
        getSessionID: a,
        hasUserCookie: c
    }
}), null);
__d("PresencePrivacy", ["Arbiter", "ArbiterMixin", "AsyncRequest", "Bootloader", "ChannelConstants", "CurrentUser", "JSLogger", "PresencePrivacyInitialData", "PresenceUtil", "gkx", "mixin"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "/ajax/chat/privacy/settings.php",
        h = "/ajax/chat/privacy/online_policy.php",
        i = "/ajax/chat/privacy/visibility.php",
        j = "friend_visibility",
        k = "visibility",
        l = "online_policy",
        m = babelHelpers["extends"]({}, (c = b("PresencePrivacyInitialData")).privacyData),
        n = c.visibility,
        o = babelHelpers["extends"]({}, c.privacyData),
        p = n,
        q = c.onlinePolicy,
        r = q,
        s = [],
        t = !1;

    function u() {
        return b("JSLogger").create("blackbird")
    }
    d = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.WHITELISTED = 1, c.BLACKLISTED = -1, c.UNLISTED = 0, c.ONLINE = 1, c.OFFLINE = 0, c.ONLINE_TO_WHITELIST = 0, c.ONLINE_TO_BLACKLIST = 1, b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.init = function(a, b, c) {};
        c.setVisibility = function(a) {
            p = n;
            z(a);
            var b = {
                    visibility: a
                },
                c = {
                    type: k,
                    visibility: a
                },
                d = H(i, b, c);
            C(d, c);
            u().log("set_visibility", {
                data: b
            });
            return a
        };
        c.getVisibility = function() {
            return n
        };
        c.setOnlinePolicy = function(a) {
            r = q;
            A(a);
            var b = {
                    online_policy: a
                },
                c = {
                    type: l,
                    online_policy: a
                },
                d = H(h, b, c);
            C(d, c);
            u().log("set_online_policy", {
                data: b
            });
            return a
        };
        c.getOnlinePolicy = function() {
            return q
        };
        c.getFriendVisibility = function(a) {
            return m[a] || v.UNLISTED
        };
        c.getFriendsVisibility = function() {
            return m
        };
        c.isUserOffline = function() {
            return this.getVisibility() === v.OFFLINE
        };
        c.allows = function(a) {
            return this.isUserOffline() ? !1 : this.allowsIfViewerIsOnline(a)
        };
        c.allowsIfViewerIsOnline = function(a) {
            var b = this.getOnlinePolicy();
            return b === v.ONLINE_TO_WHITELIST ? m[a] == v.WHITELISTED : m[a] != v.BLACKLISTED
        };
        c.getOnlinePolicyStr = function() {
            if (this.isUserOffline()) return "offline";
            var a = this.getOnlinePolicy();
            if (a === v.ONLINE_TO_WHITELIST) return "online_to_whitelist";
            return a === v.ONLINE_TO_BLACKLIST ? "online_to_blacklist" : "unknown"
        };
        c.setFriendsVisibility = function(a, b) {
            __p && __p();
            if (a.length > 0) {
                var c = {};
                for (var d = 0; d < a.length; d++) {
                    var e = a[d];
                    o[e] = m[e];
                    c[e] = b
                }
                w(c);
                e = b;
                e == v.UNLISTED && (e = o[a[0]]);
                d = {
                    users: a,
                    setting: b,
                    setting_type: e
                };
                a = {
                    type: j,
                    settings: c
                };
                e = H(g, d, a);
                C(e, a);
                u().log("set_friend_visibility", {
                    data: d
                })
            }
            return b
        };
        c.setFriendVisibilityMap = function(a, b) {
            for (var c in a) o[c] = m[c];
            w(a);
            var d = {
                type: j,
                settings: a
            };
            C(G(b, d), d);
            u().log("set_friend_visibility_from_map", {
                data: a
            })
        };
        c.allow = function(a) {
            __p && __p();
            if (this.allows(a)) {
                u().error("allow_already_allowed");
                throw new Error("allow() should only be called for users that are not already allowed")
            }
            if (this.getVisibility() === v.OFFLINE) {
                u().error("allow_called_while_offline");
                throw new Error("allow() should only be called when the user is already online")
            }
            var b = this.getOnlinePolicy() === v.ONLINE_TO_WHITELIST ? v.WHITELISTED : v.UNLISTED;
            return this.setFriendsVisibility([a], b)
        };
        c.disallow = function(a) {
            __p && __p();
            if (!this.allows(a)) {
                u().error("disallow_already_disallowed");
                throw new Error("disallow() should only be called for users that are not already disallowed")
            }
            if (this.getVisibility() === v.OFFLINE) {
                u().error("disallow_called_while_offline");
                throw new Error("disallow() should only be called when the user is already online")
            }
            var b = this.getOnlinePolicy() === v.ONLINE_TO_BLACKLIST ? v.BLACKLISTED : v.UNLISTED;
            return this.setFriendsVisibility([a], b)
        };
        c.getBlacklist = function() {
            var a = [];
            for (var b in m) m[b] === v.BLACKLISTED && a.push(b);
            return a
        };
        c.getWhitelist = function() {
            var a = [];
            for (var b in m) m[b] === v.WHITELISTED && a.push(b);
            return a
        };
        c.getMapForTest = function() {
            return m
        };
        c.setMapForTest = function(a) {
            m = a
        };
        return b
    }(b("mixin")(b("ArbiterMixin")));
    var v = new d();

    function w(a) {
        __p && __p();
        var c;
        for (c in a) {
            var d = a[c];
            if (c == b("CurrentUser").getID()) {
                u().error("set_viewer_visibility");
                throw new Error("Invalid to set current user's visibility")
            }
            switch (d) {
                case v.WHITELISTED:
                case v.BLACKLISTED:
                case v.UNLISTED:
                    break;
                default:
                    u().error("set_invalid_friend_visibility", {
                        id: c,
                        value: d
                    });
                    throw new Error("Invalid state: " + d)
            }
        }
        for (c in a) m[c] = a[c];
        v.inform("privacy-changed")
    }

    function x(a, b) {
        var c = {};
        c[a] = b;
        w(c)
    }

    function y(a) {
        b("gkx")("845716") && b("Bootloader").loadModules(["MessengerMQTTPresenceReporting"], function(b) {
            b.reportChatVisibility(!!a)
        }, "PresencePrivacy")
    }

    function z(a) {
        switch (a) {
            case v.ONLINE:
            case v.OFFLINE:
                break;
            default:
                u().error("set_invalid_visibility", {
                    value: a
                });
                throw new Error("Invalid visibility: " + a)
        }
        n = a;
        y(a);
        v.inform("privacy-changed");
        v.inform("privacy-user-presence-changed")
    }

    function A(a) {
        switch (a) {
            case v.ONLINE_TO_WHITELIST:
            case v.ONLINE_TO_BLACKLIST:
                break;
            default:
                throw new Error("Invalid default online policy: " + a)
        }
        q = a;
        v.inform("privacy-user-presence-changed");
        v.inform("privacy-changed")
    }

    function B(a, b) {
        t = !0, a.send()
    }

    function C(a, b) {
        s.push({
            request: a,
            data: b
        });
        if (!t) {
            a = s.shift();
            B(a.request, a.data)
        }
    }

    function D(a, b) {
        var c = a.type;
        if (c === j) {
            v.inform("privacy-availability-changed");
            for (var d in a.settings) o[d] = a.settings[d]
        } else c === k ? p = a.visibility : c === l && (r = a.online_policy), v.inform("privacy-user-presence-response");
        u().log("set_update_response", {
            data: a,
            response: b
        })
    }

    function E(a, b) {
        n !== p && z(p), q !== r && A(r), Object.assign(m, o), v.inform("privacy-changed"), s = [], u().log("set_error_response", {
            data: a,
            response: b
        })
    }

    function F(a) {
        t = !1;
        if (s.length > 0) {
            a = s.shift();
            B(a.request, a.data)
        }
    }

    function G(a, c) {
        if (b("PresenceUtil") != null) {
            var d = a.getData();
            d.window_id = b("PresenceUtil").getSessionID();
            a.setData(d)
        }
        a.setHandler(D.bind(this, c)).setErrorHandler(E.bind(this, c)).setTransportErrorHandler(E.bind(this, c)).setFinallyHandler(F.bind(this)).setAllowCrossPageTransition(!0);
        return a
    }

    function H(a, c, d) {
        return G(new(b("AsyncRequest"))(a).setData(c), d)
    }

    function a(a, c) {
        __p && __p();
        var d = c.obj;
        if (d.viewer_id != b("CurrentUser").getID()) {
            u().error("invalid_viewer_for_channel_message", {
                type: a,
                data: c
            });
            throw new Error("Viewer got from the channel is not the real viewer")
        }
        if (d.window_id === b("PresenceUtil").getSessionID()) return;
        var e = d.data;
        if (d.event == "access_control_entry") e.target_ids.forEach(function(a) {
            x(a, e.setting), o[a] = e.setting
        });
        else {
            if (d.event == "visibility_update") {
                a = e.visibility ? v.ONLINE : v.OFFLINE;
                z(a);
                p = a
            } else d.event == "online_policy_update" && (A(e.online_policy), r = e.online_policy);
            v.inform("privacy-user-presence-response")
        }
        u().log("channel_message_received", {
            data: c.obj
        })
    }
    v.inform("privacy-changed");
    v.inform("privacy-user-presence-changed", "state");
    u().log("initialized", {
        visibility: n,
        policy: q
    });
    b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT, function(a, c) {
        c.presence_privacy = {
            initial: b("PresencePrivacyInitialData").privacyData,
            current: m
        }
    });
    b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("privacy_changed"), a.bind(this));
    b("Arbiter").subscribe(b("ChannelConstants").ON_CONFIG, function(a, b) {
        a = b.getConfig("visibility", null);
        if (a !== null && typeof a !== "undefined") {
            b = a ? v.ONLINE : v.OFFLINE;
            z(b);
            u().log("config_visibility", {
                vis: b
            })
        }
    }.bind(this));
    e.exports = v
}), null);
__d("ChatVisibility", ["Arbiter", "JSLogger", "PresencePrivacy"], (function(a, b, c, d, e, f) {
    var g = {
        isOnline: function() {
            return b("PresencePrivacy").getVisibility() === b("PresencePrivacy").ONLINE
        },
        hasBlackbirdEnabled: function() {
            return this.isVisibleToMostFriends() || this.isVisibleToSomeFriends()
        },
        isVisibleToMostFriends: function() {
            return b("PresencePrivacy").getOnlinePolicy() === b("PresencePrivacy").ONLINE_TO_BLACKLIST && b("PresencePrivacy").getBlacklist().length > 0
        },
        isVisibleToSomeFriends: function() {
            return b("PresencePrivacy").getOnlinePolicy() === b("PresencePrivacy").ONLINE_TO_WHITELIST && b("PresencePrivacy").getWhitelist().length > 0
        },
        goOnline: function(a) {
            b("PresencePrivacy").getVisibility() === b("PresencePrivacy").OFFLINE && (b("JSLogger").create("blackbird").log("chat_go_online"), b("PresencePrivacy").setVisibility(b("PresencePrivacy").ONLINE), b("Arbiter").inform("chat-visibility/go-online")), a && a()
        },
        goOffline: function(a) {
            b("PresencePrivacy").getVisibility() === b("PresencePrivacy").ONLINE && (b("JSLogger").create("blackbird").log("chat_go_offline"), b("PresencePrivacy").setVisibility(b("PresencePrivacy").OFFLINE), b("Arbiter").inform("chat-visibility/go-offline")), a && a()
        },
        toggleVisibility: function() {
            g.isOnline() ? g.goOffline() : g.goOnline()
        }
    };
    e.exports = g
}), null);
__d("FBIDCheck", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = /^[1-9]\d*$/;
    a = {
        isUser_deprecated: function(a) {
            if (!a || typeof a === "string" && !g.test(a)) return !1;
            a = parseInt(a, 10);
            return !a ? !1 : a > 0 && a < 22e8 || a >= 1e14 && a <= 100099999989999 || a >= 89e12 && a <= 89999999999999 || a >= 6000001e7 && a <= 60000019999999
        }
    };
    e.exports = a
}), null);
__d("PresenceConfig", ["PresenceConfigInitialData"], (function(a, b, c, d, e, f) {
    var g = Object.assign({}, b("PresenceConfigInitialData"));
    a = {
        get: function(a, b) {
            return a in g ? g[a] : b
        }
    };
    e.exports = a
}), null);
__d("PresenceStatus", ["ArbiterMixin", "AvailableListConstants", "AvailableListInitialData", "BanzaiODS", "Bootloader", "ChatVisibility", "CurrentUser", "FBIDCheck", "FBLogger", "LastActiveTimes", "PresenceConfig", "PresencePrivacy", "ServerTime", "createObjectFrom", "debounceAcrossTransitions", "gkx"], (function(a, b, c, d, e, f) {
    __p && __p();
    b("BanzaiODS").setEntitySample("presence", 1e-4);
    var g = {},
        h = {},
        i = {},
        j = {},
        k = Object.assign({}, b("ArbiterMixin")),
        l = b("debounceAcrossTransitions")(function() {
            return k.inform("change")
        }, 0);

    function m(a) {
        var c, d = parseInt(a.topic.match(/\d+$/), 10);
        a = parseInt(JSON.parse(a.payload).lat, 10);
        var e = Date.now() - a * 1e3;
        e = b("PresenceConfig").get("active_cutoff") * 1e3 - e;
        b("LastActiveTimes").update((c = {}, c[d] = a, c));
        k.checkPresence(d);
        k.get(d) === b("AvailableListConstants").ACTIVE && (window.clearTimeout(j[d].timeout), j[d].timeout = window.setTimeout(function() {
            k.checkPresence(d)
        }, e))
    }

    function n(a) {
        return /^\d+$/.test(a)
    }
    Object.assign(k, {
        resetPresenceData: function() {
            g = {}, h = {}
        },
        reset: function() {
            k.resetPresenceData(), i = {}
        },
        get: function(a) {
            !n(a) && b("PresenceConfig").get("presence_throw_for_malformed_id") && b("FBLogger")("presence").warn("received malformed id '%s'", a);
            if (a == b("CurrentUser").getID()) return b("ChatVisibility").isOnline() ? b("AvailableListConstants").ACTIVE : b("AvailableListConstants").OFFLINE;
            n(a) && !b("FBIDCheck").isUser_deprecated(a) && !j[a] && (b("BanzaiODS").bumpEntityKey(2966, "presence", "page_subscribe"), j[a] = {}, b("PresenceConfig").get("presence_page_green_dot_sub") && b("Bootloader").loadModules(["SkywalkerManager"], function(b) {
                return b.subscribe("presence_push/fb/" + a, m)
            }, "PresenceStatus"));
            var c = b("AvailableListConstants").OFFLINE;
            a in g && (c = g[a]);
            b("PresencePrivacy").allows(a) || (c = b("AvailableListConstants").OFFLINE);
            return c
        },
        getCapabilities: function(a) {
            a = h[a];
            return a ? a : 0
        },
        isPlayingCanvasGameUser: function(a) {
            return !!i[a]
        },
        getGroup: function(a) {
            return a.some(function(a) {
                return a == b("CurrentUser").getID() ? !1 : k.get(a) === b("AvailableListConstants").ACTIVE
            }) ? b("AvailableListConstants").ACTIVE : b("AvailableListConstants").OFFLINE
        },
        set: function(a, c, d, e, f, i) {
            __p && __p();
            if (a == b("CurrentUser").getID()) return !1;
            var j;
            if (c !== null && c !== void 0) {
                c = c == b("AvailableListConstants").ACTIVE ? b("AvailableListConstants").ACTIVE : b("AvailableListConstants").OFFLINE;
                d = k.get(a);
                j = d != c;
                if ((j || c == b("AvailableListConstants").ACTIVE) && b("FBIDCheck").isUser_deprecated(a)) {
                    b("LastActiveTimes").update((e = {}, e[a] = b("ServerTime").get() / 1e3, e))
                }
                g[a] = c
            }
            d = !1;
            f !== void 0 && f !== null && (d = k.getCapabilities(a) != f, h[a] = f);
            e = j || d;
            e && !i && l();
            return e
        },
        setPlayingCanvasGameFriends: function(a) {
            if (!b("gkx")("678262")) return;
            i = b("createObjectFrom")(a)
        },
        getOnlineIDs: function() {
            var a, c = [];
            for (a in g) k.get(a) === b("AvailableListConstants").ACTIVE && c.push(a);
            return c
        },
        getAllIDs: function() {
            return Object.keys(g)
        },
        getOnlineCount: function() {
            return k.getOnlineIDs().length
        },
        getPresenceStats: function() {
            __p && __p();
            var a = 0,
                c = 0,
                d = 0;
            for (var e in g) {
                a += 1;
                switch (k.get(e)) {
                    case b("AvailableListConstants").OFFLINE:
                        c += 1;
                        break;
                    case b("AvailableListConstants").ACTIVE:
                        d += 1;
                        break;
                    default:
                        break
                }
            }
            return {
                total: a,
                offline: c,
                active: d
            }
        },
        getAllDebugInfo: function() {
            var a = {};
            for (var b in g) a[b] = {
                p: g[b],
                vc: h[b]
            };
            return a
        },
        setMultiFromMQTT: function(a) {
            var c = {};
            Array.isArray(a) && a.forEach(function(a) {
                a.l && (c[a.u] = a.l), k.set(a.u, a.p, !1, "mqtt", a.c, !0)
            });
            b("LastActiveTimes").update(c);
            l()
        },
        setMultiChatproxy: function(a) {
            var c = {};
            for (var d in a) {
                a[d].lat && (c[d] = a[d].lat);
                var e = a[d].p;
                k.set(d, e, !1, "chatproxy", a[d].vc, !0)
            }
            b("LastActiveTimes").update(c);
            l()
        },
        setMultiActive: function(a, c) {
            var d = !1;
            a.forEach(function(a) {
                k.set(a, b("AvailableListConstants").ACTIVE, !1, c, null, !0) && (d = !0)
            });
            d && l()
        },
        checkPresence: function(a) {
            var c = !1,
                d = Math.ceil(Date.now() / 1e3) - b("LastActiveTimes").get(a);
            k.set(a, d < b("PresenceConfig").get("active_cutoff") ? b("AvailableListConstants").ACTIVE : b("AvailableListConstants").OFFLINE, !1, "pylon", null, !0) && (c = !0);
            c && l()
        }
    });
    b("AvailableListInitialData").activeList && b("AvailableListInitialData").activeList.length > 0 && k.setMultiActive(b("AvailableListInitialData").activeList, "available_list_active");
    b("AvailableListInitialData").playingNow && b("AvailableListInitialData").playingNow.length > 0 && k.setPlayingCanvasGameFriends(b("AvailableListInitialData").playingNow);
    b("AvailableListInitialData").lastActiveTimes && Object.keys(b("AvailableListInitialData").lastActiveTimes).length > 0 && b("LastActiveTimes").update(b("AvailableListInitialData").lastActiveTimes);
    e.exports = k
}), null);
__d("ChatproxyPresence", ["Arbiter", "AvailableListConstants", "AvailableListInitialData", "BanzaiODS", "ChannelConstants", "ChatReliabilityEvents", "ChatReliabilityInstrumentation", "LastActiveTimes", "PresenceStatus", "debounceAcrossTransitions", "gkx"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.$1 = a, this.$2 = !1, this.$3 = b("AvailableListInitialData").chatNotif, this.$4 = !1
        }
        var c = a.prototype;
        c.subscribe = function() {
            __p && __p();
            var a = this,
                c, d;
            (c = b("Arbiter")).subscribe((d = b("ChannelConstants")).getArbiterType("chatproxy-presence"), this.updatePresenceInfo.bind(this));
            c.subscribe(d.ON_INVALID_HISTORY, function() {
                b("ChatReliabilityInstrumentation").logCHATPROXY_EVENT(b("ChatReliabilityEvents").ON_INVALID_HISTORY), a.$2 = !0
            });
            c.subscribe(d.RTI_SESSION, function(c, d) {
                b("ChatReliabilityInstrumentation").logCHATPROXY_EVENT(b("ChatReliabilityEvents").RTI_SESSION), d && (a.$4 = d)
            });
            c.subscribe(d.getArbiterType("get_debug_presence"), function(c, d) {
                __p && __p();
                b("ChatReliabilityInstrumentation").logCHATPROXY_EVENT(b("ChatReliabilityEvents").GET_DEBUG_PRESENCE);
                c = b("PresenceStatus").getAllDebugInfo();
                d = b("LastActiveTimes").getDebugData();
                for (var e in d) {
                    var f = c[e];
                    f === void 0 && (f = {}, c[e] = f);
                    f.l = Math.floor(d[e])
                }
                a.$4.issueRequest("/debug_presence", {}, c, function() {
                    b("BanzaiODS").bumpEntityKey(2966, "ChatproxyPresence", "debug_presence.sucess")
                })
            })
        };
        c.getRTISession = function() {
            return this.$4
        };
        c.updatePresenceInfo = function(a, c) {
            __p && __p();
            this.$2 && (this.$2 = !1, b("PresenceStatus").resetPresenceData());
            c = c.obj;
            if (!b("gkx")("845715")) {
                a = c.buddyList;
                b("PresenceStatus").setMultiChatproxy(a)
            }
            a = !1;
            c.chatNotif !== void 0 && (a = this.$3 !== c.chatNotif);
            a && (this.$3 = c.chatNotif);
            c.gamers && b("PresenceStatus").setPlayingCanvasGameFriends(c.gamers);
            a && this.$1(b("AvailableListConstants").ON_CHAT_NOTIFICATION_CHANGED, this.$3);
            b("debounceAcrossTransitions")(function() {
                this.$1(b("AvailableListConstants").ON_AVAILABILITY_CHANGED)
            }.bind(this), 0)()
        };
        c.getWebChatNotification = function() {
            return this.$3
        };
        return a
    }();
    e.exports = a
}), null);
__d("BanzaiScuba", ["Banzai", "FBLogger"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "scuba_sample";
    a = function() {
        "use strict";
        __p && __p();

        function a(a, c, d) {
            this.posted = !1, a || b("FBLogger")("BanzaiScuba").warn("Can't post a sample without a dataset"), this.dataset = a, this.$1 = c, this.options = d
        }
        var c = a.prototype;
        c.$2 = function(a, c, d) {
            if (this.posted) {
                b("FBLogger")("BanzaiScuba").warn("Trying to add to an already posted sample");
                return a
            }
            a = a || {};
            a[c] = d;
            return a
        };
        c.addNormal = function(a, b) {
            this.normal = this.$2(this.normal, a, b);
            return this
        };
        c.addInteger = function(a, b) {
            this["int"] = this.$2(this["int"], a, b);
            return this
        };
        c.addDenorm = function(a, b) {
            this.denorm = this.$2(this.denorm, a, b);
            return this
        };
        c.addTagSet = function(a, b) {
            this.tags = this.$2(this.tags, a, b);
            return this
        };
        c.addNormVector = function(a, b) {
            this.normvector = this.$2(this.normvector, a, b);
            return this
        };
        c.post = function(a) {
            __p && __p();
            if (this.posted) {
                b("FBLogger")("BanzaiScuba").warn("Trying to re-post");
                return
            }
            if (!this.dataset) return;
            var c = {};
            c._ds = this.dataset;
            c._options = this.options;
            this.normal && (c.normal = this.normal);
            this["int"] && (c["int"] = this["int"]);
            this.denorm && (c.denorm = this.denorm);
            this.tags && (c.tags = this.tags);
            this.normvector && (c.normvector = this.normvector);
            this.$1 !== null && this.$1 !== "" && this.$1 !== void 0 && (c._lid = this.$1);
            b("Banzai").post(g, c, a);
            this.posted = !0
        };
        return a
    }();
    e.exports = a
}), null);
__d("monitorCodeUse", ["invariant", "BanzaiScuba", "ErrorNormalizeUtils", "ScriptPath", "SiteData", "forEachObject", "gkx", "ReactCurrentOwner"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h;

    function i(a) {
        a = a.type;
        if (typeof a === "string") return a;
        return typeof a === "function" ? a.displayName || a.name : null
    }

    function j(a) {
        var b = 1e3,
            c = [];
        while (a && c.length < b) c.push(i(a) || ""), typeof a.tag === "number" ? a = a["return"] : a = a._currentElement && a._currentElement._owner;
        return c
    }

    function k(a) {
        return Array.isArray(a) ? "[...]" : l(a)
    }

    function l(a) {
        __p && __p();
        if (a == null) return "" + String(a);
        if (Array.isArray(a)) {
            if (a.length > 10) {
                var b = a.slice(0, 5).map(k);
                return "[" + b.join(", ") + ", ...]"
            }
            b = a.map(k);
            return "[" + b.join(", ") + "]"
        }
        if (typeof a === "string") return "'" + a + "'";
        if (typeof a === "object") {
            b = Object.keys(a).map(function(a) {
                return a + "=..."
            });
            return "{" + b.join(", ") + "}"
        }
        return String(a)
    }

    function m(a) {
        return a.identifier || ""
    }

    function n(a) {
        var b;
        return a.script + "  " + ((b = a.line) != null ? b : "") + ":" + ((b = a.column) != null ? b : "")
    }
    var o;

    function a(a, c, d) {
        __p && __p();
        c === void 0 && (c = {});
        d === void 0 && (d = {});
        a && !/[^a-z0-9_]/.test(a) || g(0, 2789);
        var e = {};
        d.sampleRate != null && (e.sampleRate = d.sampleRate);
        var f = new(b("BanzaiScuba"))("core_monitor", null, e);
        f.addNormal("event", a);
        o === void 0 && (o = b("gkx")("708253"));
        f.addNormal("is_comet", o);
        e = h || (h = b("ReactCurrentOwner"));
        f.addNormVector("owners", j(e.current));
        f.addNormal("uri", window.location.href);
        f.addNormal("script_path", b("ScriptPath").getScriptPath());
        f.addNormal("devserver_username", b("SiteData").devserver_username || "");
        e = !1;
        d.forceIncludeStackTrace && (e = !0);
        if (e) try {
            d = new Error(a);
            d.framesToPop = 1;
            e = b("ErrorNormalizeUtils").normalizeError(d).stackFrames;
            a = e.map(m);
            d = e.map(n).join("\n");
            f.addNormVector("stacktrace", a);
            f.addDenorm("stack", d)
        } catch (a) {}
        b("forEachObject")(c, function(a, b, c) {
            typeof a === "string" ? f.addNormal(b, a) : typeof a === "number" && (a | 0) === a ? f.addInteger(b, a) : Array.isArray(a) ? f.addNormVector(b, a.map(l)) : f.addNormal(b, l(a))
        });
        f.post()
    }
    e.exports = a
}), null);
__d("Dispatcher_DEPRECATED", ["invariant", "FBLogger", "monitorCodeUse"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = "ID_";
    a = function() {
        __p && __p();

        function a() {
            this.$1 = new Map(), this.$2 = !1, this.$3 = new Map(), this.$4 = new Map(), this.$5 = 1
        }
        var b = a.prototype;
        b.register = function(a, b) {
            b = this.__genID(b);
            this.$1.set(b, a);
            return b
        };
        b.unregister = function(a) {
            this.$1.get(a) || g(0, 1331, a), this.$1["delete"](a)
        };
        b.waitFor = function(a) {
            __p && __p();
            this.$2 || g(0, 1332);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (this.$4.get(c)) {
                    this.$3.get(c) || g(0, 2380, c);
                    continue
                }
                this.$1.get(c) || g(0, 2381, c);
                this.$7(c)
            }
        };
        b.dispatch = function(a) {
            var b = this;
            j(this.$2, this.$6, a);
            this.$8(a);
            try {
                this.$1.forEach(function(a, c) {
                    if (b.$4.get(c)) return;
                    b.$7(c)
                })
            } finally {
                this.$9()
            }
        };
        b.isDispatching = function() {
            return this.$2
        };
        b.$7 = function(a) {
            this.$4.set(a, !0);
            var b = this.$1.get(a);
            b && this.__invokeCallback(a, b, this.$6);
            this.$3.set(a, !0)
        };
        b.__invokeCallback = function(a, b, c) {
            b(c)
        };
        b.$8 = function(a) {
            __p && __p();
            for (var b = this.$1.keys(), c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                this.$4.set(e, !1);
                this.$3.set(e, !1)
            }
            this.$6 = a;
            this.$2 = !0
        };
        b.$9 = function() {
            delete this.$6, this.$2 = !1
        };
        b.__genID = function(a) {
            var b = a ? a + "_" : h;
            a = a || b + this.$5++;
            while (this.$1.get(a)) a = b + this.$5++;
            return a
        };
        return a
    }();

    function i(a) {
        __p && __p();
        var b = "<unknown>";
        if (!a) return b;
        if (typeof a.type === "string") return a.type;
        if (typeof a.actionType === "string") return a.actionType;
        if (!a.action) return b;
        if (typeof a.action.type === "string") return a.action.type;
        return typeof a.action.actionType === "string" ? a.action.actionType : b
    }

    function j(a, c, d) {
        if (a) {
            a = new Error("Cannot dispatch in the middle of a dispatch");
            b("FBLogger")("flux_dispatcher").catching(a).mustfix("Tried to dispatch action %s while already dispatching %s", i(d), i(c));
            throw a
        }
    }
    e.exports = a
}), null);
__d("ExplicitRegistrationDispatcherUtils", ["emptyFunction", "gkx", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    a = !1;
    c = b("emptyFunction");
    e.exports = {
        warn: c,
        inlineRequiresEnabled: a
    }
}), null);
__d("ExplicitRegistrationDispatcher", ["Dispatcher_DEPRECATED", "ExplicitRegistrationDispatcherUtils", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            b = b.strict;
            c = a.call(this) || this;
            c.$ExplicitRegistrationDispatcher2 = b;
            c.$ExplicitRegistrationDispatcher1 = {};
            return c
        }
        var c = b.prototype;
        c.explicitlyRegisterStore = function(a) {
            a = a.getDispatchToken();
            this.$ExplicitRegistrationDispatcher1[a] = !0;
            return a
        };
        c.explicitlyRegisterStores = function(a) {
            var b = this;
            return a.map(function(a) {
                return b.explicitlyRegisterStore(a)
            })
        };
        c.register = function(b, c) {
            var d = this;
            d = this.__genID(c);
            this.$ExplicitRegistrationDispatcher1[d] = !1;
            c = a.prototype.register.call(this, this.$ExplicitRegistrationDispatcher4.bind(this, d, b), d);
            return c
        };
        c.$ExplicitRegistrationDispatcher4 = function(a, b, c) {
            (this.$ExplicitRegistrationDispatcher1[a] || !this.$ExplicitRegistrationDispatcher2) && this.__invokeCallback(a, b, c)
        };
        c.unregister = function(b) {
            a.prototype.unregister.call(this, b), delete this.$ExplicitRegistrationDispatcher1[b]
        };
        c.__getMaps = function() {};
        return b
    }(b("Dispatcher_DEPRECATED"));
    e.exports = a
}), null);
__d("ChatDispatcher", ["ExplicitRegistrationDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("ExplicitRegistrationDispatcher"));
    e.exports = new a({
        strict: !1
    })
}), null);
__d("PresenceStatusActionTypes", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("keyMirror")({
        AVAILABILITY_CHANGED: null
    })
}), null);
__d("TypingStates", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        INACTIVE: 0,
        TYPING: 1,
        QUITTING: 2
    });
    e.exports = a
}), null);
__d("AvailableList", ["Arbiter", "ArbiterMixin", "AsyncRequest", "AvailableListConstants", "BanzaiODS", "Bootloader", "ChannelConstants", "ChatConfig", "ChatDispatcher", "ChatproxyPresence", "ChatReliabilityInstrumentation", "ChatVisibility", "CurrentUser", "FBIDCheck", "FBLogger", "JSLogger", "LastActiveTimes", "PresencePrivacy", "PresenceStatus", "PresenceStatusActionTypes", "Run", "ServerTime", "TypingStates", "debounceAcrossTransitions", "emptyFunction", "gkx", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    b("BanzaiODS").setEntitySample("presence", 1e-4);
    var g = babelHelpers["extends"]({}, b("AvailableListConstants"), b("ArbiterMixin")),
        h = /\D/;
    g.subscribe([b("AvailableListConstants").ON_AVAILABILITY_CHANGED, b("AvailableListConstants").ON_UPDATE_ERROR], function(a, c) {
        b("Arbiter").inform(a, c)
    });
    b("PresenceStatus").subscribe("change", b("debounceAcrossTransitions")(function() {
        g.inform(b("AvailableListConstants").ON_AVAILABILITY_CHANGED)
    }, 0));
    var i = b("debounceAcrossTransitions")(function() {
        g.inform(b("AvailableListConstants").ON_AVAILABILITY_CHANGED), b("ChatDispatcher").dispatch({
            type: b("PresenceStatusActionTypes").AVAILABILITY_CHANGED
        })
    }, 0);

    function j(a, c, d, e, f) {
        if (a === b("CurrentUser").getID()) return;
        c = b("PresenceStatus").set(a, c, d, e, f);
        if (c) {
            d = b("debounceAcrossTransitions")(function() {
                g.inform(b("AvailableListConstants").ON_AVAILABILITY_CHANGED, a), b("ChatDispatcher").dispatch({
                    type: b("PresenceStatusActionTypes").AVAILABILITY_CHANGED,
                    id: a
                })
            }, 0);
            d()
        }
    }

    function k(a) {
        a = a.payload.availability || {};
        for (var b in a) j(b && b.toString(), a[b].a, !0, "mercury_tabs", a[b].c)
    }

    function l(a) {
        if (!a || a === "0" || h.test(a)) {
            b("ChatReliabilityInstrumentation").logERROR("bad id for available list: " + a);
            return
        }
        new(b("AsyncRequest"))("/ajax/mercury/tabs_presence.php").setData({
            target_id: a
        }).setHandler(k).setErrorHandler(b("emptyFunction")).setAllowCrossPageTransition(!0).send()
    }

    function a(a, c) {
        c.chat_config = b("ChatConfig").getDebugInfo(), c.available_list_debug_info = {
            count: b("PresenceStatus").getOnlineIDs().length
        }
    }
    var m = void 0;
    try {
        m = new(b("ChatproxyPresence"))(function(a) {
            g.inform(a)
        }), m.subscribe()
    } catch (a) {
        b("FBLogger")("chat").catching(a).mustfix("Failed to subscribe to chat proxy presence"), b("ChatReliabilityInstrumentation").logERROR(a.getMessage())
    }
    Object.assign(g, {
        getChatproxyPresenceObject: function() {
            return m
        },
        get: function(a) {
            return b("PresenceStatus").get(a)
        },
        updateForID: function(a) {
            if (b("ChatConfig").get("presence_page_green_dot_sub") && !b("FBIDCheck").isUser_deprecated(a)) return;
            l(a);
            b("PresencePrivacy").getVisibility() == b("PresencePrivacy").ONLINE && b("Run").onAfterLoad(function() {
                b("gkx")("845715") ? b("Bootloader").loadModules(["MessengerMQTTPresence"], function(b) {
                    b.sendAdditionalBuddyRequest(a)
                }, "AvailableList") : b("Bootloader").loadModules(["ChannelManager", "ChannelTransport"], function(b, c) {
                    b.startChannelManager(), c.sendAdditionalBuddyRequest(b.getCompleteConfig(), a)
                }, "AvailableList")
            })
        },
        getWebChatNotification: function() {
            return m && m.getWebChatNotification()
        },
        isReady: function() {
            return !!m
        },
        set: function(a, b, c, d) {
            j(a, b, !0, c, d)
        }
    });
    b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT, a);
    b("PresencePrivacy").subscribe(["privacy-changed", "privacy-availability-changed", "privacy-user-presence-response"], i);
    b("requireWeak")("ChannelConnection", function(a) {
        return a.subscribe([a.CONNECTED, a.RECONNECTING, a.SHUTDOWN, a.MUTE_WARNING, a.UNMUTE_WARNING], i)
    });

    function c(a, c) {
        __p && __p();
        if (b("gkx")("845715")) return;
        a = {};
        var d = [];
        c = c.obj.overlay;
        for (var e in c) {
            g.set(e, c[e].a, c[e].s || "channel", c[e].vc);
            c[e].la && (a[e] = c[e].la);
            var f = c[e].c & b("ChannelConstants").CAPABILITY_PLAYING_INSTANT_GAME;
            f !== 0 && d.push(e)
        }
        b("LastActiveTimes").update(a)
    }
    b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("buddylist_overlay"), c);
    b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("buddylist_overlay_buffered"), c);
    b("Bootloader").loadModules(["MercurySyncEventsProxy"], function(a) {
        __p && __p();
        b("Arbiter").subscribe([a.getArbiterTypeForFBID(b("CurrentUser").getID(), a.Events.TYP)], function(a, c) {
            __p && __p();
            a = c.obj;
            if (a.st === b("TypingStates").TYPING) {
                c = a.from;
                if (b("ChatVisibility").isOnline()) {
                    b("BanzaiODS").bumpEntityKey(2966, "presence", "stale_presence_check_typing");
                    a = b("PresenceStatus").get(c);
                    if (a != b("AvailableListConstants").ACTIVE) {
                        a = b("LastActiveTimes").get(c) * 1e3;
                        var d = b("ServerTime").get();
                        if (!a) b("BanzaiODS").bumpEntityKey(2966, "presence", "no_detailed_presence_typing");
                        else if (d - a > 5 * 60 * 1e3) {
                            var e = "stale_presence_typing";
                            d = d - a;
                            d < 10 * 60 * 1e3 ? e += "600" : d < 60 * 60 * 1e3 && (e += "3600");
                            b("BanzaiODS").bumpEntityKey(2966, "presence", e)
                        }
                    }
                }
                g.set(c && c.toString(), b("AvailableListConstants").ACTIVE, "channel-typing")
            }
        })
    }, "AvailableList");
    b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("messaging"), function(a, c) {
        __p && __p();
        if (!b("ChatVisibility").isOnline()) return;
        a = c.obj;
        if (a.message && a.message.timestamp && a.message.sender_fbid) {
            c = b("ServerTime").get();
            var d = a.message.timestamp;
            if (c - d < 2 * 60 * 1e3) {
                b("BanzaiODS").bumpEntityKey(2966, "presence", "stale_presence_check");
                c = a.message.sender_fbid;
                a = b("PresenceStatus").get(c);
                if (a == b("AvailableListConstants").ACTIVE) return;
                a = b("LastActiveTimes").get(c) * 1e3;
                if (!a) b("BanzaiODS").bumpEntityKey(2966, "presence", "no_detailed_presence");
                else if (d - a > 5 * 60 * 1e3) {
                    c = "stale_presence";
                    d = d - a;
                    d < 10 * 60 * 1e3 ? c += "600" : d < 60 * 60 * 1e3 && (c += "3600");
                    b("BanzaiODS").bumpEntityKey(2966, "presence", c)
                }
            }
        }
    });
    e.exports = g
}), null);
__d("ChatHovercard", ["Arbiter", "AsyncLoader", "Bootloader", "JSLogger", "TimeSlice", "debounce", "emptyFunction", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 5,
        h = new(b("AsyncLoader"))("/ajax/chat/hovercard/sidebar.php", "hover"),
        i = b("JSLogger").create("chat_hovercard");
    b("Arbiter").subscribe("Hovercard/dirty", h.reset.bind(h));

    function j(a, c) {
        var d = function() {
            h.get(a, c)
        };
        b("TimeSlice").guard(d, "superfluous request to first open DD", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        })()
    }

    function k(a, c) {
        __p && __p();
        if (!a) return;
        j(a, function(d) {
            __p && __p();
            b("setTimeoutAcrossTransitions")(function() {
                __p && __p();
                if (!d) {
                    i.error("fetch_failure", {
                        id: a
                    });
                    return
                }
                b("Bootloader").loadModules(["Hovercard"], function(b) {
                    b = b.getDialog(d);
                    if (!b) {
                        i.error("no_hovercard", {
                            id: a,
                            endpoint: d
                        });
                        return
                    }
                    a == c.getActiveID() && c.showHovercard(a, b)
                }, "ChatHovercard")
            }, 0)
        })
    }

    function l(a, b) {
        __p && __p();
        var c = [];

        function d(b) {
            b >= 0 && b < a.length && c.push(a[b])
        }
        b = a.indexOf(b);
        if (b > -1) {
            d(b);
            for (var e = 1; e < g; e++) d(b + e), d(b - e)
        }
        return c.filter(function(a) {
            return a
        })
    }

    function m(a, c) {
        c = c.getActiveID();
        if (c) {
            a = a.getShowingUsers();
            a = l(a, c);
            j(a, b("emptyFunction"))
        }
    }

    function a(a) {
        var c = a.getHoverController();
        c.registerDefault(k);
        c.subscribe("hover", b("debounce")(m.bind(null, a, c), 100))
    }
    e.exports = a
}), null);
__d("ChatSidebarActionTypes", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("keyMirror")({
        AFTER_DOM_LOAD: null,
        INIT: null,
        LOADED: null,
        SET_ENABLED: null,
        SHOW: null
    })
}), null);
__d("ChatSidebarPresencePrivacyActions", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        PRIVACY_CHANGED: null,
        USER_PRESENCE_CHANGED: null
    });
    e.exports = a
}), null);
__d("ChatSidebarRecentCallsActions", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        RECENT_CALLS_UPDATED: null
    });
    e.exports = a
}), null);
__d("ChatSidebarActions", ["ChatDispatcher", "ChatSidebarActionTypes", "ChatSidebarPresencePrivacyActions", "ChatSidebarRecentCallsActions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
        init: function() {
            b("ChatDispatcher").dispatch({
                type: b("ChatSidebarActionTypes").INIT
            })
        },
        afterDomLoad: function() {
            b("ChatDispatcher").dispatch({
                type: b("ChatSidebarActionTypes").AFTER_DOM_LOAD
            })
        },
        loaded: function() {
            b("ChatDispatcher").dispatch({
                type: b("ChatSidebarActionTypes").LOADED
            })
        },
        disable: function() {
            b("ChatDispatcher").dispatch({
                type: b("ChatSidebarActionTypes").SET_ENABLED,
                enabled: !1,
                sidebarType: "buddylist"
            })
        },
        enable: function(a) {
            b("ChatDispatcher").dispatch({
                type: b("ChatSidebarActionTypes").SET_ENABLED,
                enabled: !0,
                sidebarType: a
            })
        },
        show: function(a) {
            b("ChatDispatcher").dispatch({
                type: b("ChatSidebarActionTypes").SHOW,
                sidebarType: a
            })
        },
        userPresenceChanged: function() {
            b("ChatDispatcher").dispatch({
                type: b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED
            })
        },
        privacyChanged: function() {
            b("ChatDispatcher").dispatch({
                type: b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED
            })
        },
        recentCallsUpdated: function(a) {
            b("ChatDispatcher").dispatch({
                type: b("ChatSidebarRecentCallsActions").RECENT_CALLS_UPDATED,
                calls: a
            })
        }
    };
    e.exports = a
}), null);
__d("ChatSidebarDropdownConstants", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        SOUND: "sound",
        ADVANCED_SETTINGS: "advanced_settings",
        BLOCK_SETTINGS: "block_settings",
        TURN_OFF_DIALOG: "turn_off_dialog",
        CLOSE_ALL_TABS: "close_all_tabs",
        LOWER_ALL_TABS: "lower_all_tabs",
        TOGGLE_DISCOVER_BOTS: "toggle_discover_bots",
        SIDEBAR: "sidebar",
        HIDE_GROUPS: "hide_groups",
        ONLINE: "online",
        VIDEOCALL_ON: "videoon",
        VIDEOCALL_OFF: "videooff",
        PAUSE: "pause",
        SHOW_APPS: "show_apps",
        HIDE_APPS: "hide_apps",
        HIDE_MARKETPLACE: "hide_marketplace",
        SHOW_TICKER: "show_ticker",
        HIDE_TICKER: "hide_ticker",
        HIDE_ADMINED_PAGES: "hide_admined_pages",
        HIDE_BUSINESSES: "hide_businesses",
        EMOJI_SETTINGS: "emoji_settings",
        TURN_OFF_CHAT_TABS: "turn_off_chat_tabs"
    });
    e.exports = a
}), null);
__d("FBRTCDispatcher", ["Dispatcher_DEPRECATED"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = new(b("Dispatcher_DEPRECATED"))()
}), null);
__d("FluxStoreInstrumentation", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null;
    a = {
        inject: function(a) {
            h == null || g(0, 2260), h = a
        },
        onEmitChange: function(a) {
            return h ? h.emitChange(a) : null
        }
    };
    e.exports = a
}), null);
__d("concatArrays", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b;
        return (b = []).concat.apply(b, a)
    }
    e.exports = a
}), null);
__d("distinctArray", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        __p && __p();
        if (a == null) return [];
        if (Array.isArray(a)) {
            var b = a.length;
            if (b <= 200) {
                var c = [];
                for (var d = 0; d < b; d++) {
                    var e = a[d];
                    c.indexOf(e) === -1 && c.push(e)
                }
                return c
            }
        }
        return Array.from(new Set(a).values())
    }
    e.exports = a
}), null);
__d("FluxStore", ["invariant", "EventEmitter", "FluxStoreInstrumentation", "concatArrays", "distinctArray"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a(a) {
            this.__className = this.constructor.name, this.__moduleID = this.constructor.__moduleID, this.__changed = !1, this.__changeEvent = "change", this.__dispatcher = a, this.__emitter = new(b("EventEmitter"))(), this.$3 = !1, this.__registerDispatcherCallback(a)
        }
        var c = a.prototype;
        c.__registerDispatcherCallback = function(a) {
            var b = this;
            this.$2 = a.register(function(a) {
                return b.__invokeOnDispatch(a)
            }, this.__getIDForDispatcher(), this, this.__moduleID)
        };
        c.addListener = function(a) {
            return this.__emitter.addListener(this.__changeEvent, a)
        };
        c.getActionTypes = function() {
            __p && __p();
            if (!this.$1) {
                var a = this.__getActionTypes();
                if (a != null) {
                    var c = this.getDependencyStores();
                    if (c.length > 0) {
                        var d = !1;
                        c = b("concatArrays")(c.map(function(a) {
                            a = a && a.getActionTypes ? a.getActionTypes() : null;
                            a == null && (d = !0);
                            return a
                        }).filter(Boolean));
                        d ? a = null : a = b("distinctArray")(a.concat(c))
                    }
                }
                this.$1 = a
            }
            return this.$1
        };
        c.getDispatcher = function() {
            return this.__dispatcher
        };
        c.getDispatchToken = function() {
            return this.$2
        };
        c.getDependencyDispatchTokens = function() {
            this.$5 || (this.$5 = this.getDependencyStores().map(function(a) {
                return a && a.getDispatchToken && a.getDispatchToken()
            }));
            return this.$5
        };
        c.getDependencyStores = function() {
            this.$4 || (this.$4 = b("distinctArray")(this.__getDependencyStores()));
            return this.$4
        };
        c.addStoreDependency = function(a) {
            var b = this.__dispatcher.registerDependency;
            b && b(this.getDispatchToken(), a.getDispatchToken())
        };
        c.hasChanged = function() {
            this.__dispatcher.isDispatching() || g(0, 1147, this.__className);
            return this.__changed
        };
        c.__setAsUnchanged = function() {
            this.__changed = !1
        };
        c.__emitChange = function() {
            this.__dispatcher.isDispatching() || g(0, 1148, this.__className);
            if (this.__changed) return;
            b("FluxStoreInstrumentation").onEmitChange(this.__moduleID != null ? this.__moduleID : "unknown");
            this.__changed = !0
        };
        c.__invokeOnDispatch = function(a) {
            this.__changed = !1, this.__onDispatch(a), this.__inform()
        };
        c.__inform = function(a) {
            this.$3 = this.__changed || this.$3;
            var b = this.__dispatcher.shouldAllowInforms == null || this.__dispatcher.shouldAllowInforms();
            b && this.$3 && (this.$3 = !1, this.__emitter.emit(a || this.__changeEvent))
        };
        c.__onDispatch = function(a) {
            g(0, 1149, this.__className)
        };
        c.__getActionTypes = function() {
            return null
        };
        c.__getDependencyStores = function() {
            return []
        };
        c.__getIDForDispatcher = function() {
            return this.__className
        };
        return a
    }();
    a;
    e.exports = a
}), null);
__d("FBRTCStore", ["FBRTCDispatcher", "FluxStore"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.call(this, b("FBRTCDispatcher")) || this
        }
        var d = c.prototype;
        d.__emitChange = function() {
            this.__emitter.emit(this.__changeEvent)
        };
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    e.exports = a
}), null);
__d("FBRTCCallBlockingStore", ["Arbiter", "AsyncRequest", "Bootloader", "ChannelConstants", "FBRTCDispatcher", "FBRTCStore", "clearTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = !1,
        h = 0,
        i = null,
        j = "call_block_setting_changed";
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.init = function(a) {
            this.$FBRTCCallBlockingStore1(a), b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("videocall_block_setting"), this.$FBRTCCallBlockingStore2.bind(this))
        };
        d.__onDispatch = function(a) {
            if (a.type !== j) return;
            this.$FBRTCCallBlockingStore1(a.data)
        };
        d.$FBRTCCallBlockingStore1 = function(a) {
            switch (a) {
                case 0:
                    g = !1;
                    this.$FBRTCCallBlockingStore3();
                    break;
                case -1:
                    g = !0;
                    this.$FBRTCCallBlockingStore3();
                    break;
                default:
                    g = !0, this.$FBRTCCallBlockingStore4(a)
            }
            this.__emitChange()
        };
        d.$FBRTCCallBlockingStore4 = function(a) {
            i === null && (i = b("setTimeoutAcrossTransitions")(this.turnOnVideoCalling.bind(this), a * 1e3))
        };
        d.getBlockingStatus = function() {
            return g
        };
        d.turnOnVideoCalling = function() {
            new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(this.$FBRTCCallBlockingStore5.bind(this)).setData({
                call_blocked_until: 0
            }).send()
        };
        d.turnOffVideoCalling = function(a) {
            h = a, new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(this.$FBRTCCallBlockingStore6.bind(this)).setData({
                call_blocked_until: a
            }).send()
        };
        d.$FBRTCCallBlockingStore3 = function() {
            i && (b("clearTimeout")(i), i = null)
        };
        d.$FBRTCCallBlockingStore5 = function() {
            b("FBRTCDispatcher").dispatch({
                type: j,
                data: 0
            }), b("Bootloader").loadModules(["RTWebUserActionLogger"], function(a) {
                a.logCheckpoint({
                    checkpoint: "rtc_enabled"
                })
            }, "FBRTCCallBlockingStore")
        };
        d.$FBRTCCallBlockingStore6 = function() {
            b("FBRTCDispatcher").dispatch({
                type: j,
                data: h
            }), b("Bootloader").loadModules(["RTWebUserActionLogger"], function(a) {
                a.logCheckpoint({
                    checkpoint: h === -1 ? "rtc_disabled_permanently" : "rtc_disabled_temporarily"
                })
            }, "FBRTCCallBlockingStore")
        };
        d.$FBRTCCallBlockingStore2 = function(a, c) {
            b("FBRTCDispatcher").dispatch({
                type: j,
                data: c.obj.value
            })
        };
        return c
    }(b("FBRTCStore"));
    e.exports = new a()
}), null);
__d("ChatOptions", ["Arbiter", "ArbiterMixin", "Bootloader", "ChannelConstants", "ChatSidebarActions", "ChatSidebarDropdownConstants", "FBRTCCallBlockingStore", "JSLogger", "PresenceUtil", "mixin", "ChatOptionsInitialData"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = b("JSLogger").create("chat_options"),
        h = {};
    (function() {
        __p && __p();
        var a = b("ChatOptionsInitialData");
        for (var c in a) {
            var d = a[c];
            switch (c) {
                case "call_blocked_until":
                    b("FBRTCCallBlockingStore").init(d);
                    break;
                case b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS:
                    d !== -1 && (h[c] = !!d);
                    break;
                default:
                    h[c] = !!d
            }
        }
    })();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getSetting = function(a) {
            return h[a]
        };
        d.setSetting = function(a, c, d) {
            __p && __p();
            if (a === "sidebar_mode") {
                b("Bootloader").loadModules(["ChatSidebarVisibility"], function(a) {
                    return a.shouldShowSidebarIgnoreEnabled(null, function(a, d) {
                        c ? b("ChatSidebarActions").enable(a ? "sidebar" : "buddylist") : b("ChatSidebarActions").disable()
                    })
                }, "ChatOptions");
                return
            }
            if (this.getSetting(a) == c) return;
            d && (d = "from_" + d, g.log(d, {
                name: a,
                new_value: c,
                old_value: this.getSetting(a)
            }));
            h[a] = !!c;
            b("Arbiter").inform("chat/option-changed", {
                name: a,
                value: c
            })
        };
        return c
    }(b("mixin")(b("ArbiterMixin")));
    b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("setting"), function(a, c) {
        a = c.obj;
        if (a.window_id === b("PresenceUtil").getSessionID()) return;
        i.setSetting(a.setting, !!a.value, "channel")
    });
    b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT, function(a, b) {
        b.chat_options = h
    });
    var i = new a();
    e.exports = i
}), null);
__d("ChatOrderedListHover", ["csx", "ArbiterMixin", "CSS", "ErrorUtils", "Event", "LayerHideOnBlur", "Parent", "clearTimeout", "mixin", "setTimeoutAcrossTransitions", "shield"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h;

    function i(a) {
        b("CSS").addClass(a, "fetching")
    }

    function j(a) {
        b("CSS").removeClass(a, "fetching")
    }
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c) {
            var d;
            d = a.call(this) || this;
            d._orderedList = c;
            d._root = c.getRoot();
            b("Event").listen(d._root, "mouseover", d._mouseOver.bind(babelHelpers.assertThisInitialized(d)));
            b("Event").listen(d._root, "mouseleave", d._mouseLeave.bind(babelHelpers.assertThisInitialized(d)));
            c.subscribe("click", b("shield")(d._hide, babelHelpers.assertThisInitialized(d)));
            return d
        }
        var d = c.prototype;
        d._mouseOver = function(a) {
            if (this._paused) return;
            a = a.getTarget();
            a = b("Parent").bySelector(a, "._42fz") || b("Parent").bySelector(a, "._5a58");
            a && this._setActiveItem(a)
        };
        d._mouseLeave = function(a) {
            this._setActiveItem(null)
        };
        d._clearTimeouts = function() {
            this._showTimeout && b("clearTimeout")(this._showTimeout), this._showTimeout = null, this._hideTimeout && b("clearTimeout")(this._hideTimeout), this._hideTimeout = null
        };
        d._hide = function() {
            this._showingDialog && (this._showingDialog.hide(), this._showingDialog = null, this._showingID = null)
        };
        d._show = function() {
            var a = this.getActiveID(),
                c = !1;
            this._defaultHandler && (c = !0, (h || (h = b("ErrorUtils"))).applyWithGuard(this._defaultHandler, {}, [a, this]));
            c && this._showingID != this.getActiveID() && i(this._activeItem)
        };
        d._setActiveItem = function(a) {
            __p && __p();
            var c = this;
            if (a != this._activeItem) {
                this._clearTimeouts();
                this._activeItem && j(this._activeItem);
                if (a) {
                    this._activeItem = a;
                    a = this._showingDialog ? 0 : 600;
                    this._showTimeout = b("setTimeoutAcrossTransitions")(function() {
                        return c._show()
                    }, a);
                    this.inform("hover")
                } else this._activeItem = null, this._hideTimeout = b("setTimeoutAcrossTransitions")(function() {
                    return c._hide()
                }, 10), this.inform("leave")
            }
        };
        d.registerDefault = function(a) {
            this._defaultHandler = a
        };
        d.getActiveID = function() {
            var a = this._activeItem && this._orderedList.getUserForNode(this._activeItem);
            return a || null
        };
        d.showHovercard = function(a, c) {
            __p && __p();
            if (a == this.getActiveID() && a != this._showingID) {
                this._clearTimeouts();
                j(this._activeItem);
                this._hide();
                this._showingDialog = c;
                this._showingID = a;
                var d = c.subscribe("mouseenter", this._setActiveItem.bind(this, this._activeItem)),
                    e = c.subscribe("mouseleave", function() {
                        d.unsubscribe(), this._setActiveItem(null)
                    }.bind(this)),
                    f = c.subscribe("hide", function() {
                        this.inform("hovercard_hide"), d.unsubscribe(), e.unsubscribe(), f.unsubscribe()
                    }.bind(this));
                c.enableBehavior(b("LayerHideOnBlur")).setContext(this._activeItem).setPosition("left").show();
                this.inform("hovercard_show")
            }
        };
        return c
    }(b("mixin")(b("ArbiterMixin")));
    Object.assign(a.prototype, {
        _root: null,
        _activeItem: null,
        _hideTimeout: null,
        _showTimeout: null,
        _showingDialog: null,
        _showingID: null,
        _defaultHandler: null
    });
    e.exports = a
}), null);
__d("ChatSidebarConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        IMAGE_SIZE: 32,
        getImageSize: function() {
            return g.IMAGE_SIZE
        },
        getItemHeight: function() {
            return g.IMAGE_SIZE + 8
        }
    };
    e.exports = g
}), null);
__d("ChatSidebarPreloadStore", ["InitialChatFriendsList"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        onLoaded: function(a) {
            a({
                buddies: (a = b("InitialChatFriendsList")).list,
                groups: a.groups,
                shortProfiles: a.shortProfiles,
                nearby: a.nearby,
                adminedPages: a.adminedPages,
                marketplaceThreads: a.marketplaceThreads,
                pageListModule: a.pageListModule,
                pymmList: b("InitialChatFriendsList").pymmList || {},
                recentPageList: b("InitialChatFriendsList").recentPageList,
                profiles: []
            })
        }
    };
    e.exports = a
}), null);
__d("ChatUnreadCountActionTypes", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("keyMirror")({
        COUNT_UPDATED: null
    })
}), null);
__d("XChatUserInfoAllAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/chat/user_info_all/", {
        viewer: {
            type: "Int",
            required: !0
        }
    })
}), null);
__d("ShortProfilesBootstrapper", ["Promise", "AsyncRequest", "BanzaiODS", "CurrentUser", "JSLogger", "XChatUserInfoAllAsyncController"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 5,
        h = 1e4,
        i = b("XChatUserInfoAllAsyncController").getURIBuilder().setInt("viewer", b("CurrentUser").getID()).getURI(),
        j = b("JSLogger").create("short_profiles");
    a = function() {
        __p && __p();

        function a(a) {
            __p && __p();
            var c = this;
            this.$1 = a;
            this.$2 = new(b("Promise"))(function(a, b) {
                c.$3 = a, c.$4 = b
            });
            this.$5 = !1;
            this.$6 = null;
            this.$7 = 0;
            this.$8 = 0;
            this.$9 = 0;
            this.$10 = !1;
            this.$11 = !1
        }
        var c = a.prototype;
        c.fetchAll = function() {
            __p && __p();
            var a = this;
            this.$12();
            if (this.$5 || this.$6) return this.$2;
            if (this.$7 >= g) {
                this.$13();
                return this.$2
            }
            this.$7++;
            this.$14();
            this.$6 = new(b("AsyncRequest"))(i).setHandler(function(b) {
                a.$6 = null, a.$5 = !0, a.$15(), a.$1(b.payload), a.$3()
            }).setErrorHandler(function() {
                a.$6 = null, a.$8++, a.$16()
            }).setTimeoutHandler(h, function() {
                a.$6 = null, a.$9++, a.$17(), a.fetchAll()
            }).setAllowCrossPageTransition(!0);
            this.$6.send();
            return this.$2
        };
        c.isBootstrapped = function() {
            return this.$5
        };
        c.isBootstrapping = function() {
            return !!this.$6
        };
        c.getAttemptCount = function() {
            return this.$7
        };
        c.getErrorCount = function() {
            return this.$8
        };
        c.getTimeoutCount = function() {
            return this.$9
        };
        c.$12 = function() {
            this.$10 || (j.log("bootstrap_start"), b("BanzaiODS").bumpEntityKey(2966, "chat.web", "typeahead.bootstrap.starts"), this.$10 = !0)
        };
        c.$14 = function() {
            j.log("bootstrap_attempt"), b("BanzaiODS").bumpEntityKey(2966, "chat.web", "typeahead.bootstrap.attempts")
        };
        c.$15 = function() {
            j.log("bootstrap_success"), b("BanzaiODS").bumpEntityKey(2966, "chat.web", "typeahead.bootstrap.successes"), this.$7 > 1 && b("BanzaiODS").bumpEntityKey(2966, "chat.web", "typeahead.bootstrap.successes_after_retries")
        };
        c.$16 = function() {
            j.log("bootstrap_error"), b("BanzaiODS").bumpEntityKey(2966, "chat.web", "typeahead.bootstrap.errors")
        };
        c.$17 = function() {
            j.log("bootstrap_timeout"), b("BanzaiODS").bumpEntityKey(2966, "chat.web", "typeahead.bootstrap.timeouts")
        };
        c.$13 = function() {
            this.$11 || (j.log("bootstrap_giveup"), b("BanzaiODS").bumpEntityKey(2966, "chat.web", "typeahead.bootstrap.giveups"), this.$11 = !0, this.$4())
        };
        return a
    }();
    e.exports = a
}), null);
__d("XChatUserInfoAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/chat/user_info/", {
        ids: {
            type: "IntVector",
            defaultValue: []
        }
    })
}), null);
__d("ShortProfiles", ["AjaxLoader", "Arbiter", "CurrentUser", "JSLogger", "ShortProfilesBootstrapper", "URI", "XChatUserInfoAsyncController", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g, h = null,
        i = new(b("AjaxLoader"))(b("XChatUserInfoAsyncController").getURIBuilder().getURI().toString(), "profiles"),
        j = {
            get: function(a, b) {
                this.getMulti([a], function(c) {
                    return b(c[a], a)
                })
            },
            getMulti: function(a, c) {
                i.get(a, c || b("emptyFunction"))
            },
            getNow: function(a) {
                return i.getNow(a) || null
            },
            getMultiNow: function(a) {
                var b = {};
                a.forEach(function(a) {
                    return b[a] = j.getNow(a)
                });
                return b
            },
            getCachedProfileIDs: function() {
                return i.getCachedKeys()
            },
            hasAll: function() {
                return !!h && h.isBootstrapped()
            },
            fetchAll: function() {
                h || (h = new(b("ShortProfilesBootstrapper"))(function(a) {
                    i.set(a)
                }));
                return h.fetchAll()
            },
            set: function(a, b) {
                var c = {};
                c[a] = b;
                this.setMulti(c)
            },
            setMulti: function(a) {
                __p && __p();
                if (b("CurrentUser").isWorkUser()) {
                    var c = {};
                    Object.keys(a).forEach(function(d) {
                        var e = a[d];
                        (e.type !== "fb4c" || !e.uri) && (c[d] = e);
                        var f = new(g || (g = b("URI")))(e.uri).setDomain("").setProtocol("").toString();
                        c[d] = babelHelpers["extends"]({}, e, {
                            uri: f
                        })
                    });
                    a = c
                }
                i.set(a)
            }
        };
    b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT, function(a, c) {
        a = j.getCachedProfileIDs();
        var d = b("JSLogger").getEntries(function(a) {
            return a.cat == "short_profiles" || a.cat == "chat_typeahead"
        });
        c.chat_typeahead = {
            bootstrapped: h && h.isBootstrapped(),
            bootstrapping: h && h.isBootstrapping(),
            bootstrap_attempts: h && h.getAttemptCount(),
            bootstrap_errors: h && h.getErrorCount(),
            bootstrap_timeouts: h && h.getTimeoutCount(),
            entries: a,
            entry_count: a.length,
            history: d
        }
    });
    e.exports = j
}), null);
__d("TokenizeUtil", ["nullthrows"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = /[ ]+/g,
        h = /[^ ]+/g,
        i = new RegExp("[^ " + l() + "]+|" + a(), "g"),
        j = new RegExp(a(), "g"),
        k = 1e3;

    function l() {
        return ".,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;\u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f\uff1a-\uff1f\uff01-\uff0f\uff3b-\uff40\uff5b-\uff65\u2e2e\u061f\u066a-\u066c\u061b\u060c\u060d\ufd3e\ufd3f\u1801\u0964\u104a\u104b\u2010-\u2027\u2030-\u205e\xa1-\xb1\xb4-\xb8\xba\xbb\xbf"
    }

    function a() {
        return "[" + l() + "]"
    }
    var m = {},
        n = {
            a: "\u0430 \xe0 \xe1 \xe2 \xe3 \xe4 \xe5 \u0101",
            b: "\u0431",
            c: "\u0446 \xe7 \u010d",
            d: "\u0434 \xf0 \u010f \u0111",
            e: "\u044d \u0435 \xe8 \xe9 \xea \xeb \u011b \u0113",
            f: "\u0444",
            g: "\u0433 \u011f \u0123",
            h: "\u0445 \u0127",
            i: "\u0438 \xec \xed \xee \xef \u0131 \u012b",
            j: "\u0439",
            k: "\u043a \u0138 \u0137",
            l: "\u043b \u013e \u013a \u0140 \u0142 \u013c",
            m: "\u043c",
            n: "\u043d \xf1 \u0148 \u0149 \u014b \u0146",
            o: "\u043e \xf8 \xf6 \xf5 \xf4 \xf3 \xf2",
            p: "\u043f",
            r: "\u0440 \u0159 \u0155",
            s: "\u0441 \u015f \u0161 \u017f",
            t: "\u0442 \u0165 \u0167 \xfe",
            u: "\u0443 \u044e \xfc \xfb \xfa \xf9 \u016f \u016b",
            v: "\u0432",
            y: "\u044b \xff \xfd",
            z: "\u0437 \u017e",
            ae: "\xe6",
            oe: "\u0153",
            ts: "\u0446",
            ch: "\u0447",
            ij: "\u0133",
            sh: "\u0448",
            ss: "\xdf",
            ya: "\u044f"
        };
    for (var o in n) {
        var p = n[o].split(" ");
        for (var q = 0; q < p.length; q++) m[p[q]] = o
    }

    function c(a) {
        return a.replace(j, " ")
    }

    function r(a) {
        a = a.toLowerCase();
        var b = "",
            c;
        for (var d = a.length; d--;) c = a.charAt(d), b = (m[c] || c) + b;
        return b.replace(g, " ")
    }

    function s(a, b) {
        b === void 0 && (b = h);
        var c = [],
            d = b.exec(a);
        while (d) d = d[0], c.push(d), d = b.exec(a);
        return c
    }

    function d(a, b) {
        __p && __p();
        b === void 0 && (b = h);
        var c = {},
            d = 0;
        return function(e, f) {
            if (!Object.prototype.hasOwnProperty.call(c, e)) {
                d >= k && (c = {}, d = 0);
                var g = r(e),
                    h = a(g);
                c[e] = {
                    value: e,
                    flatValue: g,
                    tokens: s(h, b),
                    isPrefixQuery: !!h && h[h.length - 1] != " "
                };
                d++
            }
            f != null && f !== !1 && c[e].sortedTokens === void 0 && (c[e].sortedTokens = c[e].tokens.slice(), c[e].sortedTokens.sort(function(a, b) {
                return b.length - a.length
            }));
            return c[e]
        }
    }
    var t = d(c),
        u = d(function(a) {
            return a
        }, i);

    function f(a, c, d) {
        __p && __p();
        var e = a == "query" || a == "query_punc",
            f = a == "aligned",
            g = a == "query_punc" ? u : t;
        c = g(c, a == "prefix");
        var h = a == "prefix" ? b("nullthrows")(c.sortedTokens) : c.tokens,
            i = g(d).tokens,
            j = {},
            k = c.isPrefixQuery && (e || f) ? h.length - 1 : null;
        g = function(b, c) {
            for (var d = 0; d < i.length; ++d) {
                var g = i[d];
                if (!j[d] && (g == b || ((e || f) && c === k || a == "prefix") && g.indexOf(b) === 0)) return j[d] = !0;
                if (f && !j[d]) return !1
            }
            return !1
        };
        return Boolean(h.length && h.every(g))
    }
    p = {
        flatten: r,
        parse: t,
        parseIncludingPunctuations: u,
        getPunctuation: a,
        makeParse: d,
        isExactMatch: f.bind(null, "exact"),
        isQueryMatch: f.bind(null, "query"),
        isQueryMatchIncludingPunctuations: f.bind(null, "query_punc"),
        isAlignedMatch: f.bind(null, "aligned"),
        isPrefixMatch: f.bind(null, "prefix"),
        tokenize: s
    };
    e.exports = p
}), null);
__d("ChatSortUsers", ["ShortProfiles", "TokenizeUtil"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {};

    function h(a) {
        if (g[a]) return g[a];
        var c = (b("ShortProfiles").getNow(a) || {}).name;
        return c ? g[a] = b("TokenizeUtil").flatten(c) : "~"
    }
    a = {
        sortAlphabetical: function(a, b) {
            a = h(a);
            b = h(b);
            return a !== b ? a < b ? -1 : 1 : 0
        }
    };
    e.exports = a
}), null);
__d("PresenceOrderedList", ["ChatSidebarPreloadStore", "ChatSortUsers", "PresencePrivacy", "PresenceStatus"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a) {
        return a.map(function(a) {
            var b = a.slice(0, -2);
            a = Number(a.slice(-1));
            return [b, a]
        })
    }

    function h(a, c) {
        __p && __p();
        var d = [];
        a.forEach(function(a) {
            var e = a[0];
            a = a[1];
            if (d.length >= c) return;
            if (b("PresencePrivacy").getFriendVisibility(e) == b("PresencePrivacy").BLACKLISTED) return;
            a == b("PresenceStatus").get(e) && d.push(e)
        });
        return d
    }
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = null
        }
        var c = a.prototype;
        c.getSorted = function(a, c) {
            var d = this;
            if (this.$1) {
                c(h(this.$1, a));
                return
            }
            b("ChatSidebarPreloadStore").onLoaded(function(b) {
                b = b.buddies;
                d.$1 = g(b);
                c(h(d.$1, a))
            })
        };
        c.getAvailableSorted = function(a) {
            var c = b("PresenceStatus").getOnlineIDs();
            a && (c = c.filter(function(b) {
                return a && a.indexOf(b) === -1
            }));
            return c.sort(b("ChatSortUsers").sortAlphabetical)
        };
        c.getAllSorted = function(a) {
            var c = [],
                d = this.$1 || [];
            b("PresenceStatus").getAllIDs().concat(d.map(function(a) {
                return a[0]
            })).forEach(function(a) {
                return c.indexOf(a) === -1 && c.push(a)
            });
            a && (c = c.filter(function(b) {
                return a && a.indexOf(b) === -1
            }));
            return c.sort(b("ChatSortUsers").sortAlphabetical)
        };
        return a
    }();
    e.exports = new a()
}), null);
__d("PresenceStatusStore", ["ChatDispatcher", "FluxStore", "PresenceStatus", "PresenceStatusActionTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.call(this, b("ChatDispatcher")) || this
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            a = a.type;
            switch (a) {
                case b("PresenceStatusActionTypes").AVAILABILITY_CHANGED:
                    this.__emitChange();
                    break;
                default:
                    break
            }
        };
        d.get = function(a) {
            return b("PresenceStatus").get(a)
        };
        d.getIsPlaying = function(a) {
            return b("PresenceStatus").isPlayingCanvasGameUser(a)
        };
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    e.exports = new a()
}), null);
__d("ShortProfilesActionTypes", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("keyMirror")({
        PROFILE_UPDATED: null
    })
}), null);
__d("ChatProfileStore", ["ChatSidebarPreloadStore"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {};
    a = {
        init: function() {
            b("ChatSidebarPreloadStore").onLoaded(function(a) {
                var b = a.profiles,
                    c = a.nearby;
                return b.filter(function(a) {
                    return !c || c.indexOf(a.id) === -1
                }).forEach(function(a) {
                    var b = new Date();
                    b = a.birthdate && b.getDate() === a.birthdate.day && b.getMonth() + 1 === a.birthdate.month;
                    var c = a.profile_picture && a.profile_picture.uri ? a.profile_picture.uri : null;
                    g[a.id] = {
                        id: a.id,
                        is_birthday: b,
                        thumbSrc: c,
                        name: a.name,
                        is_messenger_only: !!a.is_messenger_only
                    }
                })
            })
        },
        get: function(a) {
            return g[a]
        }
    };
    e.exports = a
}), null);
__d("ShortProfilesStore", ["ChatDispatcher", "ChatProfileStore", "FluxStore", "ShortProfiles", "ShortProfilesActionTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.call(this, b("ChatDispatcher")) || this
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            a = a.type;
            switch (a) {
                case b("ShortProfilesActionTypes").PROFILE_UPDATED:
                    this.__emitChange();
                    break;
                default:
                    break
            }
        };
        d.getNow = function(a) {
            var c = b("ChatProfileStore").get(a);
            c || (c = b("ShortProfiles").getNow(a));
            return c
        };
        d.getMulti = function(a) {
            b("ShortProfiles").getMulti(a, this.$ShortProfilesStore1)
        };
        d.$ShortProfilesStore1 = function(a) {
            b("ChatDispatcher").dispatch({
                type: b("ShortProfilesActionTypes").PROFILE_UPDATED
            })
        };
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    e.exports = new a()
}), null);
__d("ChatSidebarStore", ["AvailableListConstants", "ChatConfig", "ChatDispatcher", "ChatOptions", "ChatOptionsInitialData", "ChatSidebarActionTypes", "ChatUnreadCountActionTypes", "CurrentUser", "FluxStore", "InitialChatFriendsList", "PresenceOrderedList", "PresencePrivacy", "PresenceStatus", "PresenceStatusActionTypes", "PresenceStatusStore", "ShortProfiles", "ShortProfilesActionTypes", "ShortProfilesStore", "gkx", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g;

    function h(a) {
        return a.map(function(a) {
            var b = a.slice(0, -2);
            a = Number(a.slice(-1));
            return [b, a]
        })
    }

    function i(a, c, d) {
        d === void 0 && (d = []);
        return a.reduce(function(a, e) {
            var f = e[0];
            e = e[1];
            a.length < c && b("PresencePrivacy").getFriendVisibility(f) !== b("PresencePrivacy").BLACKLISTED && e === b("PresenceStatus").get(f) && !d.includes(f) && a.push(f);
            return a
        }, [])
    }

    function j(a) {
        return b("PresencePrivacy").getVisibility() == b("PresencePrivacy").ONLINE ? a.filter(function(a) {
            return b("PresencePrivacy").allows(a)
        }) : a
    }
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var c;
            c = a.call(this, b("ChatDispatcher")) || this;
            c.$ChatSidebarStore2 = {
                enabled: !1,
                initTime: 0,
                initialized: !1,
                isAfterDomLoad: !1,
                loaded: !1,
                visible: null
            };
            c.setupShortProfiles();
            c.$ChatSidebarStore3 = {
                enabled: !!b("ChatOptionsInitialData").sidebar_mode,
                initTime: (g || (g = b("performanceAbsoluteNow")))(),
                initialized: !1,
                isAfterDomLoad: !1,
                loaded: !1,
                visible: null
            };
            return c
        }
        var d = c.prototype;
        d.setupShortProfiles = function() {
            var a = b("InitialChatFriendsList").shortProfiles;
            a && b("ShortProfiles").setMulti(a)
        };
        d.__onDispatch = function(a) {
            __p && __p();
            var c = a.type;
            this.$ChatSidebarStore2 = babelHelpers["extends"]({}, this.$ChatSidebarStore3);
            switch (c) {
                case b("ChatSidebarActionTypes").INIT:
                    this.$ChatSidebarStore2.initialized || (this.$ChatSidebarStore3 = babelHelpers["extends"]({}, this.$ChatSidebarStore3, {
                        initTime: (g || (g = b("performanceAbsoluteNow")))()
                    }));
                    this.$ChatSidebarStore3 = babelHelpers["extends"]({}, this.$ChatSidebarStore3, {
                        initialized: !0
                    });
                    break;
                case b("ChatSidebarActionTypes").AFTER_DOM_LOAD:
                    this.$ChatSidebarStore3 = babelHelpers["extends"]({}, this.$ChatSidebarStore3, {
                        isAfterDomLoad: !0
                    });
                    break;
                case b("ChatSidebarActionTypes").LOADED:
                    this.$ChatSidebarStore3 = babelHelpers["extends"]({}, this.$ChatSidebarStore3, {
                        loaded: !0
                    });
                    break;
                case b("ChatSidebarActionTypes").SHOW:
                    this.$ChatSidebarStore3 = babelHelpers["extends"]({}, this.$ChatSidebarStore3, {
                        visible: a.sidebarType
                    });
                    break;
                case b("ChatSidebarActionTypes").SET_ENABLED:
                    this.$ChatSidebarStore3 = babelHelpers["extends"]({}, this.$ChatSidebarStore3, {
                        enabled: a.enabled,
                        visible: a.sidebarType
                    });
                    break
            }
            if (b("gkx")("678655") && (c === b("PresenceStatusActionTypes").AVAILABILITY_CHANGED || c === b("ShortProfilesActionTypes").PROFILE_UPDATED || c === b("ChatUnreadCountActionTypes").COUNT_UPDATED)) {
                this.__emitChange();
                return
            }
            for (var d in this.$ChatSidebarStore3)
                if (Object.prototype.hasOwnProperty.call(this.$ChatSidebarStore3, d) && this.$ChatSidebarStore3[d] !== this.$ChatSidebarStore2[d]) {
                    this.__emitChange();
                    break
                }
        };
        d.getPrevState = function() {
            return this.$ChatSidebarStore2
        };
        d.getState = function() {
            return this.$ChatSidebarStore3
        };
        d.isInitialized = function() {
            return this.$ChatSidebarStore3.initialized
        };
        d.isLoaded = function() {
            return this.$ChatSidebarStore3.loaded
        };
        d.isAfterDomLoad = function() {
            return this.$ChatSidebarStore3.isAfterDomLoad
        };
        d.isEnabled = function() {
            return this.$ChatSidebarStore3.enabled
        };
        d.getInitTime = function() {
            return this.$ChatSidebarStore3.initTime
        };
        d.getVisibleType = function() {
            return this.$ChatSidebarStore3.visible
        };
        d.getUsersData = function(a) {
            __p && __p();
            a = this.getOrderedPresenceUserList(a);
            var c = b("InitialChatFriendsList").nearby,
                d = b("CurrentUser").isWorkUser() ? b("PresenceOrderedList").getAllSorted(a.concat(c)).filter(function(a) {
                    a = b("ShortProfilesStore").getNow(a);
                    return !a || a.type === "fb4c"
                }) : b("PresenceOrderedList").getAvailableSorted(a.concat(c)),
                e = b("CurrentUser").isWorkUser() ? b("PresenceOrderedList").getAllSorted(a.concat(c)).filter(function(a) {
                    a = b("ShortProfilesStore").getNow(a);
                    return a && a.type !== "fb4c"
                }) : [];
            a = a.filter(function(a) {
                return !c || c.indexOf(a) === -1
            });
            var f = j(a);
            a = b("PresencePrivacy").getOnlinePolicy() === b("PresencePrivacy").ONLINE_TO_WHITELIST && b("PresencePrivacy").getVisibility() ? a.filter(function(a) {
                return !b("PresencePrivacy").allows(a)
            }) : [];
            return {
                availableUsers: d,
                topUsers: f,
                workOthers: e,
                offlineUsers: a
            }
        };
        d.getExtraData = function(a) {
            __p && __p();
            var c, d = (c = b("InitialChatFriendsList")).groups,
                e = c.nearby,
                f = c.adminedPages,
                g = c.marketplaceThreads,
                h = c.pageListModule;
            c = c.pymmList;
            a--;
            b("ChatConfig").get("show_header") && a--;
            var i = !b("ChatOptions").getSetting("hide_businesses") && c && c.pages;
            i && (a -= 3);
            f = b("ChatOptions").getSetting("hide_admined_pages") ? [] : f;
            f.length && (a -= f.length + 1);
            var k = a,
                l = a;
            d = this.getGroupsToShow(d);
            var m = d.length;
            m === 0 && !b("ChatOptions").getSetting("hide_groups") && m++;
            m > 0 && (l -= m + 1);
            b("ChatConfig").get("nearby_friends_www_chatbar") && e.length > 0 && (l -= e.length + 1);
            b("ChatConfig").get("show_admined_pages") && f.length > 0 && (l -= f.length + 1);
            m = i && c ? c : {
                pages: []
            };
            b("ChatConfig").get("show_businesses") && m.pages.length > 0 && (l -= 2);
            l = Math.min(a, Math.max(l, b("ChatConfig").get("min_top_friends") || 0));
            i = j(e);
            return {
                isUserOffline: b("PresencePrivacy").isUserOffline(),
                groups: d,
                numTopFriends: l,
                nearby: i,
                marketplaceThreads: g,
                maxThreadSlots: k,
                adminedPages: f,
                pageListModule: h,
                pymmList: m
            }
        };
        d.getGroupsToShow = function(a) {
            if (b("ChatOptions").getSetting("hide_groups")) return [];
            return a.length > 1 ? a.sort(function(a, c) {
                return b("PresenceStatus").getGroup(c.mercury_thread.participants) - b("PresenceStatus").getGroup(a.mercury_thread.participants)
            }).slice(0, b("ChatConfig").getNumber("num_groups_to_show")) : a
        };
        d.getOrderedPresenceUserList = function(a) {
            if (this.$ChatSidebarStore1 && Array.isArray(this.$ChatSidebarStore1)) return i(this.$ChatSidebarStore1, a);
            this.$ChatSidebarStore1 = h(b("InitialChatFriendsList").list) || [];
            return i(this.$ChatSidebarStore1, a)
        };
        d.getStatusMap = function(a, c) {
            var d = {},
                e = {};
            a.forEach(function(a) {
                if (c) {
                    var f = b("PresenceStatusStore").getIsPlaying(a);
                    d[a] = f
                }
                f = b("PresenceStatusStore").get(a);
                f === b("AvailableListConstants").ACTIVE && (e[a] = f)
            });
            return {
                statusMap: e,
                playingMap: d
            }
        };
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    e.exports = new a()
}), null);
__d("ChatUnreadCountStore", ["ChatDispatcher", "ChatUnreadCountActionTypes", "FluxStore", "ifRequired"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.call(this, b("ChatDispatcher")) || this
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            a = a.type;
            switch (a) {
                case b("ChatUnreadCountActionTypes").COUNT_UPDATED:
                    this.__emitChange();
                    break;
                default:
                    break
            }
        };
        d.get = function(a) {
            return b("ifRequired")("ChatUnreadCount", function(b) {
                return b.get().getUnreadCountForUID(a) || 0
            }, function() {
                return 0
            })
        };
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    e.exports = new a()
}), null);
__d("ChatSidebarUserDetailsFactory", ["AvailableListConstants", "ChatUnreadCountStore", "LastActiveTimes", "PresencePrivacy", "PresenceStatusStore", "ShortProfilesStore", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {
        getUsersDetailedData: function(a, c) {
            var d = {},
                e = [];
            a.forEach(function(a) {
                if (!Object.prototype.hasOwnProperty.call(d, a)) {
                    var b = g._getDetailsForUserId(a, c);
                    d[a] = b;
                    b || e.push(a)
                }
            });
            e.length > 0 && b("ShortProfilesStore").getMulti(e);
            return d
        },
        _getDetailsForUserId: function(a, c) {
            var d = b("ShortProfilesStore").getNow(a);
            if (d) {
                var e = b("PresenceStatusStore").get(a);
                return {
                    shortProfile: d,
                    presencePrivacyAllows: b("PresencePrivacy").allows(a),
                    lastActiveTime: b("LastActiveTimes").getShortDisplay(a),
                    unreadCount: b("gkx")("780925") ? 0 : b("ChatUnreadCountStore").get(a),
                    isPlaying: c ? b("PresenceStatusStore").getIsPlaying(a) : !1,
                    status: e === b("AvailableListConstants").ACTIVE ? e : null
                }
            }
            return null
        }
    };
    e.exports = g
}), null);
__d("MessengerDivebarSizingTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function() {
            b("GeneratedLoggerUtils").log("logger:MessengerDivebarSizingLoggerConfig", this.$1, b("Banzai").BASIC)
        };
        c.logVital = function() {
            b("GeneratedLoggerUtils").log("logger:MessengerDivebarSizingLoggerConfig", this.$1, b("Banzai").VITAL)
        };
        c.logImmediately = function() {
            b("GeneratedLoggerUtils").log("logger:MessengerDivebarSizingLoggerConfig", this.$1, {
                signal: !0
            })
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setMaxItemSlots = function(a) {
            this.$1.max_item_slots = a;
            return this
        };
        c.setNumAdminedPages = function(a) {
            this.$1.num_admined_pages = a;
            return this
        };
        c.setNumGroups = function(a) {
            this.$1.num_groups = a;
            return this
        };
        c.setNumNearby = function(a) {
            this.$1.num_nearby = a;
            return this
        };
        c.setNumPymm = function(a) {
            this.$1.num_pymm = a;
            return this
        };
        c.setNumRecents = function(a) {
            this.$1.num_recents = a;
            return this
        };
        c.setNumTopFriends = function(a) {
            this.$1.num_top_friends = a;
            return this
        };
        c.setNumTopFriendsShown = function(a) {
            this.$1.num_top_friends_shown = a;
            return this
        };
        c.setSidebarType = function(a) {
            this.$1.sidebar_type = a;
            return this
        };
        c.setTime = function(a) {
            this.$1.time = a;
            return this
        };
        c.setWeight = function(a) {
            this.$1.weight = a;
            return this
        };
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        };
        return a
    }();
    var g = {
        max_item_slots: !0,
        num_admined_pages: !0,
        num_groups: !0,
        num_nearby: !0,
        num_pymm: !0,
        num_recents: !0,
        num_top_friends: !0,
        num_top_friends_shown: !0,
        sidebar_type: !0,
        time: !0,
        weight: !0
    };
    e.exports = a
}), null);
__d("requestIdleCallback", ["requireCond", "cr:694370"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:694370")
}), null);
__d("onAfterDisplay", ["NavigationMetrics", "TimeSlice", "requestIdleCallback"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [],
        h = !1;

    function a(a) {
        a = b("TimeSlice").guard(a, "onAfterDisplay invocation", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        });
        h ? b("requestIdleCallback")(a) : g.push(a)
    }
    b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED, function(a, c) {
        ["all_pagelets_displayed", "e2e"].indexOf(c.event) > -1 && !h && (h = !0, g.forEach(function(a) {
            b("requestIdleCallback")(a)
        }))
    });
    e.exports = a
}), null);
__d("ChatOrderedList", ["csx", "Arbiter", "ArbiterMixin", "AvailableList", "AvailableListConstants", "Bootloader", "ChatConfig", "ChatHovercard", "ChatOptions", "ChatOrderedListHover", "ChatSidebarConstants", "ChatSidebarPreloadStore", "ChatSidebarStore", "ChatSidebarUserDetailsFactory", "CSS", "CurrentUser", "DataStore", "DOM", "Event", "MessengerDivebarSizingTypedLogger", "Parent", "PresenceOrderedList", "PresencePrivacy", "React", "ReactDOM", "ShortProfilesStore", "debounceAcrossTransitions", "emptyFunction", "gkx", "mixin", "onAfterDisplay", "qex"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e, f, g) {
            __p && __p();
            var h;
            h = a.call(this) || this;
            h._debouncedRender = b("emptyFunction");
            h._render = function() {
                __p && __p();
                if (!h._isVisible || h._isHovering) {
                    h._isHovering && (h._skippedRenderDuringHover = !0);
                    return
                }
                b("PresenceOrderedList").getSorted(h._numTopFriends, function(a) {
                    __p && __p();
                    var c = b("CurrentUser").isWorkUser() ? b("PresenceOrderedList").getAllSorted(a.concat(h._nearby)).filter(function(a) {
                            a = b("ShortProfilesStore").getNow(a);
                            return !a || a.type === "fb4c"
                        }) : b("PresenceOrderedList").getAvailableSorted(a.concat(h._nearby)),
                        d = b("CurrentUser").isWorkUser() ? b("PresenceOrderedList").getAllSorted(a.concat(h._nearby)).filter(function(a) {
                            a = b("ShortProfilesStore").getNow(a);
                            return a && a.type !== "fb4c"
                        }) : [];
                    a = a.filter(function(a) {
                        return !h._nearby || h._nearby.indexOf(a) === -1
                    });
                    var e = b("PresencePrivacy").getVisibility() == b("PresencePrivacy").ONLINE ? h._nearby.filter(function(a) {
                            return b("PresencePrivacy").allows(a)
                        }) : h._nearby,
                        f = b("PresencePrivacy").getVisibility() == b("PresencePrivacy").ONLINE ? a.filter(function(a) {
                            return b("PresencePrivacy").allows(a)
                        }) : a;
                    a = b("PresencePrivacy").getOnlinePolicy() === b("PresencePrivacy").ONLINE_TO_WHITELIST && b("PresencePrivacy").getVisibility() ? a.filter(function(a) {
                        return !b("PresencePrivacy").allows(a)
                    }) : [];
                    var g = b("ChatSidebarStore").isAfterDomLoad(),
                        i = h._chatSidebarRecentCallsStore ? h._chatSidebarRecentCallsStore.getState() : {},
                        j = h._chatSidebarRecentCallsStore ? h._chatSidebarRecentCallsStore.getParticipants() : [];
                    j = b("ChatSidebarUserDetailsFactory").getUsersDetailedData([].concat(c, e, a, f, j, d), g);
                    g = h._orderedListComponent;
                    b("ReactDOM").render(b("React").jsx(g, {
                        adminedPages: h._adminedPages,
                        availableUsers: c,
                        groups: h._groups,
                        isAfterDomLoad: b("ChatSidebarStore").isAfterDomLoad(),
                        isSidebar: h._isSidebar,
                        isUserOffline: b("PresencePrivacy").isUserOffline(),
                        marketplaceThreads: h._marketplaceThreads,
                        maxItemSlots: h._maxItemSlots + 1,
                        nearby: e,
                        offlineUsers: a,
                        pageListModule: h._pageListModule,
                        pymmList: h._pymmList,
                        recentCalls: i,
                        scrollContainer: h._scrollContainer,
                        topUsers: f,
                        usersDetailedData: j,
                        workOthers: d
                    }), h._orderedList);
                    h.inform("render")
                })
            };
            h._debouncedRender = b("debounceAcrossTransitions")(h._render, 300);
            h._typeAheadActive = !1;
            h._root = d;
            h._isVisible = !1;
            h._excludedIds = {};
            h._numTopFriends = 5;
            h._adminedPages = [];
            h._marketplaceThreads = [];
            h._pageListModule = null;
            h._pymmList = {
                config: null,
                pages: []
            };
            h._groups = [];
            h._nearby = [];
            h._hoverController = null;
            h._isHovering = !1;
            h._skippedRenderDuringHover = !1;
            h._isSidebar = c;
            h._maxItemSlots = 0;
            h._orderedListComponent = g;
            h._chatSidebarRecentCallsStore = null;
            h._orderedList = b("DOM").find(h._root, ".fbChatOrderedList");
            b("Event").listen(h._orderedList, "mouseover", function() {
                h.isSidebar && (h._isHovering = !0)
            });
            b("Event").listen(h._orderedList, "mouseout", function() {
                h._isHovering = !1, h._skippedRenderDuringHover && (h._skippedRenderDuringHover = !1, h._debouncedRender())
            });
            h._scrollableOrderedList = b("Parent").byClass(h._root, "scrollableOrderedList");
            h._scrollableArea = b("Parent").byClass(h._root, "scrollable");
            c && new(b("ChatHovercard"))(babelHelpers.assertThisInitialized(h));
            b("Arbiter").subscribe("jslogger/dump", function(a, c) {
                h.getSortedList(function(a) {
                    c.chat_lists = c.chat_lists || {
                        sorted_list: a,
                        available_list: b("PresenceOrderedList").getAvailableSorted(),
                        excluded_list: h._excludedIds
                    }
                })
            });
            b("Arbiter").subscribe("sidebar/typeahead/active", function(a, b) {
                h._typeAheadActive = b, h._render()
            });
            b("ShortProfilesStore").addListener(function() {
                return h._debouncedRender()
            });
            b("ChatSidebarStore").addListener(function() {
                return h._debouncedRender()
            });
            e = b("qex")._("698066");
            e && b("Bootloader").loadModules(["ChatSidebarRecentCallsStore"], function(a) {
                h._chatSidebarRecentCallsStore = a, a.addListener(function() {
                    return h._debouncedRender()
                })
            }, "ChatOrderedList");
            b("gkx")("678257") ? b("onAfterDisplay")(function() {
                b("PresencePrivacy").subscribe("privacy-user-presence-changed", function() {
                    return h._debouncedRender()
                }), b("AvailableList").subscribe(b("AvailableListConstants").ON_AVAILABILITY_CHANGED, function() {
                    return h._debouncedRender()
                })
            }) : (b("PresencePrivacy").subscribe("privacy-user-presence-changed", function() {
                return h._debouncedRender()
            }), b("AvailableList").subscribe(b("AvailableListConstants").ON_AVAILABILITY_CHANGED, function() {
                return h._debouncedRender()
            }));
            return h
        }
        var d = c.prototype;
        d.getShowingUsers = function() {
            return b("DOM").scry(this._root, "li._42fz,li._5a58").map(this.getUserForNode)
        };
        d.getUserForNode = function(a) {
            return b("DataStore").get(a, "id") || b("DataStore").get(a, "serverthreadid")
        };
        d.getHoverController = function() {
            this._hoverController || (this._hoverController = new(b("ChatOrderedListHover"))(this));
            return this._hoverController
        };
        d.getItemHeight = function() {
            return b("ChatSidebarConstants").getItemHeight()
        };
        d.getRoot = function() {
            return this._root
        };
        d.getSortedList = function(a) {
            b("PresenceOrderedList").getSorted(this._numTopFriends, function(b) {
                return a(b)
            })
        };
        d.hide = function() {
            if (!this._isVisible) return;
            this._isVisible = !1;
            b("CSS").hide(this._scrollableOrderedList || this._root);
            this.inform("hide")
        };
        d.setNumTopFriends = function(a, c, d) {
            __p && __p();
            var e = this;
            b("ChatSidebarPreloadStore").onLoaded(function(f) {
                __p && __p();
                var g = f.groups,
                    h = f.nearby,
                    i = f.adminedPages,
                    j = f.marketplaceThreads,
                    k = f.pageListModule;
                f = f.pymmList;
                var l = new(b("MessengerDivebarSizingTypedLogger"))();
                l.setMaxItemSlots(a).setSidebarType(d);
                a--;
                b("ChatConfig").get("show_header") && a--;
                var m = b("gkx")("678259"),
                    n = !b("ChatOptions").getSetting("hide_businesses") && f.pages && d !== "buddylist";
                m && n && (a -= 3);
                i = b("ChatOptions").getSetting("hide_admined_pages") ? [] : i;
                m && i.length && d !== "buddylist" && (a -= i.length + 1);
                m = (j == null ? void 0 : j.length) && !b("ChatOptions").getSetting("hide_marketplace");
                m && b("qex")._("690094") && d !== "buddylist" && (e._marketplaceThreads = j, a -= j.length);
                e._maxItemSlots = a;
                m = a;
                j = b("ChatSidebarStore").getGroupsToShow(g || []) || [];
                g = n ? f : {
                    config: null,
                    pages: []
                };
                n = j.length;
                n === 0 && b("gkx")("678261") && !b("ChatOptions").getSetting("hide_groups") && n++;
                n > 0 && (m -= n + 1);
                b("ChatConfig").get("nearby_friends_www_chatbar") && h.length > 0 && (m -= h.length + 1);
                b("ChatConfig").get("show_admined_pages") && i.length > 0 && d !== "buddylist" && (m -= i.length + 1);
                b("ChatConfig").get("show_businesses") && g.pages.length > 0 && d !== "buddylist" && (m -= 2);
                f = m;
                m = Math.min(a, Math.max(m, b("ChatConfig").get("min_top_friends") || 0));
                if (m !== e._numTopFriends || j.length !== e._groups.length || h.length !== e._nearby.length || i.length !== e._adminedPages.length || g.pages.length !== e._pymmList.pages.length) {
                    e._groups = j;
                    e._numTopFriends = m;
                    e._nearby = h;
                    e._adminedPages = i;
                    e._pageListModule = k;
                    e._pymmList = g;
                    l.setNumTopFriends(m).setNumNearby(h.length).setNumGroups(j.length).setNumAdminedPages(i.length).setNumPymm(g.pages.length);
                    n = 0;
                    d === "buddylist" && i.length > 0 && (n += i.length + 1, l.setNumAdminedPages(0));
                    d === "buddylist" && g.pages.length > 0 && (l.setNumPymm(0), n += 2);
                    f += n;
                    m > f && (f += 1);
                    l.setNumTopFriendsShown(Math.max(f, 0));
                    b("ChatSidebarStore").getVisibleType() === d && l.log();
                    c ? (typeof e._debouncedRender.reset === "function" && e._debouncedRender.reset(), e._render()) : e._debouncedRender()
                }
            })
        };
        d.show = function() {
            if (this._isVisible) return;
            this._isVisible = !0;
            b("CSS").show(this._scrollableOrderedList || this._root);
            this._render();
            this.inform("show")
        };
        d.isVisible = function() {
            return this._isVisible
        };
        d.setScrollContainer = function(a) {
            b("DOM").contains(a, this._root) && (this._scrollContainer = a)
        };
        return c
    }(b("mixin")(b("ArbiterMixin")));
    e.exports = a
}), null);
__d("ChatQuietLinks", ["DataStore", "DOM", "Event", "Parent", "UserAgent_DEPRECATED", "getOrCreateDOMID"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {};
    a = {
        silenceLinks: function(a) {
            h(a, this.removeEmptyHrefs.bind(this))
        },
        nukeLinks: function(a) {
            h(a, this.removeAllHrefs.bind(this))
        },
        removeEmptyHrefs: function(a) {
            i(a, function(a) {
                return !a || a === "#"
            })
        },
        removeAllHrefs: function(a) {
            i(a)
        }
    };

    function h(a, c) {
        __p && __p();
        if (!a) return;
        var d = !!b("UserAgent_DEPRECATED").chrome(),
            e = !!b("UserAgent_DEPRECATED").chrome() || b("UserAgent_DEPRECATED").ie() >= 9 || b("UserAgent_DEPRECATED").firefox() >= 4;
        if (g[b("getOrCreateDOMID")(a)]) return;
        g[b("getOrCreateDOMID")(a)] = !0;
        if (!e) return;
        if (!d) {
            c && c(a);
            return
        }
        b("Event").listen(a, "mouseover", function(a) {
            a = b("Parent").byTag(a.getTarget(), "a");
            if (a) {
                var c = a.getAttribute("href");
                j(c) && (b("DataStore").set(a, "stashedHref", a.getAttribute("href")), a.removeAttribute("href"))
            }
        });
        b("Event").listen(a, "mouseout", function(a) {
            a = b("Parent").byTag(a.getTarget(), "a");
            var c = a && b("DataStore").remove(a, "stashedHref");
            j(c) && a.setAttribute("href", c)
        });
        b("Event").listen(a, "mousedown", function(a) {
            if (!a.isDefaultRequested()) return !0;
            a = b("Parent").byTag(a.getTarget(), "a");
            var c = a && b("DataStore").get(a, "stashedHref");
            j(c) && a.setAttribute("href", c)
        })
    }

    function i(a, c) {
        a = b("DOM").scry(a, "a");
        c && (a = a.filter(function(a) {
            return c(a.getAttribute("href"))
        }));
        a.forEach(function(a) {
            a.removeAttribute("href"), a.tabIndex || a.setAttribute("tabindex", 0)
        })
    }

    function j(a) {
        return a && a !== "#"
    }
    e.exports = a
}), null);
__d("ChatSidebarParticipantTooltipBuilder", ["fbt", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = 10,
        i = "\n";

    function a(a, b) {
        var c = [],
            d = Math.min(h, a.length);
        a = a.slice(0, d);
        a.forEach(function(a) {
            a = a.name;
            a && c.push(a)
        });
        d < b && c.push(g._("and {num} more...", [g._param("num", b - d)]));
        return c.join(i)
    }
    e.exports = {
        buildParticipantsTooltip: a,
        MAX_NUM_PARTICIPANTS_TO_RENDER: h
    }
}), null);
__d("MercuryIDs", ["gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {
        isValid: function(a) {
            return a == null || a === "" || typeof a !== "string" ? !1 : /^\w{3,12}:.+/.test(a)
        },
        isValidThreadID: function(a) {
            if (!g.isValid(a)) return !1;
            a = g.tokenize(a);
            switch (a.type) {
                case "user":
                case "support":
                case "thread":
                case "root":
                    return !0;
                default:
                    return (a.type === "pending" || a.type === "group") && !b("gkx")("863760") ? !0 : !1
            }
        },
        tokenize: function(a) {
            if (a == null || a === "" || !g.isValid(a)) throw new Error("bad_id_format " + String(a));
            var b = a.indexOf(":");
            return {
                type: a.substr(0, b),
                value: a.substr(b + 1)
            }
        },
        getUserIDFromParticipantID: function(a) {
            if (!g.isValid(a)) throw new Error("bad_id_format " + a);
            a = g.tokenize(a);
            var b = a.type;
            a = a.value;
            return b === "fbid" ? a : null
        },
        getParticipantIDFromUserID: function(a) {
            if (isNaN(a)) throw new Error("Not a user ID: " + a);
            return "fbid:" + a
        },
        getUserIDFromThreadID: function(a) {
            return !this.isCanonical(a) ? null : this.tokenize(a).value
        },
        getThreadIDFromUserID: function(a) {
            return "user:" + a
        },
        getThreadIDFromThreadFBID: function(a) {
            return "thread:" + a
        },
        getThreadIDFromSupportInboxItemID: function(a) {
            return "support:" + a
        },
        getThreadFBIDFromThreadID: function(a) {
            return this.tokenize(a).value
        },
        getThreadKeyfromThreadIDUserID: function(a, b) {
            __p && __p();
            if (a == null || a === "" || !g.isValid(a)) throw new Error("bad_id_format " + String(a));
            var c = this.tokenize(a).type;
            a = this.tokenize(a).value;
            if (c !== "user") return "g" + a;
            c = "";
            var d = "";
            if (a.length !== b.length) a.length > b.length ? (c = a, d = b) : (c = b, d = a);
            else if (b === a) return b + "u" + a;
            else {
                var e = 0;
                while (e < a.length && e < b.length)
                    if (a[e] === b[e]) e++;
                    else {
                        a[e] > b[e] ? (c = a, d = b) : (c = b, d = a);
                        break
                    }
            }
            return d + "u" + c
        },
        getThreadIDFromParticipantID: function(a) {
            a = this.getUserIDFromParticipantID(a);
            return a ? this.getThreadIDFromUserID(a) : null
        },
        getParticipantIDFromFromThreadID: function(a) {
            a = this.getUserIDFromThreadID(a);
            return a ? this.getParticipantIDFromUserID(a) : null
        },
        getSupportInboxItemIDFromThreadID: function(a) {
            return this.tokenize(a).value
        },
        isCanonical: function(a) {
            return this.isValid(a) && this.tokenize(a).type === "user"
        },
        isGroupChat: function(a) {
            return this.isValid(a) && this.tokenize(a).type !== "user"
        },
        isLocalThread: function(a) {
            return this.isValid(a) && this.tokenize(a).type === "root"
        }
    };
    e.exports = g
}), null);
__d("OrderedFriendsList", ["AvailableListConstants", "ChatProfileStore", "ChatSidebarParticipantTooltipBuilder", "ChatSidebarPreloadStore", "CurrentUser", "MercuryIDs", "PresenceStatus", "SearchableEntry", "ShortProfiles", "createArrayFromMixed", "isValidUniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = null,
        h = {},
        i = [],
        j = {};

    function k(a) {
        a = String(a);
        return b("MercuryIDs").isValid(a) ? a : b("MercuryIDs").getParticipantIDFromUserID(a)
    }

    function l(a, c) {
        a = b("createArrayFromMixed")(a);
        c(a.filter(function(a) {
            a = b("ShortProfiles").getNow(a);
            return !a || o(a) || a.is_nonfriend_messenger_contact
        }))
    }

    function m(a) {
        g = [];
        var c = 0;
        a.forEach(function(a) {
            var d = a.slice(0, -2);
            a = a.slice(-1);
            b("PresenceStatus").get(d) == a && (g[c] = d, h[d] = c++)
        })
    }

    function n(a) {
        var c = 0;
        a.forEach(function(a) {
            var d = a.slice(0, -2);
            a = a.slice(-1);
            a == b("AvailableListConstants").ACTIVE && (i[c] = d, j[d] = c++)
        })
    }

    function o(a) {
        return a.type === "friend" || b("CurrentUser").isWorkUser() && a.type === "fb4c"
    }
    var p = {
        contains: function(a) {
            return a in h
        },
        getList: function(a) {
            if (g && g.length) {
                l(g, a);
                return
            }
            b("ChatSidebarPreloadStore").onLoaded(function(b) {
                b = b.buddies;
                m(b);
                l(g, a)
            })
        },
        getSearchableEntries: function(a, c, d) {
            __p && __p();
            p.getList(function(e) {
                __p && __p();
                b("ChatSidebarPreloadStore").onLoaded(function(f) {
                    __p && __p();
                    var g = f.groups,
                        h = f.recentPageList;
                    b("ShortProfiles").getMulti(e.slice(0, a), function(a) {
                        var b = [];
                        for (var e in a) b.push(p.normalizeProfileEntry(a[e], e));
                        a = c ? g.map(p.normalizeThreadEntry) : [];
                        var f = h.map(p.normalizePageEntry);
                        d(b.concat(a, f).filter(function(a) {
                            return !!a
                        }).sort(function(a, b) {
                            return a.getOrder() - b.getOrder()
                        }))
                    })
                })
            })
        },
        normalizePageEntry: function(a, c) {
            var d = a.searchTokens || [],
                e = a.name,
                f = null;
            return new(b("SearchableEntry"))({
                uniqueID: a.id || c,
                keywordString: d.join(" "),
                order: c,
                photo: a.imgSrc,
                title: e,
                subtitle: f,
                type: "page",
                uri: a.uri,
                auxiliaryData: {
                    isVerified: a.isVerified
                }
            })
        },
        normalizeProfileEntry: function(a, c) {
            var d = a.searchTokens || [],
                e = a.name,
                f = null;
            return new(b("SearchableEntry"))({
                uniqueID: a.id || c,
                keywordString: d.join(" "),
                order: p.getRank(a.id || c),
                photo: a.thumbSrc,
                title: e,
                subtitle: f,
                type: a.type,
                uri: a.uri,
                auxiliaryData: {
                    isMessengerUser: a.is_messenger_user
                }
            })
        },
        normalizeThreadEntry: function(a, c) {
            __p && __p();
            var d = a.mercury_thread,
                e = a.participants_to_render.map(function(a) {
                    return babelHelpers["extends"]({}, a, {
                        id: k(a.id)
                    })
                });
            d.participants = d.participants.map(k);
            var f = a.text,
                g = null;
            f || (f = d.name);
            var h = b("ChatSidebarParticipantTooltipBuilder").buildParticipantsTooltip(e, d.participants.length - 1),
                i = e.map(function(a) {
                    return a.name
                }).join(", ");
            !f ? f = i : g = i;
            i = a.uid;
            return !f || !b("isValidUniqueID")(i) ? null : new(b("SearchableEntry"))({
                uniqueID: i,
                order: c,
                photo: d.image_src,
                title: f,
                subtitle: g,
                type: "thread",
                auxiliaryData: {
                    participantsToRender: e,
                    tooltipContent: h,
                    thread: d
                }
            })
        },
        getRank: function(a) {
            return a in h ? h[a] : g ? g.length : 0
        },
        getActiveList: function(a) {
            if (i.length > 0) {
                a(i);
                return
            }
            p.getList(function(b) {
                return a(b)
            })
        },
        getActiveRank: function(a) {
            return a in j ? j[a] : p.getRank(a)
        }
    };
    (function() {
        b("ChatSidebarPreloadStore").onLoaded(function(a) {
            var c = a.buddies;
            a = a.shortProfiles;
            b("ShortProfiles").setMulti(a);
            n(c);
            m(c)
        }), b("ChatProfileStore").init()
    })();
    e.exports = p
}), null);
__d("LoadOnRender.react", ["React", "createCancelableFunction"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c) {
            __p && __p();
            var d;
            d = a.call(this, c) || this;
            d.$1 = !1;
            d.$2 = null;
            d.$3 = !0;
            d.$4 = function(a) {
                d.$2 = a, d.$1 && d.forceUpdate()
            };
            d.state = {
                cancelableOnComponentLoad: b("createCancelableFunction")(d.$4)
            };
            c.loader(d.state.cancelableOnComponentLoad);
            return d
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1 = !0, this.$3 && this.$2 != null && this.forceUpdate()
        };
        d.componentWillUnmount = function() {
            this.$1 = !1, this.state.cancelableOnComponentLoad.cancel()
        };
        d.render = function() {
            var a = this.$2;
            this.$3 = a == null;
            return !a || this.props.forcePlaceholder ? this.props.placeholder : b("React").cloneElement(this.props.component, {
                LazyLoadedComponent: a
            })
        };
        return c
    }(b("React").Component);
    a.defaultProps = {
        forcePlaceholder: !1
    };
    e.exports = a
}), null);
__d("BootloadOnRender.react", ["JSResource", "LoadOnRender.react", "React"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = function(a) {
                b("JSResource").loadAll([d.props.loader], a)
            }, c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return b("React").jsx(b("LoadOnRender.react"), {
                placeholder: this.props.placeholder,
                loader: this.$1,
                component: this.props.component
            })
        };
        return c
    }(b("React").Component);
    e.exports = a
}), null);
__d("LazyComponent.react", ["React", "isReactClassComponent"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getComponent = function() {
            return this.$1
        };
        d.render = function() {
            var a = this,
                c = this.props,
                d = c.LazyLoadedComponent;
            c = babelHelpers.objectWithoutPropertiesLoose(c, ["LazyLoadedComponent"]);
            var e = b("isReactClassComponent")(d) ? function(b) {
                return a.$1 = b
            } : null;
            return b("React").jsx(d, babelHelpers["extends"]({
                ref: e
            }, c))
        };
        return c
    }(b("React").Component);
    a.defaultProps = {
        LazyLoadedComponent: function() {
            return null
        }
    };
    e.exports = a
}), null);
__d("MercuryBootloadOnInteraction.react", ["React", "createCancelableFunction", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            __p && __p();
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this, d.state = {
                Component: null
            }, d.$2 = function(a) {
                a = d.state.interactionType === "click" ? "click" : a.type;
                d.setState({
                    interactionType: a
                }, function() {
                    b("promiseDone")(d.props.loader.load(), function(a) {
                        d.props.takeOverRender ? d.props.takeOverRender(function() {
                            return d.$1(a)
                        }) : d.$1(a)
                    })
                })
            }, d.$3 = function(a) {
                d.setState({
                    Component: a
                })
            }, d.$4 = function(a) {
                d.state.interactionType !== "click" && d.setState({
                    interactionType: void 0
                })
            }, c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1 = b("createCancelableFunction")(this.$3)
        };
        d.componentWillUnmount = function() {
            this.$1.cancel()
        };
        d.render = function() {
            __p && __p();
            var a = {
                onFocus: this.$2,
                onMouseOver: this.$2,
                onClick: this.$2,
                onBlur: this.$4
            };
            if (!this.state.Component) return b("React").cloneElement(this.props.placeholder, a);
            a = this.state.Component;
            var c = {};
            switch (this.state.interactionType) {
                case "focus":
                    c.autoFocus = !0;
                    break;
                case "click":
                    c.clicked = !0;
                    break
            }
            return b("React").cloneElement(this.props.component, babelHelpers["extends"]({}, c, {
                LazyLoadedComponent: a
            }))
        };
        return c
    }(b("React").PureComponent);
    e.exports = a
}), null);
__d("ChatTypeaheadCore", ["csx", "cx", "fbt", "Bootloader", "BootloadOnRender.react", "CurrentUser", "DOM", "JSResource", "LazyComponent.react", "MercuryBootloadOnInteraction.react", "React", "ReactDOM", "WorkSMBHelpSidebar", "emptyFunction", "ge", "gkx", "onAfterDisplay"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    __p && __p();
    var j = b("WorkSMBHelpSidebar").module,
        k = b("gkx")("678264") ? b("MercuryBootloadOnInteraction.react") : b("BootloadOnRender.react"),
        l, m = "",
        n = [],
        o = {
            search: "._58al",
            settings: "._5vmb",
            compose: "._5q85",
            groupcreate: "._1-4-"
        },
        p = !1,
        q = b("emptyFunction");
    a = {
        _handleInteraction: function(a, c) {
            if (!b("gkx")("678264")) return;
            n.push(a);
            a === "search" && (m = c ? c : "")
        },
        _handleCompositionStart: function() {
            p = !0
        },
        _handleCompositionEnd: function() {
            p = !1, q(), q = b("emptyFunction")
        },
        takeOverRender: function(a) {
            !p ? a() : q === b("emptyFunction") && (q = a)
        },
        processInteractionsQueue: function() {
            n.forEach(function(a) {
                if (!o[a]) return;
                var c = b("DOM").scry(b("ge")("chatsearch"), o[a]);
                c && c[0] && (a !== "search" ? c[0].click() : l = c[0], c[0].focus())
            })
        },
        focusSearchField: function(a, c) {
            if (!l) {
                a = b("DOM").scry(a, "._3rhb input");
                a.length > 0 && (l = a[0])
            }
            l && (l.focus(), c.prevent())
        },
        getLastSearchQuery: function() {
            return m
        },
        deferRenderChatSidebarSheet: function(a) {
            b("onAfterDisplay")(function() {
                b("Bootloader").loadModules(["ChatSidebarSheet.react"], function(c) {
                    var d = b("ge")("chatsidebarsheet");
                    b("ReactDOM").render(b("React").jsx(c, {
                        className: "fbChatSidebarMessage",
                        viewer: b("CurrentUser").getID(),
                        isSideBar: a
                    }), d)
                }, "ChatTypeaheadCore")
            })
        },
        init: function(a, c, d) {
            var e = this;
            b("gkx")("678264") && this.deferRenderChatSidebarSheet(d);
            b("ReactDOM").render(b("React").jsxs("div", {
                children: [b("React").jsx("div", {
                    id: "chatsidebarsheet"
                }), b("React").jsx(k, {
                    loader: b("JSResource")("ChatTypeaheadWrapper.react").__setRef("ChatTypeaheadCore"),
                    placeholder: b("React").jsxs("div", {
                        children: [j && b("React").jsx(j, {}), b("React").jsx("div", {
                            className: "_1nq2",
                            children: b("React").jsx("div", {
                                className: "_5iwm _5iwn _62it",
                                children: b("React").jsx("label", {
                                    className: "_58ak _3rhb",
                                    children: b("React").jsx("input", {
                                        className: "_58al",
                                        type: "text",
                                        onChange: function(a) {
                                            return e._handleInteraction("search", a.target.value)
                                        },
                                        onFocus: function(a) {
                                            return e._handleInteraction("search", a.target.value)
                                        },
                                        onCompositionStart: this._handleCompositionStart,
                                        onCompositionEnd: this._handleCompositionEnd,
                                        placeholder: i._("Search")
                                    })
                                })
                            })
                        }), d ? b("React").jsxs("div", {
                            className: "_531b",
                            children: [b("React").jsx("div", {
                                className: "_5qth _6a _6e",
                                children: b("React").jsx("a", {
                                    href: "#",
                                    className: "button _5vmb",
                                    onClick: function() {
                                        return e._handleInteraction("settings")
                                    }
                                })
                            }), b("React").jsx("a", {
                                href: "#",
                                className: "_3a-4 _5q85",
                                onClick: function() {
                                    return e._handleInteraction("compose")
                                }
                            }), b("React").jsx("div", {
                                className: "_46fv",
                                children: b("React").jsx("a", {
                                    href: "#",
                                    className: "_1-4-",
                                    onClick: function() {
                                        return e._handleInteraction("groupcreate")
                                    }
                                })
                            })]
                        }) : null]
                    }),
                    takeOverRender: this.takeOverRender,
                    component: b("React").jsx(b("LazyComponent.react"), {
                        id: c,
                        isSidebar: d
                    })
                })]
            }), a)
        }
    };
    e.exports = a
}), null);
__d("SRXUIBadge.react", ["cx", "invariant", "React", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.isInt = function(a) {
            return parseInt(a, 10) === a
        };
        d.render = function() {
            var a = this.props.count,
                c = this.props.maxcount;
            c == null && (c = 20);
            this.isInt(a) || h(0, 186);
            this.isInt(c) || h(0, 187);
            var d = "_5ugh _5ugf _51lp" + (a > c ? " _51lr" : "") + (a === 0 ? " hidden_elem" : "");
            return b("React").jsx("span", {
                className: b("joinClasses")(this.props.className, d),
                children: a > c ? c : a
            })
        };
        return c
    }(b("React").Component);
    e.exports = a
}), null);
__d("BootloaderGamesPresenceIconContainer.react", ["BootloadOnRender.react", "JSResource", "LazyComponent.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return b("React").jsx(b("BootloadOnRender.react"), {
            component: b("React").jsx(b("LazyComponent.react"), {
                userID: a.userID
            }),
            loader: b("JSResource")("GamesPresenceIconContainer.react").__setRef("BootloaderGamesPresenceIconContainer.react"),
            placeholder: b("React").jsx("div", {})
        })
    }
    e.exports = a
}), null);
__d("ChatPerfTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function() {
            b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig", this.$1, b("Banzai").BASIC)
        };
        c.logVital = function() {
            b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig", this.$1, b("Banzai").VITAL)
        };
        c.logImmediately = function() {
            b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig", this.$1, {
                signal: !0
            })
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setDuration = function(a) {
            this.$1.duration = a;
            return this
        };
        c.setEndpoint = function(a) {
            this.$1.endpoint = a;
            return this
        };
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        };
        c.setTabsOpen = function(a) {
            this.$1.tabs_open = a;
            return this
        };
        c.setTime = function(a) {
            this.$1.time = a;
            return this
        };
        c.setWeight = function(a) {
            this.$1.weight = a;
            return this
        };
        return a
    }();
    c = {
        duration: !0,
        endpoint: !0,
        event: !0,
        tabs_open: !0,
        time: !0,
        weight: !0
    };
    e.exports = a
}), null);
__d("FantaConst", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        DEFAULT_ALLOWED_RAISED_TABS: 2,
        DEFAULT_MESSAGE_COUNT: 10,
        cookieIDs: {
            PERSONAL_COOKIE_ID: "t3",
            PERSONAL_FOCUS_COOKIE_ID: "lm3",
            PERSONAL_TIME_COOKIE_ID: "utc3",
            WORK_COOKIE_ID: "t3w",
            WORK_FOCUS_COOKIE_ID: "lm3w",
            WORK_TIME_COOKIE_ID: "utc3w"
        },
        getCookieIDs: function() {
            return [g.cookieIDs.PERSONAL_COOKIE_ID, g.cookieIDs.PERSONAL_FOCUS_COOKIE_ID, g.cookieIDs.PERSONAL_TIME_COOKIE_ID, g.cookieIDs.WORK_COOKIE_ID, g.cookieIDs.WORK_FOCUS_COOKIE_ID, g.cookieIDs.WORK_TIME_COOKIE_ID]
        }
    };
    e.exports = g
}), null);
__d("Dcode", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h = {},
        i = {
            _: "%",
            A: "%2",
            B: "000",
            C: "%7d",
            D: "%7b%22",
            E: "%2c%22",
            F: "%22%3a",
            G: "%2c%22ut%22%3a1",
            H: "%2c%22bls%22%3a",
            I: "%2c%22n%22%3a%22%",
            J: "%22%3a%7b%22i%22%3a0%7d",
            K: "%2c%22pt%22%3a0%2c%22vis%22%3a",
            L: "%2c%22ch%22%3a%7b%22h%22%3a%22",
            M: "%7b%22v%22%3a2%2c%22time%22%3a1",
            N: ".channel%22%2c%22sub%22%3a%5b",
            O: "%2c%22sb%22%3a1%2c%22t%22%3a%5b",
            P: "%2c%22ud%22%3a100%2c%22lc%22%3a0",
            Q: "%5d%2c%22f%22%3anull%2c%22uct%22%3a",
            R: ".channel%22%2c%22sub%22%3a%5b1%5d",
            S: "%22%2c%22m%22%3a0%7d%2c%7b%22i%22%3a",
            T: "%2c%22blc%22%3a1%2c%22snd%22%3a1%2c%22ct%22%3a",
            U: "%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a",
            V: "%2c%22blc%22%3a0%2c%22snd%22%3a0%2c%22ct%22%3a",
            W: "%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a",
            X: "%2c%22ri%22%3a0%7d%2c%22state%22%3a%7b%22p%22%3a0%2c%22ut%22%3a1",
            Y: "%2c%22pt%22%3a0%2c%22vis%22%3a1%2c%22bls%22%3a0%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a",
            Z: "%2c%22sb%22%3a1%2c%22t%22%3a%5b%5d%2c%22f%22%3anull%2c%22uct%22%3a0%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a"
        };
    (function() {
        var a = [];
        for (var b in i) h[i[b]] = b, a.push(i[b]);
        a.reverse();
        g = new RegExp(a.join("|"), "g")
    })();
    a = {
        encode: function(a) {
            return encodeURIComponent(a).replace(/([_A-Z])|%../g, function(a, b) {
                return b ? "%" + b.charCodeAt(0).toString(16) : a
            }).toLowerCase().replace(g, function(a) {
                return h[a]
            })
        },
        decode: function(a) {
            return decodeURIComponent(a.replace(/[_A-Z]/g, function(a) {
                return i[a]
            }))
        }
    };
    e.exports = a
}), null);
__d("PresenceCookieManager", ["Cookie", "CurrentUser", "Dcode", "ErrorUtils", "JSLogger", "PresenceInitialData", "PresenceUtil", "WebStorage"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h, i = b("PresenceInitialData").cookieVersion,
        j = "presence",
        k = {},
        l = null,
        m = null,
        n = b("JSLogger").create("presence_cookie");

    function o(a) {
        var c = b("Cookie").get(j) || "";
        if (c.length === 0) return null;
        return c[0] !== a ? null : c.substring(1)
    }

    function p(a, c) {
        b("Cookie").set(j, a + c)
    }

    function q() {
        return !(b("PresenceInitialData").useWebStorage || !1) ? null : (g || (g = b("WebStorage"))).getSessionStorage()
    }

    function r() {
        var a = q();
        a = a != null ? a.getItem(j) : null;
        return a != null ? a.substring(1) : null
    }

    function s(a) {
        var b = q();
        if (b == null) return !1;
        b.setItem(j, "E" + a);
        return !0
    }

    function t() {
        var a = r();
        return a != null ? a : o("E")
    }

    function u(a) {
        __p && __p();
        a = a.state;
        if (a == null) return "";
        var c = o("S") || "",
            d = b("CurrentUser").isWorkUser() ? "w" : "f";
        a = b("CurrentUser").isWorkUser() ? a.t3w : a.t3;
        a = a != null ? a.length > 0 : !1;
        var e = c.indexOf(d) !== -1;
        e && !a && (c = c.replace(d, ""));
        !e && a && (c += d);
        return c
    }

    function v(a, b) {
        var c = s(a);
        c ? p("S", b) : (a.length > 1024 && n.warn("big_cookie", a.length), p("E", a))
    }

    function w() {
        __p && __p();
        try {
            var a = t();
            l !== a && (l = a, m = null, a && (a = b("Dcode").decode(a), m = JSON.parse(a)));
            if (m) {
                if (m.user && m.user !== b("CurrentUser").getID()) return null;
                return m.v !== i ? null : m
            }
        } catch (a) {
            n.warn("getcookie_error", a)
        }
        return null
    }

    function x() {
        return {
            v: i,
            time: y(),
            user: b("CurrentUser").getID()
        }
    }

    function y() {
        return parseInt(Date.now() / 1e3, 10)
    }

    function z(a) {
        var c = b("Dcode").encode(JSON.stringify(a));
        b("PresenceUtil").hasUserCookie() && v(c, u(a))
    }
    var A = {
        register: function(a, b) {
            k[a] = b
        },
        store: function() {
            __p && __p();
            var a = w();
            if (a && a.v && i < a.v) {
                n.debug("stale_cookie", i);
                return
            }
            var c = x();
            for (var d in k) c[d] = (h || (h = b("ErrorUtils"))).applyWithGuard(k[d], k, [a && a[d]], function(a) {
                a.presence_subcookie = d
            });
            z(c)
        },
        clear: function() {
            var a = A.getSubCookie("state");
            b("Cookie").clear(j);
            var c = (g || (g = b("WebStorage"))).getSessionStorage();
            c != null && c.removeItem(j);
            if (a) {
                c = x();
                c.state = a;
                z(c)
            }
        },
        getSubCookie: function(a) {
            var b = w();
            return !b ? null : b[a]
        }
    };
    e.exports = A
}), null);
__d("PresenceState", ["Arbiter", "ErrorUtils", "FantaConst", "JSLogger", "PresenceCookieManager", "PresenceInitialData", "debounceAcrossTransitions", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g, h = b("PresenceInitialData").cookiePollInterval || 2e3,
        i = b("PresenceInitialData").shouldSuppress || !1,
        j = [],
        k = [],
        l = null,
        m = null,
        n = 0,
        o = null,
        p = 0,
        q = ["sb2", "tr", "tw", "at", "wml"].concat(b("FantaConst").getCookieIDs()),
        r = b("JSLogger").create("presence_state");

    function s() {
        return b("PresenceCookieManager").getSubCookie("state")
    }

    function t() {
        n = Date.now(), b("PresenceCookieManager").store(), x(m)
    }
    var u = b("debounceAcrossTransitions")(t, 0);

    function v(a) {
        (a == void 0 || isNaN(a) || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY) && (a = 0);
        return a
    }

    function w(a) {
        var c = {};
        a && (q.forEach(function(b) {
            a && a[b] && (c[b] = a[b])
        }), n < a.ut && r.error("new_cookie", {
            cookie_time: a.ut,
            local_time: n
        }));
        c.ut = n;
        for (var d = 0, e = j.length; d < e; d++)(g || (g = b("ErrorUtils"))).applyWithGuard(j[d], null, [c]);
        m = c;
        return m
    }

    function x(a) {
        p++;
        n = v(a && a.ut);
        l || (l = b("setIntervalAcrossTransitions")(A, h));
        m = a;
        o === null && (o = a);
        for (var c = 0, d = k.length; c < d; c++)(g || (g = b("ErrorUtils"))).applyWithGuard(k[c], null, [a]);
        p--
    }

    function y(a) {
        if (a && a.ut)
            if (n < a.ut) return !0;
            else a.ut < n && r.error("old_cookie", {
                cookie_time: a.ut,
                local_time: n
            });
        return !1
    }

    function z() {
        var a = s();
        y(a) && (m = a);
        return m
    }

    function A() {
        var a = s();
        y(a) && x(a)
    }
    b("PresenceCookieManager").register("state", w);
    b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT, function(a, b) {
        b.presence_state = {
            initial: babelHelpers["extends"]({}, o),
            state: babelHelpers["extends"]({}, m),
            update_time: n,
            sync_paused: p,
            poll_time: h
        }
    });
    (function() {
        var a = z();
        if (a) x(a);
        else {
            r.debug("no_cookie_initial");
            x(w());
            return
        }
    })();
    a = {
        doSync: function(a) {
            if (p) return;
            a ? t() : u()
        },
        registerStateStorer: function(a) {
            j.push(a)
        },
        registerStateLoader: function(a) {
            k.push(a)
        },
        get: function() {
            return z()
        },
        getInitial: function() {
            return o
        },
        shouldSuppress: function() {
            return i
        },
        verifyNumber: v
    };
    e.exports = a
}), null);
__d("ChatPerfInstrumentation", ["Promise", "BaseEventEmitter", "ChatPerfTypedLogger", "CurrentUser", "FantaConst", "PresenceState", "emptyFunction", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g;
    a = b("CurrentUser").isWorkUser();
    c = a ? b("FantaConst").cookieIDs.WORK_COOKIE_ID : b("FantaConst").cookieIDs.PERSONAL_COOKIE_ID;
    d = b("PresenceState").getInitial();
    var h = d && d[c] ? d[c].length : 0,
        i;
    f = {
        _startTime: Number,
        _sidebarStartTime: Number,
        init: function() {
            this._startTime = (g || (g = b("performanceAbsoluteNow")))();
            return new(b("Promise"))(function(a) {
                return a()
            })
        },
        initDivebar: function() {
            this._sidebarStartTime = (g || (g = b("performanceAbsoluteNow")))()
        },
        _log: function(a, c) {
            c = (g || (g = b("performanceAbsoluteNow")))() - (c || this._startTime);
            i && i.emit(a, c);
            var d = new(b("ChatPerfTypedLogger"))();
            d.setEvent(a).setDuration(c);
            d.setTabsOpen(h);
            d.log()
        },
        addPerfTimingsListener: function(a, c) {
            i || (i = new(b("BaseEventEmitter"))());
            return i.once(a, c)
        },
        logInitStores: function() {
            this.logInitStores = b("emptyFunction"), this._log("chat_init_stores")
        },
        logInitData: function() {
            this.logInitData = b("emptyFunction"), this._log("chat_init_data")
        },
        logInitUI: function() {
            this.logInitUI = b("emptyFunction"), this._log("chat_init_ui")
        },
        logInitSound: function() {
            this.logInitSound = b("emptyFunction"), this._log("chat_init_sound")
        },
        logDisplayDone: function() {
            this.logDisplayDone = b("emptyFunction"), this._log("chat_display_done")
        },
        logTTI: function() {
            this.logTTI = b("emptyFunction"), this._log("tti")
        },
        logCHAT_CONVERSATION_TTI: function() {
            this.logCHAT_CONVERSATION_TTI = b("emptyFunction"), this._log("chat_conversation_tti")
        },
        logSIDEBAR_FROM_CLIENT_TTI: function() {
            this.logSIDEBAR_FROM_CLIENT_TTI = b("emptyFunction"), this._log("sidebar_from_client_tti", this._sidebarStartTime)
        },
        logSIDEBAR_DISPLAY_DONE: function() {
            this.logSIDEBAR_DISPLAY_DONE = b("emptyFunction"), this._log("sidebar_display_done", this._sidebarStartTime)
        }
    };
    e.exports = f
}), null);
__d("WorkForeignEntityType", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        FOREIGN: "FOREIGN",
        NOT_FOREIGN: "NOT_FOREIGN"
    })
}), null);
__d("WorkForeignEntityInfo.bs", ["CurrentUser", "WorkForeignEntityType"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g(a) {
        if (a == null) return !0;
        else return a.type === b("WorkForeignEntityType").NOT_FOREIGN
    }

    function h(a) {
        if (b("CurrentUser").isWorkUser()) return g(a.work_foreign_entity_info);
        else return !1
    }

    function a(a) {
        if (b("CurrentUser").isWorkUser()) return g(a.workForeignEntityInfo);
        else return !1
    }

    function c(a) {
        if (b("CurrentUser").isWorkUser()) return a.every(function(a, b, c) {
            if (a == null) return !0;
            else return h(a)
        });
        else return !1
    }
    f.isNotForeign = g;
    f.isCoworker = h;
    f.isContactCoworker = a;
    f.areAllCoworkers = c
}), null);
__d("WorkChatAvailabilityStatusLoader", ["Promise", "Bootloader", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
        _store: null,
        _actions: null,
        _promise: null,
        getStoreEnforce: function() {
            b("nullthrows")(this._store, "Status store is not loaded");
            return this._store
        },
        getActionsEnforce: function() {
            b("nullthrows")(this._actions, "Status actions is not loaded");
            return this._actions
        },
        isLoaded: function() {
            return this._store != null && this._actions != null
        },
        load: function() {
            var a = this;
            this._promise || (this._promise = new(b("Promise"))(function(c) {
                b("Bootloader").loadModules(["WorkChatAvailabilityStatusActions", "WorkChatAvailabilityStatusStore"], function(b, d) {
                    a._store = d, a._actions = b, c({
                        store: d,
                        actions: b
                    })
                }, "WorkChatAvailabilityStatusLoader")
            }));
            return this._promise
        }
    };
    e.exports = a
}), null);
__d("onAfterLoadSafe", ["Run", "TimeSlice", "requestIdleCallback"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        return b("TimeSlice").guard(function() {
            return b("Run").onAfterLoad(function() {
                b("requestIdleCallback")(a)
            })
        }, "delayed after load", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        })()
    };
    e.exports = a
}), null);
__d("MercuryParticipantListRenderer", ["fbt", "MercuryIDs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            __p && __p();
            var a = this;
            this.$6 = function(c) {
                var d = a.$5;
                if (d != null) {
                    var e = b("MercuryIDs").getUserIDFromParticipantID(c.id);
                    if (e != null && d[e] != null && d[e] != void 0) return d[e]
                }
                return a.$2 ? c.short_name : c.name
            };
            this.$1 = !1;
            this.$2 = !1;
            this.$3 = !1;
            this.$4 = 0;
            this.$5 = null
        }
        var c = a.prototype;
        c.renderParticipantList = function(a) {
            a = a.map(this.$6);
            switch (a.length) {
                case 0:
                    return h(this.$1);
                case 1:
                    return i(a);
                case 2:
                    return this.$3 ? k(a) : j(a);
                case 3:
                    return this.$3 ? m(a) : l(a);
                default:
                    return this.$3 ? o(a, this.$4) : n(a, this.$4)
            }
        };
        c.setIsNewThread = function(a) {
            this.$1 = a;
            return this
        };
        c.setNameRenderer = function(a) {
            this.$6 = a;
            return this
        };
        c.setUseShortName = function(a) {
            this.$2 = a;
            return this
        };
        c.setNickname = function(a) {
            this.$5 = a;
            return this
        };
        c.setUseAndSeparator = function(a) {
            this.$3 = a;
            return this
        };
        c.setTotalParticipantCount = function(a) {
            this.$4 = a;
            return this
        };
        return a
    }();

    function h(a) {
        if (a) return g._("New Message");
        else return g._("No Participants")
    }

    function i(a) {
        return a[0]
    }

    function j(a) {
        return g._("{participant1}, {participant2}", [g._param("participant1", a[0]), g._param("participant2", a[1])])
    }

    function k(a) {
        return g._("{participant1} and {participant2}", [g._param("participant1", a[0]), g._param("participant2", a[1])])
    }

    function l(a) {
        return g._("{participant1}, {participant2}, {participant3}", [g._param("participant1", a[0]), g._param("participant2", a[1]), g._param("participant3", a[2])])
    }

    function m(a) {
        return g._("{participant1}, {participant2} and {participant3}", [g._param("participant1", a[0]), g._param("participant2", a[1]), g._param("participant3", a[2])])
    }

    function n(a, b) {
        return g._("{participant1}, {participant2}, {participant3}, {others_link}", [g._param("participant1", a[0]), g._param("participant2", a[1]), g._param("participant3", a[2]), g._param("others_link", p((b || a.length) - 3))])
    }

    function o(a, b) {
        return g._("{participant1}, {participant2} and {others_link}", [g._param("participant1", a[0]), g._param("participant2", a[1]), g._param("others_link", p((b || a.length) - 2))])
    }

    function p(a) {
        if (a > 1) return g._({
            "*": "{others_count} others"
        }, [g._param("others_count", a, [0])]);
        else return g._("1 other")
    }
    e.exports = a
}), null);
__d("WebMessengerThreadPermalinks", ["MercuryIDs", "MessagingTag", "MessengerURIConstants", "URI", "WWWBase", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g, h = {
        getThreadURI: function(a, c, d) {
            var e = "";
            b("MercuryIDs").isCanonical(a) ? e = b("MercuryIDs").tokenize(a).value : b("requireWeak")("MercuryThreadIDMap", function(b) {
                e = b.get().getServerIDFromClientIDNow(a)
            });
            d = h.getThreadURIFromServerID(e || "", d);
            c && c(d)
        },
        getThreadURIFromServerID: function(a, c) {
            __p && __p();
            var d = new(g || (g = b("URI")))(b("WWWBase").uri),
                e = b("MessengerURIConstants").FACEBOOK_PREFIX;
            if (c) switch (c) {
                case b("MessagingTag").OTHER:
                    e += "/filtered";
                    break;
                case b("MessagingTag").PENDING:
                    e += "/requests";
                    break;
                case b("MessagingTag").INBOX:
                    break;
                default:
                    e += "/" + c;
                    break
            }
            d.setPath(e + b("MessengerURIConstants").THREAD_PREFIX + a);
            return d.toString()
        },
        getThreadURIFromUserID: function(a, c) {
            var d = new(g || (g = b("URI")))(b("WWWBase").uri),
                e = b("MessengerURIConstants").FACEBOOK_PREFIX;
            d.setPath(i(e, c) + "/t/" + a);
            return d.toString()
        }
    };

    function i(a, c) {
        c && c != b("MessagingTag").INBOX && (a += "/" + c);
        return a
    }
    e.exports = h
}), null);
__d("TypedFluxStore", ["FluxStore"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("FluxStore")
}), null);
__d("FluxReduceStore", ["invariant", "TypedFluxStore", "abstractMethod"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(b) {
            b = a.call(this, b) || this;
            b.$FluxReduceStore1 = b.getInitialState();
            return b
        }
        var d = c.prototype;
        d.getState = function() {
            return this.$FluxReduceStore1
        };
        d.getInitialState = function() {
            return b("abstractMethod")("FluxReduceStore", "getInitialState")
        };
        d.reduce = function(a, c) {
            return b("abstractMethod")("FluxReduceStore", "reduce")
        };
        d.areEqual = function(a, b) {
            return a === b
        };
        d.__invokeOnDispatch = function(a, b) {
            b === void 0 && (b = !0);
            this.__changed = !1;
            var c = this.$FluxReduceStore1;
            a = this.reduce(c, a);
            a !== void 0 || g(0, 2189, this.constructor.name);
            this.areEqual(c, a) || (this.$FluxReduceStore1 = a, this.__emitChange());
            b && this.__inform()
        };
        d.__setState = function(a) {
            this.$FluxReduceStore1 = a
        };
        return c
    }(b("TypedFluxStore"));
    a.__moduleID = e.id;
    e.exports = a
}), null);
__d("ChatSidebarPresencePrivacyStore", ["ChatDispatcher", "ChatSidebarPresencePrivacyActions", "FluxReduceStore", "PresencePrivacy"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return {
                currentUser: b("PresencePrivacy").getVisibility(),
                onlinePolicy: b("PresencePrivacy").getOnlinePolicy(),
                friends: b("PresencePrivacy").getFriendsVisibility()
            }
        };
        d.reduce = function(a, c) {
            switch (c.type) {
                case b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED:
                    return {
                        onlinePolicy: b("PresencePrivacy").getOnlinePolicy(),
                        currentUser: b("PresencePrivacy").getVisibility(),
                        friends: b("PresencePrivacy").getFriendsVisibility()
                    };
                case b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED:
                    return babelHelpers["extends"]({}, a, {
                        onlinePolicy: b("PresencePrivacy").getOnlinePolicy(),
                        currentUser: b("PresencePrivacy").getVisibility()
                    })
            }
            return a
        };
        d.isUserOffline = function() {
            return this.getState().currentUser === b("PresencePrivacy").OFFLINE
        };
        return c
    }(b("FluxReduceStore"));
    a.__moduleID = e.id;
    e.exports = new a(b("ChatDispatcher"))
}), null);
__d("ChatSidebarHideReason", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        VIEWPORT_INCAPABLE: 0,
        LOW_FRIEND_COUNT: 1,
        NOT_ENABLED: 2,
        OFF_HOMEPAGE: 3
    });
    e.exports = a
}), null);
__d("ChatSidebarVisibility", ["ChatConfig", "ChatSidebarHideReason", "ChatSidebarStore", "OrderedFriendsList", "URI", "getViewportDimensions", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g, h = b("ChatConfig").get("sidebar.min_friends"),
        i = b("ChatConfig").get("sidebar.minimum_width"),
        j = b("ChatConfig").get("sidebar.hide_divebar_off_homepage"),
        k = {
            getViewport: function() {
                return b("gkx")("678657") ? b("getViewportDimensions")() : b("getViewportDimensions").withoutScrollbars()
            },
            shouldShowSidebar: function(a, c, d) {
                k.shouldShowSidebarIgnoreEnabled(a, function(a, d) {
                    var e = b("ChatSidebarStore").isEnabled();
                    c(a && e, e ? d : d.concat([b("ChatSidebarHideReason").NOT_ENABLED]))
                }, d)
            },
            shouldShowSidebarIgnoreEnabled: function(a, c, d) {
                __p && __p();
                var e = this;
                b("OrderedFriendsList").getActiveList(function(f) {
                    var g = a || k.getViewport();
                    g = g.width > i;
                    f = f.length < h;
                    var l = !0,
                        m = [];
                    j && !e.isOnHomepage(d) && (l = !1, m.push(b("ChatSidebarHideReason").OFF_HOMEPAGE));
                    g || (l = !1, m.push(b("ChatSidebarHideReason").VIEWPORT_INCAPABLE));
                    f && (l = !1, m.push(b("ChatSidebarHideReason").LOW_FRIEND_COUNT));
                    c(l, m)
                })
            },
            isOnHomepage: function(a) {
                a = a ? a.getPath() : new(g || (g = b("URI")))(window.location.href).getPath();
                return a === "/"
            },
            isSidebarVisible: function() {
                return b("ChatSidebarStore").getVisibleType() === "sidebar"
            },
            isBuddyListVisible: function() {
                return b("ChatSidebarStore").getVisibleType() === "buddylist"
            }
        };
    e.exports = k
}), null);
__d("ChatSidebar", ["csx", "Arbiter", "AsyncRequest", "Bootloader", "ChatConfig", "ChatDispatcher", "ChatPerfInstrumentation", "ChatSidebarActions", "ChatSidebarBotsDispatcher", "ChatSidebarBotsStore", "ChatSidebarCachedViewport", "ChatSidebarPresencePrivacyStore", "ChatSidebarStore", "ChatSidebarVisibility", "CSS", "CurrentUser", "DOM", "DOMDimensions", "Event", "LitestandClassicPlaceHolders", "Parent", "PresencePrivacy", "PresenceUtil", "SidebarAppsInitialVisibility", "SidebarWorkTopGroupsVisibility", "Style", "TimeSlice", "URI", "ViewportBounds", "emptyFunction", "ge", "gkx", "ifRequired", "onAfterDisplay", "onAfterLoadSafe", "queryThenMutateDOM", "requireWeak"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h, i = b("ChatSidebarBotsDispatcher").module,
        j = b("ChatSidebarBotsStore").module,
        k, l, m, n, o, p, q = !0,
        r = b("ChatSidebarCachedViewport").viewport,
        s = 44,
        t = 117,
        u = 40,
        v = 32,
        w = 44,
        x = 30,
        y = 171,
        z = b("ChatConfig").get("expanded_divebar_width"),
        A = b("ChatConfig").get("sidebar.hide_buddylist_off_homepage"),
        B = b("ChatConfig").get("sidebar.hide_buddylist_off_allpage"),
        C = "buddylistOff";

    function D() {
        return b("ChatSidebarStore").getVisibleType() === "sidebar"
    }

    function E(a, b) {
        if (!D()) return;
        b ? n.hide() : (n.show(), I())
    }

    function F() {
        return !D() || !m ? 0 : z
    }

    function G() {
        b("CSS").removeClass(document.documentElement, "sidebarMode");
        var a = B || A && new(h || (h = b("URI")))(window.location.href).getPath() !== "/";
        a ? b("CSS").addClass(document.documentElement, C) : (b("CSS").removeClass(document.documentElement, C), (A || B) && b("Bootloader").loadModules(["Dock"], function(a) {
            a.resizeAllFlyouts()
        }, "ChatSidebar"));
        b("ChatSidebarStore").isInitialized() && (n.hide(), b("CSS").hide(m), b("CSS").hide(l));
        b("Arbiter").inform("sidebar/visibility", !1, "state");
        b("Arbiter").inform("reflow");
        b("ViewportBounds").inform("change")
    }

    function H(a) {
        I(a, R._cacheViewport)
    }

    function I(a, c) {
        var d;
        b("queryThenMutateDOM")(function() {
            c && c(), (!a || a.height !== r.height) && (d = N())
        }, function() {
            (a == null || a.width !== r.width) && b("ChatSidebarVisibility").shouldShowSidebar(r, function(a, c) {
                b("ChatSidebarActions").show(a ? "sidebar" : "buddylist")
            }), O(d)
        })
    }

    function J() {
        b("ChatSidebarVisibility").shouldShowSidebar(r, function(a, c) {
            b("ChatSidebarActions").show(a ? "sidebar" : "buddylist")
        }), O(N())
    }

    function K(a) {
        b("Bootloader").loadModules(["KeyboardShortcuts"], function(c) {
            c.register("q", function(c) {
                if (b("ChatSidebarStore").getVisibleType() !== "sidebar") return;
                b("requireWeak")("ChatTypeaheadCore", function(b) {
                    b.focusSearchField(a, c)
                })
            }, {
                persistOnTransition: !0
            })
        }, "ChatSidebar")
    }

    function L(a) {
        var c = r || b("ChatSidebarVisibility").getViewport(),
            d = c.height;
        a && a.length ? (a.forEach(function(a) {
            a && a !== k && !b("CSS").hasClass(a, "hidden_elem") && (d -= b("DOMDimensions").getElementDimensions(a).height)
        }), p && (d -= p.getOffset()), o && (d -= b("DOMDimensions").getElementDimensions(o).height)) : (b("ifRequired")("AppsDivebarDisplayController", function(a) {
            a.isVisible() && (d -= y)
        }, function() {
            b("SidebarAppsInitialVisibility").visible && (d -= y)
        }), b("CurrentUser").isWorkUser() && (j && j.hasBots() && (d -= t), b("SidebarWorkTopGroupsVisibility").visible && (d -= u * b("SidebarWorkTopGroupsVisibility").numGroups + v), b("gkx")("678652") && (d -= w)), d -= s, d -= x);
        return Math.max(0, d)
    }

    function M() {
        __p && __p();
        var a;
        (a = b("CSS")).show(l);
        a.show(m);
        a.addClass(document.documentElement, "sidebarMode");
        a.removeClass(document.documentElement, C);
        A && b("Bootloader").loadModules(["Dock"], function(a) {
            a.resizeAllFlyouts()
        }, "ChatSidebar");
        n.show();
        b("Arbiter").inform("sidebar/visibility", !0, "state");
        b("LitestandClassicPlaceHolders").destroy("sidebar");
        b("ViewportBounds").inform("change")
    }

    function N() {
        return {
            body: R.getBodyHeight(),
            item: n.getItemHeight()
        }
    }

    function O(a) {
        if (!a) return;
        var c = 8,
            d = Math.floor((a.body - c) / a.item);
        n.setNumTopFriends(d, q, "sidebar");
        q = !1;
        d = Math.floor(a.body - c);
        b("Style").set(k, "height", a.body + "px");
        b("Arbiter").inform("sidebar/resized", d, "state");
        b("Arbiter").inform("reflow")
    }

    function P() {
        var a;
        b("queryThenMutateDOM")(function() {
            a = N()
        }, function() {
            return O(a)
        })
    }

    function Q() {
        new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(b("emptyFunction")).setErrorHandler(b("emptyFunction")).setData({
            sidebar_mode: b("ChatSidebarStore").isEnabled(),
            window_id: b("PresenceUtil").getSessionID()
        }).setAllowCrossPageTransition(!0).send()
    }
    var R = {
        init: function(a, c) {
            __p && __p();
            R.init = b("emptyFunction"), b("ChatPerfInstrumentation").initDivebar(), b("ChatDispatcher").explicitlyRegisterStore(b("ChatSidebarStore")), b("ChatDispatcher").explicitlyRegisterStore(b("ChatSidebarPresencePrivacyStore")), i && j && i.explicitlyRegisterStore(j), b("ChatSidebarActions").loaded(), m = a, n = c, k = b("DOM").find(a, "div.fbChatSidebarBody"), l = b("DOM").find(a, "._51x_"), o = b("DOM").find(a, "._5qqe"), b("Event").listen(window, "resize", function() {
                var a = babelHelpers["extends"]({}, r) || {};
                H(a)
            }), b("Arbiter").subscribe("page_transition", function(a, c) {
                b("ChatSidebarVisibility").shouldShowSidebar(r, function(a, d) {
                    d = document.documentElement || "";
                    A && c.uri.getPath() !== "/" ? b("CSS").addClass(d, C) : b("CSS").removeClass(d, C);
                    b("ChatSidebarActions").show(a ? "sidebar" : "buddylist")
                }, c.uri)
            }), b("gkx")("678653") ? b("onAfterDisplay")(function() {
                K(a)
            }) : K(a), n.setScrollContainer(b("Parent").byClass(n.getRoot(), "uiScrollableAreaWrap")), b("Arbiter").subscribe("chat/option-changed", function(a, b) {
                a = b.name;
                (a === "hide_groups" || a === "hide_admined_pages" || a === "hide_businesses") && P()
            }), b("Arbiter").subscribe(["AppsDivebar/show-apps", "AppsDivebar/hide-apps", "PagesDivebar/show-pages", "PagesDivebar/hide-pages"], P), b("Arbiter").subscribe("sidebar/typeahead/active", E), b("PresencePrivacy").subscribe("privacy-user-presence-changed", function() {
                I(), b("ChatSidebarActions").userPresenceChanged()
            }), b("PresencePrivacy").subscribe("privacy-changed", function() {
                I(), b("ChatSidebarActions").privacyChanged()
            }), b("ChatSidebarStore").addListener(function() {
                var a = b("ChatSidebarStore").getState(),
                    c = b("ChatSidebarStore").getPrevState();
                if (a.visible !== c.visible) switch (a.visible) {
                    case "sidebar":
                        M();
                        break;
                    case "buddylist":
                        G();
                        break
                }
                a.enabled !== c.enabled && Q()
            }), j && j.addListener(function() {
                return P()
            }), b("gkx")("678654") ? (J(), b("onAfterLoadSafe")(function() {
                if (r.needsRefresh) {
                    var a = b("ChatSidebarStore").getState().visible === "sidebar";
                    H();
                    b("onAfterLoadSafe")(function() {
                        a !== (b("ChatSidebarStore").getState().visible === "sidebar") && b("Bootloader").loadModules(["ChatReliabilityInstrumentation"], function(a) {
                            a.logERROR("sidebar flashed")
                        }, "ChatSidebar")
                    })
                }
            })) : H(), b("onAfterLoadSafe")(function() {
                b("Bootloader").loadModules(["ChatImpressionLogger"], function(a) {
                    a.init(n)
                }, "ChatSidebar")
            }), b("ViewportBounds").addPersistentRight(F), b("Arbiter").inform("sidebar/initialized", R, "state"), b("ChatSidebarActions").init(), b("ChatPerfInstrumentation").logSIDEBAR_DISPLAY_DONE()
        },
        ensureLoaded: function() {
            __p && __p();
            if (!b("ChatSidebarStore").isEnabled()) return;
            if (b("ChatSidebarStore").isLoaded()) return;
            if (b("ge")("pagelet_sidebar")) return;
            b("Bootloader").loadModules(["UIPagelet"], function(a) {
                var c = b("DOM").create("div", {
                    id: "pagelet_sidebar"
                });
                b("DOM").appendContent(document.body, c);
                a.loadFromEndpoint("SidebarPagelet", "pagelet_sidebar")
            }, "ChatSidebar");
            b("ChatSidebarActions").loaded()
        },
        hide: function() {
            if (!b("ChatSidebarStore").isEnabled()) return;
            b("ChatSidebarActions").disable()
        },
        unhide: function() {
            if (b("ChatSidebarStore").isEnabled()) return;
            b("ChatSidebarVisibility").shouldShowSidebarIgnoreEnabled(null, function(a, c) {
                b("ChatSidebarActions").enable(a ? "sidebar" : "buddylist")
            })
        },
        _cacheViewport: function() {
            r = b("ChatSidebarVisibility").getViewport()
        },
        getBodyHeight: function() {
            return b("gkx")("678259") ? L() : L(Array.from(l.childNodes))
        }
    };
    R.init = b("TimeSlice").guard(R.init, "ChatSidebar init");
    e.exports = R
}), null);
__d("ChatSidebarHeader.react", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return b("React").jsx("div", {
                onClick: this.props.onClick,
                className: b("joinClasses")(this.props.className, "_55ob"),
                children: b("React").jsx("div", {
                    className: "_55oc",
                    children: this.props.children
                })
            })
        };
        return c
    }(b("React").Component);
    e.exports = a
}), null);
__d("SRLink.react", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return b("React").jsx("a", babelHelpers["extends"]({}, this.props, {
                children: this.props.children
            }))
        };
        return c
    }(b("React").Component);
    e.exports = a
}), null);
__d("XPagesBrowserController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/", {
        category: {
            type: "String"
        },
        ref: {
            type: "String"
        },
        cityid: {
            type: "Int"
        },
        similar: {
            type: "Int"
        },
        frompageid: {
            type: "Int"
        },
        actAsPageID: {
            type: "Int"
        },
        source: {
            type: "String"
        },
        pyml: {
            type: "Int"
        },
        viewallpywo: {
            type: "Bool",
            defaultValue: !1
        },
        notif_id: {
            type: "Int"
        }
    })
}), null);
__d("ChatSidebarAdminedPagesSection.react", ["cx", "fbt", "ChatSidebarHeader.react", "LeftRight.react", "React", "SRLink.react", "XPagesBrowserController"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    __p && __p();
    var i = 3;

    function a(a) {
        var c = null;
        if (a.adminedPages.length >= i) {
            var d = b("XPagesBrowserController").getURIBuilder().setString("category", "your_pages").setString("ref", a.adminedPages[0].ref).getURI();
            c = b("React").jsx(b("SRLink.react"), {
                className: "_2l56",
                href: d,
                target: "_blank",
                children: h._("SEE ALL")
            })
        }
        d = a.pageListModule;
        return b("React").jsxs(b("React").Fragment, {
            children: [b("React").jsx(b("ChatSidebarHeader.react"), {
                className: "_4kqp",
                children: b("React").jsxs(b("LeftRight.react"), {
                    children: [h._("YOUR PAGES"), c]
                })
            }), b("React").jsx(d, {
                adminedPages: a.adminedPages,
                onMouseEnter: a.onMouseEnterItem
            })]
        })
    }
    e.exports = a
}), null);
__d("XWorkSaveGroupPurposeController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/work/group_creation/dialog/save_purpose/", {
        purpose: {
            type: "String",
            required: !0
        },
        ref: {
            type: "String",
            required: !0
        },
        name: {
            type: "String"
        },
        community: {
            type: "FBID"
        },
        coworkers_to_invite: {
            type: "IntVector",
            defaultValue: []
        },
        back_disallowed: {
            type: "Bool",
            defaultValue: !1
        }
    })
}), null);
__d("ChatSidebarCreateNewGroupItem.react", ["ix", "cx", "fbt", "Bootloader", "Image.react", "MercuryConfig", "QE2Logger", "React", "SRLink.react", "TooltipData", "XWorkSaveGroupPurposeController", "asset"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    __p && __p();
    a = b("React").PropTypes;
    c = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            __p && __p();
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$2 = function(a) {
                b("QE2Logger").logExposureForUser("workchat_synced_groups_universe");
                if (b("MercuryConfig").WorkSyncedGroupAutoCreateEnabled) return;
                var c = d.props,
                    e = c.slot,
                    f = c.slotOffset,
                    g = c.totalSlots;
                b("Bootloader").loadModules(["MessengerChatSidebarSlotsTypedLogger", "MessengerGCFJewelNewGroupButtonInit"], function(a, b) {
                    new a().setSlotClicked(f + e).setSlotsVisibleBeforeScrolling(g).setRelativeSlotClicked(e).setSidebarSection("groups").log(), b.onLinkClick()
                }, "ChatSidebarCreateNewGroupItem.react");
                a.preventDefault()
            }, c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = i._("Create New Group"),
                c = g("492281"),
                d = 20,
                e = "_55ln _qhr",
                f = b("MercuryConfig").WorkSyncedGroupAutoCreateEnabled ? b("XWorkSaveGroupPurposeController").getURIBuilder().setString("purpose", "work_team").setString("ref", "group_creation_button_on_chat_sidebar").setBool("back_disallowed", !0).getURI() : "#",
                h = b("MercuryConfig").WorkSyncedGroupAutoCreateEnabled ? "dialog" : "ignore";
            return b("React").jsx("div", babelHelpers["extends"]({}, b("TooltipData").propsFor(this.$1()), {
                children: b("React").jsx(b("SRLink.react"), {
                    className: e,
                    href: f,
                    onClick: this.$2,
                    rel: h,
                    children: b("React").jsxs("div", {
                        className: "_55lp",
                        children: [b("React").jsx("div", {
                            className: "_55lq _tt_",
                            "aria-hidden": !0,
                            children: b("React").jsx(b("Image.react"), {
                                className: "_tu0",
                                src: c,
                                width: d,
                                height: d,
                                alt: ""
                            })
                        }), b("React").jsx("div", {
                            className: "_55lr",
                            children: a
                        })]
                    })
                })
            }))
        };
        d.$1 = function() {
            return i._("Create New Group")
        };
        return c
    }(b("React").PureComponent);
    c.propTypes = {
        slot: a.number,
        slotOffset: a.number,
        totalSlots: a.number
    };
    e.exports = c
}), null);
__d("ChatSidebarNameWithGameInfo.react", ["BootloadOnRender.react", "JSResource", "LazyComponent.react", "React", "TextWithEmoticons.react"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var c = a.name,
            d = a.userID;
        a = a.nameCanHaveEmoji != null && a.nameCanHaveEmoji;
        var e = a ? b("React").jsx(b("TextWithEmoticons.react"), {
            renderEmoticons: !0,
            renderEmoji: !0,
            text: c
        }) : c;
        return b("React").jsx(b("BootloadOnRender.react"), {
            component: b("React").jsx(b("LazyComponent.react"), {
                originalElement: e,
                userID: d
            }),
            loader: b("JSResource")("ChatSidebarItemUserPlayingGameInfoContainer.react").__setRef("ChatSidebarNameWithGameInfo.react"),
            placeholder: a ? e : b("React").jsx("div", {
                children: c
            })
        })
    }
    e.exports = a
}), null);
__d("SplitImage.react", ["cx", "Image.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.size,
                c = this.props.srcs,
                d = this.props.border,
                e = this.props.className,
                f = this.props.halfView;
            if (c.length === 0) return null;
            var g = null;
            c.length === 1 ? g = this.$1(c[0], a) : c.length === 2 ? g = this.$2(c, a, d) : g = this.$3(c, a, d, f);
            return b("React").jsx("div", {
                className: b("joinClasses")(e, "_55lt"),
                style: {
                    width: a,
                    height: a
                },
                children: g
            })
        };
        d.$1 = function(a, c) {
            return b("React").jsx(b("Image.react"), {
                src: a,
                width: c,
                height: c,
                alt: ""
            })
        };
        d.$2 = function(a, c, d) {
            var e = Math.floor(c / 2),
                f = -Math.floor(e / 2);
            d = "_55lu" + (d ? " _57xo" : "");
            return b("React").jsxs("div", {
                children: [b("React").jsx("div", {
                    className: "_55lu",
                    style: {
                        width: e
                    },
                    children: b("React").jsx(b("Image.react"), {
                        src: a[0],
                        width: c,
                        height: c,
                        style: {
                            marginLeft: f
                        },
                        alt: ""
                    })
                }), b("React").jsx("div", {
                    className: d,
                    style: {
                        width: e
                    },
                    children: b("React").jsx(b("Image.react"), {
                        src: a[1],
                        width: c,
                        height: c,
                        style: {
                            marginLeft: f
                        },
                        alt: ""
                    })
                })]
            })
        };
        d.$3 = function(a, c, d, e) {
            e = e === !0 ? Math.floor(c / 3 * 1.5) + 1 : Math.floor(c / 3 * 2);
            var f = -Math.floor((c - e) / 2),
                g = Math.floor(c / 2),
                h = c - e,
                i = -Math.floor((g - h) / 2),
                j = "_55lu" + (d ? " _57pl" : "");
            d = "_55lu" + (d ? " _57pm" : "");
            return b("React").jsxs("div", {
                children: [b("React").jsx("div", {
                    className: j,
                    style: {
                        width: e
                    },
                    children: b("React").jsx(b("Image.react"), {
                        src: a[0],
                        width: c,
                        height: c,
                        style: {
                            marginLeft: f
                        },
                        alt: ""
                    })
                }), b("React").jsx("div", {
                    className: d,
                    style: {
                        width: h,
                        height: g
                    },
                    children: b("React").jsx(b("Image.react"), {
                        src: a[1],
                        width: g,
                        height: g,
                        style: {
                            marginLeft: i
                        },
                        alt: ""
                    })
                }), b("React").jsx("div", {
                    className: "_55lu",
                    style: {
                        width: h,
                        height: g
                    },
                    children: b("React").jsx(b("Image.react"), {
                        src: a[2],
                        width: g,
                        height: g,
                        style: {
                            marginLeft: i
                        },
                        alt: ""
                    })
                })]
            })
        };
        return c
    }(b("React").Component);
    e.exports = a
}), null);
__d("ChatSidebarProfile.react", ["cx", "Image.react", "React", "SplitImage.react", "gkx"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function h(a, c, d) {
        var e;
        d = Math.round(c / 3);
        d = c - d;
        return (e = b("React")).jsxs("div", {
            className: "_44yp",
            style: {
                height: c,
                width: c
            },
            children: [e.jsx("div", {
                className: "_1gyw",
                children: e.jsx(b("Image.react"), {
                    src: a[0],
                    width: d,
                    height: d,
                    alt: ""
                })
            }), e.jsx("div", {
                className: "_1gyw",
                children: e.jsx(b("Image.react"), {
                    src: a[1],
                    width: d,
                    height: d,
                    alt: ""
                })
            })]
        })
    }

    function i(a) {
        return b("React").jsxs("div", {
            className: "_55lq" + (a.showingPresenceOnProfile ? " _2be2" : ""),
            "aria-hidden": "true",
            children: [b("React").jsx(b("SplitImage.react"), {
                size: a.imageSize,
                srcs: a.images,
                className: "_1gyw"
            }), a.showingPresenceOnProfile && a.isActive ? b("React").jsx("div", {
                className: "_1gyx"
            }) : null]
        })
    }
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            if (!b("gkx")("697231")) return i(this.props);
            var a = this.props,
                c = a.images,
                d = a.imageSize,
                e = a.isActive;
            a = a.showMultiCompany;
            var f = b("gkx")("697231") && c.length > 1;
            c = f ? h(c, d) : b("React").jsx(b("SplitImage.react"), {
                className: "_1gyw",
                size: d,
                srcs: c
            });
            return b("React").jsxs("div", {
                "aria-hidden": !0,
                className: "_7049 _6--1" + (f ? " _44yq" : ""),
                style: {
                    height: d,
                    width: d
                },
                children: [c, a === !0 ? b("React").jsx("div", {
                    className: "_4rwy"
                }) : e ? b("React").jsx("div", {
                    className: "_1gyx"
                }) : null]
            })
        };
        return c
    }(b("React").PureComponent);
    e.exports = a
}), null);
__d("cssVar", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error('cssVar("' + a + '"): Unexpected class transformation.')
    }
    e.exports = a
}), null);
__d("ChatSidebarStatus.react", ["cssVar", "cx", "fbt", "ix", "Image.react", "React", "asset", "gkx"], (function(a, b, c, d, e, f, g, h, i, j) {
    __p && __p();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props,
                c = this.renderStatusIcon();
            if (c == null && a.statusTime == null) return null;
            var d = !0,
                e = a.unreadCount;
            e != null && e > 0 && (c = a.statusTime != null ? null : c, d = !1);
            a.showingPresenceOnProfile === !1 && a.isDoNotDisturb === !0 && a.isWorkUser && b("gkx")("678573") && (d = !1);
            return b("React").jsxs("div", {
                className: "_568z" + (a.showRelationshipIndicator ? " _2oov" : ""),
                children: [d ? this.renderLastActiveTime() : null, c]
            })
        };
        d.renderStatusIcon = function() {
            __p && __p();
            var a = this.props;
            if (a.isMessengerOnlyContact === !0) return b("React").jsx(b("Image.react"), {
                alt: i._("Using Messenger without Facebook"),
                className: "_568_",
                src: j("28076")
            });
            else if (a.showingPresenceOnProfile === !1 && a.isDoNotDisturb === !0 && a.isWorkUser && b("gkx")("678573")) return b("React").jsx("span", {
                "aria-label": i._("Do Not Disturb"),
                className: "_3zdc"
            });
            else if (a.isMultiCompany === !0 && a.isWorkUser) return b("React").jsx("div", {
                "aria-label": i._("Multi company chat"),
                className: "_6p8n"
            });
            else if (a.status === 2)
                if (a.showRelationshipIndicator === !0) return b("React").jsx(b("Image.react"), {
                    src: j("593722"),
                    alt: i._("hearts icon")
                });
                else if (a.showingPresenceOnProfile === !1) return b("React").jsx("span", {
                "aria-label": i._("Active Now"),
                style: {
                    background: "#42b72a",
                    borderRadius: "50%",
                    display: "inline-block",
                    height: "6px",
                    marginLeft: "4px",
                    veritcalAlign: "middle",
                    width: "6px"
                }
            });
            return null
        };
        d.renderLastActiveTime = function() {
            return b("React").jsx("div", {
                className: "_568-",
                children: this.props.statusTime
            })
        };
        return c
    }(b("React").PureComponent);
    e.exports = a
}), null);
__d("RenderOnClient.react", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            return this.props.component
        };
        return b
    }(b("React").Component);
    e.exports = a
}), null);
__d("isFalsey", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a == null || !Boolean(a)
    }
    e.exports = a
}), null);
__d("ChatSidebarItem.react", ["cx", "ix", "BootloaderGamesPresenceIconContainer.react", "BootloadOnRender.react", "ChatSidebarConstants", "ChatSidebarNameWithGameInfo.react", "ChatSidebarProfile.react", "ChatSidebarStatus.react", "CurrentUser", "ErrorBoundary.react", "Image.react", "JSResource", "LazyComponent.react", "React", "RenderOnClient.react", "ShortProfiles", "SRLink.react", "SRXUIBadge.react", "TextWithEmoticons.react", "gkx", "isFalsey"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    __p && __p();
    var i = b("gkx")("865973");
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                hasHovered: !1,
                hover: !1
            }, c.$2 = function() {
                c.setState({
                    hasHovered: !0,
                    hover: !0
                }), c.props.onMouseEnter != null && c.props.onMouseEnter()
            }, c.$3 = function() {
                c.setState({
                    hover: !1
                })
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = "_55ln" + (this.props.context ? " _55lo" : "") + " _qhr",
                c = this.props.nameCanHaveEmoji === !0 ? b("React").jsx(b("RenderOnClient.react"), {
                    component: b("React").jsx(b("TextWithEmoticons.react"), {
                        renderEmoticons: !0,
                        renderEmoji: !0,
                        text: this.props.name
                    })
                }) : this.props.name,
                d = b("ShortProfiles").getNow(this.props.userID || "");
            return i && (d == null ? void 0 : d.is_blocked) ? null : b("React").jsx(b("ErrorBoundary.react"), {
                fallbackComponent: this.$1,
                children: b("React").jsx(b("SRLink.react"), {
                    className: a,
                    href: this.props.href,
                    onClick: this.props.onClick,
                    onMouseEnter: this.$2,
                    onMouseLeave: this.$3,
                    rel: "ignore",
                    children: b("React").jsxs("div", {
                        className: "_55lp",
                        children: [this.$4(), b("React").jsxs("div", {
                            className: "_5bon",
                            children: [this.renderWaveButton(), this.renderPlayingGame(), this.renderBirthday(), this.renderUnreadCount(), this.renderStatus()]
                        }), b("React").jsx("div", {
                            className: "_55lr",
                            children: this.props.isPlayingGame === !0 && this.props.userID != null && this.props.statusTime === null && this.props.birthday !== !0 ? this.$5() : c
                        }), b("React").jsx("div", {
                            className: "_55ls",
                            children: this.props.context
                        })]
                    })
                })
            })
        };
        d.renderUnreadCount = function() {
            var a = this.props.unreadCount;
            return b("isFalsey")(a) ? null : b("React").jsx(b("SRXUIBadge.react"), {
                count: a,
                maxcount: 9
            })
        };
        d.renderStatus = function() {
            return b("React").jsx(b("ChatSidebarStatus.react"), {
                isMessengerOnlyContact: this.props.isMessengerOnlyContact,
                isDoNotDisturb: this.props.isDoNotDisturb,
                isWorkUser: b("CurrentUser").isWorkUser(),
                isMultiCompany: this.props.isMultiCompany,
                showingPresenceOnProfile: !1,
                showRelationshipIndicator: this.props.showRelationshipIndicator,
                status: this.props.status,
                unreadCount: this.props.unreadCount,
                statusTime: this.props.statusTime
            })
        };
        d.renderWaveButton = function() {
            var a = b("ShortProfiles").getNow(this.props.userID || "");
            if (i && (a == null ? void 0 : a.is_blocked) || !this.props.showWave || this.props.userID == null) return null;
            return !this.state.hasHovered && b("gkx")("678661") ? b("React").jsx("div", {}) : b("React").jsx(b("BootloadOnRender.react"), {
                loader: b("JSResource")("WaveButton.react").__setRef("ChatSidebarItem.react"),
                placeholder: b("React").jsx("div", {}),
                component: b("React").jsx(b("LazyComponent.react"), {
                    userID: this.props.userID,
                    hover: this.state.hover
                })
            })
        };
        d.renderBirthday = function() {
            if (this.props.birthday !== !0) return null;
            var a = "_5dv3",
                c = h("74517");
            return b("React").jsx(b("Image.react"), {
                className: a,
                src: c
            })
        };
        d.renderPlayingGame = function() {
            return this.props.statusTime != null || this.props.birthday === !0 || this.props.isPlayingGame !== !0 ? null : b("React").jsx(b("RenderOnClient.react"), {
                component: b("React").jsx(b("BootloaderGamesPresenceIconContainer.react"), {
                    userID: this.props.userID
                })
            })
        };
        d.$1 = function() {
            return b("React").jsx(b("SRLink.react"), {
                "aria-hidden": !0,
                tabIndex: -1
            })
        };
        d.$4 = function() {
            var a = this.props.imageSize,
                c = this.props.image,
                d = this.props.images;
            a = a != null ? a : b("ChatSidebarConstants").getImageSize();
            var e = [];
            c != null ? e = [c] : d != null && (e = d);
            return b("React").jsx(b("ChatSidebarProfile.react"), {
                showingPresenceOnProfile: !1,
                imageSize: a,
                isActive: !1,
                images: e
            })
        };
        d.$5 = function() {
            return b("React").jsx(b("RenderOnClient.react"), {
                component: b("React").jsx(b("ChatSidebarNameWithGameInfo.react"), {
                    name: this.props.name,
                    nameCanHaveEmoji: this.props.nameCanHaveEmoji,
                    userID: this.props.userID
                })
            })
        };
        return c
    }(b("React").PureComponent);
    e.exports = a
}), null);
__d("ChatSidebarThread.react", ["Bootloader", "ChatSidebarItem.react", "ChatSidebarParticipantTooltipBuilder", "MercuryIDs", "MercuryParticipantListRenderer", "React", "TooltipData", "WebMessengerThreadPermalinks", "WorkForeignEntityInfo.bs", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = b("React").PropTypes;
    c = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            __p && __p();
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$2 = function(a) {
                var c = d.props,
                    e = c.slot,
                    f = c.slotOffset,
                    g = c.threadFBID,
                    h = c.totalSlots;
                g && b("requireWeak")("FantaTabActions", function(a) {
                    a.openTab(d.props.numOtherParticipants === 1 ? b("MercuryIDs").getThreadIDFromUserID(g) : b("MercuryIDs").getThreadIDFromThreadFBID(g), ["divebar_groups"])
                });
                b("Bootloader").loadModules(["MessengerChatSidebarSlotsTypedLogger", "ChatOpenTabEventLogger"], function(a, b) {
                    new a().setSlotClicked(f + e).setSlotsVisibleBeforeScrolling(h).setRelativeSlotClicked(e).setSidebarSection("groups").log(), g && b.logClickOpen(d.props.referrer, g)
                }, "ChatSidebarThread.react");
                a.preventDefault()
            }, c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.name,
                c = g(this.props.threadFBID, this.props.participants, this.props.numOtherParticipants),
                d = a ? c : void 0,
                e = this.props.image ? [] : h(this.props.participants);
            a = a ? a : c;
            c = !b("WorkForeignEntityInfo.bs").areAllCoworkers(this.props.participants);
            return b("React").jsx("div", babelHelpers["extends"]({}, b("TooltipData").propsFor(this.$1()), {
                children: b("React").jsx(b("ChatSidebarItem.react"), {
                    birthday: this.props.birthday,
                    context: d,
                    href: this.props.threadFBID && b("WebMessengerThreadPermalinks").getThreadURIFromServerID(this.props.threadFBID),
                    imageSize: this.props.imageSize,
                    image: this.props.image,
                    images: e,
                    isDoNotDisturb: this.props.isDoNotDisturb,
                    isMultiCompany: c,
                    name: a,
                    nameCanHaveEmoji: !0,
                    onClick: this.$2,
                    referrer: this.props.referrer,
                    status: this.props.status,
                    unreadCount: this.props.unreadCount,
                    showWave: !1,
                    showRelationshipIndicator: !1
                })
            }))
        };
        d.$1 = function() {
            return b("ChatSidebarParticipantTooltipBuilder").buildParticipantsTooltip(this.props.participants, this.props.numOtherParticipants)
        };
        return c
    }(b("React").PureComponent);
    c.propTypes = {
        birthday: a.bool,
        image: a.string,
        imageSize: a.number,
        name: a.string,
        participants: a.array.isRequired,
        numOtherParticipants: a.number.isRequired,
        referrer: a.string,
        slot: a.number,
        slotOffset: a.number,
        status: a.number,
        threadFBID: a.string,
        totalSlots: a.number,
        unreadCount: a.number
    };
    c.defaultProps = {
        numOtherParticipants: b("ChatSidebarParticipantTooltipBuilder").MAX_NUM_PARTICIPANTS_TO_RENDER
    };

    function g(a, c, d) {
        return new(b("MercuryParticipantListRenderer"))().setIsNewThread(!a).setUseShortName(d > 1).setTotalParticipantCount(d).renderParticipantList(c).toString()
    }

    function h(a) {
        return a.map(function(a) {
            return a.image_src
        }).filter(function(a) {
            return a
        })
    }
    e.exports = c
}), null);
__d("ChatSidebarGroupThreadsGroup.react", ["cx", "ChatSidebarConstants", "ChatSidebarThread.react", "MercuryIDs", "PresencePrivacy", "PresenceStatus", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = b("React").PropTypes;
    c = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = function(a, c) {
                var e = a.mercury_thread.participants;
                e = e.map(function(a) {
                    return typeof a === "string" && b("MercuryIDs").isValid(a) ? b("MercuryIDs").getUserIDFromParticipantID(a) : a
                });
                var f = d.props.isDisconnected || b("PresencePrivacy").isUserOffline();
                return b("React").jsx("li", {
                    className: "_42fz" + (f ? " _570-" : ""),
                    "data-id": a.uid,
                    children: b("React").jsx(b("ChatSidebarThread.react"), {
                        image: a.mercury_thread.image_src,
                        imageSize: b("ChatSidebarConstants").getImageSize(),
                        name: a.mercury_thread.name,
                        participants: a.participants_to_render,
                        numOtherParticipants: e.length - 1,
                        referrer: "ordered_list",
                        slot: c,
                        slotOffset: d.props.slotOffset,
                        status: b("PresenceStatus").getGroup(e),
                        threadFBID: a.uid,
                        totalSlots: d.props.totalSlots
                    })
                }, a.uid)
            }, c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return b("React").jsx("ul", {
                children: this.props.groups.map(this.$1)
            })
        };
        return c
    }(b("React").Component);
    c.propTypes = {
        groups: a.array.isRequired,
        isDisconnected: a.bool,
        slotOffset: a.number,
        totalSlots: a.number
    };
    e.exports = c
}), null);
__d("ChatSidebarItemPlaceholder.react", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var c = 50 + Math.ceil(50 - 2 * (Math.pow(7 + a.slot, 2) % 10));
        return b("React").jsx("li", {
            className: "_42fz" + (a.isDisconnected ? " _570-" : ""),
            children: b("React").jsx("div", {
                className: "_55ln _qhr",
                children: b("React").jsxs("div", {
                    className: "_55lp",
                    children: [b("React").jsx("span", {
                        className: "_1qh _55lq"
                    }), b("React").jsx("span", {
                        className: "_55lr",
                        children: b("React").jsx("span", {
                            className: "_1qh",
                            style: {
                                width: String(c) + "px"
                            }
                        })
                    })]
                })
            })
        })
    }
    e.exports = a
}), null);
__d("ChatSidebarMarketplaceSectionLazy.react", ["ErrorBoundary.react", "JSResource", "React", "lazyLoadComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("lazyLoadComponent")(b("JSResource")("ChatSidebarMarketplaceSection.react").__setRef("ChatSidebarMarketplaceSectionLazy.react"));

    function a(a) {
        var c;
        return (c = b("React")).jsx(b("ErrorBoundary.react"), {
            children: c.jsx(c.Suspense, {
                fallback: null,
                children: c.jsx(g, {
                    marketplaceThreads: a.marketplaceThreads
                })
            })
        })
    }
    e.exports = a
}), null);
__d("ChatSidebarOfflineOverlayWrapper.react", ["BootloadOnRender.react", "JSResource", "LazyComponent.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return b("React").jsx(b("BootloadOnRender.react"), {
            component: b("React").jsx(b("LazyComponent.react"), {}),
            loader: b("JSResource")("ChatOfflineOverlay.react").__setRef("ChatSidebarOfflineOverlayWrapper.react"),
            placeholder: b("React").jsx("div", {})
        })
    }
    e.exports = a
}), null);
__d("ChatSidebarPymmListSection.react", ["BootloadOnRender.react", "JSResource", "LazyComponent.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return b("React").jsx(b("BootloadOnRender.react"), {
            loader: b("JSResource")("ChatSidebarPymmListContainer.react").__setRef("ChatSidebarPymmListSection.react"),
            placeholder: b("React").jsx("div", {}),
            component: b("React").jsx(b("LazyComponent.react"), {
                pymmList: a.pymmList
            })
        })
    }
    e.exports = a
}), null);
__d("ChatSidebarUser.react", ["Bootloader", "ChatSidebarItem.react", "MercuryIDs", "React", "WebMessengerThreadPermalinks", "gkx", "requireWeak"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            __p && __p();
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this, d.handleMouseEnter = function() {
                var a = d.props.userID;
                d.props.onMouseEnter && d.props.onMouseEnter(a);
                b("gkx")("678658") && d.props.showHoverCard === !0 && b("Bootloader").loadModules(["ChatSidebarHoverCardV2", "ReactDOM"], function(b, c) {
                    return b.show(a, c.findDOMNode(babelHelpers.assertThisInitialized(d)))
                }, "ChatSidebarUser.react")
            }, d.$1 = function(a) {
                var c = d.props,
                    e = c.sectionName,
                    f = c.slot,
                    g = c.slotOffset,
                    h = c.totalSlots,
                    i = c.userID,
                    j = b("MercuryIDs").getThreadIDFromUserID(i);
                b("requireWeak")("FantaTabActions", function(a) {
                    a.openTab(j, ["divebar_" + e])
                });
                b("Bootloader").loadModules(["MessengerChatSidebarSlotsTypedLogger", "ChatOpenTabEventLogger"], function(a, b) {
                    new a().setSlotClicked(g + f).setSlotsVisibleBeforeScrolling(h).setRelativeSlotClicked(f).setSidebarSection(e).log(), b.logUserClickOpen(e, i, {
                        global_slot: f
                    })
                }, "ChatSidebarUser.react");
                a.preventDefault()
            }, c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("WebMessengerThreadPermalinks").getThreadURIFromUserID(this.props.userID);
            return b("React").jsx(b("ChatSidebarItem.react"), {
                onClick: this.$1,
                onMouseEnter: this.handleMouseEnter,
                href: a,
                imageSize: this.props.imageSize,
                image: this.props.image,
                isDoNotDisturb: this.props.isDoNotDisturb,
                isPlayingGame: this.props.isPlayingGame,
                name: this.props.name,
                nameCanHaveEmoji: !1,
                showRelationshipIndicator: this.props.showRelationshipIndicator,
                status: this.props.status,
                birthday: this.props.birthday,
                statusTime: this.props.statusTime,
                context: this.props.context,
                unreadCount: this.props.unreadCount,
                isMessengerOnlyContact: this.props.isMessengerOnlyContact,
                userID: this.props.userID,
                showWave: this.props.showWave
            })
        };
        return c
    }(b("React").PureComponent);
    e.exports = a
}), null);
__d("ChatSidebarUserGroupProfile.react", ["cx", "ChatSidebarItemPlaceholder.react", "ChatSidebarUser.react", "React", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function a(a) {
        var c = a.slot,
            d = a.profileData;
        if (d == null) return b("React").jsx(b("ChatSidebarItemPlaceholder.react"), {
            isDisconnected: a.isDisconnected,
            slot: c
        }, "placeholder" + c);
        var e = d.shortProfile;
        if (!e.id) return null;
        var f = d.status,
            g = f !== 2 ? d.lastActiveTime : null,
            h = a.isDisconnected || d.presencePrivacyAllows !== !0,
            i = a.sectionName === "nearby" ? e.location : null,
            j = b("gkx")("678663");
        return b("React").jsx("li", {
            className: "_42fz" + (h ? " _570-" : ""),
            "data-id": e.id,
            children: b("React").jsx(b("ChatSidebarUser.react"), {
                birthday: e.is_birthday,
                image: e.thumbSrc,
                imageSize: a.imageSize,
                isDoNotDisturb: a.doNotDisturbMap[e.id] === !0,
                isPlayingGame: d.isPlaying === !0,
                name: e.name,
                onMouseEnter: a.onMouseEnter,
                showHoverCard: a.showHoverCard,
                showRelationshipIndicator: e.show_relationship_indicator,
                sectionName: a.sectionName,
                slot: c,
                slotOffset: a.slotOffset,
                status: f,
                statusTime: g,
                totalSlots: a.totalSlots,
                userID: e.id,
                unreadCount: d.unreadCount,
                isMessengerOnlyContact: e.is_messenger_only,
                context: i,
                showWave: j
            })
        }, e.id)
    }
    e.exports = a
}), null);
__d("ChatSidebarUserGroupContainer.react", ["ChatSidebarUserGroupProfile.react", "CurrentUser", "React", "WorkChatAvailabilityStatusLoader", "clearTimeout", "emptyFunction", "gkx", "onAfterLoadSafe", "promiseDone", "requireWeak", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 400,
        h = 5e3;
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c) {
            __p && __p();
            var d;
            d = a.call(this, c) || this;
            d.$1 = null;
            d.$2 = {};
            d.state = {
                doNotDisturbMap: {}
            };
            d.$6 = function() {
                d.$3 || (d.$3 = b("setTimeoutAcrossTransitions")(function() {
                    b("requireWeak")("FantaTabsEagerBootloader", function(a) {
                        return a.bootload()
                    }), d.$6 = b("emptyFunction")
                }, g))
            };
            d.$7 = function() {
                b("clearTimeout")(d.$3), d.$3 = null
            };
            d.$4();
            return d
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            __p && __p();
            var a = this;
            b("onAfterLoadSafe")(function() {
                b("gkx")("678573") && b("CurrentUser").isWorkUser() && b("promiseDone")(b("WorkChatAvailabilityStatusLoader").load(), function(b) {
                    var c = b.store;
                    a.props.ids.forEach(function(b) {
                        c.subscribeUser(b, a)
                    });
                    a.setState({
                        doNotDisturbMap: a.$5(a.props.ids)
                    });
                    c.fetchUsers(a.props.ids);
                    a.$1 = c.addListener(function() {
                        a.setState({
                            doNotDisturbMap: a.$5(a.props.ids)
                        })
                    })
                })
            })
        };
        d.componentDidUpdate = function() {
            this.$4()
        };
        d.componentWillUnmount = function() {
            this.$1 && this.$1.remove()
        };
        d.UNSAFE_componentDidReceiveProps = function(a) {
            __p && __p();
            var c = this;
            if (b("gkx")("678573") && b("WorkChatAvailabilityStatusLoader").isLoaded()) {
                var d = b("WorkChatAvailabilityStatusLoader").getStoreEnforce();
                d.fetchUsers(a.ids.filter(function(a) {
                    return c.props.ids.indexOf(a) < 0
                }));
                this.props.ids.forEach(function(a) {
                    return d.unsubscribeUser(a, c)
                });
                a.ids.forEach(function(a) {
                    return d.subscribeUser(a, c)
                })
            }
        };
        d.render = function() {
            var a = this,
                c = this.props.ids.filter(function(b) {
                    return !!a.props.usersDetailedData[b] || a.$2[b] == null || a.$2[b] === !1
                });
            return b("React").jsx("ul", {
                onMouseEnter: this.$6,
                onMouseLeave: this.$7,
                children: c.map(function(c, d) {
                    return b("React").jsx(b("ChatSidebarUserGroupProfile.react"), {
                        doNotDisturbMap: a.state.doNotDisturbMap,
                        imageSize: a.props.imageSize,
                        isDisconnected: a.props.isDisconnected,
                        onMouseEnter: a.props.onMouseEnterItem,
                        showHoverCard: a.props.showHoverCard,
                        sectionName: a.props.sectionName,
                        slotOffset: a.props.slotOffset,
                        totalSlots: a.props.totalSlots,
                        profileData: a.props.usersDetailedData[c],
                        id: c,
                        slot: d
                    }, c)
                })
            })
        };
        d.$5 = function(a) {
            if (!b("gkx")("678573") || !b("CurrentUser").isWorkUser() || !b("WorkChatAvailabilityStatusLoader").isLoaded()) return {};
            var c = b("WorkChatAvailabilityStatusLoader").getStoreEnforce(),
                d = {};
            a.forEach(function(a) {
                d[a] = c.getIsDoNotDisturb(a)
            });
            return d
        };
        d.$4 = function() {
            var a = this;
            this.props.ids.forEach(function(b) {
                var c = a.props.usersDetailedData[b];
                c ? a.$8(b) : a.$9(b)
            })
        };
        d.$9 = function(a) {
            var c = this;
            this.$2[a] === void 0 && (this.$2[a] = b("setTimeoutAcrossTransitions")(function() {
                delete c.$2[a], c.forceUpdate()
            }, h))
        };
        d.$8 = function(a) {
            var c = this.$2[a];
            if (!c) return;
            b("clearTimeout")(c);
            delete this.$2[a]
        };
        return c
    }(b("React").Component);
    e.exports = a
}), null);
__d("fbglyph", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error("fbglyph(" + JSON.stringify(a) + "): Unexpected fbglyph reference.")
    }
    e.exports = a
}), null);
__d("ChatSidebarOrderedList.react", ["ix", "cx", "fbt", "Bootloader", "ChatConfig", "ChatOptions", "ChatQuietLinks", "ChatReliabilityInstrumentation", "ChatSidebarActions", "ChatSidebarAdminedPagesSection.react", "ChatSidebarConstants", "ChatSidebarCreateNewGroupItem.react", "ChatSidebarGroupThreadsGroup.react", "ChatSidebarHeader.react", "ChatSidebarMarketplaceSectionLazy.react", "ChatSidebarOfflineOverlayWrapper.react", "ChatSidebarPymmListSection.react", "ChatSidebarRecentCalls", "ChatSidebarUserGroupContainer.react", "Image.react", "LeftRight.react", "React", "ReactDOM", "RenderOnClient.react", "Run", "Scroll", "SRLink.react", "cxMargin", "fbglyph", "gkx", "ifRequired", "qex"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    __p && __p();
    var j = b("ChatSidebarRecentCalls").ChatSidebarRecentCalls;
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                isDisconnected: !1
            }, c.$1 = null, c.$2 = null, c.$3 = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this;
            b("ChatQuietLinks").nukeLinks(b("ReactDOM").findDOMNode(this.refs.noLinks));
            b("Run").onAfterLoad(function() {
                b("ChatSidebarActions").afterDomLoad(), a.$4()
            })
        };
        d.componentWillUnmount = function() {
            this.$1 != null && this.$1.unsubscribe()
        };
        d.render = function() {
            if (this.props.hide) return null;
            var a = this.props.offlineUsers && this.props.offlineUsers.length > 0 ? this.$5() : this.$6();
            a = b("React").jsxs(b("React").Fragment, {
                children: [b("React").jsxs("div", {
                    ref: "noLinks",
                    children: [this.$7(), this.$8()]
                }), this.$9(), b("React").jsxs("div", {
                    ref: "noLinks",
                    children: [this.$10(), this.$11(), this.$12(), a]
                })]
            });
            return b("React").jsxs("div", {
                "data-testid": "chat_sidebar",
                children: [b("React").jsx("div", {
                    ref: "noLinks",
                    children: this.$13()
                }), b("React").jsx("div", {
                    ref: "noLinks",
                    children: this.$14()
                }), b("React").jsx("div", {
                    ref: "noLinks",
                    children: this.$15()
                }), !this.$16() && a, this.$17()]
            })
        };
        d.$18 = function(a) {
            var c = this.props.scrollContainer;
            if (!c) return;
            var d = c.clientHeight,
                e = c.scrollHeight,
                f = b("Scroll").getTop(c),
                g = Math.min(a.offsetTop, e - d);
            f !== g && b("ifRequired")("Animation", function(a) {
                var b = Math.abs(g - f) / c.clientHeight * 500;
                new a(c).to("scrollTop", g).ease(a.ease.end).duration(b).go()
            }, function() {
                b("Scroll").setTop(c, g)
            })
        };
        d.$7 = function() {
            if (!b("ChatConfig").getBool("show_header")) return null;
            var a = this.state.isDisconnected || this.props.isUserOffline;
            return b("React").jsx(b("ChatSidebarHeader.react"), {
                className: a ? "_570-" : "",
                children: i._("CONTACTS")
            })
        };
        d.$5 = function() {
            var a, c = b("ChatSidebarConstants").getImageSize(),
                d = this.props.offlineUsers.slice(0, -2),
                e = i._("MORE CONTACTS"),
                f = i._("These contacts can't see you on chat.");
            return (a = b("React")).jsxs(a.Fragment, {
                children: [a.jsx(b("ChatSidebarHeader.react"), {
                    children: e
                }), a.jsxs(b("ChatSidebarHeader.react"), {
                    className: "_5j9-",
                    children: [f, " ", a.jsx("a", {
                        ajaxify: "/ajax/chat/privacy/settings_dialog.php?ref=whitelist_separator",
                        href: "#",
                        rel: "dialog",
                        children: i._("Edit")
                    })]
                }), a.jsx(b("ChatSidebarUserGroupContainer.react"), {
                    ids: d,
                    imageSize: c,
                    isDisconnected: this.state.isDisconnected,
                    loadExtras: this.props.isAfterDomLoad,
                    onMouseEnterItem: this.props.onMouseEnterItem,
                    sectionName: "offline_users",
                    showHoverCard: this.props.isSidebar,
                    slotOffset: this.$19(),
                    totalSlots: this.props.maxItemSlots,
                    usersDetailedData: this.props.usersDetailedData
                })]
            })
        };
        d.$6 = function() {
            __p && __p();
            var a = this;
            if (this.props.availableUsers.length === 0) return null;
            if (!this.props.isAfterDomLoad) {
                var c = b("ChatSidebarConstants").getItemHeight();
                return b("React").jsx("div", {
                    style: {
                        height: c * this.props.availableUsers.length
                    }
                })
            }
            c = b("ChatSidebarConstants").getImageSize();
            var d = i._("{MORE ONLINE CONTACTS} ({count})", [i._param("MORE ONLINE CONTACTS", i._("MORE CONTACTS")), i._param("count", this.props.availableUsers.length)]);
            return b("React").jsxs(b("React").Fragment, {
                children: [b("React").jsx(b("ChatSidebarHeader.react"), {
                    ref: function(b) {
                        a.$3 = b
                    },
                    onClick: function() {
                        return a.$18(b("ReactDOM").findDOMNode(a.$3))
                    },
                    children: d
                }), b("React").jsx(b("ChatSidebarUserGroupContainer.react"), {
                    ids: this.props.availableUsers,
                    imageSize: c,
                    isDisconnected: this.state.isDisconnected,
                    loadExtras: this.props.isAfterDomLoad,
                    onMouseEnterItem: this.props.onMouseEnterItem,
                    sectionName: "more_online_friends",
                    showHoverCard: this.props.isSidebar,
                    slotOffset: this.$19(),
                    totalSlots: this.props.maxItemSlots,
                    usersDetailedData: this.props.usersDetailedData
                })]
            })
        };
        d.$19 = function() {
            var a = this.$20();
            a += this.$21();
            var b = this.props.groups;
            a += this.$22(b.length);
            return a
        };
        d.$9 = function() {
            return !b("ChatConfig").getBool("nearby_friends_www_chatbar") || this.props.nearby.length === 0 ? null : b("React").jsx(b("ChatSidebarHeader.react"), {
                ref: "nearbySeparator",
                children: b("React").jsxs(b("LeftRight.react"), {
                    children: [i._("NEARBY"), b("React").jsx(b("SRLink.react"), {
                        target: "_blank",
                        href: "/help/android-app/291236034364603",
                        children: b("React").jsx(b("Image.react"), {
                            className: "_3-90",
                            src: g("129548")
                        })
                    })]
                })
            })
        };
        d.$11 = function() {
            if (!b("ChatConfig").getBool("nearby_friends_www_chatbar") || this.props.nearby.length === 0) return null;
            var a = this.$20(),
                c = b("ChatSidebarConstants").getImageSize();
            return b("React").jsx(b("ChatSidebarUserGroupContainer.react"), {
                ids: this.props.nearby,
                imageSize: c,
                isDisconnected: this.state.isDisconnected,
                loadExtras: this.props.isAfterDomLoad,
                onMouseEnterItem: this.props.onMouseEnterItem,
                sectionName: "nearby",
                showHoverCard: this.props.isSidebar,
                slotOffset: a,
                totalSlots: this.props.maxItemSlots,
                usersDetailedData: this.props.usersDetailedData
            })
        };
        d.$21 = function() {
            return this.props.nearby.length
        };
        d.$12 = function() {
            var a = this.state.isDisconnected || this.props.isUserOffline,
                c = this.props.groups,
                d = this.$20() + this.$21();
            if (this.$23()) {
                var e;
                return (e = b("React")).jsxs(e.Fragment, {
                    children: [this.$24(), e.jsx("ul", {
                        children: e.jsx("li", {
                            className: "_42fz" + (a ? " _570-" : ""),
                            children: b("React").jsx(b("RenderOnClient.react"), {
                                component: b("React").jsx(b("ChatSidebarCreateNewGroupItem.react"), {
                                    slot: 0,
                                    slotOffset: d,
                                    totalSlots: this.props.maxItemSlots
                                })
                            })
                        })
                    })]
                })
            } else if (b("ChatOptions").getSetting("hide_groups") || this.props.groups.length === 0) return null;
            return b("React").jsxs(b("React").Fragment, {
                children: [this.$24(), b("React").jsx(b("RenderOnClient.react"), {
                    component: b("React").jsx(b("ChatSidebarGroupThreadsGroup.react"), {
                        groups: c.slice(0, this.$22(c.length)),
                        isDisconnected: this.state.isDisconnected,
                        loadExtras: this.props.isAfterDomLoad,
                        slotOffset: d,
                        totalSlots: this.props.maxItemSlots
                    })
                })]
            })
        };
        d.$24 = function() {
            var a = this,
                c = this.state.isDisconnected || this.props.isUserOffline;
            return b("React").jsx(b("ChatSidebarHeader.react"), {
                ref: function(b) {
                    a.$2 = b
                },
                className: c ? "_570-" : "",
                onClick: function() {
                    return a.$18(b("ReactDOM").findDOMNode(a.$2))
                },
                children: i._("GROUP CONVERSATIONS")
            })
        };
        d.$22 = function(a) {
            if (this.$23()) return 1;
            else if (a === 0) return 0;
            return Math.min(a, b("ChatConfig").getNumber("num_groups_to_show"))
        };
        d.$8 = function() {
            var a = b("ChatSidebarConstants").getImageSize();
            return b("React").jsx(b("ChatSidebarUserGroupContainer.react"), {
                ids: this.props.topUsers,
                imageSize: a,
                isDisconnected: this.state.isDisconnected,
                loadExtras: this.props.isAfterDomLoad,
                onMouseEnterItem: this.props.onMouseEnterItem,
                sectionName: "ordered_list",
                showHoverCard: this.props.isSidebar,
                slotOffset: 0,
                totalSlots: this.props.maxItemSlots,
                usersDetailedData: this.props.usersDetailedData
            })
        };
        d.$20 = function() {
            return this.props.topUsers.length
        };
        d.$14 = function() {
            var a = this.props.pymmList;
            if (a == null) return null;
            a = a.pages;
            return this.props.isSidebar !== !0 || !b("ChatConfig").getBool("show_businesses") || a == null || a.length === 0 ? null : b("React").jsx(b("RenderOnClient.react"), {
                component: b("React").jsx(b("ChatSidebarPymmListSection.react"), {
                    pymmList: a
                })
            })
        };
        d.$13 = function() {
            return b("gkx")("678659") || !b("ChatConfig").getBool("show_admined_pages") || this.props.adminedPages.length === 0 || this.props.pageListModule == null ? null : b("React").jsx(b("RenderOnClient.react"), {
                component: b("React").jsx(b("ChatSidebarAdminedPagesSection.react"), {
                    adminedPages: this.props.adminedPages,
                    onMouseEnterItem: this.props.onMouseEnterItem,
                    pageListModule: this.props.pageListModule
                })
            })
        };
        d.$10 = function() {
            var a;
            a = ((a = this.props.marketplaceThreads) == null ? void 0 : a.length) || 0;
            return a === 0 || b("ChatOptions").getSetting("hide_marketplace") || !b("qex")._("690094") ? null : b("React").jsx(b("RenderOnClient.react"), {
                component: b("React").jsx(b("ChatSidebarMarketplaceSectionLazy.react"), {
                    marketplaceThreads: this.props.marketplaceThreads
                })
            })
        };
        d.$15 = function() {
            return j ? b("React").jsx(b("RenderOnClient.react"), {
                component: b("React").jsx(j, {
                    recentCalls: this.props.recentCalls,
                    usersDetailedData: this.props.usersDetailedData
                })
            }) : null
        };
        d.$4 = function() {
            var a = this;
            b("Bootloader").loadModules(["ChannelConnection"], function(c) {
                a.$1 = c.subscribe([c.CONNECTED, c.RECONNECTING, c.SHUTDOWN, c.MUTE_WARNING, c.UNMUTE_WARNING], function() {
                    var d = c.disconnected();
                    d !== a.state.isDisconnected && (d ? b("ChatReliabilityInstrumentation").logCHANNEL_DISCONNECT() : b("ChatReliabilityInstrumentation").logCHANNEL_CONNECT(), a.setState({
                        isDisconnected: d
                    }))
                })
            }, "ChatSidebarOrderedList.react")
        };
        d.$23 = function() {
            return this.props.groups.length === 0 && !b("ChatOptions").getSetting("hide_groups")
        };
        d.$16 = function() {
            return b("gkx")("697231") && this.props.isSidebar !== !0 && this.props.isUserOffline === !0
        };
        d.$17 = function() {
            return !this.$16() ? null : b("React").jsx(b("RenderOnClient.react"), {
                component: b("React").jsx(b("ChatSidebarOfflineOverlayWrapper.react"), {})
            })
        };
        return c
    }(b("React").PureComponent);
    e.exports = a
}), null);