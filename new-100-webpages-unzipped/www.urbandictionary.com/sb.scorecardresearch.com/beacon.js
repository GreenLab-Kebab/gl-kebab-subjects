function udm_(e, t) {
    var n = "comScore=",
        r = document,
        i = r.cookie,
        s = "",
        o = "indexOf",
        u = "substring",
        a = "length",
        f = 2048,
        l, c = "&ns_",
        h = "&",
        p, d, v, m, g = window,
        y = g.encodeURIComponent || escape;
    if (i[o](n) + 1)
        for (v = 0, d = i.split(";"), m = d[a]; v < m; v++) p = d[v][o](n), p + 1 && (s = h + unescape(d[v][u](p + n[a])));
    e += c + "_t=" + +(new Date) + c + "c=" + (r.characterSet || r.defaultCharset || "") + (g === g.top ? "" : c + "if=1") + "&cv=3.1m&c8=" + y(r.title) + s + "&c7=" + y(r.URL) + "&c9=" + y(r.referrer), e[a] > f && e[o](h) > 0 && (l = e[u](0, f - 8).lastIndexOf(h), e = (e[u](0, l) + c + "cut=" + y(e[u](l + 1)))[u](0, f)), r.images ? (p = new Image, g.ns_p || (ns_p = p), typeof t == "function" && (p.onload = p.onerror = t), p.src = e) : r.write("<", "p", "><", 'img src="', e, '" height="1" width="1" alt="*"', "><", "/p", ">")
}
typeof _comscore == "undefined" && (_comscore = []),
    function() {
        var e = "length",
            t = window,
            n = t.encodeURIComponent ? encodeURIComponent : escape,
            r, i = function(t) {
                if (t) {
                    var r, i = [],
                        s, o = 0,
                        u, a, f = "";
                    for (var l in t) {
                        s = typeof t[l];
                        if (s == "string" || s == "number") i[i[e]] = l + "=" + n(t[l]), l == "c2" ? f = t[l] : l == "c1" && (o = 1)
                    }
                    if (i[e] <= 0 || f == "") return;
                    a = t.options || {}, a.d = a.d || document;
                    if (typeof a.url_append == "string") {
                        u = a.url_append.replace(/&amp;/, "&").split("&");
                        for (var l = 0, c = u[e], h; l < c; l++) h = u[l].split("="), h[e] == 2 && (i[i[e]] = h[0] + "=" + n(h[1]))
                    }
                    r = [a.d.URL.charAt(4) == "s" ? "//sb" : "//b", ".scorecardresearch.com/b?", o ? "" : "c1=2&", i.join("&").replace(/&$/, "")], udm_(r.join(""))
                }
            },
            s = function(t) {
                t = t || _comscore;
                for (var n = 0, r = t[e]; n < r; n++) i(t[n]);
                t = _comscore = []
            };
        s(), (r = t.COMSCORE) ? (r.purge = s, r.beacon = i) : COMSCORE = {
            purge: s,
            beacon: i
        }
    }();
(function() {
    var e = [],
        t = "ns__zoom_svg",
        n = "http://www.w3.org/2000/svg",
        r = "length",
        i = "setAttribute",
        s = window,
        o = document,
        u = "parent",
        a = "string",
        f = "inner",
        l = "Height",
        c = "Width",
        h = "number",
        p = Math,
        d, v = "source",
        m = "position",
        g = "getBoundingClientRect",
        y = "document",
        b = "hasFocus",
        w = navigator.userAgent,
        E = /edge\//i.test(w),
        S = / applewebkit\//i.test(w) && !E;
    if (!s.JSON || !s.postMessage) return;
    s.addEventListener("message", function(f) {
        try {
            var h = typeof f.data == a ? JSON.parse(f.data) : f.data;
            if (h && h.mvce) {
                for (var p = 0; p < e[r]; p++)
                    if (e[p].win === f[v]) return;
                var g = f[v],
                    b = 0;
                S && (d = o.getElementById(t), d || (d = o.createElementNS(n, "svg"), d[i]("xmlns", n), d[i]("version", "1.1"), d[i](l, "0"), d[i](c, "0"), d[i]("id", t), d[i]("style", m + ":absolute;top:-9999px;border:0;display:none;"), o.body.appendChild(d)));
                while (g[u] != s && b < 5) g = g[u], b++;
                var w = g[u][y].getElementsByTagName("iframe");
                for (var p = 0; p < w[r]; p++)
                    if (w[p].contentWindow == g) {
                        el = w[p];
                        break
                    }
                e.push({
                    win: f[v],
                    el: el
                })
            }
        } catch (f) {}
    }), s.ns_ || (ns_ = {}), ns_.mvce || (ns_.mvce = {});
    if (!ns_.mvce.sGO) {
        var x = function(e, t, n) {
                var r = 0,
                    i = 0,
                    s, u, a, f, l;
                try {
                    if (!e) return [0, 0];
                    t = t || o, n = n || t.defaultView || t.parentWindow, u = t.body || {}, a = t.documentElement;
                    if (e[g] && e.nodeName != "EMBED") s = e[g](), i = s.left, r = s.top;
                    else {
                        do {
                            f = e.offsetTop || 0, l = e.offsetLeft || 0, e == u && (f = p.abs(f), l = p.abs(l)), r += f, i += l;
                            if (e.offsetParent == u && e.style[m] == "absolute") break
                        } while (e = e.offsetParent);
                        !t.querySelectorAll && typeof u.clientTop === h && (r += u.clientTop, i += u.clientLeft)
                    }
                } catch (c) {
                    return [i, r]
                }
                return [i, r]
            },
            T = function(e) {
                var t = [c, l],
                    n, i = [],
                    s = p.round,
                    u = "client";
                try {
                    n = e[y].documentElement;
                    for (var a = t[r], d = t[--a]; d; d = t[--a]) typeof e[f + d] == h ? i[a] = s(e[f + d]) : n && n[u + d] ? i[a] = s(n[u + d]) : i[a] = s(o.body[u + d])
                } catch (v) {
                    return i
                }
                return i
            },
            N = function(e) {
                try {
                    return e == e.top && !e.top[y][b]() ? !1 : !e[y][b]() && !e.top[y][b]() ? N(e[u]) : !0
                } catch (t) {
                    return !0
                }
            };
        ns_.mvce.sGO = function(t) {
            for (var n = 0; n < e[r]; n++) {
                var t = typeof t == a ? JSON.parse(t) : {},
                    i = {
                        gg: !0
                    };
                if (e[n].el) {
                    var o = x(e[n].el),
                        u = T(s);
                    t.ifx = o[0] + s.screenLeft, t.ify = o[1] + s.screenTop, t.w = u[0], t.h = u[1], t.f = N(s), t.z = d ? d.currentScale : 1, t.iw = s[f + c], t.ih = s[f + l], t.ow = s["outer" + c], i.vi = JSON.stringify(t), i.ver = "15", i.host = "displayGGiframe", e[n].win && e[n].win.postMessage(i, "*")
                }
            }
        }, ns_.mvce.sGO(), setInterval(ns_.mvce.sGO, 200)
    }
})();