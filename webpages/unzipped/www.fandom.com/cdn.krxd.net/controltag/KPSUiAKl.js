/* ControlTag Loader for Wikia 44c1a380-770f-11df-93f2-0800200c9a66 */
(function(w, cs) {

    if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
        return;
    }

    var debugging = /kxdebug/.test(w.location);
    var log = function() {

        debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
    };

    var load = function(url, callback) {
        log('Loading script from:', url);
        var node = w.document.createElement('script');
        node.async = true;
        node.src = url;


        node.onload = node.onreadystatechange = function() {
            var state = node.readyState;
            if (!callback.done && (!state || /loaded|complete/.test(state))) {
                log('Script loaded from:', url);
                callback.done = true;
                callback();
            }
        };


        var sibling = w.document.getElementsByTagName('script')[0];
        sibling.parentNode.insertBefore(node, sibling);
    };

    var config = {
        "app": {
            "name": "krux-scala-config-webservice",
            "version": "3.41.5",
            "schema_version": 3
        },
        "confid": "KPSUiAKl",
        "context_terms": [],
        "publisher": {
            "name": "Wikia",
            "active": true,
            "uuid": "44c1a380-770f-11df-93f2-0800200c9a66",
            "version_bucket": "alpha",
            "id": 895
        },
        "params": {
            "first_party_dmp_managed": true,
            "link_header_bidder": false,
            "site_level_supertag_config": "site",
            "recommend": false,
            "first_party_cookie_enhancements": true,
            "max_segments": 50,
            "control_tag_pixel_throttle": 100,
            "fingerprint": false,
            "optout_button_optout_text": "Browser Opt Out",
            "user_data_timing": "load",
            "consent_active": true,
            "use_central_usermatch": true,
            "store_realtime_segments": false,
            "tag_source": false,
            "link_hb_start_event": "ready",
            "optout_button_optin_text": "Browser Opt In",
            "first_party_uid": true,
            "global_user_match": "site",
            "link_hb_timeout": 2000,
            "link_hb_adserver_subordinate": true,
            "optimize_realtime_segments": false,
            "control_tag_version": "alpha",
            "link_hb_adserver": "dfp",
            "target_fingerprint": false,
            "context_terms": true,
            "optout_button_id": "kx-optout-button",
            "dfp_premium": true,
            "control_tag_namespace": "wikia"
        },
        "prioritized_segments": ["tcq57x2i1", "uhteqqxe7", "toh769jiq", "ucfqs3s34", "qjh7uwb8w", "ubf049ptn", "ubf0vxmuw", "t9xhyk1tp", "p7li199jv", "tntj5lpkr", "tggpoho8j", "t3pitd7rf", "t1d8aovam", "tu5evoeqx", "ts1c1vb3s", "sp7lbcrkn", "pc116rba1", "pne2mgm0r", "rnqb0hmmm", "rol8eu2wt", "t8lwogmv4", "t8cdgwons", "rl3dwdzg7", "rl3ih12yb", "t3ukr52b8", "rh8ipsb6n", "ozdlfrfrf", "ojafo8ved", "q5fjugwfe", "p678hl188", "s8a3ml87r", "scc4s16cr", "tbgnn34py", "s93n1xwyt", "s3mr5yo8d", "tvjx0e76m", "s47n23foz", "s9mhp5z4v", "s4ir14zbm", "syprpsfnt", "tizu5yio0", "sx5x5q3s9", "t8cbguauu", "syprymb5m", "s9mhm0e4x", "q2ciq0b2t", "s6qj9lzoj", "qyxhylhrf", "raidhedna", "svaq42qjh", "s9mgf48sf", "s9mg0fv7d", "s6qj24rum", "qi0txcn2c", "s6qkijfrm", "pu414twb1", "rr46t9an5", "sx5wqj6od", "tfstaau3c", "t82vlxjn1", "rl2hegui5", "rr5poc67j", "s9mhdmhw9", "rnu3tpff2", "s6nmpaasq", "t3ummqpb7", "sx5w72wkx", "q23g4sldc", "sx5cuf22d", "syprs1hdv", "odm1prs9l", "scpuedn7l", "s6m0bcvbq", "nyyle0o5m", "qvdwmo61o", "te4t99fq2", "r7xjggxc7", "qvdw49jg2", "r7xjqdpru", "sce71ii4q", "scfciu63o", "scfcv4h3e", "qykespdgz", "r7xju3y2o", "r1u70n7s6", "r7xi88yiz", "rqtygwthw", "spjx9763w", "o3scr7vfj", "r1u6ge3fh", "sx1smtb19", "qtqjfgz2r", "o7y5pf9j8", "sx1spu4pp", "r1u8oles5", "ovdzqycj7", "qprfa8p3p", "r1u8gugvl", "p3d4115z6", "qo0jk5w9r", "sx1sftg0h", "prwz2kv5s", "qf143gul0", "o7y5khdim", "rsd0kkmmb", "qhaho2hf3", "pcm9gcgzz", "rr9ahojlp", "ollb0h8z3", "qfyxwqowa", "p4etdiztr", "op7aq2zfx", "qcyqirygl", "qcyp95258", "qf0jcw6r2", "t2tnltmif", "ptzvk7uas", "tvj8cxsza", "tvj53n9ek", "qrnkv5amz", "pe1gyxpe2", "pd9ev7exz", "qhena1t4u", "qsqbpzu7n", "qs66vni8f", "rzjdat7vn", "pqaalghgj", "pjz9k83qk", "pkrshnoxu", "pf4sdbm7d", "pf38wg6re", "pf4sbfrh0", "p2hq1k779", "pvospraqc", "pjzcthcpt", "myxqzsvd5", "p029uyk0h", "r0ywy4n6b", "pvnq58pyx", "qtis30s8u", "sllbmp9rr", "qcyzovv17", "p3d4oruyf", "riy2il967", "rimc1uppn", "s043edif9", "s04zh53ux", "s04yjk1vb", "rhsmho8sq", "qf0i7st8j", "r5h3kv66a", "o8nffcqsa", "qmojy54tv", "pjz9d9cpm", "ovd0fj6xf", "ptgxdilm7", "pjzlx7tni", "pne63xve2", "rt0l3jf7e", "pn3cgytc8", "q2scpmtf6", "ribpzl54g", "pqo05iirq", "qiqii0p46", "qkc5d50sz", "qhli28o0v", "p0a24knd2", "qk5fqpeuv", "pf44o8nke", "pcm831wgx", "o854lka2r", "pjzc8iblj", "qk4a3l9dc", "pfk6l29xp", "rtscx1q0o", "pdxhi3xue", "p2v8szq5t", "p292j1s6w", "ovdz4hk9u", "qagmtuvug", "qebuymx43", "qguk6r3pq", "px0dmwhg1", "phzuuluma", "pi75qll5n", "pf38495fq", "phzuwv8oq", "l6dwvwk4q", "rtr9nihqc", "rts5wveys", "pfk7e853z", "pjzcli5j3", "pf4r9avhm", "pifwpn5ms", "pi8azykxn", "p1p3ndqj3", "p0aezummb", "pg3ybcw8x", "rtr88fh0g", "p16a84x71", "qe96xpy5l", "pjzc11q43", "t28693lhb", "pf388bt81", "pb2adfv75", "pfo1lpxw0", "p5xsila7g", "pikfnt1o3", "maz3635lt", "pmlxm9cz9", "patp1wvps", "pjez2ut1p", "p44bnk08s", "slr2b8xea", "l5h9g8s81", "pfo1yra7f", "psklrern6", "l5pog7454", "pf8yr90kw", "pmlzety4x", "pjb6ckd5l", "l65e7q72q", "pj620f1x5", "pfo0maywq", "r7crgcq6v", "n42nikugn", "pj65autet", "pmluqgk5b", "pa1q3hofr", "qa7a5kr9t", "oum6dbij4", "myufozfvu", "mf20tfg50", "p1qvwe0gf", "mt6nf08we", "nm90py68x", "qdatiupwl", "proun0zam", "pd06z3py7", "n6py7mwvd", "pu4031rkv", "l5hoxac0q", "l6sy2oz2g", "l7tjfzchg", "rvgf4gt4f", "pgg43o7x8", "pvmqdzbux", "pgg5ovhxi", "pchbvgfqo", "peonrlytp", "l5h9zxgiw", "oy9yr2sov", "paaug1j3r", "pfb1igyao", "n4mr5r49z", "rh670dxbf", "p59dy6gw4", "pe1jo3ulj", "pcnao4717", "mdfzhvp3x", "pc84sj3ub", "sj5bofgv6", "o4r0zitna", "ozdaez94q", "scresbcaf", "screfx2fk", "screke7wj", "peonvp4b7", "screo8sln", "npk2ive88", "o4rzxgwm1", "sby536pia", "paroyd6f5", "phdgnqf02", "p8w9ms1x6", "pcdsorrr9", "mueu17q3u", "pn2odpecq", "pf4rkkwlz", "pn5cz5boi", "pd7vjy1ml", "pggagu0bd", "l4ipynx6n", "objbse2pi", "qf0ius5ze", "puw4rpk6u", "m6kilfdn0", "pd8zioo9m", "myuf1vmwd", "rfz28bala", "l55a043ml", "pthpu46io", "l6wzg5l0u", "pcnaz610r", "qcyq3kxtv", "rzicucx27", "rw3t67efj", "p9hfrdilb", "l98c7mtek", "mgdqsrp7j", "myub2y7hu", "pr1t3abbf", "ozdl2pll2", "qcyp76plc", "px2kyz3w3", "pd803u0kr", "pcizp8w5j", "myucd5bgm", "p7lebojet", "pb1or2yeu", "o24s04bvs", "pu40emo5b", "pfs5lflal", "nkzffsu3d", "peogqor9u", "l6886827n", "rjtq7txpt", "o4rz3zhbm", "qcyr702eu", "m5w92da3b", "pcds394v1", "p1h85a1n8", "pg0ho8b3f", "plrm77rw8", "pcm9spfmm", "pcm9zu8xo", "petp41n17", "pp9ips8cu", "mn2afgbl9", "pmfknmv55", "o8qnmtrxz", "ovdz7gwn6", "o7y5muybh", "pg0i2t72p", "pvovln69p", "mn16mkx73", "qcyrw3rlw", "pubx1mbtm", "ruz54u3pe", "ovdz08mq8", "p6g36m65m", "p2t98cr4c", "pwazv3k7q", "o8nfuh9v8", "pg0jpk0fc", "pciz979ps", "myuax10kb", "p7ghl1s8c", "qcyqec0ja", "sc63cf3xl", "oydm05ml4", "onn5zyslm", "pi75ff9i9", "pchia1k4f", "qf0im3quj", "qcyq8piwe", "r9jtdrdst", "pgg49v0gi", "ptcijbvpl", "obgpkor8u", "qcyrteexc", "o8nfy2ka2", "prdlot3x7", "qcyrzt1mp", "qcyqb8egw", "pg0ilrkwk", "p4lioegw0", "puwyihixm", "l8cvx4q0q", "puwx96ih9", "m8ifdgqnp", "mfagngs4v", "nc9hniipv", "pf39a103j", "muyeimoq8", "m4z3gu07v", "p0zkf3dbm", "qhktbi95l", "pne6tmml7", "qi2bw9y4p", "qjllv6ueo", "rtz621a3e", "qkdstxjqt", "p3efds4d5", "pcg8teuuj", "qlg2dwkmc", "ptgqzu6i9", "p3efbe9hu", "pphgh2nzx", "qocd1rgrj", "qqfsg59gc", "pfo1pl60t", "myuaguogc", "l5ekmbc7j", "l5g2q8ndp", "pfoz0q4d2", "pkb29r7r6", "pwbnl8955", "l7kt8r02u", "qufh1npx7", "qufnaejau", "qupzt0h0b", "qv95enzbf", "qwos2kcb2", "pjev4ysqx", "l5eaw5w2w", "rgnpphh3v", "qy8bp56li", "qwwsxy9s4", "q0js3d4nd", "q0sox9ega", "q0sw9mg3e", "q1bv8b53n", "p3ef2xq3t", "qi0xhdjsv", "q4l6ur2nu", "q4l7nr07p", "pkv2j9b0n", "qkfx6l3m3", "qkf4a3m12", "qkf2fr8sp", "q556iq6l3", "q5yarqyoo", "rapywfmq2", "q6u7w5glz", "q7fid4jgb", "rbdv15k92", "rfxfrtvmb", "rfhg9z5r0", "rhfgkz9zt", "rgy7mnprw", "rhfghfjjn", "rgy863yyf", "rhfgjeqmx", "rgy9elfpj", "rhq6h6k8v", "riamrr6d7", "riamw4z5b", "rh8mtja86", "rizbkob5f", "rj2qjrbj5", "rk9qxqy1r", "rld6ar8td", "rld61waz1", "rl2jiyc1g", "rl3haezlb", "rmhkoqa4m", "pgz95bxui", "rmaso1mjs", "rbh0o131p", "pir95yyyj", "prdq7emed", "pne53xqqc", "rnrr5d6vm", "rhrev3b3r", "ratxl9ovc", "rs4p48vbu", "rtcfein8y", "rtr2s6htf", "rtckirwaq", "rvi2pkqx3", "rvi3cdn0p", "rvi28ooj6", "rvi25getx", "rvmvniumr", "rmd5r704d", "rxtxe78ww", "rx3x699pz", "r0aelws3c", "r05uh05ve", "r1tr67gml", "r1t1phff1", "r1xwciu1s", "r1xx88p16", "r2jg128f3", "r2l380sh7", "r2l4ges4l", "r2pq8b5ap", "r2puo6xio", "r2pu9h9m3", "r2qcww75w", "r5g85xne7", "r5g9bnpg1", "r5g9i0zxr", "r6fl9d930", "r6fmxzma9", "r6fsc9fch", "r6fsmak25", "r6woza1nt", "r948rhl6y", "r949kgcwi", "r95ap5xzp", "r95a1kjnw", "scm81giw2", "r5h4yndrg", "sm43vbh5a", "sm43zxox3", "sn3p1quj0", "sow5rkqzh", "sow5t46zx", "stis0avhz", "svapma9lo", "sw3u7uttb", "sw3u9ql1m", "szjlibgd5", "s0ekko7i3", "s3m51ilxz", "s3m4ozznf", "s3m593gy0", "s329xhbel", "s33agdc67", "s33ai8t3z", "s33bskuvj", "s33bv5aqm", "s33bzkv55", "s71r5vuwx", "su14oqink", "tegs94wh7", "tegty5nko", "tb5vkjnle", "tcihcn64h", "tjvbt7n08", "tlvhmyt80", "tlx7gfbgz", "su15zm5q2", "tod9ljdth", "towhekxa8", "to5dprt5u", "tq8jnep9s", "trodxnm0v", "trod2k6xg", "trod9kzr0", "trzt1ng3e", "tr7zp1lyh", "tr7z4gbok", "tr7z64jgj", "tsbmad0h0", "tsf4n7hc5", "tsf4wibme", "tstifrmrj", "ttj78ehxx", "tt0uxc6p3", "tt8zcp80f", "tt8z3jdsh", "tt80ofkm1", "tt817921t", "qwt3s9yd2", "tvjhv7i21", "tvjigw8il", "tvjiv0mc2", "tvjjbmblp", "tvjjud0gn", "tvjj4gf1c", "tvjkfco0x", "tvjlgvnl1", "tvzw3ocg1", "tv7inwyuv", "twbicbs6q", "tyist682o", "tyiv5bdfw", "ty0ec1u6c", "tz2nbjuxt", "t0ysvktwo", "t07qs9t7f", "t07q9buhp", "t07rrd09c", "suyjr35ua", "t19j0qbqz", "t19ksjwqr", "t2dfdahqh", "t3tz7dzkr", "t3xzhkmc9", "t43slxr2c", "t44hfobrz", "t6b3mcymr", "t7jw7qlqz", "t8jd9mgvq", "t9q4ztiy4", "tz61ptmi1", "tggqwi16z", "ubd3u5cvn", "ubh2ypuw7", "ubh3b9fig", "ub6drjsgl", "ucif9klml", "uc3hr9hqe", "uf2bg4wdz", "uf6pee318", "uf9261xqn", "ucer90epr", "ucer745s6", "uhp1xbxw3", "uhp46khca", "uhyot3yae", "uhyplc5uy", "uehp9q79z", "ue5o8w9ja", "ue5ndgmfv", "uehn6e851", "uidiqdjju"],
        "realtime_segments": [{
            "id": "obgpkor8u",
            "test": ["and", ["and", ["or", ["intersects", "$page_attr_kruxdartparam_s1", ["_outlander"]]]]]
        }, {
            "id": "tcq57x2i1",
            "test": ["and", ["and", ["or", ["intersects", "$page_attr_kruxdartparam_ae3", ["1"]]]]]
        }, {
            "id": "rl2jiyc1g",
            "test": ["and", ["and", ["or", ["intersects", "$user_segments", ["pmlzety4x"]]]]]
        }, {
            "id": "uhteqqxe7",
            "test": ["and", ["and", ["or", ["intersects", "$page_attr_keywords:,", ["overwatch"]],
                ["intersects", "$page_attr_kruxdartparam_s1", ["_deoverwatch", "_esoverwatch", "_froverwatch", "_ittheoverwatchshareduniverse", "_jaoverwatch", "_overwatch", "_overwatchfanon", "_overwatchlore598", "_ploverwatchgame", "_ptbroverwatch", "_ruoverwatch"]]
            ]]]
        }, {
            "id": "rnu3tpff2",
            "test": ["and", ["and", ["or", ["intersects", "$page_attr_kruxDartParam_age:,", ["25-34"]]],
                ["and", ["intersects", "$page_attr_kruxdartparam_s0", ["gaming"]],
                    ["intersects", "$page_attr_kruxDartParam_sex:,", ["Male", "m*", "male", "male", "male", "male", "male", "male", "male", "male", "male", "male", "male", "male", "male"]]
                ]
            ]]
        }, {
            "id": "o7y5muybh",
            "test": ["and", ["and", ["or", [],
                ["intersects", "$page_attr_keywords:,", ["heroes of the storm", "kerrigan (heroes of the storm)"]]
            ]]]
        }, {
            "id": "o7y5pf9j8",
            "test": ["and", ["and", ["or", [],
                ["intersects", "$page_attr_keywords:,", ["overwatch"]]
            ]]]
        }, {
            "id": "o7y5khdim",
            "test": ["and", ["and", ["or", [],
                ["intersects", "$page_attr_kruxdartparam_s1", ["_hearthstone"]],
                ["intersects", "$page_attr_keywords:,", ["hearthstone", "hearthstone (game)", "hearthstone patch notes: 1.0.0.4944", "hearthstone wiki", "hearthstone-alleria-windrunner.png", "hearthstone: heroes of warcraft", "hearthstone: heroes of warcraft wiki", "icon-hearthstone-22x22.png", "user blog:raylan13/how to dominate at hearthstone"]],
                ["intersects", "$page_attr__kxref", ["hearthstoneheroes.de", "hearthstoneplayers.com", "hearthstonetopdecks.com"]]
            ]]]
        }, {
            "id": "rh8ipsb6n",
            "test": ["and", ["and", ["or", []]]]
        }, {
            "id": "rj2qjrbj5",
            "test": ["and", ["and", ["or", ["intersects", "$page_attr_keywords:,", ["stephen king"]]]]]
        }, {
            "id": "p4lioegw0",
            "test": ["and", ["and", ["or", []]]]
        }],
        "services": {
            "userdata": "//cdn.krxd.net/userdata/get",
            "contentConnector": "https://connector.krxd.net/content_connector",
            "stats": "//apiservices.krxd.net/stats",
            "optout": "//cdn.krxd.net/userdata/optout/status",
            "event": "//beacon.krxd.net/event.gif",
            "set_optout": "https://consumer.krxd.net/consumer/optout",
            "data": "//beacon.krxd.net/data.gif",
            "link_hb_stats": "//beacon.krxd.net/link_bidder_stats.gif",
            "userData": "//cdn.krxd.net/userdata/get",
            "link_hb_mas": "https://link.krxd.net/hb",
            "config": "//cdn.krxd.net/controltag/{{ confid }}.js",
            "social": "//beacon.krxd.net/social.gif",
            "addSegment": "//cdn.krxd.net/userdata/add",
            "pixel": "//beacon.krxd.net/pixel.gif",
            "um": "https://usermatch.krxd.net/um/v2",
            "controltag": "//cdn.krxd.net/ctjs/controltag.js.{hash}",
            "loopback": "https://consumer.krxd.net/consumer/tmp_cookie",
            "remove": "https://consumer.krxd.net/consumer/remove/44c1a380-770f-11df-93f2-0800200c9a66",
            "click": "https://apiservices.krxd.net/click_tracker/track",
            "stats_export": "//beacon.krxd.net/controltag_stats.gif",
            "userdataApi": "//cdn.krxd.net/userdata/v1/segments/get",
            "cookie": "//beacon.krxd.net/cookie2json",
            "proxy": "//cdn.krxd.net/partnerjs/xdi",
            "consent_get": "https://consumer.krxd.net/consent/get/44c1a380-770f-11df-93f2-0800200c9a66",
            "consent_set": "https://consumer.krxd.net/consent/set/44c1a380-770f-11df-93f2-0800200c9a66",
            "is_optout": "https://beacon.krxd.net/optout_check",
            "impression": "//beacon.krxd.net/ad_impression.gif",
            "transaction": "//beacon.krxd.net/transaction.gif",
            "log": "//jslog.krxd.net/jslog.gif",
            "portability": "https://consumer.krxd.net/consumer/portability/44c1a380-770f-11df-93f2-0800200c9a66",
            "set_optin": "https://consumer.krxd.net/consumer/optin",
            "usermatch": "//beacon.krxd.net/usermatch.gif"
        },
        "experiments": [],
        "site": {
            "name": "Fandom",
            "cap": 255,
            "id": 1426736,
            "organization_id": 895,
            "uid": "KPSUiAKl"
        },
        "tags": [{
            "id": 21417,
            "name": "WAM",
            "content": "<script> Krux('admEvent', 'IU8tGHdV', { }); </script>",
            "target": "",
            "target_action": "append",
            "timing": "asap",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": false,
            "criteria": ["and", ["and", ["or", ["contains", "$url", "http://www.wikia.com/WAM"]]]],
            "collects_data": true
        }, {
            "id": 21436,
            "name": "Yahoo user match",
            "content": "<script>\r\n/*\r\nCryptoJS v3.1.2\r\ncode.google.com/p/crypto-js\r\n(c) 2009-2013 by Jeff Mott. All rights reserved.\r\ncode.google.com/p/crypto-js/wiki/License\r\n*/\r\nvar CryptoJS=CryptoJS||function(g,l){var e={},d=e.lib={},m=function(){},k=d.Base={extend:function(a){m.prototype=this;var c=new m;a&&c.mixIn(a);c.hasOwnProperty(\"init\")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty(\"toString\")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},\r\np=d.WordArray=k.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=l?c:4*a.length},toString:function(a){return(a||n).stringify(this)},concat:function(a){var c=this.words,q=a.words,f=this.sigBytes;a=a.sigBytes;this.clamp();if(f%4)for(var b=0;b<a;b++)c[f+b>>>2]|=(q[b>>>2]>>>24-8*(b%4)&255)<<24-8*((f+b)%4);else if(65535<q.length)for(b=0;b<a;b+=4)c[f+b>>>2]=q[b>>>2];else c.push.apply(c,q);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<\r\n32-8*(c%4);a.length=g.ceil(c/4)},clone:function(){var a=k.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],b=0;b<a;b+=4)c.push(4294967296*g.random()|0);return new p.init(c,a)}}),b=e.enc={},n=b.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],f=0;f<a;f++){var d=c[f>>>2]>>>24-8*(f%4)&255;b.push((d>>>4).toString(16));b.push((d&15).toString(16))}return b.join(\"\")},parse:function(a){for(var c=a.length,b=[],f=0;f<c;f+=2)b[f>>>3]|=parseInt(a.substr(f,\r\n2),16)<<24-4*(f%8);return new p.init(b,c/2)}},j=b.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],f=0;f<a;f++)b.push(String.fromCharCode(c[f>>>2]>>>24-8*(f%4)&255));return b.join()},parse:function(a){for(var c=a.length,b=[],f=0;f<c;f++)b[f>>>2]|=(a.charCodeAt(f)&255)<<24-8*(f%4);return new p.init(b,c)}},h=b.Utf8={stringify:function(a){try{return decodeURIComponent(escape(j.stringify(a)))}catch(c){throw Error(\"Malformed UTF-8 data\");}},parse:function(a){return j.parse(unescape(encodeURIComponent(a)))}},\r\nr=d.BufferedBlockAlgorithm=k.extend({reset:function(){this._data=new p.init;this._nDataBytes=0},_append:function(a){\"string\"==typeof a&&(a=h.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,b=c.words,f=c.sigBytes,d=this.blockSize,e=f/(4*d),e=a?g.ceil(e):g.max((e|0)-this._minBufferSize,0);a=e*d;f=g.min(4*a,f);if(a){for(var k=0;k<a;k+=d)this._doProcessBlock(b,k);k=b.splice(0,a);c.sigBytes-=f}return new p.init(k,f)},clone:function(){var a=k.clone.call(this);\r\na._data=this._data.clone();return a},_minBufferSize:0});d.Hasher=r.extend({cfg:k.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){r.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,d){return(new a.init(d)).finalize(b)}},_createHmacHelper:function(a){return function(b,d){return(new s.HMAC.init(a,\r\nd)).finalize(b)}}});var s=e.algo={};return e}(Math);\r\n(function(){var g=CryptoJS,l=g.lib,e=l.WordArray,d=l.Hasher,m=[],l=g.algo.SHA1=d.extend({_doReset:function(){this._hash=new e.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(d,e){for(var b=this._hash.words,n=b[0],j=b[1],h=b[2],g=b[3],l=b[4],a=0;80>a;a++){if(16>a)m[a]=d[e+a]|0;else{var c=m[a-3]^m[a-8]^m[a-14]^m[a-16];m[a]=c<<1|c>>>31}c=(n<<5|n>>>27)+l+m[a];c=20>a?c+((j&h|~j&g)+1518500249):40>a?c+((j^h^g)+1859775393):60>a?c+((j&h|j&g|h&g)-1894007588):c+((j^h^\r\ng)-899497514);l=g;g=h;h=j<<30|j>>>2;j=n;n=c}b[0]=b[0]+n|0;b[1]=b[1]+j|0;b[2]=b[2]+h|0;b[3]=b[3]+g|0;b[4]=b[4]+l|0},_doFinalize:function(){var d=this._data,e=d.words,b=8*this._nDataBytes,g=8*d.sigBytes;e[g>>>5]|=128<<24-g%32;e[(g+64>>>9<<4)+14]=Math.floor(b/4294967296);e[(g+64>>>9<<4)+15]=b;d.sigBytes=4*e.length;this._process();return this._hash},clone:function(){var e=d.clone.call(this);e._hash=this._hash.clone();return e}});g.SHA1=d._createHelper(l);g.HmacSHA1=d._createHmacHelper(l)})();\r\n(function(){var g=CryptoJS,l=g.enc.Utf8;g.algo.HMAC=g.lib.Base.extend({init:function(e,d){e=this._hasher=new e.init;\"string\"==typeof d&&(d=l.parse(d));var g=e.blockSize,k=4*g;d.sigBytes>k&&(d=e.finalize(d));d.clamp();for(var p=this._oKey=d.clone(),b=this._iKey=d.clone(),n=p.words,j=b.words,h=0;h<g;h++)n[h]^=1549556828,j[h]^=909522486;p.sigBytes=b.sigBytes=k;this.reset()},reset:function(){var e=this._hasher;e.reset();e.update(this._iKey)},update:function(e){this._hasher.update(e);return this},finalize:function(e){var d=\r\nthis._hasher;e=d.finalize(e);d.reset();return d.finalize(this._oKey.clone().concat(e))}})})();\r\n(function() {\r\n  var injectScript = function(src, cb) {\r\n    var scriptnode = document.createElement('script');\r\n    scriptnode.src = src;\r\n\r\n    scriptnode.onload = scriptnode.onreadystatechange = function() {\r\n      var state = scriptnode.readyState;\r\n      if (!cb.done && (!state || /loaded|complete/.test(state))) {\r\n        cb.done = true;\r\n        cb();\r\n      }\r\n    };\r\n    var sibling = document.getElementsByTagName('script')[0];\r\n    sibling.parentNode.insertBefore(scriptnode, sibling);\r\n  };\r\n\r\n  var injectImg = function(src) {\r\n    new Image().src = src;\r\n  };\r\n\r\n  var Krux = window.Krux;\r\n  if (!!Krux) {\r\n    var kuid = Krux('get', 'user');\r\n    if (!!kuid) {\r\n      var prefix = location.protocol === 'https:' ? \"https:\" : \"http:\";\r\n      var callback_url = encodeURIComponent(prefix + \"//beacon.krxd.net/usermatch.gif\");\r\n      var ttl = Math.floor((new Date().getTime())/ 1000) + 15 * 60;\r\n      var params = 'user_id=' + kuid + '&provider_id=654689&callback=' + callback_url + '&type=redirect&' + 'TTL=' + ttl;\r\n      var hash = CryptoJS.HmacSHA1(params, '_h_b4yvlZ51p8qTHW99PvozJLq3x0NGWQGk1QGrA2Xk-');\r\n      // Must break the thread to avoid capturing the postscribe doc.write.\r\n      setTimeout(function() {\r\n        var oDocWrite = document.write;\r\n        document.write = function(img) {\r\n          var matches = String(img).match(/img [^>]*src=(?:'|\")([^'\"]+)/i);\r\n          if (matches) {\r\n            injectImg(matches[1]);\r\n            document.write = oDocWrite;\r\n          }\r\n          else {\r\n            return oDocWrite.apply(document, arguments);\r\n          }\r\n        };\r\n        injectScript(\"//ads.yahoo.com/v0/get-user-id?\" + params + \"&sigver=0&sig=\" + hash.toString(), function() {\r\n          document.write = oDocWrite;\r\n        });\r\n      }, 25);\r\n    }\r\n  }\r\n})();\r\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "asap",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": ["and", ["and", ["and", ["<=", "$frequency", 3]]]],
            "collects_data": true
        }, {
            "id": 21462,
            "name": "x+1 user match",
            "content": "",
            "target": "",
            "target_action": "append",
            "timing": "asap",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": ["and", ["and", ["and", ["<=", "$frequency", 3]]]],
            "collects_data": true
        }, {
            "id": 21435,
            "name": "DTC",
            "content": "<script>\n\n(function() {\n\nKrux('scrape', { \"page_attr_kruxdartparam_ae3\": {js_global: \"kruxDartParam_ae3\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_s0\": {js_global: \"kruxDartParam_s0\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_s1\": {js_global: \"kruxDartParam_s1\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_s2\": {js_global: \"kruxDartParam_s2\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_gnre\": {js_global: \"kruxDartParam_gnre\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_egnre\": {js_global: \"kruxDartParam_egnre\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_pform\": {js_global: \"kruxDartParam_pform\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_pub\": {js_global: \"kruxDartParam_pub\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_dev\": {js_global: \"kruxDartParam_dev\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_sub\": {js_global: \"kruxDartParam_sub\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_esrb\": {js_global: \"kruxDartParam_esrb\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_media\": {js_global: \"kruxDartParam_media\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_de\": {js_global: \"kruxDartParam_de\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_wpage\": {js_global: \"kruxDartParam_wpage\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_cat\": {js_global: \"kruxDartParam_cat\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_sex\": {js_global: \"kruxDartParam_sex\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_age\": {js_global: \"kruxDartParam_age\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_eth\": {js_global: \"kruxDartParam_eth\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_hhi\": {js_global: \"kruxDartParam_hhi\"}});\n\nKrux('scrape', { \"page_attr_kruxdartparam_tv\": {js_global: \"kruxDartParam_tv\"}});\nKrux('scrape', { \"page_attr_kruxdartparam_theme\": {js_global: \"kruxDartParam_theme\"}});\n\n\nKrux('scrape', { \"page_attr_domain\": {url_domain: 2} });\n\n})();\n\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onready",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 21344,
            "name": "Krux Attribute Scraper",
            "content": "<script>\r\n    (function(){ \r\n        var _ = Krux('require:underscore');\r\n        var parseZone = function(dartZone){\r\n            var out = {};\r\n            var split = dartZone.split(\"/\");\r\n            for (var i = 0; i < split.length; i++){\r\n                switch(i){\r\n                  case 0: out.site = split[i]; break;\r\n                  case 1: out.section = split[i]; break;\r\n                  case 2: out.subSection = split[i]; break;\r\n                  default: out[\"subSection\"+(i-1)] = split[i]; break;\r\n                }\r\n            }\r\n            return out;\r\n        };         \r\n        \r\n        var parseKeyValues = function(str, amp, eq){\r\n                        amp = amp || '&';\r\n            eq  = eq  || '=';\r\n            var ret = {};\r\n            var rgx = new RegExp(amp+'*([^'+eq+amp+']+)'+eq+'([^'+eq+amp+']+)'+amp+'*', 'g');\r\n            (\"\" + str).replace(rgx, function ($0, key, value) {\r\n                ret[key] = \r\n                  !ret[key]           ? value : \r\n                  _.isArray(ret[key]) ? ret[key].concat([value]) : [ret[key], value];\r\n            });\r\n            for(key in ret){\r\n                if(_.isArray(ret[key])){\r\n                    ret[key] = ret[key].toString();\r\n                }\r\n            }\r\n            return ret;\r\n        };  \r\n        \r\n        Krux.wgDartCustomKeyValues = parseKeyValues(window.wgDartCustomKeyValues || '', ';');\r\n        Krux.wgContentLanguage = window.wgContentLanguage || '';\r\n        Krux.wgPageName = window.wgPageName || '';\r\n        Krux.wgCategories = window.wgCategories && window.wgCategories.toString() || '';              \r\n            \r\n        var scripts = document.getElementsByTagName('script');\r\n        var sAttrs = {};\r\n        for(var i = 0; i < scripts.length; i++){\r\n            var srcUrl = scripts[i].getAttribute('src');\r\n            if(srcUrl && srcUrl.indexOf('http://ad.doubleclick.net') === 0){\r\n                var dfpSrcUrl = srcUrl;\r\n                var zones = parseZone(dfpSrcUrl);\r\n                sAttrs = parseKeyValues(zones.subSection5, ';');\r\n                break;\r\n            }\r\n        }\r\n        Krux.s0 = sAttrs.s0;\r\n        Krux.s1 = sAttrs.s1;\r\n        Krux.s2 = sAttrs.s2;    \r\n             \r\n        var metaTags = document.getElementsByTagName('meta');\r\n        var keyValsStr = '';\r\n        for(var i = 0; i < metaTags.length; i++){\r\n            var nameAttr = metaTags[i].getAttribute('name');\r\n            if(nameAttr === 'keywords'){\r\n                keyValsStr = metaTags[i].getAttribute('content') || '';\r\n                break;\r\n            }\r\n        }\r\n        Krux.keyVals = keyValsStr;        \r\n    })();\r\n    Krux('scrape', {\r\n        page_attr_egenre: {\r\n            javascript: \"Krux.wgDartCustomKeyValues.egnre\"\r\n        },\r\n        page_attr_genre: {\r\n            javascript: \"Krux.wgDartCustomKeyValues.gnre\"\r\n        },\r\n        page_attr_platform: {\r\n            javascript: \"Krux.wgDartCustomKeyValues.pform\"\r\n        },\r\n        page_attr_publisher: {\r\n            javascript: \"Krux.wgDartCustomKeyValues.pub\"\r\n        },\r\n        page_attr_developer: {\r\n            javascript: \"Krux.wgDartCustomKeyValues.dev\"\r\n        },\r\n        page_attr_subject: {\r\n            javascript: \"Krux.wgDartCustomKeyValues.sub\"\r\n        },\r\n        page_attr_esrb: {\r\n            javascript: \"Krux.wgDartCustomKeyValues.esrb\"\r\n        },\r\n        page_attr_media: {\r\n            javascript: \"Krux.wgDartCustomKeyValues.media\"\r\n        },\r\n        page_attr_lang: {\r\n            javascript: \"Krux.wgContentLanguage\"\r\n        },\r\n        page_attr_wpage: {\r\n            javascript: \"Krux.wgPageName\"\r\n        },\r\n        page_attr_cat: {\r\n            javascript: \"Krux.wgCategories\"\r\n        },\r\n        page_attr_s0: {\r\n            javascript: \"Krux.s0\"\r\n        },\r\n        page_attr_s1: {\r\n            javascript: \"Krux.s1\"\r\n        },\r\n        page_attr_s2: {\r\n            javascript: \"Krux.s2\"\r\n        },\r\n        page_attr_keywords: {\r\n            javascript: \"Krux.keyVals\"\r\n        },\r\n        page_attr_sex: {\r\n            javascript: \"Krux.wgDartCustomKeyValues.sex\"\r\n        },\r\n        page_attr_age: {\r\n            javascript: \"Krux.wgDartCustomKeyValues.age\"\r\n        },\r\n        page_attr_eth: {\r\n            javascript: \"Krux.wgDartCustomKeyValues.eth\"\r\n        },\r\n        page_attr_hhi: {\r\n            javascript: \"Krux.wgDartCustomKeyValues.hhi\"\r\n        },\r\n        page_attr_onSiteSearch: {\r\n            url_param: \"search\"\r\n        }   \r\n    });\r\n\r\n// Using Dart s0 to produce page attribute dart_s0\r\nKrux('scrape', { \"page_attr_dart_s0\": {dart: \"s0\"}});\r\n// Using Dart s1 to produce page attribute dart_s1\r\nKrux('scrape', { \"page_attr_dart_s1\": {dart: \"s1\"}});\r\n// Using Dart s2 to produce page attribute dart_s2\r\nKrux('scrape', { \"page_attr_dart_s2\": {dart: \"s2\"}});\r\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 21348,
            "name": "Technographic Data provider tag",
            "content": "<script>\r\n// this tag is intentionally blank\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 21456,
            "name": "Krux Geographic Data provider tag",
            "content": null,
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": ["and", ["and", ["and", ["<=", "$frequency", 3]]]],
            "collects_data": true
        }, {
            "id": 21465,
            "name": "Visual DNA (Wikia) provider tag",
            "content": null,
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": ["and", ["and", ["and", ["<=", "$frequency", 3]]]],
            "collects_data": true
        }, {
            "id": 21477,
            "name": "nielsen_usermatch",
            "content": "<script>\r\n(function() {\r\n    var kuid = Krux('get', 'user');\r\n    if (kuid) {\r\n        var prefix = window.location.protocol == 'https:' ? \"https:\" :\"http:\";\r\n        var r_url = prefix + '//secure-us.imrworldwide.com/cgi-bin/m?ci=ent599834&c1=kxkuid,'\r\n        var kurl = r_url + kuid;\r\n        var i = new Image();\r\n        i.src = kurl;\r\n    }\r\n})();\r\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": ["and", ["and", ["and", ["<=", "$frequency", 3]]]],
            "collects_data": true
        }, {
            "id": 21544,
            "name": "DataLogix for Kellogg",
            "content": "<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=d7158cb7-a851-4e3c-b7ab-cc9e815b2399&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gwjn34gwjnh86&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": ["and", ["and", ["and", ["<=", "$frequency", 3]]]],
            "collects_data": true
        }, {
            "id": 21551,
            "name": "Neustar Custom Connect",
            "content": "<script type=\"text/javascript\">\r\n(function() {\r\n    (new Image()).src = '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n})();\r\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": ["and", ["and", ["and", ["<=", "$frequency", 1]]]],
            "collects_data": true
        }, {
            "id": 21552,
            "name": "BrightRoll User Match",
            "content": "<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n        if (kuid) {\r\n           var url = prefix + '//pix.btrll.com/partner/868092.png';\r\n           (new Image()).src = url;\r\n        }\r\n})();\r\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": ["and", ["and", ["and", ["<=", "$frequency", 1]]]],
            "collects_data": true
        }, {
            "id": 21557,
            "name": "Fandom",
            "content": "<img src='https://beacon.krxd.net/event.gif?event_id=KPRU8DbB&event_type=dmtc' width=0 height=0 />\n\n<!-- BEGIN Segment: Fandom -->\n  <img src=\"https://segs.btrll.com/v1/tpix/-/-/-/-/-/sid.6614149\" height=\"1\" width=\"1\" />\n<!-- END Segment: Fandom -->",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": false,
            "internal": false,
            "criteria": ["and", ["and", ["or", ["contains", "$url", "http://fandom.wikia.com"]]]],
            "collects_data": true
        }, {
            "id": 21574,
            "name": "Fandom Fallout Cross Fans",
            "content": "<img src='https://beacon.krxd.net/event.gif?event_id=Ka6TOzOy&event_type=cact' width=0 height=0 />",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": false,
            "internal": false,
            "criteria": ["and", ["and", ["or", ["intersects", "$user_segments", ["ovdz4hk9u"]],
                ["intersects", "$user_segments", ["p8w9ms1x6"]]
            ]]],
            "collects_data": true
        }, {
            "id": 21577,
            "name": "DataLogix (8da8b14d-5569-4bec-bcea-722864ee8d06)",
            "content": "<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=8da8b14d-5569-4bec-bcea-722864ee8d06&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iefs40iefsj26&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 21578,
            "name": "DataLogix (bef9f122-393d-4c45-8d8d-32d8be7ac433)",
            "content": "<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=bef9f122-393d-4c45-8d8d-32d8be7ac433&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iyzu39iyzud95&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 21579,
            "name": "DataLogix (8bf57916-aac8-4f01-a386-4baf103b3e1f)",
            "content": "<script>\r\n    (function() {\r\n        var allowUserMatch = function() {\r\n            var GDN_SITE_ID = '1282650';\r\n \r\n            if (Krux('get', 'config').params.client_type === 'marketer') {\r\n                try {\r\n                    var params = Krux('require:marketer').getParams(\r\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\r\n                    );\r\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\r\n                }\r\n                catch (e) {\r\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\r\n                }\r\n            }\r\n            return true;\r\n        };\r\n         \r\n        var kuid = Krux('get', 'user');\r\n        if (allowUserMatch() && kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=8bf57916-aac8-4f01-a386-4baf103b3e1f&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=bckw15bckwu20&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": ["and", ["and", ["and", ["<=", "$frequency", 3]]]],
            "collects_data": true
        }, {
            "id": 21580,
            "name": "DataLogix (d7158cb7-a851-4e3c-b7ab-cc9e815b2399)",
            "content": "<script>\r\n    (function() {\r\n        var allowUserMatch = function() {\r\n            var GDN_SITE_ID = '1282650';\r\n\r\n            if (Krux('get', 'config').params.client_type === 'marketer') {\r\n                try {\r\n                    var params = Krux('require:marketer').getParams(\r\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\r\n                    );\r\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\r\n                }\r\n                catch (e) {\r\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\r\n                }\r\n            }\r\n            return true;\r\n        };\r\n\r\n        var kuid = Krux('get', 'user');\r\n        if (allowUserMatch() && kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=d7158cb7-a851-4e3c-b7ab-cc9e815b2399&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gwjn34gwjnh86&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": ["and", ["and", ["and", ["<=", "$frequency", 3]]]],
            "collects_data": true
        }, {
            "id": 21581,
            "name": "DataLogix (536f0daa-aaaa-4d9e-9a25-dde40646786a)",
            "content": "<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=536f0daa-aaaa-4d9e-9a25-dde40646786a&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iefs40iefsj26&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 21582,
            "name": "DataLogix (7c6392c9-e878-492c-8b14-bf06e3828ebd)",
            "content": "<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=7c6392c9-e878-492c-8b14-bf06e3828ebd&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=rowp70rowpu60&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 21583,
            "name": "DataLogix (bb8ae0e2-9cd7-45b2-ad37-7737269627d8)",
            "content": "<script>\r\n    (function() {\r\n        var allowUserMatch = function() {\r\n            var GDN_SITE_ID = '1282650';\r\n\r\n            if (Krux('get', 'config').params.client_type === 'marketer') {\r\n                try {\r\n                    var params = Krux('require:marketer').getParams(\r\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\r\n                    );\r\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\r\n                }\r\n                catch (e) {\r\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\r\n                }\r\n            }\r\n            return true;\r\n        };\r\n        \r\n        var kuid = Krux('get', 'user');\r\n        if (allowUserMatch() && kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=bb8ae0e2-9cd7-45b2-ad37-7737269627d8&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=rsxs71rsxsk73&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>",
            "target": "",
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": ["and", ["and", ["and", ["<=", "$frequency", 3]]]],
            "collects_data": true
        }],
        "usermatch_tags": [{
            "id": 5,
            "name": "DataXu User Match",
            "content": "<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var prefix = location.protocol;\r\n        if (kuid) {\r\n           var dxu_url = '//pm.w55c.net/ping_match.gif?st=Krux&rurl=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=dataxu&uid=_wfivefivec_';\r\n           var i = new Image();\r\n           i.src = dxu_url;\r\n        }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 6,
            "name": "Google User Match",
            "content": "<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 15,
            "name": "TheTradeDesk User Match",
            "content": "<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar consent = Krux('iab:urlParams');\r\nif (kuid) {\r\nif(!consent){\r\nconsent = \"\";\r\n}\r\nvar p = location.protocol == 'https:' ? 'https:' : 'http:';\r\nvar purl = '//match.adsrvr.org/track/cmf/generic?ttd_pid=krux&ttd_tpi=1';\r\n(new Image()).src  = p + purl + consent; \r\n}\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 21,
            "name": "Acxiom",
            "content": "<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 23,
            "name": "BlueKai S2S",
            "content": "<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 25,
            "name": "eXelate Media",
            "content": "<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: \"//loadm.exelator.com/load\",\r\n      data: {\r\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\r\n          buid: kuid,\r\n          p: '204',\r\n          g: '270',\r\n          j: '0'\r\n      }});\r\n  }\r\n  })();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 34,
            "name": "Comscore Data Tag",
            "content": "<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  var cbust = Math.round(new Date().getTime() / 1000);\r\n  var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\r\n  var url = prefix == 'https:' ? '//sb.scorecardresearch.com/p' : '//b.scorecardresearch.com/p';\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: url,\r\n      data: {\r\n          c1: '9',\r\n          c2: '8188709',\r\n          cs_xi: kuid,\r\n          rn: cbust\r\n      }});\r\n  }\r\n  })();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 51,
            "name": "Eyeota User Match",
            "content": "<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n\r\n        if (kuid) {\r\n           var url = prefix + '//ps.eyeota.net/match?bid=i0r4o4v&uid=' + kuid;\r\n           (new Image()).src = url;\r\n        }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 71,
            "name": "AppNexus Connect",
            "content": "<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\r\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl\r\n            var i = new Image();\r\n            i.src = appnexus_url;\r\n        }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 76,
            "name": "LiveRamp User Matching",
            "content": "<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 77,
            "name": "MediaMath User Match",
            "content": "<script>\r\n\r\n(function(){\r\n\tvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n\tvar url = prefix + '//sync.mathtag.com/sync/img?redir=' + prefix + '%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner%3Dmediamath%26mmuuid%3D%5BMM_UUID%5D';\r\n\t(new Image()).src = url;\r\n})();\r\n\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 9,
            "name": "RocketFuel User Match",
            "content": "<script>\r\n(function() {\r\n    var i = new Image();\r\n    i.src = '//p.rfihub.com/cm?in=1&pub=6919';\r\n})();\r\n\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 2,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 10,
            "name": "Rubicon User Match",
            "content": "<script>\r\n(function(){\r\n  if (window.Krux) {\r\n    var kuid = window.Krux('get', 'user');\r\n    if (kuid && typeof kuid != 'undefined') {\r\n       var rubicon_url = 'https://token.rubiconproject.com/token?pid=27384&puid=' + kuid;\r\n       var i = new Image();\r\n       i.src = rubicon_url;\r\n    }\r\n  }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 2,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 16,
            "name": "Turn S2S User Match",
            "content": "<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      (new Image()).src='//d.turn.com/r/dd/id/L2NzaWQvMS9jaWQvMjg0OTE3NDgvdC8y/dpuid/' + kuid;\r\n  }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 2,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 20,
            "name": "Yahoo! DataX User Match",
            "content": "<script>\r\n(function(){\r\n    var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = 'https:';\r\n            var rurl = prefix + '//cms.analytics.yahoo.com/cms?partner_id=KRUX';\r\n            var i = new Image();\r\n            i.src = rurl;\r\n        }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 2,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 32,
            "name": "Casale (Index Exchange) user match",
            "content": "<script>\n(function(){\n\n   var kuid = Krux('get', 'user');\n   if (kuid) {\n      var prefix = window.location.protocol;\n      var casale_url = '';\n      var kurl = '//beacon.krxd.net/usermatch.gif?partner=casale&partner_uid=__UID__';\n      var encode_krux_url = encodeURIComponent(prefix + kurl);\n      \n      if (prefix == \"http:\") {\n         casale_url = prefix + '//ssum.casalemedia.com/usermatchredir?s=183716&cb='+ encode_krux_url;\n      }\n      else if (prefix == \"https:\") { \n         casale_url = prefix + '//ssum-sec.casalemedia.com/usermatchredir?s=183716&cb='+ encode_krux_url; \n      }\n\n      new Image().src = casale_url;\n   }\n\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 2,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 54,
            "name": "Survata User Match",
            "content": "<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n        if (kuid) {\n           var url = prefix + '//px.surveywall-api.survata.com/k';\n           (new Image()).src = url;\n        }\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 2,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 27,
            "name": "Visual DNA",
            "content": "<script>\nnew Image().src = 'https://usermatch.krxd.net/um/v2?partner=vdna';\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 3,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 72,
            "name": "AppNexus Extension User Match",
            "content": "<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  var cbust = Math.round(new Date().getTime() / 1000);\n  if (kuid) {\n    Krux('require:http').pixel({\n      url: \"//ib.adnxs.com/pxj\",\n      data: {\n          bidder: '140',\n          seg: '381342',\n          action: \"setuid('\" + kuid + \"')\",\n          bust: cbust\n      }});\n  }\n  })();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 3,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 82,
            "name": "DataLogix - Legacy",
            "content": "<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 3,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }],
        "link": {
            "adslots": {},
            "bidders": {}
        }
    };

    for (var i = 0, tags = config.tags, len = tags.length, tag;
        (tag = tags[i]); ++i) {
        if (String(tag.id) in cs) {
            tag.content = cs[tag.id];
        }
    }


    var esiGeo = String(function() {
        /*
           <esi:include src="/geoip_esi"/>
          */
    }).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

    if (esiGeo) {
        log('Got a request for:', esiGeo, 'adding geo to config.');
        try {
            config.geo = w.JSON.parse(esiGeo);
        } catch (__) {

            log('Unable to parse geo from:', config.geo);
            config.geo = {};
        }
    }



    var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

    if (!proxy || true) {


        load('//cdn.krxd.net/ctjs/controltag.js.05f9d0dad02f8a1b0b028b868bc3a3e2', function() {
            log('Loaded alpha controltag resource');
            Krux('config', config);
        });

    }

})(window, (function() {
    var obj = {};

    return obj;
})());