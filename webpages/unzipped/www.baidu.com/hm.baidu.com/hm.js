(function() {
    var h = {},
        mt = {},
        c = {
            id: "12423ecbc0e2ca965d84259063d35238",
            dm: ["m.baidu.com"],
            js: "tongji.baidu.com/hm-web/js/",
            etrk: [],
            cetrk: [],
            icon: '',
            ctrk: false,
            align: -1,
            nv: -1,
            vdur: 1800000,
            age: 31536000000,
            rec: 0,
            rp: [],
            trust: 0,
            vcard: 0,
            qiao: 0,
            lxb: 0,
            kbtrk: 0,
            pt: 0,
            spa: 0,
            aet: '',
            hca: '262035FF3608113D',
            conv: 0,
            med: 0,
            cvcc: '',
            cvcf: [],
            apps: ''
        };
    var r = void 0,
        s = !0,
        v = null,
        w = !1;
    mt.cookie = {};
    mt.cookie.set = function(b, a, e) {
        var d;
        e.L && (d = new Date, d.setTime(d.getTime() + e.L));
        document.cookie = b + "=" + a + (e.domain ? "; domain=" + e.domain : "") + (e.path ? "; path=" + e.path : "") + (d ? "; expires=" + d.toGMTString() : "") + (e.jc ? "; secure" : "")
    };
    mt.cookie.get = function(b) {
        return (b = RegExp("(^| )" + b + "=([^;]*)(;|$)").exec(document.cookie)) ? b[2] : v
    };
    mt.cookie.Gb = function(b, a) {
        try {
            var e = "Hm_ck_" + +new Date;
            mt.cookie.set(e, "is-cookie-enabled", {
                domain: b,
                path: a,
                L: r
            });
            var d = "is-cookie-enabled" === mt.cookie.get(e) ? "1" : "0";
            mt.cookie.set(e, "", {
                domain: b,
                path: a,
                L: -1
            });
            return d
        } catch (f) {
            return "0"
        }
    };
    mt.lang = {};
    mt.lang.d = function(b, a) {
        return "[object " + a + "]" === {}.toString.call(b)
    };
    mt.lang.ra = function(b) {
        return mt.lang.d(b, "Number") && isFinite(b)
    };
    mt.lang.aa = function(b) {
        return mt.lang.d(b, "String")
    };
    mt.lang.g = function(b) {
        return b.replace ? b.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : b
    };
    mt.lang.trim = function(b) {
        return b.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.J = function(b, a) {
        var e = w;
        if (b == v || !mt.lang.d(b, "Array") || a === r) return e;
        if (Array.prototype.indexOf) e = -1 !== b.indexOf(a);
        else
            for (var d = 0; d < b.length; d++)
                if (b[d] === a) {
                    e = s;
                    break
                } return e
    };
    (function() {
        var b = mt.lang;
        mt.f = {};
        mt.f.Ga = function(a) {
            return document.getElementById(a)
        };
        mt.f.mb = function(a) {
            if (!a) return v;
            try {
                a = String(a);
                if (0 === a.indexOf("!HMCC!")) return document.querySelector(a.substring(6, a.length));
                for (var b = a.split(">"), d = document.body, f = b.length - 1; 0 <= f; f--)
                    if (-1 < b[f].indexOf("#")) {
                        var g = b[f].split("#")[1];
                        (d = document.getElementById(g)) || (d = document.getElementById(decodeURIComponent(g)));
                        b = b.splice(f + 1, b.length - (f + 1));
                        break
                    }
                for (a = 0; d && a < b.length;) {
                    var m = String(b[a]).toLowerCase();
                    if (!("html" === m || "body" === m)) {
                        var f = 0,
                            l = b[a].match(/\[(\d+)\]/i),
                            g = [];
                        if (l) f = l[1] - 1, m = m.split("[")[0];
                        else if (1 !== d.childNodes.length) {
                            for (var p = 0, x = 0, t = d.childNodes.length; x < t; x++) {
                                var q = d.childNodes[x];
                                1 === q.nodeType && q.nodeName.toLowerCase() === m && p++;
                                if (1 < p) return v
                            }
                            if (1 !== p) return v
                        }
                        for (p = 0; p < d.childNodes.length; p++) 1 === d.childNodes[p].nodeType && d.childNodes[p].nodeName.toLowerCase() === m && g.push(d.childNodes[p]);
                        if (!g[f]) return v;
                        d = g[f]
                    }
                    a++
                }
                return d
            } catch (u) {
                return v
            }
        };
        mt.f.oa = function(a, b) {
            var d = [],
                f = [];
            if (!a) return f;
            for (; a.parentNode != v;) {
                for (var g = 0, m = 0, l = a.parentNode.childNodes.length, p = 0; p < l; p++) {
                    var x = a.parentNode.childNodes[p];
                    if (x.nodeName === a.nodeName && (g++, x === a && (m = g), 0 < m && 1 < g)) break
                }
                if ((l = "" !== a.id) && b) {
                    d.unshift("#" + encodeURIComponent(a.id));
                    break
                } else l && (l = "#" + encodeURIComponent(a.id), l = 0 < d.length ? l + ">" + d.join(">") : l, f.push(l)), d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < g ? "[" + m + "]" : ""));
                a = a.parentNode
            }
            f.push(d.join(">"));
            return f
        };
        mt.f.tb = function(a) {
            return (a =
                mt.f.oa(a, s)) && a.length ? String(a[0]) : ""
        };
        mt.f.rb = function(a) {
            return mt.f.oa(a, w)
        };
        mt.f.dc = function(a, b) {
            for (b = b.toUpperCase();
                (a = a.parentNode) && 1 == a.nodeType;)
                if (a.tagName == b) return a;
            return v
        };
        mt.f.lb = function(a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.f.ec = function(a) {
            var b = {
                top: 0,
                left: 0
            };
            if (!a) return b;
            var d = mt.f.lb(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
            return {
                top: b.top + (window.pageYOffset || d.scrollTop) - (d.clientTop || 0),
                left: b.left +
                    (window.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
            }
        };
        mt.f.getAttribute = function(a, b) {
            var d = a.getAttribute && a.getAttribute(b) || v;
            if (!d && a.attributes && a.attributes.length)
                for (var f = a.attributes, g = f.length, m = 0; m < g; m++) f[m].nodeName === b && (d = f[m].nodeValue);
            return d
        };
        mt.f.X = function(a) {
            var b = "document";
            a.tagName !== r && (b = a.tagName);
            return b.toLowerCase()
        };
        mt.f.vb = function(a) {
            var e = "";
            a.textContent ? e = b.trim(a.textContent) : a.innerText && (e = b.trim(a.innerText));
            e && (e = e.replace(/\s+/g, " ").substring(0, 255));
            return e
        };
        mt.f.Ha = function(a, e) {
            var d = mt.f.X(a);
            "input" === d && e && ("button" === a.type || "submit" === a.type) ? d = b.trim(a.value) || "" : "input" === d && !e && "password" !== a.type ? d = b.trim(a.value) || "" : "img" === d ? (d = mt.f.getAttribute, d = d(a, "alt") || d(a, "title") || d(a, "src")) : d = "body" === d || "html" === d ? ["(hm-default-content-for-", d, ")"].join("") : mt.f.vb(a);
            return String(d).substring(0, 255)
        };
        (function() {
            (mt.f.Jb = function() {
                function a() {
                    if (!a.$) {
                        a.$ = s;
                        for (var d = 0, b = f.length; d < b; d++) f[d]()
                    }
                }

                function b() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (d) {
                        setTimeout(b,
                            1);
                        return
                    }
                    a()
                }
                var d = w,
                    f = [],
                    g;
                document.addEventListener ? g = function() {
                    document.removeEventListener("DOMContentLoaded", g, w);
                    a()
                } : document.attachEvent && (g = function() {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", g), a())
                });
                (function() {
                    if (!d)
                        if (d = s, "complete" === document.readyState) a.$ = s;
                        else if (document.addEventListener) document.addEventListener("DOMContentLoaded", g, w), window.addEventListener("load", a, w);
                    else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange",
                            g);
                        window.attachEvent("onload", a);
                        var f = w;
                        try {
                            f = window.frameElement == v
                        } catch (l) {}
                        document.documentElement.doScroll && f && b()
                    }
                })();
                return function(d) {
                    a.$ ? d() : f.push(d)
                }
            }()).$ = w
        })();
        return mt.f
    })();
    mt.event = {};
    mt.event.e = function(b, a, e) {
        b.attachEvent ? b.attachEvent("on" + a, function(a) {
            e.call(b, a)
        }) : b.addEventListener && b.addEventListener(a, e, w)
    };
    mt.event.preventDefault = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = w
    };
    (function() {
        var b = mt.event;
        mt.h = {};
        mt.h.Ma = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.h.pb = function() {
            if (document.documentMode) return document.documentMode;
            var a = /msie (\d+\.\d+)/i.exec(navigator.userAgent);
            return a ? +a[1] || 0 : 0
        };
        mt.h.cookieEnabled = navigator.cookieEnabled;
        mt.h.javaEnabled = navigator.javaEnabled();
        mt.h.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.h.Mb = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.h.colorDepth =
            window.screen.colorDepth || 0;
        mt.h.Y = function() {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.h.O = function() {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.h.orientation = 0;
        (function() {
            function a() {
                var a = 0;
                window.orientation !== r && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== r) && (a = screen.orientation.angle);
                mt.h.orientation =
                    a
            }
            a();
            b.e(window, "orientationchange", a)
        })();
        return mt.h
    })();
    mt.o = {};
    mt.o.parse = function(b) {
        return (new Function("return (" + b + ")"))()
    };
    mt.o.stringify = function() {
        function b(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function(a) {
                var d = e[a];
                if (d) return d;
                d = a.charCodeAt();
                return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function a(a) {
            return 10 > a ? "0" + a : a
        }
        var e = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return function(d) {
            switch (typeof d) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "string":
                    return b(d);
                case "boolean":
                    return String(d);
                default:
                    if (d === v) return "null";
                    if (d instanceof Array) {
                        var f = ["["],
                            g = d.length,
                            e, l, p;
                        for (l = 0; l < g; l++) switch (p = d[l], typeof p) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                e && f.push(","), f.push(mt.o.stringify(p)), e = 1
                        }
                        f.push("]");
                        return f.join("")
                    }
                    if (d instanceof Date) return '"' + d.getFullYear() + "-" + a(d.getMonth() + 1) + "-" + a(d.getDate()) + "T" + a(d.getHours()) + ":" + a(d.getMinutes()) + ":" + a(d.getSeconds()) + '"';
                    e = ["{"];
                    l = mt.o.stringify;
                    for (g in d)
                        if (Object.prototype.hasOwnProperty.call(d, g)) switch (p =
                            d[g], typeof p) {
                            case "undefined":
                            case "unknown":
                            case "function":
                                break;
                            default:
                                f && e.push(","), f = 1, e.push(l(g) + ":" + l(p))
                        }
                    e.push("}");
                    return e.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.ea = function() {
        if (!mt.localStorage.l) try {
            mt.localStorage.l = document.createElement("input"), mt.localStorage.l.type = "hidden", mt.localStorage.l.style.display = "none", mt.localStorage.l.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)
        } catch (b) {
            return w
        }
        return s
    };
    mt.localStorage.set = function(b, a, e) {
        var d = new Date;
        d.setTime(d.getTime() + e || 31536E6);
        try {
            window.localStorage ? (a = d.getTime() + "|" + a, window.localStorage.setItem(b, a)) : mt.localStorage.ea() && (mt.localStorage.l.expires = d.toUTCString(), mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.setAttribute(b, a), mt.localStorage.l.save(document.location.hostname))
        } catch (f) {}
    };
    mt.localStorage.get = function(b) {
        if (window.localStorage) {
            if (b = window.localStorage.getItem(b)) {
                var a = b.indexOf("|"),
                    e = b.substring(0, a) - 0;
                if (e && e > (new Date).getTime()) return b.substring(a + 1)
            }
        } else if (mt.localStorage.ea()) try {
            return mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.getAttribute(b)
        } catch (d) {}
        return v
    };
    mt.localStorage.remove = function(b) {
        if (window.localStorage) window.localStorage.removeItem(b);
        else if (mt.localStorage.ea()) try {
            mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.removeAttribute(b), mt.localStorage.l.save(document.location.hostname)
        } catch (a) {}
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function(b, a) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(b, a)
        } catch (e) {}
    };
    mt.sessionStorage.get = function(b) {
        try {
            return window.sessionStorage ? window.sessionStorage.getItem(b) : v
        } catch (a) {
            return v
        }
    };
    mt.sessionStorage.remove = function(b) {
        try {
            window.sessionStorage && window.sessionStorage.removeItem(b)
        } catch (a) {}
    };
    mt.Sa = {};
    mt.Sa.log = function(b, a) {
        var e = new Image,
            d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[d] = e;
        e.onload = function() {
            e.onload = v;
            e = window[d] = v;
            a && a(b)
        };
        e.src = b
    };
    mt.xa = {};
    mt.xa.wb = function() {
        var b = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var a = navigator.plugins["Shockwave Flash"];
            a && a.description && (b = a.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b = a.GetVariable("$version")) && (b = b.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (e) {}
        return b
    };
    mt.xa.bc = function(b, a, e, d, f) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + b + '" width="' + e + '" height="' + d + '"><param name="movie" value="' + a + '" /><param name="flashvars" value="' + (f || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + b + '" width="' + e + '" height="' + d + '" src="' + a + '" flashvars="' + (f || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {};
    mt.url.m = function(b, a) {
        var e = b.match(RegExp("(^|&|\\?|#)(" + a + ")=([^&#]*)(&|$|#)", ""));
        return e ? e[3] : v
    };
    mt.url.fc = function(b) {
        return (b = b.match(/^(https?:)\/\//)) ? b[1] : v
    };
    mt.url.ob = function(b) {
        return (b = b.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? b[2].replace(/.*@/, "") : v
    };
    mt.url.N = function(b) {
        return (b = mt.url.ob(b)) ? b.replace(/:\d+$/, "") : b
    };
    mt.url.oa = function(b) {
        return (b = b.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? b[2].replace(/[\?#].*/, "").replace(/^$/, "/") : v
    };
    (function() {
        function b() {
            for (var a = w, b = document.getElementsByTagName("script"), d = b.length, d = 100 < d ? 100 : d, f = 0; f < d; f++) {
                var g = b[f].src;
                if (g && 0 === g.indexOf("https://hm.baidu.com/h")) {
                    a = s;
                    break
                }
            }
            return a
        }
        return h.jb = b
    })();
    var A = h.jb;
    h.A = {
        gc: "http://tongji.baidu.com/hm-web/welcome/ico",
        Pa: "hm.baidu.com/hm.gif",
        Za: /^(tongji|hmcdn).baidu.com$/,
        Ua: "tongji.baidu.com",
        Ab: "hmmd",
        Bb: "hmpl",
        Wb: "utm_medium",
        zb: "hmkw",
        Yb: "utm_term",
        xb: "hmci",
        Vb: "utm_content",
        Cb: "hmsr",
        Xb: "utm_source",
        yb: "hmcu",
        Ub: "utm_campaign",
        K: 0,
        G: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        sa: A() || "https:" === document.location.protocol ? "https:" : "http:",
        hc: 0,
        $b: 6E5,
        Hb: 6E5,
        ic: 5E3,
        ac: 5,
        ia: 1024,
        Zb: 1,
        ta: 2147483647,
        Ta: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt hh".split(" "),
        P: s,
        Da: ["a", "input", "button"],
        ab: {
            id: "data-hm-id",
            ha: "data-hm-class",
            Aa: "data-hm-xpath",
            content: "data-hm-content",
            ya: "data-hm-tag",
            link: "data-hm-link"
        },
        Ca: "data-hm-enabled",
        Ba: "data-hm-disabled",
        Ib: "https://hmcdn.baidu.com/static/tongji/plugins/",
        Oa: ["UrlChangeTracker"]
    };
    (function() {
        var b = {
            B: {},
            e: function(a, b) {
                this.B[a] = this.B[a] || [];
                this.B[a].push(b)
            },
            H: function(a, b) {
                this.B[a] = this.B[a] || [];
                for (var d = this.B[a].length, f = 0; f < d; f++) this.B[a][f](b)
            }
        };
        return h.I = b
    })();
    (function() {
        function b(b, d) {
            var f = document.createElement("script");
            f.charset = "utf-8";
            a.d(d, "Function") && (f.readyState ? f.onreadystatechange = function() {
                if ("loaded" === f.readyState || "complete" === f.readyState) f.onreadystatechange = v, d()
            } : f.onload = function() {
                d()
            });
            f.src = b;
            var g = document.getElementsByTagName("script")[0];
            g.parentNode.insertBefore(f, g)
        }
        var a = mt.lang;
        return h.load = b
    })();
    (function() {
        var b = mt.cookie,
            a = mt.localStorage,
            e = mt.sessionStorage,
            d = {
                getData: function(d) {
                    try {
                        return b.get(d) || e.get(d) || a.get(d)
                    } catch (g) {}
                },
                setData: function(f, g, m) {
                    try {
                        b.set(f, g, {
                            domain: d.M(),
                            path: d.W(),
                            L: m
                        }), m ? a.set(f, g, m) : e.set(f, g)
                    } catch (l) {}
                },
                Lb: function(f) {
                    try {
                        b.set(f, "", {
                            domain: d.M(),
                            path: d.W(),
                            L: -1
                        }), e.remove(f), a.remove(f)
                    } catch (g) {}
                },
                Q: function(a, d) {
                    a = "." + a.replace(/:\d+/, "");
                    d = "." + d.replace(/:\d+/, "");
                    var b = a.indexOf(d);
                    return -1 < b && b + d.length === a.length
                },
                ba: function(a, d) {
                    a = a.replace(/^https?:\/\//,
                        "");
                    return 0 === a.indexOf(d)
                },
                M: function() {
                    for (var a = document.location.hostname, b = 0, e = c.dm.length; b < e; b++)
                        if (d.Q(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                    return a
                },
                W: function() {
                    for (var a = 0, b = c.dm.length; a < b; a++) {
                        var e = c.dm[a];
                        if (-1 < e.indexOf("/") && d.ba(document.location.href, e)) return e.replace(/^[^/]+(\/.*)/, "$1") + "/"
                    }
                    return "/"
                }
            };
        return h.ka = d
    })();
    (function() {
        var b = mt.lang,
            a = mt.o,
            e = h.ka,
            d = {
                pageview: {},
                session: {},
                autoEventTracking: {},
                customEvent: {},
                user: {}
            },
            f = {
                user: 1,
                session: 2,
                pageview: 3,
                autoEventTracking: 3,
                customEvent: 3,
                others: 3
            },
            g = ["session", "user"],
            m = "Hm_up_" + c.id,
            l = {
                init: function() {
                    l.Eb()
                },
                Eb: function() {
                    try {
                        var f = a.parse(decodeURIComponent(e.getData(m)));
                        b.d(f, "Object") && (d.user = f)
                    } catch (g) {}
                },
                C: function(a) {
                    var b = {};
                    d[a] !== r && (b = d[a]);
                    a = this.pa();
                    for (var f in b) b.hasOwnProperty(f) && (a[f] = b[f]);
                    return a
                },
                pa: function() {
                    for (var a = {}, b, f = g.length -
                            1; 0 <= f; f--) {
                        b = d[g[f]];
                        for (var e in b) b.hasOwnProperty(e) && (a[e] = b[e])
                    }
                    return a
                },
                setProperty: function(f, e, g) {
                    var q = d[f];
                    if (b.d(q, "Object") && b.d(e, "Object")) {
                        for (var m in e)
                            if (e.hasOwnProperty(m)) {
                                var k = b.g(String(m));
                                if (g || !((/^_/.test(k) || /_$/.test(k)) && "_iden" !== k)) {
                                    var n = e[m];
                                    if (n == v) delete q[k];
                                    else {
                                        if (b.d(n, "Object") || b.d(n, "Array")) n = a.stringify(n);
                                        n = b.g(String(n));
                                        l.Fb(f, k, n) && (q[k] = {
                                            value: n,
                                            scope: l.Ja(f)
                                        })
                                    }
                                }
                            }
                        "user" === f && l.va()
                    }
                },
                s: function(a) {
                    a !== r && ("userId" === a && b.d(d.user, "Object") ? (delete d.user.uid_,
                        l.va()) : "user" === a && b.d(d.user, "Object") ? (a = d.user.uid_, d.user = a === r ? {} : {
                        uid_: a
                    }, l.va()) : d[a] !== r && (d[a] = {}))
                },
                va: function() {
                    try {
                        e.setData(m, encodeURIComponent(a.stringify(d.user)), c.age)
                    } catch (b) {}
                },
                Fb: function(a, b, f) {
                    var e = s,
                        g = d[a];
                    if (256 < encodeURIComponent(String(b)).length || 256 < encodeURIComponent(String(f)).length) e = w;
                    else {
                        var k = g[b];
                        g[b] = {
                            value: f,
                            scope: l.Ja(a)
                        };
                        a = l.T(l.C(a));
                        2048 < encodeURIComponent(a).length && (k !== r ? g[b] = k : delete g[b], e = w)
                    }
                    return e
                },
                T: function(a) {
                    var b = [],
                        d, f;
                    for (f in a) a.hasOwnProperty(f) &&
                        (d = [f, a[f].value], (1 === a[f].scope || 2 === a[f].scope) && d.push(a[f].scope), b.push(d.join("*")));
                    return b.join("!")
                },
                Ja: function(a) {
                    a = f[a];
                    return a !== r ? a : f.others
                }
            };
        return h.V = l
    })();
    (function() {
        var b = mt.lang,
            a = mt.f,
            e = {
                U: function(b, f) {
                    return function(g) {
                        var m = g.target || g.srcElement;
                        if (m) {
                            var l = m.getAttribute(b.da);
                            g = g.clientX + ":" + g.clientY;
                            if (l && l === g) m.removeAttribute(b.da);
                            else if (f && 0 < f.length && (m = a.rb(m)) && m.length)
                                if (l = m.length, g = m[m.length - 1], 1E4 > l * g.split(">").length)
                                    for (g = 0; g < l; g++) e.Ra(b, m[g]);
                                else e.Ra(b, g)
                        }
                    }
                },
                Ra: function(a, f) {
                    for (var e = {}, m = String(f).split(">").length, l = 0; l < m; l++) e[f] = "", f = f.substring(0, f.lastIndexOf(">"));
                    a && (b.d(a, "Object") && a.Ea) && a.Ea(e)
                },
                Kb: function(a,
                    b) {
                    return function(e) {
                        (e.target || e.srcElement).setAttribute(a.da, e.clientX + ":" + e.clientY);
                        a && a.r && (b ? a.r(b) : a.r("#" + encodeURIComponent(this.id), e.type))
                    }
                }
            };
        return h.ma = e
    })();
    (function() {
        var b = mt.f,
            a = mt.o,
            e = mt.event,
            d = mt.lang,
            f = h.ma,
            g = h.V,
            m = g.T,
            l = {
                da: "HM_ce",
                Va: function() {
                    if (c.cetrk && c.cetrk.length) {
                        e.e(document, "click", f.U(l, c.cetrk));
                        for (var d = 0, g = c.cetrk.length; d < g; d++) {
                            var m;
                            try {
                                m = a.parse(decodeURIComponent(String(c.cetrk[d])))
                            } catch (q) {
                                m = {}
                            }
                            var u = m.p || ""; - 1 === u.indexOf(">") && (0 === u.indexOf("#") && (u = u.substring(1)), (u = b.Ga(u)) && e.e(u, "click", f.Kb(l, m)))
                        }
                    }
                },
                Ea: function(b) {
                    if (c.cetrk && c.cetrk.length)
                        for (var d = 0, f = c.cetrk.length; d < f; d++) {
                            var e;
                            try {
                                e = a.parse(decodeURIComponent(String(c.cetrk[d])))
                            } catch (g) {
                                e = {}
                            }
                            b.hasOwnProperty(e.p) && l.r(e)
                        }
                },
                r: function(a) {
                    h.c.b.et = 7;
                    var f = a && a.k || "",
                        f = d.g(f),
                        e = {};
                    if (a && a.a && d.d(a.a, "Object"))
                        for (var l in a.a)
                            if (a.a.hasOwnProperty(l)) {
                                var u = b.mb(a.a[l] || ""),
                                    u = u ? b.Ha(u, w) : "";
                                e[l] = u
                            }
                    e._iden = f;
                    g.setProperty("customEvent", e);
                    h.c.b.ep = "";
                    h.c.b.p = m(g.C("customEvent"));
                    h.c.i();
                    h.c.b.p = "";
                    g.s("customEvent")
                }
            };
        h.I.e("pv-b", l.Va);
        return l
    })();
    (function() {
        var b = mt.lang,
            a = mt.f,
            e = mt.event,
            d = mt.h,
            f = h.A,
            g = h.I,
            m = h.V,
            l = m.T,
            p = +new Date,
            x = [],
            t = {
                U: function() {
                    return function(d) {
                        if (h.c && h.c.P && c.aet && c.aet.length) {
                            var e = d.target || d.srcElement;
                            if (e) {
                                var k = h.c.Da,
                                    n = a.getAttribute(e, f.Ca) != v ? s : w;
                                if (a.getAttribute(e, f.Ba) == v)
                                    if (n) t.fa(t.na(e, d));
                                    else {
                                        var z = a.X(e);
                                        if (b.J(k, "*") || b.J(k, z)) t.fa(t.na(e, d));
                                        else
                                            for (; e.parentNode != v;) {
                                                var n = e.parentNode,
                                                    z = a.X(n),
                                                    y = "a" === z && b.J(k, "a") ? s : w,
                                                    z = "button" === z && b.J(k, "button") ? s : w,
                                                    B = a.getAttribute(n, f.Ca) != v ? s : w;
                                                if (a.getAttribute(n, f.Ba) == v && (y || z || B)) {
                                                    t.fa(t.na(n, d));
                                                    break
                                                }
                                                e = e.parentNode
                                            }
                                    }
                            }
                        }
                    }
                },
                na: function(e, g) {
                    var k = {},
                        n = f.ab;
                    k.id = a.getAttribute(e, n.id) || a.getAttribute(e, "id") || "";
                    k.ha = a.getAttribute(e, n.ha) || a.getAttribute(e, "class") || "";
                    k.Aa = a.getAttribute(e, n.Aa) || a.tb(e);
                    k.content = a.getAttribute(e, n.content) || a.Ha(e, s);
                    k.ya = a.getAttribute(e, n.ya) || a.X(e);
                    k.link = a.getAttribute(e, n.link) || a.getAttribute(e, "href") || "";
                    k.type = g.type || "click";
                    n = b.ra(e.offsetTop) ? e.offsetTop : 0;
                    "click" === g.type ? n = d.Ma ? g.clientY +
                        Math.max(document.documentElement.scrollTop, document.body.scrollTop) : g.pageY : "touchend" === g.type && (g.ua && b.d(g.ua.changedTouches, "Array") && g.ua.changedTouches.length) && (n = g.ua.changedTouches[0].pageY);
                    k.Tb = n;
                    return k
                },
                fa: function(a) {
                    var d = b.g;
                    a = [+new Date - (h.c.D !== r ? h.c.D : p), d(a.id), d(a.ha), d(a.ya), d(a.Aa), d(a.link), d(a.content), a.type, a.Tb].join("*");
                    t.ga(a);
                    b.d(this.S(), "Function") && this.S()()
                },
                ga: function(a) {
                    a.length > f.ia || (encodeURIComponent(x.join("!") + a).length > f.ia && (t.r(x.join("!")), x = []),
                        x.push(a))
                },
                r: function(a) {
                    h.c.b.et = 5;
                    h.c.b.ep = a;
                    h.c.b.p = l(m.C("autoEventTracking"));
                    h.c.i();
                    h.c.b.p = ""
                },
                S: function() {
                    return function() {
                        x && x.length && (t.r(x.join("!")), x = [])
                    }
                }
            };
        b.aa(c.aet) && "" !== c.aet && g.e("pv-b", function() {
            e.e(document, "click", t.U());
            "ontouchend" in document && e.e(window, "touchend", t.U());
            e.e(window, "unload", t.S())
        });
        return t
    })();
    (function() {
        var b = mt.event,
            a = mt.h,
            e = h.A,
            d = h.I,
            f = +new Date,
            g = [],
            m = v,
            l = {
                gb: function() {
                    return function() {
                        h.c && (h.c.P && c.aet && c.aet.length) && (window.clearTimeout(m), m = window.setTimeout(function() {
                            l.Xa(a.Y() + a.O())
                        }, 150))
                    }
                },
                Xa: function(a) {
                    l.ga([+new Date - (h.c.D !== r ? h.c.D : f), a].join("*"))
                },
                ga: function(a) {
                    if (encodeURIComponent(g.join("!") + a).length > e.ia || 3 < g.length) l.r(g.join("!")), g = [];
                    g.push(a)
                },
                r: function(b) {
                    h.c.b.et = 6;
                    h.c.b.vh = a.O();
                    h.c.b.ep = b;
                    h.c.i()
                },
                S: function() {
                    return function() {
                        g && g.length && (l.r(g.join("!")),
                            g = [])
                    }
                }
            };
        mt.lang.aa(c.aet) && "" !== c.aet && d.e("pv-b", function() {
            b.e(window, "scroll", l.gb());
            b.e(window, "unload", l.S())
        });
        return l
    })();
    (function() {
        function b() {
            return function() {
                h.c.b.nv = 0;
                h.c.b.st = 4;
                h.c.b.et = 3;
                h.c.b.ep = h.la.qb() + "," + h.la.nb();
                h.c.i()
            }
        }

        function a() {
            clearTimeout(y);
            var b;
            n && (b = "visible" == document[n]);
            z && (b = !document[z]);
            l = "undefined" == typeof b ? s : b;
            if ((!m || !p) && l && x) k = s, q = +new Date;
            else if (m && p && (!l || !x)) k = w, u += +new Date - q;
            m = l;
            p = x;
            y = setTimeout(a, 100)
        }

        function e(a) {
            var n = document,
                b = "";
            if (a in n) b = a;
            else
                for (var d = ["webkit", "ms", "moz", "o"], y = 0; y < d.length; y++) {
                    var e = d[y] + a.charAt(0).toUpperCase() + a.slice(1);
                    if (e in n) {
                        b =
                            e;
                        break
                    }
                }
            return b
        }

        function d(n) {
            if (!("focus" == n.type || "blur" == n.type) || !(n.target && n.target != window)) x = "focus" == n.type || "focusin" == n.type ? s : w, a()
        }
        var f = mt.event,
            g = h.I,
            m = s,
            l = s,
            p = s,
            x = s,
            t = +new Date,
            q = t,
            u = 0,
            k = s,
            n = e("visibilityState"),
            z = e("hidden"),
            y;
        a();
        (function() {
            var b = n.replace(/[vV]isibilityState/, "visibilitychange");
            f.e(document, b, a);
            f.e(window, "pageshow", a);
            f.e(window, "pagehide", a);
            "object" == typeof document.onfocusin ? (f.e(document, "focusin", d), f.e(document, "focusout", d)) : (f.e(window, "focus", d),
                f.e(window, "blur", d))
        })();
        h.la = {
            qb: function() {
                return +new Date - t
            },
            nb: function() {
                return k ? +new Date - q + u : u
            }
        };
        g.e("pv-b", function() {
            f.e(window, "unload", b())
        });
        g.e("duration-send", b());
        g.e("duration-done", function() {
            q = t = +new Date;
            u = 0
        });
        return h.la
    })();
    (function() {
        var b = mt.lang,
            a = h.A,
            e = h.load,
            d = {
                Db: function(d) {
                    if ((window._dxt === r || b.d(window._dxt, "Array")) && "undefined" !== typeof h.c) {
                        var g = h.c.M();
                        e([a.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(g)].join(""), d)
                    }
                },
                Sb: function(a) {
                    if (b.d(a, "String") || b.d(a, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", a])
                }
            };
        return h.eb = d
    })();
    (function() {
        function b(a, b, d, e) {
            if (!(a === r || b === r || e === r)) {
                if ("" === a) return [b, d, e].join("*");
                a = String(a).split("!");
                for (var f, g = w, k = 0; k < a.length; k++)
                    if (f = a[k].split("*"), String(b) === f[0]) {
                        f[1] = d;
                        f[2] = e;
                        a[k] = f.join("*");
                        g = s;
                        break
                    }
                g || a.push([b, d, e].join("*"));
                return a.join("!")
            }
        }

        function a(b) {
            for (var e in b)
                if ({}.hasOwnProperty.call(b, e)) {
                    var y = b[e];
                    d.d(y, "Object") || d.d(y, "Array") ? a(y) : b[e] = String(y)
                }
        }
        var e = mt.url,
            d = mt.lang,
            f = mt.o,
            g = mt.h,
            m = h.A,
            l = h.I,
            p = h.eb,
            x = h.load,
            t = h.ka,
            q = h.V,
            u = q.T,
            k = {
                R: [],
                ca: 0,
                Na: w,
                z: {
                    za: "",
                    page: ""
                },
                init: function() {
                    k.j = 0;
                    q.init();
                    l.e("pv-b", function() {
                        k.fb();
                        k.hb()
                    });
                    l.e("pv-d", function() {
                        k.ib();
                        k.z.page = ""
                    });
                    l.e("stag-b", function() {
                        h.c.b.api = k.j || k.ca ? k.j + "_" + k.ca : "";
                        h.c.b.ct = [decodeURIComponent(t.getData("Hm_ct_" + c.id) || ""), k.z.za, k.z.page].join("!")
                    });
                    l.e("stag-d", function() {
                        h.c.b.api = 0;
                        k.j = 0;
                        k.ca = 0
                    })
                },
                fb: function() {
                    var a = window._hmt || [];
                    if (!a || d.d(a, "Array")) window._hmt = {
                        id: c.id,
                        cmd: {},
                        push: function() {
                            for (var a = window._hmt, b = 0; b < arguments.length; b++) {
                                var n = arguments[b];
                                d.d(n, "Array") && (a.cmd[a.id].push(n), "_setAccount" === n[0] && (1 < n.length && /^[0-9a-f]{32}$/.test(n[1])) && (n = n[1], a.id = n, a.cmd[n] = a.cmd[n] || []))
                            }
                        }
                    }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
                },
                hb: function() {
                    var a = window._hmt;
                    if (a && a.cmd && a.cmd[c.id])
                        for (var b = a.cmd[c.id], d = /^_track(Event|MobConv|Order|RTEvent)$/, e = 0, f = b.length; e < f; e++) {
                            var g = b[e];
                            d.test(g[0]) ? k.R.push(g) : k.wa(g)
                        }
                    a.cmd[c.id] = {
                        push: k.wa
                    }
                },
                ib: function() {
                    if (0 < k.R.length)
                        for (var a = 0, b = k.R.length; a < b; a++) k.wa(k.R[a]);
                    k.R =
                        v
                },
                wa: function(a) {
                    var b = a[0];
                    if (k.hasOwnProperty(b) && d.d(k[b], "Function")) k[b](a)
                },
                _setAccount: function(a) {
                    1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (k.j |= 1)
                },
                _setAutoPageview: function(a) {
                    if (1 < a.length && (a = a[1], w === a || s === a)) k.j |= 2, h.c.Ka = a
                },
                _trackPageview: function(a) {
                    if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
                        k.j |= 4;
                        h.c.b.sn = h.c.Ia();
                        h.c.b.et = 0;
                        h.c.b.ep = "";
                        h.c.b.vl = g.Y() + g.O();
                        h.c.b.kb = 0;
                        h.c.qa ? (h.c.b.nv = 0, h.c.b.st = 4) : h.c.qa = s;
                        var b = h.c.b.u,
                            d = h.c.b.su;
                        h.c.b.u = m.protocol + "//" + document.location.host +
                            a[1];
                        k.Na || (h.c.b.su = document.location.href);
                        h.c.b.p = u(q.C("pageview"));
                        h.c.i();
                        h.c.b.u = b;
                        h.c.b.su = d;
                        h.c.b.p = "";
                        h.c.D = +new Date;
                        q.s("pageview")
                    }
                },
                _trackEvent: function(a) {
                    2 < a.length && (k.j |= 8, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 4, h.c.b.ep = d.g(a[1]) + "*" + d.g(a[2]) + (a[3] ? "*" + d.g(a[3]) : "") + (a[4] ? "*" + d.g(a[4]) : ""), h.c.b.p = u(q.pa()), h.c.i(), h.c.b.p = "")
                },
                _setCustomVar: function(a) {
                    if (!(4 > a.length)) {
                        var b = a[1],
                            e = a[4] || 3;
                        if (0 < b && 6 > b && 0 < e && 4 > e) {
                            k.ca++;
                            for (var f = (h.c.b.cv || "*").split("!"), g = f.length; g < b - 1; g++) f.push("*");
                            f[b - 1] = e + "*" + d.g(a[2]) + "*" + d.g(a[3]);
                            h.c.b.cv = f.join("!");
                            a = h.c.b.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                            "" !== a ? t.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : t.Lb("Hm_cv_" + c.id)
                        }
                    }
                },
                _setUserTag: function(a) {
                    if (!(3 > a.length)) {
                        var e = d.g(a[1]);
                        a = d.g(a[2]);
                        if (e !== r && a !== r) {
                            var y = decodeURIComponent(t.getData("Hm_ct_" + c.id) || ""),
                                y = b(y, e, 1, a);
                            t.setData("Hm_ct_" + c.id, encodeURIComponent(y), c.age)
                        }
                    }
                },
                _setVisitTag: function(a) {
                    if (!(3 > a.length)) {
                        var e = d.g(a[1]);
                        a = d.g(a[2]);
                        if (e !==
                            r && a !== r) {
                            var y = k.z.za,
                                y = b(y, e, 2, a);
                            k.z.za = y
                        }
                    }
                },
                _setPageTag: function(a) {
                    if (!(3 > a.length)) {
                        var e = d.g(a[1]);
                        a = d.g(a[2]);
                        if (e !== r && a !== r) {
                            var y = k.z.page,
                                y = b(y, e, 3, a);
                            k.z.page = y
                        }
                    }
                },
                _setReferrerOverride: function(a) {
                    1 < a.length && (h.c.b.su = a[1].charAt && "/" === a[1].charAt(0) ? m.protocol + "//" + window.location.host + a[1] : a[1], k.Na = s)
                },
                _trackOrder: function(b) {
                    b = b[1];
                    d.d(b, "Object") && (a(b), k.j |= 16, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 94, h.c.b.ep = f.stringify(b), h.c.b.p = u(q.pa()), h.c.i(), h.c.b.p = "")
                },
                _trackMobConv: function(a) {
                    if (a = {
                            webim: 1,
                            tel: 2,
                            map: 3,
                            sms: 4,
                            callback: 5,
                            share: 6
                        }[a[1]]) k.j |= 32, h.c.b.et = 93, h.c.b.ep = a, h.c.i()
                },
                _setDataxId: function(a) {
                    a = a[1];
                    p.Db();
                    p.Sb(a)
                },
                _setUserId: function(a) {
                    a = a[1];
                    if (a !== r && (d.aa(a) || d.ra(a))) {
                        var b = q.C("user").uid_;
                        if (!(b && b.value === d.g(String(a)))) {
                            var b = h.c.b.p,
                                e = h.c.b.ep;
                            h.c.b.et = 8;
                            h.c.b.ep = "";
                            h.c.b.p = "uid_*" + d.g(String(a));
                            h.c.i();
                            var f = {};
                            f.uid_ = a;
                            q.setProperty("user", f, s);
                            h.c.b.p = b;
                            h.c.b.ep = e
                        }
                    }
                },
                _clearUserId: function(a) {
                    1 < a.length && s === a[1] && q.s("userId")
                },
                _setUserProperty: function(a) {
                    a =
                        a[1];
                    d.d(a, "Object") && q.setProperty("user", a)
                },
                _clearUserProperty: function(a) {
                    1 < a.length && s === a[1] && q.s("user")
                },
                _setSessionProperty: function(a) {
                    a = a[1];
                    d.d(a, "Object") && q.setProperty("session", a)
                },
                _clearSessionProperty: function(a) {
                    1 < a.length && s === a[1] && q.s("session")
                },
                _setPageviewProperty: function(a) {
                    a = a[1];
                    d.d(a, "Object") && q.setProperty("pageview", a)
                },
                _clearPageviewProperty: function(a) {
                    1 < a.length && s === a[1] && q.s("pageview")
                },
                _setAutoEventTrackingProperty: function(a) {
                    a = a[1];
                    d.d(a, "Object") && q.setProperty("autoEventTracking",
                        a)
                },
                _clearAutoEventTrackingProperty: function(a) {
                    1 < a.length && s === a[1] && q.s("autoEventTracking")
                },
                _setAutoTracking: function(a) {
                    if (1 < a.length && (a = a[1], w === a || s === a)) h.c.La = a
                },
                _setAutoEventTracking: function(a) {
                    if (1 < a.length && (a = a[1], w === a || s === a)) h.c.P = a
                },
                _trackPageDuration: function(a) {
                    1 < a.length ? (a = a[1], 2 === String(a).split(",").length && (h.c.b.et = 3, h.c.b.ep = a, h.c.i())) : l.H("duration-send");
                    l.H("duration-done")
                },
                _require: function(a) {
                    1 < a.length && (a = a[1], m.Za.test(e.N(a)) && x(a))
                },
                _providePlugin: function(a) {
                    if (1 <
                        a.length) {
                        var b = window._hmt,
                            e = a[1];
                        a = a[2];
                        if (d.J(m.Oa, e) && d.d(a, "Function") && (b.plugins = b.plugins || {}, b.F = b.F || {}, b.plugins[e] = a, b.w = b.w || [], a = b.w.slice(), e && a.length && a[0][1] === e))
                            for (var f = 0, g = a.length; f < g; f++) {
                                var k = a[f][2] || {};
                                if (b.plugins[e] && !b.F[e]) b.F[e] = new b.plugins[e](k), b.w.shift();
                                else break
                            }
                    }
                },
                _requirePlugin: function(a) {
                    if (1 < a.length) {
                        var b = window._hmt,
                            e = a[1],
                            f = a[2] || {};
                        if (d.J(m.Oa, e))
                            if (b.plugins = b.plugins || {}, b.F = b.F || {}, b.plugins[e] && !b.F[e]) b.F[e] = new b.plugins[e](f);
                            else {
                                b.w = b.w || [];
                                for (var f = 0, g = b.w.length; f < g; f++)
                                    if (b.w[f][1] === e) return;
                                b.w.push(a);
                                k._require([v, m.Ib + e + ".js"])
                            }
                    }
                },
                _trackCustomEvent: function(a) {
                    if (1 < a.length) {
                        var b = a[1];
                        a = a[2];
                        d.d(a, "Object") && (a._iden = b, q.setProperty("customEvent", a));
                        h.c.b.et = 7;
                        h.c.b.ep = "";
                        h.c.b.p = u(q.C("customEvent"));
                        h.c.i();
                        h.c.b.p = "";
                        q.s("customEvent")
                    }
                }
            };
        k.init();
        h.$a = k;
        return h.$a
    })();
    (function() {
        function b() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = s, this.b = {}, this.La = this.Ka = s, this.P = k.P, this.Da = f.aa(c.aet) && 0 < c.aet.length ? c.aet.split(",") : "", this.qa = w, this.init())
        }
        var a = mt.url,
            e = mt.Sa,
            d = mt.xa,
            f = mt.lang,
            g = mt.cookie,
            m = mt.h,
            l = mt.sessionStorage,
            p = mt.o,
            x = mt.event,
            t = h.ka,
            q = h.V,
            u = q.T,
            k = h.A,
            n = h.load,
            z = h.I;
        b.prototype = {
            Q: function(a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            },
            ba: function(a,
                b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            },
            Z: function(b) {
                for (var d = 0; d < c.dm.length; d++)
                    if (-1 < c.dm[d].indexOf("/")) {
                        if (this.ba(b, c.dm[d])) return s
                    } else {
                        var e = a.N(b);
                        if (e && this.Q(e, c.dm[d])) return s
                    }
                return w
            },
            M: function() {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)
                    if (this.Q(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            },
            W: function() {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.ba(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/,
                        "$1") + "/"
                }
                return "/"
            },
            ub: function() {
                if (!document.referrer) return k.G - k.K > c.vdur ? 1 : 4;
                var b = w;
                this.Z(document.referrer) && this.Z(document.location.href) ? b = s : (b = a.N(document.referrer), b = this.Q(b || "", document.location.hostname));
                return b ? k.G - k.K > c.vdur ? 1 : 4 : 3
            },
            Qb: function() {
                var a, b, d, e, f;
                k.K = t.getData("Hm_lpvt_" + c.id) || 0;
                13 === k.K.length && (k.K = Math.round(k.K / 1E3));
                b = this.ub();
                a = 4 !== b ? 1 : 0;
                if (d = t.getData("Hm_lvt_" + c.id)) {
                    e = d.split(",");
                    for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
                    for (; 2592E3 < k.G - e[0];) e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(k.G); 4 < e.length;) e.shift();
                    d = e.join(",");
                    e = e[e.length - 1]
                } else d = k.G, e = "", f = 1;
                t.setData("Hm_lvt_" + c.id, d, c.age);
                t.setData("Hm_lpvt_" + c.id, k.G);
                d = g.Gb(this.M(), this.W());
                if (0 === c.nv && this.Z(document.location.href) && ("" === document.referrer || this.Z(document.referrer))) a = 0, b = 4;
                this.b.nv = a;
                this.b.st = b;
                this.b.cc = d;
                this.b.lt = e;
                this.b.lv = f
            },
            Pb: function() {
                for (var a = [], b = this.b.et, d = +new Date, e = 0, f = k.Ta.length; e < f; e++) {
                    var g = k.Ta[e],
                        m = this.b[g];
                    "undefined" !== typeof m && "" !== m && ("tt" !== g || "tt" === g && 0 === b) && (("ct" !== g || "ct" === g && 0 === b) && ("kb" !== g || "kb" === g && 3 === b)) && a.push(g + "=" + encodeURIComponent(m))
                }
                switch (b) {
                    case 0:
                        this.b.rt && a.push("rt=" + encodeURIComponent(this.b.rt));
                        break;
                    case 5:
                        a.push("_lpt=" + this.D);
                        a.push("_ct=" + d);
                        break;
                    case 6:
                        a.push("_lpt=" + this.D);
                        a.push("_ct=" + d);
                        break;
                    case 90:
                        this.b.rt && a.push("rt=" + this.b.rt)
                }
                return a.join("&")
            },
            Rb: function() {
                this.Qb();
                this.b.si = c.id;
                this.b.sn = this.Ia();
                this.b.su = document.referrer;
                this.b.hh =
                    window.location.hash;
                this.b.ds = m.Mb;
                this.b.cl = m.colorDepth + "-bit";
                this.b.ln = String(m.language).toLowerCase();
                this.b.ja = m.javaEnabled ? 1 : 0;
                this.b.ck = m.cookieEnabled ? 1 : 0;
                this.b.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.b.fl = d.wb();
                this.b.v = "1.2.61";
                this.b.cv = decodeURIComponent(t.getData("Hm_cv_" + c.id) || "");
                this.b.tt = document.title || "";
                this.b.vl = m.Y() + m.O();
                var b = document.location.href;
                this.b.cm = a.m(b, k.Ab) || "";
                this.b.cp = a.m(b, k.Bb) || a.m(b, k.Wb) || "";
                this.b.cw = a.m(b, k.zb) || a.m(b, k.Yb) || "";
                this.b.ci = a.m(b,
                    k.xb) || a.m(b, k.Vb) || "";
                this.b.cf = a.m(b, k.Cb) || a.m(b, k.Xb) || "";
                this.b.cu = a.m(b, k.yb) || a.m(b, k.Ub) || ""
            },
            init: function() {
                try {
                    this.Rb(), 0 === this.b.nv ? this.Ob() : this.Fa(), h.c = this, this.cb(), this.bb(), z.H("pv-b"), this.Nb()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    e.log(k.sa + "//" + k.Pa + "?" + b.join("&"))
                }
            },
            Nb: function() {
                function a() {
                    z.H("pv-d")
                }
                this.Ka ? (this.qa = s, this.b.et = 0, this.b.ep =
                    "", this.b.p = u(q.C("pageview")), this.b.vl = m.Y() + m.O(), this.i(a), this.b.p = "") : a();
                this.D = +new Date;
                q.s("pageview")
            },
            i: function(a) {
                if (this.La) {
                    var b = this;
                    b.b.rnd = Math.round(Math.random() * k.ta);
                    z.H("stag-b");
                    var d = k.sa + "//" + k.Pa + "?" + b.Pb();
                    z.H("stag-d");
                    b.Ya(d);
                    e.log(d, function(d) {
                        b.Qa(d);
                        f.d(a, "Function") && a.call(b)
                    })
                }
            },
            cb: function() {
                var b = document.location.hash.substring(1),
                    d = RegExp(c.id),
                    e = a.N(document.referrer) === k.Ua ? 1 : 0,
                    f = a.m(b, "jn"),
                    g = /^heatlink$|^select$|^pageclick$/.test(f);
                b && (d.test(b) && e &&
                    g) && (this.b.rnd = Math.round(Math.random() * k.ta), b = document.createElement("script"), b.setAttribute("type", "text/javascript"), b.setAttribute("charset", "utf-8"), b.setAttribute("src", k.protocol + "//" + c.js + f + ".js?" + this.b.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(b, f))
            },
            bb: function() {
                if (window.postMessage && window.self !== window.parent) {
                    var b = this;
                    x.e(window, "message", function(d) {
                        if (a.N(d.origin) === k.Ua) {
                            d = d.data || {};
                            var e = d.jn || "",
                                f = /^customevent$/.test(e);
                            if (RegExp(c.id).test(d.sd ||
                                    "") && f) b.b.rnd = Math.round(Math.random() * k.ta), n(k.protocol + "//" + c.js + e + ".js?" + b.b.rnd)
                        }
                    });
                    window.parent.postMessage({
                        id: c.id,
                        url: document.location.href,
                        status: "__Messenger__hmLoaded"
                    }, "*")
                }
            },
            Ya: function(a) {
                var b;
                try {
                    b = p.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e = this.b.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//, "") + e);
                l.set("Hm_unsent_" + c.id, p.stringify(b))
            },
            Qa: function(a) {
                var b;
                try {
                    b = p.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a =
                        a.replace(/^https?:\/\//, "");
                    for (var e = 0; e < b.length; e++)
                        if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) {
                            b.splice(e, 1);
                            break
                        }
                    b.length ? l.set("Hm_unsent_" + c.id, p.stringify(b)) : this.Fa()
                }
            },
            Fa: function() {
                l.remove("Hm_unsent_" + c.id)
            },
            Ob: function() {
                var a = this,
                    b;
                try {
                    b = p.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length)
                    for (var f = function(b) {
                            e.log(k.sa + "//" + b, function(b) {
                                a.Qa(b)
                            })
                        }, g = 0; g < b.length; g++) f(b[g])
            },
            Ia: function() {
                return Math.round(+new Date / 1E3) % 65535
            }
        };
        return new b
    })();
    (function() {
        var b = mt.event,
            a = mt.lang,
            e = h.A;
        if (c.kbtrk && "undefined" !== typeof h.c) {
            h.c.b.kb = a.ra(h.c.b.kb) ? h.c.b.kb : 0;
            var d = function() {
                h.c.b.et = 85;
                h.c.b.ep = h.c.b.kb;
                h.c.i()
            };
            b.e(document, "keyup", function() {
                h.c.b.kb++
            });
            b.e(window, "unload", function() {
                d()
            });
            setInterval(d, e.Hb)
        }
    })();
    var C = h.A,
        D = h.load;
    c.pt && D([C.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
    (function() {
        var b = mt.h,
            a = mt.lang,
            e = mt.event,
            d = mt.o;
        if ("undefined" !== typeof h.c && (c.med || (!b.Ma || 7 < b.pb()) && c.cvcc)) {
            var f, g, m, l, p = function(a) {
                    if (a.item) {
                        for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                        return d
                    }
                    return [].slice.call(a)
                },
                x = function(a, b) {
                    for (var d in a)
                        if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === w) return w
                },
                t = function(b, e) {
                    var g = {};
                    g.n = f;
                    g.t = "clk";
                    g.v = b;
                    if (e) {
                        var k = e.getAttribute("href"),
                            l = e.getAttribute("onclick") ? "" + e.getAttribute("onclick") : v,
                            p = e.getAttribute("id") || "";
                        m.test(k) ? (g.sn =
                            "mediate", g.snv = k) : a.d(l, "String") && m.test(l) && (g.sn = "wrap", g.snv = l);
                        g.id = p
                    }
                    h.c.b.et = 86;
                    h.c.b.ep = d.stringify(g);
                    h.c.i();
                    for (g = +new Date; 400 >= +new Date - g;);
                };
            if (c.med) g = "/zoosnet", f = "swt", m = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, l = {
                click: function() {
                    for (var a = [], b = p(document.getElementsByTagName("a")), b = [].concat.apply(b, p(document.getElementsByTagName("area"))), b = [].concat.apply(b, p(document.getElementsByTagName("img"))), d, e, f = 0, g = b.length; f < g; f++) d = b[f], e =
                        d.getAttribute("onclick"), d = d.getAttribute("href"), (m.test(e) || m.test(d)) && a.push(b[f]);
                    return a
                }
            };
            else if (c.cvcc) {
                g = "/other-comm";
                f = "other";
                m = c.cvcc.q || r;
                var q = c.cvcc.id || r;
                l = {
                    click: function() {
                        for (var a = [], b = p(document.getElementsByTagName("a")), b = [].concat.apply(b, p(document.getElementsByTagName("area"))), b = [].concat.apply(b, p(document.getElementsByTagName("img"))), d, e, f, g = 0, k = b.length; g < k; g++) d = b[g], m !== r ? (e = d.getAttribute("onclick"), f = d.getAttribute("href"), q ? (d = d.getAttribute("id"), (m.test(e) ||
                            m.test(f) || q.test(d)) && a.push(b[g])) : (m.test(e) || m.test(f)) && a.push(b[g])) : q !== r && (d = d.getAttribute("id"), q.test(d) && a.push(b[g]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof l && "undefined" !== typeof m) {
                var u;
                g += /\/$/.test(g) ? "" : "/";
                var k = function(b, d) {
                    if (u === d) return t(g + b, d), w;
                    if (a.d(d, "Array") || a.d(d, "NodeList"))
                        for (var e = 0, f = d.length; e < f; e++)
                            if (u === d[e]) return t(g + b + "/" + (e + 1), d[e]), w
                };
                e.e(document, "mousedown", function(b) {
                    b = b || window.event;
                    u = b.target || b.srcElement;
                    var d = {};
                    for (x(l, function(b, e) {
                            d[b] = a.d(e,
                                "Function") ? e() : document.getElementById(e)
                        }); u && u !== document && x(d, k) !== w;) u = u.parentNode
                })
            }
        }
    })();
    (function() {
        var b = mt.f,
            a = mt.lang,
            e = mt.event,
            d = mt.o;
        if ("undefined" !== typeof h.c && a.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var f = {
                Wa: function() {
                    for (var a = c.cvcf.length, d, l = 0; l < a; l++)(d = b.Ga(decodeURIComponent(c.cvcf[l]))) && e.e(d, "click", f.ma())
                },
                ma: function() {
                    return function() {
                        h.c.b.et = 86;
                        var a = {
                            n: "form",
                            t: "clk"
                        };
                        a.id = this.id;
                        h.c.b.ep = d.stringify(a);
                        h.c.i()
                    }
                }
            };
            b.Jb(function() {
                f.Wa()
            })
        }
    })();
    (function() {
        var b = mt.event,
            a = mt.o;
        if (c.med && "undefined" !== typeof h.c) {
            var e = {
                    n: "anti",
                    sb: 0,
                    kb: 0,
                    clk: 0
                },
                d = function() {
                    h.c.b.et = 86;
                    h.c.b.ep = a.stringify(e);
                    h.c.i()
                };
            b.e(document, "click", function() {
                e.clk++
            });
            b.e(document, "keyup", function() {
                e.kb = 1
            });
            b.e(window, "scroll", function() {
                e.sb++
            });
            b.e(window, "load", function() {
                setTimeout(d, 5E3)
            })
        }
    })();
    c.spa !== r && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]));
})();