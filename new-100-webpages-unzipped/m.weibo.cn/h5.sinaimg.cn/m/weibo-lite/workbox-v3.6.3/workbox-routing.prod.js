this.workbox = this.workbox || {}, this.workbox.routing = function(t, e) {
    "use strict";
    try {
        self.workbox.v["workbox:routing:3.6.3"] = 1
    } catch (t) {}
    const r = "GET";
    var s = t => t && "object" == typeof t ? t : {
        handle: t
    };
    class n {
        constructor(t, e, n) {
            this.handler = s(e), this.match = t, this.method = n || r
        }
    }
    class o extends n {
        constructor(t, e, r) {
            super(({
                url: e
            }) => {
                const r = t.exec(e.href);
                return r ? e.origin !== location.origin && 0 !== r.index ? null : r.slice(1) : null
            }, e, r)
        }
    }
    class i {
        constructor() {
            this.t = new Map
        }
        handleRequest(t) {
            const e = new URL(t.request.url);
            if (!e.protocol.startsWith("http")) return;
            let r = null,
                s = null,
                n = null;
            const o = this.e(t, e);
            if (s = o.handler, n = o.params, r = o.route, !s && this.r && (s = this.r), !s) return;
            let i;
            try {
                i = s.handle({
                    url: e,
                    event: t,
                    params: n
                })
            } catch (t) {
                i = Promise.reject(t)
            }
            return i && this.s && (i = i.catch(r => this.s.handle({
                url: e,
                event: t,
                err: r
            }))), i
        }
        e(t, e) {
            const r = this.t.get(t.request.method) || [];
            for (const s of r) {
                let r = s.match({
                    url: e,
                    event: t
                });
                if (r) return Array.isArray(r) && 0 === r.length ? r = void 0 : (r.constructor === Object && 0 === Object.keys(r).length || !0 === r) && (r = void 0), {
                    route: s,
                    params: r,
                    handler: s.handler
                }
            }
            return {
                handler: void 0,
                params: void 0
            }
        }
        setDefaultHandler(t) {
            this.r = s(t)
        }
        setCatchHandler(t) {
            this.s = s(t)
        }
        registerRoute(t) {
            this.t.has(t.method) || this.t.set(t.method, []), this.t.get(t.method).push(t)
        }
        unregisterRoute(e) {
            if (!this.t.has(e.method)) throw new t.WorkboxError("unregister-route-but-not-found-with-method", {
                method: e.method
            });
            const r = this.t.get(e.method).indexOf(e);
            if (!(r > -1)) throw new t.WorkboxError("unregister-route-route-not-registered");
            this.t.get(e.method).splice(r, 1)
        }
    }
    class u extends n {
        constructor(t, {
            whitelist: e = [/./],
            blacklist: r = []
        } = {}) {
            super((...t) => this.n(...t), t), this.o = e, this.i = r
        }
        n({
            event: t,
            url: e
        }) {
            if ("navigate" !== t.request.mode) return !1;
            const r = e.pathname + e.search;
            return !this.i.some(t => t.test(r)) && !!this.o.some(t => t.test(r))
        }
    }
    var a = Object.freeze({
        RegExpRoute: o,
        Route: n,
        Router: i,
        NavigationRoute: u
    });
    const c = new class extends i {
        registerRoute(e, r, s = "GET") {
            let i;
            if ("string" == typeof e) {
                const t = new URL(e, location);
                i = new n(({
                    url: e
                }) => e.href === t.href, r, s)
            } else if (e instanceof RegExp) i = new o(e, r, s);
            else if ("function" == typeof e) i = new n(e, r, s);
            else {
                if (!(e instanceof n)) throw new t.WorkboxError("unsupported-route-type", {
                    moduleName: "workbox-routing",
                    className: "DefaultRouter",
                    funcName: "registerRoute",
                    paramName: "capture"
                });
                i = e
            }
            return super.registerRoute(i), i
        }
        registerNavigationRoute(t, r = {}) {
            const s = e.cacheNames.getPrecacheName(r.cacheName),
                n = new u(() => caches.match(t, {
                    cacheName: s
                }).then(e => {
                    if (e) return e;
                    throw new Error(`The cache ${s} did not have an entry for ` + `${t}.`)
                }).catch(e => fetch(t)), {
                    whitelist: r.whitelist,
                    blacklist: r.blacklist
                });
            return super.registerRoute(n), n
        }
    };
    return self.addEventListener("fetch", t => {
        const e = c.handleRequest(t);
        e && t.respondWith(e)
    }), Object.assign(c, a)
}(workbox.core._private, workbox.core._private);

//# sourceMappingURL=workbox-routing.prod.js.map