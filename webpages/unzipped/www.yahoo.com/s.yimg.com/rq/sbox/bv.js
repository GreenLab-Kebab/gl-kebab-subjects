(function(d) {
    var a = function(f, o) {
        var e, h = 'https://';
        try {
            e = d.createElement('iframe');
            e.src = h + o;
            e.style.display = 'none';
            d.body.appendChild(e);
            e = new Image();
            e.onerror = e.onload = function() {
                e.onerror = e.onload = null;
                e = null
            };
            e.src = h + f
        } catch (e) {}
    };
    a('pr-bh.ybp.yahoo.com/fac-sync?cb=' + Math.random(), 'tag.sp.advertising.com/bid-apid/bid-apid-idsync.html')
})(document);