(window.webpackJsonp = window.webpackJsonp || []).push([
    ["vendors"], {
        "2mXy": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "render", function() {
                return z
            }), n.d(t, "hydrate", function() {
                return O
            }), n.d(t, "createElement", function() {
                return p
            }), n.d(t, "h", function() {
                return p
            }), n.d(t, "Fragment", function() {
                return v
            }), n.d(t, "createRef", function() {
                return _
            }), n.d(t, "Component", function() {
                return m
            }), n.d(t, "cloneElement", function() {
                return F
            }), n.d(t, "createContext", function() {
                return B
            }), n.d(t, "toChildArray", function() {
                return b
            }), n.d(t, "_unmount", function() {
                return S
            }), n.d(t, "options", function() {
                return r
            });
            var r, o, i, s, l, a = {},
                u = [],
                f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;

            function c(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function h(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function p(e, t, n) {
                var r, o, i, s, l = arguments;
                if (t = c({}, t), arguments.length > 3)
                    for (n = [n], r = 3; r < arguments.length; r++) n.push(l[r]);
                if (null != n && (t.children = n), null != e && null != e.defaultProps)
                    for (o in e.defaultProps) void 0 === t[o] && (t[o] = e.defaultProps[o]);
                return s = t.key, null != (i = t.ref) && delete t.ref, null != s && delete t.key, d(e, t, s, i)
            }

            function d(e, t, n, o) {
                var i = {
                    type: e,
                    props: t,
                    key: n,
                    ref: o,
                    __k: null,
                    __p: null,
                    __b: 0,
                    __e: null,
                    l: null,
                    __c: null,
                    constructor: void 0
                };
                return r.vnode && r.vnode(i), i
            }

            function _() {
                return {}
            }

            function v(e) {
                return e.children
            }

            function g(e) {
                if (null == e || "boolean" == typeof e) return null;
                if ("string" == typeof e || "number" == typeof e) return d(null, e, null, null);
                if (null != e.__e || null != e.__c) {
                    var t = d(e.type, e.props, e.key, null);
                    return t.__e = e.__e, t
                }
                return e
            }

            function m(e, t) {
                this.props = e, this.context = t
            }

            function y(e, t) {
                if (null == t) return e.__p ? y(e.__p, e.__p.__k.indexOf(e) + 1) : null;
                for (var n; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? y(e) : null
            }

            function C(e) {
                !e.__d && (e.__d = !0) && 1 === o.push(e) && (r.debounceRendering || i)(w)
            }

            function w() {
                var e;
                for (o.sort(function(e, t) {
                        return t.__v.__b - e.__v.__b
                    }); e = o.pop();) e.__d && e.forceUpdate(!1)
            }

            function E(e, t, n, r, o, i, s, l, f) {
                var c, p, d, _, v, m, C, w, E = t.__k || b(t.props.children, t.__k = [], g, !0),
                    A = n && n.__k || u,
                    M = A.length;
                for (l == a && (l = null != i ? i[0] : M ? y(n, 0) : null), p = 0; p < E.length; p++)
                    if (null != (c = E[p] = g(E[p]))) {
                        if (c.__p = t, c.__b = t.__b + 1, null === (_ = A[p]) || _ && c.key == _.key && c.type === _.type) A[p] = void 0;
                        else
                            for (d = 0; d < M; d++) {
                                if ((_ = A[d]) && c.key == _.key && c.type === _.type) {
                                    A[d] = void 0;
                                    break
                                }
                                _ = null
                            }
                        if (v = k(e, c, _ = _ || a, r, o, i, s, null, l, f), (d = c.ref) && _.ref != d && (w || (w = [])).push(d, c.__c || v, c), null != v) {
                            if (null == C && (C = v), null != c.l) v = c.l, c.l = null;
                            else if (i == _ || v != l || null == v.parentNode) e: if (null == l || l.parentNode !== e) e.appendChild(v);
                                else {
                                    for (m = l, d = 0;
                                        (m = m.nextSibling) && d < M; d += 2)
                                        if (m == v) break e;
                                    e.insertBefore(v, l)
                                }
                            l = v.nextSibling, "function" == typeof t.type && (t.l = v)
                        }
                    }
                if (t.__e = C, null != i && "function" != typeof t.type)
                    for (p = i.length; p--;) null != i[p] && h(i[p]);
                for (p = M; p--;) null != A[p] && S(A[p], A[p]);
                if (w)
                    for (p = 0; p < w.length; p++) R(w[p], w[++p], w[++p])
            }

            function b(e, t, n, r) {
                if (null == t && (t = []), null == e || "boolean" == typeof e) r && t.push(null);
                else if (Array.isArray(e))
                    for (var o = 0; o < e.length; o++) b(e[o], t, n, r);
                else t.push(n ? n(e) : e);
                return t
            }

            function A(e, t, n) {
                "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === f.test(t) ? n + "px" : n
            }

            function M(e, t, n, r, o) {
                var i, s, l, a, u;
                if ("key" === (t = o ? "className" === t ? "class" : t : "class" === t ? "className" : t) || "children" === t);
                else if ("style" === t)
                    if (i = e.style, "string" == typeof n) i.cssText = n;
                    else {
                        if ("string" == typeof r && (i.cssText = "", r = null), r)
                            for (s in r) n && s in n || A(i, s, "");
                        if (n)
                            for (l in n) r && n[l] === r[l] || A(i, l, n[l])
                    }
                else if ("o" === t[0] && "n" === t[1]) a = t !== (t = t.replace(/Capture$/, "")), u = t.toLowerCase(), t = (u in e ? u : t).slice(2), n ? (r || e.addEventListener(t, L, a), (e.u || (e.u = {}))[t] = n) : e.removeEventListener(t, L, a);
                else if ("list" !== t && "tagName" !== t && !o && t in e)
                    if (e.length && "value" == t)
                        for (t = e.length; t--;) e.options[t].selected = e.options[t].value == n;
                    else e[t] = null == n ? "" : n;
                else "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n ? e.removeAttribute(t) : e.setAttribute(t, n))
            }

            function L(e) {
                return this.u[e.type](r.event ? r.event(e) : e)
            }

            function k(e, t, n, o, i, s, l, a, u, f) {
                var h, p, d, _, y, C, w, A, M, L, k = t.type;
                if (void 0 !== t.constructor) return null;
                (h = r.__b) && h(t);
                try {
                    e: if ("function" == typeof k) {
                        if (A = t.props, M = (h = k.contextType) && o[h.__c], L = h ? M ? M.props.value : h.__p : o, n.__c ? w = (p = t.__c = n.__c).__p = p.__E : (k.prototype && k.prototype.render ? t.__c = p = new k(A, L) : (t.__c = p = new m(A, L), p.constructor = k, p.render = P), M && M.sub(p), p.props = A, p.state || (p.state = {}), p.context = L, p.__n = o, d = p.__d = !0, p.__h = []), null == p.__s && (p.__s = p.state), null != k.getDerivedStateFromProps && c(p.__s == p.state ? p.__s = c({}, p.__s) : p.__s, k.getDerivedStateFromProps(A, p.__s)), d) null == k.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && l.push(p);
                        else {
                            if (null == k.getDerivedStateFromProps && null == a && null != p.componentWillReceiveProps && p.componentWillReceiveProps(A, L), !a && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(A, p.__s, L)) {
                                p.props = A, p.state = p.__s, p.__d = !1, p.__v = t, t.__e = n.__e, t.__k = n.__k;
                                break e
                            }
                            null != p.componentWillUpdate && p.componentWillUpdate(A, p.__s, L)
                        }
                        for (_ = p.props, y = p.state, p.context = L, p.props = A, p.state = p.__s, (h = r.__r) && h(t), p.__d = !1, p.__v = t, p.__P = e, b(null != (h = p.render(p.props, p.state, p.context)) && h.type == v && null == h.key ? h.props.children : h, t.__k = [], g, !0), null != p.getChildContext && (o = c(c({}, o), p.getChildContext())), d || null == p.getSnapshotBeforeUpdate || (C = p.getSnapshotBeforeUpdate(_, y)), E(e, t, n, o, i, s, l, u, f), p.base = t.__e; h = p.__h.pop();) h.call(p);
                        d || null == _ || null == p.componentDidUpdate || p.componentDidUpdate(_, y, C), w && (p.__E = p.__p = null)
                    } else t.__e = x(n.__e, t, n, o, i, s, l, f);
                    (h = r.diffed) && h(t)
                }
                catch (e) {
                    r.__e(e, t, n)
                }
                return t.__e
            }

            function N(e, t) {
                for (var n; n = e.pop();) try {
                    n.componentDidMount()
                } catch (e) {
                    r.__e(e, n.__v)
                }
                r.__c && r.__c(t)
            }

            function x(e, t, n, r, o, i, s, l) {
                var f, c, h, p, d = n.props,
                    _ = t.props;
                if (o = "svg" === t.type || o, null == e && null != i)
                    for (f = 0; f < i.length; f++)
                        if (null != (c = i[f]) && (null === t.type ? 3 === c.nodeType : c.localName === t.type)) {
                            e = c, i[f] = null;
                            break
                        }
                if (null == e) {
                    if (null === t.type) return document.createTextNode(_);
                    e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type), i = null
                }
                return null === t.type ? d !== _ && (e.data = _) : t !== n && (null != i && (i = u.slice.call(e.childNodes)), h = (d = n.props || a).dangerouslySetInnerHTML, p = _.dangerouslySetInnerHTML, l || (p || h) && (p && h && p.__html == h.__html || (e.innerHTML = p && p.__html || "")), function(e, t, n, r, o) {
                    var i;
                    for (i in n) i in t || M(e, i, null, n[i], r);
                    for (i in t) o && "function" != typeof t[i] || "value" === i || "checked" === i || n[i] === t[i] || M(e, i, t[i], n[i], r)
                }(e, _, d, o, l), p || E(e, t, n, r, "foreignObject" !== t.type && o, i, s, a, l), l || ("value" in _ && void 0 !== _.value && _.value !== e.value && (e.value = null == _.value ? "" : _.value), "checked" in _ && void 0 !== _.checked && _.checked !== e.checked && (e.checked = _.checked))), e
            }

            function R(e, t, n) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (e) {
                    r.__e(e, n)
                }
            }

            function S(e, t, n) {
                var o, i, s;
                if (r.unmount && r.unmount(e), (o = e.ref) && R(o, null, t), n || "function" == typeof e.type || (n = null != (i = e.__e)), e.__e = e.l = null, null != (o = e.__c)) {
                    if (o.componentWillUnmount) try {
                        o.componentWillUnmount()
                    } catch (e) {
                        r.__e(e, t)
                    }
                    o.base = o.__P = null
                }
                if (o = e.__k)
                    for (s = 0; s < o.length; s++) o[s] && S(o[s], t, n);
                null != i && h(i)
            }

            function P(e, t, n) {
                return this.constructor(e, n)
            }

            function z(e, t, n) {
                var o, i, l;
                r.__p && r.__p(e, t), i = (o = n === s) ? null : n && n.__k || t.__k, e = p(v, null, [e]), l = [], k(t, o ? t.__k = e : (n || t).__k = e, i || a, a, void 0 !== t.ownerSVGElement, n && !o ? [n] : i ? null : u.slice.call(t.childNodes), l, !1, n || a, o), N(l, e)
            }

            function O(e, t) {
                z(e, t, s)
            }

            function F(e, t) {
                return t = c(c({}, e.props), t), arguments.length > 2 && (t.children = u.slice.call(arguments, 2)), d(e.type, t, t.key || e.key, t.ref || e.ref)
            }

            function B(e) {
                var t = {},
                    n = {
                        __c: "__cC" + l++,
                        __p: e,
                        Consumer: function(e, t) {
                            return e.children(t)
                        },
                        Provider: function(e) {
                            var r, o = this;
                            return this.getChildContext || (r = [], this.getChildContext = function() {
                                return t[n.__c] = o, t
                            }, this.shouldComponentUpdate = function(e) {
                                r.some(function(t) {
                                    t.__P && (t.context = e.value, C(t))
                                })
                            }, this.sub = function(e) {
                                r.push(e);
                                var t = e.componentWillUnmount;
                                e.componentWillUnmount = function() {
                                    r.splice(r.indexOf(e), 1), t && t.call(e)
                                }
                            }), e.children
                        }
                    };
                return n.Consumer.contextType = n, n
            }
            r = {}, m.prototype.setState = function(e, t) {
                var n = this.__s !== this.state && this.__s || (this.__s = c({}, this.state));
                ("function" != typeof e || (e = e(n, this.props))) && c(n, e), null != e && this.__v && (t && this.__h.push(t), C(this))
            }, m.prototype.forceUpdate = function(e) {
                var t, n, r, o = this.__v,
                    i = this.__v.__e,
                    s = this.__P;
                s && (t = !1 !== e, n = [], r = k(s, o, c({}, o), this.__n, void 0 !== s.ownerSVGElement, null, n, t, null == i ? y(o) : i), N(n, o), r != i && function e(t) {
                    var n, r;
                    if (null != (t = t.__p) && null != t.__c) {
                        for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                            if (null != (r = t.__k[n]) && null != r.__e) {
                                t.__e = t.__c.base = r.__e;
                                break
                            }
                        return e(t)
                    }
                }(o)), e && e()
            }, m.prototype.render = v, o = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, r.__e = function(e, t, n) {
                for (var r; t = t.__p;)
                    if ((r = t.__c) && !r.__p) try {
                        if (r.constructor && null != r.constructor.getDerivedStateFromError) r.setState(r.constructor.getDerivedStateFromError(e));
                        else {
                            if (null == r.componentDidCatch) continue;
                            r.componentDidCatch(e)
                        }
                        return C(r.__E = r)
                    } catch (t) {
                        e = t
                    }
                throw e
            }, s = a, l = 0
        },
        "4O8T": function(e, t, n) {
            var r;
            ! function(t) {
                "use strict";

                function o() {}
                var i = o.prototype,
                    s = t.EventEmitter;

                function l(e, t) {
                    for (var n = e.length; n--;)
                        if (e[n].listener === t) return n;
                    return -1
                }

                function a(e) {
                    return function() {
                        return this[e].apply(this, arguments)
                    }
                }
                i.getListeners = function(e) {
                    var t, n, r = this._getEvents();
                    if (e instanceof RegExp)
                        for (n in t = {}, r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
                    else t = r[e] || (r[e] = []);
                    return t
                }, i.flattenListeners = function(e) {
                    var t, n = [];
                    for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                    return n
                }, i.getListenersAsObject = function(e) {
                    var t, n = this.getListeners(e);
                    return n instanceof Array && ((t = {})[e] = n), t || n
                }, i.addListener = function(e, t) {
                    if (! function e(t) {
                            return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && e(t.listener)
                        }(t)) throw new TypeError("listener must be a function");
                    var n, r = this.getListenersAsObject(e),
                        o = "object" == typeof t;
                    for (n in r) r.hasOwnProperty(n) && -1 === l(r[n], t) && r[n].push(o ? t : {
                        listener: t,
                        once: !1
                    });
                    return this
                }, i.on = a("addListener"), i.addOnceListener = function(e, t) {
                    return this.addListener(e, {
                        listener: t,
                        once: !0
                    })
                }, i.once = a("addOnceListener"), i.defineEvent = function(e) {
                    return this.getListeners(e), this
                }, i.defineEvents = function(e) {
                    for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                    return this
                }, i.removeListener = function(e, t) {
                    var n, r, o = this.getListenersAsObject(e);
                    for (r in o) o.hasOwnProperty(r) && -1 !== (n = l(o[r], t)) && o[r].splice(n, 1);
                    return this
                }, i.off = a("removeListener"), i.addListeners = function(e, t) {
                    return this.manipulateListeners(!1, e, t)
                }, i.removeListeners = function(e, t) {
                    return this.manipulateListeners(!0, e, t)
                }, i.manipulateListeners = function(e, t, n) {
                    var r, o, i = e ? this.removeListener : this.addListener,
                        s = e ? this.removeListeners : this.addListeners;
                    if ("object" != typeof t || t instanceof RegExp)
                        for (r = n.length; r--;) i.call(this, t, n[r]);
                    else
                        for (r in t) t.hasOwnProperty(r) && (o = t[r]) && ("function" == typeof o ? i.call(this, r, o) : s.call(this, r, o));
                    return this
                }, i.removeEvent = function(e) {
                    var t, n = typeof e,
                        r = this._getEvents();
                    if ("string" === n) delete r[e];
                    else if (e instanceof RegExp)
                        for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
                    else delete this._events;
                    return this
                }, i.removeAllListeners = a("removeEvent"), i.emitEvent = function(e, t) {
                    var n, r, o, i, s = this.getListenersAsObject(e);
                    for (i in s)
                        if (s.hasOwnProperty(i))
                            for (n = s[i].slice(0), o = 0; o < n.length; o++) !0 === (r = n[o]).once && this.removeListener(e, r.listener), r.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, r.listener);
                    return this
                }, i.trigger = a("emitEvent"), i.emit = function(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return this.emitEvent(e, t)
                }, i.setOnceReturnValue = function(e) {
                    return this._onceReturnValue = e, this
                }, i._getOnceReturnValue = function() {
                    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                }, i._getEvents = function() {
                    return this._events || (this._events = {})
                }, o.noConflict = function() {
                    return t.EventEmitter = s, o
                }, void 0 === (r = function() {
                    return o
                }.call(t, n, t, e)) || (e.exports = r)
            }("undefined" != typeof window ? window : this || {})
        },
        OmnB: function(e, t) {
            ! function(t) {
                var n = [],
                    r = void 0 !== t && !t.AndroidBridge && !t.webkit,
                    o = r ? "message" : "VKWebAppEvent";
                void 0 !== t && (t.CustomEvent || function() {
                    function e(e, t) {
                        t = t || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0
                        };
                        var n = document.createEvent("CustomEvent");
                        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                    }
                    e.prototype = t.Event.prototype, t.CustomEvent = e
                }(), t.addEventListener(o, function() {
                    var e = Array.prototype.slice.call(arguments),
                        t = n.slice();
                    r ? t.forEach(function(t) {
                        t({
                            detail: e[0].data
                        })
                    }) : t.forEach(function(t) {
                        t.apply(null, e)
                    })
                })), e.exports = {
                    send: function(e, n) {
                        n || (n = {});
                        var r = void 0 !== t,
                            o = r && t.AndroidBridge,
                            i = r && t.webkit && t.webkit.messageHandlers,
                            s = !o && !i;
                        o && "function" == typeof o[e] && o[e](JSON.stringify(n)), i && i[e] && "function" == typeof i[e].postMessage && i[e].postMessage(n), s && parent.postMessage({
                            handler: e,
                            params: n,
                            type: "vk-connect"
                        }, "*")
                    },
                    subscribe: function(e) {
                        n.push(e)
                    },
                    unsubscribe: function(e) {
                        var t = n.indexOf(e);
                        t > -1 && n.splice(t, 1)
                    },
                    supports: function(e) {
                        var n = void 0 !== t,
                            r = n && t.AndroidBridge,
                            o = n && t.webkit && t.webkit.messageHandlers;
                        return !(!r || "function" != typeof r[e]) || (!(!o || !o[e] || "function" != typeof o[e].postMessage) || !(o || r || !~["VKWebAppGetAuthToken", "VKWebAppCallAPIMethod", "VKWebAppGetGeodata", "VKWebAppGetUserInfo", "VKWebAppGetPhoneNumber", "VKWebAppGetClientVersion", "VKWebAppOpenPayForm", "VKWebAppShare", "VKWebAppAllowNotifications", "VKWebAppDenyNotifications", "VKWebAppShowWallPostBox", "VKWebAppGetEmail", "VKWebAppAllowMessagesFromGroup", "VKWebAppJoinGroup", "VKWebAppOpenApp", "VKWebAppSetLocation", "VKWebAppScroll", "VKWebAppResizeWindow"].indexOf(e)))
                    }
                }
            }(window)
        },
        gvr7: function(e, t) {
            e.exports = function(e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value;
                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                    var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
                } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var r = window.getSelection(),
                        o = document.createRange();
                    o.selectNodeContents(e), r.removeAllRanges(), r.addRange(o), t = r.toString()
                }
                return t
            }
        },
        wZQE: function(e, t, n) {
            e.exports = function() {
                "use strict";
                var e = function() {
                        return (e = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }).apply(this, arguments)
                    },
                    t = function(e, t, n, r, o) {
                        if (e < 7 && t < 7) return !1;
                        if (e >= n - 7 && t < 7) return !1;
                        if (e < 7 && t >= n - 7) return !1;
                        if (o) {
                            var i = 9;
                            n <= 25 && i--;
                            var s = (n - 14 - i) / 2 - 1;
                            return n <= 25 && s++, !(e > 7 + s && e < n - 7 - s - 1 && t > 7 + s && t < n - 7 - s - 1) && 0 <= e && e < n && 0 <= t && t < n && r[t][e]
                        }
                        return r[t] && r[t][e]
                    },
                    n = function(e, n, r, o, i) {
                        return void 0 === i && (i = !0), {
                            l: t(e - 1, n, r, o, i),
                            r: t(e + 1, n, r, o, i),
                            t: t(e, n - 1, r, o, i),
                            b: t(e, n + 1, r, o, i),
                            current: t(e, n, r, o, i)
                        }
                    },
                    r = function(e, r) {
                        if ("number" != typeof r.qrSize) throw new Error("Size should be a number");
                        if ("string" != typeof r.className) throw new Error("Classname should be a string");
                        for (var o = 84.7776815, i = [], s = 0, l = 0, a = 0, u = 0, f = 0; f < e.size; f++) {
                            s = 0;
                            for (var c = 0; c < e.size; c++) {
                                a = c + s, s += 96, u = f + l;
                                var h, p = n(c, f, e.size, e.modules, r.isShowLogo),
                                    d = "";
                                p.current ? (d = !(d = d || p.l || p.r || p.t || p.b ? "" : "empty") && p.l && p.r || p.t && p.b ? "rect" : "") || (d += p.l ? "l" : p.r ? "r" : "", (d += p.t ? "t" : p.b ? "b" : "") || (d = "empty")) : d = !(d = !(d = !(d = !d && p.l && p.t && t(c - 1, f - 1, e.size, e.modules, r.isShowLogo) ? "n_lt" : "") && p.l && p.b && t(c - 1, f + 1, e.size, e.modules, r.isShowLogo) ? "n_lb" : "") && p.r && p.t && t(c + 1, f - 1, e.size, e.modules, r.isShowLogo) ? "n_rt" : "") && p.r && p.b && t(c + 1, f + 1, e.size, e.modules, r.isShowLogo) ? "n_rb" : "", d && (h = '<use xlink:href="#' + d + "-" + r.suffix + '"/>', i.push('<g transform="translate(' + a + "," + u + ')">' + h + "</g>"))
                            }
                            l += 96
                        }
                        var _ = "",
                            v = (e.size - 21) / 2 * 96 + 672 - 10;
                        e.size <= 25 && (_ = "scale(0.85)", v += 50);
                        var g = 96 * (e.size - 7);
                        i.push('<use fill-rule="evenodd" transform="translate(0,0)" xlink:href="#point-' + r.suffix + '"/>'), i.push('<use fill-rule="evenodd" transform="translate(' + g + ',0)" xlink:href="#point-' + r.suffix + '"/>'), i.push('<use fill-rule="evenodd" transform="translate(0,' + g + ')" xlink:href="#point-' + r.suffix + '"/>'), r.isShowLogo && (r.logoData ? i.push('\n        <image \n          preserveAspectRatio="xMidYMid slice" clip-path="url(#logo-mask-' + r.suffix + ')"\n          style="width: 750px; height: 750px;" width="750" height="750" \n          transform="translate(' + v + "," + v + ") " + _ + '" \n          xlink:href="' + r.logoData + '" \n        />\n      ') : i.push('\n        <use style="width: 750px; height: 750px;" width="750" height="750" \n          fill="none" \n          fill-rule="evenodd" \n          transform="translate(' + v + "," + v + ") " + _ + '" xlink:href="#vk_logo-' + r.suffix + '"\n        />\n      '));
                        var m = 99 * e.size,
                            y = "",
                            C = "translate(0,0)";
                        if (r.isShowBackground) {
                            var w = (r.qrSize - 40) / r.qrSize,
                                E = m / r.qrSize * 21;
                            y = '\n      <rect \n        x="0" \n        width="' + m + '" \n        height="' + m + '" \n        rx="' + Math.ceil(m / (r.qrSize / 36)) + '" \n        fill="' + r.backgroundColor + '"\n      />', C = "translate(" + E + ", " + E + ") scale(" + w + ")"
                        }
                        var b = "M0,0 L66,0 C" + o + ",-3.44940413e-15 100,15.2223185 100,34 L100,66 C100," + o + " " + o + ",100 66,100 L0,100 L0,0 Z",
                            A = "M0,0 L100,0 L100,66 C100," + o + " " + o + ",100 66,100 L0,100 L0,0 Z";
                        return '\n  <svg \n    version="1.1" \n    viewBox="0 0 ' + m + " " + m + '" \n    width="' + r.qrSize + 'px" \n    height="' + r.qrSize + 'px"\n    ' + (r.className ? 'class="' + r.className + '"' : "") + ' \n    xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n  >\n    <defs>\n      <rect id="rect-' + r.suffix + '" width="100" height="100" fill="' + r.foregroundColor + '"/>\n      <path \n        id="empty-' + r.suffix + '" \n        d="M0,28.6v42.9C0,87.3,12.8,100,28.6,100h42.9c15.9,0,28.6-12.8,28.6-28.6V28.6C100,12.7,87.2,0,71.4,0H28.6 C12.8,0,0,12.8,0,28.6z"\n        fill="' + r.foregroundColor + '"\n      />\n      <path id="b-' + r.suffix + '" d="' + b + '" transform="rotate(-90 50 50)" fill="' + r.foregroundColor + '"/>\n      <path id="r-' + r.suffix + '" d="' + b + '" transform="rotate(-180 50 50)" fill="' + r.foregroundColor + '"/>\n      <path id="l-' + r.suffix + '" d="' + b + '" fill="' + r.foregroundColor + '"/>\n      <path id="t-' + r.suffix + '" d="' + b + '" transform="rotate(90 50 50)" fill="' + r.foregroundColor + '"/>\n      <path id="l-' + r.suffix + '" d="' + A + '" transform="rotate(-90 50 50)" fill="' + r.foregroundColor + '"/>\n      <path id="lt-' + r.suffix + '" d="' + A + '" fill="' + r.foregroundColor + '"/>\n      <path id="lb-' + r.suffix + '" d="' + A + '" transform="rotate(-90 50 50)" fill="' + r.foregroundColor + '"/>\n      <path id="rb-' + r.suffix + '" d="' + A + '" transform="rotate(-180 50 50)" fill="' + r.foregroundColor + '"/>\n      <path id="rt-' + r.suffix + '" d="' + A + '" transform="rotate(90 50 50)" fill="' + r.foregroundColor + '"/>\n      <path \n        id="n_lt-' + r.suffix + '" \n        d="M30.5,2V0H0v30.5h2C2,14.7,14.8,2,30.5,2z" \n        fill="' + r.foregroundColor + '"\n      />\n      <path \n        id="n_lb-' + r.suffix + '"\n        d="M2,69.5H0V100h30.5v-2C14.7,98,2,85.2,2,69.5z" \n        fill="' + r.foregroundColor + '"\n      />\n      <path \n        id="n_rt-' + r.suffix + '" \n        d="M98,30.5h2V0H69.5v2C85.3,2,98,14.8,98,30.5z" \n        fill="' + r.foregroundColor + '"\n      />\n      <path id="n_rb-' + r.suffix + '" \n        d="M69.5,98v2H100V69.5h-2C98,85.3,85.2,98,69.5,98z" \n        fill="' + r.foregroundColor + '"\n      />\n      <path \n        id="point-' + r.suffix + '" \n        fill="' + r.foregroundColor + '"\n        d="M600.001786,457.329333 L600.001786,242.658167 C600.001786,147.372368 587.039517,124.122784 581.464617,118.535383 C575.877216,112.960483 552.627632,99.9982143 457.329333,99.9982143 L242.670667,99.9982143 C147.372368,99.9982143 124.122784,112.960483 118.547883,118.535383 C112.972983,124.122784 99.9982143,147.372368 99.9982143,242.658167 L99.9982143,457.329333 C99.9982143,552.627632 112.972983,575.877216 118.547883,581.464617 C124.122784,587.027017 147.372368,600.001786 242.670667,600.001786 L457.329333,600.001786 C552.627632,600.001786 575.877216,587.027017 581.464617,581.464617 C587.039517,575.877216 600.001786,552.627632 600.001786,457.329333 Z M457.329333,0 C653.338333,0 700,46.6616668 700,242.658167 C700,438.667167 700,261.332833 700,457.329333 C700,653.338333 653.338333,700 457.329333,700 C261.332833,700 438.667167,700 242.670667,700 C46.6616668,700 0,653.338333 0,457.329333 C0,261.332833 0,352.118712 0,242.658167 C0,46.6616668 46.6616668,0 242.670667,0 C438.667167,0 261.332833,0 457.329333,0 Z M395.996667,200 C480.004166,200 500,220.008332 500,303.990835 C500,387.998334 500,312.001666 500,395.996667 C500,479.991668 480.004166,500 395.996667,500 C312.001666,500 387.998334,500 304.003333,500 C220.008332,500 200,479.991668 200,395.996667 C200,312.001666 200,350.906061 200,303.990835 C200,220.008332 220.008332,200 304.003333,200 C387.998334,200 312.001666,200 395.996667,200 Z" \n      />\n      <g id="vk_logo-' + r.suffix + '">\n        <path \n          fill="' + r.logoColor + '" \n          d="M253.066667,0 C457.466667,0 272.533333,0 476.933333,0 C681.333333,0 730,48.6666667 730,253.066667 C730,457.466667 730,272.533333 730,476.933333 C730,681.333333 681.333333,730 476.933333,730 C272.533333,730 457.466667,730 253.066667,730 C48.6666667,730 0,681.333333 0,476.933333 C0,272.533333 0,367.206459 0,253.066667 C0,48.6666667 48.6666667,0 253.066667,0 Z"/><path fill="#FFF" d="M597.816744,251.493445 C601.198942,240.214758 597.816746,231.927083 581.719678,231.927083 L528.490512,231.927083 C514.956087,231.927083 508.716524,239.08642 505.332448,246.981031 C505.332448,246.981031 478.263599,312.960647 439.917002,355.818719 C427.510915,368.224806 421.871102,372.172112 415.10389,372.172112 C411.720753,372.172112 406.822917,368.224806 406.822917,356.947057 L406.822917,251.493445 C406.822917,237.95902 402.895137,231.927083 391.615512,231.927083 L307.969678,231.927083 C299.511836,231.927083 294.425223,238.208719 294.425223,244.162063 C294.425223,256.99245 313.597583,259.951287 315.573845,296.043086 L315.573845,374.428788 C315.573845,391.614583 312.470184,394.730425 305.702972,394.730425 C287.658011,394.730425 243.763595,328.456052 217.730151,252.620844 C212.628223,237.881107 207.511068,231.927083 193.907178,231.927083 L140.678012,231.927083 C125.469678,231.927083 122.427826,239.08642 122.427826,246.981031 C122.427826,261.079625 140.473725,331.006546 206.452402,423.489903 C250.437874,486.648674 312.410515,520.885417 368.803012,520.885417 C402.638134,520.885417 406.823845,513.28125 406.823845,500.183098 L406.823845,452.447917 C406.823845,437.239583 410.029185,434.204421 420.743703,434.204421 C428.638315,434.204421 442.172739,438.151727 473.753063,468.603713 C509.843923,504.694573 515.79398,520.885417 536.094678,520.885417 L589.323845,520.885417 C604.532178,520.885417 612.136345,513.28125 607.749619,498.274853 C602.949226,483.318593 585.717788,461.619053 562.853283,435.89599 C550.446258,421.234166 531.837128,405.444943 526.197316,397.548454 C518.302704,387.399043 520.558441,382.88663 526.197316,373.864619 C526.197316,373.864619 591.049532,282.508661 597.816744,251.493445 Z"\n        />\n      </g>\n      <clipPath id="logo-mask-' + r.suffix + '">\n        <rect x="0" y="0" width="750" height="750" />\n      </clipPath>\n    </defs>\n\n    ' + y + '\n\n    <g transform="' + C + '">\n      ' + i.join("\n") + "\n    </g>\n  </svg>"
                    },
                    o = function() {
                        function e(t, n, r, o) {
                            if (this.version = t, this.errorCorrectionLevel = n, this.mask = o, this.modules = [], this.isFunction = [], t < e.MIN_VERSION || t > e.MAX_VERSION) throw "Version value out of range";
                            if (o < -1 || o > 7) throw "Mask value out of range";
                            this.size = 4 * t + 17;
                            for (var i = [], s = 0; s < this.size; s++) i.push(!1);
                            for (s = 0; s < this.size; s++) this.modules.push(i.slice()), this.isFunction.push(i.slice());
                            this.drawFunctionPatterns();
                            var l = this.addEccAndInterleave(r);
                            if (this.drawCodewords(l), -1 == o) {
                                var a = 1e9;
                                for (s = 0; s < 8; s++) {
                                    this.applyMask(s), this.drawFormatBits(s);
                                    var u = this.getPenaltyScore();
                                    u < a && (o = s, a = u), this.applyMask(s)
                                }
                            }
                            if (o < 0 || o > 7) throw "Assertion error";
                            this.mask = o, this.applyMask(o), this.drawFormatBits(o), this.isFunction = []
                        }
                        return e.encodeText = function(t, n) {
                            var r = s.makeSegments(t);
                            return e.encodeSegments(r, n)
                        }, e.encodeBinary = function(t, n) {
                            var r = s.makeBytes(t);
                            return e.encodeSegments([r], n)
                        }, e.encodeSegments = function(t, n, r, o, i, l) {
                            if (void 0 === r && (r = 1), void 0 === o && (o = 40), void 0 === i && (i = -1), void 0 === l && (l = !0), !(e.MIN_VERSION <= r && r <= o && o <= e.MAX_VERSION) || i < -1 || i > 7) throw "Invalid value";
                            var u, f;
                            for (u = r;; u++) {
                                var c = 8 * e.getNumDataCodewords(u, n),
                                    h = s.getTotalBits(t, u);
                                if (h <= c) {
                                    f = h;
                                    break
                                }
                                if (u >= o) throw "Data too long"
                            }
                            for (var p = 0, d = [e.Ecc.MEDIUM, e.Ecc.QUARTILE, e.Ecc.HIGH]; p < d.length; p++) {
                                var _ = d[p];
                                l && f <= 8 * e.getNumDataCodewords(u, _) && (n = _)
                            }
                            for (var v = new a, g = 0, m = t; g < m.length; g++) {
                                var y = m[g];
                                v.appendBits(y.mode.modeBits, 4), v.appendBits(y.numChars, y.mode.numCharCountBits(u));
                                for (var C = 0, w = y.getData(); C < w.length; C++) {
                                    var E = w[C];
                                    v.array.push(E)
                                }
                            }
                            if (v.array.length != f) throw "Assertion error";
                            var b = 8 * e.getNumDataCodewords(u, n);
                            if (v.array.length > b) throw "Assertion error";
                            if (v.appendBits(0, Math.min(4, b - v.array.length)), v.appendBits(0, (8 - v.array.length % 8) % 8), v.array.length % 8 != 0) throw "Assertion error";
                            for (var A = 236; v.array.length < b; A ^= 253) v.appendBits(A, 8);
                            for (var M = []; 8 * M.length < v.array.length;) M.push(0);
                            return v.array.forEach(function(e, t) {
                                return M[t >>> 3] |= e << 7 - (7 & t)
                            }), new e(u, n, M, i)
                        }, e.prototype.getModule = function(e, t) {
                            return 0 <= e && e < this.size && 0 <= t && t < this.size && this.modules[t][e]
                        }, e.prototype.drawCanvas = function(e, t, n) {
                            if (e <= 0 || t < 0) throw "Value out of range";
                            var r = (this.size + 2 * t) * e;
                            n.width = r, n.height = r;
                            for (var o = n.getContext("2d"), i = -t; i < this.size + t; i++)
                                for (var s = -t; s < this.size + t; s++) o.fillStyle = this.getModule(s, i) ? "#000000" : "#FFFFFF", o.fillRect((s + t) * e, (i + t) * e, e, e)
                        }, e.prototype.toSvgString = function(e) {
                            if (e < 0) throw "Border must be non-negative";
                            for (var t = [], n = 0; n < this.size; n++)
                                for (var r = 0; r < this.size; r++) this.getModule(r, n) && t.push("M" + (r + e) + "," + (n + e) + "h1v1h-1z");
                            return '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + (this.size + 2 * e) + " " + (this.size + 2 * e) + '" stroke="none">\n\t<rect width="100%" height="100%" fill="#FFFFFF"/>\n\t<path d="' + t.join(" ") + '" fill="#000000"/>\n</svg>\n'
                        }, e.prototype.drawFunctionPatterns = function() {
                            for (var e = 0; e < this.size; e++) this.setFunctionModule(6, e, e % 2 == 0), this.setFunctionModule(e, 6, e % 2 == 0);
                            this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
                            var t = this.getAlignmentPatternPositions(),
                                n = t.length;
                            for (e = 0; e < n; e++)
                                for (var r = 0; r < n; r++) 0 == e && 0 == r || 0 == e && r == n - 1 || e == n - 1 && 0 == r || this.drawAlignmentPattern(t[e], t[r]);
                            this.drawFormatBits(0), this.drawVersion()
                        }, e.prototype.drawFormatBits = function(e) {
                            for (var t = this.errorCorrectionLevel.formatBits << 3 | e, n = t, r = 0; r < 10; r++) n = n << 1 ^ 1335 * (n >>> 9);
                            var o = 21522 ^ (t << 10 | n);
                            if (o >>> 15 != 0) throw "Assertion error";
                            for (r = 0; r <= 5; r++) this.setFunctionModule(8, r, i(o, r));
                            for (this.setFunctionModule(8, 7, i(o, 6)), this.setFunctionModule(8, 8, i(o, 7)), this.setFunctionModule(7, 8, i(o, 8)), r = 9; r < 15; r++) this.setFunctionModule(14 - r, 8, i(o, r));
                            for (r = 0; r < 8; r++) this.setFunctionModule(this.size - 1 - r, 8, i(o, r));
                            for (r = 8; r < 15; r++) this.setFunctionModule(8, this.size - 15 + r, i(o, r));
                            this.setFunctionModule(8, this.size - 8, !0)
                        }, e.prototype.drawVersion = function() {
                            if (!(this.version < 7)) {
                                for (var e = this.version, t = 0; t < 12; t++) e = e << 1 ^ 7973 * (e >>> 11);
                                var n = this.version << 12 | e;
                                if (n >>> 18 != 0) throw "Assertion error";
                                for (t = 0; t < 18; t++) {
                                    var r = i(n, t),
                                        o = this.size - 11 + t % 3,
                                        s = Math.floor(t / 3);
                                    this.setFunctionModule(o, s, r), this.setFunctionModule(s, o, r)
                                }
                            }
                        }, e.prototype.drawFinderPattern = function(e, t) {
                            for (var n = -4; n <= 4; n++)
                                for (var r = -4; r <= 4; r++) {
                                    var o = Math.max(Math.abs(r), Math.abs(n)),
                                        i = e + r,
                                        s = t + n;
                                    0 <= i && i < this.size && 0 <= s && s < this.size && this.setFunctionModule(i, s, 2 != o && 4 != o)
                                }
                        }, e.prototype.drawAlignmentPattern = function(e, t) {
                            for (var n = -2; n <= 2; n++)
                                for (var r = -2; r <= 2; r++) this.setFunctionModule(e + r, t + n, 1 != Math.max(Math.abs(r), Math.abs(n)))
                        }, e.prototype.setFunctionModule = function(e, t, n) {
                            this.modules[t][e] = n, this.isFunction[t][e] = !0
                        }, e.prototype.addEccAndInterleave = function(t) {
                            var n = this.version,
                                r = this.errorCorrectionLevel;
                            if (t.length != e.getNumDataCodewords(n, r)) throw "Invalid argument";
                            for (var o = e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n], i = e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n], s = Math.floor(e.getNumRawDataModules(n) / 8), a = o - s % o, u = Math.floor(s / o), f = [], c = new l(i), h = 0, p = 0; h < o; h++) {
                                var d = t.slice(p, p + u - i + (h < a ? 0 : 1));
                                p += d.length;
                                var _ = c.getRemainder(d);
                                h < a && d.push(0), f.push(d.concat(_))
                            }
                            var v = [];
                            for (h = 0; h < f[0].length; h++)
                                for (var g = 0; g < f.length; g++)(h != u - i || g >= a) && v.push(f[g][h]);
                            if (v.length != s) throw "Assertion error";
                            return v
                        }, e.prototype.drawCodewords = function(t) {
                            if (t.length != Math.floor(e.getNumRawDataModules(this.version) / 8)) throw "Invalid argument";
                            for (var n = 0, r = this.size - 1; r >= 1; r -= 2) {
                                6 == r && (r = 5);
                                for (var o = 0; o < this.size; o++)
                                    for (var s = 0; s < 2; s++) {
                                        var l = r - s,
                                            a = 0 == (r + 1 & 2) ? this.size - 1 - o : o;
                                        !this.isFunction[a][l] && n < 8 * t.length && (this.modules[a][l] = i(t[n >>> 3], 7 - (7 & n)), n++)
                                    }
                            }
                            if (n != 8 * t.length) throw "Assertion error"
                        }, e.prototype.applyMask = function(e) {
                            if (e < 0 || e > 7) throw "Mask value out of range";
                            for (var t = 0; t < this.size; t++)
                                for (var n = 0; n < this.size; n++) {
                                    var r = void 0;
                                    switch (e) {
                                        case 0:
                                            r = (n + t) % 2 == 0;
                                            break;
                                        case 1:
                                            r = t % 2 == 0;
                                            break;
                                        case 2:
                                            r = n % 3 == 0;
                                            break;
                                        case 3:
                                            r = (n + t) % 3 == 0;
                                            break;
                                        case 4:
                                            r = (Math.floor(n / 3) + Math.floor(t / 2)) % 2 == 0;
                                            break;
                                        case 5:
                                            r = n * t % 2 + n * t % 3 == 0;
                                            break;
                                        case 6:
                                            r = (n * t % 2 + n * t % 3) % 2 == 0;
                                            break;
                                        case 7:
                                            r = ((n + t) % 2 + n * t % 3) % 2 == 0;
                                            break;
                                        default:
                                            throw "Assertion error"
                                    }!this.isFunction[t][n] && r && (this.modules[t][n] = !this.modules[t][n])
                                }
                        }, e.prototype.getPenaltyScore = function() {
                            for (var t = 0, n = 0; n < this.size; n++) {
                                for (var r = [0, 0, 0, 0, 0, 0, 0], o = !1, i = 0, s = 0; s < this.size; s++) this.modules[n][s] == o ? 5 == ++i ? t += e.PENALTY_N1 : i > 5 && t++ : (e.addRunToHistory(i, r), !o && e.hasFinderLikePattern(r) && (t += e.PENALTY_N3), o = this.modules[n][s], i = 1);
                                e.addRunToHistory(i, r), o && e.addRunToHistory(0, r), e.hasFinderLikePattern(r) && (t += e.PENALTY_N3)
                            }
                            for (s = 0; s < this.size; s++) {
                                r = [0, 0, 0, 0, 0, 0, 0], o = !1;
                                var l = 0;
                                for (n = 0; n < this.size; n++) this.modules[n][s] == o ? 5 == ++l ? t += e.PENALTY_N1 : l > 5 && t++ : (e.addRunToHistory(l, r), !o && e.hasFinderLikePattern(r) && (t += e.PENALTY_N3), o = this.modules[n][s], l = 1);
                                e.addRunToHistory(l, r), o && e.addRunToHistory(0, r), e.hasFinderLikePattern(r) && (t += e.PENALTY_N3)
                            }
                            for (n = 0; n < this.size - 1; n++)
                                for (s = 0; s < this.size - 1; s++)(o = this.modules[n][s]) == this.modules[n][s + 1] && o == this.modules[n + 1][s] && o == this.modules[n + 1][s + 1] && (t += e.PENALTY_N2);
                            for (var a = 0, u = 0, f = this.modules; u < f.length; u++)
                                for (var c = 0, h = f[u]; c < h.length; c++)(o = h[c]) && a++;
                            var p = this.size * this.size;
                            return t += (Math.ceil(Math.abs(20 * a - 10 * p) / p) - 1) * e.PENALTY_N4
                        }, e.prototype.getAlignmentPatternPositions = function() {
                            if (1 == this.version) return [];
                            for (var e = Math.floor(this.version / 7) + 2, t = 32 == this.version ? 26 : 2 * Math.ceil((this.size - 13) / (2 * e - 2)), n = [6], r = this.size - 7; n.length < e; r -= t) n.splice(1, 0, r);
                            return n
                        }, e.getNumRawDataModules = function(t) {
                            if (t < e.MIN_VERSION || t > e.MAX_VERSION) throw "Version number out of range";
                            var n = (16 * t + 128) * t + 64;
                            if (t >= 2) {
                                var r = Math.floor(t / 7) + 2;
                                n -= (25 * r - 10) * r - 55, t >= 7 && (n -= 36)
                            }
                            return n
                        }, e.getNumDataCodewords = function(t, n) {
                            return Math.floor(e.getNumRawDataModules(t) / 8) - e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t] * e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]
                        }, e.addRunToHistory = function(e, t) {
                            t.pop(), t.unshift(e)
                        }, e.hasFinderLikePattern = function(e) {
                            var t = e[1];
                            return t > 0 && e[2] == t && e[4] == t && e[5] == t && e[3] == 3 * t && Math.max(e[0], e[6]) >= 4 * t
                        }, e.MIN_VERSION = 1, e.MAX_VERSION = 40, e.PENALTY_N1 = 3, e.PENALTY_N2 = 3, e.PENALTY_N3 = 40, e.PENALTY_N4 = 10, e.ECC_CODEWORDS_PER_BLOCK = [
                            [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                            [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
                            [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                            [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
                        ], e.NUM_ERROR_CORRECTION_BLOCKS = [
                            [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
                            [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
                            [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
                            [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
                        ], e
                    }();

                function i(e, t) {
                    return 0 != (e >>> t & 1)
                }
                var s = function() {
                        function e(e, t, n) {
                            if (this.mode = e, this.numChars = t, this.bitData = n, t < 0) throw "Invalid argument";
                            this.bitData = n.slice()
                        }
                        return e.makeBytes = function(t) {
                            for (var n = new a, r = 0, o = t; r < o.length; r++) {
                                var i = o[r];
                                n.appendBits(i, 8)
                            }
                            return new e(e.Mode.BYTE, t.length, n.array)
                        }, e.makeNumeric = function(t) {
                            if (!this.NUMERIC_REGEX.test(t)) throw "String contains non-numeric characters";
                            for (var n = new a, r = 0; r < t.length;) {
                                var o = Math.min(t.length - r, 3);
                                n.appendBits(parseInt(t.substr(r, o), 10), 3 * o + 1), r += o
                            }
                            return new e(e.Mode.NUMERIC, t.length, n.array)
                        }, e.makeAlphanumeric = function(t) {
                            if (!this.ALPHANUMERIC_REGEX.test(t)) throw "String contains unencodable characters in alphanumeric mode";
                            var n, r = new a;
                            for (n = 0; n + 2 <= t.length; n += 2) {
                                var o = 45 * e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));
                                o += e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n + 1)), r.appendBits(o, 11)
                            }
                            return n < t.length && r.appendBits(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)), 6), new e(e.Mode.ALPHANUMERIC, t.length, r.array)
                        }, e.makeSegments = function(t) {
                            return "" == t ? [] : this.NUMERIC_REGEX.test(t) ? [e.makeNumeric(t)] : this.ALPHANUMERIC_REGEX.test(t) ? [e.makeAlphanumeric(t)] : [e.makeBytes(e.toUtf8ByteArray(t))]
                        }, e.makeEci = function(t) {
                            var n = new a;
                            if (t < 0) throw "ECI assignment value out of range";
                            if (t < 128) n.appendBits(t, 8);
                            else if (t < 16384) n.appendBits(2, 2), n.appendBits(t, 14);
                            else {
                                if (!(t < 1e6)) throw "ECI assignment value out of range";
                                n.appendBits(6, 3), n.appendBits(t, 21)
                            }
                            return new e(e.Mode.ECI, 0, n.array)
                        }, e.prototype.getData = function() {
                            return this.bitData.slice()
                        }, e.getTotalBits = function(e, t) {
                            for (var n = 0, r = 0, o = e; r < o.length; r++) {
                                var i = o[r],
                                    s = i.mode.numCharCountBits(t);
                                if (i.numChars >= 1 << s) return 1 / 0;
                                n += 4 + s + i.bitData.length
                            }
                            return n
                        }, e.toUtf8ByteArray = function(e) {
                            e = encodeURI(e);
                            for (var t = [], n = 0; n < e.length; n++) "%" != e.charAt(n) ? t.push(e.charCodeAt(n)) : (t.push(parseInt(e.substr(n + 1, 2), 16)), n += 2);
                            return t
                        }, e.NUMERIC_REGEX = /^[0-9]*$/, e.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, e.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", e
                    }(),
                    l = function() {
                        function e(t) {
                            if (this.coefficients = [], t < 1 || t > 255) throw "Degree out of range";
                            for (var n = this.coefficients, r = 0; r < t - 1; r++) n.push(0);
                            n.push(1);
                            var o = 1;
                            for (r = 0; r < t; r++) {
                                for (var i = 0; i < n.length; i++) n[i] = e.multiply(n[i], o), i + 1 < n.length && (n[i] ^= n[i + 1]);
                                o = e.multiply(o, 2)
                            }
                        }
                        return e.prototype.getRemainder = function(t) {
                            for (var n = this.coefficients.map(function(e) {
                                    return 0
                                }), r = function(t) {
                                    var r = t ^ n.shift();
                                    n.push(0), o.coefficients.forEach(function(t, o) {
                                        return n[o] ^= e.multiply(t, r)
                                    })
                                }, o = this, i = 0, s = t; i < s.length; i++) r(s[i]);
                            return n
                        }, e.multiply = function(e, t) {
                            if (e >>> 8 != 0 || t >>> 8 != 0) throw "Byte out of range";
                            for (var n = 0, r = 7; r >= 0; r--) n = n << 1 ^ 285 * (n >>> 7), n ^= (t >>> r & 1) * e;
                            if (n >>> 8 != 0) throw "Assertion error";
                            return n
                        }, e
                    }(),
                    a = function() {
                        function e() {
                            this.array = []
                        }
                        return e.prototype.appendBits = function(e, t) {
                            if (t < 0 || t > 31 || e >>> t != 0) throw "Value out of range";
                            for (var n = t - 1; n >= 0; n--) this.array.push(e >>> n & 1)
                        }, e
                    }();
                (function(e) {
                    var t = function() {
                        function e(e, t) {
                            this.ordinal = e, this.formatBits = t
                        }
                        return e.LOW = new e(0, 1), e.MEDIUM = new e(1, 0), e.QUARTILE = new e(2, 3), e.HIGH = new e(3, 2), e
                    }();
                    e.Ecc = t
                })(o || (o = {})),
                function(e) {
                    var t = function() {
                        function e(e, t) {
                            this.modeBits = e, this.numBitsCharCount = t
                        }
                        return e.prototype.numCharCountBits = function(e) {
                            return this.numBitsCharCount[Math.floor((e + 7) / 17)]
                        }, e.NUMERIC = new e(1, [10, 12, 14]), e.ALPHANUMERIC = new e(2, [9, 11, 13]), e.BYTE = new e(4, [8, 16, 16]), e.KANJI = new e(8, [8, 10, 12]), e.ECI = new e(7, [0, 0, 0]), e
                    }();
                    e.Mode = t
                }(s || (s = {}));
                var u = 128,
                    f = "#ffffff",
                    c = "#000000",
                    h = "#4680c2";
                return {
                    createQR: function(t, n, i, l) {
                        if ("string" != typeof t) throw new TypeError("Enter text for encoding");
                        var a = e({}, "object" == typeof n && null !== n ? n : {}, "object" == typeof l && null !== l ? l : {}, {
                                qrSize: "object" == typeof n && null !== n && "number" == typeof n.qrSize ? n.qrSize : n,
                                className: "object" == typeof n && null !== n && "string" == typeof n.className ? n.className : i
                            }),
                            p = [o.Ecc.LOW, o.Ecc.MEDIUM, o.Ecc.QUARTILE, o.Ecc.HIGH],
                            d = {
                                qrSize: "number" == typeof a.qrSize ? a.qrSize : u,
                                className: "string" == typeof a.className ? a.className : i || "",
                                isShowLogo: !!a.isShowLogo || !1,
                                isShowBackground: !!a.isShowBackground || !1,
                                foregroundColor: "string" == typeof a.foregroundColor ? a.foregroundColor : c,
                                backgroundColor: "string" == typeof a.backgroundColor ? a.backgroundColor : f,
                                logoColor: "string" == typeof a.logoColor ? a.logoColor : h,
                                suffix: a.suffix ? a.suffix.toString() : "0",
                                logoData: "string" == typeof a.logoData ? a.logoData : null,
                                ecc: "number" == typeof a.ecc && p[a.ecc] ? a.ecc : 3
                            },
                            _ = s.makeSegments(t),
                            v = o.encodeSegments(_, p[d.ecc], 1, 40, -1, !0);
                        return r(v, d)
                    }
                }
            }()
        },
        yLpj: function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        }
    }
]);