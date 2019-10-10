define([], function() {
    var r = new(function() {
        var r = this;
        r.installed = !1, r.raw = "", r.major = -1, r.minor = -1, r.revision = -1, r.revisionStr = "";
        var n = [{
                name: "ShockwaveFlash.ShockwaveFlash.7",
                version: function(r) {
                    return e(r)
                }
            }, {
                name: "ShockwaveFlash.ShockwaveFlash.6",
                version: function(r) {
                    var n = "6,0,21";
                    try {
                        r.AllowScriptAccess = "always", n = e(r)
                    } catch (r) {}
                    return n
                }
            }, {
                name: "ShockwaveFlash.ShockwaveFlash",
                version: function(r) {
                    return e(r)
                }
            }],
            e = function(r) {
                var n = -1;
                try {
                    n = r.GetVariable("$version")
                } catch (r) {}
                return n
            },
            a = function(r) {
                var n = -1;
                try {
                    n = new ActiveXObject(r)
                } catch (r) {
                    n = {
                        activeXError: !0
                    }
                }
                return n
            },
            t = function(r) {
                var n = r.split(",");
                return {
                    raw: r,
                    major: parseInt(n[0].split(" ")[1], 10),
                    minor: parseInt(n[1], 10),
                    revision: parseInt(n[2], 10),
                    revisionStr: n[2]
                }
            },
            o = function(r) {
                var n = r.split(/ +/),
                    i = n[2].split(/\./),
                    e = n[3];
                return {
                    raw: r,
                    major: parseInt(i[0], 10),
                    minor: parseInt(i[1], 10),
                    revisionStr: e,
                    revision: s(e)
                }
            },
            s = function(n) {
                return parseInt(n.replace(/[a-zA-Z]/g, ""), 10) || r.revision
            };
        r.majorAtLeast = function(n) {
            return r.major >= n
        }, r.minorAtLeast = function(n) {
            return r.minor >= n
        }, r.revisionAtLeast = function(n) {
            return r.revision >= n
        }, r.versionAtLeast = function(n) {
            var e = [r.major, r.minor, r.revision],
                a = Math.min(e.length, arguments.length);
            for (i = 0; i < a; i++) {
                if (e[i] >= arguments[i]) {
                    if (i + 1 < a && e[i] == arguments[i]) continue;
                    return !0
                }
                return !1
            }
        }, r.FlashDetect = (function() {
            if (navigator.plugins && navigator.plugins.length > 0) {
                var i = "application/x-shockwave-flash",
                    e = navigator.mimeTypes;
                if (e && e[i] && e[i].enabledPlugin && e[i].enabledPlugin.description) {
                    var s = e[i].enabledPlugin.description,
                        v = o(s);
                    r.raw = v.raw, r.major = v.major, r.minor = v.minor, r.revisionStr = v.revisionStr, r.revision = v.revision, r.installed = !0
                }
            } else if (navigator.appVersion.indexOf("Mac") == -1 && window.execScript)
                for (var s = -1, c = 0; c < n.length && s == -1; c++) {
                    var l = a(n[c].name);
                    if (!l.activeXError && (r.installed = !0, s = n[c].version(l), s != -1)) {
                        var v = t(s);
                        r.raw = v.raw, r.major = v.major, r.minor = v.minor, r.revision = v.revision, r.revisionStr = v.revisionStr
                    }
                }
        })()
    });
    return r.JS_RELEASE = "1.0.4", r
}.bind(Object.create(null)));
//# sourceMappingURL=flash_detect.min.js-vflJbQ8bb.map