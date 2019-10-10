window.scriptsLoaded = window.scriptsLoaded || {};
window.scriptProcessStart = window.scriptProcessStart || {};
window.scriptProcessStart['boot.worldwide.0.narrow.js'] = (new Date()).getTime();
/* Empty file */
;
Function.__typeName = "Function";
Function.__class = !0;
Function.createCallback = function(n, t) {
    return function() {
        var r = arguments.length;
        if (r > 0) {
            for (var u = [], i = 0; i < r; i++) u[i] = arguments[i];
            u[r] = t;
            return n.apply(this, u)
        }
        return n.call(this, t)
    }
};
Function.prototype.bind = Function.prototype.bind || function(n) {
    if (typeof this != "function") throw new TypeError("bind(): we can only bind to functions");
    var u = Array.prototype.slice.call(arguments, 1),
        r = this,
        t = function() {},
        i = function() {
            return r.apply(this instanceof t ? this : n, u.concat(Array.prototype.slice.call(arguments)))
        };
    this.prototype && (t.prototype = this.prototype);
    i.prototype = new t;
    return i
};
Function.createDelegate = function(n, t) {
    return function() {
        return t.apply(n, arguments)
    }
};
Function.emptyFunction = Function.emptyMethod = function() {};
Error.__typeName = "Error";
Error.__class = !0;
Error.create = function(n, t) {
    var i = new Error(n);
    i.message = n;
    if (t)
        for (var r in t) i[r] = t[r];
    i.popStackFrame();
    return i
};
Error.argument = function(n, t) {
    var r = "Sys.ArgumentException: " + (t ? t : Sys.Res.argument);
    n && (r += "\n" + String.format(Sys.Res.paramName, n));
    var i = Error.create(r, {
        name: "Sys.ArgumentException",
        paramName: n
    });
    i.popStackFrame();
    return i
};
Error.argumentNull = function(n, t) {
    var r = "Sys.ArgumentNullException: " + (t ? t : Sys.Res.argumentNull);
    n && (r += "\n" + String.format(Sys.Res.paramName, n));
    var i = Error.create(r, {
        name: "Sys.ArgumentNullException",
        paramName: n
    });
    i.popStackFrame();
    return i
};
Error.argumentOutOfRange = function(n, t, i) {
    var r = "Sys.ArgumentOutOfRangeException: " + (i ? i : Sys.Res.argumentOutOfRange);
    n && (r += "\n" + String.format(Sys.Res.paramName, n));
    typeof t != "undefined" && t !== null && (r += "\n" + String.format(Sys.Res.actualValue, t));
    var u = Error.create(r, {
        name: "Sys.ArgumentOutOfRangeException",
        paramName: n,
        actualValue: t
    });
    u.popStackFrame();
    return u
};
Error.argumentType = function(n, t, i, r) {
    var u = "Sys.ArgumentTypeException: ";
    u += r ? r : t && i ? String.format(Sys.Res.argumentTypeWithTypes, t.getName(), i.getName()) : Sys.Res.argumentType;
    n && (u += "\n" + String.format(Sys.Res.paramName, n));
    var f = Error.create(u, {
        name: "Sys.ArgumentTypeException",
        paramName: n,
        actualType: t,
        expectedType: i
    });
    f.popStackFrame();
    return f
};
Error.argumentUndefined = function(n, t) {
    var r = "Sys.ArgumentUndefinedException: " + (t ? t : Sys.Res.argumentUndefined);
    n && (r += "\n" + String.format(Sys.Res.paramName, n));
    var i = Error.create(r, {
        name: "Sys.ArgumentUndefinedException",
        paramName: n
    });
    i.popStackFrame();
    return i
};
Error.format = function(n) {
    var i = "Sys.FormatException: " + (n ? n : Sys.Res.format),
        t = Error.create(i, {
            name: "Sys.FormatException"
        });
    t.popStackFrame();
    return t
};
Error.invalidOperation = function(n) {
    var i = "Sys.InvalidOperationException: " + (n ? n : Sys.Res.invalidOperation),
        t = Error.create(i, {
            name: "Sys.InvalidOperationException"
        });
    t.popStackFrame();
    return t
};
Error.notImplemented = function(n) {
    var i = "Sys.NotImplementedException: " + (n ? n : Sys.Res.notImplemented),
        t = Error.create(i, {
            name: "Sys.NotImplementedException"
        });
    t.popStackFrame();
    return t
};
Error.parameterCount = function(n) {
    var i = "Sys.ParameterCountException: " + (n ? n : Sys.Res.parameterCount),
        t = Error.create(i, {
            name: "Sys.ParameterCountException"
        });
    t.popStackFrame();
    return t
};
Error.prototype.popStackFrame = function() {
    if (typeof this.stack != "undefined" && this.stack !== null && typeof this.fileName != "undefined" && this.fileName !== null && typeof this.lineNumber != "undefined" && this.lineNumber !== null) {
        for (var n = this.stack.split("\n"), i = n[0], u = this.fileName + ":" + this.lineNumber; typeof i != "undefined" && i !== null && i.indexOf(u) === -1;) {
            n.shift();
            i = n[0]
        }
        var r = n[1];
        if (typeof r != "undefined" && r !== null) {
            var t = r.match(/@(.*):(\d+)$/);
            if (typeof t != "undefined" && t !== null) {
                this.fileName = t[1];
                this.lineNumber = parseInt(t[2]);
                n.shift();
                this.stack = n.join("\n")
            }
        }
    }
};
Object.__typeName = "Object";
Object.__class = !0;
Object.getType = function(n) {
    var t = n.constructor;
    return !t || typeof t != "function" || !t.__typeName || t.__typeName === "Object" ? Object : t
};
Object.getTypeName = function(n) {
    return Object.getType(n).getName()
};
String.__typeName = "String";
String.__class = !0;
String.prototype.endsWith = function(n) {
    return this.substr(this.length - n.length) === n
};
String.prototype.startsWith = function(n) {
    return this.substr(0, n.length) === n
};
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
};
String.prototype.trimEnd = function() {
    return this.replace(/\s+$/, "")
};
String.prototype.trimStart = function() {
    return this.replace(/^\s+/, "")
};
String.format = function() {
    return String._toFormattedString(!1, arguments)
};
String._toFormattedString = function(n, t) {
    for (var e = "", f = t[0], i = 0;;) {
        var o = f.indexOf("{", i),
            u = f.indexOf("}", i);
        if (o < 0 && u < 0) {
            e += f.slice(i);
            break
        }
        if (u > 0 && (u < o || o < 0)) {
            e += f.slice(i, u + 1);
            i = u + 2;
            continue
        }
        e += f.slice(i, o);
        i = o + 1;
        if (f.charAt(i) === "{") {
            e += "{";
            i++;
            continue
        }
        if (u < 0) break;
        var s = f.substring(i, u),
            h = s.indexOf(":"),
            l = parseInt(h < 0 ? s : s.substring(0, h), 10) + 1,
            c = h < 0 ? "" : s.substring(h + 1),
            r = t[l];
        (typeof r == "undefined" || r === null) && (r = "");
        e += r.toFormattedString ? r.toFormattedString(c) : n && r.localeFormat ? r.localeFormat(c) : r.format ? r.format(c) : r.toString();
        i = u + 1
    }
    return e
};
Boolean.__typeName = "Boolean";
Boolean.__class = !0;
Boolean.parse = function(n) {
    var t = n.trim().toLowerCase();
    return t === "false" ? !1 : t === "true" ? !0 : void 0
};
Date.__typeName = "Date";
Date.__class = !0;
Number.__typeName = "Number";
Number.__class = !0;
RegExp.__typeName = "RegExp";
RegExp.__class = !0;
window || (this.window = this);
window.Type = Function;
Type.prototype.callBaseMethod = function(n, t, i) {
    var r = Sys._getBaseMethod(this, n, t);
    return i ? r.apply(n, i) : r.apply(n)
};
Type.prototype.getBaseMethod = function(n, t) {
    return Sys._getBaseMethod(this, n, t)
};
Type.prototype.getBaseType = function() {
    return typeof this.__baseType == "undefined" ? null : this.__baseType
};
Type.prototype.getInterfaces = function() {
    for (var t = [], n = this; n;) {
        var r = n.__interfaces;
        if (r)
            for (var i = 0, f = r.length; i < f; i++) {
                var u = r[i];
                Array.contains(t, u) || (t[t.length] = u)
            }
        n = n.__baseType
    }
    return t
};
Type.prototype.getName = function() {
    return typeof this.__typeName == "undefined" ? "" : this.__typeName
};
Type.prototype.implementsInterface = function(n) {
    this.resolveInheritance();
    var r = n.getName(),
        t = this.__interfaceCache;
    if (t) {
        var f = t[r];
        if (typeof f != "undefined") return f
    } else t = this.__interfaceCache = {};
    for (var i = this; i;) {
        var u = i.__interfaces;
        if (u && Array.indexOf(u, n) !== -1) return t[r] = !0;
        i = i.__baseType
    }
    return t[r] = !1
};
Type.prototype.inheritsFrom = function(n) {
    this.resolveInheritance();
    for (var t = this.__baseType; t;) {
        if (t === n) return !0;
        t = t.__baseType
    }
    return !1
};
Type.prototype.initializeBase = function(n, t) {
    this.resolveInheritance();
    this.__baseType && (t ? this.__baseType.apply(n, t) : this.__baseType.apply(n));
    return n
};
Type.prototype.isImplementedBy = function(n) {
    if (typeof n == "undefined" || n === null) return !1;
    var t = Object.getType(n);
    return !!(t.implementsInterface && t.implementsInterface(this))
};
Type.prototype.isInstanceOfType = function(n) {
    return Sys._isInstanceOfType(this, n)
};
Type.prototype.registerClass = function(n, t, i) {
    this.prototype.constructor = this;
    this.__typeName = n;
    this.__class = !0;
    if (t) {
        this.__baseType = t;
        this.__basePrototypePending = !0
    }
    if (i) {
        this.__interfaces = [];
        for (var r = 2, f = arguments.length; r < f; r++) {
            var u = arguments[r];
            this.__interfaces.push(u)
        }
    }
    return this
};
Type.prototype.registerInterface = function(n) {
    this.prototype.constructor = this;
    this.__typeName = n;
    this.__interface = !0;
    return this
};
Type.prototype.resolveInheritance = function() {
    if (this.__basePrototypePending) {
        var n = this.__baseType;
        n.resolveInheritance();
        if (Object.protoInheritEnabled) {
            var r = this.prototype;
            if (this.prototype.$$gta) {
                var i = Object.getPrototypeOf(this.prototype);
                i && Object.getPrototypeOf(i) && (r = i)
            }
            Object.setPrototypeOf(r, n.prototype)
        } else
            for (var t in n.prototype) {
                var u = n.prototype[t];
                this.prototype[t] || (this.prototype[t] = u)
            }
        delete this.__basePrototypePending
    }
};
Type.getRootNamespaces = function() {
    return Array.clone(Sys.__rootNamespaces)
};
Type.isClass = function(n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__class
};
Type.isInterface = function(n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__interface
};
Type.isNamespace = function(n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__namespace
};
Type.__htClasses = {};
Type.parse = function(n) {
    var t;
    if (!n) return null;
    t = Type.__htClasses[n];
    if (!t) {
        t = eval(n);
        Type.__htClasses[n] = t
    }
    return t
};
Type.registerNamespace = function(n) {
    for (var u = window, r = n.split("."), i = 0; i < r.length; i++) {
        var f = r[i],
            t = u[f];
        t || (t = u[f] = {});
        if (!t.__namespace) {
            i === 0 && n !== "Sys" && (Sys.__rootNamespaces[Sys.__rootNamespaces.length] = t);
            t.__namespace = !0;
            t.__typeName = r.slice(0, i + 1).join(".");
            t.getName = function() {
                return this.__typeName
            }
        }
        u = t
    }
};
Type.registerNamespace("Sys");
Type.registerNamespace("Sys.UI");
Type.registerNamespace("Sys.Serialization");
Type.registerNamespace("Sys.Net");
Sys.__rootNamespaces = [Sys];
Sys._isInstanceOfType = function(n, t) {
    if (typeof t == "undefined" || t === null) return !1;
    if (t instanceof n) return !0;
    var i = Object.getType(t);
    return !!(i === n) || i.inheritsFrom && i.inheritsFrom(n) || i.implementsInterface && i.implementsInterface(n)
};
Sys._getBaseMethod = function(n, t, i) {
    var u = n.getBaseType();
    if (u) {
        var r = u.prototype[i];
        return r instanceof Function ? r : null
    }
    return null
};
Sys._isDomElement = function(n) {
    var i = !1;
    if (typeof n.nodeType != "number") {
        var t = n.ownerDocument || n.document || n;
        if (t != n) {
            var r = t.defaultView || t.parentWindow;
            i = r != n
        } else i = typeof t.body == "undefined"
    }
    return !i
};
Array.__typeName = "Array";
Array.__class = !0;
Array.add = Array.enqueue = function(n, t) {
    n[n.length] = t
};
Array.addRange = function(n, t) {
    n.push.apply(n, t)
};
Array.clear = function(n) {
    n.length = 0
};
Array.clone = function(n) {
    return n.length === 1 ? [n[0]] : Array.apply(null, n)
};
Array.contains = function(n, t) {
    return Sys._indexOf(n, t) >= 0
};
Array.dequeue = function(n) {
    return n.shift()
};
Array.forEach = function(n, t, i) {
    for (var r = 0, f = n.length; r < f; r++) {
        var u = n[r];
        typeof u != "undefined" && t.call(i, u, r, n)
    }
};
Array.indexOf = function(n, t, i) {
    return Sys._indexOf(n, t, i)
};
Array.insert = function(n, t, i) {
    n.splice(t, 0, i)
};
Array.parse = function(n) {
    return n ? eval(n) : []
};
Array.remove = function(n, t) {
    var i = Sys._indexOf(n, t);
    i >= 0 && n.splice(i, 1);
    return i >= 0
};
Array.removeAt = function(n, t) {
    n.splice(t, 1)
};
Sys._indexOf = function(n, t, i) {
    if (typeof t == "undefined") return -1;
    var u = n.length;
    if (u !== 0) {
        i = +i;
        if (isNaN(i)) i = 0;
        else {
            isFinite(i) && (i = i - i % 1);
            i < 0 && (i = Math.max(0, u + i))
        }
        for (var r = i; r < u; r++)
            if (typeof n[r] != "undefined" && n[r] === t) return r
    }
    return -1
};
Sys.IDisposable = function() {};
Sys.IDisposable.prototype = {};
Sys.IDisposable.registerInterface("Sys.IDisposable");
Sys.StringBuilder = function(n) {
    this._parts = typeof n != "undefined" && n !== null && n !== "" ? [n.toString()] : [];
    this._value = {};
    this._len = 0
};
Sys.StringBuilder.prototype = {
    append: function(n) {
        this._parts[this._parts.length] = n
    },
    appendLine: function(n) {
        this._parts[this._parts.length] = typeof n == "undefined" || n === null || n === "" ? "\r\n" : n + "\r\n"
    },
    clear: function() {
        this._parts = [];
        this._value = {};
        this._len = 0
    },
    isEmpty: function() {
        return this._parts.length === 0 ? !0 : this.toString() === ""
    },
    toString: function(n) {
        n = n || "";
        var t = this._parts;
        if (this._len !== t.length) {
            this._value = {};
            this._len = t.length
        }
        var r = this._value;
        if (typeof r[n] == "undefined") {
            if (n !== "")
                for (var i = 0; i < t.length;) typeof t[i] == "undefined" || t[i] === "" || t[i] === null ? t.splice(i, 1) : i++;
            r[n] = this._parts.join(n)
        }
        return r[n]
    }
};
Sys.StringBuilder.registerClass("Sys.StringBuilder");
Sys.Browser = {};
Sys.Browser.InternetExplorer = {};
Sys.Browser.Firefox = {};
Sys.Browser.Safari = {};
Sys.Browser.Opera = {};
Sys.Browser.agent = null;
Sys.Browser.hasDebuggerStatement = !1;
Sys.Browser.name = navigator.appName;
Sys.Browser.version = parseFloat(navigator.appVersion);
Sys.Browser.documentMode = 0;
if (navigator.userAgent.indexOf(" MSIE ") > -1) {
    Sys.Browser.agent = Sys.Browser.InternetExplorer;
    Sys.Browser.version = parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]);
    Sys.Browser.version >= 8 && document.documentMode >= 7 && (Sys.Browser.documentMode = document.documentMode);
    Sys.Browser.hasDebuggerStatement = !0
} else if (navigator.userAgent.indexOf(" Firefox/") > -1) {
    Sys.Browser.agent = Sys.Browser.Firefox;
    Sys.Browser.version = parseFloat(navigator.userAgent.match(/Firefox\/(\d+\.\d+)/)[1]);
    Sys.Browser.name = "Firefox";
    Sys.Browser.hasDebuggerStatement = !0
} else if (navigator.userAgent.indexOf(" AppleWebKit/") > -1) {
    Sys.Browser.agent = Sys.Browser.Safari;
    Sys.Browser.version = parseFloat(navigator.userAgent.match(/AppleWebKit\/(\d+(\.\d+)?)/)[1]);
    Sys.Browser.name = "Safari"
} else navigator.userAgent.indexOf("Opera/") > -1 && (Sys.Browser.agent = Sys.Browser.Opera);
Sys.EventArgs = function() {};
Sys.EventArgs.registerClass("Sys.EventArgs");
Sys.EventArgs.Empty = new Sys.EventArgs;
Sys.CancelEventArgs = function() {
    Sys.CancelEventArgs.initializeBase(this);
    this._cancel = !1
};
Sys.CancelEventArgs.prototype = {
    get_cancel: function() {
        return this._cancel
    },
    set_cancel: function(n) {
        this._cancel = n
    }
};
Sys.CancelEventArgs.registerClass("Sys.CancelEventArgs", Sys.EventArgs);
Sys._Debug = function() {};
Sys._Debug.prototype = {
    _appendConsole: function(n) {
        typeof Debug != "undefined" && Debug.writeln;
        window.console && window.console.log && window.console.log(n);
        window.opera && window.opera.postError(n);
        window.debugService && window.debugService.trace(n)
    },
    _appendTrace: function(n) {
        var t = document.getElementById("TraceConsole");
        t && t.tagName.toUpperCase() === "TEXTAREA" && (t.value += n + "\n")
    },
    assert: function(n, t, i) {
        if (!n) {
            t = i && this.assert.caller ? String.format(Sys.Res.assertFailedCaller, t, this.assert.caller) : String.format(Sys.Res.assertFailed, t);
            confirm(String.format(Sys.Res.breakIntoDebugger, t)) && this.fail(t)
        }
    },
    clearTrace: function() {
        var n = document.getElementById("TraceConsole");
        n && n.tagName.toUpperCase() === "TEXTAREA" && (n.value = "")
    },
    fail: function(n) {
        this._appendConsole(n);
        Sys.Browser.hasDebuggerStatement && eval("debugger")
    },
    trace: function(n) {
        this._appendConsole(n);
        this._appendTrace(n)
    },
    traceDump: function(n, t) {
        var i = this._traceDump(n, t, !0)
    },
    _traceDump: function(n, t, i, r, u) {
        t = t ? t : "traceDump";
        r = r ? r : "";
        if (n === null) {
            this.trace(r + t + ": null");
            return
        }
        switch (typeof n) {
            case "undefined":
                this.trace(r + t + ": Undefined");
                break;
            case "number":
            case "string":
            case "boolean":
                this.trace(r + t + ": " + n);
                break;
            default:
                if (Date.isInstanceOfType(n) || RegExp.isInstanceOfType(n)) {
                    this.trace(r + t + ": " + n.toString());
                    break
                }
                if (u) {
                    if (Array.contains(u, n)) {
                        this.trace(r + t + ": ...");
                        return
                    }
                } else u = [];
                Array.add(u, n);
                if (n == window || n === document || window.HTMLElement && n instanceof HTMLElement || typeof n.nodeName == "string") {
                    var s = n.tagName ? n.tagName : "DomElement";
                    n.id && (s += " - " + n.id);
                    this.trace(r + t + " {" + s + "}")
                } else {
                    var h = Object.getTypeName(n);
                    this.trace(r + t + (typeof h == "string" ? " {" + h + "}" : ""));
                    if (r === "" || i) {
                        r += "    ";
                        var f, c, l, e, o;
                        if (Array.isInstanceOfType(n)) {
                            c = n.length;
                            for (f = 0; f < c; f++) this._traceDump(n[f], "[" + f + "]", i, r, u)
                        } else
                            for (e in n) {
                                o = n[e];
                                Function.isInstanceOfType(o) || this._traceDump(o, e, i, r, u)
                            }
                    }
                }
                Array.remove(u, n)
        }
    }
};
Sys._Debug.registerClass("Sys._Debug");
Sys.Debug = new Sys._Debug;
Sys.Debug.isDebug = !1;

function Sys$Enum$parse(n, t) {
    var i, r, o;
    if (t) {
        i = this.__lowerCaseValues;
        if (!i) {
            this.__lowerCaseValues = i = {};
            var s = this.prototype;
            for (var h in s) i[h.toLowerCase()] = s[h]
        }
    } else i = this.prototype;
    if (this.__flags) {
        for (var f = (t ? n.toLowerCase() : n).split(","), e = 0, u = f.length - 1; u >= 0; u--) {
            var c = f[u].trim();
            r = i[c];
            if (typeof r != "number") throw Error.argument("value", String.format(Sys.Res.enumInvalidValue, n.split(",")[u].trim(), this.__typeName));
            e |= r
        }
        return e
    } else {
        o = t ? n.toLowerCase() : n;
        r = i[o.trim()];
        if (typeof r != "number") throw Error.argument("value", String.format(Sys.Res.enumInvalidValue, n, this.__typeName));
        return r
    }
}

function Sys$Enum$toString(n) {
    if (typeof n == "undefined" || n === null) return this.__string;
    var f = this.prototype,
        t;
    if (this.__flags && n !== 0) {
        var i = this.__sortedValues;
        if (!i) {
            i = [];
            for (t in f) i[i.length] = {
                key: t,
                value: f[t]
            };
            i.sort(function(n, t) {
                return n.value - t.value
            });
            this.__sortedValues = i
        }
        var u = [],
            e = n;
        for (t = i.length - 1; t >= 0; t--) {
            var o = i[t],
                r = o.value;
            if (r !== 0 && (r & n) === r) {
                u[u.length] = o.key;
                e -= r;
                if (e === 0) break
            }
        }
        if (u.length && e === 0) return u.reverse().join(", ")
    } else
        for (t in f)
            if (f[t] === n) return t;
    return ""
}
Type.prototype.registerEnum = function(n, t) {
    for (var i in this.prototype) this[i] = this.prototype[i];
    this.__typeName = n;
    this.parse = Sys$Enum$parse;
    this.__string = this.toString();
    this.toString = Sys$Enum$toString;
    this.__flags = t;
    this.__enum = !0
};
Type.isEnum = function(n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__enum
};
Type.isFlags = function(n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__flags
};
Date._appendPreOrPostMatch = function(n, t) {
    for (var f = 0, i = !1, r = 0, e = n.length; r < e; r++) {
        var u = n.charAt(r);
        switch (u) {
            case "'":
                i ? t.append("'") : f++;
                i = !1;
                break;
            case "\\":
                i && t.append("\\");
                i = !i;
                break;
            default:
                t.append(u);
                i = !1
        }
    }
    return f
};
Date._expandFormat = function(n, t) {
    t || (t = "F");
    var i = t.length;
    if (i === 1) switch (t) {
        case "d":
            return n.ShortDatePattern;
        case "D":
            return n.LongDatePattern;
        case "t":
            return n.ShortTimePattern;
        case "T":
            return n.LongTimePattern;
        case "f":
            return n.LongDatePattern + " " + n.ShortTimePattern;
        case "F":
            return n.FullDateTimePattern;
        case "M":
        case "m":
            return n.MonthDayPattern;
        case "s":
            return n.SortableDateTimePattern;
        case "Y":
        case "y":
            return n.YearMonthPattern;
        default:
            throw Error.format(Sys.Res.formatInvalidString);
    } else i === 2 && t.charAt(0) === "%" && (t = t.charAt(1));
    return t
};
Date._expandYear = function(n, t) {
    var r = new Date,
        u = Date._getEra(r);
    if (t < 100) {
        var i = Date._getEraYear(r, n, u);
        t += i - i % 100;
        t > n.Calendar.TwoDigitYearMax && (t -= 100)
    }
    return t
};
Date._getEra = function(n, t) {
    if (!t) return 0;
    for (var r, f = n.getTime(), i = 0, u = t.length; i < u; i += 4) {
        r = t[i + 2];
        if (r === null || f >= r) return i
    }
    return 0
};
Date._getEraYear = function(n, t, i, r) {
    var u = n.getFullYear();
    !r && t.eras && (u -= t.eras[i + 3]);
    return u
};
Date._getParseRegExp = function(n, t) {
    if (n._parseRegExp) {
        if (n._parseRegExp[t]) return n._parseRegExp[t]
    } else n._parseRegExp = {};
    var u = Date._expandFormat(n, t);
    u = u.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1");
    for (var i = new Sys.StringBuilder("^"), e = [], f = 0, s = 0, h = Date._getTokenRegExp(), r;
        (r = h.exec(u)) !== null;) {
        var c = u.slice(f, r.index);
        f = h.lastIndex;
        s += Date._appendPreOrPostMatch(c, i);
        if (s % 2 == 1) {
            i.append(r[0]);
            continue
        }
        switch (r[0]) {
            case "dddd":
            case "ddd":
            case "MMMM":
            case "MMM":
            case "gg":
            case "g":
                i.append("(\\D+)");
                break;
            case "tt":
            case "t":
                i.append("(\\D*)");
                break;
            case "yyyy":
                i.append("(\\d{4})");
                break;
            case "fff":
                i.append("(\\d{3})");
                break;
            case "ff":
                i.append("(\\d{2})");
                break;
            case "f":
                i.append("(\\d)");
                break;
            case "dd":
            case "d":
            case "MM":
            case "M":
            case "yy":
            case "y":
            case "HH":
            case "H":
            case "hh":
            case "h":
            case "mm":
            case "m":
            case "ss":
            case "s":
                i.append("(\\d\\d?)");
                break;
            case "zzz":
                i.append("([+-]?\\d\\d?:\\d{2})");
                break;
            case "zz":
            case "z":
                i.append("([+-]?\\d\\d?)");
                break;
            case "/":
                i.append("(\\" + n.DateSeparator + ")")
        }
        Array.add(e, r[0])
    }
    Date._appendPreOrPostMatch(u.slice(f), i);
    i.append("$");
    var l = i.toString().replace(/\s+/g, "\\s+"),
        o = {
            regExp: l,
            groups: e
        };
    n._parseRegExp[t] = o;
    return o
};
Date._getTokenRegExp = function() {
    return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g
};
Date.parseLocale = function(n) {
    return Date._parse(n, Sys.CultureInfo.CurrentCulture, arguments)
};
Date.parseInvariant = function(n) {
    return Date._parse(n, Sys.CultureInfo.InvariantCulture, arguments)
};
Date._parse = function(n, t, i) {
    for (var u, e, o, s = !1, r = 1, f = i.length; r < f; r++) {
        e = i[r];
        if (e) {
            s = !0;
            u = Date._parseExact(n, e, t);
            if (u) return u
        }
    }
    if (!s) {
        o = t._getDateTimeFormats();
        for (r = 0, f = o.length; r < f; r++) {
            u = Date._parseExact(n, o[r], t);
            if (u) return u
        }
    }
    return null
};
Date._parseExact = function(n, t, i) {
    n = n.trim();
    var h = i.dateTimeFormat,
        ft = Date._getParseRegExp(h, t),
        rt = new RegExp(ft.regExp).exec(n);
    if (rt === null) return null;
    for (var st = ft.groups, tt = null, e = null, u = null, l = null, c = null, o = 0, a, g = 0, k = 0, s = 0, d = null, nt = !1, v = 0, ct = st.length; v < ct; v++) {
        var r = rt[v + 1];
        if (r) switch (st[v]) {
            case "dd":
            case "d":
                l = parseInt(r, 10);
                if (l < 1 || l > 31) return null;
                break;
            case "MMMM":
                u = i._getMonthIndex(r);
                if (u < 0 || u > 11) return null;
                break;
            case "MMM":
                u = i._getAbbrMonthIndex(r);
                if (u < 0 || u > 11) return null;
                break;
            case "M":
            case "MM":
                u = parseInt(r, 10) - 1;
                if (u < 0 || u > 11) return null;
                break;
            case "y":
            case "yy":
                e = Date._expandYear(h, parseInt(r, 10));
                if (e < 0 || e > 9999) return null;
                break;
            case "yyyy":
                e = parseInt(r, 10);
                if (e < 0 || e > 9999) return null;
                break;
            case "h":
            case "hh":
                o = parseInt(r, 10);
                o === 12 && (o = 0);
                if (o < 0 || o > 11) return null;
                break;
            case "H":
            case "HH":
                o = parseInt(r, 10);
                if (o < 0 || o > 23) return null;
                break;
            case "m":
            case "mm":
                g = parseInt(r, 10);
                if (g < 0 || g > 59) return null;
                break;
            case "s":
            case "ss":
                k = parseInt(r, 10);
                if (k < 0 || k > 59) return null;
                break;
            case "tt":
            case "t":
                var ot = r.toUpperCase();
                nt = ot === h.PMDesignator.toUpperCase();
                if (!nt && ot !== h.AMDesignator.toUpperCase()) return null;
                break;
            case "f":
                s = parseInt(r, 10) * 100;
                if (s < 0 || s > 999) return null;
                break;
            case "ff":
                s = parseInt(r, 10) * 10;
                if (s < 0 || s > 999) return null;
                break;
            case "fff":
                s = parseInt(r, 10);
                if (s < 0 || s > 999) return null;
                break;
            case "dddd":
                c = i._getDayIndex(r);
                if (c < 0 || c > 6) return null;
                break;
            case "ddd":
                c = i._getAbbrDayIndex(r);
                if (c < 0 || c > 6) return null;
                break;
            case "zzz":
                var it = r.split(/:/);
                if (it.length !== 2) return null;
                a = parseInt(it[0], 10);
                if (a < -12 || a > 13) return null;
                var y = parseInt(it[1], 10);
                if (y < 0 || y > 59) return null;
                d = a * 60 + (r.startsWith("-") ? -y : y);
                break;
            case "z":
            case "zz":
                a = parseInt(r, 10);
                if (a < -12 || a > 13) return null;
                d = a * 60;
                break;
            case "g":
            case "gg":
                var p = r;
                if (!p || !h.eras) return null;
                p = p.toLowerCase().trim();
                for (var w = 0, ht = h.eras.length; w < ht; w += 4)
                    if (p === h.eras[w + 1].toLowerCase()) {
                        tt = w;
                        break
                    }
                if (tt === null) return null
        }
    }
    var f = new Date,
        ut, b = h.Calendar.convert;
    ut = b ? b.fromGregorian(f)[0] : f.getFullYear();
    e === null ? e = ut : h.eras && (e += h.eras[(tt || 0) + 3]);
    u === null && (u = 0);
    l === null && (l = 1);
    if (b) {
        f = b.toGregorian(e, u, l);
        if (f === null) return null
    } else {
        f.setFullYear(e, u, l);
        if (f.getDate() !== l || c !== null && f.getDay() !== c) return null
    }
    nt && o < 12 && (o += 12);
    f.setHours(o, g, k, s);
    if (d !== null) {
        var et = f.getMinutes() - (d + f.getTimezoneOffset());
        f.setHours(f.getHours() + parseInt(et / 60, 10), et % 60)
    }
    return f
};
Date.prototype.format = function(n) {
    return this._toFormattedString(n, Sys.CultureInfo.InvariantCulture)
};
Date.prototype.localeFormat = function(n) {
    return this._toFormattedString(n, Sys.CultureInfo.CurrentCulture)
};
Date.prototype._toFormattedString = function(n, t) {
    var r = t.dateTimeFormat,
        a = r.Calendar.convert;
    if (!n || !n.length || n === "i")
        if (t && t.name.length)
            if (a) return this._toFormattedString(r.FullDateTimePattern, t);
            else {
                var w = new Date(this.getTime()),
                    nt = Date._getEra(this, r.eras);
                w.setFullYear(Date._getEraYear(this, r, nt));
                return w.toLocaleString()
            }
    else return this.toString();
    var l = r.eras,
        c = n === "s";
    n = Date._expandFormat(r, n);
    var i = new Sys.StringBuilder,
        u;

    function f(n) {
        return n < 10 ? "0" + n : n.toString()
    }

    function v(n) {
        return n < 10 ? "00" + n : n < 100 ? "0" + n : n.toString()
    }

    function tt(n) {
        return n < 10 ? "000" + n : n < 100 ? "00" + n : n < 1e3 ? "0" + n : n.toString()
    }
    var s, b, g = /([^d]|^)(d|dd)([^d]|$)/g;

    function k() {
        if (s || b) return s;
        s = g.test(n);
        b = !0;
        return s
    }
    var y = 0,
        p = Date._getTokenRegExp(),
        e;
    !c && a && (e = a.fromGregorian(this));
    for (;;) {
        var it = p.lastIndex,
            h = p.exec(n),
            d = n.slice(it, h ? h.index : n.length);
        y += Date._appendPreOrPostMatch(d, i);
        if (!h) break;
        if (y % 2 == 1) {
            i.append(h[0]);
            continue
        }

        function o(n, t) {
            if (e) return e[t];
            switch (t) {
                case 0:
                    return n.getFullYear();
                case 1:
                    return n.getMonth();
                case 2:
                    return n.getDate()
            }
        }
        switch (h[0]) {
            case "dddd":
                i.append(r.DayNames[this.getDay()]);
                break;
            case "ddd":
                i.append(r.AbbreviatedDayNames[this.getDay()]);
                break;
            case "dd":
                s = !0;
                i.append(f(o(this, 2)));
                break;
            case "d":
                s = !0;
                i.append(o(this, 2));
                break;
            case "MMMM":
                i.append(r.MonthGenitiveNames && k() ? r.MonthGenitiveNames[o(this, 1)] : r.MonthNames[o(this, 1)]);
                break;
            case "MMM":
                i.append(r.AbbreviatedMonthGenitiveNames && k() ? r.AbbreviatedMonthGenitiveNames[o(this, 1)] : r.AbbreviatedMonthNames[o(this, 1)]);
                break;
            case "MM":
                i.append(f(o(this, 1) + 1));
                break;
            case "M":
                i.append(o(this, 1) + 1);
                break;
            case "yyyy":
                i.append(tt(e ? e[0] : Date._getEraYear(this, r, Date._getEra(this, l), c)));
                break;
            case "yy":
                i.append(f((e ? e[0] : Date._getEraYear(this, r, Date._getEra(this, l), c)) % 100));
                break;
            case "y":
                i.append((e ? e[0] : Date._getEraYear(this, r, Date._getEra(this, l), c)) % 100);
                break;
            case "hh":
                u = this.getHours() % 12;
                u === 0 && (u = 12);
                i.append(f(u));
                break;
            case "h":
                u = this.getHours() % 12;
                u === 0 && (u = 12);
                i.append(u);
                break;
            case "HH":
                i.append(f(this.getHours()));
                break;
            case "H":
                i.append(this.getHours());
                break;
            case "mm":
                i.append(f(this.getMinutes()));
                break;
            case "m":
                i.append(this.getMinutes());
                break;
            case "ss":
                i.append(f(this.getSeconds()));
                break;
            case "s":
                i.append(this.getSeconds());
                break;
            case "tt":
                i.append(this.getHours() < 12 ? r.AMDesignator : r.PMDesignator);
                break;
            case "t":
                i.append((this.getHours() < 12 ? r.AMDesignator : r.PMDesignator).charAt(0));
                break;
            case "f":
                i.append(v(this.getMilliseconds()).charAt(0));
                break;
            case "ff":
                i.append(v(this.getMilliseconds()).substr(0, 2));
                break;
            case "fff":
                i.append(v(this.getMilliseconds()));
                break;
            case "z":
                u = this.getTimezoneOffset() / 60;
                i.append((u <= 0 ? "+" : "-") + Math.floor(Math.abs(u)));
                break;
            case "zz":
                u = this.getTimezoneOffset() / 60;
                i.append((u <= 0 ? "+" : "-") + f(Math.floor(Math.abs(u))));
                break;
            case "zzz":
                u = this.getTimezoneOffset() / 60;
                i.append((u <= 0 ? "+" : "-") + f(Math.floor(Math.abs(u))) + ":" + f(Math.abs(this.getTimezoneOffset() % 60)));
                break;
            case "g":
            case "gg":
                r.eras && i.append(r.eras[Date._getEra(this, l) + 1]);
                break;
            case "/":
                i.append(r.DateSeparator)
        }
    }
    return i.toString()
};
String.localeFormat = function() {
    return String._toFormattedString(!0, arguments)
};
Number.parseLocale = function(n) {
    return Number._parse(n, Sys.CultureInfo.CurrentCulture)
};
Number.parseInvariant = function(n) {
    return Number._parse(n, Sys.CultureInfo.InvariantCulture)
};
Number._parse = function(n, t) {
    n = n.trim();
    if (n.match(/^[+-]?infinity$/i)) return parseFloat(n);
    if (n.match(/^0x[a-f0-9]+$/i)) return parseInt(n);
    var i = t.numberFormat,
        e = Number._parseNumberNegativePattern(n, i, i.NumberNegativePattern),
        o = e[0],
        f = e[1];
    if (o === "" && i.NumberNegativePattern !== 1) {
        e = Number._parseNumberNegativePattern(n, i, 1);
        o = e[0];
        f = e[1]
    }
    o === "" && (o = "+");
    var a, u, s = f.indexOf("e");
    s < 0 && (s = f.indexOf("E"));
    if (s < 0) {
        u = f;
        a = null
    } else {
        u = f.substr(0, s);
        a = f.substr(s + 1)
    }
    var r, l, v = u.indexOf(i.NumberDecimalSeparator);
    if (v < 0) {
        r = u;
        l = null
    } else {
        r = u.substr(0, v);
        l = u.substr(v + i.NumberDecimalSeparator.length)
    }
    r = r.split(i.NumberGroupSeparator).join("");
    var y = i.NumberGroupSeparator.replace(/\u00A0/g, " ");
    i.NumberGroupSeparator !== y && (r = r.split(y).join(""));
    var h = o + r;
    l !== null && (h += "." + l);
    if (a !== null) {
        var c = Number._parseNumberNegativePattern(a, i, 1);
        c[0] === "" && (c[0] = "+");
        h += "e" + c[0] + c[1]
    }
    return h.match(/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/) ? parseFloat(h) : Number.NaN
};
Number._parseNumberNegativePattern = function(n, t, i) {
    var u = t.NegativeSign,
        r = t.PositiveSign;
    switch (i) {
        case 4:
            u = " " + u;
            r = " " + r;
        case 3:
            if (n.endsWith(u)) return ["-", n.substr(0, n.length - u.length)];
            else if (n.endsWith(r)) return ["+", n.substr(0, n.length - r.length)];
            break;
        case 2:
            u += " ";
            r += " ";
        case 1:
            if (n.startsWith(u)) return ["-", n.substr(u.length)];
            else if (n.startsWith(r)) return ["+", n.substr(r.length)];
            break;
        case 0:
            if (n.startsWith("(") && n.endsWith(")")) return ["-", n.substr(1, n.length - 2)]
    }
    return ["", n]
};
Number.prototype.format = function(n) {
    return this._toFormattedString(n, Sys.CultureInfo.InvariantCulture)
};
Number.prototype.localeFormat = function(n) {
    return this._toFormattedString(n, Sys.CultureInfo.CurrentCulture)
};
Number.prototype._toFormattedString = function(n, t) {
    if (!n || n.length === 0 || n === "i") return t && t.name.length > 0 ? this.toLocaleString() : this.toString();
    var l = ["n %", "n%", "%n"],
        v = ["-n %", "-n%", "-%n"],
        y = ["(n)", "-n", "- n", "n-", "n -"],
        w = ["$n", "n$", "$ n", "n $"],
        p = ["($n)", "-$n", "$-n", "$n-", "(n$)", "-n$", "n-$", "n$-", "-n $", "-$ n", "n $-", "$ n-", "$ -n", "n- $", "($ n)", "(n $)"];

    function s(n, t, i) {
        for (var r = n.length; r < t; r++) n = i ? "0" + n : n + "0";
        return n
    }

    function h(n, t, i, r, u) {
        var a = i[0],
            v = 1,
            p = Math.pow(10, t),
            y = Math.round(n * p) / p;
        isFinite(y) || (y = n);
        n = y;
        var e = n.toString(),
            f = "",
            o, c = e.split(/e/i);
        e = c[0];
        o = c.length > 1 ? parseInt(c[1]) : 0;
        c = e.split(".");
        e = c[0];
        f = c.length > 1 ? c[1] : "";
        var w;
        if (o > 0) {
            f = s(f, o, !1);
            e += f.slice(0, o);
            f = f.substr(o)
        } else if (o < 0) {
            o = -o;
            e = s(e, o + 1, !0);
            f = e.slice(-o, e.length) + f;
            e = e.slice(0, -o)
        }
        if (t > 0) {
            f = f.length > t ? f.slice(0, t) : s(f, t, !1);
            f = u + f
        } else f = "";
        for (var h = e.length - 1, l = ""; h >= 0;) {
            if (a === 0 || a > h) return l.length > 0 ? e.slice(0, h + 1) + r + l + f : e.slice(0, h + 1) + f;
            l = l.length > 0 ? e.slice(h - a + 1, h + 1) + r + l : e.slice(h - a + 1, h + 1);
            h -= a;
            if (v < i.length) {
                a = i[v];
                v++
            }
        }
        return e.slice(0, h + 1) + r + l + f
    }
    var i = t.numberFormat,
        u = Math.abs(this);
    n || (n = "D");
    var r = -1;
    n.length > 1 && (r = parseInt(n.slice(1), 10));
    var f;
    switch (n.charAt(0)) {
        case "d":
        case "D":
            f = "n";
            r !== -1 && (u = s("" + u, r, !0));
            this < 0 && (u = -u);
            break;
        case "c":
        case "C":
            f = this < 0 ? p[i.CurrencyNegativePattern] : w[i.CurrencyPositivePattern];
            r === -1 && (r = i.CurrencyDecimalDigits);
            u = h(Math.abs(this), r, i.CurrencyGroupSizes, i.CurrencyGroupSeparator, i.CurrencyDecimalSeparator);
            break;
        case "n":
        case "N":
            f = this < 0 ? y[i.NumberNegativePattern] : "n";
            r === -1 && (r = i.NumberDecimalDigits);
            u = h(Math.abs(this), r, i.NumberGroupSizes, i.NumberGroupSeparator, i.NumberDecimalSeparator);
            break;
        case "p":
        case "P":
            f = this < 0 ? v[i.PercentNegativePattern] : l[i.PercentPositivePattern];
            r === -1 && (r = i.PercentDecimalDigits);
            u = h(Math.abs(this) * 100, r, i.PercentGroupSizes, i.PercentGroupSeparator, i.PercentDecimalSeparator);
            break;
        default:
            throw Error.format(Sys.Res.formatBadFormatSpecifier);
    }
    for (var c = /n|\$|-|%/g, e = "";;) {
        var a = c.lastIndex,
            o = c.exec(f);
        e += f.slice(a, o ? o.index : f.length);
        if (!o) break;
        switch (o[0]) {
            case "n":
                e += u;
                break;
            case "$":
                e += i.CurrencySymbol;
                break;
            case "-":
                /[1-9]/.test(u) && (e += i.NegativeSign);
                break;
            case "%":
                e += i.PercentSymbol
        }
    }
    return e
};
Sys.CultureInfo = function(n, t, i) {
    this.name = n;
    this.numberFormat = t;
    this.dateTimeFormat = i
};
Sys.CultureInfo.prototype = {
    _getDateTimeFormats: function() {
        if (!this._dateTimeFormats) {
            var n = this.dateTimeFormat;
            this._dateTimeFormats = [n.MonthDayPattern, n.YearMonthPattern, n.ShortDatePattern, n.ShortTimePattern, n.LongDatePattern, n.LongTimePattern, n.FullDateTimePattern, n.RFC1123Pattern, n.SortableDateTimePattern, n.UniversalSortableDateTimePattern]
        }
        return this._dateTimeFormats
    },
    _getIndex: function(n, t, i) {
        var u = this._toUpper(n),
            r = Array.indexOf(t, u);
        r === -1 && (r = Array.indexOf(i, u));
        return r
    },
    _getMonthIndex: function(n) {
        if (!this._upperMonths) {
            this._upperMonths = this._toUpperArray(this.dateTimeFormat.MonthNames);
            this._upperMonthsGenitive = this._toUpperArray(this.dateTimeFormat.MonthGenitiveNames)
        }
        return this._getIndex(n, this._upperMonths, this._upperMonthsGenitive)
    },
    _getAbbrMonthIndex: function(n) {
        if (!this._upperAbbrMonths) {
            this._upperAbbrMonths = this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthNames);
            this._upperAbbrMonthsGenitive = this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthGenitiveNames)
        }
        return this._getIndex(n, this._upperAbbrMonths, this._upperAbbrMonthsGenitive)
    },
    _getDayIndex: function(n) {
        this._upperDays || (this._upperDays = this._toUpperArray(this.dateTimeFormat.DayNames));
        return Array.indexOf(this._upperDays, this._toUpper(n))
    },
    _getAbbrDayIndex: function(n) {
        this._upperAbbrDays || (this._upperAbbrDays = this._toUpperArray(this.dateTimeFormat.AbbreviatedDayNames));
        return Array.indexOf(this._upperAbbrDays, this._toUpper(n))
    },
    _toUpperArray: function(n) {
        for (var i = [], t = 0, r = n.length; t < r; t++) i[t] = this._toUpper(n[t]);
        return i
    },
    _toUpper: function(n) {
        return n.split(" ").join(" ").toUpperCase()
    }
};
Sys.CultureInfo.registerClass("Sys.CultureInfo");
Sys.CultureInfo._parse = function(n) {
    var t = n.dateTimeFormat;
    t && !t.eras && (t.eras = n.eras);
    return new Sys.CultureInfo(n.name, n.numberFormat, t)
};
Sys.CultureInfo.InvariantCulture = Sys.CultureInfo._parse({
    name: "",
    numberFormat: {
        CurrencyDecimalDigits: 2,
        CurrencyDecimalSeparator: ".",
        IsReadOnly: !0,
        CurrencyGroupSizes: [3],
        NumberGroupSizes: [3],
        PercentGroupSizes: [3],
        CurrencyGroupSeparator: ",",
        CurrencySymbol: "¤",
        NaNSymbol: "NaN",
        CurrencyNegativePattern: 0,
        NumberNegativePattern: 1,
        PercentPositivePattern: 0,
        PercentNegativePattern: 0,
        NegativeInfinitySymbol: "-Infinity",
        NegativeSign: "-",
        NumberDecimalDigits: 2,
        NumberDecimalSeparator: ".",
        NumberGroupSeparator: ",",
        CurrencyPositivePattern: 0,
        PositiveInfinitySymbol: "Infinity",
        PositiveSign: "+",
        PercentDecimalDigits: 2,
        PercentDecimalSeparator: ".",
        PercentGroupSeparator: ",",
        PercentSymbol: "%",
        PerMilleSymbol: "‰",
        NativeDigits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        DigitSubstitution: 1
    },
    dateTimeFormat: {
        AMDesignator: "AM",
        Calendar: {
            MinSupportedDateTime: "@-62135568000000@",
            MaxSupportedDateTime: "@253402300799999@",
            AlgorithmType: 1,
            CalendarType: 1,
            Eras: [1],
            TwoDigitYearMax: 2029,
            IsReadOnly: !0
        },
        DateSeparator: "/",
        FirstDayOfWeek: 0,
        CalendarWeekRule: 0,
        FullDateTimePattern: "dddd, dd MMMM yyyy HH:mm:ss",
        LongDatePattern: "dddd, dd MMMM yyyy",
        LongTimePattern: "HH:mm:ss",
        MonthDayPattern: "MMMM dd",
        PMDesignator: "PM",
        RFC1123Pattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        ShortDatePattern: "MM/dd/yyyy",
        ShortTimePattern: "HH:mm",
        SortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        TimeSeparator: ":",
        UniversalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        YearMonthPattern: "yyyy MMMM",
        AbbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        ShortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        DayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        AbbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
        MonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
        IsReadOnly: !0,
        NativeCalendarName: "Gregorian Calendar",
        AbbreviatedMonthGenitiveNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
        MonthGenitiveNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""]
    },
    eras: [1, "A.D.", null, 0]
});
if (typeof __cultureInfo == "object") {
    Sys.CultureInfo.CurrentCulture = Sys.CultureInfo._parse(__cultureInfo);
    delete __cultureInfo
} else Sys.CultureInfo.CurrentCulture = Sys.CultureInfo._parse({
    name: "en-US",
    numberFormat: {
        CurrencyDecimalDigits: 2,
        CurrencyDecimalSeparator: ".",
        IsReadOnly: !1,
        CurrencyGroupSizes: [3],
        NumberGroupSizes: [3],
        PercentGroupSizes: [3],
        CurrencyGroupSeparator: ",",
        CurrencySymbol: "$",
        NaNSymbol: "NaN",
        CurrencyNegativePattern: 0,
        NumberNegativePattern: 1,
        PercentPositivePattern: 0,
        PercentNegativePattern: 0,
        NegativeInfinitySymbol: "-Infinity",
        NegativeSign: "-",
        NumberDecimalDigits: 2,
        NumberDecimalSeparator: ".",
        NumberGroupSeparator: ",",
        CurrencyPositivePattern: 0,
        PositiveInfinitySymbol: "Infinity",
        PositiveSign: "+",
        PercentDecimalDigits: 2,
        PercentDecimalSeparator: ".",
        PercentGroupSeparator: ",",
        PercentSymbol: "%",
        PerMilleSymbol: "‰",
        NativeDigits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        DigitSubstitution: 1
    },
    dateTimeFormat: {
        AMDesignator: "AM",
        Calendar: {
            MinSupportedDateTime: "@-62135568000000@",
            MaxSupportedDateTime: "@253402300799999@",
            AlgorithmType: 1,
            CalendarType: 1,
            Eras: [1],
            TwoDigitYearMax: 2029,
            IsReadOnly: !1
        },
        DateSeparator: "/",
        FirstDayOfWeek: 0,
        CalendarWeekRule: 0,
        FullDateTimePattern: "dddd, MMMM dd, yyyy h:mm:ss tt",
        LongDatePattern: "dddd, MMMM dd, yyyy",
        LongTimePattern: "h:mm:ss tt",
        MonthDayPattern: "MMMM dd",
        PMDesignator: "PM",
        RFC1123Pattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        ShortDatePattern: "M/d/yyyy",
        ShortTimePattern: "h:mm tt",
        SortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        TimeSeparator: ":",
        UniversalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        YearMonthPattern: "MMMM, yyyy",
        AbbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        ShortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        DayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        AbbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
        MonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
        IsReadOnly: !1,
        NativeCalendarName: "Gregorian Calendar",
        AbbreviatedMonthGenitiveNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
        MonthGenitiveNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""]
    },
    eras: [1, "A.D.", null, 0]
});
Sys.Serialization.JavaScriptSerializer = function() {};
Sys.Serialization.JavaScriptSerializer.registerClass("Sys.Serialization.JavaScriptSerializer");
Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs = [];
Sys.Serialization.JavaScriptSerializer._charsToEscape = [];
Sys.Serialization.JavaScriptSerializer._dateRegEx = new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\"', "g");
Sys.Serialization.JavaScriptSerializer._escapeChars = {};
Sys.Serialization.JavaScriptSerializer._escapeRegEx = new RegExp('["\\\\\\x00-\\x1F]', "i");
Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal = new RegExp('["\\\\\\x00-\\x1F]', "g");
Sys.Serialization.JavaScriptSerializer._jsonRegEx = new RegExp("[^,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t]", "g");
Sys.Serialization.JavaScriptSerializer._jsonStringRegEx = new RegExp('"(\\\\.|[^"\\\\])*"', "g");
Sys.Serialization.JavaScriptSerializer._serverTypeFieldName = "__type";
Sys.Serialization.JavaScriptSerializer._init = function() {
    var i = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000b", "\\f", "\\r", "\\u000e", "\\u000f", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001a", "\\u001b", "\\u001c", "\\u001d", "\\u001e", "\\u001f"];
    Sys.Serialization.JavaScriptSerializer._charsToEscape[0] = "\\";
    Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs["\\"] = new RegExp("\\\\", "g");
    Sys.Serialization.JavaScriptSerializer._escapeChars["\\"] = "\\\\";
    Sys.Serialization.JavaScriptSerializer._charsToEscape[1] = '"';
    Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs['"'] = new RegExp('"', "g");
    Sys.Serialization.JavaScriptSerializer._escapeChars['"'] = '\\"';
    for (var n = 0; n < 32; n++) {
        var t = String.fromCharCode(n);
        Sys.Serialization.JavaScriptSerializer._charsToEscape[n + 2] = t;
        Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[t] = new RegExp(t, "g");
        Sys.Serialization.JavaScriptSerializer._escapeChars[t] = i[n]
    }
};
Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder = function(n, t) {
    t.append(n.toString())
};
Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder = function(n, t) {
    if (isFinite(n)) t.append(String(n));
    else throw Error.invalidOperation(Sys.Res.cannotSerializeNonFiniteNumbers);
};
Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder = function(n, t) {
    t.append('"');
    if (Sys.Serialization.JavaScriptSerializer._escapeRegEx.test(n)) {
        Sys.Serialization.JavaScriptSerializer._charsToEscape.length === 0 && Sys.Serialization.JavaScriptSerializer._init();
        if (n.length < 128) n = n.replace(Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal, function(n) {
            return Sys.Serialization.JavaScriptSerializer._escapeChars[n]
        });
        else
            for (var r = 0; r < 34; r++) {
                var i = Sys.Serialization.JavaScriptSerializer._charsToEscape[r];
                n.indexOf(i) !== -1 && (n = Sys.Browser.agent === Sys.Browser.Opera || Sys.Browser.agent === Sys.Browser.FireFox ? n.split(i).join(Sys.Serialization.JavaScriptSerializer._escapeChars[i]) : n.replace(Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[i], Sys.Serialization.JavaScriptSerializer._escapeChars[i]))
            }
    }
    t.append(n);
    t.append('"')
};
Sys.Serialization.JavaScriptSerializer._serializeWithBuilder = function(n, t, i, r) {
    var u;
    switch (typeof n) {
        case "object":
            if (n)
                if (Number.isInstanceOfType(n)) Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(n, t);
                else if (Boolean.isInstanceOfType(n)) Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(n, t);
            else if (String.isInstanceOfType(n)) Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(n, t);
            else if (Array.isInstanceOfType(n)) {
                t.append("[");
                for (u = 0; u < n.length; ++u) {
                    u > 0 && t.append(",");
                    Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(n[u], t, !1, r)
                }
                t.append("]")
            } else {
                if (Date.isInstanceOfType(n)) {
                    t.append('"\\/Date(');
                    t.append(n.getTime());
                    t.append(')\\/"');
                    break
                }
                var f = [],
                    o = 0;
                for (var e in n)
                    if (!e.startsWith("$"))
                        if (e === Sys.Serialization.JavaScriptSerializer._serverTypeFieldName && o !== 0) {
                            f[o++] = f[0];
                            f[0] = e
                        } else f[o++] = e;
                i && f.sort();
                t.append("{");
                var h = !1;
                for (u = 0; u < o; u++) {
                    var s = n[f[u]];
                    if (typeof s != "undefined" && typeof s != "function") {
                        h ? t.append(",") : h = !0;
                        Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(f[u], t, i, r);
                        t.append(":");
                        Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(s, t, i, r)
                    }
                }
                t.append("}")
            } else t.append("null");
            break;
        case "number":
            Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(n, t);
            break;
        case "string":
            Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(n, t);
            break;
        case "boolean":
            Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(n, t);
            break;
        default:
            t.append("null")
    }
};
Sys.Serialization.JavaScriptSerializer.serialize = function(n) {
    var t = new Sys.StringBuilder;
    Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(n, t, !1);
    return t.toString()
};
Sys.Serialization.JavaScriptSerializer.deserialize = function(n, t) {
    if (n.length === 0) throw Error.argument("data", Sys.Res.cannotDeserializeEmptyString);
    try {
        var i = n.replace(Sys.Serialization.JavaScriptSerializer._dateRegEx, "$1new Date($2)");
        if (t && Sys.Serialization.JavaScriptSerializer._jsonRegEx.test(i.replace(Sys.Serialization.JavaScriptSerializer._jsonStringRegEx, ""))) throw null;
        return eval("(" + i + ")")
    } catch (r) {
        throw Error.argument("data", Sys.Res.cannotDeserializeInvalidJson);
    }
};
Sys.EventHandlerList = function() {
    this._list = {}
};
Sys.EventHandlerList.prototype = {
    _addHandler: function(n, t) {
        Array.add(this._getEvent(n, !0), t)
    },
    addHandler: function(n, t) {
        this._addHandler(n, t)
    },
    _removeHandler: function(n, t) {
        var i = this._getEvent(n);
        i && Array.remove(i, t)
    },
    removeHandler: function(n, t) {
        this._removeHandler(n, t)
    },
    getHandler: function(n) {
        var t = this._getEvent(n);
        if (!t || t.length === 0) return null;
        t = Array.clone(t);
        return function(n, i) {
            for (var r = 0, u = t.length; r < u; r++) t[r](n, i)
        }
    },
    _getEvent: function(n, t) {
        if (!this._list[n]) {
            if (!t) return null;
            this._list[n] = []
        }
        return this._list[n]
    }
};
Sys.EventHandlerList.registerClass("Sys.EventHandlerList");
Sys.UI.DomEvent = function(n) {
    var t = n,
        u = this.type = t.type.toLowerCase();
    this.rawEvent = t;
    this.altKey = t.altKey;
    typeof t.button != "undefined" && (this.button = typeof t.which != "undefined" ? t.button : t.button === 4 ? Sys.UI.MouseButton.middleButton : t.button === 2 ? Sys.UI.MouseButton.rightButton : Sys.UI.MouseButton.leftButton);
    u === "keypress" ? this.charCode = t.charCode || t.keyCode : this.keyCode = t.keyCode && t.keyCode === 46 ? 127 : t.keyCode;
    this.clientX = t.clientX;
    this.clientY = t.clientY;
    this.ctrlKey = t.ctrlKey;
    this.target = t.target ? t.target : t.srcElement;
    if (!u.startsWith("key"))
        if (typeof t.offsetX != "undefined" && typeof t.offsetY != "undefined") {
            this.offsetX = t.offsetX;
            this.offsetY = t.offsetY
        } else if (this.target && this.target.nodeType !== 3 && typeof t.clientX == "number") {
        var r = Sys.UI.DomElement.getLocation(this.target),
            i = Sys.UI.DomElement._getWindow(this.target);
        this.offsetX = (i.pageXOffset || 0) + t.clientX - r.x;
        this.offsetY = (i.pageYOffset || 0) + t.clientY - r.y
    }
    this.screenX = t.screenX;
    this.screenY = t.screenY;
    this.shiftKey = t.shiftKey
};
Sys.UI.DomEvent.prototype = {
    preventDefault: function() {
        this.rawEvent.preventDefault ? this.rawEvent.preventDefault() : window.event && (this.rawEvent.returnValue = !1)
    },
    stopPropagation: function() {
        this.rawEvent.stopPropagation ? this.rawEvent.stopPropagation() : window.event && (this.rawEvent.cancelBubble = !0)
    }
};
Sys.UI.DomEvent.registerClass("Sys.UI.DomEvent");
var $addHandler = Sys.UI.DomEvent.addHandler = function(n, t, i, r) {
    n._events || (n._events = {});
    var f = n._events[t];
    f || (n._events[t] = f = []);
    var u;
    if (n.addEventListener) {
        u = function(t) {
            return i.call(n, new Sys.UI.DomEvent(t))
        };
        n.addEventListener(t, u, !1)
    } else if (n.attachEvent) {
        u = function() {
            var t = {};
            try {
                t = Sys.UI.DomElement._getWindow(n).event
            } catch (r) {}
            return i.call(n, new Sys.UI.DomEvent(t))
        };
        n.attachEvent("on" + t, u)
    }
    f[f.length] = {
        handler: i,
        browserHandler: u,
        autoRemove: r
    };
    if (r) {
        var e = n.dispose;
        if (e !== Sys.UI.DomEvent._disposeHandlers) {
            n.dispose = Sys.UI.DomEvent._disposeHandlers;
            typeof e != "undefined" && (n._chainDispose = e)
        }
    }
};
Sys.UI.DomEvent._clearHandlers = function(n, t) {
    if (n._events) {
        var f = n._events;
        for (var e in f)
            for (var u = f[e], i = u.length - 1; i >= 0; i--) {
                var r = u[i];
                (!t || r.autoRemove) && $removeHandler(n, e, r.handler)
            }
        n._events = null
    }
};
Sys.UI.DomEvent._disposeHandlers = function() {
    Sys.UI.DomEvent._clearHandlers(this, !0);
    var t = this._chainDispose,
        n = typeof t;
    if (n !== "undefined") {
        this.dispose = t;
        this._chainDispose = null;
        n === "function" && this.dispose()
    }
};
var $removeHandler = Sys.UI.DomEvent.removeHandler = function(n, t, i) {
    Sys.UI.DomEvent._removeHandler(n, t, i)
};
Sys.UI.DomEvent._removeHandler = function(n, t, i) {
    for (var f = null, u = n._events[t], r = 0, e = u.length; r < e; r++)
        if (u[r].handler === i) {
            f = u[r].browserHandler;
            break
        }
    n.removeEventListener ? n.removeEventListener(t, f, !1) : n.detachEvent && n.detachEvent("on" + t, f);
    u.splice(r, 1)
};
Sys.UI.DomElement = function() {};
Sys.UI.DomElement.registerClass("Sys.UI.DomElement");
Sys.UI.DomElement.addCssClass = function(n, t) {
    Sys.UI.DomElement.containsCssClass(n, t) || (n.className === "" ? n.className = t : n.className += " " + t)
};
Sys.UI.DomElement.containsCssClass = function(n, t) {
    return Array.contains(n.className.split(" "), t)
};
var $get = Sys.UI.DomElement.getElementById = function(n, t) {
    if (!t) return document.getElementById(n);
    if (t.getElementById) return t.getElementById(n);
    for (var u = [], f = t.childNodes, r = 0; r < f.length; r++) {
        var i = f[r];
        i.nodeType == 1 && (u[u.length] = i)
    }
    while (u.length) {
        i = u.shift();
        if (i.id == n) return i;
        f = i.childNodes;
        for (r = 0; r < f.length; r++) {
            i = f[r];
            i.nodeType == 1 && (u[u.length] = i)
        }
    }
    return null
};
Sys.UI.DomElement.getLocation = document.documentElement.getBoundingClientRect ? function(n) {
    if (n.self || n.nodeType === 9 || n === document.documentElement || n.parentNode === n.ownerDocument.documentElement) return new Sys.UI.Point(0, 0);
    var e = n.getBoundingClientRect();
    if (!e) return new Sys.UI.Point(0, 0);
    var l, u = n.ownerDocument.documentElement,
        i = Math.round(e.left) + u.scrollLeft,
        r = Math.round(e.top) + u.scrollTop;
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        try {
            var f = n.ownerDocument.parentWindow.frameElement || null;
            if (f) {
                var h = f.frameBorder === "0" || f.frameBorder === "no" ? 2 : 0;
                i += h;
                r += h
            }
        } catch (c) {}
        if (Sys.Browser.version === 7 && !document.documentMode) {
            var s = document.body,
                o = s.getBoundingClientRect(),
                t = (o.right - o.left) / s.clientWidth;
            t = Math.round(t * 100);
            t = (t - t % 5) / 100;
            if (!isNaN(t) && t !== 1) {
                i = Math.round(i / t);
                r = Math.round(r / t)
            }
        }
        if ((document.documentMode || 0) < 8) {
            i -= u.clientLeft;
            r -= u.clientTop
        }
    }
    return new Sys.UI.Point(i, r)
} : Sys.Browser.agent === Sys.Browser.Safari ? function(n) {
    if (n.window && n.window === n || n.nodeType === 9) return new Sys.UI.Point(0, 0);
    for (var u = 0, r = 0, h = null, e = null, i, t = n; t; h = t, e = i, t = t.offsetParent) {
        i = Sys.UI.DomElement._getCurrentStyle(t);
        var f = t.tagName ? t.tagName.toUpperCase() : null;
        if ((t.offsetLeft || t.offsetTop) && (f !== "BODY" || !e || e.position !== "absolute")) {
            u += t.offsetLeft;
            r += t.offsetTop
        }
        if (h && Sys.Browser.version >= 3) {
            u += parseInt(i.borderLeftWidth);
            r += parseInt(i.borderTopWidth)
        }
    }
    i = Sys.UI.DomElement._getCurrentStyle(n);
    var s = i ? i.position : null;
    if (!s || s !== "absolute")
        for (t = n.parentNode; t; t = t.parentNode) {
            f = t.tagName ? t.tagName.toUpperCase() : null;
            if (f !== "BODY" && f !== "HTML" && (t.scrollLeft || t.scrollTop)) {
                u -= t.scrollLeft || 0;
                r -= t.scrollTop || 0
            }
            i = Sys.UI.DomElement._getCurrentStyle(t);
            var o = i ? i.position : null;
            if (o && o === "absolute") break
        }
    return new Sys.UI.Point(u, r)
} : function(n) {
    if (n.window && n.window === n || n.nodeType === 9) return new Sys.UI.Point(0, 0);
    for (var f = 0, u = 0, s = null, e = null, i = null, t = n; t; s = t, e = i, t = t.offsetParent) {
        var r = t.tagName ? t.tagName.toUpperCase() : null;
        i = Sys.UI.DomElement._getCurrentStyle(t);
        if ((t.offsetLeft || t.offsetTop) && !(r === "BODY" && (!e || e.position !== "absolute"))) {
            f += t.offsetLeft;
            u += t.offsetTop
        }
        if (s !== null && i) {
            if (r !== "TABLE" && r !== "TD" && r !== "HTML") {
                f += parseInt(i.borderLeftWidth) || 0;
                u += parseInt(i.borderTopWidth) || 0
            }
            if (r === "TABLE" && (i.position === "relative" || i.position === "absolute")) {
                f += parseInt(i.marginLeft) || 0;
                u += parseInt(i.marginTop) || 0
            }
        }
    }
    i = Sys.UI.DomElement._getCurrentStyle(n);
    var o = i ? i.position : null;
    if (!o || o !== "absolute")
        for (t = n.parentNode; t; t = t.parentNode) {
            r = t.tagName ? t.tagName.toUpperCase() : null;
            if (r !== "BODY" && r !== "HTML" && (t.scrollLeft || t.scrollTop)) {
                f -= t.scrollLeft || 0;
                u -= t.scrollTop || 0;
                i = Sys.UI.DomElement._getCurrentStyle(t);
                if (i) {
                    f += parseInt(i.borderLeftWidth) || 0;
                    u += parseInt(i.borderTopWidth) || 0
                }
            }
        }
    return new Sys.UI.Point(f, u)
};
Sys.UI.DomElement.removeCssClass = function(n, t) {
    var i = " " + n.className + " ",
        r = i.indexOf(" " + t + " ");
    r >= 0 && (n.className = (i.substr(0, r) + " " + i.substring(r + t.length + 1, i.length)).trim())
};
Sys.UI.DomElement._getWindow = function(n) {
    var t = n.ownerDocument || n.document || n;
    return t.defaultView || t.parentWindow
};
Sys.UI.MouseButton = function() {
    throw Error.notImplemented();
};
Sys.UI.MouseButton.prototype = {
    leftButton: 0,
    middleButton: 1,
    rightButton: 2
};
Sys.UI.MouseButton.registerEnum("Sys.UI.MouseButton");
Sys.UI.Key = function() {
    throw Error.notImplemented();
};
Sys.UI.Key.prototype = {
    backspace: 8,
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    del: 127
};
Sys.UI.Key.registerEnum("Sys.UI.Key");
Sys.UI.Point = function(n, t) {
    this.x = n;
    this.y = t
};
Sys.UI.Point.registerClass("Sys.UI.Point");
Sys.UI.Bounds = function(n, t, i, r) {
    this.x = n;
    this.y = t;
    this.height = r;
    this.width = i
};
Sys.UI.Bounds.registerClass("Sys.UI.Bounds");
var $get = function(n, t) {
    if (!t) return document.getElementById(n);
    if (t.getElementById) return t.getElementById(n);
    for (var u = [], f = t.childNodes, r = 0; r < f.length; r++) {
        var i = f[r];
        i.nodeType == 1 && (u[u.length] = i)
    }
    while (u.length) {
        i = u.shift();
        if (i.id == n) return i;
        f = i.childNodes;
        for (r = 0; r < f.length; r++) {
            i = f[r];
            i.nodeType == 1 && (u[u.length] = i)
        }
    }
    return null
};
window.XMLHttpRequest || (window.XMLHttpRequest = function() {
    for (var t = ["Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP"], n = 0, i = t.length; n < i; n++) try {
        return new ActiveXObject(t[n])
    } catch (r) {}
    return null
});
Sys.Net.WebRequestExecutor = function() {
    this._webRequest = null;
    this._resultObject = null
};
Sys.Net.WebRequestExecutor.prototype = {
    get_webRequest: function() {
        return this._webRequest
    },
    _set_webRequest: function(n) {
        this._webRequest = n
    },
    get_started: function() {
        throw Error.notImplemented();
    },
    get_responseAvailable: function() {
        throw Error.notImplemented();
    },
    get_timedOut: function() {
        throw Error.notImplemented();
    },
    get_aborted: function() {
        throw Error.notImplemented();
    },
    get_responseData: function() {
        throw Error.notImplemented();
    },
    get_statusCode: function() {
        throw Error.notImplemented();
    },
    get_statusText: function() {
        throw Error.notImplemented();
    },
    get_xml: function() {
        throw Error.notImplemented();
    },
    get_object: function() {
        this._resultObject || (this._resultObject = Sys.Serialization.JavaScriptSerializer.deserialize(this.get_responseData()));
        return this._resultObject
    },
    executeRequest: function() {
        throw Error.notImplemented();
    },
    abort: function() {
        throw Error.notImplemented();
    },
    getResponseHeader: function() {
        throw Error.notImplemented();
    },
    getAllResponseHeaders: function() {
        throw Error.notImplemented();
    }
};
Sys.Net.WebRequestExecutor.registerClass("Sys.Net.WebRequestExecutor");
Sys.Net.XMLDOM = function(n) {
    if (window.DOMParser) try {
        var u = new window.DOMParser;
        return u.parseFromString(n, "text/xml")
    } catch (e) {} else
        for (var r = ["Msxml2.DOMDocument.3.0", "Msxml2.DOMDocument"], i = 0, f = r.length; i < f; i++) try {
            var t = new ActiveXObject(r[i]);
            t.async = !1;
            t.loadXML(n);
            t.setProperty("SelectionLanguage", "XPath");
            return t
        } catch (e) {}
    return null
};
Sys.Net.XMLHttpExecutor = function() {
    Sys.Net.XMLHttpExecutor.initializeBase(this);
    var n = this;
    this._xmlHttpRequest = null;
    this._webRequest = null;
    this._responseAvailable = !1;
    this._timedOut = !1;
    this._timer = null;
    this._aborted = !1;
    this._started = !1;
    this._onReadyStateChange = function() {
        if (n._xmlHttpRequest.readyState === 4) {
            try {
                if (typeof n._xmlHttpRequest.status == "undefined") return
            } catch (t) {
                return
            }
            n._clearTimer();
            n._responseAvailable = !0;
            try {
                n._webRequest.completed(Sys.EventArgs.Empty)
            } finally {
                if (n._xmlHttpRequest != null) {
                    n._xmlHttpRequest.onreadystatechange = Function.emptyMethod;
                    n._xmlHttpRequest = null
                }
            }
        }
    };
    this._clearTimer = function() {
        if (n._timer != null) {
            window.clearTimeout(n._timer);
            n._timer = null
        }
    };
    this._onTimeout = function() {
        if (!n._responseAvailable) {
            n._clearTimer();
            n._timedOut = !0;
            n._xmlHttpRequest.onreadystatechange = Function.emptyMethod;
            n._xmlHttpRequest.abort();
            n._webRequest.completed(Sys.EventArgs.Empty);
            n._xmlHttpRequest = null
        }
    }
};
Sys.Net.XMLHttpExecutor.prototype = {
    get_timedOut: function() {
        return this._timedOut
    },
    get_started: function() {
        return this._started
    },
    get_responseAvailable: function() {
        return this._responseAvailable
    },
    get_aborted: function() {
        return this._aborted
    },
    executeRequest: function() {
        this._webRequest = this.get_webRequest();
        var t = this._webRequest.get_body(),
            n = this._webRequest.get_headers();
        this._xmlHttpRequest = new XMLHttpRequest;
        this._xmlHttpRequest.onreadystatechange = this._onReadyStateChange;
        var u = this._webRequest.get_httpVerb();
        this._xmlHttpRequest.open(u, this._webRequest.getResolvedUrl(), !0);
        this._xmlHttpRequest.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (n)
            for (var f in n) {
                var i = n[f];
                typeof i != "function" && this._xmlHttpRequest.setRequestHeader(f, i)
            }
        if (u.toLowerCase() === "post") {
            n !== null && n["Content-Type"] || this._xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
            t || (t = "")
        }
        var r = this._webRequest.get_timeout();
        r > 0 && (this._timer = window.setTimeout(Function.createDelegate(this, this._onTimeout), r));
        this._xmlHttpRequest.send(t);
        this._started = !0
    },
    getResponseHeader: function(n) {
        var t;
        try {
            t = this._xmlHttpRequest.getResponseHeader(n)
        } catch (i) {}
        t || (t = "");
        return t
    },
    getAllResponseHeaders: function() {
        return this._xmlHttpRequest.getAllResponseHeaders()
    },
    get_responseData: function() {
        return this._xmlHttpRequest.responseText
    },
    get_statusCode: function() {
        var n = 0;
        try {
            n = this._xmlHttpRequest.status
        } catch (t) {}
        return n
    },
    get_statusText: function() {
        return this._xmlHttpRequest.statusText
    },
    get_xml: function() {
        var n = this._xmlHttpRequest.responseXML;
        if (n && n.documentElement) navigator.userAgent.indexOf("MSIE") !== -1 && n.setProperty("SelectionLanguage", "XPath");
        else {
            n = Sys.Net.XMLDOM(this._xmlHttpRequest.responseText);
            if (!n || !n.documentElement) return null
        }
        return n.documentElement.namespaceURI === "http://www.mozilla.org/newlayout/xml/parsererror.xml" && n.documentElement.tagName === "parsererror" ? null : n.documentElement.firstChild && n.documentElement.firstChild.tagName === "parsererror" ? null : n
    },
    abort: function() {
        if (!this._aborted && !this._responseAvailable && !this._timedOut) {
            this._aborted = !0;
            this._clearTimer();
            if (this._xmlHttpRequest && !this._responseAvailable) {
                this._xmlHttpRequest.onreadystatechange = Function.emptyMethod;
                this._xmlHttpRequest.abort();
                this._xmlHttpRequest = null;
                this._webRequest.completed(Sys.EventArgs.Empty)
            }
        }
    }
};
Sys.Net.XMLHttpExecutor.registerClass("Sys.Net.XMLHttpExecutor", Sys.Net.WebRequestExecutor);
Sys.Net._WebRequestManager = function() {
    this._defaultTimeout = 0;
    this._defaultExecutorType = "Sys.Net.XMLHttpExecutor"
};
Sys.Net._WebRequestManager.prototype = {
    add_invokingRequest: function(n) {
        this._get_eventHandlerList().addHandler("invokingRequest", n)
    },
    remove_invokingRequest: function(n) {
        this._get_eventHandlerList().removeHandler("invokingRequest", n)
    },
    add_completedRequest: function(n) {
        this._get_eventHandlerList().addHandler("completedRequest", n)
    },
    remove_completedRequest: function(n) {
        this._get_eventHandlerList().removeHandler("completedRequest", n)
    },
    _get_eventHandlerList: function() {
        this._events || (this._events = new Sys.EventHandlerList);
        return this._events
    },
    get_defaultTimeout: function() {
        return this._defaultTimeout
    },
    set_defaultTimeout: function(n) {
        this._defaultTimeout = n
    },
    get_defaultExecutorType: function() {
        return this._defaultExecutorType
    },
    set_defaultExecutorType: function(n) {
        this._defaultExecutorType = n
    },
    executeRequest: function(n) {
        var t = n.get_executor();
        if (!t) {
            var u = !1;
            try {
                var f = eval(this._defaultExecutorType);
                t = new f
            } catch (e) {
                u = !0
            }
            n.set_executor(t)
        }
        if (!t.get_aborted()) {
            var i = new Sys.Net.NetworkRequestEventArgs(n),
                r = this._get_eventHandlerList().getHandler("invokingRequest");
            r && r(this, i);
            i.get_cancel() || t.executeRequest()
        }
    }
};
Sys.Net._WebRequestManager.registerClass("Sys.Net._WebRequestManager");
Sys.Net.WebRequestManager = new Sys.Net._WebRequestManager;
Sys.Net.NetworkRequestEventArgs = function(n) {
    Sys.Net.NetworkRequestEventArgs.initializeBase(this);
    this._webRequest = n
};
Sys.Net.NetworkRequestEventArgs.prototype = {
    get_webRequest: function() {
        return this._webRequest
    }
};
Sys.Net.NetworkRequestEventArgs.registerClass("Sys.Net.NetworkRequestEventArgs", Sys.CancelEventArgs);
Sys.Net.WebRequest = function() {
    this._url = "";
    this._headers = {};
    this._body = null;
    this._userContext = null;
    this._httpVerb = null;
    this._executor = null;
    this._invokeCalled = !1;
    this._timeout = 0
};
Sys.Net.WebRequest.prototype = {
    add_completed: function(n) {
        this._get_eventHandlerList().addHandler("completed", n)
    },
    remove_completed: function(n) {
        this._get_eventHandlerList().removeHandler("completed", n)
    },
    completed: function(n) {
        var t = Sys.Net.WebRequestManager._get_eventHandlerList().getHandler("completedRequest");
        t && t(this._executor, n);
        t = this._get_eventHandlerList().getHandler("completed");
        t && t(this._executor, n)
    },
    _get_eventHandlerList: function() {
        this._events || (this._events = new Sys.EventHandlerList);
        return this._events
    },
    get_url: function() {
        return this._url
    },
    set_url: function(n) {
        this._url = n
    },
    get_headers: function() {
        return this._headers
    },
    get_httpVerb: function() {
        return this._httpVerb === null ? this._body === null ? "GET" : "POST" : this._httpVerb
    },
    set_httpVerb: function(n) {
        this._httpVerb = n
    },
    get_body: function() {
        return this._body
    },
    set_body: function(n) {
        this._body = n
    },
    get_userContext: function() {
        return this._userContext
    },
    set_userContext: function(n) {
        this._userContext = n
    },
    get_executor: function() {
        return this._executor
    },
    set_executor: function(n) {
        this._executor = n;
        this._executor._set_webRequest(this)
    },
    get_timeout: function() {
        return this._timeout === 0 ? Sys.Net.WebRequestManager.get_defaultTimeout() : this._timeout
    },
    set_timeout: function(n) {
        this._timeout = n
    },
    getResolvedUrl: function() {
        return Sys.Net.WebRequest._resolveUrl(this._url)
    },
    invoke: function() {
        Sys.Net.WebRequestManager.executeRequest(this);
        this._invokeCalled = !0
    }
};
Sys.Net.WebRequest._resolveUrl = function(n, t) {
    if (n && n.indexOf("://") !== -1) return n;
    if (!t || t.length === 0) {
        var r = document.getElementsByTagName("base")[0];
        t = r && r.href && r.href.length > 0 ? r.href : document.URL
    }
    var i = t.indexOf("?");
    i !== -1 && (t = t.substr(0, i));
    i = t.indexOf("#");
    i !== -1 && (t = t.substr(0, i));
    t = t.substr(0, t.lastIndexOf("/") + 1);
    if (!n || n.length === 0) return t;
    if (n.charAt(0) === "/") {
        var e = t.indexOf("://"),
            f = t.indexOf("/", e + 3);
        return t.substr(0, f) + n
    } else {
        var u = t.lastIndexOf("/");
        return t.substr(0, u + 1) + n
    }
};
Sys.Net.WebRequest.registerClass("Sys.Net.WebRequest");
Sys.Res = {
    argumentInteger: "Value must be an integer.",
    argumentType: "Object cannot be converted to the required type.",
    argumentNull: "Value cannot be null.",
    formatBadFormatSpecifier: "Format specifier was invalid.",
    webServiceFailedNoMsg: "The server method '{0}' failed.",
    argumentDomElement: "Value must be a DOM element.",
    actualValue: "Actual value was {0}.",
    enumInvalidValue: "'{0}' is not a valid value for enum {1}.",
    parameterCount: "Parameter count mismatch.",
    cannotDeserializeEmptyString: "Cannot deserialize empty string.",
    formatInvalidString: "Input string was not in a correct format.",
    invalidTimeout: "Value must be greater than or equal to zero.",
    argument: "Value does not fall within the expected range.",
    cannotDeserializeInvalidJson: "Cannot deserialize. The data does not correspond to valid JSON.",
    cannotSerializeNonFiniteNumbers: "Cannot serialize non finite numbers.",
    argumentUndefined: "Value cannot be undefined.",
    argumentTypeWithTypes: "Object of type '{0}' cannot be converted to type '{1}'.",
    paramName: "Parameter name: {0}",
    format: "One of the identified items was in an invalid format.",
    assertFailedCaller: "Assertion Failed: {0}\r\nat {1}",
    argumentOutOfRange: "Specified argument was out of the range of valid values.",
    webServiceTimedOut: "The server method '{0}' timed out.",
    notImplemented: "The method or operation is not implemented.",
    assertFailed: "Assertion Failed: {0}",
    invalidOperation: "Operation is not valid due to the current state of the object.",
    breakIntoDebugger: "{0}\r\n\r\nBreak into debugger?"
};
(function(n) {
    "use strict";

    function c(n, t, i) {
        n.addEventListener ? n.addEventListener(t, i, !1) : n.attachEvent && n.attachEvent("on" + t, i)
    }

    function s() {
        return typeof Sys != "undefined" && typeof Sys.Serialization != "undefined" && typeof Sys.Serialization.JavaScriptSerializer != "undefined" ? Sys.Serialization.JavaScriptSerializer : null
    }

    function o(i, o, s) {
        var c;
        if (!o) return s(i);
        if (n.JSON && n.JSON.parse) return n.JSON.parse(i);
        if (c = i.replace(e, "[]"), c = c.replace(h, "[]"), c = c.replace(u, "[]"), r.test(c)) throw t;
        if (f.test(c)) throw t;
        try {
            eval("(" + i + ")")
        } catch (l) {
            throw t;
        }
    }

    function i() {
        var n = s(),
            t;
        return n === null || typeof n.deserialize != "function" ? !1 : n.__patchVersion >= 1 ? !0 : (t = n.deserialize, n.deserialize = function(n, i) {
            return o(n, i, t)
        }, n.__patchVersion = 1, !0)
    }
    var e = new RegExp('"(\\\\.|[^"\\\\])*"', "g"),
        h = new RegExp("\\b(true|false|null)\\b", "g"),
        u = new RegExp("-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?", "g"),
        r = new RegExp("[^{:,\\[\\s](?=\\s*\\[)"),
        f = new RegExp("[^\\s\\[\\]{}:,]"),
        t = "Cannot deserialize. The data does not correspond to valid JSON.";
    i() || c(n, "load", function() {
        i()
    })
})(window); // THIRD-PARTY SOFTWARE NOTICES
// This file is based on or incorporates material from the projects listed below (Third Party Code). The original copyright notice and the license under which Microsoft received such Third Party Code, are set forth below. Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party Code to you under the licensing terms for the Microsoft product. Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise.
// You may find a copy of the Corresponding Source code, if and as required under the Third Party Code License, either bundled with the Microsoft product or at http://3rdpartysource.microsoft.com. If not bundled with the product, you may also obtain a copy of the source code for a period of one year after our last shipment of this product.
// -------------------------------------
// promise-polyfill v6.0.2 - MIT license
! function(e) {
    function n() {}

    function t(e, n) {
        return function() {
            e.apply(n, arguments)
        }
    }

    function o(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], s(e, this)
    }

    function i(e, n) {
        for (; 3 === e._state;) e = e._value;
        return 0 === e._state ? void e._deferreds.push(n) : (e._handled = !0, void o._immediateFn(function() {
            var t = 1 === e._state ? n.onFulfilled : n.onRejected;
            if (null === t) return void(1 === e._state ? r : u)(n.promise, e._value);
            var o;
            try {
                o = t(e._value)
            } catch (i) {
                return void u(n.promise, i)
            }
            r(n.promise, o)
        }))
    }

    function r(e, n) {
        try {
            if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (n && ("object" == typeof n || "function" == typeof n)) {
                var i = n.then;
                if (n instanceof o) return e._state = 3, e._value = n, void f(e);
                if ("function" == typeof i) return void s(t(i, n), e)
            }
            e._state = 1, e._value = n, f(e)
        } catch (r) {
            u(e, r)
        }
    }

    function u(e, n) {
        e._state = 2, e._value = n, f(e)
    }

    function f(e) {
        2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
            e._handled || o._unhandledRejectionFn(e._value)
        });
        for (var n = 0, t = e._deferreds.length; n < t; n++) i(e, e._deferreds[n]);
        e._deferreds = null
    }

    function c(e, n, t) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.promise = t
    }

    function s(e, n) {
        var t = !1;
        try {
            e(function(e) {
                t || (t = !0, r(n, e))
            }, function(e) {
                t || (t = !0, u(n, e))
            })
        } catch (o) {
            if (t) return;
            t = !0, u(n, o)
        }
    }
    var a = setTimeout;
    o.prototype["catch"] = function(e) {
        return this.then(null, e)
    }, o.prototype.then = function(e, t) {
        var o = new this.constructor(n);
        return i(this, new c(e, t, o)), o
    }, o.all = function(e) {
        var n = Array.prototype.slice.call(e);
        return new o(function(e, t) {
            function o(r, u) {
                try {
                    if (u && ("object" == typeof u || "function" == typeof u)) {
                        var f = u.then;
                        if ("function" == typeof f) return void f.call(u, function(e) {
                            o(r, e)
                        }, t)
                    }
                    n[r] = u, 0 === --i && e(n)
                } catch (c) {
                    t(c)
                }
            }
            if (0 === n.length) return e([]);
            for (var i = n.length, r = 0; r < n.length; r++) o(r, n[r])
        })
    }, o.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === o ? e : new o(function(n) {
            n(e)
        })
    }, o.reject = function(e) {
        return new o(function(n, t) {
            t(e)
        })
    }, o.race = function(e) {
        return new o(function(n, t) {
            for (var o = 0, i = e.length; o < i; o++) e[o].then(n, t)
        })
    }, o._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e)
    } || function(e) {
        a(e, 0)
    }, o._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    }, o._setImmediateFn = function(e) {
        o._immediateFn = e
    }, o._setUnhandledRejectionFn = function(e) {
        o._unhandledRejectionFn = e
    }, "undefined" != typeof module && module.exports ? module.exports = o : e.Promise || (e.Promise = o)
}(this);
/* Note:  Microsoft Corporation is not the original author of these script files. Microsoft obtained
the original file from http://github.com/jquery/globalize under the license that is referred to below. That
license and the other notices below are provided for informational purposes only and are not
the license terms under which Microsoft distributes the files.  Microsoft grants you the right
to use the files for the sole purpose of using the files in conjunction with the Microsoft
product with which it was distributed subject to that product's End User License Agreement.
Unless applicable law gives you more rights, Microsoft reserves all other rights to the files
not expressly granted by Microsoft, whether by implication, estoppel or otherwise.
*/
/*!
 * Globalize
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * ------------------------------------------------------------------------------------
 * MIT License
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ------------------------------------------------------------------------------------
 */
(function(n, t) {
    var i, g, tt, ut, it, u, l, d, a, nt, v, o, r, b, e, c, k, y, rt, w, f, h, p, s;
    i = function(n) {
            return new i.prototype.init(n)
        }, typeof require != "undefined" && typeof exports != "undefined" && typeof module != "undefined" ? module.exports = i : n.Globalize = i, i.cultures = {}, i.prototype = {
            constructor: i,
            init: function(n) {
                return this.cultures = i.cultures, this.cultureSelector = n, this
            }
        }, i.prototype.init.prototype = i.prototype, i.cultures["default"] = {
            name: "en",
            englishName: "English",
            nativeName: "English",
            isRTL: !1,
            language: "en",
            numberFormat: {
                pattern: ["-n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSizes: [3],
                "+": "+",
                "-": "-",
                NaN: "NaN",
                negativeInfinity: "-Infinity",
                positiveInfinity: "Infinity",
                percent: {
                    pattern: ["-n %", "n %"],
                    decimals: 2,
                    groupSizes: [3],
                    ",": ",",
                    ".": ".",
                    symbol: "%"
                },
                currency: {
                    pattern: ["($n)", "$n"],
                    decimals: 2,
                    groupSizes: [3],
                    ",": ",",
                    ".": ".",
                    symbol: "$"
                }
            },
            calendars: {
                standard: {
                    name: "Gregorian_USEnglish",
                    "/": "/",
                    ":": ":",
                    firstDay: 0,
                    days: {
                        names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    },
                    months: {
                        names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                        namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
                    },
                    AM: ["AM", "am", "AM"],
                    PM: ["PM", "pm", "PM"],
                    eras: [{
                        name: "A.D.",
                        start: null,
                        offset: 0
                    }],
                    twoDigitYearMax: 2029,
                    patterns: {
                        d: "M/d/yyyy",
                        D: "dddd, MMMM dd, yyyy",
                        t: "h:mm tt",
                        T: "h:mm:ss tt",
                        f: "dddd, MMMM dd, yyyy h:mm tt",
                        F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                        M: "MMMM dd",
                        Y: "yyyy MMMM",
                        S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss"
                    }
                }
            },
            people: {
                headerDisplayValues: ["#", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "*"],
                headerSeekToValues: ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "??"]
            },
            messages: {}
        }, i.cultures["default"].calendar = i.cultures["default"].calendars.standard, i.cultures.en = i.cultures["default"], i.cultureSelector = "en", g = /^0x[a-f0-9]+$/i, tt = /^[+-]?infinity$/i, ut = /^[+-]?\d*\.?\d*(e[+-]?\d+)?$/, it = /^\s+|\s+$/g, u = function(n, t) {
            if (n.indexOf) return n.indexOf(t);
            for (var i = 0, r = n.length; i < r; i++)
                if (n[i] === t) return i;
            return -1
        }, l = function(n, t) {
            return n.substr(n.length - t.length) === t
        }, d = function(n) {
            var o, f, u, r, s, h, i = arguments[0] || {},
                e = 1,
                c = arguments.length,
                n = !1;
            for (typeof i == "boolean" && (n = i, i = arguments[1] || {}, e = 2), typeof i == "object" || nt(i) || (i = {}); e < c; e++)
                if ((o = arguments[e]) != null)
                    for (f in o)(u = i[f], r = o[f], i !== r) && (n && r && (v(r) || (s = a(r))) ? (s ? (s = !1, h = u && a(u) ? u : []) : h = u && v(u) ? u : {}, i[f] = d(n, h, r)) : r !== t && (i[f] = r));
            return i
        }, a = Array.isArray || function(n) {
            return Object.prototype.toString.call(n) === "[object Array]"
        }, nt = function(n) {
            return Object.prototype.toString.call(n) === "[object Function]"
        }, v = function(n) {
            return Object.prototype.toString.call(n) === "[object Object]"
        }, o = function(n, t) {
            return n.indexOf(t) === 0
        }, r = function(n) {
            return (n + "").replace(it, "")
        }, b = function(n) {
            return n | 0
        }, e = function(n, t, i) {
            for (var r = n.length; r < t; r += 1) n = i ? "0" + n : n + "0";
            return n
        }, c = function(n, t) {
            for (var f = 0, i = !1, u, r = 0, e = n.length; r < e; r++) {
                u = n.charAt(r);
                switch (u) {
                    case "'":
                        i ? t.push("'") : f++, i = !1;
                        break;
                    case "\\":
                        i && t.push("\\"), i = !i;
                        break;
                    default:
                        t.push(u), i = !1
                }
            }
            return f
        }, k = function(n, t) {
            t = t || "F";
            var i, u = n.patterns,
                r = t.length;
            if (r === 1) {
                if (i = u[t], !i) throw "Invalid date format string '" + t + "'.";
                t = i
            } else r === 2 && t.charAt(0) === "%" && (t = t.charAt(1));
            return t
        }, y = function(n, t, i) {
            function o(n, t) {
                var i, r = n + "";
                return t > 1 && r.length < t ? (i = lt[t - 2] + r, i.substr(i.length - t, t)) : i = r
            }

            function ct() {
                return p || rt ? p : (p = ht.test(t), rt = !0, p)
            }

            function nt(n, t) {
                if (v) return v[t];
                switch (t) {
                    case 0:
                        return n.getFullYear();
                    case 1:
                        return n.getMonth();
                    case 2:
                        return n.getDate()
                }
            }
            var u = i.calendar,
                d = u.convert,
                r, g, ft, tt, it, b, e, ut, l;
            if (!t || !t.length || t === "i") return i && i.name.length ? d ? r = y(n, u.patterns.F, i) : (g = new Date(n.getTime()), ft = f(n, u.eras), g.setFullYear(h(n, u, ft)), r = g.toLocaleString()) : r = n.toString(), r;
            tt = u.eras, it = t === "s", t = k(u, t), r = [];
            var s, lt = ["0", "00", "000"],
                p, rt, ht = /([^d]|^)(d|dd)([^d]|$)/g,
                et = 0,
                ot = w(),
                v;
            for (!it && d && (v = d.fromGregorian(n));;) {
                var st = ot.lastIndex,
                    a = ot.exec(t),
                    at = t.slice(st, a ? a.index : t.length);
                if (et += c(at, r), !a) break;
                if (et % 2) {
                    r.push(a[0]);
                    continue
                }
                b = a[0], e = b.length;
                switch (b) {
                    case "ddd":
                    case "dddd":
                        ut = e === 3 ? u.days.namesAbbr : u.days.names, r.push(ut[n.getDay()]);
                        break;
                    case "d":
                    case "dd":
                        p = !0, r.push(o(nt(n, 2), e));
                        break;
                    case "MMM":
                    case "MMMM":
                        l = nt(n, 1), r.push(u.monthsGenitive && ct() ? u.monthsGenitive[e === 3 ? "namesAbbr" : "names"][l] : u.months[e === 3 ? "namesAbbr" : "names"][l]);
                        break;
                    case "M":
                    case "MM":
                        r.push(o(nt(n, 1) + 1, e));
                        break;
                    case "y":
                    case "yy":
                    case "yyyy":
                        l = v ? v[0] : h(n, u, f(n, tt), it), e < 4 && (l = l % 100), r.push(o(l, e));
                        break;
                    case "h":
                    case "hh":
                        s = n.getHours() % 12, s === 0 && (s = 12), r.push(o(s, e));
                        break;
                    case "H":
                    case "HH":
                        r.push(o(n.getHours(), e));
                        break;
                    case "m":
                    case "mm":
                        r.push(o(n.getMinutes(), e));
                        break;
                    case "s":
                    case "ss":
                        r.push(o(n.getSeconds(), e));
                        break;
                    case "t":
                    case "tt":
                        l = n.getHours() < 12 ? u.AM ? u.AM[0] : " " : u.PM ? u.PM[0] : " ", r.push(e === 1 ? l.charAt(0) : l);
                        break;
                    case "f":
                    case "ff":
                    case "fff":
                        r.push(o(n.getMilliseconds(), 3).substr(0, e));
                        break;
                    case "z":
                    case "zz":
                        s = n.getTimezoneOffset() / 60, r.push((s <= 0 ? "+" : "-") + o(Math.floor(Math.abs(s)), e));
                        break;
                    case "zzz":
                        s = n.getTimezoneOffset() / 60, r.push((s <= 0 ? "+" : "-") + o(Math.floor(Math.abs(s)), 2) + ":" + o(Math.abs(n.getTimezoneOffset() % 60), 2));
                        break;
                    case "g":
                    case "gg":
                        u.eras && r.push(u.eras[f(n, tt)].name);
                        break;
                    case "/":
                        r.push(u["/"]);
                        break;
                    default:
                        throw "Invalid date format pattern '" + b + "'.";
                }
            }
            return r.join("")
        },
        function() {
            var n;
            n = function(n, t, i) {
                var l = i.groupSizes,
                    c = l[0],
                    y = 1,
                    p = Math.pow(10, t),
                    v = Math.round(n * p) / p,
                    w;
                isFinite(v) || (v = n), n = v;
                var u = n + "",
                    r = "",
                    s = u.split(/e/i),
                    f = s.length > 1 ? parseInt(s[1], 10) : 0;
                u = s[0], s = u.split("."), u = s[0], r = s.length > 1 ? s[1] : "", f > 0 ? (r = e(r, f, !1), u += r.slice(0, f), r = r.substr(f)) : f < 0 && (f = -f, u = e(u, f + 1), r = u.slice(-f, u.length) + r, u = u.slice(0, -f)), r = t > 0 ? i["."] + (r.length > t ? r.slice(0, t) : e(r, t)) : "";
                for (var o = u.length - 1, a = i[","], h = ""; o >= 0;) {
                    if (c === 0 || c > o) return u.slice(0, o + 1) + (h.length ? a + h + r : r);
                    h = u.slice(o - c + 1, o + 1) + (h.length ? a + h : ""), o -= c, y < l.length && (c = l[y], y++)
                }
                return u.slice(0, o + 1) + a + h + r
            }, rt = function(t, i, r) {
                var a, f, v, o, y, c;
                if (!isFinite(t)) return t === Infinity ? r.numberFormat.positiveInfinity : t === -Infinity ? r.numberFormat.negativeInfinity : r.numberFormat.NaN;
                if (!i || i === "i") return r.name.length ? t.toLocaleString() : t.toString();
                i = i || "D";
                var s = r.numberFormat,
                    u = Math.abs(t),
                    h = -1,
                    l;
                i.length > 1 && (h = parseInt(i.slice(1), 10)), a = i.charAt(0).toUpperCase();
                switch (a) {
                    case "D":
                        l = "n", u = b(u), h !== -1 && (u = e("" + u, h, !0)), t < 0 && (u = "-" + u);
                        break;
                    case "N":
                        f = s;
                    case "C":
                        f = f || s.currency;
                    case "P":
                        f = f || s.percent, l = t < 0 ? f.pattern[0] : f.pattern[1] || "n", h === -1 && (h = f.decimals), u = n(u * (a === "P" ? 100 : 1), h, f);
                        break;
                    default:
                        throw "Bad number format specifier: " + a;
                }
                for (v = /n|\$|-|%/g, o = "";;) {
                    if (y = v.lastIndex, c = v.exec(l), o += l.slice(y, c ? c.index : l.length), !c) break;
                    switch (c[0]) {
                        case "n":
                            o += u;
                            break;
                        case "$":
                            o += s.currency.symbol;
                            break;
                        case "-":
                            /[1-9]/.test(u) && (o += s["-"]);
                            break;
                        case "%":
                            o += s.percent.symbol
                    }
                }
                return o
            }
        }(), w = function() {
            return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g
        }, f = function(n, t) {
            var r, f, i, u;
            if (!t) return 0;
            for (f = n.getTime(), i = 0, u = t.length; i < u; i++)
                if (r = t[i].start, r === null || f >= r) return i;
            return 0
        }, h = function(n, t, i, r) {
            var u = n.getFullYear();
            return !r && t.eras && (u -= t.eras[i].offset), u
        },
        function() {
            var e, s, l, a, n, i, t;
            e = function(n, t) {
                var u = new Date,
                    e = f(u),
                    i, r;
                return t < 100 && (i = n.twoDigitYearMax, i = typeof i == "string" ? (new Date).getFullYear() % 100 + parseInt(i, 10) : i, r = h(u, n, e), t += r - r % 100, t > i && (t -= 100)), t
            }, s = function(n, r, f) {
                var o, s = n.days,
                    e = n._upperDays;
                return e || (n._upperDays = e = [t(s.names), t(s.namesAbbr), t(s.namesShort)]), r = i(r), f ? (o = u(e[1], r), o === -1 && (o = u(e[2], r))) : o = u(e[0], r), o
            }, l = function(n, r, f) {
                var h = n.months,
                    c = n.monthsGenitive || n.months,
                    e = n._upperMonths,
                    s = n._upperMonthsGen,
                    o;
                return e || (n._upperMonths = e = [t(h.names), t(h.namesAbbr)], n._upperMonthsGen = s = [t(c.names), t(c.namesAbbr)]), r = i(r), o = u(f ? e[1] : e[0], r), o < 0 && (o = u(f ? s[1] : s[0], r)), o
            }, a = function(n, t) {
                var e = n._parseRegExp,
                    o, b, f, a, i, v, l;
                if (e) {
                    if (o = e[t], o) return o
                } else n._parseRegExp = e = {};
                for (var h = k(n, t).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), r = ["^"], p = [], s = 0, y = 0, d = w(), u;
                    (u = d.exec(h)) !== null;) {
                    if (b = h.slice(s, u.index), s = d.lastIndex, y += c(b, r), y % 2) {
                        r.push(u[0]);
                        continue
                    }
                    f = u[0], a = f.length;
                    switch (f) {
                        case "dddd":
                        case "ddd":
                        case "MMMM":
                        case "MMM":
                        case "gg":
                        case "g":
                            i = "(\\D+)";
                            break;
                        case "tt":
                        case "t":
                            i = "(\\D*)";
                            break;
                        case "yyyy":
                        case "fff":
                        case "ff":
                        case "f":
                            i = "(\\d{" + a + "})";
                            break;
                        case "dd":
                        case "d":
                        case "MM":
                        case "M":
                        case "yy":
                        case "y":
                        case "HH":
                        case "H":
                        case "hh":
                        case "h":
                        case "mm":
                        case "m":
                        case "ss":
                        case "s":
                            i = "(\\d\\d?)";
                            break;
                        case "zzz":
                            i = "([+-]?\\d\\d?:\\d{2})";
                            break;
                        case "zz":
                        case "z":
                            i = "([+-]?\\d\\d?)";
                            break;
                        case "/":
                            i = "(\\" + n["/"] + ")";
                            break;
                        default:
                            throw "Invalid date format pattern '" + f + "'.";
                    }
                    i && r.push(i), p.push(u[0])
                }
                return c(h.slice(s), r), r.push("$"), v = r.join("").replace(/\s+/g, "\\s+"), l = {
                    regExp: v,
                    groups: p
                }, e[t] = l
            }, n = function(n, t, i) {
                return n < t || n > i
            }, i = function(n) {
                return n.split("\u00a0").join(" ").toUpperCase()
            }, t = function(n) {
                for (var u = [], t = 0, r = n.length; t < r; t++) u[t] = i(n[t]);
                return u
            }, p = function(t, i, u) {
                var d, bt, c, ft, ut, nt, g, dt, h, vt, tt, ot;
                t = r(t);
                var f = u.calendar,
                    yt = a(f, i),
                    pt = new RegExp(yt.regExp).exec(t);
                if (pt === null) return null;
                var wt = yt.groups,
                    ct = null,
                    b = null,
                    p = null,
                    w = null,
                    rt = null,
                    y = 0,
                    k, lt = 0,
                    ht = 0,
                    st = 0,
                    et = null,
                    at = !1;
                for (d = 0, bt = wt.length; d < bt; d++)
                    if (c = pt[d + 1], c) {
                        var kt = wt[d],
                            it = kt.length,
                            v = parseInt(c, 10);
                        switch (kt) {
                            case "dd":
                            case "d":
                                if (w = v, n(w, 1, 31)) return null;
                                break;
                            case "MMM":
                            case "MMMM":
                                if (p = l(f, c, it === 3), n(p, 0, 11)) return null;
                                break;
                            case "M":
                            case "MM":
                                if (p = v - 1, n(p, 0, 11)) return null;
                                break;
                            case "y":
                            case "yy":
                            case "yyyy":
                                if (b = it < 4 ? e(f, v) : v, n(b, 0, 9999)) return null;
                                break;
                            case "h":
                            case "hh":
                                if (y = v, y === 12 && (y = 0), n(y, 0, 11)) return null;
                                break;
                            case "H":
                            case "HH":
                                if (y = v, n(y, 0, 23)) return null;
                                break;
                            case "m":
                            case "mm":
                                if (lt = v, n(lt, 0, 59)) return null;
                                break;
                            case "s":
                            case "ss":
                                if (ht = v, n(ht, 0, 59)) return null;
                                break;
                            case "tt":
                            case "t":
                                if (at = f.PM && (c === f.PM[0] || c === f.PM[1] || c === f.PM[2]), !at && (!f.AM || c !== f.AM[0] && c !== f.AM[1] && c !== f.AM[2])) return null;
                                break;
                            case "f":
                            case "ff":
                            case "fff":
                                if (st = v * Math.pow(10, 3 - it), n(st, 0, 999)) return null;
                                break;
                            case "ddd":
                            case "dddd":
                                if (rt = s(f, c, it === 3), n(rt, 0, 6)) return null;
                                break;
                            case "zzz":
                                if ((ft = c.split(/:/), ft.length !== 2) || (k = parseInt(ft[0], 10), n(k, -12, 13)) || (ut = parseInt(ft[1], 10), n(ut, 0, 59))) return null;
                                et = k * 60 + (o(c, "-") ? -ut : ut);
                                break;
                            case "z":
                            case "zz":
                                if (k = v, n(k, -12, 13)) return null;
                                et = k * 60;
                                break;
                            case "g":
                            case "gg":
                                if (nt = c, !nt || !f.eras) return null;
                                for (nt = r(nt.toLowerCase()), g = 0, dt = f.eras.length; g < dt; g++)
                                    if (nt === f.eras[g].name.toLowerCase()) {
                                        ct = g;
                                        break
                                    }
                                if (ct === null) return null
                        }
                    }
                if (h = new Date, tt = f.convert, vt = tt ? tt.fromGregorian(h)[0] : h.getFullYear(), b === null ? b = vt : f.eras && (b += f.eras[ct || 0].offset), p === null && (p = 0), w === null && (w = 1), tt) {
                    if (h = tt.toGregorian(b, p, w), h === null) return null
                } else if ((h.setFullYear(b, p, w), h.getDate() !== w) || rt !== null && h.getDay() !== rt) return null;
                return at && y < 12 && (y += 12), h.setHours(y, lt, ht, st), et !== null && (ot = h.getMinutes() - (et + h.getTimezoneOffset()), h.setHours(h.getHours() + parseInt(ot / 60, 10), ot % 60)), h
            }
        }(), s = function(n, t, i) {
            var u = t["-"],
                r = t["+"],
                f;
            switch (i) {
                case "n -":
                    u = " " + u, r = " " + r;
                case "n-":
                    l(n, u) ? f = ["-", n.substr(0, n.length - u.length)] : l(n, r) && (f = ["+", n.substr(0, n.length - r.length)]);
                    break;
                case "- n":
                    u += " ", r += " ";
                case "-n":
                    o(n, u) ? f = ["-", n.substr(u.length)] : o(n, r) && (f = ["+", n.substr(r.length)]);
                    break;
                case "(n)":
                    o(n, "(") && l(n, ")") && (f = ["-", n.substr(1, n.length - 2)])
            }
            return f || ["", n]
        }, i.prototype.findClosestCulture = function(n) {
            return i.findClosestCulture.call(this, n)
        }, i.prototype.format = function(n, t, r) {
            return i.format.call(this, n, t, r)
        }, i.prototype.localize = function(n, t) {
            return i.localize.call(this, n, t)
        }, i.prototype.parseInt = function(n, t, r) {
            return i.parseInt.call(this, n, t, r)
        }, i.prototype.parseFloat = function(n, t, r) {
            return i.parseFloat.call(this, n, t, r)
        }, i.prototype.culture = function(n) {
            return i.culture.call(this, n)
        }, i.addCultureInfo = function(n, t, i) {
            var r = {},
                u = !1;
            typeof n != "string" ? (i = n, n = this.culture().name, r = this.cultures[n]) : typeof t != "string" ? (i = t, u = this.cultures[n] == null, r = this.cultures[n] || this.cultures["default"]) : (u = !0, r = this.cultures[t]), this.cultures[n] = d(!0, {}, r, i), u && (this.cultures[n].calendar = this.cultures[n].calendars.standard)
        }, i.findClosestCulture = function(n) {
            var f, u, o, l, y, c;
            if (!n) return this.cultures[this.cultureSelector] || this.cultures["default"];
            if (typeof n == "string" && (n = n.split(",")), a(n)) {
                for (var i, s = this.cultures, v = n, h = v.length, e = [], t = 0; t < h; t++) n = r(v[t]), o = n.split(";"), i = r(o[0]), o.length === 1 ? u = 1 : (n = r(o[1]), n.indexOf("q=") === 0 ? (n = n.substr(2), u = parseFloat(n), u = isNaN(u) ? 0 : u) : u = 1), e.push({
                    lang: i,
                    pri: u
                });
                for (e.sort(function(n, t) {
                        return n.pri < t.pri ? 1 : -1
                    }), t = 0; t < h; t++)
                    if (i = e[t].lang, f = s[i], f) return f;
                for (t = 0; t < h; t++) {
                    i = e[t].lang;
                    do {
                        if (l = i.lastIndexOf("-"), l === -1) break;
                        if (i = i.substr(0, l), f = s[i], f) return f
                    } while (1)
                }
                for (t = 0; t < h; t++) {
                    i = e[t].lang;
                    for (y in s)
                        if (c = s[y], c.language == i) return c
                }
            } else if (typeof n == "object") return n;
            return f || null
        }, i.format = function(n, t, i) {
            return culture = this.findClosestCulture(i), n instanceof Date ? n = y(n, t, culture) : typeof n == "number" && (n = rt(n, t, culture)), n
        }, i.localize = function(n, t) {
            return this.findClosestCulture(t).messages[n] || this.cultures["default"].messages.key
        }, i.parseDate = function(n, t, i) {
            var r, o, f, u, s, e;
            if (i = this.findClosestCulture(i), t) {
                if (typeof t == "string" && (t = [t]), t.length)
                    for (u = 0, s = t.length; u < s; u++)
                        if (e = t[u], e && (r = p(n, e, i), r)) break
            } else {
                f = i.calendar.patterns;
                for (o in f)
                    if (r = p(n, f[o], i), r) break
            }
            return r || null
        }, i.parseInt = function(n, t, r) {
            return b(i.parseFloat(n, t, r))
        }, i.parseFloat = function(n, t, i) {
            var k, o, h, f, b, nt, y, p, it, c, d;
            typeof t != "number" && (i = t, t = 10);
            var l = this.findClosestCulture(i),
                w = NaN,
                u = l.numberFormat;
            if (n.indexOf(l.numberFormat.currency.symbol) > -1 && (n = n.replace(l.numberFormat.currency.symbol, ""), n = n.replace(l.numberFormat.currency["."], l.numberFormat["."])), n = r(n), tt.test(n)) w = parseFloat(n);
            else if (!t && g.test(n)) w = parseInt(n, 16);
            else {
                var a = s(n, u, u.pattern[0]),
                    v = a[0],
                    e = a[1];
                v === "" && u.pattern[0] !== "-n" && (a = s(n, u, "-n"), v = a[0], e = a[1]), v = v || "+", h = e.indexOf("e"), h < 0 && (h = e.indexOf("E")), h < 0 ? (o = e, k = null) : (o = e.substr(0, h), k = e.substr(h + 1)), nt = u["."], y = o.indexOf(nt), y < 0 ? (f = o, b = null) : (f = o.substr(0, y), b = o.substr(y + nt.length)), p = u[","], f = f.split(p).join(""), it = p.replace(/\u00A0/g, " "), p !== it && (f = f.split(it).join("")), c = v + f, b !== null && (c += "." + b), k !== null && (d = s(k, u, "-n"), c += "e" + (d[0] || "+") + d[1]), ut.test(c) && (w = parseFloat(c))
            }
            return w
        }, i.culture = function(n) {
            return typeof n != "undefined" && (this.cultureSelector = n), this.findClosestCulture(n) || this.cultures["default"]
        }
})(this);
Type.registerNamespace("_j");
_j.bn = function() {};
_j.bn.prototype = {
    none: 0,
    alert: 1,
    alertdialog: 2,
    button: 3,
    checkbox: 4,
    dialog: 5,
    gridcell: 6,
    link: 7,
    log: 8,
    marquee: 9,
    menuitem: 10,
    menuitemcheckbox: 11,
    menuitemradio: 12,
    option: 13,
    progressbar: 14,
    radio: 15,
    scrollbar: 16,
    slider: 17,
    spinbutton: 18,
    status: 19,
    tab: 20,
    tabpanel: 21,
    textbox: 22,
    timer: 23,
    tooltip: 24,
    treeitem: 25,
    combobox: 26,
    grid: 27,
    listbox: 28,
    menu: 29,
    menubar: 30,
    radiogroup: 31,
    tablist: 32,
    tree: 33,
    treegrid: 34,
    article: 35,
    columnheader: 36,
    definition: 37,
    directory: 38,
    document: 39,
    group: 40,
    heading: 41,
    img: 42,
    list: 43,
    listitem: 44,
    math: 45,
    note: 46,
    presentation: 47,
    region: 48,
    row: 49,
    rowheader: 50,
    separator: 51,
    toolbar: 52,
    application: 53,
    banner: 54,
    complementary: 55,
    contentinfo: 56,
    form: 57,
    main: 58,
    navigation: 59,
    search: 60
};
_j.bn.registerEnum("_j.bn", !1);
_j.by = function() {};
_j.by.prototype = {
    none: 0,
    inline: 1,
    list: 2,
    both: 3
};
_j.by.registerEnum("_j.by", !1);
_j.bB = function() {};
_j.bB.prototype = {
    all: 0,
    text: 1,
    additions: 2,
    removals: 3
};
_j.bB.registerEnum("_j.bB", !1);
_j.br = function() {};
_j.br.prototype = {
    falsestate: 0,
    truestate: 1,
    undefined: 2
};
_j.br.registerEnum("_j.br", !1);
_j.bz = function() {};
_j.bz.prototype = {
    off: 0,
    polite: 1,
    assertive: 2
};
_j.bz.registerEnum("_j.bz", !1);
_j.bA = function() {};
_j.bA.prototype = {
    horizontal: 0,
    vertical: 1
};
_j.bA.registerEnum("_j.bA", !1);
_j.cn = function() {};
_j.cn.registerInterface("_j.cn");
_j.bP = function() {};
_j.bP.registerInterface("_j.bP");

function ComponentTypeRecord(n) {
    this.type = n
}
_j.cc = function() {};
_j.cc.$$ = function(n) {
    var i = _j.__tc = _j.__tc || {};
    var t = "cc" + "$" + n.getName().replace(/\./g, "_");
    if (!i[t]) {
        var r = i[t] = function() {};
        r.registerInterface("_j.__tc." + t)
    }
    return i[t]
};
_j.cd = function() {};
_j.cd.$$ = function(n) {
    var i = _j.__tc = _j.__tc || {};
    var t = "cd" + "$" + n.getName().replace(/\./g, "_");
    if (!i[t]) {
        var r = i[t] = function() {};
        r.registerInterface("_j.__tc." + t)
    }
    return i[t]
};
_j.Z = function() {};
_j.Z.registerInterface("_j.Z");
_j.t = function() {};
_j.t.registerInterface("_j.t");
_j.ca = function() {};
_j.ca.registerInterface("_j.ca");
_j.cb = function() {};
_j.cb.registerInterface("_j.cb");
_j.ce = function() {};
_j.ce.registerInterface("_j.ce");
_j.cj = function() {};
_j.cj.registerInterface("_j.cj");
_j.ck = function() {};
_j.ck.registerInterface("_j.ck");
_j.cl = function() {};
_j.cl.registerInterface("_j.cl");
_j.cm = function() {};
_j.cm.registerInterface("_j.cm");
_j.I = function() {};
_j.I.registerInterface("_j.I");
_j.bv = function() {};
_j.bv.registerInterface("_j.bv");
_j.cg = function() {};
_j.cg.registerInterface("_j.cg");
_j.bQ = function() {};
_j.bQ.prototype = {
    jsEvent: 0,
    jsFunction: 1,
    jsBlock: 2,
    scenario: 512,
    request: 513,
    resourceTiming: 514,
    navigationTiming: 515,
    animation: 516,
    custom: 517,
    capture: 518
};
_j.bQ.registerEnum("_j.bQ", !1);
_j.PerfTraceLevel = function() {};
_j.PerfTraceLevel.prototype = {
    off: 0,
    essential: 1,
    info: 2,
    verbose: 3,
    debug: 4
};
_j.PerfTraceLevel.registerEnum("_j.PerfTraceLevel", !1);
_j.cr = function() {};
_j.cr.registerInterface("_j.cr");
_j.L = function() {};
_j.L.registerInterface("_j.L");
_j.cf = function() {};
_j.cf.registerInterface("_j.cf");
_j.ch = function() {};
_j.ch.registerInterface("_j.ch");
_j.cs = function() {};
_j.cs.registerInterface("_j.cs");
_j.bw = function() {};
_j.bw.prototype = {
    TouchNarrow: 1,
    TouchWide: 2,
    Mouse: 3
};
_j.bw.registerEnum("_j.bw", !1);

function SourceFileRecord(n) {
    this.name = n
}
_j.cu = function() {};
_j.cu.prototype = {
    Standard: 0,
    Sprite: 1,
    HighResolution: 2
};
_j.cu.registerEnum("_j.cu", !1);

function StyleFileRecord(n, t) {
    this.name = n;
    this.type = t
}
_j.bf = function() {};
_j.bf.prototype = {
    active: 0,
    idle: 1,
    dispose: 2
};
_j.bf.registerEnum("_j.bf", !1);
_j.ci = function() {};
_j.ci.registerInterface("_j.ci");
_j.co = function() {};
_j.co.registerInterface("_j.co");
_j.cp = function() {};
_j.cp.registerInterface("_j.cp");
_j.cq = function() {};
_j.cq.registerInterface("_j.cq");
_j.bj = function() {};
_j.bj.prototype = {
    off: 0,
    error: 1,
    warning: 2,
    perf: 3,
    info: 4,
    verbose: 5
};
_j.bj.registerEnum("_j.bj", !1);
_j.bN = function(n, t, i, r) {
    this.instance = n;
    this.property = t;
    this.oldValue = i;
    this.newValue = r
};
_j.M = function() {};
_j.M.registerInterface("_j.M");
_j.bs = function() {};
_j.bs.registerInterface("_j.bs");
_j.NotifyCollectionChangedAction = function() {};
_j.NotifyCollectionChangedAction.prototype = {
    none: -1,
    add: 0,
    move: 1,
    remove: 2,
    replace: 3,
    reset: 4
};
_j.NotifyCollectionChangedAction.registerEnum("_j.NotifyCollectionChangedAction", !1);
_j.v = function() {};
_j.v.registerInterface("_j.v");
_j.U = function() {};
_j.U.prototype = {
    none: 0,
    click: 1,
    doubleClick: 2,
    hover: 4,
    mouseDown: 8,
    mouseUp: 16,
    focus: 32,
    blur: 64,
    keyUp: 128,
    keyDown: 256,
    change: 512,
    copy: 1024,
    selectStart: 2048,
    dragStart: 4096,
    contextMenu: 8192,
    touch: 16384,
    touchEnd: 32768,
    touchMove: 65536,
    paste: 131072,
    focusIn: 262144,
    focusOut: 524288,
    keyPress: 1048576,
    input: 2097152,
    mouseEnter: 4194304,
    mouseLeave: 8388608,
    mouseMove: 16777216,
    hoverIE: 33554432,
    cut: 67108864,
    compositionEnd: 134217728
};
_j.U.registerEnum("_j.U", !0);
_j.p = function() {};
_j.p.registerInterface("_j.p");
_j.o = function() {};
_j.o.registerInterface("_j.o");
_j.D = function(n) {
    this.l = n
};
_j.D.a = function() {
    _j.D.c++;
    return "_ariaId_" + _j.D.c.toString()
};
_j.D.d = function(n) {
    return n ? 1 : 0
};
_j.D.b = function(n) {
    return n ? 1 : 0
};
_j.D.e = function(n) {
    switch (n) {
        case 0:
            return "false";
        case 1:
            return "true";
        default:
            return null
    }
};
_j.D.h = function(n) {
    switch (n) {
        case "false":
            return 0;
        case "true":
            return 1;
        default:
            return 2
    }
};
_j.D.f = function(n) {
    switch (n) {
        case 0:
            return "false";
        case 1:
            return "true";
        case 2:
            return "mixed";
        default:
            return null
    }
};
_j.D.g = function(n) {
    switch (n) {
        case 2:
            return "grammar";
        case 3:
            return "spelling";
        case 1:
            return "true";
        default:
            return "false"
    }
};
_j.D.prototype = {
    l: null,
    x: function() {
        return _j.u.b(_j.bn, this.y("role", "none"))
    },
    a: function(n) {
        var t = n ? _j.bn.toString(n) : null;
        this.b("role", t);
        return n
    },
    J: function() {
        return parseInt(this.y("tabindex", "-1"))
    },
    c: function(n) {
        this.b("tabindex", n.toString());
        return n
    },
    h: function() {
        return this.n("id")
    },
    f: function(n) {
        this.b("id", n);
        return n
    },
    o: function(n) {
        this.b("aria-activedescendant", n);
        return n
    },
    K: function(n) {
        this.b("aria-atomic", n.toString());
        return n
    },
    Q: function(n) {
        this.b("aria-relevant", _j.bB.toString(n));
        return n
    },
    D: function(n) {
        this.b("aria-autocomplete", _j.by.toString(n));
        return n
    },
    L: function(n) {
        this.b("aria-controls", n);
        return n
    },
    A: function() {
        return this.n("aria-describedby")
    },
    i: function(n) {
        this.b("aria-describedby", n);
        return n
    },
    q: function(n) {
        this.b("aria-flowto", n);
        return n
    },
    j: function(n) {
        this.b("aria-haspopup", n.toString());
        return n
    },
    G: function() {
        return this.n("aria-label")
    },
    k: function(n) {
        this.b("aria-label", n);
        return n
    },
    C: function() {
        return this.n("aria-labelledby")
    },
    e: function(n) {
        this.b("aria-labelledby", n);
        return n
    },
    N: function(n) {
        this.b("aria-level", n.toString());
        return n
    },
    O: function(n) {
        this.b("aria-live", _j.bz.toString(n));
        return n
    },
    P: function(n) {
        this.b("aria-multiline", n.toString());
        return n
    },
    F: function(n) {
        this.b("aria-multiselectable", n.toString());
        return n
    },
    u: function(n) {
        this.b("aria-orientation", _j.bA.toString(n));
        return n
    },
    H: function() {
        return this.n("aria-owns")
    },
    r: function(n) {
        this.b("aria-owns", n);
        return n
    },
    v: function(n) {
        this.b("aria-posinset", n.toString());
        return n
    },
    s: function(n) {
        this.b("aria-readonly", n.toString());
        return n
    },
    w: function(n) {
        this.b("aria-setsize", n.toString());
        return n
    },
    R: function(n) {
        this.b("aria-valuemax", n.toString());
        return n
    },
    S: function(n) {
        this.b("aria-valuemin", n.toString());
        return n
    },
    T: function(n) {
        this.b("aria-valuenow", n.toString());
        return n
    },
    E: function(n) {
        this.b("aria-busy", $a(n) ? null : n.toString());
        return n
    },
    d: function(n) {
        this.b("aria-checked", _j.D.f(n));
        return n
    },
    p: function(n) {
        this.b("aria-disabled", n.toString());
        return n
    },
    m: function(n) {
        this.b("aria-expanded", _j.D.e(n));
        return n
    },
    B: function() {
        return Boolean.parse(this.y("aria-hidden", "false"))
    },
    t: function(n) {
        this.b("aria-hidden", $a(n) ? null : n.toString());
        return n
    },
    M: function(n) {
        this.b("aria-invalid", _j.D.g(n));
        return n
    },
    z: function(n) {
        this.b("aria-pressed", _j.D.f(n));
        return n
    },
    I: function() {
        return _j.D.h(this.n("aria-selected"))
    },
    g: function(n) {
        this.b("aria-selected", _j.D.e(n));
        return n
    },
    n: function(n) {
        return this.l.getAttribute(n)
    },
    y: function(n, t) {
        var i = this.l.getAttribute(n);
        return i === null || i === undefined || i === "" ? t : i
    },
    b: function(n, t) {
        t ? this.l.setAttribute(n, t) : this.l.removeAttribute(n)
    }
};
_j.bC = function(n, t) {
    this.k = Function.createDelegate(this, this.p);
    this.f = [];
    this.j = n;
    this.i = t
};
_j.bC.$$ = function(n) {
    var u = _j.__tc = _j.__tc || {};
    var t = "bC" + "$" + n.getName().replace(/\./g, "_");
    if (!u[t]) {
        var r = u[t] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _j.bC.apply(this, t)
        };
        r.registerClass("_j.__tc." + t, null, _j.cc.$$(n));
        var o = {
            "_j.bC": {
                T: n
            },
            ctor: _j.bC
        };
        r.prototype.$$gta = o;
        var e = _j.bC.prototype;
        for (var f in e) {
            var i = {
                key: f,
                value: e[f]
            };
            "constructor" !== i.key && (r.prototype[i.key] = i.value)
        }
    }
    return u[t]
};
_j.bC.prototype = {
    i: null,
    j: null,
    g: !1,
    e: null,
    h: !1,
    a: function(n) {
        this.l(n, !1)
    },
    b: function(n) {
        this.l(n, !0)
    },
    l: function(n, t) {
        if (this.e) {
            n && n(this.e);
            return
        }
        if (!this.h) {
            n && Array.add(this.f, n);
            if (!this.g) {
                this.g = !0;
                if (this.i.b(this.$$gta["_j.bC"].T)) this.m(n, t);
                else {
                    var i = this;
                    this.i.d(this.$$gta["_j.bC"].T, function() {
                        i.m(n, !1)
                    }, this.k)
                }
            }
        }
    },
    c: function() {
        return !!this.e
    },
    d: function() {
        return this.g
    },
    m: function(n, t) {
        this.e = this.j();
        this.o(n, t);
        this.g = !1;
        this.h = !0
    },
    p: function() {
        this.f = null;
        this.g = !1;
        this.h = !0
    },
    o: function(n, t) {
        for (var r = "AsyncFactory:Notify_" + this.$$gta["_j.bC"].T.getName(), i = 0; i < this.f.length; i++) t && this.f[i] === n ? n(this.e) : this.n(r, this.f[i]);
        this.f = null
    },
    n: function(n, t) {
        var i = this;
        _j.m.a().c(_j.A.a, n, function() {
            t(i.e)
        })
    }
};
_j.bD = function(n, t, i) {
    this.p = Function.createDelegate(this, this.u);
    this.j = new _j.R;
    this.h = [];
    this.o = n;
    this.l = t;
    this.n = i
};
_j.bD.$$ = function(n) {
    var u = _j.__tc = _j.__tc || {};
    var t = "bD" + "$" + n.getName().replace(/\./g, "_");
    if (!u[t]) {
        var r = u[t] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _j.bD.apply(this, t)
        };
        r.registerClass("_j.__tc." + t, null, _j.cd.$$(n));
        var o = {
            "_j.bD": {
                T: n
            },
            ctor: _j.bD
        };
        r.prototype.$$gta = o;
        var e = _j.bD.prototype;
        for (var f in e) {
            var i = {
                key: f,
                value: e[f]
            };
            "constructor" !== i.key && (r.prototype[i.key] = i.value)
        }
    }
    return u[t]
};
_j.bD.prototype = {
    l: null,
    n: null,
    o: null,
    i: !1,
    m: !1,
    g: null,
    k: !1,
    e: function(n) {
        this.j.b(n)
    },
    f: function(n) {
        this.j.c(n)
    },
    d: function() {
        return !!this.g
    },
    b: function() {
        if (!this.d()) throw Error.invalidOperation("Cannot call Value without first calling Create.");
        return this.g
    },
    a: function(n) {
        this.q(n, !1, !1)
    },
    c: function(n, t) {
        this.q(n, !0, t)
    },
    q: function(n, t, i) {
        if (this.d()) {
            n && n(this.g);
            return
        }
        if (!this.k) {
            var r = this.l.b(this.$$gta["_j.bD"].T);
            n && (r || !i) && Array.add(this.h, n);
            if (!this.i) {
                this.i = !0;
                if (r) this.r(n, t);
                else {
                    var u = this;
                    this.l.d(this.$$gta["_j.bD"].T, function() {
                        u.r(n, !1)
                    }, this.p)
                }
            }
        }
    },
    r: function(n, t) {
        this.g = this.o();
        if (!this.m && this.j.d()) {
            this.j.a();
            this.m = !0
        }
        this.t(n, t);
        this.k = !0;
        this.i = !1
    },
    u: function() {
        this.k = !0;
        this.h = null;
        this.i = !1
    },
    t: function(n, t) {
        for (var r = "AsyncLazy:Notify_" + this.$$gta["_j.bD"].T.getName(), i = 0; i < this.h.length; i++)(this.n.a() || t) && n && this.h[i] === n ? n(this.g) : this.s(r, this.h[i]);
        this.h = null
    },
    s: function(n, t) {
        var i = this;
        _j.m.a().c(_j.A.a, n, function() {
            t(i.g)
        })
    }
};
_j.bV = function() {
    _j.bV.initializeBase(this)
};
_j.bV.prototype = {
    bp: null,
    bt: !1,
    bs: !1,
    Z: function() {
        return this.bs
    },
    cj: function(n) {
        if (this.bs !== n) {
            this.bs = n;
            this.by("IsActive")
        }
        return n
    },
    bl: function(n) {
        if (this.X !== n) {
            if (this.X) {
                this.X.ss(this.iN || (this.iN = Function.createDelegate(this, this.dispose)));
                this.X.rpcl("IsActive", this.bp || (this.bp = Function.createDelegate(this, this.ch)));
                this.ci();
                this.bh(this.X)
            }
            this.bt = !0;
            this.fe(n);
            this.bt = !1;
            if (this.X) {
                this.X.sr(this.iN || (this.iN = Function.createDelegate(this, this.dispose)));
                this.X.apcl("IsActive", this.bp || (this.bp = Function.createDelegate(this, this.ch)));
                this.be(this.X);
                this.X.Z() && this.cg()
            }
        }
        return n
    },
    dT: function() {
        if (!this.bt) throw Error.invalidOperation("You cannot set ContextParent on Behavior; set AttachedControl instead.");
        _j.bk.prototype.dT.call(this)
    },
    be: function(n) {},
    bb: function() {},
    bc: function() {},
    bh: function(n) {},
    bz: function() {
        this.bl(null);
        _j.bk.prototype.bz.call(this)
    },
    cg: function() {
        if (!this.Z()) {
            this.cj(!0);
            this.bb()
        }
    },
    ci: function() {
        if (this.Z()) {
            this.cj(!1);
            this.bc()
        }
    },
    ch: function(n, t) {
        this.X && this.X.Z() ? this.cg() : this.ci()
    }
};
_j.bk = function() {
    _j.bk.initializeBase(this)
};
_j.bk.prototype = {
    gd: null,
    ge: null,
    fd: null,
    hl: !1,
    nb: !1,
    gf: null,
    hm: null,
    X: null,
    dy: null,
    dz: null,
    fF: null,
    fb: null,
    iM: !1,
    sr: function(n) {
        this.fd || (this.fd = new _j.R);
        this.fd.b(n)
    },
    ss: function(n) {
        this.fd && this.fd.c(n)
    },
    V: function() {
        return this.hl ? this.gf : this.hm
    },
    ba: function(n) {
        this.hl = !0;
        this.pQ(n, !1);
        return n
    },
    fc: function() {
        return this.hl ? this.gf : null
    },
    fe: function(n) {
        if (this.X !== n) {
            if (this.hk) {
                this.X = n;
                return n
            }
            if (this.X) {
                this.X.rpcl("DataContext", this.ge || (this.ge = Function.createDelegate(this, this.kC)));
                this.X.rpcl("IsActive", this.gd || (this.gd = Function.createDelegate(this, this.gg)))
            }
            this.X = n;
            if (this.X) {
                this.X.apcl("DataContext", this.ge || (this.ge = Function.createDelegate(this, this.kC)));
                this.X.apcl("IsActive", this.gd || (this.gd = Function.createDelegate(this, this.gg)))
            }
            this.by("ContextParent");
            this.dT()
        }
        return n
    },
    cn: function(n) {
        if (this.iM !== n) {
            if (this.iM) throw Error.invalidOperation("Can't switch HasAsyncDataBinding from true to false");
            this.iM = !0;
            this.fb && this.fb.j();
            if (this.dy)
                for (var i = this.dy.length - 1; i >= 0; i--) this.dy[i].j();
            if (this.dz)
                for (var t = this.dz.length - 1; t >= 0; t--) this.dz[t].j()
        }
        return n
    },
    Z: function() {
        return !0
    },
    iO: function() {
        return !1
    },
    hk: !1,
    U: function(n) {
        this.pP(n);
        if (n.c === "DataContext") {
            this.hl = !0;
            this.fb = n;
            n.b(this.hm ? this.hm : this.X ? this.X.V() : null)
        } else {
            this.dy || (this.dy = []);
            this.dy[this.dy.length] = n;
            this.gf && n.b(this.V())
        }
        n.h !== 2 && n.g(this);
        return this
    },
    W: function(n) {
        this.pP(n);
        if (n.h !== 2) {
            n.b(this.X);
            n.g(this)
        }
        this.dz || (this.dz = []);
        this.dz[this.dz.length] = n;
        return this
    },
    bz: function() {
        if (this.fd) {
            this.fd.a();
            this.fd.dispose()
        }
        if (this.fb) {
            this.fb.dispose();
            this.fb = null
        }
        if (this.dy)
            for (var t = 0; t < this.dy.length; t++) this.dy[t].dispose();
        if (this.dz)
            for (var n = 0; n < this.dz.length; n++) this.dz[n].dispose();
        this.ba(null);
        if (this.X) {
            this.X.rpcl("DataContext", this.ge || (this.ge = Function.createDelegate(this, this.kC)));
            this.X.rpcl("IsActive", this.gd || (this.gd = Function.createDelegate(this, this.gg)));
            this.X = null
        }
        this.hm = null;
        this.dy = null;
        this.dz = null;
        this.fF = null;
        _j.S.prototype.bz.call(this)
    },
    bq: function() {},
    Y: function() {
        if (this.dy)
            for (var n = this.dy.length - 1; n >= 0; n--) this.dy[n].b(this.gf)
    },
    dT: function() {
        if (this.dz)
            for (var n = this.dz.length - 1; n >= 0; n--) this.dz[n].b(this.X);
        this.pR()
    },
    nc: function(n) {
        return !_j.h.a(n) && !!this.fF && !!this.fF[n]
    },
    gg: function(n, t) {
        this.kC(n, t)
    },
    kC: function(n, t) {
        !this.bM && this.X && (this.X.Z() || !this.X.V()) && this.pR()
    },
    pR: function() {
        var n = this.X ? this.X.V() : null;
        n && (this.nb = !0);
        this.nb && (this.fb ? this.fb.b(n) : this.hl || this.pQ(n, !0))
    },
    pP: function(n) {
        _j.s.a(n, "dataBinder");
        if (this.fF) {
            if (this.fF[n.c] && !n.p) throw Error.argument("TargetProperty already bound to other properties");
        } else this.fF = {};
        this.fF[n.c] = n;
        this.iM && n.j();
        n.h === 2 && n.g(this)
    },
    pQ: function(n, t) {
        if (this.gf !== n) {
            this.bq();
            t && (this.hm = n);
            this.gf = n;
            this.Y();
            this.by("DataContext")
        }
    }
};
_j.bL = function(n) {
    this.f = Function.createDelegate(this, this.n);
    _j.bL.initializeBase(this);
    this.d = n
};
_j.bL.prototype = {
    a: null,
    d: null,
    e: null,
    b: function() {
        return this.a
    },
    k: function(n) {
        if (this.a !== n) {
            this.a && this.a.rpcl(this.d.a, this.f);
            this.a = _j.S.isInstanceOfType(n) ? n : null;
            this.e = null;
            if (this.a) {
                this.a.apcl(this.d.a, this.f);
                this.e = this.h()
            }
            this.c && this.c.k()
        }
        return n
    },
    j: function() {
        return this.e
    },
    g: function(n) {
        this.m(n);
        return n
    },
    l: function() {
        this.m(this.d.d)
    },
    m: function(n) {
        this.i();
        this.a.eK(this.d, n)
    },
    h: function() {
        this.i();
        return this.a.eM(this.d)
    },
    n: function(n, t) {
        var i = this.h();
        if (this.e !== i) {
            this.e = i;
            this.c && this.c.k()
        }
    }
};
_j.g = function(n, t, i) {
    _j.g.initializeBase(this);
    _j.s.a(n, "executeCommand");
    this.g = t;
    this.f(n);
    this.c(!!i !== i || i)
};
_j.Y = function(n, t, i, r) {
    _j.Y.initializeBase(this);
    _j.s.f(t.length, n.length, "propertyGetters.Length");
    r === 2 ? _j.s.b(i, "propertySetter") : _j.s.f(i, null, "propertySetter");
    this.n = r;
    this.e = n;
    this.a = t;
    this.u = i
};
_j.Y.c = function(n, t) {
    return function(i, r) {
        n.f && (n.t ? _j.Y.b(n, t) : _j.Y.a(n, t))
    }
};
_j.Y.b = function(n, t) {
    _j.m.a().c(_j.A.c, "Bind" + n.e[n.e.length - 1], function() {
        _j.Y.a(n, t)
    })
};
_j.Y.a = function(n, t) {
    for (var i = n.b[t], e = n.b.length - 1, r = t; r < e; r++) {
        if (i) try {
            i = n.a[r](i)
        } catch (s) {
            i = null
        }
        n.w(r + 1, i)
    }
    var u = null;
    var f = !1;
    if (i) try {
        u = n.a[e](i);
        f = !0
    } catch (o) {}
    n.f = !0;
    if (n.c !== u || n.d !== f) {
        n.c = u;
        n.d = f;
        n.j && n.j.a()
    }
};
_j.Y.prototype = {
    r: null,
    q: null,
    e: null,
    a: null,
    b: null,
    g: null,
    u: null,
    c: null,
    d: !1,
    t: !1,
    f: !1,
    k: null,
    n: 0,
    l: function() {
        return this.c
    },
    p: function(n) {
        if (this.c !== n) {
            this.f || this.s();
            this.c = n;
            this.d && this.u(this.b[this.b.length - 1], n)
        }
        return n
    },
    h: function() {
        return this.d
    },
    i: function(n) {
        if (n === this.k) return n;
        this.k = n;
        this.f = !1;
        this.x();
        return n
    },
    o: function() {
        this.t = !0
    },
    w: function(n, t) {
        var i = this.b[n];
        if (i !== t) {
            i && "rpcl" in i && i.rpcl(this.e[n], this.g[n]);
            this.b[n] = t;
            i = t;
            i && "apcl" in i && i.apcl(this.e[n], this.g[n])
        }
    },
    x: function() {
        if (this.n) this.s();
        else {
            var n = this.v();
            this.n ? _j.m.a().d(_j.A.c, "Async Binding", this.q || (this.q = Function.createDelegate(this, this.s))) : n || _j.m.a().d(_j.A.c, "Async One-time Binding", this.r || (this.r = Function.createDelegate(this, this.y)))
        }
    },
    v: function() {
        var n = this.k;
        var t = !0;
        try {
            for (var r = this.a.length, i = 0; i < r && n; i++) n = this.a[i](n);
            t = i !== r
        } catch (u) {
            n = null;
            t = !0
        }
        if (this.c !== n || this.d !== !t) {
            this.c = n;
            this.d = !t;
            this.j && this.j.a()
        }
        return !t
    },
    y: function() {
        this.v()
    },
    s: function() {
        if (!this.f) {
            if (!this.g) {
                this.b = new Array(this.a.length);
                this.g = new Array(this.a.length);
                for (var n = 0; n < this.e.length; n++) this.g[n] = _j.Y.c(this, n)
            }
            this.w(0, this.k);
            _j.Y.a(this, 0)
        }
    }
};
_j.r = function(n, t) {
    this.c = n;
    this.d = t
};
_j.r.prototype = {
    c: null,
    d: null,
    a: function(n, t) {
        for (var i = 0; i < this.c.length; i++) n = this.c[i].a(n, this.d[i]);
        return n
    },
    b: function(n, t) {
        for (var i = this.c.length - 1; i >= 0; i--) n = this.c[i].b(n, this.d[i]);
        return n
    }
};
_j.P = function() {
    this.e = Function.createDelegate(this, this.a);
    _j.P.initializeBase(this)
};
_j.P.a = function() {};
_j.P.prototype = {
    b: !0,
    d: null,
    j: function(n) {
        this.apcl("CanExecute", n)
    },
    i: function(n) {
        this.rpcl("CanExecute", n)
    },
    c: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.by("CanExecute")
        }
        return n
    },
    f: function(n) {
        this.d = n;
        this.c(!!this.d);
        return n
    },
    g: null,
    a: function() {
        _j.s.f(this.b, !0, "Can't raise command when canExecute is false.");
        _j.s.a(this.d, "Can't raise command when no execute command is specified.");
        this.d()
    }
};
_j.bg = function(n, t, i, r, u, f) {
    _j.bg.initializeBase(this, [n, 1, r, u]);
    this.e = f;
    this.d = new _j.Y(t, i, null, 1);
    this.d.m(this);
    this.o = u
};
_j.bg.prototype = {
    d: null,
    o: null,
    m: !1,
    i: !1,
    e: 0,
    l: null,
    g: function(n) {
        this.l = n;
        this.q()
    },
    b: function(n) {
        this.d.i(n)
    },
    a: function() {
        if (this.d.h()) {
            var n = this.d.l();
            this.f && (n = this.f.a(n, this.o));
            if (Boolean.isInstanceOfType(n)) {
                this.i = n;
                this.m = !0
            } else {
                this.i = !1;
                this.m = !1
            }
        } else this.i = !1;
        this.q()
    },
    j: function() {
        this.d.o()
    },
    q: function() {
        if (this.l) {
            var n = this.c.split(":");
            var t = n.length;
            if (t === 2)
                if (this.i) {
                    this.k(n[1], !1);
                    this.k(n[0], !0)
                } else {
                    this.k(n[0], !1);
                    this.k(n[1], !0)
                }
            else this.k(this.c, this.i)
        }
    },
    k: function(n, t) {
        for (var u = n.split(" "), f = u.length, i = f - 1; i >= 0; i--) {
            var r = u[i];
            this.m && t ? this.l.bo(r) : this.l.bt(r)
        }
    }
};
_j.f = function(n, t, i, r, u, f, e) {
    _j.f.initializeBase(this, [t, r, u, f, e]);
    this.d = n;
    this.e = i;
    this.d.m(this);
    this.e.s(this)
};
_j.f.a = function(n, t, i, r, u, f, e, o, s, h) {
    return new _j.f(new _j.Y(n, t, i, e), r, new _j.bI(r, u, f, h), e, o, s)
};
_j.f.b = function(n, t, i, r, u, f, e, o, s, h, c) {
    return new _j.f(new _j.bH(n, t, i, r, o), u, new _j.bI(u, f, e, c), o, s, h)
};
_j.f.c = function(n, t, i, r, u, f, e) {
    return new _j.f(new _j.Y(n, t, i, u), r.l(), new _j.bL(r), u, f, e)
};
_j.f.e = function(n, t, i, r, u, f, e, o, s, h, c) {
    var l = u.split(".");
    return new _j.f(new _j.bH(n, t, i, r, o), l[0], new _j.bG(l[1], f, e, c), o, s, h, !0)
};
_j.f.d = function(n, t, i, r, u, f, e, o, s, h) {
    var c = r.split(".");
    return new _j.f(new _j.Y(n, t, i, e), c[0], new _j.bG(c[1], u, f, h), e, o, s, !0)
};
_j.f.prototype = {
    e: null,
    d: null,
    i: !1,
    g: function(n) {
        this.e.k(n);
        this.a()
    },
    b: function(n) {
        this.d.i(n)
    },
    a: function() {
        if ((this.h || !this.i) && this.e.r()) {
            if (!this.d.h()) {
                this.i && this.e.l();
                return
            }
            this.i = !0;
            var n = this.d.l();
            this.f && (n = this.f.a(n, this.n));
            this.e.g(n)
        }
    },
    k: function() {
        if (this.h === 2 && this.d.h()) {
            var n = this.e.j();
            this.f && (n = this.f.b(n, this.n));
            this.d.p(n)
        }
    },
    j: function() {
        this.d.o()
    }
};
_j.bX = function(n, t, i, r, u) {
    _j.bX.initializeBase(this);
    this.c = n;
    this.f = i;
    this.n = r;
    this.h = t;
    this.p = u
};
_j.bX.prototype = {
    c: null,
    f: null,
    n: null,
    h: 0,
    p: !1,
    D: function() {
        this.g(null);
        this.b(null)
    }
};
_j.bG = function(n, t, i, r) {
    _j.bG.initializeBase(this);
    this.d = n;
    this.a = t;
    this.h = i;
    this.f = r
};
_j.bG.prototype = {
    h: null,
    a: null,
    d: null,
    f: null,
    e: null,
    b: function() {
        return this.e
    },
    k: function(n) {
        this.e = n;
        return n
    },
    j: function() {
        return this.a(this.b())[this.d]
    },
    g: function(n) {
        if (this.a(this.b())[this.d] !== n) {
            this.a(this.b())[this.d] = n;
            this.h(this.b(), this.a(this.b()))
        }
        return n
    },
    l: function() {
        this.g(this.f)
    }
};
_j.w = function(n, t, i, r, u) {
    this.l = Function.createDelegate(this, this.n);
    _j.w.initializeBase(this);
    _j.s.a(n, "executeCommand");
    _j.s.a(i, "source");
    _j.s.a(r, "canExecuteProperty");
    _j.s.a(u, "propertyGetter");
    this.g = t;
    this.f(n);
    this.k = i;
    this.h = r;
    this.m = u;
    this.k.apcl(this.h, this.l);
    this.n(null, null);
    _j.w.a && _j.w.a(this)
};
_j.w.prototype = {
    k: null,
    h: null,
    m: null,
    bz: function() {
        this.k.rpcl(this.h, this.l);
        _j.S.prototype.bz.call(this);
        _j.w.b && _j.w.b(this)
    },
    n: function(n, t) {
        this.c(!!this.m())
    }
};
_j.ct = function() {};
_j.ct.prototype = {
    j: null,
    m: function(n) {
        this.j = n
    }
};
_j.bH = function(n, t, i, r, u) {
    _j.bH.initializeBase(this);
    this.b = n;
    if (t) {
        this.a = new _j.Y(t, i, r, u);
        this.a.i(this.b)
    }
};
_j.bH.prototype = {
    b: null,
    a: null,
    l: function() {
        return this.a ? this.a.l() : this.b
    },
    p: function(n) {
        this.a && this.a.p(n);
        return n
    },
    h: function() {
        return this.a ? this.a.h() : !0
    },
    i: function(n) {
        return n
    },
    m: function(n) {
        _j.ct.prototype.m.call(this, n);
        if (this.a) {
            this.a.m(n);
            this.a.i(this.b)
        }
    },
    o: function() {}
};
_j.cv = function() {};
_j.cv.prototype = {
    c: null,
    r: function() {
        return !!this.b()
    },
    s: function(n) {
        this.c = n
    },
    i: function() {
        if (!this.b()) throw Error.invalidOperation("Can't get property when target is not set");
    }
};
_j.bI = function(n, t, i, r) {
    _j.bI.initializeBase(this);
    _j.s.d(n, "propertyName");
    _j.s.a(i, "propertySetter");
    this.h = n;
    this.a = null;
    this.n = i;
    this.f = t;
    this.m = r === undefined ? null : r
};
_j.bI.prototype = {
    e: null,
    n: null,
    f: null,
    h: null,
    d: null,
    m: null,
    a: null,
    b: function() {
        return this.a
    },
    k: function(n) {
        if (this.a !== n) {
            this.a && this.f && this.a.rpcl(this.h, this.e || (this.e = Function.createDelegate(this, this.p)));
            this.a = n;
            this.d = null;
            if (this.a && this.f) {
                this.a.apcl(this.h, this.e || (this.e = Function.createDelegate(this, this.p)));
                this.d = this.o()
            }
        }
        return n
    },
    j: function() {
        return this.d
    },
    g: function(n) {
        this.q(n);
        return n
    },
    l: function() {
        this.q(this.m)
    },
    q: function(n) {
        this.i();
        this.a.bT || this.n(this.a, n)
    },
    o: function() {
        this.i();
        return this.f(this.a)
    },
    p: function(n, t) {
        var i = this.o();
        if (this.d !== i) {
            this.d = i;
            this.c && this.c.k()
        }
    }
};
_j.N = function(n) {
    this.f = 0;
    this.g = 0;
    this.f = _j.N.h(n);
    this.g = _j.N.i(this.f, n);
    this.i = _j.N.f(this.f, n);
    this.j = _j.N.g(n);
    this.h = n.indexOf("WebKit") !== -1
};
_j.N.e = function(n) {
    return n.indexOf("MSIE") > 0 || _j.N.c(n)
};
_j.N.c = function(n) {
    return n.indexOf("rv:") > 0 && n.indexOf("Trident") > 0
};
_j.N.b = function(n) {
    var i = parseFloat(n.substr(n.indexOf("MSIE") + 5));
    if (n.indexOf("Trident") > 0) {
        var t = 0;
        t = parseFloat(n.substr(n.indexOf("Trident") + 8));
        if (t === 4 && i < 8 || t === 5 && i < 9 || t === 6 && i < 10 || t === 7 && i < 11) return !0
    }
    return !1
};
_j.N.h = function(n) {
    return _j.N.e(n) ? 1 : n.indexOf("Edge") > 0 ? 6 : n.indexOf("Chrome") > 0 ? 2 : n.indexOf("Firefox") > 0 ? 4 : n.indexOf("Safari") > 0 ? 3 : n.indexOf("iPhone") > 0 || n.indexOf("iPad") > 0 ? 5 : 0
};
_j.N.i = function(n, t) {
    var i = 0;
    switch (n) {
        case 1:
            i = _j.N.j(t);
            break;
        case 6:
            i = parseFloat(t.substr(t.indexOf("Edge") + 5));
            break;
        case 2:
            i = parseFloat(t.substr(t.indexOf("Chrome") + 7));
            break;
        case 3:
            i = parseFloat(t.substr(t.indexOf("Version") + 8));
            break;
        case 4:
            i = parseFloat(t.substr(t.indexOf("Firefox") + 8));
            break;
        case 5:
            i = _j.N.a(t, "OS");
            break
    }
    return i
};
_j.N.a = function(n, t) {
    var i = n.indexOf(t) + t.length + 1;
    var u = n.indexOf(" ", i);
    var r = n.substr(i, u - i);
    return parseFloat(r.replace("_", "."))
};
_j.N.d = function(n) {
    var t = 0;
    n.indexOf("Trident/7.0") !== -1 ? t = 11 : n.indexOf("Trident/6.0") !== -1 ? t = 10 : n.indexOf("Trident/5.0") !== -1 ? t = 9 : n.indexOf("Trident/4.0") !== -1 && (t = 8);
    return t
};
_j.N.j = function(n) {
    var t = 0;
    t = _j.N.c(n) ? parseFloat(n.substr(n.indexOf("rv:") + 3)) : _j.N.b(n) ? _j.N.d(n) : parseFloat(n.substr(n.indexOf("MSIE") + 5));
    return t
};
_j.N.f = function(n, t) {
    var i;
    switch (n) {
        case 0:
            i = "Unknown";
            break;
        case 6:
            i = "Edge";
            break;
        case 1:
            i = _j.N.b(t) ? "Internet Explorer-Comp" : "Internet Explorer";
            break;
        case 2:
            i = "Chrome";
            break;
        case 3:
            i = "Safari";
            break;
        case 4:
            i = "Firefox";
            break;
        case 5:
            i = "MOWA on iOS";
            break;
        default:
            i = "Unknown";
            break
    }
    return i
};
_j.N.g = function(n) {
    var f = n.indexOf("Windows NT");
    if (f > 0) return new _j.W("windows", n.indexOf("ARM") > 0 ? "windowsRT" : "PC", parseFloat(n.substr(f + 10)));
    if (n.indexOf("iPad") > 0) return new _j.W("IOS", "iPad", _j.N.a(n, "OS"));
    if (n.indexOf("iPhone") > 0) return new _j.W("IOS", "iPhone", _j.N.a(n, "OS"));
    var h = n.indexOf("OS X");
    if (h > 0) return new _j.W("OSX", "macintosh", _j.N.a(n, "OS X"));
    var e = n.indexOf("Android");
    if (e > 0) return new _j.W("android", "android", parseFloat(n.substr(e + 7)));
    var t = n.indexOf("Windows Phone");
    if (t > 0) {
        var r = 14;
        n.length >= t + 16 && n.substring(t + 14, t + 16) === "OS" && (r = 16);
        return new _j.W("windowsPhone", "windowsPhone", parseFloat(n.substr(t + r)))
    }
    var i = n.indexOf("GoogleTV");
    if (i > 0) return new _j.W("googleTV", "googleTV", parseFloat(n.substr(i + 9)));
    var u = n.indexOf("BB10");
    if (u > 0) return new _j.W("blackBerry", "blackBerry", parseFloat(n.substr(u + 2)));
    var c = n.indexOf("CrOS");
    if (c > 0) return new _j.W("chromeOS", n.indexOf("arm") > 0 ? "chromeBookArm" : "chromeBook", -1);
    var o = n.indexOf("Ubuntu");
    if (o > 0) return new _j.W("ubuntu", n.indexOf("arm") > 0 ? "ubuntuArm" : "PC", -1);
    var s = n.indexOf("Linux");
    return s > 0 ? new _j.W("linux", n.indexOf("arm") > 0 ? "linuxArm" : "PC", -1) : new _j.W("unknown", "unknown", 0)
};
_j.N.prototype = {
    i: null,
    g: 0,
    f: 0,
    h: !1,
    j: null,
    a: function() {
        return this.f
    },
    d: function() {
        return this.i
    },
    b: function() {
        return this.g
    },
    e: function() {
        return this.h
    },
    c: function() {
        return this.j
    }
};
_j.b = function() {
    this.i = new _j.bM;
    this.h = [];
    this.l()
};
_j.b.prototype = {
    j: !1,
    e: function(n) {
        var t = this;
        return new(_j.bE.$$(n))(this.i, function() {
            return new n
        })
    },
    b: function(n, t) {
        return new(_j.bE.$$(n))(this.i, t)
    },
    a: function(n) {
        var t = this.i.b(n);
        if (!t) throw Error.argument("T", "Type '" + n.getName() + "' is not registered in the IoC container.  " + "Make sure you have registered the type in the application bootstrapper.");
        return this.k(t)
    },
    g: function(n) {
        var t = this.i.b(n);
        return t ? this.k(t) : null
    },
    k: function(n) {
        var r = this.j;
        r && (this.j = !1);
        var i;
        try {
            var u = !n.d && !!n.f;
            i = n.k();
            u && Array.add(this.h, new _j.b.a(i, n.f));
            if (r)
                for (var t = 0; t < this.h.length; t++) this.h[t].c()
        } finally {
            r && this.l()
        }
        return i
    },
    l: function() {
        this.j = !0;
        Array.clear(this.h)
    }
};
_j.b.a = function(n, t) {
    this.b = n;
    this.a = t
};
_j.b.a.prototype = {
    b: null,
    a: null,
    c: function() {
        this.a(this.b)
    }
};
_j.bE = function(n, t) {
    this.d = this.$$gta["_j.bE"].TService === Number || Type.isEnum(this.$$gta["_j.bE"].TService) ? 0 : this.$$gta["_j.bE"].TService === Boolean ? !1 : null;
    _j.s.a(n, "registrationCache");
    _j.s.a(t, "factory");
    this.g = n;
    this.h = t;
    this.g.c(this.$$gta["_j.bE"].TService, this)
};
_j.bE.$$ = function(n) {
    var u = _j.__tc = _j.__tc || {};
    var t = "bE" + "$" + n.getName().replace(/\./g, "_");
    if (!u[t]) {
        var r = u[t] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _j.bE.apply(this, t)
        };
        r.registerClass("_j.__tc." + t);
        var o = {
            "_j.bE": {
                TService: n
            },
            ctor: _j.bE
        };
        r.prototype.$$gta = o;
        var e = _j.bE.prototype;
        for (var f in e) {
            var i = {
                key: f,
                value: e[f]
            };
            "constructor" !== i.key && (r.prototype[i.key] = i.value)
        }
    }
    return u[t]
};
_j.bE.prototype = {
    g: null,
    i: !1,
    h: null,
    e: !1,
    f: null,
    b: function(n) {
        var i = n;
        var t = this.$$gta["_j.bE"].TService;
        var e = i.getName();
        var o = t.getName();
        var f = e === o;
        var r = t.implementsInterface(i);
        var u = t.inheritsFrom(i);
        if (!f && !r && !u) throw Error.argument("T", "Type '" + t.getName() + "' does not implement interface or derive from type '" + i.getName() + "'");
        this.g.c(n, this);
        return this
    },
    a: function() {
        this.i = !0;
        return this
    },
    c: function(n) {
        this.f = n;
        return this
    },
    k: function() {
        if (this.i) {
            this.d || (this.d = this.j());
            return this.d
        }
        return this.j()
    },
    j: function() {
        if (this.e) throw Error.invalidOperation("Type '" + this.$$gta["_j.bE"].TService.getName() + "' contains a circular reference in the IoC container.  You will need to use OnCreate and " + "property injection if this dependency is correct.");
        var n = this.$$gta["_j.bE"].TService === Number || Type.isEnum(this.$$gta["_j.bE"].TService) ? 0 : this.$$gta["_j.bE"].TService === Boolean ? !1 : null;
        try {
            this.e = !0;
            n = this.h()
        } finally {
            this.e = !1
        }
        return n
    }
};
_j.bM = function() {
    this.a = {}
};
_j.bM.prototype = {
    c: function(n, t) {
        this.a[n.getName()] = t
    },
    b: function(n) {
        return this.a[n.getName()]
    }
};
_j.c = function(n) {
    _j.c.initializeBase(this, [n])
};
_j.c.a = function(n, t) {
    if (t.bw === t.bw && !t.bM && !t.bT) {
        t.kD = n;
        t.ne(n.c())
    }
};
_j.c.prototype = {
    bw: null,
    B: null,
    kD: null,
    y: function(n) {
        if (n !== this.bw) {
            this.bw = n;
            this.nd(n);
            this.by("TemplateId")
        }
        return n
    },
    ne: function(n) {
        if (this.B !== n) {
            if (!this.nf(!1) && this.B) {
                this.B.dispose();
                while (this.z.hasChildNodes()) this.z.removeChild(this.z.firstChild)
            }
            this.pT(n);
            this.ce("OnTemplateInstanceApplied")
        }
        return n
    },
    I: function() {
        return _j.A.e
    },
    st: function(n) {
        this.bB("OnTemplateInstanceApplied", n)
    },
    pS: function(n) {
        this.bF("OnTemplateInstanceApplied", n)
    },
    R: function() {
        var n = !1;
        !this.bp() && this.B && (n = this.B.e());
        return n || _j.i.prototype.R.call(this)
    },
    getChildByIndex: function(n) {
        return this.B ? this.B.b(n) : null
    },
    bE: function() {
        this.B && (this.nf(!0) || this.B.dispose());
        _j.S.prototype.bE.call(this)
    },
    H: function() {},
    P: function() {
        _j.i.prototype.P.call(this);
        var n = this.bw;
        n && this.nd(this.bw)
    },
    kX: function() {
        _j.i.prototype.kX.call(this);
        this.B && this.B.f()
    },
    G: function() {
        this.B ? this.B.d() : this.kD && this.ne(this.kD.c())
    },
    M: function() {
        _j.i.prototype.M.call(this);
        this.B && (this.nf(!0) || this.B.i())
    },
    bz: function() {
        this.B = null;
        _j.i.prototype.bz.call(this)
    },
    nd: function(n) {
        this.eN && (n ? _j.F.l(n, _j.c.a, this) : this.ne(null))
    },
    pT: function(n) {
        this.B = n;
        this.H();
        if (this.B) {
            this.B.g(this);
            this.Z() && this.B.d();
            this.kZ && this.B.f()
        }
    },
    nf: function(n) {
        if (this.B && this.B.h()) {
            this.B = null;
            n && this.pT(null);
            return !0
        }
        return !1
    }
};

function _dh() {}
_dh.f = function(n) {
    _dh.d ? _dh.d.c(n) : Array.add(_dh.c, n)
};
_dh.h = function(n) {
    _dh.d = n;
    for (var t = 0; t < _dh.c.length; ++t) _dh.f(_dh.c[t]);
    Array.clear(_dh.c)
};
_dh.a = function(n, t) {
    n && n.a(function(n) {
        n.c(t)
    })
};
_dh.i = function(n, t) {
    return _dh.g(n, _dh.b, t, !1)
};
_dh.s = function(n, t) {
    return _dh.g(n, _dh.b, t, !0)
};
_dh.g = function(n, t, i, r) {
    var u = null;
    var e = null;
    var f = !1;
    e = function() {
        var h = null;
        var e = this;
        var c = arguments;
        if (!u) {
            var l = n();
            l.s || (u = l)
        }
        if (!f) {
            var s = Object.getType(e).__d;
            var a = r || !s || s === 3;
            f = !!u && a
        }
        if (f) h = u.apply(e, c);
        else if (i) {
            var o = null;
            o = function() {
                var i = n();
                if (!i.s) {
                    i.apply(e, c);
                    Array.remove(t, o)
                }
            };
            Array.add(t, o)
        }
        return h
    };
    e.s = !0;
    return e
};
_dh.e = function(n, t) {
    var i = t.d(_j.t);
    n.c(function(n) {
        _dh.a(i, n)
    });
    return n
};

function _dtl(n, t, i) {
    this.f = n;
    this.g = t;
    this.e = i;
    this.d = new _j.q
}
_dtl.f = function(n, t) {
    _dtl.a || (_dtl.a = new _dtl(n, _dh.b, t));
    return _dtl.a
};
_dtl.ct = function(n) {
    for (var t = 0; t < n.length; ++t) _dtl.d(n[t]);
    _dtl.l(_j.m.a(), _dh.b)
};
_dtl.b = function(n) {
    return _dtl.g(n, "init")
};
_dtl.o = function(n) {
    var t = n.replace(new RegExp("\\.\\d\\."), ".");
    return _dtl.g(t, "defer")
};
_dtl.p = function(n) {
    var t = !1;
    var i = Object.getType(n).__d;
    3 === i && (t = !0);
    return t
};
_dtl.t = function(n) {
    var t = !1;
    if (_dtl.j(n)) {
        _dtl.d(n);
        t = !0
    }
    return t
};
_dtl.j = function(n) {
    var t = !1;
    if (n) {
        t = _dtl.k(n);
        t && (t = _dtl.j(n.getBaseType()))
    } else t = !0;
    return t
};
_dtl.k = function(n) {
    var t = !1;
    t = _dtl.c(n) ? _dtl.q(n) : _dtl.r(n);
    return t
};
_dtl.c = function(n) {
    var t = !1;
    var i = n.prototype.$$gta;
    i && (t = !0);
    return t
};
_dtl.r = function(n) {
    var t = !1;
    var i = n.__d;
    t = i ? i === 2 ? !0 : !1 : !0;
    return t
};
_dtl.e = function(n) {
    return n.prototype.$$gta.ctor
};
_dtl.q = function(n) {
    var t = !1;
    var i = _dtl.e(n);
    t = _dtl.k(i);
    return t
};
_dtl.h = function(n, t) {
    if (n) {
        var f = n.__d;
        if (f !== undefined || _dtl.c(n)) {
            f !== 3 && _dtl.h(n.getBaseType(), t);
            var d = _dtl.n(n);
            var e = n.prototype;
            var v = d;
            for (var y in v) {
                var w = {
                    key: y,
                    value: v[y]
                };
                var i = w.key;
                var r = w.value;
                if (r && typeof r == "function") {
                    var p = r;
                    if (f !== 3) {
                        var u = e[i];
                        var a = t[i];
                        var b = a ? a[0] : undefined;
                        !u || u === b || u.s ? e[i] = r : p = u
                    }
                    t[i] = [p]
                }
            }
            if (f !== 3) {
                var o = t;
                for (var h in o) {
                    var c = {
                        key: h,
                        value: o[h]
                    };
                    var l = c.key;
                    var k = c.value;
                    var s = e[l];
                    (!s || s.s) && (e[l] = k[0])
                }
                n.__d = 3
            }
        }
    }
};
_dtl.i = function(n, t) {
    var r = !1;
    var i = _dtl.m(n.l(), t);
    i && i.isDeferrable && (r = !0);
    return r
};
_dtl.m = function(n, t) {
    var u = null;
    if (n)
        for (var i = 0; i < n.length; ++i) {
            var r = n[i];
            if (r.name === t) {
                u = r;
                break
            }
        }
    return u
};
_dtl.n = function(n) {
    var t = n.prototype;
    if (_dtl.c(n)) {
        var i = _dtl.e(n);
        t = i.prototype
    }
    return t
};
_dtl.g = function(n, t) {
    return n.substr(0, n.length - 2) + t + ".js"
};
_dtl.l = function(n, t) {
    for (var i = [], u = 0; u < t.length; ++u) Array.add(i, t[u]);
    for (var f = function(r) {
            n.c(_j.A.d, "dtl.nqs", function() {
                Array.contains(t, i[r]) && i[r]()
            })
        }, r = 0; r < i.length; ++r) f(r)
};
_dtl.d = function(n) {
    n.__d !== 3 && (Object.protoInheritEnabled ? delete n.__d : _dtl.h(n, {}))
};
_dtl.prototype = {
    f: null,
    g: null,
    e: !1,
    d: null,
    i: function() {
        if (this.d.d.length > 0) {
            var t = this.d;
            this.d = new _j.q;
            for (var n = 0; n < t.d.length; ++n) this.h(t.d[n].a, t.d[n].b)
        }
        _dtl.l(this.f, this.g)
    },
    c: function(n) {
        this.e && this.h(n, null)
    },
    b: function(n, t, i) {
        if (this.e) {
            var r = new _j.q;
            var o = null;
            if (n.a() === _j.be.a) {
                var c = !1;
                if (n.e() && n.e().length > 0)
                    for (var e = 0; e < n.e().length; ++e)
                        if (t.b(_dtl.b(n.e()[e]))) {
                            c = !0;
                            break
                        }
                o = c ? n.e() : n.b()
            } else o = n.b();
            for (var a = null, l = o, y = l.length, f = 0; f < y; ++f) {
                var u = l[f];
                if (_dtl.i(n, u)) {
                    var s = _dtl.b(u);
                    var h = _dtl.o(u);
                    if (t.b(s) && !t.b(h)) {
                        a = s;
                        r.c(h)
                    }
                }
            }
            if (r.d.length > 0) {
                var v = this;
                t.h(r.i(), !1, function() {
                    i(r.d);
                    v.i()
                }, t.f(a))
            } else i(new Array(0))
        } else i(new Array(0))
    },
    a: function(n, t) {
        var u = n.b();
        if (this.e) {
            for (var f = new Array(n.b().length), i = 0; i < u.length; ++i) {
                var r = u[i];
                if (_dtl.i(n, r)) {
                    r = _dtl.b(r);
                    t.val = !0
                }
                f[i] = r
            }
            u = f
        }
        return u
    },
    h: function(n, t) {
        if (_dtl.p(n)) {
            if (t) {
                var r = this;
                this.f.c(_j.A.d, "Defer.Complete", function() {
                    t(n)
                })
            }
        } else if (_dtl.t(Object.getType(n))) {
            if (t) {
                var u = this;
                this.f.c(_j.A.d, "Defer.TryComplete", function() {
                    t(n)
                })
            }
        } else {
            var i;
            this.d.c((i = new _dtl.s, i.a = n, i.b = t, i))
        }
    }
};
_dtl.s = function() {};
_dtl.s.prototype = {
    a: null,
    b: null
};
_j.B = function() {};
_j.B.d = function(n) {
    for (var t = n.length - 1; t >= 0; t--) _j.k.f(n[t])
};
_j.B.f = function(n, t, i, r) {
    for (var u = 0, f = n.length; u < f; u++) _j.k.b(n[u], t, i, r)
};
_j.B.c = function(n, t, i) {
    for (var r = 0, u = n.length; r < u; r++) _j.k.c(n[r], t, i)
};
_j.B.a = function(n, t) {
    for (var i = 0, r = n.length; i < r; i++) t(i, n[i])
};
_j.B.e = function(n, t) {
    for (var u = [], i = 0, f = n.length; i < f; i++) {
        var r = n[i];
        _j.k.C(r, t) && Array.add(u, r)
    }
    return u
};
_j.B.b = function(n, t, i) {
    for (var r = 0, u = n.length; r < u; r++) _j.k.a(n[r], t, i)
};
_j.B.g = function(n, t) {
    for (var i = n.length - 1; i >= 0; i--) _j.k.s(n[i].cloneNode(!0), t)
};
_j.k = function() {};
_j.k.b = function(n, t, i, r, u, f) {
    if (n)
        for (var c = t.split(" "), l = c.length, s = 0; s < l; s++) {
            var e = c[s];
            var o = _j.k.P(e, r);
            var h = function(n) {
                var t = new _j.bo(n);
                (e !== "mouseover" && e !== "mouseout" && e !== "mouseleave" || _j.k.S(t)) && (_j.k.J ? _j.k.J(i, t, n) : i(t))
            };
            _j.k.R(n, e, h, u);
            f || (f = _j.k.I(n));
            o in f || (f[o] = []);
            Array.add(f[o], h)
        }
};
_j.k.c = function(n, t, i, r) {
    if (n) {
        var f = t.split(" ");
        var l = f.length;
        r || (r = _j.k.I(n));
        for (var u = 0; u < l; u++)
            if (i) {
                var h = _j.k.P(f[u], i);
                var c = r[h];
                c && Array.forEach(c, function(t) {
                    _j.k.N(n, f[u], t)
                });
                delete r[h]
            } else {
                var o = r;
                for (var s in o) {
                    var e = {
                        key: s,
                        value: o[s]
                    };
                    if (e.key.startsWith(f[u]) && e.value) {
                        Array.forEach(e.value, function(t) {
                            _j.k.N(n, f[u], t)
                        });
                        delete r[e.key]
                    }
                }
            }
    }
};
_j.k.D = function(n, t) {
    var i = document.createEvent("Event");
    i.initEvent(t, !0, !0);
    n.dispatchEvent(i)
};
_j.k.C = function(n, t) {
    var i = !1;
    n.matches ? i = n.matches(t) : n.matchesSelector ? i = n.matchesSelector(t) : n.msMatchesSelector ? i = n.msMatchesSelector(t) : n.webkitMatchesSelector && (i = n.webkitMatchesSelector(t));
    return i
};
_j.k.p = function(n, t) {
    if (_j.h.a(n.className)) return !1;
    for (var i = !1, f = t.split(" "), r = 0; r < f.length; r++) {
        var u = f[r];
        if (n.classList) i = n.classList.contains(u);
        else {
            var e = n.className.split(" ");
            i = Array.contains(e, u)
        }
        if (!i) break
    }
    return i
};
_j.k.d = function(n, t) {
    if (n && t)
        for (var u = t.split(" "), r = 0; r < u.length; r++) {
            var i = u[r];
            if (_j.h.a(i)) continue;
            else if (n.classList) n.classList.add(i);
            else if (_j.h.a(n.className)) n.className = i;
            else {
                var f = n.className.split(" ");
                Array.contains(f, i) || (n.className += " " + i)
            }
        }
};
_j.k.e = function(n, t) {
    if (n && t !== null && t !== "")
        for (var f = t.split(" "), i = 0; i < f.length; i++) {
            var r = f[i];
            if (_j.h.a(r)) continue;
            else n.classList && n.classList.remove(r);
            if (!_j.h.a(n.className)) {
                var u = n.className.split(" ");
                Array.remove(u, r) && (n.className = u.join(" "))
            }
        }
};
_j.k.f = function(n) {
    if (n) {
        var e = _j.k.I(n);
        var f = e;
        for (var r in f) {
            var u = {
                key: r,
                value: f[r]
            };
            var i = u.value;
            if (i)
                for (var t = 0; t < i.length; t++) _j.k.N(n, u.key, i[t])
        }
        n.parentElement && n.parentElement.removeChild(n)
    }
};
_j.k.w = function(n) {
    n && (n.innerHTML = "")
};
_j.k.s = function(n, t) {
    if (n) {
        var i = t.parentElement;
        i.insertBefore(n, t.nextSibling)
    }
};
_j.k.F = function(n, t) {
    if (n) {
        var i = t.parentElement;
        i.insertBefore(n, t)
    }
};
_j.k.z = function(n, t) {
    if (n) {
        var i = n.firstChild;
        i ? n.insertBefore(t, i) : n.appendChild(t)
    }
};
_j.k.n = function(n, t) {
    var i = _j.k.M(n);
    return i[t]
};
_j.k.m = function(n, t, i) {
    if (n) {
        var r = _j.k.M(n);
        r[t] = i
    }
};
_j.k.x = function(n) {
    return _j.k.M(n)
};
_j.k.O = function(n, t) {
    for (var u = _j.k.I(n), e = Object.keys(u), f = e, o = f.length, i = 0; i < o; ++i) {
        var r = f[i];
        if (!r.indexOf(t) && u[r] && u[r].length > 0) return !0
    }
    return !1
};
_j.k.E = function(n, t) {
    for (var u = n.children, f = [], i = 0; i < u.length; i++) {
        var r = u[i];
        _j.k.C(r, t) && Array.add(f, r)
    }
    return f
};
_j.k.L = function(n, t) {
    var u = n.parentNode;
    var e = [];
    if (!u || u.nodeType === 9) return null;
    var i = u.children;
    _j.h.a(t) || (i = _j.B.e(i, t));
    for (var r = 0, o = i.length; r < o; r++) {
        var f = i[r];
        f !== n && f.nodeType === 1 && Array.add(e, f)
    }
    return e
};
_j.k.j = function(n) {
    var r = 0;
    var i = 0;
    var t = n;
    if (t.offsetParent) {
        do
            if (!t.offsetParent || t.offsetParent.style.display !== "inline" || t.style.display !== "inline") {
                r += t.offsetLeft;
                i += t.offsetTop;
                if (t.style.position === "fixed") {
                    r += document.body.scrollLeft;
                    i += document.body.scrollTop
                }
            }
        while (t = t.offsetParent)
    } else if (t.style.position === "fixed" && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop)) {
        r = t.offsetLeft;
        i = t.offsetTop;
        r += document.body.scrollLeft;
        i += document.body.scrollTop
    }
    t = n;
    while ((t = t.parentNode) && t.tagName !== "BODY" && t.tagName !== "HTML" && !isNaN(t.scrollLeft) && !isNaN(t.scrollTop)) {
        r -= t.scrollLeft;
        i -= t.scrollTop;
        if (t.style.position === "fixed") break
    }
    return new _j.bp(r, i)
};
_j.k.r = function(n) {
    return new _j.bp(n.offsetLeft, n.offsetTop)
};
_j.k.B = function(n) {
    return n.offsetParent ? n.offsetParent : n
};
_j.k.o = function(n, t) {
    for (var r = [], i = n.parentNode; i && i.nodeType !== 9;) {
        i.nodeType === 1 && Array.add(r, i);
        i = i.parentNode
    }
    return _j.h.a(t) ? r : _j.B.e(r, t)
};
_j.k.K = function(n) {
    for (var i = [], t = n.nextSibling; t;) {
        t.nodeType === 1 && Array.add(i, t);
        t = t.nextSibling
    }
    return i
};
_j.k.i = function(n, t) {
    if (n.nodeType !== 1) return null;
    if (n.style[t]) return n.style[t];
    else if (window.self.getComputedStyle) {
        var i = window.self.getComputedStyle(n);
        return i ? i[t] : null
    }
    return n.currentStyle ? n.currentStyle[t] : null
};
_j.k.a = function(n, t, i) {
    n && (n.style[t] = i)
};
_j.k.k = function(n, t) {
    var i = n.offsetWidth;
    if (t) {
        var r = _j.k.H(n);
        _j.h.a(r.marginLeft) || (i = i + _j.k.u(r.marginLeft));
        _j.h.a(r.marginRight) || (i = i + _j.k.u(r.marginRight))
    }
    return i
};
_j.k.l = function(n, t) {
    var i = n.offsetHeight;
    if (t) {
        var r = _j.k.H(n);
        _j.h.a(r.marginTop) || (i = i + _j.k.u(r.marginTop));
        _j.h.a(r.marginBottom) || (i = i + _j.k.u(r.marginBottom))
    }
    return i
};
_j.k.h = function(n) {
    var i = _j.k.H(n);
    var t = n.clientWidth;
    _j.h.a(i.paddingLeft) || (t = t - _j.k.u(i.paddingLeft));
    _j.h.a(i.paddingRight) || (t = t - _j.k.u(i.paddingRight));
    return t
};
_j.k.g = function(n) {
    var i = _j.k.H(n);
    var t = n.clientHeight;
    _j.h.a(i.paddingTop) || (t = t - _j.k.u(i.paddingTop));
    _j.h.a(i.paddingBottom) || (t = t - _j.k.u(i.paddingBottom));
    return t
};
_j.k.t = function(n) {
    return $a(n.textContent) ? n.innerText : n.textContent
};
_j.k.q = function(n) {
    return _j.k.i(n, "visibility") !== "hidden" && _j.k.i(n, "display") !== "none"
};
_j.k.G = function(n, t, i) {
    if (n) {
        var u = Date.now();
        var e = u + i;
        var f = n.scrollTop;
        var r = null;
        r = function() {
            var o = Date.now();
            if (o >= e) n.scrollTop = t;
            else {
                var s = (o - u) / i;
                n.scrollTop = f + s * (t - f);
                window.requestAnimationFrame(r)
            }
        };
        window.requestAnimationFrame(r)
    }
};
_j.k.y = function(n) {
    var t = n.style.display;
    if (t !== "none") {
        _j.h.a(t) || _j.k.m(n, "previousDisplay", t);
        n.style.display = "none"
    }
};
_j.k.A = function(n) {
    if (n.style.display === "none") {
        n.style.display = _j.k.n(n, "previousDisplay") || "";
        _j.k.m(n, "previousDisplay", null)
    }
};
_j.k.T = function(n, t) {
    if (n) {
        var i = _j.k.v(t)[0];
        n.parentNode.insertBefore(i, n);
        n.parentNode.removeChild(n);
        i.appendChild(n)
    }
};
_j.k.Q = function(n, t) {
    if (n || n.length) {
        var u = _j.k.v(t)[0];
        n[0].parentNode.insertBefore(u, n[0]);
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            r.parentNode.removeChild(r);
            u.appendChild(r)
        }
    }
};
_j.k.v = function(n) {
    var t = document.createElement("div");
    t.innerHTML = n;
    return t.children
};
_j.k.H = function(n) {
    try {
        var i = n.currentStyle;
        if (!i) {
            var t = document.defaultView;
            t && t.getComputedStyle && (i = t.getComputedStyle(n, null))
        }
        return i
    } catch (r) {
        return null
    }
};
_j.k.R = function(n, t, i, r) {
    n.addEventListener ? n.addEventListener(t, i, r) : n.attachEvent("on" + t, i)
};
_j.k.N = function(n, t, i) {
    n.removeEventListener ? n.removeEventListener(t, i) : n.detachEvent && n.detachEvent("on" + t, i)
};
_j.k.I = function(n) {
    var t = n._evts;
    if (!t) {
        t = {};
        n._evts = t
    }
    return t
};
_j.k.M = function(n) {
    var t = n._data;
    if (!t) {
        t = {};
        n._data = t
    }
    return t
};
_j.k.P = function(n, t) {
    return t ? t.startsWith(".") ? n + t : n + "." + t : n
};
_j.k.u = function(n) {
    var i = n.substr(0, n.length - 2);
    var t = parseInt(i, 10);
    isNaN(t) && (t = 0);
    return t
};
_j.k.S = function(n) {
    var t = n.o();
    var i = n.b();
    return !t || t !== i && !i.contains(t)
};
_j.bl = function() {};
_j.bh = function() {};
_j.O = function(n) {
    this.a = n
};
_j.O.prototype = {
    a: !1
};
_j.bc = function() {};
_j.X = function() {};
_j.bx = function() {};
_j.bt = function() {};
_j.bu = function(n, t, i, r, u) {
    this.c = n;
    this.d = t;
    this.b = i;
    this.e = r;
    this.a = u
};
_j.bu.prototype = {
    c: null,
    d: null,
    b: 0,
    e: 0,
    a: 0
};
_j.ba = function(n) {
    this.a = n
};
_j.ba.prototype = {
    a: null
};
_j.bF = function(n, t) {
    this.b = n;
    this.c = t
};
_j.bF.$$ = function(n) {
    var u = _j.__tc = _j.__tc || {};
    var t = "bF" + "$" + n.getName().replace(/\./g, "_");
    if (!u[t]) {
        var r = u[t] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _j.bF.apply(this, t)
        };
        r.registerClass("_j.__tc." + t);
        var o = {
            "_j.bF": {
                T: n
            },
            ctor: _j.bF
        };
        r.prototype.$$gta = o;
        var e = _j.bF.prototype;
        for (var f in e) {
            var i = {
                key: f,
                value: e[f]
            };
            "constructor" !== i.key && (r.prototype[i.key] = i.value)
        }
    }
    return u[t]
};
_j.bF.prototype = {
    b: null,
    c: null,
    a: function(n) {
        return this.b(n || document.createElement(this.c))
    }
};
_j.y = function(n, t, i) {
    this.c = n;
    this.b = t;
    this.a = i
};
_j.y.prototype = {
    c: null,
    b: 0,
    a: 0,
    d: function(n) {
        switch (n) {
            case "Standard":
            case "StandardDeepLinkCompose":
                return (this.a & 1) == 1;
            case "AnonymousCalendar":
                return (this.a & 4) == 4;
            case "OOBE":
                return (this.a & 2) == 2;
            case "PAL":
                return (this.a & 8) == 8;
            case "GenericMail":
                return (this.a & 16) == 16;
            case "SharedHoverCard":
                return (this.a & 32) == 32;
            case "LeanDeepLinkCompose":
                return (this.a & 64) == 64;
            default:
                throw Error.argumentOutOfRange("bootType", n, "boot type is unknown");
        }
    }
};
_j.bK = function() {
    _j.bK.initializeBase(this)
};
_j.bK.prototype = {
    d: function(n) {
        var t = this;
        return new(_j.bD.$$(n))(function() {
            return t.a(n)
        }, this.a(_j.I), this.a(_j.o))
    },
    f: function(n) {
        var t = this;
        return new _j.J(function() {
            return t.a(n)
        })
    },
    c: function(n) {
        var t = this;
        return new(_j.bC.$$(n))(function() {
            return t.a(n)
        }, this.a(_j.I))
    }
};
_j.bd = function(n) {
    this.x = Function.createDelegate(this, this.k);
    _j.bd.initializeBase(this, [n]);
    this.a = new _j.l;
    this.a.d(this.x)
};
_j.bd.prototype = {
    a: null,
    k: function(n, t) {
        if (!t.c || t.c === 3)
            for (var i = 0; i < t.a.length; i++)
                if (!_j.i.isInstanceOfType(t.a[i]) || !t.a[i]) throw Error.invalidOperation("Can't add any other element to Panel.Children");
    },
    G: function() {
        _j.i.prototype.G.call(this);
        for (var n = 0, t = this.a.b(); n < t; n++) this.a.c(n).bm()
    },
    M: function() {
        _j.i.prototype.M.call(this);
        for (var n = 0, t = this.a.b(); n < t; n++) this.a.c(n).bx()
    },
    bE: function() {
        for (var n = this.a.b() - 1; n >= 0; n--) this.a.c(n).dispose();
        _j.S.prototype.bE.call(this)
    },
    bz: function() {
        this.a.e(this.x);
        for (var n = 0, i = this.a.b(); n < i; n++) {
            var t = this.a.c(n);
            t && t.dispose()
        }
        _j.i.prototype.bz.call(this)
    }
};
_j.bp = function(n, t) {
    this.b = n;
    this.a = t
};
_j.bp.prototype = {
    b: 0,
    a: 0
};
_j.x = function(n) {
    this.d = {};
    _j.s.a(n, "element");
    this.a = n
};
_j.x.b = function(n) {
    _j.s.a(n, "element");
    return new _j.x(n)
};
_j.x.d = function(n, t) {
    return _j.k.i(n, t)
};
_j.x.e = function(n) {
    return _j.k.j(n)
};
_j.x.a = function(n) {
    return n && n.ownerDocument ? n.ownerDocument : window.document
};
_j.x.c = function(n) {
    var t = null;
    n && (t = n.defaultView ? n.defaultView : n.parentWindow);
    return t ? t : window.self
};
_j.x.k = function(n, t, i, r, u) {
    _j.s.a(n, "element");
    _j.s.d(t, "eventName");
    _j.s.a(i, "handler");
    t = _j.x.h(n, t);
    _j.k.b(n, t, i, r, u)
};
_j.x.m = function(n, t, i) {
    _j.s.a(n, "element");
    _j.s.d(t, "eventName");
    t = _j.x.h(n, t);
    _j.k.c(n, t, i)
};
_j.x.h = function(n, t) {
    if (_j.x.j && !_j.G.a().Q && _j.x.f) switch (t) {
        case "mousedown":
            return "touchstart";
        case "mouseup":
            return _j.G.a().M ? "touchend touchcancel" : "touchend"
    } else if (_j.x.i && _j.x.f) {
        if (window.self.PointerEvent) switch (t) {
            case "mousedown":
                return "pointerdown";
            case "mouseup":
                return "pointerup"
        } else if (window.self.MSPointerEvent) switch (t) {
            case "mousedown":
                return "MSPointerDown";
            case "mouseup":
                return "MSPointerUp"
        }
    } else if ((t === "mouseenter" || t === "mouseleave") && !_j.x.l(n, t)) return t === "mouseenter" ? "mouseover" : "mouseout";
    return t
};
_j.x.l = function(n, t) {
    return "on" + t in n
};
_j.x.prototype = {
    a: null,
    e: function(n) {
        return _j.x.d(this.a, n)
    },
    addClass: function(n) {
        _j.k.d(this.a, n)
    },
    hasClass: function(n) {
        return _j.k.p(this.a, n)
    },
    removeClass: function(n) {
        _j.k.e(this.a, n)
    },
    b: function(n, t, i) {
        _j.k.b(this.a, n, t, i, !1, this.d)
    },
    c: function(n, t) {
        _j.k.c(this.a, n, t, this.d)
    },
    remove: function() {
        _j.k.f(this.a)
    },
    get: function(n) {
        _j.s.g(n, 0, 0, "index");
        return this.a
    }
};
_j.n = function() {};
_j.n.e = function(n) {
    _j.n.d = n;
    _j.n.c && _j.n.c.b(n);
    return n
};
_j.n.g = function(n, t) {
    _j.n.c = n;
    _j.n.e(t)
};
_j.n.b = function(n, t, i, r) {
    if (!_j.n.c) return null;
    r || (r = _j.n.f(t));
    return _j.n.c.c(n, t, i, r)
};
_j.n.a = function(n) {
    _j.n.c && _j.n.c.a(n)
};
_j.n.f = function(n) {
    var t;
    switch (n) {
        case 0:
        case 512:
            t = 1;
            break;
        case 517:
            t = 3;
            break;
        default:
            t = 2;
            break
    }
    return t
};
_j.bO = function() {};
_j.bO.a = function(n) {
    switch (n) {
        case 1:
            return "click";
        case 2:
            return "dblclick";
        case 4:
            throw Error.argumentOutOfRange("eventType", "hover is not a DOM event");
        case 8:
            return "mousedown";
        case 16:
            return "mouseup";
        case 32:
            return "focus";
        case 64:
            return "blur";
        case 128:
            return "keyup";
        case 256:
            return "keydown";
        case 512:
            return "change";
        case 1024:
            return "copy";
        case 2048:
            return "selectstart";
        case 4096:
            return "dragstart";
        case 8192:
            return "contextmenu";
        case 131072:
            return "paste";
        case 262144:
            return "focusin";
        case 524288:
            return "focusout";
        case 1048576:
            return "keypress";
        case 2097152:
            return "input";
        case 4194304:
            return "mouseenter";
        case 8388608:
            return "mouseleave";
        case 16777216:
            return "mousemove";
        default:
            throw Error.invalidOperation("Unexpected UIEventType: " + n);
    }
};
_j.A = function(n) {
    this.c = n
};
_j.A.prototype = {
    c: 0,
    a: function() {
        return this.c
    },
    b: function() {
        return "jsMVVM"
    }
};

function JsonParser() {}
JsonParser.serialize = function(n, t) {
    return t ? Sys.Serialization.JavaScriptSerializer.serialize(n) : JSON.stringify(n)
};
JsonParser.deserialize = function(n) {
    return n ? JSON.parse(n) : null
};
_j.l = function() {
    this.N = new Sys.EventHandlerList;
    this.x = [];
    _j.l.initializeBase(this)
};
_j.l.a = function(n, t) {
    if (!_j.L.isInstanceOfType(n)) throw Error.argumentType("item1 must implement IEquatable in CompareIEquatable");
    var i = n;
    return i.C(t)
};
_j.l.prototype = {
    K: -1,
    d: function(n) {
        this.N.addHandler("CollectionChanged", n)
    },
    e: function(n) {
        this.N.removeHandler("CollectionChanged", n)
    },
    b: function() {
        return this.x.length
    },
    c: function(n) {
        return this.x[n]
    },
    q: function(n, t) {
        _j.s.g(n, 0, this.x.length - 1, "index");
        if (this.x[n] !== t) {
            var i = this.x[n];
            this.x[n] = t;
            this.G(3, n, n, [t], [i])
        }
        return t
    },
    t: function(n, t) {
        this.bh(n, t)
    },
    s: function(n, t) {
        this.bi(n, t)
    },
    w: function(n, t) {
        if (!t)
            if (_j.L.isInstanceOfType(n)) t = _j.l.a;
            else return Array.contains(this.x, n);
        for (var i = 0, r = this.x.length; i < r; ++i)
            if (t(n, this.x[i])) return !0;
        return !1
    },
    m: function(n, t) {
        if (!t)
            if (_j.L.isInstanceOfType(n)) t = _j.l.a;
            else return Array.indexOf(this.x, n);
        for (var i = 0, r = this.x.length; i < r; ++i)
            if (t(n, this.x[i])) return i;
        return -1
    },
    o: function(n) {
        Array.forEach(this.x, n)
    },
    k: function(n) {
        for (var t = 0, r = this.x.length; t < r; ++t) {
            var i = this.x[t];
            if (n(i)) return t
        }
        return this.x.length
    },
    B: function(n, t) {
        var i = this.k(n);
        t.val = this.x[i];
        return i < this.x.length
    },
    a: function(n) {
        this.Z(n)
    },
    j: function(n) {
        this.ba(n)
    },
    z: function(n) {
        n && this.j(n.x)
    },
    g: function() {
        if (this.x.length) {
            this.E();
            var n = this.x;
            this.x = [];
            this.G(2, 0, 0, null, n);
            this.by("Count")
        }
    },
    p: function(n, t) {
        var i = t ? this.m(n) : Array.indexOf(this.x, n);
        if (i < 0) return !1;
        else {
            this.n(i);
            return !0
        }
    },
    n: function(n) {
        this.E();
        var t = this.x[n];
        Array.removeAt(this.x, n);
        this.G(2, n, n, null, [t]);
        this.by("Count")
    },
    v: function(n, t, i) {
        this.E();
        Array.removeAt(this.x, n);
        Array.insert(this.x, t, i);
        this.G(1, n, t, [i], [])
    },
    r: function(n, t) {
        if (t < 0 || t > this.x.length) throw Error.argumentOutOfRange("count");
        if (n < 0 || n + t > this.x.length) throw Error.argumentOutOfRange("index");
        this.E();
        for (var r = new Array(t), i = t - 1; i >= 0; i--) {
            r[i] = this.x[i + n];
            Array.removeAt(this.x, i + n)
        }
        this.G(2, n, n, null, r);
        this.by("Count")
    },
    u: function() {
        for (var t = new _j.l, n = 0, i = this.x.length; n < i; n++) t.a(this.x[n]);
        return t
    },
    f: function() {
        for (var t = this.x.length, i = new Array(t), n = 0; n < t; n++) i[n] = this.x[n];
        return i
    },
    bh: function(n, t) {
        this.E();
        Array.insert(this.x, n, t);
        this.G(0, n, n, [t], null);
        this.by("Count")
    },
    bi: function(n, t) {
        if (!t) throw Error.argumentNull("items");
        if (n > this.x.length || n < 0) throw Error.argumentOutOfRange("index");
        if (!this.x.length) {
            this.j(t);
            return
        }
        this.E();
        for (var i = 0, r = t.length; i < r; i++) Array.insert(this.x, n + i, t[i]);
        this.G(0, n, n, t, null);
        this.by("Count")
    },
    Z: function(n) {
        this.E();
        Array.add(this.x, n);
        var t = this.x.length - 1;
        this.G(0, t, t, [n], null);
        this.by("Count")
    },
    ba: function(n) {
        this.E();
        Array.addRange(this.x, n);
        var t = this.x.length - n.length;
        this.G(0, t, t, n, null);
        this.by("Count")
    },
    bg: function(n, t, i, r, u, f) {
        var e = new _j.V(t, i, u, f, r);
        n(this, e)
    },
    bz: function() {
        this.g();
        _j.S.prototype.bz.call(this)
    },
    E: function() {
        if (this.K !== -1) {
            var t = "Not able to execute action as it is already busy executing : {0}. OC data -> Count: {1} itemType: {2}";
            var n = this.x.length > 0 ? Object.getTypeName(this.x[0]) : "<empty>";
            throw Error.invalidOperation(String.format(t, this.K, this.x.length, n));
        }
    },
    G: function(n, t, i, r, u) {
        if (!this.bT) {
            var f = this.N.getHandler("CollectionChanged");
            if (f) {
                this.K = n;
                try {
                    this.bg(f, n, t, i, r, u)
                } finally {
                    this.K = -1
                }
            }
        }
    },
    h: function(n, t) {
        return this.m(n, t)
    }
};
_j.W = function(n, t, i) {
    this.c = n;
    this.a = t;
    this.b = i
};
_j.W.prototype = {
    c: "unknown",
    a: "unknown",
    b: 0
};
_j.bi = function(n, t, i) {
    this.c = {};
    _j.bi.initializeBase(this, [n]);
    this.j = i;
    this.g = t
};
_j.bi.prototype = {
    g: null,
    k: null,
    d: null,
    j: null,
    f: !1,
    a: function(n) {
        this.c = n;
        this.h();
        return n
    },
    m: function() {
        return this.d ? this.d : _j.A.j
    },
    p: function(n) {
        this.d !== n && (this.d = n);
        return n
    },
    i: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.bV(n ? 2 : 1)
        }
        return n
    },
    G: function() {
        _j.i.prototype.G.call(this);
        if (_j.h.a(this.k)) this.h();
        else {
            var n = this;
            this.j.a(this.k, function() {
                n.h()
            }, null)
        }
    },
    h: function() {
        if (this.Z()) {
            _j.h.a(this.cI) || (this.c.className = this.cI);
            try {
                for (var i = this.g.split("."), n = OwaNext, t = 0; t < i.length; t++) {
                    var r = i[t];
                    n = n[r]
                }
                OwaNext.application.ReactDOM.render(OwaNext.application.React.createElement(n, this.c), this.z)
            } catch (u) {
                _j.e.d(this.m(), u, "ReactComponent Caused an Exception at Render {0}", u.message)
            }
        }
    },
    q: function() {
        var n = !1;
        try {
            n = OwaNext.application.ReactDOM.unmountComponentAtNode(this.z)
        } catch (t) {
            _j.e.d(this.m(), t, "ReactComponent Caused an Exception at Unmount {0}", t.message)
        }
        return n
    },
    bz: function() {
        this.q();
        _j.i.prototype.bz.call(this)
    }
};
_j.bR = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b) {
    this.q = [];
    this.E = [];
    this.B = {};
    this.D = n;
    this.r = t || new Array(0);
    this.t = i || new Array(0);
    this.K = r;
    this.F = u;
    this.I = f;
    this.H = e;
    this.z = o;
    this.G = s;
    this.u = h;
    this.n = c;
    this.x = l;
    this.y = a;
    this.s = v;
    this.m = y;
    this.w = p;
    this.J = w;
    this.p = b;
    var k;
    this.v = (k = this.t).concat.apply(k, this.r)
};
_j.bR.prototype = {
    p: !1,
    D: null,
    z: null,
    x: null,
    y: null,
    s: null,
    v: null,
    t: null,
    r: null,
    F: null,
    K: null,
    I: null,
    H: null,
    G: null,
    n: null,
    m: null,
    w: "Standard",
    J: 0,
    C: !1,
    l: function() {
        return this.v
    },
    a: function() {
        return this.D
    },
    k: function() {
        return this.z
    },
    b: function() {
        return this.A(this.t)
    },
    e: function() {
        return this.A(this.r)
    },
    c: function() {
        return this.A(this.F)
    },
    i: function() {
        return this.I
    },
    f: function() {
        return this.H
    },
    d: function() {
        return this.G
    },
    u: null,
    h: function() {
        return this.u
    },
    g: function() {
        return this.n
    },
    j: function(n) {
        if (!this.C) {
            if (this.n)
                for (var r = this.n, f = r.length, i = 0; i < f; ++i) {
                    var t = r[i];
                    if (t && t.type) {
                        if (n && t.type in n) continue;
                        var u = this.x(t.type);
                        Array.add(this.q, u);
                        this.y(u)
                    }
                }
            this.M();
            this.C = !0
        }
    },
    M: function() {
        if (this.m) {
            var u = this;
            this.m.b(_j.bc, function() {
                u.o(0)
            });
            var r = this;
            this.m.b(_j.ba, function() {
                r.o(1)
            });
            var n = this;
            this.m.b(_j.O, function() {
                n.p = !0;
                n.o(2)
            });
            var t = this;
            this.m.b(_j.bh, function() {
                t.o(3)
            });
            var i = this;
            this.m.b(_j.bl, function() {
                i.o(4)
            })
        }
    },
    o: function(n) {
        var e = n.toString();
        if (!(e in this.B)) {
            this.B[e] = !0;
            for (var f = 0; f <= this.q.length; f++) {
                var t = this.q[f];
                if (t) {
                    var u;
                    try {
                        u = t.a()
                    } catch (c) {
                        var s = t ? Object.getTypeName(t) : "<empty>";
                        _j.e.c(_j.A.a, "Slab.CreateServices -- component was not of type IContainerConfiguration; actual type: {0}", s);
                        throw c;
                    }
                    if (u)
                        for (var o = u, h = o.length, r = 0; r < h; ++r) {
                            var i = o[r];
                            i.b === n && i.d(this.w) && this.L(i.c)
                        }
                }
            }
        }
    },
    L: function(n) {
        if (this.p) {
            var t = this;
            _j.m.a().c(_j.A.a, "Loading Service", function() {
                var i = t.s(n);
                Array.add(t.E, i)
            })
        } else {
            var i = this.s(n);
            Array.add(this.E, i)
        }
    },
    A: function(n) {
        var i = [];
        if (!n) return [];
        for (var t = 0; t < n.length; t++) {
            var r = n[t];
            Array.add(i, r.name)
        }
        return i
    }
};
_j.bS = function(n, t, i, r, u, f) {
    this.e = n;
    this.f = t;
    this.h = i;
    this.b = r;
    this.d = u;
    this.g = f;
    this.c = !1;
    if (this.b) {
        var e = this;
        this.b.b(_j.O, function() {
            e.c = !0
        })
    }
};
_j.bS.prototype = {
    e: null,
    f: null,
    h: null,
    d: "Standard",
    g: 0,
    b: null,
    c: !1,
    a: function(n, t, i, r, u, f, e, o, s, h, c) {
        return new _j.bR(n, t, i, r, u, f, e, o, s, h, c, this.e, this.f, this.h, this.b, this.d, this.g, this.c)
    }
};
_j.be = function(n, t, i, r, u, f, e) {
    this.k = [];
    this.B = {};
    this.E = {};
    this.A = {};
    this.C = {};
    this.z = {};
    this.r = {};
    this.v = {};
    this.q = {};
    this.D = _j.be.c;
    this.n = t;
    this.w = i;
    this.l = u;
    this.x = !1;
    this.t = !1;
    this.s = {};
    this.p = 0;
    this.o = [];
    this.F = 0;
    this.N = e;
    this.u = f;
    if (n) {
        var ft = n;
        for (var rt in ft) {
            var ut = {
                key: rt,
                value: ft[rt]
            };
            var o = ut.value;
            var ht = ut.key;
            var yt = null;
            "Sources" in o && (yt = this.G(o.Sources));
            var lt = null;
            "Strings" in o && (lt = this.G(o.Strings));
            var ct = null;
            "PackagedSources" in o && (ct = this.G(o.PackagedSources));
            var vt = null;
            "PackagedStrings" in o && (vt = this.G(o.PackagedStrings));
            var g;
            g = "Types" in o ? o.Types : [];
            var tt;
            tt = "Templates" in o ? this.bd(o.Templates) : [];
            var nt;
            nt = "Dependencies" in o ? o.Dependencies : [];
            var d;
            d = "Styles" in o ? this.bf(o.Styles) : new Array(0);
            var at = null;
            "Types" in o && (at = this.be(o.Configurations));
            var h;
            h = "IncludedSlabs" in o ? o.IncludedSlabs : [];
            var s = r.a(ht, ct, yt, vt, lt, g, tt, nt, d, h, at);
            if (_j.be.a === ht) {
                for (var c = 0; c < s.i().length; c++) this.B[s.i()[c]] = !0;
                for (var l = 0; l < s.f().length; l++) this.A[_j.F.a(s.f()[l])] = !0;
                for (var y = 0; y < s.c().length; y++) this.n.c(s.c()[y]);
                var b = !1;
                var wt, pt;
                var k = (pt = this.u.a(s, wt = {
                    val: b
                }), b = wt.val, pt);
                b && Array.addRange(k, s.b());
                for (var p = 0; p < k.length; p++) this.n.c(k[p]);
                for (var a = 0; a < s.d().length; a++) this.w.c(s.d()[a]);
                if (s.g())
                    for (var w = 0; w < s.g().length; w++) this.z[s.g()[w].type] = !0;
                this.L(s, 2);
                this.y = s
            }
            Array.add(this.k, s);
            for (var it = h, bt = it.length, v = 0; v < bt; ++v) {
                var kt = it[v];
                Array.add(this.k, s)
            }
        }
    }
    var st = this;
    this.l.b(_j.bt, function() {
        st.t = !0;
        st.T()
    });
    var ot = this;
    this.l.b(_j.bl, function() {
        ot.x = !0;
        ot.T()
    });
    var et = this;
    this.u.b(this.y, this.n, function(n) {
        for (var t = 0; t < n.length; ++t) et.n.c(n[t]);
        et.l.d(_j.bt, new _j.bt)
    })
};
_j.be.c = function() {
    return 0
};
_j.be.prototype = {
    n: null,
    w: null,
    y: null,
    l: null,
    N: null,
    u: null,
    x: !1,
    t: !1,
    s: null,
    p: 0,
    M: null,
    o: null,
    F: 0,
    j: function(n) {
        this.D = n;
        return n
    },
    i: function() {
        return !!Object.keys(this.s).length
    },
    X: function() {
        this.y.j(null)
    },
    g: function(n, t) {
        var i = this.C[_j.F.a(n)];
        i && this.H(i, t);
        return !!i
    },
    b: function(n) {
        return !!this.B[n.getName()]
    },
    ba: function(n) {
        return !!this.A[_j.F.a(n)]
    },
    h: function(n) {
        var t = [];
        var r = this.R(n);
        t = t.concat.apply(t, this.S(r));
        for (var u = this.P(r), i = 0; i < u.length; i++) t = t.concat.apply(t, this.S(u[i]));
        return t
    },
    a: function(n, t, i) {
        var r = this.R(n);
        r ? this.J(r) ? t && t() : this.O(r, "Explicit", t, i) : i && i()
    },
    m: function(n) {
        this.p || Array.add(this.o, n)
    },
    c: function(n, t, i) {
        _j.e.a(_j.A.a, "SlabLoader triggered by a LoadTemplate: {0}", n);
        n = _j.F.a(n);
        this.ba(n) ? t && t() : this.E[n] ? i && i() : this.U(n, t, i)
    },
    d: function(n, t, i) {
        _j.e.a(_j.A.a, "SlabLoader triggered by a LoadType: {0}", n.getName());
        this.b(n) ? t && t() : this.E[n.getName()] ? i && i() : this.U(n.getName(), t, i)
    },
    S: function(n) {
        var t = this.n.d(n.b(), !1);
        var u = this.W(n.c());
        var r = this.n.d(u, !0);
        var i = this.Y(n.d());
        return t.concat.apply(t, [r].concat(i))
    },
    Y: function(n) {
        return this.w.a(n)
    },
    R: function(n) {
        for (var i = null, t = 0; t < this.k.length; t++) {
            var u = this.k[t];
            if (u.a() === n) {
                i = this.k[t];
                break
            }
            for (var r = 0; r < u.h().length; r++)
                if (u.h()[r] === n) {
                    i = this.k[t];
                    break
                }
        }
        if (!i) throw Error.argumentNull(String.format("Slab {0} could not be found", n));
        return i
    },
    U: function(n, t, i) {
        for (var u = null, r = 0; r < this.k.length; r++)
            if (Array.contains(this.k[r].i(), n) || Array.contains(this.k[r].f(), n)) {
                u = this.k[r];
                break
            }
        if (!u) {
            _j.e.a(_j.A.a, "Attempt was made to load a script for a type/template that does not exist in the manifest: {0}. (If the type is in the manifest, make sure that it was declared with the [PreserveName, IgnoreNamespace] attributes.)", n);
            this.E[n] = !0;
            i && i();
            return
        }
        this.O(u, n, t, i)
    },
    O: function(n, t, i, r) {
        _j.e.a(_j.A.a, "Loading name '{0}' triggered slab downloading for slab '{1}'", t, n.a());
        var u = this;
        this.bh(n, function() {
            var r = u.I(n) ? [] : u.P(n);
            u.bc(n, r, t, i)
        })
    },
    bc: function(n, t, i, r) {
        for (var u = 0; u < t.length; u++)
            if (!this.I(t[u])) {
                var e = t[u].a();
                this.r[e] = 1;
                this.v[e] = n.a();
                this.s[e] = ""
            }
        this.H(n, r);
        if (!this.I(n)) {
            this.L(n, 1);
            var f = null;
            var o = this;
            f = function(r) {
                r < t.length ? o.bb(n, t[r], i, function() {
                    r++;
                    f(r)
                }, r + 1) : o.V(n, i, 0)
            };
            f(0)
        }
    },
    H: function(n, t) {
        n.a() in this.q || (this.q[n.a()] = []);
        t && Array.add(this.q[n.a()], t)
    },
    bb: function(n, t, i, r, u) {
        this.J(t) && r();
        this.H(t, r);
        if (this.Z(n, t)) {
            _j.e.a(_j.A.a, "Downloading dependency slab '{0}' for slab '{1}'", t.a(), n.a());
            this.V(t, i, u)
        }
    },
    V: function(n, t, i) {
        this.M = _j.n.b(_j.A.a, 517, "LoadSlabResources_" + n.a() + "_ByName_" + t);
        for (var h = this.D(), u = !n.d() || !n.d().length, r = !n.b() || !n.b().length, f = !n.c() || !n.c().length, s = !1, a = n.f(), b = a.length, e = 0; e < b; ++e) {
            var w = a[e];
            this.C[_j.F.a(w)] = n
        }
        var d = this;
        var k = function() {
            u = !0;
            r && f && d.K(n, t, i, h)
        };
        var o = this;
        var p = function() {
            r = !0;
            u && f && o.K(n, t, i, h);
            s && o.u.b(n, o.n, function(n) {})
        };
        var l = this;
        var c = function() {
            if (!r) {
                var i, t;
                var u = (t = l.u.a(n, i = {
                    val: s
                }), s = i.val, t);
                l.n.e(u, !1, p)
            }
        };
        u || this.w.b(n.d(), k);
        if (f) c();
        else {
            var v = this;
            var y = function() {
                f = !0;
                u && r ? v.K(n, t, i, h) : c()
            };
            this.n.e(this.W(n.c()), !0, y)
        }
    },
    W: function(n) {
        for (var i = new Array(n.length), t = 0; t < n.length; t++) i[t] = String.format("{0}/{1}", this.N, n[t]);
        return i
    },
    T: function() {
        if (this.x && this.t) {
            this.l.d(_j.bx, new _j.bx);
            this.p = 1;
            if (this.o.length)
                for (var n = this, i = function() {
                        n.F++;
                        if (n.F === n.o.length) {
                            n.p = 2;
                            n.l.d(_j.X, new _j.X)
                        }
                    }, t = 0; t < this.o.length; t++) this.a(this.o[t], i, i);
            else {
                this.p = 2;
                this.l.d(_j.X, new _j.X)
            }
        }
    },
    bh: function(n, t) {
        if (this.p === 2 || Array.contains(this.o, n.a()) && this.p === 1 || Array.contains(_j.be.b, n.a()) && this.t) t();
        else if (Array.contains(_j.be.b, n.a()) && !this.t) {
            var r = this;
            this.l.b(_j.bt, function() {
                t()
            })
        } else {
            var i = this;
            this.l.b(_j.X, function() {
                t()
            })
        }
    },
    K: function(n, t, i, r) {
        _j.n.a(this.M);
        for (var b = _j.n.b(_j.A.a, 2, "RegisterTypesForSlab_" + n.a()), h = n.i(), w = h.length, o = 0; o < w; ++o) {
            var k = h[o];
            this.B[k] = !0
        }
        for (var l = n.f(), g = l.length, u = 0; u < g; ++u) {
            var c = l[u];
            this.A[_j.F.a(c)] = !0;
            delete this.C[_j.F.a(c)]
        }
        n.j(this.z);
        _j.e.a(_j.A.a, "{0} slab resources loaded which is triggered by {1}", n.a(), t);
        for (var a = n.g(), d = a.length, e = 0; e < d; ++e) {
            var f = a[e];
            f && f.type && (this.z[f.type] = !0)
        }
        this.L(n, 2);
        n.a() in this.v && delete this.v[n.a()];
        _j.n.a(b);
        if (this.q[n.a()]) {
            for (var y = this.q[n.a()].length, p = "SlabLoader::OnSlabResourcesLoaded_" + n.a() + "_ByName_" + t, s = 0; s < y; s++) {
                var v = this.q[n.a()][s];
                _j.m.a().c(_j.A.a, p, v)
            }
            Array.clear(this.q[n.a()])
        }
        this.l.a(_j.bu, new _j.bu(n.a(), t, i, r, this.D()))
    },
    I: function(n) {
        return n.a() in this.r && this.r[n.a()] === 1
    },
    J: function(n) {
        return n.a() in this.r && this.r[n.a()] === 2
    },
    Z: function(n, t) {
        return t.a() in this.v && this.v[t.a()] === n.a()
    },
    P: function(n) {
        var t = [];
        this.Q(n, {}, t);
        return t
    },
    Q: function(n, t, i) {
        for (var e = n.k().length, o = this.k.length, f = 0; f < e; f++)
            for (var u = 0; u < o; u++) {
                var r = this.k[u];
                if (r.a() === n.k()[f]) {
                    if (!(r.a() in t) && !this.J(r)) {
                        t[r.a()] = r;
                        e > 0 && this.Q(r, t, i);
                        Array.add(i, r)
                    }
                    break
                }
            }
    },
    G: function(n) {
        if (n) {
            for (var r = new Array(n.length), t = 0; t < n.length; t++) {
                var i = n[t];
                i.name = i.name.toLowerCase();
                r[t] = i
            }
            return r
        }
        return null
    },
    bf: function(n) {
        if (n) {
            for (var r = new Array(n.length), t = 0; t < n.length; t++) {
                var i = n[t];
                i.name = i.name.toLowerCase();
                var u = n[t].type;
                i.type = this.bg(u);
                r[t] = i
            }
            return r
        }
        return null
    },
    be: function(n) {
        if (n) {
            for (var i = new Array(n.length), t = 0; t < n.length; t++) {
                var r = n[t];
                i[t] = r
            }
            return i
        }
        return null
    },
    bg: function(n) {
        if (n) {
            if (n.toLowerCase() === "sprite") return "Sprite";
            if (n.toLowerCase() === "highresolution") return "HighResolution"
        }
        return "Standard"
    },
    bd: function(n) {
        for (var t = 0; t < n.length; t++) n[t] = _j.F.a(n[t]);
        return n
    },
    L: function(n, t) {
        this.r[n.a()] = t;
        for (var r = 0; r < n.h().length; r++) {
            var i = n.h()[r];
            this.r[i] = t;
            t === 1 ? this.s[i] = "" : i in this.s && delete this.s[i]
        }
    }
};
_j.z = function() {};
_j.z.a = function(n) {
    return !!n !== n
};
_j.C = function() {};
_j.C.a = function(n) {
    return n === null || n === undefined
};
_j.bJ = function(n, t, i, r, u) {
    this.c = n;
    this.g = i;
    this.e = r;
    this.h = t;
    this.d = !1;
    this.b = 0;
    this.a = 0;
    this.i = u
};
_j.bJ.prototype = {
    c: null,
    g: null,
    i: null,
    h: null,
    e: null,
    d: !1,
    b: 0,
    a: 0,
    f: !1
};
_j.bm = function(n) {
    this.a = n
};
_j.bm.prototype = {
    a: null
};
_j.bq = function(n, t, i, r) {
    this.f = [];
    this.i = [];
    this.j = n;
    this.m = t;
    r || (r = ++_j.bq.a);
    this.e = r;
    this.g = i
};
_j.bq.prototype = {
    j: null,
    m: null,
    g: null,
    e: 0,
    c: function() {
        return this.j
    },
    h: function(n, t, i, r, u) {
        var f = this.d(t, i, r, u);
        this.l(n, f);
        return f
    },
    d: function(n, t, i, r) {
        return new _j.bJ(this, n, t, i, r)
    },
    l: function(n, t) {
        var e = this.k();
        n ? Array.enqueue(this.i, t) : Array.enqueue(this.f, t);
        if (e) {
            this.g.F();
            return
        }
        for (var i = this.g.u, f = !1, r = i.length - 1; r >= 0; r--) {
            var u = i[r];
            if (u === this) {
                this.g.F();
                return
            } else if (u.e < this.e) {
                r === i.length - 1 ? Array.add(i, this) : Array.insert(i, r + 1, this);
                f = !0;
                break
            }
        }
        f || Array.insert(i, 0, this);
        this.g.F()
    },
    k: function() {
        return this.f.length > 0 || this.i.length > 0
    },
    a: function(n, t, i) {
        this.h(!1, n, t, i, _j.m.a().i)
    },
    b: function(n, t, i) {
        this.h(!0, n, t, i, _j.m.a().i)
    }
};
_j.T = function() {};
_j.T.e = function(n) {
    var t = n[1];
    return t === 2 || t === 3 ? _j.f.c(n[2], n[3], n[4], n[5], n[8], n[9], n[10]) : t === 4 ? _j.f.b(n[12], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11]) : t === 5 ? new _j.bg(n[5], n[2], n[3], n[9], n[10], n[8]) : t === 6 && n[12] === 2 ? _j.f.e(n[13], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11]) : t === 6 ? _j.f.d(n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11]) : _j.f.a(n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11])
};
_j.T.d = function(n) {
    for (var o = n.m.length, f = n.p.j, t = o - 1; t >= 0; t--)
        if (f[t]) {
            var u = n.m[t];
            if (!u.bT)
                for (var r = f[t], s = r.length, i = 0; i < s; i++) {
                    var e = r[i];
                    e[8] !== 2 && _j.T.b(u, r[i])
                }
        }
};
_j.T.b = function(n, t) {
    var i = t[1];
    var r = _j.T.e(t);
    i === 5 ? n.gk(r) : i === 1 || i === 3 || i === 6 && t[12] === 1 ? n.W(r) : n.U(r)
};
_j.T.c = function(n, t, i, r, u) {
    if (n)
        for (var s = 0, c = n.length; s < c; s++) {
            var f = n[s];
            if (f) {
                if (f[8] === 2) {
                    u && _j.T.b(t, f);
                    continue
                }
                if (!u || !String.isInstanceOfType(f[5]) || f[5] === "DataContext") {
                    var e = f[1];
                    if (e === 4) _j.T.a(f, t, f[12]);
                    else if (e === 5 && f[8] === 2) _j.T.a(f, t, t);
                    else if (e === 1 || e === 3 || e === 5 && f[8] === 1) _j.T.a(f, t, r);
                    else if (e === 6) {
                        var l = f[0];
                        var o = l < 0 ? i : t.V();
                        f[12] === 1 ? o = r : f[12] === 2 && (o = f[13]);
                        _j.T.a(f, t, o)
                    } else {
                        var h = f[0];
                        _j.T.a(f, t, h < 0 ? i : t.V())
                    }
                }
            }
        }
};
_j.T.a = function(n, t, i) {
    var f = n[1];
    var c = n[3];
    var e = n[7];
    var r = n[11];
    var l = n[9];
    var a = n[10];
    r = _j.T.g(c, i, r, l, a);
    if (f === 6) {
        var h = n[5].split(".");
        var o = n[6];
        o(t)[h[1]] = r
    } else if (e) _j.T.f(e, t, r);
    else if (f === 5) {
        var u = n[5].split(":");
        var s = u.length;
        if (s === 2)
            if (r) {
                t.bt(u[1]);
                t.bo(u[0])
            } else {
                t.bt(u[0]);
                t.bo(u[1])
            }
        else r ? t.bo(n[5]) : t.bt(n[5])
    } else(f === 2 || f === 3) && t.eK(n[5], r)
};
_j.T.f = function(n, t, i) {
    try {
        n(t, i)
    } catch (r) {}
};
_j.T.g = function(n, t, i, r, u) {
    try {
        return _j.T.h(n, t, i, r, u)
    } catch (f) {
        return i
    }
};
_j.T.h = function(n, t, i, r, u) {
    if (n)
        for (var f = 0, e = n.length; f < e && t; f++) t = n[f](t);
    return $a(t) ? i : r ? r.a(t, u) : t
};
_j.d = function(n, t, i, r, u, f, e, o, s, h, c, l) {
    this.f = i;
    this.n = t;
    this.d = n;
    this.m = r;
    this.l = u;
    this.k = f;
    this.o = o;
    this.e = e;
    this.i = c;
    this.h = l;
    s && (this.g = new _j.bT(h, _j.d.a));
    _j.F.n(n, this)
};
_j.d.a = function(n, t) {
    var i = n;
    t ? i.dispose() : i.u()
};
_j.d.prototype = {
    n: null,
    o: !1,
    d: null,
    m: null,
    l: null,
    k: null,
    e: !1,
    g: null,
    i: null,
    h: 0,
    j: null,
    f: null,
    a: function() {
        return this.f
    },
    b: function() {
        return this.m
    },
    q: function() {
        return !!this.g
    },
    c: function() {
        var n = null;
        this.g && (n = this.g.j());
        if (!n) {
            n = this.n();
            this.i && this.i[this.d] && (this.j = this.i[this.d]);
            n.w(this)
        }
        return n
    },
    p: function(n) {
        n.v();
        if (this.g) this.g.k(n);
        else throw Error.invalidOperation("Can't cache non cachable template");
    }
};
_j.bY = function() {};
_j.bY.prototype = {
    gN: null,
    fr: function() {
        if (!this.gN) return !1;
        var t = this.gN;
        for (var n in t) {
            var i = {
                key: n,
                value: t[n]
            };
            return !0
        }
        return !1
    },
    eM: function(n) {
        var t = this[n.a];
        return t === undefined ? n.d : t
    },
    eK: function(n, t) {
        undefined === t && (t = n.d);
        var r = this.eM(n);
        if (r !== t || n.m) {
            var i = new _j.bN(this, n, r, t);
            n.q(i);
            this[n.a] = t;
            this.gN || (this.gN = {});
            this.gN[n.a] = !0;
            n.p(i);
            this.gO(i)
        }
    },
    fI: function() {
        this.gN = null
    },
    gO: function(n) {}
};
_j.K = function(n, t, i, r, u, f, e, o) {
    this.a = n;
    this.c = t;
    this.f = i;
    this.d = e ? r : _j.Q.b(t, r);
    this.h = u;
    this.g = f;
    this.m = o
};
_j.K.prototype = {
    a: null,
    c: null,
    f: null,
    d: null,
    g: null,
    h: null,
    m: !1,
    l: function() {
        return this.f.getName() + "." + this.a
    },
    p: function(n) {
        this.g && this.g(n)
    },
    q: function(n) {
        this.h && this.h(n)
    }
};
_j.V = function(n, t, i, r, u) {
    this.e = -1;
    this.c = n;
    this.d = t;
    this.e = u;
    switch (n) {
        case 0:
            this.a = i;
            break;
        case 1:
            this.a = i;
            this.b = r;
            break;
        case 2:
            this.b = r;
            break;
        case 3:
            this.a = i;
            this.b = r;
            break;
        case 4:
            this.d = -1;
            break
    }
};
_j.V.prototype = {
    c: 0,
    a: null,
    b: null,
    d: 0
};
_j.S = function() {
    _j.S.initializeBase(this)
};
_j.S.a = function(n, t, i) {
    var r = n.cP.getHandler(t);
    r && r(n, t);
    i && i(n, t)
};
_j.S.prototype = {
    ng: null,
    iN: null,
    cP: null,
    kE: 0,
    bT: !1,
    bM: !1,
    J: function(n) {
        this.apcl("$", n)
    },
    F: function(n) {
        this.rpcl("$", n)
    },
    iO: function() {
        return !0
    },
    apcl: function(n, t) {
        this.cP || (this.cP = new Sys.EventHandlerList);
        this.kE++;
        this.cP.addHandler(n, t)
    },
    rpcl: function(n, t) {
        if (this.cP) {
            this.kE--;
            this.cP.removeHandler(n, t)
        }
    },
    bB: function(n, t) {
        this.apcl("~" + n, t)
    },
    bF: function(n, t) {
        this.rpcl("~" + n, t)
    },
    hn: function(n) {
        return this.cP ? this.cP.getHandler("~" + n) : null
    },
    kF: function(n) {
        if (this.cP) {
            var t = this.cP._getEvent(n, !1);
            t && Array.clear(t)
        }
    },
    dispose: function() {
        if (!this.bT) {
            this.bT = !0;
            this.bE();
            var n = this.ng || (this.ng = Function.createDelegate(this, this.bz));
            this.iO() ? n() : _j.m.a().f(_j.A.d, "Dispose." + Object.getType(this).getName(), n);
            this.bM = !0
        }
    },
    bE: function() {},
    bz: function() {
        this.kE = 0;
        this.cP = null
    },
    by: function(n) {
        if (this.cP && !this.bT) {
            var t = this.cP.getHandler("$");
            _j.S.a(this, n, t)
        }
    },
    bA: function(n, t) {
        if (this.cP && !this.bT) {
            var i = this.cP.getHandler("$");
            _j.S.a(this, n, i);
            _j.S.a(this, t, i)
        }
    },
    dA: function(n, t, i) {
        if (this.cP && !this.bT) {
            var r = this.cP.getHandler("$");
            _j.S.a(this, n, r);
            _j.S.a(this, t, r);
            _j.S.a(this, i, r)
        }
    },
    bX: function(n) {
        if (this.cP && !this.bT)
            for (var i = this.cP.getHandler("$"), t = 0; t < n.length; t++) _j.S.a(this, n[t], i)
    },
    ce: function(n) {
        var t = this.hn(n);
        t && t()
    },
    bO: function(n, t) {
        var i = this.hn(n);
        i && i(t)
    },
    bL: function(n, t, i) {
        var r = this.hn(n);
        r && r(t, i)
    },
    gO: function(n) {
        _j.bY.prototype.gO.call(this, n);
        this.by(n.property.a)
    }
};
_j.Q = function() {};
_j.Q.a = function(n, t) {
    return _j.Q.b(n, t)
};
_j.Q.b = function(n, t) {
    return $a(t) ? n === Number || Type.isEnum(n) ? 0 : n === Boolean ? !1 : null : t
};
_j.R = function() {
    _j.R.initializeBase(this)
};
_j.R.a = function(n) {
    n()
};
_j.R.prototype = {
    b: function(n) {
        this.f(n)
    },
    c: function(n) {
        this.h(n)
    },
    a: function() {
        this.g(_j.R.a)
    }
};
_j.H = function() {
    _j.H.initializeBase(this)
};
_j.H.prototype = {
    b: function(n) {
        this.f(n)
    },
    c: function(n) {
        this.h(n)
    },
    a: function(n) {
        var t = this;
        this.g(function(t) {
            t(n)
        })
    }
};
_j.bW = function() {
    _j.bW.initializeBase(this)
};
_j.bW.prototype = {
    e: null,
    d: function() {
        return !!this.e && this.e.length > 0
    },
    f: function(n) {
        this.e || (this.e = []);
        Array.add(this.e, n)
    },
    h: function(n) {
        this.e && Array.remove(this.e, n)
    },
    g: function(n) {
        if (this.e) {
            var t = Array.clone(this.e);
            Array.forEach(t, n);
            t = null
        }
    },
    D: function() {
        this.e = null
    }
};
_j.bZ = function() {};
_j.bZ.prototype = {
    I: !1,
    dispose: function() {
        if (!this.I) {
            this.D();
            this.I = !0
        }
    }
};
_j.u = function() {};
_j.u.b = function(n, t) {
    return _j.u.d(n, t)
};
_j.u.d = function(n, t) {
    var u = t.charCodeAt(0);
    if (u <= 57 && u >= 0) {
        var i = parseInt(t);
        if (isFinite(i) && i >= 0) return i
    }
    try {
        return n.parse(t, !0)
    } catch (f) {
        var r = parseInt(t);
        if (isFinite(r) && r >= 0) return r;
        throw f;
    }
};
_j.u.c = function(n, t) {
    if (_j.M.isInstanceOfType(t)) {
        for (var u = t, r = new Sys.StringBuilder, i = 0; i < u.b(); i++) {
            var f = u.c(i);
            r.append(n.toString(f))
        }
        return r.toString(",")
    } else return n.toString(t)
};
_j.u.a = function(n) {
    return n === null || n === undefined
};
_j.E = function() {};
_j.E.a = function(n) {
    return n === null || n === undefined
};

function $a(n) {
    return n === null || n === undefined
}
_j.h = function() {};
_j.h.a = function(n) {
    return n === null || n === undefined || n === ""
};
_j.h.b = function(n) {
    return _j.h.a(n) || n.trim() === ""
};
_j.h.d = function(n) {
    return n === null || n === undefined
};
_j.h.e = function(n) {
    for (var t = 0, i = 0; i < n.length; ++i) {
        var r = n.charCodeAt(i);
        t = (t << 5) - t + r;
        t = t & t
    }
    return t
};
_j.h.c = function(n, t, i, r, u, f, e) {
    return t !== undefined || i !== undefined || r !== undefined || u !== undefined || f !== undefined || e !== undefined ? String.format(n, t, i, r, u, f, e) : n
};
_j.h.f = function(n, t) {
    if (_j.h.a(n)) return "";
    else {
        for (var r = new Sys.StringBuilder, u = n.split(_j.h.g), i = 0; i < u.length; i++)
            if (!_j.h.b(u[i])) {
                r.append(u[i]);
                r.append(t)
            }
        return r.toString()
    }
};
_j.m = function(n, t, i, r, u) {
    this.I = Function.createDelegate(this, this.Q);
    this.T = Function.createDelegate(this, this.Y);
    this.H = Function.createDelegate(this, this.Z);
    this.u = [];
    this.D = n;
    this.p = t;
    this.M = i;
    this.n = 0;
    this.r = 0;
    this.q = r;
    this.P = u;
    this.z = new _j.bq(_j.A.b, "Background", this, 0);
    this.N = this.m = new _j.bq(_j.A.b, "Normal", this, 0);
    if (_j.G.a().a() && window.addEventListener) {
        var f = this;
        window.self.addEventListener("scroll", function(n) {
            f.O(1);
            return !0
        }, !1)
    }
};
_j.m.a = function() {
    _j.m.b || (_j.m.b = new _j.m(50, 0, 100, window.self, function() {
        return new Date
    }));
    return _j.m.b
};
_j.m.prototype = {
    i: null,
    M: 0,
    q: null,
    P: null,
    D: 0,
    p: 0,
    G: !1,
    E: !1,
    k: null,
    v: null,
    J: null,
    l: null,
    s: !0,
    z: null,
    N: null,
    m: null,
    n: 0,
    r: 0,
    y: null,
    S: null,
    C: !1,
    B: function() {
        return this.t()
    },
    t: function() {
        return this.k || this.N
    },
    a: function(n, t, i, r) {
        var u = null;
        var e = this.t();
        var f = this.i;
        var o = this;
        u = u || new _j.bm(this.x(n, "PeriodicCallback_" + t, function() {
            u ? u.a = e.d(n, t, i, f) : u = new _j.bm(e.d(n, t, i, f));
            var r = u.a;
            if (!r.f) try {
                i()
            } finally {
                r.d = !0
            }
        }, r, !1));
        return u.a ? u : null
    },
    b: function(n) {
        n && n.a && this.w(n.a);
        return null
    },
    e: function(n, t, i, r) {
        var u = null;
        var o = this.t();
        var e = this.i;
        var s = this;
        var f = this.W(n, t, function() {
            var r = o.d(n, t, i, e);
            if (u) {
                var f = u.a;
                r.a = f.a;
                u.a = r
            } else u = new _j.bm(r);
            r.c.l(!0, r)
        }, r);
        u = u || new _j.bm(f);
        return u.a ? u : null
    },
    c: function(n, t, i) {
        this.E ? this.d(n, t, i) : this.t().h(!1, n, t, i, this.i)
    },
    d: function(n, t, i) {
        this.t().h(!0, n, "_idle" + t, i, this.i)
    },
    f: function(n, t, i) {
        this.z.h(!0, n, "CleanupTask_" + t, i, this.i)
    },
    R: function() {
        if (!this.k) {
            this.k = this.m;
            this.C = !0
        }
    },
    L: function() {
        this.C = !1;
        this.k = null;
        this.i = null
    },
    o: function(n) {
        this.i || (this.i = n)
    },
    j: function(n, t) {
        if (this.C) {
            this.k = this.m = new _j.bq(n, t, this, 0);
            _j.e.a(_j.A.b, "Starting new context for component {0} and source {1} with context id of {2}", n, t, this.m.e)
        }
        return this.m.e
    },
    g: function() {
        if (!(this.p < 0)) {
            if (this.r > 0) {
                _j.e.b(_j.A.b, "Pausing idle queue while all task queues are already paused is a no-op.");
                return
            }
            if (this.n > 0) {
                this.w(this.v);
                this.v = null
            }
            this.n++;
            this.v = this.x(_j.A.b, "TaskRunner.ResumeIdleTaskProcessing", this.H, 1e3, !0)
        }
    },
    h: function() {
        if (!(this.p < 0) && !(this.r > 0)) {
            if (!this.n) {
                _j.e.b(_j.A.b, "Idle Task processing should be paused before invoking resume");
                return
            }
            this.n--;
            this.n || this.w(this.v)
        }
    },
    ba: function() {
        if (!(this.p < 0)) {
            if (!this.r) {
                _j.e.b(_j.A.b, "All Task processing should be paused before invoking resume");
                return
            }
            this.r--;
            if (!this.r) {
                this.w(this.J);
                this.J = null
            }
            this.n > 0 && (this.v = this.x(_j.A.b, "TaskRunner.ResumeIdleTaskProcessing", this.H, 1e3, !0))
        }
    },
    O: function(n) {
        if (this.l) {
            this.w(this.l);
            this.l = null
        }
        this.p >= 0 && (this.l = this.x(_j.A.b, "TaskRunner.RunForQuanta", this.I, n, !0))
    },
    Q: function() {
        this.l = null;
        this.L();
        var r = this.k;
        if (!this.r) {
            this.k = this.m;
            var n = this.K(this.m.f, this.D, 0);
            if (n === this.D) {
                n = n / 2;
                if (!this.n || this.p < 0)
                    for (var i = this.u.length - 1; i >= 0 && n > 0; i--) {
                        var t = this.u[i];
                        if (t) {
                            this.k = t;
                            n = this.K(t.f, n, 1);
                            if (n > 0) {
                                n = this.K(t.i, n, t === this.z ? 2 : 1);
                                n > 0 && !t.k() && Array.remove(this.u, t)
                            }
                        }
                    }
            }
        }
        this.u.length > 0 && this.F();
        this.k = r
    },
    A: function(n, t) {
        if (!n.d && !n.f) {
            n.d = !0;
            var i = n.e;
            this.i = n.i;
            if (this.y) {
                var u = this.y(i, n.g, n.c.e, n.h, this.s, !!t, t, -1, -1, -1);
                this.i = null;
                return u
            }
            var r = new Date;
            i();
            this.i = null;
            return new Date - r
        }
        return 0
    },
    K: function(n, t, i) {
        var r = 0;
        this.E = !!i;
        while (n.length > 0 && r < t) try {
            var u = Array.dequeue(n);
            r += this.A(u, i)
        } catch (f) {}
        this.E = !1;
        return t - r
    },
    F: function() {
        if (this.l) {
            if (this.G === !this.m.f.length) return;
            this.w(this.l);
            this.l = null
        }
        if (this.p < 0) this.Q();
        else {
            this.G = !this.m.f.length;
            this.l = this.x(_j.A.b, "TaskRunner.RunForQuanta", this.I, this.G ? this.M : this.p, !0)
        }
    },
    x: function(n, t, i, r, u) {
        var o = this.t();
        if (this.s) {
            var f = o.d(n, "TimerCallback_" + t, i, this.i);
            var e = this;
            var s = function() {
                e.k = o;
                try {
                    e.A(f, 0)
                } finally {
                    e.k = null
                }
            };
            f.b = r || !this.q.setImmediate ? this.q.setTimeout(s, r) : this.q.setImmediate(s);
            return f
        } else {
            this.A(o.d(n, t, i, this.i), 0);
            return null
        }
    },
    W: function(n, t, i, r) {
        var u = this.t().d(n, t, i, this.i);
        u.a = this.X(u, r);
        return u
    },
    V: function(n) {
        n && this.q.clearTimeout(n);
        return 0
    },
    w: function(n) {
        n.f = !0;
        n.a ? this.U(n.a) : n.b && this.V(n.b)
    },
    U: function(n) {
        n && this.q.clearInterval(n);
        return 0
    },
    X: function(n, t) {
        var r = n;
        var i = this;
        return this.q.setInterval(function() {
            i.A(r, 0);
            r = new _j.bJ(n.c, n.h, n.g, n.e, i.i)
        }, t)
    },
    Z: function() {
        this.n = 0
    },
    Y: function() {
        this.r = 0
    }
};
_j.a = function(n, t) {
    _j.a.initializeBase(this);
    _j.s.a(n, "rootElement");
    this.m = t;
    this.o = !1;
    this.q = document.createDocumentFragment();
    for (var r = n.children, i = 0, u = r.length; i < u; i++) this.q.appendChild(r[0])
};
_j.a.a = function(n, t) {
    for (var i = 0; i < t.length; i++) n = n.children[t[i]];
    return n
};
_j.a.prototype = {
    m: null,
    q: null,
    s: !1,
    t: null,
    r: null,
    p: null,
    n: null,
    o: !1,
    w: function(n) {
        if (this.p) throw Error.invalidOperation();
        else this.p = n;
        return n
    },
    j: function() {
        return this.m.length
    },
    k: function() {
        return this.r
    },
    c: function(n) {
        this.r = n;
        return this
    },
    e: function() {
        return this.r ? this.r.R() : !1
    },
    a: function(n) {
        return this.t ? this.t[n] : null
    },
    getTemplateControlForTest: function() {
        return this.m && this.m.length > 0 ? this.m[0].X : null
    },
    l: function(n) {
        this.t = n;
        return this
    },
    g: function(n) {
        this.n = n;
        var i = this.p.j;
        this.o = this.o || !i;
        for (var t = this.m.length - 1; t >= 0; t--) {
            this.o || _j.T.c(i[t], this.m[t], this.n.V(), this.n, !0);
            this.m[t].fj(n);
            this.o || _j.T.c(i[t], this.m[t], this.n.V(), this.n, !1);
            this.m[t].nG()
        }
        if (!this.o && i) {
            var r = this;
            _j.m.a().d(_j.A.c, "delayed binding", function() {
                _j.T.d(r)
            })
        }
        this.o = !0;
        n.z.appendChild(this.q)
    },
    d: function() {
        if (!this.s) {
            this.s = !0;
            for (var n = 0; n < this.m.length; n++) this.m[n].bm()
        }
    },
    i: function() {
        if (this.s) {
            this.s = !1;
            for (var n = this.m.length - 1; n >= 0; n--) this.m[n].bx()
        }
    },
    h: function() {
        if (!this.I && this.p && this.p.q()) {
            this.p.p(this);
            return !0
        }
        return !1
    },
    f: function() {
        for (var n = this.m.length - 1; n >= 0; n--) this.m[n].kX()
    },
    b: function(n) {
        return this.m[n]
    },
    v: function() {
        if (!this.n) throw Error.invalidOperation("TemplateInstance already detached");
        this.q = document.createDocumentFragment();
        for (var t = this.n.z.children, n = 0, i = t.length; n < i; n++) this.q.appendChild(t[0]);
        this.n = null
    },
    u: function() {
        for (var n = 0; n < this.m.length; n++) {
            this.m[n].fj(null);
            this.m[n].kZ && this.m[n].su()
        }
        this.i()
    },
    D: function() {
        for (var n = this.m.length - 1; n >= 0; n--) this.m[n].dispose()
    }
};
_j.F = function() {};
_j.F.n = function(n, t) {
    n = _j.F.a(n);
    var i = t.a();
    _j.F.h[i] = !0;
    _j.F.d[i] || (_j.F.d[i] = {});
    _j.F.d[i][n] && _j.F.f && _j.F.f("Template: [" + n + "] has more than one occurrence!");
    _j.F.d[i][n] = t;
    if (t.b()) {
        var u = t.b().getName();
        var r;
        if (u in _j.F.b) r = _j.F.b[u];
        else {
            r = new Array(0);
            _j.F.b[u] = r
        }
        Array.add(r, t)
    }
};
_j.F.l = function(n, t, i) {
    n = _j.F.a(n);
    var r = _j.F.k(n);
    if (r) {
        var u = function() {
            t(r, i)
        };
        _j.F.e && _j.F.e(n, u) || u();
        return
    }
    if (!_j.F.g) throw Error.invalidOperation("TemplateManager is not initialized");
    _j.F.g(n, function() {
        r = _j.F.k(n);
        if (!r) throw Error.invalidOperation(String.format(_j.F.j, n));
        t(r, i)
    }, function() {
        throw Error.invalidOperation(String.format(_j.F.j, n));
    })
};
_j.F.m = function(n, t) {
    for (var i = n; i && i !== t; i = i.getBaseType()) {
        var e = i.getName();
        if (e in _j.F.b) return _j.F.b[e]
    }
    var o = n.getInterfaces();
    if (o)
        for (var f = o, s = f.length, r = 0; r < s; ++r) {
            var h = f[r];
            var u = h.getName();
            if (u in _j.F.b) return _j.F.b[u]
        }
    return null
};
_j.F.a = function(n) {
    return n ? n.toLowerCase() : null
};
_j.F.k = function(n) {
    var r = null;
    var u;
    var t = [];
    var f;
    var o = _j.F.h;
    for (var e in o) {
        var s = {
            key: e,
            value: o[e]
        };
        f = s.key;
        u = _j.F.d[f];
        if (u) {
            switch (_j.F.i) {
                case "TouchNarrow":
                    r = u[_j.F.a(n + ".Narrow")];
                    break;
                case "TouchWide":
                    r = u[_j.F.a(n + ".Wide")];
                    break;
                case "Mouse":
                    r = u[_j.F.a(n + ".Mouse")];
                    break;
                default:
                    break
            }
            r || (r = u[_j.F.a(n)]);
            r && t.push(r)
        }
    }
    if (t.length) {
        if (t.length > 1)
            for (var i = t.length - 1; i > -1;) {
                if (_j.F.c && !_j.h.a(t[i].a()) && _j.F.c(t[i].a())) return t[i];
                else if (t[i] && _j.h.a(t[i].a())) return t[i];
                i--
            }
    } else return null;
    return t[0]
};
_j.bT = function(n, t) {
    this.h = Function.createDelegate(this, this.i);
    this.f = n;
    this.c = t;
    this.a = [];
    this.b = []
};
_j.bT.prototype = {
    f: 0,
    a: null,
    b: null,
    c: null,
    d: !1,
    e: 0,
    k: function(n) {
        Array.add(this.a, n);
        Array.add(this.b, !1);
        this.g()
    },
    j: function() {
        if (this.a.length > 0) {
            this.e === this.a.length && this.e--;
            var n = this.a[this.a.length - 1];
            Array.removeAt(this.a, this.a.length - 1);
            Array.removeAt(this.b, this.b.length - 1);
            return n
        }
        return null
    },
    i: function() {
        this.d = !1;
        if (this.a.length > this.f) {
            var t = this.a[this.a.length - 1];
            Array.removeAt(this.a, this.a.length - 1);
            Array.removeAt(this.b, this.b.length - 1);
            this.g();
            this.c(t, !0);
            return
        }
        for (var n = 0; n < this.a.length; n++)
            if (!this.b[n]) {
                this.b[n] = !0;
                this.g();
                this.c(this.a[n], !1);
                return
            }
    },
    g: function() {
        if (!this.d) {
            this.d = !0;
            _j.m.a().f(_j.A.h, "Cleanup View Cache Item", this.h)
        }
    }
};
_j.e = function() {};
_j.e.k = function(n, t, i, r, u, f, e, o, s, h) {};
_j.e.g = function(n) {
    _j.e.e = n;
    _j.e.i(!!n);
    return n
};
_j.e.i = function(n) {
    _j.e.f = n;
    _j.e.h = n ? _j.e.j : _j.e.k;
    return n
};
_j.e.l = function(n) {
    _j.e.h = _j.e.j = n
};
_j.e.d = function(n, t, i, r, u, f, e, o, s) {
    _j.e.h(n, 1, t, i, r, u, f, e, o, s)
};
_j.e.c = function(n, t, i, r, u, f, e, o) {
    _j.e.h(n, 1, null, t, i, r, u, f, e, o)
};
_j.e.b = function(n, t, i, r, u, f, e, o) {
    _j.e.h(n, 2, null, t, i, r, u, f, e, o)
};
_j.e.a = function(n, t, i, r, u, f, e, o) {
    _j.e.h(n, 4, null, t, i, r, u, f, e, o)
};
_j.bo = function(n) {
    this.s = n;
    this.w = n.type.toLowerCase();
    this.t = _j.bo.b(n);
    this.x = _j.bo.d(n);
    this.v = _j.bo.c(n)
};
_j.bo.d = function(n) {
    var t = n.which;
    switch (n.type.toLowerCase()) {
        case "keypress":
            t && !n.keyCode && (n.keyCode = t);
            break;
        case "keydown":
        case "keyup":
            n.charCode = 0;
            break
    }
    t || (t = n.keyCode);
    t || (t = n.charCode);
    return t
};
_j.bo.c = function(n) {
    var t = n.relatedTarget;
    if (t !== undefined) return t;
    switch (n.type) {
        case "mouseover":
        case "dragenter":
            return n.fromElement;
        case "mouseout":
        case "dragexit":
            return n.toElement
    }
    return null
};
_j.bo.b = function(n) {
    var t = n;
    if ("pageX" in t) return new _j.bo.a(t.pageX, t.pageY);
    if (t.changedTouches && t.changedTouches.length > 0) return new _j.bo.a(t.changedTouches[0].pageX, t.changedTouches[0].pageY);
    var r = t.clientX;
    var i = t.clientY;
    if (document.body) {
        r += document.body.scrollLeft;
        i += document.body.scrollTop
    }
    if (document.documentElement) {
        r += document.documentElement.scrollLeft;
        i += document.documentElement.scrollTop
    }
    return new _j.bo.a(r, i)
};
_j.bo.prototype = {
    s: null,
    t: null,
    v: null,
    x: 0,
    w: null,
    u: !1,
    y: !1,
    i: function() {
        return this.s.currentTarget
    },
    e: function() {
        return this.t.x
    },
    f: function() {
        return this.t.y
    },
    o: function() {
        return this.v
    },
    b: function() {
        return this.s.target || this.s.srcElement
    },
    n: function() {
        return this.s.timeStamp || +new Date
    },
    a: function() {
        return this.x
    },
    m: function() {
        return this.s
    },
    j: function() {
        return this.w
    },
    k: function() {
        return this.s.touches
    },
    q: function() {
        return this.u
    },
    g: function() {
        return this.s.shiftKey
    },
    h: function() {
        return _j.G.a().P ? this.s.metaKey : this.s.ctrlKey
    },
    l: function() {
        return this.s.altKey
    },
    r: function() {
        return this.s.metaKey
    },
    p: function() {
        return this.s.shiftKey || this.h() || this.s.altKey || this.s.metaKey
    },
    c: function() {
        this.s.preventDefault ? this.s.preventDefault() : this.s.returnValue = !1;
        this.u = !0
    },
    d: function() {
        this.s.stopPropagation ? this.s.stopPropagation() : this.s.cancelBubble = !0;
        this.y = !0
    },
    z: function(n, t) {
        this.t = new _j.bo.a(n, t)
    }
};
_j.bo.a = function(n, t) {
    this.x = n;
    this.y = t
};
_j.i = function(n) {
    _j.i.initializeBase(this);
    _j.s.a(n, "htmlElement");
    _j.s.f(n.nodeType, 1, "domElement.NodeType");
    this.z = n;
    this.gq = _j.i.g(n);
    this.nC = _j.i.m;
    this.nv = _j.i.d;
    this.nw = _j.i.e;
    this.dU = [];
    this.kJ = {};
    this.cI = n.className
};
_j.i.$$cctor = function() {
    if (document.documentElement.classList) {
        _j.i.h = function(n, t) {
            var i = n.get(0).classList;
            i.add(t)
        };
        _j.i.j = function(n, t) {
            var i = n.get(0).classList;
            i.remove(t)
        }
    } else {
        _j.i.h = function(n, t) {
            n.addClass(t)
        };
        _j.i.j = function(n, t) {
            n.removeClass(t)
        }
    }
};
_j.i.n = function() {
    return []
};
_j.i.a = function() {
    if (!_j.i.i) {
        var n = window.document.createElement("div");
        n.style.display = "none";
        n.id = "uiObjectCacheNode";
        _j.i.i = n
    }
    return _j.i.i
};
_j.i.c = function(n, t, i) {
    return !n || n === i || n.tagName && n.tagName.toLowerCase() === "body" ? null : t(n) ? n : _j.i.c(n.parentNode, t, i)
};
_j.i.f = function(n) {
    return n.style.display !== "none" && n.offsetWidth + n.offsetHeight > 0
};
_j.i.prototype = {
    np: null,
    iV: null,
    iT: null,
    iP: null,
    iR: null,
    iQ: null,
    nn: null,
    ns: null,
    nl: null,
    nt: null,
    nj: null,
    iS: null,
    gi: null,
    nm: null,
    nk: null,
    no: null,
    ni: null,
    nh: null,
    dg: null,
    nq: null,
    nr: null,
    gj: null,
    iU: null,
    nu: null,
    gh: null,
    kH: null,
    hp: null,
    go: !1,
    eN: !1,
    iW: !1,
    kT: !1,
    kZ: !1,
    ja: !1,
    gp: !1,
    ho: !1,
    fJ: null,
    gq: null,
    nC: !1,
    nv: null,
    nw: null,
    z: null,
    jc: null,
    dU: null,
    kJ: null,
    cI: null,
    la: null,
    eg: 0,
    pW: null,
    kR: null,
    hq: !1,
    iY: !1,
    cw: null,
    kQ: !1,
    jb: null,
    cx: 0,
    iX: null,
    gm: null,
    gv: 0,
    kI: null,
    kO: null,
    kK: null,
    nH: null,
    fG: function(n) {
        this.fJ || (this.fJ = new _j.H);
        this.fJ.b(n)
    },
    kU: function(n) {
        this.fJ && this.fJ.c(n)
    },
    bH: function(n) {
        if (this.cI !== n) {
            this.eA(this.cI, n);
            this.cI = n;
            this.by("CssClass")
        }
        return n
    },
    kW: function(n) {
        if (this.la !== n) {
            this.eA(this.la, n);
            this.la = n
        }
        return n
    },
    bp: function() {
        return this.ja || this.ho && !this.V()
    },
    K: function(n) {
        if (this.ja !== n) {
            this.ja = n;
            this.nx();
            this.by("IsHidden")
        }
        return n
    },
    nz: function() {
        return this.hq
    },
    gu: function(n) {
        if (n !== this.hq) {
            this.Z() && this.qc(n);
            this.hq = n
        }
        return n
    },
    pZ: function(n) {
        if (n !== this.iX) {
            this.iX = n;
            this.by("Activated")
        }
        return n
    },
    qa: function(n) {
        if (n !== this.gm) {
            this.gm = n;
            this.by("Deactivated")
        }
        return n
    },
    L: function(n) {
        if (n !== this.ho) {
            this.ho = n;
            this.nx();
            this.by("HiddenIfNullContext")
        }
        return n
    },
    bV: function(n) {
        if (this.gv === n) return n;
        this.gv = n;
        if (this.gv === 1) {
            this.bn(2048);
            this.bo("disableTextSelection");
            this.bt("allowTextSelection");
            _j.G.a().I && this.z.setAttribute("unselectable", "on")
        } else if (this.gv === 2) {
            this.bn(2048);
            this.bo("allowTextSelection");
            this.bt("disableTextSelection");
            _j.G.a().I && this.z.removeAttribute("unselectable")
        } else {
            this.cL(2048);
            this.bt("disableTextSelection");
            this.bt("allowTextSelection");
            _j.G.a().I && this.z.removeAttribute("unselectable")
        }
        this.by("TextSelectionType");
        return n
    },
    uJ: function() {
        return this.z
    },
    gn: function() {
        this.nC ? this.jc = this.gq : this.jc || (this.jc = $(this.z));
        return this.jc
    },
    fj: function(n) {
        this.fe(n);
        return n
    },
    bG: function() {
        return this.eM(_j.i.b)
    },
    cE: function(n) {
        n && !this.bG() && this.kN() && this.kN().b && this.kN().a();
        this.eK(_j.i.b, n);
        return n
    },
    bK: function() {
        return this.kI
    },
    bb: function(n) {
        if (n !== this.kI) {
            this.kI = n;
            this.by("ClickCommand")
        }
        return n
    },
    kN: function() {
        return this.kO
    },
    hs: function(n) {
        if (n !== this.kO) {
            this.kO = n;
            this.by("HoverCommand")
        }
        return n
    },
    ff: function() {
        return this.kK
    },
    dC: function(n) {
        if (n !== this.kK) {
            this.kK = n;
            this.by("DoubleClickCommand")
        }
        return n
    },
    nA: function() {
        return this.pW
    },
    nB: function() {
        return this.kR
    },
    sD: function(n) {
        if (this.kR !== n) {
            this.kR = n;
            this.by("MouseUpCommand")
        }
        return n
    },
    bk: function(n) {
        if (n !== this.nH) {
            n || (n = "");
            this.z && this.z.setAttribute("title", n);
            this.nH = n;
            this.by("Title")
        }
        return n
    },
    S: function() {
        this.kH || (this.kH = new _j.D(this.z));
        return this.kH
    },
    ny: function() {
        return this.S().x()
    },
    D: function(n) {
        this.S().a(n);
        return n
    },
    dh: function() {
        return this.S().J()
    },
    A: function(n) {
        this.S().c(n);
        return n
    },
    cl: function() {
        return this.S().h()
    },
    O: function(n) {
        this.S().f(n);
        return n
    },
    dM: function(n) {
        this.S().K(n);
        return n
    },
    fK: function(n) {
        this.S().Q(n);
        return n
    },
    eh: function(n) {
        this.S().D(n);
        return n
    },
    kL: function() {
        return this.S().A()
    },
    kV: function(n) {
        this.S().i(n);
        return n
    },
    co: function() {
        return this.S().G()
    },
    Q: function(n) {
        this.S().k(n);
        return n
    },
    cq: function() {
        return this.S().C()
    },
    T: function(n) {
        this.S().e(n);
        return n
    },
    di: function(n) {
        this.S().N(n);
        return n
    },
    cU: function(n) {
        this.S().O(n);
        return n
    },
    pU: function() {
        return this.S().H()
    },
    hr: function(n) {
        this.S().r(n);
        return n
    },
    ez: function(n) {
        this.S().s(n);
        return n
    },
    gs: function(n) {
        this.S().E(n);
        return n
    },
    kM: function() {
        return this.S().B()
    },
    N: function(n) {
        if (this.S().B() !== n) {
            this.S().t(n);
            this.lb();
            this.by("AriaHiddenState")
        }
        return n
    },
    fi: function(n) {
        this.S().p(n);
        return n
    },
    sv: function() {
        return this.S().I()
    },
    gt: function(n) {
        this.S().g(n);
        return n
    },
    dB: function(n) {
        this.S().m(n);
        return n
    },
    sC: function(n) {
        this.S().z(n);
        return n
    },
    bh: function(n) {
        if (this.hp !== n) {
            this.hp = n;
            this.lb();
            this.by("IdSuffix")
        }
        return n
    },
    C: function(n) {
        if (this.cw !== n) {
            this.nI(!1);
            this.cw = this.bC();
            if (n) {
                var t;
                this.cw = (t = this.cw).concat.apply(t, n)
            }
            this.nI(!0);
            this.by("Behaviors")
        }
        return n
    },
    Z: function() {
        return this.go
    },
    qb: function(n) {
        if (this.go !== n) {
            this.go = n;
            this.by("IsActive")
        }
        return n
    },
    fH: function() {
        return !1
    },
    iZ: function() {
        try {
            return this.z === document.activeElement
        } catch (n) {
            _j.e.b(_j.A.e, "Encountered error while accessing document.activeElement. Exception: {0}", n);
            return !1
        }
    },
    sw: function() {
        return _j.G.a().N
    },
    I: function() {
        return _j.A.g
    },
    gk: function(n) {
        if (this.kJ[n.c]) throw Error.invalidOperation("Can't add cssBinder, given cssClass(" + n.c + ") has already been added");
        this.kJ[n.c] = n;
        this.dU[this.dU.length] = n;
        n.b(n.e ? n.e === 1 ? this.X : this : this.V());
        n.g(this);
        return this
    },
    kG: function(n) {
        this.pV();
        this.cw = this.cw.concat(n);
        n.bl(this);
        this.by("Behaviors")
    },
    bm: function() {
        this.iW = !0;
        if (!this.go && !this.gp) {
            this.nG();
            this.qb(!0);
            this.G();
            this.fJ && this.fJ.a(this);
            this.iX && this.iX.a()
        }
    },
    bf: function(n, t, i) {
        this.nv(this.z, n, t, i, !1)
    },
    bj: function(n, t) {
        this.nw(this.z, n, t)
    },
    nG: function() {
        this.kT = !0;
        if (!this.eN && !this.gp) {
            this.eN = !0;
            this.P()
        }
    },
    su: function() {
        this.kT = !1;
        this.eN = !1
    },
    kX: function() {
        this.kZ = !0
    },
    bx: function() {
        this.iW = !1;
        if (this.Z()) {
            this.qb(!1);
            this.cE(!1);
            this.M();
            this.gm && this.gm.a()
        }
    },
    R: function() {
        if (this.z.getAttribute("disabled")) return !1;
        if (!this.bp()) try {
            this.z.focus();
            return !0
        } catch (n) {
            return !1
        }
        return !1
    },
    kP: function() {
        return !!this.z.getAttribute("tabindex") || (this.z.nodeName.toLowerCase() === "a" || this.z.nodeName.toLowerCase() === "area") && !!this.z.getAttribute("href") || (this.z.nodeName.toLowerCase() === "input" || this.z.nodeName.toLowerCase() === "button" || this.z.nodeName.toLowerCase() === "select" || this.z.nodeName.toLowerCase() === "textarea") && !this.z.getAttribute("disabled")
    },
    bn: function(n) {
        var u = _j.U.prototype;
        var r = u;
        for (var t in r) {
            var f = {
                key: t,
                value: r[t]
            };
            var i = f.value;
            0 != (n & i) && this.sB(n, i)
        }
    },
    cL: function(n) {
        if (0 != (n & this.eg)) {
            var e = _j.U.prototype;
            var u = e;
            for (var r in u) {
                var f = {
                    key: r,
                    value: u[r]
                };
                var t = f.value;
                if (0 != (t & this.eg) && 0 != (t & n)) {
                    var i = ".UIObject" + t;
                    switch (t) {
                        case 4:
                            this.bj("mouseenter", i);
                            this.bj("mouseleave", i);
                            break;
                        default:
                            this.bj(_j.bO.a(t), i);
                            break
                    }
                    this.eg &= ~n
                }
            }
        }
    },
    bo: function(n) {
        this.lc(n, !0)
    },
    bt: function(n) {
        this.lc(n, !1)
    },
    bI: function(n) {
        this.bK() && this.bK().b && this.bK().a()
    },
    ef: function(n) {
        this.ff() && this.ff().b && this.ff().a()
    },
    cY: function(n) {
        this.kY(!0)
    },
    cr: function(n) {
        this.kY(!1)
    },
    dp: function(n) {
        this.nA() && this.nA().b && this.nA().a()
    },
    eP: function(n) {
        this.nB() && this.nB().b && this.nB().a()
    },
    pX: function(n) {},
    sz: function(n) {
        this.kY(!0)
    },
    sy: function(n) {
        this.kY(!1)
    },
    cD: function(n) {},
    ee: function(n) {},
    fh: function(n) {},
    cg: function(n) {},
    eO: function(n) {},
    nE: function(n) {},
    nD: function(n) {},
    pY: function(n) {},
    sx: function(n) {},
    gr: function(n) {},
    nF: function(n) {},
    kS: function(n) {},
    dV: function(n) {},
    fg: function(n) {},
    Y: function() {
        _j.bk.prototype.Y.call(this);
        for (var n = this.dU.length - 1; n >= 0; n--) this.dU[n].e || this.dU[n].b(this.V());
        if (!this.bT) {
            this.nx();
            this.lb();
            this.ho && this.by("IsHidden")
        }
    },
    G: function() {
        this.lb()
    },
    P: function() {
        this.hq && this.qc(this.hq);
        this.pV()
    },
    M: function() {},
    bz: function() {
        this.Z() && this.bx();
        this.nI(!1);
        this.go && this.gm && this.gm.a();
        for (var t = 0; t < this.dU.length; t++) this.dU[t].dispose();
        Array.clear(this.dU);
        this.eg = 0;
        this.gq.remove();
        if (this.cw)
            for (var n = 0; n < this.cw.length; n++) this.cw[n].dispose();
        _j.bk.prototype.bz.call(this)
    },
    sF: function(n) {
        var t = this.z;
        t.parentNode && t.parentNode.replaceChild(n, t);
        this.z = n;
        this.gq = _j.i.g(n);
        this.S().l = this.z;
        if (this.eg) {
            var i = this.eg;
            this.eg = 0;
            this.bn(i)
        }
    },
    eA: function(n, t) {
        this.lc(n, !1);
        this.lc(t, !0)
    },
    qc: function(n) {
        var t = ".UIObjectcopyrestriction";
        if (n && !this.iY) {
            this.bf("copy", this.gh || (this.gh = Function.createDelegate(this, this.gl)), t);
            this.bf("dragstart", this.gh || (this.gh = Function.createDelegate(this, this.gl)), t);
            this.bf("contextmenu", this.gh || (this.gh = Function.createDelegate(this, this.gl)), t);
            this.eg |= 13312;
            this.iY = !0;
            this.bV(1)
        } else if (this.iY) {
            this.bj("copy", t);
            this.bj("dragstart", t);
            this.bj("contextmenu", t);
            this.iY = !1;
            this.eg ^= 13312;
            this.bV(0)
        }
    },
    gl: function(n) {
        n.c();
        n.d()
    },
    dT: function() {
        this.by("TemplatedParent");
        _j.bk.prototype.dT.call(this);
        for (var n = this.dU.length - 1; n >= 0; n--) this.dU[n].e === 1 && this.dU[n].b(this.X)
    },
    bC: function() {
        return _j.i.k()
    },
    lc: function(n, t) {
        if (n) {
            var i = n.match(_j.i.l);
            if (t)
                for (var u = 0, e = i.length; u < e; u++) _j.i.h(this.gq, i[u]);
            else
                for (var r = 0, f = i.length; r < f; r++) _j.i.j(this.gq, i[r])
        }
    },
    sA: function(n) {
        this.gv === 1 ? n.c() : this.gv === 2 && n.d();
        this.pY(n)
    },
    kY: function(n) {
        if ($a(this.cx) || this.cx <= 0) {
            this.cE(n);
            return
        }
        this.kQ = n;
        this.jb = _j.m.a().b(this.jb);
        this.kQ !== this.bG() && (this.jb = _j.m.a().a(this.I(), "SetIsHovered", this.nu || (this.nu = Function.createDelegate(this, this.sE)), this.cx))
    },
    sE: function() {
        this.cE(this.kQ);
        this.jb = null
    },
    sB: function(n, t) {
        if (n & t && !(this.eg & t)) {
            var i = ".UIObject" + t;
            switch (t) {
                case 4:
                    this.bf("mouseenter", this.iU || (this.iU = Function.createDelegate(this, this.cY)), i);
                    this.bf("mouseleave", this.gj || (this.gj = Function.createDelegate(this, this.cr)), i);
                    break;
                case 33554432:
                    this.bf("mouseover", this.nr || (this.nr = Function.createDelegate(this, this.sz)), i);
                    this.bf("mouseout", this.nq || (this.nq = Function.createDelegate(this, this.sy)), i);
                    break;
                case 1:
                    this.bf("click", this.dg || (this.dg = Function.createDelegate(this, this.bI)), i);
                    break;
                case 64:
                    this.bf("blur", this.nh || (this.nh = Function.createDelegate(this, this.ee)), i);
                    break;
                case 512:
                    this.bf("change", this.ni || (this.ni = Function.createDelegate(this, this.eO)), i);
                    break;
                case 2097152:
                    this.bf("input", this.no || (this.no = Function.createDelegate(this, this.nE)), i);
                    break;
                case 2:
                    this.bf("dblclick", this.nk || (this.nk = Function.createDelegate(this, this.ef)), i);
                    break;
                case 32:
                    this.bf("focus", this.nm || (this.nm = Function.createDelegate(this, this.cD)), i);
                    break;
                case 256:
                    this.bf("keydown", this.gi || (this.gi = Function.createDelegate(this, this.cg)), i);
                    break;
                case 128:
                    this.bf("keyup", this.iS || (this.iS = Function.createDelegate(this, this.fh)), i);
                    break;
                case 1024:
                    this.bf("copy", this.nj || (this.nj = Function.createDelegate(this, this.nD)), i);
                    break;
                case 2048:
                    this.bf("selectstart", this.nt || (this.nt = Function.createDelegate(this, this.sA)), i);
                    break;
                case 4096:
                    this.bf("dragstart", this.nl || (this.nl = Function.createDelegate(this, this.sx)), i);
                    break;
                case 131072:
                    this.bf("paste", this.ns || (this.ns = Function.createDelegate(this, this.nF)), i);
                    break;
                case 262144:
                    this.bf("focusin", this.nn || (this.nn = Function.createDelegate(this, this.kS)), i);
                    break;
                case 524288:
                    this.bf("focusout", this.iQ || (this.iQ = Function.createDelegate(this, this.dV)), i);
                    break;
                case 1048576:
                    this.bf("keypress", this.iR || (this.iR = Function.createDelegate(this, this.fg)), i);
                    break;
                case 8192:
                    this.bf("contextmenu", this.iP || (this.iP = Function.createDelegate(this, this.gr)), i);
                    break;
                case 8:
                    this.bf("mousedown", this.iT || (this.iT = Function.createDelegate(this, this.dp)), i);
                    break;
                case 16:
                    this.bf("mouseup", this.iV || (this.iV = Function.createDelegate(this, this.eP)), i);
                    break;
                case 16777216:
                    this.bf("mousemove", this.np || (this.np = Function.createDelegate(this, this.pX)), i);
                    break;
                default:
                    throw Error.invalidOperation("Unexpected UIEventType: " + t);
            }
            this.eg |= t
        }
    },
    nI: function(n) {
        if (this.cw)
            for (var t = 0; t < this.cw.length; t++) {
                var i = n ? this : null;
                this.cw[t].bl(i)
            }
    },
    pV: function() {
        this.cw || this.C([])
    },
    nx: function() {
        var n = this.gp;
        this.gp = this.ja || this.ho && !this.V();
        if (n !== this.gp)
            if (this.gp) {
                this.z.style.display = "none";
                if (this.go) {
                    this.bx();
                    this.iW = !0
                }
            } else {
                this.z.style.display = "";
                this.kT && this.nG();
                this.iW && this.bm()
            }
    },
    lb: function() {
        this.hp && this.hp !== "" && this.X && this.X.cl() && (this.kM() ? this.O("") : this.O(this.X.cl() + "." + this.hp))
    }
};
_j.G = function() {
    this.J = window.navigator.userAgent;
    this.I = this.J.indexOf("MSIE") !== -1 || this.J.indexOf("rv:") !== -1 && this.J.indexOf("Trident") !== -1;
    this.O = !this.I && this.J.indexOf("Edge") !== -1;
    this.M = this.J.indexOf("Android") !== -1;
    if (!(this.I || this.O)) {
        this.Q = this.J.indexOf("Chrome") !== -1;
        this.K = this.J.indexOf("Firefox") !== -1;
        this.R = this.J.indexOf("Safari") !== -1 && this.J.indexOf("Version/") !== -1 && !(this.Q || this.M) || this.J.indexOf("PhantomJS") !== -1
    }(this.by("WebKitAnimationEvent") || this.by("AnimationEvent") || this.by("MSAnimationEvent")) && (this.bx = !0);
    this.bd = this.J.indexOf("iPhone") !== -1;
    this.bc = this.J.indexOf("iPad") !== -1;
    this.W = this.J.indexOf("WebKit") !== -1;
    this.P = window.navigator.appVersion.indexOf("Mac") !== -1;
    this.bk = window.navigator.appVersion.indexOf("Win") !== -1 || window.navigator.appVersion.indexOf("NT") !== -1;
    this.N = !this.I || this.J.toUpperCase().indexOf("MSIE 8") === -1 && this.J.toUpperCase().indexOf("MSIE 7") === -1
};
_j.G.a = function() {
    _j.G.b || (_j.G.b = new _j.G);
    return _j.G.b
};
_j.G.prototype = {
    bx: !1,
    I: !1,
    K: !1,
    Q: !1,
    O: !1,
    R: !1,
    bd: !1,
    bc: !1,
    M: !1,
    W: !1,
    P: !1,
    bk: !1,
    J: null,
    N: !1,
    bw: !0,
    s: function() {
        return this.J
    },
    b: function() {
        return this.I
    },
    f: function() {
        return this.K
    },
    g: function() {
        return this.Q
    },
    h: function() {
        return this.O
    },
    i: function() {
        return this.R
    },
    j: function() {
        return this.bx && this.bw
    },
    q: function() {
        return this.bd
    },
    o: function() {
        return this.bc
    },
    a: function() {
        return this.bd || this.bc
    },
    e: function() {
        return this.M
    },
    l: function() {
        return this.W
    },
    k: function() {
        return this.P
    },
    z: function() {
        return this.bk
    },
    n: function() {
        return this.N
    },
    v: function(n) {
        this.bw = n
    },
    by: function(n) {
        return typeof window.self[n] != "undefined"
    }
};
_j.s = function() {};
_j.s.a = function(n, t) {
    if (n === null) throw Error.argumentNull(t, "Argument can't be null");
};
_j.s.b = function(n, t) {
    if ($a(n)) throw Error.argumentNull(t, "Argument can't be null or undefined");
};
_j.s.d = function(n, t) {
    if (!n || !n.length) throw Error.argumentNull(t, "Argument can't be null or empty");
};
_j.s.e = function(n, t) {
    if (!n || !n.length) throw Error.argumentNull(t, "Argument can't be null or empty");
};
_j.s.h = function(n, t, i) {
    if (n === t) throw Error.argument(i, "Argument value should not be equal to " + t);
};
_j.s.f = function(n, t, i) {
    if (n !== t) throw Error.argument(i, "Argument is " + n + " but should be equal to " + t);
};
_j.s.g = function(n, t, i, r) {
    if (n < t || n > i) throw Error.argumentOutOfRange(r);
};
_j.s.c = function(n, t) {
    if (!n) throw Error.create("ExceptionHelpers.ThrowOnAssert(" + t + ")");
};
_j.bU = function() {};
_j.bU.registerInterface("_j.bU");
_j.bb = function() {};
_j.bb.registerInterface("_j.bb");
_j.q = function(n) {
    this.d = n || new Array(0)
};
_j.q.prototype = {
    d: null,
    e: function() {
        return this.d
    },
    a: function() {
        return this.d.length
    },
    b: function(n) {
        return this.d[n]
    },
    o: function(n, t) {
        this.d[n] = t;
        return t
    },
    c: function(n) {
        Array.add(this.d, n)
    },
    h: function(n) {
        n && Array.addRange(this.d, n)
    },
    f: function() {
        Array.clear(this.d)
    },
    g: function(n) {
        return Array.contains(this.d, n)
    },
    m: function(n, t) {
        t = t || 0;
        return Array.indexOf(this.d, n, t)
    },
    k: function(n, t) {
        Array.insert(this.d, n, t)
    },
    n: function(n) {
        Array.remove(this.d, n)
    },
    j: function(n) {
        Array.removeAt(this.d, n)
    },
    q: function(n, t) {
        if (t >= n) {
            if (t > this.d.length - 1) throw Error.argumentOutOfRange("lastItemToRemove", t, "Index is outside of the array");
            if (n < 0) throw Error.argumentOutOfRange("firstItemToRemove", n, "Index is negative");
            for (var i = t; i >= n; i--) Array.removeAt(this.d, i)
        }
    },
    i: function() {
        for (var t = new Array(this.d.length), n = 0; n < this.d.length; n++) t[n] = this.d[n];
        return t
    },
    l: function(n) {
        this.d.sort(n)
    }
};
_j.j = function(n) {
    this.e = new Sys.EventHandlerList;
    this.f = {};
    this.g = {};
    this.i = n || _j.m.a()
};
_j.j.prototype = {
    i: null,
    b: function(n, t) {
        var i = n.getName();
        if (i in this.f) {
            var r = this;
            this.i.c(_j.A.g, "DeferredEventRegistration_" + i, function() {
                t(r.f[i])
            })
        } else {
            this.e.addHandler(i, t);
            i in this.g && t(this.g[i])
        }
    },
    c: function(n, t) {
        var i = n.getName();
        this.e.removeHandler(i, t)
    },
    a: function(n, t) {
        var r = n.getName();
        var i = this.e.getHandler(r);
        i && i(t)
    },
    d: function(n, t) {
        var i = n.getName();
        if (i in this.f) throw Error.argument("eventObject", "Event " + i + " was already raised!");
        this.f[i] = t;
        try {
            this.a(n, t)
        } finally {
            var r = this.e.getHandler(i);
            r && this.e.removeHandler(i, r)
        }
    },
    h: function(n, t) {
        var i = n.getName();
        this.g[i] = t;
        this.a(n, t)
    },
    j: function(n) {
        var t = n.getName();
        delete this.g[t]
    }
};
_j.J = function(n) {
    this.f = n
};
_j.J.prototype = {
    g: null,
    f: null,
    e: function() {
        if (this.f) {
            var n = this.f;
            this.f = null;
            this.g = n()
        }
        return this.g
    },
    c: function() {
        return !this.f
    }
};
ComponentTypeRecord.registerClass("ComponentTypeRecord");
SourceFileRecord.registerClass("SourceFileRecord");
StyleFileRecord.registerClass("StyleFileRecord");
_j.D.registerClass("_j.D");
_j.bY.registerClass("_j.bY");
_j.S.registerClass("_j.S", _j.bY, _j.bs, Sys.IDisposable);
_j.bk.registerClass("_j.bk", _j.S);
_j.bV.registerClass("_j.bV", _j.bk);
_j.cv.registerClass("_j.cv");
_j.bL.registerClass("_j.bL", _j.cv);
_j.P.registerClass("_j.P", _j.S);
_j.g.registerClass("_j.g", _j.P);
_j.ct.registerClass("_j.ct");
_j.Y.registerClass("_j.Y", _j.ct);
_j.r.registerClass("_j.r", null, _j.bP);
_j.bZ.registerClass("_j.bZ", null, Sys.IDisposable);
_j.bX.registerClass("_j.bX", _j.bZ, _j.cn);
_j.bg.registerClass("_j.bg", _j.bX);
_j.f.registerClass("_j.f", _j.bX);
_j.bG.registerClass("_j.bG", _j.cv);
_j.w.registerClass("_j.w", _j.P);
_j.bH.registerClass("_j.bH", _j.ct);
_j.bI.registerClass("_j.bI", _j.cv);
_j.b.registerClass("_j.b", null, _j.cf);
_j.b.a.registerClass("_j.b.a");
_j.bM.registerClass("_j.bM");
_j.i.registerClass("_j.i", _j.bk);
_j.c.registerClass("_j.c", _j.i);
_dtl.registerClass("_dtl", null, _j.t);
_j.bl.registerClass("_j.bl");
_j.bh.registerClass("_j.bh");
_j.O.registerClass("_j.O");
_j.bc.registerClass("_j.bc");
_j.X.registerClass("_j.X");
_j.bx.registerClass("_j.bx");
_j.bt.registerClass("_j.bt");
_j.bu.registerClass("_j.bu");
_j.ba.registerClass("_j.ba");
_j.bK.registerClass("_j.bK", _j.b, _j.ca, _j.cb, _j.cf);
_j.bd.registerClass("_j.bd", _j.i);
_j.x.registerClass("_j.x", null, _j.ch);
_j.A.registerClass("_j.A", null, _j.cr);
_j.l.registerClass("_j.l", _j.S, _j.M, _j.bs, Sys.IDisposable, _j.cg);
_j.bi.registerClass("_j.bi", _j.i);
_j.bR.registerClass("_j.bR", null, _j.cl);
_j.bS.registerClass("_j.bS", null, _j.cm);
_j.bJ.registerClass("_j.bJ");
_j.bm.registerClass("_j.bm");
_j.bq.registerClass("_j.bq", null, _j.co);
_j.d.registerClass("_j.d", null, _j.cp);
_j.K.registerClass("_j.K");
_j.V.registerClass("_j.V");
_j.bW.registerClass("_j.bW", _j.bZ);
_j.R.registerClass("_j.R", _j.bW);
_j.H.registerClass("_j.H", _j.bW);
_j.m.registerClass("_j.m", null, _j.v);
_j.a.registerClass("_j.a", _j.bZ, _j.cq, Sys.IDisposable);
_j.bT.registerClass("_j.bT");
_j.G.registerClass("_j.G", null, _j.p);
_j.q.registerClass("_j.q", null, _j.bU);
_j.j.registerClass("_j.j");
_j.J.registerClass("_j.J");
_j.D.c = 0;
_j.g.a = new _j.g(_j.P.a, _j.A.f);
_j.w.a = null;
_j.w.b = null;
_dh.b = [];
_dh.c = [];
_dh.d = null;
_dtl.a = null;
_j.k.J = null;
_j.x.g = new _j.x(window.self);
_j.x.j = "ontouchstart" in window.document;
_j.x.i = !!window.navigator && window.navigator.userAgent.indexOf("Trident") > 0 && (window.navigator.msMaxTouchPoints > 0 || window.navigator.maxTouchPoints > 0);
_j.x.f = !0;
_j.n.d = 0;
_j.n.c = null;
_j.A.i = new _j.A(0);
_j.A.c = new _j.A(1);
_j.A.d = new _j.A(3);
_j.A.f = new _j.A(7);
_j.A.k = new _j.A(8);
_j.A.e = new _j.A(2);
_j.A.g = new _j.A(4);
_j.A.b = new _j.A(5);
_j.A.h = new _j.A(6);
_j.A.a = new _j.A(201);
_j.A.j = new _j.A(9);
_j.be.a = "boot";
_j.be.b = ["offline", "diagnostics", "boot", "textboys"];
_j.bq.a = 0;
_j.h.g = new RegExp("[\n\r]+");
_j.m.c = new Date;
_j.m.b = null;
_j.F.d = {};
_j.F.b = {};
_j.F.h = {};
_j.F.c = null;
_j.F.i = "Mouse";
_j.F.j = "Template look up failed for id {0}.";
_j.F.g = null;
_j.F.e = null;
_j.F.f = null;
_j.e.h = _j.e.k;
_j.e.j = _j.e.k;
_j.e.e = 2;
_j.e.f = !0;
_j.i.g = _j.x.b;
_j.i.d = _j.x.k;
_j.i.e = _j.x.m;
_j.i.k = _j.i.n;
_j.i.m = !1;
_j.i.b = new _j.K("IsHovered", Boolean, _j.i, !1);
_j.i.l = new RegExp("\\S+", "g");
_j.i.h = null;
_j.i.j = null;
_j.i.i = null;
_j.i.$$cctor();
_j.G.b = null;
Type.registerNamespace("_jc");
_jc.c = function() {};
_jc.c.registerInterface("_jc.c");
_jc.b = function() {
    this.i = Function.createDelegate(this, this.p);
    this.k = Function.createDelegate(this, this.q);
    _jc.b.initializeBase(this)
};
_jc.b.prototype = {
    h: null,
    c: null,
    d: null,
    e: null,
    g: !0,
    a: function(n) {
        if (n !== this.h) {
            this.r(this.h, n);
            this.h = n;
            this.by("ItemContainer")
        }
        return n
    },
    b: function(n) {
        if (n !== this.c) {
            this.s(this.c, n);
            this.c = n;
            this.by("Items")
        }
        return n
    },
    f: function(n) {
        if (n !== this.d) {
            this.o(this.d, this.e, n, this.e);
            this.d = n;
            this.by("SelectedItem")
        }
        return n
    },
    j: function(n) {
        if (n !== this.e) {
            this.o(this.d, this.e, this.d, n);
            this.e = n;
            this.by("SelectionCssClass")
        }
        return n
    },
    o: function(n, t, i, r) {
        for (var f = 0; this.c && f < this.c.x.length; f++) {
            var u = this.c.x[f];
            u.V() === n && u.bt(t);
            u.V() === i && u.bo(r)
        }
    },
    r: function(n, t) {
        n && n.bj("keydown", "SingleSelectionStrategy");
        this.g && t && t.bf("keydown", this.k, "SingleSelectionStrategy")
    },
    s: function(n, t) {
        if (n) {
            for (var r = 0; r < n.x.length; r++) this.l(n.x[r]);
            n.e(this.i)
        }
        if (t) {
            for (var i = 0; t && i < t.x.length; i++) this.n(t.x[i]);
            t.d(this.i)
        }
    },
    p: function(n, t) {
        if (t.c) {
            if (t.c === 2)
                for (var i = 0; i < t.b.length; i++) this.l(t.b[i])
        } else
            for (var r = 0; r < t.a.length; r++) this.n(t.a[r])
    },
    n: function(n) {
        var t = this;
        n.bf("click", function(i) {
            t.f(n.V())
        }, "SingleSelectionStrategy");
        this.d === n.V() && n.bo(this.e);
        n.dh() < 0 && n.A(0)
    },
    l: function(n) {
        n.bj("click", "SingleSelectionStrategy");
        if (this.d === n.V()) {
            n.bt(this.e);
            this.f(null)
        }
    },
    q: function(n) {
        if (this.c.x.length) switch (n.a()) {
            case 38:
                this.f(this.c.x[Math.max(this.m() - 1, 0)].V());
                break;
            case 40:
                this.f(this.c.x[Math.min(this.m() + 1, this.c.x.length - 1)].V());
                break;
            case 36:
                this.f(this.c.x[0].V());
                break;
            case 35:
                this.f(this.c.x[this.c.x.length - 1].V());
                break
        }
    },
    m: function() {
        for (var n = 0; n < this.c.x.length; n++)
            if (this.d === this.c.x[n].V()) return n;
        return -1
    }
};
_jc.a = function(n) {
    this.e = Function.createDelegate(this, this.p);
    this.b = new _j.l;
    _jc.a.initializeBase(this, [n])
};
_jc.a.prototype = {
    a: null,
    f: null,
    c: null,
    i: function(n) {
        if (n !== this.a) {
            this.a && this.a.e(this.e);
            this.a = n;
            this.a && this.Z() && this.a.d(this.e);
            this.j();
            this.by("DataSource")
        }
        return n
    },
    d: function(n) {
        if (n !== this.f) {
            this.f = n;
            this.j();
            this.by("ItemFactory")
        }
        return n
    },
    k: function(n) {
        if (this.c) throw Error.invalidOperation("ListView.SelectionStrategy cannot be changed once it is set.");
        this.c = n;
        this.c.a(this);
        this.c.b(this.b);
        _j.bk.isInstanceOfType(this.c) && this.c.fe(this);
        return n
    },
    G: function() {
        _j.i.prototype.G.call(this);
        this.a && this.a.d(this.e);
        this.j()
    },
    M: function() {
        _j.i.prototype.M.call(this);
        this.a && this.a.e(this.e);
        this.m()
    },
    j: function() {
        if (this.Z()) {
            this.m();
            this.n()
        }
    },
    m: function() {
        for (var n = 0; n < this.b.x.length; n++) this.b.x[n].dispose();
        this.b.g();
        this.z.innerHTML = ""
    },
    n: function() {
        this.a && this.f && this.g(0, this.a.b())
    },
    p: function(n, t) {
        switch (t.c) {
            case 0:
                this.g(t.d, t.a.length);
                break;
            case 1:
                this.o(t.d, t.e, t.a.length);
                break;
            case 2:
                this.h(t.d, t.b.length, !0);
                break;
            case 3:
                this.h(t.d, t.a.length, !0);
                this.g(t.d, t.a.length);
                break;
            case 4:
                this.h(0, this.b.x.length, !0);
                this.g(0, this.a.b());
                break
        }
    },
    g: function(n, t) {
        for (var r = n; r < n + t; r++) {
            var i = this.f();
            i.ba(this.a.c(r));
            this.l(i, r);
            i.bm();
            this.q(i)
        }
    },
    h: function(n, t, i) {
        for (var u = [], f = 0; f < t; f++) {
            var r = this.b.x[n];
            r.z.parentNode.removeChild(r.z);
            this.b.n(n);
            Array.add(u, r);
            i && r.dispose()
        }
        return u
    },
    o: function(n, t, i) {
        for (var u = this.h(n, i, !1), r = 0; r < i; r++) this.l(u[r], r + t)
    },
    l: function(n, t) {
        if (t === this.b.x.length) {
            this.z.appendChild(n.z);
            this.b.a(n)
        } else {
            this.z.insertBefore(n.z, this.b.x[t].z);
            this.b.t(t, n)
        }
    },
    q: function(n) {}
};
_jc.b.registerClass("_jc.b", _j.bk, _jc.c);
_jc.a.registerClass("_jc.a", _j.i);
Type.registerNamespace("_ff");
_ff.o = function() {};
_ff.o.registerInterface("_ff.o");
_ff.k = function() {};
_ff.k.registerInterface("_ff.k");
_ff.y = function() {};
_ff.y.prototype = {
    Undefined: 0,
    Diagnostics: 1,
    UI: 100,
    SingleDoc: 101,
    MailModuleUI: 200,
    MailModulePrefetch: 201,
    ReadingPaneRefresh: 202,
    MailModuleNotification: 203,
    MailModuleTailoredXpDataFetch: 204,
    ReadingPaneTagWell: 205,
    MailModuleConnectorCardsSwiftDataFetch: 206,
    MailModuleLeftNavigationPane: 207,
    MailModuleReadingPane: 208,
    CalendarUI: 300,
    PeopleUI: 400,
    TaskUI: 500,
    OptionsUI: 600,
    OptionModulePrefetch: 601,
    GroupMailModuleListViewRefresh: 700,
    GroupMailModuleListViewLoadMore: 701,
    GroupModulePrefetch: 702,
    GroupModuleCacheRefresh: 703,
    Offline: 1e3,
    Sync: 1100,
    SyncCalendar: 1101,
    SyncConversationItems: 1102,
    SyncMessageItems: 1103,
    WebExtensions: 1300,
    UnitTest: 2e3
};
_ff.y.registerEnum("_ff.y", !1);
_ff.D = function() {};
_ff.D.prototype = {
    touchStart: 0,
    touchMove: 1,
    touchEnd: 2,
    click: 3,
    rightClick: 4,
    mouseOver: 5,
    mouseOut: 6,
    keyDown: 7,
    swipe: 8,
    dragStart: 9,
    dragMove: 10,
    dragStop: 11,
    keyUp: 12,
    focus: 13,
    blur: 14,
    change: 15,
    doubleClick: 16,
    mouseDown: 17,
    mouseUp: 18,
    nativeClick: 19,
    copy: 20,
    selectStart: 21,
    contextMenu: 22,
    drop: 23,
    mouseMove: 24,
    dropActivate: 25,
    dropDeactivate: 26,
    paste: 27,
    keyPress: 28,
    focusIn: 29,
    focusOut: 30,
    scroll: 31
};
_ff.D.registerEnum("_ff.D", !1);
_ff.C = function() {};
_ff.C.prototype = {
    NotConnected: 0,
    Continue: 100,
    OK: 200,
    Created: 201,
    Accepted: 202,
    Moved: 301,
    Redirect: 302,
    RedirectMethod: 303,
    RedirectKeepVerb: 307,
    Unauthorized: 401,
    NotFound: 404,
    RequestTimeout: 408,
    PreconditionFailed: 412,
    SessionTimeout: 440,
    RetryWith: 449,
    AccountIsLocked: 456,
    InternalServerError: 500,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    LastValidStatusCode: 599
};
_ff.C.registerEnum("_ff.C", !1);
_ff.b = function() {};
_ff.b.registerInterface("_ff.b");
_ff.F = function() {};
_ff.F.registerInterface("_ff.F");
_ff.t = function() {};
_ff.t.registerInterface("_ff.t");
_ff.u = function() {};
_ff.u.registerInterface("_ff.u");
_ff.H = function() {};
_ff.H.registerInterface("_ff.H");
_ff.a = function() {};
_ff.a.registerInterface("_ff.a");
_ff.I = function() {};
_ff.f = function(n, t, i) {
    this.b = n;
    this.a = t;
    this.c = i
};
_ff.f.prototype = {
    b: null,
    c: null,
    a: null,
    e: function() {
        return this.b
    }
};
_ff.h = function(n, t, i) {
    this.b = n;
    this.c = t;
    $a(i) || (this.a = i)
};
_ff.h.prototype = {
    b: 0,
    c: 0,
    a: 0
};
_ff.i = function() {};
_ff.i.b = function(n) {
    return _ff.e.a(n, !0)
};
_ff.i.a = function(n, t) {
    var u = 0;
    var r = n;
    for (var i in r) {
        var f = {
            key: i,
            value: r[i]
        };
        t && f.value === undefined || u++
    }
    return u
};
_ff.s = function() {};
_ff.s.b = function(n, t, i) {
    var r = _ff.s.a(function(t) {
        return n[t]
    }, t, i, 0, n.length - 1);
    Array.insert(n, r, t)
};
_ff.s.a = function(n, t, i, r, u) {
    for (var f = 0; r <= u;) {
        f = Math.floor((r + u) / 2);
        var e = i(t, n(f));
        if (e)
            if (e < 0) {
                u = f - 1;
                if (f <= r) return Math.max(r, u)
            } else {
                r = f + 1;
                if (f >= u) return r
            }
        else return f
    }
    return f
};
_ff.E = function() {};
_ff.A = function(n) {
    this.a = n
};
_ff.A.prototype = {
    a: null
};
_ff.B = function(n) {
    this.a = n
};
_ff.B.prototype = {
    a: null
};
_ff.x = function(n) {
    this.a = n
};
_ff.x.prototype = {
    a: null
};
_ff.e = function() {};
_ff.e.f = function(n) {
    _j.s.a(n, "dataContractFactory");
    if (_ff.e.c) throw Error.invalidOperation("RegisterDataContractFactory can only be called once");
    _ff.e.c = n
};
_ff.e.a = function(n, t, i) {
    var u;
    try {
        u = _ff.e.e(n, t, i)
    } catch (f) {
        var r = n.__type;
        _j.e.d(_ff.c.g, f, r);
        throw Error.create(String.format("Error occurred while cloning, type: {0}, message: {1}", r, f.message));
    }
    return u
};
_ff.e.b = function(n, t) {
    return _ff.e.d(n, t)
};
_ff.e.e = function(n, t, i) {
    var r;
    if (Date.isInstanceOfType(n)) return new Date(n.getTime());
    else if (Array.isInstanceOfType(n)) r = [];
    else if (Function.isInstanceOfType(n)) return n;
    else if (Object.isInstanceOfType(n)) {
        var f = Object.getType(n);
        r = i && f.getName() !== "Object" ? new f : {}
    } else return n;
    var o = n;
    for (var e in o) {
        var u = {
            key: e,
            value: o[e]
        };
        (!t || n.hasOwnProperty(u.key)) && (r[u.key] = _ff.e.e(u.value, t, i))
    }
    return r
};
_ff.e.d = function(n, t) {
    if (!n && !t) return !0;
    if (!n || !t) return !1;
    if (n === t) return !0;
    if (String.isInstanceOfType(n) || Number.isInstanceOfType(n) || Date.isInstanceOfType(n)) return !1;
    var r = n;
    var i = t;
    var l = "__type" in r;
    var c = "__type" in i;
    if (l && c && r.__type !== i.__type) return !1;
    var a = _ff.i.a(r, !0);
    l && --a;
    var y = _ff.i.a(i, !0);
    c && --y;
    if (a !== y) return !1;
    var v = r;
    for (var h in v) {
        var f = {
            key: h,
            value: v[h]
        };
        var u = f.key;
        if (u !== "__type") {
            var s = f.value;
            if (!(u in i) && f.value !== undefined) return !1;
            var o = i[u];
            var e = Function.isInstanceOfType(s);
            var p = Function.isInstanceOfType(o);
            if (e !== p) return !1;
            if (!e && !_ff.e.d(s, o)) return !1
        }
    }
    return !0
};
_ff.l = function() {};
_ff.l.d = function(n, t) {
    return !$a(n) && !$a(t) && n.getTime() === t.getTime()
};
_ff.l.a = function() {
    var n = new Date;
    var t = n.getTime() + n.getTimezoneOffset() * 6e4;
    return new Date(t)
};
_ff.l.c = function(n, t) {
    _ff.l.e(n, "dt1");
    _ff.l.e(t, "dt2");
    return n - t
};
_ff.l.e = function(n, t) {
    $a(n) && Error.argumentNull(t, "Argument can't be null or undefined")
};
_ff.d = function(n, t, i, r, u) {
    _ff.d.initializeBase(this);
    this.k(n);
    this.j(t);
    this.m(i || null);
    this.f = !!r;
    this.i = !!u
};
_ff.d.prototype = {
    e: null,
    c: null,
    b: null,
    d: !1,
    g: !0,
    j: function(n) {
        if (this.e !== n) {
            this.e = n;
            this.by("Label")
        }
        return n
    },
    m: function(n) {
        if (this.c !== n) {
            this.c = n;
            this.bA("Description", "HasNoDescription")
        }
        return n
    },
    l: function() {
        return _j.h.b(this.c)
    },
    f: !1,
    i: !1,
    k: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.by("ClickCommand")
        }
        return n
    },
    h: function(n) {
        if (this.d !== n) {
            this.d = n;
            this.by("IsHidden")
        }
        return n
    },
    a: function(n) {
        if (this.g !== n) {
            this.g = n;
            this.by("IsEnabled")
        }
        return n
    }
};
_ff.z = function() {};
_ff.m = function(n) {
    this.a = n
};
_ff.m.prototype = {
    a: 0
};
_ff.v = function() {};
_ff.r = function(n, t) {
    this.c = n;
    this.b = t
};
_ff.r.prototype = {
    c: null,
    b: 0,
    a: null
};
_ff.q = function(n, t) {
    this.l = Function.createDelegate(this, this.m);
    _ff.q.initializeBase(this, [_j.P.a, t]);
    this.k = n;
    var i = this.b;
    this.f(this.l);
    this.c(i)
};
_ff.q.prototype = {
    k: null,
    h: null,
    m: function() {
        if (!this.h) throw Error.invalidOperation("Can't raise command when no event arguments specified.");
        this.k(this.h);
        this.h = null
    }
};
_ff.g = function() {};
_ff.g.a = function(n) {
    if (_j.h.a(n)) return n;
    var t = n.replace(_ff.g.c, "&amp;");
    t = t.replace(_ff.g.k, "&lt;");
    t = t.replace(_ff.g.j, "&gt;");
    t = t.replace(_ff.g.d, "&#39;");
    t = t.replace(_ff.g.l, "&quot;");
    return t
};
_ff.g.b = function(n) {
    if (_j.h.a(n)) return n;
    var t = n.replace(_ff.g.i, '"');
    t = t.replace(_ff.g.f, "'");
    t = t.replace(_ff.g.g, ">");
    t = t.replace(_ff.g.h, "<");
    t = t.replace(_ff.g.e, "&");
    return t
};
_ff.j = function() {};
_ff.j.d = function(n) {
    if (_ff.j.c !== n) {
        _ff.j.c = n;
        if (_ff.j.c) {
            _ff.j.a = 39;
            _ff.j.b = 37
        } else {
            _ff.j.a = 37;
            _ff.j.b = 39
        }
    }
    return n
};
_ff.c = function(n) {
    this.c = n
};
_ff.c.prototype = {
    c: 0,
    a: function() {
        return this.c
    },
    b: function() {
        return "O365"
    }
};
_ff.w = function() {
    this.i = this.$$gta["_ff.w"].T === Number || Type.isEnum(this.$$gta["_ff.w"].T) ? 0 : this.$$gta["_ff.w"].T === Boolean ? !1 : null;
    _ff.w.$$(this.$$gta["_ff.w"].T).initializeBase(this)
};
_ff.w.$$ = function(n) {
    var u = _ff.__tc = _ff.__tc || {};
    var t = "w" + "$" + n.getName().replace(/\./g, "_");
    if (!u[t]) {
        var r = u[t] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _ff.w.apply(this, t)
        };
        var o = _j.l;
        r.registerClass("_ff.__tc." + t, o);
        var s = {
            "_ff.w": {
                T: n
            },
            ctor: _ff.w
        };
        r.prototype.$$gta = s;
        var e = _ff.w.prototype;
        for (var f in e) {
            var i = {
                key: f,
                value: e[f]
            };
            "constructor" !== i.key && (r.prototype[i.key] = i.value)
        }
    }
    return u[t]
};
_ff.w.prototype = {
    S: function(n) {
        this.N.addHandler("CollectionChanged", n)
    },
    U: function(n) {
        this.N.removeHandler("CollectionChanged", n)
    },
    C: function(n, t, i) {
        try {
            this.i = i;
            this.bh(n, t)
        } finally {
            this.i = this.$$gta["_ff.w"].T === Number || Type.isEnum(this.$$gta["_ff.w"].T) ? 0 : this.$$gta["_ff.w"].T === Boolean ? !1 : null
        }
    },
    O: function(n, t, i) {
        try {
            this.i = i;
            this.bi(n, t)
        } finally {
            this.i = this.$$gta["_ff.w"].T === Number || Type.isEnum(this.$$gta["_ff.w"].T) ? 0 : this.$$gta["_ff.w"].T === Boolean ? !1 : null
        }
    },
    H: function(n, t) {
        try {
            this.i = t;
            this.ba(n)
        } finally {
            this.i = this.$$gta["_ff.w"].T === Number || Type.isEnum(this.$$gta["_ff.w"].T) ? 0 : this.$$gta["_ff.w"].T === Boolean ? !1 : null
        }
    },
    T: function(n) {
        try {
            this.i = n;
            this.g()
        } finally {
            this.i = this.$$gta["_ff.w"].T === Number || Type.isEnum(this.$$gta["_ff.w"].T) ? 0 : this.$$gta["_ff.w"].T === Boolean ? !1 : null
        }
    },
    A: function(n, t) {
        var i;
        try {
            this.i = t;
            i = this.p(n, !0)
        } finally {
            this.i = this.$$gta["_ff.w"].T === Number || Type.isEnum(this.$$gta["_ff.w"].T) ? 0 : this.$$gta["_ff.w"].T === Boolean ? !1 : null
        }
        return i
    },
    y: function(n, t) {
        try {
            this.i = t;
            this.n(n)
        } finally {
            this.i = this.$$gta["_ff.w"].T === Number || Type.isEnum(this.$$gta["_ff.w"].T) ? 0 : this.$$gta["_ff.w"].T === Boolean ? !1 : null
        }
    },
    D: function(n, t, i, r) {
        try {
            this.i = r;
            this.v(n, t, i)
        } finally {
            this.i = this.$$gta["_ff.w"].T === Number || Type.isEnum(this.$$gta["_ff.w"].T) ? 0 : this.$$gta["_ff.w"].T === Boolean ? !1 : null
        }
    },
    I: function(n, t, i) {
        try {
            this.i = i;
            this.r(n, t)
        } finally {
            this.i = this.$$gta["_ff.w"].T === Number || Type.isEnum(this.$$gta["_ff.w"].T) ? 0 : this.$$gta["_ff.w"].T === Boolean ? !1 : null
        }
    },
    bg: function(n, t, i, r, u, f) {
        var e = new _ff.G(t, i, u, f, r, this.i);
        n(this, e)
    }
};
_ff.G = function(n, t, i, r, u, f) {
    _ff.G.initializeBase(this, [n, t, i, r, u]);
    this.f = f
};
_ff.G.prototype = {
    f: null
};
_ff.n = function(n) {
    _ff.n.initializeBase(this);
    this.i = n
};
_ff.n.a = function(n, t, i) {
    return _ff.s.a(function(n) {
        return i.x[n]
    }, n, t, 0, i.x.length - 1)
};
_ff.n.prototype = {
    i: null,
    a: function(n) {
        _j.l.prototype.t.call(this, _ff.n.a(n, this.i, this), n)
    },
    j: function(n) {
        for (var t = 0, i = n.length; t < i; ++t) this.a(n[t])
    },
    t: function(n, t) {
        throw Error.notImplemented("Inserting items at a particular index of SortedObservableCollection is not supported.");
    },
    s: function(n, t) {
        throw Error.notImplemented("Inserting items at a particular index of SortedObservableCollection is not supported.");
    }
};
_ff.p = function() {};
_ff.p.b = function(n, t) {
    return (n % t + t) % t
};
_ff.p.a = function(n, t) {
    return Math.floor(Math.random() * (t - n + 1) + n)
};
_ff.f.registerClass("_ff.f");
_ff.h.registerClass("_ff.h");
_ff.E.registerClass("_ff.E");
_ff.A.registerClass("_ff.A");
_ff.B.registerClass("_ff.B");
_ff.x.registerClass("_ff.x");
_ff.e.registerClass("_ff.e", null, _ff.F);
_ff.d.registerClass("_ff.d", _j.S);
_ff.z.registerClass("_ff.z");
_ff.m.registerClass("_ff.m");
_ff.v.registerClass("_ff.v");
_ff.r.registerClass("_ff.r");
_ff.q.registerClass("_ff.q", _j.g);
_ff.c.registerClass("_ff.c", null, _j.cr);
_ff.G.registerClass("_ff.G", _j.V);
_ff.n.registerClass("_ff.n", _j.l);
_ff.e.c = null;
_ff.l.b = new Date(-271821, 3, 20, 0, 0, 0, 0);
_ff.g.c = new RegExp("&", "g");
_ff.g.k = new RegExp("<", "g");
_ff.g.j = new RegExp(">", "g");
_ff.g.d = new RegExp("'", "g");
_ff.g.l = new RegExp('"', "g");
_ff.g.e = new RegExp("&amp;", "g");
_ff.g.h = new RegExp("&lt;", "g");
_ff.g.g = new RegExp("&gt;", "g");
_ff.g.f = new RegExp("&#39;", "g");
_ff.g.i = new RegExp("&quot;", "g");
_ff.j.a = 37;
_ff.j.b = 39;
_ff.j.c = !1;
_ff.c.h = new _ff.c(0);
_ff.c.b = new _ff.c(1);
_ff.c.f = new _ff.c(2);
_ff.c.g = new _ff.c(3);
_ff.c.n = new _ff.c(4);
_ff.c.i = new _ff.c(5);
_ff.c.k = new _ff.c(6);
_ff.c.a = new _ff.c(7);
_ff.c.l = new _ff.c(8);
_ff.c.e = new _ff.c(10);
_ff.c.c = new _ff.c(11);
_ff.c.m = new _ff.c(9);
_ff.c.j = new _ff.c(12);
_ff.c.d = new _ff.c(13);
Type.registerNamespace("_fm");
_fm.y = function() {};
_fm.y.registerInterface("_fm.y");
_fm.z = function() {};
_fm.z.registerInterface("_fm.z");
_fm.G = function() {};
_fm.G.registerInterface("_fm.G");
_fm.A = function() {};
_fm.A.registerInterface("_fm.A");
_fm.r = function() {};
_fm.r.prototype = {
    none: 0,
    firstLoad: 1,
    load: 2,
    loadPrevious: 3,
    deltaChange: 4,
    noChunking: 5
};
_fm.r.registerEnum("_fm.r", !1);
_fm.E = function() {};
_fm.E.registerInterface("_fm.E");
_fm.m = function() {};
_fm.m.registerInterface("_fm.m");
_fm.s = function() {};
_fm.s.registerInterface("_fm.s");
_fm.F = function() {};
_fm.F.registerInterface("_fm.F");
_fm.w = function() {
    _fm.w.initializeBase(this);
    this.d = 1
};
_fm.w.prototype = {
    k: function() {
        return new _fm.i
    }
};
_fm.l = function(n, t, i, r, u, f, e, o, s, h) {
    this.C = Function.createDelegate(this, this.bl);
    this.B = Function.createDelegate(this, this.bk);
    this.Y = Function.createDelegate(this, this.bm);
    this.Z = Function.createDelegate(this, this.bp);
    _fm.l.initializeBase(this);
    this.s = n;
    this.w = t;
    this.e(_j.h.a(r) ? n : r);
    this.N = u;
    this.bc(f);
    this.q = e;
    this.v = o;
    this.d = i;
    this.O = s;
    this.z = h;
    this.r = _fm.q.a();
    this.u(new _j.g(this.Z, _j.A.f));
    this.x = !0
};
_fm.l.prototype = {
    w: null,
    ba: "MenuName",
    s: null,
    a: null,
    r: null,
    q: null,
    n: "ContextMenuView",
    O: !1,
    D: !1,
    E: null,
    Q: function(n) {
        this.s = n;
        this.by(this.ba);
        return n
    },
    bn: function(n) {
        if (this.r !== n) {
            this.r = n;
            this.by("DropMenuImageId")
        }
        return n
    },
    P: function(n) {
        if (this.q !== n) {
            this.q = n;
            this.bA("ButtonImageId", "ShowButtonImage")
        }
        return n
    },
    N: !1,
    bj: function() {
        return !!this.q
    },
    bc: function(n) {
        if (this.D !== n) {
            this.D = n;
            this.by("HideDropMenuImage")
        }
        return n
    },
    bb: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.by("DropDownContextMenu")
        }
        return n
    },
    v: null,
    bo: function(n) {
        if (this.E !== n) {
            this.E = n;
            this.by("LightningTemplateId")
        }
        return n
    },
    k: function() {
        var i = new _fm.e(new Array(0));
        var n = new _fm.j(this.s, null, i);
        n.l(this.l);
        n.y(this.h());
        var t = this;
        this.w(function(i) {
            n.E(i);
            n.O(t.n)
        });
        return n
    },
    y: function() {
        this.a && this.a.m(!1);
        _fm.C.prototype.y.call(this)
    },
    bz: function() {
        this.w = null;
        this.I(null);
        _fm.D.prototype.bz.call(this)
    },
    bp: function() {
        this.w(this.Y)
    },
    bm: function(n) {
        if (this.a) {
            this.a.rpcl("IsShown", this.B);
            this.a.bq(this.C)
        }
        this.bb(n);
        if (this.a) {
            if (this.O && this.a.p.x.length === 1) {
                this.a.p.x[0].j.a();
                this.t.bw(this);
                return
            }
            this.a.apcl("IsShown", this.B);
            this.a.bK(this.C);
            this.a.m(!0)
        }
    },
    bl: function(n) {
        this.t.bw(this)
    },
    bk: function(n, t) {
        if (!this.a.q()) {
            this.a.rpcl("IsShown", this.B);
            this.a.bq(this.C);
            this.bb(null)
        }
    }
};
_fm.x = function() {
    _fm.x.initializeBase(this);
    this.u(actionCommand);
    this.c(!0);
    this.e(displayName);
    this.a = displayName;
    this.n = iconUrl;
    this.m = fallbackIconID
};
_fm.x.prototype = {
    a: null,
    n: null,
    m: null,
    k: function() {
        var n = new _fm.c(this.a, null, this.g(), !1, null, null);
        n.l(this.a);
        return n
    }
};
_fm.C = function() {
    this.bd = Function.createDelegate(this, this.br);
    _fm.C.initializeBase(this)
};
_fm.C.prototype = {
    f: !0,
    H: !0,
    o: !1,
    t: null,
    l: null,
    j: null,
    p: null,
    b: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.bA("IsShown", "IsShownOnBar")
        }
        return n
    },
    S: function() {
        return this.f && !this.o && !this.d
    },
    d: 0,
    h: function() {
        return this.H && !!this.j && this.j.b
    },
    c: function(n) {
        if (this.H !== n) {
            this.H = n;
            this.by("IsEnabled")
        }
        return n
    },
    T: function(n) {
        if (this.t !== n) {
            this.t = n;
            this.by("ParentCommandingBarViewModel")
        }
        return n
    },
    e: function(n) {
        if (this.l !== n) {
            this.l = n;
            this.by("TooltipText")
        }
        return n
    },
    bg: function(n) {
        if (this.o !== n) {
            this.o = n;
            this.y();
            this.by("IsShownOnBar")
        }
        return n
    },
    R: 0,
    G: null,
    g: function() {
        if (!this.p && this.j) {
            var n = this;
            this.p = new _j.w(this.bd, this.j.g, this.j, "CanExecute", function() {
                return n.j.b
            })
        }
        return this.p
    },
    be: function() {
        return this.h() && !this.d
    },
    bq: function() {
        return _j.G.a().I || _j.G.a().K || _j.G.a().O ? 2 : 25
    },
    i: !1,
    u: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.bA("ActionCommand", "ActionAndInstrumentationCommand")
        }
        return n
    },
    x: !1,
    y: function() {},
    br: function() {
        this.bf(this.j)
    },
    bf: function(n) {
        this.G && this.G(this.R);
        n && n.b && n.a();
        this.x || this.t.bw(this)
    },
    bz: function() {
        this.j = null;
        if (this.p) {
            this.p.dispose();
            this.p = null
        }
        _j.S.prototype.bz.call(this)
    }
};
_fm.D = function() {
    this.bi = Function.createDelegate(this, this.X);
    this.bh = Function.createDelegate(this, this.bv);
    this.U = Function.createDelegate(this, this.bt);
    _fm.D.initializeBase(this)
};
_fm.D.prototype = {
    A: !1,
    m: null,
    V: null,
    z: null,
    I: function(n) {
        if (this.m !== n) {
            this.m && this.m.rpcl("HidePopup", this.U);
            this.m = n;
            this.m && this.m.apcl("HidePopup", this.U);
            this.by("PopupContentViewModel")
        }
        return n
    },
    W: function(n) {
        if (this.A !== n) {
            this.A = n;
            this.bu();
            this.by("IsPopupVisible")
        }
        return n
    },
    X: function() {
        this.z(this.bh)
    },
    bs: function() {
        this.W(!1);
        this.I(null)
    },
    bz: function() {
        this.I(null);
        this.z = null;
        _fm.C.prototype.bz.call(this)
    },
    bt: function(n, t) {
        this.bs()
    },
    bu: function() {
        this.m.c(this.A)
    },
    bv: function(n) {
        this.I(n);
        this.V = n.b();
        this.W(!0)
    }
};
_fm.t = function(n, t, i) {
    _fm.t.initializeBase(this);
    this.a = n;
    this.u(new _j.g(this.bi, null));
    this.z = t;
    this.d = i
};
_fm.t.prototype = {
    a: null,
    k: function() {
        return null
    }
};
_fm.f = function(n, t, i, r, u, f, e, o, s, h, c) {
    this.L = Function.createDelegate(this, this.V);
    _fm.f.initializeBase(this);
    this.a(t);
    this.u(n);
    this.n = c;
    this.s = i;
    this.d = r;
    this.v = f;
    this.i = e;
    this.C = o;
    this.D = s;
    this.e(_j.h.a(u) ? this.q : u);
    this.x = h;
    this.w = "CommandingBarItemView.ImageAbsolute"
};
_fm.f.prototype = {
    s: null,
    q: null,
    n: null,
    r: null,
    z: null,
    m: function(n) {
        if (this.s !== n) {
            this.s = n;
            this.by("ImageId")
        }
        return n
    },
    a: function(n) {
        if (this.q !== n) {
            this.q = n;
            this.by("DisplayName")
        }
        return n
    },
    v: null,
    C: !1,
    D: !1,
    U: function() {
        if (!this.r && this.n) {
            var n = this;
            this.r = new _j.w(this.L, this.n.g, this.n, "CanExecute", function() {
                return n.n.b
            })
        }
        return this.r
    },
    W: function(n) {
        if (this.z !== n) {
            this.z = n;
            this.by("LightningTemplateId")
        }
        return n
    },
    w: null,
    k: function() {
        var n = new _fm.c(this.q, null, this.g(), !1, null, this.l);
        n.l(this.l);
        return n
    },
    bz: function() {
        this.n = null;
        if (this.r) {
            this.r.dispose();
            this.r = null
        }
        _fm.C.prototype.bz.call(this)
    },
    V: function() {
        this.bf(this.n)
    }
};
_fm.p = function(n, t, i, r, u, f, e) {
    this.s = Function.createDelegate(this, this.z);
    _fm.p.initializeBase(this);
    _j.s.e(n, "commandingBarItems");
    _j.s.a(t, "primaryMenuItem");
    this.m = t;
    this.e(i);
    this.q = r;
    this.d = u;
    this.u(t.j);
    this.a = new _fm.e(n);
    this.r = new _j.g(this.s, _j.A.f);
    this.n = f;
    this.x = e
};
_fm.p.prototype = {
    m: null,
    r: null,
    a: null,
    n: null,
    q: null,
    k: function() {
        for (var r = this.a.p.x.length, t = new Array(r), n = 0; n < r; n++) {
            t[n] = this.a.p.x[n].e();
            t[n].a(this.a.p.x[n].h())
        }
        var i = new _fm.j(this.m.k, null, new _fm.e(t));
        i.l(this.l);
        return i
    },
    w: function(n, t) {
        var i = this.a.p.x[0];
        i.l(t);
        i.n(n);
        this.m.l(t)
    },
    y: function() {
        this.a.m(!1);
        _fm.C.prototype.y.call(this);
        this.v()
    },
    z: function() {
        this.a.m(!0);
        this.v()
    },
    v: function() {
        this.n && this.n(this.a.q())
    }
};
_fm.k = function(n, t, i) {
    this.cg = Function.createDelegate(this, this.bD);
    this.cd = Function.createDelegate(this, this.cR);
    this.cf = Function.createDelegate(this, this.cS);
    _fm.k.initializeBase(this);
    this.Z = new _j.g(this.cf, _ff.c.d);
    this.b = new _j.l;
    this.q = new _fm.l(null, this.cd, 0, n, !0, !1, null, t, !1, null);
    this.q.T(this);
    this.q.bn(_fm.q.b());
    this.bt = i
};
_fm.k.prototype = {
    q: null,
    B: 0,
    M: 0,
    p: !1,
    bb: !1,
    cQ: function(n) {
        this.bB("ItemExecuted", n)
    },
    cT: function(n) {
        this.bF("ItemExecuted", n)
    },
    b: null,
    bC: function(n) {
        if (this.B !== n) {
            this.B = n;
            _j.e.a(_ff.c.d, "CommandingBarViewMode.MarginLeft: set to {0}", this.B);
            this.by("MarginLeft")
        }
        return n
    },
    bc: function(n) {
        if (this.M !== n) {
            this.M = n;
            _j.e.a(_ff.c.d, "CommandingBarViewMode.MarginRight: set to {0}", this.M);
            this.by("MarginRight")
        }
        return n
    },
    bt: null,
    ba: !1,
    L: !1,
    z: 0,
    s: null,
    ci: function(n) {
        if (n !== this.bb) {
            this.bb = n;
            this.by("IsRefreshWidthNeeded")
        }
        return n
    },
    Z: null,
    a: function(n) {
        if (this.b.w(n)) {
            _j.e.c(_ff.c.d, "Trying to add duplicated items into commanding bar");
            return
        }
        n.T(this);
        this.b.a(n)
    },
    bv: function(n, t) {
        if (this.b.w(t)) {
            _j.e.c(_ff.c.d, "Trying to add duplicated items into commanding bar");
            return
        }
        t.T(this);
        this.b.t(n, t)
    },
    ch: function(n) {
        return this.b.w(n)
    },
    bx: function(n) {
        return this.b.p(n, !0)
    },
    bu: function() {
        this.b.g()
    },
    A: function() {
        this.p = !1;
        this.ci(!1);
        this.s && this.s.a()
    },
    bD: function() {
        this.ci(!0);
        this.s && this.s.a()
    },
    bw: function(n) {
        this.bO("ItemExecuted", n)
    },
    bz: function() {
        for (var t = 0, i = this.b.x.length; t < i; t++) {
            var n = this.b.x[t];
            if (n) {
                n.dispose();
                n = null
            }
        }
        this.b.dispose();
        this.b = null;
        _j.S.prototype.bz.call(this)
    },
    cR: function(n) {
        for (var u = new _fm.e(new Array(0)), f = this.b.x.length, i = 0; i < f; i++) {
            var t = this.b.x[i];
            if (t.o || t.f && t.d === 1) {
                var r = t.k();
                if (r) {
                    r.f(this.q.a);
                    u.p.a(r)
                }
            }
        }
        n(u)
    },
    cS: function() {
        this.cU();
        for (var u = 0, r = 0, f = this.b.x.length, i = !1, t = 0; t < f; t++) {
            var n = this.b.x[t];
            n.bg(n.f && n.d === 1);
            n.i || r++;
            if (n.f && !n.i && !n.d) {
                u++;
                u > this.z && n.bg(!0)
            }
            n.o && (i = !0)
        }
        i && this.b.t(r, this.q)
    },
    cU: function() {
        this.b && this.b.w(this.q) && this.b.p(this.q, !0)
    }
};
_fm.e = function(n) {
    this.ba = Function.createDelegate(this, this.bN);
    this.I = -1;
    _fm.e.initializeBase(this);
    this.p = new _j.l;
    this.p.d(this.ba);
    this.O = !0;
    if (n)
        for (var t = 0; t < n.length; ++t) {
            var i = n[t];
            i && this.p.a(i)
        }
};
_fm.e.prototype = {
    x: 150,
    H: !1,
    U: !1,
    O: !1,
    M: !1,
    p: null,
    t: null,
    r: null,
    T: null,
    u: 0,
    s: null,
    N: null,
    B: null,
    z: null,
    A: null,
    C: null,
    bb: null,
    bK: function(n) {
        this.bB("ItemSelected", n)
    },
    bq: function(n) {
        this.bF("ItemSelected", n)
    },
    q: function() {
        return this.U
    },
    m: function(n) {
        if (this.U !== n) {
            this.U = n;
            this.by("IsShown");
            this.U || this.n(null)
        }
        return n
    },
    bh: function(n) {
        if (this.O !== n) {
            this.O = n;
            this.by("IsEnabled")
        }
        return n
    },
    be: function(n) {
        if (this.M !== n) {
            this.M = n;
            this.by("AppendCustomItemCssClass")
        }
        return n
    },
    ck: function() {
        return this.p
    },
    D: function(n) {
        if (this.N !== n) {
            this.N = n;
            this.by("CustomMenuCssClass")
        }
        return n
    },
    E: function(n) {
        if (this.B !== n) {
            this.B = n;
            this.by("CustomItemCssClass")
        }
        return n
    },
    W: function(n) {
        if (this.z !== n) {
            this.z = n;
            this.by("CustomActiveItemCssClass")
        }
        return n
    },
    bf: function(n) {
        if (this.A !== n) {
            this.A = n;
            this.by("CustomInactiveItemCssClass")
        }
        return n
    },
    X: function(n) {
        if (this.C !== n) {
            this.C = n;
            this.by("CustomSelectedItemCssClass")
        }
        return n
    },
    bg: function(n) {
        if (this.bb !== n) {
            this.bb = n;
            this.by("CustomSeparatorCssClass")
        }
        return n
    },
    K: function(n) {
        if (this.r !== n) {
            this.r = n;
            this.by("ContextMenuPopupCloseCommand")
        }
        return n
    },
    bP: function(n) {
        if (this.T !== n) {
            this.T = n;
            this.by("ContextMenuDeleteItemCommand")
        }
        return n
    },
    P: function(n) {
        if (this.u !== n) {
            this.u = n;
            this.by("ContextMenuPopupId")
        }
        return n
    },
    cl: function() {
        return this.s
    },
    n: function(n) {
        if (this.s !== n) {
            !$a(this.s) && _fm.s.isInstanceOfType(this.s) && this.s.d(!1);
            this.s = n;
            !$a(this.s) && _fm.s.isInstanceOfType(this.s) && this.s.g() && this.s.d(!0);
            this.by("SelectedItem")
        }
        return n
    },
    V: function(n) {
        this.bO("ItemSelected", n)
    },
    bN: function(n, t) {
        t.b && this.br(t.b, null);
        t.a && this.br(t.a, this)
    },
    br: function(n, t) {
        for (var i = 0; i < n.length; i++)
            if (n[i]) {
                t;
                n[i].f(t)
            }
    }
};
_fm.n = function(n) {
    _fm.n.initializeBase(this);
    this.i = n
};
_fm.n.prototype = {
    i: null,
    k: null,
    l: null,
    j: !1,
    n: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.by("Text")
        }
        return n
    },
    m: function(n) {
        if (this.k !== n) {
            this.k = n;
            this.by("ImageId")
        }
        return n
    },
    b: function() {
        return "ContextMenuView.ContextMenuHeader"
    },
    c: function() {
        return this.l
    },
    f: function(n) {
        if (this.l !== n) {
            this.l = n;
            this.by("ParentContextMenu")
        }
        return n
    },
    h: function() {
        return this.j
    },
    a: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.by("IsHidden")
        }
        return n
    },
    g: function() {
        return !1
    },
    d: function(n) {
        return n
    },
    e: function() {
        return new _fm.n(this.i)
    }
};
_fm.i = function() {
    _fm.i.initializeBase(this)
};
_fm.i.prototype = {
    j: null,
    i: !1,
    b: function() {
        return "ContextMenuView.ContextMenuSeparator"
    },
    c: function() {
        return this.j
    },
    f: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.by("ParentContextMenu")
        }
        return n
    },
    h: function() {
        return this.i
    },
    a: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.by("IsHidden")
        }
        return n
    },
    g: function() {
        return !1
    },
    d: function(n) {
        return n
    },
    e: function() {
        return new _fm.i
    }
};
_fm.b = function() {
    this.c = {};
    this.e = "Mouse";
    this.f = !1
};
_fm.b.a = function(n) {
    for (var i = [], t = 1; t < arguments.length; ++t) i[t - 1] = arguments[t];
    return _fm.b.b(n, null, i, null, null, null, null, null)
};
_fm.b.b = function(n, t, i, r, u, f, e, o) {
    var h = _fm.b.f(n, t, i, r, u, f, e, o);
    if (h in _fm.b.e) return _fm.b.e[h];
    else {
        var s = new _fm.b;
        s.h = n;
        s.d = t;
        s.g = _fm.b.c(i);
        s.c.Mouse = _fm.b.c(r);
        s.c.TouchWide = _fm.b.c(u);
        s.c.TouchNarrow = _fm.b.c(f);
        s.i = _fm.b.c(e);
        s.j = _fm.b.c(o);
        _fm.b.e[h] = s;
        return s
    }
};
_fm.b.f = function(n, t, i, r, u, f, e, o) {
    var s = new Sys.StringBuilder;
    s.append(n.b);
    s.append(";");
    t && s.append(t.b);
    s.append(";");
    _fm.b.d(s, i);
    _fm.b.d(s, r);
    _fm.b.d(s, u);
    _fm.b.d(s, f);
    _fm.b.d(s, e);
    _fm.b.d(s, o);
    return s.toString()
};
_fm.b.d = function(n, t) {
    t && n.append(_fm.b.c(t));
    n.append(";")
};
_fm.b.c = function(n) {
    var r = "";
    if (n)
        for (var i = n, f = i.length, t = 0; t < f; ++t) {
            var u = i[t];
            r += " " + u
        }
    return r
};
_fm.b.prototype = {
    h: null,
    d: null,
    g: null,
    i: "",
    j: "",
    a: function() {
        return this.k(this.e, this.f)
    },
    e: 0,
    f: !1,
    b: function(n, t) {
        return this.k(n.a(), t.g())
    },
    k: function(n, t) {
        var i = t && this.d ? this.d.b : this.h.b;
        i += " " + this.g;
        i += " " + this.c[n];
        i += " " + (t ? this.j : this.i);
        return i
    }
};
_fm.q = function() {};
_fm.q.e = function() {
    return _fm.d.a("thinking16_white.gif")
};
_fm.q.h = function() {
    return _fm.d.a("thinking32_white.gif")
};
_fm.q.d = function() {
    return _fm.d.a("thinking16_grey.gif")
};
_fm.q.c = function() {
    return _fm.d.a("thinking16_blue.gif")
};
_fm.q.g = function() {
    return _fm.d.a("thinking32_grey.gif")
};
_fm.q.f = function() {
    return _fm.d.a("thinking32_blue.gif")
};
_fm.q.a = function() {
    return _fm.b.a(_fm.a.e, _fm.WebfontSizes.a.e)
};
_fm.q.b = function() {
    return _fm.b.a(_fm.a.h, _fm.WebfontSizes.a.c, "ms-fcl-np-b")
};
_fm.h = function(n) {
    this.b = n
};
_fm.h.a = function(n) {
    _fm.h.b || (_fm.h.b = {});
    var t = _fm.h.b[n];
    if ($a(t)) {
        t = new _fm.h(n);
        _fm.h.b[n] = t
    }
    return t
};
_fm.h.prototype = {
    b: null,
    a: function() {
        return this.b
    }
};
_fm.g = function(n, t, i, r, u, f, e, o) {
    var s = this;
    _fm.g.initializeBase(this, [n, t, $a(i) ? new _j.g(function() {}, _ff.c.f) : i, u, f, null]);
    this.i(r);
    this.m = o;
    e && (this.W = e)
};
_fm.g.prototype = {
    W: "ContextMenuView.DualStateContextMenuItem",
    m: null,
    P: !1,
    G: !1,
    C: !1,
    R: !0,
    Q: function(n) {
        if (this.m !== n) {
            this.m = n;
            this.by("Value")
        }
        return n
    },
    q: function() {
        return this.P
    },
    i: function(n) {
        if (this.P !== n) {
            this.P = n;
            this.by("IsChecked");
            this.by("ShowCheckmark")
        }
        return n
    },
    ba: function(n) {
        if (this.G !== n) {
            this.G = n;
            this.by("IsMouseOverMenuItem")
        }
        return n
    },
    bb: function(n) {
        if (this.C !== n) {
            this.C = n;
            this.by("ShouldOverflowLabel")
        }
        return n
    },
    O: function() {
        return this.R
    },
    y: function(n) {
        if (this.R !== n) {
            this.R = n;
            this.by("ToggleCheckedOnClick")
        }
        return n
    },
    E: function() {
        return this.q()
    },
    b: function() {
        return this.W
    }
};
_fm.u = function(n, t) {
    this.a = n;
    this.b = t
};
_fm.u.prototype = {
    b: !1,
    a: null
};
_fm.B = function(n) {
    this.V = Function.createDelegate(this, this.bl);
    this.W = Function.createDelegate(this, this.bm);
    _fm.B.initializeBase(this);
    if (!n) throw Error.argumentNull("groupGenerator");
    this.P = n;
    this.R()
};
_fm.B.prototype = {
    P: null,
    l: null,
    M: null,
    Y: function(n) {
        if (this.l !== n) {
            this.bf();
            this.l = n;
            this.bj();
            this.R();
            this.by("Source")
        }
        return n
    },
    bu: function(n) {
        if (this.P !== n) {
            this.P = n;
            this.R();
            this.by("GroupGenerator")
        }
        return n
    },
    X: function(n) {
        var t = this;
        return this.m(n, function(n, t) {
            return _fm.m.isInstanceOfType(n) && _fm.m.isInstanceOfType(t) && n.a() === t.a()
        })
    },
    a: function(n) {
        throw Error.invalidOperation("GroupingObservableCollection is read-only.");
    },
    t: function(n, t) {
        throw Error.invalidOperation("GroupingObservableCollection is read-only.");
    },
    bz: function() {
        this.bf();
        _j.l.prototype.bz.call(this)
    },
    bj: function() {
        this.l && (_ff.w.$$(_fm.r).isInstanceOfType(this.l) ? this.l.S(this.W) : this.l.d(this.V))
    },
    bf: function() {
        this.l && (_ff.w.$$(_fm.r).isInstanceOfType(this.l) ? this.l.U(this.W) : this.l.e(this.V))
    },
    bl: function(n, t) {
        this.be(n, t, 0)
    },
    bm: function(n, t) {
        this.be(n, t, t.f)
    },
    be: function(n, t, i) {
        if (this.l === n) switch (t.c) {
            case 0:
                this.bc(t.d, t.a.length, i);
                break;
            case 1:
                this.br(t.d, t.e, i);
                break;
            case 2:
                this.bt(t.d, t.b.length, i);
                break;
            case 4:
                this.R();
                break;
            case 3:
            default:
                throw Error.notImplemented(String.format("{0} action not supported.", t.c));
        }
    },
    R: function() {
        var n = this.l ? this.l.b() : 0;
        this.M = new Array(n);
        var t = 1;
        this.T(t);
        n > 0 && this.bc(0, n, t)
    },
    L: function(n) {
        if (this.x.length)
            if (n < 0) return -1;
            else {
                var t = this.M.length;
                return n >= t ? this.x.length : this.M[n]
            }
        else return n
    },
    bk: function(n, t, i, r, u, f) {
        u.val = -1;
        _j.s.b(t, "currentDataContext");
        var e = this.P.a(t, i);
        var s = e.a.a();
        var h = r === s;
        if (e.b && !h) {
            var o = this.X(e.a);
            if (o >= 0) {
                this.y(o, f);
                u.val = o
            }
            Array.add(n, e.a)
        }
        return s
    },
    bb: function(n, t, i, r, u) {
        var e = n > 0 ? this.l.c(n - 1) : null;
        var f = this.bk(t, this.l.c(n), e, i, r, u);
        Array.add(t, this.l.c(n));
        return f
    },
    bq: function(n, t, i) {
        t.length > 0 && this.O(n, t, i)
    },
    bd: function(n, t) {
        var r = null;
        if (t > 0) {
            var i = this.x[t - 1];
            _fm.m.isInstanceOfType(i) && (r = i.a())
        }
        return r
    },
    bc: function(n, t, i) {
        for (var h = [], r = this.L(n), e = this.bd(n, r), u = n; u < n + t; u++) {
            var f;
            var s, o;
            var c = (o = this.bb(u, h, e, s = {
                val: f
            }, i), f = s.val, o);
            if (f >= 0 && f < r) r--;
            else if (u === n) {
                e && e !== c && r--;
                e = null
            }
        }
        this.bq(r, h, i);
        this.Q()
    },
    bn: function(n, t, i, r, u) {
        var f = this.L(t);
        var e = this.bd(t, f);
        var o = this.bb(t, i, e, u, r);
        (e && e !== o && n >= t || u.val >= 0 && u.val < f) && f--;
        return f
    },
    bt: function(n, t, i) {
        for (var u = n + t - 1, f = this.L(u), e = this.L(n), r = f; r >= e; r = this.L(--u)) this.bs(r, i);
        this.Q()
    },
    bs: function(n, t) {
        this.y(n, t);
        if (n > 0 && _fm.m.isInstanceOfType(this.x[n - 1])) {
            var i = this.x.length === n ? !0 : _fm.m.isInstanceOfType(this.x[n]);
            i && this.y(n - 1, t)
        }
    },
    bo: function(n, t, i) {
        var r = this.L(n);
        return this.bp(r, t, i)
    },
    bp: function(n, t, i) {
        var r = this.x[n];
        if (_fm.m.isInstanceOfType(this.x[n - 1]) && (n === this.x.length - 1 || _fm.m.isInstanceOfType(this.x[n + 1]))) {
            n--;
            this.y(n, i)
        }
        Array.add(t, this.x[n]);
        return n
    },
    br: function(n, t, i) {
        var r = [];
        var l = [];
        var o = null;
        var c = this.x.length;
        var e = this.bo(n, l, i);
        var a = c > this.x.length;
        a && n <= t && this.Q();
        var f;
        var s, h;
        var u = (h = this.bn(n, t, r, i, s = {
            val: f
        }), f = s.val, h);
        f >= 0 && f < e && e--;
        if (r.length === 2) {
            o = r[1];
            if (n >= t) {
                this.C(u, r[0], i);
                e++;
                u++
            } else {
                u++;
                this.C(u, r[0], i)
            }
        } else o = r[0];
        this.D(e, u, o, i);
        this.Q()
    },
    Q: function() {
        this.M = new Array(this.l.b());
        for (var i = this.x.length, r = 0, n = 0; n < i; n++) {
            var t = this.x[n];
            _fm.m.isInstanceOfType(t) || (this.M[r++] = n)
        }
    }
};
_fm.d = function(n, t) {
    this.c = n;
    this.b = $a(t) ? "csimg image-" + n.replace(".", "-").toLowerCase() : t
};
_fm.d.a = function(n) {
    _fm.d.b || (_fm.d.b = {});
    var t = _fm.d.b[n];
    if ($a(t)) {
        t = new _fm.d(n);
        _fm.d.b[n] = t
    }
    return t
};
_fm.d.prototype = {
    c: null,
    b: null,
    a: function() {
        return this.b
    }
};
_fm.o = function(n, t, i, r, u) {
    _fm.o.initializeBase(this, [n, t, i, !0]);
    this.i = r;
    this.m = u
};
_fm.o.prototype = {
    i: null,
    m: null,
    q: !1,
    g: function() {
        return !this.r && !!this.i
    },
    b: function() {
        return "ContextMenuView.LinkContextMenuItem"
    },
    C: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.by("Url")
        }
        return n
    },
    y: function(n) {
        if (this.m !== n) {
            this.m = n;
            this.by("TargetWindow")
        }
        return n
    }
};
_fm.c = function(n, t, i, r, u, f, e, o, s) {
    _fm.c.initializeBase(this);
    if (_j.h.d(n) && !t) throw Error.argumentNull("Both text and imageId", "Argument can't be null");
    if (_j.h.d(n) && !t && !u) throw Error.argumentNull("Text and imageId and imageCss", "Arguments can't be null");
    if (t && u) throw Error.argument("Both imageId and imageCss", "Arguments can't be set to non-null values");
    this.k = n;
    this.p = t;
    this.A = o;
    this.Y = s;
    this.H = u || "";
    this.j = i;
    this.I = !1;
    this.T = "ContextMenuView.DefaultMenuItemLineTemplate";
    this.L = this;
    f && (this.s = f);
    this.K = e ? e : "ContextMenuView.ContextMenuItem"
};
_fm.c.prototype = {
    H: null,
    K: null,
    j: null,
    u: null,
    p: null,
    A: null,
    Y: null,
    r: !1,
    k: null,
    I: !1,
    T: null,
    L: null,
    U: null,
    s: null,
    x: null,
    V: function(n) {
        if (this.u !== n) {
            this.u = n;
            this.by("AriaId")
        }
        return n
    },
    t: function() {
        return this.L
    },
    M: function(n) {
        if (this.L !== n) {
            this.L = n;
            this.by("LabelDataContext")
        }
        return n
    },
    z: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.bA("Command", "Selectable")
        }
        return n
    },
    S: !1,
    n: function(n) {
        if (this.k !== n) {
            this.k = n;
            this.by("Text")
        }
        return n
    },
    D: function(n) {
        if (this.p !== n) {
            this.p = n;
            this.by("ImageId")
        }
        return n
    },
    bf: function(n) {
        if (this.A !== n) {
            this.A = n;
            this.by("HoveredImageId")
        }
        return n
    },
    v: function(n) {
        if (this.s !== n) {
            this.s = n;
            this.by("AriaLabel")
        }
        return n
    },
    l: function(n) {
        if (this.x !== n) {
            this.x = n;
            this.by("Title")
        }
        return n
    },
    h: function() {
        return this.r
    },
    a: function(n) {
        if (this.r !== n) {
            this.r = n;
            this.bA("IsHidden", "Selectable")
        }
        return n
    },
    X: !1,
    o: function() {
        return this.I
    },
    d: function(n) {
        if (n !== this.I) {
            this.I = n;
            this.by("IsSelected")
        }
        return n
    },
    g: function() {
        return !!this.j && this.j.b && !this.r
    },
    w: function() {
        return this.T
    },
    B: function(n) {
        this.T = n;
        return n
    },
    b: function() {
        return this.K
    },
    c: function() {
        return this.U
    },
    f: function(n) {
        if (this.U !== n) {
            this.U = n;
            this.by("ParentContextMenu")
        }
        return n
    },
    e: function() {
        var n = new _fm.c(this.k, this.p, this.j, !1, this.H, this.s, this.K, this.A, null);
        n.l(this.x);
        return n
    }
};
_fm.j = function(n, t, i, r) {
    _fm.j.initializeBase(this, [n, t, null, r]);
    this.E(i)
};
_fm.j.prototype = {
    i: null,
    N: !0,
    R: !1,
    W: "ContextMenuView",
    E: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.by("SubMenu")
        }
        return n
    },
    y: function(n) {
        if (this.N !== n) {
            this.N = n;
            this.by("IsEnabled")
        }
        return n
    },
    bk: function(n) {
        this.R = n;
        this.R && this.c() && this.c().n(this);
        return n
    },
    b: function() {
        return "ContextMenuView.SubMenuContextMenuItem"
    },
    O: function(n) {
        this.W !== n && (this.W = n);
        return n
    },
    g: function() {
        return this.N && !this.r
    }
};
_fm.v = function(n, t) {
    this.E = Function.createDelegate(this, this.G);
    _fm.v.initializeBase(this, [n, null, null, !1, null, n]);
    this.q = n;
    this.y = t;
    this.l(n);
    this.z(new _j.g(this.E, _ff.c.f))
};
_fm.v.prototype = {
    q: null,
    y: null,
    i: !1,
    b: function() {
        return "TextboxContextMenuView.TextboxContextMenuItem"
    },
    w: function() {
        return "TextboxContextMenuView.DefaultTextboxMenuItemTemplate"
    },
    C: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.n(this.i ? "" : this.q);
            this.by("IsTextboxShown")
        }
        return n
    },
    m: !1,
    G: function() {
        if (!_j.h.b(this.k)) {
            this.y(this.k);
            this.c().r && this.c().r.b && this.c().r.a()
        }
    }
};
_fm.a = function(n) {
    this.b = n
};
_fm.a.prototype = {
    b: null,
    a: function() {
        return this.b
    }
};
_fm.WebfontSizes = function() {};
_fm.WebfontSizes.a = function() {};
_fm.WebfontSizes.b = function() {};
_fm.C.registerClass("_fm.C", _j.S);
_fm.w.registerClass("_fm.w", _fm.C);
_fm.D.registerClass("_fm.D", _fm.C);
_fm.l.registerClass("_fm.l", _fm.D);
_fm.x.registerClass("_fm.x", _fm.C);
_fm.t.registerClass("_fm.t", _fm.D);
_fm.f.registerClass("_fm.f", _fm.C);
_fm.p.registerClass("_fm.p", _fm.C);
_fm.k.registerClass("_fm.k", _j.S);
_fm.e.registerClass("_fm.e", _j.S);
_fm.n.registerClass("_fm.n", _j.S, _fm.s);
_fm.i.registerClass("_fm.i", _j.S, _fm.s);
_fm.b.registerClass("_fm.b", null, _fm.A, _fm.F);
_fm.h.registerClass("_fm.h", null, _fm.F);
_fm.c.registerClass("_fm.c", _j.S, _fm.s);
_fm.g.registerClass("_fm.g", _fm.c);
_fm.B.registerClass("_fm.B", _ff.w.$$(_fm.r));
_fm.d.registerClass("_fm.d", null, _fm.F);
_fm.o.registerClass("_fm.o", _fm.c);
_fm.j.registerClass("_fm.j", _fm.c);
_fm.v.registerClass("_fm.v", _fm.c);
_fm.a.registerClass("_fm.a", null, _fm.F);
_fm.b.e = {};
_fm.h.b = null;
_fm.d.b = null;
_fm.a.U = new _fm.a("ms-Icon--blank");
_fm.a.b = new _fm.a("ms-Icon--empty");
_fm.a.bN = new _fm.a("ms-Icon--circleFill");
_fm.a.dC = new _fm.a("ms-Icon--placeholder");
_fm.a.bE = new _fm.a("ms-Icon--star");
_fm.a.c = new _fm.a("ms-Icon--plus");
_fm.a.bp = new _fm.a("ms-Icon--minus ms-icon-tall-glyph");
_fm.a.bs = new _fm.a("ms-Icon--question");
_fm.a.bk = new _fm.a("ms-Icon--exclamation");
_fm.a.l = new _fm.a("ms-Icon--person");
_fm.a.g = new _fm.a("ms-Icon--mail");
_fm.a.cA = new _fm.a("ms-Icon--infoCircle");
_fm.a.v = new _fm.a("ms-Icon--alert");
_fm.a.fl = new _fm.a("ms-Icon--xCircle");
_fm.a.bo = new _fm.a("ms-Icon--mailOpen");
_fm.a.K = new _fm.a("ms-Icon--people ms-icon-wide-glyph");
_fm.a.bI = new _fm.a("ms-Icon--bell");
_fm.a.E = new _fm.a("ms-Icon--calendar ms-icon-tall-glyph");
_fm.a.B = new _fm.a("ms-Icon--scheduling");
_fm.a.j = new _fm.a("ms-Icon--event");
_fm.a.S = new _fm.a("ms-Icon--folder");
_fm.a.Y = new _fm.a("ms-Icon--onedrive");
_fm.a.Q = new _fm.a("ms-Icon--chat ms-icon-tall-glyph");
_fm.a.bn = new _fm.a("ms-Icon--listBullets");
_fm.a.cW = new _fm.a("ms-Icon--calendarWeek");
_fm.a.cX = new _fm.a("ms-Icon--calendarWorkWeek");
_fm.a.cU = new _fm.a("ms-Icon--calendarDay");
_fm.a.bf = new _fm.a("ms-Icon--folderMove");
_fm.a.bV = new _fm.a("ms-Icon--panel ms-icon-tall-glyph");
_fm.a.H = new _fm.a("ms-Icon--popout");
_fm.a.dt = new _fm.a("ms-Icon--menu ms-icon-tall-glyph");
_fm.a.bQ = new _fm.a("ms-Icon--home");
_fm.a.fQ = new _fm.a("ms-Icon--favorites");
_fm.a.L = new _fm.a("ms-Icon--phone");
_fm.a.G = new _fm.a("ms-Icon--mailSend ms-icon-wide-glyph ms-icon-tall-glyph");
_fm.a.s = new _fm.a("ms-Icon--save");
_fm.a.Trash = new _fm.a("ms-Icon--trash");
_fm.a.f = new _fm.a("ms-Icon--pencil");
_fm.a.bl = new _fm.a("ms-Icon--flag");
_fm.a.O = new _fm.a("ms-Icon--reply");
_fm.a.bS = new _fm.a("ms-Icon--miniatures");
_fm.a.dP = new _fm.a("ms-Icon--voicemail ms-icon-wide-glyph");
_fm.a.bY = new _fm.a("ms-Icon--play");
_fm.a.bW = new _fm.a("ms-Icon--pause");
_fm.a.cG = new _fm.a("ms-Icon--onlineAdd");
_fm.a.cH = new _fm.a("ms-Icon--onlineJoin");
_fm.a.bi = new _fm.a("ms-Icon--replyAll");
_fm.a.i = new _fm.a("ms-Icon--attachment");
_fm.a.eh = new _fm.a("ms-Icon--drm");
_fm.a.M = new _fm.a("ms-Icon--pinDown ms-icon-tall-glyph");
_fm.a.N = new _fm.a("ms-Icon--refresh");
_fm.a.Z = new _fm.a("ms-Icon--gear");
_fm.a.dK = new _fm.a("ms-Icon--smiley");
_fm.a.bR = new _fm.a("ms-Icon--info");
_fm.a.T = new _fm.a("ms-Icon--lock");
_fm.a.m = new _fm.a("ms-Icon--search");
_fm.a.gA = new _fm.a("ms-Icon--questionReverse");
_fm.a.bU = new _fm.a("ms-Icon--notRecurring");
_fm.a.bu = new _fm.a("ms-Icon--tasks");
_fm.a.d = new _fm.a("ms-Icon--check");
_fm.a.a = new _fm.a("ms-Icon--x");
_fm.a.ff = new _fm.a("ms-Icon--thumbDown");
_fm.a.C = new _fm.a("ms-Icon--thumbUp");
_fm.a.h = new _fm.a("ms-Icon--ellipsis ms-icon-wide-glyph ms-icon-tall-glyph");
_fm.a.z = new _fm.a("ms-Icon--dot");
_fm.a.w = new _fm.a("ms-Icon--arrowUp");
_fm.a.I = new _fm.a("ms-Icon--arrowDown");
_fm.a.n = new _fm.a("ms-Icon--arrowLeft");
_fm.a.k = new _fm.a("ms-Icon--arrowRight");
_fm.a.X = new _fm.a("ms-Icon--download");
_fm.a.bj = new _fm.a("ms-Icon--directions");
_fm.a.ga = new _fm.a("ms-Icon--microphone");
_fm.a.cm = new _fm.a("ms-Icon--caretUp");
_fm.a.P = new _fm.a("ms-Icon--caretDown");
_fm.a.cl = new _fm.a("ms-Icon--caretLeft");
_fm.a.J = new _fm.a("ms-Icon--caretRight");
_fm.a.dy = new _fm.a("ms-Icon--officeThreshold");
_fm.a.gh = new _fm.a("ms-Icon--office365");
_fm.a.gi = new _fm.a("ms-Icon--office365Preview");
_fm.a.fx = new _fm.a("ms-Icon--caretUpLeft");
_fm.a.bw = new _fm.a("ms-Icon--caretDownRight");
_fm.a.D = new _fm.a("ms-Icon--apps");
_fm.a.eL = new _fm.a("ms-Icon--officeStore");
_fm.a.gV = new _fm.a("ms-Icon--windowsStore");
_fm.a.bq = new _fm.a("ms-Icon--outlook");
_fm.a.gy = new _fm.a("ms-Icon--project");
_fm.a.gW = new _fm.a("ms-Icon--yammer");
_fm.a.fK = new _fm.a("ms-Icon--dynamicsCrm");
_fm.a.fY = new _fm.a("ms-Icon--lync");
_fm.a.dw = new _fm.a("ms-Icon--note");
_fm.a.dx = new _fm.a("ms-Icon--noteReply ms-icon-tall-glyph");
_fm.a.dq = new _fm.a("ms-Icon--key");
_fm.a.dM = new _fm.a("ms-Icon--tile");
_fm.a.eW = new _fm.a("ms-Icon--sharepoint");
_fm.a.cc = new _fm.a("ms-Icon--starEmpty");
_fm.a.cf = new _fm.a("ms-Icon--upload");
_fm.a.cQ = new _fm.a("ms-Icon--wrench");
_fm.a.bd = new _fm.a("ms-Icon--share");
_fm.a.di = new _fm.a("ms-Icon--documentReply");
_fm.a.ct = new _fm.a("ms-Icon--documentForward");
_fm.a.eO = new _fm.a("ms-Icon--partner");
_fm.a.fm = new _fm.a("ms-Icon--admin");
_fm.a.gb = new _fm.a("ms-Icon--microsoft");
_fm.a.bt = new _fm.a("ms-Icon--reactivate");
_fm.a.bB = new _fm.a("ms-Icon--personAdd");
_fm.a.x = new _fm.a("ms-Icon--chevronUp");
_fm.a.e = new _fm.a("ms-Icon--chevronDown");
_fm.a.q = new _fm.a("ms-Icon--chevronLeft");
_fm.a.o = new _fm.a("ms-Icon--chevronRight");
_fm.a.gv = new _fm.a("ms-Icon--powerBi");
_fm.a.br = new _fm.a("ms-Icon--peopleAdd ms-icon-wide-glyph");
_fm.a.eI = new _fm.a("ms-Icon--newsfeed");
_fm.a.cF = new _fm.a("ms-Icon--notebook");
_fm.a.dr = new _fm.a("ms-Icon--link");
_fm.a.r = new _fm.a("ms-Icon--chevronsUp");
_fm.a.p = new _fm.a("ms-Icon--chevronsDown");
_fm.a.bL = new _fm.a("ms-Icon--chevronsLeft");
_fm.a.bM = new _fm.a("ms-Icon--chevronsRight");
_fm.a.dg = new _fm.a("ms-Icon--clutter");
_fm.a.ca = new _fm.a("ms-Icon--receiptForward ms-icon-wide-glyph");
_fm.a.cb = new _fm.a("ms-Icon--receiptReply ms-icon-wide-glyph");
_fm.a.dE = new _fm.a("ms-Icon--receiptCheck ms-icon-wide-glyph");
_fm.a.du = new _fm.a("ms-Icon--merge");
_fm.a.dL = new _fm.a("ms-Icon--split");
_fm.a.bz = new _fm.a("ms-Icon--eventCancel");
_fm.a.dN = new _fm.a("ms-Icon--today");
_fm.a.cI = new _fm.a("ms-Icon--oofReply");
_fm.a.dR = new _fm.a("ms-Icon--voicemailReply ms-icon-wide-glyph ms-icon-tall-glyph");
_fm.a.dQ = new _fm.a("ms-Icon--voicemailForward ms-icon-wide-glyph ms-icon-tall-glyph");
_fm.a.cM = new _fm.a("ms-Icon--ribbon");
_fm.a.W = new _fm.a("ms-Icon--contact");
_fm.a.dp = new _fm.a("ms-Icon--glasses");
_fm.a.fU = new _fm.a("ms-Icon--gallatin");
_fm.a.dm = new _fm.a("ms-Icon--excel");
_fm.a.gm = new _fm.a("ms-Icon--onenote");
_fm.a.dD = new _fm.a("ms-Icon--powerpoint");
_fm.a.dS = new _fm.a("ms-Icon--word");
_fm.a.bc = new _fm.a("ms-Icon--print");
_fm.a.u = new _fm.a("ms-Icon--room");
_fm.a.bZ = new _fm.a("ms-Icon--post");
_fm.a.dO = new _fm.a("ms-Icon--toggle ms-icon-wide-glyph");
_fm.a.R = new _fm.a("ms-Icon--clock");
_fm.a.dn = new _fm.a("ms-Icon--fax");
_fm.a.eA = new _fm.a("ms-Icon--lightning ms-icon-tall-glyph");
_fm.a.fD = new _fm.a("ms-Icon--conflict");
_fm.a.fG = new _fm.a("ms-Icon--delve");
_fm.a.ck = new _fm.a("ms-Icon--camera ms-icon-wide-glyph");
_fm.a.et = new _fm.a("ms-Icon--filter");
_fm.a.bA = new _fm.a("ms-Icon--fullscreen");
_fm.a.New = new _fm.a("ms-Icon--new");
_fm.a.bg = new _fm.a("ms-Icon--mailEmpty");
_fm.a.dj = new _fm.a("ms-Icon--editBox ms-icon-tall-glyph");
_fm.a.gS = new _fm.a("ms-Icon--waffle");
_fm.a.cg = new _fm.a("ms-Icon--work");
_fm.a.eZ = new _fm.a("ms-Icon--socialListening");
_fm.a.y = new _fm.a("ms-Icon--mapMarker");
_fm.a.eM = new _fm.a("ms-Icon--org");
_fm.a.fn = new _fm.a("ms-Icon--adminA");
_fm.a.fo = new _fm.a("ms-Icon--adminP");
_fm.a.eS = new _fm.a("ms-Icon--replyAlt");
_fm.a.dG = new _fm.a("ms-Icon--replyAllAlt ms-icon-wide-glyph");
_fm.a.A = new _fm.a("ms-Icon--group ms-icon-wide-glyph");
_fm.a.gg = new _fm.a("ms-Icon--office");
_fm.a.bT = new _fm.a("ms-Icon--money");
_fm.a.eK = new _fm.a("ms-Icon--noteEdit");
_fm.a.ba = new _fm.a("ms-Icon--pinLeft");
_fm.a.cz = new _fm.a("ms-Icon--heart ms-icon-tall-glyph");
_fm.a.fV = new _fm.a("ms-Icon--heartEmpty");
_fm.a.t = new _fm.a("ms-Icon--picture ms-icon-wide-glyph");
_fm.a.V = new _fm.a("ms-Icon--cake");
_fm.a.cj = new _fm.a("ms-Icon--books ms-icon-wide-glyph");
_fm.a.co = new _fm.a("ms-Icon--chart");
_fm.a.be = new _fm.a("ms-Icon--video ms-icon-wide-glyph");
_fm.a.cN = new _fm.a("ms-Icon--soccer");
_fm.a.cD = new _fm.a("ms-Icon--meal");
_fm.a.ci = new _fm.a("ms-Icon--balloon");
_fm.a.cn = new _fm.a("ms-Icon--cat");
_fm.a.bH = new _fm.a("ms-Icon--bag");
_fm.a.cE = new _fm.a("ms-Icon--music");
_fm.a.cd = new _fm.a("ms-Icon--stopwatch");
_fm.a.cr = new _fm.a("ms-Icon--coffee");
_fm.a.bv = new _fm.a("ms-Icon--briefcase");
_fm.a.cL = new _fm.a("ms-Icon--pill ms-icon-tall-glyph");
_fm.a.cO = new _fm.a("ms-Icon--trophy ms-icon-tall-glyph");
_fm.a.cy = new _fm.a("ms-Icon--firstAid");
_fm.a.bb = new _fm.a("ms-Icon--plane ms-icon-tall-glyph");
_fm.a.cJ = new _fm.a("ms-Icon--page");
_fm.a.bJ = new _fm.a("ms-Icon--car");
_fm.a.cv = new _fm.a("ms-Icon--dogAlt ms-icon-wide-glyph");
_fm.a.bO = new _fm.a("ms-Icon--document");
_fm.a.gO = new _fm.a("ms-Icon--text ms-icon-wide-glyph ms-icon-tall-glyph");
_fm.a.gB = new _fm.a("ms-Icon--radioButton");
_fm.a.fb = new _fm.a("ms-Icon--story");
_fm.a.cs = new _fm.a("ms-Icon--desktop");
_fm.a.dv = new _fm.a("ms-Icon--mobile");
_fm.a.dI = new _fm.a("ms-Icon--shield");
_fm.a.eX = new _fm.a("ms-Icon--skype");
_fm.a.by = new _fm.a("ms-Icon--creditCard");
_fm.a.bD = new _fm.a("ms-Icon--reload");
_fm.a.eQ = new _fm.a("ms-Icon--peopleSecurity ms-icon-wide-glyph");
_fm.a.gR = new _fm.a("ms-Icon--visio");
_fm.a.gl = new _fm.a("ms-Icon--officeVideo");
_fm.a.go = new _fm.a("ms-Icon--parature");
_fm.a.fz = new _fm.a("ms-Icon--circleUnfilled");
_fm.a.ei = new _fm.a("ms-Icon--drop");
_fm.a.gM = new _fm.a("ms-Icon--sun");
_fm.a.cC = new _fm.a("ms-Icon--mailUnread");
_fm.a.ey = new _fm.a("ms-Icon--inboxCheck ms-icon-wide-glyph");
_fm.a.fC = new _fm.a("ms-Icon--collapse");
_fm.a.cY = new _fm.a("ms-Icon--checkboxMixed");
_fm.a.fs = new _fm.a("ms-Icon--boards");
_fm.a.bK = new _fm.a("ms-Icon--checkboxCheck");
_fm.a.cB = new _fm.a("ms-Icon--lightBulb");
_fm.a.bP = new _fm.a("ms-Icon--globe");
_fm.a.cT = new _fm.a("ms-Icon--bing");
_fm.a.eB = new _fm.a("ms-Icon--listCheck");
_fm.a.eE = new _fm.a("ms-Icon--mailCheck");
_fm.a.dc = new _fm.a("ms-Icon--chevronThinUp");
_fm.a.db = new _fm.a("ms-Icon--chevronThinDown");
_fm.a.dW = new _fm.a("ms-Icon--chevronThinLeft");
_fm.a.dX = new _fm.a("ms-Icon--chevronThinRight");
_fm.a.cZ = new _fm.a("ms-Icon--chevronThickDown");
_fm.a.cq = new _fm.a("ms-Icon--chevronThickLeft");
_fm.a.da = new _fm.a("ms-Icon--chevronThickRight");
_fm.a.cu = new _fm.a("ms-Icon--documentLandscape");
_fm.a.dk = new _fm.a("ms-Icon--embed");
_fm.a.gc = new _fm.a("ms-Icon--msn");
_fm.a.dA = new _fm.a("ms-Icon--peopleCheck");
_fm.a.gN = new _fm.a("ms-Icon--sway");
_fm.a.eG = new _fm.a("ms-Icon--mailSync");
_fm.a.dJ = new _fm.a("ms-Icon--skypeForBusiness");
_fm.a.fy = new _fm.a("ms-Icon--checkPeople");
_fm.a.fI = new _fm.a("ms-Icon--documentSearch");
_fm.a.cV = new _fm.a("ms-Icon--calendarPublic");
_fm.a.ef = new _fm.a("ms-Icon--contactPublic");
_fm.a.fA = new _fm.a("ms-Icon--classNotebook");
_fm.a.fR = new _fm.a("ms-Icon--filePDF");
_fm.a.fE = new _fm.a("ms-Icon--copy");
_fm.a.fF = new _fm.a("ms-Icon--creditCardOutline");
_fm.a.gj = new _fm.a("ms-Icon--officeAssistant");
_fm.a.eF = new _fm.a("ms-Icon--mailPublic");
_fm.a.ev = new _fm.a("ms-Icon--folderPublic");
_fm.a.fB = new _fm.a("ms-Icon--classroom");
_fm.a.gs = new _fm.a("ms-Icon--plus2");
_fm.a.ce = new _fm.a("ms-Icon--tag");
_fm.a.bx = new _fm.a("ms-Icon--circleInfo");
_fm.a.eU = new _fm.a("ms-Icon--section");
_fm.a.eV = new _fm.a("ms-Icon--sections");
_fm.a.gn = new _fm.a("ms-Icon--oneNoteEdu");
_fm.a.gw = new _fm.a("ms-Icon--powerBi2");
_fm.a.cS = new _fm.a("ms-Icon--at");
_fm.a.gz = new _fm.a("ms-Icon--protectionCenter");
_fm.a.eR = new _fm.a("ms-Icon--pictureEdit");
_fm.a.dd = new _fm.a("ms-Icon--circleCheck");
_fm.a.fH = new _fm.a("ms-Icon--docs");
_fm.a.es = new _fm.a("ms-Icon--family");
_fm.a.fi = new _fm.a("ms-Icon--volumeMed");
_fm.a.fj = new _fm.a("ms-Icon--volumeOff");
_fm.a.cP = new _fm.a("ms-Icon--tv");
_fm.a.bF = new _fm.a("ms-Icon--suitcase");
_fm.a.bG = new _fm.a("ms-Icon--ticket");
_fm.a.fa = new _fm.a("ms-Icon--starburst");
_fm.a.F = new _fm.a("ms-Icon--live");
_fm.a.ch = new _fm.a("ms-Icon--archive");
_fm.a.gT = new _fm.a("ms-Icon--waffle2");
_fm.a.cw = new _fm.a("ms-Icon--eventAdd");
_fm.a.ew = new _fm.a("ms-Icon--groups");
_fm.a.dB = new _fm.a("ms-Icon--person2");
_fm.a.fX = new _fm.a("ms-Icon--lock2");
_fm.a.eP = new _fm.a("ms-Icon--people2");
_fm.a.bX = new _fm.a("ms-Icon--pencilReply");
_fm.a.ez = new _fm.a("ms-Icon--lightBulb2");
_fm.a.gu = new _fm.a("ms-Icon--powerApps");
_fm.a.gG = new _fm.a("ms-Icon--skypeCheck");
_fm.a.gH = new _fm.a("ms-Icon--skypeClock");
_fm.a.gI = new _fm.a("ms-Icon--skypeMinus");
_fm.a.ej = new _fm.a("ms-Icon--edgeBrowser");
_fm.a.fN = new _fm.a("ms-Icon--emptyDocument");
_fm.a.ek = new _fm.a("ms-Icon--emptyDocuments");
_fm.a.el = new _fm.a("ms-Icon--emptyDraft");
_fm.a.dl = new _fm.a("ms-Icon--emptyMail");
_fm.a.eo = new _fm.a("ms-Icon--emptySearch");
_fm.a.eq = new _fm.a("ms-Icon--emptyTrash");
_fm.a.er = new _fm.a("ms-Icon--emptyTrophy");
_fm.a.dT = new _fm.a("ms-Icon--bookings");
_fm.a.bh = new _fm.a("ms-Icon--package");
_fm.a.fL = new _fm.a("ms-Icon--dynamicsSMB");
_fm.a.gk = new _fm.a("ms-Icon--officeForms");
_fm.a.eY = new _fm.a("ms-Icon--skypeMessage");
_fm.a.fS = new _fm.a("ms-Icon--flow");
_fm.a.ep = new _fm.a("ms-Icon--emptyShared");
_fm.a.bC = new _fm.a("ms-Icon--poll");
_fm.a.gU = new _fm.a("ms-Icon--windows");
_fm.a.em = new _fm.a("ms-Icon--emptyError");
_fm.a.en = new _fm.a("ms-Icon--emptyFolder");
_fm.a.fO = new _fm.a("ms-Icon--emptySearch-1");
_fm.a.fM = new _fm.a("ms-Icon--emptyAttachment");
_fm.a.fP = new _fm.a("ms-Icon--eventAdd2");
_fm.a.gL = new _fm.a("ms-Icon--stream");
_fm.a.fg = new _fm.a("ms-Icon--trash2");
_fm.a.gC = new _fm.a("ms-Icon--refresh2");
_fm.a.fk = new _fm.a("ms-Icon--x2");
_fm.a.fp = new _fm.a("ms-Icon--attachment2");
_fm.a.fr = new _fm.a("ms-Icon--bell2");
_fm.a.fd = new _fm.a("ms-Icon--tag2");
_fm.a.fZ = new _fm.a("ms-Icon--mapMarker2");
_fm.a.cK = new _fm.a("ms-Icon--picture2");
_fm.a.gr = new _fm.a("ms-Icon--pinLeft2");
_fm.a.gq = new _fm.a("ms-Icon--pinDownLeft2");
_fm.a.eJ = new _fm.a("ms-Icon--note2");
_fm.a.bm = new _fm.a("ms-Icon--gear2");
_fm.a.gE = new _fm.a("ms-Icon--search2");
_fm.a.cp = new _fm.a("ms-Icon--check2");
_fm.a.dY = new _fm.a("ms-Icon--circleCheck2");
_fm.a.gQ = new _fm.a("ms-Icon--undo2");
_fm.a.fT = new _fm.a("ms-Icon--flowLight");
_fm.a.gJ = new _fm.a("ms-Icon--skypeTeams");
_fm.a.fq = new _fm.a("ms-Icon--badge");
_fm.a.fh = new _fm.a("ms-Icon--unread");
_fm.a.eg = new _fm.a("ms-Icon--direct");
_fm.a.eH = new _fm.a("ms-Icon--mention");
_fm.a.eu = new _fm.a("ms-Icon--flag2");
_fm.a.ds = new _fm.a("ms-Icon--magnifyingGlass");
_fm.a.fc = new _fm.a("ms-Icon--summarize");
_fm.a.eC = new _fm.a("ms-Icon--lock3");
_fm.a.fu = new _fm.a("ms-Icon--bufferTimeBefore");
_fm.a.ft = new _fm.a("ms-Icon--bufferTimeAfter");
_fm.a.dU = new _fm.a("ms-Icon--bufferTimeBoth");
_fm.a.fJ = new _fm.a("ms-Icon--dynamics365");
_fm.a.fe = new _fm.a("ms-Icon--teams");
_fm.a.gF = new _fm.a("ms-Icon--shoppingBag");
_fm.a.fv = new _fm.a("ms-Icon--businessCenter");
_fm.a.gf = new _fm.a("ms-Icon--nonprofit");
_fm.a.dF = new _fm.a("ms-Icon--reminderGroup");
_fm.a.dZ = new _fm.a("ms-Icon--circleCheck3");
_fm.a.fw = new _fm.a("ms-Icon--calendar2 ms-icon-tall-glyph");
_fm.a.ea = new _fm.a("ms-Icon--circleChevronLeft");
_fm.a.de = new _fm.a("ms-Icon--circleChevronRight");
_fm.a.eb = new _fm.a("ms-Icon--circleChevronLeftFilled");
_fm.a.ec = new _fm.a("ms-Icon--circleChevronRightFilled");
_fm.a.eD = new _fm.a("ms-Icon--mail2");
_fm.a.cR = new _fm.a("ms-Icon--alert3");
_fm.a.dz = new _fm.a("ms-Icon--openInNewWindow");
_fm.a.gp = new _fm.a("ms-Icon--phone2");
_fm.a.gx = new _fm.a("ms-Icon--powerBi3");
_fm.a.gD = new _fm.a("ms-Icon--scheduling2");
_fm.a.dV = new _fm.a("ms-Icon--calendarPeople");
_fm.a.eN = new _fm.a("ms-Icon--outlookPremium");
_fm.a.fW = new _fm.a("ms-Icon--kaizala");
_fm.a.gd = new _fm.a("ms-Icon--myAnalytics");
_fm.a.ge = new _fm.a("ms-Icon--myAnalytics2");
_fm.a.ex = new _fm.a("ms-Icon--highlight");
_fm.a.ee = new _fm.a("ms-Icon--comment");
_fm.a.df = new _fm.a("ms-Icon--circlePlus2");
_fm.a.ed = new _fm.a("ms-Icon--cloud2");
_fm.a.cx = new _fm.a("ms-Icon--findTime");
_fm.a.dh = new _fm.a("ms-Icon--contactInfo");
_fm.a.gP = new _fm.a("ms-Icon--toDoLogo");
_fm.a.eT = new _fm.a("ms-Icon--toggleOn");
_fm.a.dH = new _fm.a("ms-Icon--toggleOff");
_fm.a.gK = new _fm.a("ms-Icon--staffHub");
_fm.a.gt = new _fm.a("ms-Icon--POI");
_fm.WebfontSizes.a.w = "ms-icon-font-size-8";
_fm.WebfontSizes.a.l = "ms-icon-font-size-10";
_fm.WebfontSizes.a.r = "ms-icon-font-size-11";
_fm.WebfontSizes.a.f = "ms-icon-font-size-12";
_fm.WebfontSizes.a.c = "ms-icon-font-size-14";
_fm.WebfontSizes.a.a = "ms-icon-font-size-16";
_fm.WebfontSizes.a.e = "ms-icon-font-size-17";
_fm.WebfontSizes.a.b = "ms-icon-font-size-18";
_fm.WebfontSizes.a.s = "ms-icon-font-size-19";
_fm.WebfontSizes.a.d = "ms-icon-font-size-20";
_fm.WebfontSizes.a.g = "ms-icon-font-size-22";
_fm.WebfontSizes.a.j = "ms-icon-font-size-24";
_fm.WebfontSizes.a.p = "ms-icon-font-size-26";
_fm.WebfontSizes.a.h = "ms-icon-font-size-28";
_fm.WebfontSizes.a.m = "ms-icon-font-size-30";
_fm.WebfontSizes.a.k = "ms-icon-font-size-32";
_fm.WebfontSizes.a.n = "ms-icon-font-size-35";
_fm.WebfontSizes.a.x = "ms-icon-font-size-40";
_fm.WebfontSizes.a.i = "ms-icon-font-size-48";
_fm.WebfontSizes.a.y = "ms-icon-font-size-50";
_fm.WebfontSizes.a.u = "ms-icon-font-size-56";
_fm.WebfontSizes.a.z = "ms-icon-font-size-60";
_fm.WebfontSizes.a.o = "ms-icon-font-size-64";
_fm.WebfontSizes.a.v = "ms-icon-font-size-70";
_fm.WebfontSizes.a.A = "ms-icon-font-size-90";
_fm.WebfontSizes.a.q = "ms-icon-font-size-96";
_fm.WebfontSizes.a.B = "ms-icon-font-size-105";
_fm.WebfontSizes.a.t = "ms-icon-font-size-120";
_fm.WebfontSizes.b.d = "ms-icon-font-size-16-circle";
_fm.WebfontSizes.b.e = "ms-icon-font-size-20-circle";
_fm.WebfontSizes.b.b = "ms-icon-font-size-24-circle";
_fm.WebfontSizes.b.a = "ms-icon-font-size-32-circle";
_fm.WebfontSizes.b.c = "ms-icon-font-size-35-circle";
Type.registerNamespace("_fc");
_fc.H = function() {};
_fc.H.registerInterface("_fc.H");
_fc.f = function() {};
_fc.f.registerInterface("_fc.f");
_fc.I = function() {};
_fc.I.registerInterface("_fc.I");
_fc.C = function() {};
_fc.C.prototype = {
    text: 1,
    tel: 2,
    url: 3,
    email: 4,
    search: 5,
    password: 6,
    number: 7
};
_fc.C.registerEnum("_fc.C", !1);
_fc.F = function() {
    this.c = new _j.q;
    this.d = new _j.q
};
_fc.F.prototype = {
    e: function(n, t, i) {
        var r = new _fc.F.a;
        r.b = n;
        r.c = t;
        r.a = i;
        this.c.c(r)
    },
    a: function() {
        for (var t = 0; t < this.c.d.length; t++) {
            var n = this.c.d[t];
            if (n.c <= 0) {
                n.a && n.a();
                n.b.a()
            } else {
                var i = this;
                this.d.c(_j.m.a().a(_ff.c.h, "BatchedAnimation.Start", function() {
                    $a(n.a) || n.a();
                    n.b.a()
                }, n.c))
            }
        }
    },
    b: function(n) {
        for (var i = 0; i < this.d.d.length; i++) _j.m.a().b(this.d.d[i]);
        this.d.f();
        for (var t = 0; t < this.c.d.length; t++) this.c.d[t].b.b(n);
        this.c.f()
    }
};
_fc.F.a = function() {};
_fc.F.a.prototype = {
    b: null,
    c: 0,
    a: null
};
_fc.A = function(n) {
    this.e = Function.createDelegate(this, this.g);
    this.c = n
};
_fc.A.prototype = {
    c: null,
    d: !1,
    a: function() {
        if (this.c) {
            this.d = !1;
            _j.m.a().a(_ff.c.h, "NullAnimation.End", this.e, 0)
        }
    },
    b: function(n) {
        this.f(n)
    },
    g: function() {
        this.f(!0)
    },
    f: function(n) {
        if (!this.d && n && this.c) {
            this.d = !0;
            this.c()
        }
    }
};
_fc.c = function() {
    _fc.c.initializeBase(this)
};
_fc.c.prototype = {
    r: null,
    s: 0,
    k: 0,
    d: function() {
        return this.r
    },
    j: function(n) {
        if (this.r !== n) {
            this.r = n;
            this.s = _fc.r.a(this.r)
        }
        return n
    },
    q: null,
    b: function(n) {
        return this.y(n, this.s, this.k)
    },
    g: function(n) {
        return n.j() === "keyup" ? this.q : this.l
    }
};
_fc.r = function() {
    _fc.r.resolveInheritance();
    this.i = this.fe;
    _fc.r.initializeBase(this);
    this.n = !0;
    this.m = !0
};
_fc.r.a = function(n) {
    _fc.r.c || _fc.r.d();
    var t = _fc.r.c[n];
    if (t) return t;
    if (n.length !== 1) throw Error.invalidOperation("Cannot convert key to keycode (key = '" + n + "')");
    return n.toUpperCase().charCodeAt(0)
};
_fc.r.d = function() {
    _fc.r.c = {
        BACKSPACE: 8,
        DELETE: 46,
        INSERT: 45,
        ENTER: 13,
        TAB: 9,
        ESC: 27,
        LEFTARROW: _ff.j.a,
        UPARROW: 38,
        RIGHTARROW: _ff.j.b,
        DOWNARROW: 40,
        HOME: 36,
        END: 35,
        PAGEUP: 33,
        PAGEDOWN: 34,
        SPACE: 32,
        F2: 113,
        F6: 117,
        F9: 120,
        ",": 188,
        ".": 190,
        "/": 191,
        "]": 221,
        "[": 219
    }
};
_fc.r.e = function(n) {
    var t = !1;
    n.getAttribute("contentEditable") && (t = n.tagName.toUpperCase() === "DIV" && n.getAttribute("contentEditable").toUpperCase() === "TRUE");
    return n.tagName.toUpperCase() === "INPUT" || n.tagName.toUpperCase() === "TEXTAREA" || t
};
_fc.r.prototype = {
    l: null,
    o: !1,
    p: !1,
    c: function() {
        return this.p
    },
    n: !1,
    e: function() {
        return this.n
    },
    m: !1,
    f: function() {
        return this.m
    },
    x: null,
    d: function() {
        return this.x
    },
    a: function() {
        return !1
    },
    g: function(n) {
        return n.j() === "keyup" ? null : this.l
    },
    h: function() {},
    y: function(n, t, i) {
        if (!this.g(n) || _fc.r.e(n.b()) && this.o) return !1;
        var r = n.a();
        _j.G.a().P && r === 8 && (r = 46);
        return r === t && n.g() === !!(i & 1) && n.h() === !!(i & 2) && n.l() === !!(i & 4)
    }
};
_fc.g = function() {
    _fc.g.initializeBase(this)
};
_fc.g.d = function(n) {
    return !n.l() && !n.h() && (n.a() === 32 || n.a() >= 65 && n.a() <= 90 || n.a() >= 48 && n.a() <= 57 || n.a() >= 96 && n.a() <= 105 || n.a() >= 186 && n.a() <= 192 || n.a() >= 219 && n.a() <= 222)
};
_fc.g.prototype = {
    j: null,
    d: null,
    c: null,
    e: !1,
    b: !1,
    g: !1,
    i: !1,
    f: 0,
    a: function(n) {
        this.n(null);
        this.c = n;
        this.n(this);
        return n
    },
    bz: function() {
        this.X && this.bh(this.X);
        if (this.c)
            for (var i = this.c, r = i.length, n = 0; n < r; ++n) {
                var t = i[n];
                t && _j.S.isInstanceOfType(t) && t.dispose()
            }
        this.a(null);
        this.k();
        _j.bV.prototype.bz.call(this)
    },
    be: function(n) {
        if (this.X.kP() || this.b) this.e = !1;
        else {
            this.e = !0;
            this.X.A(-1)
        }
    },
    bb: function() {
        _j.bV.prototype.bb.call(this);
        this.o()
    },
    bc: function() {
        _j.bV.prototype.bc.call(this);
        this.k()
    },
    bh: function(n) {
        if (this.X && this.e) {
            this.X.z.removeAttribute("tabindex");
            this.e = !1
        }
    },
    o: function() {
        if (this.X) {
            this.X.bf("keydown", this.d || (this.d = Function.createDelegate(this, this.m)), "HotKey");
            this.X.bf("keypress", this.j || (this.j = Function.createDelegate(this, this.q)), "HotKey");
            this.X.bf("keyup", this.d || (this.d = Function.createDelegate(this, this.m)), "HotKey")
        }
    },
    k: function() {
        if (this.X) {
            this.X.bj("keydown", "HotKey");
            this.X.bj("keypress", "HotKey");
            this.X.bj("keyup", "HotKey")
        }
    },
    p: function() {
        if (!_fc.g.a) return !0;
        if (this.X) {
            var t = _fc.g.a.z;
            var n = this.X.z;
            if (t && n && (t.contains(n) || t.ownerDocument !== n.ownerDocument)) return !0
        }
        return !1
    },
    m: function(n) {
        this.g = !1;
        var u = !1;
        if (this.c && (this.p() || !_fc.g.d(n))) {
            n.n() - this.f > 2e3 && this.h();
            for (var r = !1, t = 0; t < this.c.length; t++)
                if (this.c[t].a() && this.c[t].b(n)) {
                    r = !!(r | this.c[t].a());
                    if (!r) {
                        this.l(n, this.c[t]);
                        this.h();
                        u = !0;
                        break
                    }
                }
            for (var i = 0; !u && i < this.c.length; i++)
                if (!this.c[i].a() && this.c[i].b(n)) {
                    r = !!(r | this.c[i].a());
                    if (!r) {
                        this.l(n, this.c[i]);
                        this.h();
                        u = !0
                    }
                }
        }
        if (u) {
            this.h();
            this.f = 0
        } else this.f = n.n();
        this.i && n.d()
    },
    h: function() {
        for (var n = 0; n < this.c.length; n++) this.c[n].h()
    },
    l: function(n, t) {
        var i = t.g(n);
        if (i.b || t.c()) {
            if (t.e()) {
                n.c();
                n.j() === "keydown" && (this.g = !0)
            }
            t.f() && n.d()
        }
        if (i.b) {
            _ff.q.isInstanceOfType(i) && (i.h = n);
            _fc.g.c && _fc.g.c("HK");
            i.a();
            _fc.g.b && _fc.g.b(t.d())
        }
    },
    q: function(n) {
        this.g && n.c()
    },
    n: function(n) {
        if (this.c)
            for (var t = 0; t < this.c.length; t++) this.c[t].i(n)
    }
};
_fc.G = function(n) {
    this.h = Function.createDelegate(this, this.q);
    this.i = Function.createDelegate(this, this.r);
    this.j = Function.createDelegate(this, this.s);
    this.g = Function.createDelegate(this, this.p);
    _fc.G.initializeBase(this);
    this.f = n
};
_fc.G.prototype = {
    c: !0,
    a: null,
    e: null,
    d: null,
    b: !1,
    f: 0,
    t: function(n) {
        if (this.c !== n) {
            this.c = n;
            this.Z() && (this.c ? this.k() : this.l())
        }
        return n
    },
    bb: function() {
        _j.bV.prototype.bb.call(this);
        this.c && this.k()
    },
    bc: function() {
        _j.bV.prototype.bc.call(this);
        this.c && this.l()
    },
    k: function() {
        if (this.f !== "Mouse") {
            this.X.bf("scroll", this.g, "CaptureClick");
            this.X.bf("mousedown", this.j, "CaptureClick")
        }
    },
    l: function() {
        if (this.f !== "Mouse") {
            this.X.bj("scroll", "CaptureClick");
            this.X.bj("mousedown", "CaptureClick");
            this.a = null;
            this.d = null;
            this.e = null
        }
    },
    p: function(n) {
        if (this.d) {
            var t = n.n() - this.d.n();
            this.b && t > 125 && this.m()
        }
    },
    s: function(n) {
        this.X.bj("mousemove", "CaptureClick");
        this.X.bj("mouseup", "CaptureClick");
        this.X.bf("mousemove", this.i, "CaptureClick");
        this.X.bf("mouseup", this.h, "CaptureClick");
        this.a = null;
        this.e = n;
        this.b && n.d();
        this.m();
        _j.m.a().g()
    },
    r: function(n) {
        this.n(n)
    },
    q: function(n) {
        this.X.bj("mousemove", "CaptureClick");
        this.X.bj("mouseup", "CaptureClick");
        this.d = n;
        this.o(n);
        this.a = null;
        this.b || _j.m.a().h()
    },
    m: function() {
        if (this.b) {
            this.b = !1;
            _j.m.a().h()
        }
    },
    n: function(n) {
        this.a || (this.a = []);
        Array.add(this.a, n);
        this.a.length > 2 && Array.removeAt(this.a, 0)
    },
    o: function(n) {
        if (!this.e || !(Math.abs(this.d.f() - this.e.f()) <= 20)) {
            if (!this.a || this.a.length < 2) {
                this.b = !0;
                return
            }
            Math.abs(this.a[1].f() - this.a[0].f()) > 1 && (this.b = !0)
        }
    }
};
_fc.u = function() {
    this.f = Function.createDelegate(this, this.j);
    this.h = Function.createDelegate(this, this.i);
    this.g = Function.createDelegate(this, this.k);
    _fc.u.initializeBase(this)
};
_fc.u.prototype = {
    b: null,
    c: null,
    a: 0,
    e: 0,
    bb: function() {
        _j.bV.prototype.bb.call(this);
        this.X.bf("mousedown", this.g, "SwipeBehavior")
    },
    bc: function() {
        _j.bV.prototype.bc.call(this);
        this.d();
        this.X.bj("mousedown", "SwipeBehavior")
    },
    k: function(n) {
        this.a = n.e();
        this.e = n.f();
        _fc.u.a || (_fc.u.a = new _j.i(document.body));
        _fc.u.a.bf("mousemove", this.h, "SwipeBehavior");
        _fc.u.a.bf("mouseup", this.f, "SwipeBehavior")
    },
    j: function(n) {
        this.d();
        this.i(n)
    },
    i: function(n) {
        if (this.Z() && Math.abs(this.a - n.e()) > 20) {
            var i = Math.abs(n.e() - this.a);
            var t = Math.abs(n.f() - this.e);
            if (t / i <= .577) {
                this.d();
                n.e() < this.a ? this.b && this.b.b && this.b.a() : this.c && this.c.b && this.c.a()
            }
        }
    },
    d: function() {
        _fc.u.a || (_fc.u.a = new _j.i(document.body));
        _fc.u.a.bj("mousemove", "SwipeBehavior");
        _fc.u.a.bj("mouseup", "SwipeBehavior")
    }
};
_fc.b = function(n) {
    _fc.b.initializeBase(this, [n]);
    this.bo("o365button");
    this.apcl(_j.i.b.a, _fc.b.b);
    this.y("Button.ImageLeft")
};
_fc.b.b = function(n, t) {
    var i = n;
    i.bS()
};
_fc.b.prototype = {
    cR: null,
    du: null,
    ct: null,
    df: !0,
    bd: !1,
    be: null,
    ck: null,
    cj: null,
    ca: null,
    bu: null,
    cb: null,
    cA: null,
    cc: null,
    cu: null,
    cv: null,
    ci: null,
    cz: null,
    cy: null,
    bl: !1,
    i: !1,
    bU: !1,
    bv: !1,
    bs: !1,
    bD: !1,
    dd: 0,
    ch: null,
    bZ: null,
    cf: !1,
    dj: !1,
    cM: null,
    cK: null,
    dc: null,
    co: function() {
        return _j.i.prototype.co.call(this)
    },
    Q: function(n) {
        _j.i.prototype.Q.call(this, n);
        if (this.S() && this.bu && !_j.h.b(n) && this.cq()) {
            this.S().e(null);
            this.bu.S().f(null)
        }
        return n
    },
    bK: function() {
        return _j.i.prototype.bK.call(this)
    },
    bb: function(n) {
        if (_j.i.prototype.bK.call(this) !== n) {
            _j.i.prototype.bK.call(this) && _j.i.prototype.bK.call(this).i(this.ct || (this.ct = Function.createDelegate(this, this.dv)));
            n && n.j(this.ct || (this.ct = Function.createDelegate(this, this.dv)));
            this.o(!n || n.b);
            _j.i.prototype.bb.call(this, n)
        }
        return n
    },
    cS: function(n) {
        if (this.cK !== n) {
            this.cK = n;
            this.by("ShiftClickCommand")
        }
        return n
    },
    dQ: function(n) {
        if (this.cM !== n) {
            this.cM = n;
            this.by("TapAndHold")
        }
        return n
    },
    t: function() {
        return this.df
    },
    o: function(n) {
        if (this.df !== n) {
            this.df = n;
            this.by("IsEnabled");
            this.dw()
        }
        return n
    },
    cm: function(n) {
        if (this.bd !== n) {
            this.bd = n;
            this.bS();
            this.by("IsPressed")
        }
        return n
    },
    bQ: function(n) {
        this.dc = n;
        this.by("ActionSource");
        return n
    },
    k: function(n) {
        if (this.be !== n) {
            this.be = n || "";
            this.bA("Text", "IsTextHidden")
        }
        return n
    },
    v: function() {
        this.bZ || this.Z() || (this.bZ = !this.t() && this.cc ? this.cc : this.ck);
        return this.bZ
    },
    dP: function(n) {
        if (this.bZ !== n) {
            this.bZ = n;
            this.by("CurrentImageId")
        }
        return n
    },
    j: function(n) {
        if (this.ca !== n) {
            this.ca && this.cj && this.cj.bt(this.ca);
            this.ca = n;
            this.ca && this.cj && this.cj.bo(this.ca)
        }
        return n
    },
    h: function(n) {
        if (this.cb !== n) {
            this.cb && this.bu && this.bu.bt(this.cb);
            this.cb = n;
            this.cb && this.bu && this.bu.bo(this.cb)
        }
        return n
    },
    eo: function(n) {
        if (this.ch !== n) {
            this.ch = n;
            this.by("CurrentCssClass")
        }
        return n
    },
    l: function(n) {
        if (this.ck !== n) {
            this.ck = n;
            this.w()
        }
        return n
    },
    f: function(n) {
        if (this.cA !== n) {
            this.cA = n;
            this.bi()
        }
        return n
    },
    x: function(n) {
        if (this.cc !== n) {
            this.cc = n;
            this.w()
        }
        return n
    },
    g: function(n) {
        if (this.cu !== n) {
            this.cu = n;
            this.bi()
        }
        return n
    },
    dK: function() {
        return this.dj || _j.h.a(this.be)
    },
    cp: function(n) {
        if (this.dj !== n) {
            this.dj = n;
            this.by("IsTextHidden")
        }
        return n
    },
    m: function(n) {
        if (this.cv !== n) {
            this.cv = n;
            this.w()
        }
        return n
    },
    c: function(n) {
        if (this.ci !== n) {
            this.ci = n;
            this.bi()
        }
        return n
    },
    r: function(n) {
        if (this.cz !== n) {
            this.cz = n;
            this.w()
        }
        return n
    },
    e: function(n) {
        if (this.cy !== n) {
            this.cy = n;
            this.bi()
        }
        return n
    },
    d: function(n) {
        if (this.dd !== n) {
            this.dd = n;
            this.el(this.dd);
            this.by("ButtonStyle")
        }
        return n
    },
    n: function(n) {
        if (this.cf !== n) {
            this.cf = n;
            this.by("ClickOnMouseDown")
        }
        return n
    },
    bz: function() {
        this.bK() && this.bK().i(this.ct || (this.ct = Function.createDelegate(this, this.dv)));
        this.rpcl(_j.i.b.a, _fc.b.b);
        _j.c.prototype.bz.call(this)
    },
    dw: function() {
        if (this.t()) {
            this.z.removeAttribute("disabled");
            this.fi(!1)
        } else {
            this.z.setAttribute("disabled", "true");
            this.fi(!0)
        }
        this.bS()
    },
    bI: function(n) {
        this.t() && this.cm(!1);
        !this.cf && n.g() && this.cK && this.cK.b ? this.cK.a() : !this.cf && this.bK() && this.bK().b && this.de(n);
        var t = !(n.a() - 1);
        (this.i || this.bv && t) && n.d();
        this.bl && n.c()
    },
    dp: function(n) {
        this.cf && this.bK() && this.bK().b && this.de(n);
        var t = n.a() - 1 == 2;
        this.t() && !t && this.cm(!0);
        this.bU && !t && n.d()
    },
    ef: function(n) {
        _j.i.prototype.ef.call(this, n);
        this.bs && n.d()
    },
    eP: function(n) {
        this.t() && this.cm(!1)
    },
    cr: function(n) {
        _j.i.prototype.cr.call(this, n);
        this.t() && this.cm(!1)
    },
    G: function() {
        _j.c.prototype.G.call(this);
        this.em();
        this.bS()
    },
    M: function() {
        _j.c.prototype.M.call(this);
        this.ep()
    },
    H: function() {
        _j.c.prototype.H.call(this);
        this.dJ()
    },
    P: function() {
        _j.c.prototype.P.call(this);
        var n = 8221;
        (this.bs || this.ff()) && (n |= 2);
        this.bD && (n |= 64);
        window.IsjQueryOwaTouchMode && window.IsjQueryOwaTouchMode() && (n |= 1048576);
        this.bn(n)
    },
    Y: function() {
        _j.i.prototype.Y.call(this);
        this.dJ();
        this.bS()
    },
    gr: function(n) {
        this.t() && this.cm(!1);
        if (this.i) {
            n.d();
            return
        }
        this.cM && this.cM.b && this.cM.a()
    },
    fg: function(n) {
        (n.a() === 13 || n.a() === 32) && this.bI(n)
    },
    bS: function() {
        this.bi();
        this.w()
    },
    bi: function() {
        this.Z() && (!this.t() && this.cu ? this.bg(this.cu) : this.bd && this.cy ? this.bg(this.cy) : this.bG() && this.ci ? this.bg(this.ci) : this.cA ? this.bg(this.cA) : this.dN())
    },
    w: function() {
        this.Z() && (!this.t() && this.cc ? this.br(this.cc) : this.bd && this.cz ? this.br(this.cz) : this.bG() && this.cv ? this.br(this.cv) : this.ck ? this.br(this.ck) : this.dO())
    },
    bg: function(n) {
        if (n !== this.ch) {
            this.eA(this.ch, n);
            this.eo(n)
        }
    },
    br: function(n) {
        n !== this.v() && this.dP(n)
    },
    dN: function() {
        if (this.ch) {
            this.eA(this.ch, "");
            this.ch = null
        }
    },
    dO: function() {
        if (this.bZ) {
            this.eA(this.bZ.a(), "");
            this.dP(null)
        }
    },
    de: function(n) {
        _ff.q.isInstanceOfType(this.bK()) && (this.bK().h = n);
        this.dc && _fc.b.a && _fc.b.a(this.dc);
        this.bK().a()
    },
    ee: function(n) {
        _j.i.prototype.ee.call(this, n);
        this.bD && this.cE(!1)
    },
    el: function(n) {
        switch (n) {
            case 0:
                return;
            case 1:
                this.bo("o365buttonOutlined ms-font-m ms-fwt-sb");
                this.f("ms-fcl-np ms-bgc-nlr ms-bcl-nlr ms-fcl-b-f ms-bcl-tp-f");
                this.c("ms-fcl-b ms-bgc-nl ms-bcl-nl");
                this.g("ms-fcl-nt ms-bgc-nlr ms-bcl-nlr");
                this.e("ms-fcl-w ms-bgc-tp ms-bcl-tp");
                return;
            case 4:
                this.bo("o365buttonOutlined ms-font-m ms-fwt-sb");
                this.f("ms-fcl-w ms-bgc-tp ms-bcl-tp ms-bgc-td-f ms-bcl-tdr-f");
                this.c("ms-fcl-w ms-bgc-td ms-bcl-td ms-bcl-tdr-f");
                this.g("ms-fcl-nt ms-bgc-nlr ms-bcl-nlr");
                this.e("ms-fcl-w ms-bgc-tp ms-bcl-tp");
                return;
            case 2:
                this.bo("o365buttonRegular ms-font-m ms-fwt-r");
                this.f("ms-fcl-np");
                this.c("ms-fcl-b");
                this.g("ms-fcl-nt");
                this.e("ms-fcl-tp");
                return;
            case 3:
                this.bo("ms-font-m ms-fwt-l");
                this.f("ms-fcl-tp");
                this.c("ms-fcl-td");
                this.g("ms-fcl-nta");
                this.e("ms-fcl-tp");
                return
        }
    },
    dv: function(n, t) {
        this.o(this.bK().b)
    },
    dJ: function() {
        if (this.B) {
            this.cj = this.B.a("Image");
            this.ca && this.cj && this.cj.bo(this.ca);
            this.bu = this.B.a("Label");
            this.cb && this.bu && this.bu.bo(this.cb);
            if (_j.h.b(this.co()) && !this.cq()) {
                if (this.bu) {
                    _j.h.a(this.bu.S().h()) && this.bu.S().f(_j.D.a());
                    this.S().e(this.bu.S().h())
                }
                var n = this.B.a("BtnDescription");
                if (n) {
                    _j.h.a(n.S().h()) && n.S().f(_j.D.a());
                    this.S().e(this.S().C() + " " + n.S().h())
                }
            }
        }
    },
    em: function() {
        this.bf("touchstart", this.du || (this.du = Function.createDelegate(this, this.en)), "isPressed");
        this.bf("touchend", this.cR || (this.cR = Function.createDelegate(this, this.dL)), "isPressed");
        this.bf("touchcancel", this.cR || (this.cR = Function.createDelegate(this, this.dL)), "isPressed")
    },
    ep: function() {
        this.bj("touchstart", "isPressed");
        this.bj("touchend", "isPressed");
        this.bj("touchcancel", "isPressed")
    },
    en: function(n) {
        this.cm(!0)
    },
    dL: function(n) {
        this.cm(!1)
    }
};
_fc.h = function(n, t) {
    _fc.h.initializeBase(this, [n]);
    _j.k.d(this.z, "checkbox");
    this.y("Checkbox");
    this.S().a(4);
    this.l(_fm.b.a(_fm.a.U, "ms-bgc-w ms-bcl-nta"));
    this.x(_fm.b.a(_fm.a.U, "ms-bgc-w ms-bcl-nl"));
    this.m(_fm.b.a(_fm.a.U, "ms-bgc-w ms-bcl-nsa"));
    this.r(_fm.b.a(_fm.a.U, "ms-bgc-w ms-bcl-nta ms-fcl-nl"));
    this.u(_fm.b.a(_fm.a.bK, "ms-bgc-w", "ms-bcl-nta", "ms-fcl-ns"));
    this.dR(_fm.b.a(_fm.a.bK, "ms-bgc-w", "ms-bcl-nl", "ms-fcl-nta"));
    this.E(_fm.b.a(_fm.a.bK, "ms-bgc-w", "ms-bcl-nd", "ms-fcl-nd"));
    this.bN(_fm.b.a(_fm.a.bK, "ms-bgc-w", "ms-bcl-nta", "ms-fcl-ns"))
};
_fc.n = function() {};
_fc.n.a = function() {
    return _fc.n.e() ? "right" : "left"
};
_fc.n.c = function() {
    return _fc.n.e() ? "left" : "right"
};
_fc.n.h = function() {
    return _fc.n.e() ? "padding-right" : "padding-left"
};
_fc.n.f = function() {
    return _fc.n.e() ? "margin-right" : "margin-left"
};
_fc.n.g = function() {
    return _fc.n.e() ? "margin-left" : "margin-right"
};
_fc.n.e = function() {
    if (!_fc.n.d || !_fc.n.d.e()) throw Error.invalidOperation("Culture was not initialized on CSSAttributes");
    return _fc.n.d.e().g()
};
_fc.n.b = function(n, t, i) {
    return _j.G.a().I ? i : _j.G.a().W ? t : n
};
_fc.n.i = function(n) {
    _j.s.a(n, "lazyCultureSettings");
    _fc.n.d = n
};
_fc.z = function(n) {
    this.c = Function.createDelegate(this, this.e);
    this.b = Function.createDelegate(this, this.d);
    _fc.z.initializeBase(this);
    this.a = n
};
_fc.z.prototype = {
    a: null,
    be: function(n) {
        _j.bV.prototype.be.call(this, n);
        this.X.bo("removeFocusOutline")
    },
    bb: function() {
        this.X.bj("keydown", ".focusHandling");
        this.X.bj("mousedown", ".focusHandling");
        this.X.z.className.indexOf("removeFocusOutline") !== -1 ? this.X.bf("keydown", this.b, ".focusHandling") : this.X.bf("mousedown", this.c, ".focusHandling");
        _j.bV.prototype.bb.call(this)
    },
    bc: function() {
        this.X.bj("keydown", ".focusHandling");
        this.X.bj("mousedown", ".focusHandling");
        _j.bV.prototype.bc.call(this)
    },
    e: function(n) {
        this.a.g() || this.a.i() ? this.X.bt("addFocusRingOutline") : this.X.bt("addFocusOutline");
        this.X.bo("removeFocusOutline");
        this.X.bj("mousedown", ".focusHandling");
        this.X.bf("keydown", this.b, ".focusHandling")
    },
    d: function(n) {
        if (n.a() === 9 || n.a() === 117 && n.h() || n.a() === 40 || n.a() === 38 || n.a() === _ff.j.a || n.a() === _ff.j.b) {
            this.X.bt("removeFocusOutline");
            this.a.g() || this.a.i() ? this.X.bo("addFocusRingOutline") : this.X.bo("addFocusOutline");
            this.X.bj("keydown", ".focusHandling");
            this.X.bf("mousedown", this.c, ".focusHandling")
        }
    }
};
_fc.x = function() {};
_fc.x.prototype = {
    a: function(n, t) {
        return _j.D.d(n)
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_fc.k = function() {};
_fc.k.prototype = {
    a: function(n, t) {
        return n === null || n === undefined ? !0 : Boolean.isInstanceOfType(n) ? !n : n
    },
    b: function(n, t) {
        return n === null || n === undefined ? !0 : Boolean.isInstanceOfType(n) ? !n : n
    }
};
_fc.q = function() {};
_fc.q.prototype = {
    a: function(n, t) {
        return n === t
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    }
};
_fc.B = function() {};
_fc.B.prototype = {
    a: function(n, t) {
        return !$a(n) && t === Object.getType(n)
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    }
};
_fc.t = function() {};
_fc.t.prototype = {
    a: function(n, t) {
        return !!n
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_fc.m = function() {};
_fc.m.prototype = {
    a: function(n, t) {
        return $a(n) ? !0 : String.isInstanceOfType(n) && _j.h.b(n) ? !0 : !1
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_fc.l = function() {};
_fc.l.prototype = {
    a: function(n, t) {
        return !n
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_fc.s = function(n) {
    _fc.s.initializeBase(this, [n])
};
_fc.s.prototype = {
    m: null,
    t: function(n) {
        this.m = n;
        this.S().k(n);
        this.by("ImageName");
        return n
    },
    j: function(n) {
        n !== null && n !== undefined ? this.z.setAttribute("alt", n) : this.z.removeAttribute("alt");
        return n
    }
};
_fc.v = function(n) {
    _fc.v.initializeBase(this, [n]);
    this.S().a(41)
};
_fc.p = function(n) {
    _fc.p.initializeBase(this, [n]);
    this.b(this.z.innerHTML)
};
_fc.p.b = function(n) {
    var i = n.instance;
    var t = n.newValue;
    i.z.innerHTML = t || ""
};
_fc.p.prototype = {
    d: null,
    c: null,
    b: function(n) {
        this.d = n;
        this.eK(_fc.p.a, this.e(n));
        return n
    },
    a: function(n) {
        this.c = n;
        this.eK(_fc.p.a, this.e(this.d));
        return n
    },
    e: function(n) {
        if (!n) return "";
        n = n.replace(new RegExp("&", "g"), "&amp;");
        n = n.replace(new RegExp('"', "g"), "&quot;");
        n = n.replace(new RegExp("'", "g"), "&#39;");
        n = n.replace(new RegExp("<", "g"), "&lt;");
        n = n.replace(new RegExp(">", "g"), "&gt;");
        n = _j.h.a(this.c) ? n.replace(new RegExp("&lt;mark&gt;", "g"), "<em>") : n.replace(new RegExp("&lt;mark&gt;", "g"), '<em class="' + this.c + '">');
        n = n.replace(new RegExp("&lt;/mark&gt;", "g"), "</em>");
        return n
    }
};
_fc.d = function(n, t, i) {
    _fc.d.initializeBase(this, [n]);
    this.h = t;
    this.g = i;
    _j.k.d(this.z, "owaimg");
    n.textContent = " "
};
_fc.d.prototype = {
    b: null,
    h: null,
    g: null,
    a: function(n) {
        if (this.b !== n) {
            var t = this.b;
            this.b = n;
            this.eA($a(t) ? "" : this.i(t), $a(this.b) ? "" : this.i(this.b));
            this.by("Id")
        }
        return n
    },
    i: function(n) {
        return _fm.A.isInstanceOfType(n) ? n.b(this.h, this.g) : n.a()
    }
};
_fc.a = function(n) {
    _fc.a.initializeBase(this, [n]);
    var t = n.lastChild;
    if (!t || t.nodeType !== 3) {
        t = document.createTextNode("");
        n.appendChild(t)
    }
    this.b = t
};
_fc.a.prototype = {
    b: null,
    f: null,
    e: function() {
        return this.f
    },
    a: function(n) {
        if (this.f !== n) {
            this.f = n;
            if (!this.b.parentNode || this.j()) {
                while (this.z.hasChildNodes()) this.z.removeChild(this.z.firstChild);
                var t = n ? n : "";
                this.b = document.createTextNode(t);
                this.b.id = this.cl();
                this.z.appendChild(this.b)
            } else this.b.nodeValue = n ? n : "";
            this.by("Text")
        }
        return n
    },
    j: function() {
        return !1
    },
    bz: function() {
        this.b = null;
        _j.i.prototype.bz.call(this)
    }
};
_fc.e = function(n) {
    this.bN = Function.createDelegate(this, this.cd);
    _fc.e.initializeBase(this, [n]);
    var t = this.z.getAttribute("href");
    t && this.b(t);
    this.D(7);
    this.o(!$a(this.s))
};
_fc.e.prototype = {
    bc: "LinkHandler",
    s: null,
    u: null,
    E: !1,
    p: function(n) {
        this.E !== n && (this.E = n);
        return n
    },
    b: function(n) {
        if (this.s !== n) {
            this.s = n;
            this.z.setAttribute("href", n);
            this.o(!$a(this.s));
            this.by("Href")
        }
        return n
    },
    a: function(n) {
        if (this.u !== n) {
            this.u = n;
            _j.h.b(this.u) ? this.z.removeAttribute("target") : this.z.setAttribute("target", this.u);
            this.by("TargetWindow")
        }
        return n
    },
    bI: function(n) {
        this.bY(n) || _fc.b.prototype.bI.call(this, n)
    },
    G: function() {
        _fc.b.prototype.G.call(this);
        this.bW()
    },
    M: function() {
        this.cs();
        _fc.b.prototype.M.call(this)
    },
    dw: function() {
        this.t() || this.z.removeAttribute("href");
        this.bS()
    },
    cd: function(n) {
        this.E && n.c()
    },
    bW: function() {
        var n = _j.x.b(this.z);
        n.b("click", this.bN, this.bc)
    },
    cs: function() {
        var n = _j.x.b(this.z);
        n.c("click", this.bc)
    },
    bY: function(n) {
        try {
            if ($a(window.getSelection)) {
                if (!$a(document.selection)) {
                    var t = document.selection.createRange();
                    if (t) {
                        var u = t.text;
                        if (!_j.h.a(u)) {
                            var r = t.parentElement();
                            if (r === n.b() || r.parentNode === n.b()) {
                                n.c();
                                return !0
                            }
                        }
                    }
                }
            } else {
                var i = window.getSelection();
                if (i.toString().length > 0) {
                    var f = i.anchorNode;
                    if (f.parentNode === n.b()) {
                        n.c();
                        return !0
                    }
                }
            }
        } catch (e) {}
        return !1
    }
};
_fc.E = function(n) {
    this.m = Function.createDelegate(this, this.o);
    this.n = Function.createDelegate(this, this.r);
    _fc.E.initializeBase(this, [n]);
    this.j = new _j.g(this.n, _ff.c.a, this.q());
    this.d = new _j.g(this.m, _ff.c.a, this.p())
};
_fc.E.prototype = {
    c: null,
    d: null,
    j: null,
    h: null,
    i: null,
    b: !1,
    v: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.j.c(this.q());
            this.d.c(this.p());
            this.bX(["IsSaving", "BusyText", "IsDockPanelHidden", "CanSave", "CanCancel"])
        }
        return n
    },
    u: function() {
        return this.b
    },
    q: function() {
        return !this.b
    },
    p: function() {
        return !this.b
    },
    H: function() {
        _j.c.prototype.H.call(this);
        this.c = this.B.a("CancelButton")
    },
    G: function() {
        _j.c.prototype.G.call(this);
        this.u() && this.c && this.c.z.focus()
    },
    r: function() {
        this.v(!0);
        $a(this.i) || this.i.a()
    },
    o: function() {
        $a(this.h) || this.h.a()
    }
};
_fc.y = function(n) {
    _fc.y.initializeBase(this, [n]);
    var t = this.z.getAttribute("src");
    t && this.a(t)
};
_fc.y.prototype = {
    c: function() {
        return this.eM(_fc.y.a)
    },
    a: function(n) {
        if (this.c() !== n) {
            this.eK(_fc.y.a, n);
            _j.h.b(n) ? this.z.removeAttribute("src") : this.z.setAttribute("src", n)
        }
        return n
    }
};
_fc.w = function(n) {
    _fc.w.initializeBase(this, [n])
};
_fc.i = function(n) {
    this.da = Function.createDelegate(this, this.ca);
    _fc.i.initializeBase(this, [n]);
    this.cS(!1);
    this.bV(2);
    this.S().a(22);
    this.bc = !0;
    this.c("");
    this.dG("");
    this.g("");
    this.m(!0);
    this.a(-1);
    this.d(!0);
    this.e(!0);
    this.g("");
    this.i("ms-fcl-ns")
};
_fc.i.prototype = {
    bl: null,
    bv: 1,
    br: null,
    bi: null,
    f: !1,
    cs: !1,
    k: !1,
    ck: !1,
    cm: null,
    u: !1,
    bs: null,
    p: null,
    bU: 0,
    b: "",
    cK: !1,
    bW: !1,
    bc: !1,
    c: function(n) {
        n = n || "";
        n = this.ct(n, this.bU);
        if (this.b !== n) {
            if (_j.h.a(n)) {
                this.de();
                this.u || this.bY(n)
            } else {
                this.ci();
                this.bY(n)
            }
            this.b = n;
            this.by("Text")
        }
        return n
    },
    h: function(n) {
        if (this.bv !== n) {
            this.bv = n;
            this.cT(n);
            this.by("Type")
        }
        return n
    },
    dF: function() {
        var n = this.z.getAttribute("pattern");
        return n || ""
    },
    dd: function(n) {
        if (this.dF() !== n) {
            this.z.setAttribute("pattern", n);
            this.by("Pattern")
        }
        return n
    },
    t: function() {
        return this.z.getAttribute("disabled") !== "true"
    },
    m: function(n) {
        if (this.t() !== n) {
            if (n) {
                this.z.removeAttribute("disabled");
                this.bo("ms-bgc-w");
                this.bo("ms-bcl-nta");
                this.bo("ms-bcl-nsa-h")
            } else {
                this.o(!1);
                this.z.setAttribute("disabled", "true");
                this.bt("ms-bcl-nta");
                this.bt("ms-bcl-nsa-h");
                this.bt("ms-bgc-w");
                this.bo("ms-bgc-nl")
            }
            this.by("IsEnabled")
        }
        return n
    },
    cO: function() {
        return this.z.getAttribute("readonly") === "true"
    },
    j: function(n) {
        if (this.cO() !== n) {
            n ? this.z.setAttribute("readonly", "true") : this.z.removeAttribute("readonly");
            this.S().s(n);
            this.by("IsReadOnly")
        }
        return n
    },
    a: function(n) {
        if (n === -1) this.z.removeAttribute("maxLength");
        else {
            this.z.setAttribute("maxLength", n.toString());
            this.c(this.ct(this.b, n))
        }
        this.bU = n;
        return n
    },
    dE: function() {
        var n = this.z.getAttribute("name");
        return n || ""
    },
    dG: function(n) {
        if (this.dE() !== n) {
            this.z.setAttribute("name", n);
            this.z.setAttribute("title", n);
            this.by("Name")
        }
        return n
    },
    g: function(n) {
        n = n || "";
        if (this.p !== n) {
            this.p = n;
            this.u && this.bY(n);
            this.by("Placeholder")
        }
        return n
    },
    cM: function() {
        return this.z.getAttribute("autocapitalize") === "off"
    },
    d: function(n) {
        if (this.cM() !== n) {
            n ? this.z.removeAttribute("autocapitalize") : this.z.setAttribute("autocapitalize", "off");
            this.by("IsAutoCapitalize")
        }
        return n
    },
    cN: function() {
        return this.z.getAttribute("autocorrect") === "off"
    },
    e: function(n) {
        if (this.cN() !== n) {
            n ? this.z.removeAttribute("autocorrect") : this.z.setAttribute("autocorrect", "off");
            this.by("IsAutoCorrect")
        }
        return n
    },
    be: function(n) {
        if (this.ck === n) return n;
        this.ck = n;
        return n
    },
    s: function(n) {
        if (this.cm !== n) {
            this.cm = n;
            this.z.setAttribute("placeholder", n);
            this.cJ()
        }
        return n
    },
    n: function(n) {
        if (this.bl !== n) {
            this.bl = n;
            this.by("EnterCommand")
        }
        return n
    },
    bd: function(n) {
        if (this.br !== n) {
            this.br = n;
            this.by("FocusCommand")
        }
        return n
    },
    q: function(n) {
        if (this.bi !== n) {
            this.bi = n;
            this.by("BlurCommand")
        }
        return n
    },
    cj: function() {
        var n = -1;
        this.k && (n = this.cR());
        return n
    },
    bu: function(n) {
        try {
            this.z.selectionStart = n
        } catch (t) {
            this.z.setAttribute("selectionStart", n)
        }
        return n
    },
    cR: function() {
        var n = -1;
        var i = !1;
        try {
            n = this.z.selectionStart
        } catch (u) {
            i = !0
        }
        if (i || isNaN(n)) try {
            var t = document.selection.createRange().duplicate();
            t.moveEnd("character", this.b.length);
            n = _j.h.a(t.text) ? this.b.length : this.b.lastIndexOf(t.text)
        } catch (r) {}
        return n
    },
    db: function() {
        var n = -1;
        return this.k ? this.cQ() : n
    },
    cp: function(n) {
        try {
            this.z.selectionEnd = n
        } catch (t) {
            this.z.setAttribute("selectionEnd", n)
        }
        return n
    },
    cQ: function() {
        var n = -1;
        var i = !1;
        try {
            n = this.z.selectionEnd
        } catch (u) {
            i = !0
        }
        if (i || isNaN(n)) try {
            var t = document.selection.createRange().duplicate();
            t.moveStart("character", -this.b.length);
            n = $a(t.text) ? this.b.length : t.text.length
        } catch (r) {}
        return n
    },
    o: function(n) {
        if (n !== this.k) {
            this.k = n;
            n ? this.l() : this.bZ();
            this.by("HasFocus")
        }
        return n
    },
    i: function(n) {
        if (this.bs !== n) {
            this.eA(this.bs, n);
            this.bs = n
        }
        return n
    },
    v: function(n) {
        if (n === this.cK) return n;
        this.cK = n;
        n ? this.z.setAttribute("spellcheck", "false") : this.z.removeAttribute("spellcheck");
        return n
    },
    bY: function(n) {
        this.z.value !== n && (this.z.value = n);
        return n
    },
    dc: function() {
        return _j.h.a(this.cm)
    },
    l: function() {
        this.k || this.bu(this.b.length);
        this.z.focus()
    },
    bZ: function() {
        this.z.blur()
    },
    P: function() {
        _j.c.prototype.P.call(this);
        this.bc && this.bo("textbox ms-font-s ms-fwt-sl ms-fcl-np ms-bcl-nta ms-bcl-nsa-h");
        this.bn(2229088);
        this.ck && this.bo("hideClearButton")
    },
    G: function() {
        _j.c.prototype.G.call(this);
        this.cJ();
        if (this.f) {
            var n = this;
            _j.m.a().a(this.I(), "TextBox.OnActivate", function() {
                n.l()
            }, 100)
        }
    },
    M: function() {
        _j.G.a().M && document.activeElement === this.z && this.z.blur();
        this.ci();
        _j.c.prototype.M.call(this)
    },
    eO: function(n) {
        _j.i.prototype.eO.call(this, n);
        this.bW || this.ca()
    },
    nE: function(n) {
        _j.i.prototype.nE.call(this, n);
        this.bW || this.ca()
    },
    ee: function(n) {
        _j.i.prototype.ee.call(this, n);
        this.ca();
        this.cS(!1);
        this.cJ();
        this.bi && this.bi.b && this.bi.a()
    },
    cD: function(n) {
        _j.i.prototype.cD.call(this, n);
        this.cS(!0);
        this.ci();
        this.br && this.br.b && this.br.a()
    },
    cS: function(n) {
        if (n !== this.k) {
            this.k = n;
            this.by("HasFocus")
        }
    },
    cg: function(n) {
        if (n.a() === 13) {
            n.c();
            this.bW && this.ca();
            this.bl && this.bl.b && this.bl.a();
            this.cs && n.d()
        }
        this.bW || this.dH()
    },
    dH: function() {
        _j.m.a().c(this.I(), "TextBox.UpdateTextValueAsync", this.da)
    },
    ca: function() {
        this.u || this.c(this.z.value)
    },
    ct: function(n, t) {
        return t === -1 || n.length <= t ? n : n.substr(0, t)
    },
    cT: function(n) {
        var u = this.z;
        if (_j.G.a().N) this.dj(u, n);
        else {
            var t;
            if (this.bv !== 6) t = u.cloneNode(!1);
            else {
                t = document.createElement("input");
                for (var f = u.attributes, i = 0; i < f.length; i++) {
                    var r = f.item(i);
                    r.name !== "type" && t.setAttribute(r.name, r.value)
                }
            }
            var e = new Array(1);
            e[0] = t;
            this.dj(t, n);
            this.sF(t)
        }
    },
    dj: function(n, t) {
        n.setAttribute("type", _fc.C.toString(t))
    },
    cJ: function() {
        _j.h.a(this.z.value) && this.dc() ? this.de() : this.ci()
    },
    de: function() {
        if (!this.u && !this.k && this.dc()) {
            this.bv === 6 && this.cT(1);
            this.df(-1);
            this.u = !0;
            this.bY(this.p);
            this.eA("", this.bs)
        }
    },
    ci: function() {
        if (this.u) {
            this.bv === 6 && this.cT(6);
            this.bY("");
            this.df(this.bU);
            this.u = !1
        }
        this.eA(this.bs, "")
    },
    df: function(n) {
        if (n === -1) this.z.removeAttribute("maxLength");
        else {
            this.z.setAttribute("maxLength", n.toString());
            this.c(this.ct(this.b, n))
        }
    }
};
_fc.j = function(n) {
    _fc.j.initializeBase(this, [n])
};
_fc.j.prototype = {
    cT: !1,
    cF: null,
    cC: null,
    cJ: null,
    cH: null,
    cO: null,
    cN: null,
    cG: null,
    cX: null,
    cd: null,
    bP: null,
    bY: !0,
    q: function() {
        return this.cT
    },
    p: function(n) {
        if (this.cT !== n) {
            this.cT = n;
            this.by("IsChecked");
            this.dI();
            this.bS()
        }
        return n
    },
    s: function(n) {
        if (this.cC !== n) {
            this.cC = n;
            this.bi()
        }
        return n
    },
    u: function(n) {
        if (this.cF !== n) {
            this.cF = n;
            this.w()
        }
        return n
    },
    E: function(n) {
        if (this.cJ !== n) {
            this.cJ = n;
            this.w()
        }
        return n
    },
    dS: function(n) {
        if (this.cH !== n) {
            this.cH = n;
            this.bi()
        }
        return n
    },
    bN: function(n) {
        if (this.cO !== n) {
            this.cO = n;
            this.w()
        }
        return n
    },
    dW: function(n) {
        if (this.cN !== n) {
            this.cN = n;
            this.bi()
        }
        return n
    },
    dR: function(n) {
        if (this.cG !== n) {
            this.cG = n;
            this.w()
        }
        return n
    },
    bW: function(n) {
        if (this.cd !== n) {
            this.cd = n;
            this.q() || _j.h.a(this.cd) || this.k(this.cd)
        }
        return n
    },
    bR: function(n) {
        if (this.bP !== n) {
            this.bP = n;
            this.q() && !_j.h.a(this.bP) && this.k(this.bP)
        }
        return n
    },
    bI: function(n) {
        !this.cf && this.bY && this.t() && this.p(!this.q());
        _fc.b.prototype.bI.call(this, n)
    },
    dp: function(n) {
        this.cf && this.bY && this.t() && this.p(!this.q());
        _fc.b.prototype.dp.call(this, n)
    },
    bi: function() {
        if (this.Z()) {
            var n = !1;
            if (this.q())
                if (!this.t() && this.cX) {
                    this.bg(this.cX);
                    n = !0
                } else if (this.bd && this.cN) {
                this.bg(this.cN);
                n = !0
            } else if (this.bG() && this.cH) {
                this.bg(this.cH);
                n = !0
            } else if (this.cC) {
                this.bg(this.cC);
                n = !0
            }
            n || _fc.b.prototype.bi.call(this)
        }
    },
    w: function() {
        if (this.Z()) {
            var n = !1;
            if (this.q())
                if (!this.t() && this.cG) {
                    this.br(this.cG);
                    n = !0
                } else if (this.bd && this.cO) {
                this.br(this.cO);
                n = !0
            } else if (this.bG() && this.cJ) {
                this.br(this.cJ);
                n = !0
            } else if (this.cF) {
                this.br(this.cF);
                n = !0
            }
            n || _fc.b.prototype.w.call(this)
        }
    },
    P: function() {
        _fc.b.prototype.P.call(this);
        if (!this.ny()) {
            this.S().a(3);
            this.S().z(_j.D.b(this.q()))
        }
    },
    dI: function() {
        this.q() && !_j.h.a(this.bP) ? this.k(this.bP) : this.q() || _j.h.a(this.cd) || this.k(this.cd);
        this.ny() === 3 && this.S().z(_j.D.b(this.q()))
    }
};
_fc.D = function(n) {
    _fc.D.initializeBase(this, [n])
};
_fc.D.prototype = {
    bc: null,
    cQ: null,
    b: null,
    cB: null,
    cZ: null,
    cW: null,
    cs: null,
    bJ: null,
    cV: null,
    a: 0,
    dl: function(n) {
        if (this.bc !== n) {
            this.bc = n;
            this.w()
        }
        return n
    },
    dk: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.w()
        }
        return n
    },
    db: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.by("CurrentToggleButtonState");
            this.da()
        }
        return n
    },
    q: function() {
        return _fc.j.prototype.q.call(this)
    },
    p: function(n) {
        if (_fc.j.prototype.q.call(this) !== n) {
            _fc.j.prototype.p.call(this, n);
            this.db(_fc.j.prototype.q.call(this) ? 1 : 0);
            this.by("CurrentToggleButtonState");
            this.da()
        }
        return n
    },
    da: function() {
        switch (this.a) {
            case 2:
                _fc.j.prototype.p.call(this, !1);
                _j.h.a(this.cV) || this.k(this.cV);
                break;
            case 1:
                _fc.j.prototype.p.call(this, !0);
                break;
            case 0:
                _fc.j.prototype.p.call(this, !1);
                break;
            default:
                break
        }
        this.ny() === 4 && this.S().d(this.a);
        this.bS();
        this.w()
    },
    w: function() {
        if (this.Z()) {
            var n = null;
            this.a === 2 && (!this.t() && this.cs ? n = this.cs : this.bd && this.cZ ? n = this.cZ : this.bG() && this.b ? n = this.b : this.bc && (n = this.bc));
            if (n) {
                this.br(n);
                return
            }
            _fc.j.prototype.w.call(this)
        }
    },
    bi: function() {
        if (this.Z()) {
            var n = null;
            this.a === 2 && (!this.t() && this.bJ ? n = this.bJ : this.bd && this.cW ? n = this.cW : this.bG() && this.cB ? n = this.cB : this.cQ && (n = this.cQ));
            if (n) {
                this.bg(n);
                return
            }
            _fc.j.prototype.bi.call(this)
        }
    },
    P: function() {
        _fc.j.prototype.P.call(this);
        this.S().x() === 4 && this.S().d(this.a)
    }
};
_fc.o = function() {};
_fc.o.$$cctor = function() {
    _fc.o._I()
};
_fc.o.o = function() {
    var n = window.document.createElement("DIV");
    n.innerHTML = "<div> <span class='_fc_3'></span> <span class='_fc_4 o365buttonLabel'></span> </div><div> <span class='_fc_4'></span> <span class='_fc_3'></span> </div><div> <span class='_fc_6'></span> <span class='_fc_5 ms-fwt-sl ms-font-s'></span> </div>";
    _j.i.a().appendChild(n);
    return n
};
_fc.o.b = function(n) {
    return n.v()
};
_fc.o.i = function(n) {
    return n.be
};
_fc.o.m = function(n) {
    return n.dK()
};
_fc.o.p = function(n) {
    return n.t()
};
_fc.o.j = function(n, t) {
    n.a(t)
};
_fc.o.c = function(n, t) {
    n.K(t)
};
_fc.o.k = function(n, t) {
    n.a(t)
};
_fc.o.h = function() {
    _fc.o.g || (_fc.o.g = new _fc.l);
    return _fc.o.g
};
_fc.o.l = function() {
    _fc.o.e || (_fc.o.e = new _fc.k);
    return _fc.o.e
};
_fc.o.n = function() {
    _fc.o.f || (_fc.o.f = new _fc.m);
    return _fc.o.f
};
_fc.o._I = function() {
    var i = "Button.ImageLeft";
    new _j.d(i, function() {
        _fc.o.a[i] === undefined && (_fc.o.a[i] = [
            [
                [-1, 1, ["CurrentImageId"],
                    [_fc.o.b], null, "Id", null, _fc.o.j, 1, null, null, null
                ],
                [-1, 1, ["CurrentImageId"],
                    [_fc.o.b], null, "IsHidden", null, _fc.o.c, 1, _fc.o.h(), null, !0
                ]
            ],
            [
                [-1, 1, ["Text"],
                    [_fc.o.i], null, "Text", null, _fc.o.k, 1, null, null, null
                ],
                [-1, 1, ["IsTextHidden"],
                    [_fc.o.m], null, "IsHidden", null, _fc.o.c, 1, null, null, !0
                ],
                [-1, 5, ["CurrentImageId"],
                    [_fc.o.b], null, "_fc_2", null, null, 1, new _j.r([_fc.o.h(), _fc.o.l()], [null, null]), null, null
                ]
            ]
        ]);
        var n = _fc.o.d.childNodes[0].cloneNode(!0);
        var r = new _fc.a(n.children[1]);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, r]).l({
            Image: t,
            Label: r
        })
    }, "", Object, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !1, !1, 0, _fc.o.a);
    var t = "Button.ImageRight";
    new _j.d(t, function() {
        _fc.o.a[t] === undefined && (_fc.o.a[t] = [
            [
                [-1, 1, ["Text"],
                    [_fc.o.i], null, "Text", null, _fc.o.k, 1, null, null, null
                ],
                [-1, 1, ["IsTextHidden"],
                    [_fc.o.m], null, "IsHidden", null, _fc.o.c, 1, null, null, !0
                ],
                [-1, 5, ["CurrentImageId"],
                    [_fc.o.b], null, "_fc_2", null, null, 1, new _j.r([_fc.o.h(), _fc.o.l()], [null, null]), null, null
                ]
            ],
            [
                [-1, 1, ["CurrentImageId"],
                    [_fc.o.b], null, "Id", null, _fc.o.j, 1, null, null, null
                ],
                [-1, 1, ["CurrentImageId"],
                    [_fc.o.b], null, "IsHidden", null, _fc.o.c, 1, _fc.o.h(), null, !0
                ]
            ]
        ]);
        var n = _fc.o.d.childNodes[1].cloneNode(!0);
        var r = new _fc.d(n.children[1], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var i = new _fc.a(n.children[0]);
        return new _j.a(n, [i, r]).l({
            Label: i,
            Image: r
        })
    }, "", Object, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !1, !1, 0, _fc.o.a);
    var n = "Checkbox";
    new _j.d(n, function() {
        _fc.o.a[n] === undefined && (_fc.o.a[n] = [
            [
                [-1, 1, ["CurrentImageId"],
                    [_fc.o.b], null, "Id", null, _fc.o.j, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["Text"],
                    [_fc.o.i], null, "Text", null, _fc.o.k, 1, null, null, null
                ],
                [-1, 1, ["Text"],
                    [_fc.o.i], null, "IsHidden", null, _fc.o.c, 1, _fc.o.n(), null, !0
                ],
                [-1, 5, ["IsEnabled"],
                    [_fc.o.p], null, "ms-fcl-np ms-fcl-b-h:ms-fcl-nt", null, null, 1, null, null, null
                ]
            ]
        ]);
        var t = _fc.o.d.childNodes[2].cloneNode(!0);
        var r = new _fc.a(t.children[1]);
        var i = new _fc.d(t.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(t, [i, r]).l({
            Image: i,
            Label: r
        })
    }, "", Object, _fc.h, function(n) {
        return new _fc.h(n, _j.b.Instance.a(_ff.a))
    }, !1, !1, !1, 0, _fc.o.a)
};
_fc.r.registerClass("_fc.r", _j.bk, _fc.I);
_fc.c.registerClass("_fc.c", _fc.r);
_fc.g.registerClass("_fc.g", _j.bV);
_fc.G.registerClass("_fc.G", _j.bV);
_fc.u.registerClass("_fc.u", _j.bV);
_fc.b.registerClass("_fc.b", _j.c);
_fc.j.registerClass("_fc.j", _fc.b);
_fc.h.registerClass("_fc.h", _fc.j);
_fc.z.registerClass("_fc.z", _j.bV);
_fc.x.registerClass("_fc.x", null, _j.bP);
_fc.k.registerClass("_fc.k", null, _j.bP);
_fc.q.registerClass("_fc.q", null, _j.bP);
_fc.B.registerClass("_fc.B", null, _j.bP);
_fc.t.registerClass("_fc.t", null, _j.bP);
_fc.m.registerClass("_fc.m", null, _j.bP);
_fc.l.registerClass("_fc.l", null, _j.bP);
_fc.y.registerClass("_fc.y", _j.i);
_fc.s.registerClass("_fc.s", _fc.y);
_fc.v.registerClass("_fc.v", _j.c);
_fc.p.registerClass("_fc.p", _j.i);
_fc.d.registerClass("_fc.d", _j.i);
_fc.a.registerClass("_fc.a", _j.i);
_fc.e.registerClass("_fc.e", _fc.b);
_fc.E.registerClass("_fc.E", _j.c);
_fc.w.registerClass("_fc.w", _j.i);
_fc.i.registerClass("_fc.i", _j.c);
_fc.D.registerClass("_fc.D", _fc.j);
_fc.r.b = new _j.g(_j.P.a, _ff.c.a);
_fc.r.c = null;
_fc.g.c = null;
_fc.g.b = null;
_fc.g.a = null;
_fc.u.a = null;
_fc.b.a = null;
_fc.n.d = null;
_fc.p.a = new _j.K("Html", String, _fc.p, null, null, _fc.p.b);
_fc.y.a = new _j.K("Source", String, _fc.y);
_fc.o.d = _fc.o.o();
_fc.o.g = null;
_fc.o.e = null;
_fc.o.f = null;
_fc.o.a = {};
_fc.o.$$cctor();
Type.registerNamespace("_fce");
_fce.M = function() {
    this.e = Function.createDelegate(this, this.i);
    this.f = Function.createDelegate(this, this.j);
    _fce.M.initializeBase(this)
};
_fce.M.prototype = {
    c: 0,
    d: 0,
    b: 0,
    a: 0,
    bb: function() {
        _j.bV.prototype.bb.call(this);
        this.g()
    },
    bc: function() {
        _j.bV.prototype.bc.call(this);
        this.h()
    },
    g: function() {
        var n = this.X.z;
        _j.k.b(n, "touchstart", this.f, _fce.M.a);
        _j.k.b(n, "touchmove", this.e, _fce.M.a)
    },
    j: function(n) {
        n.c();
        var t = n.k();
        if (t.length === 1) {
            this.c = t[0].pageX;
            this.d = t[0].pageY;
            this.b = this.X.z.scrollTop;
            this.a = this.X.z.scrollLeft
        }
    },
    i: function(n) {
        n.c();
        var t = n.k();
        if (t.length === 1) {
            var r = t[0].pageY - this.d;
            var i = t[0].pageX - this.c;
            this.X.z.scrollTop = this.b - r;
            this.X.z.scrollLeft = this.a - i
        }
    },
    h: function() {
        var n = this.X.z;
        _j.k.c(n, "touchstart", _fce.M.a);
        _j.k.c(n, "touchmove", _fce.M.a)
    }
};
_fce.bd = function() {};
_fce.bd.prototype = {
    pixels: 0,
    percentage: 1,
    auto: 2
};
_fce.bd.registerEnum("_fce.bd", !1);
_fce.be = function() {};
_fce.be.prototype = {
    top: 0,
    right: 1,
    bottom: 2,
    left: 3,
    fill: 4
};
_fce.be.registerEnum("_fce.be", !1);
_fce.Q = function() {};
_fce.Q.prototype = {
    relative: 1,
    absolute: 2,
    fixed: 3
};
_fce.Q.registerEnum("_fce.Q", !1);
_fce.bi = function(n, t, i) {
    this.bd = Function.createDelegate(this, this.br);
    _fce.bi.initializeBase(this, [n]);
    this.r = t.j();
    this.t = i.a()
};
_fce.bi.prototype = {
    r: !1,
    h: null,
    j: !1,
    o: !1,
    a: 2e3,
    l: null,
    i: 0,
    t: 0,
    c: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.by("IsBusy");
            this.S().E(n);
            this.bs()
        }
        return n
    },
    d: function(n) {
        if (this.l !== n) {
            this.l = n;
            this.by("BusyText")
        }
        return n
    },
    b: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.bA("SpinnerSize", "SpinnerImage")
        }
        return n
    },
    p: function() {
        switch (this.i) {
            case 0:
                return this.t === "Mouse" ? _fm.q.d() : _fm.q.c();
            case 1:
                return this.t === "Mouse" ? _fm.q.g() : _fm.q.f();
            default:
                throw Error.invalidOperation("Unknown SpinnerSize parameter");
        }
    },
    m: function() {
        this.o = !0
    },
    q: function() {
        this.o = !1
    },
    bz: function() {
        this.h && (this.h = _j.m.a().b(this.h));
        _j.c.prototype.bz.call(this)
    },
    bs: function() {
        if (this.j) this.a <= 0 ? this.m() : this.h || (this.h = _j.m.a().a(this.I(), "ShowActivityIndicator", this.bd, this.a));
        else {
            this.h && (this.h = _j.m.a().b(this.h));
            this.o && this.q()
        }
    },
    br: function() {
        this.h = null;
        this.m()
    }
};
_fce.h = function(n, t, i) {
    _fce.h.initializeBase(this, [n, t, i]);
    this.D(9);
    this.S().t(!0);
    this.y("ActivityIndicatorInline");
    this.K(!this.o);
    this.f(!1);
    this.k(!1)
};
_fce.h.prototype = {
    s: !1,
    u: !1,
    g: !1,
    e: !1,
    p: function() {
        if (this.g) switch (this.i) {
            case 0:
                return _fm.q.e();
            case 1:
                return _fm.q.h();
            default:
                throw Error.invalidOperation("Unknown SpinnerSize parameter");
        }
        return _fce.bi.prototype.p.call(this)
    },
    n: function(n) {
        if (this.s !== n) {
            this.s = n;
            this.by("ShowTextFirst")
        }
        return n
    },
    f: function(n) {
        this.u = n;
        this.by("IsGray");
        return n
    },
    k: function(n) {
        this.g = n;
        this.by("IsWhite");
        return n
    },
    m: function() {
        _fce.bi.prototype.m.call(this);
        this.S().t(!1);
        this.K(!1)
    },
    q: function() {
        _fce.bi.prototype.q.call(this);
        this.S().t(!0);
        this.K(!0)
    }
};
_fce.u = function() {};
_fce.u.b = function() {
    return _fc.n.b("transitionend", "webkitTransitionEnd", "transitionend")
};
_fce.u.c = function() {
    return _fc.n.b("MozTransform", "-webkit-transform", "msTransform")
};
_fce.u.a = function(n, t, i) {
    return _j.G.a().M || _j.G.a().K || i ? "translate(" + n.toString() + "px, " + t.toString() + "px)" : "translate3D(" + n.toString() + "px, " + t.toString() + "px, 0px)"
};
_fce.bj = function(n) {
    _fce.bj.initializeBase(this);
    this.p = n;
    this.r = !0
};
_fce.bj.prototype = {
    p: null,
    w: null,
    S: !1,
    l: null,
    r: !1,
    T: !1,
    m: function(n) {
        this.w = n;
        this.l && this.l.y(this.w);
        return n
    },
    k: function() {
        return this.S
    },
    j: function(n) {
        if (this.S !== n) {
            this.S = n;
            this.by("IsShown");
            this.X && this.X.dB(this.k() ? 1 : 0);
            this.v()
        }
        return n
    },
    q: function(n) {
        if (this.r !== n) {
            this.r = n;
            this.cd()
        }
        return n
    },
    bz: function() {
        this.z();
        this.bo();
        _j.bV.prototype.bz.call(this)
    },
    bb: function() {
        _j.bV.prototype.bb.call(this);
        if (this.X.kP()) this.T = !1;
        else {
            this.X.S().c(0);
            this.T = !0
        }
        this.L();
        this.r && this.B()
    },
    bc: function() {
        _j.bV.prototype.bc.call(this);
        this.T && this.X.z.removeAttribute("tabindex");
        this.L();
        this.r && this.z()
    },
    be: function(n) {
        _j.bV.prototype.be.call(this, n);
        this.X.dB(this.k() ? 1 : 0)
    },
    v: function() {
        if (this.l) {
            this.l.a(this.k());
            if (!this.k()) {
                this.l.bx();
                this.bo()
            }
        }
    },
    cd: function() {
        this.r ? this.B() : this.z();
        this.X && this.X.S().p(!this.r)
    },
    R: function() {},
    bo: function() {
        this.R();
        if (this.l) {
            this.l.ba(null);
            this.l.dispose();
            this.l = null
        }
    },
    L: function() {
        this.X && this.X.S().j(this.Z())
    }
};
_fce.S = function(n) {
    this.n = Function.createDelegate(this, this.v);
    this.o = Function.createDelegate(this, this.y);
    this.p = Function.createDelegate(this, this.z);
    this.f = Function.createDelegate(this, this.A);
    _fce.S.initializeBase(this);
    this.q = n
};
_fce.S.a = function(n, t, i, r) {
    return Math.sqrt(Math.pow(i - n, 2) + Math.pow(r - t, 2))
};
_fce.S.prototype = {
    q: null,
    a: null,
    k: 0,
    l: 0,
    h: 0,
    g: 0,
    b: !1,
    c: 1,
    e: 1,
    j: null,
    i: null,
    m: 0,
    d: function() {
        this.a || (this.a = new _j.i(this.X.z.children[0]));
        return this.a
    },
    bb: function() {
        _j.bV.prototype.bb.call(this);
        this.t()
    },
    bc: function() {
        this.u();
        _j.bV.prototype.bc.call(this)
    },
    t: function() {
        var n = this.d();
        n.bf("mousedown", this.f, "PinchZoom");
        n.bf("mouseup", this.f, "PinchZoom");
        this.X.bf("mousemove", this.p, "PinchZoom");
        this.X.bf("scroll", this.o, "PinchZoom");
        this.X.bf("click", this.n, "PinchZoom")
    },
    u: function() {
        var n = this.d();
        n.bj("mousedown", "PinchZoom");
        n.bj("mouseup", "PinchZoom");
        this.X.bj("mousemove", "PinchZoom");
        this.X.bj("scroll", "PinchZoom");
        this.X.bj("click", "PinchZoom")
    },
    x: function() {
        var n = this.d();
        this.k = this.X.z.scrollLeft;
        this.l = this.X.z.scrollTop;
        this.h = n.z.offsetWidth;
        this.g = n.z.offsetHeight;
        this.b = !0
    },
    w: function(n, t, i) {
        var e = this.d();
        if (n < 1) {
            var f = 1 - n;
            f = f * .5;
            n = 1 - f
        } else {
            var u = n - 1;
            u = u * .5;
            n = 1 + u
        }
        var r = n * this.c;
        r > 2 && (r = 2);
        r < .5 && (r = .5);
        if (r !== this.e) {
            this.s(r, n, t, i);
            this.j = new Date
        }
    },
    s: function(n, t, i, r) {
        var c = this.X.z.scrollLeft;
        var l = this.X.z.scrollTop;
        this.e = n;
        var u = (i + c) / this.c;
        var f = (r + l) / this.c;
        _j.k.a(this.a.z, "-webkit-transform-origin", u + "px " + f + "px");
        _j.k.a(this.a.z, "-webkit-transform", "scale(" + n + ")");
        var v = n * u - u;
        var a = n * f - f;
        this.a.z.style.marginLeft = v + "px";
        this.a.z.style.marginTop = a + "px";
        var o = t * i - i;
        var e = t * r - r;
        var h = this.k * t + o;
        var s = this.l * t + e;
        this.X.z.scrollLeft = h;
        this.X.z.scrollTop = s;
        if (n !== 1) {
            this.a.z.style.width = this.h + "px";
            this.a.z.style.height = this.g + "px"
        } else {
            this.a.z.removeAttribute("width");
            this.a.z.removeAttribute("height")
        }
    },
    r: function() {
        this.c = this.e;
        this.b = !1
    },
    A: function(n) {
        if (n.k())
            if (n.k().length !== 2 || this.b) n.k().length !== 2 && this.b && this.r();
            else {
                this.m = _fce.S.a(n.k()[0].screenX, n.k()[0].screenY, n.k()[1].screenX, n.k()[1].screenY);
                this.x()
            }
    },
    z: function(n) {
        if (this.b) {
            if (n.k().length !== 2) {
                this.r();
                return
            }
            n.c();
            n.d();
            if (new Date - this.j < 35) return;
            var r = _fce.S.a(n.k()[0].screenX, n.k()[0].screenY, n.k()[1].screenX, n.k()[1].screenY);
            var u = r / this.m;
            var t = (n.k()[0].screenX + n.k()[1].screenX) / 2;
            var i = (n.k()[0].screenY + n.k()[1].screenY) / 2;
            this.w(u, t, i)
        }
    },
    y: function(n) {
        if (this.b) {
            n.c();
            n.d()
        }
    },
    v: function(n) {
        if (!this.b)
            if (new Date - this.i <= 500) {
                if (this.c !== 1) {
                    this.s(1, 1, n.e(), n.f());
                    this.c = 1
                }
            } else this.i = new Date
    }
};
_fce.H = function(n, t, i) {
    this.a = n;
    this.b = t;
    this.c = i
};
_fce.H.prototype = {
    b: !1,
    a: null,
    c: null
};
_fce.s = function(n, t) {
    _fce.s.initializeBase(this, [n]);
    this.y("CommandingBar");
    this.b = t.g()
};
_fce.s.prototype = {
    b: !1,
    d: null,
    c: !1,
    f: function() {
        var n = this;
        return new _j.g(function() {
            n.c = !0
        }, this.I())
    },
    H: function() {
        _j.c.prototype.H.call(this);
        this.d = this.B.a("ListView")
    }
};
_fce.C = function(n, t) {
    this.bW = Function.createDelegate(this, this.dc);
    this.ca = Function.createDelegate(this, this.dl);
    this.bZ = Function.createDelegate(this, this.dk);
    this.t = -1;
    _fce.C.initializeBase(this, [n, t]);
    this.r = !0
};
_fce.C.prototype = {
    j: 0,
    n: null,
    b: null,
    a: 0,
    p: !1,
    i: null,
    m: !1,
    c: 0,
    g: 0,
    h: 0,
    l: null,
    r: !1,
    e: null,
    cV: function(n) {
        if (this.g !== n) {
            this.g = n;
            _j.e.a(_ff.c.d, "MarginLeft: {0}", this.g);
            this.q()
        }
        return n
    },
    dq: function(n) {
        if (this.h !== n) {
            this.h = n;
            _j.e.a(_ff.c.d, "MarginRight: {0}", this.h);
            this.q()
        }
        return n
    },
    bu: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.by("NumberOfItemsToShow")
        }
        return n
    },
    d: null,
    dr: function(n) {
        if (!this.l) {
            var t = this;
            this.l = new _j.g(function() {
                t.br(t.s);
                t.k()
            }, this.I());
            this.by("ReflowCommand")
        }
        return n
    },
    ck: function() {
        return new _j.g(this.bZ, this.I())
    },
    cy: function() {
        return new _j.g(this.ca, this.I())
    },
    s: !1,
    ki: function() {
        return !0
    },
    o: function() {
        return this.V()
    },
    f: function() {
        return _j.x.a(this.z).activeElement
    },
    G: function() {
        _fce.a.prototype.G.call(this);
        if (this.m) {
            this.m = !1;
            this.q()
        }
        if (this.r) {
            this.r = !1;
            this.cZ()
        }
        this.cB()
    },
    bz: function() {
        this.n && this.n.c("resize", "CommandingBarResizeId");
        _fce.a.prototype.et.call(this, this.b, !1);
        this.b = null;
        _fce.a.prototype.bz.call(this)
    },
    eH: function(n) {
        var t = null;
        var i = this.hb(n);
        if (_fm.l.isInstanceOfType(i) && i.r === _fm.q.b()) {
            this.b || (this.b = _fce.a.prototype.eH.call(this, n));
            t = this.b
        } else t = _fce.a.prototype.eH.call(this, n);
        if (_fm.f.isInstanceOfType(t.V())) t.y("CommandingBarItemView.CommandingBarQuickItem");
        else if (_fm.p.isInstanceOfType(t.V())) t.y("CommandingBarItemView.CommandingBarSplitButton");
        else if (_fm.l.isInstanceOfType(t.V())) _fm.z.isInstanceOfType(t.V()) ? t.y("CommandingBarExternalImageDropButton") : t.y("CommandingBarItemView.CommandingBarDropButton");
        else if (_fm.t.isInstanceOfType(t.V())) t.y("CommandingBarItemView.CommandingBarPopupButton");
        else if (_fm.x.isInstanceOfType(t.V())) t.y("CommandingBarExternalImageItem");
        else if (_fm.y.isInstanceOfType(t.V())) t.y(t.V().a());
        else if (!_fm.w.isInstanceOfType(t.V())) throw Error.argument("Invalid item data context found in CommandingBarListView");
        return t
    },
    et: function(n, t) {
        n !== this.b && _fce.a.prototype.et.call(this, n, t)
    },
    Y: function() {
        _j.i.prototype.Y.call(this);
        _fce.a.prototype.et.call(this, this.b, !1);
        this.b = null;
        this.l = null;
        this.q()
    },
    db: function(n, t) {
        if (!this.p) {
            if (this.a) t.i && (n.bp() ? this.a += n.i() : this.a -= n.i());
            else {
                this.c = 0;
                this.bN()
            }
            this.o().p || this.k()
        }
    },
    cZ: function() {
        var t = _j.x.a(this.z);
        var n = _j.x.c(t);
        this.n = _j.x.b(n);
        this.n.b("resize", this.bW, "CommandingBarResizeId")
    },
    dc: function(n) {
        this.br(!0);
        this.k()
    },
    q: function() {
        _j.e.a(_ff.c.d, "ReflowWithMarginSetting: {0} {1}", this.g, this.h);
        if (this.Z() && this.o()) {
            this.w.z.style.marginLeft = this.o().ba ? this.g.toString() + "px" : "0";
            this.w.z.style.marginRight = this.o().L ? this.h.toString() + "px" : "0"
        }
        this.br(!0);
        this.k()
    },
    k: function() {
        if (!this.Z()) {
            this.m = !0;
            return
        }
        if (!this.i) {
            this.p = !0;
            this.u(10);
            this.da();
            this.cB();
            this.p = !1
        }
    },
    dj: function() {
        if (!this.i) {
            if (this.c >= 15) {
                _j.e.b(_ff.c.d, "Reached pooling limit. MaximumReflowRetryCount = {0} this.retryWidthMeasurementCount = {1}", 15, this.c);
                return
            }
            var n = this;
            this.i = _j.m.a().a(_ff.c.d, "CommandingBarListView: RetryUpdateAvailableWidthAndReflow", function() {
                n.c++;
                n.i = null;
                n.bN();
                n.k()
            }, 100 * this.c)
        }
    },
    da: function() {
        var n = 0;
        var u = 0;
        var f = this.w.a;
        n = 38;
        if (n > this.a) {
            this.u(0);
            return
        }
        for (var i = 0; i < f.b(); i++) {
            var t = f.c(i);
            var r = t.V();
            if (!t.bp() && !r.i && !r.d) {
                n += t.i();
                if (n < this.a) u++;
                else {
                    this.u(u);
                    break
                }
            }
        }
    },
    u: function(n) {
        this.bu(n);
        this.d && this.d.b && this.d.a()
    },
    br: function(n) {
        if (!this.a || n) {
            this.c = 0;
            this.bN()
        }
    },
    bN: function() {
        if (!this.Z()) {
            this.m = !0;
            return
        }
        var r = !1;
        var t = this.z.children[0].offsetWidth;
        if (t > 0) {
            this.t = t;
            this.a = t;
            for (var u = this.w.a, i = 0; i < u.b(); i++) {
                var n = u.c(i);
                var f = n.V();
                if (!n.bp() && f.i)
                    if (n.i() > 0) this.a -= n.i();
                    else {
                        r = !0;
                        break
                    }
            }
        }
        if (r || t <= 0) {
            _j.e.a(_ff.c.d, "Pooling again for bar/item width. invalidItemWidth = {0} retryWidthMeasurementCount = {1}", r, this.c);
            this.a = 0;
            this.dj()
        }
    },
    dk: function() {
        this.f().contains(this.w.z) || this.cF(!0)
    },
    dl: function() {
        this.f().contains(this.w.z) || this.cF(!1)
    },
    cF: function(n) {
        var r;
        var f = !1;
        var u = this.w.a;
        var i = null;
        for (r = 0; r < u.b(); r++) {
            var t = u.c(r);
            var e = t.V();
            if (!t.bp() && t.Z() && e.be()) {
                if (f && n) {
                    i = t.a;
                    break
                }
                if (t.z.contains(this.f())) {
                    f = !0;
                    if (n) {
                        if (t.b && t.a.z === this.f()) {
                            i = t.b;
                            break
                        }
                    } else {
                        t.b && t.b.z === this.f() && (i = t.a);
                        break
                    }
                } else if (this.f().contains(this.w.z)) {
                    i = t.a;
                    break
                }
                n || (i = t.b ? t.b : t.a)
            }
        }
        if (r < u.b() && i) {
            this.e && this.e.A(-1);
            i.R();
            i.A(0);
            this.e = i
        }
    },
    cB: function() {
        if (this.w) {
            var t;
            var r = !1;
            var u = this.w.a;
            var i = null;
            for (t = 0; t < u.b(); t++) {
                var n = u.c(t);
                var f = n.V();
                if (!r && !n.bp() && n.Z() && f.be()) {
                    i = n.a;
                    r = !0
                }
                n.a && n.a.A(-1);
                n.b && n.b.A(-1)
            }
            if (i) {
                this.e = i;
                this.e.A(0)
            }
        }
    }
};
_fce.x = function(n) {
    this.j = Function.createDelegate(this, this.l);
    _fce.x.initializeBase(this, [n]);
    this.h = _j.x.b(n);
    this.h.b("keydown", this.gi || (this.gi = Function.createDelegate(this, this.cg)), "CommandingBarItemKeyDown")
};
_fce.x.prototype = {
    d: null,
    g: 0,
    h: null,
    i: function() {
        if (!this.g && this.Z()) {
            this.g = this.z.children[0].offsetWidth;
            var n = this.X;
            this.g === n.t && (this.g = 0)
        }
        return this.g
    },
    a: null,
    b: null,
    H: function() {
        _fce.e.prototype.H.call(this);
        if (this.B) {
            this.a = this.B.a("ButtonOne");
            this.b = this.B.a("ButtonTwo")
        }
    },
    P: function() {
        _fce.e.prototype.P.call(this);
        this.d = this.V();
        this.K(!this.d.S());
        this.k();
        this.d.apcl(_fce.x.a, this.j)
    },
    bz: function() {
        this.h && this.h.c("keydown", "CommandingBarItemKeyDown");
        this.d && this.d.rpcl(_fce.x.a, this.j);
        this.fe(null);
        _fce.e.prototype.bz.call(this)
    },
    cg: function(n) {
        if (n.a() === 9) {
            _j.i.prototype.cg.call(this, n);
            n.d()
        }
    },
    l: function(n, t) {
        var r = n;
        var i = !r.S();
        if (this.bp() !== i) {
            this.K(i);
            this.k()
        }
        this.X.db(this, r)
    },
    k: function() {
        this.z.style.display = this.bp() ? "none" : "inline"
    }
};
_fce.t = function() {};
_fce.t.prototype = {
    a: function(n, t) {
        return !n
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_fce.G = function() {};
_fce.G.prototype = {
    a: function(n, t) {
        return Number.isInstanceOfType(n) && Number.isInstanceOfType(t) ? n > t : !1
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_fce.f = function(n, t, i, r) {
    _fce.f.initializeBase(this, [n]);
    this.H = t;
    this.m("ContextMenuView");
    this.y = i;
    this.s = r;
    this.t = !1;
    this.C = !0
};
_fce.f.e = function(n) {
    _fce.f.d.addHandler("MenuShown", n)
};
_fce.f.h = function(n) {
    _fce.f.d.removeHandler("MenuShown", n)
};
_fce.f.g = function(n, t, i) {
    _fce.f.c = t;
    _fce.f.a = n;
    _fce.f.b = i
};
_fce.f.f = function(n, t, i, r, u, f, e, o) {
    var s = _fce.o.a(n, r, u, f, e, o);
    s.y(t);
    s.ba(i);
    s.bH("contextMenuPopup");
    s.f(!0);
    s.bR = !1;
    s.cH = !0;
    s.bg = !0;
    return s
};
_fce.f.prototype = {
    O: null,
    bf: null,
    bg: null,
    Q: null,
    bj: null,
    P: null,
    bi: null,
    N: null,
    n: null,
    bd: null,
    o: null,
    d: null,
    f: null,
    a: 2,
    b: 0,
    H: null,
    y: null,
    s: null,
    g: null,
    bu: !0,
    E: !0,
    br: !0,
    i: 0,
    h: 0,
    D: !1,
    G: !1,
    bm: 29,
    e: !1,
    u: null,
    K: !1,
    M: null,
    C: !1,
    c: function(n) {
        _j.s.c(!n || _fm.e.isInstanceOfType(n), "ContextMenu::set_MenuDataContext - value is of wrong type (OM:1997718)");
        var t = this.bv();
        this.f = n;
        if (this.d)
            if (n) {
                this.d.ba(this.f);
                this.bv() > t && this.d.p.e(this.d)
            } else this.j(!1);
        this.L();
        return n
    },
    t: !1,
    A: 0,
    bk: !1,
    bR: function(n) {
        this.D && this.d.a(n || this.G || this.d.bv);
        if (this.K !== n) {
            this.K = n;
            this.by("IsHovered")
        }
        return n
    },
    bn: function() {
        return this.d ? this.d.z : null
    },
    v: function() {
        this.f && this.f.m(this.k());
        this.d ? this.d.a(this.k()) : this.Z() && this.k() && this.e && this.x(null)
    },
    B: function() {
        if (this.r) {
            if (this.a & 2) {
                this.X.bf("contextmenu", this.o || (this.o = Function.createDelegate(this, this.x)), "#ContextMenu");
                this.X.bf("keydown", this.bd || (this.bd = Function.createDelegate(this, this.bK)), "#ContextMenu")
            }
            this.a & 1 && this.X.bf("click", this.o || (this.o = Function.createDelegate(this, this.x)), "#ContextMenu");
            if (this.a & 4)
                if (this.A <= 0) {
                    _fce.f.e(this.n || (this.n = Function.createDelegate(this, this.I)));
                    this.X.bf("mouseenter", this.o || (this.o = Function.createDelegate(this, this.x)), "#ContextMenu");
                    this.X.bf("mouseleave", this.N || (this.N = Function.createDelegate(this, this.bw)), "#ContextMenu")
                } else {
                    this.X.bf("mouseenter", this.bi || (this.bi = Function.createDelegate(this, this.bS)), "#ContextMenu");
                    this.X.bf("mouseleave", this.P || (this.P = Function.createDelegate(this, this.bI)), "#ContextMenu")
                }
            this.a & 8 && this.X.bf("focus", this.o || (this.o = Function.createDelegate(this, this.x)), "#ContextMenu")
        }
    },
    z: function() {
        if (this.X) {
            if (this.a & 2) {
                this.X.bj("contextmenu", "#ContextMenu");
                this.X.bj("keydown", "#ContextMenu")
            }
            this.a & 1 && this.X.bj("click", "#ContextMenu");
            if (this.a & 4) {
                _fce.f.h(this.n || (this.n = Function.createDelegate(this, this.I)));
                this.X.bj("mouseenter", "#ContextMenu");
                this.X.bj("mouseleave", "#ContextMenu")
            }
            this.a & 8 && this.X.bj("focus", "#ContextMenu")
        }
    },
    bo: function() {
        if (this.d) {
            this.d.dispose();
            this.d = null
        }
    },
    L: function() {
        this.f ? _fce.bj.prototype.L.call(this) : this.X && this.X.S().j(!1)
    },
    bJ: function(n) {
        if (!this.k() && !(this.a & 4)) {
            n.bx();
            if (!this.t) {
                n.ba(null);
                n.dispose();
                n === this.d && (this.d = null)
            }
        }
    },
    bS: function(n) {
        this.M = n;
        this.u = _j.m.a().b(this.u);
        this.u = _j.m.a().a(_ff.c.b, "ContextMenu.SubscribeToEvents", this.bj || (this.bj = Function.createDelegate(this, this.bU)), this.A)
    },
    bU: function() {
        this.u = null;
        _fce.f.h(this.n || (this.n = Function.createDelegate(this, this.I)));
        _fce.f.e(this.n || (this.n = Function.createDelegate(this, this.I)));
        if (this.X) {
            this.x(this.M);
            this.M = null
        }
    },
    x: function(n) {
        if (this.w && this.r) {
            if (this.d && this.d.c()) {
                if (n) {
                    n.c();
                    n.d()
                }
                return
            }
            $a(this.f) || $a(this.f.t) || this.f.t();
            var t = !!this.f && this.f.O && !!this.f.p && this.f.p.x.length > 0;
            if (t) {
                if (n && n.j() && ("mouseenter" === n.j().toLowerCase() || "mouseover" === n.j().toLowerCase())) {
                    this.D = !0;
                    this.G = !0;
                    this.bQ()
                } else this.D = !1;
                n && (n.e() > 0 || n.f() > 0) ? this.bx(this.b, n.e(), n.f()) : this.bx(this.b ? this.b : 1, 0, 0);
                this.d.S().f(_j.D.a());
                this.X.S().r(this.d.S().h());
                this.X.S().q(this.d.S().h());
                if (n) {
                    n.c();
                    n.d()
                }
            } else this.a & 2 && n && n.j() && "contextmenu" === n.j().toLowerCase() && n.c()
        }
    },
    bK: function(n) {
        n.a() === 121 && n.g() && this.x(n)
    },
    bQ: function() {
        var n = _fce.f.d.getHandler("MenuShown");
        $a(n) || n(this.X)
    },
    bx: function(n, t, i) {
        if (!this.d) {
            this.d = _fce.f.f(this.X.z, this.w, this.f, this.p, this.H, this.y, this.s, this.g);
            this.d.bS = this.X;
            this.d.e = this.bu;
            this.d.cK = this.br;
            this.d.ch = this.Q || (this.Q = Function.createDelegate(this, this.bJ));
            this.d.z.style.minWidth = this.f.x + "px";
            this.d.f(this.E);
            this.d.v = this.C;
            this.f.I > 0 && (this.d.z.style.maxWidth = this.f.I + "px");
            this.d.bd(this.bg || (this.bg = Function.createDelegate(this, this.bP)));
            this.d.et(this.bf || (this.bf = Function.createDelegate(this, this.bN)));
            if (!$a(this.f)) {
                this.f.K(this.d.k);
                this.f.P(this.d.u)
            }
            this.d.S().a(this.bm)
        }
        var r = null;
        r = this.bD(n, t, i);
        this.d.d(r);
        this.d.g(this.y.a() === "TouchNarrow");
        this.d.dD = this.w === "ContextMenuView";
        this.d.i = this.y.a() === "TouchNarrow" || this.w === "ContextMenuView" || this.bk ? 2 : 0;
        this.d.V() !== this.f && this.d.ba(this.f);
        this.d.bm();
        this.d.a(!0);
        this.d.dr()
    },
    bD: function(n, t, i) {
        return this.y.a() !== "TouchNarrow" ? this.bC(n, t, i) : this.bG()
    },
    bG: function() {
        return new _fce.bh(this.p, this.s)
    },
    bC: function(n, t, i) {
        if (n) {
            var r = new _fce.w(this.p, this.H, this.s);
            r.c(this.X);
            r.l = this.i;
            r.d = this.h;
            switch (n) {
                case 1:
                    r.b = 0;
                    break;
                case 2:
                    r.b = 1;
                    break;
                case 3:
                    r.b = 2;
                    break;
                case 4:
                    r.b = 3;
                    break;
                case 5:
                    r.b = 4;
                    break
            }
            return r
        } else {
            var u = new _fce.E(this.p, this.s);
            this.s.g() ? u.a(_fce.ba.a(t - this.d.z.offsetWidth, this.s.g(), _j.x.a(this.d.z))) : u.a(t);
            u.b(i);
            u.f = !0;
            u.c = !0;
            return u
        }
    },
    bI: function(n) {
        this.u = _j.m.a().b(this.u);
        this.bw(n)
    },
    bw: function(n) {
        if (n.j() && "mouseleave" === n.j().toLowerCase()) {
            this.G = !1;
            _j.m.a().a(_ff.c.b, "ContextMenu.HideContextMenu", this.O || (this.O = Function.createDelegate(this, this.bH)), 0)
        }
    },
    bH: function() {
        this.D && this.d && !this.d.bG() && this.d.a(!1)
    },
    I: function(n) {
        n !== this.X && this.j(!1)
    },
    bP: function(n, t) {
        this.j(n.c())
    },
    bN: function(n, t) {
        this.bR(n.bG())
    },
    bv: function() {
        return !this.f || !this.f.p ? 0 : this.f.p.x.length
    }
};
_fce.F = function(n, t) {
    this.a = n;
    this.b = t
};
_fce.F.prototype = {
    a: !1,
    b: 0
};
_fce.N = function(n, t) {
    this.a = n;
    this.b = t
};
_fce.N.prototype = {
    b: 0,
    a: null
};
_fce.v = function(n, t) {
    this.dx = Function.createDelegate(this, this.dE);
    this.dR = Function.createDelegate(this, this.cs);
    _fce.v.initializeBase(this, [n]);
    this.p = t;
    this.S().a(10);
    this.cX = new _ff.q(this.dR, _ff.c.b);
    this.C([])
};
_fce.v.prototype = {
    p: null,
    cX: null,
    s: null,
    b: 0,
    cZ: !1,
    dD: !1,
    cW: null,
    dk: null,
    dl: null,
    bY: null,
    cN: null,
    cT: null,
    cV: null,
    bW: null,
    u: function(n) {
        if (this.s !== n) {
            this.s = n;
            this.by("CloseMenuCommand")
        }
        return n
    },
    cd: function() {
        return this.cZ
    },
    bR: function(n) {
        if (this.cZ !== n) {
            this.cZ = n;
            this.by("IsSelected");
            if (this.cZ) this.bo(this.bW || this.bY);
            else {
                this.bt(this.bW || this.bY);
                this.bi()
            }
        }
        return n
    },
    dF: function(n) {
        this.dD = n;
        this.by("CustomItemCssClass");
        return n
    },
    E: function(n) {
        this.cW = n;
        _j.h.b(this.cN) && this.bH(this.cW);
        return n
    },
    cF: function(n) {
        this.cN = n;
        _j.h.b(this.cN) ? this.bH(this.cW) : this.bH(this.dD ? this.cW + " " + this.cN : this.cN);
        return n
    },
    bN: function(n) {
        this.dk = n;
        _j.h.b(this.cT) && this.f(this.dk);
        return n
    },
    cB: function(n) {
        this.cT = n;
        _j.h.b(this.cT) ? this.f(this.dk) : this.f(this.cT);
        return n
    },
    bP: function(n) {
        this.dl = n;
        _j.h.b(this.cV) && this.g(this.dl);
        return n
    },
    cC: function(n) {
        this.cV = n;
        _j.h.b(this.cV) ? this.g(this.dl) : this.g(this.cV);
        return n
    },
    bc: function(n) {
        this.cd() && !_j.h.b(this.bY) && this.bt(this.bY);
        this.bY = n;
        if (_j.h.b(this.bW)) {
            this.e(this.bY);
            this.cd() && this.bo(this.bY)
        }
        return n
    },
    cG: function(n) {
        this.cd() && !_j.h.b(this.bW) && this.bt(this.bW);
        this.bW = n;
        if (_j.h.b(this.bW)) {
            this.e(this.bY);
            this.cd() && this.bo(this.bY)
        } else {
            this.e(this.bW);
            this.cd() && this.bo(this.bW)
        }
        return n
    },
    dE: function(n) {},
    P: function() {
        _fc.b.prototype.P.call(this);
        this.bn(4);
        $a(this.p) || this.p.b(_fce.O, this.dx)
    },
    cY: function(n) {
        _j.i.prototype.cY.call(this, n);
        !$a(this.p) && this.t() && this.p.a(_fce.O, new _fce.O(this))
    },
    bI: function(n) {
        this.cs(n)
    },
    bz: function() {
        $a(this.p) || this.p.c(_fce.O, this.dx);
        _fc.b.prototype.bz.call(this)
    },
    cs: function(n) {
        if (this.bK() && this.bK().b && this.s && this.s.b) {
            _fm.c.isInstanceOfType(this.V()) && this.V().c().V(this.V());
            this.s && this.s.b && this.s.a();
            $a(this.p) || this.p.a(_fce.A, _fce.A.b());
            this.de(n)
        }
    },
    bC: function() {
        var i = new _fc.g;
        var t = new _fc.c;
        t.l = this.cX;
        t.j("ENTER");
        var n = new _fc.c;
        n.l = this.cX;
        n.j("SPACE");
        i.a([t, n]);
        return _j.i.prototype.bC.call(this).concat(i)
    }
};
_fce.o = function(n, t, i, r, u, f) {
    this.ct = Function.createDelegate(this, this.eq);
    this.cp = Function.createDelegate(this, this.eo);
    this.bU = Function.createDelegate(this, this.dS);
    this.cs = Function.createDelegate(this, this.ep);
    this.cO = Function.createDelegate(this, this.dO);
    this.cQ = Function.createDelegate(this, this.dP);
    this.cR = Function.createDelegate(this, this.dQ);
    this.dn = Function.createDelegate(this, this.dR);
    this.cN = Function.createDelegate(this, this.dN);
    _fce.o.initializeBase(this, [n, t, i, r, u, f || "contextMenuDropShadow"]);
    this.cZ = this.be();
    this.z.setAttribute("IsContextMenu", "1");
    this.m = new _j.g(this.cN, _ff.c.b);
    this.o = new _j.g(this.dn, _ff.c.b);
    this.n = new _j.g(this.cR, _ff.c.b);
    this.bc = new _j.g(this.cQ, _ff.c.b);
    this.w = new _j.g(this.cO, _ff.c.b);
    this.S().a(29);
    this.S().k(_fce.o.b);
    this.v = !0
};
_fce.o.a = function(n, t, i, r, u, f) {
    var e = window.document.createElement("div");
    n.appendChild(e);
    return new _fce.o(e, t, i, r, u, f)
};
_fce.o.prototype = {
    m: null,
    o: null,
    n: null,
    bc: null,
    w: null,
    cM: !1,
    cK: !0,
    bS: null,
    dL: null,
    l: null,
    bv: !1,
    be: function() {
        return this.bY() !== "Mouse"
    },
    ds: function() {
        return this.b() ? this.b().s : null
    },
    er: function(n) {
        if (this.b()) {
            this.b().n(n);
            this.l && this.l.R()
        }
        return n
    },
    b: function() {
        return _fm.e.isInstanceOfType(this.V()) ? this.V() : null
    },
    dr: function() {
        this.l && this.l.E() && this.l.px()
    },
    H: function() {
        _fce.l.prototype.H.call(this);
        if (this.B) {
            this.dL = this.B.a("UpArrow");
            this.l = this.B.a("MenuListView");
            this.l && (this.l.bd = !0)
        }
    },
    P: function() {
        _fce.l.prototype.P.call(this);
        this.bn(8192)
    },
    G: function() {
        _fce.l.prototype.G.call(this);
        this.h(!1);
        this.s.b(_fce.A, this.cs);
        this.s.b(_fce.N, this.bU);
        this.s.b(_fce.L, this.cp);
        this.s.a(_fce.F, new _fce.F(!0, this.u));
        this.l && this.v && this.l.R()
    },
    M: function() {
        _fce.l.prototype.M.call(this);
        this.s.c(_fce.A, this.cs);
        this.s.c(_fce.N, this.bU);
        this.s.c(_fce.L, this.cp);
        this.bv = !1;
        this.s.a(_fce.F, new _fce.F(!1, this.u))
    },
    bq: function() {
        _j.bk.prototype.bq.call(this);
        this.b() && this.b().p && this.b().p.e(this.ct)
    },
    Y: function() {
        _fce.l.prototype.Y.call(this);
        this.b() && this.b().p && this.b().p.d(this.ct);
        this.Z() && this.bs()
    },
    bC: function() {
        var n;
        return (n = _j.i.prototype.bC.call(this)).concat.call(n, new _fc.z(_j.G.a()))
    },
    ej: function() {
        this.c() && this.l && this.v && this.l.R()
    },
    dE: function(n) {
        return this.cF.a() !== "TouchNarrow" ? null : _fce.l.prototype.dE.call(this, n)
    },
    bD: function() {
        this.h(!0);
        _fce.l.prototype.bD.call(this)
    },
    E: function(n) {
        n.a() === 9 && this.i === 2 && this.k && this.k.b ? this.k.a() : _fce.l.prototype.E.call(this, n)
    },
    gr: function(n) {
        n.c()
    },
    dS: function(n) {
        if (n.b === this.u) {
            this.ba(n.a);
            this.V().K(this.k);
            this.V().P(this.u)
        }
    },
    eo: function(n) {
        n.b === this.u && (this.bv = n.a)
    },
    ep: function(n) {
        this.h(!0);
        this.cK && this.a(!1)
    },
    dN: function() {
        this.dq(1)
    },
    dR: function() {
        this.dq(-1)
    },
    dP: function() {
        this.b() && this.b().p && this.bl(-1, 1)
    },
    dO: function() {
        this.b() && this.b().p && this.bl(this.b().p.x.length, -1)
    },
    dQ: function() {
        if (this.cM) {
            this.b().n(null);
            this.k.a();
            this.bS.R()
        }
    },
    dq: function(n) {
        this.b() && this.b().p && (this.ds() ? this.bl(this.b().p.m(this.ds()), n) : n > 0 ? this.bl(-1, n) : this.bl(0, n))
    },
    bl: function(n, t) {
        for (var u = this.b().p.x.length, i = 1; i <= u; i++) {
            var f = this.es(n + i * t, u);
            var r = this.b().p.x[f];
            if (_fm.s.isInstanceOfType(r) && r.g()) {
                this.er(r);
                return
            }
        }
    },
    es: function(n, t) {
        for (var i = n; i >= t;) i -= t;
        while (i < 0) i += t;
        return i
    },
    eq: function(n, t) {
        this.Z() && this.bs()
    }
};
_fce.A = function() {};
_fce.A.b = function() {
    $a(_fce.A.a) && (_fce.A.a = new _fce.A);
    return _fce.A.a
};
_fce.bc = function(n) {
    _fce.bc.initializeBase(this, [n])
};
_fce.bc.prototype = {
    b: null,
    a: null,
    d: function(n) {
        this.b = n;
        _j.h.b(this.a) && this.bH(n);
        return n
    },
    c: function(n) {
        this.a = n;
        _j.h.b(this.a) ? this.bH(this.b) : this.bH(n);
        return n
    }
};
_fce.p = function(n, t) {
    _fce.p.initializeBase(this, [n, t]);
    this.S().a(11);
    this.S().d(_j.D.b(this.q))
};
_fce.p.prototype = {
    q: !1,
    a: !0,
    bJ: function(n) {
        if (this.q !== n) {
            this.q = n;
            this.S().d(_j.D.b(n));
            this.by("IsChecked")
        }
        return n
    },
    cs: function(n) {
        this.t() && this.a && this.bJ(!this.q);
        _fce.v.prototype.cs.call(this, n)
    }
};
_fce.R = function(n, t) {
    _fce.R.initializeBase(this, [n, t]);
    this.o(!$a(this.a));
    this.S().a(7)
};
_fce.R.prototype = {
    a: null,
    q: null,
    bJ: !1,
    cH: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.z.setAttribute("href", n);
            this.o(!$a(this.a));
            this.by("Href")
        }
        return n
    },
    cO: function(n) {
        if (this.q !== n) {
            this.q = n;
            _j.h.b(this.q) ? this.z.removeAttribute("target") : this.z.setAttribute("target", this.q);
            this.by("TargetWindow")
        }
        return n
    },
    cJ: function(n) {
        if (this.bJ !== n) {
            this.bJ = n;
            this.by("PreventNavigation")
        }
        return n
    },
    bI: function(n) {
        _fce.v.prototype.bI.call(this, n);
        this.bJ && n.c()
    },
    dw: function() {
        this.t() || this.z.removeAttribute("href");
        this.bS()
    },
    bC: function() {
        return []
    }
};
_fce.O = function(n) {
    this.a = n
};
_fce.O.prototype = {
    a: null
};
_fce.X = function(n, t, i, r, u) {
    this.dX = Function.createDelegate(this, this.et);
    this.ea = Function.createDelegate(this, this.ew);
    this.dZ = Function.createDelegate(this, this.ev);
    this.dm = Function.createDelegate(this, this.es);
    this.ec = Function.createDelegate(this, this.ex);
    this.dY = Function.createDelegate(this, this.eu);
    this.dS = Function.createDelegate(this, this.eq);
    this.dW = Function.createDelegate(this, this.ed);
    this.eb = Function.createDelegate(this, this.dH);
    _fce.X.initializeBase(this, [n, r]);
    this.cO = t;
    this.dr = u;
    this.dn = i;
    this.S().a(10);
    this.S().j(!0);
    this.S().m(0);
    this.dI = new _j.g(this.eb, _ff.c.b);
    this.dG = new _j.g(this.dW, _ff.c.b);
    this.dq = new _j.g(this.dS, _ff.c.b);
    this.C([])
};
_fce.X.prototype = {
    dn: null,
    dI: null,
    dG: null,
    dq: null,
    cO: null,
    dr: null,
    bJ: null,
    db: !1,
    a: null,
    cJ: null,
    cH: null,
    cQ: !0,
    ds: !1,
    dt: "ContextMenuView",
    eB: function(n) {
        if (this.bJ !== n) {
            this.bJ = n;
            this.by("SubMenu");
            $a(this.a) || this.a.ba(this.bJ)
        }
        return n
    },
    ek: function(n) {
        if (this.db !== n) {
            this.db = n;
            this.by("ParentMenuIsShown");
            this.db || this.da() || $a(this.a) || this.q().a(!1)
        }
        return n
    },
    eC: function(n) {
        if (this.cQ !== n) {
            this.cQ = n;
            this.cQ ? this.z.removeAttribute("disabled") : this.z.setAttribute("disabled", "true");
            this.by("SubMenuIsEnabled")
        }
        return n
    },
    eD: function(n) {
        this.dt !== n && (this.dt = n);
        return n
    },
    cd: function() {
        return _fce.v.prototype.cd.call(this)
    },
    bR: function(n) {
        _fce.v.prototype.bR.call(this, n);
        !this.cd() && !this.da() && this.a && this.q().c() && this.ei();
        return n
    },
    ej: function(n) {
        if (this.ds !== n) {
            this.ds = n;
            this.by("IsSubMenuHovered")
        }
        return n
    },
    q: function() {
        return this.er()
    },
    da: function() {
        return this.cO.a() === "TouchNarrow"
    },
    dE: function(n) {
        _fce.v.prototype.dE.call(this, n);
        this.da() || n.a.b === this.b && n.a !== this && ($a(this.a) || !this.a.c() || this.cH || (this.cH = _j.m.a().a(this.I(), "HideSubMenuPopup", this.dY, 400)))
    },
    bI: function(n) {
        this.cs(n)
    },
    cs: function(n) {
        this.dH()
    },
    cY: function(n) {
        if (this.cQ && this.cO.a() === "Mouse") {
            _fce.v.prototype.cY.call(this, n);
            this.da() || !$a(this.a) && this.q().c() || (this.cJ = _j.m.a().a(this.I(), "OpenSubMenu", this.ec, 400))
        }
    },
    cr: function(n) {
        _fc.b.prototype.cr.call(this, n);
        this.cJ && (this.cJ = _j.m.a().b(this.cJ))
    },
    G: function() {
        _fc.b.prototype.G.call(this);
        this.p.b(_fce.F, this.dm);
        $a(this.a) || this.q().bm()
    },
    M: function() {
        _fc.b.prototype.M.call(this);
        this.p.c(_fce.F, this.dm);
        $a(this.a) || this.q().bx()
    },
    bz: function() {
        this.p.c(_fce.F, this.dm);
        $a(this.a) || this.q().dispose();
        _fce.v.prototype.bz.call(this)
    },
    bC: function() {
        var t = new _fc.g;
        var n = new _fc.c;
        n.l = this.dI;
        n.j("RIGHTARROW");
        t.a([n]);
        return _fce.v.prototype.bC.call(this).concat(t)
    },
    er: function() {
        if (!this.a) {
            this.a = _fce.f.f(this.z, this.dt, this.bJ, this.dn, this.p, this.cO, this.dr, null);
            this.a.cM = !0;
            this.a.cZ = !1;
            this.a.ci(!0);
            this.a.bS = this;
            this.a.ch = this.dZ;
            this.a.bd(this.ea);
            this.q().i = 2;
            this.a.bn(4);
            this.a.J(this.dX);
            var t = new _fce.w(this.dn, this.p, this.dr);
            t.c(this);
            t.b = 7;
            t.l = 3;
            t.d = 0;
            this.a.d(t);
            if (this.cO.a() === "Mouse") {
                this.a.e = !1;
                var u = new _fc.g;
                var r = new _fc.c;
                r.j("ESC");
                r.l = this.dG;
                var i = new _fc.c;
                i.j("TAB");
                i.l = this.dq;
                i.n = !1;
                var n = new _fc.c;
                n.j("TAB");
                n.k = 1;
                n.l = this.dq;
                n.n = !1;
                u.a([r, i, n]);
                this.a.C([u])
            }
            this.Z() && this.a.bm()
        }
        return this.a
    },
    dH: function() {
        this.cQ && (this.da() ? this.p.a(_fce.N, new _fce.N(this.bJ, this.b)) : this.q().c() || this.eE())
    },
    ey: function() {
        for (var t = 0; t < this.bJ.p.x.length; t++) {
            var n = this.bJ.p.x[t];
            if (!$a(n) && n.g()) {
                this.bJ.n(n);
                break
            }
        }
    },
    ed: function() {
        this.a.k.a()
    },
    eq: function() {
        this.ed();
        this.s.a()
    },
    es: function(n) {
        n.b === this.b && this.ek(n.a)
    },
    ex: function() {
        this.cJ = null;
        this.db && this.dH()
    },
    eE: function() {
        this.cJ = null;
        if (!$a(this.bJ)) {
            this.bJ.K(this.q().k);
            this.bJ.P(this.q().u)
        }
        this.q().a(!0);
        this.ey();
        this.q().dr();
        this.p.a(_fce.L, new _fce.L(this.q().c(), this.b, this.q().u))
    },
    eu: function() {
        this.cH = _j.m.a().b(this.cH);
        this.q().bG() || this.bG() || this.ei()
    },
    ei: function() {
        if (this.q().c()) {
            this.cH = _j.m.a().b(this.cH);
            this.q().a(!1);
            this.p.a(_fce.L, new _fce.L(this.q().c(), this.b, this.q().u))
        }
    },
    et: function(n, t) {
        t === _j.i.b.a && this.ej(n.bG())
    },
    ew: function(n, t) {
        this.bJ && this.bJ.m(n.c())
    },
    ev: function(n) {
        n.bx();
        n.ba(null);
        n.dispose();
        this.a === n && (this.a = null)
    }
};
_fce.L = function(n, t, i) {
    this.a = n;
    this.b = t;
    this.c = i
};
_fce.L.prototype = {
    a: !1,
    b: 0,
    c: 0
};
_fce.D = function(n, t) {
    this.db = Function.createDelegate(this, this.dq);
    this.dn = Function.createDelegate(this, this.dr);
    this.dm = Function.createDelegate(this, this.cQ);
    _fce.D.initializeBase(this, [n, t]);
    this.cH = new _j.g(this.dm, _ff.c.b);
    this.cO = new _j.g(this.dn, _ff.c.b);
    this.bJ = new _j.g(this.db, _ff.c.b)
};
_fce.D.prototype = {
    a: !1,
    da: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.cX.c(!this.a);
            this.by("IsTextboxShown")
        }
        return n
    },
    cH: null,
    cO: null,
    bJ: null,
    q: null,
    cJ: !1,
    cs: function(n) {
        if (!this.a) {
            this.da(!0);
            this.cJ && _fm.c.isInstanceOfType(this.V()) && this.V().c().V(this.V())
        }
    },
    cQ: function() {
        this.da(!1);
        this.R()
    },
    dq: function() {
        this.a ? this.cQ() : this.s && this.s.b && this.s.a()
    },
    dr: function() {
        this.q && this.q.b && this.q.a();
        this.cQ()
    }
};
_fce.Z = function() {};
_fce.Z.prototype = {
    a: function(n, t) {
        var i = n;
        return i ? 4 : 1
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_fce.m = function(n, t, i, r, u) {
    _fce.m.initializeBase(this, [n, t, i, r, u]);
    this.y("DialogView");
    if (this.bY() === "TouchNarrow") {
        var f = new _fce.I(this.r, u);
        f.a(0);
        this.d(f)
    } else this.d(new _fce.r(this.r, u));
    this.e = !1;
    this.g(!0);
    this.i = 2;
    this.S().a(5);
    this.S().e(_j.D.a());
    this.S().i(_j.D.a())
};
_fce.m.prototype = {
    dq: null,
    bS: null,
    bv: null,
    w: null,
    be: null,
    ct: null,
    dS: !1,
    dN: !1,
    bU: !1,
    cN: !1,
    cs: null,
    cM: null,
    cp: null,
    bl: null,
    cR: !1,
    cO: null,
    cQ: null,
    dO: function() {
        return this.cs ? this.cs : this.V()
    },
    n: function(n) {
        if (this.cs !== n) {
            this.cs = n;
            this.by("ContentDataContext");
            this.Z() && this.ds()
        }
        return n
    },
    b: function(n) {
        if (this.cM !== n) {
            this.cM = n;
            this.by("ContentTemplateId");
            this.Z() && this.ds()
        }
        return n
    },
    o: function(n) {
        if (this.ct !== n) {
            this.ct = n;
            this.by("DialogTitle")
        }
        return n
    },
    dQ: function(n) {
        if (this.bU !== n) {
            this.bU = n;
            this.by("IsBusy");
            var i = this.w.z.querySelectorAll("*");
            if (i)
                for (var t = 0; t < i.length; t++) n ? i[t].setAttribute("disabled", "disabled") : i[t].removeAttribute("disabled")
        }
        return n
    },
    l: function(n) {
        if (this.cN !== n) {
            this.cN = n;
            this.by("IsDefaultFocus")
        }
        return n
    },
    m: function(n) {
        if (this.cp !== n) {
            this.cp = n;
            this.by("ButtonDataList")
        }
        return n
    },
    bc: function(n) {
        this.bl !== n && (this.bl = n);
        return n
    },
    dR: function(n) {
        if (this.cR !== n) {
            this.cR = n;
            this.by("ShowLoadingIndicator")
        }
        return n
    },
    eq: function(n) {
        if (this.cO !== n) {
            this.cO = n;
            this.by("LinkText")
        }
        return n
    },
    er: function(n) {
        if (this.cQ !== n) {
            this.cQ = n;
            this.by("LinkUrl")
        }
        return n
    },
    H: function() {
        _fce.l.prototype.H.call(this);
        if (this.B) {
            this.bv = this.B.a("Dialog");
            this.w = this.B.a("Content");
            this.be = this.B.a("Footer");
            this.w.st(this.bS || (this.bS = Function.createDelegate(this, this.dr)))
        } else {
            this.bv = null;
            this.w = null;
            this.be = null
        }
    },
    G: function() {
        this.ds();
        this.dP();
        _fce.l.prototype.G.call(this);
        this.es();
        if (this.be && this.c()) {
            var t = this.be.z.querySelectorAll("button");
            var n = t[0];
            $a(n) || this.cN || n.focus()
        }
    },
    M: function() {
        _fce.l.prototype.M.call(this);
        this.bv && this.bv.bx();
        this.w && this.w.bx();
        this.be && this.be.bx()
    },
    bz: function() {
        this.bv && this.bv.dispose();
        if (this.w) {
            this.w.pS(this.bS || (this.bS = Function.createDelegate(this, this.dr)));
            this.w.dispose()
        }
        if (this.be) {
            this.be.dispose();
            this.be = null
        }
        _fce.l.prototype.bz.call(this)
    },
    E: function(n) {
        n.a() === 27 && this.bu(n);
        n.a() === 13 && this.dd(n);
        n.a() === 9 && this.i === 2 && this.dm(n)
    },
    ds: function() {
        if (this.Z() && this.w) {
            this.w.y(this.cM);
            this.w.O(this.S().A())
        }
    },
    dP: function() {
        var t = !!this.bl && !this.bl.closed && !!this.bl.document.body;
        var n = t ? this.bl.document : window.document;
        if (this.z.parentNode !== n.body) {
            n.body.appendChild(this.z);
            this.bs();
            this.eH()
        }
        if (t) {
            var i = new _j.x(this.bl);
            i.b("beforeunload", this.dq || (this.dq = Function.createDelegate(this, this.ep)))
        }
    },
    ep: function(n) {
        this.bl = null;
        this.dP();
        this.a(!1)
    },
    es: function() {
        var n = this.bv.z.querySelector(this.db());
        n && n.focus()
    },
    dr: function() {
        this.dR(!1);
        this.w.pS(this.bS || (this.bS = Function.createDelegate(this, this.dr)))
    }
};
_fce.c = function(n, t, i) {
    _fce.c.initializeBase(this, [n]);
    this.i = t.a() === "Mouse";
    this.g = i.g()
};
_fce.c.r = function(n, t) {
    _fce.c.q(n)
};
_fce.c.j = function(n) {
    _fce.c.q(n.instance)
};
_fce.c.s = function(n) {
    var i = n.instance;
    var t = i.eM(_fce.c.h);
    t && t.r(i)
};
_fce.c.q = function(n) {
    var t = n.eM(_fce.c.h);
    t && t.h()
};
_fce.c.t = function(n) {
    n.instance.h()
};
_fce.c.u = function(n) {
    n.instance.q()
};
_fce.c.prototype = {
    s: function(n) {
        this.bB("OnResizeCompleted", n)
    },
    H: function(n) {
        this.bF("OnResizeCompleted", n)
    },
    i: !1,
    g: !1,
    m: !1,
    l: 4,
    j: !0,
    c: !0,
    f: function() {
        return this.eM(_fce.c.p)
    },
    o: function() {
        return this.eM(_fce.c.n)
    },
    b: function(n) {
        this.eK(_fce.c.n, n);
        return n
    },
    G: function() {
        if (0 === this.o()) throw Error.invalidOperation("The Position property must be explicitly set.");
        if (this.j) {
            this.q();
            this.h();
            this.c || (this.j = !1)
        }
        _j.bd.prototype.G.call(this)
    },
    k: function(n, t) {
        _j.bd.prototype.k.call(this, n, t);
        if (!t.c || t.c === 3)
            for (var r = 0; r < t.a.length; r++) this.t(t.a[r]);
        if (t.c === 2 || t.c === 3)
            for (var i = 0; i < t.b.length; i++) this.bc(t.b[i]);
        this.h()
    },
    u: function(n) {
        this.g && (n === 3 ? n = 1 : n === 1 && (n = 3));
        return n
    },
    q: function() {
        this.z.style.position = _fce.Q.toString(this.o())
    },
    r: function(n) {
        if (this.i && n.eM(_fce.c.c)) {
            var r = n.eM(_fce.c.g);
            if (!r) {
                var t = new _j.i(window.document.createElement("div"));
                this.z.appendChild(t.z);
                var i = this;
                t.bf("mousedown", function(t) {
                    i.B(t, n)
                }, ".DockPanel");
                n.eK(_fce.c.g, t)
            }
        } else this.p(n)
    },
    t: function(n) {
        n.apcl("IsHidden", _fce.c.r);
        this.z.appendChild(n.z);
        this.r(n);
        n.eK(_fce.c.h, this);
        this.Z() && n.bm()
    },
    bc: function(n) {
        n.rpcl("IsHidden", _fce.c.r);
        n.eK(_fce.c.h, null);
        n.z.parentNode.removeChild(n.z);
        this.p(n)
    },
    p: function(n) {
        var t = n.eM(_fce.c.g);
        if (t) {
            t.bj("mousedown", ".DockPanel");
            t.z.parentNode.removeChild(t.z);
            t.dispose();
            n.eK(_fce.c.g, null)
        }
    },
    B: function(n, t) {
        if (!_fce.c.f && !(n.a() - 1)) {
            n.d();
            n.c();
            _fce.c.f = !0;
            var f = t.eM(_fce.c.g);
            var c = t.eM(_fce.c.a);
            c = this.u(c);
            var w = t.eM(_fce.c.l);
            var v = 0;
            var s = 0;
            var o = -1;
            var e = -1;
            var r = 0;
            var h = 0;
            var a = 0;
            var g = t.eM(_fce.c.b);
            var p = _j.i.g(window.document.body);
            switch (c) {
                case 3:
                case 1:
                    p.addClass("vResizeCursor");
                    w || f.bo("vResizing");
                    a = f.z.offsetWidth;
                    h = f.z.offsetLeft;
                    v = n.e() - h;
                    s = t.z.offsetLeft;
                    r = this.z.offsetWidth;
                    e = Math.max(0, this.z.offsetLeft) + 50;
                    o = Math.min(this.w(), this.z.offsetLeft + r) - 50;
                    break;
                case 0:
                case 2:
                    p.addClass("hResizeCursor");
                    w || f.bo("hResizing");
                    a = f.z.offsetHeight;
                    h = f.z.offsetTop;
                    v = n.f() - h;
                    s = t.z.offsetTop;
                    r = this.z.offsetHeight;
                    e = Math.max(0, this.z.offsetTop) + 50;
                    o = Math.min(this.v(), this.z.offsetTop + r) - 50;
                    break;
                case 4:
                    return
            }
            var u = t.eM(_fce.c.d);
            var i = t.eM(_fce.c.e);
            var d = this.f() === 1 ? 0 : 30;
            u = Math.max(u, d);
            i >= 0 && (i = Math.max(i, u));
            if (this.f() === 1) {
                u = u * r / 100;
                i >= 0 && (i = i * r / 100)
            }
            switch (c) {
                case 3:
                case 0:
                    i >= 0 && (o = Math.min(o, s + i));
                    e = s + u;
                    break;
                case 1:
                case 2:
                    var l = t.eM(_fce.c.b);
                    this.f() === 1 && (l = l * r / 100);
                    o = s + l - u - a;
                    i >= 0 && (e = Math.max(e, s + l - i - a));
                    break
            }
            var y = {
                resizeHandle: f,
                child: t,
                absoluteDirection: c,
                initialOffset: v,
                minPos: e,
                maxPos: o,
                startPos: h,
                startSize: g
            };
            var k = this;
            _j.i.d(window.document.documentElement, "mouseup", function(n) {
                k.y(n, y)
            }, ".DockPanel", !1);
            var b = this;
            _j.i.d(window.document.documentElement, "mousemove", function(n) {
                b.E(n, y)
            }, ".DockPanel", !1)
        }
    },
    E: function(n, t) {
        if (_fce.c.f) {
            n.d();
            n.c();
            var r = t.resizeHandle;
            var s = t.child;
            var e = t.absoluteDirection;
            var h = t.initialOffset;
            var o = t.minPos;
            var u = t.maxPos;
            var f = e === 3 || e === 1;
            var i = (f ? n.e() : n.f()) - h;
            o >= 0 && (i = Math.max(i, o));
            u >= 0 && (i = Math.min(i, u));
            if (f) {
                r.z.style.right = "auto";
                r.z.style.left = i.toString() + "px"
            } else {
                r.z.style.bottom = "auto";
                r.z.style.top = i.toString() + "px"
            }
            s.eM(_fce.c.m) && this.n(n, t)
        }
    },
    y: function(n, t) {
        if (_fce.c.f) {
            var r = t.resizeHandle;
            _fce.c.f = !1;
            _j.i.e(window.document.documentElement, "mouseup", ".DockPanel");
            _j.i.e(window.document.documentElement, "mousemove", ".DockPanel");
            r.bt("hResizing");
            r.bt("vResizing");
            var i = _j.i.g(window.document.body);
            i.removeClass("hResizeCursor");
            i.removeClass("vResizeCursor");
            this.n(n, t);
            this.h();
            this.bL("OnResizeCompleted", this, null)
        }
    },
    n: function(n, t) {
        var f = t.resizeHandle;
        var h = t.child;
        var o = t.absoluteDirection;
        var a = t.initialOffset;
        var u = t.startPos;
        var l = t.startSize;
        var e = h.eM(_fce.c.o);
        var i = 0;
        switch (o) {
            case 3:
                i = f.z.offsetLeft - u;
                break;
            case 1:
                i = u - f.z.offsetLeft;
                break;
            case 0:
                i = f.z.offsetTop - u;
                break;
            case 2:
                i = u - f.z.offsetTop;
                break;
            default:
                return
        }
        var c = o === 3 || o === 1;
        var s = c ? this.z.offsetWidth : this.z.offsetHeight;
        this.f() === 1 && (i = i * 100 / s);
        var r = l + i;
        if (e > 0) {
            r = e * Math.round(r / e);
            r > s && (r -= e)
        }
        h.eK(_fce.c.b, r)
    },
    h: function() {
        if (!this.Z()) {
            this.j = !0;
            return
        }
        for (var t = this.f() ? "%" : "px", s = 0, f = 0, o = 0, e = 0, y = 0; y < this.a.b(); y++) {
            var r = this.a.c(y);
            if (!r.bp()) {
                var a = r.eM(_fce.c.a);
                var i = 0;
                var p = r.eM(_fce.c.k);
                if (p) switch (a) {
                    case 2:
                    case 0:
                        i = r.z.offsetHeight;
                        break;
                    case 1:
                    case 3:
                        i = r.z.offsetWidth;
                        break
                } else {
                    i = r.eM(_fce.c.b);
                    if (a !== 4 && $a(i)) throw Error.invalidOperation("DockPanel cannot layout when a docked child's size is null.  Child: " + r.z.outerHTML.substr(0, 200));
                }
                var v = r.eM(_fce.c.i);
                var n = r.z.style;
                n.position = "absolute";
                switch (a) {
                    case 0:
                        n.top = s.toString() + t;
                        this.e(n, f.toString() + t);
                        n.bottom = "auto";
                        this.d(n, e.toString() + t);
                        n.height = i.toString() + t;
                        n.width = "auto";
                        v || (s += i);
                        break;
                    case 1:
                        n.top = s.toString() + t;
                        this.e(n, f.toString() + t);
                        n.bottom = o.toString() + t;
                        this.d(n, "auto");
                        n.height = "auto";
                        n.width = i.toString() + t;
                        v || (f += i);
                        break;
                    case 2:
                        n.top = "auto";
                        this.e(n, f.toString() + t);
                        n.bottom = o.toString() + t;
                        this.d(n, e.toString() + t);
                        n.height = i.toString() + t;
                        n.width = "auto";
                        v || (o += i);
                        break;
                    case 3:
                        n.top = s.toString() + t;
                        this.e(n, "auto");
                        n.bottom = o.toString() + t;
                        this.d(n, e.toString() + t);
                        n.height = "auto";
                        n.width = i.toString() + t;
                        v || (e += i);
                        break;
                    case 4:
                        n.top = s.toString() + t;
                        this.e(n, f.toString() + t);
                        n.bottom = o.toString() + t;
                        this.d(n, e.toString() + t);
                        n.height = "auto";
                        n.width = "auto";
                        break
                }
                if (!_fce.c.f && this.i && r.eM(_fce.c.c)) {
                    var u = r.eM(_fce.c.g);
                    if (u) {
                        var h = new _j.D(u.z);
                        h.a(51);
                        u.bt("hResize");
                        u.bt("vResize");
                        var l = this.l.toString() + "px";
                        var c = this.m ? Math.round(this.l / 2) : 0;
                        n = u.z.style;
                        n.position = "absolute";
                        switch (a) {
                            case 0:
                                u.bo("hResize");
                                h.u(0);
                                n.top = (s - c).toString() + t;
                                this.e(n, f.toString() + t);
                                n.bottom = "auto";
                                this.d(n, e.toString() + t);
                                n.height = l;
                                n.width = "auto";
                                break;
                            case 1:
                                u.bo("vResize");
                                h.u(1);
                                n.top = s.toString() + t;
                                this.e(n, (f - c).toString() + t);
                                n.bottom = o.toString() + t;
                                this.d(n, "auto");
                                n.height = "auto";
                                n.width = l;
                                break;
                            case 2:
                                u.bo("hResize");
                                h.u(0);
                                n.top = "auto";
                                this.e(n, f.toString() + t);
                                n.bottom = (o - c).toString() + t;
                                this.d(n, e.toString() + t);
                                n.height = l;
                                n.width = "auto";
                                break;
                            case 3:
                                u.bo("vResize");
                                h.u(1);
                                n.top = s.toString() + t;
                                this.e(n, "auto");
                                n.bottom = o.toString() + t;
                                this.d(n, (e - c).toString() + t);
                                n.height = "auto";
                                n.width = l;
                                break;
                            case 4:
                                h.a(0);
                                break
                        }
                    }
                }
            }
        }
    },
    w: function() {
        return Math.min(window.document.documentElement.clientWidth, window.document.body.offsetWidth)
    },
    v: function() {
        return Math.min(window.document.documentElement.clientHeight, window.document.body.offsetHeight)
    },
    d: function(n, t) {
        this.g ? n.right = t : n.left = t
    },
    e: function(n, t) {
        this.g ? n.left = t : n.right = t
    }
};
_fce.J = function(n) {
    _fce.J.initializeBase(this, [n])
};
_fce.J.prototype = {
    r: function(n) {
        this.k !== n && this.o(n);
        return n
    },
    P: function() {
        _fc.i.prototype.P.call(this);
        var n = this;
        this.apcl("HasFocus", function() {
            n.by("IsFocused")
        })
    }
};
_fce.bf = function(n, t) {
    _fce.bf.initializeBase(this, [n]);
    if (t) {
        this.a = t;
        this.z.appendChild(this.a.z)
    }
};
_fce.bf.prototype = {
    a: null,
    G: function() {
        _j.i.prototype.G.call(this);
        this.a && this.a.bm()
    },
    M: function() {
        _j.i.prototype.M.call(this);
        this.a && this.a.bx()
    }
};
_fce.K = function(n) {
    _fce.K.initializeBase(this, [n])
};
_fce.K.prototype = {
    b: null,
    P: function() {
        _j.i.prototype.P.call(this);
        this.c()
    },
    G: function() {
        _j.bd.prototype.G.call(this);
        this.b.bm();
        for (var n = 0; n < this.d.length; n++) this.d[n].bm()
    },
    M: function() {
        _j.bd.prototype.M.call(this);
        this.b.bx();
        for (var n = 0; n < this.d.length; n++) this.d[n].bx()
    },
    l: function(n, t) {
        if (n.z.parentNode && n.z.parentNode.nodeType !== 11) throw Error.argument("Can't add already added control to panel");
        var i = this.f(n);
        Array.insert(this.d, t, i);
        if (this.b) {
            var r = t ? this.d[t - 1].z.nextSibling : this.b.z.firstChild;
            this.b.z.insertBefore(i.z, r);
            this.Z() && i.bm()
        }
    },
    f: function(n) {
        return new _fce.bf(window.document.createElement("td"), n)
    },
    c: function() {
        var n = new _j.c(window.document.createElement("div"));
        n.y("HorizontalPanelContainerView");
        this.z.appendChild(n.z);
        n.bm();
        this.b = n.B.a("Container");
        for (var t = 0; t < this.d.length; t++) {
            var i = this.d[t];
            this.b.z.appendChild(i.z)
        }
    }
};
_fce.n = function(n) {
    _fce.n.initializeBase(this, [n]);
    this.bn(416)
};
_fce.n.prototype = {
    a: null,
    h: !1,
    d: !1,
    g: !0,
    e: function() {
        return _fce.e.prototype.e.call(this)
    },
    t: function(n) {
        _fce.e.prototype.t.call(this, n);
        this.e() && this.g && this.i();
        return n
    },
    b: function(n) {
        this.g = n;
        this.g && this.e() && this.i();
        return n
    },
    dh: function() {
        return this.a && this.d ? this.a.dh() : _j.i.prototype.dh.call(this)
    },
    A: function(n) {
        this.a && this.d ? this.a.A(n) : _j.i.prototype.A.call(this, n);
        return n
    },
    j: function(n) {
        this.a ? this.a.S().g(n) : _j.i.prototype.gt.call(this, n);
        return n
    },
    R: function() {
        return this.a ? this.a.R() : _j.c.prototype.R.call(this)
    },
    H: function() {
        _fce.e.prototype.H.call(this);
        if (this.B) {
            this.a = this.B.a("FocusControl");
            this.a && this.a.S().g(_j.i.prototype.sv.call(this))
        } else this.a = null
    },
    cD: function(n) {
        _fce.e.prototype.cD.call(this, n);
        if (!this.h && n.b() === this.z && this.a) {
            n.d();
            n.c();
            this.i()
        }
    },
    cg: function(n) {
        _j.i.prototype.cg.call(this, n);
        n.a() === 9 && (this.h = !!this.a && (this.a.z === n.b() || this.a.z.contains(n.b())))
    },
    fh: function(n) {
        _j.i.prototype.fh.call(this, n);
        this.h = !1
    },
    i: function() {
        this.a && this.a.R()
    }
};
_fce.P = function(n, t) {
    _fce.P.initializeBase(this, [n, t])
};
_fce.P.prototype = {
    pO: function(n, t) {
        _fm.i.isInstanceOfType(n) && this.fY !== 51 && this.fY && t.D(51);
        _fm.c.isInstanceOfType(n) && _fm.j.isInstanceOfType(n.t()) && t.S().m(0)
    }
};
_fce.a = function(n, t) {
    this.ph = Function.createDelegate(this, this.mU);
    this.pr = Function.createDelegate(this, this.cv);
    this.my = Function.createDelegate(this, this.sf);
    this.mA = Function.createDelegate(this, this.pG);
    this.cs = Function.createDelegate(this, this.cW);
    this.mx = Function.createDelegate(this, this.sd);
    this.mz = Function.createDelegate(this, this.si);
    this.jZ = Function.createDelegate(this, this.se);
    this.pi = Function.createDelegate(this, this.iE);
    this.mw = Function.createDelegate(this, this.kh);
    this.mv = Function.createDelegate(this, this.mG);
    this.pg = Function.createDelegate(this, this.mI);
    this.pf = Function.createDelegate(this, this.mH);
    this.pl = Function.createDelegate(this, this.pH);
    this.pp = Function.createDelegate(this, this.pK);
    this.po = Function.createDelegate(this, this.pJ);
    this.pm = Function.createDelegate(this, this.pI);
    this.pk = Function.createDelegate(this, this.gb);
    this.pj = Function.createDelegate(this, this.dL);
    this.pq = Function.createDelegate(this, this.sn);
    this.pn = Function.createDelegate(this, this.sm);
    this.mC = Function.createDelegate(this, this.ew);
    this.mB = Function.createDelegate(this, this.ev);
    this.iA = new Sys.UI.Point(-1, -1);
    this.eY = -1;
    this.cR = -1;
    this.na = -1;
    this.mV = -1;
    _fce.a.initializeBase(this, [n]);
    this.cd = t
};
_fce.a.prototype = {
    kb: 1e4,
    iL: !1,
    iy: !1,
    ed: !1,
    kz: !1,
    hj: !1,
    dv: !0,
    cG: 0,
    cC: 0,
    iH: 0,
    iz: null,
    w: null,
    eX: null,
    iF: null,
    cQ: null,
    dZ: null,
    dd: null,
    cb: null,
    ka: null,
    eJ: null,
    he: null,
    fY: 0,
    kq: 0,
    km: !1,
    hd: null,
    bs: !1,
    eb: null,
    ky: 1,
    cz: !1,
    bU: null,
    hi: !1,
    kn: !1,
    iD: !1,
    kf: !1,
    cT: !1,
    fW: !1,
    bR: !1,
    dP: null,
    gX: null,
    cm: null,
    bd: !1,
    eu: 0,
    kp: !1,
    kA: !1,
    ct: !1,
    cd: null,
    eI: !1,
    hg: !1,
    hc: !1,
    cA: !1,
    kd: null,
    gW: null,
    ke: 0,
    cS: 0,
    dK: 0,
    fX: function() {
        return !this.he || !this.he.length ? "div" : this.he
    },
    be: function(n) {
        if (this.he !== n) {
            this.he = n;
            this.by("ItemTagName")
        }
        return n
    },
    ci: function(n) {
        if (this.fY !== n) {
            this.fY = n;
            this.by("ItemAriaRole")
        }
        return n
    },
    sp: function(n) {
        if (this.kq !== n) {
            this.kq = n;
            this.by("ItemAriaTabIndex")
        }
        return n
    },
    so: function(n) {
        if (this.km !== n) {
            this.km = n;
            this.by("HasItemAriaTabIndex")
        }
        return n
    },
    kj: function() {
        return !this.hd || !this.hd.length ? null : this.hd
    },
    bi: function(n) {
        if (this.hd !== n) {
            this.hd = n;
            this.by("ItemClassName")
        }
        return n
    },
    df: function(n) {
        if (n !== this.eb) {
            if (this.Z())
                if (this.ky) {
                    this.eb = n;
                    this.pF()
                } else {
                    this.eb = n;
                    this.kx(!0)
                }
            else {
                this.eb = n;
                this.iD = !0
            }
            this.by("GroupGenerator")
        }
        return n
    },
    bY: function(n) {
        if (n !== this.cz) {
            this.mR();
            this.cz = n;
            this.by("GroupHeadersEnabled")
        }
        return n
    },
    iI: function(n) {
        this.ky !== n && (this.ky = n);
        return n
    },
    cJ: function() {
        return new _j.g(this.mB, this.I())
    },
    cK: function() {
        return new _j.g(this.mC, this.I())
    },
    is: function() {
        return new _j.g(this.pn, this.I())
    },
    it: function() {
        return new _j.g(this.pq, this.I())
    },
    cX: function() {
        return new _j.g(this.pj, this.I())
    },
    de: function() {
        return new _j.g(this.pk, this.I())
    },
    pz: function() {
        return new _j.g(this.pm, this.I())
    },
    pA: function() {
        return new _j.g(this.po, this.I())
    },
    rW: function() {
        return new _j.g(this.pp, this.I())
    },
    rV: function() {
        return new _j.g(this.pl, this.I())
    },
    dI: function() {
        return new _j.g(this.pf, this.I())
    },
    dJ: function() {
        return new _j.g(this.pg, this.I())
    },
    dH: function() {
        return new _j.g(this.mv, this.I())
    },
    fy: function() {
        return new _j.g(this.mw, this.I())
    },
    gZ: function() {
        return new _j.g(this.pi, this.I())
    },
    bc: function(n) {
        if (this.iz !== n) {
            this.iz = n;
            this.by("ItemFactory")
        }
        return n
    },
    dR: function() {
        return this.eM(_fce.a.b)
    },
    cO: function(n) {
        this.eK(_fce.a.b, n);
        return n
    },
    gY: function() {
        return this.bs && !_fce.a.c
    },
    cu: function(n) {
        if (this.ed !== n) {
            this.ed = n;
            this.by("SelectOnMouseDown")
        }
        return n
    },
    x: function() {
        return this.dd
    },
    bl: function(n) {
        if (n !== this.x()) {
            if (n && !_j.M.isInstanceOfType(n)) throw Error.argumentType("value", Object.getType(n), _j.M);
            this.mR();
            this.dd = n;
            if (this.Z()) {
                this.pN();
                this.ps();
                this.hh()
            } else {
                this.hi = !0;
                this.kn = !0
            }
            this.by("DataSource")
        }
        return n
    },
    dQ: function() {
        return this.x() ? this.x().b() : 0
    },
    E: function() {
        return this.cb
    },
    bg: function(n) {
        if (this.bM || n === this.cb) return n;
        var t = this.bv();
        if (t) {
            t.t(!1);
            this.eX && t.y(this.eX)
        }!n;
        this.fC(n);
        t = this.bv();
        if (t) {
            this.kw(t);
            if (this.bd) {
                this.eL();
                this.B && this.B.c(t)
            }
        }
        this.ex(0);
        this.by("SelectedItem");
        return n
    },
    bS: function() {
        return this.ka
    },
    cH: function(n) {
        this.ka = n;
        return n
    },
    v: function(n) {
        if (n !== this.eX) {
            this.eX = n;
            this.hh();
            this.by("DataTemplateId")
        }
        return n
    },
    kv: function(n) {
        if (n !== this.iF) {
            this.iF = n;
            this.hh();
            this.by("SelectedDataTemplateId")
        }
        return n
    },
    ch: function(n) {
        if (n !== this.cQ) {
            this.cQ = n;
            this.by("GroupHeaderTemplateId")
        }
        return n
    },
    dn: function(n) {
        if (n && n !== this.dZ) {
            this.pt();
            this.dZ = n;
            this.ip();
            this.by("DataConverter")
        }
        return n
    },
    mW: function(n) {
        if (this.gX !== n) {
            this.gX = n;
            this.by("FinishedRenderingCommand")
        }
        return n
    },
    kk: function() {
        return this.eM(_fce.a.d)
    },
    cj: function(n) {
        this.eK(_fce.a.d, n);
        return n
    },
    bD: function(n) {
        if (this.iL !== n) {
            this.iL = n;
            this.by("UseChunkedAdds")
        }
        return n
    },
    bJ: function(n) {
        if (this.kb !== n) {
            this.kb = n;
            this.by("AddChunkSize")
        }
        return n
    },
    pM: function(n) {
        if (this.ha() && this.hg !== n) {
            this.hg = n;
            if (!this.hg) {
                this.kg(this.kd, this.ke);
                this.kd = null;
                this.ke = 0
            }
        }
        return n
    },
    ku: function(n) {
        this.kf !== n && (this.kf = n);
        return n
    },
    mY: function(n) {
        if (this.kz !== n) {
            this.kz = n;
            this.by("StopPropagationOnClickEvents")
        }
        return n
    },
    bv: function() {
        if (this.cb && this.w) {
            var n = this.bP(this.cb);
            if (n !== -1) return this.w.a.c(n)
        }
        return null
    },
    dm: function() {
        return this.cb && this.w ? this.bP(this.cb) : -1
    },
    cf: function(n) {
        if (this.hj !== n) {
            this.hj = n;
            this.by("SelectOnFocus")
        }
        return n
    },
    ex: function(n) {
        if (this.eu !== n) {
            this.eu = n;
            this.by("LastSelectionSource")
        }
        return n
    },
    mX: function(n) {
        if (this.kp !== n) {
            this.kp = n;
            this.by("IsSelectedItemExpanded")
        }
        return n
    },
    fD: function(n) {
        if (n !== this.iH) {
            this.iH = n;
            this.by("SelectItemPageSize")
        }
        return n
    },
    uH: function(n) {
        this.bB("OnItemCachedEvent", n)
    },
    uI: function(n) {
        this.bF("OnItemCachedEvent", n)
    },
    cM: function() {
        return "#ListView"
    },
    I: function() {
        return _ff.c.i
    },
    fC: function(n) {
        if (this.cb !== n) {
            this.cb = n;
            n && this.mF();
            this.cH(n)
        }
        return n
    },
    pL: function(n) {
        if (this.bU !== n) {
            if (this.bU) {
                this.bU.e(this.jZ);
                this.bU.dispose()
            }
            this.bU = n;
            this.sh()
        }
        return n
    },
    ki: function() {
        return !1
    },
    ha: function() {
        return this.iL
    },
    ir: function() {
        return this.dh() >= 0 ? this.dh() : 0
    },
    iu: function() {
        var n = this.B.a("ListPanel");
        n && n.z && (this.na = _j.k.h(n.z));
        return this.na
    },
    bQ: function() {
        return this.eY
    },
    gc: function(n) {
        this.eY !== n && (this.eY = n);
        return n
    },
    mJ: function() {
        if (this.eY > 0) {
            this.mV = this.dK + this.eY * this.cS;
            return this.mV
        } else return 0
    },
    py: function() {
        return this.x() && this.bQ() > 0 ? Math.floor(this.x().b() / this.eY) - 1 : 0
    },
    px: function() {
        var n = this.bv();
        n && n.R()
    },
    iq: function(n) {
        var t = this.bP(n);
        t > -1 && this.w.a.c(t).R()
    },
    dw: function(n) {
        var t = n.be();
        var l = this;
        var c = function(t) {
            l.fZ(n, t)
        };
        this.ix(t, c);
        var h = this;
        var a = function(t) {
            h.mQ(n, t)
        };
        t.bf("mouseup", a, this.cM());
        var p = this;
        var y = function(t) {
            p.hf(n, t)
        };
        t.bf("click", y, this.cM());
        var v = this;
        var u = function(t) {
            v.ec(n, t)
        };
        t.bf("contextmenu", u, this.cM());
        var r = this;
        var i = function(t) {
            r.sg(n, t)
        };
        t.bf("dblclick", i, this.cM());
        if (this.cT || this.fW) {
            var f = this;
            var s = function(t) {
                f.kt(n, t)
            };
            t.bf("mousemove", s, this.cM())
        }
        if (this.hj || this.bd) {
            var o = this;
            var e = function(t) {
                o.eZ(n, t)
            };
            t.bf("focusin", e, this.cM());
            n.apcl("HasFocus", this.mz)
        }
        n.ev();
        n.dE = !0
    },
    ea: function(n) {
        var t = n.be();
        t.bj("click", this.cM());
        t.bj("dblclick", this.cM());
        t.bj("contextmenu", this.cM());
        t.bj("mousedown", this.cM());
        t.bj("mouseup", this.cM());
        t.bj("mousemove", this.cM());
        t.bj("focusin", this.cM());
        t.bj("contextmenu", this.cM());
        n.rpcl("HasFocus", this.mz);
        n.et();
        n.dE = !1
    },
    cp: function(n) {
        var t;
        t = this.dZ ? this.dZ.bs(n) : n;
        return t
    },
    pv: function(n) {
        var t = null;
        t = this.dZ ? this.dZ.bT(n) : n;
        return t
    },
    bE: function() {
        this.mR();
        if (this.w) {
            for (var u = this.w.a.b(), t = 0; t < u; t++) this.eW(this.w.a.c(t));
            this.w.a.g()
        }
        if (this.gY()) {
            var i = _fce.a.a[this.bw];
            if (i)
                for (var f = i.length, n = 0; n < f; n++) {
                    var r = i[n];
                    this.ea(r)
                }
        }
        _j.c.prototype.bE.call(this)
    },
    bz: function() {
        this.bl(null);
        this.eJ = null;
        this.ka = null;
        this.cb = null;
        this.fV();
        this.mE();
        _j.c.prototype.bz.call(this)
    },
    G: function() {
        _j.c.prototype.G.call(this);
        if (this.kn) {
            this.sa();
            this.kn = !1;
            this.iD = !1
        }
        if (this.iD) {
            this.pF();
            this.iD = !1
        }
        if (this.hi) {
            this.hh();
            this.hi = !1
        }
        this.bR && this.cv()
    },
    P: function() {
        _j.c.prototype.P.call(this);
        this.bd && this.bn(524288)
    },
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            var n = this.B.a("ListPanel");
            if (_j.bd.isInstanceOfType(n)) {
                this.w = n;
                this.w.D(0);
                this.w.Q(null);
                this.gY() && this.cA && _fce.d.isInstanceOfType(this.w) && (this.w.q = !0)
            }
        } else this.w = null;
        this.sl()
    },
    sl: function() {
        this.x() && this.hh()
    },
    eH: function(n) {
        var t = this.du(n);
        this.dv && !t.dx() && t.hd(this.mx);
        this.cA && this.gY() && !t.Z() && t.bm();
        t.dx() && !t.dE && this.dw(t);
        t.ck(this);
        this.mP(t);
        return t
    },
    ix: function(n, t) {
        n.bf("mousedown", t, this.cM())
    },
    du: function(n) {
        var r = this.hb(n);
        var t = this.rX(r);
        this.kj() && t.bH(this.kj());
        t.t(!1);
        this.ki() && t.y(null);
        this.eX && t.y(this.eX);
        t.ba(r);
        if (this.dZ) {
            var i = this.dZ.dy(t.V());
            _j.h.a(i) || t.Q(i)
        }
        t.fj(this);
        return t
    },
    eG: function(n) {
        var t;
        if (this.iz) {
            t = this.rT(n);
            t.z.parentNode && t.z.parentNode.removeChild(t.z)
        } else t = new _fce.e(window.document.createElement(this.fX()));
        this.km && t.A(this.kq);
        this.bd && t.A(-1);
        t.D(this.fY);
        t.ck(this);
        return t
    },
    rT: function(n) {
        return this.iz()
    },
    rP: function() {
        var n = new _fc.v(window.document.createElement(this.fX()));
        this.cQ && n.y(this.cQ);
        return n
    },
    fZ: function(n, t) {
        if (this.ed) {
            var i = t.a();
            i - 1 ? i - 1 == 2 && this.kk() && this.fB(n, t) : this.cc(n, t)
        }
        this.cd.a() !== "Mouse" && this.cO(new _ff.r(t, 0));
        this.mZ(n);
        this.ey(t)
    },
    mQ: function(n, t) {},
    mZ: function(n) {
        if (this.dP !== n) {
            this.fV();
            n.dK(!0);
            this.dP = n;
            var i = n.be();
            var t = this;
            i.bf("mouseup", function(n) {
                t.fV()
            }, "ListViewIsTouched")
        }
    },
    fV: function() {
        if (this.dP) {
            this.dP.dK(!1);
            this.dP.be().bj("mouseup", "ListViewIsTouched");
            this.dP.be().bj("mouseleave", "ListViewIsTouched");
            this.dP = null
        }
    },
    hf: function(n, t) {
        this.ed || this.cc(n, t);
        this.ey(t)
    },
    ec: function(n, t) {
        !this.ed && this.kk() && this.fB(n, t);
        this.ey(t)
    },
    sg: function(n, t) {
        this.cO(new _ff.r(t, 16));
        if (this.ff() && this.ff().b && n.e()) {
            this.ff().a();
            t.d()
        } else this.ey(t)
    },
    kt: function(n, t) {
        if (t.e() !== this.iA.x || t.f() !== this.iA.y) {
            this.iA.x = t.e();
            this.iA.y = t.f();
            this.cT && this.dS(n);
            this.fW && n.R()
        }
    },
    eZ: function(n, t) {
        this.hj && this.dS(n);
        this.cH(n.V());
        this.dx(n);
        n.fs(t)
    },
    si: function(n, t) {
        var i = n;
        if (i.cT()) {
            this.eJ && this.eJ !== i && this.eJ.cT() && this.eJ.fp();
            this.eJ = i
        }
    },
    dV: function(n) {
        var t = !!document.activeElement && this.z.contains(document.activeElement);
        if (!t) {
            this.cH(this.E());
            this.eJ = null;
            this.eL()
        }
    },
    eL: function() {
        this.bv() ? this.dx(this.bv()) : this.mU()
    },
    cc: function(n, t) {
        this.cO(new _ff.r(t, 3));
        this.dS(n);
        this.cm && this.cm.b && this.cm.a()
    },
    fB: function(n, t) {
        this.cO(new _ff.r(t, 4));
        this.dS(n)
    },
    iv: function(n) {
        for (var i = this.w.a.b(), t = 0; t < i; t++)
            if (n === this.w.a.c(t)) return t;
        return -1
    },
    bP: function(n) {
        for (var u = this.w.a.b(), t = 0; t < u; t++) {
            var i = this.w.a.c(t);
            if (_j.bk.isInstanceOfType(i)) {
                var r = this.cp(i.fc());
                if (this.cW(n, r)) return t
            }
        }
        return -1
    },
    kl: function(n) {
        var t = -1;
        t = this.cz && this.bU ? this.x().h(this.bU.x[n], this.cs) : n;
        return t
    },
    cN: function(n, t, i) {
        if (!this.hi) {
            if (this.w) {
                this.ha();
                if (this.eI && this.rZ(t, i)) return
            }
            switch (t.c) {
                case 0:
                    this.fU(t.d, t.a.length, i);
                    break;
                case 1:
                    this.mO(t.d, t.e, t.a);
                    break;
                case 2:
                    this.ga(t.d, t.b.length, t.b, t.c, i);
                    break;
                case 3:
                    this.mT(t.d, t.b, t.a, i);
                    break;
                case 4:
                    this.hh();
                    break;
                default:
                    break
            }
        }
    },
    pY: function(n) {
        n.c()
    },
    rX: function(n) {
        if (this.bw && this.gY()) {
            var i = _fce.a.a[this.bw];
            if (i && i.length > 0)
                for (var r = 0, u = i.length; r < u; r++) {
                    var t = i[r];
                    if (this.iJ(n, t)) {
                        Array.removeAt(i, r);
                        t.z.parentNode && t.z.parentNode.removeChild(t.z);
                        return t
                    }
                }
        }
        return this.eG(n)
    },
    eW: function(n) {
        var r = !1;
        var u = null;
        if (!this.cz || _fce.e.isInstanceOfType(n)) {
            u = n.fc();
            if (this.bw && this.gY() && _fce.e.isInstanceOfType(n)) {
                var t = _fce.a.a[this.bw];
                if (!t) {
                    t = [];
                    _fce.a.a[this.bw] = t
                }
                if (t.length < 50) {
                    var i = n;
                    i.es();
                    this.dP === n && this.fV();
                    this.cA || i.bx();
                    if (!this.hc) {
                        this.hc = !0;
                        _j.m.a().d(this.I(), "ListView::ReleaseCachedItemsDataContext - Trigger release cached items datacontext with ListView TemplateId: " + this.bw, this.mA)
                    }
                    i.fj(null);
                    i.ck(null);
                    Array.enqueue(t, n);
                    _j.i.a().appendChild(n.z);
                    r = !0;
                    this.bO("OnItemCachedEvent", n)
                }
            }
        }
        this.et(n, r)
    },
    kr: function(n) {},
    kw: function(n) {
        n.t(!0);
        this.iF && n.y(this.iF)
    },
    et: function(n, t) {
        if (n) {
            if (!t) {
                this.kr(n);
                n.dispose()
            }
            this.rU(n.fc());
            this.eJ === n && (this.eJ = null)
        }
    },
    fU: function(n, t, i) {
        this.fA(n, t, i)
    },
    mT: function(n, t, i, r) {
        this.ga(n, t.length, t, 3, 0);
        this.fU(n, i.length, 0)
    },
    mO: function(n, t, i) {
        if (this.w) {
            var r = this.w.a.c(n);
            r && this.w.a.v(n, t, r)
        }
    },
    ga: function(n, t, i, r, u) {
        if (this.w) {
            for (var s = n + t - 1, e = !1, f = s, o = t - 1; f >= n; f--, o--) {
                this.E() === i[o] && (e = !0);
                this.sk(f, r, u)
            }
            this.iw(e);
            (e || !this.E()) && this.eL()
        }
    },
    ko: function(n) {
        return this.cW(n, this.E())
    },
    fa: function(n, t, i) {
        for (var u = n; u < n + t; u++) {
            var r = this.w.a.c(u);
            if (r && r.bw && r.bw !== this.cQ) {
                var f = this.cp(r.V());
                this.pO(f, r);
                this.ko(f) && this.kw(r)
            }
        }
        this.E() || this.mU()
    },
    ks: function(n, t, i) {},
    mP: function(n) {},
    iB: function() {
        this.kA = !0
    },
    iC: function() {
        this.kA = !1
    },
    iw: function(n) {
        n && this.bg(null)
    },
    sk: function(n, t, i) {
        var r = this.w.a.c(n);
        r && this.mS(r, n, t, i)
    },
    dS: function(n) {
        if (!this.kf) {
            var t = this.cp(n.fc());
            this.cW(this.E(), t) || this.bg(t)
        }
        this.by("UserActionTaken")
    },
    fz: function() {
        var n = -1;
        this.cz ? this.bU && (n = this.bU.x.length) : this.dd && (n = this.dd.b());
        return n
    },
    ey: function(n) {
        this.kz && (n.h() || n.g()) && n.d()
    },
    mH: function() {
        this.pw(0)
    },
    mI: function() {
        this.pw(1)
    },
    iE: function() {
        this.bS() && this.bg(this.bS())
    },
    ev: function() {
        this.iG(0);
        this.cv()
    },
    ew: function() {
        this.iG(1);
        this.cv()
    },
    sm: function() {
        this.iG(0, this.iH);
        this.cv()
    },
    sn: function() {
        this.iG(1, this.iH);
        this.cv()
    },
    dL: function() {
        for (var i = this.x().b(), n = 0; n < i; n++) {
            var t = this.x().c(n);
            if (this.iK(t)) {
                this.cv();
                this.cS = 0;
                this.dK = 0;
                return
            }
        }
    },
    gb: function() {
        for (var n = this.x().b(); n >= 0; n--) {
            var t = this.dd.c(n);
            if (this.iK(t)) {
                this.cv();
                this.cS = this.bQ() > 0 ? this.pB() - 1 : 0;
                this.dK = this.x().b() % this.bQ() ? this.x().b() % this.bQ() - 1 : this.bQ() - 1;
                return
            }
        }
    },
    pJ: function() {
        var n = this;
        this.kB(function() {
            var i = n.x().b() <= n.bQ() * (n.cS + 1);
            var t = n.bQ() * n.cS + n.dK + 1;
            if (t !== n.x().b()) {
                n.dK = n.bQ() > 0 ? (n.dK + 1) % n.bQ() : 0;
                n.dK || (n.cS += 1)
            }
        })
    },
    pI: function() {
        var n = this;
        this.kB(function() {
            if (n.bQ() > 0)
                if (n.dK > 0) n.dK = n.dK - 1;
                else if (n.cS) {
                n.dK = n.bQ() - 1;
                n.cS -= 1
            }
        })
    },
    pK: function() {
        var n = this;
        this.kB(function() {
            n.cS > 0 && (n.cS = n.cS - 1)
        })
    },
    pH: function() {
        var n = this;
        this.kB(function() {
            if (n.cS < n.py()) n.cS = n.cS + 1;
            else {
                var i = n.pB();
                if (n.cS < i - 1) {
                    var t = n.x().b() % n.bQ();
                    n.dK < t && n.py() > 0 && (n.cS = n.cS + 1)
                }
            }
        })
    },
    mG: function() {
        if (this.x())
            for (var i = this.x().b(), n = 0; n < i; n++) {
                var t = this.x().c(n);
                if (this.fE(t)) {
                    this.cH(t);
                    return
                }
            }
    },
    kh: function() {
        for (var n = this.x().b(); n >= 0; n--) {
            var t = this.dd.c(n);
            if (this.fE(t)) {
                this.cH(t);
                return
            }
        }
    },
    cv: function() {
        var n = this.bv();
        n && n.R()
    },
    pD: function() {
        return this.E() ? this.x().h(this.E(), this.cs) : -1
    },
    dx: function(n) {
        if (this.bd && this.w && this.w.a) {
            for (var i = this.w.a, r = i.b(), t = 0; t < r; t++) _fce.e.isInstanceOfType(i.c(t)) ? i.c(t).dI(-1) : i.c(t).A(-1);
            n && n.dI(this.ir())
        }
    },
    mU: function() {
        if (this.w && this.w.a)
            for (var t = this.w.a, i = t.b(), n = 0; n < i; n++)
                if (_fce.e.isInstanceOfType(t.c(n))) {
                    this.dx(t.c(n));
                    break
                }
    },
    mM: function() {
        return this.z === document.activeElement || !!document.activeElement && this.z.contains(document.activeElement)
    },
    sc: function() {
        return this.w ? this.w.z === document.activeElement || !!document.activeElement && this.w.z.contains(document.activeElement) : !1
    },
    mD: function(n, t, i) {
        if (n > this.w.a.b()) {
            _j.e.c(this.I(), "AddItemsToPanel out of bounds: insertIndex {0}, panelCount {1}, dataCount {2}, TemplateId: {3}", n, this.w.a.b(), this.fz(), this.bw);
            return
        }
        this.w.a.s(n, t)
    },
    mS: function(n, t, i, r) {
        this.ks(t, 1, r);
        this.w.a.n(t);
        this.eW(n)
    },
    mF: function() {
        var n = this.bv();
        if (this.Z() && this.bR && (!this.eu || this.mM())) {
            n && n.z.blur();
            this.cv()
        }
    },
    cW: function(n, t) {
        if (n && t && Object.getType(n) !== Object.getType(t)) return !1;
        if (n)
            if (_ff.u.isInstanceOfType(n)) return n.N(t);
            else if (_j.L.isInstanceOfType(n)) return n.C(t);
        return n === t
    },
    pC: function(n) {
        return 0
    },
    mE: function() {
        this.cG = 0;
        this.cC = 0;
        this.eI = !1;
        this.iy = !1;
        this.hg = !1;
        this.gW && (this.gW = _j.m.a().b(this.gW))
    },
    iJ: function(n, t) {
        return !t.c || t.c === this
    },
    fx: function() {
        this.by("FinishedRendering");
        this.gX && this.gX.b && this.gX.a()
    },
    ip: function() {
        this.dd && this.fz() > 0 && this.fU(0, this.fz(), 1);
        this.dd || this.bg(null)
    },
    hb: function(n) {
        return this.pv(this.rY(n))
    },
    sh: function() {},
    mN: function() {
        return !this.bM
    },
    kc: function() {
        _j.e.a(this.I(), "ListView::CompleteChunking: panel children count: {0}, data count: {1}", this.w.a.b(), this.fz());
        this.mE();
        this.fx();
        this.hc && this.pG()
    },
    pO: function(n, t) {},
    pB: function() {
        return this.bQ() > 0 ? Math.ceil(this.x().b() / this.bQ()) : 0
    },
    kg: function(n, t) {
        this.eI = !0;
        if (!this.iy) {
            this.iy = !0;
            var i = this;
            this.gW = _j.m.a().a(this.I(), "InsertPanelItems", function() {
                i.rO(n, t)
            }, 0)
        }
    },
    rO: function(n, t) {
        this.gW = null;
        this.iy = !1;
        if (this.ha() && this.hg) {
            this.kd = n;
            this.ke = t;
            return
        }
        if (this.mN())
            if (this.cG > this.w.a.b() || this.cG >= this.fz() || !this.cC) {
                n && n();
                this.kc()
            } else this.fA(this.cG, this.cC, t, n)
    },
    iK: function(n) {
        var i = this.bP(n);
        var t = this.w.a.c(i);
        if (t && !t.bp()) {
            this.bg(n);
            return !0
        }
        return !1
    },
    iG: function(n, t) {
        t = t || 1;
        var f = this.bv();
        if (!f || !f.u) {
            var u = this.pD();
            switch (n) {
                case 0:
                    for (var e = this.x().b(), i = Math.min(u + t, e - 1); i < e; i++)
                        if (this.iK(this.x().c(i))) return;
                    break;
                case 1:
                    for (var r = Math.max(u - t, 0); r >= 0; r--)
                        if (this.iK(this.x().c(r))) return;
                    break;
                default:
                    return
            }
        }
    },
    pw: function(n) {
        var u = this.bS() ? this.bP(this.bS()) : -1;
        var t = null;
        switch (n) {
            case 0:
                for (var f = this.x().b(), i = u + 1; i < f; i++) {
                    t = this.x().c(i);
                    if (this.fE(t)) {
                        this.cH(t);
                        return
                    }
                }
                break;
            case 1:
                for (var r = u - 1; r >= 0; r--) {
                    t = this.x().c(r);
                    if (this.fE(t)) {
                        this.cH(t);
                        return
                    }
                }
                break;
            default:
                return
        }
    },
    fE: function(n) {
        var i = this.bP(n);
        if (i !== -1) {
            var t = this.w.a.c(i);
            if (t) {
                t.A(this.ir());
                return t.R()
            }
        }
        return !1
    },
    pu: function(n) {
        n.ba(null)
    },
    pE: function(n) {
        return !n.V()
    },
    sd: function(n) {
        n.hi(this.mx);
        this.dw(n)
    },
    rY: function(n) {
        return this.cz ? this.bU.x[n] : this.dd.c(n)
    },
    rZ: function(n, t) {
        switch (n.c) {
            case 0:
                this.mK(n.d, n.a, t);
                return !0;
            case 2:
                this.mL(n.d, n.b, t);
                return !0;
            case 1:
                this.mL(n.d, n.a, t);
                this.mK(n.e, n.a, t);
                return !0;
            case 3:
                this.mL(n.d, n.b, 0);
                this.mK(n.d, n.a, 0);
                return !0
        }
        return !1
    },
    mK: function(n, t, i) {
        var r = this.cG + this.cC;
        if (n >= this.cG) n <= r ? this.cC += t.length : this.fA(n - this.cC, t.length, i, null, !0, n);
        else {
            this.cG += t.length;
            this.fA(n, t.length, i, null, !0, n)
        }
    },
    mL: function(n, t, i) {
        var e = this.cG + this.cC;
        var r = t.length;
        if (n >= this.cG)
            if (n < e)
                if (n + r <= e) this.cC -= r;
                else {
                    for (var o = n + r - e, v = new Array(o), y = 0, c = r - o; c < r; c++, y++) v[y] = t[c];
                    this.ga(e - this.cC, o, v, 2, i);
                    var p = r - o;
                    this.cC -= p
                }
        else {
            n !== e;
            this.ga(n - this.cC, r, t, 2, i)
        } else if (n + r <= this.cG) {
            this.cG -= r;
            this.ga(n, r, t, 2, i)
        } else {
            for (var u = this.cG - n, f = new Array(u), s = 0; s < u; s++) f[s] = t[s];
            this.ga(n, u, f, 2, i);
            this.cG -= u;
            if (r - u <= this.cC) this.cC -= r - u;
            else {
                var h = r - u - this.cC;
                this.cC = 0;
                f = new Array(h);
                for (var a = 0, l = r - h; l < r; l++, a++) f[a] = t[l];
                this.ga(this.cG, h, f, 2, i)
            }
        }
    },
    pG: function() {
        if (!this.eI) {
            var t = _fce.a.a[this.bw];
            if (!t) {
                this.hc = !1;
                return
            }
            for (var r = !1, n = t.length - 1; n >= 0; n--) {
                var i = t[n];
                if (!this.pE(i)) {
                    r = !0;
                    this.pu(i);
                    break
                }
            }
            r ? _j.m.a().d(this.I(), "ListView::ReleaseCachedItemsDataContext - Trigger release cached items datacontext with ListView TemplateId: " + this.bw, this.mA) : this.hc = !1
        }
    },
    ps: function() {
        var n = this.cz ? this.bU : this.dd;
        n && (_ff.w.$$(_fm.r).isInstanceOfType(n) ? n.S(this.my) : n.d(this.jZ))
    },
    mR: function() {
        var n = this.cz ? this.bU : this.dd;
        n && (_ff.w.$$(_fm.r).isInstanceOfType(n) ? n.U(this.my) : n.e(this.jZ))
    },
    se: function(n, t) {
        this.cN(n, t, 0)
    },
    sf: function(n, t) {
        this.cN(n, t, t.f)
    },
    pN: function() {
        this.cz && (this.bU ? this.bU.Y(this.dd) : this.kx(!0))
    },
    kx: function(n) {
        if (this.eb)
            if (!this.bU || n) {
                this.bU && this.bU.Y(null);
                this.pL(new _fm.B(this.eb));
                this.bU.Y(this.dd)
            } else this.bU && this.bU.bu(this.eb);
        else this.bU && this.pL(null)
    },
    hh: function() {
        if (!this.Z()) {
            this.hi = !0;
            return
        }
        this.sb()
    },
    sb: function() {
        this.pt();
        this.ip();
        this.bd && this.eL()
    },
    pt: function() {
        this.mE();
        if (this.w)
            for (var i = this.w.a.b(), n = 0; n < i; n++) {
                var t = this.w.a.c(0);
                this.w.a.n(0);
                this.eW(t)
            }
    },
    rU: function(n) {
        this.dZ && !$a(n) && this.dZ.bS(n)
    },
    rQ: function(n) {
        var t = this.rP();
        var i = this.bU.x[n];
        t.ba(i);
        i.c() && t.K(!0);
        t.fj(this);
        this.cA && this.gY() && t.bm();
        return t
    },
    rS: function(n) {
        if (this.cz) {
            var t = this.bU.x[n];
            if (_fm.m.isInstanceOfType(t)) return this.rQ(n)
        }
        return this.eH(n)
    },
    rR: function(n, t, i) {
        var r = this.rS(t);
        Array.add(i, r)
    },
    fA: function(n, t, i, r, u, f) {
        if (this.w && !(t <= 0) && this.dd) {
            var l = this.ha();
            var h = u || i === 5 ? !1 : l;
            var o = h ? this.kb : t;
            t < o && (o = t);
            $a(f) && (f = h && i === 3 ? n + t - o : n);
            for (var s = [], e = 0; e < o; e++) {
                var a = n + e;
                var v = f + e;
                this.rR(a, v, s)
            }
            var c = s.length;
            this.mD(n, s, i);
            this.fa(n, c, i);
            h ? this.sj(t, n, c, i, r) : l || this.fx()
        }
    },
    sj: function(n, t, i, r, u) {
        n -= i;
        r !== 3 && (t += i);
        if (!n) {
            u && u();
            this.kc();
            return
        }
        this.cG = t;
        this.cC = n;
        if (r === 1) {
            var f = this.pC(r);
            if (f > 0) {
                f > this.cC && (f = this.cC);
                this.fA(this.cG, f, 0, null, !0, this.cG);
                this.cG += f;
                this.cC -= f;
                this.cC > 0 ? this.kg(u, 2) : this.fx()
            } else f ? this.fA(this.cG, this.cC, r, u) : this.kg(u, 2)
        } else this.kg(u, r)
    },
    sa: function() {
        this.pN();
        this.kx(!1);
        this.ps()
    },
    kB: function(n) {
        this.sq();
        if (this.bQ() > 0 && this.dd) {
            n();
            var t = this.dd.c(this.mJ());
            this.iK(t) && this.cv()
        }
    },
    sq: function() {
        if (this.cR > 0) {
            var n = Math.floor(this.iu() / this.cR);
            if (n !== this.eY) {
                this.cS = Math.floor(this.mJ() / n);
                this.dK = Math.floor(this.mJ() % n);
                this.eY = n
            }
        }
    },
    pF: function() {
        this.iB();
        this.kx(!1);
        this.iC()
    }
};
_fce.e = function(n) {
    this.fn = Function.createDelegate(this, this.hh);
    this.fm = Function.createDelegate(this, this.ex);
    this.eq = Function.createDelegate(this, this.hg);
    this.fo = Function.createDelegate(this, this.cm);
    this.ft = ["ShowSelected", "ShowSelectionColor", "IsItemHoveredOrShowSelected", _fce.e.c, "IsItemHoveredAndShowSelected", "IsItemHoveredAndNotShowSelected"];
    _fce.e.initializeBase(this, [n]);
    this.bP = new _j.g(this.fo, this.I())
};
_fce.e.prototype = {
    bP: null,
    cV: !1,
    er: !0,
    u: !1,
    bv: !1,
    ew: !1,
    cW: !1,
    dF: !1,
    v: !1,
    dD: !1,
    cF: !1,
    c: null,
    bZ: null,
    dE: !1,
    bD: !1,
    hd: function(n) {
        this.bZ || (this.bZ = new _j.H);
        this.bZ.b(n)
    },
    hi: function(n) {
        this.bZ && this.bZ.c(n)
    },
    dJ: function(n) {
        if (this.u !== n) {
            this.u = n;
            this.c && this === this.c.bv() && this.c.mX(this.u);
            this.cC();
            this.bA("IsExpanded", "ShowSelectionColor")
        }
        return n
    },
    e: function() {
        return this.cV
    },
    t: function(n) {
        if (this.cV !== n) {
            this.cV = n;
            this.bg();
            this.bA("IsSelected", _fce.e.b);
            this.hf() && this.gt(_j.D.d(n))
        }
        this.bd(n);
        this.cV || this.he() ? this.c && this.c.mX(this.u) : this.dJ(!1);
        return n
    },
    hf: function() {
        return this.er
    },
    dH: function(n) {
        this.er = n;
        return n
    },
    fq: function() {
        return this.cW
    },
    dK: function(n) {
        if (this.cW !== n) {
            this.cW = n;
            this.bA("IsTouched", _fce.e.c)
        }
        return n
    },
    bc: function() {
        return this.dF
    },
    bN: function(n) {
        if (this.dF !== n) {
            this.dF = n;
            this.by("IsSwiped")
        }
        return n
    },
    cT: function() {
        return this.dD
    },
    ey: function(n) {
        if (this.dD !== n) {
            this.dD = n;
            this.by("HasFocus")
        }
        return n
    },
    x: function() {
        return this.cF
    },
    bd: function(n) {
        if (this.cF !== n) {
            this.cF = n;
            this.dG();
            this.bX(this.ft)
        }
        return n
    },
    cB: function() {
        return this.cF || this.cW
    },
    ci: function() {
        return this.cF && !this.u
    },
    ca: function(n) {
        if (this.v !== n) {
            this.v = n;
            this.cj();
            this.bX(["IsItemHovered", "IsItemHoveredOrShowSelected", "IsItemHoveredAndShowSelected", "IsItemHoveredAndNotShowSelected", _fce.e.b])
        }
        return n
    },
    br: function() {
        return this.v || this.x()
    },
    bl: function() {
        return this.v && !this.x()
    },
    eu: function() {
        return this.v && !this.e()
    },
    ck: function(n) {
        if (this.c !== n) {
            this.c && this.c.rpcl("DataContext", this.eq);
            this.bJ();
            this.c = n;
            this.bY();
            this.c && this.c.apcl("DataContext", this.eq);
            this.bA(_fce.e.e, _fce.e.d)
        }
        return n
    },
    be: function() {
        return this.f || this
    },
    w: function() {
        return this.c ? this.c.V() : null
    },
    dI: function(n) {
        if (this.B) {
            var t = this.B.k();
            if (t) {
                t.A(n);
                return n
            }
        }
        this.A(n);
        return n
    },
    dx: function() {
        return !!this.B
    },
    f: null,
    he: function() {
        return !1
    },
    eB: function() {
        this.bv && this.dJ(!0)
    },
    bW: function() {
        this.dJ(!1)
    },
    fp: function() {
        this.ey(!1)
    },
    es: function() {
        this.t(!1);
        this.dJ(!1);
        this.dK(!1);
        this.bN(!1);
        this.cE(!1);
        this.ca(!1);
        this.ey(!1);
        this.bd(!1)
    },
    ev: function() {
        if (this.f) {
            this.f.bf("mouseenter", this.fm, _fce.e.a);
            this.f.bf("mouseleave", this.fn, _fce.e.a)
        }
    },
    et: function() {
        if (this.f) {
            this.f.bj("mouseenter", _fce.e.a);
            this.f.bj("mouseleave", _fce.e.a)
        }
    },
    fs: function(n) {},
    bz: function() {
        this.ck(null);
        _j.c.prototype.bz.call(this)
    },
    dw: !1,
    P: function() {
        if (this.dw) {
            var n = this;
            _j.m.a().c(_ff.c.b, "ListViewItem.OnFirstActivate", function() {
                n.bs()
            })
        } else this.bs()
    },
    H: function() {
        _j.c.prototype.H.call(this);
        this.B && (this.f = this.B.a("MainItemContainer"));
        !this.cl() && this.c && this.c.ct && this.O(_j.D.a());
        this.bZ && this.bZ.a(this)
    },
    cD: function(n) {
        _j.i.prototype.cD.call(this, n);
        this.ey(!0)
    },
    ee: function(n) {
        _j.i.prototype.cD.call(this, n);
        this.fp()
    },
    cj: function() {},
    bg: function() {},
    dG: function() {},
    cC: function() {},
    bY: function() {},
    bJ: function() {},
    bs: function() {
        _j.c.prototype.P.call(this);
        this.bn(96)
    },
    cm: function() {
        this.u ? this.bW() : this.eB()
    },
    ex: function(n) {
        this.ca(!0)
    },
    hh: function(n) {
        this.ca(!1)
    },
    hg: function(n, t) {
        this.by("ParentViewModel")
    }
};
_fce.k = function(n) {
    this.t = Function.createDelegate(this, this.bs);
    this.v = Function.createDelegate(this, this.bv);
    this.u = Function.createDelegate(this, this.bu);
    this.bc = -1;
    _fce.k.initializeBase(this, [n]);
    this.m = !1;
    this.n = !0;
    this.bo("pickerContainer");
    this.y("Picker");
    this.e = new _fm.e(new Array(0));
    this.bn(256);
    this.O(_j.D.a());
    var t = this;
    this.e.t = function() {
        t.e.I = t.bc;
        t.e.x = t.B.a("PickerButtonId").z.offsetWidth
    }
};
_fce.k.e = function(n, t, i, r) {
    _fce.k.d = n;
    _fce.k.b = t;
    _fce.k.c = i;
    _fce.k.a = r
};
_fce.k.prototype = {
    g: null,
    e: null,
    f: null,
    s: null,
    x: !1,
    r: null,
    o: null,
    n: !1,
    q: 0,
    p: null,
    E: null,
    k: !1,
    m: !1,
    dh: function() {
        return this.q
    },
    A: function(n) {
        if (this.q !== n) {
            this.q = n;
            this.by("AriaTabIndex")
        }
        return n
    },
    bD: function(n) {
        this.g && this.g.S() && this.g.S().M(n);
        return n
    },
    j: function(n) {
        this.e.D(n);
        return n
    },
    c: function(n) {
        if (n === this.f) return n;
        this.f && this.f.e(this.u);
        this.f = n;
        n && this.f.d(this.u);
        this.by("Options");
        this.bd();
        return n
    },
    i: function(n) {
        if (this.n === n) return n;
        this.n = n;
        this.S().p(!n);
        this.by("IsPickerEnabled");
        return n
    },
    b: function() {
        return this.s
    },
    d: function(n) {
        if (this.s === n) return n;
        this.w(n);
        this.be();
        this.by("DisplayedValue");
        return n
    },
    bi: function() {
        return this.e.q() && this.e.s ? this.e.s.t() : this.b()
    },
    a: function(n) {
        if (this.o === n) return n;
        this.o = n;
        this.by("PickerOptionTemplateId");
        return n
    },
    l: null,
    h: !1,
    co: function() {
        return _j.i.prototype.co.call(this)
    },
    Q: function(n) {
        if (this.co() !== n) {
            _j.i.prototype.Q.call(this, n);
            this.by("PickerButtonAriaLabelledBy")
        }
        return n
    },
    cq: function() {
        return this.p
    },
    T: function(n) {
        if (this.p !== n) {
            this.p = n;
            this.by("PickerButtonAriaLabelledBy")
        }
        return n
    },
    bl: function() {
        var n = "";
        _j.h.a(this.cq()) ? _j.h.a(this.co()) || (n = this.cl()) : n = this.cq();
        return n
    },
    P: function() {
        _j.c.prototype.P.call(this);
        this.e.apcl("SelectedItem", this.v);
        this.e.apcl("IsShown", this.t)
    },
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            this.g = this.B.a("PickerButtonId");
            if (this.g) {
                _j.h.a(this.g.S().h()) && this.g.S().f(_j.D.a());
                this.by("PickerButtonAriaLabelledBy")
            }
        }
    },
    cg: function(n) {
        if (n.a() === 40) {
            n.d();
            n.c();
            this.g && this.g.z.click()
        }
    },
    bd: function() {
        this.e.p.g();
        if (this.f) {
            for (var n = 0; n < this.f.b(); n++) {
                var t = new _fm.g(this.br(this.f.c(n)), null, new _j.g(this.bg(this.f.c(n), n), this.I()), !n, !0, null, "Picker.DualStateContextMenuItem", null);
                t.M(this.f.c(n));
                t.B(this.o);
                t.S = this.h;
                t.X = this.k;
                this.e.p.a(t)
            }
            if (this.f.b() > 0) {
                $a(this.b()) && this.w(this.f.c(0));
                this.be()
            }
        }
    },
    br: function(n) {
        return this.l ? this.l(n) : Object.getType(n) === String ? n : ""
    },
    bz: function() {
        this.c(null);
        this.e.rpcl("SelectedItem", this.v);
        this.e.rpcl("IsShown", this.t);
        _j.c.prototype.bz.call(this)
    },
    bu: function(n, t) {
        this.bd()
    },
    w: function(n) {
        this.s = n;
        this.bA("SelectedValue", "DisplayedValue")
    },
    be: function() {
        for (var i = !1, r = this.e.p.x.length, t = 0; t < r; t++) {
            var n = this.e.p.x[t];
            if (i) n.i(!1);
            else {
                n.i(n.t() === this.b());
                i = n.q();
                if (i) {
                    this.r = n;
                    this.e.n(n)
                }
            }
        }
    },
    bv: function(n, t) {
        this.by("DisplayedValue")
    },
    bs: function(n, t) {
        this.e.q() && this.e.n(this.r)
    },
    bg: function(n, t) {
        var i = this;
        return function() {
            for (var u = i.e.p.x.length, r = 0; r < u; r++) i.e.p.x[r].i(r === t);
            i.w(n);
            i.r = i.e.p.x[t]
        }
    },
    G: function() {
        _j.c.prototype.G.call(this);
        if (this.x) {
            var n = this;
            _j.m.a().a(this.I(), "Picker.OnActivate", function() {
                n.g.R()
            }, 100)
        }
    }
};
_fce.z = function(n, t, i, r, u) {
    this.cJ = Function.createDelegate(this, this.cS);
    this.c = -1;
    _fce.z.initializeBase(this, [n, t, i]);
    this.cc = r;
    this.cm = u.g();
    this.apcl("Options", this.cu);
    this.g = -1;
    this.y("PivotMenu");
    this.i("PivotMenu.DefaultOption")
};
_fce.z.prototype = {
    cm: !1,
    cc: null,
    ch: !1,
    bJ: !1,
    ci: !1,
    bN: !1,
    be: 0,
    cj: 0,
    cs: 0,
    d: null,
    r: 0,
    bd: null,
    ck: !1,
    g: 0,
    bP: !1,
    k: function() {
        return this.cm
    },
    j: function(n) {
        if (n !== this.d) {
            this.d = n;
            this.ck && (this.c = 0);
            this.by("Options")
        }
        return n
    },
    f: function(n) {
        var t = this.c;
        this.ct(n);
        this.c = n;
        this.g = this.w(n);
        t === -1 && this.p();
        this.by("SelectedOptionIndex");
        return n
    },
    bl: function() {
        return this.b
    },
    t: function() {
        return this.cc.u()
    },
    bg: function() {
        return !$a(this.d) && this.d.length > 1
    },
    E: function(n) {
        var t = _fce.bk.prototype.E.call(this, n);
        this.be = this.b.z.offsetWidth;
        this.cj = this.cR();
        this.cs = this.cQ();
        return t
    },
    bD: function(n) {
        var t;
        n *= this.k() ? -1 : 1;
        t = n < 0 ? n / this.be * this.cj : n / this.be * this.cs;
        _fce.bk.prototype.bD.call(this, t)
    },
    bi: function() {
        return new _fce.y(window.document.createElement("div"), this.m, this.t())
    },
    P: function() {
        _j.c.prototype.P.call(this);
        this.ck = !0
    },
    Y: function() {
        _j.i.prototype.Y.call(this);
        this.bT || this.p()
    },
    h: function() {
        return this.v.j() && this.l()
    },
    l: function() {
        return this.m.a() !== "Mouse"
    },
    w: function(n) {
        return this.l() && this.d ? 1 + _ff.p.b(n - this.c, this.d.length) : n
    },
    q: function(n) {
        return this.l() && this.d ? _ff.p.b(this.c + n - 1, this.d.length) : n
    },
    cp: function() {
        this.l() && this.bv(-this.cX(this.a[0].a), !1, null)
    },
    cv: function() {
        return !$a(this.d) && this.c !== -1
    },
    s: function() {
        this.bP = !1;
        var t = this.l() ? this.d.length * 2 : this.d.length;
        this.a = new Array(t);
        for (var n = 0; n < t; n++) {
            this.a[n] = this.bS(n);
            this.ch && n < t - 1 && this.a[n].r(!0)
        }
        this.cM();
        this.cO();
        this.cp();
        this.bc(!0)
    },
    H: function() {
        _fce.bk.prototype.H.call(this);
        if (this.B) {
            var n = this.B.a("OptionContainer");
            n.bf("focusout", this.cJ, "PivotMenu")
        }
    },
    cO: function() {
        var n = this.d.length;
        this.bd = new Array(n);
        for (var f = new Array(n), r = 0; r < n; r++) {
            var t = this.a[this.w(r)].a.cloneNode(!0);
            t.style.position = "absolute";
            t.style.visibility = "hidden";
            document.body.appendChild(t);
            f[r] = t
        }
        for (var i = 0; i < n; i++) this.bd[i] = f[i].offsetWidth;
        for (var u = 0; u < n; u++) document.body.removeChild(f[u])
    },
    cQ: function() {
        return this.bd[this.q(0)]
    },
    cR: function() {
        return this.bd[this.q(1)]
    },
    br: function(n, t) {
        if (t) {
            if (Math.abs(t) < 32) {
                this.cC(this.cf(this.w(this.c)), n);
                return
            }
            this.r = n;
            (n || this.k()) && (n !== 1 || !this.k()) ? this.f(_ff.p.b(this.c - 1, this.d.length)): this.f(_ff.p.b(this.c + 1, this.d.length))
        }
    },
    x: function(n) {
        if (this.a[n].f) {
            this.r = this.k() ? 1 : 0;
            this.f(this.q(n))
        }
    },
    db: function(n) {
        if (this.g >= 0 && this.g !== n) {
            var i = this.a[this.g].a;
            i.setAttribute("tabindex", "-1")
        }
        this.g = n;
        var t = this.a[n].a;
        t.setAttribute("tabindex", "0")
    },
    cB: function(n) {
        this.cM();
        this.cp()
    },
    ct: function(n) {
        if (this.bU && !$a(this.d)) {
            _j.s.g(n, -1, this.d.length - 1, "SelectedOptionIndex");
            _j.e.a(_ff.c.b, "PivotMenu.OnSelectedOptionIndexChanged. New option: {0}", n);
            var i = this.d;
            var t;
            var r;
            if (this.l()) {
                if (n !== _ff.p.b(this.c - 1, i.length) || (this.r !== 1 || this.k()) && (this.r || !this.k())) {
                    t = this.w(n);
                    for (var u = 1; u < t; u++) {
                        this.a[i.length + u].g(this.h());
                        this.a[i.length + u].o(!0);
                        this.a[i.length + u].p(!1)
                    }
                } else {
                    t = 0;
                    this.a[i.length].g(this.h());
                    this.a[i.length].o(!1);
                    this.a[i.length].p(!0)
                }
                r = 1
            } else {
                t = n;
                r = this.c
            }
            if (r >= 0) {
                this.a[r].g(this.h());
                this.a[r].h(!1)
            }
            if (n >= 0) {
                this.a[t].h(!0);
                this.a[t].g(this.h())
            }
            this.dl(t, r);
            if (this.l()) {
                this.c = n;
                this.g = this.w(n);
                this.cC(this.cf(t), this.r)
            }
        }
    },
    dd: function() {
        this.bQ(1)
    },
    da: function() {
        this.bQ(-1)
    },
    cZ: function() {
        this.bQ(1)
    },
    dj: function() {
        this.bQ(-1)
    },
    cf: function(n) {
        return this.k() ? this.be - this.a[n].a.offsetLeft - this.a[n].a.offsetWidth : this.a[n].a.offsetLeft
    },
    bQ: function(n) {
        this.bJ = !0;
        var t = this.l() ? _ff.p.b(this.g + n - 1, this.d.length) + 1 : _ff.p.b(this.g + n, this.d.length);
        if (this.l()) {
            this.bv(-this.cf(t), !1, null);
            this.cK(t)
        }
        this.bN = !0;
        this.a[t].a.focus();
        this.bN = !1
    },
    cK: function(n) {
        for (var t = 0; t < this.a.length; t++) {
            this.a[t].o(t < n + this.d.length);
            this.a[t].h(this.c === this.q(t))
        }
    },
    cS: function(n) {
        if (this.bJ && !this.bN) {
            this.dk();
            this.cp();
            this.g = this.w(this.c);
            this.cK(this.g);
            this.bJ = !1
        }
    },
    dk: function() {
        if (this.a)
            for (var t = 0; t < this.a.length; t++) {
                var n = this.a[t];
                if (n && n.a)
                    if (this.q(t) === this.c && n.f) {
                        n.a.setAttribute("tabindex", "0");
                        this.g = t
                    } else n.a.setAttribute("tabindex", "-1")
            }
    },
    dl: function(n, t) {
        if (t >= 0) {
            var r = this.cd(t);
            if (r) {
                r.d(0);
                r.g(0);
                r.c(-1)
            }
        }
        if (n >= 0) {
            var i = this.cd(n);
            if (i) {
                i.d(1);
                i.g(1);
                i.c(0)
            }
        }
    },
    cM: function() {
        for (var n = 0; n < this.a.length; n++) {
            this.a[n].g(!1);
            this.a[n].l(this.d[this.q(n)].b);
            this.a[n].s(this.d[this.q(n)].c);
            this.a[n].o(n <= this.d.length);
            this.a[n].p(n > this.d.length || !n);
            this.a[n].h(this.l() ? n === 1 : n === this.c);
            this.bP || this.cy(n);
            var t = this.cd(n);
            if (this.a[n].d) {
                t.d(1);
                t.g(1);
                t.c(0)
            } else {
                t.d(0);
                t.g(0);
                t.c(-1)
            }
        }
        this.bP = !0
    },
    cd: function(n) {
        return this.a ? new _j.D(this.a[n].a) : null
    }
};
_fce.bk = function(n, t, i) {
    this.cu = Function.createDelegate(this, this.dK);
    _fce.bk.initializeBase(this, [n]);
    this.m = t;
    this.v = i;
    this.apcl("OptionTemplateId", this.cu);
    this.S().a(29);
    this.S().k("Accessibility warning: unnamed pivot")
};
_fce.bk.prototype = {
    m: null,
    v: null,
    n: !1,
    u: null,
    bU: !1,
    e: !1,
    o: !1,
    b: null,
    ca: null,
    a: null,
    bs: 0,
    cz: 0,
    cb: 0,
    cA: 0,
    bZ: !1,
    bu: !0,
    i: function(n) {
        n !== this.u && (this.u = n);
        return n
    },
    bY: function(n) {
        if (n !== this.n) {
            this.n = n;
            this.by("OptionContainerTransitionEnabled");
            !n && this.b && this.b.bj(_fce.u.b(), "PivotMenuBase")
        }
        return n
    },
    cW: function() {
        return 0
    },
    bl: function() {
        this.ca || (this.ca = new _j.i(document.documentElement));
        return this.ca
    },
    bc: function(n) {
        this.bU = n;
        this.e = n;
        n || this.bY(!1);
        return n
    },
    I: function() {
        return _ff.c.b
    },
    bW: function() {
        return !0
    },
    E: function(n) {
        if (!this.e) return !1;
        this.cb = n.e();
        this.cA = this.bs;
        return !0
    },
    df: function(n) {
        var t = n.e() - this.cb;
        this.bD(t)
    },
    de: function(n) {
        var i = n.e() - this.cb;
        var t;
        t = i < 0 ? 0 : 1;
        this.br(t, i)
    },
    G: function() {
        _j.c.prototype.G.call(this);
        if (this.bW() || this.bu) {
            this.p();
            this.bu = !1
        }
    },
    M: function() {
        _j.c.prototype.M.call(this);
        this.bW() && this.bc(!1)
    },
    bD: function(n) {
        this.bv(this.cA + n, !1, null)
    },
    H: function() {
        _j.c.prototype.H.call(this);
        this.cV();
        this.b = this.B.a("OptionContainer");
        this.t() && this.dI();
        this.dL()
    },
    dd: function() {},
    da: function() {},
    cZ: function() {},
    dj: function() {},
    cX: function(n) {
        var t = n.cloneNode(!0);
        t.style.position = "absolute";
        t.style.visibility = "hidden";
        document.body.appendChild(t);
        var i = t.offsetWidth;
        document.body.removeChild(t);
        return i
    },
    dN: function() {
        this.o = !1;
        this.bU && (this.e = !0)
    },
    p: function() {
        if (!this.Z()) {
            if (!this.bW()) {
                this.bu = !0;
                this.bc(!1)
            }
            return
        }
        if (this.B && this.cv() && this.u) {
            this.cT();
            this.o = !1;
            this.b.z.innerHTML = "";
            this.dc();
            this.s()
        }
    },
    bz: function() {
        this.cT();
        this.cV();
        _j.c.prototype.bz.call(this)
    },
    bv: function(n, t, i) {
        var r = n - this.bs;
        this.k() && (r *= -1);
        var f = Math.abs(r) > this.cW();
        this.bY(!!i && this.h() && t);
        f ? this.bY(!!(this.n & r !== this.cz)) : this.bY(!!(this.n & n !== this.bs));
        this.cz = r;
        if (this.n) {
            this.o = !0;
            var u = this;
            this.b.bf(_fce.u.b(), function(n) {
                if (n.b() === u.b.z) {
                    u.b.bj(_fce.u.b(), "PivotMenuBase");
                    if (u.o) {
                        u.o = !1;
                        i()
                    }
                }
            }, "PivotMenuBase")
        }
        if (f && this.n) this.b.z.style[_fce.u.c()] = _fce.u.a(r, 0, !1);
        else {
            this.k() ? this.b.z.style.right = n + "px" : this.b.z.style.left = n + "px";
            this.b.z.style[_fce.u.c()] = "";
            this.bs = n
        }!this.o && i && i()
    },
    bS: function(n) {
        return new _fce.B
    },
    cy: function(n) {
        var i = this.a[n];
        var t = this.bi();
        t.ba(i);
        t.y(this.u);
        t.bm();
        i.a = t.b;
        this.b.z.appendChild(t.z);
        i.a.setAttribute("data-pi", n);
        i.j = t
    },
    cC: function(n, t) {
        this.e = !1;
        var i = this;
        var r = function() {
            i.cB(t);
            i.e = !0;
            i.dO()
        };
        this.bv(-n, !0, r)
    },
    dK: function(n, t) {
        this.p()
    },
    x: function(n) {},
    db: function(n) {},
    dc: function() {},
    cB: function(n) {},
    dO: function() {},
    dJ: function() {
        return !this.h() && !this.bZ && this.bg()
    },
    cT: function() {
        if (this.a)
            for (var n = 0, t = this.a.length; n < t; n++)
                if (this.a[n]) {
                    this.a[n].dispose();
                    this.a[n] = null
                }
        this.a = null
    },
    cV: function() {
        if (this.b) {
            this.b.bj(_fce.u.b(), "PivotMenuBase");
            this.b.bj("mousedown", "PivotMenuBase");
            this.b = null
        }
    },
    dL: function() {
        if (!this.bZ && this.bg() && this.h()) {
            var n = this;
            this.b.bf("mousedown", function(t) {
                n.v.e() && t.c();
                if (n.E(t)) {
                    n.bl().bf("mousemove", function(t) {
                        n.df(t);
                        t.c()
                    }, "PivotMenuBase");
                    n.bl().bf("mouseup", function(t) {
                        n.de(t);
                        n.bl().bj("mousemove", "PivotMenuBase");
                        n.bl().bj("mouseup", "PivotMenuBase")
                    }, "PivotMenuBase")
                }
            }, "PivotMenuBase")
        } else if (this.dJ()) {
            var u = new _fc.u;
            var e = this;
            u.b = new _j.g(function() {
                e.br(0, 32)
            }, this.I());
            var f = this;
            u.c = new _j.g(function() {
                f.br(1, 32)
            }, this.I());
            this.kG(u)
        }
        var t = this;
        this.b.bf("click", function(n) {
            if (t.e) {
                var i;
                var u, r;
                (r = t.cF(n.b(), u = {
                    val: i
                }), i = u.val, r) && t.x(i)
            }
        }, "PivotMenuBase");
        if (this.t()) {
            var i = this;
            this.b.bf("focusin", function(n) {
                if (i.e) {
                    var t;
                    var u, r;
                    (r = i.cF(n.b(), u = {
                        val: t
                    }), t = u.val, r) && i.db(t)
                }
            }, "PivotMenuBase");
            var r = this;
            this.b.bf("keydown", function(n) {
                if (r.e && !(n.g() || n.h() || n.l()) && (n.a() === 13 || n.a() === 32)) {
                    var t;
                    var u, i;
                    if (i = r.cF(n.b(), u = {
                            val: t
                        }), t = u.val, i) {
                        r.x(t);
                        n.c();
                        n.d()
                    }
                }
            }, "PivotMenuBase")
        }
    },
    cF: function(n, t) {
        var i = null;
        t.val = -1;
        var u = this;
        var r = _j.i.c(n, function(n) {
            i = n.getAttribute("data-pi");
            return !!i
        }, this.b.z);
        if (r) {
            t.val = Number.parseInvariant(i);
            return !0
        }
        return !1
    },
    dI: function() {
        var n = this.B.a("OptionContainer");
        n.A(-1);
        var s = this;
        var v = new _j.g(function() {
            s.e && s.dd()
        }, this.I());
        var o = this;
        var c = new _j.g(function() {
            o.e && o.da()
        }, this.I());
        var e = this;
        var l = new _j.g(function() {
            e.e && e.dj()
        }, this.I());
        var h = this;
        var a = new _j.g(function() {
            h.e && h.cZ()
        }, this.I());
        var f = new _fc.g;
        var t = new _fc.c;
        t.l = v;
        t.j("RIGHTARROW");
        t.m = !1;
        var u = new _fc.c;
        u.l = a;
        u.j("DOWNARROW");
        u.m = !1;
        var r = new _fc.c;
        r.l = c;
        r.j("LEFTARROW");
        r.m = !1;
        var i = new _fc.c;
        i.l = l;
        i.j("UPARROW");
        i.m = !1;
        f.a([t, u, r, i]);
        n.cw ? n.C(n.cw.concat(f)) : n.C([f])
    }
};
_fce.y = function(n, t, i) {
    _fce.y.initializeBase(this, [n, t, i])
};
_fce.y.prototype = {
    P: function() {
        _fce.bl.prototype.P.call(this);
        if (this.a.a() === "Mouse") {
            this.bn(4);
            this.cx = 200
        }
    },
    k: function() {
        return this.a.a() !== "Mouse"
    }
};
_fce.bl = function(n, t, i) {
    _fce.bl.initializeBase(this, [n]);
    this.a = t;
    this.i = i
};
_fce.bl.prototype = {
    a: null,
    i: !1,
    b: null,
    iO: function() {
        return !0
    },
    H: function() {
        _j.c.prototype.H.call(this);
        this.B && (this.b = this.B.a("Text").z)
    },
    P: function() {
        _j.c.prototype.P.call(this);
        this.z.style.display = "inline-block";
        if (this.i) {
            var n = new _j.D(this.b);
            n.x() || n.a(12);
            n.c(this.V().q);
            n.f(_j.D.a())
        }
    },
    bE: function() {
        this.bx();
        _j.c.prototype.bE.call(this)
    }
};
_fce.B = function() {
    _fce.B.initializeBase(this)
};
_fce.B.prototype = {
    f: !1,
    n: !1,
    e: !1,
    b: null,
    m: null,
    q: -1,
    i: !1,
    j: null,
    a: null,
    o: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.by("IsVisible")
        }
        return n
    },
    p: function(n) {
        if (this.n !== n) {
            this.n = n;
            this.by("IsAriaHidden")
        }
        return n
    },
    g: function(n) {
        if (this.e !== n) {
            this.e = n;
            this.by("IsTransitionEnabled")
        }
        return n
    },
    l: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.by("Text")
        }
        return n
    },
    s: function(n) {
        if (this.m !== n) {
            this.m = n;
            this.by("AriaLabel")
        }
        return n
    },
    r: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.by("AppendSeparator")
        }
        return n
    },
    bz: function() {
        this.a = null;
        if (this.j) {
            this.j.dispose();
            this.j = null
        }
        _j.S.prototype.bz.call(this)
    }
};
_fce.bg = function(n, t, i, r, u) {
    _fce.bg.initializeBase(this, [n, t, i, r, u])
};
_fce.bg.prototype = {
    bP: function() {
        return "[tabindex='-1']:not([disabled]):not([aria-disabled]):not([style*='display:none']):not([style*='display: none'])"
    },
    E: function(n) {
        var t = !1;
        _fce.l.prototype.E.call(this, n);
        if (this.e) {
            if (n.a() === 9 && this.k && this.k.b) this.k.a();
            else if (n.a() === _ff.j.a || n.a() === 38) {
                this.m();
                t = !0
            } else if (n.a() === _ff.j.b || n.a() === 40) {
                this.cB() === this.z ? this.l(!0) : this.l(!1);
                t = !0
            } else n.a() !== 13 && n.a() !== 32 && (t = !0);
            t && n.c()
        }
    },
    l: function(n) {
        var t = this.z.querySelectorAll(this.db());
        if (t.length > 0)
            if (n) t[0].focus();
            else {
                var i = this.b(t, this.cB());
                i + 1 < t.length && t[i + 1].focus()
            }
    },
    m: function() {
        var t = this.z.querySelectorAll(this.db());
        var n = this.b(t, this.cB());
        n > 0 && n < t.length && t[n - 1].focus()
    },
    b: function(n, t) {
        for (var i = 0, i = 0; i < n.length; i++)
            if (n[i] === t) break;
        return i
    }
};
_fce.l = function(n, t, i, r, u, f) {
    _fce.l.initializeBase(this, [n]);
    this.K(!0);
    this.s = i;
    this.r = t;
    this.cF = r;
    this.cS = u;
    this.bN = f || this.dF();
    var e = this;
    this.dk = new _j.w(this.du || (this.du = Function.createDelegate(this, this.bD)), this.I(), this, "IsShown", function() {
        return e.c()
    });
    this.j(this.dk);
    this.u = _fce.l.c++;
    this.f(!0);
    this.z.setAttribute("IsPopup", 1)
};
_fce.l.a = function(n, t, i, r, u) {
    var f = _j.x.a(n).createElement("div");
    n.appendChild(f);
    return new _fce.l(f, t, i, r, u)
};
_fce.l.i = function(n) {
    try {
        n.z.id = n.z.id
    } catch (t) {
        return !1
    }
    return !0
};
_fce.l.b = function(n) {
    return !!n && n.nodeType === 1 && n.getAttribute("IsPopup") === "1"
};
_fce.l.e = function(n) {
    if (!n || n.nodeType !== 1) return !1;
    var t = n.getAttribute("IsModal");
    return !!t && Boolean.parse(t)
};
_fce.l.g = function(n) {
    return n.h() && !n.l() && n.a() === 78 || n.h() && n.a() === 117
};
_fce.l.h = function(n) {
    try {
        if (n.src === "") return !0
    } catch (t) {
        if (_j.G.a().I && t.number === -2146828218) return !1;
        throw t;
    }
    return !0
};
_fce.l.f = function(n, t) {
    if (_j.h.a(n.src) || n.src.toLowerCase() === "about:blank") return !0;
    t.href = n.src;
    var f = t.hostname;
    var r = t.protocol;
    var i = t.port.toString();
    i = _fce.l.d(r, i);
    var u = _fce.l.d(window.location.protocol, window.location.port);
    return f === window.location.hostname && (i === u || i === "" && u === "80") && r === window.location.protocol
};
_fce.l.d = function(n, t) {
    t === "0" ? t = "" : t === "" && (t = n === "https:" ? "443" : "80");
    return t
};
_fce.l.prototype = {
    dv: null,
    dt: null,
    cy: null,
    cz: null,
    cu: null,
    br: null,
    dw: null,
    dx: null,
    cv: null,
    du: null,
    u: 0,
    bN: null,
    e: !0,
    cc: !1,
    bi: null,
    cm: !1,
    k: null,
    cb: null,
    dk: null,
    cf: !1,
    cZ: !1,
    q: null,
    cH: !1,
    bg: !1,
    bR: !1,
    dK: !0,
    en: !0,
    cW: null,
    cV: null,
    cX: !0,
    ca: null,
    dj: null,
    ch: null,
    cG: null,
    r: null,
    df: !1,
    ck: 0,
    cC: !1,
    p: null,
    cj: !0,
    bZ: !1,
    v: !1,
    s: null,
    i: 0,
    cF: null,
    cS: null,
    bJ: null,
    cT: !1,
    cJ: null,
    cA: !1,
    bd: function(n) {
        this.apcl("IsShown", n)
    },
    bQ: function(n) {
        this.rpcl("IsShown", n)
    },
    et: function(n) {
        this.apcl(_j.i.b.a, n)
    },
    d: function(n) {
        if (this.p !== n) {
            if (this.p) {
                if (this.eN) {
                    this.p.j(this);
                    this.p.fe(null)
                }
                this.p.dispose()
            }
            this.p = n;
            this.by("PopupLayout");
            if (!$a(this.p)) {
                this.p.fe(this);
                this.Z() && this.bs()
            }
        }
        return n
    },
    ci: function(n) {
        if (this.cX !== n) {
            this.cX = n;
            this.by("DismissOnParentFocus")
        }
        return n
    },
    c: function() {
        return !this.bp()
    },
    a: function(n) {
        this.df && (this.cC = n);
        if (this.bp() === n)
            if (n) try {
                this.z.style.opacity = "0";
                this.de(n)
            } finally {
                this.z.style.opacity = ""
            } else this.eF();
        this.ej();
        return n
    },
    g: function(n) {
        this.cf = n;
        this.z.setAttribute("IsModal", this.cf);
        return n
    },
    bW: !1,
    h: function(n) {
        if (this.cj !== n) {
            this.cj = n;
            this.by("SetFocusOnPreviousElement")
        }
        return n
    },
    f: function(n) {
        this.cm = n;
        this.cm ? this.bo(this.bN) : this.bt(this.bN);
        return n
    },
    x: function(n) {
        if (this.bN !== n) {
            this.cm && this.bt(this.bN);
            this.bN = n;
            this.cm && this.bo(this.bN)
        }
        return n
    },
    j: function(n) {
        if (this.k !== n) {
            this.k = n;
            this.by("CloseCommand")
        }
        return n
    },
    eI: function(n) {
        if (this.cb !== n) {
            this.cb = n;
            this.by("ConfirmCommand")
        }
        return n
    },
    dl: function(n) {
        if (this.ck !== n) {
            this.ck = n;
            this.dW()
        }
        return n
    },
    cd: function() {
        !this.cG && this.B && (this.cG = this.B.a("PopupContent"));
        return this.cG
    },
    dD: !1,
    bY: function() {
        return this.cF.a()
    },
    db: function() {
        return ":not([disabled])[tabindex='0'],a" + this.bP() + "," + "area" + this.bP() + "," + "href" + this.bP() + "," + "input" + this.bP() + "," + "button" + this.bP() + "," + "select" + this.bP() + "," + "textarea" + this.bP()
    },
    bP: function() {
        return ":not([disabled]):not([tabindex='-1']):not([style*='display:none']):not([style*='display: none'])"
    },
    t: function() {
        return ".PopupHandler" + this.u
    },
    ew: function() {
        return this.bR && this.r.b()
    },
    cB: function() {
        return _j.x.a(this.z).activeElement
    },
    I: function() {
        return _ff.c.k
    },
    da: function() {
        $a(this.q) && this.ei();
        return this.q
    },
    ex: function() {
        return this.cf || this.cZ
    },
    dJ: function(n) {
        if (this.df !== n) {
            this.df = n;
            var t = _j.x.d(document.body, "minWidth") || "0px";
            var i = parseInt(t.substr(0, t.length - 2), 10);
            document.body.style.overflow = n && _j.x.a(this.z).documentElement.clientWidth >= i ? "hidden" : ""
        }
        return n
    },
    dF: function() {
        return "popupShadow"
    },
    P: function() {
        _j.c.prototype.P.call(this);
        this.z.tabIndex = -1;
        this.z.style.position = "absolute";
        this.z.style.boxSizing = "border-box";
        this.eL("0px");
        if (this.e) {
            this.bi = new _fce.l.j(this);
            this.bi.h()
        }
        this.bn(4);
        this.ea()
    },
    Y: function() {
        _j.i.prototype.Y.call(this);
        this.ea()
    },
    G: function() {
        if (this.ex()) {
            this.da().bm();
            this.da().a(!0)
        }
        var t = new _fce.H(this, !0, document.activeElement);
        var i = _j.x.a(this.z);
        var n = this.z.parentNode === i.body;
        n || (this.z.style.opacity = "0");
        _j.c.prototype.G.call(this);
        if (!n) {
            this.eG();
            this.z.style.opacity = ""
        }
        this.s.a(_fce.H, t);
        this.dW();
        this.eR();
        this.bZ = !1;
        this.v && this.R()
    },
    M: function() {
        try {
            this.bZ = !!(this.bZ | this.dG())
        } catch (n) {
            _j.e.b(_ff.c.b, "Encountered error while accessing document.activeElement. Exception: {0}", n)
        }
        _j.c.prototype.M.call(this);
        this.de(!1);
        this.s.a(_fce.H, new _fce.H(this, !1, document.activeElement));
        if (this.q) {
            this.da().a(!1);
            this.q.bx()
        }
    },
    H: function() {
        _j.c.prototype.H.call(this);
        this.B && (this.cG = this.B.a("PopupContent"))
    },
    bz: function() {
        this.em();
        this.dk.dispose();
        this.a(!1);
        this.dZ();
        this.p && this.p.dispose();
        if (this.bi) {
            this.bi.dispose();
            this.bi = null
        }
        _j.c.prototype.bz.call(this)
    },
    de: function(n) {
        if (this.bp() === n) try {
            this.cT && _j.e.c(_j.A.e, "Popup.IntertnalSetIsShown - Visibility is being set to one value while responding to a property-change notification for changing to another value");
            this.K(!n);
            this.cT = !0;
            this.by("IsShown")
        } finally {
            this.cT = !1
        }
    },
    eR: function() {
        this.z.style.left = "";
        this.bs();
        this.z.style.visibility = "";
        this.ev();
        this.z.style.display = "block";
        this.dX(!0)
    },
    eF: function() {
        try {
            this.bZ = this.dG()
        } catch (n) {
            this.bZ = !1;
            _j.e.b(_ff.c.b, "Encountered error while accessing document.activeElement. Exception: {0}", n)
        }
        this.em();
        this.dX(!1)
    },
    ej: function() {},
    ev: function() {
        this.s.b(_ff.E, this.cv || (this.cv = Function.createDelegate(this, this.ed)));
        var t = _j.x.a(this.z);
        var n = _j.x.c(t);
        this.cJ = n;
        _j.k.b(this.cJ, "resize", this.dx || (this.dx = Function.createDelegate(this, this.eE)), this.t());
        this.bf("keydown", this.dw || (this.dw = Function.createDelegate(this, this.E)), this.t());
        this.eu()
    },
    em: function() {
        this.s.c(_ff.E, this.cv || (this.cv = Function.createDelegate(this, this.ed)));
        this.cJ && _j.k.c(this.cJ, "resize", this.t());
        this.bj("keydown", this.t());
        this.eS()
    },
    eu: function() {
        try {
            this.cA = !0;
            if (this.e) {
                this.bJ = [];
                this.bi && this.bi.f();
                var t = new _j.i(_j.x.a(this.z).body);
                t.bf("contextmenu", this.br || (this.br = Function.createDelegate(this, this.dc)), this.t());
                t.bf("mousedown", this.br || (this.br = Function.createDelegate(this, this.dc)), this.t());
                t.bf("keydown", this.cu || (this.cu = Function.createDelegate(this, this.ec)), this.t());
                Array.add(this.bJ, t);
                for (var r = this.eb(), i = 0; i < r.length; i++) {
                    var n = new _j.i(r[i]);
                    n.bf("contextmenu", this.br || (this.br = Function.createDelegate(this, this.dc)), this.t());
                    n.bf("mousedown", this.br || (this.br = Function.createDelegate(this, this.dc)), this.t());
                    n.bf("keydown", this.cu || (this.cu = Function.createDelegate(this, this.ec)), this.t());
                    Array.add(this.bJ, n)
                }
            }
        } finally {
            this.cA = !1
        }
    },
    eS: function() {
        this.bi && this.bi.e();
        if (this.bJ)
            for (var i = this.eb(), t = 0; t < this.bJ.length; t++) {
                var n = this.bJ[t];
                if (_fce.l.i(n) && (n.z === _j.x.a(this.z).body || Array.contains(i, n.z))) {
                    n.bj("contextmenu", this.t());
                    n.bj("mousedown", this.t());
                    n.bj("keydown", this.t())
                }
            }
        this.bJ = null
    },
    eE: function(n) {
        if (this.cc) {
            this.a(!1);
            return
        }
        this.p && this.p.s() && this.bs()
    },
    E: function(n) {
        this.e && this.eD(n);
        _fce.l.g(n) && n.c();
        n.a() !== 9 && n.a() !== 117 && n.d();
        n.a() === 9 && this.i === 2 && this.dm(n)
    },
    eD: function(n) {
        switch (n.a()) {
            case 27:
                this.bu(n);
                break;
            case 117:
                this.k && this.k.b && this.k.a();
                break
        }
    },
    bu: function(n) {
        this.k && this.k.b && this.k.a()
    },
    dd: function(n) {
        this.cb && this.cb.b && this.cb.a()
    },
    bs: function() {
        this.c() && this.p && this.p.e(this)
    },
    dE: function(n) {
        var t = n ? this.cW : this.cV;
        if (t) return this.r.a(t, this.z, n ? this.cz || (this.cz = Function.createDelegate(this, this.dI)) : this.cy || (this.cy = Function.createDelegate(this, this.dH)), !1);
        if (this.p) return this.p.p(this, n, n ? this.cz || (this.cz = Function.createDelegate(this, this.dI)) : this.cy || (this.cy = Function.createDelegate(this, this.dH)));
        throw Error.invalidOperation("No animation has been specified and no layout exists");
    },
    dI: function() {
        this.dJ(!1);
        this.dj && this.dj(this);
        this.de(this.cC)
    },
    dH: function() {
        this.dJ(!1);
        this.de(this.cC);
        this.ch && this.ch(this)
    },
    bD: function() {
        this.a(!1)
    },
    eH: function() {
        this.dZ();
        this.ei()
    },
    dm: function(n) {
        var t = this.ey();
        if (t.length > 0 && t[0] && t[t.length - 1])
            if (n.g() && this.cB() === t[0]) {
                t[t.length - 1].focus();
                n.c()
            } else if (!n.g() && this.cB() === t[t.length - 1]) {
            t[0].focus();
            n.c()
        }
    },
    ey: function() {
        for (var t = this.z.querySelectorAll(this.db()), i = [], n = 0; n < t.length; n++) _j.k.q(t[n]) && Array.add(i, t[n]);
        return i
    },
    ea: function() {
        if (!this.ca) {
            this.ca = new _j.g(this.dt || (this.dt = Function.createDelegate(this, this.bs)), this.I());
            this.by("ResizeCommand")
        }
    },
    eb: function() {
        for (var i = [], r = _j.x.a(this.z).getElementsByTagName("iframe"), u = document.createElement("a"), t = 0; t < r.length; t++) try {
            var n = r[t];
            _fce.l.h(n) && _fce.l.f(n, u) && n.contentDocument && n.contentDocument.body && Array.add(i, n.contentDocument.body)
        } catch (f) {}
        return i
    },
    dX: function(n) {
        this.cC = n;
        var t = null;
        this.ew() && (n && this.dK || !n && this.en) && (t = this.dE(n));
        if (t) {
            this.dJ(!0);
            this.s && this.s.a(_fce.V, new _fce.V);
            t.a()
        } else n ? this.dI() : this.dH()
    },
    dc: function(n) {
        this.cA || this.dY(n.b())
    },
    ec: function(n) {
        !this.cA && (n.a() === 9 || this.e && n.a() === 27) && this.dY(n.b())
    },
    eC: function(n) {
        n.c()
    },
    dY: function(n) {
        var i = this.z === n || this.z.contains(n) || this.el(n);
        if (!i && this.ek())
            if ((_j.G.a().O || _j.G.a().I) && !this.cj && this.dG()) {
                var t = this;
                _j.m.a().c(this.I(), "AsyncHidePopupOnExternalEvent", function() {
                    t.a(!1)
                })
            } else this.a(!1)
    },
    ek: function() {
        return !0
    },
    el: function(n) {
        if (!n || n.tagName && n.tagName.toLowerCase() === "body") return !1;
        if (_fce.l.b(n)) {
            if (_fce.l.e(n) && this.z.style.zIndex < n.style.zIndex) return !0;
            var t = n.getAttribute("ParentIds");
            return !!t && t.indexOf(String.format("({0})", this.u)) !== -1
        }
        return !this.cX && this.X && n === this.X.z ? !0 : this.el(n.parentNode)
    },
    eL: function(n) {
        try {
            this.z.style.outline !== n && (this.z.style.outline = n)
        } catch (i) {
            var t = i.number || -1;
            if (t !== -2147467259) throw i;
        }
    },
    dW: function() {
        var n = this.ck;
        if (n <= 0) {
            n = 2001;
            var i = this.z.parentNode.childNodes;
            if (i.length > 0) {
                var t = this.eB(i);
                isFinite(t) && (n = Math.max(2e3, t) + 1)
            }
        }
        this.z.style.zIndex = n
    },
    eG: function() {
        var n = _j.x.a(this.z);
        this.eQ();
        n.body.appendChild(this.z)
    },
    eQ: function() {
        var t = _j.i.c(this.z.parentNode, _fce.l.b);
        var n = "";
        !t || _j.h.a(n = t.getAttribute("ParentIds")) ? this.z.setAttribute("ParentIds", String.format("({0})", this.u)) : this.z.setAttribute("ParentIds", String.format("{0}({1})", n, this.u))
    },
    eB: function(n) {
        for (var r = Number.MIN_VALUE, t = 0; t < n.length; t++)
            if (n[t] !== this.z && _fce.l.b(n[t])) {
                var i = n[t].style.zIndex;
                !isNaN(i) && isFinite(i) && (r = Math.max(r, i))
            }
        return r
    },
    eJ: function() {
        if (this.q) {
            this.q.bt("clearModalBackground");
            this.q.bt("modalBackground");
            this.cf && !this.bW ? this.q.bo("modalBackground") : this.q.bo("clearModalBackground")
        }
    },
    ed: function(n) {
        this.i !== 1 && this.a(!1)
    },
    ei: function() {
        this.q = new _fce.l(_j.x.a(this.z).createElement("div"), this.r, this.s, this.cF, this.cS);
        this.ck > 0 && this.q.dl(this.ck - 1);
        this.q.e = !1;
        this.q.f(!1);
        this.q.bR = !1;
        this.q.h(!1);
        this.q.cH = !0;
        this.q.z.setAttribute("IsModal", this.cf);
        this.q.bf("mousedown", this.dv || (this.dv = Function.createDelegate(this, this.eC)), this.t());
        var n = new _fce.E(this.r, this.cS);
        n.a(0);
        n.b(0);
        n.f = !1;
        n.c = !1;
        this.q.d(n);
        this.eJ();
        this.Z() && this.q.bm()
    },
    dZ: function() {
        if (this.q) {
            this.q.bj("mousedown", this.t());
            this.da().dispose()
        }
    },
    dG: function() {
        return this.iZ() || this.z.contains(_j.x.a(this.z).activeElement)
    }
};
_fce.l.j = function(n) {
    this.d = Function.createDelegate(this, this.g);
    _fce.l.j.initializeBase(this);
    this.c = n
};
_fce.l.j.prototype = {
    c: null,
    a: null,
    b: null,
    h: function() {
        this.a = [];
        for (var n = this.c.z.parentNode; n && n !== document.body;) {
            var t = _j.x.b(n);
            this.i(t) && Array.add(this.a, t);
            n = n.parentNode
        }
    },
    i: function(n) {
        var i = n.e("overflow-y");
        var t = n.e("overflow-x");
        return i === "auto" || i === "scroll" || t === "auto" || t === "scroll"
    },
    f: function() {
        for (var t = 0; t < this.a.length; t++) this.a[t].b("scroll", this.d, this.c.t());
        var r = _j.G.a();
        if ((r.K || r.M) && this.a.length > 0) {
            this.b = new _j.q;
            for (var n = 0; n < this.a.length; n++) {
                var i = this.a[n];
                this.b.c(new Sys.UI.Point(i.a.scrollLeft, i.a.scrollTop))
            }
        }
    },
    e: function() {
        for (var n = 0; n < this.a.length; n++) this.a[n].c("scroll", this.c.t());
        this.b = null
    },
    D: function() {
        this.e();
        this.a = null
    },
    g: function(n) {
        var r = _j.G.a();
        if ((r.K || r.M) && this.b)
            for (var t = 0; t < this.a.length; t++) {
                var i = this.a[t];
                if (i.a === n.b()) {
                    if (i.a.scrollLeft === this.b.d[t].x && i.a.scrollTop === this.b.d[t].y) return;
                    break
                }
            }
        this.c.a(!1)
    }
};
_fce.w = function(n, t, i) {
    this.w = Function.createDelegate(this, this.bb);
    this.x = Function.createDelegate(this, this.bc);
    _fce.w.initializeBase(this, [n, i]);
    this.g = t;
    this.h = !i.g()
};
_fce.w.prototype = {
    g: null,
    h: !1,
    a: null,
    b: 0,
    l: 0,
    d: 0,
    P: 0,
    n: !1,
    k: !1,
    c: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.by("AnchorElement");
            this.a && this.g.a(_ff.v, new _ff.v)
        }
        return n
    },
    s: function() {
        return !0
    },
    A: function() {
        return !1
    },
    e: function(n) {
        if (!this.a) throw Error.invalidOperation("No anchor element was provided for PopupAnchorLayout.");
        if (this.n || this.k) {
            var i = (this.a.z.offsetWidth + this.P).toString() + "px";
            this.k ? n.z.style.minWidth = i : n.z.style.width = i
        }
        var t = this.q(n);
        t = this.M(n, t);
        this.bd(n, t, this.A())
    },
    j: function(n) {
        n.z.style.left = "";
        n.z.style.top = "";
        this.n ? n.z.style.width = "" : this.k && (n.z.style.minWidth = "")
    },
    p: function(n, t, i) {
        return null
    },
    q: function(n) {
        var f = _j.x.e(this.a.z);
        var t = _fce.ba.a(f.b, this.z, _j.x.a(n.z)) + this.B();
        var u = f.a + this.d;
        this.b !== 7 && this.b !== 8 && (u += this.a.z.offsetHeight);
        if (_j.G.a().Q)
            for (var r = _j.x.a(n.z).body.children, i = 0; i < r.length; i++) r[i].nodeType === 1 && r[i].tagName && r[i].tagName.toLowerCase() === "iframe" && r[i].id !== "manifestLoaderFrame" && (u -= r[i].offsetHeight);
        switch (this.o()) {
            case 0:
                break;
            case 1:
                t += this.a.z.offsetWidth / 2;
                break;
            case 2:
                t += (this.a.z.offsetWidth - n.z.offsetWidth) / 2;
                break;
            case 3:
                t += this.a.z.offsetWidth / 2 - n.z.offsetWidth;
                break;
            case 4:
                t += this.a.z.offsetWidth - n.z.offsetWidth;
                break;
            case 7:
                t += this.a.z.offsetWidth;
                this.m(t, n) !== t && (t -= n.z.offsetWidth + this.a.z.offsetWidth + 2 * this.B());
                break;
            case 8:
                t -= n.z.offsetWidth;
                this.m(t, n) !== t && (t += this.a.z.offsetWidth + n.z.offsetWidth - 2 * this.B());
                break;
            case 5:
                t -= n.z.offsetWidth / 2;
                break;
            case 6:
                t += this.a.z.offsetWidth - n.z.offsetWidth / 2;
                break;
            default:
                throw Error.invalidOperation("Popup doesnt support the aligment type passed as parameter: " + this.o());
        }
        return new Sys.UI.Point(Math.floor(t), Math.floor(u))
    },
    bd: function(n, t, i) {
        n.z.style.left = t.x.toString() + "px";
        i ? n.z.style.bottom = t.y.toString() + "px" : n.z.style.top = t.y.toString() + "px"
    },
    M: function(n, t) {
        var u = this.m(t.x, n);
        var i = t.y;
        if (this.Q(n, i) > 0) {
            var f = _j.x.e(this.a.z);
            var r = f.a - n.z.clientHeight - this.d;
            (this.o() === 8 || this.o() === 7) && (r += this.a.z.offsetHeight);
            i = this.y(r, n)
        }
        return new Sys.UI.Point(u, i)
    },
    o: function() {
        if (this.h) return this.b;
        else switch (this.b) {
            case 4:
                return 0;
            case 7:
                return 8;
            case 3:
                return 1;
            case 0:
                return 4;
            case 1:
                return 3;
            case 6:
                return 5;
            case 5:
                return 6;
            default:
                return this.b
        }
    },
    B: function() {
        return this.h ? this.l : -this.l
    },
    gg: function(n, t) {
        _j.bk.prototype.gg.call(this, n, t);
        if (this.X.Z()) {
            this.g.b(_ff.v, this.x);
            this.g.b(_ff.m, this.w)
        } else {
            this.g.c(_ff.v, this.x);
            this.g.c(_ff.m, this.w)
        }
    },
    dT: function() {
        _j.bk.prototype.dT.call(this);
        if (this.X) {
            if (this.X.Z()) {
                this.g.b(_ff.v, this.x);
                this.g.b(_ff.m, this.w)
            }
        } else {
            this.g.c(_ff.v, this.x);
            this.g.c(_ff.m, this.w)
        }
    },
    bz: function() {
        this.g.c(_ff.v, this.x);
        this.g.c(_ff.m, this.w);
        _j.bk.prototype.bz.call(this)
    },
    bc: function(n) {
        this.X && this.X.Z() && _j.i.isInstanceOfType(this.X) && this.e(this.X)
    },
    bb: function(n) {
        this.X && this.X.Z() && _fce.l.isInstanceOfType(this.X) && this.X.k.a()
    }
};
_fce.r = function(n, t) {
    _fce.r.initializeBase(this, [n, t])
};
_fce.r.prototype = {
    s: function() {
        return !0
    },
    e: function(n) {
        var t = _j.x.a(n.z);
        var r = Math.max(0, (this.C(t) - n.z.offsetWidth) / 2) + this.bf(t);
        var i = Math.max(0, (t.documentElement.clientHeight - n.z.offsetHeight) / 2) + this.t(t);
        n.z.style.left = r.toString() + "px";
        n.z.style.top = i.toString() + "px"
    },
    j: function(n) {
        n.z.style.top = "";
        n.z.style.left = ""
    },
    p: function(n, t, i) {
        return this.r.a(t ? "scaleUpIn" : "scaleDownOut", n.z, i, !1)
    }
};
_fce.I = function(n, t) {
    _fce.I.initializeBase(this, [n, t])
};
_fce.I.prototype = {
    c: 1,
    s: function() {
        return !1
    },
    b: function() {
        return this.c
    },
    a: function(n) {
        this.c = n;
        return n
    },
    e: function(n) {
        this.d(n, "0px");
        this.f(n)
    },
    j: function(n) {
        this.d(n, "");
        this.g(n)
    },
    p: function(n, t, i) {
        var r;
        switch (this.b()) {
            case 0:
                r = t ? "slideInT" : "slideOutT";
                break;
            case 2:
                r = t ? "taskInD" : "taskOutD";
                break;
            case 3:
                r = t ? "slideInL" : "slideOutL";
                break;
            case 1:
                r = t ? "slideInR" : "slideOutR";
                break;
            default:
                throw Error.invalidOperation("Invalid PopupDockDirection");
        }
        return this.r.a(r, n.z, i, !1)
    },
    f: function(n) {
        switch (this.b()) {
            case 0:
            case 2:
                n.z.style.width = "100%";
                n.z.style.left = "0px";
                n.z.style.right = "0px";
                break;
            case 1:
            case 3:
                n.z.style.height = "100%";
                n.z.style.top = "0px";
                n.z.style.bottom = "0px";
                break;
            default:
                throw Error.invalidOperation("Invalid PopupDockDirection");
        }
    },
    g: function(n) {
        switch (this.b()) {
            case 0:
            case 2:
                n.z.style.width = "";
                n.z.style.left = "";
                n.z.style.right = "";
                break;
            case 1:
            case 3:
                n.z.style.height = "";
                n.z.style.top = "";
                n.z.style.bottom = "";
                break;
            default:
                throw Error.invalidOperation("Invalid PopupDockDirection");
        }
    },
    d: function(n, t) {
        switch (this.b()) {
            case 0:
                n.z.style.top = t;
                break;
            case 1:
                n.z.style.right = t;
                break;
            case 2:
                n.z.style.bottom = t;
                break;
            case 3:
                n.z.style.left = t;
                break;
            default:
                throw Error.invalidOperation("Invalid PopupDockDirection");
        }
    }
};
_fce.W = function() {};
_fce.V = function() {};
_fce.U = function() {};
_fce.T = function() {};
_fce.E = function(n, t) {
    _fce.E.initializeBase(this, [n, t])
};
_fce.E.prototype = {
    i: 0,
    k: 0,
    f: !1,
    g: !1,
    c: !1,
    l: !1,
    h: !0,
    d: null,
    s: function() {
        return !1
    },
    a: function(n) {
        this.i = n;
        $a(this.d) || this.e(this.d);
        return n
    },
    b: function(n) {
        this.k = n;
        $a(this.d) || this.e(this.d);
        return n
    },
    e: function(n) {
        this.d = n;
        var i = this.i;
        (this.f && this.bg(n, this.i) > 0 || this.z && this.g) && (i = i - n.z.offsetWidth);
        var u = this.m(i, n).toString() + "px";
        this.l ? n.z.style.right = u : n.z.style.left = u;
        var t = this.k;
        this.c && this.Q(n, this.k) > 0 && (t = t - n.z.offsetHeight);
        this.h && (t = this.y(t, n));
        var r = t.toString() + "px";
        this.l ? n.z.style.bottom = r : n.z.style.top = r
    },
    j: function(n) {
        n.z.style.left = "";
        n.z.style.top = ""
    },
    p: function(n, t, i) {
        return null
    }
};
_fce.ba = function(n, t) {
    _fce.ba.initializeBase(this);
    this.z = t.g();
    this.r = n
};
_fce.ba.a = function(n, t, i) {
    var u = 0;
    if (t) {
        var r = i.documentElement.clientWidth - i.body.clientWidth;
        r < 0 && (u = -r)
    }
    return u + n
};
_fce.ba.prototype = {
    r: null,
    z: !1,
    Z: function() {
        return !!this.X && this.X.Z()
    },
    C: function(n) {
        var i = n.documentElement.clientWidth;
        var t = n.body.clientWidth;
        return this.z && t > i ? t : Math.min(i, t)
    },
    be: function(n) {
        return Math.max(n.documentElement.scrollHeight, n.body.scrollHeight)
    },
    m: function(n, t) {
        var u = _j.x.a(t.z);
        var f = _j.x.c(u);
        var r = f.pageXOffset;
        var e = r !== undefined ? r : u.body.scrollLeft;
        var i = Math.min(n, this.C(_j.x.a(t.z)) - t.z.offsetWidth + e);
        i = Math.max(i, 0);
        return i
    },
    y: function(n, t) {
        var r = _j.x.a(t.z);
        var u = n - this.t(r);
        var i = Math.min(n, _j.x.a(t.z).documentElement.clientHeight - t.z.offsetHeight);
        i = Math.max(u, 0);
        return i + this.t(r)
    },
    bg: function(n, t) {
        var i = t + n.z.offsetWidth - this.C(_j.x.a(n.z));
        return Math.max(0, i)
    },
    Q: function(n, t) {
        var i = _j.x.a(n.z);
        var r = t + n.z.offsetHeight - this.t(i) - i.documentElement.clientHeight;
        return Math.max(0, r)
    },
    t: function(n) {
        return Math.max(n.body.scrollTop, n.body.parentNode.scrollTop)
    },
    bf: function(n) {
        return Math.max(n.body.scrollLeft, n.body.parentNode.scrollLeft)
    }
};
_fce.bh = function(n, t) {
    _fce.bh.initializeBase(this, [n, t]);
    _fce.I.prototype.a.call(this, 1)
};
_fce.bh.prototype = {
    b: function() {
        return _fce.I.prototype.b.call(this)
    },
    a: function(n) {
        throw Error.invalidOperation("Cannot change the DockDirection of a PopupOverlayLayout");
        return n
    },
    p: function(n, t, i) {
        var u = this.r.a(t ? "overlayIn" : "overlayOut", n.z, i, !1);
        if (t) {
            var f = this.r.a("fadeIn", n.cd().z, null, !1);
            n.cd().K(!0);
            var r = new _fc.F;
            r.e(u, 0);
            var e = this;
            r.e(f, 130, function() {
                n.cd().K(!1)
            });
            return r
        } else return u
    }
};
_fce.g = function(n, t, i, r) {
    this.H = Function.createDelegate(this, this.bw);
    this.y = Function.createDelegate(this, this.bs);
    this.B = Function.createDelegate(this, this.bu);
    this.E = Function.createDelegate(this, this.bv);
    this.n = new _j.R;
    this.i = new _j.j;
    _fce.g.initializeBase(this, [n]);
    this.h = t;
    this.m = this.h.a() && _fce.g.a(this.h.s(), "OS") >= 6;
    this.bg = _j.h.d(this.h.s()) ? !1 : this.h.s().indexOf("QtCarBrowser") > -1;
    this.i = r;
    this.m && (this.k = new _fc.G(i.a()));
    this.bg && (this.w = new _fce.M)
};
_fce.g.a = function(n, t) {
    var i = n.indexOf(t) + t.length + 1;
    var u = n.indexOf(" ", i);
    var r = n.substr(i, u - i);
    return parseFloat(r.replace("_", "."))
};
_fce.g.prototype = {
    m: !1,
    h: null,
    x: !1,
    b: !1,
    s: 0,
    t: 0,
    r: null,
    o: !1,
    j: !1,
    p: 90,
    k: null,
    u: null,
    bc: !1,
    bg: !1,
    w: null,
    d: function(n) {
        this.n.b(n);
        this.bi()
    },
    e: function(n) {
        this.n.c(n);
        this.bi()
    },
    l: function() {
        return this.b && !this.bd() ? this.s : this.z.scrollLeft
    },
    g: function(n) {
        this.z.scrollLeft = n;
        this.b && (this.s = n);
        return n
    },
    c: function() {
        return this.b && !this.bd() ? this.t : this.z.scrollTop
    },
    a: function(n) {
        this.z.scrollTop = n;
        this.b && (this.t = n);
        return n
    },
    v: function(n) {
        this.bc = n;
        this.bc && !this.u && (this.u = new _fce.S(this.h));
        return n
    },
    bP: function(n) {
        this.k && this.k.t(n);
        return n
    },
    be: function() {
        return !!this.k && this.k.b
    },
    bl: function() {
        return this.h.l() && !this.h.e()
    },
    bd: function() {
        return !this.bp() && this.Z() && this.z.style.visibility !== "none"
    },
    f: function(n) {
        this.bN(n, 0)
    },
    bN: function(n, t) {
        this.a(this.z.scrollHeight * (n / 100) + t)
    },
    q: function(n) {
        if (!n) throw Error.argument("child", "Child element to scroll to cannot be null or undefined.");
        this.g(n.offsetLeft - this.z.offsetLeft);
        this.a(n.offsetTop - this.z.offsetTop)
    },
    bJ: function(n) {
        var t = _fce.Y.a(this.z, n);
        switch (t) {
            case 0:
            case 4:
            case 2:
                break;
            case 3:
            case 1:
                this.a(n.offsetTop + n.offsetHeight);
                break
        }
    },
    br: function(n) {
        var t = _fce.Y.a(this.z, n);
        switch (t) {
            case 0:
            case 3:
            case 1:
                break;
            case 4:
            case 2:
                this.a(n.offsetTop);
                break
        }
    },
    G: function() {
        _j.i.prototype.G.call(this);
        if (this.b) {
            this.g(this.s);
            this.a(this.t)
        }
        if (this.bl() && !this.m && this.j) {
            var n = this;
            _j.m.a().a(this.I(), "NativeScrollRegion.OnActivate", function() {
                var i = n.l();
                var t = n.c();
                n.bD();
                i > 0 && n.g(i);
                t > 0 && n.a(t)
            }, this.p)
        }
        if (this.h.b()) {
            this.i.b(_ff.B, this.E);
            this.i.b(_ff.A, this.B)
        }
    },
    bD: function() {
        this.z.style.display = "none";
        var n = this.z.offsetWidth;
        this.z.style.display = "";
        return n
    },
    M: function() {
        _j.i.prototype.M.call(this);
        if (this.h.b()) {
            this.i.c(_ff.B, this.E);
            this.i.c(_ff.A, this.B)
        }
    },
    P: function() {
        _j.i.prototype.P.call(this);
        if (!this.m && this.bl()) {
            this.bo("customScrollBar");
            this.x && this.bo("customScrollBarLight")
        }
        this.bo("scrollContainer");
        if (this.m) {
            this.bo("nativeScrollInertia");
            this.i.b(_ff.m, this.y)
        }
        this.d(this.H)
    },
    bz: function() {
        this.e(this.H);
        this.o && this.bj("scroll", "NativeScrollRegion");
        this.m && this.i.c(_ff.m, this.y);
        _j.i.prototype.bz.call(this)
    },
    bC: function() {
        var n = [];
        this.k && Array.add(n, this.k);
        this.w && Array.add(n, this.w);
        this.u && Array.add(n, this.u);
        return n.length > 0 ? n : _j.i.prototype.bC.call(this)
    },
    bi: function() {
        if (!this.o && (this.n.d() || this.b)) {
            var n = this;
            this.bf("scroll", function() {
                if (n.b && n.bd()) {
                    n.s = n.z.scrollLeft;
                    n.t = n.z.scrollTop
                }
                n.n.d() && n.n.a()
            }, "NativeScrollRegion");
            this.o = !0
        } else if (this.o && !this.n.d() && !this.b) {
            this.bj("scroll", "NativeScrollRegion");
            this.o = !1
        }
    },
    bv: function(n) {
        this.r = new Sys.UI.Point(this.l(), this.c())
    },
    bu: function(n) {
        if (this.r) {
            this.g(this.r.x);
            this.a(this.r.y)
        }
    },
    bs: function(n) {
        _j.k.a(this.z, "-webkit-overflow-scrolling", "auto");
        var t = this;
        _j.m.a().a(this.I(), "NativeScrollRegion.HandleOrientationChangedEvent", function() {
            _j.k.a(t.z, "-webkit-overflow-scrolling", "")
        }, 10)
    },
    bw: function() {
        this.i.a(_ff.x, new _ff.x("NativeScrollRegion scroll"))
    }
};
_fce.Y = function() {};
_fce.Y.a = function(n, t) {
    var i = n.scrollTop;
    var e = n.offsetHeight;
    var f = i + e;
    var o = t.offsetHeight;
    var r = t.offsetTop;
    var u = r + o;
    return i > u ? 2 : f < r ? 1 : i > r && i <= u ? 4 : i < r && f <= u ? 3 : 0
};
_fce.bm = function() {
    _fce.bm.initializeBase(this)
};
_fce.bm.prototype = {
    d: !1,
    c: null,
    h: function(n) {
        if (this.d !== n) {
            this.d = n;
            this.by("IsSelected")
        }
        return n
    },
    k: function(n) {
        if (this.c !== n) {
            this.c = n;
            this.by("Data")
        }
        return n
    }
};
_fce.d = function(n) {
    this.h = -1;
    _fce.d.initializeBase(this, [n]);
    this.d = []
};
_fce.d.prototype = {
    v: null,
    d: null,
    q: !1,
    e: 0,
    m: 1e3,
    p: !1,
    r: !1,
    n: !1,
    I: function() {
        return _ff.c.l
    },
    bD: function() {
        _j.e.a(this.I(), "SetViewportOffset");
        if (this.n) {
            var r = this.z.offsetTop;
            _j.e.a(this.I(), "SetViewportOffset-> stackPanelTop: " + r);
            for (var n = 0, u = this.d.length; n < u; ++n) {
                var t = this.d[n];
                var f = t.z;
                var i = f.offsetTop - r;
                t.eK(_fce.d.b, i);
                _j.e.a(this.I(), "SetViewportOffset-> setting StackPanel.ViewportOffsetProperty: {0}", i)
            }
        }
    },
    k: function(n, t) {
        _j.bd.prototype.k.call(this, n, t);
        switch (t.c) {
            case 0:
                this.bc(t.d, t.a);
                break;
            case 2:
                this.bi(t.d, t.b);
                break;
            case 1:
                this.bi(t.d, t.a);
                this.bc(t.e, t.a);
                break;
            case 3:
                for (var r, f = t.d, i = 0, u = t.a.length; i < u; i++) {
                    r = f + i;
                    if (r < this.e) {
                        this.w(r);
                        this.l(t.a[i], r)
                    }
                }
                break;
            case 4:
                this.bw();
                break
        }
    },
    bw: function() {
        for (var n = this.d.length - 1; n >= 0; n--) this.w(n);
        this.h = -1;
        this.e = 0;
        this.bv(this.a, 0)
    },
    w: function(n) {
        _j.s.g(n, 0, this.d.length, "index");
        var t = this.d[n];
        t.z.parentNode && t.z.parentNode.removeChild(t.z);
        Array.removeAt(this.d, n);
        if (this.r && !this.n) {
            _j.e.a(this.I(), "StackPanel->RemoveItemAt calling CheckUIObjectVisible to update child being removed");
            var u = this.z.clientHeight;
            var r = this.z.scrollTop;
            var i = _j.x.e(this.z).a;
            this.be(t, u, r, i)
        }
    },
    bd: function(n, t) {
        if (n.z.parentNode && n.z.parentNode.nodeType !== 11) throw Error.argument("item", _j.h.c("Can't add already added control to panel. TemplateId of duplicate object: {0}", _j.c.isInstanceOfType(n) ? n.bw : "<untemplated UIObject>"));
        t === this.d.length ? this.z.appendChild(n.z) : this.z.insertBefore(n.z, this.d[t].z)
    },
    l: function(n, t) {
        this.bd(n, t);
        Array.insert(this.d, t, n);
        !this.q && this.Z() && n.bm();
        if (this.r && !this.n) {
            var u = this.z.clientHeight;
            var r = this.z.scrollTop;
            var i = _j.x.e(this.z).a;
            this.be(n, u, r, i)
        }
    },
    bc: function(n, t) {
        for (var i = 0, u = t.length; i < u; i++) {
            var r = n + i;
            r <= this.h && this.h++;
            if (r <= this.e && r - this.h <= this.m) {
                this.e++;
                this.l(t[i], n + i)
            } else this.bg()
        }
        this.n && this.bD()
    },
    bz: function() {
        this.r && this.bj("scroll", ".StackPanel");
        _j.bd.prototype.bz.call(this)
    },
    bi: function(n, t) {
        for (var i = t.length - 1; i >= 0; i--) {
            var r = n + i;
            r <= this.h && this.h--;
            if (r < this.e) {
                this.e--;
                this.w(n + i)
            }
        }
        if (!this.a.b()) {
            this.h = -1;
            this.e = 0
        }
    },
    bv: function(n, t) {
        for (var u = n.b(), i = 0; i < u; i++) {
            i <= this.h && this.h++;
            if (i < this.e) this.e++;
            else if (this.e - this.h <= this.m) {
                var r = n.c(i);
                this.l(r, i + t)
            }
        }
    },
    be: function(n, t, i, r) {
        var o = n.z;
        var s = i + t;
        var u = _j.x.e(this.z).a - r;
        var e = o.offsetHeight;
        var f = u + e;
        if (i > f || s < u) {
            n.eK(_fce.d.a, !1);
            return
        }
        n.eK(_fce.d.a, !0)
    },
    bg: function() {
        this.h = this.e;
        if (!this.p) {
            _j.e.a(this.I(), "EnqueueBackgroundActivate: adding to queue - lastActivatedIndex: {0} ", this.e);
            this.p = !0;
            _j.m.a().c(this.I(), "StackPanel.EnqueueBackgroundActivate", this.v || (this.v = Function.createDelegate(this, this.bu)))
        }
    },
    bu: function() {
        _j.e.a(this.I(), "BackgroundActivate");
        if (!this.bM) {
            this.p = !1;
            for (var n = this.a.b(); this.e < n && this.e - this.h <= this.m; this.e++) this.l(this.a.c(this.e), this.e);
            if (this.e - this.h <= this.m) {
                this.h = 1e4;
                this.e = 10001
            } else {
                this.h = this.e - 1;
                this.bg()
            }
        }
    }
};
_fce.j = function(n) {
    this.bY = Function.createDelegate(this, this.cC);
    _fce.j.initializeBase(this, [n]);
    this.y("RadioButton");
    this.S().a(15);
    this.S().f(_j.D.a());
    this.A(-1);
    this.l(_fm.b.a(_fm.a.U, "ms-bcl-nta-b"));
    this.x(_fm.b.a(_fm.a.U, "ms-bcl-nl-b"));
    this.m(_fm.b.a(_fm.a.U, "ms-bcl-nsa-b"));
    this.r(_fm.b.a(_fm.a.U, "ms-bcl-nta-b ms-fcl-nl-b"));
    this.cG(_fm.b.a(_fm.a.z, "ms-bcl-nta-b ms-fcl-ns-b"));
    this.cH(_fm.b.a(_fm.a.z, "ms-bcl-nl-b ms-fcl-nta-b"));
    this.cJ(_fm.b.a(_fm.a.z, "ms-bcl-nd-b ms-fcl-nd-b"));
    this.cO(_fm.b.a(_fm.a.z, "ms-bcl-nta-b ms-fcl-ns-b"))
};
_fce.j.prototype = {
    a: null,
    E: !1,
    p: null,
    bN: null,
    u: null,
    bR: null,
    bc: null,
    bW: null,
    q: null,
    bP: null,
    s: null,
    b: null,
    cB: null,
    cG: function(n) {
        if (this.p !== n) {
            this.p = n;
            this.w()
        }
        return n
    },
    cJ: function(n) {
        if (this.u !== n) {
            this.u = n;
            this.w()
        }
        return n
    },
    cO: function(n) {
        if (this.bc !== n) {
            this.bc = n;
            this.w()
        }
        return n
    },
    cH: function(n) {
        if (this.q !== n) {
            this.q = n;
            this.w()
        }
        return n
    },
    cF: function() {
        var n = _j.G.a();
        return n.O || n.K
    },
    cN: function(n) {
        if (this.E !== n) {
            this.E = n;
            this.by("IsChecked");
            this.bS()
        }
        return n
    },
    cs: function(n) {
        this.cN(n)
    },
    bi: function() {
        if (this.Z()) {
            if (this.E)
                if (!this.t() && this.bP) {
                    this.bg(this.bP);
                    return
                } else if (this.bd && this.bW) {
                this.bg(this.bW);
                return
            } else if (this.bG() && this.bR) {
                this.bg(this.bR);
                return
            } else if (this.bN) {
                this.bg(this.bN);
                return
            }
            _fc.b.prototype.bi.call(this)
        }
    },
    w: function() {
        if (this.Z()) {
            if (this.E)
                if (!this.t() && this.q) {
                    this.br(this.q);
                    return
                } else if (this.bd && this.bc) {
                this.br(this.bc);
                return
            } else if (this.bG() && this.u) {
                this.br(this.u);
                return
            } else if (this.p) {
                this.br(this.p);
                return
            }
            _fc.b.prototype.w.call(this)
        }
    },
    H: function() {
        _fc.b.prototype.H.call(this);
        if ($a(this.B)) {
            this.b = null;
            return
        }
        this.b = this.B.a("RadioButton");
        this.cB = this.B.a("RadioButtonText");
        this.b.Q(this.be);
        this.b.bo("radioButtonSelector");
        this.t() || this.b.z.setAttribute("disabled", "true")
    },
    P: function() {
        _fc.b.prototype.P.call(this);
        if ($a(this.a)) throw Error.argumentNull("Data", "RadioButton must have a Data value provided.");
        this.cd(this.X);
        this.bn(512);
        this.bb(new _j.g(this.bY, _ff.c.b))
    },
    eO: function(n) {
        _j.i.prototype.eO.call(this, n);
        this.s.b(this.a)
    },
    bC: function() {
        var r = new _fc.g;
        var t = new _fc.c;
        t.j("ENTER");
        var f = this;
        t.l = new _j.g(function() {
            f.t() && f.eO(null)
        }, this.I());
        var n = new _fc.c;
        n.j("SPACE");
        var u = this;
        n.l = new _j.g(function() {
            u.t() && u.eO(null)
        }, this.I());
        r.a([t, n]);
        var i = new _j.q;
        i.h(_j.i.prototype.bC.call(this));
        i.c(r);
        return i.i()
    },
    cd: function(n) {
        if ($a(n)) throw Error.invalidOperation("RadioButton must be a descendant of a RadioButtonGroup");
        else if (_fce.i.isInstanceOfType(n)) {
            this.s = n;
            this.b.z.setAttribute("name", this.s.f.toString());
            this.s.k(this)
        } else this.cd(n.X)
    },
    cC: function() {
        this.t() && this.eO(null)
    }
};
_fce.i = function(n) {
    _fce.i.initializeBase(this, [n]);
    this.f = _fce.i.a++;
    this.c = [];
    this.D(31)
};
_fce.i.prototype = {
    f: 0,
    c: null,
    g: null,
    d: null,
    e: null,
    a: function() {
        return this.d ? this.d.a : null
    },
    b: function(n) {
        if (this.a() !== n) {
            var i;
            this.S().o(null);
            if ($a(n)) this.d = null;
            else if ($a(i = this.h(n)))
                if (this.eN) throw Error.argumentOutOfRange("value", n, "RadioButtonGroup doesn't contain a RadioButton associated with the provided value.");
                else this.e = n;
            else {
                for (var t = 0; t < this.c.length; t++) {
                    this.c[t].cs(!1);
                    this.c[t].S().d(3)
                }
                this.S().o(i.S().h());
                i.S().d(1);
                this.j(i)
            }
            this.by("SelectedOptionData");
            this.g && this.eN && this.g(n)
        }
        return n
    },
    k: function(n) {
        var t = this.h(n.a);
        if (t && t !== n) throw Error.invalidOperation("Cannot add a radio button to the group with the same data parameter as another radio button in the group");
        Array.add(this.c, n);
        if (n.a === this.e) {
            this.j(n);
            this.e = null;
            this.S().o(n.S().h());
            n.S().d(1)
        }
    },
    bC: function() {
        var i = new _fc.g;
        var t = new _fc.c;
        t.j("DOWNARROW");
        var u = this;
        t.l = new _j.g(function() {
            u.i(!0)
        }, this.I());
        var n = new _fc.c;
        n.j("UPARROW");
        var r = this;
        n.l = new _j.g(function() {
            r.i(!1)
        }, this.I());
        i.a([t, n]);
        return [i]
    },
    h: function(n) {
        for (var r = this.c.length, t = 0; t < r; t++) {
            var i = this.c[t];
            if (i.a === n) return i
        }
        return null
    },
    i: function(n) {
        var u = document.activeElement.getAttribute("class");
        if (u && u.indexOf("radioButtonSelector") !== -1 && this.c.length > 0) {
            for (var i = -1, r = 0; r < this.c.length && i === -1; r++)
                if (this.c[r] === this.d) {
                    i = r;
                    break
                }
            var f = n ? Math.max(0, i - 1) : Math.min(i + 1, this.c.length - 1);
            var t = this.c[f];
            if (t && t.bK() && t.bK().b) {
                t.bK().a();
                t.b && t.b.R()
            }
        }
    },
    j: function(n) {
        this.d = n;
        this.d.cs(!0)
    }
};
_fce.q = function(n) {
    _fce.q.initializeBase(this, [n]);
    this.bo("textarea")
};
_fce.q.b = function(n) {
    var t = n.instance;
    if (n.newValue) {
        t.z.setAttribute("readonly", "true");
        t.bo("ms-fcl-ns");
        t.bo("ms-bcl-nl");
        t.bo("ms-bgc-w")
    } else {
        t.z.removeAttribute("readonly");
        t.bt("ms-fcl-ns");
        t.bt("ms-bcl-nl");
        t.bt("ms-bgc-w")
    }
};
_fce.q.prototype = {
    r: function(n) {
        this.eK(_fce.q.a, n);
        this.S().s(n);
        return n
    },
    cg: function(n) {},
    nF: function(n) {}
};
_fce.bb = function(n) {
    _fce.bb.initializeBase(this, [n]);
    this.c = !1;
    this.b = !1;
    this.d = 0;
    this.a = 0;
    this.bn(1)
};
_fce.bb.prototype = {
    c: !1,
    b: !1,
    d: 0,
    a: 0,
    bI: function(n) {
        var t = this.z;
        if (this.b) {
            t.pause();
            this.b = !1;
            this.d += Date.now() - this.a
        } else {
            t.play();
            this.b = !0;
            this.a = Date.now()
        }
    },
    e: function(n) {
        n ? this.z.setAttribute("poster", n) : this.z.removeAttribute("poster");
        return n
    },
    g: function(n) {
        n ? this.z.setAttribute("src", n) : this.z.removeAttribute("src");
        return n
    },
    f: function(n) {
        n !== this.c && (n ? this.z.setAttribute("controls", "") : this.z.removeAttribute("controls"));
        this.c = n;
        return n
    }
};
_fce.b = function() {};
_fce.b.$$cctor = function() {
    _fce.b._I()
};
_fce.b.cs = function() {
    var n = window.document.createElement("DIV");
    n.innerHTML = "<div> <div class='ball _fce_3 ms-bgc-tp'></div> <div class='ball _fce_3 ms-bgc-tp'></div> <div class='ball _fce_3 ms-bgc-tp'></div> <div class='ball _fce_3 ms-bgc-tp'></div> <div class='ball _fce_3 ms-bgc-tp'></div> <div class='ball _fce_3 ms-bgc-tp'></div> <div class='ball _fce_3 ms-bgc-tp'></div> <div class='ball _fce_3 ms-bgc-tp'></div> </div><div> <div> <span class='_fce_7'></span> <span class='_fce_5'></span> <div dir=\"ltr\" class='spinnerContainer'> <div class='spinner'></div> </div> <span class='_fce_7'></span> </div> </div><div>  <div class='_fce_b'></div>   </div><div><div class='_fce_c'></div></div><div>  <div class='_fce_a ms-bg-color-themeLighterAlt'></div> </div><div> <span class='image'></span> <span class='label o365buttonLabel'></span> </div><div> <div class='_fce_e'>   <button autoid=\"_fce_0\" type='button' class='_fce_i ms-fwt-r ms-fcl-np'></button> <div class='_fce_w'></div> </div> </div><div> <div class='_fce_e ms-bgc-tlr-h'> <button autoid=\"_fce_1\" type='button' class='_fce_h _fce_f ms-fwt-r ms-fcl-np'></button> <span class='_fce_k _fce_f ms-fwt-r ms-fcl-nt ms-font-m'></span>  <button autoid=\"_fce_2\" type='button' class='_fce_l _fce_f commandAdjustPosition'></button> </div> </div><div>  <span class='_fce_t'></span> <span class='_fce_m'></span> <span class='ms-fcl-ns _fce_r'></span> </div><div>  <div></div> </div><div> <div class='_fce_e'>  <button autoid=\"_fce_3\" type='button' class='_fce_i ms-fwt-r ms-fcl-np'></button>  <div class='_fce_s ms-bg-color-white ms-border-color-themeLighter'></div> <div class='_fce_w'></div> </div> </div><div>  <div class='_fce_e'> <button autoid=\"_fce_4\" type='button' class='_fce_i ms-fwt-r ms-fcl-np'></button>  <div class='_fce_s ms-bg-color-white ms-border-color-themeLighter'></div> </div> </div><div>   <div></div> </div><div><div></div></div><div> <div class='_fce_y'></div> </div><div> <div></div> </div><div> <span class='_fce_H'></span> <span class='_fce_C ms-fwt-sb ms-fcl-tp ms-font-xs'></span> </div><div> <div class='_fce_G'></div> </div><div> <button autoid=\"_fce_6\" type='button'></button> </div><div> <span class='_fce_A'></span> <div class='_fce_F'> <div class='_fce_G'></div> </div> </div><div> <button autoid=\"_fce_7\" type='button'></button> </div><div> <div class='_fce_G _fce_I'></div> <span class='_fce_K ms-fcl-ns'></span> </div><div> <button autoid=\"_fce_8\" type='button'></button> </div><div> <a></a> </div><div> <span></span>  <span autoid=\"_fce_9\"></span> </div><div> <span class='ms-font-s ms-font-color-themePrimary'></span> </div><div> <div> <div class='_fce_N _fce_x'> <div role='menu' autoid=\"_fce_5\" class='_fce_y'></div> </div> </div>           </div><div>  <div class='_fce_T'></div> </div><div> <span></span> <input class='ms-font-s ms-font-weight-regular ms-font-color-neutralPrimary _fce_U'/> </div><div> <i class='ms-Icon ms-Icon--x'></i> </div><div> <span></span> </div><div> <button autoid=\"_fce_e\" type='button' class='_fce_W'></button> </div><div>  <div> <div class='_fce_41'> <button type='button'></button> </div> <div autoid=\"_fce_a\" class='_fce_Z ms-bgc-w'>  <div class='_fce_51'> <span autoid=\"_fce_b\" class='_fce_51 ms-fwt-sl ms-fcl-np ms-font-xl _fce_X'></span> <div class='_fce_Y'></div> </div>  <div class='_fce_21'></div> <div autoid=\"_fce_c\" class='_fce_01 ms-font-s ms-fwt-r ms-fcl-np'></div>  <div class='_fce_V'> <a class='_fce_31 _fce_11 ms-font-m ms-fcl-np'></a> <div autoid=\"_fce_d\" class='listview'></div> </div> </div> </div>  </div><div> <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"> <tbody> <tr> </tr> </tbody> </table> </div><div>  <div class='_fce_71'> <span class='ms-fcl-nt ms-fwt-sl ms-font-s'></span> <div autoid=\"_fce_g\" class='ms-fwt-sl ms-font-s _fce_i1'></div> </div> <div class='_fce_81'> <span class='_fce_g1'></span> <span class='_fce_g1'></span> </div> </div><div> <div> <div class='_fce_j1 ms-font-s ms-fwt-r ms-bgc-w'> <div class='_fce_h1 _fce_91'> <div autoid=\"_fce_h\" class='_fce_k1'></div> </div> </div> </div> </div><div>  <span class='_fce_c1'></span> <div class='_fce_b1'> <div autoid=\"_fce_j\"></div> </div> </div><div> <button autoid=\"_fce_i\" type='button' class='_fce_e1 ms-font-s'></button> </div><div> <button autoid=\"_fce_f\" type='button' class='_fce_61'></button>   </div><div> <span autoid=\"_fce_k\" class='_fce_l1 ms-font-m ms-fwt-sl ms-fcl-np ms-fcl-b-h'></span> </div><div> <div class='_fce_r1'> <div class='_fce_q1'>  </div> </div> </div><div> <div tabindex=\"0\" class='_fce_x1'> <span autoid=\"_fce_l\" class='_fce_v1 ms-icon-font-circle ms-bgc-w'></span> <span class='_fce_u1 ms-fwt-sl ms-font-s'></span> </div> </div>";
    _j.i.a().appendChild(n);
    return n
};
_fce.b.cA = function(n) {
    return n.e
};
_fce.b.bR = function(n) {
    return n.s
};
_fce.b.bO = function(n) {
    return n.l
};
_fce.b.bp = function(n) {
    return n.i
};
_fce.b.cz = function(n) {
    return n.p()
};
_fce.b.bP = function(n) {
    return n.r
};
_fce.b.fb = function(n) {
    return n.bp()
};
_fce.b.cy = function(n) {
    return n.g
};
_fce.b.cx = function(n) {
    return n.u
};
_fce.b.em = function(n) {
    return n.b
};
_fce.b.et = function(n) {
    return n.bt
};
_fce.b.er = function(n) {
    return n.z
};
_fce.b.cD = function(n) {
    return n.j
};
_fce.b.ep = function(n) {
    return n.B
};
_fce.b.eq = function(n) {
    return n.M
};
_fce.b.en = function(n) {
    return n.Z
};
_fce.b.es = function(n) {
    return n.s
};
_fce.b.cE = function(n) {
    return n.l
};
_fce.b.eo = function(n) {
    return n.bb
};
_fce.b.cB = function(n) {
    return n.f()
};
_fce.b.cC = function(n) {
    return n.b
};
_fce.b.c = function(n) {
    return n.X
};
_fce.b.cF = function(n) {
    return _fce.C.isInstanceOfType(n) ? n.ck() : null
};
_fce.b.cG = function(n) {
    return _fce.C.isInstanceOfType(n) ? n.cy() : null
};
_fce.b.s = function(n) {
    return n.v()
};
_fce.b.ba = function(n) {
    return n.dK()
};
_fce.b.bm = function(n) {
    return n.be
};
_fce.b.ec = function(n) {
    return n.i
};
_fce.b.eh = function(n) {
    return n.C
};
_fce.b.ei = function(n) {
    return n.D
};
_fce.b.eg = function(n) {
    return n.w
};
_fce.b.bg = function(n) {
    return n.l
};
_fce.b.ef = function(n) {
    return n.s
};
_fce.b.ed = function(n) {
    return n.v
};
_fce.b.ee = function(n) {
    return n.q
};
_fce.b.bf = function(n) {
    return n.g()
};
_fce.b.ej = function(n) {
    return n.U()
};
_fce.b.A = function(n) {
    return n.h()
};
_fce.b.cm = function(n) {
    return n.z
};
_fce.b.bi = function(n) {
    return n.m
};
_fce.b.bK = function(n) {
    return n.p
};
_fce.b.E = function(n) {
    return n.k
};
_fce.b.bL = function(n) {
    return n.x
};
_fce.b.eM = function(n) {
    return n.Y
};
_fce.b.bh = function(n) {
    return n.a
};
_fce.b.m = function(n) {
    return n.q()
};
_fce.b.bq = function(n) {
    return n.k()
};
_fce.b.ek = function(n) {
    return n.q
};
_fce.b.el = function(n) {
    return n.r
};
_fce.b.dV = function(n) {
    return n.q
};
_fce.b.cf = function(n) {
    return n.bj()
};
_fce.b.eb = function(n) {
    return n.s
};
_fce.b.ea = function(n) {
    return n.N
};
_fce.b.dY = function(n) {
    return n.r
};
_fce.b.dZ = function(n) {
    return n.D
};
_fce.b.cj = function(n) {
    return n.m
};
_fce.b.bM = function(n) {
    return n.V()
};
_fce.b.ci = function(n) {
    return n.V
};
_fce.b.dW = function(n) {
    return n.v
};
_fce.b.bD = function(n) {
    return n.a
};
_fce.b.dX = function(n) {
    return n.n
};
_fce.b.ch = function(n) {
    return n.A
};
_fce.b.bZ = function(n) {
    return n.c()
};
_fce.b.cg = function(n) {
    return n.bq()
};
_fce.b.ce = function(n) {
    return n.E
};
_fce.b.cl = function(n) {
    return n.a
};
_fce.b.bF = function(n) {
    return n.p
};
_fce.b.bG = function(n) {
    return n.s
};
_fce.b.bz = function(n) {
    return n.E()
};
_fce.b.bt = function(n) {
    return _fce.o.isInstanceOfType(n) ? n.m : null
};
_fce.b.bx = function(n) {
    return _fce.o.isInstanceOfType(n) ? n.o : null
};
_fce.b.bw = function(n) {
    return _fce.o.isInstanceOfType(n) ? n.n : null
};
_fce.b.bv = function(n) {
    return _fce.o.isInstanceOfType(n) ? n.bc : null
};
_fce.b.bu = function(n) {
    return _fce.o.isInstanceOfType(n) ? n.w : null
};
_fce.b.bJ = function(n) {
    return n.b()
};
_fce.b.ey = function(n) {
    return n.i
};
_fce.b.ez = function(n) {
    return n.j
};
_fce.b.eC = function(n) {
    return n.bb
};
_fce.b.bE = function(n) {
    return n.k
};
_fce.b.ex = function(n) {
    return n.i
};
_fce.b.ew = function(n) {
    return n.j
};
_fce.b.C = function(n) {
    return n.t()
};
_fce.b.D = function(n) {
    return _fm.c.isInstanceOfType(n) ? n.w() : null
};
_fce.b.B = function(n) {
    return n.o()
};
_fce.b.u = function(n) {
    return n.j
};
_fce.b.d = function(n) {
    return n.c()
};
_fce.b.M = function(n) {
    return n.r
};
_fce.b.N = function(n) {
    return n.u
};
_fce.b.eA = function(n) {
    return n.M
};
_fce.b.Q = function(n) {
    return n.B
};
_fce.b.O = function(n) {
    return n.z
};
_fce.b.P = function(n) {
    return n.A
};
_fce.b.S = function(n) {
    return n.C
};
_fce.b.T = function(n) {
    return n.u
};
_fce.b.t = function(n) {
    return n.s
};
_fce.b.o = function(n) {
    return n.r
};
_fce.b.bj = function(n) {
    return n.E()
};
_fce.b.cn = function(n) {
    return n.q()
};
_fce.b.cW = function(n) {
    return n.q
};
_fce.b.eG = function(n) {
    return n.O()
};
_fce.b.eF = function(n) {
    return n.C
};
_fce.b.eT = function(n) {
    return n.W
};
_fce.b.eQ = function(n) {
    return n.N
};
_fce.b.eS = function(n) {
    return n.R
};
_fce.b.dy = function(n) {
    return n.ds
};
_fce.b.eR = function(n) {
    return n.i
};
_fce.b.eL = function(n) {
    return n.i
};
_fce.b.eK = function(n) {
    return n.m
};
_fce.b.eJ = function(n) {
    return n.q
};
_fce.b.co = function(n) {
    return n.H
};
_fce.b.R = function(n) {
    return n.N
};
_fce.b.eD = function(n) {
    return n.H
};
_fce.b.bT = function(n) {
    return n.be()
};
_fce.b.eB = function(n) {
    return n.T
};
_fce.b.eI = function(n) {
    return n.c()
};
_fce.b.eV = function(n) {
    return n.i
};
_fce.b.bC = function(n) {
    return _fce.D.isInstanceOfType(n) ? n.a : null
};
_fce.b.eW = function(n) {
    return n.m
};
_fce.b.dF = function(n) {
    return _fce.D.isInstanceOfType(n) ? n.bJ : null
};
_fce.b.bB = function(n) {
    return _fce.D.isInstanceOfType(n) ? n.cH : null
};
_fce.b.i = function(n) {
    return n.X
};
_fce.b.dM = function(n) {
    return n.b
};
_fce.b.dG = function(n) {
    return _fce.D.isInstanceOfType(n) ? n.cO : null
};
_fce.b.dU = function(n) {
    return n.e
};
_fce.b.dQ = function(n) {
    return n.f
};
_fce.b.dP = function(n) {
    return n.b
};
_fce.b.dS = function(n) {
    return n.d
};
_fce.b.dR = function(n) {
    return n.g
};
_fce.b.dT = function(n) {
    return n.i
};
_fce.b.bV = function(n) {
    return n.dS
};
_fce.b.be = function(n) {
    return _fce.l.isInstanceOfType(n) ? n.k : null
};
_fce.b.cS = function(n) {
    return n.dN
};
_fce.b.bU = function(n) {
    return n.ct
};
_fce.b.fa = function(n) {
    return n.cq()
};
_fce.b.cU = function(n) {
    return n.bU
};
_fce.b.bW = function(n) {
    return n.cR
};
_fce.b.cT = function(n) {
    return n.dO()
};
_fce.b.eZ = function(n) {
    return n.kL()
};
_fce.b.cV = function(n) {
    return n.cQ
};
_fce.b.by = function(n) {
    return n.cO
};
_fce.b.cR = function(n) {
    return n.cp
};
_fce.b.di = function(n) {
    return _fce.k.isInstanceOfType(n) ? n.E : null
};
_fce.b.dh = function(n) {
    return _fce.k.isInstanceOfType(n) ? n.bi() : null
};
_fce.b.dk = function(n) {
    return _fce.k.isInstanceOfType(n) ? n.o : null
};
_fce.b.L = function(n) {
    return _fce.k.isInstanceOfType(n) ? n.e : null
};
_fce.b.eO = function(n) {
    return n.S
};
_fce.b.eE = function(n) {
    return n.b()
};
_fce.b.eN = function(n) {
    return n.X
};
_fce.b.dv = function(n) {
    return _fce.l.isInstanceOfType(n) ? n.u : null
};
_fce.b.eY = function(n) {
    return n.b
};
_fce.b.cp = function(n) {
    return _j.i.isInstanceOfType(n) ? n.bK() : null
};
_fce.b.bY = function(n) {
    return _fce.k.isInstanceOfType(n) ? n.n : null
};
_fce.b.dg = function(n) {
    return n.dh()
};
_fce.b.dj = function(n) {
    return n.bl()
};
_fce.b.dl = function(n) {
    return n.m
};
_fce.b.du = function(n) {
    return n.b
};
_fce.b.dq = function(n) {
    return n.m
};
_fce.b.dr = function(n) {
    return n.n
};
_fce.b.dx = function(n) {
    return n.d
};
_fce.b.dt = function(n) {
    return n.f
};
_fce.b.ds = function(n) {
    return n.e
};
_fce.b.dm = function(n) {
    return n.ch
};
_fce.b.dn = function(n) {
    return n.ci
};
_fce.b.dp = function(n) {
    return n.n
};
_fce.b.dw = function(n) {
    return n.cF()
};
_fce.b.ct = function(n) {
    return n.t()
};
_fce.b.e = function(n, t) {
    n.K(t)
};
_fce.b.j = function(n, t) {
    n.a(t)
};
_fce.b.k = function(n, t) {
    n.a(t)
};
_fce.b.K = function(n, t) {
    n.bl(t)
};
_fce.b.bk = function(n, t) {
    n.Q(t)
};
_fce.b.eu = function(n, t) {
    n.z = t
};
_fce.b.cL = function(n, t) {
    n.bu(t)
};
_fce.b.cJ = function(n, t) {
    n.cV(t)
};
_fce.b.cK = function(n, t) {
    n.dq(t)
};
_fce.b.cH = function(n, t) {
    n.d = t
};
_fce.b.ev = function(n, t) {
    n.s = t
};
_fce.b.cM = function(n, t) {
    n.dr(t)
};
_fce.b.cI = function(n, t) {
    n.s = t
};
_fce.b.de = function(n, t) {
    n.mW(t)
};
_fce.b.f = function(n, t) {
    n.l = t
};
_fce.b.h = function(n, t) {
    n.y(t)
};
_fce.b.n = function(n, t) {
    n.Q(t)
};
_fce.b.bb = function(n, t) {
    n.l(t)
};
_fce.b.bo = function(n, t) {
    n.x(t)
};
_fce.b.bc = function(n, t) {
    n.k(t)
};
_fce.b.r = function(n, t) {
    n.bk(t)
};
_fce.b.l = function(n, t) {
    n.bb(t)
};
_fce.b.cw = function(n, t) {
    n.cS(t)
};
_fce.b.bn = function(n, t) {
    n.bQ(t)
};
_fce.b.x = function(n, t) {
    n.o(t)
};
_fce.b.bs = function(n, t) {
    n.c(t)
};
_fce.b.bH = function(n, t) {
    n.m(t)
};
_fce.b.br = function(n, t) {
    n.j(t)
};
_fce.b.bS = function(n, t) {
    n.q(t)
};
_fce.b.p = function(n, t) {
    n.ba(t)
};
_fce.b.cN = function(n, t) {
    n.m(t)
};
_fce.b.ck = function(n, t) {
    n.W(t)
};
_fce.b.ca = function(n, t) {
    n.a(t)
};
_fce.b.cc = function(n, t) {
    n.b = t
};
_fce.b.cd = function(n, t) {
    n.d = t
};
_fce.b.cb = function(n, t) {
    n.c(t)
};
_fce.b.bI = function(n, t) {
    n.n(t)
};
_fce.b.bA = function(n, t) {
    n.bg(t)
};
_fce.b.cQ = function(n, t) {
    n.c(t)
};
_fce.b.bd = function(n, t) {
    n.bR(t)
};
_fce.b.y = function(n, t) {
    n.u(t)
};
_fce.b.z = function(n, t) {
    n.b = t
};
_fce.b.cP = function(n, t) {
    n.dF(t)
};
_fce.b.I = function(n, t) {
    n.cF(t)
};
_fce.b.G = function(n, t) {
    n.cB(t)
};
_fce.b.H = function(n, t) {
    n.cC(t)
};
_fce.b.J = function(n, t) {
    n.cG(t)
};
_fce.b.v = function(n, t) {
    n.O(t)
};
_fce.b.F = function(n, t) {
    n.N(t)
};
_fce.b.eH = function(n, t) {
    n.i(t)
};
_fce.b.cX = function(n, t) {
    n.bJ(t)
};
_fce.b.cY = function(n, t) {
    n.a = t
};
_fce.b.dz = function(n, t) {
    n.bR(t)
};
_fce.b.dE = function(n, t) {
    n.eD(t)
};
_fce.b.dD = function(n, t) {
    n.eC(t)
};
_fce.b.eU = function(n, t) {
    n.bk(t)
};
_fce.b.dA = function(n, t) {
    n.ej(t)
};
_fce.b.dC = function(n, t) {
    n.eB(t)
};
_fce.b.dB = function(n, t) {
    n.ek(t)
};
_fce.b.db = function(n, t) {
    n.cH(t)
};
_fce.b.dd = function(n, t) {
    n.cO(t)
};
_fce.b.dc = function(n, t) {
    n.cJ(t)
};
_fce.b.bN = function(n, t) {
    n.bH(t)
};
_fce.b.bX = function(n, t) {
    n.cT = t
};
_fce.b.da = function(n, t) {
    n.b(t)
};
_fce.b.eX = function(n, t) {
    n.C(t)
};
_fce.b.dH = function(n, t) {
    n.da(t)
};
_fce.b.dI = function(n, t) {
    n.cJ = t
};
_fce.b.dJ = function(n, t) {
    n.q = t
};
_fce.b.eP = function(n, t) {
    n.n(t)
};
_fce.b.dO = function(n, t) {
    n.c(t)
};
_fce.b.dN = function(n, t) {
    n.n(t)
};
_fce.b.cu = function(n, t) {
    n.d(t)
};
_fce.b.bQ = function(n, t) {
    n.c(t)
};
_fce.b.dL = function(n, t) {
    n.a(t)
};
_fce.b.dK = function(n, t) {
    n.b(t)
};
_fce.b.df = function(n, t) {
    n.dw = t
};
_fce.b.cZ = function(n, t) {
    n.j(t)
};
_fce.b.cv = function(n, t) {
    n.m(t)
};
_fce.b.fd = function(n, t) {
    n.A(t)
};
_fce.b.fc = function(n, t) {
    n.T(t)
};
_fce.b.cO = function(n, t) {
    n.t = t
};
_fce.b.g = function() {
    _fce.b.V || (_fce.b.V = new _fc.k);
    return _fce.b.V
};
_fce.b.bl = function() {
    _fce.b.X || (_fce.b.X = new _fc.q);
    return _fce.b.X
};
_fce.b.q = function() {
    _fce.b.Z || (_fce.b.Z = new _fc.l);
    return _fce.b.Z
};
_fce.b.w = function() {
    _fce.b.Y || (_fce.b.Y = new _fc.m);
    return _fce.b.Y
};
_fce.b.cr = function() {
    _fce.b.W || (_fce.b.W = new _fce.Z);
    return _fce.b.W
};
_fce.b.cq = function() {
    _fce.b.U || (_fce.b.U = new _fc.x);
    return _fce.b.U
};
_fce.b._I = function() {
    var ui = "ActivityIndicatorInline._tid1";
    new _j.d(ui, function() {
        var n = _fce.b.b.childNodes[0].cloneNode(!0);
        return new _j.a(n, [])
    }, "", Object, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _fce.b.a);
    var ht = "ActivityIndicatorInline";
    new _j.d(ht, function() {
        _fce.b.a[ht] === undefined && (_fce.b.a[ht] = [
            [
                [-1, 5, ["VerticalAlignText"],
                    [_fce.b.cA], null, "_fce_9", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["ShowTextFirst"],
                    [_fce.b.bR], null, "IsHidden", null, _fce.b.e, 1, _fce.b.g(), null, !0
                ],
                [-1, 1, ["BusyText"],
                    [_fce.b.bO], null, "Text", null, _fce.b.j, 1, null, null, null
                ],
                [-1, 5, ["SpinnerSize"],
                    [_fce.b.bp], null, "_fce_8", null, null, 1, _fce.b.bl(), 0, null
                ]
            ],
            [
                [-1, 1, ["SpinnerImage"],
                    [_fce.b.cz], null, "Id", null, _fce.b.k, 1, null, null, null
                ],
                [-1, 1, ["SupportsAnimation"],
                    [_fce.b.bP], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ]
            ],
            [
                [-1, 5, ["SpinnerSize"],
                    [_fce.b.bp], null, "smallSpinner", null, null, 1, _fce.b.bl(), 0, null
                ],
                [-1, 5, ["SupportsAnimation"],
                    [_fce.b.bP], null, "_fce_6", null, null, 1, _fce.b.g(), null, null
                ]
            ],
            [
                [-1, 5, ["IsHidden"],
                    [_fce.b.fb], null, "spinnerAnimation", null, null, 1, _fce.b.g(), null, null
                ],
                [-1, 5, ["IsWhite"],
                    [_fce.b.cy], null, "_fce_4", null, null, 1, null, null, null
                ],
                [-1, 5, ["IsGray"],
                    [_fce.b.cx], null, "_fce_2", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["ShowTextFirst"],
                    [_fce.b.bR], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 1, ["BusyText"],
                    [_fce.b.bO], null, "Text", null, _fce.b.j, 1, null, null, null
                ],
                [-1, 5, ["SpinnerSize"],
                    [_fce.b.bp], null, "_fce_8", null, null, 1, _fce.b.bl(), 0, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[1].cloneNode(!0);
        var f = new _fc.a(_j.a.a(n, [0, 3]));
        var t = new _j.c(_j.a.a(n, [0, 2, 0]));
        t.y("ActivityIndicatorInline._tid1");
        var e = new _j.i(_j.a.a(n, [0, 2]));
        var u = new _fc.d(_j.a.a(n, [0, 1]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var i = new _fc.a(_j.a.a(n, [0, 0]));
        var r = new _j.i(n.children[0]);
        return new _j.a(n, [r, i, u, e, t, f])
    }, "", Object, _fce.h, function(n) {
        return new _fce.h(n, _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a))
    }, !1, !1, !1, 0, _fce.b.a);
    var st = "CommandingBar._tid2";
    new _j.d(st, function() {
        _fce.b.a[st] === undefined && (_fce.b.a[st] = [null]);
        var t = _fce.b.b.childNodes[2].cloneNode(!0);
        var n = new _fce.d(t.children[0]);
        return new _j.a(t, [n]).l({
            ListPanel: n
        })
    }, "", _fm.k, _fce.C, function(n) {
        return new _fce.C(n, _j.b.Instance.a(_ff.a))
    }, !1, !0, !1, 0, _fce.b.a);
    var vt = "CommandingBar";
    new _j.d(vt, function() {
        _fce.b.a[vt] === undefined && (_fce.b.a[vt] = [
            [
                [-1, 1, ["CommandBarItemsFinishedRenderingCommand"],
                    [_fce.b.cB], null, "FinishedRenderingCommand", null, _fce.b.de, 0, null, null, null
                ],
                [-1, 0, ["CommandingBarItems"],
                    [_fce.b.em], null, "DataSource", null, _fce.b.K, 1, null, null, null
                ],
                [-1, 0, ["ToolbarLabelForAT"],
                    [_fce.b.et], null, "AriaLabel", null, _fce.b.bk, 1, null, null, null
                ],
                [-1, 0, ["NumberOfItemsToShow"],
                    [_fce.b.er], _fce.b.eu, "NumberOfItemsToShow", _fce.b.cD, _fce.b.cL, 2, null, null, 0
                ],
                [-1, 0, ["MarginLeft"],
                    [_fce.b.ep], null, "MarginLeft", null, _fce.b.cJ, 1, null, null, 0
                ],
                [-1, 0, ["MarginRight"],
                    [_fce.b.eq], null, "MarginRight", null, _fce.b.cK, 1, null, null, 0
                ],
                [-1, 0, ["FitItemsCommand"],
                    [_fce.b.en], null, "FitItemsCommand", null, _fce.b.cH, 1, null, null, null
                ],
                [-1, 0, ["ReflowCommand"],
                    [_fce.b.es], _fce.b.ev, "ReflowCommand", _fce.b.cE, _fce.b.cM, 2, null, null, null
                ],
                [-1, 0, ["IsRefreshWidthNeeded"],
                    [_fce.b.eo], null, "IsRefreshWidthNeeded", null, _fce.b.cI, 1, null, null, !1
                ],
                [-1, 5, ["IsCultureRightToLeft"],
                    [_fce.b.cC], null, "_fce_d", null, null, 1, null, null, null
                ]
            ]
        ]);
        var r = _fce.b.b.childNodes[4].cloneNode(!0);
        var n = new _fce.C(r.children[0], _j.b.Instance.a(_ff.a));
        n.D(52);
        n.ci(47);
        n.bc(function() {
            var t = _fce.b.b.childNodes[3].cloneNode(!0).childNodes[0];
            return new _fce.x(t)
        });
        var u = new _fc.g;
        var t = new _fc.c;
        t.W(_j.f.a(["ContextParent", "SelectNextCommandingBarItemCommand"], [_fce.b.c, _fce.b.cF], null, "Command", null, _fce.b.f, 1));
        t.j("RIGHTARROW");
        var i = new _fc.c;
        i.W(_j.f.a(["ContextParent", "SelectPreviousCommandingBarItemCommand"], [_fce.b.c, _fce.b.cG], null, "Command", null, _fce.b.f, 1));
        i.j("LEFTARROW");
        u.a([t, i]);
        n.C([u]);
        n.y("CommandingBar._tid2");
        return new _j.a(r, [n]).l({
            ListView: n
        })
    }, "", _fm.k, _fce.s, function(n) {
        return new _fce.s(n, _j.b.Instance.a(_ff.b))
    }, !1, !1, !1, 0, _fce.b.a);
    var at = "CommandingBarItemView.ImageAbsolute";
    new _j.d(at, function() {
        _fce.b.a[at] === undefined && (_fce.b.a[at] = [
            [
                [-1, 1, ["CurrentImageId"],
                    [_fce.b.s], null, "Id", null, _fce.b.k, 1, null, null, null
                ],
                [-1, 1, ["CurrentImageId"],
                    [_fce.b.s], null, "IsHidden", null, _fce.b.e, 1, _fce.b.q(), null, !0
                ],
                [-1, 5, ["IsTextHidden"],
                    [_fce.b.ba], null, "_fce_t", null, null, 1, _fce.b.g(), null, null
                ]
            ],
            [
                [-1, 1, ["Text"],
                    [_fce.b.bm], null, "Text", null, _fce.b.j, 1, null, null, null
                ],
                [-1, 1, ["IsTextHidden"],
                    [_fce.b.ba], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 5, ["CurrentImageId"],
                    [_fce.b.s], null, "_fce_n", null, null, 1, new _j.r([_fce.b.q(), _fce.b.g()], [null, null]), null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[5].cloneNode(!0);
        var i = new _fc.a(n.children[1]);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, i]).l({
            Image: t,
            Label: i
        })
    }, "", Object, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var lt = "CommandingBarItemView.WideImageAbsolute";
    new _j.d(lt, function() {
        _fce.b.a[lt] === undefined && (_fce.b.a[lt] = [
            [
                [-1, 1, ["CurrentImageId"],
                    [_fce.b.s], null, "Id", null, _fce.b.k, 1, null, null, null
                ],
                [-1, 1, ["CurrentImageId"],
                    [_fce.b.s], null, "IsHidden", null, _fce.b.e, 1, _fce.b.q(), null, !0
                ],
                [-1, 5, ["IsTextHidden"],
                    [_fce.b.ba], null, "_fce_u", null, null, 1, _fce.b.g(), null, null
                ]
            ],
            [
                [-1, 1, ["Text"],
                    [_fce.b.bm], null, "Text", null, _fce.b.j, 1, null, null, null
                ],
                [-1, 1, ["IsTextHidden"],
                    [_fce.b.ba], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 5, ["CurrentImageId"],
                    [_fce.b.s], null, "_fce_v", null, null, 1, new _j.r([_fce.b.q(), _fce.b.g()], [null, null]), null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[5].cloneNode(!0);
        var i = new _fc.a(n.children[1]);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, i]).l({
            Image: t,
            Label: i
        })
    }, "", Object, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var ut = "CommandingBarItemView.CommandingBarQuickItem";
    new _j.d(ut, function() {
        _fce.b.a[ut] === undefined && (_fce.b.a[ut] = [
            [
                [-1, 5, ["IsRightAligned"],
                    [_fce.b.ec], null, "_fce_g", null, null, 0, null, null, null
                ],
                [-1, 5, ["IsImageRotated"],
                    [_fce.b.eh], null, "_fce_o", null, null, 0, null, null, null
                ],
                [-1, 5, ["IsUserCultureRtl"],
                    [_fce.b.ei], null, "_fce_q", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "ActionSource", null, _fce.b.bn, 0, null, null, null, "CB"],
                [-1, 0, ["ImageTemplateId"],
                    [_fce.b.eg], null, "TemplateId", null, _fce.b.h, 1, null, null, null
                ],
                [-1, 0, ["TooltipText"],
                    [_fce.b.bg], null, "AriaLabel", null, _fce.b.n, 1, null, null, null
                ],
                [-1, 0, ["ImageId"],
                    [_fce.b.ef], null, "ImageId", null, _fce.b.bb, 1, null, null, null
                ],
                [-1, 0, ["DisabledImageId"],
                    [_fce.b.ed], null, "DisabledImageId", null, _fce.b.bo, 0, null, null, null
                ],
                [-1, 0, ["DisplayName"],
                    [_fce.b.ee], null, "Text", null, _fce.b.bc, 1, null, null, null
                ],
                [-1, 0, ["TooltipText"],
                    [_fce.b.bg], null, "Title", null, _fce.b.r, 1, null, null, null
                ],
                [-1, 0, ["ActionAndInstrumentationCommand"],
                    [_fce.b.bf], null, "ClickCommand", null, _fce.b.l, 1, null, null, null
                ],
                [-1, 0, ["ShiftClickActionAndInstrumentationCommand"],
                    [_fce.b.ej], null, "ShiftClickCommand", null, _fce.b.cw, 1, null, null, null
                ],
                [-1, 0, ["IsEnabled"],
                    [_fce.b.A], null, "IsEnabled", null, _fce.b.x, 1, null, null, !1
                ]
            ],
            [
                [-1, 0, ["LightningTemplateId"],
                    [_fce.b.cm], null, "IsHidden", null, _fce.b.e, 1, _fce.b.w(), null, !0
                ],
                [-1, 0, ["LightningTemplateId"],
                    [_fce.b.cm], null, "TemplateId", null, _fce.b.h, 1, null, null, null
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[6].cloneNode(!0);
        var r = new _j.c(_j.a.a(t, [0, 1]));
        var n = new _fc.b(_j.a.a(t, [0, 0]));
        n.A(-1);
        n.c("ms-bgc-tl-h");
        n.g("ms-fcl-nt");
        n.j("_fce_p");
        n.h("_fce_r");
        var i = new _j.i(t.children[0]);
        return new _j.a(t, [i, n, r]).l({
            ButtonOne: n
        })
    }, "", _fm.f, _fce.x, function(n) {
        return new _fce.x(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var rt = "CommandingBarItemView.CommandingBarSplitButton";
    new _j.d(rt, function() {
        _fce.b.a[rt] === undefined && (_fce.b.a[rt] = [
            [
                [-1, 4, null, null, null, "ActionSource", null, _fce.b.bn, 0, null, null, null, "CB"],
                [-1, 0, ["PrimaryActionCommandingBarItem", "ImageId"],
                    [_fce.b.bi, _fce.b.bK], null, "ImageId", null, _fce.b.bb, 0, null, null, null
                ],
                [-1, 0, ["PrimaryActionCommandingBarItem", "Text"],
                    [_fce.b.bi, _fce.b.E], null, "Text", null, _fce.b.bc, 1, null, null, null
                ],
                [-1, 0, ["PrimaryActionCommandingBarItem", "Title"],
                    [_fce.b.bi, _fce.b.bL], null, "Title", null, _fce.b.r, 1, null, null, null
                ],
                [-1, 0, ["ActionAndInstrumentationCommand"],
                    [_fce.b.bf], null, "ClickCommand", null, _fce.b.l, 1, null, null, null
                ],
                [-1, 0, ["IsEnabled"],
                    [_fce.b.A], null, "IsEnabled", null, _fce.b.x, 1, null, null, !1
                ],
                [-1, 0, ["PrimaryActionCommandingBarItem", "DisabledImageId"],
                    [_fce.b.bi, _fce.b.eM], null, "DisabledImageId", null, _fce.b.bo, 0, null, null, null
                ],
                [-1, 5, ["DropDownContextMenu", "IsShown"],
                    [_fce.b.bh, _fce.b.m], null, "ms-bgc-tl", null, null, 0, null, null, null
                ]
            ], null, [
                [-1, 4, null, null, null, "ImageId", null, _fce.b.bb, 0, null, null, null, _fm.q.a()],
                [-1, 0, ["TooltipText"],
                    [_fce.b.bg], null, "Title", null, _fce.b.r, 1, null, null, null
                ],
                [-1, 0, ["ButtonTextForAT"],
                    [_fce.b.ek], null, "AriaLabel", null, _fce.b.n, 0, null, null, null
                ],
                [-1, 0, ["ShowDropDownContextMenuCommand"],
                    [_fce.b.el], null, "ClickCommand", null, _fce.b.l, 1, null, null, null
                ],
                [-1, 0, ["IsEnabled"],
                    [_fce.b.A], null, "IsEnabled", null, _fce.b.x, 1, null, null, !1
                ],
                [-1, 5, ["DropDownContextMenu", "IsShown"],
                    [_fce.b.bh, _fce.b.m], null, "ms-bgc-tl", null, null, 0, null, null, null
                ]
            ]
        ]);
        var r = _fce.b.b.childNodes[7].cloneNode(!0);
        var t = new _fc.b(_j.a.a(r, [0, 2]));
        t.A(-1);
        t.j("_fce_r");
        t.c("ms-bgc-tl-h");
        t.f("ms-fcl-ns");
        t.g("ms-fcl-nt");
        var u = new _fc.a(_j.a.a(r, [0, 1]));
        u.a("|");
        u.N(!0);
        var n = new _fc.b(_j.a.a(r, [0, 0]));
        n.y("CommandingBarItemView.ImageAbsolute");
        n.A(-1);
        n.c("ms-bgc-tl-h");
        n.h("_fce_r");
        n.g("ms-fcl-nt");
        var i = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        i.U(_j.f.a(["DropDownContextMenu"], [_fce.b.bh], null, "MenuDataContext", null, _fce.b.bs, 1)).U(_j.f.a(["DropDownContextMenu", "IsShown"], [_fce.b.bh, _fce.b.m], _fce.b.bH, "IsShown", _fce.b.bq, _fce.b.br, 2, null, null, !1)).U(_j.f.a(["IsEnabled"], [_fce.b.A], null, "IsEnabled", null, _fce.b.bS, 1, null, null, !1));
        i.e = !0;
        i.b = 1;
        i.g = "headerMenuDropShadow ms-bcl-tl";
        n.C([i]);
        return new _j.a(r, [n, u, t]).l({
            ButtonOne: n,
            ButtonTwo: t
        })
    }, "", _fm.p, _fce.x, function(n) {
        return new _fce.x(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var it = "CommandingBarItemView.CommandingBarDropButton._tid4";
    new _j.d(it, function() {
        _fce.b.a[it] === undefined && (_fce.b.a[it] = [
            [
                [-1, 0, ["ButtonImageId"],
                    [_fce.b.dV], null, "Id", null, _fce.b.k, 1, null, null, null
                ],
                [-1, 5, ["ShowButtonImage"],
                    [_fce.b.cf], null, "_fce_j", null, null, 0, _fce.b.g(), null, null
                ]
            ],
            [
                [-1, 0, ["MenuName"],
                    [_fce.b.eb], null, "Text", null, _fce.b.j, 1, null, null, null
                ],
                [-1, 5, ["HideMenuName"],
                    [_fce.b.ea], null, "_fce_j", null, null, 0, null, null, null
                ],
                [-1, 5, ["ShowButtonImage"],
                    [_fce.b.cf], null, "_fce_n", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 0, ["DropMenuImageId"],
                    [_fce.b.dY], null, "Id", null, _fce.b.k, 1, null, null, null
                ],
                [-1, 5, ["HideDropMenuImage"],
                    [_fce.b.dZ], null, "_fce_j", null, null, 0, null, null, null
                ],
                [-1, 5, ["IsEnabled"],
                    [_fce.b.A], null, "ms-font-color-neutralTertiary", null, null, 0, _fce.b.g(), null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[8].cloneNode(!0);
        var r = new _fc.d(n.children[2], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var i = new _fc.a(n.children[1]);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, i, r])
    }, "", _fm.l, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !0, !1, 0, _fce.b.a);
    var ot = "CommandingBarItemView.CommandingBarDropButton._tid5";
    new _j.d(ot, function() {
        _fce.b.a[ot] === undefined && (_fce.b.a[ot] = [
            [
                [-1, 1, ["DataContext", "PopupContentTemplateId"],
                    [_fce.b.bM, _fce.b.ci], null, "TemplateId", null, _fce.b.h, 0, null, null, null
                ],
                [-1, 0, ["PopupContentViewModel"],
                    [_fce.b.cj], null, "DataContext", null, _fce.b.p, 0, null, null, null
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[9].cloneNode(!0);
        var n = new _j.c(t.children[0]);
        return new _j.a(t, [n]).l({
            PopupContent: n
        })
    }, "", _fm.l, _fce.l, function(n) {
        return new _fce.l(n, _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b))
    }, !1, !0, !1, 0, _fce.b.a);
    var et = "CommandingBarItemView.CommandingBarDropButton";
    new _j.d(et, function() {
        _fce.b.a[et] === undefined && (_fce.b.a[et] = [
            [
                [-1, 4, null, null, null, "ActionSource", null, _fce.b.bn, 0, null, null, null, "CB"],
                [-1, 0, ["ActionAndInstrumentationCommand"],
                    [_fce.b.bf], null, "ClickCommand", null, _fce.b.l, 1, null, null, null
                ],
                [-1, 0, ["IsEnabled"],
                    [_fce.b.A], null, "IsEnabled", null, _fce.b.x, 1, null, null, !1
                ],
                [-1, 0, ["TooltipText"],
                    [_fce.b.bg], null, "Title", null, _fce.b.r, 1, null, null, null
                ],
                [-1, 0, ["ButtonTextForAT"],
                    [_fce.b.dW], null, "AriaLabel", null, _fce.b.n, 0, null, null, null
                ],
                [-1, 5, ["DropDownContextMenu", "IsShown"],
                    [_fce.b.bD, _fce.b.m], null, "ms-bgc-tl", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 0, ["IsPopupVisible"],
                    [_fce.b.ch], _fce.b.ck, "IsShown", _fce.b.bZ, _fce.b.ca, 2, null, null, !1
                ]
            ],
            [
                [-1, 0, ["LightningTemplateId"],
                    [_fce.b.ce], null, "IsHidden", null, _fce.b.e, 1, _fce.b.w(), null, !0
                ],
                [-1, 0, ["LightningTemplateId"],
                    [_fce.b.ce], null, "TemplateId", null, _fce.b.h, 1, null, null, null
                ]
            ]
        ]);
        var r = _fce.b.b.childNodes[10].cloneNode(!0);
        var f = new _j.c(_j.a.a(r, [0, 2]));
        var n = new _fce.l(_j.a.a(r, [0, 1]), _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        n.e = !1;
        n.h(!0);
        n.v = !0;
        n.i = 2;
        n.f(!1);
        var u = new _fce.w(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
        u.U(_j.f.b(2, null, null, null, "HorizontalAlignment", null, _fce.b.cc, 0, null, null, 0)).U(_j.f.a(["PopupVerticalOffset"], [_fce.b.cg], null, "VerticalOffset", null, _fce.b.cd, 0, null, null, 0)).W(_j.f.a(["ContextParent"], [_fce.b.c], null, "AnchorElement", null, _fce.b.cb, 1));
        n.d(u);
        n.y("CommandingBarItemView.CommandingBarDropButton._tid5");
        var t = new _fc.b(_j.a.a(r, [0, 0]));
        t.A(-1);
        t.c("ms-bgc-tl-h");
        t.g("ms-fcl-nt");
        var i = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        i.U(_j.f.a(["DropDownContextMenu"], [_fce.b.bD], null, "MenuDataContext", null, _fce.b.bs, 1)).U(_j.f.a(["DropDownContextMenu", "IsShown"], [_fce.b.bD, _fce.b.m], _fce.b.bH, "IsShown", _fce.b.bq, _fce.b.br, 2, null, null, !1)).U(_j.f.a(["DropDownContentTemplateId"], [_fce.b.dX], null, "TemplateId", null, _fce.b.cN, 1));
        i.e = !0;
        i.b = 1;
        i.g = "headerMenuDropShadow ms-bcl-tl";
        t.C([i]);
        t.y("CommandingBarItemView.CommandingBarDropButton._tid4");
        return new _j.a(r, [t, n, f]).l({
            ButtonOne: t
        })
    }, "", _fm.l, _fce.x, function(n) {
        return new _fce.x(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var ft = "CommandingBarItemView.CommandingBarPopupButton._tid6";
    new _j.d(ft, function() {
        _fce.b.a[ft] === undefined && (_fce.b.a[ft] = [
            [
                [-1, 1, ["DataContext", "PopupContentTemplateId"],
                    [_fce.b.bM, _fce.b.ci], null, "TemplateId", null, _fce.b.h, 0, null, null, null
                ],
                [-1, 0, ["PopupContentViewModel"],
                    [_fce.b.cj], null, "DataContext", null, _fce.b.p, 0, null, null, null
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[9].cloneNode(!0);
        var n = new _j.c(t.children[0]);
        return new _j.a(t, [n]).l({
            PopupContent: n
        })
    }, "", _fm.t, _fce.l, function(n) {
        return new _fce.l(n, _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b))
    }, !1, !0, !1, 0, _fce.b.a);
    var ni = "CommandingBarItemView.CommandingBarPopupButton";
    new _j.d(ni, function() {
        _fce.b.a[ni] === undefined && (_fce.b.a[ni] = [
            [
                [-1, 0, ["DisplayName"],
                    [_fce.b.cl], null, "Text", null, _fce.b.bc, 0, null, null, null
                ],
                [-1, 0, ["DisplayName"],
                    [_fce.b.cl], null, "Title", null, _fce.b.r, 0, null, null, null
                ],
                [-1, 0, ["ActionAndInstrumentationCommand"],
                    [_fce.b.bf], null, "ClickCommand", null, _fce.b.l, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["IsPopupVisible"],
                    [_fce.b.ch], _fce.b.ck, "IsShown", _fce.b.bZ, _fce.b.ca, 2, null, null, !1
                ]
            ]
        ]);
        var i = _fce.b.b.childNodes[11].cloneNode(!0);
        var n = new _fce.l(_j.a.a(i, [0, 1]), _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        n.e = !0;
        n.h(!0);
        n.v = !0;
        n.i = 2;
        n.f(!1);
        var r = new _fce.w(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
        r.U(_j.f.b(2, null, null, null, "HorizontalAlignment", null, _fce.b.cc, 0, null, null, 0)).U(_j.f.a(["PopupVerticalOffset"], [_fce.b.cg], null, "VerticalOffset", null, _fce.b.cd, 0, null, null, 0)).W(_j.f.a(["ContextParent"], [_fce.b.c], null, "AnchorElement", null, _fce.b.cb, 1));
        n.d(r);
        n.y("CommandingBarItemView.CommandingBarPopupButton._tid6");
        var t = new _fc.b(_j.a.a(i, [0, 0]));
        t.A(-1);
        t.c("ms-bgc-tl-h");
        t.h("_fce_r");
        return new _j.a(i, [t, n]).l({
            ButtonOne: t
        })
    }, "", _fm.t, _fce.x, function(n) {
        return new _fce.x(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var gt = "ContextMenuView._tid7";
    new _j.d(gt, function() {
        _fce.b.a[gt] === undefined && (_fce.b.a[gt] = [null]);
        var t = _fce.b.b.childNodes[12].cloneNode(!0);
        var n = new _fce.d(t.children[0]);
        return new _j.a(t, [n]).l({
            ListPanel: n
        })
    }, "", _fm.e, _fce.P, function(n) {
        return new _fce.P(n, _j.b.Instance.a(_ff.a))
    }, !1, !0, !1, 0, _fce.b.a);
    var ti = "ContextMenuView.ContextMenuList._tid8";
    new _j.d(ti, function() {
        _fce.b.a[ti] === undefined && (_fce.b.a[ti] = [null]);
        var t = _fce.b.b.childNodes[12].cloneNode(!0);
        var n = new _fce.d(t.children[0]);
        return new _j.a(t, [n]).l({
            ListPanel: n
        })
    }, "", _fm.e, _fce.a, function(n) {
        return new _fce.a(n, _j.b.Instance.a(_ff.a))
    }, !1, !0, !1, 0, _fce.b.a);
    var ri = "ContextMenuView.ContextMenuList";
    new _j.d(ri, function() {
        _fce.b.a[ri] === undefined && (_fce.b.a[ri] = [
            [
                [-1, 0, ["ContextMenuItems"],
                    [_fce.b.bF], null, "DataSource", null, _fce.b.K, 1, null, null, null
                ],
                [-1, 0, ["SelectedItem"],
                    [_fce.b.bG], _fce.b.bI, "SelectedItem", _fce.b.bz, _fce.b.bA, 2, null, null, null
                ]
            ]
        ]);
        var e = _fce.b.b.childNodes[14].cloneNode(!0);
        var n = new _fce.a(e.children[0], _j.b.Instance.a(_ff.a));
        n.bd = !0;
        n.be("div");
        n.bi("_fce_z ms-fwt-sl ms-font-s");
        n.cT = !0;
        var o = new _fc.g;
        var u = new _fc.c;
        u.W(_j.f.a(["ContextParent", "ContextParent", "ContextParent", "DownArrowCommand"], [_fce.b.c, _fce.b.c, _fce.b.c, _fce.b.bt], null, "Command", null, _fce.b.f, 1));
        u.j("DOWNARROW");
        var t = new _fc.c;
        t.W(_j.f.a(["ContextParent", "ContextParent", "ContextParent", "UpArrowCommand"], [_fce.b.c, _fce.b.c, _fce.b.c, _fce.b.bx], null, "Command", null, _fce.b.f, 1));
        t.j("UPARROW");
        var i = new _fc.c;
        i.W(_j.f.a(["ContextParent", "ContextParent", "ContextParent", "LeftArrowSubMenuCommand"], [_fce.b.c, _fce.b.c, _fce.b.c, _fce.b.bw], null, "Command", null, _fce.b.f, 1));
        i.j("LEFTARROW");
        var r = new _fc.c;
        r.W(_j.f.a(["ContextParent", "ContextParent", "ContextParent", "HomeCommand"], [_fce.b.c, _fce.b.c, _fce.b.c, _fce.b.bv], null, "Command", null, _fce.b.f, 1));
        r.j("HOME");
        var f = new _fc.c;
        f.W(_j.f.a(["ContextParent", "ContextParent", "ContextParent", "EndCommand"], [_fce.b.c, _fce.b.c, _fce.b.c, _fce.b.bu], null, "Command", null, _fce.b.f, 1));
        f.j("END");
        o.a([u, t, i, r, f]);
        n.C([o]);
        n.bc(function() {
            var t = _fce.b.b.childNodes[13].cloneNode(!0).childNodes[0];
            var n = new _fce.n(t);
            n.U(_j.f.a(["MenuItemTemplateId"], [_fce.b.bJ], null, "TemplateId", null, _fce.b.h, 1));
            return n
        });
        n.y("ContextMenuView.ContextMenuList._tid8");
        return new _j.a(e, [n])
    }, "", _fm.e, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var ii = "ContextMenuView.GenericContextMenuItem";
    new _j.d(ii, function() {
        _fce.b.a[ii] === undefined && (_fce.b.a[ii] = [
            [
                [-1, 0, ["MenuItemTemplateId"],
                    [_fce.b.bJ], null, "TemplateId", null, _fce.b.h, 1, null, null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[15].cloneNode(!0);
        var t = new _j.c(n.children[0]);
        return new _j.a(n, [t])
    }, "", _fm.s, _fce.e, function(n) {
        return new _fce.e(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var wt = "ContextMenuView.ContextMenuSeparator";
    new _j.d(wt, function() {
        _fce.b.a[wt] === undefined && (_fce.b.a[wt] = [
            [
                [-1, 0, ["IsHidden"],
                    [_fce.b.ey], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 0, ["ParentContextMenu", "CustomSeparatorCssClass"],
                    [_fce.b.ez, _fce.b.eC], null, "CustomCssClass", null, _fce.b.cQ, 1, null, null, null
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[15].cloneNode(!0);
        var n = new _fce.bc(t.children[0]);
        n.d("_fce_M ms-bcl-nl");
        return new _j.a(t, [n])
    }, "", _fm.i, _fce.n, function(n) {
        return new _fce.n(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var pt = "ContextMenuView.ContextMenuHeader";
    new _j.d(pt, function() {
        _fce.b.a[pt] === undefined && (_fce.b.a[pt] = [
            [
                [-1, 0, ["ImageId"],
                    [_fce.b.bE], null, "Id", null, _fce.b.k, 1, null, null, null
                ],
                [-1, 0, ["ImageId"],
                    [_fce.b.bE], null, "IsHidden", null, _fce.b.e, 1, _fce.b.q(), null, !0
                ]
            ],
            [
                [-1, 0, ["Text"],
                    [_fce.b.ex], null, "Text", null, _fce.b.j, 1, null, null, null
                ],
                [-1, 0, ["IsHidden"],
                    [_fce.b.ew], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 5, ["ImageId"],
                    [_fce.b.bE], null, "_fce_D", null, null, 0, new _j.r([_fce.b.q(), _fce.b.g()], [null, null]), null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[16].cloneNode(!0);
        var i = new _fc.a(n.children[1]);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, i])
    }, "", _fm.n, _fce.n, function(n) {
        return new _fce.n(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var yt = "ContextMenuView.ContextMenuItem._tid9";
    new _j.d(yt, function() {
        _fce.b.a[yt] === undefined && (_fce.b.a[yt] = [
            [
                [-1, 0, ["LabelDataContext"],
                    [_fce.b.C], null, "DataContext", null, _fce.b.p, 1, null, null, null
                ],
                [0, 0, ["LabelTemplateId"],
                    [_fce.b.D], null, "TemplateId", null, _fce.b.h, 1, null, null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[17].cloneNode(!0);
        var t = new _j.c(n.children[0]);
        return new _j.a(n, [t])
    }, "", _fm.c, _fce.v, function(n) {
        return new _fce.v(n, _j.b.Instance.a(_j.j))
    }, !1, !0, !1, 0, _fce.b.a);
    var dt = "ContextMenuView.ContextMenuItem";
    new _j.d(dt, function() {
        _fce.b.a[dt] === undefined && (_fce.b.a[dt] = [
            [
                [-1, 0, ["IsSelected"],
                    [_fce.b.B], null, "IsSelected", null, _fce.b.bd, 1, null, null, !1
                ],
                [-1, 0, ["Command"],
                    [_fce.b.u], null, "ClickCommand", null, _fce.b.l, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "ContextMenuPopupCloseCommand"],
                    [_fce.b.d, _fce.b.M], null, "CloseMenuCommand", null, _fce.b.y, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "ContextMenuPopupId"],
                    [_fce.b.d, _fce.b.N], null, "ContextMenuPopupId", null, _fce.b.z, 1, null, null, 0
                ],
                [-1, 0, ["ParentContextMenu", "AppendCustomItemCssClass"],
                    [_fce.b.d, _fce.b.eA], null, "AppendCustomItemCssClass", null, _fce.b.cP, 1, null, null, !1
                ],
                [-1, 0, ["ParentContextMenu", "CustomItemCssClass"],
                    [_fce.b.d, _fce.b.Q], null, "CustomItemCssClass", null, _fce.b.I, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomActiveItemCssClass"],
                    [_fce.b.d, _fce.b.O], null, "CustomActiveCssClass", null, _fce.b.G, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomInactiveItemCssClass"],
                    [_fce.b.d, _fce.b.P], null, "CustomInactiveCssClass", null, _fce.b.H, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomSelectedItemCssClass"],
                    [_fce.b.d, _fce.b.S], null, "CustomSelectedCssClass", null, _fce.b.J, 1, null, null, null
                ],
                [-1, 0, ["AriaId"],
                    [_fce.b.T], null, "AriaId", null, _fce.b.v, 1, null, null, null
                ],
                [-1, 0, ["AriaLabel"],
                    [_fce.b.t], null, "AriaLabel", null, _fce.b.n, 1, null, null, null
                ],
                [-1, 0, ["IsHidden"],
                    [_fce.b.o], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 0, ["IsHidden"],
                    [_fce.b.o], null, "AriaHiddenState", null, _fce.b.F, 1, null, null, !1
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[18].cloneNode(!0);
        var n = new _fce.v(t.children[0], _j.b.Instance.a(_j.j));
        n.bQ("CM");
        n.E("_fce_B ms-fwt-r ms-font-s");
        n.bN("ms-fcl-np");
        n.bP("ms-fcl-nt");
        n.bc("ms-bgc-tl");
        n.y("ContextMenuView.ContextMenuItem._tid9");
        return new _j.a(t, [n]).l({
            FocusControl: n
        })
    }, "", _fm.c, _fce.n, function(n) {
        return new _fce.n(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var kt = "ContextMenuView.DualStateContextMenuItem._tida";
    new _j.d(kt, function() {
        _fce.b.a[kt] === undefined && (_fce.b.a[kt] = [
            [
                [-1, 4, null, null, null, "Id", null, _fce.b.k, 0, null, null, null, _fce.f.a],
                [-1, 0, ["ShowCheckmark"],
                    [_fce.b.bj], null, "IsHidden", null, _fce.b.e, 1, _fce.b.g(), null, !0
                ]
            ],
            [
                [-1, 0, ["LabelDataContext"],
                    [_fce.b.C], null, "DataContext", null, _fce.b.p, 1, null, null, null
                ],
                [0, 0, ["LabelTemplateId"],
                    [_fce.b.D], null, "TemplateId", null, _fce.b.h, 1, null, null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[19].cloneNode(!0);
        var i = new _j.c(_j.a.a(n, [1, 0]));
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, i])
    }, "", _fm.g, _fce.p, function(n) {
        return new _fce.p(n, _j.b.Instance.a(_j.j))
    }, !1, !0, !1, 0, _fce.b.a);
    var bt = "ContextMenuView.DualStateContextMenuItem";
    new _j.d(bt, function() {
        _fce.b.a[bt] === undefined && (_fce.b.a[bt] = [
            [
                [-1, 0, ["IsSelected"],
                    [_fce.b.B], null, "IsSelected", null, _fce.b.bd, 1, null, null, !1
                ],
                [-1, 0, ["IsChecked"],
                    [_fce.b.cn], _fce.b.eH, "IsChecked", _fce.b.cW, _fce.b.cX, 2, null, null, !1
                ],
                [-1, 0, ["ToggleCheckedOnClick"],
                    [_fce.b.eG], null, "ToggleCheckedOnClick", null, _fce.b.cY, 1, null, null, !1
                ],
                [-1, 0, ["Command"],
                    [_fce.b.u], null, "ClickCommand", null, _fce.b.l, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "ContextMenuPopupCloseCommand"],
                    [_fce.b.d, _fce.b.M], null, "CloseMenuCommand", null, _fce.b.y, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "ContextMenuPopupId"],
                    [_fce.b.d, _fce.b.N], null, "ContextMenuPopupId", null, _fce.b.z, 1, null, null, 0
                ],
                [-1, 0, ["ParentContextMenu", "CustomItemCssClass"],
                    [_fce.b.d, _fce.b.Q], null, "CustomItemCssClass", null, _fce.b.I, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomActiveItemCssClass"],
                    [_fce.b.d, _fce.b.O], null, "CustomActiveCssClass", null, _fce.b.G, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomInactiveItemCssClass"],
                    [_fce.b.d, _fce.b.P], null, "CustomInactiveCssClass", null, _fce.b.H, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomSelectedItemCssClass"],
                    [_fce.b.d, _fce.b.S], null, "CustomSelectedCssClass", null, _fce.b.J, 1, null, null, null
                ],
                [-1, 0, ["AriaId"],
                    [_fce.b.T], null, "AriaId", null, _fce.b.v, 1, null, null, null
                ],
                [-1, 0, ["AriaLabel"],
                    [_fce.b.t], null, "AriaLabel", null, _fce.b.n, 1, null, null, null
                ],
                [-1, 0, ["IsHidden"],
                    [_fce.b.o], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 0, ["IsHidden"],
                    [_fce.b.o], null, "AriaHiddenState", null, _fce.b.F, 1, null, null, !1
                ],
                [-1, 5, ["IsChecked"],
                    [_fce.b.cn], null, "ms-fwt-sb", null, null, 0, null, null, null
                ],
                [-1, 5, ["ShouldOverflowLabel"],
                    [_fce.b.eF], null, "_fce_Q", null, null, 0, null, null, null
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[20].cloneNode(!0);
        var n = new _fce.p(t.children[0], _j.b.Instance.a(_j.j));
        n.E("_fce_B menuItemWithCheckMark ms-fwt-r ms-font-s");
        n.bN("ms-fcl-nd");
        n.bP("ms-fcl-nt");
        n.bc("ms-bgc-tl");
        n.y("ContextMenuView.DualStateContextMenuItem._tida");
        return new _j.a(t, [n]).l({
            FocusControl: n
        })
    }, "", _fm.g, _fce.n, function(n) {
        return new _fce.n(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var ct = "ContextMenuView.SubMenuContextMenuItem._tidb";
    new _j.d(ct, function() {
        _fce.b.a[ct] === undefined && (_fce.b.a[ct] = [
            [
                [-1, 0, ["LabelDataContext"],
                    [_fce.b.C], null, "DataContext", null, _fce.b.p, 1, null, null, null
                ],
                [0, 0, ["LabelTemplateId"],
                    [_fce.b.D], null, "TemplateId", null, _fce.b.h, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "Id", null, _fce.b.k, 0, null, null, null, _fce.f.c]
            ]
        ]);
        var n = _fce.b.b.childNodes[21].cloneNode(!0);
        var i = new _fc.d(n.children[1], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var t = new _j.c(n.children[0]);
        return new _j.a(n, [t, i])
    }, "", _fm.j, _fce.X, function(n) {
        return new _fce.X(n, _j.b.Instance.a(_ff.a), _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b))
    }, !1, !0, !1, 0, _fce.b.a);
    var e = "ContextMenuView.SubMenuContextMenuItem";
    new _j.d(e, function() {
        _fce.b.a[e] === undefined && (_fce.b.a[e] = [
            [
                [-1, 0, ["IsSelected"],
                    [_fce.b.B], null, "IsSelected", null, _fce.b.dz, 1, null, null, !1
                ],
                [-1, 0, ["SubMenuTemplateId"],
                    [_fce.b.eT], null, "SubMenuTemplateId", null, _fce.b.dE, 0, null, null, null
                ],
                [-1, 0, ["Command"],
                    [_fce.b.u], null, "ClickCommand", null, _fce.b.l, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "ContextMenuPopupCloseCommand"],
                    [_fce.b.d, _fce.b.M], null, "CloseMenuCommand", null, _fce.b.y, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "ContextMenuPopupId"],
                    [_fce.b.d, _fce.b.N], null, "ContextMenuPopupId", null, _fce.b.z, 1, null, null, 0
                ],
                [-1, 0, ["IsEnabled"],
                    [_fce.b.eQ], null, "SubMenuIsEnabled", null, _fce.b.dD, 1, null, null, !1
                ],
                [-1, 0, ["SubMenuIsHovered"],
                    [_fce.b.eS], _fce.b.eU, "IsSubMenuHovered", _fce.b.dy, _fce.b.dA, 2, null, null, !1
                ],
                [-1, 0, ["ParentContextMenu", "CustomItemCssClass"],
                    [_fce.b.d, _fce.b.Q], null, "CustomItemCssClass", null, _fce.b.I, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomActiveItemCssClass"],
                    [_fce.b.d, _fce.b.O], null, "CustomActiveCssClass", null, _fce.b.G, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomInactiveItemCssClass"],
                    [_fce.b.d, _fce.b.P], null, "CustomInactiveCssClass", null, _fce.b.H, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomSelectedItemCssClass"],
                    [_fce.b.d, _fce.b.S], null, "CustomSelectedCssClass", null, _fce.b.J, 1, null, null, null
                ],
                [-1, 0, ["AriaId"],
                    [_fce.b.T], null, "AriaId", null, _fce.b.v, 1, null, null, null
                ],
                [-1, 0, ["AriaLabel"],
                    [_fce.b.t], null, "AriaLabel", null, _fce.b.n, 1, null, null, null
                ],
                [-1, 0, ["IsHidden"],
                    [_fce.b.o], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 0, ["IsHidden"],
                    [_fce.b.o], null, "AriaHiddenState", null, _fce.b.F, 1, null, null, !1
                ],
                [-1, 0, ["SubMenu"],
                    [_fce.b.eR], null, "SubMenu", null, _fce.b.dC, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "IsShown"],
                    [_fce.b.d, _fce.b.m], null, "ParentMenuIsShown", null, _fce.b.dB, 1, null, null, !1
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[22].cloneNode(!0);
        var n = new _fce.X(t.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
        n.E("_fce_B ms-fwt-r ms-font-s");
        n.bN("ms-fcl-np");
        n.bP("ms-fcl-nt");
        n.bc("ms-bgc-tl");
        n.y("ContextMenuView.SubMenuContextMenuItem._tidb");
        return new _j.a(t, [n]).l({
            FocusControl: n
        })
    }, "", _fm.j, _fce.n, function(n) {
        return new _fce.n(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var s = "ContextMenuView.LinkContextMenuItem._tidc";
    new _j.d(s, function() {
        _fce.b.a[s] === undefined && (_fce.b.a[s] = [
            [
                [-1, 0, ["LabelDataContext"],
                    [_fce.b.C], null, "DataContext", null, _fce.b.p, 1, null, null, null
                ],
                [0, 0, ["LabelTemplateId"],
                    [_fce.b.D], null, "TemplateId", null, _fce.b.h, 1, null, null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[17].cloneNode(!0);
        var t = new _j.c(n.children[0]);
        return new _j.a(n, [t])
    }, "", _fm.o, _fce.R, function(n) {
        return new _fce.R(n, _j.b.Instance.a(_j.j))
    }, !1, !0, !1, 0, _fce.b.a);
    var c = "ContextMenuView.LinkContextMenuItem";
    new _j.d(c, function() {
        _fce.b.a[c] === undefined && (_fce.b.a[c] = [
            [
                [-1, 0, ["IsSelected"],
                    [_fce.b.B], null, "IsSelected", null, _fce.b.bd, 1, null, null, !1
                ],
                [-1, 0, ["IsHidden"],
                    [_fce.b.o], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 0, ["IsHidden"],
                    [_fce.b.o], null, "AriaHiddenState", null, _fce.b.F, 1, null, null, !1
                ],
                [-1, 0, ["Url"],
                    [_fce.b.eL], null, "Href", null, _fce.b.db, 1, null, null, null
                ],
                [-1, 0, ["TargetWindow"],
                    [_fce.b.eK], null, "TargetWindow", null, _fce.b.dd, 1, null, null, null
                ],
                [-1, 0, ["PreventNavigation"],
                    [_fce.b.eJ], null, "PreventNavigation", null, _fce.b.dc, 1, null, null, !1
                ],
                [-1, 0, ["Command"],
                    [_fce.b.u], null, "ClickCommand", null, _fce.b.l, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "ContextMenuPopupCloseCommand"],
                    [_fce.b.d, _fce.b.M], null, "CloseMenuCommand", null, _fce.b.y, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "ContextMenuPopupId"],
                    [_fce.b.d, _fce.b.N], null, "ContextMenuPopupId", null, _fce.b.z, 1, null, null, 0
                ],
                [-1, 0, ["ParentContextMenu", "CustomItemCssClass"],
                    [_fce.b.d, _fce.b.Q], null, "CustomItemCssClass", null, _fce.b.I, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomActiveItemCssClass"],
                    [_fce.b.d, _fce.b.O], null, "CustomActiveCssClass", null, _fce.b.G, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomInactiveItemCssClass"],
                    [_fce.b.d, _fce.b.P], null, "CustomInactiveCssClass", null, _fce.b.H, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomSelectedItemCssClass"],
                    [_fce.b.d, _fce.b.S], null, "CustomSelectedCssClass", null, _fce.b.J, 1, null, null, null
                ],
                [-1, 0, ["AriaId"],
                    [_fce.b.T], null, "AriaId", null, _fce.b.v, 1, null, null, null
                ],
                [-1, 0, ["AriaLabel"],
                    [_fce.b.t], null, "AriaLabel", null, _fce.b.n, 1, null, null, null
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[23].cloneNode(!0);
        var n = new _fce.R(t.children[0], _j.b.Instance.a(_j.j));
        n.E("_fce_B ms-fwt-r ms-font-s ms-font-color-neutralDark");
        n.bN("ms-fcl-np");
        n.bP("ms-fcl-nt");
        n.bc("ms-bgc-tl");
        n.y("ContextMenuView.LinkContextMenuItem._tidc");
        return new _j.a(t, [n]).l({
            FocusControl: n
        })
    }, "", _fm.o, _fce.n, function(n) {
        return new _fce.n(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var h = "ContextMenuView.DefaultMenuItemLineTemplate";
    new _j.d(h, function() {
        _fce.b.a[h] === undefined && (_fce.b.a[h] = [
            [
                [-1, 0, ["ImageId"],
                    [_fce.b.bK], null, "Id", null, _fce.b.k, 1, null, null, null
                ],
                [-1, 0, ["ImageCss"],
                    [_fce.b.co], null, "CssClass", null, _fce.b.bN, 1, null, null, null
                ],
                [-1, 0, ["ImageId"],
                    [_fce.b.bK], null, "IsHidden", null, _fce.b.e, 1, _fce.b.q(), null, !0
                ],
                [-1, 5, ["ImageCss"],
                    [_fce.b.co], null, "_fce_H", null, null, 0, _fce.b.w(), null, null
                ]
            ],
            [
                [-1, 0, ["Text"],
                    [_fce.b.E], null, "Text", null, _fce.b.j, 1, null, null, null
                ],
                [-1, 0, ["Title"],
                    [_fce.b.bL], null, "Title", null, _fce.b.r, 1, null, null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[24].cloneNode(!0);
        var i = new _fc.a(n.children[1]);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, i])
    }, "", _fm.c, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var f = "ContextMenuView.ThemedMenuItemTemplate";
    new _j.d(f, function() {
        _fce.b.a[f] === undefined && (_fce.b.a[f] = [
            [
                [-1, 0, ["Text"],
                    [_fce.b.E], null, "Text", null, _fce.b.j, 1, null, null, null
                ],
                [-1, 0, ["Text"],
                    [_fce.b.E], null, "Title", null, _fce.b.r, 1, null, null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[25].cloneNode(!0);
        var t = new _fc.a(n.children[0]);
        return new _j.a(n, [t])
    }, "", _fm.c, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var t = "ContextMenuView";
    new _j.d(t, function() {
        _fce.b.a[t] === undefined && (_fce.b.a[t] = [
            [
                [-1, 0, ["CustomMenuCssClass"],
                    [_fce.b.R], null, "CssClass", null, _fce.b.bN, 1, null, null, null
                ],
                [-1, 5, ["CustomMenuCssClass"],
                    [_fce.b.R], null, "_fce_R", null, null, 0, _fce.b.w(), null, null
                ],
                [-1, 5, ["CustomMenuCssClass"],
                    [_fce.b.R], null, "ms-fwt-r", null, null, 0, _fce.b.w(), null, null
                ],
                [-1, 5, ["CustomMenuCssClass"],
                    [_fce.b.R], null, "ms-bgc-w", null, null, 0, _fce.b.w(), null, null
                ]
            ],
            [
                [-1, 5, ["DisableMenuMaxHeight"],
                    [_fce.b.eD], null, "_fce_O", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "AriaLabel", null, _fce.b.bk, 0, null, null, null, _fce.f.b],
                [-1, 1, ["IsTouch"],
                    [_fce.b.bT], null, "SelectItemOnHover", null, _fce.b.bX, 0, _fce.b.g(), null, !1
                ],
                [-1, 0, ["ContextMenuItems"],
                    [_fce.b.bF], null, "DataSource", null, _fce.b.K, 1, null, null, null
                ],
                [-1, 0, ["SelectedItem"],
                    [_fce.b.bG], _fce.b.bI, "SelectedItem", _fce.b.bz, _fce.b.bA, 2, null, null, null
                ]
            ]
        ]);
        var i = _fce.b.b.childNodes[26].cloneNode(!0);
        var n = new _fce.P(_j.a.a(i, [0, 0, 0]), _j.b.Instance.a(_ff.a));
        n.be("div");
        n.bi("_fce_z ms-font-s ms-fwt-sl");
        n.bd = !0;
        n.ci(10);
        var c = new _fc.g;
        var o = new _fc.c;
        o.W(_j.f.a(["ContextParent", "ContextParent", "DownArrowCommand"], [_fce.b.c, _fce.b.c, _fce.b.bt], null, "Command", null, _fce.b.f, 1));
        o.j("DOWNARROW");
        var s = new _fc.c;
        s.W(_j.f.a(["ContextParent", "ContextParent", "UpArrowCommand"], [_fce.b.c, _fce.b.c, _fce.b.bx], null, "Command", null, _fce.b.f, 1));
        s.j("UPARROW");
        var e = new _fc.c;
        e.W(_j.f.a(["ContextParent", "ContextParent", "LeftArrowSubMenuCommand"], [_fce.b.c, _fce.b.c, _fce.b.bw], null, "Command", null, _fce.b.f, 1));
        e.j("LEFTARROW");
        var r = new _fc.c;
        r.W(_j.f.a(["ContextParent", "ContextParent", "HomeCommand"], [_fce.b.c, _fce.b.c, _fce.b.bv], null, "Command", null, _fce.b.f, 1));
        r.j("HOME");
        var u = new _fc.c;
        u.W(_j.f.a(["ContextParent", "ContextParent", "EndCommand"], [_fce.b.c, _fce.b.c, _fce.b.bu], null, "Command", null, _fce.b.f, 1));
        u.j("END");
        var f = new _fc.c;
        f.U(_j.f.a(["ContextMenuDeleteItemCommand"], [_fce.b.eB], null, "Command", null, _fce.b.f, 1));
        f.j("DELETE");
        c.a([o, s, e, r, u, f]);
        n.C([c]);
        n.bc(function() {
            var t = _fce.b.b.childNodes[13].cloneNode(!0).childNodes[0];
            var n = new _fce.n(t);
            n.U(_j.f.a(["MenuItemTemplateId"], [_fce.b.bJ], null, "TemplateId", null, _fce.b.h, 1)).U(_j.f.a(["ParentContextMenu", "IsShown"], [_fce.b.eI, _fce.b.m], null, "PassFocusOnSelection", null, _fce.b.da, 1, null, null, !1));
            return n
        });
        n.y("ContextMenuView._tid7");
        var h = new _fce.g(_j.a.a(i, [0, 0]), _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
        var l = new _j.i(i.children[0]);
        return new _j.a(i, [l, h, n]).l({
            PopupContent: h,
            MenuListView: n
        })
    }, "", _fm.e, _fce.o, function(n) {
        return new _fce.o(n, _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b), _j.b.Instance.a(String))
    }, !1, !1, !1, 0, _fce.b.a);
    var n = "TextboxContextMenuView.TextboxContextMenuItem._tidd";
    new _j.d(n, function() {
        _fce.b.a[n] === undefined && (_fce.b.a[n] = [
            [
                [-1, 0, ["LabelDataContext"],
                    [_fce.b.C], null, "DataContext", null, _fce.b.p, 1, null, null, null
                ],
                [0, 0, ["LabelTemplateId"],
                    [_fce.b.D], null, "TemplateId", null, _fce.b.h, 1, null, null, null
                ]
            ]
        ]);
        var i = _fce.b.b.childNodes[27].cloneNode(!0);
        var t = new _j.c(i.children[0]);
        return new _j.a(i, [t]).l({
            MenuItemControl: t
        })
    }, "", _fm.v, _fce.D, function(n) {
        return new _fce.D(n, _j.b.Instance.a(_j.j))
    }, !1, !0, !1, 0, _fce.b.a);
    var i = "TextboxContextMenuView.TextboxContextMenuItem";
    new _j.d(i, function() {
        _fce.b.a[i] === undefined && (_fce.b.a[i] = [
            [
                [-1, 0, ["IsSelected"],
                    [_fce.b.B], null, "IsSelected", null, _fce.b.bd, 1, null, null, !1
                ],
                [-1, 0, ["IsTextboxShown"],
                    [_fce.b.eV], _fce.b.eX, "IsTextboxShown", _fce.b.bC, _fce.b.dH, 2, null, null, !1
                ],
                [-1, 0, ["ShouldTriggerMenuItemSelection"],
                    [_fce.b.eW], null, "ShouldTriggerMenuItemSelection", null, _fce.b.dI, 0, null, null, !1
                ],
                [-1, 0, ["Command"],
                    [_fce.b.u], null, "TextboxEnterCommand", null, _fce.b.dJ, 0, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "ContextMenuPopupCloseCommand"],
                    [_fce.b.d, _fce.b.M], null, "CloseMenuCommand", null, _fce.b.y, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "ContextMenuPopupId"],
                    [_fce.b.d, _fce.b.N], null, "ContextMenuPopupId", null, _fce.b.z, 1, null, null, 0
                ],
                [-1, 0, ["ParentContextMenu", "CustomItemCssClass"],
                    [_fce.b.d, _fce.b.Q], null, "CustomItemCssClass", null, _fce.b.I, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomActiveItemCssClass"],
                    [_fce.b.d, _fce.b.O], null, "CustomActiveCssClass", null, _fce.b.G, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomInactiveItemCssClass"],
                    [_fce.b.d, _fce.b.P], null, "CustomInactiveCssClass", null, _fce.b.H, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomSelectedItemCssClass"],
                    [_fce.b.d, _fce.b.S], null, "CustomSelectedCssClass", null, _fce.b.J, 1, null, null, null
                ],
                [-1, 0, ["AriaId"],
                    [_fce.b.T], null, "AriaId", null, _fce.b.v, 1, null, null, null
                ],
                [-1, 0, ["AriaLabel"],
                    [_fce.b.t], null, "AriaLabel", null, _fce.b.n, 1, null, null, null
                ],
                [-1, 0, ["IsHidden"],
                    [_fce.b.o], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 0, ["IsHidden"],
                    [_fce.b.o], null, "AriaHiddenState", null, _fce.b.F, 1, null, null, !1
                ]
            ]
        ]);
        var e = _fce.b.b.childNodes[15].cloneNode(!0);
        var n = new _fce.D(e.children[0], _j.b.Instance.a(_j.j));
        n.E("_fce_S ms-fwt-r ms-font-s");
        n.bN("ms-fcl-np");
        n.bP("ms-fcl-nt");
        n.bc("ms-bgc-nl");
        var o = new _fc.g;
        var f = new _fc.c;
        f.W(_j.f.a(["ContextParent", "EscKeyAction"], [_fce.b.c, _fce.b.dF], null, "Command", null, _fce.b.f, 1));
        f.j("ESC");
        var t = new _fc.c;
        t.W(_j.f.a(["ContextParent", "ExitTextboxToSelfAction"], [_fce.b.c, _fce.b.bB], null, "Command", null, _fce.b.f, 1));
        t.j("TAB");
        t.m = !1;
        var r = new _fc.c;
        r.W(_j.f.a(["ContextParent", "ExitTextboxToSelfAction"], [_fce.b.c, _fce.b.bB], null, "Command", null, _fce.b.f, 1));
        r.j("DOWNARROW");
        r.m = !1;
        var u = new _fc.c;
        u.W(_j.f.a(["ContextParent", "ExitTextboxToSelfAction"], [_fce.b.c, _fce.b.bB], null, "Command", null, _fce.b.f, 1));
        u.j("UPARROW");
        u.m = !1;
        o.a([f, t, r, u]);
        n.C([o]);
        n.y("TextboxContextMenuView.TextboxContextMenuItem._tidd");
        return new _j.a(e, [n]).l({
            FocusControl: n
        })
    }, "", _fm.v, _fce.n, function(n) {
        return new _fce.n(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var u = "TextboxContextMenuView.DefaultTextboxMenuItemTemplate";
    new _j.d(u, function() {
        _fce.b.a[u] === undefined && (_fce.b.a[u] = [
            [
                [-1, 1, ["TemplatedParent", "IsTextboxShown"],
                    [_fce.b.i, _fce.b.bC], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 0, ["Text"],
                    [_fce.b.E], null, "Text", null, _fce.b.j, 1, null, null, null
                ],
                [-1, 0, ["AriaLabel"],
                    [_fce.b.t], null, "AriaLabel", null, _fce.b.bk, 1, null, null, null
                ],
                [-1, 0, ["Title"],
                    [_fce.b.bL], null, "Title", null, _fce.b.r, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["TemplatedParent", "IsTextboxShown"],
                    [_fce.b.i, _fce.b.bC], null, "IsHidden", null, _fce.b.e, 1, _fce.b.g(), null, !0
                ],
                [-1, 1, ["TemplatedParent", "TextboxEnterAction"],
                    [_fce.b.i, _fce.b.dG], null, "EnterCommand", null, _fce.b.dN, 1, null, null, null
                ],
                [-1, 0, ["Text"],
                    [_fce.b.E], _fce.b.eP, "Text", _fce.b.dM, _fce.b.dO, 2, null, null, null
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[28].cloneNode(!0);
        var n = new _fc.i(t.children[1]);
        n.a(255);
        n.f = !0;
        n.cs = !0;
        var i = new _fc.a(t.children[0]);
        return new _j.a(t, [i, n])
    }, "", _fm.v, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var fi = "DialogView._tide";
    new _j.d(fi, function() {
        var n = _fce.b.b.childNodes[29].cloneNode(!0);
        return new _j.a(n, [])
    }, "", Object, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !0, !1, 0, _fce.b.a);
    var r = "DialogView._tidf";
    new _j.d(r, function() {
        _fce.b.a[r] === undefined && (_fce.b.a[r] = [null]);
        var t = _fce.b.b.childNodes[15].cloneNode(!0);
        var n = new _fce.d(t.children[0]);
        return new _j.a(t, [n]).l({
            ListPanel: n
        })
    }, "", Object, _fce.a, function(n) {
        return new _fce.a(n, _j.b.Instance.a(_ff.a))
    }, !1, !0, !1, 0, _fce.b.a);
    var l = "DialogView.Button._tidg";
    new _j.d(l, function() {
        _fce.b.a[l] === undefined && (_fce.b.a[l] = [
            [
                [-1, 0, ["Label"],
                    [_fce.b.dU], null, "Text", null, _fce.b.j, 1, null, null, null
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[30].cloneNode(!0);
        var n = new _fc.a(t.children[0]);
        return new _j.a(t, [n]).l({
            Label: n
        })
    }, "", _ff.d, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !0, !1, 0, _fce.b.a);
    var d = "DialogView.Button";
    new _j.d(d, function() {
        _fce.b.a[d] === undefined && (_fce.b.a[d] = [
            [
                [-1, 0, ["IsDefault"],
                    [_fce.b.dQ], null, "ButtonStyle", null, _fce.b.cu, 0, _fce.b.cr(), null, 0
                ],
                [-1, 0, ["ClickCommand"],
                    [_fce.b.dP], null, "ClickCommand", null, _fce.b.l, 1, null, null, null
                ],
                [-1, 0, ["IsHidden"],
                    [_fce.b.dS], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 0, ["IsEnabled"],
                    [_fce.b.dR], null, "IsEnabled", null, _fce.b.x, 1, null, null, !1
                ],
                [-1, 5, ["IsLeftAligned"],
                    [_fce.b.dT], null, "_fce_11", null, null, 0, null, null, null
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[31].cloneNode(!0);
        var n = new _fc.b(t.children[0]);
        n.y("DialogView.Button._tidg");
        return new _j.a(t, [n])
    }, "", _ff.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var k = "DialogView";
    new _j.d(k, function() {
        _fce.b.a[k] === undefined && (_fce.b.a[k] = [null, [
                [-1, 1, ["ShowCloseIcon"],
                    [_fce.b.bV], null, "IsHidden", null, _fce.b.e, 1, _fce.b.g(), null, !0
                ]
            ],
            [
                [-1, 1, ["CloseCommand"],
                    [_fce.b.be], null, "ClickCommand", null, _fce.b.l, 1, null, null, null
                ],
                [-1, 1, ["CloseIconAriaLabelledBy"],
                    [_fce.b.cS], null, "AriaLabel", null, _fce.b.n, 1, null, null, null
                ],
                [-1, 1, ["ShowCloseIcon"],
                    [_fce.b.bV], null, "IsHidden", null, _fce.b.e, 1, _fce.b.g(), null, !0
                ]
            ], null, [
                [-1, 1, ["DialogTitle"],
                    [_fce.b.bU], null, "Text", null, _fce.b.j, 1, null, null, null
                ],
                [-1, 1, ["AriaLabelledBy"],
                    [_fce.b.fa], null, "AriaId", null, _fce.b.v, 1, null, null, null
                ],
                [-1, 1, ["DialogTitle"],
                    [_fce.b.bU], null, "IsHidden", null, _fce.b.e, 1, _fce.b.q(), null, !0
                ]
            ],
            [
                [-1, 1, ["IsBusy"],
                    [_fce.b.cU], null, "IsBusy", null, _fce.b.bQ, 1, null, null, !1
                ]
            ],
            [
                [-1, 1, ["ShowLoadingIndicator"],
                    [_fce.b.bW], null, "IsBusy", null, _fce.b.bQ, 1, null, null, !1
                ]
            ],
            [
                [-1, 1, ["ContentDataContext"],
                    [_fce.b.cT], null, "DataContext", null, _fce.b.p, 1, null, null, null
                ],
                [0, 1, ["AriaDescribedBy"],
                    [_fce.b.eZ], null, "AriaId", null, _fce.b.v, 1, null, null, null
                ],
                [0, 5, ["ShowLoadingIndicator"],
                    [_fce.b.bW], null, "hidden", null, null, 1, null, null, null
                ]
            ], null, [
                [-1, 4, null, null, null, "TargetWindow", null, _fce.b.dL, 0, null, null, null, "_blank"],
                [-1, 1, ["LinkUrl"],
                    [_fce.b.cV], null, "Href", null, _fce.b.dK, 1, null, null, null
                ],
                [-1, 1, ["LinkText"],
                    [_fce.b.by], null, "Text", null, _fce.b.bc, 1, null, null, null
                ],
                [-1, 1, ["LinkText"],
                    [_fce.b.by], null, "Title", null, _fce.b.r, 1, null, null, null
                ],
                [-1, 1, ["LinkText"],
                    [_fce.b.by], null, "IsHidden", null, _fce.b.e, 1, _fce.b.q(), null, !0
                ]
            ],
            [
                [-1, 1, ["ButtonDataList"],
                    [_fce.b.cR], null, "DataSource", null, _fce.b.K, 1, null, null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[32].cloneNode(!0);
        var t = new _fce.a(_j.a.a(n, [0, 1, 3, 1]), _j.b.Instance.a(_ff.a));
        t.be("span");
        t.v("DialogView.Button");
        t.y("DialogView._tidf");
        var s = new _fc.e(_j.a.a(n, [0, 1, 3, 0]));
        var e = new _j.i(_j.a.a(n, [0, 1, 3]));
        var o = new _j.c(_j.a.a(n, [0, 1, 2]));
        var f = new _fce.h(_j.a.a(n, [0, 1, 1]), _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a));
        f.a = 200;
        var l = new _fce.h(_j.a.a(n, [0, 1, 0, 1]), _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a));
        var c = new _fc.a(_j.a.a(n, [0, 1, 0, 0]));
        var i = new _j.i(_j.a.a(n, [0, 1]));
        var r = new _fc.b(_j.a.a(n, [0, 0, 0]));
        r.y("DialogView._tide");
        var h = new _j.i(_j.a.a(n, [0, 0]));
        var u = new _j.i(n.children[0]);
        return new _j.a(n, [u, h, r, i, c, l, f, o, e, s, t]).l({
            PopupContent: u,
            Dialog: i,
            Content: o,
            Footer: e
        })
    }, "", Object, _fce.m, function(n) {
        return new _fce.m(n, _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b))
    }, !1, !1, !1, 0, _fce.b.a);
    var g = "HorizontalPanelContainerView";
    new _j.d(g, function() {
        _fce.b.a[g] === undefined && (_fce.b.a[g] = [null]);
        var t = _fce.b.b.childNodes[33].cloneNode(!0);
        var n = new _j.i(_j.a.a(t, [0, 0, 0]));
        return new _j.a(t, [n]).l({
            Container: n
        })
    }, "", Object, _fce.K, null, !1, !1, !1, 0, _fce.b.a);
    var tt = "Picker._tidh";
    new _j.d(tt, function() {
        _fce.b.a[tt] === undefined && (_fce.b.a[tt] = [
            [
                [-1, 1, ["TemplatedParent", "LabelText"],
                    [_fce.b.i, _fce.b.di], null, "Text", null, _fce.b.j, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["TemplatedParent", "DisplayedValue"],
                    [_fce.b.i, _fce.b.dh], null, "DataContext", null, _fce.b.p, 1, null, null, null
                ],
                [0, 1, ["TemplatedParent", "PickerOptionTemplateId"],
                    [_fce.b.i, _fce.b.dk], null, "TemplateId", null, _fce.b.h, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["CurrentImageId"],
                    [_fce.b.s], null, "Id", null, _fce.b.k, 1, null, null, null
                ],
                [-1, 1, ["TemplatedParent", "ContextMenu", "IsShown"],
                    [_fce.b.i, _fce.b.L, _fce.b.m], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ]
            ],
            [
                [-1, 4, null, null, null, "Id", null, _fce.b.k, 0, null, null, null, _fce.k.b],
                [-1, 1, ["TemplatedParent", "ContextMenu", "IsShown"],
                    [_fce.b.i, _fce.b.L, _fce.b.m], null, "IsHidden", null, _fce.b.e, 1, _fce.b.g(), null, !0
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[34].cloneNode(!0);
        var r = new _fc.d(_j.a.a(n, [1, 1]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var u = new _fc.d(_j.a.a(n, [1, 0]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var t = new _j.c(_j.a.a(n, [0, 1]));
        t.N(!0);
        var i = new _fc.a(_j.a.a(n, [0, 0]));
        return new _j.a(n, [i, t, u, r])
    }, "", Object, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !0, !1, 0, _fce.b.a);
    var nt = "Picker.ContextMenu._tidi";
    new _j.d(nt, function() {
        _fce.b.a[nt] === undefined && (_fce.b.a[nt] = [null]);
        var t = _fce.b.b.childNodes[12].cloneNode(!0);
        var n = new _fce.d(t.children[0]);
        return new _j.a(t, [n]).l({
            ListPanel: n
        })
    }, "", _fm.e, _fce.a, function(n) {
        return new _fce.a(n, _j.b.Instance.a(_ff.a))
    }, !1, !0, !1, 0, _fce.b.a);
    var b = "Picker.ContextMenu";
    new _j.d(b, function() {
        _fce.b.a[b] === undefined && (_fce.b.a[b] = [
            [
                [-1, 0, ["CustomMenuCssClass"],
                    [_fce.b.R], null, "CssClass", null, _fce.b.bN, 1, null, null, null
                ]
            ], null, [
                [-1, 1, ["IsTouch"],
                    [_fce.b.bT], null, "SelectItemOnHover", null, _fce.b.bX, 0, _fce.b.g(), null, !1
                ],
                [-1, 0, ["ContextMenuItems"],
                    [_fce.b.bF], null, "DataSource", null, _fce.b.K, 1, null, null, null
                ],
                [-1, 0, ["SelectedItem"],
                    [_fce.b.bG], _fce.b.bI, "SelectedItem", _fce.b.bz, _fce.b.bA, 2, null, null, null
                ]
            ]
        ]);
        var r = _fce.b.b.childNodes[35].cloneNode(!0);
        var n = new _fce.a(_j.a.a(r, [0, 0, 0, 0]), _j.b.Instance.a(_ff.a));
        n.be("div");
        n.bi("_fce_a1");
        var c = new _fc.g;
        var o = new _fc.c;
        o.W(_j.f.a(["ContextParent", "ContextParent", "DownArrowCommand"], [_fce.b.c, _fce.b.c, _fce.b.bt], null, "Command", null, _fce.b.f, 1));
        o.j("DOWNARROW");
        var i = new _fc.c;
        i.W(_j.f.a(["ContextParent", "ContextParent", "CloseCommand"], [_fce.b.c, _fce.b.c, _fce.b.be], null, "Command", null, _fce.b.f, 1));
        i.j("TAB");
        i.n = !1;
        i.m = !1;
        var s = new _fc.c;
        s.W(_j.f.a(["ContextParent", "ContextParent", "UpArrowCommand"], [_fce.b.c, _fce.b.c, _fce.b.bx], null, "Command", null, _fce.b.f, 1));
        s.j("UPARROW");
        var t = new _fc.c;
        t.W(_j.f.a(["ContextParent", "ContextParent", "CloseCommand"], [_fce.b.c, _fce.b.c, _fce.b.be], null, "Command", null, _fce.b.f, 1));
        t.j("TAB");
        t.k = 1;
        t.n = !1;
        t.m = !1;
        var f = new _fc.c;
        f.W(_j.f.a(["ContextParent", "ContextParent", "LeftArrowSubMenuCommand"], [_fce.b.c, _fce.b.c, _fce.b.bw], null, "Command", null, _fce.b.f, 1));
        f.j("LEFTARROW");
        var u = new _fc.c;
        u.W(_j.f.a(["ContextParent", "ContextParent", "HomeCommand"], [_fce.b.c, _fce.b.c, _fce.b.bv], null, "Command", null, _fce.b.f, 1));
        u.j("HOME");
        var e = new _fc.c;
        e.W(_j.f.a(["ContextParent", "ContextParent", "EndCommand"], [_fce.b.c, _fce.b.c, _fce.b.bu], null, "Command", null, _fce.b.f, 1));
        e.j("END");
        c.a([o, i, s, t, f, u, e]);
        n.C([c]);
        n.bc(function() {
            var t = _fce.b.b.childNodes[13].cloneNode(!0).childNodes[0];
            var n = new _fce.n(t);
            n.U(_j.f.a(["ShouldDelayFirstActivation"], [_fce.b.eO], null, "ShouldDelayFirstActivation", null, _fce.b.df, 0, null, null, !1)).U(_j.f.a(["MenuItemTemplateId"], [_fce.b.eE], null, "TemplateId", null, _fce.b.h, 1)).U(_j.f.a(["ShowCheckmark"], [_fce.b.bj], null, "FocusAriaSelectedState", null, _fce.b.cZ, 1, _fce.b.cq(), null, 0));
            n.dH(!1);
            return n
        });
        n.y("Picker.ContextMenu._tidi");
        var h = new _fce.g(_j.a.a(r, [0, 0, 0]), _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
        var l = new _j.i(r.children[0]);
        return new _j.a(r, [l, h, n]).l({
            PopupContent: h,
            MenuListView: n
        })
    }, "", _fm.e, _fce.o, function(n) {
        return new _fce.o(n, _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b), _j.b.Instance.a(String))
    }, !1, !1, !1, 0, _fce.b.a);
    var v = "Picker.DualStateContextMenuItem._tidj";
    new _j.d(v, function() {
        _fce.b.a[v] === undefined && (_fce.b.a[v] = [
            [
                [-1, 4, null, null, null, "Id", null, _fce.b.k, 0, null, null, null, _fce.k.a],
                [-1, 0, ["HideCheckMark"],
                    [_fce.b.eN], null, "IsHidden", null, _fce.b.e, 1, null, null, !0
                ],
                [-1, 5, ["ShowCheckmark"],
                    [_fce.b.bj], null, "_fce_d1", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 1, ["DataContext", "LabelTemplateId"],
                    [_fce.b.bM, _fce.b.D], null, "TemplateId", null, _fce.b.h, 1, null, null, null
                ],
                [-1, 0, ["LabelDataContext"],
                    [_fce.b.C], null, "DataContext", null, _fce.b.p, 1, null, null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[36].cloneNode(!0);
        var i = new _j.c(_j.a.a(n, [1, 0]));
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, i])
    }, "", _fm.g, _fce.p, function(n) {
        return new _fce.p(n, _j.b.Instance.a(_j.j))
    }, !1, !0, !1, 0, _fce.b.a);
    var a = "Picker.DualStateContextMenuItem";
    new _j.d(a, function() {
        _fce.b.a[a] === undefined && (_fce.b.a[a] = [
            [
                [-1, 1, ["TemplatedParent", "TemplatedParent", "CloseCommand"],
                    [_fce.b.i, _fce.b.i, _fce.b.be], null, "CloseMenuCommand", null, _fce.b.y, 1, null, null, null
                ],
                [-1, 1, ["TemplatedParent", "TemplatedParent", "PopupId"],
                    [_fce.b.i, _fce.b.i, _fce.b.dv], null, "ContextMenuPopupId", null, _fce.b.z, 1, null, null, 0
                ],
                [-1, 0, ["Command"],
                    [_fce.b.u], null, "ClickCommand", null, _fce.b.l, 1, null, null, null
                ],
                [-1, 0, ["AriaLabel"],
                    [_fce.b.t], null, "AriaLabel", null, _fce.b.n, 1, null, null, null
                ],
                [-1, 5, ["ShowCheckmark"],
                    [_fce.b.bj], null, "ms-fcl-np", null, null, 0, null, null, null
                ],
                [-1, 5, ["Command", "CanExecute"],
                    [_fce.b.u, _fce.b.eY], null, "ms-fcl-nt", null, null, 0, _fce.b.g(), null, null
                ],
                [-1, 5, ["IsSelected"],
                    [_fce.b.B], null, "ms-bgc-tl", null, null, 0, null, null, null
                ]
            ]
        ]);
        var r = _fce.b.b.childNodes[37].cloneNode(!0);
        var n = new _fce.p(r.children[0], _j.b.Instance.a(_j.j));
        n.D(13);
        n.e("ms-bgc-tl");
        var u = new _fc.g;
        var i = new _fc.c;
        i.W(_j.f.a(["ContextParent", "ClickCommand"], [_fce.b.c, _fce.b.cp], null, "Command", null, _fce.b.f, 1));
        i.j("TAB");
        i.n = !1;
        i.m = !1;
        var t = new _fc.c;
        t.W(_j.f.a(["ContextParent", "ClickCommand"], [_fce.b.c, _fce.b.cp], null, "Command", null, _fce.b.f, 1));
        t.j("TAB");
        t.k = 1;
        t.n = !1;
        t.m = !1;
        u.a([i, t]);
        n.C([u]);
        n.y("Picker.DualStateContextMenuItem._tidj");
        return new _j.a(r, [n]).l({
            FocusControl: n
        })
    }, "", _fm.g, _fce.n, function(n) {
        return new _fce.n(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var y = "Picker";
    new _j.d(y, function() {
        _fce.b.a[y] === undefined && (_fce.b.a[y] = [
            [
                [-1, 4, null, null, null, "ImageId", null, _fce.b.bb, 0, null, null, null, _fce.k.d],
                [-1, 4, null, null, null, "HoveredImageId", null, _fce.b.cv, 0, null, null, null, _fce.k.b],
                [-1, 4, null, null, null, "DisabledImageId", null, _fce.b.bo, 0, null, null, null, _fce.k.c],
                [-1, 1, ["IsPickerEnabled"],
                    [_fce.b.bY], null, "IsEnabled", null, _fce.b.x, 1, null, null, !1
                ],
                [-1, 1, ["AriaTabIndex"],
                    [_fce.b.dg], null, "AriaTabIndex", null, _fce.b.fd, 1, null, null, 0
                ],
                [-1, 1, ["PickerButtonAriaLabelledBy"],
                    [_fce.b.dj], null, "AriaLabelledBy", null, _fce.b.fc, 1, null, null, null
                ],
                [-1, 5, ["ContextMenu", "IsShown"],
                    [_fce.b.L, _fce.b.m], null, "ms-fcl-b ms-bgc-w ms-bcl-ns", null, null, 1, null, null, null
                ]
            ]
        ]);
        var i = _fce.b.b.childNodes[38].cloneNode(!0);
        var n = new _fc.b(i.children[0]);
        n.f("ms-fcl-ns ms-bgc-w ms-bcl-nta");
        n.e("ms-bgc-w ms-fcl-nd ms-bcl-nsa");
        n.g("ms-fcl-nt ms-bgc-nl");
        n.c("ms-fcl-b ms-bgc-w ms-bcl-nsa");
        n.D(26);
        n.ez(!0);
        var t = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        t.W(_j.f.a(["TemplatedParent", "ContextMenu"], [_fce.b.i, _fce.b.L], null, "MenuDataContext", null, _fce.b.bs, 1)).W(_j.f.a(["TemplatedParent", "IsPickerEnabled"], [_fce.b.i, _fce.b.bY], null, "IsEnabled", null, _fce.b.bS, 1, null, null, !1)).W(_j.f.a(["TemplatedParent", "ContextMenu", "IsShown"], [_fce.b.i, _fce.b.L, _fce.b.m], _fce.b.bH, "IsShown", _fce.b.bq, _fce.b.br, 2, null, null, !1)).W(_j.f.a(["ContextParent", "ShouldReusePopup"], [_fce.b.c, _fce.b.dl], null, "ShouldReusePopup", null, _fce.b.cO, 0, null, null, !1));
        t.bm = 28;
        t.m("Picker.ContextMenu");
        t.a = 3;
        t.b = 1;
        n.C([t]);
        n.y("Picker._tidh");
        return new _j.a(i, [n]).l({
            PickerButtonId: n
        })
    }, "", Object, _fce.k, function(n) {
        return new _fce.k(n)
    }, !1, !1, !1, 0, _fce.b.a);
    var w = "PivotMenu.DefaultOption";
    new _j.d(w, function() {
        _fce.b.a[w] === undefined && (_fce.b.a[w] = [
            [
                [-1, 0, ["Text"],
                    [_fce.b.du], null, "Text", null, _fce.b.j, 1, null, null, null
                ],
                [-1, 0, ["AriaLabel"],
                    [_fce.b.dq], null, "AriaLabel", null, _fce.b.bk, 1, null, null, null
                ],
                [-1, 0, ["IsAriaHidden"],
                    [_fce.b.dr], null, "AriaHiddenState", null, _fce.b.F, 1, null, null, !1
                ],
                [-1, 5, ["IsSelected"],
                    [_fce.b.dx], null, "ms-fwt-sb ms-fcl-tp:ms-fwt-sl ms-fcl-np ms-fcl-b-h", null, null, 0, null, null, null
                ],
                [-1, 5, ["IsVisible"],
                    [_fce.b.dt], null, "_fce_n1:_fce_o1", null, null, 0, null, null, null
                ],
                [-1, 5, ["IsTransitionEnabled"],
                    [_fce.b.ds], null, "_fce_m1", null, null, 0, null, null, null
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[39].cloneNode(!0);
        var n = new _fc.a(t.children[0]);
        n.D(12);
        return new _j.a(t, [n]).l({
            Text: n
        })
    }, "", _fce.B, _fce.y, function(n) {
        return new _fce.y(n, _j.b.Instance.a(_ff.a), _j.b.Instance.a(Boolean))
    }, !1, !1, !1, 0, _fce.b.a);
    var p = "PivotMenu";
    new _j.d(p, function() {
        _fce.b.a[p] === undefined && (_fce.b.a[p] = [
            [
                [-1, 5, ["IsSubPivot"],
                    [_fce.b.dm], null, "_fce_s1", null, null, 1, null, null, null
                ],
                [-1, 5, ["IsTextWrap"],
                    [_fce.b.dn], null, "_fce_t1", null, null, 1, null, null, null
                ],
                [-1, 5, ["OptionContainerTransitionEnabled"],
                    [_fce.b.dp], null, "_fce_p1", null, null, 1, null, null, null
                ]
            ]
        ]);
        var t = _fce.b.b.childNodes[40].cloneNode(!0);
        var n = new _j.i(_j.a.a(t, [0, 0]));
        return new _j.a(t, [n]).l({
            OptionContainer: n
        })
    }, "", Object, _fce.z, function(n) {
        return new _fce.z(n, _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.o), _j.b.Instance.a(_ff.b))
    }, !1, !1, !1, 0, _fce.b.a);
    var o = "RadioButton";
    new _j.d(o, function() {
        _fce.b.a[o] === undefined && (_fce.b.a[o] = [null, [
                [-1, 1, ["CurrentImageId"],
                    [_fce.b.s], null, "Id", null, _fce.b.k, 1, null, null, null
                ],
                [-1, 5, ["IsFirefoxOrEdge"],
                    [_fce.b.dw], null, "_fce_w1", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["Text"],
                    [_fce.b.bm], null, "Text", null, _fce.b.j, 1, null, null, null
                ],
                [-1, 5, ["IsEnabled"],
                    [_fce.b.ct], null, "ms-fcl-np ms-fcl-b-h:ms-fcl-nt", null, null, 1, null, null, null
                ]
            ]
        ]);
        var n = _fce.b.b.childNodes[41].cloneNode(!0);
        var i = new _fc.a(_j.a.a(n, [0, 1]));
        var r = new _fc.d(_j.a.a(n, [0, 0]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var t = new _j.i(n.children[0]);
        return new _j.a(n, [t, r, i]).l({
            RadioButton: t,
            RadioButtonText: i
        })
    }, "", Object, _fce.j, function(n) {
        return new _fce.j(n)
    }, !1, !1, !1, 0, _fce.b.a)
};
_fce.M.registerClass("_fce.M", _j.bV);
_fce.bi.registerClass("_fce.bi", _j.c);
_fce.h.registerClass("_fce.h", _fce.bi);
_fce.bj.registerClass("_fce.bj", _j.bV);
_fce.S.registerClass("_fce.S", _j.bV);
_fce.H.registerClass("_fce.H");
_fce.s.registerClass("_fce.s", _j.c);
_fce.a.registerClass("_fce.a", _j.c);
_fce.C.registerClass("_fce.C", _fce.a);
_fce.e.registerClass("_fce.e", _j.c);
_fce.x.registerClass("_fce.x", _fce.e);
_fce.t.registerClass("_fce.t", null, _j.bP);
_fce.G.registerClass("_fce.G", null, _j.bP);
_fce.f.registerClass("_fce.f", _fce.bj);
_fce.F.registerClass("_fce.F");
_fce.N.registerClass("_fce.N");
_fce.v.registerClass("_fce.v", _fc.b);
_fce.l.registerClass("_fce.l", _j.c);
_fce.o.registerClass("_fce.o", _fce.l);
_fce.A.registerClass("_fce.A");
_fce.bc.registerClass("_fce.bc", _j.i);
_fce.p.registerClass("_fce.p", _fce.v);
_fce.R.registerClass("_fce.R", _fce.v);
_fce.O.registerClass("_fce.O");
_fce.X.registerClass("_fce.X", _fce.v);
_fce.L.registerClass("_fce.L");
_fce.D.registerClass("_fce.D", _fce.v);
_fce.Z.registerClass("_fce.Z", null, _j.bP);
_fce.m.registerClass("_fce.m", _fce.l);
_fce.c.registerClass("_fce.c", _j.bd);
_fce.J.registerClass("_fce.J", _fc.i);
_fce.bf.registerClass("_fce.bf", _j.i);
_fce.d.registerClass("_fce.d", _j.bd);
_fce.K.registerClass("_fce.K", _fce.d);
_fce.n.registerClass("_fce.n", _fce.e);
_fce.P.registerClass("_fce.P", _fce.a);
_fce.k.registerClass("_fce.k", _j.c);
_fce.bk.registerClass("_fce.bk", _j.c);
_fce.z.registerClass("_fce.z", _fce.bk);
_fce.bl.registerClass("_fce.bl", _j.c);
_fce.y.registerClass("_fce.y", _fce.bl);
_fce.bm.registerClass("_fce.bm", _j.S);
_fce.B.registerClass("_fce.B", _fce.bm);
_fce.bg.registerClass("_fce.bg", _fce.l);
_fce.l.j.registerClass("_fce.l.j", _j.bZ);
_fce.ba.registerClass("_fce.ba", _j.bk);
_fce.w.registerClass("_fce.w", _fce.ba);
_fce.r.registerClass("_fce.r", _fce.ba);
_fce.I.registerClass("_fce.I", _fce.ba);
_fce.W.registerClass("_fce.W");
_fce.V.registerClass("_fce.V");
_fce.U.registerClass("_fce.U");
_fce.T.registerClass("_fce.T");
_fce.E.registerClass("_fce.E", _fce.ba);
_fce.bh.registerClass("_fce.bh", _fce.I);
_fce.g.registerClass("_fce.g", _j.i);
_fce.j.registerClass("_fce.j", _fc.b);
_fce.i.registerClass("_fce.i", _j.c);
_fce.q.registerClass("_fce.q", _fc.i);
_fce.bb.registerClass("_fce.bb", _j.i);
_fce.M.a = "SimulateScrollWithTouchEventsBehavior";
_fce.x.a = "IsShownOnBar";
_fce.f.d = new Sys.EventHandlerList;
_fce.f.c = null;
_fce.f.a = null;
_fce.f.b = null;
_fce.o.b = null;
_fce.A.a = null;
_fce.c.a = new _j.K("DockPanelView.Dock", _fce.be, _j.i, 4, null, _fce.c.j);
_fce.c.b = new _j.K("DockPanelView.Size", Number, _j.i, 0, null, _fce.c.j);
_fce.c.k = new _j.K("DockPanelView.FixedSize", Boolean, _j.i, !1, null, _fce.c.j);
_fce.c.d = new _j.K("DockPanelView.MinSize", Number, _j.i, -1);
_fce.c.e = new _j.K("DockPanelView.MaxSize", Number, _j.i, -1);
_fce.c.c = new _j.K("DockPanelView.Resizable", Boolean, _j.i, !1, null, _fce.c.s);
_fce.c.m = new _j.K("DockPanelView.IsSmoothResize", Boolean, _j.i, !1);
_fce.c.o = new _j.K("DockPanelView.ResizeSnapToGridSize", Number, _j.i, -1);
_fce.c.l = new _j.K("DockPanelView.HideResizeHandle", Boolean, _j.i, !1);
_fce.c.i = new _j.K("DockPanelView.IsFloat", Boolean, _j.i, !1, null, _fce.c.j);
_fce.c.h = new _j.K("DockPanelInstance", _fce.c, _j.i);
_fce.c.g = new _j.K("ResizeHandleInstance", _j.i, _j.i);
_fce.c.p = new _j.K("Mode", _fce.bd, _fce.c, 0, null, _fce.c.t);
_fce.c.n = new _j.K("DockPanelPosition", _fce.Q, _fce.c, 0, null, _fce.c.u);
_fce.c.f = !1;
_fce.a.c = !1;
_fce.a.a = {};
_fce.a.b = new _j.K("EventInfo", _ff.r, _fce.a);
_fce.a.d = new _j.K("SelectOnRightClick", Boolean, _fce.a, !1);
_fce.e.a = "#ListViewItem";
_fce.e.d = "ListView";
_fce.e.e = "ParentViewModel";
_fce.e.b = "IsItemHoveredAndIsNotSelected";
_fce.e.c = "ShowSelectedOrIsTouched";
_fce.k.d = null;
_fce.k.b = null;
_fce.k.c = null;
_fce.k.a = null;
_fce.l.c = 0;
_fce.d.a = new _j.K("InView", Boolean, _j.i);
_fce.d.b = new _j.K("ViewportOffset", Number, _j.i);
_fce.i.a = 0;
_fce.q.a = new _j.K("IsReadOnlyWithDisabledStyle", Boolean, _fc.i, !1, _fce.q.b, null);
_fce.b.b = _fce.b.cs();
_fce.b.V = null;
_fce.b.X = null;
_fce.b.Z = null;
_fce.b.Y = null;
_fce.b.W = null;
_fce.b.U = null;
_fce.b.a = {};
_fce.b.$$cctor();
Type.registerNamespace("_no");
_no.p = function() {};
_no.p.registerInterface("_no.p");
_no.q = function() {};
_no.q.registerInterface("_no.q");
_no.r = function() {};
_no.r.registerInterface("_no.r");
_no.h = function() {};
_no.h.registerInterface("_no.h");
_no.i = function() {};
_no.i.b = function(n) {
    return n + "&n=" + _ff.l.a().getUTCMilliseconds().toString(36)
};
_no.i.a = function(n, t) {
    var i = n;
    if (!i) return 0;
    _j.s.b(t, "pendingGetDataReceivedCallback");
    for (;;) {
        var u = i.indexOf("<script>");
        if (u !== -1) {
            var r = i.indexOf("</script>", u);
            if (r !== -1) {
                t(i.substring(u + 8, r));
                i = i.substr(r + 9)
            } else return i.length
        } else return i.length
    }
};
var IPendingGetManager = function() {};
IPendingGetManager.registerInterface("IPendingGetManager");
_no.e = function() {};
_no.b = function(n, t) {
    this.b = n;
    this.a = t
};
_no.b.prototype = {
    b: !1,
    a: null
};
_no.a = function(n, t, i, r, u, f) {
    this.I = Function.createDelegate(this, this.ba);
    this.O = Function.createDelegate(this, this.bo);
    this.P = Function.createDelegate(this, this.Y);
    this.L = Function.createDelegate(this, this.bc);
    this.K = Function.createDelegate(this, this.bb);
    this.M = Function.createDelegate(this, this.bg);
    this.N = Function.createDelegate(this, this.bk);
    this.l = _ff.l.b;
    this.u = _ff.l.b;
    _no.a.initializeBase(this);
    _j.s.a(n, "EventAggregator");
    _j.s.a(t, "IAppNotificationsContext");
    _j.s.a(i, "IInstrumentation");
    _j.s.a(r, "INotificationHandler");
    _j.s.a(u, "IPendingGetExecutor");
    this.r = n;
    this.f = t;
    this.D = i;
    this.j = r;
    this.h = u;
    this.p = this.T();
    this.r.b(_no.b, this.N);
    this.m = 0;
    this.x = !0;
    this.v = f;
    this.z(!0, "PendingGetManager")
};
_no.a.c = function(n) {
    return n === 440 || n === 401 ? !0 : !1
};
_no.a.e = function(n) {
    return _no.a.f(n, !1)
};
_no.a.f = function(n, t) {
    if (!n) return null;
    if (t) {
        var i = _no.a.g;
        i.lastIndex = 0;
        n = n.replace(i, function(n) {
            var t = n.charCodeAt(0).toString(16);
            return "\\u0000".substring(0, 6 - t.length) + t
        })
    }
    try {
        return eval("(" + n + ")")
    } catch (r) {
        if (t) throw r;
        return _no.a.f(n, !0)
    }
};
_no.a.prototype = {
    r: null,
    p: 3e4,
    y: !0,
    o: 0,
    R: !0,
    C: !1,
    q: !1,
    A: 0,
    i: null,
    t: null,
    E: !1,
    s: !1,
    k: 0,
    m: 0,
    w: !1,
    B: !1,
    x: !1,
    f: null,
    D: null,
    j: null,
    h: null,
    v: null,
    d: function(n) {
        this.apcl(_no.a.b.a, n)
    },
    a: function() {
        return this.eM(_no.a.b)
    },
    H: function(n) {
        this.eK(_no.a.b, n);
        return n
    },
    b: function() {
        var n = this.h.e();
        return _j.h.a(n) ? "" : n
    },
    e: function() {
        return this.s
    },
    T: function() {
        return this.f.b() ? 7500 : 3e4
    },
    c: function(n) {
        if (this.R) {
            this.h.f(this.M);
            this.z(!1, "StartPendingGet")
        }
    },
    bz: function() {
        this.z(!0, "InternalDispose");
        try {
            this.h.c()
        } catch (n) {}
        this.h.a();
        _j.S.prototype.bz.call(this)
    },
    z: function(n, t) {
        var u = this.f.c();
        if (u) {
            this.s = !n;
            this.y = !0;
            this.H(!1);
            this.g(String.format("FinishPendingGet called from: {0}, LastRequest:{1}", t, n), 0, !1);
            this.bp(n);
            if (this.f.h() && this.f.m(n)) {
                var i = _ff.l.a();
                this.t = i;
                var r = this;
                _j.m.a().a(_ff.c.c, "FinishPendingGet", function() {
                    r.bf(i)
                }, this.p)
            }
        }
    },
    bp: function(n) {
        this.h.a();
        var t = _no.a.d + "?ns=PendingRequest&ev=FinishNotificationRequest&UA=0";
        var i = this.K;
        var u = this.L;
        if (n) {
            t += "&Fn=1";
            i = null
        }
        t += this.S();
        var r = this.f.i();
        this.h.d(t, r, i, u);
        this.i && (this.i = _j.m.a().b(this.i))
    },
    Y: function() {
        if (!(this.k > 0)) {
            var n = _no.a.d + "?ns=PendingRequest&ev=PendingNotificationRequest&UA=0";
            n += this.S();
            n += this.bd();
            n += this.be();
            n += this.f.j("PendingNotificationRequest");
            this.g("Start PendingGetChannel", 0, !1);
            this.h.g(n)
        }
    },
    bg: function(n) {
        this.Z();
        var t = null;
        try {
            t = _no.a.e(n)
        } catch (r) {
            this.X(n, r, "HandleJsonResponse")
        }
        if (t) {
            var i = this;
            this.D.a(function() {
                i.bh(t)
            }, _ff.c.e, "PendingGetManager.HandleJsonResponse", !0)
        }
    },
    bi: function(n) {
        var t = n;
        if (t.data) switch (t.data) {
            case "update":
                this.Z();
                this.g("Update", 0, !0);
                t.mark && this.Q(t.mark, !0);
                break;
            case "alive0":
                this.g("Alive_false", 0, !1);
                this.H(!1);
                break;
            case "alive1":
                this.g("Alive_true", 0, !1);
                this.H(!0);
                if (t.mark) {
                    this.Q(t.mark, !1);
                    this.m = 0
                }
                break;
            case "noerr":
                this.g("NoError", 0, !1);
                this.q = !1;
                break;
            case "err":
                this.q = !0;
                this.g("Error: " + t.ex, 1, !1);
                this.bj();
                break;
            case "restart":
                this.g("Restart", 0, !1);
                this.G("Restart");
                break;
            case "reinitSubscription":
                this.g("ReinitSubscription", 1, !1);
                this.j.k();
                break;
            case "validateSubscriptions":
                var i = this.j.j(t.subscriptionIds);
                this.g(String.format("ValidateSubscriptions:{0}", i.join("|")), 0, !1);
                break;
            case "backendConnectionDropped":
                this.m++;
                break;
            default:
                break
        }
    },
    bh: function(n) {
        if (n) {
            var t;
            if (_j.C.a(n.length)) {
                t = n;
                this.V(t)
            } else
                for (var i = 0; i < n.length; i++) {
                    t = n[i];
                    t && this.V(t)
                }
        }
    },
    V: function(n) {
        if (n.id === "pg") this.bi(n);
        else if (n.id === "ReloadAllNotification") {
            _j.e.b(_ff.c.c, "Server.ReloadAll");
            this.g("Recieved ReloadAll Notification from server", 1, !1);
            this.j.c(!1, "Server")
        } else {
            this.m++;
            this.j.d(n)
        }
    },
    Q: function(n, t) {
        if (this.m.toString() !== n) {
            _j.e.b(_ff.c.c, "CheckMarkMisMatch.ReloadAll");
            this.g(String.format("Generating ReloadAll Notification, ClientMark: {0}, ServerMark: {1}", this.m, n), 1, !1);
            this.j.c(!0, "CheckMarkMisMatch");
            t && this.G("CheckMarkMisMatch")
        }
    },
    bk: function(n) {
        n.b ? this.bl(n.a) : this.bn(n.a)
    },
    bl: function(n) {
        var t = this.k > 0;
        this.k++;
        this.s && (t || this.z(!1, "PausePendingGet"))
    },
    bn: function(n) {
        this.k--;
        if (this.k <= 0) {
            if (!this.s) return;
            this.k = 0;
            this.G("resume")
        }
    },
    S: function() {
        return _no.a.a ? "&" + "cid" + "=" + _no.a.a : ""
    },
    bd: function() {
        return this.f.d() ? "&" + "ecnsq" + "=" + "1" : ""
    },
    be: function() {
        if (this.f.f()) return "&" + "brwnm" + "=" + "chrome";
        else if (this.f.g()) return "&" + "brwnm" + "=" + "safari";
        return ""
    },
    bc: function(n, t) {
        this.t = _ff.l.a();
        var i = t ? t.message : "";
        this.g(String.format("FinishPendingGet_ErrorCallback_{0}_{1}", n, i), 1, !1);
        this.W(n)
    },
    bb: function(n, t) {
        this.t = _ff.l.a();
        if (t) {
            this.p = this.T();
            var i = null;
            if (!_j.h.b(t)) try {
                i = _no.a.e(t)
            } catch (u) {
                this.X(t, u, "FinishPendingGet")
            }
            if (i && "syncFnshRq" in i) {
                this.bm(i);
                this.B = !1;
                this.x = !0;
                if (!this.k) {
                    if (this.o || this.w) {
                        this.g(String.format("Generating ReloadAll Notification, FinishRetryCount={0}, ReloadNeeded={1}", this.o, this.w), 1, !1);
                        this.o = 0;
                        this.w = !1;
                        _j.e.b(_ff.c.c, "Disconnected.ReloadAll");
                        this.j.c(!0, "Disconnected")
                    }
                    this.E = i.syncFnshRq === 1;
                    this.g("FinishPendingGet_Success", 0, !1);
                    if (this.l === _ff.l.b) {
                        if (!this.C) {
                            this.C = !0;
                            var r = this;
                            _j.m.a().a(_ff.c.c, "Pending-get activated", function() {
                                r.r.d(_no.e, new _no.e)
                            }, 1)
                        }
                        this.l = _ff.l.a();
                        _j.m.a().a(_ff.c.c, "SendPendingGetRequest", this.P, 1e4)
                    } else this.Y();
                    this.r.a(_no.f, new _no.f);
                    this.E ? this.n() : _j.m.a().a(_ff.c.c, "RetryPendingGet", this.O, 28e3)
                }
            } else if (_no.a.c(n) || this.f.l(t)) this.U();
            else if (!this.f.a(t, "PendingGetNonFinish", _ff.c.c))
                if (this.o >= 2) this.n();
                else {
                    this.o++;
                    this.c("FinishPendingRequestCallback")
                }
        } else this.W(n)
    },
    X: function(n, t, i) {
        if (!n || !this.f.a(n.toString(), i, _ff.c.c)) var r = String.format('There was an exception when deserializing the notification, Source: "{0}", Exception: "{1}"', i, t.message)
    },
    bm: function(n) {
        var t = n ? n.cid : null;
        _no.a.a ? t !== _no.a.a && _j.e.c(_ff.c.c, "PendingGetManager.FinishPendingRequestCallback client has a channel id and it's different from the channel returned by the server. This isn't expected. ClientChannelId: {0}, ServerChannelId: {1}", _no.a.a, t) : _j.h.a(t) ? _j.e.c(_ff.c.c, "PendingGetManager.FinishPendingRequestCallback pending get didn't have a channel id and server didn't generate a new one. This isn't expected. Response Received: {0}", JsonParser.serialize(n)) : _no.a.a = t
    },
    ba: function() {
        if (!this.bM && !this.y) {
            _ff.l.d(this.l, _ff.l.b) && (this.l = _ff.l.a());
            var n = _ff.l.c(_ff.l.a(), this.l);
            if (n >= 6e4 || !this.a()) {
                this.g(String.format("CheckPendingGetState, Elapsedtime:{0}, RequestAlive:{1}", n, this.a()), 1, !1);
                this.w = !0;
                this.c("CheckPendingGetState")
            } else this.n()
        }
    },
    n: function() {
        this.y = !1;
        this.i && (this.i = _j.m.a().b(this.i));
        this.i = _j.m.a().a(_ff.c.c, "CheckPendingGetState", this.I, 6e4)
    },
    Z: function() {
        this.l = _ff.l.a();
        this.n()
    },
    bo: function() {
        if (!this.bM)
            if (this.a()) this.n();
            else {
                this.q;
                this.c("RetryPendingGet")
            }
    },
    W: function(n) {
        if (_no.a.c(n)) this.U();
        else if (n === 449 && this.x) {
            this.x = !1;
            this.c("HandlePendingGetError:statusCode:RetryWith")
        } else this.n()
    },
    bj: function() {
        if (this.y) return;
        else {
            var n = _ff.l.a();
            this.u === _ff.l.b && (this.u = n);
            _ff.l.c(n, this.u) <= 3e4 ? this.A++ : this.A = 0;
            this.u = n;
            this.q = !0;
            this.A < 2 && this.c("HandlePendingGetServerError")
        }
    },
    U: function() {
        var n = this.f.e();
        if (!n && this.B) return;
        else n && this.n();
        this.B = !0;
        this.f.k()
    },
    G: function(n) {
        this.q = !1;
        this.c("RestartPendingGet_" + n)
    },
    bf: function(n) {
        if (_ff.l.d(n, this.t)) {
            try {
                this.h.b()
            } catch (t) {}
            this.p = Math.min(2 * this.p, 6e4);
            this.c("HandleFinishRequestNonIE")
        }
    },
    g: function(n, t, i) {
        if (this.v) {
            if (i && !this.v.b()) return;
            this.v.a(n, t)
        }
    }
};
_no.c = function() {};
_no.c.registerInterface("_no.c");
_no.m = function() {};
_no.m.registerInterface("_no.m");
_no.j = function() {
    _no.j.initializeBase(this)
};
_no.j.prototype = {
    folderId: null,
    parentFolderId: null,
    itemCount: 0,
    unreadCount: 0
};
_no.k = function() {};
_no.k.prototype = {
    id: null,
    type: null,
    FolderId: null,
    clientGenerated: !1,
    pendingGetGenerated: !1,
    reason: null,
    forceSynchronousProcessing: !1,
    EventType: 0,
    toString: function() {
        return _j.h.c("ID={0}, EventType={1}, ClientGenerated={2}, ForceSynchronous={3}", this.id, this.EventType, this.clientGenerated, this.forceSynchronousProcessing)
    }
};
_no.n = function() {
    _no.n.initializeBase(this)
};
_no.n.prototype = {
    refreshAppCache: !1
};
_no.o = function() {
    _no.o.initializeBase(this)
};
_no.o.prototype = {
    data: null,
    mark: null,
    ex: null,
    subscriptionIds: null
};
_no.l = function() {
    _no.l.initializeBase(this)
};
_no.l.prototype = {
    shouldGetReminders: !1
};
_no.d = function(n, t) {
    this.f = null;
    this.m = n;
    this.l = t
};
_no.d.b = function(n, t) {
    _no.d.a || (_no.d.a = new _no.d(n, t));
    return _no.d.a
};
_no.d.prototype = {
    f: null,
    m: null,
    l: null,
    g: function() {
        return this.e().g()
    },
    i: function() {
        return this.e().i()
    },
    h: function() {
        return this.e().h()
    },
    e: function() {
        this.f || (this.f = new _no.g(this.m, this.l));
        return this.f
    },
    u: function(n) {
        this.f && this.f.dispose();
        this.f = n;
        return n
    },
    d: function(n) {
        this.e().d(n)
    },
    c: function(n, t) {
        this.e().c(n, t)
    },
    k: function() {
        this.e().k()
    },
    j: function(n) {
        return this.e().j(n)
    },
    n: function(n) {
        this.e().n(n)
    },
    s: function(n) {
        this.e().s(n)
    },
    o: function(n, t, i, r) {
        this.e().o(n, t, i, r)
    },
    q: function(n) {
        return this.e().q(n)
    },
    a: function(n, t, i, r, u) {
        this.e().a(n, t, i, r, u)
    },
    r: function(n) {
        this.e().r(n)
    },
    b: function(n, t) {
        this.e().b(n, t)
    },
    t: function(n) {
        this.e().t(n)
    },
    p: function(n) {
        return this.e().p(n)
    },
    dispose: function() {
        if (this.e()) {
            this.e().dispose();
            this.u(null)
        }
    }
};
_no.g = function(n, t, i, r, u) {
    _no.g.initializeBase(this);
    _j.s.a(n, "IInstrumentation");
    this.K = n;
    this.H = t;
    this.C = i ? i : {};
    this.B = r ? r : {};
    this.E = u ? u : {}
};
_no.g.a = function(n, t, i) {
    var u = "Notification_" + t.e;
    var r = function() {
        t.a(n)
    };
    var f = n.forceSynchronousProcessing ? 2 : t.d;
    switch (f) {
        case 0:
            t.c.b(t.b, u, r);
            break;
        case 1:
            t.c.a(t.b, u, r);
            break;
        case 2:
            i.a(r, _ff.c.e, u, !0);
            break;
        default:
            throw Error.notImplemented(f + " is not supported.");
    }
};
_no.g.prototype = {
    C: null,
    B: null,
    E: null,
    H: null,
    K: null,
    g: function() {
        return this.C
    },
    i: function() {
        return this.B
    },
    h: function() {
        return this.E
    },
    d: function(n) {
        if (!n) throw Error.argumentNull("notification");
        if (this.q(n.id))
            for (var i = this.C[n.id], t = 0; t < i.length; t++) {
                var r = i[t];
                _no.g.a(n, r, this.K)
            }
        this.H && this.H.a(n)
    },
    k: function() {
        var t = this.B;
        for (var i in t) {
            var r = {
                key: i,
                value: t[i]
            };
            var n = r.value;
            n.f();
            this.o(n.a(), n.b(), "ReinitializeSubscriptions", !1)
        }
    },
    j: function(n) {
        var u = [];
        if (n) {
            for (var e = {}, t = 0; t < n.length; ++t) n[t] && (e[n[t]] = !0);
            var o = this.B;
            for (var f in o) {
                var r = {
                    key: f,
                    value: o[f]
                };
                var i = r.value;
                if (i.k() && !(r.key in e)) {
                    u.push(r.key);
                    i.f();
                    this.o(i.a(), i.b(), "ReinitializeMissingSubscriptions", !1)
                }
            }
        }
        return u
    },
    c: function(n, t) {
        var f = this.B.HierarchyNotification;
        f && this.o(f.a(), "", t, n);
        var r = this.B;
        for (var u in r) {
            var e = {
                key: u,
                value: r[u]
            };
            var i = e.value;
            i.a() !== "HierarchyNotification" && this.o(i.a(), i.b(), t, n)
        }
    },
    n: function(n) {
        var t = 0;
        n in this.E && this.E[n] && (t = this.E[n]);
        if (t < 3) {
            var i = this;
            _j.m.a().a(_ff.c.e, "RetrySubscription", function() {
                i.I || i.T(n)
            }, 6e4);
            this.E[n] = ++t
        }
    },
    s: function(n) {
        n in this.E && delete this.E[n]
    },
    T: function(n) {
        var t = this.B[n];
        if (t) {
            t.f();
            this.o(n, t.b(), "RetrySubscription", !1)
        }
    },
    o: function(n, t, i, r) {
        var u = new _no.k;
        u.id = n;
        u.FolderId = t;
        u.EventType = "Reload";
        u.pendingGetGenerated = r;
        u.reason = i;
        this.d(u)
    },
    q: function(n) {
        return n in this.C
    },
    a: function(n, t, i, r, u) {
        if (!r) throw Error.argumentNull("callback");
        if (_j.h.a(n)) throw Error.argumentNull("subscriptionId");
        if (_j.h.a(i)) throw Error.argumentNull("source");
        this.q(n) || (this.C[n] = []);
        Array.add(this.C[n], new _no.g.b(t, i, r, u, _j.m.a().B()))
    },
    r: function(n) {
        this.B[n.a()] = n
    },
    b: function(n, t) {
        if (!t) throw Error.argumentNull("callback");
        if (_j.h.a(n)) throw Error.argumentNull("subscriptionId");
        if (this.q(n)) {
            for (var r = this.C[n], u = -1, i = 0; i < r.length; i++)
                if (r[i].a === t) {
                    u = i;
                    break
                }
            if (u < 0) return;
            Array.removeAt(r, u);
            if (!this.p(n)) {
                delete this.C[n];
                this.J(n)
            }
        }
    },
    t: function(n) {
        if (_j.h.a(n)) throw Error.argumentNull("subscriptionId");
        if (this.q(n)) {
            Array.clear(this.C[n]);
            delete this.C[n]
        }
        this.J(n)
    },
    p: function(n) {
        if (_j.h.a(n)) throw Error.argumentNull("subscriptionId");
        return this.q(n) ? this.C[n].length : 0
    },
    D: function() {
        this.C = null;
        this.E = null;
        this.B = null
    },
    J: function(n) {
        delete this.B[n]
    }
};
_no.g.b = function(n, t, i, r, u) {
    this.b = n;
    this.e = t;
    this.a = i;
    this.d = r;
    this.c = u
};
_no.g.b.prototype = {
    b: null,
    e: null,
    a: null,
    d: 0,
    c: null
};
_no.f = function() {};
_no.e.registerClass("_no.e");
_no.b.registerClass("_no.b");
_no.a.registerClass("_no.a", _j.S, IPendingGetManager, Sys.IDisposable);
_no.k.registerClass("_no.k");
_no.j.registerClass("_no.j", _no.k);
_no.j.prototype.toString = _no.k.prototype.toString;
_no.n.registerClass("_no.n", _no.k);
_no.n.prototype.toString = _no.k.prototype.toString;
_no.o.registerClass("_no.o", _no.k);
_no.o.prototype.toString = _no.k.prototype.toString;
_no.l.registerClass("_no.l", _no.k);
_no.l.prototype.toString = _no.k.prototype.toString;
_no.d.registerClass("_no.d", null, _no.c, Sys.IDisposable);
_no.g.registerClass("_no.g", _j.bZ, _no.c, Sys.IDisposable);
_no.g.b.registerClass("_no.g.b");
_no.f.registerClass("_no.f");
_no.a.b = new _j.K("IsRequestAlive", Boolean, _no.a);
_no.a.g = new RegExp("[-­؀-؄܏឴឵‌-‏\u2028- ⁠-⁯﻿￰-￿]", "g");
_no.a.a = null;
_no.a.d = "ev.owa2";
_no.d.a = null;
Type.registerNamespace("_a");
_a.cM = function() {};
_a.cM.b = function(n) {
    return n ? n.usedJSHeapSize / n.jsHeapSizeLimit : -1
};
_a.cM.a = function(n) {
    return !!n && !!(n.usedJSHeapSize % 1e3)
};
_a.iP = function() {};
_a.iP.prototype = {
    accuracyHigh: 0,
    accuracyLow: 1
};
_a.iP.registerEnum("_a.iP", !1);
var IMailInlineComposeFocusEvent = function() {};
IMailInlineComposeFocusEvent.registerInterface("IMailInlineComposeFocusEvent");
_a.fK = function() {};
_a.fK.registerInterface("_a.fK");
_a.kK = function() {};
_a.kK.registerInterface("_a.kK");
var IActionBase = function() {};
IActionBase.registerInterface("IActionBase");
_a.eY = function() {};
_a.eY.registerInterface("_a.eY");
_a.ct = function() {};
_a.ct.registerInterface("_a.ct");
_a.cO = function() {};
_a.cO.prototype = {
    fDel: 0,
    fDraft: 1,
    fInbox: 2,
    fJunk: 3,
    fSent: 4,
    mArch: 5,
    mCompose: 6,
    mCopy: 7,
    mDel: 8,
    mEmptyFolder: 9,
    mFlag: 10,
    mFolder: 11,
    mHelp: 12,
    mLogo: 13,
    mMove: 14,
    mNotif: 15,
    mPanel: 16,
    mPin: 17,
    mPivot: 18,
    mRead: 19,
    mrpExit: 20,
    mSearch: 21,
    mSkype: 22,
    mSweep: 23,
    mTheme: 24,
    resize: 25,
    nToOther: 26,
    nInitLoad: 27,
    nrPaneOnOff: 28
};
_a.cO.registerEnum("_a.cO", !1);
_a.kr = function() {};
_a.kr.registerInterface("_a.kr");
_a.kl = function() {};
_a.kl.registerInterface("_a.kl");
_a.km = function() {};
_a.km.registerInterface("_a.km");
_a.ff = function() {};
_a.ff.prototype = {
    lineUp: 1,
    lineDown: 2,
    pageUp: 3,
    pageDown: 4,
    home: 5,
    end: 6,
    lineAndGroupHeaderUp: 7,
    lineAndGroupHeaderDown: 8
};
_a.ff.registerEnum("_a.ff", !1);
var IExtensibilityShowHideEvent = function() {};
IExtensibilityShowHideEvent.registerInterface("IExtensibilityShowHideEvent");
_a.dL = function() {};
_a.dL.registerInterface("_a.dL");
_a.fc = function() {};
_a.fc.prototype = {
    none: 0,
    enabled: 1,
    soundEnabled: 2
};
_a.fc.registerEnum("_a.fc", !0);
_a.iM = function() {};
_a.iM.registerInterface("_a.iM");
_a.kC = function() {};
_a.kC.registerInterface("_a.kC");
_a.kD = function() {};
_a.kD.registerInterface("_a.kD");
_a.kL = function() {};
_a.kL.registerInterface("_a.kL");
_a.kW = function() {};
_a.kW.registerInterface("_a.kW");
_a.kk = function() {};
_a.kk.registerInterface("_a.kk");
_a.fC = function() {};
_a.fC.registerInterface("_a.fC");
_a.fL = function() {};
_a.fL.registerInterface("_a.fL");
_a.fD = function() {};
_a.fD.registerInterface("_a.fD");
_a.ew = function() {};
_a.ew.prototype = {
    created: 0,
    submitted: 1,
    executing: 2,
    completed: 3
};
_a.ew.registerEnum("_a.ew", !1);
_a.fq = function() {};
_a.fq.prototype = {
    none: 0,
    persistReloadGenerated: 1,
    persistNoReload: 2,
    notReady: 3,
    requestNULL: 4,
    rejectedListViewAlreadySynced: 5,
    rejectedActionQueueNotEmpty: 6,
    requestFailed: 7,
    responseEmpty: 8,
    timeZoneConvertorNotInitialized: 9,
    exception: 10
};
_a.fq.registerEnum("_a.fq", !1);
_a.fr = function() {};
_a.fr.prototype = {
    none: 0,
    generatedForMail: 1,
    generatedForMailWithNonMailCurrentModule: 2,
    noChangeForMailModule: 3
};
_a.fr.registerEnum("_a.fr", !1);
_a.fp = function() {};
_a.fp.prototype = {
    none: 0,
    altComplete: 1,
    syncComplete: 2,
    onInactive: 3
};
_a.fp.registerEnum("_a.fp", !1);
_a.fB = function() {};
_a.fB.registerInterface("_a.fB");
_a.cR = function() {};
_a.cR.prototype = {
    updated: 1,
    deleted: 2,
    refreshed: 4
};
_a.cR.registerEnum("_a.cR", !1);
_a.iG = function() {};
_a.iG.prototype = {
    bootStrap: 0,
    palStart: 10,
    jQueryLoad: 20,
    startingEvt: 30,
    procUserConfig: 40,
    userConfigEvt: 50,
    rendUI: 60,
    uiReadyEvt: 70,
    startedEvt: 80,
    bootCompleteEvt: 90,
    off: 100
};
_a.iG.registerEnum("_a.iG", !1);
_a.M = function() {};
_a.M.prototype = {
    mail: 0,
    calendar: 1,
    people: 2,
    tasks: 3,
    options: 4,
    photoHub: 5,
    todos: 6,
    oneDrive: 7,
    groupMail: 8,
    oxford: 9,
    bookings: 10,
    files: 11
};
_a.M.registerEnum("_a.M", !1);
_a.bF = function() {};
_a.bF.prototype = {
    none: 0,
    join: 1,
    leave: 2,
    requestMembership: 3,
    subscribe: 4,
    unsubscribe: 5,
    edit: 6,
    loadGroup: 7,
    addMembers: 8,
    goToMail: 9,
    goToPeople: 10,
    goToCalendar: 11,
    pin: 12,
    unpin: 13,
    editPhoto: 14,
    goToNotebook: 15,
    getMembers: 16,
    goToFiles: 17,
    editConnectors: 18,
    goToPlanner: 19,
    goToSite: 20,
    subscribeAllMessage: 21,
    subscribeReplyAndCalendar: 22,
    subscribeReplyOnly: 23,
    unsubscribeAll: 24,
    changeSubscription: 25,
    emailSettings: 26
};
_a.bF.registerEnum("_a.bF", !1);
_a.jk = function() {};
_a.jk.prototype = {
    compatible: 0,
    needsToUpgrade: 1,
    needsToDowngrade: 2
};
_a.jk.registerEnum("_a.jk", !1);
_a.iv = function() {};
_a.iv.prototype = {
    none: 0,
    failedToPrepare: 1,
    itemIsUnplayable: 2,
    unableToResolveDataIDToFileURL: 3,
    duplicateCall: 4,
    paused: 5
};
_a.iv.registerEnum("_a.iv", !1);
_a.im = function() {};
_a.im.prototype = {
    none: 0,
    remoteWipe: 1
};
_a.im.registerEnum("_a.im", !1);
_a.iq = function() {};
_a.iq.prototype = {
    none: 0,
    clientStore: 1,
    PAL: 2
};
_a.iq.registerEnum("_a.iq", !1);
_a.ir = function() {};
_a.ir.prototype = {
    invalidOperationType: 0,
    savePersona: 1,
    deletePersona: 2
};
_a.ir.registerEnum("_a.ir", !1);
_a.is = function() {};
_a.is.prototype = {
    notSupported: 0,
    notAdminEnabled: 1,
    adminEnabled: 2,
    adminRejected: 4
};
_a.is.registerEnum("_a.is", !1);
_a.ez = function() {};
_a.ez.prototype = {
    unexpecteD_ERROR: -1,
    invaliD_CREDENTIALS: 1,
    invaliD_ENDPOINT: 2,
    credentialS_REJECTED_BY_SERVER: 3,
    unexpecteD_SERVER_RESPONSE: 4,
    missinG_REQUIRED_COOKIES: 5,
    connectioN_INIT_FAILED: 6,
    unknowN_AUTH_METHOD: 7,
    unsupporteD_AUTH_METHOD: 8,
    credentialS_EXPIRED: 9,
    unsupporteD_EXCHANGE_VERSION: 10,
    incorrecT_DEVICE_TIME: 11,
    credentialS_REQUIRED: 12
};
_a.ez.registerEnum("_a.ez", !1);
_a.iw = function() {};
_a.iw.prototype = {
    newData: 1,
    noData: 2,
    failed: 3
};
_a.iw.registerEnum("_a.iw", !1);
_a.jR = function() {};
_a.ix = function() {};
_a.ix.prototype = {
    none: 0,
    partialSyncWebContext: 1,
    fullSyncWebContext: 2,
    fullSyncPalContext: 3
};
_a.ix.registerEnum("_a.ix", !1);
_a.iC = function() {};
_a.iC.prototype = {
    unknown: 0,
    iPhone: 1,
    iPad: 2,
    android: 3,
    windows8: 4
};
_a.iC.registerEnum("_a.iC", !1);
_a.iD = function() {};
_a.iD.prototype = {
    reset: 0,
    retry: 1
};
_a.iD.registerEnum("_a.iD", !1);
_a.iE = function() {};
_a.iE.prototype = {
    unknown: 0,
    portrait: 1,
    landscape: 2
};
_a.iE.registerEnum("_a.iE", !1);
_a.io = function() {};
_a.io.prototype = {
    none: 0,
    adalEnabled: 1,
    consumer: 2
};
_a.io.registerEnum("_a.io", !1);
_a.ex = function() {};
_a.ex.prototype = {
    none: 0,
    nabContactSyncSupported: 1
};
_a.ex.registerEnum("_a.ex", !1);
_a.cv = function() {};
_a.cv.prototype = {
    none: 0,
    backgroundFetch: 1,
    clientStates: 2,
    rateMe: 4,
    perfDataNodes: 8,
    launchTimeResets: 16,
    reloadUpdates: 32,
    feedback: 64,
    changeClientState: 128,
    extraUrlParams: 256,
    deleteWebApplicationCache: 512,
    backgroundSync: 1024,
    presentNotificationUnformatted: 2048,
    lastInactiveTime: 4096,
    touchId: 8192
};
_a.cv.registerEnum("_a.cv", !1);
_a.iF = function() {};
_a.iF.prototype = {
    none: 0,
    isPushNotificationDeeplinkSupported: 1,
    isGetRegistrationErrorSupported: 2
};
_a.iF.registerEnum("_a.iF", !1);
_a.iH = function() {};
_a.iH.prototype = {
    none: 0,
    trackInfoEventSupported: 1
};
_a.iH.registerEnum("_a.iH", !1);
_a.fx = function() {};
_a.fx.prototype = {
    none: 0,
    openDocumentExSupported: 1,
    setOneTimeAllowedUrlSupported: 2
};
_a.fx.registerEnum("_a.fx", !1);
_a.iU = function() {};
_a.iU.prototype = {
    none: 0
};
_a.iU.registerEnum("_a.iU", !1);
_a.iX = function() {};
_a.iX.prototype = {
    none: 0
};
_a.iX.registerEnum("_a.iX", !1);
_a.jr = function() {};
_a.jr.prototype = {
    none: 0
};
_a.jr.registerEnum("_a.jr", !1);
_a.jx = function() {};
_a.jx.prototype = {
    none: 0
};
_a.jx.registerEnum("_a.jx", !1);
_a.dQ = function() {};
_a.dQ.prototype = {
    none: 0,
    calendarReminderOptions: 1,
    emailOptions: 2,
    deprecateD_SuppressWhileOof: 4
};
_a.dQ.registerEnum("_a.dQ", !1);
_a.iJ = function() {};
_a.iJ.prototype = {
    none: 0,
    unableToCreateDataID: 1,
    unknownDataIDType: 2,
    unableToAuthenticate: 3,
    unableToSaveFile: 4,
    noConnection: 5,
    serverError: 6,
    userCancel: 7,
    duplicateCall: 8,
    unableToDownload: 9
};
_a.iJ.registerEnum("_a.iJ", !1);
_a.iK = function() {};
_a.iK.prototype = {
    notSupported: 0,
    notEncrypted: 1,
    encryptionInProgress: 2,
    encrypted: 3
};
_a.iK.registerEnum("_a.iK", !1);
_a.fA = function() {};
_a.fA.prototype = {
    none: 0,
    business: 1,
    consumer: 2
};
_a.fA.registerEnum("_a.fA", !1);
_a.iQ = function() {};
_a.iQ.prototype = {
    locatioN_SERVICE_ERROR: 0,
    locatioN_START_ERROR: 1,
    locatioN_SERVICE_DENIED: 2,
    locatioN_SERVICE_TEMP_UNAVAILABLE: 3
};
_a.iQ.registerEnum("_a.iQ", !1);
_a.iV = function() {};
_a.iV.prototype = {
    none: 0,
    permanent: 1,
    transient: 2
};
_a.iV.registerEnum("_a.iV", !1);
_a.jg = function() {};
_a.jg.prototype = {
    none: 0,
    unableToFindAnActivity: 1,
    unableToFindTheDataID: 2,
    unableToFindUIActivity: 3
};
_a.jg.registerEnum("_a.jg", !1);
_a.jh = function() {};
_a.jh.prototype = {
    unableToOpenFile: 0,
    applicationInSnapView: 1
};
_a.jh.registerEnum("_a.jh", !1);
_a.jo = function() {};
_a.jo.prototype = {
    documents: 0,
    pictures: 1
};
_a.jo.registerEnum("_a.jo", !1);
_a.jp = function() {};
_a.jp.prototype = {
    rateNow: 0,
    rateLater: 1,
    rateNever: 2
};
_a.jp.registerEnum("_a.jp", !1);
_a.jw = function() {};
_a.jw.prototype = {
    text: 0,
    uri: 1,
    HTML: 2,
    storageItems: 3,
    bitmap: 4
};
_a.jw.registerEnum("_a.jw", !1);
_a.fj = function() {};
_a.fj.prototype = {
    none: 0,
    reminderList: 1,
    shareCompose: 2,
    calendar: 3,
    people: 4
};
_a.fj.registerEnum("_a.fj", !1);
_a.fX = function() {};
_a.fX.prototype = {
    none: 0,
    auto: 1,
    accept: 2,
    user: 4,
    fatal: 8
};
_a.fX.registerEnum("_a.fX", !0);
_a.kb = function() {};
_a.kb.registerInterface("_a.kb");
_a.q = function() {};
_a.q.registerInterface("_a.q");
_a.cc = function() {};
_a.cc.registerInterface("_a.cc");
_a.kf = function() {};
_a.kf.registerInterface("_a.kf");
_a.eO = function() {};
_a.eO.registerInterface("_a.eO");
_a.eh = function() {};
_a.eh.registerInterface("_a.eh");
_a.z = function() {};
_a.z.registerInterface("_a.z");
var IContext = function() {};
IContext.registerInterface("IContext");
_a.cG = function() {};
_a.cG.registerInterface("_a.cG");
_a.cL = function() {};
_a.cL.registerInterface("_a.cL");
_a.kv = function() {};
_a.x = function() {};
_a.x.registerInterface("_a.x");
_a.eQ = function() {};
_a.eQ.registerInterface("_a.eQ");
_a.fE = function() {};
_a.fE.registerInterface("_a.fE");
_a.e = function() {};
_a.e.registerInterface("_a.e");
_a.fF = function() {};
_a.fF.registerInterface("_a.fF");
_a.kw = function() {};
_a.kw.registerInterface("_a.kw");
_a.cy = function() {};
_a.cy.registerInterface("_a.cy");
_a.fG = function() {};
_a.fG.registerInterface("_a.fG");
_a.bv = function() {};
_a.bv.registerInterface("_a.bv");
_a.eS = function() {};
_a.eS.registerInterface("_a.eS");
_a.eX = function() {};
_a.eX.registerInterface("_a.eX");
_a.kU = function() {};
_a.kU.registerInterface("_a.kU");
_a.ko = function() {};
_a.ko.registerInterface("_a.ko");
_a.E = function() {};
_a.E.registerInterface("_a.E");
_a.kI = function() {};
_a.ki = function() {};
_a.ki.registerInterface("_a.ki");
_a.jZ = function() {};
_a.jZ.registerInterface("_a.jZ");
_a.ka = function() {};
_a.ka.registerInterface("_a.ka");
_a.kc = function() {};
_a.kc.registerInterface("_a.kc");
_a.kd = function() {};
_a.kd.registerInterface("_a.kd");
_a.kg = function() {};
_a.kg.registerInterface("_a.kg");
_a.kh = function() {};
_a.kh.registerInterface("_a.kh");
_a.kn = function() {};
_a.kn.registerInterface("_a.kn");
_a.kp = function() {};
_a.kp.registerInterface("_a.kp");
_a.kq = function() {};
_a.kq.registerInterface("_a.kq");
_a.ks = function() {};
_a.ks.registerInterface("_a.ks");
_a.kt = function() {};
_a.kt.registerInterface("_a.kt");
_a.ku = function() {};
_a.ku.registerInterface("_a.ku");
_a.kx = function() {};
_a.kx.registerInterface("_a.kx");
_a.ky = function() {};
_a.ky.registerInterface("_a.ky");
_a.kz = function() {};
_a.kz.registerInterface("_a.kz");
_a.kA = function() {};
_a.kA.registerInterface("_a.kA");
_a.kB = function() {};
_a.kB.registerInterface("_a.kB");
_a.cH = function() {};
_a.cH.registerInterface("_a.cH");
_a.kM = function() {};
_a.kM.registerInterface("_a.kM");
_a.kN = function() {};
_a.kN.registerInterface("_a.kN");
_a.kO = function() {};
_a.kO.registerInterface("_a.kO");
_a.kP = function() {};
_a.kP.registerInterface("_a.kP");
_a.kR = function() {};
_a.kR.registerInterface("_a.kR");
_a.kS = function() {};
_a.kS.registerInterface("_a.kS");
_a.kV = function() {};
_a.kV.registerInterface("_a.kV");
_a.kX = function() {};
_a.kX.registerInterface("_a.kX");
_a.eP = function() {};
_a.eP.registerInterface("_a.eP");
_a.kJ = function() {};
_a.kJ.registerInterface("_a.kJ");
_a.kQ = function() {};
_a.kQ.registerInterface("_a.kQ");
_a.kj = function() {};
_a.kj.registerInterface("_a.kj");
_a.ke = function() {};
_a.ke.registerInterface("_a.ke");
_a.iS = function(n, t) {
    this.count = n;
    this.buckets = t
};
_a.iT = function() {};
_a.iT.prototype = {
    OK: 0,
    okCancel: 1,
    yesNo: 2,
    cancelOK: 3
};
_a.iT.registerEnum("_a.iT", !1);
_a.fI = function() {};
_a.fI.registerInterface("_a.fI");
_a.eW = function() {};
_a.eW.registerInterface("_a.eW");
_a.jU = function() {};
_a.jU.prototype = {
    hour: 1,
    minute: 2,
    second: 3,
    AMPM: 4,
    year: 5,
    month: 6,
    day: 7
};
_a.jU.registerEnum("_a.jU", !1);
_a.bT = function() {};
_a.bT.prototype = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
};
_a.bT.registerEnum("_a.bT", !1);
_a.bJ = function() {};
_a.bJ.prototype = {
    None: 0,
    Sunday: 1,
    Monday: 2,
    Tuesday: 4,
    Wednesday: 8,
    Thursday: 16,
    Friday: 32,
    Saturday: 64,
    Weekday: 62,
    WeekendDay: 65,
    Day: 127
};
_a.bJ.registerEnum("_a.bJ", !0);
_a.dy = function() {};
_a.dy.registerInterface("_a.dy");
_a.ej = function() {};
_a.ej.prototype = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
};
_a.ej.registerEnum("_a.ej", !1);
_a.ji = function() {};
_a.ji.prototype = {
    UserTime: 0,
    UserDate: 1,
    YearMonth: 2,
    LongDayDate: 3,
    DayDateTime: 4,
    ShortDayDate: 5,
    DayTime: 6,
    ShortDate: 7,
    MonthDay: 8,
    DateTime: 9,
    DayDate: 10,
    MonthDateTime: 11,
    ShortHour: 12,
    Year: 13,
    Month: 14,
    Day: 15,
    Hour: 16,
    Minute: 17,
    ShortTime: 18,
    DayWithNoLeadingZero: 19,
    DayShortTime: 20,
    DayWithLeadingZero: 21,
    ShortHourWithZeroMinutes: 22,
    AbbrMonthDayWithNoLeadingZero: 23,
    FullDayTime: 24,
    FullDate: 25
};
_a.ji.registerEnum("_a.ji", !1);
_a.jj = function() {};
_a.jj.prototype = {
    actionQueue: 0,
    actions: 1,
    addTrustedSenderResponseProcessor: 2,
    animations: 3,
    app: 4,
    appCache: 5,
    applyConversationAction: 6,
    applyConversationActionResponseProcessor: 7,
    attachmentsCleanupManager: 8,
    attachments: 9,
    autodiscover: 10,
    baseJsonResponseAction: 11,
    binding: 12,
    calendar: 13,
    calendarActionsErrorHandling: 14,
    calendarItems: 15,
    calendarServiceCommandHelper: 16,
    calendarShareMessageViewModel: 17,
    calendarSharingInfoProviderViewModel: 18,
    chat: 19,
    chromeWebApp: 20,
    clientStore: 23,
    conductor: 24,
    connectionManager: 25,
    controls: 26,
    conversationItems: 27,
    conversationListVM: 28,
    conversations: 29,
    core: 30,
    createItemResponseProcessor: 34,
    createItemServiceCommand: 35,
    createPersonaResponseProcessor: 36,
    deleteFolderResponseProcessor: 39,
    deleteItemResponseProcessor: 40,
    deleteItemServiceCommand: 41,
    deletePersonaResponseProcessor: 42,
    discovery: 43,
    dragDrop: 44,
    emptyFolderResponseProcessor: 45,
    errorHandler: 46,
    extensibility: 47,
    findConversationServiceCommand: 48,
    findFolderServiceCommand: 49,
    folders: 50,
    framework: 51,
    getCalendarFoldersServiceCommand: 52,
    getConversationItemsServiceCommand: 53,
    getFavoriteFolders: 54,
    getFolderServiceCommand: 55,
    getItemServiceCommand: 56,
    grouping: 57,
    identityCorrelationTable: 59,
    indexedDb: 60,
    instrumentation: 61,
    itemSynchronizer: 62,
    listView: 63,
    logDatapointResponseProcessor: 64,
    mailBaseLVM: 65,
    mailboxDataContext: 66,
    mailCompose: 67,
    mailComposeUpgrade: 68,
    mailFolderItems: 69,
    markAsJunkResponseProcessor: 70,
    media: 71,
    multiSelectListView: 72,
    notifications: 73,
    offlineMailboxDataContext: 74,
    offlineManager: 75,
    offlineNotifications: 76,
    onlineProxy: 77,
    owaResponseProcessors: 79,
    pageListVM: 80,
    PAL: 81,
    performance: 84,
    performReminderActionResponseProcessor: 85,
    personaItems: 86,
    placeItems: 87,
    popOut: 88,
    popOutMailboxDataContext: 89,
    pushNotification: 90,
    readingPane: 91,
    reminders: 92,
    requestQueueProcessor: 93,
    responseProcessors: 94,
    responseQueueProcessor: 95,
    scheduling: 96,
    pinPolicy: 97,
    serviceCommand_CreatePersona: 98,
    serviceCommand_FindItem: 99,
    serviceCommand_GetOwaUserConfiguration: 100,
    serviceCommand_GetReminders: 101,
    serviceCommand_PerformReminderAction: 102,
    serviceCommand_UpdateViewStateConfiguration: 103,
    serviceCommands: 104,
    shell: 105,
    simpleVLV: 106,
    singleDoc: 107,
    speech: 108,
    sql: 109,
    sqlBatch: 110,
    sqlDbTransactionAdapter: 111,
    stackPanel: 112,
    storage_CalendarItem: 113,
    storage_Item: 114,
    syncChangeUpdater: 115,
    syncFolderSettingProcessor: 116,
    syncManager: 117,
    taskItems: 118,
    taskRunner: 119,
    timeZoneConverter: 120,
    unitTest: 121,
    updateCalendarItemServiceCommand: 122,
    updateFolderResponseProcessor: 123,
    updateItemResponseProcessor: 124,
    updateItemServiceCommand: 125,
    updatePersonaResponseProcessor: 126,
    updateUserConfigurationResponseProcessor: 127,
    views: 128,
    viewStateConfiguration: 129,
    itemQueryTable: 130,
    watson: 133,
    webpart: 134,
    webServices: 135,
    mailModule: 136,
    peopleModule: 137,
    tasksModule: 138,
    applicationBar: 139,
    diagnosticsModule: 140,
    location: 141,
    mailTips: 142,
    retentionPolicy: 143,
    search: 144,
    explicitLogon: 145,
    optionsModule: 146,
    findRecipient: 147,
    linkPersona: 148,
    personaCard: 149,
    meCard: 150,
    recipientWell: 151,
    peoplePicker: 152,
    playOnPhone: 153,
    datePicker: 154,
    timePicker: 155,
    infoBar: 156,
    dateTimePicker: 157,
    managePassword: 158,
    mobileDevicePolicy: 159,
    languageUpdate: 160,
    notificationQueueManager: 161,
    sendReadReceiptResponseProcessor: 162,
    personaControl: 163,
    controlTasksQueue: 164,
    userAvailabilityCoordinator: 165,
    composeUserAvailabilityProvider: 166,
    serviceCommand_DeletePersona: 167,
    groupCard: 168,
    contextPeek: 169,
    categoryManagementDialog: 170,
    addCategoryDialog: 171,
    calendarSurface: 172,
    moveItemResponseProcessor: 173,
    dumpster: 174,
    globalization: 175,
    moveItemServiceCommand: 176,
    calendarListBaseView: 177,
    reminderListView: 178,
    agendaListView: 179,
    dataContracts: 180,
    tasksListVM: 181,
    persona: 182,
    personaFilter: 183,
    findPeople: 184,
    timeStrip: 185,
    calendarsCache: 186,
    deviceEncryption: 187,
    weekInMonthListView: 188,
    weekInMonthGridView: 189,
    calendarSidePanelView: 190,
    userConfigurationCommitChanges: 191,
    regionManager: 192,
    presence: 194,
    buddy: 195,
    pivotMenuBase: 196,
    mailListVM: 197,
    deletePlaceResponseProcessor: 198,
    offlineDiscovery: 199,
    syncRequestManager: 200,
    slabLoader: 201,
    calendarErrorHandling: 202,
    treeNodeView: 203,
    pendingGet: 204,
    dataWipe: 205,
    approvalRequest: 206,
    monthGridView: 207,
    groupMemberItems: 208,
    agendaQueryTable: 209,
    urlParser: 210,
    mailTo: 211,
    logging: 212,
    agendaTouchNarrow: 213,
    votingRequest: 214,
    calendarAnimations: 215,
    getOtherMailboxConfiguration: 216,
    setLayoutSettings: 217,
    itemPopOutViewModel: 218,
    accessibility: 219,
    clientStoreCache: 220,
    smime: 221,
    changeLayout: 222,
    modernGroupCard: 223,
    otherCard: 224,
    groupModule: 225,
    attachmentsHub: 226,
    appStatus: 227,
    calendarMiniature: 228,
    mailVLV: 229,
    favorites: 230,
    uploadPhoto: 231,
    linkPreview: 232,
    quickComposeReply: 233,
    myLocation: 234,
    clutter: 236,
    trendingConversationsVLV: 238,
    calendarPicker: 239,
    weather: 240,
    instantSearch: 241,
    feedView: 242,
    groupPeopleModule: 243,
    modernGroupMembershipMail: 244,
    meetNow: 245,
    ucwaDataCache: 246,
    addEventToMyCalendarResponseProcessor: 247,
    calendarSearch: 248,
    meetingResponse: 249,
    calendarShell: 250,
    stateManager: 251,
    behaviors: 252,
    quickCapture: 253,
    groupManagementCommands: 254,
    emailReminders: 255,
    activityStatusViewModelNotifications: 256,
    backgroundSync: 257,
    calendarsSelection: 258,
    groupConversations: 259,
    editor: 260,
    sendLinkClickedSignalToSPResponseProcessor: 261,
    todos: 262,
    nabContactSync: 263,
    unifiedGroupCreate: 264,
    unrecognizedComponent: 266,
    groupConversationShowDetails: 267,
    frequentlyUsedFolders: 268,
    oobe: 269,
    requestManager: 270,
    lwx: 271,
    userActionsInformation: 272,
    introductionPeek: 273,
    helpPanel: 274,
    policyTips: 275,
    calendarNotifications: 276,
    getConversationServiceCommand: 277,
    swipeBehavior: 278,
    undoAction: 279,
    linkPrefetcher: 280,
    ALT: 281,
    mailCommandingBar: 282,
    birthdayCalendar: 283,
    culturePicker: 284,
    immersiveReadingPaneActions: 285,
    mailComposeCommandingBar: 286,
    defaultResponseProcessor: 287,
    agentMCore: 288,
    agentMDispatcher: 289,
    upNext: 290,
    holidayCalendars: 291,
    smimeDump: 292,
    flip: 293,
    commandBar: 295,
    revealPanel: 296,
    filterBar: 297,
    flexPane: 298,
    inlineCompose: 299,
    consumerFirstRun: 300,
    maskAutoCompleteRecipientResponseProcessor: 301,
    tailoredExperiences: 302,
    categoryTree: 303,
    startup: 304,
    booking: 305,
    hashtag: 306,
    messageSafetyReporting: 307,
    publicFolders: 308,
    instantPopout: 309,
    bingAutosuggest: 310,
    mailPrint: 400,
    calendarFeeds: 402,
    superSearch: 404,
    findPeopleFeedback: 405,
    getCalendarEventServiceCommand: 406,
    staffAvailabilityCoordinator: 407,
    serviceWorker: 408,
    calendarAssistantService: 410,
    lightning: 411,
    calendarCoauthoringMessageViewModel: 412,
    saveToOneNote: 450,
    floatingTasksWidget: 451,
    groupsDiscovery: 452,
    suggestedGroupTile: 453,
    inlineImages: 454,
    inClientStore: 455,
    oxford: 456,
    groupSearch: 457,
    feedback: 458,
    findLocationFeedback: 459,
    schedules: 460,
    peoplePane: 461,
    peopleLightHoverCard: 462,
    findUnifiedGroups: 463,
    consensusScheduling: 464,
    files: 465,
    groupSuggestionInCompose: 466,
    itemGroup: 470,
    mentions: 471,
    connectors: 472,
    getGroupsApp: 473,
    emoji: 474,
    bundledMail: 475,
    moduleSwitcher: 476,
    inviteViaLink: 477,
    messageListAds: 480,
    theming: 481,
    messageSummarization: 482,
    substrateSearch: 483,
    smartSuggestions: 484,
    agendaPlus: 485,
    upgradeDistributionList: 485,
    adbar: 486,
    calendarSharing: 487,
    frePanel: 488,
    userHighlighting: 489,
    groupsHub: 490,
    clientOptIn: 491,
    officePay: 492,
    showInImmersiveReader: 493,
    unifiedGroupCreation: 494,
    unifiedGroupHeader: 495,
    agendaMail: 496,
    sweepRules: 497,
    messageLevelSmartReply: 498,
    personalSchedulingPage: 499,
    gdprAds: 500,
    tokenProvider: 501,
    keepThisAtTheEnd: 5e5
};
_a.jj.registerEnum("_a.jj", !1);
_a.li = function() {};
_a.li.prototype = {
    none: -1,
    categories: 0,
    importance: 1,
    attachment: 2,
    mailListviewReplied: 3,
    mailListviewForwarded: 4,
    mailListviewIRM: 5,
    mailListviewIRMReplied: 6,
    mailListviewIRMForwarded: 7,
    mailListviewVoiceMailItem: 8,
    mailListviewVoiceMailReplied: 9,
    mailListviewVoiceMailForwarded: 10,
    mailListviewVoiceMailIRM: 11,
    mailListviewFaxItem: 12,
    mailListviewAppointmentItem: 13,
    mailListviewAppointmentAccepted: 14,
    mailListviewAppointmentDeclined: 15,
    mailListviewAppointmentTentative: 16,
    mailListviewAppointmentCanceled: 17,
    mailListviewContactItem: 18,
    mailListviewTaskItem: 19,
    mailListviewTaskReocurItem: 20,
    mailListviewJournalItem: 21,
    mailListviewPostItem: 22,
    mailListviewNoteItem: 23,
    mailListviewDelivery: 24,
    mailListviewNonDelivery: 25,
    mailListviewApprovalRequest: 26,
    mailListviewResponseApprove: 27,
    mailListviewResponseReject: 28,
    mailListViewOutOfOffice: 29,
    mailListViewReadReport: 30,
    mailListViewReminderMessage: 31,
    smime: 32,
    like: 33,
    mentionedMe: 34,
    trustedSender: 35,
    charm: 36,
    contextualCharm: 37
};
_a.li.registerEnum("_a.li", !1);
_a.S = function() {};
_a.S.registerInterface("_a.S");
_a.dO = function() {};
_a.dO.registerInterface("_a.dO");
_a.ju = function() {};
_a.ju.prototype = {
    none: 0,
    pending: 1,
    complete: 2
};
_a.ju.registerEnum("_a.ju", !1);
_a.ga = function() {};
_a.ga.prototype = {
    singleton: 1,
    mixedSingletonMultiSelect: 2,
    multiSelect: 3
};
_a.ga.registerEnum("_a.ga", !1);
_a.gb = function() {};
_a.gb.prototype = {
    started: 0,
    completed: 1
};
_a.gb.registerEnum("_a.gb", !1);
_a.de = function() {};
_a.de.registerInterface("_a.de");
_a.fM = function() {};
_a.fM.registerInterface("_a.fM");
_a.kT = function() {};
_a.kT.registerInterface("_a.kT");
_a.jA = function() {
    this.ts = _a.d.a()
};
_a.jB = function(n) {
    this.n = n.n.startsWith("_idle") ? n.n.substr(5) : n.n;
    this.q = n.q;
    this.p = this.t = n.t;
    this.m = n.m;
    this.c = 1
};
_a.kY = function() {};
_a.h = function() {};
_a.h.a = function(n) {
    if (n.val) {
        n.val.dispose();
        n.val = null
    }
};
_a.h.b = function(n) {
    if (n) {
        for (var t = 0; t < n.b(); t++) {
            var i = n.c(t);
            Sys.IDisposable.isInstanceOfType(i) && i.dispose()
        }
        n.dispose();
        n = null
    }
};
_a.cs = function(n, t) {
    this.b = t;
    this.a = n
};
_a.cs.prototype = {
    a: 0,
    b: null
};
_a.ei = function() {};
_a.cI = function() {};
_a.dA = function(n) {
    _a.dA.initializeBase(this, [n])
};
_a.di = function(n, t) {
    this.c = !1;
    this.d = n;
    this.b = t
};
_a.di.prototype = {
    b: null,
    c: !1,
    d: null,
    a: function() {
        this.c = !0
    }
};
_a.jt = function(n) {
    this.e = n
};
_a.jt.prototype = {
    e: null,
    a: 0,
    b: 0,
    d: 0,
    c: 0,
    f: function(n) {
        this.a++;
        this.b += n.y() / 1e3;
        this.d += parseFloat(n.e)
    }
};
_a.bk = function(n) {
    this.d = n
};
_a.bk.prototype = {
    d: null,
    c: function() {
        return this.d
    },
    b: function(n) {
        return _a.C.l(this.d, n) >= 0
    },
    a: function(n) {
        return this.b(n.c())
    }
};
_a.ey = function(n, t, i) {
    _a.c.b(n, "traceComponent");
    _a.c.c(t, "source");
    this.k = n;
    this.h = t + "#" + _a.ey.a++;
    this.b = _a.G.a();
    if (i) {
        this.d = new _a.l;
        this.a = _a.b.b(n, i, !1, null)
    }
};
_a.ey.prototype = {
    k: null,
    h: null,
    b: null,
    a: null,
    d: null,
    f: null,
    e: !1,
    g: function() {
        return !!this.f && !this.b.f()
    },
    c: function(n, t) {
        _a.c.c(n, "operationName");
        if (this.g()) return null;
        else if (this.e) return null;
        else {
            this.b.a(n, new _a.ey.b(t));
            var i = this;
            return function() {
                if (i.b.c(n)) {
                    if (i.a) {
                        var t = i.b.b[n];
                        t.c(i.d)
                    }
                    i.b.e(n);
                    i.j("Operation Completed: " + n)
                }
            }
        }
    },
    i: function(n) {
        _a.c.b(n, "completionCallback");
        this.f = n;
        this.j("WaitForCompletion called")
    },
    l: function() {
        if (this.g()) return !1;
        else {
            this.e = !0;
            this.a = null;
            this.d = null;
            return !0
        }
    },
    j: function(n) {
        if (!this.e)
            if (this.g()) {
                if (this.a) {
                    this.a.m = this.d.toString();
                    _a.b.a(this.a);
                    this.a = null;
                    this.d = null
                }
                this.f()
            } else this.b.f() > 0
    }
};
_a.ey.b = function(n) {
    this.a = n;
    this.b = new Date
};
_a.ey.b.prototype = {
    a: null,
    b: null,
    c: function(n) {
        n.b(this.a + "T", (new Date).getDate() - this.b.getDate())
    }
};
_a.bS = function() {};
_a.bS.a = function(n, t, i) {
    var r = encodeURIComponent(n) + "=" + encodeURIComponent(t);
    t || (r += "; expires=Thu, 01 Jan 1970 00:00:01 GMT");
    _j.h.a(i) || (r += "; path=" + i);
    document.cookie = r
};
_a.ft = function() {};
_a.ft.prototype = {
    b: function(n) {
        return getCookie(n)
    },
    a: function(n, t, i) {
        _a.bS.a(n, t, i)
    }
};
_a.U = function(n) {
    this.a = n
};
_a.U.prototype = {
    a: 0
};
_a.cE = function(n, t) {
    this.b = n;
    this.a = t
};
_a.cE.prototype = {
    b: !1,
    a: null
};
_a.dt = function(n) {
    this.a = n
};
_a.dt.prototype = {
    a: !1
};
_a.bZ = function(n) {
    this.a = n
};
_a.bZ.prototype = {
    a: 0
};
_a.eZ = function(n) {
    this.a = n
};
_a.eZ.prototype = {
    a: !1
};
_a.eA = function(n, t, i, r, u) {
    this.c = n;
    this.b = t;
    this.a = i;
    this.e = r;
    this.d = u
};
_a.eA.prototype = {
    c: null,
    b: 0,
    e: null,
    a: null,
    d: 0
};
_a.dh = function(n) {
    this.a = n
};
_a.dh.prototype = {
    a: !1
};
_a.fa = function(n) {
    var t = null;
    (n.b() || n.f()) && (t = "<style> @media print { [class^='owaimg']::before, [class*=' owaimg']::before { content: '' !important; } .wf-family-owa::before { content: '' !important; } .wf-family-o365 { display:none !important; } } </style>");
    n.g() && (t = "<style> @media print { #primaryContainer { position:fixed !important; width:" + window.screen.width + "px; } </style>");
    if (t) {
        var r = window.document.querySelector("head");
        if (r) {
            var i = document.createElement("div");
            i.innerHTML = t;
            r.appendChild(i.firstChild)
        }
    }
};
_a.t = function() {
    this.b = {}
};
_a.t.a = function() {
    _a.t.b || (_a.t.b = new _a.t);
    return _a.t.b
};
_a.t.c = function(n) {
    if (n in _a.t.a().b) return _a.t.a().b[n]();
    throw Error.argumentOutOfRange("typeName", n, n + " is not a registered configuration");
};
_a.t.prototype = {
    a: function(n) {
        var i = this;
        var t = function() {
            return new n
        };
        this.b[n.getName()] = t
    }
};
_a.df = function(n) {
    this.a = n
};
_a.df.prototype = {
    a: null
};
_a.iL = function(n) {
    this.s = n
};
_a.iL.prototype = {
    s: null,
    t: !1,
    u: !1,
    i: function() {
        return this.s.target
    },
    e: function() {
        return this.s.gesture.changedPointers[0].pageX
    },
    f: function() {
        return this.s.gesture.changedPointers[0].pageY
    },
    o: function() {
        return this.s.gesture.srcEvent.relatedTarget
    },
    b: function() {
        return this.s.target
    },
    n: function() {
        return this.s.gesture.srcEvent.timeStamp || +new Date
    },
    a: function() {
        var n = this.s.gesture.srcEvent.which;
        !n && _a.o.a().K && this.s.type === "keypress" && (n = this.v());
        return n
    },
    v: function() {
        return this.s.gesture.srcEvent.keyCode
    },
    m: function() {
        return this.s.gesture.srcEvent
    },
    j: function() {
        return this.s.type
    },
    k: function() {
        throw Error.notImplemented("HammerEventArgs does not support the Touches property.");
    },
    q: function() {
        return this.t
    },
    g: function() {
        return this.s.gesture.srcEvent.shiftKey
    },
    h: function() {
        return _j.G.a().P ? this.s.gesture.srcEvent.metaKey : this.s.gesture.srcEvent.ctrlKey
    },
    l: function() {
        return this.s.gesture.srcEvent.altKey
    },
    r: function() {
        return this.s.gesture.srcEvent.metaKey
    },
    p: function() {
        return this.g() || this.h() || this.l() || this.r()
    },
    c: function() {
        this.s.gesture.srcEvent.preventDefault();
        this.t = !0
    },
    d: function() {
        this.s.stopPropagation();
        this.u = !0
    }
};
_a.dZ = function(n) {
    this.a = n
};
_a.dZ.prototype = {
    a: !1
};
_a.dT = function(n, t, i) {
    this.a = n;
    this.b = t;
    this.c = i
};
_a.dT.prototype = {
    a: 0,
    b: 0,
    c: 0
};
_a.dv = function(n) {
    this.a = n
};
_a.dv.prototype = {
    a: null
};
_a.L = function() {
    this.d = new Array(0);
    this.e = new Array(0);
    this.k = []
};
_a.L.a = function() {
    _a.L.d || (_a.L.d = new _a.L);
    return _a.L.d
};
_a.L.c = function() {
    _a.L.f != null || (_a.L.f = !!window.performance && !!window.performance.now);
    return _a.L.f
};
_a.L.h = function() {
    _a.L.e != null || (_a.L.e = !!window.Date.now);
    return _a.L.e
};
_a.L.g = function(n) {
    _a.L.a().g = n
};
_a.L.b = function() {
    return _a.L.c() ? Math.floor(window.performance.now()) : _a.L.h() ? Date.now() : +new Date
};
_a.L.prototype = {
    h: 0,
    g: null,
    f: !1,
    b: function(n) {
        if (this.h !== n) {
            this.u();
            this.h = n;
            this.r();
            this.t(n)
        }
        return n
    },
    l: function() {
        return !!this.h && !!this.g
    },
    o: function() {
        return !!this.d[1] && this.d[1].length > 0
    },
    q: function(n) {
        this.s(n)
    },
    c: function(n, t, i, r) {
        var u = r;
        if (!this.g || !this.d[u] || !this.d[u].length || this.f) return null;
        this.f = !0;
        for (var e = this.g.b(n, t, i, r), s = this.d[u].length, f = s - 1; f > -1; f--) {
            var o = this.d[u][f];
            o.c(e)
        }
        this.f = !1;
        return e
    },
    a: function(n) {
        if (n && n.c() && this.d[n.c()] && this.d[n.c()].length && this.g && !this.f) {
            this.f = !0;
            var i = n.c();
            this.g.a(n);
            for (var u = this.d[i].length, t = u - 1; t > -1; t--) {
                var r = this.d[i][t];
                r.a(n)
            }
            this.f = !1
        }
    },
    i: function(n) {
        if (n) {
            var i = n.c();
            if (this.d[i])
                for (var u = this.d[i].length, t = u - 1; t > -1; t--) {
                    var r = this.d[i][t];
                    r.b(n)
                }
        }
    },
    n: function(n) {
        if (n)
            for (var t = 0; t < n.length; t++) this.i(n[t])
    },
    j: function(n, t) {
        if (n) {
            if (!t) {
                Array.contains(this.e, n) || Array.add(this.e, n);
                t = this.h
            }
            for (var i = t; i > 0; i--) {
                this.d[i] || (this.d[i] = new Array(0));
                Array.contains(this.d[i], n) || Array.add(this.d[i], n)
            }
        }
    },
    m: function(n) {
        this.p(n);
        var t = Array.indexOf(this.e, n);
        t >= 0 && Array.removeAt(this.e, t)
    },
    p: function(n) {
        for (var t = 1; t < this.d.length; t++)
            if (this.d[t])
                for (var r = 0; r < this.d[t].length; r++) {
                    var i = Array.indexOf(this.d[t], n);
                    i >= 0 && Array.removeAt(this.d[t], i)
                }
    },
    u: function() {
        for (var n = 0; n < this.e.length; n++) this.p(this.e[n])
    },
    r: function() {
        if (this.h)
            for (var n = 0; n < this.e.length; n++) this.j(this.e[n], this.h)
    },
    t: function(n) {
        for (var t = 0; t < this.k.length; t++) {
            var i = this.k[t];
            i(n)
        }
    },
    s: function(n) {
        this.k && (Array.contains(this.k, n) || Array.add(this.k, n))
    }
};
_a.fV = function(n, t) {
    _a.c.a(n, "router");
    _a.c.a(t, "domWindow");
    this.b = n;
    this.c = t
};
_a.fV.prototype = {
    b: null,
    c: null,
    a: function(n) {
        var i = new _a.P(n);
        var u = new _a.P(this.c.b());
        if (i.a !== u.a) return !1;
        var t = _a.w.g(i.f);
        if (!("path" in t)) {
            t = _a.w.g(i.g);
            if (!("path" in t)) return !1
        }
        var r = t.path;
        if (this.b.g(r)) {
            this.b.a(r, null);
            return !0
        }
        return !1
    }
};
_a.WebfontOwaCustomStyles = function() {};
_a.WebfontOwaSizes = function() {};
_a.bc = function() {};
_a.bc.a = function(n) {
    if (_j.h.a(n)) return "";
    var t = n.lastIndexOf(".");
    return t === -1 ? "" : n.substr(t)
};
_a.bc.b = function(n) {
    if (_j.h.a(n)) return "";
    var t = n.lastIndexOf(".");
    return t === -1 ? n : n.substr(0, t)
};
_a.s = function() {};
_a.s.a = function(n, t) {
    n[t] && n[t]()
};
_a.bb = function() {};
_a.bb.b = function(n) {
    _a.c.a(n, "node");
    var t = 0;
    _j.h.a(n.prefix) || (t = n.prefix.length);
    return t ? n.nodeName.substr(t + 1) : n.nodeName
};
_a.bb.a = function(n) {
    _a.c.a(n, "node");
    var i = new Sys.StringBuilder;
    _j.h.b(n.nodeValue) || i.append(n.nodeValue);
    for (var t = 0; t < n.childNodes.length; t++) {
        var r = n.childNodes[t];
        i.append(_a.bb.a(r))
    }
    return i.toString()
};
_a.bb.c = function(n, t) {
    var i = _a.bb.d(n, t);
    return null === i ? null : i.value
};
_a.bb.d = function(n, t) {
    _a.c.a(n, "node");
    _a.c.c(t, "localName");
    t = t.toLowerCase();
    for (var i = 0; i < n.attributes.length; i++) {
        var r = n.attributes.item(i);
        var u = _a.bb.b(r).toLowerCase();
        if (u === t) return r
    }
    return null
};
_a.dn = function(n) {
    this.bV = _a.dn.b++;
    _a.dn.initializeBase(this);
    this.L = _j.u.a(n) ? 0 : n;
    this.cm = Object.getType(this).getName();
    this.bf = this.cm + " " + this.bV;
    this.cc = this.L === 201 || this.L === 601 || this.L === 702
};
_a.dn.prototype = {
    L: 0,
    bf: null,
    cm: null,
    ca: null,
    G: null,
    ba: null,
    bQ: null,
    bd: null,
    cc: !1,
    a: function(n) {
        this.bB("ActionCompleted", n)
    },
    n: function(n) {
        this.bF("ActionCompleted", n)
    },
    bn: function(n) {
        this.bB("ActionExecuting", n)
    },
    bI: function(n) {
        this.bF("ActionExecuting", n)
    },
    c: function(n) {
        this.bB("ActionSuccess", n)
    },
    U: function(n) {
        this.bF("ActionSuccess", n)
    },
    b: function(n) {
        this.bB("ActionFailure", n)
    },
    T: function(n) {
        this.bF("ActionFailure", n)
    },
    g: function() {
        return this.G
    },
    w: function() {
        return this.bf
    },
    x: function() {
        return this.bV
    },
    z: function() {
        return this.eM(_a.dn.a)
    },
    cn: function(n) {
        this.eK(_a.dn.a, n);
        return n
    },
    cb: function() {
        return !1
    },
    i: function() {
        return this.ba
    },
    y: function() {
        return this.L
    },
    B: function() {
        this.cn(1);
        this.S()
    },
    cX: function(n) {
        this.bd = n;
        return n
    },
    O: function() {
        return this.cv()
    },
    A: function(n) {
        var i = null;
        var t = 0;
        try {
            this.ca = n;
            this.cE();
            t = this.bb()
        } catch (r) {
            i = r;
            throw r;
        } finally {
            t || this.z() === 3 || this.X(i)
        }
    },
    C: function() {
        return this.cc
    },
    v: function() {
        this.cc = !1
    },
    X: function(n) {
        try {
            try {
                this.G = n;
                this.cG()
            } finally {
                this.cD()
            }
        } finally {
            this.cw(n ? 4 : 3);
            this.cC()
        }
    },
    S: function() {},
    V: function() {
        var n = _a.bR.c(this.G)
    },
    cw: function(n) {},
    cv: function() {
        if (this.G && this.G.name) {
            var t = "UNDEFINED_EXCEPTION";
            var n = this.G.name;
            n !== "Error" && (t = n);
            return t
        }
        return null
    },
    cC: function() {
        this.ca && this.ca()
    },
    cG: function() {
        this.G ? this.cF() : this.bO("ActionSuccess", this)
    },
    cF: function() {
        try {
            this.V()
        } finally {
            this.bO("ActionFailure", this)
        }
    },
    cE: function() {
        this.cn(2);
        this.cw(2);
        this.bO("ActionExecuting", this)
    },
    cD: function() {
        try {
            this.cn(3)
        } finally {
            this.bO("ActionCompleted", this)
        }
    }
};
_a.cj = function(n) {
    this.g = Function.createDelegate(this, this.l);
    this.d = [];
    this.k = _a.cj.a++;
    this.i = "Action Manager " + this.k;
    this.f = n
};
_a.cj.prototype = {
    b: !1,
    e: !1,
    i: null,
    c: null,
    f: null,
    a: function(n) {
        if (this.f && n.C()) {
            var t = this;
            this.f.a(function(i) {
                var r = i.b().b(n, t);
                i.a(r)
            });
            return
        }
        n.B();
        this.c && this.c(n);
        if (_a.fF.isInstanceOfType(n) || _a.g.I) this.h(n);
        else {
            Array.enqueue(this.d, n);
            this.j()
        }
    },
    h: function(n) {
        var t = this;
        n.A(function() {
            t.e = !1;
            t.j()
        })
    },
    j: function() {
        if (!this.b && !this.e && this.d.length) {
            var n = this.d[0];
            n.cb() ? this.b || _j.m.a().a(_a.a.B, "Process" + n.bf, this.g, 0) : this.b || _j.m.a().c(_a.a.B, "Process" + n.bf, this.g);
            this.b = !0
        }
    },
    l: function() {
        this.b = !1;
        var n = Array.dequeue(this.d);
        this.e = n.cb();
        this.h(n)
    }
};
_a.bp = function(n, t) {
    this.g = Function.createDelegate(this, this.j);
    this.e = Function.createDelegate(this, this.k);
    _a.bp.initializeBase(this);
    _a.c.b(n, "activityManagerBehavior");
    this.c = n;
    this.a = new Date;
    this.b = 0;
    this.d = t;
    this.d.b(_ff.x, this.e)
};
_a.bp.c = function(n) {
    _a.c.b(n, "behavior");
    if (!_a.bp.a) {
        _a.bp.a = new _a.bp(n, _a.g.c());
        _a.bp.a.h()
    }
    return _a.bp.a
};
_a.bp.prototype = {
    c: null,
    a: null,
    d: null,
    b: 0,
    l: function(n) {
        this.b || (this.b = +new Date - this.a.getTime());
        this.a = n;
        this.by(_a.bp.b);
        return n
    },
    f: function(n) {
        this.l(new Date)
    },
    h: function() {
        this.i(window.document.documentElement)
    },
    j: function(n) {
        this.c.a(this, n.j())
    },
    bz: function() {
        this.d.c(_ff.x, this.e);
        _j.S.prototype.bz.call(this)
    },
    k: function(n) {
        this.c.a(this, n.a)
    },
    i: function(n) {
        _j.k.b(n, "mousedown keydown scroll", this.g)
    }
};
_a.ip = function() {};
_a.ip.prototype = {
    a: function(n, t) {
        n.f(t)
    }
};
_a.dX = function() {};
_a.dX.prototype = {
    a: function(n) {
        return !n || window.self === n ? new _a.ip : new _a.iy(n)
    }
};
_a.jQ = function(n) {
    this.p = Function.createDelegate(this, this.B);
    this.x = Function.createDelegate(this, this.C);
    _a.c.b(n, "activityManager");
    this.b = n;
    this.s()
};
_a.jQ.prototype = {
    b: null,
    r: !0,
    k: !1,
    e: null,
    h: function(n) {},
    q: function(n) {},
    s: function() {
        this.a() < 0 || this.e || (this.e = _j.m.a().e(_a.a.l, this.c(), this.x, this.a()))
    },
    t: function() {
        this.e && (this.e = _j.m.a().b(this.e))
    },
    C: function() {
        var i = new Date;
        var n = this.b.a;
        var t = i - n;
        if (t <= this.d()) this.h(n);
        else {
            this.q(n);
            if (this.r && !this.k) {
                this.k = !0;
                this.b.apcl(_a.bp.b, this.p)
            }
        }
    },
    B: function(n, t) {
        this.b.rpcl(_a.bp.b, this.p);
        this.k = !1;
        var i = this.b.a;
        this.h(i)
    }
};
_a.iy = function(n) {
    _a.iy.initializeBase(this);
    _a.c.b(n, "mainWindowInstance");
    this.c = n
};
_a.iy.prototype = {
    c: null,
    b: null,
    a: function(n, t) {
        if (!this.d()) {
            this.b = new Date;
            var i = this;
            _a.Y.a(this.c, function(n) {
                n.reportUserActivity(t)
            })
        }
    },
    d: function() {
        var t = new Date;
        var n = t - this.b;
        return n < 3e4
    }
};
_a.k = function() {};
_a.k.bA = function(n) {
    !_a.k.k && _a.k.g() && (_a.k.k = n);
    return n
};
_a.k.by = function(n) {
    !_a.k.h && _a.k.g() && (_a.k.h = n);
    return n
};
_a.k.bk = function(n) {
    !_a.k.p && _a.k.g() && (_a.k.p = n);
    return n
};
_a.k.br = function(n) {
    !_a.k.H && _a.k.g() && (_a.k.H = n);
    return n
};
_a.k.bl = function(n) {
    _a.k.G || (_a.k.G = n);
    return n
};
_a.k.bz = function(n) {
    _a.k.s || (_a.k.s = n);
    return n
};
_a.k.bp = function(n) {
    n || (_a.k.bg = "");
    return n
};
_a.k.bn = function(n) {
    if (!n) {
        _a.k.I = "";
        return n
    }
    _a.k.I += "[" + (_a.k.a() - _a.k.e) + ":" + n + "]";
    return n
};
_a.k.bm = function(n) {
    if (!n) {
        _a.k.bb = "";
        return n
    }
    _a.k.bb += "[" + (_a.k.a() - _a.k.e) + ":" + n + "]";
    return n
};
_a.k.bj = function(n) {
    if (!n) {
        _a.k.t = "";
        return n
    }
    var t = _a.k.a();
    _a.k.t += "[" + (t - _a.k.ba) + ":" + n + "]";
    _a.k.ba = t;
    return n
};
_a.k.a = function() {
    return +new Date
};
_a.k.bo = function(n) {
    _a.k.ba = _a.k.a();
    _a.k.i = n;
    return n
};
_a.k.bq = function(n) {
    _a.k.bz(_a.k.a());
    _a.k.bh = n;
    return n
};
_a.k.g = function() {
    return _a.k.i && !_a.k.m
};
_a.k.bv = function() {
    return _a.k.o === null && _a.k.j === null ? "None" : _a.k.o && _a.k.j !== null ? _a.k.j ? "Before" : "During" : "After"
};
_a.k.F = function(n) {
    n ? _a.k.o = _a.k.o === null ? !_a.k.m : _a.k.o : _a.k.j = _a.k.j === null ? !_a.k.m : _a.k.j
};
_a.k.bB = function(n) {
    n && (_a.k.Z = n)
};
_a.k.bi = function(n) {
    if (_a.k.i) {
        if (n === 3) {
            _a.cf.a("ALTDot1", _a.k.d ? _a.k.d : _a.k.f);
            _a.cf.a("NavALTDot1", _a.k.e)
        }
        if (_a.k.b !== "ALT3") {
            _a.cf.a("ALT", _a.k.f, _a.k.n);
            _a.cf.a("NavALT", _a.k.e, _a.k.n);
            _a.dS.a(window.scriptProcessStart)
        }
        if (_a.k.Z) {
            _a.k.w = n;
            _a.k.W = _a.k.a() - (_a.k.d ? _a.k.d : _a.k.f);
            _a.k.Y = _a.O.c.AppStartScenario || "";
            _a.k.Z()
        }
        if (_a.L.a().l()) {
            if (_a.k.k && _a.k.h) {
                var s = _a.bA.b(_a.a.R, 517, "ListViewInactive_WaitTime", 3, _a.k.k, _a.k.h);
                _a.L.a().i(s)
            }
            if (_a.k.b !== "ALT3" && _a.X.e()) {
                var f = 0;
                var t;
                var o = _a.X.m();
                f = _a.be.c() ? window.performance.timing.navigationStart : _a.k.e;
                for (var r = o, h = r.length, i = 0; i < h; ++i) {
                    var u = r[i];
                    t = u.name;
                    if (t) {
                        var e = t.indexOf("?");
                        e >= 0 && t.indexOf("service.svc?") < 0 && (t = t.substring(0, e));
                        _a.X.k(u, t, _a.L.c() ? 0 : f)
                    }
                }
            }
        }
        _a.O.b("AppStartScenario", !0)
    }
    _a.k.bx()
};
_a.k.J = function() {
    _a.k.O = !0;
    if (_a.k.y || !_a.k.l || _a.k.b === "ALT3") {
        _a.cf.a("ALTDot1", _a.k.d ? _a.k.d : _a.k.f);
        _a.cf.a("NavALTDot1", _a.k.e);
        _a.k.m = !0;
        _a.k.bi(1)
    }
};
_a.k.bw = function(n) {
    if (_a.k.b === "ALT3") return _a.k.d > n ? _a.k.d : n;
    else if (_a.k.b === "ALT1" || _a.k.b === "ALT2") return _a.k.p > n ? _a.k.p : n;
    return n
};
_a.k.bx = function() {
    _a.k.E = {};
    _a.k.bo(_a.k.m = _a.k.l = _a.k.y = _a.k.q = _a.k.x = _a.k.O = !1);
    _a.k.S = _a.k.T = 0;
    _a.k.f = _a.k.d = _a.k.e = _a.k.W = _a.k.A = 0;
    _a.k.r = _a.k.D = 0;
    _a.k.B = 0;
    _a.k.bq(!1);
    _a.k.b = _a.k.bn(_a.k.bm(_a.k.bj(null)));
    _a.k.w = 0;
    _a.k.o = _a.k.j = null;
    _a.k.k = _a.k.h = _a.k.bu = _a.k.bt = _a.k.bs = _a.k.V = 0;
    _a.k.Q = _a.k.X = _a.k.N = _a.k.n = 0;
    _a.k.L = _a.k.M = 0;
    _a.k.v = _a.k.z = _a.k.C = _a.k.R = 0;
    _a.k.bk(_a.k.br(_a.k.bl(_a.k.s = 0)));
    _a.k.c = 0;
    _a.k.u = 0;
    _a.k.bp(_a.k.Y = "")
};
_a.cf = function() {
    this.d = Function.createDelegate(this, this.e)
};
_a.cf.a = function(n, t, i) {
    i = i || _a.k.a();
    var r = _a.bA.b(_a.a.da, 517, n, 1, t, i);
    var u = _a.cf.b[n];
    if (u) {
        u.l |= 32;
        r.l |= 32
    }
    _a.cf.b[n] = r;
    _a.L.a().i(r);
    _a.cf.c(r)
};
_a.cf.c = function(n) {
    if (n.f().a() === 281) {
        var t = n.e();
        var r = n.d() - n.a();
        var i = _a.k.E[t] || new _a.it(t);
        i.d(r);
        _a.k.E[t] = i
    }
};
_a.cf.prototype = {
    g: function() {
        try {
            _a.O.a(_a.a.R, "AppStartScenario", 1)
        } catch (i) {
            if (window._j)
                if (window._j.__typeName === "_j") throw i;
                else {
                    var t = Object.keys(window._j);
                    var n = t.join(",");
                    n.length > 600 && (n = n.substring(0, 599));
                    throw Error.create("_j namespace corrupt:" + n);
                }
            else throw i;
        }
        _a.L.a().j(this);
        _a.k.bB(this.d);
        _a.k.bo(!0)
    },
    c: function(n) {},
    a: function(n) {
        _a.cf.c(n)
    },
    b: function(n) {
        _a.cf.c(n)
    },
    f: function() {
        return _ff.i.b(_a.k.E)
    },
    e: function() {
        _a.A.b.a(new _a.iN(_a.be.e(), this.f()));
        _a.k.w === 1 && (_a.k.bc = !0);
        _a.L.a().m(this);
        _a.be.a = null;
        _a.cf.b = {}
    }
};
_a.it = function(n) {
    this.a = n
};
_a.it.prototype = {
    a: null,
    c: 0,
    b: 0,
    d: function(n) {
        this.c = n;
        this.b += 1;
        return n
    }
};
_a.iu = function(n, t) {
    this.e = n;
    this.d = t
};
_a.iu.prototype = {
    e: null,
    d: null,
    a: function() {
        return this.e.a().mf().Enabled ? "X-AnchorMailbox" : "X-UpnAnchorMailbox"
    },
    b: function() {
        return this.d.b(this.f())
    },
    f: function() {
        return "DefaultAnchorMailbox"
    },
    c: function() {
        return "X-AnchorMailbox"
    }
};
_a.cQ = function(n, t) {
    _a.c.a(n, "location");
    _a.c.a(t, "nativeBridge");
    this.d = _a.o.a();
    this.c = n;
    this.b = t
};
_a.cQ.prototype = {
    c: null,
    d: null,
    b: null,
    a: function(n) {
        this.b.b(this.b.s()) ? this.b.s().f(n) : this.c.reload()
    }
};
_a.dY = function() {};
_a.eC = function() {};
_a.eC.a = function(n) {
    _a.c.a(n, "intrinsic");
    return String.isInstanceOfType(n) ? new _a.iA(n) : new _a.iW(n, new _a.jF)
};
_a.fs = function() {
    this.e = _a.o.a().c();
    this.f = _a.o.a().bh;
    this.g = !!window.history.replaceState
};
_a.fs.prototype = {
    e: !1,
    f: !1,
    g: !1,
    a: function() {
        return this.e
    },
    b: function() {
        return this.f
    },
    c: function() {
        return this.g
    },
    d: function() {
        return !this.e && !!navigator.serviceWorker
    }
};
_a.jS = function(n) {
    this.d = n
};
_a.jS.prototype = {
    d: 0
};
_a.eE = function() {
    _a.eE.initializeBase(this, [2]);
    this.a = !0
};
_a.eE.prototype = {
    a: !1
};
_a.dl = function(n, t, i, r) {
    _a.dl.initializeBase(this, [1]);
    this.e = n;
    this.a = t;
    this.c = i;
    this.b = r
};
_a.dl.prototype = {
    e: null,
    a: null,
    c: null,
    b: null
};
_a.jq = function() {
    _a.jq.initializeBase(this, [4])
};
_a.bG = function(n) {
    if (n <= 0) throw Error.argumentOutOfRange("maxEntries");
    this.h = n;
    this.j()
};
_a.bG.prototype = {
    h: 0,
    a: null,
    g: 0,
    d: 0,
    i: function() {
        return this.a.length - this.d
    },
    f: function(n) {
        if (n < 0 || n >= this.a.length) throw Error.argumentOutOfRange("index");
        return this.a[(this.g + n) % this.h]
    },
    b: function(n) {
        if (_j.E.a(n)) throw Error.argumentNull("entry");
        var t = this.a.length;
        if (t >= this.h) {
            this.a[this.g] = n;
            this.g = (this.g + 1) % this.h;
            this.d > 0 && this.d--
        } else this.a[t] = n
    },
    e: function() {
        this.j()
    },
    k: function() {
        this.d = this.a.length
    },
    l: function(n, t, i) {
        for (var u = this.a.length, r = this.d; r < u; r++) t[i++] = n(this.f(r));
        return this.i()
    },
    c: function() {
        for (var t = new Array(this.a.length), n = 0; n < this.a.length; n++) t[n] = this.f(n);
        return t
    },
    j: function() {
        this.a = [];
        this.g = 0;
        this.d = 0
    }
};
_a.dr = function(n, t, i, r) {
    this.bk = t;
    this.N = n.version;
    this.bv = new _a.bk(n.serverVersion);
    this.Z = n.pageUrl || window.location.href;
    this.br = n.logOffUrl;
    this.bm = n.errorUrl;
    this.bo = n.inactivityTimeout ? n.inactivityTimeout : -1;
    this.O = n.cdnEndpoint;
    this.bu = n.pingUrl;
    this.bs = n.mapControlUrl;
    this.bi = n.appDomainAppVirtualPath;
    this.be = n.uiCulture;
    this.bf = n.uiLang;
    this.bq = n.userCultureRtl;
    this.bg = n.uiTheme;
    this.bl = n.disableCalendarDetails === "true";
    this.bb = n.scriptsFolder;
    this.T = n.fallbackScriptsFolder;
    this.bd = n.stringsFolder;
    this.U = n.fallbackStringsFolder;
    this.ba = n.resourcesFolder;
    this.M = i;
    this.bj = n.bootedFromAppcache;
    this.bn = r;
    this.V = !!this.M && this.M.a().b().Enabled;
    this.X = _a.dr.a(n.layout);
    this.S = n.owaDeferrableSlabsEnabled;
    var s = n.stylesLocale;
    var h = n.stylesFolderFormat;
    var c = n.themedImagesFolderFormat;
    var u = n.osfStringPath;
    var e = n.osfLang;
    this.bt = n.offlineAppcacheVersion;
    this.bp = n.deprecatedHostName;
    h && (this.bw = h.replace("#LCL", s));
    c && (this.bx = c.replace("#LCL", s));
    u && e ? this.Y = u.replace("##culture##", e.toLowerCase()) : u && (this.Y = u);
    var o = new _a.I(_a.w.b(this.Z, !1));
    this.P = this.bz(n, o);
    this.L = this.P === "SharedHoverCard" ? new _a.I : o;
    this.R = !this.L.b("viewmodel") && !this.L.b("OOBE") && !this.L.b("PALPopOut") || this.L.b("ispopout") && this.L.a.ispopout === "0";
    this.W = !1;
    this.R || (this.W = this.L.b("ispopout") && this.L.a.ispopout === "1" && !!window.opener && !!window.opener.popOutManager);
    this.bh = this.L.b("allow");
    n.owaDeferrableSlabsEnabled === undefined && this.P === "Standard" && this.M && (this.S = this.M.a().kj().Enabled);
    var f = n.startTime;
    f && (this.bc = _a.d.o(f).o());
    if (this.L.b("bootStage")) try {
        var l = this.L.a.bootStage;
        this.Q = _j.u.b(_a.iG, l)
    } catch (a) {
        this.Q = 100
    } else this.Q = 100
};
_a.dr.a = function(n) {
    if (n === "mouse") return "Mouse";
    else if (n === "tnarrow") return "TouchNarrow";
    else if (n === "twide") return "TouchWide";
    throw Error.argumentUndefined("Unknown layout provided");
};
_a.dr.prototype = {
    bn: null,
    N: null,
    bv: null,
    bc: null,
    Z: null,
    br: null,
    bm: null,
    bo: 0,
    O: null,
    bu: null,
    bs: null,
    bi: null,
    be: null,
    bf: null,
    bq: !1,
    bg: null,
    Y: null,
    L: null,
    bl: !1,
    P: "Standard",
    bk: null,
    R: !1,
    W: !1,
    bb: null,
    T: null,
    bd: null,
    U: null,
    ba: null,
    bj: !1,
    bw: null,
    bx: null,
    V: !1,
    X: 0,
    M: null,
    Q: 0,
    S: !1,
    bt: null,
    bp: !1,
    D: function() {
        return this.bn
    },
    h: function() {
        return this.N
    },
    d: function() {
        return this.bv
    },
    p: function() {
        return this.Z
    },
    G: function() {
        return this.br
    },
    A: function() {
        return this.bm
    },
    E: function() {
        return this.bo
    },
    a: function() {
        return this.X
    },
    n: function() {
        return this.O
    },
    w: function() {
        return this.bu
    },
    H: function() {
        return this.bs
    },
    t: function() {
        return this.bi
    },
    m: function() {
        return this.be
    },
    y: function() {
        return this.bf
    },
    l: function() {
        return this.bq
    },
    o: function() {
        return this.bg
    },
    I: function() {
        return this.Y
    },
    b: function() {
        return this.L
    },
    J: function() {
        return this.S
    },
    r: function() {
        return this.bc
    },
    z: function() {
        return this.bl
    },
    f: function() {
        return this.R
    },
    bh: !1,
    i: function() {
        return this.bh
    },
    j: function() {
        return this.W
    },
    g: function() {
        return this.P
    },
    q: function() {
        return _j.h.a(this.bb) ? _j.h.a(this.O) ? this.by(this.N) : String.format("{0}/owa/prem/{1}/scripts", this.O, this.N) : this.bb
    },
    B: function() {
        return _j.h.a(this.T) ? this.by(this.N) : this.T
    },
    s: function() {
        return _j.h.a(this.bd) ? this.q() : this.bd
    },
    C: function() {
        return _j.h.a(this.U) ? this.B() : this.U
    },
    x: function() {
        return _j.h.a(this.ba) ? _j.h.a(this.O) ? this.K(this.N) : String.format("{0}/owa/prem/{1}/resources", this.O, this.N) : this.ba
    },
    e: function() {
        return this.M
    },
    u: function() {
        return this.bj
    },
    c: function() {
        return this.V
    },
    v: function() {
        return this.bt
    },
    by: function(n) {
        return String.format("prem/{0}/scripts", n)
    },
    K: function(n) {
        return String.format("prem/{0}/resources", n)
    },
    k: function() {
        return this.Q
    },
    F: function() {
        return this.bp
    },
    bz: function(n, t) {
        return "bootType" in n ? n.bootType : this.bk.a() ? "PAL" : "Standard"
    }
};
_a.R = function() {
    this.b = []
};
_a.R.prototype = {
    b: null,
    c: function(n) {
        return this.b[n]
    },
    m: function(n, t) {
        this.b[n] = t;
        return t
    },
    d: function(n, t) {
        Array.insert(this.b, n, t)
    },
    g: function(n) {
        return this.l(n) >= 0
    },
    l: function(n) {
        for (var t = 0; t < this.b.length; t++)
            if (_j.L.isInstanceOfType(this.c(t))) {
                if (this.c(t).C(n)) return t
            } else if (this.c(t) === n) return t;
        return -1
    },
    a: function(n) {
        Array.add(this.b, n)
    },
    j: function(n) {
        Array.addRange(this.b, n)
    },
    f: function() {
        Array.clear(this.b)
    },
    i: function() {
        for (var t = new _a.R, n = 0; n < this.b.length; n++) t.a(this.c(n));
        return t
    },
    e: function(n) {
        var t = this.l(n);
        if (t < 0) return !1;
        else {
            this.k(t);
            return !0
        }
    },
    k: function(n) {
        Array.removeAt(this.b, n)
    },
    h: function(n) {
        Array.forEach(this.b, n)
    },
    toString: function() {
        var n = new Sys.StringBuilder;
        var t = this;
        this.h(function(t) {
            n.append(t.toString());
            n.append(",")
        });
        return n.toString()
    }
};
_a.jT = function() {
    this.a = []
};
_a.jT.prototype = {
    a: null,
    b: function(n) {
        return this.a[n]
    },
    e: function(n, t) {
        this.a[n] = t;
        return t
    },
    i: function(n) {
        return Array.contains(this.a, n)
    },
    k: function(n) {
        return Array.indexOf(this.a, n)
    },
    c: function(n) {
        Array.add(this.a, n)
    },
    f: function() {
        Array.clear(this.a)
    },
    d: function(n) {
        var t = Array.indexOf(this.a, n);
        if (t < 0) return !1;
        else {
            this.g(t);
            return !0
        }
    },
    g: function(n) {
        Array.removeAt(this.a, n)
    }
};
_a.fO = function() {};
_a.fO.$$ = function(n, t) {
    var f = _a.__tc = _a.__tc || {};
    var i = "fO" + "$" + n.getName().replace(/\./g, "_") + "$" + t.getName().replace(/\./g, "_");
    if (!f[i]) {
        var u = f[i] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _a.fO.apply(this, t)
        };
        u.registerClass("_a.__tc." + i, null, _a.kw, _a.cG, _j.bU);
        var s = {
            "_a.fO": {
                TItem: n,
                TData: t
            },
            ctor: _a.fO
        };
        u.prototype.$$gta = s;
        var o = _a.fO.prototype;
        for (var e in o) {
            var r = {
                key: e,
                value: o[e]
            };
            "constructor" !== r.key && (u.prototype[r.key] = r.value)
        }
    }
    return f[i]
};
_a.fO.prototype = {
    p: null,
    q: null,
    e: function() {
        this.t();
        return this.q
    },
    B: function() {
        return this.p
    },
    d: function(n) {
        this.u(n);
        return n
    },
    a: function() {
        return this.p.length
    },
    b: function(n) {
        this.w(n);
        return this.q[n]
    },
    o: function(n, t) {
        this.r();
        this.q[n] = t;
        this.p[n] = t.B();
        return t
    },
    u: function(n) {
        this.q && Array.clear(this.q);
        if (this.p) {
            if (this.p !== n) {
                Array.clear(this.p);
                Array.addRange(this.p, n)
            }
        } else this.p = n
    },
    c: function(n) {
        this.r();
        Array.add(this.q, n);
        Array.add(this.p, n.B())
    },
    h: function(n) {
        this.r();
        Array.addRange(this.q, n);
        for (var i = n.length, r = new Array(i), t = 0; t < i; t++) r[t] = n[t].B();
        Array.addRange(this.p, r)
    },
    f: function() {
        this.q && Array.clear(this.q);
        Array.clear(this.p)
    },
    g: function(n) {
        this.t();
        return Array.contains(this.q, n)
    },
    m: function(n, t) {
        this.t();
        t = t || 0;
        return Array.indexOf(this.q, n, t)
    },
    k: function(n, t) {
        this.r();
        Array.insert(this.q, n, t);
        Array.insert(this.p, n, t.B())
    },
    n: function(n) {
        this.q && this.s();
        var t = n.B();
        Array.remove(this.p, t);
        this.q && Array.remove(this.q, n)
    },
    j: function(n) {
        this.q && this.s();
        Array.removeAt(this.p, n);
        this.q && Array.removeAt(this.q, n)
    },
    i: function() {
        return this.p
    },
    l: function(n) {
        this.d(n)
    },
    t: function() {
        this.r();
        this.s()
    },
    r: function() {
        this.q || (this.q = new Array(this.p.length))
    },
    s: function() {
        for (var t = this.p.length, n = 0; n < t; n++) this.v(n)
    },
    w: function(n) {
        this.r();
        this.v(n)
    },
    v: function(n) {
        if (this.q.length <= n || !this.q[n]) {
            var t = this.p[n];
            if (t.__type && _a.n.n(t.__type)) this.q[n] = _a.n.c(_a.co, t, _a.co);
            else {
                var i = this.$$gta["_a.fO"].TItem;
                i.inheritsFrom(_a.ec) && (this.q[n] = _a.n.i(i, t));
                if (!this.q[n]) throw Error.create("Unable to create instance of type from DataContractModelIntegrator " + i.getName() + " is the type registered with DataContractModelIntegrator?");
            }
        }
    }
};
_a.G = function(n) {
    this.b = n || {}
};
_a.G.a = function() {
    return new _a.G(null)
};
_a.G.b = function(n) {
    return new _a.G(n)
};
_a.G.prototype = {
    b: null,
    a: function(n, t) {
        this.b[n] = t;
        return t
    },
    g: function() {
        return Object.keys(this.b)
    },
    c: function(n) {
        return n in this.b
    },
    e: function(n) {
        delete this.b[n]
    },
    f: function() {
        return _ff.i.a(this.b)
    },
    d: function(n) {
        var r = this.b;
        for (var i in r) {
            var t = {
                key: i,
                value: r[i]
            };
            n(t.key, t.value)
        }
    },
    h: function() {
        return JsonParser.serialize(this.b)
    }
};
_a.bh = function() {};
_a.bh.f = function(n) {
    if (n !== _a.bh.c) {
        n ? _a.N.d(_a.bh.i) : _a.N.g(_a.bh.i);
        _a.bh.c = n
    }
    return n
};
_a.bh.d = function() {
    return typeof console != "undefined"
};
_a.bh.k = function() {
    _a.bh.e = {}
};
_a.bh.h = function(n) {
    _a.c.c(n, "componentName");
    var t = new RegExp("^[0-9]+$");
    t.test(n) || console.warn("TraceComponent must be a number");
    _a.bh.e[n] = !0
};
_a.bh.g = function(n) {
    var i = _a.bo.c(n).toString();
    var t = _a.bh.e[i];
    return !!t
};
_a.bh.j = function(n) {
    _a.bh.b > 0 && n.length > _a.bh.b && (n = n.substr(0, _a.bh.b) + "...");
    return n
};
_a.bh.i = function(n, t, i) {
    if (_a.bh.l(n, t)) {
        var u = i();
        var r = String.format("{0} {1}", u.j, u.c());
        r = _a.bh.j(r);
        switch (t) {
            case 2:
                console.warn(r);
                break;
            case 1:
                console.error(r);
                break;
            case 3:
            case 4:
            case 5:
                console.info(r);
                break
        }
    }
};
_a.bh.l = function(n, t) {
    return !_a.bh.d() || !_a.bh.c ? !1 : _j.e.e < t ? !1 : _a.bh.a && !_a.bh.g(n) ? !1 : !0
};
_a.iz = function() {};
_a.iz.a = function(n) {
    return n.startsWith("OQC:")
};
_a.cw = function(n) {
    this.f = Function.createDelegate(this, this.j);
    this.h = Function.createDelegate(this, this.l);
    this.i = Function.createDelegate(this, this.m);
    this.g = Function.createDelegate(this, this.k);
    this.d = n;
    this.d.b(_a.cd, this.g);
    this.d.b(_a.jv, this.i);
    this.d.b(_a.bP, this.h);
    this.d.b(_a.eB, this.f);
    this.c = {}
};
_a.cw.prototype = {
    d: null,
    c: null,
    e: null,
    a: function() {
        return this.d
    },
    b: function(n) {
        return this.c[n]
    },
    m: function(n) {
        var t = n.b;
        if (t in this.c) {
            var i = this.c[t];
            if (i === n.a) this.e = t;
            else throw Error.argument("selectContextEvent.Context", "An attempt to select a context different from the existing context was made, NewContextEvent is needed to update the context first before selection");
        } else throw Error.argument("selectContextEvent.ContextKey", "An attempt to select a non-existent content key was made");
    },
    k: function(n) {
        this.c[n.b] = n.a
    },
    l: function(n) {
        var t = n.a;
        delete this.c[t];
        this.e === t && (this.e = null)
    },
    j: function(n) {
        var r = this.c;
        for (var i in r) {
            var t = {
                key: i,
                value: r[i]
            };
            if (!_a.iz.a(t.key) && !t.value.bf()) {
                n.a = _fs.T.G;
                return
            }
        }
    }
};

function CoreFrameworkComponent() {}
CoreFrameworkComponent.$$cctor = function() {
    _a.t.a().a(CoreFrameworkComponent)
};
CoreFrameworkComponent.prototype = {
    b: function(n, t, i) {
        if (!t.a()) {
            n.e(_a.gc).b(_a.E).a();
            var k = this;
            n.b(_a.r, function() {
                return new _a.r(i.a())
            }).a()
        }
        var d = this;
        n.b(_no.d, function() {
            return _no.d.b(_a.g.o, _a.g.n())
        }).b(_no.c).a();
        var g = this;
        n.b(_a.cQ, function() {
            return new _a.cQ(window.location, n.a(_a.E))
        }).b(_a.fB).a();
        var p = this;
        n.b(_a.cj, function() {
            return _a.g.a
        }).b(_a.q).a();
        var w = this;
        n.b(_a.cr, function() {
            return _a.g.l
        }).a();
        var b = this;
        n.b(_a.fd, function() {
            return _a.g.f()
        }).a();
        var rt = this;
        n.b(_a.o, function() {
            return _a.o.a()
        }).b(_j.o).b(_j.p).a();
        var ut = this;
        n.b(_a.fQ, function() {
            return new _a.fQ(n.a(_a.eQ), n.a(_a.eS))
        }).b(_a.bv).a();
        var ft = this;
        n.b(_a.fy, function() {
            return new _a.fy(n.a(_a.e), n.a(_j.o), n.a(_a.z))
        }).b(_a.x).a();
        var nt = this;
        n.b(_a.Z, function() {
            return new _a.Z(n.a(_a.E))
        }).a();
        var tt = this;
        n.b(_a.dB, function() {
            return new _a.dB
        }).b(_no.h).b(_a.dB).a();
        var it = this;
        _dh.e(n.b(_no.a, function() {
            var r = i.f() || !i.j();
            var t = new _a.iZ(n.a(_j.o), r);
            return new _no.a(n.a(_j.j), t, _a.g.o, _no.d.b(_a.g.o, _a.g.n()), t.d() ? new _a.jc : new _a.jd, i.e().a().r().Enabled ? n.a(_no.h) : null)
        }).b(IPendingGetManager).a(), n);
        var e = this;
        n.b(_a.fU, function() {
            var i = null;
            t.c() && (i = new _a.fU(n.a(_a.Z), _a.g.B));
            return i
        }).b(_a.eW);
        var o = this;
        n.b(_a.I, function() {
            return n.a(_a.z).b()
        }).a();
        var s = this;
        n.b(_a.fl, function() {
            return new _a.fl(n.a(_a.I))
        }).a();
        var r = this;
        n.b(_a.fg, function() {
            return new _a.fg
        }).a();
        var u = this;
        n.b(_a.ds, function() {
            return new _a.ds(n.a(_a.z), n.a(_j.o))
        }).a();
        var f = this;
        n.b(_a.cw, function() {
            return new _a.cw(n.a(_j.j))
        }).a();
        n.e(_a.dX).a();
        var a = this;
        n.b(_j.v, function() {
            return _j.m.a()
        }).a();
        n.e(_a.em).b(_a.dy).a();
        var v = this;
        n.b(_a.eR, function() {
            return new _a.eR(i.a(), n.d(_a.fH))
        }).a();
        var y = this;
        n.b(_a.fa, function() {
            return new _a.fa(n.a(_j.o))
        }).a();
        var h = this,
            c = this;
        n.b(_dtl, function() {
            return _dtl.f(n.a(_j.v), i.J())
        }).b(_j.t).a().c(function(n) {
            _dh.h(n)
        });
        var l = this;
        n.b(_j.cd.$$(_j.t), function() {
            return n.d(_j.t)
        }).a()
    },
    a: function() {
        return [new _j.y(_a.ds, 0, -1), new _j.y(_a.fl, 0, -1), new _j.y(_a.fg, 0, -1), new _j.y(_a.eR, 2, 1), new _j.y(_a.cw, 2, -1), new _j.y(_a.fa, 2, -1)]
    }
};
_a.eD = function(n, t, i, r, u) {
    this.a = n;
    this.b = t;
    this.e = i;
    this.c = r;
    this.d = u
};
_a.eD.prototype = {
    c: 0,
    a: 0,
    b: 0,
    e: 0,
    d: 0
};
_a.fu = function() {};
_a.fu.a = function(n, t) {
    _a.c.b(n, "oldSample");
    var i = 0;
    t || (t = n);
    _a.c.f(t.c, n.c, "newSample.CounterType");
    switch (t.c) {
        case 0:
            i = t.a;
            break;
        case 16:
            i = t.a - n.a;
            break;
        case 64:
            i = 100 * _a.fu.b(t);
            break;
        default:
            _a.c.h(String.format("Calculating value for type {0} is invalid", t.c));
            break
    }
    return i
};
_a.fu.b = function(n) {
    return n.b ? n.a / n.b : 0
};
_a.iA = function(n) {
    _a.iA.initializeBase(this);
    _a.c.a(n, "dataUri");
    if (!n.startsWith("data:")) throw Error.argument("dataUri", "dataUri must be a string that starts with data:");
    this.b = n
};
_a.iA.prototype = {
    b: null,
    a: function() {
        return this.b
    }
};
_a.n = function() {};
_a.n.d = function(n, t, i) {
    if (t.implementsInterface(_ff.F)) {
        var r = t;
        var u = r._dataContractName;
        _a.n.k(r, u, n, i)
    }
    _a.n.h[n.getName()] = i
};
_a.n.b = function(n, t, i, r) {
    _j.s.b(i, "factory");
    _a.n.k(t, r, n, i);
    _a.n.g[n.getName()] = i
};
_a.n.a = function(n, t, i) {
    _j.s.b(i, "factory");
    _a.n.g[n.getName()] = i
};
_a.n.c = function(n, t, i) {
    return _a.n.j(n, t, i, !1)
};
_a.n.l = function(n, t, i) {
    return _a.n.j(n, t, i, !0)
};
_a.n.n = function(n) {
    return n in _a.n.f
};
_a.n.e = function(n, t, i) {
    t ? t.l(i) : t = _a.n.l(n, i, n);
    return t
};
_a.n.m = function(n) {
    var t = null;
    n && (t = _a.n.f[n]);
    return t
};
_a.n.i = function(n, t) {
    var r = n;
    if (t.__type) {
        var u = _a.n.f[t.__type];
        if (u)
            if (u === n || u.inheritsFrom(n)) r = u;
            else throw Error.invalidOperation("Cannot transform " + t.__type + " into a " + n.getName());
    }
    var i = _a.n.g[r.getName()];
    if (i) return i(t);
    i = _a.n.h[r.getName()];
    if (i) return i(t);
    throw Error.argumentOutOfRange("modelType", n, "Coerce is newing up unexpected type " + r.getName());
};
_a.n.o = function(n, t) {
    var r = Object.getType(n);
    var i = r._dataContractName;
    i && (t.__type = i)
};
_a.n.j = function(n, t, i, r) {
    if (!t) return null;
    var u = null;
    var s = "<unknown>";
    var o = !1;
    if (t.__type) {
        s = t.__type;
        u = _a.n.f[t.__type]
    }
    if (!u) {
        u = i;
        o = !0;
        if (!u) throw Error.invalidOperation("__type information is not present in the given data contract and defaultType was not provided, not clear which model to create.");
    }
    var h = u === n || u.inheritsFrom(n);
    if (!h && r) return null;
    var f = _a.n.g[u.getName()];
    if (f) {
        var e = f(t);
        e.gd = o;
        return e
    }
    if (!r) {
        f = _a.n.h[u.getName()];
        if (f) return f(t)
    }
    return null
};
_a.n.k = function(n, t, i, r) {
    _j.s.b(n, "dataContractType");
    _j.s.b(i, "modelType");
    _j.s.b(r, "factory");
    _a.n.f[t] = i;
    i._dataContractName = t
};
_a.du = function() {};
_a.du.c = function(n) {
    n ? _a.b.C(_a.du.a) : _a.b.G(_a.du.a);
    _a.du.b = n;
    return n
};
_a.du.a = function(n) {
    _a.A.b && _a.A.b.b() && _a.A.b.a(n)
};
_a.ck = function() {};
_a.ck.$$cctor = function() {
    _a.ck.b(_j.n.d);
    _a.L.a().q(function(n) {
        _a.ck.b(n)
    })
};
_a.ck.e = function(n) {
    if (n && !_a.ck.a) {
        _a.bg.j(_a.ck.c);
        _a.ck.a = !0
    } else if (!n && _a.ck.a) {
        _a.bg.m(_a.ck.c);
        _a.ck.a = !1
    }
    return n
};
_a.ck.b = function(n) {
    _a.ck.d = n;
    _a.ck.e(!!n);
    return n
};
_a.ck.c = function(n) {
    _a.A.d() && _a.A.a.a(n)
};
_a.bi = function() {};
_a.bi.m = function(n) {
    if (n && !_a.bi.b) {
        _a.N.d(_a.bi.i);
        _a.bi.b = !0
    } else if (!n && _a.bi.b) {
        _a.N.g(_a.bi.i);
        _a.bi.b = !1;
        _a.bi.c.e()
    }
    return n
};
_a.bi.d = function(n) {
    _a.bi.a = n;
    _a.bi.m(!!n);
    return n
};
_a.bi.j = function(n, t) {
    switch (n) {
        case 4:
            _a.bi.e[t] = !0;
            break;
        case 3:
            _a.bi.f[t] = !0;
            break;
        case 5:
            _a.bi.g[t] = !0;
            break;
        case 2:
            _a.bi.h[t] = !0;
            break;
        default:
            return
    }
};
_a.bi.l = function() {
    return _a.bi.c.c()
};
_a.bi.i = function(n, t, i) {
    if (_a.bi.a)
        if (t <= _a.bi.a || t <= _a.bi.k(n)) _a.g.l.b(i());
        else switch (t) {
            case 2:
            case 3:
            case 4:
                _a.bi.c.b(i());
                break;
            case 1:
            case 5:
                break
        }
};
_a.bi.k = function(n) {
    var t = _a.bo.c(n).toString();
    return _a.bi.h[t] && _a.bi.a <= 2 ? 2 : _a.bi.f[t] && _a.bi.a <= 3 ? 3 : _a.bi.e[t] && _a.bi.a <= 4 ? 4 : _a.bi.g[t] && _a.bi.a <= 5 ? 5 : _a.bi.a
};
_a.ec = function() {
    _a.ec.initializeBase(this);
    _a.g.g().a(this)
};
_a.ec.prototype = {
    hY: function() {
        return _a.bW.c(Object.getType(this))
    },
    fa: function(n) {
        for (var i = this.hY(), t = 0; t < i.a.length; t++) this.wH(n, i.a[t])
    },
    fo: function() {
        for (var t = {}, i = this.hY(), n = 0; n < i.a.length; n++) this.qG(t, i.a[n]);
        _a.n.o(this, t);
        return t
    },
    wH: function(n, t) {
        var r = t.e().a(n, t);
        var i = t.n(r);
        this.eK(t, i)
    },
    qG: function(n, t) {
        var r = this.eM(t);
        var i = t.o(r);
        t.e().b(n, t, i)
    }
};
_a.bW = function(n) {
    var t = n.getBaseType();
    if (t) {
        var e = _a.bW.c(t);
        this.a = Array.clone(e.a)
    } else this.a = [];
    this.b(n);
    for (var u = n.getInterfaces(), i = 0; i < u.length; i++) {
        var r = u[i];
        var f = !!t && t.implementsInterface(r);
        f || this.b(r)
    }
};
_a.bW.d = function(n, t) {
    _a.bW.a || (_a.bW.a = new _a.iB);
    _a.bW.a.b(n, t)
};
_a.bW.c = function(n) {
    var i = n.getName();
    _a.bW.b || (_a.bW.b = {});
    var t = _a.bW.b[i];
    if (!t) {
        t = new _a.bW(n);
        _a.bW.b[i] = t
    }
    return t
};
_a.bW.prototype = {
    a: null,
    b: function(n) {
        _a.bW.a && _a.bW.a.d(n) && Array.addRange(this.a, _a.bW.a.c(n))
    }
};
_a.iB = function() {
    this.a = {}
};
_a.iB.prototype = {
    d: function(n) {
        return n.getName() in this.a
    },
    c: function(n) {
        return this.a[n.getName()]
    },
    b: function(n, t) {
        var i = n.getName();
        i in this.a || (this.a[i] = []);
        this.a[i].push(t)
    }
};
_a.f = function(n, t, i, r, u, f, e, o) {
    this.k = _a.dz.a;
    _a.f.initializeBase(this, [n, t, i, r, u, f, e, o]);
    this.j = this.c.inheritsFrom(_ff.e);
    _a.bW.d(i, this)
};
_a.f.prototype = {
    j: !1,
    e: function() {
        return this.k || _a.dz.a
    },
    b: function(n) {
        if (this.k !== _a.dz.a) throw Error.invalidOperation("Cannot set JsonConverter of a property twice.");
        this.k = n;
        return n
    },
    n: function(n) {
        if (n === undefined) return this.d;
        if (n === null) return _j.Q.b(this.c, n);
        if (this.j || this.c.isInstanceOfType(n) || Type.isEnum(this.c) && Number.isInstanceOfType(n)) return n;
        if (Date.isInstanceOfType(n) && this.c === _a.d) return _a.d.o(n);
        if (String.isInstanceOfType(n)) {
            if (Type.isEnum(this.c)) return _j.u.d(this.c, n);
            if (this.c === _a.d) return _a.d.b(n);
            if (this.c === Number) {
                var t = Number.parseInvariant(n);
                if (!isNaN(t) && isFinite(t)) return t
            }
            var u = this.c.parse;
            if (u) {
                var r = u(n);
                if (r !== undefined) return r
            }
        }
        if (Object.isInstanceOfType(n) && this.c === Error) return _a.ErrorConverter.create(n);
        var i = this.c.create;
        if (i) return i(n);
        if (Object.isInstanceOfType(n) && this.c.inheritsFrom(_a.ec)) return _a.n.i(this.c, n);
        throw Error.invalidOperation(this.l() + " cannot safely coerce " + Object.getType(n).getName() + " to " + this.c.getName());
    },
    o: function(n) {
        return n === undefined ? this.i(this.d) : n === null ? null : Type.isEnum(this.c) ? n : this.i(n)
    },
    i: function(n) {
        if (n === null || String.isInstanceOfType(n) || Number.isInstanceOfType(n) || Boolean.isInstanceOfType(n) || this.j) return n;
        if (_a.cG.isInstanceOfType(n)) return n.i();
        var c = Object.getType(n);
        if (_a.ec.isInstanceOfType(n)) {
            var h = n;
            return h.fo()
        }
        if (_j.l.isInstanceOfType(n)) return n;
        if (_a.d.isInstanceOfType(n)) return _a.d.f(n);
        if (Array.isInstanceOfType(n)) {
            for (var o = n, s = [], t = 0; t < o.length; t++) s[t] = this.i(o[t]);
            return s
        }
        if (_a.ca.isInstanceOfType(n)) {
            var l = n.a;
            var r = {};
            var u = l;
            for (var f in u) {
                var i = {
                    key: f,
                    value: u[f]
                };
                r[i.key] = this.i(i.value)
            }
            return r
        }
        var e = c.condense;
        if (e) return e(n);
        if (Error.isInstanceOfType(n)) return _a.ErrorConverter.i(n);
        throw Error.invalidOperation(this.l() + " cannot safely coerce " + this.c.getName() + " to JSON");
    }
};
_a.r = function(n) {
    this.c = Function.createDelegate(this, this.g);
    this.d = Function.createDelegate(this, this.h);
    _a.r.initializeBase(this);
    n !== "Mouse" && this.f()
};
_a.r.b = function(n) {
    return n.matches ? 1 : 0
};
_a.r.a = function(n) {
    return n === 90 || n === -90 ? 1 : 0
};
_a.r.prototype = {
    a: 0,
    b: function(n) {
        if (this.a === n) return n;
        this.a = n;
        this.by("Orientation");
        return n
    },
    f: function() {
        var t = window.orientation;
        if (t !== undefined) {
            window.addEventListener("orientationchange", this.d);
            this.b(_a.r.a(t))
        } else {
            var n = null;
            window.matchMedia ? n = window.matchMedia("all and (orientation:landscape)") : window.msMatchMedia && (n = window.msMatchMedia("all and (orientation:landscape)"));
            if (n) {
                n.addListener(this.c);
                this.b(_a.r.b(n))
            }
        }
    },
    g: function(n) {
        this.b(_a.r.b(n))
    },
    h: function() {
        this.b(_a.r.a(window.orientation))
    }
};
_a.iI = function() {
    this.c = Function.createDelegate(this, this.e);
    this.a = new _a.bG(100)
};
_a.iI.prototype = {
    a: null,
    b: !1,
    d: function(n) {
        if (n && !this.b) {
            _a.N.d(this.c);
            this.b = !0
        } else if (!n && this.b) {
            _a.N.g(this.c);
            this.b = !1
        }
        return n
    },
    e: function(n, t, i) {
        if (!(_j.e.e < t)) {
            var u = i();
            var f = _a.d.d(u.j);
            var r = _j.h.c("[UTC: {0}], {1}", f, u.c());
            switch (t) {
                case 1:
                    r = "E: " + r;
                    break;
                case 2:
                    r = "W: " + r;
                    break;
                case 3:
                    r = "P: " + r;
                    break;
                case 4:
                    r = "I: " + r;
                    break;
                case 5:
                    r = "V: " + r;
                    break
            }
            this.a.b(r)
        }
    }
};
_a.ca = function(n) {
    this.a = n
};
_a.ca.prototype = {
    a: null
};
_a.ErrorConverter = function() {};
_a.ErrorConverter.create = function(n) {
    _a.c.b(n, "errorInformation");
    var t = {};
    t[_a.ErrorConverter.b] = n[_a.ErrorConverter.c];
    t[_a.ErrorConverter.h] = n[_a.ErrorConverter.e];
    t[_a.ErrorConverter.g] = n[_a.ErrorConverter.d];
    t[_a.ErrorConverter.f] = n[_a.ErrorConverter.a];
    return Error.create(t[_a.ErrorConverter.b], t)
};
_a.ErrorConverter.i = function(n) {
    _a.c.b(n, "exception");
    var i = n;
    var t = {};
    t[_a.ErrorConverter.c] = i[_a.ErrorConverter.b];
    t[_a.ErrorConverter.e] = i[_a.ErrorConverter.h];
    t[_a.ErrorConverter.d] = i[_a.ErrorConverter.g];
    t[_a.ErrorConverter.a] = i[_a.ErrorConverter.f];
    return t
};
_a.dI = function(n, t) {
    _a.c.c(n, "name");
    this.b = {};
    this.f(n);
    this.g(n + ": " + t)
};
_a.dI.a = function(n, t) {
    return !!n && t === n.name
};
_a.dI.b = function(n, t, i) {
    _a.c.a(t, "ex");
    if (_a.dI.a(t, i)) {
        var r = new n;
        r.b = t;
        return r
    } else throw Error.argument("ex", String.format("Exception must be of type '{0}' to successfully convert.", i));
};
_a.dI.prototype = {
    b: null,
    f: function(n) {
        this.b.name = n;
        return n
    },
    e: function() {
        return this.b.message
    },
    g: function(n) {
        this.b.message = n;
        return n
    },
    a: function() {
        return Error.create(this.e(), this.b)
    }
};
_a.dp = function() {};
_a.dH = function() {};
_a.cP = function() {};
_a.dq = function() {};
_a.da = function() {};
_a.eB = function() {};
_a.eB.prototype = {
    a: null
};
_a.cS = function(n) {
    this.a = n
};
_a.cS.prototype = {
    a: !1
};
_a.ea = function(n, t) {
    this.a = n;
    this.b = t
};
_a.ea.prototype = {
    a: null,
    b: null
};
_a.br = function() {};
_a.eg = function() {};
_a.dw = function() {};
_a.cn = function() {};
_a.fz = function() {};
_a.cU = function() {};
_a.dP = function(n) {
    this.a = n
};
_a.dP.prototype = {
    a: !1
};
_a.cd = function(n, t) {
    this.b = n;
    this.a = t
};
_a.cd.prototype = {
    b: null,
    a: null
};
_a.dC = function() {};
_a.dD = function(n) {
    this.a = n
};
_a.dD.prototype = {
    a: 0
};
_a.bq = function(n) {
    this.a = n
};
_a.bq.prototype = {
    a: !1
};
_a.el = function() {};
_a.cA = function(n, t, i, r) {
    this.a = n;
    this.d = t;
    this.c = i;
    this.b = r
};
_a.cA.prototype = {
    c: null,
    d: null,
    a: 0,
    b: null
};
_a.en = function() {};
_a.ep = function() {};
_a.eq = function() {};
_a.bP = function(n) {
    this.a = n
};
_a.bP.prototype = {
    a: null
};
_a.fe = function(n) {
    this.a = n
};
_a.fe.prototype = {
    a: 0
};
_a.jv = function() {
    this.b = contextKey;
    this.a = context
};
_a.jv.prototype = {
    b: null,
    a: null
};
_a.cW = function() {};
_a.fh = function(n) {
    this.a = n
};
_a.fh.prototype = {
    a: null,
    b: function() {
        return Number.parseInvariant(this.a)
    }
};
_a.dU = function(n) {
    this.a = n
};
_a.dU.prototype = {
    a: 0
};
_a.fi = function() {};
_a.cp = function(n) {
    this.a = _j.Q.a(Boolean, n)
};
_a.cp.prototype = {
    a: !1
};
_a.dk = function(n) {
    this.a = n
};
_a.dk.prototype = {
    a: null
};
_a.ev = function() {};
_a.cC = function() {};
_a.fm = function() {};
_a.fy = function(n, t, i) {
    this.x = n;
    this.A = t;
    this.z = i;
    this.y = i.a()
};
_a.fy.prototype = {
    A: null,
    x: null,
    y: 0,
    z: null,
    b: function() {
        return this.y === "Mouse" || this.y === "TouchWide" && this.A.w() && this.A.b()
    },
    p: function() {
        return !!this.a() && this.a().jp().Enabled && this.y === "Mouse"
    },
    n: function() {
        return !!this.a() && (this.a().K().Enabled || this.a().bI().Enabled || this.a().N().Enabled || this.a().M().Enabled || this.a().X().Enabled)
    },
    B: !1,
    f: function() {
        return this.B
    },
    w: function(n) {
        this.B = n;
        return n
    },
    a: function() {
        return this.x ? this.x.a() : null
    },
    d: function() {
        return this.x && this.x.a().bw().Enabled && this.z.d().b("15.01.0379.000") ? !0 : !1
    },
    u: function() {
        return this.z.d().b("15.01.0451.000") ? !0 : !1
    },
    c: function() {
        return this.a() ? this.a().u().Enabled : !1
    },
    e: function() {
        return this.a() ? this.a().J().Enabled : !1
    },
    h: function() {
        return this.e() || this.c()
    },
    l: function() {
        return !0
    },
    t: function() {
        return this.a() ? this.a().bC().Enabled : !1
    },
    k: function() {
        return !!this.a() && this.a().bV().Enabled && this.y === "Mouse" && this.z.d().b("15.01.1083.000")
    },
    m: function() {
        return this.x ? this.x.m() : null
    },
    i: function() {
        return !!this.a() && this.a().gf().Enabled && this.y === "Mouse"
    },
    r: function() {
        return !!this.a() && this.a().kR().Enabled && this.y === "Mouse"
    },
    v: function() {
        return !!this.a() && this.a().gg().Enabled && this.y === "Mouse"
    },
    q: function() {
        return this.a() ? this.a().kT().Enabled && this.y === "Mouse" : !1
    },
    o: function() {
        return this.z.d().b("15.20.0158.000")
    },
    j: function(n) {
        return !!this.x && this.x.a().be().Enabled && n
    },
    g: function(n) {
        return !!this.x && this.x.g(n)
    }
};
_a.cb = function(n) {
    this.c = n || {};
    this.b = new _a.il(this.c)
};
_a.cb.prototype = {
    c: null,
    d: null,
    g: function(n) {
        return n in this.c && this.c[n].Enabled
    },
    m: function() {
        if (!this.d) {
            this.d = new Array(0);
            for (var i = Object.keys(this.c), r = i.length, n = 0; n < r; ++n) {
                var u = i[n];
                var t = this.c[u];
                t.Enabled && Array.add(this.d, t.Name)
            }
        }
        return this.d
    },
    b: null,
    a: function() {
        return this.b
    }
};
_a.bX = function(n) {
    this.a = [];
    this.b = n
};
_a.bX.c = function(n) {
    var i = _j.n.b(_a.a.cc, 0, "FrameRateMonitor");
    try {
        if (!_a.o.a().j() || !_a.bX.a.length) return;
        var r = n - _a.bX.b;
        _a.bX.b = n;
        for (var t = 0; t < _a.bX.a.length; t++) Array.add(_a.bX.a[t].a, r);
        _a.bX.d(_a.bX.c)
    } finally {
        _j.n.a(i)
    }
};
_a.bX.d = function(n) {
    window.mozRequestAnimationFrameProperty ? window.mozRequestAnimationFrame(n) : window.webkitRequestAnimationFrameProperty ? window.webkitRequestAnimationFrame(n) : window.msRequestAnimationFrameProperty && window.msRequestAnimationFrame(n)
};
_a.bX.prototype = {
    b: null,
    d: function() {
        if (null !== window.mozRequestAnimationFrameProperty || null !== window.webkitRequestAnimationFrameProperty || null !== window.msRequestAnimationFrameProperty) {
            if (!_a.bX.a.length) {
                _a.bX.b = new Date;
                _a.bX.d(_a.bX.c)
            }
            Array.add(_a.bX.a, this)
        }
    },
    e: function() {
        if (null !== window.mozRequestAnimationFrameProperty || null !== window.webkitRequestAnimationFrameProperty || null !== window.msRequestAnimationFrameProperty) {
            Array.remove(_a.bX.a, this);
            _j.e.e >= 4 && this.c()
        }
    },
    c: function() {
        var r = 'Framerate data for "' + this.b + '": ';
        r += "Frames:" + this.a.length;
        if (this.a.length > 1) {
            for (var f = 0, i = 0, n = 1; n < this.a.length; n++) {
                var t = this.a[n];
                f += t;
                t > i && (i = t)
            }
            var u = f / this.a.length;
            r += "; Avg:" + u + "ms (" + 1e3 / u + " fps)";
            r += "; Max:" + i + "ms"
        }
    }
};
_a.v = function() {};
_a.v.c = function() {
    return _a.v.i ? _a.v.i : _a.cl.a()
};
_a.v.k = function(n) {
    _a.v.i = n;
    _a.d.ci();
    return n
};
_a.v.a = function() {
    _a.v.h || (_a.v.h = new Globalize(_a.v.b()));
    return _a.v.h
};
_a.v.b = function() {
    if (_a.v.f) return _a.v.f;
    var t = _a.g.x ? _a.g.x : _a.v.c().v();
    if (t) {
        var n = _a.F.s[t.toLowerCase()];
        if (n) {
            _a.v.f = n;
            return _a.v.f
        }
    }
    _a.v.f = _a.cl.a().g;
    return _a.v.f
};
_a.v.g = function() {
    if (!_a.v.e) {
        var n = _a.v.b();
        switch (n.toLowerCase()) {
            case "bn-in":
            case "nn-no":
            case "pt-pt":
                _a.v.e = n;
                break;
            case "bn-bd":
                _a.v.e = "bn-in";
                break;
            case "nb-no":
                _a.v.e = "no";
                break;
            case "sr-cyrl-cs":
                _a.v.e = "sr-cyrl";
                break;
            case "sr-latn-cs":
                _a.v.e = "sr";
                break;
            case "zh-cn":
            case "zh-sg":
                _a.v.e = "zh-hans";
                break;
            case "zh-hk":
            case "zh-mo":
            case "zh-tw":
                _a.v.e = "zh-hant";
                break;
            default:
                var t = n.lastIndexOf("-");
                _a.v.e = t > 0 ? n.substring(0, t) : n;
                break
        }
    }
    return _a.v.e
};
_a.v.d = function() {
    return _a.v.a().culture().isRTL
};
_a.v.j = function() {
    _a.v.h = null;
    _a.v.f = null
};
_a.ch = function(n) {
    this.a = n
};
_a.ch.prototype = {
    a: null,
    c: function() {
        return this.a.i()
    },
    b: function() {
        return this.c().href
    },
    f: function() {
        return this.c().protocol
    },
    d: function() {
        return this.c().id
    },
    e: function() {
        return this.c().innerText || this.c().pathname
    }
};
_a.bL = function() {};
_a.bL.c = function(n) {
    _a.c.c(n, "ewsId");
    return _a.bL.h(_a.bL.e(_a.bf.b(n)), 1)
};
_a.bL.j = function(n) {
    _a.c.c(n, "ewsFolderId");
    return _a.bL.h(_a.bL.e(_a.bf.b(n)), 2)
};
_a.bL.g = function(n) {
    if (_j.h.b(n)) return !1;
    if (n.startsWith("publicfolder")) return !0;
    var t = _a.bL.f(n);
    return t === 1
};
_a.bL.a = function(n) {
    if (_j.h.b(n)) return !1;
    var t = _a.bL.f(n);
    return t === 2
};
_a.bL.f = function(n) {
    for (var r = _a.bf.b(n), t = new Array(r.length), i = 0; i < r.length; i++) t[i] = r.charCodeAt(i);
    var u = 0;
    t[0] === 1 ? t = _a.bL.b.a(t) : u = 1;
    return t[u++]
};
_a.bL.h = function(n, t) {
    var i = 0;
    n[0] === 1 ? n = _a.bL.b.a(n) : i = 1;
    var e = n[i++];
    switch (e) {
        case 3:
        case 4:
            var r = n[i] + (n[i + 1] >>> 8);
            i += 2;
            if (t === 1) return _a.bL.d(n, i, r);
            i += r;
            if (n[i++]) throw Error.invalidOperation("Don't support recurrenceIds");
            r = n[i] + (n[i + 1] >>> 8);
            i += 2;
            var f = _a.bL.d(n, i, r);
            if (t === 2) return _a.bf.a(f);
            var u = new Sys.StringBuilder(String.fromCharCode(r));
            u.append(f);
            u.append(String.fromCharCode(1));
            return _a.bf.a(u.toString());
        default:
            return null
    }
};
_a.bL.e = function(n) {
    for (var i = new Array(n.length), t = 0; t < n.length; t++) i[t] = n.charCodeAt(t);
    return i
};
_a.bL.d = function(n, t, i) {
    if (t + i <= n.length) {
        for (var u = new Sys.StringBuilder, r = t; r < t + i; r++) u.append(String.fromCharCode(n[r]));
        return u.toString()
    } else throw Error.argument("IdConverter.ConvertByteArrayToString: offset + count must not exceed byte array length.");
};
_a.bL.b = function() {};
_a.bL.b.a = function(n) {
    var i = _a.bL.b.b(n, null);
    if (!i) throw Error.invalidOperation("Invalid Id");
    var t = new Array(i);
    _a.bL.b.b(n, t);
    return t
};
_a.bL.b.b = function(n, t) {
    for (var r = 0, i = 1; i < n.length; ++i)
        if (i === n.length - 1 || n[i] !== n[i + 1]) {
            t && (t[r] = n[i]);
            r++
        } else {
            if (i === n.length - 2) throw Error.invalidOperation("Invalid Id");
            for (var f = n[i + 2], u = 0; u < f + 2; u++) {
                t && (t[r] = n[i]);
                r++
            }
            i += 2
        }
    return r
};
_a.dx = function() {
    _a.dx.initializeBase(this)
};
_a.dx.prototype = {
    e: function(n) {
        return _a.dx.a[n]
    },
    g: function(n, t) {
        _a.dx.a[n] = t
    },
    f: function(n) {
        delete _a.dx.a[n]
    },
    d: function() {
        _a.dx.a = {}
    }
};
_a.cr = function() {
    this.g = Function.createDelegate(this, this.j);
    var n = new _j.q;
    n.o(_a.cr.a(1), new _a.bG(1250));
    n.o(_a.cr.a(2), new _a.bG(250));
    n.o(_a.cr.a(4), new _a.bG(1e3));
    n.o(_a.cr.a(8), new _a.bG(50));
    n.o(_a.cr.a(16), new _a.bG(50));
    this.c = {};
    this.c[null] = n
};
_a.cr.a = function(n) {
    if (1 & n) return 0;
    if (2 & n) return 1;
    if (8 & n) return 2;
    if (4 & n) return 3;
    if (16 & n) return 4;
    throw Error.argumentOutOfRange("consumer", n);
};
_a.cr.prototype = {
    c: null,
    e: !0,
    b: function(n) {
        if (this.e) {
            var i = this.c[null];
            var t = _a.cr.a(n.k);
            i.d[t].b(n)
        }
    },
    a: function(n, t) {
        if (this.e) {
            if (!t || !(n.k & 2)) {
                this.b(n);
                return
            }
            var i = null;
            if (this.c[t]) i = this.c[t];
            else {
                i = new _j.q;
                i.o(0, new _a.bG(250));
                this.c[t] = i
            }
            i.d[0].b(n)
        }
    },
    j: function(n) {
        var u = new Sys.StringBuilder;
        var f = this.c;
        for (var s in f)
            for (var v = {
                    key: s,
                    value: f[s]
                }, h = v.value, a = h.d.length, t = 0; t < a; t++)
                for (var e = h.d[t], p = e.a.length, i = 0; i < p; i++) u.appendLine(e.f(i).o(n));
        for (var y = _a.bi.l(), o = y, l = o.length, r = 0; r < l; ++r) {
            var c = o[r];
            u.appendLine(c.o(n))
        }
        return new _a.bM("Datapoints (Timestamp, Name, Data):", u.toString())
    },
    i: function(n, t) {
        var h = {};
        var l = new _j.q;
        var c = this.c;
        for (var a in c) {
            for (var r = {
                    key: a,
                    value: c[a]
                }, u = 0, i = r.value, s = 0; s < i.d.length; s++) u += i.d[s].i();
            if (!u) {
                r.key !== "null" && l.c(r.key);
                continue
            }
            n && u++;
            var o = new Array(u);
            var e = 0;
            if (n) {
                o[0] = t(n);
                e++
            }
            for (var f = 0; f < i.d.length; f++) {
                e += i.d[f].l(t, o, e);
                i.d[f].k()
            }
            h[r.key] = o
        }
        this.h(l);
        return h
    },
    d: function() {
        var i = new _j.q;
        var u = this.c;
        for (var f in u) {
            for (var n = {
                    key: f,
                    value: u[f]
                }, r = n.value, t = 0; t < r.d.length; t++) r.d[t].e();
            "null" !== n.key && i.c(n.key)
        }
        this.h(i)
    },
    f: function() {
        this.d();
        this.e = !1
    },
    h: function(n) {
        for (var t = 0; t < n.d.length; t++) delete this.c[n.d[t]]
    }
};
_a.eb = function(n, t) {
    this.e = n;
    this.f = t
};
_a.eb.prototype = {
    e: null,
    f: 0,
    b: function() {
        return !0
    },
    c: function(n, t) {
        this.e.b(new _a.bt(this.f, n, t))
    },
    d: function(n) {
        this.e.b(n())
    },
    a: function(n) {
        this.e.b(n)
    }
};
_a.fw = function() {};
_a.fw.prototype = {
    b: function() {
        return !1
    },
    c: function(n, t) {},
    d: function(n) {},
    a: function(n) {}
};
_a.be = function() {};
_a.be.c = function() {
    _a.be.d != null || (_a.be.d = !!window.performance && !!window.performance.timing && !!window.performance.navigation);
    return _a.be.d
};
_a.be.e = function() {
    if (_a.be.a) return _a.be.a;
    _a.be.a = new _j.q;
    if (_a.be.c()) {
        var n = window.performance.timing;
        _a.be.b(_a.be.a, "NavAPI_TotalTime", n.navigationStart, n.loadEventEnd);
        _a.be.b(_a.be.a, "NavAPI_Redirect", n.redirectStart, n.redirectEnd);
        _a.be.b(_a.be.a, "NavAPI_Fetch", n.fetchStart, n.responseEnd);
        _a.be.b(_a.be.a, "NavAPI_DomainLookup", n.domainLookupStart, n.domainLookupEnd);
        _a.be.b(_a.be.a, "NavAPI_Connect", n.connectStart, n.connectEnd);
        _a.be.b(_a.be.a, "NavAPI_SecureConnect", n.secureConnectionStart, n.connectEnd);
        _a.be.b(_a.be.a, "NavAPI_Request", n.requestStart, n.responseStart);
        _a.be.b(_a.be.a, "NavAPI_Response", n.responseStart, n.responseEnd);
        _a.be.b(_a.be.a, "NavAPI_UnloadEvent", n.unloadEventStart, n.unloadEventEnd);
        _a.be.b(_a.be.a, "NavAPI_DomLoad", n.domLoading, n.domComplete);
        _a.be.b(_a.be.a, "NavAPI_DomPreInteractive", n.domLoading, n.domInteractive);
        _a.be.b(_a.be.a, "NavAPI_DomPostInteractive", n.domInteractive, n.domComplete);
        _a.be.b(_a.be.a, "NavAPI_DomContentLoadEvent", n.domContentLoadedEventStart, n.domContentLoadedEventEnd);
        _a.be.b(_a.be.a, "NavAPI_WindowsLoadEvent", n.loadEventStart, n.loadEventEnd)
    }
    return _a.be.a
};
_a.be.b = function(n, t, i, r) {
    i > 0 && n.c(_a.bA.b(_a.a.R, 515, t, 2, i, r))
};
_a.X = function() {};
_a.X.$$cctor = function() {
    _a.X.p()
};
_a.X.j = function(n) {
    var i = null;
    if (n && _a.X.e()) {
        var t = window.performance.getEntriesByName(n);
        _a.X.f++;
        t.length > 0 ? i = t[t.length - 1] : _a.X.l()
    }
    return i
};
_a.X.m = function() {
    var n = null;
    _a.X.e() && (n = window.performance.getEntries());
    return n
};
_a.X.k = function(n, t, i) {
    var r = new _j.q;
    if (n) {
        _a.X.b(r, "RtXHR_" + t, n.startTime, n.responseEnd, i);
        _a.X.b(r, "RtRedirect_" + t, n.redirectStart, n.redirectEnd, i);
        _a.X.b(r, "RtFetch_" + t, n.fetchStart, n.responseEnd, i);
        _a.X.b(r, "RtDNS_" + t, n.domainLookupStart, n.domainLookupEnd, i);
        _a.X.b(r, "RtConnect_" + t, n.connectStart, n.connectEnd, i);
        _a.X.b(r, "RtSSL_" + t, n.secureConnectionStart, n.connectEnd, i);
        _a.X.b(r, "RtRequest_" + t, n.requestStart, n.responseStart, i);
        _a.X.b(r, "RtResponse_" + t, n.responseStart, n.responseEnd, i);
        _a.L.a().n(r.d)
    }
};
_a.X.n = function(n) {
    var t = "";
    if (n && n.startTime > 0) {
        var i = n.startTime;
        t += _a.X.a(n.redirectStart, i);
        t += _a.X.a(n.redirectEnd, i);
        t += _a.X.a(n.fetchStart, i);
        t += _a.X.a(n.domainLookupStart, i);
        t += _a.X.a(n.domainLookupEnd, i);
        t += _a.X.a(n.connectStart, i);
        t += _a.X.a(n.secureConnectionStart, i);
        t += _a.X.a(n.connectEnd, i);
        t += _a.X.a(n.requestStart, i);
        t += _a.X.a(n.responseStart, i);
        t += _a.X.a(n.responseEnd, i)
    }
    return t
};
_a.X.a = function(n, t) {
    return n > 0 ? Math.floor(n - t).toString() + "/" : "-1/"
};
_a.X.e = function() {
    _a.X.g != null || (_a.X.g = !!window.performance && !!window.performance.getEntriesByName);
    return _a.X.g
};
_a.X.b = function(n, t, i, r, u) {
    i > 0 && r > 0 && r - i > 0 && n.c(_a.bA.a(_a.a.R, 514, t, 2, Math.floor(u + i), Math.floor(u + r)))
};
_a.X.p = function() {
    _a.X.c = _a.X.i;
    _a.X.e() && (window.performance.setResourceTimingBufferSize ? window.performance.setResourceTimingBufferSize(_a.X.c) : window.performance.webkitSetResourceTimingBufferSize ? window.performance.webkitSetResourceTimingBufferSize(_a.X.c) : _a.X.c = 150)
};
_a.X.l = function() {
    if (_a.X.f > _a.X.d * _a.X.c) {
        window.performance.clearResourceTimings ? window.performance.clearResourceTimings() : window.performance.webkitClearResourceTimings && window.performance.webkitClearResourceTimings();
        _a.X.f = 0;
        _a.X.o(.1)
    }
};
_a.X.o = function(n) {
    n < 0 || (_a.X.d + n > _a.X.h ? _a.X.d = _a.X.h : _a.X.d += n)
};
_a.bC = function(n, t, i) {
    _a.bC.initializeBase(this, [n, t, i])
};
_a.fN = function(n, t, i) {
    _a.fN.$$(this.$$gta["_a.fN"].T).initializeBase(this);
    this.e = n;
    this.d = t || _a.dz.a;
    this.c = i
};
_a.fN.$$ = function(n) {
    var u = _a.__tc = _a.__tc || {};
    var t = "fN" + "$" + n.getName().replace(/\./g, "_");
    if (!u[t]) {
        var r = u[t] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _a.fN.apply(this, t)
        };
        var o = _a.dz;
        r.registerClass("_a.__tc." + t, o);
        var s = {
            "_a.fN": {
                T: n
            },
            ctor: _a.fN
        };
        r.prototype.$$gta = s;
        var e = _a.fN.prototype;
        for (var f in e) {
            var i = {
                key: f,
                value: e[f]
            };
            "constructor" !== i.key && (r.prototype[i.key] = i.value)
        }
    }
    return u[t]
};
_a.fN.prototype = {
    e: null,
    d: null,
    c: null,
    a: function(n, t) {
        for (var o = new _a.f(t.a + ".Item", this.e, t.f), u = new this.$$gta["_a.fN"].T, s = this.d.a(n, t), r = _a.w.s(s), i = 0; i < r.length; i++) {
            var e = this.c ? r[i][this.c] : r[i];
            var f = o.n(e);
            u.a(f)
        }
        return u
    },
    b: function(n, t, i) {
        if (i) {
            for (var u = [], o = i, s = new _a.f(t.a + ".Item", this.e, t.f), r = 0; r < o.x.length; r++) {
                var e = s.o(o.x[r]);
                if (this.c) {
                    var f = {};
                    f[this.c] = e;
                    u[r] = f
                } else u[r] = e
            }
            this.d.b(n, t, u)
        } else _a.dz.prototype.b.call(this, n, t, i)
    }
};
_a.dz = function() {};
_a.dz.prototype = {
    a: function(n, t) {
        return n[t.a]
    },
    b: function(n, t, i) {
        (!Number.isInstanceOfType(i) || isFinite(i)) && (n[t.a] = i)
    }
};
_a.bn = function() {};
_a.bn.a = function() {
    return _a.eo.a ? new _a.eo : new _a.dx
};
_a.bn.b = function(n, t, i) {
    var r = t.b(i);
    return r ? JsonParser.deserialize(r) : n === Number || Type.isEnum(n) ? 0 : n === Boolean ? !1 : null
};
_a.bn.prototype = {
    b: function(n) {
        return this.e(n)
    },
    a: function(n, t) {
        this.g(n, t)
    },
    c: function(n) {
        this.f(n)
    },
    h: function() {
        this.d()
    }
};
_a.bH = function() {};
_a.bH.f = function(n, t, i) {
    return _a.bH.a(n, i ? _fs.T.Cg : _fs.T.CG, i ? _fs.T.BE : _fs.T.t, i ? _fs.T.BV : _fs.T.Cc, _a.F.c(t), _a.F.b(t))
};
_a.bH.d = function(n, t, i) {
    return _a.bH.a(n, i ? _fs.T.Bf : _fs.T.p, i ? _fs.T.Bl : _fs.T.CU, i ? _fs.T.K : _fs.T.BL, _a.F.c(t), _a.F.b(t))
};
_a.bH.i = function(n, t, i) {
    return _a.bH.a(n, i ? _fs.T.CB : _fs.T.CK, i ? _fs.T.Y : _fs.T.CZ, i ? _fs.T.Z : _fs.T.CC, _a.F.c(t), _a.F.b(t))
};
_a.bH.c = function(n, t, i) {
    return _a.bH.a(n, i ? _fs.T.B : _fs.T.BR, i ? _fs.T.Q : _fs.T.CW, i ? _fs.T.CF : _fs.T.Bj, _a.F.c(t), _a.F.b(t))
};
_a.bH.g = function(n, t, i) {
    return _a.bH.a(n, i ? _fs.T.d : _fs.T.Bi, i ? _fs.T.k : _fs.T.z, i ? _fs.T.v : _fs.T.BJ, _a.F.c(t), _a.F.b(t))
};
_a.bH.b = function(n, t, i) {
    return _a.bH.a(n, i ? _fs.T.W : _fs.T.BS, i ? _fs.T.r : _fs.T.O, i ? _fs.T.u : _fs.T.h, _a.F.c(t), _a.F.b(t))
};
_a.bH.h = function(n, t, i) {
    return _a.bH.a(n, i ? _fs.T.BM : _fs.T.BB, i ? _fs.T.f : _fs.T.U, i ? _fs.T.w : _fs.T.T, _a.F.c(t), _a.F.b(t))
};
_a.bH.e = function(n, t, i, r) {
    return _a.bH.a(n, t, i, r, _a.F.c(_a.v.b()), _a.F.b(_a.v.b()))
};
_a.bH.a = function(n, t, i, r, u, f) {
    return u.test(n.toString(10)) ? t : f.test(n.toString(10)) ? i : r
};
_a.fQ = function(n, t) {
    this.c = n;
    this.d = t
};
_a.fQ.prototype = {
    c: null,
    d: null,
    a: function(n, t) {
        var i = this.b(n);
        if (!i) return !1;
        var r = this.c.c(t);
        return i.a(r)
    },
    b: function(n) {
        return this.d.c(n)
    }
};
_a.kZ = function(n, t) {
    this.bu = Function.createDelegate(this, this.bv);
    _a.c.a(n, "traceComponent");
    _a.c.a(t, "parentDomElement");
    this.d = n;
    this.Q = t
};
_a.kZ.prototype = {
    K: null,
    d: null,
    Q: null,
    P: null,
    ce: function() {
        return _j.h.a(this.K) ? "" : this.K
    },
    cf: function() {
        return this.ce() + "manifests/" + this.bx()
    },
    W: function() {
        _a.c.a(this.Q, "dom");
        this.P || (this.P = this.cg(this.Q));
        this.X(this.P)
    },
    X: function(n) {
        this.ch(n);
        this.bw(n, this.bu)
    },
    bv: function(n) {},
    bw: function(n, t) {},
    ch: function(n) {
        n.src = this.cf()
    },
    cg: function(n) {
        var i = n.querySelectorAll("#" + this.V())[0];
        if (!i) {
            var t = document.createElement("iframe");
            t.setAttribute("title", _fs.T.CJ);
            t.setAttribute("id", this.V());
            t.style.display = "none";
            n.appendChild(t);
            i = t
        }
        return i
    }
};
_a.iR = function(n) {
    this.a = {};
    this.b = n
};
_a.iR.prototype = {
    b: null,
    c: 0,
    h: function(n) {
        var t = this.d(n);
        if (t) {
            var i = this.e(t, n);
            if (i !== -1) return t[i]
        }
        return null
    },
    f: function(n, t) {
        var i = this.d(n);
        if (i) {
            var r = this.e(i, n);
            if (r !== -1) i[r] = t;
            else {
                Array.add(i, n);
                Array.add(i, t);
                this.c++
            }
        } else {
            var u = this.b.b(n);
            this.a[u] = [n, t];
            this.c++
        }
        return t
    },
    g: function() {
        return new _a.iS(this.c, JsonParser.serialize(this.a))
    },
    i: function(n) {
        this.c = n.count;
        this.a = JsonParser.deserialize(n.buckets)
    },
    d: function(n) {
        _a.c.a(n, "key");
        var t = this.b.b(n);
        _a.c.a(t, "hash code");
        return this.a[t]
    },
    e: function(n, t) {
        for (var i = 0; i < n.length; i += 2)
            if (this.b.a(t, n[i])) return i + 1;
        return -1
    }
};
_a.D = function() {};
_a.D.a = function(n, t, i) {
    _a.D.b([n], t, i)
};
_a.D.c = function(n, t, i, r, u) {
    var f = null;
    i && (f = function(n, t) {
        n && i()
    });
    _a.g.c().a(_a.u, new _a.u([n], t, f, u, !1, null, null, r))
};
_a.D.b = function(n, t, i) {
    var r = null;
    i && (r = function() {
        i()
    });
    _a.g.c().a(_a.u, new _a.u(n, t, r))
};
_a.co = function() {
    _a.co.initializeBase(this)
};
_a.co.b = function(n) {
    return "CacheOperationEvent." + _a.cR.toString(n)
};
_a.co.prototype = {
    gd: !1,
    add_onCacheOperation: function(n) {
        this.eO("CacheOperationEvent", n)
    },
    remove_onCacheOperation: function(n) {
        var t = this;
        _j.m.a().c(_a.a.O, "RemoveOnCacheOperation", function() {
            t.eP("CacheOperationEvent", n)
        })
    },
    dE: function(n) {
        this.eO(_a.co.a, n)
    },
    dC: function(n) {
        var t = this;
        _j.m.a().c(_a.a.O, "RemoveOnDeleteCacheOperation", function() {
            t.eP(_a.co.a, n)
        })
    },
    dF: function(n) {
        this.eO(_a.co.c, n)
    },
    dG: function(n) {
        this.eP(_a.co.c, n)
    },
    dB: function(n, t) {
        this.eW("CacheOperationEvent", this, t);
        this.eW(_a.co.b(n), this, t)
    },
    ec: function(n, t) {}
};
_a.iW = function(n, t) {
    _a.iW.initializeBase(this);
    this.b = n;
    this.c = t
};
_a.iW.prototype = {
    b: null,
    c: null,
    a: function() {
        return this.c.a(this.b, !0)
    }
};
_a.fR = function(n) {
    this.e = Function.createDelegate(this, this.i);
    _a.fR.initializeBase(this, ["Mouse"]);
    n.b(_a.fe, this.e)
};
_a.fR.prototype = {
    i: function(n) {
        this.b(n.a)
    }
};
_a.iY = function() {
    this.b = new _a.bG(50)
};
_a.iY.prototype = {
    b: null,
    c: function(n) {
        this.b = n ? new _a.bG(50) : null;
        return n
    },
    a: function(n) {
        if (this.b) {
            var t = new _a.fS(n);
            this.b.b(t)
        }
    }
};
_a.fS = function(n) {
    this.a = n;
    this.f = _a.d.get_utcNow().h()
};
_a.fS.prototype = {
    f: 0,
    d: function() {
        var n = new Date(this.f);
        return n.format("HH:mm:ss")
    },
    e: function() {
        return _j.z.a(this.a.clientGenerated) ? !1 : this.a.clientGenerated
    },
    a: null,
    b: function() {
        return this.a.id === "HierarchyNotification" ? this.a.folderId : this.a.id
    },
    c: function() {
        return _j.u.a(this.a.EventType) || !this.a.EventType ? "Reload" : this.a.EventType
    }
};
_a.fW = function(n, t, i, r) {
    this.e = n;
    this.f = t;
    this.g = i;
    this.d = r
};
_a.fW.prototype = {
    d: null,
    e: null,
    f: null,
    g: null,
    b: function() {
        return this.e
    },
    c: function() {
        return this.d
    },
    a: function() {
        return this.f
    }
};
_a.dg = function(n) {
    _a.dg.initializeBase(this, [n])
};
_a.dg.prototype = {
    l: null,
    a: function(n) {
        !this.x.length || this.i(n, this.x[this.x.length - 1]) >= 0 ? this.Z(n) : _ff.n.prototype.a.call(this, n)
    },
    A: function() {
        this.E();
        this.l = this.x.length ? new _j.q : new _a.dg.a(this.i);
        this.K = 0;
        return this.l
    },
    y: function() {
        var n = this.l;
        if (!n) throw Error.invalidOperation("Cannot end an AddRange operation that has not started.");
        this.K = -1;
        _a.dg.a.isInstanceOfType(n) ? n.a() > 0 && this.ba(n.e()) : this.j(n.e());
        this.l = null
    }
};
_a.dg.a = function(n) {
    _a.dg.a.initializeBase(this);
    this.p = n
};
_a.dg.a.prototype = {
    p: null,
    c: function(n) {
        var i = this.d;
        var t = i.length;
        !t || this.p(n, i[t - 1]) >= 0 ? _j.q.prototype.c.call(this, n) : _ff.s.b(this.d, n, this.p)
    },
    h: function(n) {
        for (var t = 0, i = n.length; t < i; t++) this.c(n[t])
    },
    k: function(n, t) {
        throw Error.notImplemented("Inserting items at a particular index of an AddRangeListHelper list is not supported.");
    }
};
_a.jf = function(n) {
    _a.jf.initializeBase(this);
    this.x = n
};
_a.jf.prototype = {
    x: null,
    d: function(n) {
        this.x.p(n)
    },
    e: function(n) {
        this.x.q(n)
    },
    b: function() {
        return this.x.b()
    },
    c: function(n) {
        return this.x.a(n)
    },
    q: function(n, t) {
        this.x.C(n, t);
        return t
    },
    a: function(n) {
        this.x.c(n)
    },
    j: function(n) {
        this.x.g(n)
    },
    g: function() {
        this.x.m()
    },
    w: function(n) {
        return this.x.j(n)
    },
    m: function(n) {
        return this.x.u(n)
    },
    h: function(n, t) {
        return this.x.D(n, t)
    },
    t: function(n, t) {
        this.x.r(n, t)
    },
    s: function(n, t) {
        this.x.H(n, t)
    },
    k: function(n) {
        return this.x.s(n)
    },
    o: function(n) {
        this.x.n(n)
    },
    v: function(n, t, i) {
        this.x.N(n, t, i)
    },
    p: function(n) {
        return this.x.k(n)
    },
    n: function(n) {
        this.x.o(n)
    },
    r: function(n, t) {
        this.x.I(n, t)
    },
    f: function() {
        return this.x.e()
    },
    l: function(n) {
        this.x.l(n)
    },
    i: function() {
        return this.x.i()
    },
    u: function() {
        for (var t = new _a.j, n = 0, i = this.b(); n < i; n++) t.c(this.x.a(n));
        return t.f
    }
};
_a.j = function(n) {
    this.A = new Sys.EventHandlerList;
    _a.j.initializeBase(this);
    this.f = new _a.jf(this);
    this.h = this.L(n)
};
_a.j.prototype = {
    G: !1,
    h: null,
    f: null,
    p: function(n) {
        this.A.addHandler("CollectionChanged", n)
    },
    q: function(n) {
        this.A.removeHandler("CollectionChanged", n)
    },
    b: function() {
        return this.h.a()
    },
    a: function(n) {
        return this.h.b(n)
    },
    C: function(n, t) {
        _a.c.e(n, 0, this.b() - 1, "index");
        if (this.h.b(n) !== t) {
            var i = this.h.b(n);
            this.h.o(n, t);
            this.v(3, n, n, [t], [i])
        }
        return t
    },
    r: function(n, t) {
        this.w();
        this.h.k(n, t);
        this.v(0, n, n, [t], null);
        this.by("Count")
    },
    H: function(n, t) {
        if (!t) throw Error.argumentNull("items");
        if (n > this.b() || n < 0) throw Error.argumentOutOfRange("index");
        if (!this.b()) {
            this.g(t);
            return
        }
        this.w();
        for (var i = 0; i < t.length; i++) this.h.k(n + i, t[i]);
        this.v(0, n, n, t, null);
        this.by("Count")
    },
    j: function(n) {
        return this.h.g(n)
    },
    u: function(n) {
        return this.h.m(n, 0)
    },
    D: function(n, t) {
        if (!t && !_j.L.isInstanceOfType(n)) return this.u(n);
        for (var i = 0, r = this.h.a(); i < r; ++i)
            if (t ? t(n, this.h.b(i)) : this.K(n, this.h.b(i))) return i;
        return -1
    },
    s: function(n) {
        for (var t = 0; t < this.b(); ++t) {
            var i = this.a(t);
            if (n(i)) return t
        }
        return this.b()
    },
    n: function(n) {
        for (var t = 0; t < this.b(); ++t) {
            var i = this.a(t);
            n(i)
        }
    },
    c: function(n) {
        this.w();
        this.h.c(n);
        var t = this.b() - 1;
        this.v(0, t, t, [n], null);
        this.by("Count")
    },
    g: function(n) {
        this.w();
        this.h.h(n);
        var t = this.b() - n.length;
        this.v(0, t, t, n, null);
        this.by("Count")
    },
    y: function(n) {
        n && this.g(n.h.e())
    },
    m: function() {
        if (this.b()) {
            this.w();
            var n = Array.clone(this.h.e());
            this.h.f();
            this.v(2, 0, 0, null, n);
            this.by("Count")
        }
    },
    k: function(n) {
        var t = this.h.m(n, 0);
        if (t < 0) return !1;
        else {
            this.o(t);
            return !0
        }
    },
    o: function(n) {
        this.w();
        var t = this.h.b(n);
        this.h.j(n);
        this.v(2, n, n, null, [t]);
        this.by("Count")
    },
    N: function(n, t, i) {
        this.w();
        this.h.j(n);
        this.h.k(t, i);
        this.v(1, n, t, [i], [])
    },
    I: function(n, t) {
        if (t < 0 || t > this.b()) throw Error.argumentOutOfRange("count");
        if (n < 0 || n + t > this.b()) throw Error.argumentOutOfRange("index");
        this.w();
        for (var r = new Array(t), i = t - 1; i >= 0; i--) {
            r[i] = this.h.b(i + n);
            this.h.j(i + n)
        }
        this.v(2, n, n, null, r);
        this.by("Count")
    },
    t: function() {
        for (var t = new _a.j, n = 0; n < this.b(); n++) t.c(this.a(n));
        return t
    },
    E: function(n) {
        var t = this.h.a();
        this.h.f();
        this.h.h(n);
        this.v(4, 0, t, null, null);
        this.by("Count")
    },
    e: function() {
        for (var t = new Array(this.b()), n = 0; n < this.b(); n++) t[n] = this.a(n);
        return t
    },
    x: function() {
        for (var t = new _j.l, n = 0; n < this.b(); n++) t.a(this.a(n));
        return t
    },
    l: function(n) {
        this.O(n)
    },
    i: function() {
        return this.M()
    },
    L: function(n) {
        return new _j.q(n)
    },
    O: function(n) {
        this.E(n)
    },
    M: function() {
        return this.h.e()
    },
    v: function(n, t, i, r, u) {
        if (!this.bT) {
            this.A || (this.A = new Sys.EventHandlerList);
            var f = this.A.getHandler("CollectionChanged");
            if (f) {
                this.G = !0;
                try {
                    f(this, new _j.V(n, t, r, u, i))
                } finally {
                    this.G = !1
                }
            }
        }
    },
    w: function() {
        if (this.G) throw Error.invalidOperation();
    },
    bz: function() {
        this.m();
        _j.S.prototype.bz.call(this)
    },
    K: function(n, t) {
        if (!_j.L.isInstanceOfType(n)) throw Error.argumentType("item1 must implement IEquatable in CompareIEquatable");
        var i = n;
        return i.C(t)
    }
};
_a.fT = function(n) {
    _a.fT.$$(this.$$gta["_a.fT"].TItem, this.$$gta["_a.fT"].TData).initializeBase(this);
    n || (n = new Array(0));
    this.h.u(n)
};
_a.fT.$$ = function(n, t) {
    var f = _a.__tc = _a.__tc || {};
    var i = "fT" + "$" + n.getName().replace(/\./g, "_") + "$" + t.getName().replace(/\./g, "_");
    if (!f[i]) {
        var u = f[i] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _a.fT.apply(this, t)
        };
        var c = _a.j;
        u.registerClass("_a.__tc." + i, c, _a.kw, _a.cG);
        var s = {
            "_a.fT": {
                TItem: n,
                TData: t
            },
            ctor: _a.fT
        };
        var l = c.prototype.$$gta;
        for (var a in l) {
            var h = {
                key: a,
                value: l[a]
            };
            s[h.key] = h.value
        }
        u.prototype.$$gta = s;
        var e = _a.fT.prototype;
        for (var o in e) {
            var r = {
                key: o,
                value: e[o]
            };
            "constructor" !== r.key && (u.prototype[r.key] = r.value)
        }
    }
    return f[i]
};
_a.fT.prototype = {
    B: function() {
        return this.h.p
    },
    d: function(n) {
        this.z(n);
        return n
    },
    z: function(n) {
        this.w();
        var t = this.b();
        this.h.u(n);
        this.v(4, 0, this.b(), null, null);
        t !== this.b() && this.by("Count")
    },
    t: function() {
        var t = Array.clone(this.h.p);
        return new(_a.fT.$$(this.$$gta["_a.fT"].TItem, this.$$gta["_a.fT"].TData))(t)
    },
    O: function(n) {
        this.z(n)
    },
    M: function() {
        return this.h.p
    },
    L: function(n) {
        return new(_a.fO.$$(this.$$gta["_a.fT"].TItem, this.$$gta["_a.fT"].TData))
    }
};
_a.dR = function(n) {
    this.f = Function.createDelegate(this, this.g);
    this.d = n;
    this.d.J(this.f);
    this.c = []
};
_a.dR.prototype = {
    d: null,
    c: null,
    e: function() {
        return Array.clone(this.c)
    },
    a: function(n) {
        return Array.contains(this.c, n)
    },
    b: function(n) {
        Array.remove(this.c, n)
    },
    g: function(n, t) {
        this.a(t) || Array.add(this.c, t)
    }
};
_a.gd = function() {
    _a.gd.initializeBase(this)
};
_a.gd.prototype = {
    my: null,
    fu: null,
    hr: 0,
    fm: !1,
    eZ: !1,
    J: function(n) {
        this.apcl("$", n)
    },
    F: function(n) {
        this.rpcl("$", n)
    },
    ji: function() {
        return !0
    },
    apcl: function(n, t) {
        this.fu || (this.fu = new Sys.EventHandlerList);
        this.hr++;
        this.fu.addHandler(n, t)
    },
    rpcl: function(n, t) {
        if (this.fu) {
            this.hr--;
            this.fu.removeHandler(n, t)
        }
    },
    eO: function(n, t) {
        this.apcl("~" + n, t)
    },
    eP: function(n, t) {
        this.rpcl("~" + n, t)
    },
    fS: function(n) {
        return this.fu ? this.fu.getHandler(n) : null
    },
    ga: function(n) {
        return this.fu ? this.fu.getHandler("~" + n) : null
    },
    qH: function(n) {
        if (this.fu) {
            var t = this.fu._getEvent(n, !1);
            t && Array.clear(t)
        }
    },
    dispose: function() {
        if (!this.fm) {
            this.fm = !0;
            this.eX();
            var n = this.my || (this.my = Function.createDelegate(this, this.eL));
            this.ji() ? n() : _j.m.a().f(_a.a.O, "Dispose." + Object.getType(this).getName(), n);
            this.eZ = !0
        }
    },
    eX: function() {},
    eL: function() {
        this.hr = 0;
        this.fu = null;
        _a.g.g().b(this)
    },
    eJ: function(n) {
        if (this.fu && !this.fm) {
            var t = this.fu.getHandler("$");
            _a.gd.a.a(this, n, t)
        }
    },
    eN: function(n, t) {
        if (this.fu && !this.fm) {
            var i = this.fu.getHandler("$");
            _a.gd.a.a(this, n, i);
            _a.gd.a.a(this, t, i)
        }
    },
    eU: function(n, t, i) {
        if (this.fu && !this.fm) {
            var r = this.fu.getHandler("$");
            _a.gd.a.a(this, n, r);
            _a.gd.a.a(this, t, r);
            _a.gd.a.a(this, i, r)
        }
    },
    eQ: function(n) {
        if (this.fu && !this.fm)
            for (var i = this.fu.getHandler("$"), t = 0; t < n.length; t++) _a.gd.a.a(this, n[t], i)
    },
    eS: function(n) {
        var t = this.ga(n);
        t && t()
    },
    eT: function(n, t) {
        var i = this.ga(n);
        i && i(t)
    },
    eW: function(n, t, i) {
        var r = this.ga(n);
        r && r(t, i)
    },
    gO: function(n) {
        _j.bY.prototype.gO.call(this, n);
        this.eJ(n.property.a)
    },
    wI: function(n) {
        return this.hr > 0 ? !this.fu.getHandler("$") && !this.fu.getHandler(n) ? !1 : !0 : !1
    }
};
_a.gd.a = function() {};
_a.gd.a.a = function(n, t, i) {
    var r = n.fu.getHandler(t);
    r && r(n, t);
    i && i(n, t)
};
_a.fU = function(n, t) {
    this.c = n;
    this.f = t
};
_a.fU.prototype = {
    c: null,
    f: null,
    g: null,
    e: null,
    d: null,
    b: function(n) {
        this.g = this.c.l();
        this.e = this.c.b();
        this.d = _fs.T.BN;
        var t = this.h(this.e, n);
        this.c.e(null, this.d, t)
    },
    a: function(n) {
        n && this.c.h(this.d, this.c.b());
        this.c.e(null, this.g, this.e)
    },
    h: function(n, t) {
        var i = this.f;
        i.endsWith("/") || (i += "/");
        _j.h.a(t) || (i += "?realm=" + encodeURIComponent(t.toLowerCase()));
        return i
    }
};
_a.g = function() {};
_a.g.M = function(n) {
    _a.g.E.b(n)
};
_a.g.e = function() {
    return _no.d.b(_a.g.o, _a.g.n())
};
_a.g.L = function(n) {
    _a.g.k && _a.g.k.dispose();
    if (n !== _a.g.k) {
        _a.g.k = n;
        var t = _a.g.H.getHandler("SyncManager");
        t && t()
    }
    return n
};
_a.g.s = function() {
    if (!_a.g.u) {
        _a.g.u = new _a.iI;
        _a.g.u.d(!0)
    }
    return _a.g.u
};
_a.g.f = function() {
    _a.g.w || (_a.g.w = new _a.fd);
    return _a.g.w
};
_a.g.h = function() {
    _a.g.z || (_a.g.z = new _a.jz);
    return _a.g.z
};
_a.g.n = function() {
    _a.g.v || (_a.g.v = new _a.iY);
    return _a.g.v
};
_a.g.N = function(n) {
    _a.g.A = n;
    _a.g.F = !!n && Array.contains(n, "all");
    return n
};
_a.g.c = function() {
    _a.g.r || (_a.g.r = new _j.j);
    return _a.g.r
};
_a.g.g = function() {
    _a.g.q || (_a.g.q = new _a.eH);
    return _a.g.q
};
_a.g.D = function(n) {
    return !_j.h.b(n) && _a.g.A && (_a.g.F || Array.contains(_a.g.A, n.toLowerCase())) ? !0 : !1
};
_a.g.J = function() {
    if (_a.o.a().c()) _a.g.c().a(_a.dY, new _a.dY);
    else {
        _a.g.E.a();
        if (!_a.g.y) try {
            var n = window.self.location.href;
            n = _a.w.a(n, "authRedirect", "true");
            window.self.location.replace(n)
        } catch (t) {
            _a.g.y = !1
        }
    }
};
_a.cl = function() {};
_a.cl.a = function() {
    _a.cl.b || (_a.cl.b = new _a.cl);
    return _a.cl.b
};
_a.cl.prototype = {
    i: !1,
    e: "hh:mm tt",
    c: "MM/dd/yyyy",
    f: "Pacific Standard Time",
    g: "default",
    h: 0,
    d: 0,
    a: null,
    b: null,
    p: function() {
        return this.e
    },
    s: function() {
        return this.c
    },
    m: function() {
        return this.f
    },
    v: function() {
        return this.g
    },
    A: function() {
        return this.h
    },
    z: function() {
        return this.d
    },
    w: function() {
        return this.i
    },
    j: function() {
        if (!this.a) {
            this.a = new Array(1);
            this.a[0] = new _a.jC("Pacific Standard Time", [new _a.jD("1970-01-01T00:00:00Z", -180)])
        }
        return this.a
    },
    u: function() {
        if (!this.b) {
            this.b = new _a.eu;
            this.b.h(this.j())
        }
        return this.b
    }
};
_a.F = function() {};
_a.F.h = function() {
    return _a.v.g() in _a.F.w
};
_a.F.b = function(n) {
    _a.c.b(n, "culture");
    return n in _a.F.i ? _a.F.i[n].a : _a.F.u
};
_a.F.c = function(n) {
    _a.c.b(n, "culture");
    return n in _a.F.i ? _a.F.i[n].b : _a.F.k
};
_a.F.m = function(n, t) {
    this.b = n;
    this.a = t
};
_a.F.m.prototype = {
    b: null,
    a: null
};
_a.em = function() {};
_a.em.prototype = {
    a: function() {
        return _a.d.get_utcNow()
    },
    b: function() {
        return _a.d.a()
    }
};
_a.H = function() {};
_a.H.o = function() {
    if (!_a.H.b) {
        _a.H.b = {};
        _a.H.b[_a.bT.toString(0)] = _fs.T.BP;
        _a.H.b[_a.bT.toString(1)] = _fs.T.m;
        _a.H.b[_a.bT.toString(2)] = _fs.T.I;
        _a.H.b[_a.bT.toString(3)] = _fs.T.g;
        _a.H.b[_a.bT.toString(4)] = _fs.T.j;
        _a.H.b[_a.bT.toString(5)] = _fs.T.CA;
        _a.H.b[_a.bT.toString(6)] = _fs.T.C
    }
    return _a.H.b
};
_a.H.c = function(n) {
    var t = 0;
    switch (n) {
        case 0:
            t = 6e4;
            break;
        case 1:
            t = 9e5;
            break;
        case 2:
            t = 18e5;
            break;
        case 3:
            t = 36e5;
            break;
        default:
            Error.argumentOutOfRange("duration");
            break
    }
    return t
};
_a.H.p = function(n) {
    return _a.d.get_utcNow().a(n) > 0
};
_a.H.k = function(n) {
    return _a.d.a().a(n) > 0
};
_a.H.i = function(n, t) {
    return n.f() === t.f() && n.g() === t.g()
};
_a.H.a = function(n, t, i, r) {
    _a.c.d(!!n, "date");
    _a.c.b(t, "type");
    var f = [];
    var u = null;
    var e = null;
    switch (t) {
        case 0:
            u = n.d();
            e = u.c(1);
            break;
        case 1:
            u = _a.d.e(n.d());
            e = u.c(7);
            break;
        case 2:
            _a.c.b(r, "workingDays");
            if (r) {
                u = _a.d.e(n.d());
                for (var s = 0; s < 7; s++) {
                    1 << u.r() & r && Array.add(f, u);
                    u = u.c(1)
                }
                Array.add(f, f[f.length - 1].c(1));
                if (!!i !== i || !i)
                    while (f.length > 2) Array.removeAt(f, 1);
                return f
            }
            u = _a.d.e(n.d(), 1);
            e = u.c(5);
            break;
        case 3:
            u = _a.d.e(new _a.d(n.g(), n.f(), 1));
            e = u.c(42);
            break;
        case 4:
            u = n.d();
            e = u.c(1);
            break;
        case 5:
            u = _a.H.a(n, 2, !1, r)[0];
            e = u.c(7);
            break;
        case 6:
            u = new _a.d(n.g(), n.f(), 1);
            e = u.s(1);
            break
    }
    Array.add(f, u);
    if (!(!!i !== i) && i)
        for (var o = u.c(1); !o.C(e);) {
            Array.add(f, o);
            o = o.c(1)
        }
    Array.add(f, e);
    return f
};
_a.H.j = function(n, t) {
    return (7 + (n.r() - t)) % 7
};
_a.H.m = function(n, t) {
    var u = new Array(7);
    if (!_j.u.a(t) && t === 2)
        for (var r = 0; r < 7; ++r) {
            var e = (n + r) % 7;
            u[r] = _a.d.bq()[e]
        }
    for (var i = 0; i < 7; ++i) {
        var f = (n + i) % 7;
        u[i] = _a.d.n(f)
    }
    return u
};
_a.H.h = function(n, t) {
    return !!(t >> n.r() & 1)
};
_a.H.g = function(n) {
    var t = [];
    n & 1 && Array.add(t, _a.bJ.toString(1));
    n & 2 && Array.add(t, _a.bJ.toString(2));
    n & 4 && Array.add(t, _a.bJ.toString(4));
    n & 8 && Array.add(t, _a.bJ.toString(8));
    n & 16 && Array.add(t, _a.bJ.toString(16));
    n & 32 && Array.add(t, _a.bJ.toString(32));
    n & 64 && Array.add(t, _a.bJ.toString(64));
    return t.join(" ")
};
_a.H.d = function(n) {
    return new _a.d(n.g(), n.f(), n.j(), n.m(), n.q() < 30 ? 30 : 60, 0, 0, n.t)
};
_a.H.f = function(n, t) {
    return new _a.d(n.g(), n.f(), n.j(), Math.floor(t / 60), t % 60, 0, 0, n.t)
};
_a.H.n = function(n, t) {
    var i = n.b().d();
    return new _a.d(i.g(), i.f(), i.j(), t.m(), t.q(), t.v(), t.y())
};
_a.H.e = function(n, t) {
    for (var i = 0; i < n.length; i++)
        if (!n[i].k(t)) return !0;
    return !1
};
_a.H.l = function(n, t) {
    if (n === t) return !0;
    if (!n || !t || n.length !== t.length) return !1;
    for (var i = 0; i < n.length; i++)
        if (!_a.d.c(n[i], t[i])) return !1;
    return !0
};
_a.bV = function(n) {
    this.a = n
};
_a.bV.a = function(n, t) {
    _a.c.a(n, "start");
    _a.c.a(t, "end");
    return new _a.bV(t.h() - n.h())
};
_a.bV.b = function(n) {
    return new _a.bV(n * 1e3)
};
_a.bV.prototype = {
    a: 0
};
_a.er = function(n) {
    this.a = n
};
_a.er.parse = function(n) {
    try {
        return new _a.er(_a.d.b(n))
    } catch (t) {
        _j.e.c(_a.a.j, "SafeOwaDateTime failed to parse. Returning SafeOwaDateTime with default value." + t.message);
        return new _a.er(null)
    }
};
_a.er.prototype = {
    a: null
};
_a.eu = function() {};
_a.eu.prototype = {
    e: null,
    f: null,
    c: function() {
        return !!this.e && this.f.length > 0
    },
    h: function(n) {
        this.f = n;
        this.e = {}
    },
    d: function(n, t, i) {
        var u = this;
        var r = this.i(n, t, i, function(n, t) {
            return n
        });
        return r ? r : i
    },
    b: function(n, t, i) {
        var h = this;
        var r = this.i(n, t, i, function(n, t) {
            return _a.d.b(n, !1, t, h)
        });
        if (!r) return i;
        var f = i.indexOf(".") === -1 ? _a.d.d(r) : _a.d.p(r);
        if (t === "UTC") f += "Z";
        else {
            var s = r.t;
            var o = Math.abs(s);
            var u = Math.floor(o / 60);
            var e = o % 60;
            f += (s < 0 ? "-" : "+") + (u < 10 ? "0" + u.toString() : u.toString()) + ":" + (e < 10 ? "0" + e.toString() : e.toString())
        }
        return f
    },
    a: function(n, t, i, r, u, f) {
        for (var h = f ? f : u, e = 0; e < u.length; ++e) {
            var o = "";
            if (n && !r) o = undefined;
            else {
                var s = t[h[e]];
                o = this.b(r, i, s)
            }
            t[u[e]] = o
        }
    },
    j: function(n, t) {
        var u = this.g(n);
        if (!u) throw Error.argument("Unknown time zone specified: " + n);
        for (var r = 0; r < u.length; r++) {
            var i = u[r];
            if (t.a(i.e) >= 0 && t.a(i.d) < 0) return i.a
        }
        throw Error.format("Could not find an offset for this time stamp");
    },
    l: function(n) {
        if (!this.e) throw Error.invalidOperation("LoadTimeZoneOffsets must be called before GetTimeZoneOffsets");
        var u = this.g(n);
        if (!u) return null;
        for (var f = [], t = 0; t < u.length; t++) {
            var r = u[t];
            var i = {};
            i.start = r.b.h();
            i.end = r.c.h();
            i.offset = r.a;
            f[t] = i
        }
        return f
    },
    i: function(n, t, i, r) {
        _a.c.c(n, "sourceTimeZone");
        _a.c.c(t, "destinationTimeZone");
        if (!i) return null;
        if (!this.e) throw Error.invalidOperation("LoadTimeZoneOffsets must be called before Convert");
        n === "tzone://Microsoft/Utc" && (n = "UTC");
        t === "tzone://Microsoft/Utc" && (t = "UTC");
        if (n === t) return null;
        var u = r(i, n);
        u = u.o();
        if (t !== "UTC") {
            var f = this.k(t, u);
            u = u.H(f)
        }
        return u
    },
    k: function(n, t) {
        var u = this.g(n);
        if (!u) throw Error.argument("Unknown time zone specified: " + n);
        for (var r = 0; r < u.length; r++) {
            var i = u[r];
            if (t.a(i.b) >= 0 && t.a(i.c) < 0) return i.a
        }
        throw Error.format("Could not find an offset for this time stamp");
    },
    g: function(n) {
        var t = this.e[n];
        if (!t) {
            this.m(n);
            t = this.e[n]
        }
        return t
    },
    m: function(n) {
        for (var u = null, f = 0; f < this.f.length; f++)
            if (n === this.f[f].TimeZoneId) {
                u = this.f[f].OffsetRanges;
                break
            }
        if (!u || !u.length) {
            _j.e.c(_a.a.fP, String.format("LoadTimeZoneOffsets did not return any time zone range data for {0}. Total {1} timezones loaded", n, this.f.length));
            return
        }
        for (var r = [], e = 0; e < u.length; e++) {
            var o = new _a.eu.a;
            o.b = _a.d.b(u[e].UtcTime);
            o.a = u[e].Offset;
            Array.add(r, o)
        }
        for (var i = 0; i < r.length; i++) {
            var t = r[i];
            if (i) t.e = t.b.p(t.a);
            else {
                t.b = _a.d.g;
                t.e = _a.d.g
            }
            if (i + 1 === r.length) {
                t.c = _a.d.z;
                t.d = _a.d.z
            } else {
                var s = r[i + 1];
                t.c = s.b;
                t.d = t.c.p(Math.max(t.a, s.a))
            }
        }
        this.e[n] = r
    }
};
_a.eu.a = function() {};
_a.eu.a.prototype = {
    b: null,
    c: null,
    e: null,
    d: null,
    a: 0
};
_a.jC = function(n, t) {
    this.TimeZoneId = n;
    this.OffsetRanges = t
};
_a.jC.prototype = {
    TimeZoneId: null,
    OffsetRanges: null
};
_a.jD = function(n, t) {
    this.UtcTime = n;
    this.Offset = t
};
_a.jD.prototype = {
    UtcTime: null,
    Offset: 0
};
_a.bI = function() {};
_a.bI.b = function(n, t) {
    return _a.v.a().parseInt(n, t)
};
_a.bI.a = function(n, t) {
    return _a.v.a().parseFloat(n, t)
};
_a.bI.c = function(n, t) {
    var i = _a.bI.d(n);
    return _a.v.a().format(t, i)
};
_a.bI.d = function(n) {
    switch (n) {
        case 0:
            return "n";
        case 1:
            return "n0";
        case 2:
            return "n1";
        case 3:
            return "n2";
        case 4:
            return "d";
        case 5:
            return "d2";
        case 6:
            return "p";
        case 7:
            return "p0";
        case 8:
            return "p1";
        case 9:
            return "p2";
        case 10:
            return "c";
        case 11:
            return "c0";
        case 12:
            return "c1";
        case 13:
            return "c2";
        default:
            throw Error.argumentOutOfRange("Invalid OwaNumberFormat.");
    }
};
_a.a = function(n) {
    this.c = n
};
_a.a.dS = function(n) {
    var t = _j.u.b(_a.jj, n);
    return new _a.a(t)
};
_a.a.prototype = {
    c: 0,
    a: function() {
        return this.c
    },
    b: function() {
        return "OWA"
    },
    toString: function() {
        return this.c.toString()
    }
};
_a.bO = function(n, t, i, r, u) {
    _a.c.c(n, "categoryName");
    _a.c.c(t, "perfCounterName");
    this.h = !!r !== r ? !0 : r;
    this.b = i;
    this.f = _j.h.a(u) ? "/" + n + "/" + t : "/" + n + "(" + u + ")" + "/" + t;
    this.a = _a.cX.c(this.f);
    this.d = this.j()
};
_a.bO.prototype = {
    f: null,
    a: null,
    b: 0,
    h: !1,
    d: null,
    e: null,
    i: function() {
        return this.e ? this.a.b + this.e.a.b : this.a.b
    },
    g: function(n) {
        _a.c.a(n, "PerfCounterBase");
        _a.c.d(!this.e, "Base counter is already set");
        this.b === 64 || _a.c.h("You cannot have a base of this counter");
        n.b & 32768 || _a.c.k("PerfCounterBase", "The type of the base counter is not valid!");
        this.e = n;
        return n
    },
    c: function() {
        _a.c.d(!this.h, "Trying to write with a read-only perf counter!");
        var n;
        (n = this.a).c(n.a + 1)
    },
    j: function() {
        var r = (new Date).getMilliseconds();
        var u = this.a.a;
        var i = this.i();
        var n = this.e ? this.e.a.a : 0;
        return new _a.eD(u, n, r, this.b, i)
    },
    k: function() {
        var n = this.j();
        var t = _a.fu.a(this.d, n);
        this.d = n;
        return t
    }
};
_a.jl = function(n, t, i, r, u, f, e) {
    _a.jl.initializeBase(this, [1, "PC"]);
    this.a.n = n;
    this.a.t = t;
    this.a.r = i;
    this.a.b = r;
    this.a.c = u;
    this.a.dr = f;
    this.a.db = e
};
_a.bD = function() {};
_a.bD.d = function() {
    if (!_a.bD.b) {
        _a.bD.b = [];
        var n = new _a.bO("UiCmd", "ur", 16);
        _a.bD.a(n);
        _a.bD.e();
        _a.bD.c("FindConv");
        _a.bD.c("FindItem");
        _a.bD.c("GetConvItems");
        _a.bD.c("GetItem")
    }
    return _a.bD.b
};
_a.bD.g = function() {
    for (var i = _a.bD.d().length, t = 0; t < _a.bD.d().length; t++) {
        var n = _a.bD.d()[t];
        if (n.b & 32768) {
            Array.removeAt(_a.bD.d(), t);
            t--;
            i--;
            _a.c.h("Computing NextValue() on a base counter is not a valid operation - " + n.f);
            continue
        } else n.i() !== n.d.d && _a.bD.f(n)
    }
};
_a.bD.f = function(n) {
    var i = n.d;
    var u = n.k();
    var t = n.d;
    var r = new _a.jl(n.f, n.b, t.a, t.b, u, t.a - i.a, t.b - i.b);
    _a.A.a.a(r)
};
_a.bD.e = function() {
    var i = new _a.bO("LRsc", "sr", 0, !0, "Scripts");
    var r = new _a.bO("LRsc", "f", 0, !0, "Scripts");
    var n = new _a.bO("LRsc", "sr", 0, !0, "Styles");
    var t = new _a.bO("LRsc", "f", 0, !0, "Styles");
    _a.bD.a(i);
    _a.bD.a(r);
    _a.bD.a(n);
    _a.bD.a(t)
};
_a.bD.a = function(n, t) {
    t && n.g(t);
    Array.add(_a.bD.b, n)
};
_a.bD.c = function(n) {
    var i = new _a.bO("Svc", "b", 32832, !0, n);
    var t = new _a.bO("Svc", "s", 64, !0, n);
    _a.bD.a(t, i);
    t = new _a.bO("Svc", "f", 64, !0, n);
    _a.bD.a(t, i);
    t = new _a.bO("Svc", "r", 64, !0, n);
    _a.bD.a(t, i)
};
_a.O = function() {};
_a.O.a = function(n, t, i) {
    var r = _a.O.c[t];
    r && _a.bg.b(r);
    var u = _a.bg.d(n, t);
    _a.O.c[t] = u
};
_a.O.b = function(n, t) {
    var i = _a.O.c[n];
    if (i) {
        delete _a.O.c[n];
        _a.bg.b(i, t)
    }
};
_a.jm = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
    _a.jm.initializeBase(this, [1, "PerfTraceCTQ"]);
    this.a.S = n;
    this.a.T = t.toString();
    o && (this.a.id = o);
    i && (this.a.E = i.substring(0, 64));
    r && (this.a.ED = r.substring(0, 256));
    u && (this.a.C = u);
    f && (this.a.cd = f.substring(0, 4096));
    e && (this.a.PSA = e);
    s && s !== "" && (this.a.vrnt = s.substring(0, 64));
    h && (this.a.set = h);
    c !== -1 && (this.a.bct = c);
    l !== -1 && (this.a.cut = l);
    a && (this.a.md = Math.round(a / 1024));
    v && (this.a.ms = v.toFixed(2))
};
_a.jm.prototype = {
    c: function(n) {
        n.val = "[PerfTraceCTQ] " + this.b("S") + this.b("T") + this.b("E") + this.b("ED") + this.b("C") + this.b("cd") + this.b("PSA") + this.b("vrnt") + this.b("id") + this.b("md") + this.b("ms")
    },
    b: function(n) {
        return this.a[n] ? " " + n + "=" + this.a[n] : ""
    }
};
_a.l = function() {
    this.f = [];
    this.g = {}
};
_a.l.d = function(n, t) {
    return _a.l.c(n, t)
};
_a.l.b = function(n, t) {
    return _a.l.c(n, t)
};
_a.l.a = function(n, t) {
    return _a.l.c(n, t || "")
};
_a.l.e = function(n) {
    return _j.h.a(n) ? "" : "<PII>" + n + "</PII>"
};
_a.l.c = function(n, t) {
    return [n, t].join("_")
};
_a.l.prototype = {
    g: null,
    f: null,
    e: null,
    c: function(n, t) {
        return this.i(n, t)
    },
    b: function(n, t) {
        return this.i(n, t)
    },
    a: function(n, t) {
        return this.i(n, t || "")
    },
    d: function(n) {
        return n in this.g
    },
    toString: function() {
        var t = new Sys.StringBuilder;
        if (!_j.h.a(this.e)) {
            t.append(this.e);
            t.append("|")
        }
        for (var n = 0; n < this.f.length; n++) {
            t.append([this.f[n], this.g[this.f[n]]].join("_"));
            n < this.f.length - 1 && t.append("|")
        }
        return t.toString()
    },
    h: function(n) {
        if (!this.e || _j.h.a(this.e)) {
            this.e = n;
            return
        }
        var t = new Sys.StringBuilder(this.e);
        t.append("|");
        t.append(n);
        this.e = t.toString()
    },
    i: function(n, t) {
        Array.contains(this.f, n) || Array.add(this.f, n);
        this.g[n] = t;
        return this
    }
};
_a.jn = function(n, t, i, r, u) {
    _a.jn.initializeBase(this, [1, "PerfTrace"]);
    this.a.s = t;
    this.a.t = i;
    r && (this.a.e = r);
    n && (this.a.id = n);
    this.a.r = u
};
_a.eo = function() {
    _a.eo.initializeBase(this)
};
_a.eo.b = function() {
    try {
        var n = "dummyKey";
        var t = "dummyValue";
        localStorage.setItem(n, t);
        localStorage.removeItem(n);
        return !0
    } catch (i) {
        return !1
    }
};
_a.eo.prototype = {
    e: function(n) {
        return localStorage.getItem(n)
    },
    g: function(n, t) {
        try {
            localStorage.setItem(n, t)
        } catch (r) {
            if (window.applicationBooting) {
                var i = this.i();
                _j.e.c(_a.a.T, "Failed to add key {0} to localstorage, existing keys: {1}, exception: {2}", n, i.join(","), r.message);
                this.d()
            } else throw r;
        }
    },
    f: function(n) {
        localStorage.removeItem(n)
    },
    d: function() {
        localStorage.clear()
    },
    i: function() {
        for (var t = new Array(0), n = 0; n < localStorage.length; n++) Array.add(t, localStorage.key(n));
        return t
    }
};
_a.Y = function() {};
_a.Y.a = function(n, t, i) {
    if (_a.Y.c(n, i, "Window closed before the endpoint is invoked.")) return !1;
    try {
        var r = n.windowServiceEndPoint;
        if (!r) return !1;
        t(r);
        return !0
    } catch (u) {
        if (_a.Y.c(n, i, "The target window was closed when method was being executed.")) return !1;
        _j.e.d(_a.a.z, u, "Exception caught in InvokeInterWindowCall. Target window was still open.");
        return !1
    }
};
_a.Y.d = function(n) {
    var t = window.self.windowServiceEndPoint;
    n(t)
};
_a.Y.c = function(n, t, i) {
    var r = !1;
    try {
        (!n || n.closed) && (r = !0)
    } catch (u) {
        r = !0
    }
    if (r) {
        t && t();
        return !0
    }
    return !1
};
_a.fd = function() {
    this.b = new _a.bG(50);
    this.a = _a.G.a();
    this.c = 0;
    _dh.f(this)
};
_a.fd.prototype = {
    b: null,
    c: 0,
    a: null,
    d: 0,
    j: function(n) {
        if (n) {
            this.b = new _a.bG(50);
            this.a = _a.G.a()
        } else {
            this.b = null;
            this.a = null
        }
        return n
    },
    g: function(n, t, i) {
        this.c++;
        if (!this.b) return null;
        var u = _a.d.get_utcNow().h();
        var r = new _a.js(n, u, t, this.c, i);
        this.b.b(r);
        return r
    },
    f: function(n, t, i, r, u, f, e, o) {
        this.c--;
        if (this.b && n) {
            n.v(t, i, r, u, f, e);
            if (o && this.a) {
                var s = this.e(n.d);
                s.f(n);
                this.d++
            }
        }
    },
    k: function(n, t) {
        if (this.a && n) {
            var i = this.e(n.d);
            i.c += t / 1e3
        }
    },
    i: function() {
        var n = this.d;
        this.d = 0;
        return n
    },
    h: function() {
        var n = this;
        this.a.d(function(t, i) {
            n.a.e(t)
        })
    },
    e: function(n) {
        var t = this.a.b[n];
        if (!t) {
            t = new _a.jt(n);
            this.a.a(n, t)
        }
        return t
    }
};
_a.js = function(n, t, i, r, u) {
    this.d = n;
    this.k = u;
    this.h = t;
    this.a = i;
    this.i = 100;
    this.c = !1;
    this.b = _fs.T.L;
    this.n = r;
    i && (this.e = this.f = this.g = "-----")
};
_a.js.prototype = {
    d: null,
    h: 0,
    a: !1,
    n: 0,
    k: null,
    q: null,
    o: null,
    p: 0,
    c: !1,
    i: 0,
    b: null,
    j: null,
    e: null,
    f: null,
    g: null,
    l: null,
    m: null,
    s: null,
    t: function() {
        var n = new Date(this.h);
        return n.format("HH:mm:ss")
    },
    x: function() {
        return _a.d.p(_a.d.x(this.h))
    },
    r: function() {
        return this.c ? this.p : _a.d.get_utcNow().h()
    },
    w: function() {
        var n = this.c ? _a.d.x(this.r()) : _a.d.g;
        return _a.d.p(n)
    },
    u: function() {
        return ((this.r() - this.h) / 1e3).toFixed(3)
    },
    y: function() {
        return this.r() - this.h
    },
    v: function(n, t, i, r, u, f) {
        this.i = n;
        this.c = !0;
        this.b = t;
        this.j = i;
        this.p = _a.d.get_utcNow().h();
        if (r && u && f) {
            this.e = r;
            this.f = u;
            this.g = f
        }
    },
    z: function(n) {
        this.l = "";
        if (n) {
            var r = n;
            for (var i in r) {
                var t = {
                    key: i,
                    value: r[i]
                };
                this.l += t.key + "=" + t.value + "; "
            }
        }
    }
};
_a.W = function() {};
_a.W.a = function(n) {
    return String.format("/{0}", _a.M.toString(n))
};
_a.W.c = function(n) {
    return String.format("/bookings/{0}", n)
};
_a.W.f = function(n, t) {
    return String.format("/bookings/{0}/{1}", n, t)
};
_a.W.b = function(n, t) {
    return String.format("/group/{0}/{1}", n, _a.M.toString(t))
};
_a.W.g = function(n) {
    return String.format("/mail/{0}", n)
};
_a.W.h = function(n, t) {
    return _j.h.a(t) ? String.format("/mail/{0}", n) : String.format("/mail/{0}/{1}", n, t)
};
_a.W.d = function(n) {
    return String.format("/calendar/view/{0}", n)
};
_a.W.j = function(n) {
    return String.format("/calendar/view/month/d/{0}/m/{1}/y/{2}", n.j(), n.f() + 1, n.g())
};
_a.W.i = function(n) {
    return String.format("/schedule/action/{0}", n)
};
_a.W.k = function(n, t) {
    return String.format("/group/{0}/{1}", t, n.split("/")[3])
};
_a.fZ = function(n, t) {
    _a.fZ.initializeBase(this);
    _a.c.a(n, "defaultPath");
    this.k = n;
    this.l = t
};
_a.fZ.prototype = {
    k: null,
    l: null,
    j: null,
    i: "",
    c: function() {
        return this.i
    },
    e: function(n, t) {
        if (_j.h.a(n)) throw Error.argumentNull("route");
        if (!t) throw Error.argumentNull("action");
        this.j || (this.j = {});
        if (!(n in this.j)) {
            this.r(n);
            this.j[n] = t
        }
    },
    f: function(n) {
        return !_j.h.a(n) && this.k === n
    },
    g: function(n) {
        var u;
        var f;
        var r, t, i;
        return (i = this.m(n, r = {
            val: u
        }, t = {
            val: f
        }), u = r.val, f = t.val, i) ? !0 : !1
    },
    a: function(n, t) {
        n = this.q(n);
        if (_j.h.a(this.i) || this.i !== n) {
            var r = this;
            var i = new _a.di(function() {
                r.o(n, t)
            }, n);
            this.l.a(_a.di, i);
            i.c || i.d()
        }
    },
    h: function() {
        window.history.back()
    },
    b: function(n) {
        this.g(n) && (_j.h.a(this.i) || this.i !== n) && this.n(n)
    },
    q: function(n) {
        var u;
        var f;
        var r, t, i;
        return (i = this.m(n, r = {
            val: u
        }, t = {
            val: f
        }), u = r.val, f = t.val, i) ? n : this.k
    },
    o: function(n, t) {
        var r;
        var i;
        var e, f, u;
        if (u = this.m(n, e = {
                val: r
            }, f = {
                val: i
            }), r = e.val, i = f.val, u) {
            t && (i.RouterNavigationSource = t);
            var o = r(i);
            if (!o) return
        }
        this.n(n)
    },
    n: function(n) {
        this.i = n;
        this.eJ("CurrentPath")
    },
    m: function(n, t, i) {
        var r = null;
        t.val = null;
        i.val = null;
        var f = this.j;
        for (var u in f) {
            var e = {
                key: u,
                value: f[u]
            };
            r = e.key;
            if (this.p(r, n, i)) {
                t.val = this.j[r];
                return !0
            }
        }
        return !1
    },
    p: function(n, t, i) {
        i.val = {};
        if (_j.h.a(t)) return !1;
        var r = null;
        var u = null;
        var s = n.split("/");
        var h = t.split("/");
        var o = s.length;
        var c = h.length;
        if (o > c) return !1;
        for (var e = 0, f = 0; f < o; f++) {
            r = s[f];
            u = h[f];
            if (_j.h.a(r)) {
                e += 1;
                continue
            }
            if (r.charAt(0) === "$") {
                if (u === "action") return !1;
                if (r.charAt(r.length - 1) === "*") {
                    u = t.substring(e, t.length);
                    i.val[r.substring(1, r.length - 1)] = u;
                    return !0
                }
                i.val[r.split("$")[1]] = u
            } else if (r !== u) return !1;
            e += u.length + 1
        }
        return o !== c ? !1 : !0
    },
    r: function(n) {
        var i = n.indexOf("*");
        if (i >= 0) {
            if (i !== n.length - 1) throw Error.argument(n, String.format("Cannot register route '{0}'. The greedy operator must be the last character in the route.", n));
            var t = n.split("/");
            var r = t[t.length - 1];
            if (!r.startsWith("$")) throw Error.argument(n, String.format("Cannot register route '{0}'. The greedy token must begin with a Router.TokenValueOperator character.", n));
        }
    }
};
_a.dS = function(n, t, i, r) {
    this.A = Function.createDelegate(this, this.J);
    this.v = Function.createDelegate(this, this.O);
    this.z = Function.createDelegate(this, this.M);
    this.H = new _a.bO("LRsc", "f", 0, !1, "Scripts");
    this.L = new _a.bO("LRsc", "sr", 0, !1, "Scripts");
    this.i = {};
    this.m = {};
    this.n = {};
    this.s = {};
    this.j = {};
    this.g = this.a;
    this.g = this.a;
    this.h = this.e;
    this.h = this.e;
    this.C = n;
    this.u = t;
    this.l = i;
    this.k = r;
    this.p = this.r(n.B());
    this.q = this.r(n.C());
    this.Q(n.q(), n.s());
    window.addEventListener("error", this.z, !1)
};
_a.dS.c = function(n) {
    if (window.scriptProcessStart) {
        var t = {};
        t[n] = window.scriptProcessStart[n];
        _a.dS.a(t)
    }
};
_a.dS.a = function(n) {
    if (_a.L.a().l() && _a.L.a().o() && window.scriptProcessStart && window.scriptProcessEnd) {
        var r = new _j.q;
        var u = n;
        for (var t in u) {
            var f = {
                key: t,
                value: u[t]
            };
            var i = _a.dS.b(f.key);
            i && r.c(i)
        }
        _a.L.a().n(r.d)
    }
};
_a.dS.b = function(n) {
    var u = new RegExp("(boot\\.).*(?=1\\.)", "i");
    var i = null;
    var r = window.scriptProcessStart[n];
    var t = window.scriptProcessEnd[n];
    t || (t = 0);
    r > 0 && (i = _a.bA.b(_a.a.R, 2, "ScriptProcess_" + n, 1, r, t));
    u.test(n) && (_a.k.L = t);
    return i
};
_a.dS.prototype = {
    p: null,
    q: null,
    u: null,
    l: null,
    k: null,
    o: null,
    t: null,
    C: null,
    x: function() {
        return this.o !== this.p || this.t !== this.q
    },
    c: function(n) {
        delete this.j[n];
        this.i[n] = !0
    },
    I: function(n, t, i, r) {
        this.E(n, r, null, t, i)
    },
    a: function(n, t, i) {
        this.E(n, t, i, !1, !1)
    },
    E: function(n, t, i, r, u) {
        if (this.F(n)) {
            t && t();
            return
        }
        var e = this.G(n);
        if (e) {
            t && Array.add(this.m[n], t);
            i && Array.add(this.n[n], i);
            return
        }
        if (t && !(n in this.m)) {
            this.m[n] = [];
            Array.add(this.m[n], t)
        }
        if (i && !(n in this.n)) {
            this.n[n] = [];
            Array.add(this.n[n], i)
        }
        this.i[n] = !1;
        if (this.l.a() === 1) {
            var f = this;
            this.u.a(_j.A.a, "InternalLoadScript", function() {
                f.w(n, r, u)
            }, 0)
        } else this.w(n, r, u)
    },
    d: function(n, t) {
        for (var r = [], i = 0; i < n.length; i++) {
            var f = !(this.F(n[i]) || this.G(n[i]));
            if (f) {
                var u = this.D(n[i], t, !1);
                r[r.length] = u
            }
        }
        return r
    },
    b: function(n) {
        var t = !1;
        if (n in this.i) t = !0;
        else {
            t = !!this.k.document.querySelector("script[src$='/" + n + "']");
            t && this.c(n)
        }
        return t
    },
    f: function(n) {
        var t = this.k.document.querySelector("script[src$='/" + n + "']");
        return t && t.src ? t.src.indexOf(this.o) === -1 : !1
    },
    w: function(n, t, i) {
        var u = null;
        var c = _j.n.b(_j.A.a, 2, "AddScriptToPage_" + n);
        var r = window.document.createElement("script");
        var s = this;
        r.onload = function() {
            s.y(s.v, n, r, t, i, u)
        };
        var o = this;
        r.onerror = function() {
            o.y(o.A, n, r, t, i, u)
        };
        if (this.l.a() === 1 && this.l.b() < 9) {
            var e = this;
            r.onreadystatechange = function() {
                var f = r.readyState === "complete" || r.readyState === "loaded";
                f && e.y(e.v, n, r, t, i, u)
            }
        }
        if (this.k && this.k.document) {
            var f = this.k.document.getElementsByTagName("head");
            if (f && f.length > 0) {
                var h = f[0];
                r.src = this.D(n, t, i);
                h.appendChild(r);
                _j.n.a(c);
                u = _j.n.b(_j.A.a, 513, "ScriptRequest_" + n)
            }
        }
    },
    P: function(n, t) {
        var i = this.k.document.getElementsByTagName("head")[0];
        t && i.removeChild(t)
    },
    D: function(n, t, i) {
        var r = t ? i ? this.q : this.t : i ? this.p : this.o;
        return n.startsWith("http:") || n.startsWith("https:") ? n : r + n
    },
    e: function(n, t, i, r) {
        if (!n.length) {
            i && i();
            return
        }
        var u = 0;
        var o = n.length;
        var f = null;
        var e = this;
        f = function() {
            u++;
            u < o ? n[u] && e.I(n[u], t, r, f) : i && i()
        };
        n[u] && this.I(n[u], t, r, f)
    },
    O: function(n, t, i, r) {
        if (this.R(n)) {
            _a.dS.c(n);
            this.B(n, 0);
            n in this.j && this.L.c();
            this.c(n);
            var f = this.m[n];
            if (f)
                for (var u = 0; u < f.length; u++) f[u]();
            this.m[n] = null
        } else this.J(n, t, i, r)
    },
    R: function(n) {
        return !(n in this.s)
    },
    J: function(n, t, i, r) {
        this.P(n, t);
        var u = this.N(n);
        if (u < 2) this.K(n, i, r, u);
        else if (this.x() && u < 4) this.K(n, i, !0, u - 2);
        else {
            var e = this.n[n];
            if (e)
                for (var f = 0; f < e.length; f++) e[f]();
            this.n[n] = null;
            this.H.c();
            this.B(n, 1);
            delete this.j[n]
        }
    },
    N: function(n) {
        var t = n in this.j ? this.j[n] + 1 : 0;
        this.j[n] = t;
        return t
    },
    K: function(n, t, i, r) {
        delete this.s[n];
        var u = this;
        this.u.a(_j.A.a, n, function() {
            u.w(n, t, i)
        }, 1e3 * Math.pow(2, r))
    },
    F: function(n) {
        return n in this.i && this.i[n]
    },
    G: function(n) {
        return n in this.i && !this.i[n]
    },
    y: function(n, t, i, r, u, f) {
        var o = "ScriptOnLoad_" + t;
        var s = new _a.ek;
        var e = this;
        s.a(function() {
            _j.n.a(f);
            var s = _j.n.b(_j.A.a, 0, o);
            try {
                i.onload = null;
                i.onerror = null;
                e.l.a() === 1 && e.l.b() < 9 && (i.onreadystatechange = null);
                n(t, i, r, u)
            } finally {
                _j.n.a(s)
            }
        }, _a.a.ch, o, !0)
    },
    B: function(n, t) {
        var i = new _a.fJ(n, n in this.j ? this.j[n] : -1, 1, t, this.o, window.location.hostname, this.x() ? 1 : 0);
        _a.A.a.a(i)
    },
    Q: function(n, t) {
        this.o = this.r(n);
        this.t = this.r(t)
    },
    r: function(n) {
        _j.h.a(n) || n.endsWith("/") || (n = n + "/");
        return n
    },
    M: function(n) {
        if (this.x() || !0)
            for (var r = n, f = r.filename, u = Object.keys(this.i), e = u.length, i = 0; i < e; ++i) {
                var t = u[i];
                if (!this.i[t] && f.endsWith(t)) {
                    this.s[t] = r;
                    return
                }
            }
    }
};
_a.gc = function() {};
_a.gc.prototype = {
    e: function() {
        return null
    },
    a: function() {
        return null
    },
    f: function() {
        return null
    },
    n: function() {
        return null
    },
    c: function() {
        return null
    },
    l: function() {
        return null
    },
    j: function() {
        return null
    },
    g: function() {
        return null
    },
    d: function() {
        return null
    },
    m: function() {
        return null
    },
    u: function() {
        return null
    },
    i: function() {
        return null
    },
    r: function() {
        return null
    },
    o: function() {
        return null
    },
    k: function() {
        return null
    },
    w: function() {
        return !1
    },
    t: function() {
        return !1
    },
    p: function() {
        return !1
    },
    s: function() {
        return null
    },
    q: function() {
        throw Error.invalidOperation("BOWA should not be accessing this property!");
    },
    v: function() {
        throw Error.invalidOperation("BOWA should not be accessing this property!");
    },
    b: function(n) {
        return !1
    },
    h: function(n, t) {
        return !1
    }
};
_a.ds = function(n, t) {
    var i = n.b();
    _a.g.G = _j.h.a(n.n()) ? null : n.n();
    _a.g.m = _j.h.a(n.w()) ? null : n.w();
    _a.g.x = n.m();
    _a.g.B = n.t();
    _a.g.i = i.d();
    _a.g.p = !i.b("viewmodel") && !i.b("OOBE") && !i.b("PALPopOut");
    var u = "traceActions".toLowerCase();
    if (i.b(u)) {
        var r = i.a[u];
        if (!_j.h.b(r)) {
            var e = r.toLowerCase().split(",");
            _a.g.N(e)
        }
    }
    var f = getCookie("PrivateComputer");
    _a.g.C = f === "true";
    i.l() ? t.v(!1) : t.b() && n.a() !== "Mouse" ? t.v(!1) : _a.ds.a(n, t);
    _j.m.a().y = _a.ds.b;
    _j.m.a().S = _a.ds.c
};
_a.ds.b = function(n, t, i, r, u, f, e, o, s, h) {
    var c = new _a.cg(r, t);
    var a = !u;
    c.d = f;
    c.c = a;
    var l = _a.bd.a(c, n);
    a || _a.g.h().c(i, t, l, c.f, e, o, s, h);
    return l
};
_a.ds.c = function(n, t) {
    _a.A.a.a(new _a.iO(n, t))
};
_a.ds.a = function(n, t) {
    n.a() === "Mouse" && n.e().a().ep().Enabled && t.v(!1)
};
_a.fl = function(n) {
    if (n.d()) {
        this.a(!0);
        return
    }
    if (n.b("traceLevel")) try {
        var o = n.a.traceLevel;
        _j.e.g(_j.u.b(_j.bj, o));
        _j.e.i(!!_j.e.e);
        _j.e.f || this.a(!1)
    } catch (a) {}
    if (n.b("perfTraceLevel")) try {
        var e = n.a.perfTraceLevel;
        var h = _j.u.b(_j.PerfTraceLevel, e);
        _j.n.e(h);
        _a.L.g(_a.dN.a)
    } catch (l) {}
    if (n.b("analyticsEnabled")) try {
        var s = n.a.analyticsEnabled;
        _a.A.i(Boolean.parse(s));
        _a.A.h(_a.A.d())
    } catch (c) {}
    if (n.b("traceComponents")) {
        var f = n.a.traceComponents;
        if (!_j.h.b(f)) {
            var i = f.split(",");
            _a.bh.a = !0;
            for (var t = 0; t < i.length; t++) _a.bh.h(i[t])
        }
    }
    if (n.b("traceMessageMaxLength")) {
        var u = n.a.traceMessageMaxLength;
        if (!_j.h.a(u)) {
            var r = Number.parseInvariant(u);
            isFinite(r) && (_a.bh.b = r)
        }
    }
};
_a.fl.prototype = {
    a: function(n) {
        _a.g.f().j(!1);
        _a.g.n().c(!1);
        _a.g.h().d(!1);
        _a.g.l.f();
        if (n) {
            _j.n.e(0);
            _a.A.i(!1);
            _a.A.h(!1);
            _a.bh.f(!1);
            _a.g.s().d(!1)
        }
    }
};
_a.cX = function() {
    this.a = 0;
    this.b = 0
};
_a.cX.c = function(n) {
    _a.c.c(n, "name");
    var t = _a.cX.a[n];
    if (!t) {
        _a.c.d(_a.cX.b < 1e3, "Maximum number of counters has reached. You can not register any new counter - " + n);
        t = new _a.cX;
        _a.cX.a[n] = t;
        _a.cX.b++
    }
    return t
};
_a.cX.prototype = {
    a: 0,
    b: 0,
    c: function(n) {
        this.a = n;
        this.b++;
        return n
    }
};
_a.u = function(n, t, i, r, u, f, e, o, s, h, c, l) {
    this.a = n;
    this.m = t;
    this.b = _j.Q.a(_a.iT, r);
    this.j = i;
    this.d = _j.Q.a(Boolean, u);
    this.g = _j.Q.a(String, f);
    this.f = _j.Q.a(String, e);
    this.e = _j.Q.a(String, o);
    this.c = h;
    this.k = s;
    this.h = c;
    this.i = l
};
_a.u.prototype = {
    d: !1,
    g: null,
    m: 0,
    b: 0,
    f: null,
    e: null,
    c: null,
    j: null,
    a: null,
    k: null,
    h: null,
    i: null,
    l: function(n) {
        if (!n) return !1;
        var i = this.b === n.b && this.a.length === n.a.length && this.d === n.d && this.g === n.g && this.f === n.f && this.e === n.e && this.c === n.c;
        if (i)
            for (var t = 0; t < this.a.length; t++)
                if (this.a[t] !== n.a[t]) {
                    i = !1;
                    break
                }
        return i
    }
};
_a.J = function(n) {
    _a.c.c(n, "address");
    var t = -1;
    var r, i;
    if (!(i = _a.J.j(n, !0, r = {
            val: t
        }, !0), t = r.val, i)) throw Error.format("Input string is not a valid SMTP Address: " + n);
    this.a = n;
    this.c = this.a.substring(0, t - 1);
    this.b = this.a.substr(t)
};
_a.J.a = function(n) {
    var r;
    var i, t;
    return t = _a.J.j(n, !0, i = {
        val: r
    }, !0), r = i.val, t
};
_a.J.e = function(n) {
    return _a.J.i(n, 0, !0, !0)
};
_a.J.j = function(n, t, i, r) {
    if (_j.h.a(n)) {
        i.val = -1;
        return !1
    }
    if (t && n.length > 571 && (n.length > 1860 || !_a.J.h(n))) {
        i.val = -1;
        return !1
    }
    for (var e = 0, f = 0; e < n.length && f !== 24;) {
        var u = n.charAt(e);
        var o = n.charCodeAt(e);
        e++;
        switch (f) {
            case 0:
                if (u < "" && _a.J.g(o) || u >= "" && r) {
                    f = 1;
                    continue
                }
                if (u === "\\") {
                    f = 4;
                    continue
                }
                if (u === '"') {
                    f = 3;
                    continue
                }
                break;
            case 1:
                if (u === "@") {
                    f = 7;
                    e--;
                    continue
                }
                if (u === ".") {
                    f = 2;
                    continue
                }
                f = 2;
                e--;
                continue;
            case 2:
                if (u < "" && _a.J.g(o) || u >= "" && r) {
                    f = 1;
                    continue
                }
                if (u === "\\") {
                    f = 4;
                    continue
                }
                break;
            case 4:
                if (u < "" || u >= "" && r) {
                    f = 1;
                    continue
                }
                break;
            case 3:
                if (u === '"') {
                    f = 6;
                    continue
                }
                if (u === "\\") {
                    f = 5;
                    continue
                }
                if (u < "" && "\r" !== u && "\n" !== u && "\\" !== u && '"' !== u || u >= "" && r) {
                    f = 3;
                    continue
                }
                break;
            case 5:
                if (u < "" || u >= "" && r) {
                    f = 3;
                    continue
                }
                break;
            case 6:
                if (u === "@") {
                    f = 7;
                    e--;
                    continue
                }
                break;
            case 7:
                if (t && e - 1 > 315 && (e - 1 > 1604 || !_a.J.h(n))) {
                    i.val = -1;
                    return !1
                }
                if (_a.J.i(n, e, t, r)) {
                    i.val = e;
                    return !0
                }
                break;
            default:
                break
        }
        f = 24
    }
    i.val = -1;
    return !1
};
_a.J.i = function(n, t, i, r) {
    if (_j.h.a(n) || i && n.length - t > 255) return !1;
    for (var f = 7, e = 0, o = 0, c = 0, h = !1, l = 0, a = !0; t < n.length && f !== 24;) {
        var u = n.charAt(t);
        var s = n.charCodeAt(t);
        t++;
        switch (f) {
            case 7:
                if (u === "[") {
                    f = 10;
                    continue
                }
                if (u < "" && _a.J.f(s) || u >= "" && r || u === "-" || u === "_") {
                    l = t;
                    f = 8;
                    continue
                }
                break;
            case 8:
                if (u === ".") {
                    if (i && t - l > 63) return !1;
                    a = !1;
                    f = 9;
                    continue
                }
                if (u < "" && _a.J.f(s) || u >= "" && r || u === "-" || u === "_") {
                    f = 8;
                    continue
                }
                break;
            case 9:
                if (u < "" && _a.J.f(s) || u >= "" && r || u === "-" || u === "_") {
                    l = t;
                    f = 8;
                    continue
                }
                break;
            case 10:
                if (u < "" && _a.J.c(s)) {
                    f = 11;
                    e = 1;
                    o = 1;
                    c = _a.bI.b("" + u);
                    continue
                }
                if (u === "I" || u === "i") {
                    f = 13;
                    continue
                }
                break;
            case 11:
                if (u < "" && _a.J.c(s) && o < 3) {
                    o++;
                    c = c * 10 + _a.bI.b("" + u);
                    if (c > 255) break;
                    f = 11;
                    continue
                }
                if (u === ".") {
                    f = 12;
                    continue
                }
                if (u === "]" && e === 4) {
                    f = 23;
                    continue
                }
                break;
            case 12:
                if (u < "" && _a.J.c(s) && e < 4) {
                    e++;
                    o = 1;
                    c = _a.bI.b("" + u);
                    f = 11;
                    continue
                }
                break;
            case 13:
                if (u === "P" || u === "p") {
                    f = 14;
                    continue
                }
                break;
            case 14:
                if (u === "v" || u === "V") {
                    f = 15;
                    continue
                }
                break;
            case 15:
                if (u === "6") {
                    f = 16;
                    continue
                }
                break;
            case 16:
                if (u === ":") {
                    f = 17;
                    continue
                }
                break;
            case 17:
                if (u < "" && _a.J.d(u)) {
                    h = !1;
                    e = 1;
                    o = 1;
                    f = 19;
                    continue
                }
                if (u === ":") {
                    e = 0;
                    f = 18;
                    continue
                }
                break;
            case 18:
                if (u === ":") {
                    h = !0;
                    f = 22;
                    continue
                }
                break;
            case 19:
                if (u < "" && _a.J.d(s) && o < 4) {
                    o++;
                    f = 19;
                    continue
                }
                if (u === ":") {
                    f = 21;
                    continue
                }
                if (u === "]" && (!h && e === 8 || h && e <= 6)) {
                    f = 23;
                    continue
                }
                break;
            case 20:
                if (u < "" && _a.J.c(s) && o < 3) {
                    o++;
                    c = c * 10 + _a.bI.b("" + u);
                    f = c <= 255 ? 20 : 19;
                    continue
                }
                if (u < "" && _a.J.d(s) && o < 4) {
                    o++;
                    f = 19;
                    continue
                }
                if (u === ":") {
                    f = 21;
                    continue
                }
                if (u === ".") {
                    e = 1;
                    f = 12;
                    continue
                }
                if (u === "]" && h && e <= 6) {
                    f = 23;
                    continue
                }
                break;
            case 21:
                if (u < "" && _a.J.c(s) && !h && e === 6 || h && e <= 4) {
                    e++;
                    o = 1;
                    c = _a.bI.b("" + u);
                    f = 20;
                    continue
                }
                if (u < "" && _a.J.d(s) && !h && e < 8 || h && e < 6) {
                    e++;
                    o = 1;
                    f = 19;
                    continue
                }
                if (u === ":" && !h && e <= 6) {
                    h = !0;
                    f = 22;
                    continue
                }
                break;
            case 22:
                if (u < "" && _a.J.d(s) && e < 6) {
                    e++;
                    o = 1;
                    f = 19;
                    continue
                }
                if (u === "]") {
                    f = 23;
                    continue
                }
                break;
            case 23:
                break;
            default:
                break
        }
        f = 24
    }
    return f === 23 || f === 8 && (!i || t - l < 63) && !a
};
_a.J.h = function(n) {
    return n.toUpperCase().startsWith("IMCEAX400-")
};
_a.J.g = function(n) {
    return 0 != (_a.J.b[n] & 16)
};
_a.J.d = function(n) {
    return 0 != (_a.J.b[n] & 64)
};
_a.J.c = function(n) {
    return 0 != (_a.J.b[n] & 32)
};
_a.J.f = function(n) {
    return 0 != (_a.J.b[n] & 1056)
};
_a.J.prototype = {
    c: null,
    b: null,
    a: null,
    toString: function() {
        return this.a
    }
};
_a.dG = function(n, t, i, r, u, f, e) {
    this.p = Function.createDelegate(this, this.z);
    this.v = new _a.bO("LRsc", "f", 0, !1, "Styles");
    this.w = new _a.bO("LRsc", "sr", 0, !1, "Styles");
    this.j = {};
    this.f = {};
    this.e = {};
    this.k = n;
    this.m = t;
    this.n = i;
    this.d = r.d();
    this.x = r;
    this.i = u;
    this.l = f;
    this.h = e
};
_a.dG.a = function(n, t) {
    _j.s.b(n, "windowInstance");
    _j.s.b(t, "linkElement");
    if (n.document) {
        var i = n.document.getElementsByTagName("head");
        i && i.length > 0 && i[0].appendChild(t)
    }
};
_a.dG.c = function(n, t) {
    var i;
    i = window.document.createElement("link");
    i.rel = "stylesheet";
    i.type = "text/css";
    i.href = n;
    t && (i.id = t);
    return i
};
_a.dG.b = function(n) {
    return String.format("{0}${1}", n.type, n.name)
};
_a.dG.prototype = {
    m: null,
    n: null,
    d: null,
    x: null,
    k: null,
    i: null,
    l: !1,
    h: null,
    b: function(n, t) {
        var i = this.s(n);
        if (!i.length) {
            t && t();
            return
        }
        for (var f = 0, r = this, e = function(n) {
                n in r.e && r.w.c();
                r.q(n, 0);
                f++;
                f === i.length && t && t()
            }, u = 0; u < i.length; u++) this.y(i[u], e)
    },
    a: function(n) {
        for (var r = [], i = this.s(n), t = 0; t < i.length; t++) {
            var u = this.g(i[t]);
            var f = !(this.t(i[t]) || this.u(u));
            f && (r[r.length] = u)
        }
        return r
    },
    c: function(n) {
        var t = _a.dG.b(n);
        this.j[t] = !0
    },
    r: function(n) {
        var r = this.g(n);
        var u = null;
        var h = _j.n.b(_j.A.a, 2, "AddStyleToDom_" + r);
        var t = _a.dG.c(r, null);
        var c = this;
        var i = function(n, t) {
            c.A(n)
        };
        if (this.d.a() === 1 || this.d.a() === 6 || this.d.a() === 5 || this.d.a() === 4 && this.d.b() >= 9 || this.d.a() === 2 && this.d.b() >= 19 || this.d.a() === 3 && this.d.b() >= 6) {
            if (this.d.a() === 1 && this.d.b() < 9) {
                var l = this;
                t.onreadystatechange = function() {
                    (t.readyState === "loaded" || t.readyState === "complete") && l.o(i, n, t, u)
                }
            }
            var s = this;
            t.onload = function() {
                s.o(i, n, t, u)
            };
            var e = this;
            t.onerror = function() {
                e.o(e.p, n, t, u)
            };
            _a.dG.a(this.h, t)
        } else {
            _a.dG.a(this.h, t);
            if (this.d.e()) {
                var f = null;
                var o = this;
                f = function(u) {
                    if (u > 3) {
                        _a.bh.d() && console.error("Could not load style " + r);
                        i(n, t)
                    }
                    var h = o.h.document;
                    if (h && h.styleSheets)
                        for (var c = h.styleSheets, l = c.length, e = 0; e < l; ++e) {
                            var s = c[e];
                            if (s.cssRules && s.href === t.href && s.cssRules.length >= 0) {
                                i(n, t);
                                return
                            }
                        }
                    o.i.a(_j.A.a, "CssLoading", function() {
                        f(++u)
                    }, 100 * Math.pow(2, u))
                };
                f(0)
            } else {
                var a = this;
                this.i.a(_j.A.a, "CssLoading", function() {
                    i(n, t)
                }, 100)
            }
        }
        _j.n.a(h);
        u = _j.n.b(_j.A.a, 513, "StyleRequest_" + r)
    },
    B: function(n, t) {
        var i = this.h.document.getElementsByTagName("head")[0];
        i.removeChild(t)
    },
    o: function(n, t, i, r) {
        var e = this.g(t);
        var f = "StyleOnLoad_" + e;
        var o = new _a.ek;
        var u = this;
        o.a(function() {
            _j.n.a(r);
            var e = _j.n.b(_j.A.a, 0, f);
            try {
                i.onerror = null;
                i.onload = null;
                u.d.a() === 1 && u.d.b() < 9 && (i.onreadystatechange = null);
                n(t, i)
            } finally {
                _j.n.a(e)
            }
        }, _a.a.ch, f, !0)
    },
    s: function(n) {
        for (var r = [], u = n, f = u.length, t = 0; t < f; ++t) {
            var i = u[t];
            (this.l || i.type !== "HighResolution") && Array.add(r, i)
        }
        return r
    },
    A: function(n) {
        var r = this.g(n);
        this.c(n);
        var i = this.f[r];
        if (i)
            for (var t = 0; t < i.length; t++) i[t](r);
        this.f[r] = null
    },
    y: function(n, t) {
        var i = this.g(n);
        if (this.t(n)) {
            t && t(i);
            return
        }
        if (t) {
            if (this.u(i)) {
                Array.add(this.f[i], t);
                return
            }
            this.f[i] = [];
            Array.add(this.f[i], t)
        }
        this.r(n)
    },
    z: function(n, t) {
        var i = this.g(n);
        this.B(i, t);
        this.e[i] = i in this.e ? this.e[i] + 1 : 0;
        var r = this.e[i];
        if (r > 3) {
            this.v.c();
            this.q(i, 1);
            _a.bh.d() && console.error("Fail to load style " + i);
            return
        }
        var u = this;
        this.i.a(_j.A.a, i, function() {
            u.r(n)
        }, 1e3 * Math.pow(2, r))
    },
    g: function(n) {
        var t;
        t = n.type === "Sprite" || n.type === "HighResolution" ? String.format(this.n, this.k) : String.format(this.m, this.k);
        t.endsWith("/") || (t += "/");
        return t + n.name
    },
    t: function(n) {
        var t = _a.dG.b(n);
        return t in this.j && !!this.j[t]
    },
    u: function(n) {
        return n in this.f
    },
    q: function(n, t) {
        var i = new _a.fJ(n, n in this.e ? this.e[n] : -1, 2, t, "", window.location.hostname, -1);
        _a.A.a.a(i)
    }
};
_a.cB = function(n) {
    this.a = n
};
_a.cB.b = function() {
    var n = +new Date;
    _a.cB.a = _a.cB.a === 99 ? 0 : _a.cB.a + 1;
    return new _a.cB(n * 100 + _a.cB.a)
};
_a.cB.prototype = {
    a: 0
};
_a.jz = function() {
    this.b = new _a.bG(250)
};
_a.jz.prototype = {
    b: null,
    d: function(n) {
        this.b = n ? new _a.bG(250) : null;
        return n
    },
    a: null,
    c: function(n, t, i, r, u, f, e, o) {
        if (this.b) {
            var s = new _a.jA;
            s.id = n;
            s.n = t;
            s.t = i;
            s.q = u;
            s.al = f;
            s.dl = e;
            s.ql = o;
            s.m = r;
            this.b.b(s);
            this.a && this.a.a(s)
        }
    }
};
_a.N = function() {};
_a.N.$$cctor = function() {
    _a.N.a = [];
    _a.bh.f(!0);
    _a.bi.d(2);
    _j.e.l(_a.N.s)
};
_a.N.d = function(n) {
    _a.N.a && (Array.contains(_a.N.a, n) || Array.add(_a.N.a, n))
};
_a.N.g = function(n) {
    _a.N.a && Array.contains(_a.N.a, n) && Array.remove(_a.N.a, n)
};
_a.N.s = function(n, t, i, r, u, f, e, o, s, h) {
    var c = _j.n.b(_a.a.cS, 2, "LogInternal", 4);
    _a.N.c = null;
    _a.N.n = n;
    _a.N.e = t;
    _a.N.b = i;
    _a.N.o = r;
    _a.N.h = u;
    _a.N.i = f;
    _a.N.j = e;
    _a.N.k = o;
    _a.N.l = s;
    _a.N.m = h;
    _j.e.f && _a.N.r(n, t);
    _j.n.a(c)
};
_a.N.p = function() {
    if (!_a.N.f) {
        var i = new Sys.StringBuilder;
        var r = _a.bR.b();
        for (var n in r) {
            var t = {
                key: n,
                value: r[n]
            };
            i.append(String.format("{0} = {1}{2}", t.key, t.value, "\r\n"));
            _a.N.f = i.toString()
        }
    }
    return _a.N.f
};
_a.N.q = function() {
    if (!_a.N.c) {
        var i = null;
        var r = null;
        var t = null;
        var n = null;
        if (_a.N.b) {
            var u = _a.N.b;
            n = u.name;
            t = _a.N.b.message;
            r = _a.bR.e(_a.N.b)
        } else if (_a.N.e === 1) {
            n = t = "T.LE";
            i = _a.bR.d(2)
        }
        _a.N.c = new _a.fk(_a.N.e, _a.N.n, i, n, t, r, _a.N.p(), _a.N.o, _a.N.h, _a.N.i, _a.N.j, _a.N.k, _a.N.l, _a.N.m);
        _a.N.e === 1 && (_a.N.c.a.ctq = _a.b.I(_a.N.b))
    }
    return _a.N.c
};
_a.N.r = function(n, t) {
    for (var i = 0; i < _a.N.a.length; i++) {
        var r = _a.N.a[i];
        r(n, t, _a.N.q)
    }
};
_a.N.t = function() {
    this.b = traceDelegate
};
_a.N.t.prototype = {
    b: null,
    a: null,
    toString: function() {
        if (this.a) return this.a;
        this.a = this.b ? this.b() || "" : "";
        return this.a
    }
};
_a.bo = function() {};
_a.bo.d = function() {
    _a.bo.b = {};
    _a.bo.b[_j.A.i.c.toString()] = _a.a.bL;
    _a.bo.b[_j.A.c.c.toString()] = _a.a.eu;
    _a.bo.b[_j.A.e.c.toString()] = _a.a.X;
    _a.bo.b[_j.A.d.c.toString()] = _a.a.O;
    _a.bo.b[_j.A.g.c.toString()] = _a.a.T;
    _a.bo.b[_j.A.b.c.toString()] = _a.a.dD;
    _a.bo.b[_j.A.h.c.toString()] = _a.a.cB;
    _a.bo.b[_j.A.a.c.toString()] = _a.a.ch;
    _a.bo.a = {};
    _a.bo.a[_ff.c.h.c.toString()] = _a.a.cc;
    _a.bo.a[_ff.c.b.c.toString()] = _a.a.X;
    _a.bo.a[_ff.c.f.c.toString()] = _a.a.O;
    _a.bo.a[_ff.c.g.c.toString()] = _a.a.T;
    _a.bo.a[_ff.c.n.c.toString()] = _a.a.eW;
    _a.bo.a[_ff.c.i.c.toString()] = _a.a.bT;
    _a.bo.a[_ff.c.k.c.toString()] = _a.a.z;
    _a.bo.a[_ff.c.a.c.toString()] = _a.a.g;
    _a.bo.a[_ff.c.l.c.toString()] = _a.a.fH;
    _a.bo.a[_ff.c.m.c.toString()] = _a.a.cL;
    _a.bo.a[_ff.c.e.c.toString()] = _a.a.F;
    _a.bo.a[_ff.c.c.c.toString()] = _a.a.dA;
    _a.bo.a[_ff.c.j.c.toString()] = _a.a.dg;
    _a.bo.a[_ff.c.d.c.toString()] = _a.a.bY
};
_a.bo.c = function(n) {
    if (!_j.A || !_ff.c) return _a.a.el;
    _a.bo.b || _a.bo.d();
    return n.b() === "OWA" ? n : n.b() === "O365" && n.a().toString() in _a.bo.a ? _a.bo.a[n.a().toString()] : n.b() === "jsMVVM" && n.a().toString() in _a.bo.b ? _a.bo.b[n.a().toString()] : _a.a.el
};
_a.fk = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
    this.h = [new RegExp("at([^()]*)"), new RegExp("([^@]*)@")];
    _a.fk.initializeBase(this, [_a.fk.a(n), "Trace"]);
    this.a.l = n;
    this.a.s = _a.bo.c(t).toString();
    i && (this.a.st = i);
    r && (this.a.en = r);
    f && (this.a.est = f);
    (i || f) && (this.a.ch = this.i(f || i));
    e && (this.a.ci = e);
    o && (this.a.f = o);
    var y = 2500;
    this.b("0", s, y);
    this.b("1", h, y);
    this.b("2", c, y);
    this.b("3", l, y);
    this.b("4", a, y);
    this.b("5", v, y);
    if (u) {
        this.e() && (u += "|" + this.e());
        this.a.em = u
    }
};
_a.fk.a = function(n) {
    return n === 1 ? 12 : 4
};
_a.fk.prototype = {
    d: null,
    g: function() {
        return this.a.em || this.e()
    },
    f: function() {
        return this.a.est || this.a.st
    },
    c: function() {
        if (!this.d) {
            var n = this.e();
            this.a.em && (n += _j.h.c("{0}Exception Name: {1}{0}Exception message: {2}", "\r\n", this.a.en, this.a.em));
            var i = this.f();
            i && (n += _j.h.c("{0}Call stack:{0}{1}{0}{2}", "\r\n", i, this.a.ch));
            var t = this.a.s;
            this.d = t ? "[" + t + "] " + n : n
        }
        return this.d
    },
    e: function() {
        return _j.h.c(this.a.f, this.a["0"], this.a["1"], this.a["2"], this.a["3"], this.a["4"], this.a["5"])
    },
    b: function(n, t, i) {
        var r = null;
        r = t === undefined ? "[undefined]" : null === t ? "[null]" : t === "" ? "[empty]" : t.toString();
        r && (this.a[n] = r.length > i ? r.substr(0, i) : r)
    },
    i: function(n) {
        for (var e = n.split("\n"), t = 0, f = 0; f < e.length; f++)
            for (var s = e[f], o = this.h, h = o.length, r = 0; r < h; ++r) {
                var c = o[r];
                var u = c.exec(s);
                if (u && u.length >= 2) {
                    var i = u[1].trim();
                    i = i.replace(".prototype", "");
                    t = t ^ _j.h.e(i);
                    break
                }
            }
        return t ? t : _j.h.e(n)
    }
};
_a.bl = function(n, t, i, r, u, f, e) {
    _a.bl.initializeBase(this);
    this.b = n;
    this.a = t;
    this.h = i;
    this.i = r;
    this.c = u;
    this.d = f;
    this.f = e
};
_a.bl.prototype = {
    h: null,
    i: null,
    a: null,
    g: !1,
    j: function(n) {
        this.a = n;
        this.by("ActionInfoString");
        return n
    },
    f: null,
    b: 0,
    c: null,
    d: null,
    e: !1,
    k: function() {
        this.j(this.h);
        this.e = !0
    },
    l: function() {
        this.j(this.i);
        this.e = !1
    }
};
_a.jF = function() {};
_a.jF.prototype = {
    a: function(n, t) {
        var i = t ? {
            oneTimeUse: !0
        } : {
            oneTimeUse: !1
        };
        return URL.createObjectURL(n, i)
    }
};
_a.lb = function() {};
_a.lb.registerInterface("_a.lb");
_a.lc = function() {};
_a.ld = function() {};
_a.ld.registerInterface("_a.ld");
_a.le = function() {};
_a.le.registerInterface("_a.le");
_a.dB = function() {
    this.c = new _a.bG(150)
};
_a.dB.prototype = {
    c: null,
    d: !1,
    b: function() {
        return this.d
    },
    a: function(n, t) {
        this.c.b(new _a.je(n, t))
    }
};
_a.je = function(n, t) {
    var i = new Date(_a.d.get_utcNow().h());
    this.a = i.format("HH:mm:ss");
    this.b = n;
    this.c = t
};
_a.je.prototype = {
    b: null,
    a: null,
    c: 0
};
_a.iZ = function(n, t) {
    this.n = n;
    this.o = t
};
_a.iZ.prototype = {
    n: null,
    o: !1,
    c: function() {
        return this.o
    },
    b: function() {
        return this.n.c()
    },
    i: function() {
        return _a.w.t()
    },
    j: function(n) {
        return _a.w.f()
    },
    l: function(n) {
        return this.p(n, "ASP.auth_expiredpassword_aspx")
    },
    a: function(n, t, i) {
        if (this.p(n, "ASP.languageselection_aspx")) this.q();
        else if (this.p(n, "ASP.auth_errorfe_aspx") || !this.r(n)) var r = String.format('There was an exception when deserializing the "{0}" response: "{1}"', t, n);
        else return !1;
        return !0
    },
    e: function() {
        return this.n.c()
    },
    k: function() {
        _a.g.J()
    },
    d: function() {
        return this.n.y()
    },
    h: function() {
        return !this.n.y() || this.n.c()
    },
    f: function() {
        return this.n.g()
    },
    g: function() {
        return this.n.i() || this.n.d().a() === 5
    },
    p: function(n, t) {
        return n.indexOf(String.format("OwaPage = {0}", t)) !== -1
    },
    q: function() {
        if (!this.n.c()) {
            var n = window.self.location.href;
            n = _a.w.a(n, "bO", "1");
            window.self.location.replace(n)
        }
    },
    r: function(n) {
        var i = !1;
        var t = n;
        _j.h.a(t) || (t.startsWith("[{") && t.endsWith("}]") || t.startsWith("{") && t.endsWith("}")) && (i = !0);
        return i
    },
    m: function(n) {
        return !this.n.c() || !n
    }
};
_a.ja = function(n, t, i, r) {
    _a.ja.initializeBase(this);
    _a.c.c(t, "senderId");
    _a.c.c(n, "folderId");
    _a.c.a(r, "maxProcessTimeInMilliseconds");
    this.FolderId = n;
    this.c = t;
    this.e = i;
    this.d = _a.d.get_utcNow().l(r).h();
    this.b = r;
    this.id = "BackgroundSyncNotification";
    this.type = this.id;
    this.a = -1
};
_a.ja.prototype = {
    c: null,
    e: !1,
    d: 0,
    a: 0,
    b: 0
};
_a.jb = function() {
    _a.jb.initializeBase(this)
};
_a.jb.prototype = {
    reload: !1
};
_a.lf = function() {};
_a.lf.prototype = {
    l: null,
    k: null,
    i: null,
    e: function() {
        return this.l
    },
    d: function(n, t, i, r) {
        _j.s.d(n, "url");
        this.i = i;
        var u = new XMLHttpRequest;
        u.open("POST", n, !0);
        u.responseType = "text";
        if (t) {
            var e = t;
            for (var s in e) {
                var o = {
                    key: s,
                    value: e[s]
                };
                u.setRequestHeader(o.key, o.value)
            }
        }
        var f = this;
        u.onreadystatechange = function() {
            if (u && u.readyState === 4)
                if (u.status >= 200 && u.status < 300 || u.status === 304) {
                    if (u !== f.k) return;
                    f.i && f.i(u.status, u.responseText)
                } else if (r) {
                var n = Error.create(u.statusText);
                r(u.status, n)
            }
        };
        this.k = u;
        u.send("")
    }
};
_a.jc = function() {
    _a.jc.initializeBase(this)
};
_a.jc.prototype = {
    h: null,
    j: null,
    f: function(n) {
        if (!this.h) {
            _a.c.b(n, "dataReceivedCallback");
            var r = this;
            window.self.pR = function(t) {
                n(t)
            };
            var i = document.createElement("div");
            i.style.display = "none";
            var t = window.document.createElement("iframe");
            t.id = "hdnIfrm";
            t.setAttribute("title", _fs.T.Bm);
            t.setAttribute("frameborder", "0");
            t.setAttribute("height", "0");
            t.setAttribute("width", "100%");
            i.appendChild(t);
            document.body.appendChild(i);
            this.j = i;
            this.h = document.getElementById("hdnIfrm")
        }
    },
    g: function(n) {
        _a.c.b(n, "url");
        this.h && (this.h.src = n)
    },
    a: function() {
        this.h && (this.h.src = "about:blank")
    },
    c: function() {
        if (this.h) {
            window.self.pR = null;
            document.body.removeChild(this.j)
        }
    },
    b: function() {}
};
_a.jd = function() {
    this.n = Function.createDelegate(this, this.o);
    _a.jd.initializeBase(this)
};
_a.jd.prototype = {
    m: null,
    h: null,
    j: 0,
    f: function(n) {
        _a.c.b(n, "dataReceivedCallback");
        this.m = n
    },
    g: function(n) {
        _a.c.b(n, "url");
        this.j = 0;
        this.h = new XMLHttpRequest;
        _a.fv.isInstanceOfType(this.h) && this.h.a(!0);
        this.h.onreadystatechange = this.n;
        n = _no.i.b(n);
        this.h.open("GET", n, !0);
        this.h.send(null)
    },
    a: function() {},
    b: function() {
        this.h && this.h.abort()
    },
    c: function() {
        if (this.h) {
            this.h.onreadystatechange = null;
            this.h = null
        }
    },
    o: function() {
        if (this.h) {
            var r = "PendingGetManager.ReadyState_" + this.h.readyState;
            var u = _j.n.b(_ff.c.c, 0, r);
            try {
                if (this.h.readyState >= 3) {
                    if (this.h.responseText) {
                        var i = this.h.responseText.length;
                        var n = this.h.responseText.substr(this.j);
                        var t = _no.i.a(n, this.m);
                        this.j = i - t
                    }
                    if (this.h.readyState === 4) {
                        this.l = this.h.getResponseHeader("Connection");
                        this.c()
                    }
                }
            } finally {
                _j.n.a(u)
            }
        }
    }
};
_a.ek = function() {};
_a.ek.prototype = {
    a: function(n, t, i, r) {
        var u = new _a.cg(t, i);
        _a.bd.a(u, n)
    }
};
_a.cK = function() {};
_a.cT = function(n) {
    this.a = n
};
_a.cT.prototype = {
    a: null
};
_a.dJ = function(n) {
    this.a = n
};
_a.dJ.prototype = {
    a: 0
};
_a.ef = function(n, t, i) {
    this.c = n;
    this.a = t;
    this.b = i
};
_a.ef.prototype = {
    c: null,
    a: null,
    b: null
};
_a.jY = function(n, t, i) {
    this.a = new _a.ey(n, t, i)
};
_a.jY.prototype = {
    a: null
};
_a.eI = function() {};
_a.eK = function() {};
_a.eL = function() {
    _a.eL.initializeBase(this, [_a.a.j, "Low Memory Reloading", "LowMemReload"])
};
_a.eN = function() {
    _a.eN.initializeBase(this, [_a.a.j, "PendingGet Pausing", "PendingGetPausing"])
};
_a.eJ = function() {};
_a.cx = function(n) {
    this.a = n
};
_a.cx.prototype = {
    a: !1
};
_a.cm = function() {
    _a.cm.initializeBase(this, [_a.a.j, "Application Suspending", "AppSuspending"])
};
_a.ed = function() {};
_a.eM = function(n) {
    this.a = n
};
_a.eM.prototype = {
    a: null
};
_a.dd = function(n) {
    this.a = n
};
_a.dd.prototype = {
    a: !1
};
_a.ee = function(n) {
    this.a = n
};
_a.ee.prototype = {
    a: !1
};
_a.dK = function(n) {
    this.a = n
};
_a.dK.prototype = {
    a: !1
};
_a.eF = function() {};
_a.eF.registerInterface("_a.eF");
_a.jW = function() {};
_a.jW.registerInterface("_a.jW");
_a.jX = function() {};
_a.fv = function() {};
_a.fv.registerInterface("_a.fv");
_a.bM = function(n, t) {
    this.title = n;
    this.content = t
};
_a.dc = function() {};
_a.dc.registerInterface("_a.dc");
_a.jV = function() {};
_a.jV.registerInterface("_a.jV");
_a.eG = function() {};
_a.eG.registerInterface("_a.eG");
_a.cF = function() {};
_a.cF.c = function() {
    var i = XMLHttpRequest;
    var n = i.prototype;
    n.realOpen = n.open;
    var t = _a.cF.d;
    n.open = t
};
_a.cF.b = function() {
    var t = XMLHttpRequest;
    var n = t.prototype;
    if (n.realOpen) {
        n.open = n.realOpen;
        n.realOpen = null
    }
};
_a.cF.d = function(n, t, i, r, u) {
    Array.add(_a.cF.a, t);
    this.realOpen(n, t, !0, r, u)
};
_a.eH = function() {};
_a.eH.prototype = {
    a: function(n) {},
    b: function(n) {},
    e: function() {
        return null
    },
    f: function() {},
    g: function(n) {
        return null
    }
};

function OfflineDiagnostics() {}
OfflineDiagnostics.prototype = {
    SyncInProgress: !1,
    SyncError: null,
    SyncType: null
};
_a.fH = function() {};
_a.fH.registerInterface("_a.fH");
_a.eR = function(n, t) {
    if (n === "Mouse") {
        var i = this;
        t.a(function(n) {
            n.a()
        })
    }
};
_a.kE = function() {};
_a.kE.registerInterface("_a.kE");
_a.eU = function() {};
_a.eU.registerInterface("_a.eU");
_a.kG = function() {};
_a.kG.registerInterface("_a.kG");
_a.kH = function() {};
_a.kF = function() {};
_a.kF.registerInterface("_a.kF");
_a.bB = function(n) {
    this.d = new _j.q;
    _a.L.a().j(this, 4);
    this.e = n
};
_a.bB.prototype = {
    e: null,
    g: function() {
        _a.L.a().m(this);
        this.f()
    },
    c: function(n) {
        this.h(n)
    },
    a: function(n) {},
    b: function(n) {},
    f: function() {
        this.e.c("OwaStartupPerfTrace");
        var t = 0;
        window.performance && window.performance.timing && window.performance.timing.fetchStart ? t = window.performance.timing.fetchStart : window.scriptStart && (t = window.scriptStart);
        for (var r = "", n = 0; n < this.d.d.length; n++) {
            var i;
            i = this.d.d[n].d() >= this.d.d[n].a() ? "&bt=" + this.d.d[n].e() + "." + this.d.d[n].b().toString() + ",tim=st," + (this.d.d[n].a() - t).toString() + ",end," + (this.d.d[n].d() - t).toString() : "&bt=" + this.d.d[n].e() + "." + this.d.d[n].b().toString() + ",tim=st," + (this.d.d[n].a() - t).toString();
            r += i
        }
        this.e.a("OwaStartupPerfTrace", r);
        this.d.f()
    },
    h: function(n) {
        n.f().a() === 304 && this.d.c(n)
    }
};
_a.bY = function(n, t, i) {
    this.j = t;
    this.i = i || {};
    this.k = _a.d.get_utcNow();
    this.f(_a.bY.a, n);
    var f = n ? n.toString() : "-1";
    var u = _a.bY.b[f];
    var r = u ? u + 1 : 1;
    _a.bY.b[f] = r;
    this.f(_a.bY.d, r)
};
_a.bY.prototype = {
    k: null,
    i: null,
    j: 0,
    e: function(n, t) {
        this.f(n.toString(), t)
    },
    o: function(n) {
        this.f(_a.bY.c, this.k.n - n.n)
    },
    f: function(n, t) {
        this.i[n] = t
    }
};
_a.eT = function(n) {
    _a.eT.initializeBase(this, [n.a.ch, 1, null]);
    this.a = n.a.ch;
    this.f("n", n.a.en);
    this.f("tc", n.a.s);
    this.f("m", n.g());
    this.f("ctq", n.a.ctq);
    var t = n.f();
    t && this.f("cs", t)
};
_a.eT.prototype = {
    a: 0,
    g: function() {
        return _a.eT.a
    }
};
_a.bx = function(n, t, i) {
    this.h = Function.createDelegate(this, this.q);
    _a.bx.initializeBase(this, [n, t, null]);
    this.c = _a.d.a();
    this.b = i ? "CorePerf" : "SamplePerf";
    this.a = _j.m.a().a(_a.a.T, "PerfDatapointAbort", this.h, 6e4)
};
_a.bx.prototype = {
    c: null,
    b: null,
    a: null,
    d: 0,
    g: function() {
        return this.b
    },
    l: function() {
        if (!this.d) {
            this.n(1);
            this.f(_a.bY.f, _a.d.a().e(this.c));
            _a.A.g(this, 0)
        }
    },
    p: function(n) {
        this.n(2)
    },
    m: function(n, t) {
        this.f(_a.bx.a, n);
        this.f(_a.bx.b, t)
    },
    n: function(n) {
        _j.m.a().b(this.a);
        this.d = n;
        this.f(_a.bY.e, n)
    },
    q: function() {
        this.p(2)
    }
};
_a.fJ = function(n, t, i, r, u, f, e) {
    _a.fJ.initializeBase(this, [1, "ResLoad"]);
    this.a.rn = n;
    this.a.ac = t;
    this.a.type = i;
    this.a.state = r;
    this.a.url = u;
    this.a.hn = f;
    this.a.fa = e
};
_a.eV = function(n, t, i) {
    _a.eV.initializeBase(this, [n, i, t])
};
_a.eV.prototype = {
    g: function() {
        return _a.eV.a
    }
};
_a.A = function() {};
_a.A.d = function() {
    return _a.A.a ? _a.A.a.b() : !1
};
_a.A.i = function(n) {
    n && !_a.A.a.b() ? _a.A.a = new _a.eb(_a.g.l, 1) : !n && _a.A.a.b() && (_a.A.a = new _a.fw);
    return n
};
_a.A.h = function(n) {
    n && !_a.A.b.b() ? _a.A.b = new _a.eb(_a.g.l, 1) : !n && _a.A.b.b() && (_a.A.b = new _a.fw);
    return n
};
_a.A.l = function(n) {
    _a.A.e = n;
    for (var t = 0; t < _a.A.f.d.length; t++) _a.A.e.a(_a.A.f.d[t], 0);
    _a.A.f.f();
    return n
};
_a.A.c = function(n, t) {
    var i = new _a.eV(n, t, 1);
    _a.A.g(i, 0)
};
_a.A.k = function(n) {
    var t = new _a.eT(n);
    _a.A.g(t, 0)
};
_a.A.g = function(n, t) {
    _a.A.e ? _a.A.e.a(n, t) : _a.A.f.c(n)
};
_a.A.j = function() {
    _a.A.e && _a.A.e.b()
};
_a.bN = function(n) {
    this.B = -1;
    this.D = [];
    this.H = -1;
    _j.s.b(n, "perfTraceEntry");
    _j.s.c(n.o === 512, "The entry must be of Scenario type.");
    this.s = n
};
_a.bN.parse = function(n) {
    if (_j.h.b(n)) return null;
    var t = n.split(",");
    if (t.length !== 5) return null;
    var r = new _a.bA(_a.a.dS(t[0]), _j.u.b(_j.bQ, t[1]), t[2], _j.u.b(_j.PerfTraceLevel, t[3]));
    var i = new _a.bN(r);
    i.B = Number.parseInvariant(t[4]);
    return i
};
_a.bN.condense = function(n) {
    return n ? [n.s.s.a(), n.s.o, n.e(), n.s.r, n.b()].join(",") : null
};
_a.bN.prototype = {
    F: null,
    E: null,
    s: null,
    u: null,
    n: null,
    p: null,
    o: null,
    m: null,
    t: null,
    I: null,
    y: null,
    C: 0,
    K: 0,
    x: 0,
    J: 0,
    z: null,
    v: 0,
    w: function() {
        return this.s.k + this.v
    },
    l: function(n) {
        this.n = n;
        return n
    },
    k: function() {
        return this.m
    },
    i: function(n) {
        this.m = n;
        return n
    },
    f: function() {
        return this.s.s
    },
    e: function() {
        return this.u || this.s.p
    },
    A: function() {
        return this.z ? this.z : this.e()
    },
    h: function() {
        return this.s.o
    },
    c: function() {
        return this.s.r
    },
    b: function() {
        return this.B === -1 ? this.s.m : this.B
    },
    a: function() {
        return this.s.k
    },
    d: function() {
        return this.s.i
    },
    G: !1,
    g: function() {
        return this.s.l
    },
    j: function() {
        return this.s.n
    },
    q: function(n) {
        n && n.a && n.a !== "" && (Array.contains(this.D, n.a) || Array.add(this.D, n.a))
    },
    L: function() {
        return this.D.join("|")
    },
    r: null
};
_a.b = function() {};
_a.b.$$cctor = function() {
    _a.b.h = [];
    _a.b.i = {};
    _a.b.p = {};
    _a.b.l = {};
    _a.b.n = -1
};
_a.b.C = function(n) {
    _a.b.D(n)
};
_a.b.G = function(n) {
    _a.b.H(n)
};
_a.b.c = function(n, t, i, r) {
    _a.b.A(n, t);
    if (t) {
        _a.b.s(t, 0, null, null, null, i, _a.b.o(), -1);
        r > 0 && _a.A.c(r, null)
    }
};
_a.b.b = function(n, t, i, r) {
    _a.b.A(n, t);
    if (!t) return null;
    if (_a.g.i) return new _a.bN(new _a.bA(n, 512, "", 0));
    var f;
    var o = null;
    var h = window.getClientId() + "_" + _a.cB.b().a;
    var l = !1;
    var a = _a.b.t;
    var v = !1;
    var c = !1;
    var s = !1;
    var e = !1;
    if (r) {
        l = r.a;
        a = r.f;
        v = r.b;
        c = r.d;
        s = r.e;
        e = r.c
    }
    if (s && t in _a.b.p) return null;
    i && (o = _a.bg.d(n, t, h));
    if (l && _a.L.a().l() && _a.L.a().o() && _a.dM.a.f) {
        f = _a.bA.a(n, 512, t, 1, _a.dM.a.f, 0);
        _a.L.a().i(f)
    } else f = _j.n.b(n, 512, t);
    f || (f = _a.bA.a(n, 512, t, 1, _a.L.b(), 0));
    e && window.performance && window.performance.mark && window.performance.mark("owa-" + t + "_s");
    var u = new _a.bN(f);
    u.I = h;
    u.G = e;
    u.C = _a.b.o();
    u.K = _a.b.x();
    v && _a.b.L(t, u, c);
    o && (u.y = o);
    u.v = a;
    _a.b.i[f.m] = u;
    _a.b.z(u);
    return u
};
_a.b.a = function(n) {
    if (n && n.s.o === 512 && !_a.g.i) {
        n.r && n.r.l();
        n.G && window.performance && window.performance.mark && window.performance.mark("owa-" + n.e() + "_e");
        _a.L.a().l() ? _j.n.a(n.s) : n.s && n.s.t();
        delete _a.b.i[n.b()];
        if (_a.b.h.length) {
            var i = n.s.l;
            if (!(i & 12352)) {
                if (n.n && n.n.search(new RegExp("^[a-zA-Z0-9\\._]+$")) < 0) {
                    n.p = "c:" + n.n + "_d:" + n.p;
                    n.n = "InvalidErrorClassification"
                }
                n.p && !n.n && (n.n = "ClassificationNotSet");
                var t = n.n;
                var r = !t;
                !i && _a.b.r > n.s.k && _a.b.r <= n.s.i ? t = r ? "AppSuspended" : "AppSuspended_" + t : !i && r ? t = _a.b.N(n) : i && r && (t = "CTQError_" + i.toString());
                _a.b.K(n);
                _a.b.s(n.e(), n.s.i - n.s.k, t, n.p, n.o, n.m, n.C, n.H, n.t, n.I, n.L(), n.x - n.K, n.J);
                n.y && _a.bg.b(n.y)
            }
        }
    }
};
_a.b.e = function(n, t) {
    if (n) {
        if (t) {
            n.n = t.name.toString();
            n.p = t.message
        }
        _a.b.a(n)
    }
};
_a.b.y = function() {
    return Math.floor(_a.b.o() - _a.b.n)
};
_a.b.F = function(n) {
    return _a.b.i[n]
};
_a.b.g = function(n) {
    if (_j.m.a().i) _j.m.a().i.a(n);
    else if (_a.b.q) {
        var t = _a.b.q(n);
        _j.m.a().o(t)
    }
};
_a.b.I = function(n) {
    var f = {};
    var i = null;
    var r = _a.b.i;
    for (var u in r) {
        var e = {
            key: u,
            value: r[u]
        };
        var t = e.value;
        if (!(t.e() in f)) {
            i ? i += String.format(",{0}", t.e()) : i = t.e();
            f[t.e()] = null
        }
        if (n && !t.F) {
            t.F = n.name.toString();
            t.E = n.message
        }
    }
    return i
}
window.scriptsLoaded['boot.worldwide.0.narrow.js'] = 1;
window.scriptProcessEnd = window.scriptProcessEnd || {};
window.scriptProcessEnd['boot.worldwide.0.narrow.js'] = (new Date()).getTime();