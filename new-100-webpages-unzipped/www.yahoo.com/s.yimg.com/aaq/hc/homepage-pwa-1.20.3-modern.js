! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("HomepageClient", [], t) : "object" == typeof exports ? exports.HomepageClient = t() : e.HomepageClient = t()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(n) {
            if (o[n]) return o[n].exports;
            var r = o[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var n = window.webpackJsonpHomepageClient;
        window.webpackJsonpHomepageClient = function(t, o, a) {
            for (var i, s, c = 0, l = []; c < t.length; c++) s = t[c], r[s] && l.push(r[s][0]), r[s] = 0;
            for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
            for (n && n(t, o, a); l.length;) l.shift()()
        };
        var o = {},
            r = {
                1: 0,
                2: 0
            };
        return t.e = function(e) {
            function n() {
                s.onerror = s.onload = null, clearTimeout(c);
                var t = r[e];
                0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), r[e] = void 0)
            }
            var o = r[e];
            if (0 === o) return new Promise(function(e) {
                e()
            });
            if (o) return o[2];
            var a = new Promise(function(t, n) {
                o = r[e] = [t, n]
            });
            o[2] = a;
            var i = document.getElementsByTagName("head")[0],
                s = document.createElement("script");
            s.type = "text/javascript", s.charset = "utf-8", s.async = !0, s.timeout = 12e4, t.nc && s.setAttribute("nonce", t.nc), s.src = t.p + "" + ({}[e] || e) + "_2f72f98eb5.chunk.js";
            var c = setTimeout(n, 12e4);
            return s.onerror = s.onload = n, i.appendChild(s), a
        }, t.m = e, t.c = o, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "https://s.yimg.com/aaq/hc/", t.oe = function(e) {
            throw e
        }, t(t.s = "./src/base.js")
    }({
        "../../node_modules/wafer-core/src/utils.js": function(e, t, n) {
            "use strict";
            var o = this,
                r = function() {
                    var e = new Map;
                    return {
                        setTimeout: function(e) {
                            function t(t, n, o) {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }(function(t, n, r) {
                            var a = r || o;
                            if (!a) return setTimeout(t, n);
                            e.has(a) || e.set(a, new Map);
                            var i = setTimeout(function() {
                                var n = Array.prototype.slice.call(arguments);
                                e.get(a).delete(i), t.apply(this, n)
                            }, n);
                            return e.get(a).set(i, i), i
                        }),
                        clearAllTimeout: function() {
                            if (e && e.size) {
                                var t = !0,
                                    n = !1,
                                    o = void 0;
                                try {
                                    for (var r, a = e.values()[Symbol.iterator](); !(t = (r = a.next()).done); t = !0) {
                                        var i = r.value,
                                            s = !0,
                                            c = !1,
                                            l = void 0;
                                        try {
                                            for (var u, d = i.values()[Symbol.iterator](); !(s = (u = d.next()).done); s = !0) {
                                                var h = u.value;
                                                clearTimeout(h)
                                            }
                                        } catch (e) {
                                            c = !0, l = e
                                        } finally {
                                            try {
                                                !s && d.return && d.return()
                                            } finally {
                                                if (c) throw l
                                            }
                                        }
                                    }
                                } catch (e) {
                                    n = !0, o = e
                                } finally {
                                    try {
                                        !t && a.return && a.return()
                                    } finally {
                                        if (n) throw o
                                    }
                                }
                                e.clear()
                            }
                        },
                        clearTimeoutForInstance: function(t) {
                            var n = e.get(t);
                            if (n && n.size) {
                                var o = !0,
                                    r = !1,
                                    a = void 0;
                                try {
                                    for (var i, s = n[Symbol.iterator](); !(o = (i = s.next()).done); o = !0) {
                                        var c = i.value;
                                        clearTimeout(c)
                                    }
                                } catch (e) {
                                    r = !0, a = e
                                } finally {
                                    try {
                                        !o && s.return && s.return()
                                    } finally {
                                        if (r) throw a
                                    }
                                }
                                e.get(t).clear()
                            }
                        },
                        clearTimeout: function(e) {
                            function t(t, n) {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }(function(t, n) {
                            var r = n || o,
                                a = e.get(r);
                            if (!a) return void clearTimeout(t);
                            var i = a.get(t);
                            clearTimeout(i), e.get(r).delete(t)
                        })
                    }
                }();
            n.d(t, "b", function() {
                return c
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "a", function() {
                return u
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "c", function() {
                return h
            });
            var a = (r.clearAllTimeout, r.clearTimeout, r.clearTimeoutForInstance, r.setTimeout, "ontouchstart" in window),
                i = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = n.offsetX,
                        r = void 0 === o ? 0 : o,
                        a = n.offsetY,
                        i = void 0 === a ? 0 : a;
                    return e.right + r >= t.left && e.bottom + i >= t.top && e.left - r <= t.right && e.top - i <= t.bottom
                },
                s = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                },
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.containerClass,
                        o = t.offsetX,
                        r = void 0 === o ? 0 : o,
                        a = t.offsetY,
                        c = void 0 === a ? 0 : a,
                        l = arguments[2];
                    if (!s(e)) return !1;
                    if (n && Element.prototype.closest) {
                        var u = e.closest(n);
                        if (u) {
                            var d = u.getBoundingClientRect();
                            if (i(d, l)) {
                                var h = d.bottom + c,
                                    f = d.left - r,
                                    m = d.right + r,
                                    p = d.top - c,
                                    v = {
                                        top: p > l.top ? p : l.top,
                                        right: m < l.right ? m : l.right,
                                        bottom: h < l.bottom ? h : l.bottom,
                                        left: f > l.left ? f : l.left
                                    },
                                    g = e.getBoundingClientRect();
                                return i(g, v)
                            }
                            return !1
                        }
                    }
                    var b = e.getBoundingClientRect();
                    return i(b, l, {
                        offsetX: r,
                        offsetY: c
                    })
                },
                l = function(e, t, n) {
                    var o = 0;
                    return function() {
                        for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        var s = +new Date;
                        s - o < t || (o = s, e.apply(n, a))
                    }
                },
                u = function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        r = o.passive,
                        i = void 0 === r || r;
                    a && "click" === t && (e.style.cursor = "pointer"), e.addEventListener(t, n, {
                        capture: !1,
                        passive: i
                    })
                },
                d = function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        r = o.passive,
                        a = void 0 === r || r;
                    e.removeEventListener(t, n, {
                        capture: !1,
                        passive: a
                    })
                },
                h = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.useNavigator,
                        o = void 0 === n || n,
                        r = t.useTimestamp,
                        a = void 0 === r || r,
                        i = !1;
                    if (o)
                        if (window.navigator && "function" == typeof window.navigator.sendBeacon) try {
                            window.navigator.sendBeacon(e) || (i = !0)
                        } catch (e) {
                            i = !0
                        } else i = !0;
                        else i = !0;
                    if (i) {
                        var s = new Image;
                        u(s, "error", function() {
                            s = null
                        }), u(s, "load", function() {
                            s = null
                        }), u(s, "abort", function() {
                            s = null
                        }), s.src = a ? e + (-1 === e.indexOf("?") ? "?" : "&") + (new Date).getTime() : e
                    }
                }
        },
        "./allStrings.json": function(e, t) {
            e.exports = {
                "en-US": {
                    "Add to home screen": "Add to home screen",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Add Yahoo to your home screen to get the new faster and lighter experience",
                    Close: "Close",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Enjoy all of Yahoo in a much lighter and faster experience.",
                    "Get Alerts": "Get Alerts",
                    "Get Started": "Get Started",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Get the best of Yahoo quickly and easily by adding it to your home screen.",
                    "News, Mail, Sports, & more.": "News, Mail, Sports, & more.",
                    "No internet connection.": "No internet connection.",
                    "Not now": "Not now",
                    "Skip for now": "Skip for now",
                    "Stay on top of the latest stories and breaking news": "Stay on top of the latest stories and breaking news",
                    "Tap to download": "Tap to download",
                    "Together in one app.": "Together in one app.",
                    "Welcome to Yahoo Lite": "Welcome to Yahoo Lite",
                    "Yahoo App": "Yahoo App",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Yes!",
                    "You are back online.": "You are back online."
                },
                "ar-JO": {
                    "Add to home screen": "إضافة إلى الشاشة الرئيسية",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "إضافة Yahoo إلى شاشتك الرئيسية للاستمتاع بتجربة جديدة أسرع وأكثر سلاسة",
                    Close: "إغلاق",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "استمتع بكل ما تقدمه Yahoo في تجربة أسرع وأكثر سلاسة.",
                    "Get Alerts": "الحصول على التنبيهات",
                    "Get Started": "ابدأ",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "احصل على أفضل ما تقدمه Yahoo بسرعة وسهولة عبر إضافتها إلى شاشتك الرئيسية.",
                    "No internet connection.": "لا يوجد اتصال بالإنترنت.",
                    "Not now": "ليس الآن",
                    "Skip for now": "تخطى حاليًا",
                    "Stay on top of the latest stories and breaking news": "كن على اطلاع دائم بأحدث القصص وآخر الأخبار",
                    "Welcome to Yahoo Lite": "مرحبًا بك في Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "نعم!",
                    "You are back online.": "تم الاتصال مرة أخرى."
                },
                "de-DE": {
                    "Add to home screen": "Zum Startbildschirm hinzufügen",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Yahoo zum Startbildschirm hinzufügen für eine schnellere und einfachere Anwendung",
                    Close: "Schließen",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Yahoo wird noch schneller und einfacher in der Anwendung.",
                    "Get Alerts": "Meldungen erhalten",
                    "Get Started": "Loslegen",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Fügen Sie Yahoo zu Ihrem Startbildschirm hinzu für eine schnellere und einfachere Nutzung aller Vorteile.",
                    "No internet connection.": "Keine Internetverbindung.",
                    "Not now": "Nicht jetzt",
                    "Skip for now": "Überspringen",
                    "Stay on top of the latest stories and breaking news": "Bei aktuellen Themen und Nachrichten auf dem Laufenden bleiben",
                    "Welcome to Yahoo Lite": "Willkommen bei Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Ja!",
                    "You are back online.": "Zurück online."
                },
                "el-GR": {
                    "Add to home screen": "Προσθήκη στην αρχική οθόνη",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Προσθέστε το Yahoo στην αρχική οθόνη για να αποκτήσετε τη νέα ταχύτερη και απλούστερη εμπειρία",
                    Close: "Κλείσιμο",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Απολαύστε όλες τις δυνατότητες του Yahoo σε μια πολύ πιο γρήγορη και απλή εμπειρία.",
                    "Get Alerts": "Λήψη ειδοποιήσεων",
                    "Get Started": "Έναρξη",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Αξιοποιήστε στο έπακρο το Yahoo, γρήγορα και εύκολα προσθέτοντάς το στην αρχική σας οθόνη.",
                    "No internet connection.": "Δεν υπάρχει σύνδεση στο Internet.",
                    "Not now": "Όχι τώρα",
                    "Skip for now": "Παράλειψη προς το παρόν",
                    "Stay on top of the latest stories and breaking news": "Παραμείνετε ενημερωμένοι για τις πιο πρόσφατες ιστορίες και τα τελευταία νέα",
                    "Welcome to Yahoo Lite": "Καλωσορίσατε στο Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Ναι!",
                    "You are back online.": "Είστε πάλι συνδεδεμένοι."
                },
                "es-ES": {
                    "Add to home screen": "Añadir a pantalla de inicio",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Añade Yahoo a tu pantalla de inicio para disfrutar de una nueva experiencia más ágil y rápida",
                    Close: "Cerrar",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Disfruta de todo Yahoo en una experiencia mucho más ágil y rápida.",
                    "Get Alerts": "Recibir alertas",
                    "Get Started": "Empezar",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Recibe lo mejor de Yahoo de forma fácil y rápida añadiéndolo a tu pantalla de inicio.",
                    "No internet connection.": "No hay conexión a Internet.",
                    "Not now": "Ahora no",
                    "Skip for now": "Omitir por ahora",
                    "Stay on top of the latest stories and breaking news": "No te pierdas las historias más recientes y las noticias de última hora",
                    "Welcome to Yahoo Lite": "Te damos la bienvenida a Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "¡Sí!",
                    "You are back online.": "Vuelves a tener conexión."
                },
                "es-US": {
                    "Add to home screen": "Añadir a la pantalla de inicio",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Añade Yahoo a tu pantalla de inicio para tener la nueva experiencia más rápida y ligera",
                    Close: "Cerrar",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Disfruta de todas las características de Yahoo en una experiencia más ligera y rápida.",
                    "Get Alerts": "Obtener alertas",
                    "Get Started": "Comenzar",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Obtén lo mejor de Yahoo rápida y fácilmente añadiéndonos a tu pantalla de inicio.",
                    "No internet connection.": "No hay conexión a Internet.",
                    "Not now": "Ahora no",
                    "Skip for now": "Omitir por ahora",
                    "Stay on top of the latest stories and breaking news": "Mantente al día con las novedades y noticias más recientes",
                    "Welcome to Yahoo Lite": "Te damos la bienvenida a Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Sí",
                    "You are back online.": "La conexión regresó."
                },
                "fr-BE": {
                    "Add to home screen": "Ajouter à l’écran d’accueil",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Ajoutez Yahoo à votre écran d’accueil pour bénéficier de la nouvelle expérience, plus légère et plus rapide",
                    Close: "Fermer",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Profitez de tout Yahoo dans une expérience plus légère et plus rapide.",
                    "Get Alerts": "S’abonner",
                    "Get Started": "Commencer",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Profitez facilement et rapidement de tout Yahoo en l’ajoutant à votre écran d’accueil.",
                    "No internet connection.": "Aucune connexion Internet.",
                    "Not now": "Pas maintenant",
                    "Skip for now": "Ignorer pour l’instant",
                    "Stay on top of the latest stories and breaking news": "Ne manquez rien de l’actualité en France et dans le monde",
                    "Welcome to Yahoo Lite": "Bienvenue dans Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Oui !",
                    "You are back online.": "Vous êtes à nouveau connecté."
                },
                "fr-CA": {
                    "Add to home screen": "Ajouter à l’écran d’accueil",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Ajoutez Yahoo à votre écran d’accueil pour profiter de la nouvelle expérience plus rapide et plus légère",
                    Close: "Fermer",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Profitez de tout ce que Yahoo a à offrir, dans une expérience plus légère et plus rapide.",
                    "Get Alerts": "Obtenir des alertes",
                    "Get Started": "Commencer",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Profitez de ce que Yahoo a de mieux à offrir, rapidement et facilement, en l’ajoutant à votre écran d’accueil.",
                    "No internet connection.": "Aucune connexion Internet.",
                    "Not now": "Pas maintenant",
                    "Skip for now": "Ignorer pour le moment",
                    "Stay on top of the latest stories and breaking news": "Restez à l’affût de l’actualité et des dernières nouvelles",
                    "Welcome to Yahoo Lite": "Bienvenue à Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Oui!",
                    "You are back online.": "Vous êtes de nouveau en ligne."
                },
                "fr-FR": {
                    "Add to home screen": "Ajouter à l’écran d’accueil",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Ajoutez Yahoo à votre écran d’accueil pour bénéficier de la nouvelle expérience, plus légère et plus rapide",
                    Close: "Fermer",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Profitez de tout Yahoo dans une expérience plus légère et plus rapide.",
                    "Get Alerts": "S’abonner",
                    "Get Started": "Commencer",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Profitez facilement et rapidement de tout Yahoo en l’ajoutant à votre écran d’accueil.",
                    "No internet connection.": "Aucune connexion Internet.",
                    "Not now": "Pas maintenant",
                    "Skip for now": "Ignorer pour l’instant",
                    "Stay on top of the latest stories and breaking news": "Ne manquez rien de l’actualité en France et dans le monde",
                    "Welcome to Yahoo Lite": "Bienvenue dans Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Oui !",
                    "You are back online.": "Vous êtes à nouveau connecté."
                },
                "id-ID": {
                    "Add to home screen": "Tambahkan ke layar awal",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Tambahkan Yahoo ke layar awal Anda untuk mendapatkan pengalaman baru yang lebih cepat dan lebih ringan",
                    Close: "Tutup",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Nikmati semua fitur Yahoo dalam pengalaman yang jauh lebih ringan dan lebih cepat.",
                    "Get Alerts": "Dapatkan Isyarat",
                    "Get Started": "Ayo Mulai",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Dapatkan yang terbaik dari Yahoo secara cepat dan mudah dengan menambahkannya ke layar awal Anda.",
                    "No internet connection.": "Tidak ada koneksi internet.",
                    "Not now": "Tidak sekarang",
                    "Skip for now": "Lompati sekarang",
                    "Stay on top of the latest stories and breaking news": "Selalu ikuti berita terbaru dan berita hangat",
                    "Welcome to Yahoo Lite": "Selamat datang di Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Ya!",
                    "You are back online.": "Anda kembali online."
                },
                "it-IT": {
                    "Add to home screen": "Aggiungi alla schermata iniziale",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Aggiungi Yahoo alla schermata iniziale per usufruire della nuova esperienza più rapida e semplice",
                    Close: "Chiudi",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Utilizza tutte le funzionalità Yahoo usufruendo di un’esperienza molto più rapida e semplice.",
                    "Get Alerts": "Ricevi avvisi",
                    "Get Started": "Inizia",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Ottieni il meglio di Yahoo in modo rapido e semplice aggiungendolo alla schermata iniziale.",
                    "No internet connection.": "Connessione a Internet assente.",
                    "Not now": "Non ora",
                    "Skip for now": "Salta per ora",
                    "Stay on top of the latest stories and breaking news": "Rimani aggiornato sulle novità e sulle notizie dell’ultim’ora",
                    "Welcome to Yahoo Lite": "Ti diamo il benvenuto in Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Sì!",
                    "You are back online.": "Sei di nuovo online."
                },
                "nl-BE": {
                    "Add to home screen": "Toevoegen aan startscherm",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Voeg Yahoo toe aan je startscherm voor een nieuwe snellere en lichtere ervaring",
                    Close: "Sluiten",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Gebruik alles van Yahoo op een lichtere en snellere manier.",
                    "Get Alerts": "Waarschuwingen ontvangen",
                    "Get Started": "Aan de slag",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Snel en eenvoudig toegang tot het beste van Yahoo door het aan je startscherm toe te voegen.",
                    "No internet connection.": "Geen internet verbinding. ",
                    "Not now": "Niet nu",
                    "Skip for now": "Eerst overslaan",
                    "Stay on top of the latest stories and breaking news": "Blijf op de hoogte van actuele nieuwsartikelen en het laatste nieuws",
                    "Welcome to Yahoo Lite": "Welkom bij Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Ja!",
                    "You are back online.": "Je bent weer online."
                },
                "pt-BR": {
                    "Add to home screen": "Adicionar à tela inicial",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Adicione o Yahoo à sua tela inicial para obter uma experiência mais rápida e leve",
                    Close: "Fechar",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Aproveite tudo do Yahoo de forma mais leve e rápida.",
                    "Get Alerts": "Receber alertas",
                    "Get Started": "Comece a usar",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Obtenha o melhor do Yahoo de forma rápida e fácil, adicionando-o à sua tela inicial.",
                    "No internet connection.": "Sem conexão de internet.",
                    "Not now": "Agora não",
                    "Skip for now": "Ignorar por enquanto",
                    "Stay on top of the latest stories and breaking news": "Fique por dentro das últimas informações e notícias urgentes",
                    "Welcome to Yahoo Lite": "Bem-vindo ao Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Sim!",
                    "You are back online.": "Conexão de internet reestabelecida."
                },
                "ro-RO": {
                    "Add to home screen": "Adăugare la ecranul principal",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Adăugați Yahoo la ecranul dvs. principal pentru a beneficia de noua experiență mai rapidă și care consumă mai puține resurse",
                    Close: "Închidere",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Bucurați-vă de toate avantajele Yahoo într-o experiență mult mai rapidă și care consumă mult mai puține resurse.",
                    "Get Alerts": "Primire alerte",
                    "Get Started": "Începeți",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Obțineți cea mai bună experiență Yahoo, rapid și ușor, adăugând Yahoo la ecranul dvs. principal.",
                    "No internet connection.": "Nu există conexiune la internet.",
                    "Not now": "Nu acum",
                    "Skip for now": "Omitere momentan",
                    "Stay on top of the latest stories and breaking news": "Fiți la curent cu cele mai noi povești și știri de ultimă oră",
                    "Welcome to Yahoo Lite": "Bine ați venit la Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Da!",
                    "You are back online.": "Sunteți din nou online."
                },
                "sv-SE": {
                    "Add to home screen": "Lägg till på hemskärm",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Lägg till Yahoo på din hemskärm för att få den nya snabbare och lättare upplevelsen",
                    Close: "Stäng",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Njut av hela Yahoo på ett mycket lättare och snabbare sätt.",
                    "Get Alerts": "Få aviseringar",
                    "Get Started": "Kom igång",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Få ut det bästa av Yahoo genom att lägga till det på din hemskärm.",
                    "No internet connection.": "Ingen internetanslutning.",
                    "Not now": "Inte nu",
                    "Skip for now": "Hoppa över tills vidare",
                    "Stay on top of the latest stories and breaking news": "Ha koll på de senaste händelserna och senast nytt",
                    "Welcome to Yahoo Lite": "Välkommen till Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Ja!",
                    "You are back online.": "Du är online igen."
                },
                "vi-VN": {
                    "Add to home screen": "Thêm vào màn hình chính",
                    "Add Yahoo to your home screen to get the new faster and lighter experience": "Thêm Yahoo vào màn hình chính để trải nghiệm dịch vụ mới nhanh hơn và nhẹ hơn",
                    Close: "Đóng",
                    "Enjoy all of Yahoo in a much lighter and faster experience.": "Tận hưởng mọi tính năng của Yahoo nhanh hơn, nhẹ hơn.",
                    "Get Alerts": "Nhận thông báo",
                    "Get Started": "Bắt đầu",
                    "Get the best of Yahoo quickly and easily by adding it to your home screen.": "Khai thác tối đa Yahoo một cách nhanh chóng và dễ dàng bằng cách thêm vào màn hình chính.",
                    "No internet connection.": "Không có kết nối Internet.",
                    "Not now": "Để sau",
                    "Skip for now": "Không phải lúc này",
                    "Stay on top of the latest stories and breaking news": "Nắm bắt mọi tin tức mới nhất",
                    "Welcome to Yahoo Lite": "Chào mừng bạn đến với Yahoo Lite",
                    "Yahoo Lite": "Yahoo Lite",
                    Yes: "Có!",
                    "You are back online.": "Bạn đã có kết nối mạng trở lại."
                }
            }
        },
        "./src/base.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = n("../../node_modules/wafer-core/src/utils.js"),
                d = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                h = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.name,
                            r = t.version,
                            a = t.tables,
                            i = void 0 === a ? ["fetch"] : a,
                            s = t.cb,
                            c = void 0 === s ? function() {} : s;
                        o(this, e), this._utils = {
                            cb: c,
                            connection: null,
                            db: null,
                            name: n,
                            startTime: Date.now(),
                            tables: i
                        };
                        var l = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                        l && n && r && (this._utils.connection = l.open(n, r), this.addEventListener())
                    }
                    return d(e, [{
                        key: "addEventListener",
                        value: function() {
                            var e = this,
                                t = this._utils,
                                n = t.cb,
                                o = t.connection,
                                r = t.startTime,
                                a = t.tables;
                            o.onsuccess = function(t) {
                                var o = t.target.result,
                                    i = !0;
                                a.some(function(e) {
                                    return !o.objectStoreNames.contains(e) && (i = !1, !0)
                                }), i && (e._utils.db = o, n("success", {
                                    duration: Date.now() - r
                                }))
                            }, o.onerror = function(t) {
                                e._utils.db = null, n("error", {
                                    duration: Date.now() - r
                                })
                            }, o.onupgradeneeded = function(t) {
                                var o = t.target.result;
                                a.forEach(function(e) {
                                    o.createObjectStore(e, {
                                        keyPath: "key"
                                    }).createIndex("key", ["cachedTime", "key", "ttl"])
                                }), t.target.transaction.oncomplete = function() {
                                    e._utils.db = o, n("success", {
                                        duration: Date.now() - r
                                    })
                                }
                            }
                        }
                    }, {
                        key: "get",
                        value: function(e, t) {
                            var n = this,
                                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                r = o.timeout,
                                a = void 0 === r ? 1e3 : r,
                                i = this._utils.db;
                            return new Promise(function(o, r) {
                                if (!i) return void r(new Error("Connection missing"));
                                if (!t) return void r(new Error("Table missing"));
                                var s = !1,
                                    c = setTimeout(function() {
                                        s = !0, r(new Error("Cache lookup timed out"))
                                    }, a);
                                if (!i.objectStoreNames.contains(t)) return clearTimeout(c), void r(new Error("Store does not exist : " + t));
                                var l = void 0;
                                try {
                                    l = n._utils.db.transaction(t, "readonly")
                                } catch (e) {
                                    return clearTimeout(c), void r(e)
                                }
                                l.onerror = function(e) {
                                    clearTimeout(c), s || r(e)
                                }, l.onabort = function(e) {
                                    clearTimeout(c), s || r(e)
                                };
                                var u = l.objectStore(t);
                                if (!u) return clearTimeout(c), void r(new Error("store doesn't exist for table : " + t));
                                var d = u.get(e);
                                d.onsuccess = function(e) {
                                    if (clearTimeout(c), !s) {
                                        var t = e.target.result;
                                        o(t)
                                    }
                                }, d.onerror = function(e) {
                                    clearTimeout(c), s || r(e)
                                }
                            })
                        }
                    }, {
                        key: "set",
                        value: function(e, t) {
                            var n = this,
                                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                r = o.timeout,
                                a = void 0 === r ? 1e3 : r,
                                i = this._utils,
                                s = i.cb,
                                c = i.db;
                            return new Promise(function(o, r) {
                                if (!c) return void r(new Error("Connection missing"));
                                if (!t) return void r(new Error("Table missing"));
                                var i = !1,
                                    l = setTimeout(function() {
                                        i = !0, r(new Error("Cache write timed out"))
                                    }, a);
                                if (!c.objectStoreNames.contains(t)) return clearTimeout(l), s("error", {
                                    action: "deleting db",
                                    message: "Store does not exist : " + t
                                }), n.deleteDB().catch(function() {}), void r(new Error("Store does not exist : " + t));
                                var u = void 0;
                                try {
                                    u = n._utils.db.transaction(t, "readwrite")
                                } catch (e) {
                                    return clearTimeout(l), e instanceof DOMException && (s("error", {
                                        action: "deleting db",
                                        message: e.message
                                    }), n.deleteDB().catch(function() {})), void r(e)
                                }
                                u.onerror = function(e) {
                                    clearTimeout(l), i || r(e)
                                }, u.onabort = function(e) {
                                    clearTimeout(l), i || r(e)
                                };
                                var d = u.objectStore(t);
                                if (!d) return clearTimeout(l), void r(new Error("store doesn't exist for table : " + t));
                                var h = d.put(e);
                                h.onsuccess = function(e) {
                                    if (clearTimeout(l), !i) {
                                        var t = e.target.result;
                                        o(t)
                                    }
                                }, h.onerror = function(e) {
                                    clearTimeout(l), i || r(e)
                                }
                            })
                        }
                    }, {
                        key: "delete",
                        value: function(e, t) {
                            var n = this,
                                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                r = o.timeout,
                                a = void 0 === r ? 1e3 : r,
                                i = this._utils.db;
                            return new Promise(function(o, r) {
                                if (!i) return void r(new Error("Connection missing"));
                                if (!t) return void r(new Error("Table missing"));
                                var s = !1,
                                    c = setTimeout(function() {
                                        s = !0, r(new Error("Cache delete timed out"))
                                    }, a);
                                if (!i.objectStoreNames.contains(t)) return clearTimeout(c), void r(new Error("Store does not exist : " + t));
                                var l = void 0;
                                try {
                                    l = n._utils.db.transaction(t, "readwrite")
                                } catch (e) {
                                    return clearTimeout(c), void r(e)
                                }
                                l.onerror = function(e) {
                                    clearTimeout(c), s || r(e)
                                }, l.onabort = function(e) {
                                    clearTimeout(c), s || r(e)
                                };
                                var u = l.objectStore(t);
                                if (!u) return clearTimeout(c), void r(new Error("store doesn't exist for table : " + t));
                                var d = u.delete(e);
                                d.onsuccess = function(e) {
                                    if (clearTimeout(c), !s) {
                                        var t = e.target.result;
                                        o(t)
                                    }
                                }, d.onerror = function(e) {
                                    clearTimeout(c), s || r(e)
                                }
                            })
                        }
                    }, {
                        key: "clean",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = n.timeout,
                                r = void 0 === o ? 1e4 : o,
                                a = n.timeDiffToDelete,
                                i = void 0 === a ? 864e5 : a,
                                s = this._utils.db,
                                c = Date.now();
                            return new Promise(function(n, o) {
                                if (!s) return void o(new Error("Connection missing"));
                                if (!e) return void o(new Error("Table missing"));
                                var a = !1,
                                    l = setTimeout(function() {
                                        a = !0, o(new Error("Cache clean timed out"))
                                    }, r);
                                if (!s.objectStoreNames.contains(e)) return clearTimeout(l), void o(new Error("Store does not exist : " + e));
                                var u = void 0;
                                try {
                                    u = t._utils.db.transaction(e, "readonly")
                                } catch (e) {
                                    return clearTimeout(l), void o(e)
                                }
                                u.onerror = function(e) {
                                    clearTimeout(l), a || o(e)
                                }, u.onabort = function(e) {
                                    clearTimeout(l), a || o(e)
                                };
                                var d = u.objectStore(e);
                                if (!d) return clearTimeout(l), void o(new Error("store doesn't exist for table : " + e));
                                var h = d.openCursor(),
                                    f = [];
                                h.onsuccess = function(r) {
                                    if (clearTimeout(l), !a) {
                                        var s = r.target.result;
                                        if (s) {
                                            var u = s.value.cachedTime;
                                            c - u > i && f.push(t.delete(s.key, e)), s.continue()
                                        } else Promise.all(f).then(function(e) {
                                            n(e)
                                        }).catch(function(e) {
                                            o(e)
                                        })
                                    }
                                }, h.onerror = function(e) {
                                    clearTimeout(l), a || o(e)
                                }
                            })
                        }
                    }, {
                        key: "deleteDB",
                        value: function() {
                            var e = this,
                                t = this._utils.db,
                                n = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                            return new Promise(function(o, r) {
                                if (!n) return void r(new Error("Connection missing"));
                                t && (t.close(), e._utils.db = null);
                                var a = e._utils.name,
                                    i = !1,
                                    s = setTimeout(function() {
                                        i = !0, r(new Error("Could not delete"))
                                    }, 1e3),
                                    c = n.deleteDatabase(a);
                                c.onerror = function(e) {
                                    clearTimeout(s), i || r(new Error("Could not delete"))
                                }, c.onsuccess = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    clearTimeout(s), i || o(e.result)
                                }
                            })
                        }
                    }]), e
                }(),
                f = h,
                m = function(e, t) {
                    return e && t ? "/p.gif?type=" + e + Object.keys(t).reduce(function(e, n) {
                        var o = t[n];
                        return o && (e = e + "&" + n + "=" + o), e
                    }, "") : ""
                },
                p = function(e) {
                    document.attachEvent && void 0 !== document.attachEvent ? document.attachEvent("onreadystatechange", function() {
                        "interactive" === document.readyState && e()
                    }) : "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e, {
                        capture: !1,
                        passive: !0
                    }) : e()
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = {};
                    return Object.keys(e).forEach(function(o) {
                        n[o] = Object.assign({}, e[o], t[o])
                    }), n
                },
                g = function(e, t, n) {
                    var o = void 0;
                    return function() {
                        for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        clearTimeout(o), o = setTimeout(function() {
                            e.apply(n, a)
                        }, t)
                    }
                },
                b = function() {
                    if ("undefined" != typeof document) {
                        if ("string" == typeof document.documentElement.style.transform) return "transform"
                    }
                    return "WebkitTransform"
                }(),
                y = function() {
                    if ("undefined" != typeof window) {
                        var e = window,
                            t = e.navigator,
                            n = t && t.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                        return !!n && parseInt(n[2], 10)
                    }
                    return !1
                }(),
                w = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                k = {
                    beacon: {
                        beaconSrc: "HomepagePWA",
                        bucket: "",
                        rid: ""
                    },
                    onboarding: {
                        installCardSwapCount: 3,
                        installCoolOffTime: 1,
                        installOnboardingType: "card",
                        installSliderSwapCount: 1,
                        slot: "bottom"
                    },
                    pageInfo: {
                        device: null,
                        lang: null,
                        region: null,
                        site: null
                    },
                    prompt: {
                        forNativeApp: !1,
                        useBeforeInstallPrompt: !1
                    },
                    trackingParams: {
                        itc: 1,
                        sec: "mobile-auto",
                        subsec: "homepageapp-promo"
                    }
                },
                Y = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments[1],
                            o = arguments[2];
                        r(this, e), this._config = v(k, t), this._context = o, this._getRapidTracker = n, this._handleAppInstall = this._handleAppInstall.bind(this), this._handleBeforeInstallprompt = this._handleBeforeInstallprompt.bind(this), this._logUserChoice = this._logUserChoice.bind(this), this._config.prompt.useBeforeInstallPrompt ? (Object(u.a)(window, "beforeinstallprompt", this._handleBeforeInstallprompt), Object(u.a)(window, "appinstalled", this._handleAppInstall)) : this._renderCustomInstallPrompt()
                    }
                    return w(e, [{
                        key: "db",
                        get: function() {
                            var e = this;
                            return this._db ? Promise.resolve(this._db) : new Promise(function(t, n) {
                                var o = new f({
                                    cb: function(r) {
                                        return "success" === r ? (e._db = o, t(e._db)) : n(new Error("connection failed"))
                                    },
                                    name: "homepagelite",
                                    version: 1,
                                    tables: ["onboard"]
                                })
                            })
                        }
                    }]), w(e, [{
                        key: "destroy",
                        value: function() {
                            this._setAddToHomeScreenInt && clearTimeout(this._setAddToHomeScreenInt), this._setAddToHomeScreenInt = null, this.onBoarding && this.onBoarding.destroy(), this._config.prompt.useBeforeInstallPrompt && (Object(u.e)(window, "beforeinstallprompt", this._handleBeforeInstallprompt), Object(u.e)(window, "appinstalled", this._handleAppInstall))
                        }
                    }, {
                        key: "_renderCustomInstallPrompt",
                        value: function() {
                            var e = this,
                                t = this._config.onboarding.slot;
                            this.checkIfCustomInstallPromptShouldBeShown().then(function() {
                                if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) {
                                    if (window.hpClientInstance && t) {
                                        var n = window.hpClientInstance.promoSlots;
                                        n && n.addToSlot(t, "yahoo-lite-promo")
                                    }
                                    return void e.renderCustomInstallPrompt()
                                }
                                var o = e._config.beacon,
                                    r = m("info", Object.assign({
                                        eventName: "Browser A2HS prompt",
                                        eventType: "cooloff"
                                    }, o));
                                Object(u.c)(r)
                            })
                        }
                    }, {
                        key: "_handleBeforeInstallprompt",
                        value: function(e) {
                            this._deferredPrompt = e;
                            var t = this._config.onboarding,
                                n = t.installOnboardingType,
                                o = t.slot;
                            if ("native" === n || y < 68) {
                                if (window.hpClientInstance && o) {
                                    var r = window.hpClientInstance.promoSlots;
                                    r && r.addToSlot(o, "yahoo-lite-promo")
                                }
                                return void this._showNativeInstallPrompt()
                            }
                            this._renderCustomInstallPrompt()
                        }
                    }, {
                        key: "_logUserChoice",
                        value: function(e) {
                            if (e) {
                                this.onBoarding && this.onBoarding.destroy();
                                var t = this._config,
                                    n = t.beacon,
                                    o = t.trackingParams,
                                    r = this._getRapidTracker && this._getRapidTracker();
                                if ("accepted" === e.outcome) {
                                    var a = m("info", Object.assign({
                                        eventName: "Browser A2HS prompt",
                                        eventType: "Accepted"
                                    }, n));
                                    Object(u.c)(a), r && r.beaconClick(o.sec, "hompagelite-install-accepted", 0, o)
                                } else {
                                    var i = m("info", Object.assign({
                                        eventName: "Browser A2HS prompt",
                                        eventType: "Rejected"
                                    }, n));
                                    Object(u.c)(i), r && r.beaconClick(o.sec, "hompagelite-install-closed", 1, o)
                                }
                            }
                        }
                    }, {
                        key: "_handleAppInstall",
                        value: function(e) {
                            var t = this._config,
                                n = t.beacon,
                                o = t.pageInfo,
                                r = t.trackingParams,
                                a = m("info", Object.assign({
                                    eventName: "Browser A2HS prompt",
                                    eventType: "Installed"
                                }, n)),
                                i = this._getRapidTracker && this._getRapidTracker(),
                                s = Date.now(),
                                c = Object.assign({}, o, {
                                    referrer: window.location.href,
                                    installTime: s
                                });
                            Object(u.c)(a), i && i.beaconClick(r.sec, "hompagelite-installed", 1, r), this.onBoarding && this.onBoarding.destroy(), this.db.then(function(e) {
                                return Promise.all([e.set({
                                    key: "onboard",
                                    oboardState: c
                                }, "onboard"), e.set({
                                    key: "trackOpen",
                                    installedAt: s
                                }, "onboard")])
                            }).catch(function() {
                                var e = m("error", Object.assign({
                                    eventName: "homepageliteIDB",
                                    eventType: "Connection failed"
                                }, n));
                                Object(u.c)(e)
                            })
                        }
                    }, {
                        key: "_showNativeInstallPrompt",
                        value: function() {
                            var e = this._deferredPrompt;
                            if (e) {
                                var t = this._config,
                                    n = t.beacon,
                                    o = t.trackingParams,
                                    r = o.sec,
                                    a = o.subsec,
                                    i = m("info", Object.assign({
                                        eventName: "Browser A2HS prompt",
                                        eventType: "Initiated"
                                    }, n));
                                e.prompt().catch(function(e) {
                                    var t = m("error", Object.assign({
                                        eventName: "deferredPrompt",
                                        eventType: "Prompt failed",
                                        message: e && e.message
                                    }, n));
                                    Object(u.c)(t)
                                });
                                var s = this._getRapidTracker && this._getRapidTracker();
                                Object(u.c)(i), s && s.beaconLinkViews([{
                                    sec: r,
                                    _links: [{
                                        subsec: a,
                                        slk: "homepagelite-dialog-prompt"
                                    }]
                                }]), e.userChoice && e.userChoice.then(this._logUserChoice)
                            }
                        }
                    }, {
                        key: "checkIfCustomInstallPromptShouldBeShown",
                        value: function() {
                            var e = this._config.onboarding;
                            if (window.hpClientInstance) {
                                var t = window.hpClientInstance.promoSlots;
                                if (t && t.getItemAtSlot(e.slot)) return Promise.resolve(!1)
                            }
                            return this.db.then(function(e) {
                                return e.get("lastInstallPromptShown", "onboard")
                            }).then(function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = t.lastShown,
                                    o = Number(e.installCoolOffTime);
                                return !n || Math.abs(Date.now() - n) / 36e5 >= o
                            }).catch(function() {
                                return !1
                            })
                        }
                    }, {
                        key: "handleInstallPromptShown",
                        value: function(e, t) {
                            return e ? e.get("lastInstallPromptShown", "onboard").then(function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    o = n.shownCount,
                                    r = void 0 === o ? 0 : o,
                                    a = n.type;
                                return t !== a && (r = 0), e.set({
                                    key: "lastInstallPromptShown",
                                    lastShown: Date.now(),
                                    shownCount: r + 1,
                                    type: t
                                }, "onboard")
                            }) : Promise.reject(new Error("db missing"))
                        }
                    }, {
                        key: "renderCustomInstallPrompt",
                        value: function() {
                            var e = this;
                            new Promise(function(e) {
                                n.e(0).then(function(t) {
                                    e(n("../homepage-pwa-onboarding/src/base.js"))
                                }.bind(null, n)).catch(n.oe)
                            }).then(function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = t.PWAOnboarding;
                                if (!e.onBoarding) {
                                    var o = e._config,
                                        r = o.beacon,
                                        a = o.onboarding,
                                        i = o.prompt,
                                        s = a.installCardSwapCount,
                                        c = a.installOnboardingType,
                                        l = a.installSliderSwapCount,
                                        u = e._context.i18n;
                                    e.onBoarding = new n({
                                        accept: function(t) {
                                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                o = n.sec,
                                                r = n.slk,
                                                a = n.clickParams,
                                                i = e._getRapidTracker && e._getRapidTracker();
                                            i && i.beaconClick(o, r, 0, a), e._showNativeInstallPrompt()
                                        },
                                        didShow: function(t) {
                                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                                r = o.type,
                                                a = e._getRapidTracker && e._getRapidTracker();
                                            return a && a.beaconLinkViews([{
                                                sec: t,
                                                _links: [n]
                                            }]), e.db.then(function(t) {
                                                return e.handleInstallPromptShown(t, r)
                                            }).catch(function() {})
                                        },
                                        prompt: i,
                                        reject: function(t) {
                                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                o = n.sec,
                                                r = n.slk,
                                                a = n.clickParams,
                                                i = e._getRapidTracker && e._getRapidTracker();
                                            i && i.beaconClick(o, r, 0, a)
                                        }
                                    }, {
                                        beacon: r,
                                        constructBeaconUrl: m,
                                        i18n: u
                                    }), e.db.then(function(e) {
                                        return e.get("lastInstallPromptShown", "onboard")
                                    }).then(function() {
                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            n = t.type,
                                            o = void 0 === n ? c : n,
                                            r = t.shownCount,
                                            a = void 0 === r ? 0 : r;
                                        "bottomSlider" === o ? a >= l && (o = "card") : a >= s && (o = "bottomSlider"), e.onBoarding.renderCustomInstallPrompt({
                                            type: o
                                        })
                                    }).catch(function() {
                                        e.onBoarding.renderCustomInstallPrompt({
                                            type: c
                                        })
                                    })
                                }
                            }).catch(function() {})
                        }
                    }]), e
                }(),
                S = Y,
                T = n("./src/lib/i18n.js"),
                _ = n.n(T),
                A = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                C = {
                    beacon: {
                        beaconSrc: "HomepagePWA",
                        bucket: "",
                        rid: ""
                    },
                    serviceWorker: {
                        scope: "/",
                        serviceWorkerUrl: "/service-worker.js"
                    }
                },
                j = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        a(this, e), this._config = v(C, t)
                    }
                    return A(e, [{
                        key: "register",
                        value: function() {
                            if (!(navigator && "serviceWorker" in navigator)) return Promise.reject();
                            var e = this._config,
                                t = e.beacon,
                                n = t.beaconSrc,
                                o = t.bucket,
                                r = t.rid,
                                a = e.serviceWorker,
                                i = a.scope,
                                s = a.serviceWorkerUrl;
                            return navigator.serviceWorker.register(s, {
                                scope: i
                            }).then(function(e) {
                                var t = m("info", {
                                    beaconSrc: n,
                                    bucket: o,
                                    eventName: "svcWkrRegSuccess",
                                    rid: r
                                });
                                return Object(u.c)(t), e
                            }, function(e) {
                                var t = m("error", {
                                    beaconSrc: n,
                                    bucket: o,
                                    eventName: "svcWkrRegError",
                                    message: e,
                                    rid: r
                                });
                                Object(u.c)(t)
                            })
                        }
                    }, {
                        key: "getRegistration",
                        value: function() {
                            if (!(navigator && "serviceWorker" in navigator)) return Promise.reject(new Error("Service worker not supported"));
                            var e = this.scope;
                            return navigator.serviceWorker.getRegistration(e)
                        }
                    }, {
                        key: "getPreferredActiveWorker",
                        value: function() {
                            return this.getRegistration().then(function(e) {
                                if (!e) throw new Error("Service worker not registered");
                                var t = e.installing || e.waiting;
                                return t ? new Promise(function(e) {
                                    t.addEventListener("statechange", function() {
                                        if ("active" === t.state) return e(t)
                                    })
                                }) : e.active ? e.active : navigator.serviceWorker.controller ? navigator.serviceWorker.controller : null
                            })
                        }
                    }, {
                        key: "sendMessage",
                        value: function(e) {
                            var t = e.method,
                                n = e.params,
                                o = void 0 === n ? [] : n;
                            return new Promise(function(e, n) {
                                var r = "serviceWorker" in navigator && navigator.serviceWorker.controller;
                                if (!r) return n(new Error("Page is not controlled by a ServiceWorker."));
                                if (!t) return n(new Error("Post message expects a method"));
                                var a = new MessageChannel,
                                    i = a.port1,
                                    s = a.port2;
                                i.onmessage = function(t) {
                                    var o = t.data;
                                    o = void 0 === o ? {} : o;
                                    var r = o.error,
                                        a = o.result;
                                    r ? n(r) : e(a), i.onmessage = null
                                }, r.postMessage({
                                    method: t,
                                    params: o
                                }, [s])
                            })
                        }
                    }]), e
                }(),
                x = j,
                P = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                I = function() {
                    function e(t) {
                        i(this, e), t && t.length && (this._keys = Object.freeze(t), this._map = {})
                    }
                    return P(e, [{
                        key: "addToSlot",
                        value: function(e, t) {
                            return t && e && this._keys && -1 !== this._keys.indexOf(e) && !this._map[e] ? (this._map[e] = t, "success") : null
                        }
                    }, {
                        key: "getItemAtSlot",
                        value: function(e) {
                            return e ? this._map[e] : null
                        }
                    }, {
                        key: "slotNames",
                        get: function() {
                            return this._keys
                        }
                    }]), e
                }(),
                O = I,
                N = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                W = s(["You are back online."], ["You are back online."]),
                L = s(["No internet connection."], ["No internet connection."]),
                E = "transform: translate(-50%, -50%); top: 50%; left: 50%; position: absolute; width: 90vw; text-align: center",
                B = {
                    beacon: {
                        beaconSrc: "HomepagePWA",
                        bucket: "",
                        rid: ""
                    },
                    userConnectionToast: {
                        toastDelay: 2,
                        toastHideDelay: 5
                    }
                },
                D = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        c(this, e), this._config = v(B, t), this._context = n;
                        var o = this._config.userConnectionToast,
                            r = o.toastDelay,
                            a = o.toastHideDelay;
                        if (this._injectOfflineToast(), this._toastWrapper && this._offlineToastNode && this._onlineToastNode) {
                            var i = 1e3 * parseInt(r, 10);
                            this._config.userConnectionToast.toastHideDelayMs = 1e3 * parseInt(a, 10), this._updateConnectionStateDelayed = g(this._updateConnectionState, i, this), this._stateWhenLastChecked = null, this._updateConnectionState(), Object(u.a)(window, "online", this._updateConnectionStateDelayed), Object(u.a)(window, "offline", this._updateConnectionStateDelayed)
                        }
                    }
                    return N(e, [{
                        key: "destroy",
                        value: function() {
                            var e = this._toastWrapper;
                            e && e.parentNode.removeChild(e), this._hideTimer && clearTimeout(this._hideTimer), Object(u.e)(window, "online", this._updateConnectionStateDelayed), Object(u.e)(window, "offline", this._updateConnectionStateDelayed)
                        }
                    }, {
                        key: "_updateConnectionState",
                        value: function() {
                            var e = this,
                                t = window,
                                n = t.navigator;
                            n = void 0 === n ? {} : n;
                            var o = n.onLine;
                            if (this._stateWhenLastChecked !== o && (null !== this._stateWhenLastChecked || !o)) {
                                var r = this._config,
                                    a = r.beacon,
                                    i = r.userConnectionToast,
                                    s = a.beaconSrc,
                                    c = a.bucket,
                                    l = a.rid;
                                this._hideTimer && clearTimeout(this._hideTimer);
                                var d = void 0;
                                if (o) {
                                    var h = m("info", {
                                        bucket: c,
                                        eventName: "userComesBackOnline",
                                        offlineFor: Date.now() - d,
                                        rid: l,
                                        src: s
                                    });
                                    d = null, Object(u.c)(h), document.body.classList.remove("connection-offline"), navigator.serviceWorker && navigator.serviceWorker.ready.then(function(e) {
                                        return e.sync.register("online")
                                    })
                                } else {
                                    d = Date.now();
                                    var f = m("info", {
                                        bucket: c,
                                        eventName: "userWentOffline",
                                        rid: l,
                                        src: s
                                    });
                                    Object(u.c)(f), document.body.classList.add("connection-offline")
                                }
                                this._setDisplay(this._toastWrapper, !0), this._toastWrapper.style[b] = "translateY(0px)", this._setDisplay(this._onlineToastNode, o), this._setDisplay(this._offlineToastNode, !o), this._hideTimer = setTimeout(function() {
                                    e._setDisplay(e._toastWrapper, !1), e._toastWrapper.style[b] = "translateY(300px)"
                                }, i.toastHideDelayMs), this._stateWhenLastChecked = o
                            }
                        }
                    }, {
                        key: "_injectOfflineToast",
                        value: function() {
                            if (!document.getElementById("connection-toast-wrapper")) {
                                var e = document.createElement("div"),
                                    t = this._context.i18n,
                                    n = t(W),
                                    o = t(L);
                                e.innerHTML = "<div id='connection-toast-wrapper' style='visibility:hidden; z-index:10; position: fixed; transform: translateY(300px);bottom: 10px; left: 10px; right: 10px; height: 50px; padding: 5px 15px;background-color: #3c3c3c; color: #fff; transition: opacity 0.5s ease;'>\n                <div id='online-toast' role='dialog' aria-label='" + n + "' style='" + E + "'>\n                    " + n + "\n                </div>\n                <div id='offline-toast' role='dialog' aria-label='" + o + "' style='" + E + "'>\n                    " + o + "\n                </div>\n            </div>", document.body.appendChild(e), this._toastWrapper = document.getElementById("connection-toast-wrapper"), this._onlineToastNode = document.getElementById("online-toast"), this._offlineToastNode = document.getElementById("offline-toast")
                            }
                        }
                    }, {
                        key: "_setDisplay",
                        value: function(e, t) {
                            Object.assign(e.style, {
                                opacity: t ? 1 : 0,
                                visibility: t ? "visible" : "hidden"
                            })
                        }
                    }]), e
                }(),
                G = D,
                z = n("./allStrings.json"),
                R = n.n(z);
            n.d(t, "PWA", function() {
                return M
            });
            var H = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                F = {
                    addToHomeScreen: {
                        enabled: !1,
                        forNativeApp: !1,
                        useBeforeInstallPrompt: !1
                    },
                    beacon: {
                        bucket: "",
                        beaconSrc: "HomepagePWA",
                        rid: ""
                    },
                    onboarding: {
                        installCardSwapCount: 3,
                        installCoolOffTime: 1,
                        installOnboardingType: "bottomSlider",
                        installSliderSwapCount: 1
                    },
                    pageInfo: {
                        device: null,
                        lang: "en-US",
                        region: null,
                        site: "fp"
                    },
                    promoSlots: {
                        enabled: !1,
                        slots: ["bottom", "top"]
                    },
                    serviceWorker: {
                        enabled: !1,
                        scope: "/",
                        serviceWorkerUrl: "/service-worker.js"
                    },
                    serviceWorkerFeatures: {
                        didWrite: function() {},
                        write: !1,
                        values: null
                    },
                    tracker: {
                        instance: null,
                        trackerWindowPath: "rapidInstance"
                    },
                    userConnectionToast: {
                        enabled: !1
                    }
                },
                M = function() {
                    function e() {
                        var t = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        l(this, e);
                        var o = v(F, n);
                        this._config = o;
                        var r = o.addToHomeScreen,
                            a = o.beacon,
                            i = o.onboarding,
                            s = o.promoSlots,
                            c = o.pageInfo,
                            u = o.serviceWorker,
                            d = o.userConnectionToast;
                        this.getRapidTracker = this.getRapidTracker.bind(this), p(function() {
                            if (r.enabled) {
                                var e = r.forNativeApp,
                                    n = r.useBeforeInstallPrompt;
                                t.addToHomeScreen = new S({
                                    beacon: a,
                                    onboarding: i,
                                    pageInfo: c,
                                    prompt: {
                                        forNativeApp: e,
                                        useBeforeInstallPrompt: n
                                    }
                                }, t.getRapidTracker, {
                                    i18n: t.i18n
                                })
                            }
                            u.enabled && (t.serviceWorker = new x({
                                beacon: a,
                                serviceWorker: u
                            })), s.enabled && s.slots && (t.promoSlots = new O(s.slots)), t._addFeaturesIntoFeaturesStore(), t._addContextIntoContextStore(), d.enabled && (t.userConnectionToast = new G({
                                beacon: a,
                                userConnectionToast: d
                            }, {
                                i18n: t.i18n
                            })), t.isPWA && t.handlePWAOpen()
                        })
                    }
                    return H(e, [{
                        key: "_addFeaturesIntoFeaturesStore",
                        value: function() {
                            var e = this,
                                t = this._config,
                                n = t.beacon,
                                o = t.serviceWorkerFeatures,
                                r = o.didWrite,
                                a = o.values;
                            if (o.write)
                                if (a && a === Object(a)) this.featuresDB = new f({
                                    cb: function(t) {
                                        if ("success" === t) return e.featuresDB.set({
                                            key: "features",
                                            values: a
                                        }, "features", {
                                            timeout: 2e3
                                        }).then(function() {
                                            return window.navigator && "serviceWorker" in window.navigator ? e.serviceWorker.getPreferredActiveWorker() : null
                                        }).then(function(t) {
                                            if (t) return e.serviceWorker && e.serviceWorker.sendMessage({
                                                method: "precache"
                                            })
                                        }).catch(function(e) {
                                            var t = e instanceof Error ? e.message : e,
                                                o = m("error", Object.assign({
                                                    eventName: "serviceWorkerFeatures",
                                                    eventType: "Features IDB | Post message",
                                                    message: t
                                                }, n));
                                            Object(u.c)(o)
                                        }), void(r && r());
                                        var o = m("error", Object.assign({
                                            eventName: "serviceWorkerFeatures",
                                            eventType: "Connection failed"
                                        }, n));
                                        Object(u.c)(o), r && r(new Error("could not connect"))
                                    },
                                    name: "serviceWorker",
                                    version: 1,
                                    tables: ["features", "context"]
                                });
                                else {
                                    var i = m("error", Object.assign({
                                        eventName: "serviceWorkerFeatures",
                                        eventType: "Malformed object"
                                    }, n));
                                    Object(u.c)(i), r && r(new Error("values is not object"))
                                }
                            else {
                                var s = m("info", Object.assign({
                                    eventName: "serviceWorkerFeatures",
                                    eventType: "Disabled"
                                }, n));
                                Object(u.c)(s), r && r(new Error("feature not enabled"))
                            }
                        }
                    }, {
                        key: "_addContextIntoContextStore",
                        value: function() {
                            var e = this,
                                t = this._config,
                                n = t.beacon,
                                o = t.pageInfo,
                                r = o.lang,
                                a = o.region,
                                i = o.site;
                            this.contextDB = new f({
                                cb: function(t) {
                                    if ("success" === t) return void e.contextDB.set({
                                        key: "context",
                                        values: {
                                            lang: r,
                                            region: a,
                                            site: i
                                        }
                                    }, "context").catch(function(e) {
                                        var t = e instanceof Error ? e.message : e,
                                            o = m("error", Object.assign({
                                                eventName: "serviceWorkerContext",
                                                message: t
                                            }, n));
                                        Object(u.c)(o)
                                    });
                                    var o = m("error", Object.assign({
                                        eventName: "serviceWorkerContext",
                                        eventType: "Connection failed"
                                    }, n));
                                    Object(u.c)(o)
                                },
                                name: "serviceWorker",
                                version: 1,
                                tables: ["features", "context"]
                            })
                        }
                    }, {
                        key: "i18n",
                        get: function() {
                            if (this._i18n) return this._i18n;
                            var e = this._config.pageInfo,
                                t = e.lang;
                            return this._i18n = _()().use({
                                locale: t,
                                defaultCurrency: "USD",
                                messageBundle: R.a[t] || R.a["en-US"]
                            }), this._i18n
                        }
                    }, {
                        key: "isPWA",
                        get: function() {
                            return void 0 !== this._isPWA ? this._isPWA : (this._isPWA = !1, window.navigator && "standalone" in window.navigator && window.navigator.standalone ? this._isPWA = !0 : void 0 !== window.matchMedia && window.matchMedia("(display-mode: standalone)").matches ? this._isPWA = !0 : void 0 !== window.msMatchMedia && window.msMatchMedia("(display-mode: standalone)").matches && (this._isPWA = !0), this._isPWA)
                        }
                    }]), H(e, [{
                        key: "handlePWAOpen",
                        value: function() {
                            var e = this;
                            this.onboardingDB = new f({
                                cb: function(t) {
                                    if ("success" === t) {
                                        var n = e._config.beacon;
                                        e.onboardingDB.get("trackOpen", "onboard").then(function(t) {
                                            if (t) {
                                                var o = t.installedAt;
                                                e.renderOnBoardingPrompt(), e.onboardingDB.delete("trackOpen", "onboard");
                                                var r = m("info", Object.assign({
                                                    eventName: "openAppFirstTime",
                                                    eventType: "tracking",
                                                    timeTakenFromInstallation: Date.now() - o
                                                }, n));
                                                Object(u.c)(r)
                                            }
                                        }).catch(function(e) {})
                                    }
                                },
                                name: "homepagelite",
                                version: 1,
                                tables: ["onboard"]
                            })
                        }
                    }, {
                        key: "renderOnBoardingPrompt",
                        value: function() {
                            var e = this;
                            new Promise(function(e) {
                                n.e(0).then(function(t) {
                                    e(n("../homepage-pwa-onboarding/src/base.js"))
                                }.bind(null, n)).catch(n.oe)
                            }).then(function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = t.PWAOnboarding,
                                    o = e._config,
                                    r = o.addToHomeScreen,
                                    a = o.beacon,
                                    i = r.forNativeApp,
                                    s = r.useBeforeInstallPrompt;
                                e.onBoarding = new n({
                                    accept: function(t) {
                                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            o = n.sec,
                                            r = n.slk,
                                            a = n.clickParams,
                                            i = e.getRapidTracker();
                                        i && i.beaconClick(o, r, 0, a)
                                    },
                                    didShow: function(t) {
                                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            o = e.getRapidTracker();
                                        o && o.beaconLinkViews([{
                                            sec: t,
                                            _links: [n]
                                        }]);
                                        var r = e.promoSlots;
                                        r && r.addToSlot("bottom", "yahoo_lite_promo")
                                    },
                                    prompt: {
                                        forNativeApp: i,
                                        useBeforeInstallPrompt: s
                                    },
                                    reject: function(t) {
                                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            o = n.sec,
                                            r = n.slk,
                                            a = n.clickParams,
                                            i = e.getRapidTracker();
                                        i && i.beaconClick(o, r, 0, a)
                                    }
                                }, {
                                    beacon: a,
                                    constructBeaconUrl: m,
                                    i18n: e.i18n
                                }), e.onBoarding.renderPostInstall()
                            })
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.addToHomeScreen && this.addToHomeScreen.destroy(), this.onBoarding && this.onBoarding.destroy()
                        }
                    }, {
                        key: "getRapidTracker",
                        value: function() {
                            var e = this._config.tracker,
                                t = e.instance,
                                n = e.trackerWindowPath;
                            return t || window[n]
                        }
                    }]), e
                }()
        },
        "./src/lib/i18n.js": function(e, t) {
            function n(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
            var o = /^:([a-z])(\((.+)\))?/;
            e.exports = function() {
                var e = {};
                return {
                    use: function(t) {
                        var n = t.locale,
                            o = t.defaultCurrency,
                            r = t.messageBundle;
                        return e.locale = n, e.defaultCurrency = o, e.messageBundle = r, this.translate.bind(this)
                    },
                    translate: function(t) {
                        var o = this,
                            r = this._buildKey(t),
                            a = e.messageBundle[r];
                        if (a) {
                            for (var i = t.slice(1).map(this._extractTypeInfo), s = arguments.length, c = Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) c[l - 1] = arguments[l];
                            var u = c.map(function(e, t) {
                                return o._localize(e, i[t])
                            });
                            return this._buildMessage.apply(this, [a].concat(n(u)))
                        }
                        return "Error: " + r + " translation missing!"
                    },
                    _localizers: {
                        s: function(t) {
                            return t && t.toLocaleString(e.locale)
                        },
                        c: function(t, n) {
                            return t && t.toLocaleString(e.locale, {
                                style: "currency",
                                currency: n || e.defaultCurrency
                            })
                        },
                        n: function(t, n) {
                            return t && t.toLocaleString(e.locale, {
                                minimumFractionDigits: n,
                                maximumFractionDigits: n
                            })
                        }
                    },
                    _extractTypeInfo: function(e) {
                        var t = o.exec(e);
                        return t ? {
                            type: t[1],
                            options: t[3]
                        } : {
                            type: "s",
                            options: ""
                        }
                    },
                    _localize: function(e, t) {
                        var n = t.type,
                            o = t.options;
                        return this._localizers[n](e, o)
                    },
                    _buildKey: function(e) {
                        var t = function(e) {
                                return e.replace(o, "")
                            },
                            n = t(e[e.length - 1]),
                            r = function(e, n, o) {
                                return t(n) + "{" + o + "}" + e
                            };
                        return e.slice(0, -1).reduceRight(r, n)
                    },
                    _buildMessage: function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                        return e.replace(/{(\d)}/g, function(e, t) {
                            return n[Number(t)]
                        })
                    }
                }
            }
        }
    })
});