if (self.CavalryLogger) {
    CavalryLogger.start_js(["SAUyn"]);
}

__d("VideoViewFraudDetectorWhiteOps", ["FBSiteWhiteOps"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, c, d) {
        a.setDetectionID(c), d && a.addListener("videoView/runFraudDetector", function() {
            b("FBSiteWhiteOps").appendToWindow(c, "FACEBOOK_VIDEO_VIEW", null)
        })
    };
    e.exports = a
}), null);
__d("DocumentFocusForAdsVideoAutoplayRule", ["VideoAutoplayRule"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            return a.call(this, b) || this
        }
        var c = b.prototype;
        c.calculateAutoplayScore = function() {
            return this.isEnabled() ? this.$DocumentFocusForAdsVideoAutoplayRule1() : 1
        };
        c.$DocumentFocusForAdsVideoAutoplayRule1 = function() {
            var a = this.videoUnit.getVideoPlayerController();
            return a && a.isAd() ? document.hasFocus() ? 1 : 0 : 1
        };
        return b
    }(b("VideoAutoplayRule"));
    e.exports = a
}), null);
__d("FeedVideoClickToPlayController", ["DocumentFocusForAdsVideoAutoplayRule", "Event", "IntersectionObserver", "VideoPlayerAbortLoadingExperiment", "VideoPlayerExperiments", "destroyOnUnload", "setImmediate", "throttle"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = null;
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            var a = this;
            this.$4 = new Set();
            this.$3 = null;
            this.$2 = null;
            this.$1 = null;
            b("destroyOnUnload")(function() {
                a.$4.clear(), a.$2 && (a.$2.remove(), a.$2 = null), a.$3 && (a.$3.disconnect(), a.$3 = null), a.$1 && (a.$1.remove(), a.$1 = null), a === g && (g = null)
            })
        }
        var c = a.prototype;
        c.addVideoUnit = function(a) {
            __p && __p();
            var c = this;
            if (b("VideoPlayerExperiments").useBringYourOwnAutoplayRule && b("VideoPlayerExperiments").pauseAdIfNoDocumentFocus) {
                var d = new(b("DocumentFocusForAdsVideoAutoplayRule"))(a);
                a.registerAutoplayRule(d)
            }
            this.$5() || this.$6();
            this.$7() || this.$8();
            a.addListener("beginPlayback", function(b) {
                b = b.reason;
                (b === "user_initiated" || b === "loop_initiated") && c.$4.add(a)
            });
            a.addListener("turnOffAutoplay", function(b) {
                b = b.reason;
                b === "unmuted" && c.$4.add(a)
            });
            a.getVideoPlayerController().isState("playing") && !a.isAutoplayable() && this.$4.add(a);
            a.addListener("pausePlayback", function() {
                c.$4["delete"](a)
            });
            a.addListener("finishPlayback", function() {
                c.$4["delete"](a)
            })
        };
        a.registerVideoUnit = function(b) {
            g == null && (g = new a()), g.addVideoUnit(b)
        };
        c.$6 = function() {
            this.$2 && this.$2.remove(), this.$2 = b("Event").listen(window, "scroll", b("throttle")(this.onWindowEvent.bind(this), 200))
        };
        c.$8 = function() {
            this.$1 && this.$1.remove(), this.$1 = b("Event").listen(window, "resize", b("throttle")(this.onWindowEvent.bind(this), 200))
        };
        c.$5 = function() {
            return !!this.$2
        };
        c.$7 = function() {
            return !!this.$1
        };
        c.$9 = function(a) {
            a.pause("autoplay_initiated"), !b("VideoPlayerExperiments").noAbortLoadingInFeedClickToPlay && b("VideoPlayerAbortLoadingExperiment").canAbort && a.abortLoading(), this.$4["delete"](a)
        };
        c.onWindowEvent = function() {
            var a = this;
            this.$4.forEach(function(c) {
                if (c && !c.isVisible() && !c.getIsInChannel()) {
                    var d = c.getVideoPlayerController();
                    d.isAd() || b("VideoPlayerExperiments").pauseWhenOffscreen ? b("VideoPlayerExperiments").slidingWNSv3 ? b("setImmediate")(function() {
                        c && !c.isVisible() && !c.getIsInChannel() && a.$9(c)
                    }) : a.$9(c) : d.isMuted() && d.isState("playing") && (a.$9(c), d.emit("resumeAutoplay"))
                }
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("FeedVideoPlayerController", ["csx", "DOM", "DOMQuery", "LitestandStoryInsertionStatus", "Run", "SubscriptionsHandler", "VideoAutoplayPlayerBase", "VideoPlayerApiEvents", "VideoPlayerExperiments", "VideoPlayerLoggerErrors", "VideoPlayerLoggerErrorStates", "getElementPosition", "getViewportDimensions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = 42;
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c, d) {
            __p && __p();
            var e;
            e = a.call(this) || this;
            e.$FeedVideoPlayerController1 = d;
            e.$FeedVideoPlayerController2 = c;
            e.$FeedVideoPlayerController3 = new Set();
            e.$FeedVideoPlayerController1.viewport_autoplay || e.$FeedVideoPlayerController3.add("server_blocked");
            e.$FeedVideoPlayerController12 = b("VideoPlayerExperiments").autoplayUntilHalfGone ? .5 : 1;
            e.$FeedVideoPlayerController4 = e.isAutoplayable();
            e.$FeedVideoPlayerController6 = d.controller;
            e.$FeedVideoPlayerController10 = !!d.startsMuted;
            e.$FeedVideoPlayerController13 = !1;
            e.$FeedVideoPlayerController7 = e.isAutoplayable();
            (e.$FeedVideoPlayerController6.getIsInChannel() || e.$FeedVideoPlayerController6.isState("playing") && !e.$FeedVideoPlayerController6.isMuted()) && (e.$FeedVideoPlayerController7 = !1);
            e.$FeedVideoPlayerController6.registerOption("FeedAutoplay", "isAutoplaying", function() {
                return e.$FeedVideoPlayerController7
            }, function(a) {
                e.$FeedVideoPlayerController7 = a
            });
            e.$FeedVideoPlayerController6.registerOption("FeedAutoplay", "isVisibleForAutoplay", function() {
                return e.isVisible()
            });
            e.$FeedVideoPlayerController6.registerOption("FeedAutoplay", "shouldOpenSidePaneInChannelView", function() {
                return d.autoPlayWithChannelViewOrSnowlift
            });
            e.$FeedVideoPlayerController6.registerOption("FeedAutoplay", "isFilteredByWarningScreen", function() {
                return e.$FeedVideoPlayerController13
            }, function(a) {
                e.$FeedVideoPlayerController13 = a
            });
            e.$FeedVideoPlayerController6.setLogEntryPropertyGetters({
                autoplay_eligible: function() {
                    return e.isAutoplayable()
                },
                autoplay_failure_reasons: function() {
                    return JSON.stringify(Array.from(e.$FeedVideoPlayerController3))
                }
            });
            e.$FeedVideoPlayerController14();
            b("Run").onLeave(function() {
                e.$FeedVideoPlayerController5.release()
            });
            if (e.isState("fallback")) {
                e.$FeedVideoPlayerController15();
                e.$FeedVideoPlayerController16();
                return babelHelpers.assertThisInitialized(e)
            }
            e.$FeedVideoPlayerController5.addSubscriptions(b("LitestandStoryInsertionStatus").registerBlocker(function() {
                return e.isState("playing")
            }));
            return e
        }
        var d = c.prototype;
        d.$FeedVideoPlayerController17 = function() {
            return this.$FeedVideoPlayerController6.isState("destroyed")
        };
        d.getDistanceToViewport = function() {
            if (this.$FeedVideoPlayerController17()) return -Infinity;
            if (this.$FeedVideoPlayerController6.isFullscreen()) return 0;
            var a = b("getViewportDimensions")().height,
                c = this.getDOMPosition();
            if (c.height === 0) return -Infinity;
            c = c.y + (1 - this.$FeedVideoPlayerController12) * c.height;
            return c - a / 2
        };
        d.isVisible = function() {
            __p && __p();
            if (this.$FeedVideoPlayerController17()) return !1;
            if (this.$FeedVideoPlayerController6.isFullscreen()) return !0;
            var a = b("getViewportDimensions")().height,
                c = b("getViewportDimensions")().width,
                d = this.getDOMPosition();
            if (d.height === 0) return !1;
            var e = d.y - h + (1 - this.$FeedVideoPlayerController12) * d.height,
                f = d.y + this.$FeedVideoPlayerController12 * d.height,
                g = d.x + (1 - this.$FeedVideoPlayerController12) * d.width,
                i = d.x + this.$FeedVideoPlayerController12 * d.width;
            if (e < 0 || f >= a || g < 0 || i >= c) return !1;
            e = this.$FeedVideoPlayerController18();
            return e !== null ? this.$FeedVideoPlayerController19(d, b("getElementPosition")(e)) : !0
        };
        d.$FeedVideoPlayerController18 = function() {
            var a = b("DOMQuery").scry(this.$FeedVideoPlayerController2.video_container, "^div._1yj5");
            return a.length > 0 ? a[0] : null
        };
        d.$FeedVideoPlayerController19 = function(a, b) {
            var c = a.x;
            a = a.x + a.width;
            var d = b.x;
            b = b.x + b.width;
            return d < c && a < b
        };
        d.isAutoplayable = function() {
            return this.$FeedVideoPlayerController1.viewport_autoplay && !this.$FeedVideoPlayerController9 && !this.$FeedVideoPlayerController3.size && !this.$FeedVideoPlayerController13
        };
        d.getCurrentTimePosition = function() {
            return this.$FeedVideoPlayerController6.getCurrentTimePosition()
        };
        d.playWithoutUnmute = function(a) {
            this.$FeedVideoPlayerController6.play(a)
        };
        d.getVideoID = function() {
            return this.$FeedVideoPlayerController6.getVideoID()
        };
        d.$FeedVideoPlayerController20 = function() {
            this.$FeedVideoPlayerController16()
        };
        d.$FeedVideoPlayerController14 = function() {
            __p && __p();
            var a = this;
            this.$FeedVideoPlayerController5 = new(b("SubscriptionsHandler"))();
            var c = [
                    ["finishPlayback", function() {
                        return a.$FeedVideoPlayerController21()
                    }],
                    ["turnOffAutoplay", function(b) {
                        var c = null;
                        b && (c = b.reason);
                        a.$FeedVideoPlayerController22(c)
                    }],
                    ["unmuteVideo", function() {
                        return a.$FeedVideoPlayerController23()
                    }],
                    ["stateChange", function() {
                        return a.$FeedVideoPlayerController24()
                    }],
                    ["switchVideo", function() {
                        return a.$FeedVideoPlayerController20()
                    }],
                    ["fallbackPlay", function() {
                        return a.$FeedVideoPlayerController25()
                    }],
                    ["buffered", function() {
                        return a.$FeedVideoPlayerController16()
                    }],
                    ["buffering", function() {
                        return a.$FeedVideoPlayerController16()
                    }],
                    ["beginPlayback", function(b) {
                        b = b.reason;
                        return a.$FeedVideoPlayerController26(b)
                    }],
                    ["toggleFullscreen", function() {
                        return a.$FeedVideoPlayerController27()
                    }],
                    ["resumeAutoplay", function(b) {
                        var c = null;
                        b && (c = b.reason);
                        a.$FeedVideoPlayerController28(c)
                    }],
                    ["crossfadeWatchAndScroll", function() {
                        return a.$FeedVideoPlayerController29()
                    }],
                    ["enterWatchAndScroll", function() {
                        return a.$FeedVideoPlayerController29()
                    }],
                    ["exitWatchAndScroll", function() {
                        return a.$FeedVideoPlayerController30()
                    }],
                    ["muteVideo", function() {
                        return a.$FeedVideoPlayerController31()
                    }]
                ],
                d = function(b) {
                    return a.emit.bind(a, b)
                };
            this.$FeedVideoPlayerController5.addSubscriptions.apply(this.$FeedVideoPlayerController5, c.map(function(b) {
                var c = b[0];
                b = b[1];
                return a.$FeedVideoPlayerController6.addListener(c, b)
            }).concat(b("VideoPlayerApiEvents").map(function(b) {
                return a.$FeedVideoPlayerController6.addListener(b, d(b))
            })))
        };
        d.$FeedVideoPlayerController31 = function() {
            b("VideoPlayerExperiments").fixFeedVideosPlayOffscreen && this.$FeedVideoPlayerController32("unmuted")
        };
        d.$FeedVideoPlayerController30 = function() {
            b("VideoPlayerExperiments").fixFeedVideosPlayOffscreen && (this.$FeedVideoPlayerController32("watch_and_scroll"), this.$FeedVideoPlayerController6 && this.$FeedVideoPlayerController6.isMuted() && this.$FeedVideoPlayerController32("unmuted"))
        };
        d.$FeedVideoPlayerController29 = function() {
            b("VideoPlayerExperiments").fixFeedVideosPlayOffscreen && (this.$FeedVideoPlayerController33("watch_and_scroll"), this.$FeedVideoPlayerController32("manually_paused"))
        };
        d.$FeedVideoPlayerController27 = function() {
            this.$FeedVideoPlayerController10 && this.$FeedVideoPlayerController6.unmute()
        };
        d.$FeedVideoPlayerController24 = function() {
            if (this.$FeedVideoPlayerController17()) return;
            this.$FeedVideoPlayerController6.isState("fallback") && this.$FeedVideoPlayerController15();
            !this.$FeedVideoPlayerController6.isState("loading") && this.$FeedVideoPlayerController8 && (clearTimeout(this.$FeedVideoPlayerController8), this.$FeedVideoPlayerController8 = null);
            this.$FeedVideoPlayerController16()
        };
        d.$FeedVideoPlayerController26 = function(a) {
            b("VideoPlayerExperiments").fixFeedVideosPlayOffscreen && this.$FeedVideoPlayerController32("manually_paused"), a === "user_initiated" && this.$FeedVideoPlayerController10 && this.$FeedVideoPlayerController6.unmute()
        };
        d.preload = function() {
            this.$FeedVideoPlayerController6.preload && this.$FeedVideoPlayerController6.preload()
        };
        d.logDisplayed = function() {
            this.$FeedVideoPlayerController6.logEvent("displayed", {
                autoplay_reason: this.$FeedVideoPlayerController1.autoplay_reason
            })
        };
        d.$FeedVideoPlayerController25 = function() {
            var a = {
                error: b("VideoPlayerLoggerErrors").ENTERED_FALLBACK,
                state: b("VideoPlayerLoggerErrorStates").PLAYBACK_FAILURE
            };
            this.$FeedVideoPlayerController6.logEvent("error", a)
        };
        d.$FeedVideoPlayerController23 = function() {
            b("VideoPlayerExperiments").slidingWNSv3 && this.$FeedVideoPlayerController6.isAd() && (this.$FeedVideoPlayerController12 = .5), this.$FeedVideoPlayerController10 = !1, this.$FeedVideoPlayerController7 = !1
        };
        d.$FeedVideoPlayerController21 = function() {
            var a = this.$FeedVideoPlayerController6.getOption("Looping", "isLooping");
            a || this.$FeedVideoPlayerController33("has_seen_finished")
        };
        d.$FeedVideoPlayerController15 = function() {
            this.$FeedVideoPlayerController11 = {
                isAutoplaying: this.$FeedVideoPlayerController7,
                preventAutoplay: this.$FeedVideoPlayerController9
            }, this.$FeedVideoPlayerController33("fallback")
        };
        d.$FeedVideoPlayerController33 = function(a) {
            this.$FeedVideoPlayerController9 = !0, a && this.$FeedVideoPlayerController3.add(a), this.$FeedVideoPlayerController7 = !1
        };
        d.$FeedVideoPlayerController28 = function(a) {
            this.$FeedVideoPlayerController32(a)
        };
        d.$FeedVideoPlayerController32 = function(a) {
            a ? this.$FeedVideoPlayerController3["delete"](a) : (this.$FeedVideoPlayerController3["delete"]("unmuted"), this.$FeedVideoPlayerController3["delete"]("has_seen_finished"), this.$FeedVideoPlayerController3["delete"]("manually_paused")), this.$FeedVideoPlayerController9 = this.$FeedVideoPlayerController3.size > 0, this.$FeedVideoPlayerController7 = !this.$FeedVideoPlayerController9
        };
        d.$FeedVideoPlayerController22 = function(a) {
            this.$FeedVideoPlayerController33(a), this.$FeedVideoPlayerController7 = !1
        };
        d.$FeedVideoPlayerController16 = function() {
            this.$FeedVideoPlayerController34()
        };
        d.getDOMPosition = function() {
            return this.$FeedVideoPlayerController6.getDOMPosition()
        };
        d.isLooping = function() {
            return !!this.$FeedVideoPlayerController6.getOption("Looping", "isLooping")
        };
        d.pause = function(a) {
            this.$FeedVideoPlayerController6.pause(a)
        };
        d.$FeedVideoPlayerController35 = function() {
            this.$FeedVideoPlayerController14(), this.$FeedVideoPlayerController3["delete"]("fallback"), this.$FeedVideoPlayerController7 = this.$FeedVideoPlayerController11.isAutoplaying, this.$FeedVideoPlayerController9 = this.$FeedVideoPlayerController11.preventAutoplay
        };
        d.$FeedVideoPlayerController34 = function() {
            __p && __p();
            var a = this;
            if (this.isState("fallback")) {
                this.$FeedVideoPlayerController5.release();
                var c = this.$FeedVideoPlayerController2;
                c.fallback_link && (b("DOM").remove(this.$FeedVideoPlayerController6.getVideoNode()), b("DOM").replace(c.video_container, c.fallback_link), b("DOM").appendContent(c.fallback_link, c.video_container));
                if (this.$FeedVideoPlayerController6.isFallbackRecoverable()) this.$FeedVideoPlayerController35();
                else var d = this.$FeedVideoPlayerController6.addListener("VideoPlayerFallbackEvents/recover", function() {
                    a.$FeedVideoPlayerController35(), d.remove()
                })
            }
        };
        d.isState = function(a) {
            return this.$FeedVideoPlayerController6.isState(a)
        };
        d.getSource = function() {
            return this.$FeedVideoPlayerController6.getSource()
        };
        d.getIsInChannel = function() {
            return this.$FeedVideoPlayerController6.getIsInChannel()
        };
        d.getVideoPlayerController = function() {
            return this.$FeedVideoPlayerController6
        };
        d.abortLoading = function() {
            this.$FeedVideoPlayerController1.abort_loading_blocked || this.$FeedVideoPlayerController6.abortLoading()
        };
        d.isMuted = function() {
            return this.$FeedVideoPlayerController6.isMuted()
        };
        d.isPlaying = function() {
            return this.$FeedVideoPlayerController6.isState("playing")
        };
        d.shouldPauseWhenScrolledOffscreen = function() {
            return !1
        };
        return c
    }(b("VideoAutoplayPlayerBase"));
    e.exports = a
}), null);
__d("VideoFeedRegister", ["invariant", "Bootloader", "FeedVideoPlayerController", "VideoAutoplayControllerX", "VideoPlayerExperiments", "VideoPlayerFeedRegisterConfig", "gkx"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = {
        registerVideoUnit: function(a, c) {
            __p && __p();
            var d = c.controller;
            c.controller.getOption("VideoWithInstreamVideo", "enabled") && (c.controller = c.controller.getOption("VideoWithInstreamVideo", "controller"));
            var e = new(b("FeedVideoPlayerController"))(a, c);
            c.controller.registerOption("WatchAndScroll", "isEligible", function() {
                return c.wnsEnabled
            });
            c.controller.registerOption("GamingVideo", "isGamingVideo", function() {
                return c.isGamingVideo
            });
            if (c.channelVersion) {
                c.channelVersion === "channel_view" && (c.channelModule || g(0, 12372));
                a = c.channelModule;
                if ((c.channelVersion !== "channel_view" || !a.getInteraction()) && b("VideoPlayerFeedRegisterConfig").watchAndScrollModule && b("VideoPlayerFeedRegisterConfig").watchAndScrollModule.isActive()) {
                    b("VideoPlayerFeedRegisterConfig").watchAndScrollModule.registerChannelVideoController(c.controller);
                    return
                }
                c.channelVersion === "channel_view" && a.registerVideoController(c.controller)
            } else if (b("gkx")("678893")) {
                a = e.getVideoPlayerController();
                a && a.runOnApiReady(function() {
                    b("VideoAutoplayControllerX").registerVideoUnit(e)
                })
            } else b("VideoAutoplayControllerX").registerVideoUnit(e);
            c.wnsEnabled && b("VideoPlayerFeedRegisterConfig").watchAndScrollModule && b("VideoPlayerFeedRegisterConfig").watchAndScrollModule.registerVideoController(c.controller, c.videoChannelCaller, b("VideoPlayerFeedRegisterConfig").watchAndScrollV3, b("VideoPlayerFeedRegisterConfig").wnsChannelsIntegrationEnabled);
            !b("VideoPlayerExperiments").disableDisableOffscreenPlayModule && b("VideoPlayerFeedRegisterConfig").disableOffscreenPlayModule && b("VideoPlayerFeedRegisterConfig").disableOffscreenPlayModule.registerVideoUnit(e);
            c.autoPlayWithChannelViewOrSnowlift && d.runOnApiReady(function() {
                b("Bootloader").loadModules(["PhotoSnowlift"], function(a) {
                    return a.bootstrap(d.getVideoURL())
                }, "VideoFeedRegister")
            })
        }
    };
    e.exports = a
}), null);
__d("VideoPlayerRegistry", ["regeneratorRuntime", "Promise", "EventEmitter"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = new Set(),
        h = new(b("EventEmitter"))(),
        i = {
            ADDED: "added",
            REMOVED: "removed",
            addListener: function(a, b) {
                return h.addListener(a, b)
            },
            once: function(a, b) {
                return h.once(a, b)
            },
            has: function(a) {
                return g.has(a)
            },
            add: function(a) {
                if (i.has(a)) return !1;
                g.add(a);
                h.emit(i.ADDED, a);
                return !0
            },
            remove: function(a) {
                if (!i.has(a)) return !1;
                g["delete"](a);
                h.emit(i.REMOVED, a);
                return !0
            },
            count: function() {
                return g.size
            },
            getList: function() {
                return Array.from(g)
            },
            getByRootNode: function(a) {
                __p && __p();
                var c = this,
                    d;
                return b("regeneratorRuntime").async(function(e) {
                    __p && __p();
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            d = null;
                            this.getList().forEach(function(b) {
                                b.getByRootNode() === a && (d = b)
                            });
                            if (d) {
                                e.next = 6;
                                break
                            }
                            e.next = 5;
                            return b("regeneratorRuntime").awrap(new(b("Promise"))(function(b, d) {
                                var e = c.addListener(i.ADDED, function(c) {
                                    c.getRootNode() === a && (e.remove(), b(c))
                                })
                            }));
                        case 5:
                            d = e.sent;
                        case 6:
                            return e.abrupt("return", d);
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }, null, this)
            }
        };
    e.exports = i
}), null);
__d("VideoWithClickToTahoe", ["cx", "AsyncRequest", "Bootloader", "CSS", "Event", "URI", "logVideosClickTracking"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h, i = !1;
    a = function() {
        __p && __p();

        function a(a, c, d, e, f, g, i, j, k, l, m, n, o) {
            this.$5 = a, this.$6 = new(h || (h = b("URI")))(c), this.$4 = d, this.$1 = e, this.$2 = f, this.$7 = g, this.$8 = i, this.$9 = j, this.$10 = m, this.$11 = k, this.$12 = l, this.$13 = n, this.$14 = o, this.$5.addListener("stateChange", this.$15.bind(this)), this.$5.addListener("toggleFullscreen", this.$15.bind(this)), this.$5.setLogEntryPropertyGetters({
                channel_eligibility: "eligible"
            }), this.$5.addListener("enterTahoe", this.$16.bind(this, "control_click")), this.canOpenTahoe() && this.$17(), this.$5.addListener("clickVideo", this.$18.bind(this)), this.$5.hasSeenClick() && this.$18()
        }
        var c = a.prototype;
        c.$17 = function() {
            if (this.$19()) return;
            var a = this.$5.getVideoNode();
            b("CSS").addClass(a, "_62vr");
            b("CSS").addClass(a, "_1yhw");
            b("CSS").addClass(a, "_400z");
            b("CSS").addClass(a, "_1vek");
            var c = this.$5.isBroadcast();
            c && b("CSS").addClass(a, "_3yn5")
        };
        c.$20 = function() {
            if (this.$19()) return;
            var a = this.$5.getVideoNode();
            b("CSS").removeClass(a, "_62vr");
            b("CSS").removeClass(a, "_1yhw");
            b("CSS").removeClass(a, "_400z");
            b("CSS").removeClass(a, "_1vek");
            b("CSS").removeClass(a, "_3yn5")
        };
        c.$15 = function() {
            this.$19() || (this.canOpenTahoe() ? this.$17() : this.$20())
        };
        c.$19 = function() {
            return this.$5.isState("destroyed")
        };
        c.$18 = function() {
            if (!this.canOpenTahoe())
                if (this.$5.isState("playing")) {
                    if (this.$5.getOption("VideoWithLiveBroadcast", "isLive") || this.$5.getOption("VideoWithInstreamVideo", "disableClickToPause")) return;
                    this.$5.pause("user_initiated")
                } else b("logVideosClickTracking")(this.$5.getVideoNode()), this.$5.play("user_initiated");
            else this.$16("player_click")
        };
        c.$21 = function() {
            i = !0, b("Bootloader").loadModules(["TahoeController", "TahoeVideoView"], function() {}, "VideoWithClickToTahoe"), this.$3 && this.$3.remove(), this.$3 = null
        };
        c.canOpenTahoe = function() {
            var a = this.$5.getSource();
            if (a == "tahoe" || a == "channel") return !1;
            a = this.$5.getOption("VideoWithInstreamVideo", "disableClickToPause");
            return this.$5.isFullscreen() || a || !this.$5.isState("playing") ? !1 : !0
        };
        c.invokeClickEvent = function() {
            this.$18()
        };
        c.$16 = function(a) {
            __p && __p();
            var c = this;
            if (this.$2) new(b("AsyncRequest"))(this.$6.toString()).send(), this.$5.pause();
            else {
                i = !0;
                this.$3 && this.$3.remove();
                this.$3 = null;
                var d = (h || (h = b("URI"))).getNextURI(),
                    e = babelHelpers["extends"]({}, d.getQueryData(), {
                        ref: "tahoe"
                    });
                b("Bootloader").loadModules(["TahoeController"], function(b) {
                    b.openFromVideoPlayer(c.$5, c.$6.setQueryData(e), c.$4, c.$1, a, c.$7, c.$8, c.$9, c.$11, c.$12, c.$10, c.$13, c.$14)
                }, "VideoWithClickToTahoe")
            }
        };
        a.setUpBootloadOnHover = function(a) {
            if (i || a.$3) return;
            a.$3 = b("Event").listen(a.$5.getRootNode(), "mouseover", a.$21.bind(a))
        };
        return a
    }();
    e.exports = a
}), null);
__d("VideoWithFluentUFISupport", ["UFIVideoPlayerRegistry"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        b("UFIVideoPlayerRegistry").registerVideoPlayerController(a)
    };
    e.exports = a
}), null);
__d("VideoWithSequentialAutoplay", ["Arbiter", "SubscriptionsHandler", "VideoPlayerHTML5Experiments", "destroyOnUnload"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a, c) {
            __p && __p();
            var d = this;
            this.$1 = a;
            this.$2 = c;
            this.$3 = new(b("SubscriptionsHandler"))();
            if (b("VideoPlayerHTML5Experiments").displayLoopingWhenAutoplayNextVideo && this.$2 && this.$2 !== "0")
                if (this.$1.hasOption("Looping", "disabled")) this.$1.setOption("Looping", "disabled", !0);
                else {
                    var e = this.$1.addListener("optionsChange", function() {
                        d.$1.hasOption("Looping", "disabled") && (d.$1.setOption("Looping", "disabled", !0), e.remove())
                    });
                    this.$3.addSubscriptions(e)
                }
            this.$1.addListener("finishPlayback", this.$4.bind(this));
            this.$3.addSubscriptions(b("Arbiter").subscribe("nextVideoAutoplay", function(a, b) {
                b.nextVideoID == d.$1.getVideoID() && d.$1.play("autoplay_initiated")
            }));
            b("destroyOnUnload")(function() {
                return d.$3.release()
            })
        }
        var c = a.prototype;
        c.$4 = function() {
            b("Arbiter").inform("nextVideoAutoplay", {
                nextVideoID: this.$2
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("XVideoQualitySurveyController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/quality_survey/", {
        videoid: {
            type: "String"
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}), null);
__d("VideoPlayButton", ["AsyncRequest", "CSS", "EventListener", "VideoDisplayTimePlayButton", "XVideoQualitySurveyController"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a, c, d) {
            __p && __p();
            this.$1 = a;
            this.$2 = c;
            d && (this.$3 = d.hiddenAfterFinish, this.$4 = d.hiddenWhilePaused, this.$5 = !!d.hiddenInFallback, this.$5 = d.hiddenInFallback, this.$6 = d.spherical);
            c = b("VideoDisplayTimePlayButton").getClicked(this.$2);
            b("VideoDisplayTimePlayButton").unregister(this.$2);
            a.addListener("beginPlayback", this.$7.bind(this));
            a.addListener("finishPlayback", this.$8.bind(this));
            a.addListener("pausePlayback", this.$9.bind(this));
            a.addListener("buffering", this.$10.bind(this));
            a.addListener("buffered", this.$11.bind(this));
            a.addListener("stateChange", this.$12.bind(this));
            a.addListener("playRequested", this.$13.bind(this));
            a.addListener("VideoChannelController/exitChannel", this.$14.bind(this));
            a.addListener("clickVideo", this.$15.bind(this));
            a.addListener("TahoeController/enterTahoe", this.$16.bind(this));
            b("EventListener").listen(this.$2, "click", this.$17.bind(this));
            d && d.hiddenWhileJSLoading && !d.hiddenWhileVideoLoading && b("CSS").show(this.$2);
            c && this.$17()
        }
        var c = a.prototype;
        c.$12 = function() {
            this.$1.isState("fallback") && (this.$5 || this.$1.getIsInChannel() ? b("CSS").hide(this.$2) : b("CSS").show(this.$2))
        };
        c.$7 = function() {
            b("CSS").hide(this.$2)
        };
        c.$9 = function() {
            if (this.$4 || this.$1.getSource() === "inline") return;
            b("CSS").show(this.$2)
        };
        c.$13 = function(a) {
            if (this.$1.isState("fallback") || a === "autoplay_initiated") return;
            b("CSS").hide(this.$2)
        };
        c.$14 = function() {
            (this.$1.isState("paused") && (!this.$4 || this.$6) || this.$1.isState("finished") && !this.$3) && b("CSS").show(this.$2)
        };
        c.$16 = function() {
            this.$1.isState("playing") || b("CSS").show(this.$2)
        };
        c.$8 = function() {
            var a = this.$1.getOption("Looping", "isLooping");
            this.$3 || this.$1.getIsInChannel() || this.$1.getSource() === "tahoe" || a ? b("CSS").hide(this.$2) : b("CSS").show(this.$2);
            if (!this.$1.getIsInChannel() && !this.$1.isAd() && !this.$1.hasOption("WatchAndScroll", "isActive") && !this.$1.isMuted() && this.$1.getSource() !== "messaging") {
                a = b("XVideoQualitySurveyController").getURIBuilder().setString("videoid", this.$1.getVideoID()).getURI();
                a = new(b("AsyncRequest"))().setURI(a);
                a.send()
            }
        };
        c.$10 = function() {
            b("CSS").hide(this.$2)
        };
        c.$11 = function() {
            b("CSS").hide(this.$2)
        };
        c.$17 = function() {
            this.$1.clickVideo()
        };
        c.$15 = function() {
            if (this.$1.isState("fallback")) return;
            b("CSS").hide(this.$2)
        };
        return a
    }();
    e.exports = a
}), null);
__d("XVideoWithRapidFeedbackAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/instream_video/rapid_feedback/async/", {
        ad_type: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        video_id: {
            type: "String",
            required: !0
        },
        ad_client_token: {
            type: "String"
        },
        elapsed_time_since_ad: {
            type: "Float"
        },
        ad_position_in_video: {
            type: "Float"
        },
        player_origin: {
            type: "Enum",
            enumType: 1
        },
        player_sub_origin: {
            type: "String"
        },
        player_format: {
            type: "Enum",
            enumType: 1
        },
        script_path: {
            type: "String"
        },
        is_indicator_shown: {
            type: "Bool",
            defaultValue: !1
        },
        is_ad_complete: {
            type: "Bool",
            defaultValue: !1
        }
    })
}), null);
__d("VideoWithRapidFeedback", ["AsyncRequest", "DateConsts", "ScriptPath", "ViewportTrackingHelper", "XVideoWithRapidFeedbackAsyncController", "onViewportChanged"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 10 * b("DateConsts").MS_PER_SEC;
    a = function() {
        "use strict";
        __p && __p();

        function a(a, c) {
            this.$1 = a, this.$2 = c, this.$3 = 0, this.$4 = 0, this.$6 = !1, this.$7 = !1, a.isState("playing") && this.$8(), a.addListener("beginPlayback", this.$8.bind(this)), a.addListener("pausePlayback", this.$9.bind(this)), a.addListener("commercialBreak/vodBreakStarting", this.$10.bind(this)), a.addListener("commercialBreak/showUFI", this.$11.bind(this)), this.$5 = this.$12(), b("onViewportChanged")(this.$13.bind(this))
        }
        var c = a.prototype;
        c.$8 = function() {
            this.$3 === 0 && (this.$3 = Date.now())
        };
        c.$9 = function() {
            this.$3 > 0 && (this.$4 += Date.now() - this.$3), this.$3 = 0
        };
        c.$10 = function() {
            this.$6 = !0
        };
        c.$11 = function() {
            this.$6 && (this.$7 = !0)
        };
        c.$13 = function() {
            if (this.$1.isState("destroyed")) return;
            var a = this.$5;
            this.$5 = this.$12();
            if (a && !this.$5) {
                a = this.$4;
                this.$3 > 0 && (a += Date.now() - this.$3);
                a > g && (this.$4 = 0, this.$3 = 0, this.$14())
            }
        };
        c.$12 = function() {
            return b("ViewportTrackingHelper").isVisible(this.$1.getRootNode(), 0)
        };
        c.$14 = function() {
            var a = null,
                c = null,
                d = null,
                e = null,
                f = null,
                g = null,
                h = this.$1.getOption("VideoWithInstreamVideo", "controller");
            if (h) {
                h = h.getMostRecentAdInfo();
                h && h.adClientToken && (a = h.adClientToken, c = Date.now() - h.adStartPlayingTimeMs, d = h.adPositionInVideoMs, e = h.playerOrigin, f = h.playerSubOrigin, g = h.playerFormat)
            }
            h = b("XVideoWithRapidFeedbackAsyncController").getURIBuilder().setEnum("ad_type", this.$2).setString("video_id", this.$1.getVideoID()).setString("ad_client_token", a).setFloat("elapsed_time_since_ad", c).setFloat("ad_position_in_video", d).setEnum("player_format", g).setEnum("player_origin", e).setString("player_sub_origin", f).setString("script_path", b("ScriptPath").getScriptPath()).setBool("is_indicator_shown", this.$6).setBool("is_ad_complete", this.$7);
            new(b("AsyncRequest"))(h.getURI()).send()
        };
        return a
    }();
    e.exports = a
}), null);
__d("VideoPlayerRegistryComponent", ["invariant", "SubscriptionsHandler", "VideoPlayerRegistry"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.$1 = a || null, this.$2 = new(b("SubscriptionsHandler"))(), this.$1 && this.$3()
        }
        var c = a.prototype;
        c.destroy = function() {
            this.$4(), this.$1 = null
        };
        c.getController = function() {
            var a = this.$1;
            a || g(0, 2032);
            return a
        };
        c.enable = function(a) {
            this.$1 && this.$1 !== a && this.$4(), this.$1 = a, this.$3()
        };
        c.disable = function(a) {
            this.$4()
        };
        c.$3 = function() {
            var a = this,
                c = this.getController();
            b("VideoPlayerRegistry").add(c);
            this.$2.addSubscriptions(c.addListener("stateChange", function() {
                c.isState("destroyed") && a.destroy()
            }))
        };
        c.$4 = function() {
            var a = this.getController();
            this.$2.release();
            this.$2.engage();
            b("VideoPlayerRegistry").remove(a)
        };
        return a
    }();
    e.exports = a
}), null);
__d("VODPresenceCVCDisplayStage", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        PRE_ENTER: "pre_enter",
        POST_ENTER: "post_enter"
    })
}), null);
__d("VideoVODCVCFetchingQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1918447051537934"
        };
        b.getQueryID = function() {
            return "310269563033462"
        };
        return b
    }(b("WebGraphQLQueryBase"))
}), null);
__d("VideoVODCVCFetching", ["Run", "SubscriptionsHandler", "VideoVODCVCFetchingQueryWebGraphQLQuery", "VODPresenceCVCDisplayStage", "WebGraphQL", "clearTimeout", "keyMirror", "promiseDone", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("keyMirror")(b("VODPresenceCVCDisplayStage")),
        h = 1e4;
    a = function() {
        __p && __p();

        function a(a) {
            __p && __p();
            var c = this;
            this.$1 = null;
            this.$3 = null;
            this.$4 = null;
            this.$5 = h;
            this.$6 = !1;
            this.$10 = function() {
                c.$6 = !0, b("clearTimeout")(c.$4)
            };
            if (a.isAd() || a.isLiveVideo()) return;
            this.$7 = a;
            a.registerOption("VideoVODCVCFetching", "cvcData", function() {
                return c.$1
            });
            this.$2 = new(b("SubscriptionsHandler"))();
            this.$2.addSubscriptions(a.addListener("beginPlayback", function() {
                c.$3 = null
            }), a.addListener("updateStatus", function(b) {
                a.isState("playing") && (c.$3 === null && (c.$3 = b.position), c.$3 + 3 <= b.position && (c.$3 = Infinity, c.$9(a)))
            }), a.addListener("pausePlayback", this.$10), a.addListener("finishPlayback", function() {
                return !a.getOption("Looping", "isLooping") && c.$10()
            }), a.addListener("becomeInvisible", this.$10));
            b("Run").onLeave(function() {
                return c.cleanOnLeave()
            })
        }
        var c = a.prototype;
        c.cleanOnLeave = function() {
            this.$2 && this.$2.release(), this.$10(), this.$7 && this.$7.hasOption("VideoVODCVCFetching", "cvcData") && this.$7.unregisterOption("VideoVODCVCFetching", "cvcData")
        };
        c.$9 = function(a) {
            this.$6 = !1, this.$11(a, g.POST_ENTER)
        };
        c.getQuery = function(a, c, d, e) {
            return new(b("VideoVODCVCFetchingQueryWebGraphQLQuery"))({
                video_id: a.getVideoID(),
                stage: c,
                video_asset_id: d,
                prev_cvc: e
            })
        };
        c.$11 = function(a, c) {
            __p && __p();
            var d = this,
                e;
            e = b("WebGraphQL").exec(this.getQuery(a, c, this.$8, (e = this.$1) == null ? void 0 : e.viewerCount));
            b("promiseDone")(e, function(e) {
                __p && __p();
                if (d.$6) return;
                e = e.vod_presence_cvc;
                if (e) {
                    var f = e.cvc || 0,
                        i = e.is_displayed,
                        j = e.next_poll_ms || h;
                    d.$8 = e.video_asset_id;
                    d.$1 = {
                        viewerCount: f,
                        showVODIndicator: i
                    };
                    a.emit("VideoVODCVC/viewCountChange", d.$1);
                    j >= 0 && c === g.POST_ENTER && (d.$4 = b("setTimeout")(d.$11.bind(d, a, c), j))
                }
            }, function(e) {
                if (d.$6) return;
                d.$4 = b("setTimeout")(d.$11.bind(d, a, c), d.$5);
                d.$5 = Math.min(Number.MAX_SAFE_INTEGER, 2 * d.$5)
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("VideoVODCVCSubscription", ["EntityPresenceManager", "Int64", "Run", "SubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 42,
        h = 7,
        i = 5;
    a = function() {
        __p && __p();

        function a(a) {
            __p && __p();
            var c = this;
            this.$7 = function() {
                c.$5 = null, c.$4 && (c.$4 && c.$4.leave(), c.$4 = null)
            };
            if (a.isAd() || a.isLiveVideo()) return;
            this.$1 = new(b("SubscriptionsHandler"))();
            this.$4 = null;
            this.$2 = a;
            this.$3 = this.$2.getPlayerOrigin();
            this.$5 = null;
            this.$1.addSubscriptions(a.addListener("beginPlayback", function() {
                c.$5 = null
            }), a.addListener("updateStatus", function(a) {
                c.$2.isState("playing") && (c.$5 === null && (c.$5 = a.position), c.$5 + 3 <= a.position && (c.$2.logEvent("played_for_three_seconds"), c.$5 = Infinity, c.$6()))
            }), a.addListener("pausePlayback", this.$7), a.addListener("finishPlayback", function() {
                return !a.getOption("Looping", "isLooping") && c.$7()
            }), a.addListener("becomeInvisible", this.$7), a.addListener("seekEnd", this.$7), a.addListener("TahoeController/exitTahoe", this.$7));
            b("Run").onLeave(function() {
                return c.cleanOnLeave()
            })
        }
        var c = a.prototype;
        c.cleanOnLeave = function() {
            this.$7(), this.$1 && this.$1.release()
        };
        c.$6 = function() {
            if (this.$4) return;
            this.$4 = b("EntityPresenceManager").enter("vod", this.$2.getVideoID(), this.getLoggingCapabilitiesForEntityPresence())
        };
        c.getLoggingCapabilitiesForEntityPresence = function() {
            __p && __p();
            var a, c;
            (a = b("Int64")).fromInt(0);
            c = a.fromString(Date.now().toString());
            var d = 7;
            c = c.shiftLeft(d);
            c = c.add(a.fromInt(1));
            d = 64 - (g + h + i + d);
            c = c.shiftLeft(d);
            c = c.shiftLeft(i);
            c = c.add(a.fromInt(this.mapPlayerFormatToCapabilityBits(this.$2.getPlayerFormat())));
            c = c.shiftLeft(h);
            c = c.add(a.fromInt(this.mapPlayerOriginToCapabilityBits(this.$3)));
            return c
        };
        c.mapPlayerOriginToCapabilityBits = function(a) {
            __p && __p();
            if (a === null) return 0;
            switch (a) {
                case "commerce":
                    return 12;
                case "direct_inbox":
                    return 4;
                case "events":
                    return 18;
                case "explorefeed":
                    return 19;
                case "fb_stories":
                    return 5;
                case "group":
                    return 11;
                case "instant_articles":
                    return 16;
                case "instant_shopping":
                    return 16;
                case "live_chaining":
                    return 22;
                case "living_room":
                    return 9;
                case "living_room_recap":
                    return 8;
                case "media_gallery":
                    return 3;
                case "movie_checkout_flow":
                    return 21;
                case "newsfeed":
                    return 13;
                case "notifications":
                    return 7;
                case "page_timeline":
                    return 17;
                case "permalink":
                    return 15;
                case "photosfeed":
                    return 14;
                case "saved":
                    return 23;
                case "search":
                    return 20;
                case "top_live_bookmark":
                    return 1;
                case "user_timeline":
                    return 24;
                case "video_home":
                    return 2;
                case "unknown":
                default:
                    return 0
            }
        };
        c.mapPlayerFormatToCapabilityBits = function(a) {
            __p && __p();
            if (a === null) return 0;
            switch (a) {
                case "inline":
                    return 1;
                case "snowlift":
                    return 2;
                case "permalink":
                    return 3;
                case "channel":
                    return 4;
                case "full_screen":
                    return 5;
                case "social_player":
                    return 6;
                case "tv":
                    return 7;
                case "misc":
                    return 8;
                case "watch_scroll":
                    return 9;
                case "watch_scroll_app_background":
                    return 10;
                case "watch_and_go":
                    return 11;
                case "watch_and_browse":
                    return 12;
                case "canvas":
                    return 13;
                case "tahoe":
                    return 14;
                case "fb_stories":
                    return 15;
                default:
                    return 0
            }
        };
        return a
    }();
    e.exports = a
}), null);
__d("VideoVODCVCUI.react", ["ix", "cx", "Image.react", "React", "asset", "intlSummarizeNumber"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    __p && __p();
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return b("React").jsxs("div", {
                className: "_75tx",
                children: [b("React").jsx(b("Image.react"), {
                    className: "_75ty",
                    src: g("488783")
                }), b("intlSummarizeNumber")(this.props.viewerCount)]
            })
        };
        return c
    }(b("React").PureComponent);
    e.exports = a
}), null);
__d("VideoVODIndicator.react", ["cx", "fbt", "BasicFBNux", "JSResource", "React", "SubscriptionsHandler", "TooltipData", "VideoVODCVCUI.react", "joinClasses", "lazyLoadComponent"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    __p && __p();
    var i = b("lazyLoadComponent")(b("JSResource")("XUIAmbientNUX.react").__setRef("VideoVODIndicator.react")),
        j = 6171,
        k = !1;
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c) {
            __p && __p();
            var d;
            d = a.call(this, c) || this;
            d.$2 = null;
            d.state = {
                showVODIndicator: !1,
                isDisplayingAdBreak: !1,
                viewerCount: null,
                showNUX: !1
            };
            d.$3 = function() {
                b("BasicFBNux").onDismiss(j), d.setState({
                    showNUX: !1
                })
            };
            c = d.props.vpc;
            if (d.props.renderLocation === "tahoeBackAffordance") {
                c = c.getOption("VideoVODCVCFetching", "cvcData");
                c && (d.state.showVODIndicator = c.showVODIndicator, d.state.viewerCount = c.viewerCount)
            }
            return d
        }
        var d = c.prototype;
        d.initSubscriptions = function(a) {
            var c = this;
            this.$2 = new(b("SubscriptionsHandler"))();
            this.$2.addSubscriptions(a.addListener("VideoVODCVC/viewCountChange", function(a) {
                c.setState({
                    showVODIndicator: a.showVODIndicator,
                    viewerCount: a.viewerCount
                })
            }), a.addListener("finishPlayback", function() {
                return !a.getOption("Looping", "isLooping") && c.setState({
                    showVODIndicator: !1
                })
            }), a.addListener("commercialBreak/vodBreakStarting", function() {
                c.setState({
                    isDisplayingAdBreak: !0
                })
            }), a.addListener("commercialBreak/showUFI", function() {
                c.setState({
                    isDisplayingAdBreak: !1
                })
            }))
        };
        d.releaseSubscriptions = function() {
            this.$2 && this.$2.release()
        };
        d.componentDidMount = function() {
            this.initSubscriptions(this.props.vpc)
        };
        d.componentWillUnmount = function() {
            this.releaseSubscriptions()
        };
        d.render = function() {
            var a = this;
            if (!this.state.showVODIndicator || !this.state.viewerCount || this.state.isDisplayingAdBreak) return null;
            var c = null,
                d = null;
            this.state.showNUX ? (d = b("React").jsx(b("React").Suspense, {
                fallback: null,
                children: b("React").jsx(i, {
                    contextRef: function() {
                        return a.$1
                    },
                    position: "right",
                    shown: !0,
                    onCloseButtonClick: this.$3,
                    children: h._("See how many people are watching this video right now")
                })
            }), k || (k = !0, b("BasicFBNux").onView(j))) : c = b("TooltipData").propsFor(h._("Number of people watching now"), "right");
            return b("React").jsxs("div", babelHelpers["extends"]({
                className: b("joinClasses")("_75ug" + (this.props.renderLocation === "tahoeBackAffordance" ? " _7348" : "") + (this.props.renderLocation === "videoHomeFeedUnit" ? " _72u5" : "") + (this.props.renderLocation === "videoNewsFeedUnit" ? " _75uh" : "") + " uiContextualLayerParent")
            }, c, {
                children: [b("React").jsx(b("VideoVODCVCUI.react"), {
                    ref: function(b) {
                        return a.$1 = b
                    },
                    viewerCount: this.state.viewerCount
                }), d]
            }))
        };
        return c
    }(b("React").Component);
    e.exports = a
}), null);
__d("PlayerKeyboardControls.react", ["ix", "cx", "CenteredContainer.react", "Event", "EventListener", "FBCircularGlyph.react", "Image.react", "Keys", "LiveRewindUtils", "LiveVideoPlayerActions", "React", "ReactDOM", "asset", "clamp", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = 10,
        j = .1;
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                action: null
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1 = b("EventListener").listen(this.props.controller.getRootNode(), "keydown", this.$2.bind(this))
        };
        d.componentWillUnmount = function() {
            this.$1 && this.$1.remove()
        };
        d.$3 = function() {
            if (!this.props.isLiveRewindEnabled) return;
            var a = this.props.controller,
                c = a.getCurrentTimePosition();
            this.setState({
                action: "pause"
            });
            a.pause("user_initiated");
            b("LiveVideoPlayerActions").setIsRewound(a, !0);
            b("LiveRewindUtils").logLiveRewindEvent("pause", a, null, c, null, c)
        };
        d.$4 = function() {
            if (!this.props.isLiveRewindEnabled) return;
            var a = this.props.controller,
                c = a.getCurrentTimePosition();
            this.setState({
                action: "play"
            });
            a.play("user_initiated");
            b("LiveRewindUtils").logLiveRewindEvent("play", a, null, c, null, c)
        };
        d.$5 = function() {
            return this.props.seekFrameWhenPaused && !this.props.controller.isState("playing") ? 1 / 30 : this.props.seekIncrement
        };
        d.$2 = function(a) {
            __p && __p();
            var c = this.props.controller,
                d = this.props.controller.getSource() === "tahoe";
            if (this.props.isFullscreenRequired && !c.isFullscreen()) return;
            var e = c.getCurrentTimePosition(),
                f = c.getVolume();
            switch (b("Event").getKeyCode(a)) {
                case b("Keys").SPACE:
                    d && a.preventDefault();
                    if (c.isState("playing")) {
                        if (this.props.isLiveStreaming) {
                            this.$3();
                            break
                        }
                        this.setState({
                            action: "pause"
                        });
                        c.pause("user_initiated")
                    } else {
                        if (this.props.isLiveStreaming) {
                            this.$4();
                            break
                        }
                        this.setState({
                            action: "play"
                        });
                        c.play("user_initiated")
                    }
                    break;
                case b("Keys").LEFT:
                    if (this.props.isLiveStreaming) {
                        this.props.isLiveRewindEnabled && (b("LiveRewindUtils").seekBack(c), this.setState({
                            action: "rewind"
                        }));
                        break
                    }
                    this.setState({
                        action: "rewind"
                    });
                    c.seek(e - this.$5());
                    break;
                case b("Keys").RIGHT:
                    if (this.props.isLiveStreaming) {
                        this.props.isLiveRewindEnabled && (b("LiveRewindUtils").seekForward(c), this.setState({
                            action: "forward"
                        }));
                        break
                    }
                    this.setState({
                        action: "forward"
                    });
                    c.seek(e + this.$5());
                    break;
                case b("Keys").UP:
                    if (!c.isBroadcaster() && c.isAudioBlocked()) break;
                    d && a.preventDefault();
                    e = Math.min(f + j, 1);
                    this.setState({
                        action: "volume-up"
                    });
                    c.setVolume(e);
                    c.isMuted() && c.unmute();
                    break;
                case b("Keys").DOWN:
                    if (!c.isBroadcaster() && c.isAudioBlocked()) break;
                    d && a.preventDefault();
                    e = Math.max(f - j, 0);
                    e < .001 ? (this.setState({
                        action: "mute"
                    }), c.mute()) : (this.setState({
                        action: "volume-down"
                    }), c.setVolume(e));
                    break;
                case b("Keys").M:
                    if (!c.isBroadcaster() && c.isAudioBlocked()) break;
                    c.isMuted() ? (this.setState({
                        action: "unmute"
                    }), c.unmute()) : (this.setState({
                        action: "mute"
                    }), c.mute());
                    break;
                case b("Keys").F:
                    c.isFullscreen() ? this.setState({
                        action: "exit-fs"
                    }) : this.setState({
                        action: "enter-fs"
                    });
                    setTimeout(function() {
                        return c.toggleFullscreen()
                    }, 100);
                    break;
                case b("Keys").COMMA:
                    this.props.enablePlaybackRateControl && c.setPlaybackRate(b("clamp")(c.getPlaybackRate() / 2, .5, 1));
                    break;
                case b("Keys").PERIOD:
                    this.props.enablePlaybackRateControl && c.setPlaybackRate(b("clamp")(c.getPlaybackRate() * 2, 1, 2));
                    break
            }
        };
        d.render = function() {
            __p && __p();
            if (!this.state.action) return null;
            var a = this.props.controller,
                c = "",
                d = "",
                e = null;
            switch (this.state.action) {
                case "play":
                    c = g("476305");
                    break;
                case "pause":
                    c = g("476304");
                    break;
                case "rewind":
                    c = g("476307");
                    d = "_380-";
                    a.isState("playing") ? e = this.props.seekIncrement !== i ? null : b("React").jsx(b("Image.react"), {
                        className: "_pa6",
                        src: g("476306")
                    }) : e = this.props.seekFrameWhenPaused ? null : b("React").jsx(b("Image.react"), {
                        className: "_pa6",
                        src: g("476306")
                    });
                    break;
                case "forward":
                    c = g("476308");
                    d = "_3813";
                    a.isState("playing") ? e = this.props.seekIncrement !== i ? null : b("React").jsx(b("Image.react"), {
                        className: "_pa6",
                        src: g("476306")
                    }) : e = this.props.seekFrameWhenPaused ? null : b("React").jsx(b("Image.react"), {
                        className: "_pa6",
                        src: g("476306")
                    });
                    break;
                case "volume-up":
                case "unmute":
                    c = g("476301");
                    break;
                case "volume-down":
                    c = g("476302");
                    break;
                case "mute":
                    c = g("476303");
                    break;
                case "enter-fs":
                    c = g("476310");
                    break;
                case "exit-fs":
                    c = g("476309");
                    break
            }
            a = b("React").jsx(b("FBCircularGlyph.react"), {
                circleSize: 120,
                className: b("joinClasses")(d, "_3814"),
                glyph: c,
                ref: function(a) {
                    a = b("ReactDOM").findDOMNode(a);
                    if (!a || !d) return;
                    a.classList.remove(d);
                    void a.offsetWidth;
                    a.classList.add(d)
                }
            });
            return b("React").jsx(b("CenteredContainer.react"), {
                className: "_3815 _381b",
                fullHeight: !0,
                horizontal: !0,
                ref: function(a) {
                    a = b("ReactDOM").findDOMNode(a);
                    if (!a) return;
                    a.classList.remove("_381b");
                    void a.offsetWidth;
                    a.classList.add("_381b")
                },
                vertical: !0,
                children: b("React").jsxs("div", {
                    children: [a, e]
                })
            })
        };
        return c
    }(b("React").Component);
    a.defaultProps = {
        enablePlaybackRateControl: !1,
        isFullscreenRequired: !1,
        seekIncrement: i,
        seekFrameWhenPaused: !1
    };
    e.exports = a
}), null);
__d("EmbeddedVideoPauseOverlay", ["cx", "fbt", "Arbiter", "CSS", "DOM", "DOMDimensions", "EventListener", "VideoPlayerExperiments", "throttle"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = "_3bw";
    a = function() {
        "use strict";
        __p && __p();

        function a(a, c, d, e, f, g, i, j, k) {
            __p && __p();
            var l = this;
            this.$1 = c;
            this.$2 = a;
            this.$3 = d;
            this.$4 = e;
            this.$5 = f;
            this.$6 = g;
            this.$7 = i;
            this.$8 = j;
            this.$9 = 0;
            k ? (this.$10 = k.showOnlyOnFullscreen, this.$11 = k.showOnEndscreen) : (this.$10 = !1, this.$11 = !0);
            this.$12 = h._("Like");
            this.$13 = h._("Unlike");
            this.$14 = h._("Share");
            this.$15();
            this.$2.addListener("beginPlayback", this.$16.bind(this));
            this.$2.addListener("pausePlayback", this.$17.bind(this));
            this.$2.addListener("finishPlayback", this.$17.bind(this));
            this.$2.addListener("toggleFullscreen", this.$18.bind(this));
            b("EventListener").listen(this.$2.getRootNode(), "mousemove", b("throttle")(this.$19.bind(this), 200));
            b("EventListener").listen(this.$2.getRootNode(), "mouseenter", function() {
                l.$20 = !0
            });
            b("EventListener").listen(this.$2.getRootNode(), "mouseleave", function() {
                l.$2.isState("playing") && (l.$20 = !1, l.$21())
            });
            b("Arbiter").subscribe("embeddedUfiToggle", function() {
                l.$22(), l.$23()
            });
            b("EventListener").listen(window, "resize", b("throttle")(function() {
                l.$23()
            }, 100))
        }
        var c = a.prototype;
        c.$16 = function() {
            this.$22(), this.$23(), this.$19()
        };
        c.$22 = function() {
            var a;
            this.$2.isFullscreen() ? a = 64 : a = 32;
            this.$15();
            this.$9 = b("DOMDimensions").getElementDimensions(this.$3).width + b("DOMDimensions").getElementDimensions(this.$4).width + a
        };
        c.$23 = function() {
            if (this.$2.isState("destroyed")) return;
            var a = b("DOMDimensions").getElementDimensions(this.$2.getRootNode()).width;
            a = a < this.$9;
            a ? this.$24() : this.$15()
        };
        c.$15 = function() {
            this.$6 && b("DOM").setContent(this.$6, this.$14), this.$7 && b("DOM").setContent(this.$7, this.$12), this.$8 && b("DOM").setContent(this.$8, this.$13), this.$5 && this.$5.showText()
        };
        c.$24 = function() {
            this.$6 && b("DOM").setContent(this.$6, null), this.$7 && b("DOM").setContent(this.$7, null), this.$8 && b("DOM").setContent(this.$8, null), this.$5 && this.$5.hideText()
        };
        c.$25 = function() {
            return this.$10 && !this.$2.isFullscreen() ? !1 : this.$2.isState("playing") && this.$20 || this.$2.isState("paused") || this.$26 && this.$2.isState("finished")
        };
        c.$19 = function() {
            var a = this;
            this.$25() && (this.$27(), clearTimeout(this.$28), this.$28 = setTimeout(function() {
                a.$2.isState("playing") && a.$21()
            }, 3e3))
        };
        c.$18 = function() {
            this.$25() ? this.$27() : this.$21()
        };
        c.$17 = function() {
            this.$25() ? this.$27() : this.$21()
        };
        c.$27 = function() {
            b("CSS").removeClass(this.$1, i)
        };
        c.$21 = function() {
            b("CSS").addClass(this.$1, i)
        };
        return a
    }();
    e.exports = a
}), null);