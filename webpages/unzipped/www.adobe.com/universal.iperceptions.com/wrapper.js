var iPerceptions = iPerceptions || {};
iPerceptions.Wrapper = {
    token: window.iperceptionskey,
    inviteId: "IPinvite." + window.iperceptionskey,
    inviteUrl: "//api.iperceptions.com/InviteTriggers",
    engineId: "IPengine",
    definitionId: "IPdef." + window.iperceptionskey,
    device: "",
    culture: "",
    sId: "",
    visits: "",
    visit: "",
    engineUrl: "",
    dataUrl: "",
    companyId: "",
    frameUrl: "//universal.iperceptions.com/iFrame.html",
    iFrameUrl: document.location.protocol + "//universal.iperceptions.com",
    frameId: "iPerceptionsFrame",
    visitsId: "iperceptions.com",
    pageUrl: location.href,
    init: function() {
        if (!/MSIE [67]\.(?!.*Trident[1-9])/.test(navigator.userAgent)) try {
            this.sId = this.setAndGetCookie("ipe_s");
            this.visits = JSON.parse(this.getStorageCookie(this.visitsId));
            var n = this.getStorageCookie(this.inviteId);
            n && "null" !== n ? this.store(this.inviteId, n) : this.getJs(this.inviteUrl, this.store, this.inviteId)
        } catch (t) {
            try {
                this.getJs(this.inviteUrl, this.inject, this.inviteId)
            } catch (t) {}
        }
    },
    getApiObj: function(n) {
        var t, i;
        if (!n) {
            window.console && console.warn("iPerceptions Warning: Domain validation does not find " + window.location.hostname);
            return
        }
        try {
            for (t = JSON.parse(n), this.device = t.Device, this.culture = t.Culture, this.engineUrl = t.EngineUrl, this.dataUrl = t.DataUrl.replace(/^(https?):\/\//, "//"), void 0 !== this.visits && this.visits && this.visits instanceof Array || (this.visits = []), i = 0; i < this.visits.length; i++)
                if (this.visits[i].id.toLowerCase() === this.token.toLowerCase()) {
                    this.visit = this.visits[i];
                    break
                }
            this.visit = this.visit || {};
            this.visit.id = this.token.toLowerCase();
            this.visit.history = this.visit.history || [];
            this.visit.visitors = [{
                id: t.VisitorId,
                time: new Date,
                host: location.host
            }]
        } catch (r) {}
    },
    store: function(n, t) {
        var i, r, u;
        try {
            if (i = iPerceptions.Wrapper, i.getApiObj(t), i.setStorageCookie(n, t, null, "session"), r = sessionStorage.getItem(i.engineId), !r) return void i.injectJs(i.engineId, i.engineUrl, null, i.storeEngine, i);
            iPerceptions.ipEngine = i.stringToObj(r);
            u = sessionStorage.getItem(i.definitionId);
            u ? (ipDef = JSON.parse(u), i.callEngine()) : i.injectJs(i.definitionId, i.dataUrl, null, i.storeDef, i)
        } catch (f) {}
    },
    inject: function(n, t) {
        var i = iPerceptions.Wrapper;
        try {
            i.getApiObj(t);
            i.injectJs(i.engineId, i.engineUrl);
            i.injectJs(i.definitionId, i.dataUrl, null, i.callEngine)
        } catch (r) {}
    },
    injectJs: function(n, t, i, r, u) {
        var f = document.createElement("script"),
            e;
        f.id = n;
        t && (f.src = t);
        i && (f.text = i);
        f.type = "text/javascript";
        e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(f, e);
        void 0 !== r && null !== r && this.afterInjection(f, r, u)
    },
    afterInjection: function(n, t, i) {
        n.readyState ? n.onreadystatechange = function() {
            ("loaded" == n.readyState || "complete" == n.readyState) && (n.onreadystatechange = null, t(i))
        } : n.onload = function() {
            t(i)
        }
    },
    getJs: function(n, t, i) {
        var r, u;
        window.XDomainRequest ? (r = new XDomainRequest, r.open("get", n + "?SecurityToken=" + this.token), r.onload = function() {
            t(i, r.responseText)
        }, r.send()) : (u = new XMLHttpRequest, u.open("GET", n, !0), u.setRequestHeader("SecurityToken", this.token), u.onload = function() {
            t(i, this.response)
        }, u.send(this.token))
    },
    storeEngine: function(n) {
        if (document.addEventListener) try {
            sessionStorage.setItem(n.engineId, iPerceptions.ipEngine.toJson())
        } catch (t) {}
        n.injectJs(n.definitionId, n.dataUrl, null, n.storeDef, n)
    },
    storeDef: function(n) {
        try {
            sessionStorage.setItem(n.definitionId, JSON.stringify(ipDef))
        } catch (t) {}
        n.callEngine()
    },
    callEngine: function(n, t) {
        typeof n == "string" && n.length > 0 && (iPerceptions.Wrapper.pageUrl = n);
        typeof t != "boolean" && (t = !0);
        var i = iPerceptions.Wrapper;
        typeof ipDef != "undefined" && ipDef && (ipDef.CustomInviteScript && ipDef.CustomInviteScript.length > 0 && eval(ipDef.CustomInviteScript), ipDef.IntegrationScript && ipDef.IntegrationScript.length > 0 && eval(ipDef.IntegrationScript), ipDef.Invites.length > 0 && (i.companyId = ipDef.Invites[0].CompanyId, "object" == typeof iPerceptions.ipEngine ? iPerceptions.ipEngine.launch(ipDef, i.device, i.culture, i.visit, iPerceptions.Wrapper.pageUrl, t) : setTimeout(i.callEngine(iPerceptions.Wrapper.pageUrl), 500)))
    },
    getCookie: function(n) {
        for (var t, r = document.cookie.split(";"), i = 0; i < r.length; i += 1) {
            for (t = r[i];
                " " === t.charAt(0);) t = t.substring(1);
            if (-1 !== t.indexOf(n)) return t.substring(n.length + 1, t.length)
        }
        return ""
    },
    setCookie: function(n, t, i) {
        t && t.toString().length > 512 || (document.cookie = i ? n + "=" + t + ";expires=" + i + ";path=/" : n + "=" + t + ";path=/")
    },
    setAndGetCookie: function(n) {
        var t = this.getCookie(n);
        return "" === t && (t = this.guid(), this.setCookie(n, t)), t
    },
    setStorageCookie: function(n, t, i, r) {
        try {
            "session" === r ? sessionStorage.setItem(n, t) : this.saveToFrame(n, t)
        } catch (u) {
            this.setCookie(n, t, i)
        }
    },
    getStorageCookie: function(n, t) {
        var i;
        try {
            i = "session" === t ? sessionStorage.getItem(n) : localStorage.getItem(n)
        } catch (r) {}
        return i || this.getCookie(n)
    },
    getPageViewed: function(n) {
        typeof n != "boolean" && (n = !0);
        var r, t, i;
        return r = this.getStorageCookie("ipe." + this.companyId + ".pageViewed", "session"), i = this.getCookie("ipe." + this.companyId + ".pageViewedCount"), t = r ? r.split(",") : [], i = parseInt(i) || 0, iPerceptions.Wrapper.pageUrl !== t[t.length - 1] && n && (t = [], t.push(iPerceptions.Wrapper.pageUrl), i += 1), r = t.join(","), this.setStorageCookie("ipe." + this.companyId + ".pageViewed", r, null, "session"), this.setCookie("ipe." + this.companyId + ".pageViewedCount", i), i
    },
    getInvitesKey: function() {
        return "ipe." + this.companyId + ".winning"
    },
    getInvites: function() {
        return this.getIframeSessionStorage(this.getInvitesKey())
    },
    setInvites: function(n) {
        this.setIframeSessionStorage(this.getInvitesKey(), n)
    },
    updateVisit: function(n, t) {
        for (var r = !1, i = 0; i < this.visits.length && !r; i++) this.visits[i].id === n.id && (this.visits[i] = n, r = !0);
        r || this.visits.push(n);
        this.setStorageCookie(this.visitsId, JSON.stringify(this.visits), t)
    },
    objToString: function(n) {
        var i = "";
        for (var t in n) n.hasOwnProperty(t) && (i += t + "::" + n[t] + "\n");
        return i
    },
    seed: function() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    },
    guid: function() {
        return this.seed() + this.seed() + "-" + this.seed() + "-" + this.seed() + "-" + this.seed() + "-" + this.seed() + this.seed() + this.seed()
    },
    stringToObj: function(n) {
        try {
            var i, t = JSON.parse(n);
            for (i in t) t.hasOwnProperty(i) && "string" == typeof t[i] && t[i].length > 2 && (0 === t[i].indexOf("function") ? t[i] = eval("(" + t[i] + ")") : t[i][0] == "{" && t[i][t[i].length - 1] == "}" && (t[i] = this.stringToObj(t[i])));
            return t
        } catch (r) {}
    },
    addEvent: function(n, t) {
        window.addEventListener ? window.addEventListener(n, t) : window.attachEvent("on" + n, t)
    },
    saveToFrame: function(n, t) {
        var i = iPerceptions.Wrapper,
            r = document.getElementById(this.frameId).contentWindow;
        localStorage.setItem(n, t);
        r.postMessage(JSON.stringify({
            key: n,
            method: "set",
            data: t
        }), i.iFrameUrl)
    },
    setIframeSessionStorage: function(n, t) {
        var i = iPerceptions.Wrapper,
            r = document.getElementById(this.frameId).contentWindow;
        this.setStorageCookie(n, t, null, "session");
        r.postMessage(JSON.stringify({
            key: n,
            method: "setsession",
            data: t
        }), i.iFrameUrl)
    },
    getSessionEventObj: {
        invites: null,
        handleEvent: function(n) {
            var i, t;
            n.origin.indexOf(iPerceptions.Wrapper.iFrameUrl) >= 0 && (i = JSON.parse(n.data), "universalgetsession" == i.source && (t = iPerceptions.Wrapper, iPerceptions.ipEngine.evaluateRate(this.invites, i.value, ipDef, t.device, t.culture, t.visit, t.sId, t.token), window.removeEventListener("message", iPerceptions.Wrapper.getSessionEventObj)))
        }
    },
    getIframeSessionStorage: function(n, t) {
        try {
            var i = iPerceptions.Wrapper,
                r = document.getElementById(i.frameId).contentWindow;
            r.postMessage(JSON.stringify({
                key: n,
                method: "getsession"
            }), i.iFrameUrl);
            iPerceptions.Wrapper.getSessionEventObj.invites = t;
            i.addEvent("message", iPerceptions.Wrapper.getSessionEventObj)
        } catch (u) {}
    },
    saveAndRestoreLocalStorage: function() {
        var n = iPerceptions.Wrapper,
            t = document.getElementById(n.frameId).contentWindow;
        t.postMessage(JSON.stringify({
            key: n.visitsId,
            method: "get"
        }), n.iFrameUrl);
        setTimeout(function() {
            n.init()
        }, 300)
    },
    storageFromFrame: function() {
        var n, t, i, r;
        try {
            n = iPerceptions.Wrapper;
            document.getElementById(n.frameId) || (t = document.createElement("iframe"), t.src = n.frameUrl, t.style.display = "none", t.id = n.frameId, t.title = n.frameId, i = document.getElementsByTagName("body")[0], i.appendChild(t), r = n.visitsId, n.afterInjection(t, n.saveAndRestoreLocalStorage), n.addEvent("message", function(t) {
                try {
                    if (t.origin.indexOf(iPerceptions.Wrapper.iFrameUrl) >= 0) {
                        var i = JSON.parse(t.data);
                        "universal" == i.source && n.setStorageCookie(r, i.value)
                    }
                } catch (u) {}
            }))
        } catch (u) {}
    },
    exec: function(n, t) {
        iPerceptions.Wrapper.callEngine(n, t)
    }
};
"complete" == document.readyState ? iPerceptions.Wrapper.storageFromFrame() : iPerceptions.Wrapper.addEvent("load", iPerceptions.Wrapper.storageFromFrame);