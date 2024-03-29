define("@baidu/Boxjs-amd/dist/components/cache/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/core/invoke");
    return {
        "delete": function(c, b, v) {
            var B = {
                key: c,
                data: encodeURIComponent(JSON.stringify(b))
            };
            return a("storage/delete", B, v)
        },
        get: function(c, b, v) {
            var B = {
                key: c,
                domain: b
            };
            return a("storage/get", B, v)
        },
        set: function(c, b, v, B) {
            var j = {
                key: c,
                data: JSON.stringify(b),
                trustedDomains: v
            };
            return a("storage/set", j, B)
        }
    }
}), define("@baidu/Boxjs-amd/dist/components/data/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function(require) {
    function a(a, c) {
        var b = "",
            module = "";
        "toggle" === c ? (b = a.name, module = a.type) : (b = a.name.split("-")[1], module = a.name.split("-")[0]);
        var v = b.substring(0, 1).toUpperCase(),
            B = b.substring(1),
            j = c + v + B,
            h = [module, j].join("/");
        return h
    }
    var c = require("@baidu/Boxjs-amd/dist/core/invoke");
    return {
        get: function(b) {
            var v = a(b, "get");
            return c(v, b.data, b.abtest)
        },
        set: function(b) {
            var v = a(b, "set");
            return c(v, b.data, b.abtest)
        },
        toggle: function(b) {
            var v = a(b, "toggle"),
                B = 0;
            b.status && (B = (parseInt(b.status, 10) + 1) % 2);
            var j = b.data || {};
            return j.status = B + "", c(v, j, b.abtest)
        }
    }
}), define("@baidu/Boxjs-amd/dist/components/device/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/core/invoke");
    return {
        cuid: function(c) {
            var b = "utils/getCUID";
            return a(b, {}, c)
        },
        info: function(c, b) {
            var v = {},
                B = [],
                j = "",
                h = "";
            switch ("string" == typeof c ? (h = c, B.push(c)) : (h = c[0], B = c), h) {
                case "netInfo":
                    j = "utils/getDeviceInfo", v = {
                        keys: B
                    };
                    break;
                case "screenInfo":
                    j = "utils/getScreenInfo", v = {
                        keys: B
                    };
                    break;
                case "platformInfo":
                    j = "utils/getPlatformInfo"
            }
            return a(j, v, b)
        },
        location: function(c, b) {
            var v = {
                    coor_type: c
                },
                B = "utils/location";
            return a(B, v, b)
        }
    }
}), define("@baidu/Boxjs-amd/dist/components/event/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function(require) {
    function a(a, b) {
        var v = "datachannel/" + b,
            B = a.data || {};
        return B.name = a.name, c(v, B, a.abtest)
    }
    var c = require("@baidu/Boxjs-amd/dist/core/invoke");
    return {
        fire: function(c) {
            return a(c, "sendbroadcast")
        },
        on: function(c) {
            return a(c, "register")
        },
        off: function(c) {
            return a(c, "unregister")
        }
    }
}), define("@baidu/Boxjs-amd/dist/components/log/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/core/invoke"),
        c = {
            durationDisappear: "ubc/duration/disappear",
            durationAppear: "ubc/duration/appear",
            reliableLog: "utils/onReliableLog",
            performanceFlowEvent: "utils/onPerformanceFlowEvent",
            ubcReport: "utils/ubcReport",
            feedReport: "feed/report",
            channelStatistics: "channelStatistics/action"
        };
    return function(b) {
        var v = c[b.name] || b.name;
        return a(v, b.data, b.abtest)
    }
}), define("@baidu/Boxjs-amd/dist/components/media/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function(require) {
    function a(a, b) {
        var v = [b, a.type].join("/");
        return c(v, a.data, a.abtest)
    }
    var c = require("@baidu/Boxjs-amd/dist/core/invoke");
    return {
        video: function(c) {
            return a(c, "video")
        },
        tts: function(c) {
            return a(c, "tts")
        }
    }
}), define("@baidu/Boxjs-amd/dist/components/net/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/core/invoke");
    return {
        download: function(c) {
            var b = c.name.split("-"),
                module = b[0],
                v = b[1] || "";
            return v = [module, v].join("/"), a(v, c.data, c.abtest)
        },
        prefetch: function(c) {
            var b = [c.name, "prefetch"].join("/");
            return a(b, c.data, c.abtest)
        },
        request: function(c) {
            return a("net/request", c, c.abtest)
        }
    }
}), define("@baidu/Boxjs-amd/dist/components/ui/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function(require) {
    function a(a, c) {
        var b = a.name.split("-"),
            v = "";
        if (b[1]) {
            var B = b[1].substring(0, 1).toUpperCase(),
                j = b[1].substring(1),
                h = c + B + j;
            v = [b[0], h].join("/")
        } else v = [a.name, c].join("/");
        return v
    }
    var c = require("@baidu/Boxjs-amd/dist/core/invoke");
    return {
        open: function(b) {
            var v = b.data || {},
                B = a(b, "open");
            return b.style && (v.style = b.style), c(B, v, b.abtest)
        },
        close: function(b) {
            var v = a(b, "close");
            return c(v, {}, b.abtest)
        },
        update: function(b) {
            var v = a(b, "update");
            return c(v, b.data, b.abtest)
        }
    }
}), define("@baidu/Boxjs-amd/dist/components/view/index", ["require", "@baidu/Boxjs-amd/dist/core/invoke"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/core/invoke");
    return {
        open: function(c) {
            var b = c.name,
                v = c.type || "",
                B = c.data,
                j = [b, "open"].join("/");
            return c.style && (B.style = c.style), ("easybrowse" === b || "browser" === b) && (B.newbrowser = c.newbrowser || c.data.newbrowser || "0", B.type = v), "hybrid" === v && (j = [b, v].join("/")), a(j, B, c.abtest)
        },
        close: function(c) {
            var b = [c.name, "close"].join("/");
            return a(b, {}, c.abtest)
        },
        update: function(c) {
            var b = [c.name, "update"].join("/");
            return a(b, c.data, c.abtest)
        }
    }
}), define("@baidu/Boxjs-amd/dist/core/BDPolyfill/filter", ["require"], function() {
    return {}
}), define("@baidu/Boxjs-amd/dist/core/BDPolyfill/index", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/android/invokeApp", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/ios/invokeApp", "@baidu/Boxjs-amd/dist/core/BDPolyfill/parser", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend", "@baidu/Boxjs-amd/dist/utils/postMessageUser"], function(require) {
    function a(a, b, v) {
        var B = [];
        for (var i in b) B.push(i + "=" + b[i]);
        if (v) {
            var j = "_bdbox_js_" + c.getId();
            window[j] = function() {
                v.apply(window, [].slice.call(arguments, 0))
            }, B.push("func=" + j)
        }
        B = "baiduboxapp://" + a + "?" + B.join("&"), window.webkit.messageHandlers.BBAMNPJSBridge.postMessage(B)
    }
    var c = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"),
        b = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/android/invokeApp"),
        v = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/ios/invokeApp"),
        B = require("@baidu/Boxjs-amd/dist/core/BDPolyfill/parser"),
        j = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend"),
        h = require("@baidu/Boxjs-amd/dist/utils/postMessageUser");
    return function(g, y, w) {
        var _ = "",
            P = g.split("/"),
            module = P[0],
            k = P[1],
            O = c.isIOS ? "ios" : c.isAndroid ? "android" : "",
            C = B(module, k, y, O),
            S = C ? C.thunk : void 0;
        if (c.isFunction(w) ? _ = c.cbWithoutCache(w, S) : w && (_ = w), C) {
            var A = {};
            if (c.isObject(C.data) ? c.isArray(C.data) ? y = C.data || [] : (y = y || {}, j(y, C.data)) : y = C.data, "ios" !== O || C.noParams) A = y;
            else {
                C.action && (A = {
                    action: C.action
                });
                var I = C.paramName || "params";
                y && c.isObject(y) && "{}" !== JSON.stringify(y) && (A[I] = encodeURIComponent(JSON.stringify(y))), y && c.isString(y) && y.length && (A[I] = encodeURIComponent(y)), C.next && (A.next = C.next)
            }
            switch (c.isObject(C.extData) && j(A, C.extData), O) {
                case "ios":
                    C.data && C.data.shareSuccessCB && (A.successcallback = C.data.shareSuccessCB), C.data && C.data.shareErrorCB && (A.errorcallback = C.data.shareErrorCB), h.indexOf(window.searchboxBoxjsId) > -1 ? "callShare" === C.module ? a(C.module, A) : a(C.module, A, _) : C.hasCB === !1 ? v(C.module, A) : v(C.module, A, _);
                    break;
                case "android":
                    var N = [];
                    if (c.isString(A) && A) N.push(A);
                    else if (c.isObject(A) && !c.isArray(A) && "{}" !== JSON.stringify(A)) N.push(JSON.stringify(A));
                    else if (c.isArray(A) && "[]" !== JSON.stringify(A))
                        for (var i = 0; i < A.length; i++) N.push(A[i]);
                    if (C.callbackKey && "func" === C.callbackKey ? N.push(C.data.func) : C.tchasOwncallback ? N.push("onLogSuccess") : (C.hasCB !== !1 && C.async !== !1 && N.push(_), C.data && C.data.shareSuccessCB && N.push(C.data.shareSuccessCB), C.data && C.data.shareErrorCB && N.push(C.data.shareErrorCB)), N.length <= 0) var re = b(C.module, C.action);
                    else var re = b(C.module, C.action, N);
                    C.async === !1 && window[_](re)
            }
            C.hasCB === !1 && window[_](JSON.stringify(c.sdkError.COMMAND_SUCCESS))
        } else window[_](JSON.stringify(c.sdkError.COMMAND_NOT_EXIST))
    }
}), define("@baidu/Boxjs-amd/dist/core/BDPolyfill/parser", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend", "@baidu/Boxjs-amd/dist/core/BDPolyfill/filter", "@baidu/Boxjs-amd/dist/utils/platform"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"),
        c = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend"),
        b = require("@baidu/Boxjs-amd/dist/core/BDPolyfill/filter"),
        v = require("@baidu/Boxjs-amd/dist/utils/platform");
    return function(module, B, j, h) {
        var g = b[module + "/" + B],
            y = {},
            w = v.boxType,
            _ = h;
        "main" !== w && (h = [h, w].join(""));
        var P = g[h];
        if (P) {
            var k = P.filter || g[_].filter || {},
                O = P.thunk || g[_].thunk,
                y = {
                    module: module,
                    action: B,
                    data: j,
                    extData: {},
                    hasCB: P.hasCB || g[_].hasCB,
                    callbackKey: k.callbackKey || ""
                };
            return k && a.isFunction(k) && c(y, k(module, B, j)), O && a.isFunction(O) && (y.thunk = O), y
        }
    }
}), define("@baidu/Boxjs-amd/dist/core/invoke", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/core/schemeSplicer", "@baidu/Boxjs-amd/dist/core/versionMap", "@baidu/Boxjs-amd/dist/core/BDPolyfill/index", "@baidu/Boxjs-amd/dist/utils/versionTools", "@baidu/Boxjs-amd/dist/thirdParty/log", "@baidu/Boxjs-amd/dist/utils/platform"], function(require) {
    function a(a) {
        var c = "",
            b = "",
            B = {};
        if (v.isObject(a)) c = a.errCode >= 0 ? a.errCode : +a.status, b = a.errMsg || a.message, B = a.data;
        else {
            try {
                a = JSON.parse(a)
            } catch (e) {
                console.log(e)
            }
            c = +a.status || a, B = a.data || arguments[1]
        }
        return {
            errCode: c,
            errMsg: b,
            data: B || {}
        }
    }

    function c(a) {
        for (var i in a) "number" == typeof a[i] ? a[i] = "" + a[i] : "object" == typeof a[i] && (a[i] = c(a[i]));
        return a
    }

    function b(a) {
        if (a.callback && "function" == typeof a.callback) var b = a.callback;
        var v = JSON.stringify(a),
            B = JSON.parse(v);
        return B.callback = b, c(B)
    }
    var v = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"),
        B = require("@baidu/Boxjs-amd/dist/core/schemeSplicer"),
        j = require("@baidu/Boxjs-amd/dist/core/versionMap"),
        h = require("@baidu/Boxjs-amd/dist/core/BDPolyfill/index"),
        g = require("@baidu/Boxjs-amd/dist/utils/versionTools"),
        y = require("@baidu/Boxjs-amd/dist/thirdParty/log"),
        w = require("@baidu/Boxjs-amd/dist/utils/platform");
    return w.versionCompare, w.boxVersion,
        function(c, w, _) {
            var P = j[c],
                k = Math.floor(100 * Math.random());
            if ("swan" === window.searchboxBoxjsId && w && !w.cancelNumTostr && (w = b(w)), c.match("Sync")) {
                if (!c) return v.sdkError.COMMAND_NOT_EXIST;
                if (!v.isBoxApp()) return v.sdkError.NOT_IN_BDBOX;
                var O = "",
                    C = function() {},
                    S = g.getWhoCanHandle(c);
                O = "old" === S ? h(c, w || {}, C) : "new" === S ? B(c, w || {}, C, P) : v.sdkError.COMMAND_NOT_EXIST;
                var A = a(O);
                return A = P.thunk ? P.thunk(A) : A, 0 === A.errCode ? (6 === k && y(window.searchboxBoxjsId, "succ_" + c), A.data) : (y(window.searchboxBoxjsId, "fail_" + c, A), A)
            }
            return new Promise(function(b, j) {
                if (!c) return void j(v.sdkError.COMMAND_NOT_EXIST);
                if (!v.isBoxApp()) return void j(v.sdkError.NOT_IN_BDBOX);
                var O = function(v) {
                        var B = a(v);
                        0 === B.errCode ? (6 === k && y(window.searchboxBoxjsId, "succ_" + c), b(B.data)) : (y(window.searchboxBoxjsId, "fail_" + c, B), j({
                            errCode: B.errCode,
                            errMsg: B.errMsg
                        }))
                    },
                    C = g.getWhoCanHandle(c);
                "old" === C ? h(c, w || {}, O) : "new" === C ? B(c, w || {}, O, P, _) : j(v.sdkError.COMMAND_NOT_EXIST)
            })
        }
}), define("@baidu/Boxjs-amd/dist/core/schemeSplicer", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/utils/platform", "@baidu/Boxjs-amd/dist/utils/postMessageUser"], function(require) {
    function a(a) {
        var c = document.createElement("iframe"),
            b = document.body || document.getElementsByTagName("body")[0];
        c.style.display = "none", c.src = a, b.appendChild(c), setTimeout(function() {
            b.removeChild(c), c = null
        }, 0)
    }

    function c(a) {
        var c = window.Bdbox_android_jsbridge;
        if (!c || !c.dispatch) {
            var re = window.prompt("BdboxApp:" + JSON.stringify({
                obj: "Bdbox_android_jsbridge",
                func: "dispatch",
                args: [a]
            }));
            return re
        }
        c.dispatch(a)
    }

    function b(a) {
        window.webkit.messageHandlers.BBAMNPJSBridge.postMessage(a)
    }

    function v(a) {
        window.webkit.messageHandlers.BBAMNPJSBridgeWebViewComponent.postMessage(a)
    }

    function B(a) {
        var c = window.Bdbox_aiapps_jsbridge;
        return c.dispatch(a)
    }

    function j(a) {
        var re = window.prompt("BdboxApp:" + JSON.stringify({
            obj: "mnp",
            func: "dispatch",
            args: [a]
        }));
        return re
    }
    var h = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"),
        g = require("@baidu/Boxjs-amd/dist/utils/platform"),
        y = require("@baidu/Boxjs-amd/dist/utils/postMessageUser"),
        w = g.versionCompare,
        _ = g.boxVersion;
    return function(g, P, k, O, C) {
        var S = [],
            A = "",
            I = "",
            N = O.hasCB === !1 ? !1 : !0,
            M = P.useCompontentBridge,
            W = {},
            D = "v" + O.v + "/" + g,
            E = {},
            T = P && P.func ? P.func : null,
            C = C ? C : !1;
        D.match("swan/launch") && P.from && (S.push("from=" + P.from), P.from = void 0), "{}" !== JSON.stringify(P) && (W = {
            params: encodeURIComponent(JSON.stringify(P))
        }), O.filter ? (E = O.filter(P), P = E.data || W, E.action && (D = "v" + O.v + "/" + E.module + "/" + E.action), O.schemeNoV && (D = E.module + "/" + E.action)) : P = W;
        for (var i in P) S.push(i + "=" + P[i]);
        if (h.isFunction(k) ? I = h.cbWithoutCache(k, O.thunk) : k && (I = k), E.tchasOwncallback && (I = "onLogSuccess"), N && S.push("callback=" + I), C && S.push("abtest=" + encodeURIComponent(JSON.stringify(C))), E.callbackKey && S.push(E.callbackKey + "=" + T), A = window.searchboxBoxjsId && "swan" !== window.searchboxBoxjsId ? "baiduboxapp://" + D + "?" + S.join("&") + "&upgrade=0&oauthType=" + window.searchboxBoxjsId : "baiduboxapp://" + D + "?" + S.join("&") + "&upgrade=0", D.match("Sync")) {
            var re = {};
            if (re = h.isAndroid ? B(A) : j(A)) try {
                return JSON.parse(re)
            } catch (e) {
                return h.sdkError.COMMAND_FAIL
            }
        } else if (h.isAndroid && w(_, "9.0") >= 0) {
            var re = c(A);
            if (re) try {
                re = JSON.parse(re), re && "false" === re.result && window[I](h.sdkError.COMMAND_FAIL)
            } catch (e) {
                window[I](h.sdkError.COMMAND_FAIL)
            }
        } else M ? v(A) : y.indexOf(window.searchboxBoxjsId) > -1 ? b(A) : a(A);
        N || k(h.sdkError.COMMAND_SUCCESS)
    }
}), define("@baidu/Boxjs-amd/dist/core/versionMap", ["require"], function() {
    return {}
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/android/invokeApp", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/version_compare", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getVersion", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getLiteVersion"], function(require) {
    function a(a, j, h) {
        if (h && !b.isArray(h) && (h = Array.prototype.slice.call(arguments, 0).slice(2)), window[a] && window[a][j]) {
            var g = window[a][j].apply(window[a], h);
            return {
                error: 0,
                result: g,
                __from: "js"
            }
        }
        var y = B();
        if (v(y, 4.8) >= 0 || b.$isLiteBox()) {
            var w = c(a, j, h);
            return w = w ? JSON.parse(w) : {}, w.__from = "app", w
        }
        if ("4.7.1" === y || "4.7" == y) {
            var _ = c(a, j, h);
            return {
                error: 0,
                result: _,
                __from: "app4.7"
            }
        }
        return {
            error: 200
        }
    }

    function c(a, c, v) {
        if (!b.$isBox() && !b.$isLiteBox()) return {
            error: 201
        };
        if (!b.$isAndroid()) return {
            error: 202
        };
        var B = {
            obj: a,
            func: c,
            args: v ? v : []
        };
        try {
            return window.prompt("BdboxApp:" + JSON.stringify(B))
        } catch (e) {
            return {
                error: 201
            }
        }
    }
    var b = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"),
        v = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/version_compare"),
        B = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getVersion");
    return require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getLiteVersion"), a
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function(require) {
    function a(c, B, h) {
        for (var g in B) h && (b(B[g]) || v(B[g])) ? (b(B[g]) && !b(c[g]) && (c[g] = {}), v(B[g]) && !v(c[g]) && (c[g] = []), a(c[g], B[g], h)) : j(B[g]) || (c[g] = B[g])
    }
    var c = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"),
        b = c.isPlainObject,
        v = c.isArray,
        B = c.isBoolean,
        j = c.isUndefined;
    return function(b) {
        var v, j = c.emptyArr.slice.call(arguments, 1);
        return B(b) && (v = b, b = j.shift()), j.forEach(function(c) {
            a(b, c, v)
        }), b
    }
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/ios/invokeApp", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper");
    return function(c, b, v) {
        if (c && (a.$isBox() || a.$isLiteBox())) {
            var B = [];
            if (a.isFunction(b)) v = b;
            else
                for (var i in b) B.push(i + "=" + b[i]);
            if (a.isFunction(v)) {
                var j = "_bdbox_js_" + a.getId();
                window[j] = function() {
                    v.apply(window, [].slice.call(arguments, 0))
                }, B.push("func=" + j)
            } else v && B.push("func=" + v);
            B = "baiduboxapp://" + c + "?" + B.join("&");
            var h = document.createElement("iframe");
            h.style.display = "none", h.src = B;
            var g = document.body || document.getElementsByTagName("body")[0];
            g.appendChild(h), setTimeout(function() {
                g.removeChild(h), h = null
            }, 0)
        }
    }
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/detect", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function(require) {
    function a(a) {
        var c = {
            name: "unknown",
            version: 0
        };
        this === window || this.os || (this.os = c), a = a || navigator.userAgent;
        var b = {
            Weibo: /weibo/i,
            Wechat: /micromessenger\//i,
            QQ: /QQ\//
        };
        for (var i in b) b.hasOwnProperty(i) && (c["is" + i] = b[i].test(a));
        c.isUC = a.match(/UC/) || window.ucweb || window.ucbrowser;
        var v = a.match(/Windows Phone ([\d.]+)/);
        if (v) return c.win10 = !0, c.version = v[1], c.name = "win10", c;
        var B = a.match(/(Android);?\s+([\d.]+)?/);
        if (B) return c.android = !0, c.version = B[2], c.name = "android", c;
        var j = a.match(/(iPad).*OS\s([\d_]+)/),
            h = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            g = !j && a.match(/(iPhone\sOS)\s([\d_]+)/);
        return g && !h ? (c.ios = c.iphone = !0, c.version = g[2].replace(/_/g, "."), c.name = "ios", c) : j ? (c.ios = c.ipad = !0, c.name = "ios", c.version = j[2].replace(/_/g, "."), c) : h ? (c.name = "ios", c.ios = c.ipod = !0, c.version = h[3] ? h[3].replace(/_/g, ".") : null, c) : c
    }
    var c = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper");
    return a.apply(c), a
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getInfoVersion", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"),
        c = function() {
            var b = 0;
            if (a.$isInfoBox()) {
                var v, B = navigator.userAgent;
                (v = /baiduboxapp\/([\d+.]+)/.exec(B)) && (b = v[1])
            }
            return c = function() {
                return b
            }, b
        };
    return c
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getLiteVersion", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"),
        c = function() {
            var b = 0;
            if (a.$isLiteBox()) {
                var v, B = navigator.userAgent;
                (v = /baiduboxapp\/([\d+.]+)/.exec(B)) && (b = v[1])
            }
            return c = function() {
                return b
            }, b
        };
    return c
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getProVersion", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"),
        c = function() {
            var b = 0;
            if (a.$isProBox()) {
                var v, B = navigator.userAgent;
                (v = /baiduboxapp\/([\d+.]+)/.exec(B)) && (b = v[1])
            }
            return c = function() {
                return b
            }, b
        };
    return c
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getVersion", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"),
        c = function() {
            var b = 0;
            if (window.baiduboxapp_version) b = window.baiduboxapp_version;
            else if (a.$isBox()) {
                var v, B = navigator.userAgent;
                (v = /([\d+.]+)_(?:diordna|enohpi)_/.exec(B)) ? (v = v[1].split("."), b = v.reverse().join(".")) : (v = /baiduboxapp\/([\d+.]+)/.exec(B)) && (b = v[1])
            }
            return c = function() {
                return b
            }, b
        };
    return c
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/queryToJson", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function(require) {
    return require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"),
        function(a) {
            var c = a.split("?"),
                b = c[1] ? c[1] : c[0],
                v = b.split("&"),
                B = {};
            return v.forEach(function(a) {
                if (a = a.split("="), a[0].length > 0) {
                    var c = "";
                    try {
                        c = decodeURIComponent(a[1]) || ""
                    } catch (e) {}
                    B[a[0]] = c
                }
            }), B
        }
}), define("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/version_compare", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function(require) {
    var a = (require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), function(a, c) {
        c += "", a += "";
        for (var b = a.split("."), v = c.split("."), i = 0, B = Math.max(b.length, v.length); B > i; i++) {
            if (b[i] && !v[i] && parseInt(b[i]) > 0 || parseInt(b[i]) > parseInt(v[i])) return 1;
            if (v[i] && !b[i] && parseInt(v[i]) > 0 || parseInt(b[i]) < parseInt(v[i])) return -1
        }
        return 0
    });
    return a
}), define("@baidu/Boxjs-amd/dist/thirdParty/log", ["require"], function() {
    function a() {
        var a = "";
        return /\biPhone\b|\biPad\b/.test(B) && !/android/i.test(B) ? a = "ios" : /android/i.test(B) ? a = "android" : /windows/i.test(B) && (a = "windows"), a
    }

    function c() {
        var a = "",
            c = "";
        if (c == /([\d+.]+)_(?:diordna|enohpi)_/.exec(B)) try {
            c = c[1].split("."), c = c.reverse(), a = c.join(".")
        } catch (e) {
            console.log("获取ios手百版本无匹配，原始字符为：" + B)
        } else if (c == /baiduboxapp\/([\d]+([.][\d]+){1,3})/.exec(B)) try {
            a = c[1]
        } catch (e) {
            console.log("获取android手百版本无匹配，原始字符为：" + B)
        }
        return a
    }

    function b() {
        var a = c();
        if (null == a || "string" != typeof a) return a;
        var b = /^\d+\.\d+/,
            v = "";
        return b.test(a) && (v = a.match(b), v.length) ? v[0] : a
    }

    function v(a) {
        if (a.common && a.cusData && a.type) {
            var c = a.common,
                b = a.cusData,
                v = {
                    pv: 1,
                    jserr: 1,
                    event: 2,
                    custom_err: 1,
                    perf: 2
                },
                B = function(a) {
                    var c = {
                        pv: 0,
                        jserr: 0,
                        custom_err: 0,
                        perf: 1
                    };
                    return "event" === a.type ? a.cusData.evt && a.cusData.evt.match(/^c_\w*/) ? 0 : 1 : c[a.type]
                },
                j = window.location.protocol;
            "http:" !== j && (j = "https:");
            var h = j + "//m.baidu.com/tcbox?service=bdbox&action=pblog&",
                g = {
                    type: B(a),
                    timestamp: +Date.now(),
                    id: 10092,
                    content: {
                        from: "whole",
                        type: "0",
                        value: "0",
                        page: b.id,
                        source: b.name,
                        platform: c.platform
                    }
                };
            if (b.errCode && (g.content.type = "-1", g.content.value = b.errCode), B(a))
                if ("event" === a.type) g.content.duration = parseInt(b.msg) / 1e3;
                else {
                    var y = [],
                        w = {
                            id: "",
                            d: "",
                            info: {}
                        };
                    for (var _ in b) w.id = _, w.d = b[_], y.push(w), w = {
                        id: "",
                        d: "",
                        info: {}
                    };
                    g.content.part = y
                }
            var P = {
                appid: 1,
                dataid: 2,
                cateid: 99,
                actionid: v[a.type],
                actiontype: "0",
                actiondata: g
            };
            h += "data=" + encodeURIComponent(JSON.stringify(P)), setTimeout(function() {
                var a = document.createElement("img");
                a.onload = a.onerror = a.onabort = function() {
                    a = null
                }, a.src = h
            })
        }
    }
    var B = navigator.userAgent;
    return window.log = function(B, j, h) {
        var g = {
                hybridVersion: window.hybridVersion || "0",
                platform: a() || "other",
                boxV: b() || "0",
                boxVersion: c() || "0",
                page_id: "301_" + B,
                network: "",
                cuid: ""
            },
            y = {
                evt: "c_" + j,
                msg: "jssdk_" + j,
                name: j,
                id: B
            };
        h && (y.errCode = h.errCode + ""), v({
            common: g,
            cusData: y,
            type: "event"
        })
    }
}), define("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", ["require"], function() {
    function a(a, c) {
        return B.cleanObj.toString.call(a).slice(8, -1) === c
    }
    var c = +new Date,
        b = (c + "").slice(-3),
        v = navigator.userAgent,
        B = {
            isBoxApp: function(a) {
                return a = a || "", / baiduboxapp\//i.test(v) === !1 ? !1 : v.indexOf(a + " baiduboxapp") < 0 ? !1 : !0
            },
            isBox: / baiduboxapp\//i.test(v) && !/ (lite|info) baiduboxapp/.test(v),
            $isBox: function() {
                var a = window.navigator || {},
                    c = a.userAgent;
                return / baiduboxapp\//i.test(c) && !/ (lite|info) baiduboxapp/.test(c)
            },
            isLiteBox: / (lite|info) baiduboxapp\//i.test(v),
            $isLiteBox: function() {
                var a = window.navigator || {},
                    c = a.userAgent;
                return / (lite|info) baiduboxapp\//i.test(c)
            },
            isInfoBox: / info baiduboxapp\//i.test(v),
            $isInfoBox: function() {
                var a = window.navigator || {},
                    c = a.userAgent;
                return / info baiduboxapp\//i.test(c)
            },
            isProBox: / pro baiduboxapp\//i.test(v),
            $isProBox: function() {
                var a = window.navigator || {},
                    c = a.userAgent;
                return / pro baiduboxapp\//i.test(c)
            },
            isIOS: /(iPhone|iPod|iPad)/.test(v),
            $isIOS: function() {
                var a = window.navigator || {};
                return /(iPhone|iPod|iPad)/.test(a.userAgent)
            },
            isAndroid: /(Android);?[\s\/]+([\d.]+)?/.test(v),
            $isAndroid: function() {
                var a = window.navigator || {};
                return /(Android);?[\s\/]+([\d.]+)?/.test(a.userAgent)
            },
            getId: function() {
                return b++
            },
            emptyArr: [],
            emptyFn: function() {},
            cleanObj: {},
            byId: function(a) {
                return B.isString(a) ? document.getElementById(a) : a
            },
            toArray: function(a) {
                return B.emptyArr.slice.call(a)
            },
            $: function(a, c) {
                return c = c && 1 === c.nodeType ? c : document, B.toArray(c.querySelectorAll(a))
            }
        };
    return "Function,String,Array,Number,RegExp".replace(/[^, ]+/g, function(t) {
        B["is" + t] = function(s) {
            return a(s, t)
        }
    }), B.isBoolean = function(a) {
        return a === !0 || a === !1
    }, B.isObject = function(a) {
        return "object" == typeof a
    }, B.isUndefined = function(a) {
        return void 0 === a
    }, B.isWindow = function(a) {
        return null != a && a == a.window
    }, B.isPlainObject = function(a) {
        return B.isObject(a) && !B.isWindow(a) && Object.getPrototypeOf(a) == Object.prototype
    }, B.cbWithoutCache = function(a, c) {
        var b = "_bdbox_js_" + B.getId();
        return window[b] = function(b) {
            try {
                b = B.isString(b) ? JSON.parse(b) : b
            } catch (e) {
                console.log("native callback params json parse error")
            }
            a(c && B.isFunction(c) ? c(b) : b)
        }, b
    }, B.sdkError = {
        COMMAND_NOT_EXIST: {
            errCode: 901,
            errMsg: "不存在此端能力"
        },
        NOT_IN_BDBOX: {
            errCode: 902,
            errMsg: "手百外无法调用端能力"
        },
        COMMAND_FAIL: {
            errCode: 903,
            errMsg: "端能力调用失败"
        },
        COMMAND_SUCCESS: {
            errCode: 0,
            errMsg: "调用成功"
        }
    }, B
}), define("@baidu/Boxjs-amd/dist/utils/platform", ["require", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/version_compare", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getVersion", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getInfoVersion", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getLiteVersion", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getProVersion", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/detect"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"),
        c = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/version_compare"),
        b = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getVersion"),
        v = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getInfoVersion"),
        B = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getLiteVersion"),
        j = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/getProVersion"),
        h = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/detect").apply(a);
    return {
        versionCompare: c,
        isIOS: a.isIOS,
        isAndroid: a.isAndroid,
        os: a.isIOS ? "ios" : a.isAndroid ? "android" : "none",
        osVersion: h.version,
        isBox: a.isBoxApp(),
        boxType: a.isProBox ? "pro" : a.isInfoBox ? "info" : a.isLiteBox ? "lite" : "main",
        boxVersion: j() || v() || B() || b()
    }
}), define("@baidu/Boxjs-amd/dist/utils/postMessageUser", ["require"], function() {
    return ["swan"]
}), define("@baidu/Boxjs-amd/dist/utils/versionTools", ["require", "@baidu/Boxjs-amd/dist/core/BDPolyfill/filter", "@baidu/Boxjs-amd/dist/core/versionMap", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper", "@baidu/Boxjs-amd/dist/utils/platform", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/queryToJson"], function(require) {
    var a = require("@baidu/Boxjs-amd/dist/core/BDPolyfill/filter"),
        c = require("@baidu/Boxjs-amd/dist/core/versionMap"),
        b = (require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), require("@baidu/Boxjs-amd/dist/utils/platform")),
        v = b.versionCompare,
        B = b.boxVersion,
        j = {};
    return j.queryToJson = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/utils/queryToJson"), j.platform = b.os, j.canInvokeNew = function(a) {
        var h = c[a],
            g = h.versionRange,
            y = j.platform,
            w = b.boxType;
        if ("main" !== w) y = [y, w].join(""), g = h[y + "VersionRange"];
        else if (!g) {
            if (h.notSupport) return !0;
            g = h[y + "VersionRange"]
        }
        var _ = g[0],
            P = g[1],
            k = v(B, _) >= 0,
            O = !!P && v(B, P) <= 0;
        return !k || P && !O || h.notSupport && !(h.notSupport.indexOf(y) < 0) ? !1 : !0
    }, j.canInvokeOld = function(c) {
        var h = j.platform,
            g = a[c],
            y = b.boxType;
        if (!g) return !1;
        "main" !== y && (h = [h, y].join(""));
        var w = g[h];
        if (!w) return !1;
        var _ = w.versionRange,
            P = !1,
            k = "",
            O = "",
            C = !1,
            S = !1;
        return !_ || _ && 0 === _.length ? P = !0 : (k = _[0], O = _[1], C = !!k && v(B, k) >= 0, S = !O || !!O && v(B, O) <= 0), P || S && C ? !0 : !1
    }, j.getWhoCanHandle = function(a) {
        var b = c[a];
        return b && (b = b.v), !b && j.canInvokeOld(a) ? "old" : b && j.canInvokeNew(a) ? "new" : b && !j.canInvokeNew(a) && j.canInvokeOld(a) ? "old" : void 0
    }, j
}), define("@baidu/Boxjs-amd/index", ["require", "@baidu/Boxjs-amd/dist/components/cache/index", "@baidu/Boxjs-amd/dist/components/data/index", "@baidu/Boxjs-amd/dist/components/device/index", "@baidu/Boxjs-amd/dist/components/event/index", "@baidu/Boxjs-amd/dist/components/log/index", "@baidu/Boxjs-amd/dist/components/media/index", "@baidu/Boxjs-amd/dist/components/net/index", "@baidu/Boxjs-amd/dist/components/ui/index", "@baidu/Boxjs-amd/dist/components/view/index", "@baidu/Boxjs-amd/dist/core/BDPolyfill/filter", "@baidu/Boxjs-amd/dist/core/versionMap", "@baidu/Boxjs-amd/dist/core/invoke", "@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend", "@baidu/Boxjs-amd/dist/utils/platform", "@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"], function(require) {
    function a() {
        var a = {},
            c = require("@baidu/Boxjs-amd/dist/utils/platform");
        return Object.keys(c).forEach(function(b) {
            var v = c[b];
            a[b] = function() {
                return "versionCompare" === b ? v(arguments[0], arguments[1]) : v
            }
        }), a
    }
    var c = {};
    return c.h5API = {}, c.cache = require("@baidu/Boxjs-amd/dist/components/cache/index"), c.data = require("@baidu/Boxjs-amd/dist/components/data/index"), c.device = require("@baidu/Boxjs-amd/dist/components/device/index"), c.event = require("@baidu/Boxjs-amd/dist/components/event/index"), c.log = require("@baidu/Boxjs-amd/dist/components/log/index"), c.media = require("@baidu/Boxjs-amd/dist/components/media/index"), c.net = require("@baidu/Boxjs-amd/dist/components/net/index"), c.ui = require("@baidu/Boxjs-amd/dist/components/ui/index"), c.view = require("@baidu/Boxjs-amd/dist/components/view/index"), c.filter = require("@baidu/Boxjs-amd/dist/core/BDPolyfill/filter"), c.versionMap = require("@baidu/Boxjs-amd/dist/core/versionMap"), c.invoke = require("@baidu/Boxjs-amd/dist/core/invoke"), c.extend = require("@baidu/Boxjs-amd/dist/thirdParty/bdbox/extend"), c.platform = require("@baidu/Boxjs-amd/dist/utils/platform"), c.$ = require("@baidu/Boxjs-amd/dist/utils/_bdboxWrapper"), c.platform = a(), c
}), define("@baidu/Boxjs-amd", ["@baidu/Boxjs-amd/index"], function(mod) {
    return mod
});