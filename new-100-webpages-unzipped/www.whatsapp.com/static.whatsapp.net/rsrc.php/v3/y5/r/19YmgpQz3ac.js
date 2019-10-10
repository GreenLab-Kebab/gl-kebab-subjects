if (self.CavalryLogger) {
    CavalryLogger.start_js(["yEM6X"]);
}

__d("WhatsAppSecurityAnimationPage", ["cx", "joinClasses", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = {
        setup: function(a) {
            __p && __p();
            var c = 900,
                d = {
                    "green-enter": {
                        start: "_8hpf",
                        end: "_8hlj"
                    },
                    "emoji-wiggle": {
                        start: "_8hm5",
                        end: "_8hmf"
                    },
                    "fade-out": {
                        start: "_8hmi",
                        end: "_8hmj"
                    },
                    "fade-in": {
                        start: "_8hmk",
                        end: "_8hml"
                    },
                    timeout: {
                        start: "_8hn1",
                        end: "_8hn2"
                    },
                    "green-exit": {
                        start: "_8hnh",
                        end: "_8hni"
                    },
                    "white-in": {
                        start: "_8hnj",
                        end: "_8hnk"
                    },
                    "lock-open": {
                        start: "_8hnl",
                        end: "_8hnm"
                    },
                    "white-out": {
                        start: "_8hpg",
                        end: "_8hph"
                    }
                };

            function e(a) {
                var b = "",
                    c = ["\xdf", "\xf8", "%", "\xa9", "\u03c0", "\u2021", "1", "1", "3", "x", "I"];
                for (var d = 0; d < a.length; d++) b += c[Math.floor(Math.random() * c.length)];
                return b
            }

            function f(a, c, e) {
                var f = d[c].start,
                    g = d[c].end,
                    h = document.querySelector("#" + a);
                if (h) {
                    c = h.dataset["class"];
                    h.className = b("joinClasses")(c, f);
                    b("setTimeout")(function() {
                        h.classList.add(g)
                    }, 5);
                    b("setTimeout")(function() {
                        h.classList.remove(f)
                    }, e + 5)
                }
            }

            function g(a, c, d, e, g) {
                b("setTimeout")(function() {
                    f(a, c, d)
                }, e);
                return e + d - (g || 0)
            }

            function h(a, d, e, f, g, i, j) {
                __p && __p();
                if (g < d.length && g > -1) {
                    var k = f[i];
                    k === " " && (k = e.substring(g, g + 1));
                    k = j === "back" ? e.substring(0, g) + k + d.substring(g + 1, d.length) : d.substring(0, g) + k + e.substring(g + 1, e.length);
                    var l = document.querySelector("#" + a);
                    l && (l.innerText = k);
                    var m = i + 1,
                        n = g;
                    m === f.length && (m = 0, n += j === "back" ? 1 : -1);
                    b("setTimeout")(function() {
                        h(a, d, e, f, n, m, j)
                    }, Math.floor(c / d.length / f.length))
                }
            }

            function i() {
                __p && __p();
                var d = e(a),
                    f = document.querySelector("#green_body");
                f && (f.innerText = a);
                f = document.querySelector("#white_body");
                f && (f.innerText = d);
                var j;
                f = g("green", "green-enter", 299, 0);
                f = g("green_emoji", "emoji-wiggle", 1600, f, 170);
                f = g("green_emoji_container", "fade-out", 170, f, 50);
                j = c;
                b("setTimeout")(function() {
                    h("green_body", a, d, "36 ", a.length - 1, 0)
                }, f);
                f += j - 50;
                f = g("green_lock", "fade-in", 150, f);
                f = g("container", "timeout", 1e3, f);
                f = g("green", "green-exit", 299, f);
                f = g("container", "timeout", 470, f);
                f = g("white", "white-in", 294, f);
                f = g("container", "timeout", 120, f);
                f = g("white_lock_part", "lock-open", 170, f);
                f = g("container", "timeout", 240, f);
                f = g("white_lock", "fade-out", 320, f, 200);
                f = g("container", "timeout", 140, f);
                j = 1e3;
                b("setTimeout")(function() {
                    h("white_body", d, a, "36 ", 0, 0, "back")
                }, f);
                f += j - 100;
                f = g("white_emoji_container", "fade-in", 170, f, 50);
                f = g("white_emoji", "emoji-wiggle", 2200, f, 100);
                f = g("container", "timeout", 600, f);
                f = g("white", "white-out", 346, f);
                f = g("container", "timeout", 1050, f);
                b("setTimeout")(function() {
                    k(), i()
                }, f)
            }

            function j(a) {
                a = document.querySelector("#" + a);
                a && (a.className = a.dataset["class"])
            }

            function k() {
                j("green"), j("green_lock"), j("green_emoji_container"), j("white"), j("white_lock"), j("white_lock_part"), j("white_emoji_container"), j("white_emoji")
            }
            window.onload = function() {
                i()
            }
        }
    };
    e.exports = a
}), null);
__d("XShopAccountOrderController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/account/order/", {
        login: {
            type: "Bool",
            defaultValue: !1
        },
        order_id: {
            type: "FBID",
            required: !0
        }
    })
}), null);