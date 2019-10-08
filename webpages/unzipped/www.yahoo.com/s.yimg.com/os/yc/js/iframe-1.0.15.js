! function() {
    var s = /^https?\:\/\/([^\/\?]+\.)*yahoo.com/,
        p = "comments",
        m = window,
        e = m && m.document;

    function a(e) {
        if (!e) return !1;
        var n = e.getBoundingClientRect();
        return !(n.top > m.innerHeight - 100 || n.bottom < 100)
    }

    function n(e, n) {
        if (e && n && n.context && n.contextDisplayText && n.contextUrl && n.namespace)
            if (m.addEventListener) {
                var t = this,
                    o = n.device,
                    i = n.rapidKeys;
                t._config = n, t._data = {
                    context: n.context,
                    isExpanded: !1
                }, t._iframe = null, t._isDwellActive = !1, t._isInViewport = "smartphone" === o;
                var s = document.getElementById(e);
                if (s) {
                    var a = "";
                    if (i)
                        for (var r in i)
                            if (i.hasOwnProperty(r)) {
                                var c = "pct" === r ? p : i[r];
                                c && (a += r + ":" + c + ";")
                            }
                    var d = "https://www.yahoo.com/comments/?context=" + encodeURIComponent(n.context) + "&contextDisplayText=" + encodeURIComponent(n.contextDisplayText) + "&contextUrl=" + encodeURIComponent(n.contextUrl) + "&namespace=" + encodeURIComponent(n.namespace) + "&expanded=" + (n.expanded ? 1 : 0) + (n.site ? "&site=" + encodeURIComponent(n.site) : "") + (n.region ? "&region=" + encodeURIComponent(n.region) : "") + (n.lang ? "&lang=" + encodeURIComponent(n.lang) : "") + (n.apptype ? "&apptype=" + encodeURIComponent(n.apptype) : "") + (n.prid ? "&prid=" + encodeURIComponent(n.prid) : "") + (n.spaceid ? "&spaceid=" + encodeURIComponent(n.spaceid) : "") + (n.bucket ? "&test_id=" + encodeURIComponent(n.bucket) : "") + (a ? "&rapidKeys=" + encodeURIComponent(a) : ""),
                        l = document.createElement("iframe");
                    l.id = e + "-iframe", l.frameBorder = 0, l.style.height = s.style.height = "0", l.style.width = s.style.width = "100%", "smartphone" === n.device && (s.style.boxShadow = "0 0 8px 0 rgba(0,0,0,.12)", s.style.position = "fixed", s.style.bottom = "0", s.style.left = "0", s.style.right = "0", s.style.zIndex = "12", l.style.height = "1px"), l.src = d, s.appendChild(l), t._iframe = l, t._onPostMessage = t._onPostMessage.bind(t), m.addEventListener("message", t._onPostMessage), t._onWindowBlur = t._onWindowBlur.bind(t), m.addEventListener("blur", t._onWindowBlur), t._onWindowFocus = t._onWindowFocus.bind(t), m.addEventListener("focus", t._onWindowFocus), t._onWindowScroll = t._onWindowScroll.bind(t), m.addEventListener("scroll", t._onWindowScroll)
                } else console.warn("CanvassComments - Container element not found")
            } else console.warn("CanvassComments - Browser not supported");
        else console.warn("CanvassComments - Missing required params: id, config, context, contextDisplayText, contextUrl, namespace")
    }
    n.prototype = {
        collapse: function() {
            var e = this._iframe;
            e && (this._fireDwell(!1), e.contentWindow.postMessage("canvass:collapse", "*"))
        },
        destroy: function() {
            var e = this,
                n = e._iframe;
            n && (m.removeEventListener("message", e._onPostMessage), m.removeEventListener("blur", e._onWindowBlur), m.removeEventListener("focus", e._onWindowFocus), m.removeEventListener("scroll", e._onWindowScroll), n.parentNode && n.parentNode.removeChild(n), e._config = {}, e._iframe = null)
        },
        expand: function() {
            var e = this._iframe;
            e && e.contentWindow && (this._fireDwell(!0), e.contentWindow.postMessage("canvass:expand", "*"))
        },
        getCount: function() {
            return this._data.count
        },
        _fireEvents: function(e) {
            var n = this,
                t = n._iframe,
                o = n._data || {},
                i = n._config;
            o.initialized ? o.count !== e.count && i.onCountChanged && i.onCountChanged(e) : (i.onInitialized && i.onInitialized(e), "smartphone" !== i.device && a(t) && t.contentWindow.postMessage("canvass:enterViewport", "*")), o.initialized && o.isExpanded !== e.isExpanded && (e.isExpanded ? (i.onExpanded && i.onExpanded(e), t.contentWindow.focus()) : (i.onCollapsed && i.onCollapsed(e), m.focus()))
        },
        _onPostMessage: function(e) {
            var n = this,
                t = e && e.data,
                o = n._iframe;
            if (o && o.parentNode && e.origin.match(s) && (t = function(e) {
                    if ("string" != typeof e || "{" !== e[0]) return null;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                }(t)) && t.isCanvass && t.context === n._data.context) {
                var i = t.height;
                "number" == typeof i && (i += "px", t.height = i), i && (t.initialized && n._fireEvents(t), n._data = t, o.parentNode.style.height = i, o.style.height = i), t.loginUrl && t.loginUrl.match(s) && (m.location.href = t.loginUrl)
            }
        },
        _fireDwell: function(e) {
            var n = this,
                t = n._config.rapid,
                o = n._config.rapidKeys;
            if (t && o && n._isDwellActive !== e) {
                var i = e ? p : o.pct;
                n._isDwellActive = e, t.beaconClick("rapidDwell", "", 0, {}, "", function() {
                    t.setRapidAttribute({
                        keys: {
                            pct: i
                        }
                    }), t.beaconClick("rapidDwell", "", 0, {}, "", null, {
                        dwell: "start"
                    })
                }, {
                    dwell: "stop"
                })
            }
        },
        _onWindowBlur: function() {
            e && e.activeElement === this._iframe && this._fireDwell(!0)
        },
        _onWindowFocus: function() {
            this._fireDwell(!1)
        },
        _onWindowScroll: function() {
            var t = this;
            "smartphone" !== t._config.device && (t._scrollTimer && clearTimeout(t._scrollTimer), t._scrollTimer = setTimeout(function() {
                var e = t._iframe;
                if (e && e.contentWindow) {
                    var n = a(e);
                    t._isDwellActive && !n && m.focus(), t._isInViewport !== n && (e.contentWindow.postMessage(n ? "canvass:enterViewport" : "canvass:exitViewport", "*"), t._isInViewport = n)
                }
            }, 50))
        }
    }, void 0 !== m && (m.YAHOO = m.YAHOO || {}, m.YAHOO.CanvassComments = n)
}();