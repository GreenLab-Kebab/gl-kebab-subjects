"use strict";

function IsMalwareProxy() {
    try {
        return window.location.host.endsWith(".kinokrad-co.com") || window.location.host.endsWith(".cryptoo.online")
    } catch (e) {
        return !1
    }
}
if (window.StackExchange = {}, window.jQuery && ! function(e) {
        var t = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                "browser": t[1] || "",
                "version": t[2] || "0"
            }
        };
        if (!e.browser) {
            var n = t(navigator.userAgent),
                i = {};
            n.browser && (i[n.browser] = !0, i.version = n.version), i.chrome ? i.webkit = !0 : i.webkit && (i.safari = !0), e.browser = i
        }
    }(jQuery), top !== self && 0 !== window.location.pathname.toLowerCase().indexOf("/integrations/embedded")) throw top.location.replace(document.location), $(function() {
    $("head").add("body").remove()
}), alert("For security reasons, framing is not allowed; click OK to remove the frames."), new Error;
if (StackExchange.init = function() {
        function e() {
            $(document).on("click", ".convert-to-post", function(e) {
                e.preventDefault();
                var t = $(this).attr("data-confirm");
                if (!t || confirm(t)) {
                    var n = $("<form method='post'/>").attr("action", $(this).attr("href")).appendTo("body");
                    n.append($("<input type='hidden' name='fkey' />").attr("value", $(this).attr("data-fkey"))).submit()
                }
            })
        }

        function t() {
            function e(e) {
                StackExchange.options.site.prefixFkey && StackExchange.options.site.routePrefix && (e = StackExchange.options.site.routePrefix + "/" + e), StackExchange.options.user.fkey !== e && (StackExchange.options.user.fkey = e, $("input[name=fkey]").val(e))
            }

            function t(e, t) {
                try {
                    var n = e.lastIndexOf("/");
                    n >= 0 && (e = e.substr(n + 1)), localStorage.setItem(i, e + "," + t)
                } catch (r) {}
            }

            function n() {
                var e = localStorage.getItem(i);
                if (!e) return {
                    "time": 0
                };
                var t = e.split(/,/);
                return {
                    "fkey": t[0],
                    "time": parseInt(t[1], 10)
                }
            }
            var i = "se:fkey";
            $(window).on("storage", function(t) {
                t = t.originalEvent, t.key === i && t.newValue && e(t.newValue.split(/,/)[0])
            });
            try {
                var r = StackExchange.options.user.fkey,
                    o = n();
                o.fkey !== r && (StackExchange.options.serverTime > o.time ? t(r, StackExchange.options.serverTime) : e(o.fkey))
            } catch (a) {}
        }

        function n() {
            function e(e) {
                var t = r.filter('[data-name="' + e + '"]');
                r.removeClass("site-footer--col__visible"), t.addClass("site-footer--col__visible")
            }
            var t = $(".js-footer-category-trigger"),
                n = $(".js-footer"),
                i = $(".js-footer-back"),
                r = $(".js-footer-col");
            t.on("click", function(i) {
                i.preventDefault();
                var r = $(this).data("target");
                t.removeClass("_active"), $(this).addClass("_active"), n.addClass("site-footer__open"), e(r)
            }), i.on("click", function(i) {
                i.preventDefault(), t.removeClass("_active"), n.removeClass("site-footer__open"), e("default")
            })
        }

        function i() {
            if ("undefined" != typeof CSS && CSS.supports && CSS.supports("(display: grid)")) {
                var e = !1,
                    t = !1,
                    n = /; rv:(\d+)[^ );]*\) Gecko\//.exec(navigator.userAgent);
                e = t = n && parseInt(n[1], 10) < 57, e && $("body").addClass("no-grid-comments"), t && $("body").addClass("no-grid-post-layout")
            }
        }
        var r = function(e) {
                if (!window.jQuery) {
                    if ("complete" !== document.readyState) return setTimeout(function() {
                        r(e)
                    }, 1e3), void 0;
                    var t = document.createElement("div");
                    t.id = "noscript-warning", t.innerHTML = function(e) {
                        return e.siteName + " requires external JavaScript from another domain, which is blocked or failed to load."
                    }({
                        "siteName": e
                    }), document.body.appendChild(t);
                    var n = document.getElementById("noscript-css");
                    if (!n) return;
                    var i = document.createElement("div");
                    i.innerHTML = n.innerText, document.head.appendChild(i.getElementsByTagName("style")[0])
                }
            },
            o = function() {
                var e = function(t, n) {
                    if (t) {
                        var i = $(t).filter(":not(.popup-stack-hidden)");
                        if (!i.length) return;
                        i.each(function(e, t) {
                            var n = $(t),
                                r = n.data("_popup"),
                                o = n.data("_lightbox");
                            r && (i = i.add(r)), o && (i = i.add(o))
                        }), i = $($.unique(i.get())), i = i.not(".popup-closing").addClass("popup-closing");
                        var r = {
                                "closeTrigger": n
                            },
                            o = $.Event("popupClosing", r);
                        if (i.trigger(o), o.isDefaultPrevented()) return i.removeClass("popup-closing"), void 0;
                        i = i.not(".popup-closed").addClass("popup-closed"), i.filter(":not(.esc-hide)").fadeOutAndRemove(), i.filter(".esc-hide").fadeOut("fast", function() {
                            i.removeClass("popup-closing").removeClass("popup-closed")
                        }), i.trigger("popupClose", r)
                    } else StackExchange.topbar && StackExchange.topbar.hideAll(), e(".lightbox:not(.no-auto-close), .message-dismissable, .popup:not(.no-auto-close), .s-modal.js-stacks-managed-popup:not(.no-auto-close), .esc-remove, .esc-hide", "esc")
                };
                $(document).keyup(function(t) {
                    27 === t.which && e()
                }), $("body").mousedown(function(t) {
                    var n = $(t.target);
                    if (!n.closest(".ac_results, .popup, .wmd-prompt-dialog, .message, .modal, .body-click-hide").length) {
                        var i = "click outside";
                        if (1 === t.which) {
                            if (n.is(".wmd-prompt-background")) return e(".wmd-prompt-dialog, .wmd-prompt-background, .popup#image-upload", i), void 0;
                            n.closest(".popup, .modal, .s-modal--dialog, .s-toast").length || e(".popup:not(.no-auto-close), .lightbox:not(.no-auto-close), .modal:not(.no-auto-close), .s-modal.js-stacks-managed-popup:not(.no-auto-close)", i), n.closest(".message-config").length || e(".message-config.message-dismissable", i), n.closest(".body-click-hide").length || e(".esc-hide")
                        }
                    }
                }), $(document).bind("closePopups", function(t) {
                    e(t.selectorToClose, t.closeTrigger)
                });
                var t = [];
                $(document).on("popupLoad", function(e) {
                    var n = e.popup;
                    if (e.lightbox)
                        for (var i = 0; i < t.length; i++) t[i].css("display", "none").addClass("popup-stack-hidden");
                    var r = n.data("_lightbox");
                    r && (n = n.add(r)), n.data("popup-stack-index", t.length), t.push(n)
                }).on("popupClosing", function(n) {
                    if (!n.isDefaultPrevented()) {
                        var i, r = $(n.target).data("popup-stack-index");
                        if (r && !isNaN(r)) {
                            for ((0 > r || r >= t.length) && StackExchange.debug.log("popupStack index out of bounds"); t.length > r;) i = t.pop(), i.data("popup-stack-index", null), e(i, n.closeTrigger);
                            for (; r > 0 && (i = t[--r], i.removeClass("popup-stack-hidden").css("display", "block"), !i.filter(".lightbox").length););
                        }
                    }
                })
            },
            a = 1,
            s = 2;
        return function(c, u) {
            StackExchange.options = c, StackExchange.settings = u, c.serverTimeOffsetSec = c.serverTime - (new Date).getTime() / 1e3, r(c.site.name), $.ajaxSetup({
                "cache": !1
            }), StackExchange.init.createJqueryExtensions(), c.enableLogging = (c.user.isEmployee || c.isDebugBuild) && "undefined" != typeof console && "undefined" != typeof console.log, $(function() {
                function r() {
                    StackExchange.using(StackExchange.options.user.isAnonymous ? "anonymous" : "loggedIn", function() {
                        Svg.init(c.svgIconPath, c.svgIconHash), StackExchange.initialized.resolve()
                    }, s, c.fullPostfix)
                }
                IsMalwareProxy() && (window.location.href = "https://stackexchange.com/about/malware?host=" + window.location.hostname), o(), t(), e(), n(), Array.from ? r() : StackExchange.using("stacksPolyfills", r, a);
                var l = StackExchange.settings.site.styleCodeAdditionalLang;
                l && StackExchange.ifUsing("prettify", function() {
                    return StackExchange.loadJsFile("third-party/prettify/additional-langs/" + l)
                }), StackExchange.scrollPadding.ensureInitialized(), i(), StackExchange.ready(function() {
                    c.user.messages && StackExchange.notify.showMessages(c.user.messages, c.isMobile), u.site.enableUserHovercards && StackExchange.usermenu.init(), c.site.universalAuthDisabled || UniversalAuth.performAuth(), StackExchange.tagPreferences ? StackExchange.tagPreferences.init() : StackExchange.tagmenu.init(), c.timingsGuid && $(window).on("load", function() {
                        setTimeout(StackExchange.processTimings, 50)
                    }), $("*[data-tracker]").track(), StackExchange.bindShowMoreHotNetworkQuestions();
                    var e = function() {
                        var e = !1;
                        $("body > script:not([src])").each(function() {
                            return this.textContent.length > 4e4 && /currentSelectable/.test(this.textContent) ? (e = !0, !1) : void 0
                        }), (e || c.user.keyboardShortcuts) && StackExchange.using("keyboardShortcuts", function() {
                            StackExchange.keyboardShortcuts.init(e)
                        })
                    };
                    document.readyState && "complete" !== document.readyState ? $(window).on("load", function() {
                        setTimeout(e, 10)
                    }) : setTimeout(e, 10), StackExchange.showFlashMessageIfAny()
                })
            })
        }
    }(), StackExchange.debug = {
        "log": function() {},
        "init": function() {
            this.log = function(e) {
                $(function() {
                    var t = $("#debug-messages");
                    t.length || (t = $("<div id='debug-messages' style='text-align:left;position:fixed;top:50px;left:50px;z-index:1000;background:white;border:2px solid black;width:300px;padding:10px;' />").append($("<span style='cursor:pointer;color:#999'>(close debug messages)</span>").click(function() {
                        $("#debug-messages").remove()
                    })).appendTo("body")), $("<div style='margin-top:10px' />").text(e).appendTo(t)
                })
            }
        }
    }, StackExchange.initialized = $.Deferred(), StackExchange.gaInitialized = $.Deferred(), StackExchange.ready = function(e) {
        StackExchange.initialized.done(e)
    }, StackExchange.gaReady = function(e) {
        StackExchange.gaInitialized.done(e)
    }, window.serq)
    for (var i = 0; i < window.serq.length; i++) StackExchange.ready(window.serq[i]);
! function() {
    var e, t = {
            "anonymous": "full-anon.js",
            "loggedIn": "full.js",
            "prettify": "prettify-full.js",
            "moderator": "moderator.js",
            "inlineEditing": "full.js",
            "beginEditEvent": "begin-edit-event.js",
            "editor": "wmd.js",
            "externalEditor": ["full-anon.js", "full.js"],
            "autocomplete": "tageditor.js",
            "tagAutocomplete": "tageditor.js",
            "tagEditor": "tageditornew.js",
            "tagSuggestions": "tagsuggestions.js",
            "mobile": "mobile.js",
            "help": "help.js",
            "inlineTagEditing": "inline-tag-editing.js",
            "mathjaxEditing": "mathjax-editing.js",
            "mathjaxEditingBeta": "mathjax-editing.beta.js",
            "revisions": "revisions.js",
            "mockups": ["full-anon.js", "full.js"],
            "schematics": ["full-anon.js", "full.js"],
            "snippets": ["full-anon.js", "full.js"],
            "snippetsJsCodeMirror": "snippet-javascript-codemirror.js",
            "review": "review.js",
            "translation": "full.js",
            "gps": ["full-anon.js", "full.js"],
            "postValidation": "post-validation.js",
            "exploreQuestions": "explore-qlist.js",
            "eventCharts": "events.js",
            "virtualKeyboard": "virtual-keyboard.js",
            "keyboardShortcuts": "keyboard-shortcuts.js",
            "adops": "adops.js",
            "stacksPolyfills": "stacks-polyfills.js",
            "wizardEditor": "wizard-editor.js",
            "ask": "ask.js"
        },
        n = {},
        i = {},
        r = {},
        o = {},
        a = {},
        s = function(e, t) {
            return function(n) {
                var i = e[n];
                return i || (i = e[n] = t(n)), i
            }
        },
        c = function(e) {
            var t, n, i = r[e],
                o = $.Deferred(),
                a = $.when(o);
            if (i)
                for (t = 0; t < i.length; t++) n = i[t].call(null), n && $.isFunction(n.promise) && (a = $.when(a, n));
            return o.resolve(), a
        },
        u = function() {
            if (!e) {
                var t = $("script[src]").filter(function() {
                    return /stub.*\.js/.test($(this).attr("src"))
                }).first();
                0 === t.length ? (StackExchange.debug.log("couldn't figure out location of stub.js"), e = "/content/js/") : e = t.attr("src").replace(/\/stub.*\.js.*$/, "/")
            }
            return e
        },
        l = function(e) {
            var t = a["js/" + e];
            return t ? "?v=" + t : (StackExchange.debug.log("no cache breaker for " + e), "")
        },
        d = function(e) {
            return e && StackExchange.options.locale && -1 === e.indexOf("third-party") && (e = e.replace(/^(.*)(\.js)(\?.*)?$/, "$1." + StackExchange.options.locale + "$2$3")), e
        },
        f = function(e, t) {
            var n = $.Deferred(),
                i = document.createElement("script");
            return i.async = "async", i.src = t ? e : d(e), i.onload = i.onreadystatechange = function(e, t) {
                (!i.readyState || /loaded|complete/.test(i.readyState)) && (t ? n.reject() : n.resolve())
            }, i.onerror = function() {
                n.reject()
            }, $("head")[0].appendChild(i), n.promise()
        },
        p = function(e) {
            var n = t[e];
            if (!n) return $.Deferred().reject().promise();
            if (n instanceof Array) {
                if (0 === n.length) return $.Deferred().reject().promise();
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        a = i[o];
                    if (a) return a
                }
                return h(n[0])
            }
            return h(n)
        },
        h = s(i, function(e) {
            return f(u() + e + l(d(e)))
        }),
        g = s(n, function(e) {
            function t() {
                return (i = StackExchange[e]) ? (c(e).done(function() {
                    n.resolve()
                }), void 0) : r > 0 ? (r--, StackExchange.debug.log("retrying " + e), setTimeout(t, 20), void 0) : (StackExchange.debug.log("object StackExchange." + e + " not available although file was loaded"), n.reject(), void 0)
            }
            var n = $.Deferred(),
                i = StackExchange[e],
                r = 3;
            return i ? n.resolve() : p(e).done(t).fail(n.reject), n.promise()
        }),
        m = $.Deferred(),
        v = 0,
        b = 2,
        y = function(e, n, i, r) {
            if (i = i || v, i === v && "resolved" !== m.state()) return m.done(function() {
                y(e, n)
            }), void 0;
            if (i === b)
                for (var o in t)
                    if (t.hasOwnProperty(o)) {
                        var a, s = t[o];
                        if (s instanceof Array) {
                            a = [];
                            for (var c = 0; c < s.length; c++) {
                                var u = s[c].replace(/^(full(?:-anon)?).js$/, "$1" + (r || "") + ".js");
                                a.push(u)
                            }
                            t[o] = a
                        } else t[o] = s.replace(/^(full(?:-anon)?).js$/, "$1" + (r || "") + ".js")
                    }
            var l = g(e);
            return i === v ? l = $.when(l, StackExchange.initialized) : i === b && m.resolve(), l.done(function() {
                n()
            }).fail(function() {
                StackExchange.debug.log("failed to provide object " + e)
            }), l
        };
    y.setCacheBreakers = function(e) {
        for (var t in e) e.hasOwnProperty(t) && (a[t] = e[t])
    };
    var w = function(e, t, n) {
        if ("undefined" != typeof n) {
            if (o["u_" + n]) return;
            o["u_" + n] = !0
        }
        if (StackExchange[e]) return t(), void 0;
        var i = r[e];
        i || (i = r[e] = []), i.push(t)
    };
    StackExchange.using = y, StackExchange.ifUsing = w, StackExchange.loadJsFile = function(e, t) {
        return f(u() + e, t)
    }
}(), String.prototype.formatUnicorn = function() {
        var e = this.toString();
        if (!arguments.length) return e;
        var t = typeof arguments[0],
            n = "string" === t || "number" === t ? Array.prototype.slice.call(arguments) : arguments[0];
        for (var i in n) e = e.replace(new RegExp("\\{" + i + "\\}", "gi"), n[i]);
        return e
    }, String.prototype.truncate = function(e, t) {
        var n = this.toString();
        return e && n.length > e && (n = n.substr(0, e) + t), n
    }, String.prototype.splitOnLast = function(e) {
        var t = this.lastIndexOf(e);
        return 0 > t ? [this] : [this.substr(0, t), this.substr(t)]
    }, String.prototype.contains = function(e) {
        return this.indexOf(e) > -1
    }, String.prototype.endsWith || (String.prototype.endsWith = function(e) {
        return -1 !== this.indexOf(e, this.length - e.length)
    }), StackExchange.init.createJqueryExtensions = function() {
        var e = StackExchange.helpers;
        $.extend($.expr[":"], {
            "working": function(e) {
                var t = $(e).data("working");
                return "undefined" != typeof t && t
            },
            "data": function(e, t, n) {
                var i = n[3],
                    r = $(e).data(i);
                switch (typeof r) {
                    case "undefined":
                        return !1;
                    case "boolean":
                        return r;
                    case "object":
                        return null !== r
                }
                return !0
            },
            "containsCI": function(e, t, n) {
                return jQuery(e).text().toUpperCase().indexOf(n[3].toUpperCase()) >= 0
            },
            "viewport": function(e) {
                var t = e.getBoundingClientRect();
                return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
            }
        }), $.fn.extend({
            "working": function(e) {
                return this.each(function() {
                    $(this).data("working", e)
                })
            },
            "track": function() {
                return this.each(function() {
                    var e = $(this),
                        t = e.is("a[href]") ? e : e.find("a[href]"),
                        n = e.data("tracker");
                    t.each(function() {
                        var e = this.href.splitOnLast("#"),
                            t = e[0];
                        t += (t.contains("?") ? "&" : "?") + n + (e[1] || ""), this.href = t
                    })
                })
            },
            "fadeOutAndRemove": function() {
                return this.each(function() {
                    var e = $(this);
                    e.is(".js-fades-with-aria-hidden") ? (e.attr("aria-hidden", "true"), e.on("transitionend", function(t) {
                        "opacity" === t.originalEvent.propertyName && e.trigger("removing").remove()
                    })) : e.fadeOut("fast", function() {
                        e.trigger("removing").remove()
                    })
                })
            },
            "charCounter": function(t) {
                return this.each(function() {
                    var n = t.target ? $(t.target) : $(this).parents("form").find("span.text-counter"),
                        i = this,
                        r = function() {
                            var e = t.min,
                                r = t.max,
                                o = (t.setIsValid || function() {}).bind(i),
                                a = 0,
                                s = i.tagName && "DIV" === i.tagName ? i.textContent : i.value;
                            s && (a = t.ignoreWhitespace ? s.replace(/\s+/g, " ").replace(/^\s+/, "").replace(/\s+$/, "").length : s.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n").length);
                            var c = a > .8 * r ? "supernova" : a > .6 * r ? "hot" : a > .4 * r ? "warm" : "cool",
                                u = "";
                            if (0 === a) 0 === e ? (u = function(e) {
                                return 1 == e.max ? "enter up to " + e.max + " character" : "enter up to " + e.max + " characters"
                            }({
                                "max": r
                            }), o(!0)) : (u = function(e) {
                                return 1 == e.min ? "enter at least " + e.min + " character" : "enter at least " + e.min + " characters"
                            }({
                                "min": e
                            }), o(!1));
                            else if (e > a) u = function(e) {
                                return 1 == e.count, e.count + " more to go..."
                            }({
                                "count": e - a
                            }), o(!1);
                            else {
                                var l = r - a;
                                u = l >= 0 ? function(e) {
                                    return 1 == e.count ? e.count + " character left" : e.count + " characters left"
                                }({
                                    "count": l
                                }) : function(e) {
                                    return 1 == e.count ? "too long by " + e.count + " character" : "too long by " + e.count + " characters"
                                }({
                                    "count": Math.abs(l)
                                }), o(r >= a)
                            }
                            n.text(u), n.hasClass(c) || n.removeClass("supernova hot warm cool").addClass(c)
                        };
                    $(this).bind("blur focus keyup paste charCounterUpdate", e.DelayedReaction(r, 100, {
                        "sliding": !0
                    }).trigger)
                })
            },
            "selectRange": function(e, t) {
                return this.each(function() {
                    if (this.setSelectionRange) this.focus(), this.setSelectionRange(e, t);
                    else if (this.createTextRange) {
                        var n = this.createTextRange();
                        n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select()
                    }
                })
            },
            "addSpinner": function(t) {
                return this.each(function() {
                    e.addSpinner(this, t)
                })
            },
            "addSpinnerAfter": function(t) {
                return this.each(function() {
                    $(this).after(e.getSpinnerImg(t))
                })
            },
            "addSpinnerBefore": function(t) {
                return this.each(function() {
                    $(this).before(e.getSpinnerImg(t))
                })
            },
            "addStacksSpinner": function(t, n) {
                return this.each(function() {
                    e.addStacksSpinner(this, t, n)
                })
            },
            "removeSpinner": function() {
                return this.each(function() {
                    $(this).find("img.ajax-loader, .s-spinner").remove()
                })
            },
            "showErrorMessage": function(t, n) {
                return this.each(function() {
                    e.showErrorMessage(this, t, n)
                })
            },
            "showErrorPopup": function(t, n) {
                return this.each(function() {
                    e.showErrorMessage(this, t, n)
                })
            },
            "showInfoMessage": function(t, n) {
                return this.each(function() {
                    e.showInfoMessage(this, t, n)
                })
            },
            "center": function(e) {
                if (StackExchange.options.isMobile) return this;
                e = e || {};
                var t = this.parent();
                "static" === t.css("position") && (t = t.offsetParent());
                var n = t.offset(),
                    i = $(window),
                    r = e.top || Math.max((i.height() - this.outerHeight()) / 2 + i.scrollTop() - StackExchange.scrollPadding.getPaddingTop() - n.top + (e.dy || 0), 65);
                this.css("position", "absolute"), this.css("top", r + "px");
                var o = Math.max(20, (i.width() - this.outerWidth()) / 2 + i.scrollLeft() - n.left);
                this.css("left", o + "px");
                var a = "calc(50% - " + this.outerWidth() / 2 + "px)";
                return this.css("left", a), this.css("left", "-webkit-" + a), this
            },
            "enable": function() {
                return 0 === arguments.length || arguments[0] ? this.removeAttr("disabled").css("cursor", "pointer").removeClass("disabled-button") : this.attr("disabled", "disabled").css("cursor", "default").addClass("disabled-button"), this
            },
            "disable": function() {
                return this.enable(!1)
            },
            "checked": function(e) {
                return e ? this.attr("checked", "checked") : this.removeAttr("checked"), this
            },
            "loadPopup": function(t) {
                var n = $.Deferred(),
                    i = this,
                    r = t.target || i.parent();
                if (!t.html && !t.noSpinner) {
                    var o = t.addSpinnerFn || $.fn.addSpinnerAfter;
                    o.call(i, {
                        "padding": "0 3px"
                    })
                }
                t.loaded && n.done(t.loaded);
                var a = function(o) {
                    var a, s = $(o).elementNodesOnly();
                    s.find(".popup-actions-cancel, .popup-close a, .modal-close").click(function() {
                        StackExchange.helpers.closePopups(a ? s.add(a) : s)
                    }), s.find("input:radio[disabled=disabled] + label.action-label").addClass("action-disabled"), t.hideDescriptions && s.addClass("_hidden-descriptions").find("ul.action-list > li:not(.action-selected) .action-desc").hide();
                    var c = s.find("input:radio:not(.action-subform input)");
                    c.closest("li").bind("hide-action", function() {
                        var e = $(this),
                            n = ".action-subform" + (t.hideDescriptions ? ", .action-desc" : "");
                        e.removeClass("action-selected").find(n).slideUp("fast")
                    }).bind("show-action", function(e) {
                        var n = $(this);
                        return n.hasClass("action-selected") ? (e.stopImmediatePropagation(), void 0) : (n.siblings(".action-selected").trigger("hide-action"), n.addClass("action-selected").find(".action-subform").slideDown("fast", function() {
                            if (t.subformShow && t.subformShow($(this)), t.subformFocusInput) {
                                var e = $(this).find("input[type=text], textarea").not(".actual-edit-overlay").eq(0);
                                e.length && e.focus()
                            }
                        }), t.hideDescriptions && n.find(".action-desc").slideDown("fast"), t.actionSelected && t.actionSelected(n), s.find(".popup-submit").enable(), void 0)
                    }).filter(".show-action-onload").each(function() {
                        var e = $(this);
                        n.done(function() {
                            e.find("input[type=radio]").click()
                        })
                    }), c.on("click", function() {
                        $(this).closest("li").trigger("show-action")
                    }), (t.insert || function(e) {
                        t.prepend ? e.prependTo(r) : e.appendTo(r)
                    })(s), t.lightbox && (a = StackExchange.helpers.addLightbox().data("_popup", s), s.css("z-index", +a.css("z-index") + 1).data("_lightbox", a)), n.resolveWith(i, [s, a]), r.trigger($.Event("popupLoad", {
                        "popup": s,
                        "lightbox": a
                    }));
                    var u = function() {};
                    if (t.subformShow) {
                        var l = s.find("li.action-selected .action-subform");
                        l.length > 0 && (u = function() {
                            l.each(function() {
                                t.subformShow($(this))
                            })
                        })
                    }
                    var d = !!t.dontShow;
                    d || (s.center().fadeIn("fast", u), a && a.fadeIn("fast")), e.bindMovablePopups()
                };
                return t.html ? a(t.html) : $.ajax({
                    "type": "GET",
                    "url": t.url,
                    "dataType": "html",
                    "data": t.data,
                    "success": a,
                    "error": function(e) {
                        var i = e.responseText && e.responseText.length < 200 ? e.responseText : t.defaultErrorMessage || "Unable to load popup - please try again";
                        (t.errorTarget || r).showErrorMessage(i, {
                            "transient": 409 === e.status
                        }), n.reject(i)
                    },
                    "complete": e.removeSpinner
                }), n.promise()
            },
            "asyncLoad": function(e) {
                return e = $.extend({
                    "callback": null,
                    "cache": {}
                }, e), this.each(function() {
                    var t = ".async-load",
                        n = $(this),
                        i = n.find(t);
                    n.is(t) && (i = i.add(n)), i.each(function() {
                        var t = $(this),
                            n = t.data("load-url") || "";
                        if (n && !t.is(":working")) {
                            t.working(!0).addSpinner();
                            var i = function(n) {
                                    t.html(n).removeClass("async-load").mathjax();
                                    var i = t.data("after-load") || "";
                                    if (i || e.callback) {
                                        for (var r, o = i ? i.split(".") : [], a = 0; a < o.length; a++) r = (r || window)[o[a]];
                                        r = r || e.callback, "function" == typeof r && r(t)
                                    }
                                },
                                r = e.cache[n];
                            r ? window.setTimeout(function() {
                                i(r)
                            }, 0) : $.ajax({
                                "type": "GET",
                                "url": n,
                                "dataType": "html"
                            }).done(function(t) {
                                e.cache[n] = t, i(t)
                            }).fail(function() {
                                t.removeSpinner().showErrorMessage("An error has occurred; please try again")
                            })
                        }
                    })
                })
            },
            "mathjax": function() {
                return this.each(function() {
                    "undefined" != typeof MathJax && MathJax.Hub.Typeset(this)
                })
            },
            "elementNodesOnly": function() {
                return this.filter(function() {
                    return 1 === this.nodeType
                })
            },
            "scrollIntoView": function(e) {
                if (0 === this.length) return this;
                var t = {
                        "duration": 100,
                        "complete": null
                    },
                    n = $.extend({}, t, e),
                    i = this.first();
                return "contents" === i.css("display") && (i = i.find(">*:first")), i.is(":viewport") ? "function" == typeof n.complete && n.complete() : $("html, body").animate({
                    "scrollTop": i.offset().top
                }, n), this
            },
            "outerHTML": function() {
                return $("<div>").append(this.eq(0).clone()).html()
            },
            "unadornedButtonClick": function(e, t) {
                var n = {
                        "namespace": "button",
                        "selector": null
                    },
                    i = $.extend({}, n, t);
                return this.on("keypress." + i.namespace, i.selector, function(t) {
                    (32 === t.keyCode || 13 === t.keyCode) && (e.apply(this, arguments), t.preventDefault())
                }).on("click." + i.namespace, i.selector, function(t) {
                    this.blur(), e.apply(this, arguments), t.preventDefault()
                })
            },
            "addAtEnd": function(e) {
                var t = this.get();
                return t.push.apply(t, $(e).get()), this.pushStack(t)
            },
            "dispatchEvent": function(e, t) {
                var n, i = this.get(0);
                try {
                    n = new CustomEvent(e, {
                        "cancelable": !0,
                        "bubbles": !0,
                        "detail": t || {}
                    })
                } catch (r) {
                    n = document.createEvent("CustomEvent"), n.initCustomEvent(e, !0, !0, t || {})
                }
                return i && i.dispatchEvent(n), n
            }
        })
    }, StackExchange.helpers = function() {
        function e(e, t) {
            $(e).find("input[type='submit'], button[type='submit']").prop("disabled", t)
        }
        var t = function() {
                var e = $("div.popup:not([data-controller~=se-draggable])");
                e.attr("data-controller", "se-draggable").find(".handle").attr("data-target", "se-draggable.handle")
            },
            n = {
                "addLightbox": function() {
                    return $('<div class="lightbox"/>').appendTo($("body")).css("height", $(document).height())
                },
                "bindMovablePopups": t,
                "onClickDraftSave": function(e) {
                    return $(e).click(function(e) {
                        if (StackExchange.cardiologist) {
                            e.preventDefault();
                            var t = this.href;
                            return StackExchange.cardiologist.ensureDraftSaved(function() {
                                window.onbeforeunload = null, window.location.href = t
                            }), !1
                        }
                    }), !0
                },
                "showMessage": function(e, t, i) {
                    if (e = $(e), e.length) {
                        var r = {
                                "messageElement": null,
                                "position": "inside",
                                "dismissable": !0,
                                "type": "error",
                                "closeOthers": !0,
                                "shown": function() {},
                                "relativeToBody": !1,
                                "lightbox": !1,
                                "stopBodyScroll": !1,
                                "fixedTo$elem": !1,
                                "slideDown": !1
                            },
                            o = $.extend({}, r, i),
                            a = 9;
                        o.closeOthers && $(".message, .js-stacks-managed-popup").fadeOutAndRemove();
                        var s = $('<div class="message"><div class="message-inner"><div class="message-text"></div></div></div>'),
                            c = s.find(".message-inner"),
                            u = s.find(".message-text");
                        if (s.addClass("message-" + o.type), o.cssClass && s.addClass(o.cssClass), o.messageElement ? u.append(o.messageElement) : u.html(t), o.dismissable && (s.addClass("message-dismissable"), u.css("padding-right", "48px"), c.prepend($("<div />", {
                                "title": o.closeTitle || "close this message (or hit Esc)",
                                "class": "message-close",
                                "text": "×"
                            })), s.click(function(e) {
                                var t = $(e.target),
                                    n = o.dismissable === !0 && !t.is("a") || "x-or-esc" === o.dismissable && t.is(".message-close, .message-close-inner");
                                n && (o.dismissing && o.dismissing(), s.fadeOutAndRemove(), o.lightbox && $(".lightbox").fadeOutAndRemove())
                            })), o.dismissing && s.on("popupClose", function(e, t) {
                                "esc" === t.closeTrigger && o.dismissing()
                            }), o.css && s.css(o.css), "inside" === o.position || "inline" === o.position || "toast" === o.position || o.tip || (o.tip = o.position.my), o.tip && c.addClass("message-tip message-tip-" + o.tip.replace(" ", "-")), "inline" === o.position) e.append(s);
                        else if ("inside" === o.position) s.css("position", "absolute"), e.append(s);
                        else if ("toast" === o.position) s.addClass("toast").appendTo(e);
                        else {
                            s.css("position", "absolute");
                            var l = o.relativeToBody ? $("body") : e.offsetParent();
                            l.append(s);
                            var d, f = o.relativeToBody ? e.offset() : e.position(),
                                p = e.outerWidth(!0),
                                h = e.outerHeight(!0),
                                g = s.outerWidth(),
                                m = s.outerHeight(),
                                v = p - e.outerWidth(!1),
                                b = v / 2;
                            switch (o.position.at) {
                                case "top left":
                                    d = {
                                        "top": 0,
                                        "left": 0
                                    };
                                    break;
                                case "top center":
                                    d = {
                                        "top": 0,
                                        "left": p / 2 + b
                                    };
                                    break;
                                case "top right":
                                    d = {
                                        "top": 0,
                                        "left": p
                                    };
                                    break;
                                case "right top":
                                    d = {
                                        "top": 0,
                                        "left": p
                                    };
                                    break;
                                case "right center":
                                    d = {
                                        "top": h / 2,
                                        "left": p
                                    };
                                    break;
                                case "right bottom":
                                    d = {
                                        "top": h,
                                        "left": p
                                    };
                                    break;
                                case "bottom right":
                                    d = {
                                        "top": h,
                                        "left": p
                                    };
                                    break;
                                case "bottom center":
                                    d = {
                                        "top": h,
                                        "left": p / 2 + b
                                    };
                                    break;
                                case "bottom left":
                                    d = {
                                        "top": h,
                                        "left": 0
                                    };
                                    break;
                                case "left bottom":
                                    d = {
                                        "top": h,
                                        "left": 0
                                    };
                                    break;
                                case "left center":
                                    d = {
                                        "top": h / 2,
                                        "left": 0
                                    };
                                    break;
                                case "left top":
                                    d = {
                                        "top": 0,
                                        "left": 0
                                    }
                            }
                            var y;
                            switch (o.position.my) {
                                case "left top":
                                    y = {
                                        "top": 0,
                                        "left": -a
                                    };
                                    break;
                                case "top left":
                                    y = {
                                        "top": -a,
                                        "left": 0
                                    };
                                    break;
                                case "top center":
                                    y = {
                                        "top": -a,
                                        "left": g / 2 + a
                                    };
                                    break;
                                case "top right":
                                    y = {
                                        "top": -a,
                                        "left": g
                                    };
                                    break;
                                case "right top":
                                    y = {
                                        "top": 0,
                                        "left": g + a
                                    };
                                    break;
                                case "right bottom":
                                    y = {
                                        "top": m,
                                        "left": g + a
                                    };
                                    break;
                                case "bottom right":
                                    y = {
                                        "top": m + a,
                                        "left": g
                                    };
                                    break;
                                case "bottom center":
                                    y = {
                                        "top": m + a,
                                        "left": g / 2 + a
                                    };
                                    break;
                                case "bottom left":
                                    y = {
                                        "top": m + a,
                                        "left": 0
                                    };
                                    break;
                                case "left bottom":
                                    y = {
                                        "top": m,
                                        "left": -a
                                    }
                            }
                            var w = {
                                "left": f.left + d.left - y.left,
                                "top": f.top + d.top - y.top
                            };
                            if (s.data("initialTop", w.top), s.animateOffsetTop = function(e) {
                                    s.animate({
                                        "top": s.data("initialTop") + e
                                    })
                                }, o.position.offsetTop && (w.top += o.position.offsetTop), o.position.offsetLeft && (w.left += o.position.offsetLeft), s.css({
                                    "top": w.top,
                                    "left": w.left
                                }), o.fixedTo$elem) {
                                var k = null,
                                    x = e.offset(),
                                    S = $(window).width(),
                                    E = "resize.message scroll.message";
                                $(window).on(E, function() {
                                    k = k || s.offset();
                                    var t = e.offset().top - x.top,
                                        n = $(window).width() - S,
                                        i = n / 2;
                                    s.offset({
                                        "top": k.top + t,
                                        "left": k.left + i
                                    })
                                }), s.on("removing", function() {
                                    $(window).off(E)
                                })
                            }
                        }
                        if (o.showing && o.showing(), o.lightbox) {
                            var C = $("body"),
                                j = $('<div class="lightbox"/>').appendTo(C).css("height", $(document).height()).fadeIn();
                            o.stopBodyScroll && C.addClass("stop-scrolling"), s.on("removing", function() {
                                j.fadeOutAndRemove(), o.stopBodyScroll && C.removeClass("stop-scrolling")
                            })
                        }
                        if (o.slideDown) {
                            var T = 500,
                                I = e.css("margin-top"),
                                O = e.css("margin-bottom");
                            e.css("margin-top", 0), e.css("margin-bottom", 0), s.css("height", 0), e.css("display", "block"), s.css("display", "block"), e.animate({
                                "margin-top": I,
                                "margin-bottom": O
                            }, T), s.animate({
                                "height": s.get(0).scrollHeight
                            }, T)
                        } else s.fadeIn(o.shown);
                        if (o.transient) {
                            var _ = i.transientTimeout || n.suggestedTransientTimeout(t, "toast" === i.position);
                            setTimeout(function() {
                                s.fadeOutAndRemove()
                            }, _)
                        }
                        return o.removing && s.on("removing", o.removing), StackExchange.options.enableLogging && s.data("settings", o), s
                    }
                },
                "suggestedTransientTimeout": function(e, t) {
                    var n = 40;
                    return "jp" === StackExchange.options.locale ? n = 80 : t && (n = 55), Math.max(2500, e.length * n)
                },
                "showErrorMessage": function(e, t, n) {
                    var i = {
                            "position": "inside",
                            "type": "error"
                        },
                        r = $.extend({}, i, n);
                    return this.showMessage(e, t, r)
                },
                "showErrorPopup": function(e, t, n) {
                    return this.showErrorMessage(e, t, n)
                },
                "showInfoMessage": function(e, t, n) {
                    var i = {
                            "position": "inside",
                            "transient": !0,
                            "type": "info"
                        },
                        r = $.extend({}, i, n);
                    return this.showMessage(e, t, r)
                },
                "showSuccessMessage": function(e, t, n) {
                    var i = {
                            "type": "success",
                            "position": "toast",
                            "transient": !0,
                            "transientTimeout": 1e4
                        },
                        r = $.extend({}, i, n);
                    return this.showMessage(e, t, r)
                },
                "showMobileMessage": function(e, t) {
                    var n = -2;
                    StackExchange.notify.show(e, n, "_" + t)
                },
                "showBannerMessage": function(e, t) {
                    var n = $(".banner-message-container").last();
                    0 === n.length && (n = $("<div/>").addClass("top-banner-message-container").css("display", "none").insertAfter("#header"));
                    var i = {
                        "type": t,
                        "position": "inline",
                        "cssClass": "banner-message",
                        "slideDown": !0
                    };
                    return this.showMessage(n, e, i)
                },
                "showStacksNotice": function(e, t, n) {
                    var i = {
                            "transient": !1,
                            "transientTimeout": 2e4
                        },
                        r = $.extend({}, i, n),
                        o = r.target || $(".notice-message-container").last();
                    0 === o.length && (o = $("<div/>").addClass("top-notice-message-container").insertAfter($("header").first()));
                    var a = $('<div class="s-notice" role="status" aria-hidden="false"><div class="grid gs16 gsx ai-center jc-space-between" aria-describedby="notice-message"><div class="grid--cell message-text" aria-label="notice-message"></div><div class="grid--cell mr0 dismiss-btn" aria-label="notice-dismiss"></div></div></div>'),
                        s = a.find(".message-text"),
                        c = a.find(".dismiss-btn"),
                        u = $("<a>", {
                            "class": "message-close p8 s-btn grid grid__center fc-dark",
                            "title": "Close this message"
                        });
                    return u.append(Svg.ClearSm.With("pe-none")), c.append(u), c.click(function(e) {
                        var t = $(e.target);
                        t.is(".message-close") && a.remove()
                    }), r.transient && a.delay(r.transientTimeout).slideUp(void 0, function() {
                        this.remove()
                    }), a.addClass("s-notice__" + t), s.html(e), o.append(a), a
                },
                "showModal": function(e, t) {
                    var i = $(e).addClass("js-stacks-managed-popup");
                    if (0 !== i.length) {
                        var r = {
                                "closeOthers": !0,
                                "shown": function() {}
                            },
                            o = $.extend({}, r, t),
                            a = $("body");
                        o.closeOthers && $(".message, .js-stacks-managed-popup").not(i).fadeOutAndRemove();
                        var s = function() {
                            var e = o.returnElements;
                            e && i.one("transitionend", function() {
                                e.filter(function(e, t) {
                                    return $.contains(document.body, t)
                                }).first().focus()
                            })
                        };
                        i.on("popupClose", function(e, t) {
                            var n = ["esc", "click outside", "dismiss", "submit"];
                            n.indexOf(t.closeTrigger) >= 0 && (o.dismissing && o.dismissing(), s())
                        }), o.showing && o.showing(), i.find(".js-modal-close").click(function(e) {
                            e.preventDefault(), n.closePopups(i, "dismiss")
                        }), i.addClass("s-modal").appendTo(a);
                        var c = i.find(".js-first-tabbable"),
                            u = i.find(".js-last-tabbable");
                        return c.keydown(function(e) {
                            9 === e.keyCode && e.shiftKey && (e.preventDefault(), u.focus())
                        }), u.keydown(function(e) {
                            9 !== e.keyCode || e.shiftKey || (e.preventDefault(), c.focus())
                        }), setTimeout(function() {
                            i.addClass("js-fades-with-aria-hidden").attr("aria-hidden", "false"), i.one("transitionend", function() {
                                i.find(".js-modal-initial-focus:not([disabled])").first().focus(), o.shown && o.shown()
                            })
                        }, 16), o.removing && i.on("removing", o.removing), i
                    }
                },
                "loadModal": function(e, t) {
                    var i = $.Deferred();
                    return t = t || {}, $.ajax({
                        "type": "GET",
                        "url": e,
                        "dataType": "html",
                        "success": function(e) {
                            var r = n.showModal($(e).elementNodesOnly(), t);
                            i.resolve(r)
                        },
                        "error": function(e) {
                            var n = e.responseText && e.responseText.length < 200 ? e.responseText : t.defaultErrorMessage || "Unable to load popup - please try again";
                            i.reject(n)
                        }
                    }), i.promise()
                },
                "showToast": function(e, t) {
                    var n = {
                            "dismissable": !0,
                            "transient": !0,
                            "transientTimeout": 2e4,
                            "type": "info",
                            "actions": []
                        },
                        i = $.extend({}, n, t);
                    /^(?:info|success|warning|danger)$/.test("" + i.type) || (StackExchange.debug.log("" + t.type + " is not a valid notice type"), i.type = n.type);
                    var r = '<div class="s-toast js-toast js-stacks-managed-popup" aria-hidden="true">  <aside class="s-notice">    <div class="grid gs16 gsx ai-center jc-space-between">      <div class="grid--cell">        <p class="m0 js-toast-body" id="js-notice-toast-message" role="status" tabindex="0"></p>      </div>      <div class="grid--cell mr0 js-notice-actions d-none">        <div class="grid"></div>      </div>    </div>  </aside></div>',
                        o = '<button class="p8 s-btn grid grid__center fc-dark" tabindex="0" role="button"></button>',
                        a = $(r).css("top", StackExchange.scrollPadding.getPaddingTop());
                    return a.find(".s-notice").addClass("s-notice__" + i.type), a.find(".js-toast-body").html(e), i.dismissable && i.actions.push({
                        "labelContents": Svg.ClearSm.With("m0"),
                        "ariaLabel": "Dismiss",
                        "click": function() {
                            a.fadeOutAndRemove()
                        }
                    }), i.actions.forEach(function(e) {
                        var t = $(o);
                        t.append(e.labelContents).click(function(t) {
                            t.preventDefault(), e.click(t)
                        }), e.ariaLabel && t.attr("aria-label", e.ariaLabel), a.find(".js-notice-actions").removeClass("d-none").children().append(t)
                    }), this.hideToasts(), a.appendTo(i.$parent || $("body")), a.delay(16).queue(function() {
                        $(this).addClass("js-fades-with-aria-hidden").attr("aria-hidden", "false").dequeue()
                    }), i.transient && a.delay(i.transientTimeout).queue(function() {
                        a.fadeOutAndRemove().dequeue()
                    }), a
                },
                "hideToasts": function() {
                    $(".js-toast.js-stacks-managed-popup").fadeOutAndRemove()
                },
                "removeMessages": function(e) {
                    e ? $(".message").remove() : $(".message").fadeOutAndRemove()
                },
                "addSpinner": function(e, t) {
                    $(e).append(n.getSpinnerImg(t))
                },
                "addStacksSpinner": function(e, t, n) {
                    var i = $('<div class="s-spinner" role="alert" aria-busy="true" />').addClass(n || "");
                    t && i.addClass("s-spinner__" + t), $("<div />").css({
                        "font-size": "0px",
                        "color": "transparent",
                        "float": "left"
                    }).text("loading...").appendTo(i), $(e).append(i)
                },
                "getSpinnerImg": function(e) {
                    var t = $("<img />", {
                        "class": "ajax-loader",
                        "src": "/content/img/progress-dots.gif",
                        "title": "loading...",
                        "alt": "loading..."
                    });
                    return e && t.css(e), t
                },
                "removeSpinner": function() {
                    $("img.ajax-loader, .s-spinner").remove()
                },
                "closePopups": function(e, t) {
                    var n = $.Event("closePopups");
                    n.selectorToClose = e, n.closeTrigger = t || "closePopups", $(document).trigger(n)
                },
                "enableSubmitButton": function(t) {
                    e(t, !1)
                },
                "disableSubmitButton": function(t) {
                    e(t, !0)
                },
                "loadTicks": function(e) {
                    var t;
                    t = e ? e.find(".edit-block") : $(".edit-block"), 0 === t.find("input[name=i1l]").length && (t.data("loading-ticks") || (t.data("loading-ticks", !0), $.ajax({
                        "url": "/questions/ticks",
                        "cache": !1,
                        "success": function(e) {
                            t.append("<input type='hidden' name='i1l' value='" + e + "' />")
                        },
                        "complete": function() {
                            t.data("loading-ticks", !1)
                        }
                    })))
                },
                "showFancyOverlay": function(e) {
                    e = e || {};
                    var t = $('<div id="overlay-header"></div>').prependTo("body"),
                        n = e.message || "",
                        i = $.browser.msie ? {
                            "background": "#fff",
                            "opacity": 0
                        } : {};
                    e.showClose !== !1 && (n += '<br><a class="close-overlay">close this message</a>'), t.html(n).css(i).animate({
                        "opacity": "1",
                        "height": "show"
                    }, "slow", e.complete).find(".close-overlay").click(function() {
                        t.animate({
                            "opacity": "0",
                            "height": "hide"
                        }, "fast")
                    })
                },
                "DelayedReaction": function(e, t, n) {
                    n = n || {};
                    var i, r, o = n.always,
                        a = function() {
                            i = null, e.apply(null, r)
                        };
                    return {
                        "trigger": function() {
                            if (r = arguments, o && o.apply(null, r), i) {
                                if (!n.sliding) return;
                                clearTimeout(i), i = setTimeout(a, t)
                            } else i = setTimeout(a, t)
                        },
                        "cancel": function() {
                            i && (clearTimeout(i), i = null)
                        }
                    }
                },
                "fireAndForget": function(e) {
                    $.ajax({
                        "type": "POST",
                        "url": e,
                        "data": {
                            "fkey": StackExchange.options.user.fkey
                        },
                        "async": !0
                    })
                },
                "updateQueryStringParameter": function(e, t, n) {
                    var i = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
                        r = -1 !== e.indexOf("?") ? "&" : "?";
                    return e.match(i) ? e.replace(i, "$1" + t + "=" + n + "$2") : e + r + t + "=" + n
                },
                "parseUrl": function(e) {
                    var t = document.createElement("a");
                    return t.href = e, "" === t.host && (t.href = t.href), t
                },
                "isEmailAddress": function(e) {
                    return "string" != typeof e || e.length < 3 ? !1 : /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,63}$/i.test(e)
                },
                "getLikelyErrorMessage": function(e) {
                    if (!e || "string" != typeof e.responseText || e.responseText.length > 250) return "";
                    var t = e.responseText;
                    try {
                        var n = JSON.parse(t);
                        return n.ErrorMessage || n.Message || ""
                    } catch (i) {
                        return t
                    }
                },
                "getRejectedMockXhr": function(e) {
                    return $.Deferred().reject({
                        "responseText": e
                    })
                },
                "submitFormOnEnterPress": function(e) {
                    var t = e.find("textarea, div[contenteditable]");
                    if (!t.is("[contenteditable]") || StackExchange.helpers.hasContentEditable(t)) {
                        var n = !1,
                            i = !1,
                            r = !1;
                        t.keyup(function(o) {
                            if (n || i) return i = !1, void 0;
                            if (13 === o.which && !o.shiftKey) {
                                if (t.prev("#tabcomplete > li:visible").length) return;
                                if (e.hasClass("js-prevent-submit-form-on-enter-press")) return;
                                if (!r) return;
                                e.submit()
                            }
                        }).keypress(function(e) {
                            return r = !0, 13 !== e.which || e.shiftKey
                        }), t.on("compositionstart", function() {
                            n = !0
                        }).on("compositionend", function() {
                            n = !1, i = !0
                        }).on("keydown", function(e) {
                            229 !== e.which && (i = !1)
                        })
                    }
                },
                "isInNetwork": function(e) {
                    if ("string" != typeof e) throw new TypeError;
                    try {
                        var t = StackExchange.helpers.parseUrl(e.trim()).hostname;
                        if (t === window.location.hostname) return !0;
                        for (var n = ["stackoverflow.com", "stackexchange.com", "serverfault.com", "superuser.com", "stackauth.com", "stackapps.com", "askubuntu.com", "askdifferent.com", "mathoverflow.net", "askpatents.com"], i = 0; i < n.length; i++) {
                            var r = n[i];
                            if (t === r || t.endsWith("." + r)) return !0
                        }
                    } catch (o) {}
                    return !1
                },
                "removeParameterFromQueryString": function(e) {
                    var t = window.location.href;
                    if (window.history && window.history.replaceState && -1 !== t.indexOf(e + "=")) {
                        var n = t.replace(new RegExp("^([^#]*?)(([^#]*)&)?" + e + "(=[^&#]*)?(&|#|$)"), "$1$3$5").replace(/^([^#]*)((\?)&|\?(#|$))/, "$1$3$4");
                        if (n !== t) try {
                            window.history.replaceState({}, document.title, n)
                        } catch (i) {}
                    }
                },
                "placeCaretAtEnd": function(e) {
                    if (e.focus(), "undefined" != typeof window.getSelection && "undefined" != typeof document.createRange) {
                        var t = document.createRange();
                        t.selectNodeContents(e), t.collapse(!1);
                        var n = window.getSelection();
                        n.removeAllRanges(), n.addRange(t)
                    }
                },
                "hasContentEditable": function(e) {
                    if (!e) return !1;
                    var t = e instanceof HTMLElement ? e : e instanceof $ ? e[0] : null;
                    return t && "true" === t.contentEditable
                },
                "copyTextToClipboard": function(e) {
                    var t = $("<textarea>").css("height", "0").appendTo("body");
                    t.val(e).select(), document.execCommand("copy"), t.remove()
                }
            };
        return n
    }(), StackExchange.switchMobile = function(e) {
        $.post("/mobile/" + e, {
            "returnurl": window.location.href,
            "fkey": StackExchange.options.user.fkey
        }, function(e) {
            window.location.href = e
        })
    }, StackExchange.scrollPadding = function() {
        function e() {
            function e(e) {
                var t = e.filter(function(e, t) {
                    return t === window || t === document.body || t === document.body.parentElement
                });
                return e.length > 0 && e.length === t.length
            }

            function t(e, t) {
                return function() {
                    if (u) return e.apply(this, arguments);
                    u = !0;
                    try {
                        return t.apply(this, arguments)
                    } finally {
                        u = !1
                    }
                }
            }

            function i() {
                var e = $(":target");
                if (e.length || (location.hash.length > 1 && /edge|msie|trident/i.test(navigator.userAgent) && (e = $(document.getElementsByName(location.hash.substr(1))).first()), e.length)) {
                    var t = 1;
                    e.is(":empty") && "inline" === e.css("display") && (t += parseInt(e.next().css("margin-top"), 10));
                    var i = e.offset().top;
                    e.length && Math.abs(a.scrollTop() - i - n) < t && a.scrollTop(i)
                }
            }
            var r = jQuery.fn.animate;
            jQuery.fn.animate = t(r, function(t) {
                if ("scrollTop" in t && e(this)) {
                    var i = {};
                    $.extend(i, t), i.scrollTop = parseInt(i.scrollTop, 10) - n, arguments[0] = i
                }
                return r.apply(this, arguments)
            });
            var o = jQuery.fn.scrollTop;
            jQuery.fn.scrollTop = t(o, function() {
                if (e(this)) {
                    if (0 === arguments.length) return o.apply(this, arguments) + n;
                    arguments[0] -= n
                }
                return o.apply(this, arguments)
            });
            for (var s = document.body.__proto__; s && !s.hasOwnProperty("scrollIntoView");) s = s.__proto__;
            if (s) {
                var c = s.scrollIntoView;
                s.scrollIntoView = t(c, function(e) {
                    var t = this;
                    if ("contents" === getComputedStyle(t).display && (t = t.children[0] || t), e === !0 || null === e || void 0 === e || "smooth" !== e.behavior && "end" !== e.block) {
                        var i = document.body.style.marginTop,
                            r = parseInt(getComputedStyle(document.body).marginTop, 10);
                        document.body.style.marginTop = r - n + "px";
                        var o = c.apply(t, arguments);
                        return document.body.style.marginTop = i, o
                    }
                    c.apply(t, arguments)
                })
            }
            var u = !1;
            $("body").on("click", "a", function() {
                var e = $(this).attr("href");
                e && /#/.test(e) && (a.on("scroll", i), setTimeout(function() {
                    a.off("scroll", i)
                }, 500))
            }), a.on("hashchange", i), $(function() {
                setTimeout(i, 10), setTimeout(i, 100), setTimeout(i, 1e3)
            })
        }

        function t() {
            var e, t, i, r, o = performance.now ? performance.now.bind(performance) : Date.now.bind(Date),
                s = null,
                c = null,
                u = !1,
                l = StackExchange.helpers.DelayedReaction(function() {
                    s = null
                }, 100, {
                    "sliding": !0
                });
            a.on("keydown", function(n) {
                if (n.target !== document.body) return s = null, void 0;
                var d = n.which;
                return 32 > d || d > 34 ? (s = null, void 0) : (e = s = a.scrollTop(), t = 0, r = 0, u = !1, c = null, i = o(), l.trigger(), void 0)
            }), a.on("scroll", function() {
                if (null !== s) {
                    if (u) return a.scrollTop(c), void 0;
                    var d = o(),
                        f = a.scrollTop(),
                        p = d - i,
                        h = f - e,
                        g = h / p,
                        m = 0 > h ? -1 : 1;
                    null === c && (c = s + m * (a.height() - n - 20));
                    var v = g - t,
                        b = v / p,
                        y = b + (b - r);
                    if (0 > g * y) {
                        var w = -g / y,
                            k = f + w * (g + .5 * y * w),
                            x = c - k;
                        Math.abs(x) < 100 && (f + (g + .5 * y * p) * p - c) * m > -20 && (a.scrollTop(c), u = !0)
                    }
                    l.trigger(), e = f, i = d, t = g, r = b
                }
            })
        }
        var n = 0,
            i = 0,
            r = 0,
            o = !1,
            a = $(window);
        return {
            "setPaddingTop": function(a, s) {
                r = s || 0, n = a + r, i = a, o || (o = !0, e(), /^mac/i.test(navigator.platform) && !/firefox/i.test(navigator.userAgent) && t())
            },
            "getPaddingTop": function() {
                return n
            },
            "getPaddingTopMinimal": function() {
                return i
            },
            "getWindowScrollTopMinimal": function() {
                return a.scrollTop() - r
            },
            "ensureInitialized": function() {
                o || StackExchange.scrollPadding.setPaddingTop(0, 0)
            }
        }
    }(), StackExchange.responsive = function() {
        function e() {
            return a ? $("html").hasClass("html__unpinned-leftnav") ? l : u : null
        }

        function t() {
            if (!a) return "lg";
            var t = "lg";
            return c.matches ? t = "sm" : e().matches && (t = "md"), t
        }

        function n() {
            var e = d,
                n = t();
            n !== e && (d = n, f.forEach(function(t) {
                t(n, e)
            }))
        }

        function i(e) {
            f.push(e)
        }

        function r(e) {
            var t = f.indexOf(e);
            t >= 0 && f.splice(t, 1)
        }

        function o(e) {
            for (var t = document.querySelectorAll("*[data-can-be][data-is-here-when~='" + e + "']"), n = 0; n < t.length; n++) {
                var i = t[n],
                    r = i.dataset.canBe,
                    o = document.getElementById(r);
                if (o) {
                    i.childNodes.length && StackExchange.debug.log("can-be target for id " + r + " at size '" + e + "' is not empty");
                    var a = Array.prototype.slice.call(o.childNodes);
                    a.forEach(function(e) {
                        p.indexOf(e.nodeType) >= 0 && i.appendChild(e)
                    }), o.removeAttribute("id"), o.dataset.canBe = r, delete i.dataset.canBe, i.id = r
                } else StackExchange.debug.log("no element with id " + r + " found")
            }
        }
        var a = $("html").hasClass("html__responsive"),
            s = {
                "S": 640,
                "L": 980,
                "L_UNPINNED": 816
            };
        if (a) {
            var c = matchMedia("(max-width: " + s.S + "px)"),
                u = matchMedia("(max-width: " + s.L + "px)"),
                l = matchMedia("(max-width: " + s.L_UNPINNED + "px)");
            c.addListener(n), u.addListener(n), l.addListener(n)
        }
        var d = null,
            f = [],
            p = [Node.ELEMENT_NODE, Node.TEXT_NODE, Node.COMMENT_NODE];
        return i(o), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : setTimeout(n, 0), {
            "addBreakpointListener": i,
            "removeBreakpointListener": r,
            "currentRange": function() {
                return d || t()
            },
            "forceCheck": function() {
                var e = d;
                n(), e === d && o(e)
            }
        }
    }(), jQuery.cookie = function(e, t, n) {
        if ("undefined" == typeof t) {
            var i = null;
            if (document.cookie && "" !== document.cookie)
                for (var r = document.cookie.split(";"), o = 0; o < r.length; o++) {
                    var a = jQuery.trim(r[o]);
                    if (a.substring(0, e.length + 1) === e + "=") {
                        i = decodeURIComponent(a.substring(e.length + 1));
                        break
                    }
                }
            return i
        }
        n = n || {}, null === t && (t = "", n.expires = -1);
        var s = "";
        if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
            var c;
            if ("number" == typeof n.expires) {
                c = new Date;
                var u = 24 * n.expires * 60 * 60 * 1e3;
                c.setTime(c.getTime() + u)
            } else c = n.expires;
            s = "; expires=" + c.toUTCString()
        }
        var l = n.path ? "; path=" + n.path : "",
            d = n.domain ? "; domain=" + n.domain : "",
            f = n.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(t), s, l, d, f].join("")
    }, jQuery.expr[":"].regex = function(e, t, n) {
        var i = n[3].split(","),
            r = /^(data|css):/,
            o = {
                "method": i[0].match(r) ? i[0].split(":")[0] : "attr",
                "property": i.shift().replace(r, "")
            },
            a = "ig",
            s = new RegExp(i.join("").replace(/^\s+|\s+$/g, ""), a);
        return s.test(jQuery(e)[o.method](o.property))
    }, $.extend($.expr[":"], {
        "containsExact": function(e, t, n) {
            return $.trim(e.innerHTML.toLowerCase()) === n[3].toLowerCase()
        },
        "containsExactCase": function(e, t, n) {
            return $.trim(e.innerHTML) === n[3]
        },
        "containsRegex": function(e, t, n) {
            var i = /^\/((?:\\\/|[^\/])+)\/([mig]{0,3})$/,
                r = i.exec(n[3]);
            return RegExp(r[1], r[2]).test($.trim(e.innerHTML))
        }
    }),
    function(e) {
        e.fn.typeWatch = function(t) {
            function n(t, n) {
                var i = e(t.el).val();
                (i.length > r.captureLength && i.toUpperCase() !== t.text || n && i.length > r.captureLength) && (t.text = i.toUpperCase(), t.cb(i))
            }

            function i(t) {
                if ("TEXT" === t.type.toUpperCase() || "TEXTAREA" === t.nodeName.toUpperCase()) {
                    var i = {
                        "timer": null,
                        "text": e(t).val().toUpperCase(),
                        "cb": r.callback,
                        "el": t,
                        "wait": r.wait
                    };
                    r.highlight && e(t).focus(function() {
                        this.select()
                    });
                    var o = function(e) {
                        var t = i.wait,
                            r = !1;
                        13 === e.keyCode && "TEXT" === this.type.toUpperCase() && (t = 1, r = !0);
                        var o = function() {
                            n(i, r)
                        };
                        clearTimeout(i.timer), i.timer = setTimeout(o, t)
                    };
                    e(t).keydown(o).bind("paste", null, function(e) {
                        e.which || o(this)
                    }).bind("input", null, function(e) {
                        e.which || o(this)
                    })
                }
            }
            var r = e.extend({
                "wait": 750,
                "callback": function() {},
                "highlight": !0,
                "captureLength": 2
            }, t);
            return this.each(function() {
                i(this)
            })
        }
    }(jQuery),
    function(e) {
        function t(t) {
            var n;
            return t && t.constructor === Array && 3 === t.length ? t : (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(n[1]), parseInt(n[2]), parseInt(n[3])] : (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [2.55 * parseFloat(n[1]), 2.55 * parseFloat(n[2]), 2.55 * parseFloat(n[3])] : (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)] : (n = /rgba\(0, 0, 0, 0\)/.exec(t)) ? i.transparent : i[e.trim(t).toLowerCase()]
        }

        function n(n, i) {
            var r;
            do {
                if (r = e.css(n, i), "" !== r && "transparent" !== r || e.nodeName(n, "body")) break;
                i = "backgroundColor"
            } while (n = n.parentNode);
            return t(r)
        }
        e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function(i, r) {
            e.fx.step[r] = function(e) {
                e.colorInit || (e.start = n(e.elem, r), e.end = t(e.end), e.colorInit = !0), e.elem.style[r] = "rgb(" + [Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0]), 255), 0), Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1]), 255), 0), Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2]), 255), 0)].join(",") + ")"
            }
        });
        var i = {
            "transparent": [255, 255, 255]
        }
    }(jQuery), StackExchange.gps = function() {
        function e(e, t, n, i) {
            t = t || {};
            var r = null;
            StackExchange.options && StackExchange.options.user && (t.user_type = StackExchange.options.user.userType, r = StackExchange.options.user.ab);
            var o = {
                "evt": e,
                "properties": t,
                "now": (new Date).getTime()
            };
            r && (o.ab = r), StackExchange._gps_track.push(o), i && i()
        }
        return StackExchange._gps_track = [], window.location.href.indexOf("utm_") >= 0 && StackExchange.ready(function() {
            if (StackExchange.options && StackExchange.options.utm);
            else {
                var t = function(e) {
                        var t = new RegExp("[\\?&]utm_" + e + "=([^&#]*)").exec(window.location.href);
                        return t ? decodeURIComponent(t[1]) || void 0 : void 0
                    },
                    n = {
                        "source": t("source"),
                        "medium": t("medium") || "unknown",
                        "medium_s": t("medium") || "unknown",
                        "campaign": t("campaign"),
                        "content": t("content"),
                        "term": t("term")
                    };
                n.source && n.campaign && e("utm.view", n, !1), StackExchange.using("gps", function() {
                    StackExchange.gps.sendPending()
                })
            }
        }), {
            "track": e,
            "sendPending": function(e) {
                e && e()
            }
        }
    }();