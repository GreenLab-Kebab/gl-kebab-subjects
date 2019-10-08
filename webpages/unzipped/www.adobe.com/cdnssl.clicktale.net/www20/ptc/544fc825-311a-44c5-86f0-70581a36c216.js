// Copyright 2006-2019 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {}, ClickTaleGlobal.init = window.ClickTaleGlobal.init || {},
    function() {
        function t() {
            this.started = !1, this.stopCallbacks = [], this.readyCallbacks = [], this.startCallbacks = [], this.xhrCreatedCallback = function() {}, this.shouldStartMonitorCallback = function() {}
        }

        function n(t) {
            return !!t && t.constructor.prototype === Object.prototype
        }
        t.onReady = function(o, i) {
            var a = t.get(),
                e = a.shouldStartMonitorCallback();
            if ("undefined" === typeof e || !1 !== e) {
                var c = a.readyCallbacks,
                    r = c.length;
                a.diagnose("onready");
                for (var l = 0; l < r; l++) c[l]();
                if (!a.started) {
                    var d, s = a.config,
                        u = n(o),
                        f = function(t) {
                            a.started = !0, a.addApplication(t), a.startCallbacks.forEach(function(t) {
                                t()
                            })
                        };
                    u && (o.onStartCallback = f, (d = n(i)) ? s = i : d = !!s), new ClickTaleMonitor.App(147, u ? o : f, d ? s : o, d ? void 0 : i).onStop(function(n) {
                        a && (a.stopCallbacks.forEach(function(t) {
                            t()
                        }), t.instance = void 0)
                    })
                }
            } else t.instance = void 0
        };
        var o = t.prototype;
        if (o.addApplication = function(t) {
                this.monitor = t
            }, o.configure = function(t) {
                this.config = function t(o, i) {
                    for (var a in i = i || {}, o) {
                        var e = o[a];
                        e instanceof Array ? i[a] = e.slice() : n(e) ? i[a] = t(e, i[a]) : i[a] = e
                    }
                    return i
                }(t, this.config)
            }, o.onStart = function(t) {
                this.monitor && this.monitor.isMonitoring() ? t() : this.startCallbacks.push(t)
            }, o.onStop = function(t) {
                this.stopCallbacks.push(t)
            }, o.onReady = function(t) {
                this.readyCallbacks.push(t)
            }, o.onXhrCreated = function(t) {
                this.xhrCreatedCallback = t
            }, o.shouldStartMonitor = function(t) {
                this.shouldStartMonitorCallback = t
            }, o.diagnose = function(t) {
                var n = ClickTaleGlobal.diagnostics,
                    o = n && n.invoke;
                if ("function" == typeof o) o(n.monitor, t);
                else {
                    var i = n && n.monitor,
                        a = i && i[t];
                    "function" == typeof a && a()
                }
            }, t.get = function() {
                return t.instance || (t.instance = new t)
            }, Object.defineProperty) try {
            Object.defineProperty(t, "config", {
                get: function() {
                    return t.instance ? t.instance.config : null
                },
                enumerable: !0,
                configurable: !0
            })
        } catch (t) {}

        function i(n, o) {
            var i = t.instance;
            if (i && i.monitor) return i.monitor[n].apply(i.monitor, o)
        }
        var a = {
                stop: function() {
                    i("dispose")
                },
                restart: function(t, n) {
                    i("restart", [t, n])
                },
                shutdown: function() {
                    i("shutdown")
                },
                addEvent: function(t) {
                    i("addEvent", [t])
                },
                addPageTag: function(t, n, o) {
                    i("addPageTag", [t, 3, o || n])
                },
                ctData: function(t) {
                    i("ctData", [t])
                },
                addDynamicAction: function(t, n) {
                    i("addPageTag", [t, 4, n])
                },
                isMonitoring: function() {
                    return !!i("isMonitoring")
                },
                getPid: function() {
                    return 147
                },
                getState: function() {
                    return t.get().started ? i("getState") : "pending"
                },
                endVisit: function() {
                    i("endVisit")
                },
                Settings: t
            },
            e = window.ClickTaleMonitor || {};
        for (var c in a) e[c] = a[c];
        window.ClickTaleMonitor = e
    }(), ClickTaleGlobal.init.pmc = function(t) {
        var n = ClickTaleGlobal.init.monitorScriptName;
        var o, i, a, e, c = window.ClickTaleScriptSource + n.toLowerCase();
        ClickTaleMonitor.Settings.get().configure(t), n && (o = c, e = ClickTaleMonitor.Settings.get(), onloaded = function() {
            i.onreadystatechange = i.onload = null, e.diagnose("onloaded")
        }, (a = document.body || document.head) && ((i = function(t) {
            if (document.documentElement.namespaceURI) try {
                return document.createElementNS("http://www.w3.org/1999/xhtml", t)
            } catch (t) {}
            return document.createElement(t)
        }("script")).onreadystatechange = function() {
            "loaded" === i.readyState && onloaded()
        }, i.onload = onloaded, i.src = o, i.async = !0, i.type = "text/javascript", i.crossOrigin = "anonymous", e.diagnose("onloading"), a.appendChild(i)))
    };

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};


(function(d) {
    var dom = "h",
        spe = [92, 94, 36, 46, 124, 63, 42, 43, 40, 41, 91, 123],
        rep = [98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 119];
    for (var v, c, i = 0, len = d.length; i < len, c = d.charCodeAt(i); i++) {
        if (c >= 97 & c <= 122) {
            v = c + 7;
            v = v > 122 ? v - 26 : v;
            v = v % 2 == 0 ? v - 32 : v;
        } else if (c >= 48 & c <= 57) {
            v = 69 + (c - 48) * 2
        } else if (c == 45) {
            v = 65
        } else if (spe.indexOf(c) >= 0) {
            v = rep[spe.indexOf(c)]
        } else {
            v = c
        }
        dom += String.fromCharCode(v);
    }

    ClickTaleGlobal.init.isAllowed = (function() {
        var doms = ["HJyViHahHkViLhJVT", "HkViLhJVT", "HkViLLeJoHuNLhJVT", "HkViLNVskTPuLhJVT", "JVssLJahPwLyJLwaPVuZhJVT", "JyLHaPcLhHkViLhJVT", "mVyBTZhHkViLhJVT", "oLswehHkViLhJVT", "PwLyJLwaPVuZhJVT", "ZaHNLhHJJVBuaZhHkViLhJVT", "HkViLhJVT"];
        if (location.protocol == "file:") return false;
        for (var i = 0, curr; i < doms.length, curr = doms[i]; i++) {
            if (new RegExp("h" + curr + "$", "i").test(dom))
                return true;
        }
        return false;
    })()
})(window.location.host.toLowerCase().replace(/^((www)?\.)/i, ""));

ClickTaleSettings.Proxy = {
    WR: "ing-district.clicktale.net/ctn_v2/",
    ImageFlag: "ing-district.clicktale.net/ctn_v2/"
}
ClickTaleSettings.Protocol = {
    Method: "ImpactRecorder"
}
var autoMonitorConfig = {
    transport: {
        url: 'https://conductor.clicktale.net/monitor'
    }
};
ClickTaleGlobal.diagnostics = function() {
    function n(n, t, o) {
        if (n && t)
            for (var r in T) {
                var e = T[r];
                e.collect(t) && e.errors.push({
                    message: n,
                    url: t,
                    lineno: o
                })
            }
        return !!S && S(n, t, o)
    }

    function t(n) {
        return "function" == typeof n
    }

    function o() {
        return performance ? performance.now() : Date.now()
    }

    function r(n) {
        ++n.sampled > n.repeats ? g(n.name) : e(n)
    }

    function e(n) {
        var t = n.reporter() || {},
            o = n.errors.splice(0),
            r = n.level,
            e = n.url,
            l = {
                loaded: n.loaded,
                ready: n.ready,
                started: n.started,
                level: o.length ? "error" : r,
                errors: encodeURIComponent(JSON.stringify(o))
            };
        e && r !== k && (n.timeToLoad > 0 && (l.timeToLoad = n.timeToLoad), a(n, i(i(e + "?t=log&p=" + n.pid, l), t), o))
    }

    function i(n, t) {
        for (var o in t) n += "&" + I[o] + "=" + t[o];
        return n
    }

    function a(n, o, r) {
        var e = L.sendBeacon,
            i = function(n) {
                n.errors = r.concat(n.errors)
            };
        if (t(e)) e.call(L, o) || i(n);
        else {
            var a = new Image;
            a.onerror = a.ontimeout = function() {
                i(n)
            }, a.timeout = 3e4, a.src = o
        }
    }

    function l(n) {
        T[n] && (T[n].ready = !0)
    }

    function c(n) {
        var t = T[n];
        t && (t.loaded = !0, t.timeToLoad = t.loadStart ? o() - t.loadStart : 0), T[n] = t
    }

    function d(n) {
        T[n] && (T[n].loading = !0, T[n].loadStart = o())
    }

    function u(n) {
        T[n] && (T[n].started = !0)
    }

    function f(n) {
        T[n] && (T[n].starting = !0)
    }

    function s(n, o, r) {
        var e = window.ClickTaleMonitor;
        e && (I.monitorState = 40, I.isMonitoring = 42, t(e.getPid) && v(M, e.getPid(), n || "https://conductor.clicktale.net/monitor", /\/monitor-(latest|[\d\.]+).*\.js$/i, function() {
            var n = t(e.getState) && e.getState();
            return !this.errors.length && n.match(/^(chunk|end)$/i) && (this.level = k), {
                monitorState: n,
                isMonitoring: t(e.isMonitoring) && e.isMonitoring()
            }
        }, o || 5e3, r || 1))
    }

    function m() {
        g(M)
    }

    function v(t, o, r, e, i, a, l) {
        T[t] = T[t] || new p(t, o, r, e, i, a, l), y || (S = window.onerror, window.onerror = n, y = !0)
    }

    function g(n) {
        var t = T[n];
        t && (clearInterval(t.sampler), delete T[n]);
        for (var o in T) return;
        y = !1
    }

    function p(n, t, o, e, i, a, l) {
        var c = this;
        c.url = o, c.pid = t, c.errors = [], c.name = n, c.level = "alert", c.repeats = l, c.loadStart = c.sampled = c.timeToLoad = 0, c.loading = c.loaded = c.starting = c.started = c.ready = !1, c.reporter = function() {
            return i.call(c)
        }, c.collect = function(n) {
            return !!n.match(e)
        }, c.sampler = setInterval(function() {
            r(c)
        }, a)
    }

    function h(n, t, o) {
        var r = n && n.name,
            e = T[r];
        if (e) {
            var i = e[t];
            "function" == typeof i && i.apply(this, o)
        }
    }

    function w(n, t, o) {
        return {
            on: t,
            off: o,
            onready: function() {
                l(n)
            },
            onloaded: function() {
                c(n)
            },
            onloading: function() {
                d(n)
            },
            onstarted: function() {
                u(n)
            },
            onstarting: function() {
                f(n)
            }
        }
    }
    var y, S, T = {},
        L = navigator,
        k = "info",
        M = "monitor",
        I = {
            level: 0,
            loaded: 2,
            ready: 4,
            started: 6,
            errors: 8,
            timeToLoad: 12
        };
    return {
        monitor: w(M, s, m),
        invoke: h
    }
}();

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function() {
    var recordingThreshold = Math.random() * 100;

    return {
        isRecordingApproved: function(percentage) {
            return recordingThreshold <= percentage;
        }
    }
})();

if (typeof(ct_dispatcher) == 'undefined') {
    ct_dispatcher = {
        configName: null,
        cookieName: "ct_configName",
        getParameterByName: function(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS, "i");
            var results = regex.exec(window.location.search);
            if (results == null)
                return "";
            else
                return decodeURIComponent(results[1].replace(/\+/g, " "));
        },
        createCookie: function(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            } else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        },
        readCookie: function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
    };

    var ct_pdc_qs_val = ct_dispatcher.getParameterByName(ct_dispatcher.cookieName);
    if (ct_pdc_qs_val) {
        ct_dispatcher.createCookie(ct_dispatcher.cookieName, ct_pdc_qs_val, 14);
        ct_dispatcher.configName = ct_pdc_qs_val;
    } else {
        ct_dispatcher.configName = ct_dispatcher.readCookie(ct_dispatcher.cookieName);
    }
}

if (typeof(ClickTaleCreateDOMElement) != "function") {
    ClickTaleCreateDOMElement = function(tagName) {
        if (document.createElementNS) {
            return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
        }
        return document.createElement(tagName);
    }
}

if (typeof(ClickTaleAppendInHead) != "function") {
    ClickTaleAppendInHead = function(element) {
        var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
        parent.appendChild(element);
    }
}

if (typeof(ClickTaleXHTMLCompliantScriptTagCreate) != "function") {
    ClickTaleXHTMLCompliantScriptTagCreate = function(code) {
        var script = ClickTaleCreateDOMElement('script');
        script.setAttribute("type", "text/javascript");
        script.text = code;
        return script;
    }
}
ClickTaleGlobal.init.configFoundPTC = false;
if (ct_dispatcher.configName == 'DisableRecordings') {
    ClickTaleGlobal.init.configFoundPTC = true;
    (function() {
        var script = ClickTaleXHTMLCompliantScriptTagCreate("\/\/ Copyright 2006-2019 ClickTale Ltd., US Patent Pending\r\n\/\/ PID: 100\r\n\/\/ WR destination: www20\r\n\/\/ WR version: latest\r\n\/\/ Recording ratio: 0.5\r\n\r\n(function (){\r\n\tvar dependencyCallback;\r\n        var scriptSyncTokens = [\"wr\"];\r\n        var ct2Callback, isRecorderReady;\r\n    var dependencies = scriptSyncTokens.slice(0);\r\n    var clickTaleOnReadyList = window.ClickTaleOnReadyList || (window.ClickTaleOnReadyList = []);\r\n    var indexOf = (function(){if(Array.prototype.indexOf){return function(array,value){return array.indexOf(value)}}return function(array,value){var length=array.length;for(var i=0;i\u003clength;i++){if(array[i]===value){return i}}return -1}})();\r\n    function isValidToken(token) {\r\n        if (indexOf(scriptSyncTokens, token) \u003e -1) {\r\n            var index = indexOf(dependencies, token);\r\n\r\n            if (index \u003e -1) {\r\n                dependencies.splice(index, 1);\r\n                return true;\r\n            }\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    clickTaleOnReadyList.push(function () {\r\n        if (ct2Callback) {\r\n            ct2Callback();\r\n        }\r\n\r\n        isRecorderReady = true;\r\n    });\r\n\r\n    ClickTaleGlobal.scripts.dependencies = {\r\n        setDependencies: function (deps) {\r\n            scriptSyncTokens = deps;\r\n        },\r\n        onDependencyResolved: function (callback) {\r\n            dependencyCallback = callback;\r\n        },\r\n        notifyScriptLoaded: function (token) {\r\n            if (isValidToken(token)) {\r\n                if (dependencies.length === 0 \u0026\u0026 typeof dependencyCallback === \"function\") {\r\n                    dependencyCallback();\r\n                }\r\n            }\r\n        }\r\n    };\r\n\r\n    ClickTaleGlobal.scripts.integration = {\r\n        onReady: function (callback) {\r\n            if (isRecorderReady) {\r\n                callback();\r\n            }\r\n            else {\r\n                ct2Callback = callback;\r\n            }\r\n        }\r\n    };\r\n})();\r\n\r\n\r\n\r\nwindow.ClickTaleIsXHTMLCompliant = true;\r\nif (typeof (ClickTaleCreateDOMElement) != \"function\")\r\n{\r\n\tClickTaleCreateDOMElement = function(tagName)\r\n\t{\r\n\t\tif (document.createElementNS)\r\n\t\t{\r\n\t\t\treturn document.createElementNS(\u0027http:\/\/www.w3.org\/1999\/xhtml\u0027, tagName);\r\n\t\t}\r\n\t\treturn document.createElement(tagName);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleAppendInHead) != \"function\")\r\n{\r\n\tClickTaleAppendInHead = function(element)\r\n\t{\r\n\t\tvar parent = document.getElementsByTagName(\u0027head\u0027).item(0) || document.documentElement;\r\n\t\tparent.appendChild(element);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != \"function\")\r\n{\r\n\tClickTaleXHTMLCompliantScriptTagCreate = function(code)\r\n\t{\r\n\t\tvar script = ClickTaleCreateDOMElement(\u0027script\u0027);\r\n\t\tscript.setAttribute(\"type\", \"text\/javascript\");\r\n\t\tscript.text = code;\r\n\t\treturn script;\r\n\t}\r\n}\t\r\n\r\n\r\n\r\n\/\/ Start of user-defined pre WR code (PreLoad)\r\nwindow.ClicktaleDisableRecordingsConfig = true;\r\nif (window.ClickTaleMonitor) {\r\n\tvar settings = ClickTaleMonitor.Settings.get();\r\n\tsettings.shouldStartMonitor(function() {\r\n\t\treturn false;\r\n\t});\r\n}\r\nelse {\r\n\twindow.CEC = {\r\n\t\tonInit: function() {\r\n\t\t\ttypeof CEC.disable == \"function\" \u0026\u0026 CEC.disable();\r\n\t\t}\r\n\t};\r\n}\r\n\/\/ End of user-defined pre WR code\r\n\r\n\r\nvar isHttps = document.location.protocol == \u0027https:\u0027,\r\n\tscriptSource = window.ClickTaleScriptSource,\r\n\tpccSource = scriptSource;\r\n\r\nif (!scriptSource) {\r\n\twindow.ClickTaleScriptSource = isHttps ? \u0027https:\/\/cdnssl.clicktale.net\/www\/\u0027 : \u0027http:\/\/cdn.clicktale.net\/www\/\u0027;\r\n}\r\n\r\n\r\n\r\nwindow.ClickTalePrevOnReady = typeof window.ClickTaleOnReady == \u0027function\u0027 ? window.ClickTaleOnReady : void 0;\r\n\r\nwindow.ClickTaleOnReady = function() {\r\n\tvar PID=100, \r\n\t\tRatio=0.5, \r\n\t\tPartitionPrefix=\"www20\",\r\n\t\tSubsId=233200;\r\n\t\r\n\tif (window.navigator \u0026\u0026 window.navigator.loadPurpose === \"preview\") {\r\n       return;\r\n\t};\r\n\t\t\r\n\t\r\n\t\/\/ Start of user-defined header code (PreInitialize)\r\n\treturn;\r\n\t\/\/ End of user-defined header code (PreInitialize)\r\n    \r\n\t\r\n\twindow.ClickTaleIncludedOnDOMReady=true;\r\n\t\r\n\tClickTaleGlobal.init.isAllowed \u0026\u0026 ClickTale(PID, Ratio, PartitionPrefix, SubsId);\r\n\t\r\n\tif((typeof ClickTalePrevOnReady == \u0027function\u0027) \u0026\u0026 (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))\r\n\t{\r\n    \tClickTalePrevOnReady();\r\n\t}\r\n\t\r\n\t\r\n\t\/\/ Start of user-defined footer code\r\n\t\r\n\t\/\/ End of user-defined footer code\r\n\t\r\n}; \r\n(function() {\r\n\tvar div = ClickTaleCreateDOMElement(\"div\");\r\n\tdiv.id = \"ClickTaleDiv\";\r\n\tdiv.style.display = \"none\";\r\n\tdocument.body.appendChild(div);\r\n\r\n\t\r\n\t\r\n\tvar wrScript = ClickTaleCreateDOMElement(\"script\");\r\n\twrScript.crossOrigin = \"anonymous\";\t\r\n\twrScript.src = window.ClickTaleScriptSource + \u0027WR-latest.js\u0027;\r\n\twrScript.type = \u0027text\/javascript\u0027;\r\n\t\tClickTaleGlobal.init.isAllowed \u0026\u0026 document.body.appendChild(wrScript);\r\n})();\r\n\r\n\r\n\r\n\r\n\r\nwindow._uxa = window._uxa || [];   \r\nfunction ClickTaleEnableCS() {   \r\n    if (!document.querySelector(\u0027script[src*=\"\/0cd4b104cc329.js\"]\u0027)) {\r\n        _uxa.push([\u0027setPath\u0027, window.location.pathname + window.location.hash.replace(\u0027#\u0027, \u0027?__\u0027)]);\r\n        var mt = document.createElement(\"script\"); mt.type = \"text\/javascript\"; mt.async = true;\r\n        mt.src = \"\/\/t.clicktale.net\/uxa\/0cd4b104cc329.js\";\r\n        document.getElementsByTagName(\"head\")[0].appendChild(mt);\r\n    }\r\n}\t\r\n\r\nvar ctVEconfig={VE_BASE_URL:\"https:\/\/ve-cec-na1.app.clicktale.com\/\",VE_PROXY_BASE_URL:\"https:\/\/vep-cec-na1.app.clicktale.com\/\"};!function(){try{var e=window.chrome,t=window.navigator\u0026\u0026window.navigator.vendor;null!=e\u0026\u0026\"Google Inc.\"===t\u0026\u0026window.addEventListener\u0026\u0026addEventListener(\"message\",o,!1);var n=window.location.search.substring(window.location.search.indexOf(\"ctAdvancedSearch=\")).split(\"\u0026\")[0].split(\"=\");\"ctAdvancedSearch\"==n[0]\u0026\u0026\"true\"==n[1]\u0026\u0026c(\"ctAdvancedSearchModule\",ctVEconfig.VE_BASE_URL+\"client\/dist\/advancedSearchModule.js\")}catch(e){}function o(e){var t;try{t=JSON.parse(e.data)}catch(e){return}!1!==new RegExp(\"(app[.]clicktale[.]com)($|:)\").test(e.origin)\u0026\u0026(window.ct_ve_parent_window=e.source,\"CT_testRules\"==t.name\u0026\u0026(sessionStorage.setItem(\"CT_testRules\",!0),console.log((new Date).toJSON(),\"PostPTC: testRules \",sessionStorage.getItem(\"CT_testRules\")),window.ct_ve_parent_window.postMessage({name:\"testRulesRecieved\",params:{}},\"*\")),\"CTload_ve\"===t.function\u0026\u0026\"function\"==typeof ClickTaleGetPID\u0026\u0026null!==ClickTaleGetPID()\u0026\u0026(function(){console.log((new Date).toJSON(),\"PostPTC: start loading test rules\");var e=ClickTaleGetPID();c(\"ctTestRulesModule\",ctVEconfig.VE_BASE_URL+\"rulesEngineContent\/TestPCC\/\"+e,function(){sessionStorage.setItem(\"CT_testRules_Loaded\",!0),console.log((new Date).toJSON(),\"PostPTC: test rules loaded\")})}(),c(\"ctVisualEditorClientModule\",ctVEconfig.VE_BASE_URL+\"client\/dist\/veClientModule.js\")))}function c(e,t,n){var o=function(e){return document.createElementNS?document.createElementNS(\"http:\/\/www.w3.org\/1999\/xhtml\",e):document.createElement(e)}(\"script\");o.setAttribute(\"type\",\"text\/javascript\"),o.setAttribute(\"id\",e),o.src=t,void 0!==n\u0026\u0026(o.onload=n),document.getElementById(e)||document.body.appendChild(o)}}();");
        document.body.appendChild(script);
    })();
}

if (!ClickTaleGlobal.init.configFoundPTC) {
    (function() {
        var script = ClickTaleXHTMLCompliantScriptTagCreate("\/\/ Copyright 2006-2019 ClickTale Ltd., US Patent Pending\r\n\/\/ PID: 100\r\n\/\/ WR destination: www20\r\n\/\/ WR version: latest\r\n\/\/ Recording ratio: 0.5\r\n\r\n(function (){\r\n\tvar dependencyCallback;\r\n        var scriptSyncTokens = [\"wr\"];\r\n        var ct2Callback, isRecorderReady;\r\n    var dependencies = scriptSyncTokens.slice(0);\r\n    var clickTaleOnReadyList = window.ClickTaleOnReadyList || (window.ClickTaleOnReadyList = []);\r\n    var indexOf = (function(){if(Array.prototype.indexOf){return function(array,value){return array.indexOf(value)}}return function(array,value){var length=array.length;for(var i=0;i\u003clength;i++){if(array[i]===value){return i}}return -1}})();\r\n    function isValidToken(token) {\r\n        if (indexOf(scriptSyncTokens, token) \u003e -1) {\r\n            var index = indexOf(dependencies, token);\r\n\r\n            if (index \u003e -1) {\r\n                dependencies.splice(index, 1);\r\n                return true;\r\n            }\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    clickTaleOnReadyList.push(function () {\r\n        if (ct2Callback) {\r\n            ct2Callback();\r\n        }\r\n\r\n        isRecorderReady = true;\r\n    });\r\n\r\n    ClickTaleGlobal.scripts.dependencies = {\r\n        setDependencies: function (deps) {\r\n            scriptSyncTokens = deps;\r\n        },\r\n        onDependencyResolved: function (callback) {\r\n            dependencyCallback = callback;\r\n        },\r\n        notifyScriptLoaded: function (token) {\r\n            if (isValidToken(token)) {\r\n                if (dependencies.length === 0 \u0026\u0026 typeof dependencyCallback === \"function\") {\r\n                    dependencyCallback();\r\n                }\r\n            }\r\n        }\r\n    };\r\n\r\n    ClickTaleGlobal.scripts.integration = {\r\n        onReady: function (callback) {\r\n            if (isRecorderReady) {\r\n                callback();\r\n            }\r\n            else {\r\n                ct2Callback = callback;\r\n            }\r\n        }\r\n    };\r\n})();\r\n\r\n\r\nwindow.ClickTaleGlobal.VisualEditorDesignerExists = !!0;\r\n\r\nwindow.ClickTaleIsXHTMLCompliant = true;\r\nif (typeof (ClickTaleCreateDOMElement) != \"function\")\r\n{\r\n\tClickTaleCreateDOMElement = function(tagName)\r\n\t{\r\n\t\tif (document.createElementNS)\r\n\t\t{\r\n\t\t\treturn document.createElementNS(\u0027http:\/\/www.w3.org\/1999\/xhtml\u0027, tagName);\r\n\t\t}\r\n\t\treturn document.createElement(tagName);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleAppendInHead) != \"function\")\r\n{\r\n\tClickTaleAppendInHead = function(element)\r\n\t{\r\n\t\tvar parent = document.getElementsByTagName(\u0027head\u0027).item(0) || document.documentElement;\r\n\t\tparent.appendChild(element);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != \"function\")\r\n{\r\n\tClickTaleXHTMLCompliantScriptTagCreate = function(code)\r\n\t{\r\n\t\tvar script = ClickTaleCreateDOMElement(\u0027script\u0027);\r\n\t\tscript.setAttribute(\"type\", \"text\/javascript\");\r\n\t\tscript.text = code;\r\n\t\treturn script;\r\n\t}\r\n}\t\r\n\r\n\r\n\r\n\/\/ Start of user-defined pre WR code (PreLoad)\r\n\/\/matches polyfill\r\nElement.prototype.matches = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || function(s) {\r\n    var matches = (this.document || this.ownerDocument).querySelectorAll(s),\r\n        i = matches.length;\r\n    while (--i \u003e= 0 \u0026\u0026 matches.item(i) !== this) {};\r\n    return i \u003e -1;\r\n};\r\n\r\n\/\/PTC Code Version 9.5\r\n\r\nwindow.ClickTaleSettings = window.ClickTaleSettings || {};\r\nwindow.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};\r\nwindow.ClickTaleSettings.Compression = window.ClickTaleSettings.Compression || {};\r\nif (document.readyState === \u0027complete\u0027) {\r\n    window.ClickTaleIncludedOnWindowLoad = true;\r\n}\r\nwindow.ClickTaleIncludedOnDOMReady = true;\r\nwindow.ClickTaleSettings.PTC.EnableChangeMonitor = false;\r\nwindow.ClickTaleSettings.PTC.UploadPageHappened = false;\r\nwindow.ClickTaleSettings.PTC.IsMobile = false;\r\nwindow.ClickTaleUIDCookieName = \u0027WRUIDAWS\u0027;\r\n\r\nwindow.ClickTaleSettings.PTC.runPIIRemovedEvent = function() {\r\n    if (typeof ClickTaleEvent == \u0027function\u0027) {\r\n        ClickTaleEvent(\u0027PII was removed\u0027);\r\n    }\r\n}\r\n\r\n\/\/ADOBEMAIN-198\r\nif (window.ClickTaleMonitor) {\r\n    var settings = ClickTaleMonitor.Settings.get();\r\n    settings.shouldStartMonitor(function() {\r\n        if (\/adobe_optout=1\/g.test(document.cookie)) {\r\n            return false;\r\n        }\r\n        return true;\r\n    })\r\n}\r\n\r\nwindow.ClickTaleSettings.CheckAgentSupport = function(f, v) {\r\n    window.ClickTaleSettings.PTC.Useragent = window.navigator.userAgent.toLowerCase();\r\n    \/\/ADOBEMAIN-198\r\n    if (\/adobe_optout=1\/g.test(document.cookie)) {\r\n        return false;\r\n    } else if (v.t == v.ED) {\r\n        window.ClickTaleSettings.Compression.Async = false;\r\n    }\r\n    if (v.m) {\r\n        window.ClickTaleSettings.PTC.IsMobile = true;\r\n    }\r\n    if (!(v.t == v.IE \u0026\u0026 v.v == 10) \u0026\u0026 !window.ClickTaleSettings.PTC.Useragent.match(\/(gomezagent|apm synthetic agent|ruxitsynthetic|ktxn|khte|ktht|dynatrace)\/g)) {\r\n        window.ClickTaleSettings.PTC.EnableChangeMonitor = true;\r\n        window.ClickTaleSettings.PTC.ConfigChangeMonitor();\r\n    }\r\n    var fv = f(v);\r\n    window.ClickTaleSettings.PTC.okToRunPCC = fv;\r\n    return fv;\r\n};\r\n\r\nwindow.ClickTaleSettings.PTC.startsWith = function(strToTest, str) {\r\n    return strToTest.lastIndexOf(str, 0) === 0;\r\n};\r\n\r\nwindow.ClickTaleSettings.PTC.RulesObj = [{\r\n    selector: \"input[type=\\\"text\\\"], input[type=\\\"tel\\\"], input[type=\\\"email\\\"]\",\r\n    changeMon: {\r\n        Attributes: [\u0027value\u0027],\r\n        Text: false\r\n    },\r\n    rewriteApi: {\r\n        Attributes: [\u0027value\u0027],\r\n        Text: false\r\n    }\r\n}, {\r\n    selector: \".ctHidden\",\r\n    changeMon: {\r\n        Attributes: [\u0027value\u0027],\r\n        Text: true\r\n    },\r\n    rewriteApi: {\r\n        Attributes: [\u0027value\u0027],\r\n        Text: true\r\n    }\r\n}, {\r\n    selector: \".page_start .thankyou h2, .profile-section .name, .globalnav__js__menu-bar__item__title--profile, .globalnav__profile__user-info__identity__name, .globalnav__profile__user-info__identity__email, \\\r\n\t\tdiv.profile-details-snippet \u003e h1, #overview-account td.ng-binding, #overview-account td div.ng-binding, [ng-if=\u0027phoneNumber\u0027], #user-email, #user-phone, #user-address div.ng-binding\",\r\n    changeMon: {\r\n        Attributes: false,\r\n        Text: true\r\n    },\r\n    rewriteApi: {\r\n        Attributes: false,\r\n        Text: true\r\n    }\r\n}, {\r\n    selector: \".Profile-name\",\r\n    changeMon: {\r\n        Attributes: false,\r\n        Text: true\r\n    },\r\n    rewriteApi: {\r\n        Attributes: false,\r\n        Text: true\r\n    }\r\n}, {\r\n    selector: \".Profile-email\",\r\n    changeMon: {\r\n        Attributes: [\u0027title\u0027],\r\n        Text: true\r\n    },\r\n    rewriteApi: {\r\n        Attributes: [\u0027title\u0027],\r\n        Text: true\r\n    }\r\n}, {\r\n    selector: \".Profile-avatar\",\r\n    changeMon: {\r\n        Attributes: [\u0027style\u0027],\r\n        Text: true\r\n    },\r\n    rewriteApi: {\r\n        Attributes: [\u0027style\u0027],\r\n        Text: true\r\n    }\r\n}, {\r\n    selector: \".Profile-thumbnail\",\r\n    changeMon: {\r\n        Attributes: [\u0027style\u0027],\r\n        Text: true\r\n    },\r\n    rewriteApi: {\r\n        Attributes: [\u0027style\u0027],\r\n        Text: true\r\n    }\r\n}, {\r\n    selector: \".ui-corner-all a, .ui-corner-all a span\",\r\n    changeMon: {\r\n        Attributes: false,\r\n        Text: true\r\n    },\r\n    rewriteApi: {\r\n        Attributes: false,\r\n        Text: true\r\n    }\r\n}];\r\n\r\nwindow.ClickTaleSettings.PTC.RulesObjRemoveEls = [];\r\n\r\n(function() {\r\n    if (typeof window.ClickTalePIISelector === \u0027string\u0027 \u0026\u0026 window.ClickTalePIISelector != \u0027\u0027) {\r\n        try {\r\n            var domNodes = document.querySelectorAll(window.ClickTalePIISelector);\r\n            if (domNodes) {\r\n                window.ClickTaleSettings.PTC.RulesObj.push({\r\n                    selector: window.ClickTalePIISelector,\r\n                    changeMon: {\r\n                        Attributes: [\u0027value\u0027],\r\n                        Text: true\r\n                    },\r\n                    rewriteApi: {\r\n                        Attributes: [\u0027value\u0027],\r\n                        Text: true\r\n                    }\r\n                });\r\n            }\r\n        } catch (err) {}\r\n    }\r\n})();\r\n\r\nwindow.ClickTaleSettings.PTC.AssetManager = {\r\n    isActive: true,\r\n    isNeedForImg: false,\r\n    subscriberId: \u0027233200\u0027,\r\n    pid: \u0027100\u0027,\r\n    storageUrl: \u0027https:\/\/s3.amazonaws.com\/nv-p1-s3-assets-01\/\u0027,\r\n    prefixSpecialCharacters: false,\r\n    getPrefixUrl: function() {\r\n        return this.storageUrl + this.subscriberId + \u0027\/\u0027 + this.pid;\r\n    },\r\n    getFullURL: function(type, url) {\r\n        var AMUrl = \u0027\u0027\r\n        if (url) {\r\n            switch (type) {\r\n                case \u0027css\u0027:\r\n                    AMUrl = this.getPrefixUrl() + \u0027\/CSS\/\u0027 + url.replace(\/:\\\/\\\/\/g, \"\/\").replace(\/%20\/g, \" \");\r\n                    if (this.prefixSpecialCharacters \u0026\u0026 this.prefixSpecialCharacters.test(AMUrl)) {\r\n                        AMUrl = AMUrl.replace(\/\\?\/g, \"%253F\").replace(\/\\\u0026\/g, \"%26\").replace(\/\\=\/g, \"%3D\");\r\n                    } else {\r\n                        AMUrl = AMUrl.replace(\/\\?.*\/g, \"\");\r\n                    }\r\n                    break;\r\n                case \u0027image\u0027:\r\n                    AMUrl = this.getPrefixUrl() + \u0027\/IMAGE\/\u0027 + url.replace(\/:\\\/\\\/\/g, \"\/\").replace(\/%20\/g, \" \");\r\n                    break;\r\n            }\r\n\r\n        }\r\n        return !!AMUrl ? AMUrl : false;\r\n    },\r\n    makeChanges: function(bodyClone) {\r\n        if (this.pid \u0026\u0026 this.subscriberId) {\r\n            Array.prototype.forEach.call(bodyClone.querySelectorAll(\u0027ctdep-link[href][rel*=\"stylesheet\"]\u0027), function(el, ind) {\r\n                var hrefAttr = el.getAttribute(\u0027href\u0027);\r\n                if (hrefAttr.indexOf(window.ClickTaleSettings.PTC.AssetManager.storageUrl) == -1) {\r\n                    if (hrefAttr.indexOf(\u0027http\u0027) == -1) {\r\n                        var hrefLive = document.querySelector(\u0027link[href=\"\u0027 + hrefAttr + \u0027\"]\u0027);\r\n                        if (hrefLive \u0026\u0026 hrefLive.href) {\r\n                            hrefAttr = hrefLive.href;\r\n                        }\r\n                    }\r\n                    var finalCssURL = window.ClickTaleSettings.PTC.AssetManager.getFullURL(\u0027css\u0027, hrefAttr);\r\n                    el.setAttribute(\u0027href\u0027, finalCssURL);\r\n                }\r\n            });\r\n            if (this.isNeedForImg) {\r\n                Array.prototype.forEach.call(bodyClone.querySelectorAll(\u0027ctdep-img[src]\u0027), function(el, ind) {\r\n                    var srcAttr = el.getAttribute(\u0027src\u0027);\r\n                    if (srcAttr.indexOf(window.ClickTaleSettings.PTC.AssetManager.storageUrl) == -1) {\r\n                        if (srcAttr.indexOf(\u0027http\u0027) == -1) {\r\n                            var srcLive = document.querySelector(\u0027img[src=\"\u0027 + srcAttr + \u0027\"]\u0027);\r\n                            if (srcLive \u0026\u0026 srcLive.src) {\r\n                                srcAttr = srcLive.src;\r\n                            }\r\n                        }\r\n                        var finalImageURL = window.ClickTaleSettings.PTC.AssetManager.getFullURL(\u0027image\u0027, srcAttr);\r\n                        el.setAttribute(\u0027src\u0027, finalImageURL);\r\n                    }\r\n                });\r\n            }\r\n        }\r\n    }\r\n};\r\n\r\nwindow.ClickTaleSettings.PTC.cloneNodeIE9 = function(innerHTML) {\r\n    if (innerHTML instanceof Element) {\r\n        innerHTML = innerHTML.innerHTML;\r\n    }\r\n\r\n    var reg = \/\u003c(area|base|br|col|command|embed|hr|input|keygen|link|menuitem|meta|param|source|track|wbr|img)[^\u003e]*\u003e\/gi;\r\n    var newNode = document.createElement(\u0027div\u0027);\r\n    var docFrag = document.createDocumentFragment();\r\n    docFrag.appendChild(newNode);\r\n    if (document.documentMode) {\r\n        innerHTML = innerHTML\r\n            .replace(\/\\$\/g, \u0027$$$$\u0027)\r\n            .replace(\/(\u003csvg[\\s\\S]+?\u003c\\\/svg\u003e)\/gi, function(m, g1) {\r\n                if (g1) {\r\n                    return \u0027\u003c!--clicktalesvgreplace \u0027 + g1.replace(\/\u003c!--[\\s\\S]+?--\u003e\/g, \u0027\u0027) + \u0027 --\u003e\u0027;\r\n                }\r\n                return m;\r\n            });\r\n    }\r\n    innerHTML = innerHTML\r\n        .replace(\/\u003cscript\\b([^\u003e]*)\u003e([\\s\\S]*?)\u003c\\\/script\u003e\/gi, \u0027\u003cscript\u003e\u003c\\\/script\u003e\u0027)\r\n        .replace(\/(\u003cdiv id=\"?ClickTaleDiv\"?[^\u003e]+\u003e)\\s*\u003cscript[^\u003e]+\u003e\u003c\\\/script\u003e\\s*(\u003c\\\/div\u003e)\/i, \u0027$1$2\u0027)\r\n        .replace(reg, \u0027$\u0026\u003c\\\/$1\u003e\u0027)\r\n        .replace(\/(\u003c\\\/?)([A-Za-z])\/g, \u0027$1ctdep-$2\u0027)\r\n        .replace(\/ctdep-style\/gi, \u0027style\u0027);\r\n\r\n    newNode.innerHTML = innerHTML;\r\n\r\n    return newNode;\r\n};\r\n\r\nwindow.ClickTaleSettings.PTC.ConfigChangeMonitor = function() {\r\n\r\n    if (window.ClickTaleSettings.PTC.EnableChangeMonitor) {\r\n\r\n        var a = document.createElement(\"script\"),\r\n            s = document.getElementsByTagName(\"script\")[0];\r\n        a.async = true;\r\n        a.crossOrigin = \"anonymous\";\r\n        a.type = \"text\/javascript\";\r\n        a.src = \"https:\/\/cdnssl.clicktale.net\/www\/ChangeMonitor-latest.js\";\r\n        s.parentNode.insertBefore(a, s);\r\n\r\n        window.ClickTaleSettings.ChangeMonitor = {\r\n            Enable: true,\r\n            LiveExclude: true,\r\n            AddressingMode: \"id\",\r\n            OnReadyHandler: function(changeMonitor) {\r\n                changeMonitor.observe();\r\n                if (typeof window.ClickTaleCMSelector === \u0027string\u0027 \u0026\u0026 window.ClickTaleCMSelector != \u0027\u0027) {\r\n                    changeMonitor.exclude({\r\n                        selector: window.ClickTaleCMSelector,\r\n                        multiple: true\r\n                    });\r\n                }\r\n\r\n                var CMRemrule = window.ClickTaleSettings.PTC.RulesObjRemoveEls;\r\n                if (CMRemrule) {\r\n                    for (var i = 0; i \u003c CMRemrule.length; i++) {\r\n                        var rule = CMRemrule[i];\r\n                        var CMlocation = rule[\u0027location\u0027];\r\n                        if ((!CMlocation || (CMlocation \u0026\u0026 document.location[CMlocation[\u0027prop\u0027]].toLowerCase().search(CMlocation.search) != -1))) {\r\n                            if (rule.changeMon) {\r\n                                changeMonitor.exclude(rule.changeMon);\r\n                            }\r\n                            if (rule.changeMonLive) {\r\n                                changeMonitor.exclude({\r\n                                    selector: rule.changeMonLive,\r\n                                    multiple: true\r\n                                });\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            },\r\n            OnBeforeReadyHandler: function(settings) {\r\n                settings.Enable = window.ClickTaleGetUID ? !!ClickTaleGetUID() : false;\r\n                return settings;\r\n            },\r\n            Filters: {\r\n                MaxBufferSize: 1000000,\r\n                MaxElementCount: 10000\r\n            },\r\n            PII: {\r\n                Text: [],\r\n                Attributes: [{\r\n                    selector: \"#download_frame, img.profile-image, img.globalnav__js__menu-bar__item__profile--avatar\",\r\n                    transform: function(el) {\r\n                        var attrs = el.attributes;\r\n                        var attrsToReturn = {};\r\n                        for (var i = 0; i \u003c attrs.length; i++) {\r\n                            var name = attrs[i].nodeName;\r\n                            attrsToReturn[name] = attrs[i].nodeValue;\r\n                        }\r\n                        if (attrsToReturn[\u0027src\u0027]) {\r\n                            attrsToReturn[\u0027src\u0027] = \u0027\u0027;\r\n                        }\r\n                        return attrsToReturn;\r\n                    }\r\n                }]\r\n            }\r\n        }\r\n\r\n        window.ClickTaleSettings.ChangeMonitor.AutoExclude = {\r\n            Enable: true,\r\n            Repeats: 10,\r\n            Interval: 200\r\n        };\r\n\r\n        var RulesObj = window.ClickTaleSettings.PTC.RulesObj;\r\n        if (RulesObj) {\r\n            window.ClickTaleSettings.ChangeMonitor.PII.Text = window.ClickTaleSettings.ChangeMonitor.PII.Text || [];\r\n            window.ClickTaleSettings.ChangeMonitor.PII.Attributes = window.ClickTaleSettings.ChangeMonitor.PII.Attributes || [];\r\n            for (var i = 0; i \u003c RulesObj.length; i++) {\r\n                var CMrule = RulesObj[i][\u0027changeMon\u0027];\r\n                var CMlocation = RulesObj[i][\u0027location\u0027];\r\n                if (!CMrule || (CMlocation \u0026\u0026 document.location[CMlocation[\u0027prop\u0027]].toLowerCase().search(CMlocation.search) === -1)) {\r\n                    continue;\r\n                }\r\n                var selector = RulesObj[i][\u0027selector\u0027];\r\n                var attributesArr = CMrule.Attributes;\r\n                if (attributesArr instanceof Array) {\r\n                    window.ClickTaleSettings.ChangeMonitor.PII.Attributes.push({\r\n                        selector: selector,\r\n                        transform: (function(attributesArr) {\r\n                            return function(el) {\r\n                                var attrs = el.attributes;\r\n                                var attrsToReturn = {}\r\n                                for (var i = 0; i \u003c attrs.length; i++) {\r\n                                    var name = attrs[i].nodeName;\r\n                                    attrsToReturn[name] = attrs[i].nodeValue;\r\n                                }\r\n                                for (var u = 0; u \u003c attributesArr.length; u++) {\r\n                                    var attr = attributesArr[u];\r\n                                    var attrib = el.getAttribute(attr);\r\n                                    if (typeof attrib === \u0027string\u0027) {\r\n                                        attrsToReturn[attr] = attrib.replace(\/\\w\/g, \u0027-\u0027);\r\n                                        window.ClickTaleSettings.PTC.runPIIRemovedEvent();\r\n                                    }\r\n                                }\r\n\r\n                                return attrsToReturn;\r\n                            }\r\n                        })(attributesArr)\r\n                    });\r\n                }\r\n                if (CMrule.Text) {\r\n                    window.ClickTaleSettings.ChangeMonitor.PII.Text.push({\r\n                        selector: [selector, function(elements) {\r\n                            var els = Array.prototype.reduce.call(elements, function(curr, add) {\r\n                                return curr.concat(Array.prototype.slice.call(add.childNodes));\r\n                            }, []);\r\n                            return Array.prototype.filter.call(els, function(child) {\r\n                                return !!(child \u0026\u0026 child.nodeType === 3);\r\n                            });\r\n                        }],\r\n                        transform: function(el) {\r\n                            window.ClickTaleSettings.PTC.runPIIRemovedEvent();\r\n                            return el.textContent.replace(\/\\w\/g, \u0027-\u0027);\r\n                        }\r\n                    });\r\n                }\r\n            }\r\n        }\r\n    }\r\n};\r\n\r\nwindow.ClickTaleSettings.Compression = {\r\n    Method: function() {\r\n        return \"deflate\";\r\n    }\r\n};\r\n\r\nwindow.ClickTaleSettings.Transport = {\r\n    Legacy: false,\r\n    MaxConcurrentRequests: 5\r\n};\r\n\r\nwindow.ClickTaleSettings.RewriteRules = {\r\n    OnBeforeRewrite: function(rewriteApi) {\r\n        if (window.ClickTaleSettings.PTC.RulesObj) {\r\n            rewriteApi.add(function(buffer) {\r\n                var bodyClone = ClickTaleSettings.PTC.cloneNodeIE9(buffer);\r\n                \/\/ADOBEMAIN-200\r\n                Array.prototype.forEach.call(bodyClone.querySelectorAll(\u0027a.Profile-thumbnail, div.Profile-avatar\u0027), function(el) {\r\n                    el.setAttribute(\u0027style\u0027, \u0027backgroundImage:url(\"http:\/\/via.placeholder.com\/150x150\")\u0027);\r\n                });\r\n                Array.prototype.forEach.call(bodyClone.querySelectorAll(\u0027img.avatar, img[ctdep-class*=\"avatar\"]\u0027), function(el) {\r\n                    el.setAttribute(\u0027ctdep-src\u0027, \u0027http:\/\/via.placeholder.com\/150x150\u0027);\r\n                });\r\n\r\n                if (window.ClickTaleSettings.PTC.AssetManager \u0026\u0026\r\n                    window.ClickTaleSettings.PTC.AssetManager.isActive \u0026\u0026\r\n                    typeof window.ClickTaleSettings.PTC.AssetManager.makeChanges == \u0027function\u0027) {\r\n                    window.ClickTaleSettings.PTC.AssetManager.makeChanges(bodyClone);\r\n                }\r\n\r\n                var selectorReg = \/((?:^|,|\\s|\u003e|\\+|\\~)+)(\\w)\/g;\r\n\r\n                var wasPIIRemoved = false;\r\n                var RulesObj = window.ClickTaleSettings.PTC.RulesObj;\r\n                for (var i = 0; i \u003c RulesObj.length; i++) {\r\n                    var rewriteApirule = RulesObj[i][\u0027rewriteApi\u0027];\r\n                    var rewriteApilocation = RulesObj[i][\u0027location\u0027];\r\n                    if (!rewriteApirule || (rewriteApilocation \u0026\u0026 document.location[rewriteApilocation[\u0027prop\u0027]].toLowerCase().search(rewriteApilocation.search) === -1)) {\r\n                        continue;\r\n                    }\r\n                    var selector = RulesObj[i][\u0027selector\u0027].replace(selectorReg, \u0027$1ctdep-$2\u0027);\r\n                    var elements = bodyClone.querySelectorAll(selector);\r\n\r\n                    Array.prototype.forEach.call(elements, function(el, ind) {\r\n                        var attributesArr = rewriteApirule.Attributes;\r\n                        if (attributesArr instanceof Array) {\r\n\r\n                            for (var u = 0; u \u003c attributesArr.length; u++) {\r\n                                var attr = attributesArr[u];\r\n                                var attrib = el.getAttribute(attr);\r\n                                if (typeof attrib === \u0027string\u0027) {\r\n                                    el.setAttribute(attr, attrib.replace(\/\\w\/g, \u0027-\u0027));\r\n                                    wasPIIRemoved = true;\r\n                                }\r\n                            }\r\n                        }\r\n                        if (rewriteApirule.Text) {\r\n                            var children = el.childNodes;\r\n                            Array.prototype.forEach.call(children, function(child) {\r\n                                if (child \u0026\u0026 child.nodeType === 3) {\r\n                                    child.textContent = child.textContent.replace(\/\\w\/g, \u0027-\u0027);\r\n                                    wasPIIRemoved = true;\r\n                                }\r\n                            });\r\n                        }\r\n                    });\r\n                }\r\n\r\n                var RulesObjRemoveEls = window.ClickTaleSettings.PTC.RulesObjRemoveEls;\r\n                if (RulesObjRemoveEls) {\r\n                    for (var i = 0; i \u003c RulesObjRemoveEls.length; i++) {\r\n                        if (RulesObjRemoveEls[i].rewriteApi) {\r\n                            var elementsToRemove = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApi.replace(selectorReg, \u0027$1ctdep-$2\u0027));\r\n                            Array.prototype.forEach.call(elementsToRemove, function(el, ind) {\r\n                                if (el.parentNode) {\r\n                                    el.parentNode.removeChild(el);\r\n                                }\r\n                            });\r\n                        }\r\n                        if (RulesObjRemoveEls[i].rewriteApiReplace) {\r\n                            var elementsToReplace = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApiReplace.replace(selectorReg, \u0027$1ctdep-$2\u0027));\r\n                            Array.prototype.forEach.call(elementsToReplace, function(el, ind) {\r\n                                if (el.parentNode) {\r\n                                    var comment = document.createComment(el.outerHTML);\r\n                                    el.parentNode.replaceChild(comment, el);\r\n                                }\r\n                            });\r\n                        }\r\n                    }\r\n                }\r\n                if (document.location.href.indexOf(\"download\") \u003e -1) {\r\n                    Array.prototype.forEach.call(bodyClone.querySelectorAll(\"#download_frame,#destination_publishing_iframe_adobe_0,iframe[src*=\u0027fls\u0027]\"), function(el, ind) {\r\n                        el.removeAttribute(\u0027src\u0027);\r\n                    });\r\n                }\r\n                if (wasPIIRemoved) {\r\n                    window.ClickTaleSettings.PTC.runPIIRemovedEvent();\r\n                }\r\n                var reg = \/\u003e\u003c\\\/(?:area|base|br|col|command|embed|hr|input|keygen|link|menuitem|meta|param|source|track|wbr|img)\u003e\/gi;\r\n                var clone = bodyClone.innerHTML.replace(\/ctdep-\/gi, \u0027\u0027).replace(reg, \u0027 \\\/\u003e\u0027).replace(\/\u003c!--clicktalesvgreplace ([\\s\\S]+?)--\u003e\/, \u0027$1\u0027);\r\n                return clone;\r\n            });\r\n        }\r\n        rewriteApi.add({\r\n            pattern: \/(\u003chead[^\u003e]*\u003e)\/i,\r\n            replace: \u0027$1\u003cscript type=\"text\\\/javascript\" class=\"cm-ignore\" src=\"https:\\\/\\\/cdnssl.clicktale.net\\\/www\\\/tc\\\/jquery.min.js\"\u003e\u003c\\\/script\u003e\u0027\r\n        });\r\n    }\r\n};\r\n\r\nwindow.ClickTaleSettings.PTC.doOnlyWhen = function(toDoHandler, toCheckHandler, interval, times, failHandler) {\r\n    if ((!toDoHandler) || (!toCheckHandler)) return;\r\n    if (typeof interval == \"undefined\") interval = 1000;\r\n    if (typeof times == \"undefined\") times = 20;\r\n    if (--times \u003c 0) {\r\n        if (typeof failHandler === \u0027function\u0027) {\r\n            failHandler();\r\n        }\r\n        return;\r\n    }\r\n    if (toCheckHandler()) {\r\n        toDoHandler();\r\n        return;\r\n    }\r\n    setTimeout(function() {\r\n        window.ClickTaleSettings.PTC.doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler);\r\n    }, interval);\r\n};\r\n\r\n\/\/Demandbase Integration Start\r\nfunction clickTaleDBIntegration() {\r\n    var dbObject = Demandbase.IpApi.CompanyProfile;\r\n\r\n    function CE(value) {\r\n        ClickTaleEvent(value);\r\n    }\r\n\r\n    function CMPT(id, value) {\r\n        ClickTaleMonitor.addPageTag(id, value);\r\n    }\r\n\r\n    try {\r\n        \/\/Demandbase Integration CEC Start\r\n        if (window.ClickTaleMonitor \u0026\u0026 !window.ClickTaleSettings.PTC.DBCECtriggered) {\r\n            window.ClickTaleSettings.PTC.DBCECtriggered = true;\r\n            var settings = ClickTaleMonitor.Settings.get();\r\n            settings.onStart(function() {\r\n                if (dbObject.employee_range) {\r\n                    CMPT(5638, \"DB Employee Range : \" + dbObject.employee_range);\r\n                }\r\n                if (dbObject.audience) {\r\n                    CMPT(5639, \"DB Audience : \" + dbObject.audience);\r\n                }\r\n                if (dbObject.industry) {\r\n                    CMPT(5640, \"DB Industry : \" + dbObject.industry);\r\n                }\r\n                if (dbObject.revenue_range) {\r\n                    CMPT(5641, \"DB Revenue Range : \" + dbObject.revenue_range);\r\n                }\r\n            });\r\n        }\r\n        \/\/Demandbase Integration CEC End\r\n\r\n        \/\/Demandbase Integration Core Start\r\n        if (window.ClickTaleIsRecording \u0026\u0026 ClickTaleIsRecording()) {\r\n            if (dbObject.information_level === \"Basic\") {\r\n                CE(\"DB Information Level : Basic\");\r\n            } else if (dbObject.information_level === \"Detailed\") {\r\n                CE(\"DB Information Level : Detailed\");\r\n            }\r\n\r\n            if (dbObject.annual_sales) {\r\n                CE(\"DB Annual Sales : \" + dbObject.annual_sales);\r\n            }\r\n            if (dbObject.audience) {\r\n                CE(\"DB Audience : \" + dbObject.audience);\r\n            }\r\n            if (dbObject.audience_segment) {\r\n                CE(\"DB Audience Segment : \" + dbObject.audience_segment);\r\n            }\r\n            if (dbObject.b2b) {\r\n                CE(\"DB B2B : \" + dbObject.b2b);\r\n            }\r\n            if (dbObject.b2c) {\r\n                CE(\"DB B2C : \" + dbObject.b2c);\r\n            }\r\n            if (dbObject.company_name) {\r\n                CE(\"DB Company Name : \" + dbObject.company_name);\r\n            }\r\n            if (dbObject.demandbase_sid) {\r\n                CE(\"DB SID : \" + dbObject.demandbase_sid);\r\n            }\r\n            if (dbObject.employee_count) {\r\n                CE(\"DB Employee Count : \" + dbObject.employee_count);\r\n            }\r\n            if (dbObject.employee_range) {\r\n                CE(\"DB Employee Range : \" + dbObject.employee_range);\r\n            }\r\n            if (dbObject.forbes_2000) {\r\n                CE(\"DB Forbes 2000 : \" + dbObject.forbes_2000);\r\n            }\r\n            if (dbObject.fortune_1000) {\r\n                CE(\"DB Fortune 1000 : \" + dbObject.fortune_1000);\r\n            }\r\n            if (dbObject.industry) {\r\n                CE(\"DB Industry : \" + dbObject.industry);\r\n            }\r\n            if (dbObject.revenue_range) {\r\n                CE(\"DB Revenue Range : \" + dbObject.revenue_range);\r\n            }\r\n            if (dbObject.sub_industry) {\r\n                CE(\"DB Sub Industry : \" + dbObject.sub_industry);\r\n            }\r\n            if (dbObject.traffic) {\r\n                CE(\"DB Traffic : \" + dbObject.traffic);\r\n            }\r\n            if (dbObject.watch_list_account_status) {\r\n                CE(\"DB Watch List Account Status : \" + dbObject.watch_list_account_status);\r\n            }\r\n            if (dbObject.watch_list_account_type) {\r\n                CE(\"DB Watch List Account Type : \" + dbObject.watch_list_account_type);\r\n            }\r\n        }\r\n        \/\/Demandbase Integration Core End\r\n    } catch (e) {\r\n        \/\/Demandbase Integration Core Start\r\n        if (window.ClickTaleIsRecording \u0026\u0026 ClickTaleIsRecording()) {\r\n            CE(\"Demandbase Error : \" + e.message);\r\n        }\r\n        \/\/Demandbase Integration Core End\r\n    }\r\n};\r\n\r\nfunction clickTaleCheckIfDBExists() {\r\n    if (window.Demandbase \u0026\u0026 Demandbase.IpApi \u0026\u0026 Demandbase.IpApi.CompanyProfile \u0026\u0026 Demandbase.IpApi.CompanyProfile.information_level) {\r\n        window.ClickTaleSettings.PTC.DBready = true;\r\n        return true;\r\n    }\r\n    return false;\r\n};\r\n\r\nwindow.ClickTaleSettings.PTC.doOnlyWhen(clickTaleDBIntegration, clickTaleCheckIfDBExists, 100, 100);\r\n\/\/Demandbase Integration End\r\n\r\n\/\/Adobe Target Integration Start\r\nfunction clickTaleATIntegration() {\r\n    var events = [];\r\n    for (var i = 0; i \u003c ttMETA.length; i++) {\r\n        if (ttMETA[i].campaign != \u0027\u0027 \u0026\u0026 ttMETA[i].experience != \u0027\u0027) {\r\n            events.push(\u0027Campaign: \u0027 + ttMETA[i].campaign + \u0027 | Experience: \u0027 + ttMETA[i].experience);\r\n        }\r\n    }\r\n    ClicktaleIntegrationExperienceHandler(events, \"Adobe\");\r\n};\r\n\r\nfunction clickTaleCheckIfATExists() {\r\n    if (window.ClicktaleIntegrationExperienceHandler \u0026\u0026 window.ttMETA \u0026\u0026 ttMETA.length \u003e 0) {\r\n        for (var i = 0; i \u003c ttMETA.length; i++) {\r\n            if (typeof ttMETA[i].campaign === \u0027string\u0027 \u0026\u0026 ttMETA[i].campaign != \u0027\u0027 \u0026\u0026 typeof ttMETA[i].experience === \u0027string\u0027 \u0026\u0026 ttMETA[i].experience != \u0027\u0027) {\r\n                return true;\r\n            }\r\n        }\r\n    }\r\n    return false;\r\n};\r\n\r\nwindow.ClickTaleSettings.PTC.doOnlyWhen(clickTaleATIntegration, clickTaleCheckIfATExists, 100, 100);\r\n\/\/Adobe Target Integration End\r\n\r\n\/\/iPerceptions Integration Start\r\nwindow.ClickTaleSettings.PTC.isITP = typeof document.requestStorageAccess === \"function\";\r\n\r\nif (document.location.host.indexOf(\u0027iperceptions.com\u0027) \u003e -1) {\r\n    window.ClickTaleSettings.PTC.RecordSurvey = false;\r\n    if (document.location.search.indexOf(\u0027CT_UID=\u0027) \u003e -1) {\r\n        var uid = document.location.search.substr(document.location.search.indexOf(\u0027CT_UID=\u0027) + 7).split(\u0027\u0026\u0027)[0];\r\n        if (uid \u0026\u0026 uid != \"null\") {\r\n            window.ClickTaleSettings.PTC.RecordSurvey = true;\r\n            window.ClickTaleCookieDomain = document.location.host;\r\n            var cookieName = window.ClickTaleUIDCookieName || \"WRUID\";\r\n            if (!window.ClickTaleSettings.PTC.isITP) {\r\n                var expireCookie = new Date(Date.now() + (30 * 86400000)).toUTCString();\r\n                document.cookie = cookieName + \"=\" + uid + \"; expires=\" + expireCookie + \"; path=\/\";\r\n            } else {\r\n                var expireLocalStorage = new Date(Date.now() + 36E5).toUTCString();\r\n                if (uid.indexOf(\"_WRIgnore\") \u003e -1) {\r\n                    localStorage.setItem(\"WRIgnore\", \"true; expiry=\" + expireLocalStorage);\r\n                }\r\n                window.ClickTaleSettings.Tracking = {\r\n                    Provider: \"LocalStorage\"\r\n                };\r\n                uid = uid.replace(\"_WRIgnore\", \"\");\r\n                localStorage.setItem(cookieName, uid);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nwindow.ClicktaleiPerceptions = function(event) {\r\n    if (window.ClickTaleIsRecording \u0026\u0026 ClickTaleIsRecording()) {\r\n        var PID = ClickTaleGetPID();\r\n        var UID = ClickTaleGetUID();\r\n        var SID = ClickTaleGetSID();\r\n        var intLink = \"https:\/\/dmz01.app.clicktale.com\/Player.aspx?PID=\" + PID + \"\u0026UID=\" + UID + \"\u0026SID=\" + SID;\r\n        ClickTaleEventTrigger(\"@ET@ iPerceptions Survey Submitted\");\r\n        return intLink;\r\n    }\r\n};\r\n\/\/iPerceptions Integration End\r\n\r\nfunction ClickTaleOnRecording() {\r\n\r\n    var PID = ClickTaleGetPID();\r\n    var UID = ClickTaleGetUID();\r\n    var SID = ClickTaleGetSID();\r\n\r\n    \/\/iPerceptions Integration Start\r\n    if (window.localStorage) {\r\n        if (document.location.host.indexOf(\u0027iperceptions.com\u0027) === -1) {\r\n            var WRIgnore = \"\";\r\n            if (document.cookie.search(\"WRIgnore=true\") \u003e -1 \u0026\u0026 window.ClickTaleSettings.PTC.isITP) {\r\n                WRIgnore = \"_WRIgnore\";\r\n            }\r\n            localStorage.setItem(\"CT_UID\", UID + WRIgnore);\r\n        }\r\n    }\r\n    \/\/iPerceptions Integration End\r\n\r\n    \/\/Adobe Analytics Integration Start\r\n    if (window.clickTaleSendBeacon) {\r\n        s_adobe.eVar73 = UID + \".\" + PID;\r\n        s_adobe.linkTrackVars = \"eVar73\";\r\n        s_adobe.tl(true, \"o\", \"Clicktale ID\");\r\n    }\r\n    \/\/Adobe Analytics Integration End\r\n\r\n    \/\/Demandbase Integration For Core Start\r\n    if (window.ClickTaleSettings.PTC.DBready) {\r\n        clickTaleDBIntegration();\r\n    }\r\n    \/\/Demandbase Integration For Core End\r\n};\r\n\r\n\/\/Integrations\r\nwindow.ClickTaleSettings.PTC.Integrations = [\r\n    \"Adobe Target | Core\",\r\n    \"Adobe Target | CEC\",\r\n    \"Adobe Analytics 1.0 | Core\",\r\n    \"iPerceptions | Core\",\r\n    \"Demandbase | Core\",\r\n    \"Demandbase | CEC\"\r\n];\r\n\r\n\/\/ End of user-defined pre WR code\r\n\r\n\r\nvar isHttps = document.location.protocol == \u0027https:\u0027,\r\n\tscriptSource = window.ClickTaleScriptSource,\r\n\tpccSource = scriptSource;\r\n\r\nif (!scriptSource) {\r\n\twindow.ClickTaleScriptSource = isHttps ? \u0027https:\/\/cdnssl.clicktale.net\/www\/\u0027 : \u0027http:\/\/cdn.clicktale.net\/www\/\u0027;\r\n}\r\n\r\nClickTaleGlobal.init.monitorScriptName = \"Monitor-latest.js\";\r\nClickTaleGlobal.init.isAllowed \u0026\u0026 typeof ClickTaleGlobal.init.pmc === \"function\" \u0026\u0026 ClickTaleGlobal.init.pmc(autoMonitorConfig);\r\n\r\nif(!ClickTaleGlobal.init.pccRequested) {\r\n\tvar pccSrc = pccSource ? pccSource + \u0027544fc825-311a-44c5-86f0-70581a36c216.js?DeploymentConfigName=Release_20190513\u0026Version=8\u0027 : (isHttps ? \u0027https:\/\/cdnssl.clicktale.net\/www20\/pcc\/544fc825-311a-44c5-86f0-70581a36c216.js?DeploymentConfigName=Release_20190513\u0026Version=8\u0027 : \u0027http:\/\/cdn.clicktale.net\/www20\/pcc\/544fc825-311a-44c5-86f0-70581a36c216.js?DeploymentConfigName=Release_20190513\u0026Version=8\u0027);\r\n\t\tvar pccScriptElement = ClickTaleCreateDOMElement(\u0027script\u0027);\r\n\tpccScriptElement.type = \"text\/javascript\";\r\n\tpccScriptElement.crossOrigin = \"anonymous\";\r\n\tpccScriptElement.src = pccSrc;\r\n\tClickTaleGlobal.init.isAllowed \u0026\u0026 document.body.appendChild(pccScriptElement);\r\n\t\tClickTaleGlobal.init.pccRequested = true;\r\n}\r\n\twindow.ClickTaleGlobal.PCCExists = true;\r\n\t\r\nwindow.ClickTalePrevOnReady = typeof window.ClickTaleOnReady == \u0027function\u0027 ? window.ClickTaleOnReady : void 0;\r\n\r\nwindow.ClickTaleOnReady = function() {\r\n\tvar PID=100, \r\n\t\tRatio=0.5, \r\n\t\tPartitionPrefix=\"www20\",\r\n\t\tSubsId=233200;\r\n\t\r\n\tif (window.navigator \u0026\u0026 window.navigator.loadPurpose === \"preview\") {\r\n       return;\r\n\t};\r\n\t\t\r\n\t\r\n\t\/\/ Start of user-defined header code (PreInitialize)\r\n\t\/\/iPerceptions Integration Start\r\nif (ClickTaleSettings.PTC.RecordSurvey === false) {\r\n    return;\r\n}\r\n\/\/iPerceptions Integration End\r\n\r\n\/\/blocked URL\u0027s\r\nif (document.location.href.toLowerCase().indexOf(\u0027acrobat.adobe.com\/us\/en\/landing\/acrobat-pro-chrome-extension.html\u0027) \u003e -1) {\r\n    return;\r\n}\r\n\r\nif (typeof ClickTaleSetAllSensitive === \"function\") {\r\n    ClickTaleSetAllSensitive();\r\n};\r\n\r\nwindow.ClickTaleSettings.PTC.InitFuncs = window.ClickTaleSettings.PTC.InitFuncs || [];\r\nwindow.ClickTaleSettings.PTC.InitFuncs.push(function() {\r\n    var pcc = document.querySelector(\u0027script[src*=\"clicktale\"][src*=\"pcc\"]\u0027);\r\n    if (pcc) {\r\n        var versionmatch = pcc.src.match(\/DeploymentConfigName=(.+)\/i);\r\n        if (versionmatch \u0026\u0026 typeof ClickTaleExec === \u0027function\u0027) {\r\n            ClickTaleExec(\"console.info(\u0027\" + versionmatch[0] + \"\u0027);\");\r\n            ClickTaleEvent(\"Config: \" + versionmatch[1].replace(\/\\\u0026.+\/, \u0027\u0027));\r\n        }\r\n    }\r\n});\r\n\r\nfunction doUpload() {\r\n    if (typeof ClickTaleUploadPageNow === \u0027function\u0027 \u0026\u0026 ClickTaleIsRecording()) {\r\n        if (\/\\\/modal\\\/\/i.test(location.pathname)) {\r\n            ClickTaleUploadPageNow();\r\n            window.ClickTaleSettings.PTC.UploadPageHappened = true;\r\n        } else {\r\n            setTimeout(function() {\r\n                ClickTaleUploadPageNow();\r\n                window.ClickTaleSettings.PTC.UploadPageHappened = true;\r\n            }, 2000);\r\n        }\r\n    };\r\n};\r\n\r\nfunction isVisible(element) {\r\n    if (element \u0026\u0026 typeof element == \u0027string\u0027) {\r\n        element = document.querySelectorAll(element);\r\n    }\r\n    if (element instanceof NodeList \u0026\u0026 element.length \u003e 0) {\r\n        return Array.prototype.filter.call(element, function(el) {\r\n            return isVisible(el);\r\n        }).length == element.length;\r\n    }\r\n    if (element instanceof Element) {\r\n        return ((element.offsetWidth \u003e 0 \u0026\u0026 element.offsetHeight \u003e 0) || element[\u0027getClientRects\u0027]().length \u003e 0);\r\n    }\r\n    return false;\r\n}\r\n\r\nfunction isReadyToRecord() {\r\n    if (typeof ClickTaleUploadPageNow === \u0027function\u0027 \u0026\u0026 ClickTaleIsRecording()) {\r\n        if (\/\\\/support.html\/i.test(location.pathname)) {\r\n            if (\/\\\/contact\\\/\/i.test(location.pathname)) {\r\n                return isVisible(\u0027#plan-anchor.active\u0027) \u0026\u0026 !isVisible(\u0027.loader\u0027) \u0026\u0026 document.querySelectorAll(\u0027.select-plan .plan-col\u0027).length \u003e 0;\r\n            } else return isVisible(\u0027.product-picker-products\u0027);\r\n        } else if (\/\\\/us\\\/en\\\/acrobat\\\/pdf-pack-pricing.html\/i.test(location.pathname)) {\r\n            return isVisible(\u0027.Footernav-menu\u0027);\r\n        } else if (\/products\\\/download\\\/acrobat\\\/starter\/i.test(location.pathname)) {\r\n            return !isVisible(\u0027.ccweb-loadingimage\u0027);\r\n        } else if (\/request-consultation\\\/experience-cloud.html\/i.test(location.pathname)) {\r\n            return !!document.querySelector(\u0027form.faas-form input[type=\"text\"]\u0027);\r\n        }else {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n};\r\n\r\nif (typeof ClickTaleDelayUploadPage === \u0027function\u0027) {\r\n    ClickTaleDelayUploadPage();\r\n\r\n    \/\/AB Test Integration Timeout\r\n    setTimeout(function() {\r\n        window.ClickTaleSettings.PTC.doOnlyWhen(doUpload, isReadyToRecord, 1000, 5, doUpload);\r\n    }, 1000);\r\n\r\n    var initFuncs = window.ClickTaleSettings.PTC.InitFuncs;\r\n    for (var i = 0, initLen = initFuncs.length; i \u003c initLen; i++) {\r\n        if (typeof initFuncs[i] === \u0027function\u0027) {\r\n            initFuncs[i]();\r\n        }\r\n    }\r\n}\r\n\r\n\t\/\/ End of user-defined header code (PreInitialize)\r\n    \r\n\t\r\n\twindow.ClickTaleIncludedOnDOMReady=true;\r\n\t\r\n\tClickTaleGlobal.init.isAllowed \u0026\u0026 ClickTale(PID, Ratio, PartitionPrefix, SubsId);\r\n\t\r\n\tif((typeof ClickTalePrevOnReady == \u0027function\u0027) \u0026\u0026 (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))\r\n\t{\r\n    \tClickTalePrevOnReady();\r\n\t}\r\n\t\r\n\t\r\n\t\/\/ Start of user-defined footer code\r\n\t\r\n\t\/\/ End of user-defined footer code\r\n\t\r\n}; \r\n(function() {\r\n\tvar div = ClickTaleCreateDOMElement(\"div\");\r\n\tdiv.id = \"ClickTaleDiv\";\r\n\tdiv.style.display = \"none\";\r\n\tdocument.body.appendChild(div);\r\n\r\n\t\r\n\t\r\n\tvar wrScript = ClickTaleCreateDOMElement(\"script\");\r\n\twrScript.crossOrigin = \"anonymous\";\t\r\n\twrScript.src = window.ClickTaleScriptSource + \u0027WR-latest.js\u0027;\r\n\twrScript.type = \u0027text\/javascript\u0027;\r\n\t\twrScript.async = true;\r\n\t\tClickTaleGlobal.init.isAllowed \u0026\u0026 document.body.appendChild(wrScript);\r\n})();\r\n\r\n\r\n\r\n\r\n\r\nwindow._uxa = window._uxa || [];   \r\nfunction ClickTaleEnableCS() {   \r\n    if (!document.querySelector(\u0027script[src*=\"\/0cd4b104cc329.js\"]\u0027)) {\r\n        _uxa.push([\u0027setPath\u0027, window.location.pathname + window.location.hash.replace(\u0027#\u0027, \u0027?__\u0027)]);\r\n        var mt = document.createElement(\"script\"); mt.type = \"text\/javascript\"; mt.async = true;\r\n        mt.src = \"\/\/t.clicktale.net\/uxa\/0cd4b104cc329.js\";\r\n        document.getElementsByTagName(\"head\")[0].appendChild(mt);\r\n    }\r\n}\t\r\n\r\nvar ctVEconfig={VE_BASE_URL:\"https:\/\/ve-cec-na1.app.clicktale.com\/\",VE_PROXY_BASE_URL:\"https:\/\/vep-cec-na1.app.clicktale.com\/\"};!function(){try{var e=window.chrome,t=window.navigator\u0026\u0026window.navigator.vendor;null!=e\u0026\u0026\"Google Inc.\"===t\u0026\u0026window.addEventListener\u0026\u0026addEventListener(\"message\",o,!1);var n=window.location.search.substring(window.location.search.indexOf(\"ctAdvancedSearch=\")).split(\"\u0026\")[0].split(\"=\");\"ctAdvancedSearch\"==n[0]\u0026\u0026\"true\"==n[1]\u0026\u0026c(\"ctAdvancedSearchModule\",ctVEconfig.VE_BASE_URL+\"client\/dist\/advancedSearchModule.js\")}catch(e){}function o(e){var t;try{t=JSON.parse(e.data)}catch(e){return}!1!==new RegExp(\"(app[.]clicktale[.]com)($|:)\").test(e.origin)\u0026\u0026(window.ct_ve_parent_window=e.source,\"CT_testRules\"==t.name\u0026\u0026(sessionStorage.setItem(\"CT_testRules\",!0),console.log((new Date).toJSON(),\"PostPTC: testRules \",sessionStorage.getItem(\"CT_testRules\")),window.ct_ve_parent_window.postMessage({name:\"testRulesRecieved\",params:{}},\"*\")),\"CTload_ve\"===t.function\u0026\u0026\"function\"==typeof ClickTaleGetPID\u0026\u0026null!==ClickTaleGetPID()\u0026\u0026(function(){console.log((new Date).toJSON(),\"PostPTC: start loading test rules\");var e=ClickTaleGetPID();c(\"ctTestRulesModule\",ctVEconfig.VE_BASE_URL+\"rulesEngineContent\/TestPCC\/\"+e,function(){sessionStorage.setItem(\"CT_testRules_Loaded\",!0),console.log((new Date).toJSON(),\"PostPTC: test rules loaded\")})}(),c(\"ctVisualEditorClientModule\",ctVEconfig.VE_BASE_URL+\"client\/dist\/veClientModule.js\")))}function c(e,t,n){var o=function(e){return document.createElementNS?document.createElementNS(\"http:\/\/www.w3.org\/1999\/xhtml\",e):document.createElement(e)}(\"script\");o.setAttribute(\"type\",\"text\/javascript\"),o.setAttribute(\"id\",e),o.src=t,void 0!==n\u0026\u0026(o.onload=n),document.getElementById(e)||document.body.appendChild(o)}}();");
        document.body.appendChild(script);
    })();
}

//Signature:VIucw9y4qynxq+fZPTOPH51xMFMIt2IpPKWBUG63dhGY8isjhFmLaqsdp1x1i1alEjpvMAsaBGIMakJn1I32dL6tqfbuEbTOrGE5603mD4UpvRRijAYqYnYWXkuIrd7coUGkBhKVg+dRfVsw0sjW3b78uO38YX+oXiwuqOvqOYE=