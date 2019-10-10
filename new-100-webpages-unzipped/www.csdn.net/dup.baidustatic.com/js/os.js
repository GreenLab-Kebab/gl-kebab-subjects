try {
    ! function() {
        window.___baidu_union_ || (window.___baidu_union_ = {
            _closeEventArray: [],
            _onClose: function(t) {
                t instanceof Function && this._closeEventArray.push(t)
            },
            _offClose: function(t) {
                if (t instanceof Function)
                    for (var e = 0, i = this._closeEventArray.length; i > e; e++) t === this._closeEventArray[e] && this._closeEventArray.splice(e, 1)
            },
            _triggerClose: function(t) {
                for (var e = 0, i = this._closeEventArray.length; i > e; e++) {
                    var n = this._closeEventArray[e];
                    n && n(t)
                }
            }
        }), window.___baidu_union_dup_ || (window.___baidu_union_dup_ = {}), window.BaiduUnion || (window.BaiduUnion = {
            onClose: function(t) {
                window.___baidu_union_._onClose(t)
            },
            offClose: function(t) {
                window.___baidu_union_._offClose(t)
            }
        });
        var t, e = '___delivery___global___counter___';
        window._SF_ && window._SF_._global_ && window._SF_._global_._ssp ? (t = window._SF_._global_._ssp, t.DUP_4_SF = !0, t.destroy = function() {
            try {
                top[e] = {}
            } catch (t) {
                window[e] = {}
            }
        }) : t = window._ssp_global = window._ssp_global || {};
        try {
            top.location;
            t.counter = top[e] = top[e] || {}
        } catch (n) {
            t.counter = window[e] = window[e] || {}
        }
        var o = {
            global: t,
            proxyName: !1,
            basePath: 'https://cpro.baidustatic.com/cpro/ui/dup/'
        };
        ! function() {
            var e = {
                name: "oojs",
                namespace: "",
                classes: {},
                noop: function() {},
                $oojs: function() {
                    var e = {};
                    if ("undefined" != typeof window && window && "undefined" != typeof document && document ? (this.runtime = "browser", e.global = window) : (this.runtime = "node", e.global = t), e.proxyName = "proxy", e.path = "node" === this.runtime ? process.cwd() + "/src/" : "/src/", "undefined" != typeof o)
                        for (var i in o) i && o.hasOwnProperty(i) && (e[i] = o[i]);
                    this.global = e.global, e.proxyName && (Function.prototype[e.proxyName] = this.proxy), this.setPath(e.path), this.global.oojs = this.global.oojs || this
                },
                path: {},
                pathCache: {},
                getPath: function(t) {
                    var e = t ? t.split(".") : !1,
                        i = this.path;
                    if (e)
                        for (var n = 0, o = e.length; o > n; n++) {
                            var r = e[n].toLowerCase();
                            if (!i[r]) break;
                            i = i[r]
                        }
                    return i.pathValue
                },
                setPath: function(t, e) {
                    var i = this.path;
                    if ("object" != typeof t) {
                        if (e)
                            for (var n = t.split("."), o = 0, r = n.length; r > o; o++) {
                                var s = n[o].toLowerCase();
                                i[s] = i[s] || {
                                    pathValue: i.pathValue
                                }, i = i[s]
                            } else e = t;
                        i.pathValue = e, this.pathCache = {}
                    } else
                        for (var a in t) a && t.hasOwnProperty(a) && this.setPath(a, t[a])
                },
                getClassPath: function(t) {
                    if (!this.pathCache[t]) {
                        this.pathCache[t] = this.getPath(t) + t.replace(/\./gi, "/") + ".js";
                        var e = this.getPath(t),
                            i = e.length - 1;
                        e.lastIndexOf("\\") !== i && e.lastIndexOf("/") !== i && (e += "/"), this.pathCache[t] = e + t.replace(/\./gi, "/") + ".js"
                    }
                    return this.pathCache[t]
                },
                loadDeps: function(t, e) {
                    e = e || {};
                    var i = t.__deps,
                        n = (t.__namespace, []);
                    for (var o in i)
                        if (i.hasOwnProperty(o) && i[o]) {
                            var r;
                            if ("string" != typeof i[o] ? (t[o] = i[o], t[o] && t[o].__name && (r = t[o].__full)) : (r = i[o], t[o] = this.find(r)), !r || e[r]) continue;
                            if (e[r] = !0, t[o]) t[o].__deps && (n = n.concat(this.loadDeps(t[o], e)));
                            else {
                                if ("node" === this.runtime) try {
                                    t[o] = require(this.getClassPath(r))
                                } catch (s) {
                                    n.push(r)
                                }
                                t[o] || n.push(r)
                            }
                        }
                    return n
                },
                fastClone: function(t) {
                    var e = function() {};
                    e.prototype = t;
                    var i = new e;
                    return i
                },
                deepClone: function(t, e) {
                    "number" != typeof e && (e = 10);
                    var i, n = e - 1;
                    if (e > 0)
                        if (t instanceof Date) i = new Date, i.setTime(t.getTime());
                        else if (t instanceof Array) {
                        i = [];
                        for (var o = 0, r = t.length; r > o; o++) i[o] = this.deepClone(t[o], n)
                    } else if ("object" == typeof t) {
                        i = {};
                        for (var s in t)
                            if (t.hasOwnProperty(s)) {
                                var a = t[s];
                                i[s] = this.deepClone(a, n)
                            }
                    } else i = t;
                    else i = t;
                    return i
                },
                proxy: function(t, e) {
                    var i = Array.prototype.slice.apply(arguments),
                        n = i.shift(),
                        o = "function" == typeof this ? this : i.shift();
                    return function() {
                        var t = Array.prototype.slice.apply(arguments);
                        return o.apply(n, t.concat(i))
                    }
                },
                find: function(t) {
                    var e, i = t.split(".");
                    e = this.classes[i[0]];
                    for (var n = 1, o = i.length; o > n; n++) {
                        if (!e || !e[i[n]]) {
                            e = null;
                            break
                        }
                        e = e[i[n]]
                    }
                    return e
                },
                reload: function(t) {
                    var e = this.find(t);
                    if (e)
                        if (e.__registed = !1, "node" === this.runtime) {
                            var i = this.getClassPath(t);
                            delete require.cache[require.resolve(i)], e = require(i)
                        } else e = this.define(e);
                    else e = this.using(t);
                    return e
                },
                create: function(t, e, i, n, o, r) {
                    "string" == typeof t && (t = this.using(t));
                    var s = new t.__constructor(e, i, n, o, r);
                    return s
                },
                using: function(t) {
                    var e = this.find(t);
                    return e || "node" === this.runtime && (require(this.getClassPath(t)), e = this.find(t)), e
                },
                define: function(t) {
                    var e = t.name || "__tempName",
                        i = t.namespace || "";
                    t.__name = e, t.__namespace = i, t.__full = i.length > 1 ? i + "." + e : e, t.__deps = t.deps, t.__oojs = this, t.__constructor = function(t, e, i, n, o) {
                        if (this.__clones && this.__clones.length > 0)
                            for (var r = 0, s = this.__clones.length; s > r; r++) {
                                var a = this.__clones[r];
                                this[a] = this.__oojs.deepClone(this[a])
                            }
                        this.__constructorSource(t, e, i, n, o)
                    }, t.__constructorSource = t[e] || this.noop, t.__staticSource = t["$" + e] || this.noop, t.__staticUpdate = function() {
                        var e = [];
                        for (var i in this)
                            if (this.hasOwnProperty(i)) {
                                var n = this[i];
                                "object" != typeof n || null === n || "deps" === i || 0 === i.indexOf("__") || t.__deps && t.__deps[i] || e.push(i)
                            }
                        this.__clones = e, this.__constructor.prototype = this
                    }, t.__static = function() {
                        this.__staticSource(), this.__staticUpdate()
                    };
                    for (var n, o = !1, r = !1, s = i.split("."), a = s.length, d = this.classes, c = 0; a > c; c++) n = s[c], n && (d[n] = d[n] || {}, d = d[n]);
                    d[e] = d[e] || {};
                    var l = d;
                    if (d = d[e], d.__name && d.__registed) {
                        if (d.__registed) {
                            o = !0;
                            for (var h in t) h && t.hasOwnProperty(h) && ("undefined" == typeof d[h] || d[h] === this.noop) && (r = !0, d[h] = t[h])
                        }
                    } else t.__registed = !0, l[e] = t;
                    if (t = l[e], !o || r) {
                        var u = this.loadDeps(t);
                        if (u.length > 0) {
                            if (this.loader = this.loader || this.using("oojs.loader"), "browser" !== this.runtime || !this.loader) throw new Error('class "' + t.name + "\" loadDeps error:" + u.join(","));
                            this.loader.loadDepsBrowser(t, u)
                        } else t.__static()
                    }
                    return "node" === this.runtime && arguments.callee.caller.arguments[2] && (arguments.callee.caller.arguments[2].exports = t), t
                }
            };
            e.define(e)
        }();
        var r = t.oojs,
            s = (new Date).getTime();
        r.setPath('https://dup.baidustatic.com/'), r.define({
            name: 'bottomSearchBar',
            namespace: 'dup.ui.assertion',
            deps: {},
            painterName: 'bottomSearchBar',
            assert: function(t) {
                var e = t.placement,
                    i = e.container,
                    n = e.fillstyle;
                return !(3 !== i.anchoredType || !i.slide || 9 !== n.btnStyleId)
            }
        }), r.define({
            name: 'inlayFix',
            namespace: 'dup.ui.assertion',
            deps: {},
            painterName: 'inlayFix',
            assert: function(t) {
                var e = t.placement,
                    i = e.basic,
                    n = e.container,
                    o = n.floated;
                return 1 === i.rspFormat && 1 === i.flowType && 1 === n.anchoredType ? o ? 1 === o.trigger ? !0 : !this.isFloat(o) : !0 : !1
            },
            isFloat: function(t) {
                for (var e in t) return !0;
                return !1
            }
        }), r.define({
            name: 'insideText',
            namespace: 'dup.ui.assertion',
            deps: {},
            painterName: 'insideText',
            assert: function(t) {
                var e = t.placement,
                    i = e.basic,
                    n = e.container;
                return 3 === i.rspFormat && 1 === i.flowType && 8 === n.occurrence && 11 === n.anchoredType
            }
        }), r.define({
            name: 'dynamicFloat',
            namespace: 'dup.ui.assertion',
            painterName: 'dynamicFloat',
            assert: function(t) {
                var e = t.placement,
                    i = e.basic,
                    n = e.container,
                    o = n.floated;
                return !(1 !== i.rspFormat || 1 !== i.flowType || 1 !== n.anchoredType || !o || 8 !== o.trigger)
            }
        }), r.define({
            name: 'inlayFix',
            namespace: 'dup.ui.assertion.mobile',
            deps: {},
            painterName: 'inlayFix',
            assert: function(t) {
                var e = t.placement,
                    i = e.basic,
                    n = e.container;
                return 1 === i.rspFormat && 2 === i.flowType && 1 === n.anchoredType
            }
        }), r.define({
            name: 'float',
            namespace: 'dup.ui.assertion.mobile',
            painterName: 'float',
            assert: function(t) {
                var e = t.placement,
                    i = e.basic,
                    n = e.container;
                return 1 === i.rspFormat && 2 === i.flowType && (3 === n.anchoredType || 11 === n.anchoredType)
            }
        }), r.define({
            name: 'insideText',
            namespace: 'dup.ui.assertion.mobile',
            deps: {},
            painterName: 'insideText',
            assert: function(t) {
                var e = t.placement,
                    i = e.basic,
                    n = e.container;
                return 3 === i.rspFormat && 2 === i.flowType && 8 === n.occurrence && 11 === n.anchoredType
            }
        }), r.define({
            name: "config",
            namespace: "dup.common",
            DUP_PREFIX: "BAIDU_SSP_",
            COMMON_GLOBAL: "___baidu_union_",
            COMMON_GLOBAL_CALLBACK: "___baidu_union_callback_",
            HTTP_PROTOCOL: "http:",
            LOADER_DEFINE_NAME: "___adblockplus",
            LCR_COOKIE_NAME: "BAIDU_SSP_lcr",
            REQUEST_URL: "//pos.baidu.com/",
            POS_URL: "",
            POS_DOMAIN: "pos.baidu.com",
            ISPDB_DELIV: !1,
            DUP_TM: "BAIDU_DUP_SETJSONADSLOT",
            HTML_POST: "HTML_POST",
            SSP_JSONP: "SSP_JSONP",
            STATIC_JSONP: "STATIC_JSONP",
            LOG_URL: "//eclick.baidu.com/se.jpg",
            SBD_LOG: "//eclick.baidu.com/aoc.jpg",
            PV_LOG: "//eclick.baidu.com/rs.jpg",
            CACHE_URL: "//pos.baidu.com/bfp/snippetcacher.php?",
            STORAGE_TIMER: 864e5,
            STATUS_CREATE: 1,
            STATUS_REQUEST: 2,
            STATUS_RESPONSE: 4,
            STATUS_RENDERED: 8,
            STATUS_FINISH: 16,
            EXP_SWITCH: !1,
            EXP_SATUS: !1,
            BASE_ID: "118015",
            EXP_ID: "",
            RD_ID: "118005",
            AUTO_AD_EXP_ID: "111003",
            SHUNT_NUMBER: 100,
            FIRST_ONCESEACH: !1,
            AD_ICON: "https://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/bd-logo08.png",
            PAGE_SEARCH_ID: "pageSearchId",
            AUTOID: "0",
            AUTO_JSONP: "AUTO_JSONP",
            AUTO_DC: 4,
            AUTO_PATH: "auto_dup",
            DUP_ERROR_TYPE: "fatalError",
            FIRST_REQ_TIME: "BAIDU_DUP2_pageFirstRequestTime",
            DEBUG_QUERY_TAG: "DUP_DEBUG_FLAG",
            $config: function() {
                this.HTTP_PROTOCOL = "https:" === document.location.protocol ? "https:" : "http:", 0 !== document.location.protocol.indexOf("http") && (this.HTTP_PROTOCOL = "https:")
            }
        }), r.define({
            name: "lang",
            namespace: "dup.common.utility",
            hasOwn: Object.prototype.hasOwnProperty,
            getAttribute: function(t, e) {
                for (var i = t, n = e.split("."); n.length;) {
                    if (void 0 === i || null === i) return;
                    i = i[n.shift()]
                }
                return i
            },
            serialize: function(t) {
                if ("object" != typeof t) return "";
                var e = [];
                for (var i in t) this.hasOwn.call(t, i) && e.push(i + "=" + encodeURIComponent(t[i]));
                return e.join("&")
            },
            getType: function(t) {
                for (var e = {}, i = "Array Boolean Date Error Function Number RegExp String".split(" "), n = 0, o = i.length; o > n; n++) e["[object " + i[n] + "]"] = i[n].toLowerCase();
                return null == t ? "null" : e[Object.prototype.toString.call(t)] || "object"
            },
            isEmptyObj: function(t) {
                for (var e in t) return !1;
                return !0
            },
            argumentsToArray: function(t) {
                var e = [];
                switch (this.getType(t)) {
                    case "object":
                        e = Array.prototype.slice.call(t);
                        break;
                    case "array":
                        e = t;
                        break;
                    case "number":
                    case "string":
                        e.push(t)
                }
                return e
            },
            template: function(t, e) {
                var i = /{(.*?)}/g;
                return t.replace(i, function(t, i, n, o) {
                    return e[i] || ""
                })
            },
            encodeHTML: function(t) {
                var e = {
                    '"': "&quot;",
                    ">": "&gt;",
                    "<": "&lt;",
                    "&": "&amp;"
                };
                return t.replace(/["<>&]/g, function(t) {
                    return e[t]
                })
            },
            format: function(t, e) {
                var i = /\{(\w+):(\w+)\}/g,
                    n = this;
                return t.replace(i, function(t, i, o) {
                    var r = e[i];
                    switch (o) {
                        case "number":
                            r = +r || 0;
                            break;
                        case "boolean":
                            r = !!r;
                            break;
                        case "html":
                            r = n.encodeHTML(r)
                    }
                    return r
                })
            },
            jsonToObj: function(t) {
                var e = "";
                return window.JSON && window.JSON.parse && (e = window.JSON.parse(t)), e
            },
            objToString: function(t) {
                var e = "";
                try {
                    e = window.JSON && window.JSON.stringify ? window.JSON.stringify(t) : window.eval(t)
                } catch (i) {}
                return e
            },
            trim: function(t) {
                return t.replace(/(^\s*)|(\s*$)/g, "")
            },
            unique: function(t) {
                for (var e = [], i = {}, n = t.length, o = 0; n > o; o++) {
                    var r = t[o];
                    i[r] || (e[e.length] = r, i[r] = !0)
                }
                return e
            },
            isArray: function(t) {
                return "[object Array]" == Object.prototype.toString.call(t)
            },
            isFunction: function(t) {
                return "[object Function]" == Object.prototype.toString.call(t)
            },
            toArray: function(t) {
                if (null === t || void 0 === t) return [];
                if (this.isArray(t)) return t;
                if ("number" != typeof t.length || "string" == typeof t || this.isFunction(t)) return [t];
                if (t.item) {
                    for (var e = t.length, i = new Array(e); e--;) i[e] = t[e];
                    return i
                }
                return [].slice.call(t)
            },
            encode: function(t) {
                return void 0 === t ? "" : encodeURIComponent(t)
            },
            encodeUrl: function(t) {
                var e = escape(t);
                return e = e.replace(/([*+-.\/@_])/g, function(t) {
                    return "%" + t.charCodeAt(0).toString(16)
                }), e.replace(/%/g, "_")
            },
            isPlain: function(t) {
                var e, i = Object.prototype.hasOwnProperty;
                if (!(t && "[object Object]" === Object.prototype.toString.call(t) && "isPrototypeOf" in t)) return !1;
                if (t.constructor && !i.call(t, "constructor") && !i.call(t.constructor.prototype, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || i.call(t, e)
            },
            clone: function(t) {
                var e, i, n = t;
                if (!t || t instanceof Number || t instanceof String || t instanceof Boolean) return n;
                if (this.isArray(t)) {
                    n = [];
                    var o = 0;
                    for (e = 0, i = t.length; i > e; e++) n[o++] = this.clone(t[e])
                } else if (this.isPlain(t)) {
                    n = {};
                    for (e in t) t.hasOwnProperty(e) && (n[e] = this.clone(t[e]))
                }
                return n
            }
        }), r.define({
            name: "browser",
            namespace: "dup.common.utility",
            deps: {
                lang: "dup.common.utility.lang"
            },
            $browser: function() {
                this.win = window, this.nav = window.navigator, this.checkBrowser()
            },
            checkBrowser: function() {
                var t = navigator.userAgent,
                    e = window.RegExp;
                this.antBrowser = !1, /msie (\d+\.\d)/i.test(t) && (this.ie = document.documentMode || +e.$1), /opera\/(\d+\.\d)/i.test(t) && (this.opera = +e.$1), /firefox\/(\d+\.\d)/i.test(t) && (this.firefox = +e.$1), /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(t) && !/chrome/i.test(t) && (this.safari = +(e.$1 || e.$2)), /chrome\/(\d+\.\d)/i.test(t) && (this.chrome = +e.$1, this.test360() && (this.qihoo = !0)), /qqbrowser\/(\d+\.\d)/i.test(t) && (this.tencent = !0), (/ucbrowser\/(\d+\.\d)/i.test(t) || /ubrowser\/(\d+\.\d)/i.test(t)) && (this.uc = !0), /miuibrowser\/(\d+\.\d)/i.test(t) && (this.xiaomi = !0), /vivobrowser\/(\d+\.\d)/i.test(t) && (this.vivo = !0), /oppobrowser\/(\d+\.\d)/i.test(t) && (this.oppo = !0), /baiduboxapp\/([\d.]+)/.test(t) && (this.baiduboxapp = !0);
                try {
                    /(\d+\.\d)/.test(this.lang.getAttribute(window, "external.max_version")) && (this.maxthon = +e.$1)
                } catch (i) {}(this.tencent || this.uc || this.xiaomi || this.vivo || this.oppo) && (this.antBrowser = !0), this.isWebkit = /webkit/i.test(t), this.isGecko = /gecko/i.test(t) && !/like gecko/i.test(t);
                for (var n = ["Android", "iPad", "iPod", "iPhone", "iOS", "Linux", "Macintosh", "Windows"], o = "", r = 0; r < n.length; r++)
                    if (o = n[r], t.match(new RegExp(o, "i"))) {
                        "iPad" === o || "iPhone" === o || "iOS" === o || "iPod" === o ? this.isIOS = !0 : "Android" === o && (this.isAndroid = !0);
                        break
                    }
                this.platform = o
            },
            test360: function() {
                try {
                    return "scoped" in document.createElement("style")
                } catch (t) {
                    return !1
                }
            },
            getFlashPlayerVersion: function() {
                var t = 0;
                try {
                    var e = "https:" === document.location.protocol;
                    if (this.chrome >= 45 || e) return 0;
                    if (this.nav.plugins && this.nav.mimeTypes.length) {
                        var i = this.nav.plugins["Shockwave Flash"];
                        i && i.description && (t = i.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0")
                    }
                    if (0 === t && (this.win.ActiveXObject || this.win.hasOwnProperty("ActiveXObject")))
                        for (var n = 30; n >= 2; n--) try {
                            var o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n);
                            if (o) {
                                var r = o.GetVariable("$version");
                                if (t = r.replace(/WIN/g, "").replace(/,/g, "."), t > 0) break
                            }
                        } catch (s) {}
                    t = parseInt(t, 10), this.getFlashPlayerVersion = function() {
                        return t
                    }
                } catch (a) {
                    t = 0
                }
                return t
            }
        }), r.define({
            name: "expBranch",
            namespace: "dup.business",
            deps: {
                config: "dup.common.config"
            },
            tactics: function() {
                var t = 1e9 * Math.random();
                t < 1e6 * this.config.SHUNT_NUMBER ? (this.config.EXP_SATUS = !0, this.config.EXP_ID = this.config.RD_ID) : t >= 1e6 * this.config.SHUNT_NUMBER && t < 1e6 * this.config.SHUNT_NUMBER * 2 && (this.config.EXP_ID = this.config.BASE_ID)
            },
            mergeExps: function(t, e) {
                return t && e ? t += "," + e : t = t || e, t
            }
        }), r.define({
            name: "cookie",
            namespace: "dup.common.utility",
            get: function(t, e) {
                var i = new RegExp("(^| )" + t + "=([^;]*)(;|$)"),
                    n = i.exec(document.cookie);
                return n ? e ? decodeURIComponent(n[2]) : n[2] : ""
            },
            set: function(t, e, i, n) {
                var o = i.expires;
                document.cookie = t + "=" + (n ? encodeURIComponent(e) : e) + (i.path ? "; path=" + i.path : "") + (o ? "; expires=" + o.toGMTString() : "") + (i.domain ? "; domain=" + i.domain : "")
            },
            remove: function(t) {
                var e = new Date;
                e.setTime(e.getTime() - 86400), this.set(t, "", {
                    path: "/",
                    expires: e
                })
            }
        }), r.define({
            name: "additionalParam",
            namespace: "dup.business.parameter",
            deps: {},
            paramsList: [],
            ParamsMap: {
                clid: {
                    key: "apdi",
                    encode: !0
                },
                cuid: {
                    key: "udi",
                    encode: !0
                },
                ctkey: {
                    key: "lcdi",
                    encode: !0
                },
                acid: {
                    key: "acid",
                    encode: !0
                }
            },
            paramCheck: function(t, e) {
                this.paramsList = [];
                for (var i in e)
                    if (i && e.hasOwnProperty(i) && this.ParamsMap[i]) {
                        var n = this.ParamsMap[i],
                            o = {};
                        try {
                            n.key && (o.key = n.key, o.value = this.paramEncode(n, e[i])), n && !n.key && (o.key = i, o.value = this.paramEncode(n, e[i])), this.paramsList.push(o)
                        } catch (r) {}
                    }
            },
            paramEncode: function(t, e) {
                var i;
                return i = t.encode ? encodeURIComponent(e) : e
            }
        }), r.define({
            name: "storage",
            namespace: "dup.common.utility",
            store: null,
            isAvailable: !1,
            prefix: "___ds_storage__",
            timeSpan: 72e5,
            $storage: function() {
                try {
                    this.store = window.localStorage, this.store && this.store.removeItem && (this.isAvailable = !0)
                } catch (t) {}
            },
            available: function() {
                var t = !1;
                return this.store && this.store.removeItem && (t = !0), t
            },
            setItem: function(t, e, i) {
                if (this.store) {
                    e = i ? encodeURIComponent(e) : e;
                    try {
                        this.store.setItem(t, e)
                    } catch (n) {}
                }
            },
            getItem: function(t, e) {
                if (this.store) try {
                    var i = this.store.getItem(t);
                    return e && i ? decodeURIComponent(i) : i
                } catch (n) {
                    return null
                }
                return null
            },
            addItem: function(t, e, i) {
                if (this.store) {
                    e = i ? encodeURIComponent(e) : e;
                    var n = this.getItem(t) || "";
                    n += (n && "|") + e;
                    try {
                        this.setItem(t, n)
                    } catch (o) {}
                }
            },
            removeItem: function(t) {
                this.store && this.store.removeItem(t)
            },
            spliceItem: function(t, e, i) {
                if (this.store) {
                    e = i ? encodeURIComponent(e) : e;
                    var n = this.getItem(t) || "";
                    if (n = n.replace(new RegExp(e + "\\|?", "g"), "").replace(/\|$/, "")) try {
                        this.setItem(t, n)
                    } catch (o) {} else this.store.removeItem(t)
                }
            },
            getValue: function(t) {
                var e, i = this.getItem(this.prefix + t) || "";
                if (this.available() && i) {
                    var n = (new Date).getTime();
                    i = i.split("|");
                    var o = parseInt(i[1], 10) || 0;
                    o + this.timeSpan > n && (e = parseInt(i[0], 10) || 0)
                }
                return e
            }
        }), r.define({
            name: "float",
            namespace: "dup.ui.assertion.mobile",
            painterName: "float",
            assert: function(t) {
                var e = t.placement,
                    i = e.basic,
                    n = e.container;
                return 1 === i.rspFormat && 2 === i.flowType && (3 === n.anchoredType || 11 === n.anchoredType)
            }
        }), r.define({
            name: "dynamicFloat",
            namespace: "dup.ui.assertion",
            painterName: "dynamicFloat",
            assert: function(t) {
                var e = t.placement,
                    i = e.basic,
                    n = e.container,
                    o = n.floated;
                return !(1 !== i.rspFormat || 1 !== i.flowType || 1 !== n.anchoredType || !o || 8 !== o.trigger)
            }
        }), r.define({
            name: "sceneTactics",
            namespace: "dup.business",
            deps: {
                config: "dup.common.config",
                exp: "dup.business.expBranch"
            },
            $sceneTactics: function() {
                var t = String.fromCharCode(Math.floor(26 * Math.random()) + 97),
                    e = String.fromCharCode(Math.floor(26 * Math.random()) + 97);
                this.config.POS_URL || (this.config.POS_URL = this.config.HTTP_PROTOCOL + this.config.REQUEST_URL + t + "c" + e + "m?"), this.config.EXP_SWITCH && this.exp.tactics()
            },
            sceneTactics: function() {}
        }), r.define({
            name: "material",
            namespace: "dup.business",
            deps: {
                lang: "dup.common.utility.lang",
                config: "dup.common.config"
            },
            $material: function() {
                var t = this;
                this.materialFactory = {}, this.materialFactory.text = function(e) {
                    var i = "font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};",
                        n = "<span style=\"word-wrap:break-word;\"><a href=\"{clickUrl:string}\" target=\"{target:string}\" style=\"" + i + "\"{events}>{text:string}</a></span>",
                        o = /\{events\}/;
                    if (1 === e.version) n = n.replace(o, "");
                    else if (2 === e.version) {
                        var r = "this.style.color='{defaultColor:string}';this.style.fontWeight='{defaultBold:string}';this.style.fontStyle='{defaultItalic:string}';this.style.textDecoration='{defaultUnderline:string}';",
                            s = "this.style.color='{hoverColor:string}';this.style.fontWeight='{hoverBold:string}';this.style.fontStyle='{hoverItalic:string}';this.style.textDecoration='{hoverUnderline:string}';",
                            a = ' onmouseover="' + s + '" onmouseout="' + r + '"';
                        n = n.replace(o, a);
                        for (var d = ["default", "hover"], c = 0; c < d.length; c++) {
                            var l = d[c],
                                h = l + "Color",
                                u = l + "Bold",
                                p = l + "Italic",
                                m = l + "Underline";
                            e[h] = "#" + e[h], e[u] = e[u] ? "bold" : "normal", e[p] = e[p] ? "italic" : "normal", e[m] = e[m] ? "underline" : "none"
                        }
                    }
                    return t.lang.format(n, e)
                }, this.materialFactory.image = "<a href=\"{clickUrl:string}\" target=\"{target:string}\"><img src=\"{src:string}\" title=\"{title:html}\" alt=\"{title:html}\" border=\"0\" height=\"{height:number}\" width=\"{width:number}\" /></a>", this.materialFactory.flash = function(e) {
                    var i = ["<script>", "var BD = BD || {};", "BD.MC = BD.MC || {};", "BD.MC.ADFlash = BD.MC.ADFlash || {};", "BD.MC.ADImg = BD.MC.ADImg || {};", "BD.MC.ADFlash.w = {width:number};", "BD.MC.ADFlash.h = {height:number};", 'BD.MC.ADFlash.mu = "{src:string}";', 'BD.MC.ADFlash.cu = "{clickUrl:string}";', "BD.MC.ADFlash.wm = {wmode:number};", 'BD.MC.ADFlash.ct = "{clickTag:string}";', "BD.MC.ADImg.w = {imageWidth:number};", "BD.MC.ADImg.h = {imageHeight:number};", 'BD.MC.ADImg.mu = "{imageSrc:string}";', 'BD.MC.ADImg.cu = "{imageClickUrl:string}";', 'BD.MC.ADImg.tw = "{target:string}";', "BD.MC.ADImg.flag = {backupImage:number};", "</script>", '<script src ="', '//cbjs.baidu.com/js/{file:string}.js">', "</script>"];
                    return e.file = e.hasLink ? "cflash" : "flash", e.imageClickUrl = e.clickUrl, e.hasLink || (e.clickUrl = ""), t.lang.format(i.join(""), e)
                }, this.materialFactory.rich = function(t) {
                    return t.content
                }, this.materialFactory.slide = function(e, i) {
                    for (var n = "<div id=\"bd_ec_clb_asp\" style=\"width:{width:number}px;height:{height:number}px;overflow:hidden;\">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G(\"bd_ec_clb_asp\");var pages = container.childNodes;var pl = 0;for (var i = 0; i < pages.length; i++) {if (pages[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = \"\"; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = \"none\";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); };})();</script>", o = [], r = e.materials, s = 0; s < r.length; s++) {
                        var a = r[s];
                        "string" != typeof a && (a = t.formatMaterial(a, i, !0)), o.push(a)
                    }
                    e.html = "<div>" + o.join("</div><div>") + "</div>";
                    var d = i.response.placement,
                        c = d.container;
                    return e.width = i.width || c.width, e.height = i.height || c.height, t.lang.format(n, e)
                }
            },
            formatMaterial: function(t, e, i) {
                if ("string" == typeof t) return t;
                if (!t.type) return "";
                var n = this.materialFactory[t.type];
                if (n) {
                    var o = "string" == typeof n ? this.lang.format(n, t) : n(t, e);
                    return i ? o : "<!DOCTYPE html><body>" + o
                }
                return ""
            }
        }), r.define({
            name: "inlayFix",
            namespace: "dup.ui.assertion",
            deps: {},
            painterName: "inlayFix",
            assert: function(t) {
                var e = t.placement,
                    i = e.basic,
                    n = e.container,
                    o = n.floated;
                return 1 === i.rspFormat && 1 === i.flowType && 1 === n.anchoredType ? o ? 1 === o.trigger ? !0 : !this.isFloat(o) : !0 : !1
            },
            isFloat: function(t) {
                for (var e in t) return !0;
                return !1
            }
        }), r.define({
            name: "dom",
            namespace: "dup.common.utility",
            deps: {
                lang: "dup.common.utility.lang",
                browser: "dup.common.utility.browser"
            },
            $dom: function() {},
            g: function(t, e) {
                return t ? "string" === this.lang.getType(t) && t.length > 0 ? (e = e || window, e.document.getElementById(t)) : !t.nodeName || 1 !== t.nodeType && 9 !== t.nodeType ? null : t : null
            },
            getDocument: function(t) {
                return 9 === t.nodeType ? t : t.ownerDocument || t.document
            },
            getWindow: function(t) {
                var e = this.getDocument(t);
                return e.parentWindow || e.defaultView || null
            },
            isWindow: function(t) {
                try {
                    if (t && "object" == typeof t && t.document && "setInterval" in t) return !0
                } catch (e) {
                    return !1
                }
                return !1
            },
            isInIframe: function(t, e) {
                return t = t || window, t != window.top && t != t.parent || !this.isWindow(t)
            },
            checkParentAccess: function(t) {
                try {
                    return !!t.parent.location.toString()
                } catch (e) {
                    return !1
                }
            },
            isInCrossDomainIframe: function(t, e) {
                e = 2 === arguments.length ? e : t.parent;
                for (var i = 0, n = 10; i++ < n && this.isInIframe(t, e);) {
                    if (!this.checkParentAccess(t)) return !0;
                    t = t.parent
                }
                return i >= n
            },
            ready: function(t, e, i) {
                i = i || this.win || window;
                var n = i.document;
                e = e || 0, this.domReadyMonitorRunTimes = 0, this.readyFuncArray = this.readyFuncArray || [], this.readyFuncArray.push({
                    func: t,
                    delay: e,
                    done: !1
                });
                var o = r.proxy(this, function() {
                        var t = !1;
                        this.domReadyMonitorRunTimes++;
                        var e = !1;
                        try {
                            i.frameElement && (e = !0)
                        } catch (o) {
                            e = !0
                        }
                        if (this.browser.ie && this.browser.ie < 9 && !e) try {
                                n.documentElement.doScroll("left"), t = !0
                            } catch (o) {} else if ("complete" === n.readyState || this.domContentLoaded) t = !0;
                            else if (this.domReadyMonitorRunTimes > 3e5) return void(this.domReadyMonitorId && (i.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null));
                        if (t) try {
                            if (this.readyFuncArray && this.readyFuncArray.length)
                                for (var r = 0, s = this.readyFuncArray.length; s > r; r++) {
                                    var a = this.readyFuncArray[r];
                                    a && a.func && !a.done && (a.delay ? (a.done = !0, i.setTimeout(a.func, a.delay)) : (a.done = !0, a.func()))
                                }
                        } catch (d) {
                            throw d
                        } finally {
                            this.domReadyMonitorId && (i.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null)
                        }
                    }, this),
                    s = r.proxy(this, function() {
                        this.domContentLoaded = !0, o()
                    });
                this.domReadyMonitorId || (this.domReadyMonitorId = i.setInterval(o, 50), n.addEventListener ? (n.addEventListener("DOMContentLoaded", s, !1), i.addEventListener("load", s, !1)) : n.attachEvent && i.attachEvent("onload", s, !1))
            },
            bind: function(t, e, i) {
                return "string" == typeof t && (t = this.g(t)), e = e.replace(/^on/i, "").toLowerCase(), t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i), t
            },
            unBind: function(t, e, i) {
                return "string" == typeof t && (t = this.g(t)), e = e.replace(/^on/i, "").toLowerCase(), t.removeEventListener ? t.removeEventListener(e, i, !1) : t.attachEvent && t.detachEvent("on" + e, i), t
            },
            getNotCrossDomainTopWindow: function(t, e) {
                1 === arguments.length && "number" === this.lang.getType(arguments[0]) && (e = arguments[0], t = void 0), e = e || 10;
                for (var i = window, n = 0; n++ < e && this.isInIframe(i) && !this.isInCrossDomainIframe(i) && (!t || !t(i));) i = i.parent;
                return i
            },
            getTopElement: function(t) {
                var e = this.isWindow(t) ? t.document : this.getDocument(t);
                return "CSS1Compat" === e.compatMode ? e.documentElement : e.body
            },
            getPageClient: function() {
                var t;
                return "number" == typeof window.innerWidth ? t = {
                    width: window.innerWidth,
                    height: window.innerHeight
                } : document.documentElement && document.documentElement.clientWidth ? t = {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                } : document.body && document.body.clientWidth && (t = {
                    width: document.body.clientWidth,
                    height: document.body.clientHeight
                }), t
            },
            getNotCrossDomainWin: function() {
                var t = this.getWinList();
                return t[t.length - 1]
            },
            getWinList: function() {
                for (var t = 0, e = window, i = e.top, n = [e]; e !== i && t++ < 10 && this.isWindow(e) && this.isWindow(e.parent);) e = e.parent, n.push(e);
                return getWinList = function() {
                    return n
                }, n
            },
            insertScriptElement: function(t) {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = t;
                var i = document.getElementsByTagName("script")[0];
                i.parentNode && i.parentNode.insertBefore(e, i)
            },
            isValidTextElement: function(t) {
                var e = t.nodeName.toLowerCase();
                switch (e) {
                    case "a":
                    case "script":
                    case "iframe":
                    case "br":
                    case "title":
                    case "option":
                    case "button":
                    case "h1":
                    case "h2":
                    case "h3":
                    case "h4":
                    case "h5":
                    case "h6":
                        return !1;
                    default:
                        return !0
                }
            },
            loadScript: function(t, e, i) {
                try {
                    !t.attachEvent || t.attachEvent.toString && t.attachEvent.toString().indexOf("[native code") < 0 || this.browser.opera ? (this.bind(t, "error", i), this.bind(t, "load", e)) : this.bind(t, "readystatechange", r.proxy(this, function(t, e, i) {
                        var n = (t.currentTarget || t.srcElement).readyState;
                        "complete" !== n && "loaded" !== n || e(t)
                    }, e, i))
                } catch (n) {
                    var o = n && n.stack ? n.stack : n,
                        s = "//eclick.baidu.com/rs.jpg?type=fatalError&key=loadScriptError";
                    s += "&mes=" + o, s += "rdm=" + Math.random(), (new Image).src = s
                }
            }
        }), r.define({
            name: "style",
            namespace: "dup.common.utility",
            deps: {
                dom: "dup.common.utility.dom",
                lang: "dup.common.utility.lang",
                browser: "dup.common.utility.browser"
            },
            getClientWidth: function(t) {
                t = t || window;
                try {
                    var e = this.dom.getTopElement(t).clientWidth;
                    if (e || 0 === e) return e
                } catch (i) {}
                return -1
            },
            getClientHeight: function(t) {
                t = t || window;
                try {
                    var e = this.dom.getTopElement(t).clientHeight;
                    if (e || 0 === e) return e
                } catch (i) {}
                return -1
            },
            getPositionCore: function(t) {
                var e = {
                    top: 0,
                    left: 0
                };
                if (t === this.dom.getTopElement(t)) return e;
                var i = this.dom.getDocument(t),
                    n = i.body,
                    o = i.documentElement;
                if (n && t.getBoundingClientRect) {
                    var r = t.getBoundingClientRect();
                    e.left = Math.floor(r.left) + Math.max(o.scrollLeft, n.scrollLeft), e.top = Math.floor(r.top) + Math.max(o.scrollTop, n.scrollTop), e.left -= o.clientLeft, e.top -= o.clientTop;
                    var s = this.getStyle(n, "borderLeftWidth"),
                        a = this.getStyle(n, "borderTopWidth"),
                        d = parseInt(s, 10),
                        c = parseInt(a, 10);
                    e.left -= isNaN(d) ? 2 : d, e.top -= isNaN(c) ? 2 : c
                }
                return e
            },
            getStyle: function(t, e) {
                if (!t) return "";
                var i = "";
                i = e.indexOf("-") > -1 ? e.replace(/[-][^-]{1}/g, function(t) {
                    return t.charAt(1).toUpperCase()
                }) : e.replace(/[A-Z]{1}/g, function(t) {
                    return "-" + t.charAt(0).toLowerCase()
                });
                var n, o = this.dom.getWindow(t);
                if (t.style[e] || t.style[i]) return t.style[e] || t.style[i];
                if (o && o.getComputedStyle) {
                    if (n = o.getComputedStyle(t, null)) return n.getPropertyValue(e) || n.getPropertyValue(i)
                } else if (t.currentStyle) return n = t.currentStyle, n[e] || n[i];
                return ""
            },
            getPosition: function(t) {
                if (t) {
                    var e = this.dom.g(t);
                    if (!e) return !1;
                    var i = this.getPositionCore(e),
                        n = this.dom.getWindow(e);
                    if (!n) return i;
                    for (var o = 0, r = 10; n !== n.parent && o++ < r && !this.dom.isInCrossDomainIframe(n) && n.frameElement;) {
                        var s = this.getPositionCore(n.frameElement);
                        i.left += s.left, i.top += s.top, n = n.parent
                    }
                    return i
                }
            },
            getOpacityInWin: function(t) {
                for (var e = t, i = this.dom.getWindow(e), n = 100; e && e.tagName;) {
                    var o = 100;
                    if (this.browser.ie) {
                        if (this.browser.ie > 5) try {
                            o = parseInt(this.lang.getAttribute(e, "filters.alpha.opacity"), 10) || 100
                        } catch (r) {}
                        n = n > o ? o : n
                    } else {
                        try {
                            o = 100 * (i.getComputedStyle(e, null).opacity || 1)
                        } catch (r) {}
                        n *= o / 100
                    }
                    e = e.parentNode
                }
                return 0 === n ? 0 : n || 100
            },
            getOpacity: function(t) {
                for (var e = this.dom.g(t), i = this.dom.getWindow(e), n = this.getOpacityInWin(e), o = 0, r = 10; o++ < r && this.dom.isInIframe(i) && !this.dom.isInCrossDomainIframe(i);) {
                    var s = i.frameElement ? this.getOpacityInWin(i.frameElement) : 100;
                    n *= s / 100, i = i.parent
                }
                return n
            },
            getScrollWidth: function(t) {
                t = t || window;
                try {
                    var e = this.dom.getTopElement(t).scrollWidth;
                    if (e || 0 === e) return e
                } catch (i) {}
                return -1
            },
            getScrollHeight: function(t) {
                t = t || window;
                try {
                    var e = this.dom.getTopElement(t).scrollHeight;
                    if (e || 0 === e) return e
                } catch (i) {}
                return -1
            },
            getScrollTop: function(t) {
                t = t || window;
                var e = t.document;
                return t.pageYOffset || e.documentElement.scrollTop || e.body.scrollTop
            },
            getScrollLeft: function(t) {
                var e = t || window,
                    i = this.dom.getTopElement(e);
                return e.pageXOffset || i.scrollLeft
            },
            getOuterWidth: function(t, e) {
                var i = this.dom.g(t),
                    n = i.offsetWidth;
                return e && (n += this.getMargin(i, "Left") + this.getMargin(i, "Right")), n
            },
            getMargin: function(t, e) {
                var i = this.getStyle(t, "margin" + e).toString().toLowerCase().replace("px", "").replace("auto", "0");
                return parseInt(i, 10) || 0
            },
            getOuterHeight: function(t, e) {
                var i = this.dom.g(t),
                    n = i.offsetHeight;
                return e && (n += this.getMargin(i, "Top") + this.getMargin(i, "Bottom")), n
            },
            canFixed: function() {
                var t = !0;
                return this.browser.ie && (this.browser.ie < 7 || "BackCompat" === document.compatMode) && (t = !1), t
            },
            setStyle: function(t, e, i) {
                var n = this.dom.g(t);
                n.style[e] = i
            },
            setStyles: function(t, e) {
                for (var i in e) e.hasOwnProperty(i) && this.setStyle(t, i, e[i]);
                return t
            },
            getDefaultStyle: function(t, e) {
                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, !1)[e]
            },
            isVisible: function(t) {
                return "none" !== this.getDefaultStyle(t, "display") && "hidden" !== this.getDefaultStyle(t, "visibility") && 100 === this.getOpacity(t)
            },
            addDebugElement: function(t, e) {
                var i = ["<div ", 'style="position: absolute; right: 0px; top: 0px; z-index: 9999999;line-height:1.2;', 'font-size: 12px;background:#ff0000;font-weight: 700;">', "BAIDU_AD_", e, "<br>", t.clientWidth, "*", t.clientHeight, "</div>"].join(""),
                    n = document.createElement("div");
                n.innerHTML = i;
                var o = t.style;
                o.border = "1px solid #ff0000", o.position = o.position || "relative", t.appendChild(n)
            },
            getVisibilityInWin: function(t) {
                for (var e = t, i = this.dom.getWindow(e); e && e.tagName;) {
                    var n = "hidden" !== i.getComputedStyle(e, null).visibility;
                    if (!n) return !1;
                    e = e.parentNode
                }
                return !0
            },
            getVisibility: function(t) {
                var e = this.dom.g(t),
                    i = this.dom.getWindow(e),
                    n = this.getVisibilityInWin(e);
                if (!n) return !1;
                for (var o = 0, r = 10; o++ < r && this.dom.isInIframe(i) && !this.dom.isInCrossDomainIframe(i) && i.frameElement;) {
                    if (n = this.getVisibilityInWin(i.frameElement), !n) return !1;
                    i = i.parent
                }
                return !0
            },
            getAvaiClientWidth: function() {
                var t = Math.max(320, window.innerWidth);
                return t = isNaN(t) ? this.getClientWidth() : t
            },
            getParentWidth: function(t) {
                var e = parseInt(this.getStyle(t, "paddingLeft"), 10) || 0,
                    i = parseInt(this.getStyle(t, "paddingRight"), 10) || 0,
                    n = t.clientWidth - e - i;
                return n = n > 0 ? n : window.screen.width
            },
            getParentHeight: function(t) {
                var e = parseInt(this.getStyle(t, "paddingTop"), 10) || 0,
                    i = parseInt(this.getStyle(t, "paddingBottom"), 10) || 0,
                    n = t.clientHeight - e - i;
                return n = n > 0 ? n : 0
            }
        }), r.define({
            name: "url",
            namespace: "dup.common.utility",
            deps: {
                dom: "dup.common.utility.dom"
            },
            getQueryValue: function(t, e, i) {
                var n = new RegExp("(\\?|&|#)" + e + "=([^&#]*)(&|#)?"),
                    o = t.match(n),
                    r = "";
                return o && (r = o[2]), i && (r = decodeURIComponent(r)), r
            },
            getTopWindowUrl: function(t) {
                var e = this.dom.getNotCrossDomainTopWindow(t),
                    i = "";
                return this.dom.isInIframe(e) && (i = e.document.referrer), i = i || e.location.href
            },
            getMainDomain: function(t) {
                t = t || document.domain, 0 === t.indexOf("www.") && (t = t.substr(4)), "." === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1));
                var e = ["com", "cn", "net", "org", "gov", "info", "la", "cc", "co", "jp", "us", "hk", "tv", "me", "biz", "in", "be", "io", "tk", "cm", "li", "ru", "ws", "hn", "fm", "tw", "ma", "in", "vn", "name", "mx", "gd", "im"],
                    i = new RegExp("([a-z0-9][a-z0-9\\-]*?\\.(?:" + e.join("|") + ")(?:\\.(?:cn|jp|tw|ru|th))?)$", "i"),
                    n = t.match(i);
                return n ? n[0] : t
            },
            queryToJson: function(t) {
                for (var e, i, n, o, r = t.substr(t.indexOf("?") + 1), s = r.split("&"), a = s.length, d = {}, c = 0; a > c; c++) o = s[c].split("="),
                    e = o[0], i = o[1], n = d[e], "undefined" == typeof n ? d[e] = i : "[object Array]" == Object.prototype.toString.call(n) ? n.push(i) : d[e] = [n, i];
                return d
            }
        }), r.define({
            name: "data",
            namespace: "dup.common.utility",
            deps: {
                lang: "dup.common.utility.lang",
                dom: "dup.common.utility.dom"
            },
            $data: function() {
                this.pageInfo = {}
            },
            data: function() {
                this.topWin = this.dom.getNotCrossDomainTopWindow(), this.globalInfo = this.topWin.BAIDU_SSP__info || (this.topWin.BAIDU_SSP__info = {})
            },
            forEach: function(t, e) {
                var i, n, o, r = t.length;
                if ("function" == typeof e)
                    for (o = 0; r > o && (n = t[o], i = e.call(t, n, o), i !== !1); o++);
                return t
            },
            putInfo: function(t, e, i) {
                var n, o = i ? this.globalInfo : this.pageInfo;
                if ("string" === this.lang.getType(t)) {
                    for (var r = t.split("."), s = o; r.length;) {
                        var a = r.shift();
                        s[a] = r.length ? void 0 !== s[a] ? s[a] : {} : e, s = s[a]
                    }
                    n = e
                }
                return n
            },
            removeInfo: function(t, e) {
                var i = e ? this.globalInfo : this.pageInfo;
                switch (this.lang.getType(t)) {
                    default: return !1;
                    case "string":
                            for (var n = t.split("."); n.length;) {
                            var o = n.shift();
                            if (!n.length || void 0 === i[o]) return delete i[o], !0;
                            i = i[o]
                        }
                }
                return !1
            },
            getInfo: function(t, e) {
                var i, n = e ? this.globalInfo : this.pageInfo;
                return "string" === this.lang.getType(t) && (i = this.lang.getAttribute(n, t)), i
            },
            getOnce: function(t) {
                var e = window,
                    i = e[t];
                return e[t] = void 0, i
            },
            defineOnce: function(t, e, i) {
                var i = window[i] || window;
                return i[t] ? i[t] : (i[t] = e, e)
            },
            getConfig: function(t) {
                return t ? (this.pageInfo = this.getInfo("pageConfig") || {}, this.pageInfo[t]) : !1
            },
            putConfig: function(t, e) {
                return t && e ? (this.pageInfo = this.getInfo("pageConfig") || {}, this.pageInfo[t] = e, this.putInfo("pageConfig", this.pageInfo), !0) : !1
            }
        }), r.define({
            name: "systemParam",
            namespace: "dup.business.parameter",
            deps: {
                dom: "dup.common.utility.dom",
                style: "dup.common.utility.style"
            },
            $systemParam: function() {
                this.win = window, this.doc = this.win.document, this.screen = this.win.screen
            },
            paramsList: [{
                key: "uc",
                value: function() {
                    var t = [this.screen.availWidth, this.screen.availHeight];
                    return t.join("x")
                }
            }, {
                key: "pis",
                value: function() {
                    var t = this.dom.isInIframe(this.win) ? [this.style.getClientWidth(), this.style.getClientHeight()] : [-1, -1];
                    return t.join("x")
                }
            }, {
                key: "sr",
                value: function() {
                    var t = [this.screen.width, this.screen.height];
                    return t.join("x")
                }
            }, {
                key: "tcn",
                value: function() {
                    var t = +new Date;
                    return Math.round(t / 1e3)
                }
            }]
        }), r.define({
            name: "event",
            namespace: "dup.common.utility",
            deps: {
                dom: "dup.common.utility.dom"
            },
            bind: function(t, e, i) {
                var n = this.dom.isWindow(t) ? t : this.dom.g(t);
                if (n)
                    if (n.addEventListener) n.addEventListener(e, i, !1);
                    else if (n.attachEvent) n.attachEvent("on" + e, i);
                else {
                    var o = n["on" + e];
                    n["on" + e] = function() {
                        o && o.apply(this, arguments), i.apply(this, arguments)
                    }
                }
                return n
            },
            off: function(t, e, i) {
                var n, o, r = t._listeners_;
                if (!r) return t;
                if ("undefined" == typeof e) {
                    for (n in r) delete r[n];
                    return t
                }
                if (e.indexOf("on") && (e = "on" + e), o = r[e], "undefined" == typeof i) delete r[e];
                else if (o)
                    for (n = o.length - 1; n >= 0; n--) o[n].handler === i && o.splice(n, 1);
                return t
            },
            unBind: function(t, e, i) {
                return "string" == typeof t && (t = this.dom.g(t)), t = this.off(t, e.replace(/^\s*on/, ""), i)
            },
            app: function(t, e) {
                return t.bind.apply(t, Array.prototype.slice.call(arguments, 1))
            }
        }), r.define({
            name: "asserter",
            namespace: "dup.ui.assertion",
            deps: {
                mobile: "dup.ui.assertion.mobile.float",
                dynamicFloat: "dup.ui.assertion.dynamicFloat"
            },
            assert: function(t) {
                var e = t.response.placement,
                    i = e.encode_userdefine || "",
                    n = e.userdefine;
                "encoded" === i && (n = decodeURIComponent(e.userdefine));
                for (var o = n.split("|") || [], r = {}, s = 0, a = o.length; a > s; s++) {
                    var d = o[s],
                        c = d.split("="),
                        l = c[0];
                    l && (r[l] = c[1])
                }
                if (r.hasOwnProperty("painter")) return r.painter;
                var h = t.styleOpenApi.tn || "",
                    u = parseInt(t.styleOpenApi.xuanting || 0, 10);
                return h.indexOf("mobile") >= 0 && u > 0 ? "mobile.float" : h.indexOf("mobile") >= 0 ? "mobile.inlayFix" : u > 0 ? "dynamicFloat" : h && h.length > 0 && h.indexOf("_xuanfu") < 0 && h.indexOf("float") < 0 ? "inlayFix" : ""
            }
        }), r.define({
            name: "deliveryLimit",
            namespace: "dup.business",
            deps: {
                inlayFixAssert: "dup.ui.assertion.inlayFix",
                dynamicFloatAssert: "dup.ui.assertion.dynamicFloat",
                dom: "dup.common.utility.dom"
            },
            MAX_COUNT: {},
            TYPE: {
                INLAY: "inlay",
                COUPLET: "couplet",
                POPUP: "popup",
                LINKUNIT: "linkunit"
            },
            $deliveryLimit: function() {
                this.displayedMap = this.displayedMap || {}, this.MAX_COUNT[this.TYPE.INLAY] = 25, this.MAX_COUNT[this.TYPE.COUPLET] = 2, this.MAX_COUNT[this.TYPE.POPUP] = 1, this.MAX_COUNT[this.TYPE.LINKUNIT] = 25
            },
            validate: function(t) {
                if (!t.isUnion) return !0;
                var e = this.getSlotType(t),
                    i = this.getAdCount(e),
                    n = this.MAX_COUNT[e];
                return n > i
            },
            getAdCount: function(t) {
                var e = this.displayedMap[t] || {},
                    i = 0;
                for (var n in e) n && e[n] && e.hasOwnProperty(n) && (this.dom.g(n) ? i++ : e[n] = void 0);
                return i
            },
            setAdsCount: function(t, e) {
                var i = this.displayedMap[t];
                return i || (this.displayedMap[t] = {}, i = this.displayedMap[t]), i[e] = 1, !0
            },
            getSlotType: function(t) {
                var e = this.TYPE.INLAY,
                    i = t.response;
                if (!i) return e;
                var n = i.placement;
                if ((this.inlayFixAssert.assert(i) || this.dynamicFloatAssert.assert(i)) && (e = this.TYPE.INLAY), n && n.fillstyle)
                    for (var o = i.placement.fillstyle.elements || [], r = 0, s = o.length; s > r; r++)
                        if (5 === o[r]) return this.TYPE.LINKUNIT;
                return e
            }
        }), r.define({
            name: "browserParam",
            namespace: "dup.business.parameter",
            deps: {
                config: "dup.common.config",
                browser: "dup.common.utility.browser",
                dom: "dup.common.utility.dom",
                style: "dup.common.utility.style",
                url: "dup.common.utility.url",
                cookie: "dup.common.utility.cookie"
            },
            $browserParam: function() {
                this.win = window, this.doc = this.win.document, this.nav = this.win.navigator
            },
            getTopWin: function() {
                return this.topWindow || (this.topWindow = this.dom.getNotCrossDomainTopWindow()), this.topWindow
            },
            paramsList: [{
                key: "dbv",
                value: function() {
                    return this.browser.qihoo ? "1" : this.browser.chrome ? "2" : "0"
                }
            }, {
                key: "drs",
                value: function() {
                    var t = {
                        uninitialized: 0,
                        loading: 1,
                        loaded: 2,
                        interactive: 3,
                        complete: 4
                    };
                    try {
                        return t[this.doc.readyState]
                    } catch (e) {
                        return -1
                    }
                }
            }, {
                key: "pcs",
                value: function() {
                    var t = [this.style.getClientWidth(this.getTopWin()), this.style.getClientHeight(this.getTopWin())];
                    return t.join("x")
                }
            }, {
                key: "pss",
                value: function() {
                    var t = [this.style.getScrollWidth(this.getTopWin()), this.style.getScrollHeight(this.getTopWin())];
                    return t.join("x")
                }
            }, {
                key: "cfv",
                value: function() {
                    return this.browser.getFlashPlayerVersion()
                }
            }, {
                key: "cpl",
                value: function() {
                    return this.nav.plugins.length || 0
                }
            }, {
                key: "chi",
                value: function() {
                    return this.win.history.length || 0
                }
            }, {
                key: "cce",
                value: function() {
                    return this.nav.cookieEnabled || 0
                }
            }, {
                key: "cec",
                value: function() {
                    return (this.doc.characterSet ? this.doc.characterSet : this.doc.charset) || ""
                }
            }, {
                key: "tlm",
                value: function() {
                    return Date.parse(this.doc.lastModified) / 1e3
                }
            }, {
                key: "prot",
                value: function() {
                    return "https:" === this.config.HTTP_PROTOCOL ? "2" : ""
                }
            }, {
                key: "rw",
                value: function() {
                    var t = Math.max(320, Math.min(window.innerWidth, window.innerHeight));
                    return isNaN(t) && (t = Math.min(this.style.getClientWidth(), this.style.getClientHeight())), t || 0
                }
            }, {
                key: "ltu",
                encode: !0,
                limit: 700,
                value: function() {
                    var e, i = r.proxy(this, function(t) {
                        var e = 200,
                            i = 60,
                            n = this.style.getClientWidth(t),
                            o = this.style.getClientHeight(t);
                        return e > 0 && i > 0 && n > 2 * e && o > 2 * i
                    });
                    return e = t.location && t.location.href ? t.location.href : this.url.getTopWindowUrl(i), e.indexOf("cpro_prev") > 0 && (e = e.slice(0, e.indexOf("?"))), e
                }
            }, {
                key: "liu",
                encode: !0,
                limit: 700,
                value: function() {
                    return this.dom.isInIframe(this.win) ? this.doc.URL : ""
                }
            }, {
                key: "ltr",
                encode: !0,
                limit: 300,
                value: function() {
                    var t = this.getTopWin(),
                        e = "";
                    try {
                        e = t.opener ? t.opener.document.location.href : ""
                    } catch (i) {}
                    return e || t.document.referrer
                }
            }, {
                key: "lcr",
                encode: !0,
                value: function() {
                    if (this.slotInfo.isUnion) return "";
                    var t = this.doc.referrer;
                    if (!t) return "";
                    var e = t.replace(/^https?:\/\//, "");
                    e = e.split("/")[0], e = e.split(":")[0], e = this.url.getMainDomain(e);
                    var i = this.url.getMainDomain(),
                        n = this.cookie.get(this.config.LCR_COOKIE_NAME);
                    return n && i === e ? n : i !== e ? (this.cookie.set(this.config.LCR_COOKIE_NAME, t, {
                        domain: i
                    }), t) : ""
                }
            }, {
                key: "ecd",
                encode: !0,
                value: function() {
                    return this.browser.ie && this.browser.ie < 9 ? 0 : 1
                }
            }],
            setSlotInfo: function(t) {
                this.slotInfo = t
            }
        }), r.define({
            name: "origentation",
            namespace: "dup.business",
            deps: {
                lang: "dup.common.utility.lang",
                data: "dup.common.utility.data"
            },
            orientKey: "bizOrientations",
            orientUrgentKey: "bizUrgentOrientations",
            hasOwn: Object.prototype.hasOwnProperty,
            addOrientation: function(t, e) {
                var i = this.beforeSavingOrientation.apply(this, arguments);
                return this.saveOrientation(t, i)
            },
            beforeSavingOrientation: function(t, e) {
                var i = /^[0-9a-zA-Z]+$/;
                return t && i.test(t) && e ? e = "array" === this.lang.getType(e) ? e : Array.prototype.slice.call(arguments, 1) : []
            },
            saveOrientation: function(t, e) {
                if (!e || !e.length) return !1;
                var i = {},
                    n = this.orientKey,
                    o = this.data.getInfo(n) || i,
                    r = {};
                for (var s in o) this.hasOwn.call(o, s) && (r[s] = "array" === this.lang.getType(o[s]) ? o[s].slice() : o[s]);
                for (var a = r[t] || [], d = e.length, c = 0; d > c; c++) {
                    var l = e[c];
                    "string" == typeof l && (l = encodeURIComponent(l), l.length <= 100 && (a[a.length] = l))
                }
                return a.length ? (r[t] = this.lang.unique(a), this.data.putInfo(n, r), !0) : !1
            },
            getOrientationQuery: function(t) {
                t = t || 500, t = Math.max(0, Math.min(t, 500));
                var e, i = [],
                    n = this.data.getInfo(this.orientUrgentKey) || this.data.getInfo(this.orientKey) || {};
                if ("object" === this.lang.getType(n))
                    for (var o in n) this.lang.hasOwn.call(n, o) && (e = o + "=" + n[o].join(","), i[i.length] = e);
                this.data.putInfo(this.orientUrgentKey, void 0), i.sort(function(t, e) {
                    return t.length - e.length
                });
                for (var r = "", s = i.length, a = 0; s > a && !(r.length + i[a].length >= t); a++) r += (a ? "&" : "") + i[a];
                return r
            }
        }), r.define({
            name: "log",
            namespace: "dup.common.utility",
            deps: {
                config: "dup.common.config",
                lang: "dup.common.utility.lang",
                event: "dup.common.utility.event",
                storage: "dup.common.utility.storage"
            },
            storageKey: "BAIDU_DUP_log_storage",
            loadImage: function(t, e) {
                var i = new Image,
                    n = "BAIDU_DUP_log_" + Math.floor(2147483648 * Math.random()).toString(36);
                window[n] = i, i.onload = i.onerror = i.onabort = function() {
                    i.onload = i.onerror = i.onabort = null, window[n] = null, i = null, e && e(this.storageKey, t, !0)
                }, i.src = t
            },
            resendLog: function() {
                var t = this.storage.getItem(this.storageKey);
                if (t) {
                    t = t.split("|");
                    for (var e = 0, i = t.length; i > e; e++) this.loadImage(decodeURIComponent(t[e]), this.storage.spliceItem)
                }
            },
            sendLogRequest: function(t) {
                var e = new Image,
                    i = +new Date,
                    n = "baidu_dan_log_" + i;
                window[n] = e, e.onload = e.onerror = e.onabort = function() {
                    try {
                        delete window[n]
                    } catch (t) {
                        window[n] = void 0
                    }
                    e = null
                }, t += t.indexOf("?") > -1 ? "&" : "?", t += "stamp=" + Math.random(), e.src = t
            },
            sendLog: function(t) {
                t = "object" === this.lang.getType(t) ? t : {};
                var e = t.url || this.config.LOG_URL,
                    i = t.data || {},
                    n = t.option || "now",
                    o = this.lang.serialize(i);
                switch (e += (e.indexOf("?") >= 0 ? "&" : "?") + o + (o ? "&" : "") + "rdm=" + +new Date, n) {
                    case "now":
                        this.loadImage(e);
                        break;
                    case "block":
                        break;
                    case "unload":
                    default:
                        this.storage.addItem(this.storageKey, e, !0), this.event.bind(window, "unload", function() {
                            this.loadImage(e, this.storage.spliceItem)
                        })
                }
            },
            sendEclickLog: function(t, e, i) {
                if (!t || !e) return "";
                var n = "//eclick.baidu.com/" + t + "?type=" + e;
                if (i)
                    for (var o in i) i.hasOwnProperty(o) && (n += "&" + o + "=" + i[o]);
                this.sendLog({
                    url: n,
                    option: "now"
                })
            },
            sendEclickSeLog: function(t, e) {
                this.sendEclickLog("se.jpg", t, e)
            },
            sendEclickRsLog: function(t, e) {
                this.sendEclickLog("rs.jpg", t, e)
            }
        }), r.define({
            name: "fingerPrint",
            namespace: "dup.business",
            deps: {
                browser: "dup.common.utility.browser",
                event: "dup.common.utility.event",
                dom: "dup.common.utility.dom",
                storage: "dup.common.utility.storage",
                log: "dup.common.utility.log",
                config: "dup.common.config"
            },
            start: function() {
                this.idPrefix = "BAIDU_DUP_fp_", this.fpElId = this.idPrefix + "wrapper", this.dom.g(this.fpElId) || this.event.bind(window, "load", r.proxy(this, this.createFPIframe))
            },
            createFPIframe: function() {
                if (!this.dom.g(this.fpElId)) {
                    var t = window,
                        e = t.document,
                        i = e.body,
                        n = this.dom.isInIframe(t) ? e.URL : "",
                        o = null,
                        r = null;
                    if ((this.browser.ie > 9 || !this.browser.ie) && n) try {
                        o = e.cookie, r = this.storage.isAvailable
                    } catch (s) {
                        return
                    }
                    var a = "https://pos.baidu.com/wh/o.htm?ltr=",
                        d = e.createElement("div");
                    d.id = this.fpElId, d.style.position = "absolute", d.style.left = "-1px", d.style.bottom = "-1px", d.style.zIndex = 0, d.style.width = 0, d.style.height = 0, d.style.overflow = "hidden", d.style.visibility = "hidden", d.style.display = "none";
                    var c = e.createElement("iframe");
                    c.id = this.idPrefix + "iframe", c.src = a, c.style.width = 0, c.style.height = 0, c.style.visibility = "hidden", c.style.display = "none";
                    try {
                        d.insertBefore(c, d.firstChild), i && i.insertBefore(d, i.firstChild)
                    } catch (s) {}
                }
            },
            loadAntiBotFile: function(t) {
                var e = 1e4 * Math.random();
                if (500 > e) {
                    if (this.antiScript) {
                        if (window.BAIDU_SSP_sendAntiLog) return void window.BAIDU_SSP_sendAntiLog(t)
                    } else {
                        this.antiScript = document.createElement("script"), this.antiScript.type = "text/javascript", this.antiScript.async = !0, this.antiScript.src = "//cpro.baidustatic.com/cpro/ui/ab.min.js";
                        var i = document.getElementsByTagName("script")[0];
                        i && i.parentNode && i.parentNode.insertBefore(this.antiScript, i), this.log.sendEclickLog("rs.jpg", "loadAntiBotFile", {
                            queryId: t,
                            psid: window[this.config.COMMON_GLOBAL] && window[this.config.COMMON_GLOBAL][this.config.PAGE_SEARCH_ID]
                        })
                    }
                    this.dom.loadScript(this.antiScript, function() {
                        window.BAIDU_SSP_sendAntiLog && window.BAIDU_SSP_sendAntiLog(t)
                    })
                }
            }
        }), r.define({
            name: "loader",
            namespace: "dup.common",
            deps: {
                config: "dup.common.config",
                log: "dup.common.utility.log"
            },
            $loader: function() {
                this.loadingCls = this.loadingCls || {}
            },
            load: function(t, e, i) {
                var n = r.getClassPath(e),
                    o = document.createElement("script");
                o.type = "text/javascript", o.async = !0, o.src = n;
                var s = r.proxy(this, this.onLoadStatusHandler, t, o);
                o.onload = o.onerror = o.onreadystatechange = s;
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(o, a), this.loadingCls[t] = i
            },
            onLoadStatusHandler: function(t, e, i) {
                var e, i;
                3 === arguments.length ? (e = arguments[1], i = arguments[2]) : (e = arguments[0], i = arguments[1]);
                var n = this.loadingCls[e];
                i && /loaded|complete|undefined/.test(i.readyState) && (i.onload = i.onerror = i.onreadystatechange = null, i = void 0, n && n())
            }
        }), r.define({
            name: "painterSelector",
            namespace: "dup.business",
            deps: {
                asserter: "dup.ui.assertion.asserter"
            },
            getPainter: function(t) {
                var e = this.asserter.assert(t);
                if (e) return "dup.ui.painter." + e;
                for (var i = t.response, n = ["bottomSearchBar", "inlayFix", "dynamicFloat", "insideText", "mobile.inlayFix", "mobile.float", "mobile.insideText"], o = 0, s = n.length; s > o; o++) {
                    var a = r.using("dup.ui.assertion." + n[o]);
                    if (a && a.assert(i)) return "dup.ui.painter." + n[o]
                }
                e || (t.errors = t.errors || [], t.errors.push("painterName is empty"))
            }
        }), r.define({
            name: "pageSearchId",
            namespace: "dup.business",
            deps: {
                browserParam: "dup.business.parameter.browserParam",
                config: "dup.common.config"
            },
            pageSearchId: function(t) {
                "object" == typeof t ? (this.hasher = t.hasher, this.time = t.time, this.url = t.url, this.random = t.random, this.screen_resolution = t.screen_resolution, this.screen_orientation = t.screen_orientation, this.canvas = t.canvas, this.ie_activex = t.ie_activex) : "function" == typeof t && (this.hasher = t)
            },
            get: function() {
                var t = [];
                t.push((new Date).getTime()), t.push(Math.random()), this.url && t.push(this.url);
                try {
                    if (t.push(navigator.userAgent), t.push(navigator.language), t.push(window.screen.colorDepth), this.screen_resolution) {
                        var e = this.getScreenResolution();
                        "undefined" != typeof e && t.push(e.join("x"))
                    }
                    t.push((new Date).getTimezoneOffset()), t.push(this.hasSessionStorage()), t.push(this.hasLocalStorage()), t.push(this.hasIndexDb()), document.body ? t.push(typeof document.body.addBehavior) : t.push("undefined"), t.push(typeof window.openDatabase), t.push(navigator.cpuClass), t.push(navigator.platform), t.push(navigator.doNotTrack), this.canvas && this.isCanvasSupported() && t.push(this.getCanvasFingerprint())
                } catch (i) {
                    var n = i && i.stack ? i.stack : i,
                        o = this.config.LOG_URL;
                    o += "?type=fatalError", o += "&key=pageSearchId", o += "&value=navigatorParam", o += "&date=" + (new Date).getTime(), o += "&mes=" + encodeURIComponent(n), (new Image).src = o
                }
                return this.hasher ? this.hasher(t.join("~~~"), 31) : this.x64hash128(t.join("~~~"), 31)
            },
            x64Add: function(t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var i = [0, 0, 0, 0];
                return i[3] += t[3] + e[3], i[2] += i[3] >>> 16, i[3] &= 65535, i[2] += t[2] + e[2], i[1] += i[2] >>> 16, i[2] &= 65535, i[1] += t[1] + e[1], i[0] += i[1] >>> 16, i[1] &= 65535, i[0] += t[0] + e[0], i[0] &= 65535, [i[0] << 16 | i[1], i[2] << 16 | i[3]]
            },
            x64Multiply: function(t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var i = [0, 0, 0, 0];
                return i[3] += t[3] * e[3], i[2] += i[3] >>> 16, i[3] &= 65535, i[2] += t[2] * e[3], i[1] += i[2] >>> 16, i[2] &= 65535, i[2] += t[3] * e[2], i[1] += i[2] >>> 16, i[2] &= 65535, i[1] += t[1] * e[3], i[0] += i[1] >>> 16, i[1] &= 65535, i[1] += t[2] * e[2], i[0] += i[1] >>> 16, i[1] &= 65535, i[1] += t[3] * e[1], i[0] += i[1] >>> 16, i[1] &= 65535, i[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], i[0] &= 65535, [i[0] << 16 | i[1], i[2] << 16 | i[3]]
            },
            x64Rotl: function(t, e) {
                return e %= 64, 32 === e ? [t[1], t[0]] : 32 > e ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
            },
            x64LeftShift: function(t, e) {
                return e %= 64, 0 === e ? t : 32 > e ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
            },
            x64Xor: function(t, e) {
                return [t[0] ^ e[0], t[1] ^ e[1]]
            },
            x64Fmix: function(t) {
                return t = this.x64Xor(t, [0, t[0] >>> 1]), t = this.x64Multiply(t, [4283543511, 3981806797]), t = this.x64Xor(t, [0, t[0] >>> 1]), t = this.x64Multiply(t, [3301882366, 444984403]), t = this.x64Xor(t, [0, t[0] >>> 1])
            },
            x64hash128: function(t, e) {
                t = t || "", e = e || 0;
                for (var i = t.length % 16, n = t.length - i, o = [0, e], r = [0, e], s = [0, 0], a = [0, 0], d = [2277735313, 289559509], c = [1291169091, 658871167], l = 0; n > l; l += 16) s = [255 & t.charCodeAt(l + 4) | (255 & t.charCodeAt(l + 5)) << 8 | (255 & t.charCodeAt(l + 6)) << 16 | (255 & t.charCodeAt(l + 7)) << 24, 255 & t.charCodeAt(l) | (255 & t.charCodeAt(l + 1)) << 8 | (255 & t.charCodeAt(l + 2)) << 16 | (255 & t.charCodeAt(l + 3)) << 24], a = [255 & t.charCodeAt(l + 12) | (255 & t.charCodeAt(l + 13)) << 8 | (255 & t.charCodeAt(l + 14)) << 16 | (255 & t.charCodeAt(l + 15)) << 24, 255 & t.charCodeAt(l + 8) | (255 & t.charCodeAt(l + 9)) << 8 | (255 & t.charCodeAt(l + 10)) << 16 | (255 & t.charCodeAt(l + 11)) << 24], s = this.x64Multiply(s, d), s = this.x64Rotl(s, 31), s = this.x64Multiply(s, c), o = this.x64Xor(o, s), o = this.x64Rotl(o, 27), o = this.x64Add(o, r), o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 1390208809]), a = this.x64Multiply(a, c), a = this.x64Rotl(a, 33), a = this.x64Multiply(a, d), r = this.x64Xor(r, a), r = this.x64Rotl(r, 31), r = this.x64Add(r, o), r = this.x64Add(this.x64Multiply(r, [0, 5]), [0, 944331445]);
                switch (s = [0, 0], a = [0, 0], i) {
                    case 15:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(l + 14)], 48));
                    case 14:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(l + 13)], 40));
                    case 13:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(l + 12)], 32));
                    case 12:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(l + 11)], 24));
                    case 11:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(l + 10)], 16));
                    case 10:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(l + 9)], 8));
                    case 9:
                        a = this.x64Xor(a, [0, t.charCodeAt(l + 8)]), a = this.x64Multiply(a, c), a = this.x64Rotl(a, 33), a = this.x64Multiply(a, d), r = this.x64Xor(r, a);
                    case 8:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 7)], 56));
                    case 7:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 6)], 48));
                    case 6:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 5)], 40));
                    case 5:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 4)], 32));
                    case 4:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 3)], 24));
                    case 3:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 2)], 16));
                    case 2:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 1)], 8));
                    case 1:
                        s = this.x64Xor(s, [0, t.charCodeAt(l)]), s = this.x64Multiply(s, d), s = this.x64Rotl(s, 31), s = this.x64Multiply(s, c), o = this.x64Xor(o, s)
                }
                return o = this.x64Xor(o, [0, t.length]), r = this.x64Xor(r, [0, t.length]), o = this.x64Add(o, r), r = this.x64Add(r, o), o = this.x64Fmix(o), r = this.x64Fmix(r), o = this.x64Add(o, r), r = this.x64Add(r, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[1] >>> 0).toString(16)).slice(-8)
            },
            hasLocalStorage: function() {
                try {
                    return !!window.localStorage
                } catch (t) {
                    return !0
                }
            },
            hasSessionStorage: function() {
                try {
                    return !!window.sessionStorage
                } catch (t) {
                    return !0
                }
            },
            hasIndexDb: function() {
                try {
                    return !!window.indexedDB
                } catch (t) {
                    return !0
                }
            },
            isCanvasSupported: function() {
                var t = document.createElement("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            },
            getScreenResolution: function() {
                var t;
                return t = this.screen_orientation ? window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height] : [window.screen.height, window.screen.width]
            },
            getCanvasFingerprint: function() {
                var t = document.createElement("canvas"),
                    e = t.getContext("2d"),
                    i = "http://valve.github.io";
                return e.textBaseline = "top", e.font = '14px "Arial"', e.textBaseline = "alphabetic", e.fillStyle = "#f60", e.fillRect(125, 1, 62, 20), e.fillStyle = "#069", e.fillText(i, 2, 15), e.fillStyle = "rgba(102, 204, 0, 0.7)", e.fillText(i, 4, 17), t.toDataURL()
            },
            getPageSearchId: function() {
                try {
                    for (var t = "", e = this.browserParam.paramsList, i = 0; i < e.length; i++)
                        if ("ltu" === e[i].key) {
                            t = r.proxy(this.browserParam, e[i].value)();
                            break
                        }
                    return this.pageSearchId({
                        url: t
                    }), this.get()
                } catch (n) {
                    var o = n && n.stack ? n.stack : n,
                        s = this.config.LOG_URL;
                    s += "?type=fatalError", s += "&key=pageSearchId", s += "&date=" + (new Date).getTime(), s += "&mes=" + encodeURIComponent(o), (new Image).src = s
                }
            }
        }), r.define({
            name: "businessParam",
            namespace: "dup.business.parameter",
            deps: {
                config: "dup.common.config",
                dom: "dup.common.utility.dom",
                browser: "dup.common.utility.browser",
                origentation: "dup.business.origentation"
            },
            setTopWindow: function(t) {
                this.topWindow = t
            },
            paramsList: [{
                key: "dcb",
                value: function() {
                    return this.config.LOADER_DEFINE_NAME
                }
            }, {
                key: "dtm",
                value: function() {
                    return this.config.SSP_JSONP
                }
            }, {
                key: "dvi",
                value: function() {
                    return "0.0"
                }
            }, {
                key: "dci",
                value: function() {
                    return "-1"
                }
            }, {
                key: "dds",
                value: function() {
                    return ""
                }
            }, {
                key: "dpt",
                value: function() {
                    return "none"
                }
            }, {
                key: "tsr",
                value: function() {
                    var t = 0,
                        e = +new Date;
                    return this.config.startTime && (t = e - this.config.startTime), t
                }
            }, {
                key: "tpr",
                value: function() {
                    var e = 24e4,
                        i = (new Date).getTime(),
                        n = t.DUP_4_SF ? t : this.topWindow,
                        o = n[this.config.FIRST_REQ_TIME];
                    return (!o || "number" != typeof o || i - o >= e) && (o = n[this.config.FIRST_REQ_TIME] = i), o
                }
            }, {
                key: "cop",
                encode: !0,
                value: function() {
                    return this.origentation.getOrientationQuery()
                }
            }, {
                key: "ti",
                encode: !0,
                limit: 60,
                value: function() {
                    var t = this.browser.baiduboxapp && this.topWindow.articleTitle ? this.topWindow.articleTitle : this.topWindow.document.title;
                    return t
                }
            }, {
                key: "utdi",
                encode: !0,
                value: function() {
                    var t = this.browser.baiduboxapp && this.topWindow.MP && this.topWindow.MP.globalConf && this.topWindow.MP.globalConf.cuid;
                    return t || ""
                }
            }, {
                key: "atdi",
                encode: !0,
                value: function() {
                    var t = this.browser.baiduboxapp && this.topWindow.MP && this.topWindow.MP.globalConf && this.topWindow.MP.globalConf.nid;
                    return t || ""
                }
            }, {
                key: "ari",
                value: function() {
                    return 2
                }
            }]
        }), r.define({
            name: "monitor",
            namespace: "dup.business",
            deps: {
                config: "dup.common.config",
                log: "dup.common.utility.log"
            },
            expLog: function(t) {
                var e, i = t.id ? t.id : "",
                    n = t.async ? t.async : "",
                    o = t.type ? t.type : "ssplog",
                    r = t.pos ? t.pos : "",
                    s = t.status ? t.status : "",
                    a = t.mes ? encodeURIComponent(t.mes) : "",
                    d = t.exps ? t.exps : "";
                e = "mip" === o ? this.config.SBD_LOG : this.config.LOG_URL, e += ["?type=" + o, "id=" + i, "pos=" + r, "status=" + s, "async=" + n, "mes=" + a, "exps=" + d, "from=ssp"].join("&"), this.log.sendLogRequest(e)
            },
            sendLog: function(t) {
                var e = t.response.pdb_deliv.deliv_des,
                    i = e._html,
                    n = i && i.monitorUrl;
                if (n) {
                    var o = new Image,
                        r = "log" + +new Date;
                    window[r] = o, "http" == n.substr(0, 4).toLowerCase() ? ("http://" == n.substr(0, 7).toLowerCase() && (n = n.replace("http://", "//")), "https://" == n.substr(0, 8).toLowerCase() && (n = n.replace("https://", "//"))) : n = "//" + n;
                    var s = function() {
                        o.onload = o.onerror = o.onabort = null;
                        try {
                            delete window[r]
                        } catch (t) {
                            window[r] = void 0
                        }
                    };
                    o.onload = o.onerror = o.onabort = s, o.src = n
                }
            }
        }), r.define({
            name: "slotParam",
            namespace: "dup.business.parameter",
            deps: {
                dom: "dup.common.utility.dom",
                style: "dup.common.utility.style",
                config: "dup.common.config",
                expBranch: "dup.business.expBranch",
                pageSearchId: "dup.business.pageSearchId"
            },
            $slotParam: function() {
                this.win = window
            },
            paramsList: [{
                key: "psi",
                value: function() {
                    var t = window[this.config.COMMON_GLOBAL],
                        e = t[this.config.PAGE_SEARCH_ID];
                    return e || (e = t[this.config.PAGE_SEARCH_ID] = this.pageSearchId.getPageSearchId()), e
                }
            }, {
                key: "di",
                value: function() {
                    return this.slotInfo.slotId
                }
            }, {
                key: "dri",
                value: function() {
                    return this.slotInfo.index
                }
            }, {
                key: "dis",
                value: function() {
                    var t = 0;
                    this.dom.isInIframe(this.win) && (t += 1), this.dom.isInCrossDomainIframe(this.win, this.win.top) && (t += 2);
                    var e = this.style.getClientWidth(),
                        i = this.style.getClientHeight();
                    (40 > e || 10 > i) && (t += 4);
                    try {
                        if (t & !0) {
                            var n = this.dom.getNotCrossDomainTopWindow();
                            n.document.referrer && n.top === n.parent && (t += 8)
                        }
                    } catch (o) {
                        var r = o && o.stack ? o.stack : o,
                            s = this.config.LOG_URL;
                        s += "?type=fatalError", s += "&key=disParam", s += "&date=" + (new Date).getTime(), s += "&mes=" + encodeURIComponent(r), (new Image).src = s
                    }
                    return t
                }
            }, {
                key: "dai",
                value: function() {
                    return this.slotInfo.count
                }
            }, {
                key: "ps",
                value: function() {
                    var t = "0",
                        e = this.dom.g(this.slotInfo.containerId),
                        i = this.style.getPosition(e);
                    return i && void 0 !== i.top && void 0 !== i.left && (t = i.top + "x" + i.left), t
                }
            }, {
                key: "coa",
                encode: !0,
                value: function() {
                    var t = [],
                        e = this.slotInfo.styleOpenApi;
                    "-1" === this.slotInfo.pcwd && (e.cpro_ftpc = "true");
                    for (var i in e)
                        if (i && "undefined" != typeof e[i] && e.hasOwnProperty(i)) {
                            var n = i;
                            if ("width" === i || "height" === i || "sizeType" === i || "apType" === i || "floatingState" === i) continue;
                            "cpro_w" === i && (n = "rsi0"), "cpro_h" === i && (n = "rsi1"), t.push(n + "=" + encodeURIComponent(e[i]))
                        }
                    return t.join("&")
                }
            }, {
                key: "enu",
                value: function() {
                    return "encoding"
                }
            }, {
                key: "cw",
                value: function() {
                    var t = this.slotInfo.styleOpenApi.cpro_ftpc || "true" === this.slotInfo.styleOpenApi.cpro_ftpc || "-1" === this.slotInfo.pcwd,
                        e = this.dom.g(this.slotInfo.containerId);
                    return t && e && e.parentElement.clientWidth ? e.parentElement.clientWidth || 0 : void 0
                }
            }, {
                key: "exps",
                value: function() {
                    var t = this.slotInfo.exps || this.config.EXP_ID;
                    return this.expBranch.mergeExps(t, window.___baidu_union_.expId)
                }
            }],
            setSlotInfo: function(t) {
                this.slotInfo = t
            }
        }), r.define({
            name: "param",
            namespace: "dup.business",
            deps: {
                config: "dup.common.config",
                slotParam: "dup.business.parameter.slotParam",
                businessParam: "dup.business.parameter.businessParam",
                browserParam: "dup.business.parameter.browserParam",
                systemParam: "dup.business.parameter.systemParam",
                additionalParam: "dup.business.parameter.additionalParam",
                browser: "dup.common.utility.browser",
                style: "dup.common.utility.style",
                dom: "dup.common.utility.dom"
            },
            snap: function(t) {
                for (var e = [], i = t.paramsList, n = 0, o = i.length; o > n; n++) {
                    var r = i[n],
                        s = r.key,
                        a = r.encode,
                        d = r.value,
                        c = r.limit;
                    try {
                        d = "function" == typeof d ? d.apply(t) : d, d = a ? encodeURIComponent(d) : d, d = c ? d.substr(0, c) : d, e.push({
                            key: s,
                            value: d
                        })
                    } catch (l) {
                        var h = this.config.LOG_URL;
                        h += "?type=adcodex_error", h += "&info=" + encodeURIComponent(l.message), h += "&stack=" + encodeURIComponent(l.stack || ""), h += "&key=" + encodeURIComponent(s), h += "&t=" + (new Date).getTime(), (new Image).src = h
                    }
                }
                return e
            },
            getParamObj: function(t) {
                var e = [];
                this.slotParam.setSlotInfo(t), this.browserParam.setSlotInfo(t), this.businessParam.setTopWindow(this.dom.getNotCrossDomainTopWindow()), e = e.concat(this.snap(this.slotParam)), e = e.concat(this.snap(this.businessParam)), e = e.concat(this.snap(this.browserParam)), e = e.concat(this.snap(this.additionalParam)), e = e.concat(this.snap(this.systemParam));
                for (var i = {}, n = 0, o = e.length; o > n; n++) {
                    var r = e[n];
                    i[r.key] = r.value
                }
                return i
            },
            getParamString: function(t) {
                var e = [];
                for (var i in t)
                    if (i && (t[i] || 0 === t[i]) && t.hasOwnProperty(i)) {
                        var n = t[i];
                        e.push(i + "=" + n)
                    }
                if (window && window.location && window.location.ancestorOrigins && window.location.ancestorOrigins.length) {
                    var o = window.location.ancestorOrigins;
                    e.push("lto=" + encodeURIComponent(o[o.length - 1])), e.push("ltl=" + o.length)
                }
                return e.join("&")
            },
            getPmpRequestUrl: function(t) {
                var e = [],
                    i = t.paramObj,
                    n = t.timestampWatcher,
                    o = n.t1,
                    s = n.t2,
                    a = n.t3,
                    d = t.response;
                i.qn = d.queryid, e.push("conwid=" + t.width), e.push("conhei=" + t.height);
                var c = d.pdb_deliv,
                    l = d.order_deliv,
                    h = d.rtb_deliv;
                d.media_protect && "0" !== d.media_protect && e.push("mpdi=" + d.media_protect), c.deliv_id && e.push("pdbid=" + c.deliv_id), l.deliv_id && e.push("orderid=" + l.deliv_id), l.demand_id && e.push("odid=" + l.demand_id), h.deliv_id && e.push("rtbid=" + h.deliv_id), h.demand_id && e.push("rdid=" + h.demand_id);
                var u = t.complementType;
                if (t.isNeedCacheRequest || 4 === u || 7 === u) {
                    var p = i.qn;
                    i.dpv = p;
                    var m = r.using("dup.business.requestCache");
                    m.add(p, t)
                }
                t.isUnion ? e.push("dc=3") : e.push("dc=2"), o > 0 && (i.tt = o + "." + (s - o) + "." + (a - o) + "." + (+new Date - o)), i.exps && (e.push("exps=" + i.exps), i.exps = "");
                var f = e.join("&");
                return this.config.POS_URL + f + "&" + this.getParamString(i)
            },
            getOneParam: function(t, e) {
                for (var i = this[t] && this[t].paramsList, n = 0; n < i.length; n++)
                    if (i[n].key === e) return r.proxy(this[t], i[n].value)()
            }
        }), r.define({
            name: "slot",
            namespace: "dup.business",
            deps: {
                config: "dup.common.config",
                param: "dup.business.param",
                dom: "dup.common.utility.dom",
                monitor: "dup.business.monitor",
                lang: "dup.common.utility.lang",
                style: "dup.common.utility.style",
                browser: "dup.common.utility.browser",
                storage: "dup.common.utility.storage",
                expBranch: "dup.business.expBranch",
                fingerPrint: "dup.business.fingerPrint"
            },
            $slot: function() {
                this.slotsMap = this.slotsMap || {}, this.win = window, this.counter = t.counter, this.counter = this.counter || {}, this.counter.slotTotalCount = this.counter.slotTotalCount || 1, this.counter.slotCountIndex = this.counter.slotCountIndex || {}
            },
            getSlotInfo: function(t) {
                return this.slotsMap[t]
            },
            getSlotInfoByRawId: function(t) {
                for (var e in this.slotsMap)
                    if (this.slotsMap.hasOwnProperty(e) && e.indexOf(t) > -1) return this.slotsMap[e];
                return {}
            },
            createSlot: function(t) {
                var e = "" + t.slotId;
                this.counter.slotCountIndex[e] = this.counter.slotCountIndex[e] || 0;
                var i = {};
                return i.index = this.counter.slotCountIndex[e], i.count = 0 === e.indexOf("u") ? this.counter.slotTotalCount : 0, i.id = e + "_" + i.index, i.containerId = this.config.DUP_PREFIX + "_wrapper_" + e + "_" + i.index, i.slotId = t.slotId, i.productLine = t.productLine, i.errors = [], this.counter.slotCountIndex[e] = this.counter.slotCountIndex[e] + 1, e !== this.config.AUTOID && (this.counter.slotTotalCount = this.counter.slotTotalCount + 1), i.isAsync = t.isAsync, i.timestampWatcher = s ? {
                    t1: s
                } : {
                    t1: 0
                }, t.coa && "object" == typeof t.coa ? i.styleOpenApi = t.coa : window.cproStyleApi ? i.styleOpenApi = window.cproStyleApi[e] || {} : i.styleOpenApi = {}, i.isUnion = 0 === e.indexOf("u"), i.width = 0, i.height = 0, i
            },
            processSlot: function(t) {
                var e = t.response.rtb_deliv,
                    i = t.response.order_deliv,
                    n = t.response.pdb_deliv,
                    o = e.deliv_id = parseInt(e.deliv_id, 10),
                    r = e.demand_id = parseInt(e.demand_id, 10),
                    s = i.deliv_id = parseInt(i.deliv_id, 10),
                    a = i.demand_id = parseInt(i.demand_id, 10),
                    d = n.deliv_id = parseInt(n.deliv_id, 10),
                    c = (n.demand_id = parseInt(n.demand_id, 10), t.response.placement || {});
                t.containerInfo = c.container || {}, t.complementType = c.complement_type, t.isPdbAd = !(o || r || s || a), t.isNeedCacheRequest = 0 !== o && 7 === t.complementType || 0 !== s || 0 !== o && 0 !== d
            },
            addSlot: function(t) {
                this.slotsMap[t.id] = t
            },
            clearStatus: function(t, e) {
                t.status = t.status ^ e
            },
            checkStatus: function(t, e) {
                return (t.status & e) > 0
            },
            setStatus: function(t, e) {
                var i = this.getSlotInfo(t);
                i && (i.status |= e)
            },
            process: function() {
                var t = this.slotsMap;
                for (var e in t)
                    if (e && t[e] && t.hasOwnProperty(e)) {
                        var i = t[e];
                        if (i.status >= this.config.STATUS_REQUEST) continue;
                        this.createContainer(i), this.requestSlotInfo(i)
                    }
            },
            requestSlotInfo: function(t) {
                !this.config.FIRST_ONCESEACH && window.postMessage && (this.config.FIRST_ONCESEACH = !0, this.dom.bind(window, "message", r.proxy(this, this.onMessageHandler)));
                var e = t.isUnion || t.isAsync;
                if (!e) {
                    var i = 1e4 * Math.random(),
                        n = "";
                    1e3 > i ? (n = "119000", e = !0) : i > 1e3 && 2e3 > i && (n = "117000"), t.exps = this.expBranch.mergeExps(t.exps, n)
                }
                var o = !1;
                t.paramObj = this.param.getParamObj(t);
                var s = this.param.getParamString(t.paramObj),
                    a = this.config.POS_URL + s;
                t.paramObj.dtm = this.config.HTML_POST, t.timestampWatcher.t2 = +new Date, o = this.reqLocalInfo(t), o ? window[this.config.LOADER_DEFINE_NAME](o) : this.sendJsonpRequest(a, e), this.setStatus(t.id, this.config.STATUS_REQUEST)
            },
            onMessageHandler: function(t) {
                var e = t.data;
                if ("string" == typeof e && window.JSON && window.JSON.parse) try {
                    e = JSON.parse(e)
                } catch (i) {}
                e && e.tuid && (e.placement && e.placement.update && e.queryid ? (this.updateInfo(e), e.tuid.indexOf("u") > -1 && e.noadx && parseInt(e.noadx, 10) && 3 !== parseInt(e.noadx, 10) && this.unionAdIsAvailable(e), e.placement.basic && 2 === e.placement.basic.flowType && this.fingerPrint.loadAntiBotFile(e.queryid)) : 1 === e.type && this.processCloseAdData(t, e))
            },
            processCloseAdData: function(t, e) {
                var i = t.origin || t.originalEvent.origin,
                    n = i && i.split("//")[1],
                    o = e.tuid,
                    r = e.msg,
                    s = this.getSlotInfoByRawId(o),
                    a = s && s.response,
                    d = a && a.placement && a.placement.basic && a.placement.basic.publisherDomain && a.placement.basic.publisherDomain.pos;
                !s || n !== this.config.POS_DOMAIN && n !== d || "click" !== r || this.closeAd(s)
            },
            updateInfo: function(t) {
                var e = {},
                    i = t.placement.update;
                this.storageSlotInfo = this.storage.getItem(t.tuid), this.storageSlotInfo && (e = this.lang.jsonToObj(this.storageSlotInfo),
                    this.storage.isAvailable && window.JSON && window.JSON.stringify && e && e.placement && e.placement.update && e.placement.update !== i && (t.adExpire = (new Date).getTime(), this.storage.setItem(t.tuid, JSON.stringify(t))))
            },
            reqLocalInfo: function(t) {
                try {
                    return this.browser.ie && this.browser.ie < 9 || !this.storage.isAvailable || t.isAutoAd ? !1 : (this.storageSlotInfo = this.storage.getItem(t.id), this.storageSlotInfo ? this.lang.jsonToObj(this.storageSlotInfo) : !1)
                } catch (e) {
                    var i = encodeURIComponent(e),
                        n = {
                            type: "elog",
                            pos: "localAdInfo",
                            id: t.id,
                            mes: i,
                            exps: this.config.EXP_ID
                        };
                    this.monitor.expLog(n)
                }
            },
            adInfoStorage: function(t) {
                try {
                    var e = t.response,
                        i = t.id;
                    i && !t.isPdbAd && t.isUnion && !t.isAutoAd && window.JSON && window.JSON.stringify && this.storage.isAvailable && !this.storage.getItem(t.id) && (e.adExpire = (new Date).getTime(), this.storage.setItem(i, JSON.stringify(e)))
                } catch (n) {}
            },
            createContainer: function(t) {
                var e = this.dom.g(t.containerId);
                return e ? void this.setStatus(t.id, this.config.STATUS_CREATE) : (t.isAsync ? "union" === t.productLine && (t.containerId = "cpro_" + t.slotId) : (document.write('<div id="' + t.containerId + '"></div>'), this.dom.g(t.containerId) || this.createBackupWrapper(t)), void this.setStatus(t.id, this.config.STATUS_CREATE))
            },
            createBackupWrapper: function(t) {
                try {
                    var e = document.getElementsByTagName("script"),
                        i = e[e.length - 1];
                    if (i) {
                        var n = i.parentNode;
                        if (n) {
                            var o = document.createElement("div");
                            return o.id = t.containerId, n.insertBefore(o, i), !0
                        }
                    }
                } catch (r) {}
                return !1
            },
            sendJsonpRequest: function(t, e) {
                if (e) {
                    var i = document.createElement("script");
                    if (!i) return;
                    i.type = "text/javascript", i.async = !0, i.src = t;
                    var n = document.getElementsByTagName("script")[0];
                    n && n.parentNode ? n.parentNode.insertBefore(i, n) : document.write('<script charset="utf-8" src="' + t + '"></script>')
                } else document.write('<script charset="utf-8" src="' + t + '"></script>')
            },
            adInfoIsAvailable: function(t) {
                var e = t.response,
                    i = e.pdb_deliv,
                    n = e.rtb_deliv,
                    o = e.order_deliv;
                return !(!t.isUnion && 7 === t.complementType && 0 === i.deliv_id && 0 === n.deliv_id && 0 === o.deliv_id)
            },
            unionAdIsAvailable: function(t) {
                var e = this.getSlotInfoByRawId(t.tuid);
                e && 7 === e.complementType && this.closeAd(e)
            },
            closeAd: function(t) {
                var e = this.dom.g(t.containerId);
                if (e) {
                    e.parentNode.removeChild(e);
                    var i = r.using("dup.business.viewWatch");
                    i.unregisetViewWatch(t), window.___baidu_union_._triggerClose({
                        container: e,
                        slotIndexId: t.id
                    })
                }
            },
            processSlotInfo: function(t) {
                var e = this.getSizeInfo(t),
                    i = t.response.placement,
                    n = i.basic;
                return e.cname = n.cname, e
            },
            getSizeInfo: function(t) {
                var e = t.response.placement,
                    i = t.response["extends"] || {},
                    n = this.dom.g(t.containerId),
                    o = e.container,
                    r = t.styleOpenApi,
                    s = o.width,
                    a = o.height,
                    d = r.cpro_w || r.rsi0 || 0,
                    c = r.cpro_h || r.rsi1 || 0,
                    l = o.sizeType;
                if (5 !== l && !t.isUnion && i && i.hasOwnProperty("sspw") && i.hasOwnProperty("ssph")) {
                    var h = parseInt(i.sspw || 0, 10),
                        u = parseInt(i.ssph || 0, 10),
                        p = parseInt(i.cbsz || 0, 10);
                    l = p > 0 ? p : l, s = h > 0 ? h : s, a = u > 0 ? u : a
                }
                if (r.scale) {
                    l = 2;
                    var m = r.scale.split(".") || [];
                    s = m[0], a = m[1]
                }(d || c) && (l = 1, s = d || this.style.getAvaiClientWidth(), a = c || a), ("-1" === t.pcwd || t.ftpc || t.styleOpenApi.cpro_ftpc) && (l = "-1" === t.pcwd && "-1" === t.pchd ? 8 : 5), r.sizeType && (l = r.sizeType && parseInt(r.sizeType, 10) || l, s = r.width && parseInt(r.width, 10) || s, a = r.height && parseInt(r.height, 10) || a), 2 !== r.apType && 3 !== r.apType || (o.location = r.apType);
                var f = 0;
                switch (l) {
                    case 1:
                        break;
                    case 2:
                        s = t.pcwd || s, a = t.pchd || a, s && a && (f = a / s), s = this.style.getAvaiClientWidth(), a = Math.ceil(s * f);
                        break;
                    case 3:
                        s = this.style.getAvaiClientWidth();
                        break;
                    case 5:
                        s && a && (f = a / s), s = this.style.getParentWidth(n.parentElement), a = Math.ceil(s * f);
                        break;
                    case 6:
                        s = this.style.getParentWidth(n.parentElement);
                        break;
                    case 7:
                        a = this.style.getParentHeight(n.parentElement);
                        break;
                    case 8:
                        s = this.style.getParentWidth(n.parentElement), a = this.style.getParentHeight(n.parentElement)
                }
                return t.width = s, t.height = a, {
                    width: s,
                    height: a,
                    sizeType: l
                }
            }
        }), r.define({
            name: "clbDelivery",
            namespace: "dup.business.delivery",
            deps: {
                slot: "dup.business.slot",
                config: "dup.common.config",
                origentation: "dup.business.origentation",
                data: "dup.common.utility.data"
            },
            clbSlotArr: {
                BAIDU_CLB_fillSlot: !0,
                BAIDU_CLB_singleFillSlot: !0,
                BAIDU_CLB_fillSlotWithSize: !0,
                BAIDU_CLB_fillSlotAsync: !0
            },
            launch: function() {
                var t;
                try {
                    var e = window.BAIDU_CLB_SLOT_ID;
                    window.BAIDU_CLB_SLOT_ID = null, e && (t = this.slot.createSlot({
                        slotId: e,
                        productLine: "clb",
                        isAsync: !1
                    }), this.slot.addSlot(t), this.slot.process());
                    for (var i in this.clbSlotArr) this.data.defineOnce(i, r.proxy(this, this.getClbFillSlot));
                    this.updateApi()
                } catch (n) {}
            },
            reSet: function() {},
            getClbFillSlot: function(t, e) {
                var i;
                t && (i = this.slot.createSlot({
                    slotId: t,
                    productLine: "clb",
                    isAsync: !!e
                }), i.containerId = e || i.containerId, this.slot.addSlot(i), this.slot.process())
            },
            updateApi: function() {
                try {
                    this.data.defineOnce("BAIDU_CLB_prepareMoveSlot", r.proxy(this, this.prepareMove)), this.data.defineOnce("BAIDU_CLB_setConfig", r.proxy(this.data, this.data.putConfig)), this.data.defineOnce("BAIDU_CLB_addOrientation", r.proxy(this.origentation, this.origentation.addOrientation)), this.data.defineOnce("BAIDU_CLB_addSlot", r.proxy(this, this.reSet)), this.data.defineOnce("BAIDU_CLB_enableAllSlots", r.proxy(this, this.reSet)), this.data.defineOnce("BAIDU_CLB_preloadSlots", r.proxy(this, this.reSet)), this.data.defineOnce("BAIDU_DUP_addSlotStatusCallback", r.proxy(this, this.reSet))
                } catch (t) {}
            },
            prepareMove: function(t) {
                try {
                    for (var e = 0, i = t + "_" + e; this.slot.getSlotInfo(i) && 0 !== this.slot.getSlotInfo(i)[0];) {
                        var n = this.slot.getSlotInfo(i);
                        this.slot.clearStatus(n, this.config.STATUS_FINISH), i = t + "_" + ++e
                    }
                } catch (o) {}
            }
        }), r.define({
            name: "unionDelivery",
            namespace: "dup.business.delivery",
            deps: {
                slot: "dup.business.slot"
            },
            launch: function() {
                var t, e = window.cpro_id;
                window.cpro_id = null, e && (t = this.slot.createSlot({
                    slotId: e,
                    productLine: "union",
                    isAsync: !1
                }), this.slot.addSlot(t));
                var i = window.cproArray;
                if (window.cproArray = null, i)
                    for (var n = 0, o = i.length; o > n; n++) t = this.slot.createSlot({
                        slotId: i[n].id,
                        productLine: "union",
                        isAsync: !0
                    }), this.slot.addSlot(t);
                var r = window.cpro_mobile_slot;
                if (window.cpro_mobile_slot = null, r)
                    for (var n = 0, o = r.length; o > n; n++) {
                        var s = r[n];
                        t = this.slot.createSlot({
                            slotId: s.id,
                            productLine: "union",
                            isAsync: !0
                        }), t.styleOpenApi = t.styleOpenApi || {};
                        for (var a in s) a && s[a] && s.hasOwnProperty(a) && (t.styleOpenApi[a] = s[a]);
                        this.slot.addSlot(t)
                    }
                this.slot.process()
            }
        }), r.define({
            name: "dupDelivery",
            namespace: "dup.business.delivery",
            deps: {
                slot: "dup.business.slot"
            },
            launch: function() {
                this.delieveryObjArray = this.delieveryObjArray || [], window.BAIDU_DUP = window.BAIDU_DUP || [], window.BAIDU_DUP && window.BAIDU_DUP instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.BAIDU_DUP), window.BAIDU_DUP = []), this.updateApi(), this.process()
            },
            updateApi: function() {
                window.BAIDU_DUP = this, window.BAIDU_DUP.load = !0
            },
            process: function() {
                for (var t, e = 0, i = this.delieveryObjArray.length; i > e; e++) {
                    var n = this.delieveryObjArray[e];
                    if (n instanceof Array && n.length >= 2) {
                        var o = n[0],
                            r = n[1],
                            s = n[2];
                        if ("fill" !== o && "fillAsync" !== o || !r) continue;
                        t = this.slot.createSlot({
                            slotId: r,
                            productLine: "dup",
                            isAsync: "fillAsync" === o
                        }), t.containerId = s || t.containerId, this.slot.addSlot(t)
                    }
                }
                this.delieveryObjArray = [], this.slot.process()
            },
            push: function(t) {
                this.delieveryObjArray = this.delieveryObjArray && [], this.delieveryObjArray.push(t), this.process()
            }
        }), r.define({
            name: "standardDelivery",
            namespace: "dup.business.delivery",
            deps: {
                slot: "dup.business.slot",
                param: "dup.business.param",
                data: "dup.common.utility.data",
                additionalParam: "dup.business.parameter.additionalParam",
                origentation: "dup.business.origentation",
                lang: "dup.common.utility.lang"
            },
            launch: function() {
                this.delieveryObjArray = this.delieveryObjArray || [], window.slotbydup = window.slotbydup || [], window.slotbydup && window.slotbydup instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.slotbydup), window.slotbydup = []), this.updateApi(), this.process()
            },
            process: function() {
                for (var t, e = 0, i = this.delieveryObjArray.length; i > e; e++) {
                    var n = this.delieveryObjArray[e];
                    if (n.hasOwnProperty("id")) {
                        var o = n.hasOwnProperty("isAsync") && n.isAsync || n.hasOwnProperty("async") && n.async,
                            r = n.hasOwnProperty("coa") && n.coa;
                        t = this.slot.createSlot({
                            slotId: n.id,
                            productLine: "adcodex",
                            isAsync: o,
                            coa: r
                        }), this.additionalParam.paramCheck(t, n), t.containerId = n.container || t.containerId, t.display = n.display, t.ftpc = n.ftpc || !1, t.size = n.size || "", t.pcwd = n.pcwd || "", t.pchd = n.pchd || "", t.exps = n.exps || "", t.isAutoAd = n.isAutoAd || !1, this.slot.addSlot(t)
                    } else this.apiProcess(n)
                }
                this.delieveryObjArray = [], this.slot.process()
            },
            updateApi: function() {
                window.slotbydup = this, window.slotbydup.load = !0
            },
            push: function(t) {
                this.delieveryObjArray = this.delieveryObjArray && [], this.delieveryObjArray.push(t), this.process()
            },
            apiProcess: function(t) {
                var e = t.addOrientation;
                e && "array" === this.lang.getType(e) && this.origentation.addOrientation.apply(this.origentation, e)
            }
        }), r.define({
            name: "pdbFrame",
            namespace: "dup.business",
            deps: {
                config: "dup.common.config",
                slot: "dup.business.slot",
                material: "dup.business.material",
                data: "dup.common.utility.data",
                log: "dup.common.utility.log",
                dom: "dup.common.utility.dom",
                lang: "dup.common.utility.lang"
            },
            isNeededNode: function(t, e) {
                return t.nodeName && t.nodeName.toUpperCase() === e.toUpperCase()
            },
            evalScript: function(t, e) {
                try {
                    var i = document.createElement("script");
                    i.type = "text/javascript", t.src ? i.src = t.src : i.text = t.text || t.textContent || t.innerHTML || "", e.insertBefore(i, e.firstChild)
                } catch (n) {
                    this.log.sendEclickSeLog(this.config.DUP_ERROR_TYPE, {
                        error: "createscripterror",
                        status: "renderFail"
                    })
                }
            },
            evalHTML: function(t, e) {
                if (!t) return !1;
                t.innerHTML = '<span style="display: none">ie</span>' + e;
                for (var i = t.childNodes, n = [], o = 0; i[o]; o++) !this.isNeededNode(i[o], "script") || i[o].type && "text/javascript" !== i[o].type.toLowerCase() || n.push(i[o]);
                n.reverse();
                for (var r = 0, s = n.length; s > r; r++) this.evalScript(n[r].parentNode.removeChild(n[r]), t);
                return !0
            },
            renderFrame: function(t, e) {
                var i = this.slot.getSlotInfo(t);
                if (i && !this.slot.checkStatus(i, this.config.STATUS_FINISH)) {
                    var n = i.response.pdb_deliv.deliv_des;
                    n = n._html;
                    var o = this.getFrameUrl();
                    if (this.requireDomainPolicy() && e.getAttribute("src", 2) !== o) return void(e.src = o);
                    if (n && "url" === n.type) return e.src = n.content, void this.slot.setStatus(i.id, this.config.STATUS_FINISH);
                    try {
                        this.slot.setStatus(i.id, this.config.STATUS_FINISH);
                        var r = this.material.formatMaterial(n, i);
                        r.indexOf("<body>") < 0 && (r = "<!DOCTYPE html><body>" + r);
                        var s = e.contentWindow.document;
                        s.open("text/html", "replace"), s.write(r), s.body && (s.body.style.backgroundColor = "transparent")
                    } catch (a) {}
                }
            },
            requireDomainPolicy: function() {
                function t(t) {
                    try {
                        return !t.contentWindow.document
                    } catch (e) {
                        return !0
                    }
                }
                var e = document.createElement("iframe"),
                    i = !1;
                return document.body ? (e.src = "about:blank", document.body.insertBefore(e, document.body.firstChild), i = t(e), document.body.removeChild(e), this.requireDomainPolicy = function() {
                    return i
                }, i) : i
            },
            requireBlankPolicy: function() {
                var t = navigator.userAgent,
                    e = !(!t || !t.match(/iphone.*micromessenger/i));
                return this.requireBlankPolicy = function() {
                    return e
                }, e
            },
            getFrameUrl: function() {
                return this.requireDomainPolicy() ? this.data.getConfig("domainPolicyFileUrl") || "/domain-policy.htm" : this.requireBlankPolicy() ? this.data.getConfig("blankPolicyFileUrl") || "/blank-policy.htm" : "about:blank"
            },
            renderRichMaterial: function(t) {
                var e = t.response,
                    i = e && e.pdb_deliv && e.pdb_deliv.deliv_des,
                    n = i && i._html,
                    o = t.isNeedCacheRequest;
                if (!n || "rich" !== n.type || o) return !1;
                var r = this.dom.g(t.containerId),
                    s = n.content,
                    a = t.isAsync,
                    d = t.productLine,
                    c = !1;
                if (a)
                    if (!a || "clb" !== d && "dup" !== d) c = this.evalHTML(r, s);
                    else {
                        var l = this.getFrameHTML(t);
                        r.innerHTML = l, c = !0
                    }
                else document.write(s), this.slot.setStatus(t.id, this.config.STATUS_FINISH), c = !0;
                return c
            },
            getFrameHTML: function(t) {
                var e = this.getFrameData(t);
                return this.renderFrameHTML(e)
            },
            getFrameData: function(t, e) {
                var i, n = t.containerInfo,
                    o = t.width || n.width,
                    s = t.height || n.height,
                    a = this.getFrameUrl(),
                    d = "iframe" + t.id;
                if (e) i = r.proxy(this, function(t, e) {
                    this.renderFrame(t.id, e)
                });
                else {
                    var c = this.config.DUP_PREFIX + "renderFrame";
                    this.data.defineOnce(c, r.proxy(this, this.renderFrame)), i = 'onload="' + c + "('" + t.id + "', this);\""
                }
                var l = {};
                return l.iframeId = d, l.srcAttriName = "src", l.onloadDefine = i, l.iframeWidth = "" + o, l.iframeHeight = "" + s, l.url = a, l
            },
            renderFrameHTML: function(t) {
                var e = ["<iframe", ' id="{iframeId}"', ' name="{iframeId}"', " {onloadDefine}", ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0;vertical-align:bottom;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"', ' allowtransparency="true">', "</iframe>"].join("");
                return this.lang.template(e, t)
            },
            getFrameElement: function(t) {
                var e = this.getFrameData(t, !0);
                return this.createFrameElement(t, e)
            },
            createFrameElement: function(t, e) {
                var i, n = {
                        id: e.iframeId,
                        name: e.iframeId,
                        width: e.iframeWidth,
                        height: e.iframeHeight,
                        align: "center, center",
                        vspace: "0",
                        hspace: "0",
                        marginWidth: "0",
                        marginHeight: "0",
                        scrolling: "no",
                        frameBorder: "0",
                        allowTransparency: "true",
                        src: e.url
                    },
                    o = {
                        border: "0",
                        verticalAlign: "bottom",
                        margin: "0",
                        width: e.iframeWidth + "px",
                        height: e.iframeHeight + "px"
                    },
                    r = document.createElement("iframe");
                for (i in n) r.setAttribute(i, n[i]);
                for (i in o) r.style[i] = o[i];
                var s = e.onloadDefine;
                return this.dom.bind(r, "load", function() {
                    s(t, r)
                }), r
            }
        }), r.define({
            name: "viewWatch",
            namespace: "dup.business",
            deps: {
                dom: "dup.common.utility.dom",
                lang: "dup.common.utility.lang",
                style: "dup.common.utility.style",
                browser: "dup.common.utility.browser",
                log: "dup.common.utility.log",
                slot: "dup.business.slot"
            },
            analysisUrl: "//eclick.baidu.com/a.js",
            maxTime: 72e5,
            STATUS: {
                WAIT: 0,
                LOAD: 1,
                RUN: 2,
                UNLOAD: 3
            },
            opacity: {},
            clientParam: {},
            focusSwitch: !0,
            watchingList: null,
            intervalId: null,
            intervalTimeSpan: 500,
            isEventInited: !1,
            $viewWatch: function() {
                this.winFocused = !0, this.win = window, this.pageStayTime = null == this.pageStayTime ? 0 : this.pageStayTime, this.intervalStatus = this.STATUS.WAIT
            },
            viewWatch: function() {},
            regisetViewWatch: function(t) {
                this.isEventInited || (this.initializeEvent(), this.isEventInited = !0), this.watchingList = this.watchingList || [];
                var e = this.dom.g(t.containerId);
                if (e) {
                    var i = t.paramObj,
                        n = t.width,
                        o = t.height,
                        r = "",
                        s = t.containerInfo;
                    n = s.width, o = s.height, r = t.response.queryid;
                    var a = new Date,
                        d = "" + t.slotId,
                        c = {
                            uid: t.id,
                            slotId: d,
                            domId: t.containerId,
                            jk: r,
                            word: i.ltu,
                            iframeStatus: i.dis,
                            aw: n,
                            ah: o,
                            viewContext: {
                                opacity: 1,
                                pageStayTime: 0,
                                pageStayTimeStamp: a,
                                inViewTime: 0,
                                inViewTimeStamp: a,
                                currViewStatus: !1,
                                focusTime: 0,
                                adViewTime: 0,
                                currAdViewStatus: !1,
                                adViewTimeStamp: a
                            }
                        };
                    if (window.postMessage && c.slotId && c.slotId.indexOf("u") > -1) {
                        c.sendMessage = function() {
                            if (this.watchIframeWindow && this.watchIframeLoaded && this.viewContext && this.viewContext.lastAdViewStatus !== this.viewContext.currAdViewStatus) try {
                                var t = this.analysisUrl && this.analysisUrl.split("?"),
                                    e = t ? t[1] : "";
                                this.watchIframeWindow.postMessage(e, this.targetOrigin)
                            } catch (i) {}
                        };
                        var l = e.getElementsByTagName("iframe");
                        if (l && l.length) {
                            var h = l[0];
                            c.watchIframe = h, c.targetOrigin = h.getAttribute("src") || "*";
                            try {
                                c.watchIframeWindow = h.contentWindow
                            } catch (u) {
                                c.watchIframeWindow = ""
                            }
                            c.viewContext.lastAdViewStatus = !1, c.viewContext.lastViewStatus = !1, this.dom.bind(c.watchIframe, "load", function() {
                                c.watchIframeLoaded = !0, c.viewContext.lastAdViewStatus = !c.viewContext.currAdViewStatus, c.sendMessage()
                            })
                        }
                    }
                    this.calculateClientParam(c, e), this.watchingList.push(c)
                }
            },
            unregisetViewWatch: function(t) {
                if (this.watchingList)
                    for (var e = t.containerId, i = 0; i < this.watchingList.length; i++) {
                        var n = this.watchingList[i];
                        if (n.domId == e) return void this.watchingList.splice(i, 1)
                    }
            },
            buildAnalysisUrl: function(t, e) {
                if (t && e) {
                    var i = t + "?",
                        n = e.viewContext;
                    n.inViewTime > this.maxTime && (n.inViewTime = this.maxTime), n.adViewTime > this.maxTime && (n.adViewTime = this.maxTime), n.pageStayTime >= this.maxTime && (n.pageStayTime = this.maxTime);
                    var o = [];
                    return o.push("tu=" + e.slotId), o.push("op=" + n.opacity), o.push("jk=" + e.jk), o.push("word=" + e.word), o.push("if=" + e.iframeStatus), o.push("aw=" + e.aw), o.push("ah=" + e.ah), o.push("pt=" + n.pageStayTime), o.push("it=" + n.inViewTime), o.push("vt=" + n.adViewTime), o.push("csp=" + e.desktopResolution), o.push("bcl=" + e.browserRegion), o.push("pof=" + e.pageRegion), o.push("top=" + e.top), o.push("left=" + e.left), o.push("uid=" + e.uid), o.push("iw=" + n.currAdViewStatus), i + o.join("&")
                }
            },
            initializeEvent: function() {
                this.windowOnLoadHandler(), this.dom.ready(r.proxy(this, this.windowOnLoadDelay), 2e3), this.browser.platform && (this.browser.platform.indexOf("Android") > -1 || this.browser.platform.indexOf("Phone") > -1 || this.browser.platform.indexOf("iPod") > -1) || this.dom.bind(this.win, "beforeunload", r.proxy(this, this.windowOnUnloadHandler))
            },
            calculateClientParam: function(t, e) {
                var i = this.style.getPosition(e);
                t.left = i.left || 0, t.top = i.top || 0;
                var n = window.screen.availWidth,
                    o = window.screen.availHeight;
                n > 1e4 && (n = 0), o > 1e4 && (o = 0), t.desktopResolution = n + "," + o, t.browserRegion = this.style.getClientWidth(window) + "," + this.style.getClientHeight(window), t.pageRegion = this.style.getScrollWidth(window) + "," + this.style.getScrollHeight(window)
            },
            updateViewStatus: function(t, e) {
                var i, n, o, r = e.isInView,
                    s = e.isAdView,
                    a = new Date;
                return i = n = o = this.intervalTimeSpan, t.lastViewStatus = t.currViewStatus, t.lastAdViewStatus = t.currAdViewStatus, this.intervalStatus === this.STATUS.LOAD && (this.intervalStatus = this.STATUS.RUN, i = n = 0, o = n = 0), t.currViewStatus ? (this.intervalStatus === this.STATUS.LOAD && (i = parseInt(a.getTime() - t.inViewTimeStamp.getTime(), 10), 0 > i ? i = 0 : i > this.intervalTimeSpan && (i = this.intervalTimeSpan)), t.inViewTime += i, t.inViewTimeStamp = a) : r && (t.inViewTimeStamp = a), t.currViewStatus = r, t.currAdViewStatus ? (this.intervalStatus === this.STATUS.UNLOAD && (o = parseInt(a.getTime() - t.adViewTimeStamp.getTime(), 10), 0 > o ? o = 0 : o > this.intervalTimeSpan && (o = this.intervalTimeSpan)), t.adViewTime += o, t.adViewTimeStamp = a) : s && (t.adViewTimeStamp = a), t.currAdViewStatus = s, t.pageStayTime = t.pageStayTime || 0, this.pageStayTime = this.pageStayTime || 0, this.intervalStatus === this.STATUS.UNLOAD && (this.pageTimeSpan = parseInt(a.getTime() - t.pageStayTimeStamp.getTime(), 10), 0 > n ? n = 0 : n > this.intervalTimeSpan && (n = this.intervalTimeSpan)), t.pageStayTime += n, this.pageStayTime += n, this.winFocused && (t.focusTime += n), t.pageStayTimeStamp = a, t.opacity = e.opacity, t
            },
            computeViewStatus: function(t) {
                var e = t.domId,
                    i = this.dom.g(e);
                if (!i) return {
                    isInView: !1,
                    isAdView: !1,
                    opacity: 1
                };
                var n = !1,
                    o = !1,
                    r = 1;
                if (this.winFocused) try {
                    r = this.getOpacity(t);
                    var s = this.isWatchDomVisible(i);
                    if (s) {
                        var a = this.style.getClientWidth(this.win),
                            d = this.style.getClientHeight(this.win),
                            c = this.getPosition(i),
                            l = this.style.getOuterWidth(i),
                            h = this.style.getOuterHeight(i);
                        n = c.top >= 0 && c.bottom <= d && c.left >= 0 && c.left <= a;
                        var u = c.top > 0 ? c.top : 0,
                            p = c.bottom > d ? d : c.bottom,
                            m = c.left > 0 ? c.left : 0,
                            f = c.right > a ? a : c.right,
                            g = l * h;
                        if (p > u && f > m) {
                            var y = (p - u) * (f - m);
                            o = y > .5 * g
                        }
                    } else n = !1, o = !1
                } catch (v) {}
                return {
                    isInView: n,
                    isAdView: o,
                    opacity: r
                }
            },
            isWatchDomVisible: function(t) {
                return t ? this.style.getOpacity(t) >= 50 && this.style.getVisibility(t) : !1
            },
            getOpacity: function(t) {
                var e = t.domId;
                this.opacity[e] = this.opacity[e] || 0;
                var i = this.style.getOpacity(e);
                return 100 === i && (this.opacity[e] |= 1), 100 > i && i > 0 && (this.opacity[e] |= 2), 0 === i && (this.opacity[e] |= 4), this.opacity[e]
            },
            getPosition: function(t) {
                var e = this.style.getPositionCore(t),
                    i = this.style.getScrollLeft(window),
                    n = this.style.getScrollTop(window),
                    o = this.style.getOuterWidth(t, !1),
                    r = this.style.getOuterHeight(t, !1);
                return {
                    top: e.top - n,
                    bottom: e.top - n + r,
                    left: e.left - i,
                    right: e.left - i + o,
                    topAbs: e.top,
                    bottomAbs: e.top + r,
                    leftAbs: e.left,
                    rightAbs: e.left + o
                }
            },
            viewableCompute: function() {
                if (this.watchingList)
                    for (i = 0, count = this.watchingList.length; i < count; i++) {
                        var t = this.watchingList[i],
                            e = this.computeViewStatus(t);
                        t.viewContext = this.updateViewStatus(t.viewContext, e), t.analysisUrl = this.buildAnalysisUrl(this.analysisUrl, t), t.sendMessage && t.sendMessage()
                    }
            },
            viewOnChange: function() {
                this.viewableCompute(), this.pageStayTime >= this.maxTime && this.windowOnUnloadHandler(!1)
            },
            windowOnLoadHandler: function(t) {
                this.intervalStatus = this.STATUS.LOAD, this.registerFocusEvent(this.win), (!this.browser.ie || this.browser.ie && this.browser.ie > 6) && this.viewOnChange(), this.intervalId = setInterval(r.proxy(this, this.viewOnChange), this.intervalTimeSpan)
            },
            windowOnLoadDelay: function(t) {
                var e, i, n, o, r;
                for (e = 0, i = this.watchingList.length; i > e; e++) n = this.watchingList[e], n && (r = n.domId, r && (o = this.win.document.getElementById(r)), o && (n.clientParam = n.clientParam || {}, this.calculateClientParam(n, o)))
            },
            windowOnUnloadHandler: function(t) {
                try {
                    if (clearInterval(this.intervalId), this.intervalStatus !== this.STATUS.RUN) return void(this.intervalStatus = this.STATUS.UNLOAD);
                    this.intervalStatus = this.STATUS.UNLOAD, this.viewableCompute();
                    for (var e = 0, i = this.watchingList.length; i > e; e++) {
                        var n = this.watchingList[e];
                        n && n.analysisUrl && !n.isSended && (n.isSended = !0, 0 === e && (n.analysisUrl += "&total=" + this.watchingList.length), this.log.sendLog({
                            url: n.analysisUrl
                        }))
                    }
                    if (t) {
                        var o, r = 200,
                            s = (new Date).getTime();
                        if (this.browser.ie)
                            for (o = s + r; o > s;) s = (new Date).getTime();
                        else {
                            for (var i = 1e5, e = 0; i > e; e++);
                            o = (new Date).getTime(), i = 1e5 * r / (o - s), i = i > 1e7 ? 1e7 : i;
                            for (var e = 0; i > e; e++);
                        }
                    }
                } catch (a) {}
            },
            registerFocusEvent: function(t) {
                var t = t || this.win;
                this.winFocused = !0, this.browser.ie ? (this.dom.bind(t, "focusin", r.proxy(this, this.allDomOnFocusHandler)), this.dom.bind(t, "focusout", r.proxy(this, this.allDomOnBlurHandler))) : (this.dom.bind(t, "focus", r.proxy(this, this.allDomOnFocusHandler)), this.dom.bind(t, "blur", r.proxy(this, this.allDomOnBlurHandler)))
            },
            allDomOnFocusHandler: function(t) {
                this.winFocused = !0
            },
            allDomOnBlurHandler: function(t) {
                this.winFocused = !1
            }
        }), r.define({
            name: "expand",
            namespace: "dup.ui.painter",
            deps: {
                config: "dup.common.config",
                dom: "dup.common.utility.dom",
                style: "dup.common.utility.style",
                event: "dup.common.utility.event",
                slot: "dup.business.slot"
            },
            validate: function(t) {
                return !0
            },
            sendMessage: function(t, e) {
                var i = this.slot.getSlotInfo(t),
                    n = this.dom.g(i.containerId);
                if (n) {
                    var o = n.getElementsByTagName("iframe")[0];
                    e = JSON.stringify(e), o.contentWindow.postMessage(e, "*")
                }
            },
            getComputedWidth: function(t) {
                return window.getComputedStyle ? window.getComputedStyle(t).width : t.currentStyle.width
            },
            init: function() {
                function t(t) {
                    if ("string" != typeof i) return !1;
                    var i = JSON.parse(t.data);
                    if (!i.title || "baidudup" != i.title) return !1;
                    if ("invokeMethod" === i.type) switch (i.method) {
                        case "expand":
                            e.expandAd(i.parameters[0]);
                            break;
                        case "close":
                            e.collapseAd(i.parameters[0])
                    }
                }
                var e = this;
                (window.addEventListener || window.attachEvent) && JSON && JSON.parse && this.event.bind(window, "message", t), this.event.bind(window, "scroll", function() {
                    e.adjustPosWhenViewportChanged()
                }), this.event.bind(window, "resize", function() {
                    e.adjustPosWhenViewportChanged()
                })
            },
            adjustPosWhenViewportChanged: function() {
                var t = this.scrollObserver;
                for (var e in t)
                    for (var i in t[e]) {
                        var n = t[e][i];
                        if (!n.isExpand) return;
                        var o = n.origin,
                            r = o.getElementsByTagName("iframe")[0],
                            s = (n.targetWidth, n.targetHeight, n.originWidth);
                        n.originHeight;
                        switch (e) {
                            case "up":
                                var a = parseInt(this.getComputedWidth(o), 10);
                                r.style.left = 0;
                                break;
                            case "down":
                                var a = parseInt(this.getComputedWidth(o), 10);
                                r.style.left = 0;
                                break;
                            case "left":
                                var a = parseInt(this.getComputedWidth(o));
                                r.style.right = a - s + "px";
                                break;
                            case "right":
                                var a = parseInt(this.getComputedWidth(o));
                                r.style.left = 0
                        }
                    }
            },
            $expand: function() {
                this.observerObjs = [], this.expandStatus = {}, this.timers = {}, this.hasInit = !1, this.maxExpandTime = 5e3, this.canFixed = this.style.canFixed(), this.scrollObserver = {
                    up: {},
                    down: {},
                    left: {},
                    right: {}
                }
            },
            registerScrollSubject: function(t, e, i, n, o, r, s) {
                if (!this.scrollObserver[t][e]) {
                    var a = this.scrollObserver[t][e] = {};
                    a.isExpand = !0, a.origin = i, a.originWidth = n, a.originHeight = o, a.targetWidth = r, a.targetHeight = s
                }
            },
            expand2Up: function(t, e, i, n, o, r) {
                this.registerScrollSubject("up", t, e, i, n, o, r);
                var s = e.getElementsByTagName("iframe")[0];
                s.style.bottom = 0, s.style.left = 0
            },
            expand2Down: function(t, e, i, n, o, r) {
                this.registerScrollSubject("down", t, e, i, n, o, r);
                var s = e.getElementsByTagName("iframe")[0];
                s.style.top = 0, s.style.left = 0
            },
            expand2Left: function(t, e, i, n, o, r) {
                this.registerScrollSubject("left", t, e, i, n, o, r);
                var s = e.getElementsByTagName("iframe")[0],
                    a = parseInt(this.getComputedWidth(e));
                s.style.bottom = 0, s.style.right = a - i + "px"
            },
            expand2Right: function(t, e, i, n, o, r) {
                this.registerScrollSubject("right", t, e, i, n, o, r);
                var s = e.getElementsByTagName("iframe")[0];
                s.style.bottom = 0, s.style.left = 0
            },
            expandAd: function(t) {
                if (!this.expandStatus[t]) {
                    this.expandStatus[t] = !0;
                    var e = this.slot.getSlotInfoByRawId(t),
                        i = e.containerInfo,
                        n = i.width,
                        o = i.height,
                        r = i.slide,
                        s = r.slideWidth,
                        a = r.slideHeight,
                        d = 1e3 * parseInt(r.extendTime, 10),
                        c = parseInt(r.slideMode, 10),
                        l = parseInt(r.direction, 10),
                        h = this.dom.g(e.containerId),
                        u = h.getElementsByTagName("iframe")[0];
                    if (1 === l || 2 === l ? (u.setAttribute("height", a), u.style.height = a + "px") : 3 !== l && 4 !== l || (u.setAttribute("width", s), u.style.width = s + "px"), 2 == c && 2 == l || 2 == c && 4 == l) switch (l) {
                        case 2:
                            u.setAttribute("height", a), u.style.height = a + "px";
                            break;
                        case 4:
                            u.setAttribute("width", s), u.style.width = s + "px"
                    } else switch (h.style.position = "relative", u.style.position = "absolute", h.style.height = o + "px", l) {
                        case 1:
                            this.expand2Up(t, h, n, o, s, a);
                            break;
                        case 2:
                            this.expand2Down(t, h, n, o, s, a);
                            break;
                        case 3:
                            this.expand2Left(t, h, n, o, s, a);
                            break;
                        case 4:
                            this.expand2Right(t, h, n, o, s, a)
                    }
                    var p = this;
                    this.timers[t] = setTimeout(function() {
                        p.expandStatus[t] && p.collapseAd(t)
                    }, Math.min(d))
                }
            },
            collapseAd: function(t) {
                if (this.expandStatus[t]) {
                    this.expandStatus[t] = !1, clearTimeout(this.timers[t]);
                    var e = this.slot.getSlotInfoByRawId(t),
                        i = e.containerInfo.width,
                        n = e.containerInfo.height,
                        o = this.dom.g(e.containerId),
                        r = o.getElementsByTagName("iframe")[0];
                    o.style.position = "", o.style.width = "", o.style.height = "", o.style.top = "", o.style.left = "", r.style.position = "", r.style.display = "", r.style.top = "", r.style.left = "", r.style.right = "", r.style.width = "", r.style.height = "", r.setAttribute("height", n), r.setAttribute("width", i);
                    for (var s in this.scrollObserver)
                        for (var a in this.scrollObserver[s]) a === t && (this.scrollObserver[s][a].isExpand = !1)
                }
            },
            observer: function(t) {
                var t = this.slot.getSlotInfoByRawId(t.slotId),
                    e = this.dom.g(t.containerId);
                e.style.textAlign = "left", this.hasInit || (this.hasInit = !0, this.init())
            },
            fire: function(t, e) {
                var i, n = function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    o = this.slot.getSlotInfoByRawId(e),
                    r = o.containerInfo.slide;
                r && (i = r.trigger);
                var s = n(i) ? i[0] : i ? i : 0,
                    a = ["", "BEFORE_PAGELOAD", "AFTER_PAGECLOSE", "PAGE_PERCENT", "mouseover", "click", "adloaded", "SLIP"];
                a[s] === t && this.sendMessage(e, {
                    title: "baidudup",
                    type: "eventHappen",
                    parameters: [t]
                })
            }
        }), r.define({
            name: "insideText",
            namespace: "dup.ui.painter.mobile",
            deps: {
                config: "dup.common.config",
                lang: "dup.common.utility.lang",
                dom: "dup.common.utility.dom",
                slot: "dup.business.slot",
                param: "dup.business.param",
                data: "dup.common.utility.data",
                viewWatch: "dup.business.viewWatch",
                browser: "dup.common.utility.browser",
                monitor: "dup.business.monitor"
            },
            hashBox: {},
            itemIndex: 0,
            SET_DATA_JSONP: "BAIDU_DUP_MOBILE_INSIDE_TEXT",
            MAX_PAGE_AD_NUMBER: 40,
            MAX_KEYWORD_AD_NUMBER: 3,
            adCount: 0,
            wordCount: {},
            render: function(t) {
                this.slot.setStatus(t.id, this.config.STATUS_RENDERED), this.monitor.sendLog(t);
                var e = this.dom.g(t.containerId);
                if (e) {
                    this.data.defineOnce(this.SET_DATA_JSONP, r.proxy(this, this.compareTextNode));
                    var i = this.getBody(e);
                    i && ("complete" === document.readyState ? (this.insertJsonpScript(t, e), this.findTextNode(i)) : this.dom.bind(document, "readystatechange", r.proxy(this, function() {
                        "complete" === document.readyState && (this.insertJsonpScript(t, e), this.findTextNode(i))
                    })), this.viewWatch.regisetViewWatch(t), this.slot.setStatus(t.id, this.config.STATUS_FINISH))
                }
            },
            getBody: function(t) {
                var e = t.parentNode;
                return e.tagName && "body" === e.tagName.toLowerCase() ? e : this.getBody(e)
            },
            insertJsonpScript: function(t, e) {
                t.paramObj.dcb = this.SET_DATA_JSONP, t.paramObj.dtm = this.config.STATIC_JSONP, t.paramObj.cec = "utf-8";
                var i = this.param.getPmpRequestUrl(t),
                    n = document.createElement("script");
                n.src = i, n.charset = t.paramObj.cec, e.appendChild(n)
            },
            findTextNode: function(t) {
                for (var e = t.childNodes, i = 0; i < e.length; i++) {
                    var n = e[i];
                    if (this.dom.isValidTextElement(n)) switch (n.nodeType) {
                        case 3:
                            var o;
                            this.browser.ie < 9 && n.nodeValue && (o = n.nodeValue), n.textContent && (o = n.textContent), o && this.lang.trim(o) && o.length > 0 && this.addHash(n);
                            break;
                        default:
                            this.findTextNode(n)
                    }
                }
            },
            addHash: function(t) {
                var e = t.parentNode;
                e.innerHTML && (this.hashBox["item_" + this.itemIndex] = e, this.itemIndex++)
            },
            compareTextNode: function() {
                var t = arguments[0] && arguments[0].slots[0] && arguments[0].slots[0].ads[0];
                if (t) {
                    var e = t.data && t.data.meta;
                    if (e && 0 !== e.length)
                        for (var i in this.hashBox) {
                            var n = this.hashBox[i];
                            if (document.contains(n)) {
                                for (var o = n.innerHTML, r = 0; r < e.length; r++) o = this.replaceKeyword(e[r], o);
                                if (n.innerHTML = o, this.adCount === this.MAX_PAGE_AD_NUMBER) break
                            }
                        }
                }
            },
            replaceKeyword: function(t, e) {
                if (!t || !e) return e;
                var i = t.title,
                    n = new RegExp(i, "i");
                if (i && i.length > 0 && n.test(e) && this.isNotNextToAElement(i, e) && this.isNotInElement(i, e)) {
                    var o = t.curl || "",
                        r = '<a href="' + o + '" target="_blank" style="color:#38f;text-decoration:none">' + i + "</a>";
                    if (this.wordCount[i] || (this.wordCount[i] = 0), this.adCount < this.MAX_PAGE_AD_NUMBER && this.wordCount[i] < this.MAX_KEYWORD_AD_NUMBER) return this.adCount++, this.wordCount[i]++, e.replace(n, r)
                }
                return e
            },
            isNotNextToAElement: function(t, e) {
                var i = e.indexOf(t),
                    n = i - 4,
                    o = i + t.length,
                    r = "</a>" === e.substr(n, 4),
                    s = "<a " === e.substr(o, 3);
                return !r && !s
            },
            isNotInElement: function(t, e) {
                var i = new RegExp("<[^>]*" + t + "[^<]*>", "i"),
                    n = new RegExp(">[^<]*" + t + "[^>]*</", "i");
                return !i.test(e) && !n.test(e)
            }
        }), r.define({
            name: "autoAds",
            namespace: "dup.business",
            deps: {
                config: "dup.common.config",
                dom: "dup.common.utility.dom",
                data: "dup.common.utility.data",
                style: "dup.common.utility.style",
                log: "dup.common.utility.log",
                browser: "dup.common.utility.browser",
                slot: "dup.business.slot",
                param: "dup.business.param"
            },
            launch: function() {
                try {
                    if (!window.___baidu_union_.expId && !this.browser.baiduboxapp) {
                        window.___baidu_union_.expId = "110011";
                        var t = this.param.getOneParam("slotParam", "dis");
                        if (0 === t) {
                            var e = this.getAutoSlotInfo();
                            this.data.defineOnce("dupCallback", r.proxy(this, this.dupCallback), this.config.COMMON_GLOBAL), this.requestAutoAdsInfo(e)
                        }
                    }
                } catch (i) {
                    var n = i && i.stack ? i.stack : i;
                    this.log.sendEclickLog("se.jpg", "fatalError", {
                        key: "autoAds",
                        date: (new Date).getTime(),
                        mes: encodeURIComponent(n)
                    })
                }
            },
            getAutoSlotInfo: function() {
                var t = this.slot.createSlot({
                    slotId: this.config.AUTOID,
                    isAsync: !0
                });
                return t
            },
            requestAutoAdsInfo: function(t) {
                t.paramObj = this.param.getParamObj(t), t.paramObj.dcb = this.config.COMMON_GLOBAL_CALLBACK, t.paramObj.dtm = this.config.AUTO_JSONP, t.paramObj.dc = this.config.AUTO_DC;
                var e = this.param.getParamString(t.paramObj),
                    i = this.config.HTTP_PROTOCOL + this.config.REQUEST_URL + this.config.AUTO_PATH + "?" + e;
                "complete" === document.readyState || "interactive" === document.readyState ? this.dom.insertScriptElement(i) : this.dom.bind(document, "readystatechange", r.proxy(this, function() {
                    "interactive" === document.readyState && this.dom.insertScriptElement(i)
                }))
            },
            callback: function(t, e, i) {
                try {
                    if (i instanceof Array && document.querySelector) {
                        var n = window.___baidu_union_.autoAd && window.___baidu_union_.autoAd.dup;
                        n ? window.___baidu_union_.dsCallback(i, n) : window.___baidu_union_.dupCallback(i)
                    }
                } catch (o) {
                    var r = o && o.stack ? o.stack : o;
                    this.log.sendEclickLog("se.jpg", "fatalError", {
                        key: "autoDupCallback",
                        date: (new Date).getTime(),
                        mes: encodeURIComponent(r)
                    })
                }
            },
            dupCallback: function(t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                        n = i.tuid,
                        o = i.placement,
                        r = i.userdefine;
                    n && "[object Object]" === Object.prototype.toString.call(o) && this.insertProcessor(n, o.processor, o.position, r)
                }
            },
            insertProcessor: function(t, e, i, n) {
                var o = i && document.querySelector(i),
                    r = "";
                switch (e) {
                    case "0":
                        r = o, o = r && r.parentNode;
                        break;
                    case "1":
                        r = this.getHalfLongInsertPositon(o);
                        break;
                    case "2":
                        r = this.getLastTwoInsertPositon(o)
                }
                this.appendAutoScript(t, n, r, o)
            },
            getHalfLongInsertPositon: function(t) {
                var e = t && t.children;
                if (e && e.length > 1 && t.scrollHeight > window.screen.height) {
                    var i = e.length;
                    return e[Math.ceil(i / 2)]
                }
            },
            getLastTwoInsertPositon: function(t) {
                var e = t && t.children;
                if (e && e.length > 0) {
                    var i = e.length;
                    return e[i - 1]
                }
            },
            appendAutoScript: function(t, e, i, n) {
                if (!i || !n) return !1;
                var o = document.createElement("div");
                o.id = "_" + Math.random().toString(36).slice(2);
                var r = document.createElement("script");
                r.text = this.getAutoScriptSnippet(t, o.id, e), o.appendChild(r), n.insertBefore(o, i)
            },
            getAutoScriptSnippet: function(t, e, i) {
                var n = '(window.slotbydup = window.slotbydup || []).push({ id: "' + t + '", container:"' + e + '", exps:"' + this.config.AUTO_AD_EXP_ID + "\", isAutoAd:true",
                    o = "});",
                    r = n + o;
                return i = window.JSON && window.JSON.stringify && i && "object" == typeof i && JSON.stringify(i),
                    i && (r = n + ", coa:" + i + o), r
            }
        }), r.define({
            name: "richMaterial",
            namespace: "dup.ui.painter",
            deps: {
                pdbFrame: "dup.business.pdbFrame"
            },
            render: function(t) {
                return this.pdbFrame.renderRichMaterial(t)
            }
        }), r.define({
            name: "requestCache",
            namespace: "dup.business",
            deps: {
                slot: "dup.business.slot",
                config: "dup.common.config",
                dom: "dup.common.utility.dom",
                pdbFrame: "dup.business.pdbFrame",
                viewWatch: "dup.business.viewWatch",
                log: "dup.common.utility.log"
            },
            slotInfoMap: {},
            secondResult: {},
            add: function(t, e) {
                this.slotInfoMap[t] = e
            },
            get: function(t) {
                return this.slotInfoMap[t]
            },
            cacheRequest: function(t, e) {
                if (!t || this.secondResult[t]) return !1;
                this.secondResult[t] = e;
                var i = this.get(t);
                i && !i.isNeedCacheRequest && this.log.sendEclickRsLog("isNotNeedCacheRequest", {
                    id: i.id
                });
                var n = this.config.CACHE_URL + "dpv=" + t + "&di=" + i.slotId;
                this.dom.insertScriptElement(n)
            },
            cacheRequestCallback: function(t) {
                var e = t.html || "success";
                if ("success" !== e) {
                    var i = this.get(t.dpv);
                    if (i) {
                        var n = i.response,
                            o = n.pdb_deliv,
                            r = n.rtb_deliv,
                            s = n.order_deliv,
                            a = o.deliv_des;
                        if (a = a._html || {}, 0 === parseInt(o.deliv_id, 10) && (0 !== parseInt(s.deliv_id, 10) || 0 !== parseInt(r.deliv_id, 10)) && 7 === n.placement.complement_type) return this.removeAdContainer(i);
                        if ("rich" === a.type) {
                            var d = document.getElementById(i.containerId);
                            this.pdbFrame.evalHTML(d, a.content)
                        } else {
                            var c = this.secondResult[t.dpv];
                            this.slot.clearStatus(i, this.config.STATUS_FINISH), c.outerHTML = this.pdbFrame.getFrameHTML(i)
                        }
                    }
                }
            },
            removeAdContainer: function(t) {
                var e = t.containerId,
                    i = document.getElementById(e),
                    n = document.getElementById(e + "_left"),
                    o = document.getElementById(e + "_right");
                i && (this.viewWatch.unregisetViewWatch(t), i.parentNode.removeChild(i)), n && n.parentNode.removeChild(n), o && o.parentNode.removeChild(o)
            }
        }), r.define({
            name: "frame",
            namespace: "dup.business",
            deps: {
                config: "dup.common.config",
                dom: "dup.common.utility.dom",
                slot: "dup.business.slot",
                requestCache: "dup.business.requestCache",
                param: "dup.business.param",
                lang: "dup.common.utility.lang",
                data: "dup.common.utility.data",
                pdbFrame: "dup.business.pdbFrame"
            },
            getFrameHTML: function(t) {
                if (t.isPdbAd) return this.pdbFrame.getFrameHTML(t);
                var e = this.getFrameData(t);
                return this.renderFrameHTML(e)
            },
            getFrameData: function(t, e) {
                var i = t.containerInfo,
                    n = t.width || i.width,
                    o = t.height || i.height,
                    s = this.param.getPmpRequestUrl(t),
                    a = "";
                if (t.isNeedCacheRequest) {
                    var d = "adsbybaidu_callback";
                    if (this.data.defineOnce(d, r.proxy(this.requestCache, this.requestCache.cacheRequestCallback)), e) a = r.proxy(this, function(t, e) {
                        this.requestCache.cacheRequest(t.paramObj.dpv, e)
                    });
                    else {
                        var c = this.config.DUP_PREFIX + "cacheRequest";
                        this.data.defineOnce(c, r.proxy(this.requestCache, this.requestCache.cacheRequest)), a = 'onload="' + c + "('" + t.paramObj.dpv + "', this);\""
                    }
                } else if (t.styleOpenApi && t.styleOpenApi.floatingState && "show" !== t.styleOpenApi.floatingState || 2 === i.location) {
                    var l = t.styleOpenApi && t.styleOpenApi.floatingState ? t.styleOpenApi.floatingState : "upSlideShow";
                    a = e ? function(t, e) {
                        BAIDU_SSP_floatShow(i.location, l, e)
                    } : 'onload="' + this.config.DUP_PREFIX + "floatShow('" + i.location + "','" + l + "', this);\""
                }
                var h = "iframe" + t.id,
                    u = {};
                return u.iframeId = h, u.srcAttriName = "src", u.onloadDefine = a, u.iframeWidth = "" + n, u.iframeHeight = "" + o, u.url = s, u
            },
            renderFrameHTML: function(t) {
                var e = ["<iframe", ' id="{iframeId}"', ' name="{iframeId}"', " {onloadDefine}", ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0;vertical-align:bottom;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"', ' allowtransparency="true">', "</iframe>"].join("");
                return this.lang.template(e, t)
            },
            getFrameElement: function(t) {
                if (t.isPdbAd) return this.pdbFrame.getFrameElement(t);
                var e = this.getFrameData(t, !0);
                return this.createFrameElement(t, e)
            },
            createFrameElement: function(t, e) {
                var i, n = {
                        id: e.iframeId,
                        name: e.iframeId,
                        width: e.iframeWidth,
                        height: e.iframeHeight,
                        align: "center, center",
                        vspace: "0",
                        hspace: "0",
                        marginWidth: "0",
                        marginHeight: "0",
                        scrolling: "no",
                        frameBorder: "0",
                        allowTransparency: "true",
                        src: e.url
                    },
                    o = {
                        border: "0",
                        verticalAlign: "bottom",
                        margin: "0",
                        width: e.iframeWidth + "px",
                        height: e.iframeHeight + "px"
                    },
                    r = document.createElement("iframe");
                for (i in n) r.setAttribute(i, n[i]);
                for (i in o) r.style[i] = o[i];
                var s = e.onloadDefine;
                return s && this.dom.bind(r, "load", function() {
                    s(t, r)
                }), r
            }
        }), r.define({
            name: "inlayFix",
            namespace: "dup.ui.painter.mobile",
            deps: {
                config: "dup.common.config",
                lang: "dup.common.utility.lang",
                style: "dup.common.utility.style",
                dom: "dup.common.utility.dom",
                slot: "dup.business.slot",
                param: "dup.business.param",
                expand: "dup.ui.painter.expand",
                monitor: "dup.business.monitor",
                browser: "dup.common.utility.browser",
                frame: "dup.business.frame",
                pdbFrame: "dup.business.pdbFrame"
            },
            $inlayFix: function() {
                this.win = window
            },
            parseHtmlSnippet: function(t) {
                var e = ["<div style=\"box-sizing: content-box;width:{width}px;height:{height}px;position:relative;margin:0 auto;\">", "{iframeHtml}", "</div>"].join("");
                return this.lang.template(e, t)
            },
            decorateContainer: function(t, e) {
                0 === e.complementType && (t.style.width = e.width + "px", t.style.height = e.height + "px", t.style.display = "inline-block")
            },
            render: function(t) {
                if (this.slot.setStatus(t.id, this.config.STATUS_RENDERED), !this.slot.adInfoIsAvailable(t)) return !1;
                var e = this.dom.g(t.containerId);
                this.monitor.sendLog(t);
                var i = this.pdbFrame.renderRichMaterial(t),
                    n = this;
                if (i) return void(this.supportPostMessage && setTimeout(function() {
                    n.expand.fire("adloaded", t.id)
                }, 800));
                var o = this.slot.processSlotInfo(t);
                if (t.width = o.width, t.height = o.height, 2 === o.sizeType || 5 === o.sizeType) {
                    var r = t.response.pdb_deliv.deliv_des;
                    if (r && r._html) {
                        r = r._html;
                        var s = r.type;
                        "text" !== s && "image" !== s && "flash" !== s || (r.width = t.width, r.height = t.height)
                    }
                }
                this.decorateContainer(e, t);
                var a = {
                        id: t.id,
                        width: o.width,
                        height: o.height,
                        iframeHtml: this.frame.getFrameHTML(t)
                    },
                    d = this.parseHtmlSnippet(a);
                e.innerHTML = d, t.isPdbAd || this.slot.setStatus(t.id, this.config.STATUS_FINISH)
            }
        }), r.define({
            name: "float",
            namespace: "dup.ui.painter.mobile",
            deps: {
                config: "dup.common.config",
                lang: "dup.common.utility.lang",
                style: "dup.common.utility.style",
                dom: "dup.common.utility.dom",
                cookie: "dup.common.utility.cookie",
                data: "dup.common.utility.data",
                event: "dup.common.utility.event",
                browser: "dup.common.utility.browser",
                slot: "dup.business.slot",
                frame: "dup.business.frame",
                monitor: "dup.business.monitor",
                pdbFrame: "dup.business.pdbFrame"
            },
            directDisplay: "show",
            upSlideAnimation: "upSlideShow",
            downSlideAnimation: "downSlideShow",
            downArrawLineHeight: 2,
            upArrawLineHeight: 1,
            downArraw: String.fromCharCode(65088),
            upArraw: String.fromCharCode(65087),
            containerFilter: function(t, e) {
                var i = !1,
                    n = t.containerInfo,
                    o = n.location,
                    r = t.styleOpenApi,
                    s = 2 === r.apType;
                if (2 === o && !s) return !1;
                var a = 3.4;
                if (1 !== e.sizeType || r.rsi0 || r.rsi1 || r.cpro_w || r.cpro_h) {
                    var d = e.width / e.height;
                    i = d > a
                }
                return i
            },
            processSlotInfo: function(t) {
                var e = t.containerInfo,
                    i = t.response.placement.fillstyle || {},
                    n = parseFloat(i.opacity || .9),
                    o = i.backgroundColor || "#000";
                t.styleOpenApi.sizeType && (t.styleOpenApi.sizeType = 2), e.sizeType = 2;
                var r = this.slot.processSlotInfo(t);
                r.backgroundOpacity = n, r.backgroundColor = o;
                var s = 2 === e.location ? 2 : 3;
                return r.locationType = s, r.containerId = t.containerId, r.floatingState = this.getFloatingState(t, s), r
            },
            parseHtmlSnippet: function(t) {
                var e = ["{closeBtnHtml}", "{iframeHtml}"].join("");
                return this.lang.template(e, t)
            },
            parseCloseBtnLayoutData: function(t) {
                var e = "",
                    i = "",
                    n = "0",
                    o = 0;
                2 === t.locationType ? (e = "0 0 40px 40px", n = t.height, i = t.floatingState === this.directDisplay ? this.upArraw : this.downArraw, o = this.upArrawLineHeight) : (e = "40px 40px 0 0", n = -20, i = t.floatingState === this.directDisplay ? this.downArraw : this.upArraw, o = this.downArrawLineHeight);
                var r = {
                    domId: t.containerId,
                    borderRadius: e,
                    top: n,
                    btnTag: i,
                    lineHeight: o
                };
                return r
            },
            parseCloseButtonHtml: function(t) {
                var e = ["<div", ' class="closeBtn"', ' style="', "position:absolute;", "left:50%;", "top:{top}px;", "margin-left: -20px;", "width:40px;", "height:20px;", "background-color:#4a4a4a;", "cursor:pointer;", "border-radius:{borderRadius};", "z-index:2147483647;", "color:#ffffff;", "font-weight:600;", "box-sizing:border-box;", "font-size:14px;", "font-family:'Microsoft Yahei',sans-serif;", 'line-height:{lineHeight};">', "{btnTag}", "</div>"].join(""),
                    i = this.parseCloseBtnLayoutData(t);
                return this.lang.template(e, i)
            },
            decorateContainer: function(t, e) {
                var i = 0,
                    n = "absolute";
                this.style.canFixed() ? (n = "fixed", e.floatingState !== this.directDisplay && "ontouchend" in document && e.height > 0 && (i = -1 * (e.height + 20))) : i = this.style.getScrollTop(window) + this.style.getClientHeight(window) - e.height;
                var o = 2 === e.locationType ? "top" : "bottom",
                    r = 2 === e.locationType ? "border-bottom" : "border-top",
                    s = t.style;
                s.cssText = ["box-sizing: content-box;", "display:block", "position:" + n, "z-index:2147483647;", "left:0", o + ":" + i + "px", "background-color:" + e.backgroundColor, "opacity:" + e.backgroundOpacity, "text-align:center", "width:" + e.width + "px", "height:" + e.height + "px", r + ":2px solid #4a4a4a"].join(";")
            },
            getCloseCookieKey: function(t) {
                return "bd_close_" + t.id
            },
            closeBtnOnClickHandler: function(t, e, i, n) {
                var o = 2 === e.locationType ? "top" : "bottom";
                "hidden" === i.getAttribute("state") ? this.showAdContainer(o, i, n) : this.hideAdContainer(o, i, n)
            },
            showAdContainer: function(t, e, i) {
                e.setAttribute("state", "show"), e.style.transition = t + " 0.75s", e.style["-webkit-transition"] = t + " 0.75s", e.style["-moz-transition"] = t + " 0.75s", e.style["-o-transition"] = t + " 0.75s", e.style[t] = "0px", "top" === t ? (i.style.lineHeight = this.upArrawLineHeight, i.innerText = this.upArraw) : (i.style.lineHeight = this.downArrawLineHeight, i.innerText = this.downArraw)
            },
            hideAdContainer: function(t, e, i) {
                e.setAttribute("state", "hidden");
                var n = this.style.getStyle(e, "height");
                n = n && parseInt(n, 10), e.style.transition = t + " 0.75s", e.style["-webkit-transition"] = t + " 0.75s", e.style["-moz-transition"] = t + " 0.75s", e.style["-o-transition"] = t + " 0.75s", e.style[t] = -1 * n + "px", "top" === t ? (i.style.lineHeight = this.downArrawLineHeight, i.innerText = this.downArraw) : (i.style.lineHeight = this.upArrawLineHeight, i.innerText = this.upArraw)
            },
            render: function(t) {
                if (!this.slot.adInfoIsAvailable(t)) return !1;
                this.slot.setStatus(t.id, this.config.STATUS_RENDERED), this.id = t.id;
                var e = this.processSlotInfo(t);
                this.monitor.sendLog(t);
                var i = this.pdbFrame.renderRichMaterial(t),
                    n = this.dom.g(t.containerId);
                if (!i && n && this.containerFilter(t, e)) {
                    this.decorateContainer(n, e);
                    var o = this.parseCloseButtonHtml(e);
                    this.processPdbSize(e, t), this.data.defineOnce("BAIDU_SSP_floatShow", r.proxy(this, this.showFloatAd));
                    var s = {
                            closeBtnHtml: o,
                            iframeHtml: this.frame.getFrameHTML(t)
                        },
                        a = this.parseHtmlSnippet(s);
                    n.innerHTML = a;
                    var d = n.getElementsByClassName("closeBtn")[0];
                    if (d) {
                        var c = this;
                        this.dom.bind(d, "click", function() {
                            var i = this;
                            c.closeBtnOnClickHandler(t, e, n, i)
                        })
                    }
                    t.isPdbAd || this.slot.setStatus(t.id, this.config.STATUS_FINISH)
                }
            },
            showFloatAd: function(t, e, i) {
                var n = i.parentElement;
                if (document.body && n) {
                    var o = n.getElementsByClassName("closeBtn")[0];
                    t = "2" === t ? "top" : "bottom", this.dom.bind(document.body, "touchstart", r.proxy(this, this.touchStart)), this.dom.bind(document.body, "touchend", r.proxy(this, this.touchEnd, n, o, t, e))
                }
            },
            touchStart: function(t) {
                this.startY = t.targetTouches[0] && t.targetTouches[0].pageY
            },
            touchEnd: function(t, e, i, n, o) {
                this[n] = this[n] || !1, this.pageY = t.changedTouches[0] && t.changedTouches[0].pageY;
                var r = this.pageY - this.startY;
                (-10 > r && !this[n] && o === this.upSlideAnimation || r > 10 && !this[n] && o === this.downSlideAnimation) && (this[n] = !0, this.showAdContainer(n, e, i))
            },
            getFloatingState: function(t, e) {
                return t.styleOpenApi && t.styleOpenApi.floatingState ? t.styleOpenApi.floatingState : 2 === e ? this.upSlideAnimation : this.directDisplay
            },
            processPdbSize: function(t, e) {
                if (2 === t.sizeType) {
                    var i = e.response.pdb_deliv.deliv_des;
                    if (i && i._html) {
                        i = i._html;
                        var n = i.type;
                        "text" !== n && "image" !== n && "flash" !== n || (i.width = e.width, i.height = e.height)
                    }
                }
            }
        }), r.define({
            name: "inlayFix",
            namespace: "dup.ui.painter",
            deps: {
                config: "dup.common.config",
                dom: "dup.common.utility.dom",
                slot: "dup.business.slot",
                frame: "dup.business.frame",
                viewWatch: "dup.business.viewWatch",
                pdbFrame: "dup.business.pdbFrame",
                monitor: "dup.business.monitor",
                expand: "dup.ui.painter.expand",
                event: "dup.common.utility.event",
                lang: "dup.common.utility.lang",
                browser: "dup.common.utility.browser",
                deliveryLimit: "dup.business.deliveryLimit",
                style: "dup.common.utility.style"
            },
            $inlayFix: function() {
                this.supportPostMessage = !(this.browser.ie && this.browser.ie < 8)
            },
            bindEvent4Expand: function(t) {
                var e = this.dom.g(t.containerId),
                    i = this;
                this.event.bind(e, "mouseover", function(e) {
                    var n = e.target || e.srcElement;
                    "iframe" !== n.tagName.toLowerCase() && "iframe" !== n.nodeName.toLowerCase() || i.expand.fire("mouseover", t.id)
                })
            },
            validate: function(t) {
                if (t.isUnion) {
                    var e = this.deliveryLimit.getSlotType(t),
                        i = this.deliveryLimit.validate(t);
                    return i && this.deliveryLimit.setAdsCount(e, t.containerId), i
                }
                return !0
            },
            decorateContainer: function(t, e) {
                0 === e.complementType && (t.style.width = e.width + "px", t.style.height = e.height + "px", t.style.display = "inline-block")
            },
            render: function(t) {
                this.slot.setStatus(t.id, this.config.STATUS_RENDERED);
                var e = this.dom.g(t.containerId);
                if (!this.slot.adInfoIsAvailable(t)) return this.slot.setStatus(t.id, this.config.STATUS_FINISH), !1;
                var i = t.response.placement.container.slide,
                    n = i && !this.lang.isEmptyObj(i) && this.supportPostMessage;
                if (n && (this.expand.observer(t), this.bindEvent4Expand(t)), this.validate(t)) {
                    this.monitor.sendLog(t);
                    var o = this.pdbFrame.renderRichMaterial(t),
                        r = this;
                    if (o) return void(this.supportPostMessage && setTimeout(function() {
                        r.expand.fire("adloaded", t.id)
                    }, 800));
                    var s = this.slot.processSlotInfo(t);
                    t.width = s.width, t.height = s.height, this.decorateContainer(e, t);
                    var a = t.paramObj.exps || "",
                        d = 1e4 * Math.random();
                    if (2e3 > d ? a = a ? a + ",112217" : "112217" : d >= 2e3 & 4e3 > d && (a = a ? a + ",112207" : "112207"), t.paramObj.exps = a, a.indexOf("112217") >= 0) {
                        var c = this.frame.getFrameElement(t);
                        e.appendChild(c)
                    } else {
                        var l = this.frame.getFrameHTML(t);
                        e.innerHTML = l
                    }
                    this.viewWatch.regisetViewWatch(t), t.isPdbAd || this.slot.setStatus(t.id, this.config.STATUS_FINISH), n && setTimeout(function() {
                        r.expand.fire("adloaded", t.id)
                    }, 800)
                }
            }
        }), r.define({
            name: "main",
            namespace: "dup.ui.delivery",
            deps: {
                config: "dup.common.config",
                slot: "dup.business.slot",
                fingerPrint: "dup.business.fingerPrint",
                data: "dup.common.utility.data",
                storage: "dup.common.utility.storage",
                loader: "dup.common.loader",
                painterSelector: "dup.business.painterSelector",
                origentation: "dup.business.origentation",
                monitor: "dup.business.monitor",
                scene: "dup.business.sceneTactics",
                clbDelivery: "dup.business.delivery.clbDelivery",
                unionDelivery: "dup.business.delivery.unionDelivery",
                dupDelivery: "dup.business.delivery.dupDelivery",
                standardDelivery: "dup.business.delivery.standardDelivery",
                inlayFixPainter: "dup.ui.painter.inlayFix",
                mobileInlayFixPainter: "dup.ui.painter.mobile.inlayFix",
                mobileFloatPainter: "dup.ui.painter.mobile.float",
                mobileInsideTextPainter: "dup.ui.painter.mobile.insideText",
                dom: "dup.common.utility.dom",
                viewWatch: "dup.business.viewWatch",
                autoAds: "dup.business.autoAds",
                style: "dup.common.utility.style",
                richMaterial: "dup.ui.painter.richMaterial"
            },
            process: function() {
                this.prepareApi(), this.autoAds.launch(), this.unionDelivery.launch(), this.dupDelivery.launch(), this.clbDelivery.launch(), this.standardDelivery.launch(), this.fingerPrint.start()
            },
            prepareApi: function() {
                this.data.defineOnce(this.config.LOADER_DEFINE_NAME, r.proxy(this, this.callback)), this.data.defineOnce(this.config.COMMON_GLOBAL_CALLBACK, r.proxy(this, this.commonCallback))
            },
            callback: function(t) {
                try {
                    var e = this.slot.getSlotInfo(t.tuid);
                    if (!e || e.containerId && !this.dom.g(e.containerId)) return;
                    e.response = t, this.slot.setStatus(e.id, this.config.STATUS_RESPONSE), this.slot.processSlot(e), e.timestampWatcher.t3 = (new Date).getTime(), this.slot.adInfoStorage(e);
                    var i = this.painterSelector.getPainter(e);
                    if (i) {
                        var n = r.using(i);
                        n ? this.painterLoadedCallback(i, e, n) : this.loader.load(e.id, i, r.proxy(this, this.painterLoadedCallback, i, e))
                    }
                } catch (o) {
                    if (!t.tuid) return;
                    var s = o && o.stack ? o.stack : o,
                        a = encodeURIComponent(s),
                        d = {
                            type: "fatalError",
                            pos: "callback",
                            id: t.tuid,
                            mes: a
                        };
                    this.monitor.expLog(d)
                }
            },
            painterLoadedCallback: function(t, e, i) {
                var n = i || r.using(t);
                n && (n.render(e), this.sendAdInfoToTemplate(e), t && t.indexOf("mobile") > -1 && (this.viewWatch.regisetViewWatch(e), window.postMessage && e.isUnion || this.fingerPrint.loadAntiBotFile(e.response.queryid)), this.addDebugSign(e))
            },
            sendAdInfoToTemplate: function(t) {
                var e = this.dom.g(t.containerId),
                    i = e && e.querySelector && e.querySelector("iframe");
                i && this.dom.bind(i, "load", function() {
                    if (window.JSON && window.JSON.stringify && i.contentWindow && i.contentWindow.postMessage) {
                        var e = JSON.stringify({
                            type: 1,
                            tuid: t.id
                        });
                        i.contentWindow.postMessage(e, "*")
                    }
                })
            },
            commonCallback: function() {
                arguments.length > 0 && "auto" === arguments[0] && this.autoAds.callback.apply(this.autoAds, arguments)
            },
            addDebugSign: function(t) {
                var e = this.dom.g(t.containerId),
                    i = t.paramObj.dis,
                    n = i ? t.paramObj.ltu : window.location.href;
                n.indexOf(this.config.DEBUG_QUERY_TAG) > -1 && this.style.addDebugElement(e, t.id)
            }
        });
        var a = r.using('dup.ui.delivery.main');
        a.process()
    }()
} catch (e) {
    var err = e && e.stack ? e.stack : e,
        url = ['//eclick.baidu.com/se.jpg?', 'type=fatalError', 'data=1220', 'mes=' + encodeURIComponent(err)].join('&'),
        img = new Image;
    img.src = url
}