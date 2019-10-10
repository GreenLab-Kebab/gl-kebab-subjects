Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    var ga = window.ga;
    if (!ga) {
        var i = window,
            r = "ga";
        i.GoogleAnalyticsObject = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        };
        i[r].l = 1 * new Date;
        Bootstrapper.insertScript("//www.paypalobjects.com/gajs/analytics.js");
        Bootstrapper["UA_ga"] = Bootstrapper["UA_ga"] || {};
        ga = i[r]
    }
    var getCookie = function() {
        var regex = new RegExp("[\\?\x26]" + "vr" + "\x3d([^\x26#]*)"),
            results = regex.exec(decodeURIComponent(document.cookie.match("(^|;)\\s*" +
                "ts" + "\\s*\x3d\\s*([^;]+)")));
        return results === null ? "" : results[1].replace(/\+/g, " ")
    };
    var isEnforceGdpr = function() {
        return Bootstrapper.getProp(window, "fpti.ef_policy") === "gdpr_eu"
    };
    var getAccountId = function() {
        var accountId = "UA-53389718-12";
        var host = window.location.hostname.toLowerCase();
        if (host && host.indexOf("www.paypal.com") < 0 && host.indexOf("www.paypal.me") < 0) accountId = "UA-53389718-11";
        return accountId
    };
    var isBaseTagReady = Bootstrapper.propertyWatcher.create(function() {
        return window._gabt
    });
    var whitelist = ["locale.x", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "dclid", "gclid", "param", "fbclid", "gclsrc"];
    var constructDL = function() {
        var qs = window.location.search;
        if (qs) {
            var filtered = qs.slice(1).split("\x26").map(function(p) {
                return p.split("\x3d")
            }).reduce(function(obj, pair) {
                const [key, value] = pair.map(decodeURIComponent);
                if (whitelist.indexOf(key) > -1) {
                    var res = Object.assign(obj, {
                        [key]: value
                    });
                    return res
                } else return obj
            }, {});
            var _fqs = Object.keys(filtered).map((key) => {
                return encodeURIComponent(key) +
                    "\x3d" + encodeURIComponent(filtered[key])
            }).join("\x26");
            var fqs = _fqs ? "?" + _fqs : "";
            return window.location.protocol + "//" + window.location.hostname + window.location.pathname + fqs + window.location.hash
        } else {
            var path = window.location.pathname;
            if (path && path.indexOf("\x26") !== -1) path = path.substr(0, url.indexOf("\x26"));
            return window.location.protocol + "//" + window.location.hostname + path + window.location.hash
        }
    };
    ga("create", getAccountId(), "auto", "PayPal", {
        "allowLinker": true
    });
    Bootstrapper.data.resolve(["47364"], function(manage_47364) {
        var cust =
            Bootstrapper.getProp(window, "fpti.cust", "empty");
        var acnt = Bootstrapper.getProp(window, "fpti.acnt", "");
        window.dataLayer.userId = cust;
        window.dataLayer.loginStatus = cust.length > 0 && cust !== "empty" ? "true" : "false";
        window.dataLayer.userType = acnt;
        window.dataLayer.locale = manage_47364;
        window.dataLayer.pageType = "";
        window.dataLayer.application = "";
        window.dataLayer.userStatus = "";
        window.dataLayer.userFlow = "";
        window.dataLayer.pageGroup = window.fpti.pgrp;
        window.dataLayer.xe = window.fpti.xe;
        window.dataLayer.xt = window.fpti.xt;
        Bootstrapper.UA_ga = window.dataLayer || {};
        window.ga(function(tracker) {
            if (!tracker) tracker = window.ga.getByName("PayPal");
            var clientId = tracker.get("clientId");
            var pageURL = constructDL();
            var hostname = window.location.hostname;
            var contentCountry = window.dataLayer.contentCountry ? window.dataLayer.contentCountry.toLowerCase() : "";
            var fptiCookie = getCookie();
            window.ga("PayPal.set", {
                "dimension1": clientId,
                "dimension2": window.dataLayer.userId,
                "dimension3": window.dataLayer.loginStatus,
                "dimension4": pageURL,
                "dimension5": contentCountry,
                "dimension6": window.dataLayer.locale,
                "dimension7": window.dataLayer.userType,
                "dimension8": window.dataLayer.userStatus,
                "dimension9": window.dataLayer.userFlow,
                "dimension10": window.dataLayer.application,
                "dimension19": window.dataLayer.xe || "",
                "dimension20": window.dataLayer.xt || "",
                "dimension22": window.dataLayer.pageGroup,
                "dimension25": fptiCookie,
                "contentGroup3": window.dataLayer.loginStatus
            });
            ga("PayPal.require", "linker");
            if (hostname && hostname.match(/paypal.me/)) ga("PayPal.linker:autoLink", ["paypal.com"]);
            else ga("PayPal.linker:autoLink", ["paypal.me"]);
            if (isEnforceGdpr()) {
                tracker.set("anonymizeIp", true);
                var cookie_prefs = Bootstrapper.getProp(window, "fpti.c_prefs");
                var targetValue = cookie_prefs && cookie_prefs.split("T\x3d")[1];
                if (!targetValue || targetValue[0] !== "1") {
                    tracker.set("displayFeaturesTask", null);
                    tracker.set("dimension26", true)
                } else tracker.set("dimension26", false)
            } else tracker.set("dimension26", false);
            window._gabt = true
        })
    });
    isBaseTagReady.change = function(props, isReady) {
        if (isReady) window.ga("PayPal.send",
            "pageview", {
                "dimension10": window.dataLayer.application,
                "contentGroup1": window.dataLayer.pageType,
                "location": constructDL()
            })
    }
}, 2924633, 564780);
Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
            extract: function() {
                if (window.fpti !== null && window.fpti !== undefined) {
                    if (window.fpti.pgrp === "main:businessweb:mep:dashboard:") return "business";
                    if (window.fpti.comp === "hermesnodeweb") return "";
                    if (window.fpti.comp === "creditapplyweb") return "consumer";
                    return window.fpti.acnt
                }
            },
            transform: function(val) {
                return val
            },
            load: "instance",
            trigger: function() {
                var defer = Bootstrapper.when.defer();
                var timer = setInterval(function() {
                    if (window.fpti) {
                        if (window.fpti.pgrp === "main:businessweb:mep:dashboard:") {
                            clearInterval(timer);
                            defer.resolve(true)
                        }
                        if (window.fpti.comp === "hermesnodeweb") {
                            clearInterval(timer);
                            defer.resolve(true)
                        }
                        if (window.fpti.comp === "creditapplyweb") {
                            clearInterval(timer);
                            defer.resolve(true)
                        }
                        if (window.fpti.acnt !== undefined) {
                            clearInterval(timer);
                            defer.resolve(true)
                        }
                    }
                }, 500);
                return defer.promise
            },
            dataDefName: "User Type",
            collection: "Data Layer",
            source: "Manage",
            priv: "false"
        }, {
            id: "47062"
        })
    }, 47062)
}, -1, -1);
Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
            extract: function() {
                var isLoggedIn = false;
                if (window.fpti !== null && window.fpti !== undefined)
                    if (window.fpti.cust !== undefined) isLoggedIn = window.fpti.cust.length > 0;
                return isLoggedIn + ""
            },
            transform: function(val) {
                return val ? val : ""
            },
            load: "page",
            trigger: function() {
                var defer = Bootstrapper.when.defer();
                var timer = setInterval(function() {
                    if (window.fpti &&
                        window.fpti.cust !== undefined) {
                        clearInterval(timer);
                        defer.resolve(true)
                    }
                }, 500);
                return defer.promise
            },
            dataDefName: "Login Status",
            collection: "Data Layer",
            source: "Manage",
            priv: "false"
        }, {
            id: "47027"
        })
    }, 47027)
}, -1, -1);
Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
            extract: function() {
                var custId;
                if (window.fpti !== null && window.fpti !== undefined)
                    if (window.fpti.cust && window.fpti.cust !== "") custId = window.fpti.cust;
                return custId
            },
            transform: function(val) {
                return val ? val : ""
            },
            load: "instance",
            trigger: function() {
                var defer = Bootstrapper.when.defer();
                var timer = setInterval(function() {
                    if (window.fpti &&
                        (window.fpti.pgrp === "main:onbrd:organic:signup:account" || window.fpti.pgrp === "main:onbrd:organic:signup:create")) {
                        clearInterval(timer);
                        defer.resolve(true)
                    }
                    if (window.fpti && window.fpti.cust !== undefined) {
                        clearInterval(timer);
                        defer.resolve(true)
                    }
                }, 500);
                return defer.promise
            },
            dataDefName: "FPTI Customer ID",
            collection: "Global Data",
            source: "Manage",
            priv: "false"
        }, {
            id: "44906"
        })
    }, 44906)
}, -1, -1);
Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
            extract: function() {
                if (window.fpti !== null && window.fpti !== undefined) return window.fpti.pgrp
            },
            transform: function(val) {
                return val ? val : ""
            },
            load: "page",
            trigger: function() {
                var defer = Bootstrapper.when.defer();
                var timer = setInterval(function() {
                    if (window.fpti && window.fpti.pgrp !== undefined) {
                        clearInterval(timer);
                        defer.resolve(true)
                    }
                }, 500);
                return defer.promise
            },
            dataDefName: "Page Type",
            collection: "Data Layer",
            source: "Manage",
            priv: "false"
        }, {
            id: "47063"
        })
    }, 47063)
}, -1, -1);
Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
            extract: function() {
                if (window.fpti !== null && window.fpti !== undefined) {
                    if (window.fpti.pgrp === "creditapplyweb") return window.fpti.ccpg;
                    return window.fpti.rsta || window.fpti.ccpg
                }
            },
            transform: function(val) {
                return val ? val : ""
            },
            load: "session",
            trigger: function() {
                var defer = Bootstrapper.when.defer();
                var timer = setInterval(function() {
                    if (window.fpti)
                        if (window.fpti.comp ===
                            "creditapplyweb" || window.fpti.rsta !== undefined || window.fpti.ccpg !== undefined) {
                            clearInterval(timer);
                            defer.resolve(true)
                        }
                }, 500);
                return defer.promise
            },
            dataDefName: "Locale",
            collection: "Data Layer",
            source: "Manage",
            priv: "false"
        }, {
            id: "47364"
        })
    }, 47364)
}, -1, -1);