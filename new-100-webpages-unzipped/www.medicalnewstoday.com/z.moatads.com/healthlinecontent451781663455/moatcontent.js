/*Copyright (c) 2011-2016 Moat Inc. All Rights Reserved.*/
try {
    (function(x, u) {
        function va(b) {
            r.l.b.sxaz("trackingReady", {
                callback: va
            });
            la = y.h;
            y.h++;
            y.i[la] = !1;
            r.y.j();
            r.c.l.b || (r.c.l.b = !0, y.dcsx.ynds(window, "unload", "unload-" + r.c.l.a, "unloadFn" + r.c.l.a), y.dcsx.ynds(window, "beforeunload", "unload-" + r.c.l.a, "beforeunloadFn" + r.c.l.a));
            y.swde.azsx("unload-" + r.c.l.a, wa, {
                once: !0
            });
            r.l.b.azsx("allLocalAdsKilled", function() {
                y.swde.sxaz("unload-" + r.c.l.a, {
                    callback: wa
                })
            }, {
                once: !0
            });
            r.h.e(r.r.e, 100);
            r.a.o() && r.h.f(xa, 3E5);
            "undefined" === typeof b && (b = r.g.d(H));
            if (r.af.o(document.location.host)) r.af.q(),
                r.af.f(H), r.af.n(b);
            else return !1
        }
        var r = {},
            ma, na, oa, la = 0,
            pa = {},
            N = [],
            D = {},
            P = [],
            A = {},
            T = !1,
            ya = {
                15: "",
                12: "",
                6: "",
                7: ""
            },
            X, za = function() {
                for (var b = 0; b < N.length; b++) r.a.a(N[b]);
                for (b = 0; b < P.length; b++) r.a.b(P[b]);
                for (var k in D) D.hasOwnProperty && D.hasOwnProperty(k) && D[k] && (r.a.a(D[k].tid), D[k] = !1);
                N = [];
                P = [];
                H = null;
                r.b = null;
                r.c.a = null
            },
            xa = function() {
                r.d.a(null, 0) || r.d.b();
                za()
            };
        r.e = xa;
        (function(b) {
            function k(b) {
                var t = new RegExp("(^| )" + b + "($| )");
                return function(b) {
                    return b && b.className && b.className.match(t)
                }
            }

            function e(b) {
                return b && b.document && b.location && b[w + p] && b[v + m]
            }

            function c(b) {
                if (null == b || e(b)) return !1;
                var t = b.length;
                return 1 === b.nodeType && t ? !0 : "string" === typeof b || h(b) || 0 === t || "number" === typeof t && 0 < t && t - 1 in b
            }

            function h(n) {
                return "[object Array]" === b.a.bf.toString.call(n)
            }
            b.a = {};
            b.a.c = 3E3;
            b.a.d = function() {
                var b = /Firefox\/(\d+)/.exec(navigator.userAgent);
                return b ? (b = parseInt(b[1], 10), 21 > b && 14 < b) : !1
            }();
            b.a.e = function() {
                var n, t = /^(?:[a-z]+:\/\/|:?\/?\/)?(?:www\.)?([^\/:]*)/i;
                b.c.b || (n = b.a.f(), !n &&
                    b.c.c && (n = b.c.c));
                n || (n = b.c.d.location.hostname);
                return (n = n && n.match && n.match(t)) && n[1] || b.c.d.location.hostname
            };
            b.a.g = function() {
                var n, t;
                b.c.b ? n = window.top.location.href : (t = b.f.a(), t.parent === window.top ? n = t.document.referrer : (n = b.a.f(), n || (n = t.document.referrer)));
                return n
            };
            b.a.h = function() {
                var n;
                b.c.b ? n = 2 : (n = b.f.a(), n = n.parent === window.top ? 2 : location && location.ancestorOrigins ? 1 : 0);
                return n
            };
            b.a.f = function() {
                var b = location && location.ancestorOrigins;
                return b ? 0 === b.length ? !1 : b[b.length - 1] : !1
            };
            b.a.i =
                function() {
                    var n, t = b.a.e(),
                        c = t && t.split("."),
                        q = c && c.length;
                    3 <= q ? n = "co" === c[q - 2] || "com" === c[q - 2] ? c[q - 3] + "." + c[q - 2] + "." + c[q - 1] : c[q - 2] + "." + c[q - 1] : 2 == q && (n = c[q - 2] + "." + c[q - 1]);
                    return n && decodeURIComponent(n) || decodeURIComponent(t)
                };
            b.a.j = function() {
                return "moatcontent.js"
            };
            b.a.k = function(b) {
                var t = {},
                    c = "#"; - 1 === b.indexOf(c) && (c = "?");
                if (b = b.split(c)[1]) {
                    b = b.split("&");
                    var q;
                    for (q = 0; q < b.length; q++) c = b[q].split("="), 2 == c.length && (t[c[0]] = c[1])
                }
                return t
            };
            b.a.l = function(b) {
                if ("string" !== typeof b) return "";
                var t =
                    b.match(/^([^:]{2,}:\/\/[^\/]*)/);
                t && t[1] && (b = t[1]);
                return b
            };
            b.a.m = function(b, t) {
                for (var c = [b], q = 1; q <= t; q++) c.push(b + q), c.push(b - q);
                c = c[u.floor(u.random() * c.length)];
                q = u.floor(u.random() * c);
                return {
                    multiplier: c,
                    sample: 0 == q
                }
            };
            b.a.n = function(n, t) {
                var c = b.a.m(n, t);
                b.a.n = function() {
                    return c
                };
                return c
            };
            b.a.o = function() {
                var n = b.a.p();
                return 5 === n || 6 === n || 7 === n
            };
            b.a.q = function() {
                return b.a.o() ? 2048 : 7750
            };
            b.a.p = function() {
                if (!navigator) return null;
                var b;
                b = navigator.userAgent;
                return "Microsoft Internet Explorer" ==
                    navigator.appName ? parseInt(b.replace(/^.*MSIE (\d+).*$/, "$1"), 10) : "Netscape" == navigator.appName && (b = b.match(/(?:Trident\/.*rv:|MSIE )(\d+)/)) ? parseInt(b[1], 10) : null
            };
            b.a.r = function() {
                return null != b.a.p()
            };
            b.a.s = function(n, t) {
                return -1 !== b.a.indexOf(n, t)
            };
            b.a.t = function() {
                function b(n) {
                    if (!n) return "";
                    n = n.match(/[\d]+/g);
                    n.length = 3;
                    return n.join(".")
                }
                var t = !1,
                    c = "";
                if (navigator.plugins && navigator.plugins.length) {
                    var q = navigator.plugins["Shockwave Flash"];
                    q && (t = !0, q.description && (c = b(q.description)));
                    navigator.plugins["Shockwave Flash 2.0"] && (t = !0, c = "2.0.0.11")
                } else if (navigator.mimeTypes && navigator.mimeTypes.length)(t = (q = navigator.mimeTypes["application/x-shockwave-flash"]) && q.enabledPlugin && q.enabledPlugin.description) && (c = b(q.enabledPlugin.description));
                else try {
                    q = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), t = !0, c = b(q.GetVariable("$version"))
                } catch (l) {
                    try {
                        q = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), t = !0, c = "6.0.21"
                    } catch (d) {
                        try {
                            q = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                                t = !0, c = b(q.GetVariable("$version"))
                        } catch (m) {}
                    }
                }
                return t ? c : "0"
            };
            b.a.getElementsByClassName = function(b, t, c) {
                t = t || "*";
                c = c || document;
                if (c.getElementsByClassName) {
                    var q = [],
                        l = c.getElementsByClassName(b);
                    if ("*" !== t) {
                        b = 0;
                        for (c = l.length; b < c; b++) {
                            var d = l[b];
                            d.tagName === t && q.push(d)
                        }
                        return q
                    }
                    return l
                }
                l = [];
                t = c.getElementsByTagName(t);
                c = k(b);
                d = t.length;
                for (b = 0; b < d; b++) q = t[b], c(q) && l.push(q);
                return l
            };
            b.a.u = k;
            b.a.v = function(b) {
                return new x - b.de
            };
            b.a.w = function(b) {
                return (b = b.match(/^https?:\/\/(.*?)\/([^?#]*)/)) ?
                    b.slice(1, 3) : ["-", "-"]
            };
            b.a.x = function(b) {
                return b.replace(/^http:/, "").replace(/^\/\//, "").replace(/^www[^.]*\./, "").split("/")[0]
            };
            b.a.y = function(n, t, c) {
                if (("undefined" === typeof c || !c) && n && (c = b.a.z(n), !c)) return;
                if (n && n.nodeType)
                    if ("undefined" === typeof Node) {
                        if (1 != n.nodeType) return
                    } else if (n.nodeType != Node.ELEMENT_NODE) return;
                if (c.getComputedStyle) return c.getComputedStyle(n, "") && c.getComputedStyle(n, "")[t];
                for (c = t.indexOf("-"); - 1 < c;) t = c == t.length - 1 ? t.substr(0, c) : t.substr(0, c) + t.charAt(c + 1).toUpperCase() +
                    t.substr(c + 2), c = t.indexOf("-");
                if (n.currentStyle) return n.currentStyle[t];
                if (n.style) return n.style[t]
            };
            b.a.aa = function(n) {
                if (!n) return !1;
                var t = b.a.y(n, "background-image");
                t || (t = b.a.y(n, "backgroundImage"));
                var c;
                t && (c = (c = t.match("url\\((.*)\\)")) && c[1].replace(/\x22/g, ""));
                return c
            };
            b.a.ab = function(n, t) {
                if (!n) return !1;
                var c = [n],
                    q = !1;
                b.a.forEach("number" === typeof t ? t : 50, function() {
                    if ((q = b.a.ac(n)) && 1 == q.nodeType) n = q, c.push(n);
                    else return !1
                });
                return c
            };
            b.a.ac = function(b) {
                return b.parentNode || b.parentElement ||
                    !1
            };
            b.a.ad = function(n, t) {
                var c = "number" === typeof t ? t : 50,
                    q = [],
                    l = b.a.z(n);
                if (l) q.push(l);
                else return q;
                b.a.forEach(c, function() {
                    var t = b.f.b(n, l);
                    return t && (l = b.a.z(t)) ? (q.push(l), !0) : !1
                });
                return q
            };
            b.a.ae = function() {
                return null !== /iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|BB10|Windows Phone|SpreadTrum|MAUI/.exec(navigator && navigator.userAgent || "")
            };
            b.a.af = function() {
                return null !== /iPhone|iPod/.exec(navigator.userAgent)
            };
            b.a.ag = function() {
                return null !== /iPad/.exec(navigator.userAgent)
            };
            b.a.ah = function() {
                return null !== /Android/.exec(navigator.userAgent)
            };
            b.a.ai = function() {
                var b = navigator.userAgent;
                return b.match(/iPhone|iPod|iPad/) && !b.match(/Safari|CriOS/i)
            };
            b.a.aj = function() {
                var n = navigator.userAgent;
                return b.a.ah() && n.match(/Version/)
            };
            b.a.ak = function() {
                var n = b.c.d.screen;
                if (b.a.ai()) {
                    var t;
                    "undefined" !== typeof window.orientation ? 0 === window.orientation || 180 === window.orientation ? (t = n.width, n = n.height) : (t = n.height, n = n.width) : t = n = 0;
                    return {
                        w: t,
                        h: n
                    }
                }
                if (b.a.aj()) {
                    t = b.c.d.devicePixelRatio;
                    var c = 1;
                    .05 > u.abs(n.width / b.c.d.innerWidth - t) && (c = t);
                    return {
                        w: n.width / c,
                        h: n.height / c
                    }
                }
                return {
                    w: n.width,
                    h: n.height
                }
            };
            b.a.al = function() {
                var b = window;
                try {
                    return "undefined" !== typeof b.external && "undefined" !== typeof b.external.InPrivateFilteringEnabled && b.external.InPrivateFilteringEnabled() || "undefined" !== typeof b.external && "undefined" !== typeof b.external.msTrackingProtectionEnabled && b.external.msTrackingProtectionEnabled() || "undefined" !== typeof b._gaUserPrefs && b._gaUserPrefs.ioo && b._gaUserPrefs.ioo() ||
                        "undefined" !== typeof navigator.doNotTrack && ("yes" === navigator.doNotTrack || !0 === navigator.doNotTrack || "1" === navigator.doNotTrack) || "undefined" !== typeof b._gaUserPrefs && !0 === b._gaUserPrefs
                } catch (t) {
                    return !1
                }
            };
            b.a.am = function() {
                return !1
            };
            b.a.getAttribute = function(b, t) {
                return b[t] || b.getAttribute(t)
            };
            b.a.an = function(b) {
                var t = 0,
                    c;
                for (c in b) b.hasOwnProperty(c) && (t += 1);
                return t
            };
            var g = [function(b) {
                if (!b || "IFRAME" !== b.nodeName) return !1;
                var t = b.offsetHeight;
                return isNaN(t) || 15 < t || "google_conversion_frame" !==
                    b.name ? !1 : !0
            }];
            b.a.ao = function(n, t) {
                return "undefined" === typeof n || null === n || !1 === n || !b.a.ap(n) || n.nodeName && "IMG" == n.nodeName && !n.complete || b.a.filter(g, function(b) {
                    return b(n)
                }).length || !0 === n[G] ? !1 : !0
            };
            b.a.aq = function(b) {
                return b.replace(/:/g, "%3A").replace(/=/g, "%3D").replace(/,/g, "%2C")
            };
            b.a.ar = function(n) {
                var t = [];
                b.a.forEach(n, function(n, c) {
                    var l = typeof n;
                    "number" == l ? t.push(b.a.aq(c) + ":" + b.a.aq(n + "")) : "string" == l ? t.push(b.a.aq(c) + ":" + b.a.aq('"' + n + '"')) : "undefined" == l ? t.push(b.a.aq(c) + ":" + b.a.aq("undefined")) :
                        "boolean" == l ? t.push(b.a.aq(c) + ":" + b.a.aq(n ? "true" : "false")) : null === n ? t.push(b.a.aq(c) + ":" + b.a.aq("null")) : "object" != l && "function" != l || !n.toString || t.push(b.a.aq(c) + ":" + b.a.aq('"' + n.toString() + '"'))
                }, null, !0);
                t.sort();
                return "{" + t.join(",") + "}"
            };
            b.a.as = function(b) {
                var t = {};
                if ("string" != typeof b || "{" != b.charAt(0)) return !1;
                b = b.slice(1, -1).split(",");
                for (var c = 0; c < b.length; c++) {
                    var l = b[c].split(":");
                    l[1] = unescape(l[1]);
                    "true" == l[1] ? l[1] = !0 : "false" == l[1] ? l[1] = !1 : '"' == l[1].charAt(0) ? l[1] = l[1].slice(1, -1) :
                        l[1] = "undefined" == l[1] ? void 0 : "null" == l[1] ? null : "NaN" == l[1] ? NaN : parseFloat(l[1]);
                    t[unescape(l[0])] = l[1]
                }
                return t
            };
            b.a.ap = function(n) {
                var t = n.offsetWidth,
                    c = n.offsetHeight;
                b.a.forEach(b.a.ab(n, 3), function(b) {
                    var n = b.style && b.style.width,
                        l = b.style && b.style.height;
                    b && b.style && "hidden" == b.style.overflow && ("" != n || "" != l) && (b = parseFloat(n), l = parseFloat(l), t = !isNaN(b) && b < t ? b : t, c = !isNaN(l) && l < c ? l : c)
                });
                if (n = b.a.at(n)) t = n.width < t ? n.width : t, c = n.height < c ? n.height : c;
                return t * c >= b.a.c
            };
            var d = {};
            b.a.at = function(n) {
                if (!n ||
                    !n.nodeName || "IMG" == !n.nodeName || !n.complete) return !1;
                var t = n.getAttribute("src");
                if (!t) return !1;
                if (d[t]) return d[t];
                try {
                    if ("undefined" !== typeof n.naturalHeight && "undefined" !== typeof n.naturalWidth) {
                        var c = {
                            width: n.naturalWidth,
                            height: n.naturalHeight
                        };
                        return d[n.src] = c
                    }
                } catch (l) {}
                return b.c.a && (b.c.a.src = t, b.c.a.a) ? (c = {
                    width: parseInt(b.c.a.b),
                    height: parseInt(b.c.a.c)
                }, d[t] = c) : !1
            };
            b.a.au = function() {
                var b;
                return function() {
                    if (!b) a: {
                        for (var t = document.getElementsByTagName("script"), c = t.length - 1; - 1 < c; c--)
                            if ((b =
                                    t[c]) && b.src && b.src.indexOf && (-1 !== b.src.indexOf("healthlinecontent451781663455/moatcontent.js") || -1 !== b.src.indexOf("healthlinecontent451781663455%2Fmoatcontent.js")) && ("undefined" === typeof b[G] || !0 !== b[G])) {
                                b[G] = !0;
                                break a
                            }
                        b = void 0
                    }
                    return b ? (b[G] = !0, b) : null
                }
            }();
            b.a.av = function(b) {
                for (var t = [], c = b && b.getElementsByTagName("script"), l = c.length - 1; - 1 < l; l--)(b = c[l]) && b.src && b.src.match(/moatads.com\/.*\/moat(ad|video)\.js/) && !b.src.match("healthlinecontent451781663455") && t.push(b);
                if (t && 0 < t.length) return t
            };
            b.a.aw = function(n, t) {
                if (!n || !t) return !1;
                var c = b.a.av(b.c.e ? H.ownerDocument.body || t : t);
                if (c && 0 < c.length) {
                    var l = c[0] && c[0].src && c[0].src.match(/moatads.com\/(.*)\/moat(ad|video)\.js/);
                    l && l[1] && (n.zMoatOtherScript = l[1], (c = b.g.a(c[0])) ? (c = c.cleanMoatClientLevel1 + ":" + c.cleanMoatClientLevel2 + ":" + c.cleanMoatClientLevel3 + ":" + c.cleanMoatClientLevel4, n.zMoatOtherHash = c ? c : "IDs Not Available") : n.zMoatOtherHash = "IDs Not Available")
                }
            };
            b.a.ax = function(b, t) {
                for (var c in t) t.hasOwnProperty(c) && (b[c] = t[c])
            };
            b.a.ay =
                function(b, c) {
                    if ("string" !== typeof b || !c || !c.insertBefore || !c.ownerDocument) return !1;
                    var l = c.ownerDocument.createElement("script");
                    l.type = "text/javascript";
                    l.async = !0;
                    c.insertBefore(l, c.childNodes[0]);
                    l.src = b;
                    return !0
                };
            b.a.az = function(b) {
                var c;
                if (b) c = /https:/i.test(b.src || b.href || "http:") ? "https:" : "http:";
                else try {
                    c = window.location.protocol
                } catch (l) {
                    b = document.createElement("a"), b.href = "", c = b.protocol
                }
                return "https:" === c ? "https:" : "http:"
            };
            b.a.ba = function(b) {
                try {
                    return -1 !== (b.src || b.getAttribute("src")).indexOf("psd=1")
                } catch (c) {
                    return !1
                }
            };
            b.a.bb = function(b) {
                for (var c = [], l = 0; l < b.length; l++) c.push(b[l]);
                return c
            };
            b.a.nextElementSibling = function(b) {
                if (b.nextElementSibling) return b.nextElementSibling;
                for (; b = b.nextSibling;)
                    if (1 === b.nodeType) return b
            };
            b.a.previousElementSibling = function(b) {
                if (b) {
                    if (b.previousElementSibling) return b.previousElementSibling;
                    for (var c = 0;
                        (b = b.previousSibling) && 1E3 > c;)
                        if (c++, b && 1 === b.nodeType) return b
                }
            };
            b.a.bc = function(b, c, l) {
                "undefined" !== typeof l && (b[c] = l)
            };
            b.a.filter = function(b, c) {
                for (var l = [], q = 0; q < b.length; q++) c(b[q]) &&
                    l.push(b[q]);
                return l
            };
            b.a.bd = function(b, c) {
                for (var l = [], q = 0; q < c.length; q++) l.push(b(c[q]));
                return l
            };
            b.a.indexOf = function(n, c) {
                if (!n) return -1;
                if (b.a.be(n)) {
                    for (var l = 0, q = n.length; l < q; l++)
                        if (n[l] === c) return l;
                    return -1
                }
                return "string" === typeof n ? c || "string" !== typeof c ? n.indexOf(c) : -1 : -1
            };
            b.a.bind = function(b, c) {
                return function() {
                    b[c].apply(b, arguments)
                }
            };
            var w = "ale",
                p = "rt",
                v = "setInte",
                m = "rval";
            b.a.bf = {};
            b.a.bg = function(b, c) {
                if (b && c && c.childNodes) {
                    var l = c.childNodes;
                    0 < l.length ? c.insertBefore(b, l[0]) :
                        c.appendChild(b)
                }
            };
            b.a.bh = function(c, t) {
                if (!c || !t) return !1;
                var l = b.a.bi(t);
                if (!l) return !1;
                if (b.a.hasChildNodes(l)) {
                    var q = l.childNodes[u.max(0, l.childNodes.length - 1)] || null;
                    l.insertBefore(c, q)
                } else l.appendChild(c);
                return l
            };
            b.a.bj = function(c, t, l) {
                if ("string" != typeof c || !t || !document) return !1;
                l = l || document.createElement("script");
                l.type = "text/javascript";
                t = b.a.bh(l, t);
                if (!t) return !1;
                l.src = c;
                return t
            };
            b.a.hasChildNodes = function(b) {
                return b && b.childNodes && 0 < b.childNodes.length
            };
            b.a.bi = function(c) {
                if (!c) return !1;
                if ("OBJECT" !== c.nodeName && "EMBED" !== c.nodeName) return c;
                c = b.a.ab(c);
                var t = !1;
                b.a.forEach(c, function(b) {
                    if (b && "OBJECT" !== b.nodeName && "EMBED" !== b.nodeName) return t = b, !1
                });
                return t
            };
            b.a.bk = function(b, c) {
                if ("undefined" === typeof b) return !1;
                for (var l = 0, q = c.length; l < q; l++)
                    if ("string" == typeof c[l]) {
                        try {
                            b = b[c[l]]
                        } catch (d) {}
                        if ("undefined" === typeof b) return !1
                    }
                return b
            };
            b.a.bl = function(b) {
                return encodeURIComponent(b.moatClientLevel1 + ":" + b.moatClientLevel2 + ":" + b.moatClientLevel3 + ":" + b.moatClientLevel4)
            };
            b.a.bm =
                function(b) {
                    return A && "undefined" !== typeof b && A[b] ? A[b] : !1
                };
            b.a.bn = function(c, l) {
                if (!c || "function" !== typeof c) return !1;
                var d = !1;
                0 <= String(c).indexOf("[native code]") ? d = !0 : b.c.f || c === Function.prototype.toString || (d = !0);
                d && l && (d = c.toString && c.toString === Function.prototype.toString);
                return d
            };
            b.a.be = h;
            b.a.bo = e;
            b.a.bp = c;
            b.a.forEach = function(b, l, d, q) {
                var m, g = typeof b;
                if (b)
                    if ("function" === g)
                        for (m in b) {
                            if ("prototype" != m && "length" != m && "name" != m && (q || !b.hasOwnProperty || b.hasOwnProperty(m)) && (g = l.call(d, b[m],
                                    m), "boolean" === typeof g && !g)) break
                        } else if ("number" === g)
                            for (m = 0; m < b && (g = l.call(d, b, m), "boolean" !== typeof g || g); m++);
                        else if ("function" === typeof b.every) b.every(function(b, c, n) {
                    b = l.call(d, b, c);
                    return !("boolean" === typeof b && !b)
                });
                else if (c(b))
                    for (m = 0; m < b.length && (g = l.call(d, b[m], m), "boolean" !== typeof g || g); m++);
                else
                    for (m in b)
                        if (q || b.hasOwnProperty(m))
                            if (g = l.call(d, b[m], m), "boolean" === typeof g && !g) break;
                return b
            };
            b.a.bq = function(c) {
                return c && b.a.filter(c.children, function(b) {
                    return 1 === b.nodeType
                })
            };
            b.a.br = function(b) {
                if (!b || !b.aa) return !1;
                if ("number" != typeof b.ADAREA) {
                    var c, l;
                    b.elementRect ? (c = b.elementRect.right - b.elementRect.left, l = b.elementRect.bottom - b.elementRect.top) : (c = b.aa.offsetWidth, l = b.aa.offsetHeight);
                    b.ADAREA = c * l
                }
                return b.ADAREA
            };
            b.a.bs = function(c) {
                if (!(!c || c && c.CLIPCHECKINGTARGET)) {
                    var l = b.a.ab(c, 3),
                        d;
                    l && 0 < l.length && (b.a.forEach(l, function(b) {
                        if (b && b.style && b.style.clip) return d = b, !1
                    }), !d && c.style && c.style.clip && (d = c), d && (c.CLIPCHECKINGTARGET = d))
                }
            };
            var z = /rect\((\d+)px,? ?(\d+)px,? ?(\d+)px,? ?(\d+)px\)/;
            b.a.bt = function(c) {
                c = c.match(z);
                var l = !1;
                c && (c = b.a.bd(function(b) {
                    return parseInt(b, 10)
                }, c), l = {
                    top: c[1],
                    right: c[2],
                    bottom: c[3],
                    left: c[4]
                });
                return l
            };
            b.a.bu = function(c) {
                if (!c) return !1;
                var l = !1;
                if (c !== Object(c)) l = c;
                else if (b.a.bp(c))
                    for (var l = [], d = 0, q = c.length; d < q; d++) l[d] = c[d];
                else
                    for (d in l = {}, c) l[d] = c[d];
                return l
            };
            b.a.trim = function(b) {
                return String.prototype.trim ? b.trim() : b.replace(/^[\s\U0000feff\xA0]+|[\s\U0000feff\xA0]+$/g, "")
            };
            b.a.bv = function() {
                var b = function() {
                    var b = window.pageXOffset ? window.pageXOffset +
                        window.innerWidth - 1 : 0,
                        c = window.pageYOffset ? window.pageYOffset + window.innerHeight - 1 : 0;
                    return b || c ? !document.elementFromPoint(b, c) : !0
                }();
                return function(c, l, q) {
                    if (!b) {
                        var d = q.defaultView || q.parentWindow || window;
                        c += d.pageXOffset;
                        l += d.pageYOffset
                    }
                    return q.elementFromPoint(c, l)
                }
            }();
            b.a.bw = function(b, c) {
                return Object.prototype.hasOwnProperty.call(b, c)
            };
            b.a.bx = function(c, l) {
                if (!c || !l || "object" != typeof c || "object" != typeof l) return !1;
                var d = !0;
                b.a.forEach(c, function(b, c) {
                    if ("string" != typeof b && "number" != typeof b) return !0;
                    if (!l.hasOwnProperty(c) || l[c] !== b) return d = !1
                });
                b.a.forEach(l, function(b, l) {
                    if ("string" != typeof b && "number" != typeof b) return !0;
                    if (!c.hasOwnProperty(l) || c[l] !== b) return d = !1
                });
                return d
            };
            b.a.by = function(b, c, l) {
                return function() {
                    c.apply(l || null, b.concat(b.slice.call(arguments)))
                }
            };
            b.a.z = function(b) {
                try {
                    var c = b && b.ownerDocument;
                    return c && (c.defaultView || c.parentWindow)
                } catch (l) {
                    return !1
                }
            };
            b.a.bz = function(c, l) {
                if (!c || !l) return !1;
                for (var d = [], q, m = 0; 50 > m; m++)
                    if (l != l.parent) {
                        if (q = b.f.b(c, l)) d.push(q);
                        else break;
                        l = l.parent;
                        c = q
                    } else break;
                return d
            };
            b.a.ca = function(b) {
                b = u.max(4, b);
                return ((1 + u.random()) * u.pow(16, b) | 0).toString(16).substring(0, b)
            };
            b.a.cb = function() {
                var c = b.a.ca;
                return c(4) + "-" + c(4) + "-" + c(4) + "-" + c(4)
            };
            b.a.a = function(b) {
                window && window.clearTimeout && window.clearTimeout(b)
            };
            b.a.b = function(b) {
                window && window.clearInterval && window.clearInterval(b)
            };
            var l = function(c, l) {
                if (b.a.bn(l.toString)) return l.toString();
                if (b.a.bn(c && c.Function.prototype.toString)) return l.toString = c.Function.prototype.toString,
                    l.toString();
                var d = b.c.d !== c && b.c.d && b.c.d.Function.prototype.toString;
                if (b.a.bn(d)) return l.toString = d, l.toString();
                if (b.c.g && 8 >= b.a.p()) return l.toString();
                var d = c || window,
                    q = d.document.createElement("IFRAME");
                q.style.display = "none";
                q.style.width = "0px";
                q.style.height = "0px";
                q.width = "0";
                q.height = "0";
                b.a.bh(q, d.document.documentElement);
                q.contentWindow && (l.toString = q.contentWindow.Function.prototype.toString);
                var m = l.toString();
                d.document.documentElement.removeChild(q);
                return m
            };
            b.a.toString = function(c,
                t) {
                t = t || b.c.d;
                var d;
                try {
                    d = l(t, c)
                } catch (q) {
                    d = c.toString()
                }
                return d
            };
            b.a.cc = function(c, l, d) {
                c = b.a.toString(c, d);
                if (b.c.h()) d.eval("(" + c + ")(" + l + ")");
                else if (d.Function)(new d.Function("(" + c + ")(" + l + ")"))();
                else {
                    var q = d.document.createElement("script");
                    q.type = "text/javascript";
                    q.text = "(" + c + ")(" + l + ")";
                    b.a.bh(q, d.document.body)
                }
            };
            b.a.cd = function(c) {
                var l = [];
                b.a.forEach(c, function(b, c) {
                    l.push(c)
                });
                return l
            };
            b.a.ce = function(c, l, d, q) {
                var m = document.createElement("script"),
                    g = document.body || document.getElementsByTagName("head")[0] ||
                    document.getElementsByTagName("script")[0];
                window[l] = d;
                m.onerror = q;
                b.a.bj(c, g, m)
            };
            b.a.cf = function() {
                if (window.XMLHttpRequest) return new window.XMLHttpRequest;
                try {
                    return new ActiveXObject("MSXML2.XMLHTTP.3.0")
                } catch (b) {
                    return null
                }
            };
            b.a.cg = function(c, l, d) {
                function q(b, c) {
                    try {
                        return c[b]
                    } catch (l) {}
                }
                var m, g;
                if ("string" !== typeof c) return !1;
                m = window;
                g = q(c, m);
                if (!g) {
                    l = b.f.c(m, "number" === typeof l ? l : 20);
                    if (!l) return !1;
                    for (var e = 0, p = l.length; e < p && (m = l[e], g = q(c, m), "undefined" === typeof g); e++);
                }
                return d ? [g,
                    m
                ] : g
            }
        })(r);
        (function(b) {
            b.f = {};
            b.f.d = function(k) {
                if (!k) return null;
                try {
                    if (k.moatHostileIframe) return null;
                    var e = k.getAttribute("src");
                    if (e && e.slice && "http" === e.slice(0, 4) && b.a.x(e) != b.a.x(F.location.toString())) return k.moatHostileIframe = !0, null;
                    var c = k && (k.contentDocument || k.contentWindow && k.contentWindow.document);
                    if (c && "string" === typeof c.location.toString()) return c;
                    k.moatHostileIframe = !0;
                    return null
                } catch (h) {
                    return k.moatHostileIframe = !0, null
                }
            };
            b.f.b = function(k, e) {
                e = e || b.a.z(k);
                try {
                    return e &&
                        e.frameElement
                } catch (c) {
                    return !1
                }
            };
            b.f.e = function(k, e) {
                var c;
                b.a.forEach(k.getElementsByTagName("iframe"), function(b) {
                    if (b && b.contentWindow && b.contentWindow == e) return c = b, !1
                });
                return c
            };
            b.f.f = function(k) {
                if (k = b.f.b(k)) try {
                    return k.parentNode
                } catch (e) {}
                return null
            };
            b.f.g = function(k, e) {
                if (!k) return !1;
                var c = 0,
                    h = [];
                for (e = e || 10; c < e;)
                    if (c++, k = b.f.b(k)) h.push(k);
                    else return h
            };
            b.f.c = function(k, e) {
                if (!k) return !1;
                var c = 0,
                    h = [k],
                    g;
                for (e = e || 10; c < e;) {
                    c++;
                    try {
                        if (k = (g = k.frameElement) && b.a.z(g), g && k && !b.f.h(k)) h.push(k);
                        else return h
                    } catch (d) {
                        break
                    }
                }
                return h
            };
            b.f.i = function(k, e, c) {
                function h(c, d, e) {
                    var p = [];
                    c && p.push(c);
                    e = e || 0;
                    if (10 < e || !c || !c.frames) return p;
                    var v;
                    try {
                        v = isNaN(c.frames.length) ? 100 : c.frames.length
                    } catch (z) {
                        v = 100
                    }
                    for (var m = 0; m < v; m++) try {
                        try {
                            if (void 0 == c.frames[m]) break
                        } catch (z) {
                            break
                        }
                        d && !b.f.j(c.frames[m]) ? p.push(c.frames[m]) : p = p.concat(h(c.frames[m], d, e + 1))
                    } catch (z) {
                        break
                    }
                    return p
                }
                return h(k, e, c)
            };
            b.f.k = function(b, e) {
                e = "number" == typeof e && 0 < e ? e : 15;
                var c = [],
                    h;
                if (b) {
                    h = b.top;
                    for (var g = 0; g < e; g++)
                        if ((b =
                                b.parent) && b != b.top) c.push(b);
                        else break;
                    c.push(h)
                }
                return c
            };
            b.f.l = [];
            b.f.j = function(k) {
                for (var e, c = 0, h = b.f.l.length; c < h; c++) b.f.l[c].win == k && (e = b.f.l[c]);
                if (!e) {
                    e = {
                        win: k,
                        friendly: !1
                    };
                    try {
                        k.document && (e.friendly = !0)
                    } catch (g) {}
                }
                return e.friendly
            };
            b.f.m = function(k, e, c) {
                k = b.f.c(k).pop();
                k = b.f.i(k, !0);
                for (var h = 0, g = k.length; h < g; h++)
                    if (k[h] == e) {
                        if (c && e.parent && b.f.h(e.parent)) break;
                        return !0
                    }
                return !1
            };
            b.f.h = function(b) {
                try {
                    var e = typeof b.location.toString;
                    if ("undefined" === e || "unknown" === e) return !0;
                    var c =
                        typeof b.document;
                    if ("undefined" === c || "unknown" === c) return !0;
                    var h = b.innerWidth || b.document.documentElement.clientWidth || b.document.body.clientWidth || 0;
                    return "number" !== typeof(b.screenX || b.screenLeft || 0) || "number" !== typeof h ? !0 : !1
                } catch (g) {
                    return !0
                }
            };
            b.f.a = function() {
                if (b.c.b) return window.top;
                for (var k = 0, e = window; 50 > k;) {
                    k++;
                    if (e === window.top || b.f.h(e.parent)) break;
                    e = e.parent
                }
                return e
            }
        })(r);
        (function(b) {
            function k(b) {
                return function() {
                    var e = !1;
                    return function(g) {
                        try {
                            return b && b.apply ? b.apply(null,
                                arguments) : b(g)
                        } catch (z) {
                            if (!e) {
                                e = !0;
                                var d = (new x).getTime();
                                window["Moat#ETS"] || (window["Moat#ETS"] = d);
                                window["Moat#EMC"] || (window["Moat#EMC"] = 0);
                                var w = 36E5 <= d - window["Moat#ETS"],
                                    p = "";
                                try {
                                    p = b.toString()
                                } catch (l) {
                                    p = "failed"
                                }
                                p = z.name + " in closure (cb): " + z.message + ", stack=" + z.stack + ", \ncb=" + p + "\n";
                                if (!w && 10 > window["Moat#EMC"]) {
                                    window["Moat#EMC"]++;
                                    try {
                                        var v = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("HEALTHLINECONTENT1") + "&ac=1&k=" + escape(p) + "&ar=" + escape("69f9e92-clean") +
                                            "&j=" + escape(document.referrer) + "&cs=" + (new x).getTime(),
                                            m = new Image(1, 1);
                                        m.src = v
                                    } catch (l) {}
                                } else if (w) {
                                    window["Moat#EMC"] = 1;
                                    window["Moat#ETS"] = d;
                                    try {
                                        v = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("HEALTHLINECONTENT1") + "&ac=1&k=" + escape(p) + "&ar=" + escape("69f9e92-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new x).getTime(), m = new Image(1, 1), m.src = v
                                    } catch (l) {}
                                }
                            }
                        }
                    }
                }()
            }
            b.h = {};
            var e = {};
            b.h.a = e;
            b.h.b = function(c, e) {
                if (!c || "string" !== typeof e || !c[e] || c == window) return !1;
                if ("string" === typeof c.nodeName && ("OBJECT" === c.nodeName || "EMBED" === c.nodeName)) {
                    var g = b && b.b && b.b[e];
                    if (g && g !== c[e]) return g
                }
                return !1
            };
            b.h.c = function(c, h, g, d) {
                var w, p = k(g),
                    v;
                c.addEventListener ? (g = "addEventListener", w = "") : (g = "attachEvent", w = "on");
                if (v = b.h.b(c, g)) try {
                    v.call(c, w + h, p, !1)
                } catch (m) {
                    c[g](w + h, p, !1)
                } else if (c && g && c[g]) try {
                    c[g](w + h, p, !1)
                } catch (m) {}!1 !== d && (e[h + d] = p)
            };
            b.h.d = function(c, h, g, d) {
                var w, p = h + d,
                    v;
                if (!c) return delete e[p], !1;
                g = !1 !== d ? e[p] : g;
                c.removeEventListener ? (d = "removeEventListener",
                    w = "") : (d = "detachEvent", w = "on");
                if (v = b.h.b(c, d)) try {
                    v.call(c, w + h, g, !1)
                } catch (m) {
                    c[d](w + h, g, !1)
                } else try {
                    c[d](w + h, g, !1)
                } catch (m) {}
                delete e[p]
            };
            b.h.e = function(b, e) {
                b = k(b);
                var g;
                window && window.setInterval && (g = window.setInterval(b, e), P.push(g));
                return g
            };
            b.h.f = function(b, e) {
                b = k(b);
                var g;
                window && window.setTimeout && (g = window.setTimeout(b, e), N.push(g));
                return g
            };
            b.h.g = function(c, e, g, d) {
                if (!d) return !1;
                d += "";
                D[d] && b.a.a(D[d].tid);
                D[d] = {};
                D[d].callback = k(c);
                D[d].params = e;
                D[d].interval = g;
                D[d].tid = b.h.f(b.h.h(d),
                    g);
                callbacks = null
            };
            b.h.h = function(c) {
                return function() {
                    if (!D || !D[c]) return !1;
                    var e = D[c].callback(D[c].params);
                    if ("boolean" === typeof e && !1 === e) return b.a.a(D[c].tid), D[c] = !1;
                    D[c].tid = b.h.f(b.h.h(c), D[c].interval);
                    time = c = null
                }
            };
            b.h.i = function(c) {
                b.a.a(D[c].tid);
                D[c] = !1
            };
            b.h.j = function() {
                return D
            };
            b.h.k = function(c, e, g, d) {
                var w = 0,
                    p = function() {
                        w += 1;
                        !0 !== c() && (w < e ? b.h.f(p, g) : "function" === typeof d && d())
                    };
                p()
            };
            b.h.l = k
        })(r);
        (function(b) {
            function k() {
                var b = navigator && navigator.userAgent,
                    c = b && b.match(/Chrom(e|ium)\/([0-9]+)\./);
                return (c = 53 <= (c ? parseInt(c[2], 10) : !1)) ? c : b && -1 < b.search("Spotify")
            }
            b.c = {};
            b.c.i = "23";
            b.c.j = "MoatSuperV" + b.c.i;
            b.c.k = 0;
            b.c.l = window && window["Moat#G" + b.c.i] || {};
            b.c.m = "Moat#G" + b.c.i;
            window[b.c.m] = b.c.l;
            b.c.l.a || (b.c.l.a = u.floor(u.random() * u.pow(10, 12)));
            b.c.n = u.floor(u.random() * u.pow(10, 12));
            b.c.o = function() {
                var c;
                return function() {
                    if ("undefined" !== typeof c) return c;
                    c = {
                        isInApp: 0,
                        env: "Not app"
                    };
                    b.a.ai() ? (c.isInApp = 1, c.env = "iOS") : b.a.aj() && (c.isInApp = 1, c.env = "Android");
                    return c
                }
            }();
            b.c.p = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") ||
                window.HTMLVideoElement && window.HTMLVideoElement.prototype && "webkitWirelessVideoPlaybackDisabled" in window.HTMLVideoElement.prototype;
            b.c.q = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            b.c.g = b.a.r();
            b.c.r = (new x).getTime();
            b.c.s = !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
            b.c.f = 0 <= String(Function.prototype.toString).indexOf("[native code]");
            b.c.t = !0;
            b.c.u = !1;
            b.c.v = !0;
            b.c.v = !0;
            var e = function() {
                var c, d, m = function(l) {
                        if ((d = (c = b.a.bk(l, ["mraid"])) && c.isViewable) && "function" ===
                            typeof d) try {
                            return "undefined" !== typeof d()
                        } catch (t) {}
                        return !1
                    },
                    e = function() {
                        var l = {
                                ios: 340,
                                android: 270
                            },
                            t = c && c.getVendor,
                            n = c && c.getVendorVersion,
                            q = "";
                        if (t && "function" === typeof t && n && "function" === typeof n) try {
                            return b.a.ai() ? q = "ios" : b.a.aj() && (q = "android"), "AdMarvel" === t() && n() >= l[q]
                        } catch (d) {}
                        return !1
                    },
                    l = function() {
                        var b = c && c.getVendor && c.getVendor();
                        return q && "AdMarvel" === b
                    },
                    n = document,
                    t = window,
                    g = m(t),
                    q = e(t),
                    h = l(),
                    w = c && c.getVendor && c.getVendor(),
                    k = c && c.getVendorVersion && c.getVendorVersion();
                if (!g &&
                    b.c.w)
                    for (var B = 0; 20 > B && !g; B++) {
                        n = b.f.b(n.body);
                        if (!1 !== n && !n) break;
                        n = (t = b.a.z(n)) && t.document;
                        g = g || m(t);
                        q = q || e(t);
                        h = h || l()
                    }
                b.c.x = function() {
                    return g && t
                };
                b.c.y = function() {
                    return g
                };
                b.c.z = function() {
                    return !1
                };
                b.c.aa = function() {
                    return q
                };
                b.c.ab = function() {
                    return c
                };
                b.c.ac = function() {
                    return h
                };
                b.c.ad = function() {
                    return w
                };
                b.c.ae = function() {
                    return k
                }
            };
            b.c.x = function() {
                e();
                return b.c.x()
            };
            b.c.y = function() {
                e();
                return b.c.y()
            };
            b.c.z = function() {
                e();
                return b.c.z()
            };
            b.c.aa = function() {
                e();
                return b.c.aa()
            };
            b.c.af =
                function() {
                    return b.c.y() && b.c.aa()
                };
            b.c.ab = function() {
                e();
                return b.c.ab()
            };
            b.c.ag = function() {
                if (b.c.y() && b.c.aa() && b.h && b.h.g) {
                    var c = "___mraid_loop___" + (new x).getTime(),
                        d = b.a.bk(b.c.x(), ["mraid", "isViewable"]);
                    d && b.h.g(function() {
                        return d() ? (b.c.z = function() {
                            return !0
                        }, !1) : !0
                    }, {}, 300, c)
                }
            };
            var c = function() {
                var c = function(c) {
                        if (b.c.o().isInApp) return !1;
                        c = b.a.bk(c, ["$sf"]);
                        if (!c) return !1;
                        var l = c.ext;
                        c = l && l.geom;
                        var n = [
                                ["exp", "b", "t", "l", "r"], "self b t l r h w xiv yiv".split(" ")
                            ],
                            d, m = !1;
                        if (l && c && "function" ===
                            typeof c) try {
                            if ((c = c()) && c.win) {
                                if (b.a.forEach(c.win, function(b) {
                                        if (b && ("number" === typeof b || "string" === typeof b) && 0 !== parseFloat(b, 10)) return m = !0, !1
                                    }), !m) return !1
                            } else return !1;
                            if (c.par) return !0;
                            for (var l = 0, e = n.length; l < e; l++) {
                                d = n[l][0];
                                for (var g = 1, h = n[l].length; g < h; g++)
                                    if ("undefined" === typeof c[d][n[l][g]]) return !1
                            }
                            return !0
                        } catch (p) {}
                        return !1
                    },
                    d = window,
                    m = document,
                    e = c(d),
                    l = !(!e && !d.$sf);
                if (!e && b.c.w)
                    for (var n = 0; 20 > n && !e; n++) {
                        m = b.f.b(m.body);
                        if (!1 !== m && !m) break;
                        m = (d = b.a.z(m)) && d.document;
                        e = e || c(d);
                        l = l || e || d.$sf
                    }
                b.c.ah = function() {
                    return e && d
                };
                b.c.ai = function() {
                    return e
                };
                b.c.aj = function() {
                    return l
                }
            };
            b.c.ak = !1;
            b.c.ah = function() {
                c();
                return b.c.ah()
            };
            b.c.aj = function() {
                c();
                return b.c.aj()
            };
            b.c.ai = function() {
                c();
                return b.c.ai()
            };
            var h = function() {
                var c = function(c) {
                        return b.c.o().isInApp ? !1 : b.a.bk(c, ["context", "observeIntersection"]) ? !0 : !1
                    },
                    d = window,
                    m = document,
                    e = c(d),
                    l = !(!e && !d.context);
                if (!e && b.c.w)
                    for (var n = 0; 20 > n && !e; n++) {
                        m = b.f.b(m.body);
                        if (!1 !== m && !m) break;
                        m = (d = b.a.z(m)) && d.document;
                        e = e || c(d);
                        l =
                            l || e || d.context
                    }
                b.c.al = function() {
                    return e && d
                };
                b.c.am = function(b) {
                    "boolean" === typeof b && (e = b);
                    return e
                };
                b.c.an = function() {
                    return l
                }
            };
            b.c.al = function() {
                h();
                return b.c.al()
            };
            b.c.an = function() {
                h();
                return b.c.an()
            };
            b.c.am = function() {
                h();
                return b.c.am()
            };
            var g = function() {
                var c, d = function(l) {
                        return (c = b.a.bk(l, ["amazonmobileadsviewablebridge"])) && "function" === typeof c.addEventListener && "function" === typeof c.getVersion ? !0 : c = !1
                    },
                    m = document,
                    e = window,
                    l = d(e),
                    n = c && 1.1 <= c.getVersion();
                if (!l && b.c.w)
                    for (var t = 0; 20 >
                        t && !l; t++) {
                        m = b.f.b(m.body);
                        if (!1 !== m && !m) break;
                        m = (e = b.a.z(m)) && e.document;
                        l = l || d(e);
                        n = n || c && 1.1 <= c.getVersion()
                    }
                b.c.ao = function() {
                    return l && e
                };
                b.c.ap = function() {
                    return l
                };
                b.c.aq = function() {
                    return n
                };
                b.c.ar = function() {
                    return c
                }
            };
            b.c.ao = function() {
                g();
                return b.c.ao()
            };
            b.c.ap = function() {
                g();
                return b.c.ap()
            };
            b.c.aq = function() {
                g();
                return b.c.aq()
            };
            b.c.ar = function() {
                g();
                return b.c.ar()
            };
            b.c.as = function() {
                return b.c.ap() && b.c.aq()
            };
            b.c.at = !1;
            b.c.au = function() {
                var c;
                return function() {
                    if ("undefined" !== typeof c) return c;
                    var d = b.c.d,
                        e = b.a.ak();
                    if (b.c.d.navigator.standalone) c = !0;
                    else {
                        var g = d.innerWidth / e.w,
                            d = d.innerHeight / e.h,
                            g = !isNaN(g) && isFinite(g) && .9 <= g && 1.1 >= g,
                            d = !isNaN(d) && isFinite(d) && .75 <= d && 1.1 >= d;
                        c = g && d
                    }
                    if (b.c.d.MoatMAK) {
                        if (g = b.c.d.MoatMAK.namespace, "MPUB" === g || "INM" === g) c = !1
                    } else(g = b.c.d) && g.imraid && "function" === typeof g.imraid.getVendorName && "inmobi" === g.imraid.getVendorName() && (c = !1);
                    return c
                }
            }();
            b.c.av = function() {
                var c = b.c.o().isInApp ? 0 : void 0;
                return c = b.c.au() ? b.c.aw() ? 1 : 2 : 0
            };
            b.c.aw = function() {
                var c =
                    b.c.au(),
                    d = b.a.i(),
                    e = b.c.y(),
                    g = "applewebdata:" === window.location.protocol || "data:" === window.location.protocol,
                    d = "-" === d || "" === d.replace(/^\s+|\s+$/gm, "");
                return c && !(d || e || g)
            };
            b.c.ax = function() {
                var c;
                return function() {
                    if ("undefined" !== typeof c) return c;
                    c = b.c.ay();
                    var d = !c && b.c.au();
                    if (b.c.aw() || d) c = !1;
                    b.c.d.MoatMAK && "MPUB" === b.c.d.MoatMAK.namespace && (c = !1);
                    return c
                }
            }();
            b.c.az = function() {
                return b.c.d.webkit && b.c.d.webkit.messageHandlers && b.c.d.webkit.messageHandlers.__z_moat_bridge__
            };
            b.c.ay = function() {
                return !1
            };
            b.c.ba = function() {
                return !1
            };
            b.c.bb = function() {
                return b.c.aw() || b.c.af() || b.c.as() || b.c.au()
            };
            b.c.protocol = b.a.az();
            b.c.bc = "z.moatads.com";
            b.c.e = window != window.parent;
            var d = b.f.h(window.parent);
            b.c.w = b.c.e && !d;
            b.c.bd = b.a.ae();
            b.c.b = d ? !1 : !b.f.h(window.top);
            b.c.d = b.c.b ? window.top : b.c.w ? window.parent : window;
            b.c.d[b.c.m] || (b.c.d[b.c.m] = new b.c.d.Object);
            b.c.o().isInApp && (b.c.b = b.c.bb() || b.c.ax());
            b.c.c = b.c.d.document.referrer || "";
            try {
                b.c.be = b.c.d.history && b.c.d.history.length
            } catch (p) {}
            try {
                if (!b.c.b) {
                    var d =
                        window,
                        w;
                    for (w = 0; 20 > w && d != window.top; w++) d = d.parent;
                    b.c.bf = w
                }
            } catch (p) {}
            b.c.bg = function() {
                var c = b.c.d;
                if (!c) return !1;
                try {
                    var d = c.document && c.document.body,
                        e = c.document && c.document.documentElement
                } catch (l) {}
                try {
                    c.screen && (b.c.bh = c.screen.availWidth, b.c.bi = c.screen.availHeight, b.c.bj = c.screen.width, b.c.bk = c.screen.height)
                } catch (l) {
                    b.c.bh = b.c.bh || 0, b.c.bi = b.c.bi || 0, b.c.bj = b.c.bj || 0, b.c.bk = b.c.bk || 0
                }
                var g = b.c.bl(c);
                b.c.bm = g.width;
                b.c.bn = g.height;
                try {
                    b.c.bo = c.outerWidth || c.document && c.document.body && c.document.body.offsetWidth ||
                        0, b.c.bp = c.outerHeight || c.document && c.document.body && c.document.body.offsetHeight || 0
                } catch (l) {
                    b.c.bo = 0, b.c.bp = 0
                }
                d && e && (b.c.bq = u.max(d.scrollHeight, d.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight), b.c.br = d.scrollTop || e.scrollTop || c.pageYOffset || 0)
            };
            b.c.bl = function(b) {
                var c, d, e, l = 0,
                    n = 0;
                try {
                    (c = b.document, d = c.documentElement, e = c.body, "undefined" !== typeof b.innerWidth) ? (l = b.innerWidth, n = b.innerHeight) : "CSS1Compat" === c.compatMode && 5 !== c.documentMode || !e || "undefined" === typeof e.clientWidth ? d &&
                        "undefined" !== typeof d.clientWidth && (l = d.clientWidth, n = d.clientHeight) : (l = e.clientWidth, n = e.clientHeight)
                } catch (t) {}
                return {
                    width: l,
                    height: n,
                    left: 0,
                    right: l,
                    top: 0,
                    bottom: n
                }
            };
            b.c.bg();
            b.c.bs = function() {
                if (A)
                    for (var b in A)
                        if (A.hasOwnProperty(b)) return !0;
                return !1
            };
            b.c.bt = function(c) {
                var d = !0;
                b.a.forEach(c && c.parentNode && c.parentNode.childNodes, function(c) {
                    if (b.a.s(["DIV", "IFRAME", "A", "EMBED", "OBJECT"], c.nodeName)) return d = !1
                });
                return d
            };
            b.c.bu = function() {
                for (var b in A)
                    if (A.hasOwnProperty(b)) {
                        var c = A[b];
                        if (c && c.aa && c.aa[G]) return !0
                    }
                return !1
            };
            b.c.bv = function() {
                return b.c.b
            };
            b.c.bw = function() {
                return b.c.bx && b.c.bx()
            };
            b.c.by = function() {
                return b.c.ak || b.c.ai && b.c.ai()
            };
            b.c.bz = function() {
                return b.c.am && b.c.am()
            };
            b.c.ca = function() {
                return b.i && b.i.a()
            };
            b.c.cb = function(c) {
                var d = !1;
                b.j && b.j.a && (c && c.periscopeManager ? c.periscopeManager.measurable && (d = !0) : d = !0);
                return d
            };
            b.c.cc = function(c) {
                return b.c.ca() || b.c.cb(c)
            };
            b.c.cd = function(c) {
                return c ? b.c.bv() || b.c.bw() || b.c.by() || b.c.cc(c) || b.c.bz() || b.c.af() || b.c.as() ?
                    !0 : !1 : !1
            };
            b.c.ce = function() {
                b.c.t = !1;
                b.c.u = !0;
                b.c.v = !0
            };
            b.c.cf = !0;
            b.c.cg = function() {
                return b.c.ax() ? !!document.getElementById(APPSCOPE_CONTAINER_ID) : !1
            };
            (function() {
                var c = b.a.bk(window, ["IntersectionObserver"]),
                    d = k(),
                    e = b.c.o().isInApp,
                    g = d && !e && c && "function" === typeof c;
                b.c.bx = function(b) {
                    "boolean" === typeof b && (g = b);
                    return g
                };
                b.c.ch = function() {
                    return g && c
                }
            })();
            b.c.u = k();
            b.c.a = new b.c.d.Image;
            b.c.h = function() {
                if ("undefined" !== typeof b.c.d["Moat#EVA"]) return !0;
                try {
                    if ("undefined" !== typeof b.c.d.eval &&
                        (b.c.d.eval("(function(win){ win['Moat#EVA'] = true; })(window)"), "undefined" !== typeof b.c.d["Moat#EVA"])) return !0
                } catch (c) {}
                return !1
            };
            (function() {
                var c = b.a.cg("context"),
                    d = !b.c.o().isInApp && !(!c || !c.observeIntersection),
                    e, g, l, n, t, h;
                if (!d && window.JSON && "function" === typeof window.JSON.parse && (e = location.hash.match(/amp3pSentinel=((\d+)-\d+)/))) {
                    g = e[1];
                    e = Number(e[2]);
                    l = [];
                    for (n = window; n && n != n.parent; n = n.parent) l.unshift(n.parent);
                    t = l[e];
                    d = h = !!t
                }
                b.c.ci = function() {
                    return d && c
                };
                b.c.am = function(b) {
                    "boolean" ===
                    typeof b && (d = b);
                    return d
                };
                b.c.cj = function() {
                    return {
                        isDfp: h,
                        win: t,
                        sentinel: g
                    }
                };
                b.c.ck = function() {
                    return t && t.postMessage && g ? (t.postMessage({
                        sentinel: g,
                        type: "send-intersections"
                    }, "*"), !0) : !1
                }
            })();
            b.c.cl = function() {
                return !1
            };
            b.c.cm = function() {
                return !1
            };
            b.c.cn = function() {
                return !1
            };
            b.c.co = function() {
                return !1
            };
            b.c.cp = function() {
                return !1
            };
            b.c.cq = function() {
                if (b.k.a !== b.k.b.toString()) return !1;
                var c = b.k.c([28, 33, 43, 40, 38, 30]),
                    d = b.k.c([43, 46, 39, 45, 34, 38, 30]),
                    e = b.k.c([28, 40, 39, 39, 30, 28, 45]);
                return "undefined" !==
                    typeof window[c] && !(window[c] && window[c][d] && window[c][d][e])
            };
            b.c.cr = function() {
                if (b.k.a !== b.k.d.toString()) return !1;
                var c = b.k.c([48, 30, 27, 29, 43, 34, 47, 30, 43]);
                return window && window.navigator && window.navigator[c]
            };
            b.c.cs = function() {
                if (b.k.a !== b.k.e.toString()) return !1;
                var c = b.k.c([26, 37, 30, 43, 45]),
                    d = b.k.c([28, 40, 39, 31, 34, 43, 38]),
                    e = b.k.c([41, 43, 40, 38, 41, 45]);
                return !b.c.o().isInApp && b.c.p && b.c.f && !b.a.bn(window[c], !0) && !b.a.bn(window[d], !0) && !b.a.bn(window[e], !0)
            };
            b.c.ct = function() {
                var b = navigator &&
                    navigator.appVersion && navigator.appVersion.match(/Windows NT (\d\.\d)/);
                return b ? parseFloat(b[1]) : -1
            };
            b.c.cu = function() {
                return 6.1 === b.c.ct()
            };
            b.c.cv = function() {
                return b.c.bx() || b.c.ai() || b.c.ak || b.c.am() || b.c.af() || b.c.as() || !1
            }
        })(r);
        (function(b) {
            function k(b, c, h) {
                function g(b, c) {
                    for (var d in b) b.hasOwnProperty(d) && c.call(null, b[d], d)
                }

                function d(b) {
                    var c = [];
                    g(b, function(b, d) {
                        c.push(d)
                    });
                    return c
                }
                b = c[b];
                b && b.xa.sode || (b.xa.sode = function() {
                    this.desw = {};
                    this.xfgf = [];
                    this.publishing_ = !1;
                    this.xkcd = {};
                    this.edws = []
                }, b.xa.sode.prototype.uxin = function() {
                    var b = function(b) {
                        b = h.max(4, b);
                        return ((1 + h.random()) * h.pow(16, b) | 0).toString(16).substring(0, b)
                    };
                    return function(c) {
                        return b(4) + "-" + b(4) + "-" + b(4) + "-" + b(4)
                    }
                }(), b.xa.sode.prototype.xsza = function(b) {
                    this.desw[b] || (this.desw[b] = {});
                    return this.desw[b]
                }, b.xa.sode.prototype.esgf = function(b, c) {
                    this.publishing_ ? this.xfgf.push(arguments) : this.zaxs.apply(this, arguments)
                }, b.xa.sode.prototype.kswa = function(b, c) {
                    for (var d = this.xkcd[b] || [], e = d && d.length, g = 0; g < e; g++)
                        if (d[g] ===
                            c) return !1;
                    d.push(c);
                    d.sort(function(b, c) {
                        return b - c
                    });
                    this.xkcd[b] = d
                }, b.xa.sode.prototype.aksw = function(b, c) {
                    if (!this.xkcd[b]) return !1;
                    for (var d = this.xkcd[b], e = -1, g = d && d.length, l = 0; l < g; l++)
                        if (d[l] === c) {
                            e = l;
                            break
                        } - 1 != e && d.splice(e, 1);
                    this.xkcd[b] = d
                }, b.xa.sode.prototype._getEventPriorities_ = function(b) {
                    return this.xkcd[b] || []
                }, b.xa.sode.prototype.azsx = function(b, c, d) {
                    d = d || {};
                    var e = d.id || this.uxin(),
                        g;
                    g = d.priority;
                    g = !isNaN(g) && isFinite(g) ? parseInt(g, 10) : 10;
                    for (var l = this.xsza(b), n = 0; l[e] && !d.id && 10 >
                        n;) n++, e = this.uxin();
                    l[g] || (l[g] = {});
                    this.kswa(b, g);
                    d.priority = g;
                    l[g][e] = {
                        cb: c,
                        options: d
                    };
                    return e
                }, b.xa.sode.prototype.zaxs = function(b, c) {
                    if (!this.desw[b]) return !1;
                    this.publishing_ = !0;
                    for (var d = this.edws.slice.call(arguments, 1), e = this._getEventPriorities_(b).slice(0), g = 0, l = e.length; g < l; g++) {
                        var n = e[g],
                            t;
                        for (t in this.desw[b][n]) {
                            var h = this.desw[b][n][t];
                            if (h) {
                                var q;
                                q = h.options.includeId ? [t].concat(d) : d;
                                if (!h.options.condition || h.options.condition && h.options.condition.apply(null, q)) h.options.once &&
                                    this.sxaz(b, {
                                        id: t,
                                        priority: h.options.priority
                                    }), h.cb.apply(null, q)
                            }
                        }
                    }
                    this.publishing_ = !1;
                    for (d = 0; 0 < this.xfgf.length && 500 > d; d++) this.zaxs.apply(this, this.xfgf.pop())
                }, b.xa.sode.prototype.swaq = function(b, c, e) {
                    var g = !1;
                    if (this.desw[b] && this.desw[b][e]) try {
                        delete this.desw[b][e][c], g = !0
                    } catch (h) {}
                    0 === d(this.desw[b][e]).length && this.aksw(b, e);
                    return g
                }, b.xa.sode.prototype.sxaz = function(b, c) {
                    if (!c || "object" != typeof c || !this.desw[b]) return !1;
                    if (c.id && void 0 !== c.priority) return this.swaq(b, c.id, c.priority);
                    if (c.id || c.callback)
                        for (var d = this._getEventPriorities_(b), e = 0, g = d.length; e < g; e++) {
                            var l = d[e];
                            if (c.id && c.callback) {
                                if (this.desw[b][l][c.id] && this.desw[b][l][c.id].cb == c.callback) return this.swaq(b, c.id, l)
                            } else if (c.id) {
                                if (this.desw[b][l][c.id]) return this.swaq(b, c.id, l)
                            } else
                                for (var n in this.desw[b][l])
                                    if (this.desw[b][l][n] && this.desw[b][l][n].cb == c.callback) return this.swaq(b, n, l)
                        }
                    return !1
                }, b.xa.sode.prototype.ugin = function(b) {
                    if ("string" === typeof b)
                        if (this.desw[b]) delete this.desw[b];
                        else return !1;
                    else this.desw = {};
                    return !0
                })
            }
            b.l = {};
            b.l.a = function(e) {
                e.xa.sode || (e.xb == window ? k(b.c.j, window, u) : b.a.cc(k, "'" + b.c.j + "',window, Math", e.xb));
                b.l.b = new e.xa.sode
            }
        })(r);
        (function(b) {
            function k(b, c) {
                function h(b) {
                    var c = k.xb.Math.pow,
                        d = k.xb.Math.random;
                    b = (0, k.xb.Math.max)(4, b);
                    return ((1 + d()) * c(16, b) | 0).toString(16).substring(0, b)
                }

                function g(b) {
                    return function(c) {
                        return b(c)
                    }
                }

                function d(b, c) {
                    if (!b || "string" !== typeof c || !b[c] || b == window) return !1;
                    if ("string" === typeof b.nodeName && ("OBJECT" === b.nodeName || "EMBED" ===
                            b.nodeName)) {
                        var d = document && document.body && document.body[c];
                        if (d && d !== b[c]) return d
                    }
                    return !1
                }
                c[b] = c[b] || {
                    zs: !1,
                    zr: 0,
                    yf: {},
                    h: 0,
                    m: 0,
                    i: {},
                    xa: {},
                    xb: c,
                    xc: {}
                };
                var k = c[b],
                    p = {};
                k.xc.esde = function(b) {
                    window && window.clearTimeout && window.clearTimeout(b)
                };
                k.xc.ynds = function(b, c, e, l) {
                    var n, t = g(e),
                        h;
                    b.addEventListener ? (e = "addEventListener", n = "") : (e = "attachEvent", n = "on");
                    if (h = d(b, e)) try {
                        h.call(b, n + c, t, !1)
                    } catch (q) {
                        b[e](n + c, t, !1)
                    } else if (b && e && b[e]) try {
                        b[e](n + c, t, !1)
                    } catch (q) {}!1 !== l && (p[c + l] = t)
                };
                k.xc.engn = function(b,
                    c, e, l) {
                    var n, t = c + l,
                        g;
                    if (!b) return delete p[t], !1;
                    e = !1 !== l ? p[t] : e;
                    b.removeEventListener ? (l = "removeEventListener", n = "") : (l = "detachEvent", n = "on");
                    if (g = d(b, l)) try {
                        g.call(b, n + c, e, !1)
                    } catch (q) {
                        b[l](n + c, e, !1)
                    } else try {
                        b[l](n + c, e, !1)
                    } catch (q) {}
                    delete p[t]
                };
                k.xc.exde = function(b, c) {
                    b = g(b);
                    var d;
                    window && window.setTimeout && (d = window.setTimeout(b, c));
                    return d
                };
                k.xc.exae = function(b, c, d) {
                    return function() {
                        c.apply(d || null, b.concat(b.slice.call(arguments)))
                    }
                };
                k.xc.uxin = function() {
                    return h(4) + "-" + h(4) + "-" + h(4) + "-" +
                        h(4)
                };
                k.xc.twer = function(b, c) {
                    k && (k.yf || (k.yf = {}), k && k.yf && (k.yf[c] ? k.yf[c].push(b) : k.yf[c] = [b]))
                }
            }
            b.m = {};
            b.m.a = function(e) {
                var c = b.m.b(e),
                    h = !1;
                c || (c = b.m.c(e), h = !0);
                b.m.d(c);
                window[b.c.j] = c;
                b.l.a(c);
                h && (c.swde = new c.xa.sode);
                b.l.b.azsx("adKilled", b.m.e);
                b.l.b.azsx("allLocalAdsKilled", b.m.f, {
                    once: !0
                });
                return c
            };
            b.m.f = function() {
                b.l.b.sxaz("adKilled", {
                    callback: b.m.e
                });
                b.m.g(y)
            };
            b.m.e = function(e) {
                if (y) {
                    try {
                        var c = y.yf[b.c.l.a];
                        if (c) {
                            var h = b.a.indexOf(c, e.yg); - 1 < h && c.splice(h, 1)
                        }
                    } catch (g) {}
                    b.m.g(y)
                }
            };
            b.m.h = function(e, c) {
                var h = b.m.b(b.c.d);
                h && h.xc.twer(e, c)
            };
            b.m.g = function(e) {
                var c = !1,
                    h = !1,
                    g = 0;
                try {
                    e.yf[b.c.l.a] && (h = 0 === e.yf[b.c.l.a].length), b.a.forEach(e.yf, function(b) {
                        0 < b.length && g++
                    }), 0 === g && (c = !0)
                } catch (d) {}
                h && e.swde.esgf("allAdsInWindowKilled", b.c.l.a);
                c && (b.l.b.sxaz("adKilled", {
                    callback: b.m.e
                }), b.l.b.sxaz("allLocalAdsKilled", {
                    callback: b.m.f
                }), e.swde.esgf("allAdsKilled"))
            };
            b.m.c = function(e) {
                e == window ? k(b.c.j, window) : b.a.cc(k, "'" + b.c.j + "',window", e);
                return b.m.b(e)
            };
            b.m.d = function(b) {
                if (!b.alreadyTrackingPage) {
                    var c = {};
                    b.alreadyTrackingPage = function(b) {
                        return c.hasOwnProperty(b)
                    };
                    b.lockPageTracking = function(b) {
                        c[b] = 1
                    };
                    b.unlockPageTracking = function(b) {
                        delete c[b]
                    }
                }
            };
            b.m.b = function(e) {
                try {
                    return e = e || b.c.d, e[b.c.j]
                } catch (c) {
                    return null
                }
            };
            b.m.i = function(e) {
                var c = b.m.b();
                c && (c.i[e] = !0)
            }
        })(r);
        var y = r.m.a(r.c.d),
            Ba = r.c.w,
            ra = r.c.b,
            Q = r.a.ae(),
            sa = r.c.r,
            F = r.c.d;
        if (r.a.al() || r.a.am()) return !1;
        (function(b) {
            function k(b, c, h) {
                var g = c[b];
                g && g.xa.txae || (g.xa.txae = function(b, c) {
                    this.sxdc = g.xc.uxin();
                    this.cdxs = b;
                    this.xscd = {};
                    this.swde = c;
                    var e = this,
                        h = this.swde.azsx("allAdsInWindowKilled", function(b) {
                            g.dcsx.engn({
                                listenerName: "unloadFn" + b
                            });
                            g.dcsx.engn({
                                listenerName: "beforeunloadFn" + b
                            })
                        });
                    this.swde.azsx("allAdsKilled", function() {
                        e.swde.sxaz("allAdsInWindowKilled", {
                            id: h
                        });
                        g.dcsx && (g.dcsx.aqsw(), g.zs = !1, g.xz = !1, g.dcsx = !1)
                    }, {
                        once: !0
                    })
                }, g.xa.txae.prototype.wsed = function(b, c, e, h, m) {
                    this.xscd[h] || (this.xscd[h] = {});
                    this.xscd[h].evt = c;
                    this.xscd[h].target = b;
                    this.xscd[h].periodic = !0;
                    var k;
                    k = g.xc.exae([this], function(l, n) {
                        g.xc.engn(b,
                            c, null, h);
                        if (l.xscd[h]) {
                            l.xscd[h].tid && g.xc.esde(l.xscd[h].tid);
                            l.xscd[h].tid = g.xc.exde(function() {
                                l.xscd[h].tid = null;
                                g.xc.ynds(b, c, k, h)
                            }, m);
                            try {
                                l.swde.zaxs(e, n)
                            } catch (t) {}
                        }
                    });
                    g.xc.ynds(b, c, k, h)
                }, g.xa.txae.prototype.wsqa = function(b) {
                    this.xscd[b] && (g.xc.esde(this.xscd[b].tid), g.xc.engn(this.xscd[b].target, this.xscd[b].evt, null, b), delete this.xscd[b])
                }, g.xa.txae.prototype.qaws = function() {
                    this.wsed(this.cdxs, "scroll", "scroll", "globalScrollevent" + this.sxdc, 1E3);
                    var b = this.cdxs.document.documentElement;
                    this.wsed(b, "mousedown", "mouseEvent", "globalMouseDown" + this.sxdc, 1E3);
                    this.wsed(b, "mouseover", "mouseEvent", "globalMouseOver" + this.sxdc, 1E3);
                    this.wsed(b, "mousemove", "mouseEvent", "globalMouseMove" + this.sxdc, 5E3);
                    this.wsed(this.cdxs, "mousewheel", "mouseEvent", "globalMouseWheel" + this.sxdc, 5E3);
                    this.wsed(this.cdxs, "DOMMouseScroll", "mouseEvent", "globalMouseScroll" + this.sxdc, 5E3);
                    this.wsed(b, "touchstart", "mouseEvent", "globalTouchStartEvent" + this.sxdc, 1E3);
                    this.wsed(b, "keydown", "keyboardEvent", "globalKeyboardEvent" +
                        this.sxdc, 1E3)
                }, g.xa.txae.prototype.aqsw = function() {
                    for (var b in this.xscd) this.engn({
                        listenerName: b
                    })
                }, g.xa.txae.prototype.ynds = function(b, c, e, h) {
                    if (!this.xscd[h]) {
                        this.xscd[h] = {};
                        this.xscd[h].evt = c;
                        this.xscd[h].target = b;
                        var m;
                        m = g.xc.exae([this], function(b, c) {
                            b.xscd[h] && b.swde.zaxs(e, c)
                        });
                        g.xc.ynds(b, c, m, h)
                    }
                }, g.xa.txae.prototype.engn = function(b) {
                    function c(b, d) {
                        b.xscd[d].periodic ? b.wsqa(d) : (g.xc.engn(b.xscd[d].target, b.xscd[d].evt, null, d), delete b.xscd[d])
                    }
                    var e = b.target && b.evt,
                        h = b.target && !b.evt,
                        m = b.all;
                    if (b.listenerName) this.xscd[b.listenerName] && c(this, b.listenerName);
                    else if (e)
                        for (var k in this.xscd)(e = this.xscd[k]) && e.evt == b.evt && e.target == b.target && c(this, k);
                    else if (h)
                        for (k in this.xscd)(e = this.xscd[k]) && e.target == b.target && c(this, k);
                    else if (m)
                        for (k in this.xscd)(e = this.xscd[k]) && c(this, k)
                })
            }
            b.n = {};
            b.n.a = function(e) {
                e && (e.xa.txae || (e.xb == window ? k(b.c.j, window, u) : b.a.cc(k, "'" + b.c.j + "',window, Math", e.xb)), e.zs || (e.dcsx = new e.xa.txae(b.c.d, e.swde), e.zs = !0))
            };
            b.l.b.azsx("modulesReady",
                b.n.a, {
                    once: !0
                });
            b.l.b.azsx("startAdTracking", function(e) {
                y && y.zs && !y.xz && (y.dcsx ? (y.xz = !0, y.dcsx.qaws()) : b.n.a(y), b.focus.setFocusListeners())
            })
        })(r);
        (function(b) {
            function k(b, c, d) {
                b.IR5.MIN[d] = u.min(c, b.IR5.MIN[d]) || c || 1;
                b.IR5.MAX[d] = u.max(c, b.IR5.MAX[d]) || c
            }

            function e(b, c) {
                c.be = u.max("undefined" !== typeof c.be ? c.be : 0, b - c.bf);
                "undefined" === typeof c.by && 500 <= c.be && (c.by = c.bk)
            }

            function c(c) {
                c.az === b.o.a.d.a ? c.az = b.o.a.d.b : c.az === b.o.a.d.b && (c.az = b.o.a.d.a)
            }

            function h(c) {
                c.ba === b.o.a.d.a ? c.ba = b.o.a.d.b :
                    c.ba === b.o.a.d.b && (c.ba = b.o.a.d.a)
            }

            function g(c) {
                c.ax === b.o.a.b.a ? c.ax = b.o.a.b.b : c.ax === b.o.a.b.b && (c.ax = b.o.a.b.a)
            }

            function d(c) {
                c.ay === b.o.a.c.a ? c.ay = b.o.a.c.b : c.ay === b.o.a.c.b && (c.ay = b.o.a.c.a)
            }

            function w(b, c) {
                "undefined" === typeof c.bk && (c.bk = 0);
                c.bk += b - c.bo;
                c.bo = b
            }

            function p(b, c) {
                "undefined" === typeof c.bl && (c.bl = 0);
                c.bl += b - c.bp;
                c.bp = b
            }

            function v(b, c) {
                "undefined" === typeof c.bg && (c.bg = 0);
                "undefined" === typeof c.bc && (c.bc = 0);
                c.bu = b - c.bs;
                c.bu > c.bc && (c.bc = c.bu);
                c.bg += b - c.bq;
                500 <= c.bc && "undefined" ===
                    typeof c.bw && (c.bk += b - c.bo, c.bw = c.bk);
                c.bq = b
            }

            function m(b, c) {
                "undefined" === typeof c.bh && (c.bh = 0);
                "undefined" === typeof c.bd && (c.bd = 0);
                c.bv = b - c.bt;
                c.bv > c.bd && (c.bd = c.bv);
                c.bh += b - c.br;
                500 <= c.bd && "undefined" === typeof c.bx && (c.bl += b - c.bp, c.bx = c.bl);
                c.br = b
            }
            b.o = {};
            b.o.a = {};
            b.o.a.a = {};
            b.o.a.a.a = 0;
            b.o.a.a.b = 1;
            b.o.a.b = {};
            b.o.a.b.a = 0;
            b.o.a.b.b = 1;
            b.o.a.c = {};
            b.o.a.c.a = 0;
            b.o.a.c.b = 1;
            b.o.a.d = {};
            b.o.a.d.a = 0;
            b.o.a.d.b = 1;
            b.o.a.e = {};
            b.o.a.e.a = 0;
            b.o.a.e.b = 1;
            b.o.a.f = {};
            b.o.a.f.a = 0;
            b.o.a.f.b = 1;
            b.o.a.f.c = 2;
            b.o.b = function(b) {
                k(b,
                    b.aj, "x");
                k(b, b.ak, "y");
                b.IR5.AREA = (b.IR5.MAX.x - b.IR5.MIN.x) * (b.IR5.MAX.y - b.IR5.MIN.y)
            };
            b.o.c = function(c) {
                function l() {
                    500 <= (new x).getTime() - na && (b.o.d({
                        type: "park"
                    }, c), clearInterval(t), c.au = b.o.a.a.a)
                }
                var d = c.au;
                if (d === b.o.a.a.a) {
                    na = (new x).getTime();
                    var t = b.h.e(l, 50);
                    c.au = b.o.a.a.b
                } else d === b.o.a.a.b && (na = (new x).getTime())
            };
            b.o.e = function(c) {
                function l() {
                    3E3 <= (new x).getTime() - oa && (b.o.f({
                        type: "park"
                    }, c), clearInterval(t), c.av = b.o.a.a.a)
                }
                var d = c.av;
                if (d === b.o.a.a.a) {
                    oa = (new x).getTime();
                    var t =
                        b.h.e(l, 50);
                    c.av = b.o.a.a.b
                } else d === b.o.a.a.b && (oa = (new x).getTime())
            };
            b.o.g = function(d, l) {
                var n = d.type;
                if (l.az === b.o.a.d.a) {
                    if ("mouseover" === n || "mousemove" === n) l.bo = (new x).getTime(), c(l)
                } else if (l.az === b.o.a.d.b) {
                    "mousemove" === n && w((new x).getTime(), l);
                    if ("mouseout" === n || "blur" === n) w((new x).getTime(), l), c(l);
                    "scooper" === n && w((new x).getTime(), l)
                }
            };
            b.o.h = function(c, l) {
                var d = c.type;
                if (l.ba === b.o.a.d.a) {
                    if ("mouseover" === d || "mousemove" === d) l.bp = (new x).getTime(), h(l)
                } else if (l.ba === b.o.a.d.b) {
                    "mousemove" ===
                    d && p((new x).getTime(), l);
                    if ("mouseout" === d || "blur" === d) p((new x).getTime(), l), h(l);
                    "scooper" === d && p((new x).getTime(), l)
                }
            };
            b.o.d = function(c, l) {
                if (2 != l.an) {
                    var d = c.type;
                    if (l.ax === b.o.a.b.a) {
                        if ("mouseover" === d || "mousemove" === d) l.bq = (new x).getTime(), l.bs = (new x).getTime(), g(l)
                    } else l.ax === b.o.a.b.b && ("mousemove" !== d && "mouseout" !== d || v((new x).getTime(), l), "park" === d && v((new x).getTime() - 500, l), "mouseout" !== d && "park" !== d || g(l))
                }
            };
            b.o.f = function(c, l) {
                if (2 != l.an) {
                    var e = c.type;
                    if (l.ay === b.o.a.c.a) {
                        if ("mouseover" ===
                            e || "mousemove" === e) l.br = (new x).getTime(), l.bt = (new x).getTime(), d(l)
                    } else l.ay === b.o.a.c.b && ("mousemove" !== e && "mouseout" !== e || m((new x).getTime(), l), "park" === e && m((new x).getTime() - 3E3, l), "mouseout" !== e && "park" !== e || d(l))
                }
            };
            b.o.i = function(c, l) {
                var d = c.type;
                if (l.bb == b.o.a.e.a) {
                    if ("mouseover" == d || "mousemove" == d) l.bf = (new x).getTime(), l.bb = b.o.a.e.b
                } else l.bb == b.o.a.e.b && ("mouseout" == d ? (e((new x).getTime(), l), l.bb = b.o.a.e.a) : "mousemove" != d && "scooper" != d || e((new x).getTime(), l))
            }
        })(r);
        (function(b) {
            function k(c) {
                b.focus.pageIsPrerendered() ||
                    b.h.d(document, v, k, "pr")
            }

            function e(b) {
                "undefined" == typeof d && (d = b)
            }
            b.focus = {};
            var c = navigator.userAgent,
                c = -1 < c.indexOf("Safari") && -1 == c.indexOf("Chrome") && -1 == c.indexOf("Chromium") && !b.a.ae(),
                h = b.a.r() && !b.a.ae(),
                g = "undefined" !== typeof document.hasFocus,
                d, w = {
                    visible: 0,
                    hidden: 1,
                    prerender: 2
                },
                p, v, m, z;
            "undefined" !== typeof document.hidden ? (p = "hidden", v = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (p = "mozHidden", v = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (p = "msHidden",
                v = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (p = "webkitHidden", v = "webkitvisibilitychange");
            for (var l = ["v", "mozV", "msV", "webkitV"], n = 0; n < l.length; n++) {
                var t = l[n] + "isibilityState";
                if ("undefined" !== typeof document[t]) {
                    m = t;
                    break
                }
            }
            z = "undefined" !== typeof p;
            var L, q;
            "undefined" !== typeof window.requestAnimationFrame ? L = "requestAnimationFrame" : "undefined" !== typeof window.webkitRequestAnimationFrame && (L = "webkitRequestAnimationFrame");
            q = c && "string" == typeof L && !z;
            var E = (new x).getTime();
            q && function B() {
                E = (new x).getTime();
                window[L](B)
            }();
            b.focus.getFocusMethod = function() {
                return d
            };
            b.focus.visibilitychange = v;
            b.focus.setFocusListeners = function() {};
            b.focus.getQueryString = function(b) {
                b = {};
                b.em = d;
                I && (b.eo = 1);
                "undefined" != typeof m && (b.en = w[document[m]]);
                return b
            };
            b.focus.supportsPageVisAPI = function() {
                return z
            };
            b.focus.checkFocus = function() {
                if (b.focus.supportsPageVisAPI()) return e(0), !document[p];
                if (q) return e(1), 100 > (new x).getTime() - E;
                if (h && g) return e(2), document.hasFocus();
                e(3);
                return !0
            };
            _lastFocusState = !1;
            b.focus.pageIsVisible = function() {
                var c = b.focus.checkFocus();
                if (_lastFocusState != c && y && y.swde) try {
                    y.swde.zaxs("focusStateChange", c)
                } catch (l) {}
                return _lastFocusState = c
            };
            b.focus.pageIsPrerendered = function() {
                return "undefined" !== typeof m ? "prerender" == document[m] : !1
            };
            b.focus.pageIsVisible();
            b.focus.pageIsPrerendered() && (b.h.c(document, v, k, "pr"), b.l.b.azsx("allLocalAdsKilled", function() {
                b.h.d(document, v, k, "pr")
            }, {
                once: !0
            }));
            var I = b.focus.pageIsPrerendered()
        })(r);
        (function(b) {
            function k(b,
                c, d) {
                this.collapsedEl = b;
                this.expandedURL = this.expandedEl = null;
                this.expandedIsOpen = !1;
                this.adNum = c;
                this.configIndex = d
            }

            function e(l, d) {
                var t = m[d];
                if (!0 !== t.findingExpanded) {
                    t.findingExpanded = !0;
                    var e = function() {
                            t.findingExpanded = !1
                        },
                        q = A[d].aa;
                    b.h.k(function() {
                        var t = l.findExpanded(q);
                        if (t) return b.s.c(t, d, c, !1, e), !0
                    }, 5, 500, e)
                }
            }

            function c(b, c, t, e) {
                b[J] = e;
                b[G] = !0;
                c = A[e];
                e = m[e];
                e.expandedIsOpen = !0;
                d(b, c);
                e.findingExpanded = !1;
                return !0
            }

            function h(b, c) {
                d(b.collapsedEl, A[b.adNum], !0);
                b.expandedIsOpen = !1;
                c ||
                    (b.expandedEl && (b.expandedEl[J] = void 0, b.expandedEl[G] = void 0), b.expandedEl = null)
            }

            function g(b, c, t, e) {
                if (!b) return !1;
                b[J] = e;
                b[G] = !0;
                m[e].expandedIsOpen = !1;
                d(b, A[e]);
                return !0
            }

            function d(c, d, t) {
                b.r.b(d, "remove");
                !0 === t && d.aa && (d.aa[J] = void 0, d.aa[G] = void 0);
                !d.hasIframeListener && c.tagName && "iframe" === c.tagName.toLowerCase() && (d.hasIframeListener = !0);
                d.components && d.components.splice(0, 1, c);
                d.aa = c;
                b.l.b.zaxs("adElementUpdate");
                b.a.bs(d.aa);
                b.r.b(d);
                d.periscopeManager && d.periscopeManager.rebuildPixelTargets(c,
                    c.parentNode)
            }

            function w(c, d, t) {
                t = t || {};
                var e = c.getElementsByTagName("div");
                t.inclSearchableEl && (e = b.a.bb(e), e.push(c));
                for (c = 0; c < e.length; c++) {
                    var q = e[c];
                    if (q.id.match(d) && (t.anySize || b.a.ao(q))) return q
                }
            }

            function p(d, e) {
                var t = [d[0]],
                    w = [d[1]],
                    q = d[2],
                    E = d[3] && [d[3]],
                    p = d[4] && [d[4]],
                    v = d[5] && [d[5]],
                    z = d[6],
                    U = d[7],
                    r = !1,
                    K = !1,
                    u = !1,
                    y = !1,
                    x = !1,
                    ga = !1,
                    F = !1,
                    D = !1,
                    J = !1,
                    ha = !1,
                    V = !1,
                    R = !1,
                    Y = !1;
                q && (b.a.s(q, "checkHiddenStyles") && (r = !0), b.a.s(q, "noInitialValidation") && (K = !0), b.a.s(q, "noLoopValidation"), b.a.s(q, "noCollapseValidation") &&
                    (u = !0), b.a.s(q, "runWithoutExpand") && (y = !0), b.a.s(q, "collapseUnloads") && (x = !0), b.a.s(q, "expandUnloads") && (ga = !0), b.a.s(q, "useIsFoundAdKnown") && (F = !0), b.a.s(q, "setCollapseProxyInLoop") && (D = !0), b.a.s(q, "setExpandProxyInLoop") && (J = !0), b.a.s(q, "findExpandInLoop") && (y = ha = !0), b.a.s(q, "addExpandTag") && (V = !0), b.a.s(q, "setIframeAssetType") && (R = !0), b.a.s(q, "preferCollapse") && (Y = !0));
                e.push({
                    isFoundAdKnown: function(c, d, l) {
                        if (!F || !c) return !1;
                        if (z && U) {
                            if ((c = (c = A[d].ao) && c[z]) && !b.a.s(U, c)) return !1
                        } else if (b.q.a(t,
                                c)[0]) {
                            if (y) return m[d] = new k(c, d, l), m[d].collapsedQuery = t, m[d].expandedQuery = w, m[d].searchableEl = c, m[d].checkHiddenStyles = r, m[d].collapseUnloads = x, m[d].expandUnloads = ga, m[d].expandedSelector = E, m[d].collapseProxyEl = p, m[d].expandProxyEl = v, m[d].collapseUnloads = x, m[d].setCollapseProxyInLoop = D, m[d].setExpandProxyInLoop = J, m[d].findExpandInLoop = ha, m[d].addExpandTag = V, m[d].setIframeAssetType = R, m[d].preferCollapse = Y, p && b.q.b(p, A[d], c), !0;
                            var e = b.q.a(w, c)[0];
                            if (e && (K || b.a.ap(e))) return m[d] = new k(c, d, l), m[d].collapsedQuery =
                                t, m[d].expandedQuery = w, m[d].searchableEl = c, m[d].checkHiddenStyles = r, m[d].collapseUnloads = x, m[d].expandUnloads = ga, m[d].expandedSelector = E, m[d].expandedEl = e, m[d].collapseProxyEl = p, m[d].expandProxyEl = v, m[d].collapseUnloads = x, m[d].setCollapseProxyInLoop = D, m[d].setExpandProxyInLoop = J, m[d].findExpandInLoop = ha, m[d].addExpandTag = V, m[d].setIframeAssetType = R, m[d].preferCollapse = Y, p && b.q.b(p, A[d], c), v && b.q.b(v, A[d], e), !0
                        }
                    },
                    onFindAd: function(c, d, l) {
                        if (F) return !1;
                        var e = b.q.a(t, c)[0];
                        if (e && u && !e[G] || b.a.ao(e)) {
                            if (y) return m[d] =
                                new k(e, d, l), m[d].collapsedQuery = t, m[d].expandedQuery = w, m[d].searchableEl = c, m[d].checkHiddenStyles = r, m[d].collapseUnloads = x, m[d].expandUnloads = ga, m[d].expandedSelector = E, m[d].collapseProxyEl = p, m[d].expandProxyEl = v, m[d].collapseUnloads = x, m[d].setCollapseProxyInLoop = D, m[d].setExpandProxyInLoop = J, m[d].findExpandInLoop = ha, m[d].addExpandTag = V, m[d].setIframeAssetType = R, m[d].preferCollapse = Y, e;
                            var q = b.q.a(w, c)[0];
                            if (q && (K || b.a.ap(q))) return m[d] = new k(e, d, l), m[d].collapsedQuery = t, m[d].expandedQuery = w, m[d].searchableEl =
                                c, m[d].checkHiddenStyles = r, m[d].collapseUnloads = x, m[d].expandUnloads = ga, m[d].expandedSelector = E, m[d].expandedEl = q, m[d].collapseProxyEl = p, m[d].expandProxyEl = v, m[d].collapseUnloads = x, m[d].setCollapseProxyInLoop = D, m[d].setExpandProxyInLoop = J, m[d].findExpandInLoop = ha, m[d].addExpandTag = V, m[d].setIframeAssetType = R, m[d].preferCollapse = Y, e
                        }
                    },
                    onNewAd: function(c, d) {
                        c.collapseProxyEl && !c.useIsFoundAdKnown && b.q.b(c.collapseProxyEl, d, d.aa)
                    },
                    onLoop: function(d) {
                        if (d.stopLoop) return !1;
                        var l = !1;
                        d.setIframeAssetType &&
                            (A[d.adNum].hasIframeListener = !0, d.setIframeAssetType = !1);
                        if (d.expandUnloads) {
                            var e = b.q.a(d.expandedQuery, d.searchableEl)[0];
                            d.expandedEl = e
                        }
                        d.findExpandInLoop && !d.expandedEl && (e = b.q.a(d.expandedQuery, d.searchableEl)[0], d.expandedEl = e);
                        if (d.expandedEl && (d.noLoopValidation || b.a.ap(d.expandedEl)))
                            if (d.checkHiddenStyles && (d.expandedEl.style && "hidden" === d.expandedEl.style.visibility || "none" === d.expandedEl.style.display) || "0" === b.a.y(d.expandedEl, "opacity")) l = !1;
                            else if (d.expandedSelector && !b.q.a(d.expandedSelector,
                                d.expandedEl)[0]) l = !1;
                        else if (l = !0, d.setCollapseProxyInLoop && d.collapseProxyEl && !d.collapseProxySet && (d.collapseProxySet = b.q.b(d.collapseProxyEl, A[d.adNum], d.collapsedEl)), d.setExpandProxyInLoop && d.expandProxyEl && !d.expandProxySet && (d.expandProxySet = b.q.b(d.expandProxyEl, A[d.adNum], d.expandedEl)), d.addExpandTag && d.expandedEl.parentNode && (e = H && H.src && H.src.replace(/moatClientLevel4=[^&]*&/, "moatClientLevel4=Expanded&"))) return b.a.bj(e, d.expandedEl.parentNode), d.addExpandTag = !1, d.stopLoop = !0, !1;
                        d.preferCollapse &&
                            b.a.ap(d.collapsedEl) && (l = !1);
                        l && !d.expandedIsOpen ? c(d.expandedEl, "div", null, d.adNum) : !l && d.expandedIsOpen && (d.collapseUnloads ? (l = b.q.a(d.collapsedQuery, d.searchableEl)[0], g(l, null, null, d.adNum)) : h(d, !0))
                    }
                })
            }
            b.p = {};
            b.p.a = "bac";
            var v = [];
            p(["iframe[id^='ebBannerIFrame']", ".../body/#eyeDiv/iframe[id^='ebAd'][id*='panel'][id*='iframe']", ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand", "setCollapseProxyInLoop"], !1, ".../body/#eyeDiv"], v);
            p(["[id^='envIpolli'][name^='envIpolli']", "[id^='envIpolli'][name^='envIpolli']/$[id|envIpolli(\\d+)]/.../body/iframe[id='expIpolli$0_iframe']", ["runWithoutExpand", "expandUnloads", "noCollapseValidation"]], v);
            p(["[id^='OriginPlatformAdUnit'][id$='inpage']", "$[id|OriginPlatformAdUnit-(\\d+)-inpage]/...../[id='OriginPlatformAdUnit-$0-overthepage']", ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand"]], v);
            p(["#cac_adhere", "..../$[id|cmAdFrame__crisp-(.*)]/...../iframe#cacPanelIframe__crisp-$0", ["useIsFoundAdKnown", "findExpandInLoop", "setExpandProxyInLoop"], !1, !1, "iframe/=>/div[id='panelContainerDiv']"], v);
            b.c.ad && b.c.ad() && "AdMarvel" == b.c.ad() &&
                (p(["div#normal", "div#expanded", ["noInitialValidation"]], v), p(["div#normal", "div#resized", ["noInitialValidation"]], v));
            v.push({
                onFindAd: function(c, d, e) {
                    if ((c = b.c.bd ? b.q.a(["div[id^='ptela_unitWrapper']"], c)[0] : b.q.a(["div[id^='ptelaswfholder']"], c)[0]) && b.a.ao(c)) return c
                }
            }, {
                collapsedRe: /ftdiv\d+/,
                expandedRe: /ftin\d+/,
                clipRe: /rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)/,
                onFindAd: function(b, c, d) {
                    var e = w(b, this.collapsedRe);
                    b = w(b, this.expandedRe);
                    if (e && b) return m[c] = new k(e, c, d), m[c].expandedEl = b,
                        e
                },
                onLoop: function(b) {
                    var d = !1,
                        e = b.expandedEl.style.clip,
                        e = e && e.match(this.clipRe);
                    "0" === (e && e[4]) && (d = !0);
                    d && !b.expandedIsOpen ? c(b.expandedEl, "div", null, b.adNum) : !d && b.expandedIsOpen && h(b, !0)
                }
            }, {
                re: /(DIV)_(\d{6})_1_(\d{13})/,
                onFindAd: function(b, c, d) {
                    if (b = w(b, this.re)) return m[c] = new k(b, c, d), b
                },
                findExpanded: function(b) {
                    if (b = b.id.match(this.re))
                        for (var c = [b[3], Number(b[3]) + 1], d = 0; d < c.length; d++) {
                            var e = ["DIV", b[2], "2", c[d]].join("_");
                            if (e = document.getElementById(e)) return e
                        }
                }
            }, {
                re: /pr(flsh)([A-Z0-9]+)/,
                onFindAd: function(c, d, e) {
                    if (b.c.bd) {
                        var g = window.prBnr;
                        if (g && 1 === g.nodeType && b.a.ao(g)) {
                            var q = c && c.innerHTML && c.innerHTML.match(/pradi([A-Z0-9]+)/);
                            if ((q = q && q[1]) && g.id && g.id.match(q) && (c = c.ownerDocument.getElementById("prf" + q))) return m[d] = new k(g, d, e), m[d].uncle = c, g
                        }
                    }
                },
                onLoop: function(b) {
                    var d = !1,
                        e = b.uncle;
                    e && e.children && 1 === e.children.length && (e = e.children[0]) && 1 === e.children.length && (b.expandedEl = e, d = !0);
                    d && !b.expandedIsOpen ? c(b.expandedEl, "div", null, b.adNum) : !d && b.expandedIsOpen && h(b, !0)
                }
            }, {
                re: /pradi([A-Z0-9]+)/,
                onFindAd: function(c, d, e) {
                    var g = c && c.innerHTML && c.innerHTML.match(this.re);
                    if (g) {
                        var q = c.ownerDocument || document;
                        c = q.getElementById("prf" + g[1]);
                        var h;
                        if (c) {
                            var p = c.getElementsByTagName("embed"),
                                w = c.getElementsByTagName("object"),
                                v = c.getElementsByTagName("div");
                            p && p[0] && b.a.ap(p[0]) ? h = p[0] : w && w[0] && b.a.ap(w[0]) ? h = w[0] : v && 0 < v.length && b.a.forEach(v, function(c) {
                                c && "mal-ad-container" === c.id && b.a.ao(c) && (h = c)
                            });
                            !h && c.children && 1 === c.children.length && (p = c.children[0]) && 1 === p.children.length && b.a.ao(p.children[0]) &&
                                (h = p.children[0])
                        }
                        h || (g = q.getElementById("prw" + g[1])) && b.a.ao(g) && (h = g);
                        if (h) return m[d] = new k(h, d, e), m[d].uncle = c, h
                    }
                },
                onNewAd: function(c, d) {
                    c && c.uncle && b.r.a(d, c.uncle)
                }
            }, {
                re: /VwP(\d+)Div/,
                onFindAd: function(c, d, e) {
                    if (c = w(c, this.re)) {
                        var g = c.id.match(this.re);
                        if (g && (g = document.getElementById("VwP" + g[1] + "Div2")) && (g = g.getElementsByTagName("div"), 3 !== g.length && 1 === g.length)) {
                            g = g[0];
                            if (b.a.ao(g)) return g;
                            m[d] = new k(c, d, e);
                            return c
                        }
                    }
                },
                findExpanded: function(c) {
                    if ((c = c.id.match(this.re)) && (c = (c = document.getElementById("VwP" +
                            c[1] + "Div2").getElementsByTagName("div")) && c[0]) && b.a.ao(c)) return c
                }
            });
            v.push({
                onFindAd: function(c, d, e) {
                    if (b.q.a(["script[src*='jetpackdigital']"], c)[0] && (c = b.c.d.document.getElementById("jpsuperheader")) && b.a.ao(c)) {
                        var g = c.getElementsByTagName("object");
                        if (g && 1 === g.length && g[0].id && g[0].id.match("jp_embed")) return g = g[0], m[d] = new k(c, d, e), m[d].expandedEl = g, m[d].bgCheck = g && g.parentNode && g.parentNode.parentNode, c
                    }
                },
                onLoop: function(d) {
                    var e = !1;
                    d.bgCheck.className && d.bgCheck.className.match("background1") &&
                        (e = !0);
                    e && !d.expandedIsOpen ? (c(d.expandedEl, null, null, d.adNum), b.r.b(stage.bgCheck)) : !e && d.expandedIsOpen && h(d, !0)
                }
            });
            v.push({
                isFoundAdKnown: function(c, d, e) {
                    if (c.className && c.className.match("jpplatform")) var g = b.c.d.document.getElementById("jp_overlay"),
                        q = !0;
                    else c.parentNode && c.parentNode.id && "jpd_expfooter" === c.parentNode.id && (g = b.c.d.document.getElementById("jpd_expfooter_overlay"), q = !1);
                    if (g) {
                        var h = b.a.getElementsByClassName("jppanel", "DIV", g);
                        if (h && 0 < h.length) return c = new k(c, d, e), m[d] = c, m[d].overlay =
                            g, m[d].panels = h, m[d].ignoreVideo = q, !0
                    }
                },
                onLoop: function(d) {
                    var e, g = !1;
                    if (d.overlay && d.overlay.style && "-9999px" !== d.overlay.style.top) {
                        if (!d.expandedEl || d.expandedEl && d.expandedEl.style && "-9999px" === d.expandedEl.style.top) d.ignoreVideo ? b.a.forEach(d.panels, function(b) {
                            if (b && b.style && "-9999px" !== b.style.top && 0 === b.getElementsByTagName("video").length) return e = b, !1
                        }) : b.a.forEach(d.panels, function(b) {
                            if (b && b.style && "-9999px" !== b.style.top) return e = b, !1
                        }), e && b.a.ao(e) && (d.expandedEl = e);
                        d.expandedEl && (g = !0)
                    }
                    g && !d.expandedIsOpen ? c(d.expandedEl, "div", null, d.adNum) : !g && d.expandedIsOpen && h(d, !0)
                }
            });
            v.push({
                findCollapsedAd: function(c) {
                    if (!c) return !1;
                    if (c = c.getElementById("eyeDiv")) {
                        var d, e = /ebAd\d+_contractedpanel_asset_.*/i;
                        if ((c = c.getElementsByTagName("object")) && 0 < c.length && (b.a.forEach(c, function(b) {
                                if (b && b.id.match(e)) return d = b, !1
                            }), d)) return d
                    }
                    return !1
                },
                findExpandedAd: function(c) {
                    if (!c) return !1;
                    if (c = c.getElementById("eyeDiv")) {
                        var d, e = /ebAd\d+_expandedpanel\d*_asset_.*/i;
                        if ((c = c.getElementsByTagName("object")) &&
                            0 < c.length && (b.a.forEach(c, function(b) {
                                if (b && b.id.match(e)) return d = b, !1
                            }), d)) return d
                    }
                    return !1
                },
                isAdExpanded: function(b) {
                    return this.findExpandedAd(b) ? !0 : !1
                },
                onFindAd: function(c, d, e) {
                    if (!c || !b.q.a(["div#mmBillboardShim"], c)[0]) return !1;
                    var g = b.c.d && b.c.d.document;
                    c = this.findCollapsedAd(g);
                    g = this.findExpandedAd(g);
                    if (c || g) {
                        if (c && !c[G]) return e = new k(c, d, e), m[d] = e, c;
                        if (g && b.a.ao(g)) return e = new k(g, d, e), m[d] = e, g
                    }
                },
                afterAdStateCreated: function(c) {
                    c.pageDocument = b.c.d.document;
                    c.collapseUnloads = !0
                },
                onLoop: function(b) {
                    var d = this.isAdExpanded(b.pageDocument);
                    !1 === b.expandedIsOpen && d ? (b.expandedEl = this.findExpandedAd(b.pageDocument), c(b.expandedEl, null, null, b.adNum)) : b.expandedIsOpen && 0 == d && (b.collapsedEl = this.findCollapsedAd(b.pageDocument), g(b.collapsedEl, null, null, b.adNum))
                }
            });
            v.push({
                findExpandedAd: function(c) {
                    if (!c) return !1;
                    if (c = c.getElementById("eyeDiv")) {
                        var d, e = /ebad\d+_panel\d*_asset_.*/i;
                        if ((c = c.getElementsByTagName("object")) && 0 < c.length && (b.a.forEach(c, function(b) {
                                if (b && b.id.match(e)) return d =
                                    b, !1
                            }), d)) return d
                    }
                    return !1
                },
                isAdExpanded: function(b) {
                    return this.findExpandedAd(b) ? !0 : !1
                },
                isFoundAdKnown: function(c) {
                    if (!c) return !1;
                    if (c.id && c.id.match("ebRichBannerFlash")) {
                        c = H && H.parentNode && H.parentNode.getElementsByTagName("script");
                        var d = !1;
                        b.a.forEach(c, function(b) {
                            if (b && b.src && b.src.match("ebExpBanner")) return d = !0, !1
                        });
                        if (d) return !0
                    }
                },
                afterAdStateCreated: function(c) {
                    c.pageDocument = b.c.d.document
                },
                onLoop: function(b) {
                    var d = this.isAdExpanded(b.pageDocument);
                    !1 === b.expandedIsOpen && d ? (b.expandedEl =
                        this.findExpandedAd(b.pageDocument), c(b.expandedEl, null, null, b.adNum)) : b.expandedIsOpen && 0 == d && h(b, !0)
                }
            });
            v.push({
                findExpandedAd: function(c) {
                    if (c.expandedEl) return c.expandedEl;
                    var d, e, g;
                    if ("banner" === c.expandType) {
                        e = b.s.a(c.pageDoc.body, b.s.b);
                        for (var q = e.length - 1; 0 <= q; q--)
                            if ((g = e[q].contentWindow) && g.runtimeParams && g.runtimeParams.placementId && g.runtimeParams.clientTimestamp && g.runtimeParams.placementId === c.celtraId && g.runtimeParams.clientTimestamp === c.celtraTimestamp && (d = g.document && g.document.getElementById("celtra-modal")) &&
                                b.a.ao(d)) return c.parentFrame || (c.parentFrame = b.f.f(d)), c.expandedEl = d
                    } else if ("video" === c.expandType) {
                        e = c.pageDoc.getElementsByTagName("video");
                        if (c.adWin && c.adWin.videoContext && c.adWin.videoContext.url) {
                            var h = c.adWin.videoContext.url;
                            b.a.forEach(e, function(b) {
                                if (b && b.src === h) return d = b, !1
                            })
                        } else b.a.forEach(e, function(b) {
                            if (b && b.src && b.src.match && b.src.match("celtra")) return d = b, !1
                        });
                        if (d && b.a.ao(d)) return c.expandedEl = d
                    }
                    return !1
                },
                isAdExpanded: function(c) {
                    var d = this.findExpandedAd(c);
                    return d ?
                        (c = c.parentFrame || b.f.f(d)) && c.style && "none" === c.style.display ? !1 : !0 : !1
                },
                isFoundAdKnown: function(c, d, e) {
                    if (!c) return !1;
                    if (c.id && c.id.match("celtra") || c.className && c.className.match("celtra")) {
                        var g = c.ownerDocument && (c.ownerDocument.defaultView || c.ownerDocument.parentWindow);
                        if (g && g.ExpandableBanner && g.runtimeParams && g.runtimeParams.placementId && g.runtimeParams.clientTimestamp) return c = new k(c, d, e), m[d] = c, m[d].expandType = "banner", m[d].pageDoc = b.c.d.document, m[d].celtraId = g.runtimeParams.placementId,
                            m[d].celtraTimestamp = g.runtimeParams.clientTimestamp, !0;
                        if (g && g.VideoContext) return c = new k(c, d, e), m[d] = c, m[d].expandType = "video", m[d].pageDoc = b.c.d.document, m[d].adWin = g, !0
                    }
                },
                onLoop: function(b) {
                    var d = this.isAdExpanded(b);
                    d && !b.expandedIsOpen ? c(b.expandedEl, "div", null, b.adNum) : !d && b.expandedIsOpen && h(b, !0)
                }
            });
            var m = {};
            b.p.b = function(b) {
                var c = m[b.zr];
                c && (c.collapsedEl = null, c.expandedEl = null, delete m[b.zr])
            };
            b.p.c = function(b) {
                return (b = m[b]) && !0 === b.expandedIsOpen
            };
            b.p.d = function(b) {
                return (b = m[b]) &&
                    !0 === b.collapseUnloads
            };
            b.p.e = function(b, c) {
                b = b.replace(/^on/, "");
                var d = m[c],
                    k = A[c];
                if (d) {
                    var q = v[d.configIndex];
                    if ("mousedown" === b && q.findExpanded && !d.expandedIsOpen) e(q, c);
                    else if ("mouseover" === b && q.onMouseOver && !d.expandedIsOpen) q.onMouseOver(d);
                    else if ("loop" === b && q.onLoop) q.onLoop(d);
                    else if ("departed" === b && d.expandedIsOpen) h(d);
                    else if ("collapseUnloads" === b && d.expandedIsOpen) g(d.collapsedEl, null, null, c);
                    else if ("newad" === b && q.onNewAd) q.onNewAd(d, k)
                }
            };
            b.p.f = function(c, d) {
                for (var e = 0; e < v.length; e++) {
                    var g =
                        v[e],
                        q = g.onFindAd && g.onFindAd(c, d, e);
                    if (q) return b.l.b.azsx("adKilled", b.t.a, {
                        once: !0,
                        condition: function(b) {
                            return b.zr == d
                        }
                    }), m[d] && g.afterAdStateCreated && g.afterAdStateCreated(m[d]), X = g.name, q
                }
            };
            b.p.g = function(c) {
                if (c !== b.p.a && c.aa && c.ao && !m[e])
                    for (var d = c.aa, e = c.ao.adNum, g = 0; g < v.length; g++) {
                        var q = v[g];
                        if (q && q.isFoundAdKnown && q.isFoundAdKnown(d, e, g)) {
                            b.l.b.azsx("adKilled", b.t.a, {
                                once: !0,
                                condition: function(b) {
                                    return b.zr == c.zr
                                }
                            });
                            m[e] || (d = new k(d, e, g), m[e] = d);
                            q.afterAdStateCreated && q.afterAdStateCreated(m[e]);
                            X = q.name;
                            break
                        }
                    }
            };
            b.p.h = function(b) {
                return "IMG" === b.tagName && b.id && b.id.match(/^pradi[0-9A-Z]+$/) && b.onload && "function" === typeof b.onload.toString && b.onload.toString().match(/shockwave/)
            };
            b.p.i = function(c, d) {
                b.p.c(d.zr) && (b.p.d(d.zr) ? b.p.e("collapseUnloads", d.zr) : b.p.e("departed", d.zr), c.shouldKillAd = !1)
            };
            var z = b.l.b.azsx("beforeAdKilled", b.p.i);
            b.l.b.azsx("allLocalAdsKilled", function() {
                b.l.b.sxaz("beforeAdKilled", {
                    id: z
                })
            }, {
                once: !0
            })
        })(r);
        (function(b) {
            function k(c, d, e, g, h) {
                ("remove" === h ? b.h.d : b.h.c)(c,
                    d,
                    function(d) {
                        d = d || this.event;
                        var g = d.currentTarget || c;
                        try {
                            var h = g[J]
                        } catch (m) {
                            h = g[J]
                        }
                        if (h = A[h]) {
                            var l;
                            l = d;
                            var n = g.getBoundingClientRect();
                            l = -1 != l.type.indexOf("touch") ? {
                                x: parseInt(l.changedTouches[0].clientX - n.left, 10),
                                y: parseInt(l.changedTouches[0].clientY - n.top, 10)
                            } : {
                                x: parseInt(l.clientX - n.left, 10),
                                y: parseInt(l.clientY - n.top, 10)
                            };
                            h.aj = l.x;
                            h.ak = l.y;
                            h.dm || (h.cb = 2 == b.focus.getFocusMethod() ? h.counters.laxDwell.tCur : h.counters.strictDwell.tCur, h.dm = 1);
                            e.call(c, d, g, h)
                        }
                    }, g)
            }

            function e(d, e, q) {
                k(d, "click",
                    z, e, q);
                k(d, "mousedown", h, e, q);
                Q ? "mlb.com" === b.a.i() ? b.a.af() || b.a.ag() || k(d, "touchstart", g, e, q) : k(d, "touchstart", g, e, q) : (k(d, "mousemove", c, e, q), k(d, "mouseover", v, e, q), k(d, "mouseout", m, e, q))
            }

            function c(c, d, e) {
                b.l.b.zaxs("mouseEventOnAd", e);
                c = c || window.event;
                d = c.target || c.srcElement;
                if (1 != e.ao.skin || !b.u.a(d, e.adContent, c)) {
                    if (!Q && (e.aj !== e.al || e.ak !== e.am)) {
                        b.o.d(c, e);
                        b.o.f(c, e);
                        b.o.g(c, e);
                        b.o.i(c, e);
                        b.o.h(c, e);
                        b.o.b(e);
                        b.o.c(e);
                        b.o.e(e);
                        0 === e.ar.length && (e.ai = n(e));
                        if (100 > e.ar.length || 100 > e.as.length ||
                            100 > e.at.length) e.ar.push(e.aj), e.as.push(e.ak), e.at.push(b.a.v(e));
                        e.al = e.aj;
                        e.am = e.ak
                    }
                    e.ai !== n(e) && 1 < e.ar.length && l(e, "onMouseMove")
                }
            }

            function h(c, d, e) {
                b.l.b.zaxs("mouseEventOnAd", e);
                c = c || window.event;
                d = c.target || c.srcElement;
                1 == e.ao.skin && b.u.a(d, e.adContent, c) || (d = {
                    e: 2
                }, d.q = e.aq[2]++, d.x = e.aj, d.y = e.ak, b.v.a(e, d), b.p.e(c.type, e.zr))
            }

            function g(c, d, e) {
                b.l.b.zaxs("mouseEvent", e);
                b.l.b.zaxs("mouseEventOnAd", e);
                c = c || window.event;
                d = c.target || c.srcElement;
                if (1 != e.ao.skin || !b.u.a(d, e.adContent, c)) {
                    c = {
                        e: 23
                    };
                    c.q = e.aq[23]++;
                    c.x = e.aj;
                    c.y = e.ak;
                    d = (new x).getTime();
                    if ("undefined" === typeof e.ct) e.ct = d;
                    else {
                        var g = d - e.ct;
                        e.ct = d;
                        e.cu = u.min(e.cu, g) || g
                    }
                    c.bz = void 0;
                    b.v.a(e, c)
                }
            }

            function d(c, d, e) {
                var g;
                if (2 == c.an || c.hasIframeListener) g = !0;
                if (g) {
                    g = d.e;
                    var h = c.ck;
                    h == b.o.a.f.a && 6 === g ? (w(c, 0), c.cl = b.a.v(c), c.ck = b.o.a.f.b) : h == b.o.a.f.b ? 22 === g ? (p(c, d), w(c, e), c.cl = b.a.v(c)) : 7 === g && (1E3 < b.a.v(c) - c.cl ? (clearTimeout(c.cm), d.e = 22, p(c, d), c.cn = 0, c.ck = b.o.a.f.a) : c.ck = b.o.a.f.c) : h == b.o.a.f.c && (6 == g ? (1E3 < b.a.v(c) - c.cl && (clearTimeout(c.cm),
                        c.cn = 0, c.cl = b.a.v(c), w(c, 0)), c.ck = b.o.a.f.b) : 22 == g && (p(c, d), c.ck = b.o.a.f.a, c.cn = 0))
                }
            }

            function w(c, e) {
                if (b.focus.checkFocus()) {
                    var g = 5 > c.cn ? 1E3 : 2 * e,
                        h = {
                            e: 22
                        };
                    c.cm = b.h.f(function() {
                        d(c, h, g)
                    }, g)
                } else d(c, {
                    e: 7
                }, 0)
            }

            function p(c, d) {
                d.q = c.aq[d.e]++;
                d.m = b.a.v(c);
                c.cl = d.m;
                b.v.a(c, d);
                c.cn++
            }

            function v(c, e, g) {
                b.l.b.zaxs("mouseEvent", g);
                b.l.b.zaxs("mouseEventOnAd", g);
                c = c || window.event;
                e = c.target || c.srcElement;
                1 == g.ao.skin && b.u.a(e, g.adContent, c) || (b.o.d(c, g), b.o.f(c, g), b.o.g(c, g), b.o.i(c, g), b.o.h(c, g), d(g, {
                        e: 6
                    },
                    0), b.p.e(c.type, g.zr))
            }

            function m(c, e, g) {
                b.l.b.zaxs("mouseEventOnAd", g);
                c = c || window.event;
                e = c.target || c.srcElement;
                1 == g.ao.skin && b.u.a(e, g.adContent, c) || (b.o.d(c, g), b.o.f(c, g), b.o.g(c, g), b.o.i(c, g), b.o.h(c, g), d(g, {
                    e: 7
                }, 0))
            }

            function z(c, d, e) {
                b.l.b.zaxs("mouseEvent", e);
                b.l.b.zaxs("mouseEventOnAd", e);
                c = c || window.event;
                d = c.target || c.srcElement;
                1 == e.ao.skin && b.u.a(d, e.adContent, c) || (c = {
                    e: 3
                }, c.q = e.aq[3]++, c.x = e.aj, c.y = e.ak, b.v.a(e, c))
            }

            function l(c, d) {
                c.ai = n(c);
                var e = {
                    e: 1
                };
                e.q = c.aq[1]++;
                e.x = c.ar.join("a");
                e.y = c.as.join("a");
                for (var g = b.a.v(c), h = c.at, m = [], l = 0; l < h.length; l++) isNaN(h[l]) || m.push(u.abs(h[l] - g));
                e.c = m.join("a");
                e.m = g;
                b.v.a(c, e);
                c.ar = [];
                c.as = [];
                c.at = []
            }

            function n(c) {
                return u.floor(b.a.v(c) / 1E3)
            }
            b.r = {};
            b.r.c = function(c) {
                b.c.cf && (b.l.b.azsx("adKilled", b.r.d, {
                    once: !0,
                    condition: function(b) {
                        return c.zr == b.zr
                    }
                }), b.r.b(c))
            };
            b.r.b = function(b, c) {
                if (!0 === b.isSkin)
                    for (var d = 0; d < b.elements.length; d++) e(b.elements[d], b.zr + "-" + d, c);
                else e(b.aa, b.zr, c)
            };
            b.r.e = function(c) {
                for (var d in A) A.hasOwnProperty(d) &&
                    (c = A[d]) && (b.o.g({
                        type: "scooper"
                    }, c), b.o.i({
                        type: "scooper"
                    }, c), b.o.h({
                        type: "scooper"
                    }, c), 1 < c.ar.length && c.ai !== n(c) && l(c, "scooper"))
            };
            b.r.a = function(c, d) {
                if (!d || !c) return !1;
                c.proxyAds || (c.proxyAds = []);
                c.proxyAds.push({
                    aa: d,
                    zr: c.zr
                });
                !c.hasIframeListener && d.tagName && "iframe" === d.tagName.toLowerCase() && (c.hasIframeListener = !0);
                d[J] = c.zr;
                b.r.b(c.proxyAds[c.proxyAds.length - 1]);
                return !0
            };
            b.r.d = function(c) {
                b.r.b(c, "remove")
            }
        })(r);
        (function(b) {
            function k(d, e) {
                if (!d) return !1;
                var g, h;
                "number" == typeof d.zr ?
                    (g = d.aa, h = d._calcVideoBasedOnContainer) : g = d;
                h = h ? new b.w.n(g.parentNode, e) : new b.w.n(g, e);
                g = h.height;
                var n = h.width,
                    k = h.calcArea();
                if (0 === k) return {
                    area: k,
                    visibleArea: 0,
                    percv: 0
                };
                var p = c(h),
                    q = p.visibleRect.calcArea(),
                    E = q / k,
                    w;
                a: {
                    var C = p.cumulRect,
                        B = p.cumulRect.getViewportRect();
                    if (0 > C.top && 0 < C.bottom) w = -C.top;
                    else if (0 <= C.top && C.top <= B.height) w = 0;
                    else {
                        w = {
                            yMin: -1,
                            yMax: -1
                        };
                        break a
                    }
                    if (0 <= C.bottom && C.bottom <= B.height) C = C.height;
                    else if (C.bottom > B.height && C.top < B.height) C = C.height - (C.bottom - B.height);
                    else {
                        w = {
                            yMin: -1,
                            yMax: -1
                        };
                        break a
                    }
                    w = {
                        yMin: w,
                        yMax: C
                    }
                }
                return {
                    area: k,
                    visibleArea: q,
                    visibleRect: p.visibleRect,
                    cumulRect: p.cumulRect,
                    percv: E,
                    yMinMax: w,
                    visibleRect: p.visibleRect,
                    elGeo: {
                        elHeight: g,
                        elWidth: n,
                        foldTop: p.cumulRect.top,
                        totalArea: p.parentArea
                    },
                    rect: h.rect
                }
            }

            function e(b, c) {
                for (var d = [], e = 0; e < c.length; e++) d.push(b(c[e]));
                return d
            }

            function c(c) {
                var d, g = b.a.bz(c.el, c.win),
                    g = e(function(c) {
                        return new b.w.n(c)
                    }, g);
                g.unshift(c);
                var h = g.length;
                c = new b.w.n(c.el, b.c.d);
                for (var n = 0; n < h; n++) {
                    var k = g[n];
                    0 === n ? d = k :
                        (d.changeReferenceFrame(k), c.changeReferenceFrame(k));
                    k = k.getViewportRect(n < h - 1 ? g[n + 1] : !1);
                    d = b.w.p(d, k)
                }
                return {
                    visibleRect: d,
                    cumulRect: c,
                    parentArea: g[g.length - 1].calcArea()
                }
            }

            function h(b, c, d, e) {
                b = u.max(b, d);
                c = u.min(c, e);
                return c > b ? [b, c] : [0, 0]
            }

            function g(c, d, e, g) {
                var h = [],
                    k;
                for (k in c) {
                    var p = c[k],
                        p = b.a.bv(p[0], p[1], d),
                        q;
                    if (q = p && p !== e && p[J] !== g) p = (p = b.a.at(p)) && (1 >= p.width || 1 >= p.height) ? !0 : !1, q = !1 === p;
                    q && h.push(k)
                }
                return h
            }

            function d(b) {
                var c = .01 * b.width,
                    d = .01 * b.height;
                return {
                    tl: [b.left + c, b.top + d],
                    m: [b.left + (b.right - b.left) / 2, b.top + (b.bottom - b.top) / 2],
                    br: [b.right - c, b.bottom - d]
                }
            }

            function w(c, h) {
                var k = {
                        corners: [],
                        addCorner: function(c) {
                            var d = this;
                            b.a.forEach(c, function(c) {
                                -1 === b.a.indexOf(d.corners, c) && d.corners.push(c)
                            })
                        }
                    },
                    l = b.f.g(c),
                    l = e(function(d) {
                        var e = new b.w.n(c),
                            g = new b.w.n(d);
                        e.changeReferenceFrame(g);
                        return {
                            rect: e,
                            frame: d,
                            doc: d.ownerDocument
                        }
                    }, l);
                l.unshift({
                    rect: new b.w.n(c),
                    frame: c,
                    doc: c.ownerDocument
                });
                b.a.forEach(l, function(b) {
                    var c = d(b.rect);
                    k.addCorner(g(c, b.doc, b.frame, h))
                });
                return k.corners
            }
            b.w = {};
            var p = b.c.b;
            b.w.a = .5;
            b.w.b = .3;
            b.w.c = 236425;
            b.w.d = .75;
            b.w.e = 6E5;
            b.w.f = 3E5;
            b.w.g = .98;
            b.w.h = void 0;
            b.w.i = function(c, d) {
                d = d || !1;
                return function(e, g) {
                    var h = e.ao.skin ? b.w.j(e, g) : k(e, g);
                    h.isVisible = d ? h.percv > c : h.percv >= c;
                    h.elGeo && (h.elGeo.threshold = c);
                    return h
                }
            };
            b.w.j = function(c, d) {
                if (1 == c.ao.skin) {
                    var e = {},
                        g = b.c.d.scrollY || b.c.d.document.documentElement.scrollTop;
                    if ("width" == b.u.b && b.u.c <= c.adContent && 45 < g || !b.focus.pageIsVisible()) return e.isVisible = !1, e.isFullyVisible = !1, e.percv = 0, e;
                    e.isVisible = !0;
                    e.isFullyVisible = !0;
                    e.isDentsuVisible = !0;
                    e.percv = 1;
                    return e
                }
                if (c.isCompositeAd && c.components && 1 < c.components.length) {
                    e = {
                        area: 0,
                        visibleArea: 0,
                        percv: 0,
                        visibleRect: !1,
                        cumulRect: !1,
                        yMinMax: !1,
                        elGeo: !1,
                        rect: !1,
                        componentResults: []
                    };
                    for (g = 0; g < c.components.length; g++) e.componentResults[g] = k(c.components[g], d), e.area += e.componentResults[g].area, e.visibleArea += e.componentResults[g].visibleArea;
                    e.percv = e.visibleArea / e.area
                } else e = k(c, d);
                var g = e.area >= b.w.e ? b.w.f : e.area * b.w.a,
                    h = b.c.bl(window.top),
                    h = u.max(h.width *
                        h.height, 1E4),
                    g = u.min(g, b.w.d * h);
                e.isVisible = e.visibleArea >= g;
                c.videoIsFullscreen && 0 < e.percv && (e.isVisible = !0);
                .8 <= e.percv && (e.isDentsuVisible = !0);
                b.w.h ? e.percv > b.w.h && (b.w.h = e.percv) : b.w.h = e.percv;
                return e
            };
            b.w.k = function(c, d) {
                return b.x.a(c.area) ? (d.viewstats || (d.viewstats = {}), d.viewstats.isBigAd = !0, b.w.b) : b.w.a
            };
            b.w.l = function() {
                return p
            };
            b.w.m = k;
            b.w.o = b.c.bl;
            b.w.n = function(c, d, e, g) {
                try {
                    this.rect = e || c.getBoundingClientRect && c.getBoundingClientRect() || {}
                } catch (h) {
                    this.rect = e || c && {
                        top: c.offsetTop,
                        left: c.offsetLeft,
                        width: c.offsetWidth,
                        height: c.offsetHeight,
                        bottom: c.offsetTop + c.offsetHeight,
                        right: c.offsetLeft + c.offsetWidth
                    } || {}
                }
                e = "left right top bottom width height".split(" ");
                for (g = 0; g < e.length; g++) {
                    var k = e[g];
                    this[k] = this.rect[k]
                }
                c && c.adjustForClip && (e = b.a.bt(c.style.clip)) && (this.left += e.left, this.right = this.left + e.right, this.top += e.top, this.bottom = this.top + e.bottom);
                c && c.CLIPCHECKINGTARGET && c.CLIPCHECKINGTARGET.style && "absolute" === c.CLIPCHECKINGTARGET.style.position && (e = b.a.bt(c.CLIPCHECKINGTARGET.style.clip)) &&
                    (this.right = this.left + e.right, this.left += e.left, this.bottom = this.top + e.bottom, this.top += e.top);
                this.width = this.right - this.left;
                this.height = this.bottom - this.top;
                this.el = c;
                this.win = d || c && b.a.z(c);
                this.changeReferenceFrame = function(b) {
                    this.left += b.left;
                    this.right += b.left;
                    this.top += b.top;
                    this.bottom += b.top
                };
                this.calcArea = function() {
                    return (this.right - this.left) * (this.bottom - this.top)
                };
                this.getViewportRect = function(c) {
                    var d = b.c.bl(this.win);
                    c && (c.width < d.width && (d.width = c.width, d.right = d.left + d.width),
                        c.height < d.height && (d.height = c.height, d.bottom = d.top + d.height));
                    return d
                }
            };
            b.w.q = function(b, c, d) {
                return "undefined" === typeof b ? !1 : {
                    left: Number(c) + Number(b.left),
                    right: Number(c) + Number(b.right),
                    top: Number(d) + Number(b.top),
                    bottom: Number(d) + Number(b.bottom)
                }
            };
            b.w.p = function(c, d) {
                if ("undefined" === typeof c || "undefined" === typeof d) return !1;
                var e = h(c.left, c.right, d.left, d.right),
                    g = h(c.top, c.bottom, d.top, d.bottom);
                return new b.w.n(void 0, void 0, {
                    left: e[0],
                    right: e[1],
                    top: g[0],
                    bottom: g[1]
                })
            };
            b.w.r = function(c,
                d, e, g) {
                if (!c || !d || !e) return !1;
                c = b.w.m(c);
                e = g || b.w.p(d, e);
                if (!e) return !1;
                d = b.w.q(c.visibleRect, d.left, d.top);
                return d ? (d = b.w.p(d, e)) ? (d.right - d.left) * (d.bottom - d.top) / c.area : !1 : !1
            };
            b.w.s = function(b, c) {
                c || (c = window);
                try {
                    var d = c.document.documentElement,
                        e = c.document.body;
                    return "left" === b ? c.pageXOffset || d && d.scrollLeft || e && e.scrollLeft : c.pageYOffset || d && d.scrollTop || e && e.scrollTop
                } catch (g) {
                    return !1
                }
            };
            b.w.m = k;
            b.w.t = function(c) {
                var e = c.aa;
                c = c.zr;
                if (e) {
                    if (b.c.w) e = w(e, c);
                    else var h = new b.w.n(e),
                        h = d(h),
                        e =
                        g(h, b.c.d.document, e, c);
                    return {
                        half: 1 < e.length ? !0 : !1,
                        full: 3 === e.length ? !0 : !1
                    }
                }
            }
        })(r);
        (function(b) {
            function k(b) {
                var c = 0,
                    e;
                return function() {
                    var h = (new x).getTime();
                    150 < h - c && (e = b.apply(this, arguments), c = h);
                    return e
                }
            }

            function e(e) {
                var d = e.isVisibleFn,
                    h = e.isMeasurableFn,
                    k = e.pauseCheckingFn,
                    v = e.careFoc,
                    m = e.qsKeys,
                    z = e.counterLabel;
                b.c.o();
                var l = [],
                    n = 0,
                    t = 0,
                    L = 0,
                    q = 0,
                    E = 0,
                    I = 0,
                    C = 0;
                (new x).getTime();
                var B = !1,
                    U = !1,
                    r = !1,
                    K = !1,
                    qa, y, A, F = 0,
                    D = 0,
                    G = !1,
                    H = !1,
                    J, V = 0,
                    R = 0,
                    Y = !1,
                    W = !1,
                    P = !1,
                    X = b.c.b,
                    Q;
                if (0 === m) var O = "as",
                    S = "ag",
                    aa = "an",
                    ba = "ck",
                    ca = "kw",
                    da = "ah",
                    ea = "aj",
                    N = "pg",
                    T = "pf",
                    ia = "gi",
                    fa = "gf",
                    ja = "gg",
                    ka = "ez",
                    G = !0;
                else 1 === m ? (O = "cc", S = "bw", aa = "bx", ba = "ci", ca = "jz", da = "bu", ea = "dj") : 2 === m ? (O = "cg", S = "ce", aa = "cf", ba = "cj", ca = "ts", da = "ah", ea = "dk", ia = "gj", fa = "gb", ja = "ge", ka = "ez") : 3 === m ? (O = "cg", S = "ce", aa = "cf", ba = "cj", ca = "ts", da = "ah", ea = "dk", ia = "gi", fa = "gf", ja = "gg", ka = "ez") : 5 === m ? (O = "aa", S = "ad", aa = "cn", ba = "co", ca = "cp", da = "ah", ea = "cq", ia = "gn", fa = "gk", ja = "gl", ka = "ez") : 6 === ("number" === typeof m ? m : m.type) && (O = m.otsKey, S = m.ivtKey, aa =
                    m.lastivtKey, ba = m.ivtAtOtsKey, ca = m.timeToViewSendKey, da = m.timeToViewAskKey, ea = m.visOnLoadKey, ia = m.fullyIvtOtsKey, fa = m.fullyIvtKey, ja = m.lastFullyIvtKey, ka = m.wasPartiallyInviewKey);
                this.getLabel = function() {
                    return z
                };
                this.addListener = function(c) {
                    var d = !1;
                    b.a.forEach(l, function(b) {
                        if (b === c) return d = !0, !1
                    });
                    d || l.push(c)
                };
                this.removeListener = function(b) {
                    for (var c, d = l.length; c < d; c++) {
                        var e = !1,
                            g = !1,
                            h;
                        for (h in l[c])
                            if (g || (g = !0), l[c][h] !== b[h]) {
                                e = !0;
                                break
                            }
                        g && !e && l.splice(c, 1)
                    }
                };
                this.hadOTS = function() {
                    return r
                };
                this.hadFullOTS = function() {
                    return K
                };
                this.hadFIT = function() {
                    return 0 < t
                };
                this.hadVideo2SecOTS = function() {
                    return "undefined" != typeof _hadVideo2SecOts && _hadVideo2SecOts
                };
                this.hadDentsuVideoOTS = function() {
                    return !1
                };
                this.hadDentsuDisplayOTS = function() {
                    return Y
                };
                this.getInViewTime = function() {
                    return n
                };
                this.getLastInviewPercent = function() {
                    var b = 0;
                    return b = J
                };
                this.getCareAboutFocus = function() {
                    return v
                };
                this.getPauseCheckingFn = function() {
                    return k
                };
                this.visible = function() {
                    return B
                };
                this.fullyVisible = function() {
                    return U
                };
                this.wasPartiallyInview = function() {
                    return H
                };
                this.getFullInviewTimeTotal = function() {
                    return t
                };
                this.getMaximumContinuousInViewTime = function() {
                    return u.max(E, I)
                };
                this.getMaximumContinuousFullyInViewTime = function() {
                    return u.max(0, C)
                };
                this.getDentsuInViewTime = function() {
                    return V
                };
                this.getDentsuAudibleAndVisibleTime = function() {
                    return 0
                };
                this.update = function(e, g, q) {
                    if ("function" !== typeof h || !h(e)) return !1;
                    var L = n || 0,
                        x = t || 0;
                    q = !1;
                    var D = d(e);
                    D.rect && (e.elementRect = D.rect, e.currentWidth = e.elementRect.right -
                        e.elementRect.left, e.currentHeight = e.elementRect.bottom - e.elementRect.top);
                    var Z = D.isVisible,
                        N = D.isFullyVisible,
                        M = D.isDentsuVisible,
                        T = D.percv && 0 < D.percv;
                    J = D.percv;
                    var O = k(e),
                        S;
                    S = !v || b.focus.pageIsVisible();
                    Z = Z && S && !O;
                    N = N && S && !O;
                    T = T && S && !O;
                    P = M && S && !O;
                    !H && T && (H = !0);
                    if (Z && B) n += g, E += g;
                    else if (Z || B) M = u.round(g / 2), n += M, E += M;
                    if (N && U) t += g, C += g;
                    else if (N || U) M = u.round(g / 2), t += M, C += M;
                    if (P && W) V += g, R += g;
                    else if (P || W) M = u.round(g / 2), V += M, R += M;
                    !r && 1E3 <= E && (q = r = !0, this.timeToView = qa = e.counters.query()[da], y = n);
                    !K &&
                        1E3 <= C && (K = !0);
                    "undefined" === typeof A && (1E3 >= e.counters.query().bu ? Z && (A = !0) : A = !1);
                    (e.el = X) && "undefined" === typeof Q && 2 !== m && 3 !== m && D.elGeo && (b.c.o().isInApp && 4 === b.c.av() ? M = !1 : (M = c().y + D.elGeo.foldTop, O = D.elGeo.threshold * D.elGeo.elHeight, M = M > b.t.b() - O), 0 < D.elGeo.totalArea && (Q = M, e.dn = Q));
                    G && T && (F = u.min(u.max(D.percv, F), 1));
                    I < E && (I = E);
                    Z || (E = 0);
                    N || (C = 0);
                    B = Z;
                    U = N;
                    1E3 <= R && (Y = !0);
                    P || (R = 0);
                    W = P;
                    b.a.forEach(l, function(b) {
                        var c = D && D.percv,
                            c = "number" === typeof c && 100 * c;
                        if (b.onInViewTimeCount) b.onInViewTimeCount(g,
                            n - L, c, z);
                        if (b.onFullyInViewTimeCount) {
                            var d = u.max(t - x, 0);
                            b.onFullyInViewTimeCount(g, d, c, z)
                        }
                    });
                    return q
                };
                this.getQS = function(b, c, d) {
                    L > n && (L = n);
                    q > t && (q = t);
                    b[O] = Number(r);
                    b[S] = n;
                    b[aa] = L;
                    if (0 === m || 2 === m || 3 === m || 5 === m || ("number" === typeof m ? m : m.type)) K && (b[ia] = 1), c = 0 === m && d && "sframe" === d, fa && !c && (b[fa] = t, b[ja] = q), H && (b[ka] = 1);
                    "undefined" !== typeof y && (b[ba] = y);
                    "undefined" !== typeof qa && (b[ca] = qa);
                    "undefined" !== typeof A && (b[ea] = Number(A));
                    !0 === G && (c = u.round(100 * F), d = u.round(100 * D), b[N] = c, b[T] = d, D = F);
                    "undefined" !==
                    typeof Q && (b.ib = Number(Q));
                    L = n;
                    q = t
                }
            }

            function c() {
                var c = b.c.d,
                    d = c.document;
                return {
                    y: void 0 !== c.pageYOffset ? c.pageYOffset : (d.documentElement || d.body.parentNode || d.body).scrollTop
                }
            }
            b.t = {};
            var h = {};
            b.t.b = function() {
                return Q ? b.c.bl(b.c.d).height : 750
            };
            b.t.c = function() {
                if (!b.a.ai() && !b.a.aj()) return !1;
                var c = b.c.y();
                return c = c || b.c.as()
            };
            b.t.d = function() {
                if (!b.t.c()) return !1;
                var c = b.c.z();
                return c |= b.c.at
            };
            b.t.e = function(c) {
                var d = c.zr;
                b.l.b.azsx("adKilled", b.t.a, {
                    once: !0,
                    condition: function(b) {
                        return b.zr ==
                            c.zr
                    }
                });
                h[d] = h[d] || {};
                c.viewstats = {
                    isBigAd: !1
                };
                if (b.c.bv()) {
                    var w = k(b.w.j),
                        p;
                    p = new e({
                        isVisibleFn: w,
                        isMeasurableFn: b.c.bv,
                        pauseCheckingFn: b.y.a,
                        careFoc: !0,
                        qsKeys: 0,
                        counterLabel: "strict"
                    });
                    h[d].strict = p;
                    w = new e({
                        isVisibleFn: w,
                        isMeasurableFn: b.c.bv,
                        pauseCheckingFn: b.y.a,
                        careFoc: !1,
                        qsKeys: 1,
                        counterLabel: "lax"
                    });
                    h[d].lax = w
                } else !0 !== c.isSkin && b.i && b.i.a() && (w = new e({
                    isVisibleFn: b.i.b,
                    isMeasurableFn: b.c.ca,
                    pauseCheckingFn: b.y.a,
                    careFoc: !0,
                    qsKeys: 3,
                    counterLabel: "pscope"
                }), h[d].pscope = w);
                b.j && b.j.b() && !h[d].pscope &&
                    (w = new e({
                        isVisibleFn: b.j.c,
                        isMeasurableFn: b.c.cb,
                        pauseCheckingFn: b.y.a,
                        careFoc: !0,
                        qsKeys: 2,
                        counterLabel: "pscope"
                    }), h[d].pscope = w);
                w = b.c.ai();
                p = b.c.ai;
                w || (w = b.c.am(), p = b.c.am);
                w && (w = new e({
                    isVisibleFn: b.z.a,
                    isMeasurableFn: p,
                    pauseCheckingFn: b.y.a,
                    careFoc: !0,
                    qsKeys: 5,
                    counterLabel: "sframe"
                }), h[d].sframe = w);
                b.l.b.zaxs("viewCounterStarted", c);
                (b.a.ai() || b.a.aj()) && (d = b.t.f(c.zr)) && d.addListener({
                    _wasAnyPixelInView: !1,
                    onInViewTimeCount: function(d, e, h) {
                        return this._wasAnyPixelInView ? !1 : b.t.d() ? (b.y.b(c),
                            this._wasAnyPixelInView = !0, !1) : !0
                    }
                });
                b.l.b.azsx("view:tick", b.a.by([c], b.t.g), {
                    priority: 5
                })
            };
            b.t.h = function(c, d, e) {
                return (c || opt_counters) && d && e ? (c = b.t.i(c.zr, d)) && "function" == typeof c[e] && c[e]() : !1
            };
            b.t.j = function(c, d) {
                if (c && d) {
                    var k, p;
                    d.sframe || (p = (k = b.c.bx()) && (p || b.c.bw), p = (k = k || b.c.ak) && (p || b.c.by), p = (k = k || b.c.am()) && (p || b.c.bz), p = (k = k || b.c.af()) && (p || b.c.af), p = (k = k || b.c.ap()) && (p || b.c.as), k && (h[c.zr].sframe = new e({
                        isVisibleFn: b.z.a,
                        isMeasurableFn: p,
                        pauseCheckingFn: b.y.a,
                        careFoc: !0,
                        qsKeys: 5,
                        counterLabel: "sframe"
                    }), b.l.b.zaxs("viewCounterStarted", c)))
                }
            };
            b.t.g = function(c, d, e) {
                var k = h[c.zr],
                    v;
                b.t.j(c, k);
                for (var m in k) k.hasOwnProperty(m) && k[m].update(c, d, e) && (v = !0);
                v && b.y.c(c);
                b.x.b(c);
                c.ao && 1 == c.ao.skin && "width" == b.u.b && b.u.d();
                b.d.c(c) && b.y.b(c)
            };
            b.t.k = function(c, d, e) {
                "undefined" == typeof e && (e = !1);
                var h = 0;
                h = !e && b.c.bv() ? (c = c && "undefined" != typeof c.zr && b.t && b.t.l && b.t.l(c.zr)) && c.lax && c.lax.getInViewTime() || 0 : b.t.m(c);
                return h >= d
            };
            b.t.m = function(c) {
                var d = 0,
                    e = c && "undefined" != typeof c.zr &&
                    b.t && b.t.l && b.t.l(c.zr);
                e && (b.c.bv() ? d = e.strict && e.strict.getInViewTime() || 0 : b.c.by() ? d = e.sframe && e.sframe.getInViewTime() || 0 : b.c.cc(c) && (d = e.pscope && e.pscope.getInViewTime() || 0));
                return d
            };
            b.t.n = function() {
                return "hadOTS"
            };
            b.t.o = function(c, d) {
                var e = !1,
                    e = b.t.n();
                return c && c && "undefined" != typeof c.zr ? e = d ? b.t.h(c, d, e) : b.t.h(c, b.t.p(c.zr), e) : null
            };
            b.t.q = function(c, d) {
                var e = b.t.l(c.zr);
                return b.j && b.j.a && e && e.pscope && e.pscope[d ? "hadVideo2SecOTS" : "hadOTS"]()
            };
            b.t.r = function(c, d) {
                var e = b.t.l(c.zr);
                return b.j &&
                    b.j.a && e && e.pscope && e.pscope[d ? "hadDentsuVideoOTS" : "hadDentsuDisplayOTS"]()
            };
            b.t.s = function(c, d) {
                var e = b.t && b.t.l(c.zr);
                return b.j && b.j.a && e && e.pscope && e.pscope.getFullInviewTimeTotal() >= d
            };
            b.t.t = function(c) {
                var d = 0,
                    e = c && "undefined" != typeof c.zr && b.t && b.t.l && b.t.l(c.zr);
                e && (b.c.bv() ? d = e.strict && e.strict.getFullInviewTimeTotal() || 0 : b.c.by() ? d = e.sframe && e.sframe.getFullInviewTimeTotal() || 0 : b.c.cc(c) && (d = e.pscope && e.pscope.getFullInviewTimeTotal() || 0));
                return d
            };
            b.t.u = function(c, d, e) {
                "undefined" == typeof e &&
                    (e = !1);
                var h = 0;
                h = !e && b.c.bv() ? (c = c && "undefined" != typeof c.zr && b.t && b.t.l && b.t.l(c.zr)) && c.lax && c.lax.getInViewTime() || 0 : b.t.t(c);
                return h >= d
            };
            b.t.a = function(b) {
                delete h[b.zr]
            };
            b.t.l = function(b) {
                var c;
                h[b] ? c = h[b] : h[b] = c = {};
                return c
            };
            b.t.i = function(c, d) {
                var e = b.t.l(c);
                return e && e[d]
            };
            b.t.v = function(c) {
                var d, e, h, k;
                if (!c || !c.strict) return !1;
                c = b.c.o().isInApp;
                d = b.c.aw();
                e = b.c.au();
                h = b.c.ay();
                k = b.c.ba();
                return (d = c && (d || e || h || !1)) || !(c || k)
            };
            b.t.p = function() {
                var c;
                return function(d) {
                    var e = null,
                        k = h[d];
                    b.t.v(k) ?
                        e = "strict" : k && k.sframe ? e = "sframe" : k && k.pscope && (e = "pscope");
                    c != e && (c = e, b.l.b.esgf("preferredViewCounterUpdate", A[d]));
                    return e
                }
            }();
            b.t.f = function(c) {
                var d = b.t.p(c);
                return (c = h[c]) && d && c[d]
            };
            b.t.w = function(c, d) {
                var e = {},
                    k = h[c],
                    v = b.t.p(c),
                    m;
                for (m in k) k.hasOwnProperty(m) && k[m].getQS(e, d, v);
                b.t.f(c) && b.t.f(c).hadDentsuDisplayOTS() && (e.nb = 1);
                (k = A[c]) && k.viewstats && k.viewstats.isBigAd && (e.el = 1);
                return e
            }
        })(r);
        (function(b) {
            b.aa = {};
            b.aa.a = function(b, e) {
                var c;
                e.outerHTML ? c = e.outerHTML : (c = document.createElement("div"),
                    c.appendChild(e.cloneNode(!0)), c = c.innerHTML);
                c = [/flashvars\s*=\s*(".*?"|'.*?')/i.exec(c), /name\s*=\s*["']flashvars["']\s*value\s*=\s*(".*?"|'.*?')/i.exec(c), /value\s*=\s*(".*?"|'.*?')\s*name\s*=\s*["']flashvars["']/i.exec(c), b];
                for (var h, g, d = {}, w = 0; w < c.length; w++) {
                    if ((h = c[w]) && "object" === typeof h && h[1]) h = h[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/^"/g, "").replace(/"$/g, "").replace(/^'/g, "").replace(/'$/g, "");
                    else if ("string" === typeof h) h = h.split("?")[1];
                    else continue;
                    if (h) {
                        h = h.split("&");
                        for (var p = 0; p < h.length; p++) g = h[p].split("="), 2 > g.length || "function" == g[0].slice(0, 8) || (d[g[0]] = [g[1]])
                    }
                }
                return d
            }
        })(r);
        (function(b) {
            b.u = {};
            b.u.e = {};
            b.u.b = "divs";
            b.u.e.a || (b.u.b = "width", b.u.e.a = function(b) {
                return 1E3
            });
            b.u.d = function() {
                var k = b.c.d,
                    e = b.c.w && k.document || document,
                    c = e.documentElement,
                    e = e.getElementsByTagName("body")[0];
                try {
                    b.u.c = k && k.innerWidth || c && c.clientWidth || e && e.clientWidth
                } catch (h) {}
            };
            b.u.a = function(k, e, c) {
                if ("divs" == b.u.b) {
                    if (k._Mt_wIC) return !0;
                    if (k._Mt_wOC) return !1;
                    var h = c.currentTarget,
                        g = k;
                    for (c = 0; 1E3 > c && !b.a.s(e, g); c++) {
                        if (g == h || null == g) return k._Mt_wOC = !0, !1;
                        g = g.parentElement
                    }
                    return k._Mt_wIC = !0
                }
                if ("width" == b.u.b) {
                    k = e / 2;
                    h = b.u.c / 2;
                    g = c.clientX;
                    c = c.clientY;
                    var d = b.c.d.scrollY || b.c.d.document.documentElement.scrollTop;
                    return b.u.c > e && (g > h + k || g < h - k) || 90 > c + d ? !1 : !0
                }
                if ("ad-els" === b.u.b) {
                    if (k._Mt_wIC) return !0;
                    if (k._Mt_wOC) return !1;
                    h = c.currentTarget;
                    g = k;
                    for (c = 0; 1E3 > c; c++) {
                        if (b.a.s(e, g)) return k._Mt_wOC = !0, !1;
                        if (g == h || null == g) break;
                        g = g.parentElement
                    }
                    return k._Mt_wIC = !0
                }
            }
        })(r);
        (function(b) {
            b.ab = {};
            var k = [];
            b.ab.a = function(b, c) {
                k.push({
                    query: b,
                    callback: c
                });
                return !1
            }
        })(r);
        (function(b) {
            function k(c) {
                var d = [];
                b.a.forEach(c, function(b, c) {
                    d.push(c + ":" + ("(function(){try{return(" + b.toString() + ")()}catch(e){return false}})()"))
                });
                return a = "{" + d.join(",") + "}"
            }

            function e(b) {
                for (var c = "", d = 0; d < b.length; d++) var e = b.charCodeAt(d) ^ 85,
                    c = c + String.fromCharCode(e);
                b = c;
                for (var c = "", g = e = d = 0, h = 0, k = 0, n = 0; n < b.length; ++n)
                    for (k = b.charCodeAt(n), h = 255 < k ? 0 : 1; 2 > h; ++h) d = 0 === h ? d | (k & 65280) / 256 << e : d | (k & 255) << e, e += 8, 13 < e &&
                        (g = d & 8191, 88 < g ? (d >>= 13, e -= 13) : (g = d & 16383, d >>= 14, e -= 14), c += z.charAt(g % 91), c += z.charAt(g / 91 | 0));
                0 < e && (c += z.charAt(d % 91), 7 < e || 90 < d) && (c += z.charAt(d / 91 | 0));
                return c
            }

            function c(c, d) {
                var e = [];
                b.a.forEach(c, function(b, c) {
                    if (void 0 !== b && ("string" === typeof(d ? b[d] : b) || "number" === typeof(d ? b[d] : b) || "boolean" === typeof(d ? b[d] : b))) {
                        var g = String(d ? b[d] : b).split("&").join("%26").split("=").join("%3D");
                        e.push(("number" === typeof c ? "" : c + "=") + g)
                    }
                }, null, !0);
                e.sort();
                return e.join("&")
            }

            function h(b) {
                for (var c = "", d = 0; d <
                    b.length; d++) b.hasOwnProperty(d) && (c += z[b[d]]);
                return c
            }

            function g(c) {
                var d = b.k.p(!0);
                c = "https://geo.moatads.com/n.js?" + b.v.b(35, c, d, !1, !0).res.querystring;
                var d = b.k.au,
                    e = document.createElement("script");
                c += "&callback=" + b.c.j + "." + d;
                b.a.bj(c, document.body || document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0], e);
                b.k.at.push(e)
            }
            b.k = {};
            b.k.f = 1;
            b.k.g = !1;
            b.k.h = {};
            b.k.i = [];
            b.k.j = [];
            b.k.b = 0;
            b.k.d = 1;
            b.k.k = 2;
            b.k.e = 3;
            b.k.l = 4;
            b.k.a = function() {
                var c = document && document.documentElement &&
                    document.documentElement.style || {},
                    d = !!window.opera,
                    e = "undefined" !== typeof InstallTrigger || "MozAppearance" in c,
                    g = b.c.p,
                    h = !!window.chrome && !!window.chrome.webstore,
                    k = !+"\v1" || !!document.documentMode || !!window.ActiveXObject || "-ms-scroll-limit" in c && "-ms-ime-align" in c;
                b.k.m = [!0 === !!window.opera ? 1 : 0, "undefined" !== typeof InstallTrigger === !0 ? 1 : 0, !0 === !!window.sidebar ? 1 : 0, !0 === "MozAppearance" in c ? 1 : 0, !0 === g ? 1 : 0, !0 === !!window.chrome ? 1 : 0, !0 === !(!window.chrome || !window.chrome.webstore) ? 1 : 0, !0 === !+"\v1" ? 1 :
                    0, !0 === !!document.documentMode ? 1 : 0, !0 === !!window.ActiveXObject ? 1 : 0, !0 === "-ms-scroll-limit" in c ? 1 : 0, !0 === "-ms-ime-align" in c ? 1 : 0
                ].join("");
                c = {};
                c[b.k.b] = h;
                c[b.k.d] = e;
                c[b.k.k] = d;
                c[b.k.e] = g;
                c[b.k.l] = k;
                b.k.n = [!0 === h ? 1 : 0, !0 === e ? 1 : 0, !0 === d ? 1 : 0, !0 === g ? 1 : 0, !0 === k ? 1 : 0].join("");
                for (var n in c)
                    if (c.hasOwnProperty(n) && c[n]) return n;
                return !1
            }();
            var d = {
                    11: function() {
                        return b.a.bn(window.crypto.getRandomValues)
                    },
                    12: function() {
                        return "open" in document.createElement("details")
                    },
                    13: function() {
                        try {
                            Function(' "use strict"; return 01; ')()
                        } catch (b) {
                            return !0
                        }
                        return !1
                    },
                    14: function() {
                        return "boolean" == typeof navigator.onLine
                    },
                    15: function() {
                        return b.a.bn(document.documentElement.webkitRequestFullScreen)
                    },
                    16: function() {
                        return "-webkit-font-feature-settings" in document.body.style
                    },
                    18: function() {
                        return b.a.bn(window.MutationObserver) || b.a.bn(window.MutationEvent)
                    },
                    19: function() {
                        var b = document.createElement("div");
                        b.style.width = "1px";
                        b.style.width = "calc(1px - 1px)";
                        b.style.width = "-webkit-calc(1px - 1px)";
                        return "1px" != b.style.width
                    },
                    21: function() {
                        return "undefined" !== typeof window.navigator.webkitGamepads ||
                            b.a.bn(window.navigator.webkitGetGamepads) || b.a.bn(window.Gamepad)
                    },
                    22: function() {
                        var b = document.createElement("div");
                        b.style.width = "1px";
                        b.style.width = "-webkit-min-content";
                        b.style.width = "min-content";
                        return "1px" != b.style.width
                    },
                    23: function() {
                        return b.a.bn(window.webkitRTCPeerConnection)
                    },
                    24: function() {
                        return b.a.bn(Intl.Collator) || "object" == typeof Intl.Collator().resolvedOptions()
                    },
                    25: function() {
                        return b.a.bn(window.document.body.createShadowRoot) || b.a.bn(window.document.body.webkitCreateShadowRoot)
                    },
                    26: function() {
                        return "content" in document.createElement("template")
                    },
                    28: function() {
                        return b.a.bn(CSS.supports)
                    },
                    30: function() {
                        var c = document.createElement("canvas");
                        c.width = c.height = 1;
                        c = c.getContext("2d");
                        c.globalCompositeOperation = "multiply";
                        c.fillStyle = "rgb(0,255,255)";
                        c.fillRect(0, 0, 1, 1);
                        c.fill();
                        c.fillStyle = "rgb(255,255,0)";
                        c.fillRect(0, 0, 1, 1);
                        c.fill();
                        c = c.getImageData(0, 0, 1, 1).data;
                        return c[0] == c[2] && c[1] == c[3] || b.a.bn(window.navigator.vibrate)
                    },
                    32: function() {
                        return (1 == CSS.supports("object-fit",
                            "contain") || 1 == CSS.supports("object-fit", "inherit")) && 1 == "object-fit" in document.body.style
                    },
                    33: function() {
                        return b.a.bn(window.speechSynthesis.speak)
                    },
                    34: function() {
                        return "srcset" in document.createElement("img")
                    },
                    35: function() {
                        return b.a.bn(window.FontFace)
                    },
                    36: function() {
                        return b.a.bn(document.createElement("div").animate)
                    },
                    37: function() {
                        return "shape-image-threshold" in document.body.style == CSS.supports("shape-image-threshold", .9) == 1 && b.a.bn(document.createElement("dialog").show)
                    },
                    38: function() {
                        return b.a.bn(navigator.getBattery)
                    },
                    39: function() {
                        return b.a.bn(document.createElement("div").animate([{
                            transform: "scale(1)",
                            easing: "ease-in"
                        }, {
                            transform: "scale(1.3)",
                            easing: "ease-in"
                        }], {
                            duration: 1300,
                            iterations: 1
                        }).reverse)
                    },
                    40: function() {
                        return !!window.navigator.serviceWorker && b.a.bn(window.navigator.serviceWorker.register)
                    },
                    41: function() {
                        return "image-rendering" in document.body.style && 1 == CSS.supports("image-rendering", "pixelated")
                    },
                    42: function() {
                        return b.a.bn(window.fetch)
                    },
                    43: function() {
                        return b.a.bn(navigator.permissions.query)
                    },
                    44: function() {
                        return CSS.supports("word-break", "keep-all")
                    },
                    47: function() {
                        return CSS.supports("text-align-last", "start")
                    },
                    49: function() {
                        return b.a.bn(Proxy)
                    },
                    52: function() {
                        return CSS.supports("contain", "strict")
                    }
                },
                w = {
                    20: function() {
                        var b = document.createElement("canvas");
                        b.width = b.height = 1;
                        b = b.getContext("2d");
                        b.globalCompositeOperation = "multiply";
                        b.fillStyle = "rgb(0,255,255)";
                        b.fillRect(0, 0, 1, 1);
                        b.fill();
                        b.fillStyle = "rgb(255,255,0)";
                        b.fillRect(0, 0, 1, 1);
                        b.fill();
                        b = b.getImageData(0, 0, 1, 1).data;
                        return b[0] ==
                            b[2] && b[1] == b[3]
                    },
                    21: function() {
                        return void 0 !== window.document.createElement("style").scoped
                    },
                    22: function() {
                        return "content" in document.createElement("template")
                    },
                    23: function() {
                        var b = document.createElement("input");
                        b.setAttribute("type", "range");
                        return "text" !== b.type
                    },
                    24: function() {
                        return window.CSS.supports("cursor", "zoom-in")
                    },
                    26: function() {
                        return window.CSS.supports("image-orientation", "270deg")
                    },
                    27: function() {
                        return window.CSS.supports("cursor", "grab")
                    },
                    29: function() {
                        return b.a.bn(Intl.Collator) ||
                            "object" == typeof Intl.Collator().resolvedOptions()
                    },
                    30: function() {
                        return eval("1 == [for (item of [1,2,3]) item][0]")
                    },
                    31: function() {
                        return window.CSS.supports("--fake-var", 0)
                    },
                    32: function() {
                        return window.CSS.supports("position", "sticky")
                    },
                    35: function() {
                        return "performance" in window && "getEntriesByType" in window.performance && window.performance.getEntriesByType("resource") instanceof Array
                    },
                    36: function() {
                        return (1 == CSS.supports("object-fit", "contain") || 1 == CSS.supports("object-fit", "inherit")) && 1 == "object-fit" in
                            document.body.style
                    },
                    41: function() {
                        return !!document.fonts.ready
                    },
                    42: function() {
                        return b.a.bn(Reflect.apply)
                    },
                    43: function() {
                        return b.a.bn(Array.prototype.includes)
                    },
                    44: function() {
                        return eval("(function(){let x = true; return x; })()")
                    }
                },
                p = {
                    5: function() {
                        try {
                            Function(' "use strict"; return 01; ')()
                        } catch (b) {
                            return !0
                        }
                        return !1
                    },
                    "5.1": function() {
                        return 0 == (new Uint16Array(1))[0]
                    },
                    6: function() {
                        return b.a.bn(webkitRequestAnimationFrame)
                    },
                    7: function() {
                        return b.a.bn(window.speechSynthesis.speak)
                    },
                    8: function() {
                        var c =
                            new MediaSource;
                        return b.a.bn(c.addSourceBuffer) || "number" == typeof window.performance.now()
                    },
                    9: function() {
                        return b.a.bn(CSS.supports)
                    }
                },
                v = {
                    0: function() {
                        var b = document.createElement("div"),
                            c = null,
                            d = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                        try {
                            b.style.behavior = "url(#default#clientcaps)"
                        } catch (e) {}
                        for (var g = 0; g < d.length; g++) {
                            try {
                                c = b.getComponentVersion(d[g], "componentid").replace(/,/g, ".")
                            } catch (e) {}
                            if (c) return c.split(".")[0]
                        }
                        return "-1"
                    },
                    11: function() {
                        return eval("(function(){let x = true; return x; })()")
                    },
                    12: function() {
                        return isNativeFunction(CSS.supports)
                    },
                    13: function() {
                        return "content" in document.createElement("template")
                    }
                };
            b.k.o = e;
            b.k.c = h;
            b.k.p = function(c) {
                var d = {};
                d.ud = b.k.a;
                if (void 0 === c || !1 === c) d.qa = b.k.q, d.qb = b.k.r, d.qc = b.k.s, d.qd = b.k.t, d.qf = b.k.u, d.qe = b.k.v, d.qh = b.k.w, d.qg = b.k.x, d.qi = b.k.y, d.qj = b.k.z, d.ql = b.k.aa, d.qo = b.k.ab;
                d.qm = b.k.ac;
                d.qn = b.k.ad;
                d.qp = b.k.n;
                d.qq = b.k.m;
                d.qr = b.k.ae();
                d.gz = b.k.af;
                d.hh = b.k.ag;
                d.hn = b.k.ah;
                d.qt =
                    b.k.ai;
                return d
            };
            for (var d = k(d), w = k(w), p = k(p), v = k(v), m = [
                    [1, 25],
                    [7, 1],
                    [1, 25],
                    [-74, 1],
                    [1, 9],
                    [-24, 1],
                    [2, 1],
                    [1, 3],
                    [2, 1],
                    [1, 4],
                    [2, 1],
                    [1, 1],
                    [11, 1],
                    [1, 6],
                    [27, 1],
                    [2, 1],
                    [1, 3],
                    [27, 1],
                    [1, 3],
                    [-92, 1]
                ], d = 65, z = "", w = w = 0; w < m.length; w++)
                for (p = 0; p < m[w][1]; p++) z += String.fromCharCode(d), d += m[w][0];
            var z = z + String.fromCharCode(d),
                d = h([48, 30, 27, 29, 43, 34, 47, 30, 43]),
                w = h([30, 47, 26, 37, 46, 26, 45, 30]),
                p = h([43, 30, 44, 41, 40, 39, 44, 30]),
                l = [d, w].join("-"),
                n = [l, p].join("-");
            h([38, 40, 46, 44, 30, 38, 40, 47, 30]);
            var d = h([84, 41, 33, 26, 39, 45, 40,
                    38
                ]),
                w = h([28, 26, 37, 37, 15, 33, 26, 39, 45, 40, 38]),
                p = b.c.d,
                m = p.document,
                v = m.body,
                t = p.navigator;
            b.k.y = b.c.bh;
            b.k.z = b.c.bi;
            b.k.q = b.c.bj;
            b.k.r = b.c.bk;
            try {
                b.k.u = p.innerWidth || m.documentElement.clientWidth || v.clientWidth, b.k.v = p.innerHeight || m.documentElement.clientHeight || v.clientHeight, b.k.w = p.outerWidth || v.offsetWidth, b.k.x = p.outerHeight || v.offsetHeight
            } catch (q) {}
            try {
                b.k.s = p.screenX || p.screenLeft || p.screenX, b.k.t = p.screenY || p.screenTop || p.screenY
            } catch (q) {}
            try {
                b.k.ad = e(c(t))
            } catch (q) {}
            try {
                b.k.aa = e(c(t.plugins,
                    "name"))
            } catch (q) {}
            b.k.ac = (new x).getTimezoneOffset();
            b.k.af = b.c.cq() ? 1 : 0;
            b.k.ag = b.c.cr() ? 1 : 0;
            b.k.ah = b.c.cs() ? 1 : 0;
            b.k.ae = function() {
                return 0
            };
            b.k.ai = !0 === ("undefined" != typeof p[d] || "undefined" != typeof p[w]) ? 1 : 0;
            b.k.ab = 0;
            b.k.aj = {};
            b.k.ak = function() {};
            var L = "nu ib dc ob oh lt ab n nm sp pt".split(" ");
            b.k.al = function(c, d) {
                d.ga ? b.a.forEach(L, function(d, e) {
                    c = d in b.k.am ? c + ("&" + d + "=1") : c + ("&" + d + "=0")
                }) : d.APPEND_MANUAL && b.a.forEach(L, function(e, g) {
                    b.a.s(d.APPEND_MANUAL, e) && (c = e in b.k.am ? c + ("&" + e + "=1") :
                        c + ("&" + e + "=0"))
                });
                d.gb ? 0 == b.k.an && ((new b.c.d.Image).src = c) : d.gc ? 1 == b.k.an && ((new b.c.d.Image).src = c) : (new b.c.d.Image).src = c
            };
            b.k.ao = function(c, d) {
                c(b.k.an)
            };
            b.k.ap = function(c, d) {
                return function() {
                    if (void 0 === b.k.an) return b.k.i.push({
                        pixel: c,
                        opts: d
                    });
                    b.k.al(c, d)
                }
            };
            b.k.aq = function(c, d) {
                if (void 0 === b.k.an) return b.k.j.push({
                    callback: c,
                    opts: d
                });
                b.k.ao(c, d)
            };
            b.k.ar = function() {
                for (var c = 0; c < b.k.j.length; c++)
                    if (b.k.j.hasOwnProperty(c)) {
                        var d = b.k.j[c];
                        b.k.ao(d.callback, d.opts)
                    }
            };
            b.k.as = function() {
                for (var c =
                        0; c < b.k.i.length; c++)
                    if (b.k.i.hasOwnProperty(c)) {
                        var d = b.k.i[c];
                        b.k.al(d.pixel, d.opts)
                    }
            };
            b.k.at = [];
            b.k.av = function(c) {
                if (y)
                    if (b.k.au = "gna" + u.floor(1E6 * u.random()), y[b.k.au] = function(c) {
                            b.k.aw = new x - b.k.ax;
                            b.k.an = "n" in c ? 1 : 0;
                            b.k.am = c;
                            b.k.as();
                            b.k.ar();
                            y.jsonpcache = c;
                            y[b.k.au] = null
                        }, b.k.ax = new x, b.h.f(function() {
                            b.k.ay = new x - b.k.ax
                        }, 0), y.jsonpcache) y[b.k.au](y.jsonpcache);
                    else g(c);
                else b.h.f(setupNadoListener, 200)
            };
            b.k.az = function(c, d) {
                void 0 === b.k.h[c] && (b.k.h[c] = 1 / b.k.f < u.random());
                if (b.k.h[c]) return !1;
                var e = b.k.p();
                b.ac && b.ac.a && b.ac.a.imaSDK ? c.moatClientLevel3 && b.v.b(34, c, e) : b.v.b(34, c, e);
                return !0
            };
            b.k.ba = function(c) {
                if (!0 !== b.k.bb && (b.k.bb = !0, b.k.az(c))) {
                    var d = function() {
                        var d = {};
                        d.qr = b.k.ae();
                        d.qo = b.k.ab;
                        b.v.b(36, c, d)
                    };
                    b.h.c(m, l, function(c) {
                        b.h.d(m, l, null, "mswe");
                        b.k.ae = function() {
                            return 1
                        };
                        d()
                    }, "mswe");
                    b.h.c(m, n, function(c) {
                        b.h.d(m, n, null, "mswer");
                        b.k.ae = function() {
                            return 1
                        };
                        d()
                    }, "mswer")
                }
            };
            b.k.bc = function() {
                if (b.k.at) {
                    for (var c = 0, d = b.k.at.length; c < d; c++) try {
                        b.k.at[c].parentNode && b.k.at[c].parentNode.removeChild(b.k.at[c])
                    } catch (e) {}
                    b.k.at =
                        null
                }
            };
            b.k.bd = function() {
                b.h.d(m, l, null, "mswe");
                b.h.d(m, n, null, "mswer");
                b.k.bc()
            };
            b.l.b.azsx("allLocalAdsKilled", b.k.bd, {
                once: !0
            })
        })(r);
        (function(b) {
            function k(c) {
                var d = {
                    window: 0,
                    transparent: 1,
                    opaque: 2,
                    direct: 3,
                    gpu: 4
                };
                if ("EMBED" === c.tagName) var e = b.a.getAttribute(c, "wmode");
                else if ("OBJECT" === c.tagName) {
                    c = c.getElementsByTagName("param");
                    for (var h = 0; h < c.length; h++) {
                        var k = c[h],
                            m = b.a.getAttribute(k, "name"),
                            k = b.a.getAttribute(k, "value");
                        if ("wmode" === m) {
                            e = k;
                            break
                        }
                    }
                }
                return e && d[e.toLowerCase()] || 5
            }

            function e(e) {
                var d =
                    e.el,
                    h = e.url,
                    p = e.flashVars,
                    v = e.adIds,
                    m = e.opt_props;
                this.adContent = e.adContent;
                (new x).getTime();
                this.ao = v;
                this.FIND_AD_TRIES = v.numTries || 0;
                var z;
                try {
                    if (d) {
                        var l = d,
                            n;
                        if ("DIV" === l.tagName || "A" === l.tagName)(l = d.getElementsByTagName("EMBED")[0]) || (l = d.getElementsByTagName("OBJECT")[0]), l || (l = d.getElementsByTagName("IMG")[0]), l || (l = d);
                        1 === l.nodeType && "IMG" !== l.nodeName && "EMBED" !== l.nodeName && "OBJECT" !== l.nodeName && (l = d.getElementsByTagName("EMBED")[0] || d.getElementsByTagName("OBJECT")[0] || d.getElementsByTagName("IMG")[0] ||
                            d);
                        if ("OBJECT" === l.tagName) {
                            for (var t = 0; t < l.children.length; t++)
                                if ("movie" === l.children[t].name || "Movie" === l.children[t].name) n = l.children[t].value;
                            l.object && l.object.Movie ? n = l.object.Movie : l.data && -1 !== l.data.indexOf("swf") && (n = l.data)
                        }
                        "EMBED" !== l.tagName && "IMG" !== l.tagName || !l.src || (n = l.src);
                        n || (n = b.a.aa(l));
                        var L = b.aa.a(n, l);
                        z = {
                            adURL: n,
                            flashVars: L
                        }
                    } else z = !1
                } catch (E) {
                    z = !1
                }
                if (z && z.adURL && p)
                    for (q in z.flashVars) z.flashVars.hasOwnProperty(q) && (p[q] = z.flashVars[q]);
                if (z && z.flashVars && p)
                    for (q in z.flashVars) z.flashVars.hasOwnProperty(q) &&
                        (p[q] = z.flashVars[q]);
                if ("string" !== typeof h || "div" === h.toLowerCase() || "a" === h.toLowerCase()) h = z && z.adURL || "-";
                h && 0 !== h.toLowerCase().indexOf("http:") && 0 !== h.toLowerCase().indexOf("https:") && ("//" === h.substring(0, 2) ? h = window.location.protocol + h : "/" === h[0] ? h = window.location.protocol + "//" + window.location.host + h : (z = window.location.pathname.split("/").slice(0, -1).join("/"), h = window.location.protocol + "//" + window.location.host + "/" + z + (z ? "/" : "") + h));
                "IFRAME" !== d.tagName && "IMG" !== d.tagName && -1 === h.indexOf("googlesyndication") &&
                    (h = h.split("?")[0]);
                this.zr = v.adNum;
                this.yg = b.a.cb();
                b.m.h(this.yg, b.c.l.a);
                A[this.zr] = this;
                b.d.f(this.zr, [d]);
                this.ae = h;
                this.aa = d;
                b.l.b.zaxs("adElementUpdate");
                this.WINDOW = b.a.z(this.aa);
                this.INITIAL_WIDTH = d.offsetWidth;
                this.INITIAL_HEIGHT = d.offsetHeight;
                "undefined" === typeof p && (p = {});
                b.m.i(la);
                this.eg = [];
                this.ee = {};
                b.y.e(this);
                this.ag = p;
                this.ah = void 0;
                this.ai = 0;
                this.an = this.am = this.al = this.ak = this.aj = void 0;
                this.ar = [];
                this.as = [];
                this.at = [];
                this.av = this.au = b.o.a.a.a;
                this.ax = b.o.a.b.a;
                this.ay = b.o.a.c.a;
                this.ba = this.az = b.o.a.d.a;
                this.bb = b.o.a.e.a;
                this.by = this.bx = this.bw = this.bv = this.bu = this.bt = this.bs = this.br = this.bq = this.bp = this.bo = this.bm = this.bl = this.bk = this.bi = this.bh = this.bg = this.bf = this.be = this.bd = this.bc = void 0;
                this.ca = this.bz = !1;
                this.cb = this.cu = this.ct = void 0;
                this.cc = +new x + 12E4;
                this.ci = +new x;
                this.cl = this.cm = void 0;
                this.cn = 0;
                this.ck = b.o.a.f.a;
                this.cd = !1;
                this.cy = void 0;
                this.dt = !1;
                this.db = void 0;
                this.cf = this.ce = !1;
                this.af = Number(this.ef);
                this.eq = !1;
                this.ds = this.ch = this.dr = this.cg = 0;
                this.dq =
                    this.bn = void 0;
                this.IR5 = {
                    MIN: {
                        x: void 0,
                        y: void 0
                    },
                    MAX: {
                        x: void 0,
                        y: void 0
                    },
                    AREA: 0
                };
                this.dm = 0;
                this.ep = this.dd = !1;
                this.aq = {};
                this.aq.g = 0;
                this.aq[1] = 0;
                this.aq[2] = 0;
                this.aq[3] = 0;
                this.aq[13] = 0;
                this.aq[0] = 0;
                this.aq[4] = 0;
                this.aq[5] = 0;
                this.aq[6] = 0;
                this.aq[7] = 0;
                this.aq[9] = 0;
                this.aq[8] = 0;
                this.aq[15] = 0;
                this.aq[16] = 0;
                this.aq[21] = 0;
                this.aq[22] = 0;
                this.aq[23] = 0;
                this.aq[37] = 0;
                this.es = [5, 10, 15, 30, 60];
                this.doa = [5, 10, 15, 30, 60];
                this.aq[31] = 0;
                if ("undefined" !== typeof m)
                    for (var q in m) m.hasOwnProperty(q) && (this[q] = m[q]);
                this.doNotSample = v.doNotSample || !1;
                this.an = e.adType || e.opt_props && e.opt_props.adType || c(d);
                0 === this.an && (this.WMODE = k(d));
                b.a.bs(this.aa);
                b.l.b.zaxs("adInitialized", this);
                b.d.e(this)
            }

            function c(b) {
                return "IFRAME" === b.tagName ? 2 : "IMG" === b.tagName ? 1 : "EMBED" === b.tagName || "OBJECT" === b.tagName ? 0 : 3
            }

            function h(c, d) {
                for (var e = 0, h = d.length; e < h; e++) {
                    var k = {
                        aa: d[e],
                        zr: c.zr
                    };
                    d[e][J] = c.zr;
                    b.r.c(k)
                }
            }
            b.d = {};
            b.d.d = function(g, d, h, p, v, m, z) {
                m || b.k.ba(v);
                var l;
                l = 1 == arguments.length ? arguments[0] : {
                    el: g,
                    url: d,
                    flashVars: p,
                    adIds: v,
                    opt_props: z
                };
                if (b.u.e.a && 1 == v.skin) {
                    var n;
                    n = b.u.e.a(g, v);
                    l.adContent = n
                }
                if (m) {
                    if ("function" === typeof m) return m(g, d, p, v);
                    new x;
                    m.em = !0;
                    A[m.zr] = m;
                    g[J] = m.zr;
                    g[G] = !0;
                    m.aa = g;
                    b.l.b.zaxs("adElementUpdate");
                    m.INITIAL_WIDTH = g.offsetWidth;
                    m.INITIAL_HEIGHT = g.offsetHeight;
                    m.ae = d;
                    m.an = c(g);
                    0 === m.an && (m.WMODE = k(g));
                    m.ag = p || {};
                    b.r.c(m);
                    l = {
                        e: 0
                    };
                    l.q = m.aq[0]++;
                    b.v.a(m, l);
                    return m
                }
                return new e(l)
            };
            b.d.e = function(c) {
                c.de = isNaN(c.ao.startTime) ? +new x : c.ao.startTime;
                c.RAND = c.ao.rand;
                (new x).getTime();
                c.dd = !0;
                b.t.e(c);
                b.c.b || b.ad.a.a();
                b.r.c(c);
                b.p.e("newad", c.zr);
                c.aa.parentNode && "swiffycontainer" === c.aa.parentNode.id && b.q.b(["..../../iframe ~ #clicktag"], c, c.aa.parentNode);
                b.l.b.zaxs("startAdTracking", c);
                b.c.cw && b.c.cw() && b.c.cx().qmrv(function() {
                    c.preventTryFindingAdAgain = !0;
                    b.y.d(c)
                });
                var d = {
                    e: 0
                };
                d.q = c.aq[0]++;
                b.v.a(c, d)
            };
            b.d.b = function() {
                var c, d;
                for (d in A) A.hasOwnProperty(d) && (c = A[d]) && !c.ep && b.y.d(c)
            };
            b.d.c = function(c) {
                var d = +new x,
                    e = d - c.ci;
                if (0 < c.doa.length) {
                    var h = 1E3 * c.doa[0];
                    if (c.counters.laxDwell.tCur >=
                        h) {
                        c.doa.shift();
                        var k = c.es.length ? c.es[0] : 60;
                        if (h < k) return !1;
                        if (5E3 < e) return !0
                    }
                }
                return 0 < c.es.length && (k = 1E3 * c.es[0], b.t.k(c, k)) ? (c.es.shift(), !0) : 0 === c.doa.length && d > c.cc ? (c.cc *= 2, !0) : !1
            };
            b.d.f = function(b, c) {
                for (var e = 0; e < c.length; e++) {
                    var h = c[e];
                    h[J] = b;
                    h[G] = !0
                }
            };
            b.d.g = function(c, d) {
                b.a.a(d.cc);
                b.d.h(d);
                b.d.a(d, 1) && b.l.b.sxaz("adKilled", {
                    id: c
                })
            };
            b.d.i = function(c, d) {
                b.d.a(d) && b.l.b.sxaz("adNotFound", {
                    id: c
                })
            };
            b.d.a = function(c, d) {
                var e = 0;
                for (prop in A) A.hasOwnProperty && A.hasOwnProperty(prop) && e++;
                return e <= (d || 0) ? (b.l.b.esgf("allLocalAdsKilled"), !0) : !1
            };
            b.d.j = function(b) {
                b.ep = !0;
                delete A[b.zr];
                b.aa[G] = null;
                b.aa = null
            };
            b.d.h = function(c) {
                if (c && c.video && !c.video.started) return !1;
                var d = {
                    e: 21
                };
                d.q = c.aq[21]++;
                b.ae && b.ae.a && b.ae.a(c);
                b.v.a(c, d);
                c.unloadPixelSent = !0
            };
            b.l.b.azsx("adKilled", b.d.g, {
                includeId: !0
            });
            b.l.b.azsx("adNotFound", b.d.i, {
                includeId: !0
            });
            b.d.k = function(c, d, e, k, v, m, z) {
                d = b.d.d(c[0], d, e, k, v, m, z);
                d.isCompositeAd = !0;
                d.components = c;
                h(d, c);
                return d
            };
            b.d.l = function() {
                var c = Array.prototype.slice.call(arguments),
                    d = c.shift(),
                    e = b.d.m(d);
                c.unshift(e);
                c = b.d.d.apply(null, c);
                e.zr = c.zr;
                h(c, d);
                return c
            };
            b.d.m = function(c) {
                var d = document.createElement("div");
                d.style.cssText = "position: absolute;";
                d.style.zIndex = -1;
                d.id = "moat-standin";
                d.pageWin = F;
                d.components = c;
                d.getComponentDims = function() {
                    for (var b = this.components, c = this.pageWin, d = c.document, c = void 0 !== c.pageYOffset ? c.pageYOffset : (d.documentElement || d.body.parentNode || d.body).scrollTop, e = d = 1E5, h = 0, g = 0, k = 0, w = b.length; k < w; k++) {
                        var q = b[k].getBoundingClientRect(),
                            E = q.bottom -
                            q.top,
                            I = q.right - q.left;
                        E * I && (q.top < d && (d = q.top), q.left < e && (e = q.left), h += E, I > g && (g = I))
                    }
                    return {
                        top: d + c,
                        w: g,
                        h: h,
                        left: e
                    }
                };
                d.resize = function(b) {
                    this.dims = b;
                    this.style.top = b.top + "px";
                    this.style.left = b.left + "px";
                    this.style.width = b.w + "px";
                    this.style.height = b.h + "px"
                };
                d.getSpecialBoundingClientRect = function() {
                    var b = this.dims;
                    return {
                        top: b.top,
                        height: b.h,
                        width: b.w,
                        left: b.left,
                        right: b.left + b.w,
                        bottom: b.top + b.h
                    }
                };
                d.areEqualDims = function(b, c) {
                    for (var d in b)
                        if (b.hasOwnProperty(d) && b[d] - c[d]) return !1;
                    return !0
                };
                d.lastCheckedSize =
                    0;
                d.respondToWinResize = function() {
                    return function() {
                        var b = +new x;
                        if (150 <= b - d.lastCheckedSize) {
                            var c = d.dims,
                                e = d.getComponentDims();
                            d.areEqualDims(c, e) || d.resize(e)
                        }
                        d.lastCheckedSize = b
                    }
                }();
                d.resize(d.getComponentDims());
                document.body.appendChild(d);
                var e = b.h.e(function() {
                    d.lastCheckedSize = +new x;
                    var c = d.getComponentDims();
                    d.areEqualDims(d.dims, c) || d.resize(c);
                    c = d.getSpecialBoundingClientRect();
                    if (0 > c.top && 0 > c.bottom || !(c.height * c.width) || 0 > c.left && 0 > c.right) b.y.d(A[d.zr]), document.body.removeChild(d),
                        clearInterval(e)
                }, 250);
                b.h.c(window, "resize", d.respondToWinResize);
                return d
            }
        })(r);
        (function(b) {
            function k(b) {
                var c = [];
                if ("string" !== typeof b) return !1;
                var e;
                e = 4 > b.length ? !1 : ".../" === b.substring(b.length - 4);
                if (e) return !1;
                var h;
                for (e = !1; b;) {
                    if (g(b, ".../")) h = ".../";
                    else if (g(b, "...../")) h = "...../";
                    else if (g(b, "../") || g(b, "..../")) {
                        h = g(b, "../") ? "../" : "..../";
                        for (var k = h.length; g(b.substring(k), h);) k += h.length;
                        h = b.substring(0, k)
                    } else g(b, "=>/") ? h = "=>/" : g(b, "-/") ? h = "-/" : g(b, "+/") ? h = "+/" : g(b, "$[") ? (h = b.length,
                        k = d(b, "]/") + 2, h = b.substring(0, u.min(h, k))) : g(b, "^/") ? h = "^/" : g(b, "IN_IFRAME/") ? h = "IN_IFRAME/" : g(b, "IN_X_FRAME/") ? h = "IN_X_FRAME/" : (h = b.length, k = d(b, "/") + 1, h = b.substring(0, u.min(h, k)), e = !0);
                    if (("../" === h || ".../" === h) && ".../" === (c.length && c[c.length - 1]) || ".../" === h && "../" === (c.length && c[c.length - 1])) return !1;
                    if (b = b.substring(h.length)) {
                        if ("/" !== h.substring(h.length - 1)) return !1;
                        e && (h = h.substring(0, h.length - 1), e = !1)
                    }
                    c.push(h)
                }
                return c
            }

            function e(c) {
                if (!c) return !1;
                if (!b.c.g || 10 < b.a.p() || c.querySelectorAll &&
                    c.querySelector && (!c.MoatQSShimSet || c[h])) return !0;
                c.querySelector = function(b) {
                    b = this.querySelectorAll(b);
                    return b.length ? b[0] : null
                };
                c.querySelectorAll = function(b) {
                    var c = [],
                        d = this.ownerDocument || document,
                        e = d.createElement("style");
                    (d = d.getElementsByTagName("head")[0]) && d.insertBefore(e, d.childNodes[u.max(d.childNodes.length - 1, 0)] || null);
                    e && e.styleSheet && (e.styleSheet.cssText = b + "{shimtest:bar}");
                    b = this.getElementsByTagName("*");
                    for (var d = b.length, h = 0; h < d; h++) b[h].currentStyle && "bar" === b[h].currentStyle.shimtest &&
                        (c[c.length] = b[h]);
                    e.parentNode.removeChild(e);
                    return c
                };
                c.MoatQSShimSet = !0;
                return c[h] = !0
            }

            function c(c, d, h) {
                var m = function(c, d) {
                    if (!c || !d) return !1;
                    if (c.matches) return c.matches(d);
                    if (!e(c.parentNode)) return !1;
                    var h = c.parentNode.querySelectorAll(d);
                    if (!h || !h.length) return !1;
                    var g = !1;
                    b.a.forEach(h, function(b) {
                        b === c && (g = !0);
                        return !g
                    });
                    return g
                };
                c = k(c);
                if (!c) return !1;
                for (var r = d, l = 0, n = [], t = function(c) {
                        return c && b.f.b(c)
                    }, L = function(b) {
                        return b && b.parentElement
                    }, q = function(c) {
                        return c ? (c = b.f.d(c)) && c.body :
                            !1
                    }, E = function(b, c, d) {
                        return b ? (b = b.getAttribute(c)) && (d = (new RegExp(d)).exec(b)) && d.length && 0 < d.length ? d[d.length - 1] : !1 : !1
                    }, I = 0; I < c.length && 100 > l; I++) {
                    var C = c[I];
                    if (g(C, "../") || g(C, "..../")) {
                        var B, U;
                        g(C, "../") ? (B = "../", U = L) : (B = "..../", U = t);
                        if (0 !== C.length % B.length) return !1;
                        for (var u = 0; u < C.length / B.length; u++) {
                            if (!r || "HTML" === r.nodeName) return !1;
                            r = U(r);
                            l++
                        }
                    } else if (".../" === C)
                        for (; 100 > l;) {
                            if (r && m(r, c[I + 1])) {
                                I++;
                                break
                            }
                            if (!r || "HTML" === r.nodeName) return !1;
                            r = r.parentElement;
                            l++
                        } else if ("...../" === C) {
                            r =
                                b.c.d && b.c.d.document && b.c.d.document.body;
                            if (!r) return !1;
                            l++
                        } else if ("=>/" === C) {
                        r = q(r);
                        if (!r) return !1;
                        l++
                    } else if ("-/" === C) {
                        r = b.a.previousElementSibling(r);
                        if (!r) return !1;
                        l++
                    } else if ("+/" === C) {
                        if (r = b.a.nextElementSibling(r), !r) return !1
                    } else if (g(C, "$["))
                        if (C = (u = (C = C.substring(2, C.length - 2)) && C.split("|")) && u[0], u = u && u[1], C && u)
                            if (C = E(r, C, u)) n.push(C), l++;
                            else return !1;
                    else return !1;
                    else if ("^/" === C) {
                        r = d;
                        if (!r) return !1;
                        l++
                    } else if ("IN_IFRAME/" === C) {
                        if (!b.c.e) return !1;
                        l++
                    } else if ("IN_X_FRAME/" === C) {
                        if (!b.c.cy) return !1;
                        l++
                    } else {
                        if (n && 0 < n.length)
                            for (B = n.length, u = 0; u < B; u++) C = C.replace("$" + u, n[u]);
                        if (!m(r, C)) {
                            if (!e(r)) return !1;
                            r = r.querySelectorAll(C);
                            if (h && I === c.length - 1) return r ? r : !1;
                            if (!r || 1 !== r.length) return !1;
                            r = r[0]
                        }
                    }
                }
                return r
            }
            b.q = {};
            var h = "MoatQSShimOrd_HEALTHLINECONTENT1_" + b.c.r,
                g = function(b, c) {
                    return 0 === b.indexOf(c) && c
                },
                d = function(b, c) {
                    var d = b.indexOf(c);
                    return 0 > d ? b.length + 1 : d
                };
            b.q.a = function(d, e) {
                var h = [];
                b.a.forEach(d, function(b) {
                    (b = c(b, e)) && h.push(b)
                });
                return h
            };
            b.q.c = function(d, e) {
                var h = [];
                b.a.forEach(d,
                    function(b) {
                        if (b = c(b, e, !0))
                            for (var d = 0; d < b.length; d++) h.push(b[d])
                    });
                return h
            };
            b.q.b = function(c, d, e) {
                c = b.q.a(c, e);
                b.a.forEach(c, function(c) {
                    b.r.a(d, c)
                });
                return !!c
            }
        })(r);
        (function(b) {
            function k(c, d, e, h) {
                var g, k, l, p = b.c.d.document.getElementById("eyeDiv");
                if (H && H.id && 0 <= H.id.indexOf("ebebDnlScript")) {
                    var w = H.id.split("_");
                    w && 3 === w.length && (l = w[1], g = w[2])
                }
                l = l || window.ebAdID;
                g = g || window.ebRand;
                l && g && (k = l + "_" + g);
                if (k && "object" === typeof window.ebAds && window.ebAds[k] && (g = window.ebAds[k].visibilityMgr && window.ebAds[k].visibilityMgr._res) &&
                    b.a.ao(g) && (g = b.d.d(g, g.nodeName, !1, void 0, d, e))) return g;
                if (l && window.gEbBanners && b.a.be(window.gEbBanners)) {
                    var v = !1;
                    b.a.forEach(window.gEbBanners, function(b) {
                        if (b && b.adData && b.adData.nAdID == l) return v = b, !1
                    });
                    if (v && (g = v.displayUnit && v.displayUnit.defaultPanel && v.displayUnit.defaultPanel.panelDiv) && g.nodeName && "div" == g.nodeName.toLowerCase() && (g = m(g, d, e, h))) return g
                }
                g = c.getElementsByTagName("div");
                g = b.a.bb(g);
                "DIV" === c.nodeName && g.push(c);
                if (g && 0 < g.length) {
                    var r = [];
                    b.a.forEach(g, function(b) {
                        b && b.id &&
                            b.id.match(/ebDiv\d+/) && r.push(b)
                    });
                    if (r && 0 < r.length && b.c.d && b.c.d.document) {
                        var u;
                        b.a.forEach(r, function(c) {
                            var d = b.c.d.document.getElementById(c.id);
                            if (d && d !== c) return u = d, !1
                        });
                        if (u) {
                            if (g = m(u, d, e, h)) return g;
                            if (u && b.a.ao(u) && h(u)) {
                                if (g = b.d.d(u, u.nodeName, !1, void 0, d, e)) return g
                            } else {
                                c = u.getElementsByTagName("iframe");
                                g = "ebBannerIFrame_\\d+_" + u.id.split("ebDiv")[1];
                                var z = new RegExp(g),
                                    x;
                                if (c && 0 < c.length && (b.a.forEach(c, function(c) {
                                        if (c && c.id && c.id.match(z) && b.a.ao(c)) return x = c, !1
                                    }), x && h(x) && (g =
                                        b.d.d(x, x.nodeName, !1, void 0, d, e)))) return g
                            }
                        }
                    }
                }
                if (k && p) {
                    if (g = b.s.m(["iframe[id*='leftgutter_iframe_" + k + "']", "iframe[id*='rightgutter_iframe_" + k + "']"], p, d, e)) return g;
                    if (h = b.q.a(["div[id*='" + k + "']"], p)[0])
                        if ((g = m(h, d, e)) || b.a.ao(h) && (g = b.d.d(h, h.nodeName, !1, void 0, d, e))) return g
                }
            }

            function e(c, d, e, h, g) {
                function k(c) {
                    return c ? b.q.a(["div.jpstage"], c)[0] || !1 : !1
                }
                var l = k(c),
                    m = b.c.d.document;
                h && !l && (l = b.q.a(["..../../div.jpplatform_" + h, "...../div[id='jpplatform_" + h + "']", "...../div.jpplatform_" + h], c)[0]);
                l || (l = k(m.getElementById("jpsuperheader")));
                l || (l = k(b.a.getElementsByClassName("jpeditorialunit", "DIV", m.body)[0]));
                l || (l = k(m.getElementById("jpd_adhesion")));
                l || (c = (c = m.getElementById("jp_overlay") || h && m.getElementById("jp_overlay_" + h)) && b.a.getElementsByClassName("jppanel", "DIV", c)) && 1 <= c.length && b.a.forEach(c, function(c) {
                    if (c && b.a.ao(c)) return l = c, !1
                });
                l || (m = m.getElementById("jpd_expfooter"), l = k(m));
                if (l && b.a.ao(l) && g(l) && (ad = b.d.d(l, l.nodeName, !1, void 0, d, e))) return ad
            }

            function c(c, d, e, h) {
                c = c.getElementsByTagName("iframe");
                var g, k, l;
                b.a.forEach(c, function(c) {
                    if ((g = b.f.d(c)) && (k = g.getElementsByTagName("video")[0]) && k.parentNode && b.a.ao(k.parentNode)) return l = k.parentNode, !1
                });
                if (l && h(l) && (d = b.d.d(l, l.nodeName, !1, void 0, d, e))) return b.r.a(d, l && l.ownerDocument && l.ownerDocument.body), d
            }

            function h(c, d, e, h) {
                if (c && c.innerHTML && -1 < c.innerHTML.indexOf("Interstitial") || -1 < c.innerHTML.indexOf("Overlay"))
                    if (h = (c = b.q.a([".flite-lightbox iframe"], b.c.d.document.body)[0]) && b.f.d(c))
                        if (d = b.s.l(h.documentElement, d, e, c)) return d
            }

            function g(c,
                d, e, h) {
                if ((c = b.a.getElementsByClassName("originplatform-ad", "SCRIPT", c)[0]) && c.id && (c = c.id.match(/embed_origin_(\d+)/)) && c[1] && (c = "OriginPlatformAdUnit-" + c[1] + "-inpage", c = document.getElementById(c) || b.c.w && b.c.d.document.getElementById(c)) && (d = b.d.d(c, c.nodeName, !1, void 0, d, e))) return d
            }

            function d(c, d, e, h) {
                var g = b.s.h([".../span[id^='GGADad_ii']"], c, d, e);
                if (g) return b.q.b(["span[id^='GGADad_ii'] span[id$='BODY'] iframe"], g, g.aa), g;
                if ((g = b.s.h(["#inGGUID"], c, d, e)) || (g = b.s.h(["#GGUID"], c, d, e))) return g;
                g = b.a.getElementsByClassName("GG_ad", "*", c);
                if (g[0] && b.a.ao(g[0]) && h(g[0]) && (g = b.d.d(g[0], g[0].src, !1, void 0, d, e))) return g;
                var g = c.getElementsByTagName("span"),
                    k;
                b.a.forEach(g, function(c) {
                    if (-1 < c.id.indexOf("GGADad_ii") && b.a.ao(c)) return k = c, !1
                });
                if (k && h(k) && (g = b.d.d(k, k.nodeName, !1, void 0, d, e))) return g;
                var l = /ad_is_\d+/,
                    m;
                b.a.forEach(c.getElementsByTagName("div"), function(b) {
                    if (b.id.match(l)) return m = b, !1
                });
                if (m && b.a.ao(m) && h(m) && (g = b.d.d(m, m.nodeName, !1, void 0, d, e))) return b.q.b(["iframe/=>/div[id*='ad_is']"],
                    g, m), g;
                if ((c = c.ownerDocument.getElementById("gg-main")) && b.a.ao(c) && h(c) && (g = b.d.d(c, c.src, !1, void 0, d, e))) return g
            }

            function w(c, d, e, h, g) {
                if (h && (c = b.s.h(["...../div[id^='scr_" + h + "'][id*='remotediv'] iframe"], c, d, e))) return c
            }

            function p(c, d, e, h) {
                var g, k, l, p = c.childNodes,
                    w = !1;
                for (g = p.length - 1; 0 <= g; g--) {
                    var v = p[g];
                    "#comment" === v.nodeName && /undertone/i.test(v.nodeValue) ? w = !0 : "STYLE" === v.nodeName && (v = v.innerHTML.match(/(utpga\d+).+/i)) && 2 === v.length && (l = v[1])
                }
                if (w) {
                    g = b.c.w ? (g = b.f.f(c)) && g.ownerDocument ?
                        g.ownerDocument : document : document;
                    l && (k = g.getElementById(l), !k && b.c.w && (k = document.getElementsById(l)));
                    k || (l = g.getElementsByTagName("div"), b.a.forEach(l, function(b) {
                        if (b && b.id && b.id.match("utpga")) return k = b, !1
                    }), !k && b.c.w && (l = document.getElementsByTagName("div"), b.a.forEach(l, function(b) {
                        if (b && b.id && b.id.match("utpga")) return k = b, !1
                    })));
                    if (k && ((ad = m(k, d, e, h)) || b.a.ao(k) && h(k) && (ad = b.d.d(k, k.nodeName, !1, void 0, d, e))) || (l = document.getElementById("utbanner") || b.c.w && b.c.d.document.getElementById("utbanner")) &&
                        (l = b.f.d(l)) && l.body && (ad = m(l.body, d, e, h))) return ad;
                    if ((l = b.a.getElementsByClassName("ut_container", "DIV")[0] || b.c.w && b.a.getElementsByClassName("ut_container", "DIV", b.c.d.document)[0]) && b.a.ao(l) && h(l)) return b.d.d(l, l.nodeName, !1, void 0, d, e, {
                        adType: 2
                    });
                    if (e = document.getElementById("eyeDiv") || b.c.w && b.c.d.document.getElementById("eyeDiv"))
                        for (e = e.getElementsByTagName("object"), g = 0; g < e.length; g++)
                            if (l = e[g], "fixed" == l.style.position && b.a.ao(l) && h(l)) return b.d.d({
                                el: l,
                                adIds: d
                            })
                }
            }

            function v(c, d, e,
                h, g) {
                if ((c = b.s.h(["[tleid]"], c, d, e)) || d.tlview_id && (c = document.getElementById(d.tlview_id) || b.c.d.document.getElementById(d.tlview_id)) && b.a.ao(c) && (c = b.d.d(c, c.nodeName, !1, void 0, d, e)) || window._tlCreatives && 1 === window._tlCreatives.length && window._tlCreatives[0].hook && (c = (c = window._tlCreatives[0].hook) && b.s.h(["-/[tleid]"], c, d, e))) return c
            }

            function m(c, d, e, h) {
                h = h || function() {
                    return !0
                };
                if (!c) return !1;
                var g = b.q.a(["div.celtra-ad-v3"], c)[0];
                if ((g = g && g.celtra && g.celtra.viewabilityObservee) && b.a.ao(g)) return d.cadf =
                    "Celtra API", b.d.d(g, g.nodeName, !1, void 0, d, e);
                var g = b.a.p(),
                    k = null !== g && 11 > g;
                if (!k)
                    for (var l = c.getElementsByTagName("embed"), g = 0; g < l.length; g++) {
                        var m = l[g];
                        if (!0 !== m[G] && -1 === m.id.indexOf("moatPx") && b.a.ao(m) && m.getAttribute("src") && h(m)) {
                            var p = m.getAttribute("src");
                            h = b.aa.a(p, m);
                            return b.d.d(m, p, !1, h, d, e)
                        }
                    }
                for (var w = c.getElementsByTagName("object"), g = 0; g < w.length; g++)
                    if (l = w[g], b.a.ao(l) && h(l) && ("undefined" === typeof l[G] || !0 !== l[G]) && -1 == l.id.indexOf("moatPx")) {
                        for (var v = 0; v < l.children.length; v++)
                            if ("movie" ===
                                l.children[v].name || "Movie" === l.children[v].name)
                                if (p = l.children[v].value, !p || !p.match("scorecardresearch"))
                                    for (var r = 0; r < l.children.length; r++) {
                                        if (!k && "EMBED" === l.children[r].tagName) {
                                            m = l.children[r];
                                            if ("undefined" !== typeof m[G] && !0 === m[G] || -1 != m.id.indexOf("moatPx")) continue;
                                            if (b.a.ao(m) && h(m)) return h = b.aa.a(p, m), b.d.d(m, p, !1, h, d, e)
                                        }
                                        if ("OBJECT" === l.children[r].tagName && (m = l.children[r], b.a.ao(m) && !0 !== m[G] && -1 === m.id.indexOf("moatPx") && h(m))) return b.d.d(m, void 0, !1, void 0, d, e)
                                    }
                        l.object && l.object.Movie ?
                            p = l.object.Movie : l.data && (p = l.data);
                        if (!p || !p.match("scorecardresearch")) return h = b.aa.a(p, l), b.d.d(l, p, !1, h, d, e)
                    }
                if (p = b.s.j(c, d, e, h)) return p;
                p = c.getElementsByTagName("img");
                for (g = 0; g < p.length; g++)
                    if (k = p[g], ("undefined" === typeof k[G] || !0 !== k[G]) && b.a.ao(k) && (m = k.getAttribute("src")) && "" !== m && -1 === document.location.href.indexOf(m) && h(k)) return b.d.d(k, m, !1, void 0, d, e);
                if (p = (c = c.getElementsByTagName("canvas")) && c[0]) {
                    var u;
                    h(p.parentNode) && b.a.ao(p.parentNode) && (u = b.d.d(p.parentNode, p.parentNode.nodeName, !1, void 0, d, e));
                    if (u) return u;
                    if (1 === c.length && b.a.ao(p) && (u = b.d.d(p, p.nodeName, !1, void 0, d, e))) return b.c.e ? b.q.b([".../body"], u, p) : b.q.b(["../div"], u, p), u
                }
                return !1
            }

            function r(c, d) {
                for (var e = [], h = b.a.be(c) ? c : c.getElementsByTagName("iframe"), g, k = 0; k < h.length; k++)
                    if (g = h[k], !g[G]) {
                        var l = b.f.d(g) ? !1 : !0;
                        (1 === d && l && b.a.ao(g) || 2 === d && !l) && e.push(g)
                    }
                return e
            }
            b.s = {};
            b.s.c = function(c, d, e, h, g) {
                var k = b.s.d,
                    l = b.s.e,
                    m = 0,
                    p = function() {
                        d.numTries = m++;
                        var g = k(c, d, e, h);
                        g && b.p.g(g);
                        X && d && (d.cadf = d.cadf ? d.cadf + (" | " +
                            X) : X);
                        return g && g !== b.p.a
                    };
                if (b.c.b) {
                    var w, v;
                    d && (w = "skin" in d && 1 == d.skin, v = "format" in d && "Wallpaper" == d.format);
                    if (w || v) "width" == b.u.b && b.u.d(), d.skin = 1, w ? d.isSkin = 1 : v && (d.isAolSkin = 1), p = function() {
                        var c, h = b.c.d.document.body;
                        d.numTries = m++;
                        if (b.u.e.a(h, d)) return h && b.a.ao(h) && (c = b.a.aa(h), c = b.d.d(h, c || h.nodeName, !1, void 0, d, e)), c && !0
                    }
                }
                b.h.k(p, l, 500, g)
            };
            b.s.j = function(c, d, e, h) {
                h = h || function() {
                    return !0
                };
                c = r(c, 1);
                if (c[0] && b.a.ao(c[0]) && h(c[0])) return b.d.d(c[0], c[0].src, !1, void 0, d, e)
            };
            b.s.i = function(c,
                d, e, h) {
                var g, k;
                c = b.s.a(h || c, b.s.b);
                for (h = 0; h < c.length; h++) {
                    k = c[h];
                    var l = b.f.d(k);
                    if (l && l.documentElement) {
                        a: {
                            g = d;
                            var p = e,
                                w = k;
                            if (w.id && w.id.match("ebBannerIFrame") && b.a.ao(w) && (g = b.d.d(w, w.nodeName, !1, void 0, g, p))) break a;g = void 0
                        }
                        if (g) return d.cadf = "Friendly Sizmek Iframe", g;a: {
                            g = d;p = e;w = l;
                            if ("MEDIALETS_FRAME" === k.className && (k = w.getElementById("container") || w.getElementById("ad") || w.getElementById("click") || w.getElementById("Stage")) && b.a.ao(k)) {
                                var w = b.a.z(w.documentElement),
                                    w = (w = b.a.y(k, "background-image",
                                        w)) && w.match(/url\((.*)\)/),
                                    v = void 0;
                                w && 2 === w.length && (v = w[1]);
                                g = b.d.d(k, v || k.nodeName, !1, void 0, g, p);
                                break a
                            }
                            g = void 0
                        }
                        if (g) return d.cadf = "Medialets", g;
                        if ((g = m(l.documentElement, d, e)) || (g = b.s.k(l.documentElement, d, e)) || (g = b.s.l(l.documentElement, d, e))) return g
                    }
                }
            };
            b.s.k = function(c, d, e) {
                var h, g;
                c = b.s.a(c, b.s.b);
                for (var k = 0; k < c.length; k++) {
                    g = c[k];
                    var l = b.f.d(g);
                    if (l && l.documentElement) {
                        if ((h = b.s.l(l.documentElement, d, e, g)) || (h = m(l.documentElement, d, e))) return h;
                        l = b.s.a(l.documentElement, b.s.b);
                        for (g =
                            0; g < l.length; g++) {
                            h = l[k];
                            var p = b.f.d(h);
                            if (p && p.documentElement && (h = b.s.l(p.documentElement, d, e, h))) return h
                        }
                    }
                }
            };
            b.s.l = function(c, d, e, h) {
                c = c && c.ownerDocument && c.ownerDocument.body;
                var g;
                if ((c = c && c.children && c.children[0]) && c.id && c.id.match(/flite-\d+$/) && (c && h && h.parentNode && h.parentNode.className && h.parentNode.className.match("flite-div") && b.a.ao(h.parentNode) ? g = h.parentNode : c && h && h.className && h.className.match("flite-ad") && b.a.ao(h) ? g = h : c && h && h.parentNode && h.parentNode.parentNode && h.parentNode.parentNode.className.match("flite-lightbox") &&
                        b.a.ao(h.parentNode.parentNode) && (g = h.parentNode.parentNode), g && (d.cadf = "Flite", d = b.d.d(g, g.nodeName, !1, void 0, d, e)))) return b.r.a(d, c), b.r.a(d, h), d
            };
            b.s.g = function(c, d, e) {
                if ("function" !== typeof e && (c = b.p.f(c, d.adNum))) return c === b.p.a ? b.p.a : b.d.d(c, "div", !1, void 0, d, e)
            };
            b.s.n = function(c, d) {
                if (!T) {
                    var e = (new x).getTime() - d.ao.startTime;
                    !0 !== d.em && !0 !== d.preventTryFindingAdAgain && 5E3 > e && (b.s.o(d), c.shouldKillAd = !1)
                }
            };
            var l = b.l.b.azsx("beforeAdKilled", b.s.n);
            b.l.b.azsx("allLocalAdsKilled", function() {
                b.l.b.sxaz("beforeAdKilled", {
                    id: l
                })
            }, {
                once: !0
            });
            b.s.p = function(b) {};
            b.s.o = function(c) {
                if (!0 !== c.em) {
                    delete A[c.zr];
                    b.a.a(c.cc);
                    c.periscopeManager && c.periscopeManager.killAllPixels();
                    var d;
                    (d = H && H.parentNode) && b.s.c(d, c.ao, c, void 0, function() {
                        b.y.d(c)
                    })
                }
            };
            b.s.h = function(c, d, e, h) {
                c = b.q.a(c, d);
                var g;
                b.a.forEach(c, function(c) {
                    if (b.a.ao(c)) return g = c, !1
                });
                if (g) return c = b.a.aa(g) || g.src || "DIV", b.d.d(g, c, !1, void 0, e, h)
            };
            b.s.m = function(c, d, e, h) {
                c = b.q.a(c, d);
                var g = [];
                b.a.forEach(c, function(c) {
                    b.a.ao(c) && g.push(c)
                });
                if (g && 0 < g.length) return c =
                    b.a.aa(g[0]) || g[0].src || "DIV", b.d.k(g, c, !1, void 0, e, h)
            };
            b.s.f = m;
            b.s.d = function(l, m, r, q, E) {
                E = E || function() {
                    return !0
                };
                var u = b.s.f,
                    C = b.s.g;
                if ("undefined" === typeof l) return !1;
                b.c.e && "HEAD" === l.tagName && (q = l.parentNode, "HTML" === q.tagName && (q = q.getElementsByTagName("body"), 0 < q.length && (l = q[0])));
                var B;
                if (B = b.s.h(["[id='ad']"], l, m, r)) return m.cadf = "ad", B;
                if (b.c.ad && b.c.ad() && "AdMarvel" == b.c.ad() && (B = b.s.h(["[class='omws-container']", "[id='fill-wrapper']"], l, m, r))) return B;
                if (B = k(l, m, r, E)) return m.cadf = "Sizmek",
                    B;
                if (B = d(l, m, r, E)) return m.cadf = "GumGum", B;
                q = (q = b.c.e ? l.ownerDocument.documentElement : l) && q.getElementsByTagName("script");
                var z = {},
                    x, K;
                q && 0 < q.length && (z.jpd = /ads.jetpackdigital.com\/lineitems\/(\d+)\/jpd/, b.a.ae() && (z.kargo = /kargo.com\/ad\/campaign\/rm\/kargo\/kstream\/spritevideo/), z.adrcdn = /cntr.adrcntr.com.*\?id=([0-9a-z]*)&/, z.flite = /r.flite.com\/syndication\/uscript/, z.quartz = /ads.qs.com/, b.a.forEach(q, function(b) {
                    for (var c in z)
                        if (z.hasOwnProperty(c)) {
                            var d = b && b.getAttribute("src");
                            if (d && (x =
                                    d.match(z[c]))) return K = c, !1
                        }
                }));
                q = l && l.id;
                if ((B = l && l.className) && (B.match("jpeditorialunit") || B.match("jpbanner")) || q && q.match("jpplatform")) K = "jpd";
                if (K && "jpd" === K && (B = e(l, m, r, x && x[1], E))) return m.cadf = "JPD", B;
                if (K && "kargo" === K && (B = c(l, m, r, E))) return m.cadf = "Kargo", B;
                if (K && "flite" === K && (B = h(l, m, r, E))) return m.cadf = "Flite Lightbox", B;
                if (B = g(l, m, r, E)) return m.cadf = "Origin", B;
                if (B = v(l, m, r, E)) return m.cadf = "Triplelift", B;
                if (B = b.s.h(["[id='qzad']"], l, m, r)) return m.cadf = "Quartz", B;
                if ((B = C(l, m, r)) || (B =
                        u(l, m, r, E)) || (B = b.s.i(l, m, r))) return B;
                if (q = b.f.f(l))
                    if (B = b.s.i(q, m, r)) return B;
                return !Ba && !q || !(q = q || b.f.f(l)) || b.c.b && "BODY" === q.nodeName && b.a.z(q) == b.c.d || !(B = C(q, m, r)) && !(B = u(q, m, r, E)) ? (B = p(l, m, r, E)) ? (m.cadf = "Undertone", B) : (B = b.s.h(["../iframe#verve-banner", ".../body/iframe#verve-expandable/=>/div.content", ".../body/iframe#verve-expandable", "iframe#verve-banner/=>/div.content", "iframe#verve-banner"], l, m, r)) ? (m.cadf = "Verve", B) : K && "adrcdn" === K && (u = x && x[1]) && (B = w(l, m, r, u, E)) ? (m.cadf = "ADRCDN", B) :
                    !1 : B
            };
            b.s.a = r;
            b.s.q = 1;
            b.s.b = 2;
            b.s.r = 500;
            b.s.e = 20;
            b.s.s = {
                object: 1,
                embed: 1,
                img: 1,
                iframe: 1
            }
        })(r);
        (function(b) {
            function k(e, c, h) {
                h = {};
                e = e.replace(/&amp;/g, "&").replace(/(^\s+|\s+$)/g, "");
                e = e.split("&");
                for (var g = 0; g < e.length; g++) {
                    var d = e[g].split("=");
                    if ("string" === typeof d[1]) {
                        d[0] && d[0].match("moatClient") && (h["rawM" + d[0].slice(1)] = d[1]);
                        var k = d,
                            p, v = p = d[1];
                        try {
                            for (var m = 0; 100 > m && (p = decodeURIComponent(p), v != p) && !p.match(/^http(s)?\:/); m++) v = p
                        } catch (r) {}
                        p = p.replace(/(^\s+|\s+$)/g, "");
                        k[1] = p
                    } else d[1] =
                        "";
                    h[d[0]] = d[1]
                }
                "undefined" !== typeof c && (h.clientZone = "undefined" !== c ? c : "");
                return h = b.g.f(h)
            }
            b.g = {};
            b.g.b = function(e, c) {
                if (!e) return !1;
                if ("undefined" === typeof e.startTime || c) e.startTime = b.c.r;
                if ("undefined" === typeof e.rand || c) e.rand = u.floor(u.random() * u.pow(10, 12));
                "undefined" === typeof e.adNum && (e.adNum = y.zr, y.zr++)
            };
            b.g.c = function(e) {
                if (!e) return !1;
                var c = b.a.e();
                b.a.i();
                decodeURIComponent(c);
                return e
            };
            b.g.d = function(e) {
                return b.g.a(e)
            };
            b.g.a = function(b) {
                try {
                    var c = b.className,
                        h = b.getAttribute("src");
                    c.split("\n").join(" ");
                    if (-1 !== c.indexOf("moatfooter")) return !1;
                    var g = h.split("?"),
                        d = h.split("#");
                    b = !1;
                    1 < g.length && 1 < d.length && g[1].length < d[1].length && (b = !0);
                    if (1 == g.length || b) g = d;
                    return 1 < g.length ? k(g[1], "undefined") : !1
                } catch (w) {
                    return !1
                }
            };
            b.g.e = function(b) {
                if (!b) return !1;
                var c = {};
                try {
                    var h = b && b.className.replace("amp;", "").split("?")[1];
                    return c = h && k(h)
                } catch (g) {
                    return !1
                }
            };
            b.g.f = function(b) {
                if (b) {
                    for (var c in b) b.hasOwnProperty(c) && c && c.match("moatClientLevel") && "string" === typeof b[c] && (b[c] =
                        b[c].replace(/\:/g, "_").replace(/%3A/gi, "_"));
                    return b
                }
            };
            b.g.g = function(b) {
                try {
                    var c = zoneRegEx.exec(b.innerHTML);
                    0 < c.length && (zone = c[1]);
                    return zone
                } catch (h) {}
            };
            b.g.h = function(b) {
                return (b = unescape(unescape(unescape(unescape(b.innerHTML)))).match(/~fdr=(\d*).*?\/.*?;(\d*)/)) ? {
                    adid: b && b[1] || "-",
                    cid: b && b[2] || "-"
                } : !1
            };
            b.g.i = function(b, c) {
                return c || {}
            };
            b.g.j = function(b) {
                b = decodeURIComponent(decodeURIComponent(b)); - 1 < b.indexOf("anonymous.google") && (b = "anonymous.google");
                var c = b.match(/^(?:[^:]{1,}:\/\/)?(?::*\/?\/?)?(?:www\.)?([^\/:]*)/);
                c && c[1] && (b = c[1]);
                return b.split("/")[0]
            }
        })(r);
        (function(b) {
            function k(c, e) {
                var g, d = [],
                    k, p = b.a.o() ? 2048 : 7750,
                    v = e || {};
                k = {};
                c.fs = "98396";
                for (g in c) c.hasOwnProperty(g) && (1 != c.e || "x" !== g && "y" !== g && "c" !== g ? d.push(encodeURIComponent(g) + "=" + encodeURIComponent(c[g])) : k[g] = c[g].split("a"));
                g = d.join("&");
                var d = p - g.length,
                    m = 0;
                if ("undefined" !== typeof k.x) {
                    for (var r = 0, l = 0; l < k.x.length; l++)
                        if (r += k.x[l].length + (k.y[l] ? k.y[l].length : 0) + (k.c[l] ? k.c[l].length : 0), r < d) m++;
                        else break;
                    0 < m && (g += "&x=" + k.x.slice(0, m - 1).join("a"),
                        g += "&y=" + k.y.slice(0, m - 1).join("a"), g += "&c=" + k.c.slice(0, m - 1).join("a"))
                }
                for (var n in v) v.hasOwnProperty(n) && (k = "&" + encodeURIComponent(n) + "=" + encodeURIComponent(v[n]), k.length + g.length < p && (g += k));
                g = g.replace(/\x27/g, "%27");
                try {
                    var p = g,
                        t;
                    var v = g,
                        y = c.i,
                        q = new x,
                        E = [q.getFullYear(), ("0" + (q.getMonth() + 1)).slice(-2), ("0" + q.getDate()).slice(-2)].join("-"),
                        v = v + (y + E),
                        y = 0;
                    if (0 == v.length) t = y;
                    else {
                        for (q = 0; q < v.length; q++) var I = v.charCodeAt(q),
                            E = y,
                            E = (E << 5) - E + I,
                            y = E &= E;
                        t = u.abs(y)
                    }
                    g = p + ("&na=" + t)
                } catch (C) {}
                return g
            }

            function e(c, e) {
                c.j = 25 == e ? "string" == typeof b.c.c && b.c.c.slice(0, 500) || "" : b.a.l(b.c.c);
                if (!b.c.b) {
                    var g = b.a.f();
                    g && (c.lp = g)
                }
            }
            b.v = {};
            b.v.c = function(b, e) {
                b.hp = 1
            };
            b.v.b = function(c, h, g, d, w) {
                b.g.b(h, d);
                d = {};
                d.e = c;
                b.a.ax(d, g);
                d.i = "HEALTHLINECONTENT1";
                b.v.c(d, h);
                d.pl = h.IS_PAGE_LEVEL ? 1 : 0;
                h.doNotSample || (d.cm = b.af.a.getCM());
                try {
                    d.kq = b.c.d && b.c.d.devicePixelRatio
                } catch (v) {
                    d.kq = 1
                }
                if (11 === c) {
                    b.l.b.zaxs("adNotFound");
                    c = [];
                    for (var p in pa) pa.hasOwnProperty(p) && c.push(p + "=" + pa[p]);
                    d.k = c.join("&").slice(0, 300)
                }
                if (!(d.e in
                        ya)) {
                    d.bq = b.c.k;
                    1 === h.skin && (d.wp = 1 === h.isSkin ? 1 : 1 === h.isAolSkin ? 2 : 3);
                    d.f = Number(!ra);
                    e(d, d.e);
                    d.o = 3;
                    d.t = h.startTime;
                    d.de = h.rand;
                    d.m = 0;
                    d.ar = "69f9e92-clean";
                    b.a.bc(d, "ai", y.z);
                    d.q = y.m++;
                    d.cb = Q ? 1 : 0;
                    d.cu = sa;
                    d.ll = b.c.be || 0;
                    b.a.bc(d, "lm", b.c.bf);
                    d.ln = b.c.e ? 1 : 0;
                    b.a.ax(d, b.focus.getQueryString());
                    b.g.i(h, d);
                    if ("undefined" !== typeof h) {
                        d.d = h.moatClientLevel1 + ":" + h.moatClientLevel2 + ":" + h.moatClientLevel3 + ":" + h.moatClientLevel4;
                        if (h.flashVars)
                            for (f in h.flashVars) h.flashVars.hasOwnProperty(f) && (d[f] = h.flashVars[f]);
                        b.k && (d.qs = b.k.f);
                        b && b.af && b.af.b && b.af.b.vc && (d.vc = b.af.b.vc);
                        d.gw = "healthlinecontent451781663455";
                        d.fd = "1"
                    }
                    d.ac = 1;
                    d.it = b.s.r;
                    b.c.o().isInApp && (d.lv = b.c.av(), b.c.aw() || b.c.bb() && (d.lx = 1));
                    c = k(d);
                    p = ma;
                    h = b.v.d(h, c + "&cs=0", d);
                    if (!0 === w) return {
                        qs: d,
                        res: h
                    };
                    h.shouldSendPixel && h.querystring && (34 == d.e ? y.yh.yi(h.querystring, p, "afs.moatads.com", !0) : y.yh.yi(h.querystring, p, "afs.moatads.com", b.c.v))
                }
            };
            b.v.a = function(c, h, g) {
                if (!c || !0 === c.ep) return !1;
                b.v.c(h, c.ao);
                try {
                    h.kq = b.c.d && b.c.d.devicePixelRatio
                } catch (m) {
                    h.kq =
                        1
                }
                b.v.c(h, c.ao);
                try {
                    h.kq = b.c.d && b.c.d.devicePixelRatio
                } catch (m) {
                    h.kq = 1
                }
                b.s.p(c);
                if ("undefined" !== typeof c.ao && (2 !== c.an || 1 !== h.e && 3 !== h.e) && !(h.e in ya)) {
                    h.lo = c.FIND_AD_TRIES;
                    c.ah && (h.a = c.ah);
                    var d = c.ag,
                        w = {},
                        p = b.t.p(c.zr);
                    if (d)
                        for (f in d) d.hasOwnProperty(f) && (h[f] = d[f]);
                    if (9 === h.e && 2 === h.q || 25 === h.e) {
                        for (var v in d) d.hasOwnProperty(v) && "" !== v && "undefined" !== typeof d[v] && -1 === v.indexOf("dvContains") && -1 === v.indexOf("indexOf") && -1 === v.toLowerCase().indexOf("clicktag") && (w["z" + v] = d[v]);
                        h.e = 25
                    }
                    0 === c.an &&
                        (h.dc = c.WMODE);
                    b.k && (h.qs = b.k.f);
                    "string" !== typeof c.ae || 0 != h.e && 25 != h.e ? h.ak = "-" : (d = b.c.g ? 700 : 1200, h.ak = c.ae.length <= d ? c.ae : c.ae.slice(0, d));
                    c.bi > c.bg && (c.bg = c.bi);
                    c.bm > c.bk && (c.bk = c.bm);
                    h.i = "HEALTHLINECONTENT1";
                    b.a.ax(h, b.k.p(!0));
                    h.bq = b.c.k;
                    1 === c.ao.skin && (h.wp = 1 === c.ao.isSkin ? 1 : 1 === c.ao.isAolSkin ? 2 : 3);
                    h.g = c.aq.g++;
                    b && b.af && b.af.b && b.af.b.vc && (h.vc = b.af.b.vc);
                    h.pl = c.IS_PAGE_LEVEL ? 1 : 0;
                    c.IS_PAGE_LEVEL ? (b.a.ax(h, b.af.c()), d = v = 4) : (d = c.INITIAL_WIDTH, v = c.INITIAL_HEIGHT);
                    h.h = v;
                    h.w = d;
                    try {
                        b.c.bv() &&
                            c && c.elementRect && (h.fy = c.elementRect.left, h.gp = c.elementRect.top)
                    } catch (m) {}
                    c.doNotSample || (h.cm = b.af.a.getCM());
                    h.f = Number(!ra);
                    e(h, h.e);
                    h.o = 3;
                    h.t = c.ao.startTime;
                    h.de = c.ao.rand;
                    h.cu = sa;
                    h.m = h.m || b.a.v(c);
                    h.ar = "69f9e92-clean";
                    h.cb = Q ? 1 : 0;
                    h.ll = b.c.be || 0;
                    b.a.bc(h, "lm", b.c.bf);
                    h.ln = b.c.e ? 1 : 0;
                    b.c.b && (h.gh = 1);
                    b.c.bg();
                    h.qa = b.c.bj;
                    h.qb = b.c.bk;
                    h.qi = b.c.bh;
                    h.qj = b.c.bi;
                    h.qf = b.c.bm;
                    h.qe = b.c.bn;
                    h.qh = b.c.bo;
                    h.qg = b.c.bp;
                    try {
                        h.lk = c && c.elementRect && c.elementRect.top + b.c.br || "undefined"
                    } catch (m) {}
                    h.lb = b.c.bq;
                    h.le =
                        Ca ? 1 : 0;
                    b.k && void 0 !== b.k.aw && (h.lf = b.k.aw);
                    b.k && void 0 !== b.k.be && (h.lj = b.k.be);
                    b.k && void 0 !== b.k.bf && (h.li = b.k.bf);
                    b.k && void 0 !== b.k.an && (h.lg = b.k.an);
                    b.k && void 0 !== b.k.ay && (h.lh = b.k.ay);
                    b.t.c() && (h.mn = 1, b.t.d() && (h.mo = 1));
                    b.c.cv() && (h.gm = 1, b.c.b && "sframe" === p && (h.fq = 0));
                    b.c.bx() && (h.io = 1);
                    b.c.ak && (h.fa = 1);
                    b.c.am() && (h.fx = 1);
                    b.c.y() && b.c.aa() && (h.mm = 1);
                    b.c.as() && (h.hx = 1);
                    if (b.i && b.i.a()) h.ch = 1, h.gh = 1;
                    else if (b.j && b.j.a) {
                        h.ct = b.j.d;
                        if (c && c.periscopeManager) {
                            d = !b.focus.pageIsVisible() && c && c.counters &&
                                c.counters.strictDwell && 0 == c.counters.strictDwell.tCur && 21 == h.e;
                            v = "0" != b.a.t();
                            if (c.periscopeManager.measurable || !b.c.b && d && v) h.ch = 1;
                            c.periscopeManager.fullyMeasurable && c.ao && 1 != c.ao.skin && (h.ga = 1)
                        } else h.ch = 1;
                        "undefined" !== typeof b.j.e && c && c.ao && c.ao.startTime && !isNaN(c.ao.startTime) && (d = b.j.e - c.ao.startTime, h.fg = 0 <= d ? d : 0)
                    } else h.ch = 0;
                    b.a.ax(h, b.t.w(c.zr, h));
                    b.a.ax(h, b.focus.getQueryString());
                    b.a.ax(h, c.counters.getQs());
                    b.ag.a(c, h);
                    b.ah.a(c, h);
                    b.a.bc(h, "ai", y.z);
                    b.a.bc(h, "ap", c.cb);
                    b.a.bc(h, "ax",
                        c.bg);
                    b.a.bc(h, "ay", c.bi);
                    b.a.bc(h, "az", c.bk);
                    b.a.bc(h, "ba", c.bm);
                    b.a.bc(h, "aw", c.bc);
                    b.a.bc(h, "bg", c.bd);
                    b.a.bc(h, "be", c.be);
                    b.a.bc(h, "bc", c.bw);
                    b.a.bc(h, "bf", c.by);
                    b.a.bc(h, "bh", c.bx);
                    b.a.bc(h, "bz", c.cu);
                    h.cl = u.round(100 * c.IR5.AREA / (h.w * h.h));
                    0 < c.aq[2] && (h.au = c.aq[2] - 1);
                    0 < c.aq[3] && (h.av = c.aq[3] - 1);
                    0 < c.aq[23] && (h.by = c.aq[23] - 1);
                    h.at = c.dm;
                    b.g.i(c.ao, h);
                    h.d = c.ao.moatClientLevel1 + ":" + c.ao.moatClientLevel2 + ":" + c.ao.moatClientLevel3 + ":" + c.ao.moatClientLevel4;
                    h.gw = "healthlinecontent451781663455";
                    h.ab =
                        c.an;
                    h.ac = 1;
                    h.fd = "1";
                    h.kt = p;
                    h.it = b.s.r;
                    c.bi = c.bg;
                    c.bm = c.bk;
                    b.x.c(c) && (h.fz = 1);
                    b.c.o().isInApp && (h.lv = b.c.av(), b.c.aw() || b.c.bb() && (h.lx = 1));
                    d = k(h, w);
                    p = ma;
                    if (g) return h;
                    c = b.v.d(c.ao, d + "&cs=0", h, w);
                    c.shouldSendPixel && c.querystring && (34 == h.e ? y.yh.yi(c.querystring, p, "afs.moatads.com", !0) : y.yh.yi(c.querystring, p, "afs.moatads.com", b.c.v))
                }
            };
            b.v.e = function(b, e) {
                b.zMoatSrcd = b.d;
                b.zMoatSrcbo = b.bo;
                b.zMoatSrcbp = b.bp;
                b.zMoatSrcbd = b.bd;
                b.d = (e.moatClientLevel1 || "") + ":";
                b.d += (e.moatClientLevel2 || "") + ":";
                b.d += (e.moatClientLevel3 ||
                    "") + ":";
                b.d += e.moatClientLevel4 || "";
                return b
            };
            b.v.f = function(c, e, g, d, w, p, v, m) {
                c = "extraPx_" + c;
                e[c] || (e[c] = {});
                d = b.a.bu(d);
                d.zMoatSrci = d.i;
                d.i = g;
                m && (d = b.v.e(d, m));
                if (b.k.bg && !e[c].timestampsReset)
                    for (var r = 0; r < b.k.bg.length; r++) {
                        var l = b.k.bg[r];
                        l.zMoatSrci = l.i;
                        l.i = g;
                        m && (l = b.v.e(l, m));
                        l = k(l) + "&cs=0";
                        y.yh.yi(l, w, p, !0)
                    }
                e[c].timestampsReset || (e[c].timestampsReset = !0, d.lc && (d.lc = 0), d.cd && (d.cd = 0), d.sm && (d.sm = 0), d.fv && (d.fv = 0), d.pn && (d.pn = 0), d.lt && (d.lt = 0), d.ba && (d.ba = 0), d.sq && (d.sq = 0), d.gg && (d.gg = 0), d.mu &&
                    (d.mu = 0), d.si && (d.si = 0), d.aq && (d.aq = 0), d.mc && (d.mc = 0), d.dt && (d.dt = 0), d.gt && (d.gt = 0), d.ao && (d.ao = 0), d.mk && (d.mk = 0), d.dr && (d.dr = 0), d.ev && (d.ev = 0), d.ge && (d.ge = 0), d.mx && (d.mx = 0), d.an && (d.an = 0), d.cf && (d.cf = 0), d.gl && (d.gl = 0), d.mw && (d.mw = 0), d.xb && (d.xb = 0), d.db && (d.db = 0), d.am && (d.am = 0), d.fj && (d.fj = 0), d.my && (d.my = 0), d.mz && (d.mz = 0), d.cn && (d.cn = 0), d.es && (d.es = 0), d.sa && (d.sa = 0), d.fp && (d.fp = 0), d.pf && (d.pf = 0), d.ay && (d.ay = 0), d.fn && (d.fn = 0), d.bx && (d.bx = 0));
                c = k(d, v);
                y.yh.yi(c + "&cs=0", w, p, b.c.v)
            };
            b.v.d = function(b,
                e, g, d) {
                return {
                    shouldSendPixel: !0,
                    querystring: e
                }
            };
            b.v.g = function(b, e) {
                if (2 !== b.an || 1 !== e.e && 3 !== e.e)(new Image(1, 1)).src = ""
            };
            b.v.h = function(c) {
                var e = b.v.i(c.data);
                e.i += c.iKeySuffix;
                var g = k(e, c.flashVarsForQS) + "&cs=0";
                if (c.sendNow) {
                    var d = c.useBeacon;
                    if (b.k.bg)
                        for (var w = 0; w < b.k.bg.length; w++) {
                            var p = b.k.bg[w];
                            p.i += c.iKeySuffix;
                            p = k(p) + "&cs=0";
                            y.yh.yi(p, c.pixelURL, c.flashURL, !0)
                        }
                    d ? navigator.sendBeacon("//bn.pixel.moatads.com/pixel.gif?" + g, "") : y.yh.yi(g, c.pixelURL, c.flashURL, !0)
                }
                return e
            };
            b.v.i = function(c) {
                c =
                    b.a.bu(c);
                for (var e = "am an ao aq ay ba bx cd cf db dr dt es ev sa sq si sm mc lc pf xb ge gg cn gl pn fj lt mu mk mw mx my mz fn fp fv".split(" "), g = 0; g < e.length; g++) c[e[g]] && (c[e[g]] = 0);
                return c
            };
            b.v.j = function(b, e) {
                return k(b, e)
            };
            b.v.k = function(c) {
                var e = {
                    e: 16
                };
                e.q = c.aq[16]++;
                b.v.a(c, e)
            };
            b.v.l = function(c) {
                var e = !1,
                    g = b.v.b(8, c.ao, !1, !1, !0);
                if (g && g.qs && g.qs.d) {
                    e = g.qs.d.split(":");
                    e = {
                        viewHash: "HEALTHLINECONTENT1",
                        moatClientLevel1: e[0],
                        moatClientLevel2: e[1],
                        moatClientLevel3: e[2],
                        moatClientLevel4: e[3],
                        tagStartTime: b.c.r
                    };
                    if (c && c.ao)
                        for (var d in c.ao) c.ao.hasOwnProperty(d) && -1 != d.indexOf("zMoat") && (e[d] = c.ao[d]);
                    for (d in g) g.hasOwnProperty(d) && -1 != d.indexOf("zMoat") && (e[d] = g[d])
                }
                return e
            };
            b.v.m = function(c) {
                var e = {
                    e: 8
                };
                e.q = c.aq[8]++;
                return b.v.a(c, e, !0)
            }
        })(r);
        (function(b) {
            function k(c, e, g, d, k) {
                var p = 1E4;
                b.c.o().isInApp && (p = 500);
                var r = (new x).getTime();
                this.tMaxContinuous = this.tContinuous = this.tLast = this.tCur = 0;
                this.getMaxContinuous = function() {
                    return u.max(this.tContinuous, this.tMaxContinuous)
                };
                this.reset =
                    function() {
                        this.tLast = this.tCur = 0
                    };
                this.update = function(b) {
                    var e = (new x).getTime();
                    if (c(b)) {
                        b = u.min(e - r, p);
                        var g = typeof d;
                        b && 0 > b && (b = 0);
                        this.tCur += b;
                        this.tContinuous += b;
                        "number" === g && 0 < d ? this.tCur > d && (this.tCur = d) : "function" === g && (b = d(), "number" === typeof b && this.tCur > b && 0 < b && (this.tCur = b))
                    } else this.tMaxContinuous < this.tContinuous && (this.tMaxContinuous = this.tContinuous), this.tContinuous = 0;
                    r = e;
                    k && k(this.tCur)
                };
                this.getQs = function(b) {
                    b = this.query(b);
                    this.tLast = this.tCur;
                    return b
                };
                this.query = function(b) {
                    b =
                        b || {};
                    this.tLast > this.tCur && (this.tLast = this.tCur);
                    e && g && (b[e] = this.tCur, b[g] = this.tLast);
                    return b
                }
            }
            b.y = {};
            b.y.f = {};
            b.y.f.a = [];
            b.y.f.b = [];
            var e = !1;
            b.y.g = function() {
                if (!e) {
                    e = !0;
                    try {
                        var c = y.swde.azsx("scroll", b.y.h);
                        b.l.b.azsx("allLocalAdsKilled", function() {
                            y.swde.sxaz("scroll", {
                                id: c
                            })
                        }, {
                            once: !0
                        })
                    } catch (h) {}
                }
            };
            b.y.i = function(c, e) {
                try {
                    var g = c.aa,
                        d = b.a.ab(g, 5),
                        k = d && (6 == d.length || 1 <= d.length && "HTML" === d[d.length - 1].nodeName);
                    e = e || c.WINDOW || b.a.z(g);
                    return !(g && e && k) || "Unicast Generic" === X && b.p.c(c.zr) &&
                        (3 > g.offsetWidth || 3 > g.offsetHeight) || g.ownerDocument && g.ownerDocument.body && !g.ownerDocument.body.contains(g) ? !1 : !0
                } catch (p) {
                    return !1
                }
            };
            b.y.j = function() {
                function c() {
                    if (!r) try {
                        r = !0, e(p), r = !1
                    } catch (b) {
                        throw r = !1, b;
                    }
                }

                function e(b) {
                    var c = b.Moat;
                    b = b.domNodesIdToAd;
                    for (var g in b) b.hasOwnProperty(g) && c.p.e("loop", g);
                    c.y.k();
                    g = (new x).getTime();
                    b = u.max(u.min(g - d, k), 0);
                    c.l.b.zaxs("view:tick", b, g);
                    d = g
                }
                var g, d = (new x).getTime(),
                    k = 1E4;
                b.c.o().isInApp && (k = 500);
                var p = {
                        Moat: b,
                        domNodesIdToAd: A
                    },
                    r = !1;
                b.l.b.azsx("periscope:onStateChange",
                    c);
                b.l.b.azsx("viewCounterStarted", c);
                for (var m = 0, z = P.length; m < z; m++)
                    if (P[m] === g) return;
                g = b.h.e(b.a.by([p], e), 200);
                return b.a.by([p], e)
            }();
            b.y.k = function() {
                var c, e;
                for (e in A) A.hasOwnProperty(e) && (c = A[e], b.y.i(c, c.WINDOW) ? c.counters.update(c) : b.y.d(c))
            };
            b.y.d = function(c) {
                if (!T) {
                    var e = {
                        shouldKillAd: !0
                    };
                    b.l.b.zaxs("beforeAdKilled", e, c);
                    if (!e.shouldKillAd) return
                }
                b.l.b.zaxs("adKilled", c);
                b.d.j(c)
            };
            b.y.c = function(c) {
                c.eq || (c.eq = !0);
                var e = {
                    e: 5
                };
                e.q = c.aq[5]++;
                b.v.a(c, e)
            };
            b.y.l = function(c) {
                if (!c || !c.aq ||
                    !c.aq[0]) return !1;
                var e = {
                    e: 37
                };
                e.q = c.aq[37]++;
                b.v.a(c, e)
            };
            b.y.m = [];
            b.y.n = function(c, e) {
                var g = !1;
                if (!c || !c.aq || !c.aq[29] || 3 > c.aq[29]) return !1;
                for (var d = 0; d < e.length; d++) {
                    var k = e[d]; - 1 === b.a.indexOf(b.y.m, k) && (g = !0, b.y.m.push(k))
                }
                g && (g = {
                    e: 37
                }, g.q = c.aq[37]++, b.v.a(c, g))
            };
            b.y.a = function(c) {
                var e;
                e = c.aa;
                if (1 == c.ao.skin) return !1;
                c.elementRect || (c.currentWidth = e.offsetWidth, c.currentHeight = e.offsetHeight);
                e = c.currentWidth;
                c = c.currentHeight;
                return 3 > e || 3 > c || b.focus.pageIsPrerendered() ? !0 : !1
            };
            b.y.o = function(b) {
                var e =
                    1;
                screen.deviceXDPI ? e = screen.deviceXDPI / screen.systemXDPI : b.devicePixelRatio && "undefined" !== typeof b.mozInnerScreenX && (e = b.devicePixelRatio);
                return {
                    w: e * screen.width,
                    h: e * screen.height
                }
            };
            b.y.e = function(c) {
                c.counters = {};
                c.counters.laxDwell = new k(function() {
                    return !b.focus.pageIsPrerendered()
                }, "bu", "cd");
                c.counters.strictDwell = new k(b.focus.pageIsVisible, "ah", "am");
                c.counters.query = function() {
                    var b = {},
                        c;
                    for (c in this)
                        if (this.hasOwnProperty(c)) {
                            var d = this[c];
                            "function" === typeof d.query && d.query(b)
                        }
                    return b
                };
                c.counters.getQs = function() {
                    var b = {},
                        c;
                    for (c in this)
                        if (this.hasOwnProperty(c)) {
                            var d = this[c];
                            "function" === typeof d.getQs && d.getQs(b)
                        }
                    return b
                };
                c.counters.update = function(b) {
                    for (var c in this)
                        if (this.hasOwnProperty(c)) {
                            var d = this[c];
                            "function" === typeof d.update && !0 !== b.ep && d.update(b)
                        }
                };
                b.l.b.azsx("startAdTracking", b.y.g)
            };
            b.y.p = function() {
                y.z = void 0;
                y.zs = !1;
                y.xz = !1;
                y.dcsx.wsqa("globalScrollevent" + y.dcsx.uid);
                b.a.forEach(b.y.f.a, function(b) {
                    if (b && "function" === typeof b) try {
                        b()
                    } catch (e) {}
                })
            };
            b.y.h =
                function(c) {
                    if (b.focus.pageIsVisible() && "undefined" === typeof y.z) a: {
                        y.z = new x - sa,
                        c = void 0;
                        for (var e in A)
                            if (A.hasOwnProperty(e) && (c = A[e]) && "undefined" !== typeof c.ao) {
                                if (c.ce) break a;
                                var g = {
                                    e: 4
                                };
                                g.q = c.aq[4]++;
                                g.ai = y.z;
                                b.v.a(c, g);
                                c.ce = !0
                            }
                        try {
                            y.dcsx.wsqa("globalScrollevent" + y.dcsx.uid), y.swde.sxaz("scroll", {
                                callback: b.y.h
                            })
                        } catch (d) {}
                    }
                };
            b.y.b = function(c, e) {
                var g = {
                    e: 9
                };
                g.q = c.aq[9]++;
                c.ci = +new x;
                e && "object" === typeof e && b.a.forEach(e, function(b, c) {
                    g[c] = b
                });
                b.v.a(c, g)
            }
        })(r);
        (function(b) {
            function k(b, c) {
                function h(b) {
                    return function() {
                        try {
                            b.sending &&
                                (l = b.sending = !1, m = 0, g())
                        } catch (c) {}
                    }
                }

                function g(b, d, e, g) {
                    if (b) {
                        d = {
                            qs: b,
                            jsd: d,
                            fld: e,
                            jso: g
                        };
                        if (0 === b.indexOf("e=21&")) {
                            k(d, !0);
                            return
                        }
                        r.push(d)
                    }
                    if (0 === m && 0 < r.length)
                        if (m++, b = r.shift(), b.sending = !0, b.uid = c.Math.floor(1E10 * c.Math.random()), b.timeoutId = setTimeout(h(b), 2E3), q[b.uid] = b, b.fld && !b.jso && l && u && u.sendMessage) try {
                            u.sendMessage(b)
                        } catch (p) {
                            l = !1, k(b)
                        } else k(b)
                }

                function d() {
                    try {
                        return new n(1, 1)
                    } catch (b) {
                        var c = window.document.createElement("img");
                        c.height = 1;
                        c.width = 1;
                        return c
                    }
                }

                function k(b, c) {
                    var e =
                        d();
                    e.toSend = b;
                    c || (e.onerror = function() {
                        var b = this.toSend;
                        b.failedAttempts = "number" == typeof b.failedAttempts ? b.failedAttempts + 1 : 0;
                        var c = (b.jsd + "/pixel.gif?" + b.qs).length;
                        1 > b.failedAttempts ? k(b) : I && c > C && p(b)
                    }, e.onload = function() {
                        p(this.toSend)
                    });
                    e.src = b.jsd + "/pixel.gif?" + b.qs
                }

                function p(b) {
                    var c = b && b.uid && q && q[b.uid];
                    if (b && b.qs && "tracer=" == b.qs) return !1;
                    if (c) {
                        q[b.uid] = null;
                        try {
                            delete q[b.uid]
                        } catch (d) {}
                        try {
                            clearTimeout(c.timeoutId)
                        } catch (d) {}
                        if ("boolean" != typeof c.sending || c.sending) c.sending = !1;
                        else return !1
                    }
                    0 <
                        m && m--;
                    g()
                }
                var r = [],
                    m = 0,
                    u = !1,
                    l = !1,
                    n, t = c[b],
                    x = c.Math.floor(1E10 * c.Math.random()),
                    q = {};
                t.yh = {};
                t = t.yh;
                n = c.Image;
                t.yi = function(b, c, d, e) {
                    g(b, c, d, e)
                };
                t.yk = function(c, d) {
                    u = !0;
                    var g = b + ".yh.",
                        h = {};
                    h.src = "https:" === d ? "https://z.moatads.com/swf/MessageSenderV4.swf" : "http://z.moatads.com/swf/MessageSenderV4.swf";
                    h.flashVars = "r=" + g + "zb&s=" + g + "zc&e=" + g + "zd&td=" + c;
                    return h
                };
                t.yj = function() {
                    return !1 === u
                };
                t.xq = function() {
                    return x
                };
                t.zb = function() {
                    try {
                        if (!0 === u) {
                            var b = c.document.getElementById("moatMessageSender" +
                                x);
                            b && !b.sendMessage && (b = c.document.getElementById("moatMessageSenderEmbed" + x));
                            b && b.sendMessage && (l = !0, u = b)
                        }
                    } catch (d) {}
                };
                t.zc = function(b) {
                    try {
                        p(b)
                    } catch (c) {}
                };
                t.zd = function(b) {
                    try {
                        l = !1, b && b.jsd && r.push(b), p(b)
                    } catch (c) {}
                };
                var E, I, C = 2083;
                try {
                    E = document.createElement("div"), E.innerHTML = "\x3c!--[if IE 8]>x<![endif]--\x3e", I = "x" === E.innerHTML
                } catch (B) {
                    I = !1
                }
            }
            b.ai = {};
            b.ai.a = function(e) {
                try {
                    if (y.yh) return
                } catch (c) {}
                b.a.cc(k, "'" + b.c.j + "',window", e)
            }
        })(r);
        (function(b) {
            b.aj = {};
            b.aj.a = function(b) {
                this.label =
                    b;
                this.metrics = {};
                this.set = function(b, c) {
                    return this.metrics[b] = c
                };
                this.increment = function(b, c, h) {
                    c = "number" !== typeof this.metrics[b] ? this.set(b, c) : this.metrics[b] += c;
                    "number" === typeof h && (c = this.cap(b, c));
                    return c
                };
                this.cap = function(b, c) {
                    return this.set(b, u.min(this.get(b), c))
                };
                this.max = function(b, c) {
                    return this.set(b, u.max(this.get(b), c))
                };
                this.get = function(b, c) {
                    return "undefined" === typeof this.metrics[b] ? this.set(b, "undefined" !== typeof c ? c : 0) : this.metrics[b]
                }
            };
            b.aj.b = function(k, e) {
                var c;
                k[e] ? c =
                    k[e] : (c = new b.aj.a(e), k[e] = c);
                return c
            }
        })(r);
        (function(b) {
            function k(e, c, h) {
                this.name = e;
                this.reachedInViewTimeThreshold = !1;
                this.alwaysInview = !0;
                this.queryStringKey = h.queryStringKey;
                this.timeThreshold = h.timeThreshold || 1E3;
                this.rawPercThreshold = h.percThreshold / 100 || 50;
                this.percThreshold = u.min(h.percThreshold / 100, .98);
                this.continuous = h.continuous || !1;
                this.timePercent = h.timePercent;
                this.capTimeThreshold = h.capTimeThreshold;
                this.audible = h.audible || !1;
                this.video = h.video || !1;
                "undefined" !== this.timeThreshold &&
                    (this.timeThreshold = u.max(this.timeThreshold, 1));
                this.counterState = {};
                e = b.aj.b(this.counterState, "customInViewCounter");
                e.set("inViewTime", 0);
                e.set("continuousInViewTime", 0);
                e.set("maxContinuousInViewTime", 0);
                e.set("visOnLastCheck", !1);
                e.set("_tLastChecked", (new x).getTime())
            }
            b.ah = {};
            b.ah.b = {};
            b.ah.c = {};
            b.ah.d = function(e, c, h) {
                if (b.ah.b.hasOwnProperty(e) || void 0 == h.percThreshold || void 0 == h.timeThreshold && void 0 == h.timePercent) return !1;
                c = new k(e, c, h);
                return b.ah.b[e] = c
            };
            b.ah.e = function(e) {
                return b.ah.b.hasOwnProperty(e) ?
                    b.ah.b[e] : !1
            };
            b.ah.f = function() {
                var e, c;
                for (c in b.ah.b)
                    if (b.ah.b.hasOwnProperty(c) && (e = b.ah.e(c), !e.reachedInViewTimeThreshold)) return !1;
                return !0
            };
            k.prototype.update = function(e, c, h) {
                if (e && this.isMeasurable(e) && !this.reachedInViewTimeThreshold) {
                    var g = b.aj.b(this.counterState, "customInViewCounter"),
                        d = b.t.f(e.zr);
                    if (d) {
                        var k = d.getLastInviewPercent(),
                            p = this.percThreshold;
                        g.get("_tLastChecked");
                        g.set("_tLastChecked", h);
                        h = !0;
                        d.getCareAboutFocus && (h = d.getCareAboutFocus());
                        e = d.getPauseCheckingFn ? d.getPauseCheckingFn()(e) :
                            b.y.a(e);
                        k = k >= p;
                        p = !h || b.focus.pageIsVisible();
                        b.ah.g && "function" === typeof b.ah.g && (k = b.ah.g(k));
                        b.ah.h && "function" === typeof b.ah.h && (p = b.ah.h(p));
                        k = k && p && !e;
                        p = g.get("visOnLastCheck");
                        if (k && p) g.increment("inViewTime", c), g.increment("continuousInViewTime", c);
                        else if (k || p) c = u.round(c / 2), g.increment("inViewTime", c), g.increment("continuousInViewTime", c);
                        k || (this.alwaysInview = !1);
                        g.set("visOnLastCheck", k);
                        g.get("continuousInViewTime") > g.get("maxContinuousInViewTime") && g.set("maxContinuousInViewTime", g.get("continuousInViewTime"));
                        k || g.set("continuousInViewTime", 0);
                        this.inViewTimeReached() && (this.reachedInViewTimeThreshold = !0)
                    }
                }
            };
            k.prototype.getInViewTime = function() {
                var e = b.aj.b(this.counterState, "customInViewCounter");
                return this.continuous ? e.get("maxContinuousInViewTime") : e.get("inViewTime")
            };
            k.prototype.inViewTimeReached = function() {
                return "undefined" !== this.timeThreshold && this.getInViewTime() >= this.timeThreshold
            };
            k.prototype.isMeasurable = function(e) {
                if (!e) return !1;
                var c = !1;
                "undefined" !== this.timeThreshold && ("pscope" == b.t.p(e.zr) &&
                    e.custominview.periscopeThresholds ? b.a.s(e.custominview.periscopeThresholds, this.rawPercThreshold) && b.c.cd(e) && (c = !0) : b.c.cd(e) && (c = !0));
                return c
            };
            b.ah.i = function(e) {
                b.ah.d("full_vis_2_sec_continuous", e, {
                    percThreshold: 100,
                    timeThreshold: 2E3,
                    video: !1,
                    continuous: !0,
                    queryStringKey: "wb"
                })
            };
            b.ah.j = function(e) {
                b.ah.i(e);
                e.custominview = {};
                e.custominview.eventIds = {};
                e.custominview.eventIds.viewCounterStarted = b.l.b.azsx("viewCounterStarted", b.ah.k);
                e.custominview.eventIds["periscope:onStateChange"] = b.l.b.azsx("periscope:onStateChange",
                    b.ah.k, {
                        priority: 5
                    });
                e.custominview.eventIds.adKilled = b.l.b.azsx("adKilled", b.ah.l);
                b.ah.k(e)
            };
            b.ah.k = function(e) {
                void 0 !== e && (isNaN(e) || (e = A[e]), e && e.custominview && e.custominview.eventIds && b.c.cd(e) && !e.custominview.eventIds["view:tick"] && (e.custominview.eventIds["view:tick"] = b.l.b.azsx("view:tick", b.a.by([e], b.ah.m), {
                    priority: 6
                })))
            };
            b.ah.m = function(e, c, h) {
                for (var g in b.ah.b) b.ah.b.hasOwnProperty(g) && b.ah.b[g].update(e, c, h)
            };
            b.ah.l = function(e) {
                e && e.custominview && e.custominview.eventIds && (b.l.b.sxaz("view:tick", {
                    id: e.custominview.eventIds["view:tick"],
                    priority: 6
                }), b.l.b.sxaz("viewCounterStarted", {
                    id: e.custominview.eventIds.viewCounterStarted
                }), b.l.b.sxaz("periscope:onStateChange", {
                    id: e.custominview.eventIds["periscope:onStateChange"]
                }), b.l.b.sxaz("adKilled", {
                    id: e.custominview.eventIds.adKilled
                }), b.l.b.sxaz("video:AdVideoComplete", {
                    id: e.custominview.eventIds["video:AdVideoComplete"]
                }))
            };
            b.ah.n = function() {
                b.l.b.sxaz("startAdTracking", {
                    id: b.ah.c.startAdTracking
                });
                b.l.b.sxaz("allLocalAdsKilled", {
                    id: b.ah.c.allLocalAdsKilled
                })
            };
            b.ah.a = function(e, c) {
                if (e) {
                    for (var h in b.ah.b)
                        if (b.ah.b.hasOwnProperty(h)) {
                            var g = b.ah.e(h);
                            g && ("custom_inview_module_counter" === h ? (c.wm = 0, c.wi = 0, g.isMeasurable(e) && (c.wm = 1, g.inViewTimeReached() && (c.wi = 1))) : void 0 != g.queryStringKey && (c[g.queryStringKey] = 0, g.isMeasurable(e) && (c[g.queryStringKey] = 1, g.inViewTimeReached() && (c[g.queryStringKey] = 2))))
                        }
                    return c
                }
            };
            b.ah.c.startAdTracking = b.l.b.azsx("startAdTracking", b.ah.j);
            b.ah.c.allLocalAdsKilled = b.l.b.azsx("allLocalAdsKilled", b.ah.n)
        })(r);
        (function() {
            function b(b) {
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        var d =
                            b[c];
                        "string" === typeof d && (b[c] = d.replace(/:/g, " -"))
                    }
            }

            function k(c, d) {
                if (r.af.a.sa_in() || d.doNotSample) {
                    var e = (d.parseIds || function(b, c) {
                        return c
                    })(c, d.identifiers);
                    b(e);
                    e.IS_PAGE_LEVEL = d.isPage || !1;
                    e.doNotSample = d.doNotSample || !1;
                    "true" !== d.identifiers.zMoatAB_SNPT && r.v.b(17, e);
                    var g = {};
                    g.IS_PAGE_LEVEL = d.isPage ? 1 : 0;
                    e = r.d.d(c, void 0, !1, e.flashVars, e, void 0, g);
                    d.isPage && r.af.d(e);
                    return e
                }
            }

            function e(b, c) {
                r.h.k(function() {
                    if (y.alreadyTrackingPage("HEALTHLINECONTENT1")) x = !0;
                    else {
                        var c = new Image(4,
                            4);
                        c.id = m;
                        c.style.display = "none";
                        c.findAgain = !1;
                        var d = l;
                        if (!d) return x || (l = document.body), !1;
                        d.appendChild(c);
                        x = !0;
                        y.lockPageTracking("HEALTHLINECONTENT1")
                    }
                    if (x) return b(), !0
                }, 50, 50, c)
            }

            function c(b) {
                return document.getElementById(b)
            }

            function h(b) {
                b = b || function(b) {
                    return !0
                };
                for (var c = v(D), d = 0; d < c.length; d++) {
                    var e = c[d];
                    b(e) && g(e, e.continuousLookUp || !1)
                }
            }

            function g(b, d) {
                var e = b.onSuccess || k,
                    g = function() {
                        var d;
                        (d = (b.getArea || c)(b.areaLocator)) && e(d, b);
                        return d && !0
                    };
                d ? r.h.e(g, 500) : r.h.k(g, 20, 500)
            }

            function d() {
                if (!n) {
                    n = !0;
                    for (var b = 0, c = t.length; b < c; b++) t[b]()
                }
                return !0
            }

            function w() {
                var b = F.document,
                    c = u.floor(1E5 * u.random());
                r.h.c(b, "DOMContentLoaded", function C() {
                    b.removeEventListener("DOMContentLoaded", C, !1);
                    d()
                }, c);
                b.attachEvent && b.documentElement.doScroll && F === F.top && r.h.k(function() {
                    if (!n) {
                        try {
                            b.documentElement.doScroll("left")
                        } catch (c) {
                            return !1
                        }
                        return d()
                    }
                }, 50, 60);
                /WebKit/.test(navigator.userAgent) && r.h.k(function() {
                    return n || /loaded|complete/.test(b.readyState) ? (clearInterval(void 0),
                        d()) : !1
                }, 50, 60);
                c = u.floor(1E5 * u.random());
                r.h.c(F, "load", d, c, !1);
                r.h.f(d, 3E3)
            }

            function p() {
                for (var b, c = F.document, d = c.getElementsByTagName("meta"), e, g = 0, h = d.length; g < h; g++)
                    if (e = d[g], "og:title" === e.getAttribute("property")) {
                        b = e.getAttribute("content");
                        break
                    }
                b || (b = c.title || "Untitled");
                return b
            }

            function v(b) {
                var c = F.document,
                    d = c.location.host.replace(/^www\./, ""),
                    c = c.location.pathname.replace(/\/$/, "").substring(1);
                if (!c || /^index\.html?$/.test(c)) c = "home";
                var c = p(),
                    e = b.get();
                if (b.doNotModifyIdentifiers) {
                    e.moatClientLevel1 =
                        e.moatClientLevel1.replace(/^www\./, "");
                    var g = [{
                        isPage: !0,
                        areaLocator: m,
                        identifiers: e
                    }];
                    return g
                }
                g = [{
                    areaLocator: m,
                    isPage: !0,
                    identifiers: {
                        moatClientLevel1: d,
                        moatClientLevel2: c,
                        moatClientLevel3: "__page__",
                        moatClientLevel4: "-"
                    }
                }];
                "true" === e.zMoatAB_SNPT && r.a.forEach(g, function(b) {
                    !0 === b.isPage && (b.identifiers.moatClientLevel1 = e.l1, b.identifiers.moatClientLevel2 = e.l2, b.identifiers.moatClientLevel3 = e.l3, b.identifiers.moatClientLevel4 = e.l4, b.identifiers.startTime = e.t, b.identifiers.rand = e.de, b.identifiers.zMoatAB_SNPT =
                        e.zMoatAB_SNPT, r.c.r = e.t)
                });
                r.a.forEach(e, function(b, c) {
                    if (0 === c.indexOf("zMoat"))
                        for (var d = 0, e = g.length; d < e; d++) g[d].identifiers && (g[d].identifiers[c] = b)
                });
                return g
            }
            r.ak = r.ak || {};
            var m = "moat" + u.floor(1E6 * u.random()) + 1E6,
                x = !1,
                l, n = !1,
                t = [];
            r.ak.a = function() {
                return n
            };
            var D = new function() {
                var b;
                this.set = function(c) {
                    b = c
                };
                this.get = function(c) {
                    return b
                };
                this.setConfig = function(b) {
                    for (var c in b) b.hasOwnProperty(c) && (this[c] = b[c])
                }
            };
            r.ak.b = function() {
                r.y.q();
                for (var b in A) A.hasOwnProperty(b) && r.y.d(A[b]);
                (b = document.getElementById(m)) && document.body.removeChild(b)
            };
            r.ak.c = function(b, c) {
                D.set(b);
                D.setConfig(c);
                x || (l = document.body);
                r.h.f(function() {
                    e(h, function() {})
                }, 0);
                w()
            };
            r.ak.d = function() {
                return n
            }
        })();
        (function(b) {
            function k(b, c, d) {
                A[b] = {};
                A[b].template = c;
                A[b].instance = null;
                d && d.push(b)
            }

            function e(b) {
                if (b && b != F.document) return {
                    x: b.scrollLeft,
                    y: b.scrollTop
                };
                b = F;
                var c = b.document;
                return {
                    x: void 0 !== b.pageXOffset ? b.pageXOffset : (c.documentElement || c.body.parentNode || c.body).scrollLeft,
                    y: void 0 !== b.pageYOffset ?
                        b.pageYOffset : (c.documentElement || c.body.parentNode || c.body).scrollTop
                }
            }

            function c(c) {
                var d = b.w.o(F);
                c && c != F.document ? c = c.scrollHeight : (c = F.document, c = u.max(c.body.scrollHeight, c.documentElement.scrollHeight, c.body.offsetHeight, c.documentElement.offsetHeight, c.body.clientHeight, c.documentElement.clientHeight));
                return {
                    elementHeight: c,
                    vp: d,
                    curElementHeight: c
                }
            }

            function h(b, c) {
                return function() {
                    b[c].apply(b, arguments)
                }
            }

            function g() {
                var c = 0,
                    d = (new x).getTime(),
                    e = d,
                    g = {
                        scroll: {
                            count: 0,
                            obj: n,
                            callbacks: [q]
                        },
                        keyup: {
                            count: 0,
                            obj: F.document,
                            callbacks: []
                        },
                        mouseup: {
                            count: 0,
                            obj: F.document,
                            callbacks: []
                        },
                        resize: {
                            count: 0,
                            obj: F,
                            callbacks: []
                        },
                        visibilitychange: {
                            count: 0,
                            obj: F.document,
                            callbacks: []
                        },
                        mousemove: {
                            count: 0,
                            obj: F.document,
                            callbacks: [],
                            throttle: Infinity
                        }
                    },
                    k = {};
                this.init = function() {
                    for (var c in g)
                        if (g.hasOwnProperty(c)) {
                            var d;
                            var e = g[c].obj;
                            d = "visibilitychange" == c ? "undefined" !== typeof b.focus.visibilitychange ? [e, b.focus.visibilitychange] : [F, "focus"] : [e, c];
                            e = d[0];
                            d = d[1];
                            var k = u.floor(1E5 * u.random());
                            m[k] = {};
                            m[k].obj = e;
                            m[k].evt = d;
                            b.h.c(e, d, h(this, "update"), k, g[c].useCapture || !1)
                        }
                };
                this.update = function(h) {
                    var k = (new x).getTime(),
                        l = k - d;
                    15E3 >= l && 15E3 >= k - e && b.focus.pageIsVisible() && (c += l);
                    d = k;
                    if ("NOEVT" !== h && (h = h || F.event, e = k, k = h.type, k = k == b.focus.visibilitychange ? "visibilitychange" : "focus" == k ? "visibilitychange" : k, k = g[k], k.count += 1, !(k.count % k.throttle)))
                        for (k = k.callbacks, l = 0; l < k.length; l++) k[l](h)
                };
                this.getElapsedActive = function(b) {
                    k[b] || (k[b] = {}, k[b].cachedT = 0);
                    var d = k[b].cachedT,
                        e = c;
                    k[b].cachedT = e;
                    return [d,
                        e
                    ]
                };
                this.timeSinceLastActive = function() {
                    return +new x - e
                };
                this.getCumulativeActive = function() {
                    return c
                };
                this.getEventCount = function(b) {
                    return g[b].count
                };
                this.getQs = function(b) {
                    return b || {}
                };
                this.reset = function() {
                    c = 0;
                    for (var b in g) g.hasOwnProperty(b) && (g[b].count = 0, g[b].cachedT = 0);
                    for (var d in k) k.hasOwnProperty(d) && (k[d].cachedT = 0)
                }
            }

            function d() {
                var b, d, g, h = 0,
                    k = 0,
                    l = !1;
                this.init = function() {};
                this.registerArticle = function(c) {
                    b = c;
                    c = b.getBoundingClientRect();
                    var h = e(F.document).y;
                    d = c.bottom + h;
                    g = c.top +
                        h
                };
                this.update = function() {
                    if (b) {
                        var k = c(F.document),
                            m = e(F.document).y,
                            k = u.min(1, u.max(0, (m + k.vp.height - g) / (d - g)));
                        k > h && (h = k);
                        .99 <= k && (l = !0)
                    }
                };
                this.getQs = function(b) {
                    b = b || {};
                    b.xa = Number(l);
                    b.xb = u.round(100 * k);
                    b.xc = u.round(100 * h);
                    k = h;
                    return b
                }
            }

            function r() {
                (new x).getTime();
                var d = {
                        up: {
                            t: {
                                key: "sr",
                                val: 0
                            },
                            d: {
                                key: "sb",
                                val: 0
                            },
                            lT: {
                                key: "sq",
                                val: 0
                            },
                            lD: {
                                key: "sa",
                                val: 0
                            }
                        },
                        dn: {
                            t: {
                                key: "sn",
                                val: 0
                            },
                            d: {
                                key: "sj",
                                val: 0
                            },
                            lT: {
                                key: "sm",
                                val: 0
                            },
                            lD: {
                                key: "si",
                                val: 0
                            }
                        }
                    },
                    g = 0,
                    h = 0,
                    k = 0,
                    m = 0,
                    p = 0,
                    n = {
                        docHeight: -1,
                        vp: {
                            height: -1,
                            width: -1
                        }
                    };
                this.init = function() {};
                this.update = function(k) {
                    n = c(l);
                    if (b.focus.pageIsVisible() || Q) {
                        (new x).getTime();
                        curY = e(l).y;
                        k = curY - g;
                        var p = u.abs(k),
                            q = curY + n.vp.height;
                        curDepthRatio = q / n.elementHeight;
                        1 < curDepthRatio && (curDepthRatio = 1);
                        isFinite(n.vp.height) && isFinite(curDepthRatio) && 1 >= curDepthRatio && (m = u.min(1, u.max(curDepthRatio, m)), h = u.max(q, h));
                        q = A.watcher.instance.getElapsedActive("scroll");
                        q = q[1] - q[0];
                        0 < p && 20 > p / q && (0 > k ? (d.up.t.val += q, d.up.d.val += p) : (d.dn.t.val += q, d.dn.d.val += p));
                        g = curY
                    }
                };
                this.packageVelocity =
                    function(b, c) {
                        var e = d[c],
                            g;
                        for (g in e) e.hasOwnProperty(g) && (b[e[g].key] = u.round(e[g].val));
                        d[c].lD.val = e.d.val;
                        d[c].lT.val = e.t.val
                    };
                this.getQs = function(b) {
                    b = b || {};
                    for (var c in d) d.hasOwnProperty(c) && this.packageVelocity(b, c);
                    c = u.round(100 * m);
                    var e = u.round(100 * p);
                    b.md = c;
                    b.mc = e;
                    p = m;
                    b.lb = u.round(h);
                    b.la = u.round(k);
                    b.ld = u.round(h);
                    b.lc = u.round(k);
                    k = h;
                    b.cw = n.vp.width;
                    b.cx = n.vp.height;
                    b.sh = n.elementHeight;
                    return b
                };
                this.scrollDepth = function() {
                    return u.round(100 * m)
                };
                this.downScrollVelocity = function() {
                    var b =
                        d.dn;
                    return 0 < b.t.val ? u.round(b.d.val / b.t.val * 1E3) : 0
                };
                this.upScrollVelocity = function() {
                    var b = d.up;
                    return 0 < b.t.val ? u.round(b.d.val / b.t.val * 1E3) : 0
                };
                this.rawVelocityComponents = function() {
                    return {
                        dd: u.max(d.dn.d.val, 0),
                        dt: u.max(d.dn.t.val, 0),
                        ud: u.max(d.up.d.val, 0),
                        ut: u.max(d.up.t.val, 0)
                    }
                };
                this.scrollVelocity = function() {
                    var b = d.dn.d.val + d.up.d.val,
                        c = d.dn.t.val + d.up.t.val;
                    return 0 < c ? u.round(b / c * 1E3) : 0
                };
                this.reset = function() {
                    m = h = 0;
                    for (var b in d)
                        if (d.hasOwnProperty(b)) {
                            var c = u.round(d[b]),
                                e;
                            for (e in c) c.hasOwnProperty(e) &&
                                (d[b][e].val = 0)
                        }
                }
            }
            b.af = b.af || {};
            b.af.e;
            var p = [],
                v = [],
                m = {},
                z, l, n;
            b.af.f = function(b) {
                z = b
            };
            b.af.g = function(b) {
                return z
            };
            b.af.h = function() {
                return n
            };
            b.af.d = function(b) {
                p.push(b)
            };
            b.af.i = function() {
                for (var b = 0; b < p.length; b++) {
                    var c = p[b];
                    if (c.IS_PAGE_LEVEL) return c
                }
            };
            var t;
            b.af.j = function() {
                return t
            };
            b.af.k = function() {
                t = b.focus.pageIsVisible()
            };
            b.af.a = new function() {
                var b = [8],
                    c;
                this.init = function() {
                    for (var d = 0; 2 >= d; d++) b.push(8 + d), b.push(8 - d);
                    c = b[u.floor(u.random() * b.length)]
                };
                this.getCM = function() {
                    return c
                };
                this.sa_in = function() {
                    return 0 === u.floor(u.random() * c)
                };
                this.makeImpotent = function() {
                    c = 1
                }
            };
            b.af.a.init();
            var A = {};
            b.af.l = function(b) {
                return A[b].instance
            };
            b.af.m = function(b) {
                return A.hasOwnProperty(b)
            };
            b.af.n = function(c) {
                var d = /refresh=true/.exec(z.src);
                b.ak.c(c, {
                    doNotModifyIdentifiers: d
                })
            };
            b.af.o = function(b) {
                b.replace(/^www\./, "");
                return !0
            };
            b.af.p = function() {
                for (var b in A)
                    if (A.hasOwnProperty(b)) {
                        var c = new A[b].template;
                        A[b].instance = c;
                        c.init()
                    }
            };
            b.af.c = function(c, d) {
                c = c || {};
                c.fl = Number(b.af.j());
                var e;
                if (!(e = d)) {
                    e = [];
                    for (var g in A) A.hasOwnProperty(g) && e.push(g)
                }
                g = e;
                for (e = 0; e < g.length; e++) {
                    var h = A[g[e]].instance;
                    h && h.getQs(c)
                }
                return c
            };
            var q = function() {
                function c() {
                    var e = {},
                        g;
                    e.e = 31;
                    for (var h = 0, k = p.length; h < k; h++) g = p[h], e.q = g.aq[31]++, b.v.a(g, e);
                    d = !1
                }
                var d = !1;
                return function(e) {
                    for (var g = 0, h = v.length; g < h; g++) A[v[g]].instance.update(e);
                    d || (d = !0, b.h.f(c, 1E3))
                }
            }();
            b.af.q = function() {
                var c = !1;
                return function() {
                    c || (n = F, l = F.document, c = !0, b.af.k(), k("scroll", r, v), k("article", d, v), k("watcher", g),
                        b.af.p(), F.MoatContent = b.af, F.MoatContent.timeSinceLastActive = A.watcher.instance.timeSinceLastActive, F.MoatContent.refresh = b.af.r, F.MoatContent.isPageFocused = b.focus.pageIsVisible)
                }
            }();
            b.af.s = function() {
                b.ak.b();
                y.unlockPageTracking("HEALTHLINECONTENT1");
                b.y.p();
                for (var c in m) m.hasOwnProperty(c) && b.h.d(m[c].obj, m[c].evt, null, c)
            };
            b.af.r = function(c) {
                b.af.s();
                var d = document.createElement("script");
                d.src = b.c.protocol + "//" + b.c.bc + "/healthlinecontent451781663455/" + b.a.j() + "#refresh=true";
                if ("string" ===
                    typeof c) d.src += "&" + c;
                else
                    for (var e in c) c.hasOwnProperty(e) && (d.src += "&" + e + "=" + c[e]);
                z.parentNode.appendChild(d);
                z && z.parentNode.removeChild(z)
            }
        })(r);
        (function(b) {
            function k(b) {
                var c, e, g = [];
                for (e = 0; 100 >= e; e++) g.push(0 === e ? 0 : e / 100);
                try {
                    c = new IntersectionObserver(b, {
                        rootMargin: "0px",
                        threshold: g
                    })
                } catch (h) {
                    return !1
                }
                return c
            }

            function e(b) {
                return function(c, e) {
                    var g = c.length;
                    1 > g || (b.percentVisible = c[g - 1].intersectionRatio)
                }
            }

            function c(b) {
                var c = b && b.intersectionObserver,
                    c = c && c.observer;
                try {
                    c && (c.disconnect(),
                        b.intersectionObserver = null)
                } catch (e) {}
            }

            function h(b) {
                b && b.intersectionObserver && (c(b), g(b))
            }

            function g(d) {
                var g, p, r;
                g = {
                    started: !1,
                    observer: null,
                    percentVisible: null,
                    element: function(b) {
                        return function() {
                            return b && b.aa
                        }
                    }(d)
                };
                d.intersectionObserver = g;
                p = g.element();
                if (p && (r = k(e(g)))) g.observer = r, r.observe(p);
                else return !1;
                g.started = !0;
                b.l.b.azsx("adKilled", b.a.by([d], c), {
                    condition: function(b) {
                        return d.zr == b.zr
                    },
                    once: !0
                });
                b.l.b.azsx("adElementUpdate", b.a.by([d], h), {
                    condition: function() {
                        return d.intersectionObserver.started
                    },
                    once: !0
                });
                return !0
            }
            b.al = {};
            b.al.a = function(c) {
                if (b.c.bx()) {
                    if (c.intersectionObserver && c.intersectionObserver.started) return c.intersectionObserver.percentVisible;
                    g(c) || b.c.bx(!1)
                }
            }
        })(r);
        (function(b) {
            function k(e) {
                var c = !1;
                if (b.c.bx()) return b.al.a(e);
                if (b.c.ak) {
                    if (c = b.ad.a.b) {
                        var h = b.w.m(e.aa);
                        e = b.w.q(h.visibleRect, c.el, c.et);
                        c = b.w.p(e, {
                            left: c.vl,
                            right: c.vr,
                            top: c.vt,
                            bottom: c.vb
                        });
                        c = (c.right - c.left) * (c.bottom - c.top) / h.area
                    } else c = !1;
                    return c
                }
                if (b.c.am()) return b.am.a(e);
                if (b.c.af()) return b.an.a(e);
                if (b.c.as()) return c = b.ao.a(e), 0 < c && (b.c.at = !0), c;
                if (b.c.ai())
                    if ((c = e.safeframe && e.safeframe.geom) || (c = b.a.bk(b.c.ah(), ["$sf", "ext", "geom"]), e && !e.safeframe && (e.safeframe = {}), e.safeframe.geom = c), h = c && c()) {
                        var g = e.aa,
                            c = g.getBoundingClientRect();
                        e = e.WINDOW || b.a.z(g);
                        e = b.w.o(e);
                        e = b.w.p(c, e);
                        e = b.w.q(e, h.self.l, h.self.t);
                        var d;
                        d = h.self;
                        var k = h.exp;
                        h.par ? (g = h.par.l, d = h.par.t) : (g = k.r > k.l ? d.r - d.w * d.xiv : d.l - k.l, d = 1 === d.yiv || k.t > k.b ? d.t - k.t : d.b - k.b + (k.b - d.h * d.yiv));
                        e = b.w.q(e, -1 * g, -1 * d);
                        g = Number(h.win.l);
                        d =
                            Number(h.win.t);
                        h = {
                            left: g,
                            right: Number(h.win.r),
                            top: d,
                            bottom: Number(h.win.b)
                        };
                        e = b.w.q(e, g, d);
                        h = b.w.p(e, h);
                        c = (h.right - h.left) * (h.bottom - h.top) / ((c.width || c.right - c.left) * (c.height || c.bottom - c.top))
                    } else c = !1;
                return c
            }
            b.z = {};
            b.z.a = function(b) {
                var c = (b = k(b)) && !isNaN(b) && .5 <= b,
                    c = {
                        isVisible: c,
                        isFullyVisible: c && .98 <= b,
                        percv: b
                    };
                .8 <= b && (c.isDentsuVisible = !0);
                return c
            }
        })(r);
        (function(b) {
            function k() {
                b.c.am(!1)
            }

            function e(c) {
                return function(d) {
                    var e;
                    if (c.dfp) a: {
                        var g;
                        if (d && c && "message" === d.type && d.source ==
                            c.win && d.data && 0 == d.data.indexOf("amp-")) try {
                            if (g = JSON.parse(d.data.substring(4)), g.sentinel == c.sentinel && "intersection" == g.type) {
                                e = g.changes;
                                break a
                            }
                        } catch (h) {}
                        e = !1
                    }
                    else e = d;
                    if (d = e) e = d.length, 1 > e || (c.context && c.context.hidden ? d = 0 : (d = d[e - 1], e = d.rootBounds, e = {
                        left: 0,
                        right: e.width,
                        top: 0,
                        bottom: e.height
                    }, d = b.w.r(c.element(), d.boundingClientRect, e)), c.percentVisible = d)
                }
            }

            function c(c, d) {
                c.amp = {
                    dfp: d.isDfp,
                    win: d.win,
                    sentinel: d.sentinel,
                    started: !1,
                    unlisten: null,
                    eventHandler: null,
                    percentVisible: null,
                    context: b.c.ci(),
                    element: function(b) {
                        return function() {
                            return b && b.aa
                        }
                    }(c)
                };
                return c.amp
            }

            function h(b) {
                var c = b.context.observeIntersection;
                if (!c) return k(), !1;
                b.eventHandler = e(b);
                b.unlisten = c(b.eventHandler);
                b.unlisten || (b.unlisten = function() {
                    b.unlisten = function() {}
                });
                b.started = !0
            }

            function g(c) {
                if (b.c.ck()) {
                    var d = "amp-message-" + c.sentinel;
                    c.messageId = d;
                    c.eventHandler = e(c);
                    y.dcsx.ynds(window, "message", d, "ampMessageFn" + d);
                    y.swde.azsx(d, c.eventHandler);
                    return c.started = !0
                }
                k();
                return !1
            }

            function d(d, e) {
                if (!d || !d.aa) return k(), !1;
                var m = c(d, e);
                e.isDfp ? g(m) : h(m);
                m.started && b.l.b.azsx("adKilled", r, {
                    condition: function(b) {
                        return d.zr == b.zr
                    },
                    once: !0
                })
            }

            function r(c) {
                var d = c && c.amp;
                if (!d) return !1;
                try {
                    d.dfp ? (y.dcsx.engn(window, "message", d.messageId), b.l.b.sxaz(d.messsageId, d.eventHandler)) : d.unlisten && "function" == typeof d.unlisten && d.unlisten()
                } catch (e) {
                    k()
                }
                c.amp = null
            }
            b.am = {};
            b.am.a = function(c) {
                c.amp && c.amp.started || d(c, b.c.cj());
                return c.amp.percentVisible
            }
        })(r);
        (function(b) {
            b.an = {};
            b.an.b = function(k, e) {
                if (!k || !e) return !1;
                var c,
                    h;
                c = e.getCurrentPosition();
                h = e.getScreenSize();
                c.top = c.y;
                c.bottom = c.y + c.height;
                c.left = c.x;
                c.right = c.x + c.width;
                h.top = 0;
                h.bottom = h.height;
                h.left = 0;
                h.right = h.width;
                return b.w.r(k, c, h)
            };
            b.an.c = function(k, e) {
                var c = function(b) {
                    return function(c) {
                        b.percv = c
                    }
                }(e);
                e.api.addEventListener("viewablePercentageChange", c);
                b.l.b.azsx("adKilled", function() {
                    k.mraid.api.removeEventListener("viewablePercentageChange", c);
                    k.mraid = null
                }, {
                    condition: function(b) {
                        return k.zr == b.zr
                    },
                    once: !0
                })
            };
            b.an.d = function() {
                var k = {},
                    e = b.c.ab();
                k.api = e;
                k.percv = -1;
                return k
            };
            b.an.a = function(k) {
                var e;
                if (!k.mraid) {
                    k.mraid = b.an.d();
                    if (!k.mraid.api) return !1;
                    b.c.ac() && b.an.c(k, k.mraid)
                }
                e = k.mraid.api;
                if (!e) return !1;
                e = b.an.b(k.aa, e);
                return b.c.ac() && (k = k.mraid.percv / 100, 0 <= k) ? u.min(e, k) : e
            };
            b.l.b.azsx("startAdTracking", b.c.ag)
        })(r);
        (function(b) {
            b.ao = {};
            b.ao.a = function(k) {
                k.amazon && k.amazon.started || b.ao.b(k);
                return k.amazon.percentVisible
            };
            b.ao.b = function(k) {
                var e = b.c.ar(),
                    c = b.c.ao(),
                    h = c && c.mraid,
                    g = c && c.Event && c.Event.Viewability,
                    d = h && "function" ===
                    typeof h.getScreenSize && h.getScreenSize,
                    r;
                k.amazon = {
                    api: e,
                    element: k.aa,
                    event: null,
                    eventListener: null,
                    getScreenSize: d,
                    mraid: h,
                    percentVisible: null,
                    started: !1,
                    win: c
                };
                if (!e || !g || !d) return !1;
                r = k.amazon;
                r.event = g;
                try {
                    return r.eventListener = function(c) {
                        var d = r.getScreenSize();
                        r.percentVisible = 0 === c.viewable ? 0 : r.element && d ? b.w.r(r.element, {
                            left: c.x,
                            right: c.x + c.width,
                            top: c.y,
                            bottom: c.y + c.height
                        }, {
                            left: 0,
                            right: d.width,
                            top: 0,
                            bottom: d.height
                        }) : null
                    }, r.api.addEventListener(g, r.eventListener), k.amazon.started = !0, b.l.b.azsx("adKilled", b.ao.c, {
                        condition: function(b) {
                            return k.zr == b.zr
                        },
                        once: !0
                    }), !0
                } catch (p) {
                    return !1
                }
            };
            b.ao.c = function(b) {
                if ((b = b.amazon) && b.eventListener && "function" == typeof b.eventListener && b.event) {
                    try {
                        b.api.removeEventListener(b.event, b.eventListener)
                    } catch (e) {}
                    b.started = !1
                }
            }
        })(r);
        (function(b) {
            b.x = {};
            b.x.d = 242500;
            b.x.e = 1;
            b.x.f = function(k) {
                return b.c.b || b.i && b.i.a && b.i.a() || b.j && b.j.a && k && k.periscopeManager && k.periscopeManager.fullyMeasurable
            };
            b.x.a = function(k) {
                return "number" !== typeof k || b.a.ae() ?
                    !1 : 236425 <= k
            };
            b.x.g = function(b) {
                return b && b.ao ? "slave" == b.ao.moatClientAT ? !0 : !1 : !1
            };
            b.x.h = function(b) {
                return b && b.ao ? "cpc" == b.ao.moatClientBT ? !0 : !1 : !1
            };
            b.x.i = function(b) {
                return b && b.ao ? "cpcv" == b.ao.moatClientBT ? !0 : !1 : !1
            };
            b.x.j = function(b) {
                return b && b.ao ? "flatrate" == b.ao.moatClientBT ? !0 : !1 : !1
            };
            b.x.k = function(b) {
                return b && b.ao ? "skin" == b.ao.moatClientAT || "hpto" == b.ao.moatClientAT ? !0 : !1 : !1
            };
            b.x.c = function(k) {
                if (!k || !k.aa) return !1;
                if ("undefined" != typeof k.er) return k.er;
                k.video ? !b.x.f(k) || b.x.i(k) && !k.video.reachedComplete ||
                    (k.er = !0) : b.x.g(k) || b.x.h(k) || b.x.j(k) ? k.er = !1 : b.x.k(k) || b.x.a(b.a.br(k)) ? k.er = !0 : b.x.f(k) && b.t.u(k, b.x.e, !0) && (k.er = !0);
                return k.er || !1
            };
            b.x.b = function(k) {
                if (!k || k.SENT_FIT && k.et || !b.x.f(k)) return !1;
                var e, c, h = b.t.p(k.zr);
                k.SENT_FIT || (e = b.t.h(k, h, "hadFIT"));
                k.et || (c = b.t.h(k, h, "hadFullOTS"));
                if (e || c) b.y.l(k), k.SENT_FIT = k.SENT_FIT || !!e, k.et = k.et || !!c;
                return e || c
            }
        })(r);
        (function(b) {
            b.ap = {};
            b.ap.a = "1.2";
            b.ap.prefix = "MSFAPI";
            b.ap.b = {};
            b.ap.c = {};
            b.ap.d = u.floor(u.random() * u.pow(10, 12));
            b.ap.e = !1;
            b.ap.f =
                /([a-z]+)#([a-z0-9.-]+)#([0-9]+)#([a-z]+)#([0-9]+)#(.+)/i;
            b.ap.g = /@([a-z0-9]+)@@(.*)/i;
            b.ap.h = function(k) {
                if (k) {
                    var e = b.ap.i(k);
                    e.listening || (y.dcsx.ynds(k, "message", "message-" + e.id, "ME-" + e.id), e.listening = !0, e.tags[b.c.n].listening = !0);
                    if (!e.tags[b.c.n].sub) {
                        e.tags[b.c.n].sub = !0;
                        var c = y.swde.azsx("message-" + e.id, b.ap.j);
                        b.l.b.azsx("allLocalAdsKilled", function() {
                            y.swde.sxaz("message-" + e.id, {
                                id: c
                            });
                            e.tags[b.c.n].sub = !1
                        }, {
                            once: !0
                        })
                    }
                }
            };
            b.ap.i = function(k) {
                var e = "Moat#PML#" + b.c.i + "#" + b.ap.a;
                k[e] || (k[e] = {
                    id: u.floor(u.random() * u.pow(10, 12)),
                    listening: !1,
                    tags: {}
                });
                k[e].tags[b.c.n] || (k[e].tags[b.c.n] = {
                    sub: !1,
                    listening: !1
                });
                return k[e]
            };
            b.ap.k = function(k) {
                var e = k && b.ap.i(k),
                    c = e && e.listening,
                    h = e && e.tags[b.c.n].listening;
                k && c && h && (b.h.d(k, "message", b.ap.j), e.tags[b.c.n].listening = !1, e.listening = !1)
            };
            b.ap.l = function(k) {
                return b.ap.prefix + "#" + k + "#"
            };
            b.ap.m = function(k) {
                var e = k.match(b.ap.f);
                k = !1;
                e && 7 == e.length && (k = {
                        prefix: e[1],
                        version: e[2],
                        uid: e[3],
                        type: e[4],
                        request: e[5],
                        data: e[6]
                    }, (e = k.data.match(b.ap.g)) &&
                    3 == e.length && (k.cmd = e[1], k.arg = e[2]));
                return k
            };
            b.ap.j = function(k) {
                if (!(k && k.origin && k.data && "string" === typeof k.data)) return !1;
                if ((msgData = b.ap.m(k.data)) && (!msgData || msgData.uid != b.ap.d.toString()) && msgData.version == b.ap.a && (k.msgData = msgData, msgData.request in b.ap.c && (k.triggerCallback = function() {
                        b.ap.c[msgData.request] && (b.ap.c[msgData.request](k), b.ap.c[msgData.request] = null, delete b.ap.c[msgData.request])
                    }), b.ap.b[msgData.type]))
                    for (var e = 0, c = b.ap.b[msgData.type].length; e < c; e++) b.ap.b[msgData.type][e](k)
            };
            b.ap.n = function(k, e) {
                b.ap.b[k] = [e]
            };
            b.ap.o = function(k, e, c, h) {
                "object" == typeof e && (e = b.a.ar(e));
                h = h || u.floor(1E10 * u.random());
                "function" == typeof c && (b.ap.c[h] = c);
                k = b.ap.l(b.ap.a) + b.ap.d + "#" + k + "#" + h + "#" + e;
                return {
                    request: h,
                    msg: k
                }
            };
            b.ap.p = function(k, e, c, h, g) {
                "object" == typeof c && (c = b.a.ar(c));
                return b.ap.o(k, "@" + e + "@@" + c, h, g)
            };
            b.ap.q = function(k, e, c) {
                try {
                    if (!k || !k || !k.source) return !1;
                    k.source.postMessage(b.ap.o(k.msgData.type, e, c, k.msgData.request).msg, "*")
                } catch (h) {
                    return !1
                }
                return !0
            };
            b.ap.r = function(k,
                e, c) {
                try {
                    var h = b.f.i(e || window.top);
                    if (!h) return b.h.f(function() {
                        b.ap.r(k, e, c)
                    }, 200);
                    for (var g = 0; g < h.length; g++) c && h[g] == window || h[g].postMessage(k, "*")
                } catch (d) {}
            };
            b.l.b.azsx("modulesReady", b.a.by([window], b.ap.h), {
                once: !0
            })
        })(r);
        (function(b) {
            b.ad = {};
            b.ad.b = {};
            b.ad.b.a = "CF";
            b.ad.b.b = "CNF";
            b.ad.b.c = "CNS";
            b.ad.a = {};
            b.ad.a.c = !1;
            b.ad.a.d = [];
            b.ad.c = {};
            b.ad.d = {};
            var k = !1;
            b.ad.a.a = function() {
                var e = b.ad.e();
                b.ad.a.c || b.c.b || (e = b.ap.p("moatframe", "check", e, function(c) {
                    (c = b.a.as(c.msgData.data)) && c.available &&
                        !b.ad.a.c && (b.c.ak = !0, b.ad.a.c = !0, c = "MoatFrame#geom#" + (new x).getTime(), b.h.g(b.ad.a.e, null, 200, c), b.ad.a.d.push(c), b.l.b.azsx("allLocalAdsKilled", b.ad.f, {
                            once: !0
                        }), b.l.b.zaxs("Moatframe:Ready", c))
                }), b.ap.r(e.msg, !1, !0))
            };
            b.ad.g = function() {
                b.ap.n("moatframe", b.ad.h);
                b.ap.r(b.ap.o("moatframe", "ping").msg, !1, !0)
            };
            b.ad.i = function(e) {
                return "undefined" !== typeof e && b.ad.d && b.ad.d[e] ? (b.ad.d[e] = null, !0) : !1
            };
            b.ad.f = function() {
                var e = b.ap.o("moatframe", "kill", null);
                b.ap.r(e.msg, !1, !0)
            };
            b.ad.e = function() {
                var e =
                    b.c.bm,
                    c = b.c.bn;
                return e && c ? {
                    width: e,
                    height: c
                } : !1
            };
            b.ad.j = function() {
                return b.c.b
            };
            b.ad.k = function(e) {
                var c = !1;
                b.a.forEach(b.ad.b, function(b) {
                    if (b == e) return c = !0, !1
                });
                return c
            };
            b.ad.h = function(e) {
                var c = e.msgData.cmd || e.msgData.data;
                if (c)
                    if (e.triggerCallback) e.triggerCallback(e);
                    else if (b.ad.c[c]) b.ad.c[c](e);
                else b.ad.k(c) || b.ap.q(e, b.ad.b.b)
            };
            b.ad.l = function(e, c) {
                if (!e || !c) return !1;
                for (var h = b.f.c(window).pop(), g = b.f.k(e, 10), d = !1, k = !1, p = null, r = null, m, x = g.length - 1; 0 <= x; x--)
                    if (g[x] == h && (d = !0), d && !b.f.j(g[x])) {
                        r =
                            g[x];
                        break
                    }
                d && r && ((p = r && r.parent && r.parent.document) && (m = b.f.e(p, r)), m && (h = m.offsetWidth, g = m.offsetHeight, h == c.width && g == c.height ? k = !0 : (h *= g, g = c.width * c.height, k = .98 <= u.min(h, g) / u.max(h, g))));
                return {
                    isNested: k,
                    iframe: m,
                    iframeParentDoc: p
                }
            };
            b.ad.m = function(e) {
                return e && e.parent && b.f.e(e.parent.document, e)
            };
            b.ad.n = function(e) {
                (e = "undefined" !== typeof e && b.ad.d && b.ad.d[e]) && "boolean" == typeof e.isWithinReach && (e.isNested && !e.iframeParentDoc && (e.isWithinReach = !1), e.isNested || e.win && !b.f.h(e.win) || (e.isWithinReach = !1));
                return e
            };
            b.ad.o = function(e, c, h, g) {
                var d, k, p = {
                    isNested: !1,
                    iframe: null,
                    iframeParentDoc: null
                };
                if ((d = b.ad.n(h)) && d.isWithinReach) return !0;
                k = b.f.m(e, c, !0);
                d && "undefined" == typeof d.isWithinReach ? d.isWithinReach = k : (k ? c = b.ad.m(c) : (p = b.ad.l(c, g), (c = p.iframe) && (k = !0)), d = {
                    dimensions: g,
                    iframe: c,
                    iframeParentDoc: p.iframeParentDoc,
                    isNested: p.isNested,
                    isWithinReach: k,
                    win: e
                }, b.ad.d[h] = d);
                return d.isWithinReach
            };
            b.ad.a.e = function() {
                if (!k) {
                    k = !0;
                    var e = b.ap.o("moatframe", "geom", function(c) {
                        k = !1;
                        b.ad.k(c.msgData.data) ||
                            (b.ad.a.b = b.a.as(c.msgData.data))
                    });
                    b.ap.r(e.msg, !1, !0)
                }
            };
            b.ad.c.ping = function(e) {
                !b.c.b && b.c.bs() && b.ad.a.a()
            };
            b.ad.c.check = function(e) {
                var c = {},
                    h = e.msgData.arg && b.a.as(e.msgData.arg);
                b.ad.o(window, e.source, e.msgData.uid, h) && b.ad.j() ? c.available = !0 : c.available = !1;
                b.ap.q(e, c)
            };
            b.ad.c.geom = function(e) {
                if (b.ad.o(window, e.source, e.msgData.uid) && b.ad.j()) {
                    var c = b.ad.d && b.ad.d[e.msgData.uid] && b.ad.d[e.msgData.uid].iframe;
                    if (c && (c = b.w.m(c)) && c.visibleRect && c.rect) {
                        b.ap.q(e, {
                            w: c.cumulRect.width,
                            h: c.cumulRect.height,
                            vl: c.visibleRect.left,
                            vt: c.visibleRect.top,
                            vr: c.visibleRect.right,
                            vb: c.visibleRect.bottom,
                            el: c.cumulRect.left,
                            et: c.cumulRect.top,
                            er: c.cumulRect.right,
                            eb: c.cumulRect.bottom
                        });
                        return
                    }
                    b.ap.q(e, b.ad.b.a)
                } else b.ap.q(e, b.ad.b.c)
            };
            b.ad.c.kill = function(e) {
                b.ad.i(e.msgData.uid)
            }
        })(r);
        (function(b) {
            b.ag = {};
            b.ag.b = 5E3;
            b.ag.c = function(k) {
                if (!b.c.b) return !1;
                k.activetime = {};
                k.activetime.counters = {};
                b.ag.d(k);
                b.l.b.azsx("adKilled", b.ag.e, {
                    condition: function(b) {
                        return k.zr == b.zr
                    },
                    once: !0
                });
                b.ag.f(k)
            };
            b.ag.f = function(k) {
                if (k.activetime) {
                    var e =
                        b.t.l(k.zr);
                    if (k.activetime.onInViewTimeCount)
                        for (var c in e) e[c].removeListener && e[c].removeListener(k.activetime);
                    else k.activetime.onInViewTimeCount = b.a.by([k], b.ag.g);
                    (e = b.t.f(k.zr)) && e.addListener(k.activetime)
                }
            };
            b.ag.d = function(k) {
                k.activetime.mouseSubId = y.swde.azsx("mouseEvent", b.a.by([k], b.ag.h));
                k.activetime.mouseLocalSubId = b.l.b.azsx("mouseEvent", b.a.by([k], b.ag.h));
                k.activetime.keyboardSubId = y.swde.azsx("keyboardEvent", b.a.by([k], b.ag.i));
                k.activetime.focusSubId = y.swde.azsx("focusStateChange",
                    b.a.by([k], b.ag.j))
            };
            b.ag.e = function(k) {
                k.activetime && (y.swde.sxaz("mouseEvent", {
                    id: k.activetime.mouseSubId
                }), b.l.b.sxaz("mouseEvent", {
                    id: k.activetime.mouseLocalSubId
                }), y.swde.sxaz("keyboardEvent", {
                    id: k.activetime.keyboardSubId
                }), y.swde.sxaz("focusStateChange", {
                    id: k.activetime.focusSubId
                }))
            };
            b.ag.k = function(k, e) {
                b.ag.l(k, !0)
            };
            b.ag.h = function(k, e) {
                b.ag.l(k, !0)
            };
            b.ag.i = function(k, e) {
                b.ag.l(k, !0)
            };
            b.ag.j = function(k, e) {
                e && b.ag.l(k, !0)
            };
            b.ag.l = function(k, e) {
                var c = (new x).getTime(),
                    c = k.activetime.activeTS &&
                    c - k.activetime.activeTS || 0;
                e && (1E3 < c || !k.activetime.active) && (k.activetime.checkID && b.a.a(k.activetime.checkID), k.activetime.activeTS = (new x).getTime(), k.activetime.checkID = b.h.f(b.a.by([k], b.ag.m), b.ag.b));
                k.activetime.active = e
            };
            b.ag.m = function(k) {
                if (k.activetime.active) {
                    var e = (new x).getTime() - k.activetime.activeTS < b.ag.b;
                    b.ag.l(k, e)
                }
            };
            b.ag.g = function(k, e, c, h, g) {
                c = b.aj.b(k.activetime.counters, g);
                g = b.t.i(k.zr, g);
                g = (k = k.activetime.active) && g.visible();
                h = c.get("lastActiveVis", !1);
                !c.get("wasEverActiveAndFocused") &&
                    k && c.set("wasEverActiveAndFocused", 1);
                h && g ? c.increment("activeInviewTime", u.max(e, 0)) : (h || g) && c.increment("activeInviewTime", u.max(u.round(.5 * e), 0));
                c.set("lastActiveVis", g)
            };
            b.ag.a = function(k, e) {
                var c = !1;
                if (!b.c.b) return c = b.focus.pageIsVisible() || k && k.counters && k.counters.strictDwell && k.counters.strictDwell.tCur && 0 < k.counters.strictDwell.tCur, e.re = c ? 1 : 0, e;
                if (!k.activetime) return e;
                var c = b.t.p(k.zr),
                    h = b.aj.b(k.activetime.counters, c),
                    c = h.get("wasEverActiveAndFocused");
                e.re = c ? 1 : 0;
                h && 0 < h.get("activeInviewTime") &&
                    (e.ft = h.get("activeInviewTime"), e.fv = h.get("lastActiveInviewTime"), e.fw = h.get("activeInviewTimeFirstDelta", h.get("activeInviewTime")), h.set("lastActiveInviewTime", h.get("activeInviewTime")));
                return e
            };
            b.l.b.azsx("viewCounterStarted", b.ag.f);
            b.l.b.azsx("startAdTracking", b.ag.c)
        })(r);
        r.l.b.zaxs("modulesReady", y);
        var Ca = r.focus.pageIsVisible();
        (r.c.g && r.c.cu() || "dummy.url" === r.a.i()) && r.c.ce();
        var G = "moatFoundHEALTHLINECONTENT1",
            J = "__moat__HEALTHLINECONTENT1";
        r.c.o().isInApp || r.ad.g();
        var H =
            r.a.au(),
            ta = function(b) {
                params = {};
                if (queryString = b.split("#")[1]) {
                    b = queryString.split("&");
                    for (var k, e = 0; e < b.length; e++) k = b[e].split("="), 2 == k.length && (params[k[0]] = k[1])
                }
                return params
            },
            W = {};
        try {
            W = r.a.k(H.src)
        } catch (b) {}
        var ua = /zmoatab_cm/i,
            Aa = !1;
        r.a.forEach(W, function(b, k) {
            k.match(ua) && (Aa = !0, b = Number(b), 0 === b ? r.af.a.sa_in = function() {
                return !1
            } : (r.af.a.sa_in = function() {
                return !0
            }, r.af.a.getCM = function() {
                return Number(b)
            }))
        });
        Aa || (r.af.a.sa_in = function() {
            return !0
        }, r.af.a.getCM = function() {
            return 1
        });
        "undefined" != typeof W.vc && (r.af.b = r.af.b || {}, r.af.b.vc = W.vc);
        W = {};
        try {
            W = ta(H.src)
        } catch (b) {}
        var ua = /zmoatsampling/i,
            Da = /zmoatmethod/i;
        r.a.forEach(W, function(b, k) {
            k.match(ua) && (r.a.n = function() {
                return {
                    multiplier: Number(b),
                    sample: !0
                }
            });
            k.match(Da) && (r.aq = b)
        });
        ma = "https://px.moatads.com";
        r.ai.a(F);
        var wa = function() {
            y.zs && y.dcsx && (y.dcsx.engn({
                listenerName: "unloadFn" + r.c.l.a
            }), y.dcsx.engn({
                listenerName: "beforeunloadFn" + r.c.l.a
            }));
            T || (T = !0, r.d.b())
        };
        r.a.x(ra ? F.location.href : F.document.referrer) || r.a.x(window.location.href);
        if (!H) return !1;
        r.b = H;
        r.a.ba(H);
        r.l.b.azsx("trackingReady", va, {
            once: !0
        });
        ta = r.c.ax();
        r.c.ay();
        ta ? r.c.cz() ? r.c.da() : r.c.cw && r.c.cw() ? r.c.db() : r.l.b.zaxs("trackingReady") : r.l.b.zaxs("trackingReady");
        r.l.b.azsx("allLocalAdsKilled", za, {
            once: !0
        })
    })(Date, Math)
} catch (x) {
    var ct = (new Date).getTime();
    window["Moat#ETS"] || (window["Moat#ETS"] = ct);
    window["Moat#EMC"] || (window["Moat#EMC"] = 0);
    var et = ct - window["Moat#ETS"],
        hourElapsed = 36E5 <= et,
        msg = x.name + " in closure (global): " + x.message + ", stack=" + x.stack;
    if (!hourElapsed &&
        10 > window["Moat#EMC"]) {
        window["Moat#EMC"]++;
        try {
            var pixelDomain = "px.moatads.com",
                pxSrc = "https://" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("undefined" === typeof AD_VIEW_HASH ? "HEALTHLINECONTENT1" : AD_VIEW_HASH) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("69f9e92-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new Date).getTime(),
                px = new Image(1, 1);
            px.src = pxSrc
        } catch (u) {}
    } else if (hourElapsed) {
        window["Moat#EMC"] = 1;
        window["Moat#ETS"] = ct;
        try {
            pixelDomain = "px.moatads.com", pxSrc = "https://" +
                pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("undefined" === typeof AD_VIEW_HASH ? "HEALTHLINECONTENT1" : AD_VIEW_HASH) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("69f9e92-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new Date).getTime(), px = new Image(1, 1), px.src = pxSrc
        } catch (u) {}
    }
};