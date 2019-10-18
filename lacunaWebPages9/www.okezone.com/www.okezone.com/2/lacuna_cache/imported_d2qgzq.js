! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = "1.11.3",
    m = function(a, b) {
      return new m.fn.init(a, b)
    },
    n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    o = /^-ms-/,
    p = /-([\da-z])/gi,
    q = function(a, b) {};
  m.fn = m.prototype = {
    jquery: l,
    constructor: m,
    selector: "",
    length: 0,
    toArray: function() {},
    get: function(a) {},
    pushStack: function(a) {},
    each: function(a, b) {
      return m.each(this, a, b)
    },
    map: function(a) {},
    slice: function() {},
    first: function() {},
    last: function() {},
    eq: function(a) {},
    end: function() {},
    push: f,
    sort: c.sort,
    splice: c.splice
  }, m.extend = m.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (e = arguments[h]))
        for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g
  }, m.extend({
    expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {},
    noop: function() {},
    isFunction: function(a) {
      return "function" === m.type(a)
    },
    isArray: Array.isArray || function(a) {},
    isWindow: function(a) {
      return null != a && a == a.window
    },
    isNumeric: function(a) {},
    isEmptyObject: function(a) {},
    isPlainObject: function(a) {
      var b;
      if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
      try {
        if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      if (k.ownLast)
        for (b in a) return j.call(a, b);
      for (b in a);
      return void 0 === b || j.call(a, b)
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
    },
    globalEval: function(b) {},
    camelCase: function(a) {},
    nodeName: function(a, b) {},
    each: function(a, b, c) {
      var d, e = 0,
        f = a.length,
        g = r(a);
      if (c) {
        if (g) {
          for (; f > e; e++)
            if (d = b.apply(a[e], c), d === !1) break
        } else
          for (e in a)
            if (d = b.apply(a[e], c), d === !1) break
      } else if (g) {
        for (; f > e; e++)
          if (d = b.call(a[e], e, a[e]), d === !1) break
      } else
        for (e in a)
          if (d = b.call(a[e], e, a[e]), d === !1) break;
      return a
    },
    trim: function(a) {},
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
    },
    inArray: function(a, b, c) {},
    merge: function(a, b) {},
    grep: function(a, b, c) {},
    map: function(a, b, c) {},
    guid: 1,
    proxy: function(a, b) {},
    now: function() {
      return +new Date
    },
    support: k
  }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
    h["[object " + b + "]"] = b.toLowerCase()
  });

  function r(a) {
    var b = "length" in a && a.length,
      c = m.type(a);
    return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  var s = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function(a, b) {
        return a === b && (l = !0), 0
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function(a, b) {},
      K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = M.replace("w", "w#"),
      O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
      P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
      Q = new RegExp(L + "+", "g"),
      R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      S = new RegExp("^" + L + "*," + L + "*"),
      T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      V = new RegExp(P),
      W = new RegExp("^" + N + "$"),
      X = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + O),
        PSEUDO: new RegExp("^" + P),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      aa = /[+~]/,
      ba = /'|\\/g,
      ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      da = function(a, b, c) {},
      ea = function() {};
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
    } catch (fa) {
      H = {
        apply: E.length ? function(a, b) {} : function(a, b) {}
      }
    }

    function ga(a, b, d, e) {}

    function ha() {
      var a = [];

      function b(c, e) {}
      return b
    }

    function ia(a) {
      return a[u] = !0, a
    }

    function ja(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ka(a, b) {}

    function la(a, b) {}

    function ma(a) {
      return function(b) {}
    }

    function na(a) {
      return function(b) {}
    }

    function oa(a) {
      return ia(function(b) {})
    }

    function pa(a) {}
    c = ga.support = {}, f = ga.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = ga.setDocument = function(a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ja(function(a) {
        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function(a, b) {}, d.filter.ID = function(a) {}) : (delete d.find.ID, d.filter.ID = function(a) {}), d.find.TAG = c.getElementsByTagName ? function(a, b) {} : function(a, b) {}, d.find.CLASS = c.getElementsByClassName && function(a, b) {}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ja(function(a) {
        var b = g.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {} : function(a, b) {}, B = b ? function(a, b) {} : function(a, b) {}, g) : n
    }, ga.matches = function(a, b) {}, ga.matchesSelector = function(a, b) {}, ga.contains = function(a, b) {}, ga.attr = function(a, b) {}, ga.error = function(a) {}, ga.uniqueSort = function(a) {}, e = ga.getText = function(a) {}, d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(a) {},
        CHILD: function(a) {},
        PSEUDO: function(a) {}
      },
      filter: {
        TAG: function(a) {},
        CLASS: function(a) {},
        ATTR: function(a, b, c) {},
        CHILD: function(a, b, c, d, e) {},
        PSEUDO: function(a, b) {}
      },
      pseudos: {
        not: ia(function(a) {}),
        has: ia(function(a) {}),
        contains: ia(function(a) {}),
        lang: ia(function(a) {}),
        target: function(b) {},
        root: function(a) {},
        focus: function(a) {},
        enabled: function(a) {},
        disabled: function(a) {},
        checked: function(a) {},
        selected: function(a) {},
        empty: function(a) {},
        parent: function(a) {},
        header: function(a) {},
        input: function(a) {},
        button: function(a) {},
        text: function(a) {},
        first: oa(function() {}),
        last: oa(function(a, b) {}),
        eq: oa(function(a, b, c) {}),
        even: oa(function(a, b) {}),
        odd: oa(function(a, b) {}),
        lt: oa(function(a, b, c) {}),
        gt: oa(function(a, b, c) {})
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = ma(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = na(b);

    function qa() {}
    qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {};

    function ra(a) {}

    function sa(a, b, c) {}

    function ta(a) {}

    function ua(a, b, c) {}

    function va(a, b, c, d, e) {}

    function wa(a, b, c, d, e, f) {}

    function xa(a) {}

    function ya(a, b) {}
    return h = ga.compile = function(a, b) {}, i = ga.select = function(a, b, e, f) {}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ja(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ka("type|href|height|width", function(a, b, c) {}), c.attributes && ja(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ka("value", function(a, b, c) {}), ja(function(a) {
      return null == a.getAttribute("disabled")
    }) || ka(K, function(a, b, c) {}), ga
  }(a);
  m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
  var t = m.expr.match.needsContext,
    u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    v = /^.[^:#\[\.,]*$/;

  function w(a, b, c) {}
  m.filter = function(a, b, c) {}, m.fn.extend({
    find: function(a) {},
    filter: function(a) {},
    not: function(a) {},
    is: function(a) {}
  });
  var x, y = a.document,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = m.fn.init = function(a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
        if (c[1]) {
          if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
            for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this
        }
        if (d = y.getElementById(c[2]), d && d.parentNode) {
          if (d.id !== c[2]) return x.find(a);
          this.length = 1, this[0] = d
        }
        return this.context = y, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
    };
  A.prototype = m.fn, x = m(y);
  var B = /^(?:parents|prev(?:Until|All))/,
    C = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  m.extend({
    dir: function(a, b, c) {},
    sibling: function(a, b) {}
  }), m.fn.extend({
    has: function(a) {},
    closest: function(a, b) {},
    index: function(a) {},
    add: function(a, b) {},
    addBack: function(a) {}
  });

  function D(a, b) {}
  m.each({
    parent: function(a) {},
    parents: function(a) {},
    parentsUntil: function(a, b, c) {},
    next: function(a) {},
    prev: function(a) {},
    nextAll: function(a) {},
    prevAll: function(a) {},
    nextUntil: function(a, b, c) {},
    prevUntil: function(a, b, c) {},
    siblings: function(a) {},
    children: function(a) {},
    contents: function(a) {}
  }, function(a, b) {
    m.fn[a] = function(c, d) {}
  });
  var E = /\S+/g,
    F = {};

  function G(a) {
    var b = F[a] = {};
    return m.each(a.match(E) || [], function(a, c) {
      b[c] = !0
    }), b
  }
  m.Callbacks = function(a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
    var b, c, d, e, f, g, h = [],
      i = !a.once && [],
      j = function(l) {
        for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
          if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break
          } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
      },
      k = {
        add: function() {
          if (h) {
            var d = h.length;
            ! function f(b) {
              m.each(b, function(b, c) {
                var d = m.type(c);
                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
              })
            }(arguments), b ? e = h.length : c && (g = d, j(c))
          }
          return this
        },
        remove: function() {},
        has: function(a) {},
        empty: function() {},
        disable: function() {
          return h = i = c = void 0, this
        },
        disabled: function() {},
        lock: function() {
          return i = void 0, c || k.disable(), this
        },
        locked: function() {},
        fireWith: function(a, c) {
          return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
        },
        fire: function() {},
        fired: function() {}
      };
    return k
  }, m.extend({
    Deferred: function(a) {
      var b = [
          ["resolve", "done", m.Callbacks("once memory"), "resolved"],
          ["reject", "fail", m.Callbacks("once memory"), "rejected"],
          ["notify", "progress", m.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function() {},
          always: function() {},
          then: function() {},
          promise: function(a) {
            return null != a ? m.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, m.each(b, function(a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {}, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function(a) {}
  });
  var H;
  m.fn.ready = function(a) {
    return m.ready.promise().done(a), this
  }, m.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {},
    ready: function(a) {
      if (a === !0 ? !--m.readyWait : !m.isReady) {
        if (!y.body) return setTimeout(m.ready);
        m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
      }
    }
  });

  function I() {
    y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
  }

  function J() {
    (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
  }
  m.ready.promise = function(b) {
    if (!H)
      if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
      else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
    else {
      y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
      var c = !1;
      try {
        c = null == a.frameElement && y.documentElement
      } catch (d) {}
      c && c.doScroll && ! function e() {}()
    }
    return H.promise(b)
  };
  var K = "undefined",
    L;
  for (L in m(k)) break;
  k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
      var a, b, c, d;
      c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }),
    function() {
      var a = y.createElement("div");
      if (null == k.deleteExpando) {
        k.deleteExpando = !0;
        try {
          delete a.test
        } catch (b) {
          k.deleteExpando = !1
        }
      }
      a = null
    }(), m.acceptData = function(a) {
      var b = m.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
  var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    N = /([A-Z])/g;

  function O(a, b, c) {}

  function P(a) {}

  function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f, g, h = m.expando,
        i = a.nodeType,
        j = i ? m.cache : a,
        k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: m.noop
      }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
    }
  }

  function R(a, b, c) {}
  m.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(a) {
      return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
    },
    data: function(a, b, c) {},
    removeData: function(a, b) {},
    _data: function(a, b, c) {
      return Q(a, b, c, !0)
    },
    _removeData: function(a, b) {}
  }), m.fn.extend({
    data: function(a, b) {},
    removeData: function(a) {}
  }), m.extend({
    queue: function(a, b, c) {},
    dequeue: function(a, b) {},
    _queueHooks: function(a, b) {}
  }), m.fn.extend({
    queue: function(a, b) {},
    dequeue: function(a) {},
    clearQueue: function(a) {},
    promise: function(a, b) {}
  });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = ["Top", "Right", "Bottom", "Left"],
    U = function(a, b) {},
    V = m.access = function(a, b, c, d, e, f, g) {},
    W = /^(?:checkbox|radio)$/i;
  ! function() {
    var a = y.createElement("input"),
      b = y.createElement("div"),
      c = y.createDocumentFragment();
    if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {}), b.cloneNode(!0).click()), null == k.deleteExpando) {
      k.deleteExpando = !0;
      try {
        delete b.test
      } catch (d) {
        k.deleteExpando = !1
      }
    }
  }(),
  function() {
    var b, c, d = y.createElement("div");
    for (b in {
        submit: !0,
        change: !0,
        focusin: !0
      }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
    d = null
  }();
  var X = /^(?:input|select|textarea)$/i,
    Y = /^key/,
    Z = /^(?:mouse|pointer|contextmenu)|click/,
    $ = /^(?:focusinfocus|focusoutblur)$/,
    _ = /^([^.]*)(?:\.(.+)|)$/;

  function aa() {}

  function ba() {
    return !1
  }

  function ca() {}
  m.event = {
    global: {},
    add: function(a, b, c, d, e) {},
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
      if (r && (k = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;
        while (j--)
          if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
            while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
            i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
          } else
            for (o in k) m.event.remove(a, o + b[j], c, d, !0);
        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
      }
    },
    trigger: function(b, c, d, e) {
      var f, g, h, i, k, l, n, o = [d || y],
        p = j.call(b, "type") ? b.type : b,
        q = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
          l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
        }
        n = 0;
        while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
          l = d[g], l && (d[g] = null), m.event.triggered = p;
          try {
            d[p]()
          } catch (r) {}
          m.event.triggered = void 0, l && (d[g] = l)
        }
        return b.result
      }
    },
    dispatch: function(a) {},
    handlers: function(a, b) {},
    fix: function(a) {},
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {}
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {}
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {},
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {},
        delegateType: "focusout"
      },
      click: {
        trigger: function() {},
        _default: function(a) {}
      },
      beforeunload: {
        postDispatch: function(a) {}
      }
    },
    simulate: function(a, b, c, d) {}
  }, m.removeEvent = y.removeEventListener ? function(a, b, c) {} : function(a, b, c) {}, m.Event = function(a, b) {
    return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
  }, m.Event.prototype = {
    isDefaultPrevented: ba,
    isPropagationStopped: ba,
    isImmediatePropagationStopped: ba,
    preventDefault: function() {},
    stopPropagation: function() {},
    stopImmediatePropagation: function() {}
  }, m.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    m.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {}
    }
  }), k.submitBubbles || (m.event.special.submit = {
    setup: function() {},
    postDispatch: function(a) {},
    teardown: function() {}
  }), k.changeBubbles || (m.event.special.change = {
    setup: function() {},
    handle: function(a) {},
    teardown: function() {}
  }), k.focusinBubbles || m.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {};
    m.event.special[b] = {
      setup: function() {},
      teardown: function() {}
    }
  }), m.fn.extend({
    on: function(a, b, c, d, e) {},
    one: function(a, b, c, d) {},
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function() {
        m.event.remove(this, a, c, b)
      })
    },
    trigger: function(a, b) {},
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? m.event.trigger(a, b, c, !0) : void 0
    }
  });

  function da(a) {
    var b = ea.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement)
      while (b.length) c.createElement(b.pop());
    return c
  }
  var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    fa = / jQuery\d+="(?:null|\d+)"/g,
    ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
    ha = /^\s+/,
    ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ja = /<([\w:]+)/,
    ka = /<tbody/i,
    la = /<|&#?\w+;/,
    ma = /<(?:script|style|link)/i,
    na = /checked\s*(?:[^=]|=\s*.checked.)/i,
    oa = /^$|\/(?:java|ecma)script/i,
    pa = /^true\/(.*)/,
    qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ra = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    sa = da(y),
    ta = sa.appendChild(y.createElement("div"));
  ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;

  function ua(a, b) {}

  function va(a) {}

  function wa(a, b) {}

  function xa(a) {}

  function ya(a) {}

  function za(a, b) {}

  function Aa(a, b) {}

  function Ba(a, b) {}
  m.extend({
    clone: function(a, b, c) {},
    buildFragment: function(a, b, c, d) {},
    cleanData: function(a, b) {}
  }), m.fn.extend({
    text: function(a) {},
    append: function() {},
    prepend: function() {},
    before: function() {},
    after: function() {},
    remove: function(a, b) {},
    empty: function() {},
    clone: function(a, b) {},
    html: function(a) {},
    replaceWith: function() {},
    detach: function(a) {},
    domManip: function(a, b) {}
  }), m.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    m.fn[a] = function(a) {}
  });
  var Ca, Da = {};

  function Ea(b, c) {}

  function Fa(a) {}! function() {
    var a;
    k.shrinkWrapBlocks = function() {}
  }();
  var Ga = /^margin/,
    Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ia, Ja, Ka = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ia = function(b) {}, Ja = function(a, b, c) {}) : y.documentElement.currentStyle && (Ia = function(a) {}, Ja = function(a, b, c) {});

  function La(a, b) {
    return {
      get: function() {}
    }
  }! function() {
    var b, c, d, e, f, g, h;
    if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
      c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
        reliableHiddenOffsets: function() {},
        boxSizingReliable: function() {},
        pixelPosition: function() {},
        reliableMarginRight: function() {}
      });

      function i() {}
    }
  }(), m.swap = function(a, b, c, d) {};
  var Ma = /alpha\([^)]*\)/i,
    Na = /opacity\s*=\s*([^)]*)/,
    Oa = /^(none|table(?!-c[ea]).+)/,
    Pa = new RegExp("^(" + S + ")(.*)$", "i"),
    Qa = new RegExp("^([+-])=(" + S + ")", "i"),
    Ra = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Sa = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ta = ["Webkit", "O", "Moz", "ms"];

  function Ua(a, b) {}

  function Va(a, b) {}

  function Wa(a, b, c) {}

  function Xa(a, b, c, d, e) {}

  function Ya(a, b, c) {}
  m.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {}
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": k.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(a, b, c, d) {},
    css: function(a, b, c, d) {}
  }), m.each(["height", "width"], function(a, b) {
    m.cssHooks[b] = {
      get: function(a, c, d) {},
      set: function(a, c, d) {}
    }
  }), k.opacity || (m.cssHooks.opacity = {
    get: function(a, b) {},
    set: function(a, b) {}
  }), m.cssHooks.marginRight = La(k.reliableMarginRight, function(a, b) {}), m.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    m.cssHooks[a + b] = {
      expand: function(c) {}
    }, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
  }), m.fn.extend({
    css: function(a, b) {},
    show: function() {},
    hide: function() {},
    toggle: function(a) {}
  });

  function Za(a, b, c, d, e) {}
  m.Tween = Za, Za.prototype = {
    constructor: Za,
    init: function(a, b, c, d, e, f) {},
    cur: function() {},
    run: function(a) {}
  }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
    _default: {
      get: function(a) {},
      set: function(a) {}
    }
  }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
    set: function(a) {}
  }, m.easing = {
    linear: function(a) {},
    swing: function(a) {}
  }, m.fx = Za.prototype.init, m.fx.step = {};
  var $a, _a, ab = /^(?:toggle|show|hide)$/,
    bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    cb = /queueHooks$/,
    db = [ib],
    eb = {
      "*": [function(a, b) {}]
    };

  function fb() {}

  function gb(a, b) {
    var c, d = {
        height: a
      },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
    return b && (d.opacity = d.width = a), d
  }

  function hb(a, b, c) {}

  function ib(a, b, c) {}

  function jb(a, b) {}

  function kb(a, b, c) {}
  m.Animation = m.extend(kb, {
      tweener: function(a, b) {},
      prefilter: function(a, b) {}
    }), m.speed = function(a, b, c) {}, m.fn.extend({
      fadeTo: function(a, b, c, d) {},
      animate: function(a, b, c, d) {},
      stop: function(a, b, c) {},
      finish: function(a) {}
    }), m.each(["toggle", "show", "hide"], function(a, b) {
      var c = m.fn[b];
      m.fn[b] = function(a, d, e) {}
    }), m.each({
      slideDown: gb("show"),
      slideUp: gb("hide"),
      slideToggle: gb("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(a, b) {
      m.fn[a] = function(a, c, d) {}
    }), m.timers = [], m.fx.tick = function() {}, m.fx.timer = function(a) {}, m.fx.interval = 13, m.fx.start = function() {}, m.fx.stop = function() {}, m.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, m.fn.delay = function(a, b) {},
    function() {
      var a, b, c, d, e;
      b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
    }();
  var lb = /\r/g;
  m.fn.extend({
    val: function(a) {}
  }), m.extend({
    valHooks: {
      option: {
        get: function(a) {}
      },
      select: {
        get: function(a) {},
        set: function(a, b) {}
      }
    }
  }), m.each(["radio", "checkbox"], function() {
    m.valHooks[this] = {
      set: function(a, b) {}
    }, k.checkOn || (m.valHooks[this].get = function(a) {})
  });
  var mb, nb, ob = m.expr.attrHandle,
    pb = /^(?:checked|selected)$/i,
    qb = k.getSetAttribute,
    rb = k.input;
  m.fn.extend({
    attr: function(a, b) {},
    removeAttr: function(a) {}
  }), m.extend({
    attr: function(a, b, c) {},
    removeAttr: function(a, b) {},
    attrHooks: {
      type: {
        set: function(a, b) {}
      }
    }
  }), nb = {
    set: function(a, b, c) {}
  }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = ob[b] || m.find.attr;
    ob[b] = rb && qb || !pb.test(b) ? function(a, b, d) {} : function(a, b, c) {}
  }), rb && qb || (m.attrHooks.value = {
    set: function(a, b, c) {}
  }), qb || (mb = {
    set: function(a, b, c) {}
  }, ob.id = ob.name = ob.coords = function(a, b, c) {}, m.valHooks.button = {
    get: function(a, b) {},
    set: mb.set
  }, m.attrHooks.contenteditable = {
    set: function(a, b, c) {}
  }, m.each(["width", "height"], function(a, b) {})), k.style || (m.attrHooks.style = {
    get: function(a) {},
    set: function(a, b) {}
  });
  var sb = /^(?:input|select|textarea|button|object)$/i,
    tb = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function(a, b) {},
    removeProp: function(a) {}
  }), m.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(a, b, c) {},
    propHooks: {
      tabIndex: {
        get: function(a) {}
      }
    }
  }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {}), k.optSelected || (m.propHooks.selected = {
    get: function(a) {}
  }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    m.propFix[this.toLowerCase()] = this
  }), k.enctype || (m.propFix.enctype = "encoding");
  var ub = /[\t\r\n\f]/g;
  m.fn.extend({
    addClass: function(a) {},
    removeClass: function(a) {},
    toggleClass: function(a, b) {},
    hasClass: function(a) {}
  }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    m.fn[b] = function(a, c) {}
  }), m.fn.extend({
    hover: function(a, b) {},
    bind: function(a, b, c) {},
    unbind: function(a, b) {},
    delegate: function(a, b, c, d) {},
    undelegate: function(a, b, c) {}
  });
  var vb = m.now(),
    wb = /\?/,
    xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  m.parseJSON = function(b) {}, m.parseXML = function(b) {};
  var yb, zb, Ab = /#.*$/,
    Bb = /([?&])_=[^&]*/,
    Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Eb = /^(?:GET|HEAD)$/,
    Fb = /^\/\//,
    Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Hb = {},
    Ib = {},
    Jb = "*/".concat("*");
  try {
    zb = location.href
  } catch (Kb) {
    zb = y.createElement("a"), zb.href = "", zb = zb.href
  }
  yb = Gb.exec(zb.toLowerCase()) || [];

  function Lb(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(E) || [];
      if (m.isFunction(c))
        while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Mb(a, b, c, d) {}

  function Nb(a, b) {
    var c, d, e = m.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && m.extend(!0, a, c), a
  }

  function Ob(a, b, c) {}

  function Pb(a, b, c, d) {}
  m.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: zb,
      type: "GET",
      isLocal: Db.test(yb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Jb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": m.parseJSON,
        "text xml": m.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
    },
    ajaxPrefilter: Lb(Hb),
    ajaxTransport: Lb(Ib),
    ajax: function(a, b) {},
    getJSON: function(a, b, c) {},
    getScript: function(a, b) {}
  }), m.each(["get", "post"], function(a, b) {
    m[b] = function(a, c, d, e) {}
  }), m._evalUrl = function(a) {}, m.fn.extend({
    wrapAll: function(a) {},
    wrapInner: function(a) {},
    wrap: function(a) {},
    unwrap: function() {}
  }), m.expr.filters.hidden = function(a) {}, m.expr.filters.visible = function(a) {};
  var Qb = /%20/g,
    Rb = /\[\]$/,
    Sb = /\r?\n/g,
    Tb = /^(?:submit|button|image|reset|file)$/i,
    Ub = /^(?:input|select|textarea|keygen)/i;

  function Vb(a, b, c, d) {}
  m.param = function(a, b) {}, m.fn.extend({
    serialize: function() {},
    serializeArray: function() {}
  }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {} : Zb;
  var Wb = 0,
    Xb = {},
    Yb = m.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function() {}), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function(a) {});

  function Zb() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  }

  function $b() {}
  m.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(a) {}
    }
  }), m.ajaxPrefilter("script", function(a) {}), m.ajaxTransport("script", function(a) {});
  var _b = [],
    ac = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {}
  }), m.ajaxPrefilter("json jsonp", function(b, c, d) {}), m.parseHTML = function(a, b, c) {};
  var bc = m.fn.load;
  m.fn.load = function(a, b, c) {}, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    m.fn[b] = function(a) {}
  }), m.expr.filters.animated = function(a) {};
  var cc = a.document.documentElement;

  function dc(a) {}
  m.offset = {
    setOffset: function(a, b, c) {}
  }, m.fn.extend({
    offset: function(a) {},
    position: function() {},
    offsetParent: function() {}
  }), m.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, b) {
    var c = /Y/.test(b);
    m.fn[a] = function(d) {}
  }), m.each(["top", "left"], function(a, b) {
    m.cssHooks[b] = La(k.pixelPosition, function(a, c) {})
  }), m.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    m.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      m.fn[d] = function(d, e) {}
    })
  }), m.fn.size = function() {}, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {});
  var ec = a.jQuery,
    fc = a.$;
  return m.noConflict = function(b) {}, typeof b === K && (a.jQuery = a.$ = m), m
});