! function(modules) {
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      exports: {},
      id: moduleId,
      loaded: !1
    };
    return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = !0, module.exports
  }
  var installedModules = {};
  return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "", __webpack_require__(0)
}([function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _tracertCore = __webpack_require__(12),
    _tracertCore2 = _interopRequireDefault(_tracertCore),
    _tracertAp = __webpack_require__(9),
    _tracertAp2 = _interopRequireDefault(_tracertAp),
    _tracertWap = __webpack_require__(34),
    _tracertWap2 = _interopRequireDefault(_tracertWap),
    _tracertPluginTb = __webpack_require__(33),
    _tracertPluginTb2 = _interopRequireDefault(_tracertPluginTb),
    _tracertPluginAutoClick = __webpack_require__(13),
    _tracertPluginAutoClick2 = _interopRequireDefault(_tracertPluginAutoClick),
    _tracertPluginAutoExpo = __webpack_require__(15),
    _tracertPluginAutoExpo2 = _interopRequireDefault(_tracertPluginAutoExpo),
    _tracertPluginLx = __webpack_require__(31),
    _tracertPluginLx2 = _interopRequireDefault(_tracertPluginLx),
    _tracertPluginQn = __webpack_require__(32),
    _tracertPluginQn2 = _interopRequireDefault(_tracertPluginQn),
    _tracertPluginDtmonitor = __webpack_require__(17),
    _tracertPluginDtmonitor2 = _interopRequireDefault(_tracertPluginDtmonitor),
    _tracertPluginSem = __webpack_require__(19),
    _tracertPluginSem2 = _interopRequireDefault(_tracertPluginSem),
    _tracertPluginFulllinkParams = __webpack_require__(18),
    _tracertPluginFulllinkParams2 = _interopRequireDefault(_tracertPluginFulllinkParams),
    _helper = __webpack_require__(27),
    _helper2 = _interopRequireDefault(_helper),
    win = window;
  if (!win.Tracert || win.Tracert._isInit) {
    var Tracert = new _tracertCore2["default"],
      appInfo = _helper2["default"].checkApp(win.navigator.userAgent);
    /(AP|AF|BK|AM|APHK|KB)/.test(appInfo.name) ? (Tracert.loadPlugins([_tracertWap2["default"], _tracertAp2["default"], _tracertPluginDtmonitor2["default"], _tracertPluginAutoClick2["default"], _tracertPluginAutoExpo2["default"], _tracertPluginSem2["default"], _tracertPluginFulllinkParams2["default"]]), Tracert.call("info", {
      seedId: "H5_TRACERT_USE_LOG",
      logLevel: "3",
      mdata: {
        "tracert-version": "3.0.7"
      }
    })) : /(TB|TM|JU)/.test(appInfo.name) ? Tracert.loadPlugins([_tracertWap2["default"], _tracertPluginTb2["default"], _tracertPluginAutoClick2["default"], _tracertPluginAutoExpo2["default"]]) : /LX/.test(appInfo.name) ? Tracert.loadPlugins([_tracertWap2["default"], _tracertPluginLx2["default"], _tracertPluginAutoClick2["default"], _tracertPluginAutoExpo2["default"]]) : /QN/.test(appInfo.name) ? Tracert.loadPlugins([_tracertWap2["default"], _tracertPluginQn2["default"], _tracertPluginAutoClick2["default"], _tracertPluginAutoExpo2["default"]]) : Tracert.loadPlugins([_tracertWap2["default"], _tracertPluginAutoClick2["default"], _tracertPluginAutoExpo2["default"]]), _helper2["default"].disableBizLog(), _helper2["default"].initTracert(Tracert), _helper2["default"].runBizlogLoader(Tracert)
  }
  exports["default"] = win.Tracert, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
      }
      return target
    },
    _event = __webpack_require__(4),
    _event2 = _interopRequireDefault(_event),
    _expo = __webpack_require__(24),
    _expo2 = _interopRequireDefault(_expo),
    _format = __webpack_require__(5),
    _format2 = _interopRequireDefault(_format),
    _index = __webpack_require__(2),
    _index2 = _interopRequireDefault(_index),
    _dom = __webpack_require__(23),
    _dom2 = _interopRequireDefault(_dom),
    _temporary_storage = __webpack_require__(25),
    _temporary_storage2 = _interopRequireDefault(_temporary_storage),
    _uuid = __webpack_require__(26),
    _uuid2 = _interopRequireDefault(_uuid);
  exports["default"] = _extends({}, _event2["default"], _expo2["default"], _format2["default"], _index2["default"], _dom2["default"], {
    storage: _temporary_storage2["default"],
    uuid: _uuid2["default"]
  }), module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _event = __webpack_require__(4);
  exports["default"] = {
    load: function(callback) {
      "interactive" === document.readyState || "complete" === document.readyState ? callback() : (0, _event.addEvent)("DOMContentLoaded", document, callback)
    },
    requestIdleCallback: function(_requestIdleCallback) {
      function requestIdleCallback(_x) {
        return _requestIdleCallback.apply(this, arguments)
      }
      return requestIdleCallback.toString = function() {
        return _requestIdleCallback.toString()
      }, requestIdleCallback
    }(function(callback) {
      var timeout = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
      return "requestIdleCallback" in window ? requestIdleCallback(callback, {
        timeout: timeout
      }) : setTimeout(callback)
    }),
    dealExtra: function(extra) {
      var prefix = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        obj = {};
      for (var key in extra)
        if (extra.hasOwnProperty(key)) {
          var objKey = 0 === key.indexOf(prefix) ? key : prefix + key;
          obj[objKey] = extra[key]
        } return obj
    },
    objectAssign: function(target, obj) {
      var tar = target || {};
      for (var key in obj) obj.hasOwnProperty(key) && void 0 !== obj[key] && (tar[key] = obj[key]);
      return tar
    },
    getValue: function(name) {
      var val = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.search;
      if (!name) return "";
      var result = "",
        AliJSBridge = window.AlipayJSBridge;
      try {
        var pattern = new RegExp("(?=\\?|\\&|\\b|^)" + name + "\\=(.+?)(?=\\&|$)");
        result = pattern.exec(val), result = result ? "" + result[1] : "", result = decodeURIComponent(result)
      } catch (ex) {
        console.warn(ex)
      }
      return "" === result && (result = AliJSBridge && AliJSBridge.startupParams && AliJSBridge.startupParams[name]), result
    },
    getApFloatVersion: function(userAgent) {
      var ua = userAgent || window.navigator.userAgent,
        isApp = function(flag) {
          var reg = new RegExp("aliapp\\(" + flag, "i");
          return reg.test(ua)
        };
      if (!isApp("ap")) return 0;
      var execResult = /alipayclient\/(\d+)\.?(\d+)?\.?(\d+)?/i.exec(ua),
        alipayVersion = 0;
      if (execResult) {
        var major = execResult[1] || 0,
          minor = execResult[2] || 0,
          patch = execResult[3] || 0; + minor < 10 && (minor = "0" + minor), +patch < 10 && (patch = "0" + patch), alipayVersion = parseFloat(major + "." + minor + patch)
      }
      return alipayVersion
    },
    loadPlugin: function(tracert) {
      var plugin = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        fns = arguments[2],
        Tracert = tracert || {},
        mergeFns = fns && fns.length ? fns : ["init"],
        _loop = function(fn) {
          if (!plugin.hasOwnProperty(fn)) return "continue";
          if ("function" != typeof Tracert[fn] || "function" != typeof plugin[fn] || mergeFns.indexOf(fn) === -1) return Tracert[fn] = plugin[fn], "continue";
          var tempFn = Tracert[fn];
          Tracert[fn] = function() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            tempFn.apply(this, args), plugin[fn].apply(this, args)
          }
        };
      for (var fn in plugin) {
        _loop(fn)
      }
      return Tracert
    },
    cookiesPrefix: "_TRACERT_COOKIE_"
  }, module.exports = exports["default"]
}, function(module, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), exports["default"] = function(top, height, clientHeight) {
    var containStatus = void 0;
    return top < -height ? containStatus = -1 : top < 0 ? containStatus = top / height : top + height < clientHeight ? containStatus = 0 : top < clientHeight ? containStatus = (top + height - clientHeight) / height : top >= clientHeight && (containStatus = 1), containStatus
  }, module.exports = exports["default"]
}, function(module, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), exports["default"] = {
    addEvent: function(evnt, ele, func) {
      var elem = ele || window.document;
      elem.addEventListener ? elem.addEventListener(evnt, func, !0) : elem.attachEvent ? elem.attachEvent("on" + evnt, func) : elem[evnt] = func
    },
    removeEvent: function(evnt, ele, func) {
      var elem = ele || window.document;
      elem.removeEventListener ? elem.removeEventListener(evnt, func, !0) : elem.detachEvent ? elem.detachEvent("on" + evnt, func) : elem[evnt] = func
    },
    debounce: function(func, wait) {
      var _this = this,
        _arguments = arguments,
        timeout = void 0;
      return function() {
        var context = _this,
          args = _arguments,
          later = function() {
            timeout = null, func.apply(context, args)
          };
        clearTimeout(timeout), timeout = setTimeout(later, wait)
      }
    }
  }, module.exports = exports["default"]
}, function(module, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), exports["default"] = {
    objToStr: function(obj) {
      var spliter = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "^",
        strArr = [],
        prop = void 0;
      if (obj instanceof Array) strArr = obj;
      else if (obj instanceof Object)
        for (prop in obj) obj.hasOwnProperty(prop) && strArr.push(prop + "=" + obj[prop]);
      return strArr.join(spliter)
    },
    strToObj: function(str) {
      var spliter = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "^";
      if ("string" != typeof str) return null;
      var strList = str.split(spliter);
      if (str.indexOf("=") === -1) return strList;
      for (var strLen = strList.length, strItem = void 0, strItemList = void 0, result = {}, strIdx = 0; strIdx < strLen; strIdx++) strItem = strList[strIdx], strItem && (strItemList = strItem.split("="), result[strItemList[0]] = strItemList[1] || "");
      return result
    }
  }, module.exports = exports["default"]
}, function(module, exports) {
  var checkApp = function(ua) {
    var app = {},
      aliApp = ua.match(/AliApp\S+\b\)/gi);
    return app.is = !!/(T-UA)|(TBIOS)|(WindVane)|(AliApp)/i.test(ua), app.name = aliApp ? aliApp[0].match(/\(\w+\-*\w*/)[0].split("(")[1] : "", app.version = aliApp ? aliApp[0].match(/(\d+\.*)+/gi)[0] : "", app
  };
  module.exports = checkApp
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _base = __webpack_require__(3),
    _base2 = _interopRequireDefault(_base),
    win = window,
    doc = win.document,
    docEl = doc.documentElement;
  exports["default"] = function(el) {
    var elRect = el.getBoundingClientRect();
    return (0, _base2["default"])(elRect.left, elRect.width, docEl.clientWidth)
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _base = __webpack_require__(3),
    _base2 = _interopRequireDefault(_base),
    win = window,
    doc = win.document,
    docEl = doc.documentElement;
  exports["default"] = function(el) {
    var elRect = el.getBoundingClientRect();
    return (0, _base2["default"])(elRect.top, elRect.height, docEl.clientHeight)
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _context = __webpack_require__(10),
    _context2 = _interopRequireDefault(_context),
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    ap = function(tracert, callback) {
      var Tracert = tracert || window.Tracert;
      _tracertUtil2["default"].objectAssign(Tracert, _context2["default"]), Tracert.before("set", function(_ref) {
        var spmAPos = _ref.spmAPos,
          spmBPos = _ref.spmBPos;
        if (spmAPos) {
          for (var metaList = _tracertUtil2["default"].nodeListToArray(window.document.getElementsByTagName("meta")), flag = !1, i = 0; i < metaList.length; i++) {
            var metaItem = metaList[i],
              name = _tracertUtil2["default"].getAttr(metaItem, "name"),
              content = _tracertUtil2["default"].getAttr(metaItem, "content");
            content && name && "data-aspm" === name && (metaItem.content = spmAPos, flag = !0)
          }
          if (!flag) {
            var oMeta = window.document.createElement("meta");
            oMeta.name = "data-aspm", oMeta.content = spmAPos, window.document.getElementsByTagName("head")[0].appendChild(oMeta)
          }
        }
        if (spmBPos) {
          var body = window.document.getElementsByTagName("BODY")[0];
          body && body.setAttribute && body.setAttribute("data-aspm", spmBPos)
        }
      });
      var getScene = function() {
        window.AlipayJSBridge.call("getSceneStackInfo", function(result) {
          if (result) {
            var currentIndex = result.currentIndex;
            Tracert.set({
              _apCurrentIndex: currentIndex
            })
          }
          callback()
        })
      };
      return Tracert.call("init"), window.AlipayJSBridge ? getScene() : document.addEventListener("AlipayJSBridgeReady", getScene, !1), Tracert
    };
  window.tracertAp = ap, exports["default"] = ap, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
      }
      return target
    },
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    },
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    _helper = __webpack_require__(11),
    _helper2 = _interopRequireDefault(_helper);
  exports["default"] = {
    _calledLogPv: !1,
    init: function() {
      _helper2["default"].initFromStartParams(this, {
        key: "bizScenario",
        value: _tracertUtil2["default"].getValue("bizScenario")
      }), _helper2["default"].initFromStartParams(this, {
        key: "version",
        value: _tracertUtil2["default"].getValue("version")
      }), _helper2["default"].initFromStartParams(this, {
        key: "appId",
        value: _tracertUtil2["default"].getValue("appId")
      }), _helper2["default"].initFromStartParams(this, {
        key: "chInfo",
        value: _tracertUtil2["default"].getValue("chInfo") || _tracertUtil2["default"].getValue("chinfo")
      }), _helper2["default"].initFromStartParams(this, {
        key: "cityid",
        value: _tracertUtil2["default"].getValue("cityId") || _tracertUtil2["default"].getValue("cityid")
      }), _helper2["default"].expoMerge(this, {
        eventName: "collectDestroyJsApi",
        reset: !0
      }), _helper2["default"].expoMerge(this, {
        eventName: "back",
        reset: !0
      }), _helper2["default"].expoMerge(this, {
        eventName: "pause"
      }), _helper2["default"].checkSubPage(this)
    },
    remoteLog: function() {
      var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        autoClick = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        params = _helper2["default"].formatRemoteParams(this, options),
        _params = {};
      if (_tracertUtil2["default"].objectAssign(_params, params), this.debug) {
        var debugParam = {};
        _tracertUtil2["default"].objectAssign(debugParam, params), console.log(debugParam)
      }
      return "mergeExpose" === _params.actionId && _params.spmId && 3 === _params.spmId.split(".").length && _params.param4 ? (this.fmtedExOptions = _tracertUtil2["default"].addMexOption(this.fmtedExOptions, _tracertUtil2["default"].objectAssign({}, _params)), this.fmtedExObj = _tracertUtil2["default"].addToExObj(this.fmtedExObj, _tracertUtil2["default"].objectAssign({}, _params)), void(this.fmtedExObjArr = _tracertUtil2["default"].formatExObj(this.fmtedExObj, this.fmtedExOptions))) : (autoClick && params.spmId && (delete params.param1, delete params.param2, delete params.param3, (this.entityId || params.entityId) && (params.entityId = params.entityId || this.entityId), window.AlipayJSBridge.call("autoClick", {
        param: params
      })), _params.param4 = _tracertUtil2["default"].objToStr(_params.param4), void window.AlipayJSBridge.call("remoteLog", _params))
    },
    _logPv: function() {
      var obj = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this._calledLogPv && window.AlipayJSBridge.call("pageMonitor", {
        actionType: "end"
      }), this._calledLogPv = !0, this.call("pageMonitor", obj)
    },
    report: function() {
      var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        params = options.params,
        pageSpm = options.spmId;
      if (pageSpm) {
        var arr = pageSpm.split("."),
          spmAPos = arr[0],
          spmBPos = arr[1];
        spmAPos && spmBPos && this.set({
          spmAPos: spmAPos,
          spmBPos: spmBPos
        })
      }
      "object" === ("undefined" == typeof params ? "undefined" : _typeof(params)) && this.set({
        mdata: _extends({}, this.mdata, params)
      });
      var hasSpm = !!pageSpm;
      hasSpm && this._calledLogPv && window.AlipayJSBridge.call("pageMonitor", {
        actionType: "end"
      }), hasSpm && this.set({
        _calledLogPv: !0
      }), this.call("pageMonitor")
    },
    pageMonitor: function(obj) {
      var bizType = this.bizType,
        pageSpm = this.spmAPos && this.spmBPos ? [this.spmAPos, this.spmBPos].join(".") : "",
        reportDataObj = {
          url: this.url,
          bizType: bizType,
          isSPM: !!pageSpm
        };
      pageSpm && (reportDataObj.spmId = pageSpm), this.entityId && (reportDataObj.entityId = this.entityId);
      var spmDetail = _extends({}, this.mdata, {
          url: this.url,
          fullUrl: location.href,
          mPageState: this.state,
          mBizScenario: this.bizScenario
        }, obj),
        _params = {
          spm: reportDataObj,
          spmDetail: spmDetail
        };
      this.debug && console.log(_params), window.AlipayJSBridge.call("reportData", _params)
    },
    available: function(options) {
      var AlipayH5Performance = window.AlipayH5Performance;
      if (AlipayH5Performance) {
        var params = options;
        options instanceof Object && "object" === _typeof(options.params) && (params = options.params), AlipayH5Performance.addTrackData({
          name: "timeReport",
          value: _tracertUtil2["default"].objToStr(params, "|")
        })
      }
    }
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    },
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil);
  exports["default"] = {
    initFromStartParams: function(tracert, _ref) {
      var key = _ref.key,
        value = _ref.value,
        Tracert = tracert;
      if (Tracert.mdata = Tracert.mdata || {}, value) return Tracert.mdata[key] = value, void(Tracert[key] = value)
    },
    expoMerge: function(tracert, _ref2) {
      var eventName = _ref2.eventName,
        reset = _ref2.reset,
        Tracert = tracert;
      document.addEventListener(eventName, function() {
        if (!Tracert.hasExpoMerge) {
          for (var i = 0; i < Tracert.fmtedExObjArr.length; i++) window.AlipayJSBridge.call("remoteLog", Tracert.fmtedExObjArr[i]);
          reset && (Tracert.hasExpoMerge = !0)
        }
      }, !1)
    },
    checkSubPage: function(tracert) {
      var Tracert = tracert,
        AliJSBridge = window.AlipayJSBridge;
      if (AliJSBridge && AliJSBridge.startupParams && AliJSBridge.startupParams.extLogInfo && 0 === Tracert._apCurrentIndex) try {
        var extInfo = AliJSBridge.startupParams.extLogInfo;
        "string" == typeof extInfo && (extInfo = JSON.parse(extInfo));
        var _extInfo = extInfo,
          pageId = _extInfo.pageId;
        if (!pageId) return;
        var pageIdArr = pageId.split("__"),
          target = pageIdArr[0],
          pageArr = target.split(".");
        pageArr[0] && pageArr[1] && 2 === pageArr.length && Tracert.call("config", {
          spmAPos: pageArr[0],
          spmBPos: pageArr[1],
          autoLogPv: !1
        })
      } catch (e) {
        console.warn("\u89e3\u6790extLogInfo\u5931\u8d25", e)
      }
    },
    formatRemoteParams: function(tracert) {
      var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Tracert = tracert,
        options = params || {},
        seedId = options.seedId;
      Tracert.seedIdPrefix && (seedId = Tracert.seedIdPrefix + "-" + seedId), Tracert.seedIdSuffix && (seedId = seedId + "-" + Tracert.seedIdSuffix);
      var spmId = options.spmId || "",
        spmAPosrr = spmId.split("."),
        arrLen = spmAPosrr.length,
        spmAPos = Tracert.spmAPos,
        spmBPos = Tracert.spmBPos;
      if (spmAPos && spmBPos) switch (arrLen) {
        case 1:
          if ("" === spmId) {
            delete options.spmId;
            break
          }
          options.spmId = [spmAPos, spmBPos, spmId].join(".");
          break;
        case 2:
          options.spmId = [spmAPos, spmBPos, spmId].join(".");
          break;
        case 3:
          break;
        case 4:
          break;
        default:
          options.param2 = spmId, delete options.spmId
      } else delete options.spmId;
      var extraParam = {
          mBizScenario: Tracert.mdata.bizScenario,
          mPageState: Tracert.state,
          mPageName: Tracert.name,
          role_id: Tracert.roleId || Tracert.role_id,
          fullURL: location.href
        },
        param4 = options.param4 || {};
      if (_tracertUtil2["default"].objectAssign(param4, extraParam), Tracert.mdata && "object" === _typeof(Tracert.mdata))
        for (var key in Tracert.mdata) Tracert.mdata.hasOwnProperty(key) && (param4[key] = param4[key] || Tracert.mdata[key]);
      var logLevel = options.logLevel || Tracert.logLevel;
      return _tracertUtil2["default"].objectAssign(options, {
        type: options.type || "monitor",
        bizType: options.bizType || Tracert.bizType,
        logLevel: parseInt(logLevel, 10),
        actionId: options.actionId || "clicked",
        param4: param4,
        seedId: seedId
      }), options
    }
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
      return arr2
    }
    return Array.from(arr)
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr)
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    },
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
      }
      return target
    },
    _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
      }
      return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
      }
    }(),
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    deprecated = function(text) {
      console && console.warn && console.warn("Tracert deprecated\uff1a" + text)
    },
    doc = document,
    Core = function() {
      function Core() {
        var opt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        _classCallCheck(this, Core);
        var props = {
          autoLogPv: !0,
          eventType: "click",
          autoExpo: !1,
          bizType: "H5behavior",
          state: "",
          name: "",
          logLevel: "2",
          mdata: {},
          seedIdPrefix: "",
          seedIdSuffix: "",
          spmAPos: "",
          spmBPos: "",
          bizScenario: _tracertUtil2["default"].getValue("bizScenario") || "",
          paramPrefix: "",
          debug: !1,
          server: "",
          lastClkSpm: "",
          url: location.href.split(/\?|#|;jsessionid=/)[0],
          referSPM: "",
          srcSpm: "",
          sessionIdKey: "tracert-session-key",
          seedIdCfg: {
            pageSeedId: "H5_MTRACKER_AP_PAGE",
            clkSeedId: "H5_MTRACKER_AP_CLK",
            calcSeedId: "H5_MTRACKER_AP_CALC",
            expoSeedId: "H5_MTRACKER_AP_EXPO",
            syslogSeedId: "H5_MTRACKER_AP_SYSLOG"
          },
          _plugins: [],
          platformType: "",
          ready: !1,
          apiCashList: [],
          timeMap: {},
          expoOnce: !1,
          _wap_intervalEx: 400,
          _wap_interval: 300,
          _wap_mgObjIndex: 0,
          _wap_exObjIndex: 0,
          _wap_mgTdObjIndex: 0,
          _expoMergeItvObj: 0,
          hasExpoMerge: !1,
          fmtedExObjArr: [],
          fmtedExObj: {},
          fmtedExOptions: {},
          cacheExObjArr: [],
          cacheMrExObjArr: [],
          expotTimeout: 300,
          expoObj: {},
          expoType: function(callback) {
            var lock = !1,
              scrollFn = function scrollFn() {
                lock || (lock = !0, _tracertUtil2["default"].removeEvent("scroll", doc, scrollFn), setTimeout(function() {
                  lock = !1, _tracertUtil2["default"].addEvent("scroll", doc, scrollFn)
                }, 300), callback())
              };
            _tracertUtil2["default"].addEvent("scroll", doc, scrollFn)
          },
          expoSection: [-.3, .3],
          _beforeEvObj: {
            logPv: [],
            click: [],
            expo: [],
            set: [],
            send: []
          },
          _afterEvObj: {
            start: [],
            logPv: [],
            click: [],
            expo: []
          },
          _pluginLoadCnt: 0,
          sysInfo: {}
        };
        _tracertUtil2["default"].objectAssign(props, opt), _tracertUtil2["default"].objectAssign(this, props);
        var loadList = window.TracertCmdCache;
        if (loadList && loadList.length)
          for (var i = 0; i < loadList.length; i++) {
            var _slice$call = [].slice.call(loadList[i]),
              _slice$call2 = _toArray(_slice$call),
              fn = _slice$call2[0],
              args = _slice$call2.slice(1);
            this.call.apply(this, [fn].concat(_toConsumableArray(args)))
          }
        this._start()
      }
      return _createClass(Core, [{
        key: "before",
        value: function(fnName, fn) {
          var beforEventObj = this._beforeEvObj;
          if (!beforEventObj[fnName]) throw new Error("\u76ee\u6807\u65b9\u6cd5\u4e0d\u652f\u6301\u8be5\u4e8b\u4ef6");
          if ("function" != typeof fn) throw new Error("\u76d1\u542c\u5668\u4e0d\u662f\u51fd\u6570");
          beforEventObj[fnName].push(fn)
        }
      }, {
        key: "_runBeforeFns",
        value: function(fn, args) {
          var beforEventObj = this._beforeEvObj[fn] || [];
          if (!beforEventObj || !beforEventObj.length) return !0;
          for (var i = 0; i < beforEventObj.length; i++) {
            var res = beforEventObj[i].call(this, args);
            if (res === !1) return console && console.debug && console.debug("Tracert before fns: " + fn + " stop propagation"), !1
          }
          return !0
        }
      }, {
        key: "after",
        value: function(fnName, fn) {
          var afterEventObj = this._afterEvObj;
          if (!afterEventObj[fnName]) throw new Error("\u76ee\u6807\u65b9\u6cd5\u4e0d\u652f\u6301\u8be5\u4e8b\u4ef6");
          if ("function" != typeof fn) throw new Error("\u76d1\u542c\u5668\u4e0d\u662f\u51fd\u6570");
          return "start" === fnName && this.ready ? void fn() : void afterEventObj[fnName].push(fn)
        }
      }, {
        key: "_runAfterFns",
        value: function(fn, args) {
          var afterEventObj = this._afterEvObj[fn] || [];
          if (afterEventObj && afterEventObj.length)
            for (var i = 0; i < afterEventObj.length; i++) afterEventObj[i].call(this, args)
        }
      }, {
        key: "init",
        value: function() {}
      }, {
        key: "load",
        value: function(callback) {
          _tracertUtil2["default"].load(callback)
        }
      }, {
        key: "onReady",
        value: function(callback) {
          this.ready ? callback && callback() : document.addEventListener("TracertOnReady", function() {
            callback && callback()
          })
        }
      }, {
        key: "_start",
        value: function() {
          var _this = this,
            callback = function() {
              _this.load(function() {
                if (!_this.ready) {
                  var metaInfo = _tracertUtil2["default"].getMetaSpm();
                  metaInfo.spmAPos = _this.spmAPos || metaInfo.spmAPos, _this.spmBPos || (metaInfo.spmBPos = _tracertUtil2["default"].getSpmBPos()), _this.set(metaInfo), _this.ready = !0;
                  for (var i = 0; i < _this.apiCashList.length; i++) {
                    var args = _this.apiCashList[i];
                    _this.call.apply(_this, args)
                  }
                  _this._runAfterFns("start"), _this.apiCashList = []
                }
              })
            };
          this.pluginReady && this.started ? callback() : (document.addEventListener("TracertPluginReady", function() {
            _this.started && callback()
          }), document.addEventListener("TracertStart", function() {
            _this.pluginReady && callback()
          }))
        }
      }, {
        key: "start",
        value: function() {
          var opt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.run(opt)
        }
      }, {
        key: "run",
        value: function() {
          var opt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.set(_extends({}, opt, {
            started: !0
          }));
          var event = document.createEvent("HTMLEvents");
          event.initEvent("TracertStart", !0, !0), document.dispatchEvent(event), this.autoLogPv && this.call("logPv")
        }
      }, {
        key: "loadPlugins",
        value: function(ps) {
          if (ps && ps.length) {
            this._plugins = ps;
            for (var i = 0; i < ps.length; i++) {
              var plugin = ps[i];
              this.loadPlugin(plugin)
            }
          }
        }
      }, {
        key: "loadPlugin",
        value: function(p) {
          var _this2 = this;
          if (p && (window["tracert" + p] && "function" == typeof window["tracert" + p] || "function" == typeof p)) {
            var fn = "function" == typeof p ? p : window["tracert" + p];
            fn(this, function() {
              if (_this2._pluginLoadCnt++, _this2._pluginLoadCnt === _this2._plugins.length) {
                _this2.set({
                  pluginReady: !0
                });
                var event = document.createEvent("HTMLEvents");
                event.initEvent("TracertPluginReady", !0, !0), document.dispatchEvent(event)
              }
            })
          }
        }
      }, {
        key: "call",
        value: function() {
          var args = [].slice.call(arguments),
            result = void 0;
          if (!args[0] || "run" !== args[0] && "start" !== args[0] || this.set({
              started: !0
            }), this.ready) {
            if (!this[args[0]] || "function" != typeof this[args[0]]) return console.warn("\u672a\u627e\u5230\u65b9\u6cd5\uff1a" + args[0]), null;
            var options = args.slice(1);
            options = this.optionsHandle(options), result = this[args[0]].apply(this, options)
          } else this.apiCashList.push(args);
          return result
        }
      }, {
        key: "optionsHandle",
        value: function(options) {
          return options && options.length ? (options.forEach(function(op) {
            var opz = op;
            opz && (opz.spmid && (opz.spmId = opz.spmid), opz.seedid && (opz.seedId = opz.seedid), opz.ucid && (opz.ucId = opz.ucid))
          }), options) : options
        }
      }, {
        key: "get",
        value: function(key) {
          return this[key]
        }
      }, {
        key: "set",
        value: function() {
          var opt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            options = opt;
          this._runBeforeFns("set", options), options.eventName && _tracertUtil2["default"].objectAssign(options, {
            eventType: options.eventName
          }), "object" === _typeof(options.mdata) && (options.mdata = _extends({}, this.mdata, options.mdata)), _tracertUtil2["default"].objectAssign(this, options)
        }
      }, {
        key: "getSysInfo",
        value: function(key) {
          return this.sysInfo[key]
        }
      }, {
        key: "setSysInfo",
        value: function() {
          var opt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            options = opt;
          _tracertUtil2["default"].objectAssign(this.sysInfo, options)
        }
      }, {
        key: "config",
        value: function() {
          var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          deprecated("\u8bf7\u4f7f\u7528 set \u65b9\u6cd5"), this.set(options)
        }
      }, {
        key: "remoteLog",
        value: function() {}
      }, {
        key: "logPv",
        value: function() {
          var obj = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            res = this._runBeforeFns("logPv", obj);
          res && (this._logPv(obj), this._runAfterFns("logPv", obj))
        }
      }, {
        key: "_logPv",
        value: function() {}
      }, {
        key: "report",
        value: function() {
          var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            params = options.params,
            pageSpm = options.spmId;
          if (pageSpm) {
            var arr = pageSpm.split("."),
              spmAPos = arr[0],
              spmBPos = arr[1];
            spmAPos && spmBPos && this.set({
              spmAPos: spmAPos,
              spmBPos: spmBPos
            })
          }
          "object" === ("undefined" == typeof params ? "undefined" : _typeof(params)) && this.set({
            mdata: _extends({}, this.mdata, params)
          }), this.set({
            _calledLogPv: !!pageSpm
          }), this.call("logPv")
        }
      }, {
        key: "pageState",
        value: function() {
          var state = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          this.set({
            state: state
          }), this.call("logPv")
        }
      }, {
        key: "pageName",
        value: function() {
          var name = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          deprecated("\u5df2\u5e9f\u5f03"), this.set({
            name: name
          })
        }
      }, {
        key: "setPageState",
        value: function() {
          var state = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          this.call("pageState", state)
        }
      }, {
        key: "time",
        value: function() {
          var timekey = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            key = "" + timekey,
            timeMap = this.timeMap;
          key && !timeMap[key] && (timeMap[key] = new Date - 0)
        }
      }, {
        key: "timeEnd",
        value: function() {
          var timekey = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            key = "" + timekey,
            timeMap = this.timeMap;
          if (!key || !timeMap[key]) return "";
          var ts = timeMap[key],
            consume = new Date - 0 - ts;
          return delete timeMap[key], consume
        }
      }, {
        key: "_goRemotelog",
        value: function() {
          var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!options.seedId && !options.spmId) return void console.warn("\u8bf7\u586b\u5165\u57cb\u70b9seedId\u6216spmId");
          var spmId = options.spmId || options.spmid || "",
            spmAPosrr = spmId.split("."),
            arrLen = spmAPosrr.length,
            spmAPos = this.spmAPos,
            spmBPos = this.spmBPos;
          if (spmAPos && spmBPos) switch (arrLen) {
            case 1:
            case 2:
              if ("" === spmId) break;
              if (0 !== spmId.indexOf("c")) break;
              spmId = [spmAPos, spmBPos, spmId].join(".")
          }
          var config = {
            ucId: options.ucId,
            seedId: options.seedId,
            spmId: spmId,
            actionId: options.actionId,
            logLevel: options.logLevel || this.logLevel,
            param4: options.mdata || {}
          };
          if (options.type && (config.type = options.type), options.params && "object" === _typeof(options.params))
            if (options.params.length) _tracertUtil2["default"].objectAssign(config, {
              param1: options.params[0] || "",
              param2: options.params[1] || "",
              param3: options.params[2] || ""
            });
            else {
              var mdata = options.mdata || {};
              _tracertUtil2["default"].objectAssign(mdata, options.params), _tracertUtil2["default"].objectAssign(config.param4, mdata)
            } if (options.timeKey) {
            var consume = this.call("timeEnd", options.timeKey);
            consume && (config.param4.consume = consume)
          }
          this.call("remoteLog", config)
        }
      }, {
        key: "info",
        value: function() {
          var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this._goRemotelog(options)
        }
      }, {
        key: "error",
        value: function() {
          var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          _tracertUtil2["default"].objectAssign(options, {
            type: "error",
            actionId: "exception"
          }), this._goRemotelog(options)
        }
      }, {
        key: "click",
        value: function() {
          var spmId = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            extra = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            param = {
              spmId: spmId,
              extra: extra,
              options: options
            },
            res = this._runBeforeFns("click", param);
          if (res) {
            var seed = param.spmId.split(":"),
              param4 = seed[1] ? {
                seedDesc: seed[1]
              } : {};
            _tracertUtil2["default"].objectAssign(param4, _tracertUtil2["default"].dealExtra(param.extra, this.paramPrefix));
            var params = {
              param1: this.url,
              param2: seed[0],
              param4: param4,
              seedId: this.seedIdCfg.clkSeedId,
              actionId: "clicked",
              spmId: seed[0]
            };
            _tracertUtil2["default"].objectAssign(params, param.options),
              this.set({
                lastClkSpm: param.spmId
              }), this.call("remoteLog", params, !0), this._runAfterFns("click", param)
          }
        }
      }, {
        key: "expo",
        value: function() {
          var spmId = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            offset = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "up",
            extra = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            param = {
              spmId: spmId,
              offset: offset,
              extra: extra
            },
            res = this._runBeforeFns("expo", param);
          if (res) {
            var params = {
              param1: this.url,
              param2: param.spmId,
              param3: param.offset,
              param4: _tracertUtil2["default"].dealExtra(param.extra, this.paramPrefix),
              seedId: this.seedIdCfg.expoSeedId,
              actionId: "exposure",
              spmId: param.spmId
            };
            if (this.expoObj = this.expoObj || {}, this.expoObj[param.spmId] === !1) return void console.warn("\u8be5\u57cb\u70b9\u5df2\u7ecf\u66dd\u5149\u8fc7\u4e86");
            this.expoOnce && (this.expoObj[param.spmId] = !1), this.call("remoteLog", params), this._runAfterFns("expo", param)
          }
        }
      }, {
        key: "calc",
        value: function() {
          var _calc = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            key = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            extra = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          deprecated("calc \u5df2\u5e9f\u5f03");
          var params = {
            param1: this.url,
            param2: _calc,
            param3: key,
            param4: _tracertUtil2["default"].dealExtra(extra, this.paramPrefix),
            seedId: this.seedIdCfg.calcSeedId,
            actionId: "timestamp"
          };
          this.call("remoteLog", params)
        }
      }]), Core
    }();
  exports["default"] = Core, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
      }
      return target
    },
    _context = __webpack_require__(14),
    _context2 = _interopRequireDefault(_context),
    autoClick = function(Tracert, cb) {
      return Tracert.set(_extends({}, _context2["default"])), Tracert.spmClickEvent(), Tracert.before("set", function(opt) {
        var options = opt;
        options.eventType = options.eventType || options.eventName;
        var originEvent = !!options.eventType && Tracert.eventType;
        Tracert.spmClickEvent(originEvent, options.eventType)
      }), cb(), Tracert
    };
  window.tracertAutoClick = autoClick, exports["default"] = autoClick, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }

  function spmEventHandler(e) {
    var Tracert = window.Tracert,
      el = e.target || e.srcElement,
      clickSpmOptions = Tracert.getClickSpm(el);
    if ("object" === ("undefined" == typeof clickSpmOptions ? "undefined" : _typeof(clickSpmOptions)) && clickSpmOptions.spmId) {
      var dom = clickSpmOptions.dom,
        externOpts = {};
      _tracertUtil2["default"].getAttr(dom, spmAbTest) && (externOpts.abTest = !0), _tracertUtil2["default"].getAttr(dom, spmEntityid) && (externOpts.entityId = _tracertUtil2["default"].getAttr(dom, spmEntityid)), Tracert.call("click", clickSpmOptions.spmId, _tracertUtil2["default"].getDomParam(dom), externOpts)
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    },
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    spmAbTest = "data-aspm-ab",
    spmEntityid = "data-aspm-entityid";
  exports["default"] = {
    spmClickEvent: function(originEventType, targetEventType) {
      originEventType && _tracertUtil2["default"].removeEvent(originEventType, window.document, spmEventHandler), _tracertUtil2["default"].addEvent(targetEventType || this.eventType, window.document, spmEventHandler)
    },
    getClickSpm: function(el) {
      var dom = _tracertUtil2["default"].getDPosDom(el),
        spmDPos = _tracertUtil2["default"].getSpmDPos(dom),
        result = {
          dom: dom,
          spmId: ""
        };
      if (!this.spmAPos || !this.spmBPos) return result;
      if (dom && spmDPos) {
        var spmIdList = spmDPos.split("."),
          spmIdListlen = spmIdList.length,
          hasSpmId = !0;
        switch (spmIdListlen) {
          case 1:
            spmIdList.unshift(_tracertUtil2["default"].getSpmCPos(dom))
        }
        for (var len = 2, i = 0; i < len; i++)
          if (!spmIdList[i]) {
            hasSpmId = !1;
            break
          } if (hasSpmId) {
          var spmab = [this.spmAPos, this.spmBPos];
          result.spmId = spmab.concat(spmIdList).join(".")
        }
      }
      return result
    }
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
      }
      return target
    },
    _context = __webpack_require__(16),
    _context2 = _interopRequireDefault(_context),
    autoExpo = function(tracert, cb) {
      var Tracert = tracert;
      return Tracert.set(_extends({}, _context2["default"])), Tracert.before("set", function(options) {
        options.autoExpo && Tracert.call("startAutoExpo")
      }), cb(), Tracert
    };
  window.tracertAutoExpo = autoExpo, exports["default"] = autoExpo, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    },
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    _y = __webpack_require__(8),
    _y2 = _interopRequireDefault(_y),
    _x = __webpack_require__(7),
    _x2 = _interopRequireDefault(_x);
  exports["default"] = {
    _getYStatus: function(el) {
      return (0, _y2["default"])(el)
    },
    _getXStatus: function(el) {
      return (0, _x2["default"])(el)
    },
    _doExpo: function(expoVal, dom, expoEl) {
      var expoSectionLeft = this.expoSection[0],
        expoSectionRight = this.expoSection[1],
        expoObj = this.expoObj;
      if (dom && dom.getBoundingClientRect) {
        var box = dom.getBoundingClientRect();
        if (!box.height || !box.width) return
      }
      if (expoObj[expoVal] !== !1 && dom.offsetParent) {
        void 0 === expoObj[expoVal] && (expoObj[expoVal] = [-1, -1]);
        var expoYStatus = this._getYStatus(expoEl),
          expoXStatus = this._getXStatus(expoEl);
        if (expoYStatus >= expoSectionLeft && expoYStatus <= expoSectionRight && expoXStatus >= expoSectionLeft && expoXStatus <= expoSectionRight) {
          var extra = _tracertUtil2["default"].getDomParam(dom),
            expoObjx = expoObj[expoVal][0],
            expoObjy = expoObj[expoVal][1];
          expoObjy < expoSectionLeft ? (this.expo(expoVal, "up", extra), this.expoOnce && (expoObj[expoVal] = !1)) : expoObjy > expoSectionRight ? (this.expo(expoVal, "down", extra), this.expoOnce && (expoObj[expoVal] = !1)) : expoObjx < expoSectionLeft ? (this.expo(expoVal, "left", extra), this.expoOnce && (expoObj[expoVal] = !1)) : expoObjx > expoSectionRight && (this.expo(expoVal, "right", extra), this.expoOnce && (expoObj[expoVal] = !1))
        }
        expoObj[expoVal] = expoObj[expoVal] !== !1 && [expoXStatus, expoYStatus]
      }
    },
    expoCheck: function() {
      for (var expoElementList = document.querySelectorAll("[data-aspm-expo]"), i = 0; i < expoElementList.length; i++) {
        var expoEl = expoElementList[i],
          spmOptions = this.getExpoSpmDPos(expoEl);
        if ("object" === ("undefined" == typeof spmOptions ? "undefined" : _typeof(spmOptions)) && spmOptions.spmId || (spmOptions = this.getExpoSpmCPos(expoEl), "object" === ("undefined" == typeof spmOptions ? "undefined" : _typeof(spmOptions)) && spmOptions.spmId)) {
          var expoVal = spmOptions.spmId,
            dom = spmOptions.dom;
          this._doExpo(expoVal, dom, expoEl)
        }
      }
    },
    startAutoExpo: function() {
      var _this = this;
      this.expoType(function() {
        _this.expoCheck()
      }), this.expoCheck()
    },
    getExpoSpmCPos: function(el) {
      var result = {
        dom: el,
        spmId: ""
      };
      if (!this.spmAPos || !this.spmBPos) return result;
      var cspm = _tracertUtil2["default"].getSpmCPos(el);
      if (!cspm) return result;
      var spmarr = [this.spmAPos, this.spmBPos, cspm];
      return result.spmId = spmarr.join("."), result
    },
    getExpoSpmDPos: function(el) {
      var dom = _tracertUtil2["default"].getDPosDom(el),
        spmDPos = _tracertUtil2["default"].getSpmDPos(dom),
        result = {
          dom: dom,
          spmId: ""
        };
      if (!this.spmAPos || !this.spmBPos) return result;
      if (dom && spmDPos) {
        var spmIdList = spmDPos.split("."),
          spmIdListlen = spmIdList.length,
          hasSpmId = !0;
        switch (spmIdListlen) {
          case 1:
            spmIdList.unshift(_tracertUtil2["default"].getSpmCPos(dom))
        }
        for (var len = 2, i = 0; i < len; i++)
          if (!spmIdList[i]) {
            hasSpmId = !1;
            break
          } if (hasSpmId) {
          var spmab = [this.spmAPos, this.spmBPos];
          result.spmId = spmab.concat(spmIdList).join(".")
        }
      }
      return result
    }
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    },
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    whitelistRegex = new RegExp("^http(s)?://.*[.](taobao|alitrip|alipay|1688|antfortune|taopiaopiao|koubei|ssdata|tmall|alipayobjects|alipay|taobao|alipayobjects|tmall|taopiaopiao|antfortune|1688|alicdn|amap|cainiao|xiami|alibaba|aliyun|alitrip|koubei|weibo|etao|laiwang|taobaocdn|fliggy|yunos|alimama|taohua|antsdaq|juhuasuan|alipay-inc|ssdata|cainiao-inc|xiami|tmall|alibaba|zhimaxy|taobao|alipay|mybank|weibo|etao|taobao|tbcdn|alipay|tmall|fliggy|alitrip|zmxy|sweetmartmarketing|bangdao-tech|alipay-eco|e-mallchina|in66|taeapp|miyapay|10010|10661911|ubike|itoyo|ele|campusnews|qufenqi|aliapp|chidaoni)[.](com|net|hk|me)$", "g"),
    origin = window.location.origin,
    init = function(tracert) {
      function remoteDtLogMonitor(logList) {
        var list = [].concat(logList);
        list.length && Tracert.call("info", {
          seedId: "H5_PAGE_DtLogMoinitor_UPLOAD",
          params: {
            dtLogMonitor: list.join(_dtLogMonitorSpliter)
          },
          logLevel: "3"
        })
      }

      function saveDtLogMonitor(logList) {
        var list = [].concat(logList),
          logVal = list.join(_dtLogMonitorSpliter),
          logTime = "" + parseInt((new Date - 0) / 1e3, 10);
        AlipayJSBridge.call("setAPDataStorage", {
          type: "preferences",
          business: "DTSchemeServiceImpl",
          key: "dtLogMonitor",
          value: logVal
        }), AlipayJSBridge.call("setAPDataStorage", {
          type: "preferences",
          business: "DTSchemeServiceImpl",
          key: "dtLogMonitorTime",
          value: logTime
        }), Tracert.call("info", {
          seedId: "H5_PAGE_DtLogMoinitor_SAVE",
          params: {
            dtLogMonitor: logVal,
            dtLogMonitorTime: logTime
          },
          logLevel: "3"
        })
      }

      function splitDtLogMonitor(logStr) {
        var blackObj = {},
          blackArr = [],
          otherObj = {},
          otherArr = [],
          timeVal = void 0;
        if (logStr) try {
          var logMonitorList = logStr.split(_dtLogMonitorSpliter),
            logMonitorListLen = logMonitorList.length,
            logItem = void 0,
            i = void 0,
            key = void 0,
            val = void 0;
          for (i = 0; i < logMonitorListLen; i++) logItem = logMonitorList[i], logItem && (logItem = logItem.split("_"), key = logItem[0], val = logItem[1], val && ("time" === key ? timeVal = val : _dtLogMonitorBlackList[key] ? (blackObj[key] = val, blackArr.push(key + "_" + val)) : (otherObj[key] = val, otherArr.push(key + "_" + val))))
        } catch (ex) {
          console.warn(ex)
        }
        return {
          blackObj: blackObj,
          blackArr: blackArr,
          otherObj: otherObj,
          otherArr: otherArr,
          time: timeVal
        }
      }

      function getStorageDtLogMonitor(callback) {
        AlipayJSBridge.call("getAPDataStorage", {
          type: "preferences",
          business: "DTSchemeServiceImpl",
          key: "dtLogMonitor"
        }, function(result) {
          var storageObj = void 0,
            storageVal = "";
          1 !== result.error && 11 !== result.error && result.data && (storageVal = "" + result.data), "function" == typeof callback && (storageObj = splitDtLogMonitor(storageVal), callback(storageObj))
        })
      }

      function initDtLogMonitor() {
        var startupParams = window.AlipayJSBridge.startupParams,
          startupLogStr = _tracertUtil2["default"].getValue("dtLogMonitor") || startupParams.dtLogMonitor;
        try {
          startupLogStr = decodeURIComponent(startupLogStr)
        } catch (ex) {
          Tracert.call("info", {
            seedId: "H5_PAGE_DtLogMoinitor_PARSEERR",
            params: {
              startupDtLog: startupLogStr
            },
            logLevel: "3"
          })
        }
        var startupLogSplit = splitDtLogMonitor(startupLogStr),
          startupLogOtherObj = startupLogSplit.otherObj,
          startupLogHasWhiteKey = !1,
          tempProp = void 0,
          unionStorageAndRemote = function() {
            setTimeout(function() {
              getStorageDtLogMonitor(function(storageLogObj) {
                var logMonitorArr = [];
                storageLogObj.otherArr.length ? AlipayJSBridge.call("getAPDataStorage", {
                  type: "preferences",
                  business: "DTSchemeServiceImpl",
                  key: "dtLogMonitorTime"
                }, function(result) {
                  var time = result.data || "";
                  logMonitorArr = logMonitorArr.concat(storageLogObj.otherArr), logMonitorArr = logMonitorArr.concat(startupLogSplit.blackArr), time && logMonitorArr.push("time_" + time), _dtLogMonitorVal = logMonitorArr.join(_dtLogMonitorSpliter), remoteDtLogMonitor(logMonitorArr)
                }) : (logMonitorArr = logMonitorArr.concat(startupLogSplit.blackArr), _dtLogMonitorVal = logMonitorArr.join(_dtLogMonitorSpliter), remoteDtLogMonitor(logMonitorArr))
              })
            }, 10)
          };
        for (tempProp in _dtLogMonitorWhiteList)
          if (startupLogOtherObj[tempProp]) {
            startupLogHasWhiteKey = !0;
            break
          }! startupLogHasWhiteKey && startupLogSplit.otherArr.length || "20000837" === startupParams.appId ? getStorageDtLogMonitor(function(logObj) {
          var dtLogList = [],
            logOtherObj = logObj.otherObj;
          if ("object" === ("undefined" == typeof logOtherObj ? "undefined" : _typeof(logOtherObj)))
            for (tempProp in _dtLogMonitorWhiteList) logOtherObj.hasOwnProperty(tempProp) && logOtherObj[tempProp] && dtLogList.push(tempProp + "_" + logOtherObj[tempProp]);
          dtLogList = dtLogList.concat(startupLogSplit.otherArr), saveDtLogMonitor(dtLogList), unionStorageAndRemote()
        }) : startupLogSplit.otherArr.length ? (saveDtLogMonitor(startupLogSplit.otherArr), unionStorageAndRemote()) : unionStorageAndRemote()
      }
      var matchRes = origin.match(whitelistRegex);
      if (!matchRes || !matchRes.length) return void console.log("\u5916\u90e8\u57df\u540d\uff0c\u4e0d\u505adtlogmonitor\u5b9e\u4f8b\u5316");
      var Tracert = tracert || window.Tracert,
        _dtLogMonitorSpliter = "__",
        _dtLogMonitorVal = "",
        _dtLogMonitorBlackList = {
          src: 1,
          rid: 1,
          sid: 1,
          time: 1
        },
        _dtLogMonitorWhiteList = {
          ch: 1,
          tanxid: 1,
          adid: 1,
          wid: 1
        },
        dtLogMonitor = function(logObj, callback) {
          var fn = callback;
          if ("function" == typeof logObj && (fn = logObj), fn || (fn = function() {}), "object" !== ("undefined" == typeof logObj ? "undefined" : _typeof(logObj))) fn(_dtLogMonitorVal, _dtLogMonitorVal);
          else {
            var existLog = splitDtLogMonitor(_dtLogMonitorVal),
              blackObj = existLog.blackObj,
              tempProp = void 0,
              blackArr = [];
            for (tempProp in _dtLogMonitorBlackList) "time" !== tempProp && (logObj[tempProp] && (blackObj[tempProp] = logObj[tempProp]), blackObj[tempProp] && blackArr.push(tempProp + "_" + blackObj[tempProp]));
            existLog.time && blackArr.push("time_" + existLog.time), callback(existLog.otherArr.concat(blackArr).join(_dtLogMonitorSpliter), _dtLogMonitorVal)
          }
        };
      _tracertUtil2["default"].objectAssign(Tracert, {
        initDtLogMonitor: initDtLogMonitor,
        dtLogMonitor: dtLogMonitor
      }), Tracert.call("initDtLogMonitor")
    },
    dtmonitor = function(tracert, callback) {
      var Tracert = tracert;
      window.AlipayJSBridge ? (init(Tracert), callback()) : document.addEventListener("AlipayJSBridgeReady", function() {
        init(Tracert), callback()
      }, !1)
    };
  window.tracertDtmonitor = dtmonitor, exports["default"] = dtmonitor, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
  }

  function emptyCb() {}

  function _AlipayJSBridgeReady(callback) {
    window.AlipayJSBridge && "function" == typeof callback ? callback() : document.addEventListener("AlipayJSBridgeReady", callback, !1)
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
      }
      return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
      }
    }(),
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    FullLinkParamsLogger = function() {
      function FullLinkParamsLogger(tracert) {
        _classCallCheck(this, FullLinkParamsLogger), this.tracert = tracert, this.trace = !!_tracertUtil2["default"].getValue("trace"), this.chinfo = _tracertUtil2["default"].getValue("chinfo") || _tracertUtil2["default"].getValue("chInfo") || "", this.scm = _tracertUtil2["default"].getValue("scm") || "", this.isPageInfoLogged = !1, this.isChinfoChainPushed = !1, this.start()
      }
      return _createClass(FullLinkParamsLogger, [{
        key: "start",
        value: function() {
          this.trace && this._setPageInfo(), this.chinfo && this._setChinfo()
        }
      }, {
        key: "getChinfoChain",
        value: function(cb) {
          window.AlipayJSBridge.call("handleLoggingAction", {
            actionType: "getChinfoChain"
          }, function(result) {
            var callback = "function" == typeof cb ? cb : emptyCb;
            if ("success" === result.status)
              if (result.data) {
                var chain = JSON.parse(result.data);
                callback(chain)
              } else callback({
                err: "\u5bb9\u5668\u8fd4\u56de\u6570\u636e\u7c7b\u578b\u6709\u8bef"
              });
            else callback({
              err: "\u5bb9\u5668\u5f02\u5e38"
            })
          })
        }
      }, {
        key: "_setPageInfo",
        value: function() {
          var _this = this;
          this.tracert.after("logPv", function() {
            window.AlipayJSBridge.call("handleLoggingAction", {
              actionType: "setPageParams",
              data: JSON.stringify({
                chinfo: _this.chinfo,
                scm: _this.scm
              })
            })
          }), this.isPageInfoLogged = !0
        }
      }, {
        key: "_setChinfo",
        value: function() {
          window.AlipayJSBridge.call("handleLoggingAction", {
            actionType: "appendChinfo",
            data: JSON.stringify({
              chinfo: this.chinfo,
              scm: this.scm
            })
          }), this.isChinfoChainPushed = !0
        }
      }]), FullLinkParamsLogger
    }(),
    fulllinkParams = function(tracert, callback) {
      var Tracert = tracert;
      return _AlipayJSBridgeReady(function() {
        var fulllinkParamsLogger = new FullLinkParamsLogger(Tracert);
        Tracert.set({
          getChinfoChain: fulllinkParamsLogger.getChinfoChain
        }), window.tracertFulllinkParamsLogger = fulllinkParamsLogger, callback()
      }), Tracert
    };
  exports["default"] = fulllinkParams, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
      }
      return target
    },
    _context = __webpack_require__(20),
    _context2 = _interopRequireDefault(_context),
    sem = function(Tracert, cb) {
      return Tracert.set(_extends({}, _context2["default"])), Tracert.semClickEvent(), Tracert.before("set", function(opt) {
        var options = opt;
        options.eventType = options.eventType || options.eventName;
        var originEvent = !!options.eventType && Tracert.eventType;
        Tracert.semClickEvent(originEvent, options.eventType)
      }), window.AlipayJSBridge ? cb() : document.addEventListener("AlipayJSBridgeReady", function() {
        cb()
      }, !1), Tracert
    };
  window.sem = sem, exports["default"] = sem, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }

  function semEventHandler(e) {
    var Tracert = window.Tracert,
      el = e.target || e.srcElement,
      clickSemOptions = _helper2["default"].getClickSem(el);
    "object" === ("undefined" == typeof clickSemOptions ? "undefined" : _typeof(clickSemOptions)) && clickSemOptions.semId && (clickSemOptions.actionId = "semclk", Tracert.call("sem", clickSemOptions), Tracert.setLastClkSem(clickSemOptions))
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    },
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    _helper = __webpack_require__(21),
    _helper2 = _interopRequireDefault(_helper);
  exports["default"] = {
    lastClkSem: "",
    semClickEvent: function(originEventType, targetEventType) {
      originEventType && _tracertUtil2["default"].removeEvent(originEventType, window.document, semEventHandler), _tracertUtil2["default"].addEvent(targetEventType || this.eventType, window.document, semEventHandler)
    },
    setLastClkSem: function(options) {
      var semId = options.semId,
        params = options.params;
      "object" !== ("undefined" == typeof params ? "undefined" : _typeof(params)) && (params = _tracertUtil2["default"].strToObj(params));
      var _params2 = params,
        rid = _params2.rid;
      return rid ? void(this.lastClkSem = "semId_" + semId + "__rpcId_" + rid) : void console.warn("sem\u6269\u5c55\u53c2\u6570\uff0c\u7f3a\u7701rid\u5b57\u6bb5\uff0c\u65e0\u6cd5\u6b63\u786e\u4e0a\u62a5")
    },
    sem: function(options) {
      var params = _helper2["default"].formatRemoteParams(this, options),
        _params = {};
      if (_tracertUtil2["default"].objectAssign(_params, params), this.debug) {
        var debugParam = {};
        _tracertUtil2["default"].objectAssign(debugParam, params), console.log(debugParam)
      }
      "string" != typeof _params.param4 && (_params.param4 = _tracertUtil2["default"].objToStr(_params.param4)), window.AlipayJSBridge.call("semLog", _params)
    }
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    semKey = "data-asem",
    semParamsKey = "data-asem-params";
  exports["default"] = {
    getSemDom: function(el) {
      var dom = el;
      if (!_tracertUtil2["default"].isViewDom(dom)) return null;
      do
        if (dom.hasAttribute(semKey) && dom.hasAttribute(semParamsKey)) return dom; while ((dom = dom.parentNode) && dom && dom.tagName && "BODY" !== dom.tagName && dom !== document.body);
      return null
    },
    getSemId: function(el) {
      var dom = el;
      if (!_tracertUtil2["default"].isViewDom(dom)) return "";
      if (dom.hasAttribute(semKey) && dom.hasAttribute(semParamsKey) && (dom = this.getSemDom(dom)), !dom) return "";
      var semId = _tracertUtil2["default"].getAttr(dom, semKey);
      return "" + semId
    },
    getSemParams: function(el) {
      var dom = el;
      if (!_tracertUtil2["default"].isViewDom(dom)) return "";
      if (dom.hasAttribute(semKey) && dom.hasAttribute(semParamsKey) && (dom = this.getSemDom(dom)), !dom) return "";
      var semParams = _tracertUtil2["default"].getAttr(dom, semParamsKey);
      return "" + semParams
    },
    getClickSem: function(el) {
      var dom = this.getSemDom(el),
        semId = this.getSemId(dom),
        semParams = this.getSemParams(dom),
        result = {
          semId: semId,
          params: semParams
        };
      return result
    },
    formatRemoteParams: function(tracert) {
      var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Tracert = tracert,
        options = _tracertUtil2["default"].objectAssign({}, params),
        param4 = options.param4 || options.params || {};
      return options.params && delete options.params, _tracertUtil2["default"].objectAssign(options, {
        bizType: options.bizType || Tracert.bizType,
        actionId: options.actionId || "semclk",
        param4: param4
      }), options
    }
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _jsCookie = __webpack_require__(28),
    _jsCookie2 = _interopRequireDefault(_jsCookie);
  exports["default"] = {
    get: function(key) {
      var opt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        res = window.localStorage && window.localStorage.getItem(key) || _jsCookie2["default"].get(key, opt);
      return res
    },
    set: function(key, value) {
      var opt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (value && value.length >= 400 && (opt.cookie || !window.localStorage)) return void(console && console.warn && console.warn("Tracert cookie set too long"));
      if (opt.cookie) return void _jsCookie2["default"].set(key, value, opt);
      if (window.localStorage) try {
        window.localStorage.setItem(key, value)
      } catch (e) {
        _jsCookie2["default"].set(key, value, opt)
      } else _jsCookie2["default"].set(key, value, opt)
    },
    remove: function(key, opt) {
      window.localStorage && window.localStorage.removeItem(key), _jsCookie2["default"].remove(key, opt)
    }
  }, module.exports = exports["default"]
}, function(module, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    },
    spmDataKey = "data-aspm",
    spmDPosMarkAttr = "data-aspm-click",
    spmDPosTagPattern = /^a|area$/i;
  exports["default"] = {
    nodeListToArray: function(nodes) {
      var arr = void 0,
        length = void 0;
      try {
        return arr = [].slice.call(nodes)
      } catch (err) {
        arr = [], length = nodes.length;
        for (var i = 0; i < length; i++) arr.push(nodes[i]);
        return arr
      }
    },
    getAttr: function(element, attrName) {
      return element && element.getAttribute ? element.getAttribute(attrName) || "" : ""
    },
    isDom: function(dom) {
      return null !== dom && "object" === ("undefined" == typeof dom ? "undefined" : _typeof(dom)) && 1 === dom.nodeType
    },
    isViewDom: function(dom) {
      return !(!dom || !this.isDom(dom) || dom === document.body || dom === document.documentElement)
    },
    getMetaSpm: function(metas) {
      for (var metaList = this.nodeListToArray(metas || document.getElementsByTagName("meta")), len = metaList.length, metaItem = void 0, name = void 0, content = void 0, bizType = void 0, spmAPos = void 0, i = 0; i < len; i++) {
        switch (metaItem = metaList[i], name = this.getAttr(metaItem, "name"), content = this.getAttr(metaItem, "content"), name) {
          case spmDataKey:
            spmAPos = content;
            break;
          case "data-bizType":
            bizType = content
        }
        if (spmAPos && bizType) break
      }
      var ret = {};
      return spmAPos && (ret.spmAPos = spmAPos), bizType && (ret.bizType = bizType), ret
    },
    getSpmBPos: function() {
      var spmBPos = this.getAttr(document.body, spmDataKey);
      return spmBPos
    },
    getSpmCPos: function(el) {
      var dom = el;
      if (!this.isViewDom(dom)) return "";
      for (var spmCPos = ""; dom && dom !== document.body && !(spmCPos = this.getAttr(dom, spmDataKey));) dom = dom.parentNode;
      return spmCPos
    },
    getDPosDom: function(el) {
      var dom = el;
      if (!this.isViewDom(dom)) return null;
      do
        if (spmDPosTagPattern.test(dom.tagName) || dom.hasAttribute(spmDPosMarkAttr)) return dom; while ((dom = dom.parentNode) && dom && dom.tagName && "BODY" !== dom.tagName && dom !== document.body && !this.getAttr(dom, spmDataKey));
      return null
    },
    getSpmDPos: function(el) {
      var dom = el;
      if (!this.isViewDom(dom)) return "";
      if (spmDPosTagPattern.test(dom.tagName) || dom.hasAttribute(spmDPosMarkAttr) || (dom = this.getDPosDom(dom)), !dom) return "";
      var spmDPos = this.getAttr(dom, spmDPosMarkAttr),
        tagName = dom.tagName;
      if (("string" == typeof spmDPos || spmDPosTagPattern.test(tagName)) && !spmDPos) {
        var idx = 0,
          rollDom = dom;
        do this.isDom(rollDom) && tagName === rollDom.tagName && idx++, rollDom = rollDom.previousSibling; while (rollDom);
        spmDPos = idx
      }
      return "" + spmDPos
    },
    getDomParam: function(dom) {
      var paramStr = dom && dom.getAttribute ? dom.getAttribute("data-aspm-param") || "" : "",
        result = {};
      if (paramStr) {
        var paramSplitList = paramStr.split("^");
        if (paramStr.indexOf("=") === -1) result = paramSplitList;
        else
          for (var len = paramSplitList.length, paramItem = void 0, paramItemSplitList = void 0, i = 0; i < len; i++) paramItem = paramSplitList[i], paramItem && (paramItemSplitList = paramItem.split("="), result[paramItemSplitList[0]] = paramItemSplitList[1] || "")
      }
      return result
    },
    getMetaPageName: function() {
      for (var metaList = this.nodeListToArray(window.document.getElementsByTagName("meta")), metaSpmb = "", i = 0; i < metaList.length; i++) {
        var metaItem = metaList[i],
          name = this.getAttr(metaItem, "name"),
          content = this.getAttr(metaItem, "content");
        if (content && name && "pagename" === name) {
          metaSpmb = content;
          break
        }
      }
      return metaSpmb
    }
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    },
    _index = __webpack_require__(2),
    _format = __webpack_require__(5);
  exports["default"] = {
    addMexOption: function(_mexObj, _options) {
      var exObj = _mexObj || {},
        options = _options || {};
      if (!options.spmId || "mergeExpose" !== options.actionId) return exObj;
      var spmIdArr = options.spmId.split(".");
      if (3 === spmIdArr.length) {
        var spmId = options.spmId;
        exObj[spmId] || (exObj[spmId] = {}, exObj[spmId] = (0, _index.objectAssign)({}, options))
      }
      return exObj
    },
    addToExObj: function(_exObj, _options) {
      var exObj = _exObj || {},
        options = _options || {};
      if (!options.spmId || "mergeExpose" !== options.actionId) return null;
      var spmIdArr = options.spmId.split(".");
      if (3 === spmIdArr.length) {
        var spmId = options.spmId;
        exObj[spmId] || (exObj[spmId] = {});
        var rid = "";
        options.param4 && options.param4.rid ? (rid = options.param4.rid, delete options.param4.rid) : rid = "", exObj[spmId][rid] ? exObj[spmId][rid].push(options.param4) : (exObj[spmId][rid] = [], exObj[spmId][rid].push(options.param4))
      }
      return exObj
    },
    formatExObj: function(exObj, mexObj) {
      var tempArray = [],
        ignoreProps = ["fullURL", "mBizScenario", "mPageState", "mPageName", "version"];
      if ("object" === ("undefined" == typeof exObj ? "undefined" : _typeof(exObj)))
        for (var objSPM in exObj)
          if (exObj.hasOwnProperty(objSPM)) {
            var tempObj = {};
            mexObj ? tempObj = (0, _index.objectAssign)(tempObj, mexObj[objSPM]) : (tempObj.spmId = objSPM, tempObj.actionId = "mergeExpose");
            var ridArray = [];
            if (exObj[objSPM].options) tempObj.param4 = (0, _format.objToStr)(exObj[objSPM].options.param4);
            else {
              for (var objRID in exObj[objSPM])
                if (exObj[objSPM].hasOwnProperty(objRID)) {
                  for (var ridItemArray = [], ridItem = exObj[objSPM][objRID], i = 0; i < ridItem.length; i++) {
                    var itemArray = [],
                      item = ridItem[i];
                    for (var prop in item) item.hasOwnProperty(prop) && ignoreProps.indexOf(prop) === -1 && itemArray.push(prop + "|" + item[prop]);
                    ridItemArray.push(itemArray.join(";"))
                  }
                  ridArray.push("rid|" + objRID + ":" + ridItemArray.join("&"))
                } tempObj.param4 = "exposed=" + ridArray.join("__")
            }
            tempArray.push(tempObj)
          } return tempArray
    }
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }

  function _defineProperty(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : obj[key] = value, obj
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
      }
      return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
      }
    }(),
    _cookies = __webpack_require__(22),
    _cookies2 = _interopRequireDefault(_cookies),
    _index = __webpack_require__(2),
    TemporaryStorage = function() {
      function TemporaryStorage() {
        _classCallCheck(this, TemporaryStorage)
      }
      return _createClass(TemporaryStorage, [{
        key: "set",
        value: function() {
          var args = [].slice.call(arguments);
          args.length >= 2 ? this._set(_defineProperty({}, args[0], args[1]), args[2] || {}) : this._set(args)
        }
      }, {
        key: "get",
        value: function(key) {
          var opt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            destroyAfterRead = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            keyWithPrefix = _index.cookiesPrefix + "_" + key,
            res = _cookies2["default"].get(keyWithPrefix, opt);
          return destroyAfterRead && _cookies2["default"].remove(keyWithPrefix), res
        }
      }, {
        key: "_set",
        value: function(obj) {
          var opt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (obj && 0 !== Object.keys(obj).length)
            for (var key in obj)
              if (obj.hasOwnProperty(key)) {
                var keyWithPrefix = _index.cookiesPrefix + "_" + key;
                _cookies2["default"].set(keyWithPrefix, obj[key], opt)
              }
        }
      }]), TemporaryStorage
    }();
  exports["default"] = new TemporaryStorage, module.exports = exports["default"]
}, function(module, exports) {
  "use strict";

  function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = 16 * Math.random() | 0,
        v = "x" === c ? r : 3 & r | 8;
      return v.toString(16)
    })
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), exports["default"] = uuid, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    _checkApp2 = __webpack_require__(6),
    _checkApp3 = _interopRequireDefault(_checkApp2),
    win = window;
  exports["default"] = {
    checkApp: function(ua) {
      return (0, _checkApp3["default"])(ua)
    },
    disableBizLog: function() {
      win.BizLog && "function" == typeof win.BizLog.call && (win.BizLog.call("config", {
        disabled: !0
      }), "function" == typeof document.addEventListener && document.addEventListener("AlipayJSBridgeReady", function() {
        win.BizLog.call("config", {
          disabled: !0
        })
      }, !1))
    },
    runBizlogLoader: function(Tracert) {
      if (win.BizLog) {
        var _readyToRun = win.BizLog._readyToRun,
          BizLog = win.BizLog || {};
        if (BizLog.call = function() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            return Tracert.call.apply(Tracert, args)
          }, _readyToRun && _readyToRun.length)
          for (var i = 0; i < _readyToRun.length; i++) {
            var fn = _readyToRun[i];
            try {
              fn()
            } catch (e) {
              console.warn(e)
            }
          }
        win.BizLog = BizLog
      }
    },
    initTracert: function(tracert) {
      if (win.Tracert && win.Tracert._isInit) {
        var _readyToRun = win.Tracert._readyToRun;
        if (win.Tracert.call = function() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
            return tracert.call.apply(tracert, args)
          }, _readyToRun && _readyToRun.length)
          for (var i = 0; i < _readyToRun.length; i++) {
            var fn = _readyToRun[i];
            try {
              fn()
            } catch (e) {
              console.warn(e)
            }
          }
      }
      var lanInfo = _tracertUtil2["default"].getValue("lanInfo") || _tracertUtil2["default"].getValue("laninfo");
      lanInfo && tracert.set({
        mdata: {
          lanInfo: lanInfo
        }
      }), tracert.set(window._to || {}), tracert.set(window._tracert_loader_cfg || {}), tracert.set({
        parse: _tracertUtil2["default"].strToObj,
        stringify: _tracertUtil2["default"].objToStr
      }), tracert.run(), win.Tracert = tracert
    }
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
  ! function(factory) {
    var registeredInModuleLoader = !1;
    if (__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), registeredInModuleLoader = !0, module.exports = factory(), registeredInModuleLoader = !0, !registeredInModuleLoader) {
      var OldCookies = window.Cookies,
        api = window.Cookies = factory();
      api.noConflict = function() {
        return window.Cookies = OldCookies, api
      }
    }
  }(function() {
    function extend() {
      for (var i = 0, result = {}; i < arguments.length; i++) {
        var attributes = arguments[i];
        for (var key in attributes) result[key] = attributes[key]
      }
      return result
    }

    function init(converter) {
      function api(key, value, attributes) {
        var result;
        if ("undefined" != typeof document) {
          if (arguments.length > 1) {
            if (attributes = extend({
                path: "/"
              }, api.defaults, attributes), "number" == typeof attributes.expires) {
              var expires = new Date;
              expires.setMilliseconds(expires.getMilliseconds() + 864e5 * attributes.expires), attributes.expires = expires
            }
            attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
            try {
              result = JSON.stringify(value), /^[\{\[]/.test(result) && (value = result)
            } catch (e) {}
            value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), key = encodeURIComponent(String(key)), key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), key = key.replace(/[\(\)]/g, escape);
            var stringifiedAttributes = "";
            for (var attributeName in attributes) attributes[attributeName] && (stringifiedAttributes += "; " + attributeName, attributes[attributeName] !== !0 && (stringifiedAttributes += "=" + attributes[attributeName]));
            return document.cookie = key + "=" + value + stringifiedAttributes
          }
          key || (result = {});
          for (var cookies = document.cookie ? document.cookie.split("; ") : [], rdecode = /(%[0-9A-Z]{2})+/g, i = 0; i < cookies.length; i++) {
            var parts = cookies[i].split("="),
              cookie = parts.slice(1).join("=");
            this.json || '"' !== cookie.charAt(0) || (cookie = cookie.slice(1, -1));
            try {
              var name = parts[0].replace(rdecode, decodeURIComponent);
              if (cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent), this.json) try {
                cookie = JSON.parse(cookie)
              } catch (e) {}
              if (key === name) {
                result = cookie;
                break
              }
              key || (result[name] = cookie)
            } catch (e) {}
          }
          return result
        }
      }
      return api.set = api, api.get = function(key) {
        return api.call(api, key)
      }, api.getJSON = function() {
        return api.apply({
          json: !0
        }, [].slice.call(arguments))
      }, api.defaults = {}, api.remove = function(key, attributes) {
        api(key, "", extend(attributes, {
          expires: -1
        }))
      }, api.withConverter = init, api
    }
    return init(function() {})
  })
}, function(module, exports, __webpack_require__) {
  var animaDetect = __webpack_require__(30);
  module.exports = animaDetect
}, function(module, exports, __webpack_require__) {
  function toString(object) {
    return Object.prototype.toString.call(object)
  }

  function isObject(object) {
    return "[object Object]" === toString(object)
  }

  function isFunction(object) {
    return "[object Function]" === toString(object)
  }

  function each(object, factory, argument) {
    for (var i = 0, l = object.length; i < l && factory.call(object, object[i], i) !== !1; i++);
  }

  function detector(name, expression, ua) {
    var expr = isFunction(expression) ? expression.call(null, ua) : expression;
    if (!expr) return null;
    var info = {
      name: name,
      version: NA_VERSION,
      codename: ""
    };
    "android" === name && (info.type = ua.indexOf("Mobi") > -1 ? "phone" : "pad"), "ios" === name && (info.type = ua.indexOf("iPhone") > -1 ? "phone" : "pad");
    var t = toString(expr);
    if (expr === !0) return info;
    if ("[object String]" === t) {
      if (ua.indexOf(expr) !== -1) return info
    } else {
      if (isObject(expr)) return expr.hasOwnProperty("version") && (info.version = expr.version), info;
      if (expr.exec) {
        var m = expr.exec(ua);
        if (m) return m.length >= 2 && m[1] ? info.version = m[1].replace(/_/g, ".") : info.version = NA_VERSION, info
      }
    }
  }

  function init(ua, patterns, factory, detect) {
    var detected = na;
    each(patterns, function(pattern) {
      var d = detector(pattern[0], pattern[1], ua);
      if (d) return detected = d, !1
    }), factory.call(detect, detected.name, detected.version)
  }
  var detect = {},
    NA_VERSION = "-1",
    userAgent = navigator.userAgent || "",
    appVersion = navigator.appVersion || "",
    vendor = navigator.vendor || "",
    re_msie = (window.external, /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/),
    CheckApp = __webpack_require__(6),
    OS = [
      ["wp", function(ua) {
        return ua.indexOf("windows phone ") !== -1 ? /\bwindows phone (?:os )?([0-9.]+)/ : ua.indexOf("xblwp") !== -1 ? /\bxblwp([0-9.]+)/ : ua.indexOf("zunewp") !== -1 ? /\bzunewp([0-9.]+)/ : "windows phone"
      }],
      ["ios", function(ua) {
        return /\bcpu(?: iphone)? os /.test(ua) ? /\bcpu(?: iphone)? os ([0-9._]+)/ : ua.indexOf("iph os ") !== -1 ? /\biph os ([0-9_]+)/ : /\bios\b/
      }],
      ["yunos", /\baliyunos ([0-9.]+)/],
      ["android", /\bandroid[\/\- ]?([0-9.x]+)?/],
      ["linux", "linux"]
    ],
    BROWSER = [
      ["qq", /\bm?qqbrowser\/([0-9.]+)/],
      ["ie", re_msie],
      ["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/],
      ["uc", function(ua) {
        return ua.indexOf("ucbrowser/") >= 0 ? /\bucbrowser\/([0-9.]+)/ : /\buc\/[0-9]/.test(ua) ? /\buc\/([0-9.]+)/ : ua.indexOf("ucweb") >= 0 ? /\bucweb[\/]?([0-9.]+)?/ : /\b(?:ucbrowser|uc)\b/
      }],
      ["android", function(ua) {
        if (ua.indexOf("android") !== -1) return /\bversion\/([0-9.]+(?: beta)?)/
      }],
      ["safari", /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//],
      ["webview", /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/]
    ],
    na = {
      name: "na",
      version: NA_VERSION
    },
    parse = function(ua) {
      ua = (ua || "").toLowerCase();
      var d = {};
      return init(ua, OS, function(name, version) {
        var v = parseFloat(version);
        d.os = {
          name: name,
          version: v,
          fullVersion: version
        }, d.os[name] = v
      }, d), init(ua, BROWSER, function(name, version) {
        var v = parseFloat(version);
        d.browser = {
          name: name,
          version: v,
          fullVersion: version
        }, d.browser[name] = v
      }, d), d
    };
  detect = parse(userAgent + " " + appVersion + " " + vendor), detect.parse = parse, detect._checkApp = CheckApp, detect.app = detect._checkApp(userAgent), module.exports = detect
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    lx = function(tracert, callback) {
      var Tracert = tracert;
      return _tracertUtil2["default"].load(function() {
        var alitripBridge = window.alitripBridge;
        alitripBridge && alitripBridge.call && "function" == typeof alitripBridge.call ? alitripBridge.call("user_info", {
          successCallback: function(resJson) {
            return resJson && resJson.userId ? (Tracert.set({
              role_id: resJson.userId
            }), void callback()) : void callback()
          },
          failCallback: function(resJson) {
            console.log("Tracert \u672a\u83b7\u53d6\u5230\u652f\u4ed8\u5b9duid", resJson), callback()
          }
        }) : callback()
      }), Tracert
    };
  window.tracertLx = lx, exports["default"] = lx, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    qn = function(tracert, callback) {
      var Tracert = tracert;
      return _tracertUtil2["default"].load(function() {
        var WindVane = window.WindVane;
        WindVane && WindVane.call && "function" == typeof WindVane.call ? window.WindVane.call("QianNiu", "getUserInfo", {}, function(e) {
          return e && e.user_id ? (Tracert.set({
            role_id: e.user_id
          }), void callback()) : (console.log("Tracert \u672a\u83b7\u53d6\u5230\u5343\u725buid", e), void callback())
        }, function(e) {
          console.log("Tracert \u672a\u83b7\u53d6\u5230\u5343\u725buid", e), callback()
        }) : callback()
      }), Tracert
    };
  window.tracertQn = qn, exports["default"] = qn, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    tb = function(tracert, callback) {
      var Tracert = tracert;
      return _tracertUtil2["default"].load(function() {
        var lib = window.lib;
        lib && lib.mtop && "function" == typeof lib.mtop.request ? lib.mtop.request({
          api: "mtop.taobao.wireless.alipay.getAlipayId",
          v: "1.0",
          data: {},
          ecode: 1
        }, function(resJson) {
          return resJson && resJson.data && resJson.data.alipayId ? (Tracert.set({
            role_id: resJson.data.alipayId
          }), void callback()) : void callback()
        }, function(resJson) {
          console.log("Tracert \u672a\u83b7\u53d6\u5230\u652f\u4ed8\u5b9duid", resJson), callback()
        }) : callback()
      }), Tracert
    };
  window.tracertTb = tb, exports["default"] = tb, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
      }
      return target
    },
    _context = __webpack_require__(35),
    _context2 = _interopRequireDefault(_context),
    wap = function(tracert, cb) {
      var Tracert = tracert;
      return Tracert.set(_extends({}, _context2["default"])), Tracert.call("init"), cb(), Tracert
    };
  window.tracertWap = wap, exports["default"] = wap, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    },
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
      }
      return target
    },
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    _helper = __webpack_require__(36),
    _helper2 = _interopRequireDefault(_helper),
    _animaDetect = __webpack_require__(29),
    _animaDetect2 = _interopRequireDefault(_animaDetect);
  exports["default"] = {
    server: "https://mdap.alipay.com/loggw/dwcookieLogGet.do",
    seedIdCfg: {
      pageSeedId: "pageMonitor",
      clkSeedId: "clicked",
      calcSeedId: "calc",
      expoSeedId: "exposure",
      syslogSeedId: "syslog"
    },
    refUrl: document.referrer || "-",
    clientIdKey: "tracert-client-key",
    init: function() {
      _helper2["default"]._initSessionId(this), _helper2["default"]._initClientId(this), _helper2["default"]._initPageId(this), _helper2["default"]._initChInfo(this), _helper2["default"]._initRefs(this)
    },
    get: function(key) {
      if ("pageId" === key && !this[key]) {
        if (window._tracert_loader_cfg = window._tracert_loader_cfg || {}, window._tracert_loader_cfg.pageId) return this.set({
          pageId: window._tracert_loader_cfg.pageId
        }), window._tracert_loader_cfg.pageId;
        var metaInfo = _tracertUtil2["default"].getMetaSpm();
        metaInfo.spmBPos = _tracertUtil2["default"].getSpmBPos();
        var spma = metaInfo.spmAPos,
          spmb = metaInfo.spmBPos,
          pageId = spma && spmb ? spma + "." + spmb + "_" + _helper2["default"]._guid() + "_" + Date.now() : "-_" + _helper2["default"]._guid() + "_" + Date.now();
        return window._tracert_loader_cfg.pageId = pageId, this.set({
          pageId: pageId
        }), pageId
      }
      return this[key]
    },
    _logPv: function() {
      var opt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        cityid = _tracertUtil2["default"].getValue("cityId"),
        pageSpm = this.spmAPos && this.spmBPos ? [this.spmAPos, this.spmBPos].join(".") : "",
        params = {
          seedId: this.seedIdCfg.pageSeedId,
          actionId: this.seedIdCfg.pageSeedId,
          spmId: pageSpm,
          param1: this.url,
          param2: "",
          param3: "",
          param4: _extends({
            cityid: cityid
          }, opt)
        };
      this.call("remoteLog", params)
    },
    sendExpose: function() {
      var self = this,
        itvObj = setInterval(function() {
          if (self.cacheExObjArr.length - 1 >= self._wap_exObjIndex) {
            var data = self._packFinalData(self.cacheExObjArr[self._wap_exObjIndex]);
            self._send(data), self._wap_exObjIndex++
          } else clearTimeout(itvObj)
        }, this._wap_intervalEx)
    },
    sendMergeExpose: function() {
      var self = this;
      this._expoMergeItvObj || (this._expoMergeItvObj = setInterval(function() {
        if (self.fmtedExObjArr.length - 1 >= self._wap_mgObjIndex) {
          var fmtedExObjArr = self.cacheMrExObjArr[self._wap_mgObjIndex];
          if (fmtedExObjArr && fmtedExObjArr.length && fmtedExObjArr.length - 1 >= self._wap_mgTdObjIndex) {
            var _data = self._packFinalData(fmtedExObjArr[self._wap_mgTdObjIndex]);
            self._send(_data), self._wap_mgTdObjIndex++
          } else fmtedExObjArr && fmtedExObjArr.length && (self._wap_mgTdObjIndex = 0, self.mgObjIndex++);
          var data = self._packFinalData(self.fmtedExObjArr[self._wap_mgObjIndex]);
          self._send(data), self._wap_mgObjIndex++
        } else clearTimeout(self._expoMergeItvObj), self._expoMergeItvObj = null
      }, this._wap_interval))
    },
    remoteLog: function(options) {
      var self = this,
        params = _helper2["default"]._formatParam(this, options);
      if ("mergeExpose" === params.actionId && params.spmId && 3 === params.spmId.split(".").length && params.param4) return this._wap_timer && clearTimeout(this._wap_timer), this.fmtedExOptions = _tracertUtil2["default"].addMexOption(this.fmtedExOptions, _tracertUtil2["default"].objectAssign({}, params)), this.fmtedExObj = _tracertUtil2["default"].addToExObj(this.fmtedExObj, _tracertUtil2["default"].objectAssign({}, params)), this.fmtedExObjArr = _tracertUtil2["default"].formatExObj(this.fmtedExObj, this.fmtedExOptions), void(this._wap_timer = setTimeout(function() {
        self.cacheMrExObjArr.push(self.fmtedExObjArr), self.fmtedExObj = {}, self.fmtedExObjArr = [], self.sendMergeExpose()
      }, this._wap_interval));
      if ("exposure" === params.actionId && params.spmId && 3 === params.spmId.split(".").length) return this._wap_timerEx && clearTimeout(this._wap_timerEx), this.cacheExObjArr.push(params), void(this._wap_timerEx = setTimeout(function() {
        self.sendExpose()
      }, this._wap_intervalEx));
      var data = this._packFinalData(params);
      this._send(data)
    },
    _packFinalData: function(obj) {
      if ("function" == typeof this._beforePackFinalData && this._beforePackFinalData(obj), "object" === _typeof(obj.param4)) {
        var p = obj.param4;
        for (var k in p)
          if (p.hasOwnProperty(k) && "string" == typeof p[k]) {
            var item = p[k].replace(/,/g, "%2C");
            p[k] = "fullURL" === k && item.length > 300 ? item.slice(0, 300) : item
          }
      }
      "clicked" === obj.actionId && this.set({
        lastClkSpm: obj.spmId
      });
      for (var refspm = this.refSpm || this.referSPM || "", data = ["DW-COOKIE", this.sessionId || "", this.role_id || this.roleId || "", obj.actionId || "", obj.spmId || obj.seedId || "", refspm || "", this.url && this.url.length > 300 ? this.url.slice(0, 300) : this.url || "", this.ref || "" + refspm, "object" === _typeof(obj.param4) ? _tracertUtil2["default"].objToStr(obj.param4) : obj.param4, this.chInfo || "", this.platformType || "", this.pageId || "", navigator.userAgent ? navigator.userAgent.replace(/,/g, "%2C") : "", "na" === _animaDetect2["default"].os.name ? "PC" : "H5", _animaDetect2["default"].app.name + "/" + _animaDetect2["default"].app.version + "|" + _animaDetect2["default"].browser.name + "/" + _animaDetect2["default"].browser.fullVersion + "|" + _animaDetect2["default"].os.name + "/" + _animaDetect2["default"].os.fullVersion, this.srcSpm || "", this.referPageId || "", this.bizType || "", "", window.innerWidth || "", window.innerHeight || "", window.devicePixelRatio || "", "object" === _typeof(this.sysInfo) ? _tracertUtil2["default"].objToStr(this.sysInfo) : "", this.darwinExpId || ""], i = 0; i < data.length; i++) "string" == typeof data[i] && (data[i] = data[i].replace(/,/g, "%2C"));
      return data
    },
    _send: function(data) {
      var _encode = window.encodeURIComponent;
      if (this.debug && console.log(data), !this.server) return void console.warn("\u8bf7\u914d\u7f6eTracert\u670d\u52a1\u63a5\u6536\u5730\u5740");
      var image = new Image;
      image.src = this.server + "?data=" + _encode(data.join()) + "&time=" + (new Date).getTime()
    },
    send: function() {
      var event = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "clicked",
        options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        spmId = arguments[2];
      this._runBeforeFns("send", options);
      var data = this._packFinalData({
        spmId: spmId || this.spmAPos + "." + this.spmBPos,
        actionId: event,
        param4: options
      });
      this._send(data)
    }
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
      }
      return target
    },
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    _nameStorage = __webpack_require__(37),
    _nameStorage2 = _interopRequireDefault(_nameStorage),
    REF_PREFIX = "TRACERT_REF_";
  exports["default"] = {
    _guid: function() {
      return _tracertUtil2["default"].uuid()
    },
    _initSessionId: function(tracert) {
      var sessionStorage = window.sessionStorage,
        key = tracert.sessionIdKey;
      sessionStorage && (sessionStorage[key] || (sessionStorage[key] = this._guid() + "_" + Date.now()), tracert.set({
        sessionId: sessionStorage[key]
      }))
    },
    _initClientId: function(tracert) {
      var localStorage = window.localStorage,
        key = tracert.sessionIdKey;
      localStorage && (localStorage[key] || (localStorage[key] = this._guid() + "_" + Date.now()), tracert.set({
        clientId: localStorage[key]
      }))
    },
    _initPageId: function(tracert) {
      if (!tracert.get("pageId")) {
        var pageId = tracert.spmAPos + "." + tracert.spmBPos + "_" + this._guid() + "_" + Date.now();
        tracert.set({
          pageId: pageId
        })
      }
    },
    _initChInfo: function(tracert) {
      if (!tracert.chInfo) {
        var chInfo = _tracertUtil2["default"].getValue("chInfo") || _tracertUtil2["default"].getValue("chinfo");
        chInfo && tracert.set({
          chInfo: chInfo
        })
      }
    },
    _initFromUrlOrStorage: function(tracert, keys) {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i],
          value = _tracertUtil2["default"].getValue(key) || _nameStorage2["default"].getItem("" + REF_PREFIX + key);
        if (value) {
          var obj = {};
          obj[key] = value, tracert.set(obj)
        }
      }
    },
    _initRefs: function(tracert) {
      var keys = ["srcSpm", "referPageId", "dtLogMonitor", "referSPM"];
      this._initFromUrlOrStorage(tracert, keys);
      var srcSpm = tracert.get("srcSpm"),
        referPageId = tracert.get("referPageId");
      srcSpm && referPageId && tracert.set({
        ref: srcSpm + "|" + referPageId
      }), tracert.ignoreNameStorage || (_nameStorage2["default"].setItem(REF_PREFIX + "referPageId", tracert.get("pageId")), _nameStorage2["default"].setItem(REF_PREFIX + "dtLogMonitor", tracert.get("dtLogMonitor")), window.onunload = function() {
        var pageSpm = tracert.spmAPos && tracert.spmBPos ? [tracert.spmAPos, tracert.spmBPos].join(".") : "";
        pageSpm && _nameStorage2["default"].setItem(REF_PREFIX + "referSPM", pageSpm), srcSpm = tracert.get("lastClkSpm"), srcSpm && _nameStorage2["default"].setItem(REF_PREFIX + "srcSpm", srcSpm)
      })
    },
    _formatParam: function(tracert, _param) {
      var param = _param || {},
        spmAPos = tracert.spmAPos,
        spmBPos = tracert.spmBPos,
        spmId = param.spmId || "",
        spmAPosrr = spmId.split("."),
        arrLen = spmAPosrr.length,
        extraParam = {
          version: tracert.version,
          mBizScenario: tracert.bizScenario,
          mPageState: tracert.state,
          role_id: tracert.roleId || tracert.role_id,
          fullURL: tracert.fullURL || location.href,
          ref: tracert.refUrl,
          clientID: tracert.clientId
        };
      if (tracert.chInfo && (extraParam.chInfo = tracert.chInfo), tracert.dtLogMonitor && (extraParam.dtLogMonitor = tracert.dtLogMonitor), spmAPos && spmBPos) {
        if (_param.seedId !== tracert.seedIdCfg.pageSeedId) switch (arrLen) {
          case 1:
            if ("" === spmId) {
              delete param.spmId;
              break
            }
            param.spmId = [spmAPos, spmBPos, spmId].join(".");
            break;
          case 2:
            param.spmId = [spmAPos, spmBPos, spmId].join(".");
            break;
          case 3:
            break;
          case 4:
            break;
          default:
            param.param2 = spmId, delete param.spmId
        }
      } else delete param.spmId;
      return !param.param2 && param.spmId && (param.param2 = param.spmId), param.param4 ? _tracertUtil2["default"].objectAssign(param.param4, extraParam) : param.param4 = extraParam, param.param4 = _extends({}, tracert.mdata, param.param4), param
    }
  }, module.exports = exports["default"]
}, function(module, exports) {
  function save() {
    var value, pairs = [],
      empty = !0;
    for (var key in STORAGE) STORAGE.hasOwnProperty(key) && (empty = !1, value = STORAGE[key] || "", pairs.push(encode(key) + EQ + encode(value)));
    win.name = empty ? ORIGIN_NAME : SCHEME + encode(ORIGIN_NAME) + Q + pairs.join(AND)
  }

  function addEventListener(element, eventName, handler) {
    element && (element.addEventListener ? element.addEventListener(eventName, handler, !1) : element.attachEvent && element.attachEvent("on" + eventName, function(evt) {
      handler.call(element, evt)
    }))
  }
  var ORIGIN_NAME, win = window,
    SCHEME = "nameStorage:",
    RE_PAIR = /^([^=]+)(?:=(.*))?$/,
    Q = "?",
    EQ = "=",
    AND = "&",
    encode = encodeURIComponent,
    decode = decodeURIComponent,
    STORAGE = {},
    nameStorage = {};
  ! function(name) {
    if (name && 0 === name.indexOf(SCHEME)) {
      var match = name.split(/[:?]/);
      match.shift(), ORIGIN_NAME = decode(match.shift()) || "";
      for (var pair, key, value, params = match.join(""), pairs = params.split(AND), i = 0, l = pairs.length; i < l; i++) pair = pairs[i].match(RE_PAIR), pair && pair[1] && (key = decode(pair[1]), value = decode(pair[2]) || "", STORAGE[key] = value)
    } else ORIGIN_NAME = name || ""
  }(win.name), nameStorage.setItem = function(key, value) {
    key && "undefined" != typeof value && (STORAGE[key] = String(value), save())
  }, nameStorage.getItem = function(key) {
    return STORAGE.hasOwnProperty(key) ? STORAGE[key] : null
  }, nameStorage.removeItem = function(key) {
    STORAGE.hasOwnProperty(key) && (STORAGE[key] = null, delete STORAGE[key], save())
  }, nameStorage.clear = function() {
    STORAGE = {}, save()
  }, nameStorage.valueOf = function() {
    return STORAGE
  }, nameStorage.toString = function() {
    var name = win.name;
    return 0 === name.indexOf(SCHEME) ? name : SCHEME + name
  }, addEventListener(win, "beforeunload", function() {
    save()
  }), win.nameStorage = nameStorage, module.exports = nameStorage
}]);