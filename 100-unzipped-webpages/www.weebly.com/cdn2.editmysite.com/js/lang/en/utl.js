window._W = window.Weebly = window.Weebly || {};
_W.getUserLanguageURL = function(lang) {
    return '//cdn2.editmysite.com/js/lang/%lang%/utl.js?buildTime=1234&'.replace('%lang%', lang);
}
_W.tli = function(s) {
    return s;
}
_W.userLang = 'en';
_W.tl = _W.utl = (function() {
    var f = function(s) {
            var t = tls[s] || s;
            var a = Array.prototype.slice.call(arguments, 1);
            for (var i = 0; i < a.length; i++) {
                t = t.split('{{' + i + '}}').join(a[i]);
            }

            return t ? t.replace(/^\\s*(.+?)\\s*$/, '$1') : s;
        },
    return f;
})();
_W.tl = _W.tl || _W.stl;