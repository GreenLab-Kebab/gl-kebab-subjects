define("wiseindex/lib/sf/activity", function() {
    function a(a, c) {
        var v = this,
            h = $.Deferred(),
            c = c.routeScope,
            w = $.Deferred();
        return require([v._scopeList.view], function(a) {
            v._view = new a, w.resolve()
        }), $.when(w).then(y(v._scopeList.create, v, [c, v._view])).then(function() {
            return v._view.render(), v._view.create(c)
        }).always(function() {
            h.resolve()
        }), h.promise()
    }

    function c(a, c) {
        var v = this,
            h = $.Deferred(),
            c = c.routeScope;
        return $.when(y(v._scopeList.start, v, [c, v._view])).then(function() {
            return v._view.start(c)
        }).always(function() {
            h.resolve()
        }), h.promise()
    }

    function v(a, c) {
        var v = this,
            h = $.Deferred(),
            c = c.routeScope;
        return $.when(y(v._scopeList.stop, v, [c, v._view])).then(function() {
            return v._view.stop(c)
        }).always(function() {
            h.resolve()
        }), h.promise()
    }

    function h(a, c) {
        var v = this,
            h = $.Deferred(),
            c = c.routeScope;
        return $.when(y(v._scopeList.destroy, v, [c, v._view])).then(function() {
            return v._view.destroy(c)
        }).always(function() {
            v._view.options.holdView || (v._view = null), h.resolve()
        }), h.promise()
    }

    function y(a, c, v) {
        return a.apply(c, v)
    }

    function w(a, c) {
        var v = this;
        v._scopeList[a] = c
    }
    var b = function() {
        var a = this;
        B.log, a._scopeList = {
            create: function() {},
            start: function() {},
            stop: function() {},
            destroy: function() {},
            view: "lib/sf/view"
        }
    };
    return b.prototype = {
        constructor: b,
        on: w,
        create: a,
        start: c,
        stop: v,
        destroy: h,
        change: function() {},
        resume: function() {}
    }, b
}), define("wiseindex/lib/sf/route", function() {
    var a = function() {
            function a(a, c) {
                H = "virtual", I.routeStatus = {
                    action: "push",
                    type: "virtual"
                };
                var v = a;
                if (v)
                    if ("base" == a)
                        for (var i in k) O.remove(k[i]);
                    else O.set(a, c)
            }

            function c() {
                H = "virtual", I.routeStatus = {
                    action: "back",
                    type: "virtual"
                }, history.back()
            }

            function v() {}

            function h(a, c) {
                var v = {};
                "function" == typeof c && (v.doActivity = c), "object" == typeof c && (v.doActivity = c["do"], v.beforeActivity = c.before, v.afterActivity = c.after, v.destroy = c.destroy, v.ready = c.ready), C.regist(a, v)
            }

            function y(a) {
                C.remove(a)
            }

            function w(a) {
                var c = a.match(/#(.*)$/),
                    v = c ? c[0] : "";
                return v = v.slice(1), v || ""
            }

            function b(a) {
                var c, v, h = a.split("&"),
                    y = {};
                for (var i in h) c = h[i], "" != c && (v = c.split("="), 2 == v.length && (y[v[0]] = decodeURIComponent(v[1])), 3 == v.length && (y[v[0]] = decodeURIComponent(v[1]) + "=" + decodeURIComponent(v[2])));
                return y
            }

            function A(e, a, c, v) {
                var h, y, w, b;
                v.forEach(function(a) {
                    var c = a.type;
                    ("removed" == c || "modified" == c) && (y = a.key, b = a.oldValue), ("added" == c || "modified" == c) && (h = a.key, w = a.newValue)
                }), I.last = {
                    path: y || "base",
                    params: b
                }, I.path = h || "base", I.params = w, C.run(I.path, I).then(function() {
                    H = "natural", I.routeStatus = {
                        action: "history",
                        type: "natural"
                    }
                }), D.path = I.path, D.params = I.params
            }

            function g() {
                require(["wiseindex/lib/sf/controller"], function(a) {
                    C = a
                })
            }

            function S() {
                if ((O = B.hash) && L !== !0) {
                    O.on("change", A);
                    var a = b(w(location.href)),
                        c = {
                            last: {
                                path: "",
                                params: ""
                            },
                            path: "",
                            params: ""
                        };
                    for (var i in a) c.params = a[i], c.path = i, C.run(i, c).then(function() {
                        H = "natural"
                    }), D.path = i, D.params = a[i];
                    L = !0
                }
            }

            function _() {
                var a = b(w(location.href)),
                    c = "#page";
                for (var i in a)
                    if ("iact" == i && !$("#activitystyle")) {
                        var v = document.createElement("style");
                        v.id = "activitystyle", v.innerHTML = c + "{width:100%;position:absolute;top:-99999px;visibility:hidden;}", document.head.appendChild(v);
                        break
                    }
            }
            var O, C, D = {},
                L = !1,
                k = ["iact"],
                H = "natural",
                I = {
                    last: {},
                    path: "",
                    params: null,
                    routeStatus: {
                        action: "history",
                        type: "natural"
                    }
                };
            return _(), {
                push: a,
                replace: v,
                on: h,
                init: g,
                start: S,
                back: c,
                current: D,
                remove: y
            }
        },
        c = new a;
    return window.B.route || (window.B.route = c), c
}), define("wiseindex/lib/sf/controller", function() {
    function a() {
        function a() {
            return deferred = $.Deferred(), deferred.resolve(), $.each(v, function() {
                var a = this;
                deferred = deferred.then(function() {
                    return a()
                })
            }), v = [], deferred
        }

        function c(a, c) {
            var h = 2 in arguments && Array.prototype.slice.call(arguments, 2);
            "function" == typeof a && v.push(function() {
                return a.apply(c, h ? h : [])
            })
        }
        var v = [];
        return {
            push: c,
            excute: a
        }
    }

    function c(a, c) {
        if (h.hasOwnProperty(a)) {
            var v = h[a];
            v.destroy(c)
        }
    }
    var v = {},
        h = {};
    v.regist = function(a, c) {
        var v = this.create(c);
        h[a] = v
    }, v.create = function(a) {
        return y(a)
    }, v.run = function(v, y) {
        proxyList = [];
        var w = new a;
        if (h.hasOwnProperty(v)) {
            var b = h[v];
            w.push(b.beforeActivity, b, y), w.push(b.doActivity, b, y), w.push(b.afterActivity, b, y)
        }
        return h.hasOwnProperty(v) && v !== (y.last && y.last.path) && w.push(c, this, y.last.path, y), h.hasOwnProperty(v) && w.push(b.ready, b, y), w.excute()
    }, v.remove = function(a) {
        h.hasOwnProperty(a) && delete h[a]
    };
    var y = function(a) {
        var c = {};
        return c.doActivity = a.doActivity || function() {}, c.beforeActivity = a.beforeActivity || function() {}, c.afterActivity = a.afterActivity || function() {}, c.destroy = a.destroy || function() {}, c.ready = a.ready || function() {}, c
    };
    return v
}), define("wiseindex/lib/sf/activityController", ["wiseindex/lib/sf/controller", "wiseindex/lib/sf/route"], function(a, c) {
    function v() {
        var a = this;
        a.swtichTag = "iact"
    }

    function h() {
        var a = location.href.match(/#(.*)$/),
            c = a ? a[0] : "";
        return 0 === c.indexOf("#%7C") && (c = c.replace(/%7C/, "|")), c || ""
    }

    function y(a, c, v, h) {
        var y = [],
            A = $.Deferred();
        return a && y.push(a.name), c && y.push(c.name), y.length > 0 && (_ = {
            from: {
                path: h.last ? h.last.path : null,
                params: h.last ? w(h.last.params) : null
            },
            to: {
                path: h.path,
                params: w(h.params)
            },
            status: h.routeStatus
        }, require(y, function(h, y) {
            var w = h === y;
            y || (y = h);
            var $ = {
                    routeState: S,
                    routeScope: _
                },
                g = new b;
            v ? (a && g.push(h.start, h, a.state, $), a && g.push(h.resume, h, a.state, $)) : w ? (c && g.push(y.destroy, y, c.state, $), a && g.push(h.create, h, a.state, $)) : (c && g.push(y.stop, y, c.state, $), a && g.push(h.create, h, a.state, $), c && g.push(y.destroy, y, c.state, $)), g.push(function() {
                S = "natural", _ = {}
            }, this), g.excute(A)
        })), A
    }

    function w(a) {
        var c = /([^=]+)=?(.*)/,
            v = a ? a.match(c) : null;
        if (v && v[1]) {
            var h = {};
            return h.name = v[1].replace(/:/g, "").replace(/\/\/+/g, "/"), h.state = v[2] ? $.parseJSON(decodeURIComponent(v[2])) : void 0, h
        }
        return !1
    }

    function b() {
        function a(a) {
            return v = $.Deferred(), v.resolve(), $.each(h, function() {
                var a = this;
                v = v.then(function() {
                    return a()
                })
            }), h = [], v.then(function() {
                a.resolve()
            })
        }

        function c(a, c) {
            var v = 2 in arguments && Array.prototype.slice.call(arguments, 2);
            "function" == typeof a && h.push(function() {
                return a.apply(c, v ? v : [])
            })
        }
        var v, h = [];
        return {
            push: c,
            excute: a
        }
    }
    var A, g = !1,
        S = "natural",
        _ = {};
    v.prototype = {
        constructor: v,
        beforeActivity: function(a) {
            a && a.last && "base" === a.last.path && (A = pageYOffset)
        },
        doActivity: function(a) {
            var c, v, h = a.last.params,
                b = a.params;
            return v = w(b), a.last.path === a.path && (c = w(h)), y(v, c, !1, a)
        },
        destroy: function(a) {
            var c = a.last ? w(a.last.params) : null;
            y(null, c, !1, a)
        },
        ready: function(a) {
            var c = w(a.params);
            y(c, null, !0, a)
        },
        pushState: function(a) {
            if (S = "virtual", a = a || {}, a.silent === !0 ? !0 : !1, a.activity)
                if ("base" === a.activity) c.push("base");
                else {
                    var v = a.state;
                    a.activity.indexOf("activity/") < 0 && (a.activity = "activity/" + a.activity), v = v ? a.activity + "=" + encodeURIComponent(JSON.stringify(a.state)) : a.activity, c.push("iact", v)
                }
        },
        replaceState: function(a) {
            function c() {
                var c = a.state;
                c = c ? a.activity + "=" + JSON.stringify(a.state) : a.activity;
                var v = "iact=" + encodeURIComponent(c);
                return -1 === location.href.indexOf("#") && (v = "#" + v), v
            }

            function v(a) {
                HASH.mute = !0, window.location.replace(a), setTimeout(function() {
                    HASH.mute = !1
                }, 100)
            }
            if (a = a || {}, a.silent === !0 ? !0 : !1, a.activity) {
                var y = h(),
                    w = y.match(/(.*?)(iact)\=(.*?)(%3D|$)(.*?)(\&|$)(.*?)$/),
                    b = actAfter = "";
                if (null == w) {
                    if ("base" === a.activity) return;
                    v(window.location.href + c())
                } else {
                    var A = location.protocol + "//" + location.host + location.pathname + location.search;
                    if (b = w[1], actAfter = w[6] + w[7], "base" === a.activity) A += b + actAfter;
                    else {
                        if (c() === "iact=" + w[3] + "%3D" + w[5]) return;
                        A += b + c() + actAfter
                    }
                    v(A)
                }
            }
        },
        start: function() {
            if ((HASH = B.hash) && g !== !0) {
                var a = this;
                c.init(), c.on("iact", {
                    before: a.beforeActivity,
                    "do": a.doActivity,
                    ready: a.ready,
                    destroy: a.destroy
                }), c.on("base", {
                    "do": function() {
                        $("#page").show(), $("#activitystyle").remove()
                    },
                    ready: function() {
                        "undefined" != typeof A && scrollTo(0, A)
                    },
                    destroy: function() {
                        $("#page").hide()
                    }
                }), c.start(), g = !0
            }
        },
        back: function() {
            S = "virtual", c.back()
        }
    };
    var O = new v;
    return B.activity || (B.activity = O), O
});