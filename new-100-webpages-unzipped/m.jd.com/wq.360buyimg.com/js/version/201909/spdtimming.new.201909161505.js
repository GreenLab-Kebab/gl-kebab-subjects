;

function loadTtiPolyfill() {
    if (!window.Promise) {
        return;
    }
    var h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        k = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        };

    function l() {
        l = function() {};
        h.Symbol || (h.Symbol = m)
    }
    var n = 0;

    function m(a) {
        return "jscomp_symbol_" + (a || "") + n++
    }

    function p() {
        l();
        var a = h.Symbol.iterator;
        a || (a = h.Symbol.iterator = h.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && k(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return q(this)
            }
        });
        p = function() {}
    }

    function q(a) {
        var b = 0;
        return r(function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        })
    }

    function r(a) {
        p();
        a = {
            next: a
        };
        a[h.Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function t(a) {
        p();
        var b = a[Symbol.iterator];
        return b ? b.call(a) : q(a)
    }

    function u(a) {
        if (!(a instanceof Array)) {
            a = t(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var v = 0;

    function w(a, b) {
        var c = XMLHttpRequest.prototype.send,
            d = v++;
        XMLHttpRequest.prototype.send = function(f) {
            for (var e = [], g = 0; g < arguments.length; ++g) e[g - 0] = arguments[g];
            var E = this;
            a(d);
            this.addEventListener("readystatechange", function() {
                4 === E.readyState && b(d)
            });
            return c.apply(this, e)
        }
    }

    function x(a, b) {
        var c = fetch;
        fetch = function(d) {
            for (var f = [], e = 0; e < arguments.length; ++e) f[e - 0] = arguments[e];
            return new Promise(function(d, e) {
                var g = v++;
                a(g);
                c.apply(null, [].concat(u(f))).then(function(a) {
                    b(g);
                    d(a)
                }, function(a) {
                    b(a);
                    e(a)
                })
            })
        }
    }
    var y = "img script iframe link audio video source".split(" ");

    function z(a, b) {
        a = t(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value, b.includes(c.nodeName.toLowerCase()) || z(c.children, b)) return !0;
        return !1
    }

    function A(a) {
        var b = new MutationObserver(function(c) {
            c = t(c);
            for (var b = c.next(); !b.done; b = c.next()) b = b.value, "childList" == b.type && z(b.addedNodes, y) ? a(b) : "attributes" == b.type && y.includes(b.target.tagName.toLowerCase()) && a(b)
        });
        b.observe(document, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ["href", "src"]
        });
        return b
    }

    function B(a, b) {
        if (2 < a.length) return performance.now();
        var c = [];
        b = t(b);
        for (var d = b.next(); !d.done; d = b.next()) d = d.value, c.push({
            timestamp: d.start,
            type: "requestStart"
        }), c.push({
            timestamp: d.end,
            type: "requestEnd"
        });
        b = t(a);
        for (d = b.next(); !d.done; d = b.next()) c.push({
            timestamp: d.value,
            type: "requestStart"
        });
        c.sort(function(a, b) {
            return a.timestamp - b.timestamp
        });
        a = a.length;
        for (b = c.length - 1; 0 <= b; b--) switch (d = c[b], d.type) {
            case "requestStart":
                a--;
                break;
            case "requestEnd":
                a++;
                if (2 < a) return d.timestamp;
                break;
            default:
                throw Error("Internal Error: This should never happen");
        }
        return 0
    }

    function C(a) {
        a = a ? a : {};
        this.w = !!a.useMutationObserver;
        this.u = a.minValue || null;
        a = window.__tti && window.__tti.e;
        var b = window.__tti && window.__tti.o;
        this.a = a ? a.map(function(a) {
            return {
                start: a.startTime,
                end: a.startTime + a.duration
            }
        }) : [];
        b && b.disconnect();
        this.b = [];
        this.f = new Map;
        this.j = null;
        this.v = -Infinity;
        this.i = !1;
        this.h = this.c = this.s = null;
        w(this.m.bind(this), this.l.bind(this));
        x(this.m.bind(this), this.l.bind(this));
        D(this);
        this.w && (this.h = A(this.B.bind(this)))
    }
    C.prototype.getFirstConsistentlyInteractive = function() {
        var a = this;
        return new Promise(function(b) {
            a.s = b;
            "complete" == document.readyState ? F(a) : window.addEventListener("load", function() {
                F(a)
            })
        })
    };

    function F(a) {
        a.i = !0;
        var b = 0 < a.a.length ? a.a[a.a.length - 1].end : 0,
            c = B(a.g, a.b);
        G(a, Math.max(c + 5E3, b))
    }

    function G(a, b) {
        !a.i || a.v > b || (clearTimeout(a.j), a.j = setTimeout(function() {
            var b = performance.timing.navigationStart,
                d = B(a.g, a.b),
                b = (window.a && window.a.A ? 1E3 * window.a.A().C - b : 0) || performance.timing.domContentLoadedEventEnd - b;
            if (a.u) var f = a.u;
            else performance.timing.domContentLoadedEventEnd ? (f = performance.timing, f = f.domContentLoadedEventEnd - f.navigationStart) : f = null;
            var e = performance.now();
            null === f && G(a, Math.max(d + 5E3, e + 1E3));
            var g = a.a;
            5E3 > e - d ? d = null : (d = g.length ? g[g.length - 1].end : b, d = 5E3 > e - d ? null : Math.max(d, f));
            d && (a.s(d), clearTimeout(a.j), a.i = !1, a.c && a.c.disconnect(), a.h && a.h.disconnect());
            G(a, performance.now() + 1E3)
        }, b - performance.now()), a.v = b)
    }

    function D(a) {
        a.c = new PerformanceObserver(function(b) {
            b = t(b.getEntries());
            for (var c = b.next(); !c.done; c = b.next())
                if (c = c.value, "resource" === c.entryType && (a.b.push({
                        start: c.fetchStart,
                        end: c.responseEnd
                    }), G(a, B(a.g, a.b) + 5E3)), "longtask" === c.entryType) {
                    var d = c.startTime + c.duration;
                    a.a.push({
                        start: c.startTime,
                        end: d
                    });
                    G(a, d + 5E3)
                }
        });
        a.c.observe({
            entryTypes: ["longtask", "resource"]
        })
    }
    C.prototype.m = function(a) {
        this.f.set(a, performance.now())
    };
    C.prototype.l = function(a) {
        this.f.delete(a)
    };
    C.prototype.B = function() {
        G(this, performance.now() + 5E3)
    };
    h.Object.defineProperties(C.prototype, {
        g: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return [].concat(u(this.f.values()))
            }
        }
    });
    var H = {
        getFirstConsistentlyInteractive: function(a) {
            a = a ? a : {};
            return "PerformanceLongTaskTiming" in window ? (new C(a)).getFirstConsistentlyInteractive() : Promise.resolve(null)
        }
    };
    "undefined" != typeof module && module.exports ? module.exports = H : "function" === typeof define && define.amd ? define("ttiPolyfill", [], function() {
        return H
    }) : window.ttiPolyfill = H;
};
(function(global, factory) {
    var TOKEN = "spdtimming.new";
    if (!window.__SPD_AUTO && window.modulejs && typeof define == 'function') {
        define(TOKEN, factory);
    } else {
        factory();
    }
})(this, function(require, exports, module) {
    var randIdx = Math.random(),
        UA = navigator.userAgent,
        URL = (window.__DBG_SPD_RPT_URL || ((window.__DBG_SPD_PRE || "//fd.3.cn/cesu") + "/r?")),
        performTimingEvts = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"],
        ttiTime = null,
        ISWX = /(^|\s|;)+MicroMessenger\/([^;\s$]+)/g.exec(UA),
        ISMQQ = /(^|\s|;)+QQ\/([^;\s$]+)/g.exec(UA),
        ISJZYC = /(^|\s|;)+JZYC\/([^;\s$]+)/g.exec(UA),
        OSTypeList = {
            'android': [/(Android);?[\s\/]+([\d.]+)?/, [1, 2]],
            'ios': [/((iPad)|(iPod)|(iPhone)).*\s+OS\s+([\d_]+)/, function(r) {
                return ['ios', (r[5] ? r[5].replace(/_/g, '.') : "")]
            }],
            'unknow': [/(Android);?[\s\/]+([\d.]+)?/],
            'win': [/(\(|\s)*(Windows)[^\d.]+([\d\.]+).*((WOW64)*)/gi, [2, 3]]
        },
        HAS_RPT_PTS = {},
        HAS_RPT_PTS_P = {},
        ext_scrn = getScreenSize(),
        curOper = null,
        gImgIdx = 0,
        isExtReport = false,
        OS = getOS(UA);
    var gIsReport = true;

    function checkIsReport() {
        var nowDate = new Date();
        var nowDateTime = nowDate.getTime();
        if (window.athenaFdSetting && window.athenaFdSetting.sampling && window.athenaFdSetting.sampling.length > 0) {
            for (var i = 0, len = window.athenaFdSetting.sampling.length; i < len; i++) {
                var item = window.athenaFdSetting.sampling[i];
                if (item.start && item.end) {
                    var dataTime_s = (new Date(item.start)).getTime();
                    var dataTime_e = (new Date(item.end)).getTime();
                    if ((nowDateTime >= dataTime_s) && (nowDateTime < dataTime_e)) {
                        var rate = (item.rate === "0") ? 0 : parseInt(item.rate || 100) || 100;
                        gIsReport = (Math.ceil(Math.random() * 100) <= rate) ? true : false;
                        break;
                    }
                }
            }
        }
    }

    function loadScript(obj) {
        if (!loadScript.counter) {
            loadScript.counter = 1;
        }
        var url = obj.url,
            data = obj.data || '',
            charset = obj.charset || "gb2312",
            timeout = obj.timeout,
            callbackName = obj.callbackName || '',
            callback = obj.callback,
            errorback = obj.errorback,
            _head = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
            _script = document.createElement("script"),
            _isCleared = false,
            _timer = null,
            _jsonpLoadState = 'uninitialized';
        var complete = function(errCode) {
            if (!_script || _isCleared) {
                return;
            }
            _isCleared = true;
            if (_timer) {
                clearTimeout(_timer);
                _timer = null;
            }
            _script.onload = _script.onreadystatechange = _script.onerror = null;
            if (_head && _script.parentNode) {
                _head.removeChild(_script);
            }
            _script = null;
            if (callbackName) {
                window[callbackName] = null;
                try {
                    delete window[callbackName];
                } catch (e) {}
            }
            if (_jsonpLoadState != "loaded" && typeof errorback == "function") {
                errorback(errCode);
            }
        };
        var jsontostr = function(d) {
            var a = [];
            for (var k in d) {
                a.push(k + '=' + d[k]);
            }
            return a.join('&');
        };
        if (data) {
            url += (url.indexOf("?") != -1 ? "&" : "?") + (typeof data == 'string' ? data : jsontostr(data));
        }
        if (callbackName && typeof callback == "function") {
            var oldName = callbackName;
            callbackName = window[callbackName] ? callbackName + loadScript.counter++ : callbackName;
            window[callbackName] = function(jsonData) {
                _jsonpLoadState = 'loaded';
                callback.apply(null, arguments);
            };
            url = url.replace('=' + oldName, '=' + callbackName);
        }
        _jsonpLoadState = 'loading';
        _script.charset = charset;
        _script.id = 'spdscript_' + (new Date()).getTime() + '_' + Math.ceil(Math.random() * 100000);
        _script.onload = _script.onreadystatechange = function() {
            var uA = navigator.userAgent.toLowerCase();
            if (!(!(uA.indexOf("opera") != -1) && uA.indexOf("msie") != -1) || /loaded|complete/i.test(this.readyState)) {
                complete(_jsonpLoadState == "loaded" ? 200 : 500);
            }
        };
        _script.onerror = function() {
            complete(500);
        };
        if (timeout) {
            _timer = setTimeout(function() {
                complete(999);
            }, parseInt(timeout, 10));
        }
        setTimeout(function() {
            _script.src = url;
            try {
                _head.insertBefore(_script, _head.lastChild);
            } catch (e) {}
        }, 0);
    }

    function cookie(nm, v, d, p, ex) {
        if (void(0) == v) {
            if (window.JD && JD.cookie) {
                return JD.cookie.get(nm);
            } else {
                var s = document.cookie,
                    r;
                if (r = (new RegExp('(^|;)\\s*' + nm + '=([^;$]+)')).exec(document.cookie)) {
                    return r[2];
                }
            }
            return null;
        } else {
            var s = nm + "=" + encodeURIComponent(v);
            d && (s += ";domain=" + d);
            p && (s += ";path=" + p);
            if (ex) {
                var dt = new Date();
                dt.setTime(new Date().getTime() + ex * 1000);
                s += ";expires=" + dt.toGMTString();
            };
            document.cookie = s;
        }
    }

    function getActBegin() {
        var p = (window.performance || window.webkitPerformance || {}).timing;
        if (!p) {
            return null;
        }
        return (p.navigationStart || p.fetchStart);
    }

    function getScreenSize() {
        return window.screen.width + "," + window.screen.height + "\t" + (window.devicePixelRatio || 0) + "\t";
    }

    function rptTime(obj, immediat) {
        if (!gIsReport) {
            return;
        }
        var odat = obj || window._PFM_TIMING;
        if ((!odat || odat.length < 1)) {
            return;
        }
        if (typeof(window.athenaFdSetting) == 'object') {
            if (window.athenaFdSetting.switch != 1) {
                var wlStr = window.athenaFdSetting.pidWhitelist || '';
                var wlList = wlStr.split(',');
                var wlListLen = wlList.length;
                var isInWlList = false;
                var pageId = odat[0][0];
                for (var i = 0; i < wlListLen; i++) {
                    if (pageId == wlList[i]) {
                        isInWlList = true;
                        break;
                    }
                }
                if (!isInWlList) {
                    return;
                }
            }
        }
        getNetType(function(apn) {
            try {
                sentSpd(apn, odat);
            } catch (e) {
                console.error(e.stack || e);
            }
        });
    }

    function getOS(ua) {
        var r, it;
        for (var k in OSTypeList) {
            it = OSTypeList[k];
            if (it[0] instanceof Function) {
                r = it[0](ua);
                return k += r[1] ? ' ' + r[1] : '';
            } else if (r = it[0].exec(ua)) {
                if (it.length > 1) {
                    if (it[1] instanceof Function) {
                        r = it[1](r);
                    } else if (it[1] instanceof Array) {
                        r = [r[it[1][0]], r[it[1][1]]];
                    }
                }
                return k += r[1] ? ' ' + r[1] : '';
            }
        }
        return 'other';
    }

    function urly(a) {
        var b = [];
        for (var k in a) {
            a.hasOwnProperty(k) && b.push(k + "=" + encodeURIComponent(a[k]));
        }
        return b.join("&");
    }

    function sendUrl(url) {
        var img = new Image();
        window['_spd_img_cache' + (gImgIdx++)] = img;
        img.idx = gImgIdx;
        img.onload = img.onerror = img.onabort = function(e) {
            var t = e.target;
            t.onload = t.onerror = t.onabort = null;
            delete(window['_spd_img_cache' + t.idx]);
        }
        img.src = url;
    }

    function bounceFn(fn, delay) {
        var ret;
        ret = function() {
            ret.clear();
            var args;
            ret.th = setTimeout(function() {
                fn.apply(null, args);
                ret.th = 0;
            }, delay);
        };
        ret.clear = function() {
            if (ret.th) {
                clearTimeout(ret.th);
                ret.th = 0;
            }
        };
        return ret;
    }

    function getNetType(cb) {
        if (window.JD && JD.device) {
            JD.device.getNetwork(cb);
        } else {
            var r = /(\s|;)+NetType\/([^\s;\/]+)/g.exec(UA);
            if (r && r[2]) {
                var tp = "unknow";
                r[2] = r[2].toLowerCase();
                switch (r[2]) {
                    case "ctnet":
                    case "cmnet":
                    case "cunet":
                        curOper = r[2].substr(0, 2);
                        tp = "3g";
                        break;
                    case "ctwap":
                    case "cmwap":
                    case "cuwap":
                        curOper = r[2].substr(0, 2);
                        tp = "2g";
                        break;
                    default:
                        curOper = null;
                }
                cb(tp);
            } else {
                try {
                    if (ISWX) {
                        document.addEventListener('WeixinJSBridgeReady', function(e) {
                            setTimeout(function() {
                                WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
                                    var networkType = e.err_msg || 'unknow';
                                    if (networkType.indexOf(':') != -1) {
                                        networkType = (networkType.split(':')[1] || 'unknow');
                                    }
                                    if (networkType == 'edge') {
                                        networkType = '3g';
                                    } else if (networkType == 'wwan') {
                                        networkType = '4g';
                                    } else if (networkType == 'fail') {
                                        networkType = 'unknow';
                                    }
                                    cb(networkType);
                                });
                            }, 500);
                        });
                    } else if (ISMQQ) {
                        if (window.mqq && mqq.device) {
                            mqq.invoke('device', 'getNetworkInfo', function(data) {
                                var type = ({
                                    '-1': 'unknow',
                                    "0": 'unknow',
                                    "1": 'wifi',
                                    "2": '2G',
                                    "3": '3G',
                                    "4": '4G'
                                }[data.type]) || 'unknow';
                                cb(type);
                            });
                        } else {
                            cb('unknow');
                        }
                    } else if (ISJZYC) {
                        if (window.WQAPI && WQAPI.network) {
                            cb(String(WQAPI.network.type()).toLowerCase());
                        } else {
                            cb('unknow');
                        }
                    } else {
                        cb('unknow');
                    }
                } catch (e) {
                    console.error('Error', e);
                    cb('unknow');
                }
            }
        }
    }

    function getTime(dt) {
        if (!dt) {
            return 0;
        }
        if (dt instanceof Date) {
            return dt.getTime();
        }
        return dt;
    }

    function getFPTime() {
        var fpTime = [];
        if (window.performance && window.performance.getEntriesByType) {
            try {
                var entries = performance.getEntriesByType('paint');
                for (var i = 0; i < entries.length; i++) {
                    var entry = entries[i];
                    if (entry.entryType === 'paint') {
                        if (entry.name === 'first-paint') {
                            fpTime[0] = parseInt(entry.startTime, 10);
                        }
                        if (entry.name === 'first-contentful-paint') {
                            fpTime[1] = parseInt(entry.startTime, 10);
                        }
                    }
                }
            } catch (e) {}
        }
        return fpTime;
    }

    function getTTITime(cb) {
        loadTtiPolyfill();
        window.ttiPolyfill && window.ttiPolyfill.getFirstConsistentlyInteractive({}).then(function(tti) {
            cb(tti);
        });
    }

    function sentSpd(apnType, objObj) {
        var timing = (window.performance || window.webkitPerformance).timing,
            preTiming = getActBegin(),
            repeatable = !!window.__SPD_RPT_REPEAT,
            durNavi;
        console.log('---RptData--', objObj);
        var t0 = 0,
            T0 = 0,
            t, rptCt = 0,
            rptBaseInfo, dbgPid = 0,
            pgid = 0;
        if (objObj) {
            rptBaseInfo = objObj[0];
            if (!rptBaseInfo || !(rptBaseInfo instanceof Array)) {
                console.error('Invalide data for report', objObj);
                return;
            }
            t0 = getTime(rptBaseInfo[1]);
            pgid = rptBaseInfo[0];
            dbgPid = (rptBaseInfo[2] || 0);
        }
        if (!t0 || !pgid) {
            console.error('Invalide data for report', objObj);
            return;
        }
        T0 = t0 - preTiming;
        var rptDat = {
            'pid': pgid,
            'os': OS ? OS.replace(/%20/g, "") : "other",
            'apn': (apnType || "").toLowerCase(),
            'wq_area': cookie('wq_area'),
            '_': (randIdx = randIdx + 1)
        };
        for (var i = 1, il = objObj.length; i < il; i++) {
            (repeatable || !HAS_RPT_PTS[i]) && (t = objObj[i]) && (t = t - t0) > 0 && (rptDat['s' + i] = t) && (HAS_RPT_PTS[i] = 1) && rptCt++;
            objObj[i] = null;
        }
        if (window._PFM_PERFORMANCE == true) {
            for (i = 1, il = performTimingEvts.length; il > i; i++) {
                var durWest = getTime(timing[performTimingEvts[i]]);
                durWest = durWest ? durWest - preTiming : 0;
                if (!HAS_RPT_PTS_P[i] && durWest > 0) {
                    HAS_RPT_PTS_P[i] = 1;
                    rptDat['p' + i] = durWest
                    rptCt++;
                }
            }
            if (!HAS_RPT_PTS_P[20] && T0 > 0) {
                HAS_RPT_PTS_P[20] = 1;
                rptDat['p20'] = Math.floor(T0);
                rptCt++;
            }
            var fpTime = getFPTime();
            if (!HAS_RPT_PTS_P[21] && typeof(fpTime[0]) == "number") {
                HAS_RPT_PTS_P[21] = 1;
                rptDat['p21'] = fpTime[0];
                rptCt++;
            }
            if (!HAS_RPT_PTS_P[22] && typeof(fpTime[1]) == "number") {
                HAS_RPT_PTS_P[22] = 1;
                rptDat['p22'] = fpTime[1];
                rptCt++;
            }
            if (!HAS_RPT_PTS_P[23]) {
                if (ttiTime) {
                    HAS_RPT_PTS_P[23] = 1;
                    rptDat['p23'] = ttiTime;
                    rptCt++;
                }
            }
        }
        if (rptCt > 0) {
            if (!isExtReport) {
                rptDat['ext'] = ext_scrn;
                isExtReport = true;
            }
            curOper && (rptDat['oper'] = curOper);
            sendUrl(URL + urly(rptDat));
        }
    }
    var rptIt = bounceFn(rptTime, 1000);
    var ret = {
        'report': rptIt
    };
    window.__SPD_RPT = ret;
    var isInit = false;

    function initEnv() {
        if (isInit) {
            return;
        }
        isInit = true;
        checkIsReport();
        rptIt();
        if (window._PFM_PERFORMANCE == true) {
            getTTITime(function(tti) {
                if (typeof(tti) == 'number') {
                    ttiTime = parseInt(tti, 10);
                    rptIt();
                }
            });
        }
        setTimeout(function() {
            rptIt();
        }, 7000);
        window.onunload = function() {
            try {
                rptIt.clear();
                rptTime(window._PFM_TIMING, true);
            } catch (e) {
                console.error(e);
            }
        }
    }
    if (!window.__SPD_FOOT_PAGE_LOAD && !window.athenaFdSetting) {
        loadScript({
            "url": "https://wq.360buyimg.com/data/ppms/js/ppms.pagev29640.jsonp",
            "callbackName": "showPageData29640",
            "callback": function(json) {
                if (json && json.data && json.data.length > 0) {
                    window.athenaFdSetting = json.data[0];
                }
                initEnv();
            },
            "errorback": function() {
                initEnv();
            }
        });
    } else {
        initEnv();
    }
    if ((typeof require == 'function') && module) {
        module.exports = exports = ret;
    } else {
        return ret;
    }
});