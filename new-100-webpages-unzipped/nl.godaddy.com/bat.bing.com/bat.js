function UET(o) {
    this.stringExists = function(n) {
        return n && n.length > 0
    };
    this.domain = "bat.bing.com";
    this.URLLENGTHLIMIT = 4096;
    this.pageLoadEvt = "pageLoad";
    this.customEvt = "custom";
    this.pageViewEvt = "page_view";
    o.Ver = o.Ver !== undefined && (o.Ver === "1" || o.Ver === 1) ? 1 : 2;
    this.uetConfig = {};
    this.beaconParams = {};
    this.supportsCORS = this.supportsXDR = !1;
    this.paramValidations = {
        string_currency: {
            type: "regex",
            regex: /^[a-zA-Z]{3}$/,
            error: "{p} value must be ISO standard currency code"
        },
        number: {
            type: "num",
            digits: 3,
            max: 999999999999
        },
        integer: {
            type: "num",
            digits: 0,
            max: 999999999999
        },
        hct_los: {
            type: "num",
            digits: 0,
            max: 30
        },
        date: {
            type: "regex",
            regex: /^\d{4}-\d{2}-\d{2}$/,
            error: "{p} value must be in YYYY-MM-DD date format"
        },
        "enum": {
            type: "enum",
            error: "{p} value must be one of the allowed values"
        },
        array: {
            type: "array",
            error: "{p} must be an array with 1+ elements"
        }
    };
    this.knownParams = {
        event_action: {
            beacon: "ea"
        },
        event_category: {
            beacon: "ec"
        },
        event_label: {
            beacon: "el"
        },
        event_value: {
            type: "number",
            beacon: "ev"
        },
        page_title: {},
        page_location: {},
        page_path: {},
        ecomm_prodid: {
            beacon: "prodid"
        },
        ecomm_pagetype: {
            type: "enum",
            values: ["home", "searchresults", "category", "product", "cart", "purchase", "other"],
            beacon: "pagetype"
        },
        ecomm_totalvalue: {
            type: "number"
        },
        ecomm_category: {},
        ecomm_query: {},
        ecomm_exp: {},
        hct_base_price: {
            type: "number"
        },
        hct_booking_xref: {},
        hct_checkin_date: {
            type: "date"
        },
        hct_checkout_date: {
            type: "date"
        },
        hct_length_of_stay: {
            type: "hct_los"
        },
        hct_partner_hotel_id: {},
        hct_total_price: {
            type: "number"
        },
        hct_pagetype: {
            type: "enum",
            values: ["home", "searchresults", "offerdetail", "conversionintent", "conversion", "property", "cart", "purchase", "cancel", "other"]
        },
        travel_destid: {},
        travel_originid: {},
        travel_pagetype: {
            type: "enum",
            values: ["home", "searchresults", "offerdetail", "conversionintent", "conversion", "cancel", "other"]
        },
        travel_startdate: {
            type: "date"
        },
        travel_enddate: {
            type: "date"
        },
        travel_totalvalue: {
            type: "number"
        },
        flight_destid: {},
        flight_originid: {},
        flight_pagetype: {
            type: "enum",
            values: ["home", "searchresults", "offerdetail", "cart", "purchase", "cancel", "other"]
        },
        flight_startdate: {
            type: "date"
        },
        flight_enddate: {
            type: "date"
        },
        flight_totalvalue: {
            type: "number"
        },
        affiliation: {},
        brs_response_id: {},
        checkout_option: {},
        checkout_step: {
            type: "integer"
        },
        content_id: {},
        content_type: {},
        coupon: {},
        currency: {
            type: "string_currency",
            beacon: "gc"
        },
        description: {},
        fatal: {},
        method: {},
        name: {},
        revenue_value: {
            type: "number",
            beacon: "gv"
        },
        screen_name: {},
        search_term: {},
        shipping: {
            type: "number"
        },
        tax: {
            type: "number"
        },
        transaction_id: {},
        items: {
            type: "array"
        },
        "items.brand": {},
        "items.category": {},
        "items.creative_name": {},
        "items.creative_slot": {},
        "items.id": {},
        "items.list_name": {},
        "items.list_position": {
            type: "integer"
        },
        "items.location_id": {},
        "items.name": {},
        "items.price": {
            type: "number"
        },
        "items.quantity": {
            type: "number"
        },
        "items.variant": {},
        promotions: {
            type: "array"
        },
        "promotions.creative_name": {},
        "promotions.creative_slot": {},
        "promotions.id": {},
        "promotions.name": {}
    };
    this.knownEvents = {
        add_payment_info: [],
        add_to_cart: ["revenue_value", "currency", "items"],
        add_to_wishlist: ["revenue_value", "currency", "items"],
        begin_checkout: ["revenue_value", "currency", "items", "coupon"],
        checkout_progress: ["revenue_value", "currency", "items", "coupon", "checkout_step", "checkout_option"],
        exception: ["description", "fatal"],
        generate_lead: ["revenue_value", "currency", "transaction_id"],
        login: ["method"],
        page_view: ["page_title", "page_location", "page_path"],
        purchase: ["transaction_id", "revenue_value", "currency", "tax", "shipping", "items", "coupon"],
        refund: ["transaction_id", "revenue_value", "currency", "tax", "shipping", "items"],
        remove_from_cart: ["revenue_value", "currency", "items"],
        screen_view: ["screen_name"],
        search: ["search_term"],
        select_content: ["items", "promotions", "content_type", "content_id"],
        set_checkout_option: ["checkout_step", "checkout_option"],
        share: ["method", "content_type", "content_id"],
        sign_up: ["method"],
        view_item: ["items"],
        view_item_list: ["items"],
        view_promotion: ["promotions"],
        view_search_results: ["search_term"]
    };
    this.pageLevelParams = {};
    this.legacyValidCustomEventKeyNames = {
        ec: 1,
        el: 1,
        ev: 1,
        ea: 1,
        gv: 1,
        gc: 1,
        prodid: 1,
        pagetype: 1
    };
    this.ambiguousValidCustomEventKeyNames = {
        ecomm_prodid: 1,
        ecomm_pagetype: 1
    };
    this.validRetailPageTypeValues = {
        home: 1,
        searchresults: 1,
        category: 1,
        product: 1,
        cart: 1,
        purchase: 1,
        other: 1
    };
    this.invalidKeyException = "Invalid data: Key Name: ";
    this.invalidEventException = "Invalid event type: Event Type: ";
    this.invalidPageTypeException = "Invalid pagetype value: ";
    this.invalidProdIdException = "The prodid value must be within 1 to 50 characters.";
    this.missingPageTypeException = "The pagetype parameter is required when you include the prodid parameter.";
    this.goalCurrencyFormatException = "gc value must be ISO standard currency code";
    this.missingHotelParametersException = "The hotel total price (hct_total_price) and currency parameters are required when you include other hotel parameters.";
    this.hotelVariableRevenueException = "The variable revenue parameter (revenue_value) cannot be sent when you include other hotel parameters.";
    this.evq = o.q instanceof Array ? o.q : [];
    this.evqDispatch = !1;
    this.pageLoadDispatch = !1;
    this.documentLoaded = !!document.body;
    this.eventPushQueue = [];
    var n = this;
    this.domainName = null;
    this.msClkIdCookieName = "_uetmsclkid";
    this.msClkIdCookieValuePrefix = "_uet";
    this.msClkIdParamName = "msclkid";
    this.msClkIdExpirationTime = 7776e3;
    this.lengthMsClkId = 32;
    this.msClkId = null;
    this.previousPage = null;
    this.checkuetHostdocumentload = function() {
        if (this.documentLoaded = !!document.body, n.documentLoaded) {
            if (n.eventPushQueue.length > 0) {
                for (var t = 0; t < n.eventPushQueue.length; t++) n._push(n.eventPushQueue[t]);
                n.eventPushQueue = []
            }
        } else setTimeout(function() {
            n.checkuetHostdocumentload()
        }, 5)
    };
    this.checkuetHostdocumentload();
    this.loadConfig = function() {
        var n, u, i, r, t;
        this.uetConfig.cookieAllowed = !0;
        o.storeConvTrackCookies === !1 && (this.uetConfig.cookieAllowed = !1);
        this.uetConfig.navTimingApi = !1;
        o.navTimingApi === !0 && (this.uetConfig.navTimingApi = !0);
        this.uetConfig.errorBeaconLevel = 0;
        o.hasOwnProperty("errorBeaconLevel") && (n = o.errorBeaconLevel, typeof n == "number" && n % 1 == 0 && n >= 0 && n <= 2 && (this.uetConfig.errorBeaconLevel = n));
        this.uetConfig.disableAutoPageView = !1;
        o.disableAutoPageView === !0 && (this.uetConfig.disableAutoPageView = !0);
        this.uetConfig.removeQueryFromUrls = !1;
        o.removeQueryFromUrls === !0 && (this.uetConfig.removeQueryFromUrls = !0);
        window.XMLHttpRequest !== undefined && "withCredentials" in new XMLHttpRequest && (this.supportsCORS = !0);
        typeof XDomainRequest != "undefined" && (this.supportsXDR = !0);
        u = window.location.protocol;
        i = 0;
        o.Ver === 1 && o.advertiserId !== undefined && (i = o.advertiserId);
        this.postURL = u + "//" + this.domain + "/action/" + i;
        this.urlPrefix = this.postURL + "?";
        this.errPrefix = u + "//" + this.domain + "/action-err/" + i + "?";
        o.Ver !== 1 ? (this.stringExists(o.tagId) && !this.stringExists(o.ti) && (o.ti = o.tagId), r = {
            ti: 0,
            Ver: 0,
            tm: 1,
            Tag: 0,
            EXT_Data: 0
        }) : r = {
            Ver: 0,
            tagId: 0,
            Tag: 0,
            Sig: 0,
            EXT_Data: 0
        };
        for (t in o) r.hasOwnProperty(t) && (this.beaconParams[t] = r[t] === 1 ? encodeURIComponent(o[t]) : o[t])
    };
    this.loadConfig();
    this.push = function() {
        var t = arguments,
            r, i, u = !1;
        if (t.length === 1)
            if (r = "event", t[0] === this.pageLoadEvt) i = [this.pageViewEvt, {}], u = !0;
            else {
                if (t[0] instanceof Array)
                    if (t[0].length > 0) t[0] = t[0][0];
                    else return;
                i = ["", t[0] || {}];
                u = !0
            }
        else if (t.length > 1 && t[0] !== this.pageLoadEvt) r = t[0], i = Array.prototype.slice.call(t, 1);
        else return;
        n.documentLoaded ? n._push([r, i, u]) : n.eventPushQueue.push([r, i, u])
    };
    this._push = function(n) {
        var r, t, u, i;
        if (n[1] instanceof Array)
            if (n[0] === "event") {
                if (r = n[1][1] || {}, t = n[1][0], t === null || t === undefined) return;
                u = t === this.pageViewEvt ? this.pageLoadEvt : this.customEvt;
                this.evt(u, t, r, n[2])
            } else if (n[0] === "set") {
            if (typeof n[1][0] != "object") return;
            for (i in n[1][0]) this.knownParams.hasOwnProperty(i) && (this.pageLevelParams[i] = n[1][0][i])
        }
    };
    this.dispatchq = function() {
        var n, t, i, r, f, e, u;
        for (this.evqDispatch = !0, i = 0; i < this.evq.length; i++)
            if (typeof this.evq[i] == "object") {
                if (r = this.evq[i], n === "set") this.push(n, r);
                else if (n === "event") {
                    f = !1;
                    for (e in this.legacyValidCustomEventKeyNames)
                        if (r.hasOwnProperty(e)) {
                            f = !0;
                            break
                        }
                    t !== undefined && (this.push(n, t, f ? {} : r), f && this.push(r))
                } else this.push(r);
                n = t = undefined
            } else typeof this.evq[i] == "string" || this.evq[i] instanceof String ? (n !== undefined && t !== undefined && (this.push(n, t, {}), n = t = undefined), u = this.evq[i], n === undefined && (u === "set" || u === "event") ? n = u : n !== undefined && t === undefined ? t = u : n = t = undefined, i === this.evq.length - 1 && n === "event" && t !== undefined && this.push(n, t, {})) : n = t = undefined
    };
    this.invisibleDiv = null;
    this.invisibleFrame = null;
    this._S4 = function() {
        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
    };
    this.getGuid = function() {
        return this._S4() + this._S4() + "-" + this._S4() + "-" + this._S4() + "-" + this._S4() + "-" + this._S4() + this._S4() + this._S4()
    };
    this.beaconParams.mid = this.getGuid();
    this.stringifyToRequest = function(n, t) {
        var u = "",
            r = "",
            i;
        t && (r = t + ".");
        for (i in n) u += typeof n[i] == "object" ? this.stringifyToRequest(n[i], r + i) : r + i + "=" + n[i] + "&";
        return u
    };
    this.createInvisibleElement = function(n, t) {
        var i = document.createElement(t);
        return i.setAttribute("style", "width:0px; height:0px; display:none; visibility:hidden;"), i.id = "batBeacon" + Math.random("bat"), n.appendChild(i), i
    };
    this.createInvisibleDiv = function(n) {
        return this.invisibleDiv = this.createInvisibleElement(n, "div"), this.invisibleDiv.id
    };
    this.fireBeaconImg = function(n) {
        var t = this.createInvisibleElement(this.invisibleDiv, "img"),
            i, r;
        return t.width = 0, t.height = 0, i = Math.floor(Math.random() * 1e6), r = n + "&rn=" + i, t.setAttribute("alt", ""), o.alt && t.setAttribute("alt", o.alt), t.setAttribute("src", r), i
    };
    this.addLoadTime = function(n) {
        var t, e, r, u;
        if (window.performance && (t = window.performance.timing.domContentLoadedEventEnd, window.performance.timing.loadEventEnd && (t = window.performance.timing.loadEventEnd), t !== undefined && t !== 0 && (e = t - window.performance.timing.navigationStart, n.lt = e), this.uetConfig.navTimingApi && window.performance.timing != null)) {
            var f = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"],
                o = window.performance.timing[f[0]],
                i = o;
            for (r = 1; r < f.length; r++) u = window.performance.timing[f[r]], i += ",", i += u == null || u === 0 ? "" : u - o;
            i.length <= 150 && (n.pt = i);
            window.performance.navigation != null && (n.pn = window.performance.navigation.type + "," + window.performance.navigation.redirectCount)
        }
        return n
    };
    this.hashCode = function(n) {
        var t = 0,
            i, r;
        if (n.length === 0) return t;
        for (i = 0; i < n.length; i++) r = n.charCodeAt(i), t = (t << 5) - t + r, t = t & t;
        return t
    };
    this.addPluginData = function(n) {
        for (var r, u, t, f = [], i = 0; i < window.navigator.plugins.length; i++) f.push({
            name: window.navigator.plugins[i].name
        });
        for (r = f.sort(function(n, t) {
                return n.name > t.name ? 1 : n.name < t.name ? -1 : 0
            }), u = "", t = 0; t < r.length; t++) u += r[t].name;
        return n.pi = this.hashCode(u), n
    };
    this.addFraudSignals = function(n) {
        n = this.addPluginData(n);
        var t = window.navigator.userLanguage || window.navigator.language;
        return this.stringExists(t) && (n.lg = t), screen && (screen.width && (n.sw = screen.width), screen.height && (n.sh = screen.height), screen.colorDepth && (n.sc = screen.colorDepth)), n
    };
    this.addUrlData = function(n) {
        var u, i, r, t, f, e;
        if (window.self != window.top) try {
            for (u = 0, i = window.self; u <= 5 && i != null && i != window.top; u++, i = i.parent)
                if (i.document != null && this.stringExists(i.document.referrer) && i.document.referrer.toLowerCase() !== "about:blank") {
                    t = i.document.referrer;
                    this.uetConfig.removeQueryFromUrls === !0 && (t = t.split("?")[0]);
                    n.p = encodeURIComponent(t);
                    n.r = "";
                    break
                }
        } catch (o) {} else r = window.document.referrer, t = window.location.href, this.uetConfig.removeQueryFromUrls === !0 && (t = t.split("?")[0], r = r.split("?")[0]), f = window.location.hash, e = t.indexOf(f) >= 0 ? t : t + f, n.p = encodeURIComponent(e), n.r = encodeURIComponent(r);
        return n
    };
    this.extractMsClkId = function(n) {
        this.stringExists(this.msClkId) || (this.msClkId = this.getQueryParam(n.p, this.msClkIdParamName))
    };
    this.addPageData = function(n, t) {
        var i, r;
        return t = t === !0, n = this.addFraudSignals(n), i = window.document.title, this.stringExists(i) && !this.stringExists(n.tl) && (n.tl = encodeURIComponent(i).replace(/%2C/gi, ",")), window.document.head.getElementsByTagName("meta").keywords && (r = window.document.head.getElementsByTagName("meta").keywords.content, this.stringExists(r) && (n.kw = encodeURIComponent(r).replace(/%2C/gi, ","))), t ? this.stringExists(this.previousPage) && !n.hasOwnProperty("r") && (n.r = this.previousPage) : (n = this.addUrlData(n), n = this.addLoadTime(n)), n
    };
    this.removeTrailingAmp = function(n) {
        var t = n.charAt(n.length - 1);
        return (t === "&" || t === "?") && (n = n.substring(0, n.length - 1)), n
    };
    this.throwError = function(n) {
        var t, i;
        if (typeof CustomEvent == "function" && (t = {
                errMsg: n,
                tagId: o.ti
            }, i = new CustomEvent("uetError", {
                detail: t
            }), window.dispatchEvent(i)), this.uetConfig.errorBeaconLevel > 0) {
            this.invisibleDiv || this.createInvisibleDiv(document.body);
            var r = this.combine(this.beaconParams, {
                    errMsg: encodeURIComponent(n)
                }),
                u = this.stringifyToRequest(r),
                f = this.removeTrailingAmp(this.errPrefix + u);
            this.fireBeaconImg(f)
        }
        throw n;
    };
    this.validateValue = function(n, t, i, r) {
        var u = 0,
            f = t,
            e = i === undefined || i === 0 ? !0 : !1;
        return t.toString().indexOf(",") !== -1 && (f = t.replace(/,/g, "")), u = parseFloat(f), (isNaN(f) || isNaN(u) || e && u.toString().indexOf(".") !== -1) && this.throwError(n + " should be " + (e ? "an integer" : "a number")), u > r ? this.throwError(n + " cannot be greater than " + r) : u < 0 ? this.throwError(n + " cannot be less than 0") : this.getDecimalPlaces(u) > i && this.throwError(n + " cannot have more than " + i + " decimal places"), u
    };
    this.validateRegex = function(n, t, i) {
        var r = n === null || n === undefined ? "" : n.toString();
        return r.match(t) || this.throwError(i), r
    };
    this.encodeParameter = function(n) {
        var t = n === null || n === undefined ? "" : n.toString();
        return t.replace(/&/gi, "%26").replace(/#/gi, "%23")
    };
    this._validateProdId = function(n) {
        return (n === null || n === undefined) && this.throwError(this.invalidProdIdException), n = n.toString(), (n.length < 1 || n.length > 50) && this.throwError(this.invalidProdIdException), n
    };
    this.validateProdId = function(n) {
        var i = "",
            t;
        if (n instanceof Array) {
            for (t = 0; t < n.length; t++) n[t] instanceof Array && this.throwError(this.invalidProdIdException), n[t] !== null && n[t] !== undefined && (i += i !== "" ? "," : "", i += encodeURIComponent(this._validateProdId(n[t])));
            i === "" && this.throwError(this.invalidProdIdException)
        } else i = encodeURIComponent(this._validateProdId(n));
        return i
    };
    this.validatePageType = function(n, t) {
        (n === null || n === undefined) && this.throwError(this.invalidPageTypeException + n);
        var i = n.toString().toLowerCase();
        return t[i] || this.throwError(this.invalidPageTypeException + i), i
    };
    this.getDecimalPlaces = function(n) {
        var i = parseFloat(n),
            t;
        return isNaN(n) || isNaN(i) ? 0 : (t = ("" + n).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/), !t) ? 0 : Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0))
    };
    this.validateParameter = function(n, t, i) {
        var r, u;
        if (t.match(/^[a-z_]{2,32}$/) || this.throwError(n + " invalid parameter name"), i.type == null || this.paramValidations[i.type] == null) return n.toString();
        r = this.paramValidations[i.type];
        switch (r.type) {
            case "regex":
                u = r.error.replace("{p}", t);
                n = this.validateRegex(n, r.regex, u);
                break;
            case "num":
                n = this.validateValue(t, n, r.digits, r.max);
                break;
            case "enum":
                n = n.toString().toLowerCase();
                n !== "" && i.values.indexOf(n) === -1 && this.throwError(r.error.replace("{p}", t));
                break;
            case "array":
                (!(n instanceof Array) || n.length < 1) && this.throwError(r.error.replace("{p}", t));
                n = this.validateParameterArray(n, t);
                break;
            default:
                n = n.toString()
        }
        return n
    };
    this.validateParameterArray = function(n, t) {
        for (var i = 0; i < n.length; i++) typeof n[i] == "object" && (n[i] = this.validateSubparams(n[i], t + "."), n[i] = this.removeTrailingAmp(this.stringifyToRequest(n[i])));
        return n.join(",")
    };
    this.validateSubparams = function(n, t) {
        var f = {},
            i, u, r;
        for (i in n)
            if (this.knownParams.hasOwnProperty(t + i) && n[i] != null) {
                if (u = this.knownParams[t + i], r = this.validateParameter(n[i], i, u), typeof r == "string" || r instanceof String) {
                    if (r === "") continue;
                    r = encodeURIComponent(r)
                }
                f[u.hasOwnProperty("beacon") ? u.beacon : i] = r
            }
        return f
    };
    this.eventBasicChecks = function(n, t) {
        n || this.throwError(this.invalidEventException + "undefined event.");
        n !== this.pageLoadEvt && n !== this.customEvt && this.throwError(this.invalidEventException + n);
        t || this.throwError("undefined data object passed to validate");
        typeof t != "object"
    };
    this.validateDataObjectNew = function(n, t) {
        var u, f, e, r, i;
        if (this.eventBasicChecks(n, t), !t.hasOwnProperty("ecomm_prodid") || t.ecomm_prodid == null || typeof t.ecomm_prodid == "string" && t.ecomm_prodid.toString() === "" || (t.ecomm_prodid = this.validateProdId(t.ecomm_prodid)), u = t.event_action, u != null && this.knownEvents.hasOwnProperty(u)) {
            f = this.knownEvents[u];
            for (e in f) r = f[e], this.pageLevelParams.hasOwnProperty(r) && !t.hasOwnProperty(r) && (t[r] = this.pageLevelParams[r])
        }
        return i = this.validateSubparams(t, ""), !i.hasOwnProperty("pagetype") && i.hasOwnProperty("prodid") && this.throwError(this.missingPageTypeException), (i.hasOwnProperty("hct_base_price") || i.hasOwnProperty("hct_booking_xref") || i.hasOwnProperty("hct_pagetype") || i.hasOwnProperty("hct_checkin_date") || i.hasOwnProperty("hct_checkout_date") || i.hasOwnProperty("hct_length_of_stay") || i.hasOwnProperty("hct_partner_hotel_id")) && (i.hasOwnProperty("hct_total_price") && i.hasOwnProperty("gc") || this.throwError(this.missingHotelParametersException)), i.hasOwnProperty("hct_total_price") && i.hasOwnProperty("gv") && this.throwError(this.hotelVariableRevenueException), i
    };
    this.validateDataObject = function(n, t) {
        var i, r, u, f;
        this.eventBasicChecks(n, t);
        for (i in t) n === this.customEvt && (this.legacyValidCustomEventKeyNames[i] || this.ambiguousValidCustomEventKeyNames[i]) || this.throwError(this.invalidKeyException + i);
        t.hasOwnProperty("ev") > 0 && (t.ev = this.validateValue("ev", t.ev, 3, 999999999999));
        t.hasOwnProperty("gv") > 0 && (t.gv = this.validateValue("gv", t.gv, 3, 999999999999));
        t.hasOwnProperty("gc") > 0 && (t.gc = this.validateRegex(t.gc, /^[a-zA-Z]{3}$/, this.goalCurrencyFormatException));
        t.hasOwnProperty("ec") > 0 && t.ec !== null && t.ec !== undefined && (r = encodeURIComponent(t.ec), t.ec = this.encodeParameter(t.ec), t.ec !== r && (t.ec2 = r));
        t.hasOwnProperty("ea") > 0 && t.ea !== null && t.ea !== undefined && (u = encodeURIComponent(t.ea), t.ea = this.encodeParameter(t.ea), t.ea !== u && (t.ea2 = u));
        t.hasOwnProperty("el") > 0 && t.el !== null && t.el !== undefined && (f = encodeURIComponent(t.el), t.el = this.encodeParameter(t.el), t.el !== f && (t.el2 = f));
        t.hasOwnProperty("ecomm_prodid") > 0 && (t.prodid = t.ecomm_prodid, delete t.ecomm_prodid);
        t.hasOwnProperty("ecomm_pagetype") > 0 && (t.pagetype = t.ecomm_pagetype, delete t.ecomm_pagetype);
        t.hasOwnProperty("pagetype") && (t.pagetype == null || t.pagetype.toString() === "") && delete t.pagetype;
        t.hasOwnProperty("prodid") && (t.prodid == null || typeof t.prodid == "string" && t.prodid === "") && delete t.prodid;
        t.hasOwnProperty("pagetype") > 0 ? (t.pagetype = this.validatePageType(t.pagetype, this.validRetailPageTypeValues), t.hasOwnProperty("prodid") > 0 && (t.prodid = this.validateProdId(t.prodid))) : t.hasOwnProperty("prodid") > 0 && this.throwError(this.missingPageTypeException)
    };
    this.evt = function(n, t, i, r) {
        var e, l, a, o, s, u, h, f, v, c;
        if (r = r !== !1, i = i || {}, this.uetConfig.disableAutoPageView === !0 && this.evqDispatch === !1 && this.dispatchq(), typeof i == "object") {
            if (r ? this.validateDataObject(n, i) : (i.event_action = t, i = this.validateDataObjectNew(n, i)), n === this.customEvt) {
                e = [];
                for (l in i) e.push(l);
                if (e.length === 0) return;
                r || (i.en = "Y")
            } else if (n === this.pageLoadEvt) {
                if (i.ea != null && this.knownEvents.hasOwnProperty(i.ea)) {
                    a = this.knownEvents[i.ea];
                    for (o in i) a.indexOf(o) === -1 && delete i[o]
                }
                if (s = !r && i.hasOwnProperty("page_path"), s) {
                    if (i.spa = "Y", this.pageLoadDispatch === !1 ? (u = {}, u = this.addPageData(u, !1), this.stringExists(u.p) && (this.previousPage = u.p), i.r = u.r, i.lt = u.lt, u.hasOwnProperty("pt") && (i.pt = u.pt), u.hasOwnProperty("pn") && (i.pn = u.pn)) : this.beaconParams.mid = this.getGuid(), i.hasOwnProperty("page_title") && (i.tl = i.page_title, delete i.page_title), this.stringExists(this.previousPage)) {
                        if (h = this.previousPage.toUpperCase(), f = h.indexOf("%3A%2F%2F"), f === -1) return;
                        v = i.page_path.substring(0, 3).toUpperCase() === "%2F";
                        v ? (f += 9, c = h.indexOf("%2F", f), i.p = c === -1 ? this.previousPage + i.page_path : this.previousPage.substring(0, c) + i.page_path) : i.p = this.previousPage
                    }
                } else {
                    if (this.pageLoadDispatch === !0) return;
                    if (this.uetConfig.disableAutoPageView === !0 && r) return
                }
                this.pageLoadDispatch === !1 && (this.pageLoadDispatch = !0);
                i = this.addPageData(i, s);
                this.stringExists(i.p) && (this.previousPage = i.p)
            }
            this.invisibleDiv || this.createInvisibleDiv(document.body);
            i.evt = n;
            window.self != window.top && (i.ifm = 1);
            i = this.addMsClkId(i);
            this.fireBeacon(i);
            i.abf = !0;
            n === this.pageLoadEvt && this.evqDispatch === !1 && this.dispatchq()
        }
    };
    this.removeLocalStorageBackup = function(n) {
        try {
            localStorage.removeItem(n + "_exp");
            localStorage.removeItem(n)
        } catch (t) {}
    };
    this.getLocalStorageBackup = function(n, t) {
        var r, i;
        try {
            return (r = localStorage.getItem(n + "_exp"), r == null) ? null : new Date > new Date(r) ? (this.removeLocalStorageBackup(n), null) : (i = localStorage.getItem(n), i == null || i.length > t ? null : i)
        } catch (u) {
            return null
        }
    };
    this.getCookie = function(n, t, i) {
        var r, u, e, f, o;
        if (!this.stringExists(n) || !this.stringExists(t) || (r = document.cookie, r.length === 0)) return null;
        for (e = 0; e < r.length;) {
            if (u = r.indexOf(n + "=" + t, e), u < 0) return null;
            if (u > 0 && r[u - 1] !== " " && r[u - 1] !== ";") e = u + n.length + 1;
            else break
        }
        return (f = r.indexOf(";", u), f = f >= 0 ? f : r.length, o = r.substring(u + n.length + 1 + t.length, f), o.length > i) ? null : o
    };
    this._setCookie = function(n, t, i, r) {
        document.cookie = n + "=" + t + ";expires=" + i + (r ? ";domain=." + r : "") + ";path=/"
    };
    this.setCookie = function(n, t, i, r, u, f, e) {
        var s, l, c, h, o;
        if (!this.stringExists(n) || !this.stringExists(f) || !this.stringExists(t) || t.length > e) return null;
        if (s = new Date, s.setTime(s.getTime() + i * 1e3), l = new Date, l.setTime(0), u) try {
            localStorage.setItem(n, t);
            localStorage.setItem(n + "_exp", s.toUTCString())
        } catch (a) {}
        if (this.domainName === null || r) {
            if (c = document.location && document.location.hostname, c && typeof c == "string" && c !== "localhost")
                for (h = c.split("."), o = h.pop(), h.length === 3 && Number(o) >= 0 && (h = []); h.length > 0;)
                    if (o = h.pop() + "." + o, r && (this._setCookie(n, "", l.toUTCString(), o), r = !!this.getCookie(n, f, e)), !r && (this._setCookie(n, f + t, s.toUTCString(), o), this.getCookie(n, f, e))) {
                        this.domainName = o;
                        return
                    }
            this.domainName = ""
        }
        this._setCookie(n, f + t, s.toUTCString(), this.domainName)
    };
    this.getQueryParam = function(n, t) {
        if (!this.stringExists(n) || !this.stringExists(t) || /[^\d\w]/.exec(t)) return null;
        try {
            n = decodeURIComponent(n)
        } catch (u) {}
        var i = new RegExp("[?&]" + t + "=([^&#]*)", "i"),
            r = i.exec(n) || [, null];
        return r[1]
    };
    this.addMsClkId = function(n) {
        if (o.Ver < 2 || this.uetConfig.cookieAllowed === !1) return n;
        this.extractMsClkId(this.addUrlData({}));
        var i = "0",
            t = this.getCookie(this.msClkIdCookieName, this.msClkIdCookieValuePrefix, this.lengthMsClkId);
        return this.stringExists(t) || (t = this.getLocalStorageBackup(this.msClkIdCookieName, this.lengthMsClkId)), this.stringExists(this.msClkId) ? t !== this.msClkId && (i = "1") : this.msClkId = t, this.stringExists(this.msClkId) ? (this.setCookie(this.msClkIdCookieName, this.msClkId, this.msClkIdExpirationTime, !0, !0, this.msClkIdCookieValuePrefix, this.lengthMsClkId), this.getCookie(this.msClkIdCookieName, this.msClkIdCookieValuePrefix, this.lengthMsClkId) !== this.msClkId && (i += "N"), n.msclkid = encodeURIComponent(this.msClkId + "-" + i)) : n.msclkid = "N", n
    };
    this.clone = function(n, t) {
        t === undefined && (t = {});
        for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i]);
        return t
    };
    this.combine = function(n, t) {
        var i = this.clone(n);
        return i.alt && delete i.alt, this.clone(t, i)
    };
    this.fireBeacon = function(n) {
        for (var i, e = this.urlPrefix, s = this.postURL, t = this.combine(this.beaconParams, n), u = this.stringifyToRequest(t), f = this.removeTrailingAmp(e + u), o = ["r", "el2", "ec2", "ea2", "page_location", "page_path", "kw", "p", "tl", "items"], r = 0; encodeURI(f).length > this.URLLENGTHLIMIT && o.length > r; r++)(i = o[r], i in t) && (r == 0 ? t[i] = t[i].split("?")[0] : r <= 3 ? t[i] = "" : delete t[i], u = this.stringifyToRequest(t), f = this.removeTrailingAmp(e + u));
        this.fireBeaconImg(f)
    }
}