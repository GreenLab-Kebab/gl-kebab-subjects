(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], {
        120: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var a = n(19),
                i = n(68),
                o = n(257),
                r = n(88),
                s = n(185),
                c = function(e, t) {
                    window.googletag.cmd.push(function() {
                        e.id in a.a.advertIds || function(e, t) {
                            var n = new i.a(e);
                            a.a.advertIds[n.id] = a.a.adverts.push(n) - 1, a.a.shouldLazyLoad() && !t ? (Object(o.a)(n), Object(s.a)(n)) : Object(r.a)(n)
                        }(e, t)
                    })
                }
        },
        156: function(e, t, n) {
            "use strict";
            var a = n(31),
                i = n.n(a),
                o = n(66),
                r = (n(68), i()(function(e) {
                    return new Promise(function(t) {
                        ! function n() {
                            var a = Object(o.a)(e);
                            a ? t(a) : window.setTimeout(n, 200)
                        }()
                    })
                }));
            n.d(t, "a", function() {
                return s
            });
            var s = function(e) {
                return r(e).then(function(e) {
                    return e.whenRendered
                })
            }
        },
        157: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return p
            }), n.d(t, "c", function() {
                return g
            }), n.d(t, "a", function() {
                return h
            });
            var a = n(14),
                i = n(262),
                o = n(261),
                r = [i.a, "".concat(window.location.protocol, "//").concat(window.location.host)],
                s = {},
                c = 0,
                d = {
                    code: 405,
                    message: "Service %% not implemented"
                },
                u = {
                    code: 500,
                    message: "Internal server error\n\n%%"
                },
                l = function(e) {
                    if (e.slotId) {
                        var t = document.getElementById("dfp-ad--".concat(e.slotId)),
                            n = t ? t.getElementsByTagName("iframe") : null;
                        return n && n.length ? n[0] : null
                    }
                    if (e.iframeId) return document.getElementById(e.iframeId)
                },
                f = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                    return n.reduce(function(e, t) {
                        return e.message = e.message.replace("%%", t), e
                    }, e)
                },
                m = function(e) {
                    var t;
                    if (!(r.indexOf(e.origin) < 0)) {
                        try {
                            t = JSON.parse(e.data)
                        } catch (e) {
                            return
                        }
                        var n;
                        if ("set-ad-height" === (n = t).type && ("id" in n.value || "slotId" in n.value) && "height" in n.value && (t = function(e) {
                                return {
                                    id: "aaaa0000-bb11-cc22-dd33-eeeeee444444",
                                    type: "resize",
                                    iframeId: e.value.id,
                                    slotId: e.value.slotId,
                                    value: {
                                        height: +e.value.height,
                                        width: +e.value.width
                                    }
                                }
                            }(t)), function(e) {
                                return "type" in e && "value" in e && "id" in e && e.type in s && /^[a-f0-9]{8}-([a-f0-9]{4}-){3}[a-f0-9]{12}$/.test(e.id)
                            }(t)) {
                            var i = function(n, a) {
                                Object(o.a)({
                                    id: t.id,
                                    error: n,
                                    result: a
                                }, e.source, e.origin)
                            };
                            if (Array.isArray(s[t.type]) && s[t.type].length) return s[t.type].slice().reduce(function(e, n) {
                                return e.then(function(e) {
                                    var a = n(t.value, e, l(t));
                                    return void 0 === a ? e : a
                                })
                            }, Promise.resolve(!0)).then(function(e) {
                                i(null, e)
                            }).catch(function(e) {
                                Object(a.a)(e, {
                                    feature: "native-ads"
                                }), i(f(u, e), null)
                            });
                            "function" == typeof s[t.type] ? s[t.type](i, t.value, l(t)) : i(f(d, t.type), null)
                        }
                    }
                },
                p = function(e, t, n) {
                    0 === c && (n && n.window || window).addEventListener("message", m), n && n.persist ? (s[e] = t, c += 1) : (s[e] = s[e] || [], -1 === s[e].indexOf(t) && (s[e].push(t), c += 1))
                },
                g = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (void 0 === s[e]) throw new Error(f(d, e));
                    if (void 0 === t) c -= s[e].length, s[e].length = 0;
                    else if (s[e] === t) s[e] = null, c -= 1;
                    else {
                        var a = s[e].indexOf(t);
                        a > -1 && (c -= 1, s[e].splice(a, 1))
                    }
                    0 === c && (n.window || window).removeEventListener("message", m)
                },
                h = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    t.forEach(function(e) {
                        return e(p)
                    })
                }
        },
        168: function(e, t, n) {
            "use strict";
            var a = n(16),
                i = n.n(a),
                o = n(21),
                r = n.n(o),
                s = n(1),
                c = n.n(s),
                d = n(35),
                u = n(3),
                l = n(78),
                f = n.n(l),
                m = n(75),
                p = n.n(m),
                g = n(79),
                h = n.n(g),
                b = n(45),
                v = n.n(b),
                y = n(340),
                w = n.n(y),
                k = n(22),
                _ = n.n(k),
                j = n(23),
                O = n.n(j),
                C = n(6),
                P = n(31),
                B = n.n(P),
                x = {
                    waitForImages: !0,
                    waitForLinks: !0,
                    waitForInteractives: !1
                },
                A = function(e) {
                    return e instanceof HTMLIFrameElement
                },
                L = function(e) {
                    try {
                        return e.contentWindow && e.contentWindow.document && "complete" === e.contentWindow.document.readyState
                    } catch (e) {
                        return !0
                    }
                },
                I = function(e) {
                    window.setTimeout(e, 5e3)
                },
                S = function(e) {
                    return e.bodySelector || "document"
                },
                E = B()(function(e) {
                    var t = _()("img", e.body).filter(function(e) {
                        return !e.complete
                    });
                    return 0 === t.length ? Promise.resolve() : new Promise(function(n) {
                        var a = 0;
                        O.a.on(e.body, "load", t, function i() {
                            (a += 1) === t.length && (O.a.off(e.body, "load", i), t.length = 0, n())
                        })
                    })
                }, S),
                M = B()(function(e) {
                    return 0 === _()(".element-rich-link--not-upgraded", e.body).length ? Promise.resolve() : new Promise(function(e) {
                        C.a.once("rich-link:loaded", e)
                    })
                }, S),
                T = B()(function(e) {
                    var t = _()(".element-interactive", e.body).filter(function(e) {
                        var t = Array.from(e.children).filter(A);
                        return !(t.length && L(t[0]))
                    });
                    return 0 !== t.length && "MutationObserver" in window ? Promise.all(t.map(function(e) {
                        return new Promise(function(t) {
                            new MutationObserver(function(e, n) {
                                if (e.length && e[0].addedNodes.length && A(e[0].addedNodes[0])) {
                                    var a = e[0].addedNodes[0];
                                    L(a) ? (n.disconnect(), t()) : a.addEventListener("load", function() {
                                        n.disconnect(), t()
                                    })
                                }
                            }).observe(e, {
                                childList: !0
                            })
                        })
                    })).then(function() {}) : Promise.resolve()
                }, S),
                R = function(e, t, n) {
                    var a = [];
                    return e.forEach(function(e) {
                        t(e) ? a.push(e) : n.push(e)
                    }), a
                },
                D = function(e) {
                    function t(e) {
                        var n;
                        return i()(this, t), n = f()(this, p()(t).call(this)), c()(v()(v()(n)), "name", void 0), c()(v()(v()(n)), "message", void 0), n.name = "SpaceError", n.message = "There is no space left matching rules from ".concat(e.bodySelector), n
                    }
                    return h()(t, e), t
                }(w()(Error)),
                F = function(e) {
                    return Object.freeze({
                        top: e.offsetTop,
                        bottom: e.offsetTop + e.offsetHeight,
                        element: e
                    })
                };
            n.d(t, "a", function() {
                return G
            });
            var z = function(e) {
                    return d.a.captureException(e), !1
                },
                G = new(function() {
                    function e() {
                        i()(this, e), c()(this, "queue", void 0), this.queue = Promise.resolve()
                    }
                    return r()(e, [{
                        key: "fillSpace",
                        value: function(e, t, n) {
                            var a = function(e) {
                                    return u.a.write(function() {
                                        return t(e)
                                    })
                                },
                                i = function(e) {
                                    if (e instanceof D) return !1;
                                    throw e
                                };
                            return this.queue = this.queue.then(function() {
                                return function(e, t, n) {
                                    e.body = e.bodySelector && document.querySelector(e.bodySelector) || document;
                                    var a = n || {};
                                    return function(e, t) {
                                        return Promise.race([new Promise(I), Promise.all([!t.waitForImages || E(e), !t.waitForLinks || M(e), !t.waitForInteractives || T(e)])]).then(function() {
                                            return e
                                        })
                                    }(e, t || x).then(function() {
                                        return function(e, t) {
                                            var n = _()(e.bodySelector + e.slotSelector);
                                            if (e.fromBottom && n.reverse(), e.startAt) {
                                                var a = !0;
                                                t.startAt = [], n = R(n, function(t) {
                                                    return t === e.startAt && (a = !1), !a
                                                }, t.startAt)
                                            }
                                            if (e.stopAt) {
                                                var i = !0;
                                                t.stopAt = [], n = R(n, function(t) {
                                                    return t === e.stopAt && (i = !1), i
                                                }, t.stopAt)
                                            }
                                            return n
                                        }(e, a)
                                    }).then(function(t) {
                                        return function(e, t) {
                                            var n = e.clearContentMeta ? document.querySelector(".js-content-meta") : null,
                                                a = e.selectors ? Object.keys(e.selectors).map(function(t) {
                                                    return [t, _()(e.bodySelector + t)]
                                                }) : null;
                                            return u.a.read(function() {
                                                var i = e.body instanceof Element && e.body.getBoundingClientRect(),
                                                    o = t.map(F),
                                                    r = e.clearContentMeta && n ? F(n) : null,
                                                    s = a ? a.reduce(function(e, t) {
                                                        return e[t[0]] = t[1].map(F), e
                                                    }, {}) : null;
                                                return {
                                                    bodyTop: i.top || 0,
                                                    bodyHeight: i.height || 0,
                                                    candidates: o,
                                                    contentMeta: r,
                                                    opponents: s
                                                }
                                            })
                                        }(e, t)
                                    }).then(function(t) {
                                        return function(e, t, n) {
                                            var a = e.candidates;
                                            return n.absoluteMinAbove = [], a = R(a, function(n) {
                                                return !t.absoluteMinAbove || n.top + e.bodyTop >= t.absoluteMinAbove
                                            }, n.absoluteMinAbove), n.aboveAndBelow = [], a = R(a, function(n) {
                                                var a = n.top >= t.minAbove,
                                                    i = n.top + t.minBelow <= e.bodyHeight;
                                                return a && i
                                            }, n.aboveAndBelow), t.clearContentMeta && (n.contentMeta = [], a = R(a, function(n) {
                                                return !!e.contentMeta && n.top > e.contentMeta.bottom + t.clearContentMeta
                                            }, n.contentMeta)), t.selectors && Object.keys(t.selectors).forEach(function(i) {
                                                n[i] = [], a = R(a, function(n) {
                                                    return function(e, t, n) {
                                                        return n.every(function(e, t, n) {
                                                            var a = t.top - n.bottom >= e.minAbove,
                                                                i = n.top - t.top >= e.minBelow;
                                                            return a || i
                                                        }.bind(void 0, e, t))
                                                    }(t.selectors[i], n, e.opponents ? e.opponents[i] : [])
                                                }, n[i])
                                            }), t.filter && (n.custom = [], a = R(a, t.filter, n.custom)), a
                                        }(t, e, a)
                                    }).then(function(t) {
                                        return function(e, t) {
                                            if (!t.length) throw new D(e);
                                            return t.map(function(e) {
                                                return e.element
                                            })
                                        }(e, t)
                                    })
                                }(e, n).then(a, i)
                            }).catch(z), this.queue
                        }
                    }]), e
                }())
        },
        17: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = function(e, t) {
                    return Object.freeze({
                        width: e,
                        height: t,
                        toString: function() {
                            return e === t && 0 === t ? "fluid" : "".concat(e, ",").concat(t)
                        }
                    })
                },
                i = {
                    billboard: a(970, 250),
                    leaderboard: a(728, 90),
                    mpu: a(300, 250),
                    halfPage: a(300, 600),
                    portrait: a(300, 1050),
                    skyscraper: a(160, 600),
                    mobilesticky: a(320, 50),
                    fluid: a(0, 0),
                    outOfPage: a(1, 1),
                    googleCard: a(300, 274),
                    video: a(620, 1),
                    outstreamDesktop: a(620, 350),
                    outstreamMobile: a(300, 197),
                    merchandisingHighAdFeature: a(88, 89),
                    merchandisingHigh: a(88, 87),
                    merchandising: a(88, 88),
                    inlineMerchandising: a(88, 85),
                    fabric: a(88, 71),
                    empty: a(2, 2)
                };
            i["970x250"] = i.billboard, i["728x90"] = i.leaderboard, i["300x250"] = i.mpu, i["300x600"] = i.halfPage, i["300x1050"] = i.portrait, i["160x600"] = i.skyscraper
        },
        173: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return d
            });
            var a = n(0),
                i = n(2),
                o = n(14),
                r = n(4),
                s = 0,
                c = function(e) {
                    var t, n = !1 !== e ? (t = "kx".concat("segs"), r.a.getRaw(t) || Object(i.d)("".concat(t, "=([^;]*)")) || "") : "";
                    return n ? n.split(",") : []
                },
                d = {
                    shouldRun: a.a.get("switches.krux", !1),
                    url: "//cdn.krxd.net/controltag?confid=JVZiE3vn",
                    onLoad: function() {
                        ! function e() {
                            if (window.Krux) {
                                var t = {
                                    dc: !0,
                                    al: !0,
                                    tg: !0,
                                    cd: !1,
                                    sh: !1,
                                    re: !1
                                };
                                window.Krux("consent:set", t, function(e) {
                                    if (e) switch (e.idv) {
                                        case "no identifier found for user":
                                        case "user opted out via (optout or dnt)":
                                            break;
                                        default:
                                            var n = Object.keys(e).map(function(t) {
                                                    return "".concat(t, " -> '").concat(e[t], "'")
                                                }).join(", "),
                                                a = "KRUX: ".concat(n);
                                            Object(o.a)(new Error(a), {
                                                feature: "krux:consent:set",
                                                consentFlags: t
                                            })
                                    }
                                })
                            } else s < 20 && (s += 1, setTimeout(function() {
                                e()
                            }, 100))
                        }()
                    }
                }
        },
        185: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            }), n(68);
            var a = n(19),
                i = n(88),
                o = n(66),
                r = n(33),
                s = function(e) {
                    var t = Object(o.a)(e);
                    t && (t.isRendered ? Object(i.b)(t) : Object(i.a)(t))
                },
                c = function(e, t) {
                    var n = [];
                    e.filter(function(e) {
                        return !("isIntersecting" in e) || e.isIntersecting
                    }).forEach(function(e) {
                        t.unobserve(e.target), s(e.target.id), n.push(e.target.id)
                    }), a.a.advertsToLoad = a.a.advertsToLoad.filter(function(e) {
                        return n.indexOf(e.id) < 0
                    })
                },
                d = n.n(r)()(function() {
                    return Promise.resolve(new window.IntersectionObserver(c, {
                        rootMargin: "200px 0px"
                    }))
                }),
                u = function(e) {
                    a.a.lazyLoadObserve ? d().then(function(t) {
                        return t.observe(e.node)
                    }) : s(e.id)
                }
        },
        19: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n(20),
                i = n(0),
                o = {
                    renderStartTime: -1,
                    adSlotSelector: ".js-ad-slot",
                    externalDemand: i.a.get("page.hbImpl"),
                    lazyLoadEnabled: !1,
                    lazyLoadObserve: "IntersectionObserver" in window,
                    creativeIDs: [],
                    advertIds: {},
                    advertsToLoad: [],
                    advertsToRefresh: [],
                    adverts: [],
                    shouldLazyLoad: function() {
                        return !i.a.get("page.hasPageSkin") && "1" !== Object(a.d)().dll
                    }
                }
        },
        239: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return f
            });
            var a = n(16),
                i = n.n(a),
                o = n(21),
                r = n.n(o),
                s = n(1),
                c = n.n(s),
                d = n(6),
                u = n(12),
                l = n.n(u),
                f = function() {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i()(this, e), c()(this, "element", void 0), c()(this, "opts", void 0), c()(this, "offsetFromParent", void 0), c()(this, "lastMessage", void 0), this.element = t, this.opts = Object.assign({}, {
                            top: 0,
                            containInParent: !0,
                            emitMessage: !1
                        }, n)
                    }
                    return r()(e, [{
                        key: "init",
                        value: function() {
                            var e = this,
                                t = this.element.parentElement;
                            t && (l.a.read(function() {
                                e.offsetFromParent = e.element.getBoundingClientRect().top - t.getBoundingClientRect().top
                            }, this), d.a.on("window:throttledScroll", this.updatePosition.bind(this)), l.a.read(this.updatePosition, this))
                        }
                    }, {
                        key: "updatePosition",
                        value: function() {
                            var e = this,
                                t = this.element.parentElement;
                            if (t) {
                                var n, a, i, o = this.element.getBoundingClientRect(),
                                    r = t.getBoundingClientRect(),
                                    s = o.height;
                                if (r.top + this.offsetFromParent > 0) i = !1, n = {
                                    top: ""
                                }, a = "unfixed";
                                else {
                                    i = !0;
                                    var c = this.opts.containInParent && r.bottom <= o.height ? Math.floor(r.bottom - s - this.opts.top) : this.opts.top;
                                    n = {
                                        top: "".concat(c, "px")
                                    }, a = "fixed"
                                }
                                this.opts.emitMessage && a && a !== this.lastMessage && (this.emitMessage(a), this.lastMessage = a), n && l.a.write(function() {
                                    i ? e.element.classList.add("is-sticky") : e.element.classList.remove("is-sticky"), Object.assign(e.element.style, n)
                                }, this)
                            }
                        }
                    }, {
                        key: "emitMessage",
                        value: function(e) {
                            d.a.emit("modules:".concat(this.element.id, ":").concat(e))
                        }
                    }]), e
                }()
        },
        24: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return f
            });
            var a = n(16),
                i = n.n(a),
                o = n(1),
                r = n.n(o),
                s = n(0),
                c = n(7),
                d = n(40),
                u = n(26),
                l = n(80),
                f = new function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.a;
                    i()(this, e), r()(this, "dfpAdvertising", void 0), r()(this, "shouldBlockAnalytics", void 0), r()(this, "stickyTopBannerAd", void 0), r()(this, "articleBodyAdverts", void 0), r()(this, "articleAsideAdverts", void 0), r()(this, "carrotTrafficDriver", void 0), r()(this, "videoPreRolls", void 0), r()(this, "highMerch", void 0), r()(this, "thirdPartyTags", void 0), r()(this, "outbrain", void 0), r()(this, "commentAdverts", void 0), r()(this, "liveblogAdverts", void 0), r()(this, "paidforBand", void 0), r()(this, "asynchronous", void 0), r()(this, "adFree", void 0);
                    var n = /[#&]noads(&.*)?$/.test(window.location.hash),
                        a = /[#&]noadsaf(&.*)?$/.test(window.location.hash),
                        o = /[?&]forceads(&.*)?$/.test(window.location.search),
                        f = !n && !l.a.isOff("adverts"),
                        m = t.get("page.shouldHideAdverts") || "childrens-books-site" === t.get("page.section"),
                        p = t.get("page.isMinuteArticle"),
                        g = "Article" === t.get("page.contentType"),
                        h = "Interactive" === t.get("page.contentType"),
                        b = t.get("page.isLiveBlog"),
                        v = t.get("page.isHosted"),
                        y = "Identity" === t.get("page.contentType") || "identity" === t.get("page.section"),
                        w = t.get("switches"),
                        k = "wide" === Object(c.d)(),
                        _ = document.documentElement && document.documentElement.classList.contains("has-sticky"),
                        j = t.get("page.showNewRecipeDesign") && t.get("tests.abNewRecipeDesign"),
                        O = ["help/ng-interactive/2017/mar/17/contact-the-guardian-securely", "help/2016/sep/19/how-to-contact-the-guardian-securely"].includes(t.get("page.pageId", ""));
                    this.adFree = !!a || Object(d.g)(), this.dfpAdvertising = o || w.commercial && f && !m && !y && !this.adFree, this.shouldBlockAnalytics = O, this.stickyTopBannerAd = !this.adFree && !t.get("page.disableStickyTopBanner") && !_, this.articleBodyAdverts = this.dfpAdvertising && !this.adFree && !p && g && !b && !v && !j, this.carrotTrafficDriver = !this.adFree && this.articleBodyAdverts && t.get("switches.carrotTrafficDriver", !1) && !t.get("page.isPaidContent"), this.videoPreRolls = this.dfpAdvertising && !this.adFree, this.highMerch = this.dfpAdvertising && !this.adFree && !p && !v && !h && !t.get("page.isFront") && !j, this.thirdPartyTags = !this.adFree && f && !y && !O, this.outbrain = this.dfpAdvertising && !this.adFree && w.outbrain && !n && !m && g && !t.get("page.isPreview") && t.get("page.showRelatedContent") && !(Object(u.l)() && t.get("page.commentable")), this.commentAdverts = this.dfpAdvertising && !this.adFree && !p && t.get("switches.enableDiscussionSwitch") && t.get("page.commentable") && (!b || k), this.liveblogAdverts = b && this.dfpAdvertising && !this.adFree, this.paidforBand = t.get("page.isPaidContent") && !_
                }
        },
        245: function(e, t, n) {
            "use strict";
            var a = n(16),
                i = n.n(a),
                o = n(21),
                r = n.n(o),
                s = n(1),
                c = n.n(s),
                d = n(0),
                u = (n(68), n(19)),
                l = n(13),
                f = n.n(l),
                m = n(20),
                p = n(383),
                g = n.n(p),
                h = n(34),
                b = n(121),
                v = n(122),
                y = n(64),
                w = n(9),
                k = n(18),
                _ = n.n(k),
                j = function(e) {
                    if (Object(w.o)() || Object(w.l)()) return "13915593";
                    switch (Object(w.i)()) {
                        case "D":
                            return Object(w.g)(e) ? "13366606" : Object(w.d)(e) ? "13366615" : "13915593";
                        case "M":
                            return Object(w.f)(e) ? "13366904" : "13915593";
                        case "T":
                            return Object(w.f)(e) ? "13366913" : Object(w.c)(e) ? "13366916" : "13915593";
                        default:
                            return "13915593"
                    }
                },
                O = function(e, t) {
                    if (t) return "11016434";
                    switch (Object(w.i)()) {
                        case "D":
                            return Object(w.g)(e) ? "9251752" : Object(w.d)(e) ? "9926678" : "9251752";
                        case "M":
                            return Object(w.f)(e) ? "4298191" : "9251752";
                        case "T":
                            return Object(w.f)(e) ? "4371641" : Object(w.c)(e) ? "4371640" : "9251752";
                        default:
                            return "9251752"
                    }
                },
                C = Object(h.b)(Object(h.c)()),
                P = function() {
                    return Object(y.d)(b.a, "variant")
                },
                B = function() {
                    return Object(y.d)(v.a, "variant")
                },
                x = "Article" === d.a.get("page.contentType"),
                A = "D" === Object(w.i)() && x,
                L = function(e, t) {
                    switch (Object(w.D)(e)) {
                        case "dfp-ad--inline1":
                            return "2960";
                        case "dfp-ad--inline2":
                            return t ? "3826" : "3827";
                        case "dfp-ad--inline3":
                            return t ? "3828" : "3829";
                        case "dfp-ad--inline4":
                            return t ? "3830" : "3831";
                        case "dfp-ad--inline5":
                            return t ? "3832" : "3833";
                        case "dfp-ad--inline6":
                            return t ? "3834" : "3835";
                        case "dfp-ad--inline7":
                            return t ? "3836" : "3837";
                        case "dfp-ad--inline8":
                            return t ? "3838" : "3839";
                        case "dfp-ad--inline9":
                            return t ? "3840" : "3841";
                        case "dfp-ad--mostpop":
                            return "2961";
                        case "dfp-ad--right":
                            return "2962";
                        case "dfp-ad--top-above-nav":
                            return "2963";
                        case "dfp-ad--comments":
                            return "3840";
                        case "dfp-ad--mobile-sticky":
                            return "8519";
                        default:
                            return e.startsWith("dfp-ad--inline") ? t ? "3840" : "3841" : (console.log("PREBID: Failed to get TrustX ad unit for slot ".concat(e, ".")), "")
                    }
                },
                I = function(e) {
                    if (P()) switch (Object(w.i)()) {
                        case "D":
                            return Object(w.b)(e) ? 1116408 : Object(w.f)(e) ? 1116407 : Object(w.d)(e) ? 1116409 : -1;
                        case "T":
                            return Object(w.f)(e) ? 1116410 : Object(w.c)(e) ? 1116411 : -1;
                        case "M":
                            return 1116412;
                        default:
                            return -1
                    }
                    if (Object(w.n)()) switch (Object(w.i)()) {
                        case "D":
                            return Object(w.g)(e) ? 1116396 : Object(w.d)(e) ? 1116397 : -1;
                        case "M":
                            return Object(w.g)(e) ? 1116400 : -1;
                        case "T":
                            return Object(w.g)(e) ? 1116398 : Object(w.d)(e) ? 1116399 : -1;
                        default:
                            return -1
                    }
                    if (Object(w.m)()) switch (Object(w.i)()) {
                        case "D":
                            return Object(w.g)(e) ? 1116420 : Object(w.d)(e) ? 1116421 : -1;
                        case "M":
                            return Object(w.g)(e) ? 1116424 : -1;
                        case "T":
                            return Object(w.g)(e) ? 1116422 : Object(w.d)(e) ? 1116423 : -1;
                        default:
                            return -1
                    }
                    return -1
                },
                S = function() {
                    return !g()(Object(m.e)())
                },
                E = function(e) {
                    return S() || e
                },
                M = {
                    name: "and",
                    switchName: "prebidAppnexus",
                    bidParams: function(e, t) {
                        return function(e, t) {
                            if (t && d.a.get("switches.prebidAppnexusInvcode")) {
                                var n = function(e) {
                                    var t = "M" === Object(w.i)() ? "M" : "D",
                                        n = d.a.get("page.section", "") || d.a.get("page.sectionName", "").replace(/ /g, "-"),
                                        a = Object(w.j)(e);
                                    if (a) return "".concat(t).concat(n.toLowerCase()).concat(a.join("x"))
                                }(e);
                                if (n) return {
                                    invCode: n,
                                    member: "7012",
                                    keywords: _()({
                                        invc: [n]
                                    }, Object(h.b)(Object(h.c)()))
                                }
                            }
                            return {
                                placementId: O(e, t),
                                keywords: Object(h.b)(Object(h.c)())
                            }
                        }(t, Object(w.l)())
                    }
                },
                T = {
                    name: "oxd",
                    switchName: "prebidOpenx",
                    bidParams: function() {
                        return Object(w.o)() ? {
                            delDomain: "guardian-us-d.openx.net",
                            unit: "540279544",
                            customParams: Object(h.b)(Object(h.c)())
                        } : Object(w.l)() ? {
                            delDomain: "guardian-aus-d.openx.net",
                            unit: "540279542",
                            customParams: Object(h.b)(Object(h.c)())
                        } : {
                            delDomain: "guardian-d.openx.net",
                            unit: "540279541",
                            customParams: Object(h.b)(Object(h.c)())
                        }
                    }
                },
                R = {
                    name: "ozone",
                    switchName: "prebidOzone",
                    bidParams: function() {
                        return Object.assign({}, {
                            publisherId: "OZONEGMG0001",
                            siteId: "4204204209",
                            placementId: "0420420500",
                            customData: [{
                                settings: {},
                                targeting: C
                            }],
                            ozoneData: {}
                        }, window.OzoneLotameData ? {
                            lotameData: window.OzoneLotameData
                        } : {})
                    }
                },
                D = {
                    name: "sonobi",
                    switchName: "prebidSonobi",
                    bidParams: function(e) {
                        return Object.assign({}, {
                            ad_unit: d.a.get("page.adUnit"),
                            dom_id: e,
                            appNexusTargeting: Object(h.a)(Object(h.c)()),
                            pageViewId: d.a.get("ophan.pageViewId")
                        }, P() ? {
                            render: "safeframe"
                        } : {})
                    }
                },
                F = {
                    name: "pubmatic",
                    switchName: "prebidPubmatic",
                    bidParams: function(e) {
                        return Object.assign({}, {
                            publisherId: Object(w.o)() ? "157206" : Object(w.l)() ? "157203" : "157207",
                            adSlot: Object(w.C)(e)
                        })
                    }
                },
                z = {
                    name: "trustx",
                    switchName: "prebidTrustx",
                    bidParams: function(e) {
                        return {
                            uid: L(e, A)
                        }
                    }
                },
                G = {
                    name: "triplelift",
                    switchName: "prebidTriplelift",
                    bidParams: function(e, t) {
                        return {
                            inventoryCode: function(e, t) {
                                return Object(w.c)(t) ? "theguardian_topbanner_728x90_prebid" : Object(w.f)(t) ? x ? "theguardian_article_300x250_prebid" : "theguardian_sectionfront_300x250_prebid" : Object(w.e)(t) ? "theguardian_320x50_HDX" : (console.log("PREBID: Failed to get TripleLift ad unit for slot ".concat(e, ".")), "")
                            }(e, t)
                        }
                    }
                },
                V = {
                    name: "improvedigital",
                    switchName: "prebidImproveDigital",
                    bidParams: function(e, t) {
                        return {
                            placementId: I(t),
                            size: function(e) {
                                var t = Object(w.E)(Object(w.D)(e));
                                return t && (t.endsWith("mostpop") || t.endsWith("comments") || t.endsWith("inline1") || t.endsWith("inline") && !A) ? {
                                    w: 300,
                                    h: 250
                                } : {}
                            }(e)
                        }
                    }
                },
                N = {
                    name: "xhb",
                    switchName: "prebidXaxis",
                    bidParams: function(e, t) {
                        return {
                            placementId: function(e) {
                                return Object(w.b)(e) ? 13663297 : Object(w.f)(e) ? 13663304 : Object(w.a)(e) ? 13663284 : 13663304
                            }(t)
                        }
                    }
                },
                H = {
                    name: "adyoulike",
                    switchName: "prebidAdYouLike",
                    bidParams: function() {
                        return Object(w.n)() ? {
                            placement: "2b4d757e0ec349583ce704699f1467dd"
                        } : Object(w.o)() ? {
                            placement: "7fdf0cd05e1d4bf39a2d3df9c61b3495"
                        } : Object(w.l)() ? {
                            placement: "5cf05e1705a2d57ba5d51e03f2af9208"
                        } : {
                            placement: "c1853ee8bfe0d4e935cbf2db9bb76a8b"
                        }
                    }
                },
                U = {
                    name: "pangaea",
                    switchName: "prebidPangaeaUs",
                    bidParams: function() {
                        return Object.assign({}, {
                            placementId: "13892369",
                            keywords: Object(h.b)(Object(h.c)())
                        })
                    }
                },
                q = function(e) {
                    var t = function() {
                        if (!P()) {
                            var e = d.a.get("page.pbIndexSites", []).find(function(e) {
                                return e.bp === Object(w.i)()
                            });
                            return e && e.id ? e.id.toString() : ""
                        }
                        switch (Object(w.i)()) {
                            case "D":
                                return "287246";
                            case "T":
                                return "287247";
                            case "M":
                                return "287248";
                            default:
                                return "-1"
                        }
                    }();
                    return e.map(function(e) {
                        return {
                            name: "ix",
                            switchName: "prebidIndexExchange",
                            bidParams: function() {
                                return {
                                    siteId: t,
                                    size: e
                                }
                            }
                        }
                    })
                },
                $ = function(e) {
                    var t = f()(E(Object(w.x)()) ? [D] : []).concat(f()(E(Object(w.z)()) ? [z] : []), f()(E(Object(w.w)()) ? [U] : []), f()(E(Object(w.y)()) ? [G] : []), f()(E(Object(w.r)()) ? [M] : []), f()(E(Object(w.s)()) ? [V] : []), [F], f()(!B() && E(Object(w.A)()) ? [N] : []), f()(E(Object(w.q)(e)) ? [H] : []), f()(E(Object(w.B)()) ? [R] : []), f()(Object(w.u)() ? [T] : [])),
                        n = B() && E(Object(w.A)()) ? function(e) {
                            return e.map(function(e) {
                                return {
                                    name: "xhb",
                                    switchName: "prebidXaxis",
                                    bidParams: function() {
                                        return {
                                            placementId: function(e) {
                                                switch (Object(w.i)()) {
                                                    case "D":
                                                        return Object(w.f)(e) ? 15900184 : Object(w.b)(e) ? 13663297 : Object(w.h)(e) ? 16279905 : Object(w.a)(e) ? 13663284 : Object(w.c)(e) ? 15900187 : 15900184;
                                                    case "M":
                                                        return Object(w.f)(e) ? 13663304 : 15900184;
                                                    default:
                                                        return 15900184
                                                }
                                            }([e])
                                        }
                                    }
                                }
                            })
                        }(e) : [],
                        a = q(e).concat(n).concat(t).concat(function() {
                            var e = [],
                                t = {
                                    name: "appnexus",
                                    switchName: "prebidS2sozone",
                                    bidParams: function(e, t) {
                                        return Object.assign({}, {
                                            placementId: j(t),
                                            keywords: Object(h.b)(Object(h.c)())
                                        }, window.OzoneLotameData ? {
                                            lotame: window.OzoneLotameData
                                        } : {})
                                    }
                                },
                                n = {
                                    name: "openx",
                                    switchName: "prebidS2sozone",
                                    bidParams: function() {
                                        return Object.assign({}, {
                                            delDomain: "guardian-d.openx.net",
                                            unit: "539997090",
                                            customParams: Object(h.b)(Object(h.c)())
                                        }, window.OzoneLotameData ? {
                                            lotame: window.OzoneLotameData
                                        } : {})
                                    }
                                },
                                a = {
                                    name: "pangaea",
                                    switchName: "prebidS2sozone",
                                    bidParams: function(e, t) {
                                        return Object.assign({}, {
                                            placementId: function(e) {
                                                var t = d.a.get("page.section", "").toLowerCase(),
                                                    n = [{
                                                        sections: ["business"],
                                                        lb: 13892359,
                                                        mmpu: 13892404,
                                                        dmpu: 13892360
                                                    }, {
                                                        sections: ["culture"],
                                                        lb: 13892361,
                                                        mmpu: 13892405,
                                                        dmpu: 13892362
                                                    }, {
                                                        sections: ["uk", "us", "au"],
                                                        lb: 13892363,
                                                        mmpu: 13892406,
                                                        dmpu: 13892364
                                                    }, {
                                                        sections: ["news"],
                                                        lb: 13892365,
                                                        mmpu: 13892407,
                                                        dmpu: 13892366
                                                    }, {
                                                        sections: ["money"],
                                                        lb: 13892367,
                                                        mmpu: 13892408,
                                                        dmpu: 13892368
                                                    }, {
                                                        sections: ["sport"],
                                                        lb: 13892372,
                                                        mmpu: 13892410,
                                                        dmpu: 13892373
                                                    }, {
                                                        sections: ["lifeandstyle", "fashion"],
                                                        lb: 13892411,
                                                        mmpu: 13892436,
                                                        dmpu: 13892437
                                                    }, {
                                                        sections: ["technology", "environment"],
                                                        lb: 13892376,
                                                        mmpu: 13892414,
                                                        dmpu: 13892377
                                                    }, {
                                                        sections: ["travel"],
                                                        lb: 13892378,
                                                        mmpu: 13892415,
                                                        dmpu: 13892379
                                                    }].find(function(e) {
                                                        return e.sections.includes(t)
                                                    }) || {
                                                        sections: ["other"],
                                                        lb: 13892369,
                                                        mmpu: 13892409,
                                                        dmpu: 13892370
                                                    },
                                                    a = Object(w.i)();
                                                return Object(w.f)(e) && "M" === a ? n.mmpu : Object(w.g)(e) ? n.dmpu : Object(w.d)(e) ? n.lb : 13892409
                                            }(t).toString(),
                                            keywords: Object(h.b)(Object(h.c)())
                                        }, window.OzoneLotameData ? {
                                            lotame: window.OzoneLotameData
                                        } : {})
                                    }
                                };
                            return E(d.a.get("switches.prebidS2sozone") && Object(w.v)()) && (e.push(n), e.push(t), d.a.get("switches.prebidPangaea", !1) && e.push(a)), e
                        }());
                    return S() ? a.filter(function(e) {
                        return Object(m.e)()[e.name]
                    }) : function(e) {
                        return e.filter(function(e) {
                            return function(e) {
                                return d.a.get("switches.".concat(e.switchName))
                            }(e)
                        })
                    }(a)
                },
                W = function(e, t) {
                    return $(t).map(function(n) {
                        return {
                            bidder: n.name,
                            params: n.bidParams(e, t)
                        }
                    })
                },
                Q = function(e, t) {
                    return function(e, t) {
                        return t.filter(function(t) {
                            return Object(w.E)(Object(w.D)(e)).endsWith(t.key)
                        })
                    }(e, function(e) {
                        var t = "Article" === e,
                            n = "Crossword" === e,
                            a = d.a.get("page.hasShowcaseMainElement", !1),
                            i = t && d.a.get("switches.extendedMostPopular"),
                            o = [{
                                key: "right",
                                sizes: a ? [
                                    [300, 250]
                                ] : [
                                    [300, 600],
                                    [300, 250]
                                ]
                            }, {
                                key: "inline1",
                                sizes: n ? [
                                    [728, 90]
                                ] : [
                                    [300, 250]
                                ]
                            }],
                            r = [{
                                key: "top-above-nav",
                                sizes: [
                                    [970, 250],
                                    [728, 90]
                                ]
                            }, {
                                key: "inline",
                                sizes: t ? [
                                    [160, 600],
                                    [300, 600],
                                    [300, 250]
                                ] : [
                                    [300, 250]
                                ]
                            }, {
                                key: "mostpop",
                                sizes: i ? [
                                    [300, 600],
                                    [300, 250]
                                ] : [
                                    [300, 250]
                                ]
                            }, {
                                key: "comments",
                                sizes: [
                                    [160, 600],
                                    [300, 250],
                                    [300, 600]
                                ]
                            }],
                            s = [{
                                key: "top-above-nav",
                                sizes: [
                                    [728, 90]
                                ]
                            }, {
                                key: "inline",
                                sizes: [
                                    [300, 250]
                                ]
                            }, {
                                key: "mostpop",
                                sizes: i ? [
                                    [300, 600],
                                    [300, 250],
                                    [728, 90]
                                ] : [
                                    [300, 250]
                                ]
                            }],
                            c = [{
                                key: "top-above-nav",
                                sizes: [
                                    [300, 250]
                                ]
                            }, {
                                key: "inline",
                                sizes: [
                                    [300, 250]
                                ]
                            }, {
                                key: "mostpop",
                                sizes: [
                                    [300, 250]
                                ]
                            }];
                        switch (Object(w.i)()) {
                            case "M":
                                return Object(w.t)() && d.a.get("switches.mobileStickyPrebid") ? o.concat(c.concat([{
                                    key: "mobile-sticky",
                                    sizes: [
                                        [320, 50]
                                    ]
                                }])) : o.concat(c);
                            case "T":
                                return o.concat(s);
                            default:
                                return o.concat(r)
                        }
                    }(t))
                },
                J = {
                    buckets: [{
                        min: 0,
                        max: 100,
                        increment: .01
                    }, {
                        min: 100,
                        max: 500,
                        increment: 1
                    }]
                },
                Y = n(66),
                K = {
                    cmpApi: "iab",
                    timeout: 200,
                    allowAuctionWithoutConsent: !0
                },
                X = {
                    accountId: "1",
                    enabled: !0,
                    bidders: ["appnexus", "openx", "pangaea"],
                    timeout: 1500,
                    adapter: "prebidServer",
                    is_debug: "false",
                    endpoint: "https://elb.the-ozone-project.com/openrtb2/auction",
                    syncEndpoint: "https://elb.the-ozone-project.com/cookie_sync",
                    cookieSet: !0,
                    cookiesetUrl: "https://acdn.adnxs.com/cookieset/cs.js"
                },
                Z = function() {
                    function e(t, n) {
                        i()(this, e), c()(this, "code", void 0), c()(this, "bids", void 0), c()(this, "mediaTypes", void 0), this.code = t.id, this.bids = W(t.id, n.sizes), this.mediaTypes = {
                            banner: {
                                sizes: n.sizes
                            }
                        }
                    }
                    return r()(e, [{
                        key: "isEmpty",
                        value: function() {
                            return null == this.code
                        }
                    }]), e
                }(),
                ee = Promise.resolve(),
                te = !1;
            t.a = {
                initialise: function(e) {
                    te = !0;
                    var t = d.a.get("switches.prebidUserSync", !1) ? {
                            syncsPerBidder: 999,
                            filterSettings: {
                                all: {
                                    bidders: "*",
                                    filter: "include"
                                }
                            }
                        } : {
                            syncEnabled: !1
                        },
                        n = Object.assign({}, {
                            bidderTimeout: 1500,
                            priceGranularity: J,
                            userSync: t
                        }, d.a.get("switches.enableConsentManagementService", !1) ? {
                            consentManagement: K
                        } : {}, d.a.get("switches.prebidS2sozone", !1) ? {
                            s2sConfig: X
                        } : {});
                    e.pbjs.setConfig(n), d.a.get("switches.prebidAnalytics", !1) && e.pbjs.enableAnalytics([{
                        provider: "gu",
                        options: {
                            ajaxUrl: d.a.get("page.ajaxUrl"),
                            pv: d.a.get("ophan.pageViewId")
                        }
                    }]), e.pbjs.bidderSettings = {}, d.a.get("switches.prebidXaxis", !1) && (e.pbjs.bidderSettings.xhb = {
                        adserverTargeting: [{
                            key: "hb_buyer_id",
                            val: function(e) {
                                return e.appnexus ? e.appnexus.buyerMemberId : ""
                            }
                        }]
                    }), e.pbjs.onEvent("bidWon", function(e) {
                        var t = e.width,
                            n = e.height,
                            a = e.adUnitCode;
                        if (t && n && a) {
                            var i = [t, n],
                                o = Object(Y.a)(a);
                            o && (o.size = i, o.hasPrebidSize = !0)
                        }
                    })
                },
                requestBids: function(e, t) {
                    if (!te) return ee;
                    var n = t || function(e) {
                        return [e]
                    };
                    if ("prebid" !== u.a.externalDemand) return ee;
                    var a = Q(e.id, d.a.get("page.contentType", "")).map(n).reduce(function(e, t) {
                        return e.concat(t)
                    }, []).map(function(t) {
                        return new Z(e, t)
                    }).filter(function(e) {
                        return !e.isEmpty()
                    });
                    return 0 === a.length ? ee : ee = ee.then(function() {
                        return new Promise(function(e) {
                            window.pbjs.que.push(function() {
                                window.pbjs.requestBids({
                                    adUnits: a,
                                    bidsBackHandler: function() {
                                        window.pbjs.setTargetingForGPTAsync([a[0].code]), e()
                                    }
                                })
                            })
                        })
                    }).catch(function() {})
                }
            }
        },
        256: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = function(e) {
                return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            }
        },
        257: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n(19),
                i = (n(68), function(e) {
                    a.a.advertsToLoad.push(e), "false" !== e.node.getAttribute("data-refresh") && a.a.advertsToRefresh.push(e)
                })
        },
        258: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var a = n(22),
                i = n.n(a),
                o = n(3),
                r = n(33),
                s = n.n(r),
                c = n(19),
                d = function(e) {
                    return "none" === window.getComputedStyle(e).display
                },
                u = s()(function() {
                    var e = i()(c.a.adSlotSelector);
                    return e = e.filter(d), o.a.write(function() {
                        e.forEach(function(e) {
                            return e.remove()
                        })
                    })
                })
        },
        259: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var a = n(22),
                i = n.n(a),
                o = n(3),
                r = n(33),
                s = n.n(r),
                c = n(19),
                d = n(24),
                u = ".".concat("fc-slice__item--mpu-candidate"),
                l = function(e) {
                    return e.className.toLowerCase().includes("fc-slice__item--mpu-candidate")
                },
                f = function(e) {
                    var t = e.getAttribute("data-component");
                    return t && t.includes("commercial-container")
                },
                m = s()(function() {
                    if (!d.a.adFree) return Promise.resolve();
                    var e = document.body,
                        t = i()(c.a.adSlotSelector),
                        n = i()(u).filter(l),
                        a = i()(".fc-container").filter(f),
                        r = i()(".commercial-thrasher");
                    return o.a.write(function() {
                        e && (e.classList.toString().includes("has-page-skin") && e.classList.remove("has-page-skin"), e.classList.toString().includes("has-active-pageskin") && e.classList.remove("has-active-pageskin")), t.forEach(function(e) {
                            return e.remove()
                        }), n.forEach(function(e) {
                            return e.classList.add("fc-slice__item--no-mpu")
                        }), a.forEach(function(e) {
                            return e.classList.add("u-h")
                        }), r.forEach(function(e) {
                            var t = e.closest(".fc-container--thrasher");
                            t && t.remove()
                        })
                    })
                })
        },
        260: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return f
            }), n.d(t, "a", function() {
                return m
            });
            var a = n(0),
                i = n(24),
                o = n(34),
                r = n(19),
                s = n(33),
                c = n.n(s),
                d = n(245),
                u = function() {
                    return !!(navigator && navigator.userAgent && (navigator.userAgent.indexOf("Google Web Preview") > -1 || navigator.userAgent.indexOf("googleweblight") > -1))
                },
                l = Promise.resolve();
            u() || (l = n.e(30).then(n.t.bind(null, 483, 7)));
            var f = c()(function() {
                    return l.then(function() {
                        return "prebid" !== r.a.externalDemand || !i.a.dfpAdvertising || i.a.adFree || a.a.get("page.hasPageSkin") || u() || (Object(o.c)(), d.a.initialise(window)), Promise.resolve()
                    })
                }),
                m = function() {
                    return f(), Promise.resolve()
                }
        },
        261: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n(262),
                i = function(e, t, n) {
                    t.postMessage(JSON.stringify(e), n || a.a)
                }
        },
        262: function(e, t, n) {
            "use strict";
            t.a = "".concat(window.location.protocol, "//tpc.googlesyndication.com")
        },
        263: function(e, t, n) {
            "use strict";
            var a = n(28),
                i = n.n(a),
                o = n(7),
                r = n(54),
                s = n(0),
                c = n(8),
                d = n(3),
                u = n(85),
                l = n(47),
                f = n(104),
                m = ["politics", "world", "business", "commentisfree"],
                p = {
                    defaults: {
                        news: {
                            mobile: {
                                code: "MB_4"
                            },
                            desktop: {
                                image: "AR_12",
                                text: "AR_14"
                            },
                            tablet: {
                                image: "MB_6",
                                text: "MB_8"
                            }
                        },
                        defaults: {
                            mobile: {
                                code: "MB_5"
                            },
                            desktop: {
                                image: "AR_13",
                                text: "AR_15"
                            },
                            tablet: {
                                image: "MB_7",
                                text: "MB_9"
                            }
                        }
                    },
                    merchandising: {
                        mobile: {
                            code: "MB_10"
                        },
                        desktop: {
                            code: "AR_28"
                        },
                        tablet: {
                            code: "MB_11"
                        }
                    },
                    nonCompliant: {
                        mobile: {
                            code: "MB_10"
                        },
                        desktop: {
                            code: "AR_28"
                        },
                        tablet: {
                            code: "MB_11"
                        }
                    }
                },
                g = function(e) {
                    var t, n, a = "wide" === e.breakpoint ? "desktop" : e.breakpoint;
                    return e.outbrainType in p && "defaults" !== e.outbrainType ? "nonCompliant" === e.outbrainType ? p.nonCompliant[a] : p.merchandising[a] : p.defaults[(t = e.section, n = t.toLowerCase(), /news/.test(n) || m.includes(n) ? "news" : "defaults")][a]
                },
                h = {
                    defaults: "defaults",
                    merchandising: "nonCompliant",
                    nonCompliant: "nonCompliant"
                },
                b = {
                    defaults: {
                        desktop: {
                            code: "AR_12"
                        },
                        tablet: {
                            code: "AR_12"
                        },
                        mobile: {
                            code: "MB_4"
                        }
                    },
                    epic: {
                        desktop: {
                            code: "AR_13"
                        },
                        tablet: {
                            code: "AR_13"
                        },
                        mobile: {
                            code: "MB_5"
                        }
                    },
                    nonCompliant: {
                        desktop: {
                            code: "AR_14"
                        },
                        tablet: {
                            code: "AR_14"
                        },
                        mobile: {
                            code: "MB_10"
                        }
                    }
                },
                v = function(e, t) {
                    var n = b[e];
                    if (!n) throw new Error("Unknown outbrain param set  (".concat(e, ")"));
                    var a = n[t];
                    if (!a) throw new Error("Unknown outbrain breakpoint (".concat(t, ")"));
                    return {
                        code: a.code
                    }
                },
                y = n(30),
                w = n.n(y),
                k = function(e) {
                    var t = e.widgetCode;
                    return '\n    <div class="OUTBRAIN" data-widget-id="'.concat(t, '" data-ob-template="guardian" aria-hidden="true"></div>\n    ')
                },
                _ = {
                    outbrain: {
                        widget: ".js-outbrain",
                        container: ".js-outbrain-container"
                    },
                    merchandising: {
                        widget: ".js-container--commercial",
                        container: ".js-outbrain-container"
                    },
                    nonCompliant: {
                        widget: ".js-outbrain",
                        container: ".js-outbrain-container"
                    }
                },
                j = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e && e in _ ? e : "defaults",
                        a = Object(c.a)(_.outbrain.widget),
                        i = Object(c.a)(_.outbrain.container, a[0]),
                        r = Object(o.d)(),
                        m = s.a.get("switches.commercialOutbrainNewids", !1) ? function(e) {
                            var t = h[e.outbrainType];
                            if (!t) throw new Error("Unknown outbrainType (".concat(e.outbrainType, ")"));
                            var n = "wide" === e.breakpoint ? "desktop" : e.breakpoint;
                            return v("defaults" === t ? "defaults" : "nonCompliant" === t && e.contributionEpicVisible ? "epic" : "nonCompliant", n)
                        }({
                            outbrainType: n,
                            contributionEpicVisible: t,
                            section: s.a.get("page.section", ""),
                            breakpoint: r
                        }) : g({
                            outbrainType: n,
                            section: s.a.get("page.section", ""),
                            breakpoint: r
                        }),
                        p = function(e, t) {
                            var n = k({
                                widgetCode: e.code || e.image || ""
                            });
                            return "mobile" !== t && e.text && (n += k({
                                widgetCode: e.text
                            })), n
                        }(m, r);
                    return i.length ? d.a.write(function() {
                        "merchandising" === n && Object(c.a)(_.merchandising.widget).replaceWith(a[0]), i.append(p), a.css("display", "block")
                    }).then(function() {
                        var e;
                        e = {
                            widgetId: m.code || m.image
                        }, w.a.record({
                            outbrain: e
                        }), Object(u.a)("//widgets.outbrain.com/outbrain.js"), Object(l.c)("Commercial: Outbrain loaded"), Object(f.d)("Javascript Load", "commercialOutbrainLoaded", "Commercial outbrain loaded")
                    }) : Promise.resolve()
                };
            n.d(t, "a", function() {
                return C
            }), n.d(t, "b", function() {
                return P
            });
            var O = function() {
                    return Promise.all([Object(r.c)("isOutbrainDisabled"), o.a.then(function(e) {
                        return !document.getElementById("dfp-ad--merchandising-high") || !!e
                    }), Object(r.c)("isUserInContributionsAbTest"), Object(r.c)("isStoryQuestionsOnPage")]).then(function(e) {
                        var t = i()(e, 4);
                        return {
                            outbrainEnabled: !t[0],
                            noMerchSlotsExpected: t[1],
                            contributionsTestVisible: t[2],
                            storyQuestionsVisible: t[3]
                        }
                    })
                },
                C = function() {
                    return O().then(function(e) {
                        return e.contributionsTestVisible || e.storyQuestionsVisible || !e.outbrainEnabled ? new Map([
                            ["outbrain-compliant", "false"]
                        ]) : new Map
                    })
                },
                P = function() {
                    return O().then(function(e) {
                        if (s.a.set("debug.outbrain.pageConditions.outbrainEnabled", e.outbrainEnabled), e.outbrainEnabled) {
                            s.a.set("debug.outbrain.pageConditions.contributionsTestVisible", e.contributionsTestVisible), s.a.set("debug.outbrain.pageConditions.storyQuestionsVisible", e.storyQuestionsVisible);
                            var t = e.contributionsTestVisible,
                                n = t || e.storyQuestionsVisible;
                            if (s.a.set("debug.outbrain.editorialTests", n), s.a.set("debug.outbrain.pageConditions.noMerchSlotsExpected", e.noMerchSlotsExpected), !e.noMerchSlotsExpected) return Promise.all([Object(r.c)("isOutbrainBlockedByAds"), Object(r.c)("isOutbrainMerchandiseCompliant")]).then(function(e) {
                                var t = i()(e, 2);
                                return {
                                    blockedByAds: t[0],
                                    useMerchandiseAdSlot: t[1]
                                }
                            }).then(function(e) {
                                s.a.set("debug.outbrain.dfpConditions.blockedByAds", e.blockedByAds), e.blockedByAds || (s.a.set("debug.outbrain.dfpConditions.useMerchandiseAdSlot", e.useMerchandiseAdSlot), e.useMerchandiseAdSlot ? j("merchandising") : n ? j("nonCompliant", t) : j("defaults"))
                            });
                            n ? j("nonCompliant", t) : j("defaults")
                        }
                    })
                }
        },
        34: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return L
            }), n.d(t, "a", function() {
                return A
            }), n.d(t, "b", function() {
                return x
            });
            var a, i = n(28),
                o = n.n(i),
                r = n(0),
                s = n(2),
                c = n(7),
                d = n(5),
                u = n(4),
                l = n(20),
                f = n(173),
                m = n(26),
                p = n(210),
                g = n(105),
                h = n(24),
                b = n(64),
                v = n(9),
                y = n(161),
                w = n.n(y),
                k = n(33),
                _ = n.n(k),
                j = n(203),
                O = n.n(j),
                C = n(218),
                P = n.n(C),
                B = {},
                x = _()(function(e) {
                    return Object(v.p)({
                        sens: e.sens,
                        pt1: e.url,
                        pt2: e.edition,
                        pt3: e.ct,
                        pt4: e.p,
                        pt5: e.k,
                        pt6: e.su,
                        pt7: e.bp,
                        pt8: e.x,
                        pt9: [e.gdncrm, e.pv, e.co, e.tn, e.slot].join("|")
                    })
                }),
                A = _()(function(e) {
                    return t = x(e), w()(Object.keys(t).filter(function(e) {
                        return "" !== t[e] && null !== t[e]
                    }).map(function(e) {
                        var n = t[e];
                        return Array.isArray(n) ? n.map(function(t) {
                            return "".concat(e, "=").concat(t)
                        }) : "".concat(e, "=").concat(n)
                    })).join(",");
                    var t
                }),
                L = function() {
                    return 0 !== Object.keys(B).length ? B : (Object(g.onIabConsentNotification)(function(e) {
                        var t = e[1] && e[2] && e[3] && e[4] && e[5];
                        t !== a && (B = function(e) {
                            var t, n, a, i, g = r.a.get("page"),
                                v = {
                                    pa: e ? "t" : "f"
                                },
                                y = h.a.adFree ? {
                                    af: "t"
                                } : {},
                                w = Object.assign({
                                    sens: g.isSensitive ? "t" : "f",
                                    x: Object(f.a)(e),
                                    pv: r.a.get("ophan.pageViewId"),
                                    bp: function() {
                                        switch (Object(c.d)(!0)) {
                                            case "mobile":
                                            case "mobileMedium":
                                            case "mobileLandscape":
                                                return "mobile";
                                            case "phablet":
                                            case "tablet":
                                                return "tablet";
                                            case "desktop":
                                            case "leftCol":
                                            case "wide":
                                                return "desktop";
                                            default:
                                                return "mobile"
                                        }
                                    }(),
                                    at: Object(s.d)("adtest") || void 0,
                                    si: Object(m.l)() ? "t" : "f",
                                    gdncrm: Object(p.a)(e),
                                    ab: function() {
                                        var e = Object(b.c)(),
                                            t = [],
                                            n = function(e, n) {
                                                if ("string" == typeof n && "notintest" !== n) {
                                                    var a = "".concat(e, "-").concat(n);
                                                    t.push(a.substring(0, 40))
                                                }
                                            };
                                        Object.keys(e).forEach(function(t) {
                                            var a = e[t];
                                            n(t, a.variant)
                                        });
                                        var a = r.a.get("tests");
                                        return a && Object.entries(a).forEach(function(e) {
                                            var t = o()(e, 2),
                                                a = t[0],
                                                i = t[1];
                                            n(a, i)
                                        }), t
                                    }(),
                                    ref: ([{
                                        id: "facebook",
                                        match: "facebook.com"
                                    }, {
                                        id: "twitter",
                                        match: "t.co/"
                                    }, {
                                        id: "reddit",
                                        match: "reddit.com"
                                    }, {
                                        id: "google",
                                        match: "www.google"
                                    }].filter(function(e) {
                                        return Object(c.e)().indexOf(e.match) > -1
                                    })[0] || {}).id,
                                    ms: (a = g.source, a ? (i = a, i.replace(/[+\s]+/g, "-").toLowerCase()).replace(/&/g, "and").replace(/'/g, "") : null),
                                    fr: (n = u.a.get("gu.alreadyVisited") || 0, n <= 5 ? n.toString() : n >= 6 && n <= 9 ? "6-9" : n >= 10 && n <= 15 ? "10-15" : n >= 16 && n <= 19 ? "16-19" : n >= 20 && n <= 29 ? "20-29" : n >= 30 ? "30plus" : n.toString()),
                                    vl: g.videoDuration ? (30 * Math.ceil(g.videoDuration / 30)).toString() : void 0,
                                    cc: Object(d.g)(),
                                    s: g.section,
                                    rp: r.a.get("isDotcomRendering", !1) ? "dotcom-rendering" : "dotcom-platform",
                                    inskin: (t = Object(c.g)(), t && t.width >= 1560 ? "t" : "f")
                                }, g.sharedAdTargeting, v, y, O()(Object(l.d)(), ["0p19G"])),
                                k = P()(w, function(e) {
                                    return Array.isArray(e) ? e.length > 0 : e
                                });
                            return g.appNexusPageTargeting = A(k), g.pageAdTargeting = k, k
                        }(t), a = t)
                    }), B)
                }
        },
        340: function(e, t, n) {
            var a = n(75),
                i = n(201),
                o = n(428),
                r = n(429);

            function s(t) {
                var n = "function" == typeof Map ? new Map : void 0;
                return e.exports = s = function(e) {
                    if (null === e || !o(e)) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== n) {
                        if (n.has(e)) return n.get(e);
                        n.set(e, t)
                    }

                    function t() {
                        return r(e, arguments, a(this).constructor)
                    }
                    return t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), i(t, e)
                }, s(t)
            }
            e.exports = s
        },
        341: function(e, t, n) {
            var a = n(250),
                i = n(430);
            e.exports = function(e, t) {
                return e && e.length ? i(e, a(t, 2)) : []
            }
        },
        356: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return j
            });
            var a = n(16),
                i = n.n(a),
                o = n(78),
                r = n.n(o),
                s = n(75),
                c = n.n(s),
                d = n(21),
                u = n.n(d),
                l = n(79),
                f = n.n(l),
                m = n(22),
                p = n.n(m),
                g = n(3),
                h = n(76),
                b = n(6),
                v = n(33),
                y = n.n(v),
                w = new Promise(function(e, t) {
                    b.a.on("modules:onward:geo-most-popular:ready", e), b.a.on("modules:onward:geo-most-popular:cancel", e), b.a.on("modules:onward:geo-most-popular:error", t)
                }),
                k = function(e) {
                    function t() {
                        var e;
                        return i()(this, t), (e = r()(this, c()(t).call(this))).endpoint = "/most-read-geo.json", b.a.emit("register:begin", "geo-most-popular"), e
                    }
                    return f()(t, e), u()(t, null, [{
                        key: "error",
                        value: function(e) {
                            b.a.emit("modules:onward:geo-most-popular:error", e)
                        }
                    }]), u()(t, [{
                        key: "ready",
                        value: function() {
                            b.a.emit("register:end", "geo-most-popular"), b.a.emit("modules:onward:geo-most-popular:ready", this)
                        }
                    }]), t
                }(h.a),
                _ = function(e) {
                    e > 1500 && (new k).fetch(p()(".js-components-container"), "rightHtml")
                },
                j = {
                    render: y()(function() {
                        return g.a.read(function() {
                            var e = document.querySelector(".js-article__body");
                            return e ? e.getBoundingClientRect() && e.getBoundingClientRect().height : 0
                        }).then(_), w
                    }),
                    whenRendered: w
                }
        },
        381: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n(0),
                i = n(3),
                o = n(96),
                r = n(24),
                s = function() {
                    if (r.a.highMerch) {
                        var e = a.a.get("page.commentable") ? "#comments + *" : ".content-footer > :first-child",
                            t = document.querySelector(e),
                            n = document.createElement("div");
                        return n.className = "fc-container fc-container--commercial", Object(o.a)(a.a.get("page.isPaidContent") ? "high-merch-paid" : "high-merch").forEach(function(e) {
                            n.appendChild(e)
                        }), i.a.write(function() {
                            t && t.parentNode && t.parentNode.insertBefore(n, t)
                        })
                    }
                    return Promise.resolve()
                }
        },
        382: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var a = n(28),
                i = n.n(a),
                o = n(8),
                r = n(0),
                s = n(6),
                c = n(3),
                d = (n(11), function() {
                    var e = Object(o.a)(".js-secondary-column");
                    if (!e.length || "none" === e.css("display")) return Promise.resolve(!1);
                    var t = Object(o.a)(".js-content-main-column"),
                        n = Object(o.a)(".js-ad-slot", e),
                        a = Object(o.a)(".element--immersive", t);
                    return n.length && t.length ? c.a.read(function() {
                        return [t.dim().height, a.offset().top - t.offset().top]
                    }).then(function(e) {
                        var t = i()(e, 2),
                            o = t[0],
                            s = t[1];
                        return r.a.get("page.hasShowcaseMainElement", !1) ? n[0] : r.a.get("page.isImmersive") && a.length > 0 ? c.a.write(function() {
                            var e;
                            return n.removeClass("right-sticky js-sticky-mpu is-sticky"), n[0].setAttribute("data-mobile", (e = s) > 600 ? "1,1|2,2|300,250|300,274|300,600|fluid" : e > 274 ? "1,1|2,2|300,250|300,274" : e > 250 ? "1,1|2,2|300,250" : "1,1|2,2"), n[0]
                        }) : o < 1300 ? c.a.write(function() {
                            return n.removeClass("right-sticky js-sticky-mpu is-sticky"), n[0].setAttribute("data-mobile", "1,1|2,2|300,250|300,274|fluid"), n[0]
                        }) : n[0]
                    }).then(function(e) {
                        return s.a.emit("page:defaultcommercial:right", e), !0
                    }) : Promise.resolve(!1)
                })
        },
        383: function(e, t, n) {
            var a = n(195),
                i = n(189),
                o = n(91),
                r = n(42),
                s = n(101),
                c = n(162),
                d = n(127),
                u = n(163),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (null == e) return !0;
                if (s(e) && (r(e) || "string" == typeof e || "function" == typeof e.splice || c(e) || u(e) || o(e))) return !e.length;
                var t = i(e);
                if ("[object Map]" == t || "[object Set]" == t) return !e.size;
                if (d(e)) return !a(e).length;
                for (var n in e)
                    if (l.call(e, n)) return !1;
                return !0
            }
        },
        384: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n(3),
                i = n(120),
                o = n(96),
                r = n(9),
                s = function() {
                    if (Object(r.t)()) {
                        var e = function() {
                            var e = document.createElement("div");
                            e.className = "mobilesticky-container";
                            var t = Object(o.a)("mobile-sticky", {})[0];
                            return e.appendChild(t), e
                        }();
                        return a.a.write(function() {
                            document.body && document.body.appendChild(e)
                        }).then(function() {
                            var t = e.querySelector("#dfp-ad--mobile-sticky");
                            t && Object(i.a)(t, !0)
                        })
                    }
                    return Promise.resolve()
                }
        },
        385: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = n(4),
                i = function(e) {
                    return a.a.set("lotameConsent", e)
                },
                o = function(e) {
                    if (e && e.vendorConsents && e.purposeConsents) {
                        var t = e.vendorConsents,
                            n = e.purposeConsents;
                        return Object.keys(t).every(function(e) {
                            return t[e]
                        }) && Object.keys(n).every(function(e) {
                            return n[e]
                        })
                    }
                    return !1
                },
                r = function() {
                    return "LOTCC" in window && "setConsent" in window.LOTCC && new Promise(function(e, t) {
                        "__cmp" in window ? window.__cmp("getVendorConsents", [95], function(n, a) {
                            return a ? e(n) : t(Error("Error calling getVendorConsents"))
                        }) : t(Error("__cmp does not exist on the window"))
                    }).then(o).then(function(e) {
                        if (!!a.a.get("lotameConsent") !== e) return window.LOTCC.setConsent(function(e) {
                            return function(t) {
                                "error" in t ? i(!1) : "consent" in t && i(e)
                            }
                        }(e), 12666, function(e) {
                            return {
                                analytics: e,
                                crossdevice: e,
                                datasharing: e,
                                targeting: e
                            }
                        }(e))
                    }).catch(function(e) {
                        return console.error("Error with lotame initialisation: ".concat(e.toString()))
                    }), Promise.resolve()
                }
        },
        386: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n(24),
                i = n(85),
                o = n(0),
                r = function(e) {
                    console.log("Failed to extract lotame data:", e)
                },
                s = function() {
                    return ! function() {
                        var e = o.a.get("page.edition");
                        return o.a.get("switches.lotame", !1) && ("UK" === e || "INT" === e)
                    } || a.a.shouldBlockAnalytics ? Promise.resolve() : Object(i.a)("//ad.crwdcntrl.net/5/c=13271/pe=y/var=OzoneLotameData").then(function() {
                        return o.a.get("isDotcomRendering", !1) ? Promise.resolve() : "LOTCC" in window && "bcp" in window.LOTCC ? void Promise.resolve(window.LOTCC.bcp()) : Promise.reject(Error("No LOTCC in window"))
                    }).catch(r)
                }
        },
        387: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var a = n(0),
                i = n(82),
                o = n(128),
                r = n(63),
                s = n(9),
                c = function() {
                    if (n = 1 === Object(s.k)(1, 100), a.a.get("switches.commercialPageViewAnalytics") && (n || a.a.get("page.isDev"))) {
                        var e = a.a.get("ophan.pageViewId"),
                            t = window[r.a];
                        e && t && t("getConsentData", [], function(t) {
                            var n, r;
                            n = function(e, t) {
                                return {
                                    pv: t,
                                    cs: e.consentData,
                                    cc: Object(o.b)(o.e)
                                }
                            }(t, e), r = "".concat(a.a.get("page.ajaxUrl", ""), "/commercial/api/pv"), Object(i.a)(r, {
                                method: "post",
                                body: JSON.stringify(n),
                                mode: "cors"
                            })
                        })
                    }
                    var n
                }
        },
        388: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = n(0),
                i = n(85),
                o = function(e) {
                    console.log("Failed to load Confiant:", e)
                },
                r = function() {
                    return a.a.get("switches.confiantAdVerification") ? Object(i.a)("//".concat("confiant-integrations.global.ssl.fastly.net", "/7oDgiTsq88US4rrBG0_Nxpafkrg/gpt_and_prebid/config.js"), {
                        async: !0
                    }).catch(o) : Promise.resolve()
                }
        },
        389: function(e, t) {
            e.exports = '<aside id="<%= data.id %>" class="frame" data-link-name="creative | frame">\n    <div class="frame__background">\n        <img class="frame__background-image" src="<%=data.backgroundImage%>">\n    </div>\n    <div class="frame__foreground">\n        <a href="<%=data.clickMacro%><%=data.destinationUrl%>" class="frame__link-background" data-link-name="image" target="<%=data.target%>"></a>\n        <a class="frame__logo frame__logo--<%=data.brandLogoPosition%>" href="<%=data.brandUrl%>" data-link-name="logo" target="<%=data.target%>">\n            <img class="frame__logo__image" src="<%=data.brandLogo%>">\n        </a>\n        <a style="color: <%=data.contentColour%>" class="frame__content frame__content--<%=data.contentVerticalPosition%> frame__content--<%=data.contentHorizontalPosition%>" href="<%=data.clickMacro%><%=data.destinationUrl%>" target="<%=data.target%>">\n            <h2 style="font-size: <%=data.headerFontSize%>px" class="frame__content-title"><%=data.header%></h2>\n            <p style="font-size: <%=data.textFontSize%>px" class="frame__content-text"><%=data.text%></p>\n        </a>\n        <a href="<%=data.clickMacro%><%=data.callToActionUrl%>" class="frame__cta frame__link button button--tertiary button--medium" data-link-name="call to action" target="<%=data.target%>">\n            <%=data.callToAction%><%=data.externalLinkIcon%>\n        </a>\n    </div>\n</aside>\n'
        },
        390: function(e, t) {
            e.exports = '<div class="gu-comlabel has-popup">\n\t<button class="u-button-reset gu-comlabel__btn popup__toggle" data-toggle="gu-compopup--<%=data.dataAttr%>"><%=data.buttonTitle%> <%=data.icon%></button>\n\t<div class="popup popup--default is-off gu-compopup gu-compopup--<%=data.dataAttr%> gu-stylebox">\n\t\t<h3 class="gu-compopup__title"><%=data.infoTitle%></h3>\n\t\t<p class="gu-compopup__text"><%=data.infoText%></p>\n\t\t<a class="gu-compopup__link" href="<%=data.infoLinkUrl%>" target="_blank"><%=data.infoLinkText%></a>\n\t</div>\n</div>\n'
        },
        391: function(e, t) {
            e.exports = '<%if (data.hasContainer) {%><div class="creative--fabric-v1-bg-container"><%}%>\n<%if (data.showLabel) {%>\n<div class="ad-slot__label creative--fabric-v1__label fc-container--layout-front">\n    <div class="fc-container__inner">Advertisement</div>\n</div>\n<%}%>\n<div id="<%= data.id %>" class="creative--fabric-v1 l-side-margins hide-until-tablet" style="\n    background-color: <%=data.backgroundColor%>;\n    background-image: url(<%=data.backgroundImage%>);\n    background-position: <%=data.backgroundPosition%>;\n    background-repeat: <%=data.backgroundRepeat%>;\n">\n    <%if (data.scrollbg) {%><%=data.scrollbg%><%}%>\n    <a href="<%=data.clickMacro%><%=data.link%>" target="_blank">\n        <div class="gs-container">\n            <%=data.video%>\n            <div class="fabric-v1_layer fabric-v1_layer1" style="\n            background-image: url(<%=data.layerOneBGImage%>);\n            background-position: <%=data.layerOneBGPosition%>;\n        "></div>\n            <div class="fabric-v1_layer fabric-v1_layer2" style="\n            background-image: url(<%=data.layerTwoBGImage%>);\n            background-position: <%=data.layerTwoBGPosition%>;\n        "></div>\n            <div class="fabric-v1_layer fabric-v1_layer3" style="\n            background-image: url(<%=data.layerThreeBGImage%>);\n            background-position: <%=data.layerThreeBGPosition%>;\n        "></div>\n        </div>\n    </a>\n</div>\n<div class="creative--fabric-v1 l-side-margins mobile-only" style="\n    background-color: <%=data.backgroundColor%>;\n    background-image: url(<%=data.backgroundImageM%>);\n    background-position: <%=data.backgroundPositionM%>;\n    background-repeat: <%=data.backgroundRepeatM%>;\n">\n    <%if (data.scrollbg) {%><%=data.scrollbg%><%}%>\n    <a href="<%=data.link%>" target="_blank">\n        <div class="gs-container">\n            <div class="fabric-v1_layer fabric-v1_layer1" style="\n            background-image: url(<%=data.layerOneBGImageM%>);\n            background-position: <%=data.layerOneBGPositionM%>;\n        "></div>\n            <div class="fabric-v1_layer fabric-v1_layer1" style="\n            background-image: url(<%=data.layerTwoBGImageM%>);\n            background-position: <%=data.layerTwoBGPositionM%>;\n        "></div>\n            <div class="fabric-v1_layer fabric-v1_layer1" style="\n            background-image: url(<%=data.layerThreeBGImageM%>);\n            background-position: <%=data.layerThreeBGPositionM%>;\n        "></div>\n        </div>\n    </a>\n</div>\n<%if (data.hasContainer) {%></div><%}%>\n'
        },
        392: function(e, t) {
            e.exports = '<iframe width="409px" height="230px" src="<%=videoURL%>?rel=0&amp;controls=0&amp;showinfo=0&amp;title=0&amp;byline=0&amp;portrait=0" frameborder="0" class="fluid250_video fluid250_video--desktop fluid250_video--vert-pos-<%=videoPositionV%> fluid250_video--horiz-pos-<%=videoPositionH%>" style="<%=position%>"></iframe>\n'
        },
        393: function(e, t) {
            e.exports = '<div class="ad-scrolling-bg" style="background-image: url(\'<%=backgroundImageP%>\'); background-position: 50% 0; background-repeat: <%=backgroundImagePRepeat%>"></div>\n'
        },
        394: function(e, t) {
            e.exports = '<div id="<%= data.id %>" class="creative--expandable creative--fabric-expanding-v1">\n    <div class="ad-slot__label adFullWidth__label facia-container--layout-front">\n        <div class="facia-container__inner">Advertisement</div>\n    </div>\n    <div class="ad-exp--expand l-side-margins mobile-only" style="background-color: <%=data.backgroundColor%>">\n        <div class="facia-container__inner facia-container__inner--full-span" style="background: url(\'<%=data.backgroundImageM%>\') <%=data.backgroundRepeatM%> <%=data.backgroundPositionM%>;">\n            <%=data.showPlus%>\n            <%=data.showArrow%>\n            <div class="ad-exp-collapse__slide slide-1" style="background: <%=data.slide1BGColor%> url(\'<%=data.slide1BGImageM%>\') <%=data.slide1BGImageRepeatM%> <%=data.slide1BGImagePositionM%>;">\n                <a href="<%=data.clickMacro%><%=data.link%>" target="_new">\n                    <div class="ad-exp__layer ad-exp__layer1" style="background: url(\'<%=data.slide1Layer1BGImageM%>\') <%=data.slide1Layer1BGImageRepeatM%> <%=data.slide1Layer1BGImagePositionM%>;"></div>\n                    <div class="ad-exp__layer ad-exp__layer2" style="background: url(\'<%=data.slide1Layer2BGImageM%>\') <%=data.slide1Layer2BGImageRepeatM%> <%=data.slide1Layer2BGImagePositionM%>;"></div>\n                    <div class="ad-exp__layer ad-exp__layer3" style="background: url(\'<%=data.slide1Layer3BGImageM%>\') <%=data.slide1Layer3BGImageRepeatM%> <%=data.slide1Layer3BGImagePositionM%>;"></div>\n                </a>\n            </div>\n            <div class="ad-exp-collapse__slide slide-2" style="background: <%=data.slide2BGColor%> url(\'<%=data.slide2BGImageM%>\') <%=data.slide2BGImagePositionM%> <%=data.slide2BGImageRepeatM%>;">\n                <%=data.videoMobile%>\n                <a href="<%=data.clickMacro%><%=data.link%>" target="_new">\n                    <div class="ad-exp__layer ad-exp__layer1" style="background: url(\'<%=data.slide2Layer1BGImageM%>\') <%=data.slide2Layer1BGImageRepeatM%> <%=data.slide2Layer1BGImagePositionM%>;"></div>\n                    <div class="ad-exp__layer ad-exp__layer2" style="background: url(\'<%=data.slide2Layer2BGImageM%>\') <%=data.slide2Layer2BGImageRepeatM%> <%=data.slide2Layer2BGImagePositionM%>;"></div>\n                    <div class="ad-exp__layer ad-exp__layer3" style="background: url(\'<%=data.slide2Layer3BGImageM%>\') <%=data.slide2Layer3BGImageRepeatM%> <%=data.slide2Layer3BGImagePositionM%>;"></div>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class="ad-exp--expand l-side-margins hide-until-tablet" style="background-color: <%=data.backgroundColor%>">\n        <%=data.scrollbg%>\n        <div class="facia-container__inner facia-container__inner--full-span" style="background: url(\'<%=data.backgroundImage%>\') <%=data.backgroundRepeat%> <%=data.backgroundPosition%>;">\n            <%=data.showPlus%>\n            <%=data.showArrow%>\n            <div class="ad-exp-collapse__slide slide-1" style="background: <%=data.slide1BGColor%> url(\'<%=data.slide1BGImage%>\') <%=data.slide1BGImageRepeat%> <%=data.slide1BGImagePosition%>;">\n                <a href="<%=data.clickMacro%><%=data.link%>" target="_new">\n                    <div class="ad-exp__layer ad-exp__layer1" style="background: url(\'<%=data.slide1Layer1BGImage%>\') <%=data.slide1Layer1BGImageRepeat%> <%=data.slide1Layer1BGImagePosition%>;"></div>\n                    <div class="ad-exp__layer ad-exp__layer2" style="background: url(\'<%=data.slide1Layer2BGImage%>\') <%=data.slide1Layer2BGImageRepeat%> <%=data.slide1Layer2BGImagePosition%>;"></div>\n                    <div class="ad-exp__layer ad-exp__layer3" style="background : url(\'<%=data.slide1Layer3BGImage%>\') <%=data.slide1Layer3BGImageRepeat%> <%=data.slide1Layer3BGImagePosition%>;"></div>\n                </a>\n            </div>\n            <div class="ad-exp-collapse__slide slide-2" style="background: <%=data.slide2BGColor%> url(\'<%=data.slide2BGImage%>\') <%=data.slide2BGImagePosition%> <%=data.slide2BGImageRepeat%>;">\n                <%=data.videoDesktop%>\n                <a href="<%=data.clickMacro%><%=data.link%>" target="_new">\n                    <div class="ad-exp__layer ad-exp__layer1" style="background: url(\'<%=data.slide2Layer1BGImage%>\') <%=data.slide2Layer1BGImageRepeat%> <%=data.slide2Layer1BGImagePosition%>;"></div>\n                    <div class="ad-exp__layer ad-exp__layer2" style="background: url(\'<%=data.slide2Layer2BGImage%>\') <%=data.slide2Layer2BGImageRepeat%> <%=data.slide2Layer2BGImagePosition%>;"></div>\n                    <div class="ad-exp__layer ad-exp__layer3" style="background: url(\'<%=data.slide2Layer3BGImage%>\') <%=data.slide2Layer3BGImageRepeat%> <%=data.slide2Layer3BGImagePosition%>;"></div>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n'
        },
        395: function(e, t) {
            e.exports = '<iframe\n    width="<%=width%>"\n    height="<%=height%>"\n    src="<%=src%>"\n    frameborder="0"\n    class="<%=className%>"\n    style="<%=inlineStyle%>">\n</iframe>\n'
        },
        396: function(e, t, n) {
            var a = n(345),
                i = n(160),
                o = n(440),
                r = n(247),
                s = n(89),
                c = r(function(e, t) {
                    return a(t, function(t) {
                        t = s(t), i(e, t, o(e[t], e))
                    }), e
                });
            e.exports = c
        },
        397: function(e, t) {
            e.exports = '<div id="<%= data.id %>" class="creative--expandable-video creative--expandable-video-v2 <%=data.videoOptions%>">\n\n    <div class="ad-slot__label adFullWidth__label facia-container--layout-front">\n        <div class="facia-container__inner">Advertisement</div>\n    </div>\n\n    <div class="ad-exp--expand l-side-margins mobile-only" style="background: <%=data.backgroundColor%> url(\'<%=data.backgroundImageM%>\') <%=data.backgroundRepeatM%> <%=data.backgroundPositionM%>">\n        <div class="slide-container">\n            <div class="ad-exp-collapse__slide slide-1" style="background: <%=data.slide1BGColor%> url(\'<%=data.slide1BGImageM%>\') <%=data.slide1BGImageRepeatM%> <%=data.slide1BGImagePositionM%>;">\n                <div class="ad-exp__open">\n                    <div class="ad-exp__layer ad-exp__layer1" style="background: url(\'<%=data.slide1Layer1BGImageM%>\') <%=data.slide1Layer1BGImageRepeatM%> <%=data.slide1Layer1BGImagePositionM%>;"></div>\n                    <div class="ad-exp__layer ad-exp__layer2" style="background: url(\'<%=data.slide1Layer2BGImageM%>\') <%=data.slide1Layer2BGImageRepeatM%> <%=data.slide1Layer2BGImagePositionM%>;"></div>\n                    <div class="ad-exp__layer ad-exp__layer3" style="background: url(\'<%=data.slide1Layer3BGImageM%>\') <%=data.slide1Layer3BGImageRepeatM%> <%=data.slide1Layer3BGImagePositionM%>;"></div>\n                </div>\n            </div>\n            <div class="ad-exp-collapse__slide slide-2" style="background: <%=data.slide2BGColor%> url(\'<%=data.slide2BGImageM%>\') <%=data.slide2BGImagePositionM%> <%=data.slide2BGImageRepeatM%>;">\n                <div class="ad-exp__layer ad-exp__layer1" style="background: url(\'<%=data.slide2Layer1BGImageM%>\') <%=data.slide2Layer1BGImageRepeatM%> <%=data.slide2Layer1BGImagePositionM%>;"></div>\n                <div class="ad-exp__layer ad-exp__layer2" style="background: url(\'<%=data.slide2Layer2BGImageM%>\') <%=data.slide2Layer2BGImageRepeatM%> <%=data.slide2Layer2BGImagePositionM%>;"></div>\n                <div class="ad-exp__layer ad-exp__layer3" style="background: url(\'<%=data.slide2Layer3BGImageM%>\') <%=data.slide2Layer3BGImageRepeatM%> <%=data.slide2Layer3BGImagePositionM%>;"></div>\n            </div>\n        </div>\n    </div>\n\n    <div class="ad-exp--expand l-side-margins hide-until-tablet" style="background: <%=data.backgroundColor%> url(\'<%=data.backgroundImage%>\') <%=data.backgroundRepeat%> <%=data.backgroundPosition%>">\n        <div class="slide-container" style="">\n            <div class="ad-exp-collapse__slide slide-1" style="background: <%=data.slide1BGColor%> url(\'<%=data.slide1BGImage%>\') <%=data.slide1BGImageRepeat%> <%=data.slide1BGImagePosition%>;">\n                <div class="ad-exp__open">\n                    <div class="ad-exp__layer ad-exp__layer1" style="background: url(\'<%=data.slide1Layer1BGImage%>\') <%=data.slide1Layer1BGImageRepeat%> <%=data.slide1Layer1BGImagePosition%>;"></div>\n                    <div class="ad-exp__layer ad-exp__layer2" style="background: url(\'<%=data.slide1Layer2BGImage%>\') <%=data.slide1Layer2BGImageRepeat%> <%=data.slide1Layer2BGImagePosition%>;"></div>\n                    <div class="ad-exp__layer ad-exp__layer3" style="background : url(\'<%=data.slide1Layer3BGImage%>\') <%=data.slide1Layer3BGImageRepeat%> <%=data.slide1Layer3BGImagePosition%>;"></div>\n                </div>\n            </div>\n            <div class="ad-exp-collapse__slide slide-2" style="background: <%=data.slide2BGColor%> url(\'<%=data.slide2BGImage%>\') <%=data.slide2BGImagePosition%> <%=data.slide2BGImageRepeat%>;">\n                <div class="ad-exp__layer ad-exp__layer1" style="background: url(\'<%=data.slide2Layer1BGImage%>\') <%=data.slide2Layer1BGImageRepeat%> <%=data.slide2Layer1BGImagePosition%>;"></div>\n                <div class="ad-exp__layer ad-exp__layer2" style="background: url(\'<%=data.slide2Layer2BGImage%>\') <%=data.slide2Layer2BGImageRepeat%> <%=data.slide2Layer2BGImagePosition%>;"></div>\n                <div class="ad-exp__layer ad-exp__layer3" style="background: url(\'<%=data.slide2Layer3BGImage%>\') <%=data.slide2Layer3BGImageRepeat%> <%=data.slide2Layer3BGImagePosition%>;"></div>\n            </div>\n        </div>\n    </div>\n\n    <div class="slide-video">\n        <div class="slide-container">\n            <a href="<%=data.clickMacro%><%=data.link%>" target="_blank" class="video-container__cta"></a>\n            <div class="video-container__inner">\n                <%=data.videoEmbed%>\n            </div>\n            <%=data.mobileCTA%>\n            <%=data.desktopCTA%>\n        </div>\n    </div>\n\n    <%=data.showPlus%>\n    <%=data.showArrow%>\n</div>\n'
        },
        398: function(e, t) {
            e.exports = '<a class="creative__cta creative__cta--position-<%=position%> <%=media%>" href="<%=link%>" target="_blank"><img src="<%=image%>" alt></a>\n'
        },
        399: function(e, t) {
            e.exports = '<div id="<%= data.id %>" class="creative creative--fabric-video">\n    <a class="creative__link" href="<%=data.clickMacro%><%=data.Link%>" target="_blank">\n        <div class="creative__alt creative__alt--tablet hide-until-tablet"  style="background-color:<%=data.Backgroundcolour%>;background-image:url(<%=data.Backgroundimage%>);background-position:<%=data.Backgroundposition%>;background-repeat:<%=data.Backgroundrepeat%>;">\n            <%=data.posterTablet%>\n            <%=data.video%>\n            <div class="creative__layer creative__layer1" style="background-image:url(<%=data.Layer1backgroundimage%>);background-position: <%=data.Layer1backgroundimageposition%>;"></div>\n            <div class="creative__layer creative__layer2">\n                <div style="background-image:url(<%=data.Layer2animatedimage1%>)" class="creative__slide creative__slide1"></div>\n                <div style="background-image:url(<%=data.Layer2animatedimage2%>)" class="creative__slide creative__slide2"></div>\n                <div style="background-image:url(<%=data.Layer2animatedimage3%>)" class="creative__slide creative__slide3"></div>\n                <div style="background-image:url(<%=data.Layer2animatedimage4%>)" class="creative__slide creative__slide4">\n                    <%if (data.Layer2clickbutton){%>\n                        <img src="<%=data.Layer2clickbutton%>" class="click_button"></div>\n                    <%}%>\n                </div>\n            </div>\n            <div class="creative__layer creative__layer3" style="background-image:url(<%=data.Layer3backgroundimage%>);background-position: <%=data.Layer3backgroundimageposition%>;"></div>\n        </div>\n\n        <div class="creative__alt creative__alt--mobile mobile-only" style="background-color:<%=data.Backgroundcolour%>;background-image: url(<%=data.BackgroundImagemobile%>);background-position:<%=data.BackgroundImagemobileposition%>;background-repeat:<%=data.Backgroundimagemobilerepeat%>;">\n            <%=data.posterMobile%>\n            <div class="creative__layer creative__layer1" style="background-image:url(<%=data.Layer1backgroundimagemobile%>);background-position:<%=data.Layer1backgroundimagepositionmobile%>;"></div>\n            <div class="creative__layer creative__layer2" style="background-image:url(<%=data.Layer2backgroundimagemobile%>);background-position:<%=data.Layer2backgroundimagepositionmobile%>;"></div>\n            <div class="creative__layer creative__layer3" style="background-image:url(<%=data.Layer3backgroundimagemobile%>);background-position:<%=data.Layer3backgroundimagepositionmobile%>;"></div>\n        </div>\n    </a>\n</div>\n'
        },
        400: function(e, t, n) {
            void 0 !== e.exports && (e.exports = function(e) {
                "use strict";
                var t = new Image,
                    n = "object-fit" in t.style,
                    a = "object-position" in t.style,
                    i = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;

                function o(e) {
                    for (var t = getComputedStyle(e).fontFamily, n = null, a = {}; null !== (n = i.exec(t));) a[n[1]] = n[2];
                    return a["object-position"] ? function(e) {
                        return ~e["object-position"].indexOf("left") ? e["object-position-x"] = "left" : ~e["object-position"].indexOf("right") ? e["object-position-x"] = "right" : e["object-position-x"] = "center", ~e["object-position"].indexOf("top") ? e["object-position-y"] = "top" : ~e["object-position"].indexOf("bottom") ? e["object-position-y"] = "bottom" : e["object-position-y"] = "center", e
                    }(a) : a
                }

                function r(e, t) {
                    if ("fill" !== t["object-fit"]) {
                        var n = e.style,
                            a = window.getComputedStyle(e),
                            i = document.createElement("object-fit");
                        i.appendChild(e.parentNode.replaceChild(i, e));
                        var o = {
                            height: "100%",
                            width: "100%",
                            boxSizing: "content-box",
                            display: "inline-block",
                            overflow: "hidden"
                        };
                        for (var r in "backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight left opacity margin position right top visibility".replace(/\w+/g, function(e) {
                                o[e] = a[e]
                            }), o) i.style[r] = o[r];
                        n.border = n.margin = n.padding = 0, n.display = "block", n.opacity = 1, e.addEventListener("loadedmetadata", s), window.addEventListener("optimizedResize", s), e.readyState >= 1 && (e.removeEventListener("loadedmetadata", s), s())
                    }

                    function s() {
                        var a = e.videoWidth / e.videoHeight,
                            o = i.clientWidth,
                            r = i.clientHeight,
                            s = o / r,
                            c = 0,
                            d = 0;
                        n.marginLeft = n.marginTop = 0, (a < s ? "contain" === t["object-fit"] : "cover" === t["object-fit"]) ? (c = r * a, d = o / a, n.width = Math.round(c) + "px", n.height = r + "px", "left" === t["object-position-x"] ? n.marginLeft = 0 : "right" === t["object-position-x"] ? n.marginLeft = Math.round(o - c) + "px" : n.marginLeft = Math.round((o - c) / 2) + "px") : (d = o / a, n.width = o + "px", n.height = Math.round(d) + "px", "top" === t["object-position-y"] ? n.marginTop = 0 : "bottom" === t["object-position-y"] ? n.marginTop = Math.round(r - d) + "px" : n.marginTop = Math.round((r - d) / 2) + "px"), e.autoplay && e.play()
                    }
                }
                n && a || (function(e) {
                    var t = -1;
                    e ? "length" in e || (e = [e]) : e = document.querySelectorAll("video");
                    for (; e[++t];) {
                        var n = o(e[t]);
                        (n["object-fit"] || n["object-position"]) && (n["object-fit"] = n["object-fit"] || "fill", r(e[t], n))
                    }
                }(e), function(e, t, n) {
                    n = n || window;
                    var a = !1,
                        i = null;
                    try {
                        i = new CustomEvent(t)
                    } catch (e) {
                        (i = document.createEvent("Event")).initEvent(t, !0, !0)
                    }
                    n.addEventListener("resize", function() {
                        a || (a = !0, requestAnimationFrame(function() {
                            n.dispatchEvent(i), a = !1
                        }))
                    })
                }(0, "optimizedResize"))
            })
        },
        401: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return b
            });
            var a, i, o = n(3),
                r = n(7),
                s = n(6),
                c = n(120),
                d = n(24),
                u = n(96),
                l = n(168),
                f = 0,
                m = function(e, t) {
                    var n, o = !!t;
                    return {
                        bodySelector: ".js-liveblog-body",
                        slotSelector: " > .block",
                        fromBottom: o,
                        startAt: o ? i : null,
                        absoluteMinAbove: o ? 0 : 1.5 * a,
                        minAbove: 0,
                        minBelow: 0,
                        clearContentMeta: 0,
                        selectors: {},
                        filter: function(t) {
                            return n ? Math.abs(t.top - n.top) > 2 * e && (n = t, !0) : (n = t, !o)
                        }
                    }
                },
                p = function(e) {
                    for (var t = "mobile" === Object(r.d)(), n = function(n) {
                            var a = function(e, t) {
                                    return e && 0 === t ? "top-above-nav" : "inline".concat(e ? t : t + 1)
                                }(t, f),
                                i = Object(u.a)("inline", {
                                    name: a,
                                    classes: "liveblog-inline"
                                });
                            i.forEach(function(t) {
                                e[n] && e[n].parentNode && e[n].parentNode.insertBefore(t, e[n].nextSibling)
                            }), e[n] && e[n].parentNode && (Object(c.a)(i[0], !1), f += 1)
                        }, a = 0; a < e.length && f < 8; a += 1) n(a)
                },
                g = function(e) {
                    return l.a.fillSpace(e, p).then(function(t) {
                        if (t && f < 8) {
                            var n = document.querySelector("".concat(e.bodySelector, " > .ad-slot"));
                            i = n && n.previousSibling instanceof HTMLElement ? n.previousSibling : null, s.a.on("modules:autoupdate:updates", h)
                        } else i = null
                    })
                },
                h = function() {
                    s.a.off("modules:autoupdate:updates", h), Promise.resolve(m(a, !0)).then(g)
                },
                b = function() {
                    return d.a.liveblogAdverts ? (o.a.read(function() {
                        return a = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                            return e.documentElement && e.documentElement.clientHeight ? e.documentElement.clientHeight : 0
                        }()
                    }).then(m).then(g), Promise.resolve()) : Promise.resolve()
                }
        },
        402: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return B
            });
            var a, i, o, r, s, c, d, u = n(83),
                l = n(7),
                f = n(3),
                m = n(156),
                p = n(24),
                g = n(66),
                h = n(157),
                b = "dfp-ad--top-above-nav",
                v = !1,
                y = function(e) {
                    return r === e ? Promise.resolve(-1) : f.a.write(function() {
                        if (c && a) {
                            var t = "".concat(e, "px");
                            c.classList.add("sticky-top-banner-ad"), c.style.height = t, a.style.marginTop = t
                        }
                        return void 0 !== r && i <= d && window.scrollBy(0, e - r), r = e, e
                    })
                },
                w = function() {
                    return f.a.write(function() {
                        c && a && (d <= i ? (a.classList.add("l-header--animate"), c.classList.add("sticky-top-banner-ad--animate")) : (a.classList.remove("l-header--animate"), c.classList.remove("sticky-top-banner-ad--animate")))
                    })
                },
                k = function() {
                    return d = window.pageYOffset, v ? Promise.resolve() : (v = !0, f.a.write(function() {
                        v = !1, c && (i < d ? (c.style.position = "absolute", c.style.top = "".concat(i, "px")) : (c.style.position = "", c.style.top = ""))
                    }).then(w))
                },
                _ = function(e) {
                    return f.a.read(function() {
                        return s = s || window.getComputedStyle(o), e + parseInt(s.paddingTop, 10) + parseInt(s.paddingBottom, 10)
                    }).then(y)
                },
                j = function e(t, n, a) {
                    o && o.contains(a) && (_(t.height), Object(h.c)("resize", e))
                },
                O = function() {
                    Object(h.b)("resize", j), Object(u.a)(window, "scroll", k, {
                        passive: !0
                    })
                },
                C = function(e, t) {
                    if (e && e.size && "string" != typeof e.size) return e.size[t]
                },
                P = function() {
                    x.whenFirstRendered = Object(m.a)(b).then(function(e) {
                        if (e) {
                            var t = Object(g.a)(b),
                                n = C(t, 0),
                                a = C(t, 1);
                            return 88 !== n && a && a > 0 ? f.a.read(function() {
                                var e = window.getComputedStyle(o);
                                return parseInt(e.paddingTop, 10) + parseInt(e.paddingBottom, 10) + a || 0
                            }).then(y) : f.a.read(function() {
                                return o && o.getBoundingClientRect().height || 0
                            }).then(y)
                        }
                    })
                },
                B = function() {
                    return p.a.stickyTopBannerAd ? (o = document.getElementById(b)) && Object(l.m)({
                        min: "desktop"
                    }) ? (a = document.getElementById("header"), c = o.parentNode, f.a.read(function() {
                        return a && (i = a.getBoundingClientRect().height), o && o.getBoundingClientRect().height || 0
                    }).then(function(e) {
                        return Promise.all([y(e), k()])
                    }).then(O).then(P)) : (o = null, Promise.resolve()) : Promise.resolve()
                },
                x = {
                    update: _,
                    resizeStickyBanner: y,
                    onScroll: k,
                    whenFirstRendered: null
                }
        },
        403: function(e, t) {
            e.exports = '<div class="fc-container fc-container--<%=widgetType%> hide-on-childrens-books-site js-<%=widgetType%>">\n    <div class="fc-container__inner js-<%=widgetType%>-container"></div>\n</div>\n'
        },
        404: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n(239),
                i = n(24),
                o = function() {
                    if (!i.a.paidforBand) return Promise.resolve(!1);
                    var e = document.querySelector(".paidfor-band");
                    return e && new a.a(e).init(), Promise.resolve(!0)
                }
        },
        405: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var a = n(22),
                i = n.n(a),
                o = n(23),
                r = n.n(o),
                s = n(12),
                c = n.n(s),
                d = function(e) {
                    var t = e.currentTarget,
                        n = t.parentNode,
                        a = t.querySelector(".js-button__label");
                    n.hasAttribute("open") ? c.a.write(function() {
                        a.textContent = "More ".concat(t.getAttribute("data-text"))
                    }) : c.a.write(function() {
                        a.textContent = "Less"
                    })
                },
                u = function() {
                    var e, t = i()(".dumathoin-more > summary");
                    return r.a.on(document, "click", t, d), r.a.on(document, "click", t, (e = d, function(t) {
                        32 !== t.keyCode && 13 !== t.keyCode || e(t)
                    })), Promise.resolve()
                }
        },
        406: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var a = n(156),
                i = n(24),
                o = n(186),
                r = n(54),
                s = n(64),
                c = function(e) {
                    return !e.includes(!1)
                },
                d = {
                    isOutbrainDisabled: function() {
                        return i.a.outbrain ? Promise.resolve(!1) : Promise.resolve(!0)
                    },
                    isUserInContributionsAbTest: function() {
                        return Object(s.b)().then(Boolean)
                    },
                    isUserNotInContributionsAbTest: function() {
                        return Object(r.c)("isUserInContributionsAbTest").then(function(e) {
                            return !e
                        })
                    },
                    hasHighPriorityAdLoaded: function() {
                        return i.a.thirdPartyTags && i.a.highMerch && !i.a.adFree ? Promise.resolve(Object(a.a)("dfp-ad--merchandising-high")) : Promise.resolve(!1)
                    },
                    hasLowPriorityAdLoaded: function() {
                        return i.a.thirdPartyTags && !i.a.adFree ? Object(r.c)("hasHighPriorityAdLoaded").then(function(e) {
                            return e ? Promise.resolve(Object(a.a)("dfp-ad--merchandising")) : Promise.resolve(!0)
                        }) : Promise.resolve(!1)
                    },
                    hasLowPriorityAdNotLoaded: function() {
                        return Object(r.c)("hasLowPriorityAdLoaded").then(function(e) {
                            return !e
                        })
                    },
                    isStoryQuestionsOnPage: function() {
                        return Promise.resolve(document.querySelectorAll(".js-ask-question-link").length > 0)
                    },
                    isOutbrainBlockedByAds: function() {
                        var e = [Object(r.c)("hasHighPriorityAdLoaded"), Object(r.c)("hasLowPriorityAdLoaded")];
                        return Promise.all(e).then(function(e) {
                            return c(e)
                        })
                    },
                    isOutbrainMerchandiseCompliant: function() {
                        var e = [Object(r.c)("hasHighPriorityAdLoaded"), Object(r.c)("hasLowPriorityAdNotLoaded")];
                        return Promise.all(e).then(function(e) {
                            return c(e)
                        })
                    },
                    isOutbrainMerchandiseCompliantOrBlockedByAds: function() {
                        var e = [Object(r.c)("isOutbrainMerchandiseCompliant"), Object(r.c)("isOutbrainBlockedByAds")];
                        return Promise.all(e).then(function(e) {
                            return function(e) {
                                return e.includes(!0)
                            }(e)
                        })
                    }
                },
                u = function() {
                    Object.keys(d).forEach(function(e) {
                        o.a.includes(e) && Object(r.b)(e, d[e]())
                    })
                }
        },
        407: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return h
            });
            var a = n(8),
                i = n(0),
                o = n(6),
                r = n(3),
                s = n(120),
                c = n(17),
                d = n(26),
                u = n(24),
                l = n(96),
                f = n(66),
                m = n(88),
                p = function(e, t, n) {
                    var a = function(e) {
                        var t = e ? {
                                desktop: [c.a.halfPage, c.a.skyscraper]
                            } : {},
                            n = Object(l.a)("comments", {
                                sizes: t
                            });
                        return n.forEach(function(e) {
                            e.classList.add("js-sticky-mpu")
                        }), n
                    }(n);
                    return r.a.write(function() {
                        return e.addClass("discussion__ad-wrapper"), i.a.get("page.isLiveBlog") || i.a.get("page.isMinuteArticle") || e.addClass("discussion__ad-wrapper-wider"), a.forEach(function(e) {
                            t.append(e)
                        }), a[0]
                    }).then(function(e) {
                        Object(s.a)(e, !1), Promise.resolve(o.a.emit("page:commercial:comments"))
                    })
                },
                g = function(e, t) {
                    var n = Object(a.a)(".js-ad-slot", t),
                        i = Object(f.a)("dfp-ad--comments");
                    i && n.length && Object(m.b)(function(e, t) {
                        return function(e) {
                            return e.sizes.desktop.some(function(e) {
                                return 300 === e[0] && 600 === e[1]
                            } || function(e) {
                                return 160 === e[0] && 600 === e[1]
                            })
                        }(e) || (e.sizes.desktop.push([300, 600], [160, 600]), e.slot.defineSizeMapping([
                            [
                                [0, 0], e.sizes.desktop
                            ]
                        ]), r.a.write(function() {
                            t[0].setAttribute("data-desktop", "1,1|2,2|300,250|300,274|fluid|300,600|160,600")
                        })), e
                    }(i, n)), i || p(e, t, !0)
                },
                h = function() {
                    var e = Object(a.a)(".js-discussion__ad-slot");
                    return u.a.commentAdverts && e.length ? (o.a.once("modules:comments:renderComments:rendered", function() {
                        var t = Object(d.l)(),
                            n = Object(a.a)(".js-comments .content__main-column");
                        r.a.read(function() {
                            return n.dim().height
                        }).then(function(a) {
                            a >= 800 || t && a >= 600 ? p(n, e, !0) : t && p(n, e, !1), o.a.on("discussion:comments:get-more-replies", function() {
                                g(n, e)
                            })
                        })
                    }), Promise.resolve(!0)) : Promise.resolve(!1)
                }
        },
        408: function(e, t, n) {
            "use strict";
            var a, i, o = n(22),
                r = n.n(o),
                s = n(0),
                c = n(3),
                d = n(85),
                u = n(35),
                l = {
                    hash: function(e) {
                        var t = e;
                        t = decodeURIComponent(encodeURIComponent(t));
                        for (var n = [1518500249, 1859775393, 2400959708, 3395469782], a = (t += String.fromCharCode(128)).length / 4 + 2, i = Math.ceil(a / 16), o = new Array(i), r = 0; r < i; r++) {
                            o[r] = new Array(16);
                            for (var s = 0; s < 16; s++) o[r][s] = t.charCodeAt(64 * r + 4 * s) << 24 | t.charCodeAt(64 * r + 4 * s + 1) << 16 | t.charCodeAt(64 * r + 4 * s + 2) << 8 | t.charCodeAt(64 * r + 4 * s + 3)
                        }
                        o[i - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32), o[i - 1][14] = Math.floor(o[i - 1][14]), o[i - 1][15] = 8 * (t.length - 1) & 4294967295;
                        for (var c, d, u, f, m, p = 1732584193, g = 4023233417, h = 2562383102, b = 271733878, v = 3285377520, y = new Array(80), w = 0; w < i; w++) {
                            for (var k = 0; k < 16; k++) y[k] = o[w][k];
                            for (var _ = 16; _ < 80; _++) y[_] = l.ROTL(y[_ - 3] ^ y[_ - 8] ^ y[_ - 14] ^ y[_ - 16], 1);
                            c = p, d = g, u = h, f = b, m = v;
                            for (var j = 0; j < 80; j++) {
                                var O = Math.floor(j / 20),
                                    C = l.ROTL(c, 5) + l.f(O, d, u, f) + m + n[O] + y[j] & 4294967295;
                                m = f, f = u, u = l.ROTL(d, 30), d = c, c = C
                            }
                            p = p + c & 4294967295, g = g + d & 4294967295, h = h + u & 4294967295, b = b + f & 4294967295, v = v + m & 4294967295
                        }
                        return l.toHexStr(p) + l.toHexStr(g) + l.toHexStr(h) + l.toHexStr(b) + l.toHexStr(v)
                    },
                    f: function(e, t, n, a) {
                        switch (e) {
                            case 0:
                                return t & n ^ ~t & a;
                            case 1:
                                return t ^ n ^ a;
                            case 2:
                                return t & n ^ t & a ^ n & a;
                            case 3:
                                return t ^ n ^ a
                        }
                    },
                    ROTL: function(e, t) {
                        return e << t | e >>> 32 - t
                    },
                    toHexStr: function(e) {
                        for (var t = "", n = 7; n >= 0; n--) t += (e >>> 4 * n & 15).toString(16);
                        return t
                    }
                },
                f = l,
                m = n(4),
                p = n(34),
                g = n(105),
                h = n(24),
                b = n(259),
                v = n(19),
                y = n(68),
                w = n(257),
                k = n(88),
                _ = n(185),
                j = ["dfp-ad--merchandising-high", "dfp-ad--im"],
                O = n(7),
                C = n(6),
                P = n(12),
                B = n.n(P),
                x = n(260),
                A = n(258),
                L = function() {
                    var e = [Object(x.b)(), Object(A.a)()];
                    return Promise.all(e).then(function() {
                        if (h.a.adFree) return Promise.resolve();
                        var e = r()(v.a.adSlotSelector).filter(function(e) {
                                return !(e.id in v.a.advertIds)
                            }).map(function(e) {
                                return new y.a(e)
                            }),
                            t = v.a.adverts.length;
                        v.a.adverts = v.a.adverts.concat(e), e.forEach(function(e, n) {
                            v.a.advertIds[e.id] = t + n
                        }), e.forEach(w.a), v.a.shouldLazyLoad() ? function() {
                            var e;
                            window.googletag.pubads().collapseEmptyDivs(), window.googletag.enableServices(), e = v.a.advertsToLoad.filter(function(e) {
                                return j.includes(e.id)
                            }), v.a.advertsToLoad = v.a.advertsToLoad.filter(function(e) {
                                return !j.includes(e.id)
                            }), e.forEach(k.a), v.a.advertsToLoad.forEach(function(e) {
                                Object(_.a)(e)
                            })
                        }() : (window.googletag.pubads().enableSingleRequest(), window.googletag.pubads().collapseEmptyDivs(), window.googletag.enableServices(), Object(k.a)(v.a.advertsToLoad[0]), v.a.advertsToLoad.length = 0, function() {
                            var e = document.body,
                                t = s.a.get("page.hasPageSkin"),
                                n = function() {
                                    t && Object(O.h)(!0) && !h.a.adFree && e && B.a.write(function() {
                                        e.classList.toggle("has-active-pageskin", Object(O.m)({
                                            min: "wide"
                                        }))
                                    })
                                };
                            n(), C.a.on("window:throttledResize", n)
                        }())
                    })
                },
                I = n(26),
                S = n(66),
                E = n(261),
                M = "".concat(window.location.protocol, "//").concat(window.location.host),
                T = function(e) {
                    var t = Object(S.a)(e.slot.getSlotElementId());
                    if (t) {
                        var n = t.node.getElementsByTagName("iframe")[0];
                        Object(E.a)({
                            id: n.id,
                            host: M
                        }, n.contentWindow)
                    }
                },
                R = n(33),
                D = n.n(R),
                F = n(14),
                z = (n(82), n(17)),
                G = n(239),
                V = n(157),
                N = !(!document.documentElement || !document.documentElement.classList.contains("has-no-sticky")),
                H = function e(t, n, o) {
                    i.contains(o) && (Object(V.c)("resize", e), a.updatePosition())
                },
                U = function(e) {
                    var t = e.dataset.name;
                    return "comments" === t || "right" === t
                },
                q = function(e) {
                    U(e) && (i = e);
                    var t = document.querySelector(".js-comments");
                    t && e && c.a.read(function() {
                        return t.offsetHeight - 600
                    }).then(function(t) {
                        return c.a.write(function() {
                            e.parentNode.style.height = "".concat(t, "px")
                        })
                    }).then(function() {
                        N && ((a = new G.a(e)).init(), Object(V.b)("resize", H)), C.a.emit("page:commercial:sticky-comments-mpu")
                    })
                };
            q.whenRendered = new Promise(function(e) {
                C.a.on("page:commercial:sticky-comments-mpu", e)
            });
            var $ = function(e) {
                U(e) && (i = e);
                var t = document.querySelector(".js-article__body,.js-liveblog-body-content");
                t && e && !s.a.get("page.hasShowcaseMainElement") && c.a.read(function() {
                    return t.offsetTop + 300
                }).then(function(t) {
                    return c.a.write(function() {
                        e.parentNode.style.height = "".concat(t, "px")
                    })
                }).then(function() {
                    if (N) {
                        var t = s.a.get("page.isPaidContent") ? {
                            top: 43
                        } : {};
                        (a = new G.a(e, t)).init(), Object(V.b)("resize", H)
                    }
                    C.a.emit("page:commercial:sticky-mpu")
                })
            };
            $.whenRendered = new Promise(function(e) {
                C.a.on("page:commercial:sticky-mpu", e)
            });
            var W, Q, J, Y = n(16),
                K = n.n(Y),
                X = n(21),
                Z = n.n(X),
                ee = n(1),
                te = n.n(ee),
                ne = n(59),
                ae = n.n(ne),
                ie = n(359),
                oe = n(196),
                re = function(e) {
                    (new Image).src = e
                },
                se = function(e, t, n) {
                    var a = document.createRange();
                    a.setStart(e, 0), a.setEnd(e, 0), e.appendChild(a.createContextualFragment(n.replace("INSERT_UNIQUE_ID", t)))
                },
                ce = n(389),
                de = n.n(ce),
                ue = n(390),
                le = n.n(ue),
                fe = n(241),
                me = n.n(fe),
                pe = n(240),
                ge = n.n(pe),
                he = function() {
                    function e(t, n) {
                        K()(this, e), te()(this, "adSlot", void 0), te()(this, "params", void 0), this.adSlot = t, this.params = n
                    }
                    return Z()(e, [{
                        key: "create",
                        value: function() {
                            var e = this;
                            this.params.externalLinkIcon = Object(oe.a)(me.a.markup, ["frame__external-link-icon"]), this.params.target = "yes" === this.params.newWindow ? "_blank" : "_self", this.params.id = "frame-".concat(Math.floor(1e4 * Math.random()).toString(16));
                            var t = ae()(de.a)({
                                    data: this.params
                                }),
                                n = ae()(le.a)({
                                    data: {
                                        buttonTitle: "Ad",
                                        infoTitle: "Advertising on the Guardian",
                                        infoText: "is created and paid for by third parties.",
                                        infoLinkText: "Learn more about how advertising supports the Guardian.",
                                        infoLinkUrl: "https://www.theguardian.com/advertising-on-the-guardian",
                                        icon: Object(oe.a)(ge.a.markup, ["gu-comlabel__icon"]),
                                        dataAttr: this.adSlot.id
                                    }
                                });
                            return c.a.write(function() {
                                return e.adSlot.insertAdjacentHTML("beforeend", t), e.adSlot.lastElementChild && e.adSlot.lastElementChild.insertAdjacentHTML("afterbegin", n), e.adSlot.classList.add("ad-slot--frame"), e.params.trackingPixel && re(e.params.trackingPixel + e.params.cacheBuster), e.params.researchPixel && re(e.params.researchPixel + e.params.cacheBuster), e.params.viewabilityTracker && se(e.adSlot, e.params.id, e.params.viewabilityTracker), new ie.a(e.adSlot).init(), !0
                            })
                        }
                    }]), e
                }(),
                be = n(56),
                ve = n.n(be),
                ye = n(391),
                we = n.n(ye),
                ke = n(392),
                _e = n.n(ke),
                je = n(393),
                Oe = n.n(je),
                Ce = !Object(O.l)(),
                Pe = "object" === ve()(O.f) && "MSIE" === O.f.browser && parseInt(O.f.version, 10) <= 10,
                Be = function() {
                    function e(t, n) {
                        K()(this, e), te()(this, "adSlot", void 0), te()(this, "params", void 0), te()(this, "scrollingBg", void 0), te()(this, "layer2", void 0), te()(this, "scrollType", void 0), this.adSlot = t, this.params = n
                    }
                    return Z()(e, [{
                        key: "create",
                        value: function() {
                            var e = this;
                            W || (W = ae()(we.a), Q = ae()(_e.a), J = ae()(Oe.a));
                            var t = {
                                    position: "left" === this.params.videoPositionH || "right" === this.params.videoPositionH ? "".concat(this.params.videoPositionH, ":").concat(this.params.videoHorizSpace, "px;") : ""
                                },
                                n = {
                                    id: "fabric-".concat(Math.trunc(1e4 * Math.random()).toString(16)),
                                    showLabel: "hide" !== this.params.showAdLabel,
                                    video: this.params.videoURL ? Q(Object.assign({}, this.params, t)) : "",
                                    hasContainer: "layerTwoAnimation" in this.params,
                                    layerTwoBGPosition: !this.params.layerTwoBGPosition || this.params.layerTwoAnimation && "disabled" !== this.params.layerTwoAnimation && (Object(O.n)() || "enabled" !== this.params.layerTwoAnimation) ? "0% 0%" : this.params.layerTwoBGPosition,
                                    scrollbg: !(!this.params.backgroundImagePType || "none" === this.params.backgroundImagePType) && J(this.params)
                                };
                            return n.scrollbg && (c.a.read(this.updateBgPosition, this), C.a.on("window:throttledScroll", this.updateBgPosition.bind(this)), C.a.on("window:throttledResize", this.updateBgPosition.bind(this))), this.params.trackingPixel && re(this.params.trackingPixel + this.params.cacheBuster), this.params.researchPixel && re(this.params.researchPixel + this.params.cacheBuster), c.a.write(function() {
                                return e.adSlot.insertAdjacentHTML("beforeend", W({
                                    data: Object.assign({}, e.params, n)
                                })), e.scrollingBg = e.adSlot.querySelector(".ad-scrolling-bg"), e.layer2 = e.adSlot.querySelector(".hide-until-tablet .fabric-v1_layer2"), e.scrollType = e.params.backgroundImagePType, "enabled" === e.params.layerTwoAnimation && e.layer2 && Object(O.n)() && !Pe && (e.layer2.style.backgroundPosition = ""), "fixed" === e.scrollType && e.scrollingBg && Ce && (e.scrollingBg.style.backgroundAttachment = "fixed"), e.adSlot.classList.add("ad-slot--fabric-v1"), e.adSlot.classList.add("ad-slot--fabric"), e.adSlot.classList.add("content__mobile-full-width"), e.adSlot.parentNode && e.adSlot.parentNode instanceof HTMLElement && e.adSlot.parentNode.classList.contains("top-banner-ad-container") && e.adSlot.parentNode.classList.add("top-banner-ad-container--fabric"), e.params.viewabilityTracker && se(e.adSlot, e.params.id, e.params.viewabilityTracker), !0
                            })
                        }
                    }, {
                        key: "updateBgPosition",
                        value: function() {
                            var e = this;
                            if ("parallax" === this.scrollType) {
                                var t = Math.ceil(.3 * this.adSlot.getBoundingClientRect().top) + 20;
                                c.a.write(function() {
                                    e.scrollingBg && (e.scrollingBg.style.backgroundPosition = "50% ".concat(t, "%"), e.scrollingBg.classList.add("ad-scrolling-bg-parallax"))
                                })
                            } else if ("fixed" === this.scrollType && !Ce) {
                                var n = this.adSlot.getBoundingClientRect(),
                                    a = (window.innerHeight - n.bottom + n.height / 2) / window.innerHeight * 100;
                                c.a.write(function() {
                                    e.scrollingBg && (e.scrollingBg.style.backgroundPosition = "50% ".concat(a, "%"))
                                })
                            }
                            this.layer2Animation()
                        }
                    }, {
                        key: "layer2Animation",
                        value: function() {
                            var e, t = this;
                            "enabled" === this.params.layerTwoAnimation && Object(O.n)() && !Pe && (e = Object(O.g)().height > this.adSlot.getBoundingClientRect().top, c.a.write(function() {
                                t.layer2 && t.layer2.classList.add("ad-scrolling-text-hide".concat(t.params.layerTwoAnimationPosition ? "-".concat(t.params.layerTwoAnimationPosition) : "")), t.layer2 && e && t.layer2.classList.add("ad-scrolling-text-animate".concat(t.params.layerTwoAnimationPosition ? "-".concat(t.params.layerTwoAnimationPosition) : ""))
                            }))
                        }
                    }]), e
                }(),
                xe = n(23),
                Ae = n.n(xe),
                Le = n(8),
                Ie = n(394),
                Se = n.n(Ie),
                Ee = n(395),
                Me = n.n(Ee),
                Te = n(178),
                Re = n.n(Te),
                De = n(57),
                Fe = n.n(De),
                ze = n(396),
                Ge = n.n(ze),
                Ve = function() {
                    function e(t, n) {
                        K()(this, e), te()(this, "adSlot", void 0), te()(this, "params", void 0), te()(this, "isClosed", void 0), te()(this, "initialExpandCounter", void 0), te()(this, "closedHeight", void 0), te()(this, "openedHeight", void 0), te()(this, "$button", void 0), te()(this, "$ad", void 0), this.adSlot = t, this.params = n, this.isClosed = !0, this.initialExpandCounter = !1, this.closedHeight = 250, this.openedHeight = 500, Ge()(this, "updateBgPosition", "listener")
                    }
                    return Z()(e, [{
                        key: "updateBgPosition",
                        value: function() {
                            var e, t = this,
                                n = Object(O.g)().height,
                                a = this.adSlot.getBoundingClientRect().top,
                                i = this.isClosed ? this.closedHeight : this.openedHeight,
                                o = "true" == (n > a && .5 * n < a ? "true" : "false") ? 50 - -.2 * (.5 * n - a) : 50,
                                r = "true" == (2 * -i < a + 20 && .4 * n - i > a ? "true" : "false") ? .2 * (.4 * n - a - i) : 0;
                            switch (this.params.backgroundImagePType) {
                                case "split":
                                    e = o + r, c.a.write(function() {
                                        Object(Le.a)(".ad-exp--expand-scrolling-bg", t.adSlot).css({
                                            "background-repeat": "no-repeat",
                                            "background-position": "50%".concat(e, "%")
                                        })
                                    });
                                    break;
                                case "fixed":
                                    e = -a, c.a.write(function() {
                                        Object(Le.a)(".ad-exp--expand-scrolling-bg", t.adSlot).css("background-position", "50%".concat(e, "px"))
                                    });
                                    break;
                                case "fixed matching fluid250":
                                    c.a.write(function() {
                                        Object(Le.a)(".ad-exp--expand-scrolling-bg", t.adSlot).addClass("ad-exp--expand-scrolling-bg-fixed")
                                    });
                                    break;
                                case "parallax":
                                    e = Math.ceil(.3 * a) + 20, c.a.write(function() {
                                        Object(Le.a)(".ad-exp--expand-scrolling-bg", t.adSlot).addClass("ad-exp--expand-scrolling-bg-parallax"), Object(Le.a)(".ad-exp--expand-scrolling-bg", t.adSlot).css("background-position", "50%".concat(e, "%"))
                                    })
                            }
                        }
                    }, {
                        key: "listener",
                        value: function() {
                            var e = this;
                            if (!this.initialExpandCounter && Object(O.g)().height > this.adSlot.getBoundingClientRect().top + this.openedHeight) {
                                var t = Object(Le.a)(".ad-slot__content", this.adSlot).attr("id").split("/");
                                return m.a.get("gu.commercial.expandable.".concat(t[1])) ? this.isClosed && c.a.write(function() {
                                    Object(Le.a)(".ad-exp__open-chevron").addClass("chevron-up")
                                }) : c.a.write(function() {
                                    m.a.set("gu.commercial.expandable.".concat(t[1]), !0, {
                                        expires: Date.now() + 6048e5
                                    }), e.$button.addClass("button-spin"), Object(Le.a)(".ad-exp__open-chevron").removeClass("chevron-up").addClass("chevron-down"), e.$ad.css("height", e.openedHeight), e.isClosed = !1, e.initialExpandCounter = !0
                                }), !0
                            }
                        }
                    }, {
                        key: "buildVideo",
                        value: function(e) {
                            var t = Object(O.m)({
                                    max: "phablet"
                                }) ? 125 : 250,
                                n = t * (16 / 9),
                                a = "center" === this.params.videoPositionH ? "margin-left: ".concat(n / -2, "px") : "",
                                i = "left" === this.params.videoPositionH ? "left: ".concat(this.params.videoHorizSpace, "px") : "",
                                o = "right" === this.params.videoPositionH ? "right: ".concat(this.params.videoHorizSpace, "px") : "",
                                r = {
                                    width: n,
                                    height: t,
                                    src: "".concat(this.params.videoURL, "?rel=0&amp;controls=0&amp;showinfo=0&amp;title=0&amp;byline=0&amp;portrait=0"),
                                    className: ["expandable_video", "expandable_video--horiz-pos-".concat(this.params.videoPositionH), e].join(" "),
                                    inlineStyle: [a, i, o].join("; ")
                                };
                            return ae()(Me.a)(r)
                        }
                    }, {
                        key: "stopVideo",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = Object(O.m)({
                                    min: "tablet"
                                }) ? ".js-fabric-video--desktop" : ".js-fabric-video--mobile",
                                n = Object(Le.a)(t, this.adSlot),
                                a = n.attr("src");
                            window.setTimeout(function() {
                                n.attr("src", "".concat(a, "&amp;autoplay=0"))
                            }, e)
                        }
                    }, {
                        key: "create",
                        value: function() {
                            var t = this,
                                n = "" !== this.params.videoURL,
                                a = {
                                    videoDesktop: n ? this.buildVideo("js-fabric-video--desktop") : ""
                                },
                                i = {
                                    videoMobile: n ? this.buildVideo("js-fabric-video--mobile") : ""
                                },
                                o = {
                                    showArrow: "arrow-only" === this.params.showMoreType || "plus-and-arrow" === this.params.showMoreType ? '<button class="ad-exp__open-chevron ad-exp__open">'.concat(Re.a.markup, "</button>") : ""
                                },
                                r = {
                                    showPlus: "plus-only" === this.params.showMoreType || "plus-and-arrow" === this.params.showMoreType ? '<button class="ad-exp__close-button ad-exp__open">'.concat(Fe.a.markup, "</button>") : ""
                                },
                                s = {
                                    scrollbg: "none" !== this.params.backgroundImagePType ? '<div class="ad-exp--expand-scrolling-bg" style="background-image: url('.concat(this.params.backgroundImageP, "); background-position: ").concat(this.params.backgroundImagePPosition, " ").concat("0%", "; background-repeat: ").concat(this.params.backgroundImagePRepeat, ';"></div>') : ""
                                };
                            this.params.id = "fabric-expanding-".concat(Math.floor(1e4 * Math.random()).toString(16));
                            var d = Le.a.create(ae()(Se.a)({
                                data: Object.assign(this.params, o, r, a, i, s)
                            }));
                            return C.a.on("window:throttledScroll", this.listener), Ae.a.on(this.adSlot, "click", ".ad-exp__open", function() {
                                !t.isClosed && n && t.stopVideo(1e3), c.a.write(function() {
                                    Object(Le.a)(".ad-exp__close-button").toggleClass("button-spin"), Object(Le.a)(".ad-exp__open-chevron").removeClass("chevron-up").toggleClass("chevron-down"), t.$ad.css("height", t.isClosed ? t.openedHeight : t.closedHeight), t.isClosed = !t.isClosed, t.initialExpandCounter = !0
                                })
                            }), e.hasScrollEnabled && (this.updateBgPosition(), C.a.on("window:throttledScroll", this.updateBgPosition), C.a.on("window:throttledResize", this.updateBgPosition)), c.a.write(function() {
                                return this.$ad = Object(Le.a)(".ad-exp--expand", d).css("height", this.closedHeight), this.$button = Object(Le.a)(".ad-exp__open", d), Object(Le.a)(".ad-exp-collapse__slide", d).css("height", this.closedHeight), this.params.trackingPixel && re(this.params.trackingPixel + this.params.cacheBuster), this.params.researchPixel && re(this.params.researchPixel + this.params.cacheBuster), d.appendTo(this.adSlot), this.params.viewabilityTracker && se(this.adSlot, this.params.id, this.params.viewabilityTracker), this.adSlot.classList.add("ad-slot--fabric"), this.adSlot.parentNode.classList.contains("top-banner-ad-container") && this.adSlot.parentNode.classList.add("top-banner-ad-container--fabric"), !0
                            }, this)
                        }
                    }]), e
                }();
            te()(Ve, "hasScrollEnabled", void 0), Ve.hasScrollEnabled = !Object(O.o)() && !Object(O.l)();
            var Ne = n(397),
                He = n.n(Ne),
                Ue = n(398),
                qe = n.n(Ue),
                $e = n(83),
                We = n(399),
                Qe = n.n(We),
                Je = n(400),
                Ye = n.n(Je),
                Ke = function() {
                    function e(t, n) {
                        K()(this, e), te()(this, "isUpdating", void 0), te()(this, "adSlot", void 0), te()(this, "params", void 0), te()(this, "layer2", void 0), te()(this, "video", void 0), te()(this, "hasVideo", void 0), te()(this, "inView", void 0);
                        var a = Object(O.m)({
                            max: "phablet"
                        });
                        this.isUpdating = !1, this.hasVideo = !(Object(O.o)() || Object(O.l)() || a), this.inView = !1, this.adSlot = t, this.params = n, this.params.id = "fabric-video-".concat(Math.floor(1e4 * Math.random()).toString(16)), a ? this.params.posterMobile = '<div class="creative__poster" style="background-image:url('.concat(this.params.Videobackupimage, ')"></div>') : (this.hasVideo && (this.params.video = '<video muted class="creative__video creative__video--'.concat(this.params.Videoalignment, '"><source src="').concat(this.params.VideoURL, '" type="video/mp4"></video>')), this.params.posterTablet = '<div class="creative__poster" style="background-image:url('.concat(this.params.BackgroundImagemobile, ')"></div>'))
                    }
                    return Z()(e, [{
                        key: "onVideoEnded",
                        value: function() {
                            this.video && (this.video.onended = null, this.video = null)
                        }
                    }, {
                        key: "onScroll",
                        value: function() {
                            var e = Object(O.g)().height,
                                t = this.adSlot.getBoundingClientRect();
                            this.inView = t.top >= 0 && t.bottom < e, this.isUpdating || (this.isUpdating = !0, c.a.write(this.updateView, this))
                        }
                    }, {
                        key: "updateView",
                        value: function() {
                            this.isUpdating = !1, this.video && this.updateVideo(), this.updateAnimation()
                        }
                    }, {
                        key: "updateVideo",
                        value: function() {
                            this.video && (this.inView ? this.video.play() : this.video.pause())
                        }
                    }, {
                        key: "updateAnimation",
                        value: function() {
                            this.inView ? this.playAnimation() : this.pauseAnimation()
                        }
                    }, {
                        key: "playAnimation",
                        value: function() {
                            this.layer2 && this.layer2.forEach(function(e) {
                                e.classList.add("is-animating")
                            })
                        }
                    }, {
                        key: "pauseAnimation",
                        value: function() {
                            this.layer2 && this.layer2.forEach(function(e) {
                                e.classList.remove("is-animating")
                            })
                        }
                    }, {
                        key: "create",
                        value: function() {
                            var e = this,
                                t = ae()(Qe.a);
                            return c.a.write(function() {
                                e.params.Trackingpixel && re(e.params.Trackingpixel + e.params.cacheBuster), e.params.Researchpixel && re(e.params.Researchpixel + e.params.cacheBuster), e.adSlot.insertAdjacentHTML("beforeend", t({
                                    data: e.params
                                })), e.params.viewabilityTracker && se(e.adSlot, e.params.id, e.params.viewabilityTracker), e.adSlot && e.adSlot.classList.add("ad-slot--fabric"), e.adSlot.parentNode && e.adSlot.parentNode instanceof Element && e.adSlot.parentNode.classList.contains("top-banner-ad-container") && e.adSlot.parentNode.classList.add("top-banner-ad-container--fabric"), Ye()(e.adSlot.querySelector("video"))
                            }).then(function() {
                                e.layer2 = r()(".creative__layer2", e.adSlot);
                                var t = e.onScroll.bind(e);
                                return Object($e.a)(window, "scroll", t, {
                                    passive: !0
                                }), Object($e.a)(e.adSlot, "animationend", function() {
                                    window.removeEventListener("scroll", t)
                                }), e.hasVideo && (e.video = e.adSlot.getElementsByTagName("video")[0], e.video.onended = e.onVideoEnded), c.a.read(e.onScroll, e), !0
                            })
                        }
                    }]), e
                }(),
                Xe = !Object(O.l)(),
                Ze = {
                    frame: he,
                    "fabric-v1": Be,
                    "fabric-expanding-v1": Ve,
                    "fabric-expandable-video-v2": function(e, t) {
                        var n = !0,
                            a = ae()(qe.a);
                        return Object.freeze({
                            create: function() {
                                var i = t.showCrossInContainer.substring(3),
                                    o = {
                                        id: "fabric-expandable-".concat(Math.round(1e4 * Math.random()).toString(16)),
                                        desktopCTA: t.ctaDesktopImage ? a({
                                            media: "hide-until-tablet",
                                            link: t.link,
                                            image: t.ctaDesktopImage,
                                            position: t.ctaDesktopPosition
                                        }) : "",
                                        mobileCTA: t.ctaMobileImage ? a({
                                            media: "mobile-only",
                                            link: t.link,
                                            image: t.ctaMobileImage,
                                            position: t.ctaMobilePosition
                                        }) : "",
                                        showArrow: "arrow-only" === t.showMoreType || "plus-and-arrow" === t.showMoreType ? '<button class="ad-exp__open-chevron ad-exp__open">'.concat(Re.a.markup, "</button>") : "",
                                        showPlus: "plus-only" === t.showMoreType || "plus-and-arrow" === t.showMoreType ? '<button class="ad-exp__close-button ad-exp__open ad-exp__open--'.concat(i, '">').concat(Fe.a.markup, "</button>") : "",
                                        videoEmbed: "" !== t.YoutubeVideoURL ? '<iframe id="YTPlayer" width="100%" height="'.concat(500, '" src="').concat(t.YoutubeVideoURL, '?showinfo=0&amp;rel=0&amp;controls=0&amp;fs=0&amp;title=0&amp;byline=0&amp;portrait=0" frameborder="0" class="expandable-video"></iframe>') : ""
                                    },
                                    r = Le.a.create(ae()(He.a)({
                                        data: Object.assign(t, o)
                                    })),
                                    s = Object(Le.a)(".ad-exp--expand", r),
                                    d = function(t) {
                                        var a = Object(Le.a)("#YTPlayer").attr("src"),
                                            i = a;
                                        i = -1 === a.indexOf("autoplay") ? "".concat(a, "&amp;autoplay=1") : i.replace(t ? "autoplay=0" : "autoplay=1", t ? "autoplay=1" : "autoplay=0"), t ? (Object(Le.a)(".ad-exp__close-button", e).addClass("button-spin"), Object(Le.a)(".ad-exp__open-chevron", e).addClass("chevron-down"), s.css("height", 500), r.addClass("creative--open"), Object(Le.a)(".slide-video, .slide-video .ad-exp__layer", e).css("height", 500).addClass("slide-video__expand")) : (Object(Le.a)(".ad-exp__close-button", e).removeClass("button-spin"), Object(Le.a)(".ad-exp__open-chevron", e).removeClass("chevron-down"), s.css("height", 250), r.removeClass("creative--open"), Object(Le.a)(".slide-video, .slide-video .ad-exp__layer", e).css("height", 250).removeClass("slide-video__expand")), n = !t, setTimeout(function() {
                                            Object(Le.a)("#YTPlayer").attr("src", i)
                                        }, 1e3)
                                    };
                                return Ae.a.on(e, "click", ".ad-exp__open", function() {
                                    c.a.write(function() {
                                        d(n)
                                    })
                                }), Ae.a.on(e, "click", ".video-container__cta, .creative__cta", function() {
                                    c.a.write(function() {
                                        d(!1)
                                    })
                                }), c.a.write(function() {
                                    return s.css("height", 250), Object(Le.a)(".ad-exp-collapse__slide", r).css("height", 250), t.trackingPixel && re(t.trackingPixel + t.cacheBuster), t.researchPixel && re(t.researchPixel + t.cacheBuster), r.appendTo(e), t.viewabilityTracker && se(e, t.id, t.viewabilityTracker), e.classList.add("ad-slot--fabric"), e.parentNode && e.parentNode.classList.contains("top-banner-ad-container") && e.parentNode.classList.add("top-banner-ad-container--fabric"), !0
                                })
                            }
                        })
                    },
                    "fabric-video": Ke,
                    "scrollable-mpu-v2": function() {
                        function e(t, n) {
                            K()(this, e), te()(this, "adSlot", void 0), te()(this, "params", void 0), te()(this, "$scrollableImage", void 0), te()(this, "$scrollableMpu", void 0), this.adSlot = t, this.params = n, this.$scrollableImage = null, this.$scrollableMpu = null
                        }
                        return Z()(e, [{
                            key: "updateBgFluid250",
                            value: function() {
                                var e = this;
                                B.a.write(function() {
                                    e.$scrollableImage && e.$scrollableImage.addClass("creative--scrollable-mpu-image-fixed")
                                })
                            }
                        }, {
                            key: "updateBgParallax",
                            value: function() {
                                var e = this,
                                    t = Math.ceil(.3 * this.adSlot.getBoundingClientRect().top) + 20;
                                B.a.write(function() {
                                    e.$scrollableImage && e.$scrollableImage.addClass("creative--scrollable-mpu-image-parallax").css("background-position", "50% ".concat(t, "%"))
                                })
                            }
                        }, {
                            key: "updateBg",
                            value: function() {
                                var e = this;
                                if (this.$scrollableMpu) {
                                    var t = -this.$scrollableMpu[0].getBoundingClientRect().top;
                                    B.a.write(function() {
                                        e.$scrollableImage && e.$scrollableImage.css("background-position", "100% ".concat(t, "px"))
                                    })
                                }
                            }
                        }, {
                            key: "create",
                            value: function() {
                                var e, t, n = this,
                                    a = {
                                        id: "scrollable-mpu-".concat(Math.floor(1e4 * Math.random()).toString(16)),
                                        clickMacro: this.params.clickMacro,
                                        destination: this.params.destination,
                                        layer1Image: Xe ? this.params.layer1Image : this.params.mobileImage,
                                        backgroundImage: Xe && this.params.backgroundImage ? '<div class="creative--scrollable-mpu-image" style="background-image: url('.concat(this.params.backgroundImage, ');"></div>') : ""
                                    };
                                return this.$scrollableMpu = Le.a.create((e = a, '\n<a id="'.concat(e.id, '" class="creative--scrollable-mpu"\n    href="').concat(e.clickMacro).concat(e.destination, '"\n    target="_new">\n    <div class="creative--scrollable-mpu-inner">\n        ').concat(e.backgroundImage, '\n        <div class="creative--scrollable-mpu-static-image" style="background-image: url(\'').concat(e.layer1Image, "');\"></div>\n    </div>\n</a>\n"))).appendTo(this.adSlot), this.params.trackingPixel && re(this.params.trackingPixel + this.params.cacheBuster), this.params.researchPixel && re(this.params.researchPixel + this.params.cacheBuster), this.params.viewabilityTracker && se(this.adSlot, this.params.id, this.params.viewabilityTracker), Xe && (t = "fixed matching fluid250" === this.params.backgroundImagePType ? function() {
                                    return n.updateBgFluid250()
                                } : "parallax" === this.params.backgroundImagePType ? function() {
                                    return n.updateBgParallax()
                                } : function() {
                                    return n.updateBg()
                                }, this.$scrollableImage = Object(Le.a)(".creative--scrollable-mpu-image", this.adSlot), B.a.read(t), C.a.on("window:throttledScroll", t), C.a.on("window:throttledResize", t)), Promise.resolve(!0)
                            }
                        }]), e
                    }()
                },
                et = n(209),
                tt = n.n(et),
                nt = n(356),
                at = function(e) {
                    return function(t) {
                        return function(n, a) {
                            return t.some(function(e) {
                                return a.node.classList.contains(e)
                            }) ? c.a.write(function() {
                                e.forEach(function(e) {
                                    a.node.classList.add(e)
                                })
                            }) : Promise.resolve()
                        }
                    }
                },
                it = at(["ad-slot--fluid250"]),
                ot = at(["ad-slot--fluid"]),
                rt = {};
            rt[z.a.fluid] = function(e, t) {
                return ot(["ad-slot"])(e, t).then(function() {
                    return e = t.node.querySelector("iframe"), void c.a.write(function() {
                        e && e.style.removeProperty("vertical-align")
                    });
                    var e
                })
            }, rt[z.a.mpu] = function(e, t) {
                return c.a.read(function() {
                    return t.node.classList.contains("js-sticky-mpu") && (t.node.classList.contains("ad-slot--right") && $(t.node), t.node.classList.contains("ad-slot--comments") && q(t.node)), c.a.write(function() {
                        return t.updateExtraSlotClasses()
                    })
                })
            }, rt[z.a.halfPage] = function(e, t) {
                return c.a.read(function() {
                    return t.node.classList.contains("ad-slot--right") && $(t.node), t.node.classList.contains("ad-slot--comments") && q(t.node), c.a.write(function() {
                        return t.updateExtraSlotClasses()
                    })
                })
            }, rt[z.a.skyscraper] = function(e, t) {
                return c.a.read(function() {
                    return t.node.classList.contains("ad-slot--right") && $(t.node), t.node.classList.contains("ad-slot--comments") && q(t.node), c.a.write(function() {
                        return t.updateExtraSlotClasses("ad-slot--sky")
                    })
                })
            }, rt[z.a.video] = function(e, t) {
                return c.a.write(function() {
                    t.updateExtraSlotClasses("u-h")
                })
            }, rt[z.a.outstreamDesktop] = function(e, t) {
                return c.a.write(function() {
                    t.updateExtraSlotClasses("ad-slot--outstream")
                })
            }, rt[z.a.outstreamMobile] = function(e, t) {
                return c.a.write(function() {
                    t.updateExtraSlotClasses("ad-slot--outstream")
                })
            }, rt[z.a.googleCard] = function(e, t) {
                return c.a.write(function() {
                    t.updateExtraSlotClasses("ad-slot--gc")
                })
            };
            var st = function(e, t) {
                if (!e.slot.getOutOfPage()) {
                    var n = t.node.parentNode;
                    return c.a.write(function() {
                        t.node.classList.add("u-h"), n.classList.contains("fc-slice__item--mpu-candidate") && n.classList.add("fc-slice__item--no-mpu")
                    })
                }
                return Promise.resolve()
            };
            rt[z.a.outOfPage] = st, rt[z.a.empty] = st, rt[z.a.portrait] = function() {
                return nt.a.whenRendered.then(function(e) {
                    return c.a.write(function() {
                        e && e.elem && (e.elem.remove(), e.elem = null)
                    })
                })
            }, rt[z.a.merchandising] = it(["ad-slot--commercial-component"]);
            var ct, dt, ut = function(e, t) {
                    var n, a;
                    return n = e.node, (a = r()("> div:not(.ad-slot__label)", n)).length && c.a.write(function() {
                            a[0].classList.add("ad-slot__content")
                        }),
                        function(e) {
                            return function(e) {
                                return new Promise(function(t, n) {
                                    var a = e.querySelector('iframe:not([id*="__hidden__"])');
                                    a ? a.readyState && "complete" !== a.readyState ? a.addEventListener("readystatechange", function e(n) {
                                        var i = n.srcElement;
                                        i && "complete" === i.readyState && (i.removeEventListener("readystatechange", e), t(a))
                                    }) : t(a) : n()
                                })
                            }(e).then(function(t) {
                                return function(e, t) {
                                    var n = function() {
                                        try {
                                            var e = t.contentDocument.body ? t.contentDocument.body.querySelector('.breakout__script[type="application/json"]') : null;
                                            return e ? e.innerHTML : null
                                        } catch (e) {
                                            return null
                                        }
                                    }();
                                    return n ? c.a.write(function() {
                                        t.style.display = "none"
                                    }).then(function() {
                                        return JSON.parse(n)
                                    }).then(function(e) {
                                        var n = t.contentDocument.getElementById("viewabilityTracker"),
                                            a = n ? n.childNodes[0].nodeValue.trim() : null;
                                        return a && e.params && (e.params.viewabilityTracker = a), e
                                    }).then(function(t) {
                                        return new Promise(function(n) {
                                            n(new(0, Ze[t.name])(e, t.params, t.opts).create())
                                        })
                                    }).catch(function(e) {
                                        return Object(F.a)(Error("Failed to get creative JSON ".concat(e)), {
                                            feature: "commercial"
                                        }, !1), Promise.resolve(!0)
                                    }) : Promise.resolve(!0)
                                }(e, t)
                            })
                        }(e.node).then(function(n) {
                            return function() {
                                if (e.size) {
                                    var n = e.size.toString();
                                    return "0,0" === n && (n = "fluid"), e.hasPrebidSize = !1, Promise.resolve(rt[n] ? rt[n](t, e) : c.a.write(function() {
                                        e.updateExtraSlotClasses()
                                    }))
                                }
                                return Promise.resolve(null)
                            }().then(function() {
                                return t = e.node, c.a.read(function() {
                                    if (!((e = t).classList.contains("ad-slot--fluid") || e.classList.contains("ad-slot--frame") || e.classList.contains("ad-slot--gc") || "false" === e.getAttribute("data-label") || e.getElementsByClassName("ad-slot__label").length)) return c.a.write(function() {
                                        t.prepend(function() {
                                            var e, t = document.createElement("div");
                                            return t.className = "ad-slot__label", t.innerHTML = "Advertisement", t.appendChild(((e = document.createElement("button")).className = "ad-slot__close-button", e.innerHTML = tt.a.markup, e.onclick = function() {
                                                var e = this.closest(".mobilesticky-container");
                                                e && e.remove()
                                            }, e)), t
                                        }())
                                    });
                                    var e
                                });
                                var t
                            }).then(function() {
                                return n ? c.a.write(function() {
                                    e.node.classList.add("ad-slot--rendered")
                                }) : Promise.resolve()
                            }).then(function() {
                                return n
                            })
                        }).catch(function(e) {
                            return Object(F.a)(e, {
                                feature: "commercial"
                            }, !1), Promise.resolve(!1)
                        })
                },
                lt = n(47),
                ft = D()(function() {
                    Object(lt.c)("Commercial: First Ad Rendered"), (new Image).src = s.a.get("page.beaconUrl") + "/count/ad-render.gif"
                }),
                mt = [z.a.outstreamDesktop.toString(), z.a.outstreamMobile.toString()],
                pt = function(e) {
                    ft();
                    var t = Object(S.a)(e.slot.getSlotElementId());
                    if (t) {
                        var n = function(n) {
                            t.stopRendering(n), C.a.emit("modules:commercial:dfp:rendered", e)
                        };
                        if (t.stopLoading(!0), t.startRendering(), t.isEmpty = e.isEmpty, e.isEmpty)(function(e) {
                                B.a.write(function() {
                                    window.googletag.destroySlots([e.slot]), e.node.remove(),
                                        function(e) {
                                            var t = function(t) {
                                                return t.filter(function(t) {
                                                    return t !== e
                                                })
                                            };
                                            v.a.adverts = t(v.a.adverts), v.a.advertsToRefresh = t(v.a.advertsToRefresh), v.a.advertsToLoad = t(v.a.advertsToLoad), v.a.advertIds = {}, v.a.adverts.forEach(function(e, t) {
                                                v.a.advertIds[e.id] = t
                                            })
                                        }(e)
                                })
                            })(t),
                            function(e, t) {
                                if (Math.random() < 1e-4) {
                                    var n = t.slot.getAdUnitPath(),
                                        a = t.slot.getTargetingKeys().includes("k") ? t.slot.getTargeting("k") : [],
                                        i = a ? a.join(", ") : "";
                                    Object(F.a)(new Error("dfp returned an empty ad response"), {
                                        feature: "commercial",
                                        adUnit: n,
                                        adSlot: e,
                                        adKeywords: i
                                    }, !1)
                                }
                            }(t.id, e), n(!1);
                        else {
                            t.hasPrebidSize || (t.size = e.size), void 0 !== e.creativeId && v.a.creativeIDs.push(e.creativeId);
                            var a = t.size && t.size.toString(),
                                i = "0,0" !== a,
                                o = mt.includes(a),
                                r = e.lineItemId && s.a.get("page.dfpNonRefreshableLineItemIds", []).includes(e.lineItemId);
                            t.shouldRefresh = i && !o && !s.a.get("page.hasPageSkin") && !r, ut(t, e).then(n)
                        }
                    }
                },
                gt = n(20),
                ht = function(e) {
                    var t = Object(S.a)(e.slot.getSlotElementId());
                    if (t && t.shouldRefresh) {
                        var n = function e() {
                            document.hidden || (document.removeEventListener("visibilitychange", e), Object(_.a)(t))
                        };
                        setTimeout(function() {
                            t.shouldRefresh && (document.hidden ? document.addEventListener("visibilitychange", n) : Object(_.a)(t))
                        }, 3e4)
                    }
                },
                bt = function(e) {
                    if (m.b.isAvailable()) {
                        var t = Object(S.a)(e.slot.getSlotElementId());
                        if (t && t.maxViewPercentage < e.inViewPercentage) {
                            if (t.maxViewPercentage <= 90 && e.inViewPercentage > 90) {
                                var n = m.b.get("gu.commercial.slotVisibility") || 0;
                                m.b.set("gu.commercial.slotVisibility", n + 1)
                            }
                            t.maxViewPercentage = e.inViewPercentage
                        }
                    }
                },
                vt = n(13),
                yt = n.n(vt),
                wt = n(256),
                kt = Object(O.h)(!0),
                _t = O.c.map(function(e) {
                    return e.name
                }),
                jt = function(e, t) {
                    var n = function(e, t) {
                        var n = _t.slice(0, _t.indexOf(e) + 1).map(wt.a);
                        return Math.max.apply(Math, yt()(t.map(function(e) {
                            return n.lastIndexOf(e)
                        })))
                    };
                    v.a.advertsToRefresh.filter(function(a) {
                        var i = Object.keys(a.sizes),
                            o = n(e, i),
                            r = n(t, i);
                        return -1 !== o && o !== r
                    }).forEach(k.b)
                },
                Ot = function() {
                    kt(jt)
                },
                Ct = function() {
                    C.a.on("window:throttledResize", Ot)
                },
                Pt = function(e, t) {
                    if (!(e && "backgroundImage" in e && "backgroundRepeat" in e && "backgroundPosition" in e && "scrollType" in e && t instanceof Element)) return Promise.resolve();
                    var n = function(e) {
                            return Object.keys(e).reduce(function(t, n) {
                                return "scrollType" !== n && (t[n] = e[n]), "backgroundColour" === n && (t.backgroundColor = e[n]), t
                            }, {})
                        }(e),
                        a = t.getElementsByClassName("creative__background-parent")[0],
                        i = a ? a.getElementsByClassName("creative__background")[0] : null,
                        o = !(!a || !i),
                        r = function(e, t) {
                            c.a.read(function() {
                                var e = t.getBoundingClientRect(),
                                    n = e.height,
                                    a = window.innerHeight,
                                    i = Math.floor(e.bottom / (a + n) * 130);
                                t.style.backgroundPositionY = "".concat(i, "%")
                            })
                        },
                        s = new IntersectionObserver(function(e) {
                            e.filter(function(e) {
                                return e.isIntersecting
                            }).forEach(function(e) {
                                if (!o) {
                                    var t = e.target.firstChild;
                                    t && t instanceof HTMLElement && (Object($e.a)(window, "scroll", function() {
                                        return r(0, t)
                                    }, {
                                        passive: !0
                                    }), r(0, t))
                                }
                            })
                        }, {
                            rootMargin: "10px"
                        });
                    return function() {
                        if (i && a && o) return Promise.resolve({
                            backgroundParent: a,
                            background: i
                        });
                        var e = document.createElement("div"),
                            n = document.createElement("div");
                        return e.appendChild(n), c.a.write(function() {
                            e && t.insertBefore(e, t.firstChild)
                        }).then(function() {
                            return {
                                backgroundParent: e,
                                background: n
                            }
                        })
                    }().then(function(a) {
                        return function(a, i) {
                            return a.className = "creative__background-parent", i.className = "".concat("creative__background", " creative__background--").concat(e.scrollType), Object.assign(i.style, n), "fixed" === e.scrollType ? c.a.read(function() {
                                if (t instanceof Element) return t.getBoundingClientRect()
                            }).then(function(e) {
                                return c.a.write(function() {
                                    n.backgroundColor && (a.style.backgroundColor = n.backgroundColor), e && (i.style.left = "".concat(e.left, "px"), i.style.right = "".concat(e.right, "px"), i.style.width = "".concat(e.width, "px"))
                                })
                            }).then(function() {
                                return {
                                    backgroundParent: a,
                                    background: i
                                }
                            }) : Promise.resolve({
                                backgroundParent: a,
                                background: i
                            })
                        }(a.backgroundParent, a.background)
                    }).then(function(e) {
                        var t = e.backgroundParent;
                        return s.observe(t)
                    })
                },
                Bt = n(104),
                xt = function(e) {
                    var t = String(e).match(/^(\d+)(%|px|em|ex|ch|rem|vh|vw|vmin|vmax)?/);
                    return t ? t[1] + (void 0 === t[2] ? "px" : t[2]) : ""
                },
                At = window,
                Lt = "IntersectionObserver" in At,
                It = !1,
                St = {},
                Et = 0,
                Mt = function(e, t) {
                    var n;
                    St[e].respond(null, {
                        width: (n = t).width,
                        height: n.height,
                        top: n.top,
                        bottom: n.bottom,
                        left: n.left,
                        right: n.right
                    })
                },
                Tt = function(e) {
                    return [e, St[e].node.getBoundingClientRect()]
                },
                Rt = function(e) {
                    return e[1].bottom > 0 && e[1].top < this.height
                },
                Dt = function(e) {
                    dt = e.filter(function(e) {
                        return e.intersectionRatio > 0
                    }).map(function(e) {
                        return e.target.id
                    })
                },
                Ft = function() {
                    if (!It) {
                        var e = Object(O.g)();
                        return It = !0, c.a.read(function() {
                            It = !1;
                            var t = Object.keys(St);
                            Lt ? dt.map(Tt).forEach(function(e) {
                                Mt(e[0], e[1])
                            }) : t.map(Tt).filter(Rt, e).forEach(function(e) {
                                Mt(e[0], e[1])
                            })
                        })
                    }
                },
                zt = function(e, t, n) {
                    n && (t ? function(e, t) {
                        0 === Et && (Object($e.a)(At, "scroll", Ft, {
                            passive: !0
                        }), Lt && (ct = new At.IntersectionObserver(Dt))), St[e.id] = {
                            node: e,
                            visible: !Lt,
                            respond: t
                        }, Et += 1, Lt && ct && ct.observe(e), c.a.read(function() {
                            return e.getBoundingClientRect()
                        }).then(function(t) {
                            Mt(e.id, t)
                        })
                    }(n, e) : function(e) {
                        St[e.id] && (Lt && ct && ct.unobserve(e), St[e.id] = !1, Et -= 1), 0 === Et && (At.removeEventListener("scroll", Ft), Lt && ct && (ct.disconnect(), ct = null))
                    }(n))
                },
                Gt = window,
                Vt = {},
                Nt = 0,
                Ht = !1,
                Ut = function() {
                    return c.a.read(function() {
                        return Object(O.g)()
                    })
                },
                qt = function(e, t) {
                    Vt[e] && Vt[e].respond && Vt[e].respond(null, t)
                },
                $t = function() {
                    if (!Ht) return Ht = !0, Ut().then(function(e) {
                        Object.keys(Vt).forEach(function(t) {
                            qt(t, e)
                        }), Ht = !1
                    })
                },
                Wt = function(e, t, n) {
                    n && (t ? function(e, t) {
                        0 === Nt && Gt.addEventListener("resize", $t), Vt[e.id] = {
                            node: e,
                            respond: t
                        }, Nt += 1, Ut().then(function(t) {
                            qt(e.id, t)
                        })
                    }(n, e) : function(e) {
                        Vt[e.id] && (Vt[e.id] = !1, Nt -= 1), 0 === Nt && Gt.removeEventListener("resize", $t)
                    }(n))
                };
            n.d(t, "a", function() {
                return Xt
            }), Object(V.a)(function(e) {
                e("type", function(e, t, n) {
                    return a = e, i = n && n.closest(".js-ad-slot"), c.a.write(function() {
                        i.classList.add("ad-slot--".concat(a || ""))
                    });
                    var a, i
                })
            }, function(e) {
                e("get-styles", function(e) {
                    if (e) return function(e, t) {
                        if (!e || "string" != typeof e.selector) return null;
                        for (var n = [], a = 0; a < t.length; a += 1) {
                            var i = t[a],
                                o = i.ownerNode;
                            o && o.matches && o.matches(e.selector) && ("STYLE" === o.tagName ? n.push(o.textContent) : n.push(Array.prototype.reduce.call(i.cssRules || [], function(e, t) {
                                return e + t.cssText
                            }, "")))
                        }
                        return n
                    }(e, document.styleSheets)
                })
            }, function(e) {
                e("get-page-targeting", function() {
                    return s.a.get("page.sharedAdTargeting")
                })
            }, function(e) {
                e("resize", function(e, t, n) {
                    if (n && e) {
                        var a = n && n.closest(".js-ad-slot");
                        if (a && (a.classList.contains("ad-slot--mostpop") || a.classList.contains("ad-slot--right") || a.classList.contains("ad-slot--offset-right"))) return null;
                        ! function(e) {
                            c.a.write(function() {
                                e && e.classList.remove("ad-slot--outstream")
                            })
                        }(a);
                        var i = n && n.closest(".ad-slot__content");
                        return function(e, t, n, a) {
                            if (!(e && ("height" in e || "width" in e) && t && a)) return null;
                            var i = {};
                            return e.width && !(a && a.classList.contains("ad-slot--liveblog-inline")) && (i.width = xt(e.width)), e.height && (i.height = xt(e.height)), c.a.write(function() {
                                Object.assign(a.style, i), Object.assign(t.style, i), n && Object.assign(n.style, i)
                            })
                        }(e, n, i, a)
                    }
                })
            }, function(e) {
                e("hide", function(e, t, n) {
                    if (n) {
                        var a = n.closest(".js-ad-slot");
                        if (a) return i = a, c.a.write(function() {
                            return i.classList.add("u-h")
                        })
                    }
                    var i
                })
            }, function(e) {
                e("scroll", zt, {
                    persist: !0
                })
            }, function(e) {
                e("viewport", Wt, {
                    persist: !0
                })
            }, function(e) {
                e("click", function(e, t) {
                    return function(e, t) {
                        Object(Bt.b)(e.id, t)
                    }((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).closest(".js-ad-slot") || {
                        id: "unknown"
                    }, e || "")
                })
            }, function(e) {
                e("background", function(e, t, n) {
                    return n && e ? Pt(e, n.closest(".js-ad-slot")) : Promise.resolve()
                })
            }, function(e) {
                e("disable-refresh", function(e, t, n) {
                    if (n) {
                        var a = n.closest(".js-ad-slot");
                        if (a instanceof HTMLElement) {
                            var i = function(e) {
                                return v.a.adverts.find(function(t) {
                                    return t.node.isSameNode(e)
                                })
                            }(a);
                            i && (i.shouldRefresh = !1)
                        }
                    }
                })
            });
            var Qt = function() {
                    var e = window.googletag.pubads();
                    if (e.addEventListener("slotRenderEnded", u.a.wrap(pt)), e.addEventListener("slotOnload", u.a.wrap(T)), e.addEventListener("impressionViewable", "false" !== Object(gt.d)().adrefresh ? ht : function() {}), e.addEventListener("slotVisibilityChanged", bt), m.b.isAvailable()) {
                        var t = m.b.get("gu.commercial.pageViews") || 0;
                        m.b.set("gu.commercial.pageViews", t + 1)
                    }
                },
                Jt = function() {
                    var e = window.googletag.pubads(),
                        t = Object(p.c)();
                    Object.keys(t).forEach(function(n) {
                        e.setTargeting(n, t[n])
                    })
                },
                Yt = function() {
                    var e = r()(v.a.adSlotSelector);
                    return c.a.write(function() {
                        return e.forEach(function(e) {
                            return e.remove()
                        })
                    })
                },
                Kt = function() {
                    var e = Object(I.i)();
                    if (e) {
                        var t = f.hash(e.id);
                        window.googletag.pubads().setPublisherProvidedId(t)
                    }
                },
                Xt = function() {
                    return h.a.dfpAdvertising ? ((window.googletag.cmd.push(Qt, Jt, Kt, Ct, function() {
                        L()
                    }), Object(g.onIabConsentNotification)(function(e) {
                        var t = e[1] && e[2] && e[3] && e[4] && e[5];
                        window.googletag.cmd.push(function() {
                            window.googletag.pubads().setRequestNonPersonalizedAds(t ? 0 : 1)
                        })
                    }), Object(d.a)(s.a.get("libs.googletag"), {
                        async: !1
                    })).then(b.a).catch(Yt), Promise.resolve()) : Yt()
                }
        },
        409: function(e, t, n) {
            "use strict";
            var a = n(3),
                i = n(24),
                o = n(0),
                r = {
                    books: "P5033A084-E9BF-453A-91D3-C558751D9A85",
                    business: "P5B109609-6223-45BA-B052-55F34A79D7AD",
                    commentisfree: "PA878EFC7-93C8-4352-905E-9E03883FD6BD",
                    artanddesign: "PE5076E6F-B85D-4B45-9536-F150EF3FC853",
                    culture: "PE5076E6F-B85D-4B45-9536-F150EF3FC853",
                    stage: "PE5076E6F-B85D-4B45-9536-F150EF3FC853",
                    education: "P4A01DB74-5B97-435A-89F0-C07EA2C739EC",
                    environment: "P2F34A388-A280-4C3F-AF43-FAF16EFCB7B1",
                    cities: "P2F34A388-A280-4C3F-AF43-FAF16EFCB7B1",
                    "global-development": "P2F34A388-A280-4C3F-AF43-FAF16EFCB7B1",
                    "sustainable-business": "P2F34A388-A280-4C3F-AF43-FAF16EFCB7B1",
                    fashion: "PCF345621-F34D-40B2-852C-6223C9C8F1E2",
                    film: "P878ECFA5-14A7-4038-9924-3696C93706FC",
                    law: "P1FA129DD-9B9E-49BB-98A4-AA7ED8523DFD",
                    lifeandstyle: "PCFE04250-E5F6-48C7-91DB-5CED6854818C",
                    media: "P1434DC6D-6585-4932-AE17-2864CD0AAE99",
                    money: "PB71E7F1E-F231-4F73-9CC8-BE8822ADD0C2",
                    music: "P78382DEE-CC9B-4B36-BD27-809007BFF300",
                    international: "P505182AA-1D71-49D8-8287-AA222CD05424",
                    au: "P505182AA-1D71-49D8-8287-AA222CD05424",
                    "australia-news": "P505182AA-1D71-49D8-8287-AA222CD05424",
                    uk: "P505182AA-1D71-49D8-8287-AA222CD05424",
                    "uk-news": "P505182AA-1D71-49D8-8287-AA222CD05424",
                    us: "P505182AA-1D71-49D8-8287-AA222CD05424",
                    "us-news": "P505182AA-1D71-49D8-8287-AA222CD05424",
                    world: "P505182AA-1D71-49D8-8287-AA222CD05424",
                    politics: "P5B7468E3-CE04-40FD-9444-22FB872FE83E",
                    careers: "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "culture-professionals-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "global-development-professionals-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "government-computing-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "guardian-professional": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "healthcare-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "higher-education-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "housing-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "local-government-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "local-leaders-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "public-leaders-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "small-business-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "social-care-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "teacher-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "voluntary-sector-network": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    "women-in-leadership": "P3637DC6B-E43C-4E92-B22C-3F255CC573DA",
                    science: "PDAD6BC22-C97B-4151-956B-7F069B2C56E9",
                    society: "P7AF4A592-96FB-4255-B33F-352406F4C7D2",
                    sport: "PCC1AEBB6-7D1A-4F34-8256-EFC314E5D0C3",
                    football: "PCC1AEBB6-7D1A-4F34-8256-EFC314E5D0C3",
                    technology: "P29EF991A-3FEE-4215-9F03-58EACA8286B9",
                    travel: "PD1CEDC3E-2653-4CB6-A4FD-8A315DE07548",
                    "tv-and-radio": "P66E48909-8FC9-49E8-A7E6-0D31C61805AD",
                    "brand-only": "P0EE0F4F4-8D7C-4082-A2A4-82C84728DC59"
                },
                s = {
                    shouldRun: o.a.get("switches.imrWorldwide"),
                    url: "//secure-dcr.imrworldwide.com/novms/js/2/ggcmb510.js",
                    onLoad: function() {
                        var e = o.a.get("page.section", "").toLowerCase(),
                            t = e in r ? e : "The Guardian - brand only",
                            n = {
                                sfcode: "dcr",
                                apid: r[e] || r["brand-only"],
                                apn: "theguardian"
                            },
                            a = NOLCMB.getInstance(n.apid);
                        a.ggInitialize(n);
                        var i = {
                            type: "static",
                            assetid: o.a.get("page.pageId"),
                            section: t
                        };
                        a.ggPM("staticstart", i)
                    }
                },
                c = {
                    shouldRun: o.a.get("switches.imrWorldwide"),
                    url: "//secure-au.imrworldwide.com/v60.js",
                    onLoad: function() {
                        nol_t({
                            cid: "au-guardian",
                            content: "0",
                            server: "secure-gl"
                        }).record().post()
                    }
                },
                d = n(128),
                u = function() {
                    window.google_trackConversion({
                        google_conversion_id: 971225648,
                        google_custom_params: window.google_tag_params,
                        google_remarketing_only: !0
                    })
                },
                l = !o.a.get("page.isFront") && o.a.get("switches.simpleReach") && o.a.get("page.isPaidContent"),
                f = "";
            if (l) {
                var m = o.a.get("page.author").split(","),
                    p = o.a.get("page.sectionName").split(","),
                    g = o.a.get("page.keywords").split(",");
                window.__reach_config = {
                    pid: "58ff7f3a736b795c10004930",
                    title: o.a.get("page.headline"),
                    date: new Date(o.a.get("page.webPublicationDate")),
                    authors: m,
                    channels: p,
                    tags: g,
                    article_id: o.a.get("page.pageId"),
                    ignore_errors: !1
                }, f = "//d8rk54i4mohrb.cloudfront.net/js/reach.js"
            }
            var h = {
                    shouldRun: l,
                    url: f
                },
                b = n(173),
                v = {
                    shouldRun: o.a.get("switches.iasAdTargeting", !1),
                    url: "//cdn.adsafeprotected.com/iasPET.1.js"
                },
                y = {
                    shouldRun: o.a.get("switches.inizio", !1),
                    url: "//cdn.brandmetrics.com/survey/script/e96d04c832084488a841a06b49b8fb2d.js",
                    onLoad: function() {
                        window._brandmetrics = window._brandmetrics || [], window._brandmetrics.push({
                            cmd: "_querySurvey",
                            val: {
                                callback: function(e, t) {
                                    e && (window && window.googletag && window.googletag.cmd.push(function() {
                                        window.googletag.pubads().setTargeting("inizio", "t")
                                    }), console.log("surveyAvailable: ".concat(t.measurementId)))
                                }
                            }
                        })
                    }
                },
                w = n(403),
                k = n.n(w),
                _ = n(12),
                j = n.n(_),
                O = n(8),
                C = n(7),
                P = n(156),
                B = n(85),
                x = C.a,
                A = {
                    load: function() {
                        j.a.write(function() {
                            var e, t, n, a, i, r;
                            e = o.a.get("page.plistaPublicApiKey"), t = "innerArticle", a = "PLISTA_".concat(e), i = window[a], (r = Object(O.a)(".js-plista-container")).append(function(e) {
                                return '\n    <div class="PLISTA" data-ob-template="guardian">\n        <div data-display="plista_widget_'.concat(e.widgetName, '"></div>\n    </div>\n')
                            }({
                                widgetName: t
                            })), r.css("display", "block"), i && i.publickey ? i.widgets.push({
                                name: t,
                                pre: n
                            }) : (window[a] = {
                                publickey: e,
                                widgets: [{
                                    name: t,
                                    pre: n
                                }],
                                geo: "au",
                                categories: void 0,
                                dataMode: "data-display"
                            }, Object(B.a)("//static-au.plista.com/async/".concat(a, ".js")))
                        })
                    },
                    init: function() {
                        return i.a.outbrain ? x.then(function(e) {
                            return !document.getElementById("dfp-ad--merchandising-high") || e
                        }).then(function(e) {
                            if (!e) return Object(P.a)("dfp-ad--merchandising-high").then(function(e) {
                                e || A.load()
                            });
                            A.load()
                        }) : Promise.resolve(!1)
                    }
                },
                L = n(263),
                I = n(59),
                S = n.n(I),
                E = function(e, t) {
                    var n, i = S()(k.a);
                    return (n = o.a.get("page.seriesId") || o.a.get("page.blogIds") ? ".js-outbrain-anchor" : ".js-related, .js-outbrain-anchor", Promise.resolve(document.querySelector(n))).then(function(t) {
                        return a.a.write(function() {
                            Object(O.a)(t).after(i({
                                widgetType: e
                            }))
                        })
                    }).then(t)
                },
                M = function() {
                    window.twq && (window.twq("init", "nyl43"), window.twq("track", "PageView"))
                },
                T = n(105);
            n.d(t, "a", function() {
                return F
            });
            var R = !1,
                D = function() {
                    ! function(e) {
                        Object(T.onIabConsentNotification)(function(t) {
                            var n = t[1] && t[2] && t[3] && t[4] && t[5];
                            if (!R && n) {
                                R = !0;
                                var i = document.scripts[0],
                                    o = document.createDocumentFragment(),
                                    r = !1;
                                e.forEach(function(e) {
                                    if (!0 === e.useImage)(new Image).src = e.url;
                                    else {
                                        r = !0;
                                        var t = document.createElement("script");
                                        t.src = e.url, t.onload = e.onLoad, o.appendChild(t)
                                    }
                                }), r && a.a.write(function() {
                                    i && i.parentNode && i.parentNode.insertBefore(o, i)
                                })
                            }
                        })
                    }([s, c, {
                        shouldRun: o.a.get("switches.remarketing") && !!Object(d.b)(d.e),
                        url: "//www.googleadservices.com/pagead/conversion_async.js",
                        onLoad: u
                    }, h, b.b, v, y, {
                        shouldRun: o.a.get("switches.facebookTrackingPixel"),
                        url: "https://www.facebook.com/tr?id=".concat(o.a.get("libs.facebookAccountId"), "&ev=PageView&noscript=1"),
                        useImage: !0
                    }, {
                        shouldRun: o.a.get("switches.twitterUwt", !1) && !!Object(d.b)(d.e),
                        url: "//static.ads-twitter.com/uwt.js",
                        onLoad: M
                    }].filter(function(e) {
                        return e.shouldRun
                    }))
                },
                F = function() {
                    return i.a.thirdPartyTags ? (i.a.adFree || function() {
                        var e = o.a.get("page.edition", "").toLowerCase(),
                            t = o.a.get("switches.plistaForOutbrainAu") && "au" === e;
                        if (o.a.set("debug.outbrain.shouldUseRandomWidget", t), t) {
                            var n = ["plista", "outbrain"],
                                a = n[Math.floor(Math.random() * n.length)];
                            if (o.a.set("debug.outbrain.randomWidget", a), "plista" === a) return E("plista", A.init)
                        }
                        E("outbrain", L.b)
                    }(), D(), Promise.resolve(!0)) : Promise.resolve(!1)
                }
        },
        410: function(e, t, n) {
            "use strict";
            var a = n(13),
                i = n.n(a),
                o = n(18),
                r = n.n(o),
                s = n(16),
                c = n.n(s),
                d = n(1),
                u = n.n(d),
                l = n(0),
                f = n(2),
                m = n(20),
                p = n(15),
                g = n(119),
                h = n(64),
                b = n(63),
                v = ["debug", "info", "warn", "error"],
                y = v.reduce(function(e, t, n) {
                    return e[t] = function() {
                        var e = "debug" === t ? "log" : t,
                            a = b.h.logging;
                        if (a && console && "function" == typeof console[e]) {
                            var o = v.indexOf(a.toString().toLocaleLowerCase());
                            if (!0 === a || o > -1 && n >= o) {
                                for (var r, s = arguments.length, c = new Array(s), d = 0; d < s; d++) c[d] = arguments[d];
                                var u = c.concat(),
                                    l = u[0],
                                    f = u.slice(1);
                                (r = console)[e].apply(r, ["".concat(t.toUpperCase(), ": (CMP) ").concat(l)].concat(i()(f)))
                            }
                        }
                    }, e
                }, {}),
                w = function(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0", n = "", a = 0; a < e; a += 1) n += t;
                    return n
                },
                k = function(e, t) {
                    return w(Math.max(0, t)).toString() + e
                },
                _ = function(e, t) {
                    return e + w(Math.max(0, t))
                },
                j = function(e, t) {
                    var n = "";
                    return "number" != typeof e || Number.isNaN(e) || (n = parseInt(e, 10).toString(2)), t && t >= n.length && (n = k(n, t - n.length)), t && t < n.length && (n = n.substring(0, t)), n
                },
                O = function(e, t, n) {
                    var a = e.substr(t, n);
                    return parseInt(a, 2)
                },
                C = function(e, t, n) {
                    return new Date(100 * O(e, t, n))
                },
                P = function(e, t) {
                    var n = e.substr(t, 1);
                    return 1 === parseInt(n, 2)
                },
                B = function(e, t, n) {
                    for (var a = "", i = t; i < t + n;) a += String.fromCharCode(65 + O(e, i, 6)), i += 6;
                    return a
                },
                x = function(e) {
                    var t = e.input;
                    return e.fields.reduce(function(e, n) {
                        return e + A({
                            input: t,
                            field: n
                        })
                    }, "")
                },
                A = function(e) {
                    var t = e.input,
                        n = e.field,
                        a = n.name,
                        i = n.type,
                        o = n.numBits,
                        r = n.encoder,
                        s = n.validator;
                    if ("function" == typeof s && !s(t)) return "";
                    if ("function" == typeof r) return r(t);
                    var c = "function" == typeof o ? o(t) : o,
                        d = t[a],
                        u = null == d ? "" : d;
                    switch (i) {
                        case "int":
                            return j(u, c);
                        case "bool":
                            return function(e) {
                                return j(!0 === e ? 1 : 0, 1)
                            }(u);
                        case "date":
                            return function(e, t) {
                                return e instanceof Date ? j(e.getTime() / 100, t) : j(e, t)
                            }(u, c);
                        case "bits":
                            return "string" == typeof u ? _(u, c - u.length).substring(0, c) : "";
                        case "6bitchar":
                            return "string" == typeof u ? function(e, t) {
                                var n = function(e) {
                                    return "string" != typeof e ? "" : e.split("").map(function(e) {
                                        var t = Math.max(0, e.toUpperCase().charCodeAt(0) - 65);
                                        return j(t > 25 ? 0 : t, 6)
                                    }).join("")
                                }(e);
                                return _(n, t).substr(0, t)
                            }(u, c) : "";
                        case "list":
                            return Array.isArray(u) ? u.reduce(function(e, t) {
                                return e + x({
                                    input: t,
                                    fields: n.fields ? n.fields : []
                                })
                            }, "") : "";
                        default:
                            return y.warn("Cookie definition field found without encoder or type: ".concat(a)), ""
                    }
                },
                L = function(e) {
                    var t = e.input,
                        n = e.fields,
                        a = e.startPosition,
                        i = void 0 === a ? 0 : a;
                    return {
                        decodedObject: n.reduce(function(e, n) {
                            var a = n.name,
                                o = n.numBits,
                                r = I({
                                    input: t,
                                    output: e,
                                    startPosition: i,
                                    field: n
                                }),
                                s = r.fieldValue,
                                c = r.newPosition;
                            return void 0 !== s && (e[a] = s), void 0 !== c ? i = c : "number" == typeof o && (i += o), e
                        }, {}),
                        newPosition: i
                    }
                },
                I = function(e) {
                    var t = e.input,
                        n = e.output,
                        a = e.startPosition,
                        o = e.field,
                        r = o.type,
                        s = o.numBits,
                        c = o.decoder,
                        d = o.validator,
                        u = o.listCount;
                    if ("function" == typeof d && !d(n)) return {
                        newPosition: a
                    };
                    if ("function" == typeof c) return c(t, n, a);
                    var l = "function" == typeof s ? s(n) : s,
                        f = "function" == typeof u ? u(n) : "number" == typeof u ? u : 0;
                    switch (r) {
                        case "int":
                            return {
                                fieldValue: O(t, a, l)
                            };
                        case "bool":
                            return {
                                fieldValue: P(t, a)
                            };
                        case "date":
                            return {
                                fieldValue: C(t, a, l)
                            };
                        case "bits":
                            return {
                                fieldValue: t.substr(a, l)
                            };
                        case "6bitchar":
                            return {
                                fieldValue: B(t, a, l)
                            };
                        case "list":
                            return new Array(f).fill().reduce(function(e) {
                                var n = L({
                                        input: t,
                                        fields: o.fields ? o.fields : [],
                                        startPosition: e.newPosition
                                    }),
                                    a = n.decodedObject,
                                    r = n.newPosition;
                                return {
                                    fieldValue: i()(e.fieldValue).concat([a]),
                                    newPosition: r
                                }
                            }, {
                                fieldValue: [],
                                newPosition: a
                            });
                        default:
                            return y.warn("Cookie definition field found without decoder or type"), {}
                    }
                },
                S = function(e) {
                    if (e && e.cookieVersion) return function(e, t) {
                        var n = function(e, t) {
                            var n = e.cookieVersion;
                            if ("number" != typeof n) y.error("Could not find cookieVersion to encode");
                            else {
                                if (t[n]) {
                                    var a = t[n].fields;
                                    return x({
                                        input: e,
                                        fields: a
                                    })
                                }
                                y.error("Could not find definition to encode cookie version ".concat(n))
                            }
                        }(e, b.i);
                        if (n) {
                            for (var a = _(n, 7 - (n.length + 7) % 8), i = "", o = 0; o < a.length; o += 8) i += String.fromCharCode(parseInt(a.substr(o, 8), 2));
                            return btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                        }
                    }(e)
                },
                E = function(e) {
                    return function(e, t) {
                        for (var n = e.replace(/-/g, "+").replace(/_/g, "/") + "==".substring(0, 3 * e.length % 4), a = atob(n), i = "", o = 0; o < a.length; o += 1) {
                            var r = a.charCodeAt(o).toString(2);
                            i += k(r, 8 - r.length)
                        }
                        return function(e, t) {
                            var n = O(e, 0, 6);
                            if ("number" != typeof n) return y.error("Could not find cookieVersion to decode"), {};
                            if (!t[n]) return y.error("Could not find definition to decode cookie version ".concat(n)), {};
                            var a = t[n].fields;
                            return L({
                                input: e,
                                fields: a
                            }).decodedObject
                        }(i, t)
                    }(e, b.i)
                },
                M = function(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = "", a = 1; a <= e; a += 1) n += t.includes(a) ? "1" : "0";
                    return _(n, Math.max(0, e - n.length))
                },
                T = function(e, t) {
                    for (var n = Math.max.apply(Math, [0].concat(i()(e), i()(t))), a = "", o = 1; o <= n; o += 1) a += t.includes(o) ? "1" : "0";
                    return a
                },
                R = function(e) {
                    return e.split("").reduce(function(e, t, n) {
                        return "1" === t && e.push(n + 1), e
                    }, [])
                },
                D = function(e, t) {
                    var n = Object.keys(t.purposesByVID).map(function(e) {
                            return parseInt(e, 10)
                        }),
                        a = Math.max.apply(Math, [0].concat(i()(n)));
                    return e ? {
                        selectedPurposeIds: t.purposeIDs,
                        selectedVendorIds: n,
                        maxVendorId: a
                    } : {
                        selectedPurposeIds: [],
                        selectedVendorIds: [],
                        maxVendorId: a
                    }
                },
                F = function(e, t, n, a) {
                    var i = new Date;
                    return {
                        cmpId: e,
                        cmpVersion: t,
                        cookieVersion: n,
                        vendorListVersion: a,
                        created: i,
                        lastUpdated: i,
                        consentLanguage: "EN",
                        consentScreen: 0
                    }
                },
                z = function(e, t, n, a, i) {
                    if (arguments.length > 5 && void 0 !== arguments[5] && arguments[5]) {
                        y.info("getVendorConsentData: Running Cmp Customise");
                        var o = function() {
                            var e = Object(f.d)(b.g);
                            return e ? (y.info("Read consent data from cookie: ".concat(e)), function(e) {
                                var t = E(e),
                                    n = t.cookieVersion,
                                    a = t.cmpId,
                                    i = t.cmpVersion,
                                    o = t.consentScreen,
                                    r = t.consentLanguage,
                                    s = t.vendorListVersion,
                                    c = t.purposeIdBitString,
                                    d = t.maxVendorId,
                                    u = t.created,
                                    l = t.lastUpdated,
                                    f = t.isRange,
                                    m = t.defaultConsent,
                                    p = t.vendorIdBitString,
                                    g = t.vendorRangeList,
                                    h = {
                                        cookieVersion: n,
                                        cmpId: a,
                                        cmpVersion: i,
                                        consentScreen: o,
                                        consentLanguage: r,
                                        vendorListVersion: s,
                                        selectedVendorIds: [],
                                        selectedPurposeIds: R(c),
                                        maxVendorId: d,
                                        created: u,
                                        lastUpdated: l
                                    };
                                if (f)
                                    for (var b = g.reduce(function(e, t) {
                                            for (var n = t.isRange, a = t.startVendorId, i = t.endVendorId, o = n ? i : a, r = a; r <= o; r += 1) e[r] = !0;
                                            return e
                                        }, {}), v = 0; v <= d; v += 1)(m && !b[v] || !m && b[v]) && h.selectedVendorIds.push(v);
                                else h.selectedVendorIds = R(p);
                                return h
                            }(e)) : (y.info("Unable to read from CMP cookie"), !1)
                        }();
                        if (o) return r()({}, o)
                    }
                    if ("boolean" == typeof a) {
                        var s = F(e, t, n, i.version),
                            c = D(a, i);
                        return r()({}, s, c)
                    }
                    y.warn("Missing value for consent state, Store will be incomplete")
                },
                G = {
                    version: 168,
                    purposeIDs: [1, 2, 3, 4, 5],
                    purposesByVID: {
                        1: [1, 2, 3, 4, 5],
                        2: [1, 2, 3],
                        3: [2, 3, 4, 5],
                        4: [1, 2, 3, 4, 5],
                        6: [1, 2, 3, 4, 5],
                        7: [2, 3, 4, 5],
                        8: [1, 2, 4],
                        9: [1, 2, 3, 4, 5],
                        10: [1],
                        11: [1],
                        12: [1, 3, 5],
                        13: [1, 2, 3],
                        14: [1, 2, 3, 4, 5],
                        15: [1, 2, 3, 4, 5],
                        16: [1, 3],
                        17: [1, 2, 3, 4, 5],
                        18: [1, 2, 3],
                        19: [1],
                        20: [],
                        21: [1, 2],
                        22: [1, 2, 3, 4, 5],
                        23: [1],
                        24: [1],
                        25: [1, 2],
                        26: [1, 2, 3, 4, 5],
                        27: [1, 3],
                        28: [1, 3],
                        29: [1, 2, 3, 4, 5],
                        30: [2],
                        31: [1, 2, 3, 4],
                        32: [1],
                        33: [1, 2, 3, 4],
                        34: [1, 2, 4, 5],
                        35: [1],
                        36: [5],
                        37: [1, 2, 3, 5],
                        38: [1, 2, 3, 5],
                        39: [1],
                        40: [],
                        41: [2],
                        42: [1],
                        43: [1, 3],
                        44: [1],
                        45: [1],
                        46: [1, 2, 3],
                        47: [1, 2, 3, 4, 5],
                        48: [1, 2, 3, 4, 5],
                        49: [1, 2, 3],
                        50: [1],
                        51: [1, 2, 3, 4, 5],
                        52: [1],
                        53: [1, 2, 3, 4, 5],
                        55: [],
                        56: [1],
                        57: [1, 2, 3, 4, 5],
                        58: [1, 2, 3, 5],
                        59: [1, 2, 3],
                        60: [1],
                        61: [1, 2, 3, 5],
                        62: [1, 2, 3, 4, 5],
                        63: [],
                        64: [1],
                        65: [1, 3, 4, 5],
                        66: [1, 2, 3, 5],
                        67: [1, 4, 5],
                        68: [1],
                        69: [1, 2, 3],
                        70: [],
                        71: [1, 2, 3, 4, 5],
                        72: [1, 2, 3],
                        73: [2, 3, 4, 5],
                        74: [1, 3],
                        75: [1, 2, 3, 4, 5],
                        76: [1],
                        77: [1, 5],
                        78: [1],
                        79: [1],
                        80: [3, 5],
                        81: [1, 2, 3, 4, 5],
                        82: [1, 2, 3, 4, 5],
                        83: [5],
                        84: [],
                        85: [1, 2, 3, 4, 5],
                        86: [1, 2, 3, 4, 5],
                        87: [2, 4],
                        88: [1],
                        89: [1],
                        90: [1],
                        91: [1, 2, 3],
                        92: [],
                        93: [],
                        94: [1, 2, 3, 4, 5],
                        95: [1, 2, 3, 4, 5],
                        97: [1, 2, 3, 4, 5],
                        98: [1, 2, 3, 4],
                        100: [1, 2, 3],
                        101: [1, 2, 3, 4, 5],
                        102: [1, 2],
                        104: [1, 2],
                        105: [1, 3, 5],
                        108: [1, 2, 3, 4, 5],
                        109: [1, 2, 3, 5],
                        110: [1, 5],
                        111: [],
                        112: [1, 2, 3, 4, 5],
                        113: [1, 2, 3, 5],
                        114: [1, 2, 3],
                        115: [1],
                        118: [1],
                        119: [1, 2, 5],
                        120: [1, 2, 3, 4, 5],
                        122: [1, 2, 3],
                        124: [1, 2, 3, 5],
                        125: [1, 3, 5],
                        126: [5],
                        127: [1, 2, 4],
                        128: [1, 2, 3, 4, 5],
                        129: [1, 2, 3, 4, 5],
                        130: [1],
                        131: [1],
                        132: [1, 2],
                        133: [1, 3, 5],
                        134: [1, 2, 3],
                        136: [],
                        137: [],
                        138: [1],
                        139: [1, 2, 3],
                        140: [1, 2, 3, 4, 5],
                        141: [1, 2, 3, 4],
                        142: [1, 2],
                        143: [1, 2, 3, 4, 5],
                        144: [1, 2, 3, 5],
                        145: [1, 5],
                        147: [1, 2, 3],
                        148: [1],
                        149: [1, 2, 3],
                        150: [2, 3, 5],
                        151: [],
                        152: [],
                        153: [1, 2, 3, 4, 5],
                        154: [1, 2],
                        155: [1, 2, 3],
                        156: [1],
                        157: [1, 2, 3],
                        158: [1, 2, 3, 4, 5],
                        159: [1, 2, 3, 5],
                        160: [1, 2, 3, 4, 5],
                        161: [1, 2, 3, 4, 5],
                        162: [],
                        163: [1, 2],
                        164: [1, 2, 3, 5],
                        165: [1],
                        167: [1, 5],
                        168: [1, 2, 3, 4, 5],
                        169: [1, 4],
                        170: [],
                        171: [1, 2, 3, 4, 5],
                        173: [1, 2, 3, 4, 5],
                        174: [],
                        175: [1, 2, 3, 4, 5],
                        177: [1, 2, 3, 4],
                        178: [],
                        179: [1, 2, 3, 4, 5],
                        180: [1],
                        182: [1, 2, 3, 4, 5],
                        183: [1, 2],
                        184: [1, 2, 3, 4, 5],
                        185: [1, 2, 3, 4, 5],
                        188: [],
                        189: [1, 3],
                        190: [1, 2, 3, 4, 5],
                        191: [1, 2, 3, 4, 5],
                        192: [1, 2, 3, 4, 5],
                        193: [1, 3],
                        194: [3, 5],
                        195: [],
                        196: [1, 2, 4],
                        197: [1, 3, 5],
                        198: [1, 3],
                        199: [1, 2, 3, 4, 5],
                        200: [],
                        201: [1, 2, 3],
                        202: [1, 2, 3, 4, 5],
                        203: [],
                        205: [],
                        206: [1, 2, 3, 4, 5],
                        208: [2, 3],
                        209: [1],
                        210: [1, 2, 3, 4, 5],
                        211: [1, 2, 3, 4, 5],
                        212: [],
                        213: [1],
                        214: [1, 2, 3],
                        215: [1, 2, 3],
                        216: [],
                        217: [],
                        218: [],
                        221: [1, 2, 3, 4, 5],
                        223: [],
                        224: [2, 4],
                        225: [],
                        226: [1],
                        227: [2],
                        228: [1, 2, 3, 4, 5],
                        229: [2, 4],
                        230: [1, 2, 3, 4, 5],
                        231: [1, 2, 3, 4, 5],
                        232: [],
                        234: [1, 2, 3],
                        235: [1],
                        236: [1, 2, 5],
                        237: [],
                        238: [],
                        239: [],
                        240: [],
                        241: [1, 2, 3, 4],
                        242: [],
                        243: [1, 2, 3, 4, 5],
                        244: [1, 2, 3, 4, 5],
                        245: [],
                        246: [],
                        248: [1],
                        249: [1, 2, 3, 4, 5],
                        250: [2, 3, 4],
                        251: [1],
                        252: [],
                        253: [1, 2, 3, 4, 5],
                        254: [],
                        255: [2, 3, 5],
                        256: [1],
                        257: [1],
                        258: [],
                        259: [2, 4],
                        260: [3],
                        261: [1, 2, 3, 4, 5],
                        262: [3],
                        263: [1, 2, 3, 4],
                        264: [1, 2, 3, 4, 5],
                        265: [2, 3, 4],
                        266: [1, 2, 3, 4, 5],
                        268: [1, 2, 3, 4, 5],
                        269: [1, 2, 3, 4, 5],
                        270: [1, 3],
                        272: [1, 2, 3, 4, 5],
                        273: [1],
                        274: [1, 2, 3, 4, 5],
                        275: [1, 2, 3],
                        276: [1, 2, 3, 4, 5],
                        277: [1, 2, 3, 4, 5],
                        278: [],
                        279: [1, 2, 3, 4, 5],
                        280: [],
                        281: [1, 5],
                        282: [],
                        284: [1],
                        285: [1],
                        287: [],
                        288: [2],
                        289: [1, 2, 3, 4, 5],
                        290: [1, 2, 3, 4, 5],
                        291: [1, 2, 4],
                        294: [],
                        295: [1, 2, 3, 5],
                        297: [1, 2],
                        298: [1, 2, 3, 5],
                        299: [1, 5],
                        301: [],
                        302: [1, 2, 3, 4, 5],
                        303: [1, 2, 3],
                        304: [1, 2, 3, 4, 5],
                        308: [1],
                        310: [],
                        311: [1, 2, 3, 4, 5],
                        312: [1, 5],
                        314: [1, 2, 3],
                        315: [1, 3],
                        316: [1, 2, 3, 4, 5],
                        317: [1, 2, 3, 4, 5],
                        318: [2, 3, 4],
                        319: [1, 3, 4, 5],
                        320: [1, 2, 3],
                        321: [1, 2, 3, 5],
                        323: [2],
                        325: [],
                        326: [3, 5],
                        328: [1, 2, 3, 4, 5],
                        329: [1, 5],
                        330: [2],
                        331: [1, 2, 4],
                        333: [1, 2, 3, 4, 5],
                        334: [],
                        335: [],
                        336: [],
                        337: [1, 2, 3, 4, 5],
                        338: [],
                        339: [2, 3, 4, 5],
                        340: [1, 2, 3, 4, 5],
                        341: [1, 2],
                        343: [],
                        344: [1, 3, 5],
                        345: [1, 3, 5],
                        346: [1, 2, 3, 4, 5],
                        347: [2, 4, 5],
                        349: [1, 2, 3, 4],
                        350: [1, 2, 3, 4, 5],
                        351: [1, 2, 3, 4, 5],
                        354: [2],
                        357: [1, 2, 3, 4, 5],
                        358: [1, 2, 3, 4, 5],
                        359: [1, 2, 3, 4, 5],
                        360: [],
                        361: [],
                        362: [1, 2, 3, 4, 5],
                        365: [],
                        366: [],
                        368: [1, 2, 3, 4, 5],
                        369: [1],
                        371: [],
                        373: [1, 2],
                        374: [1, 2, 4, 5],
                        375: [1, 2, 3],
                        376: [1, 2, 3, 5],
                        377: [1, 3, 5],
                        378: [],
                        380: [1, 2],
                        381: [1, 2, 3, 4, 5],
                        382: [1, 2, 4, 5],
                        384: [],
                        385: [1, 2, 3, 4],
                        387: [1, 3, 5],
                        388: [1],
                        389: [1, 2, 3, 4, 5],
                        390: [1, 3],
                        392: [2, 3, 4],
                        394: [1, 2],
                        395: [],
                        397: [1],
                        398: [1, 2, 3, 4, 5],
                        400: [1, 2, 3, 4, 5],
                        402: [2, 3, 4, 5],
                        403: [1, 3, 4, 5],
                        404: [],
                        405: [],
                        407: [1, 2],
                        408: [2],
                        409: [],
                        410: [1, 3],
                        412: [1, 2, 3, 4, 5],
                        413: [1, 2, 3, 4, 5],
                        415: [],
                        416: [1, 2, 3, 4, 5],
                        418: [1],
                        421: [],
                        422: [1],
                        423: [1, 2, 3, 4, 5],
                        424: [],
                        425: [],
                        426: [],
                        427: [1, 2, 3, 4, 5],
                        428: [],
                        429: [1, 2, 3, 4, 5],
                        430: [],
                        431: [],
                        434: [1, 3],
                        435: [1, 2, 3],
                        436: [2, 3, 4],
                        438: [1, 2, 3],
                        439: [1, 5],
                        440: [],
                        442: [1, 2, 3, 4, 5],
                        443: [],
                        444: [2],
                        447: [1, 2, 3, 4, 5],
                        448: [],
                        449: [],
                        450: [1, 2, 3, 4, 5],
                        452: [1, 2, 3, 4],
                        454: [1],
                        455: [1, 2, 3],
                        458: [],
                        459: [],
                        461: [1, 2, 3, 4, 5],
                        462: [1, 2, 3, 4, 5],
                        464: [1, 2, 3, 4],
                        465: [1, 2, 3, 4, 5],
                        466: [1, 3],
                        467: [3, 5],
                        468: [1],
                        469: [],
                        471: [1, 2, 3, 4, 5],
                        473: [3, 4, 5],
                        474: [],
                        475: [1, 2, 3],
                        476: [],
                        478: [1],
                        479: [1, 2, 3],
                        480: [2, 3],
                        482: [1, 2, 3, 4, 5],
                        484: [],
                        486: [],
                        487: [],
                        488: [],
                        489: [1, 2, 3],
                        490: [1, 3, 5],
                        491: [1, 2, 3, 4, 5],
                        492: [],
                        493: [1, 2, 3, 4],
                        494: [1, 2, 4, 5],
                        495: [1, 2, 3, 4, 5],
                        496: [1, 2, 3, 4],
                        497: [1, 2, 4],
                        498: [1],
                        499: [5],
                        500: [1, 2, 3, 5],
                        501: [1, 2, 3, 4, 5],
                        502: [5],
                        504: [1, 2, 3, 4, 5],
                        505: [1, 2],
                        506: [1, 2, 3],
                        507: [],
                        508: [1, 2, 3, 4, 5],
                        509: [1, 3],
                        511: [1, 2, 3, 4, 5],
                        512: [1, 2, 3, 4, 5],
                        513: [1, 2, 3, 4, 5],
                        514: [1],
                        515: [1, 3],
                        516: [1, 2, 3, 4, 5],
                        517: [1, 2],
                        518: [1],
                        519: [1, 2],
                        520: [1],
                        521: [1],
                        522: [2, 3, 5],
                        523: [1, 2, 3, 4, 5],
                        524: [1, 2, 3, 4, 5],
                        525: [1],
                        527: [1, 2, 3, 4, 5],
                        528: [1, 2, 3, 5],
                        529: [1, 2, 3, 4, 5],
                        530: [1, 2, 3, 5],
                        531: [1, 2, 3, 5],
                        534: [1, 3, 4, 5],
                        535: [1, 2, 3, 4, 5],
                        536: [1],
                        537: [],
                        539: [],
                        540: [1, 2, 3, 4, 5],
                        541: [],
                        542: [],
                        543: [1, 2],
                        544: [],
                        545: [1, 2, 3, 4, 5],
                        546: [1, 5],
                        547: [1, 3],
                        548: [1, 2, 3, 4, 5],
                        549: [1, 2, 3, 4, 5],
                        550: [5],
                        551: [1],
                        553: [1, 2, 3, 4, 5],
                        554: [1, 2, 3, 4, 5],
                        556: [1, 2, 3, 4, 5],
                        559: [],
                        560: [1, 2, 3],
                        565: [1, 2, 5],
                        568: [1, 2, 3, 4, 5],
                        569: [1, 3, 4, 5],
                        570: [1, 2, 3, 4, 5],
                        571: [1, 2, 3, 4, 5],
                        572: [1],
                        573: [2, 3, 4, 5],
                        574: [1, 2, 3, 4, 5],
                        576: [2],
                        577: [],
                        578: [1, 2, 3, 4, 5],
                        579: [1, 2, 3, 4, 5],
                        580: [],
                        581: [],
                        584: [3],
                        587: [1, 2, 3, 4, 5],
                        590: [],
                        591: [1, 3],
                        592: [1, 2, 3, 4, 5],
                        593: [1, 2, 3, 4, 5],
                        596: [3],
                        597: [],
                        598: [1],
                        599: [],
                        601: [1, 2, 3],
                        602: [1, 2],
                        604: [1, 2, 3, 4, 5],
                        606: [1, 2],
                        607: [1, 2, 3, 4, 5],
                        608: [1, 2, 3, 4, 5],
                        609: [1, 2, 3, 4, 5],
                        610: [],
                        612: [],
                        613: [1],
                        614: [1, 2, 3, 4, 5],
                        615: [1, 5],
                        617: [],
                        618: [1, 3],
                        619: [1, 2, 3, 4, 5],
                        620: [1, 2, 3, 4, 5],
                        621: [2, 3, 4],
                        623: [1, 2, 3],
                        624: [1, 2, 3, 4, 5],
                        625: [1, 3, 4, 5],
                        626: [],
                        627: [1],
                        628: [1],
                        630: [1, 2, 3, 4, 5],
                        631: [1, 2, 3, 4, 5],
                        635: [1, 2, 3, 4, 5],
                        638: [1, 3],
                        639: [1, 2, 3, 4, 5],
                        644: [1],
                        645: [1, 2, 3, 4, 5],
                        646: [1, 2, 5],
                        647: [2],
                        648: [1, 2, 3, 4, 5],
                        650: [1, 2, 3, 4, 5],
                        652: [],
                        653: [],
                        654: [1, 2, 3, 4, 5],
                        655: [1, 2, 3, 4, 5],
                        656: [1, 2, 3, 4],
                        657: [],
                        658: [1, 2, 3],
                        659: [],
                        660: [],
                        662: [1, 2, 3],
                        663: [1, 2, 3],
                        665: [1, 2, 3, 4, 5],
                        666: [1, 2, 3, 4, 5],
                        667: [],
                        668: [1, 5],
                        670: [1, 3, 5],
                        674: [1, 3, 5],
                        675: [1, 2, 3],
                        676: [1, 2, 3, 4, 5],
                        677: [1, 2, 3, 4, 5],
                        682: [1, 2, 3],
                        684: [],
                        685: [1, 2, 3, 4, 5],
                        686: [1, 2, 3, 4, 5]
                    },
                    legIntPurposesByVID: {
                        1: [],
                        2: [5],
                        3: [],
                        4: [],
                        6: [],
                        7: [1],
                        8: [3, 5],
                        9: [],
                        10: [3],
                        11: [2, 3, 4, 5],
                        12: [],
                        13: [],
                        14: [],
                        15: [],
                        16: [],
                        17: [],
                        18: [],
                        19: [2, 3, 4, 5],
                        20: [1, 2, 3, 4, 5],
                        21: [3, 5],
                        22: [],
                        23: [2, 3, 4, 5],
                        24: [2, 3, 4, 5],
                        25: [3, 5],
                        26: [],
                        27: [],
                        28: [],
                        29: [],
                        30: [1, 3],
                        31: [5],
                        32: [3],
                        33: [5],
                        34: [3],
                        35: [3, 5],
                        36: [1, 2, 3, 4],
                        37: [],
                        38: [],
                        39: [2, 3, 4, 5],
                        40: [1, 2, 3, 4, 5],
                        41: [1, 3],
                        42: [2, 3, 4, 5],
                        43: [],
                        44: [2, 3, 4, 5],
                        45: [3, 5],
                        46: [5],
                        47: [],
                        48: [],
                        49: [5],
                        50: [2, 3, 4, 5],
                        51: [],
                        52: [2, 3, 4, 5],
                        53: [],
                        55: [1, 2, 3, 4, 5],
                        56: [],
                        57: [],
                        58: [],
                        59: [],
                        60: [2, 3, 4, 5],
                        61: [],
                        62: [],
                        63: [1, 3],
                        64: [],
                        65: [],
                        66: [],
                        67: [2],
                        68: [2, 3, 4, 5],
                        69: [],
                        70: [1, 3],
                        71: [],
                        72: [5],
                        73: [1],
                        74: [],
                        75: [],
                        76: [2, 3, 4, 5],
                        77: [],
                        78: [],
                        79: [2, 3, 4, 5],
                        80: [1],
                        81: [],
                        82: [],
                        83: [],
                        84: [1, 2, 4, 5],
                        85: [],
                        86: [],
                        87: [1, 3, 5],
                        88: [2, 3],
                        89: [2, 3, 5],
                        90: [2, 3, 4, 5],
                        91: [],
                        92: [1, 2, 3, 4, 5],
                        93: [5],
                        94: [],
                        95: [],
                        97: [],
                        98: [5],
                        100: [5],
                        101: [],
                        102: [3],
                        104: [3],
                        105: [],
                        108: [],
                        109: [],
                        110: [],
                        111: [5],
                        112: [],
                        113: [],
                        114: [5],
                        115: [2, 3, 5],
                        118: [],
                        119: [3],
                        120: [],
                        122: [],
                        124: [],
                        125: [],
                        126: [],
                        127: [3, 5],
                        128: [],
                        129: [],
                        130: [2, 3, 4, 5],
                        131: [],
                        132: [3, 4, 5],
                        133: [],
                        134: [],
                        136: [1, 2, 3, 5],
                        137: [1, 2, 3],
                        138: [3],
                        139: [],
                        140: [],
                        141: [5],
                        142: [3, 5],
                        143: [],
                        144: [],
                        145: [],
                        147: [],
                        148: [],
                        149: [5],
                        150: [1],
                        151: [1, 2, 3],
                        152: [5],
                        153: [],
                        154: [3, 5],
                        155: [],
                        156: [2, 3, 4, 5],
                        157: [],
                        158: [],
                        159: [],
                        160: [],
                        161: [],
                        162: [1, 2, 3, 5],
                        163: [3, 4, 5],
                        164: [4],
                        165: [],
                        167: [],
                        168: [],
                        169: [2, 3, 5],
                        170: [1, 2, 3, 4, 5],
                        171: [],
                        173: [],
                        174: [3],
                        175: [],
                        177: [5],
                        178: [1, 2, 3, 4, 5],
                        179: [],
                        180: [3],
                        182: [],
                        183: [3, 4, 5],
                        184: [],
                        185: [],
                        188: [1, 2, 3, 4, 5],
                        189: [],
                        190: [],
                        191: [],
                        192: [],
                        193: [],
                        194: [1],
                        195: [1, 2, 3],
                        196: [3, 5],
                        197: [],
                        198: [],
                        199: [],
                        200: [1, 2, 3, 4, 5],
                        201: [5],
                        202: [],
                        203: [1, 2, 3, 4, 5],
                        205: [3, 5],
                        206: [],
                        208: [],
                        209: [2, 3, 5],
                        210: [],
                        211: [],
                        212: [1, 2, 3, 4, 5],
                        213: [2, 3, 5],
                        214: [],
                        215: [],
                        216: [1, 2, 3, 4, 5],
                        217: [1, 3],
                        218: [1, 2, 3, 4, 5],
                        221: [],
                        223: [1, 5],
                        224: [1, 3, 5],
                        225: [1, 2, 3, 5],
                        226: [2, 3, 4, 5],
                        227: [1, 3, 4, 5],
                        228: [],
                        229: [],
                        230: [],
                        231: [],
                        232: [1, 3, 5],
                        234: [5],
                        235: [2, 3, 4, 5],
                        236: [3, 4],
                        237: [1, 2, 3, 4, 5],
                        238: [1, 2, 3, 4, 5],
                        239: [1, 3, 4, 5],
                        240: [1, 4, 5],
                        241: [5],
                        242: [1, 2, 3, 4, 5],
                        243: [],
                        244: [],
                        245: [1, 2, 3, 4, 5],
                        246: [5],
                        248: [3, 4, 5],
                        249: [],
                        250: [1],
                        251: [2, 3, 4, 5],
                        252: [1, 2, 3, 4, 5],
                        253: [],
                        254: [1, 2, 3, 5],
                        255: [1],
                        256: [2, 4, 5],
                        257: [],
                        258: [1, 2, 3, 5],
                        259: [1, 3, 5],
                        260: [1, 2, 5],
                        261: [],
                        262: [],
                        263: [5],
                        264: [],
                        265: [1, 5],
                        266: [],
                        268: [],
                        269: [],
                        270: [],
                        272: [],
                        273: [3, 4, 5],
                        274: [],
                        275: [],
                        276: [],
                        277: [],
                        278: [5],
                        279: [],
                        280: [1, 2, 3, 4, 5],
                        281: [],
                        282: [5],
                        284: [2, 3, 4, 5],
                        285: [],
                        287: [1, 3, 4],
                        288: [1, 3, 4, 5],
                        289: [],
                        290: [],
                        291: [3, 5],
                        294: [1, 2, 3, 4, 5],
                        295: [],
                        297: [3, 4, 5],
                        298: [],
                        299: [2, 3, 4],
                        301: [1, 2, 3, 4, 5],
                        302: [],
                        303: [],
                        304: [],
                        308: [2, 3],
                        310: [4],
                        311: [],
                        312: [],
                        314: [],
                        315: [],
                        316: [],
                        317: [],
                        318: [1, 5],
                        319: [],
                        320: [],
                        321: [],
                        323: [1, 3, 4, 5],
                        325: [1, 2, 3, 4, 5],
                        326: [1, 2, 4],
                        328: [],
                        329: [],
                        330: [1, 3, 4, 5],
                        331: [3, 5],
                        333: [],
                        334: [1, 2, 3, 4],
                        335: [1, 3, 4, 5],
                        336: [1, 2, 3, 4],
                        337: [],
                        338: [1, 2, 3, 4, 5],
                        339: [1],
                        340: [],
                        341: [3],
                        343: [1, 2, 3, 4, 5],
                        344: [2, 4],
                        345: [],
                        346: [],
                        347: [1],
                        349: [],
                        350: [],
                        351: [],
                        354: [1, 3, 4, 5],
                        357: [],
                        358: [],
                        359: [],
                        360: [1],
                        361: [1],
                        362: [],
                        365: [1, 5],
                        366: [1, 2, 3, 4, 5],
                        368: [],
                        369: [],
                        371: [1, 2, 3, 4, 5],
                        373: [5],
                        374: [],
                        375: [],
                        376: [],
                        377: [],
                        378: [1],
                        380: [3, 4, 5],
                        381: [],
                        382: [3],
                        384: [1, 5],
                        385: [5],
                        387: [],
                        388: [2, 3, 4, 5],
                        389: [],
                        390: [5],
                        392: [1, 5],
                        394: [3, 4, 5],
                        395: [1, 2, 3, 5],
                        397: [2, 3, 4, 5],
                        398: [],
                        400: [],
                        402: [],
                        403: [],
                        404: [1, 5],
                        405: [1, 3, 4, 5],
                        407: [3, 4, 5],
                        408: [1, 3, 4, 5],
                        409: [1, 3, 5],
                        410: [],
                        412: [],
                        413: [],
                        415: [1],
                        416: [],
                        418: [3],
                        421: [1, 2, 3, 4, 5],
                        422: [],
                        423: [],
                        424: [3, 5],
                        425: [1, 2, 3, 4, 5],
                        426: [1, 3, 5],
                        427: [],
                        428: [1, 3, 4, 5],
                        429: [],
                        430: [3],
                        431: [1, 5],
                        434: [2, 4],
                        435: [],
                        436: [1, 5],
                        438: [],
                        439: [],
                        440: [1, 2, 3, 4, 5],
                        442: [],
                        443: [1, 5],
                        444: [1, 3, 4, 5],
                        447: [],
                        448: [1, 2, 3, 4, 5],
                        449: [1, 3, 5],
                        450: [],
                        452: [5],
                        454: [5],
                        455: [],
                        458: [1, 2, 3, 4, 5],
                        459: [1, 3, 5],
                        461: [],
                        462: [],
                        464: [5],
                        465: [],
                        466: [],
                        467: [],
                        468: [2, 3, 4, 5],
                        469: [1, 2, 3, 4, 5],
                        471: [],
                        473: [1, 2],
                        474: [1, 2],
                        475: [4, 5],
                        476: [1, 2, 3, 4, 5],
                        478: [2],
                        479: [],
                        480: [1, 4, 5],
                        482: [],
                        484: [5],
                        486: [1, 5],
                        487: [1, 2, 3, 5],
                        488: [1, 2, 3, 4, 5],
                        489: [],
                        490: [],
                        491: [],
                        492: [1, 5],
                        493: [5],
                        494: [],
                        495: [],
                        496: [],
                        497: [],
                        498: [3],
                        499: [],
                        500: [],
                        501: [],
                        502: [3],
                        504: [],
                        505: [],
                        506: [],
                        507: [1, 2, 3, 5],
                        508: [],
                        509: [],
                        511: [],
                        512: [],
                        513: [],
                        514: [],
                        515: [5],
                        516: [],
                        517: [3],
                        518: [5],
                        519: [3, 4, 5],
                        520: [5],
                        521: [3, 5],
                        522: [],
                        523: [],
                        524: [],
                        525: [5],
                        527: [],
                        528: [],
                        529: [],
                        530: [],
                        531: [],
                        534: [],
                        535: [],
                        536: [3, 5],
                        537: [1, 2, 3, 4, 5],
                        539: [1, 2, 3, 4, 5],
                        540: [],
                        541: [1, 2, 3, 4, 5],
                        542: [1, 2, 3, 4, 5],
                        543: [3, 4, 5],
                        544: [1, 5],
                        545: [],
                        546: [],
                        547: [],
                        548: [],
                        549: [],
                        550: [],
                        551: [3],
                        553: [],
                        554: [],
                        556: [],
                        559: [1, 2, 3, 4, 5],
                        560: [4],
                        565: [],
                        568: [],
                        569: [],
                        570: [],
                        571: [],
                        572: [5],
                        573: [1],
                        574: [],
                        576: [1, 3, 4, 5],
                        577: [1, 2, 3, 4, 5],
                        578: [],
                        579: [],
                        580: [1, 2, 3, 4, 5],
                        581: [1, 2, 3, 4, 5],
                        584: [1],
                        587: [],
                        590: [1, 2, 3, 4, 5],
                        591: [],
                        592: [],
                        593: [],
                        596: [5],
                        597: [3, 5],
                        598: [3, 4, 5],
                        599: [3, 4, 5],
                        601: [],
                        602: [3, 4, 5],
                        604: [],
                        606: [3, 4, 5],
                        607: [],
                        608: [],
                        609: [],
                        610: [1, 2, 3, 4, 5],
                        612: [3],
                        613: [3, 4, 5],
                        614: [],
                        615: [],
                        617: [1],
                        618: [],
                        619: [],
                        620: [],
                        621: [1, 5],
                        623: [],
                        624: [],
                        625: [],
                        626: [1],
                        627: [],
                        628: [2, 3],
                        630: [],
                        631: [],
                        635: [],
                        638: [],
                        639: [],
                        644: [],
                        645: [],
                        646: [],
                        647: [1, 3, 5],
                        648: [],
                        650: [],
                        652: [1, 2, 3, 4, 5],
                        653: [5],
                        654: [],
                        655: [],
                        656: [5],
                        657: [1, 3, 5],
                        658: [],
                        659: [5],
                        660: [1, 2, 3, 4, 5],
                        662: [],
                        663: [],
                        665: [],
                        666: [],
                        667: [1, 2, 3, 4, 5],
                        668: [],
                        670: [],
                        674: [],
                        675: [],
                        676: [],
                        677: [],
                        682: [5],
                        684: [5],
                        685: [],
                        686: []
                    },
                    featuresIdsByVID: {
                        1: [],
                        2: [2],
                        3: [],
                        4: [2, 3],
                        6: [],
                        7: [],
                        8: [1, 2],
                        9: [1, 2, 3],
                        10: [2, 3],
                        11: [1, 2],
                        12: [3],
                        13: [2, 3],
                        14: [2, 3],
                        15: [],
                        16: [],
                        17: [2],
                        18: [],
                        19: [2],
                        20: [2],
                        21: [1, 2, 3],
                        22: [],
                        23: [1, 2, 3],
                        24: [1, 2, 3],
                        25: [1, 2, 3],
                        26: [],
                        27: [],
                        28: [3],
                        29: [1],
                        30: [2, 3],
                        31: [2],
                        32: [2, 3],
                        33: [2],
                        34: [],
                        35: [],
                        36: [1, 2, 3],
                        37: [1, 2],
                        38: [3],
                        39: [1, 2, 3],
                        40: [1, 2, 3],
                        41: [],
                        42: [1, 2],
                        43: [3],
                        44: [1, 2, 3],
                        45: [3],
                        46: [2],
                        47: [],
                        48: [1, 2, 3],
                        49: [1, 2, 3],
                        50: [1, 2],
                        51: [1, 2, 3],
                        52: [3],
                        53: [1, 2],
                        55: [1, 2, 3],
                        56: [],
                        57: [1, 2],
                        58: [2],
                        59: [3],
                        60: [1, 2, 3],
                        61: [3],
                        62: [],
                        63: [],
                        64: [],
                        65: [3],
                        66: [1, 2, 3],
                        67: [],
                        68: [2],
                        69: [1, 2, 3],
                        70: [3],
                        71: [1, 2, 3],
                        72: [],
                        73: [2, 3],
                        74: [],
                        75: [3],
                        76: [],
                        77: [2],
                        78: [],
                        79: [1, 2, 3],
                        80: [],
                        81: [1, 2, 3],
                        82: [3],
                        83: [],
                        84: [],
                        85: [1, 2, 3],
                        86: [3],
                        87: [2, 3],
                        88: [],
                        89: [2],
                        90: [],
                        91: [1, 2],
                        92: [1, 2, 3],
                        93: [],
                        94: [1, 2, 3],
                        95: [],
                        97: [1, 2],
                        98: [1, 2, 3],
                        100: [],
                        101: [1, 2, 3],
                        102: [],
                        104: [1, 2, 3],
                        105: [2, 3],
                        108: [3],
                        109: [1, 2, 3],
                        110: [],
                        111: [3],
                        112: [],
                        113: [],
                        114: [],
                        115: [1, 2, 3],
                        118: [2],
                        119: [1, 3],
                        120: [1],
                        122: [],
                        124: [3],
                        125: [],
                        126: [],
                        127: [3],
                        128: [1, 2, 3],
                        129: [1, 2, 3],
                        130: [1, 2],
                        131: [],
                        132: [1, 2],
                        133: [1, 2, 3],
                        134: [1, 2],
                        136: [2, 3],
                        137: [],
                        138: [],
                        139: [1, 2, 3],
                        140: [],
                        141: [3],
                        142: [3],
                        143: [],
                        144: [],
                        145: [],
                        147: [],
                        148: [2],
                        149: [],
                        150: [],
                        151: [3],
                        152: [],
                        153: [1, 2, 3],
                        154: [3],
                        155: [2],
                        156: [1],
                        157: [],
                        158: [1, 2, 3],
                        159: [],
                        160: [1, 2, 3],
                        161: [1, 2, 3],
                        162: [1, 2],
                        163: [1, 2],
                        164: [1],
                        165: [],
                        167: [1, 2, 3],
                        168: [1, 2, 3],
                        169: [1, 3],
                        170: [1, 2, 3],
                        171: [],
                        173: [1, 2, 3],
                        174: [],
                        175: [],
                        177: [],
                        178: [],
                        179: [1, 2, 3],
                        180: [3],
                        182: [1, 2, 3],
                        183: [2, 3],
                        184: [1, 2, 3],
                        185: [1, 2],
                        188: [1, 2, 3],
                        189: [3],
                        190: [],
                        191: [3],
                        192: [],
                        193: [3],
                        194: [],
                        195: [3],
                        196: [3],
                        197: [],
                        198: [],
                        199: [1, 2, 3],
                        200: [],
                        201: [1, 2, 3],
                        202: [1, 2, 3],
                        203: [],
                        205: [],
                        206: [1, 2, 3],
                        208: [1, 2, 3],
                        209: [3],
                        210: [1],
                        211: [1, 2, 3],
                        212: [],
                        213: [1, 2],
                        214: [],
                        215: [],
                        216: [],
                        217: [],
                        218: [2, 3],
                        221: [3],
                        223: [2],
                        224: [3],
                        225: [3],
                        226: [1],
                        227: [1, 2, 3],
                        228: [],
                        229: [],
                        230: [],
                        231: [],
                        232: [3],
                        234: [1, 2],
                        235: [2, 3],
                        236: [3],
                        237: [2, 3],
                        238: [1, 2, 3],
                        239: [],
                        240: [],
                        241: [1, 2, 3],
                        242: [2, 3],
                        243: [1, 2],
                        244: [1, 2],
                        245: [1, 2],
                        246: [],
                        248: [3],
                        249: [2, 3],
                        250: [],
                        251: [],
                        252: [3],
                        253: [1, 2, 3],
                        254: [3],
                        255: [],
                        256: [1, 2],
                        257: [1, 2],
                        258: [3],
                        259: [],
                        260: [3],
                        261: [1, 2],
                        262: [3],
                        263: [],
                        264: [2, 3],
                        265: [],
                        266: [1],
                        268: [1, 2, 3],
                        269: [1, 2, 3],
                        270: [],
                        272: [1, 2, 3],
                        273: [],
                        274: [2],
                        275: [1, 3],
                        276: [3],
                        277: [1, 2],
                        278: [],
                        279: [3],
                        280: [],
                        281: [1, 2],
                        282: [],
                        284: [1, 2, 3],
                        285: [],
                        287: [3],
                        288: [],
                        289: [3],
                        290: [],
                        291: [],
                        294: [3],
                        295: [2],
                        297: [],
                        298: [3],
                        299: [1, 2],
                        301: [1, 2],
                        302: [3],
                        303: [],
                        304: [1, 2, 3],
                        308: [],
                        310: [],
                        311: [3],
                        312: [],
                        314: [],
                        315: [3],
                        316: [3],
                        317: [2, 3],
                        318: [],
                        319: [3],
                        320: [2, 3],
                        321: [2],
                        323: [1, 2],
                        325: [1, 2, 3],
                        326: [],
                        328: [2],
                        329: [],
                        330: [],
                        331: [2, 3],
                        333: [1, 2, 3],
                        334: [2, 3],
                        335: [],
                        336: [3],
                        337: [1, 2],
                        338: [1, 2, 3],
                        339: [],
                        340: [1, 3],
                        341: [1, 2, 3],
                        343: [3],
                        344: [],
                        345: [1, 2, 3],
                        346: [],
                        347: [],
                        349: [2],
                        350: [1, 2],
                        351: [1, 2],
                        354: [],
                        357: [1, 2, 3],
                        358: [1],
                        359: [1, 2, 3],
                        360: [1, 2],
                        361: [1, 2],
                        362: [1, 2, 3],
                        365: [1, 3],
                        366: [1, 2, 3],
                        368: [1, 2, 3],
                        369: [],
                        371: [3],
                        373: [1, 2],
                        374: [1, 2],
                        375: [3],
                        376: [1, 2, 3],
                        377: [3],
                        378: [],
                        380: [2, 3],
                        381: [],
                        382: [],
                        384: [],
                        385: [2],
                        387: [],
                        388: [1, 2, 3],
                        389: [],
                        390: [1, 3],
                        392: [3],
                        394: [1, 2],
                        395: [],
                        397: [1, 2, 3],
                        398: [3],
                        400: [2, 3],
                        402: [2],
                        403: [3],
                        404: [],
                        405: [2],
                        407: [1, 2, 3],
                        408: [3],
                        409: [1, 2],
                        410: [],
                        412: [],
                        413: [1, 2],
                        415: [],
                        416: [1, 2, 3],
                        418: [3],
                        421: [3],
                        422: [],
                        423: [],
                        424: [],
                        425: [1, 2, 3],
                        426: [2],
                        427: [3],
                        428: [],
                        429: [1, 2, 3],
                        430: [],
                        431: [1, 3],
                        434: [1, 3],
                        435: [1, 3],
                        436: [1, 2, 3],
                        438: [2, 3],
                        439: [1, 2, 3],
                        440: [],
                        442: [],
                        443: [2],
                        444: [3],
                        447: [3],
                        448: [1, 2, 3],
                        449: [3],
                        450: [1, 3],
                        452: [2],
                        454: [3],
                        455: [2, 3],
                        458: [1],
                        459: [],
                        461: [],
                        462: [1, 2, 3],
                        464: [2],
                        465: [1],
                        466: [],
                        467: [2],
                        468: [1, 2],
                        469: [1, 2],
                        471: [1, 2, 3],
                        473: [],
                        474: [],
                        475: [1, 2, 3],
                        476: [1],
                        478: [],
                        479: [2, 3],
                        480: [1, 2, 3],
                        482: [],
                        484: [],
                        486: [],
                        487: [1],
                        488: [],
                        489: [],
                        490: [],
                        491: [],
                        492: [1],
                        493: [2],
                        494: [],
                        495: [3],
                        496: [],
                        497: [1, 2, 3],
                        498: [3],
                        499: [],
                        500: [2, 3],
                        501: [1, 2],
                        502: [3],
                        504: [1, 2, 3],
                        505: [],
                        506: [2],
                        507: [1, 2, 3],
                        508: [1, 2, 3],
                        509: [],
                        511: [1, 2, 3],
                        512: [3],
                        513: [1, 2],
                        514: [],
                        515: [1, 2],
                        516: [],
                        517: [2],
                        518: [2, 3],
                        519: [1, 2, 3],
                        520: [],
                        521: [],
                        522: [1, 2],
                        523: [1, 2, 3],
                        524: [2, 3],
                        525: [3],
                        527: [3],
                        528: [],
                        529: [1, 2, 3],
                        530: [3],
                        531: [],
                        534: [2, 3],
                        535: [],
                        536: [1, 2],
                        537: [1, 2, 3],
                        539: [],
                        540: [],
                        541: [3],
                        542: [],
                        543: [],
                        544: [],
                        545: [],
                        546: [3],
                        547: [],
                        548: [2, 3],
                        549: [2],
                        550: [1, 3],
                        551: [],
                        553: [2, 3],
                        554: [1, 2, 3],
                        556: [3],
                        559: [2],
                        560: [],
                        565: [],
                        568: [3],
                        569: [1, 3],
                        570: [1, 2],
                        571: [3],
                        572: [],
                        573: [2],
                        574: [1, 2],
                        576: [3],
                        577: [1, 2],
                        578: [3],
                        579: [],
                        580: [1, 2, 3],
                        581: [1, 2, 3],
                        584: [],
                        587: [1, 3],
                        590: [],
                        591: [1, 2],
                        592: [],
                        593: [1, 2, 3],
                        596: [3],
                        597: [],
                        598: [3],
                        599: [2, 3],
                        601: [],
                        602: [],
                        604: [1, 2, 3],
                        606: [],
                        607: [3],
                        608: [1, 2, 3],
                        609: [1, 2, 3],
                        610: [1, 2, 3],
                        612: [],
                        613: [],
                        614: [1, 2, 3],
                        615: [],
                        617: [],
                        618: [3],
                        619: [1, 2, 3],
                        620: [],
                        621: [2, 3],
                        623: [],
                        624: [1, 2],
                        625: [2],
                        626: [3],
                        627: [],
                        628: [2, 3],
                        630: [3],
                        631: [1, 2, 3],
                        635: [],
                        638: [],
                        639: [],
                        644: [],
                        645: [2, 3],
                        646: [1, 2, 3],
                        647: [],
                        648: [1, 2, 3],
                        650: [1, 2, 3],
                        652: [1, 2, 3],
                        653: [1],
                        654: [1, 2],
                        655: [2, 3],
                        656: [],
                        657: [3],
                        658: [],
                        659: [],
                        660: [2, 3],
                        662: [3],
                        663: [1, 2, 3],
                        665: [1, 2, 3],
                        666: [2, 3],
                        667: [3],
                        668: [],
                        670: [3],
                        674: [1, 2, 3],
                        675: [],
                        676: [1, 2, 3],
                        677: [],
                        682: [1, 2, 3],
                        684: [],
                        685: [1, 2, 3],
                        686: [1, 2]
                    }
                };
            n.d(t, "a", function() {
                return H
            });
            var V = function(e) {
                    return new function e(t, n, a, i, o) {
                        var s = this,
                            d = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        c()(this, e), u()(this, "shortVendorList", void 0), u()(this, "consentData", void 0), u()(this, "canPersonalise", void 0), u()(this, "allowedVendorIds", void 0), u()(this, "vendorConsentData", void 0), u()(this, "vendorConsentResponse", void 0), u()(this, "getVendorConsentsObject", void 0), u()(this, "getVendorConsentsObject", function(e) {
                            if (s.vendorConsentData) {
                                var t = function(e, t, n) {
                                    var a = e.maxVendorId,
                                        i = void 0 === a ? 0 : a,
                                        o = e.selectedVendorIds,
                                        r = void 0 === o ? [] : o,
                                        s = e.selectedPurposeIds,
                                        c = void 0 === s ? [] : s,
                                        d = {};
                                    t.purposeIDs.forEach(function(e) {
                                        d[e] = !1
                                    }), c.forEach(function(e) {
                                        d[e] = !0
                                    });
                                    var u = {};
                                    if (n && n.length) n.forEach(function(e) {
                                        u[e] = !1
                                    });
                                    else
                                        for (var l = 1; l <= i; l += 1) u[l] = !1;
                                    return r.filter(function(e) {
                                        return e in u
                                    }).forEach(function(e) {
                                        u[e] = !0
                                    }), {
                                        maxVendorId: i,
                                        purposeConsents: d,
                                        vendorConsents: u
                                    }
                                }(s.vendorConsentData, s.shortVendorList, e);
                                return y.info("GetVendorConsentsObject: Successfully generated response"), r()({}, s.consentData, t)
                            }
                        }), this.shortVendorList = o, this.canPersonalise = i, this.allowedVendorIds = Object.keys(o.purposesByVID).map(function(e) {
                            return parseInt(e, 10)
                        }), this.consentData = F(t, n, a, o.version), this.vendorConsentData = z(t, n, a, i, o, d)
                    }(b.b, b.c, b.e, function(e) {
                        var t = Object(f.d)(e);
                        return !(!t || "1" !== t.split(".")[0]) || (!t || "0" !== t.split(".")[0]) && null
                    }(b.d), G, e)
                },
                N = function e(t) {
                    var n = this;
                    c()(this, e), u()(this, "isLoaded", void 0), u()(this, "cmpReady", void 0), u()(this, "cmpConfig", void 0), u()(this, "eventListeners", void 0), u()(this, "commandQueue", void 0), u()(this, "store", void 0), u()(this, "generateConsentString", void 0), u()(this, "processCommand", void 0), u()(this, "generateConsentString", function() {
                        var e = n.store,
                            t = e.vendorConsentData,
                            a = e.shortVendorList;
                        if (n.store.vendorConsentData && n.store.shortVendorList) return y.info("GenerateConsentString: Persisted vendor consent data found"),
                            function(e, t) {
                                var n = e.selectedPurposeIds,
                                    a = void 0 === n ? [] : n,
                                    i = e.selectedVendorIds,
                                    o = void 0 === i ? [] : i,
                                    s = e.maxVendorId,
                                    c = t ? t.purposeIDs : [],
                                    d = S(r()({}, e, {
                                        maxVendorId: s,
                                        purposeIdBitString: T(c, a),
                                        isRange: !1,
                                        vendorIdBitString: M(s, o)
                                    })),
                                    u = function(e) {
                                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = [], a = [], i = 1; i <= e; i += 1)
                                            if (t.includes(i) && n.push(i), (!t.includes(i) || i === e) && n.length) {
                                                var o = n.shift(),
                                                    r = n.pop();
                                                n = [], a.push({
                                                    isRange: "number" == typeof r,
                                                    startVendorId: o,
                                                    endVendorId: r
                                                })
                                            }
                                        return a
                                    }(s, o),
                                    l = S(r()({}, e, {
                                        maxVendorId: s,
                                        purposeIdBitString: T(c, a),
                                        isRange: !0,
                                        defaultConsent: !1,
                                        numEntries: u.length,
                                        vendorRangeList: u
                                    }));
                                return d && l ? d.length < l.length ? d : l : (y.error("Could not encode vendor consent data"), "")
                            }(r()({}, t, {
                                shortVendorList: a
                            }));
                        y.info("GenerateConsentString: No vendor consent data found")
                    }), u()(this, "commands", {
                        getVendorConsents: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                                a = n.store.getVendorConsentsObject(e) || {};
                            t(r()({
                                gdprApplies: n.cmpConfig.gdprApplies,
                                hasGlobalScope: n.cmpConfig.storeConsentGlobally,
                                metadata: n.generateConsentString() || void 0
                            }, a), !0)
                        },
                        getConsentData: function(e) {
                            (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {})({
                                gdprApplies: n.cmpConfig.gdprApplies,
                                hasGlobalScope: n.cmpConfig.storeConsentGlobally,
                                consentData: n.generateConsentString() || void 0
                            }, !0)
                        },
                        getVendorList: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                            Object(p.a)(l.a.get("libs.cmp.fullVendorDataUrl"), {
                                mode: "cors"
                            }).then(function(n) {
                                var a = (n || {}).vendorListVersion;
                                e && e !== a ? t(null, !1) : t(n, !0)
                            }).then(void 0, function(e) {
                                y.error("ERROR fetching fullvendorlist: ", e), t(null, !1)
                            })
                        },
                        ping: function(e) {
                            (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {})({
                                gdprAppliesGlobally: n.cmpConfig.storeConsentGlobally,
                                cmpLoaded: !0
                            }, !0)
                        },
                        addEventListener: function(e, t) {
                            var a = n.eventListeners[e] || [];
                            a.push(t), n.eventListeners[e] = a, "isLoaded" === e && n.isLoaded && t({
                                event: e
                            }), "cmpReady" === e && n.cmpReady && t({
                                event: e
                            })
                        }
                    }), u()(this, "processCommand", function(e, t) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                        "function" != typeof n.commands[e] ? y.error('Invalid CMP command "'.concat(e, '"')) : (y.info("Proccess command: ".concat(e, ", parameter: ").concat(t || "unknown")), n.commands[e](t, a))
                    }), u()(this, "processCommandQueue", function() {
                        var e = i()(n.commandQueue);
                        e.length && (y.info("Process ".concat(e.length, " queued commands")), n.commandQueue = [], e.forEach(function(e) {
                            var t = e.callId,
                                a = e.command,
                                i = e.parameter,
                                o = e.callback,
                                r = e.event;
                            r ? n.processCommand(a, i, function(e) {
                                return r.source.postMessage({
                                    __cmpReturn: {
                                        callId: t,
                                        command: a,
                                        returnValue: e
                                    }
                                }, r.origin)
                            }) : n.processCommand(a, i, o)
                        }))
                    }), u()(this, "receiveMessage", function(e) {
                        var t = e.data,
                            a = e.origin,
                            i = e.source;
                        if (t instanceof Object) {
                            var o = t.__cmpCall;
                            if (o) {
                                y.info("Message from: ".concat(a));
                                var r = o.callId,
                                    s = o.command,
                                    c = o.parameter;
                                i && i.postMessage ? n.processCommand(s, c, function(e) {
                                    return i.postMessage({
                                        __cmpReturn: {
                                            callId: r,
                                            command: s,
                                            returnValue: e
                                        }
                                    }, a)
                                }) : y.debug("Missing source: Unable to process command from ".concat(a))
                            }
                        }
                    }), u()(this, "notify", function(e, t) {
                        y.info("Notify event: ".concat(e)), (n.eventListeners[e] || []).forEach(function(n) {
                            n({
                                event: e,
                                data: t
                            })
                        }), "onSubmit" === e && n.processCommandQueue()
                    }), this.isLoaded = !1, this.cmpReady = !1, this.store = t, this.commandQueue = [], this.eventListeners = {}, this.processCommand.receiveMessage = this.receiveMessage, this.cmpConfig = b.h, Object(m.d)().cmpdebug && (this.cmpConfig.logging = "debug", y.info("Set logging level to DEBUG"))
                },
                H = function() {
                    if (window[b.a]) {
                        var e = (window[b.a] || {}).commandQueue,
                            t = void 0 === e ? [] : e,
                            n = Object(h.d)(g.a, "variant"),
                            a = V(n),
                            i = new N(a);
                        window[b.a] = i.processCommand, i.commandQueue = t, i.isLoaded = !0, i.notify("isLoaded"), i.processCommandQueue(), i.cmpReady = !0, i.notify("cmpReady"), n && y.info("CMP customise is ACTIVE")
                    }
                }
        },
        411: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(7),
                o = n(3),
                r = n(168),
                s = n(17),
                c = n(120),
                d = n(156),
                u = n(96),
                l = n(24),
                f = {
                    bodySelector: ".js-article__body",
                    slotSelector: " > p",
                    minAbove: 500,
                    minBelow: 400,
                    clearContentMeta: 0,
                    selectors: {
                        " .element-rich-link": {
                            minAbove: 100,
                            minBelow: 400
                        },
                        " .element-image": {
                            minAbove: 440,
                            minBelow: 440
                        },
                        " .player": {
                            minAbove: 50,
                            minBelow: 50
                        },
                        " > h1": {
                            minAbove: 50,
                            minBelow: 50
                        },
                        " > h2": {
                            minAbove: 50,
                            minBelow: 50
                        },
                        " > *:not(p):not(h2):not(blockquote)": {
                            minAbove: 50,
                            minBelow: 50
                        },
                        " .ad-slot": {
                            minAbove: 100,
                            minBelow: 100
                        },
                        " .element-pullquote": {
                            minAbove: 400,
                            minBelow: 400
                        }
                    },
                    fromBottom: !0
                },
                m = {
                    bodySelector: ".js-article__body",
                    slotSelector: " > p",
                    minAbove: 500,
                    minBelow: 400,
                    clearContentMeta: 0,
                    selectors: {
                        " .element-rich-link": {
                            minAbove: 400,
                            minBelow: 400
                        },
                        " .element-image": {
                            minAbove: 440,
                            minBelow: 440
                        },
                        " .player": {
                            minAbove: 50,
                            minBelow: 50
                        },
                        " > h1": {
                            minAbove: 50,
                            minBelow: 50
                        },
                        " > h2": {
                            minAbove: 50,
                            minBelow: 50
                        },
                        " > *:not(p):not(h2):not(blockquote)": {
                            minAbove: 50,
                            minBelow: 50
                        },
                        " .ad-slot": {
                            minAbove: 400,
                            minBelow: 400
                        },
                        " .ad-slot--im": {
                            minAbove: 400,
                            minBelow: 400
                        },
                        " .element-pullquote": {
                            minAbove: 400,
                            minBelow: 400
                        }
                    },
                    fromBottom: !0
                },
                p = {
                    bodySelector: ".js-article__body",
                    slotSelector: " > p",
                    minAbove: 500,
                    minBelow: 400,
                    clearContentMeta: 0,
                    selectors: {
                        " .element-rich-link": {
                            minAbove: 400,
                            minBelow: 400
                        },
                        " .element-image": {
                            minAbove: 440,
                            minBelow: 440
                        },
                        " .player": {
                            minAbove: 50,
                            minBelow: 50
                        },
                        " > h1": {
                            minAbove: 50,
                            minBelow: 50
                        },
                        " > h2": {
                            minAbove: 50,
                            minBelow: 50
                        },
                        " > *:not(p):not(h2):not(blockquote)": {
                            minAbove: 50,
                            minBelow: 50
                        },
                        " .ad-slot": {
                            minAbove: 400,
                            minBelow: 400
                        },
                        " .ad-slot--im": {
                            minAbove: 400,
                            minBelow: 400
                        },
                        " .element-pullquote": {
                            minAbove: 400,
                            minBelow: 400
                        }
                    },
                    fromBottom: !0
                },
                g = function(e) {
                    var t = Object(u.a)("carrot"),
                        n = e.slice(1);
                    return o.a.write(function() {
                        t.forEach(function(e) {
                            n[0] && n[0].parentNode && n[0].parentNode.insertBefore(e, n[0])
                        })
                    }).then(function() {
                        return Object(c.a)(t[0], !0)
                    })
                },
                h = function() {
                    return l.a.carrotTrafficDriver ? r.a.fillSpace(function() {
                        switch (Object(i.d)()) {
                            case "mobile":
                            case "mobileMedium":
                            case "mobileLandscape":
                            case "phablet":
                                return p;
                            case "tablet":
                            case "desktop":
                                return m;
                            default:
                                return f
                        }
                    }(), g, {
                        waitForImages: !0,
                        waitForLinks: !0,
                        waitForInteractives: !0
                    }) : Promise.resolve()
                };
            n.d(t, "a", function() {
                return C
            });
            var b, v = a.a.get("page.isPaidContent", !1),
                y = {
                    minAbove: 500,
                    minBelow: 500
                },
                w = function(e, t, n, a, i) {
                    var r = Object(u.a)(n, {
                        name: t,
                        classes: a,
                        sizes: i
                    });
                    return o.a.write(function() {
                        return r.forEach(function(t) {
                            e.parentNode && e.parentNode.insertBefore(t, e)
                        })
                    }).then(function() {
                        var e = ["im", "carrot"].includes(t);
                        Object(c.a)(r[0], e)
                    })
                },
                k = function(e) {
                    return function(t) {
                        return (!b || Math.abs(t.top - b.top) - e >= y.minBelow) && (b = t, !0)
                    }
                },
                _ = function() {
                    return a.a.get("isDotcomRendering", !1) ? ".article-body-commercial-selector" : ".js-article__body"
                },
                j = function(e) {
                    var t = a.a.get("page.isImmersive"),
                        n = {
                            bodySelector: _(),
                            slotSelector: " > p",
                            minAbove: t ? 700 : 300,
                            minBelow: 700,
                            selectors: {
                                " > h2": {
                                    minAbove: 5,
                                    minBelow: 190
                                },
                                " .ad-slot": y,
                                " > :not(p):not(h2):not(.ad-slot)": {
                                    minAbove: 35,
                                    minBelow: 400
                                },
                                " figure.element--immersive": {
                                    minAbove: 0,
                                    minBelow: 600
                                }
                            },
                            filter: k(s.a.mpu.height)
                        },
                        i = {
                            bodySelector: _(),
                            slotSelector: " > p",
                            minAbove: v ? 1600 : 1e3,
                            minBelow: 800,
                            selectors: {
                                " .ad-slot": y,
                                " figure.element--immersive": {
                                    minAbove: 0,
                                    minBelow: 600
                                }
                            },
                            filter: k(s.a.halfPage.height)
                        },
                        o = e ? n : i;
                    return r.a.fillSpace(o, function(t) {
                        var n = t.slice(0, e ? 1 : t.length).map(function(t, n) {
                            return w(t, "inline".concat(n + (e ? 1 : 2)), "inline", "inline".concat(e ? "" : " offset-right"), e ? null : {
                                desktop: [s.a.halfPage, s.a.skyscraper]
                            })
                        });
                        return Promise.all(n).then(function() {
                            return n.length
                        })
                    }, {
                        waitForImages: !0,
                        waitForLinks: !0,
                        waitForInteractives: !0
                    })
                },
                O = function() {
                    var e;
                    return Object(i.m)({
                        max: "mobileLandscape"
                    }) ? (e = {
                        bodySelector: _(),
                        slotSelector: " > p",
                        minAbove: 200,
                        minBelow: 200,
                        selectors: {
                            " > h2": {
                                minAbove: 100,
                                minBelow: 250
                            },
                            " .ad-slot": y,
                            " > :not(p):not(h2):not(.ad-slot)": {
                                minAbove: 35,
                                minBelow: 200
                            },
                            fromBottom: !0
                        },
                        filter: k(s.a.mpu.height)
                    }, r.a.fillSpace(e, function(e) {
                        var t = e.map(function(e, t) {
                            return w(e, 0 === t ? "top-above-nav" : "inline".concat(t), 0 === t ? "top-above-nav" : "inline", "inline")
                        });
                        return Promise.all(t).then(function() {
                            return t.length
                        })
                    }, {
                        waitForImages: !0,
                        waitForLinks: !0,
                        waitForInteractives: !0
                    })) : v ? j(!1) : j(!0).then(function() {
                        return j(!1)
                    })
                },
                C = function() {
                    if (!l.a.articleBodyAdverts) return Promise.resolve(!1);
                    var e, t = a.a.get("page.hasInlineMerchandise") ? (e = {
                        bodySelector: _(),
                        slotSelector: " > p",
                        minAbove: 300,
                        minBelow: 0,
                        selectors: {
                            " > .merch": {
                                minAbove: 0,
                                minBelow: 0
                            },
                            " > header": {
                                minAbove: Object(i.m)({
                                    max: "tablet"
                                }) ? 300 : 700,
                                minBelow: 0
                            },
                            " > h2": {
                                minAbove: 100,
                                minBelow: 250
                            },
                            " .ad-slot": y,
                            " > :not(p):not(h2):not(.ad-slot)": {
                                minAbove: 200,
                                minBelow: 400
                            }
                        }
                    }, r.a.fillSpace(e, function(e) {
                        return w(e[0], "im", "im").then(function() {
                            return !0
                        })
                    }, {
                        waitForImages: !0,
                        waitForLinks: !0,
                        waitForInteractives: !0
                    })) : Promise.resolve(!1);
                    return t.then(function(e) {
                        return e ? Object(d.a)("dfp-ad--im") : Promise.resolve()
                    }).then(O).then(h), t
                }
        },
        428: function(e, t) {
            e.exports = function(e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
            }
        },
        429: function(e, t, n) {
            var a = n(201);

            function i(t, n, o) {
                return function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }() ? e.exports = i = Reflect.construct : e.exports = i = function(e, t, n) {
                    var i = [null];
                    i.push.apply(i, t);
                    var o = new(Function.bind.apply(e, i));
                    return n && a(o, n.prototype), o
                }, i.apply(null, arguments)
            }
            e.exports = i
        },
        440: function(e, t, n) {
            var a = n(188),
                i = n(432),
                o = n(268),
                r = n(249),
                s = a(function(e, t, n) {
                    var a = 1;
                    if (n.length) {
                        var c = r(n, o(s));
                        a |= 32
                    }
                    return i(e, a, t, n, c)
                });
            s.placeholder = {}, e.exports = s
        },
        652: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "bootCommercial", function() {
                return I
            });
            var a = n(0),
                i = n(159),
                o = n(47),
                r = n(14),
                s = n(381),
                c = n(382),
                d = n(411),
                u = n(384),
                l = n(258),
                f = n(259),
                m = n(410),
                p = n(385),
                g = n(386),
                h = n(387),
                b = n(388),
                v = n(408),
                y = n(260),
                w = n(401),
                k = n(402),
                _ = n(409),
                j = n(404),
                O = n(405),
                C = n(104),
                P = n(24),
                B = n(406),
                x = n(407),
                A = [
                    ["cm-adFreeSlotRemove", f.a],
                    ["cm-closeDisabledSlots", l.a],
                    ["cm-prepare-cmp", m.a],
                    ["cm-track-cmp-consent", h.a],
                    ["cm-checkDispatcher", B.a],
                    ["cm-lotame-cmp", p.a],
                    ["cm-lotame-data-extract", g.a]
                ];
            P.a.adFree || A.push(["cm-prepare-prebid", y.a], ["cm-prepare-googletag", v.a], ["cm-thirdPartyTags", _.a], ["cm-prepare-adverification", b.a], ["cm-mobileSticky", u.a], ["cm-highMerch", s.a], ["cm-articleAsideAdverts", c.a], ["cm-articleBodyAdverts", d.a], ["cm-liveblogAdverts", w.a], ["cm-stickyTopBanner", k.a], ["cm-paidContainers", O.a], ["cm-paidforBand", j.a], ["cm-commentAdverts", x.a]);
            var L = function() {
                    var e = [];
                    return A.forEach(function(t) {
                        var n = t[0],
                            a = t[1];
                        Object(i.b)([
                            [n, function() {
                                var t = a();
                                e.push(t)
                            }]
                        ], {
                            feature: "commercial"
                        })
                    }), Promise.all(e)
                },
                I = function() {
                    return Object(o.c)("commercial start"), Object(i.b)([
                        ["ga-user-timing-commercial-start", function() {
                            Object(C.d)("Javascript Load", "commercialStart", "Commercial start parse time")
                        }]
                    ], {
                        feature: "commercial"
                    }), window.googletag = {
                        cmd: []
                    }, (a.a.get("page.isHosted") ? new Promise(function(e) {
                        n.e(12).then(function(t) {
                            var a = n(559),
                                i = n(650),
                                o = n(560),
                                r = n(535),
                                s = n(561);
                            A.push(["cm-hostedAbout", a.init], ["cm-hostedVideo", i.initHostedVideo], ["cm-hostedGallery", o.init], ["cm-hostedOnward", s.loadOnwardComponent], ["cm-hostedOJCarousel", r.initHostedCarousel]), e()
                        }.bind(null, n)).catch(n.oe)
                    }) : Promise.resolve()).then(L).then(function() {
                        Object(o.c)("commercial end"), Object(i.b)([
                            ["ga-user-timing-commercial-end", function() {
                                Object(C.d)("Javascript Load", "commercialEnd", "Commercial end parse time")
                            }]
                        ], {
                            feature: "commercial"
                        })
                    }).catch(function(e) {
                        Object(r.a)(e, {
                            feature: "commercial"
                        }, !1)
                    })
                }
        },
        66: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n(19),
                i = (n(68), function(e) {
                    return e in a.a.advertIds ? a.a.adverts[a.a.advertIds[e]] : null
                })
        },
        68: function(e, t, n) {
            "use strict";
            var a = n(13),
                i = n.n(a),
                o = n(16),
                r = n.n(o),
                s = n(21),
                c = n.n(s),
                d = n(1),
                u = n.n(d),
                l = n(7),
                f = n(47),
                m = n(20),
                p = n(0),
                g = n(341),
                h = n.n(g),
                b = n(198),
                v = n.n(b),
                y = n(33),
                w = n.n(y),
                k = n(263),
                _ = w()(function() {
                    var e = Object(m.d)();
                    return e["ad-unit"] ? "/".concat(p.a.get("page.dfpAccountId"), "/").concat(e["ad-unit"]) : p.a.get("page.adUnit")
                }),
                j = function(e) {
                    var t = function(e) {
                        var t = window.googletag.sizeMapping();
                        return l.c.filter(function(t) {
                            return t.name in e
                        }).forEach(function(n) {
                            t.addSize([n.width, 0], e[n.name])
                        }), t.build()
                    }(e);
                    return {
                        sizeMapping: t,
                        sizes: h()(v()(t.map(function(e) {
                            return e[1]
                        })), function(e) {
                            return "".concat(e[0], "-").concat(e[1])
                        })
                    }
                },
                O = function(e, t) {
                    var n, a, i = e.getAttribute("data-name"),
                        o = j(t),
                        r = e.id;
                    if (e.getAttribute("data-out-of-page") ? (n = window.googletag.defineOutOfPageSlot(_(), r).defineSizeMapping(o.sizeMapping), a = Promise.resolve()) : (n = window.googletag.defineSlot(_(), o.sizes, r).defineSizeMapping(o.sizeMapping), "string" == typeof i && ("inline1" === i || "top-above-nav" === i) && n.setSafeFrameConfig({
                            allowOverlayExpansion: !1,
                            allowPushExpansion: !0,
                            sandbox: !0
                        }), a = function(e, t) {
                            return ["merchandising-high", "merchandising"].includes(i) ? Object(k.a)().then(function(t) {
                                t.forEach(function(t, n) {
                                    e.setTargeting(n, t)
                                })
                            }) : Promise.resolve()
                        }(n)), p.a.get("switches.iasAdTargeting", !1)) {
                        window.__iasPET = window.__iasPET || {};
                        var s = window.__iasPET;
                        s.queue = s.queue || [], s.pubId = "10249";
                        var c, d, u = [{
                                adSlotId: r,
                                size: n.getSizes().filter(function(e) {
                                    return "fluid" !== e
                                }).map(function(e) {
                                    return [e.getWidth(), e.getHeight()]
                                }),
                                adUnitPath: _()
                            }],
                            l = new Promise(function(e) {
                                d = e
                            });
                        s.queue.push({
                            adSlots: u,
                            dataHandler: function(e) {
                                clearTimeout(c);
                                var t = JSON.parse(e);
                                Object.keys(t.brandSafety).forEach(function(e) {
                                    return window.googletag.pubads().setTargeting(e, t.brandSafety[e])
                                }), t.fr && window.googletag.pubads().setTargeting("fra", t.fr), t.custom && t.custom["ias-kw"] && window.googletag.pubads().setTargeting("ias-kw", t.custom["ias-kw"]);
                                var a = ["pub"];
                                Object.keys(t.slots[r]).filter(function(e) {
                                    return !a.includes(e)
                                }).forEach(function(e) {
                                    return n.setTargeting(e, t.slots[r][e])
                                }), d()
                            }
                        }), a = a.then(function() {
                            return Promise.race([new Promise(function(e) {
                                c = setTimeout(e, 1e3)
                            }), l])
                        })
                    }
                    var f = p.a.get("page.isbn");
                    "im" === i && f && n.setTargeting("isbn", f);
                    var m = new Map([
                        ["top-above-nav", "fabric1"],
                        ["merchandising-high", "fabric2"],
                        ["merchandising", "fabric3"]
                    ]);
                    return m.has(i) && n.setTargeting("slot-fabric", m.get(i)), p.a.get("switches.adomik") && (n.setTargeting("ad_group", function() {
                        var e = Math.random();
                        switch (!0) {
                            case e < .09:
                                return "ad_ex".concat(Math.floor(100 * e));
                            case e < .1:
                                return "ad_bc";
                            default:
                                return "ad_opt"
                        }
                    }()), n.setTargeting("ad_h", (new Date).getUTCHours().toString())), n.addService(window.googletag.pubads()).setTargeting("slot", i), {
                        slot: n,
                        slotReady: a
                    }
                },
                C = n(256);
            n.d(t, "a", function() {
                return B
            });
            var P = function(e) {
                    return l.c.reduce(function(t, n) {
                        var a = e.getAttribute("data-".concat(Object(C.a)(n.name)));
                        return a && (t[n.name] = a.split("|").map(function(e) {
                            return "fluid" === e ? "fluid" : e.split(",").map(Number)
                        })), t
                    }, {})
                },
                B = function() {
                    function e(t) {
                        var n = this;
                        r()(this, e), u()(this, "id", void 0), u()(this, "node", void 0), u()(this, "sizes", void 0), u()(this, "size", void 0), u()(this, "slot", void 0), u()(this, "isEmpty", void 0), u()(this, "isLoading", void 0), u()(this, "isRendering", void 0), u()(this, "isLoaded", void 0), u()(this, "isRendered", void 0), u()(this, "shouldRefresh", void 0), u()(this, "maxViewPercentage", void 0), u()(this, "whenLoaded", void 0), u()(this, "whenLoadedResolver", void 0), u()(this, "whenRendered", void 0), u()(this, "whenRenderedResolver", void 0), u()(this, "whenSlotReady", void 0), u()(this, "extraNodeClasses", void 0), u()(this, "timings", void 0), u()(this, "hasPrebidSize", void 0);
                        var a = P(t),
                            i = O(t, a);
                        this.id = t.id, this.node = t, this.sizes = a, this.size = null, this.slot = i.slot, this.isEmpty = null, this.isLoading = !1, this.isRendering = !1, this.isLoaded = !1, this.isRendered = !1, this.whenSlotReady = i.slotReady, this.timings = {
                            createTime: null,
                            startLoading: null,
                            stopLoading: null,
                            startRendering: null,
                            stopRendering: null,
                            loadingMethod: null,
                            lazyWaitComplete: null
                        }, this.shouldRefresh = !1, this.maxViewPercentage = 0, this.hasPrebidSize = !1, this.whenLoaded = new Promise(function(e) {
                            n.whenLoadedResolver = e
                        }).then(function(e) {
                            return n.isLoaded = e, e
                        }), this.whenRendered = new Promise(function(e) {
                            n.whenRenderedResolver = e
                        }).then(function(e) {
                            return n.isRendered = e, e
                        }), this.extraNodeClasses = []
                    }
                    return c()(e, [{
                        key: "startLoading",
                        value: function() {
                            this.isLoading = !0, this.timings.startLoading = Object(f.a)()
                        }
                    }, {
                        key: "stopLoading",
                        value: function(e) {
                            this.isLoading = !1, this.whenLoadedResolver && this.whenLoadedResolver(e), this.timings.stopLoading = Object(f.a)()
                        }
                    }, {
                        key: "startRendering",
                        value: function() {
                            this.isRendering = !0, this.timings.startRendering = Object(f.a)()
                        }
                    }, {
                        key: "stopRendering",
                        value: function(e) {
                            this.isRendering = !1, this.whenRenderedResolver && this.whenRenderedResolver(e)
                        }
                    }, {
                        key: "updateExtraSlotClasses",
                        value: function() {
                            for (var t, n, a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r];
                            var s = e.filterClasses(this.extraNodeClasses, o);
                            (t = this.node.classList).remove.apply(t, i()(s)), (n = this.node.classList).add.apply(n, o), this.extraNodeClasses = o
                        }
                    }]), e
                }();
            u()(B, "filterClasses", function(e, t) {
                return e.filter(function(e) {
                    return !t.includes(e)
                })
            }), B.filterClasses
        },
        88: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return r
            }), n(68);
            var a = n(245),
                i = n(47),
                o = function(e) {
                    e.whenSlotReady.catch(function() {}).then(function() {
                        return Object(i.c)("Commercial: Slot Ready: ".concat(e.id)), e.startLoading(), a.a.requestBids(e)
                    }).then(function() {
                        return window.googletag.display(e.id)
                    })
                },
                r = function(e) {
                    e.whenSlotReady.then(function() {
                        return a.a.requestBids(e, function(t) {
                            return "top-above-nav" !== t.key ? [t] : 1 === t.sizes.length ? [t] : Array.isArray(e.size) ? [Object.assign({}, t, {
                                sizes: [
                                    [e.size[0], e.size[1]]
                                ]
                            })] : []
                        })
                    }).then(function() {
                        e.slot.setTargeting("refreshed", "true"), "dfp-ad--top-above-nav" === e.id && Array.isArray(e.size) && e.slot.defineSizeMapping([
                            [
                                [0, 0],
                                [e.size]
                            ]
                        ]), window.googletag.pubads().refresh([e.slot])
                    })
                }
        },
        9: function(e, t, n) {
            "use strict";
            n.d(t, "p", function() {
                return g
            }), n.d(t, "C", function() {
                return h
            }), n.d(t, "n", function() {
                return b
            }), n.d(t, "o", function() {
                return v
            }), n.d(t, "l", function() {
                return y
            }), n.d(t, "m", function() {
                return w
            }), n.d(t, "f", function() {
                return k
            }), n.d(t, "b", function() {
                return _
            }), n.d(t, "c", function() {
                return j
            }), n.d(t, "a", function() {
                return O
            }), n.d(t, "g", function() {
                return C
            }), n.d(t, "e", function() {
                return P
            }), n.d(t, "d", function() {
                return B
            }), n.d(t, "j", function() {
                return x
            }), n.d(t, "i", function() {
                return A
            }), n.d(t, "k", function() {
                return L
            }), n.d(t, "x", function() {
                return I
            }), n.d(t, "u", function() {
                return S
            }), n.d(t, "z", function() {
                return E
            }), n.d(t, "w", function() {
                return M
            }), n.d(t, "y", function() {
                return T
            }), n.d(t, "q", function() {
                return R
            }), n.d(t, "v", function() {
                return D
            }), n.d(t, "B", function() {
                return F
            }), n.d(t, "r", function() {
                return z
            }), n.d(t, "A", function() {
                return G
            }), n.d(t, "s", function() {
                return V
            }), n.d(t, "t", function() {
                return N
            }), n.d(t, "D", function() {
                return H
            }), n.d(t, "E", function() {
                return U
            }), n.d(t, "h", function() {
                return q
            });
            var a = n(33),
                i = n.n(a),
                o = n(7),
                r = n(20),
                s = n(5),
                c = n(0),
                d = n(64),
                u = n(97),
                l = n(98),
                f = function(e, t) {
                    var n = new RegExp("".concat(t, "$"));
                    return e.replace(n, "")
                },
                m = i()(function() {
                    return Object(s.g)()
                }),
                p = function(e, t) {
                    return Boolean(e.find(function(e) {
                        return e[0] === t[0] && e[1] === t[1]
                    }))
                },
                g = function(e) {
                    return Object.keys(e).reduce(function(t, n) {
                        return e[n] && (t[n] = e[n]), t
                    }, {})
                },
                h = function(e) {
                    return function(e, t) {
                        var n = new RegExp("^".concat("dfp-ad--"));
                        return e.replace(n, "")
                    }(e)
                },
                b = function() {
                    return "GB" === m()
                },
                v = function() {
                    return ["US", "CA"].includes(m())
                },
                y = function() {
                    return ["AU", "NZ"].includes(m())
                },
                w = function() {
                    return !b() && !v() && !y()
                },
                k = function(e) {
                    return p(e, [300, 250])
                },
                _ = function(e) {
                    return p(e, [300, 600])
                },
                j = function(e) {
                    return p(e, [728, 90])
                },
                O = function(e) {
                    return p(e, [970, 250])
                },
                C = function(e) {
                    return k(e) || _(e)
                },
                P = function(e) {
                    return p(e, [320, 50])
                },
                B = function(e) {
                    return j(e) || O(e)
                },
                x = function(e) {
                    return e.length > 0 ? e.reduce(function(e, t) {
                        return e[0] >= t[0] && e[1] >= t[1] ? e : t
                    }) : null
                },
                A = function() {
                    switch (Object(o.d)()) {
                        case "mobile":
                        case "mobileMedium":
                        case "mobileLandscape":
                            return "M";
                        case "phablet":
                        case "tablet":
                            return "T";
                        case "desktop":
                        case "leftCol":
                        case "wide":
                            return "D";
                        default:
                            return "M"
                    }
                },
                L = function(e, t) {
                    var n = Math.ceil(e),
                        a = Math.floor(t);
                    return Math.floor(Math.random() * (a - n + 1)) + n
                },
                I = function() {
                    return v()
                },
                S = function() {
                    return !v()
                },
                E = function() {
                    return v()
                },
                M = function() {
                    return Object(d.d)(l.a, "variant")
                },
                T = function() {
                    return Object(d.d)(u.a, "variant")
                },
                R = function(e) {
                    return k(e)
                },
                D = function() {
                    return !v() && !y()
                },
                F = function() {
                    return !v() && !y() && c.a.get("switches.prebidOzone")
                },
                z = function() {
                    return y() || c.a.get("switches.prebidAppnexusUkRow") && !v() || !!Object(r.e)().and
                },
                G = function() {
                    return b() && (c.a.get("page.isDev", !0) || 1 === L(1, 10))
                },
                V = function() {
                    return b() || w()
                },
                N = i()(function() {
                    return -1 !== window.location.hash.indexOf("#mobile-sticky") || c.a.get("switches.mobileStickyLeaderboard") && Object(o.m)({
                        min: "mobile",
                        max: "mobileLandscape"
                    }) && v() && "Article" === c.a.get("page.contentType")
                }),
                H = function(e) {
                    return f(e, "--mobile")
                },
                U = function(e) {
                    return f(e, "([2-9]|\\d{2,})")
                },
                q = function(e) {
                    return p(e, [160, 600])
                }
        },
        96: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var a = n(1),
                i = n.n(a),
                o = n(17),
                r = {
                    sizeMappings: {
                        mobile: [o.a.outOfPage, o.a.empty, o.a.outstreamMobile, o.a.mpu, o.a.googleCard, o.a.fluid],
                        phablet: [o.a.outOfPage, o.a.empty, o.a.outstreamMobile, o.a.mpu, o.a.googleCard, o.a.outstreamDesktop, o.a.fluid],
                        desktop: [o.a.outOfPage, o.a.empty, o.a.mpu, o.a.googleCard, o.a.video, o.a.outstreamDesktop, o.a.fluid]
                    }
                },
                s = {
                    im: {
                        label: !1,
                        refresh: !1,
                        sizeMappings: {
                            mobile: [o.a.outOfPage, o.a.empty, o.a.inlineMerchandising, o.a.fluid]
                        }
                    },
                    "high-merch": {
                        label: !1,
                        refresh: !1,
                        name: "merchandising-high",
                        sizeMappings: {
                            mobile: [o.a.outOfPage, o.a.empty, o.a.merchandisingHigh, o.a.fluid]
                        }
                    },
                    "high-merch-lucky": {
                        label: !1,
                        refresh: !1,
                        name: "merchandising-high-lucky",
                        sizeMappings: {
                            mobile: [o.a.outOfPage, o.a.empty, o.a.fluid]
                        }
                    },
                    "high-merch-paid": {
                        label: !1,
                        refresh: !1,
                        name: "merchandising-high",
                        sizeMappings: {
                            mobile: [o.a.outOfPage, o.a.empty, o.a.merchandisingHighAdFeature, o.a.fluid]
                        }
                    },
                    inline: r,
                    mostpop: r,
                    comments: r,
                    "top-above-nav": {
                        sizeMappings: {
                            mobile: [o.a.outOfPage, o.a.empty, o.a.fabric, o.a.outstreamMobile, o.a.mpu, o.a.fluid]
                        }
                    },
                    carrot: {
                        label: !1,
                        refresh: !1,
                        name: "carrot",
                        sizeMappings: {
                            mobile: [o.a.fluid]
                        }
                    },
                    epic: {
                        label: !1,
                        refresh: !1,
                        name: "epic",
                        sizeMappings: {
                            mobile: [o.a.fluid]
                        }
                    },
                    "mobile-sticky": {
                        label: !0,
                        refresh: !0,
                        name: "mobile-sticky",
                        sizeMappings: {
                            mobile: [o.a.mobilesticky]
                        }
                    }
                },
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = {},
                        a = s[e],
                        o = t.name || a.name || e,
                        r = t.classes ? t.classes.split(" ").map(function(e) {
                            return "ad-slot--".concat(e)
                        }) : [],
                        c = Object.assign({}, a.sizeMappings);
                    return t.sizes && Object.keys(t.sizes).forEach(function(e) {
                            c[e] ? c[e] = c[e].concat(t.sizes[e]) : c[e] = t.sizes[e]
                        }), Object.keys(c).forEach(function(e) {
                            c[e] = c[e].join("|")
                        }), Object.assign(n, c), !1 === a.label && (n.label = "false"), !1 === a.refresh && (n.refresh = "false"), r.push("ad-slot--".concat(o)),
                        function(e, t, n) {
                            var a = [],
                                i = document.createElement("div");
                            return i.id = "dfp-ad--".concat(e), i.className = "js-ad-slot ad-slot ".concat(n.join(" ")), i.setAttribute("data-link-name", "ad slot ".concat(e)), i.setAttribute("data-name", e), i.setAttribute("aria-hidden", "true"), Object.keys(t).forEach(function(e) {
                                i.setAttribute(e, t[e])
                            }), a.push(i), a
                        }(o, Object.keys(n).reduce(function(e, t) {
                            return Object.assign({}, e, i()({}, "data-".concat(t), n[t]))
                        }, {}), r)
                }
        }
    }
]);
//# sourceMappingURL=graun.commercial.js.map