! function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var i = {};
    e.m = t, e.c = i, e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 5)
}([function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t(t) {
            void 0 === t && (t = !1);
            var e = this;
            if (this.d = document, this.w = window, this.logOn = !1, this.isReady = !1, this.friendlyIframe = null, !t) {
                var i = this.getIeVersion(navigator.userAgent);
                if ((!!i || window.frameElement) && void 0 !== window.inDapIF && window.inDapIF) {
                    this.log("FIF mode");
                    var n = this.getTopWindow();
                    this.w = n.currentWindow, this.d = this.w.document, this.friendlyIframe = n.currentFrame
                }
            }
            this.docReady(function() {
                return e.isReady = !0
            })
        }
        return t.prototype.addElement = function(t, e, i) {
            var n = this.d.createElement(t);
            for (var r in i) i.hasOwnProperty(r) && n.setAttribute(r, i[r]);
            return e.appendChild(n), n
        }, t.prototype.addEvent = function(t, e, i) {
            t && e && i && (t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i))
        }, t.prototype.log = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this.logOn && console.log(arguments)
        }, t.prototype.docReady = function(t, e, i) {
            var n = this;
            void 0 === e && (e = this.w), void 0 === i && (i = this.d);
            var r = function() {
                n.log("ready"), i.removeEventListener("DOMContentLoaded", r, !1), e.removeEventListener("load", r, !1), t()
            };
            "complete" === i.readyState ? setTimeout(t) : (i.addEventListener("DOMContentLoaded", r, !1), e.addEventListener("load", r, !1))
        }, t.prototype.winReady = function(t, e, i) {
            var n = this;
            void 0 === e && (e = this.w), void 0 === i && (i = this.d);
            var r = function() {
                n.log("window loaded"), e.removeEventListener("load", r, !1), t()
            };
            e.addEventListener("load", r, !1)
        }, t.prototype.tracking = function(t) {
            if (t) {
                (new Image).src = t
            }
        }, t.prototype.isChild = function(t, e) {
            if (e)
                for (var i = e.parentNode; null != i;) {
                    if (i === t) return !0;
                    i = i.parentNode
                }
            return !1
        }, t.prototype.getElementVisibility = function(t) {
            var e = t.getBoundingClientRect(),
                i = (e.right - e.left) * (e.bottom - e.top);
            if (0 === i) return 0;
            var n = Math.max(0, Math.min(e.bottom, this.w.innerHeight) - Math.max(0, e.top)),
                r = Math.max(0, Math.min(e.right, this.w.innerWidth) - Math.max(0, e.left));
            return Math.round(n * r * 100 / i)
        }, t.prototype.checkTabVisibility = function(t, e) {
            var i = this,
                n = function() {
                    var t = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in i.d) return "hidden";
                    for (var e = 0, n = t; e < n.length; e++) {
                        var r = n[e];
                        if (r + "Hidden" in document) return r + "Hidden"
                    }
                    return null
                },
                r = function() {
                    var t = n();
                    return !!t && i.d[t]
                },
                o = n();
            if (o) {
                var a = o.replace(/[H|h]idden/, "") + "visibilitychange";
                this.addEvent(this.d, a, function() {
                    r() ? e() : t()
                })
            }
        }, t.prototype.getIosVersion = function() {
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
                var t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                return [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || "0", 10)]
            }
        }, t.prototype.isExternal = function(t, e) {
            var i = this.getDomain(e);
            return -1 === t.indexOf(i)
        }, t.prototype.getDomain = function(t) {
            var e = t;
            if (null != t) {
                var i = t.split(".").reverse();
                null != i && i.length > 1 && (e = i[1] + "." + i[0])
            }
            return e
        }, t.prototype.offsetTop = function(t) {
            var e = 0;
            do {
                isNaN(t.offsetTop) || (e += t.offsetTop), t = t.offsetParent
            } while (t);
            return e
        }, t.prototype.getPageHeight = function() {
            var t = this.d.body,
                e = this.d.documentElement;
            return Math.max(t.scrollHeight, t.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight)
        }, t.prototype.getIeVersion = function(t) {
            t = t || navigator.userAgent;
            var e = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(t);
            return e ? parseInt(e[2], 10) : void 0
        }, t.prototype.offset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this.w.pageYOffset || this.d.documentElement.scrollTop;
            return {
                top: e.top + i,
                bottom: e.bottom + i,
                left: e.left,
                right: e.right
            }
        }, t.prototype.removeElement = function(t) {
            t && t.parentNode.removeChild(t)
        }, t.prototype.getTopWindow = function() {
            for (var t = 5, e = window, i = this.getIeVersion(navigator.userAgent) ? null : window.frameElement; t--;) try {
                e.parent && e.parent.document && (i = e.frameElement, (e = e.parent) === e.parent && (t = 0))
            } catch (t) {
                this.log("getTopWindow error", t)
            }
            return {
                currentWindow: e,
                currentFrame: i
            }
        }, t.prototype.isMobile = function() {
            return "ontouchstart" in this.w
        }, t
    }();
    e.Global = n
}, function(t, e, i) {
    "use strict";
    var n = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function n() {
                this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(0),
        o = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.counterId = 0, e.hasFocus = !0, e.isSafeFrame = !1, e.integration = 0, e.timeCounter = 0, e.resultLayer = null, e.playingCreativeId = -1, e.pixels = {}, e.threshold = [], e.addEvent(e.w, "focus", function() {
                    return e.hasFocus = !0
                }), e.addEvent(e.w, "blur", function() {
                    return document.activeElement && window.self === window.top ? e.hasFocus = !0 : e.hasFocus = !1
                }), e
            }
            return n(e, t), e.prototype.videoHandler = function(t, e) {
                var i = ["start", "AdStarted", "AdPlaying", "resume", "play", "playing"],
                    n = ["complete", "skip", "AdSkipped", "AdStopped"];
                n.concat(["pause", "AdPaused", "abort", "emptied", "ended", "error", "seeked", "seeking"]).indexOf(t) > -1 ? this.playingCreativeId = -1 : i.indexOf(t) > -1 && (this.playingCreativeId = e), n.indexOf(t) > -1 && this.executePixels(e, "notviewable")
            }, e.prototype.updateCreativePixels = function(t, e) {
                return this.log("updateCreativePixels"), this.pixels[t] = e
            }, e.prototype.init = function(t, e, i) {
                var n = this;
                this.log("init");
                var r = this.checkElementStatus(t),
                    o = r.measurable;
                t = r.element, this.pixels = e;
                var a = this.mergeOptions(i, t);
                if (a.videoIntegration || (this.playingCreativeId = Object.keys(e)[0] ? Number(Object.keys(e)[0]) : 1), this.integration = a.videoIntegration, a.logMessages && (this.logOn = !0), a.testLayer && (this.resultLayer = this.addInfoLayer(t)), i && i.threshold) {
                    this.threshold = i.threshold;
                    this.threshold.forEach(function(t, e) {
                        t.lastSent = 0, "function" != typeof t.aboveCallback && (t.aboveCallback = function() {
                            return console.log()
                        }), "function" != typeof t.belowCallback && (t.belowCallback = function() {
                            return console.log()
                        })
                    })
                }
                t.id || (t.id = "sas_" + (new Date).getTime() + "rnd"), this.overlapStepX = Math.floor(.01 * t.offsetWidth) || 3, this.overlapStepY = Math.floor(.01 * t.offsetHeight) || 3, this.counterId = this.w.setInterval(function() {
                    return n.checkElement(t, a, o)
                }, 100), window.addEventListener("beforeunload", function() {
                    n.executePixels(n.playingCreativeId, "notviewable")
                })
            }, e.prototype.checkElement = function(t, e, i) {
                if (this.log("checkElement", t, e), !this.d.getElementById(t.id)) return window.clearInterval(this.counterId), void this.log("backup exit - in the meantime someone could remove / close the ad", t);
                i || this.executePixels(this.playingCreativeId, "undetermined");
                var n = this.isSafeFrame ? Math.round(this.w.$sf.ext.inViewPercentage()) : this.getVisibilityPercent(t, e);
                this.log("Element visibility " + n + "%"), this.playingCreativeId > -1 && this.hasFocus && n >= e.area ? ++this.timeCounter >= 10 * e.delay && (this.log("Element visible more than " + e.area + "% for " + Math.round(this.timeCounter / 10) + " seconds"), this.executePixels(this.playingCreativeId, "viewable"), this.executeViewCallback(e), e.testLayer && (this.resultLayer.innerHTML = "&#10004;")) : this.timeCounter = 0, this.checkThreshold(n)
            }, e.prototype.executeViewCallback = function(t) {
                t.viewCallback && (t.viewCallback(), t.viewCallback = null, this.log("View callback function called"))
            }, e.prototype.checkElementStatus = function(t) {
                var e = {
                    measurable: !0,
                    element: t
                };
                if (!t || window.self === window.top) return this.log("No iframe detected"), e;
                this.log("Iframe detected");
                var i = this.getTopWindow();
                return this.w = i.currentWindow, this.d = this.w.document, e.element = null === i.currentFrame ? t : i.currentFrame, i.currentWindow.$sf && i.currentWindow.$sf.ext ? (this.log("SafeFrame detected"), e.element = e.element || t, this.isSafeFrame = !0) : void 0 !== window.inDapIF && window.inDapIF ? (this.log("Friendly iframe detected"), e.element = t) : i.currentWindow === window.top ? this.log("Secured iframe detected") : (this.log("Cross-domain iframe detected"), e.element = t, e.measurable = !1), e
            }, e.prototype.area = function(t) {
                var e = t.getBoundingClientRect();
                return (e.right - e.left) * (e.bottom - e.top)
            }, e.prototype.addInfoLayer = function(t) {
                var e = this.addElement("div", document.body, {
                    id: "testLayer_" + Math.round(1e5 * Math.random()),
                    style: "width:60px;height:30px;position:fixed;top:0;right:0;background-color:yellow;\n\t\t\tcolor:blue;font-size:20px;text-align:center;padding-top:5px;z-index:99999;"
                });
                return e.innerHTML = "0%", e
            }, e.prototype.checkThreshold = function(t) {
                for (var e = 0, i = this.threshold; e < i.length; e++) {
                    var n = i[e];
                    n.area > t && n.lastSent <= 0 ? (n.belowCallback(), n.lastSent = 1) : n.area <= t && n.lastSent >= 0 && (n.aboveCallback(), n.lastSent = -1)
                }
            }, e.prototype.mergeOptions = function(t, e) {
                var i = {
                    area: t && t.area ? t.area : 50,
                    testLayer: !(!t || !t.testLayer) && t.testLayer,
                    logMessages: !(!t || !t.logMessages) && t.logMessages,
                    videoIntegration: t && t.videoIntegration ? t.videoIntegration : 0,
                    threshold: t && t.threshold ? t.threshold : [],
                    viewCallback: t && t.viewCallback ? t.viewCallback : null
                };
                return t && t.delay ? i.delay = t.delay : i.delay = i.videoIntegration ? 2 : 1, !this.isMobile() && 0 === i.videoIntegration && e.clientHeight * e.clientWidth > 242500 && (i.area = 30), i
            }, e.prototype.executePixels = function(t, e) {
                var i = !1;
                if (this.pixels[t] && this.pixels[t][e]) {
                    for (var n = 0, r = this.pixels[t][e]; n < r.length; n++) {
                        var o = r[n];
                        this.tracking(o)
                    }
                    i = !0, delete this.pixels[t], this.playingCreativeId = -1, this.integration < 2 && this.w.clearInterval(this.counterId)
                }
                return i
            }, e.prototype.isOverlapped = function(t, e, i) {
                for (var n = t.getBoundingClientRect(), r = Math.floor(Math.max(0, n.top)), o = Math.floor(Math.min(n.bottom, this.w.innerHeight)), a = Math.floor(Math.max(0, n.left)), s = Math.floor(Math.min(n.right, this.w.innerWidth)), l = 0, d = 0, h = null, c = a; c <= s; c += this.overlapStepX)
                    for (var p = r; p <= o; p += this.overlapStepY) Math.floor(1e3 * Math.random()) % 250 || (h = t.ownerDocument.elementFromPoint(c, p), h === t || this.isChild(t, h) || d++, l++);
                return !((100 - d / l * 100) * i / 100 > e.area)
            }, e.prototype.getVisibilityPercent = function(t, e) {
                var i = this.area(t);
                if (0 === i) return 0;
                var n = t.getBoundingClientRect(),
                    r = Math.max(0, Math.min(n.bottom, this.w.innerHeight) - Math.max(0, n.top)),
                    o = Math.max(0, Math.min(n.right, this.w.innerWidth) - Math.max(0, n.left)),
                    a = Math.round(r * o * 100 / i);
                return e.testLayer && (n.top < 0 ? (this.resultLayer.style.top = "auto", this.resultLayer.style.bottom = "0px") : (this.resultLayer.style.top = "0px", this.resultLayer.style.bottom = "auto"), this.resultLayer.innerHTML = a + "%"), a
            }, e
        }(r.Global);
    e.Viewability = o, window.Viewability = o
}, function(t, e, i) {
    "use strict";
    var n = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function n() {
                this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(0),
        o = i(1),
        a = (window.sas, function(t) {
            function e(e, i) {
                void 0 === i && (i = !1);
                var n = t.call(this, i) || this;
                return n.c = e, n.isFlash = !1, n.closed = !1, n.iCustomScriptExecuted = !1, n.animationSpeed = {
                    none: 0,
                    slow: 2,
                    medium: 1.4,
                    fast: .7
                }, n.buttonSize = {
                    small: 1,
                    normal: 1.5,
                    big: 2
                }, n.lastClicked = 0, n.ifrContainer = null, n.overIframe = !1, document.getElementById(e.tagId) || document.write('<div id="' + e.tagId + '"></div>'), n.isFlash = n.hasFlash(), n.c.filePath && (n.closeButtonUrl = n.c.filePath + "images/close-retina.png", n.closeButtonUrl2 = n.c.filePath + "images/close_54x54.png", n.expandButtonUrl = n.c.filePath + "images/expand_54x54.png"), n.viewability = new o.Viewability, n
            }
            return n(e, t), e.prototype.calculateDimensions = function(t, e, i, n) {
                var r = 1.78;
                t && e && (r = Math.round(t / e * 100) / 100);
                var o, a = i.parentElement.clientWidth; - 1 !== n.indexOf("px!") ? o = Number(n.replace("px!", "")) : (o = -1 !== n.indexOf("%") ? Math.round(Number(n.replace("%", "")) / 100 * a) : Number(n.replace("px", ""))) > a && (o = a);
                var s = Math.round(o / r);
                return this.log("calculateDimensions, input: " + t + ", " + e + ", output: " + o + ", " + s), {
                    height: s,
                    width: o
                }
            }, e.prototype.addCss = function(t) {
                var e = this.d.createElement("style");
                e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(this.d.createTextNode(t)), this.d.getElementsByTagName("head")[0].appendChild(e)
            }, e.prototype.whichTransitionEvent = function() {
                var t = this.d.createElement("fakeelement"),
                    e = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (var i in e)
                    if (void 0 !== t.style[i]) return e[i]
            }, e.prototype.addImage = function(t) {
                var e = "";
                if ("" !== t.url) {
                    "" !== t.oryginalClickUrl && (e += '<a href="' + t.clickUrl + '" target="' + ("_blank" === t.clickTarget ? "_blank" : "_self") + '" >');
                    var i = t.alt ? t.alt : "";
                    e += '<img\n\t\t\t\tid="img_' + t.id + '"\n\t\t\t\tsrc="' + t.url + '"\n\t\t\t\twidth="' + t.width + '"\n\t\t\t\tborder="0"\n\t\t\t\theight="' + t.height + '"\n\t\t\t\talt="' + i + '" />', "" !== t.oryginalClickUrl && (e += "</a>")
                }
                return e
            }, e.prototype.flash = function(t, e, i, n) {
                this.log("flash");
                var r = "";
                for (var o in t) t.hasOwnProperty(o) && (r += '<param name="' + o + '" value="' + t[o] + '" />');
                return '<object type="application/x-shockwave-flash"\n\t\t\t\t\tname="' + e + '"\n\t\t\t\t\tid="' + e + '"\n\t\t\t\t\twidth="' + i + '"\n\t\t\t\t\theight="' + n + '"\n\t\t\t\t\tdata="' + t.movie + '">' + r + "\n\t\t\t\t</object>"
            }, e.prototype.addCreative = function(t, e, i, n, r, o, a, s) {
                var l = this;
                void 0 === i && (i = !1), void 0 === n && (n = ""), void 0 === r && (r = !0), void 0 === s && (s = !1), this.log("addCreative", t, e, i, n, r, o);
                var d = t.agencyCode;
                n && !this.iCustomScriptExecuted && (d += n, this.iCustomScriptExecuted = !0);
                var h = 0 !== t.width || s ? t.width : "100%",
                    c = 0 !== t.height || s ? t.height : "100%",
                    p = this.c.tagId;
                if (0 === t.type) {
                    var u = this.addElement("iframe", e, {
                            src: "about:blank",
                            width: h,
                            height: c,
                            frameBorder: "0",
                            allow: "autoplay;fullscreen;",
                            scrolling: "no",
                            marginheight: "0",
                            marginwidth: "0",
                            id: p + "_iframe"
                        }),
                        f = u.contentWindow || u,
                        m = u.contentWindow.document;
                    this.ifrContainer = u;
                    if (this.getIeVersion(navigator.userAgent)) try {
                        m.domain = this.d.domain
                    } catch (t) {
                        this.log(t)
                    }
                    m.open("text/html", "replace"), m.write("\n\t\t\t\t<!DOCTYPE html>\n\t\t\t\t\t<head><script>var inDapIF = " + i + '<\/script></head>\n\t\t\t\t\t<body style="padding:0;margin:0 auto">\n\t\t\t\t\t\t' + d + "\n\t\t\t\t\t</body>\n\t\t\t\t</html>\n\t\t\t"), m.close(), o && (this.log("iframe ready"), o(f, m)), a && this.winReady(function() {
                        l.log("iframe load"), a(f, m, u)
                    }, f, m)
                } else if (4 === t.type) {
                    var g = 0,
                        v = t.url + (t.url.indexOf("?") < 0 ? "?" : "&") + "sasfid=" + t.id;
                    if (t.clickUrlArray)
                        for (var y = 0, b = t.clickUrlArray; y < b.length; y++) {
                            var w = b[y];
                            v += "&clicktag" + (g++ ? g : "") + "=" + encodeURIComponent(w)
                        }
                    this.addElement("iframe", e, {
                        src: v,
                        width: h,
                        height: c,
                        frameBorder: "0",
                        allow: "autoplay;fullscreen;",
                        scrolling: "no",
                        marginheight: "0",
                        marginwidth: "0",
                        id: p + "_iframe"
                    }), this.addEvent(this.w, "message", function(e) {
                        if (e.data && t.id === Number(e.data)) {
                            var i = {
                                clickUrls: t.clickUrlArray,
                                isSmart: !0
                            };
                            e.source.postMessage(JSON.stringify(i), "*")
                        }
                    })
                } else e.innerHTML = this.addImage(t);
                if (t.type && d)
                    if (r || this.isReady) {
                        var x = this.addElement("iframe", e, {
                                src: "about:blank",
                                frameBorder: 0,
                                allow: "autoplay;fullscreen;",
                                scrolling: "no",
                                marginheight: 0,
                                marginwidth: 0,
                                style: "width:1px;height:0px;visibility:hidden"
                            }),
                            C = x.contentWindow.document;
                        C.open("text/html", "replace"), C.write('\n\t\t\t\t\t<!DOCTYPE html>\n\t\t\t\t\t\t<head></head>\n\t\t\t\t\t\t<body style="padding:0;margin:0 auto">' + d + "</body>\n\t\t\t\t\t</html>\n\t\t\t\t"), C.close()
                    } else document.write(d)
            }, e.prototype.getPlacement = function(t) {
                var e = this.d.getElementById(t);
                return this.friendlyIframe && (this.friendlyIframe.setAttribute("style", "width:1px; height:1px;position:absolute;"), this.friendlyIframe.setAttribute("allow", "autoplay;fullscreen;"), e || (e = this.d.createElement("DIV"), e.setAttribute("id", t), this.friendlyIframe.parentNode.insertBefore(e, this.friendlyIframe))), this.log("adPlacement", e), e
            }, e.prototype.hasFlash = function() {
                try {
                    if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return !0
                } catch (t) {
                    if (navigator && navigator.mimeTypes && void 0 !== navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) return !0
                }
                return !1
            }, e.prototype.stopEvent = function(t) {
                return t || (t = window.event), t.cancelBubble = !0, t.returnValue = !1, t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), !1
            }, e.prototype.prepareTrackingUrl = function(t, e, i) {
                var n = this.c.statisticTracking;
                return this.c.baseUrl + "/track/action?sid=" + this.c.sessionId + "&pid=" + this.c.pageId + "&iid=" + this.c.insertionId + "&cid=" + this.c.creative.id + "&key=" + t + this.validateParam("vit", n.videoIntegrationType) + this.validateParam("vct", n.videoClientTechnology) + this.validateParam("vrn", n.videoRevisionNumber) + (n.rtbbid ? "&rtb=1&rtbbid=" + n.rtbbid + "&rtbet=" + n.rtbet + "&rtblt=" + n.rtblt + "&rtbnid=" + n.rtbnid + "&rtbh=" + n.rtbh : "") + "&" + (i ? "num1=" + i + "&" : "") + "ts=" + e
            }, e.prototype.createMultiBrowserCss = function(t) {
                return "-moz-" + t + ";-webkit-" + t + ";-ms-" + t + ";-o-" + t + ";" + t + ";"
            }, e.prototype.executeCustomScripts = function(t, e, i, n) {
                for (var r = t, o = 0, a = e; o < a.length; o++) {
                    var s = a[o];
                    0 !== s.type && (r += s.agencyCode)
                }
                if (i) {
                    if (r.replace(/\r\n/gm, "")) {
                        var l = document.createElement("iframe");
                        l.src = "about:blank";
                        var d = "width:1px;height:0;visibility:hidden;";
                        l.setAttribute("style", d), l.setAttribute("allow", "autoplay;fullscreen;"), l.style.cssText = d,
                            function(t, e) {
                                var i = document.getElementById(t);
                                if ("string" == typeof e) {
                                    var n = document.createElement("div");
                                    n.innerHTML = e, e = n
                                }
                                i.appendChild(e)
                            }(n, l);
                        var h = l.contentWindow.document;
                        h.open("text/html", "replace"), h.write("<!DOCTYPE html><head></head><body>" + r + "</body></html>"), h.close()
                    }
                } else document.write(r)
            }, e.prototype.findPlaceForAd = function(t) {
                this.log("findPlaceForAd", t);
                var e, i, n = [],
                    r = this.d.createElement("div");
                r.id = "sas_intextContainer_" + this.c.insertionId, n = t.idNames.split(";"), "" === n[n.length - 1] && n.splice(n.length - 1, 1);
                for (var o = 0, a = n; o < a.length; o++) {
                    switch (i = a[o].replace(/^\s+|\s+$/g, ""), t.selectedPosition) {
                        case "paragraph by id":
                            e = this.d.getElementById(i);
                            break;
                        case "paragraph by class name":
                            e = this.d.getElementsByClassName(i), e.length && (e = e[0]);
                            break;
                        case "paragraph by item prop":
                            for (var s = this.d.getElementsByTagName("*"), l = 0, d = s.length; l < d; l++) {
                                var h = s[l];
                                if (h.getAttribute("itemprop") === i) {
                                    e = h;
                                    break
                                }
                            }
                            break;
                        case "specified element by id":
                            e = this.d.getElementById(i);
                            break;
                        case "specified element by class name":
                            e = this.d.getElementsByClassName(i), e.length && (e = e[0])
                    }
                    if (("specified element by id" === t.selectedPosition || "specified element by class name" === t.selectedPosition) && e && e.tagName) return e;
                    if (e && e.tagName) {
                        var c = e.getElementsByTagName(t.paragraphType);
                        if ("automatic" === t.positionInParagraph) {
                            if (0 !== c.length && c.length < 100)
                                for (var p = c.length - 1; p >= 0; p--) {
                                    var u = this.getElementVisibility(c[p]);
                                    if (this.log("checkElementVisibility for element number " + p, c[p], u), u > 0 && u < 100 || 0 === p) return c[p].parentNode.insertBefore(r, c[p].nextSibling), r
                                }
                        } else if ("specified paragraph" === t.positionInParagraph && 0 !== t.paragraphNumber) {
                            if (0 !== c.length && c.length < 100) {
                                for (var f = 0; f <= c.length - 1; f++) t.paragraphNumber > 0 && f === t.paragraphNumber - 1 ? c[f].parentNode.insertBefore(r, c[f].nextSibling) : t.paragraphNumber > c.length && e.appendChild(r);
                                return r
                            }
                        } else {
                            if ("bottom" === t.positionInParagraph) return e.appendChild(r), r;
                            if ("top" === t.positionInParagraph) return e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r), r
                        }
                    }
                }
                return this.log("show anyway"), this.findPlaceForAdAuto()
            }, e.prototype.getAdPlacement = function(t) {
                var e = null;
                switch (t.selectedPosition) {
                    case "automatic":
                        e = this.findPlaceForAdAuto();
                        break;
                    case "ad placement":
                        e = this.getPlacement(this.c.tagId);
                        break;
                    default:
                        e = this.findPlaceForAd(t)
                }
                return e
            }, e.prototype.getWholeText = function(t) {
                for (var e = "", i = t.childNodes.length, n = 0; n < i; n++) {
                    var r = t.childNodes[n];
                    8 !== r.nodeType && (e += 1 !== r.nodeType ? r.nodeValue : this.getWholeText(r))
                }
                return e
            }, e.prototype.findPlaceForAdAuto = function() {
                this.log("findPlaceForAdAuto");
                var t = [],
                    e = [],
                    i = [],
                    n = ["SCRIPT", "STYLE", "TITLE", "LABEL", "HEADER", "H2", "LI", "A", "UL", "FORM", "FIGURE", "NOSCRIPT", "IFRAME"],
                    r = ["fixed", "absolute"],
                    o = this.d.body.getElementsByTagName("*"),
                    a = this.d.body,
                    s = this.d.documentElement,
                    l = Math.max(a.scrollHeight, a.offsetHeight, s.clientHeight, s.scrollHeight, s.offsetHeight),
                    d = this.d.createElement("div");
                d.id = "sas_intextContainer_" + this.c.insertionId;
                for (var h = 0, c = o; h < c.length; h++) {
                    var p = c[h],
                        u = Math.round(p.parentNode.childElementCount + p.parentNode.clientHeight + p.parentNode.clientHeight + p.parentNode.offsetTop);
                    if (!(n.indexOf(p.tagName) > -1 || u <= 10)) {
                        var f = void 0;
                        p.firstChild && 3 === p.firstChild.nodeType && p.firstChild.length > 150 && p.parentNode.offsetTop > 300 && (f = {
                            node: p.firstChild,
                            length: p.firstChild.length,
                            parent: p.parentNode,
                            value: p.firstChild.data,
                            parentOffset: p.parentNode.offsetTop
                        }, t[u] || (t[u] = []), t[u].push(f)), p.clientWidth >= 300 && p.clientHeight > 100 && p.parentNode.clientHeight > 1.5 * p.clientHeight && p.parentNode.offsetTop > 300 && p.offsetTop < .75 * l && "hidden" !== this.w.getComputedStyle(p.parentNode, null).getPropertyValue("overflow") && -1 === r.indexOf(this.w.getComputedStyle(p.parentNode, null).getPropertyValue("position")) && (f = {
                            node: p,
                            parent: p.parentNode,
                            parentWidth: p.parentNode.clientWidth,
                            parentId: u,
                            offsetTop: p.parentNode.offsetTop
                        }, e[u] || (e[u] = []), e[u].push(f)), p.clientWidth >= 300 && p.clientHeight > 100 && p.offsetTop > .75 * this.w.innerHeight && p.offsetTop < Math.max(.5 * l, this.w.innerHeight) && -1 === r.indexOf(this.w.getComputedStyle(p, null).getPropertyValue("position")) && (f = {
                            node: p,
                            width: p.clientWidth,
                            height: p.clientHeight,
                            offsetTop: p.offsetTop
                        }, i.push(f))
                    }
                }
                if (t.sort(function(t, e) {
                        return e.length - t.length
                    }), this.log("article page", t), t[0] && t[0].length > 2) {
                    var m = t[0][0].parent,
                        g = this.getWholeText(m).length;
                    this.log("articleParentLength", g);
                    for (var v = m.childNodes, y = 0, b = 0, w = 0; w < v.length; w++)
                        if (this.log("sum", y), (y += this.getWholeText(v[w]).length) > g / 3) {
                            this.log("break", y, g / 3), b = w;
                            break
                        }
                    return this.log("whichChild", b), this.log("articleChildren", v), m.insertBefore(d, v[b]), d
                }
                this.log("home page or short article", e), e.sort(function(t, e) {
                    return t[0].offsetTop - e[0].offsetTop || e[0].parentWidth - t[0].parentWidth
                }), this.log(e);
                for (var x = 0, C = e; x < C.length; x++) {
                    var I = C[x];
                    if (I && I.length > 1) return this.log("div collection with the same parent", e[I]), I[0].parent.insertBefore(d, I[1].node), d
                }
                return this.log("other2", i), i.length ? (i.sort(function(t, e) {
                    return e.width - t.width || t.offsetTop - e.offsetTop
                }), this.log("other2", i), i[0].node.insertBefore(d, i[0].node.firstChild), d) : null
            }, e.prototype.buildTestContent = function(t) {
                this.addCss("\n\t\t\t#iframeMob_" + this.c.insertionId + "{\n\t\t\t\twidth:330px;\n\t\t\t\theight:580px;\n\t\t\t\tposition:absolute;\n\t\t\t\ttop:88px;\n\t\t\t\tleft:46px;\n\t\t\t}\n\t\t\t#iframeDiv_" + this.c.insertionId + "{\n\t\t\t\tmargin:20px auto 0;\n\t\t\t\tposition:relative;\n\t\t\t\twidth:416px;\n\t\t\t\theight:742px;\n\t\t\t\tbackground-image:url(http://gallery.smartadserver.com/demo_mobile/image/Phone_Hybrid.png);\n\t\t\t}\n\t\t\ttable img{\n\t\t\t\tdisplay:none;\n\t\t\t}\n\t\t");
                var e = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum ullamcorper orci et e\n\t\tleifend. Morbi a magna ac dolor porta condimentum. ut, commodo a enim. Nulla ac dui vel odio rutrum rh tellu\n\t\ts. Quisque euismod mattis massa. Integer laoreet sapien quis eros eleifend auctor. Aenean faucibus augue nec\n\t\t dolor congue posuere. Aliquam et massa tellus. Sed commodo, orci dictum porta scelerisque, risus neque vulp\n\t\t utate enim, sit amet fermentum dui velit ac erat. Aenean faucibus augue nec dolor congue posuere. Aliquam e\n\t\t t massa tellus. Sed commodo, orci dictum porta scelerisque, risus neque vulputate enim, sit amet fermentum \n\t\t dui velit ac erat.";
                e = "<" + t.paragraphType + ">" + e + "</" + t.paragraphType + ">";
                for (var i = "<div>" + e + "</div>", n = "", r = 0; r < 4; r++) n += e;
                e = n;
                for (var o = "", a = 0; a < 2; a++) o += i;
                i = o, "ad placement" === t.selectedPosition && (t.selectedPosition = "specified element by id", t.idNames = this.c.tagId);
                var s;
                s = "paragraph by id" === t.selectedPosition || "specified element by id" === t.selectedPosition ? "id" : "class";
                var l = [];
                l = t.idNames.split(";"), "" === l[l.length - 1] && l.splice(l.length - 1, 1);
                var d = '<img src="http://www.saspreview.com/images/preview-dog.png" width="330" alt="" /><h1>This is\n\t\t an example of article</h1>';
                "specified element by id" === t.selectedPosition || "specified element by class name" === t.selectedPosition ? d += i + "<div " + s + '="' + l[0] + '"></div>' + i : d += "<div " + s + '="' + l[0] + '">' + e + "</div>";
                var h = this.addElement("div", this.d.body, {
                        id: "iframeDiv_" + this.c.insertionId
                    }),
                    c = this.addElement("iframe", h, {
                        src: "about:blank",
                        width: 330,
                        height: 590,
                        frameBorder: "0",
                        allow: "autoplay;fullscreen;",
                        scrolling: "yes",
                        marginheight: "0",
                        marginwidth: "0",
                        id: "iframeMob_" + this.c.insertionId
                    }),
                    p = c.contentWindow || c,
                    u = c.contentDocument || c.contentWindow.document;
                u.open("text/html", "replace"), u.write('<!DOCTYPE html><head></head><body style="padding:0;margin:0">' + d + "</body></html>"), u.close(), this.viewability.d = this.d = u, this.viewability.w = this.w = p
            }, e.prototype.addOba = function(t, e, i) {
                var n = this;
                this.log("addOba");
                var r = 2 === e ? "top-left" : "top-right";
                window.sas.utils.loadLinkCdn("diff/templates/js/adplayer/adplayer.css"), window.sas.utils.loadScriptCdn(["diff/templates/js/adplayer/adplayer.js", "diff/templates/js/adplayer/adplayer.sas.js"], {
                    onLoad: function() {
                        n.w.$ADP && (window.$ADP.sas.addOba(t, !1, r, n.c.sessionId, t, n.c.sessionId), i.style.width = n.c.creative.width + "px")
                    }
                })
            }, e.prototype.logRtbClick = function(t) {
                var e = (new Date).getTime();
                return e - this.lastClicked > 100 && (this.log("logRtbClick"), (new Image).src = t + "&rnd=" + e, this.lastClicked = e, !0)
            }, e.prototype.myIframeReady = function(t, e) {
                var i = this,
                    n = t.document;
                if (this.initViewability(e), this.c.statisticTracking.rtbbid) {
                    this.addEvent(n, "click", function() {
                        i.logRtbClick(i.c.creative.creativeClickCountPixelUrl)
                    });
                    var r = n.getElementsByTagName("iframe"),
                        o = r.length;
                    if (!o) return;
                    this.overIframe = !1;
                    for (var a = 0; a < o; a++) {
                        var s = r[a];
                        s.onmouseover = function() {
                            i.overIframe = !0
                        }, s.onmouseout = function() {
                            i.overIframe = !1, i.w.focus()
                        }, this.addEvent(this.w, "blur", function() {
                            i.overIframe && i.logRtbClick(i.c.creative.creativeClickCountPixelUrl)
                        })
                    }
                }
            }, e.prototype.initViewability = function(t) {
                var e;
                this.viewability.init(t, (e = {}, e[this.c.creative.id] = {
                    viewable: [this.prepareTrackingUrl("viewcount", this.c.sessionId)],
                    undetermined: [this.prepareTrackingUrl("viewUndetermined", this.c.sessionId)]
                }, e))
            }, e.prototype.validateParam = function(t, e) {
                return e ? "&" + t + "=" + e : ""
            }, e
        }(r.Global));
    e.SasAd = a
}, , , function(t, e, i) {
    "use strict";
    var n = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function n() {
                this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(2),
        o = function(t) {
            function e(e) {
                var i = t.call(this, e) || this;
                return i.c = e, i
            }
            return n(e, t), e.prototype.init = function() {
                var t = this;
                this.log("init");
                var e = this.getPlacement(this.c.tagId);
                this.addCreative(this.c.creative, e, !0, this.c.customScript, this.c.isAsync, 0 === this.c.creative.type ? function(i, n) {
                    return t.myIframeReady(i, e)
                } : null), 0 !== this.c.creative.type && this.initViewability(e), this.c.oba && this.addOba(this.c.formatId, this.c.oba, e)
            }, e
        }(r.SasAd);
    e.Banner = o, window.Banner = o
}]);