/*1570701901,,JIT Construction: v1001277952,en_US*/

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
try {
    (window.FB && !window.FB.__buffer) || (function(window, fb_fif_window) {
        var apply = Function.prototype.apply;

        function bindContext(fn, thisArg) {
            return function _sdkBound() {
                return apply.call(fn, thisArg, arguments);
            };
        }
        var global = {
            __type: 'JS_SDK_SANDBOX',
            window: window,
            document: window.document
        };
        var sandboxWhitelist = ['setTimeout', 'setInterval', 'clearTimeout', 'clearInterval'];
        for (var i = 0; i < sandboxWhitelist.length; i++) {
            global[sandboxWhitelist[i]] = bindContext(window[sandboxWhitelist[i]], window);
        }(function() {
            var self = window;
            var __DEV__ = 0;

            function emptyFunction() {};
            var __transform_includes = {};
            var __annotator, __bodyWrapper;
            var __buffer = window.FB && window.FB.__buffer;
            var __w, __t;
            var undefined;
            var __p;
            with(this) {
                (function() {
                    var a = {},
                        b = function(a, b) {
                            if (!a && !b) return null;
                            var c = {};
                            typeof a !== "undefined" && (c.type = a);
                            typeof b !== "undefined" && (c.signature = b);
                            return c
                        },
                        c = function(a, c) {
                            return b(a && /^[A-Z]/.test(a) ? a : void 0, c && (c.params && c.params.length || c.returns) ? "function(" + (c.params ? c.params.map(function(a) {
                                return /\?/.test(a) ? "?" + a.replace("?", "") : a
                            }).join(",") : "") + ")" + (c.returns ? ":" + c.returns : "") : void 0)
                        },
                        d = function(a, b, c) {
                            return a
                        },
                        e = function(a, b, d) {
                            "sourcemeta" in __transform_includes && (a.__SMmeta = b);
                            if ("typechecks" in __transform_includes) {
                                b = c(b ? b.name : void 0, d);
                                b && __w(a, b)
                            }
                            return a
                        },
                        f = function(a, b, c) {
                            return c.apply(a, b)
                        },
                        g = function(a, b, c, d) {
                            d && d.params && __t.apply(a, d.params);
                            c = c.apply(a, b);
                            d && d.returns && __t([c, d.returns]);
                            return c
                        },
                        h = function(b, c, d, e, f) {
                            if (f) {
                                f.callId || (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
                                e = f.callId;
                                a[e] = (a[e] || 0) + 1
                            }
                            return d.apply(b, c)
                        };
                    typeof __transform_includes === "undefined" ? (__annotator = d, __bodyWrapper = f) : (__annotator = e, "codeusage" in __transform_includes ? (__annotator = d, __bodyWrapper = h, __bodyWrapper.getCodeUsage = function() {
                        return a
                    }, __bodyWrapper.clearCodeUsage = function() {
                        a = {}
                    }) : "typechecks" in __transform_includes ? __bodyWrapper = g : __bodyWrapper = f)
                })();
                __t = function(a) {
                    return a[0]
                }, __w = function(a) {
                    return a
                };
                var require, __d;
                (function(a) {
                    var b = {},
                        c = {},
                        d = ["global", "require", "requireDynamic", "requireLazy", "module", "exports"];
                    require = function(d, e) {
                        if (Object.prototype.hasOwnProperty.call(c, d)) return c[d];
                        if (!Object.prototype.hasOwnProperty.call(b, d)) {
                            if (e) return null;
                            throw new Error("Module " + d + " has not been defined")
                        }
                        e = b[d];
                        var f = e.deps,
                            g = e.factory.length,
                            h, i = [];
                        for (var j = 0; j < g; j++) {
                            switch (f[j]) {
                                case "module":
                                    h = e;
                                    break;
                                case "exports":
                                    h = e.exports;
                                    break;
                                case "global":
                                    h = a;
                                    break;
                                case "require":
                                    h = require;
                                    break;
                                case "requireDynamic":
                                    h = null;
                                    break;
                                case "requireLazy":
                                    h = null;
                                    break;
                                default:
                                    h = require.call(null, f[j])
                            }
                            i.push(h)
                        }
                        e.factory.apply(a, i);
                        c[d] = e.exports;
                        return e.exports
                    };
                    __d = function(a, e, f, g) {
                        typeof f === "function" ? (b[a] = {
                            factory: f,
                            deps: d.concat(e),
                            exports: {}
                        }, g === 3 && require.call(null, a)) : c[a] = f
                    };
                    a.$RefreshReg$ = function() {};
                    a.$RefreshSig$ = function() {
                        return function(a) {
                            return a
                        }
                    }
                })(this);
                __d("ES5Array", [], (function(a, b, c, d, e, f) {
                    a = {};
                    a.isArray = function(a) {
                        return Object.prototype.toString.call(a) == "[object Array]"
                    };
                    e.exports = a
                }), null);
                __d("ES5ArrayPrototype", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {};
                    g.map = function(a, b) {
                        if (typeof a !== "function") throw new TypeError();
                        var c, d = this.length,
                            e = new Array(d);
                        for (c = 0; c < d; ++c) c in this && (e[c] = a.call(b, this[c], c, this));
                        return e
                    };
                    g.forEach = function(a, b) {
                        g.map.call(this, a, b)
                    };
                    g.filter = function(a, b) {
                        if (typeof a !== "function") throw new TypeError();
                        var c, d, e = this.length,
                            f = [];
                        for (c = 0; c < e; ++c) c in this && (d = this[c], a.call(b, d, c, this) && f.push(d));
                        return f
                    };
                    g.every = function(a, b) {
                        if (typeof a !== "function") throw new TypeError();
                        var c = new Object(this),
                            d = c.length;
                        for (var e = 0; e < d; e++)
                            if (e in c && !a.call(b, c[e], e, c)) return !1;
                        return !0
                    };
                    g.some = function(a, b) {
                        if (typeof a !== "function") throw new TypeError();
                        var c = new Object(this),
                            d = c.length;
                        for (var e = 0; e < d; e++)
                            if (e in c && a.call(b, c[e], e, c)) return !0;
                        return !1
                    };
                    g.indexOf = function(a, b) {
                        var c = this.length;
                        b |= 0;
                        b < 0 && (b += c);
                        for (; b < c; b++)
                            if (b in this && this[b] === a) return b;
                        return -1
                    };
                    e.exports = g
                }), null);
                __d("ES5Date", [], (function(a, b, c, d, e, f) {
                    a = {};
                    a.now = function() {
                        return new Date().getTime()
                    };
                    e.exports = a
                }), null);
                __d("ES5FunctionPrototype", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    a = {};
                    a.bind = function(a) {
                        if (typeof this !== "function") throw new TypeError("Bind must be called on a function");
                        var b = this,
                            c = Array.prototype.slice.call(arguments, 1);

                        function d() {
                            return b.apply(a, c.concat(Array.prototype.slice.call(arguments)))
                        }
                        d.displayName = "bound:" + (b.displayName || b.name || "(?)");
                        d.toString = function() {
                            return "bound: " + b
                        };
                        return d
                    };
                    e.exports = a
                }), null);
                __d("ie8DontEnum", [], (function(a, b, c, d, e, f) {
                    var g = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "prototypeIsEnumerable", "constructor"],
                        h = {}.hasOwnProperty;
                    a = function() {};
                    ({
                        toString: !0
                    }).propertyIsEnumerable("toString") && (a = function(a, b) {
                        for (var c = 0; c < g.length; c++) {
                            var d = g[c];
                            h.call(a, d) && b(d)
                        }
                    });
                    e.exports = a
                }), null);
                __d("ES5Object", ["ie8DontEnum"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {}.hasOwnProperty;
                    a = {};

                    function h() {}
                    a.create = function(a) {
                        var b = typeof a;
                        if (b != "object" && b != "function") throw new TypeError("Object prototype may only be a Object or null");
                        h.prototype = a;
                        return new h()
                    };
                    a.keys = function(a) {
                        var c = typeof a;
                        if (c != "object" && c != "function" || a === null) throw new TypeError("Object.keys called on non-object");
                        var d = [];
                        for (var e in a) g.call(a, e) && d.push(e);
                        b("ie8DontEnum")(a, function(a) {
                            return d.push(a)
                        });
                        return d
                    };
                    a.freeze = function(a) {
                        return a
                    };
                    a.isFrozen = function() {
                        return !1
                    };
                    a.seal = function(a) {
                        return a
                    };
                    e.exports = a
                }), null);
                __d("ES5StringPrototype", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    a = {};
                    a.trim = function() {
                        if (this == null) throw new TypeError("String.prototype.trim called on null or undefined");
                        return String.prototype.replace.call(this, /^\s+|\s+$/g, "")
                    };
                    a.startsWith = function(a) {
                        var b = String(this);
                        if (this == null) throw new TypeError("String.prototype.startsWith called on null or undefined");
                        var c = arguments.length > 1 ? Number(arguments[1]) : 0;
                        isNaN(c) && (c = 0);
                        var d = Math.min(Math.max(c, 0), b.length);
                        return b.indexOf(String(a), c) == d
                    };
                    a.endsWith = function(a) {
                        var b = String(this);
                        if (this == null) throw new TypeError("String.prototype.endsWith called on null or undefined");
                        var c = b.length,
                            d = String(a),
                            e = arguments.length > 1 ? Number(arguments[1]) : c;
                        isNaN(e) && (e = 0);
                        var f = Math.min(Math.max(e, 0), c),
                            g = f - d.length;
                        return g < 0 ? !1 : b.lastIndexOf(d, g) == g
                    };
                    a.includes = function(a) {
                        if (this == null) throw new TypeError("String.prototype.contains called on null or undefined");
                        var b = String(this),
                            c = arguments.length > 1 ? Number(arguments[1]) : 0;
                        isNaN(c) && (c = 0);
                        return b.indexOf(String(a), c) != -1
                    };
                    a.contains = a.includes;
                    a.repeat = function(a) {
                        __p && __p();
                        if (this == null) throw new TypeError("String.prototype.repeat called on null or undefined");
                        var b = String(this);
                        a = a ? Number(a) : 0;
                        isNaN(a) && (a = 0);
                        if (a < 0 || a === Infinity) throw RangeError();
                        if (a === 1) return b;
                        if (a === 0) return "";
                        var c = "";
                        while (a) a & 1 && (c += b), (a >>= 1) && (b += b);
                        return c
                    };
                    e.exports = a
                }), null);
                __d("ES6Array", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = {
                        from: function(a) {
                            __p && __p();
                            if (a == null) throw new TypeError("Object is null or undefined");
                            var b = arguments[1],
                                c = arguments[2],
                                d = this,
                                e = Object(a),
                                f = typeof Symbol === "function" ? typeof Symbol === "function" ? Symbol.iterator : "@@iterator" : "@@iterator",
                                g = typeof b === "function",
                                h = typeof e[f] === "function",
                                i = 0,
                                j, k;
                            if (h) {
                                j = typeof d === "function" ? new d() : [];
                                var l = e[f](),
                                    m;
                                while (!(m = l.next()).done) k = m.value, g && (k = b.call(c, k, i)), j[i] = k, i += 1;
                                j.length = i;
                                return j
                            }
                            var n = e.length;
                            (isNaN(n) || n < 0) && (n = 0);
                            j = typeof d === "function" ? new d(n) : new Array(n);
                            while (i < n) k = e[i], g && (k = b.call(c, k, i)), j[i] = k, i += 1;
                            j.length = i;
                            return j
                        }
                    };
                    e.exports = a
                }), null);
                __d("ES6ArrayPrototype", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {
                        find: function(a, b) {
                            if (this == null) throw new TypeError("Array.prototype.find called on null or undefined");
                            if (typeof a !== "function") throw new TypeError("predicate must be a function");
                            a = g.findIndex.call(this, a, b);
                            return a === -1 ? void 0 : this[a]
                        },
                        findIndex: function(a, b) {
                            if (this == null) throw new TypeError("Array.prototype.findIndex called on null or undefined");
                            if (typeof a !== "function") throw new TypeError("predicate must be a function");
                            var c = Object(this),
                                d = c.length >>> 0;
                            for (var e = 0; e < d; e++)
                                if (a.call(b, c[e], e, c)) return e;
                            return -1
                        },
                        fill: function(a) {
                            if (this == null) throw new TypeError("Array.prototype.fill called on null or undefined");
                            var b = Object(this),
                                c = b.length >>> 0,
                                d = arguments[1],
                                e = d >> 0,
                                f = e < 0 ? Math.max(c + e, 0) : Math.min(e, c),
                                g = arguments[2],
                                h = g === void 0 ? c : g >> 0,
                                i = h < 0 ? Math.max(c + h, 0) : Math.min(h, c);
                            while (f < i) b[f] = a, f++;
                            return b
                        }
                    };
                    e.exports = g
                }), null);
                __d("ES6DatePrototype", [], (function(a, b, c, d, e, f) {
                    function g(a) {
                        return (a < 10 ? "0" : "") + a
                    }
                    a = {
                        toISOString: function() {
                            if (!isFinite(this)) throw new Error("Invalid time value");
                            var a = this.getUTCFullYear();
                            a = (a < 0 ? "-" : a > 9999 ? "+" : "") + ("00000" + Math.abs(a)).slice(0 <= a && a <= 9999 ? -4 : -6);
                            return a + "-" + g(this.getUTCMonth() + 1) + "-" + g(this.getUTCDate()) + "T" + g(this.getUTCHours()) + ":" + g(this.getUTCMinutes()) + ":" + g(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
                        }
                    };
                    e.exports = a
                }), null);
                __d("ES6Number", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    a = Math.pow(2, -52);
                    b = Math.pow(2, 53) - 1;
                    c = -1 * b;
                    d = {
                        isFinite: function(a) {
                            function b(b) {
                                return a.apply(this, arguments)
                            }
                            b.toString = function() {
                                return a.toString()
                            };
                            return b
                        }(function(a) {
                            return typeof a === "number" && isFinite(a)
                        }),
                        isNaN: function(a) {
                            function b(b) {
                                return a.apply(this, arguments)
                            }
                            b.toString = function() {
                                return a.toString()
                            };
                            return b
                        }(function(a) {
                            return typeof a === "number" && isNaN(a)
                        }),
                        isInteger: function(a) {
                            return this.isFinite(a) && Math.floor(a) === a
                        },
                        isSafeInteger: function(a) {
                            return this.isFinite(a) && a >= this.MIN_SAFE_INTEGER && a <= this.MAX_SAFE_INTEGER && Math.floor(a) === a
                        },
                        EPSILON: a,
                        MAX_SAFE_INTEGER: b,
                        MIN_SAFE_INTEGER: c
                    };
                    e.exports = d
                }), null);
                __d("ES6Object", ["ie8DontEnum"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {}.hasOwnProperty;
                    a = {
                        assign: function(a) {
                            __p && __p();
                            if (a == null) throw new TypeError("Object.assign target cannot be null or undefined");
                            a = Object(a);
                            for (var c = 0; c < (arguments.length <= 1 ? 0 : arguments.length - 1); c++) {
                                var d = c + 1 < 1 || arguments.length <= c + 1 ? void 0 : arguments[c + 1];
                                if (d == null) continue;
                                d = Object(d);
                                for (var e in d) g.call(d, e) && (a[e] = d[e]);
                                b("ie8DontEnum")(d, function(b) {
                                    return a[b] = d[b]
                                })
                            }
                            return a
                        },
                        is: function(a, b) {
                            if (a === b) return a !== 0 || 1 / a === 1 / b;
                            else return a !== a && b !== b
                        }
                    };
                    e.exports = a
                }), null);
                __d("ES7ArrayPrototype", ["ES5Array", "ES5ArrayPrototype"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = b("ES5Array").isArray,
                        h = b("ES5ArrayPrototype").indexOf;

                    function i(a) {
                        return Math.min(Math.max(j(a), 0), Number.MAX_SAFE_INTEGER)
                    }

                    function j(a) {
                        a = Number(a);
                        return isFinite(a) && a !== 0 ? k(a) * Math.floor(Math.abs(a)) : a
                    }

                    function k(a) {
                        return a >= 0 ? 1 : -1
                    }
                    a = {
                        includes: function(a) {
                            "use strict";
                            __p && __p();
                            if (a !== void 0 && g(this) && !(typeof a === "number" && isNaN(a))) return h.apply(this, arguments) !== -1;
                            var b = Object(this),
                                c = b.length ? i(b.length) : 0;
                            if (c === 0) return !1;
                            var d = arguments.length > 1 ? j(arguments[1]) : 0,
                                e = d < 0 ? Math.max(c + d, 0) : d,
                                f = isNaN(a) && typeof a === "number";
                            while (e < c) {
                                var k = b[e];
                                if (k === a || typeof k === "number" && f && isNaN(k)) return !0;
                                e++
                            }
                            return !1
                        }
                    };
                    e.exports = a
                }), null);
                __d("ES7Object", ["ie8DontEnum"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {}.hasOwnProperty;
                    a = {};
                    a.entries = function(a) {
                        if (a == null) throw new TypeError("Object.entries called on non-object");
                        var c = [];
                        for (var d in a) g.call(a, d) && c.push([d, a[d]]);
                        b("ie8DontEnum")(a, function(b) {
                            return c.push([b, a[b]])
                        });
                        return c
                    };
                    a.values = function(a) {
                        if (a == null) throw new TypeError("Object.values called on non-object");
                        var c = [];
                        for (var d in a) g.call(a, d) && c.push(a[d]);
                        b("ie8DontEnum")(a, function(b) {
                            return c.push(a[b])
                        });
                        return c
                    };
                    e.exports = a
                }), null);
                __d("ES7StringPrototype", [], (function(a, b, c, d, e, f) {
                    a = {};
                    a.trimLeft = function() {
                        return this.replace(/^\s+/, "")
                    };
                    a.trimRight = function() {
                        return this.replace(/\s+$/, "")
                    };
                    e.exports = a
                }), null);
                /**
                 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
                 */
                __d("json3-3.3.2", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = {},
                        h = {
                            exports: g
                        },
                        i;

                    function j() {
                        __p && __p();
                        (function() {
                            __p && __p();
                            var b = typeof i === "function" && i.amd,
                                c = {
                                    "function": !0,
                                    object: !0
                                },
                                d = c[typeof g] && g && !g.nodeType && g,
                                e = c[typeof window] && window || this,
                                j = d && c[typeof h] && h && !h.nodeType && typeof a == "object" && a;
                            j && (j.global === j || j.window === j || j.self === j) && (e = j);

                            function k(b, a) {
                                __p && __p();
                                b || (b = e.Object());
                                a || (a = e.Object());
                                var d = b.Number || e.Number,
                                    g = b.String || e.String,
                                    h = b.Object || e.Object,
                                    i = b.Date || e.Date,
                                    j = b.SyntaxError || e.SyntaxError,
                                    l = b.TypeError || e.TypeError,
                                    m = b.Math || e.Math;
                                b = b.JSON || e.JSON;
                                typeof b == "object" && b && (a.stringify = b.stringify, a.parse = b.parse);
                                b = h.prototype;
                                var n = b.toString,
                                    o, p, q, r = new i(-3509827334573292);
                                try {
                                    r = r.getUTCFullYear() == -109252 && r.getUTCMonth() === 0 && r.getUTCDate() === 1 && r.getUTCHours() == 10 && r.getUTCMinutes() == 37 && r.getUTCSeconds() == 6 && r.getUTCMilliseconds() == 708
                                } catch (a) {}

                                function s(b) {
                                    __p && __p();
                                    if (s[b] !== q) return s[b];
                                    var c;
                                    if (b == "bug-string-char-index") c = "a" [0] != "a";
                                    else if (b == "json") c = s("json-stringify") && s("json-parse");
                                    else {
                                        var e, f = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                        if (b == "json-stringify") {
                                            var h = a.stringify,
                                                j = typeof h == "function" && r;
                                            if (j) {
                                                (e = function() {
                                                    return 1
                                                }).toJSON = e;
                                                try {
                                                    j = h(0) === "0" && h(new d()) === "0" && h(new g()) == '""' && h(n) === q && h(q) === q && h() === q && h(e) === "1" && h([e]) == "[1]" && h([q]) == "[null]" && h(null) == "null" && h([q, n, null]) == "[null,null,null]" && h({
                                                        a: [e, !0, !1, null, "\0\b\n\f\r\t"]
                                                    }) == f && h(null, e) === "1" && h([1, 2], null, 1) == "[\n 1,\n 2\n]" && h(new i(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && h(new i(864e13)) == '"+275760-09-13T00:00:00.000Z"' && h(new i(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && h(new i(-1)) == '"1969-12-31T23:59:59.999Z"'
                                                } catch (a) {
                                                    j = !1
                                                }
                                            }
                                            c = j
                                        }
                                        if (b == "json-parse") {
                                            h = a.parse;
                                            if (typeof h == "function") try {
                                                if (h("0") === 0 && !h(!1)) {
                                                    e = h(f);
                                                    var k = e.a.length == 5 && e.a[0] === 1;
                                                    if (k) {
                                                        try {
                                                            k = !h('"\t"')
                                                        } catch (a) {}
                                                        if (k) try {
                                                            k = h("01") !== 1
                                                        } catch (a) {}
                                                        if (k) try {
                                                            k = h("1.") !== 1
                                                        } catch (a) {}
                                                    }
                                                }
                                            } catch (a) {
                                                k = !1
                                            }
                                            c = k
                                        }
                                    }
                                    return s[b] = !!c
                                }
                                if (!s("json")) {
                                    var t = "[object Function]",
                                        u = "[object Date]",
                                        v = "[object Number]",
                                        w = "[object String]",
                                        x = "[object Array]",
                                        y = "[object Boolean]",
                                        z = s("bug-string-char-index");
                                    if (!r) var A = m.floor,
                                        B = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                        C = function(a, b) {
                                            return B[b] + 365 * (a - 1970) + A((a - 1969 + (b = +(b > 1))) / 4) - A((a - 1901 + b) / 100) + A((a - 1601 + b) / 400)
                                        };
                                    (o = b.hasOwnProperty) || (o = function(a) {
                                        var b = {},
                                            c;
                                        (b.__proto__ = null, b.__proto__ = {
                                            toString: 1
                                        }, b).toString != n ? o = function(a) {
                                            var b = this.__proto__;
                                            a = a in (this.__proto__ = null, this);
                                            this.__proto__ = b;
                                            return a
                                        } : (c = b.constructor, o = function(a) {
                                            var b = (this.constructor || c).prototype;
                                            return a in this && !(a in b && this[a] === b[a])
                                        });
                                        return o.call(this, a)
                                    });
                                    p = function(a, b) {
                                        __p && __p();
                                        var d = 0,
                                            e, f;
                                        (e = function() {
                                            this.valueOf = 0
                                        }).prototype.valueOf = 0;
                                        f = new e();
                                        for (e in f) o.call(f, e) && d++;
                                        f = null;
                                        !d ? (f = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], p = function(a, b) {
                                            var d = n.call(a) == t,
                                                e, g = !d && typeof a.constructor != "function" && c[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
                                            for (e in a) !(d && e == "prototype") && g.call(a, e) && b(e);
                                            for (d = f.length; e = f[--d]; g.call(a, e) && b(e));
                                        }) : d == 2 ? p = function(a, b) {
                                            var c = {},
                                                d = n.call(a) == t,
                                                e;
                                            for (e in a) !(d && e == "prototype") && !o.call(c, e) && (c[e] = 1) && o.call(a, e) && b(e)
                                        } : p = function(a, b) {
                                            var c = n.call(a) == t,
                                                d, e;
                                            for (d in a) !(c && d == "prototype") && o.call(a, d) && !(e = d === "constructor") && b(d);
                                            (e || o.call(a, d = "constructor")) && b(d)
                                        };
                                        return p(a, b)
                                    };
                                    if (!s("json-stringify")) {
                                        var D = {
                                                92: "\\\\",
                                                34: '\\"',
                                                8: "\\b",
                                                12: "\\f",
                                                10: "\\n",
                                                13: "\\r",
                                                9: "\\t"
                                            },
                                            E = "000000",
                                            F = function(a, b) {
                                                return (E + (b || 0)).slice(-a)
                                            },
                                            G = "\\u00",
                                            H = function(a) {
                                                __p && __p();
                                                var b = '"',
                                                    c = 0,
                                                    d = a.length,
                                                    e = !z || d > 10,
                                                    f = e && (z ? a.split("") : a);
                                                for (; c < d; c++) {
                                                    var g = a.charCodeAt(c);
                                                    switch (g) {
                                                        case 8:
                                                        case 9:
                                                        case 10:
                                                        case 12:
                                                        case 13:
                                                        case 34:
                                                        case 92:
                                                            b += D[g];
                                                            break;
                                                        default:
                                                            if (g < 32) {
                                                                b += G + F(2, g.toString(16));
                                                                break
                                                            }
                                                            b += e ? f[c] : a.charAt(c)
                                                    }
                                                }
                                                return b + '"'
                                            },
                                            I = function(a, b, c, d, e, f, g) {
                                                __p && __p();
                                                var h, i, j, k, m, r, s, t, z, B;
                                                try {
                                                    h = b[a]
                                                } catch (a) {}
                                                if (typeof h == "object" && h) {
                                                    i = n.call(h);
                                                    if (i == u && !o.call(h, "toJSON"))
                                                        if (h > -1 / 0 && h < 1 / 0) {
                                                            if (C) {
                                                                m = A(h / 864e5);
                                                                for (j = A(m / 365.2425) + 1970 - 1; C(j + 1, 0) <= m; j++);
                                                                for (k = A((m - C(j, 0)) / 30.42); C(j, k + 1) <= m; k++);
                                                                m = 1 + m - C(j, k);
                                                                r = (h % 864e5 + 864e5) % 864e5;
                                                                s = A(r / 36e5) % 24;
                                                                t = A(r / 6e4) % 60;
                                                                z = A(r / 1e3) % 60;
                                                                r = r % 1e3
                                                            } else j = h.getUTCFullYear(), k = h.getUTCMonth(), m = h.getUTCDate(), s = h.getUTCHours(), t = h.getUTCMinutes(), z = h.getUTCSeconds(), r = h.getUTCMilliseconds();
                                                            h = (j <= 0 || j >= 1e4 ? (j < 0 ? "-" : "+") + F(6, j < 0 ? -j : j) : F(4, j)) + "-" + F(2, k + 1) + "-" + F(2, m) + "T" + F(2, s) + ":" + F(2, t) + ":" + F(2, z) + "." + F(3, r) + "Z"
                                                        } else h = null;
                                                    else typeof h.toJSON == "function" && (i != v && i != w && i != x || o.call(h, "toJSON")) && (h = h.toJSON(a))
                                                }
                                                c && (h = c.call(b, a, h));
                                                if (h === null) return "null";
                                                i = n.call(h);
                                                if (i == y) return "" + h;
                                                else if (i == v) return h > -1 / 0 && h < 1 / 0 ? "" + h : "null";
                                                else if (i == w) return H("" + h);
                                                if (typeof h == "object") {
                                                    for (j = g.length; j--;)
                                                        if (g[j] === h) throw l();
                                                    g.push(h);
                                                    B = [];
                                                    k = f;
                                                    f += e;
                                                    if (i == x) {
                                                        for (m = 0, j = h.length; m < j; m++) s = I(m, h, c, d, e, f, g), B.push(s === q ? "null" : s);
                                                        t = B.length ? e ? "[\n" + f + B.join(",\n" + f) + "\n" + k + "]" : "[" + B.join(",") + "]" : "[]"
                                                    } else p(d || h, function(a) {
                                                        var b = I(a, h, c, d, e, f, g);
                                                        b !== q && B.push(H(a) + ":" + (e ? " " : "") + b)
                                                    }), t = B.length ? e ? "{\n" + f + B.join(",\n" + f) + "\n" + k + "}" : "{" + B.join(",") + "}" : "{}";
                                                    g.pop();
                                                    return t
                                                }
                                            };
                                        a.stringify = function(a, b, d) {
                                            __p && __p();
                                            var e, f, g, h;
                                            if (c[typeof b] && b)
                                                if ((h = n.call(b)) == t) f = b;
                                                else if (h == x) {
                                                g = {};
                                                for (var i = 0, j = b.length, k; i < j; k = b[i++], (h = n.call(k), h == w || h == v) && (g[k] = 1));
                                            }
                                            if (d)
                                                if ((h = n.call(d)) == v) {
                                                    if ((d -= d % 1) > 0)
                                                        for (e = "", d > 10 && (d = 10); e.length < d; e += " ");
                                                } else h == w && (e = d.length <= 10 ? d : d.slice(0, 10));
                                            return I("", (k = {}, k[""] = a, k), f, g, e, "", [])
                                        }
                                    }
                                    if (!s("json-parse")) {
                                        var J = g.fromCharCode,
                                            K = {
                                                92: "\\",
                                                34: '"',
                                                47: "/",
                                                98: "\b",
                                                116: "\t",
                                                110: "\n",
                                                102: "\f",
                                                114: "\r"
                                            },
                                            L, M, N = function() {
                                                L = M = null;
                                                throw j()
                                            },
                                            O = function() {
                                                __p && __p();
                                                var a = M,
                                                    b = a.length,
                                                    c, d, e, f, g;
                                                while (L < b) {
                                                    g = a.charCodeAt(L);
                                                    switch (g) {
                                                        case 9:
                                                        case 10:
                                                        case 13:
                                                        case 32:
                                                            L++;
                                                            break;
                                                        case 123:
                                                        case 125:
                                                        case 91:
                                                        case 93:
                                                        case 58:
                                                        case 44:
                                                            c = z ? a.charAt(L) : a[L];
                                                            L++;
                                                            return c;
                                                        case 34:
                                                            for (c = "@", L++; L < b;) {
                                                                g = a.charCodeAt(L);
                                                                if (g < 32) N();
                                                                else if (g == 92) {
                                                                    g = a.charCodeAt(++L);
                                                                    switch (g) {
                                                                        case 92:
                                                                        case 34:
                                                                        case 47:
                                                                        case 98:
                                                                        case 116:
                                                                        case 110:
                                                                        case 102:
                                                                        case 114:
                                                                            c += K[g];
                                                                            L++;
                                                                            break;
                                                                        case 117:
                                                                            d = ++L;
                                                                            for (e = L + 4; L < e; L++) g = a.charCodeAt(L), g >= 48 && g <= 57 || g >= 97 && g <= 102 || g >= 65 && g <= 70 || N();
                                                                            c += J("0x" + a.slice(d, L));
                                                                            break;
                                                                        default:
                                                                            N()
                                                                    }
                                                                } else {
                                                                    if (g == 34) break;
                                                                    g = a.charCodeAt(L);
                                                                    d = L;
                                                                    while (g >= 32 && g != 92 && g != 34) g = a.charCodeAt(++L);
                                                                    c += a.slice(d, L)
                                                                }
                                                            }
                                                            if (a.charCodeAt(L) == 34) {
                                                                L++;
                                                                return c
                                                            }
                                                            N();
                                                        default:
                                                            d = L;
                                                            g == 45 && (f = !0, g = a.charCodeAt(++L));
                                                            if (g >= 48 && g <= 57) {
                                                                g == 48 && (g = a.charCodeAt(L + 1), g >= 48 && g <= 57) && N();
                                                                f = !1;
                                                                for (; L < b && (g = a.charCodeAt(L), g >= 48 && g <= 57); L++);
                                                                if (a.charCodeAt(L) == 46) {
                                                                    e = ++L;
                                                                    for (; e < b && (g = a.charCodeAt(e), g >= 48 && g <= 57); e++);
                                                                    e == L && N();
                                                                    L = e
                                                                }
                                                                g = a.charCodeAt(L);
                                                                if (g == 101 || g == 69) {
                                                                    g = a.charCodeAt(++L);
                                                                    (g == 43 || g == 45) && L++;
                                                                    for (e = L; e < b && (g = a.charCodeAt(e), g >= 48 && g <= 57); e++);
                                                                    e == L && N();
                                                                    L = e
                                                                }
                                                                return +a.slice(d, L)
                                                            }
                                                            f && N();
                                                            if (a.slice(L, L + 4) == "true") {
                                                                L += 4;
                                                                return !0
                                                            } else if (a.slice(L, L + 5) == "false") {
                                                                L += 5;
                                                                return !1
                                                            } else if (a.slice(L, L + 4) == "null") {
                                                                L += 4;
                                                                return null
                                                            }
                                                            N()
                                                    }
                                                }
                                                return "$"
                                            },
                                            P = function(a) {
                                                __p && __p();
                                                var b, c;
                                                a == "$" && N();
                                                if (typeof a == "string") {
                                                    if ((z ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                                                    if (a == "[") {
                                                        b = [];
                                                        for (;; c || (c = !0)) {
                                                            a = O();
                                                            if (a == "]") break;
                                                            c && (a == "," ? (a = O(), a == "]" && N()) : N());
                                                            a == "," && N();
                                                            b.push(P(a))
                                                        }
                                                        return b
                                                    } else if (a == "{") {
                                                        b = {};
                                                        for (;; c || (c = !0)) {
                                                            a = O();
                                                            if (a == "}") break;
                                                            c && (a == "," ? (a = O(), a == "}" && N()) : N());
                                                            (a == "," || typeof a != "string" || (z ? a.charAt(0) : a[0]) != "@" || O() != ":") && N();
                                                            b[a.slice(1)] = P(O())
                                                        }
                                                        return b
                                                    }
                                                    N()
                                                }
                                                return a
                                            },
                                            Q = function(a, b, c) {
                                                c = R(a, b, c);
                                                c === q ? delete a[b] : a[b] = c
                                            },
                                            R = function(a, b, c) {
                                                var d = a[b],
                                                    e;
                                                if (typeof d == "object" && d)
                                                    if (n.call(d) == x)
                                                        for (e = d.length; e--;) Q(d, e, c);
                                                    else p(d, function(a) {
                                                        Q(d, a, c)
                                                    });
                                                return c.call(a, b, d)
                                            };
                                        a.parse = function(a, b) {
                                            var c;
                                            L = 0;
                                            M = "" + a;
                                            a = P(O());
                                            O() != "$" && N();
                                            L = M = null;
                                            return b && n.call(b) == t ? R((c = {}, c[""] = a, c), "", b) : a
                                        }
                                    }
                                }
                                a.runInContext = k;
                                return a
                            }
                            if (d && !b) k(e, d);
                            else {
                                var l = e.JSON,
                                    m = e.JSON3,
                                    n = !1,
                                    o = k(e, e.JSON3 = {
                                        noConflict: function() {
                                            n || (n = !0, e.JSON = l, e.JSON3 = m, l = m = null);
                                            return o
                                        }
                                    });
                                e.JSON = {
                                    parse: o.parse,
                                    stringify: o.stringify
                                }
                            }
                            b && i(function() {
                                return o
                            })
                        }).call(this)
                    }
                    var k = !1,
                        l = function() {
                            k || (k = !0, j());
                            return h.exports
                        };
                    b = function(a) {
                        switch (a) {
                            case void 0:
                                return l()
                        }
                    };
                    e.exports = b
                }), null);
                __d("json3", ["json3-3.3.2"], (function(a, b, c, d, e, f) {
                    e.exports = b("json3-3.3.2")()
                }), null);
                __d("ES", ["ES5Array", "ES5ArrayPrototype", "ES5Date", "ES5FunctionPrototype", "ES5Object", "ES5StringPrototype", "ES6Array", "ES6ArrayPrototype", "ES6DatePrototype", "ES6Number", "ES6Object", "ES7ArrayPrototype", "ES7Object", "ES7StringPrototype", "json3"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {}.toString,
                        h = {
                            "JSON.stringify": b("json3").stringify,
                            "JSON.parse": b("json3").parse
                        };
                    d = {
                        "Array.prototype": b("ES5ArrayPrototype"),
                        "Function.prototype": b("ES5FunctionPrototype"),
                        "String.prototype": b("ES5StringPrototype"),
                        Object: b("ES5Object"),
                        Array: b("ES5Array"),
                        Date: b("ES5Date")
                    };
                    f = {
                        Object: b("ES6Object"),
                        "Array.prototype": b("ES6ArrayPrototype"),
                        "Date.prototype": b("ES6DatePrototype"),
                        Number: b("ES6Number"),
                        Array: b("ES6Array")
                    };
                    b = {
                        Object: b("ES7Object"),
                        "String.prototype": b("ES7StringPrototype"),
                        "Array.prototype": b("ES7ArrayPrototype")
                    };

                    function a(a) {
                        __p && __p();
                        for (var b in a) {
                            if (!Object.prototype.hasOwnProperty.call(a, b)) continue;
                            var c = a[b],
                                d = b.split(".");
                            if (d.length === 2) {
                                var e = d[0],
                                    f = d[1];
                                if (!e || !f || !window[e] || !window[e][f]) {
                                    var g = e ? window[e] : "-",
                                        i = e && window[e] && f ? window[e][f] : "-";
                                    throw new Error("Unexpected state (t11975770): " + (e + ", " + f + ", " + g + ", " + i + ", " + b))
                                }
                            }
                            e = d.length === 2 ? window[d[0]][d[1]] : window[b];
                            for (var j in c) {
                                if (!Object.prototype.hasOwnProperty.call(c, j)) continue;
                                if (typeof c[j] !== "function") {
                                    h[b + "." + j] = c[j];
                                    continue
                                }
                                f = e[j];
                                h[b + "." + j] = f && /\{\s+\[native code\]\s\}/.test(f) ? f : c[j]
                            }
                        }
                    }
                    a(d);
                    a(f);
                    a(b);

                    function c(a, b, c) {
                        var d = c ? g.call(a).slice(8, -1) + ".prototype" : a,
                            e = h[d + "." + b] || a[b];
                        if (typeof e === "function") {
                            for (var f = arguments.length, i = new Array(f > 3 ? f - 3 : 0), j = 3; j < f; j++) i[j - 3] = arguments[j];
                            return e.apply(a, i)
                        } else if (e) return e;
                        throw new Error("Polyfill " + d + " does not have implementation of " + b)
                    }
                    e.exports = c
                }), null);
                __d("sdk.babelHelpers", ["ES5FunctionPrototype", "ES5Object", "ES6Object"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {},
                        h = Object.prototype.hasOwnProperty;
                    g.inheritsLoose = function(a, c) {
                        b("ES6Object").assign(a, c);
                        a.prototype = b("ES5Object").create(c && c.prototype);
                        a.prototype.constructor = a;
                        a.__superConstructor__ = c;
                        return c
                    };
                    g.inherits = g.inheritsLoose;
                    g.wrapNativeSuper = function(a) {
                        __p && __p();
                        var b = typeof Map === "function" ? new Map() : void 0;
                        g.wrapNativeSuper = function(a) {
                            __p && __p();
                            if (a === null) return null;
                            if (typeof a !== "function") throw new TypeError("Super expression must either be null or a function");
                            if (b !== void 0) {
                                if (b.has(a)) return b.get(a);
                                b.set(a, c)
                            }
                            g.inheritsLoose(c, a);

                            function c() {
                                a.apply(this, arguments)
                            }
                            return c
                        };
                        return g.wrapNativeSuper(a)
                    };
                    g.assertThisInitialized = function(a) {
                        if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return a
                    };
                    g._extends = b("ES6Object").assign;
                    g["extends"] = g._extends;
                    g.construct = function(a, b) {
                        var c = [null];
                        c.push.apply(c, b);
                        return new(Function.prototype.bind.apply(a, c))()
                    };
                    g.objectWithoutPropertiesLoose = function(a, b) {
                        var c = {};
                        for (var d in a) {
                            if (!h.call(a, d) || b.indexOf(d) >= 0) continue;
                            c[d] = a[d]
                        }
                        return c
                    };
                    g.objectWithoutProperties = g.objectWithoutPropertiesLoose;
                    g.taggedTemplateLiteralLoose = function(a, b) {
                        b || (b = a.slice(0));
                        a.raw = b;
                        return a
                    };
                    g.bind = b("ES5FunctionPrototype").bind;
                    e.exports = g
                }), null);
                var ES = require('ES');
                var babelHelpers = require('sdk.babelHelpers');
                (function(a, b) {
                    var c = "keys",
                        d = "values",
                        e = "entries",
                        f = function() {
                            var a = h(Array),
                                b;
                            a || (b = function() {
                                "use strict";

                                function a(a, b) {
                                    this.$1 = a, this.$2 = b, this.$3 = 0
                                }
                                var b = a.prototype;
                                b.next = function() {
                                    if (this.$1 == null) return {
                                        value: void 0,
                                        done: !0
                                    };
                                    var a = this.$1,
                                        b = this.$1.length,
                                        f = this.$3,
                                        g = this.$2;
                                    if (f >= b) {
                                        this.$1 = void 0;
                                        return {
                                            value: void 0,
                                            done: !0
                                        }
                                    }
                                    this.$3 = f + 1;
                                    if (g === c) return {
                                        value: f,
                                        done: !1
                                    };
                                    else if (g === d) return {
                                        value: a[f],
                                        done: !1
                                    };
                                    else if (g === e) return {
                                        value: [f, a[f]],
                                        done: !1
                                    }
                                };
                                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                                    return this
                                };
                                return a
                            }());
                            return {
                                keys: a ? function(a) {
                                    return a.keys()
                                } : function(a) {
                                    return new b(a, c)
                                },
                                values: a ? function(a) {
                                    return a.values()
                                } : function(a) {
                                    return new b(a, d)
                                },
                                entries: a ? function(a) {
                                    return a.entries()
                                } : function(a) {
                                    return new b(a, e)
                                }
                            }
                        }(),
                        g = function() {
                            var a = h(String),
                                b;
                            a || (b = function() {
                                "use strict";

                                function a(a) {
                                    this.$1 = a, this.$2 = 0
                                }
                                var b = a.prototype;
                                b.next = function() {
                                    if (this.$1 == null) return {
                                        value: void 0,
                                        done: !0
                                    };
                                    var a = this.$2,
                                        b = this.$1,
                                        c = b.length;
                                    if (a >= c) {
                                        this.$1 = void 0;
                                        return {
                                            value: void 0,
                                            done: !0
                                        }
                                    }
                                    var d = b.charCodeAt(a);
                                    if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
                                    else {
                                        c = b.charCodeAt(a + 1);
                                        c < 56320 || c > 57343 ? d = b[a] : d = b[a] + b[a + 1]
                                    }
                                    this.$2 = a + d.length;
                                    return {
                                        value: d,
                                        done: !1
                                    }
                                };
                                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                                    return this
                                };
                                return a
                            }());
                            return {
                                keys: function() {
                                    throw TypeError("Strings default iterator doesn't implement keys.")
                                },
                                values: a ? function(a) {
                                    return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()
                                } : function(a) {
                                    return new b(a)
                                },
                                entries: function() {
                                    throw TypeError("Strings default iterator doesn't implement entries.")
                                }
                            }
                        }();

                    function h(a) {
                        return typeof a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof a.prototype.values === "function" && typeof a.prototype.keys === "function" && typeof a.prototype.entries === "function"
                    }
                    var i = function() {
                            "use strict";

                            function a(a, b) {
                                this.$1 = a, this.$2 = b, this.$3 = ES("Object", "keys", !1, a), this.$4 = 0
                            }
                            var b = a.prototype;
                            b.next = function() {
                                var a = this.$3.length,
                                    b = this.$4,
                                    f = this.$2,
                                    g = this.$3[b];
                                if (b >= a) {
                                    this.$1 = void 0;
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }
                                this.$4 = b + 1;
                                if (f === c) return {
                                    value: g,
                                    done: !1
                                };
                                else if (f === d) return {
                                    value: this.$1[g],
                                    done: !1
                                };
                                else if (f === e) return {
                                    value: [g, this.$1[g]],
                                    done: !1
                                }
                            };
                            b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                                return this
                            };
                            return a
                        }(),
                        j = {
                            keys: function(a) {
                                return new i(a, c)
                            },
                            values: function(a) {
                                return new i(a, d)
                            },
                            entries: function(a) {
                                return new i(a, e)
                            }
                        };

                    function k(a, b) {
                        if (typeof a === "string") return g[b || d](a);
                        else if (ES("Array", "isArray", !1, a)) return f[b || d](a);
                        else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                        else return j[b || e](a)
                    }
                    ES("Object", "assign", !1, k, {
                        KIND_KEYS: c,
                        KIND_VALUES: d,
                        KIND_ENTRIES: e,
                        keys: function(a) {
                            return k(a, c)
                        },
                        values: function(a) {
                            return k(a, d)
                        },
                        entries: function(a) {
                            return k(a, e)
                        },
                        generic: j.entries
                    });
                    a.FB_enumerate = k
                })(typeof global === "undefined" ? this : global);
                __d("UrlMapConfig", [], {
                    "www": "www.facebook.com",
                    "m": "m.facebook.com",
                    "business": "business.facebook.com",
                    "api": "api.facebook.com",
                    "api_read": "api-read.facebook.com",
                    "graph": "graph.facebook.com",
                    "an": "an.facebook.com",
                    "fbcdn": "static.xx.fbcdn.net",
                    "cdn": "staticxx.facebook.com"
                });
                __d("JSSDKRuntimeConfig", [], {
                    "locale": "en_US",
                    "revision": "1001277952",
                    "rtl": false,
                    "sdkab": null,
                    "sdkns": "FB",
                    "sdkurl": "https:\/\/connect.facebook.net\/en_US\/sdk.js"
                });
                __d("JSSDKConfig", [], {
                    "features": {
                        "allow_non_canvas_app_events": false,
                        "error_handling": {
                            "rate": 4
                        },
                        "e2e_ping_tracking": {
                            "rate": 0.1
                        },
                        "xd_timeout": {
                            "rate": 1,
                            "value": 60000
                        },
                        "use_bundle": false,
                        "should_log_response_error": true,
                        "popup_blocker_scribe_logging": {
                            "rate": 100
                        },
                        "https_only_enforce_starting": 2538809200000,
                        "https_only_learn_more": "https:\/\/developers.facebook.com\/blog\/post\/2018\/06\/08\/enforce-https-facebook-login\/",
                        "https_only_scribe_logging": {
                            "rate": 1
                        },
                        "log_perf": {
                            "rate": 0.001
                        },
                        "use_cors_oauth_status": {
                            "rate": 100
                        },
                        "xd_arbiter_register_new": {
                            "rate": 100
                        },
                        "xd_arbiter_handle_message_new": {
                            "rate": 100
                        }
                    }
                });
                __d("JSSDKCssConfig", [], {
                    "rules": ".fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}\u0040keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yd\/r\/Cou7n-nqK52.gif) no-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100\u0025;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100\u0025}.fb_dialog.fb_dialog_mobile.loading{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ya\/r\/3rhSv5V8j3o.gif) white no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100\u0025}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100\u0025;position:absolute;right:0;top:0;width:100\u0025;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100\u0025}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y9\/r\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yD\/r\/t-wz8gw1xG1.png);background-position:50\u0025 50\u0025;background-repeat:no-repeat;height:24px;width:24px}\u0040keyframes rotateSpinner{0\u0025{transform:rotate(0deg)}100\u0025{transform:rotate(360deg)}}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100\u0025}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100\u0025}",
                    "components": ["css:fb.css.base", "css:fb.css.dialog", "css:fb.css.iframewidget"]
                });
                __d("JSSDKXDConfig", [], {
                    "XdUrl": "\/connect\/xd_arbiter.php?version=44",
                    "XdBundleUrl": "\/connect\/xd_arbiter\/r\/psyE9H7bbzL.js?version=44",
                    "useCdn": true
                });
                __d("JSSDKCanvasPrefetcherConfig", [], {
                    "blacklist": [144959615576466, 768691303149786, 320528941393723],
                    "sampleRate": 500
                });
                __d("DOMWrapper", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    var g, h;
                    a = {
                        setRoot: function(a) {
                            g = a
                        },
                        getRoot: function() {
                            return g || document.body
                        },
                        setWindow: function(a) {
                            h = a
                        },
                        getWindow: function() {
                            return h || self
                        }
                    };
                    e.exports = a
                }), null);
                __d("dotAccess", [], (function(a, b, c, d, e, f) {
                    function a(a, b, c) {
                        b = b.split(".");
                        do {
                            var d = b.shift();
                            a = a[d] || c && (a[d] = {})
                        } while (b.length && a);
                        return a
                    }
                    e.exports = a
                }), null);
                __d("guid", [], (function(a, b, c, d, e, f) {
                    function a() {
                        return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
                    }
                    e.exports = a
                }), null);
                __d("wrapFunction", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {};
                    a = function(a, b, c) {
                        return function() {
                            var d = b in g ? g[b](a, c) : a;
                            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
                            return d.apply(this, f)
                        }
                    };
                    a.setWrapper = function(a, b) {
                        g[b] = a
                    };
                    e.exports = a
                }), null);
                __d("GlobalCallback", ["DOMWrapper", "dotAccess", "guid", "wrapFunction"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g, h;
                    a = {
                        setPrefix: function(a) {
                            g = b("dotAccess")(b("DOMWrapper").getWindow(), a, !0), h = a
                        },
                        create: function(a, c) {
                            g || this.setPrefix("__globalCallbacks");
                            var d = b("guid")();
                            g[d] = b("wrapFunction")(a, "entry", (a = c) != null ? a : "GlobalCallback");
                            return h + "." + d
                        },
                        remove: function(a) {
                            a = a.substring(h.length + 1);
                            delete g[a]
                        }
                    };
                    e.exports = a
                }), null);
                __d("Log", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = {
                        DEBUG: 3,
                        INFO: 2,
                        WARNING: 1,
                        ERROR: 0
                    };
                    b = function(a, b, c) {
                        for (var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3; f < d; f++) e[f - 3] = arguments[f];
                        var h = 0,
                            i = c.replace(/%s/g, function() {
                                return String(e[h++])
                            }),
                            j = window.console;
                        j && g.level >= b && j[a in j ? a : "log"](i)
                    };
                    var g = {
                        level: -1,
                        Level: a,
                        debug: ES(b, "bind", !0, null, "debug", a.DEBUG),
                        info: ES(b, "bind", !0, null, "info", a.INFO),
                        warn: ES(b, "bind", !0, null, "warn", a.WARNING),
                        error: ES(b, "bind", !0, null, "error", a.ERROR),
                        log: b
                    };
                    e.exports = g
                }), null);
                __d("ObservableMixin", [], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function a() {
                        this.__observableEvents = {}
                    }
                    a.prototype = {
                        inform: function(a) {
                            __p && __p();
                            var b = Array.prototype.slice.call(arguments, 1),
                                c = Array.prototype.slice.call(this.getSubscribers(a));
                            for (var d = 0; d < c.length; d++) {
                                if (c[d] === null) continue;
                                try {
                                    c[d].apply(this, b)
                                } catch (a) {
                                    window.setTimeout(function() {
                                        throw a
                                    }, 0)
                                }
                            }
                            return this
                        },
                        getSubscribers: function(a) {
                            return this.__observableEvents[a] || (this.__observableEvents[a] = [])
                        },
                        clearSubscribers: function(a) {
                            a && (this.__observableEvents[a] = []);
                            return this
                        },
                        subscribe: function(a, b) {
                            a = this.getSubscribers(a);
                            a.push(b);
                            return this
                        },
                        unsubscribe: function(a, b) {
                            a = this.getSubscribers(a);
                            for (var c = 0; c < a.length; c++)
                                if (a[c] === b) {
                                    a.splice(c, 1);
                                    break
                                }
                            return this
                        }
                    };
                    e.exports = a
                }), null);
                __d("QueryString", [], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function a(a) {
                        __p && __p();
                        var b = [];
                        ES(ES("Object", "keys", !1, a).sort(), "forEach", !0, function(c) {
                            var d = a[c];
                            if (d === void 0) return;
                            if (d === null) {
                                b.push(c);
                                return
                            }
                            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
                        });
                        return b.join("&")
                    }

                    function b(a, b) {
                        __p && __p();
                        b === void 0 && (b = !1);
                        var c = {};
                        if (a === "") return c;
                        a = a.split("&");
                        for (var d = 0; d < a.length; d++) {
                            var e = a[d].split("=", 2),
                                f = decodeURIComponent(e[0]);
                            if (b && Object.prototype.hasOwnProperty.call(c, f)) throw new URIError("Duplicate key: " + f);
                            c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null
                        }
                        return c
                    }

                    function c(a, b) {
                        return a + (ES(a, "indexOf", !0, "?") !== -1 ? "&" : "?") + (typeof b === "string" ? b : g.encode(b))
                    }
                    var g = {
                        encode: a,
                        decode: b,
                        appendToUrl: c
                    };
                    e.exports = g
                }), null);
                __d("Env", [], (function(a, b, c, d, e, f) {
                    b = {
                        ajaxpipe_token: null,
                        compat_iframe_token: null,
                        iframeKey: "",
                        iframeTarget: "",
                        iframeToken: "",
                        isCQuick: !1,
                        start: ES("Date", "now", !1),
                        nocatch: !1
                    };
                    a.Env && ES("Object", "assign", !1, b, a.Env);
                    a.Env = b;
                    e.exports = b
                }), null);
                __d("TAALOpcodes", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    a = {
                        PREVIOUS_FILE: 1,
                        PREVIOUS_FRAME: 2,
                        PREVIOUS_DIR: 3,
                        FORCED_KEY: 4
                    };
                    e.exports = a
                }), null);
                __d("TAAL", ["TAALOpcodes"], (function(a, b, c, d, e, f) {
                    "use strict";
                    a = {
                        blameToPreviousFile: function(a) {
                            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FILE])
                        },
                        blameToPreviousFrame: function(a) {
                            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FRAME])
                        },
                        blameToPreviousDirectory: function(a) {
                            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_DIR])
                        },
                        applyOpcodes: function(a, b) {
                            return b && b.length ? a + " TAAL[" + b.join(";") + "]" : a
                        }
                    };
                    e.exports = a
                }), null);
                __d("ErrorSerializer", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();

                    function b(a) {
                        return "<![EX[" + ES("JSON", "stringify", !1, h(a)) + "]]>"
                    }

                    function c(a) {
                        __p && __p();
                        try {
                            var b = l(a, /^([\s\S]*)<\!\[EX\[(\[.*\])\]\]>([\s\S]*)$/);
                            if (!b) return k(a);
                            var c = b[0],
                                d = b[1];
                            b = b[2];
                            d = ES("JSON", "parse", !1, d);
                            var e = d[0];
                            d = d.slice(1);
                            e = k(e);
                            e.message = c + e.message + b;
                            d && d.length > 0 && (e.params = d);
                            return e
                        } catch (b) {
                            return {
                                message: "Unable to parse error message %s because %s",
                                params: [a, b.message]
                            }
                        }
                    }

                    function g(a) {
                        var b = a.message || "",
                            c = a.params || [],
                            d = 0;
                        a = b.replace(/%s/g, function() {
                            return d < c.length ? String(c[d++]) : "NOPARAM"
                        });
                        d < c.length && (a += " PARAMS" + ES("JSON", "stringify", !1, c.slice(d)));
                        return a
                    }

                    function d(a) {
                        return g(a) + i(a)
                    }

                    function h(a) {
                        return [a.message + i(a)].concat(j(a))
                    }

                    function i(a) {
                        var b = a.taalOpcodes;
                        a = a.forcedKey;
                        var c = [];
                        b && c.push.apply(c, b);
                        a && c.push("4" + a.replace(/[^\d\w]/g, "_"));
                        return c.length > 0 ? " TAAL[" + c.join(";") + "]" : ""
                    }

                    function j(a) {
                        return ES((a = a.params) != null ? a : [], "map", !0, function(a) {
                            return String(a)
                        })
                    }

                    function k(a) {
                        __p && __p();
                        var b = l(a, /^([\s\S]*) TAAL\[(.*)\]$/);
                        b = (b = b) != null ? b : [a, null];
                        var c = b[0];
                        b = b[1];
                        c = {
                            message: c
                        };
                        if (b) {
                            var d = [];
                            for (var b = b.split(";"), e = ES("Array", "isArray", !1, b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var g;
                                if (e) {
                                    if (f >= b.length) break;
                                    g = b[f++]
                                } else {
                                    f = b.next();
                                    if (f.done) break;
                                    g = f.value
                                }
                                g = g;
                                if (g === "1" || g === "2" || g === "3") d.push(parseInt(g, 10));
                                else if (g[0] === "4" && g.length > 1) c.forcedKey = g.substring(1);
                                else return {
                                    message: a
                                }
                            }
                            d.length > 0 && (c.taalOpcodes = d)
                        }
                        return c
                    }

                    function l(a, b) {
                        if (typeof a === "string") {
                            a = a.match(b);
                            if (a && a.length > 0) return a.slice(1)
                        }
                    }
                    e.exports = a.ErrorSerializer = {
                        parse: c,
                        stringify: b,
                        toFormattedMessage: d,
                        toFormattedMessageNoTAAL: g,
                        toMessageWithParams: h
                    }
                }), 3);
                __d("ex", ["ErrorSerializer"], (function(a, b, c, d, e, f) {
                    function a(a) {
                        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
                        var f = ES(d, "map", !0, function(a) {
                            return String(a)
                        });
                        return b("ErrorSerializer").stringify({
                            message: a,
                            params: f
                        })
                    }
                    e.exports = a
                }), null);
                __d("sprintf", [], (function(a, b, c, d, e, f) {
                    function a(a) {
                        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                        var e = 0;
                        return a.replace(/%s/g, function() {
                            return String(c[e++])
                        })
                    }
                    e.exports = a
                }), null);
                __d("invariant", ["Env", "TAAL", "ex", "sprintf"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = b("ex");

                    function a(a, c) {
                        __p && __p();
                        if (!a) {
                            var d = c;
                            for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), i = 2; i < e; i++) f[i - 2] = arguments[i];
                            if (typeof d === "number") {
                                var j = h(d, f),
                                    k = j.message,
                                    l = j.decoderLink;
                                d = k;
                                f.unshift(l)
                            } else if (d === void 0) {
                                d = "Invariant: ";
                                for (var m = 0; m < f.length; m++) d += "%s,"
                            }
                            d = b("TAAL").blameToPreviousFrame(d);
                            var n = new Error(g.apply(void 0, [d].concat(f)));
                            n.name = "Invariant Violation";
                            n.messageWithParams = [d].concat(f);
                            throw n
                        }
                    }

                    function h(a, c) {
                        var d = "Minified invariant #" + a + "; %s";
                        c.length > 0 && (d += " Params: " + ES(c, "map", !0, function(a) {
                            return "%s"
                        }).join(", "));
                        a = b("Env").show_invariant_decoder === !0 ? "visit " + i(a, c) + " to see the full message." : "";
                        return {
                            message: d,
                            decoderLink: a
                        }
                    }

                    function i(a, b) {
                        a = "https://our.intern.facebook.com/intern/invariant/" + a + "/";
                        b.length > 0 && (a += "?" + ES(b, "map", !0, function(a, b) {
                            return "args[" + b + "]=" + encodeURIComponent(String(a))
                        }).join("&"));
                        return a
                    }
                    e.exports = a
                }), null);
                __d("UrlMap", ["invariant", "UrlMapConfig"], (function(a, b, c, d, e, f, g) {
                    a = {
                        resolve: function(a) {
                            var c = "https";
                            if (a in b("UrlMapConfig")) return c + "://" + b("UrlMapConfig")[a];
                            a in b("UrlMapConfig") || g(0, 2511, a);
                            return ""
                        }
                    };
                    e.exports = a
                }), null);
                __d("ManagedError", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    a = function(a) {
                        "use strict";
                        babelHelpers.inheritsLoose(b, a);

                        function b(b, c) {
                            var d;
                            d = a.call(this, b !== null && b !== void 0 ? b : "") || this;
                            b !== null && b !== void 0 ? d.message = b : d.message = "";
                            d.innerError = c;
                            return d
                        }
                        return b
                    }(babelHelpers.wrapNativeSuper(Error));
                    e.exports = a
                }), null);
                __d("AssertionError", ["ManagedError"], (function(a, b, c, d, e, f) {
                    a = function(a) {
                        "use strict";
                        babelHelpers.inheritsLoose(b, a);

                        function b(b) {
                            return a.call(this, b) || this
                        }
                        return b
                    }(b("ManagedError"));
                    e.exports = a
                }), null);
                __d("Assert", ["AssertionError", "sprintf"], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function g(a, c) {
                        if (typeof a !== "boolean" || !a) throw new(b("AssertionError"))(c);
                        return a
                    }

                    function h(a, c, d) {
                        __p && __p();
                        var e;
                        if (c === void 0) e = "undefined";
                        else if (c === null) e = "null";
                        else {
                            var f = Object.prototype.toString.call(c);
                            e = /\s(\w*)/.exec(f)[1].toLowerCase()
                        }
                        g(ES(a, "indexOf", !0, e) !== -1, d || b("sprintf")("Expression is of type %s, not %s", e, a));
                        return c
                    }

                    function a(a, b, c) {
                        g(b instanceof a, c || "Expression not instance of type");
                        return b
                    }

                    function i(a, b) {
                        j["is" + a] = b, j["maybe" + a] = function(a, c) {
                            a != null && b(a, c)
                        }
                    }
                    var j = {
                        isInstanceOf: a,
                        isTrue: g,
                        isTruthy: function(a, b) {
                            return g(!!a, b)
                        },
                        type: h,
                        define: function(a, b) {
                            a = a.substring(0, 1).toUpperCase() + a.substring(1).toLowerCase(), i(a, function(a, c) {
                                g(b(a), c)
                            })
                        }
                    };
                    ES(["Array", "Boolean", "Date", "Function", "Null", "Number", "Object", "Regexp", "String", "Undefined"], "forEach", !0, function(a) {
                        i(a, ES(h, "bind", !0, null, a.toLowerCase()))
                    });
                    e.exports = j
                }), null);
                __d("Type", ["Assert"], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function g() {
                        var a = this.__mixins;
                        if (a)
                            for (var b = 0; b < a.length; b++) a[b].apply(this, arguments)
                    }

                    function h(a, b) {
                        if (b instanceof a) return !0;
                        if (b instanceof g)
                            for (var c = 0; c < b.__mixins.length; c++)
                                if (b.__mixins[c] == a) return !0;
                        return !1
                    }

                    function i(a, b) {
                        var c = a.prototype;
                        ES("Array", "isArray", !1, b) || (b = [b]);
                        for (var a = 0; a < b.length; a++) {
                            var d = b[a];
                            typeof d === "function" && (c.__mixins.push(d), d = d.prototype);
                            ES(ES("Object", "keys", !1, d), "forEach", !0, function(a) {
                                c[a] = d[a]
                            })
                        }
                    }

                    function j(a, c, d) {
                        __p && __p();
                        var e = c && Object.prototype.hasOwnProperty.call(c, "constructor") ? c.constructor : function() {
                            this.parent.apply(this, arguments)
                        };
                        b("Assert").isFunction(e);
                        if (a && a.prototype instanceof g === !1) throw new Error("parent type does not inherit from Type");
                        a = a || g;

                        function f() {}
                        f.prototype = a.prototype;
                        e.prototype = new f();
                        c && ES("Object", "assign", !1, e.prototype, c);
                        e.prototype.constructor = e;
                        e.parent = a;
                        e.prototype.__mixins = a.prototype.__mixins ? Array.prototype.slice.call(a.prototype.__mixins) : [];
                        d && i(e, d);
                        e.prototype.parent = function() {
                            this.parent = a.prototype.parent, a.apply(this, arguments)
                        };
                        e.prototype.parentCall = function(b) {
                            return a.prototype[b].apply(this, Array.prototype.slice.call(arguments, 1))
                        };
                        e.extend = function(a, b) {
                            return j(this, a, b)
                        };
                        return e
                    }
                    ES("Object", "assign", !1, g.prototype, {
                        instanceOf: function(a) {
                            return h(a, this)
                        }
                    });
                    ES("Object", "assign", !1, g, {
                        extend: function(a, b) {
                            return typeof a === "function" ? j.apply(null, arguments) : j(null, a, b)
                        },
                        instanceOf: h
                    });
                    e.exports = g
                }), null);
                __d("sdk.Model", ["ObservableMixin", "Type"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = b("Type").extend({
                        constructor: function(a) {
                            __p && __p();
                            this.parent();
                            var b = {},
                                c = this;
                            ES(ES("Object", "keys", !1, a), "forEach", !0, function(d) {
                                b[d] = a[d], c["set" + d] = function(a) {
                                    if (a === b[d]) return c;
                                    b[d] = a;
                                    c.inform(d + ".change", a);
                                    return c
                                }, c["get" + d] = function() {
                                    return b[d]
                                }
                            })
                        }
                    }, b("ObservableMixin"));
                    e.exports = a
                }), null);
                __d("sdk.Runtime", ["JSSDKRuntimeConfig", "sdk.Model"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {
                            UNKNOWN: 0,
                            PAGETAB: 1,
                            CANVAS: 2,
                            PLATFORM: 4
                        },
                        h = new(b("sdk.Model"))({
                            AccessToken: "",
                            AutoLogAppEvents: !1,
                            ClientID: "",
                            CookieUserID: "",
                            EnforceHttps: !1,
                            Environment: g.UNKNOWN,
                            Initialized: !1,
                            IsVersioned: !1,
                            KidDirectedSite: void 0,
                            Locale: b("JSSDKRuntimeConfig").locale,
                            LoggedIntoFacebook: void 0,
                            LoginStatus: void 0,
                            Revision: b("JSSDKRuntimeConfig").revision,
                            Rtl: b("JSSDKRuntimeConfig").rtl,
                            Scope: void 0,
                            SDKAB: b("JSSDKRuntimeConfig").sdkab,
                            SDKUrl: b("JSSDKRuntimeConfig").sdkurl,
                            SDKNS: b("JSSDKRuntimeConfig").sdkns,
                            UseCookie: !1,
                            UseLocalStorage: !0,
                            UserID: "",
                            Version: void 0
                        });
                    ES("Object", "assign", !1, h, {
                        ENVIRONMENTS: g,
                        isEnvironment: function(a) {
                            var b = this.getEnvironment();
                            return (a | b) === b
                        },
                        isCanvasEnvironment: function() {
                            return this.isEnvironment(g.CANVAS) || this.isEnvironment(g.PAGETAB)
                        }
                    });
                    (function() {
                        var a = /app_runner/.test(window.name) ? g.PAGETAB : /iframe_canvas/.test(window.name) ? g.CANVAS : g.UNKNOWN;
                        (a | g.PAGETAB) === a && (a |= g.CANVAS);
                        h.setEnvironment(a)
                    })();
                    e.exports = h
                }), null);
                __d("sdk.Cookie", ["QueryString", "sdk.Runtime"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = null;

                    function h(a, c, d, e) {
                        a = a + b("sdk.Runtime").getClientID();
                        e = e ? ";Secure" : "";
                        var f = g !== null && g !== ".";
                        f && (document.cookie = a + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT" + e, document.cookie = a + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT;domain=" + location.hostname + e);
                        var h = new Date(d).toUTCString();
                        document.cookie = a + "=" + c + (c && d === 0 ? "" : "; expires=" + h) + "; path=/" + (f ? "; domain=" + ((a = g) != null ? a : "") : "") + e
                    }

                    function i(a) {
                        a = a + b("sdk.Runtime").getClientID();
                        a = new RegExp("\\b" + a + "=([^;]*)\\b");
                        a = document.cookie.match(a);
                        if (a === null || a === void 0) return null;
                        else return a[1]
                    }
                    a = {
                        setDomain: function(a) {
                            g = a;
                            a = b("QueryString").encode({
                                base_domain: g !== null && g !== "." ? g : ""
                            });
                            var c = new Date();
                            c.setFullYear(c.getFullYear() + 1);
                            h("fbm_", a, c.getTime(), !0)
                        },
                        getDomain: function() {
                            return g
                        },
                        loadMeta: function() {
                            var a = i("fbm_");
                            if (a !== null && a !== void 0 && g === null) {
                                a = b("QueryString").decode(a);
                                g = a.base_domain;
                                return a
                            }
                            return null
                        },
                        loadSignedRequest: function() {
                            return i("fbsr_")
                        },
                        setSignedRequestCookie: function(a, b) {
                            if (a === "") throw new Error("Value passed to Cookie.setSignedRequestCookie was empty.");
                            h("fbsr_", a, b, !0)
                        },
                        clearSignedRequestCookie: function() {
                            this.loadMeta(), h("fbsr_", "", 0, !0)
                        },
                        setRaw: h,
                        getRaw: i
                    };
                    e.exports = a
                }), null);
                __d("Miny", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = "Miny1",
                        h = "wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("");
                    a = {
                        encode: function(a) {
                            __p && __p();
                            if (/^$|[~\\]|__proto__/.test(a)) return a;
                            a = a.match(/\w+|\W+/g);
                            var b, c = ES("Object", "create", !1, null);
                            for (b = 0; b < a.length; b++) c[a[b]] = (c[a[b]] || 0) + 1;
                            var d = ES("Object", "keys", !1, c);
                            d.sort(function(a, b) {
                                return c[b] - c[a]
                            });
                            for (b = 0; b < d.length; b++) {
                                var e = (b - b % 32) / 32;
                                c[d[b]] = e ? e.toString(32) + h[b % 32] : h[b % 32]
                            }
                            e = "";
                            for (b = 0; b < a.length; b++) e += c[a[b]];
                            d.unshift(g, d.length);
                            d.push(e);
                            return d.join("~")
                        }
                    };
                    e.exports = a
                }), null);
                __d("sdk.UA", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    a = navigator.userAgent;
                    var g = {
                            iphone: /\b(iPhone|iP[ao]d)/.test(a),
                            ipad: /\b(iP[ao]d)/.test(a),
                            android: /Android/i.test(a),
                            nativeApp: /FBAN\/\w+;/i.test(a) && !/FBAN\/mLite;/.test(a),
                            nativeAndroidApp: /FB_IAB\/\w+;/i.test(a),
                            nativeInstagramApp: /Instagram/i.test(a),
                            nativeMessengeriOSApp: /MessengerForiOS/i.test(a),
                            nativeMessengerAndroidApp: /Orca\-Android/i.test(a),
                            ucBrowser: /UCBrowser/i.test(a)
                        },
                        h = /Mobile/i.test(a),
                        i = {
                            ie: NaN,
                            firefox: NaN,
                            chrome: NaN,
                            webkit: NaN,
                            osx: NaN,
                            edge: NaN,
                            operaMini: NaN,
                            ucWeb: NaN
                        };
                    b = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a);
                    if (b) {
                        i.ie = b[1] ? parseFloat(b[1]) : b[4] ? parseFloat(b[4]) : NaN;
                        i.firefox = b[2] || "";
                        i.webkit = b[3] || "";
                        if (b[3]) {
                            c = /(?:Chrome\/(\d+\.\d+))/.exec(a);
                            i.chrome = c ? c[1] : "";
                            d = /(?:Edge\/(\d+\.\d+))/.exec(a);
                            i.edge = d ? d[1] : ""
                        }
                    }
                    f = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
                    f && (i.osx = f[1]);
                    b = /(?:Opera Mini\/(\d+(?:\.\d+)?))/.exec(a);
                    b && (i.operaMini = b[1]);
                    c = /(?:UCWEB\/(\d+(?:\.\d+))?)/.exec(a);
                    c && (i.ucWeb = c[1] || "2.0");

                    function j(a) {
                        return ES(String(a).split("."), "map", !0, function(a) {
                            return parseFloat(a)
                        })
                    }
                    var k = {};
                    ES(ES("Object", "keys", !1, i), "map", !0, function(a) {
                        var b = function() {
                            return parseFloat(i[a])
                        };
                        b.getVersionParts = function() {
                            return j(i[a])
                        };
                        k[a] = b
                    });
                    ES(ES("Object", "keys", !1, g), "map", !0, function(a) {
                        k[a] = function() {
                            return g[a]
                        }
                    });
                    k.mobile = function() {
                        return g.iphone || g.ipad || g.android || h
                    };
                    k.mTouch = function() {
                        return g.android || g.iphone || g.ipad
                    };
                    k.facebookInAppBrowser = function() {
                        return g.nativeApp || g.nativeAndroidApp
                    };
                    k.inAppBrowser = function() {
                        return g.nativeApp || g.nativeAndroidApp || g.nativeInstagramApp
                    };
                    k.mBasic = function() {
                        return !!(i.ucWeb || i.operaMini)
                    };
                    k.instagram = function() {
                        return g.nativeInstagramApp
                    };
                    k.messenger = function() {
                        return g.nativeMessengeriOSApp || g.nativeMessengerAndroidApp
                    };
                    e.exports = k
                }), null);
                __d("getBlankIframeSrc", ["sdk.UA"], (function(a, b, c, d, e, f) {
                    function a() {
                        return b("sdk.UA").ie() < 10 ? "javascript:false" : "about:blank"
                    }
                    e.exports = a
                }), null);
                __d("insertIframe", ["GlobalCallback", "getBlankIframeSrc", "guid"], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function a(a) {
                        __p && __p();
                        a.id = a.id || b("guid")();
                        a.name = a.name || b("guid")();
                        var c = !1,
                            d = !1,
                            e = function() {
                                c && !d && (d = !0, a.onload && a.onload(a.root.firstChild))
                            },
                            f = b("GlobalCallback").create(e);
                        if (document.attachEvent) {
                            var g = '<iframe id="' + a.id + '" name="' + a.name + '"' + (a.title ? ' title="' + a.title + '"' : "") + (a.className ? ' class="' + a.className + '"' : "") + ' style="border:none;' + (a.width ? "width:" + a.width + "px;" : "") + (a.height ? "height:" + a.height + "px;" : "") + '" src="' + b("getBlankIframeSrc")() + '" frameborder="0" scrolling="no" allowtransparency="true" onload="' + f + '()"></iframe>';
                            a.root.innerHTML = '<iframe src="' + b("getBlankIframeSrc")() + '" frameborder="0" scrolling="no" style="height:1px"></iframe>';
                            c = !0;
                            setTimeout(function() {
                                a.root.innerHTML = g, a.root.firstChild.src = a.url, a.onInsert && a.onInsert(a.root.firstChild)
                            }, 0)
                        } else {
                            f = document.createElement("iframe");
                            f.id = a.id;
                            f.name = a.name;
                            f.onload = e;
                            f.scrolling = "no";
                            f.style.border = "none";
                            f.style.overflow = "hidden";
                            a.title && (f.title = a.title);
                            a.className && (f.className = a.className);
                            a.height !== void 0 && (f.style.height = a.height + "px");
                            a.width !== void 0 && (a.width == "100%" ? f.style.width = a.width : f.style.width = a.width + "px");
                            a.root.appendChild(f);
                            c = !0;
                            f.src = a.url;
                            a.onInsert && a.onInsert(f)
                        }
                    }
                    e.exports = a
                }), null);
                __d("sdk.domReady", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g;
                    b = "readyState" in document ? /loaded|complete/.test(document.readyState) : !!document.body;

                    function h() {
                        if (!g) return;
                        var a;
                        while (a = g.shift()) a();
                        g = null
                    }

                    function a(a) {
                        if (g) {
                            g.push(a);
                            return
                        } else a()
                    }
                    if (!b) {
                        g = [];
                        document.addEventListener ? (document.addEventListener("DOMContentLoaded", h, !1), window.addEventListener("load", h, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", h), window.attachEvent("onload", h));
                        if (document.documentElement.doScroll && window === window.top) {
                            c = function a() {
                                try {
                                    document.documentElement.doScroll("left")
                                } catch (b) {
                                    setTimeout(a, 0);
                                    return
                                }
                                h()
                            };
                            c()
                        }
                    }
                    e.exports = a
                }), 3);
                __d("sdk.Content", ["Log", "sdk.domReady", "sdk.UA"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g, h, i = {
                        append: function(a, c) {
                            c || (!g ? (g = c = document.getElementById("fb-root"), c || (b("Log").warn('The "fb-root" div has not been created, auto-creating'), g = c = document.createElement("div"), c.id = "fb-root", b("sdk.UA").ie() || !document.body ? b("sdk.domReady")(function() {
                                c && document.body && document.body.appendChild(c)
                            }) : document.body.appendChild(c)), c.className += " fb_reset") : c = g);
                            if (typeof a === "string") {
                                var d = document.createElement("div");
                                c.appendChild(d).innerHTML = a;
                                return d
                            } else return c.appendChild(a)
                        },
                        appendHidden: function(a) {
                            __p && __p();
                            if (!h) {
                                h = document.createElement("div");
                                var b = h.style;
                                b.position = "absolute";
                                b.top = "-10000px";
                                b.width = "0";
                                b.height = "0";
                                h = i.append(h)
                            }
                            return i.append(a, h)
                        },
                        submitToTarget: function(a, b) {
                            __p && __p();
                            var c = document.createElement("form");
                            c.action = a.url;
                            c.target = a.target;
                            c.method = b ? "GET" : "POST";
                            i.appendHidden(c);
                            for (var d in a.params)
                                if (Object.prototype.hasOwnProperty.call(a.params, d)) {
                                    b = a.params[d];
                                    if (b !== null && b !== void 0) {
                                        var e = document.createElement("input");
                                        e.name = d;
                                        e.value = b;
                                        c.appendChild(e)
                                    }
                                }
                            c.submit();
                            c.parentNode && c.parentNode.removeChild(c)
                        }
                    };
                    e.exports = i
                }), null);
                __d("sdk.Impressions", ["Miny", "QueryString", "UrlMap", "getBlankIframeSrc", "guid", "insertIframe", "sdk.Content", "sdk.Runtime"], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function g(a) {
                        __p && __p();
                        var c = b("sdk.Runtime").getClientID();
                        c && (typeof a.api_key !== "string" || a.api_key === "") && (a.api_key = c);
                        a.kid_directed_site = b("sdk.Runtime").getKidDirectedSite();
                        c = b("UrlMap").resolve("www") + "/impression.php/" + b("guid")() + "/";
                        var d = b("QueryString").appendToUrl(c, a);
                        if (d.length > 2e3 && (a.payload && typeof a.payload === "string")) {
                            var e = a.payload,
                                f = b("Miny").encode(e);
                            f && f.length < e.length && (a.payload = f, d = b("QueryString").appendToUrl(c, a))
                        }
                        if (d.length <= 2e3) {
                            e = new Image();
                            e.src = d
                        } else {
                            f = b("guid")();
                            var g = b("sdk.Content").appendHidden("");
                            b("insertIframe")({
                                url: b("getBlankIframeSrc")(),
                                root: g,
                                name: f,
                                className: "fb_hidden fb_invisible",
                                onload: function() {
                                    g.parentNode != null && g.parentNode.removeChild(g)
                                }
                            });
                            b("sdk.Content").submitToTarget({
                                url: c,
                                target: f,
                                params: a
                            })
                        }
                    }
                    a = {
                        log: function(a, b) {
                            (typeof b.source !== "string" || b.source === "") && (b.source = "jssdk"), g({
                                lid: a,
                                payload: ES("JSON", "stringify", !1, b)
                            })
                        },
                        impression: g
                    };
                    e.exports = a
                }), null);
                __d("sdk.Scribe", ["QueryString", "UrlMap", "sdk.Runtime"], (function(a, b, c, d, e, f) {
                    function a(a, c) {
                        if (c.extra != null && typeof c.extra === "object") {
                            var d = c.extra;
                            d.revision = b("sdk.Runtime").getRevision()
                        }
                        new Image().src = b("QueryString").appendToUrl(b("UrlMap").resolve("www") + "/common/scribe_endpoint.php", {
                            c: a,
                            m: ES("JSON", "stringify", !1, c)
                        })
                    }
                    c = {
                        log: a
                    };
                    e.exports = c
                }), null);
                __d("Base64", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

                    function h(a) {
                        a = a.charCodeAt(0) << 16 | a.charCodeAt(1) << 8 | a.charCodeAt(2);
                        return String.fromCharCode(g.charCodeAt(a >>> 18), g.charCodeAt(a >>> 12 & 63), g.charCodeAt(a >>> 6 & 63), g.charCodeAt(a & 63))
                    }
                    var i = ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";

                    function j(a) {
                        a = i.charCodeAt(a.charCodeAt(0) - 43) << 18 | i.charCodeAt(a.charCodeAt(1) - 43) << 12 | i.charCodeAt(a.charCodeAt(2) - 43) << 6 | i.charCodeAt(a.charCodeAt(3) - 43);
                        return String.fromCharCode(a >>> 16, a >>> 8 & 255, a & 255)
                    }
                    var k = {
                        encode: function(a) {
                            a = unescape(encodeURI(a));
                            var b = (a.length + 2) % 3;
                            a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
                            return a.slice(0, a.length + b - 2) + "==".slice(b)
                        },
                        decode: function(a) {
                            a = a.replace(/[^A-Za-z0-9+\/]/g, "");
                            var b = a.length + 3 & 3;
                            a = (a + "AAA".slice(b)).replace(/..../g, j);
                            a = a.slice(0, a.length + b - 3);
                            try {
                                return decodeURIComponent(escape(a))
                            } catch (a) {
                                throw new Error("Not valid UTF-8")
                            }
                        },
                        encodeObject: function(a) {
                            return k.encode(ES("JSON", "stringify", !1, a))
                        },
                        decodeObject: function(a) {
                            return ES("JSON", "parse", !1, k.decode(a))
                        },
                        encodeNums: function(a) {
                            return String.fromCharCode.apply(String, ES(a, "map", !0, function(a) {
                                return g.charCodeAt((a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63)
                            }))
                        }
                    };
                    e.exports = k
                }), null);
                __d("sdk.SignedRequest", ["Base64"], (function(a, b, c, d, e, f) {
                    function a(a) {
                        if (a == null || a === "") return null;
                        a = a.split(".", 2)[1].replace(/\-/g, "+").replace(/\_/g, "/");
                        return b("Base64").decodeObject(a)
                    }
                    c = {
                        parse: a
                    };
                    e.exports = c
                }), null);
                __d("URIRFC3986", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?");
                    a = {
                        parse: function(a) {
                            __p && __p();
                            if (ES(a, "trim", !0) === "") return null;
                            a = a.match(g);
                            if (a == null) return null;
                            var b = {};
                            b.uri = a[0] ? a[0] : null;
                            b.scheme = a[1] ? a[1].substr(0, a[1].length - 1) : null;
                            b.authority = a[2] ? a[2].substr(2) : null;
                            b.userinfo = a[3] ? a[3].substr(0, a[3].length - 1) : null;
                            b.host = a[2] ? a[4] : null;
                            b.port = a[5] ? a[5].substr(1) ? parseInt(a[5].substr(1), 10) : null : null;
                            b.path = a[6] ? a[6] : null;
                            b.query = a[7] ? a[7].substr(1) : null;
                            b.fragment = a[8] ? a[8].substr(1) : null;
                            b.isGenericURI = b.authority === null && !!b.scheme;
                            return b
                        }
                    };
                    e.exports = a
                }), null);
                __d("createObjectFrom", [], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function g(a, b) {
                        if (b === void 0) return g(a, !0);
                        var c = {};
                        if (ES("Array", "isArray", !1, b))
                            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
                        else
                            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
                        return c
                    }
                    e.exports = g
                }), null);
                __d("URISchemes", ["createObjectFrom"], (function(a, b, c, d, e, f) {
                    var g = b("createObjectFrom")(["blob", "cmms", "fb", "fba", "fbatwork", "fb-ama", "fb-workchat", "fb-workchat-secure", "fb-messenger", "fb-messenger-public", "fb-messenger-group-thread", "fb-page-messages", "fb-pma", "fbcf", "fbconnect", "fbinternal", "fbmobilehome", "fbrpc", "file", "ftp", "http", "https", "mailto", "wss", "ms-app", "intent", "itms", "itms-apps", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "sftp", "whatsapp", "moments", "flash", "fblite", "chrome-extension", "webcal", "fb124024574287414", "fb124024574287414rc", "fb124024574287414master", "fb1576585912599779", "fb929757330408142", "designpack", "fbpixelcloud", "fbapi20130214", "fb1196383223757595", "oculus", "oculus.store", "oculus.feed", "skype", "callto", "workchat", "fb236786383180508", "fb1775440806014337", "data", "fb-mk", "munki", "kirigami", "origami-file", "fb-nimble-vrsrecorder", "fb-nimble-monohandtrackingvis"]);
                    a = {
                        isAllowed: function(a) {
                            return a == null || a === "" ? !0 : Object.prototype.hasOwnProperty.call(g, a.toLowerCase())
                        }
                    };
                    e.exports = a
                }), null);
                __d("setHostSubdomain", [], (function(a, b, c, d, e, f) {
                    function a(a, b) {
                        a = a.split(".");
                        a.length < 3 ? a.unshift(b) : a[0] = b;
                        return a.join(".")
                    }
                    e.exports = a
                }), null);
                __d("URIBase", ["invariant", "URIRFC3986", "URISchemes", "ex", "setHostSubdomain"], (function(a, b, c, d, e, f, g) {
                    __p && __p();
                    var h = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
                        i = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");

                    function j(a, c, d, e) {
                        __p && __p();
                        if (!c) return !0;
                        if (c instanceof l) {
                            a.setProtocol(c.getProtocol());
                            a.setDomain(c.getDomain());
                            a.setPort(c.getPort());
                            a.setPath(c.getPath());
                            a.setQueryData(e.deserialize(e.serialize(c.getQueryData())));
                            a.setFragment(c.getFragment());
                            a.setIsGeneric(c.getIsGeneric());
                            a.setForceFragmentSeparator(c.getForceFragmentSeparator());
                            return !0
                        }
                        c = ES(c.toString(), "trim", !0);
                        var f = b("URIRFC3986").parse(c) || {
                            fragment: null,
                            scheme: null
                        };
                        if (!d && !b("URISchemes").isAllowed(f.scheme)) return !1;
                        a.setProtocol(f.scheme || "");
                        if (!d && h.test(f.host || "")) return !1;
                        a.setDomain(f.host || "");
                        a.setPort(f.port || "");
                        a.setPath(f.path || "");
                        if (d) a.setQueryData(e.deserialize(f.query || "") || {});
                        else try {
                            a.setQueryData(e.deserialize(f.query || "") || {})
                        } catch (a) {
                            return !1
                        }
                        a.setFragment(f.fragment || "");
                        f.fragment === "" && a.setForceFragmentSeparator(!0);
                        a.setIsGeneric(f.isGenericURI || !1);
                        if (f.userinfo !== null)
                            if (d) throw new Error(b("ex")("URI.parse: invalid URI (userinfo is not allowed in a URI): %s", a.toString()));
                            else return !1;
                        if (!a.getDomain() && ES(a.getPath(), "indexOf", !0, "\\") !== -1)
                            if (d) throw new Error(b("ex")("URI.parse: invalid URI (no domain but multiple back-slashes): %s", a.toString()));
                            else return !1;
                        if (!a.getProtocol() && i.test(c))
                            if (d) throw new Error(b("ex")("URI.parse: invalid URI (unsafe protocol-relative URLs): %s", a.toString()));
                            else return !1;
                        if (a.getDomain() && a.getPath() && !ES(a.getPath(), "startsWith", !0, "/"))
                            if (d) throw new Error(b("ex")("URI.parse: invalid URI (domain and path where path lacks leading slash): %s", a.toString()));
                            else return !1;
                        return !0
                    }
                    var k = [],
                        l = function() {
                            "use strict";
                            __p && __p();
                            a.tryParse = function(b, c) {
                                var d = new a(null, c);
                                return j(d, b, !1, c) ? d : null
                            };
                            a.isValid = function(b, c) {
                                return !!a.tryParse(b, c)
                            };

                            function a(a, b) {
                                b || g(0, 2966), this.$9 = b, this.$7 = "", this.$1 = "", this.$6 = "", this.$5 = "", this.$3 = "", this.$4 = !1, this.$8 = {}, this.$2 = !1, j(this, a, !0, b)
                            }
                            var c = a.prototype;
                            c.setProtocol = function(a) {
                                b("URISchemes").isAllowed(a) || g(0, 587, a);
                                this.$7 = a;
                                return this
                            };
                            c.getProtocol = function() {
                                return (this.$7 || "").toLowerCase()
                            };
                            c.setSecure = function(a) {
                                return this.setProtocol(a ? "https" : "http")
                            };
                            c.isSecure = function() {
                                return this.getProtocol() === "https"
                            };
                            c.setDomain = function(a) {
                                if (h.test(a)) throw new Error(b("ex")("URI.setDomain: unsafe domain specified: %s for url %s", a, this.toString()));
                                this.$1 = a;
                                return this
                            };
                            c.getDomain = function() {
                                return this.$1
                            };
                            c.setPort = function(a) {
                                this.$6 = a;
                                return this
                            };
                            c.getPort = function() {
                                return this.$6
                            };
                            c.setPath = function(a) {
                                this.$5 = a;
                                return this
                            };
                            c.getPath = function() {
                                return this.$5
                            };
                            c.addQueryData = function(a, b) {
                                Object.prototype.toString.call(a) === "[object Object]" ? ES("Object", "assign", !1, this.$8, a) : this.$8[a] = b;
                                return this
                            };
                            c.setQueryData = function(a) {
                                this.$8 = a;
                                return this
                            };
                            c.getQueryData = function() {
                                return this.$8
                            };
                            c.setQueryString = function(a) {
                                return this.setQueryData(this.$9.deserialize(a))
                            };
                            c.getQueryString = function() {
                                return this.$9.serialize(this.getQueryData())
                            };
                            c.removeQueryData = function(a) {
                                ES("Array", "isArray", !1, a) || (a = [a]);
                                for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
                                return this
                            };
                            c.setFragment = function(a) {
                                this.$3 = a;
                                this.setForceFragmentSeparator(!1);
                                return this
                            };
                            c.getFragment = function() {
                                return this.$3
                            };
                            c.setForceFragmentSeparator = function(a) {
                                this.$2 = a;
                                return this
                            };
                            c.getForceFragmentSeparator = function() {
                                return this.$2
                            };
                            c.setIsGeneric = function(a) {
                                this.$4 = a;
                                return this
                            };
                            c.getIsGeneric = function() {
                                return this.$4
                            };
                            c.isEmpty = function() {
                                return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || ES("Object", "keys", !1, this.getQueryData()).length > 0 || this.getFragment())
                            };
                            c.toString = function() {
                                var a = this;
                                for (var b = 0; b < k.length; b++) a = k[b](a);
                                return a.$10()
                            };
                            c.$10 = function() {
                                __p && __p();
                                var a = "",
                                    b = this.getProtocol();
                                b && (a += b + ":" + (this.getIsGeneric() ? "" : "//"));
                                b = this.getDomain();
                                b && (a += b);
                                b = this.getPort();
                                b && (a += ":" + b);
                                b = this.getPath();
                                b ? a += b : a && (a += "/");
                                b = this.getQueryString();
                                b && (a += "?" + b);
                                b = this.getFragment();
                                b ? a += "#" + b : this.getForceFragmentSeparator() && (a += "#");
                                return a
                            };
                            a.registerFilter = function(a) {
                                k.push(a)
                            };
                            c.getOrigin = function() {
                                var a = this.getPort();
                                return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
                            };
                            c.getQualifiedURIBase = function() {
                                return new a(this, this.$9).qualify()
                            };
                            c.qualify = function() {
                                if (!this.getDomain()) {
                                    var b = new a(window.location.href, this.$9);
                                    this.setProtocol(b.getProtocol()).setDomain(b.getDomain()).setPort(b.getPort())
                                }
                                return this
                            };
                            c.setSubdomain = function(a) {
                                var c = this.qualify().getDomain();
                                return this.setDomain(b("setHostSubdomain")(c, a))
                            };
                            c.getSubdomain = function() {
                                if (!this.getDomain()) return "";
                                var a = this.getDomain().split(".");
                                if (a.length <= 2) return "";
                                else return a[0]
                            };
                            c.isSubdomainOfDomain = function(b) {
                                var c = this.getDomain();
                                return a.isDomainSubdomainOfDomain(c, b, this.$9)
                            };
                            a.isDomainSubdomainOfDomain = function(b, c, d) {
                                __p && __p();
                                if (c === "" || b === "") return !1;
                                if (ES(b, "endsWith", !0, c)) {
                                    var e = b.length,
                                        f = c.length,
                                        g = e - f - 1;
                                    if (e === f || b[g] === ".") {
                                        e = new a(null, d);
                                        e.setDomain(c);
                                        return a.isValid(e, d)
                                    }
                                }
                                return !1
                            };
                            return a
                        }();
                    e.exports = l
                }), null);
                __d("sdk.URI", ["QueryString", "URIBase"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = /\.facebook\.com$/,
                        h = {
                            serialize: function(a) {
                                return a ? b("QueryString").encode(a) : ""
                            },
                            deserialize: function(a) {
                                return a ? b("QueryString").decode(a) : {}
                            }
                        };
                    a = function(a) {
                        "use strict";
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c(b) {
                            return a.call(this, b, h) || this
                        }
                        var d = c.prototype;
                        d.isFacebookURI = function() {
                            return g.test(this.getDomain())
                        };
                        d.valueOf = function() {
                            return this.toString()
                        };
                        c.isValidURI = function(a) {
                            return b("URIBase").isValid(a, h)
                        };
                        return c
                    }(b("URIBase"));
                    e.exports = a
                }), null);
                __d("sdk.WebStorage", ["Log"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = {
                        getLocalStorage: function() {
                            try {
                                return window.localStorage
                            } catch (a) {
                                b("Log").warn("Failed to get local storage")
                            }
                            return null
                        },
                        getLocalStorageForRead: function() {
                            __p && __p();
                            try {
                                var a = window.localStorage;
                                if (a) {
                                    var c = "__test__" + ES("Date", "now", !1);
                                    a.setItem(c, "");
                                    a.removeItem(c)
                                }
                                return a
                            } catch (a) {
                                b("Log").warn("Failed to get local storage")
                            }
                            return null
                        },
                        getSessionStorage: function() {
                            try {
                                return window.sessionStorage
                            } catch (a) {
                                b("Log").warn("Failed to get session storage")
                            }
                            return null
                        },
                        getSessionStorageForRead: function() {
                            __p && __p();
                            try {
                                var a = window.sessionStorage;
                                if (a) {
                                    var c = "__test__" + ES("Date", "now", !1);
                                    a.setItem(c, "");
                                    a.removeItem(c)
                                }
                                return a
                            } catch (a) {
                                b("Log").warn("Failed to get session storage")
                            }
                            return null
                        }
                    };
                    e.exports = a
                }), null);
                __d("sdk.FeatureFunctor", [], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function g(a, b, c) {
                        if (a.features && b in a.features) {
                            a = a.features[b];
                            if (typeof a === "object" && typeof a.rate === "number")
                                if (a.rate && Math.random() * 100 <= a.rate) return a.value || !0;
                                else return a.value ? null : !1;
                            else return a
                        }
                        return c
                    }

                    function a(a) {
                        return function() {
                            for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                            if (c.length < 2) throw new Error("Default value is required");
                            var e = c[0],
                                f = c[1];
                            return g(a, e, f)
                        }
                    }
                    e.exports = {
                        create: a
                    }
                }), null);
                __d("sdk.feature", ["JSSDKConfig", "sdk.FeatureFunctor"], (function(a, b, c, d, e, f) {
                    e.exports = b("sdk.FeatureFunctor").create(b("JSSDKConfig"))
                }), null);
                __d("sdk.getContextType", ["sdk.Runtime", "sdk.UA"], (function(a, b, c, d, e, f) {
                    function a() {
                        if (b("sdk.UA").nativeApp()) return 3;
                        if (b("sdk.UA").mobile()) return 2;
                        return b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) ? 5 : 1
                    }
                    e.exports = a
                }), null);
                __d("sdk.Auth", ["Log", "ObservableMixin", "QueryString", "UrlMap", "sdk.Cookie", "sdk.feature", "sdk.getContextType", "sdk.Impressions", "sdk.Runtime", "sdk.Scribe", "sdk.SignedRequest", "sdk.URI", "sdk.WebStorage"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = "fblst_",
                        h = "fbssls_",
                        i = "fblo_",
                        j = 365 * 24 * 60 * 60 * 1e3,
                        k = 60 * 90 * 1e3,
                        l = 60 * 60 * 24 * 1e3,
                        m = 114,
                        n, o, p = new(b("ObservableMixin"))();

                    function q(a, c, d) {
                        __p && __p();
                        d === void 0 && (d = !1);
                        var e = b("sdk.Runtime").getUserID(),
                            f = b("sdk.Runtime").getLoginStatus(),
                            g = "";
                        if (a != null) {
                            if (a.userID != null && a.userID !== "") g = a.userID;
                            else if (a.signedRequest != null && a.signedRequest !== "") {
                                var i = b("sdk.SignedRequest").parse(a.signedRequest);
                                i != null && i !== "" && i.user_id != null && i.user_id !== "" && (g = i.user_id)
                            }
                            if (b("sdk.Runtime").getUseCookie()) {
                                i = a.expiresIn === 0 ? 0 : ES("Date", "now", !1) + a.expiresIn * 1e3;
                                b("sdk.Cookie").setSignedRequestCookie(a.signedRequest, i)
                            }
                        } else b("sdk.Runtime").getUseCookie() && b("sdk.Cookie").clearSignedRequestCookie(), b("sdk.Runtime").getUseLocalStorage() && u();
                        i = f === "unknown" && a != null || b("sdk.Runtime").getUseCookie() && b("sdk.Runtime").getCookieUserID() !== g;
                        var j = e != null && e !== "" && a == null;
                        e = a != null && e != null && e !== "" && e != g;
                        var m = a != n;
                        f = c != f;
                        b("sdk.Runtime").setLoginStatus(c);
                        b("sdk.Runtime").setAccessToken(a && a.accessToken || null);
                        b("sdk.Runtime").setUserID(g);
                        n = a;
                        g = {
                            authResponse: a,
                            status: c
                        };
                        (j || e) && p.inform("logout", g);
                        (i || e) && p.inform("login", g);
                        m && p.inform("authresponse.change", g);
                        f && p.inform("status.change", g);
                        if (!d && b("sdk.feature")("cache_auth_response", !1) && b("sdk.Runtime").getUseLocalStorage()) {
                            j = b("sdk.WebStorage").getSessionStorage();
                            j && j.setItem(h + b("sdk.Runtime").getClientID(), ES("JSON", "stringify", !1, {
                                authResponse: a,
                                status: c,
                                expiresAt: a != null && a.expiresIn && a.expiresIn !== 0 ? ES("Date", "now", !1) + Math.min(a.expiresIn * .75 * 1e3, k) : ES("Date", "now", !1) + l
                            }))
                        }
                        return g
                    }

                    function r() {
                        return n
                    }

                    function s(a) {
                        b("sdk.Cookie").getDomain() == null && b("sdk.Cookie").setDomain("." + a)
                    }

                    function a(a, c, d) {
                        __p && __p();
                        return function(e) {
                            __p && __p();
                            if (e && e.access_token) {
                                var f = b("sdk.SignedRequest").parse(e.signed_request);
                                f = f != null ? f.user_id != null ? f.user_id : null : null;
                                c = {
                                    accessToken: e.access_token,
                                    userID: f,
                                    expiresIn: Number(e.expires_in),
                                    signedRequest: e.signed_request
                                };
                                e.asset_scopes && (c = babelHelpers["extends"]({}, c, {
                                    asset_scopes: ES("JSON", "parse", !1, e.asset_scopes)
                                }));
                                c = t(c, e);
                                v();
                                f = "connected";
                                q(c, f)
                            } else e && e.asset_scopes ? (c = {
                                asset_scopes: ES("JSON", "parse", !1, e.asset_scopes)
                            }, c = t(c, e), v(), f = "connected", q(c, f)) : d === "logout" || d === "login_status" ? (e && e.error === "not_authorized" ? (f = "not_authorized", q(null, f)) : (f = "unknown", q(null, f)), d === "logout" && (w(), b("sdk.Scribe").log("jssdk_error", {
                                appId: b("sdk.Runtime").getClientID(),
                                error: "PLATFORM_AUTH_LOGOUT",
                                extra: {
                                    args: {
                                        fblo: !0
                                    }
                                }
                            }))) : e && e.error === "access_denied" ? (w(), f = "unknown", q(null, f)) : e && e.result && (v(), c = e.result.authResponse);
                            if (a) {
                                f = {
                                    authResponse: c,
                                    status: b("sdk.Runtime").getLoginStatus()
                                };
                                a(f)
                            }
                            return c
                        }
                    }

                    function t(a, c) {
                        c.granted_scopes && (a = babelHelpers["extends"]({}, a, {
                            grantedScopes: c.granted_scopes
                        }));
                        c.data_access_expiration_time && (a = babelHelpers["extends"]({}, a, {
                            data_access_expiration_time: Number(c.data_access_expiration_time)
                        }));
                        c.base_domain != null && s(c.base_domain);
                        c.enforce_https && b("sdk.Runtime").setEnforceHttps(!0);
                        if (b("sdk.Runtime").getUseLocalStorage() && location.protocol === "https:" && c.long_lived_token) {
                            var d = b("sdk.WebStorage").getLocalStorage();
                            d && d.setItem(g + b("sdk.Runtime").getClientID(), c.long_lived_token)
                        }
                        return a
                    }

                    function u() {
                        var a = b("sdk.WebStorage").getLocalStorage();
                        a && a.removeItem(g + b("sdk.Runtime").getClientID())
                    }

                    function v() {
                        b("sdk.Cookie").setRaw(i, "", 0, !1), b("sdk.Cookie").setRaw(i, "", 0, !0)
                    }

                    function w() {
                        b("sdk.Cookie").setRaw(i, "y", ES("Date", "now", !1) + j, !1)
                    }

                    function x(a) {
                        var b = "unknown";
                        q(null, b);
                        b = {
                            authResponse: null,
                            status: b
                        };
                        a && a(b)
                    }

                    function y(a, c) {
                        __p && __p();
                        c === void 0;
                        o && (window.clearTimeout(o), o = null);
                        c = b("sdk.Cookie").getRaw(i) === "y";
                        var d = null,
                            e = !1;
                        if (b("sdk.Runtime").getLoginStatus() !== "connected" && (document.referrer === "" || /^https?:\/\/([\w\.]+)?facebook.com\//.test(document.referrer))) {
                            var f = location.hash.substr(1);
                            if (f !== "") {
                                f = b("QueryString").decode(f, !0);
                                d = f.access_token;
                                d != null && v();
                                window == top && d != null && (delete f.access_token, delete f.code, delete f.signed_request, location.hash = b("QueryString").encode(f))
                            }
                            f = b("QueryString").decode(location.search);
                            f.error === "access_denied" && (e = !0)
                        }
                        if (c || e) {
                            x(a);
                            return
                        }
                        f = null;
                        if (b("sdk.Runtime").getUseLocalStorage()) {
                            c = b("sdk.WebStorage").getLocalStorageForRead();
                            c && (f = c.getItem(g + b("sdk.Runtime").getClientID()))
                        }
                        c = (e = d) != null ? e : f;
                        window.location.protocol !== "https:" && x(a);
                        p.getLoginStatusCORS(a, c, n)
                    }

                    function z(a) {
                        __p && __p();
                        a = new(b("sdk.URI"))(b("UrlMap").resolve("www").replace("web.", "www.") + "/x/oauth/status").addQueryData("client_id", b("sdk.Runtime").getClientID()).addQueryData("input_token", a).addQueryData("redirect_uri", window.location.href).addQueryData("origin", b("sdk.getContextType")()).addQueryData("sdk", "joey").addQueryData("wants_cookie_data", b("sdk.Runtime").getUseCookie());
                        if (window.location.ancestorOrigins) {
                            var c = window.location.ancestorOrigins;
                            if (c.length > 0) {
                                var d = "";
                                for (var e = 0; e < c.length; e++) d += c[e], d += ",";
                                a.addQueryData("ancestor_origins", d.slice(0, -1))
                            }
                        }
                        return a
                    }

                    function A(a, c, d, e) {
                        __p && __p();
                        switch (d) {
                            case "connected":
                                c = ES("JSON", "parse", !1, e);
                                e = {
                                    accessToken: c.access_token,
                                    userID: c.user_id,
                                    expiresIn: Number(c.expires_in),
                                    signedRequest: c.signed_request
                                };
                                c.enforce_https != null && b("sdk.Runtime").setEnforceHttps(!0);
                                c.data_access_expiration_time != null && (e.data_access_expiration_time = Number(c.data_access_expiration_time));
                                c.base_domain != null && s(c.base_domain);
                                if (b("sdk.Runtime").getUseLocalStorage() && location.protocol === "https:" && c.long_lived_token) {
                                    var f = b("sdk.WebStorage").getLocalStorage();
                                    f && f.setItem(g + b("sdk.Runtime").getClientID(), c.long_lived_token)
                                }
                                v();
                                q(e, d);
                                o = window.setTimeout(function() {
                                    y(function() {})
                                }, k);
                                break;
                            case "not_authorized":
                            case "unknown":
                            default:
                                q(null, d)
                        }
                        if (a) {
                            f = {
                                authResponse: r(),
                                status: b("sdk.Runtime").getLoginStatus()
                            };
                            a(f)
                        }
                    }

                    function B(c, d, a) {
                        d === 0 ? (b("sdk.feature")("cors_status_fetch_cancel_tracking", !1) && b("sdk.Scribe").log("jssdk_error", {
                            appId: b("sdk.Runtime").getClientID(),
                            error: "CORS_STATUS_FETCH_CANCELLED",
                            extra: {
                                message: "Status 0 returned."
                            }
                        }), b("Log").error("Error retrieving login status, fetch cancelled.")) : (b("sdk.Scribe").log("jssdk_error", {
                            appId: b("sdk.Runtime").getClientID(),
                            error: "CORS_STATUS_FETCH",
                            extra: {
                                message: "HTTP Status Code " + d
                            }
                        }), b("Log").error("Error retrieving login status, HTTP status code: " + d));
                        if (c) {
                            d = {
                                authResponse: a,
                                status: b("sdk.Runtime").getLoginStatus()
                            };
                            c(d)
                        }
                    }

                    function c(c, d, a) {
                        __p && __p();
                        var e = ES("Date", "now", !1),
                            f = z(d);

                        function g() {
                            __p && __p();
                            var d = new XMLHttpRequest();
                            d && (d.open("GET", f.toString(), !0), d.withCredentials = !0, d.onreadystatechange = function() {
                                __p && __p();
                                if (d.readyState === 4) {
                                    if (b("sdk.feature")("e2e_ping_tracking", !0)) {
                                        var f = {
                                            init: e,
                                            close: ES("Date", "now", !1),
                                            method: "cors"
                                        };
                                        b("Log").debug("e2e: %s", ES("JSON", "stringify", !1, f));
                                        b("sdk.Impressions").log(m, {
                                            payload: f
                                        })
                                    }
                                    if (d.status === 200) {
                                        A(c, d.status, (f = d.getResponseHeader("fb-s")) != null ? f : "unknown", (f = d.getResponseHeader("fb-ar")) != null ? f : "{}")
                                    } else B(c, d.status, a)
                                }
                            }, d.send())
                        }

                        function h() {
                            window.fetch(f, {
                                referrer: "/",
                                mode: "cors",
                                credentials: "include"
                            }).then(function(b) {
                                if (b.status === 200) {
                                    var d;
                                    A(c, b.status, (d = b.headers.get("fb-s")) != null ? d : "unknown", (d = b.headers.get("fb-ar")) != null ? d : "{}")
                                } else B(c, b.status, a)
                            })["catch"](function(b) {
                                return B(c, 0, a)
                            })
                        }
                        typeof window.fetch === "function" ? h() : g()
                    }
                    var C;

                    function d(a, c, d) {
                        __p && __p();
                        c === void 0 && (c = !1);
                        d === void 0 && (d = !1);
                        var e = b("sdk.Runtime").getClientID();
                        if (e == null || e === "") {
                            b("Log").warn("FB.getLoginStatus() called before calling FB.init().");
                            x(a);
                            return
                        }
                        if (!(typeof e === "number" || typeof e === "string") || e === 0 || typeof e === "string" && (e === "0" || !/^\d+$/.test(e))) {
                            b("Log").warn("FB.getLoginStatus() not checked for an invalid client ID " + e);
                            x(a);
                            return
                        }
                        if (!c && b("sdk.feature")("cache_auth_response", !1) && b("sdk.Runtime").getUseLocalStorage() && location.protocol === "https:") {
                            e = b("sdk.WebStorage").getSessionStorageForRead();
                            if (e) {
                                e = e.getItem(h + b("sdk.Runtime").getClientID());
                                if (e != null) try {
                                    e = ES("JSON", "parse", !1, e);
                                    if (e != null && e.expiresAt != null && e.expiresAt > ES("Date", "now", !1)) {
                                        var f;
                                        C = "loaded";
                                        q(e.authResponse, (f = e.status) != null ? f : "unknown", !0);
                                        o = window.setTimeout(function() {
                                            y(function() {}, d)
                                        }, e.status === "connected" ? k : l)
                                    }
                                } catch (a) {}
                            }
                        }
                        if (!c)
                            if (C === "loaded") {
                                if (a) {
                                    f = {
                                        authResponse: r(),
                                        status: b("sdk.Runtime").getLoginStatus()
                                    };
                                    a(f)
                                }
                                return
                            } else if (C === "loading") {
                            a && p.subscribe("FB.loginStatus", a);
                            return
                        }
                        a && p.subscribe("FB.loginStatus", a);
                        C = "loading";
                        e = function(a) {
                            C = "loaded", p.inform("FB.loginStatus", a), p.clearSubscribers("FB.loginStatus")
                        };
                        y(e, d)
                    }
                    ES("Object", "assign", !1, p, {
                        removeLogoutState: v,
                        getLoginStatus: d,
                        getLoginStatusCORS: c,
                        fetchLoginStatus: y,
                        setAuthResponse: q,
                        getAuthResponse: r,
                        parseSignedRequest: b("sdk.SignedRequest").parse,
                        xdResponseWrapper: a
                    });
                    e.exports = p
                }), null);
                __d("sdk.DOM", ["Assert", "sdk.domReady"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {};

                    function h(a, b) {
                        a = a.getAttribute(b) || a.getAttribute(b.replace(/_/g, "-")) || a.getAttribute(b.replace(/-/g, "_")) || a.getAttribute(b.replace(/-/g, "")) || a.getAttribute(b.replace(/_/g, "")) || a.getAttribute("data-" + b) || a.getAttribute("data-" + b.replace(/_/g, "-")) || a.getAttribute("data-" + b.replace(/-/g, "_")) || a.getAttribute("data-" + b.replace(/-/g, "")) || a.getAttribute("data-" + b.replace(/_/g, ""));
                        return a != null ? String(a) : null
                    }

                    function a(a, b) {
                        a = h(a, b);
                        return a != null ? /^(true|1|yes|on)$/.test(a) : null
                    }

                    function c(a, c) {
                        b("Assert").isTruthy(a, "element not specified");
                        b("Assert").isString(c);
                        try {
                            a.innerHTML = c
                        } catch (a) {
                            throw new Error("Could not set innerHTML : " + a.message)
                        }
                    }

                    function i(a, c) {
                        b("Assert").isTruthy(a, "element not specified");
                        b("Assert").isString(c);
                        a = " " + a.className + " ";
                        return ES(a, "indexOf", !0, " " + c + " ") >= 0
                    }

                    function d(a, c) {
                        b("Assert").isTruthy(a, "element not specified");
                        if (a == null) return;
                        b("Assert").isString(c);
                        i(a, c) || (a.className = a.className + " " + c)
                    }

                    function f(a, c) {
                        b("Assert").isTruthy(a, "element not specified");
                        if (a == null) return;
                        b("Assert").isString(c);
                        c = new RegExp("\\s*" + c, "g");
                        a.className = ES(a.className.replace(c, ""), "trim", !0)
                    }

                    function j(a, c, d) {
                        b("Assert").isString(a);
                        c = c || document.body;
                        if (c == null) return [];
                        d = d || "*";
                        return ES("Array", "from", !1, c.querySelectorAll(d + "." + a))
                    }

                    function k(a, c) {
                        b("Assert").isTruthy(a, "element not specified");
                        b("Assert").isString(c);
                        c = c.replace(/-(\w)/g, function(a, b) {
                            return b.toUpperCase()
                        });
                        a = a.currentStyle || document.defaultView.getComputedStyle(a, null);
                        a = a[c];
                        /backgroundPosition?/.test(c) && /top|left/.test(a) && (a = "0%");
                        return a
                    }

                    function l(a, c, d) {
                        b("Assert").isTruthy(a, "element not specified"), b("Assert").isString(c), c = c.replace(/-(\w)/g, function(a, b) {
                            return b.toUpperCase()
                        }), a.style[c] = d
                    }

                    function m(a, b) {
                        var c = !0;
                        for (var d = 0, e; e = b[d++];) e in g || (c = !1, g[e] = !0);
                        if (c) return;
                        e = document.createElement("style");
                        e.type = "text/css";
                        e.textContent = a;
                        document.getElementsByTagName("head")[0].appendChild(e)
                    }

                    function n(a) {
                        if (!a || !a.parentNode) return null;
                        else return a.parentNode.removeChild(a)
                    }

                    function o() {
                        var a, b = document.documentElement && document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
                        return {
                            scrollTop: (b == null ? void 0 : b.scrollTop) || ((a = document.body) == null ? void 0 : a.scrollTop),
                            scrollLeft: (b == null ? void 0 : b.scrollLeft) || ((a = document.body) == null ? void 0 : a.scrollLeft),
                            width: window.innerWidth ? window.innerWidth : b == null ? void 0 : b.clientWidth,
                            height: window.innerHeight ? window.innerHeight : b == null ? void 0 : b.clientHeight
                        }
                    }
                    d = {
                        addCss: d,
                        addCssRules: m,
                        containsCss: i,
                        getAttr: h,
                        getBoolAttr: a,
                        getByClass: j,
                        getStyle: k,
                        getViewportInfo: o,
                        html: c,
                        ready: b("sdk.domReady"),
                        remove: n,
                        removeCss: f,
                        setStyle: l
                    };
                    e.exports = d
                }), null);
                __d("normalizeError", ["sdk.UA"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function(a) {
                        var c = {
                            line: a.lineNumber || a.line,
                            message: a.message,
                            name: a.name,
                            script: a.fileName || a.sourceURL || a.script,
                            stack: a.stackTrace || a.stack
                        };
                        c._originalError = a;
                        a = /([\w:\.\/]+\.js):(\d+)/.exec(a.stack);
                        b("sdk.UA").chrome() && a && (c.script = a[1], c.line = parseInt(a[2], 10));
                        for (var d in c) c[d] == null && delete c[d];
                        return c
                    };
                    e.exports = a
                }), null);
                __d("sdk.ErrorHandler", ["ManagedError", "normalizeError", "wrapFunction"], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function a(a, c) {
                        __p && __p();
                        var d = "";

                        function e(a) {
                            var b = a._originalError;
                            delete a._originalError;
                            c(a);
                            throw b
                        }

                        function f(c, f) {
                            __p && __p();
                            return function() {
                                __p && __p();
                                if (!a) return c.apply(this, arguments);
                                try {
                                    d = f;
                                    return c.apply(this, arguments)
                                } catch (a) {
                                    if (a instanceof b("ManagedError")) throw a;
                                    var g = b("normalizeError")(a);
                                    g.entry = f;
                                    var h = ES(Array.prototype.slice.call(arguments), "map", !0, function(a) {
                                        var b = Object.prototype.toString.call(a);
                                        return /^\[object (String|Number|Boolean|Object|Date)\]$/.test(b) ? a : a.toString()
                                    });
                                    g.args = ES("JSON", "stringify", !1, h).substring(0, 200);
                                    e(g)
                                } finally {
                                    d = ""
                                }
                            }
                        }

                        function g(a) {
                            a.__wrapper || (a.__wrapper = function() {
                                try {
                                    return a.apply(this, arguments)
                                } catch (a) {
                                    window.setTimeout(function() {
                                        throw a
                                    }, 0);
                                    return !1
                                }
                            });
                            return a.__wrapper
                        }

                        function h(a) {
                            try {
                                return a && a.callee && a.callee.caller ? a.callee.caller.name : ""
                            } catch (a) {
                                return ""
                            }
                        }

                        function i(a, c) {
                            return function(e, f) {
                                var g = c + ":" + (d || "[global]") + ":" + (e.name || "[anonymous]" + h(arguments));
                                return a(b("wrapFunction")(e, "entry", g), f)
                            }
                        }
                        a && (setTimeout = i(setTimeout, "setTimeout"), setInterval = i(setInterval, "setInterval"), b("wrapFunction").setWrapper(f, "entry"));
                        return {
                            guard: f,
                            unguard: g
                        }
                    }
                    e.exports = {
                        create: a
                    }
                }), null);
                __d("sdk.ErrorHandling", ["sdk.ErrorHandler", "sdk.feature", "sdk.Runtime", "sdk.Scribe"], (function(a, b, c, d, e, f) {
                    a = b("sdk.feature")("error_handling", !1);
                    e.exports = b("sdk.ErrorHandler").create(a, function(a) {
                        b("sdk.Scribe").log("jssdk_error", {
                            appId: b("sdk.Runtime").getClientID(),
                            error: a.name || a.message,
                            extra: a
                        })
                    })
                }), null);
                __d("FB", ["DOMWrapper", "GlobalCallback", "JSSDKCssConfig", "Log", "dotAccess", "sdk.Auth", "sdk.Content", "sdk.DOM", "sdk.domReady", "sdk.ErrorHandling", "sdk.Runtime"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = window.FB = {};
                    c = {};
                    b("Log").level = 0;
                    b("GlobalCallback").setPrefix("FB.__globalCallbacks");
                    var h = document.createElement("div");
                    b("DOMWrapper").setRoot(h);
                    b("sdk.domReady")(function() {
                        b("Log").info("domReady"), b("sdk.Content").appendHidden(h), b("JSSDKCssConfig").rules && b("sdk.DOM").addCssRules(b("JSSDKCssConfig").rules, b("JSSDKCssConfig").components)
                    });
                    b("sdk.Runtime").subscribe("AccessToken.change", function(a) {
                        !a && b("sdk.Runtime").getLoginStatus() === "connected" && b("sdk.Auth").getLoginStatus(null, !0)
                    });

                    function i(a, c, d, e) {
                        __p && __p();
                        return b("sdk.ErrorHandling").guard(function() {
                            __p && __p();

                            function f(a) {
                                if (ES("Array", "isArray", !1, a)) return ES(a, "map", !0, f);
                                return a && typeof a === "object" && a.__wrapped ? a.__wrapped : typeof a === "function" && /^function/.test(a.toString()) ? b("sdk.ErrorHandling").unguard(a) : a
                            }
                            var g = ES(Array.prototype.slice.call(arguments), "map", !0, f),
                                h = a.apply(e, g),
                                j, k = !0;
                            if (h && typeof h === "object") {
                                j = ES("Object", "create", !1, h);
                                j.__wrapped = h;
                                for (var d in h) {
                                    var l = h[d];
                                    if (typeof l !== "function" || d === "constructor") continue;
                                    k = !1;
                                    j[d] = i(l, c + ":" + d, d, h)
                                }
                            }
                            return !k ? j : k ? h : j
                        }, c)
                    }

                    function a(a, c) {
                        var d = a ? b("dotAccess")(g, a, !0) : g;
                        ES(ES("Object", "keys", !1, c), "forEach", !0, function(b) {
                            var e = c[b];
                            if (typeof e === "function") {
                                var f = (a ? a + "." : "") + b;
                                f = i(e, f, b, c);
                                f && (d[b] = f)
                            } else(typeof e === "object" || typeof e === "number") && (d[b] = e)
                        })
                    }
                    ES("Object", "assign", !1, c, {
                        provide: a
                    });
                    e.exports = c
                }), null);
                __d("ArgumentError", ["ManagedError"], (function(a, b, c, d, e, f) {
                    a = function(a) {
                        "use strict";
                        babelHelpers.inheritsLoose(b, a);

                        function b(b, c) {
                            return a.call(this, b, c) || this
                        }
                        return b
                    }(b("ManagedError"));
                    e.exports = a
                }), null);
                __d("flattenObject", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function(a) {
                        var b = {};
                        for (var c in a)
                            if (Object.prototype.hasOwnProperty.call(a, c)) {
                                var d = a[c];
                                if (null === d || void 0 === d) continue;
                                else typeof d === "string" ? b[c] = d : b[c] = ES("JSON", "stringify", !1, d)
                            }
                        return b
                    };
                    e.exports = a
                }), null);
                __d("ApiClientUtils", ["ArgumentError", "Assert", "Log", "flattenObject", "sdk.URI", "sprintf"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {
                        get: !0,
                        post: !0,
                        "delete": !0,
                        put: !0
                    };

                    function a(a) {
                        __p && __p();
                        var c = a.shift();
                        b("Assert").isString(c, "Invalid path");
                        !/^https?/.test(c) && c.charAt(0) !== "/" && (c = "/" + c);
                        var d = {};
                        try {
                            c = new(b("sdk.URI"))(c)
                        } catch (a) {
                            throw new(b("ArgumentError"))(a.message, a)
                        }
                        ES(a, "forEach", !0, function(a) {
                            return d[typeof a] = a
                        });
                        a = (d.string || "get").toLowerCase();
                        b("Assert").isTrue(Object.prototype.hasOwnProperty.call(g, a), b("sprintf")("Invalid method passed to ApiClient: %s", a));
                        var e = d["function"];
                        e || b("Log").warn("No callback passed to the ApiClient");
                        d.object && c.addQueryData(b("flattenObject")(d.object));
                        var f = c.getQueryData();
                        f.method = a;
                        return {
                            uri: c,
                            callback: e,
                            params: f
                        }
                    }
                    e.exports = {
                        parseCallDataFromArgs: a
                    }
                }), null);
                __d("errorCode", [], (function(a, b, c, d, e, f) {
                    "use strict";

                    function a(a) {
                        throw new Error('errorCode("' + a + '"): This should not happen. Oh noes!')
                    }
                    e.exports = a
                }), null);
                __d("nullthrows", [], (function(a, b, c, d, e, f) {
                    a = function(a, b) {
                        b === void 0 && (b = "Got unexpected null or undefined");
                        if (a != null) return a;
                        a = new Error(b);
                        a.framesToPop = 1;
                        throw a
                    };
                    e.exports = a
                }), null);
                __d("sdk.safelyParseResponse", ["errorCode", "nullthrows"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    c = function(a, b, c) {
                        return h
                    };

                    function a(a, d) {
                        d === void 0 && (d = null);
                        try {
                            return a === null ? h : ES("JSON", "parse", !1, b("nullthrows")(a))
                        } catch (b) {
                            return c(b, a, d)
                        }
                    }
                    var h = {
                        error: {
                            code: 1,
                            error_subcode: 1357046,
                            message: "Received Invalid JSON reply.",
                            type: "http"
                        }
                    };
                    a.ERROR = h;
                    a.setErrorHandler = function(a) {
                        c = a
                    };
                    e.exports = a
                }), null);
                __d("whitelistObjectKeys", [], (function(a, b, c, d, e, f) {
                    function a(a, b) {
                        var c = {};
                        b = ES("Array", "isArray", !1, b) ? b : ES("Object", "keys", !1, b);
                        for (var d = 0; d < b.length; d++) typeof a[b[d]] !== "undefined" && (c[b[d]] = a[b[d]]);
                        return c
                    }
                    e.exports = a
                }), null);
                __d("ApiBatcher", ["invariant", "ApiClientUtils", "QueryString", "sdk.safelyParseResponse", "whitelistObjectKeys"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = 50,
                        i = 105440539523;
                    a = function() {
                        __p && __p();

                        function a(a, b) {
                            this.$1 = [], this.$2 = [], this.$4 = null, this.executeRequest = a, this.$3 = b
                        }
                        var c = a.prototype;
                        c.scheduleBatchCall = function() {
                            var b = this;
                            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                            var f = a.prepareBatchParams(d),
                                g = f.body,
                                i = f.callback,
                                j = f.method,
                                k = f.relative_url,
                                l = {
                                    method: j,
                                    relative_url: k
                                };
                            g && (l.body = g);
                            this.$1.push(l);
                            this.$2.push(i);
                            this.$1.length == h ? (this.$4 && clearTimeout(this.$4), this.$5()) : this.$4 || (this.$4 = setTimeout(function() {
                                b.$5()
                            }, 0))
                        };
                        a.prepareBatchParams = function(a, c) {
                            __p && __p();
                            c === void 0 && (c = []);
                            a = b("ApiClientUtils").parseCallDataFromArgs(a);
                            var d = a.uri,
                                e = a.callback;
                            a = a.params.method;
                            var f, g = d.removeQueryData("method").toString();
                            if (a.toLowerCase() == "post") {
                                var h = d.getQueryData();
                                f = b("QueryString").encode(h);
                                h = b("whitelistObjectKeys")(h, c);
                                g = d.setQueryData(h).toString()
                            }
                            return {
                                body: f,
                                callback: e,
                                method: a,
                                relative_url: g
                            }
                        };
                        c.$5 = function() {
                            __p && __p();
                            this.$1.length > 0 || g(0, 4698);
                            this.$1.length === this.$2.length || g(0, 4699);
                            var a = this.$1,
                                c = this.$2;
                            this.$1 = [];
                            this.$2 = [];
                            this.$4 = null;
                            if (a.length === 1) {
                                var d = a[0],
                                    e = c[0],
                                    f = d.body ? b("QueryString").decode(d.body) : null;
                                this.executeRequest(d.relative_url, d.method, f, e);
                                return
                            }
                            this.executeRequest("/", "POST", {
                                batch: a,
                                include_headers: !1,
                                batch_app_id: this.$3 || i
                            }, function(a) {
                                ES("Array", "isArray", !1, a) ? ES(a, "forEach", !0, function(a, d) {
                                    c[d](b("sdk.safelyParseResponse")(a && a.body))
                                }) : ES(c, "forEach", !0, function(a) {
                                    return a({
                                        error: {
                                            message: "Fatal: batch call failed."
                                        }
                                    })
                                })
                            })
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("RequestConstants", ["errorCode"], (function(a, b, c, d, e, f, g) {
                    a = {
                        code: 1,
                        error_subcode: 1357045,
                        message: "unknown error (empty response)",
                        type: "http",
                        status: 0
                    };
                    e.exports = {
                        PARSE_ERROR_TEMPLATE: a
                    }
                }), null);
                __d("CORSRequest", ["Log", "QueryString", "RequestConstants", "sdk.safelyParseResponse", "wrapFunction"], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function g(a, c) {
                        __p && __p();
                        if (!self.XMLHttpRequest) return null;
                        var d = new XMLHttpRequest(),
                            e = function() {};
                        if ("withCredentials" in d) d.open(a, c, !0), d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        else if (self.XDomainRequest) {
                            d = new XDomainRequest();
                            try {
                                d.open(a, c), d.onprogress = d.ontimeout = e
                            } catch (a) {
                                return null
                            }
                        } else return null;
                        var f = {
                                send: function(a) {
                                    d.send(a)
                                }
                            },
                            g = b("wrapFunction")(function() {
                                g = e, "onload" in f && f.onload(d)
                            }, "entry", "XMLHttpRequest:load"),
                            h = b("wrapFunction")(function() {
                                h = e, "onerror" in f && f.onerror(d)
                            }, "entry", "XMLHttpRequest:error");
                        d.onload = function() {
                            g()
                        };
                        d.onerror = function() {
                            h()
                        };
                        d.onreadystatechange = function() {
                            d.readyState == 4 && (d.status == 200 ? g() : h())
                        };
                        return f
                    }

                    function a(a, c, d, e) {
                        __p && __p();
                        if (ES(a, "includes", !0, "/../") || ES(a, "includes", !0, "/..\\") || ES(a, "includes", !0, "\\../") || ES(a, "includes", !0, "\\..\\")) {
                            b("Log").error("CORSRequest.execute(): path traversal is not allowed.");
                            return !1
                        }
                        d.suppress_http_code = 1;
                        d = b("QueryString").encode(d);
                        c != "post" && (a = b("QueryString").appendToUrl(a, d), d = "");
                        c = g(c, a);
                        if (!c) return !1;
                        c.onload = function(c) {
                            e(b("sdk.safelyParseResponse")(c.responseText, a))
                        };
                        c.onerror = function(c) {
                            c.responseText ? e(b("sdk.safelyParseResponse")(c.responseText, a)) : e({
                                error: babelHelpers["extends"]({}, b("RequestConstants").PARSE_ERROR_TEMPLATE, {
                                    status: c.status
                                })
                            })
                        };
                        c.send(d);
                        return !0
                    }
                    c = {
                        execute: a
                    };
                    e.exports = c
                }), null);
                __d("ChunkedRequest", ["Log", "QueryString", "RequestConstants", "sdk.safelyParseResponse", "wrapFunction"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = "{}",
                        h = function() {
                            "use strict";
                            __p && __p();

                            function a(a) {
                                a === void 0 && (a = "\r\n"), this.offset = 0, this.delimiter = "\r\n", this.delimiter = a
                            }
                            var b = a.prototype;
                            b.parse = function(a, b) {
                                __p && __p();
                                b === void 0 && (b = !1);
                                var c = [],
                                    d = a.substring(this.offset),
                                    e = 0,
                                    f = ES(d, "indexOf", !0, this.delimiter, e);
                                f === 0 && (e = this.delimiter.length, f = ES(d, "indexOf", !0, this.delimiter, e));
                                while (f > -1) {
                                    var g = d.substring(e, f);
                                    g && c.push(g);
                                    e = f + this.delimiter.length;
                                    f = ES(d, "indexOf", !0, this.delimiter, e)
                                }
                                this.offset += e;
                                if (b && d && f === -1) {
                                    g = a.substring(this.offset);
                                    c.push(g)
                                }
                                return c
                            };
                            return a
                        }();

                    function i(a, c) {
                        __p && __p();
                        if (!self.XMLHttpRequest) return null;
                        var d = new XMLHttpRequest();
                        if (!("withCredentials" in d)) return null;
                        d.open(a, c, !0);
                        d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        var e = new h(),
                            f = {
                                send: function(a) {
                                    d.send(a)
                                }
                            },
                            i = b("wrapFunction")(function(a, b) {
                                if (f.onchunk) {
                                    a = e.parse(a);
                                    ES(a, "forEach", !0, function(a) {
                                        return f.onchunk(a, b)
                                    });
                                    b && f.onchunk(g, b)
                                }
                            }, "entry", "XMLHttpRequest:onchunk"),
                            j = b("wrapFunction")(function() {
                                f.onerror && f.onerror(d)
                            }, "entry", "XMLHttpRequest:error");
                        d.onerror = j;
                        d.onreadystatechange = function() {
                            d.readyState == 4 ? d.status === 200 ? i(d.responseText, !0) : j() : d.readyState == 3 && i(d.responseText, !1)
                        };
                        return f
                    }

                    function a(a, c, d, e) {
                        __p && __p();
                        if (ES(a, "includes", !0, "/../") || ES(a, "includes", !0, "/..\\") || ES(a, "includes", !0, "\\../") || ES(a, "includes", !0, "\\..\\")) {
                            b("Log").error("ChunkedRequest.execute(): path traversal is not allowed.");
                            return !1
                        }
                        d.suppress_http_code = 1;
                        d = b("QueryString").encode(d);
                        c != "post" && (a = b("QueryString").appendToUrl(a, d), d = "");
                        c = i(c, a);
                        if (!c) return !1;
                        c.onchunk = function(a, c) {
                            e(b("sdk.safelyParseResponse")(a), c)
                        };
                        c.onerror = function(a) {
                            a.responseText ? e(b("sdk.safelyParseResponse")(a.responseText)) : e({
                                error: babelHelpers["extends"]({}, b("RequestConstants").PARSE_ERROR_TEMPLATE, {
                                    status: a.status
                                })
                            })
                        };
                        c.send(d);
                        return !0
                    }
                    c = {
                        execute: a
                    };
                    e.exports = c
                }), null);
                __d("JSONPRequest", ["DOMWrapper", "GlobalCallback", "Log", "QueryString"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = 2e3,
                        h = !1;

                    function a(a, c, d, e) {
                        __p && __p();
                        if (ES(a, "includes", !0, "/../") || ES(a, "includes", !0, "/..\\") || ES(a, "includes", !0, "\\../") || ES(a, "includes", !0, "\\..\\")) {
                            b("Log").error("JSONPRequest.execute(): path traversal is not allowed.");
                            return !1
                        }
                        var f = document.createElement("script"),
                            i = function(a) {
                                i = function() {}, b("GlobalCallback").remove(d.callback), e(a), f.parentNode.removeChild(f)
                            };
                        d.callback = b("GlobalCallback").create(i);
                        d.method || (d.method = c);
                        a = b("QueryString").appendToUrl(a, d);
                        if (!h && a.length > g) {
                            b("GlobalCallback").remove(d.callback);
                            return !1
                        }
                        f.onerror = function() {
                            i({
                                error: {
                                    type: "http",
                                    message: "unknown error"
                                }
                            })
                        };
                        var j = function() {
                            setTimeout(function() {
                                i({
                                    error: {
                                        type: "http",
                                        message: "unknown error"
                                    }
                                })
                            }, 0)
                        };
                        f.addEventListener ? f.addEventListener("load", j, !1) : f.onreadystatechange = function() {
                            /loaded|complete/.test(this.readyState) && j()
                        };
                        f.src = a;
                        b("DOMWrapper").getRoot().appendChild(f);
                        return !0
                    }

                    function c() {
                        h = !0
                    }
                    d = {
                        execute: a,
                        ignoreMaxQuerystringLength: c,
                        MAX_QUERYSTRING_LENGTH: g
                    };
                    e.exports = d
                }), null);
                __d("ApiClient", ["ApiBatcher", "ApiClientUtils", "Assert", "ChunkedRequest", "CORSRequest", "JSONPRequest", "Log", "ObservableMixin", "QueryString", "UrlMap", "flattenObject"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g, h, i, j = [],
                        k = b("JSONPRequest").MAX_QUERYSTRING_LENGTH,
                        l = {
                            fql_query: !0,
                            fql_multiquery: !0,
                            friends_get: !0,
                            notifications_get: !0,
                            stream_get: !0,
                            users_getinfo: !0
                        },
                        m = ["cors", "jsonp"],
                        n = 0,
                        o = [],
                        p = 0,
                        q = 0,
                        r, s = b("Log");

                    function t(a, c, d, e) {
                        __p && __p();
                        var f = p !== 0 && n >= p;
                        if (f) {
                            o.push(function() {
                                return t(a, c, d, e)
                            });
                            w.inform("request.queued", a, c, d);
                            return
                        }
                        n++;
                        var h = babelHelpers["extends"]({}, i, d);
                        h.pretty = h.pretty || 0;
                        h = b("flattenObject")(h);
                        f = {
                            jsonp: b("JSONPRequest"),
                            cors: b("CORSRequest"),
                            chunked: b("ChunkedRequest")
                        };
                        var k = {},
                            l = h.access_token || g;
                        l && (k.access_token = l);
                        c !== "get" && ES(j, "forEach", !0, function(a) {
                            k[a] = h[a]
                        });
                        l = ES("Object", "keys", !1, k);
                        l.length > 0 && (a = b("QueryString").appendToUrl(a, k), delete h.access_token);
                        l = m;
                        for (var q = 0; q < l.length; q++) {
                            var r = f[l[q]],
                                s = ES("Object", "assign", !1, {}, h);
                            if (r.execute(a, c, s, e)) return
                        }
                        e({
                            error: {
                                type: "no-transport",
                                message: "Could not find a usable transport for request"
                            }
                        })
                    }

                    function u(a, b, c, d, e, f, g, h) {
                        __p && __p();
                        if (d.transport && d.transport === "chunked" && h === !1) {
                            a(g, !1);
                            return
                        }
                        g && g.error && w.inform("request.error", b, c, d, g, ES("Date", "now", !1) - e, f);
                        w.inform("request.complete", b, c, d, g, ES("Date", "now", !1) - e, f);
                        n--;
                        a && a(g);
                        h = o.length > 0 && n < p;
                        if (h) {
                            b = o.shift();
                            b()
                        }
                    }

                    function v() {
                        for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
                        var e = b("ApiClientUtils").parseCallDataFromArgs(c),
                            f = e.uri,
                            g = e.callback,
                            h = e.params,
                            i = h.method;
                        x(f, i) && (i = "post");
                        var j = f.getProtocol() && f.getDomain() ? f.setQueryData({}).toString() : b("UrlMap").resolve("graph") + f.getPath(),
                            k = q++;
                        w.inform("request.prepare", j, h, k);
                        t(j, i == "get" ? "get" : "post", h, ES(u, "bind", !0, null, g, f.getPath(), i, h, ES("Date", "now", !1), k))
                    }

                    function a() {
                        var a;
                        r || (r = new(b("ApiBatcher"))(v, h));
                        (a = r).scheduleBatchCall.apply(a, arguments)
                    }

                    function c(a, c) {
                        __p && __p();
                        b("Assert").isObject(a);
                        b("Assert").isString(a.method, "method missing");
                        c || s.warn("No callback passed to the ApiClient");
                        var d = a.method.toLowerCase().replace(".", "_");
                        a.format = "json-strings";
                        a.api_key = h;
                        d = d in l ? "api_read" : "api";
                        d = b("UrlMap").resolve(d) + "/restserver.php";
                        var e = q++;
                        c = ES(u, "bind", !0, null, c, "/restserver.php", "get", a, ES("Date", "now", !1), e);
                        t(d, "get", a, c)
                    }

                    function d(a) {
                        return b("ApiBatcher").prepareBatchParams(a, j)
                    }
                    var w = ES("Object", "assign", !1, new(b("ObservableMixin"))(), {
                        setAccessToken: function(a) {
                            g && a && g !== a && s.error("You are overriding current access token, that means some other app is expecting different access token and you will probably break things. Please consider passing access_token directly to API parameters instead of overriding the global settings."), g = a
                        },
                        setAccessTokenForClientID: function(a, b) {
                            g && h && h !== b ? s.error("Not overriding access token since it was not initialized by your application.") : g = a
                        },
                        getClientID: function() {
                            return h
                        },
                        getAccessToken: function() {
                            return g
                        },
                        setClientID: function(a) {
                            h && h !== a && s.warn("Warning: Two different applications have attempted to set the client ID. Overriding the previously set client ID."), h = a
                        },
                        setDefaultParams: function(a) {
                            i = a
                        },
                        setDefaultTransports: function(a) {
                            m = a
                        },
                        setLogger: function(a) {
                            s = a
                        },
                        setMaxConcurrentRequests: function(a) {
                            p = a
                        },
                        setKeptQueryParams: function(a) {
                            j = a
                        },
                        getCurrentlyExecutingRequestCount: function() {
                            return n
                        },
                        getQueuedRequestCount: function() {
                            return o.length
                        },
                        rest: c,
                        graph: v,
                        scheduleBatchCall: a,
                        prepareBatchParams: d
                    });

                    function x(a, b) {
                        return a.toString().length > k && b === "get"
                    }
                    e.exports = w
                }), null);
                __d("sdk.PlatformVersioning", ["ManagedError", "sdk.Runtime"], (function(a, b, c, d, e, f) {
                    var g = /^v\d+\.\d\d?$/;
                    a = {
                        REGEX: g,
                        assertVersionIsSet: function() {
                            if (!b("sdk.Runtime").getVersion()) throw new(b("ManagedError"))("init not called with valid version")
                        },
                        assertValidVersion: function(a) {
                            if (!g.test(a)) throw new(b("ManagedError"))("invalid version specified")
                        }
                    };
                    e.exports = a
                }), null);
                __d("sdk.warnInsecure", ["Log", "sdk.feature", "sdk.Runtime", "sdk.Scribe"], (function(a, b, c, d, e, f) {
                    "use strict";
                    var g = b("sdk.feature")("https_only_learn_more", ""),
                        h = {};

                    function a(a) {
                        window.location.protocol !== "https:" && (b("Log").log("error", -1, "The method FB.%s can no longer be called from http pages. %s", a, g), b("sdk.feature")("https_only_scribe_logging", !0) && !Object.prototype.hasOwnProperty.call(h, a) && (b("sdk.Scribe").log("jssdk_error", {
                            appId: b("sdk.Runtime").getClientID(),
                            error: "HttpsOnly",
                            extra: {
                                message: a
                            }
                        }), h[a] = !0));
                        return !0
                    }
                    e.exports = a
                }), null);
                __d("sdk.api", ["ApiClient", "sdk.feature", "sdk.PlatformVersioning", "sdk.Runtime", "sdk.Scribe", "sdk.URI", "sdk.warnInsecure"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = b("sdk.feature")("should_log_response_error", !1),
                        h;
                    b("sdk.Runtime").subscribe("ClientID.change", function(a) {
                        return b("ApiClient").setClientID(a)
                    });
                    b("sdk.Runtime").subscribe("AccessToken.change", function(a) {
                        h = a, b("ApiClient").setAccessToken(a)
                    });
                    b("ApiClient").setDefaultParams({
                        sdk: "joey"
                    });
                    b("ApiClient").subscribe("request.complete", function(a, c, d, e) {
                        a = !1;
                        e && typeof e === "object" && (e.error ? (e.error == "invalid_token" || e.error.type == "OAuthException" && e.error.code == 190) && (a = !0) : e.error_code && (e.error_code == "190" && (a = !0)));
                        a && h === b("sdk.Runtime").getAccessToken() && b("sdk.Runtime").setAccessToken(null)
                    });
                    b("ApiClient").subscribe("request.complete", function(a, c, d, e) {
                        (a == "/me/permissions" && c === "delete" || a == "/restserver.php" && d.method == "Auth.revokeAuthorization") && e === !0 && b("sdk.Runtime").setAccessToken(null)
                    });
                    b("ApiClient").subscribe("request.error", function(a, c, d, e) {
                        g && e.error.type === "http" && b("sdk.Scribe").log("jssdk_error", {
                            appId: b("sdk.Runtime").getClientID(),
                            error: "transport",
                            extra: {
                                name: "transport",
                                message: ES("JSON", "stringify", !1, e.error) + " from " + a + " , " + c
                            }
                        })
                    });

                    function a(a) {
                        __p && __p();
                        b("sdk.warnInsecure")("api");
                        if (typeof a === "string")
                            if (b("sdk.Runtime").getIsVersioned()) {
                                b("sdk.PlatformVersioning").assertVersionIsSet();
                                !/https?/.test(a) && a.charAt(0) !== "/" && (a = "/" + a);
                                a = new(b("sdk.URI"))(a).setDomain(null).setProtocol(null).toString();
                                b("sdk.PlatformVersioning").REGEX.test(a.substring(1, ES(a, "indexOf", !0, "/", 1))) || (a = "/" + b("sdk.Runtime").getVersion() + a);
                                var c = [a].concat(Array.prototype.slice.call(arguments, 1));
                                b("ApiClient").graph.apply(b("ApiClient"), c)
                            } else b("ApiClient").graph.apply(b("ApiClient"), arguments);
                        else b("ApiClient").rest.apply(b("ApiClient"), arguments)
                    }
                    e.exports = a
                }), null);
                __d("legacy:fb.api", ["FB", "sdk.api"], (function(a, b, c, d, e, f) {
                    b("FB").provide("", {
                        api: b("sdk.api")
                    })
                }), 3);
                __d("AppUserPropertyAPIBuiltinField", [], (function(a, b, c, d, e, f) {
                    e.exports = {
                        GENDER: "$gender",
                        CITY: "$city",
                        STATE: "$state",
                        ZIPCODE: "$zipcode",
                        COUNTRY: "$country",
                        LANGUAGE: "$language",
                        CURRENCY: "$currency",
                        INSTALL_SOURCE: "$install_source",
                        USER_TYPE: "$user_type",
                        ACCOUNT_CREATED_TIME: "$account_created_time",
                        APP_ID: "$app_id"
                    }
                }), null);
                __d("FBEventsParamList", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = "deep",
                        h = "shallow";

                    function a() {
                        this.list = []
                    }
                    a.prototype = {
                        append: function(a, b) {
                            this._append(encodeURIComponent(a), b, g)
                        },
                        _append: function(a, b, c) {
                            Object(b) !== b ? this._appendPrimitive(a, b) : c === g ? this._appendObject(a, b) : this._appendPrimitive(a, i(b))
                        },
                        _appendPrimitive: function(a, b) {
                            b != null && this.list.push([a, b])
                        },
                        _appendObject: function(a, b) {
                            for (var c in b)
                                if (Object.prototype.hasOwnProperty.call(b, c)) {
                                    var d = a + "[" + encodeURIComponent(c) + "]";
                                    this._append(d, b[c], h)
                                }
                        },
                        each: function(a) {
                            var b = this.list;
                            for (var c = 0, d = b.length; c < d; c++) a(b[c][0], b[c][1])
                        },
                        toQueryString: function() {
                            var a = [];
                            this.each(function(b, c) {
                                a.push(b + "=" + encodeURIComponent(c))
                            });
                            return a.join("&")
                        }
                    };

                    function i(a) {
                        if (typeof JSON === "undefined" || JSON === null || !ES("JSON", "stringify", !1)) return Object.prototype.toString.call(a);
                        else return ES("JSON", "stringify", !1, a)
                    }
                    e.exports = a
                }), null);
                __d("FBEventsUtils", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = "console",
                        h = "error",
                        i = "Facebook Pixel Error",
                        j = "Facebook Pixel Warning",
                        k = "warn",
                        l = Object.prototype.toString,
                        m = !("addEventListener" in document),
                        n = function() {},
                        o = window[g] || {},
                        p = window.postMessage || n;

                    function a(a) {
                        return l.call(a) === "[object Array]"
                    }

                    function b(a) {
                        p({
                            action: "FB_LOG",
                            logType: i,
                            logMessage: a
                        }, "*"), h in o && o[h](i + ": " + a)
                    }

                    function c(a) {
                        p({
                            action: "FB_LOG",
                            logType: j,
                            logMessage: a
                        }, "*"), k in o && o[k](j + ": " + a)
                    }

                    function d(a, b, c) {
                        b = m ? "on" + b : b;
                        var d = m ? "attachEvent" : "addEventListener",
                            e = m ? "detachEvent" : "removeEventListener",
                            f = function d() {
                                a[e](b, d, !1), c()
                            };
                        a[d](b, f, !1)
                    }

                    function e(a, b, c) {
                        var d = a[b];
                        a[b] = function() {
                            var a = d.apply(this, arguments);
                            c.apply(this, arguments);
                            return a
                        }
                    }
                    f.isArray = a;
                    f.logError = b;
                    f.logWarning = c;
                    f.listenOnce = d;
                    f.injectMethod = e
                }), null);
                __d("FBPixelEndpoint", ["FBEventsParamList", "FBEventsUtils"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = "https://www.facebook.com/tr/",
                        h = location.href,
                        i = window.top !== window,
                        j = document.referrer;

                    function k(a, c, d, e) {
                        __p && __p();
                        e = e || {};
                        var f = new(b("FBEventsParamList"))();
                        f.append("id", a);
                        f.append("ev", c);
                        f.append("dl", h);
                        f.append("rl", j);
                        f.append("if", i);
                        f.append("ts", new Date().valueOf());
                        f.append("cd", d);
                        f.append("sw", window.screen.width);
                        f.append("sh", window.screen.height);
                        for (var g in e) f.append(g, e[g]);
                        return f
                    }

                    function a(a, b, c, d) {
                        a = k(a, b, c, d);
                        b = a.toQueryString();
                        2048 > (g + "?" + b).length ? l(g, b) : m(g, a)
                    }

                    function l(a, b) {
                        var c = new Image();
                        c.src = a + "?" + b
                    }

                    function m(a, c) {
                        __p && __p();
                        var d = "fb" + Math.random().toString().replace(".", ""),
                            e = document.createElement("form");
                        e.method = "post";
                        e.action = a;
                        e.target = d;
                        e.acceptCharset = "utf-8";
                        e.style.display = "none";
                        a = !!(window.attachEvent && !window.addEventListener);
                        a = a ? '<iframe name="' + d + '">' : "iframe";
                        var f = document.createElement(a);
                        f.src = "javascript:false";
                        f.id = d;
                        f.name = d;
                        e.appendChild(f);
                        b("FBEventsUtils").listenOnce(f, "load", function() {
                            c.each(function(a, b) {
                                var c = document.createElement("input");
                                c.name = a;
                                c.value = b;
                                e.appendChild(c)
                            }), b("FBEventsUtils").listenOnce(f, "load", function() {
                                e.parentNode.removeChild(e)
                            }), e.submit()
                        });
                        document.body.appendChild(e)
                    }
                    c = {
                        sendEvent: a
                    };
                    e.exports = c
                }), null);
                __d("FBAppEvents", ["ApiClient", "FBPixelEndpoint"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();

                    function a(a, c, d, e, f) {
                        var g = {};
                        e != null && (g.vts = e.toString());
                        f != null && (g.at = f);
                        b("FBPixelEndpoint").sendEvent(a.toString(), c, d, g)
                    }

                    function c(a, c, d, e) {
                        c = "/" + c + "/user_properties";
                        a = {
                            data: [{
                                user_unique_id: a,
                                custom_data: d
                            }]
                        };
                        b("ApiClient").graph(c, "post", a, e)
                    }
                    e.exports = {
                        logEvent: a,
                        updateUserProperties: c
                    }
                }), null);
                __d("sdk.Event", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = {
                        SUBSCRIBE: "event.subscribe",
                        UNSUBSCRIBE: "event.unsubscribe",
                        subscribers: function() {
                            this._subscribersMap || (this._subscribersMap = {});
                            return this._subscribersMap
                        },
                        subscribe: function(a, b) {
                            var c = this.subscribers();
                            !c[a] ? c[a] = [b] : ES(c[a], "indexOf", !0, b) == -1 && c[a].push(b);
                            a != this.SUBSCRIBE && a != this.UNSUBSCRIBE && this.fire(this.SUBSCRIBE, a, c[a])
                        },
                        unsubscribe: function(a, b) {
                            var c = this.subscribers()[a];
                            c && ES(c, "forEach", !0, function(a, d) {
                                a === b && c.splice(d, 1)
                            });
                            a != this.SUBSCRIBE && a != this.UNSUBSCRIBE && this.fire(this.UNSUBSCRIBE, a, c)
                        },
                        monitor: function(a, b) {
                            if (!b()) {
                                var c = this,
                                    d = function d() {
                                        b.apply(b, arguments) && c.unsubscribe(a, d)
                                    };
                                this.subscribe(a, d)
                            }
                        },
                        clear: function(a) {
                            delete this.subscribers()[a]
                        },
                        fire: function(a) {
                            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                            var e = this.subscribers()[a];
                            e && ES(e, "forEach", !0, function(a) {
                                a && a.apply(this, c)
                            })
                        }
                    };
                    e.exports = a
                }), null);
                __d("sdk.AppEvents", ["AppUserPropertyAPIBuiltinField", "Assert", "FBAppEvents", "sdk.Auth", "sdk.Event", "sdk.Impressions", "sdk.Model", "sdk.Runtime"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = ES("Object", "freeze", !1, {
                            COMPLETED_REGISTRATION: "fb_mobile_complete_registration",
                            VIEWED_CONTENT: "fb_mobile_content_view",
                            SEARCHED: "fb_mobile_search",
                            RATED: "fb_mobile_rate",
                            COMPLETED_TUTORIAL: "fb_mobile_tutorial_completion",
                            ADDED_TO_CART: "fb_mobile_add_to_cart",
                            ADDED_TO_WISHLIST: "fb_mobile_add_to_wishlist",
                            INITIATED_CHECKOUT: "fb_mobile_initiated_checkout",
                            ADDED_PAYMENT_INFO: "fb_mobile_add_payment_info",
                            ACHIEVED_LEVEL: "fb_mobile_level_achieved",
                            UNLOCKED_ACHIEVEMENT: "fb_mobile_achievement_unlocked",
                            PAGE_VIEW: "fb_page_view",
                            SPENT_CREDITS: "fb_mobile_spent_credits"
                        }),
                        h = ES("Object", "freeze", !1, {
                            ACTIVATED_APP: "fb_mobile_activate_app",
                            PURCHASED: "fb_mobile_purchase"
                        }),
                        i = ES("Object", "freeze", !1, {
                            APP_USER_ID: "_app_user_id",
                            APP_VERSION: "_appVersion",
                            CURRENCY: "fb_currency",
                            REGISTRATION_METHOD: "fb_registration_method",
                            CONTENT_TYPE: "fb_content_type",
                            CONTENT_ID: "fb_content_id",
                            SEARCH_STRING: "fb_search_string",
                            SUCCESS: "fb_success",
                            MAX_RATING_VALUE: "fb_max_rating_value",
                            PAYMENT_INFO_AVAILABLE: "fb_payment_info_available",
                            NUM_ITEMS: "fb_num_items",
                            LEVEL: "fb_level",
                            DESCRIPTION: "fb_description"
                        }),
                        j = /^[0-9a-zA-Z_][0-9a-zA-Z _-]{0,39}$/,
                        k = 40,
                        l = j,
                        m = k,
                        n = 100,
                        o = 100,
                        p = 100,
                        q = 100,
                        r = ES("Object", "values", !1, b("AppUserPropertyAPIBuiltinField")),
                        s = new(b("sdk.Model"))({
                            UserID: "",
                            Version: ""
                        });

                    function t(a, c, d, e) {
                        c = {
                            ae: 1,
                            ev: c,
                            vts: d,
                            canvas: 1
                        };
                        e && (c.cd = e);
                        b("sdk.Impressions").impression({
                            api_key: a,
                            payload: ES("JSON", "stringify", !1, c)
                        })
                    }

                    function u(a, c, d, e) {
                        var f = b("sdk.Auth").getAuthResponse();
                        f = f && f.accessToken ? f.accessToken : null;
                        b("FBAppEvents").logEvent(a, c, e || {}, d, f)
                    }

                    function v(a, c, d, e) {
                        w(c);
                        var f = s.getUserID();
                        f !== "" && (e = e || {}, e[i.APP_USER_ID] = f);
                        f = s.getVersion();
                        f !== "" && (e = e || {}, e[i.APP_VERSION] = f);
                        b("sdk.Runtime").isCanvasEnvironment() ? t(a, c, d, e) : u(a, c, d, e)
                    }

                    function w(a) {
                        b("Assert").isTrue(j.test(a), "Invalid event name: " + a + ". It must be between 1 and " + k + " characters, and must be contain only alphanumerics, _, - or spaces, starting with alphanumeric or _.")
                    }

                    function a(a, b, c, d) {
                        var e = {};
                        e[i.CURRENCY] = c;
                        v(a, h.PURCHASED, b, babelHelpers["extends"]({}, d, e))
                    }

                    function c(a) {
                        v(a, h.ACTIVATED_APP)
                    }

                    function x(a) {
                        v(a, g.PAGE_VIEW)
                    }

                    function y(a) {
                        b("Assert").isTrue(a.length !== 0, "User ID must be set before updateUserProperties can be called."), b("Assert").isTrue(a.length <= n, "Invalid user ID: " + a + ". It must be no longer than " + n + " characters.")
                    }

                    function d(a) {
                        y(a), s.setUserID(a)
                    }

                    function z() {
                        return s.getUserID()
                    }

                    function f() {
                        s.setUserID("")
                    }

                    function A(a) {
                        b("Assert").isTrue(a.length <= o, "Invalid app version: " + a + ". It must be no longer than " + o + " characters.")
                    }

                    function B(a) {
                        A(a), s.setVersion(a)
                    }

                    function C() {
                        return s.getVersion()
                    }

                    function D() {
                        s.setVersion("")
                    }

                    function E(a) {
                        b("Assert").isTrue(ES("Object", "keys", !1, a).length <= p, "The total number of user properties cannot exceed " + p + ".");
                        for (var c in a) b("Assert").isTrue(l.test(c) || ES(r, "includes", !0, c), "Invalid user properties key name: " + c + ". It must be between 1 and " + m + " characters, and must contain only alphanumerics, _, - or spaces, starting with alphanumeric or _. Or, it must be a pre-defined user property"), b("Assert").isTrue(a[c].toString().length <= q, "Invalid user properties value: " + a[c] + ". It must be no longer than " + q + " characters.")
                    }

                    function F(a, c, d) {
                        var e = z();
                        y(e);
                        E(c);
                        b("FBAppEvents").updateUserProperties(e, a, c, d)
                    }
                    b("sdk.Event").subscribe("init:post", function(a) {
                        b("sdk.Runtime").getClientID() && (a.autoLogAppEvents !== void 0 && (b("Assert").isBoolean(a.autoLogAppEvents, "Type of property autoLogAppEvents must be boolean"), b("sdk.Runtime").setAutoLogAppEvents(a.autoLogAppEvents)), b("sdk.Runtime").getAutoLogAppEvents() && x(b("sdk.Runtime").getClientID()))
                    });
                    e.exports = {
                        activateApp: c,
                        logEvent: v,
                        logPurchase: a,
                        logPageView: x,
                        assertValidEventName: w,
                        EventNames: g,
                        ParameterNames: i,
                        assertValidUserID: y,
                        setUserID: d,
                        getUserID: z,
                        clearUserID: f,
                        assertValidUserProperties: E,
                        updateUserProperties: F,
                        setAppVersion: B,
                        getAppVersion: C,
                        clearAppVersion: D,
                        assertValidAppVersion: A
                    }
                }), null);
                __d("legacy:fb.appevents", ["Assert", "sdk.AppEvents", "FB", "sdk.Runtime"], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function g() {
                        var a = b("sdk.Runtime").getClientID();
                        b("Assert").isTrue(a !== null && a.length > 0, "You need to call FB.init() with App ID first.");
                        return a
                    }
                    b("FB").provide("AppEvents", {
                        logEvent: function(a, c, d) {
                            b("sdk.AppEvents").logEvent(g(), a, c, d)
                        },
                        logPurchase: function(a, c, d) {
                            b("sdk.AppEvents").logPurchase(g(), a, c, d)
                        },
                        activateApp: function() {
                            b("sdk.AppEvents").activateApp(g())
                        },
                        logPageView: function() {
                            b("sdk.AppEvents").logPageView(g())
                        },
                        setUserID: function(a) {
                            b("sdk.AppEvents").setUserID(a)
                        },
                        getUserID: function() {
                            return b("sdk.AppEvents").getUserID()
                        },
                        clearUserID: function() {
                            b("sdk.AppEvents").clearUserID()
                        },
                        updateUserProperties: function(a, c) {
                            b("sdk.AppEvents").updateUserProperties(g(), a, c)
                        },
                        setAppVersion: function(a) {
                            b("sdk.AppEvents").setAppVersion(a)
                        },
                        getAppVersion: function() {
                            return b("sdk.AppEvents").getAppVersion()
                        },
                        clearAppVersion: function() {
                            b("sdk.AppEvents").clearAppVersion()
                        },
                        EventNames: b("sdk.AppEvents").EventNames,
                        ParameterNames: b("sdk.AppEvents").ParameterNames
                    })
                }), 3);
                __d("resolveURI", [], (function(a, b, c, d, e, f) {
                    function a(a) {
                        if (!a) return window.location.href;
                        a = a.replace(/&/g, "&amp;").replace(/\"/g, "&quot;");
                        var b = document.createElement("div");
                        b.innerHTML = '<a href="' + a + '"></a>';
                        return b.firstChild.href
                    }
                    e.exports = a
                }), null);
                __d("dedupString", [], (function(a, b, c, d, e, f) {
                    "use strict";

                    function a(a) {
                        var b;
                        return ES("Object", "keys", !1, (b = {}, b[a] = 0, b))[0]
                    }
                    e.exports = a
                }), null);
                __d("emptyFunction", [], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function a(a) {
                        return function() {
                            return a
                        }
                    }
                    b = function() {};
                    b.thatReturns = a;
                    b.thatReturnsFalse = a(!1);
                    b.thatReturnsTrue = a(!0);
                    b.thatReturnsNull = a(null);
                    b.thatReturnsThis = function() {
                        return this
                    };
                    b.thatReturnsArgument = function(a) {
                        return a
                    };
                    e.exports = b
                }), null);
                __d("DOMEventListener", ["invariant", "dedupString", "emptyFunction", "wrapFunction"], (function(a, b, c, d, e, f, g) {
                    __p && __p();
                    var h = !1;
                    try {
                        a = Object.defineProperty({}, "passive", {
                            get: function() {
                                h = !0
                            }
                        });
                        window.addEventListener("test", null, a)
                    } catch (a) {}
                    var i, j;
                    window.addEventListener ? (i = function(a, c, d, e) {
                        e === void 0 && (e = !1), d.wrapper = b("wrapFunction")(d, "entry", b("dedupString")("DOMEventListener.add " + c)), a.addEventListener(c, d.wrapper, h ? e : !1)
                    }, j = function(a, b, c, d) {
                        d === void 0 && (d = !1), a.removeEventListener(b, c.wrapper, h ? d : !1)
                    }) : window.attachEvent ? (i = function(a, c, d, e) {
                        e === void 0, d.wrapper = b("wrapFunction")(d, "entry", "DOMEventListener.add " + c), a.attachEvent || g(0, 2798), a.attachEvent("on" + c, d.wrapper)
                    }, j = function(a, b, c, d) {
                        d === void 0, a.detachEvent || g(0, 2799), a.detachEvent("on" + b, c.wrapper)
                    }) : j = i = b("emptyFunction");
                    c = {
                        add: function(a, b, c, d) {
                            d === void 0 && (d = !1);
                            i(a, b, c, d);
                            return {
                                remove: function() {
                                    j(a, b, c, d)
                                }
                            }
                        },
                        remove: j
                    };
                    e.exports = c
                }), null);
                __d("JSONRPC", ["Log"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    a = function() {
                        "use strict";
                        __p && __p();

                        function a(a) {
                            var b = this;
                            this.$1 = 0;
                            this.$2 = {};
                            this.remote = function(a) {
                                b.$3 = a;
                                return b.remote
                            };
                            this.local = {};
                            this.$4 = a
                        }
                        var c = a.prototype;
                        c.stub = function(a) {
                            var b = this;
                            this.remote[a] = function() {
                                var c = {
                                    jsonrpc: "2.0",
                                    method: a
                                };
                                for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                                typeof e[e.length - 1] === "function" && (c.id = ++b.$1, b.$2[c.id] = e.pop());
                                c.params = e;
                                b.$4(ES("JSON", "stringify", !1, c), b.$3 || {
                                    method: a
                                })
                            }
                        };
                        c.read = function(a, c) {
                            __p && __p();
                            a = ES("JSON", "parse", !1, a);
                            var d = a.id;
                            if (!a.method) {
                                if (!this.$2[d]) {
                                    b("Log").warn("Could not find callback %s", d);
                                    return
                                }
                                var e = this.$2[d];
                                delete this.$2[d];
                                delete a.id;
                                delete a.jsonrpc;
                                e(a);
                                return
                            }
                            var f = this;
                            e = this.local[a.method];
                            var g;
                            d ? g = function(a, b) {
                                var e = {
                                    jsonrpc: "2.0",
                                    id: d
                                };
                                e[a] = b;
                                window.setTimeout(function() {
                                    f.$4(ES("JSON", "stringify", !1, e), c)
                                }, 0)
                            } : g = function() {};
                            if (!e) {
                                b("Log").error('Method "%s" has not been defined', a.method);
                                g("error", {
                                    code: -32601,
                                    message: "Method not found",
                                    data: a.method
                                });
                                return
                            }
                            a.params.push(ES(g, "bind", !0, null, "result"));
                            a.params.push(ES(g, "bind", !0, null, "error"));
                            try {
                                e = e.apply(c || null, a.params);
                                typeof e !== "undefined" && g("result", e)
                            } catch (c) {
                                b("Log").error("Invokation of RPC method %s resulted in the error: %s", a.method, c.message), g("error", {
                                    code: -32603,
                                    message: "Internal error",
                                    data: c.message
                                })
                            }
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("Queue", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {};
                    a = function() {
                        "use strict";
                        __p && __p();

                        function a(a) {
                            this._timeout = null, this._interval = (a == null ? void 0 : a.interval) || 0, this._processor = a == null ? void 0 : a.processor, this._queue = [], this._stopped = !0
                        }
                        var b = a.prototype;
                        b._dispatch = function(a) {
                            __p && __p();
                            var b = this;
                            a === void 0;
                            if (this._stopped || this._queue.length === 0) return;
                            a = this._processor;
                            if (a == null) {
                                this._stopped = !0;
                                throw new Error("No processor available")
                            }
                            var c = this._interval;
                            if (c != null) a.call(this, this._queue.shift()), this._timeout = setTimeout(function() {
                                return b._dispatch()
                            }, c);
                            else
                                while (this._queue.length) a.call(this, this._queue.shift())
                        };
                        b.enqueue = function(a) {
                            this._processor && !this._stopped ? this._processor(a) : this._queue.push(a);
                            return this
                        };
                        b.start = function(a) {
                            a && (this._processor = a);
                            this._stopped = !1;
                            this._dispatch();
                            return this
                        };
                        b.isStarted = function() {
                            return !this._stopped
                        };
                        b.dispatch = function() {
                            this._dispatch(!0)
                        };
                        b.stop = function(a) {
                            this._stopped = !0;
                            a && this._timeout != null && clearTimeout(this._timeout);
                            return this
                        };
                        b.merge = function(a, b) {
                            if (b) {
                                (b = this._queue).unshift.apply(b, a._queue)
                            } else {
                                (b = this._queue).push.apply(b, a._queue)
                            }
                            a._queue = [];
                            this._dispatch();
                            return this
                        };
                        b.getLength = function() {
                            return this._queue.length
                        };
                        a.get = function(b, c) {
                            var d;
                            b in g ? d = g[b] : d = g[b] = new a(c);
                            return d
                        };
                        a.exists = function(a) {
                            return a in g
                        };
                        a.remove = function(a) {
                            return delete g[a]
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("sdk.RPC", ["Assert", "JSONRPC", "Queue"], (function(a, b, c, d, e, f) {
                    var g = new(b("Queue"))(),
                        h = new(b("JSONRPC"))(function(a) {
                            g.enqueue(a)
                        });
                    a = {
                        local: h.local,
                        remote: h.remote,
                        stub: ES(h.stub, "bind", !0, h),
                        setInQueue: function(a) {
                            b("Assert").isInstanceOf(b("Queue"), a), a.start(function(a) {
                                h.read(a)
                            })
                        },
                        getOutQueue: function() {
                            return g
                        }
                    };
                    e.exports = a
                }), null);
                __d("sdk.Canvas.Environment", ["sdk.RPC"], (function(a, b, c, d, e, f) {
                    function a(a) {
                        b("sdk.RPC").remote.getPageInfo(function(b) {
                            a(b.result)
                        })
                    }

                    function c(a, c) {
                        b("sdk.RPC").remote.scrollTo({
                            x: a || 0,
                            y: c || 0
                        })
                    }
                    b("sdk.RPC").stub("getPageInfo");
                    b("sdk.RPC").stub("scrollTo");
                    d = {
                        getPageInfo: a,
                        scrollTo: c
                    };
                    e.exports = d
                }), null);
                __d("sdk.DialogUtils", ["DOMEventListener", "sdk.Content", "sdk.DOM", "sdk.UA"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = {
                        isOrientationPotrait: function() {
                            return window.innerWidth < window.innerHeight
                        },
                        addDoubleClickAction: function(a, c, d) {
                            var e = null;
                            return b("DOMEventListener").add(a, "click", function() {
                                e !== null && (clearTimeout(e), e = null, c()), e = setTimeout(function() {
                                    e = null
                                }, d)
                            })
                        },
                        addIdleDesktopAction: function(a, c, d) {
                            var e, f, g = function() {
                                e = setTimeout(c, d)
                            };
                            g();
                            return b("DOMEventListener").add(a, "mouseenter", function() {
                                clearTimeout(e), f || (f = b("DOMEventListener").add(a, "mouseleave", function() {
                                    g()
                                }))
                            })
                        },
                        addMobileOrientationChangeAction: function(a) {
                            if (!b("sdk.UA").mobile()) return null;
                            var c = "onorientationchange" in window ? "orientationchange" : "resize",
                                d = function(b) {
                                    return setTimeout(function(b) {
                                        return a(b)
                                    }, 50)
                                };
                            return b("DOMEventListener").add(window, c, d)
                        },
                        applyScreenDimensions: function(a) {
                            if (a == null) return;
                            var c = b("sdk.DOM").getViewportInfo();
                            a.style.minHeight = c.height || c.width ? c.height + "px" : "";
                            a.style.top = c.scrollTop ? c.scrollTop + "px" : ""
                        },
                        setDialogPositionToCenter: function(a, c, d) {
                            __p && __p();
                            var e = function(a) {
                                    return typeof a === "number" ? a : parseInt(a, 10)
                                },
                                f = b("sdk.DOM").getViewportInfo(),
                                g = e(a.offsetWidth);
                            e = e(a.offsetHeight);
                            g = f.scrollLeft + (f.width - g) / 2;
                            var h = (f.height - e) / 2.5;
                            g < h && (h = g);
                            var i = f.height - e - h,
                                j = (f.height - e) / 2;
                            d && (j = d.scrollTop - d.offsetTop + (d.clientHeight - e) / 2);
                            j < h ? j = h : j > i && (j = i);
                            j += f.scrollTop;
                            if (b("sdk.UA").mobile()) {
                                d = 100;
                                c ? (d += (f.height - e) / 2, b("sdk.DOM").addCss(document.body, "fb_reposition")) : (b("sdk.DOM").addCss(document.body, "fb_hidden"), document.body.style.width = "auto", j = 1e4);
                                h = b("sdk.DOM").getByClass("fb_dialog_padding", a);
                                h.length && (h[0].style.height = d + "px")
                            }
                            a.style.left = (g > 0 ? g : 0) + "px";
                            a.style.top = (j > 0 ? j : 0) + "px"
                        },
                        setDialogPositionToTop: function(a, c, d) {
                            this.setDialogPositionToCenter(a, c, d);
                            c = b("sdk.DOM").getViewportInfo();
                            d = c.scrollTop + (c.height - a.offsetHeight) * .05;
                            b("sdk.DOM").setStyle(a, "top", d + "px")
                        },
                        setupNewDarkOverlay: function() {
                            var a = document.createElement("div");
                            a.setAttribute("id", "fb_dialog_ipad_overlay");
                            this.applyScreenDimensions(a);
                            return a
                        },
                        setupNewDialog: function(a) {
                            __p && __p();
                            a = a || {};
                            var c = document.createElement("div"),
                                d = a;
                            d = d.onClose;
                            if (a.closeIcon && d) {
                                var e = document.createElement("a");
                                e.className = "fb_dialog_close_icon";
                                b("DOMEventListener").add(e, "click", d);
                                c.appendChild(e)
                            }
                            d = "fb_dialog";
                            d += " " + (a.classes || "");
                            d += b("sdk.UA").mobile() ? " fb_dialog_mobile" : " fb_dialog_advanced";
                            c.className = d;
                            if (a.width) {
                                e = parseInt(a.width, 10);
                                isNaN(e) || (c.style.width = e + "px")
                            }
                            d = document.createElement("div");
                            a.content && b("sdk.Content").append(a.content, d);
                            d.className = "fb_dialog_content";
                            c.appendChild(d);
                            if (b("sdk.UA").mobile()) {
                                e = document.createElement("div");
                                e.className = "fb_dialog_padding";
                                c.appendChild(e)
                            }
                            return {
                                dialogElement: c,
                                contentRoot: d
                            }
                        },
                        onDialogHideCleanup: function(a) {
                            var c = document.body;
                            a ? b("sdk.DOM").removeCss(c, "fb_reposition") : b("sdk.DOM").removeCss(c, "fb_hidden")
                        }
                    };
                    e.exports = a
                }), null);
                __d("sdk.fbt", [], (function(a, b, c, d, e, f) {
                    a = {
                        _: function(a) {
                            return typeof a === "string" ? a : a[0]
                        }
                    };
                    e.exports = a
                }), null);
                __d("sdk.Dialog", ["DOMEventListener", "ObservableMixin", "Type", "sdk.Canvas.Environment", "sdk.Content", "sdk.DialogUtils", "sdk.DOM", "sdk.fbt", "sdk.Runtime", "sdk.UA"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = 30,
                        h = 590,
                        i = 500,
                        j = 240,
                        k = 575;

                    function l() {
                        var a = b("sdk.DOM").getViewportInfo();
                        return a.height && a.width ? {
                            width: Math.min(a.width, i),
                            height: Math.min(a.height, h)
                        } : null
                    }
                    var m = b("Type").extend({
                            constructor: function(a, b) {
                                this.parent(), this.id = a, this.display = b, this._e2e = {}, n._dialogs || (n._dialogs = {}, n._addOrientationHandler()), n._dialogs[a] = this, this.trackEvent("init")
                            },
                            trackEvent: function(a, b) {
                                if (this._e2e[a]) return this;
                                this._e2e[a] = b || ES("Date", "now", !1);
                                a == "close" && this.inform("e2e:end", this._e2e);
                                return this
                            },
                            trackEvents: function(a) {
                                typeof a === "string" && (a = ES("JSON", "parse", !1, a));
                                for (var b in a) Object.prototype.hasOwnProperty.call(a, b) && this.trackEvent(b, a[b]);
                                return this
                            }
                        }, b("ObservableMixin")),
                        n = {
                            newInstance: function(a, b) {
                                return new m(a, b)
                            },
                            _dialogs: null,
                            _lastYOffset: 0,
                            _overlayListeners: [],
                            _loaderEl: null,
                            _overlayEl: null,
                            _stack: [],
                            _active: null,
                            get: function(a) {
                                return n._dialogs[a]
                            },
                            _findRoot: function(a) {
                                while (a) {
                                    if (b("sdk.DOM").containsCss(a, "fb_dialog")) return a;
                                    a = a.parentNode
                                }
                            },
                            _createWWWLoader: function(a) {
                                a = a ? a : 460;
                                return n.create({
                                    content: '<div class="dialog_title">  <a id="fb_dialog_loader_close">    <div class="fb_dialog_close_icon"></div>  </a>  <span>Facebook</span>  <div style="clear:both;"></div></div><div class="dialog_content"></div><div class="dialog_footer"></div>',
                                    width: a
                                })
                            },
                            _createMobileLoader: function() {
                                var a;
                                b("sdk.UA").nativeApp() ? a = '<div class="dialog_header"></div>' : n.isTabletStyle() ? a = '<div class="overlayLoader"><div id="fb_dialog_loader_spinner"></div><a id="fb_dialog_loader_close" href="#">' + b("sdk.fbt")._("Cancel") + "</a></div>" : a = '<div class="dialog_header"><table>  <tbody>    <tr>      <td class="header_left">        <label class="touchable_button">          <input type="submit" value="' + b("sdk.fbt")._("Cancel") + '"            id="fb_dialog_loader_close"/>        </label>      </td>      <td class="header_center">        <div>         ' + b("sdk.fbt")._("Loading...") + '        </div>      </td>      <td class="header_right">      </td>    </tr>  </tbody></table></div>';
                                return n.create({
                                    classes: "loading" + (n.isTabletStyle() ? " centered" : ""),
                                    content: a
                                })
                            },
                            _setDialogOverlayStyle: function() {
                                b("sdk.DialogUtils").applyScreenDimensions(n._overlayEl)
                            },
                            _showTabletOverlay: function(a) {
                                if (!n.isTabletStyle()) return;
                                n._overlayEl || (n._overlayEl = b("sdk.DialogUtils").setupNewDarkOverlay(), b("sdk.Content").append(n._overlayEl, null));
                                n._overlayEl.className = ""
                            },
                            _hideTabletOverlay: function() {
                                n.isTabletStyle() && (n._overlayEl.className = "hidden", ES(n._overlayListeners, "forEach", !0, function(a) {
                                    return a.remove()
                                }), n._overlayListeners = [])
                            },
                            showLoader: function(a, c) {
                                __p && __p();
                                a || (a = function() {});
                                var d = function() {
                                    n._hideLoader(), b("sdk.DialogUtils").onDialogHideCleanup(n.isTabletStyle()), n._hideTabletOverlay(), a()
                                };
                                n._showTabletOverlay(d);
                                n._loaderEl || (n._loaderEl = n._findRoot(b("sdk.UA").mobile() ? n._createMobileLoader() : n._createWWWLoader(c)));
                                c = document.getElementById("fb_dialog_loader_close");
                                if (c) {
                                    b("sdk.DOM").removeCss(c, "fb_hidden");
                                    c = b("DOMEventListener").add(c, "click", d);
                                    n._overlayListeners.push(c)
                                }
                                n._makeActive(n._loaderEl)
                            },
                            _hideLoader: function() {
                                n._loaderEl && n._loaderEl == n._active && (n._loaderEl.style.top = "-10000px")
                            },
                            _makeActive: function(a) {
                                n._setDialogSizes(), n._lowerActive(), n._active = a, b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) && b("sdk.Canvas.Environment").getPageInfo(function(a) {
                                    n._centerActive(a)
                                }), n._centerActive()
                            },
                            _lowerActive: function() {
                                if (!n._active) return;
                                n._active.style.top = "-10000px";
                                n._active = null
                            },
                            _removeStacked: function(a) {
                                n._stack = ES(n._stack, "filter", !0, function(b) {
                                    return b != a
                                })
                            },
                            _centerActive: function(a) {
                                var c = n._active;
                                if (!c) return;
                                b("sdk.DialogUtils").setDialogPositionToCenter(c, n.isTabletStyle(), a)
                            },
                            _setDialogSizes: function(a) {
                                a === void 0 && (a = !1);
                                if (!b("sdk.UA").mobile()) return;
                                for (var c in n._dialogs)
                                    if (Object.prototype.hasOwnProperty.call(n._dialogs, c)) {
                                        var d = document.getElementById(c);
                                        d && (d.style.width = n.getDefaultSize().width + "px", a || (d.style.height = n.getDefaultSize().height + "px"))
                                    }
                            },
                            getDefaultSize: function() {
                                __p && __p();
                                if (b("sdk.UA").mobile()) {
                                    var a = l();
                                    if (a) {
                                        b("sdk.DOM").getViewportInfo().width <= a.width && (a.width = b("sdk.DOM").getViewportInfo().width - g);
                                        b("sdk.DOM").getViewportInfo().height <= a.height && (a.height = b("sdk.DOM").getViewportInfo().height - g);
                                        return a
                                    }
                                    if (b("sdk.UA").ipad()) return {
                                        width: i,
                                        height: h
                                    };
                                    if (b("sdk.UA").android()) return {
                                        width: screen.availWidth,
                                        height: screen.availHeight
                                    };
                                    else {
                                        a = window.innerWidth;
                                        var c = window.innerHeight,
                                            d = a / c > 1.2;
                                        return {
                                            width: a,
                                            height: Math.max(c, d ? screen.width : screen.height)
                                        }
                                    }
                                }
                                return {
                                    width: k,
                                    height: j
                                }
                            },
                            _handleOrientationChange: function() {
                                __p && __p();
                                n._availScreenWidth = b("sdk.DOM").getViewportInfo().width;
                                if (n.isTabletStyle()) n._setDialogSizes(!0), n._centerActive(), n._setDialogOverlayStyle();
                                else {
                                    var a = n.getDefaultSize().width;
                                    for (var c in n._dialogs)
                                        if (Object.prototype.hasOwnProperty.call(n._dialogs, c)) {
                                            var d = document.getElementById(c);
                                            d && (d.style.width = a + "px")
                                        }
                                }
                            },
                            _addOrientationHandler: function() {
                                if (!b("sdk.UA").mobile()) return null;
                                n._availScreenWidth = b("sdk.DOM").getViewportInfo().width;
                                b("sdk.DialogUtils").addMobileOrientationChangeAction(n._handleOrientationChange)
                            },
                            create: function(a) {
                                var c = b("sdk.DialogUtils").setupNewDialog(a);
                                b("sdk.Content").append(c.dialogElement);
                                a.visible && n.show(c.dialogElement);
                                typeof a.styles === "object" && ES("Object", "assign", !1, c.dialogElement.style, a.styles);
                                return c.contentRoot
                            },
                            show: function(a) {
                                var b = n._findRoot(a);
                                b && (n._removeStacked(b), n._hideLoader(), n._makeActive(b), n._stack.push(b), "fbCallID" in a && n.get(a.fbCallID).inform("iframe_show").trackEvent("show"))
                            },
                            hide: function(a) {
                                var c = n._findRoot(a);
                                n._hideLoader();
                                c == n._active && (n._lowerActive(), b("sdk.DialogUtils").onDialogHideCleanup(n.isTabletStyle()), n._hideTabletOverlay(), "fbCallID" in a && n.get(a.fbCallID).inform("iframe_hide").trackEvent("hide"))
                            },
                            remove: function(a) {
                                a = n._findRoot(a);
                                if (a) {
                                    var c = n._active == a;
                                    n._removeStacked(a);
                                    c ? (n._hideLoader(), n._stack.length > 0 ? n.show(n._stack.pop()) : (n._lowerActive(), b("sdk.DialogUtils").onDialogHideCleanup(n.isTabletStyle()), n._hideTabletOverlay())) : n._active === null && n._stack.length > 0 && n.show(n._stack.pop());
                                    window.setTimeout(function() {
                                        a.parentNode.removeChild(a)
                                    }, 3e3)
                                }
                            },
                            isActive: function(a) {
                                a = n._findRoot(a);
                                return a && a === n._active
                            },
                            isTabletStyle: function() {
                                if (!b("sdk.UA").mobile()) return !1;
                                var a = l();
                                return a && (a.height >= h || a.width >= i)
                            }
                        };
                    e.exports = n
                }), null);
                __d("sdk.NativeExtensions", ["DOMEventListener", "Log", "sdk.UA"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = "fbNativeExtensionsReady";

                    function h() {
                        return window._FBSdkExtensions && window._FBSdkExtensions.jsonRPC && window._FBSdkExtensions.initializeCallbackHandler && window._FBSdkExtensions.supportsDialog ? window._FBSdkExtensions : null
                    }
                    a = {
                        onReady: function(a) {
                            __p && __p();
                            if (!b("sdk.UA").facebookInAppBrowser()) {
                                b("Log").error("FB.NativeExtensions.onReady only works when the page is rendered in a WebView of the native Facebook app.");
                                return
                            }
                            var c = h();
                            if (c) {
                                a(c);
                                return
                            }
                            var d = !1;
                            c = function c() {
                                var e = h();
                                if (d || !e) return;
                                d = !0;
                                a(e);
                                b("DOMEventListener").remove(window, g, c)
                            };
                            b("DOMEventListener").add(window, g, c)
                        }
                    };
                    e.exports = a
                }), null);
                __d("sdk.Extensions", ["JSONRPC", "Queue", "sdk.NativeExtensions", "sdk.UA"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = new(b("Queue"))(),
                        h = new(b("JSONRPC"))(function(a) {
                            g.enqueue(a)
                        }),
                        i = new(b("Queue"))();
                    i.start(function(a) {
                        h.read(a)
                    });
                    var j = null;
                    b("sdk.UA").facebookInAppBrowser() && b("sdk.NativeExtensions").onReady(function(a) {
                        j = a, window._FBBrowserCallbackHandler = function(a) {
                            i.enqueue(ES("JSON", "stringify", !1, a))
                        }, a.initializeCallbackHandler(ES("JSON", "stringify", !1, {
                            name: "_FBBrowserCallbackHandler"
                        })), g.start(function(b) {
                            a.jsonRPC(b)
                        })
                    });
                    e.exports = {
                        local: h.local,
                        remote: h.remote,
                        stub: ES(h.stub, "bind", !0, h),
                        supportsDialog: function(a) {
                            return !!j && j.supportsDialog(a)
                        }
                    }
                }), null);
                __d("sdk.Frictionless", ["sdk.api", "sdk.Auth", "sdk.Dialog", "sdk.Event"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {
                        _allowedRecipients: {},
                        _useFrictionless: !1,
                        _updateRecipients: function() {
                            g._allowedRecipients = {}, b("sdk.api")("/me/apprequestformerrecipients", function(a) {
                                if (!a || a.error) return;
                                ES(a.data, "forEach", !0, function(a) {
                                    g._allowedRecipients[a.recipient_id] = !0
                                })
                            })
                        },
                        init: function() {
                            g._useFrictionless = !0, b("sdk.Auth").getLoginStatus(function(a) {
                                a.status == "connected" && g._updateRecipients()
                            }), b("sdk.Event").subscribe("auth.login", function(a) {
                                a.authResponse && g._updateRecipients()
                            })
                        },
                        _processRequestResponse: function(a, c) {
                            return function(d) {
                                var e = d && d.updated_frictionless;
                                g._useFrictionless && e && g._updateRecipients();
                                d && (!c && d.frictionless && (b("sdk.Dialog")._hideLoader(), b("sdk.Dialog")._restoreBodyPosition(), b("sdk.Dialog")._hideIPadOverlay()), delete d.frictionless, delete d.updated_frictionless);
                                a && a(d)
                            }
                        },
                        isAllowed: function(a) {
                            __p && __p();
                            if (!a) return !1;
                            if (typeof a === "number") return a in g._allowedRecipients;
                            typeof a === "string" && (a = a.split(","));
                            a = ES(a, "map", !0, function(a) {
                                return ES(String(a), "trim", !0)
                            });
                            var b = !0,
                                c = !1;
                            ES(a, "forEach", !0, function(a) {
                                b = b && a in g._allowedRecipients, c = !0
                            });
                            return b && c
                        }
                    };
                    b("sdk.Event").subscribe("init:post", function(a) {
                        a.frictionlessRequests && g.init()
                    });
                    e.exports = g
                }), null);
                __d("sdk.Native", ["Log", "sdk.UA"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = "fbNativeReady";
                    a = {
                        onready: function(a) {
                            __p && __p();
                            if (!b("sdk.UA").nativeApp()) {
                                b("Log").error("FB.Native.onready only works when the page is rendered in a WebView of the native Facebook app. Test if this is the case calling FB.UA.nativeApp()");
                                return
                            }
                            window.__fbNative && !this.nativeReady && ES("Object", "assign", !1, this, window.__fbNative);
                            if (this.nativeReady) a();
                            else {
                                var c = function b(c) {
                                    window.removeEventListener(g, b), this.onready(a)
                                };
                                window.addEventListener(g, c, !1)
                            }
                        }
                    };
                    e.exports = a
                }), null);
                __d("XDM", ["Log", "sdk.feature", "wrapFunction"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {},
                        h = {
                            transports: []
                        };

                    function i(a) {
                        __p && __p();
                        var b = {},
                            c = a.length,
                            d = h.transports;
                        while (c--) b[a[c]] = 1;
                        c = d.length;
                        while (c--) {
                            a = d[c];
                            var e = g[a];
                            if (!b[a] && e.isAvailable()) return a
                        }
                        return null
                    }
                    a = {
                        register: function(a, c) {
                            b("Log").debug("Registering %s as XDM provider", a), h.transports.push(a), g[a] = c
                        },
                        create: function(a) {
                            __p && __p();
                            if (!a.whenReady && !a.onMessage) {
                                var c = "An instance without whenReady or onMessage makes no sense";
                                b("Log").error(c);
                                throw new Error(c)
                            }
                            a.channel || (b("Log").warn("Missing channel name, selecting at random"), a.channel = "f" + (Math.random() * (1 << 30)).toString(16).replace(".", ""));
                            a.whenReady || (a.whenReady = function() {});
                            a.onMessage || (a.onMessage = function() {});
                            c = (c = a.transport) != null ? c : i(a.blacklist || []);
                            var d = c != null ? g[c] : null;
                            if (d != null && d.isAvailable()) {
                                b("Log").debug("%s is available", c);
                                d.init(a);
                                return c
                            }
                            return null
                        }
                    };
                    var j = /\.facebook\.com(\/|$)/;

                    function k(a, b) {
                        var c = window.location.hostname.match(/\.(facebook\.sg|facebookcorewwwi\.onion)$/);
                        c = c ? c[1] : "facebook.com";
                        new Image().src = "https://www." + c + "/common/scribe_endpoint.php?c=" + encodeURIComponent(a) + "&m=" + encodeURIComponent(ES("JSON", "stringify", !1, b))
                    }
                    a.register("postmessage", function() {
                        __p && __p();
                        var a = !1;
                        return {
                            isAvailable: function() {
                                return !!window.postMessage
                            },
                            init: function(c) {
                                __p && __p();
                                b("Log").debug("init postMessage: " + c.channel);
                                var d = "_FB_" + c.channel,
                                    e = {
                                        send: function(a, c, d, e) {
                                            __p && __p();
                                            if (window === d) {
                                                b("Log").error("Invalid windowref, equal to window (self)");
                                                throw new Error()
                                            }
                                            b("Log").debug("sending to: %s (%s)", c, e);
                                            var f = function() {
                                                try {
                                                    d.postMessage("_FB_" + e + a, c)
                                                } catch (a) {
                                                    b("sdk.feature")("xdm_scribe_logging", !1) && k("jssdk_error", {
                                                        error: "POST_MESSAGE",
                                                        extra: {
                                                            message: a.message + ", html/js/modules/XDM.js:231"
                                                        }
                                                    });
                                                    throw a
                                                }
                                            };
                                            f()
                                        }
                                    };
                                if (a) {
                                    c.whenReady(e);
                                    return
                                }
                                window.addEventListener("message", b("wrapFunction")(function(a) {
                                    __p && __p();
                                    var e = a.data,
                                        f = a.origin || "native";
                                    if (!/^(https?:\/\/|native$)/.test(f)) {
                                        b("Log").debug("Received message from invalid origin type: %s", f);
                                        return
                                    }
                                    if (f !== "native" && !(j.test(location.hostname) || j.test(a.origin))) return;
                                    if (typeof e === "object") {
                                        if (a.data.xdArbiterSyn != null || a.data.xdArbiterHandleMessage != null || a.data.xdArbiterRegister != null) {
                                            b("Log").error("XDM at " + (window.name != null && window.name !== "" ? window.name : window == top ? "top" : "[no name]") + " ignoring message intended for XdArbiter. " + ES("JSON", "stringify", !1, e));
                                            return
                                        }
                                        if (a.data.xdArbiterAck != null) {
                                            b("Log").debug("ignoring xdArbiterAck intended for initXdArbiter");
                                            return
                                        }
                                        if (a.data.xdArbiterRegisterAck != null) {
                                            b("Log").debug("ignoring xdArbiterRegisterAck intended for initXdArbiter");
                                            return
                                        }
                                        b("Log").warn("Received message of type %s from %s, expected a string. %s", typeof e, f, ES("JSON", "stringify", !1, e));
                                        return
                                    }
                                    b("Log").debug("received message %s from %s", e, f);
                                    typeof e === "string" && e.substring(0, d.length) == d && (e = e.substring(d.length));
                                    c.onMessage(e, f)
                                }, "entry", "onMessage"));
                                c.whenReady(e);
                                a = !0
                            }
                        }
                    }());
                    e.exports = a
                }), null);
                __d("isFacebookURI", [], (function(a, b, c, d, e, f) {
                    var g = null,
                        h = ["http", "https"];

                    function a(a) {
                        g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
                        if (a.isEmpty() && a.toString() !== "#") return !1;
                        return !a.getDomain() && !a.getProtocol() ? !0 : ES(h, "indexOf", !0, a.getProtocol()) !== -1 && g.test(a.getDomain())
                    }
                    a.setRegex = function(a) {
                        g = a
                    };
                    e.exports = a
                }), null);
                __d("UserAgent_DEPRECATED", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = !1,
                        h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;

                    function x() {
                        __p && __p();
                        if (g) return;
                        g = !0;
                        var a = navigator.userAgent,
                            b = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a),
                            c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
                        s = /\b(iPhone|iP[ao]d)/.exec(a);
                        t = /\b(iP[ao]d)/.exec(a);
                        q = /Android/i.exec(a);
                        u = /FBAN\/\w+;/i.exec(a);
                        v = /FBAN\/mLite;/i.exec(a);
                        w = /Mobile/i.exec(a);
                        r = !!/Win64/.exec(a);
                        if (b) {
                            h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
                            h && document && document.documentMode && (h = document.documentMode);
                            var d = /(?:Trident\/(\d+.\d+))/.exec(a);
                            m = d ? parseFloat(d[1]) + 4 : h;
                            i = b[2] ? parseFloat(b[2]) : NaN;
                            j = b[3] ? parseFloat(b[3]) : NaN;
                            k = b[4] ? parseFloat(b[4]) : NaN;
                            k ? (b = /(?:Chrome\/(\d+\.\d+))/.exec(a), l = b && b[1] ? parseFloat(b[1]) : NaN) : l = NaN
                        } else h = i = j = l = k = NaN;
                        if (c) {
                            if (c[1]) {
                                d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
                                n = d ? parseFloat(d[1].replace("_", ".")) : !0
                            } else n = !1;
                            o = !!c[2];
                            p = !!c[3]
                        } else n = o = p = !1
                    }
                    var y = {
                        ie: function() {
                            return x() || h
                        },
                        ieCompatibilityMode: function() {
                            return x() || m > h
                        },
                        ie64: function() {
                            return y.ie() && r
                        },
                        firefox: function() {
                            return x() || i
                        },
                        opera: function() {
                            return x() || j
                        },
                        webkit: function() {
                            return x() || k
                        },
                        safari: function() {
                            return y.webkit()
                        },
                        chrome: function() {
                            return x() || l
                        },
                        windows: function() {
                            return x() || o
                        },
                        osx: function() {
                            return x() || n
                        },
                        linux: function() {
                            return x() || p
                        },
                        iphone: function() {
                            return x() || s
                        },
                        mobile: function() {
                            return x() || s || t || q || w
                        },
                        nativeApp: function() {
                            return x() || v != null ? null : u
                        },
                        android: function() {
                            return x() || q
                        },
                        ipad: function() {
                            return x() || t
                        }
                    };
                    e.exports = y
                }), null);
                __d("hasNamePropertyBug", ["UserAgent_DEPRECATED", "guid"], (function(a, b, c, d, e, f) {
                    var g = b("UserAgent_DEPRECATED").ie() ? void 0 : !1;

                    function h() {
                        var a = document.createElement("form"),
                            c = a.appendChild(document.createElement("input"));
                        c.name = b("guid")();
                        g = c !== a.elements[c.name];
                        return g
                    }

                    function a() {
                        return g === void 0 ? h() : g
                    }
                    e.exports = a
                }), null);
                __d("isNumberLike", [], (function(a, b, c, d, e, f) {
                    function a(a) {
                        return !isNaN(parseFloat(a)) && isFinite(a)
                    }
                    e.exports = a
                }), null);
                __d("sdk.createIframe", ["DOMEventListener", "getBlankIframeSrc", "guid", "hasNamePropertyBug", "isNumberLike"], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function a(a) {
                        __p && __p();
                        var c = ES("Object", "assign", !1, {}, a),
                            d, e = c.name || b("guid")(),
                            f = c.root,
                            g = c.style || {
                                border: "none"
                            },
                            h = c.url,
                            i = c.onload,
                            j = c.onerror;
                        b("hasNamePropertyBug")() ? d = document.createElement('<iframe name="' + e + '"/>') : (d = document.createElement("iframe"), d.name = e);
                        delete c.style;
                        delete c.name;
                        delete c.url;
                        delete c.root;
                        delete c.onload;
                        delete c.onerror;
                        delete c.height;
                        delete c.width;
                        c.frameBorder === void 0 && (c.frameBorder = 0);
                        c.allowTransparency === void 0 && (c.allowTransparency = !0);
                        c.allowFullscreen === void 0 && (c.allowFullscreen = !0);
                        c.scrolling === void 0 && (c.scrolling = "no");
                        c.allow === void 0 && (c.allow = "encrypted-media");
                        a.width != null && b("isNumberLike")(a.width) && (d.width = a.width + "px");
                        a.height != null && b("isNumberLike")(a.height) && (d.height = a.height + "px");
                        for (var k in c) Object.prototype.hasOwnProperty.call(c, k) && d.setAttribute(k, c[k]);
                        ES("Object", "assign", !1, d.style, g);
                        d.src = b("getBlankIframeSrc")();
                        f != null && f.appendChild(d);
                        if (i) var l = b("DOMEventListener").add(d, "load", function() {
                            l.remove(), i()
                        });
                        if (j) var m = b("DOMEventListener").add(d, "error", function() {
                            m.remove(), j()
                        });
                        d.src = h;
                        return d
                    }
                    e.exports = a
                }), null);
                __d("sdk.XD", ["JSSDKXDConfig", "Log", "QueryString", "Queue", "UrlMap", "XDM", "guid", "isFacebookURI", "sdk.Content", "sdk.createIframe", "sdk.Event", "sdk.feature", "sdk.RPC", "sdk.Runtime", "sdk.Scribe", "sdk.URI"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = new(b("Queue"))(),
                        h = new(b("Queue"))(),
                        i = b("guid")(),
                        j = "https";
                    a = b("JSSDKXDConfig").useCdn ? "cdn" : "www";
                    c = b("sdk.feature")("use_bundle", !1) ? b("JSSDKXDConfig").XdBundleUrl : b("JSSDKXDConfig").XdUrl;
                    var k = b("UrlMap").resolve(a) + c;
                    d = function() {
                        if ("origin" in location)
                            if (location.origin && location.origin != "null") return location.origin;
                            else if (window !== window.parent) try {
                            var a = parent.location.origin;
                            if (a && a != "null") return a
                        } catch (a) {}
                        return location.protocol + "//" + location.host
                    };
                    var l = b("guid")(),
                        m = d(),
                        n, o, p = !1,
                        q = "Facebook Cross Domain Communication Frame",
                        r = {},
                        s = new(b("Queue"))();
                    b("sdk.RPC").setInQueue(s);

                    function t(a) {
                        b("Log").info("Remote XD can talk to facebook.com (%s)", a), b("sdk.Runtime").setEnvironment(a === "canvas" ? b("sdk.Runtime").ENVIRONMENTS.CANVAS : b("sdk.Runtime").ENVIRONMENTS.PAGETAB)
                    }

                    function u(a, c) {
                        __p && __p();
                        if (!c) {
                            b("Log").error("No senderOrigin");
                            throw new Error()
                        }
                        switch (a.xd_action) {
                            case "proxy_ready":
                                var d, e;
                                d = h;
                                e = o;
                                b("sdk.Runtime").setLoggedIntoFacebook(a.logged_in === "true");
                                typeof a.registered === "string" && a.registered != "" && (t(a.registered), g = d.merge(g, !1));
                                b("Log").info("Proxy ready, starting queue containing %s messages", d.getLength());
                                d.start(function(a) {
                                    if (a == null) {
                                        b("Log").warn("Discarding null message from %s to %s", c, l + "_" + j);
                                        return
                                    }
                                    n.send(typeof a === "object" ? b("QueryString").encode(a) : a, c, e.contentWindow, l + "_" + j)
                                });
                                break;
                            case "plugin_ready":
                                if (typeof a.name === "string") {
                                    d = a.name;
                                    b("Log").info("Plugin %s ready, protocol: %s", d, j);
                                    r[d] = {
                                        protocol: j
                                    };
                                    if (b("Queue").exists(d)) {
                                        var f = b("Queue").get(d, {});
                                        b("Log").debug("Enqueuing %s messages for %s in %s", f.getLength(), d, j + "ProxyQueue");
                                        h.merge(f, !1)
                                    }
                                } else b("Log").error("plugin_ready message received without a name");
                                break
                        }
                        a.data != null && (typeof a.data === "object" || typeof a.data === "string") && v(a.data, c)
                    }

                    function v(a, c) {
                        __p && __p();
                        if (c != null && c !== "native" && !b("isFacebookURI")(new(b("sdk.URI"))(c))) return;
                        if (typeof a === "string") {
                            if (/^FB_RPC:/.test(a)) {
                                s.enqueue(a.substring(7));
                                return
                            }
                            if (a.substring(0, 1) == "{") try {
                                a = ES("JSON", "parse", !1, a)
                            } catch (c) {
                                b("Log").warn("Failed to decode %s as JSON", a);
                                return
                            } else a = b("QueryString").decode(a)
                        }
                        a = a;
                        c == null && (a.xd_sig === i && (c = typeof a.xd_origin === "string" ? a.xd_origin : ""));
                        if (a.xd_action) {
                            u(a, c);
                            return
                        }
                        if (typeof a.cb === "string") {
                            c = y._callbacks[a.cb];
                            y._forever[a.cb] || delete y._callbacks[a.cb];
                            c && c(a)
                        }
                    }

                    function w(a, c) {
                        if (a == "facebook") typeof c === "object" && (c.relation = "parent.parent"), g.enqueue(c);
                        else {
                            typeof c === "object" && (c.relation = 'parent.frames["' + a + '"]');
                            var d = r[a];
                            d ? (b("Log").debug("Enqueuing message for plugin %s in %s", a, d.protocol + "ProxyQueue"), h.enqueue(c)) : (b("Log").debug("Buffering message for plugin %s", a), b("Queue").get(a, {}).enqueue(c))
                        }
                    }
                    b("sdk.RPC").getOutQueue().start(function(a) {
                        w("facebook", "FB_RPC:" + a)
                    });

                    function x(a) {
                        if (p) return;
                        var c = b("sdk.Content").appendHidden(document.createElement("div")),
                            d = b("XDM").create({
                                blacklist: null,
                                root: c,
                                channel: l,
                                whenReady: function(e) {
                                    n = e;
                                    e = {
                                        channel: l,
                                        origin: m,
                                        transport: d,
                                        xd_name: a
                                    };
                                    e = "#" + b("QueryString").encode(e);
                                    o = b("sdk.createIframe")({
                                        url: k + e,
                                        name: "fb_xdm_frame_https",
                                        id: "fb_xdm_frame_https",
                                        root: c,
                                        "aria-hidden": !0,
                                        title: q,
                                        tabindex: -1
                                    })
                                },
                                onMessage: v
                            });
                        d || b("sdk.Scribe").log("jssdk_error", {
                            appId: b("sdk.Runtime").getClientID(),
                            error: "XD_TRANSPORT",
                            extra: {
                                message: "Failed to create a valid transport"
                            }
                        });
                        p = !0
                    }
                    var y = {
                        rpc: b("sdk.RPC"),
                        _callbacks: {},
                        _forever: {},
                        _channel: l,
                        _origin: m,
                        onMessage: v,
                        recv: v,
                        init: x,
                        sendToFacebook: w,
                        inform: function(a, b, c, d) {
                            w("facebook", {
                                method: a,
                                params: ES("JSON", "stringify", !1, b || {}),
                                behavior: d || "p",
                                relation: c
                            })
                        },
                        handler: function(a, c, d, e) {
                            a = "#" + b("QueryString").encode({
                                cb: this.registerCallback(a, d, e),
                                origin: m + "/" + l,
                                domain: location.hostname,
                                relation: c || "opener"
                            });
                            return k + a
                        },
                        registerCallback: function(a, c, d) {
                            d = d || b("guid")();
                            c && (y._forever[d] = !0);
                            y._callbacks[d] = a;
                            return d
                        },
                        getXDArbiterURL: function() {
                            return k
                        }
                    };
                    b("sdk.Event").subscribe("init:post", function(a) {
                        x(a.xdProxyName);
                        var c = b("sdk.feature")("xd_timeout", !1);
                        c && window.setTimeout(function() {
                            var a = o && !!o == h.isStarted();
                            a || b("sdk.Scribe").log("jssdk_error", {
                                appId: b("sdk.Runtime").getClientID(),
                                error: "XD_INITIALIZATION",
                                extra: {
                                    message: "Failed to initialize in " + c + "ms"
                                }
                            })
                        }, c)
                    });
                    e.exports = y
                }), 3);
                __d("sdk.openMessenger", ["sdk.UA"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = "https://itunes.apple.com/us/app/messenger/id454638411",
                        h = "https://play.google.com/store/apps/details?id=com.facebook.orca",
                        i = 3e3;

                    function a(a) {
                        var c, d, e = a.link;
                        a = a.app_id;
                        b("sdk.UA").android() ? (c = "intent://share/#Intent;package=com.facebook.orca;scheme=fb-messenger;S.android.intent.extra.TEXT=" + encodeURIComponent(e) + ";S.trigger=send_plugin;", a && (c += "S.platform_app_id=" + encodeURIComponent(a) + ";"), c += "end", d = h) : (c = "fb-messenger://share?link=" + encodeURIComponent(e), a && (c += "&app_id=" + encodeURIComponent(a)), d = g);
                        setTimeout(function() {
                            window.location.href = d
                        }, i);
                        window.location.href = c
                    }
                    e.exports = a
                }), null);
                __d("sdk.UIServer", ["Log", "QueryString", "UrlMap", "createObjectFrom", "flattenObject", "guid", "insertIframe", "resolveURI", "sdk.Auth", "sdk.Content", "sdk.Dialog", "sdk.DOM", "sdk.Event", "sdk.Extensions", "sdk.fbt", "sdk.feature", "sdk.Frictionless", "sdk.getContextType", "sdk.Native", "sdk.openMessenger", "sdk.RPC", "sdk.Runtime", "sdk.Scribe", "sdk.UA", "sdk.XD"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {
                        transform: function(a) {
                            if (a.params.display === "touch" && n.canIframe(a.params) && window.postMessage) {
                                a.params.channel = n._xdChannelHandler(a.id, "parent");
                                b("sdk.UA").nativeApp() || (a.params.in_iframe = 1);
                                return a
                            } else return n.genericTransform(a)
                        },
                        getXdRelation: function(a) {
                            var b = a.display;
                            return b === "touch" && window.postMessage && a.in_iframe ? "parent" : n.getXdRelation(a)
                        }
                    };

                    function h(a) {
                        return a.method == "permissions.oauth" || a.method == "permissions.request" || a.method == "oauth"
                    }

                    function i(a) {
                        return h(a) && b("sdk.Extensions").supportsDialog("oauth")
                    }

                    function j(a) {
                        return h(a) && (a.is_account_link === !0 || a.is_account_link === "true") && b("sdk.Extensions").supportsDialog("accountLink")
                    }
                    a = {
                        "stream.share": {
                            size: {
                                width: 670,
                                height: 340
                            },
                            url: "sharer.php",
                            transform: function(a) {
                                a.params.u || (a.params.u = window.location.toString());
                                a.params.display = "popup";
                                return a
                            }
                        },
                        apprequests: {
                            transform: function(a) {
                                a = g.transform(a);
                                a.params.frictionless = b("sdk.Frictionless") && b("sdk.Frictionless")._useFrictionless;
                                a.params.frictionless && (b("sdk.Frictionless").isAllowed(a.params.to) && (a.params.display = "iframe", a.params.in_iframe = !0, a.hideLoader = !0), a.cb = b("sdk.Frictionless")._processRequestResponse(a.cb, a.hideLoader));
                                a.closeIcon = !1;
                                return a
                            },
                            getXdRelation: g.getXdRelation
                        },
                        "permissions.oauth": {
                            url: "dialog/oauth",
                            size: {
                                width: b("sdk.UA").mobile() ? null : 600,
                                height: b("sdk.UA").mobile() ? null : 679
                            },
                            transform: function(a) {
                                __p && __p();
                                if (!b("sdk.Runtime").getClientID()) {
                                    b("Log").error("FB.login() called before FB.init().");
                                    return
                                }
                                if (b("sdk.Auth").getAuthResponse() && !a.params.scope && !a.params.asset_scope && !a.params.auth_type) {
                                    b("Log").error("FB.login() called when user is already connected.");
                                    a.cb && a.cb({
                                        status: b("sdk.Runtime").getLoginStatus(),
                                        authResponse: b("sdk.Auth").getAuthResponse()
                                    });
                                    return
                                }
                                var c = a.cb,
                                    d = a.id;
                                delete a.cb;
                                var e = a.params.auth_type === "reauthenticate",
                                    f = ES("Object", "keys", !1, ES("Object", "assign", !1, a.params.response_type ? b("createObjectFrom")(a.params.response_type.split(",")) : {}, {
                                        token: !0,
                                        signed_request: !0
                                    })).join(",");
                                a.params.display === "async" ? (ES("Object", "assign", !1, a.params, {
                                    client_id: b("sdk.Runtime").getClientID(),
                                    origin: b("sdk.getContextType")(),
                                    response_type: f,
                                    domain: location.hostname
                                }), a.cb = b("sdk.Auth").xdResponseWrapper(c, b("sdk.Auth").getAuthResponse(), "permissions.oauth")) : (e && n._xdNextHandler(function(a) {
                                    c({
                                        authResponse: null,
                                        status: "not_authorized"
                                    })
                                }, d, "opener", !0), ES("Object", "assign", !1, a.params, {
                                    client_id: b("sdk.Runtime").getClientID(),
                                    redirect_uri: b("resolveURI")(n.xdHandler(c, d, "opener", b("sdk.Auth").getAuthResponse(), "permissions.oauth", !e)),
                                    origin: b("sdk.getContextType")(),
                                    response_type: f,
                                    domain: location.hostname
                                }));
                                return a
                            }
                        },
                        "auth.logout": {
                            url: "logout.php",
                            transform: function(a) {
                                if (!b("sdk.Runtime").getClientID()) b("Log").error("FB.logout() called before calling FB.init().");
                                else if (!b("sdk.Auth").getAuthResponse()) b("Log").error("FB.logout() called without an access token.");
                                else {
                                    a.params.next = n.xdHandler(a.cb, a.id, "parent", b("sdk.Auth").getAuthResponse(), "logout", !0);
                                    return a
                                }
                            }
                        },
                        "login.status": {
                            url: "dialog/oauth",
                            transform: function(a) {
                                var c = a.cb,
                                    d = a.id;
                                delete a.cb;
                                ES("Object", "assign", !1, a.params, {
                                    client_id: b("sdk.Runtime").getClientID(),
                                    redirect_uri: n.xdHandler(c, d, "parent", b("sdk.Auth").getAuthResponse(), "login_status", !0),
                                    origin: b("sdk.getContextType")(),
                                    response_type: "token,signed_request",
                                    domain: location.hostname
                                });
                                return a
                            }
                        },
                        pay: {
                            size: {
                                width: 555,
                                height: 120
                            },
                            connectDisplay: "popup"
                        },
                        live_broadcast: {
                            transform: function(a) {
                                a.params.phase === "create" && (a.size = {
                                    width: 480,
                                    height: 280
                                });
                                a.params.phase === "publish" && (a.size = {
                                    width: 772,
                                    height: 540
                                });
                                return a
                            },
                            require_access_token: !0
                        },
                        boost: {
                            transform: function(a) {
                                a.size = {
                                    width: 960,
                                    height: 760
                                };
                                a.params.display = "popup";
                                return a
                            }
                        }
                    };
                    var k = {};

                    function l(a, b) {
                        k[b] = !0;
                        return function(c) {
                            delete k[b], a(c)
                        }
                    }

                    function m(a) {
                        var b = a.method.toLowerCase();
                        return b === "pay" && a.display === "async" ? !0 : !1
                    }
                    var n = {
                        Methods: a,
                        _loadedNodes: {},
                        _defaultCb: {},
                        _resultToken: '"xxRESULTTOKENxx"',
                        genericTransform: function(a) {
                            (a.params.display == "dialog" || a.params.display == "iframe") && ES("Object", "assign", !1, a.params, {
                                display: "iframe",
                                channel: n._xdChannelHandler(a.id, "parent.parent")
                            }, !0);
                            return a
                        },
                        checkOauthDisplay: function(a) {
                            var c = a.scope || a.perms || b("sdk.Runtime").getScope();
                            return !c ? a.display : "popup"
                        },
                        prepareCall: function(a, c) {
                            __p && __p();
                            var d = a.method.toLowerCase(),
                                e = Object.prototype.hasOwnProperty.call(n.Methods, d) ? ES("Object", "assign", !1, {}, n.Methods[d]) : {},
                                f = b("guid")(),
                                g = !0;
                            ES("Object", "assign", !1, a, {
                                app_id: b("sdk.Runtime").getClientID(),
                                locale: b("sdk.Runtime").getLocale(),
                                sdk: "joey",
                                access_token: g && b("sdk.Runtime").getAccessToken() || void 0
                            });
                            a.display = n.getDisplayMode(e, a);
                            e.url || (e.url = "dialog/" + d);
                            (e.url == "dialog/oauth" || e.url == "dialog/permissions.request") && (a.display == "iframe" || a.display == "touch" && a.in_iframe) && (a.display = n.checkOauthDisplay(a));
                            a.display == "popup" && !e.require_access_token && delete a.access_token;
                            b("sdk.Runtime").getIsVersioned() && e.url.substring(0, 7) === "dialog/" && (e.url = a.version + "/" + e.url);
                            if (m(a)) {
                                if (k[d]) {
                                    g = 'Dialog "' + d + '" is trying to run more than once.';
                                    b("Log").warn(g);
                                    c({
                                        error_code: -100,
                                        error_message: g
                                    });
                                    return
                                }
                                c = l(c, d)
                            }
                            g = {
                                cb: c,
                                id: f,
                                size: e.size || n.getDefaultSize(),
                                url: b("UrlMap").resolve(a.display == "touch" ? "m" : "www") + "/" + e.url,
                                params: a,
                                name: d,
                                dialog: b("sdk.Dialog").newInstance(f, a.display)
                            };
                            c = e.transform ? e.transform : n.genericTransform;
                            if (c) {
                                g = c(g);
                                if (!g) return
                            }
                            a.display === "touch" && a.in_iframe && (g.params.parent_height = window.innerHeight);
                            d = e.getXdRelation || n.getXdRelation;
                            c = d(g.params);
                            !(g.id in n._defaultCb) && !("next" in g.params) && !("redirect_uri" in g.params) && (g.params.next = n._xdResult(g.cb, g.id, c, !0));
                            (c === "parent" || c === "opener") && ES("Object", "assign", !1, g.params, {
                                channel_url: n._xdChannelHandler(f, c === "parent" ? "parent.parent" : "opener")
                            }, !0);
                            g = n.prepareParams(g);
                            return g
                        },
                        prepareParams: function(a) {
                            a.params.display !== "async" && delete a.params.method;
                            a.params.kid_directed_site = b("sdk.Runtime").getKidDirectedSite() || a.params.kid_directed_site;
                            a.params = b("flattenObject")(a.params);
                            var c = b("QueryString").encode(a.params);
                            !b("sdk.UA").nativeApp() && n.urlTooLongForIE(a.url + "?" + c) ? a.post = !0 : c && (a.url += "?" + c);
                            return a
                        },
                        urlTooLongForIE: function(a) {
                            return b("sdk.UA").ie() && b("sdk.UA").ie() <= 8 && a.length > 2048
                        },
                        getDisplayMode: function(a, c) {
                            __p && __p();
                            if (c.display === "hidden" || c.display === "none" || c.display === "native") return c.display;
                            var d = b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) || b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.PAGETAB);
                            if (d && !c.display) return "async";
                            if (i(c) || j(c)) return "async";
                            if (b("sdk.UA").mobile() || c.display === "touch") return "touch";
                            if ((c.display == "iframe" || c.display == "dialog") && !n.canIframe(c)) {
                                b("Log").error('"dialog" mode can only be used when the user is connected.');
                                return "popup"
                            }
                            return a.connectDisplay && !d ? a.connectDisplay : c.display || (n.canIframe(c) ? "dialog" : "popup")
                        },
                        canIframe: function(a) {
                            return b("sdk.Runtime").getAccessToken()
                        },
                        getXdRelation: function(a) {
                            a = a.display;
                            if (a === "popup" || a === "touch") return "opener";
                            if (a === "dialog" || a === "iframe" || a === "hidden" || a === "none") return "parent";
                            return a === "async" ? "parent.frames[" + window.name + "]" : ""
                        },
                        popup: function(a) {
                            __p && __p();
                            var c = window.screenX,
                                d = window.screenY,
                                e = window.outerWidth,
                                f = window.outerHeight,
                                g = b("sdk.UA").mobile() ? null : a.size.width,
                                h = b("sdk.UA").mobile() ? null : a.size.height;
                            c = c < 0 ? window.screen.width + c : c;
                            c = c + (e - g) / 2;
                            e = d + (f - h) / 2.5;
                            d = [];
                            g !== null && d.push("width=" + g);
                            h !== null && d.push("height=" + h);
                            d.push("left=" + c);
                            d.push("top=" + e);
                            d.push("scrollbars=1");
                            (a.name == "permissions.request" || a.name == "permissions.oauth") && (d.push("toolbar=0"), (!b("sdk.UA").chrome() || b("sdk.UA").chrome() < 59) && d.push("location=1"));
                            f = d.join(",");
                            a.post ? (g = window.open("about:blank", a.id, f), g && (n.setLoadedNode(a, g, "popup"), b("sdk.Content").submitToTarget({
                                url: a.url,
                                target: a.id,
                                params: a.params
                            }))) : (g = window.open(a.url, a.id, f), g && n.setLoadedNode(a, g, "popup"));
                            if (!g) {
                                b("sdk.feature")("popup_blocker_scribe_logging", !0) && b("sdk.Scribe").log("jssdk_error", {
                                    appId: b("sdk.Runtime").getClientID(),
                                    error: "POPUP_MAYBE_BLOCKED",
                                    extra: {
                                        call: a.name
                                    }
                                });
                                return
                            }
                            a.id in n._defaultCb && n._popupMonitor()
                        },
                        setLoadedNode: function(a, b, c) {
                            c === "iframe" && (b.fbCallID = a.id), b = {
                                node: b,
                                type: c,
                                fbCallID: a.id,
                                method: a.name
                            }, n._loadedNodes[a.id] = b
                        },
                        getLoadedNode: function(a) {
                            a = typeof a === "object" ? a.id : a;
                            a = n._loadedNodes[a];
                            return a ? a.node : null
                        },
                        hidden: function(a) {
                            a.className = "FB_UI_Hidden", a.root = b("sdk.Content").appendHidden(""), n._insertIframe(a)
                        },
                        iframe: function(a) {
                            a.className = "FB_UI_Dialog";
                            var c = function() {
                                    var c = ES("JSON", "stringify", !1, {
                                        error_code: 4201,
                                        error_message: b("sdk.fbt")._("User canceled the Dialog flow")
                                    });
                                    n._triggerDefault(a.id, c)
                                },
                                d = {
                                    onClose: c,
                                    closeIcon: a.closeIcon === void 0 ? !0 : a.closeIcon,
                                    classes: b("sdk.Dialog").isTabletStyle() ? "centered" : ""
                                };
                            a.root = b("sdk.Dialog").create(d);
                            a.hideLoader || b("sdk.Dialog").showLoader(c, a.size.width);
                            b("sdk.DOM").addCss(a.root, "fb_dialog_iframe");
                            n._insertIframe(a)
                        },
                        touch: function(a) {
                            a.params && a.params.in_iframe ? a.ui_created ? b("sdk.Dialog").showLoader(function() {
                                n._triggerDefault(a.id, null)
                            }, 0) : n.iframe(a) : b("sdk.UA").nativeApp() && !a.ui_created ? (a.frame = a.id, b("sdk.Native").onready(function() {
                                n.setLoadedNode(a, b("sdk.Native").open(a.url + "#cb=" + a.frameName), "native")
                            }), n._popupMonitor()) : a.ui_created || n.popup(a)
                        },
                        async: function(a) {
                            __p && __p();
                            a.params.redirect_uri = location.protocol + "//" + location.host + location.pathname;
                            delete a.params.access_token;
                            var c = function(c) {
                                c = c.result;
                                if (c && c.e2e) {
                                    var d = b("sdk.Dialog").get(a.id);
                                    d.trackEvents(c.e2e);
                                    d.trackEvent("close");
                                    delete c.e2e
                                }
                                a.cb(c)
                            };
                            i(a.params) || j(a.params) ? (a.params.method = "oauth", a.params.redirect_uri = a.params.next, b("sdk.Extensions").remote.showDialog(a.params, c)) : b("sdk.RPC").remote.showDialog(a.params, c)
                        },
                        "native": function(a) {
                            b("sdk.openMessenger")(a.params)
                        },
                        getDefaultSize: function() {
                            return b("sdk.Dialog").getDefaultSize()
                        },
                        _insertIframe: function(a) {
                            n._loadedNodes[a.id] = !1;
                            var c = function(b) {
                                a.id in n._loadedNodes && n.setLoadedNode(a, b, "iframe")
                            };
                            a.post ? b("insertIframe")({
                                url: "about:blank",
                                root: a.root,
                                className: a.className,
                                width: a.size.width,
                                height: a.size.height,
                                id: a.id,
                                onInsert: c,
                                onload: function(c) {
                                    b("sdk.Content").submitToTarget({
                                        url: a.url,
                                        target: c.name,
                                        params: a.params
                                    })
                                }
                            }) : b("insertIframe")({
                                url: a.url,
                                root: a.root,
                                className: a.className,
                                width: a.size.width,
                                height: a.size.height,
                                id: a.id,
                                name: a.frameName,
                                onInsert: c
                            })
                        },
                        _handleResizeMessage: function(a, c) {
                            a = n.getLoadedNode(a);
                            if (!a) return;
                            c.height && (a.style.height = c.height + "px");
                            c.width && c.width != 0 && (a.style.width = c.width + "px");
                            b("sdk.XD").inform("resize.ack", c || {}, "parent.frames[" + a.name + "]");
                            !b("sdk.Dialog").isActive(a) ? b("sdk.Dialog").show(a) : b("sdk.Dialog")._centerActive()
                        },
                        _triggerDefault: function(a, b) {
                            var c = {
                                frame: a
                            };
                            b && (c.result = b);
                            n._xdRecv(c, n._defaultCb[a] || function() {})
                        },
                        _popupMonitor: function() {
                            __p && __p();
                            var a;
                            for (var c in n._loadedNodes)
                                if (Object.prototype.hasOwnProperty.call(n._loadedNodes, c) && c in n._defaultCb) {
                                    var d = n._loadedNodes[c];
                                    if (d.type != "popup" && d.type != "native") continue;
                                    var e = d.node;
                                    try {
                                        e.closed ? d.method === "permissions.oauth" ? b("sdk.Auth").getLoginStatus(function(a) {
                                            n._triggerDefault(c, a)
                                        }, !0) : n._triggerDefault(c, null) : a = !0
                                    } catch (a) {}
                                }
                            a && !n._popupInterval ? n._popupInterval = window.setInterval(n._popupMonitor, 100) : !a && n._popupInterval && (window.clearInterval(n._popupInterval), n._popupInterval = null)
                        },
                        _xdChannelHandler: function(a, c) {
                            __p && __p();
                            return b("sdk.XD").handler(function(c) {
                                __p && __p();
                                var d = n.getLoadedNode(a);
                                if (!d) return;
                                if (c.type == "resize") n._handleResizeMessage(a, c);
                                else if (c.type == "hide") b("sdk.Dialog").hide(d);
                                else if (c.type == "rendered") {
                                    d = b("sdk.Dialog")._findRoot(d);
                                    b("sdk.Dialog").show(d)
                                } else c.type == "fireevent" && b("sdk.Event").fire(c.event, c)
                            }, c, !0, null)
                        },
                        _xdNextHandler: function(a, c, d, e) {
                            e && (n._defaultCb[c] = a);
                            return b("sdk.XD").handler(function(b) {
                                n._xdRecv(b, a)
                            }, d) + "&frame=" + c
                        },
                        _xdRecv: function(a, c) {
                            __p && __p();
                            var d = n.getLoadedNode(a.frame);
                            if (d)
                                if (d.close) try {
                                    d.close(), /iPhone.*Version\/(5|6)/.test(navigator.userAgent) && RegExp.$1 !== "5" && window.focus(), n._popupCount--
                                } catch (a) {} else b("sdk.DOM").containsCss(d, "FB_UI_Hidden") ? window.setTimeout(function() {
                                    d.parentNode.parentNode.removeChild(d.parentNode)
                                }, 3e3) : b("sdk.DOM").containsCss(d, "FB_UI_Dialog") && b("sdk.Dialog").remove(d);
                            delete n._loadedNodes[a.frame];
                            delete n._defaultCb[a.frame];
                            if (a.e2e) {
                                var e = b("sdk.Dialog").get(a.frame);
                                e.trackEvents(a.e2e);
                                e.trackEvent("close");
                                delete a.e2e
                            }
                            c(a)
                        },
                        _xdResult: function(a, b, c, d) {
                            return n._xdNextHandler(function(b) {
                                a && a(b.result && b.result != n._resultToken && ES("JSON", "parse", !1, b.result))
                            }, b, c, d) + "&result=" + encodeURIComponent(n._resultToken)
                        },
                        xdHandler: function(a, c, d, e, f, g) {
                            return n._xdNextHandler(b("sdk.Auth").xdResponseWrapper(a, e, f), c, d, g)
                        }
                    };
                    b("sdk.Extensions").stub("showDialog");
                    b("sdk.RPC").stub("showDialog");
                    e.exports = n
                }), null);
                __d("sdk.ui", ["Assert", "Log", "sdk.feature", "sdk.Impressions", "sdk.PlatformVersioning", "sdk.Runtime", "sdk.UIServer", "sdk.URI"], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function a(a, c) {
                        __p && __p();
                        b("Assert").isObject(a);
                        b("Assert").maybeFunction(c);
                        b("sdk.Runtime").getIsVersioned() && (b("sdk.PlatformVersioning").assertVersionIsSet(), a.version ? b("sdk.PlatformVersioning").assertValidVersion(a.version) : a.version = b("sdk.Runtime").getVersion());
                        a = ES("Object", "assign", !1, {}, a);
                        if (!a.method) {
                            b("Log").error('"method" is a required parameter for FB.ui().');
                            return null
                        }
                        a.method == "pay.prompt" && (a.method = "pay");
                        var d = a.method;
                        a.redirect_uri && (b("Log").warn("When using FB.ui, you should not specify a redirect_uri."), delete a.redirect_uri);
                        if (!a.fallback_redirect_uri) {
                            var e = new(b("sdk.URI"))(document.location.href);
                            e.setQueryData({}).setFragment();
                            a.fallback_redirect_uri = e.toString()
                        }(d == "permissions.request" || d == "permissions.oauth") && (a.display == "iframe" || a.display == "dialog") && (a.display = b("sdk.UIServer").checkOauthDisplay(a));
                        if (a.display === "native" && d !== "send") {
                            b("Log").error('display type "native" not supported');
                            return null
                        }
                        e = b("sdk.feature")("e2e_tracking", !0);
                        e && (a.e2e = {});
                        a = b("sdk.UIServer").prepareCall(a, c || function() {});
                        if (!a) return null;
                        var f = a.params.display;
                        f === "dialog" ? f = "iframe" : f === "none" && (f = "hidden");
                        c = b("sdk.UIServer")[f];
                        if (!c) {
                            b("Log").error('"display" must be one of "popup", "dialog", "iframe", "touch", "async", "hidden", or "none"');
                            return null
                        }
                        e && a.dialog.subscribe("e2e:end", function(a) {
                            a.method = d, a.display = f, b("Log").debug("e2e: %s", ES("JSON", "stringify", !1, a)), b("sdk.Impressions").log(114, {
                                payload: a
                            })
                        });
                        c(a);
                        return a.dialog
                    }
                    e.exports = a
                }), null);
                __d("legacy:fb.auth", ["FB", "Log", "sdk.Auth", "sdk.Cookie", "sdk.Event", "sdk.Runtime", "sdk.SignedRequest", "sdk.ui", "sdk.warnInsecure"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    b("FB").provide("", {
                        getLoginStatus: function() {
                            b("sdk.warnInsecure")("getLoginStatus");
                            return b("sdk.Auth").getLoginStatus.apply(b("sdk.Auth"), arguments)
                        },
                        getAuthResponse: function() {
                            b("sdk.warnInsecure")("getAuthResponse");
                            return b("sdk.Auth").getAuthResponse()
                        },
                        getAccessToken: function() {
                            b("sdk.warnInsecure")("getAccessToken");
                            return b("sdk.Runtime").getAccessToken() || null
                        },
                        getUserID: function() {
                            b("sdk.warnInsecure")("getUserID");
                            return b("sdk.Runtime").getUserID() || b("sdk.Runtime").getCookieUserID()
                        },
                        login: function(a, c) {
                            b("sdk.warnInsecure")("login");
                            c && c.perms && !c.scope && (c.scope = c.perms, delete c.perms, b("Log").warn("OAuth2 specification states that 'perms' should now be called 'scope'.  Please update."));
                            var d = b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) || b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.PAGETAB);
                            b("sdk.ui")(babelHelpers["extends"]({
                                method: "permissions.oauth",
                                display: d ? "async" : "popup",
                                domain: location.hostname
                            }, c || {}), a)
                        },
                        logout: function(a) {
                            b("sdk.ui")({
                                method: "auth.logout",
                                display: "hidden"
                            }, a)
                        }
                    }), b("sdk.Auth").subscribe("logout", ES(b("sdk.Event").fire, "bind", !0, b("sdk.Event"), "auth.logout")), b("sdk.Auth").subscribe("login", ES(b("sdk.Event").fire, "bind", !0, b("sdk.Event"), "auth.login")), b("sdk.Auth").subscribe("authresponse.change", ES(b("sdk.Event").fire, "bind", !0, b("sdk.Event"), "auth.authResponseChange")), b("sdk.Auth").subscribe("status.change", ES(b("sdk.Event").fire, "bind", !0, b("sdk.Event"), "auth.statusChange")), b("sdk.Event").subscribe("init:post", function(a) {
                        __p && __p();
                        a.status && b("sdk.Auth").getLoginStatus();
                        if (b("sdk.Runtime").getClientID() && b("sdk.Runtime").getUseCookie()) {
                            a = b("sdk.Cookie").loadSignedRequest();
                            if (a) {
                                try {
                                    a = b("sdk.SignedRequest").parse(a)
                                } catch (a) {
                                    b("sdk.Cookie").clearSignedRequestCookie()
                                }
                                a != null && a.user_id != null && b("sdk.Runtime").setCookieUserID(a.user_id)
                            }
                        }
                    })
                }), 3);
                __d("sdk.Canvas.IframeHandling", ["DOMWrapper", "sdk.RPC"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = null,
                        h;

                    function i() {
                        var a = b("DOMWrapper").getWindow().document,
                            c = a.body;
                        a = a.documentElement;
                        var d = Math.max(c.offsetTop, 0),
                            e = Math.max(a.offsetTop, 0),
                            f = c.scrollHeight + d;
                        c = c.offsetHeight + d;
                        d = a.scrollHeight + e;
                        a = a.offsetHeight + e;
                        return Math.max(f, c, d, a)
                    }

                    function j(a) {
                        __p && __p();
                        typeof a !== "object" && (a = {});
                        var c = 0,
                            d = 0;
                        a.height || (a.height = i(), c = 16, d = 4);
                        a.frame || (a.frame = window.name || "iframe_canvas");
                        if (h) {
                            var e = h.height;
                            e = a.height - e;
                            if (e <= d && e >= -c) return !1
                        }
                        h = a;
                        b("sdk.RPC").remote.setSize(a);
                        return !0
                    }

                    function a(a, b) {
                        b === void 0 && typeof a === "number" && (b = a, a = !0), a || a === void 0 ? (g === null && (g = setInterval(function() {
                            j()
                        }, b || 100)), j()) : g !== null && (clearInterval(g), g = null)
                    }
                    b("sdk.RPC").stub("setSize");
                    c = {
                        setSize: j,
                        setAutoGrow: a
                    };
                    e.exports = c
                }), null);
                __d("sdk.Canvas.Navigation", ["sdk.RPC"], (function(a, b, c, d, e, f) {
                    function a(a) {
                        b("sdk.RPC").local.navigate = function(b) {
                            a({
                                path: b
                            })
                        }, b("sdk.RPC").remote.setNavigationEnabled(!0)
                    }
                    b("sdk.RPC").stub("setNavigationEnabled");
                    c = {
                        setUrlHandler: a
                    };
                    e.exports = c
                }), null);
                __d("sdk.Canvas.Plugin", ["Log", "sdk.api", "sdk.RPC", "sdk.Runtime", "sdk.UA"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = "CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000",
                        h = "CLSID:444785F1-DE89-4295-863A-D46C3A781394",
                        i = null;
                    d = b("sdk.UA").osx() && b("sdk.UA").osx.getVersionParts();
                    var j = !(d && d[0] > 10 && d[1] > 10 && (b("sdk.UA").chrome() >= 31 || b("sdk.UA").webkit() >= 537.71 || b("sdk.UA").firefox() >= 25));

                    function k(a) {
                        a._hideunity_savedstyle = {}, a._hideunity_savedstyle.left = a.style.left, a._hideunity_savedstyle.position = a.style.position, a._hideunity_savedstyle.width = a.style.width, a._hideunity_savedstyle.height = a.style.height, a.style.left = "-10000px", a.style.position = "absolute", a.style.width = "1px", a.style.height = "1px"
                    }

                    function l(a) {
                        a._hideunity_savedstyle && (a.style.left = a._hideunity_savedstyle.left, a.style.position = a._hideunity_savedstyle.position, a.style.width = a._hideunity_savedstyle.width, a.style.height = a._hideunity_savedstyle.height)
                    }

                    function m(a) {
                        a._old_visibility = a.style.visibility, a.style.visibility = "hidden"
                    }

                    function n(a) {
                        a.style.visibility = a._old_visibility || "", delete a._old_visibility
                    }

                    function o(a) {
                        __p && __p();
                        var b = a.type ? a.type.toLowerCase() : null;
                        b = b === "application/x-shockwave-flash" || a.classid && a.classid.toUpperCase() == g;
                        if (!b) return !1;
                        b = /opaque|transparent/i;
                        if (b.test(a.getAttribute("wmode"))) return !1;
                        for (var c = 0; c < a.childNodes.length; c++) {
                            var d = a.childNodes[c];
                            if (/param/i.test(d.nodeName) && /wmode/i.test(d.name) && b.test(d.value)) return !1
                        }
                        return !0
                    }

                    function p(a) {
                        var b = a.type ? a.type.toLowerCase() : null;
                        return b === "application/vnd.unity" || a.classid && a.classid.toUpperCase() == h
                    }

                    function q(a) {
                        __p && __p();
                        var c = ES("Array", "from", !1, window.document.getElementsByTagName("object"));
                        c = c.concat(ES("Array", "from", !1, window.document.getElementsByTagName("embed")));
                        var d = !1,
                            e = !1;
                        ES(c, "forEach", !0, function(c) {
                            __p && __p();
                            var f = o(c),
                                g = j && p(c);
                            if (!f && !g) return;
                            d = d || f;
                            e = e || g;
                            g = function() {
                                a.state === "opened" ? f ? m(c) : k(c) : f ? n(c) : l(c)
                            };
                            if (i) {
                                b("Log").info("Calling developer specified callback");
                                var h = {
                                    state: a.state,
                                    elem: c
                                };
                                i(h);
                                setTimeout(g, 200)
                            } else g()
                        });
                        if (Math.random() <= 1 / 1e3) {
                            c = {
                                unity: e,
                                flash: d
                            };
                            b("sdk.api")(b("sdk.Runtime").getClientID() + "/occludespopups", "post", c)
                        }
                    }
                    b("sdk.RPC").local.hidePluginObjects = function() {
                        b("Log").info("hidePluginObjects called"), q({
                            state: "opened"
                        })
                    };
                    b("sdk.RPC").local.showPluginObjects = function() {
                        b("Log").info("showPluginObjects called"), q({
                            state: "closed"
                        })
                    };
                    b("sdk.RPC").local.showFlashObjects = b("sdk.RPC").local.showPluginObjects;
                    b("sdk.RPC").local.hideFlashObjects = b("sdk.RPC").local.hidePluginObjects;

                    function a() {
                        m(), k()
                    }

                    function c() {
                        n(), l()
                    }
                    f = {
                        _setHidePluginCallback: function(a) {
                            i = a
                        },
                        hidePluginElement: a,
                        showPluginElement: c
                    };
                    e.exports = f
                }), null);
                __d("sdk.Canvas.Tti", ["sdk.RPC", "sdk.Runtime"], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function g(a, c) {
                        c = {
                            appId: b("sdk.Runtime").getClientID(),
                            time: ES("Date", "now", !1),
                            name: c
                        };
                        c = [c];
                        a && c.push(function(b) {
                            a(b.result)
                        });
                        b("sdk.RPC").remote.logTtiMessage.apply(null, c)
                    }

                    function a() {
                        g(null, "StartIframeAppTtiTimer")
                    }

                    function c(a) {
                        g(a, "StopIframeAppTtiTimer")
                    }

                    function d(a) {
                        g(a, "RecordIframeAppTti")
                    }
                    b("sdk.RPC").stub("logTtiMessage");
                    f = {
                        setDoneLoading: d,
                        startTimer: a,
                        stopTimer: c
                    };
                    e.exports = f
                }), null);
                __d("legacy:fb.canvas", ["Assert", "sdk.Canvas.Environment", "sdk.Event", "FB", "sdk.Canvas.IframeHandling", "sdk.Canvas.Navigation", "sdk.Canvas.Plugin", "sdk.RPC", "sdk.Runtime", "sdk.Canvas.Tti"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    b("FB").provide("Canvas", {
                        setSize: function(a) {
                            b("Assert").maybeObject(a, "Invalid argument");
                            return b("sdk.Canvas.IframeHandling").setSize.apply(null, arguments)
                        },
                        setAutoGrow: function() {
                            return b("sdk.Canvas.IframeHandling").setAutoGrow.apply(null, arguments)
                        },
                        getPageInfo: function(a) {
                            b("Assert").isFunction(a, "Invalid argument");
                            return b("sdk.Canvas.Environment").getPageInfo.apply(null, arguments)
                        },
                        scrollTo: function(a, c) {
                            b("Assert").maybeNumber(a, "Invalid argument");
                            b("Assert").maybeNumber(c, "Invalid argument");
                            return b("sdk.Canvas.Environment").scrollTo.apply(null, arguments)
                        },
                        setDoneLoading: function(a) {
                            b("Assert").maybeFunction(a, "Invalid argument");
                            return b("sdk.Canvas.Tti").setDoneLoading.apply(null, arguments)
                        },
                        startTimer: function() {
                            return b("sdk.Canvas.Tti").startTimer.apply(null, arguments)
                        },
                        stopTimer: function(a) {
                            b("Assert").maybeFunction(a, "Invalid argument");
                            return b("sdk.Canvas.Tti").stopTimer.apply(null, arguments)
                        },
                        getHash: function(a) {
                            b("Assert").isFunction(a, "Invalid argument");
                            return b("sdk.Canvas.Navigation").getHash.apply(null, arguments)
                        },
                        setHash: function(a) {
                            b("Assert").isString(a, "Invalid argument");
                            return b("sdk.Canvas.Navigation").setHash.apply(null, arguments)
                        },
                        setUrlHandler: function(a) {
                            b("Assert").isFunction(a, "Invalid argument");
                            return b("sdk.Canvas.Navigation").setUrlHandler.apply(null, arguments)
                        }
                    }), b("sdk.RPC").local.fireEvent = ES(b("sdk.Event").fire, "bind", !0, b("sdk.Event")), b("sdk.Event").subscribe("init:post", function(a) {
                        b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) && (b("Assert").isTrue(!a.hideFlashCallback || !a.hidePluginCallback, "cannot specify deprecated hideFlashCallback and new hidePluginCallback"), b("sdk.Canvas.Plugin")._setHidePluginCallback(a.hidePluginCallback || a.hideFlashCallback))
                    })
                }), 3);
                __d("legacy:fb.canvas.plugin", ["FB", "sdk.Canvas.Plugin"], (function(a, b, c, d, e, f) {
                    b("FB").provide("Canvas.Plugin", b("sdk.Canvas.Plugin"))
                }), 3);
                __d("sdk.Canvas.Prefetcher", ["JSSDKCanvasPrefetcherConfig", "sdk.api", "sdk.Runtime"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {
                            AUTOMATIC: 0,
                            MANUAL: 1
                        },
                        h = b("JSSDKCanvasPrefetcherConfig").sampleRate,
                        i = b("JSSDKCanvasPrefetcherConfig").blacklist,
                        j = g.AUTOMATIC,
                        k = [];

                    function l() {
                        var a = {
                            object: "data",
                            link: "href",
                            script: "src"
                        };
                        j == g.AUTOMATIC && ES(ES("Object", "keys", !1, a), "forEach", !0, function(b) {
                            var c = a[b];
                            ES(ES("Array", "from", !1, document.getElementsByTagName(b)), "forEach", !0, function(a) {
                                a[c] && k.push(a[c])
                            })
                        });
                        if (k.length === 0) return;
                        b("sdk.api")(b("sdk.Runtime").getClientID() + "/staticresources", "post", {
                            urls: ES("JSON", "stringify", !1, k),
                            is_https: location.protocol === "https:"
                        });
                        k = []
                    }

                    function a() {
                        if (!b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) || !b("sdk.Runtime").getClientID() || !h) return;
                        if (Math.random() > 1 / h || i == "*" || ~ES(i, "indexOf", !0, b("sdk.Runtime").getClientID())) return;
                        setTimeout(l, 3e4)
                    }

                    function c(a) {
                        j = a
                    }

                    function d(a) {
                        k.push(a)
                    }
                    f = {
                        COLLECT_AUTOMATIC: g.AUTOMATIC,
                        COLLECT_MANUAL: g.MANUAL,
                        addStaticResource: d,
                        setCollectionMode: c,
                        _maybeSample: a
                    };
                    e.exports = f
                }), null);
                __d("legacy:fb.canvas.prefetcher", ["FB", "sdk.Canvas.Prefetcher", "sdk.Event", "sdk.Runtime"], (function(a, b, c, d, e, f) {
                    b("FB").provide("Canvas.Prefetcher", b("sdk.Canvas.Prefetcher")), b("sdk.Event").subscribe("init:post", function(a) {
                        b("sdk.Runtime").isEnvironment(b("sdk.Runtime").ENVIRONMENTS.CANVAS) && b("sdk.Canvas.Prefetcher")._maybeSample()
                    })
                }), 3);
                __d("legacy:fb.canvas.presence", ["sdk.RPC", "sdk.Event"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    b("sdk.Event").subscribe(b("sdk.Event").SUBSCRIBE, a);
                    b("sdk.Event").subscribe(b("sdk.Event").UNSUBSCRIBE, c);
                    b("sdk.RPC").stub("useFriendsOnline");

                    function a(a, c) {
                        if (a != "canvas.friendsOnlineUpdated") return;
                        c.length === 1 && b("sdk.RPC").remote.useFriendsOnline(!0)
                    }

                    function c(a, c) {
                        if (a != "canvas.friendsOnlineUpdated") return;
                        c.length === 0 && b("sdk.RPC").remote.useFriendsOnline(!1)
                    }
                }), 3);
                __d("legacy:fb.event", ["FB", "sdk.Event", "Log"], (function(a, b, c, d, e, f) {
                    a = function(a) {
                        return b("Log").error("FB.Event." + a + "() has been deprecated")
                    };
                    b("FB").provide("Event", {
                        subscribe: function(a, c) {
                            return b("sdk.Event").subscribe(a, c)
                        },
                        unsubscribe: ES(b("sdk.Event").unsubscribe, "bind", !0, b("sdk.Event")),
                        clear: ES(a, "bind", !0, null, "clear"),
                        fire: ES(a, "bind", !0, null, "fire")
                    })
                }), 3);
                __d("legacy:fb.frictionless", ["FB", "sdk.Frictionless"], (function(a, b, c, d, e, f) {
                    b("FB").provide("Frictionless", b("sdk.Frictionless"))
                }), 3);
                __d("sdk.MBasicInitializer", ["UrlMap", "sdk.DOM", "sdk.fbt", "sdk.Runtime", "sdk.UA", "sdk.URI"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = function() {
                        __p && __p();

                        function a(a) {
                            __p && __p();
                            if (!a) return;
                            var c = a.parentNode;
                            if (!c) return;
                            var d = b("sdk.DOM").getAttr(a, "href") || window.location.href,
                                e = new(b("sdk.URI"))(b("UrlMap").resolve("m"));
                            e.setPath("/dialog/share");
                            e.addQueryData("href", encodeURI(d));
                            e.addQueryData("app_id", b("sdk.Runtime").getClientID());
                            e.addQueryData("mbasic_link", 1);
                            d = document.createElement("a");
                            d.style = "display:inline-block; zoom:1;";
                            d.textContent = b("sdk.fbt")._("Share to Facebook");
                            d.setAttribute("href", e.toString());
                            d.setAttribute("target", "_blank");
                            c.insertBefore(d, a);
                            c.removeChild(a)
                        }
                        ES(ES("Array", "from", !1, document.getElementsByTagName("fb:share-button")), "forEach", !0, function(b) {
                            return a(b)
                        });
                        ES(ES("Array", "from", !1, document.getElementsByClassName("fb-share-button")), "forEach", !0, function(b) {
                            return a(b)
                        })
                    };

                    function a() {
                        if (!b("sdk.UA").mBasic()) return;
                        g()
                    }
                    e.exports = {
                        init: a
                    }
                }), null);
                __d("sdk.init", ["Log", "ManagedError", "QueryString", "sdk.Cookie", "sdk.ErrorHandling", "sdk.Event", "sdk.MBasicInitializer", "sdk.PlatformVersioning", "sdk.Runtime", "sdk.UA", "sdk.URI"], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function g(a) {
                        var c = typeof a === "number" && a > 0 || typeof a === "string" && /^[0-9a-f]{21,}$|^[0-9]{1,21}$/.test(a);
                        if (c) return a.toString();
                        b("Log").warn("Invalid App Id: Must be a number or numeric string representing the application id.");
                        return null
                    }

                    function h(a) {
                        __p && __p();
                        b("sdk.Runtime").getInitialized() && b("Log").warn("FB.init has already been called - this could indicate a problem");
                        if (b("sdk.Runtime").getIsVersioned()) {
                            if (Object.prototype.toString.call(a) !== "[object Object]") throw new(b("ManagedError"))("Invalid argument");
                            if (a.authResponse) throw new(b("ManagedError"))("Setting authResponse is not supported");
                            a.version || (a.version = new(b("sdk.URI"))(location.href).getQueryData().sdk_version);
                            b("sdk.PlatformVersioning").assertValidVersion(a.version);
                            b("sdk.Runtime").setVersion(a.version)
                        } else /number|string/.test(typeof a) && (b("Log").warn("FB.init called with invalid parameters"), a = {
                            apiKey: a
                        }), a = ES("Object", "assign", !1, {
                            status: !0
                        }, a || {});
                        var c = g(a.appId || a.apiKey);
                        c !== null && b("sdk.Runtime").setClientID(c);
                        "scope" in a && b("sdk.Runtime").setScope(a.scope);
                        a.cookie && (b("sdk.Runtime").setUseCookie(!0), typeof a.cookie === "string" && b("sdk.Cookie").setDomain(a.cookie));
                        (a.localStorage === !1 || a.localStorage === "false") && b("sdk.Runtime").setUseLocalStorage(!1);
                        a.kidDirectedSite && b("sdk.Runtime").setKidDirectedSite(!0);
                        (a.autoLogAppEvents === "1" || a.autoLogAppEvents === "true") && (a.autoLogAppEvents = !0);
                        a.ab && b("sdk.Runtime").setSDKAB(a.ab);
                        b("sdk.Runtime").setInitialized(!0);
                        b("sdk.UA").mBasic() && b("sdk.MBasicInitializer").init();
                        b("sdk.Event").fire("init:post", a)
                    }
                    window.setTimeout(function() {
                        __p && __p();
                        var a = /(connect\.facebook\.net|\.facebook\.com\/assets.php|\.facebook\.net\/assets.php).*?#(.*)/;
                        ES(ES("Array", "from", !1, fb_fif_window.document.getElementsByTagName("script")), "forEach", !0, function(c) {
                            __p && __p();
                            if (c.src) {
                                c = a.exec(c.src);
                                if (c) {
                                    c = b("QueryString").decode(c[2]);
                                    for (var d in c)
                                        if (Object.prototype.hasOwnProperty.call(c, d)) {
                                            var e = c[d];
                                            e == "0" && (c[d] = 0)
                                        }
                                    h(c)
                                }
                            }
                        });
                        window.fbAsyncInit && !window.fbAsyncInit.hasRun && (b("sdk.Event").fire("init:asyncstart"), window.fbAsyncInit.hasRun = !0, b("sdk.ErrorHandling").unguard(window.fbAsyncInit)())
                    }, 0);
                    e.exports = h
                }), null);
                __d("legacy:fb.init", ["FB", "sdk.Event", "sdk.init"], (function(a, b, c, d, e, f) {
                    "use strict";
                    b("FB").provide("", {
                        init: b("sdk.init")
                    }), b("sdk.Event").subscribe("init:post", function() {
                        __buffer && __buffer.replay()
                    }), window.setTimeout(function() {
                        __buffer && __buffer.opts && b("sdk.init")(__buffer.opts)
                    }, 0)
                }), 3);
                __d("runOnce", [], (function(a, b, c, d, e, f) {
                    function a(a) {
                        var b = !1,
                            c;
                        return function() {
                            b || (b = !0, c = a());
                            return c
                        }
                    }
                    e.exports = a
                }), null);
                __d("sdk.Time", ["Log", "sdk.feature", "sdk.Impressions", "sdk.Runtime"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = window.performance,
                        h = g && "now" in g && "getEntriesByName" in g,
                        i, j = {};
                    if (h) {
                        var k = b("sdk.Runtime").getSDKUrl();
                        a = null;
                        c = ES(g.getEntriesByType("resource"), "filter", !0, function(a) {
                            return ES(a.name, "startsWith", !0, k)
                        });
                        if (c.length > 1)
                            if (c > 2) c = null;
                            else {
                                d = ES(c, "findIndex", !0, function(a) {
                                    return ES(a.name, "startsWith", !0, k + "?hash=")
                                });
                                !d ? c = null : (a = c.splice(d)[0], c = c[0])
                            }
                        else if (c.length === 1) {
                            f = document.getElementById("facebook-jssdk-iframe");
                            f && f instanceof HTMLIFrameElement && (a = f.contentWindow.performance.getEntriesByType("resource").find(function(a) {
                                return ES(a.name, "startsWith", !0, k)
                            }));
                            c = c[0]
                        } else c = null;
                        c && (j.fetchTime = Math.round(c.duration), a && (j.fetchTime += Math.round(a.duration)), "transferSize" in c && (j.transferSize = c.transferSize, a && (j.transferSize += a.transferSize)), b("Log").debug("sdkperf: it took %s ms and %s bytes to load %s", j.fetchTime, j.transferSize, k), i = c.startTime, j.ns = b("sdk.Runtime").getSDKNS(), i && window.setTimeout(function() {
                            var a = b("sdk.feature")("log_perf", !1),
                                c = b("sdk.Runtime").getSDKAB();
                            c && (j.ab = c, a = !0);
                            a && b("sdk.Impressions").log(116, j)
                        }, 1e4))
                    }
                    d = {
                        log: function(a) {
                            if (!h || !i) return;
                            j[a] = Math.round(g.now() - i);
                            b("Log").debug("sdkperf: %s logged after %s ms", a, j[a])
                        }
                    };
                    e.exports = d
                }), null);
                __d("legacy:fb.time", ["sdk.Event", "sdk.Time", "runOnce"], (function(a, b, c, d, e, f) {
                    "use strict";
                    b("sdk.Event").subscribe("init:post", function() {
                        b("sdk.Time").log("init")
                    }), b("sdk.Event").subscribe("init:asyncstart", function() {
                        b("sdk.Time").log("asyncstart")
                    }), b("sdk.Event").subscribe("iframeplugin:create", b("runOnce")(function() {
                        return b("sdk.Time").log("pluginframe")
                    })), b("sdk.Event").subscribe("iframeplugin:onload", b("runOnce")(function() {
                        return b("sdk.Time").log("ttfp")
                    }))
                }), 3);
                __d("legacy:fb.ui", ["FB", "sdk.ui"], (function(a, b, c, d, e, f) {
                    b("FB").provide("", {
                        ui: b("sdk.ui")
                    })
                }), 3);
                __d("legacy:fb.versioned-sdk", ["sdk.Runtime"], (function(a, b, c, d, e, f) {
                    b("sdk.Runtime").setIsVersioned(!0)
                }), 3);
                __d("XFBML", ["Assert", "Log", "ObservableMixin", "runOnce"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {},
                        h = {},
                        i = 0,
                        j = new(b("ObservableMixin"))();

                    function k(a, b) {
                        return ES(a[b] + "", "trim", !0)
                    }

                    function l(a) {
                        return a.scopeName ? a.scopeName + ":" + a.nodeName : ""
                    }

                    function m(a) {
                        return g[k(a, "nodeName").toLowerCase()] || g[l(a).toLowerCase()]
                    }

                    function n(a) {
                        var b = ES(k(a, "className").split(/\s+/), "filter", !0, function(a) {
                            return Object.prototype.hasOwnProperty.call(h, a)
                        });
                        if (b.length === 0) return void 0;
                        if (a.getAttribute("fb-xfbml-state") || !a.childNodes || a.childNodes.length === 0 || a.childNodes.length === 1 && a.childNodes[0].nodeType === 3 || a.children.length === 1 && k(a.children[0], "className") === "fb-xfbml-parse-ignore") return h[b[0]]
                    }

                    function o(a) {
                        var b = {};
                        ES(ES("Array", "from", !1, a.attributes), "forEach", !0, function(a) {
                            b[k(a, "name")] = k(a, "value")
                        });
                        return b
                    }

                    function p(a, c, d) {
                        __p && __p();
                        b("Assert").isTrue(a && a.nodeType && a.nodeType === 1 && !!a.getElementsByTagName, "Invalid DOM node passed to FB.XFBML.parse()");
                        b("Assert").isFunction(c, "Invalid callback passed to FB.XFBML.parse()");
                        var e = ++i;
                        b("Log").info("XFBML Parsing Start %s", e);
                        var f = 1,
                            g = 0,
                            h = function() {
                                f--, f === 0 && (b("Log").info("XFBML Parsing Finish %s, %s tags found", e, g), c(), j.inform("render", e, g)), b("Assert").isTrue(f >= 0, "onrender() has been called too many times")
                            };
                        ES(ES("Array", "from", !1, a.getElementsByTagName("*")), "forEach", !0, function(a) {
                            __p && __p();
                            if (!d && a.getAttribute("fb-xfbml-state")) return;
                            if (a.nodeType !== 1) return;
                            var c = m(a) || n(a);
                            if (!c) return;
                            f++;
                            g++;
                            var e = new c.ctor(a, c.xmlns, c.localName, o(a));
                            e.subscribe("render", b("runOnce")(function() {
                                a.setAttribute("fb-xfbml-state", "rendered"), h()
                            }));
                            c = function b() {
                                a.getAttribute("fb-xfbml-state") == "parsed" ? j.subscribe("render.queue", b) : (a.setAttribute("fb-xfbml-state", "parsed"), e.process())
                            };
                            c()
                        });
                        j.inform("parse", e, g);
                        var k = 3e4;
                        setTimeout(function() {
                            f > 0 && b("Log").warn("%s tags failed to render in %s ms", f, k)
                        }, k);
                        h()
                    }
                    j.subscribe("render", function() {
                        var a = j.getSubscribers("render.queue");
                        j.clearSubscribers("render.queue");
                        ES(a, "forEach", !0, function(a) {
                            a()
                        })
                    });
                    ES("Object", "assign", !1, j, {
                        registerTag: function(a) {
                            var c = a.xmlns + ":" + a.localName;
                            b("Assert").isUndefined(g[c], c + " already registered");
                            g[c] = a;
                            h[a.xmlns + "-" + a.localName] = a
                        },
                        parse: function(a, b) {
                            p(a || document.body, b || function() {}, !0)
                        },
                        parseNew: function() {
                            p(document.body, function() {}, !1)
                        }
                    });
                    e.exports = j
                }), null);
                __d("legacy:fb.xfbml", ["Assert", "sdk.Event", "FB", "XFBML", "sdk.domReady", "wrapFunction"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    b("FB").provide("XFBML", {
                        parse: function(a) {
                            b("Assert").maybeXfbml(a, "Invalid argument");
                            a && a.nodeType === 9 && (a = a.body);
                            return b("XFBML").parse.apply(null, arguments)
                        }
                    });
                    b("XFBML").subscribe("parse", ES(b("sdk.Event").fire, "bind", !0, b("sdk.Event"), "xfbml.parse"));
                    b("XFBML").subscribe("render", ES(b("sdk.Event").fire, "bind", !0, b("sdk.Event"), "xfbml.render"));
                    b("sdk.Event").subscribe("init:post", function(a) {
                        a.xfbml && setTimeout(b("wrapFunction")(ES(b("sdk.domReady"), "bind", !0, null, b("XFBML").parse), "entry", "init:post:xfbml.parse"), 0)
                    });
                    b("Assert").define("Xfbml", function(a) {
                        return (a.nodeType === 1 || a.nodeType === 9) && typeof a.nodeName === "string"
                    });
                    try {
                        document.namespaces && !document.namespaces.item.fb && document.namespaces.add("fb")
                    } catch (a) {}
                }), 3);
                __d("IframePlugin", ["Log", "ObservableMixin", "QueryString", "Type", "UrlMap", "guid", "resolveURI", "sdk.Auth", "sdk.createIframe", "sdk.DOM", "sdk.Event", "sdk.PlatformVersioning", "sdk.Runtime", "sdk.UA", "sdk.URI", "sdk.XD"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {
                        skin: "string",
                        font: "string",
                        width: "string",
                        height: "px",
                        ref: "string",
                        color_scheme: "string"
                    };

                    function h(a, b, c) {
                        (b || b === 0) && (b === "100%" ? a.style.width = "100%" : a.style.width = b + "px"), (c || c === 0) && (a.style.height = c + "px")
                    }

                    function i(a) {
                        return function(c) {
                            c = {
                                width: c.width,
                                height: c.height,
                                pluginID: a
                            };
                            b("sdk.Event").fire("xfbml.resize", c)
                        }
                    }
                    var j = {
                        string: function(a) {
                            return a
                        },
                        bool: function(a) {
                            return a ? /^(?:true|1|yes|on)$/i.test(a) : void 0
                        },
                        url: function(a) {
                            return b("resolveURI")(a)
                        },
                        url_maybe: function(a) {
                            return a ? b("resolveURI")(a) : a
                        },
                        hostname: function(a) {
                            return a || window.location.hostname
                        },
                        px: function(a) {
                            return /^(\d+)(?:px)?$/.test(a) ? parseInt(RegExp.$1, 10) : void 0
                        },
                        text: function(a) {
                            return a
                        }
                    };

                    function k(a, b) {
                        a = a[b] || a[b.replace(/_/g, "-")] || a[b.replace(/_/g, "")] || a["data-" + b] || a["data-" + b.replace(/_/g, "-")] || a["data-" + b.replace(/_/g, "")] || void 0;
                        return a
                    }

                    function l(a, b, c, d) {
                        ES(ES("Object", "keys", !1, a), "forEach", !0, function(e) {
                            a[e] == "text" && !c[e] && (c[e] = b.textContent || b.innerText || "", b.setAttribute(e, c[e])), d[e] = j[a[e]](k(c, e))
                        })
                    }

                    function m(a) {
                        return a === "100%" ? "100%" : a || a === "0" || a === 0 ? parseInt(a, 10) : void 0
                    }

                    function n(a) {
                        a && h(a, 0, 0)
                    }
                    var o = b("Type").extend({
                        constructor: function(a, c, d, e) {
                            __p && __p();
                            var f = this;
                            this.parent();
                            d = d.replace(/-/g, "_");
                            var j = k(e, "plugin_id");
                            this.subscribe("xd.resize", i(j));
                            this.subscribe("xd.resize.flow", i(j));
                            this.subscribe("xd.resize.flow", function(a) {
                                ES("Object", "assign", !1, f._iframeOptions.root.style, {
                                    verticalAlign: "bottom",
                                    overflow: ""
                                }), h(f._iframeOptions.root, m(a.width), m(a.height)), f.updateLift(), clearTimeout(f._timeoutID)
                            });
                            this.subscribe("xd.resize", function(a) {
                                ES("Object", "assign", !1, f._iframeOptions.root.style, {
                                    verticalAlign: "bottom",
                                    overflow: ""
                                }), h(f._iframeOptions.root, m(a.width), m(a.height)), h(f._iframe, m(a.width), m(a.height)), f._isIframeResized = !0, f.updateLift(), clearTimeout(f._timeoutID)
                            });
                            this.subscribe("xd.resize.iframe", function(a) {
                                h(f._iframe, m(a.width), m(a.height)), f._isIframeResized = !0, f.updateLift(), clearTimeout(f._timeoutID)
                            });
                            this.subscribe("xd.sdk_event", function(c) {
                                var d = ES("JSON", "parse", !1, c.data);
                                d.pluginID = j;
                                b("sdk.Event").fire(c.event, d, a)
                            });
                            var o = b("UrlMap").resolve("www") + "/plugins/" + d + ".php?",
                                p = {};
                            l(this.getParams(), a, e, p);
                            l(g, a, e, p);
                            ES("Object", "assign", !1, p, {
                                app_id: b("sdk.Runtime").getClientID(),
                                locale: b("sdk.Runtime").getLocale(),
                                sdk: "joey",
                                kid_directed_site: b("sdk.Runtime").getKidDirectedSite(),
                                channel: b("sdk.XD").handler(function(a) {
                                    return f.inform("xd." + a.type, a)
                                }, "parent.parent", !0)
                            });
                            this.shouldIgnoreWidth() && (p.width = void 0);
                            p.container_width = a.offsetWidth;
                            b("sdk.DOM").addCss(a, "fb_iframe_widget");
                            var q = b("guid")();
                            this.subscribe("xd.verify", function(a) {
                                b("sdk.XD").sendToFacebook(q, {
                                    method: "xd/verify",
                                    params: ES("JSON", "stringify", !1, a.token)
                                })
                            });
                            this.subscribe("xd.refreshLoginStatus", function() {
                                b("sdk.Auth").removeLogoutState(), b("sdk.Auth").getLoginStatus(ES(f.inform, "bind", !0, f, "login.status"), !0)
                            });
                            e = document.createElement("span");
                            ES("Object", "assign", !1, e.style, {
                                verticalAlign: "top",
                                width: "0px",
                                height: "0px",
                                overflow: "hidden"
                            });
                            this._element = a;
                            this._ns = c;
                            this._tag = d;
                            this._params = p;
                            this._config = this.getConfig();
                            this._iframeOptions = {
                                root: e,
                                url: o + b("QueryString").encode(p),
                                name: q,
                                width: this._config.mobile_fullsize && b("sdk.UA").mobile() ? void 0 : p.width || 1e3,
                                height: p.height || 1e3,
                                style: {
                                    border: "none",
                                    visibility: "hidden"
                                },
                                title: this._ns + ":" + this._tag + " Facebook Social Plugin",
                                onload: function() {
                                    return f.inform("render")
                                },
                                onerror: function() {
                                    return n(f._iframe)
                                }
                            };
                            this.isFluid() && p.width !== "auto" && (b("sdk.DOM").addCss(this._element, "fb_iframe_widget_fluid_desktop"), !p.width && this._config.full_width && (this._element.style.width = "100%", this._iframeOptions.root.style.width = "100%", this._iframeOptions.style.width = "100%", this._params.container_width = this._element.offsetWidth, this._iframeOptions.url = o + b("QueryString").encode(this._params)))
                        },
                        shouldIgnoreWidth: function() {
                            return b("sdk.UA").mobile() && this.getConfig().mobile_fullsize
                        },
                        useInlineHeightForMobile: function() {
                            return !0
                        },
                        process: function() {
                            __p && __p();
                            var a = this;
                            if (b("sdk.Runtime").getIsVersioned()) {
                                b("sdk.PlatformVersioning").assertVersionIsSet();
                                var c = new(b("sdk.URI"))(this._iframeOptions.url);
                                this._iframeOptions.url = c.setPath("/" + b("sdk.Runtime").getVersion() + c.getPath()).toString()
                            }
                            c = ES("Object", "assign", !1, {}, this._params);
                            delete c.channel;
                            var d = b("QueryString").encode(c);
                            if (this._element.getAttribute("fb-iframe-plugin-query") == d) {
                                b("Log").info("Skipping render: %s:%s %s", this._ns, this._tag, d);
                                this.inform("render");
                                return
                            }
                            this._element.setAttribute("fb-iframe-plugin-query", d);
                            this.subscribe("render", function() {
                                b("sdk.Event").fire("iframeplugin:onload"), a._iframe.style.visibility = "visible", a._isIframeResized || n(a._iframe)
                            });
                            while (this._element.firstChild) this._element.removeChild(this._element.firstChild);
                            this._element.appendChild(this._iframeOptions.root);
                            var e = b("sdk.UA").mobile() ? 120 : 45;
                            this._timeoutID = setTimeout(function() {
                                n(a._iframe), b("Log").warn("%s:%s failed to resize in %ss", a._ns, a._tag, e)
                            }, e * 1e3);
                            this._iframe = b("sdk.createIframe")(this._iframeOptions);
                            b("sdk.Event").fire("iframeplugin:create");
                            if (b("sdk.UA").mobile() || c.width === "auto") {
                                this.useInlineHeightForMobile() && b("sdk.DOM").addCss(this._element, "fb_iframe_widget_fluid");
                                if (!this._iframeOptions.width) {
                                    ES("Object", "assign", !1, this._element.style, {
                                        display: "block",
                                        width: "100%",
                                        height: "auto"
                                    });
                                    ES("Object", "assign", !1, this._iframeOptions.root.style, {
                                        width: "100%",
                                        height: "auto"
                                    });
                                    d = {
                                        height: "auto",
                                        position: "static",
                                        width: "100%"
                                    };
                                    (b("sdk.UA").iphone() || b("sdk.UA").ipad()) && ES("Object", "assign", !1, d, {
                                        width: "220px",
                                        "min-width": "100%"
                                    });
                                    ES("Object", "assign", !1, this._iframe.style, d)
                                }
                            }
                        },
                        getConfig: function() {
                            return {}
                        },
                        isFluid: function() {
                            var a = this.getConfig();
                            return a.fluid
                        },
                        updateLift: function() {
                            var a = this._iframe.style.width === this._iframeOptions.root.style.width && this._iframe.style.height === this._iframeOptions.root.style.height;
                            b("sdk.DOM")[a ? "removeCss" : "addCss"](this._iframe, "fb_iframe_widget_lift")
                        }
                    }, b("ObservableMixin"));
                    o.getVal = k;
                    o.getBaseParams = function() {
                        return g
                    };
                    o.withParams = function(a, b) {
                        return o.extend({
                            getParams: function() {
                                return a
                            },
                            getConfig: function() {
                                return b ? b : {}
                            }
                        })
                    };
                    e.exports = o
                }), null);
                __d("PluginConfig", ["sdk.feature"], (function(a, b, c, d, e, f) {
                    a = {
                        comment_embed: {
                            mobile_fullsize: !0
                        },
                        messengerpreconfirmation: {
                            mobile_fullsize: !0
                        },
                        messengeraccountconfirmation: {
                            mobile_fullsize: !0
                        },
                        messengerbusinesslink: {
                            mobile_fullsize: !0
                        },
                        messengertoggle: {
                            mobile_fullsize: !0
                        },
                        messengermessageus: {
                            mobile_fullsize: !0
                        },
                        post: {
                            fluid: b("sdk.feature")("fluid_embed", !1),
                            mobile_fullsize: !0
                        },
                        send_to_messenger: {
                            mobile_fullsize: !0
                        }
                    };
                    e.exports = a
                }), null);
                __d("PluginAttrTypes", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    a = {
                        string: "string",
                        bool: "bool",
                        url: "url"
                    };
                    e.exports = a
                }), null);
                __d("PluginTags", ["PluginAttrTypes"], (function(a, b, c, d, e, f) {
                    var g = {
                            comment_embed: {
                                href: b("PluginAttrTypes").url,
                                include_parent: b("PluginAttrTypes").bool
                            },
                            composer: {
                                action_type: b("PluginAttrTypes").string,
                                action_properties: b("PluginAttrTypes").string
                            },
                            create_event_button: {},
                            group: {
                                href: b("PluginAttrTypes").url,
                                show_social_context: b("PluginAttrTypes").bool,
                                show_group_info: b("PluginAttrTypes").bool,
                                show_metadata: b("PluginAttrTypes").bool
                            },
                            like: {
                                href: b("PluginAttrTypes").url,
                                layout: b("PluginAttrTypes").string,
                                show_faces: b("PluginAttrTypes").bool,
                                share: b("PluginAttrTypes").bool,
                                action: b("PluginAttrTypes").string,
                                send: b("PluginAttrTypes").bool,
                                size: b("PluginAttrTypes").string
                            },
                            like_box: {
                                href: b("PluginAttrTypes").string,
                                show_faces: b("PluginAttrTypes").bool,
                                header: b("PluginAttrTypes").bool,
                                stream: b("PluginAttrTypes").bool,
                                force_wall: b("PluginAttrTypes").bool,
                                show_border: b("PluginAttrTypes").bool,
                                id: b("PluginAttrTypes").string,
                                connections: b("PluginAttrTypes").string,
                                profile_id: b("PluginAttrTypes").string,
                                name: b("PluginAttrTypes").string
                            },
                            page: {
                                href: b("PluginAttrTypes").string,
                                hide_cta: b("PluginAttrTypes").bool,
                                hide_cover: b("PluginAttrTypes").bool,
                                small_header: b("PluginAttrTypes").bool,
                                adapt_container_width: b("PluginAttrTypes").bool,
                                show_facepile: b("PluginAttrTypes").bool,
                                show_posts: b("PluginAttrTypes").bool,
                                tabs: b("PluginAttrTypes").string
                            },
                            messenger_checkbox: {
                                messenger_app_id: b("PluginAttrTypes").string,
                                page_id: b("PluginAttrTypes").string,
                                pixel_id: b("PluginAttrTypes").string,
                                prechecked: b("PluginAttrTypes").bool,
                                allow_login: b("PluginAttrTypes").bool,
                                size: b("PluginAttrTypes").string,
                                origin: b("PluginAttrTypes").string,
                                user_ref: b("PluginAttrTypes").string,
                                identity_match: b("PluginAttrTypes").string,
                                center_align: b("PluginAttrTypes").bool
                            },
                            messengermessageus: {
                                messenger_app_id: b("PluginAttrTypes").string,
                                page_id: b("PluginAttrTypes").string,
                                color: b("PluginAttrTypes").string,
                                size: b("PluginAttrTypes").string
                            },
                            send_to_messenger: {
                                messenger_app_id: b("PluginAttrTypes").string,
                                page_id: b("PluginAttrTypes").string,
                                color: b("PluginAttrTypes").string,
                                size: b("PluginAttrTypes").string,
                                enforce_login: b("PluginAttrTypes").bool,
                                identity_match: b("PluginAttrTypes").string,
                                origin: b("PluginAttrTypes").string,
                                cta_text: b("PluginAttrTypes").string
                            },
                            page_events: {
                                href: b("PluginAttrTypes").url
                            },
                            post: {
                                href: b("PluginAttrTypes").url,
                                show_text: b("PluginAttrTypes").bool
                            },
                            profile_pic: {
                                uid: b("PluginAttrTypes").string,
                                linked: b("PluginAttrTypes").bool,
                                href: b("PluginAttrTypes").string,
                                size: b("PluginAttrTypes").string,
                                facebook_logo: b("PluginAttrTypes").bool
                            },
                            send_to_mobile: {
                                max_rows: b("PluginAttrTypes").string,
                                show_faces: b("PluginAttrTypes").bool,
                                size: b("PluginAttrTypes").string
                            }
                        },
                        h = {
                            fan: "like_box",
                            likebox: "like_box"
                        };
                    ES(ES("Object", "keys", !1, h), "forEach", !0, function(a) {
                        g[a] = g[h[a]]
                    });
                    e.exports = g
                }), null);
                __d("sdk.XFBML.Comments", ["IframePlugin", "QueryString", "UrlMap", "sdk.DOM", "sdk.Event", "sdk.Runtime", "sdk.UA", "sdk.URI"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = 320,
                        h = ES("Object", "assign", !1, {
                            numposts: "string",
                            href: "url",
                            permalink: "bool",
                            order_by: "string",
                            mobile: "bool",
                            version: "string",
                            hide_post_profile: "bool",
                            limit: "string",
                            offset: "string",
                            view: "string",
                            fb_comment_id: "string",
                            from_mod_tool: "bool",
                            migrated: "string",
                            xid: "string",
                            title: "string",
                            url: "string",
                            quiet: "string",
                            reverse: "string",
                            simple: "string",
                            css: "string",
                            notify: "string",
                            count: "bool"
                        }, b("IframePlugin").getBaseParams());

                    function i(a, c) {
                        __p && __p();
                        ES(ES("Object", "keys", !1, h), "forEach", !0, function(d) {
                            var e = b("sdk.DOM").getAttr(a, d);
                            e !== null && (c[d] = e)
                        });
                        ES(ES("Object", "keys", !1, c), "forEach", !0, function(a) {
                            ES(a, "startsWith", !0, "data-") && delete c[a]
                        });
                        b("sdk.UA").mobile() && c.mobile !== !1 && (c.mobile = !0);
                        c.skin || (c.skin = c.colorscheme);
                        if (!c.href) {
                            c.title = c.title || document.title;
                            c.url = c.url || document.URL;
                            if (!c.xid) {
                                var d = ES(document.URL, "indexOf", !0, "#");
                                d > 0 ? c.xid = encodeURIComponent(document.URL.substring(0, d)) : c.xid = encodeURIComponent(document.URL)
                            }
                            c.migrated && (c.href = b("UrlMap").resolve("www") + "/plugins/comments_v1.php?app_id=" + b("sdk.Runtime").getClientID() + "&xid=" + encodeURIComponent(c.xid) + "&url=" + encodeURIComponent(c.url))
                        } else {
                            d = c.fb_comment_id;
                            d || (d = b("QueryString").decode(document.URL.substring(ES(document.URL, "indexOf", !0, "?") + 1)).fb_comment_id, d && ES(d, "indexOf", !0, "#") > 0 && (d = d.substring(0, ES(d, "indexOf", !0, "#"))));
                            d && (c.fb_comment_id = d)
                        }
                        c.version || (c.version = b("sdk.Runtime").getVersion());
                        c.permalink || (c.width = c.mobile || c.width === "auto" || c.width === "100%" ? "" : c.width ? Math.max(c.width, g) : 550, c.height = 100);
                        if (c.href != null) {
                            d = new(b("sdk.URI"))(c.href);
                            d.getProtocol() || (c.href = d.setProtocol("http").toString())
                        }
                        return c
                    }
                    a = b("IframePlugin").extend({
                        constructor: function(a, c, d, e) {
                            e = i(a, e), this.parent(a, c, d, e), this.subscribe("xd.sdk_event", function(a) {
                                b("sdk.Event").fire(a.event, ES("JSON", "parse", !1, a.data))
                            })
                        },
                        getConfig: function() {
                            return {
                                fluid: !0,
                                full_width: !0
                            }
                        },
                        getParams: function() {
                            return h
                        }
                    });
                    e.exports = a
                }), null);
                __d("sdk.XFBML.CommentsCount", ["sdk.DOM", "sdk.XFBML.Comments", "sprintf"], (function(a, b, c, d, e, f) {
                    a = b("sdk.XFBML.Comments").extend({
                        constructor: function(a, c, d, e) {
                            b("sdk.DOM").addCss(a, "fb_comments_count_zero"), e.count = 1, this.parent(a, c, "comments", e), this.subscribe("xd.comment_count", function(c) {
                                c = ES("JSON", "parse", !1, c.data);
                                b("sdk.DOM").html(a, b("sprintf")('<span class="fb_comments_count">%s</span>', c.count));
                                c.count > 0 && b("sdk.DOM").removeCss(a, "fb_comments_count_zero");
                                b("sdk.DOM").removeCss(a, "fb_iframe_widget")
                            })
                        }
                    });
                    e.exports = a
                }), null);
                __d("safeEval", [], (function(a, b, c, d, e, f) {
                    function a(a, b) {
                        if (a === null || typeof a === "undefined") return;
                        if (typeof a !== "string") return a;
                        return /^\w+$/.test(a) && typeof window[a] === "function" ? window[a].apply(null, b || []) : Function('return eval("' + a.replace(/\"/g, '\\"') + '");').apply(null, b || [])
                    }
                    e.exports = a
                }), null);
                __d("sdk.XFBML.LoginButton", ["IframePlugin", "Log", "safeEval", "sdk.ErrorHandling", "sdk.feature", "sdk.Runtime", "sdk.Scribe", "sdk.ui", "sdk.XD"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = b("sdk.feature")("https_only_enforce_starting", !1),
                        h = b("sdk.feature")("https_only_learn_more", "");

                    function i(a, c, d) {
                        a && (typeof a === "string" ? b("sdk.ErrorHandling").unguard(b("safeEval"))(a, d) : a.apply && b("sdk.ErrorHandling").unguard(a).apply(c, d || []))
                    }
                    a = b("IframePlugin").extend({
                        constructor: function(a, c, d, e) {
                            __p && __p();
                            if (location.protocol !== "https:" && g) {
                                var f = "The Login Button plugin will soon stop working on http pages. Please update your site to use https for Facebook Login. %s";
                                b("Log").log("error", -1, f, h);
                                b("sdk.feature")("https_only_scribe_logging", !0) && b("sdk.Scribe").log("jssdk_error", {
                                    appId: b("sdk.Runtime").getClientID(),
                                    error: "HttpsOnly",
                                    extra: {
                                        message: "LoginButton"
                                    }
                                })
                            }
                            this.parent(a, c, d, e);
                            var j = b("IframePlugin").getVal(e, "on_login"),
                                k = null,
                                l = this._iframeOptions.name;
                            j && (k = function(a) {
                                if (a.error_code) {
                                    b("Log").debug("Plugin Return Error (%s): %s", a.error_code, a.error_message || a.error_description);
                                    return
                                }
                                i(j, null, [a])
                            }, this.subscribe("login.status", k));
                            this.subscribe("xd.login_button_dialog_open", function(a) {
                                b("sdk.ui")(ES("JSON", "parse", !1, a.params), function(a) {
                                    i(k, null, [a]), b("sdk.XD").sendToFacebook(l, {
                                        method: "loginReload",
                                        params: ES("JSON", "stringify", !1, a)
                                    })
                                })
                            })
                        },
                        shouldIgnoreWidth: function() {
                            return !1
                        },
                        getParams: function() {
                            return {
                                scope: "string",
                                asset_scope: "string",
                                perms: "string",
                                size: "string",
                                login_text: "text",
                                show_faces: "bool",
                                max_rows: "string",
                                show_login_face: "bool",
                                show_login_numbers: "bool",
                                registration_url: "url_maybe",
                                auto_logout_link: "bool",
                                one_click: "bool",
                                show_banner: "bool",
                                auth_type: "string",
                                default_audience: "string",
                                use_continue_as: "bool",
                                button_type: "string",
                                width: "px",
                                height: "px"
                            }
                        }
                    });
                    e.exports = a
                }), null);
                __d("UnicodeUtils", ["invariant"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = 55296,
                        i = 56319,
                        j = 56320,
                        k = 57343,
                        l = /[\uD800-\uDFFF]/;

                    function m(a) {
                        return h <= a && a <= k
                    }

                    function a(a, b) {
                        0 <= b && b < a.length || g(0, 1346, b, a.length);
                        if (b + 1 === a.length) return !1;
                        var c = a.charCodeAt(b);
                        a = a.charCodeAt(b + 1);
                        return h <= c && c <= i && j <= a && a <= k
                    }

                    function n(a) {
                        return l.test(a)
                    }

                    function o(a, b) {
                        return 1 + m(a.charCodeAt(b))
                    }

                    function b(a) {
                        if (!n(a)) return a.length;
                        var b = 0;
                        for (var c = 0; c < a.length; c += o(a, c)) b++;
                        return b
                    }

                    function p(a, b, c) {
                        __p && __p();
                        var d = b || 0;
                        c = c === void 0 ? Infinity : c || 0;
                        if (!n(a)) return a.substr(d, c);
                        var e = a.length;
                        if (e <= 0 || d > e || c <= 0) return "";
                        var f = 0;
                        if (d > 0) {
                            for (; d > 0 && f < e; d--) f += o(a, f);
                            if (f >= e) return ""
                        } else if (b < 0) {
                            for (f = e; d < 0 && 0 < f; d++) f -= o(a, f - 1);
                            f < 0 && (f = 0)
                        }
                        b = e;
                        if (c < e)
                            for (b = f; c > 0 && b < e; c--) b += o(a, b);
                        return a.substring(f, b)
                    }

                    function c(a, b, c) {
                        b = b || 0;
                        c = c === void 0 ? Infinity : c || 0;
                        b < 0 && (b = 0);
                        c < 0 && (c = 0);
                        var d = Math.abs(c - b);
                        b = b < c ? b : c;
                        return p(a, b, d)
                    }

                    function d(a) {
                        var b = [];
                        for (var c = 0; c < a.length; c += o(a, c)) b.push(a.codePointAt(c));
                        return b
                    }
                    f = {
                        getCodePoints: d,
                        getUTF16Length: o,
                        hasSurrogateUnit: n,
                        isCodeUnitInSurrogateRange: m,
                        isSurrogatePair: a,
                        strlen: b,
                        substring: c,
                        substr: p
                    };
                    e.exports = f
                }), null);
                __d("isNode", [], (function(a, b, c, d, e, f) {
                    function a(a) {
                        var b;
                        b = a != null ? (b = a.ownerDocument) != null ? b : a : document;
                        b = (b = b.defaultView) != null ? b : window;
                        return !!(a != null && (typeof b.Node === "function" ? a instanceof b.Node : typeof a === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"))
                    }
                    e.exports = a
                }), null);
                __d("isTextNode", ["isNode"], (function(a, b, c, d, e, f) {
                    function a(a) {
                        return b("isNode")(a) && a.nodeType == 3
                    }
                    e.exports = a
                }), null);
                __d("containsNode", ["isTextNode"], (function(a, b, c, d, e, f) {
                    __p && __p();

                    function g(a, c) {
                        __p && __p();
                        if (!a || !c) return !1;
                        else if (a === c) return !0;
                        else if (b("isTextNode")(a)) return !1;
                        else if (b("isTextNode")(c)) return g(a, c.parentNode);
                        else if ("contains" in a) return ES(a, "contains", !0, c);
                        else if (a.compareDocumentPosition) return !!(a.compareDocumentPosition(c) & 16);
                        else return !1
                    }
                    e.exports = g
                }), null);
                __d("sdk.XFBML.Quote", ["DOMEventListener", "IframePlugin", "UnicodeUtils", "containsNode", "sdk.DOM", "sdk.feature", "sdk.UA", "sdk.XD"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = "fb-quotable",
                        h = 155,
                        i = 70,
                        j = "",
                        k = null,
                        l = [],
                        m = !1,
                        n = null,
                        o = b("sdk.UA").mobile();

                    function p(a) {
                        a = a.getRangeAt(0);
                        a = a.startContainer;
                        return a.nodeType === 3 ? a.parentNode : a
                    }

                    function q(a) {
                        __p && __p();
                        if (!document.getSelection || o) return;
                        a = document.getSelection();
                        if (a.rangeCount === 0) {
                            s();
                            return
                        }
                        var c = l.length;
                        s();
                        if (c) {
                            var d = !1;
                            for (var e = 0; e < c; e++)
                                if (b("containsNode")(l[e], a.focusNode)) {
                                    d = !0;
                                    break
                                }
                            if (!d) return
                        }
                        j = a.toString();
                        if (j === "") {
                            s();
                            return
                        }
                        j = ES(j.toString().replace(/\s+/g, " "), "trim", !0);
                        c = Number(b("sdk.feature")("sharequotelimit", 500));
                        b("UnicodeUtils").strlen(j) > c ? j = b("UnicodeUtils").substr(j, 0, c - 3) + "..." : j = b("UnicodeUtils").substr(j, 0, c);
                        if (!m && n) {
                            p(a).appendChild(n);
                            e = r(a);
                            n.style.left = e.x + "px";
                            n.style.top = e.y + "px"
                        }
                    }

                    function r(a) {
                        __p && __p();
                        var b = n && n.offsetWidth,
                            c = b ? n.offsetHeight : i;
                        b = b ? n.offsetWidth : h;
                        a = a.getRangeAt(0);
                        var d = document.createElement("span"),
                            e = document.createElement("span"),
                            f = document.createRange();
                        f.setStart(a.startContainer, a.startOffset);
                        f.insertNode(d);
                        f = document.createRange();
                        f.setStart(a.endContainer, a.endOffset);
                        f.insertNode(e);
                        a = d.offsetTop - c;
                        f = d.offsetLeft + (e.offsetLeft - d.offsetLeft) / 2 - b / 2;
                        d.parentNode.removeChild(d);
                        e.parentNode.removeChild(e);
                        return {
                            x: f,
                            y: a
                        }
                    }

                    function s() {
                        j = "", !m && n && (n.style.left = "-9999px")
                    }
                    a = b("IframePlugin").extend({
                        constructor: function(a, c, d, e) {
                            __p && __p();
                            var f = this;
                            if (k) return k;
                            this.parent(a, c, d, e);
                            m = b("sdk.DOM").getAttr(a, "layout") === "button";
                            n = a;
                            n.style.position = "absolute";
                            n.style.display = "";
                            b("DOMEventListener").add(document, "keyup", q);
                            b("DOMEventListener").add(document, "mouseup", q);
                            this.subscribe("xd.getTextSelection", function() {
                                b("sdk.XD").sendToFacebook(f._iframeOptions.name, {
                                    method: "setTextSelection",
                                    params: ES("JSON", "stringify", !1, {
                                        text: j
                                    })
                                }), s()
                            });
                            l = ES(ES("Array", "from", !1, document.getElementsByTagName("*")), "filter", !0, function(a) {
                                return a.nodeName.toLowerCase() === "article" || b("sdk.DOM").containsCss(a, g)
                            });
                            s();
                            k = this;
                            return k
                        },
                        getParams: function() {
                            return {
                                href: "url",
                                layout: "string"
                            }
                        }
                    });
                    e.exports = a
                }), null);
                __d("sdk.XFBML.Save", ["IframePlugin", "UrlMap", "sdk.Content", "sdk.createIframe", "sdk.DialogUtils", "sdk.DOM", "sdk.Event", "sdk.Runtime", "sdk.UA", "sdk.XD"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g;
                    a = b("IframePlugin").extend({
                        constructor: function(a, c, d, e) {
                            __p && __p();
                            var f = this;
                            this.parent(a, c, d, e);
                            var h = b("sdk.UA").mobile();
                            this.subscribe("xd.savePluginGetBlankIframe", function(a) {
                                __p && __p();
                                var c, d = function(a) {
                                        a && b("sdk.DOM").removeCss(a, "fb_invisible")
                                    },
                                    e = function(a) {
                                        a && b("sdk.DOM").addCss(a, "fb_invisible")
                                    };
                                h && (c = b("sdk.DialogUtils").setupNewDarkOverlay(), e(c), b("sdk.Content").append(c), b("sdk.DialogUtils").addDoubleClickAction(c, function() {
                                    return ES(j, "forEach", !0, e)
                                }, 5e3));
                                var i = f.setupNewIframeDialog(ES("JSON", "parse", !1, a.data), a.fromIframe);
                                e(i);
                                b("sdk.Content").append(i);
                                var j = [i, c],
                                    k = function() {
                                        ES(j, "forEach", !0, e), b("sdk.DialogUtils").onDialogHideCleanup(h), window.clearInterval(g)
                                    },
                                    l;
                                f.subscribe("xd.savePluginShowIframe", function() {
                                    b("sdk.Event").fire("savePlugin:hideDialog"), ES(j, "forEach", !0, d), f.positionOnScreen(i, c), !h && !l && (l = b("sdk.DialogUtils").addIdleDesktopAction(i, k, 7e3))
                                });
                                f.subscribe("xd.savePluginHideIframe", function() {
                                    return k()
                                });
                                b("sdk.Event").subscribe("savePlugin:hideDialog", function() {
                                    return k()
                                });
                                var m = window.setInterval(function() {
                                    var b = document.getElementsByName(a.fromIframe);
                                    b.length === 0 && (window.clearInterval(m), k(), ES(j, "forEach", !0, function(a) {
                                        a && a.parentNode.removeChild(a)
                                    }))
                                }, 500)
                            })
                        },
                        positionOnScreen: function(a, c) {
                            __p && __p();
                            var d = b("sdk.UA").mobile();
                            if (d) {
                                var e = function(a, c) {
                                    c != null && b("sdk.DialogUtils").setDialogPositionToCenter(c, d), b("sdk.DialogUtils").setDialogPositionToCenter(a, d)
                                };
                                e(a, c);
                                b("sdk.DialogUtils").addMobileOrientationChangeAction(function(b) {
                                    e(a, c)
                                });
                                g = window.setInterval(function() {
                                    return e(a, c)
                                }, 100)
                            } else b("sdk.DOM").setStyle(a, "position", "fixed"), b("sdk.DOM").setStyle(a, "top", "20px"), b("sdk.DOM").setStyle(a, "right", "20px")
                        },
                        getOverlayIFrameURL: function() {
                            return b("UrlMap").resolve("www") + (b("sdk.Runtime").getIsVersioned() ? "/" + b("sdk.Runtime").getVersion() : "") + "/plugins/save/overlay?app_id=" + b("sdk.Runtime").getClientID()
                        },
                        setupNewIframeDialog: function(a, c) {
                            __p && __p();
                            var d = this,
                                e = b("sdk.DialogUtils").setupNewDialog(),
                                f = function() {
                                    b("sdk.XD").sendToFacebook(c, {
                                        method: "saveOverlayIFrameAck",
                                        params: ES("JSON", "stringify", !1, {
                                            name: "overlay_" + d._iframeOptions.name
                                        })
                                    })
                                };
                            b("sdk.createIframe")({
                                url: this.getOverlayIFrameURL(),
                                name: "overlay_" + this._iframeOptions.name,
                                root: e.contentRoot,
                                tabindex: -1,
                                onload: ES(f, "bind", !0, this)
                            });
                            b("sdk.DOM").addCss(e.contentRoot, "fb_dialog_iframe");
                            ES("Object", "assign", !1, e.dialogElement.style, a.style || {});
                            b("sdk.DOM").setStyle(e.dialogElement, "width", a.width + "px");
                            b("sdk.DOM").setStyle(e.dialogElement, "height", a.height + "px");
                            ES(a.classList, "forEach", !0, function(a) {
                                return b("sdk.DOM").addCss(e.dialogElement, a)
                            });
                            b("sdk.DOM").removeCss(e.dialogElement, "fb_dialog_advanced");
                            return e.dialogElement
                        },
                        getParams: function() {
                            return {
                                uri: "url",
                                url_category: "string",
                                size: "string"
                            }
                        }
                    });
                    e.exports = a
                }), null);
                __d("sdk.XFBML.ShareButton", ["IframePlugin"], (function(a, b, c, d, e, f) {
                    "use strict";
                    a = b("IframePlugin").extend({
                        constructor: function(a, b, c, d) {
                            this.parent(a, b, c, d)
                        },
                        getParams: function() {
                            return {
                                href: "url",
                                layout: "string",
                                mobile_iframe: "bool",
                                type: "string",
                                size: "string"
                            }
                        }
                    });
                    e.exports = a
                }), null);
                __d("sdk.XFBML.Video", ["Assert", "IframePlugin", "ObservableMixin", "sdk.Event", "sdk.XD"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = function() {
                            "use strict";
                            __p && __p();

                            function a(a) {
                                this.$1 = a.isMuted, this.$2 = a.volume, this.$3 = a.timePosition, this.$4 = a.duration
                            }
                            var b = a.prototype;
                            b.update = function(a) {
                                a.isMuted !== void 0 && (this.$1 = a.isMuted), a.volume !== void 0 && (this.$2 = a.volume), a.timePosition !== void 0 && (this.$3 = a.timePosition), a.duration !== void 0 && (this.$4 = a.duration)
                            };
                            b.isMuted = function() {
                                return this.$1
                            };
                            b.getVolume = function() {
                                return this.$1 ? 0 : this.$2
                            };
                            b.getCurrentPosition = function() {
                                return this.$3
                            };
                            b.getDuration = function() {
                                return this.$4
                            };
                            return a
                        }(),
                        h = function() {
                            "use strict";
                            __p && __p();

                            function a(a, b, c) {
                                this.$1 = a, this.$2 = b, this.$3 = c
                            }
                            var c = a.prototype;
                            c.play = function() {
                                b("sdk.XD").sendToFacebook(this.$1, {
                                    method: "play",
                                    params: ES("JSON", "stringify", !1, {})
                                })
                            };
                            c.pause = function() {
                                b("sdk.XD").sendToFacebook(this.$1, {
                                    method: "pause",
                                    params: ES("JSON", "stringify", !1, {})
                                })
                            };
                            c.seek = function(a) {
                                b("Assert").isNumber(a, "Invalid argument"), b("sdk.XD").sendToFacebook(this.$1, {
                                    method: "seek",
                                    params: ES("JSON", "stringify", !1, {
                                        target: a
                                    })
                                })
                            };
                            c.mute = function() {
                                b("sdk.XD").sendToFacebook(this.$1, {
                                    method: "mute",
                                    params: ES("JSON", "stringify", !1, {})
                                })
                            };
                            c.unmute = function() {
                                b("sdk.XD").sendToFacebook(this.$1, {
                                    method: "unmute",
                                    params: ES("JSON", "stringify", !1, {})
                                })
                            };
                            c.setVolume = function(a) {
                                b("Assert").isNumber(a, "Invalid argument"), b("sdk.XD").sendToFacebook(this.$1, {
                                    method: "setVolume",
                                    params: ES("JSON", "stringify", !1, {
                                        volume: a
                                    })
                                })
                            };
                            c.isMuted = function() {
                                return this.$3.isMuted()
                            };
                            c.getVolume = function() {
                                return this.$3.getVolume()
                            };
                            c.getCurrentPosition = function() {
                                return this.$3.getCurrentPosition()
                            };
                            c.getDuration = function() {
                                return this.$3.getDuration()
                            };
                            c.subscribe = function(a, c) {
                                var d = this;
                                b("Assert").isString(a, "Invalid argument");
                                b("Assert").isFunction(c, "Invalid argument");
                                this.$2.subscribe(a, c);
                                return {
                                    release: function() {
                                        d.$2.unsubscribe(a, c)
                                    }
                                }
                            };
                            return a
                        }();
                    a = b("IframePlugin").extend({
                        constructor: function(a, c, d, e) {
                            this.parent(a, c, d, e), this._videoController = null, this._sharedObservable = null, this._sharedVideoCache = null, this.subscribe("xd.onVideoAPIReady", function(a) {
                                this._sharedObservable = new(b("ObservableMixin"))(), this._sharedVideoCache = new g(ES("JSON", "parse", !1, a.data)), this._videoController = new h(this._iframeOptions.name, this._sharedObservable, this._sharedVideoCache), b("sdk.Event").fire("xfbml.ready", {
                                    type: "video",
                                    id: e.id,
                                    instance: this._videoController
                                })
                            }), this.subscribe("xd.stateChange", function(a) {
                                this._sharedObservable.inform(a.state)
                            }), this.subscribe("xd.cachedStateUpdateRequest", function(a) {
                                this._sharedVideoCache.update(ES("JSON", "parse", !1, a.data))
                            })
                        },
                        getParams: function() {
                            return {
                                allowfullscreen: "bool",
                                autoplay: "bool",
                                controls: "bool",
                                href: "url",
                                show_captions: "bool",
                                show_text: "bool"
                            }
                        },
                        getConfig: function() {
                            return {
                                fluid: !0,
                                full_width: !0
                            }
                        }
                    });
                    e.exports = a
                }), null);
                __d("legacy:fb.xfbml.plugins", ["IframePlugin", "PluginConfig", "PluginTags", "XFBML", "sdk.feature", "sdk.XFBML.Comments", "sdk.XFBML.CommentsCount", "sdk.XFBML.LoginButton", "sdk.XFBML.Quote", "sdk.XFBML.Save", "sdk.XFBML.ShareButton", "sdk.XFBML.Video"], (function(a, b, c, d, e, f) {
                    var g = {
                            comments: b("sdk.XFBML.Comments"),
                            comments_count: b("sdk.XFBML.CommentsCount"),
                            login_button: b("sdk.XFBML.LoginButton"),
                            quote: b("sdk.XFBML.Quote"),
                            save: b("sdk.XFBML.Save"),
                            share_button: b("sdk.XFBML.ShareButton"),
                            video: b("sdk.XFBML.Video")
                        },
                        h = b("sdk.feature")("plugin_tags_blacklist", []);
                    ES(ES("Object", "keys", !1, b("PluginTags")), "forEach", !0, function(a) {
                        if (ES(h, "indexOf", !0, a) !== -1) return;
                        b("XFBML").registerTag({
                            xmlns: "fb",
                            localName: a.replace(/_/g, "-"),
                            ctor: b("IframePlugin").withParams(b("PluginTags")[a], b("PluginConfig")[a])
                        })
                    });
                    ES(ES("Object", "keys", !1, g), "forEach", !0, function(a) {
                        if (ES(h, "indexOf", !0, a) !== -1) return;
                        b("XFBML").registerTag({
                            xmlns: "fb",
                            localName: a.replace(/_/g, "-"),
                            ctor: g[a]
                        })
                    })
                }), 3);
            }
        }).call(global);
    })(window.inDapIF ? parent.window : window, window);
} catch (e) {
    new Image().src = "https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m=' + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","revision":"1001277952","namespace":"FB","message":"' + e.message + '"}}');
}