window.__adroll || (function() {
    function h() {
        this.exp = 8760;
        this.eexp = 720;
        this.pv = 1E11 * Math.random();
        this.__adc = "__ar_v4";
        this._nad = 0;
        this._lce = null;
        this._loaded = this._broken = !1;
        this._url = 2E3;
        this._kwl = 300;
        this._r = {};
        this.cm_urls = [];
        this._logs = [];
        this.consent_networks = {
            facebook: "f",
            linkedin: "linkedin"
        };
        for (var a = Array(4), b = 0; b < a.length; b++) a[b] = (Math.round(1E11 * Math.random()).toString(16) + Array(9).join("0")).substr(0, 8);
        this._set_global("adroll_sid", a.join(""));
        this.load_experiment_js()
    };
    h.prototype.load_consent_banner = function() {
        this.add_script_element("s.adroll.com/j/consent.js")
    };
    h.prototype.get_consent_params = function() {
        return this.get("__adroll_consent_params")
    };
    h.prototype.set_consent_params = function(a) {
        this.set("__adroll_consent_params", a)
    };
    h.prototype.clear_consent_params = function() {
        this.del("__adroll_consent_params")
    };
    h.prototype.handle_null_consent = function(a) {
        a || ((a = this.get_consent_params()) ? this.call_consent_write(a) : this.load_consent_banner())
    };
    h.prototype.set_consent = function(a, b, c, d) {
        if (0 === arguments.length) {
            if (!this._has_global("__adroll_consent")) return;
            a = this._global("__adroll_consent")
        }
        this._set_global("__adroll_consent", a);
        this._set_global("__adroll_consent_is_gdpr", c);
        d && this._set_global("__adroll_consent_user_country", d);
        null === a ? this.handle_null_consent(b) : (b || this.clear_consent_params(), !1 !== a && (this.set_first_party_cookie(), this.call_next_tpc()))
    };
    h.prototype.cookieEnabled = function(a) {
        if (this._global("adroll_ext_network") || this._global("adroll_optout") || this._broken) return !1;
        if (2 <= this._nad || a) return this._lce;
        this.set("_te_", "1");
        return "1" === this.get("_te_") ? (this.del("_te_"), 0 < this._nad && !this.get(this.__adc) ? this._lce = !1 : this._lce = !0) : this._lce = !1
    };
    h.prototype.get = function(a) {
        var b = window.document.cookie;
        if (null === b) return this._broken = !0, null;
        var c;
        0 > b.indexOf(a + "=") ? b = null : (a = b.indexOf(a + "=") + a.length + 1, c = b.indexOf(";", a), -1 === c && (c = b.length), b = b.substring(a, c), b = "" === b ? null : window.unescape(b));
        return b
    };
    h.prototype.set = function(a, b, c) {
        var d;
        c && "number" === typeof c ? (d = new Date, d.setTime(d.getTime() + 36E5 * c), c = d.toGMTString(), c = "; expires=" + c) : c = "";
        d = "; domain=" + window.location.hostname;
        b = window.escape(b);
        window.document.cookie = a + "=" + b + c + "; path=/" + d + "; samesite=lax"
    };
    h.prototype.del = function(a) {
        this.set(a, "", -8760)
    };
    h.prototype.check_cookie = function(a, b) {
        if (this._global("adroll_ext_network") || this._global("adroll_optout")) return "";
        for (var c = a.split("|"), d = c.length - 1; 0 <= d; d--)
            if (c[d]) {
                var e = c[d].split(":");
                b === e[0] && (e[2] = "" + (parseInt(e[2]) + 1), c[d] = e.join(":"))
            }
        return c.join("|")
    };
    h.prototype.handle = function(a) {
        var b = this.get(this.__adc) || ""; - 1 !== b.indexOf(a) ? this.set(this.__adc, this.check_cookie(b, a), this.exp) : (a = [b, [a, this.get_date(this.eexp), "1"].join(":")].join("|"), this.set(this.__adc, a, this.exp))
    };
    h.prototype.expire_old = function() {
        if (!this._global("adroll_ext_network") && !this._global("adroll_optout")) {
            for (var a = this.get_date(!1), b = this.get(this.__adc), b = b ? b.split("|") : [""], c = [], d = b.length - 1; 0 <= d; d--) b[d] && b[d].split(":")[1] > a && c.push(b[d]);
            this.set(this.__adc, c.join("|"), this.exp)
        }
    };
    h.prototype.get_date = function(a) {
        var b = new Date;
        a && b.setTime(b.getTime() + 36E5 * a);
        a = "" + b.getUTCFullYear();
        var c = b.getUTCMonth(),
            c = 10 <= c ? c : "0" + c,
            b = b.getUTCDate();
        return [a, c, 10 <= b ? b : "0" + b].join("")
    };
    h.prototype.consent_allowed = function(a) {
        var b = this._global("__adroll_consent");
        return "object" === typeof b ? b[a] : b
    };
    h.prototype.generate_link = function() {
        return ""
    };
    h.prototype.view = function(a) {
        var b = new window.Image;
        b.src = this._srv("/view/" + a);
        b.setAttribute("width", "1");
        b.setAttribute("height", "1");
        b.setAttribute("border", "0");
        this._head().appendChild(b)
    };
    h.prototype.set_cookie = function() {};
    h.prototype.reset = function() {
        this._set_global("adroll_c_id", null);
        this._set_global("adroll_url_macro", "");
        this._set_global("adroll_c_macro", "");
        this._set_global("adroll_cpm_macro", "");
        this._set_global("adroll_ext_network", null);
        this._set_global("adroll_subnetwork", null);
        this._set_global("adroll_ad_payload", null);
        this._set_global("adroll_win_notif", null)
    };
    h.prototype.set_pixel_cookie = function(a, b, c) {
        this._global("adroll_optout") || (this.handle(a), this.handle(b), this.handle(c), this.pixel_loaded())
    };
    h.prototype.add_pixel_load_callback = function(a) {
        this._loaded ? a() : this._ensure_global("adroll_callbacks", []).push(a)
    };
    h.prototype.pixel_loaded = function() {
        this._loaded = !0;
        for (var a = this._ensure_global("adroll_callbacks", []), b = 0; b < a.length; b++) a[b].called || (a[b](), a[b].called = !0)
    };
    h.prototype.addLoadEvent = function(a) {
        if (this._has_global("__adroll_loaded") && this._global("__adroll_loaded") || this._has_global("_adroll_ie") && this._global("_adroll_ie") || /msie/i.test(window.navigator.userAgent)) return a();
        if (/WebKit/i.test(window.navigator.userAgent)) {
            var b = window.setInterval(function() {
                /loaded|complete/.test(window.document.readyState) && window.clearInterval(b);
                a()
            }, 10);
            return null
        }
        var c = window.onload;
        window.onload = function() {
            a();
            c && c()
        }
    };
    h.prototype._head = function() {
        return (window.document.getElementsByTagName("head") || [null])[0] || (window.document.getElementsByTagName("body") || [null])[0] || window.document.getElementsByTagName("script")[0].parentNode
    };
    h.prototype.listenToEvent = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, this.wrapException(c), !1) : a.attachEvent("on" + b, this.wrapException(c))
    };
    h.prototype.runCookieMatch = function() {
        var a = this.cm_urls.length;
        if (!(0 >= a))
            for (var b = 0; b <= a; b++) this.popAndSend()
    };
    h.prototype.popAndSend = function() {
        if (!(0 >= this.cm_urls.length)) {
            var a = this.cm_urls.shift();
            (new Image).src = a
        }
    };
    h.prototype.add_param_to_url = function(a, b) {
        var c = a.indexOf("?"),
            d = "",
            e = ""; - 1 !== c ? (d = a.slice(0, c + 1), e = "&" + a.slice(c + 1)) : (c = a.indexOf("#", -1 === c ? 0 : c), -1 === c ? d = a + "?" : (d = a.slice(0, c) + "?", e = a.slice(c)));
        return d + b + e
    };
    h.prototype.is_under_experiment = function(a) {
        return window.adroll_exp_list && 0 <= window.adroll_exp_list.indexOf(a)
    };
    h.prototype.load_experiment_js = function() {
        var a = window.document.getElementById("adroll_scr_exp");
        return a ? a : this.add_script_element("https://s.adroll.com/j/exp/" + window.adroll_adv_id + "/index.js", {
            id: "adroll_scr_exp",
            onError: "window.adroll_exp_list = [];"
        })
    };
    h.prototype.is_experiment_js_loaded = function() {
        return !!window.adroll_exp_list
    };
    h.prototype.is_test_advertisable = function() {
        return "ADV_EID" === this._global("adroll_adv_id")
    };
    h.prototype.if_under_experiment_js = function(a, b, c, d) {
        var e = this;
        this.load_experiment_js();
        this.on_experiment_loaded(function() {
            e.is_under_experiment(a) ? b.call(e) : c.call(e)
        }, d)
    };
    h.prototype.on_experiment_loaded = function(a, b) {
        function c() {
            if (e.is_experiment_js_loaded() || e.is_test_advertisable()) d = !0;
            d ? a.call(e) : window.setTimeout(c, 10)
        }
        var d = !1,
            e = this;
        window.setTimeout(function() {
            d = !0
        }, b || 500);
        c()
    };
    h.prototype.external_data_to_qs = function(a) {
        var b = [],
            c = this.get_external_data();
        if (!c) return null;
        for (var d in c) c.hasOwnProperty(d) && this._is_defined(c[d]) && null !== c[d] && b.push(this.normalize_var(window.escape("" + d) + "=" + window.escape("" + c[d]), !1));
        b = b.join("&");
        a && (b = window.escape(b));
        return "adroll_external_data=" + b
    };
    h.prototype.replace_external_data = function(a) {
        var b = this.get_external_data(),
            c = this.get_conversion_value(),
            d = null,
            e;
        if (b)
            for (e in b) b.hasOwnProperty(e) && (d = new RegExp("\\[" + e + "\\]", "gi"), a = a.replace(d, b[e]), d = new RegExp("\\[" + e + "_ESC\\]", "gi"), a = a.replace(d, window.escape(b[e])));
        if (c)
            for (e in c) c.hasOwnProperty(e) && (d = new RegExp("\\[" + e + "\\]", "gi"), a = a.replace(d, c[e]), d = new RegExp("\\[" + e + "_ESC\\]", "gi"), a = a.replace(d, window.escape(c[e])));
        return a
    };
    h.prototype.get_external_data = function() {
        if (this._has_global("adroll_custom_data")) {
            var a = this._global("adroll_custom_data"),
                b = {},
                c;
            for (c in a) a.hasOwnProperty(c) && "undefined" !== a[c] && (b[c.toLowerCase()] = a[c]);
            return b
        }
        return null
    };
    h.prototype.get_conversion_value = function() {
        var a = this._ensure_global("adroll_currency", null),
            b = this._ensure_global("adroll_conversion_value", null),
            c = this._ensure_global("adroll_conversion_value_in_dollars", null);
        return b ? {
            conv_value: "" + b,
            currency: a
        } : c ? {
            conv_value: "" + parseInt(100 * c),
            currency: "USC"
        } : null
    };
    h.prototype._has_global = function(a) {
        return this._is_defined(this._global(a))
    };
    h.prototype._global = function(a) {
        return window[a]
    };
    h.prototype._set_global = function(a, b) {
        window[a] = b
    };
    h.prototype._unset_global = function(a) {
        delete window[a]
    };
    h.prototype._ensure_global = function(a, b) {
        this._has_global(a) || this._set_global(a, b);
        return this._global(a)
    };
    h.prototype.jsonStringify = function(a) {
        this.jsonStringifyFunc || this.initJsonStringify();
        return this.jsonStringifyFunc(a)
    };
    h.prototype.jsonParse = function(a) {
        var b = this._global("JSON");
        return "function" === typeof b.parse ? b.parse(a) : eval("(" + a + ")")
    };
    h.prototype.initJsonStringify = function() {
        var a = this._global("JSON");
        this.jsonStringifyFunc = a || a.stringify && "function" === typeof a.stringify ? a.stringify : function() {
            function a(b) {
                return e[b] || "\\u" + (b.charCodeAt(0) + 65536).toString(16).substr(1)
            }
            var c = Object.prototype.toString,
                d = Array.isArray || function(a) {
                    return "[object Array]" === c.call(a)
                },
                e = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t"
                },
                m = /[\\"\u0000-\u001F\u2028\u2029]/g;
            return function q(l) {
                if (null === l) return "null";
                if ("number" === typeof l) return isFinite(l) ? l.toString() : "null";
                if ("boolean" === typeof l) return l.toString();
                if ("object" === typeof l) {
                    if ("function" === typeof l.toJSON) return q(l.toJSON());
                    if (d(l)) {
                        for (var g = "[", k = 0; k < l.length; k++) g += (k ? ", " : "") + q(l[k]);
                        return g + "]"
                    }
                    if ("[object Object]" === c.call(l)) {
                        g = [];
                        for (k in l) l.hasOwnProperty(k) && g.push(q(k) + ": " + q(l[k]));
                        return "{" + g.join(", ") + "}"
                    }
                }
                return '"' + l.toString().replace(m, a) + '"'
            }
        }()
    };
    h.prototype.macro_values = function() {
        var a = this._ensure_global("adroll_cpm_macro", null),
            b = this._ensure_global("adroll_url_macro", null),
            c = this._ensure_global("adroll_c_macro", null),
            d = this._ensure_global("adroll_subnetwork", null),
            e = this._ensure_global("adroll_ad_payload", null),
            m = this._ensure_global("adroll_win_notif", null),
            p = this._ensure_global("adroll_rtb_dict", null),
            q = {
                r: /^\$\{.*\}$/i,
                g: /^%%.*%%$/i,
                b: /^\[.*\]$/i,
                x: /^\$\{.*\}$/i,
                t: /INSERTCLICKTRACKER/
            }[this._global("adroll_ext_network")],
            q = this._is_defined(q) ?
            q : /CANNOT_MATCH_THIS/,
            l = {};
        a && !q.test(a) && (l.adroll_cpm_macro = a);
        b && !q.test(b) && (l.adroll_url_macro = b);
        c && !q.test(c) && (l.adroll_c_macro = c);
        d && !q.test(d) && (l.adroll_subnetwork = d);
        e && !q.test(e) && (l.adroll_ad_payload = e);
        m && !/^[|$]/.test(m) && (l.adroll_win_notif = m);
        if (p && ("string" !== typeof p || !/^[|$]/.test(p))) {
            if ("string" === typeof p) try {
                0 === p.indexOf("b64:") && (p = atob(p.substr(4))), p = this.jsonParse(p)
            } catch (g) {
                this.log("failed to parse: " + g), p = {}
            }
            "object" === typeof p && (l.adroll_rtb_dict = p)
        }
        return l
    };
    h.prototype.format_macros = function(a, b, c, d) {
        return this.macro_url_params(this.macro_values(), a, b, c, d)
    };
    h.prototype.macro_url_params = function(a, b, c, d, e) {
        e = this._is_defined(e) ? e : !1;
        var m = d ? window.escape : function(a) {
                return a
            },
            p = a.adroll_cpm_macro,
            q = a.adroll_url_macro,
            l = c ? a.adroll_c_macro : null,
            g = [],
            k = b ? this.parseUri(b) : null,
            k = k ? this.endswith(k.path, ".tp") : !1;
        !k && e && g.push(["desturl", ""]);
        l && 0 === l.indexOf("http") ? (e = m, "g" === this._global("adroll_ext_network") && (e = d ? function(a) {
            return a
        } : window.unescape), g.push(["clickurl", e(l)])) : k && e && g.push(["clickurl", ""]);
        this._global("adroll_ext_network") && g.push(["adroll_network",
            this._global("adroll_ext_network")
        ]);
        p && g.push(["cpm", p]);
        a.adroll_subnetwork && g.push(["adroll_subnetwork", a.adroll_subnetwork]);
        a.adroll_ad_payload && g.push(["adroll_ad_payload", a.adroll_ad_payload]);
        q && (a = this.parseUri(window.unescape(q)), g.push(["site_url", m("http://" + a.host)]), c && (g.push(["adroll_width", m(this._global("adroll_width"))]), g.push(["adroll_height", m(this._global("adroll_height"))])));
        this.log("Macros found " + this.serialize(g));
        return b ? this.buildurl(b, g) : this.serialize(g)
    };
    h.prototype.serialize = function(a) {
        if (a.length) {
            for (var b = [], c = a.length - 1; 0 <= c; c--) b.push(a[c].join("="));
            return b.join("&")
        }
        return ""
    };
    h.prototype.endswith = function(a, b) {
        return -1 !== a.indexOf(b, a.length - b.length)
    };
    h.prototype.buildurl = function(a, b) {
        var c = this.serialize(b),
            d = a.indexOf("?");
        return c ? d === a.length - 1 ? a + c : -1 !== d ? "&" === a[a.length - 1] ? a + c : a + "&" + c : a + "?" + c : a
    };
    h.prototype.md5 = function() {
        function a(a, b) {
            var c = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
        }

        function b(b, c, d, k, f, e) {
            c = a(a(c, b), a(k, e));
            return a(c << f | c >>> 32 - f, d)
        }

        function c(a, c, d, k, f, e, m) {
            return b(c & d | ~c & k, a, c, f, e, m)
        }

        function d(a, c, d, k, f, e, m) {
            return b(c & k | d & ~k, a, c, f, e, m)
        }

        function e(a, c, d, k, f, e, m) {
            return b(d ^ (c | ~k), a, c, f, e, m)
        }

        function m(m, l) {
            var g = m[0],
                k = m[1],
                f = m[2],
                n = m[3],
                g = c(g, k, f, n, l[0], 7, -680876936),
                n = c(n, g, k, f, l[1], 12, -389564586),
                f = c(f, n, g, k, l[2], 17, 606105819),
                k = c(k, f, n, g, l[3],
                    22, -1044525330),
                g = c(g, k, f, n, l[4], 7, -176418897),
                n = c(n, g, k, f, l[5], 12, 1200080426),
                f = c(f, n, g, k, l[6], 17, -1473231341),
                k = c(k, f, n, g, l[7], 22, -45705983),
                g = c(g, k, f, n, l[8], 7, 1770035416),
                n = c(n, g, k, f, l[9], 12, -1958414417),
                f = c(f, n, g, k, l[10], 17, -42063),
                k = c(k, f, n, g, l[11], 22, -1990404162),
                g = c(g, k, f, n, l[12], 7, 1804603682),
                n = c(n, g, k, f, l[13], 12, -40341101),
                f = c(f, n, g, k, l[14], 17, -1502002290),
                k = c(k, f, n, g, l[15], 22, 1236535329),
                g = d(g, k, f, n, l[1], 5, -165796510),
                n = d(n, g, k, f, l[6], 9, -1069501632),
                f = d(f, n, g, k, l[11], 14, 643717713),
                k = d(k,
                    f, n, g, l[0], 20, -373897302),
                g = d(g, k, f, n, l[5], 5, -701558691),
                n = d(n, g, k, f, l[10], 9, 38016083),
                f = d(f, n, g, k, l[15], 14, -660478335),
                k = d(k, f, n, g, l[4], 20, -405537848),
                g = d(g, k, f, n, l[9], 5, 568446438),
                n = d(n, g, k, f, l[14], 9, -1019803690),
                f = d(f, n, g, k, l[3], 14, -187363961),
                k = d(k, f, n, g, l[8], 20, 1163531501),
                g = d(g, k, f, n, l[13], 5, -1444681467),
                n = d(n, g, k, f, l[2], 9, -51403784),
                f = d(f, n, g, k, l[7], 14, 1735328473),
                k = d(k, f, n, g, l[12], 20, -1926607734),
                g = b(k ^ f ^ n, g, k, l[5], 4, -378558),
                n = b(g ^ k ^ f, n, g, l[8], 11, -2022574463),
                f = b(n ^ g ^ k, f, n, l[11], 16, 1839030562),
                k = b(f ^ n ^ g, k, f, l[14], 23, -35309556),
                g = b(k ^ f ^ n, g, k, l[1], 4, -1530992060),
                n = b(g ^ k ^ f, n, g, l[4], 11, 1272893353),
                f = b(n ^ g ^ k, f, n, l[7], 16, -155497632),
                k = b(f ^ n ^ g, k, f, l[10], 23, -1094730640),
                g = b(k ^ f ^ n, g, k, l[13], 4, 681279174),
                n = b(g ^ k ^ f, n, g, l[0], 11, -358537222),
                f = b(n ^ g ^ k, f, n, l[3], 16, -722521979),
                k = b(f ^ n ^ g, k, f, l[6], 23, 76029189),
                g = b(k ^ f ^ n, g, k, l[9], 4, -640364487),
                n = b(g ^ k ^ f, n, g, l[12], 11, -421815835),
                f = b(n ^ g ^ k, f, n, l[15], 16, 530742520),
                k = b(f ^ n ^ g, k, f, l[2], 23, -995338651),
                g = e(g, k, f, n, l[0], 6, -198630844),
                n = e(n, g, k, f, l[7], 10, 1126891415),
                f = e(f, n, g, k, l[14], 15, -1416354905),
                k = e(k, f, n, g, l[5], 21, -57434055),
                g = e(g, k, f, n, l[12], 6, 1700485571),
                n = e(n, g, k, f, l[3], 10, -1894986606),
                f = e(f, n, g, k, l[10], 15, -1051523),
                k = e(k, f, n, g, l[1], 21, -2054922799),
                g = e(g, k, f, n, l[8], 6, 1873313359),
                n = e(n, g, k, f, l[15], 10, -30611744),
                f = e(f, n, g, k, l[6], 15, -1560198380),
                k = e(k, f, n, g, l[13], 21, 1309151649),
                g = e(g, k, f, n, l[4], 6, -145523070),
                n = e(n, g, k, f, l[11], 10, -1120210379),
                f = e(f, n, g, k, l[2], 15, 718787259),
                k = e(k, f, n, g, l[9], 21, -343485551);
            m[0] = a(g, m[0]);
            m[1] = a(k, m[1]);
            m[2] = a(f, m[2]);
            m[3] =
                a(n, m[3])
        }
        var p = "0123456789abcdef".split("");
        return function(a) {
            var b = a;
            /[\x80-\xFF]/.test(b) && (b = unescape(encodeURI(b)));
            var c = b.length;
            a = [1732584193, -271733879, -1732584194, 271733878];
            var d;
            for (d = 64; d <= b.length; d += 64) {
                for (var f = b.substring(d - 64, d), e = [], r = void 0, r = 0; 64 > r; r += 4) e[r >> 2] = f.charCodeAt(r) + (f.charCodeAt(r + 1) << 8) + (f.charCodeAt(r + 2) << 16) + (f.charCodeAt(r + 3) << 24);
                m(a, e)
            }
            b = b.substring(d - 64);
            f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (d = 0; d < b.length; d++) f[d >> 2] |= b.charCodeAt(d) << (d % 4 << 3);
            f[d >> 2] |=
                128 << (d % 4 << 3);
            if (55 < d)
                for (m(a, f), d = 0; 16 > d; d++) f[d] = 0;
            f[14] = 8 * c;
            m(a, f);
            for (b = 0; b < a.length; b++) {
                c = a;
                d = b;
                f = a[b];
                e = "";
                for (r = 0; 4 > r; r++) e += p[f >> 8 * r + 4 & 15] + p[f >> 8 * r & 15];
                c[d] = e
            }
            return a.join("")
        }
    }();
    h.prototype._gurl = function() {
        var a = window.location;
        return this.normalize_url(a.pathname + a.search)
    };
    h.prototype.get_dummy_product_for_facebook = function(a) {
        return {
            product_id: "adroll_dummy_product",
            product_group: a,
            product_action: null,
            product_category: null
        }
    };
    h.prototype.facebook_dummy_product_enabled = function() {
        return !0
    };
    h.prototype.extract_pid = function(a, b, c) {
        function d(a) {
            return a ? (a = new RegExp(a, "gi"), !!a.exec(l)) : null
        }
        a || (a = {});
        var e = null,
            m = null,
            p = null,
            q = null,
            l = this._gurl(),
            g = this.get_external_data();
        g && (m = g.product_id, e = g.product_group, p = g.product_action, q = g.adroll_product_category_id);
        if (!m && a.regexp_group && !("string" === a.regexp_group && a.regexp_group instanceof String) && "html" === a.regexp_group.scheme) {
            if (d(a.blacklist_regexp) || !0 !== d(a.regexp)) return "";
            m = this.get_product_id_from_dom(a.regexp_group)
        } else if (!m) {
            if (d(a.blacklist_regexp)) return "";
            m = this.get_product_id_from_url(l, a.regexp, a.regexp_group)
        }
        e || !a.product_group_group || "string" === a.product_group_group && a.product_group_group instanceof String || "html" !== a.product_group_group.scheme ? e || a.product_group_regexp && (e = this.get_product_id_from_url(l, a.product_group_regexp, a.product_group_group)) : e = this.get_product_id_from_dom(a.product_group_group);
        if (m) a = {
            product_id: m,
            product_group: e,
            product_action: p,
            product_category: q
        };
        else if (this.facebook_dummy_product_enabled() && "facebook" === b) a = this.get_dummy_product_for_facebook(e);
        else return null;
        c && c(a);
        return a
    };
    h.prototype.get_pid = function(a) {
        this.extract_pid(a, "adroll", function(a) {
            if (a) {
                var c = a.product_id,
                    d = a.product_group,
                    e = a.product_action,
                    m = a.product_category;
                a = [];
                var p;
                if (c instanceof Array)
                    for (p = 0; p < c.length; p++) a.push(["adroll_product_id", this.normalize_var((c[p] + "").toLowerCase(), !0)]);
                else a.push(["adroll_product_id", this.normalize_var((c + "").toLowerCase(), !0)]);
                if (m instanceof Array)
                    for (p = 0; p < m.length; p++) a.push(["adroll_product_category_id", this.normalize_var((m[p] + "").toLowerCase(), !0)]);
                else m &&
                    a.push(["adroll_product_category_id", this.normalize_var((m + "").toLowerCase(), !0)]);
                d && a.push(["adroll_product_group", this.normalize_var((d + "").toLowerCase(), !0)]);
                e && a.push(["adroll_product_action", this.normalize_var((e + "").toLowerCase(), !0)]);
                (c = this.external_data_to_qs(!0)) && a.push([c]);
                c = this._srv(this.buildurl("/p/" + this._global("adroll_adv_id") + "/", a));
                d = window.document.createElement("img");
                d.src = c;
                d.height = d.width = 1;
                d.border = 0;
                this._head().appendChild(d)
            }
        }.bind(this))
    };
    h.prototype.get_product_id_from_dom = function(a) {
        var b = null,
            c;
        a.path && (window.jQuery ? (c = window.jQuery(a.path), c.length && (c = c.eq(0), b = "text" === a.attribute ? c.text() : c.attr(a.attribute))) : window.Prototype && window.$$ ? (c = window.$$(a.path), c.length && (c = c[0], b = "text" === a.attribute ? c.innerText && !window.opera ? c.innerText : c.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g, " ") : c.readAttribute(a.attribute))) : window.YUI ? (c = window.YUI().use("node"), c.one && (c = c.one(a.path), b = null, c && (b = "text" === a.attribute ?
            c.get("text") : c.getAttribute(a.attribute)))) : window.$$ && (c = window.$$(a.path), c.length && (c = c[0], b = "text" === a.attribute ? c.get("text") : c.getProperty(a.attribute))));
        if (b && (b = b.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), a.regular_expression && a.regular_expression_replace))
            if (c = new RegExp(a.regular_expression, "gi"), b = c.exec(b), null !== b) {
                a = a.regular_expression_replace;
                for (c = 0; c < b.length; c++) a = a.replace(new RegExp("\\\\" + c, "gi"), b[c] || "");
                b = a
            } else b = "";
        return b
    };
    h.prototype.get_product_id_from_url = function(a, b, c) {
        var d = null;
        try {
            d = parseInt(c)
        } catch (e) {}
        return null !== d && !isNaN(d) && b && (a = (new RegExp(b, "gi")).exec(a), null !== a && d in a) ? a[d] : null
    };
    h.prototype.render_pixel_code = function(a, b) {
        var c = this;
        c._has_global("adroll_tpc") ? c.render_pixel_code_exec(a, b) : c.load_adroll_tpc(function() {
            c.render_pixel_code_exec(a, b)
        })
    };
    h.prototype.render_pixel_code_exec = function(a, b) {
        this.expire_old();
        var c = this._srv("/pixel"),
            d = window.document.createElement("script");
        d.setAttribute("async", "true");
        d.type = "text/javascript";
        var e = this.get_keywords();
        this.addLoadEvent(function(m) {
            return function() {
                var p = [];
                try {
                    200 >= window.document.referrer.length && p.push("adroll_s_ref=" + window.escape(window.document.referrer))
                } catch (f) {}
                try {
                    p.push("keyw=" + window.escape(e))
                } catch (f) {}
                try {
                    m._has_global("adroll_segments") && p.push("name=" + window.escape(m._global("adroll_segments").toLowerCase()))
                } catch (f) {}
                try {
                    m._has_global("adroll_p") &&
                        p.push("adroll_p=" + window.escape(m._global("adroll_p")))
                } catch (f) {}
                try {
                    m._has_global("adroll_u") && p.push("adroll_u=" + window.escape(m._global("adroll_u")))
                } catch (f) {}
                try {
                    m._has_global("adroll_m") && m._has_global("adroll_m_type") && (p.push("adroll_m=" + window.escape(m._global("adroll_m"))), p.push("adroll_m_type=" + window.escape(m._global("adroll_m_type"))))
                } catch (f) {}
                try {
                    var q = m.get_conversion_value();
                    q.conv_value && p.push("conv_value=" + q.conv_value);
                    q.currency && p.push("adroll_currency=" + q.currency)
                } catch (f) {}
                try {
                    if (m._has_user_identifier()) {
                        var l =
                            m._global("adroll_user_identifier"),
                            l = l.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                        p.push("user_identifier=" + window.encodeURIComponent(l))
                    }
                } catch (f) {}
                try {
                    m._has_global("adroll_shop_id") && (q = {}, m._has_global("adroll_custom_data") ? q = m._global("adroll_custom_data") : m._set_global("adroll_custom_data", q), "undefined" === typeof q.adroll_shop_id && (q.adroll_shop_id = m._global("adroll_shop_id")));
                    var g = m.external_data_to_qs(!0);
                    g && p.push(g)
                } catch (f) {}
                try {
                    var k = window.location.href.split("#")[0];
                    500 >= k.length &&
                        p.push("arrfrr=" + window.encodeURIComponent(k))
                } catch (f) {}
                p = m.get_base_url(c, a, b, null, "", p);
                d.src = p;
                m._head().appendChild(d)
            }
        }(this));
        this.addLoadEvent(function(a) {
            return function() {
                var b = a._global("adroll");
                if (b && "object" === typeof b) {
                    b.identify = function() {
                        return a.identify.apply(a, arguments)
                    };
                    b.track = function() {
                        return a.track.apply(a, arguments)
                    };
                    for (var c, d, e = 0; e < b.length; e++) c = b[e][0], d = b[e][1], "identify" === c ? a.identify.apply(a, d) : "track" === c && a.track.apply(a, d)
                }
            }
        }(this))
    };
    h.prototype.render_ad_code = function(a, b, c, d) {
        d = this._is_defined(d) ? d : null;
        if (!this._is_defined(this._r[b]) || d) {
            var e = ["width=" + this._global("adroll_width"), "height=" + this._global("adroll_height"), "x=0", "y=0"];
            if (c) this.log("Rendering test ad " + c + " in space " + b), e.push("test_ad=" + c), a = this.get_url(a, b, null, "ad", e);
            else if (d) {
                this.log("Rendering adgroup " + d);
                c = this.macro_values();
                var m = this.macro_url_params(c, !1, !1, !1, !1);
                e.push(m);
                this.render_win_notification(c);
                this.render_extra_script(c);
                a = this.get_url(a,
                    b, d, null, e)
            } else this.log("Rendering ad space " + b), a = this.get_url(a, b, null, "ad", e);
            this.expire_old();
            window.document.write('<script src="' + a + '">\x3c/script>');
            this._nad += 1;
            this._r[b] = 1
        }
    };
    h.prototype.render_win_notification = function(a) {
        if (a.adroll_cpm_macro && a.adroll_win_notif) {
            var b = (this._secure() ? "https://" : "http://") + a.adroll_win_notif + a.adroll_cpm_macro;
            a.adroll_ad_payload && (a.adroll_rtb_dict && a.adroll_rtb_dict.waap || /waap=1&/.test(a.adroll_win_notif) && !this._is_defined(a.adroll_rtb_dict)) && (b += "&ad_payload=" + a.adroll_ad_payload);
            this.imgRequest(b)
        }
    };
    h.prototype.render_extra_script = function(a) {
        a.adroll_rtb_dict && a.adroll_rtb_dict.extra_script_src && this.add_script_element(a.adroll_rtb_dict.extra_script_src, {})
    };
    h.prototype.add_script_element = function(a, b) {
        var c = window.document.createElement("script"),
            d = this._secure() ? "https://" : "http://";
        a.match(/^(\w+:)*\/\//) && (d = "");
        for (var e in b) b.hasOwnProperty(e) && "src" !== e && c.setAttribute(e, b[e]);
        c.type = "text/javascript";
        c.src = d + a;
        this._head().appendChild(c);
        return c
    };
    h.prototype.get_base_url = function(a, b, c, d, e, m) {
        var p = a.split("?");
        a = p[0] + "/" + b + "/" + c + (d ? "/" + d : "") + (e ? "/" + e : "");
        var q = "?";
        p[1] && (a += "?" + p[1], q = "&");
        var p = q + "no-cookies=1&pv=",
            l = "";
        this.cookieEnabled(!1) ? (l = window.escape(this.get_eids()), a += q + "pv=" + this.pv + "&cookie=" + l) : a += p + this.pv;
        m && (a += "&" + m.join("&"));
        a = this.add_tpc_to_url(a);
        if (a.length > this._url) {
            this.del(this.__adc);
            if (a.length - l.length > this._url) return a;
            this.log("Url was too big, shrinking it");
            return this.get_url(b, c, d, e, m)
        }
        this.log("Generated url: " +
            a);
        return a
    };
    h.prototype.get_url = function(a, b, c, d, e) {
        var m = c ? this._srv("/c") : this._srv("/r");
        return this.get_base_url(m, a, b, c, d, e)
    };
    h.prototype.get_eids = function() {
        if (this._global("adroll_ext_network") || this._global("adroll_optout")) return "";
        try {
            for (var a = this.get(this.__adc), b = a ? a.split("|") : "", a = [], c = b.length - 1; 0 <= c; c--)
                if (b[c]) {
                    var d = b[c].split(":");
                    a.push([d[0], d[2]].join(":"))
                }
            return a.join("|")
        } catch (e) {
            return this.del(this.__adc), ""
        }
    };
    h.prototype.record_user = function(a) {
        var b = "adroll_conversion_value adroll_conversion_value_in_dollars adroll_segments adroll_email adroll_user_identifier adroll_currency".split(" "),
            c, d;
        a = a || {};
        var e = {
            adroll_user_identifier: !0
        };
        for (c = 0; c < b.length; c++) {
            try {
                this._unset_global(b[c])
            } catch (m) {}
            if (b[c] in a) {
                b[c] in e ? this._set_global(b[c], window.escape(a[b[c]])) : "adroll_email" !== b[c] && this._set_global(b[c], a[b[c]]);
                try {
                    delete a[b[c]]
                } catch (m) {}
            }
        }
        try {
            this._unset_global("adroll_custom_data")
        } catch (m) {}
        for (d in a)
            if (a.hasOwnProperty(d)) {
                this._set_global("adroll_custom_data",
                    a);
                break
            }
        this.render_pixel_code(this._global("adroll_adv_id"), this._global("adroll_pix_id"))
    };
    h.prototype.record_adroll_email = function(a) {
        if (this._has_email()) {
            var b = this._global("_adroll_email"),
                b = b.replace(/^\s+|\s+$/g, ""),
                c, d = b.toLowerCase(),
                b = this.is_email_valid(b);
            this.is_already_hashed(d) ? c = d : b && (c = this.md5(d));
            c = "https://d.adroll.com/id/" + this._global("adroll_adv_id") + "/?hashed_email=" + c;
            b && (d = d.split("@")[1], c += "&email_domain=" + window.encodeURIComponent(d));
            a && (c += "&idsource=" + a);
            this.imgRequest(c)
        }
    };
    h.prototype._send_plain_text_identifiers = function(a, b, c) {
        (a || b) && c && (c = "https://d.adroll.com/id/" + this._global("adroll_adv_id") + "/?idsource=" + c, a && (a = a.replace(/^\s+|\s+$/g, "").toLowerCase(), c += "&email=" + window.encodeURIComponent(a) + "&hashed_email=" + this.md5(a), a = a.split("@")[1], c += "&email_domain=" + window.encodeURIComponent(a)), b && (c += "&user_identifier=" + window.encodeURIComponent(b)), this.imgRequest(c))
    };
    h.prototype._has_email = function() {
        return this._has_global("_adroll_email")
    };
    h.prototype._has_user_identifier = function() {
        return this._has_global("adroll_user_identifier") && "example_user_id" !== this._global("adroll_user_identifier")
    };
    h.prototype.is_already_hashed = function(a) {
        return /^[a-f0-9]{32}$/.test(a)
    };
    h.prototype.is_email_valid = function(a) {
        return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(a)
    };
    h.prototype.identify = function(a, b) {
        (a.email || a.userId) && this._send_plain_text_identifiers(a.email, a.userId, b || "adroll-identify");
        a.email && this._set_global("_adroll_email", a.email);
        var c = this.copyObj(a, ["email", "userId"]);
        c && (c = "https://d.adroll.com/uat/" + this._global("adroll_adv_id") + "/" + this._global("adroll_pix_id") + "/?user_attributes=" + window.encodeURIComponent(this.jsonStringify(c)), b && (c += "&idsource=" + b), this.imgRequest(c));
        this._queueAndCallback("identify", [a, b])
    };
    h.prototype.track = function(a, b) {
        if (a) {
            var c = "https://d.adroll.com/uev/" + this._global("adroll_adv_id") + "/" + this._global("adroll_pix_id") + "/?event_name=" + window.encodeURIComponent(a),
                d = this.copyObj(b);
            d && (c += "&event_attributes=" + window.encodeURIComponent(this.jsonStringify(d)));
            this.imgRequest(c);
            this._queueAndCallback("track", [a, b])
        }
    };
    h.prototype._registerCallback = function(a, b, c) {
        this.callbacks = this.callbacks || {};
        this.callbackNames = this.callbackNames || [];
        this.callbacks[a] = this.callbacks[a] || [];
        if (!("function" !== typeof b || -1 < this.callbackNames.indexOf(c)) && (this.callbackNames.push(c), this.callbacks[a].push(b), this.callbackQueues && this.callbackQueues[a] && this.callbackQueues[a].length))
            for (c = 0; c < this.callbackQueues[a].length; c++) b.apply(null, this.callbackQueues[a][c])
    };
    h.prototype._queueAndCallback = function(a, b) {
        this.callbackQueues = this.callbackQueues || {};
        this.callbackQueues[a] = this.callbackQueues[a] || [];
        this.callbackQueues[a].push(b);
        if (this.callbacks && this.callbacks[a] && this.callbacks[a].length)
            for (var c = 0; c < this.callbacks[a].length; c++) this.callbacks[a][c].apply(null, b)
    };
    h.prototype.registerIdentifyCallback = function(a, b) {
        this._registerCallback("identify", a, b)
    };
    h.prototype.registerTrackCallback = function(a, b) {
        this._registerCallback("track", a, b)
    };
    h.prototype._is_defined = function(a) {
        return "undefined" !== typeof a
    };
    h.prototype.normalize_var = function(a, b) {
        if (!a) return "";
        a = a.toString().substr(0, this._kwl).replace(/,/gi, ".");
        b && (a = window.escape(a));
        return a
    };
    h.prototype.get_keywords = function() {
        try {
            var a = window.document.referrer || "";
            if (!a) return "";
            var b = this.parseUri(a);
            return -1 !== b.host.indexOf("www.google.") ? b.queryKey.q.substring(0, this._kwl) : -1 !== b.host.indexOf("bing.com") ? b.queryKey.q.substring(0, this._kwl) : ""
        } catch (c) {
            return ""
        }
    };
    h.prototype.parseUri = function(a) {
        a = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a);
        for (var b = {
                queryKey: {}
            }, c = 14, d = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "); c--;) b[d[c]] = a[c] || "";
        b[d[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(a, c, d) {
            c && (b.queryKey[c] = d)
        });
        return b
    };
    h.prototype._secure = function() {
        return !0
    };
    h.prototype._protocol = function() {
        return window.document.location.protocol
    };
    h.prototype._native = function() {
        try {
            return "http" !== this._protocol().slice(0, 4)
        } catch (a) {
            return !0
        }
    };
    h.prototype._srv = function(a) {
        a = this._is_defined(a) ? a : "";
        a = this.add_tpc_to_url("https://d.adroll.com" + a);
        this._has_global("__adroll_xid_ch") && (a = this.add_param_to_url(a, "xid_ch=" + (1 === this._global("__adroll_xid_ch") ? "t" : "f")));
        return this.add_fpc_to_url(a)
    };
    h.prototype._cdn = function(a) {
        a = this._is_defined(a) ? a : "";
        return "https://s.adroll.com" + a
    };
    h.prototype.log = function(a) {
        this._logs.push(a)
    };
    h.prototype.read_log = function(a) {
        return this._logs.join(a ? "\n" : "<br>\n")
    };
    h.prototype.normalize_url = function(a) {
        return a.toLowerCase()
    };
    h.prototype.imgRequest = function(a) {
        var b = new window.Image;
        b.src = this.add_tpc_to_url(a);
        b.setAttribute("width", "1");
        b.setAttribute("height", "1");
        b.setAttribute("border", "0");
        this._head().appendChild(b)
    };
    h.prototype.copyObj = function(a, b) {
        if (!a) return null;
        var c = {},
            d = 0,
            e;
        for (e in a) !a.hasOwnProperty(e) || b && -1 !== b.indexOf(e) || (d++, c[e] = a[e]);
        return d ? c : null
    };
    h.prototype.wrapException = function(a) {
        return function(b) {
            try {
                return a(b)
            } catch (c) {}
        }
    };
    h.prototype.add_tpc_to_url = function(a) {
        var b = this._global("adroll_tpc");
        if (!a || !b) return a;
        var c = this.parseUri(a);
        return c.queryKey.adroll_tpc || "d.adroll.com" !== c.host && "d.adroll.com" !== c.host + ":" + c.port ? a : this.add_param_to_url(a, "adroll_tpc=" + encodeURIComponent(b))
    };
    h.prototype.add_fpc_to_url = function(a) {
        var b = this.get_first_party_cookie();
        if (!a || !b) return a;
        var c = this.parseUri(a);
        return c.queryKey.adroll_fpc || "d.adroll.com" !== c.host && "d.adroll.com" !== c.host + ":" + c.port ? a : this.add_param_to_url(a, "adroll_fpc=" + encodeURIComponent(b))
    };
    h.prototype.getSafariVersion = function() {
        var a = /^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i.exec(navigator.userAgent);
        return a ? a[1] : null
    };
    h.prototype.set_tpc = function(a, b) {
        var c = this.tpc_callback();
        a && b && this._set_global("adroll_tpc", encodeURIComponent(a) + "=" + encodeURIComponent(b));
        c && c.call(this)
    };
    h.prototype.tpc_callback = function(a) {
        var b = window.adroll_tpc_callback;
        window.adroll_tpc_callback = a;
        return a || window.adroll_xavier_called || (window.adroll_xavier_called = 1, !this.call_xavier(b)) ? b : null
    };
    h.prototype.call_next_tpc = function(a) {
        (a = this.tpc_callback(a)) && a.call(this)
    };
    h.prototype.extract_query_param = function(a, b) {
        for (var c = b.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].split("=");
            if (decodeURIComponent(e[0]) === a) return decodeURIComponent(e[1])
        }
        return null
    };
    h.prototype.get_adroll_sid = function() {
        var a = this.get_consent_params();
        return a && (a = this.extract_query_param("_s", a)) ? a : this._global("adroll_sid")
    };
    h.prototype.call_consent_write = function(a) {
        this.add_script_element(this._srv("/consent/write?" + a))
    };
    h.prototype.call_consent_check = function() {
        var a = ["_s=" + this.get_adroll_sid(), "_b=2"];
        "#_ar_gdpr=" === window.location.hash.substr(0, 10) && a.push("dbg=" + unescape(window.location.hash.substr(10)));
        a = "/consent/check/" + this._global("adroll_adv_id") + "?" + a.join("&");
        this.add_script_element(this._srv(a))
    };
    h.prototype.load_adroll_tpc = function(a) {
        this.tpc_callback(a);
        if (this._consent_checked) return this.set_consent();
        this._consent_checked = !0;
        this.call_consent_check()
    };
    h.prototype.get_tpc_decode_timeout = function() {
        return 1E3
    };
    h.prototype.set_first_party_cookie = function() {
        var a = this.get_first_party_cookie(!1);
        a ? -1 === a.indexOf("-s2-") && (-1 === a.indexOf("-") ? this.set("__adroll_fpc", a + "-s2-", 43800) : this.set("__adroll_fpc", a.replace("-", "-s2-"), 43800)) : (a = this.md5((new Date).getTime() + Math.round(1E11 * Math.random()) + window.navigator.userAgent.toLowerCase() + window.document.referrer) + "-s2-" + Date.now(), this.set("__adroll_fpc", a, 43800))
    };
    h.prototype.get_first_party_cookie = function(a) {
        var b = this.get("__adroll_fpc");
        return b ? !1 !== a && -1 === b.indexOf("-s2-") ? null : b.replace("-s2-", "-").replace(/-$/, "") : null
    };
    h.prototype.call_xavier = function(a) {
        function b() {
            d._set_global("__adroll_xid_ch", 0);
            a && a.call(d)
        }

        function c() {
            window.RetrieveAdID && (e = !0);
            if (e)
                if (window.RetrieveAdID) {
                    d.tpc_callback(a);
                    var m = window.setTimeout(function() {
                        d.set_tpc(null)
                    }, d.get_tpc_decode_timeout());
                    window.RetrieveAdID(function(a) {
                        d._set_global("__adroll_xid_ch", 1);
                        window.clearTimeout(m);
                        d.set_tpc("xavier", a)
                    }, function(a) {
                        d._set_global("__adroll_xid_ch", 1);
                        d.set_tpc("xavier", a)
                    })
                } else b();
            else window.setTimeout(c, 10)
        }
        var d = this,
            e = !1,
            m = navigator.userAgent.toLowerCase();
        if (!navigator.userAgent.match(/\b(iPad|iPhone|iPod)\b/) || 9 > parseInt(m.substr(m.indexOf(") version/") + 10), 10) || "US" !== this._global("__adroll_consent_user_country")) return d._set_global("__adroll_xid_ch", 0), !1;
        window.setTimeout(function() {
            e = !0
        }, this.get_tpc_decode_timeout());
        this.if_under_experiment_js("xavier", function() {
            d.add_script_element("https://s.dca0.com/sdk.v1.0.min.js?1566331056");
            c()
        }, function() {
            this.if_under_experiment_js("xavier2", function() {
                d.add_script_element("https://s.dca0.com/sdk.v2.0.min.js?1567018316");
                c()
            }, function() {
                e = !0;
                b()
            }, this.get_tpc_decode_timeout())
        }, this.get_tpc_decode_timeout());
        return !0
    };
    window.__adroll = window.__adroll || new h;
}());
(function(a) {
    a.adroll_optout = !1;
    a.adroll_ext_network = null;
    a.adroll_callbacks = "undefined" === typeof a.adroll_callbacks ? [] : a.adroll_callbacks;
    a.__adroll.render_pixel_code(a.adroll_adv_id, a.adroll_pix_id)
})(window);