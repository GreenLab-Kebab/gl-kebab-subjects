! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AdobeMessagingClient = t() : e.AdobeMessagingClient = t()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        var t = {};

        function n(a) {
            if (t[a]) return t[a].exports;
            var s = t[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(s.exports, s, s.exports, n), s.l = !0, s.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, a) {
            n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: a
            })
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 9)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            i = d(n(2)),
            o = d(n(10)),
            r = d(n(11)),
            l = d(n(3));
        d(n(5)), d(n(4));

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = {
                DOCKED: "docked",
                POPOUT: "popout"
            },
            c = function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.getAppVersion = function() {
                        return t.appver
                    }, this.setMessagingWindowState = function(e) {
                        t.messagingWindowState = e
                    }, this.getMessagingWindowState = function() {
                        return t.messagingWindowState
                    }, this.IsCookiesEnabled = function() {
                        return t.initJson.cookiesEnabled
                    }, this.getMessagingClientURL = function() {
                        return t.serverInitResponse.releaseControl.adobeMessagingClientURL
                    }, this.updateInitContext = function(e) {
                        t.initJson.validateAndModifyContext(e)
                    }, this.handleInitData = function(e) {
                        t.initJson.validateAndInitContext(e), t.msgdebug = e.msgdebug, t.env = t.initJson.env
                    }, this.handleInitResponse = function(e) {
                        e.userProfileInfo && (t.userProfile = e.userProfileInfo), t.serverInitResponse.setResponse(e), t.messagingWindowState = t.serverInitResponse.messagingState.windowState
                    }, this.setOnReadyStateAndTriggerPendingCallbacks = function() {
                        t.isAdobeMessagingClientReady = !0, i.default.sendMessageToHost(i.default.hostCallbacks.TRIGGER_ON_READY_CALLBACKS)
                    }, this.getContextInfo = function() {
                        var e = a({}, t.initJson);
                        return delete e.callbacks, e.context.conversationExists = t.serverInitResponse.messagingState.conversationExists, e.context.uiFallbackLocale = t.serverInitResponse.uiFallbackLocale, e.context.agentFallbackLocale = t.serverInitResponse.agentFallbackLocale, e.context.enterpriseTeamLocale = t.serverInitResponse.enterpriseTeamLocale, e.floodgateData = t.serverInitResponse.releaseControl.floodgateData, e.cookieGuid = t.serverInitResponse.cookieGuid, e.ipAddress = t.serverInitResponse.ipAddress, e
                    }, this.setInitConfig = function(e) {
                        t.initConfig = e
                    }, this.getCommonAnalyticsParams = function() {
                        return {
                            "event.category": t.initJson.appType.toUpperCase(),
                            "event.language": t.initJson.language + "_" + t.initJson.region,
                            "event.url": location.href,
                            "event.referrer": document.referrer,
                            "event.user_agent": navigator.userAgent,
                            "source.client_id": t.initJson.clientId,
                            "source.name": t.initJson.appid,
                            "source.version": t.initJson.appver,
                            "source.platform": t.initJson.appType,
                            "source.os_version": "",
                            "env.com.name": l.default.getClientAppId(),
                            "env.com.version": l.default.getClientVersion(),
                            "event.ip": t.serverInitResponse.ipAddress
                        }
                    }, this.isAdobeMessagingClientReady = !1, this.isAdobeMessagingClientLoadStarted = !1, this.initJson = new o.default, this.serverInitResponse = new r.default, this.config = {}, this.appid = "AdobeMessaging", this.appver = "2.4.3", this.conversationActive = !1, this.env = "prod", this.messagingWindowState = this.messagingWindowStateEnum.DOCKED, this.initStarted = !1, this.msgdebug = !1, this.userProfile = {}, this.leConversationId = "", this.clientSessionId = "", this.skillName = "", this.initConfig = {}
                }
                return s(e, [{
                    key: "messagingWindowStateEnum",
                    get: function() {
                        return u
                    }
                }]), e
            }();
        t.default = new c
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(0));
        var i = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "debug",
                value: function() {
                    if (s.default.msgdebug) {
                        var e = Array.prototype.slice.call(arguments);
                        console.debug.apply(console, e)
                    }
                }
            }, {
                key: "error",
                value: function() {
                    if (s.default.msgdebug) {
                        var e = Array.prototype.slice.call(arguments);
                        console.error.apply(console, e)
                    }
                }
            }, {
                key: "warn",
                value: function() {
                    if (s.default.msgdebug) {
                        var e = Array.prototype.slice.call(arguments);
                        console.warn.apply(console, e)
                    }
                }
            }, {
                key: "log",
                value: function() {
                    if (s.default.msgdebug) {
                        var e = Array.prototype.slice.call(arguments);
                        console.info.apply(console, e)
                    }
                }
            }, {
                key: "info",
                value: function() {
                    if (s.default.msgdebug) {
                        var e = Array.prototype.slice.call(arguments);
                        console.info.apply(console, e)
                    }
                }
            }]), e
        }();
        t.default = new i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(0));
        var i = {
                INIT_SUCCESS_CALLBACK: "INIT_SUCCESS_CALLBACK",
                INIT_ERROR_CALLBACK: "INIT_ERROR_CALLBACK",
                SIGN_IN_CALLBACK: "SIGN_IN_CALLBACK",
                GET_CONTEXT_CALLBACK: "GET_CONTEXT_CALLBACK",
                TRIGGER_ON_READY_CALLBACKS: "TRIGGER_ON_READY_CALLBACKS"
            },
            o = function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.sendMessageToHost = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        try {
                            switch (e) {
                                case t.hostCallbacks.INIT_SUCCESS_CALLBACK:
                                    t.adbmsg_initSuccessCallback(n);
                                    break;
                                case t.hostCallbacks.INIT_ERROR_CALLBACK:
                                    t.adbmsg_initErrorCallback(n);
                                    break;
                                case t.hostCallbacks.SIGN_IN_CALLBACK:
                                    t.adbmsg_signCallback();
                                    break;
                                case t.hostCallbacks.GET_CONTEXT_CALLBACK:
                                    return t.adbmsg_getContextCallback();
                                case t.hostCallbacks.TRIGGER_ON_READY_CALLBACKS:
                                    for (var a = 0; a < t.adbmsg_onReadyCallbacks.length; a++) t.adbmsg_onReadyCallbacks[a]();
                                    t.adbmsg_onReadyCallbacks.length = 0
                            }
                        } catch (e) {}
                        return null
                    }, this.initializeCallbacks = function() {
                        t.adbmsg_initSuccessCallback = s.default.initJson.callbacks.initCallback || t.adbmsg_initSuccessCallback, t.adbmsg_initErrorCallback = s.default.initJson.callbacks.initErrorCallback || t.adbmsg_initErrorCallback, t.adbmsg_signCallback = s.default.initJson.callbacks.signInProvider || t.adbmsg_signCallback, t.adbmsg_getContextCallback = s.default.initJson.callbacks.getContextCallback || t.adbmsg_getContextCallback, t.adbmsg_onReadyCallbacks.push(s.default.initJson.callbacks.onReadyCallback || function() {})
                    }, this.registerForOnReadyCallback = function(e) {
                        e && (s.default.isAdobeMessagingClientReady ? e() : t.adbmsg_onReadyCallbacks.push(e))
                    }, this.adbmsg_initSuccessCallback = function() {}, this.adbmsg_initErrorCallback = function() {}, this.adbmsg_signCallback = function() {}, this.adbmsg_getContextCallback = function() {}, this.adbmsg_onReadyCallbacks = []
                }
                return a(e, [{
                    key: "hostCallbacks",
                    get: function() {
                        return i
                    }
                }]), e
            }();
        t.default = new o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            i = l(n(0)),
            o = l(n(12)),
            r = l(n(1));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return s(e, [{
                key: "isEmpty",
                value: function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return JSON.stringify(e) === JSON.stringify({})
                }
            }, {
                key: "getClientAppId",
                value: function() {
                    return i.default.appid
                }
            }, {
                key: "getClientVersion",
                value: function() {
                    return i.default.appver
                }
            }, {
                key: "isHidden",
                value: function(e) {
                    return "none" === window.getComputedStyle(e).display
                }
            }, {
                key: "getUUID",
                value: function() {
                    var e, t, n = "";
                    for (e = 0; e < 32; e++) t = 16 * Math.random() | 0, 8 != e && 12 != e && 16 != e && 20 != e || (n += "-"), n += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
                    return n
                }
            }, {
                key: "getJarvisClientRootUrlByEnv",
                value: function() {
                    if ("local" === i.default.env) return ".";
                    var e = "";
                    if ("dev" === i.default.env) e = o.default.CLIENT_DEV_PATH;
                    else if ("qe" === i.default.env) e = o.default.CLIENT_QE_PATH;
                    else if ("integration" === i.default.env) e = o.default.CLIENT_INTEGRATION_PATH;
                    else if ("stage" === i.default.env) e = o.default.CLIENT_STAGE_PATH;
                    else {
                        if ("prod" !== i.default.env) return void r.default.error("Wrong environment");
                        e = o.default.CLIENT_PROD_PATH
                    }
                    return e + "/" + this.getClientVersion()
                }
            }, {
                key: "createXMLHttp",
                value: function() {
                    if (void 0 !== ("undefined" == typeof XMLHttpRequest ? "undefined" : a(XMLHttpRequest))) return new XMLHttpRequest;
                    if (window.ActiveXObject)
                        for (var e = ["MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp", "Microsoft.XMLHttp"], t = 0; t < e.length; t++) try {
                            return new ActiveXObject(e[t])
                        } catch (e) {}
                }
            }]), e
        }();
        t.default = new d
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = u(n(0));
        n(13);
        var s = u(n(2)),
            i = u(n(3)),
            o = u(n(1)),
            r = u(n(6)),
            l = u(n(5)),
            d = u(n(17));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = new function e() {
            var t = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.getMessageUIInitPayload = function() {
                return {
                    namespace: "adbmsg",
                    window_origin: window.location.origin,
                    iframe_origin: a.default.getMessagingClientURL(),
                    popped: a.default.getMessagingWindowState() === a.default.messagingWindowStateEnum.POPOUT,
                    hostAnalyticsCallbackPresent: !!a.default.initJson.callbacks.analyticsCallback,
                    params: a.default.getCommonAnalyticsParams(),
                    context: a.default.getContextInfo(),
                    userProfile: a.default.userProfile
                }
            }, this.getMessagingClientHashedUrl = function() {
                var e = window.location.origin;
                e || (e = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""));
                var t = {
                    window_origin: window.location.origin,
                    iframe_origin: a.default.getMessagingClientURL(),
                    popped: a.default.getMessagingWindowState() === a.default.messagingWindowStateEnum.POPOUT
                };
                return a.default.getMessagingClientURL() + "?lc=" + a.default.initJson.language + "_" + a.default.initJson.region + "#" + encodeURIComponent(JSON.stringify(t))
            }, this.isMobile = function() {
                return window.innerHeight <= 610 && window.innerWidth <= 414
            }, this.loadIframeUI = function() {
                t.adbmsgContentIframe.setAttribute("frameBorder", 0), t.adbmsgContentIframe.setAttribute("src", t.getMessagingClientHashedUrl())
            }, this.handleOpenMessagingWindow = function(e) {
                if (!a.default.isAdobeMessagingClientLoadStarted) {
                    var n = s.default.sendMessageToHost(s.default.hostCallbacks.GET_CONTEXT_CALLBACK);
                    n && ("teamAdmin" === n.userRole && a.default.serverInitResponse.agentFallbackLocale && a.default.serverInitResponse.enterpriseTeamLocale && a.default.serverInitResponse.agentFallbackLocale != a.default.serverInitResponse.enterpriseTeamLocale && (a.default.serverInitResponse.agentFallbackLocale = a.default.serverInitResponse.enterpriseTeamLocale), a.default.updateInitContext(n))
                }
                if (e && e.sourceType) {
                    var i = e.componentid || a.default.initJson.componentid,
                        o = (e.componentver || a.default.initJson.componentver, e.sourceType),
                        d = e.sourceText || "",
                        u = {
                            "event.workflow": "init",
                            "event.subcategory": "launch",
                            "event.type": "click"
                        };
                    "AdobeMessaging" === i ? t.badgeVisible ? u["event.subtype"] = "unread" : u["event.subtype"] = "new" : i && (u["event.subtype"] = i.toLowerCase()), o && d && (u["content.name"] = (o + "-" + d).toLowerCase()), r.default.sendEvent(u)
                }
                a.default.serverInitResponse.releaseControl.showAdobeMessaging && (t.removeSalesPopUp(), a.default.isAdobeMessagingClientLoadStarted ? (t.adbmsgCta.style.display = "none", t.adbmsgContentContainer.style.display = "block", l.default.sendMessageToMessagingUI(l.default.uiMessagesEnum.WINDOW_OPENED), t.badgeVisible && l.default.sendMessageToMessagingUI(l.default.uiMessagesEnum.REFRESH_MESSAGE_UI)) : (a.default.isAdobeMessagingClientLoadStarted = !0, n ? l.default.sendMessageToMessagingUI(l.default.uiMessagesEnum.START_SERVICE_CONNECTION, n) : l.default.sendMessageToMessagingUI(l.default.uiMessagesEnum.START_SERVICE_CONNECTION), t.adbmsgCta.style.display = "none", t.adbmsgContentContainer.style.display = "block"), t.adbmsgContentContainer.classList.remove("downwardAnimate"), t.adbmsgContentContainer.classList.add("upwardAnimate"), t.showConversationMarker(!1), t.isMobile() && setTimeout(function() {
                    window.onhashchange = null, location.hash += "#messaging", setTimeout(function() {
                        window.onhashchange = function() {
                            location.hash.includes("#messaging") || t.handleMinimizeMessagingWindow()
                        }
                    }, 0)
                }, 0))
            }, this.handleWSCreationForClientWindow = function() {
                o.default.log("Creating WS for host window"), l.default.sendMessageToMessagingUI(l.default.uiMessagesEnum.START_SERVICE_CONNECTION, null, !1)
            }, this.handleMinimizeMessagingWindow = function() {
                t.adbmsgContentContainer.classList.remove("upwardAnimate"), t.adbmsgContentContainer.classList.add("downwardAnimate"), a.default.getMessagingWindowState() === a.default.messagingWindowStateEnum.POPOUT && (a.default.setMessagingWindowState(a.default.messagingWindowStateEnum.DOCKED), clearInterval(t.timer)), setTimeout(function() {
                    t.adbmsgContentContainer.style.display = "none"
                }, 250);
                var e = a.default.serverInitResponse;
                a.default.conversationActive ? e.uiPolicy.showButtonAfterClose ? t.adbmsgCta.style.display = "block" : t.adbmsgCta.style.display = "none" : e.uiPolicy.showCTA ? t.adbmsgCta.style.display = "block" : t.adbmsgCta.style.display = "none", l.default.sendMessageToMessagingUI(l.default.uiMessagesEnum.WINDOW_MINIMIZED), t.showConversationMarker(!1), t.isMobile() && location.hash.includes("#messaging") && (location.hash = location.hash.replace("#messaging", ""))
            }, this.handleCloseMessagingWindow = function(e) {
                t.handleMinimizeMessagingWindow(), e && (a.default.isAdobeMessagingClientLoadStarted = !1)
            }, this.checkTabPress = function(e) {
                var n = document.activeElement;
                if (null !== n)
                    if (9 === e.keyCode && n.className.indexOf("adbmsgCta") > -1) - 1 === n.className.split(" ").indexOf("focus-ring") && (n.className += " focus-ring");
                    else {
                        n = t.adbmsgCta;
                        var a = new RegExp("\\bfocus-ring\\b", "g");
                        n.className = n.className.replace(a, "")
                    }
            }, this.handleCtaClick = function(e) {
                e.preventDefault(), e.stopPropagation(), t.handleOpenMessagingWindow({
                    appid: a.default.initJson.appid,
                    appver: a.default.initJson.appver,
                    componentid: i.default.getClientAppId(),
                    componentver: i.default.getClientVersion(),
                    sourceType: "button",
                    sourceText: "button"
                })
            }, this.simulateCTAClick = function() {
                t.timeoutCta && (clearTimeout(t.timeoutCta), t.timeoutCta = void 0), t.handleOpenMessagingWindow({
                    appid: a.default.initJson.appid,
                    appver: a.default.initJson.appver,
                    componentid: i.default.getClientAppId(),
                    componentver: i.default.getClientVersion(),
                    sourceType: "auto",
                    sourceText: "button"
                })
            }, this.resizeDimension = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (window.innerWidth <= 414 ? (t.adbmsgContentContainer.style.width = window.innerWidth + "px", t.adbmsgContentIframe.style.width = window.innerWidth + "px", t.adbmsgSalesPopUpContainer && !i.default.isHidden(t.adbmsgSalesPopUpContainer) && (t.hideSalesPopUp(), t.adbmsgSalesPopUpContainerHiddenForMobileWidth = !0)) : (t.adbmsgContentContainer.style.width = "380px", t.adbmsgContentIframe.style.width = "380px", t.adbmsgSalesPopUpContainerHiddenForMobileWidth && (t.showSalesPopUp(), t.adbmsgSalesPopUpContainerHiddenForMobileWidth = !1)), window.innerHeight <= 190 ? (t.adbmsgContentContainer.style.height = window.innerHeight + "px", t.adbmsgContentIframe.style.height = window.innerHeight + "px") : window.innerHeight <= 620 && window.innerWidth >= 415 ? (t.adbmsgContentContainer.style.height = window.innerHeight - 40 + "px", t.adbmsgContentIframe.style.height = window.innerHeight - 40 + "px") : window.innerHeight <= 610 ? (t.adbmsgContentContainer.style.height = window.innerHeight + "px", t.adbmsgContentIframe.style.height = window.innerHeight + "px") : (t.adbmsgContentContainer.style.height = "580px", t.adbmsgContentIframe.style.height = "580px"), setTimeout(function() {
                        window.outerHeight === screen.height ? (t.openedInFullScreenMode || a.default.isAdobeMessagingClientLoadStarted && l.default.sendMessageToMessagingUI(l.default.uiMessagesEnum.POP_OUT_STATE, {
                            canPopOut: !1
                        }), t.openedInFullScreenMode = !0) : (t.openedInFullScreenMode && a.default.isAdobeMessagingClientLoadStarted && l.default.sendMessageToMessagingUI(l.default.uiMessagesEnum.POP_OUT_STATE, {
                            canPopOut: !0
                        }), t.openedInFullScreenMode = !1)
                    }, 100), !n) {
                    var s = Number(t.adbmsgContentContainer.style.width.substr(0, t.adbmsgContentContainer.style.width.length - 2)),
                        o = t.adbmsgContentContainer.offsetLeft,
                        r = window.innerWidth - s - o;
                    s + r >= 420 && (o > 0 ? t.adbmsgContentContainer.style.right = r + "px" : "block" === t.adbmsgContentContainer.style.display && (t.adbmsgContentContainer.style.right = window.innerWidth - s + "px"))
                }
            }, this.createElement = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    a = document.createElement(e);
                return t && t.split(",").forEach(function(e) {
                    return a.classList.add(e)
                }), n && n.appendChild(a), a
            }, this.renderElement = function() {
                if (a.default.serverInitResponse.releaseControl.showAdobeMessaging) {
                    var e = a.default.serverInitResponse,
                        n = a.default.config.js_url;
                    o.default.log("base_url : " + n), t.adbMsgClientWrapper = t.createElement("div", "adbMsgClientWrapper", document.body), t.adbMsgClientWrapper.id = "adbMsgClientWrapper", t.adbmsgContainer = t.createElement("div", "adbmsgContainer", t.adbMsgClientWrapper), t.adbmsgContainer.id = "adbmsgContainer", t.adbmsgCta = t.createElement("button", "adbmsgCta", t.adbmsgContainer), t.adbmsgCta.id = "adbmsgCta", t.adbmsgCta.setAttribute("aria-label", e.localizedData.ctaText), t.adbmsgCta.setAttribute("aria-haspopup", "true"), t.adbmsgCta.classList.add("outwardAnimate"), t.adbmsgCta.addEventListener ? t.adbmsgCta.addEventListener("click", t.handleCtaClick, !1) : t.adbmsgCta.attachEvent && t.adbmsgCta.attachEvent("onclick", t.handleCtaClick), t.adbmsgbadge = t.createElement("span", "adbmsgbadge", t.adbmsgCta);
                    var s = t.createElement("p", "adbmsg-tooltip", t.adbmsgCta),
                        i = document.createTextNode(e.localizedData.ctaText);
                    s.appendChild(i), t.adbmsgContentContainer = t.createElement("div", "adbmsgContentContainer", t.adbmsgContainer), t.adbmsgContentContainer.id = "adbmsgContentContainer", t.adbmsgContentHeader = t.createElement("div", "adbmsgContentHeader", t.adbmsgContentContainer), t.adbmsgContentIframe = t.createElement("iframe", "adbmsgContentIframe", t.adbmsgContentContainer), t.loadIframeUI(), t.handleWindowFocus(), t.resizeDimension(null, !0), window.addEventListener("resize", t.resizeDimension), t.handleDrag(), document.addEventListener("keyup", function(e) {
                        t.checkTabPress(e)
                    }, !1), document.addEventListener("mousedown", function(e) {
                        t.checkTabPress(e)
                    }, !1)
                }
            }, this.handleDragWidth = function(e) {
                "INCREASE" === e ? t.adbmsgContentHeader.setAttribute("style", "width: -moz-calc(100% - 44px); width: -webkit-calc(100% - 44px); width: -o-calc(100% - 44px); width: calc(100% - 44px);") : t.adbmsgContentHeader.setAttribute("style", "width: -moz-calc(100% - 118px); width: -webkit-calc(100% - 118px); width: -o-calc(100% - 118px); width: calc(100% - 118px);")
            }, this.handleWindowFocus = function() {
                window.onfocus = function() {
                    a.default.isAdobeMessagingClientLoadStarted && l.default.sendMessageToMessagingUI(l.default.uiMessagesEnum.CLIENT_FOCUS_STATE, {
                        isInFocus: !0
                    })
                }, window.onblur = function() {
                    a.default.isAdobeMessagingClientLoadStarted && l.default.sendMessageToMessagingUI(l.default.uiMessagesEnum.CLIENT_FOCUS_STATE, {
                        isInFocus: !1
                    })
                }
            }, this.handleDrag = function() {
                var e = 0,
                    n = 0,
                    a = function(a) {
                        (a = a || window.event).preventDefault && a.preventDefault();
                        var s = n + e - a.clientX;
                        s < 0 && (s = 0), s + 380 > window.innerWidth && (s = window.innerWidth - 380), t.adbmsgContentContainer.style.right = s + "px"
                    },
                    s = function s() {
                        e = 0, n = 0, t.adbmsgContentIframe.classList.remove("ignoreMouse"), document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", s), document.removeEventListener("mouseleave", s)
                    };
                t.adbmsgContentHeader.addEventListener("mousedown", function(i) {
                    (i = i || window.event).preventDefault && i.preventDefault(), e = i.clientX, n = window.innerWidth - t.adbmsgContentContainer.offsetLeft - 380, t.adbmsgContentIframe.classList.add("ignoreMouse"), document.addEventListener("mousemove", a), document.addEventListener("mouseup", s), document.addEventListener("mouseleave", s)
                })
            }, this.handleInitialServerPolicies = function() {
                t.showConversationMarker(!1);
                var e = a.default.serverInitResponse;
                if ("none" != e.uiPolicy.ctaStyleOverride && t.adbmsgCta.classList.add(e.uiPolicy.ctaStyleOverride), "none" != e.uiPolicy.wndStyleOverride && t.adbmsgContentContainer.classList.add(e.uiPolicy.wndStyleOverride), e.uiPolicy.yOffset) {
                    var n = e.uiPolicy.yOffset;
                    !isNaN(n) && n > 0 && (t.adbmsgCta.style.bottom = n + "px")
                }
                e.showPopUp && !e.messagingState.conversationExists && t.addSalesPopUpToDOM(e)
            }, this.renderCTAasPerPolicy = function(e) {
                0 != e.uiPolicy.loadDelay ? setTimeout(function() {
                    t.adbmsgCta.style.display = "block", r.default.sendEvent({
                        "event.workflow": "init",
                        "event.subcategory": "launch",
                        "event.type": "render",
                        "event.subtype": "read",
                        "content.name": "button"
                    }, !1)
                }, 1e3 * e.uiPolicy.loadDelay) : (t.adbmsgCta.style.display = "block", r.default.sendEvent({
                    "event.workflow": "init",
                    "event.subcategory": "launch",
                    "event.type": "render",
                    "event.subtype": "read",
                    "content.name": "button"
                }, !1))
            }, this.applyInitialServerPolicies = function() {
                var e = a.default.serverInitResponse;
                e.messagingState.conversationExists ? (a.default.conversationActive = !0, e.uiPolicy.openMessagingWindow ? (t.adbmsgCta.style.display = "none", t.handleOpenMessagingWindow({
                    appid: a.default.initJson.appid,
                    appver: a.default.initJson.appver,
                    componentid: i.default.getClientAppId(),
                    componentver: i.default.getClientVersion(),
                    sourceType: "auto",
                    sourceText: "button"
                })) : (t.showConversationMarker(!0), e.uiPolicy.showCTA ? t.renderCTAasPerPolicy(e) : t.adbmsgCta.style.display = "block")) : e.uiPolicy.showCTA && t.renderCTAasPerPolicy(e), t.adbmsgSalesPopUpContainer && (e.popUpLoadDelay && 0 != e.popUpLoadDelay ? setTimeout(function() {
                    t.showSalesPopUp(!0)
                }, 1e3 * e.popUpLoadDelay) : t.showSalesPopUp(!0))
            }, this.showConversationMarker = function(e) {
                e ? a.default.serverInitResponse.uiPolicy.showDotAfterClose && (i.default.isHidden(t.adbmsgCta) || (t.badgeVisible || r.default.sendEvent({
                    "event.workflow": "init",
                    "event.subcategory": "launch",
                    "event.type": "render",
                    "event.subtype": "unread",
                    "content.name": "button"
                }), t.badgeVisible = !0, t.adbmsgbadge.style.display = "block")) : (t.badgeVisible = !1, t.adbmsgbadge.style.display = "none")
            }, this.applyHostOverrides = function(e) {
                if (e) {
                    if (e.hasOwnProperty("cta")) {
                        var n = e.cta,
                            a = t.adbmsgCta;
                        a.classList.contains(n) || a.classList.add(n)
                    }
                    if (e.hasOwnProperty("wnd")) {
                        var s = e.wnd,
                            i = t.adbmsgContentContainer;
                        i.classList.contains(s) || i.classList.add(s)
                    }
                }
            }, this.getMessagingExperienceState = function() {
                return {
                    windowState: i.default.isHidden(t.adbmsgContentContainer) ? "hidden" : a.default.messagingWindowState,
                    ctaState: i.default.isHidden(t.adbmsgCta) ? "hidden" : "visible"
                }
            }, this.handlePopOut = function() {
                var e = t.adbmsgContentContainer.clientWidth,
                    n = t.adbmsgContentContainer.clientHeight + 22;
                (navigator && navigator.userAgent && navigator.userAgent.indexOf("Firefox") > 0 || 0 === navigator.platform.toLowerCase().indexOf("win")) && (n = t.adbmsgContentContainer.clientHeight), a.default.setMessagingWindowState(a.default.messagingWindowStateEnum.POPOUT), t.adbmsgContentContainer.style.display = "none", t.adbmsgCta.style.display = "none";
                var s = screen.width / 2 - e / 2,
                    i = "titlebar = no, top = " + (screen.height / 2 - n / 2) + " , left = " + s + ", height = " + n + " , width = " + e,
                    o = window.open(t.getMessagingClientHashedUrl(), "", i),
                    r = t.handleCloseMessagingWindow;
                t.poppedWindow = o, window.onbeforeunload = function() {
                    t.poppedWindow && (t.poppedWindow.close(), t.poppedWindow = null)
                };
                var l = setInterval(function() {
                    o.closed && (clearInterval(l), t.poppedWindow = null, r())
                }, 100);
                t.timer = l
            }, this.handlePopIn = function() {
                a.default.setMessagingWindowState(a.default.messagingWindowStateEnum.DOCKED), clearInterval(t.timer), t.poppedWindow.close(), t.poppedWindow = null, t.adbmsgContentContainer.style.display = "block", t.adbmsgCta.style.display = "none", l.default.sendMessageToMessagingUI(l.default.uiMessagesEnum.WINDOW_OPENED)
            }, this.addSalesPopUpToDOM = function(e) {
                if (d.default.init(e), d.default.validate()) {
                    t.adbmsgSalesPopUpContainer = document.createElement("div"), t.adbmsgSalesPopUpContainer.classList.add("adbmsgSalesPopUpContainer"), t.adbmsgCta ? t.adbmsgContainer.insertBefore(t.adbmsgSalesPopUpContainer, t.adbmsgCta) : t.adbmsgContainer.appendChild(t.adbmsgSalesPopUpContainer);
                    var n = e.uiPolicy.yOffset;
                    !isNaN(n) && n > 0 ? t.adbmsgSalesPopUpContainer.style.bottom = n + 60 + 52 + "px" : t.adbmsgSalesPopUpContainer.style.bottom = "152px", d.default.addToDom(t.adbmsgSalesPopUpContainer)
                }
            }, this.handleShowPopUp = function() {
                var e = s.default.sendMessageToHost(s.default.hostCallbacks.GET_CONTEXT_CALLBACK);
                e && e.companyName && (a.default.updateInitContext(e), d.default.recreateDom(t.adbmsgSalesPopUpContainer))
            }, this.showSalesPopUp = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                d.default.validate() ? t.adbmsgSalesPopUpContainer && !a.default.isAdobeMessagingClientLoadStarted && (e && t.handleShowPopUp(), window.innerWidth <= 414 ? t.adbmsgSalesPopUpContainerHiddenForMobileWidth = !0 : (t.sentPopUpRenderAnalytics || (t.sentPopUpRenderAnalytics = !0, r.default.sendEvent({
                    "event.workflow": "init",
                    "event.subcategory": "launch",
                    "event.type": "render",
                    "event.subtype": "pop-up",
                    "content.name": "button"
                })), t.adbmsgSalesPopUpContainer.style.display = "block")) : o.default.log("Pop up validation failed, not showing pop up.")
            }, this.hideSalesPopUp = function() {
                t.adbmsgSalesPopUpContainer && (t.adbmsgSalesPopUpContainer.style.display = "none"), t.adbmsgSalesPopUpContainerHiddenForMobileWidth = !1
            }, this.removeSalesPopUp = function() {
                t.adbmsgSalesPopUpContainer && (t.adbmsgSalesPopUpContainer.parentNode.removeChild(t.adbmsgSalesPopUpContainer), t.adbmsgSalesPopUpContainer = void 0)
            }, this.poppedwindow, this.timer, this.adbmsgCta = void 0, this.adbmsgbadge = void 0, this.adbmsgContentContainer = void 0, this.adbmsgSalesPopUpContainer = void 0, this.adbmsgSalesPopUpContainerHiddenForMobileWidth = !1, this.adbmsgContentHeader = void 0, this.adbmsgContentIframe = void 0, this.openedInFullScreenMode = !1, this.timeoutCta = void 0, this.sentPopUpRenderAnalytics = !1
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            s = l(n(0)),
            i = l(n(2)),
            o = l(n(1)),
            r = l(n(4));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
                SIGNIN: "SIGNIN",
                SIGNOUT: "SIGNOUT",
                SET_CONTEXT: "SET_CONTEXT",
                HOST_DATA: "HOST_DATA",
                WINDOW_OPENED: "WINDOW_OPENED",
                WINDOW_MINIMIZED: "WINDOW_MINIMIZED",
                CLIENT_FOCUS_STATE: "CLIENT_FOCUS_STATE",
                UPDATE_USER_CONSENT: "UPDATE_USER_CONSENT",
                POP_OUT_STATE: "POP_OUT_STATE",
                START_SERVICE_CONNECTION: "START_SERVICE_CONNECTION",
                INITIAL_DATA: "INITIAL_DATA",
                REFRESH_MESSAGE_UI: "REFRESH_MESSAGE_UI",
                CHANGE_COOKIE_GUID: "CHANGE_COOKIE_GUID"
            },
            u = function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.receiveMessage = function(e) {
                        try {
                            var n = e.origin || e.originalEvent.origin;
                            if (s.default.getMessagingClientURL().substr(0, n.length) !== n) return;
                            var a = e.data;
                            try {
                                if (!a.msgType.startsWith("adbmsg_")) return
                            } catch (e) {
                                return
                            }
                            switch (a.msgType) {
                                case "adbmsg_POPOUT":
                                    r.default.handlePopOut();
                                    break;
                                case "adbmsg_POPIN":
                                    r.default.handlePopIn();
                                    break;
                                case "adbmsg_SIGNIN":
                                    i.default.sendMessageToHost(i.default.hostCallbacks.SIGN_IN_CALLBACK);
                                    break;
                                case "adbmsg_NEW_MESSAGE":
                                    r.default.showConversationMarker(!0);
                                    break;
                                case "adbmsg_LOAD_COMPLETE":
                                    o.default.log("Client message received: LOAD_COMPLETE or CONV_LOAD_COMPLETE"), t.handledLoadComplete = !0, t.sendMessageToMessagingUI(t.uiMessagesEnum.INITIAL_DATA, r.default.getMessageUIInitPayload());
                                    break;
                                case "adbmsg_INITIAL_DATA_HANDLED":
                                    o.default.log("Client message received: INITIAL_DATA_HANDLED"), t.initialDataHandled ? t.sendMessageToMessagingUI(t.uiMessagesEnum.START_SERVICE_CONNECTION) : (t.initialDataHandled = !0, r.default.applyInitialServerPolicies(), s.default.setOnReadyStateAndTriggerPendingCallbacks());
                                    break;
                                case "adbmsg_CONV_CLOSED":
                                    s.default.conversationActive = !1, s.default.leConversationId = "", s.default.skillName = "", r.default.showConversationMarker(!1), s.default.initJson.callbacks.chatStateCallback && s.default.initJson.callbacks.chatStateCallback(a.message);
                                    break;
                                case "adbmsg_MINIMIZE_WINDOW":
                                    r.default.handleMinimizeMessagingWindow();
                                    break;
                                case "adbmsg_CLOSE_WINDOW":
                                    r.default.handleDragWidth("INCREASE"), r.default.handleCloseMessagingWindow(!0);
                                    break;
                                case "adbmsg_SEND_ANALYTICS_TO_HOST":
                                    s.default.initJson.callbacks.analyticsCallback && s.default.initJson.callbacks.analyticsCallback(a.message);
                                    break;
                                case "adbmsg_CONVERSATION_ID":
                                    s.default.leConversationId = a.message;
                                    break;
                                case "adbmsg_CLIENT_SESSION_ID":
                                    s.default.clientSessionId = a.message;
                                    break;
                                case "adbmsg_CHAT_STATE":
                                    a && a.message && "open" === a.message.chatState && (s.default.conversationActive = !0, r.default.handleDragWidth("DECREASE")), s.default.initJson.callbacks.chatStateCallback && s.default.initJson.callbacks.chatStateCallback(a.message);
                                    break;
                                case "adbmsg_OPEN_WINDOW_WS":
                                    r.default.handleWSCreationForClientWindow();
                                    break;
                                case "adbmsg_SKILL_NAME":
                                    s.default.skillName = a.message
                            }
                        } catch (e) {
                            o.default.error(e)
                        }
                    }, this.sendMessageToMessagingUI = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        if (t.handledLoadComplete) {
                            var i = s.default.getMessagingClientURL(),
                                l = "adbmsgui_" + e;
                            try {
                                document.getElementsByClassName("adbmsgContentIframe")[0].contentWindow.postMessage({
                                    msgType: l,
                                    message: n
                                }, i), a && r.default.poppedWindow && r.default.poppedWindow.postMessage({
                                    msgType: l,
                                    message: n
                                }, i)
                            } catch (e) {
                                o.default.log(e)
                            }
                        } else o.default.warn("Not sending message to msgUI as it is currently not loaded")
                    }, this.startListening = function() {
                        window.addEventListener("message", t.receiveMessage, !1)
                    }, this.stopListening = function() {}, this.handledLoadComplete = !1, this.initialDataHandled = !1
                }
                return a(e, [{
                    key: "uiMessagesEnum",
                    get: function() {
                        return d
                    }
                }]), e
            }();
        t.default = new u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            o = d(n(0)),
            r = d(n(1)),
            l = d(n(14));

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, [{
                key: "initialize",
                value: function(e, t, n) {
                    this.project = e, this.env = t, this.ingestType = n, this.timeZoneString = "";
                    var a = -(new Date).getTimezoneOffset();
                    a >= 0 ? this.timeZoneString = "+" : (this.timeZoneString = "-", a *= -1), this.timeZoneString += ("0" + parseInt(a / 60)).slice(-2) + ("0" + a % 60).slice(-2)
                }
            }, {
                key: "setAuthorization",
                value: function(e, t) {
                    this.userGuid = e, this.auth = t
                }
            }, {
                key: "pad",
                value: function(e) {
                    return e < 10 ? "0" + e : e
                }
            }, {
                key: "getDateTimeString",
                value: function() {
                    var e = new Date;
                    return e.getFullYear() + "-" + this.pad(e.getMonth() + 1) + "-" + this.pad(e.getDate()) + "T" + this.pad(e.getHours()) + ":" + this.pad(e.getMinutes()) + ":" + this.pad(e.getSeconds()) + "." + (e.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) + this.timeZoneString
                }
            }, {
                key: "createXMLHttp",
                value: function() {
                    if (void 0 !== ("undefined" == typeof XMLHttpRequest ? "undefined" : s(XMLHttpRequest))) return new XMLHttpRequest;
                    if (window.ActiveXObject)
                        for (var e = ["MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp", "Microsoft.XMLHttp"], t = 0; t < e.length; t++) try {
                            return new ActiveXObject(e[t])
                        } catch (e) {}
                }
            }, {
                key: "sendEvent",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (o.default.IsCookiesEnabled()) try {
                        var n = {
                                events: []
                            },
                            s = this.getDateTimeString(),
                            i = l.default.v4(),
                            d = {};
                        d.project = this.project, d.environment = this.env, d.ingesttype = this.ingestType, d.time = s, d.data = a({}, o.default.getCommonAnalyticsParams(), e, {
                            "event.dts_end": s,
                            "event.guid": i
                        }), o.default.userProfile.userGuid && (d.data["event.user_guid"] = o.default.userProfile.userGuid), o.default.userProfile.serviceCode && (d.data["user.service_code"] = o.default.userProfile.serviceCode), o.default.userProfile.serviceLevel && (d.data["user.service_level"] = o.default.userProfile.serviceLevel), o.default.leConversationId && (d.data["event.context_guid"] = o.default.leConversationId), o.default.clientSessionId && (d.data["event.session_guid"] = o.default.clientSessionId), o.default.initJson.cookies && o.default.initJson.cookies.mcid && (d.data["event.visitor_guid"] = o.default.initJson.cookies.mcid), o.default.initJson.context && o.default.initJson.context.orgId && (d.data["event.org_guid"] = o.default.initJson.context.orgId), o.default.serverInitResponse.releaseControl && o.default.serverInitResponse.releaseControl.floodgateData && (o.default.serverInitResponse.releaseControl.floodgateData.feature_id && (d.data["exp.campaign_id"] = o.default.serverInitResponse.releaseControl.floodgateData.feature_id), o.default.serverInitResponse.releaseControl.floodgateData.variant_id && (d.data["exp.variation_id"] = o.default.serverInitResponse.releaseControl.floodgateData.variant_id)), !d.data["content.status"] && o.default.skillName && (d.data["content.status"] = o.default.skillName), n.events.push(d);
                        var u = this.createXMLHttp();
                        "prod" === this.env ? u.open("post", "https://cc-api-data.adobe.io/ingest/", !0) : u.open("post", "https://cc-api-data-stage.adobe.io/ingest/", !0), navigator && navigator.userAgent && navigator.userAgent.indexOf("Firefox") > 0 && (u.responseType = "text"), u.setRequestHeader("Content-Type", "application/json"), u.setRequestHeader("x-api-key", "messaging-web-service"), o.default.initJson.accessToken && u.setRequestHeader("Authorization", o.default.initJson.accessToken), u.timeout = 5e3;
                        var c = e["event.workflow"] + " - " + e["event.subcategory"] + " - " + e["event.type"] + " - " + e["event.subtype"];
                        u.onload = function() {
                            u.status >= 200 && u.status < 400 ? r.default.log("Successfully sent event: " + c) : r.default.warn("Error in sending event: " + c + " status: " + u.status + " Response: " + u.responseText)
                        }, u.onerror = function() {
                            r.default.warn("Some Network error occurred while sending event: " + c)
                        }, u.ontimeout = function() {
                            r.default.warn("Time out while sending event: " + c)
                        }, u.send(JSON.stringify(n)), o.default.initJson.callbacks.analyticsCallback && t && o.default.initJson.callbacks.analyticsCallback(n)
                    } catch (e) {
                        r.default.warn("Exception while sending analytics events", e)
                    }
                }
            }]), e
        }();
        t.default = new u
    }, function(e, t, n) {
        "use strict";
        var a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (a) {
            var s = new Uint8Array(16);
            e.exports = function() {
                return a(s), s
            }
        } else {
            var i = new Array(16);
            e.exports = function() {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
                return i
            }
        }
    }, function(e, t, n) {
        "use strict";
        for (var a = [], s = 0; s < 256; ++s) a[s] = (s + 256).toString(16).substr(1);
        e.exports = function(e, t) {
            var n = t || 0,
                s = a;
            return [s[e[n++]], s[e[n++]], s[e[n++]], s[e[n++]], "-", s[e[n++]], s[e[n++]], "-", s[e[n++]], s[e[n++]], "-", s[e[n++]], s[e[n++]], "-", s[e[n++]], s[e[n++]], s[e[n++]], s[e[n++]], s[e[n++]], s[e[n++]]].join("")
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            i = g(n(0)),
            o = g(n(4)),
            r = g(n(5)),
            l = g(n(2)),
            d = g(n(3)),
            u = g(n(1)),
            c = g(n(6)),
            p = g(n(21));

        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.handleInitSuccess = function(e) {
                    u.default.log("got successful response from server for init call: " + e);
                    var n = JSON.parse(e);
                    i.default.handleInitResponse(n), n.releaseControl.showAdobeMessaging && (o.default.renderElement(n), o.default.handleInitialServerPolicies());
                    var s = {};
                    s.localizedData = a({}, n.localizedData), s.releaseControl = a({}, n.releaseControl), l.default.sendMessageToHost(l.default.hostCallbacks.INIT_SUCCESS_CALLBACK, s), t.initResponseReceived = !0, c.default.sendEvent({
                        "event.workflow": "init",
                        "event.type": "response",
                        "event.subtype": "success"
                    }, !1)
                }, this.handleInitError = function(e) {
                    l.default.sendMessageToHost(l.default.hostCallbacks.INIT_ERROR_CALLBACK, e), c.default.sendEvent({
                        "event.workflow": "init",
                        "event.type": "response",
                        "event.subtype": "error",
                        "event.error_code": e
                    }, !1)
                }, this.initializeServer = function(e) {
                    e = JSON.parse(e), "local" === i.default.env && (e = p.default), i.default.setInitConfig(e), r.default.startListening();
                    var n = t.getContextForServer();
                    u.default.log("Sending context object to server : " + JSON.stringify(n));
                    var a = {
                        type: "post",
                        url: e.serverUrl + "/core/v1/messaging/init",
                        headers: {
                            "Content-Type": "application/json",
                            "x-api-key": i.default.initJson.clientId
                        },
                        withCredentials: !0
                    };
                    a.data = n, t.ajax(t.handleInitSuccess, t.handleInitError, a)
                }, this._getCookies = function() {}, this.initialize = function(e) {
                    try {
                        if (i.default.initStarted) u.default.log("Messaging already initialized");
                        else {
                            n(22);
                            i.default.initStarted = !0, e.msgdebug = !(!e.msgdebug && "true" !== t.getQueryStringValue("msgdebug")), i.default.handleInitData(e), l.default.initializeCallbacks(), u.default.log("Messaging Client version: " + i.default.getAppVersion()), c.default.initialize("messaging-web-service", i.default.env, "dunamis");
                            var a = {
                                type: "get",
                                url: d.default.getJarvisClientRootUrlByEnv() + "/initConfig.json",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                withCredentials: !1
                            };
                            t.ajax(t.initializeServer, t.handleInitError, a), c.default.sendEvent({
                                "event.workflow": "init",
                                "event.type": "request"
                            }, !1)
                        }
                    } catch (e) {
                        u.default.error(e)
                    }
                }, this.openMessagingWindow = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    i.default.isAdobeMessagingClientReady ? o.default.handleOpenMessagingWindow(e) : u.default.warn("Ignoring openMessagingWindow call from surface as Messaging is not ready.")
                }, this.closeMessageWindow = function() {
                    i.default.isAdobeMessagingClientReady ? o.default.handleCloseMessagingWindow() : u.default.warn("Ignoring closeMessageWindow call from surface as Messaging is not ready.")
                }, this.isConversationOpen = function() {
                    return i.default.conversationActive
                }, this.updateUserConsent = function(e) {
                    e.hasOwnProperty("cookiesEnabled") && ("true" === e.cookiesEnabled.toString().toLowerCase() ? i.default.initJson.cookiesEnabled = !0 : i.default.initJson.cookiesEnabled = !1, r.default.sendMessageToMessagingUI(r.default.uiMessagesEnum.UPDATE_USER_CONSENT, e))
                }, this.applyExperienceOverride = function(e) {
                    o.default.applyHostOverrides(e)
                }, this.registerForOnReadyCallback = function(e) {
                    l.default.registerForOnReadyCallback(e)
                }, this.isAdobeMessagingClientInitialized = function() {
                    return !!i.default.isAdobeMessagingClientReady
                }, this.isAdobeMessagingClientEnabled = function() {
                    return !!i.default.serverInitResponse && i.default.serverInitResponse.releaseControl.showAdobeMessaging
                }, this.handleSignIn = function(e) {
                    r.default.sendMessageToMessagingUI(r.default.uiMessagesEnum.SIGNIN, e)
                }, this.handleSignOut = function() {
                    r.default.sendMessageToMessagingUI(r.default.uiMessagesEnum.SIGNOUT)
                }, this.getMessagingExperienceState = function() {
                    return o.default.getMessagingExperienceState()
                }, this.initResponseReceived = !1
            }
            return s(e, [{
                key: "getQueryStringValue",
                value: function(e) {
                    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(e).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
                }
            }, {
                key: "getContextForServer",
                value: function() {
                    var e = a({}, i.default.initJson);
                    return e.clientVersion = d.default.getClientVersion(), e
                }
            }, {
                key: "sendHostData",
                value: function(e) {
                    var t = !0;
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            t = !1;
                            break
                        }
                    void 0 != e && null != e && !1 === t ? r.default.sendMessageToMessagingUI(r.default.uiMessagesEnum.HOST_DATA, e) : u.default.log("HostData is null")
                }
            }, {
                key: "ajax",
                value: function(e, t, n) {
                    var a = d.default.createXMLHttp();
                    for (var s in a.open(n.type, n.url, !0), n.headers) n.headers.hasOwnProperty(s) && a.setRequestHeader(s, n.headers[s]);
                    n.withCredentials && (a.withCredentials = !0), i.default.initJson.accessToken && "" !== i.default.initJson.accessToken.trim() && a.setRequestHeader("Authorization", i.default.initJson.accessToken), a.timeout = 3e4, a.onload = function() {
                        a.status >= 200 && a.status < 400 ? a.responseType && "" !== a.responseType ? e(a.response) : e(a.responseText) : t(a.status)
                    }, a.onerror = function() {
                        t(400)
                    }, a.ontimeout = function() {
                        t(408)
                    }, n.data ? a.send(JSON.stringify(n.data)) : a.send()
                }
            }]), e
        }();
        t.default = f, e.exports = f, window.AdobeMessagingExperienceClient = new f
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
        var s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.appid, this.appver, this.appType = "web", this.componentid, this.componentver, this.env = "prod", this.language, this.region, this.clientId, this.accessToken, this.fontRequired = !1, this.cookiesEnabled = !1, this.theme = "light", this.userRole = "", this.cookies = {}, this.context = {
                    orgId: "",
                    userData: {},
                    companyName: ""
                }, this.otherContext = {}, this.callbacks = {
                    signInProvider: null,
                    initCallback: null,
                    initErrorCallback: null,
                    getContextCallback: null,
                    onReadyCallback: null,
                    analyticsCallback: null,
                    chatStateCallback: null
                }, this.userAgent, this.url, this.msgdebug = !1
            }
            return a(e, [{
                key: "validateAndModifyContext",
                value: function(e) {
                    void 0 != e && null != e && (this.appid = e.appid || this.appid, this.appver = e.appver || this.appver, this.clientId = e.clientId || this.clientId, this.accessToken = e.accessToken || this.accessToken, this.cookiesEnabled = e.cookiesEnabled || this.cookiesEnabled, this.componentid = e.componentid || this.componentid, this.componentver = e.componentver || this.componentver, e.userRole && (this.userRole = e.userRole), e.companyName && (this.context.companyName = e.companyName || this.context.companyName))
                }
            }, {
                key: "validateAndInitContext",
                value: function(e) {
                    if (!(e.appid && e.appver && e.language && e.region && e.clientId)) throw "Missing context params";
                    if (this.appid = e.appid, this.appver = e.appver, this.appType = e.appType || this.appType, this.componentid = e.componentid || this.appid, this.componentver = e.componentver || this.appver, this.env = e.env || this.env, this.language = e.language, this.region = e.region, this.clientId = e.clientId, this.accessToken = e.accessToken || "", this.accessToken && !this.accessToken.toLowerCase().startsWith("bearer")) throw "Bearer accesstoken required";
                    e.fontRequired && (this.fontRequired = e.fontRequired), this.cookiesEnabled = e.cookiesEnabled || this.cookiesEnabled, this.cookies = e.cookies || {}, this.theme = e.theme || this.theme, this.otherContext = e.otherContext || this.otherContext, e.context && (this.context.orgId = e.context.orgId || "", this.context.userData = e.context.userData || {}, this.context.companyName = e.context.companyName || ""), e.callbacks && (this.callbacks.signInProvider = e.callbacks.signInProvider, this.callbacks.initCallback = e.callbacks.initCallback, this.callbacks.initErrorCallback = e.callbacks.initErrorCallback, this.callbacks.onReadyCallback = e.callbacks.onReadyCallback, this.callbacks.getContextCallback = e.callbacks.getContextCallback, this.callbacks.analyticsCallback = e.callbacks.analyticsCallback, this.callbacks.chatStateCallback = e.callbacks.chatStateCallback), e.msgdebug && (this.msgdebug = e.msgdebug), this.url = window.location.href, this.userAgent = navigator.userAgent, e.userRole && (this.userRole = e.userRole)
                }
            }]), e
        }();
        t.default = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }();
        var i = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.customerType = "consumer", this.isAgentAvailable = !0, this.fallbackLocale = "en_US", this.uiFallbackLocale = "en_US", this.agentFallbackLocale = "en_US", this.enterpriseTeamLocale = "", this.cookieGuid = "", this.messagingState = {
                    windowState: "docked",
                    conversationExists: !1
                }, this.localizedData = {}, this.uiPolicy = {
                    loadDelay: 0,
                    showCTA: !0,
                    openMessagingWindow: !0,
                    ctaStyleOverride: null,
                    wndStyleOverride: null,
                    ctaFadeInDelay: 0,
                    ctaFadeOutDelay: 0,
                    ctaTransparency: 0,
                    showButtonAfterClose: !0,
                    showDotAfterClose: !0,
                    wndType: "full"
                }, this.releaseControl = {
                    showLegacy: !1,
                    showAdobeMessaging: !1,
                    adobeMessagingClientURL: "",
                    floodgateData: {}
                }, this.showPopUp = !1, this.popUpLoadDelay = 0, this.ipAddress = ""
            }
            return s(e, [{
                key: "setResponse",
                value: function(e) {
                    this.customerType = e.customerType || this.customerType, this.isAgentAvailable = e.isAgentAvailable || this.isAgentAvailable, this.fallbackLocale = e.fallbackLocale || this.fallbackLocale, this.uiFallbackLocale = e.uiFallbackLocale || this.uiFallbackLocale, this.cookieGuid = e.cookieGuid || this.cookieGuid, this.ipAddress = e.ipAddress || this.ipAddress, e.agentFallbackLocale && void 0 != e.agentFallbackLocale ? this.agentFallbackLocale = e.agentFallbackLocale || this.agentFallbackLocale : this.agentFallbackLocale = this.fallbackLocale, this.messagingState = a({}, this.messagingState, e.messagingState), this.localizedData = a({}, this.localizedData, e.localizedData), this.uiPolicy = a({}, this.uiPolicy, e.uiPolicy), this.releaseControl = a({}, this.releaseControl, e.releaseControl), this.showPopUp = e.showPopUp || this.showPopUp, this.popUpLoadDelay = e.popUpLoadDelay || this.popUpLoadDelay, e.enterpriseTeamLocale && (this.enterpriseTeamLocale = e.enterpriseTeamLocale)
                }
            }]), e
        }();
        t.default = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = new function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.CLIENT_DEV_PATH = "https://dev-client.messaging.adobe.com", this.CLIENT_QE_PATH = "https://qe-client.messaging.adobe.com", this.CLIENT_STAGE_PATH = "https://stage-client.messaging.adobe.com", this.CLIENT_INTEGRATION_PATH = "https://integration-client.messaging.adobe.com", this.CLIENT_PROD_PATH = "https://client.messaging.adobe.com"
        }
    }, function(e, t) {}, function(e, t, n) {
        "use strict";
        var a = n(15),
            s = n(16),
            i = s;
        i.v1 = a, i.v4 = s, e.exports = i
    }, function(e, t, n) {
        "use strict";
        var a, s, i = n(7),
            o = n(8),
            r = 0,
            l = 0;
        e.exports = function(e, t, n) {
            var d = t && n || 0,
                u = t || [],
                c = (e = e || {}).node || a,
                p = void 0 !== e.clockseq ? e.clockseq : s;
            if (null == c || null == p) {
                var g = i();
                null == c && (c = a = [1 | g[0], g[1], g[2], g[3], g[4], g[5]]), null == p && (p = s = 16383 & (g[6] << 8 | g[7]))
            }
            var f = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                h = void 0 !== e.nsecs ? e.nsecs : l + 1,
                v = f - r + (h - l) / 1e4;
            if (v < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (v < 0 || f > r) && void 0 === e.nsecs && (h = 0), h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            r = f, l = h, s = p;
            var m = (1e4 * (268435455 & (f += 122192928e5)) + h) % 4294967296;
            u[d++] = m >>> 24 & 255, u[d++] = m >>> 16 & 255, u[d++] = m >>> 8 & 255, u[d++] = 255 & m;
            var b = f / 4294967296 * 1e4 & 268435455;
            u[d++] = b >>> 8 & 255, u[d++] = 255 & b, u[d++] = b >>> 24 & 15 | 16, u[d++] = b >>> 16 & 255, u[d++] = p >>> 8 | 128, u[d++] = 255 & p;
            for (var C = 0; C < 6; ++C) u[d + C] = c[C];
            return t || o(u)
        }
    }, function(e, t, n) {
        "use strict";
        var a = n(7),
            s = n(8);
        e.exports = function(e, t, n) {
            var i = t && n || 0;
            "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
            var o = (e = e || {}).random || (e.rng || a)();
            if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
                for (var r = 0; r < 16; ++r) t[i + r] = o[r];
            return t || s(o)
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            s = d(n(0)),
            i = d(n(3)),
            o = d(n(4)),
            r = d(n(6)),
            l = d(n(1));

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        n(18), n(19), n(20);
        var u = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.init = function(e) {
                    e && e.localizedData && (t.localizedData = e.localizedData)
                }, this.getRandomAvatarUrl = function() {
                    var e = Math.floor(15 * Math.random()) + 1;
                    return i.default.getJarvisClientRootUrlByEnv() + "/assets/sales-avatar-" + e + ".png"
                }, this.handleGetStartedDXSalesPopUp = function(e) {
                    e.preventDefault(), e.stopPropagation(), o.default.hideSalesPopUp(), o.default.handleOpenMessagingWindow({
                        appid: s.default.initJson.appid,
                        appver: s.default.initJson.appver,
                        componentid: i.default.getClientAppId(),
                        componentver: i.default.getClientVersion(),
                        sourceType: "auto",
                        sourceText: "button"
                    }), r.default.sendEvent({
                        "event.workflow": "init",
                        "event.subcategory": "launch",
                        "event.type": "click",
                        "event.subtype": "get-started",
                        "content.name": "button-button"
                    });
                    t.setCookieByServerForPopUpClicked(JSON.stringify({
                        message: "GetStarted"
                    }))
                }, this.handleNotNowDXSalesPopUp = function() {
                    r.default.sendEvent({
                        "event.workflow": "init",
                        "event.subcategory": "launch",
                        "event.type": "click",
                        "event.subtype": "not-now",
                        "content.name": "button-button"
                    }), o.default.hideSalesPopUp();
                    t.setCookieByServerForPopUpClicked(JSON.stringify({
                        message: "NotNow"
                    }))
                }, this.setCookieByServerForPopUpClicked = function(e) {
                    var t = i.default.createXMLHttp();
                    t.open("post", s.default.initConfig.serverUrl + "/core/v1/messaging/setPopUpCookie", !0), t.setRequestHeader("Content-Type", "application/json"), s.default.initJson.accessToken && "" !== s.default.initJson.accessToken.trim() && t.setRequestHeader("Authorization", s.default.initJson.accessToken), t.setRequestHeader("x-api-key", s.default.initJson.clientId), t.withCredentials = !0, t.timeout = 3e4, t.onload = function() {
                        t.status >= 200 && t.status < 400 ? l.default.info("The call to server to set the cookie for pop up option selected succeeded") : l.default.info("The call to server to set the cookie for pop up option selected failed")
                    }, t.onerror = function() {
                        l.default.info("The call to server to set the cookie for pop up option selected failed")
                    }, t.ontimeout = function() {
                        l.default.info("The call to server to set the cookie for pop up option selected timed out")
                    }, t.send(e)
                }, this.validate = function() {
                    var e = !0;
                    return t.localizedData && t.localizedData.popUpTitle && t.localizedData.popUpDescription && t.localizedData.popUpGetStartedButton && t.localizedData.popUpNotNowButton || (e = !1), e
                }, this.createElement = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        a = document.createElement(e);
                    return t && t.split(",").forEach(function(e) {
                        return a.classList.add(e)
                    }), n && n.appendChild(a), a
                }, this.localizedData = void 0
            }
            return a(e, [{
                key: "renderHeader",
                value: function(e) {
                    var t = this.createElement("div", "adbmsgSalesPopUpLogo", e);
                    this.createElement("div", "adbmsgSalesPopUpLogoSvg", t)
                }
            }, {
                key: "renderInnerContent",
                value: function(e) {
                    var t = this.createElement("div", "adbmsgSalesPopUpBody", e);
                    this.renderBody(t);
                    var n = this.createElement("div", "adbmsgSalesPopUpControlContainer", e);
                    this.renderControls(n)
                }
            }, {
                key: "renderTitleWithCompanyName",
                value: function(e, t) {
                    return e.replace(/\$\{\w+\}/i, t)
                }
            }, {
                key: "renderPopUpTitle",
                value: function(e, t) {
                    var n = this.localizedData.companyPopUpTitle;
                    return n && e ? this.renderTitleWithCompanyName(n, t) : this.localizedData.popUpTitle
                }
            }, {
                key: "renderPopUpDescription",
                value: function(e) {
                    var t = this.localizedData.companyPopUpDescription;
                    return e && t ? t : this.localizedData.popUpDescription
                }
            }, {
                key: "renderBody",
                value: function(e) {
                    var t = s.default.initJson.context.companyName,
                        n = !!t,
                        a = this.createElement("div", "adbmsgSalesPopUpAvatar", e);
                    this.createElement("img", "adbmsgSalesPopUpAvatarImg", a).src = this.getRandomAvatarUrl();
                    var i = this.createElement("div", "adbmsgSalesPopUpBodyPara", e),
                        o = this.createElement("div", "adbmsgSalesPopUpBodyParaTitle", i),
                        r = "" + this.renderPopUpTitle(n, t);
                    o.innerHTML = r, this.createElement("div", "adbmsgSalesPopUpBodyParaDescription", i).innerHTML = "" + this.renderPopUpDescription(n)
                }
            }, {
                key: "addFocusRingHandling",
                value: function(e) {
                    e.addEventListener("focus", function() {
                        e.classList.add("focus-ring")
                    }, !1), e.addEventListener("blur", function() {
                        e.classList.remove("focus-ring")
                    }, !1)
                }
            }, {
                key: "renderControls",
                value: function(e) {
                    var t = this.createElement("div", "adbmsgSalesPopUpControls", e),
                        n = this.createElement("button", "spectrum-Button,spectrum-Button--quiet,spectrum-Button--overBackground", t),
                        a = this.createElement("span", "spectrum-Button-label", n);
                    this.addFocusRingHandling(n), a.innerHTML = this.localizedData.popUpNotNowButton, n.setAttribute("aria-label", this.localizedData.popUpNotNowButton), n.addEventListener && n.addEventListener("click", this.handleNotNowDXSalesPopUp, !1);
                    var s = this.createElement("button", "spectrum-Button,spectrum-Button--overBackground", t),
                        i = this.createElement("span", "spectrum-Button-label", s);
                    this.addFocusRingHandling(s), i.innerHTML = this.localizedData.popUpGetStartedButton, s.setAttribute("aria-label", this.localizedData.popUpGetStartedButton), s.addEventListener && s.addEventListener("click", this.handleGetStartedDXSalesPopUp, !1)
                }
            }, {
                key: "addToDom",
                value: function(e) {
                    this.adbmsgSalesPopUpContent = this.createElement("div", "adbmsgSalesPopUpContent", e);
                    var t = this.createElement("div", "adbmsgSalesPopUpHeader", this.adbmsgSalesPopUpContent);
                    this.renderHeader(t);
                    var n = this.createElement("div", "adbmsgSalesPopUpInnerContent", this.adbmsgSalesPopUpContent);
                    this.renderInnerContent(n)
                }
            }, {
                key: "removeFromDom",
                value: function() {
                    this.adbmsgSalesPopUpContent && this.adbmsgSalesPopUpContent.parentNode.removeChild(this.adbmsgSalesPopUpContent)
                }
            }, {
                key: "recreateDom",
                value: function(e) {
                    this.removeFromDom(), this.addToDom(e)
                }
            }]), e
        }();
        t.default = new u
    }, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {
        e.exports = {
            serverUrl: "http://localhost:9000",
            wsUrl: "http://localhost:9000"
        }
    }, function(e, t, n) {
        var a = {
            "./sales-avatar-1.png": 23,
            "./sales-avatar-10.png": 24,
            "./sales-avatar-11.png": 25,
            "./sales-avatar-12.png": 26,
            "./sales-avatar-13.png": 27,
            "./sales-avatar-14.png": 28,
            "./sales-avatar-15.png": 29,
            "./sales-avatar-2.png": 30,
            "./sales-avatar-3.png": 31,
            "./sales-avatar-4.png": 32,
            "./sales-avatar-5.png": 33,
            "./sales-avatar-6.png": 34,
            "./sales-avatar-7.png": 35,
            "./sales-avatar-8.png": 36,
            "./sales-avatar-9.png": 37
        };

        function s(e) {
            return n(i(e))
        }

        function i(e) {
            var t = a[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        s.keys = function() {
            return Object.keys(a)
        }, s.resolve = i, e.exports = s, s.id = 22
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-1.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-10.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-11.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-12.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-13.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-14.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-15.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-2.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-3.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-4.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-5.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-6.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-7.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-8.png"
    }, function(e, t, n) {
        e.exports = n.p + "assets/sales-avatar-9.png"
    }])
});