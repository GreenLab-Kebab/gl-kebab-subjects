
        (function(w, d, c, u) {
            var f, n, i;
            if (c.UserConsent.inUserConsentState(["performance"])) {
                w[u] = w[u] || [], f = function() {
                    var o = {
                        ti: '5526986'
                    };
                    o.q = w[u];
                    w[u] = new UET(o);
                    w[u].push('pageLoad');
                }, n = d.createElement('script'), n.async = 1, n.onload = n.onreadystatechange = function() {
                    var s = this.readyState;
                    s && s !== 'loaded' && s !== 'complete' || (f(), n.onload = n.onreadystatechange = null);
                }, n.src = '//bat.bing.com/bat.js', i = d.getElementsByTagName('script')[0], i.parentNode.insertBefore(n, i);
            }
        })(window, document, CNN, 'uetq');
    