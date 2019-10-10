define("modules/clean/legacy_pyxl_controllers/tooltip", ["require", "exports", "tslib", "external/lodash", "modules/core/controller_helpers", "modules/clean/analytics"], function(t, e, o, i, r, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), i = o.__importStar(i), r = o.__importStar(r);
    var a = [],
        s = (function() {
            function t(t, e, o, n, a) {
                this.$wrapper = t, this.prompt = this.$wrapper.find(".tooltip-prompt"), this.tooltip = this.$wrapper.find(".tooltip-tooltip"), this.hover_target = this.find_hover_target(), this.hover_log_event_name = a, this.position_global = e, this.tooltip_location = o, this.listen();
                var s = r.clone_element(this.tooltip).appendTo("body");
                s.css({
                    position: "static",
                    display: "inline-block"
                });
                var u = n || 500,
                    l = s.width() + 1;
                if (l > u && (l = u), this.tooltip.css({
                        width: l,
                        position: "absolute",
                        display: "none"
                    }), s.remove(), this.position_global && this.tooltip.remove().appendTo("body"), this.is_focusable()) {
                    var c = i.uniqueId("tooltip-tooltip-");
                    this.tooltip.attr({
                        role: "tooltip",
                        id: c
                    }), this.hover_target.attr({
                        tabindex: 0,
                        "aria-describedby": c
                    })
                }
            }
            return t.initClass = function() {
                this.prototype.tooltip_shown = !1, this.prototype.position_global = !1
            }, t.prototype.listen = function() {
                var t = this;
                return (function() {
                    for (var e = [], o = 0, i = [t.hover_target, t.tooltip]; o < i.length; o++) {
                        var r = i[o];
                        r.mouseenter(function() {
                            return clearTimeout(t.tooltip.data("timeout_id")), t.show_tooltip()
                        }), r.mouseleave(function() {
                            var e = setTimeout(function() {
                                return t.hide_tooltip()
                            }, 200);
                            return t.tooltip.data("timeout_id", e)
                        }), t.is_focusable() ? (r.focusin(function() {
                            return clearTimeout(t.tooltip.data("timeout_id")), t.show_tooltip()
                        }), e.push(r.focusout(function() {
                            var e = setTimeout(function() {
                                return t.hide_tooltip()
                            }, 200);
                            return t.tooltip.data("timeout_id", e)
                        }))) : e.push(void 0)
                    }
                    return e
                })()
            }, t.prototype.find_hover_target = function() {
                return this.prompt
            }, t.prototype.is_focusable = function() {
                return !1
            }, t.prototype.show_tooltip = function(t) {
                var e, o, i, r;
                if (!this.tooltip_shown) {
                    i = this.position_global ? this.hover_target.offset() : this.hover_target.position();
                    for (var s = 0, u = Array.from(a); s < u.length; s++) {
                        u[s].hide_tooltip()
                    }
                    return a.push(this), "top" === this.tooltip_location ? (r = i.top - this.tooltip.outerHeight() - this.hover_target.height() / 2, o = i.left - this.tooltip.outerWidth() / 2, e = {
                        top: "-=7"
                    }) : "left" === this.tooltip_location ? (r = i.top - this.tooltip.outerHeight() / 2 + this.hover_target.outerHeight() / 2, o = i.left - this.tooltip.outerWidth() - 2, e = {
                        left: "-=7"
                    }) : "bottom" === this.tooltip_location ? (r = i.top + this.hover_target.outerHeight(), o = i.left - this.tooltip.outerWidth() / 2 + this.hover_target.outerWidth() / 2, e = {
                        top: "+=7"
                    }) : (r = i.top - this.tooltip.outerHeight() / 2 + this.hover_target.outerHeight() / 2, o = i.left + this.hover_target.width() + 2, e = {
                        left: "+=7"
                    }), this.tooltip.css({
                        top: r,
                        left: o
                    }).show().animate(e, 50), this.hover_log_event_name && n.TeamsWebActionsLogger.log(this.hover_log_event_name), this.tooltip_shown = !0
                }
            }, t.prototype.hide_tooltip = function() {
                if (this.tooltip_shown) {
                    clearTimeout(this.tooltip.data("timeout_id")), this.tooltip.hide(), this.tooltip_shown = !1;
                    var t = a.indexOf(this);
                    return t !== -1 ? a.splice(t, 1) : void 0
                }
            }, t
        })();
    e.DBTooltip = s, s.initClass();
    var u = (function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.__extends(e, t), e.prototype.find_hover_target = function() {
            return this.prompt.find(".sprite")
        }, e.prototype.is_focusable = function() {
            return !0
        }, e
    })(s);
    e.InfoTooltip = u
}), define("modules/clean/legacy_ui_button", ["require", "exports", "tslib", "jquery"], function(t, e, o, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), i = o.__importDefault(i);
    var r = function() {
        var t = i.default(document);
        return i.default(document).on("mouseover.ui-button", ".ui-button", function() {
            return i.default(this).addClass("over")
        }).on("mouseout.ui-button", ".ui-button", function() {
            return i.default(this).removeClass("over")
        }).on("mousedown.ui-button", ".ui-button", function() {
            return i.default(this).addClass("down")
        }).on("click.ui-button", ".ui-button", function() {
            var e = i.default(this);
            return e.hasClass("ui-button-dropdown") && (e.hasClass("active") ? t.trigger("dropdownClosed", [1]) : t.trigger("dropdownOpened", [1])), e.toggleClass("active")
        }), t.on("click.ui-button", function(e) {
            var o = i.default(e.target),
                r = o.closest(".ui-button.active"),
                n = 0;
            i.default(".ui-button.active").not(r).each(function() {
                var t = i.default(this);
                t.hasClass("active") && t.hasClass("ui-button-dropdown") && (n += 1), t.removeClass("active")
            }), t.trigger("dropdownClosed", [n])
        }).on("mouseup.ui-button", function() {
            return i.default(".ui-button.down").removeClass("down")
        })
    };
    e.default = r
}), define("modules/clean/marketing_tracker", ["require", "exports", "tslib", "modules/core/exception"], function(t, e, o, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), i = o.__importStar(i), e.MARKETING_URI = "https://marketing.dropbox.com";
    var r = (function() {
        function t() {
            var t = this;
            return this.el = null, this.ready = !1, this.readyTimeout = null, this.push = function(r) {
                var n = r.src,
                    a = r.dataLayer,
                    s = r.config,
                    u = o.__assign({}, a, {
                        _config: s || {}
                    });
                i.assert(!!n, "MarketingTracker.push requires src"), t.ready ? t.el && t.el.contentWindow && t.el.contentWindow.postMessage(u, e.MARKETING_URI) : (t.el || (t.el = t.load(n), t.src = n, s && (t.config = s), t.readyTimeout = setTimeout(function() {
                    i.reportException({
                        err: new Error("Timed-out while waiting for marketing_tracker iframe load event"),
                        severity: "non-critical"
                    })
                }, 3e4)), t.el.addEventListener("load", function() {
                    null !== t.readyTimeout && (clearTimeout(t.readyTimeout), t.readyTimeout = null), t.el && t.el.contentWindow ? (t.ready = !0, t.el.contentWindow.postMessage(u, e.MARKETING_URI)) : i.reportException({
                        err: new Error("Could not find contentWindow on marketing_tracker iframe element"),
                        severity: "non-critical"
                    })
                }))
            }, this.load = function(t) {
                var e = document.createElement("iframe");
                return e.style.display = "none", e.hidden = !0, e.src = t, e.setAttribute("sandbox", "allow-scripts allow-same-origin"), document.body.appendChild(e), e
            }, this.pushWithDefaults = function(e) {
                var r = t,
                    n = r.config,
                    a = r.src;
                if (n) {
                    var s = {
                        config: n,
                        dataLayer: o.__assign({}, t.config.default_marketing_data, e),
                        src: a
                    };
                    t.push(s)
                } else i.reportStack("MarketingTracker.pushWithDefaults requires config, which is undefined. This probably           means there is no MarketingTracker instance on the page.")
            }, this.pushEvent = function(e) {
                t.pushWithDefaults({
                    event: e,
                    tealium_event: e
                })
            }, e.MarketingTracker ? e.MarketingTracker : this
        }
        return t
    })();
    e.MarketingTracker = new r
}), define("modules/clean/photos/legacy_thumb_loader", ["require", "exports", "tslib", "jquery", "modules/clean/photos/batch_thumb_loader", "modules/clean/sprite"], function(t, e, o, i, r, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), i = o.__importDefault(i), n = o.__importDefault(n), e.LegacyBatchThumbLoader = {
        MAX_THUMB_BATCH_REQUESTS: 24,
        batch_load_thumbs: function(t, e, o, a) {
            for (var s = i.default.grep(t, function(t) {
                    return i.default(t).data("src")
                }), u = {}, l = 0, c = s; l < c.length; l++) {
                var h = c[l],
                    d = String(i.default(h).data("src"));
                u[d] || (u[d] = []), u[d].push(h)
            }
            this.instance ? this.instance.reset({
                batch_size: e,
                batch_logger: a
            }) : this.instance = new r.BatchThumbLoader({
                batch_size: e,
                max_parallel_requests: this.MAX_THUMB_BATCH_REQUESTS,
                on_batch: function(t) {
                    for (var e = 0, o = t; e < o.length; e++) {
                        var r = o[e],
                            n = [],
                            a = i.default(u[r]);
                        a.data("src", null), n.push(a.data("loading-src", r))
                    }
                },
                batch_logger: a
            });
            for (var p = 0, f = s; p < f.length; p++) {
                var _ = f[p],
                    g = i.default(_),
                    m = g.data("src");
                this.instance.queue_thumb(m, function(t, e, i, r) {
                    if (r || e.data("loading-src")) {
                        if (e.data("loading-src", null), 0 === i.indexOf("data:image")) return e.attr("src", i), "function" == typeof o ? o(e[0]) : void 0;
                        e.error(function() {
                            return e.attr("src", e.data("fail-src") || n.default.SPACER)
                        }), e.load(function() {
                            return "function" == typeof o ? o(e[0]) : void 0
                        }), e.attr("src", i)
                    }
                }.bind(this, m, g))
            }
            return this.instance.flush(), s.length
        },
        clear_all_pending_batches: function() {
            this.instance && this.instance.clear()
        }
    }
}), define("modules/clean/shared_link_error", ["require", "exports", "tslib", "jquery", "modules/clean/ajax"], function(t, e, o, i, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), i = o.__importDefault(i), r = o.__importStar(r);
    var n;
    n = (function() {
        var t = void 0;
        return n = (function() {
            function e() {
                i.default("#broken-share-article").on("click", function() {
                    return r.WebRequest({
                        url: "/shared_link_error_log",
                        data: {
                            evt: t
                        }
                    })
                })
            }
            return e.initClass = function() {
                t = "click-sharing-article"
            }, e
        })(), n.initClass(), n
    })(), e.default = n
});
//# sourceMappingURL=pkg-legacy-ab.min.js-vflR_dTsp.map