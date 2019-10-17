! function() {
  "use strict";
  const e = window.encodeURIComponent,
    t = "https://sb.scorecardresearch.com/b?",
    n = "ns_";

  function i(e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e
  }

  function a() {
    return window.performance && window.performance.timing && "function" == typeof window.performance.now ? Math.round(window.performance.now()) + window.performance.timing.navigationStart : (new Date).getTime()
  }
  class r {
    constructor(e) {
      this._parent = e, this._config = e.getConfig(), this._complete = !1, this.data = {}
    }
    isComplete() {
      return this._complete
    }
    markComplete() {
      this._complete = !0
    }
    done() {
      this._complete = !0, this.isAsync() && this._parent.pluginDone()
    }
    resetState() {
      this._complete = !1, this.data = {}
    }
    getData() {
      return this.data
    }
    collectData() {}
    isAsync() {
      return !1
    }
  }
  class o extends r {
    constructor(e) {
      super(e)
    }
    collectData() {
      this._readLinkedinData()
    }
    _readLinkedinData() {
      this.data.timeSource = this._config["beacon-source"], this.data.treeId = this._getTreeId(), this._config["commit-id"] && (this.data.sessionID = this._config["commit-id"]), this.data.isFromServiceWorker = this._getFromServiceWorker(), this.done()
    }
    _getTreeId() {
      let e = document.querySelector('meta[name="treeID"]');
      return e && e.getAttribute("content")
    }
    _getFromServiceWorker() {
      let e = document.querySelector('meta[name="fromServiceWorker"]');
      return e && "true" === e.getAttribute("content")
    }
  }
  class s extends r {
    constructor(e) {
      super(e), this._navigationTimingRead = !1, this._navigationTimingFields = ["loadEventEnd", "loadEventStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "responseEnd", "responseStart", "requestStart", "secureConnectionStart", "connectEnd", "connectStart", "domainLookupEnd", "domainLookupStart", "fetchStart", "redirectEnd", "redirectStart", "unloadEventEnd", "unloadEventStart", "navigationStart"]
    }
    collectData() {
      this._readNavigationTiming(), this.done()
    }
    _readNavigationTiming() {
      var e, t, n, i;
      if (!this._navigationTimingRead) {
        if (window.performance && window.performance.timing && window.performance.navigation) {
          for (this.data.navigationTimingApi = !0, e = window.performance.timing, t = 0; t < this._navigationTimingFields.length; t++) e[n = this._navigationTimingFields[t]] && (this.data[n] = e[n]);
          this.data.redirectCount = window.performance.navigation.redirectCount, this.data.navigationType = window.performance.navigation.type
        } else this.data.navigationTimingApi = !1;
        if (window.performance && window.performance.getEntriesByType && void 0 !== (i = window.performance.getEntriesByType("navigation")[0]) && (this.data.workerStart = i.workerStart, "number" == typeof i.fetchStart && "number" == typeof i.responseEnd && "number" == typeof i.decodedBodySize && "number" == typeof i.encodedBodySize && "number" == typeof i.transferSize)) {
          let e = {};
          e.htmlFetchStart = i.fetchStart, e.htmlResponseEnd = i.responseEnd, e.htmlDecodedBodySize = i.decodedBodySize, e.htmlEncodedBodySize = i.encodedBodySize, e.htmlTransferSize = i.transferSize, this.data.htmlMetrics = e
        }
        this._navigationTimingRead = !0
      }
    }
  }
  class c extends r {
    constructor(e) {
      super(e), this._imgEntries = [], this._resourceTimingFields = {
        name: !0,
        entryType: !1,
        duration: !0,
        initiatorType: !0,
        fetchStart: !0,
        responseEnd: !0,
        startTime: !0,
        connectEnd: !0,
        connectStart: !0,
        domainLookupEnd: !0,
        domainLookupStart: !0,
        redirectEnd: !0,
        redirectStart: !0,
        requestStart: !0,
        responseStart: !0,
        secureConnectionStart: !0,
        nextHopProtocol: !0,
        transferSize: !0,
        decodedBodySize: !0,
        encodedBodySize: !0,
        workerStart: !0
      }, this._requestSamplingRandVal = Math.random(), this._setupResourceTiming()
    }
    resetState() {
      super.resetState(), this._requestSamplingRandVal = Math.random()
    }
    collectData() {
      this._readResourceTiming(), this.done()
    }
    addTreeId(e, t) {
      var n;
      if (this._treeIdUrlParser && this._rsTimingUrlParser && (this._treeIdUrlParser.href = t, this._readResourceTiming(), this.data.resourceTimingEntries))
        for (n = this.data.resourceTimingEntries.length - 1; n >= 0; n--)
          if (this._rsTimingUrlParser.href = this.data.resourceTimingEntries[n].name, this._treeIdUrlParser.protocol === this._rsTimingUrlParser.protocol && this._treeIdUrlParser.host === this._rsTimingUrlParser.host && this._treeIdUrlParser.pathname === this._rsTimingUrlParser.pathname && (this._treeIdUrlParser.search === this._rsTimingUrlParser.search || "" === this._treeIdUrlParser.search)) {
            this.data.resourceTimingEntries[n].resourceTreeId = e;
            break
          }
    }
    _isResourceTimingSupported() {
      return window.performance && "function" == typeof window.performance.getEntriesByType
    }
    _setupResourceTiming() {
      var e = {
        default: .001,
        xmlhttprequest: 1
      };
      if (null !== this._config["rs-sample-rate"] && "object" == typeof this._config["rs-sample-rate"])
        for (var t in this._config["rs-sample-rate"]) this._config["rs-sample-rate"].hasOwnProperty(t) && (e[t] = this._config["rs-sample-rate"][t]);
      this._config["rs-sample-rate"] = e, this._isResourceTimingSupported() && (this._readResourceTiming(), this._setBufferSize(100), null === window.performance.onresourcetimingbufferfull ? window.performance.onresourcetimingbufferfull = this._readResourceTiming.bind(this) : null === window.performance.onwebkitresourcetimingbufferfull && (window.performance.onwebkitresourcetimingbufferfull = this._readResourceTiming.bind(this))), this._treeIdUrlParser = document.createElement("a"), this._rsTimingUrlParser = document.createElement("a")
    }
    _clearBuffer() {
      this._isResourceTimingSupported() && this._config["enable-rs-timing"] && (window.performance.clearResourceTimings && "function" == typeof window.performance.clearResourceTimings ? window.performance.clearResourceTimings() : window.performance.webkitClearResourceTimings && "function" == typeof window.performance.webkitClearResourceTimings && window.performance.webkitClearResourceTimings())
    }
    _setBufferSize(e) {
      this._isResourceTimingSupported() && this._config["enable-rs-timing"] && (window.performance.setResourceTimingBufferSize && "function" == typeof window.performance.setResourceTimingBufferSize ? window.performance.setResourceTimingBufferSize(e) : window.performance.webkitSetResourceTimingBufferSize && "function" == typeof window.performance.webkitSetResourceTimingBufferSize && window.performance.webkitSetResourceTimingBufferSize(e))
    }
    _readResourceTiming() {
      var e, t, n, i, a, r, o = !1,
        s = this.data && this.data.resourceTimingEntries || [];
      if (this._isResourceTimingSupported() && this._config["enable-rs-timing"]) {
        for (e = window.performance.getEntriesByType("resource"), t = 0; t < e.length; t++) {
          for (n in i = {}, e[t]) !0 === this._resourceTimingFields[n] && (i[n] = e[t][n]);
          "img" === i.initiatorType && this._imgEntries.push(i), null === this._parent._config.xcndUrl && "script" === i.initiatorType && (this._parent._config.xcndUrl = i.name), a = Math.random(), r = this._config["rs-sample-rate"][e[t].initiatorType] || this._config["rs-sample-rate"].default, ((o = this._requestSamplingRandVal <= this._config["request-sampling-rate"]) || a <= r) && (s.push(i), i.sampleMode = "", o && (i.sampleMode = "requestSampled,"), a <= r && (i.sampleMode += "rand" + r.toString()))
        }
        this._clearBuffer(), s.length > 0 && (this.data.resourceTimingEntries = s)
      }
    }
  }
  class d extends r {
    constructor(e) {
      super(e)
    }
    collectData() {
      this._readUserTimingEntries(), this.done()
    }
    _clearUserTimings() {
      window.performance && (window.performance.clearMarks && window.performance.clearMarks(), window.performance.clearMeasures && window.performance.clearMeasures())
    }
    _getUserTimingEntries(e, t) {
      var n, i, a, r = [];
      for (i = 0; i < e.length; i++)(n = e[i]) && ((a = {}).entryType = t, a.name = n.name, a.startTime = n.startTime, a.duration = n.duration, r.push(a));
      return r
    }
    _readUserTimingEntries() {
      var e, t = [];
      window.performance && "function" == typeof window.performance.getEntriesByType && (this._config["user-timing-measure-enabled"] && (e = window.performance.getEntriesByType("measure"), t = t.concat(this._getUserTimingEntries(e, "MEASURE"))), this._config["user-timing-mark-enabled"] && (e = window.performance.getEntriesByType("mark"), t = t.concat(this._getUserTimingEntries(e, "MARK")))), this.data.userTimingEntries = t, this._clearUserTimings()
    }
  }
  class l extends r {
    constructor(e) {
      super(e), this._started = !1
    }
    resetState() {}
    isAsync() {
      return !0
    }
    collectData() {
      this._started || (this._started = !0, this._getCDNData())
    }
    _getCDNData() {
      let e = window.location.protocol,
        t = this._parent._config.xcndUrl,
        n = new XMLHttpRequest,
        i = this,
        a = "",
        r = "",
        o = "";
      this.data.usedCDN = {
        static_domain: a,
        ip_version: o,
        http_version: o
      }, 0 === e.lastIndexOf("http", 0) && null !== t ? (n.onreadystatechange = function() {
        var e = this.readyState ? this : n;
        if (4 === e.readyState) {
          if (200 === e.status) {
            try {
              a = e.getResponseHeader("X-CDN"), r = e.getResponseHeader("X-CDN-CLIENT-IP-VERSION"), o = e.getResponseHeader("X-CDN-Proto")
            } catch (e) {
              console.log("Canot read the X-CDN header possibly because of CORS restrictions")
            }
            i.data.usedCDN.static_domain = null === a ? "" : a, i.data.usedCDN.ip_version = null === r ? "" : r.toLowerCase(), i.data.usedCDN.http_version = null === o ? "" : o.toLowerCase()
          } else console.log("CDN request did not return a HTTP 200. Status: " + e.status);
          i.done()
        }
      }, n.open("HEAD", t, !0), n.send()) : this.done()
    }
  }
  class h extends r {
    constructor(e) {
      super(e), this._started = !1
    }
    resetState() {}
    isAsync() {
      return !0
    }
    collectData() {
      this._started || (this._started = !0, this._getPoPData())
    }
    _getPoPData() {
      var e = window.location,
        t = e.protocol,
        n = t + "//" + e.host + "/fizzy/admin?" + (new Date).getTime(),
        i = new XMLHttpRequest,
        a = this;
      0 === t.lastIndexOf("http", 0) ? (i.onreadystatechange = function() {
        var e = this.readyState ? this : i;
        4 === e.readyState && (e.status >= 200 && e.status < 400 ? (a.data.pointOfPresenceId = e.getResponseHeader("X-Li-Pop"), a.data.rawXLiFabricHeader = e.getResponseHeader("X-Li-Fabric"), a.data.httpVersion = e.getResponseHeader("X-Li-proto")) : console.log("PoP request was not successful. Status: " + e.status), a.done())
      }, i.open("get", n, !0), i.send()) : this.done()
    }
  }
  class u extends r {
    constructor(e) {
      super(e), this.data.longTasks = [], this._longTaskFields = ["duration", "name", "startTime"], this._observer = new PerformanceObserver(e => {
        e.getEntries().forEach(e => {
          let t = {};
          for (let n = 0; n < this._longTaskFields.length; n++) {
            let i = this._longTaskFields[n];
            void 0 !== e[i] && (t[i] = e[i])
          }
          this.data.longTasks.push(t)
        })
      });
      try {
        this._observer.observe({
          entryTypes: ["longtask"]
        })
      } catch (e) {
        console.log("Longtask api is not supported")
      }
    }
    resetState() {
      this._complete = !1, this.data = {}, this.data.longTasks = []
    }
    collectData() {
      this.done()
    }
  }
  class g extends r {
    constructor(e) {
      super(e)
    }
    collectData() {
      this._readNetworkInformation(), this.done()
    }
    _readNetworkInformation() {
      if (navigator && navigator.connection) {
        let e = {},
          t = navigator.connection.downlinkMax;
        e.connectionType = void 0 === navigator.connection.type ? "UNKNOWN" : navigator.connection.type.toUpperCase(), e.effectiveType = this._formatEffectiveType(navigator.connection.effectiveType), e.roundTripTime = void 0 === navigator.connection.rtt ? -1 : navigator.connection.rtt, e.downlinkBandwidth = void 0 === navigator.connection.downlink ? -1 : navigator.connection.downlink, e.downlinkMaxBandwidth = void 0 === t ? -1 : t === 1 / 0 ? 0 : navigator.connection.downlinkMax, this.data.networkInformationMetrics = e
      }
    }
    _formatEffectiveType(e) {
      return "2g" === e ? "TWO_G" : "3g" === e ? "THREE_G" : "4g" === e ? "FOUR_G" : "SLOW_2G"
    }
  }
  class p {
    constructor(e) {
      this._resetState(!1), this._defaults = {
        enabled: !0,
        "beacon-url": "/li/track",
        "beacon-service": "tracking",
        "event-name": "RealUserMonitoringEvent",
        "topic-name": "RealUserMonitoringEvent",
        "app-id": "linkedin.rum.tracking",
        "is-single-page-app": !0,
        "cross-origin": !1,
        "beacon-timeout": 3e4,
        "request-sampling-rate": .01,
        "user-timing-mark-enabled": !1,
        "user-timing-measure-enabled": !0,
        "beacon-source": "apps",
        "page-key-prefix": "",
        "navigation-timing-only": !1,
        "pathname-depth": -1,
        "lazy-image-class-names": ["lazy-image"],
        "enable-cdn-tracking": !1,
        "enable-pop-tracking": !1,
        "async-plugins-timeout": 5e3
      }, this._config = i(this._defaults, e), this._config.enabled && (this._config.readyState || (this._config.readyState = document.readyState), this._config.xcndUrl = null, this._config["navigation-timing-only"] ? this._config["enable-rs-timing"] = this._config["enable-rs-timing"] || !1 : this._config["enable-rs-timing"] = !1 !== this._config["enable-rs-timing"], this._config.plugins = [new o(this), new s(this), new c(this), new d(this), new g(this)], this._config["enable-cdn-tracking"] && this._config.plugins.push(new l(this)), this._config["enable-pop-tracking"] && this._config.plugins.push(new h(this)), "function" == typeof PerformanceObserver && "function" == typeof PerformanceLongTaskTiming && this._config.plugins.push(new u(this)), this._isInitialLoad = !0, this._initialStartTime = void 0, this._renderCompleteCount = 0, this._isLazyRender = !1, this._allBeaconData = [], this._csrfToken = "", this._isInternalApp = !1, this._config["beacon-source"] && "internal-apps" === this._config["beacon-source"] && (this._isInternalApp = !0, "lite" !== this._config["beacon-service"] && "https://www.linkedin-ei.com/lite/rum-track" !== this._config["beacon-url"] && "/li/track" != this._config["beacon-url"] || (this._config["beacon-service"] = "tracking", this._config["beacon-url"] = "https://lca1-mobile-tracking-frontend-vip-1.corp.linkedin.com/li/track/")), this._onLoad = () => {
        setTimeout(() => {
          this._collectPluginData()
        }, 500)
      }, this._onUnload = () => {
        this._collectPluginData()
      }, this._config["navigation-timing-only"] ? "complete" === this._config.readyState ? this._onLoad() : window.addEventListener("load", this._onLoad) : window.addEventListener("unload", this._onUnload))
    }
    destroy() {
      this._config["navigation-timing-only"] ? window.removeEventListener("load", this._onLoad) : (this._collectPluginData(), window.removeEventListener("unload", this._onUnload))
    }
    setPageKey(e) {
      this._beaconData.pageKey = e
    }
    setCurrentUser(e) {
      this._isInternalApp && "string" == typeof e && (this._beaconData.sessionID = e)
    }
    appTransitionStart(e) {
      (e || this._renderCompleteCount > 0) && (this._collectPluginData(), this._beaconData.navigationStart = a(), this._isInitialLoad = !1)
    }
    appRenderComplete() {
      this._renderCompleteCount++, this._beaconData.renderCompleteTime = a(), this._timeOutVal || (this._timeOutVal = setTimeout(() => {
        this._collectPluginData()
      }, this._config["beacon-timeout"]))
    }
    addTreeId(e, t) {
      if (this._config.plugins && this._config.plugins.length > 2) {
        var n = this._config.plugins[2];
        n && n.addTreeId(e, t)
      }
    }
    appViewRenderStart(e, t) {
      this._viewTimings[e] = {
        renderName: t || e,
        viewName: t,
        viewId: e,
        renderStart: a()
      }
    }
    appViewRenderComplete(e, t) {
      this._viewTimings[e] && (this._viewTimings[e].renderEnd = a())
    }
    setDeepLinkTrackingId(e) {
      this._shouldSendBeacon = !1
    }
    setWindowHiddenState(e) {
      this._beaconData.isImpactedByHiddenWindow = e
    }
    setPageInstance(e) {
      this._beaconData.pageInstance = e
    }
    setIsLazyRender(e) {
      this._isLazyRender = e
    }
    getConfig() {
      return this._config
    }
    pluginDone() {
      for (var e, t = 0; t < this._config.plugins.length; t++)
        if ((e = this._config.plugins[t]).isAsync() && !e.isComplete()) return !1;
      setTimeout(() => {
        this._sendAllData()
      }, 500)
    }
    _resetState(e) {
      this._beaconData = {}, this._viewTimings = {}, this._scrollTime = void 0, this._shouldSendBeacon = !0, this._timeOutVal && (clearTimeout(this._timeOutVal), this._timeOutVal = void 0), e && this._config.plugins.map(e => {
        e.resetState()
      })
    }
    _readRenderTimingEntries() {
      if (Object.keys(this._viewTimings).length > 0)
        for (var e in this._beaconData.detailedRenderTimingEntries = [], this._viewTimings) this._viewTimings.hasOwnProperty(e) && this._beaconData.detailedRenderTimingEntries.push(this._viewTimings[e])
    }
    _collectPluginData() {
      var e = !0;
      this._config.enabled && (this._config.plugins.map(function(t) {
        t.collectData(), t.isComplete() || (e = !1)
      }), this._pushCurrentBeaconData(), e ? this._sendAllData() : setTimeout(() => {
        this._markAllAsyncPluginComplete()
      }, this._config["async-plugins-timeout"]), this._resetState(!0))
    }
    _markAllAsyncPluginComplete() {
      this._config.plugins.map(function(e) {
        e.isAsync() && e.markComplete()
      }), this._sendAllData()
    }
    _doesNotHaveLazyImageClass(e) {
      var t, n = !0,
        i = this._config["lazy-image-class-names"];
      if (e && e.className && i)
        for (t = i.length - 1; t >= 0; t--) e.className.indexOf(i[t]) > -1 && (n = !1);
      return n
    }
    _doesElementOverlapWithViewport(e) {
      var t, n = e.getBoundingClientRect();
      return !((t = {
        top: Math.max(n.top, 0),
        left: Math.max(n.left, 0),
        bottom: Math.min(n.bottom, window.innerHeight || doc.documentElement.clientHeight),
        right: Math.min(n.right, window.innerWidth || doc.documentElement.clientWidth)
      }).bottom <= t.top || t.right <= t.left)
    }
    _getImgResourceEntries() {
      var e, t, n = [],
        i = this._beaconData.resourceTimingEntries;
      if (i)
        for (e = i.length - 1; e >= 0; e--) "img" === (t = i[e]).initiatorType && n.push(t);
      return n
    }
    _cleanUpResourceTimingEntries() {
      var e;
      if (this._beaconData.resourceTimingEntries)
        for (e = this._beaconData.resourceTimingEntries.length - 1; e >= 0; e--) this._beaconData.resourceTimingEntries[e].name && (this._beaconData.resourceTimingEntries[e].name = this._beaconData.resourceTimingEntries[e].name.split(/[?#]/)[0])
    }
    _readPageKey() {
      this._beaconData && !this._beaconData.pageKey && this._isInitialLoad && (this._beaconData.pageKey = this._getPageKey()), this._isInternalApp && ("EMBER" === this._config["web-ui-framework"] && void 0 !== this._beaconData.pageKey ? this._beaconData.pageKey = this._config["page-key-prefix"] + ":" + this._beaconData.pageKey : document.querySelector('meta[name="pageKey"]') || (this._beaconData.pageKey = this._config["page-key-prefix"] + ":", this._config["pathname-depth"] > -1 ? this._beaconData.pageKey += window.location.pathname.split(/[\/#]/).slice(0, this._config["pathname-depth"] + 1).join("/") : this._beaconData.pageKey += window.location.pathname))
    }
    _getPageKey() {
      var e = document.querySelector('meta[name="pageKey"]');
      return e ? e.getAttribute("content") : document.body.id ? document.body.id.substring("pagekey-".length) : ""
    }
    _getRenderingMode() {
      var e, t = document.querySelector('meta[name="renderingMode"]');
      return t && "BIGPIPE" === (e = t.getAttribute("data-mode")) && (e = "BIG_PIPE"), e
    }
    _doesRenderErrorCodeBlockExists() {
      return null != document.querySelector("code#renderError")
    }
    _readSinglePageAppData() {
      this._beaconData.isSinglePageApp = this._config["is-single-page-app"], this._beaconData.isSinglePageApp && (this._beaconData.webUIFramework = this._config["web-ui-framework"], this._beaconData.appRenderMode = this._getRenderingMode(), this._isInitialLoad ? (this._beaconData.pageLoadMode = "INITIAL", this._doesRenderErrorCodeBlockExists() && (this._beaconData.isAppRenderFailed = !0)) : this._beaconData.pageLoadMode = "PARTIAL")
    }
    _sendAllData() {
      for (var e, t, n = {}, a = 0; a < this._config.plugins.length; a++)(e = this._config.plugins[a]).isAsync() && (n = i(n, e.getData()));
      for (a = 0; a < this._allBeaconData.length; a++) t = i(this._allBeaconData[a], n), this._sendBeacon(t);
      this._allBeaconData = []
    }
    _pushCurrentBeaconData() {
      var e;
      (e = this._getBeaconAndPluginData()) && this._allBeaconData.push(i({}, e))
    }
    _readIsSSL() {
      window && window.location && (this._beaconData.isSSL = "https:" === window.location.protocol ? 1 : 0)
    }
    _getBeaconAndPluginData() {
      if (this._readPageKey(), this._readSinglePageAppData(), this._readRenderTimingEntries(), this._readIsSSL(), this._config["app-version"] && (this._beaconData.appVersion = this._config["app-version"]), this._config.plugins.map(e => {
          this._beaconData = i(this._beaconData, e.getData())
        }), "navigationStart" in this._beaconData && this._shouldSendBeacon) {
        if (this._initialStartTime || (this._initialStartTime = this._beaconData.navigationStart), this._beaconData.boomerangStart = this._initialStartTime, this._cleanUpResourceTimingEntries(), this._beaconData.isSinglePageApp)
          if ("renderCompleteTime" in this._beaconData) this._beaconData.timeDone = this._beaconData.renderCompleteTime - this._beaconData.navigationStart;
          else if (!this._config["navigation-timing-only"]) return;
        return this._beaconData
      }
    }
    _sendBeacon(e) {
      if (this._config.enabled) try {
        if (this._fireTrackingBeacon(e), "undefined" != typeof CustomEvent) {
          var t = new CustomEvent("RUMEvent", {
            detail: e
          });
          document.dispatchEvent(t)
        }
      } catch (e) {}
    }
    _fireTrackingBeacon(e) {
      var t, n = {
        eventInfo: {
          eventName: this._config["event-name"],
          topicName: this._config["topic-name"],
          appId: this._config["app-id"]
        },
        eventBody: e
      };
      e.header = {
        pageInstance: e.pageInstance
      }, e.requestHeader = {
        pageKey: e.pageKey
      }, n.eventBody.trackingTime = -1, (t = new XMLHttpRequest).open("POST", this._config["beacon-url"], !0), t.setRequestHeader("content-type", "application/json"), this._csrfToken || (this._csrfToken = this._getCsrfToken()), t.setRequestHeader("Csrf-Token", this._csrfToken), t.send(JSON.stringify([n]))
    }
    _getCookieString() {
      return document.cookie
    }
    _getCsrfToken() {
      for (var e = this._getCookieString().split(";"), t = 0; t < e.length; t++) {
        for (var n = e[t];
          " " === n.charAt(0);) n = n.substring(1);
        if (-1 !== n.indexOf("JSESSIONID=")) {
          var i = n.substring("JSESSIONID=".length, n.length);
          return '"' === i[0] && '"' === i[i.length - 1] && (i = i.substring(1, i.length - 1)), i
        }
      }
      return ""
    }
  }
  let m = null;
  var f = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  var v, _ = (function(e, t) {
    ! function(e) {
      "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== f || "undefined" != typeof self && self;
      var t, n, i, a, r = function(e, t) {
          return e(t = {
            exports: {}
          }, t.exports), t.exports
        }(function(e, t) {
          ! function(e, t) {
            var n = "undefined" != typeof window && window && "node" !== window.appEnvironment,
              i = n && !!window.requestIdleCallback,
              a = {
                AJAX_METHOD: "POST",
                DEFAULT_PAGE_TYPE: "ajax",
                globalTrackingUrl: null,
                globalTrackingAppId: "no.app.id",
                queue: [],
                paused: !1,
                maxQueueSize: 1,
                queueTimeout: 1e3,
                timeoutId: null,
                disableSendBeacon: !0,
                csrfToken: "",
                testId: "",
                testSegId: "",
                setProperty: function(e, t) {
                  void 0 !== t && (this[e] = t)
                },
                setTrackingUrl: function(e) {
                  this.setProperty("globalTrackingUrl", e)
                },
                setAppId: function(e) {
                  this.setProperty("globalTrackingAppId", e)
                },
                setCsrfToken: function(e) {
                  this.setProperty("csrfToken", e)
                },
                setTestId: function(e) {
                  this.setProperty("testId", e)
                },
                setTestSegId: function(e) {
                  this.setProperty("testSegId", e)
                },
                getCookieString: function() {
                  return document.cookie
                },
                getCsrfToken: function() {
                  for (var e = this.getCookieString().split(";"), t = 0; t < e.length; t++) {
                    for (var n = e[t];
                      " " === n.charAt(0);) n = n.substring(1);
                    if (-1 !== n.indexOf("JSESSIONID=")) {
                      var i = n.substring("JSESSIONID=".length, n.length);
                      return '"' === i[0] && '"' === i[i.length - 1] && (i = i.substring(1, i.length - 1)), i
                    }
                  }
                  return ""
                },
                createXmlHttpObject: function() {
                  return n && window.XMLHttpRequest ? new XMLHttpRequest : null
                },
                beacon: function(e, t, i, a) {
                  this._beacon(e, t, i, a || this.globalTrackingUrl, this.disableSendBeacon ? null : n && navigator.sendBeacon && navigator.sendBeacon.bind(navigator))
                },
                _beacon: function(e, t, n, i, a) {
                  if (a) {
                    var r = void 0;
                    try {
                      r = a(i, e)
                    } catch (t) {
                      throw "object" == typeof t && (t.message = "Error sending [" + e + "] to " + i + " using sendBeacon:" + t.message, t.tags = ["tracking"]), t
                    }
                    if (r) return void(t && t(r))
                  }
                  this.ajax(e, t, n, i)
                },
                ajax: function(e, t, n, i) {
                  var a;
                  i ? (a = this.createXmlHttpObject()) && (a.open(this.AJAX_METHOD, i, !0), a.withCredentials = !0, a.setRequestHeader("Content-type", "application/json"), this.csrfToken ? a.setRequestHeader("Csrf-Token", this.csrfToken) : a.setRequestHeader("Csrf-Token", this.getCsrfToken()), this.testId && a.setRequestHeader("X-LinkedIn-traceDataContext-ENG_TEST_ID", this.testId), this.testSegId && a.setRequestHeader("X-LinkedIn-traceDataContext-ENG_TEST_SEGMENT_ID", this.testSegId), a.onreadystatechange = function() {
                    4 === a.readyState && (200 === a.status || 304 === a.status ? "function" == typeof t && t(a) : n && n('Response is not "OK" or "Not Modified" for tracking request'))
                  }, 4 !== a.readyState && a.send(e)) : n && n("Tracking url is not defined")
                },
                pause: function() {
                  this.paused = !0
                },
                unpause: function() {
                  this.paused = !1, this.queue.length >= this.maxQueueSize && this.flush()
                },
                flush: function() {
                  this.queue.length > 0 && (this.beacon(JSON.stringify(this.queue), null, this.logError), this.queue = []), i ? cancelIdleCallback(this.timeoutId) : clearTimeout(this.timeoutId), this.timeoutId = null, this.paused = !1
                },
                idleFlush: function(e) {
                  var t = this,
                    n = Date.now();
                  return requestIdleCallback(function(i) {
                    i.timeRemaining() > 8 || i.didTimeout ? t.flush() : t.timeoutId = t.idleFlush(e - (Date.now() - n))
                  }, {
                    timeout: e
                  })
                },
                addToQueue: function(e) {
                  if (this.queue.push(e), this.queue.length >= this.maxQueueSize && !this.paused) return this.flush();
                  if (!this.timeoutId) {
                    var t = this;
                    i && !this.paused ? this.timeoutId = this.idleFlush(this.queueTimeout) : this.timeoutId = setTimeout(function() {
                      t.flush()
                    }, this.queueTimeout)
                  }
                },
                validateEvent: function(e, t, n) {
                  this.beacon(JSON.stringify([{
                    eventInfo: this.populateEventInfo(e),
                    eventBody: this.populateEventHeaders(t)
                  }]), function(e) {
                    return n(null, e)
                  }, function(e) {
                    return n(e)
                  }, this.globalTrackingUrl + "/validate")
                },
                sendEvent: function(e, t) {
                  this.addToQueue({
                    eventInfo: this.populateEventInfo(e),
                    eventBody: this.populateEventHeaders(t)
                  })
                },
                getTimestamp: function() {
                  return Math.round((new Date).getTime() / 1e3)
                },
                populateEventInfo: function(e) {
                  return "string" == typeof e && (e = {
                    eventName: e
                  }), e && "object" == typeof e ? (e.appId || (e.appId = this.globalTrackingAppId), e) : (this.logError("Event info must be object"), {})
                },
                populateEventHeaders: function(e) {
                  return e && "object" == typeof e ? e : (this.logError("Event body must be object"), {})
                },
                logError: function(e) {
                  var t = window.console;
                  t && t.error && t.error(e)
                },
                init: function() {
                  this.setTrackingUrl(), this.setAppId(), this.onBeforeUnload = this.onBeforeUnload.bind(this), n && window.addEventListener("beforeunload", this.onBeforeUnload)
                },
                destroy: function() {
                  this.flush(), n && window.removeEventListener("beforeunload", this.onBeforeUnload)
                },
                onBeforeUnload: function() {
                  this.flush()
                }
              };
            t.exports = a
          }(0, e)
        }),
        o = "li_trk_navigation",
        s = "undefined";

      function c() {
        if (typeof window !== s && typeof window.sessionStorage !== s) try {
          return JSON.parse(window.sessionStorage.getItem(o))
        } catch (e) {}
      }

      function d(e) {
        if (typeof window !== s && typeof window.sessionStorage !== s) try {
          window.sessionStorage.setItem(o, JSON.stringify(e))
        } catch (e) {}
      }(a = e.ControlInteractionType || (e.ControlInteractionType = {}))[a.FOCUS = 0] = "FOCUS", a[a.UNFOCUS = 1] = "UNFOCUS", a[a.KEYBOARD_SUBMIT = 2] = "KEYBOARD_SUBMIT", a[a.DRAG = 3] = "DRAG", a[a.PINCH_OPEN = 4] = "PINCH_OPEN", a[a.PINCH_CLOSE = 5] = "PINCH_CLOSE", a[a.DOUBLE_PRESS = 6] = "DOUBLE_PRESS", a[a.LONG_PRESS = 7] = "LONG_PRESS", a[a.SHORT_PRESS = 8] = "SHORT_PRESS", a[a.SWIPE_UP = 9] = "SWIPE_UP", a[a.SWIPE_DOWN = 10] = "SWIPE_DOWN", a[a.SWIPE_LEFT = 11] = "SWIPE_LEFT", a[a.SWIPE_RIGHT = 12] = "SWIPE_RIGHT", a[a.FLICK_UP = 13] = "FLICK_UP", a[a.FLICK_DOWN = 14] = "FLICK_DOWN", a[a.FLICK_LEFT = 15] = "FLICK_LEFT", a[a.FLICK_RIGHT = 16] = "FLICK_RIGHT", a[a.SHAKE = 17] = "SHAKE", a[a.KEYBOARD_NEXT = 18] = "KEYBOARD_NEXT", a[a.HOVER = 19] = "HOVER", (i = e.PageViewPageType || (e.PageViewPageType = {}))[i.FULL = 1] = "FULL", i[i.AJAX = 2] = "AJAX", i[i.IFRAME = 3] = "IFRAME", i[i.REDIRECT = 4] = "REDIRECT", i[i.API = 5] = "API", i[i.FORM = 6] = "FORM", i[i.ROUTER = 7] = "ROUTER", i[i.ERROR = 8] = "ERROR", (n = e.EventTypes || (e.EventTypes = {}))[n.PageViewEvent = 0] = "PageViewEvent", n[n.NavigationEvent = 1] = "NavigationEvent", n[n.ExternalNavigationEvent = 2] = "ExternalNavigationEvent", n[n.ControlInteractionEvent = 3] = "ControlInteractionEvent", n[n.PageVisibilityChangeEvent = 4] = "PageVisibilityChangeEvent";
      var l = "undefined" != typeof window ? window : null;
      l ? function() {
        var e = l.crypto || l.msCrypto;
        if (!t && e && e.getRandomValues) {
          var n = new Uint8Array(16);
          (t = function() {
            return e.getRandomValues(n), n
          })()
        }
        if (!t) {
          var i = new Uint8Array(16);
          t = function() {
            for (var e = 0, t = void 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), i[e] = (t || 0) >>> ((3 & e) << 3) & 255;
            return i
          }
        }
      }() : t = function() {
        return new Uint8Array(16).fill(Math.floor(256 * Math.random()))
      };
      for (var h = [], u = 0; u < 256; u++) h[u] = (u + 256).toString(16).substr(1);

      function g() {
        var e = new Uint8Array(16),
          n = t();
        n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128;
        for (var i = 0; i < 16; i++) e[0 + i] = n[i];
        return e
      }

      function p() {
        return function(e) {
          for (var t = [], n = 0; n < e.length; n += 32768) t.push(String.fromCharCode.apply(null, e.subarray(n, n + 32768)));
          return btoa(t.join(""))
        }(g())
      }

      function m(e) {
        return e ? "urn:li:page:" + e : null
      }

      function v(e, t) {
        return e && t ? "urn:li:control:" + t + "-" + e : null
      }

      function _(e) {
        return e ? e.split(":").pop() : null
      }

      function w(e, t) {
        return e ? {
          trackingId: t || p(),
          pageUrn: m(e)
        } : null
      }

      function y(e) {
        if ("string" != typeof e) return null;
        var t = e.split(";");
        return 2 === t.length ? {
          pageUrn: t[0],
          trackingId: t[1]
        } : null
      }

      function E(e) {
        return e && e.referrer
      }

      function b(e) {
        if (e && e.URL) {
          var t = e.URL.match(/trk=([^&]+)/);
          if (t && 2 === t.length) return t[1]
        }
        return null
      }
      var T = 10,
        I = 10,
        S = Object.assign || function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          if (null == e) throw new TypeError("Cannot convert undefined or null to object");
          for (var i = Object(e), a = 0; a < t.length; a++) {
            var r = t[a];
            if (null !== r)
              for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (i[o] = r[o])
          }
          return i
        },
        P = function() {
          function t(e) {
            void 0 === e && (e = {
              appId: null,
              initialPageInstance: null
            }), this.config = e;
            var t = this.config.disableInitialAnchorPageViewEvent || !1;
            if (!this.config.appId) throw new Error("TrackingTwo requires an appId.");
            if (!this.config.initialPageInstance) {
              var n = document.querySelector('meta[name="trk-pageinstance"]');
              if (n && (this.config.initialPageInstance = y(n.getAttribute("content"))), !this.config.initialPageInstance) throw new Error("TrackingTwo requires an initialPageInstance");
              t = !0
            }
            this.config.eventHeaderProperties ? this.config.eventHeaderProperties.pageInstance && delete this.config.eventHeaderProperties.pageInstance : this.config.eventHeaderProperties = {}, this.config.userRequestHeaderProperties ? this.config.userRequestHeaderProperties.pageKey && delete this.config.userRequestHeaderProperties.pageKey : this.config.userRequestHeaderProperties = {}, this.config.validationMode = !!this.config.validationMode || !1, this.config.trackingUrl = this.config.trackingUrl || "/li/track";
            var i = function() {
              var e = window.location.pathname,
                t = e + window.location.search,
                n = window.location.href,
                i = c();
              if (!i) return null;
              for (var a = 0; a < i.length; a++) {
                var r = i[a].href;
                if (r === e || r === t || r === n) {
                  var o = i.splice(a, 1)[0];
                  return d(i), o
                }
              }
              return null
            }();
            i && (e.previousPageInstance = i.prevInstance), Object.freeze(this.config.eventHeaderProperties), Object.freeze(this.config.userRequestHeaderProperties), Object.freeze(this.config), r.init(), r.setProperty("disableSendBeacon", !1), r.setTrackingUrl(this.config.trackingUrl), r.setProperty("maxQueueSize", this.config.requestBatchingMaxQueueSize || T), r.setProperty("queueTimeout", 1e3 * (this.config.requestBatchingMaxWaitSeconds || I)), this.state = {
              currentPageInstance: e.initialPageInstance,
              previousPageInstance: e.previousPageInstance || null
            };
            var a = this.config.prevControlName || (i ? i.controlName : null);
            this.fireNavigationEvent(this.state.previousPageInstance, a), t || this.firePageViewEvent(), this._boundDocumentClickHandler = this._handleDocumentClicks.bind(this), document && document.body.addEventListener("click", this._boundDocumentClickHandler, !0), this._boundWindowBeforeUnloadHandler = this._handleWindowBeforeUnload.bind(this), window && window.addEventListener("beforeunload", this._boundWindowBeforeUnloadHandler, !0), this._boundDocumentVisibilityChangeHandler = this._handleDocumentVisibilityChange.bind(this);
            var o = "visibilitychange";
            document && (void 0 !== document.msHidden && (o = "msvisibilitychange"), document.addEventListener(o, this._boundDocumentVisibilityChangeHandler, !0))
          }
          return t.prototype._handleDocumentClicks = function(e) {
            for (var t = e.target; t !== e.currentTarget && !t.hasAttribute("data-tracking-control-name");) t = t.parentElement;
            if (t !== e.currentTarget) {
              var n = t.getAttribute("data-tracking-control-name"),
                i = t.hasAttribute("data-tracking-will-navigate"),
                a = !t.hasAttribute("data-tracking-no-cie"),
                r = t.getAttribute("data-tracking-href") || t.getAttribute("href");
              a && this.fireControlInteractionEvent(n), i && this.saveStateForPageDeparture({
                controlName: n,
                href: r
              })
            }
          }, t.prototype._handleWindowBeforeUnload = function(e) {
            var t = e.target.activeElement,
              n = t,
              i = null,
              a = !1;
            if (t) {
              for (; n !== e.currentTarget && ("function" != typeof n.hasAttribute || !n.hasAttribute("data-tracking-control-name")) && n.parentElement;) n = n.parentElement;
              n !== e.currentTarget && ("getAttribute" in n && (i = n.getAttribute("data-tracking-control-name")), "hasAttribute" in n && (a = n.hasAttribute("data-tracking-will-navigate")))
            }
            a || this.fireExternalNavigationEvent(i)
          }, t.prototype._handleDocumentVisibilityChange = function() {
            var e = !1;
            if (void 0 !== document.msHidden) e = document.msHidden;
            else {
              if (void 0 === document.hidden) return;
              e = document.hidden
            }
            this.firePageVisibilityChangeEvent(e)
          }, t.prototype.saveStateForPageDeparture = function(e) {
            if (e) {
              var t, n, i = e.controlName,
                a = e.href;
              t = {
                controlName: i,
                href: a,
                prevInstance: this.state.currentPageInstance
              }, (n = c() || []).push(t), d(n)
            }
          }, t.prototype.fireControlInteractionEvent = function(t, n, i) {
            if (void 0 === n && (n = e.ControlInteractionType.SHORT_PRESS), void 0 === i && (i = {}), !t) throw new Error("controlName is required.");
            var a = _(this.state.currentPageInstance.pageUrn),
              r = i.uiControlPageKey || a;
            this.fireTrackingEvent(e.EventTypes[e.EventTypes.ControlInteractionEvent], {
              requestHeader: {},
              header: {},
              controlUrn: v(t, r),
              interactionType: e.ControlInteractionType[n]
            }, i)
          }, t.prototype.fireNavigationEvent = function(t, n, i) {
            void 0 === i && (i = {});
            var a = t ? _(t.pageUrn) : null,
              r = i.uiControlPageKey || a;
            this.fireTrackingEvent(e.EventTypes[e.EventTypes.NavigationEvent], {
              requestHeader: {},
              header: {},
              previousPageInstance: t,
              triggerControlUrn: v(n, r)
            }, i)
          }, t.prototype.fireExternalNavigationEvent = function(t, n) {
            void 0 === n && (n = {});
            var i = n.uiControlPageKey || _(this.state.currentPageInstance.pageUrn);
            this.fireTrackingEvent(e.EventTypes[e.EventTypes.ExternalNavigationEvent], {
              requestHeader: {},
              header: {},
              triggerControlUrn: v(t, i)
            }, n, !0)
          }, t.prototype.firePageViewEvent = function(t, n) {
            void 0 === n && (n = {});
            var i = (n = S({}, n)).pageViewPageType || e.PageViewPageType.AJAX,
              a = _(this.state.currentPageInstance.pageUrn),
              r = t || a;
            this.fireTrackingEvent(e.EventTypes[e.EventTypes.PageViewEvent], {
              requestHeader: {
                pageKey: r
              },
              header: {},
              pageType: e.PageViewPageType[i].toLowerCase(),
              trackingInfo: {
                clientTimestamp: Date.now().toString()
              }
            }, n)
          }, t.prototype.fireAnchorPageViewEvent = function(e, t, n) {
            if (void 0 === n && (n = {}), !e) throw new Error("newPageKey is required.");
            var i = S({}, this.state.currentPageInstance),
              a = w(e);
            this.state.previousPageInstance = i, this.state.currentPageInstance = a, this.fireNavigationEvent(i, t, n), this.firePageViewEvent(e, n)
          }, t.prototype.firePageVisibilityChangeEvent = function(t, n) {
            void 0 === n && (n = {}), this.fireTrackingEvent(e.EventTypes[e.EventTypes.PageVisibilityChangeEvent], {
              requestHeader: {},
              header: {},
              isVisible: !t
            }, n)
          }, t.prototype.fireTrackingEvent = function(e, t, n, i) {
            if (void 0 === n && (n = {}), void 0 === i && (i = !1), !e || !t) throw new Error("eventName and body are required.");
            t = S({}, t), (n = S({}, n)).topicName || (n.topicName = e), n.pageInstance || (n.pageInstance = this.state.currentPageInstance);
            var a = S({
              pageKey: _(n.pageInstance.pageUrn),
              path: window.location.href,
              referer: E(document),
              trackingCode: b(document)
            }, this.config.userRequestHeaderProperties, t.requestHeader);
            delete t.requestHeader, delete t.header.pageInstance;
            var o = S({
              pageInstance: n.pageInstance,
              time: Date.now()
            }, this.config.eventHeaderProperties, t.header);
            delete t.header;
            var s = {
              requestHeader: a,
              header: o
            };
            this.config.mapHeaders && (s = this.config.mapHeaders(s));
            var c = S(s, t),
              d = {
                eventName: e,
                topicName: n.topicName,
                appId: this.config.appId
              };
            this.config.validationMode ? r.validateEvent(d, c, function(t) {
              t && console.error("Event " + e + " failed validation!")
            }) : (r.sendEvent(d, c), i && r.flush())
          }, t.prototype.destroy = function() {
            r.destroy(), document.removeEventListener("click", this._boundDocumentClickHandler, !0)
          }, t.createFromPageKey = function(e, n) {
            return e.initialPageInstance = w(n), new t(e)
          }, t
        }();
      e.AppTrackingInstance = P, e.clearNavStorage = function() {
        window.sessionStorage.removeItem(o)
      }, e.derivePageInstanceFromString = y, e.derivePageKeyFromUrn = _, e.generateControlUrn = v, e.generatePageInstance = w, e.generatePageUrn = m, e.generateTrackingId = p, e.getReferrer = E, e.getTrackingCode = b, e.stringifyPageInstance = function(e) {
        return e ? e.pageUrn + ";" + e.trackingId : null
      }, e.uuid = g, e.webTrackingTransport = r
    }(t)
  }(v = {
    exports: {}
  }, v.exports), v.exports);

  function w(e) {
    let t = e.querySelector('meta[name="pageKey"]');
    return t ? t.content + "_jsbeacon" : ""
  }

  function y(e) {
    let t = e.querySelector('meta[name="locale"]');
    return t && t.content || ""
  }
  let E = null;

  function b() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.appId;
    let n = void 0 === t ? "seo" : t,
      i = e.trackingCode;
    const a = w(document),
      r = {
        appId: n,
        disableInitialAnchorPageViewEvent: !0,
        requestBatchingMaxWaitSeconds: .05
      };
    return i && (r.userRequestHeaderProperties = {
      trackingCode: i
    }), E || (E = _.AppTrackingInstance.createFromPageKey(r, a)), E.generateTrackingId = _.generateTrackingId, E
  }
  var T = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  };

  function I(e) {
    "complete" === document.readyState ? e() : window.addEventListener("load", () => {
      setTimeout(e)
    })
  }

  function S(e) {
    return null == e || "object" != typeof e ? [] : Array.prototype.slice.call(e)
  }

  function P(e) {
    const t = e.getBoundingClientRect(),
      n = window.innerHeight || document.documentElement.clientHeight,
      i = window.innerWidth || document.documentElement.clientWidth,
      a = t.top <= n && t.top + t.height >= 0,
      r = t.left <= i && t.left + t.width >= 0;
    return a && r
  }

  function k(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = t.method;
    let i = void 0 === n ? "GET" : n;
    var a = t.headers;
    let r = void 0 === a ? {} : a;
    var o = t.sendCookies;
    let s = void 0 === o || o;
    var c = t.skipCsrfToken;
    let d = void 0 !== c && c;
    var l = t.postData;
    let h = void 0 === l ? void 0 : l;
    return new Promise((t, n) => {
      const a = new XMLHttpRequest;
      if (a.addEventListener("load", function() {
          if (a.status >= 200 && a.status < 300 || 304 === a.status) t({
            status: a.status,
            responseText: a.responseText
          });
          else {
            const t = new Error(`${i} request for ${e} has failed with status code ${a.status}`);
            t.response = {
              status: a.status,
              responseText: a.responseText
            }, n(t)
          }
        }), a.addEventListener("error", function(e) {
          n(e)
        }), a.open(i, e, !0), a.withCredentials = s, Object.keys(r).forEach(e => {
          a.setRequestHeader(e, r[e])
        }), !d) {
        const e = function(e) {
          const t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
          return t && t[2]
        }("JSESSIONID");
        e && a.setRequestHeader("Csrf-Token", function(e) {
          return '"' === e.charAt(0) && '"' === e.charAt(e.length - 1) ? e.slice(1, -1) : e
        }(e))
      }
      a.send(h)
    })
  }
  const C = {
      className: "class"
    },
    D = "A path to the asset must be provided";

  function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!e) return Promise.reject(new Error(D));
    const n = T({
      focusable: "false"
    }, t);
    return k(e, {
      sendCookies: !1,
      skipCsrfToken: !0
    }).then(e => (function(e) {
      return (new DOMParser).parseFromString(e, "image/svg+xml").firstChild
    })(e.responseText)).then(e => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return Object.keys(t).map(n => {
        const i = C[n] || n;
        e.setAttribute(i, t[n])
      }), e
    })(e, n))
  }
  const L = "An li-icon tag must be provided to inlineIcon";

  function N(e, t) {
    if (!e) return Promise.reject(new Error(L));
    const n = e.getAttribute("class");
    return R(t, n ? {
      className: n
    } : {}).then(t => (e.appendChild(t), e.setAttribute("aria-hidden", "true"), t))
  }
  const A = ["IMG", "IFRAME", "VIDEO", "SCRIPT"],
    O = "SCRIPT",
    U = "LI-ICON";
  class H {
    constructor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.delayedUrlAttributeName;
      let n = void 0 === t ? "data-delayed-url" : t;
      var i = e.delayedPosterAttributeName;
      let a = void 0 === i ? "data-delayed-poster" : i;
      var r = e.delayedBackground;
      let o = void 0 === r ? "data-delayed-background" : r;
      var s = e.lazyloadClassName;
      let c = void 0 === s ? "lazy-load" : s;
      var d = e.lazyloadedClassName;
      let l = void 0 === d ? "lazy-loaded" : d;
      var h = e.onLoadClassName;
      let u = void 0 === h ? "onload" : h;
      var g = e.onErrorClassName;
      let p = void 0 === g ? "onerror" : g;
      this.elementCache = [], this.onLoadClassName = u, this.onErrorClassName = p, this.delayedUrlAttributeName = n, this.delayedPosterAttributeName = a, this.delayedBackground = o, this.lazyloadClassName = c, this.lazyloadedClassName = l, this.lazyloadElSelector = `[${this.delayedUrlAttributeName}], .${this.lazyloadClassName}`, this.boundLoadVisibleImages = this.loadVisibleImages.bind(this), this.boundEvents = !1, this.scriptLoadPromises = {}, I(() => this.refreshLoader())
    }
    getLazyLoadedJavascriptModule(e) {
      return this.scriptLoadPromises[e] = this.scriptLoadPromises[e] || function() {
        let e, t;
        const n = new Promise((n, i) => {
          e = n, t = i
        });
        return n.resolve = e, n.reject = t, n
      }(), this.scriptLoadPromises[e]
    }
    refreshLoader() {
      this.elementCache = S(document.querySelectorAll(this.lazyloadElSelector)), this.loadVisibleImages(), this.elementCache.length && !this.boundEvents && this._attachEvents()
    }
    _attachEvents() {
      window.addEventListener("scroll", this.boundLoadVisibleImages, !0), window.addEventListener("touchmove", this.boundLoadVisibleImages, !0), window.addEventListener("resize", this.boundLoadVisibleImages, !0), this.boundEvents = !0
    }
    _detachEvents() {
      window.removeEventListener("scroll", this.boundLoadVisibleImages, !0), window.removeEventListener("touchmove", this.boundLoadVisibleImages, !0), window.removeEventListener("resize", this.boundLoadVisibleImages, !0), this.boundEvents = !1
    }
    lazyloadElOnload(e) {
      if (e.classList.remove(this.lazyloadClassName), e.classList.add(this.lazyloadedClassName), e.tagName === O) {
        const t = e.dataset.moduleId;
        this.getLazyLoadedJavascriptModule(t).resolve(window[t])
      }
    }
    lazyloadOnerror(e) {
      if (e.classList.remove(this.lazyloadClassName), e.classList.add(this.lazyloadedClassName), e.classList.add(this.onErrorClassName), e.tagName === O) {
        const t = e.dataset.moduleId;
        this.getLazyLoadedJavascriptModule(t).reject(new Error(`Could not lazy load JS with src ${e.src}`))
      }
    }
    loadVisibleImages() {
      let e = 0;
      for (; e < this.elementCache.length;) {
        let t = this.elementCache[e];
        if (t.tagName === O || t.classList.contains(this.onLoadClassName) || P(t)) {
          const n = t.getAttribute(this.delayedUrlAttributeName);
          n && t.tagName === U ? N(t, n).then(e => {
            this.lazyloadElOnload(e), this.lazyloadElOnload(t)
          }).catch(() => this.lazyloadOnerror(t)) : n && -1 !== A.indexOf(t.tagName) ? (t.onerror = this.lazyloadOnerror.bind(this, t), t.onload = t.oncanplay = this.lazyloadElOnload.bind(this, t), t.src = n) : (n && t.hasAttribute(this.delayedBackground) && (t.style.backgroundImage = `url("${n}")`), this.lazyloadElOnload(t)), "VIDEO" === t.tagName && (t.poster = t.getAttribute(this.delayedPosterAttributeName)), t.removeAttribute(this.delayedUrlAttributeName), this.elementCache.splice(e, 1)
        } else e++
      }
      this.elementCache.length || this._detachEvents()
    }
  }
  let q = null;
  const B = "warn";
  let M = {};
  M["error"] = console.error, M[B] = console.warn;
  Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
  class z {
    constructor() {
      this.perfData = window.performance.timing, this.pageKey = w(document)
    }
    _getPageLoadTime() {
      if (!this.perfData) throw new Error("Cannot get page load time because performance.timing unavailable!");
      return this.perfData.loadEventEnd - this.perfData.navigationStart
    }
    fireIngraphsRequest(e) {
      if (!e && "string" != typeof e) throw new Error("No API path provided!");
      if (!this.pageKey) throw new Error("No page-key found!");
      const t = this._getPageLoadTime();
      k(e, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        postData: JSON.stringify({
          pageKey: this.pageKey,
          metricsType: "pageLoadTime",
          metricsValue: t
        })
      })
    }
  }
  const x = "[data-impression-id]",
    V = "data-impression-id",
    F = {
      observeComponents: () => {},
      unobserveComponents: () => {},
      handleDynamicElements: () => {}
    };
  class K {
    constructor(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = n.threshold;
      let a = void 0 === i ? .9 : i;
      var r = n.root;
      let o = void 0 === r ? null : r;
      var s = n.rootMargin;
      let c = void 0 === s ? "0px" : s;
      if (!("IntersectionObserver" in window)) return F;
      this.root = o, this.threshold = a, this.rootMargin = c, this.trackingInstance = t, this.queuedImpressions = [];
      const d = {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      };
      this.intersectionObserverInstance = new e(this._handleObservedNodes.bind(this), d), this.observeComponents()
    }
    observeComponents() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...document.querySelectorAll(x)];
      this.intersectionObserverInstance && e.forEach(e => {
        this.intersectionObserverInstance.observe(e)
      })
    }
    unobserveComponents() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(e => {
        this.intersectionObserverInstance.unobserve(e), e.removeAttribute(V)
      })
    }
    _returnImpressionMetaData(e) {
      return e.getAttribute(V)
    }
    _isNodeVisible(e) {
      return e.intersectionRatio >= this.threshold
    }
    _handleObservedNodes(e) {
      if (this.intersectionObserverInstance) {
        const t = e.filter(e => this._isNodeVisible(e)).map(e => {
            return e.target
          }),
          n = t.map(this._returnImpressionMetaData);
        this.queuedImpressions = this.queuedImpressions.concat(n), this.unobserveComponents(t), this._dispatchEvent()
      }
    }
    _dispatchEvent() {
      ! function(e, t) {
        const n = y(document),
          i = {};
        n && (i.interfaceLocale = n);
        const a = {
          header: {},
          requestHeader: i,
          moduleNames: t
        };
        e.fireTrackingEvent("ViewModuleImpressionEvent", a)
      }(this.trackingInstance, this.queuedImpressions), this.queuedImpressions = []
    }
    handleDynamicElements() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
      if (this.intersectionObserverInstance) {
        const t = [...e.querySelectorAll(x)];
        t.length > 0 && this.observeComponents(t)
      }
    }
  }
  const j = "timezoneOffset",
    W = "screenWidth",
    X = "screenHeight",
    J = "devicePixelRatio",
    G = "currentContext",
    $ = "https://www.linkedin.com/transactional-routing/createguestdeferreddeeplink",
    Q = /iPad|iPhone|iPod/;

  function Y() {
    var e;
    e = navigator.userAgent, Q.test(e) && S(document.querySelectorAll(".app-store-link")).forEach(e => {
      e.href && e.addEventListener("click", e => (function(e) {
        if (!e) throw Error("The given context is not valid");
        const t = {
          [j]: (new Date).getTimezoneOffset(),
          [W]: window.screen.width,
          [X]: window.screen.height,
          [J]: window.devicePixelRatio,
          [G]: e
        };
        try {
          navigator.sendBeacon($, JSON.stringify(t))
        } catch (e) {}
      })(e.currentTarget.pathname))
    })
  }
  const Z = document.getElementById("config");
  let ee, te, ne;

  function ie(e, t) {
    window[e] && window[e].resolve ? window[e].resolve(t) : window[e] = Promise.resolve(t)
  }
  Z && Z.dataset && (ee = Z.dataset.appId || void 0, te = Z.dataset.customTrackingCode || void 0, ne = Z.dataset.trackingPageType || void 0), ie("lazyloader", function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return q = q || new H(e)
  }()), I(() => {
    const i = b({
      appId: ee,
      trackingCode: te
    });
    if (ie("tracking", i), ie("impressionTracking", new K(window.IntersectionObserver, i)), function() {
        let i = ["c1=2", "c2=6402952", "c3=", "c4=", "c5=", "c6=", "c15="];
        i.push(`${n}_t=${Date.now()}`), i.push(`${n}c=${document.characterSet||document.defaultCharset||""}`), i.push(`c8=${e(document.title)}`), i.push(`c7=${e(document.URL)}`);
        const a = document.referrer && document.referrer.split("?")[0] || "";
        i.push(`c9=${e(a)}`);
        const r = t + i.join("&");
        let o = new Image;
        o.src = r
      }(), m || (m = new p({
        "is-single-page-app": !1,
        "navigation-timing-only": !0,
        "enable-rs-timing": !0,
        "enable-cdn-tracking": !0,
        "enable-pop-tracking": !0,
        "request-sampling-rate": 1
      })), function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ajax";
        const n = function(e) {
            let t = e.querySelector('meta[name="linkedin:pageTag"]');
            return t && t.content || ""
          }(document),
          i = y(document);
        let a = {
            clientTimestamp: Date.now(),
            pageTag: n
          },
          r = {};
        i && (r.interfaceLocale = i);
        const o = {
          header: {},
          requestHeader: r,
          pageType: t,
          trackingInfo: a
        };
        e.fireTrackingEvent("PageViewEvent", o)
      }(i, ne), null !== document.querySelector('meta[name="clientSideIngraphs"]')) {
      (new z).fireIngraphsRequest(function() {
        const e = document.querySelector('meta[name="apiPath"]');
        if (!e) throw new Error("No API path found!");
        return e.content
      }())
    }
    Y()
  })
}();