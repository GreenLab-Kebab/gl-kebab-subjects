(function(h) {
    var d = window.AmazonUIPageJS || window.P,
        k = d._namespace || d.attributeErrors,
        a = k ? k("RetailWebsiteOverlayAUIAssets", "") : d;
    a.guardFatal ? a.guardFatal(h)(a, window) : a.execute(function() {
        h(a, window)
    })
})(function(h, d, k) {
    h.when("A", "RWDynamicModalFactory", "ready").execute("RWDynamicModalBootstrapper", function(a, q) {
        var n = a.state("rw-dynamic-modal"),
            e = a.state("rw-dynamic-modal-bootstrap"),
            b = a.$("#rwol-display-called"),
            l, g, f = function() {
                try {
                    d.sessionStorage && (sessionStorage.setItem("rwolLastPage", d.location.href),
                        sessionStorage.setItem("rwolLastPageSet", Date.now()))
                } catch (a) {}
            },
            r = function() {
                var c = !1;
                return function() {
                    c || (c = !0, a.ajax("/gp/overlay/update.html", {
                        method: "post",
                        params: {
                            placementId: l,
                            priority: g
                        }
                    }))
                }
            }(),
            t = function(c) {
                c.pageContent && a.$("body").append(c.pageContent);
                c.data && c.data.tracker ? h.when(c.data.tracker).register("RWDynamicModal", function(a) {
                    return q(c, a)
                }) : h.register("RWDynamicModal", function() {
                    return q(c)
                })
            },
            k = function(c) {
                if (c && /\S/.test(c) && !a.$.isEmptyObject(c))
                    if (l = c.placementId, g = c.priority,
                        a.$(".nav-input") && a.$(".nav-input").is(":focus")) a.ajax("/gp/charity/ajax/track.html/ref\x3drwol_" + c.pageType + "_foc_" + l, {
                        method: "post"
                    });
                    else if (d.$Nav && d.$Nav.getNow("rwOverlaySuppress")) a.ajax("/gp/charity/ajax/track.html/ref\x3drwol_" + c.pageType + "_sup_" + l, {
                    method: "post"
                });
                else if (a.$.isPlainObject(c.content)) t(c);
                else if (c.content) try {
                    a.$("body").append(c.content), a.defer(function() {
                        a.trigger("rw:overlay:afterDisplay")
                    }), a.state.parse(), (c.displayLogic || "").match("client") || r()
                } catch (b) {
                    d.ueLogError &&
                        d.ueLogError(b, {
                            logLevel: "FATAL",
                            attribution: "RetaiWebsiteOverlay",
                            message: "[RWOL][Placement " + c.placementId + "] Failed appending content for placement with error: "
                        })
                }
            };
        a.on("rw:overlay:displayed", function(a) {
            r()
        });
        if (n) return f(), t(n);
        if (e) {
            try {
                if (d.sessionStorage && !document.referrer) {
                    var m = sessionStorage.getItem("rwolLastPageSet");
                    m && parseInt(m, 10) > Date.now() - 3E4 && (e.referrer = sessionStorage.getItem("rwolLastPage"))
                }
            } catch (v) {}
            e.referrer = e.referrer || document.referrer;
            if (e.referrer && e.referrer.match(/^https?:\/\/([^\/]+\.)?amazon\.com(\/|$)/i)) return f();
            if (!d.$Nav || !d.$Nav.getNow("rwOverlaySuppress")) {
                if (0 < b.length) {
                    if ("0" !== b.val()) return f();
                    b.val(1)
                }
                f();
                e.queryString = d.location.search;
                n = ["ref", "ref_"];
                if (b = d.location.search && d.location.search.split("?").pop())
                    for (b = b.split("\x26"), f = 0; f < b.length; f++) {
                        var m = b[f].split("\x3d"),
                            p = d.decodeURIComponent(m[0]);
                        if (!e.hasOwnProperty(p) && 0 > n.indexOf(p)) try {
                            var u = d.decodeURIComponent(m[1]);
                            e[p] = u
                        } catch (w) {
                            e[p] = m[1]
                        }
                    }
                return a.ajax("/gp/overlay/display.html", {
                    method: "post",
                    params: e,
                    success: k
                })
            }
        }
    });
    h.when("A",
        "jQuery", "a-modal-factory").register("RWDynamicModalFactory", function(a, d, h) {
        var e, b, l;
        return function(g, f) {
            if (g && !e) {
                var k = d('\x3cspan style\x3d"display:none;"\x3e\x3c/span\x3e');
                d("body").append(k);
                e = h.create(k, g);
                b = g.data || {};
                if (f) {
                    if (b.countRef) a.on("a:popover:show:" + g.name, function(a) {
                        f.track(b.countRef, b)
                    });
                    if (b.disButtonRef) a.on("a:popover:dismiss:" + g.name, function(d) {
                        f.track(b.disButtonRef, b);
                        l = !0;
                        a.off("a:popover:dismiss:" + g.name)
                    });
                    if (b.disRef) a.on("a:popover:afterHide:" + g.name, function(a) {
                        l ||
                            f.track(b.disRef, b)
                    });
                    a.declarative("rw-popover-log-close", "click", function(a) {
                        f.track(a.data.disRef, b);
                        l = !0;
                        e.hide()
                    })
                }
                a.on("a:popover:afterShow:" + g.name, function(b) {
                    a.ajax("/gp/overlay/update.html")
                });
                g.autoShow && e.show();
                e.attrs("data", b);
                return e
            }
        }
    })
});