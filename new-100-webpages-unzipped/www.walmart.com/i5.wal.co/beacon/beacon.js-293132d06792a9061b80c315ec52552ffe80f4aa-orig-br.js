var _bcq = _bcq || [];
_bcq = {
    queue: _bcq,
    mappingQueue: [],
    isMappingsLoaded: false,
    mappingQueueProcessed: false,
    version: 2,
    push: function() {
        var b, a = arguments.length;
        for (b = 0; b < a; b++) {
            this.queue.push(arguments[b])
        }
    }
};
if (!Array.isArray) {
    Array.isArray = function(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }
}
if (!("indexOf" in Array.prototype)) {
    Array.prototype.indexOf = function(b, a) {
        if (a === undefined) {
            a = 0
        }
        if (a < 0) {
            a += this.length
        }
        if (a < 0) {
            a = 0
        }
        for (var c = this.length; a < c; a++) {
            if (a in this && this[a] === b) {
                return a
            }
        }
        return -1
    }
}
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
}(function(l) {
    l.options = l.options || {};
    l.options.start_time = l.options.start_time || new Date().getTime();
    l.options.global_context = l.options.global_context || "";
    l.options.mapping_identifier = l.options.mapping_identifier || "";
    l.options.autorun = l.options.hasOwnProperty("autorun") ? l.options.autorun : true;
    l.options.bh = l.options.bh || "";
    l.domain = l.domain || "";
    l.utils = l.utils || {};
    l.classes = l.classes || {};
    l.commands = l.commands || {};
    l.data = l.data || {};
    l.handlers = l.handlers || {};
    l.outboundDelay = l.outboundDelay || 200;
    l.utils.log = function(e) {};
    l.utils.urlSerialize = function(j) {
        var e, i = [];
        for (e in j) {
            if (j.hasOwnProperty(e)) {
                i.push(encodeURIComponent(e) + "=" + (typeof j[e] === "undefined" ? "" : encodeURIComponent(j[e])))
            }
        }
        return i.join("&")
    };
    l.utils.getPageViewId = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(j) {
            var i = Math.random() * 16 | 0,
                e = j === "x" ? i : (i & 3 | 8);
            return e.toString(16)
        })
    };
    l.utils.count = function(j) {
        var i = 0,
            e;
        for (e in j) {
            if (j.hasOwnProperty(e)) {
                ++i
            }
        }
        return i
    };
    l.utils.loadScript = function(e, q) {
        var p = document.getElementsByTagName("head")[0],
            i = document.createElement("script"),
            j = false;
        i.type = "text/javascript";
        i.src = e;
        i.async = "async";
        if (typeof q === "function") {
            if (i.addEventListener) {
                i.addEventListener("load", q, false)
            } else {
                if (i.readyState) {
                    i.onreadystatechange = q
                }
            }
        }
        p.appendChild(i)
    };
    l.utils.merge = function() {
        var j = 1,
            e;
        if (!arguments[0]) {
            return arguments[0]
        }
        for (j; j < arguments.length; j++) {
            for (e in arguments[j]) {
                if (arguments[j].hasOwnProperty(e)) {
                    arguments[0][e] = arguments[j][e]
                }
            }
        }
        return arguments[0]
    };
    (function() {
        var e, i;
        if (Array.isArray(l.queue)) {
            for (e = 0; e < l.queue.length; e++) {
                i = l.queue[e];
                if (Array.isArray(i) && i[0] && i[0] === "_setOptions") {
                    l.utils.merge(l.options, i[1])
                }
            }
        }
    })();
    l.page_view_id = l.page_view_id || l.utils.getPageViewId();
    var g, f, a, b, m, d = document.getElementsByTagName("script"),
        c, n = "_bcq_override_",
        h = "rum.js",
        o;
    for (g in d) {
        if (d[g].nodeType === 1 && typeof d[g].src === "string" && d[g].src.indexOf("beacon.js") !== -1) {
            a = d[g].src;
            break
        }
    }
    if (!l.options.bh && !a) {
        return
    }
    if (l.options.bh) {
        l.domain = "https://" + (l.options.bd ? l.options.bd : l.options.bh) + "/"
    } else {
        if (a) {
            l.domain = a.substring(0, a.indexOf("/beacon.js") + 1);
            o = (l.domain.indexOf(window.location.protocol) === -1) ? "" : window.location.protocol;
            l.options.bh = l.domain.substring(0, l.domain.length - 1).replace(o + "//", "");
            l.domain = "https://" + (l.options.bd ? l.options.bd : l.options.bh) + "/";
            b = a.substring(a.indexOf("?") + 1).split("&");
            for (f in b) {
                if (typeof b[f] === "string") {
                    m = b[f].split("=");
                    l.options[m[0]] = m[1]
                }
            }
        }
    }
    try {
        b = window && window.sessionStorage;
        for (f in b) {
            if (typeof f === "string" && f.indexOf(n) >= 0) {
                l.options[f.replace(n, "")] = sessionStorage[f]
            }
        }
        c = window.location.search.substring(1);
        b = (c.indexOf(n) >= 0) ? c.split("&") : [];
        for (f in b) {
            if (typeof b[f] === "string" && b[f].indexOf(n) >= 0) {
                m = b[f].split("=");
                l.options[m[0].replace(n, "")] = m[1];
                window.sessionStorage.setItem(m[0], m[1])
            }
        }
    } catch (k) {}
    if (!l.options.mode) {
        l.options.mode = "release"
    }
    l.options.domain = l.options.domain || l.domain;
    if (l.options.nossl) {
        l.domain = l.domain.replace("https://", "http://")
    }
    if (l.options.apiq) {
        l.apiq = []
    }
    if (l.options.loadNewRum) {
        h = "rum2.js"
    }
    if (l.options.mode === "debug") {
        l.utils.log = function(i) {
            try {
                if (typeof console !== "undefined" && typeof console.log !== "undefined") {
                    console.log(i)
                }
            } catch (j) {
                for (g = 0; g < arguments.length; ++g) {
                    window.log(arguments[g])
                }
            }
        };
        h = l.options.loadNewRum ? "rum2.debug.js" : "rum.debug.js"
    }
    l.utils.log("Analytics library running on debug mode.");
    h += "?" + l.utils.urlSerialize({
        mode: l.options.mode,
        bh: l.options.bh,
        bd: l.options.bd,
        pv_id: l.page_view_id
    });
    l.utils.loadScript(l.domain + h)
})(_bcq);