define(function(require) {
    function a(a) {
        a || (a = {});
        var y;
        if (a.action && "jump_url" === a.action) y = b(a);
        else switch (a.app) {
            case "zbios":
                y = c(a);
                break;
            case "secr":
                y = h(a);
                break;
            default:
                y = c(a)
        }
        return y
    }

    function c(a) {
        var c = require("modules/invoke/invokebox"),
            h = {
                from: a.from || "",
                channel: a.channel || ""
            };
        if (a.noLite && (h.notUseIdm = !0), a.failUrl && (h.failUrl = a.failUrl, h.failCallback = a.failCallback && "function" == typeof a.failCallback ? a.failCallback : function() {
                window.location.href = a.failUrl
            }), "open_home" === a.action) h.iosScheme = "baiduboxapp://apppage?action=openPage&params=%7B%22pageid%22%3A%22homepage%22%7D", h.androidCommand = {
            mode: "0",
            intent: "intent:#Intent;action=com.baidu.searchbox.action.HOME;category=android.intent.category.DEFAULT;S.extra_target_tab=Feed;end",
            min_v: "16787968"
        };
        else if ("open_url" === a.action) h.iosScheme = "baiduboxapp://browse?url=" + encodeURIComponent(a.url) + "&opennewwindow=1&minver=3.8.0.0", h.androidCommand = {
            mode: "2",
            url: a.url,
            min_v: "25165824"
        };
        else if ("open_camera" === a.action) {
            var b = ["source_app=BROWSER", "referer=" + encodeURIComponent(location.href), "jsup={" + a.jsup || "}", "imageSearch_type=" + (a.searchType || "GENERAL").toUpperCase(), "cameraPosition=" + a.cameraPosition || 0].join("&"),
                y = ["#Intent", "launchFlags=0x20000", "component=com.baidu.searchbox.CodeScannerActivity", "S.referer=" + encodeURIComponent(location.href), "S.source_app=BROWSER", "S.imageSearch_type=" + (a.searchType || "GENERAL").toUpperCase(), "S.cameraPosition=" + a.cameraPosition || 0, "S.jsup={" + a.jsup || "}", "end"].join(";"),
                C = ["intent:#Intent;action=com.baidu.searchbox.plugin.action.INVOKE", "S.package_name=com.baidu.searchbox.godeye", "S.method_name=imageSearch", "S.params=" + JSON.stringify({
                    intent: y
                }), "end"].join(";");
            h.iosScheme = "baiduboxapp://imagesearch?caller=graph&args=" + encodeURIComponent(b), h.androidCommand = {
                mode: "1",
                intent: C
            }
        }
        var g = new c(h);
        return g
    }

    function h(a) {
        var c = require("wiseindex/lib/invoke/invokeSecr"),
            h = {
                zt: a.from || "",
                channel: a.channel || "",
                baiduid: B.cookie("BAIDUID") || "",
                logid: sSession.logid || ""
            };
        a.failUrl && (h.failUrl = a.failUrl, h.failCallback = a.failCallback && "function" == typeof a.failCallback ? a.failCallback : function() {
            window.location.href = a.failUrl
        }), "open_home" === a.action ? h.query = "" : "open_url" === a.action && (h.query = a.url);
        var b = new c(h);
        return b
    }

    function b(a) {
        function c() {
            this.status = "", this.readyCallbacks = [], this.init()
        }
        c.prototype = {
            constructor: c,
            init: function() {
                this.status = "ready", this.doReady()
            },
            open: function() {
                a.url && (window.location.href = a.url)
            },
            doReady: function() {
                var a = this.readyCallbacks.length;
                if (a) {
                    for (var i = 0; a > i; i++) this.readyCallbacks[i].call(this);
                    this.readyCallbacks = []
                }
            },
            ready: function(a) {
                var c = this;
                "function" == typeof a && ("ready" === c.status ? a.call(this) : c.readyCallbacks.push(a))
            }
        };
        var h = new c;
        return h
    }
    return a
});