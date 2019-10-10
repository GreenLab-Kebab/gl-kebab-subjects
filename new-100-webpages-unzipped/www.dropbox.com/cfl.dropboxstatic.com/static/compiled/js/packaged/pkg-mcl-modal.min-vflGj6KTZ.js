define("modules/clean/logging/hive/schemas/web-modal-activity", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.MOVE = "move", e.COPY = "copy", e.NEW_FOLDER = "new_folder", e.UPLOAD = "upload", e.SEARCH_FILTER = "search_filter", e.KEYBOARD_SHORTCUTS = "keyboard_shortcuts", e.EXPORT_LEGAL_HOLD = "export_legal_hold", e.FOLDER_OVERVIEW_PIN_TO = "folder_overview_pin_to", e.CLOUD_DOCS_CREATE = "cloud_docs_create", e.FOLDER_OVERVIEW_EXAMPLES = "folder_overview_examples", e.DELETED_FILES_FILTER = "deleted_files_filter"
    })(t.ModalName || (t.ModalName = {}));
    (function(e) {
        e.SHOW = "show", e.ERROR = "error", e.SUCCESS = "success", e.DATA_LOADED = "data-loaded", e.BREADCRUMB_CLICKED = "breadcrumb-clicked", e.ROW_CLICKED = "row-clicked", e.READY = "ready", e.CLOSE = "close", e.PRIMARY_CLICK = "primary-click", e.SECONDARY_CLICK = "secondary-click", e.CHANGE_FOLDER_AUDIENCE = "change-folder-audience", e.FOLDER_SUGGESTION_API_RESPONSE = "folder-suggestion-api-response", e.FOLDER_SUGGESTION_CLICKED = "folder-suggestion-clicked", e.FOLDER_SUGGESTION_LOCATION_CLICKED = "folder-suggestion-location-clicked"
    })(t.ModalEventName || (t.ModalEventName = {}));
    (function(e) {
        e.CONFIDENTIAL = "confidential", e.NON_CONFIDENTIAL = "non-confidential"
    })(t.FolderType || (t.FolderType = {}));
    var n = (function() {
        function e(e) {
            this.category = "web-modal-activity", this.user_id = null, this.team_id = null, this.modal_name = e.modal_name, this.modal_session_id = e.modal_session_id, this.event_name = e.event_name.toString(), e.hasOwnProperty("timestamp") && void 0 !== e.timestamp ? this.timestamp = e.timestamp : this.timestamp = Date.now(), e.hasOwnProperty("user_id") && void 0 !== e.user_id && (this.user_id = e.user_id), e.hasOwnProperty("team_id") && void 0 !== e.team_id && (this.team_id = e.team_id), e.hasOwnProperty("session_id") && void 0 !== e.session_id && (this.session_id = e.session_id), e.hasOwnProperty("path") && void 0 !== e.path && (this.path = e.path), e.hasOwnProperty("index") && void 0 !== e.index && (this.index = e.index), e.hasOwnProperty("is_keyboard") && void 0 !== e.is_keyboard && (this.is_keyboard = e.is_keyboard), e.hasOwnProperty("error") && void 0 !== e.error && (this.error = e.error), e.hasOwnProperty("folder_type") && void 0 !== e.folder_type && (this.folder_type = e.folder_type), e.hasOwnProperty("folder_suggestion_path") && void 0 !== e.folder_suggestion_path && (this.folder_suggestion_path = e.folder_suggestion_path), Object.seal(this)
        }
        return e
    })();
    t.WebModalActivityRow = n
}), define("modules/clean/ux_analytics_modal_tracking", ["require", "exports", "tslib", "react"], function(e, t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o), t.UXAnalyticsModalTracking = function(e) {
        return o.default.createElement("span", {
            className: "uxa-modal uxa-modal-tracking-span",
            id: e.id,
            style: {
                display: "none"
            }
        })
    }
}), define("modules/clean/web_modal_activity_logger", ["require", "exports", "tslib", "modules/clean/logging/telemetry", "modules/clean/logging/hive/schemas/web-modal-activity", "modules/clean/search/store_helpers"], function(e, t, n, o, r, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o);
    var i = (function() {
        function e(e) {
            this.modalName = e, this.modalSessionId = a.generateRandomId(), this.logger = new o.HiveLogger
        }
        return e.prototype.log = function(e, t) {
            this.logger.log(new r.WebModalActivityRow(n.__assign({
                modal_name: this.modalName,
                modal_session_id: this.modalSessionId,
                event_name: e
            }, t)))
        }, e
    })();
    t.WebModalActivityLogger = i
}), define("spectrum/label", ["require", "exports", "tslib", "spectrum/label/label"], function(e, t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(o, t)
}), define("spectrum/label/label", ["require", "exports", "tslib", "tslib", "classnames", "react"], function(e, t, n, o, r, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), r = n.__importDefault(r), a = n.__importStar(a), t.Label = function(e) {
        var t = e.children,
            n = e.className,
            i = e.disabled,
            s = o.__rest(e, ["children", "className", "disabled"]),
            l = r.default(n, {
                "mc-label": !0,
                "mc-label-disabled": i
            });
        return a.createElement("label", o.__assign({
            className: l
        }, s), t)
    }, t.Label.displayName = "Label"
}), define("spectrum/modal", ["require", "exports", "tslib", "spectrum/modal/modal", "spectrum/modal/utility_modal"], function(e, t, n, o, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(o, t), n.__exportStar(r, t)
}), define("spectrum/modal/modal", ["require", "exports", "tslib", "tslib", "classnames", "react", "react-modal", "spectrum/button", "spectrum/icon_form", "spectrum/scroll_locker"], function(e, t, n, o, r, a, i, s, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), r = n.__importDefault(r), a = n.__importStar(a), i = n.__importDefault(i);
    var c = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.initBodyPaddingRight = "0", t.closeButtonRef = a.createRef(), t.performModalOpenOperation = function() {
                t.initBodyPaddingRight = u.getBodyPadding(), u.lockScroll()
            }, t.performModalCloseOperation = function() {
                u.unlockScroll(t.initBodyPaddingRight)
            }, t.findElementToFocus = function() {
                var e = t.props.focusedElementOnOpen;
                return e && e.current ? e.current : t.closeButtonRef.current
            }, t.onAfterOpen = function() {
                var e = t.findElementToFocus();
                e && e.focus(), t.props.onReady && t.props.onReady()
            }, t
        }
        return o.__extends(t, e), t.prototype.componentDidMount = function() {
            this.props.open && this.performModalOpenOperation()
        }, t.prototype.componentDidUpdate = function(e) {
            this.props.open && !e.open ? this.performModalOpenOperation() : !this.props.open && e.open && this.performModalCloseOperation()
        }, t.prototype.componentWillUnmount = function() {
            this.performModalCloseOperation()
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                n = e.overlayClassName,
                u = e.width,
                c = e.height,
                f = e.bodyClassName,
                d = e.bodyId,
                p = e.displayCloseButton,
                m = e.children,
                y = r.default("mc-modal", t),
                h = r.default("mc-modal-overlay", n),
                v = this.props.contentTagName || "div",
                b = {
                    overflowX: "hidden",
                    overflowY: "auto",
                    width: u,
                    height: c
                },
                _ = {
                    contentLabel: this.props.ariaLabel,
                    isOpen: this.props.open,
                    onAfterOpen: this.onAfterOpen,
                    onRequestClose: this.props.onRequestClose,
                    className: y,
                    overlayClassName: h,
                    shouldCloseOnOverlayClick: this.props.overlayClickClose,
                    shouldFocusAfterRender: !1,
                    parentSelector: this.props.parentElement,
                    style: {
                        content: b
                    },
                    appElement: this.props.appElement
                };
            return a.createElement(i.default, o.__assign({}, _), a.createElement(v, {
                className: r.default("mc-modal-body", f),
                id: d,
                style: b
            }, p && a.createElement(s.Button, {
                variant: "styleless",
                className: "mc-modal-close",
                onClick: this.props.onRequestClose,
                ref: this.closeButtonRef
            }, a.createElement(l.IconForm, {
                className: "mc-modal-close-icon",
                name: "cancel"
            })), m))
        }, t
    })(a.Component);
    t.Modal = c
}), define("spectrum/modal/utility_modal", ["require", "exports", "tslib", "tslib", "spectrum/button", "spectrum/tertiary_link", "classnames", "react", "spectrum/modal/modal"], function(e, t, n, o, r, a, i, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), i = n.__importDefault(i), s = n.__importStar(s), (function(e) {
        e.PRIMARY = "Primary", e.SECONDARY = "Secondary", e.TERTIARY = "Tertiary", e.CLOSE = "Close"
    })(t.ModalFocus || (t.ModalFocus = {}));
    var u = s.forwardRef(function(e, t) {
        var n = e.element,
            o = e.defaultElement,
            r = e.onAction;
        return "function" == typeof n ? n(r, t) : o(n, r, t)
    });
    t.UtilityModal = function(e) {
        var n = e.primaryAction,
            c = e.secondaryAction,
            f = e.link,
            d = e.title,
            p = e.variant,
            m = void 0 === p ? "regular" : p,
            y = e.onPrimaryAction,
            h = e.onSecondaryAction,
            v = e.onLink,
            b = e.overlayClickClose,
            _ = void 0 === b || b,
            O = e.displayCloseButton,
            g = void 0 !== O && O,
            C = e.children,
            w = (e.ref, e.bodyClassName),
            E = e.shouldRequestCloseOnActions,
            S = void 0 === E || E,
            R = e.focusedElementOnOpen,
            M = void 0 === R ? t.ModalFocus.PRIMARY : R,
            P = o.__rest(e, ["primaryAction", "secondaryAction", "link", "title", "variant", "onPrimaryAction", "onSecondaryAction", "onLink", "overlayClickClose", "displayCloseButton", "children", "ref", "bodyClassName", "shouldRequestCloseOnActions", "focusedElementOnOpen"]),
            N = i.default({
                "mc-util-modal": !0,
                "mc-util-modal-regular": "regular" === m,
                "mc-util-modal-small": "small" === m
            }, w),
            A = s.createRef(),
            j = function(e) {
                return function() {
                    var t = P.onRequestClose;
                    e && e(), t && S && t()
                }
            };
        return s.createElement(l.Modal, o.__assign({
            displayCloseButton: g,
            bodyClassName: N,
            overlayClickClose: _,
            focusedElementOnOpen: "object" == typeof M ? M : A
        }, P), s.createElement("div", {
            className: "mc-util-modal-header"
        }, d), s.createElement("div", {
            className: "mc-util-modal-body"
        }, C), s.createElement("div", {
            className: "mc-util-modal-actions"
        }, s.createElement("div", null, "regular" === m && f ? s.createElement(u, {
            element: f,
            ref: A,
            defaultElement: function(e, n, o) {
                return s.createElement(a.TertiaryLink, {
                    onClick: n,
                    ref: M === t.ModalFocus.TERTIARY ? o : null
                }, e)
            },
            onAction: v
        }) : null), s.createElement("div", {
            className: "mc-util-modal-actions-buttons"
        }, c && s.createElement(u, {
            element: c,
            ref: A,
            defaultElement: function(e, n, o) {
                return s.createElement(r.Button, {
                    variant: "secondary",
                    onClick: n,
                    ref: M === t.ModalFocus.SECONDARY ? o : null
                }, e)
            },
            onAction: j(h)
        }), s.createElement(u, {
            element: n,
            ref: A,
            defaultElement: function(e, n, o) {
                return s.createElement(r.Button, {
                    variant: "primary",
                    onClick: n,
                    ref: M === t.ModalFocus.PRIMARY ? o : null
                }, e)
            },
            onAction: j(y)
        }))))
    }, t.UtilityModal.displayName = "UtilityModal"
}), define("spectrum/radio_button", ["require", "exports", "tslib", "spectrum/radio_button/radio_button"], function(e, t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(o, t)
}), define("spectrum/radio_button/radio_button", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum/label"], function(e, t, n, o, r, a, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), r = n.__importDefault(r), a = n.__importStar(a), t.RadioButton = function(e) {
        var t = e.className,
            n = e.children,
            s = e.labelClass,
            l = o.__rest(e, ["className", "children", "labelClass"]),
            u = r.default(t, {
                "mc-radio": !0,
                "mc-radio-disabled": l.disabled
            }),
            c = a.createElement("input", o.__assign({
                type: "radio",
                className: u
            }, l));
        return n ? a.createElement(i.Label, {
            className: s,
            disabled: l.disabled
        }, c, " ", n) : c
    }, t.RadioButton.displayName = "RadioButton"
}), (function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react"), require("react-dom")) : "function" == typeof define && define.amd ? define("react-modal", ["react", "react-dom"], t) : "object" == typeof exports ? exports.ReactModal = t(require("react"), require("react-dom")) : e.ReactModal = t(e.React, e.ReactDOM)
})("undefined" != typeof self ? self : this, function(e, t) {
    return (function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = 7)
    })([function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.canUseDOM = void 0;
        var r = n(20),
            a = o(r),
            i = a.default,
            s = i.canUseDOM ? window.HTMLElement : {};
        t.canUseDOM = i.canUseDOM;
        t.default = s
    }, function(t, n) {
        t.exports = e
    }, function(e, t, n) {
        var o = n(4);
        e.exports = n(12)(o.isElement, !0)
    }, function(e, t, n) {
        "use strict";
        e.exports = n(11)
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
            if (t && !e.innerHTML) return !0;
            var n = window.getComputedStyle(e);
            return t ? "visible" !== n.getPropertyValue("overflow") : "none" == n.getPropertyValue("display")
        }

        function r(e) {
            for (var t = e; t && t !== document.body;) {
                if (o(t)) return !1;
                t = t.parentNode
            }
            return !0
        }

        function a(e, t) {
            var n = e.nodeName.toLowerCase();
            return (l.test(n) && !e.disabled || ("a" === n ? e.href || t : t)) && r(e)
        }

        function i(e) {
            var t = e.getAttribute("tabindex");
            null === t && (t = void 0);
            var n = isNaN(t);
            return (n || t >= 0) && a(e, !n)
        }

        function s(e) {
            return [].slice.call(e.querySelectorAll("*"), 0).filter(i)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = s;
        var l = /input|select|textarea|button|object/;
        e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            if (!e || !e.length) throw new Error("react-modal: No elements were found for selector " + t + ".")
        }

        function a(e) {
            var t = e;
            if ("string" == typeof t && p.canUseDOM) {
                var n = document.querySelectorAll(t);
                r(n, t), t = "length" in n ? n[0] : n
            }
            return m = t || m
        }

        function i(e) {
            return !(!e && !m) || ((0, d.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), !1)
        }

        function s(e) {
            i(e) && (e || m).setAttribute("aria-hidden", "true")
        }

        function l(e) {
            i(e) && (e || m).removeAttribute("aria-hidden")
        }

        function u() {
            m = null
        }

        function c() {
            m = null
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.assertNodeList = r, t.setElement = a, t.validateElement = i, t.hide = s, t.show = l, t.documentNotReadyOrSSRTesting = u, t.resetForTesting = c;
        var f = n(19),
            d = o(f),
            p = n(1),
            m = null
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(8),
            a = o(r);
        t.default = a.default, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function l(e) {
            return e()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.bodyOpenClassName = t.portalClassName = void 0;
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            c = (function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            })(),
            f = n(2),
            d = r(f),
            p = n(9),
            m = r(p),
            y = n(3),
            h = r(y),
            v = n(16),
            b = r(v),
            _ = n(6),
            O = o(_),
            g = n(1),
            C = r(g),
            w = n(22),
            E = t.portalClassName = "ReactModalPortal",
            S = t.bodyOpenClassName = "ReactModal__Body--open",
            R = void 0 !== m.default.createPortal,
            M = function() {
                return R ? m.default.createPortal : m.default.unstable_renderSubtreeIntoContainer
            },
            P = (function(e) {
                function t() {
                    var e, n, o, r;
                    a(this, t);
                    for (var s = arguments.length, c = Array(s), f = 0; f < s; f++) c[f] = arguments[f];
                    return n = o = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))), o.removePortal = function() {
                        !R && m.default.unmountComponentAtNode(o.node), l(o.props.parentSelector).removeChild(o.node)
                    }, o.portalRef = function(e) {
                        o.portal = e
                    }, o.renderPortal = function(e) {
                        var n = M(),
                            r = n(o, d.default.createElement(b.default, u({
                                defaultStyles: t.defaultStyles
                            }, e)), o.node);
                        o.portalRef(r)
                    }, r = n, i(o, r)
                }
                return s(t, e), c(t, [{
                    key: "componentDidMount",
                    value: function() {
                        if (g.canUseDOM) {
                            R || (this.node = document.createElement("div")), this.node.className = this.props.portalClassName;
                            l(this.props.parentSelector).appendChild(this.node), !R && this.renderPortal(this.props)
                        }
                    }
                }, {
                    key: "getSnapshotBeforeUpdate",
                    value: function(e) {
                        return {
                            prevParent: l(e.parentSelector),
                            nextParent: l(this.props.parentSelector)
                        }
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t, n) {
                        if (g.canUseDOM) {
                            var o = this.props,
                                r = o.isOpen,
                                a = o.portalClassName;
                            e.portalClassName !== a && (this.node.className = a);
                            var i = n.prevParent,
                                s = n.nextParent;
                            s !== i && (i.removeChild(this.node), s.appendChild(this.node)), (e.isOpen || r) && !R && this.renderPortal(this.props)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        if (g.canUseDOM && this.node && this.portal) {
                            var e = this.portal.state,
                                t = Date.now(),
                                n = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || t + this.props.closeTimeoutMS);
                            n ? (e.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, n - t)) : this.removePortal()
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return g.canUseDOM && R ? (!this.node && R && (this.node = document.createElement("div")), M()(d.default.createElement(b.default, u({
                            ref: this.portalRef,
                            defaultStyles: t.defaultStyles
                        }, this.props)), this.node)) : null
                    }
                }], [{
                    key: "setAppElement",
                    value: function(e) {
                        O.setElement(e)
                    }
                }]), t
            })(f.Component);
        P.propTypes = {
            isOpen: h.default.bool.isRequired,
            style: h.default.shape({
                content: h.default.object,
                overlay: h.default.object
            }),
            portalClassName: h.default.string,
            bodyOpenClassName: h.default.string,
            htmlOpenClassName: h.default.string,
            className: h.default.oneOfType([h.default.string, h.default.shape({
                base: h.default.string.isRequired,
                afterOpen: h.default.string.isRequired,
                beforeClose: h.default.string.isRequired
            })]),
            overlayClassName: h.default.oneOfType([h.default.string, h.default.shape({
                base: h.default.string.isRequired,
                afterOpen: h.default.string.isRequired,
                beforeClose: h.default.string.isRequired
            })]),
            appElement: h.default.instanceOf(C.default),
            onAfterOpen: h.default.func,
            onRequestClose: h.default.func,
            closeTimeoutMS: h.default.number,
            ariaHideApp: h.default.bool,
            shouldFocusAfterRender: h.default.bool,
            shouldCloseOnOverlayClick: h.default.bool,
            shouldReturnFocusAfterClose: h.default.bool,
            parentSelector: h.default.func,
            aria: h.default.object,
            data: h.default.object,
            role: h.default.string,
            contentLabel: h.default.string,
            shouldCloseOnEsc: h.default.bool,
            overlayRef: h.default.func,
            contentRef: h.default.func
        }, P.defaultProps = {
            isOpen: !1,
            portalClassName: E,
            bodyOpenClassName: S,
            role: "dialog",
            ariaHideApp: !0,
            closeTimeoutMS: 0,
            shouldFocusAfterRender: !0,
            shouldCloseOnEsc: !0,
            shouldCloseOnOverlayClick: !0,
            shouldReturnFocusAfterClose: !0,
            parentSelector: function() {
                return document.body
            }
        }, P.defaultStyles = {
            overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.75)"
            },
            content: {
                position: "absolute",
                top: "40px",
                left: "40px",
                right: "40px",
                bottom: "40px",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px"
            }
        }, (0, w.polyfill)(P), t.default = P
    }, function(e, n) {
        e.exports = t
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                    case i:
                        switch (e = e.type) {
                            case p:
                            case m:
                            case l:
                            case c:
                            case u:
                            case h:
                                return e;
                            default:
                                switch (e = e && e.$$typeof) {
                                    case d:
                                    case y:
                                    case f:
                                        return e;
                                    default:
                                        return t
                                }
                        }
                    case b:
                    case v:
                    case s:
                        return t
                }
            }
        }

        function r(e) {
            return o(e) === m
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = "function" == typeof Symbol && Symbol.for,
            i = a ? Symbol.for("react.element") : 60103,
            s = a ? Symbol.for("react.portal") : 60106,
            l = a ? Symbol.for("react.fragment") : 60107,
            u = a ? Symbol.for("react.strict_mode") : 60108,
            c = a ? Symbol.for("react.profiler") : 60114,
            f = a ? Symbol.for("react.provider") : 60109,
            d = a ? Symbol.for("react.context") : 60110,
            p = a ? Symbol.for("react.async_mode") : 60111,
            m = a ? Symbol.for("react.concurrent_mode") : 60111,
            y = a ? Symbol.for("react.forward_ref") : 60112,
            h = a ? Symbol.for("react.suspense") : 60113,
            v = a ? Symbol.for("react.memo") : 60115,
            b = a ? Symbol.for("react.lazy") : 60116;
        t.typeOf = o, t.AsyncMode = p, t.ConcurrentMode = m, t.ContextConsumer = d, t.ContextProvider = f, t.Element = i, t.ForwardRef = y, t.Fragment = l, t.Lazy = b, t.Memo = v, t.Portal = s, t.Profiler = c, t.StrictMode = u, t.Suspense = h, t.isValidElementType = function(e) {
            return "string" == typeof e || "function" == typeof e || e === l || e === m || e === c || e === u || e === h || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === v || e.$$typeof === f || e.$$typeof === d || e.$$typeof === y)
        }, t.isAsyncMode = function(e) {
            return r(e) || o(e) === p
        }, t.isConcurrentMode = r, t.isContextConsumer = function(e) {
            return o(e) === d
        }, t.isContextProvider = function(e) {
            return o(e) === f
        }, t.isElement = function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === i
        }, t.isForwardRef = function(e) {
            return o(e) === y
        }, t.isFragment = function(e) {
            return o(e) === l
        }, t.isLazy = function(e) {
            return o(e) === b
        }, t.isMemo = function(e) {
            return o(e) === v
        }, t.isPortal = function(e) {
            return o(e) === s
        }, t.isProfiler = function(e) {
            return o(e) === c
        }, t.isStrictMode = function(e) {
            return o(e) === u
        }, t.isSuspense = function(e) {
            return o(e) === h
        }
    }, function(e, t, n) {
        "use strict";
        (function() {
            function e(e) {
                return "string" == typeof e || "function" == typeof e || e === _ || e === S || e === g || e === O || e === M || "object" == typeof e && null !== e && (e.$$typeof === N || e.$$typeof === P || e.$$typeof === C || e.$$typeof === w || e.$$typeof === R)
            }

            function n(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case v:
                            var n = e.type;
                            switch (n) {
                                case E:
                                case S:
                                case _:
                                case g:
                                case O:
                                case M:
                                    return n;
                                default:
                                    var o = n && n.$$typeof;
                                    switch (o) {
                                        case w:
                                        case R:
                                        case C:
                                            return o;
                                        default:
                                            return t
                                    }
                            }
                        case N:
                        case P:
                        case b:
                            return t
                    }
                }
            }

            function o(e) {
                return V || (V = !0, x(!1, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(e) || n(e) === E
            }

            function r(e) {
                return n(e) === S
            }

            function a(e) {
                return n(e) === w
            }

            function i(e) {
                return n(e) === C
            }

            function s(e) {
                return "object" == typeof e && null !== e && e.$$typeof === v
            }

            function l(e) {
                return n(e) === R
            }

            function u(e) {
                return n(e) === _
            }

            function c(e) {
                return n(e) === N
            }

            function f(e) {
                return n(e) === P
            }

            function d(e) {
                return n(e) === b
            }

            function p(e) {
                return n(e) === g
            }

            function m(e) {
                return n(e) === O
            }

            function y(e) {
                return n(e) === M
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var h = "function" == typeof Symbol && Symbol.for,
                v = h ? Symbol.for("react.element") : 60103,
                b = h ? Symbol.for("react.portal") : 60106,
                _ = h ? Symbol.for("react.fragment") : 60107,
                O = h ? Symbol.for("react.strict_mode") : 60108,
                g = h ? Symbol.for("react.profiler") : 60114,
                C = h ? Symbol.for("react.provider") : 60109,
                w = h ? Symbol.for("react.context") : 60110,
                E = h ? Symbol.for("react.async_mode") : 60111,
                S = h ? Symbol.for("react.concurrent_mode") : 60111,
                R = h ? Symbol.for("react.forward_ref") : 60112,
                M = h ? Symbol.for("react.suspense") : 60113,
                P = h ? Symbol.for("react.memo") : 60115,
                N = h ? Symbol.for("react.lazy") : 60116,
                A = function() {},
                j = function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    var r = 0,
                        a = "Warning: " + e.replace(/%s/g, function() {
                            return n[r++]
                        });
                    "undefined" != typeof console && console.warn(a);
                    try {
                        throw new Error(a)
                    } catch (e) {}
                };
            A = function(e, t) {
                if (void 0 === t) throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");
                if (!e) {
                    for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) o[r - 2] = arguments[r];
                    j.apply(void 0, [t].concat(o))
                }
            };
            var x = A,
                T = E,
                k = S,
                D = w,
                F = C,
                L = v,
                I = R,
                U = _,
                W = N,
                q = P,
                B = b,
                $ = g,
                H = O,
                Y = M,
                V = !1;
            t.typeOf = n, t.AsyncMode = T, t.ConcurrentMode = k, t.ContextConsumer = D, t.ContextProvider = F, t.Element = L, t.ForwardRef = I, t.Fragment = U, t.Lazy = W, t.Memo = q, t.Portal = B, t.Profiler = $, t.StrictMode = H, t.Suspense = Y, t.isValidElementType = e, t.isAsyncMode = o, t.isConcurrentMode = r, t.isContextConsumer = a, t.isContextProvider = i, t.isElement = s, t.isForwardRef = l, t.isFragment = u, t.isLazy = c, t.isMemo = f, t.isPortal = d, t.isProfiler = p, t.isStrictMode = m, t.isSuspense = y
        })()
    }, function(e, t, n) {
        "use strict";

        function o() {
            return null
        }
        var r = n(4),
            a = n(13),
            i = n(0),
            s = n(14),
            l = Function.call.bind(Object.prototype.hasOwnProperty),
            u = function() {};
        u = function(e) {
            var t = "Warning: " + e;
            "undefined" != typeof console && console.error(t);
            try {
                throw new Error(t)
            } catch (e) {}
        }, e.exports = function(e, t) {
            function n(e) {
                var t = e && (j && e[j] || e["@@iterator"]);
                if ("function" == typeof t) return t
            }

            function c(e, t) {
                return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
            }

            function f(e) {
                this.message = e, this.stack = ""
            }

            function d(e) {
                function n(n, a, s, l, c, d, p) {
                    if (l = l || "<<anonymous>>", d = d || s, p !== i) {
                        if (t) {
                            var m = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                            throw m.name = "Invariant Violation", m
                        }
                        if ("undefined" != typeof console) {
                            var y = l + ":" + s;
                            !o[y] && r < 3 && (u("You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), o[y] = !0, r++)
                        }
                    }
                    return null == a[s] ? n ? new f(null === a[s] ? "The " + c + " `" + d + "` is marked as required in `" + l + "`, but its value is `null`." : "The " + c + " `" + d + "` is marked as required in `" + l + "`, but its value is `undefined`.") : null : e(a, s, l, c, d)
                }
                var o = {},
                    r = 0,
                    a = n.bind(null, !1);
                return a.isRequired = n.bind(null, !0), a
            }

            function p(e) {
                function t(t, n, o, r, a, i) {
                    var s = t[n];
                    if (M(s) !== e) return new f("Invalid " + r + " `" + a + "` of type `" + P(s) + "` supplied to `" + o + "`, expected `" + e + "`.");
                    return null
                }
                return d(t)
            }

            function m() {
                return d(o)
            }

            function y(e) {
                function t(t, n, o, r, a) {
                    if ("function" != typeof e) return new f("Property `" + a + "` of component `" + o + "` has invalid PropType notation inside arrayOf.");
                    var s = t[n];
                    if (!Array.isArray(s)) {
                        return new f("Invalid " + r + " `" + a + "` of type `" + M(s) + "` supplied to `" + o + "`, expected an array.")
                    }
                    for (var l = 0; l < s.length; l++) {
                        var u = e(s, l, o, r, a + "[" + l + "]", i);
                        if (u instanceof Error) return u
                    }
                    return null
                }
                return d(t)
            }

            function h() {
                function t(t, n, o, r, a) {
                    var i = t[n];
                    if (!e(i)) {
                        return new f("Invalid " + r + " `" + a + "` of type `" + M(i) + "` supplied to `" + o + "`, expected a single ReactElement.")
                    }
                    return null
                }
                return d(t)
            }

            function v() {
                function e(e, t, n, o, a) {
                    var i = e[t];
                    if (!r.isValidElementType(i)) {
                        return new f("Invalid " + o + " `" + a + "` of type `" + M(i) + "` supplied to `" + n + "`, expected a single ReactElement type.")
                    }
                    return null
                }
                return d(e)
            }

            function b(e) {
                function t(t, n, o, r, a) {
                    if (!(t[n] instanceof e)) {
                        var i = e.name || "<<anonymous>>";
                        return new f("Invalid " + r + " `" + a + "` of type `" + A(t[n]) + "` supplied to `" + o + "`, expected instance of `" + i + "`.")
                    }
                    return null
                }
                return d(t)
            }

            function _(e) {
                function t(t, n, o, r, a) {
                    for (var i = t[n], s = 0; s < e.length; s++)
                        if (c(i, e[s])) return null;
                    var l = JSON.stringify(e, function(e, t) {
                        return "symbol" === P(t) ? String(t) : t
                    });
                    return new f("Invalid " + r + " `" + a + "` of value `" + String(i) + "` supplied to `" + o + "`, expected one of " + l + ".")
                }
                return Array.isArray(e) ? d(t) : (u(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), o)
            }

            function O(e) {
                function t(t, n, o, r, a) {
                    if ("function" != typeof e) return new f("Property `" + a + "` of component `" + o + "` has invalid PropType notation inside objectOf.");
                    var s = t[n],
                        u = M(s);
                    if ("object" !== u) return new f("Invalid " + r + " `" + a + "` of type `" + u + "` supplied to `" + o + "`, expected an object.");
                    for (var c in s)
                        if (l(s, c)) {
                            var d = e(s, c, o, r, a + "." + c, i);
                            if (d instanceof Error) return d
                        }
                    return null
                }
                return d(t)
            }

            function g(e) {
                function t(t, n, o, r, a) {
                    for (var s = 0; s < e.length; s++) {
                        if (null == (0, e[s])(t, n, o, r, a, i)) return null
                    }
                    return new f("Invalid " + r + " `" + a + "` supplied to `" + o + "`.")
                }
                if (!Array.isArray(e)) return u("Invalid argument supplied to oneOfType, expected an instance of array."), o;
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if ("function" != typeof r) return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + N(r) + " at index " + n + "."), o
                }
                return d(t)
            }

            function C() {
                function e(e, t, n, o, r) {
                    return S(e[t]) ? null : new f("Invalid " + o + " `" + r + "` supplied to `" + n + "`, expected a ReactNode.")
                }
                return d(e)
            }

            function w(e) {
                function t(t, n, o, r, a) {
                    var s = t[n],
                        l = M(s);
                    if ("object" !== l) return new f("Invalid " + r + " `" + a + "` of type `" + l + "` supplied to `" + o + "`, expected `object`.");
                    for (var u in e) {
                        var c = e[u];
                        if (c) {
                            var d = c(s, u, o, r, a + "." + u, i);
                            if (d) return d
                        }
                    }
                    return null
                }
                return d(t)
            }

            function E(e) {
                function t(t, n, o, r, s) {
                    var l = t[n],
                        u = M(l);
                    if ("object" !== u) return new f("Invalid " + r + " `" + s + "` of type `" + u + "` supplied to `" + o + "`, expected `object`.");
                    var c = a({}, t[n], e);
                    for (var d in c) {
                        var p = e[d];
                        if (!p) return new f("Invalid " + r + " `" + s + "` key `" + d + "` supplied to `" + o + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                        var m = p(l, d, o, r, s + "." + d, i);
                        if (m) return m
                    }
                    return null
                }
                return d(t)
            }

            function S(t) {
                switch (typeof t) {
                    case "number":
                    case "string":
                    case "undefined":
                        return !0;
                    case "boolean":
                        return !t;
                    case "object":
                        if (Array.isArray(t)) return t.every(S);
                        if (null === t || e(t)) return !0;
                        var o = n(t);
                        if (!o) return !1;
                        var r, a = o.call(t);
                        if (o !== t.entries) {
                            for (; !(r = a.next()).done;)
                                if (!S(r.value)) return !1
                        } else
                            for (; !(r = a.next()).done;) {
                                var i = r.value;
                                if (i && !S(i[1])) return !1
                            }
                        return !0;
                    default:
                        return !1
                }
            }

            function R(e, t) {
                return "symbol" === e || !!t && ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
            }

            function M(e) {
                var t = typeof e;
                return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : R(t, e) ? "symbol" : t
            }

            function P(e) {
                if (void 0 === e || null === e) return "" + e;
                var t = M(e);
                if ("object" === t) {
                    if (e instanceof Date) return "date";
                    if (e instanceof RegExp) return "regexp"
                }
                return t
            }

            function N(e) {
                var t = P(e);
                switch (t) {
                    case "array":
                    case "object":
                        return "an " + t;
                    case "boolean":
                    case "date":
                    case "regexp":
                        return "a " + t;
                    default:
                        return t
                }
            }

            function A(e) {
                return e.constructor && e.constructor.name ? e.constructor.name : "<<anonymous>>"
            }
            var j = "function" == typeof Symbol && Symbol.iterator,
                x = {
                    array: p("array"),
                    bool: p("boolean"),
                    func: p("function"),
                    number: p("number"),
                    object: p("object"),
                    string: p("string"),
                    symbol: p("symbol"),
                    any: m(),
                    arrayOf: y,
                    element: h(),
                    elementType: v(),
                    instanceOf: b,
                    node: C(),
                    objectOf: O,
                    oneOf: _,
                    oneOfType: g,
                    shape: w,
                    exact: E
                };
            return f.prototype = Error.prototype, x.checkPropTypes = s, x.resetWarningCache = s.resetWarningCache, x.PropTypes = x, x
        }
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }

        function r() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e]
                    }).join("")) return !1;
                var o = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    o[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
            } catch (e) {
                return !1
            }
        }
        var a = Object.getOwnPropertySymbols,
            i = Object.prototype.hasOwnProperty,
            s = Object.prototype.propertyIsEnumerable;
        e.exports = r() ? Object.assign : function(e, t) {
            for (var n, r, l = o(e), u = 1; u < arguments.length; u++) {
                n = Object(arguments[u]);
                for (var c in n) i.call(n, c) && (l[c] = n[c]);
                if (a) {
                    r = a(n);
                    for (var f = 0; f < r.length; f++) s.call(n, r[f]) && (l[r[f]] = n[r[f]])
                }
            }
            return l
        }
    }, function(e, t, n) {
        "use strict";

        function o(e, t, n, o, l) {
            for (var u in e)
                if (s(e, u)) {
                    var c;
                    try {
                        if ("function" != typeof e[u]) {
                            var f = Error((o || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.");
                            throw f.name = "Invariant Violation", f
                        }
                        c = e[u](t, u, o, n, null, a)
                    } catch (e) {
                        c = e
                    }
                    if (!c || c instanceof Error || r((o || "React class") + ": type specification of " + n + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof c + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), c instanceof Error && !(c.message in i)) {
                        i[c.message] = !0;
                        var d = l ? l() : "";
                        r("Failed " + n + " type: " + c.message + (null != d ? d : ""))
                    }
                }
        }
        var r = function() {},
            a = n(0),
            i = {},
            s = Function.call.bind(Object.prototype.hasOwnProperty);
        r = function(e) {
            var t = "Warning: " + e;
            "undefined" != typeof console && console.error(t);
            try {
                throw new Error(t)
            } catch (e) {}
        }, o.resetWarningCache = function() {
            i = {}
        }, e.exports = o
    }, function(e, t, n) {
        "use strict";

        function o() {}

        function r() {}
        var a = n(0);
        r.resetWarningCache = o, e.exports = function() {
            function e(e, t, n, o, r, i) {
                if (i !== a) {
                    var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
                }
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: r,
                resetWarningCache: o
            };
            return n.PropTypes = n, n
        }
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            c = (function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            })(),
            f = n(2),
            d = r(f),
            p = n(3),
            m = r(p),
            y = n(17),
            h = o(y),
            v = n(18),
            b = r(v),
            _ = n(6),
            O = o(_),
            g = n(21),
            C = o(g),
            w = n(1),
            E = r(w),
            S = {
                overlay: "ReactModal__Overlay",
                content: "ReactModal__Content"
            },
            R = 0,
            M = (function(e) {
                function t(e) {
                    a(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.setOverlayRef = function(e) {
                        n.overlay = e, n.props.overlayRef && n.props.overlayRef(e)
                    }, n.setContentRef = function(e) {
                        n.content = e, n.props.contentRef && n.props.contentRef(e)
                    }, n.afterClose = function() {
                        var e = n.props,
                            t = e.appElement,
                            o = e.ariaHideApp,
                            r = e.htmlOpenClassName,
                            a = e.bodyOpenClassName;
                        a && C.remove(document.body, a), r && C.remove(document.getElementsByTagName("html")[0], r), o && R > 0 && (R -= 1, 0 === R && O.show(t)), n.props.shouldFocusAfterRender && (n.props.shouldReturnFocusAfterClose ? (h.returnFocus(), h.teardownScopedFocus()) : h.popWithoutFocus()), n.props.onAfterClose && n.props.onAfterClose()
                    }, n.open = function() {
                        n.beforeOpen(), n.state.afterOpen && n.state.beforeClose ? (clearTimeout(n.closeTimer), n.setState({
                            beforeClose: !1
                        })) : (n.props.shouldFocusAfterRender && (h.setupScopedFocus(n.node), h.markForFocusLater()), n.setState({
                            isOpen: !0
                        }, function() {
                            n.setState({
                                afterOpen: !0
                            }), n.props.isOpen && n.props.onAfterOpen && n.props.onAfterOpen()
                        }))
                    }, n.close = function() {
                        n.props.closeTimeoutMS > 0 ? n.closeWithTimeout() : n.closeWithoutTimeout()
                    }, n.focusContent = function() {
                        return n.content && !n.contentHasFocus() && n.content.focus()
                    }, n.closeWithTimeout = function() {
                        var e = Date.now() + n.props.closeTimeoutMS;
                        n.setState({
                            beforeClose: !0,
                            closesAt: e
                        }, function() {
                            n.closeTimer = setTimeout(n.closeWithoutTimeout, n.state.closesAt - Date.now())
                        })
                    }, n.closeWithoutTimeout = function() {
                        n.setState({
                            beforeClose: !1,
                            isOpen: !1,
                            afterOpen: !1,
                            closesAt: null
                        }, n.afterClose)
                    }, n.handleKeyDown = function(e) {
                        9 === e.keyCode && (0, b.default)(n.content, e), n.props.shouldCloseOnEsc && 27 === e.keyCode && (e.stopPropagation(), n.requestClose(e))
                    }, n.handleOverlayOnClick = function(e) {
                        null === n.shouldClose && (n.shouldClose = !0), n.shouldClose && n.props.shouldCloseOnOverlayClick && (n.ownerHandlesClose() ? n.requestClose(e) : n.focusContent()), n.shouldClose = null
                    }, n.handleContentOnMouseUp = function() {
                        n.shouldClose = !1
                    }, n.handleOverlayOnMouseDown = function(e) {
                        n.props.shouldCloseOnOverlayClick || e.target != n.overlay || e.preventDefault()
                    }, n.handleContentOnClick = function() {
                        n.shouldClose = !1
                    }, n.handleContentOnMouseDown = function() {
                        n.shouldClose = !1
                    }, n.requestClose = function(e) {
                        return n.ownerHandlesClose() && n.props.onRequestClose(e)
                    }, n.ownerHandlesClose = function() {
                        return n.props.onRequestClose
                    }, n.shouldBeClosed = function() {
                        return !n.state.isOpen && !n.state.beforeClose
                    }, n.contentHasFocus = function() {
                        return document.activeElement === n.content || n.content.contains(document.activeElement)
                    }, n.buildClassName = function(e, t) {
                        var o = "object" === (void 0 === t ? "undefined" : u(t)) ? t : {
                                base: S[e],
                                afterOpen: S[e] + "--after-open",
                                beforeClose: S[e] + "--before-close"
                            },
                            r = o.base;
                        return n.state.afterOpen && (r = r + " " + o.afterOpen), n.state.beforeClose && (r = r + " " + o.beforeClose), "string" == typeof t && t ? r + " " + t : r
                    }, n.attributesFromObject = function(e, t) {
                        return Object.keys(t).reduce(function(n, o) {
                            return n[e + "-" + o] = t[o], n
                        }, {})
                    }, n.state = {
                        afterOpen: !1,
                        beforeClose: !1
                    }, n.shouldClose = null, n.moveFromContentToOverlay = null, n
                }
                return s(t, e), c(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.isOpen && this.open()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        e.bodyOpenClassName !== this.props.bodyOpenClassName && console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'), e.htmlOpenClassName !== this.props.htmlOpenClassName && console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'), this.props.isOpen && !e.isOpen ? this.open() : !this.props.isOpen && e.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !t.isOpen && this.focusContent()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer)
                    }
                }, {
                    key: "beforeOpen",
                    value: function() {
                        var e = this.props,
                            t = e.appElement,
                            n = e.ariaHideApp,
                            o = e.htmlOpenClassName,
                            r = e.bodyOpenClassName;
                        r && C.add(document.body, r), o && C.add(document.getElementsByTagName("html")[0], o), n && (R += 1, O.hide(t))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.id,
                            n = e.className,
                            o = e.overlayClassName,
                            r = e.defaultStyles,
                            a = n ? {} : r.content,
                            i = o ? {} : r.overlay;
                        return this.shouldBeClosed() ? null : d.default.createElement("div", {
                            ref: this.setOverlayRef,
                            className: this.buildClassName("overlay", o),
                            style: l({}, i, this.props.style.overlay),
                            onClick: this.handleOverlayOnClick,
                            onMouseDown: this.handleOverlayOnMouseDown
                        }, d.default.createElement("div", l({
                            id: t,
                            ref: this.setContentRef,
                            style: l({}, a, this.props.style.content),
                            className: this.buildClassName("content", n),
                            tabIndex: "-1",
                            onKeyDown: this.handleKeyDown,
                            onMouseDown: this.handleContentOnMouseDown,
                            onMouseUp: this.handleContentOnMouseUp,
                            onClick: this.handleContentOnClick,
                            role: this.props.role,
                            "aria-label": this.props.contentLabel
                        }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {
                            "data-testid": this.props.testId
                        }), this.props.children))
                    }
                }]), t
            })(f.Component);
        M.defaultProps = {
            style: {
                overlay: {},
                content: {}
            },
            defaultStyles: {}
        }, M.propTypes = {
            isOpen: m.default.bool.isRequired,
            defaultStyles: m.default.shape({
                content: m.default.object,
                overlay: m.default.object
            }),
            style: m.default.shape({
                content: m.default.object,
                overlay: m.default.object
            }),
            className: m.default.oneOfType([m.default.string, m.default.object]),
            overlayClassName: m.default.oneOfType([m.default.string, m.default.object]),
            bodyOpenClassName: m.default.string,
            htmlOpenClassName: m.default.string,
            ariaHideApp: m.default.bool,
            appElement: m.default.instanceOf(E.default),
            onAfterOpen: m.default.func,
            onAfterClose: m.default.func,
            onRequestClose: m.default.func,
            closeTimeoutMS: m.default.number,
            shouldFocusAfterRender: m.default.bool,
            shouldCloseOnOverlayClick: m.default.bool,
            shouldReturnFocusAfterClose: m.default.bool,
            role: m.default.string,
            contentLabel: m.default.string,
            aria: m.default.object,
            data: m.default.object,
            children: m.default.node,
            shouldCloseOnEsc: m.default.bool,
            overlayRef: m.default.func,
            contentRef: m.default.func,
            id: m.default.string,
            testId: m.default.string
        }, t.default = M, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            y = !0
        }

        function a() {
            if (y) {
                if (y = !1, !m) return;
                setTimeout(function() {
                    if (!m.contains(document.activeElement)) {
                        ((0, d.default)(m)[0] || m).focus()
                    }
                }, 0)
            }
        }

        function i() {
            p.push(document.activeElement)
        }

        function s() {
            var e = null;
            try {
                return void(0 !== p.length && (e = p.pop(), e.focus()))
            } catch (t) {
                console.warn(["You tried to return focus to", e, "but it is not in the DOM anymore"].join(" "))
            }
        }

        function l() {
            p.length > 0 && p.pop()
        }

        function u(e) {
            m = e, window.addEventListener ? (window.addEventListener("blur", r, !1), document.addEventListener("focus", a, !0)) : (window.attachEvent("onBlur", r), document.attachEvent("onFocus", a))
        }

        function c() {
            m = null, window.addEventListener ? (window.removeEventListener("blur", r), document.removeEventListener("focus", a)) : (window.detachEvent("onBlur", r), document.detachEvent("onFocus", a))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.handleBlur = r, t.handleFocus = a, t.markForFocusLater = i, t.returnFocus = s, t.popWithoutFocus = l, t.setupScopedFocus = u, t.teardownScopedFocus = c;
        var f = n(5),
            d = o(f),
            p = [],
            m = null,
            y = !1
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            var n = (0, i.default)(e);
            if (!n.length) return void t.preventDefault();
            var o = t.shiftKey,
                r = n[0],
                a = n[n.length - 1];
            if (e === document.activeElement) {
                if (!o) return;
                s = a
            }
            var s;
            if (a !== document.activeElement || o || (s = r), r === document.activeElement && o && (s = a), s) return t.preventDefault(), void s.focus();
            var l = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
            if (null != l && "Chrome" != l[1] && null == /\biPod\b|\biPad\b/g.exec(navigator.userAgent)) {
                var u = n.indexOf(document.activeElement);
                if (u > -1 && (u += o ? -1 : 1), void 0 === n[u]) return t.preventDefault(), s = o ? a : r, void s.focus();
                t.preventDefault(), n[u].focus()
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var a = n(5),
            i = o(a);
        e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        var o = function() {},
            r = function(e, t) {
                var n = arguments.length;
                t = new Array(n > 1 ? n - 1 : 0);
                for (var o = 1; o < n; o++) t[o - 1] = arguments[o];
                var r = 0,
                    a = "Warning: " + e.replace(/%s/g, function() {
                        return t[r++]
                    });
                "undefined" != typeof console && console.error(a);
                try {
                    throw new Error(a)
                } catch (e) {}
            };
        o = function(e, t, n) {
            var o = arguments.length;
            n = new Array(o > 2 ? o - 2 : 0);
            for (var a = 2; a < o; a++) n[a - 2] = arguments[a];
            if (void 0 === t) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
            e || r.apply(null, [t].concat(n))
        }, e.exports = o
    }, function(e, t, n) {
        var o;
        (function() {
            "use strict";
            var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
                a = {
                    canUseDOM: r,
                    canUseWorkers: "undefined" != typeof Worker,
                    canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
                    canUseViewport: r && !!window.screen
                };
            o = function() {
                return a
            }.call(t, n, t, e), void 0 !== o && (e.exports = o)
        })()
    }, function(e, t, n) {
        "use strict";

        function o() {
            var e = document.getElementsByTagName("html")[0].className,
                t = "Show tracked classes:\n\n";
            t += "<html /> (" + e + "):\n";
            for (var n in r) t += "  " + n + " " + r[n] + "\n";
            e = document.body.className, t += "\n\ndoc.body (" + e + "):\n";
            for (var o in a) t += "  " + o + " " + a[o] + "\n";
            t += "\n", console.log(t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.dumpClassLists = o;
        var r = {},
            a = {},
            i = function(e, t) {
                return e[t] || (e[t] = 0), e[t] += 1, t
            },
            s = function(e, t) {
                return e[t] && (e[t] -= 1), t
            },
            l = function(e, t, n) {
                n.forEach(function(n) {
                    i(t, n), e.add(n)
                })
            },
            u = function(e, t, n) {
                n.forEach(function(n) {
                    s(t, n), 0 === t[n] && e.remove(n)
                })
            };
        t.add = function(e, t) {
            return l(e.classList, "html" == e.nodeName.toLowerCase() ? r : a, t.split(" "))
        }, t.remove = function(e, t) {
            return u(e.classList, "html" == e.nodeName.toLowerCase() ? r : a, t.split(" "))
        }
    }, function(e, t, n) {
        "use strict";

        function o() {
            var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
            null !== e && void 0 !== e && this.setState(e)
        }

        function r(e) {
            function t(t) {
                var n = this.constructor.getDerivedStateFromProps(e, t);
                return null !== n && void 0 !== n ? n : null
            }
            this.setState(t.bind(this))
        }

        function a(e, t) {
            try {
                var n = this.props,
                    o = this.state;
                this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, o)
            } finally {
                this.props = n, this.state = o
            }
        }

        function i(e) {
            var t = e.prototype;
            if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
            if ("function" != typeof e.getDerivedStateFromProps && "function" != typeof t.getSnapshotBeforeUpdate) return e;
            var n = null,
                i = null,
                s = null;
            if ("function" == typeof t.componentWillMount ? n = "componentWillMount" : "function" == typeof t.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" == typeof t.componentWillReceiveProps ? i = "componentWillReceiveProps" : "function" == typeof t.UNSAFE_componentWillReceiveProps && (i = "UNSAFE_componentWillReceiveProps"), "function" == typeof t.componentWillUpdate ? s = "componentWillUpdate" : "function" == typeof t.UNSAFE_componentWillUpdate && (s = "UNSAFE_componentWillUpdate"), null !== n || null !== i || null !== s) {
                var l = e.displayName || e.name,
                    u = "function" == typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + l + " uses " + u + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== i ? "\n  " + i : "") + (null !== s ? "\n  " + s : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
            }
            if ("function" == typeof e.getDerivedStateFromProps && (t.componentWillMount = o, t.componentWillReceiveProps = r), "function" == typeof t.getSnapshotBeforeUpdate) {
                if ("function" != typeof t.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                t.componentWillUpdate = a;
                var c = t.componentDidUpdate;
                t.componentDidUpdate = function(e, t, n) {
                    var o = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
                    c.call(this, e, t, o)
                }
            }
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "polyfill", function() {
            return i
        }), o.__suppressDeprecationWarning = !0, r.__suppressDeprecationWarning = !0, a.__suppressDeprecationWarning = !0
    }])
}), define("spectrum/scroll_locker", ["require", "exports", "tslib", "spectrum/scroll_locker/scroll_locker"], function(e, t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(o, t)
}), define("spectrum/scroll_locker/scroll_locker", ["require", "exports", "exenv"], function(e, t, n) {
    "use strict";

    function o() {
        return n.canUseDOM ? document.body.style.paddingRight || "0" : "0"
    }

    function r() {
        if (!n.canUseDOM) return 0;
        var e = document.createElement("div");
        e.className = "scrollbar-measure", document.body.appendChild(e);
        var t = e.offsetWidth - e.clientWidth;
        return document.body.removeChild(e), t
    }

    function a() {
        n.canUseDOM && document.documentElement.classList.add("mc-no-scroll")
    }

    function i() {
        n.canUseDOM && document.documentElement.classList.remove("mc-no-scroll")
    }

    function s() {
        if (n.canUseDOM) {
            document.body.clientWidth < window.innerWidth && (document.body.style.paddingRight = r() + "px")
        }
    }

    function l(e) {
        n.canUseDOM && (document.body.style.paddingRight = e)
    }

    function u() {
        s(), a()
    }

    function c(e) {
        l(e), i()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getBodyPadding = o, t.lockScroll = u, t.unlockScroll = c
});
//# sourceMappingURL=pkg-mcl-modal.min.js-vfl92aV-z.map