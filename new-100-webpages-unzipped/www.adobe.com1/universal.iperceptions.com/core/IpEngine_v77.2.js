"function" != typeof String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
});
var iPerceptions = iPerceptions || {};
iPerceptions.ipEngine = {
    url: "//ips-invite.iperceptions.com/wUniversal.aspx?sdfc=095904e8-{0}-fb330c52-9ae4-4a44-a31d-b80f2c680ca0&lID={1}&source=91787&visitorID=[ipe_v]&sessionID=[ipe_s]&device=[device]",
    device: "",
    culture: "",
    langId: 0,
    pageViewed: 0,
    expoTemplateId: -24,
    launch: function(n, t, i, r, u, f) {
        "use strict";
        var c = iPerceptions.Wrapper,
            e, s, o, y = r.visitors[r.visitors.length - 1].id;
        try {
            this.hideExistingProjects();
            this.device = t.toLowerCase();
            this.culture = i;
            var l = !1,
                h = JSON.parse(n.Domains),
                a = location.host,
                v;
            for (e = 0; e < h.length; e += 1)
                if (v = h[e].substring(1), a === h[e]) {
                    l = !0;
                    break
                } else if ("*." === h[e].substring(0, 2) && -1 !== a.indexOf(v, a.length - v.length)) {
                l = !0;
                break
            }
            if (!l) return;
            for (this.pageViewed = c.getPageViewed(f), this.setFovCookie(), s = n.Invites, e = 0; e < s.length; e++) o = s[e], o.CustomScript && o.CustomScript.length > 0 && eval(o.CustomScript), o.ProjectInviteTriggers = this.shuffleObject(o.ProjectInviteTriggers), -10 === o.TemplateId && this.evaluateInvite(o) && c.injectJs("Iperceptions_" + o.ProjectId.toString(), o.CommentCardUrl, null, function() {
                var n = {
                    langID: langId
                };
                ipeCC[0].ipeIcon(n)
            });
            s = this.reinvite(s, r.history);
            s = c.getIframeSessionStorage(iPerceptions.Wrapper.getInvitesKey(), s)
        } catch (p) {}
    },
    hideExistingProjects: function() {
        for (var i, u, t, r = document.getElementsByTagName("img"), n = 0; n < r.length; n++) r[n].id.indexOf("UIF-IMG-") >= 0 && r[n].parentNode.removeChild(r[n]);
        for (i = document.getElementsByTagName("iframe"), n = 0; n < i.length; n++)(i[n].id.indexOf("artEXPOiFrame") >= 0 || i[n].id.indexOf("iPSliderFrame") >= 0) && i[n].parentNode.removeChild(i[n]);
        for (u = document.getElementById("IPUBI16_bannerInvite"), u != null && u.parentNode.removeChild(u), t = document.getElementsByTagName("div"), n = 0; n < t.length; n++) t[n].id.indexOf("IPEI") == 0 && t[n].id == t[n].className && t[n].parentNode.removeChild(t[n])
    },
    displayInvite: function(n, t, i, r, u, f, e) {
        var o, s, l, b = iPerceptions.Wrapper,
            v = u.visitors[u.visitors.length - 1].id,
            a, y, p, c, h, w;
        for (n = this.shuffleObject(n), a = [], o = 0; o < n.length; o++) iPerceptions.ipEngine.expoTemplateId == n[o].TemplateId && a.push(n[o]);
        for (y = !1, o = 0; o < a.length && !y; o++)
            for (s = a[o], p = s.ProjectInviteTriggers, c = 0; c < p.length; c++)
                if (h = p[c], this.evaluateTrigger(h) === !0) {
                    y = !0;
                    "tablet" === i || "mobile" === i;
                    this.injectInvite(s, h, v, f, i, u, l);
                    break
                }
        for (o = 0; o < n.length; o++)
            if (s = n[o], iPerceptions.ipEngine.expoTemplateId !== n[o].TemplateId)
                for (c = 0; c < s.ProjectInviteTriggers.length; c++)
                    if (h = s.ProjectInviteTriggers[c], null != e) {
                        if (w = e.split(","), s.ProjectId == w[0] && h.Id == w[1]) {
                            this.injectInvite(s, h, v, f, i, u, l);
                            return
                        }
                    } else if (this.evaluateTrigger(h) === !0) {
            ("tablet" === i || "mobile" === i) && b.setIframeSessionStorage(this.getMobileIconKey(), s.ProjectId + "," + h.Id);
            this.injectInvite(s, h, v, f, i, u, l);
            return
        }
        l = new Date;
        l.setFullYear(l.getFullYear() + 1);
        b.updateVisit(u, l)
    },
    injectInvite: function(n, t, i, r, u, f, e) {
        for (var s, o = iPerceptions.Wrapper, l = o.getCookie("IPE_DISP_" + n.ProjectId), a = o.getCookie("IPE_M_" + n.ProjectId), h = 0, c = 0; c < t.ProjectInviteTriggerConditions.length; c++)
            if (condition = t.ProjectInviteTriggerConditions[c], condition.ConditionTypeId == 9) {
                h = parseInt(condition.Value) * 1e3;
                break
            }
        iPerceptions.ipEngine.expoTemplateId === n.TemplateId ? (s = this.url.replace("{0}", n.ProjectId).replace("{1}", t.LanguageId).replace("[ipe_v]", i).replace("[ipe_s]", r).replace("[device]", u) + "&dsc=1", setTimeout(function() {
            return void o.injectJs("Iperceptions_invite", s, null, null)
        }, h)) : (s = this.url.replace("{0}", n.ProjectId).replace("{1}", t.LanguageId).replace("[ipe_v]", i).replace("[ipe_s]", r).replace("[device]", u), setTimeout(function() {
            return void o.injectJs("Iperceptions_invite", s, null, function() {
                ("1" !== l || "1" !== a) && (e = iPerceptions.ipEngine.setreinvite(n, f.history), iPerceptions.Wrapper.updateVisit(f, e))
            })
        }, h))
    },
    reinvite: function(n, t) {
        for (var o, r, u = [], s = [], e = new Date, h, c, f, i = 0; i < n.length; i += 1) {
            if (h = iPerceptions.Wrapper.getCookie("IPE_DISP_" + n[i].ProjectId), c = iPerceptions.Wrapper.getCookie("IPE_M_" + n[i].ProjectId), "1" === h && "1" === c) return s.push(n[i]), s; - 10 != n[i].TemplateId && u.push(n[i])
        }
        for (e.setFullYear(e.getFullYear() - 1), i = 0; i < t.length; i += 1) {
            for (f = null, r = new Date(t[i].date), e = r > e ? r : e, o = 0; o < u.length && null === f; o += 1) u[o].ProjectId === t[i].id && (f = o);
            null !== f && void 0 !== f && (r.setDate(r.getDate() + n[f].ReInviteProject), r > new Date && u.splice(f, 1))
        }
        for (i = 0; i < u.length; i += 1) r = new Date(this.getString(e)), r.setDate(r.getDate() + u[i].ReInviteOtherProject), (r <= new Date || "1" === h && "1" === c || u[i].TemplateId == iPerceptions.ipEngine.expoTemplateId) && s.push(u[i]);
        return s
    },
    setreinvite: function(n, t) {
        var f, i, u, r = new Date,
            e = null;
        for (u = r, f = this.getString(r), i = 0; i < t.length; i += 1) t[i].id === n.ProjectId && (e = i), r = new Date(t[i].date), r.setDate(r.getDate() + t[i].ReInviteProject), u = r > u ? r : u;
        return null !== e ? t[e].date = f : t.push({
            id: n.ProjectId,
            date: f,
            host: location.host
        }), u
    },
    evaluateRate: function(n, t, i, r, u, f, e, o) {
        var y = iPerceptions.Wrapper,
            a = [],
            s, l, h, c, v;
        for (t = (void 0 != t || null != t) && t.length > 0 ? JSON.parse(t) : [], t instanceof Array || (t = []), s = [], l = 0; l < n.length; l++) {
            for (h = n[l], c = [], j = 0; j < h.ProjectInviteTriggers.length; j += 1)(trigger = h.ProjectInviteTriggers[j], 2 !== trigger.InviteTypeId) && (-1 === t.indexOf(trigger.Id) ? 0 === t.length && (rate = "tablet" === this.device ? trigger.TabletRate : "mobile" === this.device ? trigger.MobileRate : trigger.DesktopRate, v = 100 * Math.random(), v < rate && (s.push(trigger.Id), c.push(trigger))) : c.push(trigger));
            c.length > 0 && (h.ProjectInviteTriggers = c, a.push(h))
        }
        0 == s.length && (s = t);
        y.setInvites(JSON.stringify(s));
        this.getIpeStorage(a, i, r, u, f, e, o)
    },
    getString: function(n) {
        return n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate()
    },
    shuffleObject: function(n) {
        for (var i, r, t = n.length - 1; t >= 0; t -= 1) Math.random() < .5 && (i = Math.floor(Math.random() * t), r = n[t], n[t] = n[i], n[i] = r);
        return n
    },
    evaluateInvite: function(n) {
        for (var t = 0; t < n.ProjectInviteTriggers.length; t += 1)
            if (this.evaluateTrigger(n.ProjectInviteTriggers[t]) === !0) return langId = n.ProjectInviteTriggers[t].LanguageId, !0;
        return !1
    },
    evaluateTrigger: function(n) {
        var i, t = n.ProjectInviteTriggerConditions[0];
        for (result = t.ConditionTypeId === 9 ? !0 : this.evaluateCondition(t), i = 1; i < n.ProjectInviteTriggerConditions.length; i += 1) t = n.ProjectInviteTriggerConditions[i], t.ConditionTypeId != 9 && (result = t.IsAnd === !0 ? result && this.evaluateCondition(t) : result || this.evaluateCondition(t));
        return result
    },
    evaluateCondition: function(n) {
        try {
            switch (n.ConditionTypeId) {
                case 1:
                    return this.evaluateOperation(n.ConditionOperationId, this.culture.toString(), n.Value);
                case 2:
                    var t = location.href.toLowerCase();
                    return typeof iPerceptions.Wrapper.pageUrl == "string" && iPerceptions.Wrapper.pageUrl.length > 0 && (t = iPerceptions.Wrapper.pageUrl.toLowerCase()), (3 === n.ConditionOperationId || 6 === n.ConditionOperationId) && 0 === n.Value.toLowerCase().indexOf("www") && (t = t.replace(/^https?:\/\//, "")), this.evaluateOperation(n.ConditionOperationId, t, n.Value.toLowerCase());
                case 3:
                    return this.evaluateOperation(n.ConditionOperationId, this.getQueryParam(n.Parameter), n.Value);
                case 4:
                    return this.evaluateOperation(n.ConditionOperationId, iPerceptions.Wrapper.getCookie(n.Parameter), n.Value);
                case 5:
                    return this.evaluateTrigger(n.CompanyInviteRule);
                case 6:
                    return this.evaluateOperation(n.ConditionOperationId, this.pageViewed.toString(), n.Value);
                case 7:
                    return this.evaluateOperation(n.ConditionOperationId, this.device.toLowerCase(), n.Value.toLowerCase());
                case 8:
                    return this.evaluateCustomCondition(n.Value);
                case 9:
                    return !0;
                case 10:
                    return this.evaluateOperation(n.ConditionOperationId, this.getFov().toString(), n.Value)
            }
        } catch (i) {}
    },
    evaluateOperation: function(n, t, i) {
        if (n > 0 && 11 > n && void 0 === t) return !1;
        t = t.trim();
        i = i.trim();
        try {
            switch (n) {
                case 1:
                    return t === i;
                case 2:
                    return t !== i;
                case 3:
                    return 0 === t.indexOf(i.toString());
                case 4:
                    return -1 !== t.indexOf(i.toString());
                case 5:
                    return -1 === t.indexOf(i.toString());
                case 6:
                    return t.toString() === i.toString();
                case 7:
                    return i.length > 0 && t.substring(t.length - i.length, t.length) === i;
                case 8:
                    return parseInt(t) < parseInt(i);
                case 9:
                    return parseInt(t) > parseInt(i);
                case 10:
                    return "" !== t;
                case 11:
                    return "" === t;
                case 12:
                    return this.getDevice(parseInt(i));
                case 13:
                    return !this.getDevice(parseInt(i));
                case 14:
                    return "" === t;
                case 15:
                    return "" !== t
            }
        } catch (r) {}
    },
    evaluateCustomCondition: function(n) {
        if (void 0 === n && 0 == n.length) return !1;
        try {
            return new Function(n)()
        } catch (t) {}
        return !1
    },
    getQueryParam: function(n) {
        for (var t, i, u = location.search.substring(1).split("&"), r = 0; r < u.length; r += 1) i = u[r].split("="), i[0] === n && (void 0 === t ? t = i[1] : "string" == typeof t ? t = [t, i[1]] : t.push(i[1]));
        return t instanceof Array ? t.join() : t
    },
    getDevice: function(n) {
        return 1 === n && "desktop" === this.device || 3 === n && "tablet" === this.device || 2 === n && "mobile" === this.device
    },
    toJson: function(n) {
        var t, i = {};
        n == null && (n = this);
        for (t in n) n.hasOwnProperty(t) && (i[t] = "function" == typeof n[t] ? n[t].toString() : "object" == typeof n[t] ? n[t] != null ? this.toJson(n[t]) : null : n[t]);
        return JSON.stringify(i)
    },
    getSessionMobEventObj: {
        invites: null,
        ipdef: null,
        device: null,
        ct: null,
        visit: null,
        sessionId: null,
        wm: null,
        init: function(n, t, i, r, u, f) {
            this.invites = n;
            this.ipdef = t;
            this.device = i;
            this.ct = r;
            this.visit = u;
            this.sessionId = f
        },
        handleEvent: function(n) {
            var t, i;
            try {
                n.origin.indexOf(iPerceptions.Wrapper.iFrameUrl) >= 0 && (t = JSON.parse(n.data), "universalgetsessionMob" == t.source && (i = t.value, iPerceptions.ipEngine.displayInvite(this.invites, this.ipdef, this.device, this.ct, this.visit, this.sessionId, i), window.removeEventListener("message", iPerceptions.ipEngine.getSessionMobEventObj)))
            } catch (n) {}
        }
    },
    getIpeStorage: function(n, t, i, r, u, f) {
        try {
            var e = iPerceptions.Wrapper,
                o = document.getElementById(e.frameId).contentWindow;
            iPerceptions.ipEngine.getSessionMobEventObj.init(n, t, i, r, u, f);
            o.postMessage(JSON.stringify({
                key: this.getMobileIconKey(),
                method: "getsessionMob"
            }), "*");
            e.addEvent("message", iPerceptions.ipEngine.getSessionMobEventObj, !1)
        } catch (s) {}
    },
    getMainDomain: function(n) {
        var t = n.substring(n.indexOf("://") + 3);
        return t.split("/")[0].split(":")[0]
    },
    getMobileIconKey: function() {
        var n = !1,
            t = iPerceptions.Wrapper;
        return typeof ipDef == "object" && typeof ipDef.CheckMobileDomain != "undefined" && (n = ipDef.CheckMobileDomain), n ? "IPE_WM_" + t.companyId + "_" + this.getMainDomain(window.location.href) : "IPE_WM_" + t.companyId
    },
    getFov: function() {
        var n = iPerceptions.Wrapper,
            i = "ipe_" + n.companyId + "_fov",
            t = n.getCookie(i);
        if (t) try {
            return JSON.parse(t).numberOfVisits
        } catch (r) {}
        return 0
    },
    setFovCookie: function() {
        var t = iPerceptions.Wrapper,
            u = t.getCookie("ipe_s"),
            f = "ipe_" + t.companyId + "_fov",
            n = t.getCookie(f),
            e, i, r;
        n ? (n = JSON.parse(n), r = new Date, n.lastVisit = n.lastVisit ? new Date(n.lastVisit) : r, (n.sessionId != u || (r - n.lastVisit) / 36e5 > 24) && (n.numberOfVisits++, n.sessionId = u), n.lastVisit = r, t.setCookie(f, JSON.stringify(n), new Date(n.expiry).toUTCString())) : (e = 30, i = new Date, typeof ipDef.FovCookieDays == "number" && (e = ipDef.FovCookieDays), i.setDate(i.getDate() + e), n = {
            numberOfVisits: 1,
            sessionId: u,
            expiry: i,
            lastVisit: new Date
        }, t.setCookie(f, JSON.stringify(n), i.toUTCString()))
    }
};