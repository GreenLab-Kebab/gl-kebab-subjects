define("modules/clean/flux/flux_store", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (function() {
        function e(e) {
            this._listeners = [], this._dispatcher = e, this._dispatchToken = this._dispatcher.register(this.__invokeOnDispatch.bind(this)), this.__hasChanged = !1
        }
        return e.prototype.teardown = function() {
            this._dispatcher.unregister(this._dispatchToken)
        }, e.prototype.getDispatcher = function() {
            return this._dispatcher
        }, e.prototype.getDispatchToken = function() {
            return this._dispatchToken
        }, e.prototype.addListener = function(e) {
            var t = this;
            return this._listeners.push(e),
                function() {
                    return t._listeners = Array.from(t._listeners).filter(function(t) {
                        return t !== e
                    })
                }
        }, e.prototype.hasChanged = function() {
            return this.__hasChanged
        }, e.prototype.__emitChange = function() {
            this.__hasChanged = !0
        }, e.prototype.__invokeOnDispatch = function(e) {
            if (this.__hasChanged = !1, this.__onDispatch(e), this.__hasChanged) return Array.from(this._listeners).map(function(e) {
                return e()
            })
        }, e
    })();
    t.FluxStore = r
}), define("modules/clean/photos/thumb_loading/generic_thumb_store", ["require", "exports", "modules/clean/photos/thumb_loading/http2_thumb_loader", "modules/core/exception"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = (function() {
        function e(e, t) {
            this.loaderBatches = !1, this.thumbUrlToData = {}, this.callbackByRequestId = {}, this.loaderBatches = !!t, this.thumbLoader = e ? e : new r.Http2ThumbLoader
        }
        return e.prototype.is_batching = function() {
            return this.loaderBatches
        }, e.prototype.bind_url = function(e, t) {
            var r = this;
            if (n.assert(!!t.onSuccess, "missing onSuccess handler"), this.thumbUrlToData[e]) return t.onRequest && t.onRequest(!0), t.onSuccess(!0), null;
            var a = this.thumbLoader.get_request_id();
            this.callbackByRequestId[a] = t;
            var o = function() {
                    var e = r.callbackByRequestId[a];
                    e && e.onRequest && e.onRequest(!1)
                },
                i = function(t) {
                    r.thumbUrlToData[e] = t;
                    var n = r.callbackByRequestId[a];
                    n && n.onSuccess(!1)
                },
                s = function() {
                    var e = r.callbackByRequestId[a];
                    e && e.onError && e.onError()
                },
                l = function() {
                    return r.callbackByRequestId.hasOwnProperty(a)
                };
            return this.thumbLoader.load_image(e, a, o, i, s, l), a
        }, e.prototype.unbind_url = function(e) {
            e && (delete this.callbackByRequestId[e], this.thumbLoader.cancel_thumb(e))
        }, e.prototype.get_thumb = function(e) {
            return this.thumbUrlToData[e] ? this.thumbUrlToData[e] : null
        }, e
    })();
    t.GenericThumbStore = a
}), define("modules/clean/photos/thumb_loading/http2_thumb_loader", ["require", "exports", "modules/clean/photos/thumb_loading/utils"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = (function() {
        function e() {
            this.http2RequestId = 0
        }
        return e.prototype.get_request_id = function() {
            return this.http2RequestId += 1, this.http2RequestId.toString()
        }, e.prototype.load_image = function(e, t, n, a, o, i) {
            n(), r.load_individual_image(e, 1, a, o, i)
        }, e.prototype.cancel_thumb = function(e) {}, e
    })();
    t.Http2ThumbLoader = n
}), define("modules/clean/photos/thumb_loading/utils", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e, t, r, n, a) {
        var o = new Image;
        o.onload = function() {
            return r(e)
        }, o.onerror = function() {
            t > 0 && a() ? (t -= 1, o.src = e) : n()
        }, o.src = e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.load_individual_image = r
}), define("modules/clean/react/app_actions_view", ["require", "exports", "tslib", "external/classnames", "spectrum/button", "spectrum/icon_action", "spectrum/popover", "spectrum/overflow_button", "spectrum/tertiary_link", "react", "modules/core/exception", "modules/clean/react/css", "modules/clean/user_education/react/user_education_effect", "modules/clean/user_education/user_education_client", "modules/clean/react/file_uploader/upload_button", "modules/clean/react/badge"], function(e, t, r, n, a, o, i, s, l, d, u, c, p, m, h, f) {
    "use strict";

    function b(e) {
        return !("function" == typeof e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), d = r.__importDefault(d);
    var _ = function(e) {
        e.handleClick && e.handleClick()
    };
    t.AppActionsPopover = function(e) {
        var t = e.primaryMenuItems,
            r = e.secondaryMenuItems,
            n = e.popoverTriggerLabel,
            a = [];
        if (t)
            for (var l = 0, u = t; l < u.length; l++) {
                var c = u[l];
                b(c) && (a = c.subItems ? a.concat(c.subItems) : a.concat([c]))
            }
        return r && (a = a.concat.apply(a, r.filter(function(e) {
            return !("function" == typeof e)
        }))), a.length && n ? d.default.createElement(i.Popover, {
            onSelection: _
        }, d.default.createElement(i.PopoverTrigger, null, d.default.createElement(p.UserEducationEffect, {
            containerName: "AppActionsPopover",
            name: "OverflowButton",
            useSpan: !0
        }, d.default.createElement(s.OverflowButton, {
            tagName: "span",
            "aria-label": n
        }))), d.default.createElement(i.PopoverContent, {
            attachment: "right"
        }, a.map(function(e) {
            return e = e, d.default.createElement(i.PopoverContentItem, {
                key: e.displayName,
                value: e,
                className: e.className,
                disabled: e.disabled
            }, e.iconName && d.default.createElement(o.IconAction, {
                name: e.iconName,
                className: "popover-item-icon"
            }), e.displayName)
        }))) : d.default.createElement("noscript", null)
    };
    var g = function(e) {
            var t = e.popoverTriggerLabel,
                r = void 0 === t ? "" : t,
                n = e.secondaryMenuItems,
                a = void 0 === n ? [] : n,
                l = e.onContextMenuClick,
                u = [];
            return u = u.concat.apply(u, a.filter(function(e) {
                return !("function" == typeof e)
            })), u.length ? d.default.createElement(i.Popover, {
                onSelection: _
            }, d.default.createElement(i.PopoverTrigger, null, d.default.createElement(p.UserEducationEffect, {
                containerName: "AppActionsPopover",
                name: "OverflowButton",
                useSpan: !0
            }, d.default.createElement(s.OverflowButton, {
                tagName: "span",
                "aria-label": r,
                onClick: l
            }))), d.default.createElement(i.PopoverContent, {
                attachment: "right"
            }, u.map(function(e) {
                return e = e, d.default.createElement(i.PopoverContentItem, {
                    key: e.displayName,
                    value: e,
                    className: e.className,
                    disabled: e.disabled
                }, e.iconName && d.default.createElement(o.IconAction, {
                    name: e.iconName,
                    className: "popover-item-icon"
                }), e.displayName)
            }))) : d.default.createElement("noscript", null)
        },
        y = function(e, t, r) {
            m.UEClient.sendEvent(e, t), r && r()
        },
        S = function(e) {
            var t, r = e.primaryMenuItem,
                s = e.buttonVariant;
            if (b(r)) {
                if (Object.keys(r).length > 0) {
                    var l = n.default("primary-action-menu__button", r.className),
                        u = l.indexOf("action-upload") >= 0,
                        c = !!r.subItems,
                        m = d.default.createElement(p.UserEducationEffect, {
                            containerName: "AppActionsView",
                            name: "PrimaryButtonText",
                            useSpan: !0
                        }, r.displayName),
                        f = u ? d.default.createElement(h.UploadButton, {
                            className: l,
                            disabled: r.disabled,
                            handleClick: function() {
                                y("AppActionsView", "PrimaryButtonTextClicked", r.handleClick)
                            },
                            variant: s,
                            tagName: c ? "span" : void 0
                        }, m) : d.default.createElement(a.Button, {
                            className: l,
                            disabled: r.disabled,
                            onClick: r.handleClick,
                            variant: s,
                            tagName: c ? "span" : void 0
                        }, m),
                        g = c ? d.default.createElement(i.Popover, {
                            onSelection: _
                        }, d.default.createElement(i.PopoverTrigger, {
                            disabled: r.disabled
                        }, f), d.default.createElement(i.PopoverContent, {
                            className: "primary-action-menu__popover-menu"
                        }, r.subItems.map(function(e) {
                            return d.default.createElement(i.PopoverContentItem, {
                                key: e.popoverMenuName,
                                value: e,
                                className: e.className,
                                disabled: e.disabled
                            }, e.iconName && d.default.createElement(o.IconAction, {
                                name: e.iconName,
                                className: "popover-item-icon"
                            }), e.popoverMenuName)
                        }))) : f;
                    t = g
                }
            } else t = r();
            return d.default.createElement("div", {
                className: "primary-action-menu__button-wrapper"
            }, t)
        },
        v = function(e) {
            var t = e.primaryMenuItems,
                r = e.secondaryMenuItemsOverflow,
                n = e.popoverTriggerLabel,
                a = e.headerText,
                o = e.hideHeaderText,
                i = e.onContextMenuClick,
                s = o ? null : d.default.createElement("span", {
                    className: "primary-action-menu__header-text"
                }, a);
            return t && t.length > 0 ? d.default.createElement("div", {
                className: "primary-action-menu"
            }, s, d.default.createElement("div", {
                className: "primary-action-menu__buttons"
            }, t.map(function(e, t) {
                var r = 0 === t ? "primary" : "secondary";
                return d.default.createElement(S, {
                    primaryMenuItem: e,
                    buttonVariant: r,
                    key: t
                })
            }), r.length > 0 && d.default.createElement(g, {
                secondaryMenuItems: r,
                popoverTriggerLabel: n,
                onContextMenuClick: i
            }))) : d.default.createElement("noscript", null)
        },
        O = function(e) {
            var t = e.menuItem,
                a = t.disabled,
                o = t.displayName,
                i = t.handleClick,
                s = t.iconName,
                u = t.badge,
                c = t.ariaLabel,
                m = t.ariaPressed,
                b = n.default("secondary-action-menu__button", e.menuItem.className),
                _ = b.indexOf("action-upload") >= 0,
                g = d.default.createElement(p.UserEducationEffect, {
                    containerName: "AppActionsView",
                    name: "SecondaryActionMenu-text-" + s
                }, o, u && d.default.createElement(f.Badge, r.__assign({}, u)));
            return _ ? d.default.createElement(h.UploadButton, {
                key: e.key,
                iconName: s,
                handleClick: function() {
                    y("AppActionsView", "SecondaryActionMenu-text-" + s + "-Clicked", i)
                },
                disabled: a,
                className: b,
                variant: "secondary"
            }, g) : d.default.createElement(l.TertiaryLink, {
                key: e.key,
                icon: s,
                onClick: function() {
                    y("AppActionsView", "SecondaryActionMenu-text-" + s + "-Clicked", i)
                },
                disabled: a,
                className: b,
                "aria-label": c,
                "aria-pressed": m
            }, g)
        },
        E = function(e) {
            var t = e.secondaryMenuItems,
                r = e.user;
            return t && 0 !== t.length ? d.default.createElement(l.TertiaryList, {
                className: "secondary-action-menu"
            }, t.map(function(e) {
                return "function" == typeof e ? e() : d.default.createElement(O, {
                    user: r,
                    key: e.key || e.displayName,
                    menuItem: e
                })
            })) : null
        },
        C = (function(e) {
            function a() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(a, e), a.prototype.componentDidMount = function() {
                this.props.handleComponentTTI("AppActionsView")
            }, a.prototype.render = function() {
                var e = this.props,
                    r = e.shouldCollapseActions,
                    a = e.responsive,
                    o = e.primaryMenuItems,
                    i = e.primarySubnode,
                    s = e.secondaryMenuItems,
                    l = e.headerText,
                    c = e.hideHeaderText,
                    p = e.popoverTriggerLabel,
                    m = e.user,
                    h = e.onContextMenuClick,
                    f = e.shouldEnableButtonExperiment,
                    _ = !(!a || !a.isResponsive || a.isMatchedLarge);
                o && o.forEach(function(e) {
                    b(e) && e.subItems && u.assert(e.subItems.length > 0, "Primary menu item cannot have empty list of subItems")
                });
                var g = [],
                    y = [];
                return void 0 !== s && (r ? g = s.slice() : y = s.slice()), d.default.createElement("div", {
                    className: n.default("appactions-menu", {
                        "exp-button-color": f
                    })
                }, _ && d.default.createElement("div", {
                    className: "appactions-menu--popover"
                }, o && p && d.default.createElement(t.AppActionsPopover, {
                    primaryMenuItems: o,
                    secondaryMenuItems: s,
                    popoverTriggerLabel: p
                })), !_ && d.default.createElement("div", {
                    className: "appactions-menu--buttons"
                }, d.default.createElement("div", {
                    className: "appactions-menu--top-row"
                }, o && d.default.createElement(v, {
                    primaryMenuItems: o,
                    secondaryMenuItemsOverflow: g,
                    popoverTriggerLabel: p,
                    headerText: l,
                    hideHeaderText: c,
                    onContextMenuClick: h
                })), i, d.default.createElement(E, {
                    user: m,
                    secondaryMenuItems: y
                })))
            }, a.defaultProps = {
                headerText: "",
                secondaryMenuItems: [],
                handleComponentTTI: function() {}
            }, a
        })(d.default.PureComponent),
        w = c.requireCssWithComponent(C, ["/static/css/spectrum/index.web-vflagwTbb.css", "/static/css/dropbox/app_actions-vflwmcLLt.css"]);
    t.AppActionsView = w
}), define("modules/clean/react/file_uploader/file_uploader", ["require", "exports", "tslib", "react", "modules/core/exception"], function(e, t, r, n, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var o = null,
        i = (function(t) {
            function i(e) {
                var r = t.call(this, e) || this;
                return r.handleAllFileUploadsComplete = function(e) {
                    e.find(function(e) {
                        return !!r.state.uploadErrorTypes && e.errorType === r.state.uploadErrorTypes.OVER_QUOTA_ERROR
                    }) && !r.isPaidTeamViewer() && i.showModal("out-of-quota"), r.props.onAllFileUploadsComplete && r.props.onAllFileUploadsComplete(e)
                }, r.path = r.props.initialPath ? r.props.initialPath : "/", r.hasPermissionToUploadToFolder = !!r.props.initialPermission, r.state = {
                    fileUploader: void 0,
                    uploaderStore: void 0,
                    uploaderActions: void 0,
                    oqModalTypes: void 0,
                    viewer: void 0,
                    uploadErrorTypes: void 0
                }, r.props.loadOnRender && i.requireFileUploader({}), o ? a.reportStack("Only one FileUploader component may be rendered to the page at any time.You have tried to instantiate multiple uploaders.", {
                    severity: a.SEVERITY.CRITICAL
                }) : o = r, r
            }
            return r.__extends(i, t), i.showModal = function(e) {
                o && (o.refs.fileUploader ? e && "regular" !== e ? "out-of-quota" === e && o.state.oqModalTypes ? o.refs.fileUploader.showOQModal({
                    context: o.state.oqModalTypes.WENT_OQ_DURING_UPLOAD
                }) : "team-onboarding" === e && o.refs.fileUploader.showModalWithTeamOnboarding() : o.refs.fileUploader.showModal() : (e = e || "regular", i.requireFileUploader({
                    modalType: e
                })))
            }, i.requireFileUploader = function(t) {
                var n = t.modalType,
                    a = t.handleUploadButtonClick,
                    s = t.folderUpload,
                    l = function(e) {
                        var t = e[0].FileUploader,
                            r = e[1].uploaderStore,
                            l = e[2].UploaderActions,
                            d = e[3].UploaderOverQuotaModalContexts,
                            u = e[4].Viewer,
                            c = e[5].UploadErrorType;
                        o && (o.setAsyncRequiredUploaderModules(t, l, r, d, u, c), n && i.showModal(n), a && i.handleUploadButtonClick(!!s))
                    };
                l.perfName = "file_uploader", Promise.all([new Promise(function(t, r) {
                    e(["modules/clean/react/file_uploader/uploader_new"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/react/file_uploader/store"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/react/file_uploader/actions"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/react/file_uploader/oq_drag_drop_modal_types"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/viewer"], t, r)
                }).then(r.__importStar), new Promise(function(t, r) {
                    e(["modules/clean/react/file_uploader/constants"], t, r)
                }).then(r.__importStar)]).then(l)
            }, i.prototype.componentWillUnmount = function() {
                o = null
            }, i.loadCoreComponent = function() {
                o && o.state.fileUploader || i.requireFileUploader({})
            }, i.isCoreComponentDefined = function() {
                return !!o && !!o.state.fileUploader
            }, i.setPathAndPermissions = function(e) {
                o && o.state.uploaderActions && o.state.uploaderActions.setPath(e)
            }, i.setPath = function(e) {
                o && (o.state.uploaderActions ? o.state.uploaderActions.setPath({
                    path: e
                }) : (e || (e = "/"), o.path = e))
            }, i.setUser = function(e) {
                o && (o.state.uploaderActions ? o.state.uploaderActions.setUser({
                    user: e
                }) : o.user = e ? e : void 0)
            }, i.prototype.setAsyncRequiredUploaderModules = function(e, t, r, n, a, o) {
                this.setState({
                    fileUploader: e,
                    uploaderStore: r,
                    uploaderActions: t,
                    oqModalTypes: n,
                    viewer: a,
                    uploadErrorTypes: o
                }), this.props.needToSetStoreValues && (void 0 !== this.user && t.setUser({
                    user: this.user
                }), t.setPath({
                    path: this.path,
                    hasPermissionToUploadToFolder: this.hasPermissionToUploadToFolder
                }))
            }, i.handleUploadButtonClick = function(e, t) {
                o && (o.refs.fileUploader ? o.refs.fileUploader.handleUploadButtonClick(e, t) : i.requireFileUploader({
                    handleUploadButtonClick: !0,
                    folderUpload: e
                }))
            }, i.isDraggingFilesHelper = function(e) {
                if (!o) return !1;
                if (!o.state.uploaderStore) return !1;
                var t = o.state.uploaderStore;
                return !!t.numDraggingFiles() && (e ? t.isInternalTransfer() : !t.isInternalTransfer())
            }, i.isDraggingInternalFiles = function() {
                return i.isDraggingFilesHelper(!0)
            }, i.isDraggingExternalFiles = function() {
                return i.isDraggingFilesHelper(!1)
            }, i.isUploadModalOpen = function() {
                return !!o && (!!o.state.uploaderStore && o.state.uploaderStore.isUploadModalOpen())
            }, i.prototype.isPaidTeamViewer = function() {
                return !(!this.user || !this.state.viewer || !this.user.is_team || this.state.viewer.get_viewer().team_is_limited)
            }, i.prototype.render = function() {
                if (!this.state.fileUploader) return n.default.createElement("div", null);
                var e = this.props,
                    t = e.browseViewType,
                    r = e.isContentManager,
                    a = e.ajaxInterceptor,
                    o = e.onFileUploadComplete,
                    i = e.onModalDismissed,
                    s = e.dragAndDropEnabled,
                    l = e.shouldShowDestinationLink,
                    d = e.uploaderExperiments,
                    u = e.uploaderPostTTIExperiments,
                    c = e.chooseDestination,
                    p = e.rootNSIDForCM,
                    m = this.state.fileUploader;
                return n.default.createElement(m, {
                    ref: "fileUploader",
                    key: 1,
                    browseViewType: t,
                    isContentManager: r,
                    ajaxInterceptor: a,
                    onFileUploadComplete: o,
                    onAllFileUploadsComplete: this.handleAllFileUploadsComplete,
                    onModalDismissed: i,
                    dragAndDropEnabled: s,
                    shouldShowDestinationLink: l,
                    uploaderExperiments: d,
                    uploaderPostTTIExperiments: u,
                    chooseDestination: c,
                    rootNSIDForCM: p
                })
            }, i
        })(n.default.Component);
    t.FileUploaderController = i
}), define("modules/clean/react/file_uploader/upload_button", ["require", "exports", "tslib", "spectrum/button", "spectrum/tertiary_link", "react"], function(e, t, r, n, a, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importDefault(o);
    var i = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.renderPrimaryButton = function() {
            return o.default.createElement(n.Button, {
                className: this.props.className,
                disabled: this.props.disabled,
                onClick: this.props.handleClick,
                variant: "primary",
                tagName: this.props.tagName
            }, this.props.children)
        }, t.prototype.renderTertiaryLink = function() {
            return o.default.createElement(a.TertiaryLink, {
                icon: this.props.iconName,
                onClick: this.props.handleClick,
                disabled: this.props.disabled,
                className: this.props.className
            }, this.props.children)
        }, t.prototype.renderCMButton = function() {
            return o.default.createElement("button", {
                className: this.props.className,
                disabled: this.props.disabled,
                onClick: this.props.handleClick
            }, this.props.children)
        }, t.prototype.render = function() {
            return "primary" === this.props.variant ? this.renderPrimaryButton() : "CM" === this.props.variant ? this.renderCMButton() : this.renderTertiaryLink()
        }, t
    })(o.default.PureComponent);
    t.UploadButton = i
}), define("modules/clean/react/growth/onboarding_sidebar/data/actions", ["require", "exports", "modules/clean/react/growth/onboarding_sidebar/data/types"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.openOnboardingSidebar = function() {
        return {
            type: r.Actions.OpenOnboardingSidebar
        }
    }, t.closeOnboardingSidebar = function() {
        return {
            type: r.Actions.CloseOnboardingSidebar
        }
    }, t.showOnboardingSidebar = function() {
        return {
            type: r.Actions.ShowOnboardingSidebar
        }
    }, t.hideOnboardingSidebar = function() {
        return {
            type: r.Actions.HideOnboardingSidebar
        }
    }
}), define("modules/clean/react/growth/onboarding_sidebar/data/reducer", ["require", "exports", "tslib", "modules/clean/react/growth/onboarding_sidebar/data/types"], function(e, t, r, n) {
    "use strict";

    function a(e, t) {
        switch (void 0 === e && (e = o), t.type) {
            case n.Actions.OpenOnboardingSidebar:
                return r.__assign({}, e, {
                    isOnboardingSidebarOpen: !0
                });
            case n.Actions.CloseOnboardingSidebar:
                return r.__assign({}, e, {
                    isOnboardingSidebarOpen: !1
                });
            case n.Actions.ShowOnboardingSidebar:
                return r.__assign({}, e, {
                    isOnboardingSidebarHidden: !1
                });
            case n.Actions.HideOnboardingSidebar:
                return r.__assign({}, e, {
                    isOnboardingSidebarHidden: !0
                });
            default:
                return e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = {
        isOnboardingSidebarOpen: !1,
        isOnboardingSidebarHidden: !1
    };
    t.onboardingSidebarReducer = a
}), define("modules/clean/react/growth/onboarding_sidebar/data/store", ["require", "exports", "tslib", "modules/clean/redux/store", "modules/clean/redux/namespaces", "modules/clean/react/growth/onboarding_sidebar/data/reducer", "external/lodash"], function(e, t, r, n, a, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importStar(i), t.getStoreForOnboardingSidebar = i.once(function() {
        var e;
        return n.getStoreAndRegisterReducers((e = {}, e[a.ONBOARDING_SIDEBAR_NAMESPACE_KEY] = o.onboardingSidebarReducer, e))
    })
}), define("modules/clean/react/growth/onboarding_sidebar/data/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.OpenOnboardingSidebar = "OnboardingSidebar/OpenOnboardingSidebar", e.CloseOnboardingSidebar = "OnboardingSidebar/CloseOnboardingSidebar", e.ShowOnboardingSidebar = "OnboardingSidebar/ShowOnboardingSidebar", e.HideOnboardingSidebar = "OnboardingSidebar/=HideOnboardingSidebar"
    })(t.Actions || (t.Actions = {}))
}), define("modules/clean/react/growth/onboarding_sidebar/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.WEB_PLUS_TRIALS = "web_plus_trials", e.WEB_PLUS_DIRECT = "web_plus_direct", e.POT_OF_GOLD = "pot_of_gold"
    })(t.OnboardingSidebarType || (t.OnboardingSidebarType = {})), t.ONBOARDING_SIDEBAR_SLIDE_DURATION = 300, t.ONBOARDING_SIDEBAR_EXCLOG_TAG = "onboarding_sidebar"
}), define("modules/clean/react/growth/onboarding_sidebar/util", ["require", "exports", "tslib", "modules/clean/react/growth/onboarding_sidebar/data/store", "modules/clean/react/growth/onboarding_sidebar/data/actions", "modules/core/exception", "modules/clean/react/growth/onboarding_sidebar/types"], function(e, t, r, n, a, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.reportOnboardingSidebarException = function(e, t, n) {
        o.reportException(r.__assign({
            err: new Error(e),
            severity: t,
            tags: [i.ONBOARDING_SIDEBAR_EXCLOG_TAG]
        }, {
            exc_extra: {
                onboardingSidebarType: n
            }
        }))
    }, t.openOnboardingSidebar = function() {
        n.getStoreForOnboardingSidebar().dispatch(a.openOnboardingSidebar())
    }, t.closeOnboardingSidebar = function() {
        n.getStoreForOnboardingSidebar().dispatch(a.closeOnboardingSidebar())
    }, t.showOnboardingSidebar = function() {
        n.getStoreForOnboardingSidebar().dispatch(a.showOnboardingSidebar())
    }, t.hideOnboardingSidebar = function() {
        n.getStoreForOnboardingSidebar().dispatch(a.hideOnboardingSidebar())
    }, t.convertObjectPropertiesToCamelCase = function(e) {
        return Object.keys(e).reduce(function(t, n) {
            var a;
            if (".tag" === n) return t;
            var o = n.replace(/(\_\w)/g, function(e) {
                return e[1].toUpperCase()
            });
            return r.__assign((a = {}, a[o] = e[n], a), t)
        }, {})
    }
}), define("modules/clean/react/maestro/search", ["require", "exports", "tslib", "external/classnames", "react", "spectrum/media_table_skeleton", "modules/clean/react/async/loadable", "modules/clean/react/maestro/layout", "modules/clean/search/single_page/constants", "modules/clean/react/growth/onboarding_sidebar/util"], function(e, t, r, n, a, o, i, s, l, d) {
    "use strict";
    var u = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), a = r.__importDefault(a), t.AsyncMaestroSearchSidebar = i.Loadable({
        loader: function() {
            return r.__awaiter(u, void 0, void 0, function() {
                var t;
                return r.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, Promise.all([new Promise(function(t, r) {
                                e(["modules/clean/search/single_page/sidebar"], t, r)
                            }).then(r.__importStar), new Promise(function(e) {
                                return setTimeout(e, l.SEARCH_INPUT_ANIMATION_MS)
                            })])];
                        case 1:
                            return t = n.sent()[0].SearchSidebar, [2, t]
                    }
                })
            })
        }
    }), t.AsyncMaestroSearchView = i.Loadable({
        loader: function() {
            return r.__awaiter(u, void 0, void 0, function() {
                var t;
                return r.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, Promise.all([new Promise(function(t, r) {
                                e(["modules/clean/search/single_page/view"], t, r)
                            }).then(r.__importStar), new Promise(function(e) {
                                return setTimeout(e, l.SEARCH_INPUT_ANIMATION_MS)
                            })])];
                        case 1:
                            return t = n.sent()[0].SearchView, [2, t]
                    }
                })
            })
        },
        loading: function(e) {
            var t = e.inputBox;
            return t.current && t.current.value ? a.default.createElement(o.MediaTableSkeleton, {
                numRows: 15
            }) : null
        }
    });
    var c = (function(e) {
        function o(r) {
            var n = e.call(this, r) || this;
            return n.handleSearchExit = function() {
                n.setState({
                    isSearching: !1,
                    searchViewChromeClass: void 0
                })
            }, n.handleSearchEnter = function() {
                n.setState({
                    isSearching: !0
                })
            }, n.handleSearchViewUpdate = function(e) {
                var t = (void 0 === e ? {
                    chromeClass: ""
                } : e).chromeClass;
                t && n.setState({
                    searchViewChromeClass: t
                })
            }, n.renderSearchSidebar = function(e) {
                return a.default.createElement(t.AsyncMaestroSearchSidebar, {
                    key: "search",
                    user: n.props.user,
                    responsive: e
                })
            }, n.renderEmbeddedApp = function(e) {
                return [n.inSearchMode ? a.default.createElement(t.AsyncMaestroSearchView, {
                    key: "search",
                    user: n.props.user,
                    responsive: e,
                    inputBox: n.state.inputBox,
                    onUpdate: n.handleSearchViewUpdate
                }) : null, a.default.createElement("div", {
                    style: {
                        display: n.inSearchMode ? "none" : void 0
                    },
                    key: "app"
                }, "function" == typeof n.props.embeddedAppRegion ? n.props.embeddedAppRegion(e) : n.props.embeddedAppRegion)]
            }, n.state = {
                isSearching: r.searchBarProps && r.searchBarProps.isSearching || !1,
                inputBox: a.default.createRef()
            }, n
        }
        return r.__extends(o, e), o.prototype.componentDidMount = function() {
            this.state.isSearching && d.hideOnboardingSidebar()
        }, o.prototype.componentDidUpdate = function(e, t) {
            t.isSearching !== this.state.isSearching && (this.state.isSearching ? d.hideOnboardingSidebar() : d.showOnboardingSidebar())
        }, Object.defineProperty(o.prototype, "inSearchMode", {
            get: function() {
                return this.props.searchBarProps && this.props.searchBarProps.expUniversalSinglePageSearch && this.props.user && this.state.isSearching
            },
            enumerable: !0,
            configurable: !0
        }), o.prototype.render = function() {
            var e = n.default(this.state.searchViewChromeClass, {
                "maestro-chrome--search": !0,
                "maestro-chrome--search-active": this.inSearchMode,
                "exp-details-pane-variants": this.inSearchMode && this.props.wideSecondarySidebar
            });
            return a.default.createElement(s.MaestroChrome, r.__assign({}, this.props, {
                actionSidebarRegion: this.inSearchMode ? this.renderSearchSidebar : this.props.actionSidebarRegion,
                searchBarProps: r.__assign({}, this.props.searchBarProps || {}, {
                    isSearching: this.state.isSearching,
                    onSearchExit: this.handleSearchExit,
                    onSearchEnter: this.handleSearchEnter,
                    inputBoxRef: this.state.inputBox
                }),
                embeddedAppRegion: this.renderEmbeddedApp,
                titleClass: "page-header__title--search",
                chromeClass: e
            }))
        }, o
    })(a.default.PureComponent);
    t.SearchChrome = c
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
};
define("modules/clean/sharing/wizard/async_wizard_modals", ["require", "exports"], function(e, t) {
    "use strict";

    function r(t) {
        new Promise(function(t, r) {
            e(["modules/clean/sharing/wizard/wizard_modals"], t, r)
        }).then(__importStar).then(t)
    }

    function n(e, t, n, a) {
        r(function(r) {
            r.shareExistingFolder(e, t, n, a)
        })
    }

    function a(e, t) {
        r(function(r) {
            var n = r.showShareAFolderWizardModal(e);
            t && t(n)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.asyncShareExistingFolder = n, t.asyncShowShareAFolderWizardModal = a
});
//# sourceMappingURL=pkg-browse-core.min.js-vflnfM1Un.map