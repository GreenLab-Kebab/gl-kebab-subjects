/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function(a, b, c, d) {
    var e = {
        exports: {}
    };
    e.exports;
    (function() {
        var f = a.fbq;
        f.execStart = a.performance && a.performance.now && a.performance.now();
        if (! function() {
                var b = a.postMessage || function() {};
                if (!f) {
                    b({
                        action: "FB_LOG",
                        logType: "Facebook Pixel Error",
                        logMessage: "Pixel code is not installed correctly on this page"
                    }, "*");
                    "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
                    return !1
                }
                return !0
            }()) return;
        var g = function() {
                function a(a, b) {
                    var c = [],
                        d = !0,
                        e = !1,
                        f = void 0;
                    try {
                        for (var a = a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), g; !(d = (g = a.next()).done); d = !0) {
                            c.push(g.value);
                            if (b && c.length === b) break
                        }
                    } catch (a) {
                        e = !0, f = a
                    } finally {
                        try {
                            !d && a["return"] && a["return"]()
                        } finally {
                            if (e) throw f
                        }
                    }
                    return c
                }
                return function(b, c) {
                    if (Array.isArray(b)) return b;
                    else if ((typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in Object(b)) return a(b, c);
                    else throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            h = typeof Symbol === "function" && typeof(typeof Symbol === "function" ? Symbol.iterator : "@@iterator") === "symbol" ? function(a) {
                return typeof a
            } : function(a) {
                return a && typeof Symbol === "function" && a.constructor === Symbol && a !== (typeof Symbol === "function" ? Symbol.prototype : "@@prototype") ? "symbol" : typeof a
            },
            i = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1;
                        d.configurable = !0;
                        "value" in d && (d.writable = !0);
                        Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    c && a(b.prototype, c);
                    d && a(b, d);
                    return b
                }
            }();

        function j(a) {
            if (Array.isArray(a)) {
                for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
                return c
            } else return Array.from(a)
        }

        function k(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function(a) {
            f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
            return f.__fbeventsResolvedModules[a]
        }, f.fbIsModuleLoaded = function(a) {
            return !!f.__fbeventsModules[a]
        }, f.ensureModuleRegistered = function(b, a) {
            f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a)
        });
        f.ensureModuleRegistered("SignalsFBEventsBaseEvent", function() {
            return function(g, h, c, d) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsUtils"),
                        b = a.map,
                        c = a.keys;
                    a = function() {
                        function a(b) {
                            k(this, a), this._regKey = 0, this._subscriptions = {}, this._coerceArgs = b || null
                        }
                        i(a, [{
                            key: "listen",
                            value: function(a) {
                                var b = this,
                                    c = "" + this._regKey++;
                                this._subscriptions[c] = a;
                                return function() {
                                    delete b._subscriptions[c]
                                }
                            }
                        }, {
                            key: "listenOnce",
                            value: function(a) {
                                var b = null,
                                    c = function() {
                                        b && b();
                                        b = null;
                                        return a.apply(void 0, arguments)
                                    };
                                b = this.listen(c);
                                return b
                            }
                        }, {
                            key: "trigger",
                            value: function() {
                                var a = this;
                                for (var d = arguments.length, e = Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                                return b(c(this._subscriptions), function(b) {
                                    var c;
                                    return (c = a._subscriptions)[b].apply(c, e)
                                })
                            }
                        }, {
                            key: "triggerWeakly",
                            value: function() {
                                var a = this._coerceArgs != null ? this._coerceArgs.apply(this, arguments) : null;
                                return a == null ? [] : this.trigger.apply(this, j(a))
                            }
                        }]);
                        return a
                    }();
                    e.exports = a
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("signalsFBEventsCoerceParameterExtractors", function() {
            return function(g, i, j, k) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsUtils"),
                        b = a.filter,
                        c = a.map,
                        d = f.getFbeventsModules("signalsFBEventsCoerceStandardParameter");

                    function g(a) {
                        if (a == null || (typeof a === "undefined" ? "undefined" : h(a)) !== "object") return null;
                        var b = a.domain_uri,
                            c = a.event_type,
                            d = a.extractor_type;
                        a = a.id;
                        b = typeof b === "string" ? b : null;
                        c = c != null && typeof c === "string" && c !== "" ? c : null;
                        a = a != null && typeof a === "string" && a !== "" ? a : null;
                        d = d === "CONSTANT_VALUE" || d === "CSS" || d === "GLOBAL_VARIABLE" || d === "GTM" || d === "JSON_LD" || d === "META_TAG" || d === "OPEN_GRAPH" || d === "RDFA" || d === "SCHEMA_DOT_ORG" || d === "URI" ? d : null;
                        return b != null && c != null && a != null && d != null ? {
                            domain_uri: b,
                            event_type: c,
                            extractor_type: d,
                            id: a
                        } : null
                    }

                    function i(a) {
                        if (a == null || (typeof a === "undefined" ? "undefined" : h(a)) !== "object") return null;
                        a = a.extractor_config;
                        if (a == null || (typeof a === "undefined" ? "undefined" : h(a)) !== "object") return null;
                        var b = a.parameter_type;
                        a = a.value;
                        b = d(b);
                        a = a != null && typeof a === "string" && a !== "" ? a : null;
                        return b != null && a != null ? {
                            parameter_type: b,
                            value: a
                        } : null
                    }

                    function j(a) {
                        if (a == null || (typeof a === "undefined" ? "undefined" : h(a)) !== "object") return null;
                        var b = a.parameter_type;
                        a = a.selector;
                        b = d(b);
                        a = a != null && typeof a === "string" && a !== "" ? a : null;
                        return b != null && a != null ? {
                            parameter_type: b,
                            selector: a
                        } : null
                    }

                    function k(a) {
                        if (a == null || (typeof a === "undefined" ? "undefined" : h(a)) !== "object") return null;
                        a = a.extractor_config;
                        if (a == null || (typeof a === "undefined" ? "undefined" : h(a)) !== "object") return null;
                        a = a.parameter_selectors;
                        if (Array.isArray(a)) {
                            a = c(a, j);
                            var d = b(a, Boolean);
                            if (a.length === d.length) return {
                                parameter_selectors: d
                            }
                        }
                        return null
                    }

                    function l(a) {
                        var b = g(a);
                        if (b == null || a == null || (typeof a === "undefined" ? "undefined" : h(a)) !== "object") return null;
                        var c = b.domain_uri,
                            d = b.event_type,
                            e = b.extractor_type;
                        b = b.id;
                        if (e === "CSS") {
                            var f = k(a);
                            if (f != null) return {
                                domain_uri: c,
                                event_type: d,
                                extractor_config: f,
                                extractor_type: "CSS",
                                id: b
                            }
                        }
                        if (e === "CONSTANT_VALUE") {
                            f = i(a);
                            if (f != null) return {
                                domain_uri: c,
                                event_type: d,
                                extractor_config: f,
                                extractor_type: "CONSTANT_VALUE",
                                id: b
                            }
                        }
                        if (e === "GLOBAL_VARIABLE") return {
                            domain_uri: c,
                            event_type: d,
                            extractor_type: "GLOBAL_VARIABLE",
                            id: b
                        };
                        if (e === "GTM") return {
                            domain_uri: c,
                            event_type: d,
                            extractor_type: "GTM",
                            id: b
                        };
                        if (e === "JSON_LD") return {
                            domain_uri: c,
                            event_type: d,
                            extractor_type: "JSON_LD",
                            id: b
                        };
                        if (e === "META_TAG") return {
                            domain_uri: c,
                            event_type: d,
                            extractor_type: "META_TAG",
                            id: b
                        };
                        if (e === "OPEN_GRAPH") return {
                            domain_uri: c,
                            event_type: d,
                            extractor_type: "OPEN_GRAPH",
                            id: b
                        };
                        if (e === "RDFA") return {
                            domain_uri: c,
                            event_type: d,
                            extractor_type: "RDFA",
                            id: b
                        };
                        if (e === "SCHEMA_DOT_ORG") return {
                            domain_uri: c,
                            event_type: d,
                            extractor_type: "SCHEMA_DOT_ORG",
                            id: b
                        };
                        return e === "URI" ? {
                            domain_uri: c,
                            event_type: d,
                            extractor_type: "URI",
                            id: b
                        } : null
                    }
                    e.exports = l
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("signalsFBEventsCoercePixel", function() {
            return function(g, i, j, k) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("signalsFBEventsCoercePixelID"),
                        b = f.getFbeventsModules("signalsFBEventsCoerceUserData");

                    function c(c) {
                        if (c == null || (typeof c === "undefined" ? "undefined" : h(c)) !== "object") return null;
                        var d = c.eventCount,
                            e = c.id,
                            f = c.userData;
                        c = c.userDataFormFields;
                        d = typeof d === "number" ? d : null;
                        e = a(e);
                        f = b(f);
                        c = b(c);
                        return e != null && f != null && d != null && c != null ? {
                            eventCount: d,
                            id: e,
                            userData: f,
                            userDataFormFields: c
                        } : null
                    }
                    e.exports = c
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("signalsFBEventsCoercePixelID", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsLogging"),
                        b = a.logUserError;
                    a = f.getFbeventsModules("SignalsFBEventsUtils");
                    var c = a.isSafeInteger;

                    function d(a) {
                        if (typeof a === "number") {
                            if (!c(a)) {
                                b({
                                    pixelID: a.toString(),
                                    type: "INVALID_PIXEL_ID"
                                });
                                return null
                            }
                            return a.toString()
                        }
                        if (typeof a === "string") {
                            var d = /^[1-9][0-9]{0,25}$/;
                            if (!d.test(a)) {
                                b({
                                    pixelID: a,
                                    type: "INVALID_PIXEL_ID"
                                });
                                return null
                            }
                            return a
                        }
                        if (a === void 0) {
                            b({
                                pixelID: "undefined",
                                type: "INVALID_PIXEL_ID"
                            });
                            return null
                        }
                        if (a === null) {
                            b({
                                pixelID: "null",
                                type: "INVALID_PIXEL_ID"
                            });
                            return null
                        }
                        b({
                            pixelID: "unknown",
                            type: "INVALID_PIXEL_ID"
                        });
                        return null
                    }
                    k.exports = d
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("signalsFBEventsCoerceStandardParameter", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsUtils");
                    a = a.FBSet;
                    var b = new a(["content_category", "content_ids", "content_name", "content_type", "currency", "contents", "num_items", "order_id", "predicted_ltv", "search_string", "status", "subscription_id", "value", "id", "item_price", "quantity", "ct", "db", "em", "external_id", "fn", "ge", "ln", "namespace", "ph", "st", "zp"]);

                    function c(a) {
                        return typeof a === "string" && b.has(a) ? a : null
                    }
                    k.exports = c
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("signalsFBEventsCoerceUserData", function() {
            return function(g, i, j, k) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsUtils"),
                        b = a.each,
                        c = a.keys;

                    function d(a) {
                        if ((typeof a === "undefined" ? "undefined" : h(a)) !== "object" || a == null) return null;
                        var d = {};
                        b(c(a), function(b) {
                            var c = a[b];
                            typeof c === "string" && (d[b] = c)
                        });
                        return d
                    }
                    e.exports = d
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsConfigLoadedEvent", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
                        b = f.getFbeventsModules("signalsFBEventsCoercePixelID");

                    function c(a) {
                        a = b(a);
                        return a != null ? [a] : null
                    }
                    a = new a(c);
                    k.exports = a
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsEvents", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
                        b = f.getFbeventsModules("SignalsFBEventsConfigLoadedEvent"),
                        c = f.getFbeventsModules("SignalsFBEventsFiredEvent"),
                        d = f.getFbeventsModules("SignalsFBEventsGetCustomParametersEvent"),
                        e = f.getFbeventsModules("SignalsFBEventsGetIWLParametersEvent"),
                        g = f.getFbeventsModules("SignalsFBEventsIWLBootStrapEvent"),
                        h = f.getFbeventsModules("SignalsFBEventsPIIAutomatchedEvent"),
                        i = f.getFbeventsModules("SignalsFBEventsPIIConflictingEvent"),
                        j = f.getFbeventsModules("SignalsFBEventsPIIInvalidatedEvent"),
                        l = f.getFbeventsModules("SignalsFBEventsPluginLoadedEvent"),
                        m = f.getFbeventsModules("SignalsFBEventsSetIWLExtractorsEvent");
                    b = {
                        configLoaded: b,
                        execEnd: new a(),
                        fired: c,
                        getCustomParameters: d,
                        getIWLParameters: e,
                        iwlBootstrap: g,
                        piiAutomatched: h,
                        piiConflicting: i,
                        piiInvalidated: j,
                        pluginLoaded: l,
                        setIWLExtractors: m
                    };
                    k.exports = b
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsFiredEvent", function() {
            return function(g, i, j, k) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = Object.assign || function(a) {
                            for (var b = 1; b < arguments.length; b++) {
                                var c = arguments[b];
                                for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
                            }
                            return a
                        },
                        b = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
                        c = f.getFbeventsModules("SignalsParamList");

                    function d(b, d, e) {
                        var f = null;
                        (b === "GET" || b === "POST" || b === "BEACON") && (f = b);
                        b = d instanceof c ? d : null;
                        d = (typeof e === "undefined" ? "undefined" : h(e)) === "object" ? a({}, e) : null;
                        return f != null && b != null && d != null ? [f, b, d] : null
                    }
                    b = new b(d);
                    e.exports = b
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsGetCustomParametersEvent", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
                        b = f.getFbeventsModules("signalsFBEventsCoercePixel");

                    function c(a, c) {
                        a = b(a);
                        c = c != null && typeof c === "string" ? c : null;
                        return a != null && c != null ? [a, c] : null
                    }
                    a = new a(c);
                    k.exports = a
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsGetIWLParametersEvent", function() {
            return function(g, i, j, k) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
                        b = f.getFbeventsModules("signalsFBEventsCoercePixel");

                    function c() {
                        for (var a = arguments.length, c = Array(a), d = 0; d < a; d++) c[d] = arguments[d];
                        var e = c[0];
                        if (e == null || (typeof e === "undefined" ? "undefined" : h(e)) !== "object") return null;
                        var f = e.unsafePixel,
                            g = e.unsafeTarget,
                            i = b(f),
                            j = g instanceof HTMLElement ? g : null;
                        return i != null && j != null ? [{
                            pixel: i,
                            target: j
                        }] : null
                    }
                    e.exports = new a(c)
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("signalsFBEventsGetIwlUrl", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("signalsFBEventsGetTier");
                    k.exports = function(b, c) {
                        c = a(c);
                        c = c == null ? "www.facebook.com" : "www." + c + ".facebook.com";
                        return "https://" + c + "/signals/iwl.js?pixel_id=" + b
                    }
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("signalsFBEventsGetTier", function() {
            return function(f, g, h, i) {
                var j = {
                    exports: {}
                };
                j.exports;
                (function() {
                    "use strict";
                    var a = /^https:\/\/www\.([A-Za-z0-9\.]+)\.facebook\.com\/tr\/?$/,
                        b = ["https://www.facebook.com/tr", "https://www.facebook.com/tr/"];
                    j.exports = function(c) {
                        if (b.indexOf(c) !== -1) return null;
                        var d = a.exec(c);
                        if (d == null) throw new Error("Malformed tier: " + c);
                        return d[1]
                    }
                })();
                return j.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsIWLBootStrapEvent", function() {
            return function(g, i, j, k) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
                        b = f.getFbeventsModules("signalsFBEventsCoercePixelID");

                    function c() {
                        for (var a = arguments.length, c = Array(a), d = 0; d < a; d++) c[d] = arguments[d];
                        var e = c[0];
                        if (e == null || (typeof e === "undefined" ? "undefined" : h(e)) !== "object") return null;
                        var f = e.graphToken,
                            g = e.pixelID,
                            i = b(g);
                        return f != null && typeof f === "string" && i != null ? [{
                            graphToken: f,
                            pixelID: i
                        }] : null
                    }
                    a = new a(c);
                    e.exports = a
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsLogging", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsNetworkUtils"),
                        b = a.sendPOST;
                    a = f.getFbeventsModules("SignalsFBEventsUtils");
                    var c = a.isInstanceOf,
                        d = f.getFbeventsModules("SignalsParamList"),
                        e = !1;

                    function h() {
                        e = !0
                    }
                    var i = !0;

                    function j() {
                        i = !1
                    }
                    var l = "console",
                        m = "warn";

                    function n(a) {
                        g[l] && g[l][m] && g[l][m](a)
                    }
                    var o = !1;

                    function p() {
                        o = !0
                    }

                    function q(a) {
                        if (o) return;
                        n("[Facebook Pixel] - " + a)
                    }
                    var r = "Facebook Pixel Error",
                        s = g.postMessage ? g.postMessage.bind(g) : function() {},
                        t = {};

                    function u(a) {
                        switch (a.type) {
                            case "FBQ_NO_METHOD_NAME":
                                return "You must provide an argument to fbq().";
                            case "INVALID_FBQ_METHOD":
                                var b = a.method;
                                return "\"fbq('" + b + "', ...);\" is not a valid fbq command.";
                            case "INVALID_PIXEL_ID":
                                b = a.pixelID;
                                return "Invalid PixelID: " + b + ".";
                            case "DUPLICATE_PIXEL_ID":
                                b = a.pixelID;
                                return "Duplicate Pixel ID: " + b + ".";
                            case "SET_METADATA_ON_UNINITIALIZED_PIXEL_ID":
                                b = a.metadataValue;
                                var c = a.pixelID;
                                return "Trying to set argument " + b + " for uninitialized Pixel ID " + c + ".";
                            case "CONFLICTING_VERSIONS":
                                return "Multiple pixels with conflicting versions were detected on this page.";
                            case "MULTIPLE_PIXELS":
                                return "Multiple pixels were detected on this page.";
                            case "UNSUPPORTED_METADATA_ARGUMENT":
                                b = a.metadata;
                                return "Unsupported metadata argument: " + b + ".";
                            case "REQUIRED_PARAM_MISSING":
                                c = a.param;
                                b = a.eventName;
                                return "Required parameter '" + c + "' is missing for event '" + b + "'.";
                            case "INVALID_PARAM":
                                c = a.param;
                                b = a.eventName;
                                return "Parameter '" + c + "' is invalid for event '" + b + "'.";
                            case "NO_EVENT_NAME":
                                return 'Missing event name. Track events must be logged with an event name fbq("track", eventName)';
                            case "NONSTANDARD_EVENT":
                                c = a.eventName;
                                return "You are sending a non-standard event '" + c + "'. The preferred way to send these events is using trackCustom. See 'https://developers.facebook.com/docs/ads-for-websites/pixel-events/#events' for more information.";
                            case "NEGATIVE_EVENT_PARAM":
                                b = a.param;
                                c = a.eventName;
                                return "Parameter '" + b + "' is negative for event '" + c + "'.";
                            case "PII_INVALID_TYPE":
                                b = a.key_type;
                                c = a.key_val;
                                return "An invalid " + b + " was specified for '" + c + "'. This data will not be sent with any events for this Pixel.";
                            case "PII_UNHASHED_PII":
                                b = a.key;
                                return "The value for the '" + b + "' key appeared to be PII. This data will not be sent with any events for this Pixel.";
                            case "INVALID_CONSENT_ACTION":
                                c = a.action;
                                return "\"fbq('" + c + "', ...);\" is not a valid fbq('consent', ...) action. Valid actions are 'revoke' and 'grant'.";
                            case "INVALID_JSON_LD":
                                b = a.jsonLd;
                                return "Unable to parse JSON-LD tag. Malformed JSON found: '" + b + "'.";
                            case "SITE_CODELESS_OPT_OUT":
                                c = a.pixelID;
                                return "Unable to open Codeless events interface for pixel as the site has opted out. Pixel ID: " + c + ".";
                            case "PIXEL_NOT_INITIALIZED":
                                b = a.pixelID;
                                return "Pixel " + b + " not found";
                            default:
                                x(new Error("INVALID_USER_ERROR - " + a.type + " - " + JSON.stringify(a)));
                                return "Invalid User Error."
                        }
                    }

                    function v(a, e) {
                        try {
                            var f = Math.random(),
                                h = g.fbq && g.fbq._releaseSegment ? g.fbq._releaseSegment : "unknown";
                            if (i && f < .01 || h === "canary") {
                                f = new d(null);
                                f.append("p", "pixel");
                                f.append("v", g.fbq && g.fbq.version ? g.fbq.version : "unknown");
                                f.append("e", a.toString());
                                c(a, Error) && (f.append("f", a.fileName), f.append("s", a.stackTrace || a.stack));
                                f.append("ue", e ? "1" : "0");
                                f.append("rs", h);
                                b(f, "https://connect.facebook.net/log/error")
                            }
                        } catch (a) {}
                    }

                    function w(a) {
                        var b = JSON.stringify(a);
                        if (!Object.prototype.hasOwnProperty.call(t, b)) t[b] = !0;
                        else return;
                        b = u(a);
                        q(b);
                        s({
                            action: "FB_LOG",
                            logMessage: b,
                            logType: r
                        }, "*");
                        v(new Error(b), !0)
                    }

                    function x(a) {
                        v(a, !1), e && q(a.toString())
                    }
                    a = {
                        consoleWarn: n,
                        disableAllLogging: p,
                        disableSampling: j,
                        enableVerboseDebugLogging: h,
                        logError: x,
                        logUserError: w
                    };
                    k.exports = a
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsNetworkUtils", function() {
            return function(g, h, i, j) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsProxyState"),
                        b = f.getFbeventsModules("SignalsFBEventsQE"),
                        c = f.getFbeventsModules("SignalsFBEventsUtils"),
                        d = c.listenOnce;

                    function i(b, c) {
                        return c != null && a.getShouldProxy() ? c : b
                    }
                    var j = {
                        UNSENT: 0,
                        OPENED: 1,
                        HEADERS_RECEIVED: 2,
                        LOADING: 3,
                        DONE: 4
                    };
                    c = function c() {
                        var e = this;
                        k(this, c);
                        this.sendGET = function(b, c, d) {
                            b.replaceEntry("rqm", "GET");
                            var f = b.toQueryString();
                            f = i(c, d) + "?" + f;
                            if (f.length < 2048) {
                                var g = new Image();
                                if (d != null) {
                                    var h = a.getShouldProxy();
                                    g.onerror = function() {
                                        a.setShouldProxy(!0), h || e.sendGET(b, c, d)
                                    }
                                }
                                g.src = f;
                                return !0
                            }
                            return !1
                        };
                        this.sendPOST = function(a, c, d) {
                            var f = b.get("xhr_cors_post");
                            if (f) {
                                a.append("exp", f.code);
                                if (f.isInExperimentGroup) return e._sendXHRPost(a, c, d)
                            }
                            return e._sendFormPOST(a, c, d)
                        };
                        this._sendXHRPost = function(b, c, d) {
                            b.replaceEntry("rqm", "xhrPOST");
                            var f = new XMLHttpRequest(),
                                g = function() {
                                    if (d != null) {
                                        var f = a.getShouldProxy();
                                        a.setShouldProxy(!0);
                                        f || e.sendPOST(b, c, d)
                                    }
                                };
                            if ("withCredentials" in f) f.withCredentials = !0, f.open("POST", c, !1), f.onreadystatechange = function() {
                                if (f.readyState !== j.DONE) return;
                                f.status !== 200 && g()
                            };
                            else if (XDomainRequest != void 0) f = new XDomainRequest(), f.open("POST", c), f.onerror = g;
                            else return !1;
                            f.send(b.toFormData());
                            return !0
                        };
                        this._sendFormPOST = function(c, f, j) {
                            c.replaceEntry("rqm", "formPOST");
                            var k = b.get("set_timeout_post");
                            k && c.append("exp", k.code);
                            var l = "fb" + Math.random().toString().replace(".", ""),
                                m = h.createElement("form");
                            m.method = "post";
                            m.action = i(f, j);
                            m.target = l;
                            m.acceptCharset = "utf-8";
                            m.style.display = "none";
                            var n = !!(g.attachEvent && !g.addEventListener),
                                o = h.createElement("iframe");
                            n && (o.name = l);
                            o.src = "about:blank";
                            o.id = l;
                            o.name = l;
                            m.appendChild(o);
                            d(o, "load", function() {
                                c.each(function(a, b) {
                                    var c = h.createElement("input");
                                    c.name = decodeURIComponent(a);
                                    c.value = b;
                                    m.appendChild(c)
                                }), d(o, "load", function() {
                                    m.parentNode && m.parentNode.removeChild(m)
                                }), k && k.isInExperimentGroup && c.get("ev") === "SubscribedButtonClick" ? setTimeout(function() {
                                    return m.submit()
                                }) : m.submit()
                            });
                            if (j != null) {
                                var p = a.getShouldProxy();
                                o.onerror = function() {
                                    a.setShouldProxy(!0), p || e.sendPOST(c, f, j)
                                }
                            }
                            h.body != null && h.body.appendChild(m);
                            return !0
                        };
                        this.sendBeacon = function(b, c, d) {
                            b.append("rqm", "SB");
                            if (g.navigator && g.navigator.sendBeacon) {
                                var f = g.navigator.sendBeacon(i(c, d), b.toFormData());
                                if (d != null && !f) {
                                    f = a.getShouldProxy();
                                    a.setShouldProxy(!0);
                                    f || e.sendBeacon(b, c, d)
                                }
                                return !0
                            }
                            return !1
                        }
                    };
                    e.exports = new c()
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsPIIAutomatchedEvent", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
                        b = f.getFbeventsModules("signalsFBEventsCoercePixel");

                    function c(a) {
                        a = b(a);
                        return a != null ? [a] : null
                    }
                    a = new a(c);
                    k.exports = a
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsPIIConflictingEvent", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
                        b = f.getFbeventsModules("signalsFBEventsCoercePixel");

                    function c(a) {
                        a = b(a);
                        return a != null ? [a] : null
                    }
                    a = new a(c);
                    k.exports = a
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsPIIInvalidatedEvent", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
                        b = f.getFbeventsModules("signalsFBEventsCoercePixel");

                    function c(a) {
                        a = b(a);
                        return a != null ? [a] : null
                    }
                    k.exports = new a(c)
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsPlugin", function() {
            return function(f, g, h, i) {
                var j = {
                    exports: {}
                };
                j.exports;
                (function() {
                    "use strict";
                    var a = function a(b) {
                        k(this, a), this.__fbEventsPlugin = 1, this.plugin = b, this.__fbEventsPlugin = 1
                    };
                    j.exports = a
                })();
                return j.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsPluginLoadedEvent", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsBaseEvent");

                    function b(a) {
                        a = a != null && typeof a === "string" ? a : null;
                        return a != null ? [a] : null
                    }
                    k.exports = new a(b)
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsProxyState", function() {
            return function(f, g, h, i) {
                var j = {
                    exports: {}
                };
                j.exports;
                (function() {
                    "use strict";
                    var a = !1;
                    j.exports = {
                        getShouldProxy: function() {
                            return a
                        },
                        setShouldProxy: function(b) {
                            a = b
                        }
                    }
                })();
                return j.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsQE", function() {
            return function(f, h, j, d) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = function() {
                        return Math.random()
                    };

                    function b(b) {
                        var c = a();
                        for (var d = 0; d < b.length; d++) {
                            var e = b[d],
                                f = e.passRate,
                                h = g(e.range, 2),
                                i = h[0];
                            h = h[1];
                            if (f < 0 || f > 1) throw new Error("passRate should be between 0 and 1 in " + e.name);
                            if (c >= i && c < h) {
                                i = a() < f;
                                return {
                                    code: e.code + (i ? "1" : "0"),
                                    isInExperimentGroup: i,
                                    name: e.name
                                }
                            }
                        }
                        return null
                    }
                    var c = function() {
                        function a() {
                            k(this, a), this._groups = [], this._result = null, this._hasRolled = !1
                        }
                        i(a, [{
                            key: "setExperimentGroups",
                            value: function(a) {
                                this._groups = a, this._result = null, this._hasRolled = !1
                            }
                        }, {
                            key: "get",
                            value: function(a) {
                                if (!this._hasRolled) {
                                    var c = b(this._groups);
                                    c != null && (this._result = c);
                                    this._hasRolled = !0
                                }
                                if (a == null || a === "") return this._result;
                                return this._result != null && this._result.name === a ? this._result : null
                            }
                        }]);
                        return a
                    }();
                    e.exports = new c()
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsSetIWLExtractorsEvent", function() {
            return function(g, i, j, k) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
                        b = f.getFbeventsModules("SignalsFBEventsUtils"),
                        c = b.filter,
                        d = b.map,
                        g = f.getFbeventsModules("signalsFBEventsCoerceParameterExtractors"),
                        i = f.getFbeventsModules("signalsFBEventsCoercePixelID");

                    function j() {
                        for (var a = arguments.length, b = Array(a), e = 0; e < a; e++) b[e] = arguments[e];
                        var f = b[0];
                        if (f == null || (typeof f === "undefined" ? "undefined" : h(f)) !== "object") return null;
                        var j = f.pixelID,
                            k = f.extractors,
                            l = i(j),
                            m = Array.isArray(k) ? d(k, g) : null,
                            n = m != null ? c(m, Boolean) : null;
                        return n != null && m != null && n.length === m.length && l != null ? [{
                            extractors: n,
                            pixelID: l
                        }] : null
                    }
                    b = new a(j);
                    e.exports = b
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsTelemetry", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsLogging"),
                        b = f.getFbeventsModules("SignalsFBEventsNetworkUtils"),
                        c = b.sendPOST,
                        d = f.getFbeventsModules("SignalsParamList");
                    b = .01;
                    var e = Math.random(),
                        h = g.fbq && g.fbq._releaseSegment ? g.fbq._releaseSegment : "unknown",
                        i = e < b || h === "canary";

                    function j(b) {
                        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                            f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                        if (!f && !i) return;
                        try {
                            var j = new d(null);
                            j.append("v", g.fbq && g.fbq.version ? g.fbq.version : "unknown");
                            j.append("rs", h);
                            j.append("e", b);
                            j.append("p", e);
                            c(j, "https://connect.facebook.net/log/fbevents_telemetry/")
                        } catch (b) {
                            a.logError(b)
                        }
                    }

                    function l() {
                        j("COALESCE_INIT")
                    }

                    function m(a) {
                        j("COALESCE_COMPLETE", a)
                    }

                    function n(a) {
                        j("FBMQ_FORWARDED", a, !0)
                    }
                    k.exports = {
                        logStartBatch: l,
                        logEndBatch: m,
                        logMobileNativeForwarding: n
                    }
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsUtils", function() {
            return function(f, g, j, d) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = Object.prototype.toString,
                        b = !("addEventListener" in g);

                    function c(a, b) {
                        return b != null && a instanceof b
                    }

                    function d(b) {
                        return Array.isArray ? Array.isArray(b) : a.call(b) === "[object Array]"
                    }

                    function f(a) {
                        return typeof a === "number" || typeof a === "string" && /^\d+$/.test(a)
                    }
                    var j = Number.isInteger || function(a) {
                        return typeof a === "number" && isFinite(a) && Math.floor(a) === a
                    };

                    function l(a) {
                        return j(a) && a >= 0 && a <= Number.MAX_SAFE_INTEGER
                    }

                    function m(a, c, d) {
                        var e = b ? "on" + c : c;
                        c = b ? a.attachEvent : a.addEventListener;
                        var f = b ? a.detachEvent : a.removeEventListener,
                            g = function b() {
                                f && f.call(a, e, b, !1), d()
                            };
                        c && c.call(a, e, g, !1)
                    }
                    var n = Object.prototype.hasOwnProperty,
                        o = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        p = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        q = p.length;

                    function r(a) {
                        if (Object.keys) return Object.keys(a);
                        if ((typeof a === "undefined" ? "undefined" : h(a)) !== "object" && (typeof a !== "function" || a === null)) throw new TypeError("Object.keys called on non-object");
                        var b = [];
                        for (var c in a) n.call(a, c) && b.push(c);
                        if (o)
                            for (var d = 0; d < q; d++) n.call(a, p[d]) && b.push(p[d]);
                        return b
                    }

                    function s(a, b) {
                        if (Array.prototype.map) return Array.prototype.map.call(a, b);
                        if (a == null) throw new TypeError(" array is null or not defined");
                        a = Object(a);
                        var c = a.length >>> 0;
                        if (typeof b !== "function") throw new TypeError(b + " is not a function");
                        var d = new Array(c),
                            e = 0;
                        while (e < c) {
                            var f;
                            e in a && (f = a[e], f = b(null, f, e, a), d[e] = f);
                            e++
                        }
                        return d
                    }

                    function t(a, b, c) {
                        if (Array.prototype.reduce) return Array.prototype.reduce.call(a, b, c);
                        if (a == null) throw new TypeError(" array is null or not defined");
                        if (typeof b !== "function") throw new TypeError(b + " is not a function");
                        var d = Object(a),
                            e = d.length >>> 0,
                            f = 0;
                        if (c != null) c = c;
                        else {
                            while (f < e && !(f in d)) f++;
                            if (f >= e) throw new TypeError("Reduce of empty array with no initial value");
                            c = d[f++]
                        }
                        while (f < e) f in d && (c = b(c, d[f], f, a)), f++;
                        return c
                    }

                    function u(a) {
                        if (this == null) throw new TypeError("Array.prototype.some called on null or undefined");
                        if (Array.prototype.some) return Array.prototype.some.call(this, a);
                        if (typeof a !== "function") throw new TypeError();
                        var b = Object(this),
                            c = b.length >>> 0,
                            d = arguments.length >= 2 ? arguments[1] : void 0;
                        for (var e = 0; e < c; e++)
                            if (e in b && a.call(d, b[e], e, b)) return !0;
                        return !1
                    }

                    function v(a) {
                        return r(a).length === 0
                    }

                    function w(a) {
                        if (this === void 0 || this === null) throw new TypeError();
                        var b = Object(this),
                            c = b.length >>> 0;
                        if (typeof a !== "function") throw new TypeError();
                        var d = [],
                            e = arguments.length >= 2 ? arguments[1] : void 0;
                        for (var f = 0; f < c; f++)
                            if (f in b) {
                                var g = b[f];
                                a.call(e, g, f, b) && d.push(g)
                            }
                        return d
                    }

                    function x(a, b) {
                        try {
                            return b(a)
                        } catch (a) {
                            if (a instanceof TypeError)
                                if (y.test(a)) return null;
                                else if (z.test(a)) return void 0;
                            throw a
                        }
                    }
                    var y = /^null | null$|^[^(]* null /i,
                        z = /^undefined | undefined$|^[^(]* undefined /i;
                    x["default"] = x;
                    var A = function() {
                        function a(b) {
                            k(this, a), this.items = b || []
                        }
                        i(a, [{
                            key: "has",
                            value: function(a) {
                                return u.call(this.items, function(b) {
                                    return b === a
                                })
                            }
                        }, {
                            key: "add",
                            value: function(a) {
                                this.items.push(a)
                            }
                        }]);
                        return a
                    }();

                    function B(a) {
                        return a
                    }

                    function C(a, b) {
                        return a == null || b == null ? !1 : a.indexOf(b) >= 0
                    }
                    A = {
                        FBSet: A,
                        castTo: B,
                        each: function(a, b) {
                            s.call(this, a, b)
                        },
                        filter: function(a, b) {
                            return w.call(a, b)
                        },
                        idx: x,
                        isArray: d,
                        isEmptyObject: v,
                        isInstanceOf: c,
                        isInteger: j,
                        isNumber: f,
                        isSafeInteger: l,
                        keys: r,
                        listenOnce: m,
                        map: s,
                        reduce: t,
                        some: function(a, b) {
                            return u.call(a, b)
                        },
                        stringIncludes: C
                    };
                    e.exports = A
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsParamList", function() {
            return function(f, g, j, d) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = "deep",
                        b = "shallow";

                    function c(a) {
                        return JSON === void 0 || JSON === null || !JSON.stringify ? Object.prototype.toString.call(a) : JSON.stringify(a)
                    }

                    function d(a) {
                        if (a === null || a === void 0) return !0;
                        a = typeof a === "undefined" ? "undefined" : h(a);
                        return a === "number" || a === "boolean" || a === "string"
                    }
                    var f = function() {
                        function e(a) {
                            k(this, e), this._params = [], this._piiTranslator = a
                        }
                        i(e, [{
                            key: "containsKey",
                            value: function(a) {
                                for (var b = 0; b < this._params.length; b++)
                                    if (this._params[b].name === a) return !0;
                                return !1
                            }
                        }, {
                            key: "get",
                            value: function(a) {
                                a = a;
                                for (var b = 0; b < this._params.length; b++)
                                    if (this._params[b].name === a) return this._params[b].value;
                                return null
                            }
                        }, {
                            key: "getAllParams",
                            value: function() {
                                return this._params
                            }
                        }, {
                            key: "replaceEntry",
                            value: function(a, b) {
                                var c = 0;
                                while (c < this._params.length) this._params[c].name === a ? this._params.splice(c, 1) : c++;
                                this.append(a, b)
                            }
                        }, {
                            key: "addRange",
                            value: function(a) {
                                var c = this;
                                a.each(function(a, d) {
                                    return c._append({
                                        name: a,
                                        value: d
                                    }, b, !1)
                                })
                            }
                        }, {
                            key: "append",
                            value: function(b, c) {
                                var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                                this._append({
                                    name: encodeURIComponent(b),
                                    value: c
                                }, a, d);
                                return this
                            }
                        }, {
                            key: "appendHash",
                            value: function(b) {
                                var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                                for (var d in b) Object.prototype.hasOwnProperty.call(b, d) && this._append({
                                    name: encodeURIComponent(d),
                                    value: b[d]
                                }, a, c);
                                return this
                            }
                        }, {
                            key: "_append",
                            value: function(b, e, f) {
                                var g = b.name;
                                b = b.value;
                                d(b) ? this._appendPrimitive(g, b, f) : e === a ? this._appendObject(g, b, f) : this._appendPrimitive(g, c(b), f)
                            }
                        }, {
                            key: "_translateValue",
                            value: function(a, b, c) {
                                if (typeof b === "boolean") return b ? "true" : "false";
                                if (!c) return "" + b;
                                if (!this._piiTranslator) throw new Error();
                                return this._piiTranslator(a, "" + b)
                            }
                        }, {
                            key: "_appendPrimitive",
                            value: function(a, b, c) {
                                if (b != null) {
                                    b = this._translateValue(a, b, c);
                                    b != null && this._params.push({
                                        name: a,
                                        value: b
                                    })
                                }
                            }
                        }, {
                            key: "_appendObject",
                            value: function(a, c, d) {
                                var e = null;
                                for (var f in c)
                                    if (Object.prototype.hasOwnProperty.call(c, f)) {
                                        var g = a + "[" + encodeURIComponent(f) + "]";
                                        try {
                                            this._append({
                                                name: g,
                                                value: c[f]
                                            }, b, d)
                                        } catch (a) {
                                            e == null && (e = a)
                                        }
                                    }
                                if (e != null) throw e
                            }
                        }, {
                            key: "each",
                            value: function(a) {
                                for (var b = 0; b < this._params.length; b++) {
                                    var c = this._params[b],
                                        d = c.name;
                                    c = c.value;
                                    a(d, c)
                                }
                            }
                        }, {
                            key: "toQueryString",
                            value: function() {
                                var a = [];
                                this.each(function(b, c) {
                                    a.push(b + "=" + encodeURIComponent(c))
                                });
                                return a.join("&")
                            }
                        }, {
                            key: "toFormData",
                            value: function() {
                                var a = new FormData();
                                this.each(function(b, c) {
                                    a.append(b, c)
                                });
                                return a
                            }
                        }], [{
                            key: "fromHash",
                            value: function(a, b) {
                                return new e(b).appendHash(a)
                            }
                        }]);
                        return e
                    }();
                    e.exports = f
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsPixelEndpoint", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsEvents"),
                        b = a.fired,
                        c = f.getFbeventsModules("SignalsFBEventsNetworkUtils"),
                        d = f.getFbeventsModules("SignalsFBEventsQE"),
                        e = f.getFbeventsModules("SignalsFBEventsTelemetry"),
                        j = f.getFbeventsModules("SignalsParamList"),
                        l = {
                            ENDPOINT: "https://www.facebook.com/tr/",
                            PROXY_ENDPOINT: null
                        },
                        m = g.top !== g,
                        n = !1;
                    a = function(a) {
                        n = a
                    };
                    a(s());

                    function o(a) {
                        var b = a.customData,
                            c = a.customParams,
                            d = a.eventName,
                            e = a.id;
                        a = a.piiTranslator;
                        a = new j(a);
                        a.append("id", e);
                        a.append("ev", d);
                        a.append("dl", i.href);
                        a.append("rl", h.referrer);
                        a.append("if", m);
                        a.append("ts", new Date().valueOf());
                        a.append("cd", b);
                        a.append("sw", g.screen.width);
                        a.append("sh", g.screen.height);
                        c && a.addRange(c);
                        return a
                    }
                    var p = 0;

                    function q() {
                        var a = p;
                        p = 0;
                        e.logEndBatch(a)
                    }

                    function r(a) {
                        var f = a.customData,
                            g = a.customParams,
                            h = a.eventName;
                        a = o(a);
                        var i = d.get();
                        if (i != null) {
                            var j = i.name === "send_coalescence_telemetry";
                            j && p === 0 && i.isInExperimentGroup && (e.logStartBatch(), setTimeout(q, 0));
                            i.name === "a_a_test_experiment" && a.append("exp", i.code)
                        }
                        p++;
                        j = !!g && g.containsKey("es") && g.get("es") === "timespent";
                        i = [a, l.ENDPOINT, l.PROXY_ENDPOINT];
                        if ((j || !n && h === "SubscribedButtonClick") && c.sendBeacon.apply(c, i)) {
                            b.trigger("BEACON", a, f);
                            return
                        }
                        if (c.sendGET.apply(c, i)) {
                            b.trigger("GET", a, f);
                            return
                        }
                        if (c.sendPOST.apply(c, i)) {
                            b.trigger("POST", a, f);
                            return
                        }
                        throw new Error("No working send method found for this fire.")
                    }

                    function s() {
                        var a = g.chrome,
                            b = g.navigator,
                            c = b.vendor,
                            d = g.opr !== void 0,
                            e = b.userAgent.indexOf("Edge") > -1;
                        b = b.userAgent.match("CriOS");
                        return !b && a !== null && a !== void 0 && c === "Google Inc." && d === !1 && e === !1
                    }

                    function t(a) {
                        if (g.navigator && g.navigator.sendBeacon) {
                            a = o(a);
                            c.sendBeacon(a, l.ENDPOINT)
                        }
                    }
                    k.exports = {
                        CONFIG: l,
                        sendBeaconPII: t,
                        sendEvent: r,
                        setIsChrome: a
                    }
                })();
                return k.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEvents.plugins.iwlbootstrapper", function() {
            return function(g, h, i, j) {
                var k = {
                    exports: {}
                };
                k.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsIWLBootStrapEvent"),
                        b = f.getFbeventsModules("SignalsFBEventsLogging"),
                        c = f.getFbeventsModules("SignalsFBEventsPlugin"),
                        d = f.getFbeventsModules("SignalsPixelEndpoint"),
                        e = f.getFbeventsModules("signalsFBEventsGetIwlUrl"),
                        i = f.getFbeventsModules("signalsFBEventsGetTier"),
                        j = b.logUserError,
                        l = /^https:\/\/.*\.facebook\.com$/i,
                        m = "FACEBOOK_IWL_CONFIG_STORAGE_KEY",
                        n = g.sessionStorage ? g.sessionStorage : {
                            getItem: function(a) {
                                return null
                            },
                            removeItem: function(a) {},
                            setItem: function(a, b) {}
                        };
                    k.exports = new c(function(b, c) {
                        function k(a, b) {
                            var c = h.createElement("script");
                            c.async = !0;
                            c.onload = function() {
                                if (!g.FacebookIWL || !g.FacebookIWL.init) return;
                                var a = i(d.CONFIG.ENDPOINT);
                                a != null && g.FacebookIWL.set && g.FacebookIWL.set("tier", a);
                                b()
                            };
                            g.FacebookIWLSessionEnd = function() {
                                n.removeItem(m), g.close()
                            };
                            c.src = e(a, d.CONFIG.ENDPOINT);
                            h.body && h.body.appendChild(c)
                        }
                        var o = !1,
                            p = function(a) {
                                return !!(c && c.pixelsByID && Object.prototype.hasOwnProperty.call(c.pixelsByID, a))
                            };

                        function q() {
                            if (o) return;
                            var a = n.getItem(m);
                            if (!a) return;
                            a = JSON.parse(a);
                            var b = a.pixelID,
                                c = a.graphToken,
                                d = a.sessionStartTime;
                            o = !0;
                            k(b, function() {
                                var a = p(b) ? b : null;
                                g.FacebookIWL.init(a, c, d)
                            })
                        }

                        function r(a) {
                            if (o) return;
                            k(a, function() {
                                return g.FacebookIWL.showConfirmModal(a)
                            })
                        }

                        function s(a, b, c) {
                            n.setItem(m, JSON.stringify({
                                graphToken: a,
                                pixelID: b,
                                sessionStartTime: c
                            })), q()
                        }
                        a.listen(function(a) {
                            var b = a.graphToken;
                            a = a.pixelID;
                            s(b, a);
                            g.FacebookIWLSessionEnd = function() {
                                return n.removeItem(m)
                            }
                        });

                        function b(a) {
                            var b = a.data,
                                d = b.graphToken,
                                e = b.msg_type,
                                f = b.pixelID;
                            b = b.sessionStartTime;
                            if (c && c.pixelsByID && c.pixelsByID[f] && c.pixelsByID[f].codeless === "false") {
                                j({
                                    pixelID: f,
                                    type: "SITE_CODELESS_OPT_OUT"
                                });
                                return
                            }
                            if (n.getItem(m) || !l.test(a.origin) || !(a.data && (e === "FACEBOOK_IWL_BOOTSTRAP" || e === "FACEBOOK_IWL_CONFIRM_DOMAIN"))) return;
                            switch (e) {
                                case "FACEBOOK_IWL_BOOTSTRAP":
                                    a.source.postMessage("FACEBOOK_IWL_BOOTSTRAP_ACK", a.origin);
                                    s(d, f, b);
                                    break;
                                case "FACEBOOK_IWL_CONFIRM_DOMAIN":
                                    a.source.postMessage("FACEBOOK_IWL_CONFIRM_DOMAIN_ACK", a.origin);
                                    r(f);
                                    break
                            }
                        }
                        if (n.getItem(m)) {
                            q();
                            return
                        }
                        g.opener && g.addEventListener("message", b)
                    })
                })();
                return k.exports
            }(a, b, c, d)
        });
        e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.iwlbootstrapper");
        f.registerPlugin && f.registerPlugin("fbevents.plugins.iwlbootstrapper", e.exports);
        f.ensureModuleRegistered("fbevents.plugins.iwlbootstrapper", function() {
            return e.exports
        })
    })()
})(window, document, location, history);
fbq.registerPlugin("fbevents.plugins.inferredEvents", {
    __fbEventsPlugin: 1,
    plugin: function(fbq, instance, config) { /* empty plugin */ }
});