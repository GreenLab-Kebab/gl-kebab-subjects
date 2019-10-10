(function() {
    window.EF = window.EF || {};
    if (!window.EF.main) {
        var q = window.EF.onloadCallbacks || [],
            r = window.EF.jsTagAdded || 0,
            k = window.EF.adcloud_iframe || "";
        window.EF = {
            userid: 0,
            pixelHost: "pixel.everesttech.net",
            cmHost: "cm.everesttech.net",
            jsHost: "www.everestjs.net",
            eventType: "pageview",
            protocol: "https:" == document.location.protocol ? "https:" : "http:",
            sid: 0,
            impressionTypes: ["impression", "impression_served"],
            expectedTrackingParams: ["ev_cl", "ev_sid"],
            fbIsApp: 0,
            fbsPixelId: 0,
            fbsCM: 0,
            appData: "",
            pageviewProperties: "",
            transactionProperties: "",
            transactionObjectList: [],
            impressionProperties: "",
            segment: "",
            searchSegment: "",
            sku: "",
            inFloodlight: 0,
            debug: 0,
            allow3rdPartyPixels: 1,
            accessTopUrl: 0,
            pixelDetailsAdded: 0,
            ef_itp_ls: !1,
            pixelDetailsParams: {
                gsurfer: "__EFGSURFER__",
                google: "__EFGCK__",
                time: "__EFTIME__",
                optout: "__EFOPTOUT__",
                throttleCookie: "__EFSYNC__"
            },
            throttleCookie: "",
            pixelDetails: {},
            cookieMatchingSlots: 1,
            pixelDetailsReadyCallbackFns: [],
            context: {
                isFbApp: function() {
                    return window.EF.fbIsApp
                },
                isPageview: function() {
                    return "pageview" ==
                        window.EF.eventType
                },
                isTransaction: function() {
                    return "transaction" == window.EF.eventType
                },
                isSegmentation: function() {
                    return "segmentation" == window.EF.eventType
                }
            },
            getPixelDetails: function(a) {
                window.EF.newPixelDetails().fire();
                window.EF.addPixelDetailsReadyListener(function() {
                    var b = window.EF.getFirstLevelObjectCopy(window.EF.pixelDetails);
                    if (b.hasOwnProperty("google")) {
                        var c = b.google;
                        delete b.google;
                        b.rtb = c
                    }
                    a(b)
                })
            },
            getScriptSrc: function(a) {
                "undefined" == typeof a && (path = "/static/st\\.v3\\.js(#|\\?|\\s*$)",
                    host = window.EF.jsHost.replace(/\./g, "\\."), a = host + path);
                scriptTags = document.getElementsByTagName("script");
                a = new RegExp("^https?://" + a);
                for (var b = 0; b < scriptTags.length; b++) {
                    var c = scriptTags[b];
                    if (c.src && (c = c.getAttribute("src")) && c.match(a)) return c
                }
                return ""
            },
            isPermanentCookieSet: function() {
                return window.EF.pixelDetails.hasOwnProperty("google") && window.EF.pixelDetails.hasOwnProperty("gsurfer") && window.EF.pixelDetails.google != window.EF.pixelDetails.gsurfer
            },
            initializeEFVariables: function() {
                window.__ql = {};
                window.EF.trackingJavascriptSrc = window.EF.newUri({
                    text: window.EF.getScriptSrc()
                });
                window.EF.location = window.EF.newUri({
                    text: document.location.toString()
                });
                window.EF.locationHref = window.EF.newUri({
                    text: document.location.href
                });
                window.EF.referrer = window.EF.newUri({
                    text: document.referrer
                });
                window.EF.locationSkipBang = window.EF.newUri({
                    text: window.EF.location.text,
                    skipBang: !0
                });
                window.EF.location.host.match(/((efrontier\.com)|((everesttech|everestads|everestjs)\.net))$/i) ? (window.EF.appendDictionary(window.EF.locationSkipBang.query,
                    window.__ql), window.EF.appendDictionary(window.EF.locationSkipBang.hash, window.__ql)) : window.__ql = window.EF.referrer.query
            },
            init: function(a) {
                window.EF.userServerParams = window.EF.userServerParams || {};
                var b = {
                        1180: 100,
                        2384: 10,
                        3197: 100,
                        2923: 100,
                        3093: 100,
                        3219: 100,
                        2385: 100,
                        4202: 100,
                        2370: 100,
                        2993: 100,
                        2793: 100,
                        1728: 100
                    }[a.userid],
                    c;
                if (c = "undefined" != typeof b) c = Math.floor(100 * Math.random()) < b ? !0 : !1;
                !c || a.userid in window.EF.userServerParams ? window.EF.main2(a) : window.EF.getServerParams(a)
            },
            serverParamsListener: function(a) {
                a =
                    a || {};
                !a.userid || a.userid in window.EF.userServerParams || (window.EF.userServerParams[a.userid] = a)
            },
            getServerParams: function(a) {
                var b = window.EF.newUri({
                        scheme: "https:",
                        host: window.EF.jsHost,
                        path: ["dynamic", "js-cfg", a.userid, "def.js"]
                    }),
                    c = window.EF.getScriptElement(b.text);
                c.addEventListener ? c.addEventListener("load", function() {
                    window.EF.main2(a)
                }, !1) : c.attachEvent("onload", function() {
                    window.EF.main2(a)
                });
                window.EF.executeAfterLoad(this, function() {
                    window.EF.addToDom(c)
                })
            },
            log: function() {
                window.EF.debug &&
                    console.log.apply(this, window.EF.log.arguments)
            },
            addToDom: function(a) {
                window.EF.log("EFLOG: Adding element to DOM: (", a.tagName, ") ", a);
                document.body.appendChild(a)
            },
            getSortedAttributes: function(a) {
                var b = [],
                    c;
                for (c in a) a.hasOwnProperty(c) && (b[b.length] = c);
                b.sort();
                return b
            },
            isEmptyDictionary: function(a) {
                for (var b in a) return !1;
                return !0
            },
            appendDictionary: function(a, b) {
                for (var c in a) b[c] = a[c]
            },
            isXSSReady: function() {
                return (window.addEventListener || window.attachEvent) && window.postMessage
            },
            getArrayIndex: function(a,
                b) {
                for (var c = 0; c < a.length; c++)
                    if (a[c] == b) return c;
                return -1
            },
            isArray: function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            getTrackingParams: function() {
                if (window.EF.accessTopUrl) try {
                    window.EF.top = window.EF.newUri({
                        text: top.location.href
                    })
                } catch (d) {
                    window.EF.top = null
                }
                for (var a = window.EF.top ? window.EF.top.query : window.EF.locationHref.query, b = {}, c = 0; c < window.EF.expectedTrackingParams.length; c++) a.hasOwnProperty(window.EF.expectedTrackingParams[c]) && (b[window.EF.expectedTrackingParams[c]] =
                    a[window.EF.expectedTrackingParams[c]]);
                return b
            },
            isSearchClick: function() {
                function a(a, b) {
                    return a + ".*(\\?|&)" + b + "=.*"
                }
                var b = [a("maynard", "q"), a("google", "q"), a("yahoo", "p"), a("msn", "q"), a("bing", "q"), a("aol", "query"), a("aol", "encquery"), a("lycos", "query"), a("ask", "q"), a("altavista", "q"), a("netscape", "query"), a("cnn", "query"), a("looksmart", "qt"), a("about", "terms"), a("mamma", "query"), a("alltheweb", "q"), a("gigablast", "q"), a("voila", "rdata"), a("virgilio", "qs"), a("live", "q"), a("baidu", "wd"), a("alice",
                        "qs"), a("yandex", "text"), a("najdi", "q"), a("aol", "q"), a("club-internet", "query"), a("mama", "query"), a("seznam", "q"), a("search", "q"), a("wp", "szukaj"), a("onet", "qt"), a("netsprint", "q"), a("google.interia", "q"), a("szukacz", "q"), a("yam", "k"), a("pchome", "q"), a("kvasir", "searchExpr"), a("sesam", "q"), a("ozu", "q"), a("terra", "query"), a("nostrum", "query"), a("mynet", "q"), a("ekolay", "q"), a("search.ilse", "search_for")],
                    c;
                for (c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (window.EF.referrer.text.match(d)) return 1
                }
                if (void 0 !== window.__ql.ef_id ||
                    0 != window.EF.inFloodlight && void 0 !== window.EF.referrer.query.ef_id)
                    if (b = void 0 !== window.__ql.ef_id ? window.__ql.ef_id.split(":") : window.EF.referrer.query.ef_id.split(":"), "EF_IDV2" == b[0]) {
                        if (6 <= b.length && "s" == b[5]) return 1
                    } else if (b = b[b.length - 1], 1 == b.length) {
                    if ("s" == b) return 1
                } else return 1;
                return 0
            },
            addPixelDetailsReadyListener: function(a) {
                window.EF.isEmptyDictionary(window.EF.pixelDetails) ? window.EF.pixelDetailsReadyCallbackFns[window.EF.pixelDetailsReadyCallbackFns.length] = a : a()
            },
            addListener: function(a) {
                window.addEventListener ?
                    window.addEventListener("message", a, !1) : window.attachEvent("onmessage", a)
            },
            removeListener: function(a) {
                window.addEventListener ? window.removeEventListener("message", a, !1) : window.detachEvent("onmessage", a)
            },
            doCookieMatching: function() {
                window.EF.newCookieMatchingEvent().fire()
            },
            acquireCookieMatchingSlot: function(a) {
                if (!window.EF.cookieMatchingSlots) return !1;
                window.EF.cookieMatchingSlots--;
                a && a();
                return !0
            },
            isSafari11: function() {
                if (-1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")) {
                    var a =
                        navigator.userAgent.match(/version\/(\d+(\.\d+)?)/i);
                    if ((a = a && 1 < a.length && a[1] || "") && "" != a && 11 <= parseInt(a)) return !0
                }
                return !1
            },
            main: function() {},
            getConversionDataFromLocalStorage: function(a) {
                if (void 0 !== k && "" != k && null != k) {
                    if ("noiframe" != k.toLowerCase()) {
                        window.EF.AdCloudLocalStorage.get("data_adcloud", a);
                        return
                    }
                    var b = window.localStorage.getItem("data_adcloud");
                    void 0 !== b && "" != b && null != b && (window.EF.conversionData = b, window.EF.ef_itp_ls = !0)
                }
                a()
            },
            AdCloudLocalStorage: {
                isInitDone: !1,
                isInitSuccess: !1,
                get: function(a,
                    b) {
                    if (window.EF.AdCloudLocalStorage.isInitDone) {
                        if (window.xdLocalStorage && window.EF.AdCloudLocalStorage.isInitSuccess) return window.xdLocalStorage.getItem(a, function(a) {
                            void 0 !== a.value && null != a.value && (window.EF.ef_itp_ls = !0, window.EF.conversionData = a.value);
                            b()
                        });
                        b()
                    } else window.XdUtils = window.XdUtils || function() {
                        return {
                            extend: function(a, b) {
                                var c = b || {},
                                    d;
                                for (d in a) a.hasOwnProperty(d) && (c[d] = a[d]);
                                return c
                            }
                        }
                    }(), window.xdLocalStorage = window.xdLocalStorage || function() {
                        function a(a) {
                            try {
                                var b = JSON.parse(a.data)
                            } catch (t) {}
                            b &&
                                "cross-domain-local-message" === b.namespace && ("iframe-ready" === b.id ? (n = !0, h.initCallback()) : (a = b, k[a.id] && (k[a.id](a), delete k[a.id])))
                        }

                        function b(a, b, c, d) {
                            m++;
                            k[m] = d;
                            p.contentWindow.postMessage(JSON.stringify({
                                namespace: "cross-domain-local-message",
                                id: m,
                                action: a,
                                key: b,
                                value: c
                            }), "*")
                        }

                        function e(b) {
                            h = window.XdUtils.extend(b, h);
                            b = document.createElement("div");
                            window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent("onmessage", a);
                            b.innerHTML = '<iframe id="' + h.iframeId + '" src="' +
                                h.iframeUrl + '" style="display: none;"></iframe>';
                            document.body.appendChild(b);
                            p = document.getElementById(h.iframeId)
                        }

                        function g() {
                            return l ? n ? !0 : (console.log("You must wait for iframe ready message before using the api."), !1) : (console.log("You must call xdLocalStorage.init() before using it."), !1)
                        }

                        function f() {
                            return "complete" === document.readyState
                        }
                        var h = {
                                iframeId: "cross-domain-iframe",
                                iframeUrl: void 0,
                                initCallback: function() {}
                            },
                            m = -1,
                            p, k = {},
                            l = !1,
                            n = !0;
                        return {
                            init: function(a) {
                                if (!a.iframeUrl) throw "You must specify iframeUrl";
                                l ? console.log("xdLocalStorage was already initialized!") : (l = !0, f() ? e(a) : document.addEventListener ? document.addEventListener("readystatechange", function() {
                                    f() && e(a)
                                }) : document.attachEvent("readystatechange", function() {
                                    f() && e(a)
                                }))
                            },
                            setItem: function(a, c, d) {
                                g() && b("set", a, c, d)
                            },
                            getItem: function(a, c) {
                                g() && b("get", a, null, c)
                            },
                            removeItem: function(a, c) {
                                g() && b("remove", a, null, c)
                            },
                            key: function(a, c) {
                                g() && b("key", a, null, c)
                            },
                            getSize: function(a) {
                                g() && b("size", null, null, a)
                            },
                            getLength: function(a) {
                                g() && b("length",
                                    null, null, a)
                            },
                            clear: function(a) {
                                g() && b("clear", null, null, a)
                            },
                            wasInit: function() {
                                return l
                            }
                        }
                    }(), window.EF.AdCloudLocalStorage.isInitDone = !0, window.xdLocalStorage.init({
                        iframeUrl: k,
                        initCallback: function() {
                            if (window.xdLocalStorage) return window.EF.AdCloudLocalStorage.isInitSuccess = !0, window.xdLocalStorage.getItem(a, function(a) {
                                void 0 !== a.value && null != a.value && (window.EF.ef_itp_ls = !0, window.EF.conversionData = a.value);
                                b()
                            });
                            b()
                        }
                    }), setTimeout(function() {
                            window.EF.AdCloudLocalStorage.isInitSuccess || b()
                        },
                        3E3)
                }
            },
            handleConversionData: function(a) {
                window.EF.conversionData = "";
                var b = document.documentURI;
                window.top != window && (b = document.referrer);
                if (-1 != b.indexOf("ef_id")) b = window.EF.newUri({
                    text: b,
                    skipBang: !1
                }).query, void 0 !== b.ef_id && (window.EF.conversionData = b.ef_id);
                else if (void 0 === window.EF.conversionData || "" == window.EF.conversionData) b = document.cookie.split(";").map(function(a) {
                    return a.trim().split(/(=)/)
                }).reduce(function(a, b) {
                    a[b[0]] = a[b[0]] ? a[b[0]] + ", " + b.slice(2).join("") : b.slice(2).join("");
                    return a
                }, {}).data_adcloud, window.EF.conversionData = void 0 !== b && "" !== b ? b : "";
                void 0 === a || void 0 !== window.EF.conversionData && "" != window.EF.conversionData ? a() : window.EF.getConversionDataFromLocalStorage(a)
            },
            getConversionData: function() {
                return window.EF.conversionData
            },
            main2: function(a) {
                var b = window.EF.userServerParams[a.userid] || {},
                    c;
                for (c in b) window.EF[c] = b[c];
                for (c in a) window.EF[c] = a[c];
                "undefined" != typeof a.postInitCallback && a.postInitCallback();
                window.EF.newPixelDetails().fire();
                a = window.EF.getTrackingParams();
                window.EF.appData && "<app_data>" != window.EF.appData && window.EF.appendDictionary(window.EF.deserializeUrlParams(decodeURIComponent(decodeURIComponent(window.EF.appData))), a);
                ("pageview" == window.EF.eventType || "transaction" == window.EF.eventType && 2504 == window.EF.userid || !window.EF.isEmptyDictionary(window.EF.getTrackingParams()) || window.EF.appData && "<app_data>" != window.EF.appData) && window.EF.newPageview().fire();
                "transaction" == window.EF.eventType && window.EF.newTransaction().fire();
                "impression" == window.EF.eventType &&
                    window.EF.newImpression().fire();
                window.EF.segment && (window.EF.newSegmentJavascript({
                    segment: window.EF.segment
                }).fire(), window.EF.searchSegment && window.EF.isSearchClick() && window.EF.newSegmentJavascript({
                    segment: window.EF.searchSegment
                }).fire());
                window.EF.sku && "<sku_value>" != window.EF.sku && window.EF.newProductSegment({
                    ev_plx: window.EF.sku + (window.EF.sku_opt ? "-" + window.EF.sku_opt : "")
                }).fire();
                if (window.EF.fbsPixelId)
                    if (a = window.EF.getTransactionParams(), delete a.ev_transid, a = Object.keys(a), 0 == a.length) window.EF.newFbsSegmentMapping({
                        fbsPixelId: window.EF.fbsPixelId
                    }).fire();
                    else
                        for (var d in a) window.EF.newFbsSegmentMapping({
                            fbsPixelId: window.EF.fbsPixelId,
                            event: a[d]
                        }).fire();
                window.EF.fbsCM && window.EF.newFbsCookieMatching().fire();
                window.EF.doCookieMatching()
            },
            checkUrlParams: function(a, b) {
                var c = window.EF.locationHref.query;
                return c.hasOwnProperty(a) && -1 != window.EF.getArrayIndex(b, c[a])
            },
            checkGlobalSid: function(a) {
                return -1 != window.EF.getArrayIndex(a, String(window.EF.sid)) && -1 != window.EF.getArrayIndex(window.EF.impressionTypes, window.EF.eventType)
            },
            getScriptElement: function(a) {
                var b =
                    document.createElement("script");
                b.language = "Javascript";
                b.type = "text/javascript";
                b.src = a;
                return b
            },
            getInvisibleIframeElement: function(a) {
                var b = document.createElement("iframe");
                void 0 !== a && (b.src = a);
                b.height = 0;
                b.width = 0;
                b.frameborder = 0;
                b.style.display = "none";
                return b
            },
            getInvisibleImageElement: function(a) {
                var b = document.createElement("img");
                b.height = 1;
                b.width = 1;
                b.style.display = "none";
                b.src = a;
                return b
            },
            getFirstLevelObjectCopy: function(a) {
                ret = {};
                for (var b in a) ret[b] = a[b];
                return ret
            },
            deserializeUrlParams: function(a,
                b) {
                var c = {};
                a.replace(b ? /(?:^|&)([^&=]*)=?((?:!.*$)|(?:[^&]*))/g : /(?:^|&)([^&=]*)=?([^&]*)/g, function(a, b, g) {
                    b && (c[b] = decodeURIComponent(g))
                });
                return c
            },
            filterList: function(a, b) {
                for (var c = [], d = 0; d < a.length; d++) - 1 == window.EF.getArrayIndex(b, a[d]) && (c[c.length] = a[d]);
                return c
            },
            executeOnloadCallbacks: function() {
                for (var a = 0; a < window.EF.onloadCallbacks.length; a++) window.EF.onloadCallbacks[a]();
                window.EF.onloadCallbacks = []
            },
            executeAfterLoad: function(a, b) {
                "complete" == document.readyState ? b.apply(a) : window.addEventListener ?
                    window.addEventListener("load", function() {
                        b.apply(a)
                    }, !1) : window.attachEvent("onload", function() {
                        b.apply(a)
                    })
            },
            newUri: function(a) {
                var b = {};
                if (a.text) {
                    b.text = a.text;
                    var c = "",
                        d = "",
                        e = "";
                    e = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+:))?(?:\/\/)?(?:([^:\/?#@]*(?::[^:\/?#@]*)?)?@)?([^:\/?#]*)(?::(\d*))?((?:\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?[^?#\/]*)(?:\?([^#]*))?(?:#(.*))?/.exec(b.text).slice(1);
                    b.scheme = e[0];
                    b.userInfo = e[1];
                    b.host = e[2];
                    b.port = e[3];
                    c = e[4];
                    d = e[5];
                    e = e[6];
                    b.path = c.split("/").slice(1);
                    b.query = {};
                    b.queryWithoutEncode = {};
                    b.hash = {};
                    d && (b.query = window.EF.deserializeUrlParams(d, a.skipBang));
                    e && (b.hash = window.EF.deserializeUrlParams(e, a.skipBang))
                } else c = function(a, c) {
                        for (var d = [], e = 0; e < c.length; e++) {
                            var f = c[e];
                            d[d.length] = [f, a[f]].join("=")
                        }
                        return d.join(b.queryDelimiter)
                    }, d = function(a) {
                        for (var b = {}, c = window.EF.getSortedAttributes(a), d = 0; d < c.length; d++) {
                            var e = c[d];
                            b[e] = encodeURIComponent(a[e])
                        }
                        return b
                    }, b.scheme = a.scheme, b.userInfo = a.userInfo, b.host = a.host, b.port = a.port, b.path = a.path || [], b.query = a.query || {}, b.queryWithoutEncode = a.queryWithoutEncode || {}, b.hash = a.hash || {}, b.hashParamsOrder = a.hashParamsOrder || window.EF.getSortedAttributes(b.hash), b.queryPrefix = a.queryPrefix || "?", b.queryDelimiter = a.queryDelimiter || "&", b.respectEmptyQueryParamValue = a.respectEmptyQueryParamValue, e = {}, window.EF.appendDictionary(b.query, e), window.EF.appendDictionary(b.queryWithoutEncode, e), b.queryParamsOrder = a.queryParamsOrder || window.EF.getSortedAttributes(e), a = b.host, b.userInfo && (a = [b.userInfo, a].join("@")),
                    b.port && (a = [a, b.port].join(":")), b.text = [b.scheme, a].join("//"), b.text = [b.text].concat(b.path).join("/"), window.EF.isEmptyDictionary(b.queryWithoutEncode) || window.EF.isEmptyDictionary(b.query) ? window.EF.isEmptyDictionary(b.query) ? window.EF.isEmptyDictionary(b.queryWithoutEncode) || (b.text = [b.text, c(b.queryWithoutEncode, b.queryParamsOrder)].join(b.queryPrefix)) : b.text = [b.text, c(d(b.query), b.queryParamsOrder)].join(b.queryPrefix) : (a = {}, window.EF.appendDictionary(d(b.query), a), window.EF.appendDictionary(b.queryWithoutEncode,
                        a), b.text = [b.text, c(a, b.queryParamsOrder)].join(b.queryPrefix)), window.EF.isEmptyDictionary(b.hash) || (b.text = [b.text, c(d(b.hash), b.hashParamsOrder)].join("#"));
                b.getProtocols = function() {
                    return [this.scheme]
                };
                b.getHosts = function() {
                    return [this.host]
                };
                return b
            },
            newPixelServerUri: function(a) {
                var b = window.EF.newUri({
                    scheme: window.EF.protocol,
                    host: window.EF.pixelHost,
                    path: [a.userid, a.eventType],
                    query: a.eventParams
                });
                b.userid = a.userid;
                b.eventType = a.eventType;
                return b
            },
            newPixelServerGenericRedirectUri: function(a) {
                a =
                    a || {};
                var b = {};
                b.url = a.destinationUri.text;
                b.ev_gb = 0;
                b = window.EF.newPixelServerUri({
                    userid: a.userid,
                    eventType: "gr",
                    eventParams: b
                });
                b.destinationUri = a.destinationUri;
                b.googleBounce = a.googleBounce;
                var c = window.EF.getFirstLevelObjectCopy(b);
                b.getProtocols = function() {
                    var a = c.getProtocols.apply(this);
                    return a = a.concat(this.destinationUri.getProtocols())
                };
                b.getHosts = function() {
                    var a = c.getHosts.apply(this);
                    return a = a.concat(this.destinationUri.getHosts())
                };
                return b
            },
            newPixelServerDisplayClickRedirectUri: function(a) {
                var b = {
                        ev_ct: "d",
                        ev_sid: "77"
                    },
                    c = {};
                b.url = a.destinationUri;
                for (var d = [
                        ["campaignId", "ev_ci"],
                        ["adgroupId", "ev_ai"],
                        ["creativeId", "ev_cri"],
                        ["impressionId", "ev_ii"],
                        ["rtbSourceId", "ev_rs"],
                        ["sku", "ev_plx"],
                        ["privateExchangeId", "ev_dlx"],
                        ["ias client id", "ev_ias"],
                        ["ias advertiser id", "ev_ias_advid"],
                        ["ias client id", "ev_ias"],
                        ["ias campaign id", "ev_iascmp"],
                        ["publisher id", "ev_pubid"]
                    ], e = 0; e < d.length; e++) {
                    var g = d[e][0],
                        f = d[e][1],
                        h = a.queryParams[f] || window.EF.location.query[f] || window.EF.location.hash[f];
                    h && (b[f] = h);
                    c[g] = h
                }
                a = window.EF.newPixelServerUri({
                    userid: a.userid,
                    eventType: a.tokenPassing ? "cq" : "c",
                    eventParams: b
                });
                window.EF.appendDictionary(c, a);
                return a
            },
            getDisplayClickUri: function(a) {
                var b = window.EF.newPixelServerDisplayClickRedirectUri({
                        destinationUri: a.destinationUri,
                        userid: a.userid || window.EF.userid,
                        tokenPassing: a.tokenPassing,
                        queryParams: a.queryParams || {}
                    }),
                    c = a.additionalRedirectUri || window.EF.location.query.ev_cu || window.EF.location.hash.ev_cu || window.EF.location.query.ev_cud || window.EF.location.hash.ev_cud;
                return c ? c + ((void 0 !== a.unescapedPixelServerUri ? !a.unescapedPixelServerUri : window.EF.location.query.ev_cu || window.EF.location.hash.ev_cu || !window.EF.location.query.ev_cud && !window.EF.location.hash.ev_cud) ? escape(b.text) : b.text) : b.text
            },
            getTransactionParams: function(a) {
                a = a || {};
                var b = a.properties || window.EF.transactionProperties,
                    c = a.objectList || window.EF.transactionObjectList;
                a = window.EF.getFirstLevelObjectCopy(a.queryStringArgs || {});
                if (b) "string" == typeof b && (b = window.EF.deserializeUrlParams(b)), window.EF.appendDictionary(b,
                    a);
                else if ("undefined" !== typeof c) {
                    b = {};
                    for (var d = 0; d < c.length; d++)
                        for (var e = c[d], g = window.EF.getSortedAttributes(e), f = 0; f < g.length; f++) {
                            var h = g[f];
                            b[h] = e[h]
                        }
                    window.EF.appendDictionary(b, a)
                }
                return a
            },
            getEpochFromEfUniq: function(a) {
                a = a.uniqueId;
                for (var b = [], c = 0; 6 > c; c++) b[c] = window.EF.getArrayIndex("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@-", a[c]);
                return b[0] << 26 | b[1] << 20 | b[2] << 14 | b[3] << 8 | b[4] << 2 | b[5] >> 4
            },
            getMacroSubstitutedText: function(a) {
                var b = a.text,
                    c = {};
                a = a.cacheBuster ||
                    window.EF.location.query.ev_cb || window.EF.location.hash.ev_cb;
                if (!a) try {
                    a = window.EF.getEpochFromEfUniq({
                        uniqueId: window.EF.location.query.ev_ii || window.EF.location.hash.ev_ii
                    })
                } catch (g) {
                    a = Math.round(new Date / 1E3)
                }
                c.__CACHEBUSTER__ = String(a);
                a = window.EF.getSortedAttributes(c);
                for (var d = 0; d < a.length; d++) {
                    var e = a[d];
                    b = b.replace(new RegExp(e, "g"), c[e])
                }
                return b
            },
            newPixelEvent: function(a) {
                var b = {};
                b.userid = a.userid || window.EF.userid;
                b.scheme = a.scheme || window.EF.protocol;
                b.addToDom = function() {
                    this.initializeUri();
                    if (this.canAddToDom()) {
                        var a = this.getDomElement();
                        window.EF.addToDom(a)
                    }
                };
                b.fire = function() {
                    var a = this;
                    window.EF.addPixelDetailsReadyListener(function() {
                        a.addToDom()
                    })
                };
                b.initializeUri = function() {
                    throw "InitializeUri not implemented";
                };
                b.getDomElement = function() {
                    return window.EF.getInvisibleImageElement(this.uri.text)
                };
                b.canAddToDom = function() {
                    return "https:" == window.EF.protocol && window.EF.filterList(this.uri.getProtocols(), ["https:"]).length ? !1 : window.EF.allow3rdPartyPixels || !window.EF.filterList(this.uri.getHosts(), [window.EF.pixelHost, window.EF.jsHost]).length
                };
                return b
            },
            newPixelDetails: function(a) {
                a = a || {};
                var b = window.EF.newPixelEvent(a),
                    c = window.EF.getFirstLevelObjectCopy(b);
                b.initializeUri = function() {
                    var a = window.EF.newUri({
                        scheme: window.EF.protocol,
                        host: window.EF.jsHost,
                        path: ["static", "pixel_details.html"],
                        hash: window.EF.pixelDetailsParams
                    });
                    this.uri = window.EF.newPixelServerGenericRedirectUri({
                        userid: this.userid,
                        destinationUri: a
                    })
                };
                b.canAddToDom = function() {
                    return !c.canAddToDom.apply(this) || window.EF.pixelDetailsAdded ?
                        !1 : window.EF.isXSSReady()
                };
                b.getDomElement = function() {
                    return window.EF.getInvisibleIframeElement(this.uri.text)
                };
                b.fire = function() {
                    window.EF.executeAfterLoad(this, this.addToDom)
                };
                b.addToDom = function() {
                    this.initializeUri();
                    if (this.canAddToDom()) {
                        window.EF.addListener(this.pixelDetailsReceiver);
                        var a = this.getDomElement();
                        window.EF.addToDom(a);
                        window.EF.pixelDetailsAdded = 1
                    }
                };
                b.pixelDetailsReceiver = function(a) {
                    if (-1 != EF.getArrayIndex(["http://" + window.EF.jsHost, "https://" + window.EF.jsHost], a.origin)) {
                        a =
                            window.EF.newUri({
                                text: a.data
                            });
                        var c = window.EF.getSortedAttributes(window.EF.pixelDetailsParams);
                        for (f in a.hash) {
                            var d = a.hash[f]; - 1 != window.EF.getArrayIndex(c, f) && d != window.EF.pixelDetailsParams[f] && (window.EF.pixelDetails[f] = d)
                        }
                        window.EF.pixelDetails.hasOwnProperty("gsurfer") && window.EF.pixelDetails.hasOwnProperty("google") && (window.EF.pixelDetails.exp_time = window.EF.pixelDetails.gsurfer == window.EF.pixelDetails.google ? "1" : "30");
                        window.EF.throttleCookie = window.EF.pixelDetails.throttleCookie;
                        window.EF.removeListener(b.pixelDetailsReceiver);
                        var f = function() {
                            for (var a = 0; a < window.EF.pixelDetailsReadyCallbackFns.length; a++) window.EF.pixelDetailsReadyCallbackFns[a]();
                            window.EF.pixelDetailsReadyCallbackFns = []
                        };
                        window.EF.isSafari11() ? window.EF.handleConversionData(f) : f()
                    }
                };
                return b
            },
            newPageview: function(a) {
                a = a || {};
                var b = window.EF.newPixelEvent(a),
                    c = a.properties || window.EF.pageviewProperties;
                b.queryStringArgs = window.EF.getFirstLevelObjectCopy(a.queryStringArgs || {});
                b.queryStringArgs.ev___loc = window.EF.location.text;
                b.queryStringArgs.ev___ref =
                    window.EF.referrer.text;
                window.EF.appendDictionary(window.EF.getTrackingParams(), b.queryStringArgs);
                window.EF.appData && "<app_data>" != window.EF.appData && window.EF.appendDictionary(window.EF.deserializeUrlParams(decodeURIComponent(decodeURIComponent(window.EF.appData))), b.queryStringArgs);
                "string" == typeof c && (c = window.EF.deserializeUrlParams(c));
                window.EF.appendDictionary(c, b.queryStringArgs);
                b.initializeUri = function() {
                    window.EF.isSafari11() && "" != window.EF.getConversionData() && (window.EF.ef_itp_ls &&
                        (this.queryStringArgs.itp_ls = 1), this.queryStringArgs.ef_id = window.EF.conversionData);
                    this.uri = window.EF.newPixelServerUri({
                        userid: this.userid,
                        eventType: "v",
                        eventParams: this.queryStringArgs
                    })
                };
                return b
            },
            newTransaction: function(a) {
                a = a || {};
                var b = window.EF.newPixelEvent(a);
                b.queryStringArgs = window.EF.getTransactionParams(a);
                b.initializeUri = function() {
                    window.EF.isSafari11() && "" != window.EF.getConversionData() && (window.EF.ef_itp_ls && (this.queryStringArgs.itp_ls = 1), this.queryStringArgs.ef_id = window.EF.conversionData);
                    this.uri = window.EF.newPixelServerUri({
                        userid: this.userid,
                        eventType: "t",
                        eventParams: this.queryStringArgs
                    })
                };
                return b
            },
            newImpression: function(a) {
                a = a || {};
                var b = window.EF.newPixelEvent(a),
                    c = a.properties || window.EF.impressionProperties;
                b.queryStringArgs = window.EF.getFirstLevelObjectCopy(a.queryStringArgs || {});
                b.queryStringArgs.ev___loc = window.EF.location.text;
                b.queryStringArgs.ev___ref = window.EF.referrer.text;
                "string" == typeof c && (c = window.EF.deserializeUrlParams(c));
                window.EF.appendDictionary(c, b.queryStringArgs);
                b.initializeUri = function() {
                    window.EF.isSafari11() && ("" != window.EF.getConversionData() && (this.queryStringArgs.ef_id = window.EF.conversionData), this.uri = window.EF.newPixelServerUri({
                        userid: this.userid,
                        eventType: "i",
                        eventParams: this.queryStringArgs
                    }));
                    return b
                }
            },
            newSegmentJavascript: function(a) {
                a = a || {};
                var b = window.EF.newPixelEvent(a),
                    c = window.EF.getFirstLevelObjectCopy(b);
                b.initializeUri = function() {
                    this.jsFileName = [this.userid, a.segment].join("-");
                    this.jsFileName = this.jsFileName.concat(".js");
                    this.uri =
                        window.EF.newUri({
                            scheme: window.EF.protocol,
                            host: window.EF.jsHost,
                            path: ["dl", this.userid, this.jsFileName]
                        })
                };
                b.canAddToDom = function() {
                    return c.canAddToDom.apply(this) && window.EF.allow3rdPartyPixels && "1" != window.EF.pixelDetails.optout ? window.EF.pixelDetails.optout != window.EF.pixelDetailsParams.optout && "0" == window.EF.pixelDetails.optout : !1
                };
                b.getDomElement = function() {
                    return window.EF.getScriptElement(this.uri.text)
                };
                return b
            },
            newProductSegment: function(a) {
                a = a || {};
                var b = window.EF.newPixelEvent(a);
                b.sku =
                    a.ev_plx || window.EF.sku + (window.EF.sku_opt ? "-" + window.EF.sku_opt : "");
                b.initializeUri = function() {
                    this.uri = window.EF.newPixelServerUri({
                        userid: this.userid,
                        eventType: "s",
                        eventParams: {
                            ev_plx: this.sku
                        }
                    })
                };
                return b
            },
            newCookieMatchingEvent: function(a) {
                a = a || {};
                a = window.EF.newPixelEvent(a);
                a.initializeUri = function() {
                    this.uri = window.EF.newUri({
                        scheme: window.EF.protocol,
                        host: window.EF.cmHost,
                        path: ["cm"]
                    })
                };
                return a
            },
            newFbsCookieMatching: function() {
                var a = window.EF.newPixelEvent({});
                a.initializeUri = function() {
                    this.uri =
                        window.EF.newUri({
                            scheme: "https:",
                            host: "www.facebook.com",
                            path: ["fr", "b.php"],
                            queryWithoutEncode: {
                                p: "1531105787105294",
                                e: window.EF.pixelDetails.gsurfer,
                                t: "2592000",
                                o: "0"
                            },
                            queryParamsOrder: ["p", "e", "t", "o"]
                        })
                };
                return a
            }
        };
        window.EF.onloadCallbacks = q;
        window.EF.jsTagAdded = r;
        window.EF.initializeEFVariables();
        window.EF.executeAfterLoad(this, window.EF.executeOnloadCallbacks)
    }
})();