// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
(function(window,document){lacuna_lazy_load("lacuna_cache/imported_04uqpo.js[26:13288]", functionData => eval(functionData))for(i=0;i<cum_weights.length;i++){cum_sum+=cum_weights[i]lacuna_lazy_load("lacuna_cache/imported_04uqpo.js[13343:16448]", functionData => eval(functionData))s=c!=m?c:4*a.length}lacuna_lazy_load("lacuna_cache/imported_04uqpo.js[16466:17445]", functionData => eval(functionData))ction(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 14603, 14775);var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++){var f=c[d>>>2]>>>24-8*(d%4)&255;b.push((f>>>4).toString(16));b.push((f&15).toString(16))}return b.join("")},parse:function(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 14782, 14905);for(var c=a.length,b=[],d=0;d<c;d+=2)b[d>>>3]|=parseInt(a.substr(d,2),16)<<24-4*(d%8);return new n.init(b,c/2)}},g=b.Latin1={stringify:function(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 14929, 15066);var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++)b.push(String.fromCharCode(c[d>>>2]>>>24-8*(d%4)&255));return b.join("")},parse:function(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 15073, 15188);for(var c=a.length,b=[],d=0;d<c;d++)b[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return new n.init(b,c)}},r=b.Utf8={stringify:function(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 15210, 15322);try{return decodeURIComponent(escape(g.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data")}},parse:function(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 15329, 15389);return g.parse(unescape(encodeURIComponent(a)))}},k=j.BufferedBlockAlgorithm=f.extend({reset:function(){___jdce_logger("lacuna_cache/imported_04uqpo.js", 15434, 15486);this._data=new n.init;this._nDataBytes=0},_append:function(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 15495, 15592);"string"==typeof a&&(a=r.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 15602, 15857);var c=this._data,b=c.words,d=c.sigBytes,f=this.blockSize,h=d/(4*f),h=a?e.ceil(h):e.max((h|0)-this._minBufferSize,0);a=h*f;d=e.min(4*a,d);if(a){for(var g=0;g<a;g+=f)this._doProcessBlock(b,g);g=b.splice(0,a);c.sigBytes-=d}return new n.init(g,d)},clone:function(){___jdce_logger("lacuna_cache/imported_04uqpo.js", 15864, 15936);var a=f.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});j.Hasher=k.extend({cfg:f.extend(),init:function(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 15995, 16048);this.cfg=this.cfg.extend(a);this.reset()},reset:function(){___jdce_logger("lacuna_cache/imported_04uqpo.js", 16055, 16101);k.reset.call(this);this._doReset()},update:function(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 16109, 16165);this._append(a);this._process();return this},finalize:function(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 16175, 16232);a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 16260, 16327);return function(c,b){___jdce_logger("lacuna_cache/imported_04uqpo.js", 16279, 16326);return new a.init(b).finalize(c)}},_createHmacHelper:function(a){___jdce_logger("lacuna_cache/imported_04uqpo.js", 16346, 16420);return function(b,f){___jdce_logger("lacuna_cache/imported_04uqpo.js", 16365, 16419);return new s.HMAC.init(a,f).finalize(b)}}});var s=p.algo={};return p}(Math);(function(){___jdce_logger("lacuna_cache/imported_04uqpo.js", 16456, 17445);var e=CryptoJS,m=e.lib,p=m.WordArray,j=m.Hasher,l=[],m=e.algo.SHA1=j.extend({_doReset:function(){___jdce_logger("lacuna_cache/imported_04uqpo.js", 16553, 16643);this._hash=new p.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(f,n){___jdce_logger("lacuna_cache/imported_04uqpo.js", 16660, 17070);for(var b=this._hash.words,h=b[0],g=b[1],e=b[2],k=b[3],j=b[4],a=0;80>a;a++){if(16>a)l[a]=f[n+a]|0;else{var c=l[a-3]^l[a-8]^l[a-14]^l[a-16];l[a]=c<<1|c>>>31}c=(h<<5|h>>>27)+j+l[a];c=20>a?c+((g&e|~g&k)+1518500249):40>a?c+((g^e^k)+1859775393):60>a?c+((g&e|g&k|e&k)-1894007588):c+((g^e^k)-899497514);j=k;k=e;e=g<<30|g>>>2;g=h;h=c}b[0]=b[0]+h|0;b[1]=b[1]+g|0;b[2]=b[2]+e|0;b[3]=b[3]+k|0;b[4]=b[4]+j|0},_doFinalize:function(){___jdce_logger("lacuna_cache/imported_04uqpo.js", 17083, 17303);var f=this._data,e=f.words,b=8*this._nDataBytes,h=8*f.sigBytes;e[h>>>5]|=128<<24-h%32;e[(h+64>>>9<<4)+14]=Math.floor(b/4294967296);e[(h+64>>>9<<4)+15]=b;f.sigBytes=4*e.length;this._process();return this._hash},clone:function(){___jdce_logger("lacuna_cache/imported_04uqpo.js", 17310, 17382);var e=j.clone.call(this);e._hash=this._hash.clone();return e}});e.SHA1=j._createHelper(m);e.HmacSHA1=j._createHmacHelper(m)})();