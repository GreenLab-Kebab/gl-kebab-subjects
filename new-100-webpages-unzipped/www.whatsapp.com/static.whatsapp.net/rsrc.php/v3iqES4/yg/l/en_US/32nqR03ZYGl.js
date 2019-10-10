if (self.CavalryLogger) {
    CavalryLogger.start_js(["iA96j"]);
}

__d("DetectBrokenProxyCache", ["AsyncSignal", "Cookie", "URI"], (function(a, b, c, d, e, f) {
    var g;

    function a(a, c) {
        var d = b("Cookie").get(c);
        if (d != a && d != null && a != "0") {
            c = {
                c: "si_detect_broken_proxy_cache",
                m: c + " " + a + " " + d
            };
            a = new(g || (g = b("URI")))("/common/scribe_endpoint.php").getQualifiedURI().toString();
            new(b("AsyncSignal"))(a, c).send()
        }
    }
    e.exports = {
        run: a
    }
}), null);
__d("FantaHider", ["ifRequired"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    e.exports = {
        hide: function() {
            b("ifRequired")("FantaTabsSlimApp", function(a) {
                a.hide()
            }, function() {
                b("ifRequired")("FantaTabsReactApp", function(a) {
                    a.hide()
                })
            })
        },
        unhide: function() {
            b("ifRequired")("FantaTabsSlimApp", function(a) {
                a.unhide()
            }, function() {
                b("ifRequired")("FantaTabsReactApp", function(a) {
                    a.unhide()
                })
            })
        }
    }
}), null);
__d("AccessibilityLogger", ["AsyncSignal", "Cookie"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        COOKIE: "a11y",
        DECAY_MS: 6 * 60 * 60 * 1e3,
        DEFAULT: {
            sr: 0,
            "sr-ts": Date.now(),
            jk: 0,
            "jk-ts": Date.now(),
            kb: 0,
            "kb-ts": Date.now(),
            hcm: 0,
            "hcm-ts": Date.now()
        },
        getCookie: function() {
            var a = g.DEFAULT,
                c = b("Cookie").get(g.COOKIE);
            if (c) {
                c = JSON.parse(c);
                for (var d in a) d in c && (a[d] = c[d])
            }
            return a
        },
        logKey: function(a, c) {
            var d = g.getCookie();
            d[a]++;
            var e = Date.now();
            e - d[a + "-ts"] > g.DECAY_MS && (new(b("AsyncSignal"))("/ajax/accessibilitylogging", {
                eventName: c,
                times_pressed: d[a]
            }).send(), d[a + "-ts"] = e, d[a] = 0);
            b("Cookie").set(g.COOKIE, JSON.stringify(d))
        },
        logHCM: function() {
            g.logKey("hcm", "hcm_users")
        },
        logSRKey: function() {
            g.logKey("sr", "sr_users")
        },
        logJKKey: function() {
            g.logKey("jk", "jk_users")
        },
        logFocusIn: function() {
            g.logKey("kb", "kb_users")
        }
    };
    e.exports = g
}), null);
__d("ClickRefUtils", ["DataAttributeUtils"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        get_intern_ref: function(a) {
            __p && __p();
            if (a) {
                var b = {
                    profile_minifeed: 1,
                    gb_content_and_toolbar: 1,
                    gb_muffin_area: 1,
                    ego: 1,
                    bookmarks_menu: 1,
                    jewelBoxNotif: 1,
                    jewelNotif: 1,
                    BeeperBox: 1,
                    searchBarClickRef: 1
                };
                for (var a = a; a && a != document.body; a = a.parentNode) {
                    if (!a.id || typeof a.id !== "string") continue;
                    if (a.id.substr(0, 8) == "pagelet_") return a.id.substr(8);
                    if (a.id.substr(0, 8) == "box_app_") return a.id;
                    if (b[a.id]) return a.id
                }
            }
            return "-"
        },
        get_href: function(a) {
            a = a.getAttribute && (a.getAttribute("ajaxify") || a.getAttribute("data-endpoint")) || a.action || a.href || a.name;
            return typeof a === "string" ? a : null
        },
        should_report: function(a, c) {
            if (c == "FORCE") return !0;
            return c == "INDIRECT" ? !1 : a && (g.get_href(a) || a.getAttribute && b("DataAttributeUtils").getDataFt(a))
        }
    };
    e.exports = g
}), null);
__d("ClickRefLogger", ["Arbiter", "Banzai", "ClickRefUtils", "Cookie", "Env", "ScriptPath", "SessionName", "Vector", "$", "collectDataAttributes", "ge", "pageID"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h = {
        delay: 0,
        retry: !0
    };

    function i(a) {
        if (!b("ge")("content")) return [0, 0, 0, 0];
        b("$")("content");
        a = b("Vector").getEventPosition(a);
        return [a.x, a.y, 0, 0]
    }

    function j(c, d, e, f) {
        __p && __p();
        var g = "r",
            h = [0, 0, 0, 0],
            j, k;
        if (e) {
            j = e.type;
            j == "click" && b("ge")("content") && (h = i(e));
            var l = 0;
            e.ctrlKey && (l += 1);
            e.shiftKey && (l += 2);
            e.altKey && (l += 4);
            e.metaKey && (l += 8);
            l && (j += l)
        }
        d && (k = b("ClickRefUtils").get_href(d));
        l = b("collectDataAttributes")(e ? e.target || e.srcElement : d, ["ft", "gt"]);
        Object.assign(l.ft, f.ft);
        Object.assign(l.gt, f.gt);
        typeof l.ft.ei === "string" && delete l.ft.ei;
        e && e.which && (l.ft.click_type = e.which === 1 ? "left" : e.which === 2 ? "middle" : "right");
        f = [c._ue_ts, c._ue_count, k || "-", c._context, j || "-", b("ClickRefUtils").get_intern_ref(d), g, a.URI ? a.URI.getRequestURI(!0, !0).getUnqualifiedURI().toString() : location.pathname + location.search + location.hash, l].concat(h).concat(b("pageID")).concat(b("ScriptPath").getTopViewEndpoint());
        return f
    }
    b("Arbiter").subscribe("ClickRefAction/new", function(a, c) {
        if (b("ClickRefUtils").should_report(c.node, c.mode)) {
            a = j(c.cfa, c.node, c.event, c.extra_data);
            b("Cookie").set("act", c.cfa.ue);
            c = [b("SessionName").getName(), Date.now(), "act"];
            b("Banzai").post("click_ref_logger", Array.prototype.concat(c, a), h)
        }
    });
    b("Arbiter").subscribe("ClickRefAction/contextmenu", function(a, c) {
        if (b("ClickRefUtils").should_report(c.node, c.mode)) {
            a = j(c.cfa, c.node, c.event, c.extra_data);
            b("Cookie").set("act", c.cfa.ue);
            c = [b("SessionName").getName(), Date.now(), "act"];
            b("Banzai").post("click_ref_logger", Array.prototype.concat(c, a), h)
        }
    });

    function c(a) {
        __p && __p();

        function c(a) {
            var b = "";
            for (var c = 0; c < a.length; c++) b += String.fromCharCode(1 ^ a.charCodeAt(c));
            return b
        }

        function d(a, b, c, e) {
            __p && __p();
            var f = b[c];
            if (f && a && f in a)
                if (c + 1 < b.length) d(a[f], b, c + 1, e);
                else {
                    var g = a[f];
                    b = function() {
                        setTimeout(e.bind(null, arguments));
                        return g.apply(this, arguments)
                    };
                    b.toString = g.toString.bind(g);
                    Object.defineProperty(a, f, {
                        configurable: !1,
                        writable: !0,
                        value: b
                    })
                }
        }
        var e = {},
            f = {},
            g = !1;

        function h(a, b) {
            if (f[a]) return;
            f[a] = e[a] = 1
        }
        a = a[c("jiri")];
        if (a) {
            var i = [];
            c(a).split(",").map(function(a, f) {
                __p && __p();
                var j = a.substring(1).split(":"),
                    k;
                switch (a.charAt(0)) {
                    case "1":
                        i.push(function(a) {
                            window[j[0]] && h(f, j[0])
                        });
                        break;
                    case "2":
                        k = new RegExp(j[0]);
                        d(window, j, 2, function(b) {
                            b = b[j[1]];
                            typeof b === "string" && k.test(b) && h(f, a)
                        });
                        break;
                    case "3":
                        d(window, j, 0, function() {
                            for (var a = i.length; a--;) i[a]();
                            a = Object.keys(e);
                            a.length && (e = {}, setTimeout(b("Banzai")[c("qnru")].bind(b("Banzai"), c("islg"), {
                                m: "" + a
                            }), 5e3))
                        });
                        break;
                    case "4":
                        g = !0;
                        break
                }
            })
        }
    }
    try {
        c(g || (g = b("Env")))
    } catch (a) {}
}), null);
__d("DimensionTracking", ["Cookie", "Event", "debounce", "getViewportDimensions", "isInIframe"], (function(a, b, c, d, e, f) {
    function a() {
        var a = b("getViewportDimensions")();
        b("Cookie").set("wd", a.width + "x" + a.height)
    }
    b("isInIframe")() || (setTimeout(a, 100), b("Event").listen(window, "resize", b("debounce")(a, 250)), b("Event").listen(window, "focus", a))
}), null);
__d("HighContrastMode", ["AccessibilityLogger", "CSS", "CurrentUser", "DOM", "Style", "URI", "emptyFunction"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h = {
        init: function(a) {
            __p && __p();
            var c = new(g || (g = b("URI")))(window.location.href);
            if (c.getPath().indexOf("/intern/") === 0) return;
            if (window.top !== window.self) return;
            c = b("DOM").create("div");
            b("DOM").appendContent(document.body, c);
            c.style.cssText = "border: 1px solid !important;border-color: red green !important;position: fixed;height: 5px;top: -999px;background-image: url(" + a.spacerImage + ") !important;";
            a = b("Style").get(c, "background-image");
            var d = b("Style").get(c, "border-top-color"),
                e = b("Style").get(c, "border-right-color");
            d = d == e && a && (a == "none" || a == "url(invalid-url:)");
            d && (b("CSS").conditionClass(document.documentElement, "highContrast", d), b("CurrentUser").getID() && b("AccessibilityLogger").logHCM());
            b("DOM").remove(c);
            h.init = b("emptyFunction")
        }
    };
    e.exports = h
}), null);
__d("PagesBanzaiEventListener", ["Event", "PagesEventObserver", "Run"], (function(a, b, c, d, e, f) {
    a = {
        registerLogEvent: function(a, c, d) {
            var e = b("Event").listen(a, "click", function(a) {
                b("PagesEventObserver").logData_DEPRECATED(c, d)
            });
            b("Run").onLeave(function() {
                e.remove()
            })
        }
    };
    e.exports = a
}), null);
__d("KappaWrapper", ["AsyncSignal", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g = !1;
    e.exports = {
        forceStart: function(a, c, d) {
            var e = 0,
                f = function d() {
                    new(b("AsyncSignal"))("/si/kappa/", {
                        Ko: "a"
                    }).send(), ++e < a && b("setTimeoutAcrossTransitions")(d, c * 1e3)
                };
            b("setTimeoutAcrossTransitions")(f, (c + d) * 1e3)
        },
        start: function(a, b, c) {
            g || (g = !0, this.forceStart(a, b, c))
        }
    }
}), null);
__d("Chromedome", ["fbt"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = {
        start: function(a) {
            __p && __p();
            if (top !== window || document.domain == null || !/(^|\.)facebook\.(com|sg)$/.test(document.domain)) return;
            a = g._("Stop!");
            var b = g._("This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or \"hack\" someone's account, it is a scam and will give them access to your Facebook account."),
                c = g._("See {url} for more information.", [g._param("url", "https://www.facebook.com/selfxss")]);
            if (window.chrome || window.safari) {
                var d = "font-family:helvetica; font-size:20px; ";
                [
                    [a, d + "font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;"],
                    [b, d],
                    [c, d],
                    ["", ""]
                ].map(function(a) {
                    window.setTimeout(console.log.bind(console, "\n%c" + a[0].toString(), a[1]))
                })
            } else {
                a = ["", " .d8888b.  888                       888", "d88P  Y88b 888                       888", "Y88b.      888                       888", ' "Y888b.   888888  .d88b.  88888b.   888', '    "Y88b. 888    d88""88b 888 "88b  888', '      "888 888    888  888 888  888  Y8P', "Y88b  d88P Y88b.  Y88..88P 888 d88P", ' "Y8888P"   "Y888  "Y88P"  88888P"   888', "                           888", "                           888", "                           888"];
                d = ("" + b.toString()).match(/.{35}.+?\s+|.+$/g);
                if (d != null) {
                    b = Math.floor(Math.max(0, (a.length - d.length) / 2));
                    for (var e = 0; e < a.length || e < d.length; e++) {
                        var f = a[e];
                        a[e] = f + new Array(45 - f.length).join(" ") + (d[e - b] || "")
                    }
                }
                console.log("\n\n\n" + a.join("\n") + "\n\n" + c.toString() + "\n");
                return
            }
        }
    };
    e.exports = a
}), null);
__d("ArtillerySegment", ["invariant", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h, i = 0;
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            a || g(0, 1496), "category" in a && "description" in a || g(0, 3138, JSON.stringify(a)), this.$1 = !1, this.$2 = babelHelpers["extends"]({}, a, {
                id: (i++).toString(36)
            }), this.$3 = []
        }
        var c = a.prototype;
        c.getID = function() {
            return this.$2.id
        };
        c.begin = function() {
            this.$2.begin = (h || (h = b("performanceAbsoluteNow")))();
            return this
        };
        c.end = function() {
            this.$2.end = (h || (h = b("performanceAbsoluteNow")))();
            return this
        };
        c.appendChild = function() {
            var a = this;
            this.$1 && g(0, 3139, this.$2.description);
            for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
            c.forEach(function(b) {
                a.$3.push(b.getID())
            });
            return this
        };
        c.setPosted = function() {
            this.$1 = !0;
            return this
        };
        c.getPostData = function() {
            return babelHelpers["extends"]({}, this.$2, {
                id: this.$2.id,
                children: this.$3.slice()
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("ArtillerySequence", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = 0;
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            a || g(0, 1496), "description" in a || g(0, 1497, JSON.stringify(a)), this.$1 = !1, this.$2 = babelHelpers["extends"]({}, a, {
                id: (h++).toString(36)
            }), this.$3 = []
        }
        var b = a.prototype;
        b.getID = function() {
            return this.$2.id
        };
        b.addSegment = function() {
            var a = this;
            this.$1 && g(0, 1498, this.$2.description);
            for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
            c.forEach(function(b) {
                a.$3.push(b.getID())
            });
            return this
        };
        b.setPosted = function() {
            this.$1 = !0;
            return this
        };
        b.getPostData = function() {
            return babelHelpers["extends"]({}, this.$2, {
                id: this.$2.id,
                segments: this.$3.slice()
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("ArtilleryTrace", ["invariant", "ArtillerySegment", "ArtillerySequence"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = !1, this.$3 = void 0, this.$4 = {}, this.$5 = {}, this.$6 = [], this.$7 = [], this.$8 = {}, this.$9 = [], this.$10 = null
        }
        var c = a.prototype;
        c.createSequence = function(a) {
            this.$1 && g(0, 4917);
            a = new(b("ArtillerySequence"))(a);
            this.$6.push(a);
            return a
        };
        c.createSegment = function(a) {
            this.$1 && g(0, 4918);
            a = new(b("ArtillerySegment"))(a);
            this.$7.push(a);
            return a
        };
        c.markSegment = function(a, b) {
            this.$1 && g(0, 4919);
            this.$8[b] = a.getID();
            return this
        };
        c.connectTrace = function(a, b) {
            this.$1 && g(0, 4919);
            b = b || this.$2;
            b || g(0, 4920);
            this.$9.push({
                segment: a.getID(),
                trace: b
            });
            return this
        };
        c.setID = function(a, b) {
            !this.$2 && !this.$3 || g(0, 4921);
            this.$2 = a;
            this.$3 = b;
            return this
        };
        c.getID = function() {
            return this.$2
        };
        c.getArtillery2ID = function() {
            return this.$3
        };
        c.addProperty = function(a, b) {
            this.$4[a] = b;
            return this
        };
        c.addTagset = function(a, b) {
            this.$5[a] = b;
            return this
        };
        c.addActivePolicies = function(a) {
            this.addTagset("active_policies", a);
            this.addTagset("policy", a);
            return this
        };
        c.getProperty = function(a) {
            return this.$4[a]
        };
        c.getTagset = function(a) {
            return this.$5[a]
        };
        c.getActivePolicies = function() {
            return this.getTagset("active_policies")
        };
        c.post = function() {
            this.$1 && g(0, 4922, this.$2);
            this.$1 = !0;
            var a = this.$10;
            a && a({
                id: this.$2,
                artillery2Id: this.$3,
                properties: this.$4,
                tagsets: this.$5,
                sequences: this.$6.map(function(a) {
                    return a.setPosted().getPostData()
                }),
                segments: this.$7.map(function(a) {
                    return a.setPosted().getPostData()
                }),
                marks: Object.assign({}, this.$8),
                connections: this.$9.slice()
            })
        };
        c.setOnPost = function(a) {
            this.$10 && g(0, 4923);
            this.$10 = a;
            return this
        };
        c.isPosted = function() {
            return this.$1
        };
        return a
    }();
    e.exports = a
}), null);
__d("Artillery", ["invariant", "ArtilleryTrace", "Banzai", "ClientServiceWorkerMessage", "Run", "ServiceWorkerRegistration", "forEachObject", "mixInEventEmitter", "performance"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h, i = !1,
        j = !1,
        k = [],
        l, m, n, o = {},
        p = {},
        q = !1,
        r = !1;

    function s() {
        if (i) return;
        i = !0;
        b("Banzai").subscribe(b("Banzai").SHUTDOWN, function() {
            u._postAll()
        })
    }

    function t() {
        m = null, l = null, p = {}, o = {}, n = null, r = !1
    }
    var u = {
        isEnabled: function() {
            return j
        },
        createTrace: function() {
            s();
            var a = new(b("ArtilleryTrace"))();
            a.setOnPost(function(a) {
                u.emitAndHold("posttrace", a)
            });
            k.push(a);
            return a
        },
        getPageTrace: function() {
            __p && __p();
            l || g(0, 4261);
            if (n) return n;
            var a = u.createTrace().setID(l, m);
            b("forEachObject")(o, function(b, c, d) {
                a.addProperty(c, b)
            });
            b("forEachObject")(p, function(b, c, d) {
                a.addTagset(c, b)
            });
            n = a;
            return a
        },
        setPageProperties: function(a) {
            o = a
        },
        addPageTagset: function(a, b) {
            n == null ? p[a] = b : n.addTagset(a, b)
        },
        setActivePolicies: function(a) {
            this.addPageTagset("active_policies", a), this.addPageTagset("policy", a)
        },
        getPageActivePolicies: function() {
            return this.getPageTagset("active_policies")
        },
        enableLogServiceWorker: function() {
            b("ServiceWorkerRegistration").isSupported() && (q = !0)
        },
        getPageProperty: function(a) {
            if (n == null) return o[a];
            else return n.getProperty(a)
        },
        getPageTagset: function(a) {
            if (n == null) return p[a];
            else return n.getTagset(a)
        },
        enable: function() {
            j = !0, r || (b("Run").onLeave(t), r = !0)
        },
        disable: function() {
            j = !1
        },
        setPageTraceID: function(a, c) {
            if (l === a && m === c) return;
            !l && !m || g(0, 4262);
            l = a;
            m = c;
            if (q && (h || (h = b("performance"))) && (h || (h = b("performance"))).timing && (h || (h = b("performance"))).timing.navigationStart) {
                a = new(b("ClientServiceWorkerMessage"))("asw-sendStartupData", {
                    traceID: m,
                    windowStart: (h || (h = b("performance"))).timing.navigationStart
                }, null);
                a.sendViaController()
            }
        },
        addPiggyback: function(a, b) {
            window.CavalryLogger && window.CavalryLogger.getInstance().addPiggyback(a, b)
        },
        _postAll: function() {
            k.forEach(function(a) {
                return !a.isPosted() && a.post()
            })
        }
    };
    b("mixInEventEmitter")(u, {
        posttrace: !0
    });
    e.exports = u
}), null);
__d("ArtilleryRequestDataCollection", ["Arbiter", "ArtilleryRequestDataCollector", "BigPipe", "PageEvents", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 12e4,
        h = {},
        i = {},
        j = !1;

    function k(a) {
        delete h[a], clearTimeout(i[a]), delete i[a]
    }
    a = {
        init: function() {
            __p && __p();
            var a = this;
            if (j) return;
            b("Arbiter").subscribe(b("BigPipe").Events.init, function(c, d) {
                c = d.arbiter;
                c.subscribeOnce(b("PageEvents").AJAXPIPE_FIRST_RESPONSE, function(b, c) {
                    b = c.lid;
                    c = c.quickling;
                    c || a.start(b)
                }, "new")
            });
            j = !0
        },
        start: function(a) {
            var c = this;
            if (h[a]) return;
            var d = new(b("ArtilleryRequestDataCollector"))().start();
            h[a] = d;
            i[a] = b("setTimeoutAcrossTransitions")(function() {
                c.disable(a)
            }, g)
        },
        finish: function(a) {
            var b = h[a];
            if (b) {
                b = b.finish();
                k(a);
                return b
            }
            return {
                sampleRecorder: null,
                profilingCountersData: [],
                userTimingProfilerData: null,
                timeSliceData: []
            }
        },
        getCollector: function(a) {
            return h[a]
        },
        disable: function(a) {
            var b = h[a];
            b && (b.disable(), k(a))
        }
    };
    e.exports = a
}), null);
__d("NavigationMetricsEnumJS", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        NAVIGATION_START: "navigationStart",
        UNLOAD_EVENT_START: "unloadEventStart",
        UNLOAD_EVENT_END: "unloadEventEnd",
        REDIRECT_START: "redirectStart",
        REDIRECT_END: "redirectEnd",
        FETCH_START: "fetchStart",
        DOMAIN_LOOKUP_START: "domainLookupStart",
        DOMAIN_LOOKUP_END: "domainLookupEnd",
        CONNECT_START: "connectStart",
        CONNECT_END: "connectEnd",
        SECURE_CONNECTION_START: "secureConnectionStart",
        REQUEST_START: "requestStart",
        RESPONSE_START: "responseStart",
        RESPONSE_END: "responseEnd",
        DOM_LOADING: "domLoading",
        DOM_INTERACTIVE: "domInteractive",
        DOM_CONTENT_LOADED_EVENT_START: "domContentLoadedEventStart",
        DOM_CONTENT_LOADED_EVENT_END: "domContentLoadedEventEnd",
        DOM_COMPLETE: "domComplete",
        LOAD_EVENT_START: "loadEventStart",
        LOAD_EVENT_END: "loadEventEnd"
    })
}), null);
__d("ResourceTimingMetricsEnumJS", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        START_TIME: "startTime",
        REDIRECT_START: "redirectStart",
        REDIRECT_END: "redirectEnd",
        FETCH_START: "fetchStart",
        DOMAIN_LOOKUP_START: "domainLookupStart",
        DOMAIN_LOOKUP_END: "domainLookupEnd",
        CONNECT_START: "connectStart",
        SECURE_CONNECTION_START: "secureConnectionStart",
        CONNECT_END: "connectEnd",
        REQUEST_START: "requestStart",
        RESPONSE_START: "responseStart",
        RESPONSE_END: "responseEnd"
    })
}), null);
__d("ImageTimingHelper", ["Arbiter", "BigPipe", "URI"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h = {},
        i = {};

    function j(a) {
        __p && __p();
        var c = a.lid,
            d = a.pagelet,
            e = a.images,
            f = a.timeslice,
            j = a.ts,
            k = h[c];
        k || (k = h[c] = []);
        e.forEach(function(a) {
            try {
                var c = new(g || (g = b("URI")))(a);
                a = c.setFragment("").toString()
            } catch (a) {
                return
            }
            if (i[a]) return;
            i[a] = !0;
            k.push({
                pagelet: d,
                timeslice: f,
                ts: j,
                uri: a
            })
        })
    }
    b("Arbiter").subscribe(b("BigPipe").Events.init, function(a, b) {
        b.lid && b.lid !== "0" && b.arbiter.subscribe("images_displayed", function(a, b) {
            j(b)
        })
    });
    b("Arbiter").subscribe("MRenderingScheduler/images_displayed", function(a, b) {
        j(b)
    });
    e.exports.getImageTimings = function(a) {
        return h[a] || []
    }
}), null);
__d("NavigationTimingHelper", ["NavigationMetricsEnumJS", "forEachObject", "performance"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g;

    function h(a, c) {
        var d = {};
        b("forEachObject")(b("NavigationMetricsEnumJS"), function(b) {
            var e = c[b];
            e && (d[b] = e + a)
        });
        return d
    }
    var i = {
        getAsyncRequestTimings: function(a) {
            if (!a || !(g || (g = b("performance"))).timing || !(g || (g = b("performance"))).getEntriesByName) return void 0;
            a = (g || (g = b("performance"))).getEntriesByName(a);
            return a.length === 0 ? void 0 : h(g.timing.navigationStart, a[0])
        },
        getPerformanceNavigationTiming: function() {
            if (!(g || (g = b("performance"))).timing || !(g || (g = b("performance"))).getEntriesByType) return {};
            var a = (g || (g = b("performance"))).getEntriesByType("navigation");
            return !a.length ? {} : h(g.timing.navigationStart, a[0])
        },
        getNavTimings: function() {
            if (!(g || (g = b("performance"))).timing) return void 0;
            var a = babelHelpers["extends"]({}, h(0, (g || (g = b("performance"))).timing), i.getPerformanceNavigationTiming());
            return h(0, a)
        }
    };
    e.exports = i
}), null);
__d("PageletEventsHelper", ["Arbiter", "PageletEventConstsJS"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "BigPipe/init",
        h = "MRenderingScheduler/init",
        i = "pagelet_event",
        j = "phase_begin",
        k = {},
        l = [],
        m = !1;

    function n() {
        return {
            pagelets: {},
            categories: {},
            phase_start: {},
            display_resources: {},
            all_resources: {}
        }
    }

    function o(a, b, c, d) {
        k[d] == void 0 && (k[d] = n()), k[d].pagelets[b] == void 0 && (k[d].pagelets[b] = {}), k[d].pagelets[b][a] = c
    }

    function p(a) {
        __p && __p();
        a.subscribe(i, function(a, c) {
            __p && __p();
            var d = c.event,
                e = c.ts;
            a = c.id;
            var f = c.lid,
                g = c.phase,
                h = c.categories,
                i = c.allResources;
            c = c.displayResources;
            o(d, a, e, f);
            var j = k[f],
                m = j.pagelets[a];
            d === b("PageletEventConstsJS").ARRIVE_END && (m.phase = g, j.all_resources[a] = i, j.display_resources[a] = c);
            (d === b("PageletEventConstsJS").ONLOAD_END || d === b("PageletEventConstsJS").DISPLAY_END) && h && h.forEach(function(a) {
                j.categories[a] == void 0 && (j.categories[a] = {}), j.categories[a][d] = e
            });
            for (var m = 0, g = l.length; m < g; m++) l[m](a, d, e, f)
        }), a.subscribe(j, function(a, b) {
            k[b.lid].phase_start[b.phase] = b.ts
        })
    }
    a = {
        init: function() {
            __p && __p();
            if (m) return;
            b("Arbiter").subscribe(g, function(a, b) {
                a = b.lid;
                b = b.arbiter;
                k[a] = n();
                p(b)
            });
            b("Arbiter").subscribe(h, function(a, b) {
                a = b.lid;
                b = b.arbiter;
                k[a] = n();
                p(b)
            });
            m = !0
        },
        getMetrics: function(a) {
            return k[a] ? JSON.parse(JSON.stringify(k[a])) : null
        },
        subscribeToPageletEvents: function(a) {
            l.push(a);
            return {
                remove: function() {
                    l.splice(l.indexOf(a), 1)
                }
            }
        }
    };
    e.exports = a
}), null);
__d("ResourceTimingBootloaderHelper", ["Bootloader", "ImageTimingHelper", "ResourceTimingMetricsEnumJS", "ResourceTimingsStore", "ResourceTypes", "URI", "forEachObject", "isEmpty", "performance"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h, i, j = 500,
        k = [],
        l = {},
        m = {},
        n = {},
        o = [".mp4", ".m4v", ".mpd", "m4a"],
        p = new Set(["bootload", "js_exec", "start_bootload", "tag_bootload"]);

    function q(a) {
        for (var b = 0; b < o.length; b++) {
            var c = o[b];
            if (a.endsWith(c)) return !0
        }
        return !1
    }

    function r(a) {
        __p && __p();
        var c = new Map();
        b("ResourceTimingsStore").getMapFor(a).forEach(function(a) {
            if (a.requestSent != null) {
                var b = c.get(a.uri);
                b != null ? b.push(a) : c.set(a.uri, [a])
            }
        });
        c.forEach(function(a) {
            return a.sort(function(a, b) {
                return a.requestSent - b.requestSent
            })
        });
        return c
    }

    function s(a, b, c, d) {
        __p && __p();
        var e = a.get(b);
        if (e == null) {
            var f = b.indexOf("?");
            if (f !== -1) {
                b = b.substring(0, f);
                e = a.get(b)
            }
        }
        if (e != null)
            for (var f = 0; f < e.length; f++) {
                a = e[f];
                b = a.requestSent;
                a = a.responseReceived;
                if ((c == null || b != null && b <= c) && (d == null || a != null && a >= d)) return e.splice(f, 1)[0]
            }
        return null
    }

    function t(a, c, d, e, f, h, i) {
        __p && __p();
        if (!(g || (g = b("performance"))).timing || !(g || (g = b("performance"))).getEntriesByType) return null;
        var j = {},
            k = (g || (g = b("performance"))).timing.navigationStart;
        d && (j = b("ImageTimingHelper").getImageTimings(e).sort(function(a, b) {
            return a.ts - b.ts
        }).reduce(function(a, b) {
            if (a[b.uri]) return a;
            a[b.uri] = b.pagelet;
            return a
        }, {}));
        d = Array.from(g.getEntriesByType("resource"));
        e = d.filter(function(a) {
            return a.duration >= 0 && a.startTime != null && a.startTime + k > c && (f == null || a.responseEnd == null || a.responseEnd + k < f)
        });
        e.sort(function(a, b) {
            return a.startTime - b.startTime
        });
        d = e.length;
        var l = 0,
            o = 0,
            p = 0,
            t = 0,
            x = 0,
            y = r(b("ResourceTypes").XHR),
            z = r(b("ResourceTypes").CSS),
            A = r(b("ResourceTypes").JS);
        for (var B = 0; B < e.length; B++) {
            var C = e[B],
                D = "",
                E = "",
                F = void 0,
                G = C.initiatorType;
            switch (G) {
                case "css":
                case "link":
                case "script":
                    G = b("ResourceTimingsStore").parseMakeHasteURL(C.name);
                    if (!G) continue;
                    var H = G[0];
                    G = G[1];
                    if (G === "css" || G === "js") {
                        var I = G === "css" ? z : A;
                        F = s(I, C.name, C.startTime + k, C.responseEnd + k);
                        if (F != null && i) {
                            E = G;
                            D = F.uid;
                            break
                        } else {
                            E = G;
                            I = n[C.name] || p++;
                            D = I + "_" + H
                        }
                    } else {
                        G = w(C.name);
                        I = G[0];
                        E = G[1];
                        D = o++ + "_" + I
                    }
                    break;
                case "img":
                    D = o++ + "_" + u(C.name);
                    E = "img";
                    break;
                case "iframe":
                    D = t++ + "_" + u(C.name) + v(C.name);
                    E = "iframe";
                    break;
                case "xmlhttprequest":
                    if (h) {
                        H = u(C.name);
                        G = v(C.name);
                        if (q(G)) {
                            D = x++ + "_" + H + G;
                            E = "video";
                            break
                        } else {
                            F = s(y, C.name, C.startTime + k, C.responseEnd + k);
                            if (F != null) {
                                E = b("ResourceTypes").XHR;
                                D = F.uid;
                                break
                            }
                        }
                    }
                default:
                    continue
            }
            I = {};
            H = Object.keys(b("ResourceTimingMetricsEnumJS"));
            for (var G = 0; G < H.length; G++) {
                var J = b("ResourceTimingMetricsEnumJS")[H[G]],
                    K = C[J];
                K && (I[J] = K + (g || (g = b("performance"))).timing.navigationStart)
            }
            if (F != null) {
                J = F;
                K = J.requestSent;
                G = J.responseReceived;
                if (c != null && K != null && K < c || f != null && G != null && G > f) continue;
                I.requestSent = K;
                I.responseReceived = G
            }
            I.type = E;
            I.desc = D;
            if (F != null && (E === b("ResourceTypes").JS || E === b("ResourceTypes").CSS || E === b("ResourceTypes").XHR)) {
                H = b("ResourceTimingsStore").getAnnotationsFor(E, F.uid);
                H != null && (I.annotations = H)
            }
            E == "img" && Object.prototype.hasOwnProperty.call(j, C.name) && (I.pagelet = j[C.name]);
            I.transferSize = C.transferSize;
            I.encodedBodySize = C.encodedBodySize;
            a[C.name] == void 0 && (a[C.name] = []);
            l++;
            a[C.name].push(I)
        }
        return i ? {
            numValidEntries: d,
            numSuccessfulMetrics: l
        } : null
    }

    function u(a) {
        a = new(h || (h = b("URI")))(a).getDomain();
        return a
    }

    function v(a) {
        a = new(h || (h = b("URI")))(a).getPath();
        return a
    }

    function w(a) {
        return [u(a), "img"]
    }

    function x(a) {
        __p && __p();
        var b = Object.keys(a).filter(function(a) {
            return a.startsWith("start_bootload/")
        }).sort(function(b, c) {
            return a[b] - a[c]
        }).map(function(a) {
            return a.substring(a.indexOf("/") + 1)
        });
        b.forEach(function(b) {
            return p.forEach(function(c) {
                c = c + "/" + b;
                a[c] != null && (l[c] = a[c])
            })
        });
        k = k.concat(b);
        if (k.length > j) {
            b = k.splice(0, k.length - j);
            b.forEach(function(a) {
                return p.forEach(function(b) {
                    l[b + "/" + a] && delete l[b + "/" + a]
                })
            })
        }
    }
    a = {
        addPastBootloaderMetricsToResourceTimings: function(c, d) {
            __p && __p();
            c === void 0 && (c = {});
            d === void 0 && (d = {});
            var a = b("Bootloader").getURLToHashMap();
            b("forEachObject")(c, function(b, c) {
                __p && __p();
                var e = a[c];
                if (!e) return;
                var f = new Map();
                f.set("bootloader_hash", e);
                p.forEach(function(a) {
                    var b = a + "/" + e;
                    b = d[b] || l[b];
                    b != null && f.set(a, b)
                });
                f.size > 0 && b.forEach(function(a) {
                    if (a.requestSent || a.responseReceived) return;
                    f.forEach(function(b, c) {
                        return a[c] = b
                    })
                })
            })
        },
        mergeBootloaderMetricsAndResourceTimings: function(a, c, d) {
            __p && __p();
            a === void 0 && (a = {});
            c === void 0 && (c = {});
            d === void 0 && (d = !0);
            (i || (i = b("isEmpty")))(n) && (n = b("Bootloader").getURLToHashMap());
            var e = new Map();
            b("forEachObject")(n, function(a, b) {
                e.set(a, b)
            });
            var f = [];
            b("forEachObject")(c, function(b, c) {
                __p && __p();
                var d = c.indexOf("/");
                if (d === -1) return;
                var g = c.substring(0, d);
                if (!p.has(g)) return;
                f.push(c);
                var h = c.substring(d + 1);
                c = e.get(h);
                if (!c) {
                    c = h;
                    h = n[c];
                    if (!h) return
                }
                c.startsWith("data:") && (c = "inlined resource: " + h);
                a[c] == null && (a[c] = [{}]);
                a[c].forEach(function(a) {
                    a.bootloader_hash = h, a[g] = b
                })
            });
            d || (x(c), f.forEach(function(a) {
                return delete c[a]
            }));
            return a
        },
        getLastTTIAndE2EImageResponseEnds: function(a, c, d) {
            __p && __p();
            var e = {
                TTI: a,
                E2E: c
            };
            if (!(g || (g = b("performance"))).timing) return e;
            var f = d.filter(function(b) {
                    return b.ts <= a
                }).map(function(a) {
                    return a.uri
                }).reduce(function(b, a) {
                    b[a] = !0;
                    return b
                }, {}),
                h = d.map(function(a) {
                    return a.uri
                }).reduce(function(b, a) {
                    b[a] = !0;
                    return b
                }, {});
            for (var i in m) m[i].forEach(function(a) {
                a.type === "img" && (f[i] && (e.TTI = Math.max(e.TTI, a.responseEnd)), h[i] && (e.E2E = Math.max(e.E2E, a.responseEnd)))
            });
            return e
        },
        getMetrics: function(a, c, d, e, f, g) {
            m = {};
            (i || (i = b("isEmpty")))(n) && (n = b("Bootloader").getURLToHashMap());
            a = t(m, a, c, d, e, f, g);
            return {
                data: m,
                diagnostics: a
            }
        }
    };
    e.exports = a
}), null);
__d("PerfXFlusher", ["invariant", "Banzai"], (function(a, b, c, d, e, f, g) {
    var h = "perfx_custom_logger_endpoint",
        i = ["perfx_page", "perfx_page_type", "lid"];

    function j(a) {
        i.forEach(function(b) {
            return g(b in a, 'PerfXFlusher: Field "%s" missing in the PerfX payload', b)
        })
    }
    a = {
        flush: function(a) {
            j(a), b("Banzai").post(h, a, {
                signal: !0
            })
        },
        registerToSendWithBeacon: function(a) {
            b("Banzai").registerToSendWithBeacon(h, a)
        }
    };
    e.exports = a
}), null);
__d("pageLoadedViaSWCache", [], (function(a, b, c, d, e, f) {
    function a() {
        return self.__SW_CACHE__ === 1
    }
    e.exports = a
}), null);
__d("PerfXLogger", ["ArtilleryOnUntilOffLogging", "BanzaiODS", "DataAttributeUtils", "NavigationMetrics", "NavigationTimingHelper", "PerfXFlusher", "PerfXSharedFields", "QuicklingRefreshOverheadUtil", "VisibilityListener", "forEachObject", "pageLoadedViaSWCache", "performanceAbsoluteNow", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h = {},
        i = {},
        j = 65 * 1e3,
        k = ["e2e", "tti", "all_pagelets_displayed", "all_pagelets_loaded", "artillery_disable_time"],
        l = {},
        m = {
            _listenersSetUp: !1,
            _uploadEarly: !1,
            _alreadyUploadedEarly: !1,
            _setupListeners: function() {
                __p && __p();
                var a = this;
                if (this._listenersSetUp) return;
                this._subscribeToNavigationMetrics();
                b("PerfXFlusher").registerToSendWithBeacon(function() {
                    var c = [];
                    b("forEachObject")(h, function(b, d) {
                        if (!h[d].sent) {
                            b = a.getPayload(d, "unload fired");
                            b != null && c.push(b)
                        }
                    });
                    h = {};
                    return c
                });
                this._listenersSetUp = !0
            },
            _init: function(a) {
                __p && __p();
                var b = a.lid;
                if (b == null) return;
                this._alreadyUploadedEarly = !1;
                this._uploadEarly = !!a.upload_perfx_early;
                delete a.upload_perfx_early;
                var c = i[b] || [];
                delete i[b];
                if (a.sw_controlled_tags) {
                    if (navigator.serviceWorker && navigator.serviceWorker.controller)
                        for (var d = 0; d < a.sw_controlled_tags.length; d++) c.push(a.sw_controlled_tags[d]);
                    delete a.sw_controlled_tags
                }
                h[b] = babelHelpers["extends"]({
                    tags: new Set(c),
                    sent: !1
                }, a);
                this._registerTimeoutSendback(b);
                this._setupListeners()
            },
            initWithNavigationMetricsLID: function(a, c) {
                __p && __p();
                var d = b("NavigationMetrics").getFullPageLoadLid();
                if (!d) return;
                this._init(babelHelpers["extends"]({}, c, {
                    lid: d
                }));
                if (a && a.always)
                    for (var c = 0; c < a.always.length; c++) m.addTag(d, a.always[c]);
                if (a && a.swCache && b("pageLoadedViaSWCache")())
                    for (var c = 0; c < a.swCache.length; c++) m.addTag(d, a.swCache[c])
            },
            init: function(a, b) {
                b != null && a.lid != null && (l[a.lid] = b), this._init(a)
            },
            addTag: function(a, c) {
                this._alreadyUploadedEarly && b("BanzaiODS").bumpEntityKey(2966, "PerfXLateTag", c);
                var d = h[a];
                if (d) {
                    d.tags.add(c);
                    return
                }
                i[a] || (i[a] = []);
                i[a].push(c)
            },
            addTagWithNavigationMetricsLID: function(a) {
                this._alreadyUploadedEarly && b("BanzaiODS").bumpEntityKey(2966, "PerfXLateTag", a);
                var c = b("NavigationMetrics").getFullPageLoadLid();
                if (!c) return;
                m.addTag(c, a)
            },
            _registerTimeoutSendback: function(a) {
                var c = this,
                    d = this._getFetchStart(a),
                    e = j;
                d != null && (e -= (g || (g = b("performanceAbsoluteNow")))() - d);
                b("setTimeoutAcrossTransitions")(function() {
                    return c._uploadPayload(a, "sendback time out")
                }, e)
            },
            _subscribeToNavigationMetrics: function() {
                __p && __p();
                var a = this,
                    c;
                (c = b("NavigationMetrics")).addRetroactiveListener(c.Events.EVENT_OCCURRED, function(b, c) {
                    if (!(b in h)) return;
                    k.includes(c.event) && Object.prototype.hasOwnProperty.call(c, "timestamp") && c.timestamp != null && (h[b][c.event] = c.timestamp);
                    c.event === "all_pagelets_displayed" && a._uploadEarly && (k.forEach(function(a) {
                        Object.prototype.hasOwnProperty.call(c, a) && c[a] != null && (h[b][a] = c[a])
                    }), a._uploadPayload(b), a._alreadyUploadedEarly = !0)
                });
                c.addRetroactiveListener(c.Events.NAVIGATION_DONE, function(b, c) {
                    var d = c.serverLID;
                    if (!(d in h)) return;
                    k.forEach(function(a) {
                        Object.prototype.hasOwnProperty.call(c, a) && c[a] != null && (h[d][a] = c[a])
                    });
                    a._uploadPayload(d)
                })
            },
            _getPayloadWithOffset: function(a, c, d) {
                __p && __p();
                a = h[a];
                if (a == null) return null;
                var e = Object.assign({}, a),
                    f = document.querySelector('[id^="hyperfeed_story_id"]');
                if (f) {
                    f = JSON.parse(b("DataAttributeUtils").getDataFt(f));
                    f && (e.mf_query_id = f.qid)
                }
                e.tags = Array.from(a.tags);
                e.art_id || (e.artillery_disable_time = b("ArtilleryOnUntilOffLogging").lastDisableTime());
                this._adjustValues(e, c);
                e.fetch_start = c;
                if (e.perfx_page_type === "normal") {
                    f = b("NavigationTimingHelper").getNavTimings();
                    f != null && f.navigationStart != null && (e.nav_to_fetch = c - f.navigationStart);
                    a = b("QuicklingRefreshOverheadUtil").getOverhead(c);
                    a !== null && (e.quickling_refresh_overhead = a)
                }
                d != null && (e.sendback_reason = d);
                b("PerfXSharedFields").addCommonValues(e);
                b("VisibilityListener").supported() && e.fetch_start && e.all_pagelets_displayed && e.tti && e.e2e && (e.tab_hidden_time_dd = b("VisibilityListener").getHiddenTime(e.fetch_start, e.fetch_start + e.all_pagelets_displayed), e.tab_hidden_time_tti = b("VisibilityListener").getHiddenTime(e.fetch_start, e.fetch_start + e.tti), e.tab_hidden_time_e2e = b("VisibilityListener").getHiddenTime(e.fetch_start, e.fetch_start + e.e2e));
                window && window.location && window.location.pathname && (e.request_uri = window.location.pathname);
                delete e.sent;
                return e
            },
            _uploadPayload: function(a, c) {
                if (h[a] != null && !h[a].sent) {
                    c = this.getPayload(a, c);
                    c != null && (b("PerfXFlusher").flush(c), h[a].sent = !0)
                }
            },
            getPayload: function(a, b) {
                return this._getPayloadWithOffset(a, this._getFetchStart(a), b)
            },
            _getFetchStart: function(a) {
                if (!(a in h)) return null;
                var c = h[a].perfx_page_type;
                if (c == "quickling")
                    if (!(a in l)) return null;
                    else c = b("NavigationTimingHelper").getAsyncRequestTimings(l[a]);
                else c = b("NavigationTimingHelper").getNavTimings();
                return !c || !c.fetchStart ? null : c.fetchStart
            },
            _adjustValues: function(a, b) {
                k.forEach(function(c) {
                    Object.prototype.hasOwnProperty.call(a, c) && (a[c] -= b)
                })
            }
        };
    e.exports = m
}), null);