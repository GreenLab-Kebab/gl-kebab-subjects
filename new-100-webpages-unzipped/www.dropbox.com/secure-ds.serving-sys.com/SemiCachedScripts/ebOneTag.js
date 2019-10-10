EBG = "undefined" != typeof EBG ? EBG : {};
EBG.Semi = EBG.Semi || {};
EBG.Semi.Infra = function() {};
EBG.Semi.Infra.declareNamespace = function(a) {
    for (var b = window.EBG.Semi, a = a.split("."), c = 0; c < a.length; c++) {
        var d = a[c],
            e = b[d];
        e || (e = b[d] = {});
        b = e
    }
};
EBG.Semi.Infra.isDefined = function(a) {
    return "undefined" != typeof a
};
EBG.Semi.Infra.runTimed = function(a, b, c, d) {
    return setTimeout(function() {
        b.apply(a, c)
    }, d)
};
EBG.Semi.Infra.indexOfArray = function(a, b, c) {
    for (var c = c || 0, d = a.length; c < d; c++)
        if (a[c] === b) return c;
    return -1
};
EBG.Semi.Infra.getTimestamp = function() {
    var a = new Date;
    return parseInt(a.getHours() + 1) + ":" + a.getMinutes() + ":" + a.getSeconds() + "." + a.getMilliseconds() + " " + a.getDate() + "." + parseInt(a.getMonth() + 1) + "." + a.getFullYear()
};
EBG.Semi.Infra.getQuerystringParam = function(a, b) {
    if (!b) b = window.location.href;
    var a = a.replace(/[\[\]]/g, "\\$&"),
        c = RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)").exec(b);
    return !c ? null : !c[2] ? "" : decodeURIComponent(c[2].replace(/\+/g, " "))
};
EBG.Semi.Infra.getValueFromPath = function(a) {
    try {
        for (var a = a.split("."), b = window, c = 0; c < a.length; c++) b = b[a[c]];
        return b
    } catch (d) {}
    return null
};
EBG.Semi.Infra.getUrlParameter = function(a) {
    var b = "",
        c = EBG.Semi.Infra.getWindowLocation().toString(),
        d = RegExp("[&,?]" + a + "=(.*)$", "i");
    if ((a = c.match(RegExp("[&,?]" + a + "=(.*)[&]", "i")) || c.match(d)) && 0 < a.length) - 1 < a[1].indexOf("&") && (a[1] = a[1].substr(0, a[1].indexOf("&"))), b = a[1];
    return b
};
EBG.Semi.Infra.mergeObj = function(a, b, c) {
    var c = !!c,
        d;
    for (d in a)
        if (a.hasOwnProperty(d) && (!b.hasOwnProperty(d) || c)) b[d] = a[d]
};
EBG.Semi.Infra.combinePaths = function(a, b) {
    a = a || "";
    b = b || "";
    a && "/" != a[a.length - 1] && b && "/" != b[0] && (a += "/");
    var c = a;
    b && (c += b);
    return c
};
EBG.Semi.Infra.isPageLoaded = function() {
    var a = !0;
    "complete" != document.readyState && "loaded" != document.readyState && "interactive" != document.readyState && (a = !1);
    return a
};
EBG.Semi.Infra.addChildToPage = function(a, b, c, d) {
    if ("undefined" == typeof b || !b) b = document.body || document.getElementsByTagName("head")[0];
    this.isDefined(c) && null != c && this.addEventListener(a, c, d);
    b.appendChild(a)
};
EBG.Semi.Infra.addEventListener = function(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : (b = "on" + b, a.attachEvent ? a.attachEvent(b, c) : b in a && (a[b] = c))
};
EBG.Semi.Infra.createScriptElement = function(a, b, c, d) {
    try {
        var e = a.createElement(b);
        e.type = c;
        e.src = d;
        e.async = !1;
        return e
    } catch (g) {}
};
EBG.Semi.Infra.addScriptElement = function(a, b, c) {
    var d = c ? c : document;
    if (b) {
        if (c = b, 0 == c.childNodes.length) d = d.createElement("div"), d.style.display = "none", b.appendChild(d)
    } else c = d.head || d.documentElement;
    c.insertBefore(a, c.firstChild)
};
EBG.Semi.Infra.ajax = function() {
    var a = {
        x: function() {
            if ("undefined" !== typeof XMLHttpRequest) return new XMLHttpRequest;
            for (var a = "MSXML2.XmlHttp.6.0,MSXML2.XmlHttp.5.0,MSXML2.XmlHttp.4.0,MSXML2.XmlHttp.3.0,MSXML2.XmlHttp.2.0,Microsoft.XmlHttp".split(","), c, d = 0; d < a.length; d++) try {
                c = new ActiveXObject(a[d]);
                break
            } catch (e) {}
            return c
        },
        send: function(b, c, d, e, g) {
            void 0 === g && (g = !0);
            var f = a.x();
            f.open(d, b, g);
            f.onreadystatechange = function() {
                4 == f.readyState && c(f.responseText)
            };
            "POST" == d && f.setRequestHeader("Content-type",
                "application/x-www-form-urlencoded");
            f.send(e)
        }
    };
    a.get = function(b, c, d, e) {
        var g = [],
            f;
        for (f in c) g.push(encodeURIComponent(f) + "=" + encodeURIComponent(c[f]));
        a.send(b + (g.length ? "?" + g.join("&") : ""), d, "GET", null, e)
    };
    a.post = function(b, c, d, e) {
        var g = [],
            f;
        for (f in c) g.push(encodeURIComponent(f) + "=" + encodeURIComponent(c[f]));
        a.send(b, d, "POST", g.join("&"), e)
    };
    return a
}();
EBG.Semi.Infra.injectScript = function(a) {
    var a = "<html><head></head><body>" + a + "</body></html>",
        b = this.createFriendlyIframe();
    this.addChildToPage(b);
    document.documentMode && 7 < document.documentMode && !this.isIframeScriptable(b) && this.enableIframeScriptable(b);
    this.writeToFriendlyIframe(b, a, !0)
};
EBG.Semi.Infra.loadFileByScriptElem = function(a, b, c, d, e, g) {
    if (d) a = a ? a : document, a.write("<script src='" + b + "'><\/script>"), a.close();
    else {
        var a = a || document,
            f = a.createElement("script");
        f.type = "text/" + (b.type || "javascript");
        f.src = b.src || b;
        f.async = !0;
        var h = !1;
        f.onreadystatechange = f.onload = function() {
            var a = f.readyState;
            if (c && !h && (!a || /loaded|complete/.test(a))) h = !0, c.apply(e, [g])
        };
        f.onerror = function() {
            c.apply(e, [g])
        };
        EBG.Semi.Infra.addChildToPage(f, a.body || a.getElementsByTagName("head")[0])
    }
};
EBG.Semi.Infra.executeTextByScriptElem = function(a, b, c, d, e) {
    var a = a || document,
        g = a.createElement("script");
    g.type = "text/javascript";
    g.text = b;
    EBG.Semi.Infra.addChildToPage(g, a.body || a.getElementsByTagName("head")[0]);
    c && c.apply(d || window, [e])
};
EBG.Semi.Infra.getWindowLocation = function() {
    return window.location
};
EBG.Semi.Infra.getCurrentScriptElement = function() {
    var a;
    if (document.currentScript) a = document.currentScript;
    else
        for (var b = document.getElementsByTagName("script"), c = 0; !a && c < b.length; c++)
            if (-1 !== b[c].src.indexOf("ebOneTag.js") && !b[c].chosen) b[c].chosen = !0, a = b[c];
    return function() {
        return a
    }
}();
EBG.Semi.Infra.getRandomNumber = function() {
    try {
        var a = Math.random().toString();
        return a = a.substr(a.indexOf(".") + 1)
    } catch (b) {}
};
EBG.Semi.Infra.getAddInEyeDomain = function(a) {
    var b = "",
        c = "",
        d = 0,
        a = (a ? a : window).document,
        a = a.referrer ? a.referrer : a.location.href;
    try {
        a = a.toLowerCase(), 7 <= a.length && "http://" == a.substr(0, 7) ? (c = a.substr(7), a.substr(0, 7)) : 8 <= a.length && "https://" == a.substr(0, 8) ? (c = a.substr(8), a.substr(0, 8)) : c = a, d = c.indexOf("/"), 0 < d && (c = c.substr(0, d)), b = c
    } catch (e) {
        b = ""
    }
    return b
};
EBG.Semi.Infra.createFriendlyIframe = function(a, b, c, d) {
    a = (a ? a : document).createElement("iframe");
    b && a.setAttribute("id", b);
    a.style.display = c ? "" : "none";
    a.style.width = c ? c + "px" : "0px";
    a.style.height = d ? d + "px" : "0px";
    document.documentMode && 8 > document.documentMode ? (a.frameBorder = 0, a.margin = 0, a.marginWidth = 0, a.marginHeight = 0, a.scrolling = "no") : (a.setAttribute("scrolling", "no"), a.setAttribute("marginwidth", "0"), a.setAttribute("marginheight", "0"), a.setAttribute("frameborder", "0"));
    return a
};
EBG.Semi.Infra.isIframeScriptable = function(a) {
    try {
        this.ifrmDocument = a.contentWindow.document
    } catch (b) {
        return !1
    }
    return !0
};
EBG.Semi.Infra.enableIframeScriptable = function(a) {
    if (a) {
        a.setAttribute("data-isready", "false");
        var b;
        b = "javascript:document.write('<scr'+'ipt>\r" + ('try{parent.document.domain;}catch(e){document.domain="' + document.domain + '";}\r');
        a.src = b + "parent.EBG.Semi.Infra.friendlyIframeIsReadyCallback(window);\r</scr'+'ipt>\r');"
    }
};
EBG.Semi.Infra.friendlyIframeIsReadyCallback = function(a) {
    for (var b = document.getElementsByTagName("iframe"), c = 0; c < b.length; c++) try {
        if ((b[c].contentWindow || b[c].contentDocument.window || b[c].window) == a) {
            b[c].setAttribute("data-isready", "true");
            break
        }
    } catch (d) {}
};
EBG.Semi.Infra.writeToFriendlyIframe = function(a, b, c) {
    if (document.documentMode && 7 < document.documentMode && "false" == a.getAttribute("data-isready")) setTimeout(function() {
        EBG.Semi.Infra.writeToFriendlyIframe(a, b, c)
    }, 100);
    else {
        var c = this.isDefined(c) ? c : !1,
            d;
        d = a.contentWindow ? a.contentWindow.document : a.contentDocument && a.contentDocument.document ? a.contentDocument.document : a.contentDocument;
        d.write(b);
        c && setTimeout(function() {
            d.close()
        }, 1E3)
    }
};
EBG.Semi.Infra.createUnfriendlyIframe = function(a, b, c) {
    b && !EBG.Semi.Infra.isPageLoaded() ? (this.logger && this.logger.info("Adding unfriendly iframe in sync mode, url: " + a), document.write('<iframe src="' + a + '" style="display:none;width:0px;height:0px"></iframe>')) : (this.logger && this.logger.info("Adding unfriendly iframe in async mode, url: " + a), b = document.createElement("iframe"), b.setAttribute("src", a), b.style.display = "none", b.onload = c, EBG.Semi.Infra.addChildToPage(b))
};
EBG.Semi.Infra.getTopLevelReferrer = function(a) {
    var b = null;
    try {
        if (a.top && a.top.document && a.top.document.referrer) b = a.top.document.referrer.toString();
        else throw Error("Unfriendly iframe");
    } catch (c) {
        this.isDefined(a) && a.document && a.document.referrer && (b = a.document.referrer.toString())
    }
    return b
};
EBG.Semi.Infra.getTokenValueFromURL = function(a, b) {
    var c = b.indexOf("?") ? b.split("?")[1] : "";
    if (c)
        for (var c = c.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].split("=");
            if (e[0] == a) return e[e.length - 1]
        }
    return null
};
EBG.Semi.Infra.urlAvailableLength = function(a) {
    var b = 8E3;
    EBG.Semi.Infra.isOldIE() && (b = 2048);
    return b - a.length
};
EBG.Semi.Infra.isOldIE = function() {
    var a = navigator.userAgent,
        b;
    if (-1 != (b = a.indexOf("MSIE"))) {
        a = a.substring(b + 5);
        if (-1 != (b = a.indexOf(";"))) a = a.substring(0, b);
        if (-1 != (b = a.indexOf(" "))) a = a.substring(0, b);
        a = parseInt("" + a, 10);
        isNaN(a) && (parseFloat(navigator.appVersion), a = parseInt(navigator.appVersion, 10));
        if (9 > a) return !0
    }
    return !1
};
EBG.Semi.Infra.typeOf = function(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array || !(a instanceof Object) && "[object Array]" == Object.prototype.toString.call(a) || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if (!(a instanceof Object) && ("[object Function]" == Object.prototype.toString.call(a) || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
};
EBG.Semi.declareNamespace = EBG.Semi.Infra.declareNamespace;
EBGVT = "undefined" != typeof EBGVT ? EBGVT : {};
EBGVT.JSON = "JSON" in window && window.JSON && window.JSON.stringify && window.JSON.parse ? JSON : {};
(function() {
    function a(a) {
        return 10 > a ? "0" + a : a
    }

    function b(a) {
        e.lastIndex = 0;
        return e.test(a) ? '"' + a.replace(e, function(a) {
            var b = h[a];
            return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function c(a, d) {
        var e, h, m, o, p = g,
            l, j = d[a];
        j && "object" === typeof j && "function" === typeof j.toJSON && (j = j.toJSON(a));
        "function" === typeof k && (j = k.call(d, a, j));
        switch (typeof j) {
            case "string":
                return b(j);
            case "number":
                return isFinite(j) ? "" + j : "null";
            case "boolean":
            case "null":
                return "" +
                    j;
            case "object":
                if (!j) return "null";
                g += f;
                l = [];
                if ("[object Array]" === Object.prototype.toString.apply(j)) {
                    o = j.length;
                    for (e = 0; e < o; e += 1) l[e] = c(e, j) || "null";
                    m = 0 === l.length ? "[]" : g ? "[\n" + g + l.join(",\n" + g) + "\n" + p + "]" : "[" + l.join(",") + "]";
                    g = p;
                    return m
                }
                if (k && "object" === typeof k) {
                    o = k.length;
                    for (e = 0; e < o; e += 1) h = k[e], "string" === typeof h && (m = c(h, j)) && l.push(b(h) + (g ? ": " : ":") + m)
                } else
                    for (h in j) Object.hasOwnProperty.call(j, h) && (m = c(h, j)) && l.push(b(h) + (g ? ": " : ":") + m);
                m = 0 === l.length ? "{}" : g ? "{\n" + g + l.join(",\n" + g) + "\n" +
                    p + "}" : "{" + l.join(",") + "}";
                g = p;
                return m
        }
    }
    if ("function" !== typeof Date.prototype.toJSON) Date.prototype.toJSON = function() {
        return this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z"
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    };
    var d = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        g, f, h = {
            "\u0008": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\u000c": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        k;
    if ("function" !== typeof EBGVT.JSON.stringify) EBGVT.JSON.stringify = function(a, b, d) {
        var e;
        f = g = "";
        if ("number" === typeof d)
            for (e = 0; e < d; e += 1) f += " ";
        else "string" === typeof d && (f = d);
        if ((k = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("EBGVT.JSON.stringify");
        return c("", {
            "": a
        })
    };
    if ("function" !== typeof EBGVT.JSON.parse) EBGVT.JSON.parse = function(a, b) {
        function c(a, d) {
            var e, g, f = a[d];
            if (f && "object" === typeof f)
                for (e in f) Object.hasOwnProperty.call(f, e) && (g = c(f, e), void 0 !== g ? f[e] = g : delete f[e]);
            return b.call(a, d, f)
        }
        var e;
        d.lastIndex = 0;
        d.test(a) && (a = a.replace(d, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof b ? c({
            "": e
        }, "") : e;
        throw new SyntaxError("EBGVT.JSON.parse");
    }
})();
EBG.Semi.EventName = {
    ALL_USER_ID_FOUND: "allUserIdFound"
};
EBG.Semi.ServingState = {
    script: "SCRIPT",
    friendlyIframe: "FRIENDLY_IFRAME",
    unfriendlyIframe: "IFRAME"
};
EBG.Semi.Events = EBG.Semi.Events || {};
EBG.Semi.Events.EventManager = function() {};
EBG.Semi.Events.EventManager.prototype = {
    _subscriptions: {},
    subscribeToEvent: function(a, b, c, d) {
        this._subscriptions[a] || (this._subscriptions[a] = {});
        this._subscriptions[a][d] || (this._subscriptions[a][d] = []);
        d && this._subscriptions[a][d].push({
            callback: b,
            bindingCallback: c
        })
    },
    dispatchEvent: function(a, b, c) {
        if (c)
            for (var d = this._subscriptions[a][c], e = 0; e < d.length; ++e) {
                var g = this._subscriptions[a][c][e],
                    f = g.callback;
                f.apply(g.bindingCallback, [b])
            } else
                for (c in a = this._subscriptions[a], a)
                    if (a[c]) {
                        d = a[c];
                        for (e =
                            0; e < d.length; ++e) g = a[c][e], f = g.callback, f.apply(g.bindingCallback, [b])
                    }
    }
};
EBG.Semi.Events.eventMgr = EBG.Semi.Events.eventMgr || new EBG.Semi.Events.EventManager;
EBG.Semi.WindowUtil = function() {};
EBG.Semi.WindowUtil.getTopWindow = function() {
    var a = window,
        b = a.location.origin || a.location.protocol + "//" + a.location.host;
    a.EBservingMode = EBG.Semi.ServingState.script;
    try {
        if (window.location.ancestorOrigins && window.URL)
            for (var c = 0; c < location.ancestorOrigins.length; c++)
                if (0 == c && "null" == b && (b = location.ancestorOrigins[0]), location.ancestorOrigins[c] === b) a = a.parent, a.EBservingMode = EBG.Semi.ServingState.friendlyIframe;
                else {
                    a.EBservingMode = EBG.Semi.ServingState.unfriendlyIframe;
                    break
                }
        else
            for (; a !== a.parent;) {
                b =
                    null;
                c = a.location.origin || a.location.protocol + "//" + a.location.host;
                try {
                    b = a.parent.location.origin || a.parent.location.protocol + "//" + a.parent.location.host
                } catch (d) {}
                if (b === c) a = a.parent, a.EBservingMode = EBG.Semi.ServingState.friendlyIframe;
                else {
                    a.EBservingMode = EBG.Semi.ServingState.unfriendlyIframe;
                    break
                }
            }
    } catch (e) {}
    return a
};
EBG.Semi.BrowserDetector = function() {
    this.browserName = navigator.appName;
    this.fullVersion = "" + parseFloat(navigator.appVersion);
    this.majorVersion = parseInt(navigator.appVersion, 10);
    this._init()
};
EBG.Semi.BrowserDetector.Browser = {
    InternetExplorer: "InternetExplorer",
    Chrome: "Chrome",
    Firefox: "Firefox",
    Opera: "Opera",
    Safari: "Safari"
};
EBG.Semi.BrowserDetector.prototype = {
    _init: function() {
        var a = navigator.userAgent,
            b, c;
        if (-1 != (c = a.indexOf("Opera"))) {
            if (this.browserName = EBGVT.BrowserDetector.Browser.Opera, this.fullVersion = a.substring(c + 6), -1 != (c = a.indexOf("Version"))) this.fullVersion = a.substring(c + 8)
        } else if (-1 != (c = a.indexOf("MSIE"))) this.browserName = EBGVT.BrowserDetector.Browser.InternetExplorer, this.fullVersion = a.substring(c + 5);
        else if (-1 != (c = a.indexOf("Chrome"))) this.browserName = EBGVT.BrowserDetector.Browser.Chrome, this.fullVersion =
            a.substring(c + 7);
        else if (-1 != (c = a.indexOf("Safari"))) {
            if (this.browserName = EBGVT.BrowserDetector.Browser.Safari, this.fullVersion = a.substring(c + 7), -1 != (c = a.indexOf("Version"))) this.fullVersion = a.substring(c + 8)
        } else if (-1 != (c = a.indexOf("Firefox"))) this.browserName = EBGVT.BrowserDetector.Browser.Firefox, this.fullVersion = a.substring(c + 8);
        else if ((b = a.lastIndexOf(" ") + 1) < (c = a.lastIndexOf("/")))
            if (this.browserName = a.substring(b, c), this.fullVersion = a.substring(c + 1), this.browserName.toLowerCase() == this.browserName.toUpperCase()) this.browserName =
                navigator.appName;
        if (-1 != (a = this.fullVersion.indexOf(";"))) this.fullVersion = this.fullVersion.substring(0, a);
        if (-1 != (a = this.fullVersion.indexOf(" "))) this.fullVersion = this.fullVersion.substring(0, a);
        this.majorVersion = parseInt("" + this.fullVersion, 10);
        if (isNaN(this.majorVersion)) this.fullVersion = "" + parseFloat(navigator.appVersion), this.majorVersion = parseInt(navigator.appVersion, 10)
    }
};
EBG.Semi.declareNamespace("Logging");
EBG.Semi.Logging.Logger = function(a) {
    this._level = a;
    this.startNestingGroupNames = [];
    this.endNestingGroupNames = []
};
EBG.Semi.Logging.Logger.DebugMode = "mmdebug";
EBG.Semi.Logging.Logger.LoggerLevels = {
    NONE: 0,
    ERROR: 1,
    INFO: 2,
    WARN: 3,
    DEBUG: 4
};
EBG.Semi.Logging.Logger.prototype = {
    setLevel: function(a) {
        this._level = a
    },
    timestamp: !1,
    debug: function(a) {
        this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.DEBUG, arguments)
    },
    info: function(a) {
        this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.INFO, arguments)
    },
    warn: function(a) {
        this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.WARN, arguments)
    },
    error: function(a) {
        this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.ERROR, arguments)
    },
    exception: function(a, b) {
        var c = "string" !== b ? this._format("Exception in {0}. message: {1}",
            a, b.message) : this._format("Exception in: {0}. message: {1}", a, b);
        b.stack && (c += this._format(" stack: {0}", b.stack));
        this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.ERROR, [c])
    },
    startGroup: function(a) {
        this._supportNesting() && this.startNestingGroupNames.push(a)
    },
    endGroup: function() {
        this._supportNesting() && 0 < this.endNestingGroupNames.length && window.console.groupEnd(this.endNestingGroupNames.pop())
    },
    _consoleAvailable: function() {
        try {
            return void 0 !== window && void 0 !== window.console
        } catch (a) {
            return !1
        }
    },
    _supportNesting: function() {
        return this._consoleAvailable() ? void 0 !== window.console.group : !1
    },
    _supportErrorMessage: function() {
        return void 0 !== window.console.error
    },
    _supportInfoMessage: function() {
        return void 0 !== window.console.info || void 0 !== window.opera
    },
    _supportWarnMessage: function() {
        return void 0 !== window.console.warn || void 0 !== window.opera
    },
    _supportObjectView: function() {
        return void 0 !== window.console.dir || void 0 !== window.opera
    },
    _callConsoleFunction: function(a, b) {
        var c = !1;
        switch (a) {
            case EBG.Semi.Logging.Logger.LoggerLevels.INFO:
                this._supportInfoMessage() &&
                    (window.console.info(b), c = !0);
                break;
            case EBG.Semi.Logging.Logger.LoggerLevels.WARN:
                this._supportWarnMessage() && (window.console.warn(b), c = !0);
                break;
            case EBG.Semi.Logging.Logger.LoggerLevels.ERROR:
                this._supportErrorMessage() && (consoleFunction = window.console.error(b), c = !0)
        }
        c || window.console.log(b)
    },
    _format: function(a) {
        for (var b = 1; b < arguments.length; b++) a = a.replace(RegExp("\\{" + (b - 1) + "\\}", "gi"), "" + arguments[b]);
        return a
    },
    _getTimestamp: function() {
        if (this.timestamp) return EBG.Semi.Infra.getTimestamp()
    },
    _reportToLog: function(a, b) {
        if (this._level >= a && this._consoleAvailable()) {
            var c = b[0];
            "[object String]" !== Object.prototype.toString.call(c) ? this._supportObjectView() || (c = c.toString()) : c = this._format.apply(null, b);
            this.timestamp && "[object String]" === Object.prototype.toString.call(c) && (c = this._getTimestamp() + ": " + c);
            if (void 0 === window.opera) {
                for (; this.startNestingGroupNames.length;) window.console.group(this.startNestingGroupNames[0]), this.endNestingGroupNames.push(this.startNestingGroupNames.shift());
                this._callConsoleFunction(a, c)
            } else opera.postError(c)
        }
    }
};
EBG.Semi.ServerCommunicator = function() {
    this._imgArr = [];
    for (i = 0; 10 > i; i++) this._imgArr.push(new Image)
};
EBG.Semi.ServerCommunicator.prototype = {
    reportUrlsList: function(a, b, c) {
        for (var d = 0; d < this._imgArr.length; d++) this.reportUrl(a, this._imgArr[d], b, c)
    },
    reportUrl: function(a, b, c, d) {
        if (0 < a.length) {
            var e = this;
            (function(g) {
                b.onload = function() {
                    c && d && setTimeout(function() {
                        c.apply(d, [null, g])
                    }, 1);
                    e.reportUrl(a, b, c, d)
                };
                b.onerror = function() {
                    c && d && setTimeout(function() {
                        c.apply(d, ["failed loading url", g])
                    }, 1);
                    e.reportUrl(a, b, c, d)
                };
                b.src = g
            })(a.shift())
        }
    }
};
EBGVT.RuleManager = function(a, b, c, d, e) {
    if (EBGVT.Light.Infra.isDefined(a)) this.versaTagObj = e, this._sessionId = b, this._diAppId = c || -1, this._usercookie = d || "", this._buildRulesArray(a)
};
EBGVT.RuleManager.prototype = {
    _rules: [],
    _rulesHitted: [],
    _buildRulesArray: function(a) {
        for (var b in a) this._rules.push(new EBGVT.Rule(a[b], {
            binding: this,
            func: this._onRuleHit
        }))
    },
    _onRuleHit: function(a) {
        if (this.versaTagObj) {
            -1 == EBGVT.Light.Infra.indexOfArray(this._rulesHitted, a) && this._rulesHitted.push(a);
            this._timeoutHandler && clearTimeout(this._timeoutHandler);
            var b = this;
            this._timeoutHandler = setTimeout(function() {
                b.versaTagObj.generateRequest(null, {
                    sessionId: b._sessionId,
                    browserEvent: b._rulesHitted,
                    diAppId: b._diAppId,
                    usercookie: b._usercookie
                }, !0);
                b._rulesHitted = []
            }, 1)
        }
    }
};
EBGVT.Events = EBGVT.Events || {};
EBGVT.Rule = function(a, b) {
    this._id = a.id;
    this._callback = b;
    this._createEvents(a);
    this._conditions = a.conditions || this._getDefaultConditionString()
};
EBGVT.Rule.prototype = {
    _createEvents: function(a) {
        this._events = {};
        var b = /e[0-9]/i,
            c;
        for (c in a)
            if (a.hasOwnProperty(c) && b.test(c)) try {
                EBGVT.Events[a[c].type] && (this._events[c] = new EBGVT.Events[a[c].type](c, a[c].data, {
                    func: this._eventMatchHandler,
                    binding: this
                }))
            } catch (d) {}
    },
    _getDefaultConditionString: function() {
        var a = [],
            b;
        for (b in this._events) a.push(b);
        return "(" + a.join("|") + ")"
    },
    _eventMatchHandler: function() {
        this._checkRuleHit(this._conditions) && this._callback.func.apply(this._callback.binding, [this._id]);
        this._resetEventStatus()
    },
    _resetEventStatus: function() {
        for (var a in this._events) this._events[a].reset()
    },
    _checkRuleHit: function(a) {
        try {
            for (var b = this._breakConditionString(a), a = 0; a < b.length; a++)
                if (!this._evaluateGroup(b[a])) return !1;
            return !0
        } catch (c) {
            return !1
        }
    },
    _evaluateGroup: function(a) {
        for (var b = 0; b < a.length; b++)
            if (this._evaluateEvent(a[b])) return !0;
        return !1
    },
    _evaluateEvent: function(a) {
        a = this._events[a];
        return 1 * (a && a.applied)
    },
    _breakConditionString: function(a) {
        for (var a = a.split("&"), b = 0; b < a.length; b++) {
            var c =
                a[b];
            a[b] = c.substr(1, c.length - 2).split("|")
        }
        return a
    }
};
EBGVT.Events.ElementEvent = function(a, b, c) {
    (EBGVT.Light.Infra.isDefined(b) || EBGVT.Light.Infra.isDefined(c)) && this.init(a, b, c)
};
EBGVT.Events.ElementEvent.prototype = {
    applied: !1,
    init: function(a, b, c) {
        var d = this;
        this._wins = this._getWindowsArray();
        var e = this._select(decodeURIComponent(b.selector));
        if ("loading" == document.readyState || !e.length) setTimeout(function() {
            d.init(a, b, c)
        }, 100);
        else {
            this._id = a;
            this._callback = c;
            for (var g = 0; g < e.length; g++) EBGVT.Light.Infra.addEventListener(e[g], b.eventName, function(a) {
                d.onEvent(a)
            })
        }
    },
    onEvent: function() {
        this.applied = !0;
        this._callback.func.apply(this._callback.binding, [this._id])
    },
    _select: function(a) {
        for (var b = [], c = 0; c < this._wins.length; c++) {
            var d = this._wins[c].document.querySelectorAll(a);
            if (d)
                for (var e = 0; e < d.length; e++) b.push(d[e])
        }
        return b
    },
    _getWindowsArray: function() {
        for (var a = window, b = [a]; a !== a.parent && a.self !== a.parent;) try {
            if (a.parent.document.domain) a = a.parent, b.push(a);
            else return b
        } catch (c) {
            break
        }
        return b
    },
    reset: function() {
        this.applied = !1
    }
};
EBGVT.Events.TimeEvent = function(a, b, c) {
    (EBGVT.Light.Infra.isDefined(b) || EBGVT.Light.Infra.isDefined(c)) && this.init(a, b, c)
};
EBGVT.Events.TimeEvent.prototype = {
    applied: !1,
    init: function(a, b, c) {
        this._id = a;
        this._callback = c;
        this._startCounting(b)
    },
    _startCounting: function(a) {
        var b = this;
        if (a) b._handler = setTimeout(function() {
            b.onEvent()
        }, a.threshold)
    },
    onEvent: function() {
        this.applied = !0;
        this._callback.func.apply(this._callback.binding, [this._id])
    },
    _handler: null,
    reset: function() {}
};
EBGUIP = "undefined" != typeof EBGUIP ? EBGUIP : {};
EBGUIP.Events = EBGUIP.Events || {};
EBGUIP.Events.EventName = {
    USER_ID_FOUND: "userIdFound",
    DOC_LOADED: "documentLoaded",
    EBUID_LOADED: "ebuidLoaded"
};
EBGUIP.Events.eventMgr = EBGUIP.Events.eventMgr || new EBG.Semi.Events.EventManager;
EBGUIP = "undefined" != typeof EBGUIP ? EBGUIP : {};
EBGUIP.UserIdProvider = function() {
    if ("undefined" != typeof gEBMainWindow && gEBMainWindow.providersData) this._providersData = gEBMainWindow.providersData;
    else if ("undefined" != typeof gEBMainWindow) this._providersData = {
        EBUidCache: {
            data: null,
            providerCalled: !1
        }
    }, gEBMainWindow.providersData = this._providersData
};
EBGUIP.ProvidersReversed = {
    e2: "EBUidCache"
};
EBGUIP.UserIdProvider.prototype = {
    _filter: null,
    _currTagData: null,
    _arrProvidersNamesUsed: null,
    _providers: {
        EBUidCache: {
            isUsed: !1,
            shouldSendData: !0
        }
    },
    _providersData: null,
    getUserIds: function(a) {
        this._filter = a.filter;
        this._init();
        this._currTagData = a;
        if (!this._currTagData.currDoc) this._currTagData.currDoc = document;
        this._arrProvidersNamesUsed = this._getValidProviderNames(a.uip);
        for (a = 0; a < this._arrProvidersNamesUsed.length; a++) this._providers[this._arrProvidersNamesUsed[a]].isUsed = !0;
        this._loadProviders()
    },
    _init: function() {
        for (var a in this._providers) this._providers[a].isUsed = !1
    },
    _loadProviders: function() {
        if (0 < this._arrProvidersNamesUsed.length) {
            var a = this._arrProvidersNamesUsed[0];
            if (this._providersData[a].providerCalled) this._getUserIdentification({
                providerName: a
            });
            else {
                EBGUIP.Events.eventMgr.subscribeToEvent(EBGUIP.Events.EventName.USER_ID_FOUND, this._getUserIdentification, this, this._filter);
                var b = this._buildProviderURL(a);
                this._currTagData.isSync ? (EBGUIP.Events.eventMgr.subscribeToEvent(EBGUIP.Events.EventName.DOC_LOADED,
                    this._providerLoaded, this, this._filter), EBG.Semi.Infra.loadFileByScriptElem(this._currTagData.currDoc, b, null, !0)) : EBG.Semi.Infra.loadFileByScriptElem(this._currTagData.currDoc, b, this._providerLoaded, !1, this, {
                    providerName: a
                })
            }
        }
    },
    _buildProviderURL: function(a) {
        a = this._currTagData.scriptsPath + "UserProviders" + this._currTagData.uipv + "/" + a + ".js"; - 1 == this._currTagData.scriptsPath.indexOf("http") && (a = this._getRequestProtocol(this._currTagData.ebPtcl) + a);
        return a
    },
    _getRequestProtocol: function(a) {
        if (a) return a;
        var a = "https://secure-",
            b = location.protocol;
        if ("javascript:" == b) try {
            b = parent.location.protocol
        } catch (c) {}
        "http:" == b && (a = b + "//");
        return a
    },
    _providerLoaded: function(a) {
        a = a.providerName; - 1 != EBG.Semi.Infra.indexOfArray(this._arrProvidersNamesUsed, a) && (new window.EBGUIP[a]).init(this._currTagData)
    },
    _getUserIdentification: function(a) {
        var b = EBG.Semi.Infra.indexOfArray(this._arrProvidersNamesUsed, a.providerName);
        if (-1 != b) {
            if (a.tokenName && a.id && this._providers[a.providerName].shouldSendData && !this._providersData[a.providerName].data) this._providersData[a.providerName].data =
                "&" + a.tokenName + "=" + a.id;
            this._providersData[a.providerName].providerCalled = !0;
            this._arrProvidersNamesUsed.splice(b, 1);
            0 == this._arrProvidersNamesUsed.length ? (a = {
                userIdStr: this._getProvidersData()
            }, EBG.Semi.Events.eventMgr.dispatchEvent(EBG.Semi.EventName.ALL_USER_ID_FOUND, a, this._filter)) : this._loadProviders()
        }
    },
    _getProvidersData: function() {
        var a = "",
            b;
        for (b in this._providersData) this._providers[b].isUsed && this._providers[b].shouldSendData && (a += this._providersData[b].data);
        return a
    },
    _getValidProviderNames: function(a) {
        for (var a =
                this._cleanUIPList(a), b = [], c = 0; c < a.length; c++) {
            var d = EBGUIP.ProvidersReversed["e" + a[c]];
            d && (b[b.length] = d)
        }
        return b
    },
    _cleanUIPList: function(a) {
        var b = [];
        if (a)
            for (var c = 0; c < a.length; ++c) EBGUIP.ProvidersReversed["e" + a[c]] && b.push(a[c]);
        return b
    }
};
EBG.Semi.AttributionEnum = function() {};
EBG.Semi.AttributionEnum.UrlParamNames = {
    ID: "onetagid",
    DISP_TYPE: "dispType",
    SYNC: "sync",
    ONETAG_URL: "ebOneTagURL",
    PAGE_URL: "pageurl",
    DEBUG_MODE: "debugmode",
    NO_SCRIPT: "ns",
    MOBILE: "mb",
    ACTIVITY_PARAMS: "activityValues",
    RETARGET_PARAMS: "retargetingValues",
    DYNAMIC_RETARGET_PARAMS: "dynamicRetargetingValues",
    CONDITIONAL_PARAMS: "acp",
    RANDOM: "rnd",
    SEC_CALL: "secCall",
    SESSION_ID: "sessionid",
    ORIG_URL_LENGTH: "origLength",
    SERVING_PIPE: "/Serving",
    PREV_SERVING_PIPE: "/BurstingPipe",
    BROWSER_EVENT: "tp_be",
    ADV_DEVICE_ID: "ebaddid",
    DI_APP_ID: "diappid",
    USER_COOKIE: "usercookie"
};
EBG.Semi.AttributionEnum.DisplayTypes = {
    IFRAME: "iframe",
    JAVASCRIPT: "js"
};
EBG.Semi.AttributionEnum.HttpProtocol = {
    HTTP: "http",
    HTTPS: "https"
};
EBGVT = "undefined" != typeof EBGVT ? EBGVT : {};
EBGVT.Light = EBGVT.Light || {};
EBGVT.Light.Infra = EBG.Semi.Infra;
EBGVT.Light.Logger = EBG.Semi.Logging.Logger;
EBGVT.EBGUIP = EBGUIP;
EBGVT.OneTagLogger = function() {};
EBGVT.OneTag = function(a) {
    if (a && a.$) this._onready = a.$;
    this.logNeeded = EBGVT.Light.Infra.getUrlParameter(EBGVT.Light.Logger.DebugMode) ? 1 : 0;
    this.oneTagLogger = new EBGVT.Light.Logger(EBGVT.Light.Infra.getUrlParameter(EBGVT.Light.Logger.DebugMode));
    this.uidProviders = new EBGVT.EBGUIP.UserIdProvider;
    this.oneTagLogger.timestamp = !0;
    this.serverCommunicator = this.serverCommunicator || new EBG.Semi.ServerCommunicator;
    this.pageUrl = null;
    this._init()
};
EBGVT.OneTag.prototype = {
    _userIdProvidersCalled: !1,
    _providers: null,
    _onpreready: [],
    _onready: [],
    isReady: !1,
    _scriptElement: null,
    _responseCount: 0,
    _isHandlingRequest: !1,
    _init: function() {
        if ((this._scriptElement = EBG.Semi.Infra.getCurrentScriptElement()) && this._scriptElement.options) this.options = this._scriptElement.options;
        this._getServerConfiguration(function(a) {
            if (a && !a.empty) this._oneTagObj = a;
            else if (window.versaTag) window.versaTag.sync = 0, this._oneTagObj = window.versaTag;
            else if (this.options && this.options.id) window.versaTag = {}, versaTag.id = this.options.id, versaTag.sync = 0, versaTag.dispType = "js", versaTag.ptcl = location.protocol || "https", versaTag.bsUrl = this.options.bsUrl || "bs.serving-sys.com/Serving", this._oneTagObj = window.versaTag;
            this._oneTagObj && (this.onready(this.options && this.options.onready), this._ready())
        })
    },
    _getServerConfiguration: function(a) {
        var b;
        try {
            b = this._getConfigurationPath()
        } catch (c) {
            a.apply(d, [null, c]);
            return
        }
        var d = this;
        EBG.Semi.Infra.ajax.get(b, {}, function(b) {
            try {
                var c = JSON.parse(b);
                c.developerScripts &&
                    c.developerScripts.preScript ? d.runDeveloperScript(c.developerScripts.preScript, function() {
                        a.apply(d, [d._parseConfig(c)])
                    }) : a.apply(d, [d._parseConfig(c)])
            } catch (f) {
                a.apply(d, [null, f])
            }
        }, !0)
    },
    _parseConfig: function(a) {
        var b = {};
        if (a.empty) return a;
        for (var c in a) "parameters" !== c && (b[c] = a[c]);
        var d = this.options || {};
        b.id = d.id || window.versaTag && versaTag.id || "unknown";
        b.sync = 0;
        b.dispType = d.dispType || a.dispType || "js";
        b.bsUrl = d.bsUrl || a.bsUrl || "bs.serving-sys.com/Serving";
        b.ptcl = d.ptcl || a.ptcl || this._detectProtocol();
        if (a && a.parameters) {
            if (d.parameters)
                for (var e in d.parameters) {
                    var g = d.parameters[e];
                    a.parameters[e] = a.parameters[e] || [];
                    for (var f = this._getFieldsFromGroup(a.parameters[e]), h = 0; h < g.length; h++) {
                        var k = g[h],
                            n = this._getObjField(k),
                            n = f.indexOf(n); - 1 == n ? a.parameters[e].push(k) : a.parameters[e][n] = k
                    }
                }
            e = a.parameters;
            a.parameters.dataLayer = d.dataLayer || a.parameters.dataLayer;
            if (this.options) this.options.dataLayer = a.parameters.dataLayer;
            b.dataLayer = a.parameters.dataLayer;
            b.activityParams = this._parameterParse(e.conversion,
                "conversion", a.parameters.dataLayer);
            b.dynamicRetargetParams = this._parameterParse(e.retargeting, "retargeting", a.parameters.dataLayer);
            b.conditionalParams = this._parameterParse(e.conditional, "conditional", a.parameters.dataLayer);
            if (window.versaTag) {
                a = ["activityParams", "dynamicRetargetParams", "conditionalParams"];
                for (h = 0; h < a.length; h++)
                    if (e = versaTag[a[h]])
                        for (c in e) EBGVT.Light.Infra.isDefined(e[c]) && null != e[c] && !EBGVT.Light.Infra.isDefined(b[a[h]][c]) && (b[a[h]][c] = e[c])
            }
        }
        return b
    },
    _getFieldsFromGroup: function(a) {
        for (var b = [], c = 0; c < a.length; c++)
            for (var d in a[c]) b.push(d);
        return b
    },
    _getObjField: function(a) {
        if (!a) return null;
        for (var b in a) return b
    },
    _parameterParse: function(a, b, c) {
        var d = {};
        if (!a) return d;
        "object" == EBG.Semi.Infra.typeOf(a) && (a = [a]);
        for (var e = 0; e < a.length; e++) {
            var g = a[e],
                f;
            for (f in g) {
                var h = this._getValue(f, g[f], b, c);
                EBGVT.Light.Infra.isDefined(h) && null != h && (d[f] = h)
            }
        }
        return d
    },
    _getValue: function(a, b, c, d) {
        "object" == EBG.Semi.Infra.typeOf(b) && (b = [b]);
        for (var e, g, f = 0; f < b.length; f++) {
            g = b[f];
            switch (g.type) {
                case "JS":
                    e =
                        EBG.Semi.Infra.getValueFromPath(g.path);
                    break;
                case "QS":
                    e = EBG.Semi.Infra.getQuerystringParam(g.key || g.path);
                    break;
                case "DL":
                    d && g.path && (e = EBG.Semi.Infra.getValueFromPath(d + "." + g.path));
                    break;
                case "CONST":
                    e = g.value
            }
            if (e) return this.OTTSend("variables", {
                category: c,
                variableName: a,
                type: g.type,
                path: g.path,
                value: e
            }), e
        }
        for (f = b.length - 1; 0 <= f; f--)
            if (g = b[f], g.def) return this.OTTSend("variables", {
                type: g.type,
                path: g.path,
                value: g.def + " (default)"
            }), g.def;
        return null
    },
    _getConfigurationPath: function() {
        var a = this.options &&
            this.options.bsUrl || this._extractDomainFromOneTagScript(),
            b = this.options && this.options.id || window.versaTag && window.versaTag.id,
            a = a.split("/")[0].replace("bs", "ds"),
            c = this._detectProtocol();
        "https:" === c && (a = "secure-" + a);
        return c + "//" + a + "/adServingData/" + this._getEnv(a) + "/TMClient/" + b.substr(b.length - 1, 1) + "/" + b
    },
    _extractDomainFromOneTagScript: function() {
        return -1 != this.getOneTagScript().src.indexOf("ds.serving-sys-int.com") ? "ds.serving-sys-int.com/Serving" : "ds.serving-sys.com/Serving"
    },
    _getEnv: function(a) {
        if (!a) return "";
        switch (a.toLowerCase().replace("secure-", "")) {
            case "ds.serving-sys-dev4.com":
                return "DEV4";
            case "ds.serving-sys-int.com":
                return "UAT";
            default:
                return "PROD"
        }
    },
    _detectProtocol: function() {
        var a;
        a = (a = this.options && this.options.ptcl || window.versaTag && window.versaTag.ptcl) ? a + ":" : location.protocol || "https:";
        return a.toLowerCase()
    },
    onready: function(a, b) {
        if (a)
            if (this.isReady) try {
                a.apply(this)
            } catch (c) {} else b ? this._onpreready.push(a) : this._onready.push(a)
    },
    _ready: function() {
        if (!this.isReady) {
            this.isReady = !0;
            for (var a = 0; a < this._onpreready.length; a++) this._onready.unshift(this._onpreready[a]);
            for (a = 0; a < this._onready.length; a++) try {
                this._onready[a].apply(this)
            } catch (b) {}
        }
    },
    getQuerystringConfiguration: function(a) {
        try {
            for (var b = {}, c = a.src.split("?")[1].split("&"), a = 0; a < c.length; a++) {
                var d = c[a].split("=");
                b[d[0]] = d[1]
            }
            b.dispType = b.dispType || "js";
            b.sync = 0;
            return b
        } catch (e) {
            return null
        }
    },
    generateRequest: function(a, b, c) {
        var d = this;
        this.isOneTagTestToolActive() && postMessage({
                key: "OTT",
                command: "oneTagFound",
                data: {}
            },
            "*");
        if (this.isOneTagTestToolActive() && null == this.getOTTDataCollectionOption()) postMessage({
            key: "OTT",
            command: "requestDataCollectionOption"
        }, "*"), d = this, setTimeout(function() {
            d.generateRequest(a, b, c)
        }, 100);
        else if (this._isHandlingRequest) d = this, setTimeout(function() {
            d.generateRequest(a, b, c)
        }, 100);
        else if (this._isHandlingRequest = !0, this._oneTagObj) {
            this.oneTagLogger.info("One Tag Started");
            this.pageUrl = this._oneTagObj.overridePageUrl || a;
            if (b && b.firstPartyServingDomain) this._oneTagObj.bsUrl = b.firstPartyServingDomain +
                EBG.Semi.AttributionEnum.UrlParamNames.SERVING_PIPE;
            var e = this._oneTagObj.id,
                g = b && b.sessionId ? b.sessionId : this.generateSessionId();
            this._oneTagObj.sessionId = g;
            var f = b && b.browserEvent ? "$$" + b.browserEvent.join("&") + "$$" : "",
                h = b && EBGVT.Light.Infra.isDefined(b.diAppId) ? b.diAppId : -1,
                k = b && EBGVT.Light.Infra.isDefined(b.usercookie) ? b.usercookie : "",
                f = this._generateBsURL(this._oneTagObj, this.pageUrl, c, g, f, h, k);
            this.oneTagLogger.info("Server URL: " + f);
            b && b.preServingTasks && 0 < b.preServingTasks.length && this._userIdProvidersCalled &&
                (f = this._addProviderUserId(f, b));
            this.fireRequest(e, g, f)
        } else if (a) this._isHandlingRequest = !1, versaTagObj.onready(function() {
            this.generateRequest(a, b, c)
        });
        else if (b && c) {
            f = document.location.href;
            if (b && b.firstPartyServingDomain) e = document.domain, g = e + location.pathname, e && 0 < e.length && (f = 0 < f.indexOf(g) ? f.replace(g, b.firstPartyServingDomain + EBG.Semi.AttributionEnum.UrlParamNames.SERVING_PIPE) : f.replace(e, b.firstPartyServingDomain));
            f = f.replace(EBG.Semi.AttributionEnum.UrlParamNames.DISP_TYPE + "=" + EBG.Semi.AttributionEnum.DisplayTypes.IFRAME,
                EBG.Semi.AttributionEnum.UrlParamNames.DISP_TYPE + "=" + EBG.Semi.AttributionEnum.DisplayTypes.JAVASCRIPT);
            f = f.replace("cn=ot", "cn=ot&" + EBG.Semi.AttributionEnum.UrlParamNames.SEC_CALL + "=1" + (b.sessionId ? "&sessionid=" + b.sessionId : ""));
            f = this._addProviderUserId(f, b);
            e = f.substr(f.indexOf(EBG.Semi.AttributionEnum.UrlParamNames.SYNC) + (EBG.Semi.AttributionEnum.UrlParamNames.SYNC + "=").length, 1);
            EBG.Semi.Infra.loadFileByScriptElem(document, f, function() {
                    this._handleResponse({
                        sendTime: (new Date).getTime()
                    })
                }, 1 *
                e, this)
        }
    },
    runDeveloperScript: function(a, b) {
        var c = this;
        try {
            if (a) {
                var d = /[\s\S]*<script.*?>([\s\S]*)<\/script>[\s\S]*/g;
                if (a.match(d)) {
                    var e = d.exec(a);
                    0 < e.length && EBG.Semi.Infra.executeTextByScriptElem(document, e[1]);
                    b && b.apply(c)
                } else c = this, EBG.Semi.Infra.loadFileByScriptElem(document, a, function() {
                    b && b.apply(c)
                }, 0, this)
            } else b && b.apply(c)
        } catch (g) {
            b && b.apply(c)
        }
    },
    fireRequest: function(a, b, c) {
        var d = this;
        this._oneTagObj.dispType.toLowerCase() == EBG.Semi.AttributionEnum.DisplayTypes.IFRAME ? (c += "&st=" +
            (new Date).getTime(), this._isHandlingRequest = !1, EBGVT.Light.Infra.createUnfriendlyIframe(c, this._oneTagObj.sync)) : EBG.Semi.Infra.loadFileByScriptElem(document, c, function(a, b, c) {
            return function() {
                d._handleResponse({
                    sessionId: a,
                    id: b,
                    sendTime: c
                })
            }
        }(b, a, (new Date).getTime()), 1 * this._oneTagObj.sync, this)
    },
    hasStorage: function() {
        try {
            return localStorage.setItem("eyeTesting", "eyeTesting"), localStorage.removeItem("eyeTesting"), !0
        } catch (a) {
            return !1
        }
    },
    getSessionId: function() {
        if (!this.hasStorage()) return this.generateSessionId();
        var a = null,
            b = new Date,
            c = localStorage.getItem("SZMKSessionId");
        if (c) try {
            if (c = JSON.parse(c), 18E5 >= b.getTime() - c.time) a = c.id
        } catch (d) {}
        a = a || this.generateSessionId();
        localStorage.setItem("SZMKSessionId", JSON.stringify({
            time: b.getTime(),
            id: a
        }));
        return a
    },
    generateSessionId: function() {
        var a, b = "12345678";
        a = "" + b.charAt(Math.floor(Math.random() * b.length));
        for (var b = "0123456789", c = 0; 18 > c; c++) a += b.charAt(Math.floor(Math.random() * b.length));
        return a
    },
    setActivityParam: function(a, b) {
        if (!this._oneTagObj.activityParams) this._oneTagObj.activityParams = {};
        this._oneTagObj.activityParams[a] = b
    },
    getActivityParam: function(a) {
        var b = null;
        this._oneTagObj.activityParams && this._oneTagObj.activityParams[a] && (b = this._oneTagObj.activityParams[a]);
        return b
    },
    clearActivityParam: function() {
        this._oneTagObj.activityParams = {}
    },
    setRetargetParam: function(a, b) {
        if (!this._oneTagObj.retargetParams) this._oneTagObj.retargetParams = {};
        this._oneTagObj.retargetParams[a] = b
    },
    getRetargetParam: function(a) {
        var b = null;
        this._oneTagObj.retargetParams && this._oneTagObj.retargetParams[a] &&
            (b = this._oneTagObj.retargetParams[a]);
        return b
    },
    clearRetargetParam: function() {
        this._oneTagObj.retargetParams = {}
    },
    setDynamicRetargetParam: function(a, b) {
        if (!this._oneTagObj.dynamicRetargetParams) this._oneTagObj.dynamicRetargetParams = {};
        this._oneTagObj.dynamicRetargetParams[a] = b
    },
    getDynamicRetargetParam: function(a) {
        var b = null;
        this._oneTagObj.dynamicRetargetParams && this._oneTagObj.dynamicRetargetParams[a] && (b = this._oneTagObj.dynamicRetargetParams[a]);
        return b
    },
    clearDynamicRetargetParam: function() {
        this._oneTagObj.dynamicRetargetParams = {}
    },
    setConditionalParam: function(a, b) {
        if (!this._oneTagObj.conditionalParams) this._oneTagObj.conditionalParams = {};
        this._oneTagObj.conditionalParams[a] = b
    },
    getConditionalParam: function(a) {
        var b = null;
        this._oneTagObj.conditionalParams && this._oneTagObj.conditionalParams[a] && (b = this._oneTagObj.conditionalParams[a]);
        return b
    },
    clearConditionalParam: function() {
        this._oneTagObj.conditionalParams = {}
    },
    _generateBsURL: function(a, b, c, d, e, g, f) {
        a.bsUrl = a.bsUrl || "bs.serving-sys.com/Serving";
        a.bsUrl = a.bsUrl.replace(EBG.Semi.AttributionEnum.UrlParamNames.PREV_SERVING_PIPE,
            EBG.Semi.AttributionEnum.UrlParamNames.SERVING_PIPE);
        var h = this._getProtocol(a.ptcl) + a.bsUrl + "?",
            h = this.isOneTagTestToolActive() ? h + "cn=ottp" : h + "cn=ot",
            h = h + ("&" + EBG.Semi.AttributionEnum.UrlParamNames.ID + "=" + a.id + "&" + EBG.Semi.AttributionEnum.UrlParamNames.DISP_TYPE + "=" + a.dispType + "&" + EBG.Semi.AttributionEnum.UrlParamNames.SYNC + "=" + a.sync);
        c && (h += "&" + EBG.Semi.AttributionEnum.UrlParamNames.SEC_CALL + "=1");
        "0" != d && (h += "&" + EBG.Semi.AttributionEnum.UrlParamNames.SESSION_ID + "=" + d);
        a.mobile && (h += "&" + EBG.Semi.AttributionEnum.UrlParamNames.MOBILE +
            "=" + a.mobile);
        e && (h += "&" + EBG.Semi.AttributionEnum.UrlParamNames.BROWSER_EVENT + "=" + e);
        0 <= g && (h += "&" + EBG.Semi.AttributionEnum.UrlParamNames.DI_APP_ID + "=" + g);
        f && (h += "&" + EBG.Semi.AttributionEnum.UrlParamNames.USER_COOKIE + "=" + f);
        a.advertiserDeviceId && (h += "&" + EBG.Semi.AttributionEnum.UrlParamNames.ADV_DEVICE_ID + "=" + a.advertiserDeviceId);
        b = b || EBGVT.Light.Infra.getWindowLocation();
        h += "&" + EBG.Semi.AttributionEnum.UrlParamNames.PAGE_URL + "=$$" + encodeURIComponent(b) + "$$";
        a.activityParams = a.activityParams || {};
        a.activityParams.Session = a.activityParams && a.activityParams.Session || this.getSessionId();
        h += this._prepareParamUrl(a.activityParams, EBG.Semi.AttributionEnum.UrlParamNames.ACTIVITY_PARAMS);
        h += this._prepareParamUrl(a.retargetParams, EBG.Semi.AttributionEnum.UrlParamNames.RETARGET_PARAMS);
        h += this._prepareParamUrl(a.conditionalParams, EBG.Semi.AttributionEnum.UrlParamNames.CONDITIONAL_PARAMS);
        h += this._prepareParamUrl(a.dynamicRetargetParams, EBG.Semi.AttributionEnum.UrlParamNames.DYNAMIC_RETARGET_PARAMS);
        this.isOneTagTestToolActive() && (h += "&tagsrunningmode=" + this.getOTTDataCollectionOption());
        a.dispType.toLowerCase() == EBG.Semi.AttributionEnum.DisplayTypes.IFRAME && (b = document.getElementById("ebOneTagUrlId")) && (h += "&" + EBG.Semi.AttributionEnum.UrlParamNames.ONETAG_URL + "=$$" + encodeURIComponent(b.src) + "$$");
        this.logNeeded && (h += "&" + EBGVT.Light.Logger.DebugMode + "=" + this.logNeeded);
        h += "&" + EBG.Semi.AttributionEnum.UrlParamNames.NO_SCRIPT + "=0";
        h += "&" + EBG.Semi.AttributionEnum.UrlParamNames.RANDOM + "=" + EBGVT.Light.Infra.getRandomNumber();
        a.debugData && (h += "&" + a.debugData);
        if (b = EBGVT.Light.Infra.getTopLevelReferrer(window)) c = EBGVT.Light.Infra.getTokenValueFromURL("ebReferrer", b), f || (f = EBGVT.Light.Infra.getTokenValueFromURL(EBG.Semi.AttributionEnum.UrlParamNames.USER_COOKIE, b)) && (h += "&usercookie=u2=" + f), f = c ? c : b, a.referralOnlyDomain && (a = document.createElement("a"), a.setAttribute("href", f), a.search && (f = a.toString().replace(a.search, ""))), a = EBGVT.Light.Infra.urlAvailableLength(h) - 48, 0 < a && (f.length > a && (f = f.substr(0, a)), h += "&referrer=$$" +
            f + "$$");
        return h
    },
    _prepareParamUrl: function(a, b) {
        var c = !0,
            d = "",
            e;
        for (e in a)
            if (a.hasOwnProperty(e) && (null != a[e] && b != EBG.Semi.AttributionEnum.UrlParamNames.CONDITIONAL_PARAMS && "" != a[e] || b == EBG.Semi.AttributionEnum.UrlParamNames.CONDITIONAL_PARAMS)) {
                var g = encodeURIComponent(e + "=" + a[e]);
                c ? (d += "&" + b + "=$$" + g, c = !1) : d += encodeURIComponent("&") + g
            }
        c || (d += "$$");
        return d
    },
    _getProtocol: function(a) {
        var b = "http://";
        return b = a && (a.toLowerCase() == EBG.Semi.AttributionEnum.HttpProtocol.HTTP || a.toLowerCase() == EBG.Semi.AttributionEnum.HttpProtocol.HTTP +
            ":") ? "http://" : a && a.toLowerCase() == EBG.Semi.AttributionEnum.HttpProtocol.HTTPS ? "https://" : "https:" == EBGVT.Light.Infra.getWindowLocation().protocol ? "https://" : "http://"
    },
    _getBsResponseContent: function(a) {
        a = a || this._oneTagObj;
        return bsResponseObj[a && a.id && a.sessionId ? "ot" + a.id + "-" + a.sessionId : Object.keys(bsResponseObj)[0]]
    },
    _handleResponse: function(a, b) {
        var c = this._getBsResponseContent(a);
        if (c && c.extensionData) {
            if (!a) a = {}, a.id = EBG.Semi.Infra.getQuerystringParam("onetagid"), a.sendTime = EBG.Semi.Infra.getQuerystringParam("st"),
                a.postMessageFromParentWin = !0, this.isOneTagTestToolActive = function() {
                    return !0
                };
            this.OTTHandleExtensionData(a.id, c.extensionData, (new Date).getTime(), a && a.sendTime, a.postMessageFromParentWin)
        }
        if (!c && 10 > b) b = b || 0, b++, setTimeout(function() {
            this._handleResponse.apply($this, [a, b])
        }, 20);
        else {
            this.oneTagLogger.info("Server response: " + c);
            if (c = this._deserializeResponse(c))
                if (c.preServingTasks && 0 < c.preServingTasks.length) {
                    var d = {};
                    d.uip = c.preServingTasks;
                    d.uipv = c.uipv;
                    d.scriptsPath = c.scriptsPath;
                    d.filter = c.sessionId;
                    this._oneTagObj ? (d.bs = this._oneTagObj.bsUrl, d.ebPtcl = this._getProtocol(this._oneTagObj.ptcl)) : (d.bs = document.domain, d.ebPtcl = this._getProtocol(document.location.protocol));
                    EBG.Semi.Events.eventMgr.subscribeToEvent(EBG.Semi.EventName.ALL_USER_ID_FOUND, this._getUserIdProviders, this, d.filter);
                    this.uidProviders.getUserIds(d)
                } else if (c.firstPartyServingDomain) this.generateRequest(this.pageUrl, c, !0);
            else {
                this._handleScriptTags(c.scripts);
                this._handleUrlTags(c.urls);
                if (c.customScript) this._handleCustomScript(c.customScript);
                else if (this._oneTagObj && this._oneTagObj.developerScripts && this._oneTagObj.developerScripts.postScript) this.runDeveloperScript(this._oneTagObj.developerScripts.postScript), this._oneTagObj.developerScripts.postScript = null;
                this._handleServerMessages(c.logMessages);
                this._handleClientRules(c.clientRules || this._oneTagObj && this._oneTagObj.clientRules, c.sessionId, c.diAppId, c.usercookie)
            }
            this._isHandlingRequest = !1
        }
    },
    _getUserIdProviders: function(a) {
        if (!this._userIdProvidersCalled) {
            this._userIdProvidersCalled = !0;
            if (a) {
                var b = this._deserializeResponse(this._getBsResponseContent());
                b.targetUrl = a.userIdStr
            }
            if (this._oneTagObj) this._oneTagObj.sync = 0;
            this.generateRequest(this.pageUrl, b, !0)
        }
    },
    _handleClientRules: function(a, b, c, d) {
        if (!this.ruleManager) this.ruleManager = new EBGVT.RuleManager(a, b, c, d, this)
    },
    _deserializeResponse: function(a) {
        var b;
        if ("object" == EBGVT.Light.Infra.typeOf(a)) b = a;
        else try {
            this.logNeeded && -1 != a.indexOf("/*") && (a = a.substring(0, a.lastIndexOf("/*"))), b = EBGVT.JSON.parse(unescape(a))
        } catch (c) {
            this.oneTagLogger.exception("OneTag._deserializeResponse",
                c)
        }
        return b
    },
    _handleCustomScript: function(a) {
        if (a && ("http:" == a.substring(0, 5).toLowerCase() || "https:" == a.substring(0, 6).toLowerCase())) {
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.src = a;
            EBGVT.Light.Infra.addScriptElement(b)
        }
    },
    _handleServerMessages: function(a) {
        if (a && 0 < a.length) {
            this.oneTagLogger.timestamp = !1;
            this.oneTagLogger.info("Server Messages:");
            for (var b = 0; b < a.length; b++) a[b] && this.oneTagLogger.info("  " + a[b]);
            this.oneTagLogger.timestamp = !0
        }
    },
    _handleScriptTags: function(a) {
        if (a)
            for (var b =
                    0; b < a.length; b++) a[b] && EBG.Semi.Infra.injectScript(unescape(a[b]))
    },
    _handleUrlTags: function(a) {
        a && function(b) {
            this.serverCommunicator.reportUrlsList(a, function(a, d) {
                this.OTTSend("timelines", {
                    id: this._oneTagObj && this._oneTagObj.id,
                    name: d,
                    type: "3rd Party URL",
                    receiveTime: (new Date).getTime(),
                    sendTime: b
                })
            }, this)
        }.apply(this, [(new Date).getTime()])
    },
    _addProviderUserId: function(a, b) {
        var c = EBGVT.Light.Infra.urlAvailableLength(a) - 48;
        b.targetUrl && (a = c > b.targetUrl.length ? a + b.targetUrl : a + ("&" + EEBG.Semi.AttributionEnum.UrlParamNames.ORIG_URL_LENGTH +
            "=" + (a.length + b.targetUrl.length + 2)));
        return a
    },
    isOneTagTestToolActive: function() {
        var a = !!document.querySelector("#ott_flag");
        return function() {
            return a
        }
    }(),
    getOTTDataCollectionOption: function() {
        var a = null;
        window.addEventListener("message", function(b) {
            if ((b.target || b.srcElement).location.href === window.location.href) try {
                var c = b.data;
                "OTT" == c.key && "setDataCollectionOption" == c.command && (a = "undefined" !== typeof c.data.dataCollectionOption ? c.data.dataCollectionOption : 1)
            } catch (d) {}
        });
        return function() {
            return a
        }
    }(),
    OTTSend: function(a, b) {
        if (this.isOneTagTestToolActive()) b.category = a, postMessage({
            key: "OTT",
            command: "addRows",
            category: a,
            data: b
        }, "*")
    },
    OTTHandleExtensionData: function(a, b, c, d, e) {
        if (this.isOneTagTestToolActive() && b) b.sendTime = d, b.receiveTime = c, b.tagManagerId = a, e ? parent.postMessage({
            key: "OTT",
            command: "parseServerResponse",
            data: b
        }, "*") : postMessage({
            key: "OTT",
            command: "parseServerResponse",
            data: b
        }, "*")
    },
    getOneTagScript: function() {
        var a;
        if (document.currentScript) a = document.currentScript;
        else {
            var b = document.getElementsByTagName("script");
            a = b[b.length - 1]
        }
        return function() {
            return a
        }
    }()
};
gEBMainWindow = window.gEBMainWindow || EBG.Semi.WindowUtil.getTopWindow();
var versaTagObj = new EBGVT.OneTag(window.versaTagObj);
versaTagObj.onready(function() {
    this.generateRequest()
}, !0);